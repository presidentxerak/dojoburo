// CE QUE CE PRODUIT EST · une seule source, pour toutes les surfaces.
//
// Le repositionnement : Dojoburo cessait d'être un outil qui FAIT le travail à
// votre place pour devenir une académie qui vous apprend à le faire. La phrase
// est facile à écrire une fois ; le piège est qu'elle doit être écrite au même
// endroit dans la page d'accueil, l'en-tête, les métadonnées, le robot de
// support, le manifeste et le README — et que la version d'un de ces six
// endroits ne suit jamais les cinq autres. Le produit a déjà vécu ça : la
// facturation affichait deux prix différents pour la même chose sans qu'on
// quitte la page.
//
// Donc rien ici n'est répété ailleurs. Les surfaces importent la promesse, les
// piliers et les chiffres ; elles n'en écrivent aucun.
//
// Et aucun chiffre n'est un littéral : ils sont dérivés du contenu réel. Une
// académie qui annonce vingt leçons et en sert dix-huit a menti à son premier
// visiteur, ce qui est le pire endroit où mentir quand on vend de la pédagogie.
import { TRACKS, LESSON_COUNT, TOTAL_MINUTES } from './academy'

// LA PROMESSE, en deux moitiés · parce qu'elle est affichée deux fois et
// qu'elle doit rester UNE seule phrase.
//
// Le titre de la page d'accueil met la seconde moitié en couleur ; les moteurs
// de recherche, eux, lisent la phrase entière. Écrire les deux séparément,
// c'est se réveiller un matin avec un titre et une description qui ne disent
// plus la même chose — et c'est la description que les gens voient en premier,
// sans jamais voir le titre.
export const PROMISE_LEAD = 'Learn to build AI agents'
export const PROMISE_HL = 'and to run them cheap'
export const PROMISE = `${PROMISE_LEAD} — ${PROMISE_HL}`

/** La promesse en deux phrases · ce qu'on est, et ce qu'on n'est pas. La
 *  deuxième compte autant : un visiteur arrivé pour faire travailler des
 *  agents à sa place doit comprendre en une phrase qu'il n'est pas au bon
 *  endroit, plutôt que de le découvrir après avoir créé un compte. */
export const SUBTITLE =
  'A hands-on academy for agents, prompts and AI tooling, with the frugality practices most courses skip: ' +
  'what a run actually costs in tokens, in euros and in grams of CO₂e, and how to cut it. ' +
  'Nothing here runs your business for you — everything here teaches you to build it.'

/** Les quatre piliers · ils structurent l'en-tête, la page d'accueil et le
 *  plan du site. L'ordre est celui du parcours d'un visiteur : on apprend,
 *  on prend des outils, on les rend sobres, on s'entraîne. */
export interface Pillar {
  id: 'academy' | 'library' | 'eco' | 'dojo'
  /** le libellé dans la navigation · court, un mot si possible */
  nav: string
  /** le titre de sa section */
  title: string
  /** une phrase · ce qu'on y fait, pas ce que c'est */
  blurb: string
  /** son adresse */
  path: string
  /** le glyphe · ASCII et géométrique, jamais d'emoji */
  glyph: string
}

export const PILLARS: Pillar[] = [
  {
    id: 'academy',
    nav: 'Academy',
    title: 'Learn how agents actually work',
    blurb:
      'From "what is a token" to a working agent you understand line by line. ' +
      'Every lesson is read in the browser, animated beside the text, and ends with one thing to remember and one thing to do.',
    path: '/academy',
    glyph: '◱',
  },
  {
    id: 'library',
    nav: 'Library',
    title: 'Prompts, briefs and skills, ready for your trade',
    blurb:
      'A catalogue of prompts, .md briefs and agent skills, filed by category and by the job you actually do. ' +
      'Read the reasoning, copy the file, adapt it. Every entry carries what it costs to run.',
    // Une ANCRE, pas encore une page. Le catalogue arrive au lot suivant ;
    // d'ici là ce lien descend à la section qui l'annonce plutôt que de
    // promettre une adresse qui rend 404. Un lien mort sur la page d'accueil
    // coûte plus cher que l'absence du lien.
    path: '/#library',
    glyph: '❑',
  },
  {
    id: 'eco',
    nav: 'Frugality',
    title: 'What it costs, and how to cut it',
    blurb:
      'Tokens, euros and grams of CO₂e for the way you actually work — measured, not guessed. ' +
      'Then the levers, each one with the saving it really buys: shorter context, caching, a smaller model, no runaway loop.',
    // idem · la page dédiée arrive avec l'outil de mesure
    path: '/#frugality',
    glyph: '▲',
  },
  {
    id: 'dojo',
    nav: 'Dojo',
    title: 'A room to practise in',
    blurb:
      'The dojo is a sandbox now, not a factory floor. Open a teammate, read the prompt that makes it what it is, ' +
      'change it, and watch what changes. Nothing here calls a paid model or touches your accounts.',
    path: '/#app',
    glyph: '◈',
  },
]

export const PILLAR_BY_ID = Object.fromEntries(PILLARS.map((p) => [p.id, p])) as Record<Pillar['id'], Pillar>

/* ------------------------------------------------------------------ */
/* Les chiffres · dérivés, jamais tapés                                */
/* ------------------------------------------------------------------ */

export const TRACK_COUNT = TRACKS.length
export { LESSON_COUNT, TOTAL_MINUTES }
/** Les heures de cours, à une décimale · « 4,5 h » se lit, « 271 minutes » non. */
export const COURSE_HOURS = Math.round((TOTAL_MINUTES / 60) * 10) / 10

/** CE QUE NOUS NE FAISONS PLUS · à afficher, pas à taire.
 *
 *  L'app savait créer une entreprise, lancer des agents et les brancher sur
 *  des comptes réels. Ce n'est plus la proposition, et le pire serait de
 *  laisser croire le contraire à quelqu'un qui arrive avec l'ancienne page en
 *  tête. On le dit donc en toutes lettres, sur la page d'accueil. */
export const NOT_THIS = [
  'We do not run your company for you.',
  'We do not resell model tokens, and there is no meter between you and your provider.',
  'Nothing in the dojo calls a paid model or writes to your accounts — it is a sandbox.',
]
