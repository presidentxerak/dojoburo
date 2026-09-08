// The organisation an account belongs to, and what it is allowed to do there.
//
// A company used to be one person's browser. It is now an organisation, and
// every account has exactly one — created the moment it is first needed, with
// that account as owner, so a solo founder never sees this concept at all and
// nothing had to be migrated.
//
// Roles are decided here and nowhere else. The UI hides what you cannot do as a
// courtesy; this module is what makes it true.
import type { Pool } from 'pg'
import { createHash, randomBytes } from 'node:crypto'

export type Role = 'owner' | 'admin' | 'member' | 'viewer'

export interface Membership {
  orgId: string
  name: string
  role: Role
}

/** Rank, so a check reads as "at least" rather than a list of roles. */
const RANK: Record<Role, number> = { viewer: 0, member: 1, admin: 2, owner: 3 }

/** True when `role` is `need` or stronger. */
export const atLeast = (role: Role, need: Role): boolean => RANK[role] >= RANK[need]

/** What each capability costs. One table, so a rule cannot be spelled two ways. */
export const CAN = {
  readDocs: 'viewer',
  writeDocs: 'member',
  runAgents: 'member',
  connectApps: 'admin',
  invite: 'admin',
  removeMember: 'admin',
  rename: 'admin',
  transferOwnership: 'owner',
  deleteOrg: 'owner',
} as const satisfies Record<string, Role>

export type Capability = keyof typeof CAN

export const can = (role: Role, what: Capability): boolean => atLeast(role, CAN[what])

/**
 * The organisation this account belongs to, creating one if it has none.
 *
 * Runs in a transaction because "look, then create" races with itself the
 * moment two of the account's own tabs load at the same time — and a second
 * organisation for the same person is not a cosmetic bug: their companies would
 * be split across two of them.
 */
export async function ensureOrg(pool: Pool, accountId: string): Promise<Membership> {
  const found = await membershipOf(pool, accountId)
  if (found) return found

  const c = await pool.connect()
  try {
    await c.query('begin')
    // Take the account row first. Any concurrent caller for the SAME account
    // blocks here, so exactly one of them creates the organisation.
    await c.query('select id from accounts where id = $1 for update', [accountId])

    const again = await c.query(
      `select o.id, o.name, m.role from org_members m
         join organisations o on o.id = m.org_id
        where m.account_id = $1 limit 1`,
      [accountId],
    )
    if (again.rows[0]) {
      await c.query('commit')
      return { orgId: again.rows[0].id, name: again.rows[0].name, role: again.rows[0].role }
    }

    const org = await c.query(
      `insert into organisations (name, created_by) values ($1, $2) returning id, name`,
      ['My company', accountId],
    )
    await c.query(
      `insert into org_members (org_id, account_id, role) values ($1, $2, 'owner')`,
      [org.rows[0].id, accountId],
    )
    await c.query('commit')
    return { orgId: org.rows[0].id, name: org.rows[0].name, role: 'owner' }
  } catch (e) {
    try { await c.query('rollback') } catch { /* the connection is going away anyway */ }
    throw e
  } finally {
    c.release()
  }
}

/** The account's membership, or null when it has none yet. Never creates. */
export async function membershipOf(pool: Pool, accountId: string): Promise<Membership | null> {
  const r = await pool.query(
    `select o.id, o.name, m.role from org_members m
       join organisations o on o.id = m.org_id
      where m.account_id = $1 limit 1`,
    [accountId],
  )
  if (!r.rows[0]) return null
  return { orgId: r.rows[0].id, name: r.rows[0].name, role: r.rows[0].role as Role }
}

export interface Member {
  accountId: string
  email: string | null
  role: Role
  joinedAt: string
  you: boolean
}

export async function membersOf(pool: Pool, orgId: string, me: string): Promise<Member[]> {
  const r = await pool.query(
    `select a.id, a.email, m.role, m.joined_at from org_members m
       join accounts a on a.id = m.account_id
      where m.org_id = $1
      order by case m.role when 'owner' then 0 when 'admin' then 1 when 'member' then 2 else 3 end,
               m.joined_at`,
    [orgId],
  )
  return r.rows.map((row) => ({
    accountId: row.id,
    email: row.email,
    role: row.role as Role,
    joinedAt: row.joined_at,
    you: row.id === me,
  }))
}

/* ------------------------------------------------------------- invitations */
// An invitation is a link, not an email match. The access token proves a DID
// and nothing else, so the only address available here is one the client typed;
// deciding membership on that would let anyone claim a colleague's seat by
// knowing their email. Holding the secret is the proof instead.
//
// Only the hash is stored. The plaintext is returned once, to the admin who
// created it, and is not recoverable afterwards — a lost invitation is
// reissued, not looked up.

const hash = (token: string) => createHash('sha256').update(token, 'utf8').digest('hex')

