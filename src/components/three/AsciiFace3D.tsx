import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FACES, FACE_SPEED } from '../../data/faces'
import type { Mood } from '../../store'

/** Renders the animated ASCII expression to a canvas texture on a billboard
 *  sprite so it always faces the camera — the signature ASCII face, in 3D. */
export function AsciiFace3D({
  mood,
  position,
  scale = 1,
  color = '#20242f',
}: {
  mood: Mood
  position: [number, number, number]
  scale?: number
  color?: string
}) {
  const { canvas, texture, ctx } = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 96
    const ctx = canvas.getContext('2d')!
    const texture = new THREE.CanvasTexture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    return { canvas, texture, ctx }
  }, [])

  const frame = useRef(0)
  const acc = useRef(0)
  const lastMood = useRef<Mood | null>(null)

  const draw = (m: Mood, i: number) => {
    const frames = FACES[m] ?? FACES.idle
    const f = frames[i % frames.length]
    const [eyes, mouth] = f.split('\n')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = color
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = "bold 34px 'Courier New', monospace"
    ctx.fillText(eyes ?? '', 64, 34)
    ctx.fillText(mouth ?? '', 64, 68)
    texture.needsUpdate = true
  }

  useFrame((_, dt) => {
    if (lastMood.current !== mood) {
      lastMood.current = mood
      frame.current = 0
      acc.current = 0
      draw(mood, 0)
    }
    const speed = FACE_SPEED[mood] ?? 2600
    acc.current += dt * 1000
    if (acc.current >= speed) {
      acc.current = 0
      const frames = FACES[mood] ?? FACES.idle
      frame.current = (frame.current + 1) % frames.length
      draw(mood, frame.current)
    }
  })

  return (
    <sprite position={position} scale={[scale * 1.33, scale, 1]}>
      <spriteMaterial map={texture} transparent depthWrite={false} depthTest={false} />
    </sprite>
  )
}
