// LES PROMENEURS DE LA CARTE · demandé : « mets des personnages qui marchent
// et vont et partent des temples ».
//
// Chacun est un élève chibi tiré au hasard. Il part de l'entrée de la carte ou
// de la porte d'un temple, suit les chemins dessinés (art/world, worldRoutes :
// les mêmes points que ceux qui ont peint la terre battue, donc il ne coupe
// jamais à travers l'herbe), entre dans un temple, y reste un moment, puis en
// ressort pour aller ailleurs ou quitter la carte.
//
// LE MOUVEMENT NE PASSE PAS PAR REACT · une image par trame, écrite directement
// dans le style de chaque promeneur, sinon la carte entière se redessinerait
// soixante fois par seconde. Onglet caché ou mouvement réduit : rien ne bouge.
import { memo, useEffect, useMemo, useRef } from 'react'
import { ChibiSprite } from '../pixel/ChibiSprite'
import { randomChibi } from '../pixel/chibi'
import { getSettings, systemReducesMotion } from '../lib/settings'
import type { WorldRoutes } from './art/world'

type P = { x: number; y: number }

/** le réseau des chemins · un point par sommet, reliés en suivant chaque tracé,
 *  et aux tracés voisins là où ils se touchent */
export function walkNetwork(routes: WorldRoutes) {
  const pts: P[] = []
  const adj: number[][] = []
  const add = (p: P) => { pts.push(p); adj.push([]); return pts.length - 1 }
  const link = (a: number, b: number) => { if (a !== b && !adj[a].includes(b)) { adj[a].push(b); adj[b].push(a) } }
  const lines = routes.paths.map((line) => {
    const ids = line.map(add)
    for (let i = 1; i < ids.length; i++) link(ids[i - 1], ids[i])
    return ids
  })
  // les jonctions · un bout de tracé proche d'un point d'un autre tracé
  for (let a = 0; a < lines.length; a++) {
    for (const end of [lines[a][0], lines[a][lines[a].length - 1]]) {
      let best = -1, bd = Infinity
      for (let b = 0; b < lines.length; b++) {
        if (b === a) continue
        for (const id of lines[b]) {
          const d = (pts[id].x - pts[end].x) ** 2 + (pts[id].y - pts[end].y) ** 2
          if (d < bd) { bd = d; best = id }
        }
      }
      if (best >= 0 && bd <= 64) link(end, best)
    }
  }
  const nearest = (p: P) => {
    let best = 0, bd = Infinity
    pts.forEach((q, i) => { const d = (q.x - p.x) ** 2 + (q.y - p.y) ** 2; if (d < bd) { bd = d; best = i } })
    return best
  }
  const doors = routes.doors.map((d) => ({ at: d, node: nearest(d) }))
  const entrance = { at: routes.entrance, node: nearest(routes.entrance) }
  /** le chemin le plus court, en sommets · les points sont serrés et réguliers,
   *  un parcours en largeur suffit */
  const route = (from: number, to: number): P[] => {
    const prev = new Int32Array(pts.length).fill(-1)
    prev[from] = from
    const queue = [from]
    for (let qi = 0; qi < queue.length; qi++) {
      const u = queue[qi]
      if (u === to) break
      for (const v of adj[u]) if (prev[v] < 0) { prev[v] = u; queue.push(v) }
    }
    if (prev[to] < 0) return [pts[from]]
    const out: P[] = []
    for (let u = to; u !== from; u = prev[u]) out.push(pts[u])
    out.push(pts[from])
    return out.reverse()
  }
  return { doors, entrance, route }
}

interface Walker {
  path: P[]
  seg: number
  t: number
  /** en pause dans un temple jusqu'à cet instant */
  inside: number
  target: number // indice de porte, ou -1 pour la sortie
  x: number
  y: number
  flip: boolean
}

const SPEED = 16 // pixels de carte par seconde

