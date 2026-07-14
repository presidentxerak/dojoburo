// Real domain-availability check, server-side (no API key needed).
//
// Uses RDAP (the successor to WHOIS): rdap.org bootstraps to the authoritative
// registry RDAP server for each TLD. A 404 means "no such registration" →
// available; a 200 means the domain is registered → taken. Runs server-side so
// there is no CSP / redirect problem for the browser, and no key to manage.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { originAllowed } from './_lib/origin'

export const config = { maxDuration: 20 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const TLDS = ['com', 'io', 'co', 'app', 'ai', 'dev', 'xyz']
const TIMEOUT_MS = 6000

function slug(s: string): string {
  return s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '').slice(0, 40)
}

async function checkOne(domain: string): Promise<'available' | 'taken' | 'unknown'> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(`https://rdap.org/domain/${domain}`, {
      signal: ctrl.signal,
      redirect: 'follow',
      headers: { accept: 'application/rdap+json' },
    })
    if (res.status === 404) return 'available'
    if (res.status === 200) return 'taken'
    return 'unknown'
  } catch {
    return 'unknown'
  } finally {
    clearTimeout(t)
  }
}

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') { res.statusCode = 204; res.end(); return }
  const origin = header(req, 'origin')
  const host = header(req, 'host') || ''
  if (origin && !originAllowed(origin, host, ALLOWED_ORIGIN)) { send(res, 403, { ok: false, error: 'origin' }); return }

  const url = new URL(req.url || '', 'http://x')
  const name = slug(url.searchParams.get('name') || '')
  if (!name || name.length < 2) { send(res, 400, { ok: false, error: 'bad_name' }); return }

  // which TLDs to test (default set, or a comma list capped at 8)
  const req_tlds = (url.searchParams.get('tlds') || '').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)
  const tlds = (req_tlds.length ? req_tlds : TLDS).filter((t) => /^[a-z]{2,10}$/.test(t)).slice(0, 8)

  const results = await Promise.all(
    tlds.map(async (tld) => ({ domain: `${name}.${tld}`, tld, status: await checkOne(`${name}.${tld}`) })),
  )
  send(res, 200, { ok: true, name, results })
}

function header(req: IncomingMessage, k: string): string {
  const v = req.headers[k.toLowerCase()]
  return Array.isArray(v) ? v[0] : (v || '')
}
function send(res: ServerResponse, code: number, body: unknown): void {
  res.statusCode = code
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
