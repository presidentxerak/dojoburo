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
import { open, seal, vaultConfigured } from './_lib/vault'
import { connectorAvailable, serverConnector, refreshOAuthToken } from './_lib/connectors'
import { settlementConfigured, settlementNetwork, settleX402 } from './_lib/settle'
import { cascadeComplete, freeCascadeConfigured } from './_lib/llm'

export const config = { maxDuration: 60 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const MODEL = ENV.ANTHROPIC_WORK_MODEL || 'claude-sonnet-5'          // default text/tool model
const DESIGN_MODEL = ENV.ANTHROPIC_WORK_MODEL_DESIGN || 'claude-opus-4-8' // Claude Design flagship
const MAX_TOKENS = int(ENV.ANTHROPIC_WORK_MAX_TOKENS, 6000)
const MCP_BETA = ENV.ANTHROPIC_MCP_BETA || 'mcp-client-2025-04-04'
const THINKING = ENV.ANTHROPIC_WORK_THINKING || '' // 'adaptive' to enable extended thinking
// Billing policy: by default the operator's Claude key is NOT spent on user runs
// (BYOK model — the user brings their own key). Set WORK_OPERATOR_CLAUDE=true to
// offer Claude on the operator's dime (e.g. a hackathon demo).
const OPERATOR_CLAUDE = ENV.WORK_OPERATOR_CLAUDE === 'true'
const FREE_DAILY = int(ENV.WORK_FREE_DAILY, 10) // free-cascade runs / account / day on operator keys
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
  const ref = { privy: body?.privy as string | undefined, client: body?.client as string | undefined }
  const requested: string[] = Array.isArray(body?.connectors) ? body.connectors.map((s: any) => String(s)).slice(0, 8) : []

  // ---- resolve connected tools → MCP servers (best-effort) ----------------
  const mcpServers = await resolveMcpServers(task.usesConnectors.filter((c) => requested.includes(c)), ref)
  // ---- external MCP agents the user attached to THIS agent ----------------
  // These are user-supplied remote MCP hosts (their own Notion/Slack agents, or
  // any MCP server). The URL + token live client-side; we validate + attach them
  // here so Claude can call their tools during the run, exactly like a connector.
  for (const s of externalMcpServers(body?.extMcp)) mcpServers.push(s)

  // ---- billing policy: who pays for this run? -----------------------------
  // BYOK (the user's own Claude key) → billed to the user, operator pays $0.
  // Otherwise: text tasks run on the operator's FREE providers (capped per user);
  // the design system and any tool-acting run need Claude, so they require a BYOK
  // key (or the operator opting in via WORK_OPERATOR_CLAUDE).
  const byokKey = await resolveByokKey(ref)
  const wantsClaude = task.format === 'design-system' || mcpServers.length > 0
  const system = task.system
  const prompt = task.user({ agentName, brief, startup })

  let text = ''
  let modelUsed = ''
  let usage: any = null
  let engine: 'byok' | 'operator' | 'free' = 'free'

  try {
    if (wantsClaude) {
      const key = byokKey || (OPERATOR_CLAUDE ? ENV.ANTHROPIC_API_KEY : undefined)
      if (!key) return send(res, 200, { ok: false, error: 'needs_key', reason: mcpServers.length ? 'tool' : 'design' })
      const model = task.format === 'design-system' ? DESIGN_MODEL : MODEL
      const out = await callClaude(key, model, system, prompt, mcpServers)
      text = out.text; modelUsed = out.model; usage = out.usage
      engine = byokKey ? 'byok' : 'operator'
    } else if (byokKey) {
      const out = await callClaude(byokKey, MODEL, system, prompt, [])
      text = out.text; modelUsed = out.model; usage = out.usage
      engine = 'byok'
    } else {
      // free cascade on the operator's free tiers, metered per account
      const gate = await checkFreeTier(ref)
      if (!gate.allowed) return send(res, 200, { ok: false, error: 'quota', remaining: 0 })
      if (freeCascadeConfigured()) {
        const out = await cascadeComplete(system, prompt, MAX_TOKENS)
        if (out) { text = out.text; modelUsed = out.model; engine = 'free'; await bumpFreeTier(ref) }
      }
      if (!text && OPERATOR_CLAUDE && ENV.ANTHROPIC_API_KEY) {
        const out = await callClaude(ENV.ANTHROPIC_API_KEY, MODEL, system, prompt, [])
        text = out.text; modelUsed = out.model; usage = out.usage; engine = 'operator'
      }
      if (!text) return send(res, 200, { ok: false, error: 'not_configured' })
    }
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
    engine,
    usage,
    settlement,
    priceXrp: task.priceXrp,
  })
}

