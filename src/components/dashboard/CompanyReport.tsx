// CompanyReport · the CEO's cross-team report. It rolls up every agent (the
// eight core plus Engineering, Comms, Support and Legal) into one view: activity
// per agent, app coverage, the work-flow pipeline, and live connector KPIs where
// connected. Everything is exportable · CSV (data) and SVG (the charts).
import { useEffect, useMemo, useRef, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { useEngine } from '../../agents/engineStore'
import { useDeliverables } from '../../agents/deliverables'
import { toolData } from '../../agents/workApi'
import { ROLE_AGENTS, ROLE_BY_ID, canonicalRole } from '../../data/roleAgents'
import { InfoDot } from '../InfoDot'

// which deliverables each agent produces (mirrors the roster mapping)
const AGENT_TASKS: Record<string, string[]> = {
  chief: ['strategy'], brandi: ['brand'], weblos: ['website'],
  marketus: ['ads', 'video', 'assets'], pumpi: ['outreach'],
  busino: ['offer', 'analytics', 'finance'],
}

// the company task pipeline · stage → the agents that own it
const FLOW: { stage: string; roles: string[] }[] = [
  { stage: 'Lead', roles: ['chief'] },
  { stage: 'Build', roles: ['brandi', 'weblos', 'devi'] },
  { stage: 'Grow', roles: ['marketus', 'pumpi'] },
  { stage: 'Engage', roles: ['nexa', 'helpi'] },
  { stage: 'Operate', roles: ['busino', 'vaultor', 'legi', 'sentinel'] },
]

interface Row { id: string; name: string; title: string; tint: string; dept: string; deliverables: number; appsOn: number; appsTotal: number }

function csvEscape(v: string): string { return /[",\n;]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v }
function download(name: string, mime: string, content: string) {
  const blob = new Blob([content], { type: mime })
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 4000)
}

// A tidy horizontal bar chart (pure SVG · exportable).
function BarChart({ rows, valueKey, max, unit }: { rows: Row[]; valueKey: 'deliverables' | 'appsOn'; max: number; unit: string }) {
  const rowH = 26, gap = 8, padL = 128, padR = 44, w = 520
  const h = rows.length * (rowH + gap) + 8
  return (
    <svg className="rep-svg" viewBox={`0 0 ${w} ${h}`} width="100%" role="img" aria-label={`${unit} per agent`}>
      {rows.map((r, i) => {
        const v = r[valueKey]
        const bw = max > 0 ? Math.max(2, (v / max) * (w - padL - padR)) : 2
        const y = i * (rowH + gap) + 4
        return (
          <g key={r.id}>
            <text x={padL - 10} y={y + rowH / 2} textAnchor="end" dominantBaseline="middle" className="rep-lbl">{r.name}</text>
            <rect x={padL} y={y} width={bw} height={rowH} rx={7} fill={r.tint} />
            <text x={padL + bw + 8} y={y + rowH / 2} dominantBaseline="middle" className="rep-val">{v}{unit === 'apps' ? `/${r.appsTotal}` : ''}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function CompanyReport({ dojoId }: { dojoId: string }) {
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId))
  const tools = useWork((s) => s.tools)
  const engine = useEngine()
  const delivs = useDeliverables((s) => s.byDojo[dojoId] ?? [])
  const svgWrap = useRef<HTMLDivElement>(null)
  const [kpis, setKpis] = useState<{ label: string; value: string }[]>([])

  const agents = (dojo?.agents ?? []).filter((a) => !a.hidden && a.role)
  const rows: Row[] = useMemo(() => ROLE_AGENTS
    .filter((r) => agents.some((a) => a.role === r.id))
    .map((r) => {
      const tasks = AGENT_TASKS[r.id] ?? []
      const deliverables = delivs.filter((d) => tasks.includes(d.taskId)).length
      const appsOn = r.apps.filter((id) => tools[id]?.connected).length
      return { id: r.id, name: r.name, title: r.title, tint: r.tint, dept: r.dept, deliverables, appsOn, appsTotal: r.apps.length }
    }), [agents, delivs, tools])

  const maxDeliv = Math.max(1, ...rows.map((r) => r.deliverables))
  const maxApps = Math.max(1, ...rows.map((r) => r.appsTotal))
  const totalDeliv = rows.reduce((n, r) => n + r.deliverables, 0)
  const totalApps = rows.reduce((n, r) => n + r.appsOn, 0)

  // live connector KPIs · degrade-safe, only shown when connected/permitted
  useEffect(() => {
    let alive = true
    const load = async () => {
      const out: { label: string; value: string }[] = []
      const [stripe, ga, hs, cal] = await Promise.all([
        tools.stripe?.connected ? toolData('stripe') : Promise.resolve(null),
        tools.ga4?.connected ? toolData('ga4') : Promise.resolve(null),
        tools.hubspot?.connected ? toolData('hubspot') : Promise.resolve(null),
        tools.gcal?.connected ? toolData('gcal') : Promise.resolve(null),
      ])
      const sd = stripe?.data as { available?: { amount: number; currency: string }[] } | undefined
      if (sd?.available?.length) out.push({ label: 'Stripe balance', value: `${sd.available[0].amount.toLocaleString()} ${sd.available[0].currency}` })
      const gd = ga?.data as { sessions?: number } | undefined
      if (gd?.sessions != null) out.push({ label: 'Sessions (28d)', value: gd.sessions.toLocaleString() })
      const hd = hs?.data as { deals?: { pipeline?: number } } | undefined
      if (hd?.deals?.pipeline != null) out.push({ label: 'Pipeline', value: hd.deals.pipeline.toLocaleString() })
      const cd = cal?.data as { events?: unknown[] } | undefined
      if (cd?.events) out.push({ label: 'Upcoming meetings', value: String(cd.events.length) })
      if (alive) setKpis(out)
    }
    void load()
    return () => { alive = false }
  }, [tools])

  const exportCsv = () => {
    const head = ['Agent', 'Role', 'Department', 'Deliverables', 'Apps connected', 'Apps total']
    const lines = [head.join(',')]
    for (const r of rows) lines.push([r.name, r.title, r.dept, r.deliverables, r.appsOn, r.appsTotal].map((v) => csvEscape(String(v))).join(','))
    lines.push('')
    lines.push(['Totals', '', '', totalDeliv, totalApps, rows.reduce((n, r) => n + r.appsTotal, 0)].join(','))
    for (const k of kpis) lines.push([csvEscape(k.label), csvEscape(k.value)].join(','))
    download(`${(dojo?.name || 'company').replace(/\s+/g, '-').toLowerCase()}-report.csv`, 'text/csv', lines.join('\n'))
  }
  const exportSvg = () => {
    const svgs = svgWrap.current?.querySelectorAll('svg') || []
    if (!svgs.length) return
    // stack the charts into one exportable SVG document
    let y = 0; const parts: string[] = []
    svgs.forEach((s) => { const vb = s.getAttribute('viewBox')?.split(' ') || ['0', '0', '520', '200']; const h = Number(vb[3]); parts.push(`<g transform="translate(0 ${y})">${s.innerHTML}</g>`); y += h + 24 })
    const doc = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 ${y}" font-family="sans-serif"><style>.rep-lbl{font-size:12px;fill:#333}.rep-val{font-size:12px;fill:#666;font-weight:700}</style>${parts.join('')}</svg>`
    download(`${(dojo?.name || 'company').replace(/\s+/g, '-').toLowerCase()}-charts.svg`, 'image/svg+xml', doc)
  }

  return (
    <section className="rep">
      <div className="mission-head">
        <h3>Company report
          <InfoDot title="Company report" label="How the report works">
            <p>A cross-team snapshot: deliverables and app coverage per agent (bar charts), the work-flow pipeline, and live KPIs where connected (Stripe revenue, GA sessions, HubSpot pipeline, meetings).</p>
            <p><b>Export CSV</b> downloads the underlying data; <b>Export charts (SVG)</b> saves the graphs as a vector file for slides or docs.</p>
          </InfoDot>
        </h3>
        <span className="muted small">Every agent's activity, app coverage and live metrics · exportable.</span>
        <span className="rep-actions">
          <button className="btn tiny" onClick={exportCsv}>Export CSV</button>
          <button className="btn tiny ghost" onClick={exportSvg}>Export charts (SVG)</button>
        </span>
      </div>

      <div className="rep-kpis">
        <div className="rep-kpi"><span>{totalDeliv}</span><em>deliverables</em></div>
        <div className="rep-kpi"><span>{engine.creditsToday}</span><em>credits (today)</em></div>
        <div className="rep-kpi"><span>{totalApps}</span><em>apps connected</em></div>
        <div className="rep-kpi"><span>{rows.length}</span><em>active agents</em></div>
        {kpis.map((k) => <div key={k.label} className="rep-kpi live"><span>{k.value}</span><em>{k.label}</em></div>)}
      </div>

      {/* work-flow pipeline */}
      <h4 className="brand-h">Work flow</h4>
      <div className="rep-flow">
        {FLOW.map((f, i) => {
          const present = f.roles.filter((id) => agents.some((a) => a.role === id))
          if (!present.length) return null
          const d = present.reduce((n, id) => n + (delivs.filter((x) => (AGENT_TASKS[id] ?? []).includes(x.taskId)).length), 0)
          return (
            <div key={f.stage} className="rep-flow-stage">
              <div className="rep-flow-top"><b>{f.stage}</b><span className="rep-flow-count">{d}</span></div>
              <div className="rep-flow-agents">
                {present.map((id) => { const r = ROLE_BY_ID[canonicalRole(id)]; return <span key={id} className="rep-flow-chip" style={{ ['--ac' as string]: r.tint }}>{r.code}</span> })}
              </div>
              {i < FLOW.length - 1 && <span className="rep-flow-arrow">→</span>}
            </div>
          )
        })}
      </div>

      <div ref={svgWrap} className="rep-charts">
        <div className="rep-chart">
          <h4 className="brand-h">Deliverables by agent</h4>
          <BarChart rows={rows} valueKey="deliverables" max={maxDeliv} unit="deliverables" />
        </div>
        <div className="rep-chart">
          <h4 className="brand-h">App coverage by agent</h4>
          <BarChart rows={rows} valueKey="appsOn" max={maxApps} unit="apps" />
        </div>
      </div>
    </section>
  )
}
