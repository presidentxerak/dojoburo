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
import { vaultConfigured } from './_lib/vault'
import { findAccountId } from './_lib/accounts'
import { connectionToken } from './_lib/connections'

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
  hubspot: hubspotData,
  mailchimp: mailchimpData,
  gcal: gcalData,
  calendly: calendlyData,
  quickbooks: quickbooksData,
  xero: xeroData,
  github: githubData,
  linear: linearData,
  zendesk: zendeskData,
  intercom: intercomData,
  gdrive: gdriveData,
  docusign: docusignData,
  slack: slackData,
}

// ---- GitHub (per-user OAuth · assigned issues + open PRs) ------------------
async function githubData(q: URLSearchParams): Promise<Result> {
  const conn = await userConn(q, 'github')
  if (!conn) return { connected: false }
  const [issuesR, prR, meR] = await Promise.all([
    ghfetch('https://api.github.com/issues?filter=all&state=open&per_page=10&sort=updated', conn.token),
    ghfetch('https://api.github.com/search/issues?q=is:pr+is:open+involves:@me&per_page=10&sort=updated', conn.token),
    ghfetch('https://api.github.com/user', conn.token),
  ])
  const issues = Array.isArray(issuesR) ? (issuesR as Record<string, unknown>[]).filter((i) => !i.pull_request).slice(0, 8).map((i) => ({
    title: String(i.title || ''), number: Number(i.number) || 0,
    repo: String((i.repository as { full_name?: string })?.full_name || ''),
    url: String(i.html_url || ''), state: String(i.state || 'open'),
  })) : []
  const prs = Array.isArray((prR as { items?: unknown[] })?.items) ? (prR as { items: Record<string, unknown>[] }).items.slice(0, 8).map((p) => ({
    title: String(p.title || ''), number: Number(p.number) || 0,
    url: String(p.html_url || ''),
    repo: String(p.repository_url || '').split('/repos/')[1] || '',
  })) : []
  const login = (meR as { login?: string })?.login || null
  return { connected: true, account: login, data: { login, issues, prs, openIssues: issues.length, openPrs: prs.length } }
}

// ---- Linear (per-user OAuth · assigned issues via GraphQL) -----------------
async function linearData(q: URLSearchParams): Promise<Result> {
  const conn = await userConn(q, 'linear')
  if (!conn) return { connected: false }
  const query = `query { viewer { name assignedIssues(first: 10, filter: { state: { type: { neq: "completed" } } }) { nodes { identifier title url state { name } } } } }`
  const j = await postJson('https://api.linear.app/graphql', conn.token, { query })
  const viewer = (j as { data?: { viewer?: { name?: string; assignedIssues?: { nodes?: unknown[] } } } })?.data?.viewer
  if (!viewer) return { connected: true, data: null }
  const nodes = Array.isArray(viewer.assignedIssues?.nodes) ? viewer.assignedIssues!.nodes as Record<string, unknown>[] : []
  const issues = nodes.map((n) => ({ id: String(n.identifier || ''), title: String(n.title || ''), url: String(n.url || ''), state: String((n.state as { name?: string })?.name || '') }))
  return { connected: true, account: viewer.name || null, data: { issues, open: issues.length } }
}

// ---- Zendesk (per-user OAuth · recent tickets) ----------------------------
async function zendeskData(q: URLSearchParams): Promise<Result> {
  const conn = await userConn(q, 'zendesk')
  if (!conn) return { connected: false }
  const sub = ENV.ZENDESK_SUBDOMAIN || conn.external
  if (!sub) return { connected: true, data: null }
  const base = `https://${String(sub).replace(/\.zendesk\.com.*$/, '')}.zendesk.com`
  const j = await hfetch(`${base}/api/v2/tickets.json?sort_by=updated_at&sort_order=desc&per_page=10`, conn.token)
  const rows = Array.isArray((j as { tickets?: unknown[] })?.tickets) ? (j as { tickets: Record<string, unknown>[] }).tickets : []
  const tickets = rows.slice(0, 8).map((t) => ({ id: Number(t.id) || 0, subject: String(t.subject || 'Ticket'), status: String(t.status || ''), priority: String(t.priority || '') }))
  const open = tickets.filter((t) => t.status !== 'solved' && t.status !== 'closed').length
  return { connected: true, data: { tickets, open, total: tickets.length } }
}

