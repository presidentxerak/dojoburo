-- =====================================================================
-- DojoBuro core schema (PostgreSQL).
-- Works with Supabase / Neon / Vercel Postgres / plain Postgres.
--
-- Apply once:   psql "$DATABASE_URL" -f db/schema.sql
-- Then:         psql "$DATABASE_URL" -f db/connectors.sql
--               psql "$DATABASE_URL" -f db/orgs.sql
--
-- What is here
-- ------------
--   * accounts        · who a request belongs to, keyed by Privy DID
--   * webhook_events  · the idempotency guard, so a Stripe retry is a no-op
--
-- What is NOT here any more
-- -------------------------
-- This file used to be called the settlement schema, and it created five more
-- tables: checkout_sessions, credit_ledger, settlements, an account_balances
-- view and an xrpl_address column. They were built for a product that sold
-- credits and settled them on a ledger. That product is gone twice over — the
-- ledger rail was removed months ago, and the credit went with it when runs
-- became authorised by a quota rather than a balance.
--
-- Nothing has written to any of them since. Creating them on a fresh install
-- was a schema that described a product that does not exist, which is exactly
-- how a future reader concludes there is a balance to check.
--
-- An existing database keeps them: dropping tables is not something a schema
-- file should do to someone's data on the way past. `db/retire-settlement.sql`
-- removes them deliberately, when the operator decides.
-- =====================================================================

create extension if not exists "pgcrypto";  -- gen_random_uuid()

-- Users. Keyed by Privy DID when Privy is on; guests never hit the DB.
create table if not exists accounts (
  id           uuid primary key default gen_random_uuid(),
  privy_did    text unique,                       -- Privy user id (did:privy:...)
  email        text,
  currency     text not null default 'USD',
  created_at   timestamptz not null default now()
);
create index if not exists idx_accounts_email on accounts(lower(email));

-- Stripe events we've already handled — the idempotency guard.
--
-- A subscription webhook is delivered more than once as a matter of course:
-- Stripe retries until it gets a 2xx, so "did I already apply this?" is the
-- first question every delivery has to answer. The primary key is the answer.
create table if not exists webhook_events (
  id           text primary key,                  -- Stripe evt_... id
  type         text not null,
  processed_at timestamptz not null default now()
);
