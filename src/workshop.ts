// Workshop store: the user's account, their Dojos (max 12 agents each) and the
// editable agents inside them. Everything persists to localStorage. This is the
// customization foundation · the office scene and skill engine read agent
// identity from here going forward.
import { create } from 'zustand'
import type { Department } from './data/agents'
import { SKINS, skinById, variedSkins, crewSkins, skinsForTheme } from './data/skins'
import { ROLE_AGENTS, ROLE_IDS, ROLE_BY_ID } from './data/roleAgents'
import { defaultTasksFor } from './data/functions'
import type { CurrencyCode } from './data/currency'
import { templateById, DEFAULT_TEMPLATE_ID, type DojoTemplate } from './data/templates'
import { professionById, type Profession } from './data/professions'
import { seatPositions } from './three/layout3d'

export const GRID = { cols: 6, rows: 4 } // 24 cells
// Up to 24 agents per dojo · the 12 role presets plus room for custom agents the
// user creates. The 3D scene seats the first 12 visible; the roster shows all.
export const MAX_AGENTS = 24

/** An external AI agent (at Notion, Slack, a custom host…) linked to a DojoBuro
 *  agent. MCP agents plug in as tools during a run; A2A / webhook agents receive
 *  delegated tasks via the server proxy. */
export interface ExtAgent {
  id: string
  name: string
  protocol: 'mcp' | 'a2a' | 'webhook'
  url: string
  /** optional bearer token / api key for the external agent (kept locally) */
  authToken?: string
  note?: string
}

/** Identity for a user-created (custom) agent · the presets live in
 *  data/roleAgents, but the user can also build their own teammate. When present
 *  it drives the roster card, the 3D tint and the agent's own workspace. */
export interface CustomMeta {
  title: string
  desc: string
  tint: string
  /** connector ids this custom agent works with (its in-studio apps) */
  apps: string[]
}

export interface WAgent {
  id: string
  name: string
  fn: Department
  /** role key (see data/roleAgents) · which functional agent this is. Every
   *  seeded dojo now carries the 10 role agents; this tags each one so the
   *  roster, the 3D scene and the dedicated dashboards line up. */
  role?: string
  skinId: string
  tasks: string[]
  budgetXrp: number
  gx: number
  gy: number
  /** the user hid this agent from the dojo (still restorable from the roster). */
  hidden?: boolean
  /** external agents this DojoBuro agent can call / delegate to */
  externalAgents?: ExtAgent[]
  /** set for user-created agents · their editable identity + apps. */
  custom?: CustomMeta
}

export interface Dojo {
  id: string
  name: string
  /** environment template id (see data/templates) · drives the 3D scene look */
  template: string
  agents: WAgent[]
}

export interface Account {
  id: string
  name: string
  handle: string
  email: string
  provider: 'guest' | 'privy'
  currency: CurrencyCode
  avatarSkinId: string
  /** Privy user id (did:privy:…) when signed in with Privy · used to map
   *  server-side settlements to this account. */
  privyDid?: string
}

interface WorkshopState {
  account: Account | null
  dojos: Dojo[]
  activeDojoId: string | null
  /** true when there are dojo/agent edits not yet written to localStorage */
  dirty: boolean

  save: () => void
  signInGuest: (name?: string) => void
  signInPrivy: (p: { name?: string; email?: string; handle?: string; did?: string }) => void
  signOut: () => void
  updateAccount: (patch: Partial<Account>) => void
  setCurrency: (c: CurrencyCode) => void

  createDojo: (name?: string, templateId?: string) => void
  createDojoForProfession: (professionId: string) => void
  createDojoForProfessions: (professionIds: string[]) => void
  renameDojo: (id: string, name: string) => void
  setDojoTemplate: (id: string, templateId: string) => void
  deleteDojo: (id: string) => void
  setActiveDojo: (id: string) => void

