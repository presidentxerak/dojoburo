// DojoBuro subscription webhook (Vercel Node.js serverless).
//
// Closes the loop opened by api/checkout.ts. The app sells a monthly plan, so
// the thing being confirmed here is a SUBSCRIPTION, and a subscription has a
// life: it starts, it renews, a card fails, someone cancels. Recording only the
// first of those would leave a company on Managed for ever because one payment
// once succeeded.
//
// So four events are handled and every other one is acknowledged:
//
//   checkout.session.completed          · the plan starts
//   customer.subscription.updated       · renewal, card trouble, plan change
//   customer.subscription.deleted       · it ends · back to free
//   invoice.payment_failed              · past_due, without losing the plan yet
//
// The plan lives on the ORGANISATION, not the account: a company pays once and
// everyone in it is on that plan.
//
// Runs on the Node runtime (NOT Edge) because it needs `pg` (TCP). Requires
// db/schema.sql, db/connectors.sql and db/orgs.sql applied to DATABASE_URL.
//
// Idempotency: webhook_events (unique id) means a Stripe retry of the same
// event is a no-op.
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { PoolClient } from 'pg'
import { verifyStripeEvent } from './_lib/stripe.js'
import { getPool, dbConfigured } from './_lib/db.js'

export const config = { maxDuration: 30 }

const HANDLED = new Set([
  'checkout.session.completed',
  'customer.subscription.updated',
  'customer.subscription.deleted',
  'invoice.payment_failed',
])

const PLANS = new Set(['free', 'founder', 'managed'])

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

  const secret = process.env.STRIPE_WEBHOOK_SECRET || ''
  if (!secret) return send(res, 500, { ok: false, error: 'webhook_secret_not_set' })
  // 5xx so Stripe retries until the database is live, rather than dropping a
  // payment we will never hear about again
  if (!dbConfigured()) return send(res, 503, { ok: false, error: 'db_not_configured' })

  let raw: string
  try { raw = await readRawBody(req) } catch { return send(res, 400, { ok: false, error: 'body' }) }

  const evt = await verifyStripeEvent(raw, header(req, 'stripe-signature'), secret)
  if (!evt) return send(res, 400, { ok: false, error: 'signature' })
  if (!HANDLED.has(evt.type)) return send(res, 200, { ok: true, ignored: evt.type })

  const pool = getPool()
  const client = await pool.connect()
  try {
    await client.query('begin')
    const seen = await client.query(
      `insert into webhook_events (id, type) values ($1, $2) on conflict (id) do nothing`,
      [evt.id, evt.type],
    )
    if (seen.rowCount === 0) {
      await client.query('commit')
      return send(res, 200, { ok: true, duplicate: true })
    }

    const obj = evt.data?.object || {}
    let applied = false

    if (evt.type === 'checkout.session.completed') {
      applied = await started(client, obj)
    } else if (evt.type === 'customer.subscription.updated') {
      applied = await moved(client, obj)
    } else if (evt.type === 'customer.subscription.deleted') {
      applied = await ended(client, obj)
    } else if (evt.type === 'invoice.payment_failed') {
      applied = await failing(client, obj)
    }

    await client.query('commit')
    return send(res, 200, { ok: true, applied })
  } catch (e) {
    await client.query('rollback').catch(() => { /* the connection is going anyway */ })
    // 500 so Stripe retries · a plan we failed to record is worse than a retry
    return send(res, 500, { ok: false, error: 'db_write', detail: String((e as Error)?.message || e).slice(0, 120) })
  } finally {
    client.release()
  }
}

/* ---------------------------------------------------------------- started -- */
/**
 * A plan begins.
 *
 * The organisation is found from the metadata the Checkout Session carried, and
 * created if the payer somehow has none — a paid subscription with nowhere to
 * put it is the one case where guessing is worse than making a home for it.
 */
async function started(c: PoolClient, session: Record<string, any>): Promise<boolean> {
  const meta = session.metadata || {}
  const plan = String(meta.plan || '').toLowerCase()
  if (!PLANS.has(plan) || plan === 'free') return false

  const accountId = await accountFor(c, {
    privyDid: meta.privy_did || null,
    clientRef: meta.client_ref || null,
    email: session.customer_email || session.customer_details?.email || null,
  })
  if (!accountId) return false

  const org = await ensureOrgIn(c, accountId)
  await c.query(
    `update organisations
        set plan = $2, plan_status = 'active', plan_since = now(), plan_until = null,
            stripe_customer_id = coalesce($3, stripe_customer_id),
            stripe_subscription_id = coalesce($4, stripe_subscription_id)
      where id = $1`,
    [org, plan, session.customer || null, session.subscription || null],
  )
  return true
}

