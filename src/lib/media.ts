// Local-first media utilities · the public API over the image Web Worker.
//
// compressImage() resizes + re-encodes an image entirely on the user's machine
// (Web Worker + OffscreenCanvas), with a main-thread <canvas> fallback for
// browsers without OffscreenCanvas. Nothing is uploaded.
import type { ImageJob, ImageResult } from '../workers/image.worker'

export interface CompressOpts {
  maxDim?: number     // longest side, default 1600
  quality?: number    // 0..1, default 0.82
  mime?: string       // default 'image/webp'
}
export interface Compressed {
  blob: Blob
  width: number
  height: number
  before: number      // original bytes
  after: number       // compressed bytes
  ratio: number       // after/before (0..1)
  mime: string
}

// ---- worker singleton (lazy) ----------------------------------------------
let worker: Worker | null = null
let seq = 0
const pending = new Map<number, (r: ImageResult) => void>()

function supportsWorker(): boolean {
  try { return typeof Worker !== 'undefined' && typeof OffscreenCanvas !== 'undefined' && typeof createImageBitmap !== 'undefined' } catch { return false }
}

function getWorker(): Worker {
  if (!worker) {
    worker = new Worker(new URL('../workers/image.worker.ts', import.meta.url), { type: 'module' })
    worker.onmessage = (e: MessageEvent<ImageResult>) => {
      const cb = pending.get(e.data.id)
      if (cb) { pending.delete(e.data.id); cb(e.data) }
    }
  }
  return worker
}

function runInWorker(job: ImageJob): Promise<ImageResult> {
  return new Promise((resolve) => {
    pending.set(job.id, resolve)
    getWorker().postMessage(job)
    // safety timeout so a stuck worker never hangs the UI
    setTimeout(() => { if (pending.has(job.id)) { pending.delete(job.id); resolve({ id: job.id, ok: false, error: 'timeout' }) } }, 20000)
  })
}

// main-thread fallback (older browsers) · same output shape
async function runOnMainThread(blob: Blob, maxDim: number, quality: number, mime: string): Promise<ImageResult> {
  const url = URL.createObjectURL(blob)
  try {
    const img = await new Promise<HTMLImageElement>((res, rej) => {
      const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error('decode')); i.src = url
    })
    const scale = Math.min(1, maxDim / Math.max(img.naturalWidth, img.naturalHeight))
    const w = Math.max(1, Math.round(img.naturalWidth * scale))
    const h = Math.max(1, Math.round(img.naturalHeight * scale))
    const canvas = document.createElement('canvas')
    canvas.width = w; canvas.height = h
    const ctx = canvas.getContext('2d')
    if (!ctx) return { id: 0, ok: false, error: 'no 2d context' }
    ctx.drawImage(img, 0, 0, w, h)
    const out = await new Promise<Blob | null>((res) => canvas.toBlob(res, mime, quality))
    if (!out) return { id: 0, ok: false, error: 'encode' }
    return { id: 0, ok: true, blob: out, width: w, height: h }
  } catch (e) {
    return { id: 0, ok: false, error: String((e as Error)?.message || e) }
  } finally {
    URL.revokeObjectURL(url)
  }
}

/** Compress + resize an image locally. Throws only on total failure. */
export async function compressImage(file: Blob, opts: CompressOpts = {}): Promise<Compressed> {
  const maxDim = opts.maxDim ?? 1600
  const quality = opts.quality ?? 0.82
  const mime = opts.mime ?? 'image/webp'
  const before = file.size

  const r = supportsWorker()
    ? await runInWorker({ id: ++seq, blob: file, maxDim, quality, mime })
    : await runOnMainThread(file, maxDim, quality, mime)

  if (!r.ok || !r.blob) throw new Error(r.error || 'compress_failed')
  const after = r.blob.size
  return { blob: r.blob, width: r.width ?? 0, height: r.height ?? 0, before, after, ratio: before ? after / before : 1, mime }
}

/** Human-readable byte size. */
export function humanSize(n: number): string {
  if (n < 1024) return `${n} o`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} Ko`
  return `${(n / (1024 * 1024)).toFixed(2)} Mo`
}
