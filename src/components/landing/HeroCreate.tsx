import { useMemo, useRef, useState } from 'react'
import { PROFESSIONS } from '../../data/professions'
import { useWorkshop } from '../../workshop'
import { launchCeo } from '../../agents/autopilot'

// Business needs the CEO should build first (shapes the launch brief).
const NEEDS: { id: string; label: string }[] = [
  { id: 'website', label: 'Site web' },
  { id: 'ads', label: 'Pubs Meta' },
  { id: 'outreach', label: 'Prospection' },
  { id: 'offer', label: 'Offre & paiements' },
  { id: 'seo', label: 'SEO' },
]

function deriveName(s: string): string {
  const w = s.trim().replace(/[^\p{L}\p{N} ]/gu, '').split(/\s+/).filter(Boolean).slice(0, 2)
  if (!w.length) return 'Mon Dojo'
  return w.map((x) => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(' ').slice(0, 22)
}

/** The nanocorp-style creation form that lives in the landing hero: a one-line
 *  description + business (métier) and needs filters. Submitting creates the
 *  company and launches the CEO to build it. */
export function HeroCreate({ enter }: { enter: () => void }) {
  const createForProfs = useWorkshop((s) => s.createDojoForProfessions)
  const createDojo = useWorkshop((s) => s.createDojo)
  const save = useWorkshop((s) => s.save)

  const [desc, setDesc] = useState('')
  const [profs, setProfs] = useState<string[]>([])
  const [needs, setNeeds] = useState<string[]>([])
  const [open, setOpen] = useState(false) // show the métier list
  const inputRef = useRef<HTMLInputElement>(null)

  const cats = useMemo(() => [...new Set(PROFESSIONS.map((p) => p.category))], [])
  const toggle = (arr: string[], set: (v: string[]) => void, id: string) =>
    set(arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id])
  const selectedProfs = PROFESSIONS.filter((p) => profs.includes(p.id))

  const create = () => {
    if (!desc.trim() && !profs.length) { inputRef.current?.focus(); return }
    const needLabels = NEEDS.filter((n) => needs.includes(n.id)).map((n) => n.label)
    const brief = [
      desc.trim(),
      selectedProfs.length ? `Métiers : ${selectedProfs.map((p) => p.label).join(', ')}` : '',
      needLabels.length ? `Besoins prioritaires : ${needLabels.join(', ')}` : '',
    ].filter(Boolean).join('. ')

    if (profs.length) createForProfs(profs)
    else createDojo(deriveName(desc))
    save()
    try { localStorage.setItem('dojoburo.onboarded.v1', '1') } catch { /* ignore */ }
    enter()
    if (brief) setTimeout(() => void launchCeo(brief), 400)
  }

  return (
    <div className="hc" id="create-hero">
      <div className="hc-row">
        <input
          ref={inputRef}
          className="hc-input"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') create() }}
          placeholder="Décris ton entreprise en une phrase — ex : une app qui aide les cafés à fidéliser leurs clients"
          maxLength={160}
        />
        <button className="hc-go" onClick={create}>Create your company →</button>
      </div>

      <div className="hc-filters">
        <span className="hc-flabel">Besoins</span>
        <div className="hc-chips">
          {NEEDS.map((n) => (
            <button key={n.id} className={`hc-chip${needs.includes(n.id) ? ' on' : ''}`} onClick={() => toggle(needs, setNeeds, n.id)}>
              {needs.includes(n.id) ? '✓ ' : ''}{n.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hc-filters">
        <span className="hc-flabel">Métier</span>
        <div className="hc-chips">
          {(open ? PROFESSIONS : PROFESSIONS.slice(0, 8)).map((p) => (
            <button key={p.id} className={`hc-chip${profs.includes(p.id) ? ' on' : ''}`} onClick={() => toggle(profs, setProfs, p.id)}>
              {profs.includes(p.id) ? '✓ ' : ''}{p.label}
            </button>
          ))}
          {!open && <button className="hc-chip hc-more" onClick={() => setOpen(true)}>+{PROFESSIONS.length - 8} métiers</button>}
        </div>
      </div>

      {(selectedProfs.length > 0 || needs.length > 0) && (
        <p className="hc-summary">
          {selectedProfs.length ? `${selectedProfs.length} métier${selectedProfs.length > 1 ? 's' : ''}` : ''}
          {selectedProfs.length && needs.length ? ' · ' : ''}
          {needs.length ? `${needs.length} besoin${needs.length > 1 ? 's' : ''}` : ''} sélectionné{(selectedProfs.length + needs.length) > 1 ? 's' : ''} · le CEO construit tout de suite.
        </p>
      )}
      <p className="hc-hint">Ton CEO se lance automatiquement et construit stratégie, site, offre, pubs Meta et prospection. {cats.length} domaines · tout reste modifiable.</p>
    </div>
  )
}
