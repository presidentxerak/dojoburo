// Read a user's connected-tool OAuth token server-side, refreshing it when it's
// about to expire. Tokens are stored sealed (AES-256-GCM) in the connections
// table; this returns the decrypted access token for making a provider API call
// on the user's behalf (e.g. send a Gmail). Returns null when not connected.
import type { Pool } from 'pg'
import { open, seal } from './vault.js'
import { serverConnector, refreshOAuthToken } from './connectors.js'
import { orgScope, scopeWhere, isPersonal } from './connScope.js'

export interface ConnToken { token: string; external: string | null }

export async function connectionToken(pool: Pool, accountId: string, connectorId: string): Promise<ConnToken | null> {
  try {
    // An app connection belongs to the company; the Claude key belongs to the
    // person. connScope decides which, and hands back the right `where`.
    const orgId = isPersonal(connectorId) ? null : await orgScope(pool, accountId)
    const w = scopeWhere(accountId, orgId, connectorId)
    const r = await pool.query(
      `select id, access_token, refresh_token, expires_at, external_account
         from connections where ${w.sql} and status = 'connected' ${w.order} limit 1`,
      w.args,
    )
    const row = r.rows[0]
    if (!row) return null
    let token = open(row.access_token)
    if (!token) return null

    // refresh if the token is expired or expiring within a minute
    const exp = row.expires_at ? new Date(row.expires_at).getTime() : 0
    if (exp && exp < Date.now() + 60_000 && row.refresh_token) {
      const c = serverConnector(connectorId)
      const rt = open(row.refresh_token)
      if (c && rt) {
        const fresh = await refreshOAuthToken(c, rt)
        if (fresh?.accessToken) {
          token = fresh.accessToken
          const newExp = fresh.expiresIn ? new Date(Date.now() + fresh.expiresIn * 1000) : null
          // by id · the row we actually read, whoever it belongs to
          await pool.query(
            `update connections set access_token = $1, expires_at = $2, updated_at = now() where id = $3`,
            [seal(fresh.accessToken), newExp, row.id],
          ).catch(() => { /* best-effort persist */ })
        }
      }
    }
    return { token, external: row.external_account || null }
  } catch {
    return null
  }
}
