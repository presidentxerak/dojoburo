// Video Creator · a local video editor. Import clips, trim them, sequence them
// on a timeline, add brand-styled text overlays, pick a social format, and export
// a real .webm · all in the browser (Canvas + MediaRecorder + Web Audio). Clips
// are stored in IndexedDB, never uploaded. No ffmpeg.wasm, no server.
import { useEffect, useRef, useState } from 'react'
import type { ModuleProps } from '../registry'
import { useWorkshop } from '../../workshop'
import { useDojo } from '../../store'
import type { BrandKit } from '../../lib/brand'
import {
  type Clip, type Overlay, type OverlayKind, type FormatId, type TextAnim,
  FORMATS, TEXT_ANIMS, formatById, canvasSize, drawCover, drawOverlay, clipLen, totalLen, fmtTime, uid,
  loadProject, saveProject, putClipBlob, getClipBlob, delClipBlob, videoBrand, pickExportMime,
} from '../../lib/video'
import { VOICES, getTtsKey, setTtsKey, generateVoiceover } from '../../lib/tts'

export default function VideoModule({ dojoId }: ModuleProps) {
  const dojoName = useWorkshop((s) => s.dojos.find((d) => d.id === dojoId)?.name) || 'My brand'
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

  // ---- voiceover (ElevenLabs · BYOK) ---------------------------------------
  const [voScript, setVoScript] = useState('')
  const [voiceId, setVoiceId] = useState(VOICES[0].id)
  const [voKey, setVoKey] = useState(() => getTtsKey())
  const [voKeyOpen, setVoKeyOpen] = useState(false)
  const [voUrl, setVoUrl] = useState<string | null>(null)
  const [voBusy, setVoBusy] = useState(false)

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
      // Guard the whole frame: a single bad draw (a corrupt clip, an overlay
      // edge case) must never break the loop — otherwise the preview freezes
      // permanently and the editor looks broken. try/finally keeps it alive.
      try {
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
            if (kit) for (const o of overlaysRef.current) if (tt >= o.start && tt <= o.end) { try { drawOverlay(ctx, canvas.width, canvas.height, o, kit, tt) } catch { /* skip a bad overlay */ } }
            // advance during playback
            if (playingRef.current && clip && v) {
              setT(tt)
              if (v.currentTime >= clip.outSec - 0.04 || v.ended) advance()
            }
          }
        }
      } catch { /* never let one frame kill the render loop */ }
      finally { raf = requestAnimationFrame(loop) }
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
  const addOverlay = (kind: OverlayKind) => { const o: Overlay = { id: uid('o'), kind, text: kind === 'title' ? (dojoName) : 'Your caption', start: 0, end: Math.max(3, Math.min(5, totalLen(clips) || 5)), anim: 'fade' }; setOverlays((x) => [...x, o]); setSelOv(o.id) }
  // Split (cut) the selected clip at the current playhead — a real cut: the two
  // halves reference the same source blob with adjusted in/out points.
  const splitClip = async (clip: Clip) => {
    const v = vids.current.get(clip.id)
    const at = v ? v.currentTime : clip.inSec + clipLen(clip) / 2
    if (at <= clip.inSec + 0.2 || at >= clip.outSec - 0.2) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Move the playhead', text: 'Play/pause inside the clip, then split.' }); return }
    const bId = uid('c')
    try {
      const blob = await getClipBlob(clip.id); if (!blob) return
      await putClipBlob(bId, blob); makeVideoEl(bId, URL.createObjectURL(blob))
    } catch { return }
    setClips((cs) => {
      const i = cs.findIndex((c) => c.id === clip.id); if (i < 0) return cs
      const a = { ...clip, outSec: at }
      const b: Clip = { id: bId, name: `${clip.name} (2)`, inSec: at, outSec: clip.outSec, duration: clip.duration }
      const arr = [...cs]; arr.splice(i, 1, a, b); return arr
    })
    setSel(bId)
  }
  const updateOverlay = (id: string, p: Partial<Overlay>) => setOverlays((x) => x.map((o) => (o.id === id ? { ...o, ...p } : o)))
  const delOverlay = (id: string) => { setOverlays((x) => x.filter((o) => o.id !== id)); if (selOv === id) setSelOv(null) }

  const save = async () => { await saveProject(dojoId, { format, clips, overlays, updatedAt: Date.now() }); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Project saved', text: 'Clips + edit saved locally.' }) }

  // seed the voiceover script from the overlays / brand name, once
  useEffect(() => {
    if (voScript) return
    const fromOverlays = overlays.map((o) => o.text).filter(Boolean).join('. ')
    if (fromOverlays) setVoScript(fromOverlays)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overlays.length])

  const saveVoKey = () => { setTtsKey(voKey); setVoKeyOpen(false); pushToast({ kind: 'event', badge: 'OK', color: '#2fae6a', title: 'Key saved', text: 'Your ElevenLabs key stays in this browser only.' }) }
  const makeVoiceover = async () => {
    const text = voScript.trim()
    if (!text) { pushToast({ kind: 'event', badge: '!', color: '#d9822b', title: 'Empty script', text: 'Write the narration first.' }); return }
    setVoBusy(true)
    if (voUrl) { URL.revokeObjectURL(voUrl); setVoUrl(null) }
    const r = await generateVoiceover(text, voiceId)
    setVoBusy(false)
    if (r.ok && r.url) { setVoUrl(r.url); pushToast({ kind: 'event', badge: 'OK', color: '#7b5cff', title: 'Voiceover ready', text: 'Preview it below, then download the MP3.' }) }
    else {
      if (r.error === 'no_key') setVoKeyOpen(true)
      pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Voiceover failed', text: r.hint || r.error || 'Try again.' })
    }
  }
  const downloadVo = () => { if (!voUrl) return; const a = document.createElement('a'); a.href = voUrl; a.download = `${dojoName.toLowerCase().replace(/\s+/g, '-')}-voiceover.mp3`; a.click() }

  // ---- export (record the canvas playthrough) -------------------------------
  const doExport = () => {
    const canvas = canvasRef.current; if (!canvas || !clips.length) return
    const mime = pickExportMime()
    if (!mime) { pushToast({ kind: 'event', badge: '!', color: '#e0483f', title: 'Export not supported', text: 'Your browser does not support video recording (try Chrome).' }); return }
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
      pushToast({ kind: 'event', badge: 'OK', color: '#e0483f', title: 'Video exported', text: '.webm file generated 100% locally.' })
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

  const playhead = total > 0 ? Math.min(100, (t / total) * 100) : 0

  return (
    <div className="ad-body video-mod cc-editor">
      <div ref={hiddenRef} aria-hidden style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} />

      <div className="cc-main">
        {/* preview stage */}
        <div className="cc-stage-col">
          <div className="cc-stage-top">
            <div className="cc-fmt">
              {FORMATS.map((f) => <button key={f.id} className={format === f.id ? 'on' : ''} onClick={() => setFormat(f.id)} disabled={exporting} title={f.label}>{f.short}</button>)}
            </div>
            <div className="cc-stage-actions">
              <button className="btn tiny" onClick={() => void save()} disabled={exporting}>Save</button>
              <button className="btn primary tiny" onClick={doExport} disabled={exporting || !clips.length}>{exporting ? 'Exporting…' : 'Export .webm'}</button>
            </div>
          </div>
          <div className={`vid-stage cc-stage ${format}`}>
            <canvas ref={canvasRef} width={cs.w} height={cs.h} className="vid-canvas" />
            {clips.length === 0 && !importing && (
              <button className="vid-empty" onClick={() => fileRef.current?.click()}>
                <strong>Import a clip to start</strong>
                <span>Trim, sequence, add text &amp; a voiceover, then export a .webm. Everything stays in your browser.</span>
              </button>
            )}
          </div>
          <div className="vid-transport cc-transport">
            <button className="btn tiny" onClick={togglePlay} disabled={!clips.length}>{playing ? 'Pause' : 'Play'}</button>
            <span className="vid-time">{fmtTime(t)} / {fmtTime(total)}</span>
            {exporting && <span className="muted small"><span className="ceo-spin" /> Recording live…</span>}
            <button className="btn tiny cc-import" onClick={() => fileRef.current?.click()} disabled={exporting}>{importing ? 'Importing…' : 'Import clips'}</button>
            <input ref={fileRef} type="file" accept="video/*" multiple hidden onChange={(e) => e.target.files && void addFiles(e.target.files)} />
          </div>

          {/* timeline · clips track + text track, CapCut-style */}
          <div className="cc-timeline">
            <div className="cc-track-label">Video</div>
            <div className="cc-track">
              {clips.length === 0 && <button className="cc-track-empty" onClick={() => fileRef.current?.click()}>Import clips to build your timeline →</button>}
              {clips.map((c) => {
                const w = total > 0 ? (clipLen(c) / total) * 100 : 100 / Math.max(1, clips.length)
                return (
                  <button key={c.id} className={`cc-clip${c.id === sel ? ' on' : ''}`} style={{ width: `${w}%` }} onClick={() => { setSel(c.id); seekTo(c) }} title={c.name}>
                    <span className="cc-clip-name">{c.name}</span>
                    <em>{fmtTime(clipLen(c))}</em>
                  </button>
                )
              })}
              {playing && <span className="cc-playhead" style={{ left: `${playhead}%` }} />}
            </div>
            <div className="cc-track-label">Text</div>
            <div className="cc-track cc-track-ov">
              {overlays.length === 0 && <span className="cc-track-hint">No text yet · add a Title or Caption on the right.</span>}
              {overlays.map((o) => {
                const left = total > 0 ? (o.start / total) * 100 : 0
                const w = total > 0 ? ((o.end - o.start) / total) * 100 : 30
                return <button key={o.id} className={`cc-ov${o.id === selOv ? ' on' : ''}`} style={{ left: `${left}%`, width: `${Math.max(8, w)}%` }} onClick={() => setSelOv(o.id)}>{o.text.slice(0, 18) || o.kind}</button>
              })}
            </div>
          </div>
        </div>

        {/* right tools */}
        <aside className="cc-tools">
          {selClip && (
            <div className="cc-panel">
              <div className="cc-tool-h">Trim · {selClip.name}</div>
              <div className="cc-clip-ops">
                <button onClick={() => void splitClip(selClip)}>Split at playhead</button>
                <button onClick={() => moveClip(selClip.id, -1)}>← Move</button>
                <button onClick={() => moveClip(selClip.id, 1)}>Move →</button>
                <button className="danger" onClick={() => delClip(selClip.id)}>Delete</button>
              </div>
              <label className="cc-slider"><span>Start<em>{fmtTime(selClip.inSec)}</em></span>
                <input type="range" min={0} max={selClip.duration} step={0.1} value={selClip.inSec} onChange={(e) => { const val = Math.min(Number(e.target.value), selClip.outSec - 0.2); updateClip(selClip.id, { inSec: val }); const v = vids.current.get(selClip.id); if (v) try { v.currentTime = val } catch { /* */ } }} />
              </label>
              <label className="cc-slider"><span>End<em>{fmtTime(selClip.outSec)}</em></span>
                <input type="range" min={0} max={selClip.duration} step={0.1} value={selClip.outSec} onChange={(e) => { const val = Math.max(Number(e.target.value), selClip.inSec + 0.2); updateClip(selClip.id, { outSec: val }); const v = vids.current.get(selClip.id); if (v) try { v.currentTime = val } catch { /* */ } }} />
              </label>
            </div>
          )}

          <div className="cc-panel">
            <div className="cc-tool-h">Text</div>
            <div className="cc-seg">
              <button onClick={() => addOverlay('title')}>Add title</button>
              <button onClick={() => addOverlay('caption')}>Add caption</button>
            </div>
            {ov && (
              <>
                <input className="cc-input" value={ov.text} onChange={(e) => updateOverlay(ov.id, { text: e.target.value })} placeholder="Text…" />
                <div className="cc-anim">
                  {TEXT_ANIMS.map((a) => (
                    <button key={a.id} className={`cc-anim-b${(ov.anim ?? 'fade') === a.id ? ' on' : ''}`} onClick={() => updateOverlay(ov.id, { anim: a.id as TextAnim })}>{a.label}</button>
                  ))}
                </div>
                <label className="cc-slider"><span>Start<em>{ov.start.toFixed(1)}s</em></span><input type="range" min={0} max={Math.max(1, total)} step={0.1} value={ov.start} onChange={(e) => updateOverlay(ov.id, { start: Math.min(Number(e.target.value), ov.end) })} /></label>
                <label className="cc-slider"><span>End<em>{ov.end.toFixed(1)}s</em></span><input type="range" min={0} max={Math.max(1, total)} step={0.1} value={ov.end} onChange={(e) => updateOverlay(ov.id, { end: Math.max(Number(e.target.value), ov.start) })} /></label>
                <button className="btn tiny ghost" onClick={() => delOverlay(ov.id)}>Delete text</button>
              </>
            )}
          </div>

          <div className="cc-panel">
            <div className="cc-tool-h">Voiceover <span className="ana-badge">ElevenLabs</span>
              <button className="cc-key-t" onClick={() => setVoKeyOpen((v) => !v)}>{getTtsKey() ? 'Key ✓' : 'Add key'}</button>
            </div>
            {voKeyOpen && (
              <>
                <input className="cc-input" type="password" value={voKey} onChange={(e) => setVoKey(e.target.value)} placeholder="sk_… (stays in your browser)" autoComplete="off" />
                <div className="cc-seg"><button onClick={saveVoKey}>Save key</button><a className="cc-link" href="/guide/elevenlabs">Where to find it →</a></div>
              </>
            )}
            <textarea className="cc-input" rows={3} value={voScript} onChange={(e) => setVoScript(e.target.value)} placeholder="Narration · or it fills from your text overlays." />
            <div className="cc-seg">
              <select className="cc-input" value={voiceId} onChange={(e) => setVoiceId(e.target.value)}>{VOICES.map((v) => <option key={v.id} value={v.id}>{v.label}</option>)}</select>
              <button className="btn primary tiny" onClick={() => void makeVoiceover()} disabled={voBusy || !voScript.trim()}>{voBusy ? '…' : 'Generate'}</button>
            </div>
            {voUrl && <div className="vo-result"><audio controls src={voUrl} className="vo-audio" /><button className="btn tiny" onClick={downloadVo}>Download MP3</button></div>}
          </div>

          <p className="muted small">100% local (Canvas + MediaRecorder). Export a <code>.webm</code> importable into Meta / TikTok. Voiceover runs on your own ElevenLabs key.</p>
        </aside>
      </div>
    </div>
  )
}
