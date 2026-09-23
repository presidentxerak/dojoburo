// LE PROFIL D'APPRENTISSAGE · ce que l'élève a fait, en une seule lecture.
//
// L'app savait tout et n'en disait rien. La progression des trois cours vivait
// dans masterProgress, les ceintures dans grades, les diplômes dans diplomas,
// et rien ne rassemblait les trois : le menu du compte proposait « My
// companies » et « Your company », c'est à dire l'ancien produit, et le centre
// de notifications annonçait des agents en train de travailler pour vous, ce
// que le bac à sable ne fait plus depuis le repositionnement.
//
// Ce fichier ne calcule RIEN de neuf. Il assemble ce que les trois modules
// savent déjà, et c'est délibéré : un quatrième endroit qui recompte des
// agents terminés serait un quatrième endroit qui peut diverger, et on a déjà
// vu ce que ça donne (l'académie affichait « 34 sur 20 »).
//
// CE QU'IL AJOUTE, en revanche, c'est le JOURNAL : la liste de ce qui a été
// gagné, dans l'ordre, pour que le centre de notifications ait quelque chose
// de vrai à montrer. Un centre de notifications qui annonce du travail
// imaginaire vaut moins qu'un centre vide.
import { USE_CASES, USE_CASE_COUNT, useCaseIn } from '../data/agentUseCases'
import { readProgress, masterAdvice, AGENT_TRACK, type CourseProgress } from './masterProgress'
import { gradeFor, gradeIn, badgeIn, badgesFor, BADGES, AGENT_BADGES, type Grade } from './grades'
import type { Lang } from '../i18n/lang'
import { DIPLOMAS, diplomaFor, diplomaIn, type Diploma } from './diplomas'
import type { IconName } from '../data/icons'

/** Une chose gagnée · ce que le journal montre. */
export interface Earned {
  id: string
  kind: 'badge' | 'belt' | 'diploma'
  title: string
  says: string
  icon: IconName
}

export interface LearningProfile {
  courses: CourseProgress[]
  /** les agents TERMINÉS de bout en bout, par identifiant */
  built: string[]
  grade: Grade
  nextGrade: Grade | null
  toNextGrade: number
  /** tout ce qui est acquis, prêt à afficher */
  earned: Earned[]
  /** le prochain diplôme, et ce qu'il reste */
  nextDiploma: Diploma | null
  toGo: string
  /** la phrase du maître · où aller ensuite */
  advice: string
  /** l'étape suivante à faire, s'il y en a une · l'agent et son numéro */
  nextStep: { useCase: string; name: string; index: number; title: string } | null
  /** a-t-on commencé quoi que ce soit ? */
  started: boolean
}

// LA LANGUE TRAVERSE TOUTE LA LECTURE · le profil porte des phrases (le
// nom d'une ceinture, ce qu'un insigne dit, le conseil du maître), donc
// les traduire après coup demanderait de les retrouver une par une dans
// l'objet rendu. On les lit dans la bonne langue dès la source.
export function readLearning(done: readonly string[], lang: Lang = 'en'): LearningProfile {
  const set = new Set(done)
  const has = (t: string, l: string) => set.has(`${t}/${l}`)
  const courses = readProgress(done)
  const built = USE_CASES.filter((u) => u.steps.every((_, i) => has(AGENT_TRACK, `${u.id}/${i}`))).map((u) => u.id)
  const g = gradeFor(built.length)
  const badges = badgesFor(courses, built)
  const dip = diplomaFor(courses, lang)

  // LE JOURNAL · on ne stocke aucune date. Le magasin de progression ne garde
  // qu'un ensemble de clés terminées, et inventer un horodatage pour faire
  // joli serait exactement le genre de détail faux qui décrédibilise tout le
  // reste. L'ordre est celui de la difficulté, ce qui se lit très bien.
  const byId = Object.fromEntries([...BADGES, ...AGENT_BADGES].map((b) => [b.id, b]))
  const earned: Earned[] = [
    ...badges.earned
      .map((id) => byId[id])
      .filter(Boolean)
      .map((b0) => badgeIn(b0, lang))
      .map((b) => ({ id: b.id, kind: 'badge' as const, title: b.title, says: b.how, icon: b.icon })),
    ...(built.length > 0
      ? [{
          id: `belt-${g.now.id}`, kind: 'belt' as const,
          title: gradeIn(g.now, lang).title, says: gradeIn(g.now, lang).means, icon: 'target' as IconName,
        }]
      : []),
    // LE TITRE DU DIPLÔME, PAS SON IDENTIFIANT · la ligne posait `title: id`,
    // donc le profil affichait « first » et « literate » à la place de
    // « Premier agent » et « Bâtisseur qui lit ». L'identifiant est une clé de
    // progression, jamais un libellé.
    ...dip.earned.map((id) => {
      const d = DIPLOMAS.find((x) => x.id === id)
      return {
        id: `dip-${id}`, kind: 'diploma' as const,
        title: d ? diplomaIn(d, lang).title : id,
        says: d ? diplomaIn(d, lang).awarded
          : lang === 'fr' ? 'Décerné par le maître.' : 'Awarded by the master.',
        icon: 'star' as IconName,
      }
    }),
  ]

  // LA PROCHAINE ÉTAPE · la première non cochée du premier agent commencé,
  // sinon la première du premier agent tout court. « Reprendre où j'en étais »
  // est la seule question qu'on se pose en rouvrant une app de cours.
  let nextStep: LearningProfile['nextStep'] = null
  const started = USE_CASES.find((u) => u.steps.some((_, i) => has(AGENT_TRACK, `${u.id}/${i}`)) && !built.includes(u.id))
  const target = started ?? USE_CASES.find((u) => !built.includes(u.id))
  if (target) {
    const i = target.steps.findIndex((_, n) => !has(AGENT_TRACK, `${target.id}/${n}`))
    // LE NOM ET LE TITRE D'ÉTAPE VIENNENT DU CAS D'USAGE dans la langue lue ·
    // « Étape 2 de Le chercheur » et non « Étape 2 de The researcher ».
    const u = useCaseIn(target, lang)
    if (i >= 0) nextStep = { useCase: target.id, name: u.name, index: i, title: u.steps[i].title }
  }

  return {
    courses,
    built,
    grade: gradeIn(g.now, lang),
    nextGrade: g.next ? gradeIn(g.next, lang) : null,
    toNextGrade: g.toGo,
    earned,
    nextDiploma: dip.next,
    toGo: dip.toGo,
    advice: masterAdvice(courses, lang),
    nextStep,
    started: done.length > 0,
  }
}

export { USE_CASE_COUNT }
