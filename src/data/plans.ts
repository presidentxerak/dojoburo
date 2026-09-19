// What DojoBuro sells, in one place.
//
// It used to be three places, disagreeing: the landing page sold credits at
// $1 each, the Billing panel sold four metered tiers ($12.50 / $40 / $150 for
// 300 / 1,500 / 8,000 tasks), and budget.ts priced a credit at $29/1500. A
// visitor could read two different prices for the same thing without leaving
// the product.
//
// That was fixed by selling the software rather than the tokens. This revision
// fixes the next fault, which is bigger: we were still pricing a product that
// no longer exists.
//
// ---------------------------------------------------------------------------
// CE QUE COÛTE RÉELLEMENT CE PRODUIT, aujourd'hui
//
// L'ancienne grille facturait des exécutions de modèle. Elle avait donc un coût
// marginal à couvrir, et toute la mécanique de pondération des tâches existe
// pour ça. Depuis que le dojo est un bac à sable, ce coût a disparu :
//
//   la formation        des pages statiques · coût marginal nul
//   la bibliothèque     des fichiers servis par le CDN · coût marginal nul
//   les grades, badges, le diplôme   du localStorage · coût marginal nul
//   Dojobot             cascade gratuite d'abord, repli payant plafonné à
//                       SUPPORT_PAID_DAILY_CAP appels par jour POUR TOUTE
//                       L'INSTANCE · quelques dizaines de dollars par mois au
//                       pire absolu, quel que soit le nombre d'élèves
//   le dojo             rien ne s'exécute tant que VITE_DOJO_LIVE est éteint
//
// Autrement dit : le coût ne suit pas le nombre d'apprenants. Facturer à la
// tâche revenait donc à faire payer un coût que nous n'avons pas, et à le faire
// payer d'autant plus cher que la personne apprend davantage. C'est l'inverse
// de ce qu'un centre de formation doit encourager.
//
// ---------------------------------------------------------------------------
// CE QUE LES TROIS FORMULES VENDENT MAINTENANT
//
//   FREE      la formation entière, et le diplôme.
//             Gratuit parce que ça ne coûte rien à servir, et parce que le
//             diplôme est la preuve publique que le cours fonctionne. Le faire
//             payer taxerait exactement les gens qui en parlent autour d'eux.
//
//   LIBRARY   les fichiers. Ce qui a demandé du travail à écrire et qui
//             continue d'en demander : chaque prompt, chaque brief .md, chaque
//             skill, en vrai fichier, plus ceux qui arrivent. C'est la seule
//             chose ici dont le stock grossit tous les mois, donc la seule qui
//             justifie un abonnement plutôt qu'un achat.
//
//   SCHOOL    des sièges. Une boîte ou une école qui forme ses gens veut une
//             seule facture et voir qui avance. Ça ne nous coûte rien de plus à
//             servir, et c'est le seul acheteur au ticket élevé de ce produit.
//
// ---------------------------------------------------------------------------
// LES IDENTIFIANTS NE BOUGENT PAS, LES NOMS OUI.
//
// 'founder' et 'managed' sont des clés de stockage : elles sont écrites dans la
// colonne organisations.plan, dans les métadonnées Stripe et dans les variables
// STRIPE_PRICE_FOUNDER / STRIPE_PRICE_MANAGED. Les renommer orphelinerait tout
// abonnement déjà vendu. Ce qui change est ce qu'on vend et comment ça s'appelle
// à l'écran · voir api/_lib/entitlements.ts, qui lit les mêmes clés.

export interface Plan {
  id: 'free' | 'founder' | 'managed'
  /** what the plan is called on screen · never the id */
  name: string
  usd: number
  /** true when `usd` is the price of ONE seat rather than of the account */
  perSeat?: boolean
  /** the smallest number of seats that can be bought, on a per-seat plan */
  minSeats?: number
  /** the one line under the price */
  tagline: string
  /** shown above the list */
  inclHead: string
  incl: string[]
  featured?: boolean
  /** LE FRANÇAIS, dans la même entrée que l'anglais.
   *
   *  Une carte de prix est l'endroit du site où une divergence coûte le plus
   *  cher : on ne se trompe pas sur un libellé de navigation, on se trompe sur
   *  ce que quelqu'un croit acheter. Les deux versions se lisent donc ensemble,
   *  et scripts/test-i18n.mjs refuse une traduction qui recopie l'anglais.
   *
   *  Le PRIX, lui, n'est pas traduit · c'est un nombre, et il n'existe qu'une
   *  fois dans ce fichier. Seul ce qu'on en dit a deux langues. */
  fr?: { tagline: string; inclHead: string; incl: string[] }
}

/** L'abonnement bibliothèque, par personne et par mois.
 *
 *  Il était à 29 $, fixé quand la formule incluait de faire tourner du travail.
 *  Un cours en ligne se compare à Frontend Masters ou à O'Reilly, pas à un SaaS
 *  d'entreprise, et 19 $ est le haut de cette fourchette. Le stock de fichiers
 *  qui grossit chaque mois est ce qui tient l'abonnement debout. */
export const LIBRARY_USD = 19

