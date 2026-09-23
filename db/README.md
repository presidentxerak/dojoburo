# La base de données · ce qu'on applique, dans quel ordre

Ce dossier tient le schéma PostgreSQL du produit. Il marche sur Supabase, Neon,
Vercel Postgres ou un Postgres nu.

## Pourquoi ce fichier existe

L'ordre d'application était écrit dans l'en-tête de chaque fichier, et seulement
dans ceux qui en avaient besoin : trois des sept n'en disaient rien. Pour le
connaître en entier il fallait ouvrir les sept et recoller les morceaux, ce qui
est précisément l'effort qu'on ne fournit pas le jour où quelque chose ne va
pas. Il est donc écrit ici, une fois.

## L'ordre

```sh
psql "$DATABASE_URL" -f db/schema.sql      # les comptes, et la garde d'idempotence des webhooks
psql "$DATABASE_URL" -f db/connectors.sql  # les connexions aux applications
psql "$DATABASE_URL" -f db/orgs.sql        # les organisations, leurs membres, leurs invitations
psql "$DATABASE_URL" -f db/permits.sql     # ce qu'un agent a le droit d'écrire, et où
psql "$DATABASE_URL" -f db/secrets.sql     # le coffre chiffré côté serveur
psql "$DATABASE_URL" -f db/rag.sql         # les espaces documentaires, les documents, la recherche
```

`db/retire-settlement.sql` n'est PAS dans cette liste, et c'est voulu : ce n'est
pas du schéma, c'est une migration d'un seul jour. Elle retire les tables d'un
produit précédent qui vendait des crédits et les réglait sur un registre
(`credit_ledger`, `settlements`, `checkout_sessions`, et une colonne d'adresse
sur `accounts`). Sur une base neuve elle n'a rien à faire ; sur une base
ancienne, on l'applique une fois, après les six autres.

## Tout est réexécutable

Les six fichiers de schéma peuvent être relancés sur une base déjà à jour sans
rien casser : chaque création porte `if not exists`, la seule colonne ajoutée
conditionnellement est gardée par une vérification, et les deux fonctions sont
en `create or replace`.

C'est une propriété utile, et pas seulement par élégance : elle veut dire que
**la réparation est toujours la même commande**. Si un doute existe sur l'état
de la base, on relance les six dans l'ordre et on repart d'un schéma connu.

## Si un schéma étranger a été appliqué par erreur

Ça arrive : deux projets ouverts, deux consoles, et on colle dans la mauvaise.
Ce qu'il faut savoir avant de paniquer :

- **Des tables en trop ne cassent rien.** Ce produit ne lit que les seize
  tables listées plus bas ; il ignore tout le reste, et une table inconnue
  n'entre en conflit avec rien tant qu'elle ne porte pas un de ces seize noms.
- **Le risque réel est un nom qui se recouvre.** Si le schéma étranger crée ou
  modifie une table portant l'un de ces noms, les colonnes peuvent ne plus
  correspondre à ce que le code attend.
- **La vérification** : comparer la liste des tables de la base à celle du
  produit.

```sh
psql "$DATABASE_URL" -c "\dt"     # ce que la base contient
node scripts/test-deploy.mjs      # ce que le produit attend · la liste est dans la garde
```

Une table en trop se supprime quand on est sûr de ce qu'elle est. Une table du
produit dont les colonnes ne correspondent plus se répare en relançant le
fichier qui la crée, après avoir sauvegardé ce qu'elle contient.

## Les tables du produit

| fichier | tables |
| --- | --- |
| `schema.sql` | `accounts`, `webhook_events` |
| `connectors.sql` | `connections` |
| `orgs.sql` | `organisations`, `org_members`, `org_invites`, `org_docs`, `org_doc_revisions`, `work_runs`, `work_usage` |
| `permits.sql` | `connector_permits` |
| `secrets.sql` | `company_secrets` |
| `rag.sql` | `rag_spaces`, `rag_documents`, `rag_chunks`, `rag_queries` |

Cette liste est vérifiée par `scripts/test-deploy.mjs` : un fichier de schéma
ajouté sans être écrit ici fait rougir la construction, pour que ce tableau ne
puisse pas se périmer en silence.
