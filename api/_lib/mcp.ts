// A tiny MCP client, server-side.
//
// Anthropic's Messages API can be handed a list of remote MCP servers and it
// will do all of this itself. No other provider will: Gemini, Groq, Cerebras and
// OpenRouter speak plain function calling and know nothing about MCP. That one
// gap is why every run that touched a connected app used to require a Claude key
// — the free providers could write about the work but could not do it.
//
// So we speak MCP ourselves. This module lists the tools a connected app
// publishes, converts them into ordinary JSON-Schema function declarations any
// provider understands, and calls them back when the model asks. The model no
// longer has to know what MCP is.
//
// Transport: Streamable HTTP (the current spec). A server may answer a POST with
// either application/json or a text/event-stream containing the same JSON-RPC
// message, so both are parsed. Everything is best-effort and time-boxed: an app
// that is slow or broken drops out of the run instead of failing it.
const ENV = process.env as Record<string, string | undefined>

const PROTOCOL = ENV.MCP_PROTOCOL_VERSION || '2025-06-18'
const TIMEOUT_MS = int(ENV.MCP_TIMEOUT_MS, 20000)
/** Tool definitions travel with EVERY model request, so a chatty app would blow
 *  the context (and the bill) on schemas alone. Cap what each one contributes. */
const MAX_TOOLS_PER_SERVER = int(ENV.MCP_MAX_TOOLS_PER_SERVER, 12)
/** How much of a tool result we feed back to the model. A Notion page dump can
 *  be tens of thousands of tokens; the model needs the gist, not the archive. */
const MAX_RESULT_CHARS = int(ENV.MCP_MAX_RESULT_CHARS, 6000)

export interface McpServer {
  type: 'url'
  url: string
  name: string
  authorization_token?: string
}

/** One callable tool, already namespaced by the app it came from. */
export interface McpTool {
  /** `notion__create_page` · unique across every attached app */
  name: string
  server: string
  /** the tool's own name, as the app knows it */
  tool: string
  description: string
  parameters: Record<string, any>
}

interface Session {
  server: McpServer
  sessionId?: string
}

const sessions = new Map<string, Session>()

/**
 * Every tool the attached apps publish, ready to hand to a model.
 *
 * One unreachable app must not take the run down with it, so each server is
 * tried independently and a failure simply contributes no tools.
 */
export async function listTools(servers: McpServer[]): Promise<McpTool[]> {
  const out: McpTool[] = []
  const lists = await Promise.all(servers.map((s) => listOne(s).catch(() => [])))
  for (const l of lists) out.push(...l)
  return out
}

async function listOne(server: McpServer): Promise<McpTool[]> {
  const session = await handshake(server)
  const res = await rpc(server, session, 'tools/list', {})
  const tools: any[] = Array.isArray(res?.tools) ? res.tools : []
  return tools.slice(0, MAX_TOOLS_PER_SERVER).map((t) => ({
    name: fnName(server.name, String(t?.name || '')),
    server: server.name,
    tool: String(t?.name || ''),
    description: String(t?.description || '').slice(0, 400),
    parameters: schema(t?.inputSchema),
  })).filter((t) => t.tool)
}

/**
 * Run a tool the model asked for and return what the app said, as text.
 *
 * The return value is fed straight back into the conversation, so an error is a
 * message rather than a throw: the model can then apologise, try another tool,
 * or explain to the founder what failed — which is far more useful than a run
 * that dies with a stack trace.
 */
export async function callTool(servers: McpServer[], tools: McpTool[], name: string, args: unknown): Promise<string> {
  const t = tools.find((x) => x.name === name)
  if (!t) return `error: no tool named ${name}`
  const server = servers.find((s) => s.name === t.server)
  if (!server) return `error: ${t.server} is not connected`
  try {
    const session = await handshake(server)
    const res = await rpc(server, session, 'tools/call', { name: t.tool, arguments: args && typeof args === 'object' ? args : {} })
    const text = contentText(res?.content)
    if (res?.isError) return `error from ${t.server}: ${text || 'the app refused the call'}`
    return text || 'done (the app returned no content)'
  } catch (e: any) {
    return `error calling ${t.server}: ${String(e?.message || e).slice(0, 200)}`
  }
}

/** Reset the cached handshakes · one run should not inherit another's session. */
export function resetSessions(): void {
  sessions.clear()
}

// ---- protocol ---------------------------------------------------------------

async function handshake(server: McpServer): Promise<Session> {
  const key = `${server.name}|${server.url}`
  const cached = sessions.get(key)
  if (cached) return cached
  const session: Session = { server }
  const { json, sessionId } = await post(server, session, {
    jsonrpc: '2.0',
    id: nextId(),
    method: 'initialize',
    params: {
      protocolVersion: PROTOCOL,
      capabilities: {},
      clientInfo: { name: 'dojoburo', version: '1' },
    },
  })
  if (json?.error) throw new Error(String(json.error?.message || 'initialize failed'))
  if (sessionId) session.sessionId = sessionId
  sessions.set(key, session)
  // A notification carries no id and expects no reply · failing to deliver it is
  // not worth losing the session over.
  await post(server, session, { jsonrpc: '2.0', method: 'notifications/initialized' }).catch(() => undefined)
  return session
}

