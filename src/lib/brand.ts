// Branding engine · 100% local, deterministic, zero server.
//
// Generates a full brand identity (palette + typography + SVG logo) from a few
// controls, and persists a central Brand Kit in IndexedDB. Other studios
// (website, campaign, video) read this kit so the brand stays consistent
// everywhere. No API calls · colour math + SVG string building in the browser.
import { idbGet, idbSet } from './idb'

// ---- types -----------------------------------------------------------------
export type PaletteScheme = 'mono' | 'complementary' | 'analogous' | 'triadic'
export type MarkShape = 'monogram' | 'arch' | 'orbit' | 'spark' | 'block' | 'wave'
export type LogoLayout = 'mark-left' | 'mark-top' | 'mark-only' | 'text-only'

export interface Palette { primary: string; secondary: string; accent: string; ink: string; bg: string }
export interface FontPair { id: string; label: string; heading: string; body: string }

export interface BrandKit {
  name: string
  tagline: string
  hue: number
  scheme: PaletteScheme
  palette: Palette
  fontId: string
  shape: MarkShape
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
  { id: 'spark', label: 'Spark' }, { id: 'block', label: 'Block' }, { id: 'wave', label: 'Wave' },
]

// ---- logo (SVG) ------------------------------------------------------------
export function initials(name: string): string {
  const w = name.trim().replace(/[^\p{L}\p{N} ]/gu, '').split(/\s+/).filter(Boolean)
  if (!w.length) return 'D'
  return (w.length === 1 ? w[0].slice(0, 2) : w[0][0] + w[1][0]).toUpperCase()
}

/** The icon mark (a 100×100 SVG group), coloured from the palette. */
function markSvg(shape: MarkShape, p: Palette, name: string): string {
  const c1 = p.primary, c2 = p.accent, ink = p.ink
  switch (shape) {
    case 'arch':
      return `<rect x="14" y="14" width="72" height="72" rx="16" fill="${c1}"/><path d="M32 74 V46 a18 18 0 0 1 36 0 V74 h-12 V46 a6 6 0 0 0-12 0 V74 Z" fill="#fff"/>`
    case 'orbit':
      return `<circle cx="50" cy="50" r="12" fill="${c1}"/><ellipse cx="50" cy="50" rx="38" ry="16" fill="none" stroke="${c2}" stroke-width="6"/><ellipse cx="50" cy="50" rx="16" ry="38" fill="none" stroke="${ink}" stroke-width="6" opacity="0.85"/>`
    case 'spark':
      return `<path d="M50 8 L60 40 L92 50 L60 60 L50 92 L40 60 L8 50 L40 40 Z" fill="${c1}"/><circle cx="50" cy="50" r="9" fill="${c2}"/>`
    case 'block':
      return `<rect x="12" y="12" width="34" height="34" rx="7" fill="${c1}"/><rect x="54" y="12" width="34" height="34" rx="7" fill="${c2}"/><rect x="12" y="54" width="34" height="34" rx="7" fill="${ink}"/><rect x="54" y="54" width="34" height="34" rx="7" fill="${c1}" opacity="0.6"/>`
    case 'wave':
      return `<rect x="12" y="12" width="76" height="76" rx="18" fill="${c1}"/><path d="M20 62 q15-24 30 0 t30 0" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/><path d="M20 44 q15-24 30 0 t30 0" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity="0.55"/>`
    case 'monogram':
    default:
      return `<rect x="10" y="10" width="80" height="80" rx="20" fill="${c1}"/><text x="50" y="50" dy="0.35em" text-anchor="middle" font-family="Outfit, sans-serif" font-weight="800" font-size="44" fill="#fff">${initials(name)}</text>`
  }
}

/** A full logo SVG string for a given layout + pixel size. */
export function logoSvg(kit: BrandKit, layout: LogoLayout = kit.layout, size = 320): string {
  const { name, palette, fontId } = kit
  const f = fontPair(fontId)
  const safeName = name.trim() || 'Brand'
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  const wordFont = f.heading.replace(/"/g, "'")

  if (layout === 'mark-only') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="${size}" height="${size}">${markSvg(kit.shape, palette, name)}</svg>`
  }
  if (layout === 'text-only') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 120" width="${size}" height="${size * 0.3}"><text x="200" y="60" dy="0.35em" text-anchor="middle" font-family="${wordFont}" font-weight="800" font-size="46" fill="${palette.ink}">${esc(safeName)}</text></svg>`
  }
  if (layout === 'mark-top') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 200" width="${size}" height="${size * 0.83}"><g transform="translate(70 8) scale(1)">${markSvg(kit.shape, palette, name)}</g><text x="120" y="150" text-anchor="middle" font-family="${wordFont}" font-weight="800" font-size="34" fill="${palette.ink}">${esc(safeName)}</text><text x="120" y="178" text-anchor="middle" font-family="${f.body.replace(/"/g, "'")}" font-size="14" fill="${palette.ink}" opacity="0.7">${esc(kit.tagline)}</text></svg>`
  }
  // mark-left (default)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 120" width="${size}" height="${size * 0.27}"><g transform="translate(6 10) scale(1)">${markSvg(kit.shape, palette, name)}</g><text x="120" y="52" font-family="${wordFont}" font-weight="800" font-size="38" fill="${palette.ink}">${esc(safeName)}</text><text x="122" y="80" font-family="${f.body.replace(/"/g, "'")}" font-size="15" fill="${palette.ink}" opacity="0.7">${esc(kit.tagline)}</text></svg>`
}

// ---- defaults + persistence ------------------------------------------------
export function defaultKit(name = 'My brand'): BrandKit {
  const hue = 262, scheme: PaletteScheme = 'analogous'
  return { name, tagline: 'Your tagline here', hue, scheme, palette: generatePalette(hue, scheme), fontId: 'modern', shape: 'monogram', layout: 'mark-left', updatedAt: Date.now() }
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
  return `:root{\n  --brand-primary:${p.primary};\n  --brand-secondary:${p.secondary};\n  --brand-accent:${p.accent};\n  --brand-ink:${p.ink};\n  --brand-bg:${p.bg};\n  --brand-heading:${f.heading};\n  --brand-body:${f.body};\n}`
}
