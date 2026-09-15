// Le visage ASCII · deux lignes de glyphes peintes sur la tête.
//
// Ce composant revient après un détour qu'il faut écrire, parce qu'il a coûté
// deux allers-retours. J'avais remplacé les glyphes par un visage peint de
// figurine — deux ovales noirs, un museau, pas de bouche. C'était fidèle à une
// Funko Pop, et c'était le mauvais choix pour CE produit : la signature de
// dojoburo est le terminal, et un visage ASCII sur une tête est exactement ce
// qui la porte. On revient donc aux glyphes, mais mieux qu'avant :
//
//   · chaque espèce a ses propres yeux et sa propre bouche AU REPOS (voir
//     data/faces.ts) — c'est ce qui manquait, et ce qui les faisait tous se
//     ressembler ;
//   · les sept humeurs restent la grammaire commune et reprennent la main dès
//     qu'il se passe quelque chose ;
//   · le texte est cerné d'un liseré clair, sinon des yeux sombres sur une
//     tête sombre disparaissent — c'est le défaut qui, sur les peaux
//     « Shadow » et « Onyx », donnait des personnages sans visage.
//
// Le rendu reste une texture de canvas sur un panneau qui fait toujours face
// à la caméra : le visage se lit sous n'importe quel angle, et il ne coûte
// qu'un seul quad.
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { FACES, FACE_SPEED, STYLED_MOODS, faceStyleOf } from '../../data/faces'
import type { Mood } from '../../store'

const W = 192
const H = 144

export function AsciiFace3D({
  mood,
  position,
  scale = 1,
  color = '#20242f',
  /** l'espèce · elle décide des yeux et de la bouche au repos */
  kind,
  /** le liseré · la couleur de la tête, pour détacher les glyphes du fond */
  halo = '#ffffff',
}: {
  mood: Mood
  position: [number, number, number]
  scale?: number
  color?: string
  kind?: string
  halo?: string
}) {
  const { texture, ctx } = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = W
    canvas.height = H
    const ctx = canvas.getContext('2d')!
    const texture = new THREE.CanvasTexture(canvas)
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    return { texture, ctx }
  }, [])

  const frame = useRef(0)
  const acc = useRef(0)
  const lastKey = useRef('')

  const draw = (m: Mood, i: number) => {
    const frames = FACES[m] ?? FACES.idle
    const f = frames[i % frames.length]
    let [eyes, mouth] = f.split('\n')

    // le visage d'espèce, au repos et au travail seulement · une humeur forte
    // parle plus fort que l'espèce, et garde ses propres glyphes
    const style = faceStyleOf(kind)
    if (style && STYLED_MOODS.includes(m)) {
      // le clignement de la grammaire commune est conservé : c'est lui qui
      // empêche un visage fixe d'avoir l'air mort
      if (eyes !== '- -') eyes = style.eyes
      mouth = style.mouth
    }

    ctx.clearRect(0, 0, W, H)
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = "bold 52px 'Courier New', monospace"
    ctx.lineJoin = 'round'
    ctx.lineWidth = 9
    ctx.strokeStyle = halo
    ctx.fillStyle = color
    for (const [text, y] of [[eyes ?? '', 50] as const, [mouth ?? '', 102] as const]) {
      // le liseré d'abord, le glyphe par-dessus · sans lui, un visage sombre
      // sur une tête sombre n'existe tout simplement pas
      ctx.strokeText(text, W / 2, y)
      ctx.fillText(text, W / 2, y)
    }
    texture.needsUpdate = true
  }

  useFrame((_, dt) => {
    const key = `${mood}|${kind ?? ''}|${color}|${halo}`
    if (lastKey.current !== key) {
      lastKey.current = key
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
      {/* depthTest so a face behind another character is properly occluded;
          depthWrite off so the transparent quad doesn't hide anything itself */}
      <spriteMaterial map={texture} transparent depthWrite={false} depthTest />
    </sprite>
  )
}
