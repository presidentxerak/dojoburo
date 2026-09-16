// Dojo templates · each is a themed environment for a dojo: a 3D palette
// (floor / walls / accent / background / fog), a decor style, a matching skin
// theme used to seed a coherent starter crew, and copy for the create dialog.
// The active dojo's template drives the look of the 3D office.
import type { Department } from './agents'

export interface DojoPalette {
  ground: string
  grid: string
  wallBack: string
  wallSide: string
  trim: string
  accent: string
  bg: string
  fog: string
}

export type DecorStyle = 'zen' | 'plain'

export interface DojoTemplate {
  id: string
  label: string
  blurb: string
  /** skin theme (see data/skins THEMES) used to colour the starter crew */
  skinTheme: string
  style: DecorStyle
  palette: DojoPalette
  /** default department mix for the seeded starter crew */
  crew: Department[]
  /** classic enclosed room (walls) instead of the open-air platform */
  enclosed?: boolean
}

const CREW_DEFAULT: Department[] = ['Leadership', 'Engineering', 'Finance', 'Growth', 'Product', 'People']

export const DOJO_TEMPLATES: DojoTemplate[] = [
  {
    id: 'default',
    label: 'Default Dojo',
    blurb: 'The classic DojoBuro office — clean, neutral and uncluttered.',
    skinTheme: 'Neon',
    style: 'plain',
    crew: CREW_DEFAULT,
    palette: { ground: '#e7e9f2', grid: '#c4c9dd', wallBack: '#f6f7fb', wallSide: '#eef0f6', trim: '#5b6b8c', accent: '#5b8cff', bg: '#eef1f8', fog: '#f0f3fa' },
  },
  {
    id: 'startup',
    label: 'Start-up HQ',
    blurb: 'Bright, fast-moving founder loft.',
    skinTheme: 'Neon',
    style: 'plain',
    crew: CREW_DEFAULT,
    palette: { ground: '#dfe0ff', grid: '#b6a8ff', wallBack: '#f2f4f8', wallSide: '#e9edf3', trim: '#7b2ff7', accent: '#7b2ff7', bg: '#e9e6ff', fog: '#ece9ff' },
  },
  {
    id: 'dojo',
    label: 'Zen Dojo',
    blurb: 'Tatami, shoji screens and a cherry tree.',
    skinTheme: 'Sakura',
    style: 'zen',
    crew: CREW_DEFAULT,
    enclosed: true,
    palette: { ground: '#a6d15f', grid: '#7fae3f', wallBack: '#f0dcac', wallSide: '#e7d09c', trim: '#8a4a24', accent: '#ff4d57', bg: '#bfe3ff', fog: '#cfeaff' },
  },
  {
    id: 'space',
    label: 'Space Station',
    blurb: 'Orbital deck under a starfield.',
    skinTheme: 'Space',
    style: 'plain',
    crew: ['Leadership', 'Engineering', 'Ops', 'Product', 'Finance', 'Growth'],
    palette: { ground: '#1c2456', grid: '#4b59b8', wallBack: '#10142e', wallSide: '#141a38', trim: '#8a6cff', accent: '#63d0ff', bg: '#05061c', fog: '#0a0f34' },
  },
  {
    id: 'lab',
    label: 'Science Lab',
    blurb: 'Clean-room whites and neon glassware.',
    skinTheme: 'Cyber',
    style: 'plain',
    crew: ['Leadership', 'Engineering', 'Product', 'Ops', 'People', 'Finance'],
    palette: { ground: '#cdeef6', grid: '#7fd0e0', wallBack: '#f4fbfd', wallSide: '#e6f2f6', trim: '#00b8d4', accent: '#00e6ff', bg: '#d8faff', fog: '#dffaff' },
  },
  {
    id: 'villa',
    label: 'Miami Villa',
    blurb: 'Sunset pastels, palms and teal water.',
    skinTheme: 'Sunset',
    style: 'plain',
    crew: ['Leadership', 'Growth', 'Product', 'Finance', 'People', 'Engineering'],
    palette: { ground: '#ffce9a', grid: '#ffb072', wallBack: '#ffc2dd', wallSide: '#ffe4cf', trim: '#ff5a4d', accent: '#08c6c0', bg: '#ffd9b0', fog: '#ffdcb8' },
  },
  {
    id: 'castle',
    label: 'Castle',
    blurb: 'Stone halls, banners and torchlight.',
    skinTheme: 'Royal',
    style: 'plain',
    crew: ['Leadership', 'People', 'Finance', 'Ops', 'Growth', 'Engineering'],
    palette: { ground: '#a89a84', grid: '#7f7060', wallBack: '#b7bcc2', wallSide: '#aab0b6', trim: '#6b4a24', accent: '#f5c542', bg: '#cbc3b2', fog: '#c7bfae' },
  },
  {
    id: 'garden',
    label: 'Magical Garden',
    blurb: 'Lush greenery and glowing blossoms.',
    skinTheme: 'Forest',
    style: 'zen',
    crew: ['Leadership', 'People', 'Product', 'Growth', 'Engineering', 'Finance'],
    palette: { ground: '#a8e070', grid: '#74c644', wallBack: '#dff0d0', wallSide: '#d2ecc0', trim: '#2f9e4a', accent: '#ff4da6', bg: '#d6ffe0', fog: '#dcffe4' },
  },
  {
    id: 'factory',
    label: 'Factory',
    blurb: 'Steel gantries and warning stripes.',
    skinTheme: 'Fire',
    style: 'plain',
    crew: ['Leadership', 'Engineering', 'Ops', 'Finance', 'Product', 'Growth'],
    palette: { ground: '#a4acbd', grid: '#798494', wallBack: '#cfd3da', wallSide: '#c2c6ce', trim: '#e01e0e', accent: '#ff8a00', bg: '#dfe4ee', fog: '#dbe0ea' },
  },
  {
    id: 'forest',
    label: 'Forest Lake',
    blurb: 'A red torii on a still lake, pines and misty hills.',
    skinTheme: 'Forest',
    style: 'zen',
    crew: CREW_DEFAULT,
    palette: { ground: '#9ad35f', grid: '#71b23f', wallBack: '#cfe8d6', wallSide: '#c2e0c8', trim: '#d63a2a', accent: '#ffce4a', bg: '#c6ecee', fog: '#d0eee8' },
  },
  {
    id: 'wonderland',
    label: 'Wonderland',
    blurb: 'Rainbows, candy clouds and dreamy pastels.',
    skinTheme: 'Sakura',
    style: 'plain',
    crew: CREW_DEFAULT,
    palette: { ground: '#ffd0ea', grid: '#ff9ed6', trim: '#b45cff', wallBack: '#fff0f8', wallSide: '#ffe8f4', accent: '#ff3da0', bg: '#e9dcff', fog: '#efe4ff' },
  },
  {
    id: 'backrooms',
    label: 'The Backrooms',
    blurb: 'Endless yellow rooms, damp carpet and buzzing fluorescent lights.',
    skinTheme: 'Cyber',
    style: 'plain',
    crew: CREW_DEFAULT,
    enclosed: true,
    palette: { ground: '#9a8a3c', grid: '#7c6f2e', wallBack: '#c9b84e', wallSide: '#c2b048', trim: '#8a7a2e', accent: '#f2e06a', bg: '#b8a840', fog: '#b0a03c' },
  },
]

