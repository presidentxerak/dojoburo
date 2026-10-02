# Tarifs Dojoburo et configuration Stripe

Demande : « on va faire 3 prix 0€ gratuit, Un temple (une formation) à 49€ et le Pass dojo à 99€ life time (toutes les formations actuelles et futures) : fais moi le tableaux des prix avec les .env la description produit pour Stripe et les webhooks pour chaque ».

Les prix affichés dans l'app viennent d'un seul fichier, `src/data/plans.ts` (`TEMPLE_EUR`, `PASS_EUR`). Les prix facturés viennent de Stripe. Les deux doivent dire la même chose : 49 € et 99 €.

## 1. Le tableau des prix

| | Gratuit | Un temple | Pass Dojo |
|---|---|---|---|
| Prix | 0 € | 49 € | 99 € |
| Paiement | aucun | unique | unique, à vie |
| Le Week-end IA (7 jours) | inclus | inclus | inclus |
| Les 3 premières leçons de chaque temple | inclus | inclus | inclus |
| Une formation complète, au choix | non | inclus | inclus |
| Toutes les formations actuelles (17) | non | non | inclus |
| Les formations à venir | non | non | inclus |
| Les mises à jour | non | incluses | incluses |
| Produit Stripe | aucun | « Un temple Dojoburo » | « Pass Dojo » |
| Variable `.env` | aucune | `STRIPE_PRICE_TEMPLE` | `STRIPE_PRICE_PASS` |
| `metadata.plan` envoyé à Stripe | aucun | `path`, `trade` ou `course` | `pass` |

Le Pass coûte un peu plus que deux temples (98 €) : il est rentable dès le troisième.

« Un temple » vaut pour n'importe quelle formation : la formation complète, l'une des 14 formations métier, Coder une app, Coder une app avec Lovable.

## 2. Les variables d'environnement (Vercel, Settings, Environment Variables)

```bash
# La clé secrète Stripe (sk_live_... en production, sk_test_... pour essayer)
STRIPE_SECRET_KEY=sk_live_...

# L'adresse du site, pour les retours de paiement (/merci et /tarifs)
CHECKOUT_SITE_URL=https://votre-domaine

# Le prix du produit « Un temple Dojoburo » : 49,00 EUR, paiement unique
STRIPE_PRICE_TEMPLE=price_...

# Le prix du produit « Pass Dojo » : 99,00 EUR, paiement unique
STRIPE_PRICE_PASS=price_...

# Le secret de signature de l'endpoint /api/buy-webhook (whsec_...)
STRIPE_WEBHOOK_SECRET_BUY=whsec_...

# La base Postgres, nécessaire au webhook (déjà en place pour la communauté)
DATABASE_URL=postgres://...
```

Ces variables ne servent plus et peuvent être supprimées de Vercel : `STRIPE_PRICE_PATH`, `STRIPE_PRICE_TRADE`, `STRIPE_PRICE_COURSE_APP`, `STRIPE_PRICE_COURSE_LOVABLE`.

`STRIPE_WEBHOOK_SECRET` reste celui du studio (`/api/checkout-webhook`), sans rapport avec ces achats.

Tant qu'un prix manque, le bouton correspondant affiche « Le paiement n'est pas encore activé sur ce site. Rien n'a été débité. »

## 3. Les produits à créer dans Stripe

Tableau de bord Stripe, Catalogue de produits, Ajouter un produit. Pour les deux : tarif **ponctuel** (one-off), devise **EUR**, et surtout pas « récurrent ».

### Produit 1 · Un temple Dojoburo

- **Nom** : Un temple Dojoburo
- **Description** : Une formation Dojoburo au choix : la formation complète, une formation métier, Coder une app ou Coder une app avec Lovable. Tous les étages du temple sont ouverts, avec les fichiers, les ressources et les mises à jour. Paiement unique, aucun abonnement.
- **Prix** : 49,00 EUR, ponctuel
- **Libellé sur le relevé bancaire** : DOJOBURO TEMPLE
- **Métadonnées du produit** (facultatif, pour vos rapports) : `dojo_offer = temple`
- L'identifiant du prix (`price_...`) va dans `STRIPE_PRICE_TEMPLE`.

Un seul produit sert tous les temples. Le temple acheté est précisé à chaque paiement par le serveur :
- le texte sous le bouton de paiement, par exemple « Vous achetez : Un temple · Commercial. Paiement unique, aucun abonnement. » ;
- la description du paiement, par exemple « Dojoburo · Un temple · Commercial », visible dans le tableau de bord ;
- les métadonnées `plan`, `trade` ou `course`, et `item`.

### Produit 2 · Pass Dojo

- **Nom** : Pass Dojo
- **Description** : Toutes les formations Dojoburo, actuelles et futures, à vie : la formation complète, toutes les formations métier et tous les cours, avec les fichiers, les ressources et les mises à jour. Paiement unique, aucun abonnement.
- **Prix** : 99,00 EUR, ponctuel
- **Libellé sur le relevé bancaire** : DOJOBURO PASS
- **Métadonnées du produit** (facultatif) : `dojo_offer = pass`
- L'identifiant du prix (`price_...`) va dans `STRIPE_PRICE_PASS`.

« À vie » s'entend pour la durée d'exploitation du service Dojoburo. Il est prudent de l'écrire ainsi dans vos conditions générales de vente.

