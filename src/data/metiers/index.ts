// LES NOUVELLES FORMATIONS MÉTIER · réunies. Un métier dont le fichier vaut
// encore null n'est pas publié. Voir ./types.
import type { TradePack } from './types'
import { METIER_DESIGNER } from './designer'
import { METIER_TEACHER } from './teacher'
import { METIER_STUDENT } from './student'
import { METIER_SCIENTIST } from './scientist'
import { METIER_DEVELOPER } from './developer'
import { METIER_RECRUITER } from './recruiter'
import { METIER_LAWYER } from './lawyer'
import { METIER_CONSULTANT } from './consultant'

export const NEW_TRADE_PACKS: TradePack[] = [
  METIER_DESIGNER,
  METIER_TEACHER,
  METIER_STUDENT,
  METIER_SCIENTIST,
  METIER_DEVELOPER,
  METIER_RECRUITER,
  METIER_LAWYER,
  METIER_CONSULTANT,
].filter((p): p is TradePack => p !== null)
