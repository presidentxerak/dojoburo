// ---------------------------------------------------------------------------
// Character roster. Each agent is a wild "kind" (alien, ninja, robot, skeleton,
// goldorak mecha, monster…) with its own head, body and colors. The animated
// ASCII expression is drawn ON TOP of the head by <Character/> — the avatar art
// itself carries NO eyes/mouth.
// ---------------------------------------------------------------------------

export type Kind =
  | 'human'
  | 'goldorak'
  | 'ninja'
  | 'robot'
  | 'alien'
  | 'cat'
  | 'skeleton'
  | 'wizard'
  | 'monster'
  | 'cyborg'
  | 'slime'
  | 'vampire'

export interface Character {
  kind: Kind
  face: string // head material colour
  outfit: string // torso
  outfit2: string // collar / accent
  extra: string // horns / hat / hair / antenna accent
}

export const CHARACTERS: Record<string, Character> = {
  // Ava — CEO: golden Goldorak-style mecha (the leader shines).
  ava: { kind: 'goldorak', face: '#c9d2de', outfit: '#f4b400', outfit2: '#b3141d', extra: '#d8232a' },
  // Rex — CTO: ninja.
  rex: { kind: 'ninja', face: '#e7b184', outfit: '#2f80ed', outfit2: '#0b3b73', extra: '#12203a' },
  // Otto — DevOps: boxy robot.
  otto: { kind: 'robot', face: '#b7c0cc', outfit: '#22a35a', outfit2: '#0f5a2f', extra: '#4be08a' },
  // Fin — CFO: little green alien treasurer.
  fin: { kind: 'alien', face: '#8fdc7a', outfit: '#7c5cdf', outfit2: '#efe6ff', extra: '#d6ff8f' },
  // Mia — CMO: cat.
  mia: { kind: 'cat', face: '#f3cbab', outfit: '#f2617a', outfit2: '#7a1730', extra: '#3a2a20' },
  // Sol — Sales: cool skeleton with shades vibe.
  sol: { kind: 'skeleton', face: '#eef0f2', outfit: '#f2843b', outfit2: '#7a3a10', extra: '#c9ccd2' },
  // Pia — PM: wizard planning the roadmap.
  pia: { kind: 'wizard', face: '#eec3a0', outfit: '#17b8a6', outfit2: '#0a4f48', extra: '#123a63' },
  // Dex — Designer: colourful monster.
  dex: { kind: 'monster', face: '#b06cf0', outfit: '#8b2ff2', outfit2: '#3a1466', extra: '#ffe08a' },
  // Ada — Data: cyborg (half metal, visor).
  ada: { kind: 'cyborg', face: '#e6b98f', outfit: '#1aa0e6', outfit2: '#0a5a86', extra: '#b7c0cc' },
  // Hana — HR: friendly purple alien.
  hana: { kind: 'alien', face: '#c79bf0', outfit: '#2fce88', outfit2: '#0f5a3a', extra: '#ffd23b' },
  // Sam — Support: slime blob.
  sam: { kind: 'slime', face: '#5ad1c0', outfit: '#5aa2f5', outfit2: '#14345f', extra: '#c9fff5' },
  // Lex — Legal: vampire.
  lex: { kind: 'vampire', face: '#e6c6a0', outfit: '#3a3140', outfit2: '#8a1420', extra: '#141118' },
}

// The player-hero: a human founder in a red hoodie.
export const HERO_CHARACTER: Character = {
  kind: 'human',
  face: '#eab98c',
  outfit: '#e23b57',
  outfit2: '#ffd23b',
  extra: '#2a1d12',
}
