// Image editor · local, no upload. Drop an image, pick any social format, fit it
// (cover / contain over a background colour), tune filters (brightness, contrast,
// saturation, grayscale, blur), add a text overlay, and export a PNG at full
// resolution. Canvas only — nothing leaves the browser.
import { useEffect, useRef, useState } from 'react'
import { FORMATS, type FormatId, formatById } from '../../lib/video'

type Fit = 'cover' | 'contain'
interface Filters { brightness: number; contrast: number; saturate: number; grayscale: number; blur: number }
const DEF: Filters = { brightness: 100, contrast: 100, saturate: 100, grayscale: 0, blur: 0 }

export default function ImageEditor() {
  const [img, setImg] = useState<HTMLImageElement | null>(null)
  const [format, setFormat] = useState<FormatId>('square')
  const [fit, setFit] = useState<Fit>('cover')
  const [bg, setBg] = useState('#ffffff')
  const [f, setF] = useState<Filters>(DEF)
  const [text, setText] = useState('')
  const [textColor, setTextColor] = useState('#ffffff')
  const [textSize, setTextSize] = useState(8)   // % of canvas height
  const [textY, setTextY] = useState(88)        // % from top
  const fileRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const fmt = formatById(format)

  const load = (file: File) => {
    if (!file.type.startsWith('image/')) return
    const url = URL.createObjectURL(file)
    const im = new Image()
    im.onload = () => { setImg(im); URL.revokeObjectURL(url) }
    im.src = url
  }

  // draw whenever anything changes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const scale = 720 / Math.max(fmt.w, fmt.h)
    const W = Math.round(fmt.w * scale), H = Math.round(fmt.h * scale)
    canvas.width = W; canvas.height = H
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H)
    if (img) {
      ctx.save()
      ctx.filter = `brightness(${f.brightness}%) contrast(${f.contrast}%) saturate(${f.saturate}%) grayscale(${f.grayscale}%) blur(${f.blur}px)`
      const ir = img.width / img.height, cr = W / H
      let dw = W, dh = H, dx = 0, dy = 0
      const wide = ir > cr
      if (fit === 'cover' ? wide : !wide) { dh = H; dw = H * ir; dx = (W - dw) / 2 }
      else { dw = W; dh = W / ir; dy = (H - dh) / 2 }
      ctx.drawImage(img, dx, dy, dw, dh)
      ctx.restore()
    }
    if (text.trim()) {
      const fs = Math.round(H * textSize / 100)
      ctx.font = `800 ${fs}px 'Outfit', system-ui, sans-serif`
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.lineWidth = Math.max(2, fs * 0.14); ctx.strokeStyle = 'rgba(0,0,0,0.45)'
      ctx.fillStyle = textColor
      const y = H * textY / 100
      ctx.strokeText(text, W / 2, y); ctx.fillText(text, W / 2, y)
    }
  }, [img, fmt, fit, bg, f, text, textColor, textSize, textY])

  const exportPng = () => {
    if (!img && !text.trim()) return
    // re-render at FULL format resolution for a crisp export
    const c = document.createElement('canvas')
    c.width = fmt.w; c.height = fmt.h
    const ctx = c.getContext('2d')!
    ctx.fillStyle = bg; ctx.fillRect(0, 0, fmt.w, fmt.h)
    if (img) {
      ctx.save()
      ctx.filter = `brightness(${f.brightness}%) contrast(${f.contrast}%) saturate(${f.saturate}%) grayscale(${f.grayscale}%) blur(${f.blur}px)`
      const ir = img.width / img.height, cr = fmt.w / fmt.h
      let dw = fmt.w, dh = fmt.h, dx = 0, dy = 0
      const wide = ir > cr
      if (fit === 'cover' ? wide : !wide) { dh = fmt.h; dw = fmt.h * ir; dx = (fmt.w - dw) / 2 }
      else { dw = fmt.w; dh = fmt.w / ir; dy = (fmt.h - dh) / 2 }
      ctx.drawImage(img, dx, dy, dw, dh)
      ctx.restore()
    }
    if (text.trim()) {
      const fs = Math.round(fmt.h * textSize / 100)
      ctx.font = `800 ${fs}px 'Outfit', system-ui, sans-serif`
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
      ctx.lineWidth = Math.max(2, fs * 0.14); ctx.strokeStyle = 'rgba(0,0,0,0.45)'
      ctx.fillStyle = textColor
      ctx.strokeText(text, fmt.w / 2, fmt.h * textY / 100); ctx.fillText(text, fmt.w / 2, fmt.h * textY / 100)
    }
    const a = document.createElement('a')
    a.href = c.toDataURL('image/png')
    a.download = `image-${format}.png`
    a.click()
  }

  return (
    <div className="cc-editor" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const file = e.dataTransfer.files?.[0]; if (file) load(file) }}>
      <div className="cc-main">
        {/* preview */}
        <div className="cc-stage">
          <canvas ref={canvasRef} className="cc-canvas" />
          {!img && (
            <button className="cc-drop" onClick={() => fileRef.current?.click()}>
              <strong>Drop an image or click to upload</strong>
              <span className="muted small">Stays in your browser · export a PNG in any social format.</span>
            </button>
          )}
        </div>

        {/* tools */}
        <aside className="cc-tools">
          <div className="cc-tool-h">Format</div>
          <div className="cc-fmt">
            {FORMATS.map((x) => <button key={x.id} className={format === x.id ? 'on' : ''} onClick={() => setFormat(x.id)} title={x.label}>{x.short}</button>)}
          </div>

          <div className="cc-tool-h">Fit</div>
          <div className="cc-seg">
            <button className={fit === 'cover' ? 'on' : ''} onClick={() => setFit('cover')}>Cover</button>
            <button className={fit === 'contain' ? 'on' : ''} onClick={() => setFit('contain')}>Contain</button>
            <label className="cc-color"><input type="color" value={bg} onChange={(e) => setBg(e.target.value)} /> bg</label>
          </div>

          <div className="cc-tool-h">Adjust</div>
          {([['brightness', 0, 200], ['contrast', 0, 200], ['saturate', 0, 200], ['grayscale', 0, 100], ['blur', 0, 20]] as const).map(([k, min, max]) => (
            <label key={k} className="cc-slider"><span>{k}<em>{f[k]}{k === 'blur' ? 'px' : '%'}</em></span>
              <input type="range" min={min} max={max} value={f[k]} onChange={(e) => setF((s) => ({ ...s, [k]: Number(e.target.value) }))} />
            </label>
          ))}
          <button className="btn tiny ghost cc-reset" onClick={() => setF(DEF)}>Reset adjust</button>

          <div className="cc-tool-h">Text</div>
          <input className="cc-input" value={text} maxLength={60} placeholder="Overlay text…" onChange={(e) => setText(e.target.value)} />
          <div className="cc-seg">
            <label className="cc-color"><input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} /> color</label>
          </div>
          <label className="cc-slider"><span>size<em>{textSize}%</em></span><input type="range" min={3} max={20} value={textSize} onChange={(e) => setTextSize(Number(e.target.value))} /></label>
          <label className="cc-slider"><span>position<em>{textY}%</em></span><input type="range" min={6} max={94} value={textY} onChange={(e) => setTextY(Number(e.target.value))} /></label>

          <div className="cc-actions">
            <button className="btn tiny" onClick={() => fileRef.current?.click()}>{img ? 'Replace image' : 'Upload'}</button>
            <button className="btn primary tiny" onClick={exportPng} disabled={!img && !text.trim()}>Export PNG</button>
          </div>
        </aside>
      </div>
      <input ref={fileRef} type="file" accept="image/*" hidden onChange={(e) => e.target.files?.[0] && load(e.target.files[0])} />
    </div>
  )
}
