// ---------------------------------------------------------------------------
// Character roster. Each agent is a wild "kind" (alien, ninja, robot, skeleton,
// goldorak mecha, monster…) with its own head, full body and colors. The
// animated ASCII expression is drawn ON TOP of the head by <Character/> · the
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
  | 'octopus'
  | 'monitor'
  // second wave · animals, memes & abstracts
  | 'poodle'
  | 'rabbit'
  | 'frog'
  | 'duck'
  | 'ghost'
  | 'godzilla'
  | 'bear'
  | 'chicken'
  | 'bibendum'
  | 'jellyfish'
  | 'geo'
  | 'penguin'
  | 'panda'
  | 'dragon'
  | 'mushroom'
  // third wave · heroes & characters
  | 'knight'
  | 'mage'
  | 'madscientist'

export interface Character {
  kind: Kind
  face: string // head material colour
  outfit: string // torso
  outfit2: string // collar / accent
  pants: string // legs
  extra: string // horns / hat / hair / antenna accent
  /** force a specific head accessory (bowler, tophat, shades…) instead of the
   *  deterministic ~40% auto-pick. Used by the panda skin set. */
  acc?: string
}

// Les douze de l'équipe · REPEINTS DANS LES COULEURS DU DOJO.
//
// Ils portaient la palette d'avant : jaune signal, bleu roi, magenta, violet
// électrique. Elle tenait quand la salle était elle-même colorée ; dans une
// salle de tatami et de washi, ce sont douze taches qui se disputent l'œil.
//
// Chacun reçoit l'une des dix écoles (voir data/skins · SCHOOLS), et la règle
// du kit s'applique ici comme ailleurs : fourrure sourde, vêtement saturé. Ce
// qui les distingue reste ce qui les distinguait — l'espèce d'abord, le
// vêtement ensuite — mais ils appartiennent enfin au même lieu.
export const CHARACTERS: Record<string, Character> = {
  ava: { kind: 'goldorak', face: '#cfc8ba', outfit: '#5b6470', outfit2: '#414952', pants: '#6d7783', extra: '#c4462f' },
  rex: { kind: 'ninja', face: '#e9e4da', outfit: '#2b3640', outfit2: '#1b222a', pants: '#3f4a55', extra: '#c9a227' },
  otto: { kind: 'robot', face: '#7e7d75', outfit: '#23262e', outfit2: '#14161c', pants: '#2e3138', extra: '#b07d2a' },
  fin: { kind: 'alien', face: '#cfd8bc', outfit: '#46603a', outfit2: '#31462a', pants: '#5b7a3e', extra: '#c9a227' },
  mia: { kind: 'cat', face: '#e8d8bc', outfit: '#8c6644', outfit2: '#5d4230', pants: '#a8784f', extra: '#6b7f4a' },
  sol: { kind: 'octopus', face: '#e0c4c0', outfit: '#8c3b2a', outfit2: '#5e2419', pants: '#a8503a', extra: '#d6c48a' },
  pia: { kind: 'wizard', face: '#c4d2d8', outfit: '#1f3448', outfit2: '#162534', pants: '#2e4a6b', extra: '#d8cfa4' },
  dex: { kind: 'monster', face: '#f0dcd8', outfit: '#8c4a55', outfit2: '#6b353e', pants: '#a86068', extra: '#e7a0a8' },
  ada: { kind: 'monitor', face: '#f2ece0', outfit: '#a8a89c', outfit2: '#7e7d75', pants: '#cfc8ba', extra: '#2e4a6b' },
  hana: { kind: 'alien', face: '#d9a877', outfit: '#6b4a2a', outfit2: '#4a331c', pants: '#5d4230', extra: '#c4462f' },
  sam: { kind: 'slime', face: '#bfd0c4', outfit: '#46603a', outfit2: '#2f4229', pants: '#5b7a3e', extra: '#d6d2a8' },
  lex: { kind: 'vampire', face: '#cfc8ba', outfit: '#2b3640', outfit2: '#8c3b2a', pants: '#23262e', extra: '#5e2419' },
}

// Le fondateur · un humain en veste indigo. Le sweat rouge vif et le jaune
// d'or juraient avec le tatami, et c'est LE personnage qu'on voit le plus.
export const HERO_CHARACTER: Character = {
  kind: 'human',
  face: '#e8d8bc',
  outfit: '#1f3448',
  outfit2: '#c4462f',
  pants: '#2e4a6b',
  extra: '#c9a227',
}
