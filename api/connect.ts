// DojoBuro tool-connector OAuth endpoint (Vercel Node serverless).
//
// One URL (/api/connect) drives the whole connect lifecycle via ?action=:
//   ?action=list      GET   → tools + which are available / connected (no secrets)
//   ?action=start     GET   → 302 to the provider's OAuth consent screen
//   (provider redirect) GET → ?code&state → exchange, seal token, store, 302 back
//   ?action=disconnect POST → revoke a connection
//
// OAuth tokens are sealed (AES-256-GCM) before they touch the DB; the browser
// only ever learns a connector's status. Requires db/schema.sql + db/connectors.sql
// applied, CONNECTOR_ENC_KEY set, and each tool's OAuth client id/secret set.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { createHmac } from 'node:crypto'
import { getPool, dbConfigured } from './_lib/db'
import { resolveAccountId, findAccountId } from './_lib/accounts'
import { seal, vaultConfigured } from './_lib/vault'
import {
  serverConnector, connectorAvailable, clientId, clientSecret, redirectUri, siteUrl,
  CONNECTOR_IDS, type ServerConnector,
} from './_lib/connectors'

export const config = { maxDuration: 20 }

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const url = new URL(req.url || '/', `https://${req.headers.host || 'localhost'}`)
  const q = url.searchParams
  const action = q.get('action') || ''

  // OAuth provider redirect lands here with ?code&state (or ?error)
  if (q.get('code') || q.get('error')) return callback(req, res, q)

  if (action === 'list') return list(req, res, q)
  if (action === 'start') return start(req, res, q)
  if (action === 'disconnect') return disconnect(req, res)

  return json(res, 400, { ok: false, error: 'bad_action' })
}

// ---- list -----------------------------------------------------------------
async function list(req: IncomingMessage, res: ServerResponse, q: URLSearchParams): Promise<void> {
  const connected: Record<string, { external_account: string | null; status: string }> = {}
  if (dbConfigured() && vaultConfigured()) {
    try {
      const pool = getPool()
      const accountId = await findAccountId(pool, { privyDid: q.get('privy'), clientRef: q.get('client') })
      if (accountId) {
        const r = await pool.query(`select connector_id, external_account, status from connections where account_id = $1`, [accountId])
        for (const row of r.rows) connected[row.connector_id] = { external_account: row.external_account, status: row.status }
      }
    } catch {
      /* fall through with empty connected map */
    }
  }
  const tools = CONNECTOR_IDS.map((id) => ({
    id,
    available: connectorAvailable(id) && dbConfigured() && vaultConfigured(),
    connected: !!connected[id] && connected[id].status === 'connected',
    account: connected[id]?.external_account ?? null,
  }))
  return json(res, 200, { ok: true, tools, backend: dbConfigured() && vaultConfigured() })
}

// ---- start ----------------------------------------------------------------
async function start(req: IncomingMessage, res: ServerResponse, q: URLSearchParams): Promise<void> {
  const id = q.get('connector') || ''
  const c = serverConnector(id)
  if (!c) return json(res, 404, { ok: false, error: 'unknown_connector' })
  if (!connectorAvailable(id)) return backTo(res, `${siteUrl()}/#connect_error=${id}:not_available`)
  if (!dbConfigured() || !vaultConfigured()) return backTo(res, `${siteUrl()}/#connect_error=${id}:no_backend`)

  const ref = { privyDid: q.get('privy'), clientRef: q.get('client') }
  if (!ref.privyDid && !ref.clientRef) return json(res, 400, { ok: false, error: 'no_account' })

  const state = signState({ id, privy: ref.privyDid || '', client: ref.clientRef || '', n: nonce() })
  const auth = new URL(c.oauth.authorizeUrl)
  auth.searchParams.set('client_id', clientId(c)!)
  auth.searchParams.set('redirect_uri', redirectUri())
  auth.searchParams.set('response_type', 'code')
  if (c.oauth.scope) auth.searchParams.set('scope', c.oauth.scope)
  auth.searchParams.set('state', state)
  for (const [k, v] of Object.entries(c.oauth.extraAuthorize || {})) auth.searchParams.set(k, v)

  res.statusCode = 302
  res.setHeader('location', auth.toString())
  res.end()
}

