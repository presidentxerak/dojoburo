// Per-agent CONTEXT · the .md file that defines how each agent thinks.
//
// Every agent ships with a precise context written for its speciality (mission,
// expertise, method, deliverables, boundaries), stored as a real Markdown file
// in src/data/contexts/<role>.md and bundled with the app.
//
// The context is:
//   · shown and editable in the agent's studio,
//   · sent with every run so the agent behaves like that specialist.
// A user edit is kept locally and wins over the shipped default; "Reset" brings
// the original back.
import { idbGet, idbSet, idbDel } from '../lib/idb'

// Vite bundles every context file at build time (raw text, eager).
const FILES = import.meta.glob('./contexts/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

/** The shipped context for a role, or '' when the role has none. */
export const DEFAULT_CONTEXTS: Record<string, string> = Object.fromEntries(
  Object.entries(FILES).map(([path, text]) => [path.replace(/^.*\/(.+)\.md$/, '$1'), text]),
)

export const hasContext = (roleId: string): boolean => !!DEFAULT_CONTEXTS[roleId]

const key = (dojoId: string, roleId: string) => `ctx.${dojoId || 'default'}.${roleId}`

/** The context in force for this agent: the user's edit if any, else the default. */
export async function loadContext(dojoId: string, roleId: string): Promise<string> {
  const custom = await idbGet<string>('projects', key(dojoId, roleId))
  return (custom ?? '').trim() || DEFAULT_CONTEXTS[roleId] || ''
}

/** Save a user-edited context for this agent (per company). */
export async function saveContext(dojoId: string, roleId: string, text: string): Promise<void> {
  await idbSet('projects', key(dojoId, roleId), text)
}

/** Drop the user's edit so the shipped context applies again. */
export async function resetContext(dojoId: string, roleId: string): Promise<void> {
  await idbDel('projects', key(dojoId, roleId))
}
