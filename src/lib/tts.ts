// Client helper for the Voiceover panel. The ElevenLabs API key is BYOK: it
// lives only in the user's browser (localStorage) and is sent per request to
// our thin /api/tts proxy (ElevenLabs blocks direct browser calls). If the key
// is left empty, the proxy falls back to the operator's key when configured.
const KEY_STORE = 'dojoburo.elevenlabs.key.v1'

export interface Voice { id: string; label: string }
// A stable shortlist of ElevenLabs public voices (no extra round-trip needed).
export const VOICES: Voice[] = [
  { id: '21m00Tcm4TlvDq8ikWAM', label: 'Rachel · warm female' },
  { id: 'AZnzlk1XvdvUeBnXmlld', label: 'Domi · confident female' },
  { id: 'EXAVITQu4vr4xnSDxMaL', label: 'Bella · soft female' },
  { id: 'ErXwobaYiN019PkySvjV', label: 'Antoni · calm male' },
  { id: 'VR6AewLTigWG4xSOukaG', label: 'Arnold · deep male' },
  { id: 'pNInz6obpgDQGcFmaJgB', label: 'Adam · narrator male' },
]

export function getTtsKey(): string {
  try { return localStorage.getItem(KEY_STORE) || '' } catch { return '' }
}
export function setTtsKey(key: string): void {
  try { key ? localStorage.setItem(KEY_STORE, key.trim()) : localStorage.removeItem(KEY_STORE) } catch { /* */ }
}

export interface TtsResult { ok: boolean; url?: string; blob?: Blob; error?: string; hint?: string }

/** Generate an MP3 voiceover. Returns an object URL + blob on success. */
export async function generateVoiceover(text: string, voiceId: string): Promise<TtsResult> {
  const key = getTtsKey()
  try {
    const res = await fetch('/api/tts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ text, voiceId, key }),
    })
    const ct = res.headers.get('content-type') || ''
    if (ct.includes('audio')) {
      const blob = await res.blob()
      return { ok: true, url: URL.createObjectURL(blob), blob }
    }
    const j = await res.json().catch(() => null)
    return { ok: false, error: j?.error || `Request failed (${res.status}).`, hint: j?.hint }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'network_error' }
  }
}
