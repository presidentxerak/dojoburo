// L'APPROFONDISSEMENT PÉDAGOGIQUE D'UN DOJO · la seconde couche d'un cours.
//
// POURQUOI UNE SECONDE COUCHE. Demandé : « j'ai l'impression qu'ils ne sont pas
// assez clairs et assez pédagogues et ils sont aussi trop courts, ajoute plus
// de contenu pertinent dans toutes les formations ». Un dojo expliquait le
// mécanisme (pourquoi cela fonctionne), montrait un avant / après et donnait
// un exercice. Il lui manquait ce qu'un enseignant fait avant et après :
//
//   l'essentiel        ce dont il s'agit, pourquoi c'est utile, ce que l'on
//                      saura faire, en quelques phrases, avant tout le reste
//   les notions clés   les mots du sujet, définis simplement
//   l'exemple guidé    un cas réel déroulé pas à pas, raisonnement compris
//   les erreurs        les erreurs fréquentes, et comment les corriger
//   à retenir          la synthèse, en quelques points
//   pour aller plus loin, et deux questions de plus
//
// Chaque formation a son fichier (voir ./index), pour que plusieurs mains
// écrivent en même temps. scripts/test-deep vérifie que chaque dojo du
// programme a le sien, complet, dans les deux langues, et en « vous ».
import type { Bi } from '../bilingual'
import type { Quiz } from '../curriculum'

export interface Deepening {
  /** L'ESSENTIEL · trois à cinq phrases : de quoi il s'agit, pourquoi c'est
   *  utile, ce que l'on saura faire à la fin */
  intro: Bi
  /** LES NOTIONS CLÉS · trois à cinq termes, chacun défini en une ou deux
   *  phrases simples */
  concepts: { term: Bi; def: Bi }[]
  /** L'EXEMPLE GUIDÉ · un cas réel et concret, déroulé en quatre à six étapes
   *  qui disent ce que l'on fait ET pourquoi */
  walkthrough: { title: Bi; steps: Bi[] }
  /** LES ERREURS FRÉQUENTES · trois erreurs, chacune avec sa correction */
  mistakes: { wrong: Bi; fix: Bi }[]
  /** À RETENIR · trois à cinq points, une phrase chacun */
  recap: Bi[]
  /** POUR ALLER PLUS LOIN · une piste concrète, deux ou trois phrases */
  further: Bi
  /** DEUX QUESTIONS DE PLUS · même forme que la question du dojo */
  more: Quiz[]
}

/** La clé d'un dojo · la cité et le niveau, comme pour data/enrich. */
export const deepKey = (moduleId: string, levelId: string) => `${moduleId}/${levelId}`
