// Le visage · peint dans une texture, sur un plan COLLÉ AU CRÂNE.
//
// Ce qui change, et pourquoi c'est la correction des « bugs sur la tête ».
//
// Le visage était un `sprite` : un panneau qui pivote en permanence pour faire
// face à la caméra. Trois conséquences, toutes visibles sur vos captures.
// Il flottait devant la tête, à une distance choisie à la main, donc tout ce
// qui dépassait — museau, bec, lunettes, mâchoire — passait devant lui ou
// derrière selon l'angle. Il basculait indépendamment du crâne, si bien qu'un
// objet posé « devant le visage » ne l'était plus dès que la caméra tournait.
// Et sa profondeur se battait avec celle des accessoires, d'où les glyphes qui
// disparaissaient sous un museau.
//
// Le kit règle cela autrement : le visage est un PLAN, enfant du groupe de la
// tête, immobile dans son repère, à z = 0,5 du crâne. Il tourne avec la tête,
// jamais tout seul. Tout ce qui doit le masquer se place simplement DEVANT lui
// (le bec du canard à z = 0,54), et le test de profondeur fait le reste — sans
// arbitrage, sans réglage à la main.
//
// La contrainte qui vient avec, et que le kit énonce : le plan ne doit jamais
// être vu de tranche, sinon le personnage devient une carte à jouer. Ici la
// caméra plonge depuis l'avant et ne tourne pas autour des personnages ; le
// cas ne se présente pas. Si un jour elle tourne, la parade est
// `faceCameraWhileMoving` du kit.
//
// Deux familles de visages, selon le choix fait pour ce produit : les grands
// yeux kawaii du kit pour tout ce qui est vivant, et les glyphes ASCII pour
// les machines — robots, cyborgs, terminaux. L'ASCII cesse d'être le visage de
// tout le monde pour devenir la signature de ce qui est mécanique.
import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FACES, FACE_SPEED, STYLED_MOODS, faceStyleOf } from '../../data/faces'
import type { Mood } from '../../store'

const S = 256

/** Les espèces mécaniques · elles gardent les glyphes. */
const MACHINES = new Set(['robot', 'cyborg', 'goldorak', 'monitor', 'geo'])
export const isMachine = (kind?: string) => !!kind && MACHINES.has(kind)

/** Le blanc de l'œil et l'encre · les valeurs du kit. */
const INK = '#2a1b16'
const BLUSH = 'rgba(231,160,168,.55)'

/** Le visage kawaii · deux grands yeux noirs brillants, une bouche courte,
 *  deux joues. Les reflets ne sont pas décoratifs : ce sont eux qui font lire
 *  une ellipse noire comme un œil vivant plutôt que comme un trou. */
function drawKawaii(x: CanvasRenderingContext2D, mood: Mood, blink: boolean) {
  x.clearRect(0, 0, S, S)
  const L = 84, R = 172, EY = 116
  x.fillStyle = BLUSH
  x.beginPath(); x.ellipse(44, 166, 27, 17, 0, 0, 7); x.fill()
  x.beginPath(); x.ellipse(212, 166, 27, 17, 0, 0, 7); x.fill()
  x.fillStyle = INK; x.strokeStyle = INK; x.lineCap = 'round'; x.lineJoin = 'round'

  const arc = (ex: number) => {
    x.lineWidth = 14
    x.beginPath(); x.arc(ex, EY + 12, 25, Math.PI * 1.12, Math.PI * 1.88); x.stroke()
  }
  const eye = (ex: number, sy = 0, sh = 1) => {
    x.fillStyle = INK
    x.beginPath(); x.ellipse(ex, EY + sy, 26, 32 * sh, 0, 0, 7); x.fill()
    x.fillStyle = '#ffffff'
    x.beginPath(); x.arc(ex - 9, EY + sy - 12 * sh, 10.5, 0, 7); x.fill()
    x.beginPath(); x.arc(ex + 9, EY + sy + 13 * sh, 5, 0, 7); x.fill()
    x.fillStyle = INK
  }
  const heart = (ex: number) => {
    x.fillStyle = '#e0435f'
    x.beginPath()
    x.moveTo(ex, EY + 26)
    x.bezierCurveTo(ex - 34, EY - 2, ex - 18, EY - 28, ex, EY - 8)
    x.bezierCurveTo(ex + 18, EY - 28, ex + 34, EY - 2, ex, EY + 26)
    x.fill()
    x.fillStyle = INK
  }

  if (blink) { arc(L); arc(R) }
  else if (mood === 'happy') { arc(L); arc(R) }
  else if (mood === 'love') { heart(L); heart(R) }
  else if (mood === 'error') {
    x.lineWidth = 13
    x.beginPath(); x.moveTo(L - 22, EY - 22); x.lineTo(L + 22, EY + 14); x.stroke()
    x.beginPath(); x.moveTo(L + 22, EY - 22); x.lineTo(L - 22, EY + 14); x.stroke()
    x.beginPath(); x.moveTo(R - 22, EY - 22); x.lineTo(R + 22, EY + 14); x.stroke()
    x.beginPath(); x.moveTo(R + 22, EY - 22); x.lineTo(R - 22, EY + 14); x.stroke()
  } else if (mood === 'think') { eye(L - 6, -6, 0.92); eye(R - 6, -6, 0.92) }
  else if (mood === 'work') { eye(L, 4, 0.78); eye(R, 4, 0.78) }
  else { eye(L); eye(R) }

  // la bouche · courte, et elle DIT l'humeur
  x.strokeStyle = INK
  if (mood === 'happy' || mood === 'love') {
    x.fillStyle = INK
    x.beginPath(); x.moveTo(102, 170); x.quadraticCurveTo(128, 206, 154, 170); x.closePath(); x.fill()
    x.fillStyle = '#ff5d8f'
    x.beginPath(); x.moveTo(112, 182); x.quadraticCurveTo(128, 200, 144, 182); x.closePath(); x.fill()
  } else if (mood === 'talk') {
    x.fillStyle = INK
    x.beginPath(); x.ellipse(128, 180, 15, 17, 0, 0, 7); x.fill()
  } else if (mood === 'error') {
    x.lineWidth = 10
    x.beginPath(); x.moveTo(106, 190); x.quadraticCurveTo(128, 170, 150, 190); x.stroke()
  } else {
    x.lineWidth = 9
    x.beginPath(); x.moveTo(113, 176); x.quadraticCurveTo(128, 193, 143, 176); x.stroke()
  }
}

