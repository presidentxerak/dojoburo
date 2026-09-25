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
import { brevoConfigured, sendEmail, layout, esc, siteUrl } from './_lib/brevo.js'
import {
  LIMITS, RATES, isId, isCategory, validateName, validateBio, validatePost, validateComment, cleanQuery,
  encodeCursor, decodeCursor, serializePost, serializeComment, serializeMember, levelOfPoints,
  validateEvent, serializeEvent, validateMessage, shouldNotify, mentionsIn, validatePoll, pollView,
  type NotificationKind, type PollView,
  type PostRow, type CommentRow, type MemberRow, type EventRow,
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
      if (action === 'events') return await events(res, url)
      if (action === 'unread' || action === 'notifications' || action === 'conversations' || action === 'messages') {
        if (!privyEnabled()) return send(res, 503, { ok: false, error: 'not_configured', detail: 'auth' })
        if (!me) return send(res, 401, { ok: false, error: 'auth' })
        if (action === 'unread') return await unread(res, me)
        if (action === 'notifications') return await notifications(res, me)
        if (action === 'conversations') return await conversations(res, me)
        return await thread(res, url, me)
      }
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
    if (action === 'event') return await createEvent(res, me, body)
    if (action === 'notifications-read') return await markRead(res, me)
    if (action === 'message') return await sendMessage(res, me, body)
    if (action === 'event-delete') return await deleteEvent(res, me, body)
    if (action === 'post') return await createPost(res, me, body)
    if (action === 'comment') return await createComment(res, me, body)
    if (action === 'like') return await toggleLike(res, me, body)
    if (action === 'pin') return await pin(res, me, body)
    if (action === 'delete') return await remove(res, me, body)
    if (action === 'edit') return await edit(res, me, body)
    if (action === 'vote') return await vote(res, me, body)
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
  const polls = await pollsFor([...pinned, ...page].map((p) => p.id), me)
  const withPoll = (p: PostRow) => ({ ...serializePost(p, me, true), poll: polls.get(p.id) ?? null })
  return send(res, 200, {
    ok: true,
    pinned: pinned.map(withPoll),
    posts: page.map(withPoll),
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
    `select c.id, c.post_id, c.parent_id, c.body, c.likes, c.deleted, c.created_at, c.edited_at, c.author_did, m.name as author_name,
            m.handle as author_handle, m.points as author_points,
            exists(select 1 from community_likes l where l.target_type = 'comment' and l.target_id = c.id and l.did = $2) as liked
       from community_comments c join community_members m on m.did = c.author_did
      where c.post_id = $1 order by c.created_at asc limit 500`,
    [id, me || ''],
  )
  const polls = await pollsFor([id as string], me)
  return send(res, 200, {
    ok: true,
    post: { ...serializePost(r.rows[0] as PostRow, me), poll: polls.get(id as string) ?? null },
    comments: (c.rows as CommentRow[]).map((x) => serializeComment(x, me)),
  })
}

async function whoAmI(res: ServerResponse, me: string) {
  // ÊTRE VU · « en ligne » dans la liste des membres vient de là.
  const r = await getPool().query(
    'update community_members set last_seen_at = now() where did = $1 returning handle, name, bio, points, email_notify', [me])
  const m = r.rows[0]
  return send(res, 200, {
    ok: true,
    member: m ? { handle: m.handle, name: m.name, bio: m.bio, points: m.points, level: levelOfPoints(m.points).level, emailNotify: m.email_notify } : null,
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

/* ---- les notifications et les messages ----------------------------------------- */

async function notify(did: string, kind: NotificationKind, actor: string, postId: string | null) {
  if (!shouldNotify(did, actor)) return
  try {
    await getPool().query(
      'insert into community_notifications (did, kind, actor_did, post_id) values ($1, $2, $3, $4)',
      [did, kind, actor, postId],
    )
  } catch { /* une notification manquée ne fait pas échouer le geste */ }
  // L'E-MAIL · pour ce qui appelle une réponse (un commentaire, une réponse,
  // une mention), jamais pour un j'aime.
  if (kind === 'comment' || kind === 'reply' || kind === 'mention') await mailNotification(did, kind, actor, postId)
}

/** UN E-MAIL DE NOTIFICATION · seulement si le membre ne les a pas coupés, si
 *  Brevo est branché et si Privy peut donner son adresse vérifiée. Six au plus
 *  par heure et par membre : au-delà, la cloche suffit. */
async function mailNotification(did: string, kind: 'comment' | 'reply' | 'mention' | 'message', actor: string, postId: string | null) {
  if (!brevoConfigured() || !canVerifyEmail()) return
  try {
    const pool = getPool()
    const r = await pool.query(
      `select m.email_notify, m.lang, m.handle, a.name as actor_name,
              (select title from community_posts where id = $3) as post_title
         from community_members m, community_members a where m.did = $1 and a.did = $2`,
      [did, actor, postId],
    )
    const row = r.rows[0]
    if (!row || !row.email_notify) return
    if (!(await rateAllow(`community:mail:${did}`, 6, 60 * 60 * 1000))) return
    const email = await verifiedEmailOf(did)
    if (!email) return
    const fr = row.lang !== 'en'
    const who = esc(String(row.actor_name))
    const title = row.post_title ? esc(String(row.post_title)) : ''
    const site = siteUrl()
    const href = kind === 'message' ? `${site}/clan/messages` : `${site}/clan/p/${postId}`
    const what = {
      comment: fr ? `${who} a commenté votre publication` : `${who} commented on your post`,
      reply: fr ? `${who} a répondu à votre commentaire` : `${who} replied to your comment`,
      mention: fr ? `${who} vous a mentionné` : `${who} mentioned you`,
      message: fr ? `${who} vous a écrit un message privé` : `${who} sent you a private message`,
    }[kind]
    await sendEmail({
      to: email,
      subject: fr ? `${String(row.actor_name)} dans la communauté DojoBuro` : `${String(row.actor_name)} in the DojoBuro community`,
      html: layout({
        title: what,
        lines: title ? [fr ? `Publication : « ${title} »` : `Post: “${title}”`] : [],
        cta: { label: fr ? 'Voir dans la communauté' : 'See it in the community', href },
        foot: fr
          ? `Vous recevez cet e-mail parce que les notifications par e-mail sont activées sur votre profil de membre. <a href="${site}/clan/m/${row.handle}" style="color:#6b5f8a">Les désactiver</a>.`
          : `You receive this email because email notifications are on in your member profile. <a href="${site}/clan/m/${row.handle}" style="color:#6b5f8a">Turn them off</a>.`,
      }),
    })
  } catch { /* un e-mail manqué ne fait pas échouer le geste */ }
}

async function unread(res: ServerResponse, me: string) {
  const r = await getPool().query(
    `select (select count(*)::int from community_notifications where did = $1 and read_at is null) as notifications,
            (select count(*)::int from community_messages where to_did = $1 and read_at is null) as messages`,
    [me],
  )
  return send(res, 200, { ok: true, notifications: r.rows[0]?.notifications ?? 0, messages: r.rows[0]?.messages ?? 0 })
}

async function notifications(res: ServerResponse, me: string) {
  const r = await getPool().query(
    `select n.id, n.kind, n.created_at, n.read_at, n.post_id, a.name as actor_name, a.handle as actor_handle, p.title as post_title
       from community_notifications n
       join community_members a on a.did = n.actor_did
       left join community_posts p on p.id = n.post_id
      where n.did = $1 order by n.created_at desc limit 40`,
    [me],
  )
  return send(res, 200, {
    ok: true,
    notifications: r.rows.map((x) => ({
      id: x.id, kind: x.kind, createdAt: x.created_at.toISOString(), read: !!x.read_at, postId: x.post_id,
      postTitle: x.post_title ?? null, actor: { name: x.actor_name, handle: x.actor_handle },
    })),
  })
}

async function markRead(res: ServerResponse, me: string) {
  await getPool().query('update community_notifications set read_at = now() where did = $1 and read_at is null', [me])
  return send(res, 200, { ok: true, read: true })
}

/** Les conversations · une par interlocuteur, la plus récente d'abord. */
async function conversations(res: ServerResponse, me: string) {
  const r = await getPool().query(
    `select distinct on (other) other, body, created_at, from_did
       from (select case when from_did = $1 then to_did else from_did end as other, body, created_at, from_did
               from community_messages where from_did = $1 or to_did = $1) t
      order by other, created_at desc`,
    [me],
  )
  const others = r.rows.map((x) => x.other)
  const names = others.length
    ? await getPool().query('select did, name, handle, points from community_members where did = any($1)', [others])
    : { rows: [] as { did: string; name: string; handle: string; points: number }[] }
  const unreadBy = await getPool().query(
    'select from_did, count(*)::int as n from community_messages where to_did = $1 and read_at is null group by from_did', [me])
  const byDid = new Map(names.rows.map((x) => [x.did, x]))
  const unreadMap = new Map(unreadBy.rows.map((x) => [x.from_did, x.n]))
  const list = r.rows
    .map((x) => {
      const m = byDid.get(x.other)
      if (!m) return null
      return {
        with: { name: m.name, handle: m.handle, level: levelOfPoints(m.points).level },
        last: x.body.length > 120 ? `${x.body.slice(0, 120)}...` : x.body,
        lastAt: x.created_at.toISOString(),
        mineLast: x.from_did === me,
        unread: unreadMap.get(x.other) ?? 0,
      }
    })
    .filter(Boolean)
    .sort((a, b) => (a!.lastAt < b!.lastAt ? 1 : -1))
  return send(res, 200, { ok: true, conversations: list })
}

async function thread(res: ServerResponse, url: URL, me: string) {
  const handle = url.searchParams.get('with')
  if (!isId(handle)) return send(res, 400, { ok: false, error: 'member' })
  const pool = getPool()
  const o = await pool.query('select did, name, handle, points from community_members where handle = $1', [handle])
  const other = o.rows[0]
  if (!other) return send(res, 404, { ok: false, error: 'not_found' })
  const r = await pool.query(
    `select id, from_did, body, created_at from community_messages
      where (from_did = $1 and to_did = $2) or (from_did = $2 and to_did = $1)
      order by created_at desc limit 100`,
    [me, other.did],
  )
  await pool.query('update community_messages set read_at = now() where to_did = $1 and from_did = $2 and read_at is null', [me, other.did])
  return send(res, 200, {
    ok: true,
    with: { name: other.name, handle: other.handle, level: levelOfPoints(other.points).level },
    messages: r.rows.reverse().map((x) => ({ id: x.id, mine: x.from_did === me, body: x.body, createdAt: x.created_at.toISOString() })),
  })
}

async function sendMessage(res: ServerResponse, me: string, body: unknown) {
  if (!(await memberName(me))) return send(res, 409, { ok: false, error: 'join' })
  const v = validateMessage(body)
  if ('error' in v) return send(res, 400, { ok: false, error: v.error })
  if (!(await limited('message', me))) return send(res, 429, { ok: false, error: 'rate' })
  const pool = getPool()
  const o = await pool.query('select did from community_members where handle = $1', [v.to])
  const to = o.rows[0]?.did as string | undefined
  if (!to) return send(res, 404, { ok: false, error: 'not_found' })
  if (to === me) return send(res, 400, { ok: false, error: 'self' })
  const r = await pool.query('insert into community_messages (from_did, to_did, body) values ($1, $2, $3) returning id', [me, to, v.body])
  // UN E-MAIL PAR CONVERSATION ET PAR DEMI-HEURE · pas un par message.
  if (await rateAllow(`community:mailpair:${me}:${to}`, 1, 30 * 60 * 1000)) await mailNotification(to, 'message', me, null)
  return send(res, 200, { ok: true, id: r.rows[0].id })
}

/* ---- le calendrier ----------------------------------------------------------- */

/** Les événements d'une période · par défaut, de 7 jours en arrière à 120
 *  jours devant (la vue mois et la liste « à venir »). */
async function events(res: ServerResponse, url: URL) {
  const from = Date.parse(url.searchParams.get('from') || '')
  const to = Date.parse(url.searchParams.get('to') || '')
  const start = Number.isNaN(from) ? new Date(Date.now() - 7 * 86400e3) : new Date(from)
  let end = Number.isNaN(to) ? new Date(Date.now() + 120 * 86400e3) : new Date(to)
  // UNE PÉRIODE BORNÉE · jamais plus d'un an d'un coup.
  if (end.getTime() - start.getTime() > 366 * 86400e3) end = new Date(start.getTime() + 366 * 86400e3)
  const r = await getPool().query(
    `select id, title, description, starts_at, duration_min, link from community_events
      where not deleted and starts_at >= $1 and starts_at < $2 order by starts_at asc limit 200`,
    [start.toISOString(), end.toISOString()],
  )
  return send(res, 200, { ok: true, events: (r.rows as EventRow[]).map(serializeEvent) })
}

async function createEvent(res: ServerResponse, me: string, body: unknown) {
  if (!(await isAdmin(me))) return send(res, 403, { ok: false, error: 'admin' })
  const v = validateEvent(body)
  if ('error' in v) return send(res, 400, { ok: false, error: v.error })
  const r = await getPool().query(
    `insert into community_events (title, description, starts_at, duration_min, link, created_by)
       values ($1, $2, $3, $4, $5, $6) returning id`,
    [v.title, v.description, v.startsAt, v.duration, v.link, me],
  )
  return send(res, 200, { ok: true, id: r.rows[0].id })
}

async function deleteEvent(res: ServerResponse, me: string, body: unknown) {
  const id = (body as { id?: unknown })?.id
  if (!isId(id)) return send(res, 400, { ok: false, error: 'event' })
  if (!(await isAdmin(me))) return send(res, 403, { ok: false, error: 'admin' })
  const r = await getPool().query('update community_events set deleted = true where id = $1 and not deleted returning id', [id])
  if (!r.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  return send(res, 200, { ok: true, deleted: true })
}

async function editProfile(res: ServerResponse, me: string, body: unknown) {
  const b = (body || {}) as { name?: unknown; bio?: unknown; emailNotify?: unknown; lang?: unknown }
  const name = validateName(b.name)
  if (typeof name !== 'string') return send(res, 400, { ok: false, error: 'name' })
  const bio = validateBio(b.bio ?? '')
  if (typeof bio !== 'string') return send(res, 400, { ok: false, error: 'bio' })
  const r = await getPool().query(
    `update community_members set name = $2, bio = $3,
        email_notify = coalesce($4, email_notify), lang = coalesce($5, lang) where did = $1 returning handle`,
    [me, name, bio, typeof b.emailNotify === 'boolean' ? b.emailNotify : null, b.lang === 'en' || b.lang === 'fr' ? b.lang : null])
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
  const lang = (body as { lang?: unknown })?.lang === 'en' ? 'en' : 'fr'
  await getPool().query(
    `insert into community_members (did, name, lang) values ($1, $2, $3)
       on conflict (did) do update set name = excluded.name, lang = excluded.lang, last_seen_at = now()`,
    [me, name, lang],
  )
  return send(res, 200, { ok: true, member: { name } })
}

async function createPost(res: ServerResponse, me: string, body: unknown) {
  if (!(await memberName(me))) return send(res, 409, { ok: false, error: 'join' })
  const v = validatePost(body)
  if ('error' in v) return send(res, 400, { ok: false, error: v.error })
  if (!(await limited('post', me))) return send(res, 429, { ok: false, error: 'rate' })
  const poll = validatePoll((body as { poll?: unknown })?.poll)
  if (poll && !Array.isArray(poll)) return send(res, 400, { ok: false, error: 'poll' })
  const r = await getPool().query(
    `insert into community_posts (author_did, category, title, body) values ($1, $2, $3, $4) returning id`,
    [me, v.category, v.title, v.body],
  )
  const id = r.rows[0].id as string
  if (Array.isArray(poll)) await getPool().query('insert into community_polls (post_id, options) values ($1, $2)', [id, poll])
  await notifyMentions(v.body, me, id, new Set())
  return send(res, 200, { ok: true, id })
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
  // PRÉVENIR · l'auteur de la publication, et celui du commentaire auquel on
  // répond (une seule fois s'il s'agit de la même personne).
  const owner = await pool.query('select author_did from community_posts where id = $1', [v.postId])
  const postAuthor = owner.rows[0]?.author_did as string | undefined
  let parentAuthor: string | undefined
  if (parent) {
    const pa = await pool.query('select author_did from community_comments where id = $1', [parent])
    parentAuthor = pa.rows[0]?.author_did
  }
  if (parentAuthor) await notify(parentAuthor, 'reply', me, v.postId)
  if (postAuthor && postAuthor !== parentAuthor) await notify(postAuthor, 'comment', me, v.postId)
  await notifyMentions(v.body, me, v.postId, new Set([parentAuthor, postAuthor].filter(Boolean) as string[]))
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
      let postId = b.id as string
      if (type === 'comment') {
        const c = await pool.query('select post_id from community_comments where id = $1', [b.id])
        postId = c.rows[0]?.post_id
      }
      await notify(author, type === 'post' ? 'like_post' : 'like_comment', me, postId)
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

/** LES MENTIONS · une notification par personne mentionnée, sauf l'auteur
 *  lui-même et ceux déjà prévenus par ce geste (auteur du message commenté). */
async function notifyMentions(text: string, me: string, postId: string, already: Set<string>) {
  const handles = mentionsIn(text)
  if (!handles.length) return
  const r = await getPool().query('select did from community_members where handle = any($1::uuid[])', [handles])
  for (const row of r.rows as { did: string }[]) {
    if (row.did === me || already.has(row.did)) continue
    await notify(row.did, 'mention', me, postId)
  }
}

/** LES SONDAGES · les résultats d'une liste de publications, en une requête. */
async function pollsFor(ids: string[], me: string | null): Promise<Map<string, PollView>> {
  const out = new Map<string, PollView>()
  if (!ids.length) return out
  const pool = getPool()
  const polls = await pool.query('select post_id, options from community_polls where post_id = any($1::uuid[])', [ids])
  if (!polls.rows.length) return out
  const pids = polls.rows.map((x) => x.post_id)
  const votes = await pool.query(
    'select post_id, option, count(*)::int as n from community_poll_votes where post_id = any($1::uuid[]) group by post_id, option', [pids])
  const mine = me
    ? await pool.query('select post_id, option from community_poll_votes where post_id = any($1::uuid[]) and did = $2', [pids, me])
    : { rows: [] as { post_id: string; option: number }[] }
  for (const p of polls.rows as { post_id: string; options: string[] }[]) {
    const vs = (votes.rows as { post_id: string; option: number; n: number }[]).filter((v) => v.post_id === p.post_id)
    const my = (mine.rows as { post_id: string; option: number }[]).find((v) => v.post_id === p.post_id)
    out.set(p.post_id, pollView(p.options, vs, my ? my.option : null))
  }
  return out
}

async function vote(res: ServerResponse, me: string, body: unknown) {
  const b = (body || {}) as { postId?: unknown; option?: unknown }
  if (!isId(b.postId)) return send(res, 400, { ok: false, error: 'post' })
  if (!(await memberName(me))) return send(res, 409, { ok: false, error: 'join' })
  if (!(await limited('like', me))) return send(res, 429, { ok: false, error: 'rate' })
  const pool = getPool()
  const p = await pool.query('select options from community_polls where post_id = $1', [b.postId])
  if (!p.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  const n = (p.rows[0].options as string[]).length
  const option = Number(b.option)
  // -1 RETIRE LE VOTE · un vote se change, il se retire aussi.
  if (option === -1) await pool.query('delete from community_poll_votes where post_id = $1 and did = $2', [b.postId, me])
  else if (Number.isInteger(option) && option >= 0 && option < n) {
    await pool.query(
      `insert into community_poll_votes (post_id, did, option) values ($1, $2, $3)
         on conflict (post_id, did) do update set option = excluded.option, created_at = now()`,
      [b.postId, me, option],
    )
  } else return send(res, 400, { ok: false, error: 'option' })
  const view = (await pollsFor([b.postId as string], me)).get(b.postId as string)
  return send(res, 200, { ok: true, poll: view })
}

/** MODIFIER · seul l'auteur modifie son texte (un admin supprime, il ne
 *  réécrit pas les mots d'un autre). La modification est signalée. */
async function edit(res: ServerResponse, me: string, body: unknown) {
  const b = (body || {}) as { type?: unknown; id?: unknown; title?: unknown; body?: unknown; category?: unknown }
  const type = b.type === 'comment' ? 'comment' : b.type === 'post' ? 'post' : null
  if (!type || !isId(b.id)) return send(res, 400, { ok: false, error: 'target' })
  const pool = getPool()
  if (type === 'post') {
    const r = await pool.query('select author_did, category from community_posts where id = $1 and not deleted', [b.id])
    if (!r.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
    if (r.rows[0].author_did !== me) return send(res, 403, { ok: false, error: 'forbidden' })
    const v = validatePost({ category: b.category ?? r.rows[0].category, title: b.title, body: b.body })
    if ('error' in v) return send(res, 400, { ok: false, error: v.error })
    await pool.query('update community_posts set category = $2, title = $3, body = $4, edited_at = now() where id = $1', [b.id, v.category, v.title, v.body])
    return send(res, 200, { ok: true, edited: true })
  }
  const r = await pool.query('select author_did, post_id from community_comments where id = $1 and not deleted', [b.id])
  if (!r.rows[0]) return send(res, 404, { ok: false, error: 'not_found' })
  if (r.rows[0].author_did !== me) return send(res, 403, { ok: false, error: 'forbidden' })
  const v = validateComment({ postId: r.rows[0].post_id, body: b.body })
  if ('error' in v) return send(res, 400, { ok: false, error: v.error })
  await pool.query('update community_comments set body = $2, edited_at = now() where id = $1', [b.id, v.body])
  return send(res, 200, { ok: true, edited: true })
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
