// ---------------------------------------------------------------------------
// Banter between the hero (le fondateur) and an agent while a task runs.
// A line is { who: 'hero' | 'agent', text }. getBanter() returns a short
// exchange, flavoured by the agent's department when possible.
// ---------------------------------------------------------------------------
import { AGENT_BY_ID } from './agents'

export interface Line {
  who: 'hero' | 'agent'
  text: string
}

const GENERIC: Line[][] = [
  [
    { who: 'hero', text: 'Alors, ça avance ?' },
    { who: 'agent', text: 'Toujours ! Enfin… presque.' },
    { who: 'hero', text: "T'inquiète, je crois en toi 💪" },
  ],
  [
    { who: 'hero', text: 'Un café pendant que ça tourne ?' },
    { who: 'agent', text: 'Je carbure déjà au XRP ⚡' },
  ],
  [
    { who: 'hero', text: 'Combien de temps encore ?' },
    { who: 'agent', text: "42 secondes. Ou 42 minutes. Suspense." },
    { who: 'hero', text: '😅' },
  ],
  [
    { who: 'hero', text: "C'est en prod, ça ?" },
    { who: 'agent', text: '“Ça marche sur mon ledger” 😎' },
  ],
]

const BY_DEPT: Record<string, Line[][]> = {
  Tech: [
    [
      { who: 'hero', text: 'Pas trop de bugs ?' },
      { who: 'agent', text: "Ce ne sont pas des bugs, ce sont des features." },
    ],
    [
      { who: 'hero', text: 'On refactore un jour ?' },
      { who: 'agent', text: 'Ajouté au backlog… ligne 9001.' },
    ],
  ],
  Finance: [
    [
      { who: 'hero', text: 'Le burn-rate ?' },
      { who: 'agent', text: 'Sous contrôle. Chaque drop compte 💧' },
    ],
    [
      { who: 'hero', text: 'On est riches ?' },
      { who: 'agent', text: 'On est… liquides. En XRP.' },
    ],
  ],
  Growth: [
    [
      { who: 'hero', text: 'Ça buzz ?' },
      { who: 'agent', text: 'On est trending dans mon cœur ❤️' },
    ],
    [
      { who: 'hero', text: 'Des leads ?' },
      { who: 'agent', text: "Plein ! Enfin, un. Mais un bon." },
    ],
  ],
  Produit: [
    [
      { who: 'hero', text: 'Les users vont aimer ?' },
      { who: 'agent', text: "Ils vont A-DO-RER. Ou pivoter." },
    ],
  ],
  People: [
    [
      { who: 'hero', text: 'Le moral des troupes ?' },
      { who: 'agent', text: 'Au top ! Regarde ces sourires ASCII 😄' },
    ],
  ],
  Ops: [
    [
      { who: 'hero', text: "Tout tient debout ?" },
      { who: 'agent', text: 'Uptime 99,9%. Le 0,1%, c’est pour le café.' },
    ],
  ],
  Direction: [
    [
      { who: 'hero', text: 'On garde le cap ?' },
      { who: 'agent', text: 'Vision claire, exécution nette. On y va !' },
    ],
  ],
}

export function getBanter(agentId: string): Line[] {
  const dept = AGENT_BY_ID[agentId]?.department
  const pool = [...GENERIC, ...(dept ? BY_DEPT[dept] ?? [] : [])]
  return pool[Math.floor(Math.random() * pool.length)]
}
