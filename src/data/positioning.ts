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
import { USE_CASE_COUNT } from './agentUseCases'
import type { IconName } from './icons'

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
/** Ce qui sépare les deux moitiés · une VIRGULE, plus un tiret cadratin. Le
 *  tiret a été retiré de tous les textes de l'app, donc aussi de la phrase que
 *  le titre, la description et la garde de contenu comparent entre eux.
 *
 *  Il est EXPORTÉ parce que la page d'accueil pose les deux moitiés côte à
 *  côte avec la seconde en couleur : elle a besoin du séparateur seul. Il y
 *  était écrit à la main, et le jour où la promesse est passée du tiret à la
 *  virgule le titre affichait « Learn to build AI agents: and to run them
 *  cheap » pendant que la description disait autre chose. */
export const PROMISE_SEP = ', '
export const PROMISE = `${PROMISE_LEAD}${PROMISE_SEP}${PROMISE_HL}`

/** LES TROIS COURS, dans l'ordre où on les suit · déclarés ICI parce que le
 *  sous-titre les compte, et qu'une constante lue avant sa déclaration fait
 *  tomber le module entier au chargement. La liste complète, avec leurs
 *  libellés, est dérivée des piliers plus bas. */
export const COURSE_PILLARS: Array<'build' | 'academy' | 'eco' | 'design' | 'figma'> =
  ['build', 'academy', 'eco', 'design', 'figma']
export const COURSE_COUNT = COURSE_PILLARS.length

/** La promesse en deux phrases · ce qu'on est, et ce qu'on n'est pas. La
 *  deuxième compte autant : un visiteur arrivé pour faire travailler des
 *  agents à sa place doit comprendre en une phrase qu'il n'est pas au bon
 *  endroit, plutôt que de le découvrir après avoir créé un compte. */
// LE SOUS-TITRE N'ÉNUMÈRE PLUS LES COURS.
//
// Il les listait : « build an agent, write the prompt that decides everything,
// and cut what it costs to run ». Trois cours tenaient dans une phrase. Cinq
// n'y tiennent pas, et une énumération écrite à la main à côté d'un
// COURSE_COUNT dérivé est exactement la faute que ce fichier existe pour
// empêcher : le chiffre suit, la liste non, et personne ne relit un
// sous-titre. Il dit maintenant ce qu'on apprend, et les cours se comptent.
//
// SECONDE CORRECTION, LE MÊME JOUR. La première version de ce commentaire
// annonçait qu'on n'énumérait plus, et la phrase en dessous énumérait quand
// même les quatre premiers cours. Le portail l'a attrapée par un chemin
// inattendu : le sous-titre allongé a fait grandir la carte du hero, et il ne
// restait plus que 193 pixels de dojo visible au-dessus. Une promesse qui
// grandit mange le lieu qui la rend crédible.
//
// Il nomme donc l'ÉTENDUE du programme au lieu de la dérouler. « De la
// construction d'un agent au design avec un modèle » couvre les cinq sans en
// citer un seul, donc sans redevenir faux au sixième.
export const SUBTITLE =
  `A training centre with ${COURSE_COUNT} courses, from building an AI agent to designing with one when you ` +
  `have never designed. You walk into the dojo, pick one of ${USE_CASE_COUNT} shapes of agent, build it from a ` +
  'blank page, and leave with a file that runs in a real framework. Nothing here works for you.'

/** Les piliers · ils structurent l'en-tête, la page d'accueil et le
 *  plan du site. L'ordre est celui du parcours d'un visiteur : on apprend,
 *  on prend des outils, on les rend sobres, on s'entraîne. */
export interface Pillar {
  id: 'build' | 'academy' | 'library' | 'eco' | 'dojo' | 'design' | 'figma'
  /** le libellé dans la navigation · court, un mot si possible */
  nav: string
  /** le titre de sa section */
  title: string
  /** une phrase · ce qu'on y fait, pas ce que c'est */
  blurb: string
  /** son adresse */
  path: string
  /** le glyphe · ASCII et géométrique, jamais d'emoji */
  /** l'icône · un NOM de forme, pas un caractère. Les glyphes Unicode qui
   *  vivaient ici se dessinaient différemment sur chaque système, et deux
   *  d'entre eux ne s'affichaient pas du tout sur un téléphone. Voir
   *  components/BauhausIcon pour le dessin, data/icons pour le vocabulaire. */
  glyph: IconName
  /** LE FRANÇAIS, à côté de l'anglais et non dans un fichier séparé.
   *
   *  Un pilier est lu par six surfaces (en-tête, pied de page, accueil, plan
   *  du site, robot, académie) et sa source unique est ici. Mettre sa
   *  traduction ailleurs recréerait exactement la divergence que ce fichier
   *  existe pour empêcher, dans la langue que le moins de gens relisent.
   *
   *  Il est OPTIONNEL, et c'est volontaire : un pilier pas encore traduit sert
   *  l'anglais, ce qui est une lacune visible et comptée par
   *  scripts/test-i18n.mjs, plutôt qu'un libellé vide dans la navigation. */
  fr?: { nav: string; title: string; blurb: string }
}

