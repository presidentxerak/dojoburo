// LES FORMATIONS · ce qu'on ouvre, ce qu'on achète, ce qu'on joue.
//
// ---------------------------------------------------------------------------
// POURQUOI UN ÉTAGE DE PLUS AU DESSUS DES MODULES
//
// Le programme avait deux étages : des cités (modules) et des dojos (niveaux).
// Ça suffisait tant qu'il y avait un seul parcours. Il y en a huit : la semaine
// gratuite, la généraliste, et six métiers. Sans un étage qui les nomme, l'app
// ne pouvait poser qu'une question maladroite · « quelle cité ? » · alors que
// la question qu'on se pose en arrivant est « quelle formation ? ».
//
// C'est aussi ce qui permet aux formations de GROSSIR. Une formation est une
// liste de modules ; en ajouter un ne demande ni écran, ni route, ni carte : il
// entre dans la liste et tout le reste suit.
//
// ---------------------------------------------------------------------------
// TOUT EST DÉRIVÉ, Y COMPRIS L'EXPÉRIENCE
//
// Les maquettes affichent des points d'expérience sur chaque leçon. On ne les
// écrit pas à la main : ce serait un deuxième chiffre à tenir à côté des
// minutes, et deux chiffres qui décrivent le même effort divergent au premier
// remaniement. L'XP est donc une FONCTION de la durée · dix points la minute,
// arrondis à la dizaine. Un dojo de sept minutes vaut soixante-dix points, et
// personne n'a à s'en souvenir.
//
// ---------------------------------------------------------------------------
// CE QUE COÛTE UNE FORMATION VIENT DE data/plans, ET DE NULLE PART AILLEURS
//
// Un prix écrit ici serait le quatrième endroit où ce produit a déjà laissé
// traîner un tarif périmé. Chaque formation porte donc la CLÉ de sa formule,
// et le prix se lit au moment de l'afficher.
import { B, say, type Bi } from './bilingual'
import type { IconName } from './icons'
import {
  DISCOVERY_MODULE, PATH_MODULES, MODULE_BY_ID, type Module, type Level,
} from './curriculum'
import { TRADES, citiesOfTrade } from './trades'
import { PATH_EUR, TRADE_EUR } from './plans'
import type { Lang } from '../i18n/lang'

/* ================================================================== */
/* L'EXPÉRIENCE                                                        */
/* ================================================================== */

/** Ce que vaut un dojo · dérivé de sa durée, jamais écrit à la main.
 *
 *  DIX POINTS LA MINUTE est un choix arbitraire, et c'est très bien : la
 *  valeur absolue ne veut rien dire, seul le rapport entre deux dojos compte.
 *  Ce qui n'est pas arbitraire, c'est que ce soit UNE FONCTION · un second
 *  nombre écrit à côté des minutes aurait fini par les contredire. */
export const xpOf = (l: Level): number => Math.round((l.minutes * 10) / 10) * 10

export const xpOfModule = (m: Module): number =>
  m.levels.reduce((n, l) => n + xpOf(l), 0)

/* ================================================================== */
/* CE QU'IL FAUT POUR ENTRER                                           */
/* ================================================================== */

/** La porte d'une formation · trois seulement, et chacune correspond à une
 *  ligne de data/plans. Un quatrième cas voudrait dire qu'on vend autre chose
 *  que ce que la grille de tarifs annonce. */
export type Door = 'free' | 'path' | 'trade'

/** Les kits de salle qu'une formation peut porter · un sous-ensemble choisi des
 *  kits de three/ThemeProps. Écrit en type plutôt qu'en chaîne libre pour
 *  qu'une faute de frappe se voie à la compilation et non par une salle vide. */
export type DojoKit = 'course' | 'study' | 'saas' | 'podcast' | 'pitch' | 'app' | 'sales' | 'ops'

export interface Pack {
  id: string
  door: Door
  title: Bi
  /** UNE LIGNE, et c'est une contrainte · voir scripts/test-packs. Les cartes
   *  des maquettes tiennent une phrase, pas un paragraphe, et c'est ce qui les
   *  rend lisibles d'un coup d'oeil sur un téléphone. */
  blurb: Bi
  glyph: IconName
  tint: string
  /** LA SALLE DE SON DOJO · la carte montre l'INTÉRIEUR du dojo de la
   *  spécialité, meublé du kit de son métier (voir three/ThemeProps). C'était
   *  un extérieur de temple, le même pour tous à la couleur près ; une salle
   *  meublée dit de quoi on parle avant qu'on ait lu le titre · un studio de
   *  podcast n'est pas une salle des marchés. */
  kit: DojoKit
  /** les identifiants de ses modules, dans l'ordre conseillé */
  modules: string[]
  /** le métier auquel ce pack appartient · absent pour les deux généralistes */
  trade?: string
}

/* ================================================================== */
/* LES HUIT FORMATIONS                                                 */
/* ================================================================== */

/** LE WEEK-END IA · l'ancienne « semaine de découverte », renommée pour ce
 *  qu'elle est vraiment : sept leçons de sept minutes, soit moins d'une heure,
 *  ce qui tient dans un samedi. « Sept jours » promettait un rythme, et un
 *  rythme est une contrainte qu'on impose à quelqu'un qui n'a encore rien
 *  demandé. Le contenu n'a pas bougé d'une ligne. */
