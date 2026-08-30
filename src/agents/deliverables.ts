// Persisted store of the real deliverables the crew has produced, per company.
// This is what makes the dashboard feel like nanocorp: once the CEO generates the
// website / ads / offer / outreach, they stay in their panels (with a "Voir"
// button) instead of vanishing when the modal closes.
import { create } from 'zustand'
import type { Deliverable } from './workApi'
import { useDojo } from '../store'

export interface StoredDeliverable extends Deliverable {
  id: string
  dojoId: string
  createdAt: number // ms; stamped by the caller (Date.now is fine at the UI layer)
}

const KEY = 'dojoburo.deliverables.v1'
const uid = () => Math.random().toString(36).slice(2, 9)

// How many versions of the SAME step we keep.
//
// This used to be one: a rerun destroyed the thing you were about to compare it
// against, which makes the tune-and-compare loop the Academy teaches impossible
// to actually do. Three is enough to see whether a brief edit helped without
// filling localStorage.
const KEEP_PER_TASK = 3
const CAP = 60

interface DelivState {
  byDojo: Record<string, StoredDeliverable[]>
  add: (dojoId: string, d: Deliverable, createdAt: number) => void
  /** most recent deliverable of a given task kind (e.g. 'website') for a company */
  latest: (dojoId: string, kind: string) => StoredDeliverable | undefined
  list: (dojoId: string) => StoredDeliverable[]
  /** every kept version of one step, newest first */
  versions: (dojoId: string, kind: string) => StoredDeliverable[]
}

function load(): Record<string, StoredDeliverable[]> {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') as Record<string, StoredDeliverable[]> } catch { return {} }
}

export const useDeliverables = create<DelivState>((set, get) => {
  const persist = (byDojo: Record<string, StoredDeliverable[]>) => {
    try { localStorage.setItem(KEY, JSON.stringify(byDojo)) } catch { /* ignore */ }
  }
  return {
    byDojo: load(),
    add: (dojoId, d, createdAt) => {
      const prev = get().byDojo[dojoId] ?? []
      const item: StoredDeliverable = { ...d, id: uid(), dojoId, createdAt }
      // Keep the last few versions of each step so a rerun can be compared with
      // what it replaced, newest first, and cap the whole list.
      const seen: Record<string, number> = {}
      const next = [item, ...prev]
        .filter((x) => {
          const n = (seen[x.taskId] = (seen[x.taskId] ?? 0) + 1)
          return n <= KEEP_PER_TASK
        })
        .slice(0, CAP)
      const byDojo = { ...get().byDojo, [dojoId]: next }
      set({ byDojo }); persist(byDojo)
      try { useDojo.getState().cheer() } catch { /* store not ready */ }
    },
    latest: (dojoId, kind) => (get().byDojo[dojoId] ?? []).find((d) => d.taskId === kind),
    list: (dojoId) => get().byDojo[dojoId] ?? [],
    versions: (dojoId, kind) => (get().byDojo[dojoId] ?? []).filter((d) => d.taskId === kind),
  }
})
