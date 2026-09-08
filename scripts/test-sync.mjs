// The client sync, driven against the real server logic and a real Postgres.
//
// This is the half that cannot be checked by reading it. The failure modes are
// all in the seams: a pulled document that re-queues itself and loops for ever,
// a conflict that throws away the work somebody can still see on screen, a
// queue that empties on an error it should have kept, a viewer whose refused
// writes retry until the tab dies.
//
// So src/lib/sync.ts is bundled with its two dependencies replaced — IndexedDB
// by a plain Map, apiFetch by a call straight into api/_lib/docs.ts — and then
// exercised. Everything between those two edges is the real thing.
//
//   TEST_DATABASE_URL=postgres://... node scripts/test-sync.mjs
import { Pool } from 'pg'
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const URL_ = process.env.TEST_DATABASE_URL
if (!URL_) {
  console.log('test-sync · skipped (set TEST_DATABASE_URL to run)')
  process.exit(0)
}

const { build } = await import('esbuild')
const TMP = mkdtempSync(join(tmpdir(), 'dojo-sync-'))
let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const pool = new Pool({ connectionString: URL_, max: 6 })
// A database that is configured but unreachable should say so in one line, not
// bury it in a pg stack trace — in CI that difference is ten minutes.
async function reachable(pool) {
  try { await pool.query('select 1'); return true }
  catch (e) {
    console.error(`FAIL  cannot reach TEST_DATABASE_URL · ${String(e?.message || e)}`)
    return false
  }
}
if (!(await reachable(pool))) process.exit(1)

for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql']) await pool.query(readFileSync(f, 'utf8'))
await pool.query(`truncate org_doc_revisions, org_docs, org_invites, org_members, organisations,
                           connections, accounts restart identity cascade`)

