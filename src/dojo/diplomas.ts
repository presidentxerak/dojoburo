// LES DIPLÔMES · ce que le maître reconnaît.
//
// Un centre de formation qui ne reconnaît rien laisse l'élève sans repère : il
// ne sait ni où il en est, ni quand il a fini quelque chose. Mais un diplôme
// qu'on obtient en cliquant sur « suivant » ne vaut rien non plus, et tout le
// monde le sait au premier coup d'oeil.
//
// LA RÈGLE : on ne reconnaît que des parcours TERMINÉS DE BOUT EN BOUT. Quatre
// étapes commencées sur quatre agents différents ne valent aucun diplôme ; un
// agent construit du début à la fin en vaut un. C'est l'inverse de ce qui
// donne envie de cliquer, et c'est exactement pour ça que c'est la bonne règle.
//
// ILS COUVRENT LES TROIS COURS, maintenant. Ils n'en reconnaissaient qu'un :
// on pouvait finir les vingt leçons de prompt engineering et les sept leviers
// de sobriété sans que le maître ait quoi que ce soit à dire. Un centre qui
// annonce trois cours et ne décerne que sur un seul dit à l'élève lequel des
// trois compte vraiment, et ce n'est pas le message.
//
// Ils ne sont ni vendus, ni certifiés, ni opposables à un employeur. Ce sont
// des repères de progression, et la page le dit plutôt que de laisser croire
// autre chose.
import { USE_CASE_COUNT } from '../data/agentUseCases'
import { LESSON_COUNT } from '../data/academy'
import { LEVERS } from '../data/frugality'
import type { CourseProgress } from './masterProgress'
import type { Lang } from '../i18n/lang'

export interface Diploma {
  id: string
  title: string
  /** comment on l'obtient, avant de l'avoir */
  how: string
  /** ce qu'il dit, une fois obtenu */
  awarded: string
  /** la condition, lue sur les trois cours · elle est une FONCTION et non un
   *  nombre, parce qu'un diplôme qui couvre deux cours ne se réduit pas à un
   *  seuil sur un compteur */
  earned: (c: Record<CourseProgress['id'], CourseProgress>) => boolean
  /** ce qu'il reste à faire, en clair · affiché tant qu'il n'est pas acquis.
   *
   *  ELLE PREND LA LANGUE plutôt que de rendre une phrase anglaise qu'on
   *  traduirait ensuite : la phrase COMPTE des choses (« 2 agents et 10
   *  leçons »), et un accord de nombre ne se rattrape pas après coup. */
  remaining: (c: Record<CourseProgress['id'], CourseProgress>, lang: Lang) => string
  /** le même diplôme en français */
  fr?: { title: string; how: string; awarded: string }
}

/** Le diplôme dans la langue demandée. */
export const diplomaIn = (d: Diploma, lang: Lang): Diploma =>
  (lang === 'fr' && d.fr ? { ...d, ...d.fr } : d)

const HALF = Math.ceil(USE_CASE_COUNT / 2)