// ---- callback -------------------------------------------------------------
async function callback(req: IncomingMessage, res: ServerResponse, q: URLSearchParams): Promise<void> {
  if (q.get('error')) return backTo(res, `${siteUrl()}/#connect_error=${enc(q.get('error')!)}`)
  const parsed = verifyState(q.get('state') || '')
  if (!parsed) return backTo(res, `${siteUrl()}/#connect_error=bad_state`)
  const c = serverConnector(parsed.id)
  if (!c || !connectorAvailable(parsed.id)) return backTo(res, `${siteUrl()}/#connect_error=${parsed.id}:not_available`)

  try {
    const tok = await exchange(c, q.get('code')!)
    const pool = getPool()
    const accountId = await resolveAccountId(pool, { privyDid: parsed.privy || null, clientRef: parsed.client || null })
    if (!accountId) return backTo(res, `${siteUrl()}/#connect_error=${parsed.id}:no_account`)

    const expiresAt = tok.expiresIn ? new Date(Date.now() + tok.expiresIn * 1000).toISOString() : null
    await pool.query(
      `insert into connections (account_id, connector_id, status, scope, external_account, access_token, refresh_token, expires_at, mcp_url, updated_at)
       values ($1,$2,'connected',$3,$4,$5,$6,$7,$8, now())
       on conflict (account_id, connector_id) do update set
         status='connected', scope=excluded.scope, external_account=excluded.external_account,
         access_token=excluded.access_token, refresh_token=coalesce(excluded.refresh_token, connections.refresh_token),
         expires_at=excluded.expires_at, mcp_url=excluded.mcp_url, updated_at=now()`,
      [accountId, parsed.id, tok.scope, tok.label, seal(tok.accessToken), tok.refreshToken ? seal(tok.refreshToken) : null, expiresAt, c.mcp.url],
    )
    return backTo(res, `${siteUrl()}/#connected=${parsed.id}`)
  } catch (e: any) {
    return backTo(res, `${siteUrl()}/#connect_error=${parsed.id}:${enc(String(e?.message || e).slice(0, 60))}`)
  }
}

// ---- disconnect -----------------------------------------------------------
async function disconnect(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method !== 'POST') return json(res, 405, { ok: false, error: 'method' })
  if (!dbConfigured()) return json(res, 200, { ok: false, error: 'no_backend' })
  let body: any
  try {
    body = JSON.parse(await readBody(req))
  } catch {
    return json(res, 400, { ok: false, error: 'bad_json' })
  }
  const id = String(body?.connector || '')
  if (!serverConnector(id)) return json(res, 404, { ok: false, error: 'unknown_connector' })
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: body?.privy, clientRef: body?.client })
    if (accountId) await pool.query(`delete from connections where account_id = $1 and connector_id = $2`, [accountId, id])
    return json(res, 200, { ok: true })
  } catch {
    return json(res, 200, { ok: false, error: 'db' })
  }
}

// ---- token exchange -------------------------------------------------------
interface Token { accessToken: string; refreshToken?: string; expiresIn?: number; scope: string | null; label: string | null }

async function exchange(c: ServerConnector, code: string): Promise<Token> {
  const headers: Record<string, string> = { accept: 'application/json' }
  const params: Record<string, string> = {
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri(),
  }
  if (c.oauth.tokenAuth === 'basic') {
    headers.authorization = 'Basic ' + Buffer.from(`${clientId(c)}:${clientSecret(c)}`).toString('base64')
    headers['content-type'] = 'application/json'
  } else {
    params.client_id = clientId(c)!
    params.client_secret = clientSecret(c)!
    headers['content-type'] = 'application/x-www-form-urlencoded'
  }
  const res = await fetch(c.oauth.tokenUrl, {
    method: 'POST',
    headers,
    body: c.oauth.tokenAuth === 'basic' ? JSON.stringify(params) : new URLSearchParams(params).toString(),
  })
  const text = await res.text()
  let j: any
  try {
    j = JSON.parse(text)
  } catch {
    j = Object.fromEntries(new URLSearchParams(text)) // GitHub without Accept:json
  }
  if (!res.ok || j?.error || (j?.ok === false)) throw new Error(j?.error || j?.error_description || `token_${res.status}`)
  const accessToken = j.access_token || j.authed_user?.access_token
  if (!accessToken) throw new Error('no_access_token')
  const label = j.workspace_name || j.team?.name || j.stripe_user_id || j.user_id || j.scope || c.id
  return {
    accessToken,
    refreshToken: j.refresh_token || j.authed_user?.refresh_token || undefined,
    expiresIn: Number.isFinite(Number(j.expires_in)) ? Number(j.expires_in) : undefined,
    scope: j.scope ? String(j.scope).slice(0, 300) : null,
    label: label ? String(label).slice(0, 120) : null,
  }
}

// ---- signed state ---------------------------------------------------------
interface State { id: string; privy: string; client: string; n: string }
function stateSecret(): string {
  return process.env.CONNECT_STATE_SECRET || process.env.CONNECTOR_ENC_KEY || 'dojoburo-connect'
}
function signState(s: State): string {
  const payload = b64u(Buffer.from(JSON.stringify(s), 'utf8'))
  const sig = createHmac('sha256', stateSecret()).update(payload).digest('hex').slice(0, 32)
  return `${payload}.${sig}`
}
function verifyState(v: string): State | null {
  const [payload, sig] = v.split('.')
  if (!payload || !sig) return null
  const expect = createHmac('sha256', stateSecret()).update(payload).digest('hex').slice(0, 32)
  if (sig !== expect) return null
  try {
    return JSON.parse(Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8'))
  } catch {
    return null
  }
}

// ---- helpers --------------------------------------------------------------
function nonce(): string {
  return Math.floor(Math.random() * 1e9).toString(36) + Date.now().toString(36)
}
function b64u(b: Buffer): string {
  return b.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
function enc(s: string): string {
  return encodeURIComponent(s)
}
function backTo(res: ServerResponse, location: string): void {
  res.statusCode = 302
  res.setHeader('location', location)
  res.setHeader('cache-control', 'no-store')
  res.end()
}
function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as any).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      if (d.length > 4000) {
        reject(new Error('too_large'))
        req.destroy()
      }
    })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}
function json(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}
