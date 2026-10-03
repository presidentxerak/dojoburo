# Tarifs Dojoburo et configuration Stripe

Demandes :
- « on va faire 3 prix 0€ gratuit, Un temple (une formation) à 49€ et le Pass dojo à 99€ life time (toutes les formations actuelles et futures) » ;
- « change les noms de produit de Stripe "Un temple Dojoburo" par "Un cours Dojoburo" et Pass Dojo par "Pass Dojoburo" refais le tableau entièrement avec toutes les infos pour Stripe avec tous les cours, meta données, description, prix et catégorie ».
- « enrichi nos formations en en créant des nouvelles très détaillées » : treize formations thématiques ajoutées au tableau, avec leur catégorie `formation-thematique`.

Les prix affichés dans l'app viennent de `src/data/plans.ts` (`TEMPLE_EUR`, `PASS_EUR`). Les prix facturés viennent de Stripe. Les deux doivent dire la même chose : 49 € et 99 €.

## 1. Les deux produits à créer dans Stripe

Tableau de bord Stripe, Catalogue de produits, Ajouter un produit. Le Gratuit n'a pas de produit : le Week-end IA s'ouvre avec une adresse e-mail.

| Champ Stripe | Un cours Dojoburo | Pass Dojoburo |
|---|---|---|
| Nom du produit | Un cours Dojoburo | Pass Dojoburo |
| Description | Une formation Dojoburo au choix : la formation complète, une formation métier, une formation thématique (livre, storyboard, BD et manga, flow UX, architecture, comptabilité, images, logo et charte, design system, IA locale, business, copywriting, veille) ou une formation de développement d'app. Tous les étages du cours sont ouverts, avec les fichiers, les ressources et les mises à jour. Paiement unique, aucun abonnement. | Toutes les formations Dojoburo, actuelles et futures, à vie : la formation complète, toutes les formations métier et tous les cours, avec les fichiers, les ressources et les mises à jour. Paiement unique, aucun abonnement. |
| Prix | 49,00 EUR | 99,00 EUR |
| Type de tarif | ponctuel (one-off), pas récurrent | ponctuel (one-off), pas récurrent |
| Taxes, comportement | TTC (prix taxes incluses) | TTC (prix taxes incluses) |
| Catégorie fiscale | Services fournis par voie électronique (`txcd_10000000`) | Services fournis par voie électronique (`txcd_10000000`) |
| Libellé sur le relevé bancaire | DOJOBURO COURS | DOJOBURO PASS |
| Métadonnée `dojo_offer` | `cours` | `pass` |
| Métadonnée `dojo_access` | `one` | `all` |
| Métadonnée `dojo_lifetime` | `true` | `true` |
| Métadonnée `dojo_category` | `formation` | `pass` |
| Variable `.env` de l'identifiant du prix | `STRIPE_PRICE_TEMPLE` | `STRIPE_PRICE_PASS` |

La catégorie fiscale `txcd_10000000` est la catégorie générale des services électroniques. Stripe en propose de plus précises pour la formation en ligne : vérifiez celle qui s'applique à votre activité dans la liste des codes fiscaux Stripe, ou avec votre comptable.

Les métadonnées des produits sont facultatives : elles servent seulement à vos rapports et exports, le code ne les lit pas.

## 2. Tous les cours, ce que Stripe reçoit à chaque paiement

Un seul produit, « Un cours Dojoburo », sert tous les cours. À chaque paiement, le serveur (`api/buy.ts`) précise lequel :
- dans les métadonnées de la session (`plan`, `trade` ou `course`, `item`, `category`) ;
- dans la description du paiement (`item`) ;
- dans le texte affiché sous le bouton de paiement : « Vous achetez : <item>. Paiement unique, aucun abonnement. »

