// What a dojo team costs to run.
//
// A team's plan is a fixed list of steps, and one step is one task. That is the
// only honest number on a team card — no invented "from $X/month".
//
// What a task costs depends on who is paying for the model, and the card says
// which: on FOUNDER the run goes to the founder's own Claude key and costs
// nothing here; on MANAGED it draws on the month's included tasks. The dollar
// figure is the managed rate, shown as a hint rather than a bill.
import type { Archetype } from './archetypes'
import { TASK_USD } from './plans'

/** $ per task on the managed tier · the single source is data/plans.ts. */
export const CREDIT_USD = TASK_USD

export type BudgetTier = 'Light' | 'Medium' | 'Heavy'

export interface TeamBudget {
  /** tasks in one full run of the team's plan · one per step */
  credits: number
  /** the same run in dollars, at the managed rate */
  usd: number
  tier: BudgetTier
  /** how many apps the crew can reach (each is free to connect) */
  apps: number
}

const tierFor = (tasks: number): BudgetTier =>
  tasks <= 3 ? 'Light' : tasks <= 5 ? 'Medium' : 'Heavy'

/** Round to something a person reads without effort: $0.08, $0.15, $1.20. */
export function usdLabel(usd: number): string {
  if (usd < 0.01) return '<$0.01'
  if (usd < 1) return `$${usd.toFixed(2)}`
  return `$${usd.toFixed(2).replace(/\.00$/, '')}`
}

export function teamBudget(a: Archetype, appCount: number): TeamBudget {
  const tasks = Math.max(1, a.loop.length)
  return { credits: tasks, usd: tasks * TASK_USD, tier: tierFor(tasks), apps: appCount }
}

/** The combined budget for a whole selection of teams. */
export function totalBudget(list: TeamBudget[]): { credits: number; usd: number; apps: number } {
  return {
    credits: list.reduce((n, b) => n + b.credits, 0),
    usd: list.reduce((n, b) => n + b.usd, 0),
    apps: list.reduce((n, b) => n + b.apps, 0),
  }
}
