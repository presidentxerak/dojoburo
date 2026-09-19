// LA LANGUE · le noyau, et les trois décisions qu'il porte.
//
// L'app n'avait aucune internationalisation : `lang="en"` dans le document et
// chaque phrase écrite en dur, dans les composants comme dans les fichiers de
// données. Ce n'est pas un oubli qu'on rattrape en passant, c'est le genre de
// dette qui double à chaque cours ajouté · d'où ce lot avant les deux
// nouveaux cours plutôt qu'après.
//
// DÉCISION 1 · AUCUNE BIBLIOTHÈQUE. react-i18next apporte un chargeur
// asynchrone, un système de greffons, des espaces de noms et une interpolation
// que nous n'utiliserions pas, et il rendrait le premier rendu dépendant d'un
// chargement. Ce dont ce site a besoin tient en un objet, un signal et un
// crochet. Tout ce qui est ajouté ici doit être justifié par un besoin réel,
// pas par une habitude.
//
// DÉCISION 2 · LES DEUX LANGUES DANS LA MÊME ENTRÉE. Le réflexe est de ranger
// l'anglais dans en.json et le français dans fr.json. Deux fichiers parallèles
// dérivent toujours, et ils dérivent EN SILENCE : on corrige une phrase d'un
// côté, l'autre garde l'ancienne, et personne ne relit un fichier de
// traduction. Cette app a déjà perdu de l'argent sur exactement ce défaut,
// quand deux écrans annonçaient deux prix pour la même chose. Ici les deux
// versions sont côte à côte, sur deux lignes qui se lisent ensemble : une
// traduction périmée saute aux yeux dans le diff qui la périme.
//
// DÉCISION 3 · LA LANGUE EST UN CHOIX, PAS UNE DÉDUCTION. On lit le navigateur
// pour la PREMIÈRE visite seulement. Ensuite c'est le choix de la personne qui
// gagne, gardé dans le navigateur, parce que quelqu'un qui a cliqué sur EN ne
// veut pas revoir du français au prochain chargement sous prétexte que son
// système est en français.
import { useSyncExternalStore } from 'react'

export const LANGS = ['en', 'fr'] as const
export type Lang = (typeof LANGS)[number]

/** Le libellé d'une langue dans le sélecteur · dans SA langue, jamais traduit.
 *  « French » écrit en anglais ne sert qu'à quelqu'un qui lit déjà l'anglais,
 *  c'est à dire exactement la personne qui n'a pas besoin du sélecteur. */
export const LANG_LABEL: Record<Lang, string> = { en: 'English', fr: 'Français' }

const KEY = 'dojo.lang'
const isLang = (v: unknown): v is Lang => LANGS.includes(v as Lang)

/** La langue de départ · le choix gardé, sinon le navigateur, sinon l'anglais.
 *  Ne lève jamais : en navigation privée, localStorage peut jeter à la lecture
 *  comme à l'écriture, et une page blanche pour une préférence de langue est
 *  un très mauvais échange. */
function initial(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (isLang(saved)) return saved
  } catch { /* stockage refusé · on continue */ }
  try {
    const nav = navigator.language?.slice(0, 2).toLowerCase()
    if (isLang(nav)) return nav
  } catch { /* pas de navigator · rendu côté serveur */ }
  return 'en'
}

let current: Lang = typeof window === 'undefined' ? 'en' : initial()
const listeners = new Set<() => void>()

/** L'ATTRIBUT lang DU DOCUMENT suit la langue choisie.
 *
 *  Ce n'est pas de la décoration : c'est lui que lisent les lecteurs d'écran
 *  pour choisir une voix, les navigateurs pour la césure et la correction
 *  orthographique, et les moteurs de recherche pour savoir à qui servir la
 *  page. Une page française annoncée `lang="en"` est lue par une voix de
 *  synthèse anglaise, ce qui la rend incompréhensible. */
function applyToDocument(l: Lang) {
  if (typeof document !== 'undefined') document.documentElement.lang = l
}

export function getLang(): Lang { return current }

export function setLang(l: Lang) {
  if (!isLang(l) || l === current) return
  current = l
  try { localStorage.setItem(KEY, l) } catch { /* stockage refusé */ }
  applyToDocument(l)
  listeners.forEach((fn) => fn())
}

function subscribe(fn: () => void) {
  listeners.add(fn)
  return () => { listeners.delete(fn) }
}

/** La langue courante, en tant qu'état React. */
export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getLang, () => 'en')
}

// Au chargement, le document doit déjà porter la bonne langue · sinon la
// première peinture annonce l'anglais et un lecteur d'écran part sur la
// mauvaise voix avant même que React ne monte.
applyToDocument(current)