| Cours | Description | Leçons | Durée | Prix | `category` | `plan` | `trade` / `course` | `item` (et description du paiement) |
|---|---|---|---|---|---|---|---|---|
| Les bases de l'IA, gratuit | Comme le code de la route avant de conduire : sept cours courts et gratuits pour comprendre les mots, les limites et le coût de l'IA. | 7 | 0,8 h | 0 € | aucun paiement | aucun | aucun | aucun |
| Faire travailler l'IA : la formation complète | Comme former un assistant très rapide mais qui prend tout au pied de la lettre : treize modules pour écrire des prompts clairs, choisir le bon outil, déléguer à des agents et maîtriser le coût. | 39 | 4,1 h | 49 € | `parcours-ia` | `path` | aucun | Un cours Dojoburo · Faire travailler l'IA : la formation complète |
| Coder une app avec Claude Code | Comme construire une maison avec un artisan très rapide : vous dessinez le plan, Claude Code écrit le code, de GitHub et Supabase jusqu'à la mise en ligne sur Vercel. | 28 | 4,8 h | 49 € | `developpement-app` | `course` | `coder-une-app` | Un cours Dojoburo · Coder une app avec Claude Code |
| Créer une app sans coder avec Lovable | Comme passer commande à un traiteur : vous décrivez l'app, Lovable la prépare, et vous apprenez à la vérifier, à brancher ses données et à la publier. | 16 | 2,8 h | 49 € | `developpement-app` | `course` | `coder-avec-lovable` | Un cours Dojoburo · Créer une app sans coder avec Lovable |
| Écrire un livre de A à Z avec l'IA | Comme travailler avec un éditeur infatigable : idée, plan, personnages, écriture, réécriture, couverture et publication, avec l'IA en partenaire et vous en auteur. | 16 | 2,9 h | 49 € | `formation-thematique` | `course` | `ecrire-un-livre` | Un cours Dojoburo · Écrire un livre de A à Z avec l'IA |
| Storyboard pour le cinéma et la pub | Comme la bande dessinée de votre film avant le tournage : découpage, plans, cadrages, personnages cohérents et animatique, générés et dirigés avec l'IA. | 16 | 2,8 h | 49 € | `formation-thematique` | `course` | `storyboard` | Un cours Dojoburo · Storyboard pour le cinéma et la pub |
| Créer une bande dessinée ou un manga avec l'IA | Comme un atelier avec un assistant qui encre vite : histoire, personnages, mise en page, cases et lettrage, en gardant votre style et vos droits. | 16 | 2,8 h | 49 € | `formation-thematique` | `course` | `bd-manga` | Un cours Dojoburo · Créer une bande dessinée ou un manga avec l'IA |
| Concevoir un flow UX avec l'IA | Comme tracer l'itinéraire d'un voyage avant de construire la route : recherche utilisateur, parcours, flows, wireframes et tests, accélérés par l'IA. | 16 | 2,9 h | 49 € | `formation-thematique` | `course` | `flow-ux` | Un cours Dojoburo · Concevoir un flow UX avec l'IA |
| Architecture logicielle avec l'IA | Comme les plans d'un architecte avant le chantier : exigences, composants, données, API, sécurité et décisions tracées, raisonnés avec l'IA et vérifiés par vous. | 16 | 2,9 h | 49 € | `formation-thematique` | `course` | `architecture-logicielle` | Un cours Dojoburo · Architecture logicielle avec l'IA |
| Tenir sa comptabilité de A à Z avec l'IA | Comme un classeur bien rangé qui se trie tout seul : justificatifs, écritures, rapprochement bancaire, TVA, clôture et tableaux de bord, avec l'IA en assistante et votre expert-comptable en arbitre. | 16 | 2,8 h | 49 € | `formation-thematique` | `course` | `comptabilite` | Un cours Dojoburo · Tenir sa comptabilité de A à Z avec l'IA |
| Images IA de haute qualité : styles, Midjourney, retouche | Comme apprendre la photo et la peinture à la fois : prompts, styles, références, Midjourney et autres générateurs, puis retouche et agrandissement en qualité professionnelle. | 16 | 3 h | 49 € | `formation-thematique` | `course` | `images-ia` | Un cours Dojoburo · Images IA de haute qualité : styles, Midjourney, retouche |
| Logotype et charte graphique avec l'IA | Comme habiller une marque de la tête aux pieds : stratégie, logo, couleurs, typographie et charte, explorés avec l'IA et finalisés en vectoriel par vous. | 16 | 2,8 h | 49 € | `formation-thematique` | `course` | `logo-charte` | Un cours Dojoburo · Logotype et charte graphique avec l'IA |
| Design system de A à Z pour Figma | Comme une boîte de LEGO pour votre produit : tokens, composants, variantes, documentation et gouvernance dans Figma, construits plus vite avec l'IA et prêts pour les développeurs. | 16 | 2,9 h | 49 € | `formation-thematique` | `course` | `design-system-figma` | Un cours Dojoburo · Design system de A à Z pour Figma |
| L'IA en local, open source et hors ligne | Comme avoir sa propre cuisine plutôt que manger dehors : des modèles de texte, d'image et de vidéo qui tournent sur votre machine, hors ligne, sans abonnement, vos données restant chez vous. | 16 | 2,9 h | 49 € | `formation-thematique` | `course` | `ia-locale` | Un cours Dojoburo · L'IA en local, open source et hors ligne |
| Business et monétisation avec l'IA | Comme ouvrir une boutique dans un nouveau quartier : comprendre le marché, trouver un vrai problème, monter un prototype en une soirée, vendre, et tenir dans la durée. | 16 | 2,9 h | 49 € | `formation-thematique` | `course` | `business-ia` | Un cours Dojoburo · Business et monétisation avec l'IA |
| Copywriting et vente avec l'IA | Comme un vendeur qui écrit : comprendre comment pense votre lecteur, positionner l'offre, capter l'attention, créer le désir et la confiance, avec l'IA en partenaire d'entraînement. | 16 | 2,8 h | 49 € | `formation-thematique` | `course` | `copywriting` | Un cours Dojoburo · Copywriting et vente avec l'IA |
| Les outils IA du moment : suivre sans se noyer | Comme un bon lecteur de presse : une méthode pour suivre ChatGPT, Claude, Gemini, Grok, Mistral et les nouveaux outils, les tester vite et ne garder que ce qui vaut le détour. | 16 | 2,8 h | 49 € | `formation-thematique` | `course` | `veille-outils` | Un cours Dojoburo · Les outils IA du moment : suivre sans se noyer |
| L'IA pour les growth marketers | Vous faites venir des clients, et vous rendez compte de ce que cela coûte. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `growth` | Un cours Dojoburo · L'IA pour les growth marketers |
| L'IA pour la communication | Vous rédigez ce que dit l'entreprise, et vous en portez la responsabilité. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `comms` | Un cours Dojoburo · L'IA pour la communication |
| L'IA pour les fondateurs | Vous décidez, vous vendez et vous recrutez, souvent le même jour. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `founder` | Un cours Dojoburo · L'IA pour les fondateurs |
| L'IA pour les chefs de produit | Vous décidez de ce qui se construit, et vous répondez de ce qui ne se construit pas. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `product` | Un cours Dojoburo · L'IA pour les chefs de produit |
| L'IA pour les commerciaux | Vous êtes évalué sur ce qui est signé, et sur ce qui suit. | 9 | 0,9 h | 49 € | `formation-metier` | `trade` | `sales` | Un cours Dojoburo · L'IA pour les commerciaux |
| L'IA pour les assistants de direction | Vous gérez les messages, les documents, et le temps des autres. | 9 | 0,9 h | 49 € | `formation-metier` | `trade` | `assistant` | Un cours Dojoburo · L'IA pour les assistants de direction |
| L'IA pour les designers | Vous concevez ce que les gens voient et utilisent, et vous répondez de ce que cela fonctionne pour eux. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `designer` | Un cours Dojoburo · L'IA pour les designers |
| L'IA pour les enseignants | Vous préparez vos cours, évaluez vos élèves avec équité, et échangez avec leurs familles. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `teacher` | Un cours Dojoburo · L'IA pour les enseignants |
| L'IA pour les étudiants | Vous suivez des cours, passez des examens et rendez des travaux écrits, et vous voulez apprendre, pas seulement finir. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `student` | Un cours Dojoburo · L'IA pour les étudiants |
| L'IA pour les scientifiques | Vous lisez la littérature, menez des études et publiez, et chacune de vos affirmations doit résister à la vérification. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `scientist` | Un cours Dojoburo · L'IA pour les scientifiques |
| L'IA pour les développeurs | Vous écrivez et maintenez du code, et vous répondez de ce qui part en production. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `developer` | Un cours Dojoburo · L'IA pour les développeurs |
| L'IA pour les recruteurs | Vous recrutez pour votre entreprise ou vos clients, et vous répondez de la façon dont chaque candidat est traité. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `recruiter` | Un cours Dojoburo · L'IA pour les recruteurs |
| L'IA pour les juristes | Vous lisez, rédigez et conseillez, et vous répondez de chaque mot et de chaque source. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `lawyer` | Un cours Dojoburo · L'IA pour les juristes |
| L'IA pour les consultants | Vous cadrez le problème d'un client, établissez les faits et recommandez, et votre nom figure sous chaque chiffre. | 9 | 1 h | 49 € | `formation-metier` | `trade` | `consultant` | Un cours Dojoburo · L'IA pour les consultants |
| **Pass Dojoburo** | Les 30 cours payants ci-dessus, et les cours à venir, à vie. | 417 | 62,6 h | 99 € | `pass` | `pass` | aucun | Pass Dojoburo · toutes les formations, à vie |

