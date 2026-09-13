# Documents d'entreprise · recherche et réponses sourcées

Déposer les documents d'une société, les interroger en français, et obtenir des
réponses dont chaque affirmation renvoie à une page précise — sans que le
contenu quitte l'Union européenne.

Ce document s'adresse à la personne qui installe et à celle qui doit répondre à
un questionnaire de conformité. Les deux trouveront ici des faits vérifiables
plutôt que des engagements.

---

## Ce que ça fait

| Appel | Ce qu'il rend | Sort du serveur ? |
|---|---|---|
| `POST /api/rag?action=ingest` | un document analysé, découpé, indexé | non |
| `GET /api/rag?action=search` | des passages, avec fichier et page | non |
| `GET /api/rag?action=ask` | une réponse dont chaque point est cité | oui, vers le modèle |
| `POST /api/rag?action=extract` | un enregistrement JSON, chaque champ sourcé | oui, vers le modèle |
| `GET /api/rag?action=holdings` | ce que l'entreprise détient · RGPD art. 15 | non |
| `GET /api/rag?action=processing` | le registre des traitements · RGPD art. 30 | non |
| `POST /api/rag?action=erase` | effacement réel du texte · RGPD art. 17 | non |

Les quatre appels marqués « non » fonctionnent **sans aucune clé d'API et sans
aucun appel sortant**. Une installation sans fournisseur configuré dépose,
indexe, cherche et rend des passages. Elle ne rédige pas de réponse en prose :
c'est la seule chose qui manque.

C'est délibéré. Un produit dit souverain qui refuse de démarrer sans joindre un
service extérieur ne l'est pas, quel que soit le pays de ce service.

---

## Installation

```bash
psql "$DATABASE_URL" -f db/schema.sql
psql "$DATABASE_URL" -f db/connectors.sql
psql "$DATABASE_URL" -f db/orgs.sql
psql "$DATABASE_URL" -f db/rag.sql       # les documents
```

`db/rag.sql` est idempotent : on peut le rejouer.

### Ce qu'il faut dans Postgres

**Le lexical ne demande rien.** L'index plein texte utilise la configuration
`french` fournie en standard, ce qui donne la lemmatisation — « obligation
contractuelle » retrouve « obligations contractuelles » — sans rien installer.

**Le sémantique demande `pgvector`.** Il est présent sur tous les Postgres
managés (Neon, Supabase, RDS, Cloud SQL, Azure) et tient dans un paquet sur une
installation autonome :

```bash
apt-get install postgresql-16-pgvector   # puis rejouer db/rag.sql
```

Sans lui, `db/rag.sql` n'ajoute pas la colonne vectorielle, le dit à
l'application, et la recherche reste lexicale.

> Une version antérieure de ce document annonçait que `pgvector` n'était pas
> nécessaire, la similarité étant calculée en SQL sur des tableaux `real[]`, et
> chiffrait cela « de l'ordre de la dizaine de millisecondes ». **C'était faux.**
> Mesuré, vecteurs de 1 024 dimensions, même machine :
>
> | passages | `real[]` en SQL | pgvector séquentiel | pgvector HNSW |
> |---:|---:|---:|---:|
> | 1 000 | 505 ms | 7 ms | **1,0 ms** |
> | 10 000 | 5 006 ms | 65 ms | **1,6 ms** |
> | 50 000 | 23 349 ms | 395 ms | **1,0 ms** |
>
> Mille passages, c'est une cinquantaine de documents. L'ancienne approche
> perdait donc sur deux tableaux distincts : elle n'avait pas d'index, et sa
> façon même de calculer une distance était soixante-quinze fois plus lente que
> celle de pgvector. L'index HNSW, lui, ne bouge pas avec la taille du corpus —
> il se construit en six secondes sur cinquante mille passages.
>
> Un balayage complet déguisé en index est la pire des deux options, parce qu'il
> est lent sans le dire. Il a été retiré.

### La dimension des vecteurs

Elle est fixée dans le schéma, à **1024** (celle de `mistral-embed`). Pour un
modèle d'une autre dimension, avant d'appliquer le fichier :

```bash
psql "$DATABASE_URL" -c "set rag.embed_dim = 3584" -f db/rag.sql
```

Pourquoi fixe plutôt que libre : une colonne `vector` sans dimension ne peut
être indexée que par un index d'expression, et `ANALYZE` échoue alors dès qu'une
ligne porte une autre dimension — ce qui gèle les statistiques de toute la
table, **y compris pour la recherche lexicale**, sans que rien ne le signale.
Vérifié. Une dimension fixe transforme cette panne silencieuse en refus
d'insertion, qui se lit. Le code vérifie la dimension avant d'écrire et nomme
l'`ALTER` à jouer si elle ne correspond pas.

---

## Résidence des données

```bash
DATA_RESIDENCY=eu
```

