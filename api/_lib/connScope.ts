// Who owns a connected app.
//
// A connection used to belong to whoever clicked Connect. That is wrong for a
// company: the marketing team's Instagram token was one person's, and when they
// left, the company lost the account. An app connection is the COMPANY's access
// to its own Instagram, so it belongs to the organisation.
//
// One exception, and it matters: the Claude key.
//
// `anthropic` is stored in the same table, but it is not an app the company
// reaches into — it is a billing instrument. Founder's whole promise is "your
// key, your bill". Sweeping it into the organisation would quietly make one
// member's Anthropic account pay for everyone else's work, which is nobody's
// intention and nobody's expectation. It stays personal.
//
// Nothing migrates on a flag day. An account's existing personal rows are
// adopted into its organisation the first time it asks for one, and a connector
// the organisation already holds is left alone rather than colliding with it.
import type { Pool } from 'pg'
import { ensureOrg } from './orgs.js'

/** Connectors that stay with the person, never the company. */
export const PERSONAL_CONNECTORS = new Set(['anthropic'])

export const isPersonal = (connectorId: string): boolean => PERSONAL_CONNECTORS.has(connectorId)

/**
 * The organisation whose connections this account should see, adopting anything
 * it still holds personally.
 *
 * Returns null when there is no organisation to be had — which is not an error,
 * only the older shape, and every caller falls back to the account.
 */
export async function orgScope(pool: Pool, accountId: string): Promise<string | null> {
  try {
    const me = await ensureOrg(pool, accountId)
    await adopt(pool, accountId, me.orgId)
    return me.orgId
  } catch {
    return null
  }
}

/**
 * Hand this account's personal app connections to its organisation.
 *
 * `not exists` is what makes this safe to run on every request and safe when two
 * people in the same company had each connected the same app: the first one in
 * becomes the company's, the second stays personal and keeps working for its
 * owner rather than being dropped or overwriting a colleague's token.
 */
async function adopt(pool: Pool, accountId: string, orgId: string): Promise<void> {
  await pool.query(
    `update connections c
        set org_id = $2,
            connected_by = coalesce(c.connected_by, c.account_id),
            updated_at = now()
      where c.account_id = $1
        and c.org_id is null
        and c.connector_id <> all($3::text[])
        and not exists (
          select 1 from connections o
           where o.org_id = $2 and o.connector_id = c.connector_id
        )`,
    [accountId, orgId, [...PERSONAL_CONNECTORS]],
  )
}

/**
 * The `where` clause that finds a connection for this caller, and the arguments
 * it needs.
 *
 * The organisation's row wins when there is one; an older personal row still
 * answers, so an account whose adoption has not happened yet (no database
 * migration applied, or a connector another member already owns) is never
 * suddenly disconnected.
 */
export function scopeWhere(accountId: string, orgId: string | null, connectorId: string, personal = isPersonal(connectorId)) {
  if (personal || !orgId) {
    return {
      sql: 'account_id = $1 and connector_id = $2',
      args: [accountId, connectorId] as unknown[],
      order: '',
    }
  }
  return {
    sql: '(org_id = $3 or (org_id is null and account_id = $1)) and connector_id = $2',
    args: [accountId, connectorId, orgId] as unknown[],
    // the company's row first, the leftover personal one only if there is none
    order: 'order by (org_id is not null) desc',
  }
}