/** Le visage machine · les glyphes, cernés d'un liseré clair pour rester
 *  lisibles sur un crâne sombre. */
function drawAscii(x: CanvasRenderingContext2D, mood: Mood, frame: number, kind: string | undefined, halo: string) {
  const frames = FACES[mood] ?? FACES.idle
  const f = frames[frame % frames.length]
  let [eyes, mouth] = f.split('\n')
  const style = faceStyleOf(kind)
  if (style && STYLED_MOODS.includes(mood)) {
    if (eyes !== '- -') eyes = style.eyes
    mouth = style.mouth
  }
  x.clearRect(0, 0, S, S)
  x.textAlign = 'center'
  x.textBaseline = 'middle'
  x.font = "bold 74px 'Courier New', monospace"
  x.lineJoin = 'round'
  x.lineWidth = 12
  x.strokeStyle = halo
  x.fillStyle = INK
  for (const [text, y] of [[eyes ?? '', 104] as const, [mouth ?? '', 178] as const]) {
    x.strokeText(text, S / 2, y)
    x.fillText(text, S / 2, y)
  }
}

/** Un clignement de temps en temps · un visage fixe a l'air mort. La période
 *  est un nombre premier, sinon toute l'équipe cligne à l'unisson. */
const blinkAt = (t: number) => (t % 4.3) > 4.18

export function Face3D({
  mood,
  kind,
  /** la demi-profondeur du crâne · le plan se colle juste devant */
  z,
  /** la largeur du plan · proportionnelle à la tête */
  size,
  halo = '#ffffff',
}: {
  mood: Mood
  kind?: string
  z: number
  size: number
  halo?: string
}) {
  const { texture, ctx } = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = S
    const ctx = canvas.getContext('2d')!
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 4
    return { texture, ctx }
  }, [])

  const drawn = useRef('')
  const frame = useRef(0)
  const acc = useRef(0)
  const machine = isMachine(kind)

  useEffect(() => { drawn.current = '' }, [mood, kind, halo])

  useFrame((s, dt) => {
    if (machine) {
      acc.current += dt * 1000
      const speed = FACE_SPEED[mood] ?? 2600
      if (acc.current >= speed) { acc.current = 0; frame.current++ }
      const key = `${mood}|${frame.current % 3}`
      if (key === drawn.current) return
      drawn.current = key
      drawAscii(ctx, mood, frame.current, kind, halo)
    } else {
      const blink = blinkAt(s.clock.elapsedTime)
      const key = `${mood}|${blink}`
      if (key === drawn.current) return
      drawn.current = key
      drawKawaii(ctx, mood, blink)
    }
    texture.needsUpdate = true
  })

  return (
    <mesh position={[0, 0, z]} renderOrder={2}>
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial map={texture} transparent depthWrite={false} toneMapped={false} />
    </mesh>
  )
}
