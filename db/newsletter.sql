-- LES CONTACTS · les adresses laissées pour le week-end de l'IA gratuit.
--
-- Demandé : « la version gratuite sert à l'acquisition de mails pour la
-- newsletter ». Deux choses distinctes sont rangées ici, et le RGPD exige
-- qu'elles le restent :
--   · l'adresse donnée pour ouvrir la formation gratuite (source, langue),
--   · le consentement à la newsletter, donné À PART, par une case non cochée.
-- Une adresse sans consentement ne reçoit aucune newsletter.
--
-- À lancer une fois :  psql "$DATABASE_URL" -f db/newsletter.sql

create table if not exists newsletter_contacts (
  email            text primary key check (char_length(email) between 5 and 200 and email = lower(email)),
  lang             text not null default 'fr' check (lang in ('fr', 'en')),
  source           text not null default 'weekend' check (char_length(source) <= 40),
  newsletter       boolean not null default false,
  consent_at       timestamptz,
  unsubscribed_at  timestamptz,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create index if not exists newsletter_contacts_optin_idx
  on newsletter_contacts (created_at desc) where newsletter and unsubscribed_at is null;
