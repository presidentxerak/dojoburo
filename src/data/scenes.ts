// ---------------------------------------------------------------------------
// Scene templates. Each swaps the floor palette + ambient tint + the set of
// decor pieces around the (constant) agent stations. Switchable from the bar
// below the scene.
// ---------------------------------------------------------------------------
import type { FurniturePiece } from './layout'

export type SceneId = 'office' | 'space' | 'lab' | 'castle' | 'airport' | 'mall' | 'hospital'

export interface Scene {
  id: SceneId
  label: string
  floorA: string
  floorB: string
  tint: string // radial highlight overlay colour (top)
  wall: string // back-wall colour
  wallTrim: string // skirting / trim under the wall
  pieces: FurniturePiece[]
}

// Height of the back wall band at the top of the stage.
export const WALL_H = 98

// left/right/bottom margins used to place decor away from the desks.
const L = 14
const R = 986

const office: FurniturePiece[] = [
  // on the wall
  { kind: 'window', x: 44, y: 24, w: 150, z: 1 },
  { kind: 'window', x: 214, y: 24, w: 150, z: 1 },
  { kind: 'poster', x: 396, y: 24, z: 1 },
  { kind: 'clock', x: 470, y: 26, z: 1 },
  { kind: 'door', x: 520, y: 20, z: 1 },
  { kind: 'window', x: 604, y: 24, w: 150, z: 1 },
  { kind: 'poster', x: 772, y: 22, z: 1 },
  { kind: 'window', x: 838, y: 24, w: 150, z: 1 },
  // floor
  { kind: 'rug', x: 420, y: 430, w: 250, h: 140, z: 0 },
  { kind: 'couch', x: 430, y: 452, z: 1 },
  { kind: 'lamp', x: 648, y: 430, z: 2 },
  { kind: 'plantTall', x: L, y: 250, z: 2 },
  { kind: 'plant', x: 250, y: 440, z: 2 },
  { kind: 'plantTall', x: R + 8, y: 470, z: 2 },
  { kind: 'coffee', x: R + 2, y: 250, z: 2 },
  { kind: 'watercooler', x: 700, y: 452, z: 2 },
  { kind: 'bookshelf', x: 786, y: 452, z: 1 },
  { kind: 'printer', x: 300, y: 360, z: 2 },
  { kind: 'boxes', x: 22, y: 636, z: 2 },
  { kind: 'arcade', x: 940, y: 616, z: 2 },
]

const space: FurniturePiece[] = [
  { kind: 'door', x: 480, y: 20, z: 1 },
  { kind: 'porthole', x: 60, y: 20, z: 0 },
  { kind: 'porthole', x: 300, y: 20, z: 0 },
  { kind: 'porthole', x: 720, y: 20, z: 0 },
  { kind: 'porthole', x: 900, y: 20, z: 0 },
  { kind: 'console', x: 430, y: 410, w: 260, z: 1 },
  { kind: 'hologram', x: 560, y: 380, z: 2 },
  { kind: 'satellite', x: L, y: 250, z: 2 },
  { kind: 'satellite', x: R, y: 470, z: 2 },
  { kind: 'console', x: 20, y: 630, z: 1 },
  { kind: 'console', x: 900, y: 630, z: 1 },
]

const lab: FurniturePiece[] = [
  { kind: 'door', x: 486, y: 20, z: 1 },
  { kind: 'labpanel', x: 40, y: 18, w: 200, z: 0 },
  { kind: 'labpanel', x: 260, y: 18, w: 200, z: 0 },
  { kind: 'labpanel', x: 700, y: 18, w: 200, z: 0 },
  { kind: 'beakers', x: L, y: 260, z: 2 },
  { kind: 'microscope', x: 250, y: 420, z: 2 },
  { kind: 'dnahelix', x: 560, y: 380, z: 2 },
  { kind: 'beakers', x: R, y: 260, z: 2 },
  { kind: 'microscope', x: 700, y: 470, z: 2 },
  { kind: 'labpanel', x: 20, y: 640, w: 120, z: 0 },
]

