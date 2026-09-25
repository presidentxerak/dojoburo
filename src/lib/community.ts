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
} as const

export interface Author { name: string; key: string }

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

export type CError = 'not_configured' | 'auth' | 'auth_off' | 'join' | 'rate' | 'not_found' | 'invalid' | 'forbidden' | 'network'

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

export const fetchMe = () => call<{ member: { name: string; bio: string } | null; admin: boolean }>('/api/community?action=me')

export const joinCommunity = (name: string) => post<{ member: { name: string } }>('join', { name })
export const createPost = (p: { category: CommunityCategory; title: string; body: string }) => post<{ id: string }>('post', p)
export const createComment = (c: { postId: string; parentId?: string | null; body: string }) => post<{ id: string }>('comment', c)
export const toggleLike = (type: 'post' | 'comment', id: string) => post<{ liked: boolean; likes: number }>('like', { type, id })
export const setPinned = (id: string, pinned: boolean) => post<{ pinned: boolean }>('pin', { id, pinned })
export const removeItem = (type: 'post' | 'comment', id: string) => post<{ deleted: boolean }>('delete', { type, id })
