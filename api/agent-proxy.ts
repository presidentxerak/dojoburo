// DojoBuro external-agent proxy (Vercel Node serverless).
//
// Lets a DojoBuro agent link to an EXTERNAL AI agent (Notion, Slack, or any
// A2A / MCP host) and delegate tasks to it. The browser can't call arbitrary
// agent endpoints (CORS/CSP), so this server route does it · auth tokens stay
// server-side. Two actions:
//   * verify → reachability + identity (A2A agent card, or MCP initialize)
//   * call   → delegate one task and return the agent's reply text
//
// A2A follows the Agent2Agent JSON-RPC shape (agent card at
// /.well-known/agent-card.json, `message/send` for tasks). MCP agents are used
// as tools inside agent-run instead; here `verify` just confirms MCP init.
import type { IncomingMessage, ServerResponse } from 'node:http'
import { lookup } from 'node:dns/promises'
import { originAllowed } from './_lib/origin'

export const config = { maxDuration: 30 }

const ENV = process.env as Record<string, string | undefined>
const ALLOWED_ORIGIN = ENV.CHECKOUT_ALLOWED_ORIGIN || ENV.SUPPORT_ALLOWED_ORIGIN || ''
const TIMEOUT_MS = 20_000
// abuse control: cap requests per IP so the proxy can't be turned into a
// scanner / amplifier against third-party hosts
const RATE_MAX = int(ENV.PROXY_RATE_MAX, 30)
const RATE_WINDOW_MS = int(ENV.PROXY_RATE_WINDOW_MS, 10 * 60 * 1000)
const hits = new Map<string, number[]>()
// obvious automated scrapers / scanners · humans use the app, not these
const BOT_UA = /(bot|crawl|spider|scrapy|python-requests|httpclient|wget|libwww|curl\/|go-http|semrush|ahrefs|masscan|nmap|zgrab)/i

type Protocol = 'mcp' | 'a2a' | 'webhook'
interface Body { action?: 'verify' | 'call'; protocol?: Protocol; url?: string; authToken?: string; task?: string }

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  if (req.method === 'OPTIONS') return send(res, 204, {})
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'method' })

  // only our own site may drive this proxy (defends against CSRF / abuse)
  const origin = header(req, 'origin')
  const host = header(req, 'host') || ''
  if (origin) {
    if (!originAllowed(origin, host, ALLOWED_ORIGIN)) return send(res, 403, { ok: false, error: 'origin' })
  }
  const ua = header(req, 'user-agent') || ''
  if (!ua || BOT_UA.test(ua)) return send(res, 403, { ok: false, error: 'forbidden' })
  const ip = (header(req, 'x-forwarded-for') || '').split(',')[0].trim() || 'anon'
  if (!allow(ip)) return send(res, 429, { ok: false, error: 'rate' })

  let body: Body = {}
  try { body = JSON.parse(await readBody(req)) } catch { return send(res, 400, { ok: false, error: 'bad_json' }) }

  const url = (body.url || '').trim()
  const protocol = body.protocol
  if (!url || !/^https:\/\//i.test(url)) return send(res, 400, { ok: false, error: 'A valid https agent URL is required.' })
  if (protocol !== 'mcp' && protocol !== 'a2a' && protocol !== 'webhook') return send(res, 400, { ok: false, error: 'unknown_protocol' })

  // SSRF guard: the URL is user-supplied and we fetch it server-side, so it must
  // resolve to a public host · never localhost, a private range or cloud metadata
  const safe = await isSafePublicUrl(url)
  if (!safe.ok) return send(res, 400, { ok: false, error: safe.reason })

  const auth = (body.authToken || '').trim()
  try {
    if (body.action === 'verify') return send(res, 200, await verify(protocol, url, auth))
    if (body.action === 'call') return send(res, 200, await call(protocol, url, auth, (body.task || '').slice(0, 4000)))
    return send(res, 400, { ok: false, error: 'unknown_action' })
  } catch (e) {
    return send(res, 200, { ok: false, error: errMsg(e) })
  }
}

