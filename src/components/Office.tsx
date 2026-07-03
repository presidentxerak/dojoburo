import { useEffect, useRef, useState } from 'react'
import { AGENTS } from '../data/agents'
import { STAGE, STATIONS } from '../data/layout'
import { SCENES } from '../data/scenes'
import { useDojo } from '../store'
import { AgentSprite } from './AgentSprite'
import { Furniture } from './Furniture'
import { Hero } from './Hero'
import { SceneSwitcher } from './SceneSwitcher'

/** The 2D pixel-art scene. A fixed design-space stage scaled to fit width. */
export function Office() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const sceneId = useDojo((s) => s.sceneId)
  const scene = SCENES[sceneId]

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setScale(Math.min(1, el.clientWidth / STAGE.w)))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="office-wrap" ref={wrapRef}>
      <div className="office-viewport" style={{ height: STAGE.h * scale }}>
        <div
          className={`office-stage scene-${sceneId}`}
          style={{
            width: STAGE.w,
            height: STAGE.h,
            transform: `scale(${scale})`,
            ['--floor-a' as string]: scene.floorA,
            ['--floor-b' as string]: scene.floorB,
            ['--scene-tint' as string]: scene.tint,
          }}
        >
          <div className="floor-grid" />
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
      <SceneSwitcher />
    </div>
  )
}
