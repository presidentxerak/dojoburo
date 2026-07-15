// Campaign Studio · a stepped Meta (Facebook/Instagram) campaign builder, 100%
// local. Brief → Audience → Creatives → Export. Objective + product drive a set
// of personas, an audience and 5 brand-styled ad variants previewed as a real
// Meta ad. Meta only. Reuses the Brand Kit. No server.
import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import type { BrandKit } from '../../lib/brand'
import {
  type Campaign, type Objective, type AdFormat, type AdVariant, OBJECTIVES, ANGLES,
  generateCampaign, adSvg, copyPack, loadCampaign, saveCampaign, campaignBrand, ctaForObjective,
} from '../../lib/campaign'
import { StepBar } from '../StepBar'
import { StudioNext } from '../StudioNext'

const angleLabel = (a: string) => ANGLES.find((x) => x.id === a)?.label ?? a
type Step = 'brief' | 'audience' | 'creatives' | 'export'
const STEPS: { id: Step; label: string }[] = [
  { id: 'brief', label: 'Brief' }, { id: 'audience', label: 'Audience' }, { id: 'creatives', label: 'Creatives' }, { id: 'export', label: 'Export' },
]
const OBJ_SUB: Record<Objective, string> = {
  acquisition: 'Drive new customers to your offer.',
  vente: 'Push purchases / conversions.',
  notoriete: 'Maximise reach & awareness.',
  leads: 'Collect qualified leads & sign-ups.',
}

