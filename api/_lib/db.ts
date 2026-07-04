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
  }
  return pool
}

export function dbConfigured(): boolean {
  return !!process.env.DATABASE_URL
}
