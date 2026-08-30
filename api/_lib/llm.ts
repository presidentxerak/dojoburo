// Free-first LLM cascade for real work (server-side only). Mirrors the support
// cascade (api/chat.ts) but returns a full-length completion instead of a short
// chat reply. Used by api/agent-run.ts when the user has NOT supplied their own
// Claude key: runs go to the operator's FREE provider tiers (Gemini / Groq /
// Cerebras / OpenRouter), so the operator's token cost is ~$0.
//
// These providers know nothing about Anthropic's remote MCP connector, so a run
// that acts inside a connected app used to require Claude. It no longer does:
// api/_lib/mcp.ts speaks MCP on their behalf and hands them plain function
// declarations, and cascadeToolRun() below runs the call loop.
//
// Model IDs rot fast. Three of the four defaults this file shipped with were
// decommissioned inside a single quarter (gemini-2.0-flash shut down June 2026;
// Groq stopped serving llama-3.3-70b-versatile that August), which turned the
// "free" path into a silent 404 on every run. So each provider now carries a
// LIST of candidates: a model that no longer exists costs one failed request and
// the next candidate answers. Set the *_MODEL env var to pin one explicitly.
import { listTools, callTool, resetSessions, type McpServer, type McpTool } from './mcp.js'

const ENV = process.env as Record<string, string | undefined>

type Provider = {
  kind: 'openai' | 'gemini'
  base?: string
  /** Lets a deployment point a provider at a proxy or a mock · also how the
   *  bridge is tested without touching a real vendor. */
  baseEnv?: string
  keyEnv: string
  modelEnv: string
  models: string[]
  /** Ask the provider itself which models are live (OpenRouter rotates its free
   *  line-up constantly), used only when every static candidate has failed. */
  discover?: (key: string) => Promise<string[]>
}

const PROVIDERS: Record<string, Provider> = {
  gemini: {
    kind: 'gemini',
    base: 'https://generativelanguage.googleapis.com',
    baseEnv: 'GEMINI_BASE',
    keyEnv: 'GEMINI_API_KEY',
    modelEnv: 'GEMINI_MODEL',
    models: ['gemini-3.6-flash', 'gemini-3-flash', 'gemini-2.5-flash', 'gemini-2.5-flash-lite'],
  },
  groq: {
    kind: 'openai',
    base: 'https://api.groq.com/openai/v1',
    baseEnv: 'GROQ_BASE',
    keyEnv: 'GROQ_API_KEY',
    modelEnv: 'GROQ_MODEL',
    models: ['openai/gpt-oss-120b', 'qwen/qwen3.6-27b', 'openai/gpt-oss-20b'],
  },
  cerebras: {
    kind: 'openai',
    base: 'https://api.cerebras.ai/v1',
    baseEnv: 'CEREBRAS_BASE',
    keyEnv: 'CEREBRAS_API_KEY',
    modelEnv: 'CEREBRAS_MODEL',
    models: ['gpt-oss-120b', 'qwen-3-32b'],
  },
  openrouter: {
    kind: 'openai',
    base: 'https://openrouter.ai/api/v1',
    baseEnv: 'OPENROUTER_BASE',
    keyEnv: 'OPENROUTER_API_KEY',
    modelEnv: 'OPENROUTER_MODEL',
    models: ['deepseek/deepseek-chat-v3.1:free', 'meta-llama/llama-3.3-70b-instruct:free'],
    discover: discoverOpenRouterFree,
  },
}
const DEFAULT_ORDER = ['gemini', 'groq', 'cerebras', 'openrouter']
const TIMEOUT_MS = int(ENV.WORK_CASCADE_TIMEOUT_MS, 45000)
/** How many times the model may call a tool before we ask it to conclude. Each
 *  round is another billed request, so this is a cost ceiling as much as a
 *  safety one. */
const MAX_ROUNDS = int(ENV.WORK_TOOL_ROUNDS, 6)

export interface ToolDef { name: string; description: string; parameters: Record<string, any> }
export interface CascadeResult { text: string; model: string; calls: string[] }

export function freeCascadeConfigured(): boolean {
  return order().length > 0
}

/** Which providers are actually keyed, in the order they will be tried. */
export function cascadeOrder(): string[] {
  return order()
}