  addAgent: (partial?: Partial<WAgent>) => string | null
  /** Create a user-defined (custom) agent on the active dojo · returns its id. */
  addCustomAgent: (meta: CustomMeta & { name: string; fn?: Department }) => string | null
  /** Edit a custom agent's identity (name lives on the agent, rest in custom). */
  updateCustomAgent: (id: string, patch: Partial<CustomMeta>) => void
  /** Add a role agent to the active dojo if it isn't there · returns the id of
   *  the existing or new agent. Seeded dojos already carry all role agents. */
  addRoleAgent: (roleId: string) => string | null
  /** Hide or restore an agent by its role id (seeded agents are never deleted). */
  setAgentHidden: (roleId: string, hidden: boolean) => void
  updateAgent: (id: string, patch: Partial<WAgent>) => void
  deleteAgent: (id: string) => void
  moveAgent: (id: string, gx: number, gy: number) => void
}

const KEY = 'dojoburo.workshop.v1'
const uid = () => Math.random().toString(36).slice(2, 10)
const DEPTS: Department[] = ['Leadership', 'Engineering', 'Finance', 'Growth', 'Product', 'People', 'Ops']

// Every company is run by the SAME 10 functional agents (see data/roleAgents).
// The template/profession only changes the 3D world and the skin palette · not
// the crew composition · so the roster, the scene and the dashboards always
// match. Each role agent is seeded onto the grid with a skin from the theme.
// Seed the FULL crew · all role agents (the eight core plus Engineering,
// Comms, Support and Legal) in their logical pipeline order, so every dojo
// ships with the complete team. Users hide the ones they don't need.
function roleCrew(skinTheme: string): WAgent[] {
  const skins = crewSkins(skinTheme, ROLE_AGENTS.length)
  return ROLE_AGENTS.map((r, i) => ({
    id: 'a_' + uid(),
    name: r.name,
    fn: r.dept,
    role: r.id,
    skinId: skins[i % skins.length].id,
    tasks: defaultTasksFor(r.dept),
    budgetXrp: 5,
    gx: i % GRID.cols,
    gy: Math.floor(i / GRID.cols),
  }))
}

// The default HQ · role crew in the default dojo world with a varied palette.
function seedDojo(): Dojo {
  const varied = variedSkins(ROLE_AGENTS.length)
  const agents = roleCrew('dojo').map((a, i) => ({ ...a, skinId: varied[i % varied.length].id }))
  return { id: uid(), name: 'HQ Dojo', template: 'dojo', agents }
}

// A new dojo from a template: the role crew in the template's palette.
function makeTemplatedDojo(name: string, tpl: DojoTemplate): Dojo {
  return { id: uid(), name, template: tpl.id, agents: roleCrew(tpl.skinTheme) }
}

// A dojo tailored to a profession: the role crew in the trade's chosen 3D world.
function makeProfessionDojo(professionId: string): Dojo {
  const prof = professionById(professionId)
  if (!prof) return makeTemplatedDojo('New dojo', templateById(DEFAULT_TEMPLATE_ID))
  const tpl = templateById(prof.template)
  return { id: uid(), name: `${prof.label}`, template: tpl.id, agents: roleCrew(tpl.skinTheme) }
}

/** Build one dojo from SEVERAL professions/domains. The crew is always the 10
 *  role agents; only the world/palette follow the first trade. */
function makeProfessionsDojo(ids: string[]): Dojo {
  const profs = ids.map(professionById).filter(Boolean) as Profession[]
  if (profs.length <= 1) return makeProfessionDojo(profs[0]?.id ?? ids[0] ?? '')
  const tpl = templateById(profs[0].template)
  const name = `${profs[0].label} +${profs.length - 1}`
  return { id: uid(), name, template: tpl.id, agents: roleCrew(tpl.skinTheme) }
}

/** Migrate a saved dojo to the FULL role crew. A crew is valid when every role
 *  agent is present. If some are missing (e.g. a dojo saved with only the eight
 *  core agents, or a pre-role crew), we KEEP the existing agents (positions,
 *  skins, hidden flags, edits) and APPEND the missing role agents so nobody
 *  loses their setup while everyone gains the new teammates. */
