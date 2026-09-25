-- LA COMMUNAUTÉ · le fil à la Skool : publications par catégorie, épinglées,
-- j'aime, commentaires en fil, recherche.
--
-- Demandé : « faire un clone amélioré de l'app skool.com [...] objectif en
-- faire un outil communautaire comme le groupe d'Elliot », avec un compte
-- obligatoire pour participer (la lecture reste ouverte). Chaque auteur est un
-- compte Privy (did), jamais une adresse : l'e-mail ne quitte pas Privy.
--
-- À lancer une fois :  psql "$DATABASE_URL" -f db/community.sql

create extension if not exists "pgcrypto";

create table if not exists community_members (
  did          text primary key check (char_length(did) between 5 and 120),
  name         text not null check (char_length(name) between 2 and 32),
  bio          text not null default '' check (char_length(bio) <= 280),
  created_at   timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create table if not exists community_posts (
  id           uuid primary key default gen_random_uuid(),
  author_did   text not null references community_members(did) on delete cascade,
  category     text not null check (category in ('general', 'intro', 'questions', 'wins', 'prompts', 'resources')),
  title        text not null check (char_length(title) between 3 and 120),
  body         text not null check (char_length(body) between 10 and 5000),
  pinned       boolean not null default false,
  likes        integer not null default 0 check (likes >= 0),
  comments     integer not null default 0 check (comments >= 0),
  deleted      boolean not null default false,
  created_at   timestamptz not null default date_trunc('milliseconds', now()),
  last_activity_at timestamptz not null default now(),
  edited_at    timestamptz
);

create index if not exists community_posts_feed_idx on community_posts (created_at desc, id desc) where not deleted;
create index if not exists community_posts_cat_idx on community_posts (category, created_at desc) where not deleted;
create index if not exists community_posts_pinned_idx on community_posts (pinned) where pinned and not deleted;
create index if not exists community_posts_search_idx on community_posts
  using gin (to_tsvector('simple', title || ' ' || body));

create table if not exists community_comments (
  id           uuid primary key default gen_random_uuid(),
  post_id      uuid not null references community_posts(id) on delete cascade,
  parent_id    uuid references community_comments(id) on delete cascade,
  author_did   text not null references community_members(did) on delete cascade,
  body         text not null check (char_length(body) between 1 and 2000),
  likes        integer not null default 0 check (likes >= 0),
  deleted      boolean not null default false,
  created_at   timestamptz not null default now()
);

create index if not exists community_comments_post_idx on community_comments (post_id, created_at);

create table if not exists community_likes (
  target_type  text not null check (target_type in ('post', 'comment')),
  target_id    uuid not null,
  did          text not null references community_members(did) on delete cascade,
  created_at   timestamptz not null default now(),
  primary key (target_type, target_id, did)
);

-- ---------------------------------------------------------------------------
-- LOT 2 · MEMBRES ET CLASSEMENTS (ajouté ensuite, sans rien casser : chaque
-- instruction peut être rejouée).
--
-- · handle : l'identifiant PUBLIC d'un membre (son profil /clan/m/<handle>),
--   jamais son compte Privy.
-- · points : les j'aime reçus, tenus à jour à chaque j'aime (un j'aime sur
--   son propre message ne compte pas).
-- · recipient_did : à qui profite un j'aime, pour les classements sur 7 et
--   30 jours.
alter table community_members add column if not exists handle uuid not null default gen_random_uuid();
alter table community_members add column if not exists points integer not null default 0;
create unique index if not exists community_members_handle_idx on community_members (handle);
create index if not exists community_members_points_idx on community_members (points desc);
create index if not exists community_members_seen_idx on community_members (last_seen_at desc);
alter table community_likes add column if not exists recipient_did text;
create index if not exists community_likes_board_idx on community_likes (recipient_did, created_at desc);

-- ---------------------------------------------------------------------------
-- LOT 3 · LE CALENDRIER · les lives, masterclass et ateliers de la
-- communauté. Créés par les admins, visibles par tous.
create table if not exists community_events (
  id           uuid primary key default gen_random_uuid(),
  title        text not null check (char_length(title) between 3 and 120),
  description  text not null default '' check (char_length(description) <= 2000),
  starts_at    timestamptz not null,
  duration_min integer not null default 60 check (duration_min between 15 and 480),
  link         text check (link is null or (char_length(link) <= 300 and link ~* '^https://')),
  created_by   text not null,
  deleted      boolean not null default false,
  created_at   timestamptz not null default now()
);
create index if not exists community_events_start_idx on community_events (starts_at) where not deleted;

-- ---------------------------------------------------------------------------
-- LOT 4 · LES NOTIFICATIONS ET LES MESSAGES PRIVÉS.
--
-- Une notification naît d'un geste d'un autre membre (un commentaire sur ma
-- publication, une réponse à mon commentaire, un j'aime) ; jamais de moi vers
-- moi. Les messages privés vont d'un membre à un autre ; la conversation est
-- la paire des deux comptes, rangée dans l'ordre pour n'en faire qu'une.
create table if not exists community_notifications (
  id           uuid primary key default gen_random_uuid(),
  did          text not null references community_members(did) on delete cascade,
  kind         text not null check (kind in ('comment', 'reply', 'like_post', 'like_comment')),
  actor_did    text not null references community_members(did) on delete cascade,
  post_id      uuid references community_posts(id) on delete cascade,
  created_at   timestamptz not null default now(),
  read_at      timestamptz
);
create index if not exists community_notifications_did_idx on community_notifications (did, created_at desc);

create table if not exists community_messages (
  id           uuid primary key default gen_random_uuid(),
  from_did     text not null references community_members(did) on delete cascade,
  to_did       text not null references community_members(did) on delete cascade,
  body         text not null check (char_length(body) between 1 and 2000),
  created_at   timestamptz not null default now(),
  read_at      timestamptz,
  check (from_did <> to_did)
);
create index if not exists community_messages_pair_idx on community_messages (least(from_did, to_did), greatest(from_did, to_did), created_at desc);
create index if not exists community_messages_to_idx on community_messages (to_did, read_at);

-- LOT 5 · MODIFIER · un commentaire garde la trace de sa modification, comme
-- une publication.
alter table community_comments add column if not exists edited_at timestamptz;

-- ---------------------------------------------------------------------------
-- LOT 6 · LES MENTIONS ET LES SONDAGES.
--
-- Une mention s'écrit @[Nom](identifiant public) dans le texte ; la personne
-- mentionnée reçoit une notification « mention ». Un sondage est attaché à
-- une publication : 2 à 6 options, un vote par membre, qu'il peut changer.
alter table community_notifications drop constraint if exists community_notifications_kind_check;
alter table community_notifications add constraint community_notifications_kind_check
  check (kind in ('comment', 'reply', 'like_post', 'like_comment', 'mention'));

create table if not exists community_polls (
  post_id      uuid primary key references community_posts(id) on delete cascade,
  options      text[] not null check (cardinality(options) between 2 and 6)
);

create table if not exists community_poll_votes (
  post_id      uuid not null references community_polls(post_id) on delete cascade,
  did          text not null references community_members(did) on delete cascade,
  option       smallint not null check (option between 0 and 5),
  created_at   timestamptz not null default now(),
  primary key (post_id, did)
);

-- ---------------------------------------------------------------------------
-- LOT 7 · LES NOTIFICATIONS PAR E-MAIL (Brevo). Activées par défaut, coupées
-- d'un clic dans son profil de membre. La langue sert aux e-mails.
alter table community_members add column if not exists email_notify boolean not null default true;
alter table community_members add column if not exists lang text not null default 'fr';
