// LA COMMUNAUTÉ · le client de /api/community.
//
// Les bornes et les catégories recopient api/_lib/community.ts ;
// scripts/test-community.mjs vérifie que les copies s'accordent.
import { apiFetch } from './apiFetch'

export const COMMUNITY_CATEGORIES = ['general', 'intro', 'questions', 'wins', 'prompts', 'resources'] as const
export type CommunityCategory = (typeof COMMUNITY_CATEGORIES)[number]

export const COMMUNITY_LIMITS = {
  name: { min: 2, max: 32 },
  title: { min: 3, max: 120 },
  body: { min: 10, max: 5000 },
  comment: { min: 1, max: 2000 },
  bio: { max: 280 },
  message: { min: 1, max: 2000 },
} as const

export interface Author { name: string; key: string; handle?: string | null; level?: number | null }

export interface CMember {
  handle: string
  name: string
  bio: string
  points: number
  level: number
  joinedAt: string
  online: boolean
}

export interface BoardRow { handle: string; name: string; level: number; points: number }

/** Les neuf niveaux · recopiés de api/_lib/community.ts (voir l'épreuve). */
export const LEVEL_POINTS = [0, 5, 20, 65, 155, 515, 2015, 8015, 33015] as const

export interface CPost {
  id: string
  category: CommunityCategory
  title: string
  body: string
  truncated?: boolean
  pinned: boolean
  likes: number
  comments: number
  createdAt: string
  edited: boolean
  author: Author
  mine: boolean
  liked: boolean
  poll?: PollView | null
}

export interface PollView { options: string[]; counts: number[]; total: number; mine: number | null }

export interface CComment {
  id: string
  parentId: string | null
  body: string
  edited?: boolean
  deleted: boolean
  likes: number
  createdAt: string
  author: Author | null
  mine: boolean
  liked: boolean
}

export type CError = 'not_configured' | 'auth' | 'auth_off' | 'join' | 'rate' | 'not_found' | 'invalid' | 'forbidden' | 'network' | 'own'

export type CResult<T> = { ok: true; data: T } | { ok: false; error: CError }

async function call<T>(url: string, init?: RequestInit): Promise<CResult<T>> {
  try {
    const r = await apiFetch(url, init)
    const j = await r.json().catch(() => ({}))
    if (r.ok && j?.ok) return { ok: true, data: j as T }
    if (r.status === 503) return { ok: false, error: j?.detail === 'auth' ? 'auth_off' : 'not_configured' }
    if (r.status === 401) return { ok: false, error: 'auth' }
    if (r.status === 409) return { ok: false, error: 'join' }
    if (r.status === 429) return { ok: false, error: 'rate' }
    if (r.status === 404) return { ok: false, error: 'not_found' }
    if (r.status === 403) return { ok: false, error: 'forbidden' }
    if (j?.error === 'own') return { ok: false, error: 'own' }
    return { ok: false, error: 'invalid' }
  } catch {
    return { ok: false, error: 'network' }
  }
}

const post = <T>(action: string, body: unknown) => call<T>(`/api/community?action=${action}`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(body),
})

export function fetchFeed(opts: { cat?: string; q?: string; cursor?: string | null }) {
  const p = new URLSearchParams({ action: 'feed' })
  if (opts.cat) p.set('cat', opts.cat)
  if (opts.q) p.set('q', opts.q)
  if (opts.cursor) p.set('cursor', opts.cursor)
  return call<{ pinned: CPost[]; posts: CPost[]; next: string | null }>(`/api/community?${p}`)
}

export const fetchPost = (id: string) =>
  call<{ post: CPost; comments: CComment[] }>(`/api/community?action=post&id=${encodeURIComponent(id)}`)

export interface MeData { handle: string; name: string; bio: string; points: number; level: number }
export const fetchMe = () => call<{ member: MeData | null; admin: boolean }>('/api/community?action=me')

export function fetchMembers(page = 0, q = '') {
  const p = new URLSearchParams({ action: 'members', page: String(page) })
  if (q) p.set('q', q)
  return call<{ members: CMember[]; more: boolean; total: number }>(`/api/community?${p}`)
}
export const fetchMember = (handle: string) =>
  call<{ member: CMember & { posts: number; comments: number; me: boolean }; posts: CPost[] }>(`/api/community?action=member&id=${encodeURIComponent(handle)}`)
export const fetchLeaderboard = () =>
  call<{ week: BoardRow[]; month: BoardRow[]; all: BoardRow[]; me: { points: number; level: number; next: number | null } | null }>('/api/community?action=leaderboard')
export const editProfile = (p: { name: string; bio: string }) => post<{ member: { name: string; bio: string } }>('profile', p)

