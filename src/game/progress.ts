// LA PROGRESSION DU DISCIPLE · une vue sur le magasin, jamais un second magasin.
//
// CE QU'ON NE REFAIT PAS. Le produit a déjà eu deux compteurs qui ne parlaient
// pas de la même chose : l'académie annonçait « 34 sur 20 » et une barre à
// 170 % à quelqu'un qui avait suivi deux cours, parce que les étapes d'agent
// tombaient dans le même sac que les leçons. La correction, à l'époque, a été
// de désigner UN endroit qui sait compter.
//
// Ce fichier n'est donc pas un magasin. C'est une lecture du même magasin, avec
// les questions que le jeu pose : cette cité est-elle finie, quel dojo vient
// ensuite, combien de badges. Les écritures passent par les mêmes fonctions que
// le reste de l'application.
//
// LA CLÉ EST `cité/dojo`, ce qui est exactement la forme `piste/leçon` déjà
// employée. Aucune migration : ce qui a été fait reste fait.
import { useProgress, markDone, clearDone, recordAnswer, key } from '../academy/progress'
import {
  ALL_MODULES, PATH_MODULES, DISCOVERY_MODULE, MODULE_BY_ID,
  type Module, type Level,
} from '../data/curriculum'
import { citiesOfTrade } from '../data/trades'
import { xpOf } from '../data/packs'
import { useAccess } from './access'

export { markDone, clearDone, recordAnswer, key }

export interface CityState {
  module: Module
  done: number
  total: number
  percent: number
  /** le premier dojo pas encore fait · null quand la cité est finie */
  next: Level | null
  finished: boolean
}

/** Ce que le jeu sait du joueur. Une seule lecture, tous les écrans.
 *
 *  CE QUI EST COMPTÉ EST CE QUI VOUS CONCERNE. Le programme contient six
 *  formations métier ; cinq d'entre elles n'ont rien à voir avec vous. Les
 *  compter dans vos badges donnerait une vitrine de cent cases dont on ne
 *  pourrait jamais remplir plus d'un tiers, et un « prochain dojo » qui
 *  partirait un jour dans le métier de quelqu'un d'autre. La portée est donc :
 *  la semaine, le parcours, et le métier que vous travaillez. */
export function useGame() {
  const p = useProgress()
  const a = useAccess()

  const cityOf = (m: Module): CityState => {
    const done = m.levels.filter((l) => p.isDone(m.id, l.id)).length
    return {
      module: m,
      done,
      total: m.levels.length,
      // BORNÉ À CENT · une barre au-dessus de cent dit qu'on compte mal, et
      // c'est exactement ce qui était arrivé au compteur précédent.
      percent: m.levels.length ? Math.min(100, Math.round((done / m.levels.length) * 100)) : 0,
      next: m.levels.find((l) => !p.isDone(m.id, l.id)) ?? null,
      finished: done === m.levels.length && m.levels.length > 0,
    }
  }

  // TOUT CE QUI EST FINI, dans le programme entier · c'est ce que compte
  // l'expérience, qui ne doit jamais reculer. Voir plus bas.
  const ALL_DONE = ALL_MODULES.flatMap((module) => module.levels
    .filter((level) => p.isDone(module.id, level.id))
    .map((level) => ({ module, level })))

  const cities = PATH_MODULES.map(cityOf)
  const discovery = cityOf(DISCOVERY_MODULE)
  const tradeCities = a.pick ? citiesOfTrade(a.pick) : []

  /** LA PORTÉE · les cités qui vous concernent, à plat, dans l'ordre où on les
   *  parcourt. C'est elle que lisent les badges et le prochain dojo. */
  const scope: Module[] = [DISCOVERY_MODULE, ...PATH_MODULES, ...tradeCities]
  const scopeLevels = scope.flatMap((module) => module.levels.map((level) => ({ module, level })))

  // LES BADGES SONT DÉRIVÉS DES DOJOS FINIS · une liste tenue à part finirait
  // par en promettre un de plus que le programme n'en contient.
  const badges = scopeLevels
    .filter(({ module, level }) => p.isDone(module.id, level.id))
    .map(({ module, level }) => ({ id: key(module.id, level.id), module, level }))

  const pathDone = cities.reduce((n, c) => n + c.done, 0)
  const pathTotal = cities.reduce((n, c) => n + c.total, 0)

  return {
    isDone: p.isDone,
    answerFor: p.answerFor,
    cityOf,
    cities,
    discovery,
    /** les cités du métier travaillé · vide tant qu'aucun n'est choisi */
    tradeCities,
    scope,
    scopeLevels,
    /** combien de badges ce joueur peut gagner · pas combien le programme en
     *  contient, ce qui n'est pas la même chose et ne veut rien dire pour lui */
    badgeTotal: scopeLevels.length,
    /** L'EXPÉRIENCE GAGNÉE · la somme des dojos finis, dans TOUT le programme
     *  et non dans la seule portée. Un compteur d'XP qui baisse parce qu'on a
     *  changé de métier serait la chose la plus décourageante que cet écran
     *  puisse faire : ce qui est gagné est gagné. */
    xp: ALL_DONE.reduce((n, { level }) => n + xpOf(level), 0),
    badges,
    /** le dojo où reprendre · le premier non fait, cité par cité */
    nextUp: scopeLevels.find(({ module, level }) => !p.isDone(module.id, level.id)) ?? scopeLevels[0],
    pathDone,
    pathTotal,
    pathPercent: pathTotal ? Math.min(100, Math.round((pathDone / pathTotal) * 100)) : 0,
    /** a-t-il commencé quoi que ce soit ? · décide entre « Commencer » et
     *  « Reprendre », et c'est la seule question que pose un écran d'accueil */
    started: scope.some((m) => m.levels.some((l) => p.isDone(m.id, l.id))),
  }
}

/** La cité d'un identifiant, ou rien · une adresse inventée arrive par la barre
 *  d'adresse et doit rendre une page, pas une erreur. */
export const cityById = (id: string): Module | undefined => MODULE_BY_ID[id]
