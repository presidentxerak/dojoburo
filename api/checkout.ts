// DojoBuro fiat processor — secure server-side Stripe Checkout proxy.
//
// Runs on Vercel Edge. The Stripe secret key lives ONLY here (never in the
// browser). It creates a hosted Checkout Session for a fiat top-up and returns
// its URL; the browser redirects there to pay by card. The charge is then
// SETTLED IN XRP via x402: on `checkout.session.completed` a webhook submits
// the equivalent XRP to the user's dojo wallet (see the NEXT STEP note at the
// bottom). Until STRIPE_SECRET_KEY is set the endpoint returns
// { ok:false, error:'not_configured' } and the UI degrades gracefully.
//
// No Stripe SDK — the REST API is called with form-urlencoded fetch so this
// stays a single dependency-free Edge function, mirroring api/chat.ts.

export const config = { runtime: 'edge' }

const ENV: Record<string, string | undefined> = ((globalThis as any).process?.env ?? {}) as any

// ---- tunables (overridable via env) ---------------------------------------
const RATE_MAX = int(ENV.CHECKOUT_RATE_MAX, 12) // sessions per IP …
const RATE_WINDOW_MS = int(ENV.CHECKOUT_RATE_WINDOW_MS, 10 * 60 * 1000) // … per window
const MIN_MAJOR = num(ENV.CHECKOUT_MIN_AMOUNT, 1) // min charge in currency major units
const MAX_MAJOR = num(ENV.CHECKOUT_MAX_AMOUNT, 5000) // max charge in currency major units
const UPSTREAM_TIMEOUT_MS = int(ENV.CHECKOUT_TIMEOUT_MS, 12000)
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const SITE_URL = ENV.CHECKOUT_SITE_URL || '' // e.g. https://dojoburo.app

// Stripe expects amounts in the smallest unit. Zero-decimal currencies (JPY)
// use the major amount directly; the rest are ×100.
const SUPPORTED: Record<string, { zeroDecimal: boolean }> = {
  USD: { zeroDecimal: false },
  EUR: { zeroDecimal: false },
  JPY: { zeroDecimal: true },
}

