// Brand Studio (Brandi · Brand Architect) · a Shiverbrand-style pipeline that
// runs 100% locally:
//   Concept   → describe your product
//   Keywords  → ~50 on-theme keywords to pick from + add your own words
//   Naming    → combine the chosen words into brandable names
//   Domain    → real .com (+ more) availability via server-side RDAP, no key
// Choosing a name saves it to the central Brand Kit (IndexedDB), so the Website
// and Marketing studios reuse it automatically.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { type BrandKit, defaultKit, loadBrandKit, saveBrandKit } from '../../lib/brand'
import {
  type BrandProfile, type DomainResult, researchProfile, generateKeywords, combineNames,
  checkDomains, socialHandles,
} from '../../lib/naming'
import { StepBar } from '../StepBar'
import { StudioNext } from '../StudioNext'

type Step = 'concept' | 'keywords' | 'naming' | 'domain'
const STEPS: { id: Step; label: string }[] = [
  { id: 'concept', label: 'Concept' }, { id: 'keywords', label: 'Keywords' },
  { id: 'naming', label: 'Naming' }, { id: 'domain', label: 'Availability' },
]

export default function BrandingModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name)
  const pushToast = useDojo((s) => s.pushToast)
  const [kit, setKit] = useState<BrandKit>(() => defaultKit(dojoName || 'My brand'))

  // pipeline state
  const [step, setStep] = useState<Step>('concept')
  const [desc, setDesc] = useState('')
  const [profile, setProfile] = useState<BrandProfile | null>(null)
  // Shiverbrand keyword workshop
  const [keywords, setKeywords] = useState<string[]>([])
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [customWord, setCustomWord] = useState('')
  // naming + availability
  const [names, setNames] = useState<string[]>([])
  const [nameSeed, setNameSeed] = useState(0)
  const [domains, setDomains] = useState<DomainResult[]>([])
  const [checking, setChecking] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    let alive = true
    void loadBrandKit(dojoId).then((k) => {
      if (!alive) return
      if (k) { setKit(k); setStep('domain') } else setKit(defaultKit(dojoName || 'My brand'))
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const patch = (p: Partial<BrandKit>) => setKit((k) => ({ ...k, ...p }))

  // ---- pipeline actions ----
  const runKeywords = () => {
    const src = desc || dojoName || 'a modern product'
    setProfile(researchProfile(src))
    const kws = generateKeywords(src)
    setKeywords(kws)
    setSelected((prev) => (prev.size ? prev : new Set(kws.slice(0, 3)))) // preselect a few
    setStep('keywords')
  }
  const toggleKw = (k: string) => setSelected((s) => {
    const next = new Set(s)
    next.has(k) ? next.delete(k) : next.add(k)
    return next
  })
  const addCustom = () => {
    const w = customWord.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
    if (!w || w.length < 2) { setCustomWord(''); return }
    setKeywords((ks) => (ks.includes(w) ? ks : [w, ...ks]))
    setSelected((s) => new Set(s).add(w))
    setCustomWord('')
  }
  const runNaming = () => {
    setNames(combineNames([...selected], nameSeed))
    setStep('naming')
  }
  const reroll = () => { const s = nameSeed + 1; setNameSeed(s); setNames(combineNames([...selected], s)) }
  const chooseName = async (name: string) => {
    patch({ name })
    setStep('domain'); setChecking(true); setDomains([])
    setDomains(await checkDomains(name)); setChecking(false)
  }
  const recheck = async () => { setChecking(true); setDomains(await checkDomains(kit.name)); setChecking(false) }
  const saveName = async () => {
    await saveBrandKit(dojoId, kit)
    setSaved(true)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand saved', text: `"${kit.name}" is now your brand · reused by the Website and Marketing studios.` })
  }

  const stepIdx = STEPS.findIndex((s) => s.id === step)
  const advance = () => {
    if (step === 'concept') return runKeywords()
    if (step === 'keywords') return runNaming()
    if (step === 'naming') { void recheck(); return setStep('domain') }
    if (step === 'domain') return void saveName()
  }
  const goBack = () => { if (stepIdx > 0) setStep(STEPS[stepIdx - 1].id) }
  const canNext = step === 'concept' ? (!!desc.trim() || !!dojoName)
    : step === 'keywords' ? selected.size >= 1
    : step === 'naming' ? !!kit.name.trim()
    : true
  const nextLabel = step === 'concept' ? 'Find keywords'
    : step === 'keywords' ? `Combine ${selected.size} word${selected.size === 1 ? '' : 's'}`
    : step === 'domain' ? 'Save brand' : 'Next'

  return (
    <div className="brand-mod sq">
      <StepBar
        steps={STEPS} current={step} onJump={(id) => setStep(id as Step)}
        onBack={goBack} backDisabled={stepIdx === 0}
        onNext={advance} canNext={canNext} nextLabel={nextLabel}
      />

      {step === 'concept' && (
        <section className="sq-panel">
          <h3 className="sq-title">Describe your product</h3>
          <p className="sq-lead">One or two sentences: what it does and who it's for. We turn that into a palette of on-theme keywords you can shape into a name.</p>
          <label className="sq-field">Describe your product
            <textarea rows={4} value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="e.g. A coffee subscription for offices · freshly roasted beans delivered weekly, with a simple dashboard to manage the team's orders and budget." />
          </label>
        </section>
      )}

      {step === 'keywords' && (
        <section className="sq-panel">
          <h3 className="sq-title">Pick your keywords</h3>
          <p className="sq-lead">{keywords.length} words drawn from your theme{profile ? ` · ${profile.tone.toLowerCase()}` : ''}. Tap the ones that fit, and add your own · we'll combine them into names.</p>

          <div className="bw-add">
            <input
              value={customWord} maxLength={16} placeholder="Add your own word…"
              onChange={(e) => setCustomWord(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCustom() } }}
            />
            <button className="sq-cta" onClick={addCustom} disabled={!customWord.trim()}>+ Add</button>
          </div>

          <div className="sq-eyebrow">Selected · {selected.size}</div>
          <div className="bw-selected">
            {selected.size === 0 && <span className="muted small">Nothing selected yet · tap keywords below.</span>}
            {[...selected].map((k) => (
              <button key={k} className="bw-chip on" onClick={() => toggleKw(k)}>{k}<span className="bw-x">×</span></button>
            ))}
          </div>

          <div className="sq-eyebrow" style={{ marginTop: 14 }}>Suggested keywords</div>
          <div className="bw-cloud">
            {keywords.map((k) => (
              <button key={k} className={`bw-chip${selected.has(k) ? ' on' : ''}`} onClick={() => toggleKw(k)}>{k}</button>
            ))}
          </div>
        </section>
      )}

      {step === 'naming' && (
        <section className="sq-panel">
          <h3 className="sq-title">Name candidates</h3>
          <p className="sq-lead">Combinations of your {selected.size} chosen word{selected.size === 1 ? '' : 's'}. Pick one to check its .com &amp; handles, or reroll for a fresh batch.</p>
          <div className="bw-selected bw-selected-recap">
            {[...selected].map((k) => <span key={k} className="bw-chip on static">{k}</span>)}
            <button className="bw-editwords" onClick={() => setStep('keywords')}>Edit words</button>
          </div>
          <div className="sq-namegrid">
            {(names.length ? names : combineNames([...selected], 0)).map((n) => (
              <button key={n} className={`sq-name${kit.name === n ? ' on' : ''}`} onClick={() => void chooseName(n)}>
                <b>{n}</b><span>{n.toLowerCase().replace(/[^a-z0-9]/g, '')}.com →</span>
              </button>
            ))}
          </div>
          <div className="sq-cta-row">
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
                <span className={`sq-dot ${d.status}`}>{d.status === 'available' ? 'Available' : d.status === 'taken' ? 'Taken' : '·'}</span>
              </div>
            ))}
          </div>
          <div className="sq-eyebrow">Suggested handles</div>
          <div className="sq-tags">{socialHandles(kit.name).map((h) => <span key={h} className="sq-tag">{h}</span>)}</div>
          {saved && <StudioNext from="brandi" done={`"${kit.name}" saved as your brand.`} />}
        </section>
      )}
    </div>
  )
}
