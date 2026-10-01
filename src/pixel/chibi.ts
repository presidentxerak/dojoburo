// LES PERSONNAGES CHIBI · générés en pixel art, au choix de l'élève.
//
// Demandé : « crée les PFP génératives en pixel art 2D dans un style chibi que
// l'utilisateur choisira (homme, femme, LGBT+, alien, robots, monstres,
// animaux, bizarres etc.) et tous les maîtres des dojos en fonction de leur
// métier ». Style : celui de la référence (grosse tête, petit corps, contour
// sombre épais, couleurs franches).
//
// UN PERSONNAGE EST UNE FICHE (ChibiSpec) · espèce, variante, peau, coiffure,
// yeux, bouche, tenue, couleurs, accessoire, pilosité, drapeau. La fiche se
// range en quelques octets (localStorage, profil, présence) et le dessin se
// refait à l'identique partout. Toutes les coiffures et toutes les tenues sont
// ouvertes à tout le monde : les présentations (homme, femme, non-binaire) ne
// sont que des points de départ, jamais des cases.
//
// La grille fait 26 × 33 pixels (contour compris) ; l'origine est décalée de
// deux lignes pour laisser monter chapeaux, chignons et oreilles.
import { Grid, shade, rng } from './grid'

export const SPECIES = ['human', 'alien', 'robot', 'monster', 'animal', 'weird'] as const
export type Species = (typeof SPECIES)[number]

export const VARIANTS: Record<Species, string[]> = {
  human: ['human'],
  alien: ['antenna', 'bigeyes'],
  robot: ['visor', 'screen'],
  monster: ['horns', 'cyclops'],
  animal: ['cat', 'bear', 'bunny', 'fox', 'frog', 'panda'],
  weird: ['ghost', 'slime', 'mushroom'],
}

export const HAIRS = ['short', 'bob', 'long', 'bun', 'ponytail', 'curly', 'mohawk', 'spiky', 'buzz', 'none'] as const
export const EYES = ['dot', 'big', 'happy', 'sleepy', 'wink'] as const
export const MOUTHS = ['smile', 'open', 'flat', 'cat', 'fangs'] as const
export const OUTFITS = ['tee', 'hoodie', 'suit', 'kimono', 'dress', 'labcoat', 'overalls'] as const
export const ACCESSORIES = ['none', 'glasses', 'sunglasses', 'headphones', 'cap', 'beanie', 'crown', 'bow', 'flower', 'beret', 'wizard', 'goggles'] as const
export const FACIALS = ['none', 'beard', 'mustache'] as const
export const PRIDES = ['none', 'rainbow', 'trans', 'bi', 'nonbinary', 'lesbian', 'pan', 'ace'] as const

export type Hair = (typeof HAIRS)[number]
export type Eyes = (typeof EYES)[number]
export type Mouth = (typeof MOUTHS)[number]
export type Outfit = (typeof OUTFITS)[number]
export type Accessory = (typeof ACCESSORIES)[number]
export type Facial = (typeof FACIALS)[number]
export type Pride = (typeof PRIDES)[number]

export interface ChibiSpec {
  species: Species
  variant: string
  skin: string
  hair: Hair
  hairColor: string
  eyes: Eyes
  mouth: Mouth
  outfit: Outfit
  outfitColor: string
  accent: string
  pants: string
  accessory: Accessory
  facial: Facial
  pride: Pride
}

export const SKINS = ['#ffe0c8', '#f6c9a3', '#e7ad82', '#c98a5e', '#9b6440', '#6b4128']
export const ALIEN_SKINS = ['#8ee07a', '#b28cff', '#6fd6e8', '#ff9fd2']
export const MONSTER_SKINS = ['#9b6bff', '#ff8a4c', '#4fd1a5', '#ff5c7a']
export const HAIR_COLORS = ['#2b1d16', '#5a3a22', '#b0703a', '#f2c94c', '#e9e4da', '#ff5fa2', '#4aa8ff', '#7ee08a', '#a86bff', '#ff6b3d']
export const OUTFIT_COLORS = ['#7c3aed', '#ef4444', '#f59e0b', '#22c55e', '#0ea5e9', '#ec4899', '#1e293b', '#f5f5f4', '#14b8a6', '#a16207']
export const PANTS = ['#1e1b4b', '#334155', '#3f3f46', '#78350f', '#1e3a8a']