async function loadReal(entry, extra = {}) {
  const out = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, external: ['pg'], logLevel: 'silent', ...extra,
  })
  const f = join(TMP, entry.replace(/[/.]/g, '_') + '.mjs')
  writeFileSync(f, out.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const docsLib = await loadReal('api/_lib/docs.ts')
const orgsLib = await loadReal('api/_lib/orgs.ts')

const account = async (email) =>
  (await pool.query(`insert into accounts (privy_did, email) values ($1, $2) returning id`,
    ['did:privy:' + Math.random().toString(36).slice(2), email])).rows[0].id

const alice = await account('alice@acme.test')
const bob = await account('bob@acme.test')
const org = await orgsLib.ensureOrg(pool, alice)
await pool.query(`insert into org_members (org_id, account_id, role) values ($1, $2, 'member')`, [org.orgId, bob])

/* ---------------------------------------------------------------- the stubs */
// A Map standing in for IndexedDB, and a counter for every write the sync layer
// makes — the loop check needs to see writes, not just final state.
const stores = { kv: new Map(), projects: new Map(), assets: new Map() }
let quietWrites = 0
let noisyWrites = 0

const idbStub = `
const stores = globalThis.__stores
export const idbAvailable = () => true
let observer = null
export function observeProjects(fn) { observer = fn }
const notify = (store, key, gone) => {
  if (store !== 'projects' || !observer) return
  globalThis.__noisy()
  try { observer(key, gone) } catch {}
}
export async function idbGet(store, key) { return stores[store].get(key) }
export async function idbSet(store, key, value) {
  stores[store].set(key, JSON.parse(JSON.stringify(value ?? null))); notify(store, key, false); return true
}
export async function idbDel(store, key) { stores[store].delete(key); notify(store, key, true) }
export async function idbSetQuiet(store, key, value) {
  globalThis.__quiet(); stores[store].set(key, JSON.parse(JSON.stringify(value ?? null))); return true
}
export async function idbDelQuiet(store, key) { globalThis.__quiet(); stores[store].delete(key) }
export async function idbKeys(store) { return [...stores[store].keys()] }
export async function idbValues(store) { return [...stores[store].values()] }
export async function idbEstimate() { return null }
`

// apiFetch, wired straight into the real server module. `whoami` is flipped
// mid-test to make a second person write, without a second browser.
let whoami = alice
let readOnly = false
let offline = false
const apiStub = `
export const authHeaders = async () => ({})
export async function apiFetch(input, init) { return globalThis.__api(input, init) }
`

globalThis.__stores = stores
globalThis.__quiet = () => { quietWrites++ }
globalThis.__noisy = () => { noisyWrites++ }
globalThis.__api = async (input, init) => {
  if (offline) throw new Error('offline')
  const u = new URL(input, 'https://x.test')
  const action = u.searchParams.get('action')
  const reply = (o) => ({ json: async () => o })

  if (action === 'pull') {
    const since = u.searchParams.get('since')
    return reply({ ok: true, docs: await docsLib.pull(pool, org.orgId, since) })
  }
  if (action === 'push') {
    if (readOnly) return reply({ ok: false, error: 'read_only' })
    const b = JSON.parse(init.body)
    const r = await docsLib.push(pool, org.orgId, whoami, b.key, b.body, b.baseVersion, b.deleted)
    return r.ok ? reply({ ok: true, doc: r.doc }) : reply({ ok: false, conflict: true, server: r.server })
  }
  return reply({ ok: false, error: 'bad_action' })
}

// The stubs have to exist on disk before sync.ts is bundled against them.
writeFileSync(join(TMP, 'idb.mjs'), idbStub)
writeFileSync(join(TMP, 'apiFetch.mjs'), apiStub)
// esbuild's `alias` only takes bare package names, so the swap is a resolver.
const S = await loadReal('src/lib/sync.ts', {
  plugins: [{
    name: 'stub-browser-deps',
    setup(b) {
      b.onResolve({ filter: /^\.\/(idb|apiFetch)$/ }, (a) => ({ path: join(TMP, a.path.slice(2) + '.mjs') }))
    },
  }],
})

/* ---------------------------------------------------------------- a write */
S.startSync(1e9)   // no polling · this test drives every step itself

// write through the real store path so the observer fires
stores.projects.set('brand.d1', { name: 'Acme' })
await S.noteWrite('brand.d1')
await S.drain()

const onServer = await docsLib.getOne(pool, org.orgId, 'brand.d1')
ok('a local write reaches the server', onServer?.body?.name === 'Acme')
ok('and the queue is empty afterwards', (stores.kv.get('sync.queue') || []).length === 0)
ok('the version is remembered', stores.kv.get('sync.stamps')['brand.d1'].version === 1)

/* ------------------------------------------------- a colleague's change */
whoami = bob
await docsLib.push(pool, org.orgId, bob, 'site.d1', { title: 'Bob wrote this' }, 0)
whoami = alice

const before = quietWrites
const applied = await S.pullChanges()
ok('a pull brings down a colleague\'s document', applied >= 1)
ok('and it is in the local store', stores.projects.get('site.d1')?.title === 'Bob wrote this')
ok('applied quietly, so it is not queued back', quietWrites > before)
ok('nothing was queued by the pull', (stores.kv.get('sync.queue') || []).length === 0)

// the loop this guards against: pull → local write → push → pull → …
const noisyBefore = noisyWrites
await S.pullChanges()
await S.drain()
await S.pullChanges()
ok('pulling repeatedly does not feed the queue', noisyWrites === noisyBefore)
ok('and the queue stays empty', (stores.kv.get('sync.queue') || []).length === 0)

/* --------------------------------------------------------------- conflict */
// Bob edits what Alice is holding, then Alice pushes her stale copy.
whoami = bob
await docsLib.push(pool, org.orgId, bob, 'brand.d1', { name: 'Bob renamed it' }, 1)
whoami = alice
stores.projects.set('brand.d1', { name: 'Alice renamed it' })
await S.noteWrite('brand.d1')
await S.drain()

const cs = S.pendingConflicts()
ok('a stale push is recorded as a conflict', cs.length === 1 && cs[0].key === 'brand.d1')
ok('and keeps what the person had', cs[0].mine.name === 'Alice renamed it')
ok('and what is really there', cs[0].theirs.name === 'Bob renamed it')
ok('the local copy matches the company', stores.projects.get('brand.d1').name === 'Bob renamed it')
ok('the queue does not jam on it', (stores.kv.get('sync.queue') || []).length === 0)
ok('and the state says so', S.syncState() === 'conflict')

/* ---------------------------------------------------------------- delete */
stores.projects.delete('site.d1')
await S.noteWrite('site.d1')
await S.drain()
const tomb = await docsLib.getOne(pool, org.orgId, 'site.d1')
ok('a delete becomes a tombstone', tomb?.deleted === true)

/* -------------------------------------------------------------- read-only */
readOnly = true
stores.projects.set('locked.d1', { x: 1 })
await S.noteWrite('locked.d1')
await S.drain()
ok('a viewer is told, not looped', S.syncState() === 'read-only')
ok('and the work is kept for later', (stores.kv.get('sync.queue') || []).includes('locked.d1'))
readOnly = false

/* ---------------------------------------------------------------- offline */
offline = true
await S.drain()
ok('offline keeps the queue', (stores.kv.get('sync.queue') || []).includes('locked.d1'))
ok('and says offline', S.syncState() === 'offline')
offline = false
await S.drain()
ok('coming back sends what was waiting', (await docsLib.getOne(pool, org.orgId, 'locked.d1'))?.body?.x === 1)
ok('and the queue drains', (stores.kv.get('sync.queue') || []).length === 0)

S.stopSync()
await pool.end()
rmSync(TMP, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
