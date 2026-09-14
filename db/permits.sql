-- =====================================================================
-- Qui a le droit d'ÉCRIRE dans les applications de l'entreprise.
--
-- Une connexion dit « cette société a relié son Stripe ». Elle ne dit pas
-- « un agent peut y créer un produit et un lien de paiement tout seul ».
-- C'était pourtant le comportement : une fois l'application connectée, elle
-- était rattachée à chaque run et le modèle appelait ses outils sans que rien
-- ne le borne.
--
-- Cette table sépare les deux. La lecture suit la connexion ; l'écriture
-- demande un geste explicite, posé par un administrateur, sur l'écran de
-- l'application elle-même.
--
-- La ligne n'est jamais SUPPRIMÉE à la révocation : `revoked_at` est renseigné
-- et `permit` repasse à 'read'. Qui avait accordé quoi, et quand cela a été
-- retiré, est exactement ce qu'un audit vient chercher — et une ligne effacée
-- ne répond à aucune question.
--
--   psql "$DATABASE_URL" -f db/permits.sql
-- =====================================================================

create table if not exists connector_permits (
  org_id       uuid not null references organisations(id) on delete cascade,
  connector_id text not null,
  -- 'read' est le défaut de fait : une application sans ligne ici n'écrit pas.
  permit       text not null default 'read' check (permit in ('read', 'write')),
  granted_by   uuid references accounts(id) on delete set null,
  granted_at   timestamptz not null default now(),
  revoked_at   timestamptz,
  primary key (org_id, connector_id)
);

create index if not exists idx_permits_org on connector_permits(org_id) where revoked_at is null;