// ---- Intercom (per-user OAuth · open conversations) -----------------------
async function intercomData(q: URLSearchParams): Promise<Result> {
  const conn = await userConn(q, 'intercom')
  if (!conn) return { connected: false }
  const j = await hfetch('https://api.intercom.io/conversations?per_page=10&order=desc', conn.token)
  const rows = Array.isArray((j as { conversations?: unknown[] })?.conversations) ? (j as { conversations: Record<string, unknown>[] }).conversations : []
  const conversations = rows.slice(0, 8).map((c) => ({
    id: String(c.id || ''), state: String(c.state || ''),
    title: String((c.source as { subject?: string })?.subject || 'Conversation'),
    open: c.open !== false,
  }))
  const open = conversations.filter((c) => c.open).length
  return { connected: true, data: { conversations, open, total: conversations.length } }
}

// ---- Google Drive (per-user OAuth · recent files) -------------------------
async function gdriveData(q: URLSearchParams): Promise<Result> {
  const conn = await userConn(q, 'gdrive')
  if (!conn) return { connected: false }
  const url = 'https://www.googleapis.com/drive/v3/files?orderBy=modifiedTime desc&pageSize=10&fields=files(id,name,mimeType,modifiedTime,webViewLink)'
  const j = await hfetch(url, conn.token)
  const rows = Array.isArray((j as { files?: unknown[] })?.files) ? (j as { files: Record<string, unknown>[] }).files : []
  const files = rows.slice(0, 8).map((f) => ({
    name: String(f.name || 'Untitled'),
    kind: String(f.mimeType || '').split('.').pop()?.replace(/^vnd\.?/, '') || 'file',
    modified: String(f.modifiedTime || ''), url: String(f.webViewLink || ''),
  }))
  return { connected: true, data: { files } }
}

// ---- DocuSign (per-user OAuth · recent envelopes) -------------------------
async function docusignData(q: URLSearchParams): Promise<Result> {
  const conn = await userConn(q, 'docusign')
  if (!conn) return { connected: false }
  // resolve the account + base URI from userinfo.
  const ui = await hfetch('https://account.docusign.com/oauth/userinfo', conn.token)
  const acct = Array.isArray((ui as { accounts?: unknown[] })?.accounts) ? (ui as { accounts: Record<string, unknown>[] }).accounts.find((a) => a.is_default) || (ui as { accounts: Record<string, unknown>[] }).accounts[0] : null
  if (!acct) return { connected: true, data: null }
  const base = String(acct.base_uri || '')
  const acctId = String(acct.account_id || '')
  if (!base || !acctId) return { connected: true, data: null }
  const from = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10)
  const j = await hfetch(`${base}/restapi/v2.1/accounts/${acctId}/envelopes?from_date=${from}&order=desc&count=10`, conn.token)
  const rows = Array.isArray((j as { envelopes?: unknown[] })?.envelopes) ? (j as { envelopes: Record<string, unknown>[] }).envelopes : []
  const envelopes = rows.slice(0, 8).map((e) => ({ subject: String(e.emailSubject || 'Envelope'), status: String(e.status || ''), sent: String(e.sentDateTime || e.createdDateTime || '') }))
  const pending = envelopes.filter((e) => e.status === 'sent' || e.status === 'delivered').length
  return { connected: true, account: String(acct.account_name || ''), data: { envelopes, pending, total: envelopes.length } }
}

// ---- Slack (per-user OAuth · public channels) -----------------------------
async function slackData(q: URLSearchParams): Promise<Result> {
  const conn = await userConn(q, 'slack')
  if (!conn) return { connected: false }
  const j = await hfetch('https://slack.com/api/conversations.list?exclude_archived=true&types=public_channel&limit=20', conn.token)
  const rows = Array.isArray((j as { channels?: unknown[] })?.channels) ? (j as { channels: Record<string, unknown>[] }).channels : []
  const channels = rows.slice(0, 12).map((c) => ({ name: String(c.name || ''), members: Number(c.num_members) || 0 }))
  return { connected: true, data: { channels, total: channels.length } }
}

