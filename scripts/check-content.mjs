// Content drift check · the build fails when written copy stops being true.
//
// Most copy now imports src/data/facts.ts, so it cannot go stale. Three places
// cannot import it — the server-side support prompt (api/chat.ts runs in its own
// bundle), index.html, and the Academy's prose — and those are exactly the
// places a number quietly rots for months.
//
// So this script recomputes the facts from the real data and asserts that every
// written claim still matches. Add a rule the day you write a number down.
//
// Run standalone with `npm run check:content`; the build runs it too.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')

// --- load the real data (strip the types with esbuild, then import) ---------
const { build } = await import('esbuild')
async function load(entry) {
  const out = await build({
    entryPoints: [path.join(ROOT, entry)],
    bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
    // data modules only · anything that reaches for the DOM is not a fact source
    external: ['react', 'zustand'],
  })
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'))
}

const roles = await load('src/data/roleAgents.ts')
const arch = await load('src/data/archetypes.ts')
const conns = await load('src/data/connectors.ts')
const budget = await load('src/data/budget.ts')
const academy = await load('src/data/academy.ts')

const F = {
  crew: roles.COMPANY_IDS.length,
  roles: roles.ROLE_AGENTS.length,
  teams: arch.ARCHETYPES.length,
  apps: conns.CONNECTORS.length,
  creditUsd: budget.CREDIT_USD,
  lessons: academy.LESSON_COUNT,
  tracks: academy.TRACKS.length,
  hours: Math.round((academy.TOTAL_MINUTES / 60) * 10) / 10,
}
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
const runUsd = (F.creditUsd * 4).toFixed(2)

// --- the rules -------------------------------------------------------------
// Each rule says: in this file, this claim must be present, and the stale
// variants must not be. `must` may be a string or a RegExp.
const RULES = [
  // the support bot's server-side prompt · a separate bundle, cannot import facts
  { file: 'api/chat.ts', must: new RegExp(`${F.teams} ready-made teams`), why: `the catalogue has ${F.teams} ready-made teams` },
  { file: 'api/chat.ts', must: /about one credit per task/i, why: 'the pricing model is one step ≈ one credit' },
  { file: 'api/chat.ts', must: new RegExp(`\\$${runUsd.replace('.', '\\.')}`), why: `a 4-step run is $${runUsd} at Pro rates` },
  { file: 'api/chat.ts', must: /Dojo Academy/, why: 'the bot must know the Academy exists' },

  // the Academy's own prose
  { file: 'src/data/academy.ts', must: new RegExp(`about one credit`, 'i'), why: 'the pricing lesson must state the real model' },
  { file: 'src/data/academy.ts', forbid: /(ships|comes) with (twelve|\d+) teammates/i, why: 'a crew-size claim belongs in facts.ts, not in a lesson' },

  // the landing page and the guide must not hardcode counts any more
  { file: 'src/Landing.tsx', forbid: /\b12 studios\b/, why: 'use CREW_COUNT from data/facts' },
  { file: 'src/Landing.tsx', forbid: /(ships|comes) with twelve/i, why: 'use CREW_WORD from data/facts' },
  { file: 'src/DojoGuide.tsx', forbid: /\b12 studios\b/, why: 'use CREW_COUNT from data/facts' },
  { file: 'src/DojoGuide.tsx', forbid: /(ships|comes) with twelve/i, why: 'use CREW_WORD from data/facts' },
  { file: 'src/support/knowledge.ts', forbid: /(ships|comes) with twelve/i, why: 'use CREW_WORD from data/facts' },

  // the Academy home + the landing invitation quote the lesson count
  { file: 'src/Landing.tsx', must: new RegExp(`${F.lessons} lessons`), why: `the Academy has ${F.lessons} lessons` },

  // index.html · the one description a crawler reads before any JS runs
  { file: 'index.html', must: /<meta name="description"/, why: 'the site needs a description' },
]

let bad = 0
for (const r of RULES) {
  let src
  try { src = read(r.file) } catch { console.log(`FAIL  ${r.file} · file not found`); bad++; continue }
  if (r.must && !(r.must instanceof RegExp ? r.must.test(src) : src.includes(r.must))) {
    console.log(`FAIL  ${r.file} · missing: ${r.why}`)
    console.log(`      expected ${r.must}`)
    bad++
  }
  if (r.forbid && r.forbid.test(src)) {
    console.log(`FAIL  ${r.file} · stale copy: ${r.why}`)
    console.log(`      found ${r.forbid}`)
    bad++
  }
}

