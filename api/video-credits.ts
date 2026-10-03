// /api/video-credits · le nom de la chaîne de chaque vidéo YouTube d'un cours.
//
//   GET /api/video-credits?ids=AAAAAAAAAAA,BBBBBBBBBBB
//   → { ok: true, credits: { AAAAAAAAAAA: { author, url } | null, ... } }
//
// Demandé : « crédite bien les auteurs et chaines youtube dans tous les cours
// en-dessous des vidéos ». Le nom n'est jamais écrit à la main (il serait
// inventé) : il est lu chez YouTube (oEmbed, la réponse publique de YouTube
// sur une vidéo), puis gardé en cache par le CDN. Le navigateur de l'élève
// ne parle qu'à ce serveur : rien ne part vers YouTube avant le clic.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { createHash } from 'node:crypto'
import { allow as rateAllow } from './_lib/ratelimit.js'

export const config = { maxDuration: 10 }

/** au plus trois vidéos par cours, avec de la marge */
export const MAX_IDS = 6
const UPSTREAM_TIMEOUT_MS = 4000
const ID = /^[A-Za-z0-9_-]{11}$/

export interface Credit { author: string; url: string }

/** La réponse d'oEmbed, réduite à ce qui s'affiche · pure, testable. Le nom est
 *  borné et nettoyé ; l'adresse n'est gardée que si elle mène à YouTube. */
export function readCredit(r: unknown): Credit | null {
  const o = (r && typeof r === 'object' ? r : {}) as Record<string, unknown>
  const author = typeof o.author_name === 'string' ? o.author_name.replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 80) : ''
  if (!author) return null
  const raw = typeof o.author_url === 'string' ? o.author_url : ''
  let url = ''
  try {
    const u = new URL(raw)
    if (u.protocol === 'https:' && (u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com')) url = u.toString()
  } catch { /* adresse illisible · le nom suffit */ }
  return { author, url }
}

/** Les identifiants demandés · valides, sans doublon, bornés. */
export function parseIds(q: string | null): string[] {
  return [...new Set((q || '').split(',').map((s) => s.trim()).filter((s) => ID.test(s)))].slice(0, MAX_IDS)
}

async function oembed(id: string): Promise<Credit | null> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), UPSTREAM_TIMEOUT_MS)
  try {
    const target = `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(`https://www.youtube.com/watch?v=${id}`)}`
    const res = await fetch(target, { signal: ctrl.signal })
    if (!res.ok) return null
    return readCredit(await res.json())
  } catch {
    return null
  } finally {
    clearTimeout(t)
  }
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    if (req.method !== 'GET') return send(res, 405, { ok: false, error: 'method' }, false)
    const url = new URL(req.url || '/', `https://${header(req, 'host') || 'localhost'}`)
    const ids = parseIds(url.searchParams.get('ids'))
    if (!ids.length) return send(res, 400, { ok: false, error: 'ids' }, false)
    // UN FREIN, PAS UN MUR · le CDN sert la plupart des réponses avant d'arriver ici
    const ip = createHash('sha256').update(`video-credits:${header(req, 'x-forwarded-for').split(',')[0].trim() || 'anon'}`).digest('hex')
    if (!(await rateAllow(`video-credits:${ip}`, 120, 60 * 60 * 1000))) return send(res, 429, { ok: false, error: 'rate' }, false)
    const found = await Promise.all(ids.map(oembed))
    const credits: Record<string, Credit | null> = {}
    ids.forEach((id, k) => { credits[id] = found[k] })
    // un nom de chaîne change rarement · gardé un mois, servi pendant le rafraîchissement
    return send(res, 200, { ok: true, credits }, found.some(Boolean))
  } catch {
    return send(res, 500, { ok: false, error: 'server' }, false)
  }
}

function header(req: IncomingMessage, name: string): string {
  const v = req.headers?.[name]
  return (Array.isArray(v) ? v[0] : v) || ''
}

function send(res: ServerResponse, status: number, body: unknown, cache: boolean): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('x-content-type-options', 'nosniff')
  res.setHeader('cache-control', cache ? 'public, max-age=86400, s-maxage=2592000, stale-while-revalidate=604800' : 'no-store')
  res.end(JSON.stringify(body))
}