const INK = '#1b1530'
const WHITE = '#ffffff'
const BLUSH = '#f4a6b6'
const MOUTH_C = '#5a2a3a'

const ANIMAL_SKIN: Record<string, string> = { cat: '#f2a65a', bear: '#a0703f', bunny: '#f5efe6', fox: '#f07b2b', frog: '#7bcf5a', panda: '#f7f7f2' }
const WEIRD_SKIN: Record<string, string> = { ghost: '#eef0ff', slime: '#7ce0c3', mushroom: '#f6dcc0' }

/** La couleur de peau réellement peinte · les animaux et les bizarres ont la
 *  leur, choisie par la variante. */
export function skinOf(s: ChibiSpec): string {
  if (s.species === 'animal') return ANIMAL_SKIN[s.variant] ?? s.skin
  if (s.species === 'weird') return WEIRD_SKIN[s.variant] ?? s.skin
  if (s.species === 'robot') return '#b8c0d4'
  return s.skin
}

const PRIDE_PIXELS: Record<Exclude<Pride, 'none'>, string[]> = {
  rainbow: ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787'],
  trans: ['#5bcefa', '#f5a9b8', '#ffffff', '#ffffff', '#f5a9b8', '#5bcefa'],
  bi: ['#d60270', '#d60270', '#9b4f96', '#9b4f96', '#0038a8', '#0038a8'],
  nonbinary: ['#fcf434', '#ffffff', '#9c59d1', '#9c59d1', '#2c2c2c', '#fcf434'],
  lesbian: ['#d52d00', '#ff9a56', '#ffffff', '#ffffff', '#d362a4', '#a30262'],
  pan: ['#ff218c', '#ff218c', '#ffd800', '#ffd800', '#21b1ff', '#21b1ff'],
  ace: ['#000000', '#a3a3a3', '#ffffff', '#ffffff', '#800080', '#800080'],
}

/* ------------------------------------------------------------------ */
/* Le dessin                                                           */
/* ------------------------------------------------------------------ */

export const CHIBI_W = 26
export const CHIBI_H = 33

function headShape(g: Grid, c: string, boxy = false) {
  if (boxy) {
    g.round(5, 4, 16, 13, c)
    return
  }
  g.hline(7, 4, 12, c)
  g.hline(6, 5, 14, c)
  g.rect(5, 6, 16, 9, c)
  g.hline(6, 15, 14, c)
  g.hline(7, 16, 12, c)
}

function headShade(g: Grid, c: string) {
  const dark = shade(c, -0.14)
  const light = shade(c, 0.35)
  for (let y = 6; y <= 14; y++) g.over(20, y, dark)
  g.hline(7, 16, 12, dark)
  g.over(19, 15, dark)
  g.set(7, 6, light); g.set(8, 5, light); g.set(7, 7, light)
}

function eyes(g: Grid, style: Eyes, color = INK) {
  const L = 9, R = 15, Y = 9
  const pair = (fn: (x: number) => void) => { fn(L); fn(R) }
  if (style === 'dot') pair((x) => { g.rect(x, Y, 2, 2, color); g.set(x, Y, WHITE) })
  else if (style === 'big') pair((x) => { g.rect(x, Y - 1, 2, 3, color); g.set(x, Y - 1, WHITE) })
  else if (style === 'happy') pair((x) => { g.set(x - 1, Y + 1, color); g.set(x, Y, color); g.set(x + 1, Y, color); g.set(x + 2, Y + 1, color) })
  else if (style === 'sleepy') pair((x) => { g.hline(x - 1, Y + 1, 3, color) })
  else if (style === 'wink') { g.rect(L, Y, 2, 2, color); g.set(L, Y, WHITE); g.hline(R - 1, Y + 1, 3, color) }
}

function mouth(g: Grid, style: Mouth) {
  if (style === 'smile') { g.set(11, 12, MOUTH_C); g.hline(12, 13, 2, MOUTH_C); g.set(14, 12, MOUTH_C) }
  else if (style === 'open') { g.rect(12, 12, 2, 2, MOUTH_C); g.set(12, 13, '#e26d7a') }
  else if (style === 'flat') g.hline(11, 13, 4, MOUTH_C)
  else if (style === 'cat') { g.set(11, 12, MOUTH_C); g.set(12, 13, MOUTH_C); g.set(13, 12, MOUTH_C); g.set(14, 13, MOUTH_C) }
  else if (style === 'fangs') { g.hline(11, 12, 4, MOUTH_C); g.set(11, 13, WHITE); g.set(14, 13, WHITE) }
}