async function rpc(server: McpServer, session: Session, method: string, params: unknown): Promise<any> {
  const { json } = await post(server, session, { jsonrpc: '2.0', id: nextId(), method, params })
  if (json?.error) throw new Error(String(json.error?.message || method + ' failed'))
  return json?.result
}

async function post(server: McpServer, session: Session, body: unknown): Promise<{ json: any; sessionId?: string }> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(server.url, {
      method: 'POST',
      signal: ctrl.signal,
      headers: {
        'content-type': 'application/json',
        accept: 'application/json, text/event-stream',
        'mcp-protocol-version': PROTOCOL,
        ...(session.sessionId ? { 'mcp-session-id': session.sessionId } : {}),
        ...(server.authorization_token ? { authorization: `Bearer ${server.authorization_token}` } : {}),
      },
      body: JSON.stringify(body),
    })
    const sessionId = res.headers.get('mcp-session-id') || undefined
    // A notification is answered with 202 and an empty body.
    if (res.status === 202) return { json: null, sessionId }
    const raw = await res.text()
    if (!res.ok) throw new Error(`http_${res.status}`)
    return { json: parse(raw, res.headers.get('content-type') || ''), sessionId }
  } finally {
    clearTimeout(timer)
  }
}

/** JSON, or the JSON-RPC message carried inside an SSE stream. */
function parse(raw: string, contentType: string): any {
  if (!raw.trim()) return null
  if (!/text\/event-stream/i.test(contentType)) {
    try { return JSON.parse(raw) } catch { return null }
  }
  // Take the LAST data: payload that parses and carries a result or an error —
  // servers legitimately stream progress notifications before the answer.
  let found: any = null
  for (const line of raw.split(/\r?\n/)) {
    if (!line.startsWith('data:')) continue
    const payload = line.slice(5).trim()
    if (!payload || payload === '[DONE]') continue
    try {
      const j = JSON.parse(payload)
      if (j && (j.result !== undefined || j.error !== undefined)) found = j
    } catch { /* a partial frame · keep reading */ }
  }
  return found
}

// ---- shaping ----------------------------------------------------------------

/** `notion__create_page` · providers only accept [A-Za-z0-9_-]{1,64} here. */
function fnName(server: string, tool: string): string {
  const clean = (s: string) => s.replace(/[^a-zA-Z0-9_-]/g, '_')
  return `${clean(server)}__${clean(tool)}`.slice(0, 64)
}

/**
 * A JSON Schema every provider will accept.
 *
 * Gemini in particular rejects the drafts MCP servers like to emit ($schema,
 * additionalProperties, oneOf …) with a 400 that kills the whole request, so the
 * schema is reduced to the subset all of them agree on rather than trusted.
 */
function schema(input: any): Record<string, any> {
  const src = input && typeof input === 'object' ? input : {}
  const props = src.properties && typeof src.properties === 'object' ? src.properties : {}
  const out: Record<string, any> = { type: 'object', properties: {} }
  for (const [key, value] of Object.entries(props).slice(0, 24)) {
    out.properties[key] = prop(value)
  }
  const required = Array.isArray(src.required) ? src.required.filter((r: any) => typeof r === 'string' && out.properties[r]) : []
  if (required.length) out.required = required
  return out
}

function prop(value: any): Record<string, any> {
  const v = value && typeof value === 'object' ? value : {}
  const type = typeof v.type === 'string' ? v.type : Array.isArray(v.type) ? v.type.find((t: any) => t !== 'null') || 'string' : 'string'
  const out: Record<string, any> = { type: ['string', 'number', 'integer', 'boolean', 'array', 'object'].includes(type) ? type : 'string' }
  if (typeof v.description === 'string') out.description = v.description.slice(0, 200)
  if (Array.isArray(v.enum) && v.enum.length) out.enum = v.enum.slice(0, 24).map((e: any) => String(e))
  if (out.type === 'array') out.items = v.items ? prop(v.items) : { type: 'string' }
  if (out.type === 'object') out.properties = {}
  return out
}

/** The text an MCP tool result carries, flattened and capped. */
function contentText(content: any): string {
  if (typeof content === 'string') return content.slice(0, MAX_RESULT_CHARS)
  if (!Array.isArray(content)) return ''
  const parts: string[] = []
  for (const block of content) {
    if (block?.type === 'text' && typeof block.text === 'string') parts.push(block.text)
    else if (block?.type === 'resource' && typeof block.resource?.text === 'string') parts.push(block.resource.text)
    else if (block?.type === 'image') parts.push('[image]')
  }
  const joined = parts.join('\n').trim()
  return joined.length > MAX_RESULT_CHARS ? `${joined.slice(0, MAX_RESULT_CHARS)}\n…[truncated]` : joined
}

let id = 0
function nextId(): number { return ++id }
function int(v: string | undefined, d: number): number { const n = v ? parseInt(v, 10) : NaN; return Number.isFinite(n) ? n : d }