export const Walkers = memo(function Walkers({ routes, scale, count, seed }: { routes: WorldRoutes; scale: number; count: number; seed: number }) {
  const net = useMemo(() => walkNetwork(routes), [routes])
  const specs = useMemo(() => Array.from({ length: count }, (_, i) => randomChibi(seed * 97 + i * 31 + 7)), [count, seed])
  const els = useRef<(HTMLSpanElement | null)[]>([])
  const walkers = useRef<Walker[]>([])
  const scaleRef = useRef(scale)
  scaleRef.current = scale

  useEffect(() => {
    const doors = net.doors
    if (doors.length === 0) return
    const rnd = Math.random
    const plan = (w: Walker, fromNode: number, fromDoor: number) => {
      // la prochaine destination · une autre porte, ou parfois la sortie
      let target = rnd() < 0.15 ? -1 : Math.floor(rnd() * doors.length)
      if (target === fromDoor) target = (target + 1) % doors.length
      const toNode = target < 0 ? net.entrance.node : doors[target].node
      const path = net.route(fromNode, toNode)
      // le seuil est sur le chemin, la porte six pixels plus haut : il y entre
      if (target >= 0) path.push({ x: doors[target].at.x, y: doors[target].at.y - 6 })
      w.path = path; w.seg = 0; w.t = 0; w.target = target
    }
    const spawn = (fresh: boolean): Walker => {
      const w: Walker = { path: [], seg: 0, t: 0, inside: 0, target: -1, x: 0, y: 0, flip: false }
      const fromDoor = fresh && rnd() < 0.7 ? Math.floor(rnd() * doors.length) : -1
      const start = fromDoor >= 0 ? doors[fromDoor].node : net.entrance.node
      plan(w, start, fromDoor)
      // au premier affichage, les promeneurs sont déjà en route, répartis
      if (fresh) { w.seg = Math.floor(rnd() * Math.max(1, w.path.length - 1)); w.inside = 0 }
      const p = w.path[w.seg] ?? routes.entrance
      w.x = p.x; w.y = p.y
      return w
    }
    walkers.current = Array.from({ length: count }, () => spawn(true))

    const draw = () => {
      const s = scaleRef.current
      walkers.current.forEach((w, i) => {
        const el = els.current[i]
        if (!el) return
        const hidden = w.inside > 0
        el.style.transform = `translate(${(w.x * s).toFixed(1)}px, ${(w.y * s).toFixed(1)}px)`
        el.style.opacity = hidden ? '0' : '1'
        el.classList.toggle('flip', w.flip)
      })
    }
    const still = () => getSettings().calm || systemReducesMotion()
    if (still()) { draw(); return }

    let raf = 0
    let last = performance.now()
    const frame = (now: number) => {
      const dt = Math.min(0.1, (now - last) / 1000)
      last = now
      walkers.current.forEach((w, i) => {
        if (w.inside > 0) {
          if (now < w.inside) return
          w.inside = 0
          // il ressort du temple où il était entré
          const door = w.target
          if (door < 0) { walkers.current[i] = spawn(false); return }
          plan(w, doors[door].node, door)
          // il repart du seuil, vers le sommet le plus proche du chemin
          w.path.unshift(doors[door].at)
          w.x = doors[door].at.x; w.y = doors[door].at.y
          return
        }
        let left = SPEED * dt
        while (left > 0 && w.seg < w.path.length - 1) {
          const a = w.path[w.seg], b = w.path[w.seg + 1]
          const len = Math.hypot(b.x - a.x, b.y - a.y) || 0.0001
          const rest = len * (1 - w.t)
          if (left < rest) { w.t += left / len; left = 0 } else { left -= rest; w.seg++; w.t = 0 }
          const c = w.path[w.seg], d = w.path[Math.min(w.seg + 1, w.path.length - 1)]
          w.x = c.x + (d.x - c.x) * w.t
          w.y = c.y + (d.y - c.y) * w.t
          if (Math.abs(d.x - c.x) > 0.2) w.flip = d.x < c.x
        }
        if (w.seg >= w.path.length - 1) {
          // arrivé · il entre dans le temple (ou quitte la carte), puis repart
          w.inside = now + 2500 + Math.random() * 5000
        }
      })
      draw()
      raf = requestAnimationFrame(frame)
    }
    const onVis = () => {
      cancelAnimationFrame(raf)
      if (document.visibilityState === 'visible') { last = performance.now(); raf = requestAnimationFrame(frame) }
    }
    raf = requestAnimationFrame(frame)
    document.addEventListener('visibilitychange', onVis)
    return () => { cancelAnimationFrame(raf); document.removeEventListener('visibilitychange', onVis) }
  }, [net, count, routes]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="tw-walkers" aria-hidden="true">
      {specs.map((sp, i) => (
        <span key={i} className="tw-walker" ref={(el) => { els.current[i] = el }}
          style={{ width: 13 * scale, marginLeft: -6.5 * scale, marginTop: -16 * scale }}>
          <i><ChibiSprite spec={sp} scale={1} /></i>
        </span>
      ))}
    </div>
  )
})
