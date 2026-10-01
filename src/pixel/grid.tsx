// LE PIXEL ART · une grille, des couleurs, et un contour qui se dessine seul.
//
// Demandé : « change complètement le design des personnages et des dojo en
// pixel art 2D », sur la référence d'une tour à étages en pixel art.
//
// LA MÉTHODE · chaque dessin est une grille de cellules colorées. On peint
// des formes simples (rectangles, lignes, points) couche après couche, puis
// le contour sombre et épais du style de référence est AJOUTÉ automatiquement
// autour de tout ce qui est peint : aucun dessin n'a à le tracer lui-même, et
// tous les personnages et décors ont le même trait.
//
// LE RENDU · un SVG dont chaque ligne de pixels de même couleur devient un seul
// rectangle (quelques centaines d'éléments par personnage, pas des milliers),
// en `crispEdges` : net à toutes les tailles, sans flou, sans canvas.
import { memo, useMemo } from 'react'

export const OUTLINE = '#1b1530'

export class Grid {
  readonly w: number
  readonly h: number
  /** le décalage de l'origine · on peut dessiner un peu au-dessus de y = 0
   *  (un chapeau pointu, des oreilles de lapin) sans sortir de la grille */
  private ox: number
  private oy: number
  private cells: (string | null)[]
  constructor(w: number, h: number, ox = 0, oy = 0) {
    this.w = w
    this.h = h
    this.ox = ox
    this.oy = oy
    this.cells = new Array(w * h).fill(null)
  }
  private raw(x: number, y: number): string | null {
    if (x < 0 || y < 0 || x >= this.w || y >= this.h) return null
    return this.cells[y * this.w + x]
  }
  get(x: number, y: number): string | null { return this.raw(x + this.ox, y + this.oy) }
  set(x: number, y: number, c: string | null) {
    const X = x + this.ox, Y = y + this.oy
    if (X < 0 || Y < 0 || X >= this.w || Y >= this.h) return
    this.cells[Y * this.w + X] = c
  }
  /** un rectangle plein */
  rect(x: number, y: number, w: number, h: number, c: string | null) {
    for (let j = 0; j < h; j++) for (let i = 0; i < w; i++) this.set(x + i, y + j, c)
  }
  /** un rectangle aux coins arrondis d'un pixel */
  round(x: number, y: number, w: number, h: number, c: string) {
    this.rect(x + 1, y, w - 2, h, c)
    this.rect(x, y + 1, w, h - 2, c)
  }
  /** une ligne horizontale */
  hline(x: number, y: number, w: number, c: string | null) { this.rect(x, y, w, 1, c) }
  /** une ligne verticale */
  vline(x: number, y: number, h: number, c: string | null) { this.rect(x, y, 1, h, c) }
  /** ne peindre que là où il y a déjà quelque chose (une ombre, un motif) */
  over(x: number, y: number, c: string) { if (this.get(x, y)) this.set(x, y, c) }
  /** coller une autre grille (un objet déjà contouré) à la position (x, y) ·
   *  ses cellules vides laissent voir ce qui est dessous */
  blit(src: Grid, x: number, y: number) {
    for (let j = 0; j < src.h; j++) {
      for (let i = 0; i < src.w; i++) {
        const c = src.rawAt(i, j)
        if (c) this.set(x + i, y + j, c)
      }
    }
  }
  /** la cellule brute, sans le décalage d'origine */
  rawAt(x: number, y: number): string | null { return this.raw(x, y) }
  /** LE CONTOUR · chaque cellule vide qui touche une cellule peinte (haut,
   *  bas, gauche, droite) devient sombre. Le dessin gagne son trait. */
  outline(color = OUTLINE) {
    const add: number[] = []
    for (let y = 0; y < this.h; y++) {
      for (let x = 0; x < this.w; x++) {
        if (this.raw(x, y)) continue
        const n = this.raw(x - 1, y) || this.raw(x + 1, y) || this.raw(x, y - 1) || this.raw(x, y + 1)
        if (n && n !== color) add.push(y * this.w + x)
      }
    }
    for (const i of add) this.cells[i] = color
  }
  /** les rectangles à dessiner · une suite de cellules de même couleur sur
   *  une ligne n'en fait qu'un */
  runs(): [number, number, number, string][] {
    const out: [number, number, number, string][] = []
    for (let y = 0; y < this.h; y++) {
      let x = 0
      while (x < this.w) {
        const c = this.raw(x, y)
        if (!c) { x++; continue }
        let e = x + 1
        while (e < this.w && this.raw(e, y) === c) e++
        out.push([x, y, e - x, c])
        x = e
      }
    }
    return out
  }
}

/** Une grille en SVG · `scale` est la taille d'un pixel à l'écran. */
export const PixelSvg = memo(function PixelSvg({ grid, scale = 4, className = '', title }: {
  grid: Grid
  scale?: number
  className?: string
  title?: string
}) {
  const rects = useMemo(() => grid.runs(), [grid])
  return (
    <svg
      className={`px ${className}`}
      width={grid.w * scale}
      height={grid.h * scale}
      viewBox={`0 0 ${grid.w} ${grid.h}`}
      shapeRendering="crispEdges"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {rects.map(([x, y, w, c], i) => <rect key={i} x={x} y={y} width={w} height={1} fill={c} />)}
    </svg>
  )
})

/** Éclaircir ou assombrir une couleur hexadécimale (ombres, reflets). */
export function shade(hex: string, amount: number): string {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  const f = (v: number) => Math.max(0, Math.min(255, Math.round(amount >= 0 ? v + (255 - v) * amount : v * (1 + amount))))
  const r = f((n >> 16) & 255), g = f((n >> 8) & 255), b = f(n & 255)
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`
}

/** Un générateur pseudo-aléatoire reproductible · une graine, toujours le même
 *  tirage (un élève garde son personnage d'une visite à l'autre). */
export function rng(seed: number) {
  let s = seed >>> 0 || 1
  return () => {
    s ^= s << 13; s >>>= 0
    s ^= s >> 17
    s ^= s << 5; s >>>= 0
    return (s >>> 0) / 4294967296
  }
}

export const hashString = (str: string): number => {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) }
  return h >>> 0
}
