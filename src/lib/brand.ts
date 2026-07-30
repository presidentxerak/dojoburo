// Branding engine · 100% local, deterministic, zero server.
//
// Generates a full brand identity (palette + typography + SVG logo) from a few
// controls, and persists a central Brand Kit in IndexedDB. Other studios
// (website, campaign, video) read this kit so the brand stays consistent
// everywhere. No API calls · colour math + SVG string building in the browser.
import { idbGet, idbSet } from './idb'

// ---- types -----------------------------------------------------------------
export type PaletteScheme = 'mono' | 'complementary' | 'analogous' | 'triadic'
export type MarkShape = 'monogram' | 'arch' | 'orbit' | 'spark' | 'block' | 'wave' | 'ring' | 'bolt' | 'petal'
export type LogoLayout = 'mark-left' | 'mark-top' | 'mark-only' | 'text-only'
/** Backdrop shape the mark sits on (the "container" behind the symbol). */
export type BgShape = 'squircle' | 'circle' | 'square' | 'hex' | 'shield' | 'none'

export interface Palette { primary: string; secondary: string; accent: string; ink: string; bg: string }
export interface FontPair { id: string; label: string; heading: string; body: string }

export interface BrandKit {
  name: string
  tagline: string
  hue: number
  scheme: PaletteScheme
  palette: Palette
  fontId: string
  /** Canonical Google-font families · shared with the Website & Marketing
   *  studios. When set they win over the fontId preset everywhere. */
  headingFont?: string
  bodyFont?: string
  shape: MarkShape
  /** backdrop shape behind the mark (rounded square by default). */
  bgShape?: BgShape
  layout: LogoLayout
  /** optional imported logo (data URL) · overrides the generated mark when set */
  logoDataUrl?: string
  updatedAt: number
}

// ---- colour math -----------------------------------------------------------
function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360; s /= 100; l /= 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  const to = (x: number) => Math.round(255 * x).toString(16).padStart(2, '0')
  return `#${to(f(0))}${to(f(8))}${to(f(4))}`
}

/** Build a 5-colour brand palette from a base hue + harmony scheme. */
export function generatePalette(hue: number, scheme: PaletteScheme): Palette {
  const h2 =
    scheme === 'complementary' ? hue + 180 :
    scheme === 'analogous' ? hue + 32 :
    scheme === 'triadic' ? hue + 120 : hue + 12
  const h3 =
    scheme === 'complementary' ? hue + 200 :
    scheme === 'analogous' ? hue - 32 :
    scheme === 'triadic' ? hue + 240 : hue - 12
  return {
    primary: hslToHex(hue, 68, 52),
    secondary: hslToHex(h2, 60, 58),
    accent: hslToHex(h3, 78, 60),
    ink: hslToHex(hue, 24, 14),
    bg: hslToHex(hue, 34, 97),
  }
}

// ---- typography · font stacks (no external load, CSP-safe) -----------------
export const FONT_PAIRS: FontPair[] = [
  { id: 'modern', label: 'Modern', heading: '"Outfit", system-ui, sans-serif', body: '"Outfit", system-ui, sans-serif' },
  { id: 'editorial', label: 'Editorial', heading: 'Georgia, "Times New Roman", serif', body: '"Outfit", system-ui, sans-serif' },
  { id: 'grotesk', label: 'Grotesque', heading: '"Helvetica Neue", Arial, sans-serif', body: 'Georgia, serif' },
  { id: 'mono', label: 'Technical', heading: '"Silkscreen", "Courier New", monospace', body: '"Outfit", system-ui, sans-serif' },
  { id: 'classic', label: 'Classic', heading: '"Palatino Linotype", "Book Antiqua", serif', body: 'Georgia, serif' },
  { id: 'geo', label: 'Geometric', heading: '"Outfit", sans-serif', body: '"Helvetica Neue", Arial, sans-serif' },
]
export const fontPair = (id: string): FontPair => FONT_PAIRS.find((f) => f.id === id) ?? FONT_PAIRS[0]

