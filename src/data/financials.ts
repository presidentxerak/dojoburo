// Les chiffres du dossier investisseurs. Une seule source pour les tableaux à
// l'écran et pour le PDF exporté.
//
// ---------------------------------------------------------------------------
// POURQUOI TOUT A CHANGÉ, UNE DEUXIÈME FOIS
//
// La version précédente modélisait un ABONNEMENT : 3 % des apprenants à 228 $
// par an, plus des sièges d'école. Le produit se vend maintenant UNE FOIS,
// 99 € la formation et 49 € le module métier. Ce n'est pas un ajustement de
// prix, c'est un changement de forme, et il casse trois choses à la fois :
//
//   1. IL N'Y A PLUS D'ARR. Un achat unique ne se renouvelle pas. La ligne
//      « Revenue (ARR) » de l'ancien tableau additionnait des abonnements qui
//      n'existent plus ; la laisser aurait présenté un revenu récurrent là où
//      il n'y a que des ventes.
//
//   2. LE REVENU SUIT LES NOUVEAUX, PAS LE CUMUL. Un abonné payait chaque
//      année ; un acheteur paie une fois. Le revenu d'une année est donc
//      fonction des apprenants ARRIVÉS cette année-là, et une base qui grossit
//      ne rapporte rien de plus par elle-même. C'est la faiblesse de ce modèle,
//      et elle doit se voir dans le tableau plutôt que dans une note.
//
//   3. CHAQUE NOMBRE ÉTAIT TAPÉ À LA MAIN. « $6.8k », « +73 % », « -$49k » :
//      douze lignes de chiffres qu'aucun calcul ne produisait, donc douze
//      lignes qui ne pouvaient que devenir fausses au premier changement de
//      prix. Elles l'étaient. Tout ce qui suit est maintenant CALCULÉ à partir
//      des hypothèses nommées juste au-dessus, et le tableau bouge tout seul le
//      jour où un prix change dans data/plans.
//
// CE QUE CES CHIFFRES SONT, ET NE SONT PAS. Des hypothèses nommées, pas des
// mesures. Rien n'est encore vendu. Le taux de conversion et le taux
// d'attachement du module métier sont des paris, écrits ici pour être discutés
// et non pour être crus.
import { PATH_EUR, TRADE_EUR } from './plans'

export const CONTACT_EMAIL = ''

/* ------------------------------------------------------------------ */
/* LES HYPOTHÈSES · écrites une fois, et tout le reste en découle      */
/* ------------------------------------------------------------------ */

/** Part des gens qui finissent la découverte et achètent la formation.
 *
 *  3 % est le bas de la fourchette d'un cours en ligne vendu à la suite d'un
 *  contenu gratuit. On le pose bas plutôt que de remonter le chiffre jusqu'à ce
 *  que le tableau devienne joli. */
export const CONVERSION_PCT = 3

/** Part des acheteurs de la formation qui prennent aussi leur module métier.
 *
 *  C'est un supplément à 49 € proposé à quelqu'un qui vient de payer 99 € et
 *  qui est content : le taux est haut, mais il ne s'applique qu'aux acheteurs,
 *  donc son effet sur le total reste modeste. */
export const TRADE_ATTACH_PCT = 35

/** Ce que rapporte UN acheteur, module métier compris en espérance. */
export const PER_BUYER_EUR = PATH_EUR + (TRADE_EUR * TRADE_ATTACH_PCT) / 100

/** Les paliers du tableau · des apprenants NOUVEAUX dans l'année. */
export const SCALE = [1_000, 10_000, 50_000, 150_000]

/** Le coût annuel, par palier · il ne suit pas la courbe des apprenants.
 *
 *  Servir une page de plus ne coûte rien de mesurable ; ce qui coûte, c'est
 *  d'écrire le cours, de le tenir à jour et de répondre aux gens. Ces trois
 *  postes grandissent par paliers, pas par apprenant, et c'est la propriété la
 *  plus importante de ce modèle. */
export const COSTS_EUR = [60_000, 120_000, 300_000, 600_000]

/* ------------------------------------------------------------------ */
/* CE QUI SE CALCULE                                                   */
/* ------------------------------------------------------------------ */

const buyers = (learners: number) => Math.round((learners * CONVERSION_PCT) / 100)
const revenue = (learners: number) => Math.round(buyers(learners) * PER_BUYER_EUR)

/** « 1,03 M € », « 342 k € », « 6,8 k € » · un seul formateur, jamais recopié. */
export const eur = (n: number): string => {
  const a = Math.abs(n)
  const sign = n < 0 ? '-' : ''
  if (a >= 1_000_000) return `${sign}${(a / 1_000_000).toFixed(2)} M €`
  if (a >= 1_000) return `${sign}${Math.round(a / 1_000)} k €`
  return `${sign}${a} €`
}

const num = (n: number) => n.toLocaleString('fr-FR')

/** L'économie unitaire par palier · à quoi ressemble l'affaire à chaque taille. */
export const FORECAST = {
  title: 'Economics by scale',
  note:
    `One sale, not a subscription: ${CONVERSION_PCT}% of the people who finish the free week buy the path at ` +
    `${PATH_EUR} €, and ${TRADE_ATTACH_PCT}% of those add their trade module at ${TRADE_EUR} €. ` +
    'Revenue follows new learners each year, never the installed base. Cost does not follow the curve at all.',
  head: ['Per year', ...SCALE.map((n) => `${num(n)} learners`)],
  rows: [
    [`Buyers (${CONVERSION_PCT}%)`, ...SCALE.map((n) => num(buyers(n)))],
    ['Revenue', ...SCALE.map((n) => eur(revenue(n)))],
    ['Costs', ...COSTS_EUR.map((c) => eur(c))],
    ['Result', ...SCALE.map((n, i) => eur(revenue(n) - COSTS_EUR[i]))],
  ],
}

/** Le plan à cinq ans · la trajectoire, et ce qu'elle donne.
 *
 *  LES APPRENANTS SONT DES NOUVEAUX DE L'ANNÉE, jamais un cumul. Dans un modèle
 *  d'achat unique, présenter une base cumulée à côté d'un revenu donnerait
 *  l'impression que la base paie chaque année. Elle ne paie qu'une fois. */
const YEARS = [1_000, 10_000, 50_000, 100_000, 150_000]
const YEAR_COSTS = [60_000, 120_000, 300_000, 600_000, 900_000]

export const BUSINESS_PLAN = {
  title: '5-year plan',
  note:
    `New learners each year, ${CONVERSION_PCT}% of them buying once at ${PATH_EUR} €. ` +
    'Nothing recurs, so a year that brings fewer newcomers earns less, however large the community is. ' +
    'That is the real risk of this model and it is written here rather than in a footnote.',
  head: ['Metric', ...YEARS.map((_, i) => `Year ${i + 1}`)],
  rows: [
    ['New learners', ...YEARS.map(num)],
    [`Buyers (${CONVERSION_PCT}%)`, ...YEARS.map((n) => num(buyers(n)))],
    ['Revenue', ...YEARS.map((n) => eur(revenue(n)))],
    ['Costs', ...YEAR_COSTS.map(eur)],
    ['Net result', ...YEARS.map((n, i) => eur(revenue(n) - YEAR_COSTS[i]))],
  ],
}
