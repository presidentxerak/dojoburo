// A plan can actually be bought, and stays bought for exactly as long as it is
// paid for · verified against a real Postgres.
//
// The app advertised three monthly plans and could not sell any of them: Stripe
// was wired for one-off payments, so a plan card was a picture of a price. This
// suite drives the real webhook handler — signature included — through the life
// of a subscription, because every one of these is a way to lose money or a
// customer and none of them can be checked by reading the code:
//
//   · it starts                      → the COMPANY is on the plan, not the person
//   · a card fails                   → past_due, and the plan KEEPS WORKING
//   · the retry succeeds             → back to active, plan intact
//   · it is cancelled                → back to free
//   · Stripe retries the same event  → nothing happens twice
//   · a forged signature             → refused
//
//   TEST_DATABASE_URL=postgres://... node scripts/test-subscriptions.mjs
import { Pool } from 'pg'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createHmac, randomUUID } from 'node:crypto'

const URL_ = process.env.TEST_DATABASE_URL
if (!URL_) { console.log('test-subscriptions · skipped (set TEST_DATABASE_URL to run)'); process.exit(0) }

const SECRET = 'whsec_test_only_never_a_real_one'
process.env.DATABASE_URL = URL_
process.env.STRIPE_WEBHOOK_SECRET = SECRET

const pool = new Pool({ connectionString: URL_, max: 6 })
try { await pool.query('select 1') } catch (e) {
  console.error(`FAIL  cannot reach TEST_DATABASE_URL · ${String(e?.message || e)}`)
  process.exit(1)
}

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql']) await pool.query(readFileSync(f, 'utf8'))
await pool.query(`truncate org_doc_revisions, org_docs, org_invites, org_members, organisations,
                           connections, webhook_events, accounts restart identity cascade`)

// The handler is bundled INSIDE the repo, not in /tmp: it keeps `pg` external,
// and node resolves an external import by walking up from the importing file.
// From /tmp there is no node_modules to walk up to.
const { build } = await import('esbuild')
const OUT = 'node_modules/.dojo-subs'
mkdirSync(OUT, { recursive: true })
const built = await build({
  entryPoints: ['api/checkout-webhook.ts'], bundle: true, format: 'esm', platform: 'node',
  write: false, external: ['pg'], logLevel: 'silent',
})
const file = join(OUT, 'webhook.mjs')
writeFileSync(file, built.outputFiles[0].text)
const { default: handler } = await import(pathToFileURL(file).href)

/* ---------------------------------------------------------------- driving -- */
// Enough of an IncomingMessage/ServerResponse for the handler, which only reads
// the method, one header and the raw body, and only writes a status and a body.
function sign(raw) {
  const t = Math.floor(Date.now() / 1000)
  return `t=${t},v1=${createHmac('sha256', SECRET).update(`${t}.${raw}`).digest('hex')}`
}

async function post(event, { signature } = {}) {
  const raw = JSON.stringify(event)
  const req = { method: 'POST', headers: { 'stripe-signature': signature ?? sign(raw) }, rawBody: raw }
  let status = 0, body = null
  const res = {
    statusCode: 200,
    setHeader() {},
    end(s) { status = res.statusCode; body = JSON.parse(s) },
  }
  await handler(req, res)
  return { status, body }
}

const evt = (type, object) => ({ id: 'evt_' + randomUUID(), type, data: { object } })

const planOf = async (orgId) => (await pool.query(
  `select plan, plan_status, stripe_subscription_id, stripe_customer_id from organisations where id = $1`,
  [orgId])).rows[0]

/* ------------------------------------------------------- a plan is bought -- */
const did = 'did:privy:' + randomUUID()
const CUST = 'cus_' + randomUUID().slice(0, 8)
const SUB = 'sub_' + randomUUID().slice(0, 8)

{
  const r = await post(evt('checkout.session.completed', {
    customer: CUST, subscription: SUB, customer_email: 'founder@acme.test',
    metadata: { plan: 'managed', privy_did: did },
  }))
  ok('a completed checkout is accepted', r.status === 200 && r.body.ok === true, JSON.stringify(r.body))
  ok('and it applied something', r.body.applied === true)
}

const org = (await pool.query(
  `select o.id from organisations o
     join org_members m on m.org_id = o.id
     join accounts a on a.id = m.account_id
    where a.privy_did = $1`, [did])).rows[0]?.id
ok('the payer got an organisation', !!org, 'a paid subscription with nowhere to live is the one case worth guessing')
{
  const p = await planOf(org)
  ok('the COMPANY is on Managed', p.plan === 'managed', 'not the person · one subscription covers everyone in it')
  ok('and it is active', p.plan_status === 'active')
  ok('the subscription is recorded', p.stripe_subscription_id === SUB)
  ok('and the customer too', p.stripe_customer_id === CUST,
    'it survives a subscription being replaced rather than updated')
}

// everyone else in the company is on it too, without paying again
{
  const colleague = (await pool.query(
    `insert into accounts (privy_did, email) values ($1,$2) returning id`,
    ['did:privy:' + randomUUID(), 'colleague@acme.test'])).rows[0].id
  await pool.query(`insert into org_members (org_id, account_id, role) values ($1,$2,'member')`, [org, colleague])
  const seen = (await pool.query(
    `select o.plan from org_members m join organisations o on o.id = m.org_id where m.account_id = $1`,
    [colleague])).rows[0].plan
  ok('a colleague sees the same plan', seen === 'managed')
}