// ---- shared: resolve the caller's sealed OAuth token for a connector -------
async function userConn(q: URLSearchParams, connectorId: string): Promise<{ token: string; external: string | null } | null> {
  if (!dbConfigured() || !vaultConfigured()) return null
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
  if (!accountId) return null
  return await connectionToken(pool, accountId, connectorId)
}

async function ghfetch(url: string, token: string): Promise<unknown | null> {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { authorization: `Bearer ${token}`, accept: 'application/vnd.github+json', 'user-agent': 'dojoburo' } })
    if (!res.ok) return null
    return await res.json()
  } catch { return null } finally { clearTimeout(t) }
}

async function postJson(url: string, token: string, body: unknown): Promise<unknown | null> {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { method: 'POST', signal: ctrl.signal, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' }, body: JSON.stringify(body) })
    if (!res.ok) return null
    return await res.json()
  } catch { return null } finally { clearTimeout(t) }
}

// A normalised accounting line the Finance studio can drop straight into its
// local ledger · positive amount = money in, negative = money out.
interface AcctLine { date: string; label: string; amount: number; kind: 'income' | 'expense' }

// ---- QuickBooks Online (per-user OAuth · invoices + purchases) -------------
async function quickbooksData(q: URLSearchParams): Promise<Result> {
  if (!dbConfigured() || !vaultConfigured()) return { connected: false }
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
  if (!accountId) return { connected: false }
  const conn = await connectionToken(pool, accountId, 'quickbooks')
  if (!conn) return { connected: false }
  const realm = conn.external
  if (!realm) return { connected: true, data: null }

  const base = (ENV.QUICKBOOKS_API_BASE || 'https://quickbooks.api.intuit.com').replace(/\/$/, '')
  const runQuery = async (sql: string): Promise<Record<string, unknown>[]> => {
    const url = `${base}/v3/company/${encodeURIComponent(realm)}/query?query=${encodeURIComponent(sql)}&minorversion=65`
    const j = await hfetch(url, conn.token)
    const qr = (j as { QueryResponse?: Record<string, unknown> })?.QueryResponse
    if (!qr) return []
    const key = Object.keys(qr).find((k) => Array.isArray((qr as Record<string, unknown>)[k]))
    return key ? ((qr as Record<string, unknown[]>)[key] as Record<string, unknown>[]) : []
  }
  const [invoices, purchases] = await Promise.all([
    runQuery('select * from Invoice order by TxnDate desc maxresults 20'),
    runQuery('select * from Purchase order by TxnDate desc maxresults 20'),
  ])
  const lines: AcctLine[] = []
  for (const inv of invoices) {
    lines.push({ date: String(inv.TxnDate || '').slice(0, 10), label: `Invoice ${inv.DocNumber || (inv.Id as string) || ''}`.trim(), amount: Number(inv.TotalAmt) || 0, kind: 'income' })
  }
  for (const pur of purchases) {
    const name = (pur.EntityRef as { name?: string })?.name || (pur.AccountRef as { name?: string })?.name || 'Purchase'
    lines.push({ date: String(pur.TxnDate || '').slice(0, 10), label: String(name), amount: -(Number(pur.TotalAmt) || 0), kind: 'expense' })
  }
  return acctResult(conn.external, lines)
}

