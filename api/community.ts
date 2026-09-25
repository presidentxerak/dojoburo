// /api/community · le fil de la Communauté.
//
//   GET  ?action=feed&cat=&q=&cursor=     le fil (épinglées d'abord), ouvert à tous
//   GET  ?action=post&id=                 une publication et ses commentaires
//   GET  ?action=me                       mon nom de membre, suis-je admin (compte)
//   POST ?action=join     { name }        choisir ou changer son nom (compte)
//   POST ?action=post     { category, title, body }          (compte)
//   POST ?action=comment  { postId, parentId?, body }        (compte)
//   POST ?action=like     { type: 'post'|'comment', id }     (compte, bascule)
//   POST ?action=pin      { id, pinned }                     (admin)
//   POST ?action=delete   { type, id }                       (auteur ou admin)
//
// LA LECTURE EST OUVERTE, L'ÉCRITURE DEMANDE UN COMPTE · demandé : « compte
// obligatoire » pour participer. Le compte est un jeton Privy vérifié ici ;
// sans lui, 401. Sans base, 503 « not_configured » partout ; sans Privy côté
// serveur, les écritures répondent 503 « auth » : jamais un faux succès.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { createHash } from 'node:crypto'
import { getPool, dbConfigured } from './_lib/db.js'
import { originAllowed } from './_lib/origin.js'
import { allow as rateAllow } from './_lib/ratelimit.js'
import { verifyPrivyToken, privyEnabled } from './_lib/authz.js'
import { verifiedEmailOf, canVerifyEmail } from './_lib/privyUser.js'
import { ADMIN_EMAILS } from './_lib/admins.js'
import {
  LIMITS, RATES, isId, isCategory, validateName, validateBio, validatePost, validateComment, cleanQuery,
  encodeCursor, decodeCursor, serializePost, serializeComment, serializeMember, levelOfPoints,
  type PostRow, type CommentRow, type MemberRow,
} from './_lib/community.js'

export const config = { maxDuration: 15 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
/** Des comptes admins désignés directement (identifiants Privy séparés par des
 *  virgules), en plus des adresses opérateur quand Privy peut les vérifier. */
const ADMIN_DIDS = (ENV.COMMUNITY_ADMIN_DIDS || '').split(',').map((s) => s.trim()).filter(Boolean)
const SALT = ENV.CLAN_IP_SALT || ENV.CONNECTOR_ENC_KEY || ENV.DATABASE_URL || 'community'
const MAX_BODY = 16 * 1024

type Rate = keyof typeof RATES

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    if (req.method === 'OPTIONS') return send(res, 204, {})
    const origin = header(req, 'origin')
    const host = header(req, 'host')
    if (origin && !originAllowed(origin, host, ALLOWED_ORIGIN)) return send(res, 403, { ok: false, error: 'origin' })
    const method = req.method || 'GET'
    if (method !== 'GET' && method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

    if (!dbConfigured()) return send(res, 503, { ok: false, error: 'not_configured' })

    const url = new URL(req.url || '/', `https://${host || 'localhost'}`)
    const action = url.searchParams.get('action') || (method === 'GET' ? 'feed' : '')
    const ipKey = createHash('sha256').update(`community:ip:${SALT}:${clientIp(req)}`).digest('hex')

    // QUI APPELLE · facultatif pour lire (pour savoir ce que « j'aime »),
    // obligatoire pour écrire.
    const token = bearer(req)
    const me = token && privyEnabled() ? await verifyPrivyToken(token) : null

    if (method === 'GET') {
      if (!(await rateAllow(`community:read:${me || ipKey}`, RATES.read.max, RATES.read.windowMs))) return send(res, 429, { ok: false, error: 'rate' })
      if (action === 'feed') return await feed(res, url, me)
      if (action === 'post') return await onePost(res, url, me)
      if (action === 'members') return await members(res, url)
      if (action === 'member') return await oneMember(res, url, me)
      if (action === 'leaderboard') return await leaderboard(res, me)
      if (action === 'me') {
        if (!privyEnabled()) return send(res, 503, { ok: false, error: 'not_configured', detail: 'auth' })
        if (!me) return send(res, 401, { ok: false, error: 'auth' })
        return await whoAmI(res, me)
      }
      return send(res, 400, { ok: false, error: 'action' })
    }

    // ÉCRIRE · un compte, prouvé par le jeton.
    if (!privyEnabled()) return send(res, 503, { ok: false, error: 'not_configured', detail: 'auth' })
    if (!me) return send(res, 401, { ok: false, error: 'auth' })

    let body: unknown
    try { body = JSON.parse((await readBody(req)) || '{}') } catch { return send(res, 400, { ok: false, error: 'bad_json' }) }

    if (action === 'join') return await join(res, me, body)
    if (action === 'profile') return await editProfile(res, me, body)
    if (action === 'post') return await createPost(res, me, body)
    if (action === 'comment') return await createComment(res, me, body)
    if (action === 'like') return await toggleLike(res, me, body)
    if (action === 'pin') return await pin(res, me, body)
    if (action === 'delete') return await remove(res, me, body)
    return send(res, 400, { ok: false, error: 'action' })
  } catch {
    return send(res, 500, { ok: false, error: 'server' })
  }
}