Avec ce réglage, un fournisseur hors Union européenne n'est pas déclassé : il est
**absent de la chaîne**. Il n'existe aucun chemin de code qui puisse en atteindre
un, y compris quand le fournisseur européen est en panne ou saturé. Une
dégradation silencieuse vers un modèle américain quand l'européen ne répond pas
est pire que l'arrêt, parce que personne ne l'apprend.

Sans ce réglage la résidence vaut `open`, et l'application n'affiche **aucune**
mention de souveraineté — `scripts/check-content.mjs` le vérifie au build.

### Fournisseurs

| Clé | Sous-traitant | Pays | Analyse | Vecteurs | Réponses |
|---|---|---|---|---|---|
| `MISTRAL_API_KEY` | Mistral AI SAS | FR | — | oui | oui |
| `OVH_AI_API_KEY` | OVH SAS | FR | — | oui | oui |
| `SCALEWAY_API_KEY` | Scaleway SAS | FR | — | oui | oui |

L'**analyse des documents ne figure pas dans ce tableau** : elle tourne dans le
processus, sur la machine de l'opérateur. Un PDF déposé n'est envoyé nulle part
pour être lu. C'est ce que dit la colonne `parsed_by = 'local'` de chaque
document en base, et c'est vérifiable sans nous croire sur parole.

### Modèle auto-hébergé

Les points d'accès sont des variables :

```bash
MISTRAL_BASE=https://llm.interne.exemple.fr/v1
MISTRAL_MODEL=mistral-small
MISTRAL_EMBED_MODEL=mistral-embed
```

Un modèle à poids ouverts servi dans votre propre datacentre, derrière une
interface compatible OpenAI, et il ne reste plus un seul appel sortant. C'est le
cas d'usage qu'un produit souverain doit rendre facile.

---

## Ce qui est fait pour ne pas inventer

C'est la partie qui décide si l'outil est utilisable en entreprise. Une réponse
fausse coûte cher ; une réponse fausse qui a l'air sourcée coûte beaucoup plus,
parce qu'elle traverse la relecture.

**Un scan sans couche de texte est refusé, pas deviné.** En dessous de quarante
caractères par page, le document est enregistré en `failed` avec sa raison et
n'est pas indexé. Trois mots faux indexés pour toujours sont pires qu'un refus
visible.

**Aucun passage trouvé ⇒ aucun appel au modèle.** On répond « les documents
fournis ne permettent pas de répondre » sans avoir rien dépensé ni rien envoyé.
C'est le cas le plus fréquent d'invention et le moins cher à éviter.

**Les citations sont vérifiées après coup.** Un `[4]` alors qu'il y a trois
extraits est retiré du texte, et une réponse affirmative sans une seule citation
ressort avec `grounded: false`. Une consigne de citer n'est pas une garantie de
citation ; seule la vérification en est une.

**En extraction, un champ sans source n'est pas retenu** — pas signalé, pas
retenu — et une « citation exacte » que le modèle a reformulée est remplacée par
l'extrait réel. Un champ manquant se remplit à la main ; un champ inventé ne se
remplit jamais, parce qu'on croit l'avoir.

**Les vecteurs portent le nom de leur modèle.** Changer de modèle d'embedding
rend les anciens vecteurs invisibles jusqu'à ce qu'on les recalcule
(`POST ?action=embed`), au lieu de les laisser polluer le classement avec des
cosinus parfaitement calculés et parfaitement dénués de sens.

---

## RGPD

| Article | Ce qui l'implémente |
|---|---|
| art. 15 · accès | `GET ?action=holdings` — documents, pages, octets, passages, interrogations |
| art. 17 · effacement | `POST ?action=erase` — supprime les passages, le Markdown **et** la ligne |
| art. 30 · registre | `GET ?action=processing` — engendré depuis la table qui décide du routage |
| art. 5 · limitation | `retention_days` par espace, purgé chaque nuit |

L'effacement est réel. Une suppression logique laisserait le texte du contrat
lisible en base, ce qui ne satisfait pas une demande d'effacement.

La **trace d'audit survit** à l'effacement du document : `rag_queries` garde qui
a interrogé quoi et quand, sans le contenu. Un registre qui s'efface avec ce
qu'il enregistre ne prouve plus rien.

Le registre de l'article 30 est engendré depuis la même table que le routage. Le
document et le comportement ne peuvent donc pas diverger — ce qui est le mode de
défaillance normal d'une liste de sous-traitants tenue à la main dans une
présentation.

### Purge

```bash
CRON_SECRET=…      # sans ce secret, l'appel de purge renvoie 404
```

`vercel.json` la déclenche à 3 h. Hors Vercel, appelez chaque nuit :

```bash
curl -H "Authorization: Bearer $CRON_SECRET" "$BASE/api/rag?action=retention"
```

