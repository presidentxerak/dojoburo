// UI state for tool connections, the user's Claude key (BYOK) and real-work
// deliverables. Kept separate from the XRPL/game store (src/store.ts).
import { create } from 'zustand'
import {
  listTools, disconnectTool, runWork, setClaudeKey, removeClaudeKey,
  type ToolStatus, type Deliverable, type RunResult, type ByokStatus,
} from './workApi'
import { useWorkshop, type ExtAgent } from '../workshop'
import { useDeliverables } from './deliverables'

interface WorkState {
  tools: Record<string, ToolStatus>
  backend: boolean
  byok: ByokStatus
  loadedOnce: boolean
  runningTask: string | null
  deliverable: (Deliverable & { settlement?: RunResult['settlement']; tools?: string[]; priceXrp?: number; engine?: RunResult['engine'] }) | null
  /** structured run failure: { code, reason? } */
  runError: { code: string; reason?: 'tool' | 'design'; detail?: string } | null

  /** deep-link signal: open Dojo Studio on a tab (e.g. from a "add your key" hint) */
  studioIntent: null | 'billing' | 'account' | 'studio'
  /** when set, the Studio opens with this agent pre-selected for editing */
  studioAgentId: string | null
  /** the autonomous CEO run: which step is in flight (label) + whether it's active */
  autopilot: { running: boolean; step: string | null }

  loadTools: () => Promise<void>
  disconnect: (id: string) => Promise<void>
  saveKey: (key: string) => Promise<{ ok: boolean; error?: string }>
  clearKey: () => Promise<void>
  run: (input: { task: string; agentName: string; connectors: string[]; brief?: string; extAgents?: ExtAgent[]; silent?: boolean }) => Promise<void>
  setAutopilot: (a: { running: boolean; step: string | null }) => void
  showDeliverable: (d: Deliverable) => void
  closeDeliverable: () => void
  clearError: () => void
  openStudio: (tab: 'billing' | 'account' | 'studio') => void
  /** open the Studio editor focused on a specific agent */
  editAgent: (agentId: string) => void
  clearStudioIntent: () => void
}

export const useWork = create<WorkState>((set, get) => ({
  tools: {},
  backend: false,
  byok: { connected: false, hint: null },
  loadedOnce: false,
  runningTask: null,
  deliverable: null,
  runError: null,
  studioIntent: null,
  studioAgentId: null,
  autopilot: { running: false, step: null },

  loadTools: async () => {
    const { tools, backend, byok } = await listTools()
    const map: Record<string, ToolStatus> = {}
    for (const t of tools) map[t.id] = t
    set({ tools: map, backend, byok, loadedOnce: true })
  },

  disconnect: async (id) => {
    const ok = await disconnectTool(id)
    if (ok) set((s) => ({ tools: { ...s.tools, [id]: { ...s.tools[id], connected: false, account: null } } }))
  },

  saveKey: async (key) => {
    const r = await setClaudeKey(key)
    if (r.ok) set({ byok: { connected: true, hint: r.hint ?? null } })
    return { ok: !!r.ok, error: r.error }
  },
  clearKey: async () => {
    const ok = await removeClaudeKey()
    if (ok) set({ byok: { connected: false, hint: null } })
  },

  run: async (input) => {
    if (get().runningTask) return
    set({ runningTask: input.task, runError: null })
    const r = await runWork(input)
    if (r.ok && r.deliverable) {
      // persist the deliverable so it stays in its panel (nanocorp-style)
      const dojoId = useWorkshop.getState().activeDojoId
      if (dojoId) useDeliverables.getState().add(dojoId, r.deliverable, Date.now())
      // open the modal unless this was an autonomous (silent) run
      set(input.silent
        ? { runningTask: null }
        : { deliverable: { ...r.deliverable, settlement: r.settlement, tools: r.tools, priceXrp: r.priceXrp, engine: r.engine }, runningTask: null })
    } else {
      set({ runError: { code: r.error || 'failed', reason: r.reason, detail: r.detail }, runningTask: null })
    }
  },
  setAutopilot: (a) => set({ autopilot: a }),
  showDeliverable: (d) => set({ deliverable: d }),

  closeDeliverable: () => set({ deliverable: null }),
  clearError: () => set({ runError: null }),
  openStudio: (tab) => set({ studioIntent: tab }),
  editAgent: (agentId) => set({ studioIntent: 'studio', studioAgentId: agentId }),
  clearStudioIntent: () => set({ studioIntent: null, studioAgentId: null }),
}))
