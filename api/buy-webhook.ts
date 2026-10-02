// LE WEBHOOK DES ACHATS DU JEU · un temple (49 €) ou le Pass Dojo (99 €).
//
// Demandé : « fais moi le tableaux des prix avec les .env la description
// produit pour Stripe et les webhooks pour chaque ».
//
// POURQUOI IL EXISTE. Jusqu'ici, un achat n'était lu qu'au retour de paiement
// (/merci) puis réclamé par le compte (api/profile.ts?action=claim). Un élève
// qui fermait l'onglet avant /merci avait payé sans laisser de trace chez nous,
// et un remboursement ne retirait rien. Ce webhook tient le registre :
//
//   checkout.session.completed                → l'achat est inscrit, 'paid', ou
//                                               'pending' si le moyen de paiement
//                                               est différé (prélèvement SEPA)
//   checkout.session.async_payment_succeeded  → 'paid'
//   checkout.session.async_payment_failed     → 'failed'
//   charge.refunded (remboursement total)     → 'refunded', et l'accès du compte
//                                               qui l'avait réclamé est recalculé
//                                               sans ce droit
//
// Tout autre événement est acquitté sans rien faire, et une session qui ne
// vient pas du jeu (le studio a son propre webhook, api/checkout-webhook.ts)
// est ignorée : son `metadata.plan` n'est pas un plan du jeu.
//
// SON SECRET EST LE SIEN · STRIPE_WEBHOOK_SECRET_BUY, celui de l'endpoint
// /api/buy-webhook dans le tableau de bord Stripe. Partager le secret du studio
// aurait obligé les deux endpoints à recevoir les mêmes événements.
//
// Runtime Node (et non Edge) parce qu'il lui faut `pg`. Schéma : db/profile.sql
// (lot 2). Idempotent : game_webhook_events (clé primaire sur l'identifiant de
// l'événement) fait d'une relance de Stripe un non-événement.
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { PoolClient } from 'pg'
import { verifyStripeEvent } from './_lib/stripe.js'
import { getPool, dbConfigured } from './_lib/db.js'
import { BUY_TRADES, BUY_COURSES } from './_lib/checkoutSession.js'
import { accessFromGrants } from './_lib/profile.js'

export const config = { maxDuration: 30 }

export const BUY_EVENTS = [
  'checkout.session.completed',
  'checkout.session.async_payment_succeeded',
  'checkout.session.async_payment_failed',
  'charge.refunded',
] as const
const HANDLED = new Set<string>(BUY_EVENTS)

/** Les plans du jeu · ceux que api/buy.ts écrit dans metadata.plan. */
const GAME_PLANS = new Set(['path', 'trade', 'course', 'pass'])

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

  const secret = process.env.STRIPE_WEBHOOK_SECRET_BUY || ''
  if (!secret) return send(res, 500, { ok: false, error: 'webhook_secret_not_set' })
  // 5xx pour que Stripe relance jusqu'à ce que la base soit là, plutôt que de
  // perdre un achat dont on n'entendrait plus jamais parler
  if (!dbConfigured()) return send(res, 503, { ok: false, error: 'db_not_configured' })

  let raw: string
  try { raw = await readRawBody(req) } catch { return send(res, 400, { ok: false, error: 'body' }) }

  const evt = await verifyStripeEvent(raw, header(req, 'stripe-signature'), secret)
  if (!evt) return send(res, 400, { ok: false, error: 'signature' })
  if (!HANDLED.has(evt.type)) return send(res, 200, { ok: true, ignored: evt.type })

  const client = await getPool().connect()
  try {
    await client.query('begin')
    const seen = await client.query(
      `insert into game_webhook_events (id, type) values ($1, $2) on conflict (id) do nothing`,
      [evt.id, evt.type],
    )
    if (seen.rowCount === 0) {
      await client.query('commit')
      return send(res, 200, { ok: true, duplicate: true })
    }

    const obj = (evt.data?.object || {}) as Record<string, any>
    let applied = false
    if (evt.type === 'checkout.session.completed') {
      applied = await record(client, obj, obj.payment_status === 'paid' ? 'paid' : 'pending')
    } else if (evt.type === 'checkout.session.async_payment_succeeded') {
      applied = await record(client, obj, 'paid')
    } else if (evt.type === 'checkout.session.async_payment_failed') {
      applied = await record(client, obj, 'failed')
    } else if (evt.type === 'charge.refunded') {
      applied = await refunded(client, obj)
    }

    await client.query('commit')
    return send(res, 200, { ok: true, applied })
  } catch (e) {
    await client.query('rollback').catch(() => { /* la connexion part de toute façon */ })
    // 500 pour que Stripe relance · un achat non inscrit est pire qu'une relance
    return send(res, 500, { ok: false, error: 'db_write', detail: String((e as Error)?.message || e).slice(0, 120) })
  } finally {
    client.release()
  }
}

