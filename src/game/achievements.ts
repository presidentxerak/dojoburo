// LES SUCCÈS ET LES POINTS · demandé : « Améliore la progression ajoute des
// achievements avec acquisition de points entre chaque partie de la formation
// avec le maître qui félicite et offre les points : dynamise le flow avec des
// FX de particules et des animations ».
//
// DEUX SOURCES DE POINTS, ajoutées à l'XP des leçons (game/progress) :
//   · CHAQUE PARTIE D'UNE LEÇON TERMINÉE · quand l'élève passe d'une partie à
//     la suivante, la précédente rapporte PART_POINTS, une seule fois : la
//     relire ne rapporte rien de plus, ce qui garde les points honnêtes ;
//   · LES SUCCÈS · des paliers (première partie, dix parties...) et des
//     exploits (une mission entièrement cochée, un quiz sans faute), chacun
//     avec ses points, débloqués une fois.
//
// Gardé dans ce navigateur, comme la progression avant connexion. Ce qui est
// gagné ne se perd pas : aucune fonction ne retire de points.
import { useSyncExternalStore } from 'react'
import { B, type Bi } from '../data/bilingual'

const KEY = 'dojo.feats'

/** Les points d'une partie de leçon terminée. */
export const PART_POINTS = 10

interface State {
  /** les parties terminées · « formation/leçon/partie » */
  parts: string[]
  /** les succès débloqués · leurs identifiants */
  feats: string[]
}

export interface Feat {
  id: string
  title: Bi
  body: Bi
  points: number
  /** un palier se débloque seul quand le compte de parties l'atteint */
  parts?: number
}

export const FEATS: Feat[] = [
  { id: 'first-part', parts: 1, points: 20, title: B('First step', 'Premier pas'), body: B('You finished the first part of a lesson.', 'Vous avez terminé votre première partie de leçon.') },
  { id: 'parts-10', parts: 10, points: 30, title: B('Steady reader', 'Lecteur assidu'), body: B('Ten parts of lessons finished.', 'Dix parties de leçons terminées.') },
  { id: 'parts-50', parts: 50, points: 80, title: B('Scholar', 'Érudit'), body: B('Fifty parts of lessons finished.', 'Cinquante parties de leçons terminées.') },
  { id: 'parts-150', parts: 150, points: 150, title: B('Sage of the dojo', 'Sage du dojo'), body: B('A hundred and fifty parts finished.', 'Cent cinquante parties terminées.') },
  { id: 'mission', points: 25, title: B('Mission accomplished', 'Mission accomplie'), body: B('Every objective of a mission ticked.', "Tous les objectifs d'une mission cochés.") },
  { id: 'flawless', points: 40, title: B('Flawless', 'Sans faute'), body: B('Every quiz question of a lesson right.', "Toutes les questions du quiz d'une leçon justes.") },
  { id: 'three-dojos', points: 30, title: B('Three dojos', 'Trois dojos'), body: B('Three lessons completed.', 'Trois leçons terminées.') },
]

const FEAT_BY_ID = Object.fromEntries(FEATS.map((f) => [f.id, f])) as Record<string, Feat>

const EMPTY: State = { parts: [], feats: [] }

function load(): State {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || 'null')
    if (!v || typeof v !== 'object') return EMPTY
    return {
      parts: Array.isArray(v.parts) ? v.parts.filter((x: unknown) => typeof x === 'string') : [],
      feats: Array.isArray(v.feats) ? v.feats.filter((x: unknown) => typeof x === 'string' && x in FEAT_BY_ID) : [],
    }
  } catch {
    return EMPTY
  }
}

let cache: State = typeof localStorage === 'undefined' ? EMPTY : load()
const subs = new Set<() => void>()

function save(next: State) {
  cache = next
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* mode privé */ }
  subs.forEach((f) => f())
}

/** Les points de cet état · les parties et les succès. Pur, testable. */
export function pointsOf(s: State): number {
  return s.parts.length * PART_POINTS + s.feats.reduce((n, id) => n + (FEAT_BY_ID[id]?.points ?? 0), 0)
}

/** Les paliers atteints et pas encore débloqués · pur, testable. */
export function tiersReached(s: State): Feat[] {
  return FEATS.filter((f) => f.parts !== undefined && s.parts.length >= f.parts && !s.feats.includes(f.id))
}

export interface Award { points: number; feats: Feat[] }

/** Une partie de leçon terminée · null si elle l'était déjà. Débloque au
 *  passage les paliers atteints. */
export function awardPart(key: string): Award | null {
  if (cache.parts.includes(key)) return null
  const next: State = { ...cache, parts: [...cache.parts, key] }
  const feats = tiersReached(next)
  save({ ...next, feats: [...next.feats, ...feats.map((f) => f.id)] })
  return { points: PART_POINTS, feats }
}

/** Un exploit · null s'il était déjà débloqué. */
export function unlockFeat(id: string): Feat | null {
  const f = FEAT_BY_ID[id]
  if (!f || cache.feats.includes(id)) return null
  save({ ...cache, feats: [...cache.feats, id] })
  return f
}

export function useFeats() {
  const s = useSyncExternalStore(
    (f) => { subs.add(f); return () => subs.delete(f) },
    () => cache,
    () => EMPTY,
  )
  return { points: pointsOf(s), parts: s.parts.length, unlocked: new Set(s.feats) }
}