/* ------------------------------------------------------------------ moved -- */
/** A renewal, a card recovering, a plan change, a cancellation scheduled. */
async function moved(c: PoolClient, sub: Record<string, any>): Promise<boolean> {
  const org = await orgForSubscription(c, sub)
  if (!org) return false

  const status = String(sub.status || '')
  // Stripe's statuses are finer-grained than a company needs. `active` and
  // `trialing` are working; `past_due` and `unpaid` keep the plan but flag it;
  // anything else has stopped.
  const plan_status = status === 'active' || status === 'trialing'
    ? 'active'
    : status === 'past_due' || status === 'unpaid'
      ? 'past_due'
      : 'cancelled'

  const plan = String(sub.metadata?.plan || '').toLowerCase()
  const keepPlan = PLANS.has(plan) && plan !== 'free'

  if (plan_status === 'cancelled') {
    await c.query(
      `update organisations set plan = 'free', plan_status = 'cancelled', plan_until = now()
        where id = $1`, [org])
    return true
  }
  await c.query(
    `update organisations
        set plan_status = $2, plan = case when $3::text is null then plan else $3 end
      where id = $1`,
    [org, plan_status, keepPlan ? plan : null],
  )
  return true
}

/* ------------------------------------------------------------------ ended -- */
async function ended(c: PoolClient, sub: Record<string, any>): Promise<boolean> {
  const org = await orgForSubscription(c, sub)
  if (!org) return false
  await c.query(
    `update organisations
        set plan = 'free', plan_status = 'cancelled', plan_until = now(), stripe_subscription_id = null
      where id = $1`, [org])
  return true
}

/* ---------------------------------------------------------------- failing -- */
/**
 * A payment failed.
 *
 * The plan is NOT taken away here. Stripe retries a failed invoice for days,
 * and cutting a company off from its own work on the first decline — before
 * they have even seen the email — is a way to lose a customer over an expired
 * card. `past_due` is the flag; `customer.subscription.deleted` is the ending.
 */
async function failing(c: PoolClient, invoice: Record<string, any>): Promise<boolean> {
  const subId = invoice.subscription || null
  if (!subId) return false
  const r = await c.query(
    `update organisations set plan_status = 'past_due' where stripe_subscription_id = $1`, [subId])
  return (r.rowCount ?? 0) > 0
}

/* ---------------------------------------------------------------- lookups -- */
async function orgForSubscription(c: PoolClient, sub: Record<string, any>): Promise<string | null> {
  const byId = await c.query(
    `select id from organisations where stripe_subscription_id = $1 limit 1`, [sub.id])
  if (byId.rows[0]) return byId.rows[0].id
  // A subscription we have never seen: fall back to the customer, which
  // survives a subscription being replaced rather than updated.
  if (sub.customer) {
    const byCust = await c.query(
      `select id from organisations where stripe_customer_id = $1 limit 1`, [sub.customer])
    if (byCust.rows[0]) {
      await c.query(`update organisations set stripe_subscription_id = $2 where id = $1`,
        [byCust.rows[0].id, sub.id])
      return byCust.rows[0].id
    }
  }
  return null
}

async function accountFor(
  c: PoolClient,
  ref: { privyDid: string | null; clientRef: string | null; email: string | null },
): Promise<string | null> {
  if (ref.privyDid) {
    const r = await c.query(
      `insert into accounts (privy_did, email) values ($1, $2)
       on conflict (privy_did) do update set email = coalesce(excluded.email, accounts.email)
       returning id`, [ref.privyDid, ref.email])
    return r.rows[0].id
  }
  if (ref.clientRef) {
    const r = await c.query(`select id from accounts where client_ref = $1 limit 1`, [ref.clientRef])
    if (r.rows[0]) return r.rows[0].id
    const n = await c.query(`insert into accounts (client_ref, email) values ($1, $2) returning id`,
      [ref.clientRef, ref.email])
    return n.rows[0].id
  }
  if (ref.email) {
    const r = await c.query(`select id from accounts where lower(email) = lower($1) limit 1`, [ref.email])
    if (r.rows[0]) return r.rows[0].id
    const n = await c.query(`insert into accounts (email) values ($1) returning id`, [ref.email])
    return n.rows[0].id
  }
  return null
}

/**
 * The organisation for an account, inside this transaction.
 *
 * Deliberately not `ensureOrg` from _lib/orgs: that takes a Pool and opens its
 * own transaction, which would deadlock against the one this webhook is already
 * holding. Same logic, on the client we already have.
 */
async function ensureOrgIn(c: PoolClient, accountId: string): Promise<string> {
  const found = await c.query(
    `select org_id from org_members where account_id = $1 limit 1`, [accountId])
  if (found.rows[0]) return found.rows[0].org_id
  const org = await c.query(
    `insert into organisations (name, created_by) values ('My company', $1) returning id`, [accountId])
  await c.query(`insert into org_members (org_id, account_id, role) values ($1, $2, 'owner')`,
    [org.rows[0].id, accountId])
  return org.rows[0].id
}

/* ---------------------------------------------------------------- plumbing -- */
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
