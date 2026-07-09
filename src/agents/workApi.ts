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

function ref(): { privy?: string; client?: string } {
  const acc = useWorkshop.getState().account
  return { privy: acc?.privyDid || undefined, client: acc?.id || undefined }
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
  const startup = useWorkshop.getState().dojos.find((d) => d.id === useWorkshop.getState().activeDojoId)?.name || ''
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
      body: JSON.stringify({ ...input, extAgents: undefined, extMcp, startup, net, ...ref() }),
    })
    return (await res.json()) as RunResult
  } catch (e: any) {
    return { ok: false, error: 'network', detail: String(e?.message || e) }
  }
}
