import { useEffect, useRef, useState } from 'react'
import { Character } from './Character'
import { HERO_CHARACTER } from '../data/looks'
import { heroPosFor } from '../data/layout'
import { useDojo } from '../store'

/** The founder-hero. Walks to whichever agent is working and jokes with them. */
export function Hero() {
  const targetId = useDojo((s) => s.heroTargetId)
  const banter = useDojo((s) => s.banter)
  const pos = heroPosFor(targetId)
  const [walking, setWalking] = useState(false)
  const prev = useRef(pos)

  useEffect(() => {
    if (prev.current.x !== pos.x || prev.current.y !== pos.y) {
      setWalking(true)
      const t = setTimeout(() => setWalking(false), 850)
      prev.current = pos
      return () => clearTimeout(t)
    }
  }, [pos.x, pos.y])

  const showBubble = banter && banter.who === 'hero'
  const heroMood = targetId === 'home' ? 'idle' : 'talk'

  return (
    <div
      className={`hero ${walking ? 'is-walking' : ''}`}
      style={{ left: pos.x, top: pos.y, zIndex: 40 }}
    >
      {showBubble && (
        <div className="bubble hero-bubble">
          {banter!.text}
          <span className="bubble-tail" />
        </div>
      )}
      <div className="hero-avatar">
        <Character character={HERO_CHARACTER} mood={heroMood} size={50} />
      </div>
      <div className="hero-shadow" />
      <div className="hero-tag">HERO</div>
    </div>
  )
}
