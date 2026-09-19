// L'ACCÈS À LA TRADUCTION · un crochet, une fonction, rien d'autre.
//
// `const t = useT()` puis `t('nav.pricing')`. Le composant ne sait pas quelle
// langue est active et n'a pas à le savoir : il se redessine quand elle
// change, parce que useLang est branché sur le même signal.
import { useLang, type Lang } from './lang'
import { translate, type Key } from './dict'

export { LANGS, LANG_LABEL, getLang, setLang, useLang, type Lang } from './lang'
export { DICT, KEY_COUNT, translate, type Key, type Entry } from './dict'

/** Le traducteur, lié à la langue courante. */
export function useT(): (key: Key | string) => string {
  const lang = useLang()
  return (key: Key | string) => translate(key, lang)
}

/** Choisir entre deux textes déjà écrits, sans passer par le dictionnaire.
 *
 *  Pour la PROSE qui vit dans un fichier de données et qui y porte ses deux
 *  versions : `pick(lesson.title, lang)`. Elle n'a rien à faire dans un
 *  dictionnaire plat, et la sortir de sa structure lui ferait perdre les
 *  gardes qui la surveillent. Tant qu'une prose n'a pas de version française,
 *  `fr` est absent et l'anglais est servi · ce qui est une lacune VISIBLE,
 *  comptée par scripts/test-i18n.mjs, et non un trou silencieux. */
export function pick(v: { en: string; fr?: string } | string, lang: Lang): string {
  if (typeof v === 'string') return v
  return (lang === 'fr' && v.fr) || v.en
}
