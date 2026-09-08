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

// The server registry is two object literals now — the OAuth apps and the
// key-based connectors — so both are read.
const regBody = serverSrc.slice(serverSrc.indexOf('const REGISTRY'))
const serverIds = new Set([...regBody.matchAll(/^ {2}'?([a-z0-9-]+)'?:\s*\{/gm)].map((m) => m[1]))

// Which env vars the server genuinely reads.
const envRead = new Set([...serverSrc.matchAll(/'([A-Z][A-Z0-9_]{3,})'/g)].map((m) => m[1]))

// Which connectors can do something at run time.
const providers = new Set([...toolDataSrc.matchAll(/^ {2}([a-z0-9-]+):\s*\w+Data,/gm)].map((m) => m[1]))
const actions = new Set([...toolActionSrc.matchAll(/connector === '([a-z0-9-]+)'/g)].map((m) => m[1]))
// A connector "has MCP" only when there is somewhere to SEND the request. Every
// entry calls mcp(), and most of them pass null — an endpoint the operator may
// point at a hub one day. Counting those as reach is how a catalogue starts
// claiming forty-five working integrations while eleven of them have no URL.
const hasMcp = new Set(
  [...regBody.matchAll(/mcp\('([a-z0-9-]+)',\s*([^,]+),/g)]
    .filter((m) => m[2].trim() !== 'null')
    .map((m) => m[1]),
)

// A key-based connector the founder can actually fill in: it has a token config,
// which means the key is validated, sealed and stored. That is real, and it is
// not the same as having something to call — both are reported.
const keyBased = new Set(
  [...serverSrc.slice(serverSrc.indexOf('const TOKENS')).matchAll(/^ {2}'?([a-z0-9-]+)'?:\s*\{/gm)].map((m) => m[1]),
)

// Three states, because there are three.
//
// This script used to know two — "ready" and "not wired" — and counted a
// connector as reachable the moment its registry entry called mcp(), including
// the many that pass a null URL. So thirty-one connectors read as fully wired
// while eleven of them had an OAuth handshake, a sealed token, and nowhere on
// earth to send a request. A founder could connect Shopify and watch nothing
// happen, and no gate said a word.
//
//   ready       · a credential can be obtained AND there is somewhere to send it
//   credential  · the credential works, the endpoint does not exist yet
//   unwired     · no server entry at all
//
// CREDENTIAL_ONLY is the honest middle, and it is a baseline rather than a
// silence: remove an id the day its endpoint exists and the build starts
// guarding it. Anything that regresses OUT of ready fails immediately.
const CREDENTIAL_ONLY = new Set([
  // key-based · the founder pastes their own key, then it needs an endpoint
  'claude-code', 'trello', 'ai-video', 'elevenlabs', 'heygen', 'apollo',
  'klaviyo', 'posthog', 'cloudinary', 'wave', 'perplexity',
  // OAuth · these have always been in this state; nothing here is a new gap,
  // it is the same gap finally being counted
  'zoom', 'jira', 'asana', 'airtable', 'shopify', 'figma', 'canva',
  'gclassroom', 'salesforce', 'whatsapp', 'meta',
])

/** Connectors with no server entry whatsoever. Empty, and it must stay empty. */
const UNWIRED = new Set([])

let bad = 0, warn = 0, baseline = 0
const rows = []

for (const c of CONNECTORS) {
  const problems = []
  const notes = []

  if (!serverIds.has(c.id)) problems.push('no server entry (no credential can be stored)')

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
  if (!reach.length) {
    problems.push(`credential only · nothing to call yet (set ${c.id.toUpperCase().replace(/-/g, '_')}_MCP_URL, or add a data provider)`)
  }

  if (problems.length) {
    if (CREDENTIAL_ONLY.has(c.id) || UNWIRED.has(c.id)) baseline++
    else bad++
  } else if (notes.length) warn++
  rows.push({ id: c.id, label: c.label, auth: c.auth, reach: reach.join('+') || '—', problems, notes })
}

// The app marks connectors it cannot yet act through, so the picker can be
// honest about them. That flag and the baseline above are two records of the
// same fact, so they are compared here.
for (const c of CONNECTORS) {
  const flagged = !!c.unwired
  const known = CREDENTIAL_ONLY.has(c.id) || UNWIRED.has(c.id)
  if (flagged && !known) { console.log(`FAIL  "${c.id}" is flagged unwired in the app but is wired here`); bad++ }
  if (known && !flagged) { console.log(`FAIL  "${c.id}" cannot act yet but the app does not say so · set unwired: true`); bad++ }
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
    ? ((CREDENTIAL_ONLY.has(r.id) || UNWIRED.has(r.id)) ? r.problems[0] : 'BROKEN · ' + r.problems[0])
    : r.notes.length ? 'check · ' + r.notes[0]
    : 'ready'
  console.log(`${pad(r.id, 16)}${pad(r.auth, 7)}${pad(r.reach, 14)}${status}`)
}

const ready = rows.filter((r) => !r.problems.length && !r.notes.length).length
console.log('-'.repeat(72))
console.log(`${rows.length} connectors · ${ready} ready · ${baseline} credential-only · ${warn} to check · ${bad} newly broken`)
console.log(`run-time reach · ${[...hasMcp].length} MCP · ${[...providers].length} live-data · ${[...actions].length} write actions`)
console.log(`${[...keyBased].length} connectors take a key the founder pastes · no operator setup needed`)

// A baseline that stops being true is a baseline that must shrink. The day a
// connector gets an endpoint, this makes the build say so rather than letting
// the list quietly overstate the gap for another year.
for (const id of [...CREDENTIAL_ONLY, ...UNWIRED]) {
  const r = rows.find((x) => x.id === id)
  if (r && !r.problems.length) {
    console.log(`FAIL  "${id}" can act now · take it off the baseline so the build guards it`)
    bad++
  }
}

process.exit(bad ? 1 : 0)
