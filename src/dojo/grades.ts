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
import type { Lang } from '../i18n/lang'
import { useCaseIn } from '../data/agentUseCases'

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
  /** la même ceinture en français · l'identifiant et la couleur ne changent
   *  pas : l'un est une clé de progression, l'autre un ruban. */
  fr?: { title: string; means: string }
}

/** La ceinture dans la langue demandée. */
export const gradeIn = (g: Grade, lang: Lang): Grade =>
  (lang === 'fr' && g.fr ? { ...g, ...g.fr } : g)

export const GRADES: Grade[] = [
  {
    id: 'white',
    title: 'White belt',
    tint: '#c8ccd4',
    agents: 0,
    means: 'You walked in. Nothing is expected of you yet, and nothing is claimed about you.',
    fr: { title: "Ceinture blanche", means: "Vous avez franchi le seuil. Rien n'est encore attendu de vous, et rien n'est affirmé à votre sujet." }
  },
  {
    id: 'yellow',
    title: 'Yellow belt',
    tint: '#f5c518',
    agents: 1,
    means: 'You have taken one shape of problem from a blank page to a file. You know what the work is.',
    fr: { title: "Ceinture jaune", means: "Vous avez conduit un type de problème de la page blanche jusqu'à un fichier. Vous savez en quoi consiste le travail." }
  },
  {
    id: 'green',
    title: 'Green belt',
    tint: '#2fa84f',
    agents: 3,
    means: 'Three different shapes. You have seen three ways an agent fails, which is three more than most.',
    fr: { title: "Ceinture verte", means: "Trois types de problème différents. Vous avez observé trois façons dont un agent échoue, soit trois de plus que la plupart des gens." }
  },
  {
    id: 'blue',
    title: 'Blue belt',
    tint: '#2f6bff',
    agents: 6,
    means: 'Half the room. Handed a new problem, you can say which shape it is before writing anything.',
    fr: { title: "Ceinture bleue", means: "La moitié de la salle. Face à un problème nouveau, vous savez en identifier le type avant d'écrire quoi que ce soit." }
  },
  {
    id: 'brown',
    title: 'Brown belt',
    tint: '#8a5a2b',
    agents: 9,
    means: 'Nine. You are past the easy ones, and the three you have left are the three that are genuinely hard.',
    fr: { title: "Ceinture marron", means: "Neuf agents. Vous avez franchi les plus accessibles ; les trois restants sont les plus exigeants." }
  },
  {
    id: 'black',
    title: 'Black belt',
    tint: '#1c1c22',
    agents: USE_CASE_COUNT,
    means: 'Every agent in this room is awake because of you. There is nothing left here you have not built.',
    fr: { title: "Ceinture noire", means: "Chaque agent de cette salle a été éveillé grâce à vous. Il ne reste ici rien que vous n'ayez construit." }
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
  /** le même insigne en français */
  fr?: { title: string; how: string }
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
    fr: { title: "Premier geste", how: "Vous avez terminé la première étape d'un parcours. La page blanche est désormais derrière vous." }
  },
  {
    id: 'one-agent',
    title: 'One agent, whole',
    how: 'You took one agent from a blank page to a file, without skipping a step.',
    icon: 'diamond',
    earned: (_, built) => built.length >= 1,
    fr: { title: "Un agent, entier", how: "Vous avez conduit un agent de la page blanche jusqu'à un fichier, sans omettre d'étape." }
  },
  {
    id: 'three-shapes',
    title: 'Three shapes',
    how: 'Three different agents, finished. Different shapes, not three attempts at one.',
    icon: 'triangle',
    earned: (_, built) => built.length >= 3,
    fr: { title: "Trois formes", how: "Trois agents différents, terminés. Trois types de problème distincts, et non trois tentatives sur le même." }
  },
  {
    id: 'reader',
    title: 'Reads before writing',
    how: `Half the ${LESSON_COUNT} prompt engineering lessons, finished.`,
    icon: 'pen',
    earned: (c) => c.academy.done >= Math.ceil(LESSON_COUNT / 2),
    fr: { title: "Lire avant d'écrire", how: `La moitié des ${LESSON_COUNT} leçons de prompt engineering, terminées.` }
  },
  {
    id: 'counter',
    title: 'Counts the cost',
    how: `All ${LEVERS.length} frugality levers, applied where you work.`,
    icon: 'delta',
    earned: (c) => c.eco.done >= LEVERS.length,
    fr: { title: "Mesurer le coût", how: `Les ${LEVERS.length} leviers de sobriété, appliqués à votre contexte de travail.` }
  },
  {
    id: 'half-room',
    title: 'Half the room awake',
    how: `${Math.ceil(USE_CASE_COUNT / 2)} of the ${USE_CASE_COUNT} agents, finished end to end.`,
    icon: 'halfRight',
    earned: (_, built) => built.length >= Math.ceil(USE_CASE_COUNT / 2),
    fr: { title: "La moitié de la salle éveillée", how: `${Math.ceil(USE_CASE_COUNT / 2)} des ${USE_CASE_COUNT} agents, terminés d'un bout à l'autre.` }
  },
  {
    id: 'whole-dojo',
    title: 'The whole dojo',
    how: 'Every agent in the room, every lesson, every lever. Nothing left.',
    icon: 'star',
    earned: (c, built) => built.length >= USE_CASE_COUNT && c.academy.percent === 100 && c.eco.percent === 100,
    fr: { title: "Le dojo entier", how: "Chaque agent de la salle, chaque leçon, chaque levier. Le parcours est achevé." }
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
  // LE NOM ET LA FORME VIENNENT DU CAS D'USAGE, donc sa traduction aussi ·
  // les réécrire ici aurait donné douze noms à tenir à jour deux fois.
  fr: {
    title: useCaseIn(u, 'fr').name,
    how: `Vous l'avez construit : ${useCaseIn(u, 'fr').shape.toLowerCase()}.`,
  },
}))

/** L'insigne dans la langue demandée · le même appel sert aux insignes
 *  généraux et à ceux des agents, qui n'ont pas le même type mais portent le
 *  même couple de champs. */
export const badgeIn = <T extends { title: string; how: string; fr?: { title: string; how: string } }>(b: T, lang: Lang): T =>
  (lang === 'fr' && b.fr ? { ...b, ...b.fr } : b)

export function badgesFor(
  courses: CourseProgress[],
  built: string[],
): { earned: string[]; next: Badge | null } {
  const by = Object.fromEntries(courses.map((c) => [c.id, c])) as Record<CourseProgress['id'], CourseProgress>
  const earned = BADGES.filter((b) => b.earned(by, built)).map((b) => b.id)
  const next = BADGES.find((b) => !b.earned(by, built)) ?? null
  return { earned: [...earned, ...built.map((id) => `agent-${id}`)], next }
}
