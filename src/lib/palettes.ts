// Colour palettes for the Website studio · a curated set of trending 5-colour
// schemes (Coolors-style) plus a live generator with per-swatch locking.
// A palette maps onto the Brand Kit (primary / secondary / accent / ink / bg)
// by luminance, so applying one instantly re-themes the site preview & export.
import type { Palette } from './brand'

export interface NamedPalette { name: string; colors: string[] }

// ~48 trending palettes (5 colours each). Hand-picked to cover warm, cool,
// pastel, dark and high-contrast moods · same spirit as the Coolors trending grid.
export const PRESET_PALETTES: NamedPalette[] = [
  { name: 'Cherry Rose', colors: ['#A63446', '#FBFEF9', '#0C6291', '#000004', '#7E1946'] },
  { name: 'Fiery Ocean', colors: ['#B23A48', '#FCB9B2', '#FED0BB', '#1B4965', '#5FA8D3'] },
  { name: 'Summer Sunset', colors: ['#F94144', '#F3722C', '#F8961E', '#F9C74F', '#90BE6D'] },
  { name: 'Ocean Blue', colors: ['#003049', '#00509D', '#0077B6', '#48CAE4', '#CAF0F8'] },
  { name: 'Fresh Greens', colors: ['#081C15', '#1B4332', '#2D6A4F', '#40916C', '#95D5B2'] },
  { name: 'Sunny Beach', colors: ['#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51'] },
  { name: 'Berry Smoothie', colors: ['#390099', '#9E0059', '#FF0054', '#FF5400', '#FFBD00'] },
  { name: 'Purple Rain', colors: ['#10002B', '#3C096C', '#7B2CBF', '#C77DFF', '#E0AAFF'] },
  { name: 'Warm Autumn', colors: ['#582F0E', '#7F4F24', '#936639', '#B08968', '#DDB892'] },
  { name: 'Midnight Blue', colors: ['#03045E', '#023E8A', '#0077B6', '#00B4D8', '#90E0EF'] },
  { name: 'Coral Reef', colors: ['#FF6B6B', '#FFE66D', '#4ECDC4', '#1A535C', '#F7FFF7'] },
  { name: 'Mono Slate', colors: ['#212529', '#495057', '#6C757D', '#ADB5BD', '#F8F9FA'] },
  { name: 'Rose Gold', colors: ['#3D0814', '#7A1F3D', '#C9184A', '#FF758F', '#FFCCD5'] },
  { name: 'Forest Sage', colors: ['#2C3639', '#3F4E4F', '#A27B5C', '#DCD7C9', '#F5F5F5'] },
  { name: 'Sunset Gradient', colors: ['#03071E', '#370617', '#9D0208', '#DC2F02', '#FFBA08'] },
  { name: 'Cool Mint', colors: ['#004B23', '#006400', '#38B000', '#70E000', '#CCFF33'] },
  { name: 'Lavender Fields', colors: ['#231942', '#5E548E', '#9F86C0', '#BE95C4', '#E0B1CB'] },
  { name: 'Peachy Keen', colors: ['#5F0F40', '#9A031E', '#FB8B24', '#E36414', '#0F4C5C'] },
  { name: 'Nordic Ice', colors: ['#012A4A', '#2C7DA0', '#61A5C2', '#A9D6E5', '#F7F9FB'] },
  { name: 'Bold Berry', colors: ['#240046', '#5A189A', '#9D4EDD', '#FF9E00', '#FFBF69'] },
  { name: 'Terracotta', colors: ['#463F3A', '#8A817C', '#BCB8B1', '#E0AFA0', '#F4F3EE'] },
  { name: 'Electric Pop', colors: ['#F72585', '#7209B7', '#3A0CA3', '#4361EE', '#4CC9F0'] },
  { name: 'Golden Hour', colors: ['#432818', '#99582A', '#BB9457', '#FFE6A7', '#FFF3D6'] },
  { name: 'Emerald City', colors: ['#004B23', '#007200', '#38B000', '#9EF01A', '#F7FFE5'] },
  { name: 'Vintage Wine', colors: ['#2B2118', '#6F1D1B', '#BB9457', '#99582A', '#FFE6A7'] },
  { name: 'Sky Serenity', colors: ['#CAF0F8', '#90E0EF', '#00B4D8', '#0077B6', '#03045E'] },
  { name: 'Coffee House', colors: ['#3E2723', '#5D4037', '#8D6E63', '#D7CCC8', '#EFEBE9'] },
  { name: 'Neon Nights', colors: ['#000000', '#14213D', '#FCA311', '#E5E5E5', '#FFFFFF'] },
  { name: 'Blush Pink', colors: ['#590D22', '#800F2F', '#C9184A', '#FF758F', '#FFB3C1'] },
  { name: 'Deep Sea', colors: ['#050505', '#0B3954', '#087E8B', '#BFD7EA', '#FF5A5F'] },
  { name: 'Mustard Field', colors: ['#293241', '#3D5A80', '#98C1D9', '#E0FBFC', '#EE6C4D'] },
  { name: 'Grape Soda', colors: ['#1B0033', '#3C096C', '#6A0DAD', '#B298DC', '#EDE7F6'] },
  { name: 'Autumn Leaves', colors: ['#621708', '#941B0C', '#BC3908', '#F6AA1C', '#FBE9C7'] },
  { name: 'Teal Dream', colors: ['#032B2B', '#0D5C63', '#44A1A0', '#78CDD7', '#EEF5DB'] },
  { name: 'Candy Pop', colors: ['#FF477E', '#FF7096', '#FF85A1', '#FBB1BD', '#F9BEC7'] },
  { name: 'Charcoal Fire', colors: ['#191919', '#2E2E2E', '#E63946', '#F1FAEE', '#A8DADC'] },
  { name: 'Olive Grove', colors: ['#283618', '#606C38', '#A3B18A', '#DDA15E', '#FEFAE0'] },
  { name: 'Cotton Candy', colors: ['#CDB4DB', '#FFC8DD', '#FFAFCC', '#BDE0FE', '#A2D2FF'] },
  { name: 'Ruby Noir', colors: ['#0B090A', '#161A1D', '#660708', '#BA181B', '#E5383B'] },
  { name: 'Sea Foam', colors: ['#354F52', '#52796F', '#84A98C', '#CAD2C5', '#F6FFF8'] },
  { name: 'Amber Glow', colors: ['#221100', '#5C3D00', '#B38A00', '#FFC300', '#FFF3B0'] },
  { name: 'Cosmic Purple', colors: ['#0D0221', '#241A4A', '#6C22A6', '#C724B1', '#FF3CAC'] },
  { name: 'Desert Sand', colors: ['#463F3A', '#8A817C', '#E0AFA0', '#EAE0D5', '#F4F3EE'] },
  { name: 'Lime Twist', colors: ['#132A13', '#31572C', '#4F772D', '#90A955', '#ECF39E'] },
  { name: 'Cool Slate Blue', colors: ['#22223B', '#4A4E69', '#9A8C98', '#C9ADA7', '#F2E9E4'] },
  { name: 'Tangerine', colors: ['#7F2704', '#D94801', '#F16913', '#FD8D3C', '#FDD0A2'] },
  { name: 'Mint Chocolate', colors: ['#1A1423', '#372549', '#774C60', '#B75D69', '#EACDC2'] },
  { name: 'Arctic Sky', colors: ['#E3F2FD', '#90CAF9', '#42A5F5', '#1976D2', '#0D47A1'] },
]

