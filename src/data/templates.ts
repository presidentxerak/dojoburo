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
  emoji: string
  blurb: string
  /** skin theme (see data/skins THEMES) used to colour the starter crew */
  skinTheme: string
  style: DecorStyle
  palette: DojoPalette
  /** default department mix for the seeded starter crew */
  crew: Department[]
}

const CREW_DEFAULT: Department[] = ['Leadership', 'Engineering', 'Finance', 'Growth', 'Product', 'People']

export const DOJO_TEMPLATES: DojoTemplate[] = [
  {
    id: 'startup',
    label: 'Start-up HQ',
    emoji: '🚀',
    blurb: 'Bright, fast-moving founder loft.',
    skinTheme: 'Neon',
    style: 'plain',
    crew: CREW_DEFAULT,
    palette: { ground: '#dfe6ee', grid: '#c3ccd8', wallBack: '#f2f4f8', wallSide: '#e9edf3', trim: '#7c5cff', accent: '#7c5cff', bg: '#eef2fb', fog: '#eef2fb' },
  },
  {
    id: 'dojo',
    label: 'Zen Dojo',
    emoji: '🎎',
    blurb: 'Tatami, shoji screens and a cherry tree.',
    skinTheme: 'Sakura',
    style: 'zen',
    crew: CREW_DEFAULT,
    palette: { ground: '#bcd189', grid: '#8fae5a', wallBack: '#ecd9b0', wallSide: '#e3cfa2', trim: '#7a4a24', accent: '#e0524f', bg: '#eaf3ff', fog: '#eaf3ff' },
  },
  {
    id: 'space',
    label: 'Space Station',
    emoji: '🛰️',
    blurb: 'Orbital deck under a starfield.',
    skinTheme: 'Space',
    style: 'plain',
    crew: ['Leadership', 'Engineering', 'Ops', 'Product', 'Finance', 'Growth'],
    palette: { ground: '#1a1f3a', grid: '#39447e', wallBack: '#10142e', wallSide: '#141a38', trim: '#6c5ce7', accent: '#8ad0ff', bg: '#070a1a', fog: '#0b1030' },
  },
  {
    id: 'lab',
    label: 'Science Lab',
    emoji: '🧪',
    blurb: 'Clean-room whites and neon glassware.',
    skinTheme: 'Cyber',
    style: 'plain',
    crew: ['Leadership', 'Engineering', 'Product', 'Ops', 'People', 'Finance'],
    palette: { ground: '#eaf3f6', grid: '#bcd6de', wallBack: '#f4fbfd', wallSide: '#e6f2f6', trim: '#0f8fb5', accent: '#00e6ff', bg: '#eafaff', fog: '#eafaff' },
  },
  {
    id: 'villa',
    label: 'Miami Villa',
    emoji: '🌴',
    blurb: 'Sunset pastels, palms and teal water.',
    skinTheme: 'Sunset',
    style: 'plain',
    crew: ['Leadership', 'Growth', 'Product', 'Finance', 'People', 'Engineering'],
    palette: { ground: '#ffe0c2', grid: '#ffcfa0', wallBack: '#ffd9e6', wallSide: '#ffe4cf', trim: '#ff7a59', accent: '#22c7b8', bg: '#fff0e6', fog: '#ffe9dc' },
  },
  {
    id: 'castle',
    label: 'Castle',
    emoji: '🏰',
    blurb: 'Stone halls, banners and torchlight.',
    skinTheme: 'Royal',
    style: 'plain',
    crew: ['Leadership', 'People', 'Finance', 'Ops', 'Growth', 'Engineering'],
    palette: { ground: '#9aa0a6', grid: '#7c8288', wallBack: '#b7bcc2', wallSide: '#aab0b6', trim: '#5a4a2b', accent: '#c9a94a', bg: '#dfe0e4', fog: '#cfd2d8' },
  },
  {
    id: 'garden',
    label: 'Magical Garden',
    emoji: '🌸',
    blurb: 'Lush greenery and glowing blossoms.',
    skinTheme: 'Forest',
    style: 'zen',
    crew: ['Leadership', 'People', 'Product', 'Growth', 'Engineering', 'Finance'],
    palette: { ground: '#cdeab0', grid: '#9fd07a', wallBack: '#dff0d0', wallSide: '#d2ecc0', trim: '#3f7d3a', accent: '#ff86c0', bg: '#eafff0', fog: '#e6fbe9' },
  },
  {
    id: 'factory',
    label: 'Factory',
    emoji: '🏭',
    blurb: 'Steel gantries and warning stripes.',
    skinTheme: 'Fire',
    style: 'plain',
    crew: ['Leadership', 'Engineering', 'Ops', 'Finance', 'Product', 'Growth'],
    palette: { ground: '#b8bcc4', grid: '#8f949e', wallBack: '#cfd3da', wallSide: '#c2c6ce', trim: '#b8241d', accent: '#ff8a1e', bg: '#eceef2', fog: '#e4e7ec' },
  },
]

export const TEMPLATE_BY_ID: Record<string, DojoTemplate> = Object.fromEntries(DOJO_TEMPLATES.map((t) => [t.id, t]))

export const DEFAULT_TEMPLATE_ID = 'startup'

export function templateById(id: string | undefined | null): DojoTemplate {
  return (id && TEMPLATE_BY_ID[id]) || TEMPLATE_BY_ID[DEFAULT_TEMPLATE_ID]
}
