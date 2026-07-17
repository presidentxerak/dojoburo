-- =====================================================================
-- DojoBuro company secrets (env vars) schema (PostgreSQL). Apply AFTER
-- db/schema.sql and db/connectors.sql:
--   psql "$DATABASE_URL" -f db/secrets.sql
--
-- Per-company environment variables (STRIPE_KEY, …). The VALUE is stored
-- ENCRYPTED at rest (AES-256-GCM, sealed by api/_lib/vault.ts with
-- CONNECTOR_ENC_KEY) and is WRITE-ONLY: the browser only ever receives the
-- name + description — never the plaintext, and (since the preview removal)
-- never any characters derived from it. The server decrypts only to inject
-- the variable into a company's agent run.
-- =====================================================================

create table if not exists company_secrets (
  id          uuid primary key default gen_random_uuid(),
  account_id  uuid not null references accounts(id) on delete cascade,
  dojo_id     text not null,                 -- the company (workshop dojo id)
  name        text not null,                 -- env var name, e.g. STRIPE_KEY
  value_enc   text not null,                 -- SEALED (aes-256-gcm)
  preview     text,                          -- legacy column · no longer written (kept null)
  description text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  unique (account_id, dojo_id, name)         -- one value per name per company
);
create index if not exists idx_secrets_account_dojo on company_secrets(account_id, dojo_id);
