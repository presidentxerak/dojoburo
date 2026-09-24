-- =====================================================================
-- DojoBuro · le profil du joueur, sauvegardé sur le serveur.
--
-- Indépendant des autres fichiers (aucune clé étrangère vers accounts) :
--   psql "$DATABASE_URL" -f db/profile.sql
--
-- Pourquoi ce fichier existe
-- --------------------------
-- La progression vivait seulement dans le navigateur : un autre appareil
-- repartait de zéro. Quand l'élève se connecte (e-mail ou Google, par Privy),
-- sa progression est copiée ici et fusionnée avec celle de chaque appareil
-- (voir api/_lib/profile.ts). Sans connexion, rien n'est envoyé.
--
-- Deux colonnes, deux régimes :
--   · `data`   · ce que l'appareil envoie (leçons terminées, partie de
--                Dojoburo, pseudonyme du clan), fusionné, jamais écrasé ;
--   · `access` · les formations ouvertes. LE CLIENT N'Y ÉCRIT JAMAIS : seul un
--                paiement Stripe vérifié par le serveur y inscrit un droit
--                (api/profile.ts?action=claim).
--
-- `game_profile_claims` garantit qu'une session de paiement n'ouvre un droit
-- que sur UN compte : la clé primaire est l'identifiant de la session.
--
-- Réexécutable : chaque création porte `if not exists`.
-- =====================================================================

create table if not exists game_profiles (
  -- le DID Privy · le `sub` d'un jeton vérifié, jamais une valeur envoyée
  user_did    text primary key check (char_length(user_did) between 1 and 200),
  data        jsonb not null default '{}',
  access      jsonb not null default '{}',
  updated_at  timestamptz not null default now()
);

create table if not exists game_profile_claims (
  -- « cs_… » · une session de paiement Stripe Checkout
  session_id  text primary key check (char_length(session_id) between 4 and 255),
  user_did    text not null check (char_length(user_did) between 1 and 200),
  -- ce que la session a ouvert · { "path": true } ou { "trade": "sales" }
  grant_json  jsonb not null default '{}',
  claimed_at  timestamptz not null default now()
);

create index if not exists game_profile_claims_user_idx on game_profile_claims (user_did);
