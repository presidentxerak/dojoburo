// Custom agent workspace · the studio for a user-created teammate. It gives a
// custom agent the same shape as the presets: an editable identity (job title,
// description, accent colour), the apps it works with (live connect in place),
// a task list you assign to it, and a private notepad. 100% local.
import { useMemo, useState } from 'react'
import { useWorkshop, type WAgent } from '../../workshop'
import { useAgentSpace } from '../../agents/agentWorkspace'
import { CONNECTORS, CONNECTOR_BY_ID } from '../../data/connectors'
import { StudioConnectors } from '../../components/StudioConnectors'
import { ConnectorLogo } from '../../components/ConnectorLogo'
import { InfoDot } from '../../components/InfoDot'

const TINTS = ['#7b5cff', '#2f7fd6', '#e0459b', '#1fa563', '#d98c17', '#14b8a6', '#f97316', '#a855f7', '#0e9bb5', '#ef4444']

export function CustomAgentWorkspace({ agent }: { agent: WAgent }) {
  const updateCustomAgent = useWorkshop((s) => s.updateCustomAgent)
  const meta = agent.custom!
  const space = useAgentSpace((s) => s.byAgent[agent.id]) ?? { notes: '', tasks: [] }
  const setNotes = useAgentSpace((s) => s.setNotes)
  const addTask = useAgentSpace((s) => s.addTask)
  const toggleTask = useAgentSpace((s) => s.toggleTask)
  const removeTask = useAgentSpace((s) => s.removeTask)

  const [taskText, setTaskText] = useState('')
  const [pickApps, setPickApps] = useState(false)

  const doneCount = space.tasks.filter((t) => t.done).length
  const catalog = useMemo(() => [...CONNECTORS].sort((a, b) => a.label.localeCompare(b.label)), [])
  const toggleApp = (id: string) => {
    const has = meta.apps.includes(id)
    updateCustomAgent(agent.id, { apps: has ? meta.apps.filter((x) => x !== id) : [...meta.apps, id] })
  }
  const submitTask = () => { addTask(agent.id, taskText); setTaskText('') }

  return (
    <div className="ad-body custom-ws">
      {/* identity · title + description + accent */}
      <div className="sq-eyebrow">Identity
        <InfoDot title="Custom agent" label="How this workspace works">
          <p>This is a teammate you created. Give it a <b>job title</b> and a short <b>description</b> so you and Chief know what it does, and pick an <b>accent colour</b>.</p>
          <p>Add the <b>apps</b> it works with, assign it <b>tasks</b>, and keep private <b>notes</b>. Everything is saved locally in your browser.</p>
        </InfoDot>
      </div>
      <label className="site-field"><span>Job title</span>
        <input value={meta.title} maxLength={40} onChange={(e) => updateCustomAgent(agent.id, { title: e.target.value })} placeholder="e.g. Recruiter, Copywriter, Analyst" />
      </label>
      <label className="site-field"><span>Description</span>
        <textarea rows={2} value={meta.desc} maxLength={160} onChange={(e) => updateCustomAgent(agent.id, { desc: e.target.value })} placeholder="What this agent is responsible for." />
      </label>
      <div className="site-field"><span>Accent colour</span>
        <div className="custom-tints">
          {TINTS.map((c) => (
            <button key={c} className={`custom-tint${meta.tint === c ? ' on' : ''}`} style={{ background: c }} title={c} aria-label={`Accent ${c}`} onClick={() => updateCustomAgent(agent.id, { tint: c })} />
          ))}
          <input type="color" value={/^#[0-9a-fA-F]{6}$/.test(meta.tint) ? meta.tint : '#7b5cff'} onChange={(e) => updateCustomAgent(agent.id, { tint: e.target.value })} aria-label="Custom accent colour" />
        </div>
      </div>

      {/* apps · pick + live connect */}
      <div className="sq-eyebrow" style={{ marginTop: 16 }}>Apps
        <button className="btn tiny ghost" onClick={() => setPickApps((v) => !v)}>{pickApps ? 'Done' : 'Choose apps'}</button>
      </div>
      {pickApps ? (
        <div className="custom-apppick">
          {catalog.map((c) => (
            <button key={c.id} className={`custom-appchip${meta.apps.includes(c.id) ? ' on' : ''}`} onClick={() => toggleApp(c.id)} title={c.blurb}>
              <ConnectorLogo id={c.id} label={c.label} size={18} />{c.label}
            </button>
          ))}
        </div>
      ) : meta.apps.length ? (
        <StudioConnectors appIds={meta.apps.filter((id) => CONNECTOR_BY_ID[id])} />
      ) : (
        <p className="muted small">No apps yet. Click <b>Choose apps</b> to pick the tools this agent works with, then connect them here.</p>
      )}

      {/* tasks · assign work to this agent */}
      <div className="sq-eyebrow" style={{ marginTop: 16 }}>Tasks {space.tasks.length > 0 && <span className="team-count">{doneCount}/{space.tasks.length}</span>}</div>
      <div className="composer-row">
        <input value={taskText} onChange={(e) => setTaskText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && submitTask()} placeholder="Assign a task to this agent…" maxLength={120} />
        <button className="btn primary tiny" onClick={submitTask} disabled={!taskText.trim()}>Add</button>
      </div>
      {space.tasks.length === 0 ? (
        <p className="muted small">No tasks yet. Add what this agent should get done.</p>
      ) : (
        <ul className="custom-tasks">
          {space.tasks.map((t) => (
            <li key={t.id} className={t.done ? 'done' : ''}>
              <button className="custom-task-check" role="checkbox" aria-checked={t.done} onClick={() => toggleTask(agent.id, t.id)}>{t.done ? 'Done' : 'Do'}</button>
              <span className="custom-task-text">{t.text}</span>
              <button className="custom-task-del" onClick={() => removeTask(agent.id, t.id)} aria-label="Delete task">Remove</button>
            </li>
          ))}
        </ul>
      )}

      {/* notes · private scratchpad */}
      <div className="sq-eyebrow" style={{ marginTop: 16 }}>Notes</div>
      <textarea className="custom-notes" rows={5} value={space.notes} onChange={(e) => setNotes(agent.id, e.target.value)} placeholder="Anything this agent should remember: context, style, links, priorities…" />
      <p className="muted small">Saved locally as you type. This workspace and its content live in your browser only.</p>
    </div>
  )
}
