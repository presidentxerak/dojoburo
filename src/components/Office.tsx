import { useEffect, useRef, useState } from 'react'
import { AGENTS } from '../data/agents'
import { STAGE, STATIONS } from '../data/layout'
import { SCENES, WALL_H } from '../data/scenes'
import { useDojo } from '../store'
import { AgentSprite } from './AgentSprite'
import { Furniture } from './Furniture'
import { Hero } from './Hero'

/** The scene, scaled to COVER the viewport (fullscreen background). */
export function Office() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [t, setT] = useState({ scale: 1, x: 0, y: 0 })
  const sceneId = useDojo((s) => s.sceneId)
  const scene = SCENES[sceneId]

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const compute = () => {
      const cw = el.clientWidth
      const ch = el.clientHeight
      const scale = Math.max(cw / STAGE.w, ch / STAGE.h)
      setT({ scale, x: (cw - STAGE.w * scale) / 2, y: (ch - STAGE.h * scale) / 2 })
    }
    const ro = new ResizeObserver(compute)
    ro.observe(el)
    compute()
    return () => ro.disconnect()
  }, [])

  return (
    <div className="office-wrap" ref={wrapRef}>
      <div
        className={`office-stage scene-${sceneId}`}
        style={{
          width: STAGE.w,
          height: STAGE.h,
          transform: `translate(${t.x}px, ${t.y}px) scale(${t.scale})`,
          ['--floor-a' as string]: scene.floorA,
          ['--floor-b' as string]: scene.floorB,
          ['--scene-tint' as string]: scene.tint,
        }}
      >
        <div className="floor-grid" />
        <div className="scene-wall" style={{ height: WALL_H, background: scene.wall, borderBottom: `3px solid ${scene.wallTrim}` }} />
        {scene.pieces.map((piece, i) => (
          <Furniture key={`d-${i}`} piece={piece} />
        ))}
        {STATIONS.map((piece, i) => (
          <Furniture key={`s-${i}`} piece={piece} />
        ))}
        {AGENTS.map((a) => (
          <AgentSprite key={a.id} agent={a} />
        ))}
        <Hero />
      </div>
    </div>
  )
}