// ---- colour helpers ---------------------------------------------------------
function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h
  return [parseInt(n.slice(0, 2), 16), parseInt(n.slice(2, 4), 16), parseInt(n.slice(4, 6), 16)]
}
function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360; s /= 100; l /= 100
  const k = (n: number) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
  const to = (x: number) => Math.round(255 * x).toString(16).padStart(2, '0')
  return `#${to(f(0))}${to(f(8))}${to(f(4))}`
}
/** Perceived luminance 0..1. */
export function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255)
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
function saturation(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((v) => v / 255)
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  return max === min ? 0 : (max - min) / (1 - Math.abs(max + min - 1))
}
export function textOn(hex: string): string { return luminance(hex) > 0.55 ? '#111111' : '#ffffff' }

/** Generate an aesthetically-spaced 5-colour palette. Locked slots are kept. */
export function randomPalette(locked: (string | null)[] = []): string[] {
  const baseH = Math.floor(Math.random() * 360)
  const mode = Math.floor(Math.random() * 4)
  const lights = [20, 38, 55, 74, 92]
  return Array.from({ length: 5 }).map((_, i) => {
    if (locked[i]) return locked[i] as string
    let h: number
    if (mode === 0) h = baseH + i * 14                       // analogous
    else if (mode === 1) h = baseH + i * 68                   // spread
    else if (mode === 2) h = baseH + (i % 2 ? 176 : 4) + i * 8 // complementary pairs
    else h = baseH + [0, 28, 150, 205, 330][i]                // triad-ish
    const s = 48 + Math.floor(Math.random() * 40)
    const l = lights[i] + Math.floor(Math.random() * 8 - 4)
    return hslToHex(h, s, l)
  })
}

/** Map a 5-colour palette onto the Brand Kit palette by luminance + saturation. */
export function paletteToKit(colors: string[]): Palette {
  const byLum = [...colors].sort((a, b) => luminance(a) - luminance(b))
  const ink = byLum[0]
  const bg = byLum[byLum.length - 1]
  const mids = colors.filter((c) => c !== ink && c !== bg)
  const bySat = [...(mids.length ? mids : colors)].sort((a, b) => saturation(b) - saturation(a))
  const primary = bySat[0] ?? colors[0]
  const accent = bySat[1] ?? bySat[0] ?? colors[1] ?? colors[0]
  const secondary = bySat[2] ?? bySat[1] ?? colors[2] ?? primary
  return { primary, secondary, accent, ink, bg }
}

/** The kit palette back to a 5-swatch array for display in the generator. */
export function kitToPalette(p: Palette): string[] {
  return [p.ink, p.primary, p.accent, p.secondary, p.bg]
}