/** A fresh invitation. Returns the token to show ONCE. */
export async function createInvite(
  pool: Pool, orgId: string, invitedBy: string, role: Exclude<Role, 'owner'>, email?: string | null,
): Promise<{ id: string; token: string }> {
  const token = randomBytes(24).toString('base64url')
  const r = await pool.query(
    `insert into org_invites (org_id, token_hash, email, role, invited_by)
     values ($1, $2, $3, $4, $5) returning id`,
    [orgId, hash(token), (email || '').trim().slice(0, 200) || null, role, invitedBy],
  )
  return { id: r.rows[0].id, token }
}

export interface Invite { id: string; email: string | null; role: Role; createdAt: string; expiresAt: string }

export async function invitesOf(pool: Pool, orgId: string): Promise<Invite[]> {
  const r = await pool.query(
    `select id, email, role, created_at, expires_at from org_invites
      where org_id = $1 and accepted_at is null and expires_at > now()
      order by created_at desc`,
    [orgId],
  )
  return r.rows.map((x) => ({
    id: x.id, email: x.email, role: x.role as Role,
    createdAt: x.created_at.toISOString(), expiresAt: x.expires_at.toISOString(),
  }))
}

export async function revokeInvite(pool: Pool, orgId: string, id: string): Promise<boolean> {
  const r = await pool.query(`delete from org_invites where org_id = $1 and id = $2`, [orgId, id])
  return (r.rowCount ?? 0) > 0
}

export type AcceptResult =
  | { ok: true; membership: Membership }
  | { ok: false; reason: 'unknown' | 'expired' | 'already_member' | 'has_work' }

/**
 * Redeem an invitation.
 *
 * An account that already belongs somewhere keeps that membership unless the
 * organisation it is leaving is genuinely empty — no other people, no
 * documents. That is the ordinary "I signed up, then got invited" case. Joining
 * a second organisation while holding work would be a merge, and a merge is not
 * something to do silently on someone's behalf.
 */
export async function acceptInvite(pool: Pool, accountId: string, token: string): Promise<AcceptResult> {
  const inv = await pool.query(
    `select id, org_id, role, expires_at, accepted_at from org_invites where token_hash = $1`,
    [hash(String(token || ''))],
  )
  if (!inv.rows[0] || inv.rows[0].accepted_at) return { ok: false, reason: 'unknown' }
  if (new Date(inv.rows[0].expires_at) <= new Date()) return { ok: false, reason: 'expired' }

  const { id, org_id, role } = inv.rows[0]
  const existing = await membershipOf(pool, accountId)
  if (existing?.orgId === org_id) return { ok: false, reason: 'already_member' }

  if (existing) {
    const solo = await pool.query(
      `select (select count(*) from org_members where org_id = $1) as members,
              (select count(*) from org_docs   where org_id = $1) as docs`,
      [existing.orgId],
    )
    if (Number(solo.rows[0].members) !== 1 || Number(solo.rows[0].docs) !== 0) {
      return { ok: false, reason: 'has_work' }
    }
  }

  const c = await pool.connect()
  try {
    await c.query('begin')
    await c.query(
      `insert into org_members (org_id, account_id, role) values ($1, $2, $3)
       on conflict (org_id, account_id) do nothing`,
      [org_id, accountId, role],
    )
    await c.query(`update org_invites set accepted_at = now(), accepted_by = $2 where id = $1`, [id, accountId])
    // the empty organisation they arrived with has nothing left in it
    if (existing) await c.query(`delete from organisations where id = $1`, [existing.orgId])
    await c.query('commit')
  } catch (e) {
    try { await c.query('rollback') } catch { /* going away */ }
    throw e
  } finally {
    c.release()
  }
  const m = await membershipOf(pool, accountId)
  return m ? { ok: true, membership: m } : { ok: false, reason: 'unknown' }
}

/** Remove someone. The owner cannot be removed — ownership is transferred first. */
export async function removeMember(pool: Pool, orgId: string, accountId: string): Promise<boolean> {
  const r = await pool.query(
    `delete from org_members where org_id = $1 and account_id = $2 and role <> 'owner'`,
    [orgId, accountId],
  )
  return (r.rowCount ?? 0) > 0
}

/** Change someone's role. Never to or from owner. */
export async function setRole(pool: Pool, orgId: string, accountId: string, role: Exclude<Role, 'owner'>): Promise<boolean> {
  const r = await pool.query(
    `update org_members set role = $3 where org_id = $1 and account_id = $2 and role <> 'owner'`,
    [orgId, accountId, role],
  )
  return (r.rowCount ?? 0) > 0
}

export async function renameOrg(pool: Pool, orgId: string, name: string): Promise<string> {
  const clean = String(name || '').trim().slice(0, 80) || 'My company'
  await pool.query(`update organisations set name = $2 where id = $1`, [orgId, clean])
  return clean
}
