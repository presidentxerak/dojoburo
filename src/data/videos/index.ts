// LES VIDÉOS, RÉUNIES · un fichier par formation ou par groupe de formations,
// pour que plusieurs mains les cherchent en même temps (voir ./types).
import type { Video } from './types'
import { videoKey } from './types'
import { V_VEILLE_OUTILS } from './v-veille-outils'
import { V_COPYWRITING } from './v-copywriting'
import { V_BUSINESS_IA } from './v-business-ia'
import { V_IA_LOCALE } from './v-ia-locale'
import { V_DESIGN_SYSTEM_FIGMA } from './v-design-system-figma'
import { V_IMAGES_IA } from './v-images-ia'
import { V_COMPTABILITE } from './v-comptabilite'
import { V_LOGO_CHARTE } from './v-logo-charte'
import { V_ARCHITECTURE_LOGICIELLE } from './v-architecture-logicielle'
import { V_FLOW_UX } from './v-flow-ux'
import { V_BD_MANGA } from './v-bd-manga'
import { V_ECRIRE_UN_LIVRE } from './v-ecrire-un-livre'
import { V_STORYBOARD } from './v-storyboard'
import { V_PATH } from './v-path'
import { V_CODE } from './v-code'
import { V_LOVABLE_A } from './v-lovable-a'
import { V_TRADES_B } from './v-trades-b'
import { V_TRADES_C } from './v-trades-c'
import { V_TRADES_D } from './v-trades-d'
import { V_TRADES_E } from './v-trades-e'

const PARTS: Record<string, Video[]>[] = [V_VEILLE_OUTILS, V_COPYWRITING, V_BUSINESS_IA, V_IA_LOCALE, V_DESIGN_SYSTEM_FIGMA, V_IMAGES_IA, V_COMPTABILITE, V_LOGO_CHARTE, V_ARCHITECTURE_LOGICIELLE, V_FLOW_UX, V_BD_MANGA, V_ECRIRE_UN_LIVRE, V_STORYBOARD, V_PATH, V_CODE, V_LOVABLE_A, V_TRADES_B, V_TRADES_C, V_TRADES_D, V_TRADES_E]

export const VIDEOS: Record<string, Video[]> = Object.assign({}, ...PARTS)

/** Les vidéos d'une leçon · une liste vide quand aucune n'a été trouvée. */
export const videosFor = (moduleId: string, levelId: string): Video[] => VIDEOS[videoKey(moduleId, levelId)] ?? []
