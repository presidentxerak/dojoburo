// "How this teammate works" · the plain-language editor for an agent's brief.
//
// Founders never see Markdown here: the shipped sheet is parsed into everyday
// fields (who they are, how they work, what they must never do…) which they edit
// like a normal form. It is written back out as Markdown, which is what the
// model actually receives on every run.
//
// The form is deliberately roomy: eight fields is a lot to face at once, so
// they open one at a time, each showing a readable preview when closed. A
// numbered rail down the side turns the eight into a sequence you work through
// rather than a wall you scroll past.
import { useEffect, useRef, useState } from 'react'
import { loadContext, saveContext, resetContext, hasContext } from '../../data/agentContext'
import { SHEET_FIELDS, parseSheet, serializeSheet, type AgentSheet, type SheetField } from '../../lib/agentSheet'
import { useDojo } from '../../store'
import { InfoDot } from '../InfoDot'

/** How a field's value reads when its editor is closed. */
function preview(f: SheetField, value: string): string {
  const lines = value.split('\n').map((l) => l.trim()).filter(Boolean)
  if (!lines.length) return 'Nothing set yet'
  if (f.kind === 'text') return lines.join(' ')
  return lines.join(' · ')
}

function Field({ f, n, value, open, onOpen, onChange }: {
  f: SheetField
  n: number
  value: string
  open: boolean
  onOpen: () => void
  onChange: (v: string) => void
}) {
  const ta = useRef<HTMLTextAreaElement>(null)
  const count = value.split('\n').filter((l) => l.trim()).length
  const empty = count === 0

  // grow with the text instead of scrolling inside a fixed box
  useEffect(() => {
    const el = ta.current
    if (!open || !el) return
    el.style.height = 'auto'
    el.style.height = `${Math.max(96, el.scrollHeight)}px`
  }, [open, value])

  useEffect(() => { if (open) ta.current?.focus({ preventScroll: true }) }, [open])

  return (
    <div className={`agx-field${open ? ' open' : ''}${empty ? ' empty' : ''}`}>
      <button type="button" className="agx-fh" onClick={onOpen} aria-expanded={open}>
        <span className="agx-num">{n}</span>
        <span className="agx-fh-txt">
          <span className="agx-label">
            {f.label}
            {f.kind !== 'text' && count > 0 && <b className="agx-n">{count}</b>}
          </span>
          {!open && <span className="agx-prev">{preview(f, value)}</span>}
        </span>
        <span className="agx-caret" aria-hidden>{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="agx-body">
          <p className="agx-hint">{f.hint}</p>
          <textarea
            ref={ta}
            value={value}
            placeholder={f.placeholder}
            spellCheck
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      )}
    </div>
  )
}

export function AgentContext({ dojoId, roleId, agentName }: { dojoId: string; roleId: string; agentName: string }) {
  const pushToast = useDojo((s) => s.pushToast)
  const [open, setOpen] = useState(false)
  const [sheet, setSheet] = useState<AgentSheet | null>(null)
  const [dirty, setDirty] = useState(false)
  const [busy, setBusy] = useState(false)
  // which of the eight fields is being edited · one at a time keeps it calm
  const [field, setField] = useState<string>(SHEET_FIELDS[0].heading)

  useEffect(() => {
    let alive = true
    void loadContext(dojoId, roleId).then((md) => { if (alive) { setSheet(parseSheet(md)); setDirty(false) } })
    return () => { alive = false }
  }, [dojoId, roleId])

  if (!hasContext(roleId) || !sheet) return null

  const change = (heading: string, value: string) => {
    setSheet((s) => (s ? { ...s, values: { ...s.values, [heading]: value } } : s))
    setDirty(true)
  }

  const save = async () => {
    setBusy(true)
    await saveContext(dojoId, roleId, serializeSheet(sheet))
    setBusy(false); setDirty(false)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Saved', text: `${agentName} will work this way from now on.` })
  }
  const reset = async () => {
    if (!confirm(`Put ${agentName} back to how they started? Your changes are lost.`)) return
    await resetContext(dojoId, roleId)
    const md = await loadContext(dojoId, roleId)
    setSheet(parseSheet(md)); setDirty(false)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Back to default', text: `${agentName} is back to their original way of working.` })
  }

  const filled = SHEET_FIELDS.filter((f) => (sheet.values[f.heading] ?? '').trim()).length

  return (
    <section className={`agx${open ? ' open' : ''}`}>
      <button className="agx-h" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span className="agx-h-txt">
          <strong>How {agentName} works
            <InfoDot title={`How ${agentName} works`} label="What this changes">
              <p>This is the brief <b>{agentName}</b> follows on every task: what they are here to do, how they work step by step, and what they must never do.</p>
              <p>Change anything here and it takes effect on their next piece of work. Nothing is permanent — you can always put them back to how they started.</p>
            </InfoDot>
          </strong>
          <span className="agx-h-sub">{filled} of {SHEET_FIELDS.length} parts written</span>
        </span>
        <em className="agx-h-cta">{open ? 'Close' : 'Edit'}</em>
      </button>

      {/* collapsed · a one-line reminder of what this teammate is here to do */}
      {!open && (sheet.values['Mission'] || '').trim() && (
        <p className="agx-peek">{(sheet.values['Mission'] || '').split('\n')[0]}</p>
      )}

      {open && (
        <div className="agx-form">
          {SHEET_FIELDS.map((f, i) => (
            <Field
              key={f.heading}
              f={f}
              n={i + 1}
              value={sheet.values[f.heading] ?? ''}
              open={field === f.heading}
              onOpen={() => setField((cur) => (cur === f.heading ? '' : f.heading))}
              onChange={(v) => change(f.heading, v)}
            />
          ))}

          <div className={`agx-acts${dirty ? ' dirty' : ''}`}>
            <span className="agx-state">{dirty ? 'Unsaved changes' : 'All changes saved'}</span>
            <button className="agx-reset" onClick={() => void reset()}>Back to default</button>
            <button className="agx-save" disabled={!dirty || busy} onClick={() => void save()}>
              {busy ? 'Saving…' : 'Save changes'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
