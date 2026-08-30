// Is every connector actually wired, end to end?
//
// A connector is only real when four things line up:
//
//   1 · it is in the client registry (src/data/connectors.ts) — so it appears in
//       the picker and on the agent cards,
//   2 · it is in the server registry (api/_lib/connectors.ts) — so the OAuth
//       handshake and the token vault know about it,
//   3 · the env var names the setup page tells the operator to set are the same
//       ones the server actually reads, and
//   4 · it has somewhere to go at run time: an MCP endpoint (so a teammate can
//       use it during a run), a live-data provider, or an action handler.
//
// Miss any one and the user gets a switch that looks real and does nothing. This
// checks all four and prints a readiness table. Run: npm run check:connectors
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')

const { build } = await import('esbuild')
async function load(entry) {
  const out = await build({
    entryPoints: [path.join(ROOT, entry)],
    bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
  })
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'))
}

const { CONNECTORS } = await load('src/data/connectors.ts')
const { ROLE_AGENTS } = await load('src/data/roleAgents.ts')

const serverSrc = read('api/_lib/connectors.ts')
const toolDataSrc = read('api/tool-data.ts')
const toolActionSrc = read('api/tool-action.ts')

// The server registry is one object literal · read its top-level keys.
const regBody = serverSrc.slice(serverSrc.indexOf('const REGISTRY'))
const serverIds = new Set([...regBody.matchAll(/^ {2}'?([a-z0-9-]+)'?:\s*\{/gm)].map((m) => m[1]))

// Which env vars the server genuinely reads.
const envRead = new Set([...serverSrc.matchAll(/'([A-Z][A-Z0-9_]{3,})'/g)].map((m) => m[1]))

// Which connectors can do something at run time.
const providers = new Set([...toolDataSrc.matchAll(/^ {2}([a-z0-9-]+):\s*\w+Data,/gm)].map((m) => m[1]))
const actions = new Set([...toolActionSrc.matchAll(/connector === '([a-z0-9-]+)'/g)].map((m) => m[1]))
const hasMcp = new Set([...regBody.matchAll(/mcp\('([a-z0-9-]+)'/g)].map((m) => m[1]))

// Thirteen connectors are in the picker but have no server entry, so no OAuth
// handshake, no vault row and nothing to call at run time. They are listed here
// rather than quietly failing the build, so the gap is visible and shrinks on
// purpose: remove an id the day it is wired, and the build starts guarding it.
// A connector that breaks and is NOT on this list fails the build immediately.
const KNOWN_UNWIRED = new Set([
  'claude-code', 'trello', 'ai-video', 'elevenlabs', 'heygen', 'apollo',
  'klaviyo', 'ga4', 'posthog', 'supabase', 'cloudinary', 'wave', 'perplexity',
])

let bad = 0, warn = 0, baseline = 0
const rows = []

for (const c of CONNECTORS) {
  const problems = []
  const notes = []

  if (!serverIds.has(c.id)) { problems.push('no server entry (OAuth + vault cannot work)'); }

  // the setup page promises these env vars · the server must read them
  for (const e of c.env ?? []) {
    if (!envRead.has(e.name)) notes.push(`env ${e.name} is documented but never read`)
  }
  if (c.auth === 'oauth' && !(c.env ?? []).some((e) => /CLIENT_ID$/.test(e.name))) {
    notes.push('OAuth connector with no CLIENT_ID documented')
  }

  const reach = [
    hasMcp.has(c.id) && 'mcp',
    providers.has(c.id) && 'data',
    actions.has(c.id) && 'action',
  ].filter(Boolean)
  if (!reach.length) problems.push('nothing to do at run time (no MCP, no data provider, no action)')

  if (problems.length) {
    if (KNOWN_UNWIRED.has(c.id)) baseline++
    else bad++
  } else if (notes.length) warn++
  rows.push({ id: c.id, label: c.label, auth: c.auth, reach: reach.join('+') || '—', problems, notes })
}

// A role must not point at an app that is not in the registry (already covered
// by check-content, repeated here so this script stands alone).
const ids = new Set(CONNECTORS.map((c) => c.id))
for (const r of ROLE_AGENTS) {
  for (const a of r.apps ?? []) {
    if (!ids.has(a)) { console.log(`FAIL  ${r.name} lists unknown app "${a}"`); bad++ }
  }
}

// ---- report ---------------------------------------------------------------
const pad = (s, n) => String(s).padEnd(n)
console.log(`\n${pad('CONNECTOR', 16)}${pad('AUTH', 7)}${pad('RUN-TIME', 14)}STATUS`)
console.log('-'.repeat(72))
for (const r of rows) {
  const status = r.problems.length
    ? (KNOWN_UNWIRED.has(r.id) ? 'not wired yet (known) · ' + r.problems[0] : 'BROKEN · ' + r.problems[0])
    : r.notes.length ? 'check · ' + r.notes[0]
    : 'ready'
  console.log(`${pad(r.id, 16)}${pad(r.auth, 7)}${pad(r.reach, 14)}${status}`)
}

const ready = rows.filter((r) => !r.problems.length && !r.notes.length).length
console.log('-'.repeat(72))
console.log(`${rows.length} connectors · ${ready} fully wired · ${baseline} not wired yet (known) · ${warn} to check · ${bad} newly broken`)
console.log(`run-time reach · ${[...hasMcp].length} MCP · ${[...providers].length} live-data · ${[...actions].length} write actions`)

for (const id of KNOWN_UNWIRED) {
  const r = rows.find((x) => x.id === id)
  if (r && !r.problems.length) {
    console.log(`FAIL  "${id}" is wired now · take it off KNOWN_UNWIRED so the build guards it`)
    bad++
  }
}

process.exit(bad ? 1 : 0)
