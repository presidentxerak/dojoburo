// UI state for tool connections and real-work deliverables. Kept separate from
// the XRPL/game store (src/store.ts) — this is the "real work" layer.
import { create } from 'zustand'
import { listTools, disconnectTool, runWork, type ToolStatus, type Deliverable, type RunResult } from './workApi'

interface WorkState {
  tools: Record<string, ToolStatus>
  backend: boolean
  loadedOnce: boolean
  runningTask: string | null
  deliverable: (Deliverable & { settlement?: RunResult['settlement']; tools?: string[]; priceXrp?: number }) | null
  runError: string | null

  loadTools: () => Promise<void>
  disconnect: (id: string) => Promise<void>
  run: (input: { task: string; agentName: string; connectors: string[]; brief?: string }) => Promise<void>
  closeDeliverable: () => void
}

export const useWork = create<WorkState>((set, get) => ({
  tools: {},
  backend: false,
  loadedOnce: false,
  runningTask: null,
  deliverable: null,
  runError: null,

  loadTools: async () => {
    const { tools, backend } = await listTools()
    const map: Record<string, ToolStatus> = {}
    for (const t of tools) map[t.id] = t
    set({ tools: map, backend, loadedOnce: true })
  },

  disconnect: async (id) => {
    const ok = await disconnectTool(id)
    if (ok) {
      set((s) => ({ tools: { ...s.tools, [id]: { ...s.tools[id], connected: false, account: null } } }))
    }
  },

  run: async (input) => {
    if (get().runningTask) return
    set({ runningTask: input.task, runError: null })
    const r = await runWork(input)
    if (r.ok && r.deliverable) {
      set({ deliverable: { ...r.deliverable, settlement: r.settlement, tools: r.tools, priceXrp: r.priceXrp }, runningTask: null })
    } else {
      set({ runError: r.error === 'not_configured' ? 'not_configured' : r.detail || r.error || 'failed', runningTask: null })
    }
  },

  closeDeliverable: () => set({ deliverable: null, runError: null }),
}))
