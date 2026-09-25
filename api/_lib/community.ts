// LA COMMUNAUTÉ · les règles pures (éprouvées par scripts/test-community.mjs).
//
// Les bornes vivent ici et nulle part ailleurs côté serveur : le schéma
// (db/community.sql) et le navigateur (src/lib/community.ts) les recopient, et
// l'épreuve vérifie que les trois copies s'accordent.

export const CATEGORIES = ['general', 'intro', 'questions', 'wins', 'prompts', 'resources'] as const
export type Category = (typeof CATEGORIES)[number]

export const LIMITS = {
  name: { min: 2, max: 32 },
  title: { min: 3, max: 120 },
  body: { min: 10, max: 5000 },
  comment: { min: 1, max: 2000 },
  query: { max: 80 },
  bio: { max: 280 },
  message: { min: 1, max: 2000 },
  pageSize: 20,
  membersPage: 30,
  board: 10,
} as const

/* ---- les niveaux · les points sont les j'aime reçus ------------------------ */
//
// Neuf niveaux, sur la courbe de Skool : faciles au début (un premier message
// utile suffit à passer le niveau 2), longs ensuite. Ils mesurent l'aide
// apportée aux autres, pas le temps passé.
export const LEVEL_POINTS = [0, 5, 20, 65, 155, 515, 2015, 8015, 33015] as const

export function levelOfPoints(points: number): { level: number; next: number | null } {
  let level = 1
  for (let i = 0; i < LEVEL_POINTS.length; i++) if (points >= LEVEL_POINTS[i]) level = i + 1
  return { level, next: level < LEVEL_POINTS.length ? LEVEL_POINTS[level] : null }
}

export function validateBio(v: unknown): Check<string> {
  const bio = clean(v)
  return bio.length <= LIMITS.bio.max ? bio : { error: 'bio' }
}

/** Le débit par compte · une fenêtre d'une heure. */
export const RATES = {
  post: { max: 10, windowMs: 60 * 60 * 1000 },
  comment: { max: 60, windowMs: 60 * 60 * 1000 },
  like: { max: 300, windowMs: 60 * 60 * 1000 },
  message: { max: 60, windowMs: 60 * 60 * 1000 },
  read: { max: 600, windowMs: 60 * 60 * 1000 },
} as const

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
export const isId = (s: unknown): s is string => typeof s === 'string' && UUID.test(s)
export const isCategory = (s: unknown): s is Category => typeof s === 'string' && (CATEGORIES as readonly string[]).includes(s)

/** Un texte ramené à l'essentiel · espaces normalisés, caractères de contrôle
 *  retirés (sauf les retours à la ligne d'un paragraphe). */
export function clean(s: unknown, keepLines = false): string {
  if (typeof s !== 'string') return ''
  const noCtl = s.replace(keepLines ? /[\u0000-\u0009\u000b-\u001f\u007f]/g : /[\u0000-\u001f\u007f]/g, keepLines ? '' : ' ')
  return keepLines
    ? noCtl.replace(/[ \t]+/g, ' ').replace(/\n{3,}/g, '\n\n').trim()
    : noCtl.replace(/\s+/g, ' ').trim()
}

const within = (s: string, b: { min: number; max: number }) => s.length >= b.min && s.length <= b.max

export type Check<T> = T | { error: string }

export function validateName(v: unknown): Check<string> {
  const name = clean(v)
  return within(name, LIMITS.name) ? name : { error: 'name' }
}

export function validatePost(b: unknown): Check<{ category: Category; title: string; body: string }> {
  const o = (b && typeof b === 'object' ? b : {}) as Record<string, unknown>
  if (!isCategory(o.category)) return { error: 'category' }
  const title = clean(o.title)
  if (!within(title, LIMITS.title)) return { error: 'title' }
  const body = clean(o.body, true)
  if (!within(body, LIMITS.body)) return { error: 'body' }
  return { category: o.category, title, body }
}

export function validateComment(b: unknown): Check<{ postId: string; parentId: string | null; body: string }> {
  const o = (b && typeof b === 'object' ? b : {}) as Record<string, unknown>
  if (!isId(o.postId)) return { error: 'post' }
  const parentId = o.parentId == null || o.parentId === '' ? null : o.parentId
  if (parentId !== null && !isId(parentId)) return { error: 'parent' }
  const body = clean(o.body, true)
  if (!within(body, LIMITS.comment)) return { error: 'body' }
  return { postId: o.postId, parentId, body }
}

/** La recherche · quelques mots, rien d'autre. Renvoyée vide si trop courte. */
export function cleanQuery(q: unknown): string {
  const s = clean(q).slice(0, LIMITS.query.max)
  return s.length >= 2 ? s : ''
}

/* ---- le curseur · (date, id) de la dernière ligne servie ------------------ */

export interface Cursor { t: string; id: string }

export function encodeCursor(c: Cursor): string {
  return Buffer.from(JSON.stringify(c)).toString('base64url')
}

export function decodeCursor(s: unknown): Cursor | null {
  if (typeof s !== 'string' || !s || s.length > 200) return null
  try {
    const c = JSON.parse(Buffer.from(s, 'base64url').toString('utf8'))
    if (typeof c?.t !== 'string' || !isId(c?.id) || Number.isNaN(Date.parse(c.t))) return null
    return { t: c.t, id: c.id }
  } catch {
    return null
  }
}

/* ---- ce qui sort · jamais une ligne brute ---------------------------------- */

export interface MemberRow {
  handle: string
  name: string
  bio?: string
  points: number
  created_at: Date
  last_seen_at: Date
}

