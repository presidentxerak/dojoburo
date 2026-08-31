// What a teammate can actually do for you, and what they have already done.
//
// This replaces thirteen hand-built "studios" — a website builder, a CRM, a
// finance tab and so on. They were the product before the teammates were: real
// editors you operated yourself, sitting beside an agent that was supposed to
// do the work for you. Only one of their twenty-six files ever called the
// model. They competed with the teammate instead of showing what it produced.
//
// So a teammate's page is now the teammate: the deliverables they can produce,
// one line saying what you want, the apps they will act in, and the work they
// have already handed back — openable, exportable, re-runnable.
import { useState } from 'react'
import { useWork } from '../../agents/workStore'
import { useDeliverables } from '../../agents/deliverables'
import { useAgentApps, effectiveApps } from '../../agents/agentApps'
import { tasksForFunction } from '../../data/connectors'
import { CONNECTOR_BY_ID } from '../../data/connectors'
import { ConnectorLogo } from '../ConnectorLogo'
import type { RoleAgent } from '../../data/roleAgents'
import type { WAgent } from '../../workshop'

const relTime = (t: number) => {
  const m = Math.round((Date.now() - t) / 60000)
  if (m < 1) return 'just now'
  if (m < 60) return `${m} min ago`
  const h = Math.round(m / 60)
  return h < 24 ? `${h} h ago` : `${Math.round(h / 24)} d ago`
}

export function AgentWork({ agent, role, dojoId }: { agent: WAgent; role: RoleAgent; dojoId: string }) {
  const run = useWork((s) => s.run)
  const running = useWork((s) => s.runningTask)
  const runError = useWork((s) => s.runError)
  const tools = useWork((s) => s.tools)
  const openStudio = useWork((s) => s.openStudio)
  const showDeliverable = useWork((s) => s.showDeliverable)
  const byKey = useAgentApps((s) => s.byKey)
  const delivs = useDeliverables((s) => s.byDojo[dojoId] ?? [])
  const [brief, setBrief] = useState('')

  const tasks = tasksForFunction(role.dept)
  const apps = effectiveApps(agent.custom?.apps ?? role.apps ?? [], byKey[`${dojoId}::${role.id}`])
  const live = apps.filter((id) => tools[id]?.connected)
  const taskIds = new Set(tasks.map((t) => t.id))
  const mine = delivs.filter((d) => taskIds.has(d.taskId)).slice(0, 6)

  if (!tasks.length) return null

  return (
    <section className="agw">
      <header className="agw-head">
        <h3>What {agent.name} can do for you</h3>
        <span className="agw-sub">
          Pick one. {live.length > 0
            ? <>They will act for real in <b>{live.map((id) => CONNECTOR_BY_ID[id]?.label ?? id).join(', ')}</b>.</>
            : <>Connect an app below and they act inside it instead of only writing about it.</>}
        </span>
      </header>

      <input
        className="agw-brief"
        placeholder={`What should ${agent.name} focus on? (optional)`}
        value={brief}
        maxLength={300}
        onChange={(e) => setBrief(e.target.value)}
      />

      <ul className="agw-tasks">
        {tasks.map((t) => {
          const busy = running === t.id
          const usable = (t.usesConnectors ?? []).filter((c) => live.includes(c))
          return (
            <li key={t.id}>
              <button
                className="agw-task"
                disabled={!!running}
                onClick={() => void run({ task: t.id, agentName: agent.name, connectors: live, brief, dojoId })}
              >
                <span className="agw-task-main">
                  <strong>{busy ? 'Working…' : t.label}</strong>
                  <em>{t.blurb}</em>
                  {usable.length > 0 && <span className="agw-acts">acts in {usable.map((id) => CONNECTOR_BY_ID[id]?.label ?? id).join(', ')}</span>}
                </span>
                {busy && <span className="agw-spin" />}
              </button>
            </li>
          )
        })}
      </ul>

      {runError && (
        <p className="agw-err">
          {runError.code === 'quota'
            ? <>Today's free allowance is used up. <button className="linklike" onClick={() => openStudio('billing')}>Add credits or your own key</button>.</>
            : runError.code === 'needs_key'
              ? <>No model is set up on this deployment yet. <button className="linklike" onClick={() => openStudio('billing')}>Add your Claude key</button>.</>
              : <>That didn't go through: {runError.detail || runError.code}</>}
        </p>
      )}

      {apps.length > 0 && (
        <div className="agw-apps">
          <span className="agw-apps-h">Their apps</span>
          {apps.map((id) => {
            const c = CONNECTOR_BY_ID[id]
            if (!c) return null
            const on = !!tools[id]?.connected
            return (
              <span key={id} className={`agw-app${on ? ' on' : ''}`} title={on ? `${c.label} · connected` : `${c.label} · not connected`}>
                <ConnectorLogo id={id} label={c.label} size={16} />{c.label}
              </span>
            )
          })}
        </div>
      )}

      <div className="agw-out">
        <span className="agw-apps-h">What they have produced</span>
        {mine.length === 0 ? (
          <p className="agw-empty">Nothing yet. Run one of the tasks above and it lands here.</p>
        ) : (
          <ul className="agw-list">
            {mine.map((d) => (
              <li key={d.id}>
                <button className="agw-deliv" onClick={() => showDeliverable(d)}>
                  <strong>{d.title}</strong>
                  <em>{relTime(d.createdAt)}{d.model ? ` · ${d.model}` : ''}</em>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
