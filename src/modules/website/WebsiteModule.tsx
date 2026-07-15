// Website Builder · a local block-based website builder. The AI gives a first
// version instantly (from the company name); the user edits every block, reorders
// them, previews responsive, and exports a standalone .html · all in the browser.
// The website automatically uses the saved Brand Kit (colours + fonts). No server.
import { useEffect, useMemo, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import { type BrandKit, saveBrandKit } from '../../lib/brand'
import {
  type SiteDoc, type Block, type BlockType, type TemplateCategory, BLOCK_LABELS, BLOCK_ORDER, makeBlock, generateSite,
  generateFromTemplate, SITE_TEMPLATES, fullDoc, fieldsFor, getPath, setPath, loadSite, saveSite, siteBrand,
} from '../../lib/site'
import { PRESET_PALETTES, randomPalette, paletteToKit, kitToPalette, textOn } from '../../lib/palettes'
import { WebsiteWizard } from './WebsiteWizard'
import { StudioNext } from '../StudioNext'

const CATS: (TemplateCategory | 'All')[] = ['All', 'Business', 'Store', 'Portfolio', 'Restaurant', 'Agency', 'Personal', 'Blog', 'Events']
const VIBE_LABEL: Record<string, string> = { serif: 'Serif', sans: 'Sans', mono: 'Mono' }

export default function WebsiteModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My brand'
  const pushToast = useDojo((s) => s.pushToast)
  const [site, setSite] = useState<SiteDoc>(() => generateSite(dojoName))
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [sel, setSel] = useState<string | null>(null)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [addOpen, setAddOpen] = useState(false)
  const [view, setView] = useState<'wizard' | 'gallery' | 'edit'>('wizard')
  const [cat, setCat] = useState<(TemplateCategory | 'All')>('All')
  const [saved, setSaved] = useState(false)
  // colours · Coolors-style generator + preset palettes
  const [colorsOpen, setColorsOpen] = useState(false)
  const [gen, setGen] = useState<string[]>([])
  const [locks, setLocks] = useState<boolean[]>([false, false, false, false, false])

  useEffect(() => {
    let alive = true
    void Promise.all([loadSite(dojoId), siteBrand(dojoId, dojoName)]).then(([s, b]) => {
      if (!alive) return
      setBrand(b)
      if (s) { setSite(s); setSel(s.blocks[0]?.id ?? null); setView('edit') }
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const onWizardCreate = (s: SiteDoc) => {
    setSite(s); setSel(s.blocks[0]?.id ?? null); setView('edit')
    void siteBrand(dojoId, dojoName).then((b) => setBrand(b))
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Site created', text: 'Edit every section, then export. It uses your Brand Kit.' })
  }

  const useTemplate = (id: string) => {
    const s = generateFromTemplate(dojoName, id)
    setSite(s); setSel(s.blocks[0]?.id ?? null); setView('edit')
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Template applied', text: 'Edit each block, then export. It uses your Brand Kit.' })
  }
  const templates = SITE_TEMPLATES.filter((t) => cat === 'All' || t.category === cat)

  const doc = useMemo(() => (brand ? fullDoc(site, brand) : ''), [site, brand])
  const selected = site.blocks.find((b) => b.id === sel) || null

  const mutate = (blocks: Block[]) => setSite((s) => ({ ...s, blocks }))
  const add = (type: BlockType) => { const b = makeBlock(type, site.name); mutate([...site.blocks, b]); setSel(b.id); setAddOpen(false) }
  const del = (id: string) => { mutate(site.blocks.filter((b) => b.id !== id)); if (sel === id) setSel(null) }
  const dup = (id: string) => { const i = site.blocks.findIndex((b) => b.id === id); if (i < 0) return; const c = { ...site.blocks[i], id: `b_${Date.now().toString(36)}` }; const arr = [...site.blocks]; arr.splice(i + 1, 0, c); mutate(arr); setSel(c.id) }
  const move = (id: string, dir: -1 | 1) => {
    const i = site.blocks.findIndex((b) => b.id === id); const j = i + dir
    if (i < 0 || j < 0 || j >= site.blocks.length) return
    const arr = [...site.blocks];[arr[i], arr[j]] = [arr[j], arr[i]]; mutate(arr)
  }
  const edit = (path: string, raw: string, kind: string) => {
    if (!selected) return
    const value: unknown = kind === 'lines' ? raw.split('\n').filter((x) => x.trim()) : kind === 'text' && path === 'count' ? Number(raw) || 0 : raw
    const props = setPath(selected.props, path, value)
    mutate(site.blocks.map((b) => (b.id === selected.id ? { ...b, props } : b)))
  }

  const regenerate = () => { const s = generateSite(dojoName); setSite(s); setSel(s.blocks[0]?.id ?? null); pushToast({ kind: 'event', badge: 'AI', color: '#2f7fd6', title: 'First version generated', text: 'Edit each block, then export.' }) }
  const save = async () => { await saveSite(dojoId, site); setSaved(true); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Website saved', text: 'Saved locally (IndexedDB).' }) }
  const exportHtml = () => {
    const blob = new Blob([doc], { type: 'text/html' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${site.name.toLowerCase().replace(/\s+/g, '-')}.html`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  // ---- colours: presets + Coolors-style generator ----
  const openColors = () => {
    if (!colorsOpen && brand && gen.length === 0) setGen(kitToPalette(brand.palette))
    setColorsOpen((v) => !v)
  }
  const shuffle = () => setGen((cur) => randomPalette(locks.map((l, i) => (l ? (cur[i] || null) : null))))
  const toggleLock = (i: number) => setLocks((ls) => ls.map((l, j) => (j === i ? !l : l)))
  const setSwatch = (i: number, hex: string) => setGen((cur) => cur.map((c, j) => (j === i ? hex : c)))
  const applyPalette = (colors: string[]) => {
    if (!brand) return
    const next = { ...brand, palette: paletteToKit(colors) }
    setBrand(next)
    void saveBrandKit(dojoId, next)
    pushToast({ kind: 'event', badge: 'OK', color: '#2f6bff', title: 'Colours applied', text: 'Your site & Brand Kit now use this palette.' })
  }
  // spacebar to generate, like Coolors (only while the panel is open)
  useEffect(() => {
    if (!colorsOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.code !== 'Space') return
      const tag = (e.target as HTMLElement)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return
      e.preventDefault(); shuffle()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorsOpen, locks])

  if (view === 'wizard') {
    return <WebsiteWizard dojoId={dojoId} dojoName={dojoName} onCancel={() => setView('gallery')} onCreate={onWizardCreate} />
  }

  if (view === 'gallery') {
    return (
      <div className="site-mod sq">
        <div className="wiz-galtop">
          <div>
            <h3 className="sq-title">Pick a template</h3>
            <p className="sq-lead">Start from a high-end layout, then edit every block. Your Brand Kit (colours + fonts) is applied automatically.</p>
          </div>
          <button className="btn tiny" onClick={() => setView('wizard')}>‹ Guided setup</button>
        </div>
        <div className="sq-tags sq-filter">
          {CATS.map((c) => <button key={c} className={`sq-chip${cat === c ? ' on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}
        </div>
        <div className="tpl-grid">
          {templates.map((t) => (
            <button key={t.id} className="tpl-card" onClick={() => useTemplate(t.id)}>
              <span className="tpl-thumb" style={{ background: t.bg, color: t.ink }}>
                <span className="tpl-thumb-bar" style={{ background: t.accent }} />
                <b>{t.name}</b>
                <span className="tpl-thumb-line" style={{ background: t.ink, opacity: 0.28 }} />
                <span className="tpl-thumb-line short" style={{ background: t.ink, opacity: 0.18 }} />
                <span className="tpl-thumb-btn" style={{ background: t.accent }} />
              </span>
              <span className="tpl-meta">
                <strong>{t.name}</strong>
                <span className="tpl-cat">{t.category} · {VIBE_LABEL[t.vibe]}</span>
                <span className="tpl-blurb">{t.blurb}</span>
                <span className="tpl-use">Use this template →</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="ad-body site-mod">
      {/* toolbar */}
      <div className="site-toolbar">
        <button className="btn tiny ghost" onClick={() => setView('gallery')} title="Back to templates">‹ Templates</button>
        <div className="site-seg">
          <button className={device === 'desktop' ? 'on' : ''} onClick={() => setDevice('desktop')} title="Desktop">Desktop</button>
          <button className={device === 'mobile' ? 'on' : ''} onClick={() => setDevice('mobile')} title="Mobile">Mobile</button>
        </div>
        <div className="site-tb-actions">
          <button className={`btn tiny ghost${colorsOpen ? ' on' : ''}`} onClick={openColors} title="Colours & palettes">🎨 Colours</button>
          <button className="btn tiny ghost" onClick={regenerate} title="Regenerate a first version">↺ 1st version</button>
          <button className="btn tiny" onClick={exportHtml}>Export HTML</button>
          <button className="btn primary tiny" onClick={() => void save()}>Save</button>
        </div>
      </div>

      {/* colours: generator + presets */}
      {colorsOpen && (
        <div className="cw-panel">
          <div className="cw-head">
            <div><h4>Colour palette</h4><p>Generate a scheme (or press <kbd>space</kbd>), lock the ones you love, or pick a trending palette. Applies to your whole site.</p></div>
            <button className="cw-close" onClick={() => setColorsOpen(false)} aria-label="Close">✕</button>
          </div>
          <div className="cw-gen">
            {gen.map((c, i) => (
              <div key={i} className="cw-swatch" style={{ background: c, color: textOn(c) }}>
                <button className={`cw-lock${locks[i] ? ' on' : ''}`} onClick={() => toggleLock(i)} title={locks[i] ? 'Unlock' : 'Lock'}>{locks[i] ? '🔒' : '🔓'}</button>
                <input className="cw-hex" value={c.toUpperCase()} style={{ color: textOn(c) }} onChange={(e) => { const v = e.target.value; if (/^#?[0-9a-fA-F]{0,6}$/.test(v)) setSwatch(i, v.startsWith('#') ? v : '#' + v) }} />
              </div>
            ))}
          </div>
          <div className="cw-actions">
            <button className="btn tiny" onClick={shuffle}>⟳ Generate</button>
            <button className="btn primary tiny" onClick={() => applyPalette(gen)}>Apply palette</button>
          </div>
          <div className="cw-presets-h">Trending palettes</div>
          <div className="cw-presets">
            {PRESET_PALETTES.map((p) => (
              <button key={p.name} className="cw-preset" title={p.name} onClick={() => { setGen(p.colors); applyPalette(p.colors) }}>
                <span className="cw-preset-strip">{p.colors.map((c, i) => <span key={i} style={{ background: c }} />)}</span>
                <span className="cw-preset-n">{p.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* responsive preview (WYSIWYG === export) */}
      <div className={`site-preview ${device}`}>
        <iframe title="Website preview" className="site-frame" srcDoc={doc} />
      </div>

      {/* blocks */}
      <div className="site-blocks-head">
        <h4 className="brand-h" style={{ margin: 0 }}>Blocks</h4>
        <button className="btn tiny" onClick={() => setAddOpen((v) => !v)}>＋ Add</button>
      </div>
      {addOpen && (
        <div className="site-palette">
          {BLOCK_ORDER.map((t) => <button key={t} onClick={() => add(t)}>{BLOCK_LABELS[t]}</button>)}
        </div>
      )}
      <ul className="site-blocklist">
        {site.blocks.map((b, i) => (
          <li key={b.id} className={b.id === sel ? 'on' : ''}>
            <button className="site-bl-name" onClick={() => setSel(b.id)}>{BLOCK_LABELS[b.type]}</button>
            <div className="site-bl-ops">
              <button onClick={() => move(b.id, -1)} disabled={i === 0} aria-label="Move up">↑</button>
              <button onClick={() => move(b.id, 1)} disabled={i === site.blocks.length - 1} aria-label="Move down">↓</button>
              <button onClick={() => dup(b.id)} aria-label="Duplicate">⎘</button>
              <button onClick={() => del(b.id)} aria-label="Delete">✕</button>
            </div>
          </li>
        ))}
      </ul>

      {/* inspector */}
      {selected ? (
        <div className="site-inspector">
          <h4 className="brand-h">Edit · {BLOCK_LABELS[selected.type]}</h4>
          {fieldsFor(selected).map((f) => {
            const cur = getPath(selected.props, f.path)
            const value = f.kind === 'lines' ? (Array.isArray(cur) ? (cur as string[]).join('\n') : '') : String(cur ?? '')
            return (
              <label key={f.path} className="site-field">
                <span>{f.label}</span>
                {f.kind === 'text'
                  ? <input value={value} onChange={(e) => edit(f.path, e.target.value, f.kind)} />
                  : <textarea rows={f.kind === 'lines' ? 3 : 2} value={value} onChange={(e) => edit(f.path, e.target.value, f.kind)} />}
              </label>
            )
          })}
        </div>
      ) : (
        <p className="muted small">Select a block to edit it.</p>
      )}
      <p className="muted small">The website uses your <b>Brand Kit</b> (colours + fonts). Preview = export: the <code>.html</code> file is standalone and can be hosted anywhere.</p>
      {saved && <StudioNext from="weblos" done="Website saved." />}
    </div>
  )
}
