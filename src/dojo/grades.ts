// LES GRADES ET LES BADGES · ce que le maître remet, et quand.
//
// Un parcours sans récompense se lit comme une corvée, et une récompense
// donnée pour rien se lit comme un mensonge. Tout le monde a déjà vu une
// application distribuer un trophée pour avoir ouvert une page ; la deuxième
// fois, plus personne ne regarde.
//
// LA RÈGLE RETENUE tient en une phrase : on ne récompense que ce qui a été
// FABRIQUÉ. Chaque étape d'un parcours produit un objet qui n'existait pas
// avant (une règle, une consigne, un jeu de test), et c'est cet objet qui vaut
// un badge. Un grade, lui, ne s'obtient jamais par une étape : il demande des
// parcours entiers, ce qui est beaucoup plus dur et beaucoup plus rare.
//
// LES GRADES SONT DES CEINTURES, parce qu'on est dans un dojo et que c'est
// l'unique endroit où la métaphore dit quelque chose de vrai : une ceinture ne
// se donne pas au temps passé, elle se passe devant quelqu'un.
//
// CE QU'ILS NE SONT PAS, et la page le dit en toutes lettres : ni vendus, ni
// vérifiés par personne, ni opposables à un employeur. Le diplôme final porte
// la mention « certifié DojoBuro », ce qui veut dire exactement ce que ça dit :
// certifié par nous, et par personne d'autre.
import { USE_CASE_COUNT, USE_CASES } from '../data/agentUseCases'
import { LESSON_COUNT } from '../data/academy'
import { LEVERS } from '../data/frugality'
import type { IconName } from '../data/icons'
import type { CourseProgress } from './masterProgress'

/* ------------------------------------------------------------------ */
/* Les grades · les ceintures                                          */
/* ------------------------------------------------------------------ */

export interface Grade {
  id: string
  /** le nom de la ceinture */
  title: string
  /** la couleur du ruban · elle n'a aucune autre fonction */
  tint: string
  /** combien d'agents TERMINÉS il demande */
  agents: number
  /** ce qu'on sait faire une fois qu'on l'a · au présent, pas au futur */
  means: string
}

export const GRADES: Grade[] = [
  {
    id: 'white',
    title: 'White belt',
    tint: '#c8ccd4',
    agents: 0,
    means: 'You walked in. Nothing is expected of you yet, and nothing is claimed about you.',
  },
  {
    id: 'yellow',
    title: 'Yellow belt',
    tint: '#f5c518',
    agents: 1,
    means: 'You have taken one shape of problem from a blank page to a file. You know what the work is.',
  },
  {
    id: 'green',
    title: 'Green belt',
    tint: '#2fa84f',
    agents: 3,
    means: 'Three different shapes. You have seen three ways an agent fails, which is three more than most.',
  },
  {
    id: 'blue',
    title: 'Blue belt',
    tint: '#2f6bff',
    agents: 6,
    means: 'Half the room. Handed a new problem, you can say which shape it is before writing anything.',
  },
  {
    id: 'brown',
    title: 'Brown belt',
    tint: '#8a5a2b',
    agents: 9,
    means: 'Nine. You are past the easy ones, and the three you have left are the three that are genuinely hard.',
  },
  {
    id: 'black',
    title: 'Black belt',
    tint: '#1c1c22',
    agents: USE_CASE_COUNT,
    means: 'Every agent in this room is awake because of you. There is nothing left here you have not built.',
  },
]

/** La ceinture actuelle, et la suivante s'il y en a une. */
export function gradeFor(agentsBuilt: number): { now: Grade; next: Grade | null; toGo: number } {
  // On lit la liste À L'ENVERS · le grade courant est le plus haut dont le
  // seuil est atteint, pas le premier qu'on croise.
  const now = [...GRADES].reverse().find((g) => agentsBuilt >= g.agents) ?? GRADES[0]
  const next = GRADES.find((g) => g.agents > agentsBuilt) ?? null
  return { now, next, toGo: next ? next.agents - agentsBuilt : 0 }
}

/* ------------------------------------------------------------------ */
/* Les badges · un par étape franchie, et quelques-uns plus rares      */
/* ------------------------------------------------------------------ */

export interface Badge {
  id: string
  title: string
  /** ce qu'il faut avoir fait · une phrase, au passé */
  how: string
  icon: IconName
  /** obtenu ? · lu sur la progression, jamais stocké à part */
  earned: (c: Record<CourseProgress['id'], CourseProgress>, built: string[]) => boolean
}

/** Les badges qui ne dépendent PAS d'un agent en particulier. */
export const BADGES: Badge[] = [
  {
    id: 'first-step',
    title: 'First move',
    how: 'You finished the first step of any path. The blank page is behind you.',
    icon: 'play',
    earned: (c) => c.build.done > 0 || c.academy.done > 0 || c.eco.done > 0,
  },
  {
    id: 'one-agent',
    title: 'One agent, whole',
    how: 'You took one agent from a blank page to a file, without skipping a step.',
    icon: 'diamond',
    earned: (_, built) => built.length >= 1,
  },
  {
    id: 'three-shapes',
    title: 'Three shapes',
    how: 'Three different agents, finished. Different shapes, not three attempts at one.',
    icon: 'triangle',
    earned: (_, built) => built.length >= 3,
  },
  {
    id: 'reader',
    title: 'Reads before writing',
    how: `Half the ${LESSON_COUNT} prompt engineering lessons, finished.`,
    icon: 'pen',
    earned: (c) => c.academy.done >= Math.ceil(LESSON_COUNT / 2),
  },
  {
    id: 'counter',
    title: 'Counts the cost',
    how: `All ${LEVERS.length} frugality levers, applied where you work.`,
    icon: 'delta',
    earned: (c) => c.eco.done >= LEVERS.length,
  },
  {
    id: 'half-room',
    title: 'Half the room awake',
    how: `${Math.ceil(USE_CASE_COUNT / 2)} of the ${USE_CASE_COUNT} agents, finished end to end.`,
    icon: 'halfRight',
    earned: (_, built) => built.length >= Math.ceil(USE_CASE_COUNT / 2),
  },
  {
    id: 'whole-dojo',
    title: 'The whole dojo',
    how: 'Every agent in the room, every lesson, every lever. Nothing left.',
    icon: 'star',
    earned: (c, built) => built.length >= USE_CASE_COUNT && c.academy.percent === 100 && c.eco.percent === 100,
  },
]

/** Le badge d'un agent terminé · il y en a un par forme, dérivé du cas
 *  d'usage lui même. Les écrire un par un aurait donné douze entrées à tenir
 *  à jour pour rien : le nom de la forme EST le nom du badge. */
export const AGENT_BADGES = USE_CASES.map((u) => ({
  id: `agent-${u.id}`,
  title: u.name,
  how: `You built it: ${u.shape.toLowerCase()}.`,
  icon: 'check' as IconName,
}))

export function badgesFor(
  courses: CourseProgress[],
  built: string[],
): { earned: string[]; next: Badge | null } {
  const by = Object.fromEntries(courses.map((c) => [c.id, c])) as Record<CourseProgress['id'], CourseProgress>
  const earned = BADGES.filter((b) => b.earned(by, built)).map((b) => b.id)
  const next = BADGES.find((b) => !b.earned(by, built)) ?? null
  return { earned: [...earned, ...built.map((id) => `agent-${id}`)], next }
}
