// Asset library · LOCAL-FIRST proof.
//
// Drop images → they're resized + re-encoded to WebP entirely in a Web Worker
// (OffscreenCanvas), stored as Blobs in IndexedDB, and kept offline. Nothing is
// uploaded. This is the whole local-first engine (Worker + WASM-class compute +
// IndexedDB) working end-to-end, and a genuinely useful asset optimizer.
import { useEffect, useRef, useState } from 'react'
import type { ModuleProps } from '../registry'
import { compressImage, humanSize } from '../../lib/media'
import { idbGet, idbSet, idbDel } from '../../lib/idb'

interface AssetMeta { id: string; name: string; w: number; h: number; before: number; after: number; mime: string; ts: number }

const indexKey = (dojoId: string) => `assets.index.${dojoId || 'default'}`
const uid = () => `a_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 7)}`

export default function AssetsModule({ dojoId }: ModuleProps) {
  const [items, setItems] = useState<AssetMeta[]>([])
  const [urls, setUrls] = useState<Record<string, string>>({})
  const [busy, setBusy] = useState(0)
  const [drag, setDrag] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const urlsRef = useRef<Record<string, string>>({})
  urlsRef.current = urls

  // load the saved index + rehydrate object URLs from stored blobs
  useEffect(() => {
    let alive = true
    ;(async () => {
      const idx = (await idbGet<AssetMeta[]>('kv', indexKey(dojoId))) ?? []
      if (!alive) return
      setItems(idx)
      const next: Record<string, string> = {}
      for (const m of idx) {
        const blob = await idbGet<Blob>('assets', m.id)
        if (blob) next[m.id] = URL.createObjectURL(blob)
      }
      if (alive) setUrls(next)
    })()
    return () => {
      alive = false
      for (const u of Object.values(urlsRef.current)) URL.revokeObjectURL(u)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  const persist = (list: AssetMeta[]) => { setItems(list); void idbSet('kv', indexKey(dojoId), list) }

  const addFiles = async (files: FileList | File[]) => {
    const imgs = Array.from(files).filter((f) => f.type.startsWith('image/'))
    if (!imgs.length) return
    setBusy((n) => n + imgs.length)
    const added: AssetMeta[] = []
    for (const f of imgs) {
      try {
        const c = await compressImage(f, { maxDim: 1600, quality: 0.82, mime: 'image/webp' })
        const id = uid()
        await idbSet('assets', id, c.blob)
        const meta: AssetMeta = { id, name: f.name.replace(/\.[^.]+$/, '') + '.webp', w: c.width, h: c.height, before: c.before, after: c.after, mime: c.mime, ts: Date.now() }
        added.push(meta)
        setUrls((u) => ({ ...u, [id]: URL.createObjectURL(c.blob) }))
      } catch { /* skip a file that fails to decode */ }
      finally { setBusy((n) => Math.max(0, n - 1)) }
    }
    if (added.length) persist([...added, ...items])
  }

  const remove = (id: string) => {
    void idbDel('assets', id)
    const u = urls[id]; if (u) URL.revokeObjectURL(u)
    setUrls((m) => { const c = { ...m }; delete c[id]; return c })
    persist(items.filter((m) => m.id !== id))
  }

  const download = async (m: AssetMeta) => {
    const blob = await idbGet<Blob>('assets', m.id)
    if (!blob) return
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob); a.download = m.name; a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 4000)
  }

  const totalBefore = items.reduce((n, m) => n + m.before, 0)
  const totalAfter = items.reduce((n, m) => n + m.after, 0)
  const saved = totalBefore - totalAfter

  return (
    <div className="ad-body assets-mod">
      <div
        className={`asset-drop${drag ? ' on' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => { e.preventDefault(); setDrag(false); void addFiles(e.dataTransfer.files) }}
        onClick={() => inputRef.current?.click()}
      >
        <input ref={inputRef} type="file" accept="image/*" multiple hidden onChange={(e) => e.target.files && void addFiles(e.target.files)} />
        <strong>Drop images here</strong>
        <span className="muted small">or click · <b>100% local</b> compression (WebP), nothing is sent to the server.</span>
        {busy > 0 && <span className="muted small"><span className="ceo-spin" /> {busy} in progress…</span>}
      </div>

      {items.length > 0 && (
        <p className="asset-stat">
          <b>{items.length}</b> asset{items.length > 1 ? 's' : ''} · optimized from <b>{humanSize(totalBefore)}</b> to <b>{humanSize(totalAfter)}</b>
          {saved > 0 && <> · <span className="asset-saved">−{Math.round((saved / totalBefore) * 100)}%</span> ({humanSize(saved)} saved)</>}
        </p>
      )}

      <div className="asset-grid">
        {items.map((m) => (
          <div key={m.id} className="asset-cell">
            {urls[m.id] ? <img src={urls[m.id]} alt={m.name} loading="lazy" /> : <div className="asset-ph" />}
            <div className="asset-meta">
              <span className="asset-name" title={m.name}>{m.name}</span>
              <span className="muted small">{m.w}×{m.h} · {humanSize(m.after)}</span>
            </div>
            <div className="asset-actions">
              <button className="btn tiny" onClick={() => void download(m)}>Download</button>
              <button className="btn tiny ghost" onClick={() => remove(m.id)} aria-label="Delete">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && busy === 0 && (
        <p className="muted small">No assets yet. Images stay in your browser (IndexedDB) · available offline, reusable across your sites and ads.</p>
      )}
    </div>
  )
}
