// What your team actually spent · measured, never estimated.
//
// The mode cards carry estimates. This carries the truth: every completed run
// records the token counts the model itself reported, so the founder can watch
// consumption in real time and check our estimates against reality.
//
// Kept in this browser, capped, and grouped by day so "today" is answerable
// without keeping a year of history. Nothing here is sent anywhere.
import { create } from 'zustand'
import type { EffortId } from '../data/effort'

export interface RunUsage {
  at: number
  /** the task that ran */
  task: string
  agent: string
  dojoId: string
  mode: EffortId
  inTokens: number
  outTokens: number
  /** which engine served it · your key, the operator's, or the free cascade */
  engine: string
  /** how many connected apps travelled with the request */
  apps: number
}

const KEY = 'dojoburo.usage.v1'
const BUDGET_KEY = 'dojoburo.budget.v1'
const CAP = 400 // runs kept · a few weeks of real use

/**
 * A daily token ceiling you set for yourself.
 *
 * The meter observes; this stops. It is deliberately a self-imposed guard rather
 * than a server rule — it works with no backend, it is yours to raise, and its
 * job is to catch the run you did not mean to start, not to police you. 0 = off.
 */
export function dailyBudget(): number {
  try { return Math.max(0, Number(localStorage.getItem(BUDGET_KEY)) || 0) } catch { return 0 }
}
export function setDailyBudget(n: number) {
  try {
    if (n > 0) localStorage.setItem(BUDGET_KEY, String(Math.round(n)))
    else localStorage.removeItem(BUDGET_KEY)
  } catch { /* private mode */ }
  for (const l of budgetListeners) l()
}
const budgetListeners = new Set<() => void>()
export function onBudgetChange(l: () => void) { budgetListeners.add(l); return () => { budgetListeners.delete(l) } }

const today = () => new Date().toISOString().slice(0, 10)

interface MeterState {
  runs: RunUsage[]
  record: (r: Omit<RunUsage, 'at'>) => void
  clear: () => void
}

function load(): RunUsage[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(raw) ? raw : []
  } catch { return [] }
}

export const useUsage = create<MeterState>((set, get) => ({
  runs: load(),
  record: (r) => {
    const runs = [{ ...r, at: Date.now() }, ...get().runs].slice(0, CAP)
    set({ runs })
    try { localStorage.setItem(KEY, JSON.stringify(runs)) } catch { /* private mode */ }
  },
  clear: () => {
    set({ runs: [] })
    try { localStorage.removeItem(KEY) } catch { /* ignore */ }
  },
}))

export interface Totals {
  runs: number
  inTokens: number
  outTokens: number
  total: number
}

const sum = (list: RunUsage[]): Totals => ({
  runs: list.length,
  inTokens: list.reduce((n, r) => n + r.inTokens, 0),
  outTokens: list.reduce((n, r) => n + r.outTokens, 0),
  total: list.reduce((n, r) => n + r.inTokens + r.outTokens, 0),
})

/**
 * Would this run take you past today's ceiling?
 *
 * Called before a step starts, with that step's estimate. Returns null when
 * there is room (or no ceiling), otherwise the sentence to show the founder.
 */
export function budgetBlock(estimate: number): string | null {
  const cap = dailyBudget()
  if (!cap) return null
  const spent = readMeter(useUsage.getState().runs).today.total
  if (spent + estimate <= cap) return null
  return `That would take today past your ${cap.toLocaleString()} token limit (${spent.toLocaleString()} used). Raise it, switch to Saver, or come back tomorrow.`
}

/** Everything the meter can say, derived from the same list. */
export function readMeter(runs: RunUsage[], dojoId?: string) {
  const scoped = dojoId ? runs.filter((r) => r.dojoId === dojoId) : runs
  const startOfDay = new Date(today() + 'T00:00:00').getTime()
  const todays = scoped.filter((r) => r.at >= startOfDay)
  const last = scoped[0]

  // the last seven days, oldest first · for the sparkline
  const days: { day: string; total: number }[] = []
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86_400_000)
    const key = d.toISOString().slice(0, 10)
    const from = new Date(key + 'T00:00:00').getTime()
    const to = from + 86_400_000
    days.push({ day: key, total: sum(scoped.filter((r) => r.at >= from && r.at < to)).total })
  }

  return { today: sum(todays), all: sum(scoped), last, days }
}
