// UI state for tool connections, the user's Claude key (BYOK) and real-work
// deliverables. Kept separate from the office/game store (src/store.ts).
import { create } from 'zustand'
import {
  listTools, disconnectTool, runWork, setClaudeKey, removeClaudeKey,
  type ToolStatus, type Deliverable, type RunResult, type ByokStatus,
} from './workApi'
import { useWorkshop, type ExtAgent } from '../workshop'
import { useDeliverables } from './deliverables'
import { localDraft } from './localDraft'
import { useUsage } from './usageMeter'
import { DEFAULT_EFFORT, type EffortId } from '../data/effort'

const EFFORT_KEY = 'dojoburo.effort.v1'
const loadEffort = (): EffortId => {
  try {
    const v = localStorage.getItem(EFFORT_KEY)
    return v === 'saver' || v === 'balanced' || v === 'max' ? v : DEFAULT_EFFORT
  } catch { return DEFAULT_EFFORT }
}

// errors that mean "no real model is available" → we produce a local draft so the
// CEO is never dead; anything else is a genuine failure surfaced to the user.
const NO_MODEL = new Set(['not_configured', 'needs_key', 'quota', 'network', 'failed', 'run_failed', 'empty'])

interface WorkState {
  tools: Record<string, ToolStatus>
  backend: boolean
  byok: ByokStatus
  loadedOnce: boolean
  runningTask: string | null
  deliverable: (Deliverable & { tools?: string[]; engine?: RunResult['engine'] }) | null
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
  /** how hard the team works · the token dial (see data/effort) */
  effort: EffortId
  setEffort: (e: EffortId) => void

  loadTools: () => Promise<void>
  disconnect: (id: string) => Promise<void>
  saveKey: (key: string) => Promise<{ ok: boolean; error?: string }>
  clearKey: () => Promise<void>
  run: (input: { task: string; agentName: string; connectors: string[]; brief?: string; context?: string; extAgents?: ExtAgent[]; silent?: boolean; dojoId?: string }) => Promise<void>
  setAutopilot: (a: { running: boolean; step: string | null }) => void
  showDeliverable: (d: Deliverable) => void
  closeDeliverable: () => void
  clearError: () => void
  openStudio: (tab: 'billing' | 'account' | 'studio') => void
  /** open the Studio editor focused on a specific agent */
  editAgent: (agentId: string) => void
  clearStudioIntent: () => void
  /** true while the app itself is on screen · a surface, not a route */
  inApp: () => boolean
  /** Dojo settings / Account / Billing, as a surface OVER the app */
  studioOpen: boolean
  closeStudio: () => void
  /** Connect apps, as a surface OVER the app */
  connectOpen: boolean
  openConnect: () => void
  closeConnect: () => void
  setModuleTab: (tab: string | null) => void
  openCreate: () => void
  clearCreate: () => void
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
  effort: loadEffort(),
  setEffort: (e) => {
    set({ effort: e })
    try { localStorage.setItem(EFFORT_KEY, e) } catch { /* private mode */ }
  },

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
    // Something else is already running. Say so rather than returning silently:
    // the loop reads runError to decide whether a step succeeded, and a quiet
    // no-op used to be recorded as a finished step that never ran.
    if (get().runningTask) { set({ runError: { code: 'busy' } }); return }
    set({ runningTask: input.task, runError: null })
    const mode = get().effort
    const r = await runWork({ ...input, effort: mode })
    // Which team owns this result. The caller says so, because the pipeline runs
    // every team in turn WITHOUT changing which dojo is on screen — attributing
    // by activeDojoId filed all of them under whichever team you happened to be
    // looking at. Manual runs from the open dojo pass nothing and still get it.
    const dojoId = input.dojoId ?? useWorkshop.getState().activeDojoId
    // Measured, not estimated. The mode cards show a range; this is the number.
    if (r.ok && r.usage) {
      useUsage.getState().record({
        task: input.task,
        agent: input.agentName,
        dojoId: dojoId ?? '',
        mode,
        inTokens: Number(r.usage.input_tokens) || 0,
        outTokens: Number(r.usage.output_tokens) || 0,
        engine: r.engine ?? 'free',
        apps: Number(r.appsSent) || 0,
      })
    }
    if (r.ok && r.deliverable) {
      // persist the deliverable so it stays in its panel (nanocorp-style)
      if (dojoId) useDeliverables.getState().add(dojoId, r.deliverable, Date.now())
      set(input.silent
        ? { runningTask: null }
        : { deliverable: { ...r.deliverable, tools: r.tools, engine: r.engine }, runningTask: null })
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
  // Dojo settings, Account, Billing and Connect apps used to NAVIGATE to their
  // own routes. Leaving the app to read your credit balance meant leaving your
  // dojo — you came back to the naming card, as if the work had gone — and the
  // pages wore chrome nobody else wore. From inside the app they now open as
  // full-screen surfaces over it, exactly like Manage team and Graph mode. The
  // routes still exist: they are real, linkable URLs, and they render the same
  // surface when you arrive from outside.
  inApp: () => { try { return location.hash.replace(/^#\/?/, '') === 'app' } catch { return false } },
  openStudio: (tab) => {
    set({ studioIntent: tab })
    if (get().inApp()) { set({ studioOpen: true, connectOpen: false }); return }
    try { location.hash = 'studio' } catch { /* ignore */ }
  },
  editAgent: (agentId) => {
    set({ studioIntent: 'studio', studioAgentId: agentId })
    if (get().inApp()) { set({ studioOpen: true, connectOpen: false }); return }
    try { location.hash = 'studio' } catch { /* ignore */ }
  },
  clearStudioIntent: () => set({ studioIntent: null, studioAgentId: null }),
  studioOpen: false,
  closeStudio: () => set({ studioOpen: false }),
  connectOpen: false,
  openConnect: () => {
    if (get().inApp()) { set({ connectOpen: true, studioOpen: false }); return }
    try { location.hash = 'connect' } catch { /* ignore */ }
  },
  closeConnect: () => set({ connectOpen: false }),
  setModuleTab: (tab) => set({ moduleTab: tab }),
  openCreate: () => set({ createIntent: true }),
  clearCreate: () => set({ createIntent: false }),
}))
