-- =====================================================================
-- DojoBuro organisations + synced company documents (PostgreSQL).
-- Apply AFTER db/schema.sql and db/connectors.sql:
--   psql "$DATABASE_URL" -f db/orgs.sql
--
-- Why this exists
-- ---------------
-- Everything a company produced — its brand kit, its website, its finance
-- model, its CRM, each teammate's context — lived in one person's IndexedDB.
-- Two colleagues could not open the same company, clearing site data destroyed
-- it, and a new laptop started from zero. Local-first is right as a CACHE and
-- fatal as the only copy.
--
-- So a company now belongs to an organisation, and its documents sync. The
-- browser keeps its copy and stays fast and usable offline; it simply stops
-- being the only one.
--
-- Nothing migrates
-- ----------------
-- There is no backfill to run and no flag day. Every existing account becomes
-- an organisation of one, created lazily the first time it is needed, with that
-- account as owner. A solo founder never notices this table exists.
-- =====================================================================

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- The organisation. For most accounts this is a company of one.
-- ---------------------------------------------------------------------------
create table if not exists organisations (
  id         uuid primary key default gen_random_uuid(),
  name       text not null default 'My company',
  created_by uuid references accounts(id) on delete set null,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Who is in it, and what they may do.
--
--   owner   · the one account that cannot be removed. Billing, deletion.
--   admin   · invite and remove people, connect and disconnect apps.
--   member  · run the teams, read and write company documents.
--   viewer  · read only. Cannot run a teammate or change a document.
--
-- Roles are enforced on the server (api/_lib/orgs.ts), never by the UI alone.
-- ---------------------------------------------------------------------------
create table if not exists org_members (
  org_id     uuid not null references organisations(id) on delete cascade,
  account_id uuid not null references accounts(id) on delete cascade,
  role       text not null default 'member'
             check (role in ('owner', 'admin', 'member', 'viewer')),
  joined_at  timestamptz not null default now(),
  primary key (org_id, account_id)
);
create index if not exists idx_org_members_account on org_members(account_id);

-- Exactly one owner per organisation. Handing over ownership is a transaction
-- that demotes the old owner and promotes the new one; this index makes a
-- half-finished handover impossible rather than merely unlikely.
create unique index if not exists idx_org_one_owner
  on org_members(org_id) where role = 'owner';

-- ---------------------------------------------------------------------------
-- Pending invitations.
--
-- An invitation is a LINK, not an email match.
--
-- The obvious design is to invite an address and let whoever signs in with it
-- join. We cannot do that safely: the Privy access token proves the DID and
-- nothing else, so the only email available server-side is one the client
-- typed. Matching on that would mean anyone who knows a colleague's address
-- could claim their seat. Verifying it properly needs a Privy app secret and a
-- server-side user lookup, which is an operator step this deployment does not
-- have.
--
-- So the invitation carries a secret instead, and holding it is the proof —
-- the same shape as every "anyone with the link can join" invitation. Only the
-- SHA-256 of the token is stored, so a database dump does not hand over a set
-- of live invitations, and the plaintext is shown exactly once, to the admin
-- who created it.
--
-- `email` is kept as a label so the roster can say who a pending invitation was
-- meant for. It is never used to decide anything.
-- ---------------------------------------------------------------------------
create table if not exists org_invites (
  id          uuid primary key default gen_random_uuid(),
  org_id      uuid not null references organisations(id) on delete cascade,
  token_hash  text not null unique,
  email       text,
  role        text not null default 'member'
              check (role in ('admin', 'member', 'viewer')),
  invited_by  uuid references accounts(id) on delete set null,
  created_at  timestamptz not null default now(),
  expires_at  timestamptz not null default now() + interval '14 days',
  accepted_at timestamptz,
  accepted_by uuid references accounts(id) on delete set null
);
create index if not exists idx_org_invites_org on org_invites(org_id) where accepted_at is null;

-- ---------------------------------------------------------------------------
-- The company documents themselves.
--
-- `key` is the same key the browser uses in its IndexedDB `projects` store —
-- `brand.<dojo>`, `site.<dojo>`, `ctx.<dojo>.<role>` — so the two sides address
-- the same thing and no mapping table can drift.
--
-- `version` is what makes concurrent editing safe without a merge engine: a
-- push carries the version it was based on, and the server refuses it if it has
-- moved on. The client is handed the newer document instead of having its own
-- silently overwritten. Last-write-wins is a decision, not an accident.
-- ---------------------------------------------------------------------------
create table if not exists org_docs (
  org_id     uuid not null references organisations(id) on delete cascade,
  key        text not null,
  body       jsonb not null,
  version    bigint not null default 1,
  updated_by uuid references accounts(id) on delete set null,
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  primary key (org_id, key)
);
-- the sync pulls "everything changed since I last looked", so this is the index
-- that matters
create index if not exists idx_org_docs_updated on org_docs(org_id, updated_at desc);

-- Every version that was replaced. A losing write is kept rather than dropped,
-- so a colleague who overwrites your afternoon has not destroyed it.
create table if not exists org_doc_revisions (
  id         bigint generated always as identity primary key,
  org_id     uuid not null references organisations(id) on delete cascade,
  key        text not null,
  body       jsonb not null,
  version    bigint not null,
  updated_by uuid references accounts(id) on delete set null,
  updated_at timestamptz not null default now()
);
create index if not exists idx_org_doc_rev on org_doc_revisions(org_id, key, version desc);

-- ---------------------------------------------------------------------------
-- Connections belong to the organisation, not to whoever clicked Connect.
--
-- A connection held per account means the marketing team's Instagram token is
-- owned by one person; when they leave, the company loses the account. The
-- column is nullable and the old per-account rows keep working — resolution
-- prefers an organisation-level connection and falls back to the personal one,
-- so this is additive and nothing breaks on the way through.
--
-- connected_by is kept: knowing whose authorisation a token came from is the
-- first question asked when one stops working.
-- ---------------------------------------------------------------------------
alter table connections add column if not exists org_id       uuid references organisations(id) on delete cascade;
alter table connections add column if not exists connected_by uuid references accounts(id) on delete set null;
create unique index if not exists idx_connections_org
  on connections(org_id, connector_id) where org_id is not null;
create index if not exists idx_connections_org_lookup on connections(org_id);