export const joinCommunity = (name: string) => post<{ member: { name: string } }>('join', { name })
export const createPost = (p: { category: CommunityCategory; title: string; body: string; poll?: string[] }) => post<{ id: string }>('post', p)
export const votePoll = (postId: string, option: number) => post<{ poll: PollView }>('vote', { postId, option })
export const createComment = (c: { postId: string; parentId?: string | null; body: string }) => post<{ id: string }>('comment', c)
export const toggleLike = (type: 'post' | 'comment', id: string) => post<{ liked: boolean; likes: number }>('like', { type, id })
export const setPinned = (id: string, pinned: boolean) => post<{ pinned: boolean }>('pin', { id, pinned })
export const removeItem = (type: 'post' | 'comment', id: string) => post<{ deleted: boolean }>('delete', { type, id })
export const editItem = (e: { type: 'post'; id: string; category: CommunityCategory; title: string; body: string } | { type: 'comment'; id: string; body: string }) =>
  post<{ edited: boolean }>('edit', e)

/* ---- le calendrier ---------------------------------------------------------- */

export interface CEvent { id: string; title: string; description: string; startsAt: string; duration: number; link: string | null }

export function fetchEvents(from?: Date, to?: Date) {
  const p = new URLSearchParams({ action: 'events' })
  if (from) p.set('from', from.toISOString())
  if (to) p.set('to', to.toISOString())
  return call<{ events: CEvent[] }>(`/api/community?${p}`)
}
export const createEvent = (e: { title: string; description: string; startsAt: string; duration: number; link: string }) => post<{ id: string }>('event', e)
export const deleteEvent = (id: string) => post<{ deleted: boolean }>('event-delete', { id })

/** Le fichier d'agenda d'un événement (.ics) · construit dans le navigateur,
 *  rien ne part au serveur. */
export function icsOf(e: CEvent, site: string): string {
  const fmt = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
  const start = new Date(e.startsAt)
  const end = new Date(start.getTime() + e.duration * 60000)
  const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1')
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//DojoBuro//Community//FR', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT',
    `UID:${e.id}@dojoburo`, `DTSTAMP:${fmt(new Date())}`, `DTSTART:${fmt(start)}`, `DTEND:${fmt(end)}`,
    `SUMMARY:${esc(e.title)}`, `DESCRIPTION:${esc([e.description, e.link || '', `${site}/clan/calendrier`].filter(Boolean).join('\n'))}`,
    ...(e.link ? [`URL:${e.link}`] : []), 'END:VEVENT', 'END:VCALENDAR',
  ].join('\r\n')
}

/* ---- les notifications et les messages -------------------------------------- */

export type NotificationKind = 'comment' | 'reply' | 'like_post' | 'like_comment' | 'mention'
export interface CNotification {
  id: string
  kind: NotificationKind
  createdAt: string
  read: boolean
  postId: string | null
  postTitle: string | null
  actor: { name: string; handle: string }
}
export interface Peer { name: string; handle: string; level: number }
export interface CConversation { with: Peer; last: string; lastAt: string; mineLast: boolean; unread: number }
export interface CMessage { id: string; mine: boolean; body: string; createdAt: string }

export const fetchUnread = () => call<{ notifications: number; messages: number }>('/api/community?action=unread')
export const fetchNotifications = () => call<{ notifications: CNotification[] }>('/api/community?action=notifications')
export const markNotificationsRead = () => post<{ read: boolean }>('notifications-read', {})
export const fetchConversations = () => call<{ conversations: CConversation[] }>('/api/community?action=conversations')
export const fetchThread = (handle: string) =>
  call<{ with: Peer; messages: CMessage[] }>(`/api/community?action=messages&with=${encodeURIComponent(handle)}`)
export const sendMessage = (to: string, body: string) => post<{ id: string }>('message', { to, body })

/* ---- les mentions ------------------------------------------------------------ */
//
// Dans la zone de texte, une mention se lit « @Nora » ; elle est rangée
// « @[Nora](identifiant) » au moment d'envoyer, pour que le serveur sache qui
// prévenir sans deviner entre deux membres du même nom.

export const MENTION_TOKEN = /@\[([^\]\n]{1,32})\]\(([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\)/gi

const escRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Texte affiché → texte rangé. */
export function encodeMentions(text: string, map: Map<string, string>): string {
  let out = text
  for (const [name, handle] of map) {
    out = out.replace(new RegExp(`@${escRe(name)}(?![\\p{L}\\p{N}])`, 'gu'), `@[${name}](${handle})`)
  }
  return out
}

/** Texte rangé → texte affiché, et la table des mentions retrouvées. */
export function decodeMentions(text: string): { text: string; map: Map<string, string> } {
  const map = new Map<string, string>()
  const plain = text.replace(MENTION_TOKEN, (_m, name: string, handle: string) => { map.set(name, handle); return `@${name}` })
  return { text: plain, map }
}
