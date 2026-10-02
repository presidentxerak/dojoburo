// LES CATALOGUES DES AUTRES LANGUES · demandé : « mets en place la traduction
// en fonction de la langue du user (français, anglais, espagnol, italien,
// allemand, portugais, japonais etc...) ».
//
// LE FRANÇAIS ET L'ANGLAIS restent écrits côte à côte dans le code (B(en, fr)
// et le dictionnaire), c'est la règle de ce projet et elle ne change pas.
// LES AUTRES LANGUES vivent dans un catalogue par langue, src/i18n/locales/
// <code>.json, qui associe à chaque texte ANGLAIS sa traduction. Pourquoi
// l'anglais comme clé : c'est le seul texte présent partout (B, dictionnaire,
// données), donc le seul qui identifie une phrase sans renuméroter le code.
//
// Chargés À LA DEMANDE (un fichier par langue, découpé par le bundler) : un
// visiteur francophone ne télécharge pas le japonais. Un texte absent du
// catalogue s'affiche en anglais, jamais vide ; la couverture est mesurée par
// scripts/test-i18n.mjs.
import { useEffect, useSyncExternalStore } from 'react'
import type { Lang } from './lang'

export type Catalog = Record<string, string>

const loaded: Partial<Record<Lang, Catalog>> = {}

const LOADERS: Partial<Record<Lang, () => Promise<{ default: Catalog }>>> = {
  es: () => import('./locales/es.json'),
  it: () => import('./locales/it.json'),
  de: () => import('./locales/de.json'),
  pt: () => import('./locales/pt.json'),
  ja: () => import('./locales/ja.json'),
}

/** Les langues servies par un catalogue (et non écrites dans le code). */
export const CATALOG_LANGS = Object.keys(LOADERS) as Lang[]

/** Charger le catalogue d'une langue · sans effet pour le français et
 *  l'anglais, ou s'il l'est déjà. Ne lève jamais : un catalogue qui ne charge
 *  pas laisse l'anglais, ce qui vaut mieux qu'une page blanche. */
export async function loadCatalog(l: Lang): Promise<void> {
  const load = LOADERS[l]
  if (!load || loaded[l]) return
  try { loaded[l] = (await load()).default } catch { loaded[l] = {} }
}

/* ------------------------------------------------------------------ */
/* LE CONTENU DES COURS · demandé : « fais toutes les traductions et faudra le
   faire pour tous les nouveaux cours ». Un second catalogue par langue
   (src/i18n/locales/content/<code>.json), bien plus lourd que celui de
   l'interface : il n'est chargé qu'à l'ouverture d'une leçon ou de la
   bibliothèque de la communauté (useContentCatalog), puis l'écran se redessine. */

const content: Partial<Record<Lang, Catalog>> = {}
const CONTENT_LOADERS: Partial<Record<Lang, () => Promise<{ default: Catalog }>>> = {
  es: () => import('./locales/content/es.json'),
  it: () => import('./locales/content/it.json'),
  de: () => import('./locales/content/de.json'),
  pt: () => import('./locales/content/pt.json'),
  ja: () => import('./locales/content/ja.json'),
}
let version = 0
const subs = new Set<() => void>()

/** Charger le catalogue des cours d'une langue · une fois, sans jamais lever. */
export async function loadContentCatalog(l: Lang): Promise<void> {
  const load = CONTENT_LOADERS[l]
  if (!load || content[l]) return
  try { content[l] = (await load()).default } catch { content[l] = {} }
  version++
  subs.forEach((f) => f())
}

/** Les écrans qui montrent un cours appellent ce crochet · il charge le
 *  catalogue des cours de la langue lue et redessine l'écran à son arrivée. */
export function useContentCatalog(l: Lang): number {
  useEffect(() => { void loadContentCatalog(l) }, [l])
  return useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f) }, () => version, () => 0)
}

/** La traduction d'un texte anglais dans une langue à catalogue, si elle
 *  existe · l'interface d'abord, puis le contenu des cours s'il est chargé. */
export function fromCatalog(l: Lang, en: string): string | undefined {
  return loaded[l]?.[en] ?? content[l]?.[en]
}
