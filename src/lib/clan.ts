// LE CLAN · le côté navigateur du fil de la communauté.
//
// Deux choses, et seulement deux :
//
//   · L'IDENTITÉ ANONYME · une clé d'appareil tirée au hasard et le dernier
//     pseudonyme employé, rangés dans ce navigateur. Ce n'est pas de la
//     progression (celle-ci ne vit que dans src/academy/progress), c'est ce
//     qui permet d'effacer son propre message sans compte. Ce fichier est hors
//     de src/game pour cette raison : le jeu n'ouvre aucun stockage.
//
//   · LES APPELS · à /api/clan, par apiFetch, pour l'échéance. Chaque appel
//     rend un résultat typé et ne lève jamais : l'écran a toujours quelque
//     chose de juste à dire, y compris « le serveur n'est pas configuré ».
//
// Les bornes et les étiquettes sont recopiées de api/_lib/clan.ts, parce que le
// paquet du navigateur ne lit pas le dossier api/. scripts/test-clan.mjs
// vérifie que les deux copies disent la même chose.
import { apiFetch } from './apiFetch'

export const CLAN_TAGS = ['agent', 'prompt', 'automation', 'rag', 'frugality', 'game'] as const
export type ClanTag = (typeof CLAN_TAGS)[number]

export const CLAN_LIMITS = {
  pseudo: { min: 2, max: 24 },
  title: { min: 3, max: 80 },
  body: { min: 10, max: 1000 },
  link: { max: 300 },
  tags: { max: 3 },
} as const

export interface ClanPost {
  id: string
  pseudo: string
  title: string
  body: string
  link: string | null
  tags: ClanTag[]
  created_at: string
  bravos: number
  bravoed: boolean
  mine: boolean
}

export interface ClanDraft {
  pseudo: string
  title: string
  body: string
  link: string
  tags: ClanTag[]
}

/** Ce que le serveur peut refuser · repris tel quel pour choisir le message. */
export type ClanError =
  | 'not_configured' | 'unavailable' | 'network' | 'rate' | 'invalid' | 'spam'
  | 'not_found' | 'own_post' | 'origin' | 'key' | 'unknown'

export type ClanFail = { ok: false; error: ClanError; field?: string; reason?: string }

// ---- l'identité -------------------------------------------------------------

const KEY = 'dojoburo.clan.key'
const PSEUDO = 'dojoburo.clan.pseudo'

function read(k: string): string {
  try { return localStorage.getItem(k) || '' } catch { return '' }
}
function write(k: string, v: string): void {
  try { localStorage.setItem(k, v) } catch { /* navigation privée · la clé vit le temps de la page */ }
}

let memoryKey = ''

/** La clé de cet appareil · créée au premier besoin, 32 octets au hasard. */
export function deviceKey(): string {
  const saved = read(KEY)
  if (/^[A-Za-z0-9_-]{32,128}$/.test(saved)) return saved
  if (memoryKey) return memoryKey
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  let bin = ''
  for (const b of bytes) bin += String.fromCharCode(b)
  memoryKey = btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  write(KEY, memoryKey)
  return memoryKey
}

/** La clé si elle existe déjà · la lecture du fil n'en crée pas. */
function existingKey(): string {
  const saved = read(KEY)
  return /^[A-Za-z0-9_-]{32,128}$/.test(saved) ? saved : memoryKey
}

export const savedPseudo = (): string => read(PSEUDO)
export const savePseudo = (p: string): void => write(PSEUDO, p.trim())

// ---- les appels ---------------------------------------------------------------

async function call<T>(url: string, init: RequestInit, withKey: 'need' | 'if-any'): Promise<({ ok: true } & T) | ClanFail> {
  const key = withKey === 'need' ? deviceKey() : existingKey()
  let res: Response
  try {
    res = await apiFetch(url, {
      ...init,
      headers: {
        ...(init.body ? { 'content-type': 'application/json' } : {}),
        ...(key ? { 'x-clan-key': key } : {}),
      },
    })
  } catch {
    return { ok: false, error: 'network' }
  }
  let j: any = null
  try { j = await res.json() } catch { /* une page d'erreur de l'hébergeur */ }
  if (j && j.ok === true) return j
  // PAS DE JSON · la fonction n'existe pas sur ce déploiement (un serveur de
  // développement sert la page d'accueil à sa place) : c'est une absence de
  // configuration, pas une panne.
  const error = (j && typeof j.error === 'string'
    ? j.error
    : !j && (res.status === 200 || res.status === 404) ? 'not_configured' : 'unavailable') as ClanError
  return { ok: false, error, field: j?.field, reason: j?.reason }
}

export function listPosts(cursor?: string | null) {
  const q = cursor ? `?cursor=${encodeURIComponent(cursor)}` : ''
  return call<{ posts: ClanPost[]; next: string | null }>(`/api/clan${q}`, { method: 'GET' }, 'if-any')
}

export function createPost(d: ClanDraft) {
  return call<{ post: ClanPost }>('/api/clan?action=create', {
    method: 'POST',
    body: JSON.stringify({ pseudo: d.pseudo, title: d.title, body: d.body, link: d.link || null, tags: d.tags }),
  }, 'need')
}

export function toggleBravo(id: string) {
  return call<{ id: string; bravoed: boolean; bravos: number }>('/api/clan?action=bravo', {
    method: 'POST', body: JSON.stringify({ id }),
  }, 'need')
}

export function reportPost(id: string) {
  return call<{ id: string; reported: boolean; hidden: boolean }>('/api/clan?action=report', {
    method: 'POST', body: JSON.stringify({ id }),
  }, 'need')
}

export function deletePost(id: string) {
  return call<{ id: string; deleted: boolean }>(`/api/clan?id=${encodeURIComponent(id)}`, { method: 'DELETE' }, 'need')
}
