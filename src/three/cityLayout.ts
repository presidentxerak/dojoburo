// ---------------------------------------------------------------------------
// Dojo City · procedural layout for the full-3D isometric city. A deterministic
// (seeded) grid of blocks separated by roads; each buildable cell becomes a lot
// that is either an ambient Tokyo-style building or an available plot the player
// can found a Dojo on. Kept pure + data-only so the R3F scene just renders it and
// so the layout never shifts between renders.
// ---------------------------------------------------------------------------

/** Tiny deterministic PRNG (mulberry32) so the city is identical every render. */
export function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export const GRID = 11 // cells per side
export const CELL = 5 // world units per cell
export const ROAD_EVERY = 3 // every Nth index (0-based) is a road
export const SPAN = GRID * CELL
export const HALF = SPAN / 2

export type BuildingKind = 'house' | 'shop' | 'apartment' | 'tower' | 'pagoda'
export type RoofKind = 'flat' | 'gable' | 'hip' | 'pagoda'

export interface BuildingSpec {
  kind: BuildingKind
  w: number // footprint width (x)
  d: number // footprint depth (z)
  floors: number
  floorH: number
  hue: number // facade base hue 0..360
  sat: number
  light: number
  facade: number // window-grid variant 0..3
  neon: boolean
  neonHue: number
  roof: RoofKind
  waterTank: boolean
  rooftopGarden: boolean
  acUnits: number
}

export interface Lot {
  id: string
  i: number
  j: number
  cx: number // world center x
  cz: number // world center z
  kind: 'building' | 'available'
  building?: BuildingSpec
}

export interface Road {
  horizontal: boolean
  /** fixed axis world coord (z for horizontal roads, x for vertical) */
  at: number
}

const isRoad = (idx: number) => idx % ROAD_EVERY === 0

export function cellCenter(i: number, j: number): [number, number] {
  return [i * CELL - HALF + CELL / 2, j * CELL - HALF + CELL / 2]
}

function makeBuilding(rand: () => number): BuildingSpec {
  const kinds: BuildingKind[] = ['house', 'house', 'shop', 'apartment', 'apartment', 'tower', 'pagoda']
  const kind = kinds[Math.floor(rand() * kinds.length)]
  const floors = kind === 'tower' ? 6 + Math.floor(rand() * 9)
    : kind === 'apartment' ? 3 + Math.floor(rand() * 4)
    : kind === 'pagoda' ? 2 + Math.floor(rand() * 3)
    : kind === 'shop' ? 1 + Math.floor(rand() * 2)
    : 1 + Math.floor(rand() * 2)
  const footprint = kind === 'tower' ? 2.4 + rand() * 0.5
    : kind === 'house' ? 2.2 + rand() * 0.6
    : 2.6 + rand() * 0.7
  // Tokyo-ish palette: mostly cool greys/teals with occasional warm signage.
  const warm = rand() < 0.25
  const hue = warm ? 8 + rand() * 40 : 190 + rand() * 60
  return {
    kind,
    w: footprint,
    d: footprint * (0.82 + rand() * 0.3),
    floors,
    floorH: kind === 'pagoda' ? 1.1 : 0.9 + rand() * 0.25,
    hue,
    sat: warm ? 40 + rand() * 25 : 12 + rand() * 22,
    light: 52 + rand() * 26,
    facade: Math.floor(rand() * 4),
    neon: kind !== 'house' && rand() < 0.55,
    neonHue: [320, 190, 45, 265, 150][Math.floor(rand() * 5)],
    roof: kind === 'pagoda' ? 'pagoda' : kind === 'house' ? (rand() < 0.6 ? 'gable' : 'hip') : 'flat',
    waterTank: kind !== 'house' && rand() < 0.4,
    rooftopGarden: rand() < 0.22,
    acUnits: Math.floor(rand() * 4),
  }
}

/** Build the whole city. `availableCount` lots are left as plots (for dojos +
 *  founding); the rest are ambient buildings. */
export function buildCity(seed = 20260711): { lots: Lot[]; roads: Road[] } {
  const rand = rng(seed)
  const lots: Lot[] = []
  const buildable: Array<{ i: number; j: number }> = []
  for (let i = 0; i < GRID; i++) {
    for (let j = 0; j < GRID; j++) {
      if (isRoad(i) || isRoad(j)) continue
      buildable.push({ i, j })
    }
  }
  // Reserve a spread-out set of "available" plots (every ~4th buildable cell).
  const availableIdx = new Set<number>()
  for (let k = 0; k < buildable.length; k++) {
    if (k % 4 === 2) availableIdx.add(k)
  }
  buildable.forEach((c, k) => {
    const [cx, cz] = cellCenter(c.i, c.j)
    const available = availableIdx.has(k)
    lots.push({
      id: `lot-${c.i}-${c.j}`,
      i: c.i, j: c.j, cx, cz,
      kind: available ? 'available' : 'building',
      building: available ? undefined : makeBuilding(rand),
    })
  })

  const roads: Road[] = []
  for (let i = 0; i < GRID; i++) {
    if (!isRoad(i)) continue
    const at = i * CELL - HALF + CELL / 2
    roads.push({ horizontal: false, at })
    roads.push({ horizontal: true, at })
  }
  return { lots, roads }
}

/** Discrete zoom presets (orthographic camera zoom) · 4 levels far→near. */
export const ZOOM_LEVELS = [15, 24, 38, 54]