export const PILLARS: Pillar[] = [
  {
    id: 'build',
    nav: 'Build an agent',
    title: `${USE_CASE_COUNT} agents, ${USE_CASE_COUNT} ways of failing`,
    blurb:
      `Walk into the dojo. ${USE_CASE_COUNT} agents are asleep, one per shape of problem, and the one you pick ` +
      'wakes up. You take it from a blank page to a file that runs in a real framework, and the master keeps ' +
      'your progress.',
    path: '/build',
    glyph: 'diamond',
    fr: {
      nav: "Construire un agent",
      title: "Douze agents, douze façons d'échouer",
      blurb:
        "Entrez dans le dojo. Douze agents y dorment, un par forme de problème, et celui que vous choisissez se réveille. Vous le menez de la page blanche à un fichier qui tourne dans un vrai framework, et le maître tient votre progression.",
    },
  },
  {
    id: 'academy',
    nav: 'Prompt engineering',
    title: 'The instruction that decides everything',
    blurb:
      'From "what is a token" to a brief a model actually follows. Every lesson is read in the browser, ' +
      'has something you can take apart beside the text, and ends with one thing to remember and one thing to do.',
    path: '/academy',
    glyph: 'pen',
    fr: {
      nav: "Ingénierie de prompt",
      title: "L'instruction qui décide de tout",
      blurb:
        "De « c'est quoi un jeton » à un brief qu'un modèle suit vraiment. Chaque leçon se lit dans le navigateur, a quelque chose à démonter à côté du texte, et finit par une chose à retenir et une chose à faire.",
    },
  },
  {
    id: 'library',
    nav: 'Library',
    title: 'Prompts, briefs and skills, ready for your trade',
    blurb:
      'A catalogue of prompts, .md briefs and agent skills, filed by category and by the job you actually do. ' +
      'Read the reasoning, copy the file, adapt it. Every entry carries what it costs to run.',
    path: '/library',
    glyph: 'square',
    fr: {
      nav: "Bibliothèque",
      title: "Prompts, briefs et skills, prêts pour votre métier",
      blurb:
        "Un catalogue de prompts, de briefs .md et de skills d'agents, classés par catégorie et par le métier que vous exercez vraiment. Lisez le raisonnement, prenez le fichier, adaptez-le. Chaque entrée porte ce qu'elle coûte à faire tourner.",
    },
  },
  {
    id: 'eco',
    // Le nom du COURS, pas une abréviation. « Frugality » tout court était plus
    // court dans l'en-tête et ne disait pas de quoi il s'agit ; les trois cours
    // s'annoncent ici sous le nom que le centre de formation leur donne.
    nav: 'Token frugality',
    title: 'What it costs, and how to cut it',
    blurb:
      'Where your tokens actually go, counted rather than guessed: the settings you choose before writing a word, ' +
      'and the way the prompt itself is written. Then the levers, each one with the saving it really buys.',
    path: '/frugality',
    glyph: 'triangle',
    fr: {
      nav: "Sobriété en jetons",
      title: "Ce que ça coûte, et comment le réduire",
      blurb:
        "Où passent vos jetons, comptés plutôt que devinés : les réglages choisis avant d'écrire un mot, et la façon dont le prompt lui-même est écrit. Puis les leviers, chacun avec ce qu'il rapporte vraiment.",
    },
  },
  {
    // LES DEUX COURS DE DESIGN · ils arrivent après la sobriété parce que
    // c'est l'ordre du parcours, et avant la salle d'entraînement qui n'est
    // pas un cours. Leur public n'est pas celui des trois premiers : ce sont
    // des gens du growth et de la communication qui n'ont jamais designé, et
    // les accroches le disent plutôt que de le laisser deviner.
    id: 'design',
    nav: 'Design with a model',
    title: 'Judging a screen, without ever having designed one',
    blurb:
      'A model produces design that is plausible, and plausible is the trap. This course does not teach you to ' +
      'draw: it teaches you to say what is wrong with a screen, in words a model can act on.',
    path: '/design',
    glyph: 'layers',
    fr: {
      nav: 'Design avec un modèle',
      title: "Juger un écran sans avoir jamais designé",
      blurb:
        "Un modèle produit du design plausible, et le plausible est le piège. Ce cours n'apprend pas à dessiner : il apprend à dire ce qui ne va pas dans un écran, avec des mots sur lesquels un modèle peut agir.",
    },
  },
  {
    id: 'figma',
    nav: 'Figma',
    title: 'Five ideas, and the buttons stop mattering',
    blurb:
      'Interfaces move several times a year; the model behind them has not moved in years. Learn what a frame ' +
      'is, what auto layout does and why a component exists, and the current interface is a ten minute discovery.',
    path: '/figma',
    glyph: 'grid',
    fr: {
      nav: 'Figma',
      title: "Cinq idées, et les boutons cessent d'avoir de l'importance",
      blurb:
        "Les interfaces bougent plusieurs fois par an ; le modèle derrière elles n'a pas bougé depuis des années. Apprenez ce qu'est un cadre, ce que fait l'auto layout et pourquoi un composant existe, et l'interface du moment se découvre en dix minutes.",
    },
  },
  {
    id: 'dojo',
    nav: 'Practice room',
    title: 'A room to take things apart in',
    blurb:
      'The dojo is a sandbox, not a factory floor. Open an agent, read the prompt that makes it what it is, ' +
      'change it, and watch what changes. Nothing here calls a paid model or touches your accounts.',
    path: '/#app',
    glyph: 'quadrant',
    fr: {
      nav: "Salle d'entraînement",
      title: "Une salle où démonter les choses",
      blurb:
        "Le dojo est un bac à sable, pas un atelier de production. Ouvrez un agent, lisez le prompt qui le rend ce qu'il est, changez-le, et regardez ce qui change. Rien ici n'appelle de modèle payant ni ne touche à vos comptes.",
    },
  },
]