/* --------------------------------------------------------- Stripe retries -- */
{
  const e = evt('customer.subscription.updated', { id: SUB, customer: CUST, status: 'active', metadata: { plan: 'managed' } })
  const first = await post(e)
  const again = await post(e)   // same evt.id · Stripe retries until it gets a 2xx
  ok('a retry of the same event is a no-op', again.body.duplicate === true, JSON.stringify(again.body))
  ok('and the first one was not', !first.body.duplicate)
}

/* ------------------------------------------------------------ a card fails -- */
{
  const r = await post(evt('invoice.payment_failed', { subscription: SUB }))
  ok('a failed payment is recorded', r.body.applied === true)
  const p = await planOf(org)
  ok('the plan is flagged past_due', p.plan_status === 'past_due')
  ok('but the company KEEPS the plan', p.plan === 'managed',
    'Stripe retries for days · cutting them off on the first decline loses a customer over an expired card')
}

/* -------------------------------------------------------- the retry works -- */
{
  await post(evt('customer.subscription.updated', { id: SUB, customer: CUST, status: 'active', metadata: { plan: 'managed' } }))
  const p = await planOf(org)
  ok('a recovered card clears the flag', p.plan_status === 'active')
  ok('and the plan is untouched', p.plan === 'managed')
}

/* ----------------------------------------------------------- trialing too -- */
{
  await post(evt('customer.subscription.updated', { id: SUB, customer: CUST, status: 'trialing', metadata: { plan: 'managed' } }))
  ok('a trial counts as working', (await planOf(org)).plan_status === 'active')
}

/* --------------------------------------------------------- a plan changes -- */
{
  await post(evt('customer.subscription.updated', { id: SUB, customer: CUST, status: 'active', metadata: { plan: 'founder' } }))
  ok('moving to a cheaper plan is followed', (await planOf(org)).plan === 'founder')
}

/* --------------------------------------------- an unknown plan is ignored -- */
{
  await post(evt('customer.subscription.updated', { id: SUB, customer: CUST, status: 'active', metadata: { plan: 'enterprise' } }))
  ok('a plan we do not sell does not overwrite the real one', (await planOf(org)).plan === 'founder',
    'metadata is whatever was set on the subscription · it is not a source of truth about our catalogue')
}

/* ------------------------------------------------------------ cancelling -- */
{
  const r = await post(evt('customer.subscription.deleted', { id: SUB, customer: CUST, status: 'canceled' }))
  ok('a cancellation is applied', r.body.applied === true)
  const p = await planOf(org)
  ok('the company drops to free', p.plan === 'free')
  ok('and is marked cancelled', p.plan_status === 'cancelled')
  ok('the dead subscription id is cleared', p.stripe_subscription_id === null,
    'so a later event for it cannot resurrect the plan')
  ok('the customer is kept', p.stripe_customer_id === CUST, 'they may come back')
}

/* ------------------------------------------- a subscription we never saw -- */
{
  const SUB2 = 'sub_' + randomUUID().slice(0, 8)
  await post(evt('customer.subscription.updated', { id: SUB2, customer: CUST, status: 'active', metadata: { plan: 'managed' } }))
  const p = await planOf(org)
  ok('a replacement subscription is found by its customer', p.stripe_subscription_id === SUB2,
    'Stripe replaces rather than updates a subscription in some flows')
  ok('and it puts the company back on the plan', p.plan === 'managed' && p.plan_status === 'active')
}

/* ------------------------------------------------------------- rejections -- */
{
  const r = await post(evt('customer.subscription.updated', { id: 'sub_nobody', status: 'active' }))
  ok('an event for an unknown company applies nothing', r.body.applied === false && r.body.ok === true,
    '200 · so Stripe stops retrying something we will never be able to place')
}
{
  const r = await post(evt('checkout.session.completed', { metadata: { plan: 'managed' } }), { signature: 't=1,v1=deadbeef' })
  ok('a forged signature is refused', r.status === 400 && r.body.error === 'signature')
}
{
  const before = (await pool.query(`select count(*)::int n from webhook_events`)).rows[0].n
  const r = await post(evt('customer.updated', { id: CUST }))
  ok('an event we do not handle is acknowledged, not stored', r.body.ignored === 'customer.updated'
    && (await pool.query(`select count(*)::int n from webhook_events`)).rows[0].n === before)
}
{
  const r = await post(evt('checkout.session.completed', {
    customer: 'cus_x', subscription: 'sub_x', metadata: { plan: 'free' },
  }))
  ok('a checkout for the free plan changes nothing', r.body.applied === false,
    'there is nothing to buy · a session claiming otherwise is not to be trusted')
}

/* ------------------------------------------ what the app reads it back as -- */
{
  const [orgs] = await Promise.all([
    (async () => {
      const b = await build({
        entryPoints: ['api/_lib/orgs.ts'], bundle: true, format: 'esm', platform: 'node',
        write: false, external: ['pg'], logLevel: 'silent',
      })
      const f = join(OUT, 'orgs.mjs')
      writeFileSync(f, b.outputFiles[0].text)
      return import(pathToFileURL(f).href)
    })(),
  ])
  const acct = (await pool.query(`select id from accounts where privy_did = $1`, [did])).rows[0].id
  const me = await orgs.membershipOf(pool, acct)
  ok('the plan reaches the app through the membership', me.plan === 'managed' && me.planStatus === 'active',
    'this is what /api/org?action=me returns · the Billing screen reads it')

  const fresh = (await pool.query(
    `insert into accounts (privy_did) values ($1) returning id`, ['did:privy:' + randomUUID()])).rows[0].id
  const solo = await orgs.ensureOrg(pool, fresh)
  ok('a brand-new company is free and active', solo.plan === 'free' && solo.planStatus === 'active',
    'no row is written for it · the column default is already right')
}

await pool.end()
rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
