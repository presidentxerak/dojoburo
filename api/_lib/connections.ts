// Read a user's connected-tool OAuth token server-side, refreshing it when it's
// about to expire. Tokens are stored sealed (AES-256-GCM) in the connections
// table; this returns the decrypted access token for making a provider API call
// on the user's behalf (e.g. send a Gmail). Returns null when not connected.
import type { Pool } from 'pg'
import { open, seal } from './vault'
import { serverConnector, refreshOAuthToken } from './connectors'

export interface ConnToken { token: string; external: string | null }

export async function connectionToken(pool: Pool, accountId: string, connectorId: string): Promise<ConnToken | null> {
  try {
    const r = await pool.query(
      `select access_token, refresh_token, expires_at, external_account
         from connections where account_id = $1 and connector_id = $2 and status = 'connected'`,
      [accountId, connectorId],
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
          await pool.query(
            `update connections set access_token = $1, expires_at = $2, updated_at = now()
               where account_id = $3 and connector_id = $4`,
            [seal(fresh.accessToken), newExp, accountId, connectorId],
          ).catch(() => { /* best-effort persist */ })
        }
      }
    }
    return { token, external: row.external_account || null }
  } catch {
    return null
  }
}
