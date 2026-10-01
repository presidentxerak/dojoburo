// LES COURS, RÉUNIS · voir ./types. Un cours dont aucune partie n'est encore
// écrite n'a pas de cité, et il n'est pas publié (data/packs le filtre).
import type { Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { CoursePart } from './types'
import { CODE_APP_A } from './code-app-a'
import { CODE_APP_B } from './code-app-b'
import { LOVABLE } from './lovable'

/** l'identifiant d'un cours · c'est aussi celui de son temple (/dojo/<id>)
 *  et celui de son achat */
export type CourseId = 'coder-une-app' | 'coder-avec-lovable'
export const COURSE_IDS: CourseId[] = ['coder-une-app', 'coder-avec-lovable']

const PARTS: Record<CourseId, CoursePart[]> = {
  'coder-une-app': [CODE_APP_A, CODE_APP_B],
  'coder-avec-lovable': [LOVABLE],
}

/** les cités de chaque cours, dans l'ordre */
export const COURSE_CITIES: Record<CourseId, Module[]> = {
  'coder-une-app': PARTS['coder-une-app'].flatMap((p) => p.modules),
  'coder-avec-lovable': PARTS['coder-avec-lovable'].flatMap((p) => p.modules),
}

export const COURSE_MODULES: Module[] = COURSE_IDS.flatMap((id) => COURSE_CITIES[id])

/** le cours d'une cité · c'est lui qu'il faut avoir acheté pour l'ouvrir */
export const COURSE_OF_CITY: Record<string, CourseId> = Object.fromEntries(
  COURSE_IDS.flatMap((id) => COURSE_CITIES[id].map((m) => [m.id, id])),
)

const ALL_PARTS = Object.values(PARTS).flat()
export const COURSE_ENRICH: Record<string, Enrichment> = Object.assign({}, ...ALL_PARTS.map((p) => p.enrich))
export const COURSE_DEEP: Record<string, Deepening> = Object.assign({}, ...ALL_PARTS.map((p) => p.deep))