export const SCHEMES: { id: PaletteScheme; label: string }[] = [
  { id: 'mono', label: 'Monochrome' }, { id: 'analogous', label: 'Analogous' },
  { id: 'complementary', label: 'Complementary' }, { id: 'triadic', label: 'Triadic' },
]
export const SHAPES: { id: MarkShape; label: string }[] = [
  { id: 'monogram', label: 'Monogram' }, { id: 'arch', label: 'Arch' }, { id: 'orbit', label: 'Orbit' },
  { id: 'spark', label: 'Spark' }, { id: 'block', label: 'Blocks' }, { id: 'wave', label: 'Wave' },
  { id: 'ring', label: 'Ring' }, { id: 'bolt', label: 'Bolt' }, { id: 'petal', label: 'Petal' },
]
export const BG_SHAPES: { id: BgShape; label: string }[] = [
  { id: 'squircle', label: 'Rounded' }, { id: 'circle', label: 'Circle' }, { id: 'square', label: 'Square' },
  { id: 'hex', label: 'Hexagon' }, { id: 'shield', label: 'Shield' }, { id: 'none', label: 'None' },
]

// ---- logo (SVG) ------------------------------------------------------------
export function initials(name: string): string {
  const w = name.trim().replace(/[^\p{L}\p{N} ]/gu, '').split(/\s+/).filter(Boolean)
  if (!w.length) return 'D'
  return (w.length === 1 ? w[0].slice(0, 2) : w[0][0] + w[1][0]).toUpperCase()
}

