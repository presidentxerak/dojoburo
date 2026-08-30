// Graph mode · the team as an actual graph.
//
// Not a grid of cards: a hierarchy with edges you can follow. The team lead
// sits at the top; every other teammate hangs off it, laid out in the order
// their plan runs. Two kinds of link are drawn, and they mean different things:
//
//   · reporting  — a soft curve from the lead down to each teammate
//   · the plan   — an arrow from one step to the next, so you can read the
//                  order the work actually happens in
//
// Each node is a card carrying what that teammate does, what they have really
// produced (counted from the work that exists, never invented), when they last
// worked, and every app they can reach — editable right there.
//
// Edges are measured from the laid-out DOM rather than from a hand-computed
// layout, so the cards can be any height and the links still land on them.
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { useDeliverables } from '../../agents/deliverables'
import { useAgentApps, effectiveApps } from '../../agents/agentApps'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { CONNECTOR_BY_ID, CONNECTORS } from '../../data/connectors'
import { ARCHETYPE_BY_ID } from '../../data/archetypes'
import { ConnectorLogo } from '../ConnectorLogo'
import { FullScreen } from '../FullScreen'
import { AGENT_TASKS } from './agentTasks'
import type { WAgent } from '../../workshop'

const relTime = (t: number) => {
  if (!t) return 'nothing yet'
  const m = Math.round((Date.now() - t) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m} min ago`
  const h = Math.round(m / 60)
  if (h < 24) return `${h} h ago`
  return `${Math.round(h / 24)} d ago`
}

interface Edge { d: string; kind: 'report' | 'flow' }

export function DojoGraph({ dojoId, onClose, onOpenAgent }: {
  dojoId: string
  onClose: () => void
  onOpenAgent?: (agentId: string) => void
}) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId))
  const tools = useWork((s) => s.tools)
  const delivs = useDeliverables((s) => s.byDojo[dojoId] ?? [])
  const byKey = useAgentApps((s) => s.byKey)
  const setApp = useAgentApps((s) => s.setApp)
  const [editing, setEditing] = useState<string | null>(null)

  const canvasRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<Record<string, HTMLElement | null>>({})
  const [edges, setEdges] = useState<Edge[]>([])

  const arch = dojo?.archetype ? ARCHETYPE_BY_ID[dojo.archetype] : null

  // The lead is whoever owns the team: Chief when present, else the first
  // teammate. Everyone else is ordered by where they sit in the plan, so the
  // row reads left-to-right the way the work happens.
  const { lead, rest } = useMemo(() => {
    const crew = (dojo?.agents ?? []).filter((a) => !a.hidden)
    const l = crew.find((a) => a.role === 'chief') ?? crew[0]
    const stepOf = (a: WAgent) => {
      const i = arch?.loop.findIndex((s) => s.agent === a.role) ?? -1
      return i < 0 ? 99 : i
    }
    const others = crew.filter((a) => a !== l).sort((a, b) => stepOf(a) - stepOf(b))
    return { lead: l, rest: others }
  }, [dojo, arch])

  const counts = useMemo(() => {
    const m: Record<string, number> = {}
    for (const a of dojo?.agents ?? []) {
      const tasks = AGENT_TASKS[a.role ?? ''] ?? []
      m[a.id] = delivs.filter((d) => tasks.includes(d.taskId)).length
    }
    return m
  }, [dojo, delivs])
  const peak = Math.max(1, ...Object.values(counts))

  // Measure the laid-out nodes and draw the links between them. Runs after
  // every layout change (resize, an app picker opening, a card growing).
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !lead) return
    const base = canvas.getBoundingClientRect()
    const box = (id: string) => {
      const el = nodeRefs.current[id]
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { x: r.left - base.left, y: r.top - base.top, w: r.width, h: r.height }
    }
    const L = box(lead.id)
    if (!L) return
    const out: Edge[] = []
    const from = { x: L.x + L.w / 2, y: L.y + L.h }

    // reporting · lead down to each teammate
    for (const a of rest) {
      const b = box(a.id)
      if (!b) continue
      const to = { x: b.x + b.w / 2, y: b.y }
      const mid = from.y + (to.y - from.y) / 2
      out.push({ kind: 'report', d: `M ${from.x} ${from.y} C ${from.x} ${mid}, ${to.x} ${mid}, ${to.x} ${to.y}` })
    }

    // The plan · one arrow per hand-over, step n to step n+1, following the
    // WHOLE loop rather than the crew row. The lead usually owns a step itself,
    // so the chain runs up to it and back down — which is the point: the lead is
    // where the work passes through, not a box off to one side.
    const owner = (role: string) => [lead, ...rest].find((a) => a.role === role)
    const chain = (arch?.loop ?? []).map((s) => owner(s.agent)).filter(Boolean) as WAgent[]
    for (let i = 0; i < chain.length - 1; i++) {
      if (chain[i].id === chain[i + 1].id) continue // a step handed to itself
      const a = box(chain[i].id), b = box(chain[i + 1].id)
      if (!a || !b) continue
      if (Math.abs(a.y - b.y) < 24) {
        // side by side · a short arrow across the gap between them
        const y = a.y + Math.min(a.h, b.h) * 0.5
        out.push(a.x < b.x
          ? { kind: 'flow', d: `M ${a.x + a.w} ${y} L ${b.x} ${y}` }
          : { kind: 'flow', d: `M ${a.x} ${y} L ${b.x + b.w} ${y}` })
      } else {
        // on different rows · leave the card it starts from and land on the
        // top or bottom edge of the next one, whichever way the work is going
        const down = b.y > a.y
        const x1 = a.x + a.w / 2, y1 = down ? a.y + a.h : a.y
        const x2 = b.x + b.w / 2, y2 = down ? b.y : b.y + b.h
        const bend = down ? 38 : -38
        out.push({ kind: 'flow', d: `M ${x1} ${y1} C ${x1} ${y1 + bend}, ${x2} ${y2 - bend}, ${x2} ${y2}` })
      }
    }
    setEdges(out)
  }, [lead, rest, arch])

  useLayoutEffect(() => { draw() }, [draw, editing, tools, byKey])
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ro = new ResizeObserver(() => draw())
    ro.observe(canvas)
    for (const el of Object.values(nodeRefs.current)) if (el) ro.observe(el)
    window.addEventListener('resize', draw)
    return () => { ro.disconnect(); window.removeEventListener('resize', draw) }
  }, [draw])

  if (!dojo || !lead) return null

  const Node = ({ a, isLead }: { a: WAgent; isLead?: boolean }) => {
    const r = a.role ? ROLE_BY_ID[a.role] : undefined
    const tint = a.custom?.tint ?? r?.tint ?? '#8892a6'
    const title = a.custom?.title ?? r?.title ?? 'Teammate'
    const blurb = a.custom?.desc ?? r?.desc ?? ''
    const defaults = a.custom?.apps ?? r?.apps ?? []
    const apps = effectiveApps(defaults, byKey[`${dojoId}::${a.role}`])
    const live = apps.filter((id) => tools[id]?.connected)
    const done = counts[a.id] ?? 0
    const tasks = AGENT_TASKS[a.role ?? ''] ?? []
    const times = delivs.filter((d) => tasks.includes(d.taskId)).map((d) => d.createdAt)
    const last = times.length ? Math.max(...times) : 0
    // A teammate can own several steps in a row (the marketer usually writes the
    // plan AND the creatives) · say "Steps 2–3" rather than picking one of them.
    const mine = (arch?.loop ?? []).map((s, i) => (s.agent === a.role ? i : -1)).filter((i) => i >= 0)
    const stepLabel = mine.length === 0 ? null
      : mine.length === 1 ? `Step ${mine[0] + 1}`
      : `Steps ${mine[0] + 1}–${mine[mine.length - 1] + 1}`
    const open = editing === a.id

    return (
      <article
        ref={(el) => { nodeRefs.current[a.id] = el }}
        className={`dg-node appcard${isLead ? ' lead' : ''}`}
        style={{ ['--ac' as string]: tint }}
      >
        <header className="dg-card-h">
          <span className="dg-face" style={{ background: tint }}>{a.name[0]}</span>
          <div className="dg-id">
            <strong>{a.name}</strong>
            <em>{title}</em>
          </div>
          {isLead && <span className="dg-step lead">Team lead</span>}
          {stepLabel && <span className="dg-step">{stepLabel}</span>}
        </header>

        {blurb && <p className="dg-blurb">{blurb}</p>}

        <div className="dg-stats">
          <span className="dg-stat"><b>{done}</b><em>result{done === 1 ? '' : 's'}</em></span>
          <span className="dg-stat"><b>{live.length}/{apps.length}</b><em>apps live</em></span>
          <span className="dg-stat wide"><b>{relTime(last)}</b><em>last worked</em></span>
        </div>
        <div className="dg-bar" aria-hidden>
          <span style={{ width: `${Math.round((done / peak) * 100)}%`, background: tint }} />
        </div>

        <div className="dg-apps">
          {apps.length === 0 && <span className="dg-noapps">No apps yet</span>}
          {apps.map((id) => {
            const c = CONNECTOR_BY_ID[id]
            if (!c) return null
            const on = !!tools[id]?.connected
            return (
              <span key={id} className={`dg-app${on ? ' on' : ''}`} title={on ? `${c.label} · connected` : `${c.label} · not connected yet`}>
                <ConnectorLogo id={id} label={c.label} size={16} />
                {c.label}
                <button className="dg-app-x" aria-label={`Remove ${c.label} from ${a.name}`}
                  onClick={() => a.role && setApp(dojoId, a.role, id, false, defaults)}>×</button>
              </span>
            )
          })}
          {a.role && (
            <button className="dg-addapp" onClick={() => setEditing(open ? null : a.id)}>{open ? 'Done' : '+ App'}</button>
          )}
        </div>

        {open && a.role && (
          <div className="dg-picker">
            {CONNECTORS.filter((c) => !apps.includes(c.id)).slice(0, 40).map((c) => (
              <button key={c.id} className="dg-pick" onClick={() => setApp(dojoId, a.role!, c.id, true, defaults)}>
                <ConnectorLogo id={c.id} label={c.label} size={14} />{c.label}
              </button>
            ))}
          </div>
        )}

        {onOpenAgent && (
          <button className="dg-open" onClick={() => { onOpenAgent(a.id); onClose() }}>Open {a.name} →</button>
        )}
      </article>
    )
  }

  return (
    <FullScreen
      title={dojo.name}
      sub={`${rest.length + 1} teammate${rest.length ? 's' : ''}${arch ? ` · ${arch.loop.length} steps` : ''} · ${delivs.length} result${delivs.length === 1 ? '' : 's'} so far`}
      tint={arch?.tint}
      bodyClass="dg-fs"
      actions={(
        <div className="dg-legend" aria-hidden>
          <span className="dg-leg report">reports to</span>
          <span className="dg-leg flow">then</span>
        </div>
      )}
      onClose={onClose}
    >
        <div className="dg-canvas" ref={canvasRef}>
          <svg className="dg-links" aria-hidden>
            <defs>
              <marker id="dg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
              </marker>
            </defs>
            {edges.map((e, i) => (
              <path key={i} className={`dg-link ${e.kind}`} d={e.d}
                markerEnd={e.kind === 'flow' ? 'url(#dg-arrow)' : undefined} />
            ))}
          </svg>

          <div className="dg-lead-row"><Node a={lead} isLead /></div>
          <div className="dg-crew-row">
            {rest.map((a) => <Node key={a.id} a={a} />)}
          </div>
        </div>
    </FullScreen>
  )
}
