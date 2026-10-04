# Les nouveautés IA · la procédure du lundi

Demande : « La formation "Les outils du moment : suivre sans se noyer" n'est pas une formation mais une news mise à jour toutes les semaines le lundi [...] créé la page des news IA [...] fais juste une card du résumé de la news qui mène au vrai article avec les crédits et le nom de la source. Les news peuvent être des vidéos Youtube (en anglais) ou des articles. Mets toi à jour toutes les semaines sur les sites les plus populaires ».

La page est `/nouveautes` (bouton « Nouveautés » de la barre du bas). Une routine programmée la met à jour chaque lundi matin, heure de Paris. Ce document est sa consigne. On peut aussi la suivre à la main.

## 1. Ce que contient une édition

- Un fichier `src/data/news/AAAA-MM-JJ.ts`, nommé d'après le **lundi** de la semaine couverte (la semaine qui vient de se terminer). Exemple : l'édition publiée le lundi 12 octobre 2026 couvre la semaine du lundi 5 au dimanche 11 octobre : son fichier est `2026-10-05.ts`.
- Il exporte une constante `N_AAAA_MM_JJ: NewsWeek` (voir `src/data/news/types.ts`), puis il est importé et ajouté à `WEEKS` dans `src/data/news/index.ts`.
- **8 à 12 nouvelles** (la garde accepte de 5 à 20) :
  - environ deux tiers d'articles ;
  - un tiers de vidéos YouTube en anglais.

## 2. Où chercher

Les sources les plus suivies de la semaine, en privilégiant la source première quand elle existe :

- **Annonces officielles :**
  - openai.com
  - anthropic.com et claude.com/blog
  - blog.google et deepmind.google
  - ai.meta.com
  - mistral.ai/news
  - huggingface.co/blog
  - microsoft.com
- **Presse tech :** The Verge, TechCrunch, VentureBeat, Ars Technica, Wired, MIT Technology Review, 9to5Google, Engadget.
- **Presse française :** Les Echos, Le Monde Pixels, Numerama, BFM Tech.
- **Vidéos YouTube en anglais :** des chaînes d'actualité IA connues, et les keynotes officielles.

Pour les vidéos, l'identifiant est copié d'un vrai lien `youtube.com/watch?v=` trouvé par une recherche. Ce n'est jamais un Short ni une playlist. On n'invente jamais un identifiant.

## 3. Règles d'écriture

- **Le résumé est le nôtre :**
  - deux à trois phrases, en français (vouvoiement) et en anglais ;
  - il ne dit que ce que la source affirme ;
  - aucun chiffre, prix ou benchmark qui ne soit pas dans la source ;
  - pas d'opinion.
- **Le titre est celui de la source**, dans sa langue.
- **Les crédits :**
  - `source` : le média ou l'éditeur ; pour une vidéo, la chaîne si elle est certaine, sinon `''`. La page lit la chaîne chez YouTube, par `/api/video-credits`.
  - `author` : seulement s'il est connu avec certitude, sinon `''`.
- **La date :** celle de l'original, au format `AAAA-MM-JJ`, ou `''` si elle n'est pas certaine.
- **Les caractères :** aucun emoji, aucun tiret cadratin ni demi-cadratin.
- **Les doublons :** une même actualité ne figure qu'une fois. Une vidéo qui la commente peut s'ajouter si elle apporte une démonstration.

## 4. Vérifier et publier

1. `npx tsc -b --noEmit`, puis `node scripts/test-news.mjs`.
2. Committer sur la branche de travail et pousser.
3. Lancer `npm test`, puis `npm run build`.
4. Si les deux sont verts, fusionner sur `main` avec `--no-ff` et pousser (Vercel met en production).

Si l'édition de la semaine existe déjà, la compléter ou la corriger au lieu d'en créer une seconde.

## 5. La newsletter

L'outil de l'administrateur (`/admin/newsletter`) propose par défaut les 5 premières nouvelles de la dernière édition. Garder en tête de chaque édition les nouvelles les plus importantes.
