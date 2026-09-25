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
}

export interface CComment {
  id: string
  parentId: string | null
  body: string
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
export const createPost = (p: { category: CommunityCategory; title: string; body: string }) => post<{ id: string }>('post', p)
export const createComment = (c: { postId: string; parentId?: string | null; body: string }) => post<{ id: string }>('comment', c)
export const toggleLike = (type: 'post' | 'comment', id: string) => post<{ liked: boolean; likes: number }>('like', { type, id })
export const setPinned = (id: string, pinned: boolean) => post<{ pinned: boolean }>('pin', { id, pinned })
export const removeItem = (type: 'post' | 'comment', id: string) => post<{ deleted: boolean }>('delete', { type, id })

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