function blush(g: Grid) {
  g.hline(7, 11, 2, BLUSH)
  g.hline(17, 11, 2, BLUSH)
}

function hair(g: Grid, style: Hair, c: string) {
  if (style === 'none') return
  const hl = shade(c, 0.3)
  const cap = () => { g.hline(7, 2, 12, c); g.rect(6, 3, 14, 3, c); g.rect(5, 5, 16, 2, c) }
  if (style === 'buzz') { g.hline(7, 3, 12, c); g.rect(6, 4, 14, 2, c); g.set(8, 4, hl); return }
  if (style === 'curly') {
    g.rect(4, 1, 18, 7, c); g.hline(6, 0, 14, c); g.rect(3, 3, 20, 10, c)
    for (const [x, y] of [[5, 1], [9, 0], [14, 0], [19, 1], [3, 4], [22, 4]]) g.set(x, y, null)
    g.rect(6, 7, 14, 1, c)
    g.set(7, 2, hl); g.set(12, 1, hl); g.set(17, 2, hl)
    // le visage dégagé sous les boucles
    g.rect(6, 8, 14, 5, null)
    return
  }
  if (style === 'mohawk') { g.rect(11, 0, 4, 6, c); g.set(12, 1, hl); return }
  if (style === 'spiky') {
    cap()
    for (const x of [6, 9, 12, 15, 18]) { g.set(x, 1, c); g.set(x + 1, 1, c); g.set(x, 0, c) }
    g.rect(6, 7, 3, 1, c); g.rect(17, 7, 3, 1, c)
    g.set(8, 3, hl); g.set(13, 2, hl)
    return
  }
  cap()
  g.set(8, 3, hl); g.set(9, 3, hl); g.set(13, 2, hl)
  // la frange
  g.rect(6, 7, 6, 1, c); g.rect(14, 7, 5, 1, c); g.set(6, 8, c); g.set(19, 8, c)
  if (style === 'short') { g.rect(5, 7, 1, 3, c); g.rect(20, 7, 1, 3, c) }
  if (style === 'bob' || style === 'long') {
    const bottom = style === 'bob' ? 15 : 21
    g.rect(3, 5, 3, bottom - 5, c); g.rect(20, 5, 3, bottom - 5, c)
    g.vline(4, 6, 3, hl)
  }
  if (style === 'bun') { g.round(10, -1, 6, 4, c); g.set(11, 0, hl); g.rect(5, 7, 1, 3, c); g.rect(20, 7, 1, 3, c) }
  if (style === 'ponytail') { g.rect(20, 7, 1, 3, c); g.rect(21, 5, 2, 11, c); g.rect(5, 7, 1, 3, c); g.set(21, 6, hl) }
}

function facialHair(g: Grid, f: Facial, c: string) {
  if (f === 'beard') {
    g.rect(6, 12, 14, 4, c); g.rect(8, 16, 10, 2, c); g.rect(10, 18, 6, 1, c)
    g.rect(11, 12, 4, 2, null)
    g.hline(11, 12, 4, MOUTH_C)
    g.hline(9, 11, 8, c)
  } else if (f === 'mustache') {
    g.hline(9, 11, 3, c); g.hline(14, 11, 3, c); g.hline(10, 12, 2, c); g.hline(14, 12, 2, c)
  }
}