export const DIPLOMAS: Diploma[] = [
  {
    id: 'first',
    title: 'First agent',
    how: 'Build one agent all the way through, every step of its path.',
    awarded: 'You took one shape of problem from a blank page to a file that runs elsewhere.',
    earned: (c) => c.build.done >= 1,
    remaining: (_c, lang) => (lang === 'fr' ? "Un agent, terminé d'un bout à l'autre." : 'One agent, finished end to end.'),
    fr: { title: "Premier agent", how: "Construire un agent de bout en bout, chaque étape de son parcours.", awarded: "Vous avez mené une forme de problème de la page blanche jusqu'à un fichier qui tourne ailleurs." },
  },
  {
    id: 'three',
    title: 'Three shapes',
    how: 'Finish three different agents. Different shapes, not three attempts at one.',
    awarded: 'You have seen three ways an agent fails, which is three more than most people who ship one.',
    earned: (c) => c.build.done >= 3,
    remaining: (c, lang) => {
      const n = Math.max(0, 3 - c.build.done)
      return lang === 'fr' ? `${n} agent${n > 1 ? 's' : ''} de plus, terminé${n > 1 ? 's' : ''}.` : `${n} more agents finished.`
    },
    fr: { title: "Trois formes", how: "Terminer trois agents différents. Des formes différentes, pas trois tentatives sur une seule.", awarded: "Vous avez vu trois façons dont un agent échoue, soit trois de plus que la plupart de ceux qui en livrent un." },
  },
  {
    // LE DIPLÔME QUI TRAVERSE DEUX COURS · il existe pour dire une chose que
    // les autres ne disent pas : construire sans comprendre l'instruction, ça
    // s'appelle avoir eu de la chance.
    id: 'literate',
    title: 'Builder who reads',
    how: `Finish two agents and half the ${LESSON_COUNT} lessons of prompt engineering.`,
    awarded: 'You can build one and say why the instruction inside it works. The second one will not be luck.',
    earned: (c) => c.build.done >= 2 && c.academy.done >= Math.ceil(LESSON_COUNT / 2),
    remaining: (c, lang) => {
      const a = Math.max(0, 2 - c.build.done)
      const l = Math.max(0, Math.ceil(LESSON_COUNT / 2) - c.academy.done)
      const parts = lang === 'fr'
        ? [a && `${a} agent${a > 1 ? 's' : ''} de plus`, l && `${l} leçon${l > 1 ? 's' : ''} de plus`]
        : [a && `${a} more agents`, l && `${l} more lessons`]
      return parts.filter(Boolean).join(lang === 'fr' ? ' et ' : ' and ') + '.'
    },
    fr: { title: "Bâtisseur qui lit", how: `Terminer deux agents et la moitié des ${LESSON_COUNT} leçons de prompt engineering.`, awarded: "Vous savez en construire un et dire pourquoi l'instruction qu'il contient fonctionne. Le deuxième ne devra rien à la chance." },
  },
  {
    id: 'frugal',
    title: 'Counts what it costs',
    how: `Build one agent, then work through all ${LEVERS.length} frugality levers.`,
    awarded: 'You know what one of your agents costs to run, and which lever moves that number most.',
    earned: (c) => c.build.done >= 1 && c.eco.done >= LEVERS.length,
    remaining: (c, lang) => {
      const a = Math.max(0, 1 - c.build.done)
      const l = Math.max(0, LEVERS.length - c.eco.done)
      const parts = lang === 'fr'
        ? [a && `${a} agent`, l && `${l} levier${l > 1 ? 's' : ''} de plus`]
        : [a && `${a} agent`, l && `${l} more levers`]
      return parts.filter(Boolean).join(lang === 'fr' ? ' et ' : ' and ') + '.'
    },
    fr: { title: "Compte ce que cela coûte", how: `Construire un agent, puis travailler les ${LEVERS.length} leviers de sobriété.`, awarded: "Vous savez ce que coûte un de vos agents à faire tourner, et quel levier déplace le plus ce chiffre." },
  },
  {
    id: 'half',
    title: 'Half the room',
    how: `Finish ${HALF} of the ${USE_CASE_COUNT} agents in the dojo.`,
    awarded: 'Half the room is awake because of you. You can now tell which shape a new problem is.',
    earned: (c) => c.build.done >= HALF,
    remaining: (c, lang) => {
      const n = Math.max(0, HALF - c.build.done)
      return lang === 'fr' ? `${n} agent${n > 1 ? 's' : ''} de plus, terminé${n > 1 ? 's' : ''}.` : `${n} more agents finished.`
    },
    fr: { title: "La moitié de la salle", how: `Terminer ${HALF} des ${USE_CASE_COUNT} agents du dojo.`, awarded: "La moitié de la salle est réveillée grâce à vous. Vous savez désormais dire de quelle forme est un problème nouveau." },
  },
  {
    // LE DERNIER · il demande LES TROIS cours en entier, et c'est le seul.
    // Un diplôme final qui ne demanderait qu'un cours ferait des deux autres
    // de la décoration.
    id: 'all',
    title: 'The whole dojo',
    how: 'Finish all three courses, entirely. The master does not hand this one out twice.',
    awarded: 'Every agent in this room is awake, every lesson read, every lever pulled. There is nothing left here.',
    earned: (c) => c.build.percent === 100 && c.academy.percent === 100 && c.eco.percent === 100,
    remaining: (c, lang) => {
      // L'UNITÉ VIENT DU COURS · elle porte déjà les deux langues, au
      // singulier comme au pluriel. Voir masterProgress.
      const left = (['build', 'academy', 'eco'] as const)
        .filter((k) => c[k].percent < 100)
        .map((k) => {
          const n = c[k].total - c[k].done
          const u = lang === 'fr' && c[k].unitFr ? c[k].unitFr! : c[k].unit
          return `${n} ${u[n === 1 ? 0 : 1]}`
        })
      return left.join(', ') + '.'
    },
    fr: { title: "Le dojo entier", how: "Terminer les trois cours, en entier. Le maître ne donne pas celui-ci deux fois.", awarded: "Chaque agent de cette salle est réveillé, chaque leçon lue, chaque levier tiré. Il ne reste rien ici." },
  },
]

export interface DiplomaState {
  earned: string[]
  next: Diploma | null
  /** ce qu'il reste pour le prochain · vide s'il n'y en a plus */
  toGo: string
}

export function diplomaFor(courses: CourseProgress[], lang: Lang = 'en'): DiplomaState {
  const by = Object.fromEntries(courses.map((c) => [c.id, c])) as Record<CourseProgress['id'], CourseProgress>
  const earned = DIPLOMAS.filter((d) => d.earned(by)).map((d) => d.id)
  const next = DIPLOMAS.find((d) => !d.earned(by)) ?? null
  return { earned, next: next ? diplomaIn(next, lang) : null, toGo: next ? next.remaining(by, lang) : '' }
}
