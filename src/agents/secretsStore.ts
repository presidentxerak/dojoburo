// ---------------------------------------------------------------------------
// Secrets · per-company environment variables (nanocorp's "Secrets" panel). The
// user names a secret (e.g. STRIPE_KEY), pastes a value and an optional hint;
// the CEO exposes it to that company's agents as an env var when they run tools.
//
// NB · storage: this near-side store keeps secrets in localStorage so the UI is
// live without a backend. In production these are POSTed to the same encrypted
// vault the app connections already use (AES-256-GCM, server-side) and injected
// into the worker's process.env at run time · the browser never keeps the value.
// See the Réglages card copy + api/ vault for the real path.
// ---------------------------------------------------------------------------
import { create } from 'zustand'

export interface Secret { id: string; key: string; value: string; desc: string }

const KEY = 'dojoburo.secrets.v1'
const uid = () => Math.random().toString(36).slice(2, 9)
// a valid ENV_VAR name: letters, digits, underscores; can't start with a digit
export const normalizeKey = (s: string) => s.trim().toUpperCase().replace(/[^A-Z0-9_]/g, '_').replace(/^([0-9])/, '_$1').slice(0, 48)

interface SecretsState {
  byDojo: Record<string, Secret[]>
  add: (dojoId: string, key: string, value: string, desc: string) => void
  remove: (dojoId: string, id: string) => void
}

function load(): Record<string, Secret[]> {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') as Record<string, Secret[]> } catch { return {} }
}

export const useSecrets = create<SecretsState>((set, get) => {
  const persist = (byDojo: Record<string, Secret[]>) => {
    try { localStorage.setItem(KEY, JSON.stringify(byDojo)) } catch { /* ignore */ }
  }
  return {
    byDojo: load(),
    add: (dojoId, key, value, desc) => {
      const k = normalizeKey(key)
      if (!k || !value.trim()) return
      const list = get().byDojo[dojoId] ?? []
      // replace an existing secret with the same name rather than duplicating it
      const next = [...list.filter((s) => s.key !== k), { id: uid(), key: k, value: value.trim(), desc: desc.trim() }]
      const byDojo = { ...get().byDojo, [dojoId]: next }
      set({ byDojo }); persist(byDojo)
    },
    remove: (dojoId, id) => {
      const byDojo = { ...get().byDojo, [dojoId]: (get().byDojo[dojoId] ?? []).filter((s) => s.id !== id) }
      set({ byDojo }); persist(byDojo)
    },
  }
})
