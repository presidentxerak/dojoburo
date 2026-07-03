import { useEffect, useState } from 'react'
import { FACES, FACE_SPEED } from '../data/faces'
import type { Mood } from '../store'

interface Props {
  mood: Mood
  className?: string
}

/** Renders an animated ASCII face by cycling the frames for the current mood. */
export function AsciiFace({ mood, className }: Props) {
  const frames = FACES[mood] ?? FACES.idle
  const [i, setI] = useState(0)

  useEffect(() => {
    setI(0)
    if (frames.length <= 1) return
    const id = setInterval(() => setI((n) => (n + 1) % frames.length), FACE_SPEED[mood])
    return () => clearInterval(id)
  }, [mood, frames.length])

  return <pre className={`ascii-face ${className ?? ''}`} aria-label={`mood: ${mood}`}>{frames[i]}</pre>
}