function accessory(g: Grid, a: Accessory, accent: string) {
  if (a === 'none') return
  if (a === 'glasses') {
    for (const x of [8, 14]) { g.hline(x, 8, 4, INK); g.hline(x, 11, 4, INK); g.vline(x, 8, 4, INK); g.vline(x + 3, 8, 4, INK) }
    g.hline(12, 9, 2, INK)
  } else if (a === 'sunglasses') {
    g.rect(8, 8, 4, 3, INK); g.rect(14, 8, 4, 3, INK); g.hline(12, 8, 2, INK); g.hline(6, 8, 2, INK); g.hline(18, 8, 2, INK)
    g.set(9, 8, '#8fd3ff'); g.set(15, 8, '#8fd3ff')
  } else if (a === 'headphones') {
    g.hline(7, 1, 12, accent); g.set(6, 2, accent); g.set(19, 2, accent); g.vline(5, 3, 4, accent); g.vline(20, 3, 4, accent)
    g.rect(3, 7, 3, 5, accent); g.rect(20, 7, 3, 5, accent); g.vline(3, 8, 3, shade(accent, -0.25)); g.vline(22, 8, 3, shade(accent, -0.25))
  } else if (a === 'cap') {
    g.hline(8, 1, 10, accent); g.rect(6, 2, 14, 4, accent); g.rect(5, 6, 18, 1, shade(accent, -0.2)); g.set(12, 1, shade(accent, 0.3))
  } else if (a === 'beanie') {
    g.hline(8, 0, 10, accent); g.rect(6, 1, 14, 4, accent); g.rect(5, 5, 16, 2, shade(accent, 0.25)); g.rect(12, -1, 2, 1, WHITE)
  } else if (a === 'crown') {
    const gold = '#f7c948'
    g.rect(7, 2, 12, 2, gold); g.set(7, 1, gold); g.set(10, 0, gold); g.set(10, 1, gold); g.set(12, 1, gold); g.set(13, 0, gold); g.set(15, 1, gold); g.set(15, 0, gold); g.set(18, 1, gold)
    g.set(12, 2, '#ef4444'); g.set(9, 2, '#22c55e'); g.set(16, 2, '#3b82f6')
  } else if (a === 'bow') {
    g.rect(16, 1, 2, 3, accent); g.rect(20, 1, 2, 3, accent); g.rect(18, 2, 2, 1, shade(accent, -0.2))
  } else if (a === 'flower') {
    g.set(19, 2, '#ff8fb8'); g.set(18, 3, '#ff8fb8'); g.set(20, 3, '#ff8fb8'); g.set(19, 4, '#ff8fb8'); g.set(19, 3, '#f7c948')
  } else if (a === 'beret') {
    g.rect(6, 1, 13, 3, accent); g.hline(5, 3, 15, accent); g.set(11, 0, accent); g.set(8, 1, shade(accent, 0.3))
  } else if (a === 'wizard') {
    const c = accent
    g.rect(11, -1, 3, 1, c); g.rect(10, 0, 5, 1, c); g.rect(9, 1, 7, 1, c); g.rect(8, 2, 10, 1, c); g.rect(7, 3, 12, 1, c)
    g.rect(3, 4, 20, 1, shade(c, -0.25))
    g.set(12, 1, '#f7c948'); g.set(14, 2, '#f7c948')
  } else if (a === 'goggles') {
    g.hline(5, 4, 16, '#3f3f46'); g.round(8, 3, 4, 3, '#7dd3fc'); g.round(14, 3, 4, 3, '#7dd3fc')
  }
}

function pridePin(g: Grid, p: Pride) {
  if (p === 'none') return
  const px = PRIDE_PIXELS[p]
  for (let i = 0; i < 6; i++) g.set(9 + (i % 3), 18 + Math.floor(i / 3), px[i])
}

function outfit(g: Grid, s: ChibiSpec, skin: string) {
  const c = s.outfitColor
  const dk = shade(c, -0.22)
  const ac = s.accent
  const legs = () => { g.rect(9, 24, 3, 4, s.pants); g.rect(14, 24, 3, 4, s.pants); g.rect(8, 28, 4, 1, INK); g.rect(14, 28, 4, 1, INK); g.hline(9, 27, 3, shade(s.pants, -0.2)); g.hline(14, 27, 3, shade(s.pants, -0.2)) }
  const arms = (sleeveRows: number, color = c) => {
    g.rect(6, 18, 2, 5, skin); g.rect(18, 18, 2, 5, skin)
    g.rect(6, 18, 2, sleeveRows, color); g.rect(18, 18, 2, sleeveRows, color)
  }
  if (s.outfit === 'dress') {
    g.rect(8, 17, 10, 5, c); g.rect(7, 22, 12, 2, c); g.rect(6, 24, 14, 2, c); g.hline(6, 25, 14, dk)
    g.rect(9, 26, 3, 2, skin); g.rect(14, 26, 3, 2, skin); g.rect(8, 28, 4, 1, INK); g.rect(14, 28, 4, 1, INK)
    arms(2)
    g.hline(8, 21, 10, ac)
    return
  }
  legs()
  if (s.outfit === 'labcoat') {
    g.rect(8, 17, 10, 7, '#f5f5f4'); g.rect(7, 22, 12, 4, '#f5f5f4'); g.rect(12, 17, 2, 6, c)
    g.vline(11, 17, 9, '#d4d4d8'); g.vline(14, 17, 9, '#d4d4d8')
    arms(4, '#f5f5f4')
    g.set(16, 19, '#3b82f6'); g.set(16, 20, '#3b82f6')
    return
  }
  g.rect(8, 17, 10, 7, c)
  g.vline(17, 18, 6, dk)
  if (s.outfit === 'tee') { arms(2); g.hline(11, 17, 4, shade(c, 0.25)) }
  if (s.outfit === 'hoodie') { arms(4); g.hline(9, 17, 8, dk); g.set(11, 18, WHITE); g.set(11, 19, WHITE); g.set(14, 18, WHITE); g.set(14, 19, WHITE); g.hline(10, 22, 6, dk) }
  if (s.outfit === 'suit') {
    arms(4)
    g.rect(11, 17, 4, 4, WHITE); g.rect(12, 18, 2, 4, ac); g.set(11, 17, dk); g.set(14, 17, dk)
  }
  if (s.outfit === 'kimono') {
    arms(4)
    g.set(10, 17, WHITE); g.set(11, 18, WHITE); g.set(12, 19, WHITE); g.set(15, 17, WHITE); g.set(14, 18, WHITE); g.set(13, 19, WHITE)
    g.hline(8, 21, 10, ac); g.set(15, 22, ac)
  }
  if (s.outfit === 'overalls') {
    arms(2, ac); g.rect(8, 17, 10, 2, ac); g.vline(9, 17, 2, c); g.vline(16, 17, 2, c); g.set(10, 20, '#f7c948'); g.set(15, 20, '#f7c948')
  }
}