La date de référence est la dernière **utilisation**, pas le dépôt : un contrat
qu'on interroge tous les mois n'est pas purgé au bout de son délai.

---

## Cloisonnement

Chaque requête SQL porte `org_id` dans son `WHERE`. Aucun filtre n'est appliqué
après coup en JavaScript, parce que c'est ainsi qu'une fuite entre clients
finit par arriver. Toutes ces requêtes sont dans `api/_lib/rag/store.ts` et
`api/_lib/rag/search.ts` — deux fichiers — pour qu'une omission se voie à la
relecture.

L'organisation vient du compte authentifié. Aucun paramètre d'aucun appel ne
peut désigner l'organisation de quelqu'un d'autre.

Les rôles : un `viewer` cherche et interroge, un `member` dépose, un `admin`
efface. Effacer est un cran au-dessus du reste parce que c'est définitif par
construction — c'est précisément ce qu'on lui demande d'être.

---

## Vérifier

```bash
TEST_DATABASE_URL="postgres://…" npm run test:rag
```

100 vérifications contre un vrai Postgres et de vrais fichiers : des PDF produits
pour l'occasion, un `.docx` compressé, un scan sans texte. Sans
`TEST_DATABASE_URL` la suite s'annonce ignorée et le build continue.

Ce qu'elle vérifie et qu'une relecture du code ne peut pas établir : qu'un scan
soit refusé plutôt qu'indexé en charabia, qu'une question posée au singulier
retrouve un passage au pluriel, qu'une entreprise ne voie jamais les documents
d'une autre, qu'un effacement efface vraiment le texte, et qu'un vecteur d'un
autre modèle ne remonte jamais dans un classement.

---

## Réglages

| Variable | Défaut | Ce qu'elle change |
|---|---|---|
| `DATA_RESIDENCY` | `open` | `eu` retire les fournisseurs hors UE de la chaîne |
| `EU_PROVIDER_ORDER` | `mistral,ovh,scaleway` | l'ordre d'essai |
| `RAG_MAX_UPLOAD_BYTES` | 12 Mio | taille d'un dépôt |
| `RAG_EMBED_BATCH` | 32 | passages par appel de vectorisation |
| `RAG_EMBED_TIMEOUT_MS` | 30000 | délai d'un appel de vectorisation |
| `RAG_ANSWER_TIMEOUT_MS` | 60000 | délai d'une réponse |
| `RAG_ANSWER_MAX_TOKENS` | 900 | longueur d'une réponse |
| `RAG_EXTRACT_MAX_TOKENS` | 1500 | longueur d'une extraction |

---

## Ce que ça consomme de l'allocation

Rien pour ce qui tourne sur la machine. Déposer, analyser, indexer et **chercher**
ne retirent aucune unité : facturer une recherche lexicale qui ne sort de nulle
part reviendrait à facturer l'électricité de l'opérateur.

Une **réponse sourcée** ou une **extraction** appelle un modèle, et retire
0,1 unité — un dixième de ce que vaut une tâche d'agent, et le plancher que le
produit applique déjà partout pour qu'aucune opération ne soit gratuite à
répéter en boucle.

Le chiffre vient d'un calcul et non d'une intuition : huit extraits, une
consigne et une question font environ 2 600 jetons d'entrée pour 200 de sortie ;
sur un petit modèle européen à 0,10 $ et 0,30 $ le million, cela fait **0,0003 $**.
Une tâche d'agent se vend 0,0245 $ sur le plan managé. Une question documentaire
coûte donc environ un centième d'une tâche, et en retire un dixième : sept fois
le coût, ce qui est une marge, et assez peu pour qu'une entreprise qui interroge
ses contrats toute la journée n'ait pas à choisir entre chercher un document et
faire travailler ses agents.

Le poids du moteur s'applique quand même. Dirigez Documents vers un modèle de
tête et l'unité suit, sans qu'on ait à y repenser — facturer un tarif fixe pour
un coût variable est exactement l'erreur que l'ancienne grille avait commise.

---

## Ce que ça ne fait pas

À dire avant qu'on le découvre :

- **Pas de reconnaissance optique.** Un PDF scanné est détecté et refusé
  proprement, avec sa raison. Il n'est pas lu.
- **Pas de recherche par le sens sans `pgvector`.** La moitié lexicale, elle,
  fonctionne sur un Postgres nu. Un résultat vide dit laquelle des deux
  conditions manque — la clé, l'extension, ou les deux.
- **Pas de tableaux structurés depuis un PDF.** Le texte d'un tableau est
  extrait, sa géométrie non. Un `.csv` ou un `.docx` conserve la sienne.
- **Pas de rattachement automatique aux droits d'accès de votre SI.** Le
  cloisonnement va jusqu'à l'organisation et l'espace documentaire, pas jusqu'à
  l'utilisateur d'un partage réseau.
