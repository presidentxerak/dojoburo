# Le rendu du dojo

Ce qui fait l'image, où c'est décidé, et ce que chaque choix coûte.

Trois couches, dans cet ordre : la **matière** (à quoi ressemble une surface),
le **lieu** (les onze mondes), le **métier** (le mobilier de la spécialité).
Elles sont indépendantes : changer l'une ne touche pas les autres.

---

## 1 · La matière · `src/components/three/toy.ts`

Trois constantes, partagées par les 38 espèces de personnages et par tous les
décors. Les changer ici restyle la totalité du jeu d'un coup.

| Constante | Pour quoi | Rugosité | Métal |
|---|---|---|---|
| `VINYL` | corps, têtes, membres | 0,42 | 0 |
| `MATTE` | bois, pierre, tissu | 0,68 | 0,03 |
| `PAINTED_METAL` | casques, machines, robots | 0,34 | 0,35 |

Et surtout un **éclairage d'environnement** (`StudioLight`, monté une fois par
`<Canvas>`). Sans lui, une sphère n'a qu'un point lumineux et une ombre : elle
reste plate. Avec lui, elle a du volume sur tout son pourtour. C'est le poste
qui change le plus l'image pour le moins de travail, et il ne coûte aucun
téléchargement — la pièce de référence de three.js est décrite en JavaScript,
filtrée une fois au montage (~10 ms), puis gardée.

Elle est **libérée au démontage**. Une carte PMREM est une texture sur le GPU ;
en oublier une à chaque changement de dojo finit par saturer la mémoire vidéo.

> **Piège rencontré.** Ajouter l'environnement sans baisser l'ambiante et
> l'hémisphérique délave toute la scène : les trois s'additionnent. Le torii du
> hero sortait orange au lieu de rouge. `envMapIntensity` est donc porté par
> chaque constante de matière, et les lumières d'appoint ont baissé d'autant.

## 2 · Les proportions de figurine · `Character3D.tsx`

Animal Crossing et Funko Pop tiennent en trois choses :

- **la tête fait la moitié de la silhouette** ;
- **les membres sont des capsules**, jamais des boîtes — c'est ce détail qui
  faisait lire les personnages comme des assemblages de cubes ;
- **la matière est du vinyle** (voir ci-dessus).

La tête n'est pas agrandie espèce par espèce. Tout le sous-arbre — crâne,
oreilles, cornes, chapeaux, visage, accessoire — est mis à l'échelle **autour
de son centre** (`AboutY`), si bien qu'un cône d'oreille écrit à `hy + 0.62`
reste posé sur le crâne quelle que soit l'échelle. Une seule constante,
`HEAD_S`, restyle les 38 espèces.

## 3 · Le lieu · `Decor3D.tsx`

Onze mondes : dojo, jardin, espace, laboratoire, villa, château, usine,
start-up, forêt, pays des merveilles, backrooms. **Ils n'ont pas changé** :
l'utilisateur les choisit pour personnaliser son dojo, et ils gagnent
seulement la nouvelle matière et le nouvel éclairage.

La villa pose une **piscine de 18,4 × 10,4 centrée en z = 1**, dont le bord
arrière tombe à z = −4,2. C'est la contrainte qui gouverne tout placement
ajouté : elle couvre presque tout le sol.

## 4 · Le métier · `ThemeProps.tsx`

Ce qui distingue « écrire un livre » de « ouvrir une boutique » quand les deux
se déroulent dans la même pièce. Une couche **par-dessus** le monde, jamais à
la place : un dojo « écrire un livre » posé dans le château garde son château
et gagne ses murs de livres.

Vingt meubles, vingt-trois spécialités, six emplacements — tous dans la bande
du fond (z entre −6,0 et −5,0), la seule zone sèche dans les onze mondes à la
fois, et exactement là où le regard se pose derrière l'équipe.

| Famille | Meubles |
|---|---|
| Écrire | bibliothèque, bureau d'écriture, coin lecture, presse et papier, tableau noir |
| Diffuser | anneau lumineux, micro sur perche, mur de studio, caméra et claquette |
| Construire | baie de serveurs, mur d'écrans, tableau de flux, convoyeur |
| Vendre | rayonnage, portant, caisse, palette |
| Convaincre | estrade de pitch, trophée, carte à épingles, poste d'assistance, mur de candidatures |
| Créer | chevalet, nuancier mural |
| Mesurer | totem de graphiques, banc de téléphonie |

