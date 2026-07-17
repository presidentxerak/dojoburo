// Client wrappers for the connector + real-work endpoints. Identity is a ref
// (the Privy DID when signed in, else the guest account id) PLUS PROOF: every
// call carries the Privy access token in an Authorization header, which the
// server verifies against Privy's JWKS — a DID claim alone is rejected. No
// connector token ever crosses this boundary · the browser only sees status.
import { useWorkshop, type ExtAgent } from '../workshop'
import { useDojo } from '../store'
import { privyAccessToken } from '../auth/controls'

export interface ToolStatus {
  id: string
  available: boolean
  connected: boolean
  account: string | null
}

function ref(): { privy?: string; client?: string; email?: string } {
  const acc = useWorkshop.getState().account
  // email lets the server recognise an admin/operator account (unlimited free
  // testing). Only used in JSON bodies; never added to query strings.
  return { privy: acc?.privyDid || undefined, client: acc?.id || undefined, email: acc?.email || undefined }
}

function refParams(): string {
  const r = ref()
  const p = new URLSearchParams()
  if (r.privy) p.set('privy', r.privy)
  if (r.client) p.set('client', r.client)
  return p.toString()
}

/** Authorization header proving the Privy identity · {} for guests. The token
 *  is fetched fresh per call (Privy refreshes it) and travels ONLY in a header,
 *  never in a URL where it could end up in logs. */
async function authHeader(): Promise<Record<string, string>> {
  const t = await privyAccessToken()
  return t ? { authorization: `Bearer ${t}` } : {}
}

export interface ByokStatus { connected: boolean; hint: string | null }

export async function listTools(): Promise<{ tools: ToolStatus[]; backend: boolean; byok: ByokStatus }> {
  try {
    const res = await fetch(`/api/connect?action=list&${refParams()}`, { headers: { accept: 'application/json', ...(await authHeader()) } })
    const j = await res.json()
    if (j?.ok) return { tools: j.tools, backend: !!j.backend, byok: j.byok ?? { connected: false, hint: null } }
  } catch {
    /* offline / not deployed */
  }
  return { tools: [], backend: false, byok: { connected: false, hint: null } }
}

/** Send a real email from the user's connected Gmail. Degrades to a clear error
 *  when Gmail/DB aren't configured. */
export async function sendGmail(to: string, subject: string, body: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = ref()
    const res = await fetch('/api/tool-action', {
      method: 'POST', headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ connector: 'gmail', action: 'send', to, subject, body, privy: r.privy, client: r.client }),
    })
    const j = await res.json().catch(() => ({}))
    return { ok: !!j?.ok, error: j?.error }
  } catch {
    return { ok: false, error: 'network' }
  }
}

/** Generic connector action (post/create/…) via /api/tool-action. */
export async function toolAction(connector: string, action: string, payload: Record<string, unknown>): Promise<{ ok: boolean; error?: string; [k: string]: unknown }> {
  try {
    const r = ref()
    const res = await fetch('/api/tool-action', {
      method: 'POST', headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ connector, action, ...payload, privy: r.privy, client: r.client }),
    })
    const j = await res.json().catch(() => ({}))
    return { ok: !!j?.ok, error: j?.error, ...j }
  } catch {
    return { ok: false, error: 'network' }
  }
}

/** Post a message to the team's Slack from the user's connected Slack. */
export async function postSlack(text: string, channel?: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = ref()
    const res = await fetch('/api/tool-action', {
      method: 'POST', headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ connector: 'slack', action: 'post', text, channel, privy: r.privy, client: r.client }),
    })
    const j = await res.json().catch(() => ({}))
    return { ok: !!j?.ok, error: j?.error }
  } catch {
    return { ok: false, error: 'network' }
  }
}

/** Live data for a connected tool (Stripe balance, …). Degrades to
 *  { connected:false } when the tool/backend isn't configured. */
export interface ToolData { connected: boolean; admin?: boolean; account?: string | null; data?: unknown }
export async function toolData(connector: string, dojo?: string): Promise<ToolData> {
  try {
    const p = new URLSearchParams(refParams())
    p.set('connector', connector)
    if (dojo) p.set('dojo', dojo)
    const res = await fetch(`/api/tool-data?${p.toString()}`, { headers: { accept: 'application/json', ...(await authHeader()) } })
    const j = await res.json()
    if (j?.ok) return { connected: !!j.connected, admin: j.admin, account: j.account ?? null, data: j.data }
  } catch {
    /* offline / not deployed */
  }
  return { connected: false }
}

/** Store the user's own Claude key (BYOK) · sealed server-side, billed to them. */
export async function setClaudeKey(key: string): Promise<{ ok: boolean; hint?: string; error?: string }> {
  try {
    const res = await fetch('/api/connect?action=setkey', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ key, ...ref() }),
    })
    return await res.json()
  } catch {
    return { ok: false, error: 'network' }
  }
}

export async function removeClaudeKey(): Promise<boolean> {
  try {
    const res = await fetch('/api/connect?action=removekey', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ ...ref() }),
    })
    const j = await res.json()
    return !!j?.ok
  } catch {
    return false
  }
}

