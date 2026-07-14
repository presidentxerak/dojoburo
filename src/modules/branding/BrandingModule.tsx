// Brand Studio (Brandi · Brand Architect) · a Shiverbrand-style pipeline that
// runs 100% locally: Concept → Research → Naming → Availability.
//   • company discovery + business understanding (Concept, Research)
//   • name generation (Naming)
//   • domain + .com availability (Availability, real server-side RDAP, no key)
// Choosing a name saves it to the central Brand Kit (IndexedDB), so the Website
// and Marketing studios reuse it automatically.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { type BrandKit, defaultKit, loadBrandKit, saveBrandKit } from '../../lib/brand'
import {
  type BrandProfile, type DomainResult, researchProfile, generateNames, checkDomains, socialHandles,
} from '../../lib/naming'

type Step = 'concept' | 'research' | 'naming' | 'domain'
const STEPS: { id: Step; label: string }[] = [
  { id: 'concept', label: 'Concept' }, { id: 'research', label: 'Research' },
  { id: 'naming', label: 'Naming' }, { id: 'domain', label: 'Availability' },
]
const START_MODES = [
  { id: 'scratch', title: 'Start from scratch', sub: 'Full pipeline: research, naming and availability.' },
  { id: 'have-name', title: 'I have a name, no domain', sub: 'We check the domain & handles for your name right away.' },
  { id: 'have-domain', title: 'I have a domain, no name', sub: 'The name is derived from the domain, then availability.' },
  { id: 'have-both', title: 'I already have a name & domain', sub: 'Straight to the availability check.' },
] as const

