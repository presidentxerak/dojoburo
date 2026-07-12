// Runtime access to a company's sealed secrets. The agent worker calls
// loadSecretEnv() to decrypt this company's env vars just-in-time (server-side)
// so a task can use them; listSecretNames() returns only the NAMES, which are
// safe to surface to the model so it knows which credentials exist.
import type { Pool } from 'pg'
import { open, vaultConfigured } from './vault'
import { dbConfigured } from './db'

/** Decrypt all of a company's secrets → { NAME: value }. Server-side only. */
export async function loadSecretEnv(pool: Pool, accountId: string, dojoId: string): Promise<Record<string, string>> {
  const env: Record<string, string> = {}
  if (!dbConfigured() || !vaultConfigured() || !accountId || !dojoId) return env
  try {
    const r = await pool.query(`select name, value_enc from company_secrets where account_id = $1 and dojo_id = $2`, [accountId, dojoId])
    for (const row of r.rows) {
      const v = open(row.value_enc)
      if (v != null) env[row.name] = v
    }
  } catch {
    /* fail closed · return whatever decrypted so far */
  }
  return env
}

/** Just the names (no values) — safe to tell the model which env vars exist. */
export async function listSecretNames(pool: Pool, accountId: string, dojoId: string): Promise<string[]> {
  if (!dbConfigured() || !accountId || !dojoId) return []
  try {
    const r = await pool.query(`select name from company_secrets where account_id = $1 and dojo_id = $2 order by name`, [accountId, dojoId])
    return r.rows.map((row) => row.name as string)
  } catch {
    return []
  }
}
