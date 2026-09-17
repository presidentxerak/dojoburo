// CE QUE LE MAÎTRE VOIT · les trois cours, comptés à un seul endroit.
//
// Le centre de formation annonce trois cours. Il n'en comptait qu'un et demi :
// les agents construits étaient suivis sur /build, les leçons sur /academy, et
// la sobriété n'était suivie nulle part. Un cours dont personne ne sait où il
// en est n'est pas un cours, c'est une page.
//
// PIRE, LES DEUX MOITIÉS SE MÉLANGEAIENT. Les étapes d'un agent sont
// enregistrées dans le même magasin que les leçons, sous une piste `agent`, et
// `doneCount` additionnait tout. Vingt leçons au dénominateur, vingt leçons
// plus quarante-huit étapes au numérateur : l'académie affichait « 34 sur 20 »
// et une barre à 170 % dès qu'on finissait trois agents. Personne ne l'aurait
// vu avant un utilisateur, parce qu'il faut avoir fait les deux cours pour que
// ça se produise, et que nous testons les pages une par une.
//
// Donc ce fichier, et lui seul, sait compter. Chaque page lit le même objet et
// n'additionne plus rien elle-même.
import { LESSON_COUNT, TRACKS } from '../data/academy'
import { USE_CASES, USE_CASE_COUNT } from '../data/agentUseCases'
import { LEVERS } from '../data/frugality'
import { COURSE_PILLARS } from '../data/positioning'

/** La piste sous laquelle les étapes d'agent sont rangées · elle n'est PAS une
 *  piste de l'académie, et c'est de là que venait la confusion. */
export const AGENT_TRACK = 'agent'

/** …et celle des leviers de sobriété, pour la même raison. */
export const LEVER_TRACK = 'lever'

/** Les vraies pistes de l'académie · lues depuis le programme, jamais listées
 *  à la main. Une piste ajoutée un jour se compterait toute seule. */
const LESSON_TRACKS = new Set(TRACKS.map((t) => t.slug))

export interface CourseProgress {
  id: (typeof COURSE_PILLARS)[number]
  /** ce qui est fait */
  done: number
  /** ce qu'il y a à faire */
  total: number
  /** 0 à 100, borné · une barre au dessus de cent dit qu'on compte mal */
  percent: number
  /** l'unité, au singulier et au pluriel · « 3 agents sur 12 » */
  unit: [string, string]
}

/** La lecture du maître · elle prend la liste brute des clés terminées, et
 *  rend les trois cours. Elle ne touche pas à React : la même fonction sert à
 *  l'affichage et à la garde, qui tourne dans node. */
export function readProgress(done: readonly string[]): CourseProgress[] {
  const set = new Set(done)
  const has = (t: string, l: string) => set.has(`${t}/${l}`)

  // BUILD · un agent compte quand son parcours est fini de bout en bout. Des
  // étapes éparses ne valent rien ici, exactement comme pour les diplômes.
  const agents = USE_CASES.filter((u) => u.steps.every((_, i) => has(AGENT_TRACK, `${u.id}/${i}`))).length

  // ACADEMY · les leçons, et rien que les leçons. Le filtre sur les vraies
  // pistes est ce qui empêche une étape d'agent de se faire passer pour une
  // leçon, ce qu'elle faisait.
  const lessons = [...set].filter((k) => LESSON_TRACKS.has(k.slice(0, k.indexOf('/')))).length

  // ECO · les leviers qu'on a appliqués. C'est la seule chose vérifiable de ce
  // cours : le calculateur ne se « termine » pas, on y entre ses chiffres.
  const levers = LEVERS.filter((l) => has(LEVER_TRACK, l.id)).length

  const pc = (d: number, t: number) => (t > 0 ? Math.min(100, Math.round((d / t) * 100)) : 0)
  return [
    { id: 'build', done: agents, total: USE_CASE_COUNT, percent: pc(agents, USE_CASE_COUNT), unit: ['agent', 'agents'] },
    { id: 'academy', done: lessons, total: LESSON_COUNT, percent: pc(lessons, LESSON_COUNT), unit: ['lesson', 'lessons'] },
    { id: 'eco', done: levers, total: LEVERS.length, percent: pc(levers, LEVERS.length), unit: ['lever', 'levers'] },
  ]
}

/** Ce que le maître dit de l'ensemble · une phrase, et une seule.
 *
 *  Elle ne félicite pas et ne compte pas les points : elle dit ce qui vient
 *  ensuite. Un professeur qui commente ce qui est fait est un tableau de bord ;
 *  celui-ci sert à savoir où aller. */
export function masterAdvice(courses: CourseProgress[]): string {
  const [build, academy, eco] = courses
  if (build.done === 0 && academy.done === 0) {
    return 'Start in the dojo. Pick one agent and take it all the way through, then the rest will make sense.'
  }
  if (build.done === 0) {
    return 'You have read, and that is the easy half. Pick an agent in the dojo and build one end to end.'
  }
  if (academy.done === 0) {
    return 'You have built one. Now learn why the instruction inside it works, or the next one will be luck.'
  }
  if (eco.done === 0) {
    return 'Your agents work. Nobody has asked yet what they cost to run, which is the third course.'
  }
  if (courses.every((c) => c.percent === 100)) {
    return 'There is nothing left here that you have not done. Go and build the one this room did not cover.'
  }
  // Le cours le plus en retard, nommé · c'est plus utile qu'une moyenne, qui
  // ne dit jamais quoi faire.
  const behind = [...courses].sort((a, b) => a.percent - b.percent)[0]
  return `Your weakest course is ${LABEL[behind.id]}, at ${behind.percent} per cent. That is where the next hour pays.`
}

const LABEL: Record<CourseProgress['id'], string> = {
  build: 'building an agent',
  academy: 'prompt engineering',
  eco: 'token frugality',
}
