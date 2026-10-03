// LES VIDÉOS, RÉUNIES · un fichier par formation ou par groupe de formations,
// pour que plusieurs mains les cherchent en même temps (voir ./types).
import type { Video } from './types'
import { videoKey } from './types'
import { V_PATH } from './v-path'
import { V_CODE } from './v-code'
import { V_LOVABLE_A } from './v-lovable-a'
import { V_TRADES_B } from './v-trades-b'
import { V_TRADES_C } from './v-trades-c'
import { V_TRADES_D } from './v-trades-d'
import { V_TRADES_E } from './v-trades-e'

const PARTS: Record<string, Video[]>[] = [V_PATH, V_CODE, V_LOVABLE_A, V_TRADES_B, V_TRADES_C, V_TRADES_D, V_TRADES_E]

export const VIDEOS: Record<string, Video[]> = Object.assign({}, ...PARTS)

/** Les vidéos d'une leçon · une liste vide quand aucune n'a été trouvée. */
export const videosFor = (moduleId: string, levelId: string): Video[] => VIDEOS[videoKey(moduleId, levelId)] ?? []