interface CreativeTool { id: string; label: string; node: ReactNode }
export default function CampaignModule({ dojoId, creativeTools = [] }: ModuleProps & { creativeTools?: CreativeTool[] }) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My brand'
  const pushToast = useDojo((s) => s.pushToast)
  const [camp, setCamp] = useState<Campaign>(() => generateCampaign(dojoName, 'acquisition'))
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [sel, setSel] = useState(0)
  const [product, setProduct] = useState(dojoName)
  const [saved, setSaved] = useState(false)
  const [step, setStep] = useState<Step>('brief')
  const [creativeTab, setCreativeTab] = useState<string>('ads')

  useEffect(() => {
    let alive = true
    void Promise.all([loadCampaign(dojoId), campaignBrand(dojoId, dojoName)]).then(([c, b]) => {
      if (!alive) return
      const c0 = c ?? generateCampaign(dojoName, 'acquisition')
      setCamp(c0); setBrand(b); setProduct(c0.product)
      if (c) setStep('creatives')
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const ad = camp.ads[sel] || camp.ads[0]
  const visual = useMemo(() => (brand && ad ? adSvg(brand, ad, camp.format) : ''), [brand, ad, camp.format])

  const setObjective = (objective: Objective) => setCamp((c) => ({ ...c, objective, ads: c.ads.map((a) => ({ ...a, cta: ctaForObjective(objective) })) }))
  const setFormat = (format: AdFormat) => setCamp((c) => ({ ...c, format }))
  const editAd = (field: keyof AdVariant, value: string) => setCamp((c) => ({ ...c, ads: c.ads.map((a, i) => (i === sel ? { ...a, [field]: value } : a)) }))
  const editAudience = (raw: string) => setCamp((c) => ({ ...c, audience: { ...c.audience, interests: raw.split(',').map((s) => s.trim()).filter(Boolean) } }))

  const generate = () => { const c = generateCampaign(product || dojoName, camp.objective); setCamp(c); setSel(0); setStep('audience'); pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Campaign generated', text: '5 Meta variants ready · review the audience.' }) }
  const save = async () => { await saveCampaign(dojoId, camp); setSaved(true); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Campaign saved', text: 'Saved locally (IndexedDB).' }) }
  const copyText = () => { void navigator.clipboard?.writeText(copyPack(camp)); pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Copied', text: 'Copy pack ready to paste into Meta Ads Manager.' }) }
  const exportSvg = () => {
    if (!brand || !ad) return
    const blob = new Blob([adSvg(brand, ad, camp.format)], { type: 'image/svg+xml' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `creative-${ad.angle}-${camp.format}.svg`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  const domain = `${dojoName.toLowerCase().replace(/\s+/g, '')}.com`
  const stepIdx = STEPS.findIndex((s) => s.id === step)

  const MetaPreview = () => (
    <div className="meta-ad">
      <div className="meta-head">
        <span className="meta-avatar" style={{ background: brand?.palette.primary || '#888' }}>{(dojoName[0] || 'M').toUpperCase()}</span>
        <div><b>{dojoName}</b><em>Sponsored · Meta</em></div>
      </div>
      {ad && <p className="meta-primary">{ad.primary}</p>}
      <div className={`meta-visual ${camp.format}`} dangerouslySetInnerHTML={{ __html: visual }} />
      <div className="meta-foot">
        <div className="meta-foot-txt"><em>{domain}</em><b>{ad?.headline}</b><span>{ad?.description}</span></div>
        <button className="meta-cta">{ad?.cta}</button>
      </div>
    </div>
  )

  const advance = () => {
    if (step === 'brief') return generate()
    if (step === 'audience') return setStep('creatives')
    if (step === 'creatives') return setStep('export')
    if (step === 'export') return void save()
  }
  const goBack = () => { if (stepIdx > 0) setStep(STEPS[stepIdx - 1].id) }
  const nextLabel = step === 'brief' ? 'Generate' : step === 'export' ? 'Save campaign' : 'Next'

  return (
    <div className="camp-mod sq">
      <StepBar
        steps={STEPS} current={step} onJump={(id) => setStep(id as Step)}
        onBack={goBack} backDisabled={stepIdx === 0}
        onNext={advance} nextLabel={nextLabel}
      />

      {step === 'brief' && (
        <section className="sq-panel">
          <h3 className="sq-title">Campaign brief</h3>
          <p className="sq-lead">What are you promoting, and what's the goal? We build the audience, personas and 5 ad variants from this.</p>
          <label className="sq-field">Product / offer
            <input value={product} maxLength={60} onChange={(e) => setProduct(e.target.value)} placeholder="e.g. in-home personal training · first session free" />
          </label>
          <div className="sq-eyebrow">Objective</div>
          <div className="sq-optgrid">
            {OBJECTIVES.map((o) => (
              <button key={o.id} className={`sq-opt${camp.objective === o.id ? ' on' : ''}`} onClick={() => setObjective(o.id)}>
                <span className="sq-opt-radio" />
                <span className="sq-opt-txt"><b>{o.label}</b><em>{OBJ_SUB[o.id]}</em></span>
              </button>
            ))}
          </div>
          <label className="sq-field">Daily budget (€)
            <input type="number" min={0} value={camp.budget ?? 0} onChange={(e) => setCamp((c) => ({ ...c, budget: Math.max(0, Number(e.target.value) || 0) }))} placeholder="0" />
          </label>
          {(camp.budget ?? 0) > 0 && <p className="muted small" style={{ margin: 0 }}>This budget shows up as a marketing expense in <b>Finance</b> and feeds <b>ROI / CAC</b> in <b>Analytics</b>.</p>}
        </section>
      )}

      {step === 'audience' && (
        <section className="sq-panel">
          <h3 className="sq-title">Audience &amp; personas</h3>
          <p className="sq-lead">Who you're targeting on Meta. Tune the interests; the personas guide the ad angles.</p>
          <label className="sq-field">Interests (comma-separated)
            <textarea rows={2} value={camp.audience.interests.join(', ')} onChange={(e) => editAudience(e.target.value)} />
          </label>
          <div className="sq-cards3">
            <div className="sq-info"><span className="sq-info-k">Age</span><b>{camp.audience.age}</b></div>
            <div className="sq-info"><span className="sq-info-k">Geo</span><b>{camp.audience.geo}</b></div>
            <div className="sq-info"><span className="sq-info-k">Placements</span><b>{camp.audience.placements.join(', ')}</b></div>
          </div>
          <div className="sq-eyebrow">Personas</div>
          <div className="camp-personas">
            {camp.personas.map((pp) => (
              <div key={pp.name} className="camp-persona">
                <b>{pp.name}, {pp.age}</b><em>{pp.role}</em>
                <span><b>Pain:</b> {pp.pain}</span><span><b>Wants:</b> {pp.desire}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {step === 'creatives' && (
        <section className="sq-panel">
          <h3 className="sq-title">Creatives · {camp.ads.length} variants</h3>
          {creativeTools.length > 0 && (
            <div className="cc-subtabs">
              <button className={`cc-subtab${creativeTab === 'ads' ? ' on' : ''}`} onClick={() => setCreativeTab('ads')}>Ad variants</button>
              {creativeTools.map((t) => (
                <button key={t.id} className={`cc-subtab${creativeTab === t.id ? ' on' : ''}`} onClick={() => setCreativeTab(t.id)}>{t.label}</button>
              ))}
            </div>
          )}
          {creativeTab !== 'ads' && creativeTools.find((t) => t.id === creativeTab)?.node}
          {creativeTab === 'ads' && (<>
          <div className="camp-toolbar">
            <div className="site-seg">
              <button className={camp.format === 'feed' ? 'on' : ''} onClick={() => setFormat('feed')}>Feed 1:1</button>
              <button className={camp.format === 'story' ? 'on' : ''} onClick={() => setFormat('story')}>Story 9:16</button>
            </div>
            <div className="sq-tags">{camp.ads.map((a, i) => (
              <button key={a.id} className={`sq-chip${i === sel ? ' on' : ''}`} onClick={() => setSel(i)}>{angleLabel(a.angle)}</button>
            ))}</div>
          </div>
          <MetaPreview />
          {ad && (
            <div className="site-inspector">
              <div className="sq-eyebrow">Edit · {angleLabel(ad.angle)}</div>
              <label className="site-field"><span>Headline</span><input value={ad.headline} onChange={(e) => editAd('headline', e.target.value)} /></label>
              <label className="site-field"><span>Primary text</span><textarea rows={3} value={ad.primary} onChange={(e) => editAd('primary', e.target.value)} /></label>
              <label className="site-field"><span>Description</span><input value={ad.description} onChange={(e) => editAd('description', e.target.value)} /></label>
              <label className="site-field"><span>Button (CTA)</span><input value={ad.cta} onChange={(e) => editAd('cta', e.target.value)} /></label>
            </div>
          )}
          </>)}
        </section>
      )}

      {step === 'export' && (
        <section className="sq-panel">
          <h3 className="sq-title">Export your campaign</h3>
          <p className="sq-lead">Copy the full pack into Meta Ads Manager, or download the selected creative.</p>
          <MetaPreview />
          <div className="brand-actions">
            <button className="btn tiny" onClick={exportSvg}>Download creative (SVG)</button>
            <button className="btn tiny ghost" onClick={copyText}>Copy the full copy pack</button>
          </div>
          <p className="muted small">Meta only (Facebook &amp; Instagram). Connect your Meta account (Connect apps, top right) to run these ads for real.</p>
          {saved && <StudioNext from="marketus" done="Campaign saved." />}
        </section>
      )}
    </div>
  )
}
