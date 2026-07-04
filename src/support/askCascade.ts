// Client helper: ask the server-side LLM cascade. Returns null on any failure
// (no backend, quota reached, network error) so the caller can fall back to the
// free local knowledge base. No API keys ever touch the browser.

export interface CascadeReply {
  text: string
  provider?: string
}

export async function askCascade(messages: { role: 'user' | 'assistant'; content: string }[]): Promise<CascadeReply | null> {
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ messages }),
    })
    if (!res.ok) return null
    const j = await res.json()
    if (!j?.ok || typeof j.text !== 'string' || !j.text.trim()) return null
    return { text: j.text.trim(), provider: j.provider }
  } catch {
    return null
  }
}
