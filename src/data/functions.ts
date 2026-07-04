// Catalog of startup functions (departments) and the tasks an agent of that
// function can be given. Used by the agent editor: the user picks a function,
// then toggles which tasks the agent performs.
import type { Department } from './agents'

export interface TaskDef {
  id: string
  name: string
  /** indicative x402 price in XRP (0 = free) */
  price: number
}

export interface FunctionDef {
  id: Department
  label: string
  blurb: string
  tasks: TaskDef[]
}

const XRPL_TASKS: TaskDef[] = [
  { id: 'wallet', name: 'Manage XRPL wallet', price: 0 },
  { id: 'pay', name: 'Agentic payment (x402)', price: 0 },
  { id: 'track', name: 'Anchor behavior on-ledger', price: 0 },
]

export const FUNCTIONS: FunctionDef[] = [
  {
    id: 'Leadership',
    label: 'Leadership',
    blurb: 'Vision, roadmap, rituals and budget arbitration.',
    tasks: [
      { id: 'standup', name: 'Run daily standup', price: 0 },
      { id: 'okr', name: 'Set the OKRs', price: 0 },
      { id: 'allocate', name: 'Allocate budget (on-ledger)', price: 0.5 },
      ...XRPL_TASKS,
    ],
  },
  {
    id: 'Engineering',
    label: 'Engineering',
    blurb: 'Architecture, shipping features and code review.',
    tasks: [
      { id: 'ship', name: 'Ship a feature', price: 0 },
      { id: 'review', name: 'Code review', price: 0.2 },
      { id: 'deploy', name: 'Deploy', price: 0 },
      ...XRPL_TASKS,
    ],
  },
  {
    id: 'Finance',
    label: 'Finance',
    blurb: 'Treasury, runway and reconciliation.',
    tasks: [
      { id: 'reconcile', name: 'Reconcile treasury', price: 0 },
      { id: 'invoice', name: 'Issue x402 invoice', price: 0.15 },
      { id: 'report', name: 'Financial report', price: 0 },
      ...XRPL_TASKS,
    ],
  },
  {
    id: 'Growth',
    label: 'Growth / Sales',
    blurb: 'Leads, demos, campaigns and closing deals.',
    tasks: [
      { id: 'close', name: 'Close a deal', price: 0 },
      { id: 'getpaid', name: 'Get paid (x402)', price: 0 },
      { id: 'campaign', name: 'Launch a campaign', price: 0.15 },
      ...XRPL_TASKS,
    ],
  },
  {
    id: 'Product',
    label: 'Product / Design',
    blurb: 'Roadmap, specs and design.',
    tasks: [
      { id: 'spec', name: 'Write a spec', price: 0 },
      { id: 'design', name: 'Design a screen', price: 0 },
      { id: 'kanban', name: 'Groom the backlog', price: 0 },
      ...XRPL_TASKS,
    ],
  },
  {
    id: 'People',
    label: 'People / HR',
    blurb: 'Morale, hiring and culture.',
    tasks: [
      { id: 'morale', name: 'Boost morale', price: 0 },
      { id: 'hire', name: 'Screen a candidate', price: 0 },
      ...XRPL_TASKS,
    ],
  },
  {
    id: 'Ops',
    label: 'Ops / Data',
    blurb: 'Uptime, dashboards and signals.',
    tasks: [
      { id: 'deploy', name: 'Keep services up', price: 0 },
      { id: 'dashboard', name: 'Build a dashboard', price: 0 },
      { id: 'analysis', name: 'On-ledger analysis', price: 0 },
      ...XRPL_TASKS,
    ],
  },
]

export const FUNCTION_BY_ID: Record<string, FunctionDef> = Object.fromEntries(FUNCTIONS.map((f) => [f.id, f]))

export function defaultTasksFor(fn: Department): string[] {
  return (FUNCTION_BY_ID[fn]?.tasks ?? []).slice(0, 4).map((t) => t.id)
}
