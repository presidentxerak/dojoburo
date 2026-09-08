// Two browsers, one company · the claim wave two exists to make true.
//
// Everything else is tested a layer at a time: the schema against Postgres, the
// sync layer against stubbed storage. This is the only test that runs the whole
// path — a real browser, the real bundle, the real HTTP handlers, a real
// database — and answers the question a business actually asks: if I invite a
// colleague, do they see my work?
//
// It serves dist/ and mounts api/org.ts and api/docs.ts on a plain node server,
// because vite preview does not run serverless functions. Nothing about the
// handlers is stubbed; only the hosting is.
//
//   TEST_DATABASE_URL=postgres://... node scripts/test-team-e2e.mjs
import { createServer } from 'node:http'
import { readFileSync, existsSync, writeFileSync, mkdtempSync, mkdirSync, rmSync } from 'node:fs'
import { join, extname } from 'node:path'
import { pathToFileURL } from 'node:url'
import { chromium } from 'playwright'
import { Pool } from 'pg'

const DB = process.env.TEST_DATABASE_URL
if (!DB) { console.log('test-team-e2e · skipped (set TEST_DATABASE_URL to run)'); process.exit(0) }
if (!existsSync('dist/index.html')) { console.error('test-team-e2e · run the build first'); process.exit(1) }

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

/* ---- a clean database -------------------------------------------------- */
process.env.DATABASE_URL = DB
const pool = new Pool({ connectionString: DB })
for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql']) await pool.query(readFileSync(f, 'utf8'))
await pool.query(`truncate org_doc_revisions, org_docs, org_invites, org_members, organisations,
                           connections, accounts restart identity cascade`)

/* ---- the real handlers ------------------------------------------------- */
const { build } = await import('esbuild')
// Inside the repo, not /tmp: the bundled handlers keep `pg` external, and node
// resolves it by walking up from the file's own directory.
mkdirSync('node_modules/.dojo-e2e', { recursive: true })
const TMP = mkdtempSync(join('node_modules/.dojo-e2e', 'run-'))
async function handler(entry) {
  const out = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, external: ['pg'], logLevel: 'silent',
  })
  const f = join(TMP, entry.replace(/[/.]/g, '_') + '.mjs')
  writeFileSync(f, out.outputFiles[0].text)
  return (await import(pathToFileURL(f).href)).default
}
const orgHandler = await handler('api/org.ts')
const docsHandler = await handler('api/docs.ts')

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.json': 'application/json', '.png': 'image/png', '.woff2': 'font/woff2', '.ico': 'image/x-icon' }

const server = createServer(async (req, res) => {
  const u = new URL(req.url, 'http://localhost')
  if (u.pathname === '/api/org' || u.pathname === '/api/docs') {
    let raw = ''
    for await (const c of req) raw += c
    req.rawBody = raw
    try { await (u.pathname === '/api/org' ? orgHandler : docsHandler)(req, res) }
    catch (e) { res.statusCode = 500; res.end(JSON.stringify({ ok: false, error: String(e?.message || e) })) }
    return
  }
  // the SPA fallback vercel.json does in production
  const p = u.pathname === '/' ? '/index.html' : u.pathname
  const file = join('dist', p)
  const target = existsSync(file) && extname(file) ? file : join('dist', 'index.html')
  res.setHeader('content-type', MIME[extname(target)] || 'application/octet-stream')
  res.end(readFileSync(target))
})
await new Promise((r) => server.listen(4199, r))
const B = 'http://localhost:4199/'

/* ---- two browsers ------------------------------------------------------ */
const br = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
// Two separate contexts is the whole point: separate storage, separate guest
// identity — as unrelated as two people on two laptops.
const mk = async () => {
  const c = await br.newContext({ viewport: { width: 1280, height: 1000 } })
  await c.addInitScript(() => { try { localStorage.setItem('dojoburo.beta', '1974') } catch { /* private window */ } })
  const p = await c.newPage()
  const errs = []
  p.on('pageerror', (e) => errs.push(e.message))
  return { p, errs }
}
const A = await mk()
const C = await mk()

// A visitor with no account has no identity to sync under, which is correct
// and is not what this test is about. Sign in as a guest first, the way the
// app's own "Sign in" does when Privy is not configured.
const signIn = async (p) => {
  await p.goto(B + '#app', { waitUntil: 'networkidle' })
  await p.waitForTimeout(2500)
  const btn = p.locator('button', { hasText: /^Sign in$/ }).first()
  if (await btn.count()) { await btn.click(); await p.waitForTimeout(2500) }
}