/** LE DESSIN D'UN PERSONNAGE · une grille avec son contour. */
export function drawChibi(s: ChibiSpec): Grid {
  const g = new Grid(CHIBI_W, CHIBI_H, 0, 2)
  const skin = skinOf(s)

  // LES SILHOUETTES À PART · le fantôme et le slime n'ont ni bras ni jambes.
  if (s.species === 'weird' && s.variant === 'slime') {
    g.round(4, 8, 18, 20, skin); g.round(6, 5, 14, 5, skin); g.rect(3, 22, 20, 6, skin)
    g.set(7, 9, shade(skin, 0.5)); g.set(8, 8, shade(skin, 0.5)); g.vline(21, 12, 14, shade(skin, -0.15))
    g.set(4, 28, skin); g.set(20, 28, skin)
    eyes(g, s.eyes === 'sleepy' ? 'sleepy' : 'big'); blush(g); mouth(g, s.mouth)
    accessory(g, s.accessory, s.accent)
    g.outline()
    return g
  }
  if (s.species === 'weird' && s.variant === 'ghost') {
    headShape(g, skin); g.rect(6, 15, 14, 11, skin)
    for (const x of [6, 10, 14, 18]) { g.rect(x, 26, 2, 2, skin) }
    g.rect(4, 18, 2, 3, skin); g.rect(20, 18, 2, 3, skin)
    g.vline(19, 8, 18, shade(skin, -0.12))
    eyes(g, s.eyes === 'happy' ? 'happy' : 'big'); blush(g); mouth(g, s.mouth === 'fangs' ? 'open' : s.mouth)
    accessory(g, s.accessory, s.accent); pridePin(g, s.pride)
    g.outline()
    return g
  }

  outfit(g, s, skin)
  pridePin(g, s.pride)

  // LA TÊTE
  if (s.species === 'animal' && s.variant === 'frog') {
    g.round(5, 2, 6, 5, skin); g.round(15, 2, 6, 5, skin)
  }
  headShape(g, skin, s.species === 'robot')
  headShade(g, skin)

  // LES OREILLES ET CE QUI DÉPASSE
  if (s.species === 'animal') {
    const inner = '#f6a6b8'
    if (s.variant === 'cat' || s.variant === 'fox') {
      for (const [dx, dy, w] of [[0, 1, 1], [0, 2, 2], [0, 3, 3]] as const) { g.hline(5 + dx, dy, w, skin); g.hline(21 - w, dy, w, skin) }
      g.set(6, 3, s.variant === 'fox' ? INK : inner); g.set(19, 3, s.variant === 'fox' ? INK : inner)
    }
    if (s.variant === 'bear' || s.variant === 'panda') {
      const ec = s.variant === 'panda' ? INK : skin
      g.round(4, 2, 4, 4, ec); g.round(18, 2, 4, 4, ec)
      if (s.variant === 'bear') { g.set(5, 3, shade(skin, -0.2)); g.set(20, 3, shade(skin, -0.2)) }
    }
    if (s.variant === 'bunny') {
      g.rect(8, -1, 3, 6, skin); g.rect(15, -1, 3, 6, skin); g.vline(9, 0, 4, inner); g.vline(16, 0, 4, inner)
    }
  }
  if (s.species === 'alien' && s.variant === 'antenna') {
    g.vline(9, 1, 3, skin); g.vline(16, 1, 3, skin); g.rect(8, -1, 2, 2, s.accent); g.rect(16, -1, 2, 2, s.accent)
  }
  if (s.species === 'robot') {
    g.rect(12, 1, 2, 3, '#8a93a8'); g.rect(11, -1, 4, 2, '#ef4444')
    g.rect(3, 8, 2, 4, '#8a93a8'); g.rect(21, 8, 2, 4, '#8a93a8')
  }
  if (s.species === 'monster' && s.variant === 'horns') {
    const bone = '#f1e3c8'
    g.set(7, 1, bone); g.rect(7, 2, 2, 2, bone); g.set(18, 1, bone); g.rect(17, 2, 2, 2, bone)
  }
  if (s.species === 'weird' && s.variant === 'mushroom') {
    const cap = s.accent || '#ef4444'
    g.rect(3, 2, 20, 6, cap); g.hline(5, 1, 16, cap); g.hline(8, 0, 10, cap); g.hline(2, 7, 22, cap)
    for (const [x, y] of [[6, 3], [11, 1], [16, 3], [19, 5], [9, 5]]) g.rect(x, y, 2, 2, WHITE)
  }

  // LES COIFFURES (pas pour les têtes qui n'en portent pas)
  const hairless = s.species === 'robot' || s.species === 'animal' || (s.species === 'weird')
  if (!hairless) hair(g, s.hair, s.hairColor)

  // LE VISAGE
  if (s.species === 'robot') {
    if (s.variant === 'visor') {
      g.rect(7, 8, 12, 4, '#163a4a'); g.rect(9, 9, 2, 2, '#5ef2ff'); g.rect(15, 9, 2, 2, '#5ef2ff')
    } else {
      g.rect(7, 7, 12, 7, '#163a4a'); eyes(g, s.eyes, '#5ef2ff')
      g.hline(11, 12, 4, '#5ef2ff')
    }
    if (s.variant === 'visor') for (let x = 10; x <= 15; x += 2) g.set(x, 13, '#5a6378')
  } else {
    if (s.species === 'animal' && s.variant === 'panda') { g.round(8, 8, 4, 4, INK); g.round(14, 8, 4, 4, INK) }
    if (s.species === 'animal' && (s.variant === 'bear' || s.variant === 'panda')) {
      g.round(10, 11, 6, 4, s.variant === 'panda' ? WHITE : shade(skin, 0.35)); g.hline(12, 11, 2, INK)
    }
    if (s.species === 'animal' && s.variant === 'fox') g.rect(7, 12, 12, 4, '#fff4e6')
    if (s.species === 'monster' && s.variant === 'cyclops') {
      g.round(10, 7, 6, 5, WHITE); g.rect(12, 8, 2, 3, INK); g.set(12, 8, WHITE)
    } else if (s.species === 'alien' && s.variant === 'bigeyes') {
      g.rect(8, 8, 3, 4, INK); g.rect(15, 8, 3, 4, INK); g.set(8, 8, WHITE); g.set(15, 8, WHITE)
    } else if (s.species === 'animal' && s.variant === 'frog') {
      g.rect(7, 3, 2, 2, INK); g.rect(17, 3, 2, 2, INK); g.set(7, 3, WHITE); g.set(17, 3, WHITE)
    } else {
      const panda = s.species === 'animal' && s.variant === 'panda'
      eyes(g, s.eyes, panda ? WHITE : INK)
    }
    if (!(s.species === 'animal' && (s.variant === 'bear' || s.variant === 'panda'))) blush(g)
    if (s.species === 'animal' && s.variant === 'frog') g.hline(8, 13, 10, MOUTH_C)
    else if (s.species === 'animal' && (s.variant === 'cat' || s.variant === 'fox')) {
      mouth(g, 'cat'); g.set(4, 12, INK); g.set(21, 12, INK); g.set(4, 13, INK); g.set(21, 13, INK)
    } else if (!(s.species === 'animal' && (s.variant === 'bear' || s.variant === 'panda'))) mouth(g, s.species === 'monster' && s.mouth === 'smile' ? 'fangs' : s.mouth)
    else { g.set(12, 14, MOUTH_C); g.set(13, 14, MOUTH_C) }
    if (s.species === 'human') facialHair(g, s.facial, s.hairColor)
  }

  accessory(g, s.accessory, s.accent)
  g.outline()
  return g
}

