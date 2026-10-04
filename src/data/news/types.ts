// LES NOUVEAUTÉS IA · demandé : « La formation "Les outils du moment : suivre
// sans se noyer" n'est pas une formation mais une news mise à jour toutes les
// semaines le lundi [...] créé la page des news IA [...] fais juste une card du
// résumé de la news qui mène au vrai article avec les crédits et le nom de la
// source. Les news peuvent être des vidéos Youtube (en anglais) ou des articles ».
//
// Une édition par semaine, datée du lundi qui l'ouvre. Chaque nouvelle est un
// résumé écrit par nous, dans les deux langues, et un lien vers l'original :
// rien n'est recopié, et la source est toujours nommée.
import type { Bi } from '../bilingual'

export interface NewsItem {
  /** identifiant stable, unique dans toutes les éditions (minuscules et tirets) */
  id: string
  kind: 'article' | 'video'
  /** le titre tel que la source l'a publié, dans sa langue */
  title: string
  /** notre résumé, deux à trois phrases, sans chiffre qui ne soit pas dans la source */
  summary: Bi
  /** le nom de la source : le média, l'éditeur ou la chaîne YouTube ('' si inconnu pour une vidéo) */
  source: string
  /** l'auteur, seulement quand il est connu avec certitude, sinon '' */
  author: string
  /** l'adresse de l'article ou de la vidéo d'origine */
  url: string
  /** la langue de l'original */
  lang: 'fr' | 'en'
  /** la date de publication de l'original (AAAA-MM-JJ), '' si elle n'est pas certaine */
  date: string
  /** pour une vidéo YouTube : son identifiant, qui sert aussi à créditer la chaîne */
  videoId?: string
}

export interface NewsWeek {
  /** le lundi qui ouvre la semaine couverte (AAAA-MM-JJ) */
  week: string
  /** une phrase d'introduction de l'édition */
  intro: Bi
  items: NewsItem[]
}
