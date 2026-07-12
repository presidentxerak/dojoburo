-- =====================================================================
-- DojoBuro company secrets (env vars) schema (PostgreSQL). Apply AFTER
-- db/schema.sql and db/connectors.sql:
--   psql "$DATABASE_URL" -f db/secrets.sql
--
-- Per-company environment variables (STRIPE_KEY, …). The VALUE is stored
-- ENCRYPTED at rest (AES-256-GCM, sealed by api/_lib/vault.ts with
-- CONNECTOR_ENC_KEY) — the browser only ever receives the name + a short
-- masked preview, never the plaintext. The server decrypts only to inject the
-- variable into a company's agent run.
-- =====================================================================

create table if not exists company_secrets (
  id          uuid primary key default gen_random_uuid(),
  account_id  uuid not null references accounts(id) on delete cascade,
  dojo_id     text not null,                 -- the company (workshop dojo id)
  name        text not null,                 -- env var name, e.g. STRIPE_KEY
  value_enc   text not null,                 -- SEALED (aes-256-gcm)
  preview     text,                          -- e.g. '••••1a2b' — safe to show
  description text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (account_id, dojo_id, name)         -- one value per name per company
);
create index if not exists idx_secrets_account_dojo on company_secrets(account_id, dojo_id);