export const PILLAR_BY_ID = Object.fromEntries(PILLARS.map((p) => [p.id, p])) as Record<Pillar['id'], Pillar>

/** LES TROIS COURS, dans l'ordre où on les suit. Ce sont les piliers qui
 *  ENSEIGNENT ; la bibliothèque est un catalogue et la salle d'entraînement un
 *  lieu, ni l'un ni l'autre n'est un cours.
 *
 *  Ils sont DÉRIVÉS des piliers, pas recopiés à côté. Un centre de formation
 *  dont les trois cours sont écrits à deux endroits finit par en annoncer
 *  quatre à un endroit et deux à l'autre, et c'est arrivé dans ce fichier
 *  même : une liste `COURSES` autonome vivait dans data/agentUseCases avec
 *  ses propres libellés. */
export const COURSES: Pillar[] = COURSE_PILLARS.map((id) => PILLAR_BY_ID[id])

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
  'Nothing in the dojo calls a paid model or writes to your accounts: it is a sandbox.',
]

/* ------------------------------------------------------------------ */
/* LE FRANÇAIS des phrases qui n'appartiennent à aucun pilier          */
/* ------------------------------------------------------------------ */
//
// Les piliers portent leur traduction dans leur propre entrée (voir le champ
// `fr` plus haut). Restent la promesse, le sous-titre et ce que nous ne
// faisons pas : trois textes lus par la page d'accueil, les métadonnées et le
// robot, donc trois textes qui doivent rester UNE seule version chacun.
//
// POURQUOI ICI ET PAS DANS LE DICTIONNAIRE. Le dictionnaire porte les phrases
// d'interface : des libellés courts, répétés, qui n'appartiennent à personne.
// Ces trois là sont le POSITIONNEMENT, et leur source unique est ce fichier.
// Les déplacer ailleurs rouvrirait précisément la faille que l'en-tête de ce
// module décrit : une promesse écrite à deux endroits finit par dire deux
// choses, et c'est la version que personne ne relit qui part en production.
//
// LA PROMESSE FRANÇAISE N'EST PAS UNE TRADUCTION MOT À MOT. « Learn to build
// AI agents, and to run them cheap » traduit littéralement donne « et à les
// faire tourner bon marché », qui est correct et sonne comme une brochure.
// Une promesse se réécrit dans la langue d'arrivée, sinon elle se lit comme
// une traduction, et une promesse qui se lit comme une traduction n'engage
// personne.
export const PROMISE_LEAD_FR = 'Apprenez à construire des agents IA'
export const PROMISE_HL_FR = 'et à les faire tourner pour trois fois rien'
export const PROMISE_FR = `${PROMISE_LEAD_FR}${PROMISE_SEP}${PROMISE_HL_FR}`

export const SUBTITLE_FR =
  `Un centre de formation avec ${COURSE_COUNT} cours, de la construction d'un agent IA au design avec un modèle ` +
  `quand on n'a jamais designé. Vous entrez dans le dojo, vous choisissez l'une des ${USE_CASE_COUNT} formes ` +
  "d'agent, vous la construisez depuis la page blanche, et vous repartez avec un fichier qui tourne dans un " +
  'vrai framework. Rien ici ne travaille à votre place.'

export const NOT_THIS_FR = [
  'Nous ne faisons pas tourner votre entreprise à votre place.',
  "Nous ne revendons pas de jetons, et il n'y a aucun compteur entre vous et votre fournisseur.",
  "Rien dans le dojo n'appelle de modèle payant ni n'écrit dans vos comptes : c'est un bac à sable.",
]

/** La promesse, le sous-titre et les démentis dans la langue demandée.
 *
 *  Un seul point d'entrée plutôt que trois tests de langue disséminés dans la
 *  page d'accueil, les métadonnées et le robot · c'est là que les versions
 *  commencent à diverger. */
export function positioningFor(lang: 'en' | 'fr') {
  const fr = lang === 'fr'
  return {
    promiseLead: fr ? PROMISE_LEAD_FR : PROMISE_LEAD,
    promiseHl: fr ? PROMISE_HL_FR : PROMISE_HL,
    promise: fr ? PROMISE_FR : PROMISE,
    subtitle: fr ? SUBTITLE_FR : SUBTITLE,
    notThis: fr ? NOT_THIS_FR : NOT_THIS,
  }
}
