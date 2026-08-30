// How hard your team works · the token dial.
//
// Every run sends a prompt to a model and gets text back, and both halves are
// billed in tokens. Three things move that number more than anything else:
//
//   · how long the answer is allowed to be   (the output ceiling)
//   · whether the model thinks before it writes (extended thinking)
//   · how many connected apps ride along      (each one adds tool definitions
//     to the request, on every single step)
//
// So those are the three things a mode changes. Nothing here is a marketing
// tier: pick a mode and you can point at exactly what it did differently.
//
// The estimates are honest ranges measured against the app's own task prompts,
// not a promise — the real number for every run is recorded as it happens (see
// agents/usageMeter) so the founder always has the actual figure, not ours.

export type EffortId = 'saver' | 'balanced' | 'max'

export interface EffortMode {
  id: EffortId
  label: string
  /** the one line under the name */
  tagline: string
  glyph: string
  tint: string
  /** hard ceiling on the answer, in tokens */
  maxTokens: number
  /** let the model think before answering · better on hard work, costs tokens */
  thinking: boolean
  /** how many of a teammate's connected apps travel with the request */
  maxApps: number
  /** what it is genuinely good for */
  bestFor: string
  /** what you give up */
  tradeoff: string
  /** typical tokens for ONE step, input + output, with no apps attached */
  typical: [number, number]
  /** what the founder sees on the card */
  points: string[]
}

export const EFFORT_MODES: EffortMode[] = [
  {
    id: 'saver',
    label: 'Saver',
    tagline: 'Short answers, no apps attached. The cheapest way to work.',
    glyph: '◦',
    tint: '#1fa563',
    maxTokens: 1500,
    thinking: false,
    maxApps: 0,
    bestFor: 'Drafting, exploring an idea, tuning a brief before you commit.',
    tradeoff: 'Answers stop earlier, and your team writes instead of acting — no app is touched.',
    typical: [900, 1200],
    points: [
      'Answers capped at 1,500 tokens',
      'No connected apps sent with the run',
      'Nothing is written to your real accounts',
    ],
  },
  {
    id: 'balanced',
    label: 'Balanced',
    tagline: 'Full answers, the apps that matter. The everyday setting.',
    glyph: '◈',
    tint: '#2f6bff',
    maxTokens: 4000,
    thinking: false,
    maxApps: 3,
    bestFor: 'Almost everything. Start here and only change it when you have a reason.',
    tradeoff: 'On a genuinely hard problem the answer can be shallower than Max.',
    typical: [2200, 3000],
    points: [
      'Answers capped at 4,000 tokens',
      'Up to 3 connected apps per run',
      'Real actions in those apps',
    ],
  },
  {
    id: 'max',
    label: 'Max',
    tagline: 'Long answers, thinking on, every app. For work that has to be right.',
    glyph: '▲',
    tint: '#7b5cff',
    maxTokens: 8000,
    thinking: true,
    maxApps: 8,
    bestFor: 'The run you are going to ship: a launch plan, a real campaign, the final brief.',
    tradeoff: 'Three to five times the tokens of Saver, and noticeably slower.',
    typical: [6000, 9000],
    points: [
      'Answers capped at 8,000 tokens',
      'The model thinks before it writes',
      'Every connected app available',
    ],
  },
]

export const EFFORT_BY_ID: Record<EffortId, EffortMode> =
  Object.fromEntries(EFFORT_MODES.map((m) => [m.id, m])) as Record<EffortId, EffortMode>

export const DEFAULT_EFFORT: EffortId = 'balanced'

/** Tokens a single step is likely to cost in this mode, apps included. */
export function estimateStep(mode: EffortMode, appsAttached = 0): number {
  const [inTok, outTok] = mode.typical
  // Each attached app ships its tool definitions with every request. ~400 tokens
  // is what the app's own connectors measure out at; it is a floor, not a cap.
  const apps = Math.min(appsAttached, mode.maxApps) * 400
  return inTok + outTok + apps
}

/** Tokens a whole plan is likely to cost. */
export const estimateRun = (mode: EffortMode, steps: number, appsAttached = 0): number =>
  estimateStep(mode, appsAttached) * Math.max(1, steps)

/** "12.4k" · the way token counts read at a glance. */
export function tokLabel(n: number): string {
  if (n < 1000) return String(Math.round(n))
  if (n < 100_000) return `${(n / 1000).toFixed(n < 10_000 ? 1 : 0)}k`
  return `${(n / 1_000_000).toFixed(2)}M`
}

/**
 * What those tokens cost, in dollars, if they run on YOUR OWN Claude key.
 *
 * Published Sonnet rates: $3 per million in, $15 per million out. We do not know
 * the split ahead of time, so this uses the mode's own typical ratio — it is an
 * order-of-magnitude figure, and the UI says so rather than pretending to bill.
 */
export function usdFor(mode: EffortMode, totalTokens: number): number {
  const [i, o] = mode.typical
  const share = o / (i + o)
  return (totalTokens * (1 - share) * 3 + totalTokens * share * 15) / 1_000_000
}

export const usdLabel = (usd: number): string =>
  usd < 0.01 ? '<$0.01' : usd < 1 ? `$${usd.toFixed(2)}` : `$${usd.toFixed(2)}`
