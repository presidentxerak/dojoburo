// What a dojo team costs to run.
//
// The whole app prices work the same way: one task ≈ one credit. A team's plan
// is a fixed list of steps, so a full run of that team costs one credit per
// step. That is the only honest number we have, and it is the one shown on the
// card — no invented "from $X/month".
//
// Money is a secondary hint: credits are bought in packs, and the rate depends
// on the plan (Solo works out around $0.04 a credit, Pro around $0.02). We show
// the Pro rate and say so, rather than pretending there is one price.
//
// And the important caveat, repeated wherever the number appears: with your own
// Claude key the work runs on your key and costs no credits at all.
import type { Archetype } from './archetypes'

/** $ per credit at Pro-pack rates ($29 for 1,500 credits). */
export const CREDIT_USD = 29 / 1500

export type BudgetTier = 'Light' | 'Medium' | 'Heavy'

export interface TeamBudget {
  /** credits for one full run of the team's plan */
  credits: number
  /** the same run, in dollars, at Pro rates */
  usd: number
  tier: BudgetTier
  /** how many apps the crew can reach (each is free to connect) */
  apps: number
}

const tierFor = (credits: number): BudgetTier =>
  credits <= 3 ? 'Light' : credits <= 5 ? 'Medium' : 'Heavy'

/** Round to something a person reads without effort: $0.08, $0.15, $1.20. */
export function usdLabel(usd: number): string {
  if (usd < 0.01) return '<$0.01'
  if (usd < 1) return `$${usd.toFixed(2)}`
  return `$${usd.toFixed(2).replace(/\.00$/, '')}`
}

export function teamBudget(a: Archetype, appCount: number): TeamBudget {
  const credits = Math.max(1, a.loop.length)
  return { credits, usd: credits * CREDIT_USD, tier: tierFor(credits), apps: appCount }
}

/** The combined budget for a whole selection of teams. */
export function totalBudget(list: TeamBudget[]): { credits: number; usd: number; apps: number } {
  return {
    credits: list.reduce((n, b) => n + b.credits, 0),
    usd: list.reduce((n, b) => n + b.usd, 0),
    apps: list.reduce((n, b) => n + b.apps, 0),
  }
}
