// The two SYSTEM agents that sit above every company.
//
//  · Pilot  — orchestrates the WHOLE pipeline: runs each team's loop in order.
//  · Kaizen — watches over the app itself: reports real health (build, storage,
//    backend, model, safety switches) and flags what needs attention. It only
//    ever reports what it can actually observe · never a fake "all good".
import { useEffect, useState } from 'react'
import { useWorkshop } from '../../workshop'
import { useWork } from '../../agents/workStore'
import { useEngine } from '../../agents/engineStore'
import { useOutboundConsent } from '../../agents/outboundConsent'
import { ROLE_BY_ID } from '../../data/roleAgents'
import { InfoDot } from '../InfoDot'
import { BUILD_ID } from '../../lib/build'


type Level = 'ok' | 'warn' | 'info'
interface Check { label: string; value: string; level: Level }

/** Rough size of everything DojoBuro keeps in localStorage, in KB. */
function storageKb(): number {
  let n = 0
  try {
    for (const k of Object.keys(localStorage)) {
      if (!k.startsWith('dojoburo.')) continue
      n += (localStorage.getItem(k)?.length ?? 0) + k.length
    }
  } catch { return 0 }
  return Math.round(n / 1024)
}

export function SystemAgents({ projectCount, onRunPipeline, running }: {
  projectCount: number
  onRunPipeline: () => void
  running: boolean
}) {
  const dojos = useWorkshop((s) => s.dojos)
  const backend = useWork((s) => s.backend)
  const tools = useWork((s) => s.tools)
  const loadedOnce = useWork((s) => s.loadedOnce)
  const engine = useEngine()
  const consented = useOutboundConsent((s) => s.consented)
  const [open, setOpen] = useState(false)

  useEffect(() => { if (!loadedOnce) void useWork.getState().loadTools() }, [loadedOnce])

  const pilot = ROLE_BY_ID.pilot
  const kaizen = ROLE_BY_ID.kaizen
  const agents = dojos.reduce((n, d) => n + d.agents.length, 0)
  const connected = Object.values(tools).filter((t) => (t as { connected?: boolean }).connected).length
  const kb = storageKb()

  const checks: Check[] = [
    { label: 'App version', value: `v${BUILD_ID}`, level: 'info' },
    { label: 'Teams · agents', value: `${dojos.length} · ${agents}`, level: 'info' },
    { label: 'Local data', value: `${kb} KB in this browser`, level: kb > 4000 ? 'warn' : 'ok' },
    { label: 'App connections', value: backend ? 'live' : 'not set up yet', level: backend ? 'ok' : 'info' },
    { label: 'Connected apps', value: String(connected), level: connected > 0 ? 'ok' : 'info' },
    { label: 'Outbound confirmation', value: consented ? 'confirmed once' : 'will ask once', level: 'ok' },
    { label: 'Company', value: engine.paused ? 'PAUSED' : 'running', level: engine.paused ? 'warn' : 'ok' },
    { label: 'Daily spending limit', value: `${engine.creditsToday} / ${engine.dailyCreditCap}`, level: engine.creditsToday >= engine.dailyCreditCap ? 'warn' : 'ok' },
  ]
  const warnings = checks.filter((c) => c.level === 'warn').length

  return (
    <div className="sys">
      {/* Pilot · pipeline orchestrator */}
      <div className="sys-card" style={{ ['--ac' as string]: pilot?.tint ?? '#6366f1' }}>
        <span className="sys-face" style={{ background: pilot?.tint }}>P</span>
        <div className="sys-b">
          <strong>{pilot?.code ?? 'Pilot'} <em>{pilot?.title ?? 'Project Manager'}</em>
            <InfoDot title="Pilot" label="What Pilot does">
              <p>Pilot runs your <b>whole company</b>: it takes each team in order and runs its plan, so everything plan executes end to end.</p>
              <p>Each team also has its own lead (Chief) who runs just that team. Pilot is the level above.</p>
            </InfoDot>
          </strong>
          <span className="sys-line">{projectCount ? `${projectCount} team${projectCount > 1 ? 's' : ''} ready to run in order.` : 'Add a team below and Pilot will run it.'}</span>
        </div>
        <button className="btn primary tiny" disabled={!projectCount || running} onClick={onRunPipeline}>
          {running ? 'Running…' : 'Run everything'}
        </button>
      </div>

      {/* Kaizen · system guardian */}
      <div className="sys-card" style={{ ['--ac' as string]: kaizen?.tint ?? '#0f766e' }}>
        <span className="sys-face" style={{ background: kaizen?.tint }}>K</span>
        <div className="sys-b">
          <strong>{kaizen?.code ?? 'Kaizen'} <em>{kaizen?.title ?? 'App Caretaker'}</em>
            <InfoDot title="Kaizen" label="What Kaizen does">
              <p>Kaizen looks after the app itself: which version you run, how much data sits in this browser, whether the backend and your apps are live, and whether the safety switches are on.</p>
              <p>It reports only what it can actually observe · it never claims something works when it isn't configured.</p>
            </InfoDot>
          </strong>
          <span className="sys-line">
            {warnings ? `${warnings} thing${warnings > 1 ? 's' : ''} to look at` : 'System healthy'} · v{BUILD_ID}
          </span>
        </div>
        <button className="btn tiny ghost" onClick={() => setOpen((v) => !v)}>{open ? 'Hide' : 'Check'}</button>
      </div>

      {open && (
        <ul className="sys-checks">
          {checks.map((c) => (
            <li key={c.label} className={`sys-check l-${c.level}`}>
              <span className="sys-check-k">{c.label}</span>
              <span className="sys-check-v">{c.value}</span>
            </li>
          ))}
          <li className="sys-note">Kaizen reads live app state. Updates ship from the deployment · use the version button in the header to pull the latest build.</li>
        </ul>
      )}
    </div>
  )
}