const castle: FurniturePiece[] = [
  { kind: 'door', x: 486, y: 18, z: 1 },
  { kind: 'stonewindow', x: 60, y: 18, z: 0 },
  { kind: 'stonewindow', x: 300, y: 18, z: 0 },
  { kind: 'stonewindow', x: 720, y: 18, z: 0 },
  { kind: 'banner', x: 566, y: 16, z: 0 },
  { kind: 'torch', x: 20, y: 220, z: 2 },
  { kind: 'torch', x: 992, y: 220, z: 2 },
  { kind: 'armor', x: L, y: 470, z: 2 },
  { kind: 'armor', x: R, y: 470, z: 2 },
  { kind: 'banner', x: 300, y: 380, z: 1 },
  { kind: 'torch', x: 640, y: 430, z: 2 },
]

const airport: FurniturePiece[] = [
  { kind: 'door', x: 300, y: 20, z: 1 },
  { kind: 'glasswall', x: 40, y: 18, w: 260, z: 0 },
  { kind: 'glasswall', x: 680, y: 18, w: 260, z: 0 },
  { kind: 'departboard', x: 430, y: 16, z: 0 },
  { kind: 'luggage', x: L, y: 470, z: 2 },
  { kind: 'luggage', x: 250, y: 430, z: 2 },
  { kind: 'couch', x: 430, y: 430, z: 1 },
  { kind: 'luggage', x: R, y: 470, z: 2 },
  { kind: 'plantTall', x: 700, y: 470, z: 2 },
  { kind: 'departboard', x: 20, y: 630, z: 0 },
]

const mall: FurniturePiece[] = [
  { kind: 'door', x: 486, y: 20, z: 1 },
  { kind: 'storefront', x: 40, y: 18, w: 200, z: 0 },
  { kind: 'storefront', x: 260, y: 18, w: 200, z: 0 },
  { kind: 'storefront', x: 700, y: 18, w: 200, z: 0 },
  { kind: 'fountain', x: 470, y: 400, z: 1 },
  { kind: 'saletag', x: L, y: 260, z: 2 },
  { kind: 'saletag', x: R, y: 260, z: 2 },
  { kind: 'plantTall', x: 250, y: 430, z: 2 },
  { kind: 'plant', x: 700, y: 470, z: 2 },
  { kind: 'storefront', x: 20, y: 630, w: 120, z: 0 },
]

const hospital: FurniturePiece[] = [
  { kind: 'door', x: 500, y: 20, z: 1 },
  { kind: 'hospwindow', x: 40, y: 18, w: 200, z: 0 },
  { kind: 'hospwindow', x: 260, y: 18, w: 200, z: 0 },
  { kind: 'redcross', x: 566, y: 18, z: 0 },
  { kind: 'hospwindow', x: 700, y: 18, w: 200, z: 0 },
  { kind: 'hospbed', x: L, y: 440, z: 2 },
  { kind: 'ivstand', x: 200, y: 430, z: 2 },
  { kind: 'hospbed', x: 820, y: 460, z: 2 },
  { kind: 'ivstand', x: 700, y: 470, z: 2 },
  { kind: 'plant', x: 470, y: 420, z: 2 },
]

// Everything is monochrome now — scenes differ by their decor shapes, not colour.
const FLOOR_A = '#ffffff'
const FLOOR_B = '#ececec'
const TINT = 'rgba(0,0,0,0.05)'
const WALL = '#e6e6e6'
const WALL_TRIM = '#000000'
const mono = (id: SceneId, label: string, pieces: FurniturePiece[]): Scene => ({
  id, label, floorA: FLOOR_A, floorB: FLOOR_B, tint: TINT, wall: WALL, wallTrim: WALL_TRIM, pieces,
})

export const SCENES: Record<SceneId, Scene> = {
  office: mono('office', 'Office', office),
  space: mono('space', 'Space station', space),
  lab: mono('lab', 'Lab', lab),
  castle: mono('castle', 'Castle', castle),
  airport: mono('airport', 'Airport', airport),
  mall: mono('mall', 'Shopping center', mall),
  hospital: mono('hospital', 'Hospital', hospital),
}

export const SCENE_LIST: Scene[] = [
  SCENES.office, SCENES.space, SCENES.lab, SCENES.castle, SCENES.airport, SCENES.mall, SCENES.hospital,
]

export function loadSceneId(): SceneId {
  const raw = localStorage.getItem('dojoburo.scene')
  return (raw && raw in SCENES ? (raw as SceneId) : 'office')
}
export function saveSceneId(id: SceneId) {
  localStorage.setItem('dojoburo.scene', id)
}
