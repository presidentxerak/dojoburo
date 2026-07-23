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

interface DelivState {
  byDojo: Record<string, StoredDeliverable[]>
  add: (dojoId: string, d: Deliverable, createdAt: number) => void
  /** most recent deliverable of a given task kind (e.g. 'website') for a company */
  latest: (dojoId: string, kind: string) => StoredDeliverable | undefined
  list: (dojoId: string) => StoredDeliverable[]
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
      // keep one per kind (latest wins) + cap the history so localStorage stays small
      const item: StoredDeliverable = { ...d, id: uid(), dojoId, createdAt }
      const next = [item, ...prev.filter((x) => x.taskId !== d.taskId)].slice(0, 24)
      const byDojo = { ...get().byDojo, [dojoId]: next }
      set({ byDojo }); persist(byDojo)
      try { useDojo.getState().cheer() } catch { /* store not ready */ }
    },
    latest: (dojoId, kind) => (get().byDojo[dojoId] ?? []).find((d) => d.taskId === kind),
    list: (dojoId) => get().byDojo[dojoId] ?? [],
  }
})