/* ------------------------------------------------------------------ */
/* Les tirages et les présentations                                    */
/* ------------------------------------------------------------------ */

const pick = <T,>(r: () => number, list: readonly T[]): T => list[Math.floor(r() * list.length) % list.length]

/** Un personnage tiré au sort · reproductible pour une même graine. */
export function randomChibi(seed: number, species?: Species): ChibiSpec {
  const r = rng(seed)
  const sp = species ?? pick(r, SPECIES)
  const variant = pick(r, VARIANTS[sp])
  return {
    species: sp,
    variant,
    skin: sp === 'alien' ? pick(r, ALIEN_SKINS) : sp === 'monster' ? pick(r, MONSTER_SKINS) : pick(r, SKINS),
    hair: pick(r, HAIRS),
    hairColor: pick(r, HAIR_COLORS),
    eyes: pick(r, EYES),
    mouth: pick(r, ['smile', 'open', 'smile', 'cat'] as const),
    outfit: pick(r, OUTFITS),
    outfitColor: pick(r, OUTFIT_COLORS),
    accent: pick(r, OUTFIT_COLORS),
    pants: pick(r, PANTS),
    accessory: r() < 0.55 ? 'none' : pick(r, ACCESSORIES),
    facial: sp === 'human' && r() < 0.12 ? pick(r, ['beard', 'mustache'] as const) : 'none',
    pride: r() < 0.15 ? pick(r, PRIDES.filter((p) => p !== 'none')) : 'none',
  }
}

