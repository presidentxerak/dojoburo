-- =====================================================================
-- DojoBuro · le clan, le fil où les élèves montrent ce qu'ils ont construit.
--
-- Indépendant des autres fichiers (aucune clé étrangère vers accounts) :
--   psql "$DATABASE_URL" -f db/clan.sql
--
-- Pourquoi ce fichier existe
-- --------------------------
-- Le jeu n'a pas de comptes : la progression vit dans le navigateur. Le fil ne
-- connaît donc pas de personnes, seulement des AUTEURS ANONYMES : un pseudonyme
-- choisi par l'élève et l'empreinte SHA-256 d'une clé tirée au hasard dans son
-- navigateur. Cette empreinte suffit à reconnaître l'auteur quand il efface son
-- message ; elle ne permet à personne de se faire passer pour lui, et elle ne
-- dit rien de qui il est. Aucune adresse, aucune IP n'est écrite ici.
--
-- Les compteurs (bravos, signalements) sont tenus sur le message lui-même, à
-- côté des tables qui empêchent de compter deux fois le même appareil : la
-- lecture du fil reste une seule requête sur une seule table.
--
-- Réexécutable : chaque création porte `if not exists`.
-- =====================================================================

create extension if not exists "pgcrypto";

create table if not exists clan_posts (
  id           uuid primary key default gen_random_uuid(),
  -- sha256('clan:device:' || clé d'appareil), en hexadécimal
  author_hash  text not null check (char_length(author_hash) = 64),
  pseudo       text not null check (char_length(pseudo) between 2 and 24),
  title        text not null check (char_length(title) between 3 and 80),
  body         text not null check (char_length(body) between 10 and 1000),
  -- empreinte du texte normalisé · repère le même message posté deux fois
  body_hash    text not null check (char_length(body_hash) = 64),
  link         text check (link is null or (char_length(link) <= 300 and link ~* '^https?://')),
  tags         text[] not null default '{}' check (cardinality(tags) <= 3),
  bravos       integer not null default 0 check (bravos >= 0),
  reports      integer not null default 0 check (reports >= 0),
  -- à la milliseconde · le curseur de pagination la transporte telle quelle
  created_at   timestamptz not null default date_trunc('milliseconds', now())
);

-- Le fil · du plus récent au plus ancien, sans les messages masqués.
create index if not exists clan_posts_feed_idx
  on clan_posts (created_at desc, id desc) where reports < 3;

-- Les messages d'un appareil dans l'heure · la règle du doublon.
create index if not exists clan_posts_author_idx
  on clan_posts (author_hash, created_at desc);

-- Un bravo par appareil et par message · la clé primaire le garantit.
create table if not exists clan_bravos (
  post_id      uuid not null references clan_posts(id) on delete cascade,
  device_hash  text not null check (char_length(device_hash) = 64),
  created_at   timestamptz not null default now(),
  primary key (post_id, device_hash)
);

create index if not exists clan_bravos_device_idx on clan_bravos (device_hash);

-- Un signalement par appareil et par message · au troisième, le message
-- quitte le fil (voir LIMITS.hideAt dans api/_lib/clan.ts).
create table if not exists clan_reports (
  post_id      uuid not null references clan_posts(id) on delete cascade,
  device_hash  text not null check (char_length(device_hash) = 64),
  created_at   timestamptz not null default now(),
  primary key (post_id, device_hash)
);