// ---- Claude call ----------------------------------------------------------
async function callClaude(apiKey: string, model: string, system: string, user: string, mcpServers: McpServer[]): Promise<{ text: string; model: string; usage: any }> {
  const betas: string[] = []
  if (mcpServers.length) betas.push(MCP_BETA)

  const bodyObj: any = {
    model,
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
      'x-api-key': apiKey,
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
  return { text, model: j?.model || model, usage: j?.usage || null }
}

// ---- BYOK + free-tier metering -------------------------------------------
async function resolveByokKey(ref: { privy?: string; client?: string }): Promise<string | undefined> {
  if (!dbConfigured() || !vaultConfigured()) return undefined
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: ref.privy, clientRef: ref.client })
    if (!accountId) return undefined
    const r = await pool.query(`select access_token from connections where account_id = $1 and connector_id = 'anthropic' and status = 'connected'`, [accountId])
    if (!r.rows[0]) return undefined
    return open(r.rows[0].access_token) || undefined
  } catch {
    return undefined
  }
}

async function checkFreeTier(ref: { privy?: string; client?: string }): Promise<{ allowed: boolean }> {
  if (!dbConfigured()) return { allowed: true } // no DB → rely on the in-memory IP rate limit
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: ref.privy, clientRef: ref.client })
    if (!accountId) return { allowed: true }
    const r = await pool.query(`select free_runs from work_usage where account_id = $1 and day = current_date`, [accountId])
    const used = r.rows[0]?.free_runs ?? 0
    return { allowed: used < FREE_DAILY }
  } catch {
    return { allowed: true }
  }
}

async function bumpFreeTier(ref: { privy?: string; client?: string }): Promise<void> {
  if (!dbConfigured()) return
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: ref.privy, clientRef: ref.client })
    if (!accountId) return
    await pool.query(
      `insert into work_usage (account_id, day, free_runs) values ($1, current_date, 1)
       on conflict (account_id, day) do update set free_runs = work_usage.free_runs + 1`,
      [accountId],
    )
  } catch {
    /* metering is best-effort */
  }
}

// ---- MCP server resolution ------------------------------------------------
interface McpServer { type: 'url'; url: string; name: string; authorization_token?: string }

// External MCP agents supplied by the client (attached per DojoBuro agent). Each
// is { url, name, authToken? }. We only accept https URLs, cap at 4, and sanitize
// the name so Claude's mcp_servers list stays well-formed.
function externalMcpServers(raw: unknown): McpServer[] {
  if (!Array.isArray(raw)) return []
  const out: McpServer[] = []
  for (const item of raw.slice(0, 4)) {
    const url = String(item?.url || '').trim()
    if (!/^https:\/\//i.test(url)) continue
    const name = String(item?.name || 'external').replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 40) || 'external'
    const token = item?.authToken ? String(item.authToken).trim() : ''
    out.push({ type: 'url', url, name, ...(token ? { authorization_token: token } : {}) })
  }
  return out
}

async function resolveMcpServers(connectorIds: string[], ref: { privy?: string; client?: string }): Promise<McpServer[]> {
  if (!connectorIds.length || !dbConfigured() || !vaultConfigured()) return []
  try {
    const pool = getPool()
    const accountId = await findAccountId(pool, { privyDid: ref.privy, clientRef: ref.client })
    if (!accountId) return []
    const r = await pool.query(
      `select connector_id, access_token, refresh_token, expires_at, mcp_url from connections
       where account_id = $1 and status = 'connected' and connector_id = any($2)`,
      [accountId, connectorIds],
    )
    const servers: McpServer[] = []
    for (const row of r.rows) {
      if (!row.mcp_url || !connectorAvailable(row.connector_id)) continue
      let token = open(row.access_token)
      if (!token) continue
      // Refresh an access token that is expired (or within a 60s skew) when we
      // hold a refresh token — Google/Gmail/Drive tokens live ~1h. Reseal and
      // persist the new token so later runs reuse it; on failure keep the old
      // one (it may still be valid).
      const expMs = row.expires_at ? Date.parse(row.expires_at) : NaN
      const stale = Number.isFinite(expMs) && expMs - Date.now() < 60_000
      if (stale && row.refresh_token) {
        const c = serverConnector(row.connector_id)
        const rt = open(row.refresh_token)
        if (c && rt) {
          const fresh = await refreshOAuthToken(c, rt)
          if (fresh?.accessToken) {
            token = fresh.accessToken
            const newExpiry = fresh.expiresIn ? new Date(Date.now() + fresh.expiresIn * 1000).toISOString() : null
            try {
              await pool.query(
                `update connections set access_token = $3,
                   refresh_token = coalesce($4, refresh_token),
                   expires_at = $5, updated_at = now()
                 where account_id = $1 and connector_id = $2`,
                [accountId, row.connector_id, seal(token), fresh.refreshToken ? seal(fresh.refreshToken) : null, newExpiry],
              )
            } catch {
              /* the token still works this run even if persistence fails */
            }
          }
        }
      }
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
