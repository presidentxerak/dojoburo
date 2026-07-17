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

-- ---------------------------------------------------------------------
-- Audit log · every write/removal (and future run-time injection) of a
-- secret is recorded: who (verified DID or guest id), what, from where.
-- Values are NEVER logged — names only.
-- ---------------------------------------------------------------------
create table if not exists secrets_audit (
  id          bigint generated always as identity primary key,
  account_id  uuid not null,                 -- the vault owner's account
  dojo_id     text not null,
  actor       text not null,                 -- 'did:privy:…' | 'guest:<id>'
  action      text not null,                 -- 'save' | 'remove' | 'inject'
  secret_name text not null,
  ip          text,
  at          timestamptz not null default now()
);
create index if not exists idx_secrets_audit on secrets_audit(account_id, dojo_id, at desc);

-- ---------------------------------------------------------------------
-- Team roles · the vault owner grants teammates access to one dojo's
-- secrets. Members are identified by their (Privy-verified) email; the
-- row is CLAIMED (member_did filled) the first time that verified user
-- shows up — email ownership is checked against the Privy API, never
-- against a client-sent string. Roles:
--   'admin'  · can add / rotate / remove secrets
--   'viewer' · sees names + audit trail only
-- ---------------------------------------------------------------------
create table if not exists dojo_team (
  id               uuid primary key default gen_random_uuid(),
  owner_account_id uuid not null references accounts(id) on delete cascade,
  dojo_id          text not null,
  member_email     text not null,
  member_did       text,                     -- filled when the member claims the seat
  role             text not null default 'viewer',
  created_at       timestamptz not null default now(),
  unique (owner_account_id, dojo_id, member_email)
);
create index if not exists idx_dojo_team_email on dojo_team(member_email);
create index if not exists idx_dojo_team_did on dojo_team(member_did);