/** Ce qu'une session du jeu a acheté · null si elle ne vient pas du jeu. */
export function purchaseOf(session: Record<string, any>): { plan: string; item: string | null } | null {
  const meta = session?.metadata || {}
  const plan = String(meta.plan || '').toLowerCase()
  if (!GAME_PLANS.has(plan)) return null
  if (plan === 'trade') {
    const t = String(meta.trade || '')
    return BUY_TRADES.has(t) ? { plan, item: t } : null
  }
  if (plan === 'course') {
    const c = String(meta.course || '')
    return BUY_COURSES.has(c) ? { plan, item: c } : null
  }
  return { plan, item: null }
}

/** Inscrire ou mettre à jour un achat · un achat remboursé le reste. */
async function record(c: PoolClient, session: Record<string, any>, status: 'pending' | 'paid' | 'failed'): Promise<boolean> {
  const p = purchaseOf(session)
  const id = String(session.id || '')
  if (!p || !/^cs_[A-Za-z0-9_]+$/.test(id)) return false
  const w = await c.query(
    `insert into game_purchases (session_id, payment_intent, plan, item, email, amount_cents, currency, status)
     values ($1, $2, $3, $4, $5, $6, $7, $8)
     on conflict (session_id) do update
        set status = excluded.status,
            payment_intent = coalesce(excluded.payment_intent, game_purchases.payment_intent),
            updated_at = now()
      where game_purchases.status <> 'refunded'`,
    [
      id,
      typeof session.payment_intent === 'string' ? session.payment_intent : null,
      p.plan,
      p.item,
      String(session.customer_details?.email || session.customer_email || '').slice(0, 200) || null,
      Number.isFinite(session.amount_total) ? session.amount_total : null,
      typeof session.currency === 'string' ? session.currency : null,
      status,
    ],
  )
  return (w.rowCount ?? 0) > 0
}

/** Un remboursement TOTAL retire le droit · un remboursement partiel (un geste
 *  commercial) le laisse. L'accès du compte est recalculé avec les droits qui
 *  tiennent encore, jamais amputé d'une clé à la main. */
async function refunded(c: PoolClient, charge: Record<string, any>): Promise<boolean> {
  if (charge.refunded !== true || typeof charge.payment_intent !== 'string') return false
  const hit = await c.query<{ session_id: string }>(
    `update game_purchases set status = 'refunded', updated_at = now()
      where payment_intent = $1 and status <> 'refunded'
      returning session_id`,
    [charge.payment_intent],
  )
  for (const { session_id } of hit.rows) {
    const owner = await c.query<{ user_did: string }>(
      `select user_did from game_profile_claims where session_id = $1`, [session_id])
    const did = owner.rows[0]?.user_did
    if (!did) continue
    await c.query(`select 1 from game_profiles where user_did = $1 for update`, [did])
    const left = await c.query<{ grant_json: unknown }>(
      `select c.grant_json from game_profile_claims c
         left join game_purchases p on p.session_id = c.session_id
        where c.user_did = $1 and coalesce(p.status, 'paid') <> 'refunded'`,
      [did],
    )
    const access = accessFromGrants(left.rows.map((r) => r.grant_json))
    await c.query(
      `update game_profiles set access = $2::jsonb, updated_at = now() where user_did = $1`,
      [did, JSON.stringify(access)],
    )
  }
  return (hit.rowCount ?? 0) > 0
}

/* ---------------------------------------------------------------- plomberie -- */
function header(req: IncomingMessage, name: string): string | null {
  const v = req.headers[name]
  return Array.isArray(v) ? v[0] : v ?? null
}

function readRawBody(req: IncomingMessage): Promise<string> {
  const attached = (req as unknown as { rawBody?: string }).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (chunk: Buffer) => {
      d += chunk.toString('utf8')
      if (d.length > 1_000_000) { reject(new Error('too_large')); req.destroy() }
    })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}

function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
