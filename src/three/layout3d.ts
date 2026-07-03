// 3D placement for the dojo scene. Agents sit on a grid on the tatami; the
// hero roams in front. Coordinates are world units (X right, Z toward camera).
import { AGENTS } from '../data/agents'

export const CELL = { xs: [-4.2, -1.4, 1.4, 4.2], zs: [-2.8, 0.7, 4.2] }

// deterministic grid position per agent (order of AGENTS)
export const POS3D: Record<string, [number, number]> = {}
AGENTS.forEach((a, i) => {
  const col = i % 4
  const row = Math.floor(i / 4)
  POS3D[a.id] = [CELL.xs[col], CELL.zs[row]]
})

export const HERO_HOME3D: [number, number] = [0, 7.4]

export function heroPos3D(targetId: string | null): [number, number] {
  if (!targetId || targetId === 'home') return HERO_HOME3D
  const p = POS3D[targetId]
  if (!p) return HERO_HOME3D
  return [p[0], p[1] + 0.15] // hover directly over the agent's head
}

export const ROOM = { w: 20, d: 16, wallH: 6 }

// how far in front of a seated agent (toward camera) the desk sits
export const DESK_FWD = 1.05
