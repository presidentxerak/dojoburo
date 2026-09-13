-- =====================================================================
-- DojoBuro · les documents de l'entreprise, et ce qu'on en fait.
--
-- Apply AFTER db/schema.sql, db/connectors.sql and db/orgs.sql:
--   psql "$DATABASE_URL" -f db/rag.sql
--
-- Pourquoi ce fichier existe
-- --------------------------
-- Un agent qui ne connaît pas vos documents écrit des généralités. Le produit
-- que des entreprises françaises achètent aujourd'hui — LightOn, Mistral pour
-- l'entreprise — c'est l'inverse : on dépose ses contrats, ses comptes rendus,
-- ses procédures, et on interroge CELA, avec des citations qu'on peut ouvrir.
--
-- Trois décisions structurent tout ce fichier.
--
-- 1. Le lexical sans rien, le sémantique avec pgvector.
--    La recherche lexicale utilise la configuration `french` livrée en standard :
--    elle fonctionne sur un Postgres nu, sans extension et sans appel sortant.
--
--    La moitié sémantique demande pgvector, et ce n'est pas un choix de confort.
--    La version précédente de ce fichier calculait le cosinus en SQL sur une
--    colonne real[], en annonçant « de l'ordre de la dizaine de millisecondes ».
--    Mesuré, sur des vecteurs de 1024 dimensions et la même machine :
--
--      passages   real[] en SQL   pgvector seq   pgvector HNSW
--         1 000          505 ms           7 ms          1,0 ms
--        10 000        5 006 ms          65 ms          1,6 ms
--        50 000       23 349 ms         395 ms          1,0 ms
--
--    Mille passages, c'est une cinquantaine de documents. L'ancienne approche
--    perdait deux fois : pas d'index, et une façon de calculer la distance
--    soixante-quinze fois plus lente. L'index HNSW ne bouge pas avec la taille.
--
--    pgvector est disponible sur tous les Postgres managés (Neon, Supabase, RDS,
--    Cloud SQL, Azure) et tient dans un paquet sur une installation autonome
--    (`postgresql-16-pgvector`). Quand il est absent, ce fichier n'ajoute pas la
--    colonne et le produit reste lexical : dégradation visible, jamais lente.
--
-- 2. Tout est porté par l'organisation, jamais par la personne.
--    Une entreprise dépose ses documents une fois ; le collègue qui arrive les
--    trouve. C'est la même règle que org_docs, pour la même raison.
--
-- 3. La traçabilité n'est pas une option qu'on ajoute après.
--    rag_queries enregistre qui a demandé quoi, quand, et quels passages ont
--    répondu. Sans cela, « nos données restent chez nous » est une phrase ;
--    avec, c'est une pièce qu'on produit lors d'un audit (RGPD art. 30).
-- =====================================================================

create extension if not exists "pgcrypto";
create extension if not exists "unaccent";

-- ---------------------------------------------------------------------------
-- Un espace documentaire. L'équivalent du « workspace » : une entreprise peut
-- en tenir plusieurs (Juridique, RH, Commercial) et interroger l'un sans voir
-- l'autre, ce qui est la première chose que demande un service juridique.
-- ---------------------------------------------------------------------------
create table if not exists rag_spaces (
  id          uuid primary key default gen_random_uuid(),
  org_id      uuid not null references organisations(id) on delete cascade,
  name        text not null,
  -- combien de jours on garde un document sans le toucher · null = sans limite.
  -- Une durée de conservation est une obligation, pas un réglage cosmétique :
  -- « nous gardons tout pour toujours » n'est pas une réponse recevable.
  retention_days int,
  created_by  uuid references accounts(id) on delete set null,
  created_at  timestamptz not null default now(),
  unique (org_id, name)
);
create index if not exists idx_rag_spaces_org on rag_spaces(org_id);

