// 3D placement for the dojo scene. Agents sit on a grid on the tatami; the
// hero roams in front. Coordinates are world units (X right, Z toward camera).
import { AGENTS } from '../data/agents'

// Les rangées ont descendu de 1,2 avec seatPositions · le maître occupe
// désormais le fond, et cette grille de secours doit rester d'accord avec la
// vraie (voir SEAT_CENTRE_Z plus bas).
export const CELL = { xs: [-4.2, -1.4, 1.4, 4.2], zs: [-1.5, 1.9, 5.3] }

// deterministic grid position per agent (order of AGENTS)
export const POS3D: Record<string, [number, number]> = {}
AGENTS.forEach((a, i) => {
  const col = i % 4
  const row = Math.floor(i / 4)
  POS3D[a.id] = [CELL.xs[col], CELL.zs[row]]
})

export const HERO_HOME3D: [number, number] = [0, 7.4]

// the 12 desk slots in seating order (a dojo's agents are placed onto these)
export const SEATS: [number, number][] = AGENTS.map((a) => POS3D[a.id])

/** Le centre des rangées · elles tournaient autour de z ≈ 0,7, c'est-à-dire
 *  au MILIEU de la salle, quand le maître se tenait devant elles. Il est
 *  passé au fond, sur son estrade (voir components/three/stage.ts), et le
 *  fond a besoin de sa place : les postes descendent donc vers la caméra, ce
 *  qui dégage la bande du fond pour l'estrade et le couloir de la porte.
 *
 *  1,9 et pas davantage : au-delà, le bureau de la rangée de devant (qui se
 *  pose à DESK_FWD en avant du siège) sortait de la pièce. */
export const SEAT_CENTRE_Z = 1.9

/** Positions for exactly `n` agents on a centred grid (≤4 per row), so a dojo
 *  only ever shows as many desks as it has agents · no empty slots, and each
 *  row is centred (a short final row too). */
export function seatPositions(n: number): [number, number][] {
  if (n <= 0) return []
  const cols = Math.min(4, n)
  const rows = Math.ceil(n / cols)
  const xStep = 2.8
  const zStep = 3.4
  const zStart = -((rows - 1) / 2) * zStep + SEAT_CENTRE_Z
  const out: [number, number][] = []
  for (let i = 0; i < n; i++) {
    const row = Math.floor(i / cols)
    const inRow = Math.min(cols, n - row * cols)
    const col = i - row * cols
    out.push([(col - (inRow - 1) / 2) * xStep, zStart + row * zStep])
  }
  return out
}

// live map of the active dojo's agent id -> world [x,z], published by the scene.
// Lets the Chief and camera follow custom agents seated at dynamic slots.
export const AGENT_POS: Record<string, [number, number]> = {}
export function setAgentPositions(m: Record<string, [number, number]>) {
  for (const k of Object.keys(AGENT_POS)) delete AGENT_POS[k]
  Object.assign(AGENT_POS, m)
}
export function agentWorldPos(id: string): [number, number] | undefined {
  return AGENT_POS[id] ?? POS3D[id]
}

export function heroPos3D(targetId: string | null): [number, number] {
  if (!targetId || targetId === 'home') return HERO_HOME3D
  const p = agentWorldPos(targetId)
  if (!p) return HERO_HOME3D
  return [p[0], p[1] + 0.15] // hover directly over the agent's head
}

export const ROOM = { w: 20, d: 16, wallH: 6 }

// how far in front of a seated agent (toward camera) the desk sits
export const DESK_FWD = 1.05
