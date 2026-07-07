// DojoBuro real-work runner (Vercel Node serverless).
//
// This is where an agent does REAL work. It runs a Claude task for the agent's
// function and returns an actual deliverable (a design system, a PRD, a spec, a
// campaign …). If the user has connected tools (Notion, GitHub, Gmail …), those
// are exposed to Claude as remote MCP servers — with the user's OAuth token,
// decrypted from the vault only here — so the agent also acts inside the tool
// (creates the Notion page, opens the PR, drafts the email).
//
// "Claude Design" is the design-system task: Claude generates real tokens +
// components, rendered as a live preview in the app.
//
// Real payment: on Mainnet, the run settles a REAL x402 XRP Payment server-side
// (hot-wallet seed never touches the browser) and returns the explorer link.
//
// Gated by ANTHROPIC_API_KEY → without it, returns { ok:false, error:'not_configured' }
// and the app keeps working with its built-in (non-LLM) skill animations.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { serverWorkTask, type ServerWorkTask } from './_lib/worktasks'
import { getPool, dbConfigured } from './_lib/db'
import { findAccountId } from './_lib/accounts'
import { open, vaultConfigured } from './_lib/vault'
import { connectorAvailable } from './_lib/connectors'
import { settlementConfigured, settlementNetwork, settleX402 } from './_lib/settle'

export const config = { maxDuration: 60 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const MODEL = ENV.ANTHROPIC_WORK_MODEL || 'claude-opus-4-8'
const MAX_TOKENS = int(ENV.ANTHROPIC_WORK_MAX_TOKENS, 6000)
const MCP_BETA = ENV.ANTHROPIC_MCP_BETA || 'mcp-client-2025-04-04'
const THINKING = ENV.ANTHROPIC_WORK_THINKING || '' // 'adaptive' to enable extended thinking
const RATE_MAX = int(ENV.WORK_RATE_MAX, 20)
const RATE_WINDOW_MS = int(ENV.WORK_RATE_WINDOW_MS, 10 * 60 * 1000)
const hits = new Map<string, number[]>()

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') return send(res, 204, {})
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

  const origin = header(req, 'origin')
  const host = header(req, 'host') || ''
  if (origin) {
    const ok = ALLOWED_ORIGIN ? origin === ALLOWED_ORIGIN : origin.includes(host)
    if (!ok) return send(res, 403, { ok: false, error: 'origin' })
  }
  const ip = (header(req, 'x-forwarded-for') || '').split(',')[0].trim() || 'anon'
  if (!allow(ip)) return send(res, 429, { ok: false, error: 'rate' })

  if (!ENV.ANTHROPIC_API_KEY) return send(res, 200, { ok: false, error: 'not_configured' })

  let body: any
  try {
    body = JSON.parse(await readBody(req))
  } catch {
    return send(res, 400, { ok: false, error: 'bad_json' })
  }

  const task = serverWorkTask(String(body?.task || ''))
  if (!task) return send(res, 400, { ok: false, error: 'unknown_task' })

  const agentName = String(body?.agentName || 'the agent').slice(0, 40)
  const brief = String(body?.brief || '').slice(0, 800)
  const startup = String(body?.startup || '').slice(0, 200)
  const net = String(body?.net || 'testnet')
  const requested: string[] = Array.isArray(body?.connectors) ? body.connectors.map((s: any) => String(s)).slice(0, 8) : []

  // ---- resolve connected tools → MCP servers (best-effort) ----------------
  const mcpServers = await resolveMcpServers(task.usesConnectors.filter((c) => requested.includes(c)), {
    privy: body?.privy, client: body?.client,
  })

  // ---- run Claude ---------------------------------------------------------
  let text: string
  let modelUsed = MODEL
  let usage: any = null
  try {
    const out = await callClaude(task.system, task.user({ agentName, brief, startup }), mcpServers)
    text = out.text
    modelUsed = out.model
    usage = out.usage
  } catch (e: any) {
    return send(res, 200, { ok: false, error: 'run_failed', detail: String(e?.message || e).slice(0, 160) })
  }
  if (!text.trim()) return send(res, 200, { ok: false, error: 'empty' })

  const deliverable = shape(task, text, modelUsed)

  // ---- real x402 settlement on Mainnet ------------------------------------
  let settlement: any = null
  if (net === 'mainnet' && task.priceXrp > 0 && settlementConfigured() && settlementNetwork() === 'mainnet') {
    try {
      const r = await settleX402({ skill: `work.${task.id}`, invoice: `WRK-${Date.now().toString(36)}`, amountXrp: task.priceXrp, note: task.title })
      settlement = { ok: r.result === 'tesSUCCESS' && r.validated, hash: r.hash, result: r.result, explorerUrl: r.explorerUrl, amountXrp: r.amountXrp }
    } catch (e: any) {
      settlement = { ok: false, error: String(e?.message || e).slice(0, 120) }
    }
  }

  return send(res, 200, {
    ok: true,
    deliverable,
    tools: mcpServers.map((m) => m.name),
    usage,
    settlement,
    priceXrp: task.priceXrp,
  })
}

