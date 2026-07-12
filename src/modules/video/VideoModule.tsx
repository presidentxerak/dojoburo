// Video Creator · a local video editor. Import clips, trim them, sequence them
// on a timeline, add brand-styled text overlays, pick a social format, and export
// a real .webm — all in the browser (Canvas + MediaRecorder + Web Audio). Clips
// are stored in IndexedDB, never uploaded. No ffmpeg.wasm, no server.
import { useEffect, useRef, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import type { BrandKit } from '../../lib/brand'
import {
  type Clip, type Overlay, type OverlayKind, type FormatId,
  FORMATS, formatById, canvasSize, drawCover, drawOverlay, clipLen, totalLen, fmtTime, uid,
  loadProject, saveProject, putClipBlob, getClipBlob, delClipBlob, videoBrand, pickExportMime,
} from '../../lib/video'

export default function VideoModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'Ma marque'
  const pushToast = useDojo((s) => s.pushToast)

  const [clips, setClips] = useState<Clip[]>([])
  const [overlays, setOverlays] = useState<Overlay[]>([])
  const [format, setFormat] = useState<FormatId>('reel')
  const [brand, setBrand] = useState<BrandKit | null>(null)
  const [sel, setSel] = useState<string | null>(null)
  const [selOv, setSelOv] = useState<string | null>(null)
  const [playing, setPlaying] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [importing, setImporting] = useState(false)
  const [t, setT] = useState(0)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const hiddenRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const vids = useRef<Map<string, HTMLVideoElement>>(new Map())
  const playingRef = useRef(false)
  const activeIdx = useRef(0)
  const exportingRef = useRef(false)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const audioCtx = useRef<AudioContext | null>(null)
  const audioDest = useRef<MediaStreamAudioDestinationNode | null>(null)
  const audioNodes = useRef<Set<string>>(new Set())

  // live refs for the render loop
  const clipsRef = useRef<Clip[]>([]); clipsRef.current = clips
  const overlaysRef = useRef<Overlay[]>([]); overlaysRef.current = overlays
  const brandRef = useRef<BrandKit | null>(null); brandRef.current = brand
  const selRef = useRef<string | null>(null); selRef.current = sel

  const fmt = formatById(format)
  const cs = canvasSize(fmt)

  // ---- load saved project + rehydrate clip blobs ---------------------------
  useEffect(() => {
    let alive = true
    void (async () => {
      const [p, b] = await Promise.all([loadProject(dojoId), videoBrand(dojoId, dojoName)])
      if (!alive) return
      setBrand(b)
      if (p) {
        setFormat(p.format); setOverlays(p.overlays)
        const ok: Clip[] = []
        for (const c of p.clips) {
          const blob = await getClipBlob(c.id)
          if (blob) { makeVideoEl(c.id, URL.createObjectURL(blob)); ok.push(c) }
        }
        if (alive) { setClips(ok); setSel(ok[0]?.id ?? null) }
      }
    })()
    return () => { alive = false; vids.current.forEach((v) => { try { v.pause() } catch { /* */ } }) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dojoId])

  // ---- persistent render loop ----------------------------------------------
  useEffect(() => {
    let raf = 0
    const loop = () => {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        if (ctx) {
          const list = clipsRef.current
          const idx = playingRef.current ? activeIdx.current : Math.max(0, list.findIndex((c) => c.id === selRef.current))
          const clip = list[idx]
          const v = clip ? vids.current.get(clip.id) : undefined
          if (v && v.readyState >= 2) drawCover(ctx, v, canvas.width, canvas.height)
          else { ctx.fillStyle = '#111'; ctx.fillRect(0, 0, canvas.width, canvas.height) }
          // timeline time
          const offset = list.slice(0, idx).reduce((n, c) => n + clipLen(c), 0)
          const tt = clip && v ? offset + Math.max(0, v.currentTime - clip.inSec) : 0
          const kit = brandRef.current
          if (kit) for (const o of overlaysRef.current) if (tt >= o.start && tt <= o.end) drawOverlay(ctx, canvas.width, canvas.height, o, kit)
          // advance during playback
          if (playingRef.current && clip && v) {
            setT(tt)
            if (v.currentTime >= clip.outSec - 0.04 || v.ended) advance()
          }
        }
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ---- video element + audio graph -----------------------------------------
  function makeVideoEl(id: string, url: string): HTMLVideoElement {
    let v = vids.current.get(id)
    if (v) return v
    v = document.createElement('video')
    v.src = url; v.preload = 'auto'; v.playsInline = true; v.crossOrigin = 'anonymous'
    v.style.cssText = 'position:absolute;width:1px;height:1px;opacity:0;pointer-events:none'
    hiddenRef.current?.appendChild(v)
    vids.current.set(id, v)
    return v
  }
  function wireAudio(id: string) {
    try {
      if (audioNodes.current.has(id)) return
      if (!audioCtx.current) { audioCtx.current = new AudioContext(); audioDest.current = audioCtx.current.createMediaStreamDestination() }
      const v = vids.current.get(id); if (!v) return
      const src = audioCtx.current.createMediaElementSource(v)
      src.connect(audioCtx.current.destination)
      if (audioDest.current) src.connect(audioDest.current)
      audioNodes.current.add(id)
    } catch { /* audio best-effort */ }
  }

  // ---- import ---------------------------------------------------------------
  const addFiles = async (files: FileList | File[]) => {
    const vidsIn = Array.from(files).filter((f) => f.type.startsWith('video/'))
    if (!vidsIn.length) return
    setImporting(true)
    const added: Clip[] = []
    for (const f of vidsIn) {
      const id = uid('c')
      try {
        await putClipBlob(id, f)
        const url = URL.createObjectURL(f)
        const v = makeVideoEl(id, url)
        const duration = await new Promise<number>((res) => {
          if (v.readyState >= 1 && v.duration) return res(v.duration)
          v.onloadedmetadata = () => res(v.duration || 0)
          setTimeout(() => res(v.duration || 0), 4000)
        })
        added.push({ id, name: f.name.replace(/\.[^.]+$/, ''), inSec: 0, outSec: duration || 0, duration: duration || 0 })
      } catch { /* skip */ }
    }
    if (added.length) { setClips((c) => [...c, ...added]); setSel((s) => s ?? added[0].id) }
    setImporting(false)
  }

  // ---- playback -------------------------------------------------------------
  const seekTo = (clip: Clip) => { const v = vids.current.get(clip.id); if (v && v.readyState >= 1) try { v.currentTime = clip.inSec } catch { /* */ } }
  function advance() {
    const list = clipsRef.current
    const cur = list[activeIdx.current]
    if (cur) { const v = vids.current.get(cur.id); v?.pause() }
    if (activeIdx.current < list.length - 1) {
      activeIdx.current += 1
      const next = list[activeIdx.current]; const nv = vids.current.get(next.id)
      if (nv) { try { nv.currentTime = next.inSec } catch { /* */ } void nv.play().catch(() => {}) }
    } else stopPlay(true)
  }
  const startPlay = () => {
    const list = clipsRef.current; if (!list.length) return
    void audioCtx.current?.resume()
    activeIdx.current = 0
    const c0 = list[0]; const v = vids.current.get(c0.id)
    if (!v) return
    try { v.currentTime = c0.inSec } catch { /* */ }
    playingRef.current = true; setPlaying(true)
    void v.play().catch(() => {})
  }
  function stopPlay(ended = false) {
    playingRef.current = false; setPlaying(false)
    const list = clipsRef.current; const cur = list[activeIdx.current]
    if (cur) vids.current.get(cur.id)?.pause()
    if (ended && exportingRef.current) finishExport()
  }
  const togglePlay = () => { if (playingRef.current) stopPlay(); else startPlay() }

  // ---- edit -----------------------------------------------------------------
  const updateClip = (id: string, p: Partial<Clip>) => setClips((cs) => cs.map((c) => (c.id === id ? { ...c, ...p } : c)))
  const moveClip = (id: string, dir: -1 | 1) => setClips((cs) => { const i = cs.findIndex((c) => c.id === id); const j = i + dir; if (i < 0 || j < 0 || j >= cs.length) return cs; const a = [...cs];[a[i], a[j]] = [a[j], a[i]]; return a })
  const delClip = (id: string) => { void delClipBlob(id); const v = vids.current.get(id); if (v) { v.pause(); v.remove(); vids.current.delete(id) } setClips((cs) => cs.filter((c) => c.id !== id)); if (sel === id) setSel(null) }
  const addOverlay = (kind: OverlayKind) => { const o: Overlay = { id: uid('o'), kind, text: kind === 'title' ? (dojoName) : 'Votre sous-titre', start: 0, end: Math.max(3, Math.min(5, totalLen(clips) || 5)) }; setOverlays((x) => [...x, o]); setSelOv(o.id) }
  const updateOverlay = (id: string, p: Partial<Overlay>) => setOverlays((x) => x.map((o) => (o.id === id ? { ...o, ...p } : o)))
  const delOverlay = (id: string) => { setOverlays((x) => x.filter((o) => o.id !== id)); if (selOv === id) setSelOv(null) }

  const save = async () => { await saveProject(dojoId, { format, clips, overlays, updatedAt: Date.now() }); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Projet enregistré', text: 'Clips + montage sauvegardés en local.' }) }

  // ---- export (record the canvas playthrough) -------------------------------
  const doExport = () => {
    const canvas = canvasRef.current; if (!canvas || !clips.length) return
    const mime = pickExportMime()
    if (!mime) { pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Export non supporté', text: 'Ton navigateur ne permet pas l’enregistrement vidéo (essaie Chrome).' }); return }
    // wire audio for all clips (best-effort) and build the combined stream
    clips.forEach((c) => wireAudio(c.id))
    const stream = canvas.captureStream(30)
    try { if (audioDest.current) audioDest.current.stream.getAudioTracks().forEach((tr) => stream.addTrack(tr)) } catch { /* video-only */ }
    const chunks: BlobPart[] = []
    const rec = new MediaRecorder(stream, { mimeType: mime })
    rec.ondataavailable = (e) => { if (e.data.size) chunks.push(e.data) }
    rec.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' })
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `${dojoName.toLowerCase().replace(/\s+/g, '-')}-${format}.webm`; a.click()
      setTimeout(() => URL.revokeObjectURL(a.href), 5000)
      setExporting(false); exportingRef.current = false
      pushToast({ kind: 'event', badge: 'OK', color: '#e0483f', title: 'Vidéo exportée', text: 'Fichier .webm généré 100% en local.' })
    }
    recorderRef.current = rec
    setExporting(true); exportingRef.current = true
    void audioCtx.current?.resume()
    rec.start()
    startPlay()
  }
  function finishExport() { try { recorderRef.current?.stop() } catch { /* */ } }

  const selClip = clips.find((c) => c.id === sel) || null
  const ov = overlays.find((o) => o.id === selOv) || null
  const total = totalLen(clips)

  return (
    <div className="ad-body video-mod">
      <div ref={hiddenRef} aria-hidden style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} />

      {/* toolbar */}
      <div className="site-toolbar">
        <div className="site-seg vid-fmt">
          {FORMATS.map((f) => <button key={f.id} className={format === f.id ? 'on' : ''} onClick={() => setFormat(f.id)} disabled={exporting}>{f.label.split(' ')[0]}</button>)}
        </div>
        <div className="site-tb-actions">
          <button className="btn tiny" onClick={() => void save()} disabled={exporting}>Enregistrer</button>
          <button className="btn primary tiny" onClick={doExport} disabled={exporting || !clips.length}>{exporting ? 'Export…' : 'Exporter (.webm)'}</button>
        </div>
      </div>

      {/* preview */}
      <div className={`vid-stage ${format}`}>
        <canvas ref={canvasRef} width={cs.w} height={cs.h} className="vid-canvas" />
      </div>
      <div className="vid-transport">
        <button className="btn tiny" onClick={togglePlay} disabled={!clips.length}>{playing ? '⏸' : '▶'} {playing ? 'Pause' : 'Lire'}</button>
        <span className="vid-time">{fmtTime(t)} / {fmtTime(total)}</span>
        {exporting && <span className="muted small"><span className="ceo-spin" /> Enregistrement en direct…</span>}
      </div>

      {/* import + clips */}
      <div className="site-blocks-head">
        <h4 className="brand-h" style={{ margin: 0 }}>Clips</h4>
        <button className="btn tiny" onClick={() => fileRef.current?.click()} disabled={exporting}>{importing ? 'Import…' : '＋ Importer'}</button>
        <input ref={fileRef} type="file" accept="video/*" multiple hidden onChange={(e) => e.target.files && void addFiles(e.target.files)} />
      </div>
      {clips.length === 0 ? (
        <div className="vid-empty" onClick={() => fileRef.current?.click()}>
          <strong>Importe tes vidéos</strong>
          <span className="muted small">Elles restent dans ton navigateur (IndexedDB) — jamais envoyées au serveur.</span>
        </div>
      ) : (
        <ul className="site-blocklist">
          {clips.map((c, i) => (
            <li key={c.id} className={c.id === sel ? 'on' : ''}>
              <button className="site-bl-name" onClick={() => { setSel(c.id); seekTo(c) }}>{c.name} <em className="muted small">· {fmtTime(clipLen(c))}</em></button>
              <div className="site-bl-ops">
                <button onClick={() => moveClip(c.id, -1)} disabled={i === 0}>↑</button>
                <button onClick={() => moveClip(c.id, 1)} disabled={i === clips.length - 1}>↓</button>
                <button onClick={() => delClip(c.id)}>✕</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* trim */}
      {selClip && (
        <div className="site-inspector">
          <h4 className="brand-h">Découpe · {selClip.name}</h4>
          <label className="site-field"><span>Début : {fmtTime(selClip.inSec)}</span>
            <input type="range" min={0} max={selClip.duration} step={0.1} value={selClip.inSec} onChange={(e) => { const val = Math.min(Number(e.target.value), selClip.outSec - 0.2); updateClip(selClip.id, { inSec: val }); const v = vids.current.get(selClip.id); if (v) try { v.currentTime = val } catch { /* */ } }} />
          </label>
          <label className="site-field"><span>Fin : {fmtTime(selClip.outSec)}</span>
            <input type="range" min={0} max={selClip.duration} step={0.1} value={selClip.outSec} onChange={(e) => { const val = Math.max(Number(e.target.value), selClip.inSec + 0.2); updateClip(selClip.id, { outSec: val }); const v = vids.current.get(selClip.id); if (v) try { v.currentTime = val } catch { /* */ } }} />
          </label>
        </div>
      )}

      {/* overlays */}
      <div className="site-blocks-head">
        <h4 className="brand-h" style={{ margin: 0 }}>Textes de marque</h4>
        <div style={{ display: 'flex', gap: 6 }}>
          <button className="btn tiny" onClick={() => addOverlay('title')}>＋ Titre</button>
          <button className="btn tiny ghost" onClick={() => addOverlay('caption')}>＋ Sous-titre</button>
        </div>
      </div>
      {overlays.length > 0 && (
        <ul className="site-blocklist">
          {overlays.map((o) => (
            <li key={o.id} className={o.id === selOv ? 'on' : ''}>
              <button className="site-bl-name" onClick={() => setSelOv(o.id)}>{o.kind === 'title' ? 'Titre' : 'Sous-titre'} · {o.text.slice(0, 22) || '—'}</button>
              <div className="site-bl-ops"><button onClick={() => delOverlay(o.id)}>✕</button></div>
            </li>
          ))}
        </ul>
      )}
      {ov && (
        <div className="site-inspector">
          <label className="site-field"><span>Texte</span><input value={ov.text} onChange={(e) => updateOverlay(ov.id, { text: e.target.value })} /></label>
          <div style={{ display: 'flex', gap: 10 }}>
            <label className="site-field" style={{ flex: 1 }}><span>Début : {ov.start.toFixed(1)}s</span><input type="range" min={0} max={Math.max(1, total)} step={0.1} value={ov.start} onChange={(e) => updateOverlay(ov.id, { start: Math.min(Number(e.target.value), ov.end) })} /></label>
            <label className="site-field" style={{ flex: 1 }}><span>Fin : {ov.end.toFixed(1)}s</span><input type="range" min={0} max={Math.max(1, total)} step={0.1} value={ov.end} onChange={(e) => updateOverlay(ov.id, { end: Math.max(Number(e.target.value), ov.start) })} /></label>
          </div>
        </div>
      )}

      <p className="muted small">Montage 100% local (Canvas + MediaRecorder). L’export produit un <code>.webm</code> — jouable partout, importable dans Meta/TikTok. Les textes utilisent ton Brand Kit.</p>
    </div>
  )
}
