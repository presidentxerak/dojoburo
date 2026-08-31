// ---------------------------------------------------------------------------
// DojoBuro global state · the hero, the reward/event game layer, the office
// runtime (moods, banter, stats) and the toasts. The wallets, the on-ledger
// settlement and the skill orchestrator that drove them are gone: the product
// is the work the teammates produce, not an internal economy.
// ---------------------------------------------------------------------------
import { create } from 'zustand'
import { AGENTS, AGENT_BY_ID } from './data/agents'
import { agentLabel } from './agentView'
import { pickEvent, tierForLevel, xpForLevel } from './data/events'
import { loadSceneId, saveSceneId, type SceneId } from './data/scenes'

export type Mood = 'idle' | 'work' | 'happy' | 'think' | 'talk' | 'love' | 'error'
export type Theme = 'light' | 'dark'

export interface Activity {
  id: string
  ts: number
  agentId: string
  skill: string
  level: 'info' | 'success' | 'error'
  message: string
  txHash?: string
}

export interface Toast {
  id: string
  badge: string
  color: string
  title: string
  text: string
  kind: 'event' | 'reward' | 'level'
  /** optional link (e.g. an explorer URL) · makes the toast clickable */
  url?: string
}

export interface AgentStats {
  xp: number
  level: number
  coins: number
  tasksDone: number
}

interface RuntimeAgent {
  mood: Mood
  busy: boolean
  lastSkill: string | null
  moodUntil: number
}

export interface Banter {
  agentId: string
  who: 'hero' | 'agent'
  text: string
}

interface DojoState {
  theme: Theme
  runtime: Record<string, RuntimeAgent>
  stats: Record<string, AgentStats>
  activity: Activity[]
  toasts: Toast[]
  notifications: (Toast & { ts: number })[]
  settingsOpen: boolean
  dojosOpen: boolean
  selectedAgent: string | null
  heroTargetId: string
  banter: Banter | null
  sceneId: SceneId
  usage: { credits: number; tokens: number; tx: number }
  showStats: boolean
  /** monotonic counter · bumped whenever any task/deliverable completes, so the
   *  panda mascot can dance and cheer the team on. */
  cheerTick: number

  setTheme: (t: Theme) => void
  setScene: (id: SceneId) => void

  selectAgent: (id: string | null) => void
  setMood: (id: string, mood: Mood, ms?: number) => void
  openStats: () => void
  closeStats: () => void



  grantXp: (agentId: string, xp: number, coins: number) => void
  /** celebrate a completed task · the mascot dances and cheers the crew. */
  cheer: () => void
  fireEvent: () => void
  pushToast: (t: Omit<Toast, 'id'>) => void
  dismissToast: (id: string) => void
  clearNotifications: () => void
  setSettingsOpen: (v: boolean) => void
  setDojosOpen: (v: boolean) => void

  log: (a: Omit<Activity, 'id' | 'ts'>) => void
}

const now = () => {
  try {
    return Date.now()
  } catch {
    return 0
  }
}
let seq = 0
const uid = () => `${now()}-${seq++}`
function seedRuntime(): Record<string, RuntimeAgent> {
  const r: Record<string, RuntimeAgent> = {}
  for (const a of AGENTS) r[a.id] = { mood: 'idle', busy: false, lastSkill: null, moodUntil: 0 }
  return r
}

function loadStats(): Record<string, AgentStats> {
  let saved: Record<string, Partial<AgentStats>> = {}
  try {
    const raw = localStorage.getItem('dojoburo.stats')
    if (raw) saved = JSON.parse(raw)
  } catch {
    /* ignore */
  }
  const out: Record<string, AgentStats> = {}
  for (const a of AGENTS) {
    const s = saved[a.id] ?? {}
    out[a.id] = { xp: s.xp ?? 0, level: s.level ?? 1, coins: s.coins ?? 0, tasksDone: s.tasksDone ?? 0 }
  }
  return out
}
function saveStats(stats: Record<string, AgentStats>) {
  try {
    localStorage.setItem('dojoburo.stats', JSON.stringify(stats))
  } catch {
    /* ignore */
  }
}

