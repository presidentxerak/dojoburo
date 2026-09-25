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
  LIMITS, RATES, isId, isCategory, validateName, validatePost, validateComment, cleanQuery,
  encodeCursor, decodeCursor, serializePost, serializeComment, type PostRow, type CommentRow,
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
  p.author_did, m.name as author_name`

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
  const r = await getPool().query('update community_members set last_seen_at = now() where did = $1 returning name, bio', [me])
  return send(res, 200, { ok: true, member: r.rows[0] ? { name: r.rows[0].name, bio: r.rows[0].bio } : null, admin: await isAdmin(me) })
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
  const exists = await pool.query(`select 1 from ${table} where id = $1 and not deleted`, [b.id])
  if (!exists.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  const del = await pool.query('delete from community_likes where target_type = $1 and target_id = $2 and did = $3', [type, b.id, me])
  let liked: boolean
  if (del.rowCount) {
    liked = false
    await pool.query(`update ${table} set likes = greatest(likes - 1, 0) where id = $1`, [b.id])
  } else {
    liked = true
    await pool.query('insert into community_likes (target_type, target_id, did) values ($1, $2, $3) on conflict do nothing', [type, b.id, me])
    await pool.query(`update ${table} set likes = likes + 1 where id = $1`, [b.id])
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
