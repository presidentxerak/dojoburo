// Website Builder · a local block-based website builder. The AI gives a first
// version instantly (from the company name); the user edits every block, reorders
// them, previews responsive, and exports a standalone .html — all in the browser.
// The website automatically uses the saved Brand Kit (colours + fonts). No server.
import { useEffect, useMemo, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import type { BrandKit } from '../../lib/brand'
import {
  type SiteDoc, type Block, type BlockType, BLOCK_LABELS, BLOCK_ORDER, makeBlock, generateSite,
  fullDoc, fieldsFor, getPath, setPath, loadSite, saveSite, siteBrand,
} from '../../lib/site'

export default function WebsiteModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My brand'
  const pushToast = useDojo((s) => s.pushToast)
  const [site, setSite] = useState<SiteDoc>(() => generateSite(dojoName))
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [sel, setSel] = useState<string | null>(null)
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const [addOpen, setAddOpen] = useState(false)

  useEffect(() => {
    let alive = true
    void Promise.all([loadSite(dojoId), siteBrand(dojoId, dojoName)]).then(([s, b]) => {
      if (!alive) return
      const s0 = s ?? generateSite(dojoName)
      setSite(s0); setBrand(b); setSel(s0.blocks[0]?.id ?? null)
    })
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

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
  const save = async () => { await saveSite(dojoId, site); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Website saved', text: 'Saved locally (IndexedDB).' }) }
  const exportHtml = () => {
    const blob = new Blob([doc], { type: 'text/html' })
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${site.name.toLowerCase().replace(/\s+/g, '-')}.html`; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  return (
    <div className="ad-body site-mod">
      {/* toolbar */}
      <div className="site-toolbar">
        <div className="site-seg">
          <button className={device === 'desktop' ? 'on' : ''} onClick={() => setDevice('desktop')} title="Desktop">Desktop</button>
          <button className={device === 'mobile' ? 'on' : ''} onClick={() => setDevice('mobile')} title="Mobile">Mobile</button>
        </div>
        <div className="site-tb-actions">
          <button className="btn tiny ghost" onClick={regenerate} title="Regenerate a first version">↺ 1st version</button>
          <button className="btn tiny" onClick={exportHtml}>Export HTML</button>
          <button className="btn primary tiny" onClick={() => void save()}>Save</button>
        </div>
      </div>

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
    </div>
  )
}
