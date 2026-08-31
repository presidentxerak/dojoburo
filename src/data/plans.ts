// What DojoBuro sells, in one place.
//
// It used to be three places, disagreeing: the landing page sold credits at
// $1 each, the Billing panel sold four metered tiers ($12.50 / $40 / $150 for
// 300 / 1,500 / 8,000 tasks), and budget.ts priced a credit at $29/1500. A
// visitor could read two different prices for the same thing without leaving
// the product.
//
// The deeper problem was what those numbers were pricing. Metering tasks means
// reselling model tokens — a margin on somebody else's commodity, repriced
// whenever they choose, where the heaviest users cost the most and every plan
// is a bet that people do not use what they bought. At the quota those plans
// lost money: 8,000 tasks on the cheapest usable model costs $147 against a
// $150 price.
//
// So we sell the software instead. The teams, the orchestration, the
// deliverables, the connectors — the part that costs nothing to serve — and
// the founder brings the model. That is FOUNDER, and it is the headline: their
// key, their bill, their choice of model, and no meter between them and their
// own work. MANAGED exists for people who do not want to hold a key, and it is
// priced so that a founder who consumes the whole allowance is still
// profitable, which is the test the old plans failed.

export interface Plan {
  id: 'free' | 'founder' | 'managed'
  name: string
  usd: number
  /** the one line under the price */
  tagline: string
  /** true when the founder supplies their own model key */
  byok?: boolean
  /** tasks included per month · undefined means "not metered" */
  tasks?: number
  /** shown above the list */
  inclHead: string
  incl: string[]
  featured?: boolean
}

/** Tasks a month on the managed tier. Chosen so that a founder who uses every
 *  one of them still leaves a margin — see TASK_USD below. */
export const MANAGED_TASKS = 2000
export const MANAGED_USD = 49
export const FOUNDER_USD = 29

/** What one task is worth on the managed tier · $0.0245.
 *
 *  The floor under this is what a task costs to serve: about $0.018 on Haiku
 *  with three apps attached, and $0 whenever a free provider answers. So the
 *  worst case — every task served by Haiku, every task used — still returns
 *  about a quarter of the price. The old plans priced a task at $0.019 against
 *  the same $0.018 cost, which is not a margin. */
export const TASK_USD = MANAGED_USD / MANAGED_TASKS

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    usd: 0,
    tagline: 'Build a company and watch your team work. No card.',
    inclHead: 'Includes',
    incl: [
      'Every team and every app to explore',
      'One company, saved in this browser',
      'Runs on free and open models',
      'A daily allowance, then it waits for tomorrow',
    ],
  },
  {
    id: 'founder',
    name: 'Founder',
    usd: FOUNDER_USD,
    tagline: 'Bring your own Claude key. Your key, your bill, your model.',
    byok: true,
    featured: true,
    inclHead: 'Everything in Free, plus',
    incl: [
      'Unlimited runs · we never meter your work',
      'Your key, sealed server-side, billed by Anthropic to you',
      'Unlimited companies and dojo teams',
      'Every app connector',
      'A custom domain',
      'No DojoBuro badge',
    ],
  },
  {
    id: 'managed',
    name: 'Managed',
    usd: MANAGED_USD,
    tagline: 'No key, nothing to set up. We run the models for you.',
    tasks: MANAGED_TASKS,
    inclHead: 'Everything in Founder, plus',
    incl: [
      `${MANAGED_TASKS.toLocaleString('en-US')} tasks a month, included`,
      'No API key to find, hold or rotate',
      'We pick the model per task and absorb the cost',
      'Escalation to a stronger model where it earns its keep',
    ],
  },
]

export const PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p])) as Record<Plan['id'], Plan>

/** "$29" · plan prices are whole dollars, so no cents. */
export const planPrice = (p: Plan): string => (p.usd === 0 ? '$0' : `$${p.usd}`)
