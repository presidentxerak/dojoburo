// Google Fonts catalogue proxy · exposes the full Google Fonts library to the
// Typography step without shipping an API key to the browser.
//
// The operator sets GOOGLE_FONTS_API_KEY (a Google Fonts Developer API key) in
// the server environment; this endpoint calls the Web Fonts Developer API
// server-side and returns a compact { name, cat } list. The key never reaches
// the client and the browser never has to talk to googleapis.com (which the
// site CSP does not allow). If no key is configured the client keeps using its
// built-in curated list, so the feature degrades gracefully.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { originAllowed } from './_lib/origin'

export const config = { maxDuration: 15 }

const ENV = process.env as Record<string, string | undefined>
const KEY = ENV.GOOGLE_FONTS_API_KEY || ENV.GOOGLE_FONTS_KEY || ''
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const TIMEOUT_MS = 9000

type Cat = 'Sans' | 'Serif' | 'Display' | 'Mono' | 'Handwriting'
interface OutFont { name: string; cat: Cat }

// map the API's category to our compact bucket
const CAT: Record<string, Cat> = {
  'sans-serif': 'Sans',
  serif: 'Serif',
  display: 'Display',
  handwriting: 'Handwriting',
  monospace: 'Mono',
}

// module-scope cache · the catalogue is effectively static, so a warm lambda
// serves it without re-hitting Google. Cached for 12h.
let CACHE: { at: number; fonts: OutFont[] } | null = null
const TTL_MS = 12 * 60 * 60 * 1000

async function fetchCatalogue(): Promise<OutFont[]> {
  if (CACHE && Date.now() - CACHE.at < TTL_MS) return CACHE.fonts
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=${encodeURIComponent(KEY)}`
    const res = await fetch(url, { signal: ctrl.signal, headers: { accept: 'application/json' } })
    if (!res.ok) throw new Error(`status ${res.status}`)
    const data = (await res.json()) as { items?: Array<{ family?: string; category?: string }> }
    const seen = new Set<string>()
    const fonts: OutFont[] = []
    for (const it of data.items || []) {
      const name = (it.family || '').trim()
      if (!name || seen.has(name)) continue
      seen.add(name)
      fonts.push({ name, cat: CAT[it.category || ''] || 'Sans' })
    }
    CACHE = { at: Date.now(), fonts }
    return fonts
  } finally {
    clearTimeout(t)
  }
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return }
  const origin = header(req, 'origin')
  const host = header(req, 'host') || ''
  if (origin && !originAllowed(origin, host, ALLOWED_ORIGIN)) { send(res, 403, { ok: false, error: 'origin' }, false); return }

  if (!KEY) { send(res, 200, { ok: false, error: 'no_key' }, false); return }

  try {
    const fonts = await fetchCatalogue()
    send(res, 200, { ok: true, count: fonts.length, fonts }, true)
  } catch (e) {
    send(res, 200, { ok: false, error: 'fetch_failed', detail: String((e as Error)?.message || e) }, false)
  }
}

function header(req: IncomingMessage, k: string): string {
  const v = req.headers[k.toLowerCase()]
  return Array.isArray(v) ? v[0] : (v || '')
}
function send(res: ServerResponse, code: number, body: unknown, cacheable: boolean): void {
  res.statusCode = code
  res.setHeader('content-type', 'application/json')
  // the catalogue is static · let the CDN/browser cache a successful list
  res.setHeader('cache-control', cacheable ? 'public, max-age=43200, s-maxage=43200' : 'no-store')
  res.end(JSON.stringify(body))
}
