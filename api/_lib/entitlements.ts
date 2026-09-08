// What a plan actually buys.
//
// The plan cards became buyable before anything read them back, which is the
// exact fault the audit found in the old checkout: money in, nothing out. This
// module is the other half — one table saying what each plan grants, and one
// function that answers "may this run go ahead?".
//
// Three things decided here, and each of them is a decision rather than a
// detail:
//
//   1. The allowance belongs to the ORGANISATION, not the person.
//      A company buys Managed once and its 2,000 tasks are the company's to
//      share. Metering them per member would mean a team of four silently got
//      four times what they paid for, and a solo founder a quarter of it.
//
//   2. Managed is metered in TASKS, because tasks are what was sold.
//      The free tier meters tokens as well, because a Saver run and a Max run
//      are not the same thing to give away. On a paid plan the token ceiling is
//      a runaway guard set well above the task budget, not the product limit —
//      a customer who bought 2,000 tasks should get 2,000 tasks.
//
//   3. past_due keeps its allowance.
//      The webhook deliberately does not take the plan away on a failed
//      payment, and neither does this. Stripe retries for days; the ending is
//      `customer.subscription.deleted`, which sets the plan back to free on its
//      own.
//
// None of this touches a run on the user's OWN Claude key. That is billed by
// Anthropic to them, costs the operator nothing, and has never been metered.
import type { Pool } from 'pg'

export type Plan = 'free' | 'founder' | 'managed'

export interface Grant {
  /** how many runs the window allows */
  runs: number
  /** total tokens the window allows · a guard on paid plans, the limit on free */
  tokens: number
  /** the period the counters are read over */
  window: 'day' | 'month'
  /** whose counters are added up */
  scope: 'account' | 'org'
}

const int = (v: string | undefined, d: number): number => {
  const n = v ? parseInt(v, 10) : NaN
  return Number.isFinite(n) ? n : d
}
const ENV = process.env as Record<string, string | undefined>

/**
 * The table. Every number is overridable by an environment variable so the
 * operator can retune without a deploy — and so a demo, a hackathon or a bad
 * month can be handled by changing one value rather than shipping code.
 *
 * FREE is the existing free tier, unchanged: 10 runs and 25,000 tokens a day,
 * which is roughly four Balanced runs. Enough to see the product work, which is
 * what a free tier is for.
 *
 * FOUNDER's proposition is "your key, your bill" — with a key attached nothing
 * here applies at all. The daily allowance below is what a Founder gets on the
 * operator's free providers BEFORE they paste a key. It is deliberately modest:
 * that pool is shared across every account on the platform, and Founder does
 * not buy tokens. It exists so that paying £29 and then finding the same wall
 * as a free account does not happen.
 *
 * MANAGED is the plan that genuinely buys capacity: 2,000 tasks a month, the
 * number printed on the card, held against the whole company.
 */
export const GRANTS: Record<Plan, Grant> = {
  free: {
    runs: int(ENV.WORK_FREE_DAILY, 10),
    tokens: int(ENV.WORK_FREE_DAILY_TOKENS, 25_000),
    window: 'day',
    scope: 'account',
  },
  founder: {
    runs: int(ENV.WORK_FOUNDER_DAILY, 50),
    tokens: int(ENV.WORK_FOUNDER_DAILY_TOKENS, 150_000),
    window: 'day',
    scope: 'org',
  },
  managed: {
    runs: int(ENV.WORK_MANAGED_MONTHLY, 2_000),
    // ~3,000 tokens a task, so a company that uses every task it bought is
    // nowhere near this. It stops a loop, not a customer.
    tokens: int(ENV.WORK_MANAGED_MONTHLY_TOKENS, 6_000_000),
    window: 'month',
    scope: 'org',
  },
}

export interface Standing {
  plan: Plan
  /** null when the account belongs to no organisation yet */
  orgId: string | null
  grant: Grant
  usedRuns: number
  usedTokens: number
  allowed: boolean
  reason?: 'runs' | 'tokens'
}

/**
 * What this account is entitled to right now, and whether it has spent it.
 *
 * Never throws. A database that is unreachable must not stop a founder working
 * — the in-memory IP rate limit is still in front of this, and refusing a run
 * because a metering query failed is a worse failure than an uncounted run.
 */
export async function standingOf(
  pool: Pool,
  accountId: string,
): Promise<Standing> {
  const fallback: Standing = {
    plan: 'free', orgId: null, grant: GRANTS.free, usedRuns: 0, usedTokens: 0, allowed: true,
  }
  try {
    const seat = await pool.query(
      `select o.id, o.plan, o.plan_status from org_members m
         join organisations o on o.id = m.org_id
        where m.account_id = $1 limit 1`,
      [accountId],
    )
    const row = seat.rows[0]
    // 'cancelled' is already written back as plan 'free' by the webhook, so the
    // only status that still carries a plan here is active or past_due — and
    // both of them keep it.
    const plan: Plan = row && isPlan(row.plan) ? row.plan : 'free'
    const orgId: string | null = row?.id ?? null
    const grant = GRANTS[plan]

    const used = await usage(pool, { accountId, orgId, grant })
    const overTokens = used.tokens >= grant.tokens
    const overRuns = used.runs >= grant.runs
    return {
      plan, orgId, grant,
      usedRuns: used.runs,
      usedTokens: used.tokens,
      allowed: !overTokens && !overRuns,
      reason: overTokens ? 'tokens' : overRuns ? 'runs' : undefined,
    }
  } catch {
    return fallback
  }
}

const isPlan = (v: unknown): v is Plan => v === 'free' || v === 'founder' || v === 'managed'

/**
 * Runs and tokens already spent inside the grant's window.
 *
 * An organisation-scoped grant sums every member's usage. An account with no
 * organisation — or a grant scoped to the account — reads its own rows, which
 * is also what happens on a deployment where db/orgs.sql was never applied.
 */
async function usage(
  pool: Pool,
  { accountId, orgId, grant }: { accountId: string; orgId: string | null; grant: Grant },
): Promise<{ runs: number; tokens: number }> {
  const since = grant.window === 'month' ? `date_trunc('month', current_date)` : `current_date`
  const sql = grant.scope === 'org' && orgId
    ? `select coalesce(sum(w.free_runs), 0)::bigint  as runs,
              coalesce(sum(w.in_tokens + w.out_tokens), 0)::bigint as tokens
         from work_usage w
         join org_members m on m.account_id = w.account_id
        where m.org_id = $1 and w.day >= ${since}`
    : `select coalesce(sum(free_runs), 0)::bigint  as runs,
              coalesce(sum(in_tokens + out_tokens), 0)::bigint as tokens
         from work_usage
        where account_id = $1 and day >= ${since}`
  const r = await pool.query(sql, [grant.scope === 'org' && orgId ? orgId : accountId])
  return { runs: Number(r.rows[0]?.runs ?? 0), tokens: Number(r.rows[0]?.tokens ?? 0) }
}

/**
 * What is left, in the shape the app shows a founder.
 *
 * `remaining` is never negative: a company that went over — which the token
 * guard permits, since a run is checked before it knows what it will cost —
 * should read "0 left", not "-3 left".
 */
export function remaining(s: Standing): { runs: number; tokens: number; window: 'day' | 'month' } {
  return {
    runs: Math.max(0, s.grant.runs - s.usedRuns),
    tokens: Math.max(0, s.grant.tokens - s.usedTokens),
    window: s.grant.window,
  }
}