function order(): string[] {
  return (ENV.WORK_CASCADE || DEFAULT_ORDER.join(','))
    .split(',').map((s) => s.trim())
    .filter((n) => PROVIDERS[n] && ENV[PROVIDERS[n].keyEnv])
}

/** The endpoint a provider is called on · env override, else the vendor's own. */
function baseOf(p: Provider): string {
  return (p.baseEnv && ENV[p.baseEnv]) || p.base || ''
}

/** The candidates for one provider: an explicit pin, else the built-in list. */
function candidates(p: Provider): string[] {
  const pinned = ENV[p.modelEnv]
  if (pinned) return pinned.split(',').map((s) => s.trim()).filter(Boolean)
  return p.models
}

/** A plain text deliverable. Returns null when every provider refused. */
export async function cascadeComplete(system: string, user: string, maxTokens: number): Promise<{ text: string; model: string } | null> {
  const out = await run({ system, user, maxTokens, tools: [], exec: async () => '' })
  return out ? { text: out.text, model: out.model } : null
}

/**
 * A deliverable produced with the connected apps in hand.
 *
 * The apps are real MCP servers; this lists their tools, runs the model's call
 * loop against them and returns the finished text plus what was actually
 * touched. Returns null when no provider could complete the work — the caller
 * then decides whether to fall back to Claude or report honestly.
 */
export async function cascadeToolRun(
  system: string,
  user: string,
  maxTokens: number,
  servers: McpServer[],
  maxRounds = MAX_ROUNDS,
): Promise<CascadeResult | null> {
  resetSessions()
  const tools = await listTools(servers)
  if (!tools.length) {
    // Every attached app failed to answer. The work can still be written; it
    // just cannot be filed anywhere, and the caller reports zero tools used.
    return await cascadeComplete(system, user, maxTokens).then((r) => (r ? { ...r, calls: [] } : null))
  }
  const defs: ToolDef[] = tools.map((t) => ({ name: t.name, description: t.description, parameters: t.parameters }))
  return await run({
    system,
    user,
    maxTokens,
    tools: defs,
    exec: (name, args) => callTool(servers, tools as McpTool[], name, args),
    maxRounds,
  })
}

// ---- the cascade ------------------------------------------------------------

interface RunOpts {
  system: string
  user: string
  maxTokens: number
  tools: ToolDef[]
  exec: (name: string, args: any) => Promise<string>
  maxRounds?: number
}

async function run(opts: RunOpts): Promise<CascadeResult | null> {
  for (const name of order()) {
    const p = PROVIDERS[name]
    const key = ENV[p.keyEnv] as string
    let list = candidates(p)
    for (let attempt = 0; attempt < 2; attempt++) {
      for (const model of list) {
        try {
          const out = p.kind === 'openai' ? await openaiRun(p, key, model, opts) : await geminiRun(p, key, model, opts)
          if (out.text.trim()) return { text: out.text.trim(), model: `${name}:${model}`, calls: out.calls }
        } catch {
          /* dead model, rate limit, no tool support · try the next candidate */
        }
      }
      // Everything static failed · ask the provider what it is serving today.
      if (attempt === 0 && p.discover) {
        list = (await p.discover(key).catch(() => [])).filter((m) => !list.includes(m))
        if (!list.length) break
      } else break
    }
  }
  return null
}

// ---- OpenAI-compatible (Groq, Cerebras, OpenRouter) -------------------------

