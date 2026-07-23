// Per-agent app overrides · modular connectors.
//
// Each preset agent ships a small, curated set of default apps (the best,
// non-redundant tools for its job · see data/roleAgents). This store lets the
// user tailor that set per company: ADD any connector from the catalog, or
// REMOVE a default they don't use. The registry stays the single source of
// truth, so the app is fully modular and evolvable · nothing is hard-locked.
// Persisted locally, keyed by dojo + agent role.
import { create } from 'zustand'

export interface AppOverride { add: string[]; remove: string[] }

const KEY = 'dojoburo.agentapps.v1'
const EMPTY: AppOverride = { add: [], remove: [] }
const keyOf = (dojoId: string, roleId: string) => `${dojoId || 'default'}::${roleId}`

function load(): Record<string, AppOverride> {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') as Record<string, AppOverride> } catch { return {} }
}

/** The effective app list = defaults (minus removed) then user-added, de-duped. */
export function effectiveApps(defaults: string[], ov: AppOverride | undefined): string[] {
  const o = ov ?? EMPTY
  const base = defaults.filter((id) => !o.remove.includes(id))
  const extra = o.add.filter((id) => !defaults.includes(id) && !base.includes(id))
  return [...base, ...extra]
}

interface AppsState {
  byKey: Record<string, AppOverride>
  override: (dojoId: string, roleId: string) => AppOverride
  /** Turn an app on/off for an agent · `on` adds it, `!on` removes it. */
  setApp: (dojoId: string, roleId: string, appId: string, on: boolean, defaults: string[]) => void
}

export const useAgentApps = create<AppsState>((set, get) => {
  const persist = (byKey: Record<string, AppOverride>) => {
    try { localStorage.setItem(KEY, JSON.stringify(byKey)) } catch { /* ignore */ }
  }
  return {
    byKey: load(),
    override: (dojoId, roleId) => get().byKey[keyOf(dojoId, roleId)] ?? EMPTY,
    setApp: (dojoId, roleId, appId, on, defaults) => {
      const k = keyOf(dojoId, roleId)
      const cur = get().byKey[k] ?? EMPTY
      const isDefault = defaults.includes(appId)
      let add = cur.add.filter((x) => x !== appId)
      let remove = cur.remove.filter((x) => x !== appId)
      if (on) { if (!isDefault) add = [...add, appId] } // re-enabling a default just clears its removal
      else { if (isDefault) remove = [...remove, appId] } // disabling a user-added one just drops it from add
      const byKey = { ...get().byKey, [k]: { add, remove } }
      set({ byKey }); persist(byKey)
    },
  }
})
