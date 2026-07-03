// ---------------------------------------------------------------------------
// Office scene layout. A fixed design-space stage (scaled to fit the viewport)
// with absolute positions for each agent's desk, the furniture and the hero.
// ---------------------------------------------------------------------------
import { AGENTS } from './agents'

export const STAGE = { w: 980, h: 640 }

// avatar anchor (top-left) per agent — clean 4x3 bullpen.
export const POSITIONS: Record<string, { x: number; y: number }> = {
  rex: { x: 96, y: 150 },
  pia: { x: 330, y: 150 },
  ava: { x: 564, y: 150 },
  fin: { x: 798, y: 150 },
  dex: { x: 96, y: 340 },
  sol: { x: 330, y: 340 },
  mia: { x: 564, y: 340 },
  ada: { x: 798, y: 340 },
  otto: { x: 96, y: 520 },
  hana: { x: 330, y: 520 },
  sam: { x: 564, y: 520 },
  lex: { x: 798, y: 520 },
}

export const HERO_HOME = { x: 470, y: 300 }

/** Where the hero stands when visiting an agent (just left of their desk). */
export function heroPosFor(targetId: string | null): { x: number; y: number } {
  if (!targetId || targetId === 'home') return HERO_HOME
  const p = POSITIONS[targetId]
  if (!p) return HERO_HOME
  return { x: p.x - 52, y: p.y + 26 }
}

export type FurnitureKind =
  | 'desk'
  | 'plant'
  | 'plantTall'
  | 'whiteboard'
  | 'couch'
  | 'coffee'
  | 'cooler'
  | 'server'
  | 'bookshelf'
  | 'rug'
  | 'window'
  | 'printer'

export interface FurniturePiece {
  kind: FurnitureKind
  x: number
  y: number
  w?: number
  h?: number
  z?: number
}

// A desk sits in front of every agent.
const desks: FurniturePiece[] = AGENTS.map((a) => {
  const p = POSITIONS[a.id]
  return { kind: 'desk', x: p.x - 8, y: p.y + 60, z: 1 }
})

export const FURNITURE: FurniturePiece[] = [
  // wall windows band
  { kind: 'window', x: 40, y: 20, w: 200, z: 0 },
  { kind: 'window', x: 300, y: 20, w: 200, z: 0 },
  { kind: 'window', x: 560, y: 20, w: 200, z: 0 },
  // decor
  { kind: 'whiteboard', x: 800, y: 24, z: 0 },
  { kind: 'rug', x: 380, y: 250, w: 240, h: 150, z: 0 },
  { kind: 'plantTall', x: 12, y: 96, z: 2 },
  { kind: 'plant', x: 246, y: 300, z: 2 },
  { kind: 'plantTall', x: 936, y: 470, z: 2 },
  { kind: 'coffee', x: 936, y: 250, z: 2 },
  { kind: 'cooler', x: 470, y: 470, z: 2 },
  { kind: 'server', x: 20, y: 470, z: 2 },
  { kind: 'bookshelf', x: 700, y: 470, z: 1 },
  { kind: 'printer', x: 700, y: 300, z: 2 },
  { kind: 'couch', x: 380, y: 300, z: 1 },
  ...desks,
]
