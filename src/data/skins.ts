// 100 agent skins across 20 themes. Each skin reuses the 3D character `Kind`
// system + a Character colour set, so a skin can render both as a 2D avatar in
// the workshop and (later) directly in the 3D office.
import type { Kind, Character } from './looks'

export interface Skin extends Character {
  id: string
  name: string
  theme: string
}

const KINDS: Kind[] = [
  'robot', 'ninja', 'alien', 'cat', 'wizard', 'monster', 'cyborg', 'slime',
  'vampire', 'skeleton', 'octopus', 'goldorak', 'human', 'monitor',
]

const KIND_LABEL: Record<Kind, string> = {
  robot: 'Bot', ninja: 'Ninja', alien: 'Alien', cat: 'Cat', wizard: 'Wizard',
  monster: 'Monster', cyborg: 'Cyborg', slime: 'Slime', vampire: 'Vampire',
  skeleton: 'Skelly', octopus: 'Octo', goldorak: 'Mecha', human: 'Human', monitor: 'Terminal',
}

// [name, head, outfit, outfit2, pants, extra]
const THEMES: [string, string, string, string, string, string][] = [
  ['Neon', '#e7f7ff', '#ff2bd6', '#00e6ff', '#2a1550', '#c6ff00'],
  ['Pastel', '#fff2f7', '#ffb3c7', '#b8e0ff', '#ffe4a3', '#c8b6ff'],
  ['Retro', '#f6e7c1', '#d9603b', '#3b6ea5', '#7a4a2b', '#e8c14a'],
  ['Space', '#dfe6ff', '#3a2f7a', '#6c5ce7', '#141033', '#8ad0ff'],
  ['Forest', '#eaf6d8', '#3f7d3a', '#22503a', '#6b4a2b', '#a3e05a'],
  ['Ocean', '#e3fbff', '#0f8fb5', '#0a5a86', '#0d3b52', '#4be0d0'],
  ['Fire', '#fff0e0', '#e8442a', '#ff8a1e', '#5a1810', '#ffd23b'],
  ['Ice', '#eef8ff', '#7fbfff', '#3a80c9', '#bfe6ff', '#e8fbff'],
  ['Gold', '#fff8e0', '#caa32e', '#7a5a10', '#3a2f10', '#ffe58a'],
  ['Shadow', '#c9ccd6', '#2b2f3d', '#14161f', '#0c0d14', '#5a6272'],
  ['Candy', '#fff0f6', '#ff6fae', '#ffd166', '#8a2f57', '#8be0ff'],
  ['Cyber', '#d7fff2', '#00ffa3', '#00b3ff', '#0a1622', '#ff00a8'],
  ['Royal', '#f3e9ff', '#6a2fb5', '#c9a94a', '#2a1450', '#e6c6ff'],
  ['Toxic', '#eaffcf', '#8fdc22', '#4a8a10', '#1f2a0f', '#d6ff5a'],
  ['Sakura', '#fff0f4', '#ffb0d0', '#e05a86', '#7a3a52', '#ffd9e6'],
  ['Mono', '#f2f2f2', '#4a4a4a', '#1c1c1c', '#2e2e2e', '#9a9a9a'],
  ['Sunset', '#fff1e6', '#ff7a59', '#ffb84d', '#7a3a5a', '#ffd6a0'],
  ['Aurora', '#eafff6', '#3ad6a0', '#6c5cff', '#0f2a3a', '#a0ffe0'],
  ['Lava', '#ffe9d6', '#b8241d', '#ff5a2a', '#2a0d08', '#ffb03b'],
  ['Mint', '#effff8', '#4fd6a6', '#2f9c78', '#123a2e', '#c9fff0'],
]

export const SKINS: Skin[] = (() => {
  const out: Skin[] = []
  THEMES.forEach(([theme, head, outfit, outfit2, pants, extra], ti) => {
    for (let k = 0; k < 5; k++) {
      const kind = KINDS[(ti * 5 + k) % KINDS.length]
      out.push({
        id: `${theme.toLowerCase()}-${kind}`,
        name: `${theme} ${KIND_LABEL[kind]}`,
        theme,
        kind,
        face: head,
        outfit,
        outfit2,
        pants,
        extra,
      })
    }
  })
  return out
})()

export const SKIN_BY_ID: Record<string, Skin> = Object.fromEntries(SKINS.map((s) => [s.id, s]))
export const SKIN_THEMES: string[] = THEMES.map((t) => t[0])

export function skinById(id: string): Skin {
  return SKIN_BY_ID[id] ?? SKINS[0]
}

export function kindLabel(kind: Kind): string {
  return KIND_LABEL[kind]
}