Les 30 cours payants coûtent 1 470 € achetés un par un. Le Pass Dojoburo est rentable dès le troisième cours.

Champs posés sur chaque paiement :

| Champ Stripe | Valeur |
|---|---|
| `metadata.plan` | `path`, `trade`, `course` ou `pass` |
| `metadata.trade` | l'identifiant du métier, seulement si `plan = trade` |
| `metadata.course` | l'identifiant du cours, seulement si `plan = course` |
| `metadata.item` | le nom lisible, colonne `item` ci-dessus |
| `metadata.category` | `parcours-ia`, `formation-metier`, `developpement-app`, `formation-thematique` ou `pass` |
| `payment_intent_data.description` | comme `metadata.item` |
| `payment_intent_data.metadata.plan` | comme `metadata.plan` |
| `payment_intent_data.metadata.category` | comme `metadata.category` |
| `custom_text.submit.message` | « Vous achetez : <item>. Paiement unique, aucun abonnement. » |

C'est `metadata.plan`, avec `trade` ou `course`, que lisent la page `/merci`, la réclamation sur le compte et le webhook pour savoir quoi ouvrir. Ne modifiez pas ces identifiants : ils sont enregistrés avec chaque achat.

## 3. Les variables d'environnement (Vercel, Settings, Environment Variables)