// --- UN SEUL DOJO -----------------------------------------------------------
//
// Chaque monde avait sa propre palette de PIÈCE : sol lavande, murs corail,
// poutres violet vif, brouillard turquoise. Douze salles qui criaient chacune
// dans sa couleur. Sur les grandes surfaces — un sol, un mur de vingt mètres —
// une teinte saturée ne décore pas, elle DEVIENT le sujet : c'est tout ce
// qu'on voit, et les personnages passent devant comme des autocollants.
//
// La pièce est donc la même partout : un dojo japonais traditionnel. Tatami,
// washi, bois et plâtre — quatre matières chaudes et sourdes, celles d'une
// salle réelle. Ce qui change d'un monde à l'autre, ce sont les OBJETS et le
// DÉCOR : les étagères d'un dojo « écrire un livre », la baie de serveurs
// d'une application, le jardin sec du zen.
//
// Chaque monde garde UNE couleur d'accent, et elle ne sert que sur de petits
// objets — un coussin, une lanterne, un liseré. C'est la règle de composition
// du kit : une base chaude dominante, des accents en ponctuation. Multiplier
// les teintes concurrentes donne du criard, pas du calme.
const DOJO_ROOM = {
  ground: '#d8cfa4',    // tatami
  grid: '#b9ae84',
  wallBack: '#f2ece0',  // washi
  wallSide: '#e9e2d4',
  trim: '#8c6644',      // bois
  bg: '#e8e2d6',
  fog: '#ece6da',
}

/** La pièce est commune, l'accent reste au monde. */
function inDojo(p: DojoPalette): DojoPalette {
  return { ...DOJO_ROOM, accent: p.accent }
}

// On n'unifie QUE les couleurs, pas les dimensions.
//
// Forcer tous les mondes en salle fermée aurait ramené la pièce de 30 × 23 à
// 20 × 16 : les palmiers de la villa, les étagères de la bibliothèque et les
// machines de l'atelier se seraient retrouvés DEHORS, derrière les murs.
// L'enveloppe est déjà la même partout (même charpente, mêmes panneaux) ;
// avec la même palette, une grande salle et une petite se lisent comme deux
// pièces du même dojo, ce qui est exactement ce qu'on veut.
for (const t of DOJO_TEMPLATES) {
  t.palette = inDojo(t.palette)
}

export const TEMPLATE_BY_ID: Record<string, DojoTemplate> = Object.fromEntries(DOJO_TEMPLATES.map((t) => [t.id, t]))

export const DEFAULT_TEMPLATE_ID = 'default'

export function templateById(id: string | undefined | null): DojoTemplate {
  return (id && TEMPLATE_BY_ID[id]) || TEMPLATE_BY_ID[DEFAULT_TEMPLATE_ID]
}