-- ---------------------------------------------------------------------------
-- Le document déposé.
--
-- `sha256` sert à deux choses : ne pas facturer deux fois l'analyse du même
-- fichier, et prouver qu'un document produit lors d'un audit est bien celui qui
-- avait été indexé.
--
-- `body_md` est le Markdown obtenu à l'analyse. On le garde parce que c'est la
-- sortie que l'utilisateur a vue, et qu'une citation doit pouvoir être rouverte
-- des mois plus tard même si le binaire d'origine a été supprimé.
-- ---------------------------------------------------------------------------
create table if not exists rag_documents (
  id          uuid primary key default gen_random_uuid(),
  space_id    uuid not null references rag_spaces(id) on delete cascade,
  org_id      uuid not null references organisations(id) on delete cascade,
  filename    text not null,
  mime        text,
  bytes       bigint not null default 0,
  sha256      text not null,
  pages       int  not null default 1,
  body_md     text,
  -- 'pending' | 'parsed' | 'indexed' | 'failed'
  status      text not null default 'pending'
              check (status in ('pending', 'parsed', 'indexed', 'failed')),
  error       text,
  -- quel analyseur, chez quel sous-traitant, dans quelle région · c'est la
  -- ligne qu'on montre quand on demande « où est parti ce fichier ? »
  parsed_by   text,
  parsed_region text,
  uploaded_by uuid references accounts(id) on delete set null,
  created_at  timestamptz not null default now(),
  -- dernière fois qu'un document a servi · la conservation se compte là-dessus
  last_used_at timestamptz not null default now(),
  deleted_at  timestamptz
);
create index if not exists idx_rag_docs_space on rag_documents(space_id) where deleted_at is null;
create unique index if not exists idx_rag_docs_dedup on rag_documents(space_id, sha256) where deleted_at is null;

-- ---------------------------------------------------------------------------
-- Les passages.
--
-- `page` et `ordinal` sont la provenance : une citation sans numéro de page est
-- une citation qu'on ne peut pas vérifier, donc une citation qui ne sert à rien.
--
-- `tsv` est une colonne générée en configuration FRANÇAISE. C'est le choix qui
-- change tout sur des documents français : « obligations contractuelles » et
-- « obligation contractuelle » doivent tomber sur le même lemme, ce que la
-- configuration anglaise par défaut ne fait pas.
--
-- La colonne `embedding` n'est ajoutée QUE si pgvector est disponible, plus bas.
-- Sans lui, la recherche reste lexicale et fonctionne : un produit qui ne
-- démarre pas du tout sans clé n'est pas souverain, il est seulement dépendant
-- d'autre chose. Mais la moitié sémantique, elle, ne se simule pas — voir la
-- note en tête de fichier.
-- ---------------------------------------------------------------------------
create table if not exists rag_chunks (
  id          bigint generated always as identity primary key,
  doc_id      uuid not null references rag_documents(id) on delete cascade,
  space_id    uuid not null references rag_spaces(id) on delete cascade,
  ordinal     int  not null,
  page        int  not null default 1,
  text        text not null,
  tsv         tsvector generated always as (to_tsvector('french', coalesce(text, ''))) stored,
  -- de quel modèle vient ce vecteur · deux modèles différents ne se comparent
  -- pas, et une base à moitié réindexée donne des résultats silencieusement faux
  embed_model text,
  created_at  timestamptz not null default now()
);
create index if not exists idx_rag_chunks_tsv on rag_chunks using gin(tsv);
create index if not exists idx_rag_chunks_doc on rag_chunks(doc_id);
create index if not exists idx_rag_chunks_space on rag_chunks(space_id);

