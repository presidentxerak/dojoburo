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
  // second wave
  'poodle', 'rabbit', 'frog', 'duck', 'ghost', 'godzilla', 'bear', 'chicken',
  'bibendum', 'jellyfish', 'geo', 'penguin', 'panda', 'dragon', 'mushroom',
]

const KIND_LABEL: Record<Kind, string> = {
  robot: 'Bot', ninja: 'Ninja', alien: 'Alien', cat: 'Cat', wizard: 'Wizard',
  monster: 'Monster', cyborg: 'Cyborg', slime: 'Slime', vampire: 'Vampire',
  skeleton: 'Skelly', octopus: 'Octo', goldorak: 'Mecha', human: 'Human', monitor: 'Terminal',
  poodle: 'Poodle', rabbit: 'Bunny', frog: 'Frog', duck: 'Duck', ghost: 'Ghost',
  godzilla: 'Kaiju', bear: 'Bear', chicken: 'Chick', bibendum: 'Puffy', jellyfish: 'Jelly',
  geo: 'Prism', penguin: 'Penguin', panda: 'Panda', dragon: 'Dragon', mushroom: 'Shroom',
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
  ['Bubblegum', '#fff2fa', '#ff7ec8', '#ffd0ec', '#c94f9a', '#8be0ff'],
  ['Vapor', '#f0eaff', '#8a6cff', '#ff6ad5', '#2a2350', '#5ffbf1'],
  ['Emerald', '#e9fff2', '#12b36a', '#0a6e42', '#0e3a28', '#7bffc0'],
  ['Rose', '#fff0f0', '#e35d72', '#a52a44', '#5a2230', '#ffc2cf'],
  ['Cobalt', '#e6efff', '#2f5fe0', '#12306e', '#0d1c3a', '#7fb0ff'],
  ['Peach', '#fff3ea', '#ff9e6b', '#e0663a', '#7a3a24', '#ffd9a0'],
  ['Onyx', '#e4e6ec', '#2a2d38', '#14161f', '#0c0d14', '#e0c14a'],
  ['Citrus', '#fbffe6', '#bcd42c', '#7a9410', '#3a4410', '#fff06a'],
  ['Lilac', '#f6efff', '#b07eff', '#7a4ad0', '#3a2a5a', '#e6c6ff'],
  ['Coral', '#fff0ec', '#ff6f61', '#c93f34', '#5a231c', '#ffd0b0'],
]

export const SKINS: Skin[] = (() => {
  const out: Skin[] = []
  THEMES.forEach(([theme, head, outfit, outfit2, pants, extra], ti) => {
    for (let k = 0; k < 6; k++) {
      const kind = KINDS[(ti * 6 + k) % KINDS.length]
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

export function skinsForTheme(theme: string): Skin[] {
  return SKINS.filter((s) => s.theme === theme)
}

/** n skins spread as widely as possible across all themes & kinds — maximally
 *  distinct, for the default HQ dojo. */
export function variedSkins(n: number): Skin[] {
  const out: Skin[] = []
  const step = SKINS.length / n
  for (let i = 0; i < n; i++) out.push(SKINS[Math.floor(i * step) % SKINS.length])
  return out
}

/** n distinct skins for a themed starter crew: the theme's own skins first
 *  (coherent palette, different creatures), then spread from other themes so
 *  no two agents ever share a skin. */
export function crewSkins(theme: string, n: number): Skin[] {
  const themed = skinsForTheme(theme)
  const others = variedSkins(SKINS.length).filter((s) => s.theme !== theme)
  const ordered = [...themed, ...others]
  return ordered.slice(0, Math.max(1, n))
}

export function kindLabel(kind: Kind): string {
  return KIND_LABEL[kind]
}
