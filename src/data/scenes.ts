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
  pieces: FurniturePiece[]
}

// left/right/bottom margins used to place decor away from the desks.
const L = 14
const R = 986

const office: FurniturePiece[] = [
  { kind: 'window', x: 40, y: 18, w: 190, z: 0 },
  { kind: 'window', x: 250, y: 18, w: 190, z: 0 },
  { kind: 'window', x: 700, y: 18, w: 190, z: 0 },
  { kind: 'clock', x: 566, y: 20, z: 0 },
  { kind: 'rug', x: 430, y: 400, w: 260, h: 150, z: 0 },
  { kind: 'couch', x: 430, y: 430, z: 1 },
  { kind: 'lamp', x: 640, y: 430, z: 2 },
  { kind: 'plantTall', x: L, y: 250, z: 2 },
  { kind: 'plant', x: 250, y: 430, z: 2 },
  { kind: 'plantTall', x: R + 6, y: 470, z: 2 },
  { kind: 'coffee', x: R, y: 250, z: 2 },
  { kind: 'cooler', x: 700, y: 470, z: 2 },
  { kind: 'bookshelf', x: 792, y: 470, z: 1 },
  { kind: 'printer', x: 300, y: 360, z: 2 },
  { kind: 'boxes', x: 20, y: 640, z: 2 },
  { kind: 'arcade', x: 936, y: 620, z: 2 },
]

const space: FurniturePiece[] = [
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

export const SCENES: Record<SceneId, Scene> = {
  office: { id: 'office', label: 'Office', floorA: '#efe3cf', floorB: '#e8dabf', tint: 'rgba(255,255,255,0.14)', pieces: office },
  space: { id: 'space', label: 'Space station', floorA: '#1b2233', floorB: '#141a29', tint: 'rgba(99,208,255,0.14)', pieces: space },
  lab: { id: 'lab', label: 'Lab', floorA: '#eef3f6', floorB: '#e2edf1', tint: 'rgba(120,216,143,0.16)', pieces: lab },
  castle: { id: 'castle', label: 'Castle', floorA: '#6f6a63', floorB: '#615c56', tint: 'rgba(255,207,59,0.12)', pieces: castle },
  airport: { id: 'airport', label: 'Airport', floorA: '#dfe6ee', floorB: '#d2dbe6', tint: 'rgba(63,127,224,0.12)', pieces: airport },
  mall: { id: 'mall', label: 'Shopping center', floorA: '#f3e9f2', floorB: '#ecdcea', tint: 'rgba(240,80,122,0.12)', pieces: mall },
  hospital: { id: 'hospital', label: 'Hospital', floorA: '#eaf5f2', floorB: '#dcefe9', tint: 'rgba(90,209,192,0.14)', pieces: hospital },
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
