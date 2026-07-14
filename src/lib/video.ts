// Video engine · 100% local, native browser APIs only (Canvas + MediaRecorder +
// Web Audio). No ffmpeg.wasm (it needs cross-origin isolation / SharedArrayBuffer
// which would break the Privy/Stripe embeds), no external deps, no upload. The
// user's clips live in the browser; export renders the timeline to a canvas and
// records it to a .webm file locally. Overlays are styled with the Brand Kit.
import { idbGet, idbSet, idbDel } from './idb'
import { type BrandKit, defaultKit } from './brand'

export type FormatId = 'reel' | 'portrait' | 'square' | 'wide' | 'link' | 'pin'
export interface VFormat { id: FormatId; label: string; short: string; w: number; h: number }
// Every common social format. Ratio drives the canvas; the label names the
// platforms it fits so a user picks by destination, CapCut-style.
export const FORMATS: VFormat[] = [
  { id: 'reel', label: 'Reels · TikTok · Shorts · Story 9:16', short: '9:16', w: 1080, h: 1920 },
  { id: 'portrait', label: 'Instagram feed 4:5', short: '4:5', w: 1080, h: 1350 },
  { id: 'square', label: 'Square 1:1', short: '1:1', w: 1080, h: 1080 },
  { id: 'wide', label: 'YouTube · Landscape 16:9', short: '16:9', w: 1920, h: 1080 },
  { id: 'link', label: 'Link · FB / X card 1.91:1', short: '1.91:1', w: 1200, h: 628 },
  { id: 'pin', label: 'Pinterest 2:3', short: '2:3', w: 1000, h: 1500 },
]
export const formatById = (id: FormatId): VFormat => FORMATS.find((f) => f.id === id) ?? FORMATS[0]

// The canvas we render/record at · the format aspect, scaled so the long side
// is <= 720px (smooth realtime capture; still crisp for social).
export function canvasSize(fmt: VFormat): { w: number; h: number } {
  const scale = 720 / Math.max(fmt.w, fmt.h)
  return { w: Math.round(fmt.w * scale), h: Math.round(fmt.h * scale) }
}

export interface Clip { id: string; name: string; inSec: number; outSec: number; duration: number }
export type OverlayKind = 'title' | 'caption'
export interface Overlay { id: string; kind: OverlayKind; text: string; start: number; end: number }
export interface VideoProject { format: FormatId; clips: Clip[]; overlays: Overlay[]; updatedAt: number }

export const uid = (p = 'x') => `${p}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`
export const clipLen = (c: Clip) => Math.max(0, c.outSec - c.inSec)
export const totalLen = (clips: Clip[]) => clips.reduce((n, c) => n + clipLen(c), 0)
export function fmtTime(s: number): string {
  s = Math.max(0, s); const m = Math.floor(s / 60); const r = Math.floor(s % 60)
  return `${m}:${r.toString().padStart(2, '0')}`
}

// ---- canvas drawing --------------------------------------------------------
/** Draw a video frame covering the whole canvas (object-fit: cover). */
export function drawCover(ctx: CanvasRenderingContext2D, v: HTMLVideoElement, W: number, H: number): void {
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H)
  const vw = v.videoWidth || 16, vh = v.videoHeight || 9
  const scale = Math.max(W / vw, H / vh)
  const dw = vw * scale, dh = vh * scale
  ctx.drawImage(v, (W - dw) / 2, (H - dh) / 2, dw, dh)
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxW: number): string[] {
  const words = text.split(/\s+/); const lines: string[] = []; let cur = ''
  for (const w of words) {
    const t = (cur + ' ' + w).trim()
    if (ctx.measureText(t).width > maxW && cur) { lines.push(cur); cur = w } else cur = t
  }
  if (cur) lines.push(cur)
  return lines
}

/** Draw a brand-styled text overlay (title = big centered; caption = lower bar). */
export function drawOverlay(ctx: CanvasRenderingContext2D, W: number, H: number, o: Overlay, kit: BrandKit): void {
  const heading = kit.name ? 'Outfit, sans-serif' : 'sans-serif'
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'
  if (o.kind === 'title') {
    const fs = Math.round(W * 0.085)
    ctx.font = `800 ${fs}px ${heading}`
    const lines = wrapLines(ctx, o.text, W * 0.86)
    const totalH = lines.length * fs * 1.12
    let y = H * 0.5 - totalH / 2 + fs / 2
    for (const l of lines) {
      ctx.lineWidth = fs * 0.14; ctx.strokeStyle = 'rgba(0,0,0,0.45)'; ctx.strokeText(l, W / 2, y)
      ctx.fillStyle = '#fff'; ctx.fillText(l, W / 2, y)
      y += fs * 1.12
    }
  } else {
    const fs = Math.round(W * 0.055)
    ctx.font = `700 ${fs}px ${heading}`
    const lines = wrapLines(ctx, o.text, W * 0.9)
    const padY = fs * 0.5
    const barH = lines.length * fs * 1.15 + padY * 2
    const top = H - barH - H * 0.06
    ctx.fillStyle = kit.palette.primary + 'e6'
    roundRect(ctx, W * 0.05, top, W * 0.9, barH, fs * 0.35); ctx.fill()
    ctx.fillStyle = '#fff'
    let y = top + padY + fs / 2 + fs * 0.15
    for (const l of lines) { ctx.fillText(l, W / 2, y); y += fs * 1.15 }
  }
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath()
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath()
}

// ---- persistence (project meta + clip blobs, all local) --------------------
const projKey = (d: string) => `video.${d || 'default'}`
export async function loadProject(dojoId: string): Promise<VideoProject | null> {
  return (await idbGet<VideoProject>('projects', projKey(dojoId))) ?? null
}
export async function saveProject(dojoId: string, p: VideoProject): Promise<void> {
  await idbSet('projects', projKey(dojoId), { ...p, updatedAt: Date.now() })
}
export async function putClipBlob(id: string, blob: Blob): Promise<void> { await idbSet('assets', `clip.${id}`, blob) }
export async function getClipBlob(id: string): Promise<Blob | undefined> { return idbGet<Blob>('assets', `clip.${id}`) }
export async function delClipBlob(id: string): Promise<void> { await idbDel('assets', `clip.${id}`) }

export async function videoBrand(dojoId: string, name: string): Promise<BrandKit> {
  return (await idbGet<BrandKit>('projects', `brand.${dojoId || 'default'}`)) ?? defaultKit(name)
}

export function pickExportMime(): string | null {
  const cands = ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm']
  if (typeof MediaRecorder === 'undefined') return null
  return cands.find((m) => { try { return MediaRecorder.isTypeSupported(m) } catch { return false } }) ?? null
}