// ---- logo colour + shape helpers -------------------------------------------
// Shift a hex colour lighter/darker (amt in -255..255) for gradient depth.
function shade(hex: string, amt: number): string {
  const m = /^#?([0-9a-fA-F]{6})$/.exec(hex)
  if (!m) return hex
  const n = parseInt(m[1], 16)
  const cl = (x: number) => Math.max(0, Math.min(255, x))
  const r = cl((n >> 16) + amt), g = cl(((n >> 8) & 255) + amt), b = cl((n & 255) + amt)
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`
}
function hashId(s: string): string { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return 'lg' + (h >>> 0).toString(36) }

/** Style-aware render colours so colour / mono / inverted always keep contrast.
 *  plate = the backdrop fill, fg = the symbol on it, accent = the secondary. */
function renderColors(p: Palette, style: LogoStyle): { plate: string; fg: string; accent: string } {
  if (style === 'mono') return { plate: '#14161f', fg: '#ffffff', accent: '#ffffff' }
  if (style === 'inverted') return { plate: '#ffffff', fg: p.ink, accent: p.primary }
  return { plate: p.primary, fg: '#ffffff', accent: p.accent }
}

/** The backdrop container the mark sits on (100×100), filled with `fill`. */
function plateEl(bg: BgShape, fill: string): string {
  switch (bg) {
    case 'circle': return `<circle cx="50" cy="50" r="47" fill="${fill}"/>`
    case 'square': return `<rect x="5" y="5" width="90" height="90" rx="10" fill="${fill}"/>`
    case 'hex': return `<path d="M50 3 L91 26.5 V73.5 L50 97 L9 73.5 V26.5 Z" fill="${fill}"/>`
    case 'shield': return `<path d="M50 4 L88 15 V50 Q88 82 50 96 Q12 82 12 50 V15 Z" fill="${fill}"/>`
    case 'squircle': default: return `<rect x="6" y="6" width="88" height="88" rx="26" fill="${fill}"/>`
  }
}

/** The symbol glyph, centred in the 100×100 canvas, drawn in fg (+ accent). */
function glyph(shape: MarkShape, fg: string, accent: string, name: string): string {
  const S = 'stroke-linecap="round" stroke-linejoin="round"'
  switch (shape) {
    case 'arch':
      return `<path d="M32 72 V48 a18 18 0 0 1 36 0 V72" fill="none" stroke="${fg}" stroke-width="10" ${S}/><rect x="46" y="56" width="8" height="16" rx="4" fill="${accent}"/>`
    case 'orbit':
      return `<ellipse cx="50" cy="50" rx="34" ry="14" fill="none" stroke="${fg}" stroke-width="6" transform="rotate(-28 50 50)"/><ellipse cx="50" cy="50" rx="34" ry="14" fill="none" stroke="${accent}" stroke-width="6" transform="rotate(28 50 50)"/><circle cx="50" cy="50" r="9" fill="${fg}"/>`
    case 'spark':
      return `<path d="M50 16 C54 38 62 46 84 50 C62 54 54 62 50 84 C46 62 38 54 16 50 C38 46 46 38 50 16 Z" fill="${fg}"/><circle cx="50" cy="50" r="6" fill="${accent}"/>`
    case 'block':
      return `<rect x="22" y="22" width="24" height="24" rx="6" fill="${fg}"/><rect x="54" y="22" width="24" height="24" rx="6" fill="${accent}"/><rect x="22" y="54" width="24" height="24" rx="6" fill="${accent}"/><rect x="54" y="54" width="24" height="24" rx="6" fill="${fg}"/>`
    case 'wave':
      return `<path d="M20 58 q15-20 30 0 t30 0" fill="none" stroke="${fg}" stroke-width="8" ${S}/><path d="M20 42 q15-20 30 0 t30 0" fill="none" stroke="${accent}" stroke-width="8" ${S} opacity="0.85"/>`
    case 'ring':
      return `<circle cx="50" cy="50" r="26" fill="none" stroke="${fg}" stroke-width="9" stroke-dasharray="118 40" transform="rotate(-90 50 50)"/><circle cx="50" cy="24" r="7" fill="${accent}"/>`
    case 'bolt':
      return `<path d="M56 16 L30 54 H48 L42 84 L72 42 H52 Z" fill="${fg}"/>`
    case 'petal':
      return `<path d="M50 20 C66 30 66 54 50 80 C34 54 34 30 50 20 Z" fill="${fg}"/><path d="M50 44 C58 50 58 62 50 78 C42 62 42 50 50 44 Z" fill="${accent}" opacity="0.9"/>`
    case 'monogram':
    default:
      return `<text x="50" y="51" dy="0.02em" text-anchor="middle" font-family="Outfit, system-ui, sans-serif" font-weight="800" font-size="46" letter-spacing="-1.5" fill="${fg}">${initials(name)}</text>`
  }
}

/** The icon mark (a 100×100 SVG), backdrop + symbol, coloured by style. */
function markSvg(shape: MarkShape, p: Palette, name: string, bg: BgShape, style: LogoStyle): string {
  const c = renderColors(p, style)
  const noPlate = bg === 'none'
  // subtle top-lit gradient on a colour plate for depth (premium feel)
  const useGrad = !noPlate && style === 'color'
  const gid = hashId(c.plate + shape + bg)
  const defs = useGrad ? `<defs><linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${shade(c.plate, 24)}"/><stop offset="1" stop-color="${shade(c.plate, -30)}"/></linearGradient></defs>` : ''
  const plate = noPlate ? '' : plateEl(bg, useGrad ? `url(#${gid})` : c.plate)
  // with no plate the symbol is drawn in the brand colour itself
  const fg = noPlate ? (style === 'inverted' ? '#ffffff' : style === 'mono' ? '#14161f' : p.primary) : c.fg
  const accent = noPlate ? (style === 'color' ? p.accent : fg) : c.accent
  return `${defs}${plate}${glyph(shape, fg, accent, name)}`
}
const bgOf = (kit: BrandKit): BgShape => kit.bgShape ?? 'squircle'
const textCol = (p: Palette, style: LogoStyle): string => style === 'inverted' ? '#ffffff' : style === 'mono' ? '#14161f' : p.ink

export type LogoStyle = 'color' | 'mono' | 'inverted'