// ---- Claude call ----------------------------------------------------------
async function callClaude(system: string, user: string, mcpServers: McpServer[]): Promise<{ text: string; model: string; usage: any }> {
  const betas: string[] = []
  if (mcpServers.length) betas.push(MCP_BETA)

  const bodyObj: any = {
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system,
    messages: [{ role: 'user', content: user }],
  }
  if (mcpServers.length) bodyObj.mcp_servers = mcpServers
  if (THINKING === 'adaptive') bodyObj.thinking = { type: 'adaptive' }

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': ENV.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
      ...(betas.length ? { 'anthropic-beta': betas.join(',') } : {}),
    },
    body: JSON.stringify(bodyObj),
  })
  const j = await res.json().catch(() => null)
  if (!res.ok) throw new Error(j?.error?.message || `anthropic_${res.status}`)
  const text = (j?.content || [])
    .filter((b: any) => b.type === 'text')
    .map((b: any) => b.text)
    .join('\n')
    .trim()
  return { text, model: j?.model || MODEL, usage: j?.usage || null }
}

// ---- MCP server resolution ------------------------------------------------
interface McpServer { type: 'url'; url: string; name: string; authorization_token?: string }

async function resolveMcpServers(connectorIds: string[], ref: { privy?: string; client?: string }): Promise<McpServer[]> {
  if (!connectorIds.length || !dbConfigured() || !vaultConfigured()) return []
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: ref.privy, clientRef: ref.client })
    if (!accountId) return []
    const r = await pool.query(
      `select connector_id, access_token, mcp_url from connections
       where account_id = $1 and status = 'connected' and connector_id = any($2)`,
      [accountId, connectorIds],
    )
    const servers: McpServer[] = []
    for (const row of r.rows) {
      if (!row.mcp_url || !connectorAvailable(row.connector_id)) continue
      const token = open(row.access_token)
      if (!token) continue
      servers.push({ type: 'url', url: row.mcp_url, name: row.connector_id, authorization_token: token })
    }
    return servers
  } catch {
    return []
  }
}

// ---- deliverable shaping --------------------------------------------------
function shape(task: ServerWorkTask, text: string, model: string) {
  if (task.format === 'design-system') {
    const tokens = extractJson(text)
    const markdown = stripFirstJsonBlock(text)
    return { taskId: task.id, title: task.title, format: 'design-system', tokens, markdown, model }
  }
  return { taskId: task.id, title: task.title, format: 'markdown', markdown: text, model }
}

function extractJson(text: string): any {
  const m = text.match(/```json\s*([\s\S]*?)```/i)
  if (!m) return null
  try {
    return JSON.parse(m[1].trim())
  } catch {
    return null
  }
}
function stripFirstJsonBlock(text: string): string {
  return text.replace(/```json\s*[\s\S]*?```/i, '').trim()
}

// ---- helpers --------------------------------------------------------------
function allow(ip: string): boolean {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_MAX) { hits.set(ip, arr); return false }
  arr.push(now); hits.set(ip, arr)
  if (hits.size > 5000) hits.clear()
  return true
}
function header(req: IncomingMessage, name: string): string | null {
  const v = req.headers[name]
  return Array.isArray(v) ? v[0] : v ?? null
}
function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as any).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => {
      d += c.toString('utf8')
      if (d.length > 8000) { reject(new Error('too_large')); req.destroy() }
    })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}
function int(v: string | undefined, d: number): number { const n = v ? parseInt(v, 10) : NaN; return Number.isFinite(n) ? n : d }
function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  if (ALLOWED_ORIGIN) {
    res.setHeader('access-control-allow-origin', ALLOWED_ORIGIN)
    res.setHeader('access-control-allow-methods', 'POST, OPTIONS')
    res.setHeader('access-control-allow-headers', 'content-type')
  }
  res.end(JSON.stringify(body))
}