function loadTheme(): Theme {
  return localStorage.getItem('dojoburo.theme') === 'dark' ? 'dark' : 'light'
}



export const useDojo = create<DojoState>((set, get) => ({
  theme: loadTheme(),
  runtime: seedRuntime(),
  stats: loadStats(),
  activity: [],
  toasts: [],
  notifications: [],
  settingsOpen: false,
  dojosOpen: false,
  selectedAgent: null,
  heroTargetId: 'home',
  banter: null,
  sceneId: loadSceneId(),
  usage: { credits: 0, tokens: 0, tx: 0 },
  showStats: false,
  cheerTick: 0,

  openStats: () => {
    set({ showStats: true, selectedAgent: null })
  },
  closeStats: () => set({ showStats: false }),

  setScene: (id) => {
    saveSceneId(id)
    set({ sceneId: id })
  },

  log: (a) => set((s) => ({ activity: [{ ...a, id: uid(), ts: now() }, ...s.activity].slice(0, 200) })),

  pushToast: (t) => {
    const toast = { ...t, id: uid() }
    set((s) => ({
      toasts: [...s.toasts, toast].slice(-4),
      notifications: [{ ...toast, ts: now() }, ...s.notifications].slice(0, 40),
    }))
    setTimeout(() => get().dismissToast(toast.id), 4200)
  },
  dismissToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
  clearNotifications: () => set({ notifications: [] }),
  setSettingsOpen: (v) => set({ settingsOpen: v }),
  setDojosOpen: (v) => set({ dojosOpen: v }),

  setTheme: (t) => {
    localStorage.setItem('dojoburo.theme', t)
    document.documentElement.dataset.theme = t
    set({ theme: t })
  },

  // one merged sound control: flips music + sound-fx together







  selectAgent: (id) => set({ selectedAgent: id }),

  setMood: (id, mood, ms = 2200) =>
    set((s) => ({ runtime: { ...s.runtime, [id]: { ...s.runtime[id], mood, moodUntil: now() + ms } } })),







  cheer: () => set((s) => ({ cheerTick: s.cheerTick + 1 })),

  grantXp: (agentId, xp, coins) => {
    const s = get()
    const cur = s.stats[agentId] ?? { xp: 0, level: 1, coins: 0, tasksDone: 0 }
    let newXp = cur.xp + xp
    let level = cur.level
    let leveled = false
    while (newXp >= xpForLevel(level)) {
      newXp -= xpForLevel(level)
      level += 1
      leveled = true
    }
    const next = { ...cur, xp: newXp, level, coins: cur.coins + coins }
    const stats = { ...s.stats, [agentId]: next }
    set({ stats })
    saveStats(stats)
    if (leveled) {
      s.setMood(agentId, 'love', 2600)
      s.pushToast({ kind: 'level', badge: 'LVL', color: '#7c5cdf', title: `${agentLabel(agentId)} reached level ${level}`, text: `New tier unlocked: ${tierForLevel(level)}.` })
    } else if (coins > 0) {
    }
  },

  fireEvent: () => {
    const s = get()
    const ev = pickEvent()
    const targets = ev.target === 'all' ? AGENTS.map((a) => a.id) : [AGENTS[Math.floor(Math.random() * AGENTS.length)].id]
    const whoName = ev.target === 'all' ? 'The team' : AGENT_BY_ID[targets[0]]?.name ?? ''
    for (const id of targets) {
      s.setMood(id, ev.mood, 2400)
      s.grantXp(id, ev.xp, ev.coins)
    }
    s.pushToast({ kind: 'event', badge: ev.tag, color: ev.color, title: ev.title, text: ev.message(whoName) })
    s.log({ agentId: targets[0], skill: 'event', level: ev.good ? 'success' : 'info', message: `${ev.title}: ${ev.message(whoName)} (+${ev.xp} XP, +${ev.coins} coins)` })
  },

}))

// --- helpers ---------------------------------------------------------------







