// ---------------------------------------------------------------------------
// Office scene layout. Fixed design-space stage (scaled to fit). Agent stations
// (desk + job prop) are CONSTANT across scenes; the ambient set-dressing comes
// from the selected scene template (see scenes.ts).
//
// Depth: a desk sits IN FRONT of its agent (higher z) so the character stands
// behind it, at their desk — never on top of it.
// ---------------------------------------------------------------------------
import { AGENTS } from './agents'

export const STAGE = { w: 1040, h: 700 }

// avatar anchor (top-left) per agent — deliberately organic, not a grid.
export const POSITIONS: Record<string, { x: number; y: number }> = {
  ava: { x: 476, y: 70 },
  lex: { x: 656, y: 92 },
  fin: { x: 858, y: 120 },
  rex: { x: 116, y: 128 },
  ada: { x: 268, y: 250 },
  dex: { x: 96, y: 344 },
  pia: { x: 486, y: 248 },
  mia: { x: 672, y: 300 },
  sol: { x: 858, y: 336 },
  otto: { x: 120, y: 528 },
  hana: { x: 356, y: 504 },
  sam: { x: 632, y: 520 },
}

export const HERO_HOME = { x: 496, y: 420 }

export function heroPosFor(targetId: string | null): { x: number; y: number } {
  if (!targetId || targetId === 'home') return HERO_HOME
  const p = POSITIONS[targetId]
  if (!p) return HERO_HOME
  return { x: p.x - 56, y: p.y + 6 }
}

export type DeskVariant = 'a' | 'b' | 'l' | 'standing'
export type PropKind =
  | 'flag' | 'codeboard' | 'server' | 'safe' | 'megaphone' | 'salesboard'
  | 'kanban' | 'easel' | 'chartboard' | 'hiringboard' | 'tickets' | 'scales'

export type DecorKind =
  // office
  | 'window' | 'rug' | 'plant' | 'plantTall' | 'couch' | 'coffee' | 'cooler'
  | 'bookshelf' | 'printer' | 'clock' | 'lamp' | 'boxes' | 'arcade'
  // space station
  | 'porthole' | 'console' | 'satellite' | 'hologram'
  // lab
  | 'labpanel' | 'microscope' | 'beakers' | 'dnahelix'
  // castle
  | 'stonewindow' | 'torch' | 'banner' | 'armor'
  // airport
  | 'glasswall' | 'departboard' | 'luggage'
  // shopping center
  | 'storefront' | 'saletag' | 'fountain'
  // hospital
  | 'hospwindow' | 'hospbed' | 'ivstand' | 'redcross'

export type FurnitureKind = 'desk' | PropKind | DecorKind

export interface FurniturePiece {
  kind: FurnitureKind
  variant?: DeskVariant
  x: number
  y: number
  w?: number
  h?: number
  z?: number
}

// Per-agent station: desk style + a job prop, offset from the avatar anchor.
const STATIONS_CFG: Record<string, { desk: DeskVariant; prop: PropKind; px: number; py: number }> = {
  ava: { desk: 'l', prop: 'flag', px: 66, py: -20 },
  lex: { desk: 'l', prop: 'scales', px: -46, py: -14 },
  fin: { desk: 'a', prop: 'safe', px: 62, py: -8 },
  rex: { desk: 'b', prop: 'codeboard', px: -54, py: -14 },
  ada: { desk: 'l', prop: 'chartboard', px: 62, py: -16 },
  dex: { desk: 'a', prop: 'easel', px: -52, py: -16 },
  pia: { desk: 'b', prop: 'kanban', px: 62, py: -14 },
  mia: { desk: 'a', prop: 'megaphone', px: 60, py: -6 },
  sol: { desk: 'b', prop: 'salesboard', px: -52, py: -16 },
  otto: { desk: 'standing', prop: 'server', px: -46, py: -20 },
  hana: { desk: 'a', prop: 'hiringboard', px: 60, py: -16 },
  sam: { desk: 'b', prop: 'tickets', px: 60, py: -4 },
}

// Desks render IN FRONT of the character (z 24 > agent z 20); props sit behind.
export const STATIONS: FurniturePiece[] = AGENTS.flatMap((a) => {
  const p = POSITIONS[a.id]
  const s = STATIONS_CFG[a.id]
  return [
    { kind: 'desk', variant: s.desk, x: p.x - 30, y: p.y + 50, z: 24 } as FurniturePiece,
    { kind: s.prop, x: p.x + s.px, y: p.y + s.py, z: 3 } as FurniturePiece,
  ]
})
