// Investor financials for the pitch deck. One source of truth for the on-screen
// tables and the exported PDF.
//
// ---------------------------------------------------------------------------
// POURQUOI CES CHIFFRES ONT TOUS CHANGÉ
//
// Le modèle précédent posait 9 % de conversion à 240 $ par an, et en face une
// ligne « Infra + model cost » qui montait à 860 k$ pour 100 000 utilisateurs.
// Ces deux hypothèses appartenaient au produit qui faisait tourner du travail :
//
//   1. LE COÛT N'EXISTE PLUS. 860 k$ de modèles suppose qu'on exécute des runs.
//      Le dojo n'en exécute aucun, le repli payant de Dojobot est plafonné pour
//      toute l'instance, et la formation comme la bibliothèque sont des fichiers
//      statiques. Le coût marginal d'un apprenant est proche de zéro, et surtout
//      il ne suit pas la courbe des utilisateurs. Porter ce coût au bilan, c'est
//      se rendre le business plus dur qu'il n'est.
//
//   2. LA CONVERSION ÉTAIT CELLE D'UN OUTIL, PAS D'UN COURS. 9 % est un taux de
//      produit dont on a besoin tous les jours pour travailler. Un cours gratuit
//      avec une bibliothèque payante convertit autour de 2 à 5 %. On pose 3 %, et
//      la ligne est nommée pour qu'on la discute au lieu de la subir.
//
// CE QUE ÇA COÛTE DE DIRE LA VÉRITÉ : avec 3 % à 228 $ au lieu de 9 % à 240 $, le
// revenu par apprenant est divisé par trois, et l'équilibre passe de l'année 2 à
// l'année 3. On l'écrit tel quel plutôt que de remonter la conversion jusqu'à ce
// que le tableau redevienne joli.
//
// CE QUI RATTRAPE : les sièges. Un particulier vaut 228 $ par an, une école de
// douze sièges en vaut 2 160 $, et c'est le même produit servi au même coût. Les
// deux lignes sont donc séparées dans le tableau, parce que ce sont deux ventes
// différentes, à deux acheteurs différents, et les agréger en un seul ARPU
// cachait exactement ce qui fait la différence.
//
// Les chiffres restent des projections. Ce sont des hypothèses nommées, pas des
// mesures : rien ici n'est encore vendu.
import { LIBRARY_USD, SEAT_USD } from './plans'

export const CONTACT_EMAIL = ''

/** Hypothèses, écrites une fois. Le tableau ci-dessous en découle et la note du
 *  tableau les répète à l'écran, pour qu'un lecteur voie ce qu'il doit croire. */
export const LIBRARY_YEAR_USD = LIBRARY_USD * 12
export const SEAT_YEAR_USD = SEAT_USD * 12
export const AVG_SCHOOL_SEATS = 12
export const SCHOOL_YEAR_USD = SEAT_YEAR_USD * AVG_SCHOOL_SEATS
export const CONVERSION_PCT = 3

/** Unit economics by scale · how the business looks at each size (steady state, per year). */
export const FORECAST = {
  title: 'Unit economics by scale',
  note:
    `Two sales, not one: ${CONVERSION_PCT}% of learners take the library at $${LIBRARY_YEAR_USD} a year, ` +
    `and a school of about ${AVG_SCHOOL_SEATS} seats is worth $${SCHOOL_YEAR_USD.toLocaleString('en-US')}. ` +
    'Cost is near-zero per learner and does not follow the curve, because nothing runs on our account.',
  head: ['Per year', '1,000 learners', '10,000', '50,000', '150,000'],
  rows: [
    [`Library subscribers (${CONVERSION_PCT}%)`, '30', '300', '1,500', '4,500'],
    ['Library revenue', '$6.8k', '$68k', '$342k', '$1.03M'],
    [`Schools (~${AVG_SCHOOL_SEATS} seats)`, '2', '20', '90', '260'],
    ['School revenue', '$4.3k', '$43k', '$194k', '$562k'],
    ['Revenue (ARR)', '$11k', '$112k', '$536k', '$1.59M'],
    ['Infra + support', '$3k', '$14k', '$45k', '$110k'],
    ['Gross margin', '+73%', '+87%', '+92%', '+93%'],
  ],
}

/** 5-year business plan · the growth trajectory and P&L. */
export const BUSINESS_PLAN = {
  title: '5-year business plan',
  note:
    `Bottom-up: 1k to 150k learners, ${CONVERSION_PCT}% on the library, schools sold alongside. ` +
    'Break-even is Year 3, a year later than the previous plan, because the course is free and the ' +
    'library is priced as a course rather than as a tool.',
  head: ['Metric', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
  rows: [
    ['Learners (end of year)', '1,000', '10,000', '50,000', '100,000', '150,000'],
    ['Library subscribers', '30', '300', '1,500', '3,000', '4,500'],
    ['Schools', '2', '20', '90', '180', '260'],
    ['Revenue (ARR)', '$11k', '$112k', '$536k', '$1.07M', '$1.59M'],
    ['Total costs', '$60k', '$120k', '$300k', '$600k', '$900k'],
    ['Net result', '-$49k', '-$8k', '+$236k', '+$470k', '+$690k'],
  ],
}