Une spécialité sans kit rend `null` — **volontairement**. Le dojo garde alors
exactement le décor qu'il a toujours eu, plutôt que d'hériter d'un mobilier
générique qui ne veut rien dire.

Tout tirage aléatoire (les tranches de livres, les voyants du rack, les
post-its) passe par une graine fixe. Un `Math.random()` dans le rendu
redistribue la bibliothèque à chaque image : le mur se met à clignoter.

## 5 · Les ombres

Une seule source porte une ombre, en 2048, cadrée serré sur la zone utile.

`ShadowBudget` coupe `shadowMap.autoUpdate` et ne redemande un calcul que
lorsque la **composition** de la scène change : le monde, la spécialité, qui
est assis où. Le quadruplement de résolution se paie donc une fois par
changement de dojo, pas une fois par image.

`shadow-normalBias` supprime le moiré d'auto-ombrage sur les sphères — les
personnages sont faits de sphères, c'est là qu'il se voyait.

## 6 · La réfraction, et ce qu'elle coûte

`transmission` oblige three.js à rendre une **passe opaque supplémentaire hors
écran à chaque image**. Cette passe est mutualisée — le même prix pour deux
objets que pour vingt — mais elle double le travail de dessin de la scène.

Mesuré (`npm run verify:perf`, dojo complet, même machine, mêmes conditions) :

| | images/s |
|---|---|
| sans verre | 2 |
| verre présent, réfraction refusée par la garde | 2 |
| réfraction forcée | 1 |

Le chiffre absolu ne vaut rien : le navigateur du bac à sable tourne en
SwiftShader, un rasteriseur **logiciel**. Le rapport, lui, est net — **la
réfraction double le temps de rendu**.

Doubler le coût de la surface de travail principale sans le dire n'est pas une
amélioration graphique, c'est une dette qu'on fait payer à l'utilisateur. D'où
`canAffordRefraction`, qui refuse dans trois cas :

- **rendu logiciel** (SwiftShader, llvmpipe, Mesa générique) — pas de GPU ;
- **téléphone** — écran petit, budget thermique aussi ;
- **moins de quatre cœurs** — machine d'entrée de gamme.

Ailleurs, le même objet est dessiné en verre translucide et brillant : il
reflète l'environnement et laisse voir au travers, il ne courbe simplement pas
l'image. Personne ne le remarque à cette distance.

Deux objets réfractants dans le dojo (fontaine à eau, vitrine), un dans le hero
(le bassin). Pas plus.

> **Ce que je n'ai pas pu vérifier depuis ce bac à sable.** Le chemin
> réfractant a été rendu et regardé une fois, garde contournée à la main, pour
> confirmer qu'il produit bien l'image attendue. Mais **aucune mesure sur une
> vraie carte graphique** n'a été possible ici : le seuil de la garde est un
> raisonnement, pas un relevé. Sur GPU la passe supplémentaire coûte bien moins
> cher qu'en logiciel, et la garde est probablement trop prudente — c'est le
> sens dans lequel on préfère se tromper.

## 7 · Le hero · `DojoDioramaScene.tsx`

Un objectif unique ne tient pas dans un écran 16/9 **et** dans un téléphone en
9/19,5. `Frame` élargit l'objectif et recule à mesure que le cadre se resserre,
et vise **sous** l'île pour la faire remonter au-dessus de la carte de verre.

L'île **oscille** de ±24° au lieu de tourner : sur un tour complet, la moitié
du cycle ne montrait que le dos de l'équipe.

## Ce qui garde tout ça

| Épreuve | Ce qu'elle refuse |
|---|---|
| `npm run verify:hero` | la carte coupée par le bas de l'écran, un texte illisible sur le verre, la constante `--lp-nav-h` qui ment, un dojo entièrement masqué |
| `npm run verify:perf` | une scène qui ne s'ouvre pas, une erreur JS, un effondrement du nombre d'images |
| `npm run verify` | les deux, plus les quinze autres |