/* ---- lire ------------------------------------------------------------------ */

const POST_COLS = `p.id, p.category, p.title, p.body, p.pinned, p.likes, p.comments, p.created_at, p.edited_at,
  p.author_did, m.name as author_name, m.handle as author_handle, m.points as author_points`

async function feed(res: ServerResponse, url: URL, me: string | null) {
  const cat = url.searchParams.get('cat')
  const q = cleanQuery(url.searchParams.get('q'))
  const cursor = decodeCursor(url.searchParams.get('cursor'))
  const args: unknown[] = []
  const where = ['not p.deleted']
  if (isCategory(cat)) { args.push(cat); where.push(`p.category = $${args.length}`) }
  if (q) { args.push(q); where.push(`to_tsvector('simple', p.title || ' ' || p.body) @@ websearch_to_tsquery('simple', $${args.length})`) }
  // LES ÉPINGLÉES D'ABORD · seulement en tête du fil, sans recherche ni suite.
  const pinnedFirst = !cursor && !q
  if (cursor) { args.push(cursor.t, cursor.id); where.push(`(p.created_at, p.id) < ($${args.length - 1}::timestamptz, $${args.length}::uuid)`) }
  if (pinnedFirst) where.push('not p.pinned')
  args.push(me || '')
  const likedCol = `exists(select 1 from community_likes l where l.target_type = 'post' and l.target_id = p.id and l.did = $${args.length}) as liked`
  args.push(LIMITS.pageSize + 1)
  const pool = getPool()
  const r = await pool.query(
    `select ${POST_COLS}, ${likedCol} from community_posts p join community_members m on m.did = p.author_did
      where ${where.join(' and ')} order by p.created_at desc, p.id desc limit $${args.length}`,
    args,
  )
  const rows = r.rows as PostRow[]
  const more = rows.length > LIMITS.pageSize
  const page = rows.slice(0, LIMITS.pageSize)
  let pinned: PostRow[] = []
  if (pinnedFirst) {
    const pa: unknown[] = [me || '']
    const pw = ['not p.deleted', 'p.pinned']
    if (isCategory(cat)) { pa.push(cat); pw.push(`p.category = $${pa.length}`) }
    const pr = await pool.query(
      `select ${POST_COLS}, exists(select 1 from community_likes l where l.target_type = 'post' and l.target_id = p.id and l.did = $1) as liked
         from community_posts p join community_members m on m.did = p.author_did
        where ${pw.join(' and ')} order by p.created_at desc limit 5`,
      pa,
    )
    pinned = pr.rows as PostRow[]
  }
  const last = page[page.length - 1]
  return send(res, 200, {
    ok: true,
    pinned: pinned.map((p) => serializePost(p, me, true)),
    posts: page.map((p) => serializePost(p, me, true)),
    next: more && last ? encodeCursor({ t: last.created_at.toISOString(), id: last.id }) : null,
  })
}

