// ---------------------------------------------------------------------------
// Engine · the CEO autonomy + usage-limit layer (nanocorp's "Engine" panel).
// It caps how much autonomous work runs so an agent can't spin in circles or
// burn credits: an Autonomy level sets a per-day task cap, plus a hard daily
// credit cap and a short "same task in a row" guard against loops. All local +
// persisted; the server enforces the real spend, this is the near-side guard.
// ---------------------------------------------------------------------------
import { create } from 'zustand'

export type Autonomy = 'auto' | 'low' | 'medium' | 'hard' | 'ultra'

/** Daily autonomous-task cap per level · 'auto' paces itself (no hard cap). */
export const AUTONOMY_CAP: Record<Autonomy, number> = { auto: Infinity, low: 1, medium: 5, hard: 10, ultra: 25 }
export const AUTONOMY_LABEL: Record<Autonomy, string> = { auto: 'Auto', low: 'Low', medium: 'Medium', hard: 'Hard', ultra: 'Ultra' }

const KEY = 'dojoburo.engine.v1'
const today = () => new Date().toISOString().slice(0, 10)

interface Persisted {
  autonomy: Autonomy
  dailyCreditCap: number
  day: string
  tasksToday: number
  creditsToday: number
  recent: string[] // last few task signatures, to catch loops
  paused: boolean // "Pause Company" · no tasks run while paused
  pauseOutbound: boolean // block outbound email/DMs while on
}

function load(): Persisted {
  const base: Persisted = { autonomy: 'medium', dailyCreditCap: 30, day: today(), tasksToday: 0, creditsToday: 0, recent: [], paused: false, pauseOutbound: false }
  try {
    const p = JSON.parse(localStorage.getItem(KEY) || 'null') as Persisted | null
    if (!p) return base
    if (p.day !== today()) return { ...p, day: today(), tasksToday: 0, creditsToday: 0, recent: [] }
    return { ...base, ...p }
  } catch { return base }
}

interface EngineState extends Persisted {
  setAutonomy: (a: Autonomy) => void
  setDailyCap: (n: number) => void
  setPaused: (v: boolean) => void
  setPauseOutbound: (v: boolean) => void
  /** Is another autonomous task allowed right now? Returns a reason if not. */
  gate: (signature: string) => { ok: boolean; reason?: string }
  /** Record a dispatched task (call after gate() passes and work starts). */
  record: (signature: string, credits?: number) => void
}

export const useEngine = create<EngineState>((set, get) => {
  const persist = () => {
    const { autonomy, dailyCreditCap, day, tasksToday, creditsToday, recent, paused, pauseOutbound } = get()
    try { localStorage.setItem(KEY, JSON.stringify({ autonomy, dailyCreditCap, day, tasksToday, creditsToday, recent, paused, pauseOutbound })) } catch { /* ignore */ }
  }
  return {
    ...load(),
    setAutonomy: (a) => { set({ autonomy: a }); persist() },
    setDailyCap: (n) => { set({ dailyCreditCap: Math.max(1, Math.round(n)) }); persist() },
    setPaused: (v) => { set({ paused: v }); persist() },
    setPauseOutbound: (v) => { set({ pauseOutbound: v }); persist() },
    gate: (signature) => {
      const s = get()
      if (s.paused) return { ok: false, reason: 'Entreprise en pause — aucune tâche ne tourne. Reprends dans Réglages.' }
      if (s.day !== today()) { set({ day: today(), tasksToday: 0, creditsToday: 0, recent: [] }); return { ok: true } }
      const cap = AUTONOMY_CAP[s.autonomy]
      if (s.tasksToday >= cap) return { ok: false, reason: `Plafond d’autonomie atteint (${AUTONOMY_LABEL[s.autonomy]} · ${cap}/jour). Repasse en Auto ou attends demain.` }
      if (s.creditsToday >= s.dailyCreditCap) return { ok: false, reason: `Plafond de crédits du jour atteint (${s.dailyCreditCap}). Augmente-le dans Engine ou attends 24 h.` }
      // anti-loop · same task 3× in the last few dispatches = going in circles
      const same = s.recent.filter((r) => r === signature).length
      if (same >= 3) return { ok: false, reason: 'Cette même tâche vient de tourner en boucle — change d’objectif ou ajuste la consigne.' }
      return { ok: true }
    },
    record: (signature, credits = 1) => {
      const s = get()
      const recent = [...s.recent, signature].slice(-6)
      set({ tasksToday: s.tasksToday + 1, creditsToday: s.creditsToday + credits, recent })
      persist()
    },
  }
})
