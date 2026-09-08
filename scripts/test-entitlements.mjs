// A paid plan grants something · verified against a real Postgres.
//
// This is the half that was missing when the plans became buyable. The cards
// said 2,000 tasks a month and the runner asked "have you done ten today?" for
// everybody, so Managed would have charged $49 for the free tier's wall. None
// of that is visible by reading either file — the fault was in the space
// between them.
//
// What is checked here is the shape of the promise, not an implementation
// detail:
//
//   · a free account gets the free tier, unchanged
//   · a paying company gets more than a stranger
//   · Managed's allowance is MONTHLY and the whole company's, not per person
//   · a colleague joining does not multiply what the company bought
//   · a failed payment does not take the allowance away
//   · a cancelled plan does
//   · a database that is unreachable fails OPEN
//
//   TEST_DATABASE_URL=postgres://... node scripts/test-entitlements.mjs
import { Pool } from 'pg'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { randomUUID } from 'node:crypto'

const URL_ = process.env.TEST_DATABASE_URL
if (!URL_) { console.log('test-entitlements · skipped (set TEST_DATABASE_URL to run)'); process.exit(0) }

const pool = new Pool({ connectionString: URL_, max: 6 })
try { await pool.query('select 1') } catch (e) {
  console.error(`FAIL  cannot reach TEST_DATABASE_URL · ${String(e?.message || e)}`)
  process.exit(1)
}

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql']) await pool.query(readFileSync(f, 'utf8'))
await pool.query(`truncate work_runs, work_usage, org_doc_revisions, org_docs, org_invites,
                           org_members, organisations, connections, webhook_events, accounts
                  restart identity cascade`)

