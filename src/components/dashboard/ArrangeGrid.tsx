// ArrangeGrid · reposition the team on the dojo grid, on desktop AND mobile.
// Tap an agent, then tap a target cell to move it (occupied cells swap). The 3D
// dojo seats agents in grid order (gy*cols+gx), so any change here is reflected
// live in the office. Hidden agents are omitted · restore them from the roster.
import { useState } from 'react'
import { useWorkshop, GRID } from '../../workshop'
import { ROLE_BY_ID, canonicalRole } from '../../data/roleAgents'

export function ArrangeGrid() {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const moveAgent = useWorkshop((s) => s.moveAgent)
  const [sel, setSel] = useState<string | null>(null)

  const agents = (dojo?.agents ?? []).filter((a) => !a.hidden)
  const at = (gx: number, gy: number) => agents.find((a) => a.gx === gx && a.gy === gy)

  const tapCell = (gx: number, gy: number) => {
    const occupant = at(gx, gy)
    if (!sel) { if (occupant) setSel(occupant.id); return }
    if (occupant && occupant.id === sel) { setSel(null); return }  // tap self → deselect
    moveAgent(sel, gx, gy)   // moves (and swaps if occupied)
    setSel(null)
  }

  return (
    <div className="arrange">
      <p className="muted small arrange-hint">
        {sel ? 'Now tap a cell to move it there.' : 'Tap an agent, then tap a cell to move it. Works on desktop and mobile · the dojo updates live.'}
      </p>
      <div className="arrange-grid" style={{ gridTemplateColumns: `repeat(${GRID.cols}, 1fr)` }}>
        {Array.from({ length: GRID.rows * GRID.cols }).map((_, i) => {
          const gx = i % GRID.cols
          const gy = Math.floor(i / GRID.cols)
          const a = at(gx, gy)
          const role = a?.role ? ROLE_BY_ID[canonicalRole(a.role)] : undefined
          const selected = a?.id === sel
          return (
            <button
              key={i}
              className={`arrange-cell${a ? ' filled' : ''}${selected ? ' sel' : ''}`}
              style={role ? { ['--ac' as string]: role.tint } : undefined}
              onClick={() => tapCell(gx, gy)}
              title={a ? `${a.name} · ${role?.title ?? ''}` : 'Empty cell'}
              aria-label={a ? `${a.name}, tap to select or move` : 'Empty cell'}
            >
              {a ? <span className="arrange-name">{a.name}</span> : <span className="arrange-empty">·</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
