// ---------------------------------------------------------------------------
// Character roster. Each agent is a wild "kind" (alien, ninja, robot, skeleton,
// goldorak mecha, monster…) with its own head, full body and colors. The
// animated ASCII expression is drawn ON TOP of the head by <Character/> — the
// avatar art itself carries NO eyes/mouth.
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
  pants: string // legs
  extra: string // horns / hat / hair / antenna accent
}

export const CHARACTERS: Record<string, Character> = {
  ava: { kind: 'goldorak', face: '#c9d2de', outfit: '#f4b400', outfit2: '#b3141d', pants: '#8b93a1', extra: '#d8232a' },
  rex: { kind: 'ninja', face: '#e7b184', outfit: '#2f80ed', outfit2: '#0b3b73', pants: '#14203a', extra: '#12203a' },
  otto: { kind: 'robot', face: '#b7c0cc', outfit: '#22a35a', outfit2: '#0f5a2f', pants: '#5b6470', extra: '#4be08a' },
  fin: { kind: 'alien', face: '#8fdc7a', outfit: '#7c5cdf', outfit2: '#efe6ff', pants: '#4a3a86', extra: '#d6ff8f' },
  mia: { kind: 'cat', face: '#f3cbab', outfit: '#f2617a', outfit2: '#7a1730', pants: '#3a2a20', extra: '#3a2a20' },
  sol: { kind: 'skeleton', face: '#eef0f2', outfit: '#f2843b', outfit2: '#7a3a10', pants: '#4a4d55', extra: '#c9ccd2' },
  pia: { kind: 'wizard', face: '#eec3a0', outfit: '#17b8a6', outfit2: '#0a4f48', pants: '#0d3b52', extra: '#123a63' },
  dex: { kind: 'monster', face: '#b06cf0', outfit: '#8b2ff2', outfit2: '#3a1466', pants: '#2a0f4a', extra: '#ffe08a' },
  ada: { kind: 'cyborg', face: '#e6b98f', outfit: '#1aa0e6', outfit2: '#0a5a86', pants: '#0d4a66', extra: '#b7c0cc' },
  hana: { kind: 'alien', face: '#c79bf0', outfit: '#2fce88', outfit2: '#0f5a3a', pants: '#0f5a3a', extra: '#ffd23b' },
  sam: { kind: 'slime', face: '#5ad1c0', outfit: '#5aa2f5', outfit2: '#14345f', pants: '#2fae9c', extra: '#c9fff5' },
  lex: { kind: 'vampire', face: '#e6c6a0', outfit: '#3a3140', outfit2: '#8a1420', pants: '#22202a', extra: '#141118' },
}

// The player-hero: a human founder in a red hoodie.
export const HERO_CHARACTER: Character = {
  kind: 'human',
  face: '#eab98c',
  outfit: '#e23b57',
  outfit2: '#ffd23b',
  pants: '#2b3550',
  extra: '#2a1d12',
}