// ---- SSRF guard -------------------------------------------------------------
// Reject URLs that resolve to non-public addresses. Blocks localhost, RFC1918,
// link-local (incl. 169.254.169.254 cloud metadata), CGNAT, ULA and IPv6 loopback.
async function isSafePublicUrl(raw: string): Promise<{ ok: boolean; reason?: string }> {
  let u: URL
  try { u = new URL(raw) } catch { return { ok: false, reason: 'bad_url' } }
  if (u.protocol !== 'https:') return { ok: false, reason: 'https_required' }
  // only default / well-known web ports · block odd ports used to reach internal services
  if (u.port && u.port !== '443') return { ok: false, reason: 'port_not_allowed' }
  const hostname = u.hostname.replace(/^\[|\]$/g, '')
  if (/^(localhost|.*\.local|.*\.internal|metadata\.google\.internal)$/i.test(hostname)) return { ok: false, reason: 'private_host' }
  try {
    const addrs = await lookup(hostname, { all: true })
    if (!addrs.length) return { ok: false, reason: 'unresolvable' }
    for (const a of addrs) if (isPrivateIp(a.address)) return { ok: false, reason: 'private_address' }
    return { ok: true }
  } catch {
    return { ok: false, reason: 'unresolvable' }
  }
}

function isPrivateIp(ip: string): boolean {
  const s = ip.toLowerCase()
  if (s === '::1' || s === '::' ) return true
  if (s.startsWith('fc') || s.startsWith('fd') || s.startsWith('fe80') || s.startsWith('fec0')) return true // ULA + link-local IPv6
  const m = s.replace(/^::ffff:/, '').match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)
  if (!m) return false
  const [a, b] = [Number(m[1]), Number(m[2])]
  if (a === 10 || a === 127 || a === 0) return true
  if (a === 169 && b === 254) return true          // link-local + cloud metadata
  if (a === 172 && b >= 16 && b <= 31) return true // RFC1918
  if (a === 192 && b === 168) return true          // RFC1918
  if (a === 100 && b >= 64 && b <= 127) return true // CGNAT
  if (a === 192 && b === 0) return true            // 192.0.0.0/24 (IETF)
  if (a === 198 && (b === 18 || b === 19)) return true // benchmarking
  if (a >= 224) return true                        // multicast / reserved
  return false
}

// ---- verify -----------------------------------------------------------------
async function verify(protocol: Protocol, url: string, auth: string) {
  if (protocol === 'a2a') {
    const card = await fetchAgentCard(url, auth)
    if (!card) return { ok: false, error: 'No A2A agent card found at that URL.' }
    const capabilities = (Array.isArray(card.skills) ? card.skills : [])
      .map((s: any) => s?.name || s?.id).filter(Boolean).slice(0, 8)
    return { ok: true, name: card.name || 'External agent', capabilities }
  }
  if (protocol === 'mcp') {
    const init = await mcpInitialize(url, auth)
    if (!init) return { ok: false, error: 'MCP server did not respond to initialize.' }
    return { ok: true, name: init.name || 'MCP agent', capabilities: init.tools || [] }
  }
  // webhook: a simple reachable POST endpoint
  const r = await withTimeout(fetch(url, { method: 'OPTIONS', headers: authHeaders(auth) })).catch(() => null)
  return { ok: !!r && r.status < 500, name: 'Webhook agent', capabilities: [] }
}

// ---- call -------------------------------------------------------------------
async function call(protocol: Protocol, url: string, auth: string, task: string) {
  if (!task) return { ok: false, error: 'empty_task' }
  if (protocol === 'a2a') {
    const rpc = {
      jsonrpc: '2.0', id: Date.now(), method: 'message/send',
      params: { message: { role: 'user', parts: [{ kind: 'text', text: task }], messageId: 'm_' + Date.now() } },
    }
    const j = await postJson(url, rpc, auth)
    const text = extractA2AText(j)
    if (text == null) return { ok: false, error: j?.error?.message || 'The A2A agent returned no text.' }
    return { ok: true, text }
  }
  if (protocol === 'webhook') {
    const j = await postJson(url, { task }, auth)
    const text = typeof j === 'string' ? j : (j?.text || j?.output || j?.result || j?.message || null)
    if (text == null) return { ok: false, error: 'The webhook returned no text.' }
    return { ok: true, text: String(text) }
  }
  // mcp agents are used as tools during a run, not delegated to here
  return { ok: false, error: 'MCP agents run as tools during a task · attach the URL and run a task instead of delegating.' }
}

