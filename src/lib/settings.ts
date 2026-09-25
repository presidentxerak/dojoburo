// LES RÉGLAGES DE L'ÉLÈVE · ce que l'onglet « Paramètres » du profil change.
//
// POURQUOI UN PETIT MAGASIN À PART · demandé : « ajoute des paramètres ». Les
// effets (particules, rebond des boutons), le mouvement réduit et les
// vibrations sont lus par des endroits qui n'ont rien en commun (le rebond
// global de lib/juice, la coquille du jeu, le profil). Un seul magasin, lu
// partout de la même façon, évite qu'un réglage coupé ici reste allumé là.
//
// CE QUI N'EST PAS ICI · la langue (i18n/lang, elle a déjà son magasin) et le
// son du jeu (sim/audio, idem). Le profil les expose à côté, sans les copier :
// deux sources pour le même réglage finissent toujours par se contredire.
//
// GARDÉ DANS CE NAVIGATEUR · comme la progression sans compte. Un stockage
// refusé (navigation privée) laisse les valeurs par défaut, sans erreur.
import { useSyncExternalStore } from 'react'

export interface Settings {
  /** les particules et le rebond sur les boutons d'action */
  fx: boolean
  /** réduire les animations · en plus de la préférence du système */
  calm: boolean
  /** une courte vibration au toucher, sur les téléphones qui la permettent */
  haptics: boolean
}

export const DEFAULT_SETTINGS: Settings = { fx: true, calm: false, haptics: true }

const KEY = 'dojoburo.settings'
const listeners = new Set<() => void>()

function read(): Settings {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return DEFAULT_SETTINGS
    const v = JSON.parse(raw) as Partial<Settings>
    return {
      fx: typeof v.fx === 'boolean' ? v.fx : DEFAULT_SETTINGS.fx,
      calm: typeof v.calm === 'boolean' ? v.calm : DEFAULT_SETTINGS.calm,
      haptics: typeof v.haptics === 'boolean' ? v.haptics : DEFAULT_SETTINGS.haptics,
    }
  } catch {
    return DEFAULT_SETTINGS
  }
}

let current: Settings = typeof window === 'undefined' ? DEFAULT_SETTINGS : read()

/** Le mouvement réduit s'écrit aussi sur le document · la feuille de style le
 *  lit (html.calm) sans que chaque composant ait à s'abonner. */
function applyToDocument(s: Settings) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('calm', s.calm)
}
applyToDocument(current)

export function getSettings(): Settings { return current }

export function setSetting<K extends keyof Settings>(k: K, v: Settings[K]) {
  if (current[k] === v) return
  current = { ...current, [k]: v }
  try { localStorage.setItem(KEY, JSON.stringify(current)) } catch { /* stockage refusé */ }
  applyToDocument(current)
  listeners.forEach((fn) => fn())
}

export function resetSettings() {
  current = DEFAULT_SETTINGS
  try { localStorage.removeItem(KEY) } catch { /* stockage refusé */ }
  applyToDocument(current)
  listeners.forEach((fn) => fn())
}

function subscribe(fn: () => void) {
  listeners.add(fn)
  return () => { listeners.delete(fn) }
}

export function useSettings(): Settings {
  return useSyncExternalStore(subscribe, getSettings, () => DEFAULT_SETTINGS)
}

/** Le système demande moins de mouvement · la requête est gardée, sa réponse
 *  relue à chaque fois (elle peut changer pendant la visite), et c'est lu à
 *  chaque image par l'horloge des vignettes : pas de nouvelle requête là. */
const motionQuery = typeof matchMedia === 'function' ? matchMedia('(prefers-reduced-motion: reduce)') : null
export function systemReducesMotion(): boolean {
  return !!motionQuery?.matches
}

/** Les effets sont-ils permis maintenant · réglage ET système. */
export function effectsOn(): boolean {
  return current.fx && !current.calm && !systemReducesMotion()
}

/* ------------------------------------------------------------------ */
/* L'AFFICHAGE · sombre (par défaut), clair, ou celui du système       */
/* ------------------------------------------------------------------ */
//
// Demandé : « ajoute un affichage light mode ». Rangé à part des autres
// réglages parce que public/boot.js le lit AVANT React, pour que la page
// naisse dans la bonne lumière (voir boot.js, 1b).

export type Look = 'dark' | 'light' | 'system'
const LOOK_KEY = 'dojoburo.look'
const lookListeners = new Set<() => void>()

function readLook(): Look {
  try {
    const v = localStorage.getItem(LOOK_KEY)
    return v === 'light' || v === 'system' ? v : 'dark'
  } catch {
    return 'dark'
  }
}

let look: Look = typeof window === 'undefined' ? 'dark' : readLook()
const lightQuery = typeof matchMedia === 'function' ? matchMedia('(prefers-color-scheme: light)') : null

/** L'affichage réellement appliqué · « système » se résout ici. */
export function lookIsLight(l: Look = look): boolean {
  return l === 'light' || (l === 'system' && !!lightQuery?.matches)
}

function applyLook() {
  if (typeof document === 'undefined') return
  const light = lookIsLight()
  if (light) document.documentElement.setAttribute('data-look', 'light')
  else document.documentElement.removeAttribute('data-look')
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#f4f0ff' : '#0a0514')
}

export function getLook(): Look { return look }

export function setLook(l: Look) {
  if (l === look) return
  look = l
  try {
    if (l === 'dark') localStorage.removeItem(LOOK_KEY)
    else localStorage.setItem(LOOK_KEY, l)
  } catch { /* stockage refusé */ }
  applyLook()
  lookListeners.forEach((fn) => fn())
}

// LE SYSTÈME CHANGE D'AVIS (le soir, par exemple) · suivi seulement si
// l'élève a choisi « système ».
lightQuery?.addEventListener?.('change', () => { if (look === 'system') { applyLook(); lookListeners.forEach((fn) => fn()) } })

export function useLook(): Look {
  return useSyncExternalStore(
    (fn) => { lookListeners.add(fn); return () => { lookListeners.delete(fn) } },
    getLook,
    () => 'dark' as Look,
  )
}
