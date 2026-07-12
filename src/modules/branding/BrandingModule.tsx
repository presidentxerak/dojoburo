// Branding Studio · generate a full brand identity locally (logo + palette +
// typography) and save a central Brand Kit to IndexedDB. The IA gives a first
// version instantly (from the company name); the user keeps full control.
// Everything runs in the browser — no server, no cost.
import { useEffect, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import {
  type BrandKit, type LogoLayout, generatePalette, logoSvg, defaultKit, loadBrandKit, saveBrandKit,
  kitCss, fontPair, FONT_PAIRS, SCHEMES, SHAPES,
} from '../../lib/brand'

const LAYOUTS: { id: LogoLayout; label: string }[] = [
  { id: 'mark-left', label: 'Logo + texte' }, { id: 'mark-top', label: 'Empilé' },
  { id: 'mark-only', label: 'Icône seule' }, { id: 'text-only', label: 'Texte seul' },
]

function Svg({ markup, className }: { markup: string; className?: string }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: markup }} />
}

export default function BrandingModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name)
  const pushToast = useDojo((s) => s.pushToast)
  const [kit, setKit] = useState<BrandKit>(() => defaultKit(dojoName || 'Ma marque'))
  const [loaded, setLoaded] = useState(false)

  // load a saved kit for this company, else seed from its name
  useEffect(() => {
    let alive = true
    void loadBrandKit(dojoId).then((k) => {
      if (!alive) return
      setKit(k ?? defaultKit(dojoName || 'Ma marque'))
      setLoaded(true)
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const patch = (p: Partial<BrandKit>) => setKit((k) => ({ ...k, ...p }))
  const setHue = (hue: number) => setKit((k) => ({ ...k, hue, palette: generatePalette(hue, k.scheme) }))
  const setScheme = (scheme: BrandKit['scheme']) => setKit((k) => ({ ...k, scheme, palette: generatePalette(k.hue, scheme) }))

  const regenerate = () => {
    const hue = Math.floor(Math.random() * 360)
    const scheme = SCHEMES[Math.floor(Math.random() * SCHEMES.length)].id
    const shape = SHAPES[Math.floor(Math.random() * SHAPES.length)].id
    const fontId = FONT_PAIRS[Math.floor(Math.random() * FONT_PAIRS.length)].id
    setKit((k) => ({ ...k, hue, scheme, shape, fontId, palette: generatePalette(hue, scheme) }))
  }

  const copy = (text: string, label: string) => {
    void navigator.clipboard?.writeText(text)
    pushToast({ kind: 'event', badge: 'OK', color: '#7b5cff', title: 'Copié', text: label })
  }
  const save = async () => {
    await saveBrandKit(dojoId, kit)
    pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Brand Kit enregistré', text: 'Réutilisé dans tes sites, pubs et vidéos.' })
  }
  const downloadSvg = () => {
    const blob = new Blob([logoSvg(kit, kit.layout, 640)], { type: 'image/svg+xml' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = `${(kit.name || 'logo').toLowerCase().replace(/\s+/g, '-')}.svg`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  const f = fontPair(kit.fontId)
  const swatches: [string, string][] = [
    ['Primaire', kit.palette.primary], ['Secondaire', kit.palette.secondary], ['Accent', kit.palette.accent],
    ['Encre', kit.palette.ink], ['Fond', kit.palette.bg],
  ]

  return (
    <div className="ad-body brand-mod">
      {/* identity */}
      <div className="brand-idrow">
        <label>Nom de la marque<input value={kit.name} maxLength={28} onChange={(e) => patch({ name: e.target.value })} /></label>
        <label>Slogan<input value={kit.tagline} maxLength={48} onChange={(e) => patch({ tagline: e.target.value })} /></label>
        <button className="btn tiny" onClick={regenerate} title="Nouvelle proposition aléatoire">🎲 Régénérer</button>
      </div>

      {/* live logo preview on brand background */}
      <div className="brand-hero" style={{ background: kit.palette.bg }}>
        <Svg className="brand-logo" markup={logoSvg(kit, kit.layout, 340)} />
      </div>

      {/* layout variants */}
      <div className="brand-variants">
        {LAYOUTS.map((l) => (
          <button key={l.id} className={`brand-variant${kit.layout === l.id ? ' on' : ''}`} onClick={() => patch({ layout: l.id })} title={l.label}>
            <span style={{ background: kit.palette.bg }}><Svg markup={logoSvg({ ...kit, layout: l.id }, l.id, 120)} /></span>
            <em>{l.label}</em>
          </button>
        ))}
      </div>

      {/* palette */}
      <h4 className="brand-h">Palette</h4>
      <div className="brand-controls">
        <div className="brand-seg">
          {SCHEMES.map((s) => <button key={s.id} className={kit.scheme === s.id ? 'on' : ''} onClick={() => setScheme(s.id)}>{s.label}</button>)}
        </div>
        <label className="brand-hue">Teinte
          <input type="range" min={0} max={359} value={kit.hue} onChange={(e) => setHue(Number(e.target.value))} />
        </label>
      </div>
      <div className="brand-palette">
        {swatches.map(([label, hex]) => (
          <button key={label} className="brand-swatch" style={{ background: hex }} onClick={() => copy(hex, `${label} ${hex}`)} title={`Copier ${hex}`}>
            <span style={{ color: label === 'Fond' ? kit.palette.ink : '#fff' }}>{label}<em>{hex}</em></span>
          </button>
        ))}
      </div>

      {/* logo mark */}
      <h4 className="brand-h">Icône</h4>
      <div className="brand-seg wrap">
        {SHAPES.map((s) => <button key={s.id} className={kit.shape === s.id ? 'on' : ''} onClick={() => patch({ shape: s.id })}>{s.label}</button>)}
      </div>

      {/* typography */}
      <h4 className="brand-h">Typographie</h4>
      <div className="brand-seg wrap">
        {FONT_PAIRS.map((fp) => <button key={fp.id} className={kit.fontId === fp.id ? 'on' : ''} onClick={() => patch({ fontId: fp.id })}>{fp.label}</button>)}
      </div>
      <div className="brand-type" style={{ background: kit.palette.bg, color: kit.palette.ink }}>
        <div style={{ fontFamily: f.heading, fontWeight: 800, fontSize: 26 }}>{kit.name || 'Aa'} — Titre</div>
        <div style={{ fontFamily: f.body, fontSize: 14, opacity: 0.85 }}>Corps de texte : {f.body.split(',')[0].replace(/"/g, '')}. Le renard brun rapide saute par-dessus le chien.</div>
      </div>

      {/* actions */}
      <div className="brand-actions">
        <button className="btn primary tiny" onClick={() => void save()}>Enregistrer le Brand Kit</button>
        <button className="btn tiny" onClick={downloadSvg}>Télécharger le logo (SVG)</button>
        <button className="btn tiny ghost" onClick={() => copy(kitCss(kit), 'CSS du Brand Kit')}>Copier le CSS</button>
      </div>
      {loaded && <p className="muted small">Le Brand Kit est stocké en local (IndexedDB) et sera injecté automatiquement dans le Website Builder et le Campaign Studio.</p>}
    </div>
  )
}
