// Free-first LLM cascade for text deliverables (server-side only). Mirrors the
// support cascade (api/chat.ts) but returns a full-length completion instead of
// a short chat reply. Used by api/agent-run.ts when the user has NOT supplied
// their own Claude key: text tasks run on the operator's FREE provider tiers
// (Gemini / Groq / Cerebras / OpenRouter), so the operator's token cost is ~$0.
//
// Note: these providers do NOT support Anthropic's remote MCP connector, so
// tool-acting and the flagship design system still route to Claude (BYOK).
const ENV = process.env as Record<string, string | undefined>

type Provider = { kind: 'openai' | 'gemini'; base?: string; keyEnv: string; modelEnv: string; modelDefault: string }

const PROVIDERS: Record<string, Provider> = {
  groq: { kind: 'openai', base: 'https://api.groq.com/openai/v1', keyEnv: 'GROQ_API_KEY', modelEnv: 'GROQ_MODEL', modelDefault: 'llama-3.3-70b-versatile' },
  gemini: { kind: 'gemini', keyEnv: 'GEMINI_API_KEY', modelEnv: 'GEMINI_MODEL', modelDefault: 'gemini-2.0-flash' },
  cerebras: { kind: 'openai', base: 'https://api.cerebras.ai/v1', keyEnv: 'CEREBRAS_API_KEY', modelEnv: 'CEREBRAS_MODEL', modelDefault: 'llama-3.3-70b' },
  openrouter: { kind: 'openai', base: 'https://openrouter.ai/api/v1', keyEnv: 'OPENROUTER_API_KEY', modelEnv: 'OPENROUTER_MODEL', modelDefault: 'meta-llama/llama-3.3-70b-instruct:free' },
}
const DEFAULT_ORDER = ['gemini', 'groq', 'cerebras', 'openrouter']
const TIMEOUT_MS = int(ENV.WORK_CASCADE_TIMEOUT_MS, 45000)

export function freeCascadeConfigured(): boolean {
  return order().length > 0
}

function order(): string[] {
  return (ENV.WORK_CASCADE || DEFAULT_ORDER.join(','))
    .split(',').map((s) => s.trim())
    .filter((n) => PROVIDERS[n] && ENV[PROVIDERS[n].keyEnv])
}

export async function cascadeComplete(system: string, user: string, maxTokens: number): Promise<{ text: string; model: string } | null> {
  for (const name of order()) {
    try {
      const p = PROVIDERS[name]
      const text = await call(p, system, user, maxTokens)
      if (text && text.trim()) return { text: text.trim(), model: `${name}:${ENV[p.modelEnv] || p.modelDefault}` }
    } catch {
      /* next provider */
    }
  }
  return null
}

async function call(p: Provider, system: string, user: string, maxTokens: number): Promise<string> {
  const model = ENV[p.modelEnv] || p.modelDefault
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS)
  try {
    if (p.kind === 'openai') {
      const res = await fetch(`${p.base}/chat/completions`, {
        method: 'POST',
        signal: ctrl.signal,
        headers: { 'content-type': 'application/json', authorization: `Bearer ${ENV[p.keyEnv]}` },
        body: JSON.stringify({ model, max_tokens: maxTokens, temperature: 0.4, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }),
      })
      if (!res.ok) throw new Error(String(res.status))
      const j = await res.json()
      return j?.choices?.[0]?.message?.content ?? ''
    }
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${ENV[p.keyEnv]}`
    const res = await fetch(url, {
      method: 'POST',
      signal: ctrl.signal,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: system }] },
        contents: [{ role: 'user', parts: [{ text: user }] }],
        generationConfig: { maxOutputTokens: maxTokens, temperature: 0.4 },
      }),
    })
    if (!res.ok) throw new Error(String(res.status))
    const j = await res.json()
    return j?.candidates?.[0]?.content?.parts?.map((x: any) => x.text).join('') ?? ''
  } finally {
    clearTimeout(t)
  }
}

function int(v: string | undefined, d: number): number {
  const n = v ? parseInt(v, 10) : NaN
  return Number.isFinite(n) ? n : d
}
