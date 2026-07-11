import { useMemo, useState } from 'react'
import { PROFESSIONS } from '../data/professions'
import { CONNECTORS } from '../data/connectors'
import { useWorkshop } from '../workshop'

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
  const createForProf = useWorkshop((s) => s.createDojoForProfession)
  const createDojo = useWorkshop((s) => s.createDojo)
  const save = useWorkshop((s) => s.save)

  const [sel, setSel] = useState<string | null>(null)
  const [desc, setDesc] = useState('')
  const cats = useMemo(() => [...new Set(PROFESSIONS.map((p) => p.category))], [])
  const selected = PROFESSIONS.find((p) => p.id === sel)

  const surprise = () => { setSel(PROFESSIONS[Math.floor(Math.random() * PROFESSIONS.length)].id); setDesc('') }
  const create = () => {
    if (sel) createForProf(sel)
    else if (desc.trim()) createDojo(deriveName(desc))
    else return
    save()
    onDone()
  }

  return (
    <div className="onb">
      <div className="onb-card">
        <span className="onb-kicker">Nouvelle entreprise</span>
        <h1>Quelle entreprise veux-tu créer ?</h1>
        <p className="onb-sub">Choisis un métier pour démarrer avec la bonne équipe et les bons connecteurs — ou décris ton idée en une phrase. Ton CEO s’occupe du reste.</p>

        <button className="onb-surprise" onClick={surprise}>✦ Surprends-moi</button>

        <div className="onb-domains">
          {cats.map((cat) => (
            <div key={cat} className="onb-cat">
              <h4>{cat}</h4>
              <div className="onb-tags">
                {PROFESSIONS.filter((p) => p.category === cat).map((p) => (
                  <button key={p.id} className={`onb-tag${sel === p.id ? ' on' : ''}`} onClick={() => { setSel(sel === p.id ? null : p.id); setDesc('') }}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="onb-preview">
            <p>{selected.blurb}</p>
            <div className="onb-chips">
              {selected.connectors.slice(0, 6).map((c) => <span key={c}>{conName(c)}</span>)}
            </div>
          </div>
        )}

        <div className="onb-or"><span>ou</span></div>
        <textarea
          value={desc}
          onChange={(e) => { setDesc(e.target.value); if (e.target.value) setSel(null) }}
          rows={2}
          placeholder="Décris ton entreprise en une phrase — ex : une app qui aide les cafés à fidéliser leurs clients."
        />

        <div className="onb-actions">
          <button className="btn ghost" onClick={onDone}>Passer</button>
          <button className="onb-create" disabled={!sel && !desc.trim()} onClick={create}>Créer mon entreprise →</button>
        </div>
      </div>
    </div>
  )
}