// ---- protocol helpers -------------------------------------------------------
async function fetchAgentCard(url: string, auth: string): Promise<any | null> {
  const candidates = /\.json$/i.test(url) ? [url] : [url.replace(/\/+$/, '') + '/.well-known/agent-card.json', url]
  for (const u of candidates) {
    const r = await withTimeout(fetch(u, { headers: { accept: 'application/json', ...authHeaders(auth) } })).catch(() => null)
    if (r && r.ok) { const j = await r.json().catch(() => null); if (j && (j.name || j.skills || j.url)) return j }
  }
  return null
}

async function mcpInitialize(url: string, auth: string): Promise<{ name?: string; tools?: string[] } | null> {
  const rpc = { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-06-18', capabilities: {}, clientInfo: { name: 'DojoBuro', version: '1' } } }
  const j = await postJson(url, rpc, auth).catch(() => null)
  if (!j || j.error) return null
  const name = j?.result?.serverInfo?.name
  // best-effort tools list
  const tl = await postJson(url, { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} }, auth).catch(() => null)
  const tools = (tl?.result?.tools || []).map((t: any) => t?.name).filter(Boolean).slice(0, 8)
  return { name, tools }
}

function extractA2AText(j: any): string | null {
  const r = j?.result
  if (!r) return null
  // task/message result shapes: parts[].text, or artifacts[].parts[].text, or status.message
  const fromParts = (parts: any[]) => (parts || []).map((p) => p?.text).filter(Boolean).join('\n')
  if (Array.isArray(r.parts)) { const t = fromParts(r.parts); if (t) return t }
  if (r.message?.parts) { const t = fromParts(r.message.parts); if (t) return t }
  if (Array.isArray(r.artifacts)) { const t = r.artifacts.map((a: any) => fromParts(a?.parts)).filter(Boolean).join('\n'); if (t) return t }
  if (r.status?.message?.parts) { const t = fromParts(r.status.message.parts); if (t) return t }
  if (typeof r === 'string') return r
  return null
}

async function postJson(url: string, payload: unknown, auth: string): Promise<any> {
  const r = await withTimeout(fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', ...authHeaders(auth) }, body: JSON.stringify(payload) }))
  return r.json().catch(() => null)
}
function authHeaders(auth: string): Record<string, string> {
  return auth ? { authorization: auth.startsWith('Bearer ') ? auth : `Bearer ${auth}` } : {}
}
function withTimeout(p: Promise<Response>): Promise<Response> {
  const ctl = new AbortController()
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS)
  // note: fetch options can't be added post-hoc; timeout is best-effort via race
  return Promise.race([p, new Promise<Response>((_, rej) => setTimeout(() => rej(new Error('timeout')), TIMEOUT_MS))]).finally(() => clearTimeout(t))
}

function readBody(req: IncomingMessage): Promise<string> {
  const attached = (req as any).rawBody
  if (typeof attached === 'string') return Promise.resolve(attached)
  return new Promise((resolve, reject) => {
    let d = ''
    req.on('data', (c: Buffer) => { d += c.toString('utf8'); if (d.length > 16000) { reject(new Error('too_large')); req.destroy() } })
    req.on('end', () => resolve(d))
    req.on('error', reject)
  })
}
function errMsg(e: unknown): string { return e instanceof Error ? e.message : String(e) }
function header(req: IncomingMessage, name: string): string | null {
  const v = req.headers[name]
  return Array.isArray(v) ? v[0] : v ?? null
}
function int(v: string | undefined, d: number): number { const n = v ? parseInt(v, 10) : NaN; return Number.isFinite(n) ? n : d }
function allow(ip: string): boolean {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS)
  if (arr.length >= RATE_MAX) { hits.set(ip, arr); return false }
  arr.push(now); hits.set(ip, arr)
  if (hits.size > 5000) hits.clear()
  return true
}
function send(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status
  res.setHeader('content-type', 'application/json')
  res.setHeader('cache-control', 'no-store')
  res.setHeader('x-robots-tag', 'noindex, nofollow')
  if (ALLOWED_ORIGIN) {
    res.setHeader('access-control-allow-origin', ALLOWED_ORIGIN)
    res.setHeader('access-control-allow-methods', 'POST, OPTIONS')
    res.setHeader('access-control-allow-headers', 'content-type')
  }
  res.end(JSON.stringify(body))
}
