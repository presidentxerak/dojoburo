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
import { createSign } from 'node:crypto'
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
  ga4: ga4Data,
  gsc: gscData,
}

// ---- Google Search Console (service account · admin-gated) ----------------
// Same Google service account as GA, with the webmasters.readonly scope. The
// service account must be added as a user on the GSC property (GSC_SITE_URL,
// e.g. "https://www.example.com/" or "sc-domain:example.com"). Note: the Search
// Console API exposes queries/positions/clicks but NOT backlinks.
async function gscData(q: URLSearchParams): Promise<Result> {
  const raw = ENV.GA_SERVICE_ACCOUNT_JSON
  const site = ENV.GSC_SITE_URL
  if (!raw || !site) return { connected: false }
  const admin = await isAdmin(q)
  if (!admin) return { connected: true, admin: false }

  let sa: { client_email?: string; private_key?: string }
  try { sa = JSON.parse(raw) } catch { return { connected: true, admin: true, data: null } }
  if (!sa.client_email || !sa.private_key) return { connected: true, admin: true, data: null }

  const token = await googleServiceToken(sa.client_email, sa.private_key, 'https://www.googleapis.com/auth/webmasters.readonly')
  if (!token) return { connected: true, admin: true, data: null }

  const day = (ms: number) => new Date(ms).toISOString().slice(0, 10)
  const end = day(Date.now() - 2 * 864e5)     // GSC data lags a couple of days
  const start = day(Date.now() - 30 * 864e5)
  const url = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`
  const [top, totals] = await Promise.all([
    gfetch(url, token, { startDate: start, endDate: end, dimensions: ['query'], rowLimit: 10 }),
    gfetch(url, token, { startDate: start, endDate: end, rowLimit: 1 }),
  ])
  if (!top && !totals) return { connected: true, admin: true, data: null }

  const r1 = (v: unknown) => Math.round((Number(v) || 0) * 10) / 10
  const queries = Array.isArray((top as { rows?: unknown[] })?.rows)
    ? ((top as { rows: unknown[] }).rows).map((r) => {
        const row = r as { keys?: string[]; clicks?: number; impressions?: number; position?: number }
        return { query: row.keys?.[0] || '', clicks: Number(row.clicks) || 0, impressions: Number(row.impressions) || 0, position: r1(row.position) }
      })
    : []
  const tr = (Array.isArray((totals as { rows?: unknown[] })?.rows) ? ((totals as { rows: { clicks?: number; impressions?: number; ctr?: number; position?: number }[] }).rows)[0] : {}) || {}
  return {
    connected: true, admin: true,
    data: {
      site,
      totals: { clicks: Number(tr.clicks) || 0, impressions: Number(tr.impressions) || 0, ctr: Math.round((Number(tr.ctr) || 0) * 1000) / 10, position: r1(tr.position) },
      queries,
    },
  }
}

// ---- Google Analytics 4 (service account · admin-gated) -------------------
async function ga4Data(q: URLSearchParams): Promise<Result> {
  const raw = ENV.GA_SERVICE_ACCOUNT_JSON
  const propId = String(ENV.GA4_PROPERTY_ID || '').replace(/[^0-9]/g, '')
  if (!raw || !propId) return { connected: false }
  const admin = await isAdmin(q)
  if (!admin) return { connected: true, admin: false }

  let sa: { client_email?: string; private_key?: string }
  try { sa = JSON.parse(raw) } catch { return { connected: true, admin: true, data: null } }
  if (!sa.client_email || !sa.private_key) return { connected: true, admin: true, data: null }

  const token = await googleServiceToken(sa.client_email, sa.private_key, 'https://www.googleapis.com/auth/analytics.readonly')
  if (!token) return { connected: true, admin: true, data: null }

  const report = await gfetch(`https://analyticsdata.googleapis.com/v1beta/properties/${propId}:runReport`, token, {
    dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
    dimensions: [{ name: 'date' }],
    metrics: [{ name: 'sessions' }, { name: 'totalUsers' }, { name: 'screenPageViews' }],
    orderBys: [{ dimension: { dimensionName: 'date' } }],
    limit: 40,
  })
  if (!report) return { connected: true, admin: true, data: null }

  const rows = Array.isArray((report as { rows?: unknown[] }).rows) ? (report as { rows: unknown[] }).rows : []
  let sessions = 0, users = 0, views = 0
  const series = rows.map((r) => {
    const row = r as { dimensionValues?: { value?: string }[]; metricValues?: { value?: string }[] }
    const d = row.dimensionValues?.[0]?.value || ''
    const s = Number(row.metricValues?.[0]?.value) || 0
    const u = Number(row.metricValues?.[1]?.value) || 0
    const v = Number(row.metricValues?.[2]?.value) || 0
    sessions += s; users += u; views += v
    return { date: d ? `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}` : '', sessions: s }
  })
  return { connected: true, admin: true, data: { range: '28d', sessions, users, views, series } }
}

/** Sign a service-account JWT (RS256) and exchange it for a Google access token. */
async function googleServiceToken(clientEmail: string, privateKey: string, scope: string): Promise<string | null> {
  try {
    const now = Math.floor(Date.now() / 1000)
    const b64 = (o: unknown) => Buffer.from(JSON.stringify(o)).toString('base64url')
    const head = b64({ alg: 'RS256', typ: 'JWT' })
    const claim = b64({ iss: clientEmail, scope, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 })
    const signer = createSign('RSA-SHA256'); signer.update(`${head}.${claim}`); signer.end()
    const sig = signer.sign(privateKey.replace(/\\n/g, '\n')).toString('base64url')
    const jwt = `${head}.${claim}.${sig}`
    const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST', signal: ctrl.signal,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }),
    }).finally(() => clearTimeout(t))
    if (!res.ok) return null
    const j = await res.json()
    return typeof j?.access_token === 'string' ? j.access_token : null
  } catch {
    return null
  }
}

async function gfetch(url: string, token: string, body: unknown): Promise<unknown | null> {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { method: 'POST', signal: ctrl.signal, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) })
    if (!res.ok) return null
    return await res.json()
  } catch { return null } finally { clearTimeout(t) }
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