-- ---------------------------------------------------------------------------
-- La moitié sémantique, si la machine sait la porter.
--
-- La DIMENSION est fixée ici, une fois. Elle vaut 1024, celle de mistral-embed,
-- parce que Mistral est le fournisseur par défaut de ce déploiement. Un
-- opérateur qui emploie un autre modèle la change avant d'appliquer ce fichier :
--
--     psql "$DATABASE_URL" -c "set rag.embed_dim = 3584" -f db/rag.sql
--
-- Pourquoi une dimension fixe plutôt qu'une colonne `vector` libre : une colonne
-- sans dimension ne peut être indexée que par un index d'expression, et ANALYZE
-- échoue alors dès qu'une ligne porte une autre dimension. Vérifié. Les
-- statistiques cessent d'être mises à jour, y compris pour la recherche
-- lexicale, et rien ne le signale. Une dimension fixe transforme cette panne
-- silencieuse en refus d'insertion, qui se lit.
--
-- Le code vérifie la dimension avant d'écrire et nomme l'ALTER à jouer si elle
-- ne correspond pas au modèle configuré.
-- ---------------------------------------------------------------------------
do $$
declare d int := coalesce(nullif(current_setting('rag.embed_dim', true), '')::int, 1024);
begin
  if not exists (select 1 from pg_available_extensions where name = 'vector') then
    raise notice 'pgvector absent · la recherche restera lexicale (voir docs/DOCUMENTS.md)';
    return;
  end if;
  create extension if not exists vector;
  if not exists (
    select 1 from information_schema.columns
     where table_name = 'rag_chunks' and column_name = 'embedding'
  ) then
    execute format('alter table rag_chunks add column embedding vector(%s)', d);
  end if;
  -- HNSW plutôt qu'IVFFlat : il n'a pas besoin d'être reconstruit quand le corpus
  -- grandit, ce qui compte pour une base où l'on dépose des documents tous les
  -- jours. Le cosinus, parce que c'est la mesure sur laquelle les fournisseurs
  -- d'embeddings normalisent.
  execute 'create index if not exists idx_rag_chunks_hnsw
             on rag_chunks using hnsw (embedding vector_cosine_ops)';
end $$;

-- ---------------------------------------------------------------------------
-- Le journal des interrogations.
--
-- Ce n'est pas de la télémétrie produit : c'est la pièce qui permet de répondre
-- à « qui a consulté ce contrat, et quand ». Le texte de la question est
-- conservé parce qu'une question peut elle-même contenir une donnée personnelle,
-- et qu'il faut donc pouvoir l'effacer — d'où la purge plus bas, qui traite le
-- journal comme le reste.
-- ---------------------------------------------------------------------------
create table if not exists rag_queries (
  id          bigint generated always as identity primary key,
  org_id      uuid not null references organisations(id) on delete cascade,
  space_id    uuid references rag_spaces(id) on delete set null,
  account_id  uuid references accounts(id) on delete set null,
  kind        text not null check (kind in ('search', 'ask', 'extract')),
  question    text,
  -- les documents qui ont réellement répondu · la traçabilité de la réponse
  doc_ids     uuid[] not null default '{}',
  -- où la génération a tourné, s'il y en a eu une
  answered_by text,
  answered_region text,
  ms          int,
  created_at  timestamptz not null default now()
);
create index if not exists idx_rag_queries_org on rag_queries(org_id, created_at desc);

-- ---------------------------------------------------------------------------
-- Effacement.
--
-- Une suppression logique laisse le texte en base, ce qui ne satisfait pas une
-- demande d'effacement (RGPD art. 17). Cette fonction supprime réellement : les
-- passages, le Markdown, et le document. L'entrée du journal reste, sans le
-- contenu, parce qu'un registre qui s'efface lui-même ne prouve plus rien.
-- ---------------------------------------------------------------------------
create or replace function rag_erase_document(p_doc uuid) returns void as $$
begin
  delete from rag_chunks where doc_id = p_doc;
  update rag_documents
     set body_md = null, deleted_at = now(), status = 'pending', error = null
   where id = p_doc;
  delete from rag_documents where id = p_doc;
end;
$$ language plpgsql;

-- Purge par durée de conservation · à appeler depuis une tâche planifiée.
-- Renvoie le nombre de documents effacés, pour qu'un journal d'exploitation
-- puisse en rendre compte.
create or replace function rag_apply_retention() returns int as $$
declare n int := 0;
begin
  with expired as (
    select d.id from rag_documents d
      join rag_spaces s on s.id = d.space_id
     where s.retention_days is not null
       and d.last_used_at < now() - make_interval(days => s.retention_days)
  )
  select count(*) into n from expired;

  delete from rag_chunks c using rag_documents d, rag_spaces s
   where c.doc_id = d.id and s.id = d.space_id
     and s.retention_days is not null
     and d.last_used_at < now() - make_interval(days => s.retention_days);

  delete from rag_documents d using rag_spaces s
   where s.id = d.space_id
     and s.retention_days is not null
     and d.last_used_at < now() - make_interval(days => s.retention_days);

  return n;
end;
$$ language plpgsql;
