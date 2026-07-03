// ---------------------------------------------------------------------------
// Office scene layout. A fixed design-space stage (scaled to fit the viewport)
// with organic desk positions, per-agent desk variants + job-specific props,
// and ambient decor. Characters stand; their desk sits in front of them.
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

export const HERO_HOME = { x: 496, y: 430 }

export function heroPosFor(targetId: string | null): { x: number; y: number } {
  if (!targetId || targetId === 'home') return HERO_HOME
  const p = POSITIONS[targetId]
  if (!p) return HERO_HOME
  return { x: p.x - 54, y: p.y + 20 }
}

export type DeskVariant = 'a' | 'b' | 'l' | 'standing'
export type PropKind =
  | 'flag'
  | 'codeboard'
  | 'server'
  | 'safe'
  | 'megaphone'
  | 'salesboard'
  | 'kanban'
  | 'easel'
  | 'chartboard'
  | 'hiringboard'
  | 'tickets'
  | 'scales'

export type DecorKind =
  | 'window'
  | 'rug'
  | 'plant'
  | 'plantTall'
  | 'couch'
  | 'coffee'
  | 'cooler'
  | 'bookshelf'
  | 'printer'
  | 'clock'
  | 'lamp'
  | 'boxes'
  | 'arcade'

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

// Per-agent station: desk style + which side the desk sits, and a job prop.
const STATIONS: Record<string, { desk: DeskVariant; prop: PropKind; px: number; py: number }> = {
  ava: { desk: 'l', prop: 'flag', px: 62, py: -6 },
  lex: { desk: 'l', prop: 'scales', px: -46, py: 4 },
  fin: { desk: 'a', prop: 'safe', px: 60, py: 6 },
  rex: { desk: 'b', prop: 'codeboard', px: -52, py: 2 },
  ada: { desk: 'l', prop: 'chartboard', px: 60, py: 0 },
  dex: { desk: 'a', prop: 'easel', px: -50, py: 0 },
  pia: { desk: 'b', prop: 'kanban', px: 60, py: 2 },
  mia: { desk: 'a', prop: 'megaphone', px: 58, py: 6 },
  sol: { desk: 'b', prop: 'salesboard', px: -50, py: 0 },
  otto: { desk: 'standing', prop: 'server', px: -46, py: -6 },
  hana: { desk: 'a', prop: 'hiringboard', px: 58, py: 0 },
  sam: { desk: 'b', prop: 'tickets', px: 58, py: 6 },
}

function stations(): FurniturePiece[] {
  const out: FurniturePiece[] = []
  for (const a of AGENTS) {
    const p = POSITIONS[a.id]
    const s = STATIONS[a.id]
    out.push({ kind: 'desk', variant: s.desk, x: p.x - 14, y: p.y + 56, z: 6 })
    out.push({ kind: s.prop, x: p.x + s.px, y: p.y + s.py, z: 3 })
  }
  return out
}

export const FURNITURE: FurniturePiece[] = [
  // wall windows band
  { kind: 'window', x: 40, y: 18, w: 190, z: 0 },
  { kind: 'window', x: 250, y: 18, w: 190, z: 0 },
  { kind: 'window', x: 700, y: 18, w: 190, z: 0 },
  { kind: 'clock', x: 566, y: 20, z: 0 },
  // floor decor
  { kind: 'rug', x: 430, y: 400, w: 260, h: 150, z: 0 },
  { kind: 'couch', x: 430, y: 430, z: 1 },
  { kind: 'plantTall', x: 12, y: 250, z: 2 },
  { kind: 'plant', x: 250, y: 430, z: 2 },
  { kind: 'plantTall', x: 992, y: 470, z: 2 },
  { kind: 'coffee', x: 984, y: 250, z: 2 },
  { kind: 'cooler', x: 700, y: 470, z: 2 },
  { kind: 'bookshelf', x: 792, y: 470, z: 1 },
  { kind: 'printer', x: 300, y: 360, z: 2 },
  { kind: 'lamp', x: 640, y: 430, z: 2 },
  { kind: 'boxes', x: 20, y: 640, z: 2 },
  { kind: 'arcade', x: 936, y: 620, z: 2 },
  ...stations(),
]
