// DOJOBURO · les types du jeu de simulation. Voir src/sim/engine.ts.
import type { Bi } from '../data/bilingual'

/** Les douze spécialistes · leurs identifiants sont ceux des cas d'usage du
 *  cours (data/agentUseCases), pour qu'un joueur qui a suivi la formation
 *  reconnaisse son équipe. */
export const SKILLS = [
  'research', 'writing', 'support', 'coding', 'analysis', 'triage',
  'extraction', 'watch', 'planning', 'tools', 'growth', 'orchestration',
] as const
export type Skill = (typeof SKILLS)[number]

/** Un brief client · voir src/sim/briefs.ts pour la bibliothèque. */
export interface Brief {
  id: string
  client: { name: string; trade: Bi }
  title: Bi
  /** ce que dit le client, une ou deux phrases */
  ask: Bi
  /** les compétences demandées, et à quel niveau */
  needs: Partial<Record<Skill, 1 | 2 | 3>>
  /** les tokens dont le travail a vraiment besoin */
  tokens: number
  /** en euros, payé si c'est réussi */
  reward: number
  /** secondes de travail au niveau 1 */
  work: number
  /** difficulté · le niveau 2 arrive au jour 2, le 3 au jour 4 */
  tier: 1 | 2 | 3
  /** la leçon · pourquoi ces spécialistes, montrée après le travail */
  tip: Bi
}