const WEEKEND: Pack = {
  id: 'weekend',
  door: 'free',
  title: B('The AI weekend!', "Le week-end de l'IA"),
  blurb: B('Seven lessons, under an hour, free. Finally speak AI: the words, the limits, the cost.',
    "Sept leçons, moins d'une heure, gratuitement. Maîtrisez le langage de l'IA : les mots, les limites, le coût."),
  glyph: 'peak',
  tint: '#7b5cff',
  kit: 'course',
  modules: [DISCOVERY_MODULE.id],
}

const GENERAL: Pack = {
  id: 'generaliste',
  door: 'path',
  title: B('The full path', 'La formation complète'),
  blurb: B('Thirteen dojo cities to finally put AI to work: prompting, the models, the assistants, agents, design, cost.',
    "Treize cités dojo pour apprendre à faire travailler l'IA pour vous : le prompt, les modèles, les assistants, les agents, le design, le coût."),
  glyph: 'diamond',
  tint: '#0ea5e9',
  kit: 'study',
  modules: PATH_MODULES.map((m) => m.id),
}

/** LE KIT DE CHAQUE MÉTIER · la salle qui ressemble au travail qu'on y fait.
 *
 *  UNE TABLE ET NON UN CYCLE. La version d'avant tirait un décor dans une
 *  liste de six par l'indice du métier, donc « commercial » avait un pavillon
 *  sur l'eau parce qu'il était cinquième, pas parce qu'un commercial travaille
 *  au bord d'un bassin. Ici chaque métier nomme SA salle, et un métier ajouté
 *  sans salle tombe sur la salle d'étude plutôt que sur celle d'un autre. */
const TRADE_KIT: Record<string, DojoKit> = {
  growth: 'saas',        // les tableaux de bord, les courbes
  comms: 'podcast',      // le micro, la lumière annulaire, le mur de studio
  founder: 'pitch',      // la scène, le trophée
  product: 'app',        // les serveurs, le tableau de flux
  sales: 'sales',        // les téléphones, la carte du territoire
  assistant: 'ops',      // le tapis roulant, les palettes, le flux
}

const TRADE_PACKS: Pack[] = TRADES.map((t) => ({
  id: `metier-${t.id}`,
  door: 'trade' as Door,
  title: t.label,
  blurb: t.who,
  glyph: t.glyph,
  tint: t.tint,
  kit: TRADE_KIT[t.id] ?? 'study',
  modules: citiesOfTrade(t.id).map((m) => m.id),
  trade: t.id,
}))

/** L'ORDRE DE LA LISTE EST L'ORDRE DE L'ÉCRAN · le gratuit d'abord, parce que
 *  c'est par là qu'on entre ; la généraliste ensuite, parce que c'est ce qu'on
 *  vend ; les métiers en dernier, parce qu'ils n'ont de sens qu'après. */
export const PACKS: Pack[] = [WEEKEND, GENERAL, ...TRADE_PACKS]

export const PACK_BY_ID: Record<string, Pack> =
  Object.fromEntries(PACKS.map((p) => [p.id, p]))

/* ================================================================== */
/* CE QUI SE DÉRIVE                                                    */
/* ================================================================== */

/** Les modules d'une formation · rend un tableau vide plutôt que de lever,
 *  parce qu'un identifiant inventé arrive par la barre d'adresse et doit
 *  rendre une page. */
export const modulesOf = (p: Pack): Module[] =>
  p.modules.map((id) => MODULE_BY_ID[id]).filter(Boolean)

export const levelsOf = (p: Pack): { module: Module; level: Level }[] =>
  modulesOf(p).flatMap((module) => module.levels.map((level) => ({ module, level })))

export const minutesOf = (p: Pack): number =>
  levelsOf(p).reduce((n, { level }) => n + level.minutes, 0)

export const xpOfPack = (p: Pack): number =>
  levelsOf(p).reduce((n, { level }) => n + xpOf(level), 0)

/** Le prix d'une formation, en euros · lu dans data/plans, jamais écrit ici. */
export const eurOf = (p: Pack): number =>
  p.door === 'free' ? 0 : p.door === 'path' ? PATH_EUR : TRADE_EUR

/** La formation à laquelle appartient un module · l'inverse de modulesOf,
 *  tenu au même endroit pour qu'il ne puisse pas le contredire. */
export const PACK_OF_MODULE: Record<string, string> = Object.fromEntries(
  PACKS.flatMap((p) => p.modules.map((m) => [m, p.id])),
)

/** Le nom d'une formation dans la langue lue · un seul chemin. */
export const packName = (p: Pack, lang: Lang): string => say(p.title, lang)

/* ================================================================== */
/* LES ADRESSES                                                        */
/* ================================================================== */
//
// ELLES SONT COURTES, ET C'EST LE POINT. « /formation/agents/ag-method »
// demandait de connaître trois identifiants pour partager un dojo. Une
// formation est un dojo, un niveau est un niveau, et deux segments suffisent.

export const packPath = (id: string) => `/dojo/${id}`
export const lessonPath = (packId: string, levelId: string) => `/dojo/${packId}/${levelId}`

/** Retrouver un niveau dans une formation · rend null plutôt que de lever. */
export function findLesson(packId: string, levelId: string) {
  const pack = PACK_BY_ID[packId]
  if (!pack) return null
  const found = levelsOf(pack).find(({ level }) => level.id === levelId)
  return found ? { pack, ...found } : null
}

export const PACK_COUNT = PACKS.length
export const FREE_PACK = WEEKEND
export const PATH_PACK = GENERAL