// in-memory rate limiter (per Edge instance; use Upstash/KV for a hard global cap)
const hits = new Map<string, number[]>()

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(req) })
  if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405, req)

  // origin lock
  const origin = req.headers.get('origin') || ''
  const host = req.headers.get('host') || ''
  if (origin) {
    // same-site (www-insensitive) OR the configured origin — not an exact
    // string match, so www/non-www/preview URLs of our own site all pass.
    const bare = (h: string) => { try { return new URL(/^https?:/.test(h) ? h : 'https://' + h).host.replace(/^www\./, '').toLowerCase() } catch { return h.replace(/^www\./, '').toLowerCase() } }
    const ok = (host && bare(origin) === bare(host)) || (!!ALLOWED_ORIGIN && bare(origin) === bare(ALLOWED_ORIGIN))
    if (!ok) return json({ ok: false, error: 'origin' }, 403, req)
  }

  // rate limit
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'anon'
  if (!allow(ip)) return json({ ok: false, error: 'rate' }, 429, req)

  // parse + validate
  let body: any
  try {
    const raw = await req.text()
    if (raw.length > 4000) return json({ ok: false, error: 'too_large' }, 413, req)
    body = JSON.parse(raw)
  } catch {
    return json({ ok: false, error: 'bad_json' }, 400, req)
  }

  const currency = String(body?.currency || '').toUpperCase()
  const amount = Number(body?.amount)
  const email = typeof body?.email === 'string' ? body.email.slice(0, 200) : ''
  const kind = typeof body?.kind === 'string' ? body.kind.slice(0, 40) : 'credits'
  // optional account-mapping hints carried through to the settlement webhook
  const privyDid = typeof body?.privyDid === 'string' ? body.privyDid.slice(0, 120) : ''
  const xrplAddress = typeof body?.xrplAddress === 'string' && /^r[1-9A-HJ-NP-Za-km-z]{24,35}$/.test(body.xrplAddress) ? body.xrplAddress : ''

  // XRP is settled directly on-ledger, not through the card processor.
  if (currency === 'XRP') return json({ ok: false, error: 'use_xrp_wallet' }, 200, req)
  const meta = SUPPORTED[currency]
  if (!meta) return json({ ok: false, error: 'currency' }, 400, req)
  if (!Number.isFinite(amount) || amount < MIN_MAJOR || amount > MAX_MAJOR) {
    return json({ ok: false, error: 'amount' }, 400, req)
  }

  // graceful fallback when the processor isn't wired up yet
  const key = ENV.STRIPE_SECRET_KEY
  if (!key) return json({ ok: false, error: 'not_configured' }, 200, req)

  const unit = meta.zeroDecimal ? Math.round(amount) : Math.round(amount * 100)
  const base = SITE_URL || (origin || `https://${host}`)

  // Build a hosted Checkout Session via the Stripe REST API (form-urlencoded).
  const form = new URLSearchParams()
  form.set('mode', 'payment')
  form.set('success_url', `${base}/#app?topup=success`)
  form.set('cancel_url', `${base}/#app?topup=cancel`)
  form.set('line_items[0][quantity]', '1')
  form.set('line_items[0][price_data][currency]', currency.toLowerCase())
  form.set('line_items[0][price_data][unit_amount]', String(unit))
  form.set('line_items[0][price_data][product_data][name]', 'DojoBuro credits')
  form.set('line_items[0][price_data][product_data][description]', 'Settled in XRP via x402')
  if (email) form.set('customer_email', email)
  // carried to the webhook so it can settle the right XRP amount to the user
  form.set('metadata[kind]', kind)
  form.set('metadata[settle_asset]', 'XRP')
  form.set('metadata[fiat_amount]', String(amount))
  form.set('metadata[fiat_currency]', currency)
  if (privyDid) form.set('metadata[privy_did]', privyDid)
  if (xrplAddress) form.set('metadata[xrpl_address]', xrplAddress)

  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), UPSTREAM_TIMEOUT_MS)
  try {
    const res = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      signal: ctrl.signal,
      headers: {
        authorization: `Bearer ${key}`,
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: form.toString(),
    })
    const j = await res.json().catch(() => ({}))
    if (!res.ok || !j?.url) {
      // never surface the raw Stripe error/key to the client
      return json({ ok: false, error: 'upstream' }, 200, req)
    }
    return json({ ok: true, url: j.url, id: j.id }, 200, req)
  } catch {
    return json({ ok: false, error: 'upstream' }, 200, req)
  } finally {
    clearTimeout(t)
  }
}

// ---- NEXT STEP: settle in XRP via x402 ------------------------------------
// Add api/checkout-webhook.ts subscribed to `checkout.session.completed`:
//   1. Verify the Stripe-Signature header with STRIPE_WEBHOOK_SECRET.
//   2. Read metadata.fiat_amount / fiat_currency, convert to XRP at a live FX
//      rate, and submit an x402-authorized XRPL Payment to the user's dojo
//      wallet (or credit their balance). This closes the fiat→XRP settlement.
// The session already carries the metadata that step needs.

// ---- helpers --------------------------------------------------------------
function allow(ip: string): boolean {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_MAX) {
    hits.set(ip, arr)
    return false
  }
  arr.push(now)
  hits.set(ip, arr)
  if (hits.size > 5000) hits.clear()
  return true
}

function int(v: string | undefined, d: number): number {
  const n = v ? parseInt(v, 10) : NaN
  return Number.isFinite(n) ? n : d
}
function num(v: string | undefined, d: number): number {
  const n = v ? Number(v) : NaN
  return Number.isFinite(n) ? n : d
}

function cors(req: Request): Record<string, string> {
  const origin = req.headers.get('origin') || ''
  const h: Record<string, string> = {
    'content-type': 'application/json',
    'cache-control': 'no-store',
    vary: 'origin',
  }
  if (ALLOWED_ORIGIN && origin === ALLOWED_ORIGIN) {
    h['access-control-allow-origin'] = ALLOWED_ORIGIN
    h['access-control-allow-methods'] = 'POST, OPTIONS'
    h['access-control-allow-headers'] = 'content-type'
  }
  return h
}

function json(obj: unknown, status: number, req: Request): Response {
  return new Response(JSON.stringify(obj), { status, headers: cors(req) })
}
