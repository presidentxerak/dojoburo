// Live connector data · the read side of "connect an app → see its data".
//
//   GET /api/tool-data?connector=<id>&dojo=&privy=&client=
//     → { ok:true, connected:bool, data?:<normalized> }  (never 500)
//
// This is the reusable dispatcher every studio calls. Each provider is a small,
// defensive fetcher that returns a NORMALISED shape; anything unconfigured or
// erroring degrades to { connected:false } so the studios keep their current
// "Connect X" empty state — zero regression. New providers slot into PROVIDERS.
//
// First provider wired: Stripe (operator key). Balance + recent payments are
// operator-level financials, so they are only returned to an admin account;
// everyone else just learns Stripe is connected.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { getPool, dbConfigured } from './_lib/db'
import { findAccountId } from './_lib/accounts'

export const config = { maxDuration: 15 }

const ENV = process.env as Record<string, string | undefined>
const ADMIN_EMAILS = (ENV.ADMIN_EMAILS || 'presidentxerak@gmail.com').split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)
const TIMEOUT_MS = 8000

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  // Never 500: any failure degrades to a graceful "not connected".
  try {
    const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
    const connector = (url.searchParams.get('connector') || '').toLowerCase().replace(/[^a-z0-9-]/g, '').slice(0, 40)
    const provider = PROVIDERS[connector]
    if (!provider) return json(res, 200, { ok: true, connected: false, error: 'unknown_connector' })
    const data = await provider(url.searchParams)
    return json(res, 200, { ok: true, ...data })
  } catch (e) {
    return json(res, 200, { ok: false, connected: false, error: String((e as Error)?.message || e).slice(0, 100) })
  }
}

type Result = { connected: boolean; admin?: boolean; account?: string | null; data?: unknown }
type Provider = (q: URLSearchParams) => Promise<Result>

// ---- provider registry · add a connector's fetcher here -------------------
const PROVIDERS: Record<string, Provider> = {
  stripe: stripeData,
}

// ---- Stripe (operator key · admin-gated financials) -----------------------
async function stripeData(q: URLSearchParams): Promise<Result> {
  const key = ENV.STRIPE_SECRET_KEY
  if (!key) return { connected: false }
  // Balance + charges are the OPERATOR's financials → admin only.
  const admin = await isAdmin(q)
  if (!admin) return { connected: true, admin: false }

  const [balance, charges] = await Promise.all([
    sfetch('https://api.stripe.com/v1/balance', key),
    sfetch('https://api.stripe.com/v1/charges?limit=6', key),
  ])
  if (!balance && !charges) return { connected: true, admin: true, data: null }

  const money = (arr: unknown): { amount: number; currency: string }[] =>
    Array.isArray(arr) ? arr.map((b) => ({ amount: (Number((b as { amount?: number }).amount) || 0) / 100, currency: String((b as { currency?: string }).currency || 'usd').toUpperCase() })) : []

  const payments = Array.isArray((charges as { data?: unknown[] })?.data)
    ? ((charges as { data: unknown[] }).data).slice(0, 6).map((c) => {
        const ch = c as { amount?: number; currency?: string; created?: number; status?: string; description?: string; billing_details?: { name?: string; email?: string } }
        return {
          amount: (Number(ch.amount) || 0) / 100,
          currency: String(ch.currency || 'usd').toUpperCase(),
          created: (Number(ch.created) || 0) * 1000,
          status: String(ch.status || ''),
          label: ch.description || ch.billing_details?.name || ch.billing_details?.email || 'Payment',
        }
      })
    : []

  return {
    connected: true,
    admin: true,
    data: {
      available: money((balance as { available?: unknown })?.available),
      pending: money((balance as { pending?: unknown })?.pending),
      payments,
    },
  }
}

async function sfetch(url: string, key: string): Promise<unknown | null> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { authorization: `Bearer ${key}` } })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  } finally {
    clearTimeout(t)
  }
}

// ---- shared helpers -------------------------------------------------------
/** Resolve the caller's account and check its email against the admin allowlist. */
async function isAdmin(q: URLSearchParams): Promise<boolean> {
  if (!dbConfigured()) return false
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
    if (!accountId) return false
    const r = await pool.query('select email from accounts where id = $1', [accountId])
    const email = String(r.rows[0]?.email || '').trim().toLowerCase()
    return !!email && ADMIN_EMAILS.includes(email)
  } catch {
    return false
  }
}

function json(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