/** LES POINTS DE DÉPART · une présentation ne verrouille rien : tout se
 *  change ensuite, coiffure, tenue et drapeau compris. */
export const PRESETS: Record<string, Partial<ChibiSpec>> = {
  man: { species: 'human', variant: 'human', hair: 'short', outfit: 'hoodie', facial: 'none' },
  woman: { species: 'human', variant: 'human', hair: 'long', outfit: 'dress', facial: 'none' },
  nonbinary: { species: 'human', variant: 'human', hair: 'bob', outfit: 'overalls', facial: 'none', pride: 'nonbinary' },
  alien: { species: 'alien', variant: 'antenna' },
  robot: { species: 'robot', variant: 'visor' },
  monster: { species: 'monster', variant: 'horns' },
  animal: { species: 'animal', variant: 'cat' },
  weird: { species: 'weird', variant: 'mushroom' },
}

/** Une fiche lue ailleurs (stockage, réseau) · chaque champ est vérifié, et
 *  un champ inconnu retombe sur une valeur sûre. */
export function sanitizeChibi(v: unknown, fallbackSeed = 1): ChibiSpec {
  const base = randomChibi(fallbackSeed)
  if (!v || typeof v !== 'object') return base
  const o = v as Record<string, unknown>
  const hex = (x: unknown, d: string) => (typeof x === 'string' && /^#[0-9a-f]{6}$/i.test(x) ? x : d)
  const one = <T extends string>(x: unknown, list: readonly T[], d: T): T => (typeof x === 'string' && (list as readonly string[]).includes(x) ? (x as T) : d)
  const species = one(o.species, SPECIES, base.species)
  return {
    species,
    variant: one(o.variant, VARIANTS[species], VARIANTS[species][0]),
    skin: hex(o.skin, base.skin),
    hair: one(o.hair, HAIRS, base.hair),
    hairColor: hex(o.hairColor, base.hairColor),
    eyes: one(o.eyes, EYES, base.eyes),
    mouth: one(o.mouth, MOUTHS, base.mouth),
    outfit: one(o.outfit, OUTFITS, base.outfit),
    outfitColor: hex(o.outfitColor, base.outfitColor),
    accent: hex(o.accent, base.accent),
    pants: hex(o.pants, base.pants),
    accessory: one(o.accessory, ACCESSORIES, base.accessory),
    facial: one(o.facial, FACIALS, 'none'),
    pride: one(o.pride, PRIDES, 'none'),
  }
}
