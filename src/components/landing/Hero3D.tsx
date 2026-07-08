import { useEffect, useRef, useState } from 'react'
import { Agent3DPreview } from '../three/Agent3DPreview'
import { skinById } from '../../data/skins'
import type { Mood } from '../../store'

/** A floating full-3D character hero that drifts on scroll (parallax). Same
 *  kawaii render as the office, used to animate landing sections. Decorative
 *  and pointer-transparent; hidden on narrow screens via CSS. */
export function Hero3D({
  skin,
  size = 190,
  mood = 'happy',
  speed = 1,
  phase = 0,
  parallax = 0.14,
  side = 'right',
}: {
  skin: string
  size?: number
  mood?: Mood
  speed?: number
  phase?: number
  parallax?: number
  side?: 'left' | 'right'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [y, setY] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2
        const vh = window.innerHeight || 800
        setY((center - vh / 2) * -parallax)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [parallax])
  return (
    <div ref={ref} className={`lp-hero3d lp-hero3d-${side}`} style={{ transform: `translate3d(0, ${y.toFixed(1)}px, 0)` }} aria-hidden>
      <Agent3DPreview character={skinById(skin)} size={size} mood={mood} speed={speed} phase={phase} />
    </div>
  )
}
