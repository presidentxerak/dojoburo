// Client wrappers for linking + calling external AI agents (Notion, Slack, or
// any A2A / MCP host). Browsers can't call arbitrary agent endpoints (CORS/CSP),
// so verify + delegate go through the server proxy (/api/agent-proxy), which
// keeps auth tokens off the wire · exactly like the connector vault.
import { useWorkshop } from '../workshop'
import type { ExtAgent } from '../workshop'

function ref(): { privy?: string; client?: string } {
  const acc = useWorkshop.getState().account
  return { privy: acc?.privyDid || undefined, client: acc?.id || undefined }
}

export interface VerifyResult {
  ok: boolean
  /** the external agent's advertised name (from its A2A card / MCP init) */
  name?: string
  /** short list of capabilities / skills / tools it exposes */
  capabilities?: string[]
  backend: boolean
  error?: string
}

export interface CallResult {
  ok: boolean
  text?: string
  backend: boolean
  error?: string
}

/** Reachability + identity check for an external agent (A2A card or MCP init). */
export async function verifyExternalAgent(a: Pick<ExtAgent, 'protocol' | 'url' | 'authToken'>): Promise<VerifyResult> {
  try {
    const res = await fetch('/api/agent-proxy', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'verify', protocol: a.protocol, url: a.url, authToken: a.authToken, ...ref() }),
    })
    if (res.status === 404) return { ok: false, backend: false, error: 'The agent worker is not deployed yet · the link is saved and will verify once it is.' }
    const j = await res.json()
    return { ok: !!j?.ok, name: j?.name, capabilities: j?.capabilities, backend: true, error: j?.error }
  } catch {
    return { ok: false, backend: false, error: 'Could not reach the agent worker.' }
  }
}

/** Delegate a task to an external A2A / webhook agent and return its reply text. */
export async function delegateToAgent(a: Pick<ExtAgent, 'protocol' | 'url' | 'authToken'>, task: string): Promise<CallResult> {
  try {
    const res = await fetch('/api/agent-proxy', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ action: 'call', protocol: a.protocol, url: a.url, authToken: a.authToken, task, ...ref() }),
    })
    if (res.status === 404) return { ok: false, backend: false, error: 'The agent worker is not deployed yet.' }
    const j = await res.json()
    return { ok: !!j?.ok, text: j?.text, backend: true, error: j?.error }
  } catch {
    return { ok: false, backend: false, error: 'Could not reach the agent worker.' }
  }
}
