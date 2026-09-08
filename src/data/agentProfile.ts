// The public profile of a teammate, read out of the context file it actually runs on.
//
// Each agent ships with src/data/contexts/<role>.md — the context sent with
// every run, so it is the most accurate description of that agent that exists.
// Writing a second, marketing description beside it would create two truths and
// one of them would go stale; the app has been burned by that before (three
// places disagreed about the price).
//
// So the public page reads the same file. Change how an agent works and its
// page changes with it. The sections lifted are the ones a buyer needs —
// mission, expertise, deliverables, who it works with, and what it will not do.
//
// Boundaries is on the page deliberately. A page that says what the thing
// refuses to do is worth more to a business than another paragraph of claims,
// and it is the section a competitor's page never has.
import { DEFAULT_CONTEXTS } from './agentContext'

export interface AgentProfile {
  /** the one-paragraph mission, as prose */
  mission: string
  /** what it knows · bullets */
  expertise: string[]
  /** what you get back, as prose */
  output: string
  /** which teammates it hands to and receives from, as prose */
  worksWith: string
  /** what it will not do · bullets */
  boundaries: string[]
}

/** Split a context file into its `## ` sections. */
function sections(md: string): Record<string, string> {
  const out: Record<string, string> = {}
  // The body of each `## Heading` runs until the next one, or the end of the
  // file — `(?![\s\S])` is end-of-input, which is what `\z` would be in a
  // language that had it. Plain `$` cannot do the job here: the `m` flag makes
  // it match at every line break.
  const re = /^## +(.+?)[ \t]*$\n([\s\S]*?)(?=^## |(?![\s\S]))/gm
  let m: RegExpExecArray | null
  while ((m = re.exec(md))) out[m[1].trim().toLowerCase()] = m[2].trim()
  return out
}

/** `- one\n- two` → ['one', 'two']. Non-bullet lines are ignored. */
const bullets = (s: string): string[] =>
  s.split('\n')
    .map((l) => l.trim())
    .filter((l) => l.startsWith('- '))
    .map((l) => l.slice(2).trim())
    .filter(Boolean)

/** Collapse a wrapped paragraph back into one line. */
const prose = (s: string): string =>
  s.split(/\n{2,}/)[0].replace(/\s*\n\s*/g, ' ').trim()

/**
 * The public profile for a role, or null when it ships no context.
 *
 * Every section is optional at the type level even though all eighteen files
 * currently carry all eight: a context is user-editable, and a page that throws
 * because someone deleted a heading is worse than a page with one section less.
 */
export function agentProfile(roleId: string): AgentProfile | null {
  const md = DEFAULT_CONTEXTS[roleId]
  if (!md) return null
  const s = sections(md)
  return {
    mission: prose(s.mission || s.identity || ''),
    expertise: bullets(s.expertise || ''),
    output: prose(s.output || ''),
    worksWith: prose(s['works with'] || ''),
    boundaries: bullets(s.boundaries || ''),
  }
}
