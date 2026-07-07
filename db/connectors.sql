-- =====================================================================
-- DojoBuro tool connectors schema (PostgreSQL). Apply AFTER db/schema.sql:
--   psql "$DATABASE_URL" -f db/connectors.sql
--
-- Stores each user's connected tools. OAuth tokens are stored ENCRYPTED
-- (AES-256-GCM, sealed by api/_lib/vault.ts with CONNECTOR_ENC_KEY) — the
-- browser never receives them; the server decrypts only to inject a tool's
-- MCP credential at agent run time.
-- =====================================================================

-- Guests have no Privy DID; connections still need a stable account. Add a
-- client_ref (the workshop account id from localStorage) as an alternate key.
alter table accounts add column if not exists client_ref text;
create unique index if not exists idx_accounts_client_ref on accounts(client_ref) where client_ref is not null;

create table if not exists connections (
  id               uuid primary key default gen_random_uuid(),
  account_id       uuid not null references accounts(id) on delete cascade,
  connector_id     text not null,                 -- 'notion' | 'github' | ...
  status           text not null default 'connected', -- connected|revoked|error
  scope            text,
  external_account text,                           -- provider workspace/user label
  access_token     text not null,                 -- SEALED (aes-256-gcm)
  refresh_token    text,                           -- SEALED
  expires_at       timestamptz,
  mcp_url          text,                           -- resolved MCP endpoint for this tool
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now(),
  unique (account_id, connector_id)                -- one live connection per tool
);
create index if not exists idx_connections_account on connections(account_id);
