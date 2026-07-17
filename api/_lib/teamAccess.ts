// Team roles + audit trail for the secrets vault.
//
// The vault owner can grant teammates access to ONE dojo's secrets with a
// role ('admin' manages secrets · 'viewer' sees names + audit only). A member
// is added by email; the seat is CLAIMED the first time a Privy-verified user
// whose Privy account really owns that email shows up — the email is checked
// against the Privy API server-side (PRIVY_APP_SECRET), never trusted from the
// client. Power path: the owner can also add a member directly by DID
// (did:privy:…), which needs no Privy API secret at all.
//
// Audit events (save / remove / inject) are best-effort: they never break the
// main operation if the table isn't applied yet.
import type { Pool } from 'pg'
import { privyAppId } from './privyAuth'

const ENV = process.env as Record<string, string | undefined>

export type TeamRole = 'owner' | 'admin' | 'viewer'
export interface DojoAccess { accountId: string; role: TeamRole }

export function teamClaimConfigured(): boolean {
  return !!(privyAppId() && ENV.PRIVY_APP_SECRET)
}

// ---- Privy user → verified emails (cached per instance, 10 min) ------------
const emailCache = new Map<string, { emails: string[]; at: number }>()
const EMAIL_TTL_MS = 10 * 60 * 1000

/** The emails REALLY linked to a Privy user, straight from the Privy API. */
export async function privyEmailsFor(did: string): Promise<string[]> {
  const appId = privyAppId()
  const secret = ENV.PRIVY_APP_SECRET
  if (!appId || !secret || !did.startsWith('did:privy:')) return []
  const hit = emailCache.get(did)
  if (hit && Date.now() - hit.at < EMAIL_TTL_MS) return hit.emails
  try {
    const res = await fetch(`https://auth.privy.io/api/v1/users/${encodeURIComponent(did)}`, {
      headers: {
        authorization: 'Basic ' + Buffer.from(`${appId}:${secret}`).toString('base64'),
        'privy-app-id': appId,
        accept: 'application/json',
      },
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return []
    const j: any = await res.json()
    const emails: string[] = []
    for (const acc of Array.isArray(j?.linked_accounts) ? j.linked_accounts : []) {
      const e = acc?.address || acc?.email
      if (typeof e === 'string' && e.includes('@')) emails.push(e.trim().toLowerCase())
    }
    emailCache.set(did, { emails, at: Date.now() })
    return emails
  } catch {
    return []
  }
}

/** Resolve what the caller may do with dojo `dojoId`'s vault.
 *  Owner (their own account) → 'owner'. Otherwise a Privy-verified member:
 *  by claimed DID first, else by Privy-verified email (claims the seat). */
export async function resolveDojoAccess(
  pool: Pool,
  callerAccountId: string | null,
  callerDid: string | null,
  dojoId: string,
): Promise<DojoAccess | null> {
  // the caller's own vault always wins (their rows, their rules)
  if (callerAccountId) {
    const own = await pool.query(
      `select 1 from company_secrets where account_id = $1 and dojo_id = $2 limit 1`,
      [callerAccountId, dojoId],
    )
    if (own.rows[0]) return { accountId: callerAccountId, role: 'owner' }
  }
  // membership requires a PROVEN Privy identity — guests can't hold seats
  if (callerDid) {
    const claimed = await pool.query(
      `select owner_account_id, role from dojo_team where dojo_id = $1 and member_did = $2
        order by created_at desc limit 1`,
      [dojoId, callerDid],
    )
    if (claimed.rows[0]) return { accountId: claimed.rows[0].owner_account_id, role: claimed.rows[0].role === 'admin' ? 'admin' : 'viewer' }
    // unclaimed seat matching one of the caller's Privy-verified emails?
    const emails = await privyEmailsFor(callerDid)
    if (emails.length) {
      const open = await pool.query(
        `select id, owner_account_id, role from dojo_team
          where dojo_id = $1 and member_did is null and member_email = any($2)
          order by created_at desc limit 1`,
        [dojoId, emails],
      )
      if (open.rows[0]) {
        await pool.query(`update dojo_team set member_did = $1 where id = $2`, [callerDid, open.rows[0].id])
        return { accountId: open.rows[0].owner_account_id, role: open.rows[0].role === 'admin' ? 'admin' : 'viewer' }
      }
    }
  }
  // no secrets yet + no membership: the caller's own (empty) vault, if any
  if (callerAccountId) return { accountId: callerAccountId, role: 'owner' }
  return null
}

/** Best-effort audit write · never throws, never blocks the main operation. */
export async function auditSecret(
  pool: Pool,
  e: { accountId: string; dojoId: string; actor: string; action: 'save' | 'remove' | 'inject'; name: string; ip?: string },
): Promise<void> {
  try {
    await pool.query(
      `insert into secrets_audit (account_id, dojo_id, actor, action, secret_name, ip)
       values ($1,$2,$3,$4,$5,$6)`,
      [e.accountId, e.dojoId, e.actor.slice(0, 120), e.action, e.name.slice(0, 64), (e.ip || '').slice(0, 64) || null],
    )
  } catch {
    /* audit table not applied yet · never break the operation */
  }
}

/** The most recent audit rows for a dojo's vault (names + actors, no values). */
export async function auditList(pool: Pool, accountId: string, dojoId: string, limit = 30): Promise<Array<{ actor: string; action: string; name: string; at: string }>> {
  try {
    const r = await pool.query(
      `select actor, action, secret_name, at from secrets_audit
        where account_id = $1 and dojo_id = $2 order by at desc limit $3`,
      [accountId, dojoId, Math.min(100, Math.max(1, limit))],
    )
    return r.rows.map((row) => ({ actor: row.actor, action: row.action, name: row.secret_name, at: row.at }))
  } catch {
    return []
  }
}
