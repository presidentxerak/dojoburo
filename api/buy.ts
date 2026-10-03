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
//   POST /api/buy              { plan: 'path' | 'trade' | 'course' | 'pass', trade?, course?, email? }
//                              → { ok, url } · la page de paiement Stripe
//   GET  /api/buy?session_id=  → { ok, paid, plan, trade }
//                              · lu par la page /merci, qui ouvre alors la
//                              formation dans ce navigateur
//
// Les prix vivent dans Stripe, des prix UNIQUES et non récurrents : ils se
// changent sans déploiement et ne peuvent pas diverger de ce qui est facturé.
// Sans clé, la réponse le dit et rien n'est débité.
//
// LA GRILLE À TROIS PRIX · demandé : « 3 prix 0€ gratuit, Un temple (une
// formation) à 49€ et le Pass dojo à 99€ life time ». Deux prix Stripe suffisent :
//   STRIPE_PRICE_TEMPLE   49 €  le produit « Un cours Dojoburo », pour N'IMPORTE
//                               QUEL cours ; lequel est dit par les métadonnées
//                               (plan, trade, course, category) et par le nom du
//                               cours posé sur la page de paiement et le reçu ;
//   STRIPE_PRICE_PASS     99 €  le produit « Pass Dojoburo ».
// Le webhook api/buy-webhook.ts enregistre chaque achat, et retire le droit
// d'un compte quand l'achat est remboursé.
import { BUY_TRADES as TRADES, BUY_COURSES as COURSES, TEMPLE_NAMES, isCheckoutSessionId, stripeRequest, verifyCheckoutSession } from './_lib/checkoutSession.js'

export const config = { runtime: 'edge' }

const ENV: Record<string, string | undefined> = ((globalThis as any).process?.env ?? {}) as any

/** Un temple, quel qu'il soit, se paie au prix « Un temple » · seul le Pass a
 *  le sien. */
const PRICE: Record<string, string | undefined> = {
  path: ENV.STRIPE_PRICE_TEMPLE,
  trade: ENV.STRIPE_PRICE_TEMPLE,
  course: ENV.STRIPE_PRICE_TEMPLE,
  pass: ENV.STRIPE_PRICE_PASS,
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
    return json({ ok: true, paid: v.paid, plan: v.plan, trade: v.trade, course: v.course }, 200)
  }

  if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405)

  let body: any
  try { body = await req.json() } catch { return json({ ok: false, error: 'json' }, 400) }
  const plan = String(body?.plan || '').toLowerCase()
  if (!Object.prototype.hasOwnProperty.call(PRICE, plan)) return json({ ok: false, error: 'unknown_plan' }, 400)
  const trade = String(body?.trade || '').toLowerCase()
  if (plan === 'trade' && !TRADES.has(trade)) return json({ ok: false, error: 'unknown_trade' }, 400)
  const course = String(body?.course || '').toLowerCase()
  if (plan === 'course' && !COURSES.has(course)) return json({ ok: false, error: 'unknown_course' }, 400)
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
  if (plan === 'course') form.set('metadata[course]', course)
  // CE QUE L'ON ACHÈTE, ÉCRIT EN CLAIR · demandé : « change les noms de
  // produit de Stripe "Un temple Dojoburo" par "Un cours Dojoburo" et Pass Dojo
  // par "Pass Dojoburo" ». Le produit Stripe « Un cours Dojoburo » sert tous
  // les cours ; le nom du cours choisi s'affiche sous le bouton de paiement et
  // accompagne le paiement jusqu'au reçu. La catégorie range les ventes dans
  // les exports : parcours IA, formation métier, développement d'app, pass.
  // Les formations thématiques (livre, storyboard, comptabilité...) ont leur
  // propre catégorie : les ranger sous « développement d'app » faussait les
  // exports dès leur publication.
  const what = plan === 'pass' ? 'Pass Dojoburo · toutes les formations, à vie'
    : `Un cours Dojoburo · ${TEMPLE_NAMES[plan === 'path' ? 'path' : plan === 'trade' ? trade : course] ?? ''}`
  const category = plan === 'pass' ? 'pass' : plan === 'path' ? 'parcours-ia' : plan === 'trade' ? 'formation-metier'
    : course === 'coder-une-app' || course === 'coder-avec-lovable' ? 'developpement-app' : 'formation-thematique'
  form.set('metadata[item]', what)
  form.set('metadata[category]', category)
  form.set('payment_intent_data[description]', what)
  form.set('payment_intent_data[metadata][plan]', plan)
  form.set('payment_intent_data[metadata][category]', category)
  form.set('custom_text[submit][message]', `Vous achetez : ${what}. Paiement unique, aucun abonnement.`)

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
