// LE CLAN · la logique pure du fil de la communauté.
//
// Tout ce qui décide si un message est recevable vit ici, et rien de ce qui
// touche le réseau ou la base : valider, nettoyer, repérer le spam évident,
// sérialiser une ligne pour le navigateur, coder et décoder le curseur de
// pagination. C'est ce qui permet à scripts/test-clan.mjs de tout éprouver sans
// Postgres, et à api/clan.ts de n'être que du HTTP et du SQL.
//
// L'IDENTITÉ SANS COMPTE. Le jeu n'a pas de comptes : la progression vit dans
// le navigateur. Un auteur est donc un PSEUDONYME choisi par l'élève et une CLÉ
// D'APPAREIL tirée au hasard dans son navigateur. Le serveur ne garde que
// l'empreinte SHA-256 de cette clé : elle suffit à reconnaître l'auteur quand il
// veut effacer son message, et elle ne permet pas de se faire passer pour lui.
// Aucune adresse, aucune IP en clair (l'IP n'est hachée, avec un sel serveur,
// que pour compter les requêtes).

// ---- les bornes ----------------------------------------------------------

export const LIMITS = {
  pseudo: { min: 2, max: 24 },
  title: { min: 3, max: 80 },
  body: { min: 10, max: 1000 },
  link: { max: 300 },
  tags: { max: 3 },
  /** au-delà, c'est de la publicité, pas un partage */
  bodyLinks: 2,
  pageSize: 20,
  /** à partir de ce nombre de signalements, le message quitte le fil */
  hideAt: 3,
  /** un même texte, par le même appareil, dans cet intervalle, est un doublon */
  duplicateWindowMs: 60 * 60 * 1000,
} as const

/** Les étiquettes permises · une liste fermée, que le client recopie
 *  (src/lib/clan.ts) et que scripts/test-clan.mjs compare. */
export const TAGS = ['agent', 'prompt', 'automation', 'rag', 'frugality', 'game'] as const
export type Tag = (typeof TAGS)[number]

/** Les plafonds de débit, par appareil ET par IP hachée. */
export const RATES = {
  post: { max: 3, windowMs: 60 * 60 * 1000 },
  bravo: { max: 60, windowMs: 60 * 60 * 1000 },
  report: { max: 20, windowMs: 60 * 60 * 1000 },
  remove: { max: 30, windowMs: 60 * 60 * 1000 },
  list: { max: 240, windowMs: 10 * 60 * 1000 },
} as const

// ---- le nettoyage ---------------------------------------------------------

// Les caractères de contrôle (C0, DEL, C1) et les caractères de FORMAT
// invisibles : espaces de largeur nulle, marques et surcharges de direction. Ces
// derniers servent à maquiller un texte (un lien qui s'affiche à l'envers, un
// pseudonyme identique à un autre à l'œil) et n'ont rien à faire dans un fil.
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g
const FORMAT = /[­​-‏‪-‮⁠-⁤⁦-⁯﻿]/g

