// Per-agent workspace · a lightweight notepad + task list attached to any agent
// (used by custom agents, and available to any teammate). This is the agent's
// own "content": what it should do (tasks) and what you know about it (notes).
// Persisted to localStorage, keyed by agent id · 100% local, nothing uploaded.
import { create } from 'zustand'

export interface AgentTask {
  id: string
  text: string
  done: boolean
  createdAt: number
}

export interface AgentSpace {
  notes: string
  tasks: AgentTask[]
}

const KEY = 'dojoburo.agentspace.v1'
const uid = () => Math.random().toString(36).slice(2, 9)

function load(): Record<string, AgentSpace> {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') as Record<string, AgentSpace> } catch { return {} }
}

interface SpaceState {
  byAgent: Record<string, AgentSpace>
  space: (agentId: string) => AgentSpace
  setNotes: (agentId: string, notes: string) => void
  addTask: (agentId: string, text: string) => void
  toggleTask: (agentId: string, taskId: string) => void
  removeTask: (agentId: string, taskId: string) => void
}

const EMPTY: AgentSpace = { notes: '', tasks: [] }

export const useAgentSpace = create<SpaceState>((set, get) => {
  const persist = (byAgent: Record<string, AgentSpace>) => {
    try { localStorage.setItem(KEY, JSON.stringify(byAgent)) } catch { /* ignore */ }
  }
  const edit = (agentId: string, fn: (s: AgentSpace) => AgentSpace) => {
    const cur = get().byAgent[agentId] ?? EMPTY
    const byAgent = { ...get().byAgent, [agentId]: fn(cur) }
    set({ byAgent }); persist(byAgent)
  }
  return {
    byAgent: load(),
    space: (agentId) => get().byAgent[agentId] ?? EMPTY,
    setNotes: (agentId, notes) => edit(agentId, (s) => ({ ...s, notes })),
    addTask: (agentId, text) => {
      const t = text.trim(); if (!t) return
      edit(agentId, (s) => ({ ...s, tasks: [{ id: uid(), text: t, done: false, createdAt: Date.now() }, ...s.tasks] }))
    },
    toggleTask: (agentId, taskId) => edit(agentId, (s) => ({ ...s, tasks: s.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t)) })),
    removeTask: (agentId, taskId) => edit(agentId, (s) => ({ ...s, tasks: s.tasks.filter((t) => t.id !== taskId) })),
  }
})
