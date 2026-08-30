// The facts about this product, derived — never typed twice.
//
// Copy rots. "Twelve teammates" was written when there were twelve; add a
// thirteenth role and the landing page, the guide, the Academy and the support
// bot are all quietly lying, and nobody notices for months.
//
// So nothing here is a literal. Every number and every list is computed from the
// data the app actually runs on: the role registry, the archetype catalogue, the
// connector registry, the budget model, the curriculum. Import from here in copy
// and the copy cannot drift.
//
// scripts/check-content.mjs enforces the same thing for the places that cannot
// import (the server-side support prompt, index.html) — it fails the build when
// a written number no longer matches this file.
import { ROLE_AGENTS, COMPANY_IDS } from './roleAgents'
import { ARCHETYPES } from './archetypes'
import { CONNECTORS } from './connectors'
import { CREDIT_USD } from './budget'
import { SKINS } from './skins'
import { DOJO_TEMPLATES } from './templates'
import { TRACKS, LESSON_COUNT, TOTAL_MINUTES } from './academy'

/** Written-out numbers, so prose reads like prose. */
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
export const spell = (n: number): string => WORDS[n] ?? String(n)

/** The classic crew every full-company dojo ships with. */
export const CREW_COUNT = COMPANY_IDS.length
export const CREW_WORD = spell(CREW_COUNT)

/** Every teammate role that exists, including the specialists a team can add. */
export const ROLE_COUNT = ROLE_AGENTS.length

/** Ready-made teams in the catalogue. */
export const TEAM_COUNT = ARCHETYPES.length

/** Apps a teammate can be wired to. */
export const APP_COUNT = CONNECTORS.length

/** Looks and worlds a dojo can wear. */
export const SKIN_COUNT = SKINS.length
export const WORLD_COUNT = DOJO_TEMPLATES.length

/** Pricing · one step of a plan is about one credit. */
export const CREDIT_PRICE_USD = CREDIT_USD
/** "$0.02" · what one credit costs at Pro-pack rates. */
export const CREDIT_PRICE_LABEL = `$${CREDIT_USD.toFixed(2)}`
/** A typical four-step team run, in dollars. */
export const TYPICAL_RUN_STEPS = 4
export const TYPICAL_RUN_USD_LABEL = `$${(CREDIT_USD * TYPICAL_RUN_STEPS).toFixed(2)}`

/** The Academy. */
export const ACADEMY_LESSONS = LESSON_COUNT
export const ACADEMY_TRACKS = TRACKS.length
export const ACADEMY_MINUTES = TOTAL_MINUTES
export const ACADEMY_HOURS = Math.round((TOTAL_MINUTES / 60) * 10) / 10

/** The classic crew, named, in the order they are seeded. Used wherever copy
 *  lists the team so a renamed or added role shows up on its own. */
export const CREW_LIST = COMPANY_IDS
  .map((id) => ROLE_AGENTS.find((r) => r.id === id))
  .filter(Boolean)
  .map((r) => ({ id: r!.id, name: r!.name, title: r!.title }))

/** "Chief, Brandi, Weblos… and Sentinel" */
export const crewSentence = (): string => {
  const names = CREW_LIST.map((r) => r.name)
  if (names.length < 2) return names[0] ?? ''
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`
}

/**
 * The one paragraph every surface can quote when it needs to say what this is.
 * Regenerated from the data on every render, so it is never stale.
 */
export const elevator = (): string =>
  `DojoBuro is an agent workspace: you name a project, pick from ${TEAM_COUNT} ready-made teams, ` +
  `and each team arrives staffed with teammates already briefed and wired to the apps they need ` +
  `(${APP_COUNT} available). One step of a team's plan costs about one credit — a ${TYPICAL_RUN_STEPS}-step run is ` +
  `roughly ${TYPICAL_RUN_USD_LABEL}, and nothing at all on your own Claude key. ` +
  `The Dojo Academy teaches the whole thing free in ${ACADEMY_LESSONS} lessons.`

/** Everything the drift checker compares written copy against. */
export const FACTS = {
  CREW_COUNT, CREW_WORD, ROLE_COUNT, TEAM_COUNT, APP_COUNT,
  SKIN_COUNT, WORLD_COUNT,
  CREDIT_PRICE_LABEL, TYPICAL_RUN_STEPS, TYPICAL_RUN_USD_LABEL,
  ACADEMY_LESSONS, ACADEMY_TRACKS, ACADEMY_HOURS,
} as const
