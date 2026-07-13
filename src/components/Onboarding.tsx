import { useMemo, useState } from 'react'
import { PROFESSIONS } from '../data/professions'
import { CONNECTORS } from '../data/connectors'
import { useWorkshop } from '../workshop'
import { launchCeo } from '../agents/autopilot'

const conName = (id: string) => CONNECTORS.find((c) => c.id === id)?.label || id
function deriveName(s: string): string {
  const w = s.trim().replace(/[^\p{L}\p{N} ]/gu, '').split(/\s+/).filter(Boolean).slice(0, 2)
  if (!w.length) return 'Mon Dojo'
  return w.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(' ').slice(0, 22)
}

/** First-run flow (like nanocorp's "What does your company do?") — improved with
 *  business-domain tag buttons that seed the right crew + connectors, a little
 *  preview to guide the choice, a Surprise-me, and a free-text describe box. */
export function Onboarding({ onDone }: { onDone: () => void }) {
  const createForProfs = useWorkshop((s) => s.createDojoForProfessions)
  const createDojo = useWorkshop((s) => s.createDojo)
  const save = useWorkshop((s) => s.save)

  // multi-select · pick as many domains / trades as you like
  const [sel, setSel] = useState<string[]>([])
  const [desc, setDesc] = useState('')
  const cats = useMemo(() => [...new Set(PROFESSIONS.map((p) => p.category))], [])
  const selected = PROFESSIONS.filter((p) => sel.includes(p.id))
  const toggle = (id: string) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const surprise = () => { setSel([PROFESSIONS[Math.floor(Math.random() * PROFESSIONS.length)].id]); setDesc('') }
  const create = () => {
    // a one-line brief for the CEO to build from
    const brief = desc.trim() || (selected.length ? `Une entreprise dans : ${selected.map((p) => p.label).join(', ')}.` : '')
    if (sel.length) createForProfs(sel)
    else if (desc.trim()) createDojo(deriveName(desc))
    else return
    save()
    onDone()
    // the CEO launches itself right after the prompt and builds the company
    if (brief) setTimeout(() => void launchCeo(brief), 400)
  }
  // combined connectors across all chosen domains, for the preview
  const previewConnectors = useMemo(() => [...new Set(selected.flatMap((p) => p.connectors))], [selected])

  return (
    <div className="onb">
      <div className="onb-card">
        <span className="onb-kicker">New company</span>
        <h1>What company do you want to build?</h1>
        <p className="onb-sub">Pick one or <b>several</b> trades and domains: your team and connectors combine. Or just describe your idea in one sentence. Your CEO handles the rest.</p>

        <button className="onb-surprise" onClick={surprise}>✦ Surprise me</button>

        <div className="onb-domains">
          {cats.map((cat) => (
            <div key={cat} className="onb-cat">
              <h4>{cat}</h4>
              <div className="onb-tags">
                {PROFESSIONS.filter((p) => p.category === cat).map((p) => (
                  <button key={p.id} className={`onb-tag${sel.includes(p.id) ? ' on' : ''}`} onClick={() => { toggle(p.id); setDesc('') }}>
                    {sel.includes(p.id) ? '✓ ' : ''}{p.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selected.length > 0 && (
          <div className="onb-preview">
            <p><b>{sel.length} domain{sel.length > 1 ? 's' : ''} selected:</b> {selected.map((p) => p.label).join(' · ')}</p>
            <div className="onb-chips">
              {previewConnectors.slice(0, 10).map((c) => <span key={c}>{conName(c)}</span>)}
            </div>
          </div>
        )}

        <div className="onb-or"><span>or</span></div>
        <textarea
          value={desc}
          onChange={(e) => { setDesc(e.target.value); if (e.target.value) setSel([]) }}
          rows={2}
          placeholder="Describe your company in one sentence — e.g. an app that helps cafés keep their customers coming back."
        />

        <div className="onb-actions">
          <button className="btn ghost" onClick={onDone}>Skip</button>
          <button className="onb-create" disabled={!sel.length && !desc.trim()} onClick={create}>Create my company →</button>
        </div>
      </div>
    </div>
  )
}