// ---- Xero (per-user OAuth · invoices via the Accounting API) --------------
async function xeroData(q: URLSearchParams): Promise<Result> {
  if (!dbConfigured() || !vaultConfigured()) return { connected: false }
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
  if (!accountId) return { connected: false }
  const conn = await connectionToken(pool, accountId, 'xero')
  if (!conn) return { connected: false }

  // the tenant (organisation) id is fetched from the connections endpoint.
  const conns = await hfetch('https://api.xero.com/connections', conn.token)
  const tenant = Array.isArray(conns) ? (conns as { tenantId?: string }[])[0]?.tenantId : undefined
  if (!tenant) return { connected: true, data: null }
  const inv = await xfetch('https://api.xero.com/api.xro/2.0/Invoices?order=Date%20DESC&page=1', conn.token, tenant)
  const rows = Array.isArray((inv as { Invoices?: unknown[] })?.Invoices) ? (inv as { Invoices: Record<string, unknown>[] }).Invoices : []
  const parseDate = (s: unknown): string => {
    const m = /\/Date\((\d+)/.exec(String(s || ''))
    if (m) return new Date(Number(m[1])).toISOString().slice(0, 10)
    return String(s || '').slice(0, 10)
  }
  const lines: AcctLine[] = rows.slice(0, 30).map((r) => {
    // Type ACCREC = money in (sales), ACCPAY = money out (bills).
    const income = String(r.Type || '') === 'ACCREC'
    const total = Number(r.Total) || 0
    return { date: parseDate(r.Date), label: `${income ? 'Invoice' : 'Bill'} ${r.InvoiceNumber || ''}`.trim(), amount: income ? total : -total, kind: income ? 'income' as const : 'expense' as const }
  })
  return acctResult(conn.external, lines)
}

async function xfetch(url: string, token: string, tenant: string): Promise<unknown | null> {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { authorization: `Bearer ${token}`, 'xero-tenant-id': tenant, accept: 'application/json' } })
    if (!res.ok) return null
    return await res.json()
  } catch { return null } finally { clearTimeout(t) }
}

/** Roll up accounting lines into totals + the normalised feed for Finance. */
function acctResult(account: string | null, lines: AcctLine[]): Result {
  if (!lines.length) return { connected: true, account, data: { income: 0, expense: 0, lines: [] } }
  let income = 0, expense = 0
  for (const l of lines) { if (l.amount >= 0) income += l.amount; else expense += -l.amount }
  lines.sort((a, b) => (a.date < b.date ? 1 : -1))
  return { connected: true, account, data: { income: Math.round(income), expense: Math.round(expense), lines: lines.slice(0, 40) } }
}

// ---- Google Calendar (per-user OAuth · upcoming events) -------------------
async function gcalData(q: URLSearchParams): Promise<Result> {
  if (!dbConfigured() || !vaultConfigured()) return { connected: false }
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
  if (!accountId) return { connected: false }
  const conn = await connectionToken(pool, accountId, 'gcal')
  if (!conn) return { connected: false }

  const now = new Date().toISOString()
  const url = `https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${encodeURIComponent(now)}&maxResults=8&singleEvents=true&orderBy=startTime`
  const j = await hfetch(url, conn.token)
  if (!j) return { connected: true, data: null }
  const items = Array.isArray((j as { items?: unknown[] })?.items) ? (j as { items: unknown[] }).items : []
  const events = items.map((e) => {
    const ev = e as { summary?: string; start?: { dateTime?: string; date?: string }; end?: { dateTime?: string; date?: string }; hangoutLink?: string; location?: string; attendees?: unknown[] }
    return {
      title: ev.summary || 'Untitled event',
      start: ev.start?.dateTime || ev.start?.date || '',
      allDay: !ev.start?.dateTime,
      location: ev.location || '',
      link: ev.hangoutLink || '',
      attendees: Array.isArray(ev.attendees) ? ev.attendees.length : 0,
    }
  })
  return { connected: true, account: conn.external, data: { events } }
}

// ---- Calendly (per-user OAuth · scheduled invitee events) -----------------
async function calendlyData(q: URLSearchParams): Promise<Result> {
  if (!dbConfigured() || !vaultConfigured()) return { connected: false }
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
  if (!accountId) return { connected: false }
  const conn = await connectionToken(pool, accountId, 'calendly')
  if (!conn) return { connected: false }

  // resolve the current user URI, then list upcoming scheduled events.
  const me = await hfetch('https://api.calendly.com/users/me', conn.token)
  const userUri = (me as { resource?: { uri?: string } })?.resource?.uri
  if (!userUri) return { connected: true, data: null }
  const now = new Date().toISOString()
  const url = `https://api.calendly.com/scheduled_events?user=${encodeURIComponent(userUri)}&status=active&min_start_time=${encodeURIComponent(now)}&count=8&sort=start_time:asc`
  const j = await hfetch(url, conn.token)
  if (!j) return { connected: true, data: null }
  const coll = Array.isArray((j as { collection?: unknown[] })?.collection) ? (j as { collection: unknown[] }).collection : []
  const events = coll.map((e) => {
    const ev = e as { name?: string; start_time?: string; location?: { join_url?: string; location?: string }; event_memberships?: unknown[] }
    return {
      title: ev.name || 'Meeting',
      start: ev.start_time || '',
      allDay: false,
      location: ev.location?.location || '',
      link: ev.location?.join_url || '',
      attendees: Array.isArray(ev.event_memberships) ? ev.event_memberships.length : 0,
    }
  })
  return { connected: true, data: { events } }
}

