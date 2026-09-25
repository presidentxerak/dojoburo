// /api/newsletter · l'adresse du week-end gratuit, et le consentement à la
// newsletter.
//
//   POST /api/newsletter                 { email, newsletter?, lang?, source? }
//   GET  /api/newsletter?action=unsubscribe&email=...&token=...
//
// Sans base (DATABASE_URL), il répond 503 « not_configured » et n'affirme
// jamais avoir enregistré quoi que ce soit : la formation gratuite s'ouvre
// quand même dans le navigateur, seule la collecte manque.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db.js'
import { originAllowed } from './_lib/origin.js'
import { allow as rateAllow } from './_lib/ratelimit.js'
import { parseSignup, tokenMatches } from './_lib/newsletter.js'
import { createHash } from 'node:crypto'

export const config = { maxDuration: 10 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const SECRET = ENV.NEWSLETTER_SECRET || ENV.CONNECTOR_ENC_KEY || ENV.DATABASE_URL || ''
const MAX_BODY = 2 * 1024

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    if (req.method === 'OPTIONS') return send(res, 204, {})
    const origin = header(req, 'origin')
    const host = header(req, 'host')
    if (origin && !originAllowed(origin, host, ALLOWED_ORIGIN)) return send(res, 403, { ok: false, error: 'origin' })
    const method = req.method || 'GET'
    if (method !== 'GET' && method !== 'POST') return send(res, 405, { ok: false, error: 'method' })
    const url = new URL(req.url || '/', `https://${host || 'localhost'}`)

    if (method === 'GET') {
      if (url.searchParams.get('action') !== 'unsubscribe') return send(res, 400, { ok: false, error: 'action' })
      const email = (url.searchParams.get('email') || '').trim().toLowerCase()
      const token = url.searchParams.get('token') || ''
      if (!email || !SECRET || !tokenMatches(email, token, SECRET)) return send(res, 400, { ok: false, error: 'token' })
      if (!dbConfigured()) return send(res, 503, { ok: false, error: 'not_configured' })
      await getPool().query(
        'update newsletter_contacts set newsletter = false, unsubscribed_at = now(), updated_at = now() where email = $1',
        [email],
      )
      return send(res, 200, { ok: true, unsubscribed: true })
    }

    let body: unknown
    try { body = JSON.parse(await readBody(req)) } catch { return send(res, 400, { ok: false, error: 'bad_json' }) }
    const s = parseSignup(body)
    if ('error' in s) return send(res, 400, { ok: false, error: s.error })

    if (!dbConfigured()) return send(res, 503, { ok: false, error: 'not_configured' })

    const ip = createHash('sha256').update(`newsletter:ip:${SECRET}:${clientIp(req)}`).digest('hex')
    if (!(await rateAllow(`newsletter:ip:${ip}`, 8, 60 * 60 * 1000))) return send(res, 429, { ok: false, error: 'rate' })

    // UN CONSENTEMENT DONNÉ N'EST PAS RETIRÉ PAR UN FORMULAIRE SANS CASE · seul
    // le lien de désinscription le retire. Un nouveau consentement efface une
    // désinscription passée.
    await getPool().query(
      `insert into newsletter_contacts (email, lang, source, newsletter, consent_at)
         values ($1, $2, $3, $4, case when $4 then now() end)
       on conflict (email) do update set
         lang = excluded.lang,
         newsletter = newsletter_contacts.newsletter or excluded.newsletter,
         consent_at = case when excluded.newsletter then now() else newsletter_contacts.consent_at end,
         unsubscribed_at = case when excluded.newsletter then null else newsletter_contacts.unsubscribed_at end,
         updated_at = now()`,
      [s.email, s.lang, s.source, s.newsletter],
    )
    return send(res, 200, { ok: true, newsletter: s.newsletter })
  } catch {
    return send(res, 500, { ok: false, error: 'server' })
  }
}

function header(req: IncomingMessage, name: string): string {
  const v = req.headers?.[name]
  return (Array.isArray(v) ? v[0] : v) || ''
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
