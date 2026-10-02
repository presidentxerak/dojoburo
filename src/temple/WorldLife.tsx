// LA CARTE QUI VIT · demandé : « améliore encore les graphismes de la carte
// ajoute des détails ». Au-dessus du décor peint (art/world), de petits êtres
// animés posés là où ils ont le droit d'être : des koï et des ronds dans l'eau,
// des papillons au-dessus des prairies, des oiseaux sur la cime des arbres. Les
// places viennent de worldDecor, calculées en même temps que le dessin : un
// poisson ne nage jamais dans l'herbe. Mouvement réduit : tout reste immobile.
import { memo, useMemo } from 'react'
import { Grid, OUTLINE } from '../pixel/grid'
import { gridToUrl } from '../pixel/raster'
import type { WorldDecor } from './art/world'

function sprite(rows: string[], pal: Record<string, string>, outline = true): Grid {
  const g = new Grid(rows[0].length + 2, rows.length + 2, 1, 1)
  rows.forEach((row, y) => [...row].forEach((c, x) => { if (pal[c]) g.set(x, y, pal[c]) }))
  if (outline) g.outline(OUTLINE)
  return g
}
const KOI = () => sprite(['.oow.', 'ooowo', '.oow.'], { o: '#ff7a3d', w: '#fff4e6' }, false)
const KOI_W = () => sprite(['.wwr.', 'wwwrw', '.wwr.'], { w: '#fff4e6', r: '#e5413a' }, false)
const BUTTERFLY = (c: string) => sprite(['a.a', 'aba', 'a.a'], { a: c, b: '#2b1d16' })
const BIRD = () => sprite(['.bb.', 'bbbo', '.bb.'], { b: '#5b4636', o: '#f5c542' })

export const WorldLife = memo(function WorldLife({ decor, scale }: { decor: WorldDecor; scale: number }) {
  const koi = gridToUrl('life:koi', KOI)
  const koiW = gridToUrl('life:koiw', KOI_W)
  const bird = gridToUrl('life:bird', BIRD)
  const flies = ['#f9a8c9', '#fde68a', '#a78bfa', '#93c5fd'].map((c) => gridToUrl(`life:fly:${c}`, () => BUTTERFLY(c)))
  const water = useMemo(() => decor.water.slice(0, 14), [decor])
  const flowers = useMemo(() => decor.flowers.filter((_, k) => k % 2 === 0).slice(0, 10), [decor])
  const trees = useMemo(() => decor.trees.filter((_, k) => k % 6 === 0).slice(0, 8), [decor])
  const px = (n: number) => `${n * scale}px`
  return (
    <div className="tw-life" aria-hidden="true">
      {water.map((p, k) => (
        k % 2 === 0
          ? <img key={`f${k}`} className="tw-koi" src={(k % 4 === 0 ? koi : koiW) ?? undefined} alt=""
              style={{ left: px(p.x - 3), top: px(p.y - 2), width: px(7), ['--r' as string]: px(Math.max(2, p.r - 3)), animationDelay: `${-(k * 1.7)}s`, animationDuration: `${7 + (k % 5)}s` }} />
          : <span key={`r${k}`} className="tw-ripple" style={{ left: px(p.x), top: px(p.y), ['--s' as string]: px(p.r * 1.6), animationDelay: `${-(k * 0.9)}s` }} />
      ))}
      {flowers.map((p, k) => (
        <img key={`b${k}`} className="tw-fly" src={flies[k % flies.length] ?? undefined} alt=""
          style={{ left: px(p.x - 2), top: px(p.y - 6), width: px(5), animationDelay: `${-(k * 1.3)}s`, animationDuration: `${4 + (k % 4)}s` }} />
      ))}
      {trees.map((p, k) => (
        <img key={`o${k}`} className="tw-bird" src={bird ?? undefined} alt=""
          style={{ left: px(p.x - 3), top: px(p.y - 4), width: px(6), animationDelay: `${-(k * 2.3)}s`, animationDuration: `${9 + (k % 3) * 2}s` }} />
      ))}
    </div>
  )
})