async function openaiRun(p: Provider, key: string, model: string, opts: RunOpts): Promise<{ text: string; calls: string[] }> {
  const messages: any[] = [
    { role: 'system', content: opts.system },
    { role: 'user', content: opts.user },
  ]
  const tools = opts.tools.length
    ? opts.tools.map((t) => ({ type: 'function', function: { name: t.name, description: t.description, parameters: t.parameters } }))
    : undefined
  const calls: string[] = []
  const rounds = opts.tools.length ? Math.max(1, opts.maxRounds ?? MAX_ROUNDS) : 1

  for (let i = 0; i <= rounds; i++) {
    const last = i === rounds
    const body: any = { model, max_tokens: opts.maxTokens, temperature: 0.4, messages }
    // On the final round the tools are withheld, which is what forces an answer
    // instead of a seventh tool call the budget cannot pay for.
    if (tools && !last) { body.tools = tools; body.tool_choice = 'auto' }
    const j = await post(`${baseOf(p)}/chat/completions`, { authorization: `Bearer ${key}` }, body)
    const msg = j?.choices?.[0]?.message
    const wanted: any[] = Array.isArray(msg?.tool_calls) ? msg.tool_calls : []
    if (!wanted.length || last) return { text: String(msg?.content ?? ''), calls }

    messages.push({ role: 'assistant', content: msg.content ?? '', tool_calls: wanted })
    for (const c of wanted.slice(0, 8)) {
      const name = String(c?.function?.name || '')
      const result = await opts.exec(name, parseArgs(c?.function?.arguments))
      calls.push(name)
      messages.push({ role: 'tool', tool_call_id: String(c?.id || name), content: result })
    }
  }
  return { text: '', calls }
}

// ---- Gemini ------------------------------------------------------------------

async function geminiRun(p: Provider, key: string, model: string, opts: RunOpts): Promise<{ text: string; calls: string[] }> {
  const contents: any[] = [{ role: 'user', parts: [{ text: opts.user }] }]
  const declarations = opts.tools.map((t) => ({ name: t.name, description: t.description, parameters: t.parameters }))
  const calls: string[] = []
  const rounds = opts.tools.length ? Math.max(1, opts.maxRounds ?? MAX_ROUNDS) : 1

  for (let i = 0; i <= rounds; i++) {
    const last = i === rounds
    const body: any = {
      system_instruction: { parts: [{ text: opts.system }] },
      contents,
      generationConfig: { maxOutputTokens: opts.maxTokens, temperature: 0.4 },
    }
    if (declarations.length && !last) body.tools = [{ functionDeclarations: declarations }]
    const url = `${baseOf(p)}/v1beta/models/${model}:generateContent?key=${key}`
    const j = await post(url, {}, body)
    const parts: any[] = j?.candidates?.[0]?.content?.parts ?? []
    const wanted = parts.filter((x) => x?.functionCall).slice(0, 8)
    if (!wanted.length || last) {
      return { text: parts.map((x: any) => x?.text).filter(Boolean).join(''), calls }
    }
    contents.push({ role: 'model', parts })
    const responses: any[] = []
    for (const w of wanted) {
      const name = String(w.functionCall?.name || '')
      const result = await opts.exec(name, w.functionCall?.args ?? {})
      calls.push(name)
      responses.push({ functionResponse: { name, response: { result } } })
    }
    contents.push({ role: 'user', parts: responses })
  }
  return { text: '', calls }
}

// ---- plumbing ----------------------------------------------------------------

async function post(url: string, headers: Record<string, string>, body: unknown): Promise<any> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'content-type': 'application/json', ...headers },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(String(res.status))
    return await res.json()
  } finally {
    clearTimeout(timer)
  }
}

/** Free models on OpenRouter rotate without notice, so when the pinned ones are
 *  gone we ask for whatever is free TODAY and can still call tools. */
async function discoverOpenRouterFree(key: string): Promise<string[]> {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 10000)
  try {
    const res = await fetch('https://openrouter.ai/api/v1/models', {
      signal: ctrl.signal,
      headers: { authorization: `Bearer ${key}` },
    })
    if (!res.ok) return []
    const j = await res.json()
    const rows: any[] = Array.isArray(j?.data) ? j.data : []
    return rows
      .filter((m) => String(m?.id || '').endsWith(':free'))
      .filter((m) => !Array.isArray(m?.supported_parameters) || m.supported_parameters.includes('tools'))
      .map((m) => String(m.id))
      .slice(0, 4)
  } catch {
    return []
  } finally {
    clearTimeout(timer)
  }
}

function parseArgs(raw: unknown): any {
  if (raw && typeof raw === 'object') return raw
  if (typeof raw !== 'string' || !raw.trim()) return {}
  try { return JSON.parse(raw) } catch { return {} }
}

function int(v: string | undefined, d: number): number {
  const n = v ? parseInt(v, 10) : NaN
  return Number.isFinite(n) ? n : d
}