async function onePost(res: ServerResponse, url: URL, me: string | null) {
  const id = url.searchParams.get('id')
  if (!isId(id)) return send(res, 400, { ok: false, error: 'post' })
  const pool = getPool()
  const r = await pool.query(
    `select ${POST_COLS}, exists(select 1 from community_likes l where l.target_type = 'post' and l.target_id = p.id and l.did = $2) as liked
       from community_posts p join community_members m on m.did = p.author_did where p.id = $1 and not p.deleted`,
    [id, me || ''],
  )
  if (!r.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  const c = await pool.query(
    `select c.id, c.post_id, c.parent_id, c.body, c.likes, c.deleted, c.created_at, c.author_did, m.name as author_name,
            m.handle as author_handle, m.points as author_points,
            exists(select 1 from community_likes l where l.target_type = 'comment' and l.target_id = c.id and l.did = $2) as liked
       from community_comments c join community_members m on m.did = c.author_did
      where c.post_id = $1 order by c.created_at asc limit 500`,
    [id, me || ''],
  )
  return send(res, 200, {
    ok: true,
    post: serializePost(r.rows[0] as PostRow, me),
    comments: (c.rows as CommentRow[]).map((x) => serializeComment(x, me)),
  })
}

async function whoAmI(res: ServerResponse, me: string) {
  // ÊTRE VU · « en ligne » dans la liste des membres vient de là.
  const r = await getPool().query(
    'update community_members set last_seen_at = now() where did = $1 returning handle, name, bio, points', [me])
  const m = r.rows[0]
  return send(res, 200, {
    ok: true,
    member: m ? { handle: m.handle, name: m.name, bio: m.bio, points: m.points, level: levelOfPoints(m.points).level } : null,
    admin: await isAdmin(me),
  })
}

/* ---- les membres et les classements ----------------------------------------- */

const MEMBER_COLS = 'm.handle, m.name, m.bio, m.points, m.created_at, m.last_seen_at'

async function members(res: ServerResponse, url: URL) {
  const page = Math.max(0, Math.min(200, Number(url.searchParams.get('page')) || 0))
  const q = cleanQuery(url.searchParams.get('q'))
  const args: unknown[] = []
  let where = ''
  if (q) { args.push(`%${q.replace(/[%_\\]/g, '')}%`); where = `where m.name ilike $${args.length}` }
  args.push(LIMITS.membersPage + 1, page * LIMITS.membersPage)
  const r = await getPool().query(
    `select ${MEMBER_COLS} from community_members m ${where}
      order by m.last_seen_at desc limit $${args.length - 1} offset $${args.length}`,
    args,
  )
  const rows = r.rows as MemberRow[]
  const total = await getPool().query('select count(*)::int as n from community_members')
  return send(res, 200, {
    ok: true,
    members: rows.slice(0, LIMITS.membersPage).map((x) => serializeMember(x)),
    more: rows.length > LIMITS.membersPage,
    total: total.rows[0]?.n ?? 0,
  })
}

async function oneMember(res: ServerResponse, url: URL, me: string | null) {
  const handle = url.searchParams.get('id')
  if (!isId(handle)) return send(res, 400, { ok: false, error: 'member' })
  const pool = getPool()
  const r = await pool.query(`select ${MEMBER_COLS}, m.did from community_members m where m.handle = $1`, [handle])
  const m = r.rows[0]
  if (!m) return send(res, 404, { ok: false, error: 'not_found' })
  const counts = await pool.query(
    `select (select count(*)::int from community_posts where author_did = $1 and not deleted) as posts,
            (select count(*)::int from community_comments where author_did = $1 and not deleted) as comments`,
    [m.did],
  )
  const posts = await pool.query(
    `select ${POST_COLS}, false as liked from community_posts p join community_members m on m.did = p.author_did
      where p.author_did = $1 and not p.deleted order by p.created_at desc limit 10`,
    [m.did],
  )
  return send(res, 200, {
    ok: true,
    member: { ...serializeMember(m as MemberRow), posts: counts.rows[0]?.posts ?? 0, comments: counts.rows[0]?.comments ?? 0, me: me === m.did },
    posts: (posts.rows as PostRow[]).map((p) => serializePost(p, me, true)),
  })
}

/** Les classements · les j'aime reçus sur 7 jours, 30 jours, et depuis
 *  toujours (le compteur du membre). */
async function leaderboard(res: ServerResponse, me: string | null) {
  const pool = getPool()
  const period = async (days: number) => {
    const r = await pool.query(
      `select m.handle, m.name, m.points, count(*)::int as won
         from community_likes l join community_members m on m.did = l.recipient_did
        where l.created_at > now() - ($1 || ' days')::interval
        group by m.handle, m.name, m.points order by won desc, m.name asc limit $2`,
      [String(days), LIMITS.board],
    )
    return r.rows.map((x) => ({ handle: x.handle, name: x.name, level: levelOfPoints(x.points).level, points: x.won }))
  }
  const all = await pool.query(
    `select handle, name, points from community_members where points > 0 order by points desc, name asc limit $1`, [LIMITS.board])
  let mine: { points: number; level: number; next: number | null } | null = null
  if (me) {
    const r = await pool.query('select points from community_members where did = $1', [me])
    if (r.rows[0]) mine = { points: r.rows[0].points, ...levelOfPoints(r.rows[0].points) }
  }
  return send(res, 200, {
    ok: true,
    week: await period(7),
    month: await period(30),
    all: all.rows.map((x) => ({ handle: x.handle, name: x.name, level: levelOfPoints(x.points).level, points: x.points })),
    me: mine,
  })
}

async function editProfile(res: ServerResponse, me: string, body: unknown) {
  const b = (body || {}) as { name?: unknown; bio?: unknown }
  const name = validateName(b.name)
  if (typeof name !== 'string') return send(res, 400, { ok: false, error: 'name' })
  const bio = validateBio(b.bio ?? '')
  if (typeof bio !== 'string') return send(res, 400, { ok: false, error: 'bio' })
  const r = await getPool().query('update community_members set name = $2, bio = $3 where did = $1 returning handle', [me, name, bio])
  if (!r.rows[0]) return send(res, 409, { ok: false, error: 'join' })
  return send(res, 200, { ok: true, member: { name, bio } })
}

/* ---- écrire ---------------------------------------------------------------- */

async function limited(kind: Rate, me: string): Promise<boolean> {
  const { max, windowMs } = RATES[kind]
  return rateAllow(`community:${kind}:${me}`, max, windowMs)
}

async function memberName(me: string): Promise<string | null> {
  const r = await getPool().query('select name from community_members where did = $1', [me])
  return r.rows[0]?.name ?? null
}

async function join(res: ServerResponse, me: string, body: unknown) {
  const name = validateName((body as { name?: unknown })?.name)
  if (typeof name !== 'string') return send(res, 400, { ok: false, error: 'name' })
  await getPool().query(
    `insert into community_members (did, name) values ($1, $2)
       on conflict (did) do update set name = excluded.name, last_seen_at = now()`,
    [me, name],
  )
  return send(res, 200, { ok: true, member: { name } })
}

async function createPost(res: ServerResponse, me: string, body: unknown) {
  if (!(await memberName(me))) return send(res, 409, { ok: false, error: 'join' })
  const v = validatePost(body)
  if ('error' in v) return send(res, 400, { ok: false, error: v.error })
  if (!(await limited('post', me))) return send(res, 429, { ok: false, error: 'rate' })
  const r = await getPool().query(
    `insert into community_posts (author_did, category, title, body) values ($1, $2, $3, $4) returning id`,
    [me, v.category, v.title, v.body],
  )
  return send(res, 200, { ok: true, id: r.rows[0].id })
}

async function createComment(res: ServerResponse, me: string, body: unknown) {
  if (!(await memberName(me))) return send(res, 409, { ok: false, error: 'join' })
  const v = validateComment(body)
  if ('error' in v) return send(res, 400, { ok: false, error: v.error })
  if (!(await limited('comment', me))) return send(res, 429, { ok: false, error: 'rate' })
  const pool = getPool()
  const p = await pool.query('select 1 from community_posts where id = $1 and not deleted', [v.postId])
  if (!p.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  // UN SEUL NIVEAU DE RÉPONSE · une réponse à une réponse se range sous le
  // commentaire d'origine, comme sur Skool.
  let parent: string | null = null
  if (v.parentId) {
    const c = await pool.query('select id, parent_id from community_comments where id = $1 and post_id = $2', [v.parentId, v.postId])
    if (!c.rows[0]) return send(res, 400, { ok: false, error: 'parent' })
    parent = c.rows[0].parent_id || c.rows[0].id
  }
  const r = await pool.query(
    'insert into community_comments (post_id, parent_id, author_did, body) values ($1, $2, $3, $4) returning id',
    [v.postId, parent, me, v.body],
  )
  await pool.query('update community_posts set comments = comments + 1, last_activity_at = now() where id = $1', [v.postId])
  return send(res, 200, { ok: true, id: r.rows[0].id })
}

async function toggleLike(res: ServerResponse, me: string, body: unknown) {
  const b = (body || {}) as { type?: unknown; id?: unknown }
  const type = b.type === 'comment' ? 'comment' : b.type === 'post' ? 'post' : null
  if (!type || !isId(b.id)) return send(res, 400, { ok: false, error: 'target' })
  if (!(await memberName(me))) return send(res, 409, { ok: false, error: 'join' })
  if (!(await limited('like', me))) return send(res, 429, { ok: false, error: 'rate' })
  const table = type === 'post' ? 'community_posts' : 'community_comments'
  const pool = getPool()
  const exists = await pool.query(`select author_did from ${table} where id = $1 and not deleted`, [b.id])
  if (!exists.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  // PAS D'AUTO-J'AIME · les points mesurent l'aide apportée aux autres.
  const author = exists.rows[0].author_did as string
  if (author === me) return send(res, 400, { ok: false, error: 'own' })
  const del = await pool.query('delete from community_likes where target_type = $1 and target_id = $2 and did = $3', [type, b.id, me])
  let liked: boolean
  if (del.rowCount) {
    liked = false
    await pool.query(`update ${table} set likes = greatest(likes - 1, 0) where id = $1`, [b.id])
    await pool.query('update community_members set points = greatest(points - 1, 0) where did = $1', [author])
  } else {
    liked = true
    const ins = await pool.query(
      'insert into community_likes (target_type, target_id, did, recipient_did) values ($1, $2, $3, $4) on conflict do nothing',
      [type, b.id, me, author])
    if (ins.rowCount) {
      await pool.query(`update ${table} set likes = likes + 1 where id = $1`, [b.id])
      await pool.query('update community_members set points = points + 1 where did = $1', [author])
    }
  }
  const n = await pool.query(`select likes from ${table} where id = $1`, [b.id])
  return send(res, 200, { ok: true, liked, likes: n.rows[0]?.likes ?? 0 })
}

async function pin(res: ServerResponse, me: string, body: unknown) {
  const b = (body || {}) as { id?: unknown; pinned?: unknown }
  if (!isId(b.id)) return send(res, 400, { ok: false, error: 'post' })
  if (!(await isAdmin(me))) return send(res, 403, { ok: false, error: 'admin' })
  const r = await getPool().query('update community_posts set pinned = $2 where id = $1 and not deleted returning id', [b.id, b.pinned === true])
  if (!r.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  return send(res, 200, { ok: true, pinned: b.pinned === true })
}

async function remove(res: ServerResponse, me: string, body: unknown) {
  const b = (body || {}) as { type?: unknown; id?: unknown }
  const type = b.type === 'comment' ? 'comment' : b.type === 'post' ? 'post' : null
  if (!type || !isId(b.id)) return send(res, 400, { ok: false, error: 'target' })
  const table = type === 'post' ? 'community_posts' : 'community_comments'
  const pool = getPool()
  const r = await pool.query(`select author_did${type === 'comment' ? ', post_id' : ''} from ${table} where id = $1 and not deleted`, [b.id])
  if (!r.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  if (r.rows[0].author_did !== me && !(await isAdmin(me))) return send(res, 403, { ok: false, error: 'forbidden' })
  await pool.query(`update ${table} set deleted = true where id = $1`, [b.id])
  if (type === 'comment') await pool.query('update community_posts set comments = greatest(comments - 1, 0) where id = $1', [r.rows[0].post_id])
  return send(res, 200, { ok: true, deleted: true })
}

/** Admin · un identifiant désigné, ou une adresse opérateur vérifiée par
 *  Privy. Faux dès qu'on ne peut pas savoir. */
async function isAdmin(me: string): Promise<boolean> {
  if (ADMIN_DIDS.includes(me)) return true
  if (!canVerifyEmail() || !ADMIN_EMAILS.length) return false
  const email = await verifiedEmailOf(me)
  return !!email && ADMIN_EMAILS.includes(email)
}

/* ---- helpers --------------------------------------------------------------- */

function header(req: IncomingMessage, name: string): string {
  const v = req.headers?.[name]
  return (Array.isArray(v) ? v[0] : v) || ''
}

function bearer(req: IncomingMessage): string {
  const h = header(req, 'authorization')
  return h.startsWith('Bearer ') ? h.slice(7).trim() : ''
}

function clientIp(req: IncomingMessage): string {
  return header(req, 'x-forwarded-for').split(',')[0].trim() || header(req, 'x-real-ip') || 'anon'
}

function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') {
    return attached.length > MAX_BODY ? Promise.reject(new Error('too_large')) : Promise.resolve(attached)
  }
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      if (d.length > MAX_BODY) { reject(new Error('too_large')); req.destroy() }
    })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}

function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(status === 204 ? '' : JSON.stringify(body))
}
