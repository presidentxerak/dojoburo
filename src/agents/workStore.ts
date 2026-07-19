// UI state for tool connections, the user's Claude key (BYOK) and real-work
// deliverables. Kept separate from the XRPL/game store (src/store.ts).
import { create } from 'zustand'
import {
  listTools, disconnectTool, runWork, setClaudeKey, removeClaudeKey,
  type ToolStatus, type Deliverable, type RunResult, type ByokStatus,
} from './workApi'
import { useWorkshop, type ExtAgent } from '../workshop'
import { useDeliverables } from './deliverables'
import { localDraft } from './localDraft'

// errors that mean "no real model is available" → we produce a local draft so the
// CEO is never dead; anything else is a genuine failure surfaced to the user.
const NO_MODEL = new Set(['not_configured', 'needs_key', 'quota', 'network', 'failed', 'run_failed', 'empty'])

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
  /** deep-link: open a composite studio (Business / Growth) on a specific sub-tab
   *  (e.g. 'finance', 'analytics', 'leads') · read + cleared by the module on mount */
  moduleTab: string | null
  /** the autonomous CEO run: which step is in flight (label) + whether it's active */
  autopilot: { running: boolean; step: string | null }
  /** signal: open the "create a Dojo" flow (from the header/landing Create button) */
  createIntent: boolean

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
  setModuleTab: (tab: string | null) => void
  openCreate: () => void
  clearCreate: () => void
}

/** Ids of every app the user has CONNECTED. Pass this as `connectors` when
 *  launching a deliverable: the server intersects it with the task's own
 *  usesConnectors, so any relevant connected app joins the run as a live tool
 *  (create the Notion page, draft the Gmail, stage the Meta campaign…). */
export function connectedConnectorIds(): string[] {
  const tools = useWork.getState().tools
  return Object.keys(tools).filter((id) => tools[id]?.connected)
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
  moduleTab: null,
  autopilot: { running: false, step: null },
  createIntent: false,

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
    const dojoId = useWorkshop.getState().activeDojoId
    if (r.ok && r.deliverable) {
      // persist the deliverable so it stays in its panel (nanocorp-style)
      if (dojoId) useDeliverables.getState().add(dojoId, r.deliverable, Date.now())
      set(input.silent
        ? { runningTask: null }
        : { deliverable: { ...r.deliverable, settlement: r.settlement, tools: r.tools, priceXrp: r.priceXrp, engine: r.engine }, runningTask: null })
    } else if (NO_MODEL.has(r.error || 'failed')) {
      // no model / server unreachable → produce a useful local starter draft so
      // the CEO always delivers something (clearly labelled). No error surfaced.
      const d = localDraft(input.task, input.brief || '')
      if (dojoId) useDeliverables.getState().add(dojoId, d, Date.now())
      set(input.silent ? { runningTask: null } : { deliverable: d, runningTask: null })
    } else {
      set({ runError: { code: r.error || 'failed', reason: r.reason, detail: r.detail }, runningTask: null })
    }
  },
  setAutopilot: (a) => set({ autopilot: a }),
  showDeliverable: (d) => set({ deliverable: d }),

  closeDeliverable: () => set({ deliverable: null }),
  clearError: () => set({ runError: null }),
  // Dojo Studio is a full PAGE now (route #studio), not a modal · record which
  // tab to open, then navigate there.
  openStudio: (tab) => { set({ studioIntent: tab }); try { location.hash = 'studio' } catch { /* ignore */ } },
  editAgent: (agentId) => { set({ studioIntent: 'studio', studioAgentId: agentId }); try { location.hash = 'studio' } catch { /* ignore */ } },
  clearStudioIntent: () => set({ studioIntent: null, studioAgentId: null }),
  setModuleTab: (tab) => set({ moduleTab: tab }),
  openCreate: () => set({ createIntent: true }),
  clearCreate: () => set({ createIntent: false }),
}))