const openTeam = async (p) => {
  await p.goto(B + '#app', { waitUntil: 'networkidle' })
  await p.waitForTimeout(2500)
  await p.locator('.tb-profile').first().click({ timeout: 20_000 })
  await p.waitForTimeout(500)
  await p.locator('button', { hasText: /^Your company$/ }).first().click({ timeout: 20_000 })
  await p.waitForTimeout(2500)
}

/* ---- Alice has a company ----------------------------------------------- */
await signIn(A.p)
await openTeam(A.p)
const aliceText = await A.p.locator('.team-wrap').innerText()
ok('the owner sees her company', /People/.test(aliceText), aliceText.split('\n')[0])
ok('and is the owner', /owner/i.test(aliceText))
ok('she can invite', (await A.p.locator('button', { hasText: 'Create invitation' }).count()) === 1)

/* ---- she already had work before any of this existed ------------------- */
// Written straight into IndexedDB and then reloaded, which is the real case
// this has to survive: a founder with months of companies in a browser that has
// never synced anything. `adoptLocal` is what carries them up on first run.
await A.p.evaluate(async () => {
  // No version: open whatever the app already has. Naming a different one
  // requests an upgrade, which blocks behind the app's own open connection and
  // never resolves.
  const db = await new Promise((res, rej) => {
    const r = indexedDB.open('dojoburo')
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error)
  })
  await new Promise((res) => {
    const t = db.transaction('projects', 'readwrite')
    t.objectStore('projects').put({ name: 'Acme Robotics' }, 'brand.shared-1')
    t.oncomplete = res
  })
})
await A.p.reload({ waitUntil: 'networkidle' })
await A.p.waitForTimeout(6000)

const onServer = await pool.query(`select body from org_docs where key = 'brand.shared-1'`)
ok('work that was already here reaches the company', onServer.rows[0]?.body?.name === 'Acme Robotics',
  onServer.rows.length ? JSON.stringify(onServer.rows[0].body) : 'nothing stored')

await openTeam(A.p)

/* ---- she invites a colleague ------------------------------------------- */
await A.p.locator('.team-invite input').fill('carol@acme.test')
await A.p.locator('button', { hasText: 'Create invitation' }).click()
await A.p.waitForTimeout(1500)
const link = await A.p.locator('.team-link input').inputValue()
ok('an invitation link is produced', /#join=/.test(link), link.slice(0, 48) + '…')
ok('and it is shown once, with a warning', /shown once/i.test(await A.p.locator('.team-link').innerText()))

/* ---- Carol opens it ----------------------------------------------------- */
await signIn(C.p)
await C.p.goto(link, { waitUntil: 'networkidle' })
await C.p.waitForTimeout(4000)
ok('the token is scrubbed from the address bar', !C.p.url().includes('join='), C.p.url())

const members = await pool.query(
  `select count(*)::int n from org_members where org_id = (select id from organisations limit 1)`)
ok('she is in the company', members.rows[0].n === 2, `${members.rows[0].n} members`)

/* ---- and she sees the work --------------------------------------------- */
await C.p.waitForTimeout(2000)
const carolHas = await C.p.evaluate(async () => {
  const db = await new Promise((res, rej) => {
    const r = indexedDB.open('dojoburo')
    r.onsuccess = () => res(r.result); r.onerror = () => rej(r.error)
  })
  return await new Promise((res) => {
    const t = db.transaction('projects', 'readonly')
    const g = t.objectStore('projects').get('brand.shared-1')
    g.onsuccess = () => res(g.result); g.onerror = () => res(null)
  })
})
ok('the colleague sees the same company', carolHas?.name === 'Acme Robotics',
  carolHas ? JSON.stringify(carolHas) : 'nothing arrived')

/* ---- the roster shows both --------------------------------------------- */
await openTeam(C.p)
const carolText = await C.p.locator('.team-wrap').innerText()
ok('the roster shows two people', (carolText.match(/owner|member|admin|viewer/gi) || []).length >= 2)
ok('a member cannot invite', (await C.p.locator('button', { hasText: 'Create invitation' }).count()) === 0)

ok('no page errors for the owner', A.errs.length === 0, A.errs.slice(0, 2).join(' | '))
ok('no page errors for the colleague', C.errs.length === 0, C.errs.slice(0, 2).join(' | '))

await br.close()
await new Promise((r) => server.close(r))
await pool.end()
rmSync(TMP, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
