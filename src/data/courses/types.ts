// LES COURS VENDUS À PART · demandé : « un grand cours à 99 € : comment coder
// une app [...] en apprenant Claude Code, Vercel, Supabase, le terminal et
// GitHub [...] Un cours comment coder une app avec Lovable à 49 € ».
//
// Un cours est une formation comme les autres (des cités, des cours, leur
// approfondissement et leur couche pédagogique), mais il s'achète seul et
// n'ouvre que lui. Chaque cours est écrit en plusieurs parties, une par
// fichier, pour que plusieurs mains écrivent en même temps sans se gêner.
import type { Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'

export interface CoursePart {
  /** ses cités, dans l'ordre du cours · chacune porte track: 'course' */
  modules: Module[]
  /** indexé par enrichKey(cité, dojo) */
  enrich: Record<string, Enrichment>
  /** indexé par deepKey(cité, dojo) */
  deep: Record<string, Deepening>
}

export const EMPTY_PART: CoursePart = { modules: [], enrich: {}, deep: {} }
