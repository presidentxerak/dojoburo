// Client wrappers for the connector + real-work endpoints. All identity is a
// ref: the Privy DID when signed in, else the workshop account id (guest). No
// token ever crosses this boundary · the browser only sees connector status.
import { useWorkshop, type ExtAgent } from '../workshop'
import { useDojo } from '../store'

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

export interface ByokStatus { connected: boolean; hint: string | null }

export async function listTools(): Promise<{ tools: ToolStatus[]; backend: boolean; byok: ByokStatus }> {
  try {
    const res = await fetch(`/api/connect?action=list&${refParams()}`, { headers: { accept: 'application/json' } })
    const j = await res.json()
    if (j?.ok) return { tools: j.tools, backend: !!j.backend, byok: j.byok ?? { connected: false, hint: null } }
  } catch {
    /* offline / not deployed */
  }
  return { tools: [], backend: false, byok: { connected: false, hint: null } }
}

/** Live data for a connected tool (Stripe balance, …). Degrades to
 *  { connected:false } when the tool/backend isn't configured. */
export interface ToolData { connected: boolean; admin?: boolean; account?: string | null; data?: unknown }
export async function toolData(connector: string, dojo?: string): Promise<ToolData> {
  try {
    const p = new URLSearchParams(refParams())
    p.set('connector', connector)
    if (dojo) p.set('dojo', dojo)
    const res = await fetch(`/api/tool-data?${p.toString()}`, { headers: { accept: 'application/json' } })
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
      headers: { 'content-type': 'application/json' },
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
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...ref() }),
    })
    const j = await res.json()
    return !!j?.ok
  } catch {
    return false
  }
}

/** Top-level navigation to the provider's OAuth screen. */
export function startConnect(connectorId: string): void {
  const p = new URLSearchParams({ action: 'start', connector: connectorId })
  const r = ref()
  if (r.privy) p.set('privy', r.privy)
  if (r.client) p.set('client', r.client)
  window.location.href = `/api/connect?${p.toString()}`
}

export async function disconnectTool(connectorId: string): Promise<boolean> {
  try {
    const res = await fetch('/api/connect?action=disconnect', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
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
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...input, extAgents: undefined, extMcp, startup, net, dojo: activeDojoId || undefined, ...ref() }),
    })
    return (await res.json()) as RunResult
  } catch (e: any) {
    return { ok: false, error: 'network', detail: String(e?.message || e) }
  }
}

// ---- company secrets (env vars) · sealed server-side ----------------------
export interface ServerSecret { id: string; name: string; preview: string; description: string; updatedAt?: string }

/** List a company's secrets (names + masked previews only). `backend` is false
 *  when the encrypted vault isn't configured on this deployment. */
export async function listSecrets(dojo: string): Promise<{ backend: boolean; secrets: ServerSecret[] }> {
  try {
    const p = new URLSearchParams({ action: 'list', dojo })
    const r = ref(); if (r.privy) p.set('privy', r.privy); if (r.client) p.set('client', r.client)
    const res = await fetch(`/api/secrets?${p.toString()}`, { headers: { accept: 'application/json' } })
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
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ dojo, name, value, description, ...ref() }),
    })
    return await res.json()
  } catch { return { ok: false, error: 'network' } }
}

export async function removeSecret(dojo: string, id: string): Promise<boolean> {
  try {
    const res = await fetch('/api/secrets?action=remove', {
      method: 'POST', headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ dojo, id, ...ref() }),
    })
    const j = await res.json()
    return !!j?.ok
  } catch { return false }
}
