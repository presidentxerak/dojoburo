// LES GRANDES IMAGES PIXEL · un décor, un étage, la carte du monde.
//
// Un personnage tient en quelques centaines de rectangles SVG ; un décor de
// 160 × 64 ou une carte de 640 × 520 en compterait des dizaines de milliers.
// Ceux-là sont peints UNE fois sur un canvas hors écran, convertis en image,
// et gardés en mémoire : la page affiche une simple <img>, agrandie sans flou
// (image-rendering: pixelated).
import type { Grid } from './grid'

const cache = new Map<string, string>()

export function gridToUrl(key: string, make: () => Grid): string {
  const hit = cache.get(key)
  if (hit) return hit
  const g = make()
  if (typeof document === 'undefined') return ''
  const c = document.createElement('canvas')
  c.width = g.w
  c.height = g.h
  const ctx = c.getContext('2d')
  if (!ctx) return ''
  for (const [x, y, w, color] of g.runs()) {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, 1)
  }
  const url = c.toDataURL('image/png')
  cache.set(key, url)
  return url
}
