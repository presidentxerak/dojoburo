// 3D placement for the dojo scene. Agents sit on a grid on the tatami; the
// hero roams in front. Coordinates are world units (X right, Z toward camera).
import { AGENTS } from '../data/agents'

export const CELL = { xs: [-4.7, -1.55, 1.55, 4.7], zs: [-2.8, 0.7, 4.2] }

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
  return [p[0], p[1] + 2.1] // stand just in front of the agent
}

export const ROOM = { w: 20, d: 16, wallH: 6 }
