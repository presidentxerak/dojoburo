// LES DIPLÔMES · ce que le maître reconnaît.
//
// Un centre de formation qui ne reconnaît rien laisse l'élève sans repère : il
// ne sait ni où il en est, ni quand il a fini quelque chose. Mais un diplôme
// qu'on obtient en cliquant sur « suivant » ne vaut rien non plus, et tout le
// monde le sait au premier coup d'oeil.
//
// La règle retenue est donc simple et exigeante : on ne reconnaît que des
// parcours TERMINÉS DE BOUT EN BOUT. Quatre étapes commencées sur quatre
// agents différents ne valent aucun diplôme ; un agent construit du début à la
// fin en vaut un. C'est l'inverse de ce qui donne envie de cliquer, et c'est
// exactement pour ça que c'est la bonne règle.
//
// Ils ne sont ni vendus, ni certifiés, ni opposables à un employeur. Ce sont
// des repères de progression, et la page le dit plutôt que de laisser croire
// autre chose.
import { USE_CASE_COUNT } from '../data/agentUseCases'

export interface Diploma {
  id: string
  title: string
  /** comment on l'obtient, avant de l'avoir */
  how: string
  /** ce qu'il dit, une fois obtenu */
  awarded: string
  /** combien d'agents terminés il demande */
  needs: number
}

export const DIPLOMAS: Diploma[] = [
  {
    id: 'first',
    title: 'First agent',
    needs: 1,
    how: 'Build one agent all the way through, every step of its path.',
    awarded: 'You took one shape of problem from a blank page to a file that runs elsewhere.',
  },
  {
    id: 'three',
    title: 'Three shapes',
    needs: 3,
    how: 'Finish three different agents. Different shapes, not three attempts at one.',
    awarded: 'You have seen three ways an agent fails, which is three more than most people who ship one.',
  },
  {
    id: 'half',
    title: 'Half the room',
    needs: Math.ceil(USE_CASE_COUNT / 2),
    how: `Finish ${Math.ceil(USE_CASE_COUNT / 2)} of the ${USE_CASE_COUNT} agents in the dojo.`,
    awarded: 'Half the room is awake because of you. You can now tell which shape a new problem is.',
  },
  {
    id: 'all',
    title: 'The whole dojo',
    needs: USE_CASE_COUNT,
    how: `Finish all ${USE_CASE_COUNT}. The master does not hand this one out twice.`,
    awarded: 'Every agent in this room is awake. There is nothing left here that you have not built.',
  },
]

export function diplomaFor(builtAgents: number, stepsDone: number): { earned: string[]; next: Diploma | null } {
  const earned = DIPLOMAS.filter((d) => builtAgents >= d.needs).map((d) => d.id)
  const next = DIPLOMAS.find((d) => builtAgents < d.needs) ?? null
  // `stepsDone` n'entre dans aucun seuil, et c'est délibéré : il sert à
  // afficher un encouragement, jamais à décerner. Compter des étapes éparses
  // reviendrait à récompenser le fait de commencer, ce qui est précisément ce
  // que personne n'a de mal à faire.
  void stepsDone
  return { earned, next }
}