### Gratuit

Aucun produit Stripe : le Week-end IA s'ouvre avec une adresse e-mail.

## 3 bis. Les métadonnées

### Sur les produits (à saisir dans le tableau de bord Stripe, facultatif)

Elles servent seulement à vos rapports et exports ; le code ne les lit pas.

| Clé | Un temple Dojoburo | Pass Dojo |
|---|---|---|
| `dojo_offer` | `temple` | `pass` |
| `dojo_access` | `one` | `all` |
| `dojo_lifetime` | `true` | `true` |

### Sur chaque paiement (posées par le serveur, `api/buy.ts`, rien à saisir)

| Champ Stripe | Un temple | Pass Dojo |
|---|---|---|
| `metadata.plan` | `path`, `trade` ou `course` | `pass` |
| `metadata.trade` | l'identifiant du métier, si `plan = trade` | absent |
| `metadata.course` | l'identifiant du cours, si `plan = course` | absent |
| `metadata.item` | `Un temple · <nom du temple>` | `Pass Dojo · toutes les formations, à vie` |
| `payment_intent_data.description` | `Dojoburo · Un temple · <nom du temple>` | `Dojoburo · Pass Dojo · toutes les formations, à vie` |
| `payment_intent_data.metadata.plan` | comme `metadata.plan` | `pass` |
| `custom_text.submit.message` | `Vous achetez : Un temple · <nom>. Paiement unique, aucun abonnement.` | `Vous achetez : Pass Dojo · toutes les formations, à vie. Paiement unique, aucun abonnement.` |

C'est `metadata.plan` (et `trade` ou `course`) que lisent la page `/merci`, la réclamation sur le compte et le webhook pour savoir quoi ouvrir.

### Les valeurs, temple par temple

| Temple | `plan` | `trade` / `course` |
|---|---|---|
| La formation complète | `path` | aucun |
| Coder une app | `course` | `coder-une-app` |
| Coder une app avec Lovable | `course` | `coder-avec-lovable` |
| Growth marketer | `trade` | `growth` |
| Communicant | `trade` | `comms` |
| Fondateur | `trade` | `founder` |
| Chef de produit | `trade` | `product` |
| Commercial | `trade` | `sales` |
| Assistant de direction | `trade` | `assistant` |
| Designer | `trade` | `designer` |
| Enseignant | `trade` | `teacher` |
| Étudiant | `trade` | `student` |
| Scientifique | `trade` | `scientist` |
| Développeur | `trade` | `developer` |
| Recruteur | `trade` | `recruiter` |
| Juriste | `trade` | `lawyer` |
| Consultant | `trade` | `consultant` |
| Pass Dojo (toutes) | `pass` | aucun |

## 4. Les webhooks

Un seul endpoint sert les deux produits : c'est la métadonnée `plan` qui dit lequel a été acheté. Stripe ne permet pas de filtrer les événements par produit, et deux endpoints recevraient exactement les mêmes événements.

Tableau de bord Stripe, Développeurs, Webhooks, Ajouter un endpoint :

- **URL** : `https://votre-domaine/api/buy-webhook`
- **Événements à écouter** :
  - `checkout.session.completed`
  - `checkout.session.async_payment_succeeded`
  - `checkout.session.async_payment_failed`
  - `charge.refunded`
- Copiez le **secret de signature** (`whsec_...`) dans `STRIPE_WEBHOOK_SECRET_BUY`, puis redéployez.
- Appliquez le lot 2 de `db/profile.sql` : `psql "$DATABASE_URL" -f db/profile.sql` (réexécutable).

### Ce que fait chaque événement

| Événement | Un temple (`plan` = `path`, `trade` ou `course`) | Pass Dojo (`plan` = `pass`) |
|---|---|---|
| `checkout.session.completed` | Achat inscrit dans `game_purchases`, statut `paid`, ou `pending` si le moyen de paiement est différé (prélèvement SEPA) | Pareil, pour le Pass |
| `checkout.session.async_payment_succeeded` | Le paiement différé est arrivé : `paid` | Pareil |
| `checkout.session.async_payment_failed` | Le paiement différé a échoué : `failed`, rien n'est ouvert | Pareil |
| `charge.refunded` (remboursement total) | `refunded`, le temple est retiré du compte qui l'avait réclamé, et la session ne peut plus être réclamée | `refunded`, le Pass est retiré, les autres achats du compte restent |
| `charge.refunded` (remboursement partiel) | rien ne change (geste commercial) | rien ne change |
| tout autre événement | acquitté, ignoré | acquitté, ignoré |

### Ce qui ouvre la formation, dans l'ordre

1. Au retour de paiement, la page `/merci` relit la session chez Stripe et ouvre la formation dans le navigateur.
2. Si l'élève est connecté, ou dès sa prochaine connexion, l'achat est inscrit sur son compte (`/api/profile?action=claim`) : il le retrouve sur ses autres appareils.
3. Le webhook tient le registre, même si l'élève ferme l'onglet avant `/merci`, et retire le droit en cas de remboursement.

### Tester avant la production

```bash
stripe listen --forward-to localhost:3000/api/buy-webhook   # donne un whsec_ de test
stripe trigger checkout.session.completed
```

Avec les clés de test (`sk_test_...`, des `price_...` de test), un achat se fait avec la carte `4242 4242 4242 4242`.
