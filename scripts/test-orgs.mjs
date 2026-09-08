// Organisations and document sync, against a real Postgres.
//
// These are the rules the whole of wave two rests on, and none of them can be
// checked by reading the code: that two tabs of the same account cannot end up
// in two organisations, that an invitation cannot move somebody out of a
// company that holds work, that a stale write is refused rather than silently
// winning, and that the losing version is kept.
//
// Run against any throwaway database:
//   TEST_DATABASE_URL=postgres://... node scripts/test-orgs.mjs
//
// Without TEST_DATABASE_URL it skips, so the build gate stays green on a
// machine with no Postgres — the point is that it RUNS in CI and locally, not
// that it blocks a laptop that has no database.
import { Pool } from 'pg'
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

const URL_ = process.env.TEST_DATABASE_URL
if (!URL_) {
  console.log('test-orgs · skipped (set TEST_DATABASE_URL to run)')
  process.exit(0)
}

// The modules under test are TypeScript; strip the types the way gen-seo does.
// They are written to a real file rather than imported as a data: URL — a
// failure inside one otherwise prints its entire source, base64-encoded, as the
// stack frame, which buries the actual error.
const { build } = await import('esbuild')
const TMP = mkdtempSync(join(tmpdir(), 'dojo-orgs-'))
async function load(entry) {
  const out = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, external: ['pg'], logLevel: 'silent',
  })
  const f = join(TMP, basename(entry).replace(/\.ts$/, '.mjs'))
  writeFileSync(f, out.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const orgs = await load('api/_lib/orgs.ts')
const docs = await load('api/_lib/docs.ts')

const pool = new Pool({ connectionString: URL_, max: 6 })
let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

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

// a clean slate every run
for (const f of ['db/schema.sql', 'db/connectors.sql', 'db/orgs.sql']) {
  await pool.query(readFileSync(f, 'utf8'))
}
await pool.query(`truncate org_doc_revisions, org_docs, org_invites, org_members, organisations,
                           connections, accounts restart identity cascade`)

const account = async (email) =>
  (await pool.query(`insert into accounts (privy_did, email) values ($1, $2) returning id`,
    ['did:privy:' + Math.random().toString(36).slice(2), email])).rows[0].id

/* ---- an account gets exactly one organisation, and owns it -------------- */
const alice = await account('alice@acme.test')
const m1 = await orgs.ensureOrg(pool, alice)
ok('a new account gets an organisation', !!m1.orgId)
ok('and owns it', m1.role === 'owner')

const m2 = await orgs.ensureOrg(pool, alice)
ok('asking again returns the same one', m2.orgId === m1.orgId)

/* ---- two tabs racing must not make two organisations ------------------- */
const bob = await account('bob@acme.test')
const raced = await Promise.all([
  orgs.ensureOrg(pool, bob), orgs.ensureOrg(pool, bob),
  orgs.ensureOrg(pool, bob), orgs.ensureOrg(pool, bob),
])
const distinct = new Set(raced.map((r) => r.orgId))
ok('four simultaneous loads make one organisation', distinct.size === 1, `${distinct.size} created`)
const count = await pool.query(`select count(*)::int n from org_members where account_id = $1`, [bob])
ok('and one membership', count.rows[0].n === 1)

/* ---- roles ------------------------------------------------------------- */
ok('an owner may invite', orgs.can('owner', 'invite'))
ok('an admin may invite', orgs.can('admin', 'invite'))
ok('a member may not invite', !orgs.can('member', 'invite'))
ok('a member may write documents', orgs.can('member', 'writeDocs'))
ok('a viewer may not write documents', !orgs.can('viewer', 'writeDocs'))
ok('a viewer may read them', orgs.can('viewer', 'readDocs'))
ok('an admin may not delete the organisation', !orgs.can('admin', 'deleteOrg'))

/* ---- an organisation has exactly one owner ----------------------------- */
let twoOwners = false
try {
  await pool.query(`insert into org_members (org_id, account_id, role) values ($1, $2, 'owner')`, [m1.orgId, bob])
  twoOwners = true
} catch { /* the partial unique index is what we want to fire */ }
ok('a second owner is impossible', !twoOwners)

/* ---- an invitation is a link, and holding it is the proof -------------- */
const inv = await orgs.createInvite(pool, m1.orgId, alice, 'member', 'carol@acme.test')
ok('an invitation returns a token once', typeof inv.token === 'string' && inv.token.length > 20)
const stored = await pool.query(`select token_hash from org_invites where id = $1`, [inv.id])
ok('the token itself is not stored', stored.rows[0].token_hash !== inv.token)
ok('only its hash is', /^[0-9a-f]{64}$/.test(stored.rows[0].token_hash))

const carol = await account('carol@acme.test')
const acc = await orgs.acceptInvite(pool, carol, inv.token)
ok('the token joins the organisation', acc.ok && acc.membership.orgId === m1.orgId)
ok('with the role it was issued for', acc.ok && acc.membership.role === 'member')

const twice = await orgs.acceptInvite(pool, await account('mallory@evil.test'), inv.token)
ok('a spent invitation is refused', !twice.ok && twice.reason === 'unknown')

const wrong = await orgs.acceptInvite(pool, await account('nobody@evil.test'), 'not-a-real-token')
ok('an unknown token is refused', !wrong.ok && wrong.reason === 'unknown')

/* ---- and where an address CAN be checked, it may name the seat --------- */
// Without a Privy app secret the server cannot tell whose address is whose, so
// an invitation is a link and the email on it is a label. With one, an admin
// who types an address means it — and the binding is recorded on the row, so an
// invitation is always redeemed under the rule it was created under rather than
// whatever the environment happens to say later.
{
  // its own organisation · these joins must not disturb the roster counted later
  const host = await account('binder@acme.test')
  const bOrg = (await orgs.ensureOrg(pool, host)).orgId

  const open_ = await orgs.createInvite(pool, bOrg, host, 'member', 'someone@acme.test', false)
  ok('an unbound invitation says so', open_.bound === false)
  const anyone = await orgs.acceptInvite(pool, await account('other@acme.test'), open_.token, null)
  ok('and anyone holding it may join', anyone.ok, anyone.ok ? '' : anyone.reason)

  const bound = await orgs.createInvite(pool, bOrg, host, 'member', 'Frank@Acme.test', true)
  ok('a bound invitation says so', bound.bound === true)

  const stranger = await orgs.acceptInvite(pool, await account('stranger@evil.test'), bound.token, 'stranger@evil.test')
  ok('someone else’s proven address cannot redeem it', !stranger.ok && stranger.reason === 'email_mismatch')

  const unproven = await orgs.acceptInvite(pool, await account('frank@acme.test'), bound.token, null)
  ok('and neither can an address we could not verify', !unproven.ok && unproven.reason === 'email_mismatch',
    'letting an unverifiable caller through would make the binding decorative')

  const frank = await account('frank2@acme.test')
  const right = await orgs.acceptInvite(pool, frank, bound.token, 'FRANK@acme.TEST')
  ok('the proven holder joins, whatever the casing', right.ok && right.membership.orgId === bOrg,
    right.ok ? '' : right.reason)

  const nobody = await orgs.createInvite(pool, bOrg, host, 'viewer', null, true)
  ok('binding with no address binds nothing', nobody.bound === false,
    'a lock nobody holds the key to is not a security feature')
  const walkIn = await orgs.acceptInvite(pool, await account('walkin@acme.test'), nobody.token, null)
  ok('so that link still works', walkIn.ok, walkIn.ok ? '' : walkIn.reason)
}

const expired = await orgs.createInvite(pool, m1.orgId, alice, 'viewer', null)
await pool.query(`update org_invites set expires_at = now() - interval '1 day' where id = $1`, [expired.id])
const late = await orgs.acceptInvite(pool, await account('late@acme.test'), expired.token)
ok('an expired invitation is refused', !late.ok && late.reason === 'expired')

/* ---- knowing an address is not enough ---------------------------------- */
// The whole reason invitations are tokens: an email the client typed proves
// nothing, so there must be no path that turns one into a membership.
const impostor = await account('carol@acme.test')
const imp = await orgs.membershipOf(pool, impostor)
ok('reusing an invited address grants nothing', imp === null)

/* ---- an invitation cannot move somebody who has work ------------------- */
const dave = await account('dave@acme.test')
const dm = await orgs.ensureOrg(pool, dave)
await docs.push(pool, dm.orgId, dave, 'brand.dojo-1', { name: 'Dave Co' }, 0)
const forDave = await orgs.createInvite(pool, m1.orgId, alice, 'member', 'dave@acme.test')
const dres = await orgs.acceptInvite(pool, dave, forDave.token)
ok('an organisation holding work is not silently abandoned', !dres.ok && dres.reason === 'has_work')
ok('and Dave keeps his own', (await orgs.membershipOf(pool, dave)).orgId === dm.orgId)

/* ---- an empty organisation is traded in cleanly ------------------------ */
const erin = await account('erin@acme.test')
const em0 = await orgs.ensureOrg(pool, erin)
const forErin = await orgs.createInvite(pool, m1.orgId, alice, 'viewer', null)
const eres = await orgs.acceptInvite(pool, erin, forErin.token)
ok('an empty organisation is traded for the invitation', eres.ok && eres.membership.orgId === m1.orgId)
ok('and is cleaned up', (await pool.query(
  `select 1 from organisations where id = $1`, [em0.orgId])).rowCount === 0)

/* ---- listing and revoking ---------------------------------------------- */
const open1 = await orgs.createInvite(pool, m1.orgId, alice, 'member', 'frank@acme.test')
const list1 = await orgs.invitesOf(pool, m1.orgId)
ok('open invitations are listed', list1.some((i) => i.email === 'frank@acme.test'))
ok('and never carry the token', !JSON.stringify(list1).includes(open1.token))
ok('revoking one removes it', await orgs.revokeInvite(pool, m1.orgId, open1.id))
ok('a revoked token no longer works',
  !(await orgs.acceptInvite(pool, await account('frank@acme.test'), open1.token)).ok)

/* ---- roles can be changed, the owner cannot ---------------------------- */
ok('a role can be raised', await orgs.setRole(pool, m1.orgId, carol, 'admin'))
ok('and it took', (await orgs.membershipOf(pool, carol)).role === 'admin')
ok('the owner cannot be demoted', !(await orgs.setRole(pool, m1.orgId, alice, 'member')))
ok('the owner cannot be removed', !(await orgs.removeMember(pool, m1.orgId, alice)))
ok('anyone else can be', await orgs.removeMember(pool, m1.orgId, erin))

ok('renaming works', (await orgs.renameOrg(pool, m1.orgId, '  Acme Robotics  ')) === 'Acme Robotics')
ok('an empty name falls back', (await orgs.renameOrg(pool, m1.orgId, '   ')) === 'My company')

/* ---- documents --------------------------------------------------------- */
const ORG = m1.orgId
const d1 = await docs.push(pool, ORG, alice, 'site.dojo-1', { title: 'first' }, 0)
ok('a first write is accepted', d1.ok && d1.doc.version === 1)

const d2 = await docs.push(pool, ORG, carol, 'site.dojo-1', { title: 'second' }, 1)
ok('a write based on the current version wins', d2.ok && d2.doc.version === 2)
ok('and records who did it', d2.ok && d2.doc.updatedBy === carol)

const stale = await docs.push(pool, ORG, alice, 'site.dojo-1', { title: 'stale' }, 1)
ok('a stale write is refused', !stale.ok && stale.conflict === true)
ok('and hands back what is really there', !stale.ok && stale.server.body.title === 'second')

const after = await docs.getOne(pool, ORG, 'site.dojo-1')
ok('the refused write changed nothing', after.body.title === 'second' && after.version === 2)

const revs = await pool.query(
  `select body, version from org_doc_revisions where org_id = $1 and key = 'site.dojo-1' order by version`, [ORG])
ok('the version it replaced was kept', revs.rows.length === 1 && revs.rows[0].body.title === 'first')

/* ---- concurrent writers · exactly one wins ----------------------------- */
await docs.push(pool, ORG, alice, 'race.doc', { n: 0 }, 0)
const results = await Promise.all(
  [1, 2, 3, 4, 5].map((n) => docs.push(pool, ORG, alice, 'race.doc', { n }, 1)),
)
const won = results.filter((r) => r.ok).length
ok('five writers on one version · exactly one wins', won === 1, `${won} accepted`)
ok('the other four are told', results.filter((r) => !r.ok && r.conflict).length === 4)
const raceDoc = await docs.getOne(pool, ORG, 'race.doc')
ok('and the version moved exactly once', raceDoc.version === 2, `v${raceDoc.version}`)

/* ---- pull -------------------------------------------------------------- */
const all = await docs.pull(pool, ORG)
ok('a pull sees every document', all.length === 2, `${all.length}`)
const mark = new Date(Date.now() - 1).toISOString()
await docs.push(pool, ORG, alice, 'late.doc', { late: true }, 0)
const since = await docs.pull(pool, ORG, mark)
ok('a pull since a moment sees only what changed', since.some((d) => d.key === 'late.doc'))

const idx = await docs.index(pool, ORG)
ok('the index carries no bodies', idx.length === 3 && !('body' in idx[0]))

/* ---- deletion is a tombstone, not a hole ------------------------------- */
const gone = await docs.push(pool, ORG, alice, 'late.doc', null, 1, true)
ok('a delete is recorded as a version', gone.ok && gone.doc.deleted === true)
ok('so another device learns about it', (await docs.pull(pool, ORG)).some((d) => d.key === 'late.doc' && d.deleted))

/* ---- keys are constrained ---------------------------------------------- */
ok('a normal key is valid', docs.validKey('ctx.dojo-1.marketus'))
ok('a path is not', !docs.validKey('../../etc/passwd'))
ok('an empty key is not', !docs.validKey(''))
ok('a very long key is not', !docs.validKey('x'.repeat(201)))

/* ---- members ----------------------------------------------------------- */
const mem = await orgs.membersOf(pool, ORG, alice)
// alice owns it and carol was promoted to admin · erin was removed above
ok('the roster lists everyone still in', mem.length === 2, mem.map((m) => m.role).join(','))
ok('and nobody who left', !mem.some((m) => m.accountId === erin))
ok('the owner is first', mem[0].role === 'owner')
ok('and knows which one is you', mem[0].you === true)

await pool.end()
rmSync(TMP, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
