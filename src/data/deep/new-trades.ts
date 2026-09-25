// La couche pédagogique des nouvelles formations métier · chaque fichier de
// data/metiers porte la sienne, réunie ici.
import type { Deepening } from './types'
import { NEW_TRADE_PACKS } from '../metiers'

export const DEEP_NEW_TRADES: Record<string, Deepening> =
  Object.assign({}, ...NEW_TRADE_PACKS.map((p) => p.deep))
