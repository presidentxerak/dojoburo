// Tous les approfondissements, réunis · voir ./types.
import type { Enrichment } from './types'
import { enrichKey } from './types'
import { ENRICH_PATH_A } from './path-a'
import { ENRICH_PATH_B } from './path-b'
import { ENRICH_PATH_C } from './path-c'
import { ENRICH_TRADES_A } from './trades-a'
import { ENRICH_TRADES_B } from './trades-b'
import { ENRICH_TRADES_C } from './trades-c'
import { NEW_TRADE_PACKS } from '../metiers'

export type { Enrichment }
export { enrichKey }

export const ENRICH: Record<string, Enrichment> = {
  ...ENRICH_PATH_A, ...ENRICH_PATH_B, ...ENRICH_PATH_C,
  ...ENRICH_TRADES_A, ...ENRICH_TRADES_B, ...ENRICH_TRADES_C,
  // les nouveaux métiers portent le leur, voir data/metiers
  ...Object.assign({}, ...NEW_TRADE_PACKS.map((p) => p.enrich)),
}

/** L'approfondissement d'un dojo, ou rien · un dojo sans le sien s'affiche
 *  quand même, avec son squelette. scripts/test-enrich empêche que ça arrive
 *  en production. */
export const enrichmentOf = (moduleId: string, levelId: string): Enrichment | null =>
  ENRICH[enrichKey(moduleId, levelId)] ?? null
