// Dojo templates — each is a themed environment for a dojo: a 3D palette
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
]

export const TEMPLATE_BY_ID: Record<string, DojoTemplate> = Object.fromEntries(DOJO_TEMPLATES.map((t) => [t.id, t]))

export const DEFAULT_TEMPLATE_ID = 'startup'

export function templateById(id: string | undefined | null): DojoTemplate {
  return (id && TEMPLATE_BY_ID[id]) || TEMPLATE_BY_ID[DEFAULT_TEMPLATE_ID]
}
