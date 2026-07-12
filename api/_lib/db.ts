// Postgres access for the settlement webhook (Node serverless runtime).
// A module-level pool is reused across warm invocations. Provider-agnostic:
// any standard `postgres://` DATABASE_URL works (Supabase / Neon / Vercel
// Postgres / RDS). Use a POOLED connection string in serverless.
import { Pool } from 'pg'

let pool: Pool | null = null

export function getPool(): Pool {
  if (!pool) {
    const connectionString = process.env.DATABASE_URL
    if (!connectionString) throw new Error('DATABASE_URL not set')
    pool = new Pool({
      connectionString,
      max: 3,
      idleTimeoutMillis: 10_000,
      // most hosted Postgres require TLS; allow the platform CA
      ssl: /sslmode=disable/.test(connectionString) ? undefined : { rejectUnauthorized: false },
    })
    // CRITICAL: without this listener, an idle-client error (Supabase/pgBouncer
    // dropping a connection) becomes an unhandled 'error' event that CRASHES the
    // serverless function → 500. Swallow it; the pool re-establishes clients.
    pool.on('error', (err) => { console.error('pg pool idle error:', err?.message || err) })
  }
  return pool
}

export function dbConfigured(): boolean {
  return !!process.env.DATABASE_URL
}