/** Un membre, tel que la page le montre · en ligne s'il a été vu il y a moins
 *  de cinq minutes. */
export function serializeMember(r: MemberRow, now = Date.now()) {
  return {
    handle: r.handle,
    name: r.name,
    bio: r.bio ?? '',
    points: r.points,
    level: levelOfPoints(r.points).level,
    joinedAt: r.created_at.toISOString(),
    online: now - r.last_seen_at.getTime() < 5 * 60 * 1000,
  }
}

export interface PostRow {
  id: string
  category: string
  title: string
  body: string
  pinned: boolean
  likes: number
  comments: number
  created_at: Date
  edited_at: Date | null
  author_did: string
  author_name: string
  author_handle?: string
  author_points?: number
  liked?: boolean
}

export interface CommentRow {
  id: string
  post_id: string
  parent_id: string | null
  body: string
  likes: number
  deleted: boolean
  created_at: Date
  edited_at?: Date | null
  author_did: string
  author_name: string
  author_handle?: string
  author_points?: number
  liked?: boolean
}

/** Un auteur est montré par son nom et une empreinte courte de son compte
 *  (pour la couleur de son avatar et savoir si c'est « moi »), jamais par son
 *  identifiant Privy complet. */
export function authorKey(did: string): string {
  let h = 2166136261
  for (let i = 0; i < did.length; i++) { h ^= did.charCodeAt(i); h = Math.imul(h, 16777619) }
  return (h >>> 0).toString(36)
}

export function serializePost(r: PostRow, me: string | null, excerpt = false) {
  return {
    id: r.id,
    category: r.category,
    title: r.title,
    body: excerpt && r.body.length > 320 ? `${r.body.slice(0, 320).trimEnd()}...` : r.body,
    truncated: excerpt && r.body.length > 320,
    pinned: r.pinned,
    likes: r.likes,
    comments: r.comments,
    createdAt: r.created_at.toISOString(),
    edited: !!r.edited_at,
    author: authorOf(r),
    mine: !!me && me === r.author_did,
    liked: !!r.liked,
  }
}

/** L'auteur montré · son nom, sa clé de couleur, son identifiant public et son
 *  niveau (quand la requête les a lus). */
function authorOf(r: { author_did: string; author_name: string; author_handle?: string; author_points?: number }) {
  return {
    name: r.author_name,
    key: authorKey(r.author_did),
    handle: r.author_handle ?? null,
    level: typeof r.author_points === 'number' ? levelOfPoints(r.author_points).level : null,
  }
}

export function serializeComment(r: CommentRow, me: string | null) {
  return {
    id: r.id,
    parentId: r.parent_id,
    body: r.deleted ? '' : r.body,
    deleted: r.deleted,
    likes: r.likes,
    createdAt: r.created_at.toISOString(),
    edited: !!r.edited_at && !r.deleted,
    author: r.deleted ? null : authorOf(r),
    mine: !!me && me === r.author_did && !r.deleted,
    liked: !!r.liked,
  }
}

/* ---- le calendrier ----------------------------------------------------------- */

export const EVENT_LIMITS = {
  title: { min: 3, max: 120 },
  description: { max: 2000 },
  duration: { min: 15, max: 480 },
  link: { max: 300 },
} as const

/** Un événement lisible, ou la raison du refus. Le lien de visio doit être en
 *  https : une adresse en clair dans une invitation est une invitation à
 *  l'espionnage. */
export function validateEvent(b: unknown): Check<{ title: string; description: string; startsAt: string; duration: number; link: string | null }> {
  const o = (b && typeof b === 'object' ? b : {}) as Record<string, unknown>
  const title = clean(o.title)
  if (!within(title, EVENT_LIMITS.title)) return { error: 'title' }
  const description = clean(o.description, true)
  if (description.length > EVENT_LIMITS.description.max) return { error: 'description' }
  const t = typeof o.startsAt === 'string' ? Date.parse(o.startsAt) : NaN
  if (Number.isNaN(t)) return { error: 'date' }
  const duration = Number(o.duration ?? 60)
  if (!Number.isInteger(duration) || duration < EVENT_LIMITS.duration.min || duration > EVENT_LIMITS.duration.max) return { error: 'duration' }
  let link: string | null = null
  if (typeof o.link === 'string' && o.link.trim()) {
    link = o.link.trim()
    if (link.length > EVENT_LIMITS.link.max || !/^https:\/\/[^\s]+$/i.test(link)) return { error: 'link' }
  }
  return { title, description, startsAt: new Date(t).toISOString(), duration, link }
}

export interface EventRow {
  id: string
  title: string
  description: string
  starts_at: Date
  duration_min: number
  link: string | null
}

export function serializeEvent(r: EventRow) {
  return {
    id: r.id,
    title: r.title,
    description: r.description,
    startsAt: r.starts_at.toISOString(),
    duration: r.duration_min,
    link: r.link,
  }
}

/* ---- les messages privés ---------------------------------------------------- */

export function validateMessage(b: unknown): Check<{ to: string; body: string }> {
  const o = (b && typeof b === 'object' ? b : {}) as Record<string, unknown>
  if (!isId(o.to)) return { error: 'to' }
  const body = clean(o.body, true)
  if (!within(body, LIMITS.message)) return { error: 'body' }
  return { to: o.to, body }
}

export const NOTIFICATION_KINDS = ['comment', 'reply', 'like_post', 'like_comment'] as const
export type NotificationKind = (typeof NOTIFICATION_KINDS)[number]

/** Une notification ne naît jamais d'un geste sur son propre contenu. */
export const shouldNotify = (recipient: string | null | undefined, actor: string): boolean => !!recipient && recipient !== actor
