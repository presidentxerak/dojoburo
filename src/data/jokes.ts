// ---------------------------------------------------------------------------
// Banter between the hero (the founder) and an agent while a task runs.
// A line is { who: 'hero' | 'agent', text }. getBanter() returns a short
// exchange, flavoured by the agent's department when possible. No emoji.
// ---------------------------------------------------------------------------
import { AGENT_BY_ID } from './agents'

export interface Line {
  who: 'hero' | 'agent'
  text: string
}

const GENERIC: Line[][] = [
  [
    { who: 'hero', text: 'So, how is it going?' },
    { who: 'agent', text: 'Always shipping. Well... almost.' },
    { who: 'hero', text: "Don't worry, I believe in you." },
  ],
  [
    { who: 'hero', text: 'Coffee while it runs?' },
    { who: 'agent', text: 'I already run on XRP.' },
  ],
  [
    { who: 'hero', text: 'How much longer?' },
    { who: 'agent', text: '42 seconds. Or 42 minutes. Suspense.' },
    { who: 'hero', text: 'Classic.' },
  ],
  [
    { who: 'hero', text: 'Is this in prod?' },
    { who: 'agent', text: '"Works on my ledger."' },
  ],
  [
    { who: 'hero', text: 'Any blockers?' },
    { who: 'agent', text: 'Only the laws of physics.' },
  ],
  [
    { who: 'hero', text: 'Remember to take a break.' },
    { who: 'agent', text: 'Breaks are for validated ledgers.' },
  ],
  [
    { who: 'hero', text: 'You are crushing it.' },
    { who: 'agent', text: 'Team effort. Mostly me, though.' },
  ],
]

const BY_DEPT: Record<string, Line[][]> = {
  Engineering: [
    [
      { who: 'hero', text: 'Many bugs?' },
      { who: 'agent', text: "They're not bugs, they're features." },
    ],
    [
      { who: 'hero', text: 'Refactor someday?' },
      { who: 'agent', text: 'Added to the backlog. Line 9001.' },
    ],
    [
      { who: 'hero', text: 'Tests green?' },
      { who: 'agent', text: 'Green enough to ship.' },
    ],
  ],
  Finance: [
    [
      { who: 'hero', text: 'Burn rate?' },
      { who: 'agent', text: 'Under control. Every drop counts.' },
    ],
    [
      { who: 'hero', text: 'Are we rich?' },
      { who: 'agent', text: "We're... liquid. In XRP." },
    ],
    [
      { who: 'hero', text: 'Runway?' },
      { who: 'agent', text: 'Long enough to be dangerous.' },
    ],
  ],
  Growth: [
    [
      { who: 'hero', text: 'Are we trending?' },
      { who: 'agent', text: 'Trending in my heart, at least.' },
    ],
    [
      { who: 'hero', text: 'Any leads?' },
      { who: 'agent', text: 'Plenty. Well, one. But a good one.' },
    ],
    [
      { who: 'hero', text: 'Pipeline looking good?' },
      { who: 'agent', text: 'Fatter than the roadmap.' },
    ],
  ],
  Product: [
    [
      { who: 'hero', text: 'Will users love it?' },
      { who: 'agent', text: "They'll ADORE it. Or we pivot." },
    ],
    [
      { who: 'hero', text: 'Scope creep?' },
      { who: 'agent', text: 'I prefer "emergent vision".' },
    ],
  ],
  People: [
    [
      { who: 'hero', text: 'Team morale?' },
      { who: 'agent', text: 'Peak. Look at those ASCII smiles.' },
    ],
    [
      { who: 'hero', text: 'Hiring going well?' },
      { who: 'agent', text: 'Only A-players and friendly aliens.' },
    ],
  ],
  Ops: [
    [
      { who: 'hero', text: 'Still standing?' },
      { who: 'agent', text: 'Uptime 99.9%. The 0.1% is coffee.' },
    ],
    [
      { who: 'hero', text: 'Everything stable?' },
      { who: 'agent', text: 'Stable like a three-legged desk.' },
    ],
  ],
  Leadership: [
    [
      { who: 'hero', text: 'Staying on course?' },
      { who: 'agent', text: 'Clear vision, crisp execution. Onward.' },
    ],
    [
      { who: 'hero', text: 'Big picture?' },
      { who: 'agent', text: 'World domination. Politely.' },
    ],
  ],
}

export function getBanter(agentId: string): Line[] {
  const dept = AGENT_BY_ID[agentId]?.department
  const pool = [...GENERIC, ...(dept ? BY_DEPT[dept] ?? [] : [])]
  return pool[Math.floor(Math.random() * pool.length)]
}
