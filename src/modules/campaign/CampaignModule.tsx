// Campaign Studio · generate + edit a full Meta (Facebook/Instagram) campaign
// locally. Objective → audience, personas and 5 ad variants (copy + brand-styled
// visual), previewed as a real Meta ad. Meta only. Reuses the Brand Kit. No server.
import { useEffect, useMemo, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import type { BrandKit } from '../../lib/brand'
import {
  type Campaign, type Objective, type AdFormat, type AdVariant, OBJECTIVES, ANGLES,
  generateCampaign, adSvg, copyPack, loadCampaign, saveCampaign, campaignBrand, ctaForObjective,
} from '../../lib/campaign'

const angleLabel = (a: string) => ANGLES.find((x) => x.id === a)?.label ?? a

export default function CampaignModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'Ma marque'
  const pushToast = useDojo((s) => s.pushToast)
  const [camp, setCamp] = useState<Campaign>(() => generateCampaign(dojoName, 'acquisition'))
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [sel, setSel] = useState(0)
  const [product, setProduct] = useState(dojoName)

  useEffect(() => {
    let alive = true
    void Promise.all([loadCampaign(dojoId), campaignBrand(dojoId, dojoName)]).then(([c, b]) => {
      if (!alive) return
      const c0 = c ?? generateCampaign(dojoName, 'acquisition')
      setCamp(c0); setBrand(b); setProduct(c0.product)
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

  const generate = () => { const c = generateCampaign(product || dojoName, camp.objective); setCamp(c); setSel(0); pushToast({ kind: 'event', badge: 'IA', color: '#e0459b', title: 'Campagne générée', text: '5 variantes Meta prêtes — édite puis exporte.' }) }
  const save = async () => { await saveCampaign(dojoId, camp); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Campagne enregistrée', text: 'Sauvegardée en local (IndexedDB).' }) }
  const copyText = () => { void navigator.clipboard?.writeText(copyPack(camp)); pushToast({ kind: 'event', badge: 'OK', color: '#e0459b', title: 'Copié', text: 'Pack de textes prêt à coller dans Meta Ads Manager.' }) }
  const exportSvg = () => {
    if (!brand || !ad) return
    const blob = new Blob([adSvg(brand, ad, camp.format)], { type: 'image/svg+xml' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `creative-${ad.angle}-${camp.format}.svg`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  const domain = `${dojoName.toLowerCase().replace(/\s+/g, '')}.com`

  return (
    <div className="ad-body camp-mod">
      {/* setup */}
      <div className="camp-setup">
        <label className="camp-prod">Produit / offre
          <input value={product} maxLength={60} onChange={(e) => setProduct(e.target.value)} placeholder="ex : coaching sportif à domicile" />
        </label>
        <label className="camp-budget">Budget (€)
          <input type="number" min={0} value={camp.budget ?? 0} onChange={(e) => setCamp((c) => ({ ...c, budget: Math.max(0, Number(e.target.value) || 0) }))} placeholder="0" />
        </label>
        <button className="btn primary tiny" onClick={generate}>Générer la campagne</button>
      </div>
      {(camp.budget ?? 0) > 0 && <p className="muted small" style={{ margin: '0 0 12px' }}>💡 Ce budget apparaît comme dépense marketing dans <b>Finance</b> et sert au calcul du <b>ROI / CAC</b> dans <b>Analytics</b>.</p>}
      <div className="camp-obj">
        {OBJECTIVES.map((o) => <button key={o.id} className={camp.objective === o.id ? 'on' : ''} onClick={() => setObjective(o.id)}>{o.label}</button>)}
      </div>

      {/* Meta ad preview */}
      <div className="camp-toolbar">
        <div className="site-seg">
          <button className={camp.format === 'feed' ? 'on' : ''} onClick={() => setFormat('feed')}>Feed 1:1</button>
          <button className={camp.format === 'story' ? 'on' : ''} onClick={() => setFormat('story')}>Story 9:16</button>
        </div>
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={exportSvg}>Exporter la créa</button>
          <button className="btn tiny ghost" onClick={copyText}>Copier les textes</button>
          <button className="btn primary tiny" onClick={() => void save()}>Enregistrer</button>
        </div>
      </div>

      <div className="meta-ad">
        <div className="meta-head">
          <span className="meta-avatar" style={{ background: brand?.palette.primary || '#888' }}>{(dojoName[0] || 'M').toUpperCase()}</span>
          <div><b>{dojoName}</b><em>Sponsorisé · Meta</em></div>
        </div>
        {ad && <p className="meta-primary">{ad.primary}</p>}
        <div className={`meta-visual ${camp.format}`} dangerouslySetInnerHTML={{ __html: visual }} />
        <div className="meta-foot">
          <div className="meta-foot-txt"><em>{domain}</em><b>{ad?.headline}</b><span>{ad?.description}</span></div>
          <button className="meta-cta">{ad?.cta}</button>
        </div>
      </div>

      {/* variants */}
      <h4 className="brand-h">Variantes ({camp.ads.length})</h4>
      <div className="camp-variants">
        {camp.ads.map((a, i) => (
          <button key={a.id} className={`camp-vchip${i === sel ? ' on' : ''}`} onClick={() => setSel(i)}>{angleLabel(a.angle)}</button>
        ))}
      </div>

      {/* inspector */}
      {ad && (
        <div className="site-inspector">
          <h4 className="brand-h">Éditer · {angleLabel(ad.angle)}</h4>
          <label className="site-field"><span>Titre</span><input value={ad.headline} onChange={(e) => editAd('headline', e.target.value)} /></label>
          <label className="site-field"><span>Texte principal</span><textarea rows={3} value={ad.primary} onChange={(e) => editAd('primary', e.target.value)} /></label>
          <label className="site-field"><span>Description</span><input value={ad.description} onChange={(e) => editAd('description', e.target.value)} /></label>
          <label className="site-field"><span>Bouton (CTA)</span><input value={ad.cta} onChange={(e) => editAd('cta', e.target.value)} /></label>
        </div>
      )}

      {/* audience + personas */}
      <h4 className="brand-h">Audience</h4>
      <label className="site-field"><span>Centres d’intérêt (séparés par des virgules)</span>
        <textarea rows={2} value={camp.audience.interests.join(', ')} onChange={(e) => editAudience(e.target.value)} />
      </label>
      <p className="muted small">Âge {camp.audience.age} · {camp.audience.geo} · {camp.audience.placements.join(', ')}</p>

      <h4 className="brand-h">Personas</h4>
      <div className="camp-personas">
        {camp.personas.map((pp) => (
          <div key={pp.name} className="camp-persona">
            <b>{pp.name}, {pp.age} ans</b><em>{pp.role}</em>
            <span>😟 {pp.pain}</span><span>🎯 {pp.desire}</span>
          </div>
        ))}
      </div>
      <p className="muted small">Meta uniquement (Facebook & Instagram). Connecte ton compte Meta (Studio) pour diffuser réellement ces annonces.</p>
    </div>
  )
}
