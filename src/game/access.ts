// CE QUI EST OUVERT, ET POUR QUI · une seule réponse, tous les écrans.
//
// ---------------------------------------------------------------------------
// POURQUOI UN FICHIER POUR ÇA
//
// Trois surfaces décident d'ouvrir un dojo : la carte, la page d'une cité, la
// page d'un dojo. Trois conditions écrites à la main auraient fini par ne plus
// dire la même chose, et une divergence ici a exactement deux formes, toutes
// deux graves : quelqu'un lit gratuitement ce qu'un autre a payé, ou quelqu'un
// qui a payé se voit refuser l'entrée. Alors la question n'est posée qu'ici.
//
// La règle vient de data/curriculum (TRACK_ACCESS), qui dit ce que chaque
// parcours exige. Ce fichier dit seulement ce que la personne a.
//
// ---------------------------------------------------------------------------
// CE QUI EST STOCKÉ ICI N'EST PAS UNE PREUVE D'ACHAT
//
// Le droit réel est tenu par le serveur · voir api/_lib/entitlements. Ce qui
// est écrit dans le navigateur est un SOUVENIR : ce que le retour de paiement
// a rapporté, pour que l'écran s'ouvre sans un aller-retour à chaque clic.
// Effacer ce souvenir ne fait perdre aucun droit, il revient au prochain retour
// de paiement ; le fabriquer à la main n'ouvre rien d'autre que des pages de
// cours dans le navigateur de celui qui l'a fabriqué. On ne prétend donc pas
// que ce soit une serrure, parce qu'une serrure qui n'en est pas une est le
// mensonge le plus coûteux qu'un produit puisse s'écrire à lui-même.
import { useSyncExternalStore } from 'react'
import { TRACK_ACCESS, type Module, type TrackId } from '../data/curriculum'
import { TRADE_OF_CITY } from '../data/trades'
import type { Pack } from '../data/packs'

const KEY = 'dojo.access'

/* ------------------------------------------------------------------ */
/* LES DEUX ADRESSES QUI OUVRENT TOUT                                  */
/* ------------------------------------------------------------------ */
//
// CE N'EST PAS UN RÔLE D'ADMINISTRATEUR, ET IL FAUT LE DIRE PRÉCISÉMENT.
// C'est un PASSE-DROIT D'ESSAI : deux adresses qui, entrées dans le champ de
// la formation gratuite, ouvrent les huit formations sur CE navigateur. Ça
// sert à relire les cours en entier sans passer par un paiement.
//
// Ce que ça n'est pas : une serrure, ni une identité. Personne ne prouve rien
// en tapant une adresse, et les cours voyagent de toute façon dans le fichier
// que le navigateur télécharge · voir game/Gate. Une vraie séparation entre
// qui paie et qui ne paie pas demande de servir les niveaux payants depuis le
// serveur, après vérification du droit.
//
// Écrire ces deux adresses en clair est donc SANS RISQUE, et c'est voulu :
// une liste secrète dans un fichier public est une liste publique qui se croit
// secrète, ce qui est la pire des deux situations.
const TESTERS = ['atomxnft@gmail.com', 'xguiter@gmail.com']

/** Cette adresse est-elle un passe-droit d'essai ? · comparée en minuscules et
 *  sans espaces, parce qu'une adresse se tape à la main et qu'un T majuscule
 *  ne doit pas décider d'un accès. */
export const isTester = (email?: string): boolean =>
  Boolean(email) && TESTERS.includes(String(email).trim().toLowerCase())

export interface Access {
  /** l'adresse donnée pour la semaine gratuite · rien d'autre n'est demandé */
  email?: string
  /** la formation généraliste a été achetée */
  path?: boolean
  /** le métier ACHETÉ, s'il y en a un · l'identifiant, jamais le nom traduit */
  trade?: string
  /** le métier CHOISI · ce n'est pas la même chose que le métier acheté, et
   *  les confondre en un seul champ aurait donné l'un des deux défauts : soit
   *  regarder une formation métier l'aurait ouverte, soit l'avoir achetée
   *  aurait empêché de regarder les cinq autres avant de se décider. */
  pick?: string
}

const EMPTY: Access = {}

function load(): Access {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return EMPTY
    const v = JSON.parse(raw) as Access
    return v && typeof v === 'object' ? v : EMPTY
  } catch {
    return EMPTY
  }
}

// UNE SEULE COPIE EN MÉMOIRE · useSyncExternalStore compare par identité, donc
// relire le stockage à chaque rendu redonnerait un objet neuf à chaque fois et
// ferait boucler React. C'est la même précaution que le magasin de langue.
let cache: Access = load()
const subs = new Set<() => void>()

