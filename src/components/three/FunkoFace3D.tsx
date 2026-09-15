// Le visage Funko · deux grands ovales noirs, un museau, une petite bouche.
//
// Ce qui remplace quoi · le visage était fait de glyphes ASCII (« o o » sur
// « === »). C'était la signature du produit, et c'est aussi ce qui le faisait
// lire comme une démo de terminal posée sur une sphère. Une figurine de vinyle
// n'a pas de texte sur la tête : elle a deux grandes zones noires peintes, un
// museau plus clair et une bouche minuscule. C'est tout, et c'est exactement
// pour ça que ça marche — l'œil complète le reste.
//
// Ce qui ne change PAS · l'humeur. Le visage ASCII portait sept humeurs, et
// les perdre en gagnant du style aurait été un mauvais échange : un
// personnage qui ne peut plus montrer qu'il réfléchit ou qu'il a échoué ne
// raconte plus rien. Chaque humeur est donc redessinée dans la grammaire
// Funko — la FORME de l'œil et de la bouche porte ce que le glyphe portait.
//
// Le composant garde la signature de AsciiFace3D (mood, position, scale,
// color) pour être remplaçable aux neuf endroits qui l'appellent sans en
// toucher un seul.
import { useEffect, useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { Mood } from '../../store'

const W = 200
const H = 150

/** Un clignement, de temps en temps · c'est le détail qui fait qu'un visage
 *  fixe cesse d'avoir l'air mort. Les vraies figurines ne clignent pas ; les
 *  personnages qu'on regarde travailler, si. */
function blinkAt(t: number): number {
  // toutes les ~4,3 s, fermé pendant 120 ms · le nombre premier évite que
  // toute l'équipe cligne en même temps quand plusieurs partagent l'horloge
  const period = 4.3
  const p = t % period
  return p > period - 0.12 ? 1 : 0
}

export function FunkoFace3D({
  mood,
  position,
  scale = 1,
  color = '#1a1a22',
  /** couleur du museau · plus clair que la tête, comme sur les figurines */
  muzzle,
}: {
  mood: Mood
  position: [number, number, number]
  scale?: number
  color?: string
  muzzle?: string
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

  const drawn = useRef<string>('')

  const draw = (m: Mood, blink: number) => {
    ctx.clearRect(0, 0, W, H)
    const cx = W / 2
    const eyeY = 58
    const dx = 40            // écartement des yeux
    const rx = 17, ry = 23   // demi-axes de l'ovale

    // --- le museau, d'abord · il passe SOUS les yeux -------------------
    if (muzzle) {
      ctx.fillStyle = muzzle
      ctx.beginPath()
      ctx.ellipse(cx, 100, 34, 25, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.fillStyle = color
    ctx.strokeStyle = color
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    // --- les yeux ------------------------------------------------------
    const arc = (sx: number, up: boolean) => {
      // un arc épais · l'œil fermé, content ou triste selon le sens
      ctx.lineWidth = 9
      ctx.beginPath()
      ctx.arc(sx, eyeY + (up ? 8 : -8), 19, up ? Math.PI : 0, up ? 0 : Math.PI)
      ctx.stroke()
    }
    const oval = (sx: number, sy = 0, sw = 1, sh = 1) => {
      ctx.beginPath()
      ctx.ellipse(sx, eyeY + sy, rx * sw, ry * sh, 0, 0, Math.PI * 2)
      ctx.fill()
      // le reflet · un seul, en haut à gauche, comme sur une figurine peinte
      ctx.fillStyle = 'rgba(255,255,255,0.92)'
      ctx.beginPath()
      ctx.ellipse(sx - rx * 0.34, eyeY + sy - ry * 0.4, rx * 0.26, ry * 0.2, -0.5, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = color
    }
    const heart = (sx: number) => {
      ctx.beginPath()
      const s = 1.5
      ctx.moveTo(sx, eyeY + 12 * s)
      ctx.bezierCurveTo(sx - 18 * s, eyeY - 2 * s, sx - 10 * s, eyeY - 14 * s, sx, eyeY - 5 * s)
      ctx.bezierCurveTo(sx + 10 * s, eyeY - 14 * s, sx + 18 * s, eyeY - 2 * s, sx, eyeY + 12 * s)
      ctx.fill()
    }

    if (blink) {
      arc(cx - dx, false); arc(cx + dx, false)
    } else {
      switch (m) {
        case 'happy':
          arc(cx - dx, true); arc(cx + dx, true)
          break
        case 'love':
          heart(cx - dx); heart(cx + dx)
          break
        case 'error':
          // yeux plissés et tombants vers l'extérieur
          ctx.lineWidth = 9
          for (const [sx, dir] of [[cx - dx, -1], [cx + dx, 1]] as [number, number][]) {
            ctx.beginPath()
            ctx.moveTo(sx - 17 * dir, eyeY - 8)
            ctx.lineTo(sx + 17 * dir, eyeY + 6)
            ctx.stroke()
          }
          break
        case 'think':
          // les deux yeux regardent en haut à gauche · c'est la direction du
          // regard, pas la forme, qui dit qu'on cherche
          oval(cx - dx - 4, -5, 0.9, 0.95)
          oval(cx + dx - 4, -5, 0.9, 0.95)
          break
        case 'work':
          // légèrement rétrécis · la concentration ferme un peu l'œil
          oval(cx - dx, 2, 1, 0.82)
          oval(cx + dx, 2, 1, 0.82)
          break
        default:
          oval(cx - dx)
          oval(cx + dx)
      }
    }

    // --- le nez et la bouche ------------------------------------------
    ctx.fillStyle = color
    ctx.strokeStyle = color
    // truffe · un petit triangle arrondi, la marque de fabrique du museau
    ctx.beginPath()
    ctx.ellipse(cx, 90, 9, 7, 0, 0, Math.PI * 2)
    ctx.fill()

    ctx.lineWidth = 5
    const mouthY = 108
    switch (m) {
      case 'happy':
      case 'love':
        ctx.beginPath()
        ctx.arc(cx, mouthY - 8, 15, 0.25 * Math.PI, 0.75 * Math.PI)
        ctx.stroke()
        break
      case 'talk':
        ctx.beginPath()
        ctx.ellipse(cx, mouthY, 11, 9, 0, 0, Math.PI * 2)
        ctx.fill()
        break
      case 'error':
        // une bouche ondulée · l'ennui, dessiné
        ctx.beginPath()
        ctx.moveTo(cx - 15, mouthY)
        ctx.quadraticCurveTo(cx - 7, mouthY - 7, cx, mouthY)
        ctx.quadraticCurveTo(cx + 7, mouthY + 7, cx + 15, mouthY)
        ctx.stroke()
        break
      case 'think':
        ctx.beginPath()
        ctx.ellipse(cx + 8, mouthY, 6, 5, 0, 0, Math.PI * 2)
        ctx.stroke()
        break
      default:
        // le trait minuscule · sur une vraie figurine, la bouche au repos
        // tient en quelques millimètres
        ctx.beginPath()
        ctx.arc(cx, mouthY - 6, 11, 0.3 * Math.PI, 0.7 * Math.PI)
        ctx.stroke()
    }
    texture.needsUpdate = true
  }

  // premier rendu, et redessin quand l'humeur change
  useEffect(() => { drawn.current = ''; }, [mood, color, muzzle])

  useFrame((s) => {
    const blink = blinkAt(s.clock.elapsedTime)
    const key = `${mood}|${blink}`
    // On ne repeint QUE si l'image change. Redessiner un canvas à chaque
    // image et le renvoyer au GPU coûterait, pour douze personnages, douze
    // téléversements de texture par image — pour un visage qui ne bouge pas.
    if (key === drawn.current) return
    drawn.current = key
    draw(mood, blink)
  })

  return (
    <sprite position={position} scale={[scale * 1.5, scale * 1.13, 1]}>
      <spriteMaterial map={texture} transparent depthWrite={false} />
    </sprite>
  )
}
