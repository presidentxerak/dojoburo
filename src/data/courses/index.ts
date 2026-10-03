// LES COURS, RÉUNIS · voir ./types. Un cours dont aucune partie n'est encore
// écrite n'a pas de cité, et il n'est pas publié (data/packs le filtre).
import type { Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { CoursePart } from './types'
import { CODE_APP_A } from './code-app-a'
import { CODE_APP_B } from './code-app-b'
import { LOVABLE } from './lovable'
import { LIVRE } from './livre'
import { STORYBOARD } from './storyboard'
import { MANGA } from './manga'
import { FLOWUX } from './flowux'
import { ARCHI } from './archi'
import { COMPTA } from './compta'
import { IMAGES } from './images'
import { LOGO } from './logo'
import { DESIGNSYS } from './designsys'
import { LOCALE } from './locale'
import { BUSINESS } from './business'
import { COPY } from './copy'
import { VEILLE } from './veille'

/** l'identifiant d'un cours · c'est aussi celui de son temple (/dojo/<id>)
 *  et celui de son achat */
// LES NOUVEAUX COURS · demandé : « enrichi nos formations en en créant des
// nouvelles très détaillées [...] comment créer un livre de A à Z avec l'IA,
// un storyboard pour le cinéma et la pub, une bande dessinée manga, un flow
// UX, une architecture logiciel, faire ça comptabilité de A à Z, créer des
// images de haute qualité [...], des logotypes et charte graphiques, un
// design system de A à Z pour Figma », et les usages joints (IA locale,
// business, copywriting, outils du moment).
export const COURSE_IDS = [
  'coder-une-app',
  'coder-avec-lovable',
  'ecrire-un-livre',
  'storyboard',
  'bd-manga',
  'flow-ux',
  'architecture-logicielle',
  'comptabilite',
  'images-ia',
  'logo-charte',
  'design-system-figma',
  'ia-locale',
  'business-ia',
  'copywriting',
  'veille-outils',
] as const
export type CourseId = (typeof COURSE_IDS)[number]

/** UN COURS N'EST PUBLIÉ QUE PRÊT · tant que son texte est en cours d'écriture,
 *  il n'a ni cité, ni temple, ni ligne sur /tarifs, et les gardes de contenu ne
 *  le lisent pas. On le passe à true quand toutes ses leçons sont relues. */
export const COURSE_READY: Record<CourseId, boolean> = {
  'coder-une-app': true,
  'coder-avec-lovable': true,
  'ecrire-un-livre': false,
  'storyboard': false,
  'bd-manga': false,
  'flow-ux': false,
  'architecture-logicielle': false,
  'comptabilite': false,
  'images-ia': false,
  'logo-charte': false,
  'design-system-figma': false,
  'ia-locale': false,
  'business-ia': false,
  'copywriting': false,
  'veille-outils': false,
}

const WRITTEN: Record<CourseId, CoursePart[]> = {
  'coder-une-app': [CODE_APP_A, CODE_APP_B],
  'coder-avec-lovable': [LOVABLE],
  'ecrire-un-livre': [LIVRE],
  'storyboard': [STORYBOARD],
  'bd-manga': [MANGA],
  'flow-ux': [FLOWUX],
  'architecture-logicielle': [ARCHI],
  'comptabilite': [COMPTA],
  'images-ia': [IMAGES],
  'logo-charte': [LOGO],
  'design-system-figma': [DESIGNSYS],
  'ia-locale': [LOCALE],
  'business-ia': [BUSINESS],
  'copywriting': [COPY],
  'veille-outils': [VEILLE],
}
/** LE MODE BROUILLON DES GARDES · `DOJO_COURSE_DRAFTS=1 node scripts/test-…`
 *  fait lire aux gardes de contenu les cours encore en rédaction. Il n'existe
 *  que sous Node : un navigateur n'a pas de process, donc rien n'y est publié. */
const DRAFTS = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.DOJO_COURSE_DRAFTS === '1'
const shown = (id: CourseId) => COURSE_READY[id] || DRAFTS
const PARTS = Object.fromEntries(COURSE_IDS.map((id) => [id, shown(id) ? WRITTEN[id] : []])) as Record<CourseId, CoursePart[]>
/** tout ce qui est écrit, publié ou non · lu par les gardes pour suivre la
 *  rédaction sans rien publier */
export const COURSE_DRAFTS = WRITTEN

/** les cités de chaque cours, dans l'ordre */
export const COURSE_CITIES = Object.fromEntries(COURSE_IDS.map((id) => [id, PARTS[id].flatMap((p) => p.modules)])) as Record<CourseId, Module[]>

export const COURSE_MODULES: Module[] = COURSE_IDS.flatMap((id) => COURSE_CITIES[id])

/** le cours d'une cité · c'est lui qu'il faut avoir acheté pour l'ouvrir */
export const COURSE_OF_CITY: Record<string, CourseId> = Object.fromEntries(
  COURSE_IDS.flatMap((id) => COURSE_CITIES[id].map((m) => [m.id, id])),
)

const ALL_PARTS = Object.values(PARTS).flat()
export const COURSE_ENRICH: Record<string, Enrichment> = Object.assign({}, ...ALL_PARTS.map((p) => p.enrich))
export const COURSE_DEEP: Record<string, Deepening> = Object.assign({}, ...ALL_PARTS.map((p) => p.deep))
