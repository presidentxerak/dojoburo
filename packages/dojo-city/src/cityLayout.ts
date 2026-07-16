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

export const GRID = 31 // cells per side · a big metropolis (~10× the old area)
export const CELL = 5 // world units per cell
export const ROAD_EVERY = 3 // every Nth index (0-based) is a road
export const SPAN = GRID * CELL
export const HALF = SPAN / 2

/** Civic landmarks scattered across the metropolis (hotels, malls, hospitals…). */
export type CivicKind = 'hotel' | 'mall' | 'hospital' | 'school' | 'police' | 'pool' | 'park'
const CIVIC_ROTATION: CivicKind[] = ['hotel', 'mall', 'hospital', 'school', 'police', 'pool', 'park']

export type BuildingKind = 'tower' | 'office' | 'shophouse' | 'apartment' | 'mall' | 'pagoda' | 'villa' | 'temple'
export type RoofKind = 'flat' | 'gable' | 'pagoda' | 'hip'

/** Short Japanese signboard strings (shop / office names) for facades + roofs. */
export const SIGNS = ['商ビル', '東よう', 'フン', 'ラーメン', 'カフェ', '音楽', '銀行', 'ショウ', 'マート', 'ゆめ', 'さくら', 'でんき', '本屋', '薬', '酒場', '鮨', '天ぷら', 'カラオケ']

// Bright, clean daytime palette (whites + saturated pops), à la low-poly Tokyo.
const BODY = ['#ffffff', '#f5f7fa', '#eef1f5', '#ff6fae', '#ff924a', '#ffd23f', '#3ecfae', '#3bb0ff', '#8b7bf0', '#8ed94f', '#ff6b6b', '#e9edf2', '#ffb8d9', '#57d1c6', '#ffe08a']
const SIGN_BG = ['#e2265f', '#0f8f5f', '#1f6fd0', '#f0a020', '#7a3ff0', '#e63946', '#00a5b5', '#ff3d81']

export interface BuildingSpec {
  kind: BuildingKind
  w: number
  d: number
  floors: number
  floorH: number
  body: string // facade base colour (hex)
  trim: string // window / mullion accent (hex)
  podium: boolean // ground-floor storefront
  podiumColor: string
  awning: boolean
  awningColor: string
  sign: { text: string; bg: string; vertical: boolean; place: 'facade' | 'side' } | null
  roofSign: boolean
  roofSignText: string
  billboard: boolean // rooftop screen
  balconies: boolean
  setback: boolean
  waterTank: boolean
  antenna: boolean
  acUnits: number
  roof: RoofKind
}

export interface Lot {
  id: string
  i: number
  j: number
  cx: number // world center x
  cz: number // world center z
  kind: 'building' | 'available'
  building?: BuildingSpec
  civic?: CivicKind // a landmark (hotel, mall, hospital…) overrides the ambient building
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

const pick = <T,>(rand: () => number, arr: T[]): T => arr[Math.floor(rand() * arr.length)]

function makeBuilding(rand: () => number): BuildingSpec {
  // weighted kinds · shophouses + offices dominate, towers/apartments common,
  // malls + pagodas rare (for silhouette variety).
  const bag: BuildingKind[] = ['shophouse', 'shophouse', 'office', 'office', 'apartment', 'apartment', 'tower', 'tower', 'mall', 'villa', 'villa', 'temple']
  const kind = pick(rand, bag)
  const floors = kind === 'tower' ? 8 + Math.floor(rand() * 9)
    : kind === 'office' ? 4 + Math.floor(rand() * 5)
    : kind === 'apartment' ? 3 + Math.floor(rand() * 4)
    : kind === 'mall' ? 2 + Math.floor(rand() * 3)
    : kind === 'pagoda' || kind === 'temple' ? 2 + Math.floor(rand() * 2)
    : kind === 'villa' ? 1 + Math.floor(rand() * 2)
    : 2 + Math.floor(rand() * 2) // shophouse
  const wide = kind === 'mall' || kind === 'villa' || kind === 'temple'
  const footprint = kind === 'tower' ? 2.3 + rand() * 0.5
    : wide ? 2.9 + rand() * 0.6
    : 2.4 + rand() * 0.7
  const body = kind === 'tower' ? pick(rand, ['#ffffff', '#f5f7fa', '#eef1f5', '#e9edf2', '#dfe6ee'])
    : kind === 'villa' ? pick(rand, ['#efe6d3', '#e7d9be', '#d9c9a8', '#f0ead9'])
    : kind === 'temple' ? pick(rand, ['#7c3a3f', '#8c2f39', '#6f3b2e'])
    : pick(rand, BODY)
  const natural = kind === 'villa' || kind === 'temple' || kind === 'pagoda'
  const hasSign = !natural && rand() < 0.7
  return {
    kind,
    w: footprint,
    d: footprint * (0.82 + rand() * 0.3),
    floors,
    floorH: kind === 'pagoda' || kind === 'temple' ? 1.15 : kind === 'villa' ? 1.0 : 0.85 + rand() * 0.2,
    body,
    trim: pick(rand, ['#2b3442', '#3a4658', '#c9d3e0', '#1f6fd0', '#e2265f']),
    podium: !natural && (kind === 'shophouse' || kind === 'mall' || rand() < 0.4),
    podiumColor: pick(rand, ['#e2265f', '#0f8f5f', '#1f6fd0', '#f0a020', '#7a3ff0', '#111820']),
    awning: kind === 'shophouse' && rand() < 0.7,
    awningColor: pick(rand, ['#e63946', '#0f8f5f', '#1f6fd0', '#f0a020', '#ffffff']),
    sign: hasSign ? { text: pick(rand, SIGNS), bg: pick(rand, SIGN_BG), vertical: rand() < 0.5, place: rand() < 0.5 ? 'facade' : 'side' } : null,
    roofSign: (kind === 'office' || kind === 'mall' || kind === 'tower') && rand() < 0.45,
    roofSignText: pick(rand, SIGNS),
    billboard: kind === 'mall' && rand() < 0.7,
    balconies: kind === 'apartment' && rand() < 0.7,
    setback: kind === 'tower' && rand() < 0.7,
    waterTank: (kind === 'office' || kind === 'apartment' || kind === 'shophouse') && rand() < 0.5,
    antenna: kind === 'tower' && rand() < 0.7,
    acUnits: natural ? 0 : Math.floor(rand() * 4),
    roof: kind === 'temple' || kind === 'pagoda' ? 'pagoda' : kind === 'villa' ? 'hip' : 'flat',
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
  // Reserve a spread-out set of "available" plots (every ~5th buildable cell) ·
  // these become lawns / construction sites. Every ~6th building lot becomes a
  // civic landmark (hotel, mall, hospital, school, police, pool, park), cycling
  // through the types so all of them appear many times across the metropolis.
  let civicCursor = 0
  buildable.forEach((c, k) => {
    const [cx, cz] = cellCenter(c.i, c.j)
    const available = k % 5 === 2
    const civic = !available && k % 6 === 4 ? CIVIC_ROTATION[civicCursor++ % CIVIC_ROTATION.length] : undefined
    lots.push({
      id: `lot-${c.i}-${c.j}`,
      i: c.i, j: c.j, cx, cz,
      kind: available ? 'available' : 'building',
      building: available || civic ? undefined : makeBuilding(rand),
      civic,
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