function ensureRoleCrew(d: Dojo): Dojo {
  const agents = Array.isArray(d.agents) ? d.agents : []
  // custom (user-created) agents are always kept · they carry their own identity.
  const custom = agents.filter((a) => a.custom)
  const allPresent = ROLE_IDS.every((id) => agents.some((a) => a.role === id)) && agents.every((a) => a.role || a.custom)
  if (allPresent) return d
  const tpl = templateById(d.template)
  // role-tagged agents we can keep as-is (positions, skins, hidden flags, edits).
  const tagged = agents.filter((a) => a.role && ROLE_BY_ID[a.role])
  // a crew with NO role tags at all → a pre-role-agent dojo · rebuild the role
  // crew fresh, but never discard any custom agents the user has created.
  if (tagged.length === 0) {
    const merged = [...roleCrew(tpl.skinTheme), ...custom].map((a, i) => ({ ...a, gx: i % GRID.cols, gy: Math.floor(i / GRID.cols) }))
    return { ...d, agents: merged }
  }
  // otherwise keep what's there (roles + customs) and append the missing roles.
  const have = new Set(tagged.map((a) => a.role))
  const seed = roleCrew(tpl.skinTheme)
  const missing = seed.filter((a) => a.role && !have.has(a.role))
  const merged = [...tagged, ...missing, ...custom].map((a, i) => ({ ...a, gx: i % GRID.cols, gy: Math.floor(i / GRID.cols) }))
  return { ...d, agents: merged }
}

function load(): { account: Account | null; dojos: Dojo[]; activeDojoId: string | null } {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const p = JSON.parse(raw)
      if (p && Array.isArray(p.dojos) && p.dojos.length) {
        // backfill the template field for dojos saved before templates existed
        for (const d of p.dojos) if (!d.template) d.template = DEFAULT_TEMPLATE_ID
        // migrate pre-role-agent crews to the 10 canonical role agents
        p.dojos = p.dojos.map(ensureRoleCrew)
        return p
      }
    }
  } catch {
    /* ignore */
  }
  const d = seedDojo()
  return { account: null, dojos: [d], activeDojoId: d.id }
}

function firstFreeCell(agents: WAgent[]): { gx: number; gy: number } {
  const taken = new Set(agents.map((a) => `${a.gx},${a.gy}`))
  for (let y = 0; y < GRID.rows; y++)
    for (let x = 0; x < GRID.cols; x++) if (!taken.has(`${x},${y}`)) return { gx: x, gy: y }
  return { gx: 0, gy: 0 }
}

