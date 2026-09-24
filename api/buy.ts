// ACHETER UNE FORMATION · un paiement unique, et sa vérification au retour.
//
// POURQUOI UN SECOND POINT DE PAIEMENT. api/checkout.ts vend l'abonnement
// MENSUEL du studio (mode « subscription », écrit sur l'organisation par le
// webhook). Les formations du jeu, elles, se paient UNE FOIS (voir
// data/plans · « once ») et s'ouvrent dans le navigateur de l'élève (voir
// game/access). Les faire passer par le premier aurait ouvert un abonnement
// là où l'on vend un achat, et rien n'aurait ouvert la formation au retour :
// c'était exactement le cas, « Voir les tarifs » menait à l'ancienne page et
// aucun paiement ne débloquait rien.
//
//   POST /api/buy              { plan: 'path' | 'trade', trade?, email? }
//                              → { ok, url } · la page de paiement Stripe
//   GET  /api/buy?session_id=  → { ok, paid, plan, trade }
//                              · lu par la page /merci, qui ouvre alors la
//                              formation dans ce navigateur
//
// Les prix vivent dans Stripe (STRIPE_PRICE_PATH, STRIPE_PRICE_TRADE, des
// prix UNIQUES, pas récurrents) : ils se changent sans déploiement et ne
// peuvent pas diverger de ce qui est facturé. Sans clé, la réponse le dit et
// rien n'est débité.
import { BUY_TRADES as TRADES, isCheckoutSessionId, stripeRequest, verifyCheckoutSession } from './_lib/checkoutSession.js'

export const config = { runtime: 'edge' }

const ENV: Record<string, string | undefined> = ((globalThis as any).process?.env ?? {}) as any

const PRICE: Record<string, string | undefined> = {
  path: ENV.STRIPE_PRICE_PATH,
  trade: ENV.STRIPE_PRICE_TRADE,
}
// Les métiers qu'on peut acheter (TRADES) et la lecture d'une session vivent
// dans _lib/checkoutSession · api/profile.ts pose la même question à Stripe
// pour inscrire l'achat sur le compte, et deux copies finiraient par diverger.
const RATE_MAX = int(ENV.BUY_RATE_MAX, 12)
const RATE_WINDOW_MS = int(ENV.BUY_RATE_WINDOW_MS, 10 * 60 * 1000)
const UPSTREAM_TIMEOUT_MS = int(ENV.CHECKOUT_TIMEOUT_MS, 12000)
const SITE_URL = ENV.CHECKOUT_SITE_URL || ''

const hits = new Map<string, number[]>()

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: headers() })

  // LE MÊME SITE SEULEMENT · une page d'ailleurs ne lance pas un paiement ici.
  const origin = req.headers.get('origin') || ''
  const host = req.headers.get('host') || ''
  if (origin && host && bare(origin) !== bare(host)) return json({ ok: false, error: 'origin' }, 403)

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'anon'
  if (!allow(ip)) return json({ ok: false, error: 'rate' }, 429)

  const key = ENV.STRIPE_SECRET_KEY

  if (req.method === 'GET') {
    const id = new URL(req.url).searchParams.get('session_id') || ''
    if (!isCheckoutSessionId(id)) return json({ ok: false, error: 'session' }, 400)
    if (!key) return json({ ok: false, error: 'not_configured' }, 200)
    const v = await verifyCheckoutSession(id, key, UPSTREAM_TIMEOUT_MS)
    if (!v) return json({ ok: false, error: 'upstream' }, 200)
    // PAYÉ, ET SEULEMENT PAYÉ · une session ouverte ou expirée n'ouvre rien.
    return json({ ok: true, paid: v.paid, plan: v.plan, trade: v.trade }, 200)
  }

  if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405)

  let body: any
  try { body = await req.json() } catch { return json({ ok: false, error: 'json' }, 400) }
  const plan = String(body?.plan || '').toLowerCase()
  if (!Object.prototype.hasOwnProperty.call(PRICE, plan)) return json({ ok: false, error: 'unknown_plan' }, 400)
  const trade = String(body?.trade || '').toLowerCase()
  if (plan === 'trade' && !TRADES.has(trade)) return json({ ok: false, error: 'unknown_trade' }, 400)
  const email = typeof body?.email === 'string' && /.+@.+\..+/.test(body.email) ? body.email.trim().slice(0, 200) : ''

  const price = PRICE[plan]
  if (!price) return json({ ok: false, error: 'plan_not_configured', plan }, 200)
  if (!key) return json({ ok: false, error: 'not_configured' }, 200)

  const base = SITE_URL || origin || `https://${host}`
  const form = new URLSearchParams()
  form.set('mode', 'payment')
  // {CHECKOUT_SESSION_ID} est remplacé par Stripe · c'est ce que /merci relit.
  form.set('success_url', `${base}/merci?session_id={CHECKOUT_SESSION_ID}`)
  form.set('cancel_url', `${base}/tarifs?annule=1`)
  form.set('line_items[0][price]', price)
  form.set('line_items[0][quantity]', '1')
  form.set('allow_promotion_codes', 'true')
  if (email) form.set('customer_email', email)
  form.set('metadata[plan]', plan)
  if (plan === 'trade') form.set('metadata[trade]', trade)

  const r = await stripeRequest('checkout/sessions', key, UPSTREAM_TIMEOUT_MS, form)
  if (!r?.url) return json({ ok: false, error: 'upstream' }, 200)
  return json({ ok: true, url: r.url }, 200)
}

// ---- helpers --------------------------------------------------------------

function bare(h: string): string {
  try { return new URL(/^https?:/.test(h) ? h : 'https://' + h).host.replace(/^www\./, '').toLowerCase() } catch { return h.replace(/^www\./, '').toLowerCase() }
}

function allow(ip: string): boolean {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_MAX) { hits.set(ip, arr); return false }
  arr.push(now)
  hits.set(ip, arr)
  if (hits.size > 5000) hits.clear()
  return true
}

function int(v: string | undefined, d: number): number {
  const n = v ? parseInt(v, 10) : NaN
  return Number.isFinite(n) ? n : d
}

function headers(): Record<string, string> {
  return { 'content-type': 'application/json', 'cache-control': 'no-store' }
}

function json(obj: unknown, status: number): Response {
  return new Response(JSON.stringify(obj), { status, headers: headers() })
}
