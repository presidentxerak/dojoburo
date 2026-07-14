// DojoBuro text-to-speech proxy (Vercel Node serverless).
//
// The Video studio's Voiceover panel calls this to turn a script into real
// narration via ElevenLabs. The browser can't call ElevenLabs directly (no
// permissive CORS), so this thin server route relays the request. The API key
// is the user's own: it comes either in the request body (BYOK · kept only in
// their browser, sent per request, never stored here) or from the operator's
// ELEVENLABS_API_KEY env var as a fallback. The target host is fixed, so there
// is no SSRF surface — only origin-lock + rate-limit for abuse control.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { originAllowed } from './_lib/origin'

export const config = { maxDuration: 30 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const OPERATOR_KEY = ENV.ELEVENLABS_API_KEY || ''
const TIMEOUT_MS = 25_000
const MAX_CHARS = 2500
// abuse control: cap requests per IP (TTS calls cost money on the key owner's side)
const RATE_MAX = int(ENV.TTS_RATE_MAX, 20)
const RATE_WINDOW_MS = int(ENV.TTS_RATE_WINDOW_MS, 10 * 60 * 1000)
const hits = new Map<string, number[]>()
const BOT_UA = /(bot|crawl|spider|scrapy|python-requests|httpclient|wget|libwww|curl\/|go-http|semrush|ahrefs|masscan|nmap|zgrab)/i

// A small, stable set of ElevenLabs public voices so the UI can offer a picker
// without an extra round-trip. Users can also paste any voice id.
interface Body { text?: string; voiceId?: string; key?: string; modelId?: string }

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') return sendJson(res, 204, {})
  if (req.method !== 'POST') return sendJson(res, 405, { ok: false, error: 'method' })

  // only our own site may drive this proxy (defends against CSRF / abuse)
  const origin = header(req, 'origin')
  const host = header(req, 'host') || ''
  if (origin && !originAllowed(origin, host, ALLOWED_ORIGIN)) return sendJson(res, 403, { ok: false, error: 'origin' })
  const ua = header(req, 'user-agent') || ''
  if (!ua || BOT_UA.test(ua)) return sendJson(res, 403, { ok: false, error: 'forbidden' })
  const ip = (header(req, 'x-forwarded-for') || '').split(',')[0].trim() || 'anon'
  if (!allow(ip)) return sendJson(res, 429, { ok: false, error: 'rate' })

  let body: Body = {}
  try { body = JSON.parse(await readBody(req)) } catch { return sendJson(res, 400, { ok: false, error: 'bad_json' }) }

  const text = (body.text || '').trim().slice(0, MAX_CHARS)
  if (!text) return sendJson(res, 400, { ok: false, error: 'A script (text) is required.' })

  const key = (body.key || '').trim() || OPERATOR_KEY
  if (!key) return sendJson(res, 400, { ok: false, error: 'no_key', hint: 'Add your ElevenLabs API key to generate a voiceover.' })

  const voiceId = sanitizeId(body.voiceId) || '21m00Tcm4TlvDq8ikWAM' // "Rachel" · ElevenLabs default
  const modelId = sanitizeId(body.modelId) || 'eleven_multilingual_v2'

  try {
    const upstream = await withTimeout(fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: { 'xi-api-key': key, 'content-type': 'application/json', accept: 'audio/mpeg' },
      body: JSON.stringify({ text, model_id: modelId, voice_settings: { stability: 0.5, similarity_boost: 0.75 } }),
    }))
    if (!upstream.ok) {
      const detail = await upstream.text().catch(() => '')
      const msg = upstream.status === 401 ? 'ElevenLabs rejected the API key.'
        : upstream.status === 429 ? 'ElevenLabs rate limit / quota reached.'
        : `ElevenLabs error (${upstream.status}).`
      return sendJson(res, 200, { ok: false, error: msg, detail: detail.slice(0, 300) })
    }
    const buf = Buffer.from(await upstream.arrayBuffer())
    res.statusCode = 200
    res.setHeader('content-type', 'audio/mpeg')
    res.setHeader('cache-control', 'no-store')
    res.setHeader('x-robots-tag', 'noindex, nofollow')
    if (ALLOWED_ORIGIN) res.setHeader('access-control-allow-origin', ALLOWED_ORIGIN)
    res.end(buf)
  } catch (e) {
    return sendJson(res, 200, { ok: false, error: e instanceof Error ? e.message : 'tts_failed' })
  }
}

function sanitizeId(v: string | undefined): string { return (v || '').replace(/[^a-zA-Z0-9_]/g, '').slice(0, 40) }
function withTimeout(p: Promise<Response>): Promise<Response> {
  return Promise.race([p, new Promise<Response>((_, rej) => setTimeout(() => rej(new Error('timeout')), TIMEOUT_MS))])
}
function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => { d += c.toString('utf8'); if (d.length > 20000) { reject(new Error('too_large')); req.destroy() } })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}
function header(req: IncomingMessage, name: string): string | null {
  const v = req.headers[name]
  return Array.isArray(v) ? v[0] : v ?? null
}
function int(v: string | undefined, d: number): number { const n = v ? parseInt(v, 10) : NaN; return Number.isFinite(n) ? n : d }
function allow(ip: string): boolean {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_MAX) { hits.set(ip, arr); return false }
  arr.push(now); hits.set(ip, arr)
  if (hits.size > 5000) hits.clear()
  return true
}
function sendJson(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.setHeader('x-robots-tag', 'noindex, nofollow')
  if (ALLOWED_ORIGIN) {
    res.setHeader('access-control-allow-origin', ALLOWED_ORIGIN)
    res.setHeader('access-control-allow-methods', 'POST, OPTIONS')
    res.setHeader('access-control-allow-headers', 'content-type')
  }
  res.end(JSON.stringify(body))
}
