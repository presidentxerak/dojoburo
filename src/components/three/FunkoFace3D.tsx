// Le visage Funko · deux grands yeux noirs. Et, la plupart du temps, RIEN
// d'autre.
//
// Première version ratée, et la leçon vaut d'être écrite : j'avais posé le
// MÊME museau — truffe et petite bouche — sur les 38 espèces. Un chat, un
// robot, un dragon et un fantôme recevaient tous le museau d'un chien.
// Ajouté à une tête sphérique, ça ne donnait pas un Funko Pop : ça donnait
// le chien d'Animal Crossing, trente-huit fois.
//
// Un vrai Funko Pop n'a NI NEZ NI BOUCHE. Deux ovales noirs sur une face
// plate, et c'est tout — c'est précisément ce vide qui fait la signature.
// Ce qui distingue les personnages entre eux n'est pas un visage plus
// détaillé, c'est ce qui S'AJOUTE à ce vide : un museau pour les mammifères,
// un bec pour les oiseaux, une visière pour les machines, des crocs pour les
// monstres, des orbites creuses pour les squelettes.
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

/** Ce qui s'ajoute aux deux yeux · rien, par défaut. */
export type Snout = 'none' | 'muzzle' | 'beak' | 'visor' | 'fangs' | 'hollow'

/** La forme des yeux · la deuxième moitié de la différenciation. */
export type EyeKind = 'oval' | 'wide' | 'slit' | 'square' | 'dot'

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
  /** ce qui s'ajoute aux yeux · l'espèce le décide (voir SNOUT_BY_KIND) */
  snout = 'none',
  /** la forme des yeux · l'autre moitié de la différenciation */
  eyes = 'oval',
  /** couleur d'appoint · bec, visière, crocs */
  tint = '#ffb400',
}: {
  mood: Mood
  position: [number, number, number]
  scale?: number
  color?: string
  muzzle?: string
  snout?: Snout
  eyes?: EyeKind
  tint?: string
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
    // Les yeux sont BAS sur le visage · sur une figurine Funko ils occupent
    // le tiers inférieur de la face, ce qui laisse un grand front vide. Les
    // remonter au centre, comme je l'avais fait, donne un visage de peluche.
    const eyeY = 78
    const dx = 40
    // La forme de l'œil fait la moitié du travail de différenciation.
    const EYE: Record<string, [number, number]> = {
      oval: [17, 23], wide: [24, 26], slit: [19, 9], square: [18, 14], dot: [11, 11],
    }
    const [rx, ry] = EYE[eyes] ?? EYE.oval

    // --- ce qui s'ajoute aux yeux, sous eux ---------------------------
    if (snout === 'muzzle' && muzzle) {
      ctx.fillStyle = muzzle
      ctx.beginPath()
      ctx.ellipse(cx, 116, 32, 20, 0, 0, Math.PI * 2)
      ctx.fill()
    }
    if (snout === 'beak') {
      ctx.fillStyle = tint
      ctx.beginPath()
      ctx.moveTo(cx - 24, 108)
      ctx.lineTo(cx + 24, 108)
      ctx.lineTo(cx, 136)
      ctx.closePath()
      ctx.fill()
    }
    if (snout === 'visor') {
      // une bande lumineuse à la place des yeux · les machines n'ont pas
      // d'iris, elles ont un balayage
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.roundRect(cx - 66, eyeY - 20, 132, 40, 18)
      ctx.fill()
      ctx.fillStyle = tint
      ctx.beginPath()
      ctx.roundRect(cx - 56, eyeY - 11, 112, 22, 10)
      ctx.fill()
      texture.needsUpdate = true
      return
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

    // --- ce qui vient PAR-DESSUS ---------------------------------------
    //
    // Pas de truffe, pas de bouche. C'est le point de la première version
    // ratée : les ajouter à tout le monde donnait un museau de chien sur un
    // robot. Une figurine Funko au repos n'a que ses deux yeux.
    ctx.fillStyle = color
    ctx.strokeStyle = color

    if (snout === 'muzzle') {
      // la truffe, uniquement pour ceux qui ont un museau
      ctx.beginPath()
      ctx.ellipse(cx, 106, 8, 6, 0, 0, Math.PI * 2)
      ctx.fill()
    }
    if (snout === 'fangs') {
      // deux crocs qui dépassent · le monstre, sans bouche dessinée
      for (const sx of [cx - 13, cx + 13]) {
        ctx.fillStyle = '#f4f6fa'
        ctx.beginPath()
        ctx.moveTo(sx - 7, 106)
        ctx.lineTo(sx + 7, 106)
        ctx.lineTo(sx, 126)
        ctx.closePath()
        ctx.fill()
      }
    }
    if (snout === 'hollow') {
      // orbites creuses · un anneau sombre autour de chaque œil
      ctx.strokeStyle = color
      ctx.lineWidth = 7
      for (const sx of [cx - dx, cx + dx]) {
        ctx.beginPath()
        ctx.ellipse(sx, eyeY, rx + 9, ry + 9, 0, 0, Math.PI * 2)
        ctx.stroke()
      }
    }

    // La BOUCHE n'apparaît que lorsqu'elle DIT quelque chose — parler, rire,
    // échouer. Au repos et au travail, il n'y en a pas : c'est le silence du
    // visage qui fait la figurine.
    ctx.lineWidth = 5
    ctx.strokeStyle = color
    const mouthY = snout === 'muzzle' ? 124 : 118
    if (m === 'happy' || m === 'love') {
      ctx.beginPath()
      ctx.arc(cx, mouthY - 10, 16, 0.22 * Math.PI, 0.78 * Math.PI)
      ctx.stroke()
    } else if (m === 'talk') {
      ctx.beginPath()
      ctx.ellipse(cx, mouthY, 11, 9, 0, 0, Math.PI * 2)
      ctx.fill()
    } else if (m === 'error') {
      ctx.beginPath()
      ctx.moveTo(cx - 15, mouthY)
      ctx.quadraticCurveTo(cx - 7, mouthY - 7, cx, mouthY)
      ctx.quadraticCurveTo(cx + 7, mouthY + 7, cx + 15, mouthY)
      ctx.stroke()
    }
    texture.needsUpdate = true
  }

  // premier rendu, et redessin quand l'humeur change
  useEffect(() => { drawn.current = ''; }, [mood, color, muzzle, snout, eyes, tint])

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