/** Open the provider's OAuth consent screen. Preferred path: fetch the
 *  authorize URL with the Privy token in a HEADER (verified server-side), then
 *  navigate — so the token never appears in a URL. Falls back to the legacy
 *  direct redirect (fine for guests) if the JSON mode is unavailable. */
export function startConnect(connectorId: string): void {
  const p = new URLSearchParams({ action: 'start', connector: connectorId })
  const r = ref()
  if (r.privy) p.set('privy', r.privy)
  if (r.client) p.set('client', r.client)
  const target = `/api/connect?${p.toString()}`
  void (async () => {
    try {
      const res = await fetch(target, { headers: { accept: 'application/json', ...(await authHeader()) } })
      const j = await res.json().catch(() => null)
      if (j?.ok && j.url) { window.location.href = j.url as string; return }
      if (j && j.ok === false) {
        const map: Record<string, string> = {
          auth: 'Your session expired · sign in again, then retry.',
          not_available: 'This app is not enabled on this deployment yet.',
          no_backend: 'Connecting needs the server vault configured.',
        }
        useDojo.getState().pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Could not connect', text: map[j.error as string] || 'Could not start the connection.' })
        return
      }
    } catch { /* fall through to the legacy redirect */ }
    window.location.href = target
  })()
}

export async function disconnectTool(connectorId: string): Promise<boolean> {
  try {
    const res = await fetch('/api/connect?action=disconnect', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ connector: connectorId, ...ref() }),
    })
    const j = await res.json()
    return !!j?.ok
  } catch {
    return false
  }
}

export interface Deliverable {
  taskId: string
  title: string
  format: 'design-system' | 'markdown'
  markdown: string
  tokens?: any
  model: string
}
export interface RunResult {
  ok: boolean
  error?: string
  detail?: string
  reason?: 'tool' | 'design'
  engine?: 'byok' | 'operator' | 'free'
  deliverable?: Deliverable
  tools?: string[]
  settlement?: { ok: boolean; hash?: string; explorerUrl?: string; amountXrp?: number; error?: string } | null
  priceXrp?: number
}

export async function runWork(input: { task: string; agentName: string; connectors: string[]; brief?: string; extAgents?: ExtAgent[] }): Promise<RunResult> {
  const activeDojoId = useWorkshop.getState().activeDojoId
  const startup = useWorkshop.getState().dojos.find((d) => d.id === activeDojoId)?.name || ''
  const net = useDojo.getState().net
  // external MCP agents attach as tools during the run · A2A / webhook agents are
  // delegated to separately (see delegateToAgent), so only 'mcp' ones ride along
  const extMcp = (input.extAgents || [])
    .filter((a) => a.protocol === 'mcp' && a.url)
    .map((a) => ({ url: a.url, name: a.name, authToken: a.authToken }))
  try {
    const res = await fetch('/api/agent-run', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ ...input, extAgents: undefined, extMcp, startup, net, dojo: activeDojoId || undefined, ...ref() }),
    })
    return (await res.json()) as RunResult
  } catch (e: any) {
    return { ok: false, error: 'network', detail: String(e?.message || e) }
  }
}

// ---- company secrets (env vars) · sealed server-side ----------------------
// WRITE-ONLY like Vercel: the server never returns the value, nor any preview
// of it — only the name + description come back.
export interface ServerSecret { id: string; name: string; description: string; updatedAt?: string }

/** List a company's secrets (names only, never values). `backend` is false
 *  when the encrypted vault isn't configured on this deployment. */
export async function listSecrets(dojo: string): Promise<{ backend: boolean; secrets: ServerSecret[] }> {
  try {
    const p = new URLSearchParams({ action: 'list', dojo })
    const r = ref(); if (r.privy) p.set('privy', r.privy); if (r.client) p.set('client', r.client)
    const res = await fetch(`/api/secrets?${p.toString()}`, { headers: { accept: 'application/json', ...(await authHeader()) } })
    const j = await res.json()
    // server mode ONLY when the endpoint fully works (vault + DB table present);
    // no_backend or a db error falls back to the local store with a warning.
    if (j?.ok === true) return { backend: true, secrets: Array.isArray(j.secrets) ? j.secrets : [] }
    return { backend: false, secrets: [] }
  } catch {
    return { backend: false, secrets: [] }
  }
}

export async function saveSecret(dojo: string, name: string, value: string, description: string): Promise<{ ok: boolean; secret?: ServerSecret; error?: string }> {
  try {
    const res = await fetch('/api/secrets?action=save', {
      method: 'POST', headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ dojo, name, value, description, ...ref() }),
    })
    return await res.json()
  } catch { return { ok: false, error: 'network' } }
}

export async function removeSecret(dojo: string, id: string): Promise<boolean> {
  try {
    const res = await fetch('/api/secrets?action=remove', {
      method: 'POST', headers: { 'content-type': 'application/json', ...(await authHeader()) },
      body: JSON.stringify({ dojo, id, ...ref() }),
    })
    const j = await res.json()
    return !!j?.ok
  } catch { return false }
}
