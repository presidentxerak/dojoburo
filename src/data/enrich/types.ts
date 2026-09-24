// L'APPROFONDISSEMENT D'UN DOJO · ce qui fait d'un niveau un vrai cours.
//
// POURQUOI CE N'EST PLUS « UNE PHRASE PAR CHOSE ». Un dojo tenait en six
// lignes : ce qu'on apprend, ce qu'on fait, trois gestes, un piège, une
// question, un badge. C'était la règle, écrite pour que la prose ne repousse
// pas. À l'écran, c'était trop mince : « les cours sont trop basiques et les
// exercices peu intéressants ». Le squelette reste court et se lit d'un coup
// d'oeil ; ce qui suit l'approfondit :
//
//   pourquoi ça marche   le mécanisme, en deux ou trois paragraphes courts
//   avant / après        un vrai prompt raté, puis le même réparé
//   l'exercice           à faire dans son propre outil IA, avec le prompt à
//                        copier, la liste pour se corriger soi-même, un bonus
//   deux questions       de plus, pour vérifier que c'est acquis
//
// Chaque formation a son fichier, pour que plusieurs mains puissent écrire
// en même temps sans se marcher dessus. scripts/test-enrich vérifie que chaque
// dojo a le sien, complet, dans les deux langues.
import type { Bi } from '../bilingual'
import type { Quiz } from '../curriculum'

export interface Enrichment {
  /** POURQUOI ÇA MARCHE · deux ou trois paragraphes courts, le mécanisme et
   *  pas la recette */
  why: Bi[]
  /** L'AVANT / APRÈS · une situation réelle, le prompt raté, le même réparé,
   *  et ce qui a changé. Les deux prompts peuvent tenir sur plusieurs lignes. */
  example: { context: Bi; before: Bi; after: Bi; takeaway: Bi }
  /** L'EXERCICE · un objectif, un prompt à copier (les [CROCHETS] sont à
   *  remplacer), trois ou quatre points pour se corriger, un bonus */
  exercise: { goal: Bi; prompt: Bi; check: Bi[]; bonus: Bi }
  /** DEUX QUESTIONS DE PLUS · même forme que la question du dojo */
  more: Quiz[]
}

/** La clé d'un dojo · la cité et le niveau, parce qu'un identifiant de niveau
 *  n'est unique que dans sa cité. */
export const enrichKey = (moduleId: string, levelId: string) => `${moduleId}/${levelId}`
