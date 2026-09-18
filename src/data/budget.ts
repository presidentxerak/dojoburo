// What a dojo team costs to run.
//
// A team's plan is a fixed list of steps, and one step is one task. That is the
// only honest number on a team card · no invented "from $X/month".
//
// LE CHIFFRE EN DOLLARS A CHANGÉ DE SOURCE, et c'est le point de ce fichier.
//
// Il valait une part d'abonnement : le prix du forfait Managed divisé par les
// tâches qu'il incluait. Ça tenait tant qu'on vendait des exécutions. Depuis
// qu'on vend une formation et des fichiers, il n'y a plus d'abonnement qui
// contienne des tâches, donc plus de part à découper · le chiffre n'aurait plus
// rien mesuré du tout.
//
// Il vaut maintenant ce qu'une tâche coûte VRAIMENT, aux tarifs publiés du
// modèle, calculé par effort.ts qui possède déjà cette arithmétique. C'est la
// bonne source pour un cours : ce qu'on montre est ce que l'élève paiera à son
// fournisseur quand il fera tourner ça chez lui, pas une tranche de ce qu'il
// nous paie à nous.
import type { Archetype } from './archetypes'
import { EFFORT_BY_ID, DEFAULT_EFFORT, estimateStep, usdFor } from './effort'

/** Ce que coûte UNE tâche, en dollars, au tarif publié du modèle, en mode par
 *  défaut et sans application attachée. C'est un ordre de grandeur et l'app le
 *  dit · le vrai prix dépend du modèle choisi et de la longueur réelle. */
export const CREDIT_USD = usdFor(
  EFFORT_BY_ID[DEFAULT_EFFORT],
  estimateStep(EFFORT_BY_ID[DEFAULT_EFFORT], 0),
)

export type BudgetTier = 'Light' | 'Medium' | 'Heavy'

export interface TeamBudget {
  /** tasks in one full run of the team's plan · one per step */
  credits: number
  /** the same run in dollars, at the model's own published rate */
  usd: number
  tier: BudgetTier
  /** how many apps the crew can reach (each is free to connect) */
  apps: number
}

const tierFor = (tasks: number): BudgetTier =>
  tasks <= 3 ? 'Light' : tasks <= 5 ? 'Medium' : 'Heavy'

/** Round to something a person reads without effort: $0.08, $0.15, $1.20. */
export function usdLabel(usd: number): string {
  if (usd < 0.01) return '<$0.01'
  if (usd < 1) return `$${usd.toFixed(2)}`
  return `$${usd.toFixed(2).replace(/\.00$/, '')}`
}

export function teamBudget(a: Archetype, appCount: number): TeamBudget {
  const tasks = Math.max(1, a.loop.length)
  return { credits: tasks, usd: tasks * CREDIT_USD, tier: tierFor(tasks), apps: appCount }
}

/** The combined budget for a whole selection of teams. */
export function totalBudget(list: TeamBudget[]): { credits: number; usd: number; apps: number } {
  return {
    credits: list.reduce((n, b) => n + b.credits, 0),
    usd: list.reduce((n, b) => n + b.usd, 0),
    apps: list.reduce((n, b) => n + b.apps, 0),
  }
}
