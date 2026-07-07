// Resolve/create the accounts row a connection or run belongs to. A user is
// identified by a Privy DID when signed in with Privy, otherwise by the
// workshop client id from localStorage (stored in accounts.client_ref).
import type { Pool } from 'pg'

export interface AccountRef {
  privyDid?: string | null
  clientRef?: string | null
  email?: string | null
}

/** Upsert and return the account id for a ref. Returns null if the ref is empty. */
export async function resolveAccountId(pool: Pool, ref: AccountRef): Promise<string | null> {
  const privy = clean(ref.privyDid)
  const client = clean(ref.clientRef)
  const email = clean(ref.email)
  if (!privy && !client) return null

  if (privy) {
    const r = await pool.query(
      `insert into accounts (privy_did, email, client_ref)
       values ($1, $2, $3)
       on conflict (privy_did) do update set
         email      = coalesce(excluded.email, accounts.email),
         client_ref = coalesce(accounts.client_ref, excluded.client_ref)
       returning id`,
      [privy, email, client],
    )
    return r.rows[0].id
  }
  // guest: key on client_ref
  const found = await pool.query(`select id from accounts where client_ref = $1 limit 1`, [client])
  if (found.rows[0]) return found.rows[0].id
  const c = await pool.query(`insert into accounts (client_ref, email) values ($1, $2) returning id`, [client, email])
  return c.rows[0].id
}

/** Look up an existing account id without creating one. */
export async function findAccountId(pool: Pool, ref: AccountRef): Promise<string | null> {
  const privy = clean(ref.privyDid)
  const client = clean(ref.clientRef)
  if (privy) {
    const r = await pool.query(`select id from accounts where privy_did = $1 limit 1`, [privy])
    if (r.rows[0]) return r.rows[0].id
  }
  if (client) {
    const r = await pool.query(`select id from accounts where client_ref = $1 limit 1`, [client])
    if (r.rows[0]) return r.rows[0].id
  }
  return null
}

function clean(v: string | null | undefined): string | null {
  const s = typeof v === 'string' ? v.trim() : ''
  return s ? s.slice(0, 200) : null
}