/** A full logo SVG string for a given layout + pixel size + colour style. */
export function logoSvg(kit: BrandKit, layout: LogoLayout = kit.layout, size = 320, style: LogoStyle = 'color'): string {
  const { name, palette, fontId } = kit
  const f = fontPair(fontId)
  const safeName = name.trim() || 'Brand'
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const wordFont = f.heading.replace(/"/g, "'")
  const bg = bgOf(kit)
  const tc = textCol(palette, style)
  const mark = markSvg(kit.shape, palette, name, bg, style)

  if (layout === 'mark-only') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">${mark}</svg>`
  }
  if (layout === 'text-only') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="${size}" height="${size * 0.3}"><text x="200" y="60" dy="0.35em" text-anchor="middle" font-family="${wordFont}" font-weight="800" font-size="46" fill="${tc}">${esc(safeName)}</text></svg>`
  }
  if (layout === 'mark-top') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 210" width="${size}" height="${size * 0.87}"><g transform="translate(70 6)">${mark}</g><text x="120" y="156" text-anchor="middle" font-family="${wordFont}" font-weight="800" font-size="34" fill="${tc}">${esc(safeName)}</text><text x="120" y="184" text-anchor="middle" font-family="${f.body.replace(/"/g, "'")}" font-size="14" fill="${tc}" opacity="0.72">${esc(kit.tagline)}</text></svg>`
  }
  // mark-left (default)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 120" width="${size}" height="${size * 0.27}"><g transform="translate(8 10)">${mark}</g><text x="126" y="52" font-family="${wordFont}" font-weight="800" font-size="38" fill="${tc}">${esc(safeName)}</text><text x="128" y="80" font-family="${f.body.replace(/"/g, "'")}" font-size="15" fill="${tc}" opacity="0.72">${esc(kit.tagline)}</text></svg>`
}

/** A rounded-square app icon: the mark on a solid tile (always plated). */
export function appIconSvg(kit: BrandKit, size = 256, style: LogoStyle = 'color'): string {
  const bg: BgShape = bgOf(kit) === 'none' ? 'squircle' : bgOf(kit)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">${markSvg(kit.shape, kit.palette, kit.name, bg, style)}</svg>`
}

export interface Lockup { id: string; label: string; svg: string; dark?: boolean }
/** The full logo pack (Symbol / Wordmark / Lockups / Favicon / App Icon). */
export function logoLockups(kit: BrandKit, style: LogoStyle = 'color'): Lockup[] {
  const dark = style === 'inverted'
  return [
    { id: 'symbol', label: 'Symbol Mark', svg: logoSvg(kit, 'mark-only', 300, style), dark },
    { id: 'wordmark', label: 'Wordmark', svg: logoSvg(kit, 'text-only', 320, style), dark },
    { id: 'lockup-h', label: 'Lockup H', svg: logoSvg(kit, 'mark-left', 360, style), dark },
    { id: 'lockup-v', label: 'Lockup V', svg: logoSvg(kit, 'mark-top', 300, style), dark },
    { id: 'favicon', label: 'Favicon', svg: logoSvg(kit, 'mark-only', 96, style), dark },
    { id: 'app-icon', label: 'App Icon', svg: appIconSvg(kit, 256, style), dark },
  ]
}

// ---- defaults + persistence ------------------------------------------------
export function defaultKit(name = 'My brand'): BrandKit {
  const hue = 262, scheme: PaletteScheme = 'analogous'
  return { name, tagline: 'Your tagline here', hue, scheme, palette: generatePalette(hue, scheme), fontId: 'modern', shape: 'monogram', bgShape: 'squircle', layout: 'mark-left', updatedAt: Date.now() }
}

const kitKey = (dojoId: string) => `brand.${dojoId || 'default'}`

export async function loadBrandKit(dojoId: string): Promise<BrandKit | null> {
  return (await idbGet<BrandKit>('projects', kitKey(dojoId))) ?? null
}
export async function saveBrandKit(dojoId: string, kit: BrandKit): Promise<void> {
  await idbSet('projects', kitKey(dojoId), { ...kit, updatedAt: Date.now() })
}

/** The Brand Kit as CSS custom properties · how other modules consume it. */
export function kitCss(kit: BrandKit): string {
  const p = kit.palette
  const f = fontPair(kit.fontId)
  const heading = kit.headingFont ? `"${kit.headingFont}", ${f.heading}` : f.heading
  const body = kit.bodyFont ? `"${kit.bodyFont}", ${f.body}` : f.body
  return `:root{\n  --brand-primary:${p.primary};\n  --brand-secondary:${p.secondary};\n  --brand-accent:${p.accent};\n  --brand-ink:${p.ink};\n  --brand-bg:${p.bg};\n  --brand-heading:${heading};\n  --brand-body:${body};\n}`
}