```bash
STRIPE_SECRET_KEY=sk_live_...           # clé secrète Stripe (sk_test_... pour essayer)
CHECKOUT_SITE_URL=https://votre-domaine # retours de paiement vers /merci et /tarifs
STRIPE_PRICE_TEMPLE=price_...           # Un cours Dojoburo, 49,00 EUR, ponctuel
STRIPE_PRICE_PASS=price_...             # Pass Dojoburo, 99,00 EUR, ponctuel
STRIPE_WEBHOOK_SECRET_BUY=whsec_...     # secret de l'endpoint /api/buy-webhook
DATABASE_URL=postgres://...             # registre des achats (db/profile.sql)
```

Ces variables ne servent plus et peuvent être supprimées : `STRIPE_PRICE_PATH`, `STRIPE_PRICE_TRADE`, `STRIPE_PRICE_COURSE_APP`, `STRIPE_PRICE_COURSE_LOVABLE`. `STRIPE_WEBHOOK_SECRET` reste celui du studio (`/api/checkout-webhook`), sans rapport avec ces achats.

Tant qu'un prix manque, le bouton correspondant affiche « Le paiement n'est pas encore activé sur ce site. Rien n'a été débité. »

## 4. Le webhook

Un seul endpoint sert les deux produits : Stripe ne sait pas filtrer les événements par produit, et c'est `metadata.plan` qui dit lequel a été acheté.

Tableau de bord Stripe, Développeurs, Webhooks, Ajouter un endpoint :
- **URL** : `https://votre-domaine/api/buy-webhook`
- **Événements** : les quatre du tableau ci-dessous.
- Copiez le **secret de signature** (`whsec_...`) dans `STRIPE_WEBHOOK_SECRET_BUY`, puis redéployez.
- Appliquez le lot 2 de `db/profile.sql` : `psql "$DATABASE_URL" -f db/profile.sql` (réexécutable).

| Événement | Un cours Dojoburo | Pass Dojoburo |
|---|---|---|
| `checkout.session.completed` | Achat inscrit dans `game_purchases` : `paid`, ou `pending` si le paiement est différé (prélèvement SEPA) | Pareil |
| `checkout.session.async_payment_succeeded` | Le paiement différé est arrivé : `paid` | Pareil |
| `checkout.session.async_payment_failed` | Le paiement différé a échoué : `failed`, rien ne s'ouvre | Pareil |
| `charge.refunded`, remboursement total | `refunded`, le cours est retiré du compte qui l'avait réclamé, la session ne peut plus être réclamée | `refunded`, le Pass est retiré, les autres achats du compte restent |
| `charge.refunded`, remboursement partiel | rien ne change (geste commercial) | rien ne change |
| tout autre événement | acquitté, ignoré | acquitté, ignoré |

### Ce qui ouvre la formation, dans l'ordre

1. Au retour de paiement, la page `/merci` relit la session chez Stripe et ouvre la formation dans le navigateur.
2. Si l'élève est connecté, ou dès sa prochaine connexion, l'achat est inscrit sur son compte (`/api/profile?action=claim`) : il le retrouve sur ses autres appareils.
3. Le webhook tient le registre, même si l'élève ferme l'onglet avant `/merci`, et retire le droit en cas de remboursement.

### Tester avant la production

```bash
stripe listen --forward-to localhost:3000/api/buy-webhook   # donne un whsec_ de test
```

Avec les clés de test (`sk_test_...` et des `price_...` de test), faites un achat depuis `/tarifs` avec la carte `4242 4242 4242 4242`.

« À vie » s'entend pour la durée d'exploitation du service Dojoburo. Il est prudent de l'écrire ainsi dans vos conditions générales de vente.