/** Une ligne · titre, pseudonyme : aucun retour, espaces resserrés. */
export function cleanLine(v: unknown): string {
  if (typeof v !== 'string') return ''
  return v
    .normalize('NFC')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(CONTROL, '')
    .replace(FORMAT, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Un texte · les retours à la ligne restent, trois lignes vides n'en font
 *  plus qu'une, et rien d'invisible ne passe. */
export function cleanText(v: unknown): string {
  if (typeof v !== 'string') return ''
  return v
    .normalize('NFC')
    .replace(/\r\n?/g, '\n')
    .replace(/\t/g, ' ')
    .replace(CONTROL, '')
    .replace(FORMAT, '')
    .split('\n').map((l) => l.replace(/[  ]+/g, ' ').trimEnd()).join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/** La longueur en caractères lus, pas en unités UTF-16 · un emoji compte un. */
export const charLen = (s: string): number => [...s].length

// ---- les liens --------------------------------------------------------------

/** Les liens écrits dans un texte · http(s)://… ou www.… */
export function countLinks(text: string): number {
  return (text.match(/\b(?:https?:\/\/|www\.)[^\s]+/gi) || []).length
}

export type LinkResult = { ok: true; link: string | null } | { ok: false; reason: string }

/** Le lien vers ce qui a été construit · facultatif, http(s) seulement. */
export function cleanLink(v: unknown): LinkResult {
  const s = cleanLine(v)
  if (!s) return { ok: true, link: null }
  if (charLen(s) > LIMITS.link.max) return { ok: false, reason: 'too_long' }
  if (!/^https?:\/\//i.test(s)) return { ok: false, reason: 'scheme' }
  let u: URL
  try { u = new URL(s) } catch { return { ok: false, reason: 'malformed' } }
  if (u.protocol !== 'https:' && u.protocol !== 'http:') return { ok: false, reason: 'scheme' }
  // Des identifiants dans l'adresse (https://moi:secret@…) ne se partagent pas,
  // et « https://site-connu@autre-site » est la forme classique du leurre.
  if (u.username || u.password) return { ok: false, reason: 'credentials' }
  const host = u.hostname.toLowerCase()
  if (!host.includes('.') || host.endsWith('.') || /^[\d.]+$/.test(host) || host.startsWith('[')) {
    return { ok: false, reason: 'host' }
  }
  if (host === 'localhost' || host.endsWith('.localhost') || host.endsWith('.local') || host.endsWith('.internal')) {
    return { ok: false, reason: 'host' }
  }
  return { ok: true, link: u.href }
}

// ---- les étiquettes ----------------------------------------------------------

export type TagsResult = { ok: true; tags: Tag[] } | { ok: false; reason: string }

export function cleanTags(v: unknown): TagsResult {
  if (v === undefined || v === null) return { ok: true, tags: [] }
  if (!Array.isArray(v)) return { ok: false, reason: 'shape' }
  const out: Tag[] = []
  for (const raw of v) {
    const t = typeof raw === 'string' ? raw.trim().toLowerCase() : ''
    if (!(TAGS as readonly string[]).includes(t)) return { ok: false, reason: 'unknown' }
    if (!out.includes(t as Tag)) out.push(t as Tag)
  }
  if (out.length > LIMITS.tags.max) return { ok: false, reason: 'too_many' }
  return { ok: true, tags: out }
}

// ---- l'identité -----------------------------------------------------------

/** La clé d'appareil · tirée au hasard par le navigateur, en base64url. */
export const isDeviceKey = (v: unknown): v is string =>
  typeof v === 'string' && /^[A-Za-z0-9_-]{32,128}$/.test(v)

export const isPostId = (v: unknown): v is string =>
  typeof v === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(v)

/** Un pseudonyme · lettres, chiffres, espace, point, tiret, apostrophe. */
export function cleanPseudo(v: unknown): { ok: true; pseudo: string } | { ok: false; reason: string } {
  const s = cleanLine(v)
  const n = charLen(s)
  if (n < LIMITS.pseudo.min) return { ok: false, reason: 'too_short' }
  if (n > LIMITS.pseudo.max) return { ok: false, reason: 'too_long' }
  if (!/^[\p{L}\p{M}\p{N}][\p{L}\p{M}\p{N} ._'’-]*$/u.test(s)) return { ok: false, reason: 'chars' }
  return { ok: true, pseudo: s }
}

// ---- la validation d'un message -----------------------------------------

export interface Draft {
  pseudo: string
  title: string
  body: string
  link: string | null
  tags: Tag[]
}

export type Invalid = { ok: false; error: 'invalid' | 'spam'; field: string; reason: string }
export type DraftResult = { ok: true; draft: Draft } | Invalid

const bad = (field: string, reason: string): Invalid => ({ ok: false, error: 'invalid', field, reason })

function sized(field: 'title' | 'body', s: string): Invalid | null {
  const n = charLen(s)
  if (n < LIMITS[field].min) return bad(field, 'too_short')
  if (n > LIMITS[field].max) return bad(field, 'too_long')
  return null
}

/**
 * Ce que le navigateur envoie, rendu recevable ou refusé avec le champ en
 * cause. Le refus nomme le champ et la raison, pour que l'écran puisse dire
 * quoi corriger au lieu d'un « erreur » qui n'aide personne.
 */
export function validateDraft(input: unknown): DraftResult {
  const o = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>

  const p = cleanPseudo(o.pseudo)
  if (!p.ok) return bad('pseudo', p.reason)

  const title = cleanLine(o.title)
  const t = sized('title', title)
  if (t) return t

  const body = cleanText(o.body)
  const b = sized('body', body)
  if (b) return b
  if (countLinks(body) > LIMITS.bodyLinks) return { ok: false, error: 'spam', field: 'body', reason: 'links' }

  const l = cleanLink(o.link)
  if (!l.ok) return bad('link', l.reason)

  const tg = cleanTags(o.tags)
  if (!tg.ok) return bad('tags', tg.reason)

  return { ok: true, draft: { pseudo: p.pseudo, title, body, link: l.link, tags: tg.tags } }
}

/** L'empreinte d'un texte pour repérer un doublon · casse et espaces ignorés,
 *  pour qu'un espace ajouté ne suffise pas à contourner la règle. */
export function bodyFingerprintSource(body: string): string {
  return cleanText(body).toLowerCase().replace(/\s+/g, ' ').trim()
}

/** Le même texte, par le même appareil, dans l'heure · c'est un doublon. */
export function isDuplicate(
  recent: { bodyHash: string; createdAt: Date | string }[],
  bodyHash: string,
  now: number = Date.now(),
): boolean {
  return recent.some((r) => {
    const t = new Date(r.createdAt).getTime()
    return r.bodyHash === bodyHash && Number.isFinite(t) && now - t < LIMITS.duplicateWindowMs
  })
}

// ---- les empreintes -------------------------------------------------------

async function sha256Hex(s: string): Promise<string> {
  const d = await globalThis.crypto.subtle.digest('SHA-256', new TextEncoder().encode(s))
  return [...new Uint8Array(d)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

/** Ce que le serveur garde de la clé d'appareil · rien d'autre. */
export const hashDeviceKey = (key: string): Promise<string> => sha256Hex(`clan:device:${key}`)

/** L'IP ne sert qu'à compter · hachée avec un sel serveur, jamais stockée. */
export const hashIp = (ip: string, salt: string): Promise<string> => sha256Hex(`clan:ip:${salt}:${ip}`)

export const hashBody = (body: string): Promise<string> => sha256Hex(`clan:body:${bodyFingerprintSource(body)}`)

// ---- le curseur ----------------------------------------------------------

export interface Cursor { t: string; id: string }

function b64url(s: string): string {
  const bytes = new TextEncoder().encode(s)
  let bin = ''
  for (const b of bytes) bin += String.fromCharCode(b)
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function unb64url(s: string): string {
  const pad = s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4)
  const bin = atob(pad)
  return new TextDecoder().decode(Uint8Array.from(bin, (c) => c.charCodeAt(0)))
}

/** Le curseur est la position du dernier message lu · (date, identifiant),
 *  parce que deux messages peuvent partager la même milliseconde. */
export function encodeCursor(c: Cursor): string {
  return b64url(`${new Date(c.t).toISOString()}|${c.id.toLowerCase()}`)
}

/** Un curseur illisible rend null · la liste repart alors du début, plutôt que
 *  de répondre une erreur à un lien un peu abîmé. */
export function decodeCursor(s: unknown): Cursor | null {
  if (typeof s !== 'string' || !s || s.length > 200 || !/^[A-Za-z0-9_-]+$/.test(s)) return null
  let raw: string
  try { raw = unb64url(s) } catch { return null }
  const [t, id, extra] = raw.split('|')
  if (extra !== undefined || !t || !isPostId(id)) return null
  const ms = Date.parse(t)
  if (!Number.isFinite(ms) || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(t)) return null
  return { t: new Date(ms).toISOString(), id: id.toLowerCase() }
}

// ---- la sérialisation ------------------------------------------------------

/** Une ligne de clan_posts telle que la requête la rend. */
export interface PostRow {
  id: string
  author_hash: string
  pseudo: string
  title: string
  body: string
  link: string | null
  tags: string[] | null
  created_at: Date | string
  bravos: number | string
  bravoed?: boolean | null
}

/** Ce que le navigateur reçoit · jamais l'empreinte de l'auteur. `mine` est
 *  calculé ici, par comparaison avec l'empreinte de celui qui lit. */
export interface PublicPost {
  id: string
  pseudo: string
  title: string
  body: string
  link: string | null
  tags: Tag[]
  created_at: string
  bravos: number
  bravoed: boolean
  mine: boolean
}

export function serializePost(row: PostRow, viewerHash: string | null): PublicPost {
  const tags = (row.tags || []).filter((t): t is Tag => (TAGS as readonly string[]).includes(t))
  return {
    id: row.id,
    pseudo: row.pseudo,
    title: row.title,
    body: row.body,
    link: row.link || null,
    tags,
    created_at: new Date(row.created_at).toISOString(),
    bravos: Math.max(0, Number(row.bravos) || 0),
    bravoed: !!row.bravoed,
    mine: !!viewerHash && row.author_hash === viewerHash,
  }
}

/** Une page · la requête demande une ligne de plus que la taille, et c'est
 *  cette ligne en trop qui dit s'il existe une suite. */
export function toPage(rows: PostRow[], viewerHash: string | null, size: number = LIMITS.pageSize): {
  posts: PublicPost[]; next: string | null
} {
  const page = rows.slice(0, size)
  const last = page[page.length - 1]
  return {
    posts: page.map((r) => serializePost(r, viewerHash)),
    next: rows.length > size && last ? encodeCursor({ t: new Date(last.created_at).toISOString(), id: last.id }) : null,
  }
}
