// Local-first image processing · runs OFF the main thread.
//
// Compress + resize an image entirely in the browser using OffscreenCanvas.
// The bytes never leave the machine — this is the local-first engine in action.
// The wrapper (src/lib/media.ts) falls back to a main-thread canvas when a
// browser lacks OffscreenCanvas.

export interface ImageJob {
  id: number
  blob: Blob
  maxDim: number      // longest side clamp (px)
  quality: number     // 0..1 for lossy encoders
  mime: string        // 'image/webp' | 'image/jpeg' | 'image/png'
}
export interface ImageResult {
  id: number
  ok: boolean
  blob?: Blob
  width?: number
  height?: number
  error?: string
}

self.onmessage = async (e: MessageEvent<ImageJob>) => {
  const { id, blob, maxDim, quality, mime } = e.data
  try {
    const bmp = await createImageBitmap(blob)
    const scale = Math.min(1, maxDim / Math.max(bmp.width, bmp.height))
    const w = Math.max(1, Math.round(bmp.width * scale))
    const h = Math.max(1, Math.round(bmp.height * scale))
    const canvas = new OffscreenCanvas(w, h)
    const ctx = canvas.getContext('2d')
    if (!ctx) throw new Error('no 2d context')
    ctx.drawImage(bmp, 0, 0, w, h)
    bmp.close()
    const out = await canvas.convertToBlob({ type: mime, quality })
    const res: ImageResult = { id, ok: true, blob: out, width: w, height: h }
    ;(self as unknown as Worker).postMessage(res)
  } catch (err) {
    const res: ImageResult = { id, ok: false, error: String((err as Error)?.message || err) }
    ;(self as unknown as Worker).postMessage(res)
  }
}
