// DOJOBURO · l'équipe telle qu'on l'affiche · noms, couleurs, personnages.
//
// Les douze spécialistes sont ceux du cours (data/agentUseCases), avec les
// personnages du casting (data/cast · MASTER_CAST) : un joueur qui a suivi la
// formation reconnaît son équipe, et chaque spécialiste a son espèce.
import { USE_CASE_BY_ID, useCaseIn } from '../data/agentUseCases'
import { masterCharacter } from '../data/cast'
import type { Lang } from '../i18n/lang'
import type { Skill } from './types'

/** le nom d'un spécialiste · « Le chercheur », « The researcher » */
export const staffName = (s: Skill, lang: Lang): string => {
  const u = USE_CASE_BY_ID[s]
  return u ? useCaseIn(u, lang).name : s
}

/** le nom court, pour les étiquettes et les pastilles · sans l'article */
export const staffShort = (s: Skill, lang: Lang): string =>
  staffName(s, lang).replace(/^(Le |La |L'|The )/i, '').replace(/^./, (c) => c.toUpperCase())

/** la couleur d'un spécialiste · celle de sa tenue dans le casting */
export const staffColor = (s: Skill): string => masterCharacter(s).outfit

export const staffCharacter = masterCharacter
