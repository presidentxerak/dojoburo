// "How this teammate works" · the plain-language editor for an agent's brief.
//
// Founders never see Markdown here: the shipped sheet is parsed into everyday
// fields (who they are, how they work, what they must never do…) which they edit
// like a normal form. It is written back out as Markdown, which is what the
// model actually receives on every run.
import { useEffect, useState } from 'react'
import { loadContext, saveContext, resetContext, hasContext } from '../../data/agentContext'
import { SHEET_FIELDS, parseSheet, serializeSheet, type AgentSheet } from '../../lib/agentSheet'
import { useDojo } from '../../store'
import { InfoDot } from '../InfoDot'

export function AgentContext({ dojoId, roleId, agentName }: { dojoId: string; roleId: string; agentName: string }) {
  const pushToast = useDojo((s) => s.pushToast)
  const [open, setOpen] = useState(false)
  const [sheet, setSheet] = useState<AgentSheet | null>(null)
  const [dirty, setDirty] = useState(false)

  useEffect(() => {
    let alive = true
    void loadContext(dojoId, roleId).then((md) => { if (alive) { setSheet(parseSheet(md)); setDirty(false) } })
    return () => { alive = false }
  }, [dojoId, roleId])

  if (!hasContext(roleId) || !sheet) return null

  const setField = (heading: string, value: string) => {
    setSheet((s) => (s ? { ...s, values: { ...s.values, [heading]: value } } : s))
    setDirty(true)
  }

  const save = async () => {
    await saveContext(dojoId, roleId, serializeSheet(sheet))
    setDirty(false)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Saved', text: `${agentName} will work this way from now on.` })
  }
  const reset = async () => {
    if (!confirm(`Put ${agentName} back to how they started? Your changes are lost.`)) return
    await resetContext(dojoId, roleId)
    const md = await loadContext(dojoId, roleId)
    setSheet(parseSheet(md)); setDirty(false)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Back to default', text: `${agentName} is back to their original way of working.` })
  }

  return (
    <section className="agx">
      <button className="agx-h" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>How {agentName} works
          <InfoDot title={`How ${agentName} works`} label="What this changes">
            <p>This is the brief <b>{agentName}</b> follows on every task: what they are here to do, how they work step by step, and what they must never do.</p>
            <p>Change anything here and it takes effect on their next piece of work. Nothing is permanent — you can always put them back to how they started.</p>
          </InfoDot>
        </span>
        <em>{open ? 'Close' : 'Edit'}</em>
      </button>

      {/* collapsed · a one-line reminder of what this teammate is here to do */}
      {!open && (sheet.values['Mission'] || '').trim() && (
        <p className="agx-peek">{(sheet.values['Mission'] || '').split('\n')[0]}</p>
      )}

      {open && (
        <div className="agx-form">
          {SHEET_FIELDS.map((f) => {
            const value = sheet.values[f.heading] ?? ''
            const isMulti = f.kind !== 'text'
            const count = value.split('\n').filter((l) => l.trim()).length
            return (
              <label key={f.heading} className="agx-field">
                <span className="agx-label">
                  {f.label}
                  {isMulti && count > 0 && <b className="agx-n">{count}</b>}
                </span>
                <span className="agx-hint">{f.hint}</span>
                <textarea
                  rows={f.kind === 'text' ? 3 : Math.min(9, Math.max(3, count + 1))}
                  value={value}
                  placeholder={f.placeholder}
                  onChange={(e) => setField(f.heading, e.target.value)}
                />
              </label>
            )
          })}

          <div className="agx-acts">
            <button className="btn primary tiny" disabled={!dirty} onClick={() => void save()}>
              {dirty ? 'Save changes' : 'Saved'}
            </button>
            <button className="btn tiny ghost" onClick={() => void reset()}>Back to default</button>
          </div>
        </div>
      )}
    </section>
  )
}
