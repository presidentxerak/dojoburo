import { useEffect, useRef, useState } from 'react'
import { AGENTS } from '../data/agents'
import { STAGE, FURNITURE } from '../data/layout'
import { AgentSprite } from './AgentSprite'
import { Furniture } from './Furniture'
import { Hero } from './Hero'

/** The 2D pixel-art office. A fixed design-space stage scaled to fit width. */
export function Office() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth
      setScale(Math.min(1, w / STAGE.w))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="office-wrap" ref={wrapRef}>
      <div
        className="office-viewport"
        style={{ height: STAGE.h * scale }}
      >
        <div className="office-stage" style={{ width: STAGE.w, height: STAGE.h, transform: `scale(${scale})` }}>
          <div className="floor-grid" />
          {FURNITURE.map((piece, i) => (
            <Furniture key={i} piece={piece} />
          ))}
          {AGENTS.map((a) => (
            <AgentSprite key={a.id} agent={a} />
          ))}
          <Hero />
        </div>
      </div>
    </div>
  )
}