// --- the effort modes exist in two places on purpose ------------------------
// The client shows them; the SERVER enforces them, because a browser cannot be
// trusted with a token ceiling. That means two tables, which means they can
// drift — so they are compared here on every build.
const effort = await load('src/data/effort.ts')
const runSrc = read('api/agent-run.ts')
for (const m of effort.EFFORT_MODES) {
  const row = new RegExp(`${m.id}:\\s*\\{\\s*maxTokens:\\s*(\\d+),\\s*thinking:\\s*(true|false),\\s*maxApps:\\s*(\\d+)`).exec(runSrc)
  if (!row) { console.log(`FAIL  agent-run · effort mode "${m.id}" is missing server-side`); bad++; continue }
  const [, mt, th, ma] = row
  if (Number(mt) !== m.maxTokens) { console.log(`FAIL  effort "${m.id}" · maxTokens ${m.maxTokens} in the app, ${mt} on the server`); bad++ }
  if ((th === 'true') !== m.thinking) { console.log(`FAIL  effort "${m.id}" · thinking disagrees between app and server`); bad++ }
  if (Number(ma) !== m.maxApps) { console.log(`FAIL  effort "${m.id}" · maxApps ${m.maxApps} in the app, ${ma} on the server`); bad++ }
}

// --- internal consistency of the data itself -------------------------------
// A team whose plan names an agent that is not on its crew can never run that
// step. This has nothing to do with copy, but it is the same class of drift.
for (const a of arch.ARCHETYPES) {
  for (const s of a.loop) {
    if (!a.agents.includes(s.agent)) {
      console.log(`FAIL  archetypes · "${a.label}" step "${s.label}" is owned by "${s.agent}", who is not on its crew`)
      bad++
    }
    if (!roles.ROLE_BY_ID[s.agent]) {
      console.log(`FAIL  archetypes · "${a.label}" step "${s.label}" names unknown role "${s.agent}"`)
      bad++
    }
  }
  for (const id of a.agents) {
    if (!roles.ROLE_BY_ID[id]) { console.log(`FAIL  archetypes · "${a.label}" crew has unknown role "${id}"`); bad++ }
  }
  if (a.agents[0] !== 'chief') { console.log(`FAIL  archetypes · "${a.label}" does not start with the team lead`); bad++ }
}
// Two teammates sitting in the same dojo must not wear the same 3D face · a
// team of identical strangers with different names is a bug you only see in a
// screenshot, never in a diff. The map is read as source (it lives in a .tsx
// beside JSX we cannot import here) — the shape is a flat id: 'char' record.
{
  const src = read('src/components/landing/TeamCards.tsx')
  const block = /export const AGENT_CHAR[^=]*=\s*\{([\s\S]*?)\n\}/.exec(src)
  if (!block) { console.log('FAIL  TeamCards · AGENT_CHAR is not where check-content expects it'); bad++ }
  else {
    const face = Object.fromEntries([...block[1].matchAll(/(\w+):\s*'([^']+)'/g)].map((m) => [m[1], m[2]]))
    for (const r of roles.ROLE_AGENTS) {
      if (!face[r.id]) { console.log(`FAIL  AGENT_CHAR · "${r.id}" has no 3D character (it would fall back to somebody else's)`); bad++ }
    }
    for (const a of arch.ARCHETYPES) {
      const used = {}
      for (const id of a.agents) {
        const f = face[id]
        if (f && used[f]) { console.log(`FAIL  AGENT_CHAR · "${a.label}" gives "${id}" and "${used[f]}" the same face (${f})`); bad++ }
        used[f] = id
      }
    }
  }
}
// every app a role reaches for must exist in the connector registry
const APP_IDS = new Set(conns.CONNECTORS.map((c) => c.id))
for (const r of roles.ROLE_AGENTS) {
  for (const id of r.apps ?? []) {
    if (!APP_IDS.has(id)) { console.log(`FAIL  roleAgents · "${r.name}" lists unknown app "${id}"`); bad++ }
  }
}
// every Academy lesson must be reachable and uniquely addressed
const seen = new Set()
for (const { track, lesson } of academy.ALL_LESSONS) {
  const k = `${track.slug}/${lesson.slug}`
  if (seen.has(k)) { console.log(`FAIL  academy · duplicate lesson url /${k}`); bad++ }
  seen.add(k)
  if (!lesson.summary || lesson.summary.length < 40) { console.log(`FAIL  academy · "${lesson.title}" has no usable meta description`); bad++ }
  if (!lesson.keywords?.length) { console.log(`FAIL  academy · "${lesson.title}" has no keywords`); bad++ }
  if (lesson.quiz.answer < 0 || lesson.quiz.answer >= lesson.quiz.options.length) {
    console.log(`FAIL  academy · "${lesson.title}" quiz answer is out of range`); bad++
  }
  if (lesson.blocks.length < 3) { console.log(`FAIL  academy · "${lesson.title}" is too thin (${lesson.blocks.length} blocks)`); bad++ }
}

console.log(bad
  ? `\ncheck-content · ${bad} problem${bad > 1 ? 's' : ''}`
  : `check-content · ok · crew ${F.crew} (${WORDS[F.crew]}) · ${F.teams} teams · ${F.apps} apps · ${F.lessons} lessons · 4-step run $${runUsd}`)
process.exit(bad ? 1 : 0)
