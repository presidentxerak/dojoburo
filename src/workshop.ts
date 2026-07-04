// Workshop store: the user's account, their Dojos (max 12 agents each) and the
// editable agents inside them. Everything persists to localStorage. This is the
// customization foundation — the office scene and skill engine read agent
// identity from here going forward.
import { create } from 'zustand'
import type { Department } from './data/agents'
import { AGENTS } from './data/agents'
import { SKINS, skinById, variedSkins, crewSkins } from './data/skins'
import { defaultTasksFor } from './data/functions'
import type { CurrencyCode } from './data/currency'
import { templateById, DEFAULT_TEMPLATE_ID, type DojoTemplate } from './data/templates'

export const GRID = { cols: 6, rows: 4 } // 24 cells, up to 12 agents
export const MAX_AGENTS = 12

export interface WAgent {
  id: string
  name: string
  fn: Department
  skinId: string
  tasks: string[]
  budgetXrp: number
  gx: number
  gy: number
}

export interface Dojo {
  id: string
  name: string
  /** environment template id (see data/templates) — drives the 3D scene look */
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
  /** Privy user id (did:privy:…) when signed in with Privy — used to map
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
  renameDojo: (id: string, name: string) => void
  setDojoTemplate: (id: string, templateId: string) => void
  deleteDojo: (id: string) => void
  setActiveDojo: (id: string) => void

  addAgent: (partial?: Partial<WAgent>) => string | null
  updateAgent: (id: string, patch: Partial<WAgent>) => void
  deleteAgent: (id: string) => void
  moveAgent: (id: string, gx: number, gy: number) => void
}

const KEY = 'dojoburo.workshop.v1'
const uid = () => Math.random().toString(36).slice(2, 10)
const DEPTS: Department[] = ['Leadership', 'Engineering', 'Finance', 'Growth', 'Product', 'People', 'Ops']
const DEPT_NAME: Record<Department, string> = {
  Leadership: 'Chief', Engineering: 'Engineer', Finance: 'Finance', Growth: 'Growth',
  Product: 'Product', People: 'People', Ops: 'Ops',
}

// The default HQ keeps the 12 named built-in agents, but each gets a maximally
// distinct skin so the office reads as a colourful, varied crew.
function seedDojo(): Dojo {
  const skins = variedSkins(MAX_AGENTS)
  const agents: WAgent[] = AGENTS.slice(0, MAX_AGENTS).map((a, i) => ({
    id: a.id,
    name: a.name,
    fn: a.department,
    skinId: skins[i].id,
    tasks: defaultTasksFor(a.department),
    budgetXrp: 5,
    gx: i % GRID.cols,
    gy: Math.floor(i / GRID.cols),
  }))
  return { id: uid(), name: 'HQ Dojo', template: 'dojo', agents }
}

// A new dojo from a template: a coherent-but-distinct starter crew in the
// template's palette, seated left-to-right.
function makeTemplatedDojo(name: string, tpl: DojoTemplate): Dojo {
  const skins = crewSkins(tpl.skinTheme, tpl.crew.length)
  const seen = new Map<string, number>()
  const agents: WAgent[] = tpl.crew.map((fn, i) => {
    const base = DEPT_NAME[fn]
    const n = (seen.get(base) ?? 0) + 1
    seen.set(base, n)
    return {
      id: 'a_' + uid(),
      name: n > 1 ? `${base} ${n}` : base,
      fn,
      skinId: skins[i % skins.length].id,
      tasks: defaultTasksFor(fn),
      budgetXrp: 5,
      gx: i % GRID.cols,
      gy: Math.floor(i / GRID.cols),
    }
  })
  return { id: uid(), name, template: tpl.id, agents }
}

function load(): { account: Account | null; dojos: Dojo[]; activeDojoId: string | null } {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const p = JSON.parse(raw)
      if (p && Array.isArray(p.dojos) && p.dojos.length) {
        // backfill the template field for dojos saved before templates existed
        for (const d of p.dojos) if (!d.template) d.template = DEFAULT_TEMPLATE_ID
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
  // persist() is the single save point — it writes localStorage and clears the
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
