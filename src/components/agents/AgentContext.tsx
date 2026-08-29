// An agent's CONTEXT sheet · the Markdown that defines how it works.
//
// Ships with the app (src/data/contexts/<role>.md), editable per company, and
// sent with every run so the agent behaves like that specialist. Collapsed by
// default so it never gets in the way.
import { useEffect, useState } from 'react'
import { loadContext, saveContext, resetContext, hasContext } from '../../data/agentContext'
import { useDojo } from '../../store'
import { InfoDot } from '../InfoDot'

export function AgentContext({ dojoId, roleId, agentName }: { dojoId: string; roleId: string; agentName: string }) {
  const pushToast = useDojo((s) => s.pushToast)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [dirty, setDirty] = useState(false)

  useEffect(() => {
    let alive = true
    void loadContext(dojoId, roleId).then((t) => { if (alive) { setText(t); setDirty(false) } })
    return () => { alive = false }
  }, [dojoId, roleId])

  if (!hasContext(roleId)) return null

  const save = async () => {
    await saveContext(dojoId, roleId, text)
    setDirty(false)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Context saved', text: `${agentName} will work from this from now on.` })
  }
  const reset = async () => {
    await resetContext(dojoId, roleId)
    const t = await loadContext(dojoId, roleId)
    setText(t); setDirty(false)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Context reset', text: 'Back to the shipped profile.' })
  }

  return (
    <section className="agx">
      <button className="agx-h" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{agentName}'s context
          <InfoDot title="Agent context" label="What the context does">
            <p>This is the sheet that tells <b>{agentName}</b> how to work: its mission, its expertise, its method, what it delivers and what it must never do.</p>
            <p>It is sent with every task this agent runs. Edit it to specialise the agent for your business — or reset it to the shipped profile.</p>
          </InfoDot>
        </span>
        <em>{open ? 'Hide' : 'View & edit'}</em>
      </button>
      {open && (
        <>
          <textarea
            className="agx-ta"
            rows={16}
            value={text}
            onChange={(e) => { setText(e.target.value); setDirty(true) }}
            spellCheck={false}
          />
          <div className="agx-acts">
            <button className="btn primary tiny" disabled={!dirty} onClick={() => void save()}>Save context</button>
            <button className="btn tiny ghost" onClick={() => void reset()}>Reset to default</button>
            <span className="muted small">Markdown · sent with every run of this agent.</span>
          </div>
        </>
      )}
    </section>
  )
}
