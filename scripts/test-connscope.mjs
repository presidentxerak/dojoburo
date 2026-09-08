// Connections belong to the company · verified against a real Postgres.
//
// This is the half of wave two that was left undone, and it is all edges:
// two people who each connected the same app before there was a company, an
// upsert that has to pick between two partial unique indexes, a Claude key that
// must NOT be swept into the organisation, and a disconnect that has to remove
// both rows or the personal one reappears through the fallback on the next
// request. None of that can be checked by reading it.
//
//   TEST_DATABASE_URL=postgres://... node scripts/test-connscope.mjs
import { Pool } from 'pg'
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const URL_ = process.env.TEST_DATABASE_URL
if (!URL_) { console.log('test-connscope · skipped (set TEST_DATABASE_URL to run)'); process.exit(0) }

const pool = new Pool({ connectionString: URL_, max: 6 })
try { await pool.query('select 1') } catch (e) {
  console.error(`FAIL  cannot reach TEST_DATABASE_URL · ${String(e?.message || e)}`)
  process.exit(1)
}

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql']) await pool.query(readFileSync(f, 'utf8'))
await pool.query(`truncate org_doc_revisions, org_docs, org_invites, org_members, organisations,
                           connections, accounts restart identity cascade`)

const { build } = await import('esbuild')
const TMP = mkdtempSync(join(tmpdir(), 'dojo-cs-'))
async function load(entry) {
  const out = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, external: ['pg'], logLevel: 'silent',
  })
  const f = join(TMP, entry.replace(/[/.]/g, '_') + '.mjs')
  writeFileSync(f, out.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const scope = await load('api/_lib/connScope.ts')
const orgs = await load('api/_lib/orgs.ts')

const account = async (email) =>
  (await pool.query(`insert into accounts (privy_did, email) values ($1, $2) returning id`,
    ['did:privy:' + Math.random().toString(36).slice(2), email])).rows[0].id

// a connection the way api/connect.ts writes one, personal (pre-organisation)
const personal = (acct, id, label) => pool.query(
  `insert into connections (account_id, connector_id, status, external_account, access_token, updated_at)
   values ($1, $2, 'connected', $3, 'sealed', now())`, [acct, id, label])

/* ---- the schema actually allows what the code assumes ------------------- */
{
  const idx = await pool.query(
    `select indexname from pg_indexes where tablename = 'connections' order by 1`)
  const names = idx.rows.map((r) => r.indexname)
  ok('the organisation index exists', names.includes('idx_connections_org'))
  ok('the personal index exists', names.includes('idx_connections_personal'))
  const con = await pool.query(
    `select conname from pg_constraint where conrelid = 'connections'::regclass and contype = 'u'`)
  ok('the old account-wide unique constraint is gone',
    !con.rows.some((r) => r.conname === 'connections_account_id_connector_id_key'),
    con.rows.map((r) => r.conname).join(',') || 'none')
}

/* ---- a lone founder's connections are adopted -------------------------- */
const alice = await account('alice@acme.test')
await personal(alice, 'gmail', 'alice@acme.test')
await personal(alice, 'notion', 'Acme wiki')
await personal(alice, 'anthropic', 'sk-ant-…1234')

const aliceOrg = await scope.orgScope(pool, alice)
ok('an account resolves to an organisation', !!aliceOrg)

const after = await pool.query(
  `select connector_id, org_id, connected_by from connections where account_id = $1 order by connector_id`, [alice])
const byId = Object.fromEntries(after.rows.map((r) => [r.connector_id, r]))
ok('an app connection is adopted by the company', byId.gmail.org_id === aliceOrg)
ok('and records who authorised it', byId.gmail.connected_by === alice)
ok('a second app too', byId.notion.org_id === aliceOrg)
ok('the Claude key is NOT taken by the company', byId.anthropic.org_id === null,
  'it is a billing instrument, not an app the company reaches into')

/* ---- a colleague joins, holding the same app --------------------------- */
const bob = await account('bob@acme.test')
await personal(bob, 'gmail', 'bob@acme.test')     // his own, from before
await personal(bob, 'slack', 'Acme workspace')
await pool.query(`insert into org_members (org_id, account_id, role) values ($1, $2, 'member')`, [aliceOrg, bob])

const bobOrg = await scope.orgScope(pool, bob)
ok('the colleague resolves to the same organisation', bobOrg === aliceOrg)

const bobRows = await pool.query(
  `select connector_id, org_id from connections where account_id = $1 order by connector_id`, [bob])
const bobBy = Object.fromEntries(bobRows.rows.map((r) => [r.connector_id, r]))
ok("an app the company already had is left with its owner", bobBy.gmail.org_id === null,
  'adopting it would have collided with Alice’s')
ok('an app the company did not have is adopted', bobBy.slack.org_id === aliceOrg)

const gmails = await pool.query(
  `select count(*)::int n from connections where org_id = $1 and connector_id = 'gmail'`, [aliceOrg])
ok('the company still holds exactly one Gmail', gmails.rows[0].n === 1)

/* ---- resolution prefers the company's row ------------------------------ */
{
  const w = scope.scopeWhere(bob, bobOrg, 'gmail')
  const r = await pool.query(
    `select account_id, org_id from connections where ${w.sql} and status='connected' ${w.order} limit 1`, w.args)
  ok("the colleague's run uses the COMPANY's Gmail", r.rows[0].org_id === bobOrg,
    r.rows[0].account_id === alice ? 'Alice’s, shared' : 'his own')
}
{
  const w = scope.scopeWhere(bob, bobOrg, 'anthropic')
  const r = await pool.query(
    `select account_id from connections where ${w.sql} and status='connected' ${w.order} limit 1`, w.args)
  ok('but his Claude key resolves to nobody else’s', r.rows.length === 0,
    'he has none · Alice’s must not answer for him')
}
{
  const w = scope.scopeWhere(alice, aliceOrg, 'anthropic')
  const r = await pool.query(
    `select account_id from connections where ${w.sql} and status='connected' ${w.order} limit 1`, w.args)
  ok('and hers still resolves to hers', r.rows[0]?.account_id === alice)
}

/* ---- the upsert that has to choose a conflict target ------------------- */
// exactly what api/connect.ts does when someone reconnects an app
const upsertOrg = (acct, org, id, label) => pool.query(
  `insert into connections (account_id, org_id, connected_by, connector_id, status, external_account, access_token, updated_at)
   values ($1,$2,$1,$3,'connected',$4,'sealed', now())
   on conflict (org_id, connector_id) where org_id is not null do update
     set external_account = excluded.external_account, connected_by = excluded.connected_by, updated_at = now()`,
  [acct, org, id, label])

let threw = null
try { await upsertOrg(bob, aliceOrg, 'gmail', 'bob-reconnected@acme.test') } catch (e) { threw = e }
ok('a colleague can reconnect an app the company holds', !threw, threw ? threw.message : '')
const re = await pool.query(
  `select external_account, connected_by from connections where org_id = $1 and connector_id = 'gmail'`, [aliceOrg])
ok('it replaces the company’s token rather than adding a second', re.rows.length === 1)
ok('and the record follows who reconnected it', re.rows[0].connected_by === bob)

threw = null
try { await upsertOrg(alice, aliceOrg, 'gmail', 'alice-again@acme.test') } catch (e) { threw = e }
ok('and the original owner can reconnect too', !threw, threw ? threw.message : '')

/* ---- the personal upsert target still works ---------------------------- */
threw = null
try {
  await pool.query(
    `insert into connections (account_id, connector_id, status, external_account, access_token, updated_at)
     values ($1,'anthropic','connected',$2,'sealed', now())
     on conflict (account_id, connector_id) where org_id is null do update
       set external_account = excluded.external_account, updated_at = now()`,
    [alice, 'sk-ant-…9999'])
} catch (e) { threw = e }
ok('replacing a personal Claude key works', !threw, threw ? threw.message : '')
const keys = await pool.query(
  `select external_account from connections where account_id = $1 and connector_id = 'anthropic'`, [alice])
ok('and there is still only one of them', keys.rows.length === 1 && /9999/.test(keys.rows[0].external_account))

/* ---- disconnecting removes both rows ----------------------------------- */
await pool.query(
  `delete from connections where connector_id = $2 and (account_id = $1 or ($3::uuid is not null and org_id = $3))`,
  [bob, 'gmail', aliceOrg])
const left = await pool.query(`select count(*)::int n from connections where connector_id = 'gmail'`)
ok('disconnecting removes the shared row AND the personal leftover', left.rows[0].n === 0,
  'otherwise it reappears through the fallback on the next request')

/* ---- someone with no organisation still works -------------------------- */
{
  const solo = await account('solo@nowhere.test')
  await personal(solo, 'notion', 'Solo wiki')
  const w = scope.scopeWhere(solo, null, 'notion')
  const r = await pool.query(`select account_id from connections where ${w.sql} limit 1`, w.args)
  ok('an account with no organisation still resolves its own', r.rows[0]?.account_id === solo)
}

/* ---- what is personal is decided in one place -------------------------- */
ok('the Claude key is the personal one', scope.isPersonal('anthropic'))
ok('an app is not', !scope.isPersonal('gmail') && !scope.isPersonal('notion'))

await pool.end()
rmSync(TMP, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
