// DojoBuro fiat → XRP settlement webhook (Vercel Node.js serverless).
//
// Closes the loop opened by api/checkout.ts: when Stripe confirms a card
// payment, we (1) verify the signature, (2) idempotently credit the user's XRP
// balance in an auditable ledger, and (3) optionally deliver that XRP on-ledger
// to the user's own wallet with an x402 memo — the settlement receipt.
//
// Runs on the Node runtime (NOT Edge) because it needs `pg` (TCP) and xrpl.js
// (WebSocket). Requires the db/schema.sql schema applied to DATABASE_URL.
//
// Idempotency:
//   * webhook_events (unique id) guards the one-time ledger credit.
//   * settlements (unique session_id) guards the one-time on-ledger payout.
// Stripe retries safely: a replayed event is a no-op for the credit, and the
// pending on-ledger payout is re-attempted (also drainable by api/settle-pending).

import type { IncomingMessage, ServerResponse } from 'node:http'
import { verifyStripeEvent } from './_lib/stripe'
import { getPool, dbConfigured } from './_lib/db'
import { fiatToXrp } from './_lib/fx'
import { settlementConfigured, settleX402 } from './_lib/settle'

export const config = { maxDuration: 30 }

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

  const secret = process.env.STRIPE_WEBHOOK_SECRET || ''
  if (!secret) return send(res, 500, { ok: false, error: 'webhook_secret_not_set' })
  if (!dbConfigured()) return send(res, 503, { ok: false, error: 'db_not_configured' }) // 5xx → Stripe retries until DB is live

  let raw: string
  try {
    raw = await readRawBody(req)
  } catch {
    return send(res, 400, { ok: false, error: 'body' })
  }

  const evt = await verifyStripeEvent(raw, header(req, 'stripe-signature'), secret)
  if (!evt) return send(res, 400, { ok: false, error: 'signature' })

  // we only act on completed checkouts; acknowledge everything else
  if (evt.type !== 'checkout.session.completed') return send(res, 200, { ok: true, ignored: evt.type })

  const session = evt.data.object || {}
  const meta = session.metadata || {}
  const fiatAmount = Number(meta.fiat_amount)
  const fiatCurrency = String(meta.fiat_currency || '').toUpperCase()
  const email: string | null = session.customer_email || session.customer_details?.email || meta.email || null
  const privyDid: string | null = meta.privy_did || null
  const xrplAddress: string | null = meta.xrpl_address || null

  if (!Number.isFinite(fiatAmount) || fiatAmount <= 0 || !fiatCurrency) {
    return send(res, 200, { ok: true, skipped: 'missing_amount' }) // nothing to settle; don't retry
  }

  let xrp: number
  try {
    xrp = await fiatToXrp(fiatAmount, fiatCurrency)
  } catch {
    return send(res, 503, { ok: false, error: 'fx_unavailable' }) // retry later
  }

  const pool = getPool()

  // ---- 1. idempotent credit (transaction) --------------------------------
  let accountId: string | null = null
  let alreadyProcessed = false
  const client = await pool.connect()
  try {
    await client.query('begin')
    const seen = await client.query(
      `insert into webhook_events (id, type) values ($1, $2) on conflict (id) do nothing`,
      [evt.id, evt.type],
    )
    if (seen.rowCount === 0) {
      alreadyProcessed = true // credit already applied on an earlier delivery
    }

    // upsert the account (Privy DID preferred, else email)
    if (privyDid) {
      const r = await client.query(
        `insert into accounts (privy_did, email, xrpl_address, currency)
         values ($1, $2, $3, $4)
         on conflict (privy_did) do update set
           email        = coalesce(excluded.email, accounts.email),
           xrpl_address = coalesce(excluded.xrpl_address, accounts.xrpl_address)
         returning id`,
        [privyDid, email, xrplAddress, fiatCurrency],
      )
      accountId = r.rows[0].id
    } else if (email) {
      const found = await client.query(`select id from accounts where lower(email) = lower($1) limit 1`, [email])
      if (found.rows[0]) {
        accountId = found.rows[0].id
        if (xrplAddress) await client.query(`update accounts set xrpl_address = coalesce(xrpl_address, $2) where id = $1`, [accountId, xrplAddress])
      } else {
        const c = await client.query(`insert into accounts (email, xrpl_address, currency) values ($1, $2, $3) returning id`, [email, xrplAddress, fiatCurrency])
        accountId = c.rows[0].id
      }
    } else {
      const c = await client.query(`insert into accounts (currency) values ($1) returning id`, [fiatCurrency])
      accountId = c.rows[0].id
    }

    await client.query(
      `insert into checkout_sessions (id, account_id, fiat_amount, fiat_currency, xrp_amount, status)
       values ($1, $2, $3, $4, $5, 'paid')
       on conflict (id) do nothing`,
      [session.id, accountId, fiatAmount, fiatCurrency, xrp],
    )

    if (!alreadyProcessed) {
      await client.query(
        `insert into credit_ledger (account_id, delta_xrp, reason, ref) values ($1, $2, 'topup', $3)`,
        [accountId, xrp, session.id],
      )
    }
    await client.query('commit')
  } catch (e) {
    await client.query('rollback').catch(() => {})
    return send(res, 500, { ok: false, error: 'db_write' })
  } finally {
    client.release()
  }

  // ---- 2. real x402 settlement on-ledger (idempotent, best-effort) --------
  // When a hot wallet is configured, every paid checkout emits a REAL x402
  // Payment on SETTLEMENT_NETWORK: delivered to the user's own wallet when we
  // know their address (Mode B on-ramp), otherwise self-anchored so the card
  // payment still produces a verifiable Mainnet transaction for the demo.
  const dest = xrplAddress || (await lookupAddress(pool, accountId!))
  if (settlementConfigured()) {
    try {
      const reserve = await pool.query(
        `insert into settlements (session_id, account_id, xrp_amount, destination, status)
         values ($1, $2, $3, $4, 'pending')
         on conflict (session_id) do nothing
         returning id`,
        [session.id, accountId, xrp, dest || 'self-anchor'],
      )
      const alreadyDone = reserve.rowCount === 0 &&
        (await pool.query(`select status from settlements where session_id = $1`, [session.id])).rows[0]?.status === 'validated'

      if (!alreadyDone) {
        const r = await settleX402({ skill: 'fiat-topup', invoice: session.id, amountXrp: xrp, destination: dest || undefined })
        const ok = r.result === 'tesSUCCESS' && r.validated
        await pool.query(
          `update settlements set tx_hash = $2, tx_result = $3, destination = $4, status = $5 where session_id = $1`,
          [session.id, r.hash, r.result, r.to, ok ? 'validated' : 'failed'],
        )
        // only net the in-app credit when the XRP was DELIVERED to the user's own
        // wallet; a self-anchored demo tx leaves the credit balance intact.
        if (ok && dest) {
          await pool.query(
            `insert into credit_ledger (account_id, delta_xrp, reason, ref) values ($1, $2, 'settle:onledger', $3)`,
            [accountId, -xrp, r.hash],
          )
        }
        if (ok) await pool.query(`update checkout_sessions set status = 'settled' where id = $1`, [session.id])
      }
    } catch {
      // leave the settlement row pending; api/settle-pending (cron) will retry.
      // The card payment + in-app credit are already safe — ack the webhook.
    }
  }

  return send(res, 200, { ok: true })
}

// --------------------------------------------------------------------------
async function lookupAddress(pool: ReturnType<typeof getPool>, accountId: string): Promise<string | null> {
  try {
    const r = await pool.query(`select xrpl_address from accounts where id = $1`, [accountId])
    return r.rows[0]?.xrpl_address || null
  } catch {
    return null
  }
}

function header(req: IncomingMessage, name: string): string | null {
  const v = req.headers[name]
  return Array.isArray(v) ? v[0] : v ?? null
}

function readRawBody(req: IncomingMessage): Promise<string> {
  // Some platforms attach the untouched body as rawBody; prefer it.
  const attached = (req as any).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  if (attached && typeof attached.toString === 'function' && attached.length != null) return Promise.resolve(attached.toString('utf8'))
  return new Promise((resolve, reject) => {
    let data = ''
    let size = 0
    req.on('data', (chunk: Buffer) => {
      size += chunk.length
      if (size > 1_000_000) {
        reject(new Error('too_large'))
        req.destroy()
        return
      }
      data += chunk.toString('utf8')
    })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
