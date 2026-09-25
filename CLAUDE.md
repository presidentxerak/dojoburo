# DojoBuro · règles de travail

## Le cycle de travail (demandé : aller vite, sans tâches longues en parallèle)

1. Modifier, puis vérifier vite : `npx tsc -b --noEmit` et seulement les gardes qui concernent les fichiers touchés (`node scripts/<garde>.mjs`, quelques secondes).
2. Committer et pousser sur la branche de travail.
3. Avant de fusionner : `npm test` (les gardes, environ 45 s), puis `npm run build` (la compilation, environ 1 min).
4. Dès que les deux sont verts : fusionner la branche sur `main` avec `--no-ff` et pousser. Vercel met en production depuis `main`.

À ne pas faire sans demande explicite :
- `npm run verify` (le portail complet : 48 suites, navigateur piloté, dizaines de minutes). Uniquement si on le demande, et une seule fois.
- Des agents en arrière-plan pour des tâches moyennes. Réservé aux gros volumes vraiment indépendants, et en prévenant avant.
- Des compilations répétées pour des captures : une seule série de captures à la fin, sur les écrans modifiés.

Prévenir avant de lancer quoi que ce soit qui dure plus de 5 minutes.

## Commandes

- `npm test` : toutes les gardes (contenu, textes, i18n, tarifs, jeu...) et la vérification des types.
- `npm run build` : la compilation seule (c'est ce que Vercel exécute).
- `npm run verify` : le portail complet, sur demande uniquement.

## Règles de contenu

- Français : vouvoiement, registre académique et pédagogique. Jargon IA anglophone gardé tel quel (token, prompt, agent, workflow...).
- Aucun emoji, aucun tiret cadratin ni demi-cadratin comme ponctuation, aucun caractère pictographique (utiliser les icônes SVG).
- Ne jamais inventer de témoignages, chiffres ou références.
- Une garde dont la prémisse a changé est réparée pour affirmer la nouvelle règle (avec la demande citée en commentaire), jamais supprimée.

## Charte

- Violet sombre par défaut (#0a0514), affichage clair au choix (Profil > Paramètres > Affichage, `html[data-look="light"]`, règles dans `src/styles/look-light.css`).
- Police Outfit. Boutons violets (#7c3aed) avec une légère touche skeuomorphe partagée (`--sk-grad`, `--sk-btn`, `--sk-press`), sans bordure.
- Barre du bas : Dojoburo, IA Training, Clan, Profil.
