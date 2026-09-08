// DojoBuro payments — a server-side Stripe Checkout proxy.
//
// Runs on Vercel Edge. The Stripe secret key lives ONLY here, never in the
// browser. It creates a hosted Checkout Session and returns its URL.
//
// What it sells is a MONTHLY PLAN, which means `mode: 'subscription'` and a
// Stripe Price object — not a price built inline the way a one-off charge is.
// That is the operator step nothing here can do for you: create a recurring
// Price for Founder and one for Managed in your own Stripe dashboard, then set
// STRIPE_PRICE_FOUNDER and STRIPE_PRICE_MANAGED. Until then this endpoint
// answers { ok:false, error:'not_configured' } and the app says so plainly
// instead of showing a button that cannot work.
//
// The old one-off path sold "credits settled in XRP via x402". Both halves of
// that are gone: the settlement rail was removed months ago, and a run is
// authorised by a quota rather than a balance, so a credit bought nothing.
//
// No Stripe SDK — the REST API is called with form-urlencoded fetch so this
// stays a single dependency-free Edge function, mirroring api/chat.ts.

export const config = { runtime: 'edge' }

const ENV: Record<string, string | undefined> = ((globalThis as any).process?.env ?? {}) as any

// ---- tunables (overridable via env) ---------------------------------------
const RATE_MAX = int(ENV.CHECKOUT_RATE_MAX, 12) // sessions per IP …
const RATE_WINDOW_MS = int(ENV.CHECKOUT_RATE_WINDOW_MS, 10 * 60 * 1000) // … per window
// The recurring Prices, created once by the operator in Stripe. A plan with no
// Price cannot be sold, and saying so is better than a Checkout that 400s.
const PRICE: Record<string, string | undefined> = {
  founder: ENV.STRIPE_PRICE_FOUNDER,
  managed: ENV.STRIPE_PRICE_MANAGED,
}
const UPSTREAM_TIMEOUT_MS = int(ENV.CHECKOUT_TIMEOUT_MS, 12000)
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const SITE_URL = ENV.CHECKOUT_SITE_URL || '' // e.g. https://dojoburo.app

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

  const plan = String(body?.plan || '').toLowerCase()
  const email = typeof body?.email === 'string' ? body.email.slice(0, 200) : ''
  // carried through to the webhook so it can attribute the subscription
  const privyDid = typeof body?.privyDid === 'string' ? body.privyDid.slice(0, 120) : ''
  const clientRef = typeof body?.client === 'string' ? body.client.slice(0, 120) : ''

  if (!Object.prototype.hasOwnProperty.call(PRICE, plan)) {
    return json({ ok: false, error: 'unknown_plan' }, 400, req)
  }
  const price = PRICE[plan]
  if (!price) {
    // The plan is real; the operator has not created its Price yet. A distinct
    // error, because "we do not sell that" and "this deployment cannot sell it
    // yet" are different things and the UI says different things about them.
    return json({ ok: false, error: 'plan_not_configured', plan }, 200, req)
  }

  // graceful fallback when the processor isn't wired up yet
  const key = ENV.STRIPE_SECRET_KEY
  if (!key) return json({ ok: false, error: 'not_configured' }, 200, req)

  const base = SITE_URL || (origin || `https://${host}`)

  // A hosted Checkout Session in subscription mode. The Price carries the
  // amount, the currency and the interval, so none of them are set here — which
  // is the point: the price lives in Stripe, where it can be changed without a
  // deploy, and cannot drift from what the app charges.
  const form = new URLSearchParams()
  form.set('mode', 'subscription')
  form.set('success_url', `${base}/#app?plan=success`)
  form.set('cancel_url', `${base}/#app?plan=cancel`)
  form.set('line_items[0][price]', price)
  form.set('line_items[0][quantity]', '1')
  form.set('allow_promotion_codes', 'true')
  if (email) form.set('customer_email', email)
  form.set('metadata[plan]', plan)
  form.set('subscription_data[metadata][plan]', plan)
  if (privyDid) {
    form.set('metadata[privy_did]', privyDid)
    form.set('subscription_data[metadata][privy_did]', privyDid)
  }
  if (clientRef) {
    form.set('metadata[client_ref]', clientRef)
    form.set('subscription_data[metadata][client_ref]', clientRef)
  }

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

// The other half is api/checkout-webhook.ts, which verifies the Stripe
// signature and writes the plan onto the organisation. The session and the
// subscription both carry the metadata it needs to find the right one.

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