/** Un siège d'école, par personne et par mois · remise de volume sur les 19 $. */
export const SEAT_USD = 15

/** Le plancher. En dessous de cinq personnes, l'abonnement individuel est moins
 *  cher et c'est celui qu'il faut prendre · on le dit sur la carte plutôt que de
 *  laisser quelqu'un acheter la mauvaise formule. */
export const SEAT_MIN = 5

/** Ce que coûte l'école au plancher · $75. Jamais recopié à la main. */
export const SCHOOL_FLOOR_USD = SEAT_USD * SEAT_MIN

/** "$19" · plan prices are whole dollars, so no cents. Declared before PLANS
 *  because the School card quotes the Library price rather than retyping it. */
const priceTag = (usd: number): string => (usd === 0 ? '$0' : `$${usd}`)

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    usd: 0,
    tagline: 'The whole course, and the diploma. No card, no account to begin.',
    inclHead: 'Includes',
    incl: [
      'The three courses in full, every lesson, nothing gated',
      'The practice dojo, and the cost breakdown of any run',
      'Every belt, every badge, and the certified diploma at the end',
      'The reasoning behind every file in the library',
      'Two library files, open, so you can judge the rest',
    ],
    fr: {
      tagline: "La formation entière, et le diplôme. Sans carte, sans compte pour commencer.",
      inclHead: "Comprend",
      incl: [
        "Les trois cours en entier, chaque leçon, rien sous clé",
        "Le dojo d'entraînement, et le détail du coût de n'importe quelle exécution",
        "Chaque ceinture, chaque badge, et le diplôme certifié à la fin",
        "Le raisonnement derrière chaque fichier de la bibliothèque",
        "Deux fichiers de la bibliothèque, ouverts, pour juger du reste",
      ],
    },
  },
  {
    id: 'founder',
    name: 'Library',
    usd: LIBRARY_USD,
    featured: true,
    tagline: 'Every prompt, brief and skill as a real file, yours to take.',
    inclHead: 'Everything in Free, plus',
    incl: [
      'Every file in the library, in full',
      'Download each one as a real .md or .txt, not a copy-paste',
      'New files as they are written, at no extra cost',
      'A custom domain, and no DojoBuro badge',
      'Your own model key, sealed server-side, if you ever switch the dojo live',
    ],
    fr: {
      tagline: "Chaque prompt, brief et skill en vrai fichier, à emporter.",
      inclHead: "Tout ce qui est gratuit, plus",
      incl: [
        "Chaque fichier de la bibliothèque, en entier",
        "Le téléchargement en vrai .md ou .txt, pas un copier-coller",
        "Les nouveaux fichiers au fur et à mesure, sans supplément",
        "Un domaine à vous, et aucun badge DojoBuro",
        "Votre propre clé de modèle, scellée côté serveur, si un jour vous passez le dojo en mode vif",
      ],
    },
  },
  {
    id: 'managed',
    name: 'School',
    usd: SEAT_USD,
    perSeat: true,
    minSeats: SEAT_MIN,
    tagline: `For a group you are training. One bill, from ${SEAT_MIN} seats up.`,
    inclHead: 'Everything in Library, for each seat, plus',
    incl: [
      'One bill for the whole group, seats added or removed any month',
      'Who has finished what: belts, badges and diplomas across the group',
      'Invite by email, no licence key to hand around',
      `Cheaper per person than ${priceTag(LIBRARY_USD)} each, from ${SEAT_MIN} seats`,
      'Below that, take the Library plan, it costs you less',
    ],
    fr: {
      tagline: "Pour un groupe que vous formez. Une seule facture, à partir de cinq sièges.",
      inclHead: "Tout ce que contient Library, pour chaque siège, plus",
      incl: [
        "Une seule facture pour tout le groupe, sièges ajoutés ou retirés chaque mois",
        "Qui a terminé quoi : ceintures, badges et diplômes à l'échelle du groupe",
        "Invitation par courriel, aucune clé de licence à faire circuler",
        "Moins cher par personne que l'abonnement individuel, dès cinq sièges",
        "En dessous, prenez la formule Library : elle vous coûte moins",
      ],
    },
  },
]

export const PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p])) as Record<Plan['id'], Plan>

/** "$19" · the headline figure, without the per-seat qualifier. */
export const planPrice = (p: Plan): string => priceTag(p.usd)

/* L'UNITÉ ET LE PLANCHER ONT QUITTÉ CE FICHIER.
 *
 * `planUnit` rendait « / seat / month » et `planFloor` « from $75 a month » :
 * deux phrases anglaises écrites en dur dans un fichier de données. Tant que
 * le site n'avait qu'une langue, c'était seulement un mauvais rangement. Au
 * moment de traduire, c'est devenu un trou · du texte à traduire qui ne
 * ressemble pas à du texte, planqué derrière une fonction, dans le fichier que
 * la traduction n'a aucune raison d'aller lire.
 *
 * Les DONNÉES restent ici : `perSeat`, `minSeats`, et le prix. Les MOTS qui
 * les habillent se composent dans la carte, à partir du dictionnaire, où ils
 * ont deux langues. Le plancher reste un calcul, jamais un nombre recopié :
 * voir SCHOOL_FLOOR_USD. */