function save(next: Access) {
  cache = next
  try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* mode privé */ }
  subs.forEach((f) => f())
}

/** L'adresse donnée ouvre la semaine gratuite · rien de plus. */
export function giveEmail(email: string) {
  const e = email.trim()
  if (!e) return
  save({ ...cache, email: e })
}

/** Ce que le retour de paiement rapporte · appelé par la page de retour, pas
 *  par un écran de cours. */
export function grant(what: { path?: boolean; trade?: string }) {
  save({ ...cache, ...what })
}

/** Le métier sur lequel on travaille · une préférence, pas un droit. Elle
 *  décide de la carte qu'on voit dans son profil et du dojo où l'on reprend,
 *  et elle se change sans rien perdre : la progression est rangée par cité, et
 *  une cité ne s'efface pas parce qu'on regarde ailleurs. */
export function chooseTrade(id: string) {
  save({ ...cache, pick: id })
}

export function forgetAccess() {
  save(EMPTY)
}

export function useAccess() {
  const a = useSyncExternalStore(
    (f) => { subs.add(f); return () => subs.delete(f) },
    () => cache,
    () => EMPTY,
  )

  const tester = isTester(a.email)

  /** Ce parcours est-il ouvert ? · la seule question, et elle lit la règle du
   *  programme plutôt que de la recopier. */
  const opens = (track: TrackId): boolean => {
    if (tester) return true
    const needs = TRACK_ACCESS[track]
    if (needs === 'email') return Boolean(a.email)
    if (needs === 'path') return Boolean(a.path)
    return Boolean(a.trade)
  }

  /** UN MÉTIER ACHETÉ N'OUVRE PAS LES CINQ AUTRES · sans cette vérification,
   *  « avoir acheté un métier » suffirait à ouvrir les dix-huit cités métier,
   *  ce qui est la même faute que la serrure posée sur le parcours plutôt que
   *  sur la cité. */
  const canOpen = (m: Module) =>
    tester ? true
      : m.track === 'trade'
        ? Boolean(a.trade) && TRADE_OF_CITY[m.id] === a.trade
        : opens(m.track)

  /** LE PREMIER DOJO D'UNE CITÉ EST OUVERT · à qui a donné son adresse.
   *
   *  POURQUOI CETTE EXCEPTION. Une carte de treize cités dont aucune ne
   *  s'ouvre est un catalogue avec un cadenas dessus : on ne peut pas juger ce
   *  qu'on n'a pas vu, et personne ne paie quatre-vingt-dix-neuf euros sur la
   *  foi d'un titre. Un dojo par cité, c'est assez pour savoir comment le
   *  cours enseigne, et trop peu pour s'en passer.
   *
   *  LA RÈGLE EST LA POSITION, pas une liste de niveaux marqués « offert » :
   *  une liste se serait désynchronisée au premier réagencement, et une cité
   *  se serait retrouvée soit entièrement ouverte, soit entièrement fermée. */
  const canOpenLevel = (m: Module, levelId: string) =>
    canOpen(m) || (Boolean(a.email) && m.levels[0]?.id === levelId)

  /** UNE FORMATION EST-ELLE OUVERTE ? · c'est la question que pose l'écran
   *  d'accueil, et c'est celle qui décide du cadenas sur une carte.
   *
   *  Elle est posée au niveau de la FORMATION et non du module, parce que
   *  c'est la formation qu'on achète. Poser la question module par module
   *  aurait donné une carte où six cités d'un même achat s'ouvrent et trois
   *  restent fermées, ce qui ne correspond à rien qu'on vende. */
  const opensPack = (p: Pack): boolean => {
    if (tester) return true
    if (p.door === 'free') return Boolean(a.email)
    if (p.door === 'path') return Boolean(a.path)
    return Boolean(a.trade) && p.trade === a.trade
  }

  return {
    email: a.email,
    /** le métier acheté */
    trade: a.trade,
    /** le métier sur lequel on travaille · celui qu'on a choisi, sinon celui
     *  qu'on a acheté, sinon aucun */
    pick: a.pick ?? a.trade,
    hasEmail: Boolean(a.email),
    hasPath: Boolean(a.path) || tester,
    /** cette adresse ouvre tout pour essayer · voir TESTERS plus haut */
    tester,
    opens,
    /** une cité s'ouvre par son parcours · jamais par son identifiant */
    canOpen,
    canOpenLevel,
    opensPack,
  }
}
