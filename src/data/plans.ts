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
  },
]

export const PLAN_BY_ID = Object.fromEntries(PLANS.map((p) => [p.id, p])) as Record<Plan['id'], Plan>

/** "$19" · the headline figure, without the per-seat qualifier. */
export const planPrice = (p: Plan): string => priceTag(p.usd)

/** "/ month" or "/ seat / month" · the unit belongs next to the number, because
 *  $15 and $15 a seat are not the same offer and a card that hides the
 *  difference is the same fault as two prices for one product. */
export const planUnit = (p: Plan): string =>
  p.usd === 0 ? '/ forever' : p.perSeat ? '/ seat / month' : '/ month'

/** "from $75 a month" · what a per-seat plan actually costs at its floor. */
export const planFloor = (p: Plan): string | null =>
  p.perSeat && p.minSeats ? `from $${p.usd * p.minSeats} a month` : null
