// UNE FORMATION MÉTIER COMPLÈTE, DANS UN SEUL FICHIER · le métier, ses trois
// cités et leurs neuf dojos, l'approfondissement de chaque dojo (data/enrich)
// et sa couche pédagogique (data/deep). Un fichier par métier, pour que
// plusieurs mains écrivent en même temps sans se gêner.
import type { Module } from '../curriculum'
import type { Trade } from '../trades'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'

export interface TradePack {
  trade: Trade
  /** les trois cités du métier, dans l'ordre de trade.cities */
  modules: Module[]
  /** indexé par enrichKey(cité, dojo) */
  enrich: Record<string, Enrichment>
  /** indexé par deepKey(cité, dojo) */
  deep: Record<string, Deepening>
}
