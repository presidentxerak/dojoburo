-- =====================================================================
-- DojoBuro settlement schema (PostgreSQL).
-- Works with Supabase / Neon / Vercel Postgres / plain Postgres.
--
-- Apply once:   psql "$DATABASE_URL" -f db/schema.sql
--
-- Design goals:
--   * idempotent Stripe webhook processing (webhook_events guard)
--   * an auditable credit ledger (source of truth for balance)
--   * a record of each on-ledger XRP settlement (the "via x402" receipt)
-- =====================================================================

create extension if not exists "pgcrypto";  -- gen_random_uuid()

-- Users. Keyed by Privy DID when Privy is on; guests never hit the DB.
create table if not exists accounts (
  id           uuid primary key default gen_random_uuid(),
  privy_did    text unique,                       -- Privy user id (did:privy:...)
  email        text,
  xrpl_address text,                              -- where settled XRP is delivered (optional)
  currency     text not null default 'USD',
  created_at   timestamptz not null default now()
);
create index if not exists idx_accounts_email on accounts(lower(email));

-- Every Checkout Session that resulted in a payment (idempotency + amount map).
create table if not exists checkout_sessions (
  id            text primary key,                 -- Stripe cs_... id
  account_id    uuid references accounts(id),
  fiat_amount   numeric(12,2) not null,           -- major units (e.g. 25.00)
  fiat_currency text not null,                    -- USD / EUR / JPY
  xrp_amount    numeric(20,6),                    -- XRP credited at settlement
  status        text not null default 'paid',     -- paid|settled|failed
  created_at    timestamptz not null default now()
);
create index if not exists idx_sessions_account on checkout_sessions(account_id);

-- Stripe events we've already handled — the idempotency guard.
create table if not exists webhook_events (
  id           text primary key,                  -- Stripe evt_... id
  type         text not null,
  processed_at timestamptz not null default now()
);

-- Credit movements. Positive = grant (top-up), negative = spend / withdrawal.
create table if not exists credit_ledger (
  id          bigint generated always as identity primary key,
  account_id  uuid not null references accounts(id),
  delta_xrp   numeric(20,6) not null,             -- +topup / -spend / -settle:onledger
  reason      text not null,                      -- 'topup' | 'settle:onledger' | 'skill:run'
  ref         text,                               -- cs_... / tx hash / invoice
  created_at  timestamptz not null default now()
);
create index if not exists idx_ledger_account on credit_ledger(account_id);

-- The on-ledger XRP payout for a paid top-up (optional delivery to user wallet).
create table if not exists settlements (
  id           uuid primary key default gen_random_uuid(),
  session_id   text not null references checkout_sessions(id),
  account_id   uuid not null references accounts(id),
  xrp_amount   numeric(20,6) not null,
  destination  text not null,                     -- user's XRPL address
  tx_hash      text,                              -- XRPL Payment hash
  tx_result    text,                              -- tesSUCCESS / ...
  status       text not null default 'pending',   -- pending|validated|failed
  created_at   timestamptz not null default now(),
  unique (session_id)                             -- one settlement per session
);

-- Live balance per account (sum of the ledger).
create or replace view account_balances as
  select account_id, coalesce(sum(delta_xrp), 0)::numeric(20,6) as balance_xrp
  from credit_ledger
  group by account_id;