export const useWorkshop = create<WorkshopState>((set, get) => {
  // persist() is the single save point · it writes localStorage and clears the
  // dirty flag. Dojo/agent edits stay in memory (dirty) until save() is called.
  const persist = () => {
    const { account, dojos, activeDojoId } = get()
    try {
      localStorage.setItem(KEY, JSON.stringify({ account, dojos, activeDojoId }))
    } catch {
      /* ignore */
    }
    set({ dirty: false })
  }
  // dojo/agent mutation: update in memory and mark dirty (not yet saved)
  const editActive = (fn: (d: Dojo) => Dojo) => {
    set((s) => ({ dojos: s.dojos.map((d) => (d.id === s.activeDojoId ? fn(d) : d)), dirty: true }))
  }

  return {
    ...load(),
    dirty: false,

    save: () => persist(),

    signInGuest: (name) => {
      set({
        account: {
          id: uid(),
          name: name?.trim() || 'Founder',
          handle: '',
          email: '',
          provider: 'guest',
          currency: 'XRP',
          avatarSkinId: SKINS[0].id,
        },
      })
      persist()
    },
    signInPrivy: (p) => {
      set((s) => ({
        account: {
          // keep currency/avatar if a guest account was already set up
          id: s.account?.id ?? uid(),
          name: p.name?.trim() || s.account?.name || 'Founder',
          handle: p.handle?.trim() || s.account?.handle || '',
          email: p.email?.trim() || s.account?.email || '',
          provider: 'privy',
          currency: s.account?.currency ?? 'XRP',
          avatarSkinId: s.account?.avatarSkinId ?? SKINS[0].id,
          privyDid: p.did || s.account?.privyDid,
        },
      }))
      persist()
    },
    signOut: () => {
      set({ account: null })
      persist()
    },
    updateAccount: (patch) => {
      set((s) => (s.account ? { account: { ...s.account, ...patch } } : {}))
      persist()
    },
    setCurrency: (c) => {
      set((s) => (s.account ? { account: { ...s.account, currency: c } } : {}))
      persist()
    },

    createDojo: (name, templateId) => {
      const tpl = templateById(templateId ?? DEFAULT_TEMPLATE_ID)
      const nm = name?.trim() || `${tpl.label} ${get().dojos.length + 1}`
      const d = makeTemplatedDojo(nm, tpl)
      set((s) => ({ dojos: [...s.dojos, d], activeDojoId: d.id, dirty: true }))
    },
    createDojoForProfession: (professionId) => {
      const d = makeProfessionDojo(professionId)
      set((s) => ({ dojos: [...s.dojos, d], activeDojoId: d.id, dirty: true }))
    },
    createDojoForProfessions: (professionIds) => {
      const d = makeProfessionsDojo(professionIds)
      set((s) => ({ dojos: [...s.dojos, d], activeDojoId: d.id, dirty: true }))
    },
    renameDojo: (id, name) => {
      set((s) => ({ dojos: s.dojos.map((d) => (d.id === id ? { ...d, name: name.trim() || d.name } : d)), dirty: true }))
    },
    setDojoTemplate: (id, templateId) => {
      const tpl = templateById(templateId)
      set((s) => ({ dojos: s.dojos.map((d) => (d.id === id ? { ...d, template: tpl.id } : d)), dirty: true }))
    },
    deleteDojo: (id) => {
      set((s) => {
        const dojos = s.dojos.filter((d) => d.id !== id)
        const safe = dojos.length ? dojos : [seedDojo()]
        const active = s.activeDojoId === id ? safe[0].id : s.activeDojoId
        return { dojos: safe, activeDojoId: active, dirty: true }
      })
    },
    setActiveDojo: (id) => {
      set({ activeDojoId: id })
      persist()
    },

    addAgent: (partial) => {
      const dojo = get().dojos.find((d) => d.id === get().activeDojoId)
      if (!dojo) return null
      if (dojo.agents.length >= MAX_AGENTS) return null
      const cell = firstFreeCell(dojo.agents)
      const fn = (partial?.fn as Department) || DEPTS[dojo.agents.length % DEPTS.length]
      const agent: WAgent = {
        id: 'a_' + uid(),
        name: partial?.name || `Agent ${dojo.agents.length + 1}`,
        fn,
        skinId: partial?.skinId || SKINS[Math.floor(Math.random() * SKINS.length)].id,
        tasks: partial?.tasks || defaultTasksFor(fn),
        budgetXrp: partial?.budgetXrp ?? 5,
        gx: partial?.gx ?? cell.gx,
        gy: partial?.gy ?? cell.gy,
      }
      editActive((d) => ({ ...d, agents: [...d.agents, agent] }))
      return agent.id
    },
    addCustomAgent: (meta) => {
      const dojo = get().dojos.find((d) => d.id === get().activeDojoId)
      if (!dojo) return null
      if (dojo.agents.length >= MAX_AGENTS) return null
      const cell = firstFreeCell(dojo.agents)
      // give the new agent an unused skin from the dojo's own palette
      const themeSkins = skinsForTheme(templateById(dojo.template).skinTheme)
      const used = new Set(dojo.agents.map((a) => a.skinId))
      const skin = themeSkins.find((s) => !used.has(s.id)) || themeSkins[0] || SKINS[0]
      const fn = meta.fn || DEPTS[dojo.agents.length % DEPTS.length]
      const agent: WAgent = {
        id: 'a_' + uid(),
        name: meta.name.trim() || 'New agent',
        fn,
        skinId: skin.id,
        tasks: defaultTasksFor(fn),
        budgetXrp: 5,
        gx: cell.gx,
        gy: cell.gy,
        custom: { title: meta.title.trim() || 'Specialist', desc: meta.desc.trim(), tint: meta.tint, apps: meta.apps },
      }
      editActive((d) => ({ ...d, agents: [...d.agents, agent] }))
      persist()
      return agent.id
    },
    updateCustomAgent: (id, patch) => {
      editActive((d) => ({ ...d, agents: d.agents.map((a) => (a.id === id && a.custom ? { ...a, custom: { ...a.custom, ...patch } } : a)) }))
      persist()
    },
    addRoleAgent: (roleId) => {
      const dojo = get().dojos.find((d) => d.id === get().activeDojoId)
      if (!dojo) return null
      const existing = dojo.agents.find((a) => a.role === roleId)
      if (existing) return existing.id
      const role = ROLE_BY_ID[roleId]
      if (!role) return null
      if (dojo.agents.length >= MAX_AGENTS) return null
      const cell = firstFreeCell(dojo.agents)
      // give the new agent a skin from the dojo's own palette
      const themeSkins = skinsForTheme(templateById(dojo.template).skinTheme)
      const used = new Set(dojo.agents.map((a) => a.skinId))
      const skin = themeSkins.find((s) => !used.has(s.id)) || themeSkins[0] || SKINS[0]
      const agent: WAgent = {
        id: 'a_' + uid(),
        name: role.name,
        fn: role.dept,
        role: role.id,
        skinId: skin.id,
        tasks: defaultTasksFor(role.dept),
        budgetXrp: 5,
        gx: cell.gx,
        gy: cell.gy,
      }
      editActive((d) => ({ ...d, agents: [...d.agents, agent] }))
      persist()
      return agent.id
    },
    setAgentHidden: (roleId, hidden) => {
      editActive((d) => ({ ...d, agents: d.agents.map((a) => (a.role === roleId ? { ...a, hidden } : a)) }))
      persist()
    },
    updateAgent: (id, patch) => {
      editActive((d) => ({ ...d, agents: d.agents.map((a) => (a.id === id ? { ...a, ...patch } : a)) }))
    },
    deleteAgent: (id) => {
      editActive((d) => ({ ...d, agents: d.agents.filter((a) => a.id !== id) }))
    },
    moveAgent: (id, gx, gy) => {
      gx = Math.max(0, Math.min(GRID.cols - 1, gx))
      gy = Math.max(0, Math.min(GRID.rows - 1, gy))
      editActive((d) => {
        const occupant = d.agents.find((a) => a.gx === gx && a.gy === gy && a.id !== id)
        const me = d.agents.find((a) => a.id === id)
        if (!me) return d
        return {
          ...d,
          agents: d.agents.map((a) => {
            if (a.id === id) return { ...a, gx, gy }
            if (occupant && a.id === occupant.id) return { ...a, gx: me.gx, gy: me.gy } // swap
            return a
          }),
        }
      })
    },
  }
})

export function activeDojo(): Dojo | null {
  const s = useWorkshop.getState()
  return s.dojos.find((d) => d.id === s.activeDojoId) ?? null
}

export function agentSkin(a: WAgent) {
  return skinById(a.skinId)
}

/** The active dojo's agents placed on a grid sized to their count · so the
 *  scene shows exactly one desk per agent (no empty desks). Used by both the
 *  characters and the desks so they always line up. */
export function seatedAgents(dojo: Dojo | null): Array<{ agent: WAgent; x: number; z: number }> {
  const list = [...(dojo?.agents ?? [])]
    .filter((a) => !a.hidden)
    .sort((a, b) => (a.gy * GRID.cols + a.gx) - (b.gy * GRID.cols + b.gx))
    .slice(0, 12)
  const pos = seatPositions(list.length)
  return list.map((agent, i) => ({ agent, x: pos[i][0], z: pos[i][1] }))
}
