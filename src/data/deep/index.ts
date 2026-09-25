// Tous les approfondissements pédagogiques, réunis · voir ./types.
//
// UN FICHIER PAR FORMATION · chacun exporte un objet indexé par deepKey. Un
// fichier encore vide exporte {} : le dojo s'affiche alors sans cette couche,
// et scripts/test-deep refuse de laisser partir cela en production.
import type { Deepening } from './types'
import { deepKey } from './types'
import { DEEP_PATH_A } from './path-a'
import { DEEP_PATH_B } from './path-b'
import { DEEP_PATH_C } from './path-c'
import { DEEP_TRADES_A } from './trades-a'
import { DEEP_TRADES_B } from './trades-b'
import { DEEP_TRADES_C } from './trades-c'
import { DEEP_NEW_TRADES } from './new-trades'

export type { Deepening }
export { deepKey }

export const DEEP: Record<string, Deepening> = {
  ...DEEP_PATH_A, ...DEEP_PATH_B, ...DEEP_PATH_C,
  ...DEEP_TRADES_A, ...DEEP_TRADES_B, ...DEEP_TRADES_C,
  ...DEEP_NEW_TRADES,
}

export const deepeningOf = (moduleId: string, levelId: string): Deepening | null =>
  DEEP[deepKey(moduleId, levelId)] ?? null