export default function BrandingModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name)
  const pushToast = useDojo((s) => s.pushToast)
  const [kit, setKit] = useState<BrandKit>(() => defaultKit(dojoName || 'My brand'))

  // pipeline state
  const [step, setStep] = useState<Step>('concept')
  const [startMode, setStartMode] = useState<(typeof START_MODES)[number]['id']>('scratch')
  const [desc, setDesc] = useState('')
  const [profile, setProfile] = useState<BrandProfile | null>(null)
  const [names, setNames] = useState<string[]>([])
  const [nameSeed, setNameSeed] = useState(0)
  const [domains, setDomains] = useState<DomainResult[]>([])
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    let alive = true
    void loadBrandKit(dojoId).then((k) => {
      if (!alive) return
      // a returning user with a saved name lands on the availability check
      if (k) { setKit(k); setStep('domain') } else setKit(defaultKit(dojoName || 'My brand'))
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const patch = (p: Partial<BrandKit>) => setKit((k) => ({ ...k, ...p }))

  // ---- pipeline actions ----
  const runResearch = () => {
    setProfile(researchProfile(desc || dojoName || 'a modern product'))
    setStep('research')
  }
  const runNaming = () => {
    setNames(generateNames(desc || dojoName || 'nova brand', nameSeed))
    setStep('naming')
  }
  const reroll = () => { const s = nameSeed + 1; setNameSeed(s); setNames(generateNames(desc || dojoName || 'nova brand', s)) }
  const chooseName = async (name: string) => {
    patch({ name })
    setStep('domain'); setChecking(true); setDomains([])
    setDomains(await checkDomains(name)); setChecking(false)
  }
  const recheck = async () => { setChecking(true); setDomains(await checkDomains(kit.name)); setChecking(false) }
  const saveName = async () => {
    await saveBrandKit(dojoId, kit)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand saved', text: `"${kit.name}" is now your brand — reused by the Website and Marketing studios.` })
  }

  const stepIdx = STEPS.findIndex((s) => s.id === step)

  return (
    <div className="brand-mod sq">
      {/* step progress */}
      <div className="sq-steps">
        {STEPS.map((s, i) => (
          <button key={s.id} className={`sq-step${step === s.id ? ' on' : ''}${i < stepIdx ? ' done' : ''}`} onClick={() => setStep(s.id)}>
            <span className="sq-step-n">{i + 1}</span>{s.label}
          </button>
        ))}
      </div>

      {step === 'concept' && (
        <section className="sq-panel">
          <h3 className="sq-title">Describe your product</h3>
          <p className="sq-lead">No account needed. One or two sentences: what it does and who it's for — the tone and audience are inferred.</p>
          <div className="sq-eyebrow">Where do you start?</div>
          <div className="sq-optgrid">
            {START_MODES.map((m) => (
              <button key={m.id} className={`sq-opt${startMode === m.id ? ' on' : ''}`} onClick={() => setStartMode(m.id)}>
                <span className="sq-opt-radio" />
                <span className="sq-opt-txt"><b>{m.title}</b><em>{m.sub}</em></span>
              </button>
            ))}
          </div>
          <label className="sq-field">Describe your product
            <textarea rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g. A coffee subscription for offices — freshly roasted beans delivered weekly, with a simple dashboard to manage the team's orders and budget." />
          </label>
          <div className="sq-cta-row">
            <button className="sq-cta" disabled={!desc.trim() && !dojoName} onClick={runResearch}>Generate the research profile →</button>
          </div>
        </section>
      )}

      {step === 'research' && profile && (
        <section className="sq-panel">
          <h3 className="sq-title">Research profile</h3>
          <p className="sq-lead">Derived locally from your description. This shapes the names.</p>
          <div className="sq-cards3">
            <div className="sq-info"><span className="sq-info-k">Tone</span><b>{profile.tone}</b></div>
            <div className="sq-info"><span className="sq-info-k">Audience</span><b>{profile.audience}</b></div>
            <div className="sq-info"><span className="sq-info-k">Angle</span><b>{profile.angle}</b></div>
          </div>
          <div className="sq-eyebrow">Key themes</div>
          <div className="sq-tags">{(profile.keywords.length ? profile.keywords : ['brand', 'modern', 'simple']).map((k) => <span key={k} className="sq-tag">{k}</span>)}</div>
          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={() => setStep('concept')}>← Back</button>
            <button className="sq-cta" onClick={runNaming}>Find names →</button>
          </div>
        </section>
      )}

      {step === 'naming' && (
        <section className="sq-panel">
          <h3 className="sq-title">Name candidates</h3>
          <p className="sq-lead">Pick one to check its domain &amp; handles. Not feeling it? Reroll for a fresh batch.</p>
          <div className="sq-namegrid">
            {(names.length ? names : generateNames(desc || dojoName || 'nova', 0)).map((n) => (
              <button key={n} className={`sq-name${kit.name === n ? ' on' : ''}`} onClick={() => void chooseName(n)}>
                <b>{n}</b><span>{n.toLowerCase().replace(/[^a-z0-9]/g, '')}.com →</span>
              </button>
            ))}
          </div>
          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={() => setStep('research')}>← Back</button>
            <button className="sq-cta ghost" onClick={reroll}>↻ Reroll names</button>
          </div>
        </section>
      )}

      {step === 'domain' && (
        <section className="sq-panel">
          <h3 className="sq-title">Availability · <span style={{ color: 'var(--dc)' }}>{kit.name}</span></h3>
          <p className="sq-lead">Live domain check (RDAP). Green = available to register.</p>
          <div className="sq-namecheck">
            <input value={kit.name} onChange={(e) => patch({ name: e.target.value })} maxLength={28} />
            <button className="sq-cta" onClick={() => void recheck()} disabled={checking}>{checking ? 'Checking…' : 'Re-check'}</button>
          </div>
          <div className="sq-domains">
            {checking && domains.length === 0 && <p className="muted">Checking domains…</p>}
            {domains.map((d) => (
              <div key={d.domain} className={`sq-domain ${d.status}`}>
                <b>{d.domain}</b>
                <span className={`sq-dot ${d.status}`}>{d.status === 'available' ? 'Available' : d.status === 'taken' ? 'Taken' : '—'}</span>
              </div>
            ))}
          </div>
          <div className="sq-eyebrow">Suggested handles</div>
          <div className="sq-tags">{socialHandles(kit.name).map((h) => <span key={h} className="sq-tag">{h}</span>)}</div>
          <div className="sq-cta-row">
            <button className="sq-cta ghost" onClick={() => setStep('naming')}>← Names</button>
            <button className="sq-cta" onClick={() => void saveName()}>Use "{kit.name}" as my brand</button>
          </div>
        </section>
      )}
    </div>
  )
}
