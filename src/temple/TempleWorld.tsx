// LA CARTE DES TEMPLES, RÉUTILISABLE · la vue de dessus en pixel art, un
// temple par entrée, le nom au-dessus, les promeneurs et la vie du décor.
// Demandé d'abord pour les formations IA (temple/World), puis : « faut créer
// une carte de temple par catégorie on a la carte de Apprendre l'IA, là on a
// la carte Les cours de la 3ème à la terminale avec sur la carte une
// démarcation entre les années ». La carte de l'école (school/SchoolMap) pose
// une carte par année ; celle de l'IA, une seule carte pour toutes les
// formations.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Lnk } from '../lib/router'
import { gridToUrl } from '../pixel/raster'
import { drawWorld, drawTempleIcon, worldRoutes, worldDecor } from './art/world'
import { WorldLife } from './WorldLife'
import { Walkers } from './Walkers'
import { zen } from '../lib/zen'

export interface MapTemple {
  key: string
  title: string
  tint: string
  href: string
  /** cadenas sur la porte et couleurs éteintes */
  locked?: boolean
  /** une petite ligne sous le nom (progression, « Bientôt ») */
  note?: string
  /** un temple d'examen, au bout de la carte */
  exam?: boolean
  /** le libellé lu par les lecteurs d'écran */
  aria?: string
}

/** La disposition · quatre temples par rangée sur grand écran, deux sur
 *  téléphone, en lacet pour que le chemin serpente. */
function layout(n: number, wide: boolean) {
  const cols = wide ? 4 : 2
  const w = wide ? 640 : 320
  const stepX = w / cols
  const stepY = wide ? 118 : 112
  const spots = Array.from({ length: n }, (_, i) => {
    const row = Math.floor(i / cols)
    const c = i % cols
    const col = row % 2 === 0 ? c : cols - 1 - c
    return { x: Math.round(stepX / 2 + col * stepX), y: Math.round(78 + row * stepY) }
  })
  const h = Math.round(78 + (Math.ceil(n / cols) - 1) * stepY + 70)
  return { w, h, spots }
}

export function TempleWorld({ items, seed = 7, walkers }: { items: MapTemple[]; seed?: number; walkers?: [number, number] }) {
  const box = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(360)
  useEffect(() => {
    const el = box.current
    if (!el) return
    const ro = new ResizeObserver(() => setWidth(el.clientWidth))
    ro.observe(el)
    setWidth(el.clientWidth)
    return () => ro.disconnect()
  }, [])

  const wide = width >= 700
  const L = useMemo(() => layout(items.length, wide), [items.length, wide])
  const worldUrl = useMemo(() => gridToUrl(`world:${L.w}x${L.h}:${seed}`, () => drawWorld(L.w, L.h, L.spots, seed)), [L, seed])
  const routes = useMemo(() => worldRoutes(L.w, L.h, L.spots, seed), [L, seed])
  const decor = useMemo(() => worldDecor(L.w, L.h, L.spots, seed), [L, seed])
  const scale = width / L.w
  const [many, few] = walkers ?? [12, 7]

  return (
    <div className="tw-world" ref={box} style={{ height: L.h * scale }}>
      {worldUrl && <img className="tw-world-bg" src={worldUrl} alt="" aria-hidden="true" width={L.w * scale} height={L.h * scale} />}
      <WorldLife decor={decor} scale={scale} />
      <Walkers routes={routes} scale={scale} count={wide ? many : few} seed={seed} />
      {items.map((t, i) => {
        const spot = L.spots[i]
        const icon = gridToUrl(`ti:${t.key}:${t.tint}:${!!t.locked}`, () => drawTempleIcon(t.tint, t.exam ? 1 : i + seed, !!t.locked))
        return (
          <Lnk key={t.key} className={`tw-temple${t.locked ? ' locked' : ''}${t.exam ? ' is-exam' : ''}`} href={t.href}
            onClick={() => zen.sfx(t.locked ? 'locked' : 'door')}
            style={{ left: (spot.x - 20) * scale, top: (spot.y - 26) * scale, width: 40 * scale }}
            aria-label={t.aria ?? t.title}>
            <span className="tw-label" style={{ ['--ac' as string]: t.tint }}>
              {t.title}
              {t.note && <small className="tw-note">{t.note}</small>}
            </span>
            {icon && <img src={icon} alt="" width={40 * scale} height={44 * scale} />}
          </Lnk>
        )
      })}
    </div>
  )
}

/** LES CATÉGORIES DE CARTES · demandé : « une carte de temple par catégorie ».
 *  En tête de chaque carte, le choix entre les formations IA et l'école. */
export function MapTabs({ on, labels }: { on: 'ai' | 'school'; labels: { ai: string; school: string } }) {
  return (
    <nav className="sc-tabs tw-maptabs" aria-label="Cartes">
      <Lnk className={`sc-tab${on === 'ai' ? ' on' : ''}`} href="/">{labels.ai}</Lnk>
      <Lnk className={`sc-tab${on === 'school' ? ' on' : ''}`} href="/ecole/carte">{labels.school}</Lnk>
    </nav>
  )
}