// bundled inside the repo so node can resolve the external `pg` by walking up
const { build } = await import('esbuild')
const OUT = 'node_modules/.dojo-ent'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const out = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, external: ['pg'], logLevel: 'silent',
  })
  const f = join(OUT, name)
  writeFileSync(f, out.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const ent = await load('api/_lib/entitlements.ts', 'entitlements.mjs')

const account = async (email) =>
  (await pool.query(`insert into accounts (privy_did, email) values ($1, $2) returning id`,
    ['did:privy:' + randomUUID(), email])).rows[0].id

const orgFor = async (accountId, name, plan = 'free', status = 'active') => {
  const o = await pool.query(
    `insert into organisations (name, created_by, plan, plan_status) values ($1,$2,$3,$4) returning id`,
    [name, accountId, plan, status])
  await pool.query(`insert into org_members (org_id, account_id, role) values ($1,$2,'owner')`,
    [o.rows[0].id, accountId])
  return o.rows[0].id
}

/** n runs on a given day, the way bumpFreeTier writes them */
const spend = (accountId, runs, tokens = 0, dayOffset = 0) => pool.query(
  `insert into work_usage (account_id, day, free_runs, in_tokens, out_tokens)
   values ($1, current_date - $4::int, $2, $3, 0)
   on conflict (account_id, day) do update
     set free_runs = work_usage.free_runs + excluded.free_runs,
         in_tokens = work_usage.in_tokens + excluded.in_tokens`,
  [accountId, runs, tokens, dayOffset])

/* ---- the table says what the cards say ---------------------------------- */
{
  ok('Free is the free tier, unchanged', ent.GRANTS.free.runs === 10 && ent.GRANTS.free.tokens === 25_000)
  ok('Managed grants the 2,000 tasks printed on the card', ent.GRANTS.managed.runs === 2_000)
  ok('and grants them MONTHLY', ent.GRANTS.managed.window === 'month')
  ok('to the whole company', ent.GRANTS.managed.scope === 'org',
    'one subscription · not 2,000 each')
  ok('Founder gets more than free', ent.GRANTS.founder.runs > ent.GRANTS.free.runs)
  ok('and Managed more than Founder', ent.GRANTS.managed.runs > ent.GRANTS.founder.runs)
}

/* ---- a free account is exactly where it was ----------------------------- */
{
  const solo = await account('solo@free.test')
  let s = await ent.standingOf(pool, solo)
  ok('an account with no organisation reads as free', s.plan === 'free' && s.allowed)

  await spend(solo, 9)
  s = await ent.standingOf(pool, solo)
  ok('nine runs still leaves one', s.allowed && ent.remaining(s).runs === 1)

  await spend(solo, 1)
  s = await ent.standingOf(pool, solo)
  ok('the tenth closes the day', !s.allowed && s.reason === 'runs')
  ok('and remaining never goes negative', ent.remaining(s).runs === 0)
}

/* ---- tokens still stop a day the runs would not ------------------------- */
{
  const heavy = await account('heavy@free.test')
  await spend(heavy, 2, 30_000)
  const s = await ent.standingOf(pool, heavy)
  ok('a token ceiling stops a day two runs in', !s.allowed && s.reason === 'tokens',
    'a Saver run and a Max run are not the same thing to give away')
}

/* ---- yesterday does not count against today ----------------------------- */
{
  const y = await account('yesterday@free.test')
  await spend(y, 10, 0, 1)         // all of yesterday's allowance
  const s = await ent.standingOf(pool, y)
  ok('a spent yesterday leaves today whole', s.allowed && ent.remaining(s).runs === 10)
}

/* ---- Managed: the company's month, not the person's day ----------------- */
const boss = await account('boss@acme.test')
const acme = await orgFor(boss, 'Acme', 'managed')
{
  let s = await ent.standingOf(pool, boss)
  ok('a Managed company is on the monthly allowance', s.plan === 'managed' && s.grant.window === 'month')

  // eleven runs today · far past the free tier's ten, nowhere near 2,000
  await spend(boss, 11)
  s = await ent.standingOf(pool, boss)
  ok('eleven runs in a day does not stop a Managed company', s.allowed,
    'this is the exact wall a paying customer used to hit')
  ok('and the count is against the month', ent.remaining(s).runs === 2_000 - 11)
}

/* ---- a colleague shares the allowance, never doubles it ----------------- */
{
  const mate = await account('mate@acme.test')
  await pool.query(`insert into org_members (org_id, account_id, role) values ($1,$2,'member')`, [acme, mate])
  await spend(mate, 9)

  const his = await ent.standingOf(pool, mate)
  ok('a colleague is on the company plan without paying again', his.plan === 'managed')
  ok('and sees the company total, not his own', his.usedRuns === 20, `saw ${his.usedRuns}`)

  const hers = await ent.standingOf(pool, boss)
  ok('the owner sees the same number', hers.usedRuns === 20,
    'one allowance · a team of four must not get four times what it bought')
}

/* ---- last month is not this month --------------------------------------- */
{
  const old = await account('old@last.test')
  const org = await orgFor(old, 'Lastmonth', 'managed')
  await pool.query(
    `insert into work_usage (account_id, day, free_runs)
     values ($1, (date_trunc('month', current_date) - interval '1 day')::date, 1999)`,
    [old])
  const s = await ent.standingOf(pool, old)
  ok('last month’s spend does not eat this month', s.allowed && ent.remaining(s).runs === 2_000,
    `org ${org.slice(0, 8)}`)
}

/* ---- exhausting a Managed month ----------------------------------------- */
{
  const spent = await account('spent@full.test')
  await orgFor(spent, 'Full', 'managed')
  await spend(spent, 2_000)
  const s = await ent.standingOf(pool, spent)
  ok('a Managed company that used all 2,000 is stopped', !s.allowed && s.reason === 'runs')
}

/* ---- a failed payment keeps the allowance ------------------------------- */
{
  const late = await account('late@paid.test')
  await orgFor(late, 'Late', 'managed', 'past_due')
  await spend(late, 11)
  const s = await ent.standingOf(pool, late)
  ok('past_due keeps the plan and the allowance', s.plan === 'managed' && s.allowed,
    'Stripe retries for days · the ending is the deleted event, not the first decline')
}

/* ---- a cancelled one does not ------------------------------------------- */
{
  const gone = await account('gone@ex.test')
  // the webhook writes plan back to 'free' on cancellation · this is that state
  await orgFor(gone, 'Ex', 'free', 'cancelled')
  await spend(gone, 11)
  const s = await ent.standingOf(pool, gone)
  ok('a cancelled company is back on the free tier', s.plan === 'free' && !s.allowed,
    'the plan column is the truth · plan_status only explains it')
}

/* ---- Founder sits between them ------------------------------------------ */
{
  const f = await account('f@founder.test')
  await orgFor(f, 'Founders', 'founder')
  await spend(f, 11)
  const s = await ent.standingOf(pool, f)
  ok('a Founder is past the free wall', s.allowed && s.plan === 'founder')
  ok('on a DAILY window · Founder buys the software, not a token budget',
    s.grant.window === 'day')
}

/* ---- it fails open ------------------------------------------------------ */
{
  const dead = new Pool({ connectionString: 'postgres://nobody@127.0.0.1:1/none?sslmode=disable' })
  const s = await ent.standingOf(dead, randomUUID())
  ok('an unreachable database allows the run', s.allowed && s.plan === 'free',
    'refusing someone’s work because metering timed out is the worse failure')
  await dead.end().catch(() => {})
}

/* ---- an account that is not in the table at all ------------------------- */
{
  const s = await ent.standingOf(pool, randomUUID())
  ok('an unknown account gets the free tier, not an error', s.allowed && s.plan === 'free')
}

await pool.end()
rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
