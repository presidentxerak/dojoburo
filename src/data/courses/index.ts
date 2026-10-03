// LES COURS, RÉUNIS · voir ./types. Un cours dont aucune partie n'est encore
// écrite n'a pas de cité, et il n'est pas publié (data/packs le filtre).
import type { Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { CoursePart } from './types'
import { CODE_APP_A } from './code-app-a'
import { CODE_APP_B } from './code-app-b'
import { LOVABLE } from './lovable'
import { LIVRE_A } from './livre-a'
import { LIVRE_B } from './livre-b'
import { STORYBOARD_A } from './storyboard-a'
import { STORYBOARD_B } from './storyboard-b'
import { MANGA_A } from './manga-a'
import { MANGA_B } from './manga-b'
import { FLOWUX_A } from './flowux-a'
import { FLOWUX_B } from './flowux-b'
import { ARCHI_A } from './archi-a'
import { ARCHI_B } from './archi-b'
import { COMPTA_A } from './compta-a'
import { COMPTA_B } from './compta-b'
import { IMAGES_A } from './images-a'
import { IMAGES_B } from './images-b'
import { LOGO_A } from './logo-a'
import { LOGO_B } from './logo-b'
import { DESIGNSYS_A } from './designsys-a'
import { DESIGNSYS_B } from './designsys-b'
import { LOCALE_A } from './locale-a'
import { LOCALE_B } from './locale-b'
import { BUSINESS_A } from './business-a'
import { BUSINESS_B } from './business-b'
import { COPY_A } from './copy-a'
import { COPY_B } from './copy-b'
import { VEILLE_A } from './veille-a'
import { VEILLE_B } from './veille-b'

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
  'ecrire-un-livre': true,
  'storyboard': true,
  'bd-manga': true,
  'flow-ux': true,
  'architecture-logicielle': true,
  'comptabilite': false,
  'images-ia': false,
  'logo-charte': true,
  'design-system-figma': false,
  'ia-locale': false,
  'business-ia': false,
  'copywriting': false,
  'veille-outils': false,
}

const WRITTEN: Record<CourseId, CoursePart[]> = {
  'coder-une-app': [CODE_APP_A, CODE_APP_B],
  'coder-avec-lovable': [LOVABLE],
  'ecrire-un-livre': [LIVRE_A, LIVRE_B],
  'storyboard': [STORYBOARD_A, STORYBOARD_B],
  'bd-manga': [MANGA_A, MANGA_B],
  'flow-ux': [FLOWUX_A, FLOWUX_B],
  'architecture-logicielle': [ARCHI_A, ARCHI_B],
  'comptabilite': [COMPTA_A, COMPTA_B],
  'images-ia': [IMAGES_A, IMAGES_B],
  'logo-charte': [LOGO_A, LOGO_B],
  'design-system-figma': [DESIGNSYS_A, DESIGNSYS_B],
  'ia-locale': [LOCALE_A, LOCALE_B],
  'business-ia': [BUSINESS_A, BUSINESS_B],
  'copywriting': [COPY_A, COPY_B],
  'veille-outils': [VEILLE_A, VEILLE_B],
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