// ---- Mailchimp (per-user OAuth · audience read) ---------------------------
async function mailchimpData(q: URLSearchParams): Promise<Result> {
  if (!dbConfigured() || !vaultConfigured()) return { connected: false }
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
  if (!accountId) return { connected: false }
  const conn = await connectionToken(pool, accountId, 'mailchimp')
  if (!conn) return { connected: false }

  // the API base (datacenter) lives behind the OAuth metadata endpoint
  let base = ''
  try {
    const m = await fetch('https://login.mailchimp.com/oauth2/metadata', { headers: { authorization: `OAuth ${conn.token}` } })
    const mj = await m.json().catch(() => ({})) as { api_endpoint?: string }
    base = String(mj?.api_endpoint || '')
  } catch { /* ignore */ }
  if (!base) return { connected: true, data: null }

  const lists = await hfetch(`${base}/3.0/lists?count=5&fields=lists.id,lists.name,lists.stats.member_count,total_items`, conn.token)
  if (!lists) return { connected: true, data: null }
  const rows = Array.isArray((lists as { lists?: unknown[] })?.lists) ? (lists as { lists: unknown[] }).lists : []
  let members = 0
  const audiences = rows.map((l) => {
    const row = l as { name?: string; stats?: { member_count?: number } }
    const c = Number(row.stats?.member_count) || 0
    members += c
    return { name: row.name || 'Audience', members: c }
  })
  return { connected: true, data: { total: Number((lists as { total_items?: number })?.total_items) || audiences.length, members, audiences } }
}

// ---- HubSpot (per-user OAuth · the caller's own CRM) ----------------------
async function hubspotData(q: URLSearchParams): Promise<Result> {
  if (!dbConfigured() || !vaultConfigured()) return { connected: false }
  const pool = getPool()
  const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
  if (!accountId) return { connected: false }
  const conn = await connectionToken(pool, accountId, 'hubspot')
  if (!conn) return { connected: false }

  const [contactsRes, dealsRes] = await Promise.all([
    hfetch('https://api.hubapi.com/crm/v3/objects/contacts?limit=8&properties=firstname,lastname,email,company,lifecyclestage&archived=false', conn.token),
    hfetch('https://api.hubapi.com/crm/v3/objects/deals?limit=50&properties=dealname,amount,dealstage&archived=false', conn.token),
  ])
  if (!contactsRes && !dealsRes) return { connected: true, data: null }

  const contacts = Array.isArray((contactsRes as { results?: unknown[] })?.results)
    ? ((contactsRes as { results: unknown[] }).results).map((c) => {
        const p = (c as { properties?: Record<string, string> }).properties || {}
        const name = [p.firstname, p.lastname].filter(Boolean).join(' ').trim()
        return { name: name || p.email || 'Contact', email: p.email || '', company: p.company || '', stage: p.lifecyclestage || '' }
      })
    : []
  const dealRows = Array.isArray((dealsRes as { results?: unknown[] })?.results) ? ((dealsRes as { results: unknown[] }).results) : []
  let pipeline = 0
  for (const d of dealRows) { pipeline += Number((d as { properties?: { amount?: string } }).properties?.amount) || 0 }

  return {
    connected: true,
    data: {
      contactsTotal: Number((contactsRes as { total?: number })?.total) || contacts.length,
      contacts,
      deals: { count: dealRows.length, pipeline },
    },
  }
}

async function hfetch(url: string, token: string): Promise<unknown | null> {
  const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { authorization: `Bearer ${token}`, accept: 'application/json' } })
    if (!res.ok) return null
    return await res.json()
  } catch { return null } finally { clearTimeout(t) }
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
