import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import type { Character } from '../../data/looks'
import type { Mood } from '../../store'
import { useDojo } from '../../store'
import { Face3D } from './Face3D'

import { VINYL } from './toy'
import { Contact } from './Contact'
import { roundedBox } from './geometry'
import { HEAD_Y, HEAD_S, HEAD_LIFT, crown, girth, headOf } from './head'
import type { Head } from './head'
import { CROWNED, JobBody, JobHead, jobOf } from './JobLook3D'
import type { Department } from '../../data/agents'
import { Mat } from './Mat'
import { useGait, strideAmp } from './gait'
import { peekNews } from './news'
import { DAIS } from './stage'

// La matière de tous les personnages · une figurine de vinyle, définie une
// seule fois dans ./toy et partagée par les 38 espèces.
const MAT = VINYL


/** Éclaircit une couleur · un museau ou un intérieur d'oreille est toujours
 *  un ton plus clair que la tête, jamais une autre couleur. */
function lighten(hex: string, amount: number): string {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const mix = (c: number) => Math.round(c + (255 - c) * amount)
  return `#${[(num >> 16) & 255, (num >> 8) & 255, num & 255].map((c) => mix(c).toString(16).padStart(2, '0')).join('')}`
}

function AboutY({ y, scale, children }: { y: number; scale: number; children: React.ReactNode }) {
  return (
    <group position={[0, y, 0]} scale={scale}>
      <group position={[0, -y, 0]}>{children}</group>
    </group>
  )
}

/** Un membre · une capsule, jamais une boîte. Le bras était un
 *  parallélépipède aux arêtes vives : c'est le détail qui faisait lire les
 *  personnages comme des assemblages de cubes plutôt que comme des jouets. */
function Limb({ p, r, len, c, rot }: { p: [number, number, number]; r: number; len: number; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <capsuleGeometry args={[r, len, 6, 14]} />
      <Mat color={c} {...MAT} />
    </mesh>
  )
}

function Ball({ p, r, c, s = [1, 1, 1] as [number, number, number] }: { p: [number, number, number]; r: number; c: string; s?: [number, number, number] }) {
  return (
    <mesh position={p} scale={s} castShadow>
      <sphereGeometry args={[r, 22, 20]} />
      <Mat color={c} {...MAT} />
    </mesh>
  )
}
function Cyl({ p, r, h, c, rot }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <cylinderGeometry args={[r, r, h, 16]} />
      <Mat color={c} {...MAT} />
    </mesh>
  )
}
function Cone({ p, r, h, c, rot }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <coneGeometry args={[r, h, 16]} />
      <Mat color={c} {...MAT} />
    </mesh>
  )
}
function Box({ p, s, c, rot }: { p: [number, number, number]; s: [number, number, number]; c: string; rot?: [number, number, number] }) {
  return (
    <mesh position={p} rotation={rot} geometry={roundedBox(s[0], s[1], s[2], 0.16)} castShadow>
      <Mat color={c} {...MAT} />
    </mesh>
  )
}

/** La coquille de la tête · une boîte adoucie, ou une sphère étirée.
 *
 *  Les géométries sont mises en cache (par dimensions pour la boîte, par
 *  l'unique sphère de rayon 0,6 mise à l'échelle pour les formes rondes) :
 *  cinq formes ne coûtent pas plus cher qu'une seule. */
function HeadShell({ h, c }: { h: Head; c: string }) {
  if (h.round) {
    return (
      <mesh position={[0, HEAD_Y, 0]} scale={[h.x / 0.6, h.y / 0.6, h.z / 0.6]} castShadow>
        <sphereGeometry args={[0.6, 24, 20]} />
        <Mat color={c} {...MAT} />
      </mesh>
    )
  }
  return (
    <mesh position={[0, HEAD_Y, 0]} geometry={roundedBox(h.x * 2, h.y * 2, h.z * 2, 0.2, 7)} castShadow>
      <Mat color={c} {...MAT} />
    </mesh>
  )
}

// A typing arm: pivots at the shoulder, forearm reaches forward-down onto the
// laptop keyboard and taps; or raises up to wave hello at the Chief.
function Arm({ side, color, hand, busy, wave }: { side: number; color: string; hand: string; busy: boolean; wave?: boolean }) {
  const g = useRef<THREE.Group>(null)
  const gait = useGait()
  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const { speed, phase } = gait.current
    const amp = strideAmp(speed)
    if (wave) {
      // raise the forearm and swing it side to side
      g.current.rotation.x += (-1.4 - g.current.rotation.x) * 0.14
      g.current.rotation.z = side * (0.5 + Math.sin(t * 9) * 0.45)
    } else if (amp > 0.01) {
      // LE BALANCIER · le bras suit la jambe OPPOSÉE. C'est ce contre-temps
      // qui fait lire une marche ; les deux bras en phase avec les jambes du
      // même côté donnent une démarche de pantin, ce qu'on avait.
      const swing = Math.sin(phase + (side > 0 ? Math.PI : 0)) * 0.62 * amp
      g.current.rotation.x += (-0.3 + swing - g.current.rotation.x) * 0.3
      // le coude s'écarte légèrement du corps quand le pas s'ouvre
      g.current.rotation.z += (side * 0.12 * amp - g.current.rotation.z) * 0.2
    } else if (busy) {
      // LES MAINS SUR LE CLAVIER · elles flottaient à hauteur de poitrine,
      // cinquante centimètres au-dessus de l'ordinateur, en oscillant de
      // huit degrés. On voyait quelqu'un mimer le travail au-dessus de son
      // bureau. Le bras descend jusqu'au plan du clavier (l'épaule est à
      // 1,22, l'ordinateur à 0,96 : il faut piquer d'un quart de radian), et
      // les deux mains alternent au lieu de battre ensemble.
      const tap = Math.sin(t * 13 + (side > 0 ? 0 : Math.PI)) * 0.07
      g.current.rotation.x += (0.24 + tap - g.current.rotation.x) * 0.3
      g.current.rotation.z += (side * 0.08 - g.current.rotation.z) * 0.2
    } else {
      g.current.rotation.x += (-0.42 + Math.sin(t * 6 + (side > 0 ? 0 : 1.4)) * 0.06 - g.current.rotation.x) * 0.4
      g.current.rotation.z += (0 - g.current.rotation.z) * 0.2
    }
  })
  return (
    <group ref={g} position={[side * 0.42, 1.22, 0.06]} rotation={[-0.42, 0, 0]}>
      {/* bras en capsule, couché le long de l'axe Z · la capsule est
          verticale par défaut, d'où le quart de tour */}
      <Limb p={[0, 0, 0.34]} r={0.105} len={0.5} c={color} rot={[Math.PI / 2, 0, 0]} />
      <mesh position={[0, 0, 0.72]} castShadow>
        <sphereGeometry args={[0.155, 16, 14]} />
        <Mat color={hand} {...MAT} />
      </mesh>
    </group>
  )
}

// An octopus tentacle: a taper of shrinking balls splaying out from the mantle
// along a horizontal direction, drooping gently and undulating as it goes.
function Tentacle({ base, dir, color, phase, busy }: { base: [number, number, number]; dir: [number, number]; color: string; phase: number; busy: boolean }) {
  const g = useRef<THREE.Group>(null)
  const perp: [number, number] = [-dir[1], dir[0]]
  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const spd = busy ? 6 : 2.6
    g.current.children.forEach((c, i) => {
      const w = Math.sin(t * spd + phase + i * 0.8) * 0.07 * (i + 1)
      c.position.x = dir[0] * i * 0.19 + perp[0] * w
      c.position.z = dir[1] * i * 0.19 + perp[1] * w
      c.position.y = -i * i * 0.05 // gentle accelerating droop
    })
  })
  return (
    <group ref={g} position={base}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[dir[0] * i * 0.19, -i * i * 0.05, dir[1] * i * 0.19]} castShadow>
          <sphereGeometry args={[0.19 - i * 0.035, 12, 10]} />
          <Mat color={color} {...MAT} />
        </mesh>
      ))}
    </group>
  )
}

// ADA's retro computer-monitor head: beige case, glowing terminal, ASCII face.
function MonitorHead({ c, mood }: { c: Character; mood: Mood }) {
  return (
    <group position={[0, 1.98, 0]}>
      <Cyl p={[0, -0.66, 0]} r={0.1} h={0.28} c={c.extra} />
      <Box p={[0, -0.82, 0]} s={[0.44, 0.08, 0.34]} c={c.extra} />
      <Box p={[0, 0, 0]} s={[1.16, 0.94, 0.72]} c={c.face} />
      <Box p={[0, 0.02, 0.37]} s={[0.9, 0.7, 0.04]} c={'#10222e'} />
      <mesh position={[0, 0.02, 0.395]}>
        <planeGeometry args={[0.82, 0.62]} />
        <Mat color={'#0a251d'} emissive={'#1f9e6a'} emissiveIntensity={0.55} {...MAT} />
      </mesh>
      <Ball p={[0.44, -0.34, 0.37]} r={0.04} c={'#37d67a'} />
      <group position={[0, 0.03, 0]}><Face3D mood={mood} kind="monitor" z={0.44} size={0.87} halo={'#0a251d'} /></group>
    </group>
  )
}

// Les coiffes, oreilles et cornes · RELATIVES à la tête, jamais absolues.
//
// C'est ici qu'était la dette. Chaque oreille, chaque corne, chaque bord de
// chapeau était un nombre écrit à la main pour UNE forme de tête. La sphère a
// laissé place à un bloc : tout s'est retrouvé enterré. Donner cinq formes
// différentes aurait multiplié le problème par cinq.
//
// Tout se réfère donc maintenant aux demi-dimensions `h` : `top` pour le
// sommet, `h.x` pour le demi-côté, `fz` pour la face avant, `girth` pour ce
// qui doit passer AUTOUR (un bord de chapeau doit dépasser le coin d'une
// boîte, pas son demi-côté). Une oreille écrite « au sommet, aux deux tiers
// de la largeur » reste juste sur les cinq formes.
//
// Deuxième règle, imposée par le retour aux visages ASCII : RIEN ne dépasse
// de plus de 0,18 devant la face. Le panneau du visage est à fz + 0,22, et
// tout ce qui passe devant lui masque les glyphes. Les museaux, becs et
// mâchoires sont donc APLATIS contre la face, à hauteur de bouche — le « w »
// ou le « > » se dessine dessus, ce qui est exactement l'effet recherché.

/** Le museau · une tache plus claire à hauteur de bouche, aplatie contre la
 *  face. La bouche ASCII se dessine par-dessus. */
function Muzzle({ h, c }: { h: Head; c: string }) {
  return <Ball p={[0, HEAD_Y - h.y * 0.2, h.z - 0.03]} r={0.22} c={c} s={[1.25, 0.8, 0.5]} />
}

function Toppers({ c, h }: { c: Character; h: Head }) {
  const hy = HEAD_Y
  const top = hy + h.y        // le sommet du crâne
  const fz = h.z              // la face avant
  const g = girth(h)          // le tour de tête
  const pale = lighten(c.face, 0.45)
  switch (c.kind) {
    case 'cat':
      return (
        <group>
          {[-1, 1].map((sd) => (
            <group key={sd}>
              <Cone p={[sd * 0.58 * h.x, top + 0.14, 0]} r={0.2} h={0.4} c={c.face} />
              <Cone p={[sd * 0.58 * h.x, top + 0.12, 0.05]} r={0.1} h={0.22} c={lighten(c.face, 0.35)} />
            </group>
          ))}
          <Muzzle h={h} c={pale} />
        </group>
      )
    case 'ninja':
      return (
        <group>
          {/* le quart de tour · un bandeau CEINT la tête, il ne lui fait pas
              face. Sans lui, le tore restait dans son plan XY d'origine et se
              dressait comme une auréole au-dessus du crâne. */}
          <mesh position={[0, hy + h.y * 0.25, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[g + 0.03, 0.1, 12, 28]} />
            <Mat color={c.outfit2} {...MAT} />
          </mesh>
          <Box p={[g * 0.92, hy + h.y * 0.25, 0.2]} s={[0.16, 0.16, 0.16]} c={c.outfit2} />
          <Box p={[g * 1.24, hy + h.y * 0.05, 0.2]} s={[0.1, 0.32, 0.06]} c={c.outfit2} rot={[0, 0, 0.4]} />
        </group>
      )
    case 'wizard':
      return (
        <group>
          <Cone p={[0, top + 0.5, 0]} r={0.46} h={1.0} c={c.outfit2} />
          <Cyl p={[0, top - 0.02, 0]} r={g + 0.14} h={0.11} c={c.outfit2} />
          <Ball p={[0, top + 0.26, 0.38]} r={0.08} c={'#ffe066'} />
        </group>
      )
    case 'alien':
      return (
        <group>
          {[-1, 1].map((sd) => (
            <group key={sd}>
              <Cyl p={[sd * 0.44 * h.x, top + 0.08, 0]} r={0.045} h={0.44} c={c.face} />
              <Ball p={[sd * 0.44 * h.x, top + 0.34, 0]} r={0.12} c={c.extra} />
            </group>
          ))}
        </group>
      )
    case 'goldorak':
      return (
        <group>
          {[-1, 1].map((sd) => (
            <Box key={sd} p={[sd * (h.x + 0.2), hy + h.y * 0.24, 0]} s={[0.46, 0.15, 0.17]} c={c.extra} rot={[0, 0, sd * -0.5]} />
          ))}
          <Cyl p={[0, top + 0.16, 0]} r={0.045} h={0.36} c={'#8b93a1'} />
          <Ball p={[0, top + 0.38, 0]} r={0.1} c={c.extra} />
          <Box p={[0, hy + h.y * 0.34, fz + 0.04]} s={[0.15, 0.46, 0.09]} c={c.extra} />
        </group>
      )
    case 'robot':
      return (
        <group>
          <Cyl p={[0, top + 0.16, 0]} r={0.04} h={0.36} c={'#8b93a1'} />
          <Ball p={[0, top + 0.38, 0]} r={0.095} c={c.extra} />
          {[-1, 1].map((sd) => <Ball key={sd} p={[sd * (h.x + 0.03), hy, 0]} r={0.13} c={'#8b93a1'} />)}
        </group>
      )
    case 'monster':
      return (
        <group>
          {[-1, 1].map((sd) => (
            <Cone key={sd} p={[sd * 0.52 * h.x, top + 0.2, 0]} r={0.14} h={0.48} c={'#f4efe0'} rot={[0, 0, sd * -0.25]} />
          ))}
        </group>
      )
    case 'vampire':
      return (
        <group>
          {/* la chevelure ENVELOPPE la tête · son rayon se prend sur le tour,
              pas sur le demi-côté, sinon les coins ressortent au travers */}
          <Ball p={[0, hy + h.y * 0.58, -0.05]} r={g + 0.07} c={c.extra} s={[1, 0.5, 0.94]} />
          <Cone p={[0, hy + h.y * 0.5, fz + 0.02]} r={0.09} h={0.24} c={c.extra} rot={[Math.PI, 0, 0]} />
        </group>
      )
    case 'cyborg':
      return (
        <group>
          <Box p={[0.72 * h.x, hy + h.y * 0.08, fz * 0.74]} s={[0.5, h.y * 1.2, 0.36]} c={'#c3ccd8'} />
          <Box p={[0.74 * h.x, hy + h.y * 0.14, fz + 0.1]} s={[0.4, 0.11, 0.06]} c={'#ff5a5f'} />
          <Cyl p={[0.8 * h.x, top + 0.14, 0]} r={0.035} h={0.32} c={'#8b93a1'} />
        </group>
      )
    case 'human':
      return <Ball p={[0, hy + h.y * 0.56, -0.08]} r={g + 0.06} c={c.extra} s={[1, 0.46, 0.94]} />
    case 'poodle': // caniche · toison bouffante, oreilles tombantes
      return (
        <group>
          <Ball p={[0, top + 0.04, 0]} r={0.34} c={c.face} />
          {[-1, 1].map((sd) => (
            <group key={sd}>
              <Ball p={[sd * 0.48 * h.x, top - 0.04, 0.14]} r={0.19} c={c.face} />
              <Ball p={[sd * (h.x + 0.09), hy - 0.06, 0.04]} r={0.24} c={c.face} s={[0.82, 1.35, 0.82]} />
            </group>
          ))}
          <Muzzle h={h} c={pale} />
        </group>
      )
    case 'rabbit': // lapin · longues oreilles
      return (
        <group>
          {[-1, 1].map((sd) => (
            <group key={sd} rotation={[0, 0, sd * -0.14]}>
              <Box p={[sd * 0.42 * h.x, top + 0.44, -0.04]} s={[0.21, 0.88, 0.13]} c={c.face} />
              <Box p={[sd * 0.42 * h.x, top + 0.48, 0.03]} s={[0.1, 0.58, 0.06]} c={'#ff9fb4'} />
            </group>
          ))}
          <Muzzle h={h} c={pale} />
        </group>
      )
    case 'frog': // pepe · deux globes sous les yeux ASCII
      return (
        <group>
          {[-1, 1].map((sd) => (
            <Ball key={sd} p={[sd * 0.44 * h.x, hy + h.y * 0.2, fz - 0.04]} r={0.23} c={'#f3fff0'} s={[1, 1, 0.4]} />
          ))}
        </group>
      )
    case 'duck': // canard · bec plat, à hauteur de bouche
      return (
        <group>
          <Box p={[0, hy - h.y * 0.24, fz + 0.12]} s={[0.44, 0.12, 0.3]} c={'#ff9e2c'} />
          <Cone p={[0, top + 0.06, -0.12]} r={0.085} h={0.38} c={c.face} rot={[-0.5, 0, 0]} />
        </group>
      )
    case 'godzilla': // plaques dorsales, derrière le crâne
      return (
        <group>
          {[0, 1, 2, 3].map((i) => (
            <Cone key={i} p={[0, top - 0.04 - i * 0.24, -(h.z * 0.7) - i * 0.4]} r={0.12 + i * 0.02} h={0.38 - i * 0.03} c={c.extra} rot={[-0.35, 0, 0]} />
          ))}
        </group>
      )
    case 'bear': // ours · oreilles rondes + museau
      return (
        <group>
          {[-1, 1].map((sd) => (
            <group key={sd}>
              <Ball p={[sd * 0.82 * h.x, top + 0.02, -0.04]} r={0.19} c={c.face} />
              <Ball p={[sd * 0.82 * h.x, top + 0.02, 0.05]} r={0.095} c={c.extra} />
            </group>
          ))}
          <Muzzle h={h} c={lighten(c.extra, 0.3)} />
        </group>
      )
    case 'chicken': // poulet · crête, bec, barbillons
      return (
        <group>
          {[[-0.15, 0.11], [0, 0.15], [0.15, 0.11]].map(([cx, r], i) => <Ball key={i} p={[cx, top + 0.1, 0]} r={r} c={'#e23b3b'} />)}
          <Cone p={[0, hy - h.y * 0.24, fz + 0.06]} r={0.13} h={0.26} c={'#ffb400'} rot={[Math.PI / 2, 0, 0]} />
          {[-0.08, 0.08].map((wx) => <Ball key={wx} p={[wx, hy - h.y * 0.62, fz - 0.06]} r={0.075} c={'#c0201d'} />)}
        </group>
      )
    case 'penguin': // bec + ventre blanc
      return (
        <group>
          <Cone p={[0, hy - h.y * 0.26, fz + 0.06]} r={0.11} h={0.26} c={'#ff9e2c'} rot={[Math.PI / 2, 0, 0]} />
          <Ball p={[0, 1.12, 0.42]} r={0.38} c={'#f5f9ff'} s={[1, 1.25, 0.42]} />
        </group>
      )
    case 'panda': // oreilles noires + taches sur les yeux
      return (
        <group>
          {[-1, 1].map((sd) => (
            <group key={sd}>
              <Ball p={[sd * 0.82 * h.x, top, -0.04]} r={0.18} c={'#1c1c1c'} />
              {/* la tache · APLATIE contre la face et derrière les glyphes,
                  sinon les yeux ASCII se dessineraient dessous */}
              <Ball p={[sd * 0.44 * h.x, hy + h.y * 0.2, fz - 0.04]} r={0.17} c={'#1c1c1c'} s={[1, 1.2, 0.35]} />
            </group>
          ))}
          <Muzzle h={h} c={'#fbfbf8'} />
        </group>
      )
    case 'dragon': // cornes en arrière + épines dorsales
      return (
        <group>
          {[-1, 1].map((sd) => (
            <Cone key={sd} p={[sd * 0.48 * h.x, top + 0.08, -0.16]} r={0.095} h={0.46} c={c.extra} rot={[-0.5, 0, sd * -0.2]} />
          ))}
          {[0, 1, 2].map((i) => <Cone key={i} p={[0, hy + h.y * 0.15 - i * 0.3, -(h.z + 0.02) - i * 0.3]} r={0.075} h={0.26} c={c.extra} />)}
        </group>
      )
    case 'mushroom': // chapeau rouge à pois blancs
      return (
        <group>
          <Ball p={[0, top - 0.1, 0]} r={g + 0.26} c={c.outfit} s={[1, 0.66, 1]} />
          {[[-0.4, 0.24, 0.2], [0.36, 0.34, -0.1], [0.05, 0.5, 0.34], [-0.14, 0.42, -0.34], [0.5, 0.16, 0.28]].map(([dx, dy, dz], i) => (
            <Ball key={i} p={[dx as number, top - 0.08 + (dy as number) * 0.24, dz as number]} r={0.11} c={'#fdfcf6'} />
          ))}
        </group>
      )
    case 'knight': // heaume d'acier · une CALOTTE, au-dessus des yeux
      return (
        <group>
          <Box p={[0, hy + h.y * 0.82, 0.02]} s={[h.x * 2 + 0.1, h.y * 1.05, h.z * 2 + 0.1]} c={'#c7cfda'} />
          <Cyl p={[0, hy + h.y * 0.4, 0]} r={g + 0.08} h={0.11} c={'#9aa4b4'} />
          <Box p={[0, hy - h.y * 0.1, fz + 0.1]} s={[0.13, h.y * 0.9, 0.1]} c={'#aeb7c6'} />
          <Box p={[0, top + 0.32, -0.04]} s={[0.1, 0.15, 0.46]} c={'#8b93a1'} />
          {[0, 1, 2, 3].map((k) => <Ball key={k} p={[0, top + 0.44, -0.02 - k * 0.15]} r={0.15 - k * 0.02} c={c.outfit} />)}
        </group>
      )
    case 'mage': // chapeau pointu étoilé, à pointe tombante
      return (
        <group>
          <Cyl p={[0, top - 0.04, 0]} r={g + 0.16} h={0.09} c={c.outfit2} />
          <Cone p={[0.08, top + 0.58, -0.05]} r={0.42} h={1.2} c={c.outfit} rot={[0.18, 0, -0.12]} />
          <Ball p={[0.26, top + 1.06, -0.16]} r={0.09} c={c.outfit2} />
          <Ball p={[0.11, top + 0.48, 0.38]} r={0.065} c={'#ffe066'} />
          <Ball p={[-0.17, top + 0.74, 0.22]} r={0.05} c={'#fff'} />
        </group>
      )
    case 'madscientist': // tignasse + lunettes RELEVÉES sur le front
      return (
        <group>
          {[[-0.5, 0.2, 0.1], [-0.28, 0.5, -0.1], [0.0, 0.62, 0.15], [0.3, 0.5, -0.12], [0.52, 0.24, 0.08], [-0.12, 0.44, 0.4], [0.16, 0.4, -0.38]].map(([dx, dy, dz], i) => (
            <Ball key={i} p={[(dx as number) * h.x * 1.6, top - 0.18 + (dy as number), (dz as number) * h.z * 1.6]} r={0.19} c={c.extra} />
          ))}
          {[-1, 1].map((sd) => (
            <group key={sd}>
              <mesh position={[sd * 0.5 * h.x, hy + h.y * 0.62, fz - 0.02]}>
                <torusGeometry args={[0.15, 0.045, 10, 22]} />
                <Mat color={'#2b2f3a'} {...MAT} />
              </mesh>
              <Ball p={[sd * 0.5 * h.x, hy + h.y * 0.62, fz]} r={0.115} c={'#8fe3ff'} />
            </group>
          ))}
          <Box p={[0, hy + h.y * 0.62, fz - 0.06]} s={[0.24, 0.05, 0.05]} c={'#2b2f3a'} />
        </group>
      )
    case 'skeleton':
    case 'slime':
    default:
      return null
  }
}

// A single hanging jellyfish tentacle: a vertical chain of shrinking balls that
// sways gently, faster when the agent is busy.
function JellyLeg({ base, color, phase, busy }: { base: [number, number, number]; color: string; phase: number; busy: boolean }) {
  const g = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const spd = busy ? 5 : 2.4
    g.current.children.forEach((c, i) => {
      c.position.x = Math.sin(t * spd + phase + i * 0.7) * 0.05 * (i + 1)
      c.position.z = Math.cos(t * spd * 0.8 + phase + i * 0.6) * 0.04 * (i + 1)
    })
  })
  return (
    <group ref={g} position={base}>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} position={[0, -i * 0.24, 0]}>
          <sphereGeometry args={[0.1 - i * 0.012, 10, 8]} />
          <Mat color={color} transparent opacity={0.72} {...MAT} />
        </mesh>
      ))}
    </group>
  )
}

// Abstract-geometric body: a slowly tumbling icosahedron core with a few
// polyhedra orbiting it · no organic parts.
function GeoBody({ c, mood }: { c: Character; mood: Mood }) {
  const core = useRef<THREE.Mesh>(null)
  const orbit = useRef<THREE.Group>(null)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (core.current) { core.current.rotation.y = t * 0.5; core.current.rotation.x = Math.sin(t * 0.4) * 0.3 }
    if (orbit.current) orbit.current.rotation.y = t * 0.9
  })
  return (
    <group position={[0, 1.5, 0]}>
      <mesh ref={core} castShadow>
        <icosahedronGeometry args={[0.72, 0]} />
        <Mat color={c.outfit} flatShading roughness={0.4} metalness={0.2} />
      </mesh>
      <group position={[0, 0.02, 0]}><Face3D mood={mood} kind="geo" z={0.74} size={0.87} halo={c.outfit} /></group>
      <group ref={orbit}>
        <mesh position={[1.1, 0.2, 0]}><tetrahedronGeometry args={[0.24, 0]} /><Mat color={c.outfit2} flatShading /></mesh>
        <mesh position={[-1.0, -0.1, 0.3]}><octahedronGeometry args={[0.22, 0]} /><Mat color={c.extra} flatShading /></mesh>
        <mesh position={[0.2, 0.1, -1.1]} rotation={[0.5, 0.5, 0]}><boxGeometry args={[0.3, 0.3, 0.3]} /><Mat color={c.pants} flatShading /></mesh>
      </group>
    </group>
  )
}

// --- rare head accessories: only ~1 agent in 3 gets one, picked deterministically
type Acc = 'bowler' | 'tophat' | 'cowboy' | 'wizardhat' | 'cap' | 'shades' | 'beret' | 'beanie' | 'party' | 'flower'
const ACCS: Acc[] = ['bowler', 'tophat', 'cowboy', 'wizardhat', 'cap', 'shades', 'beret', 'beanie', 'party', 'flower']
const CAP_COLORS = ['#e0524f', '#4f9df7', '#45c46a', '#ffc24b', '#a78bfa', '#ff7eb6']
// a vivid palette so hats come in many colours, not just black
const HAT_COLORS = ['#2a2a34', '#e0524f', '#3b6fd4', '#2f9e57', '#d9a11f', '#7b52c9', '#d94f8a', '#1b8f9e', '#ff7a1a', '#08c2ac', '#394150', '#c0392b']
function hashCode(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h
}
function hatColor(id: string, salt = ''): string {
  return HAT_COLORS[Math.abs(hashCode(id + '·hatc' + salt)) % HAT_COLORS.length]
}
const NO_ACC = new Set([
  'wizard', 'monitor', 'octopus', 'slime', 'ghost', 'jellyfish', 'bibendum', 'geo',
  'mushroom', 'rabbit', 'frog', 'godzilla', 'chicken', 'dragon', 'poodle', 'duck',
  'knight', 'mage', 'madscientist', // these carry their own headwear
])
function accForId(id: string, kind: string): Acc | null {
  if (NO_ACC.has(kind)) return null
  const h = Math.abs(hashCode(id + '·hat'))
  if (h % 100 >= 40) return null // ~40% wear an accessory · most heads stay bare
  return ACCS[h % ACCS.length]
}
// Les chapeaux · posés sur le SOMMET de la tête, quel qu'il soit.
//
// Le rayon se prend sur la LARGEUR de la tête (`hw`), pas sur son tour. La
// première version prenait le tour — la diagonale d'une boîte — et donnait des
// chapeaux douze à trente pour cent plus larges que le crâne. Écrasés, ils se
// lisaient comme des galettes ou des pains à hamburger posés sur la tête :
// c'est le défaut qu'on voyait sur toutes les captures de l'application.
//
// Le tour ne sert plus qu'aux BORDS, qui doivent effectivement dépasser les
// quatre coins d'une tête cubique, sinon ils les laissent ressortir au
// travers. Bord large, calotte étroite : c'est ce qui fait un chapeau.
function Accessory({ kind, id, h }: { kind: Acc; id: string; h: Head }) {
  const t = crown(h)                      // le sommet du crâne
  const g = girth(h)                      // le tour · pour les bords seulement
  const hw = Math.max(h.x, h.z)           // la largeur · pour les calottes
  switch (kind) {
    case 'bowler': {
      const c = hatColor(id)
      return <group><Cyl p={[0, t - 0.04, 0]} r={g + 0.14} h={0.055} c={c} /><Ball p={[0, t + 0.06, 0]} r={hw * 0.82} c={c} s={[1, 0.86, 1]} /></group>
    }
    case 'tophat': {
      const c = hatColor(id)
      return <group><Cyl p={[0, t - 0.04, 0]} r={g + 0.18} h={0.05} c={c} /><Cyl p={[0, t + 0.4, 0]} r={hw * 0.8} h={0.82} c={c} /><Cyl p={[0, t + 0.06, 0]} r={hw * 0.83} h={0.1} c={hatColor(id, 'band')} /></group>
    }
    case 'cowboy':
      return <group><Cyl p={[0, t - 0.06, 0]} r={g + 0.32} h={0.05} c="#b07a42" /><Cyl p={[0, t + 0.18, 0]} r={hw * 0.76} h={0.46} c="#a9743f" /><Cyl p={[0, t - 0.01, 0]} r={hw * 0.79} h={0.08} c={hatColor(id, 'band')} /></group>
    case 'wizardhat': {
      const c = hatColor(id)
      return <group><Cyl p={[0, t - 0.04, 0]} r={g + 0.18} h={0.05} c={c} /><Cone p={[0, t + 0.56, 0]} r={hw * 0.88} h={1.15} c={c} /><Ball p={[0.16, t + 0.46, 0.26]} r={0.07} c="#ffe066" /><Ball p={[-0.12, t + 0.86, 0.16]} r={0.05} c="#ffe066" /><Ball p={[0.05, t + 0.24, 0.34]} r={0.05} c="#fff" /></group>
    }
    case 'cap': {
      const c = CAP_COLORS[Math.abs(hashCode(id)) % CAP_COLORS.length]
      return <group><Ball p={[0, t - 0.1, 0]} r={hw + 0.03} c={c} s={[1, 0.8, 0.98]} /><Box p={[0, t - 0.14, h.z * 0.9]} s={[hw * 1.5, 0.055, 0.36]} c={c} /><Ball p={[0, t + 0.3, 0]} r={0.05} c="#ffcf3b" /></group>
    }
    case 'beret': {
      const c = hatColor(id)
      return <group><Ball p={[0, t - 0.02, 0]} r={hw + 0.1} c={c} s={[1, 0.52, 0.98]} /><Ball p={[0, t + 0.2, 0]} r={0.055} c={c} /></group>
    }
    case 'beanie': {
      const c = hatColor(id)
      return <group><Ball p={[0, t - 0.06, 0]} r={hw + 0.04} c={c} s={[1, 0.82, 0.98]} /><Cyl p={[0, t - 0.18, 0]} r={hw + 0.07} h={0.14} c={hatColor(id, 'cuff')} /><Ball p={[0, t + 0.42, 0]} r={0.095} c="#ffffff" /></group>
    }
    case 'party': {
      const c = hatColor(id)
      return <group><Cone p={[0, t + 0.36, 0]} r={hw * 0.74} h={0.9} c={c} /><Ball p={[0, t + 0.84, 0]} r={0.1} c={hatColor(id, 'pom')} /><Ball p={[0.16, t + 0.2, 0.2]} r={0.045} c="#fff" /></group>
    }
    case 'flower': {
      const c = hatColor(id, 'petal')
      return <group>{[0, 1, 2, 3, 4].map((k) => { const a = (k / 5) * Math.PI * 2; return <Ball key={k} p={[Math.cos(a) * hw * 0.42, t + 0.06, Math.sin(a) * hw * 0.42]} r={0.13} c={c} /> })}<Ball p={[0, t + 0.08, 0]} r={0.11} c="#ffe066" /></group>
    }
    case 'shades':
      // à hauteur d'YEUX, et DEVANT le panneau du visage · posées derrière,
      // les glyphes se dessineraient par-dessus les verres
      return <group>{[-1, 1].map((sd) => <Box key={sd} p={[sd * 0.42 * h.x, HEAD_Y + h.y * 0.2, h.z + 0.26]} s={[0.26, 0.16, 0.05]} c="#15151a" />)}<Box p={[0, HEAD_Y + h.y * 0.2, h.z + 0.26]} s={[0.2, 0.045, 0.045]} c="#15151a" /></group>
  }
}

// --- legs + shoes: every bodied skin gets a pair of legs with a shoe; the shoe
// style + colours are picked deterministically so each skin keeps its own kicks
const SHOE_KINDS = ['blob', 'sneaker', 'boot', 'sandal', 'heel', 'sport', 'clog', 'hitop']
const SHOE_COLORS = ['#ffcf3b', '#ff5d6c', '#4fc3f7', '#7bd88f', '#c98cff', '#ff9a52', '#2fe0c0', '#ff7eb6', '#1c2029', '#f4f4f4']
const SOLE_COLORS = ['#45c46a', '#2b3550', '#ffffff', '#e0475f', '#20242f', '#ffd23f']
function shoeForId(id: string) {
  const h = Math.abs(hashCode(id + '·shoe'))
  return {
    kind: SHOE_KINDS[h % SHOE_KINDS.length],
    color: SHOE_COLORS[(h >> 3) % SHOE_COLORS.length],
    sole: SOLE_COLORS[(h >> 6) % SOLE_COLORS.length],
  }
}

function Shoe({ kind, color, sole }: { kind: string; color: string; sole: string }) {
  switch (kind) {
    case 'blob': // fat cartoon shoe (like a mascot boot)
      return <group><Ball p={[0, 0.1, 0.12]} r={0.19} c={color} s={[1, 0.85, 1.5]} /><Box p={[0, -0.01, 0.14]} s={[0.34, 0.09, 0.52]} c={sole} /></group>
    case 'sneaker':
      return <group><Box p={[0, 0.1, 0.04]} s={[0.28, 0.18, 0.32]} c={color} /><Ball p={[0, 0.1, 0.24]} r={0.15} c={color} s={[0.95, 0.85, 1.1]} /><Box p={[0, 0.0, 0.1]} s={[0.32, 0.08, 0.5]} c={sole} /><Box p={[0, 0.15, 0.0]} s={[0.2, 0.05, 0.06]} c="#ffffff" /></group>
    case 'boot':
      return <group><Cyl p={[0, 0.28, 0.0]} r={0.15} h={0.44} c={color} /><Ball p={[0, 0.1, 0.2]} r={0.15} c={color} s={[1, 0.9, 1.2]} /><Box p={[0, 0.0, 0.08]} s={[0.32, 0.08, 0.46]} c={sole} /></group>
    case 'sandal':
      return <group><Box p={[0, 0.04, 0.12]} s={[0.32, 0.07, 0.5]} c={sole} /><Box p={[0, 0.14, 0.16]} s={[0.3, 0.05, 0.14]} c={color} rot={[0.3, 0, 0]} /><Box p={[0, 0.12, 0.02]} s={[0.24, 0.05, 0.1]} c={color} /></group>
    case 'heel':
      return <group><Box p={[0, 0.08, 0.1]} s={[0.24, 0.06, 0.5]} c={color} /><Ball p={[0, 0.1, 0.28]} r={0.12} c={color} s={[1, 0.8, 1.2]} /><Box p={[0, -0.04, -0.16]} s={[0.07, 0.2, 0.07]} c={color} /></group>
    case 'sport':
      return <group><Ball p={[0, 0.11, 0.14]} r={0.17} c={color} s={[1, 0.9, 1.5]} /><Box p={[0, 0.01, 0.14]} s={[0.34, 0.1, 0.52]} c={sole} /><Ball p={[0.08, 0.15, 0.24]} r={0.05} c="#ffffff" /></group>
    case 'clog':
      return <group><Ball p={[0, 0.11, 0.1]} r={0.2} c={color} s={[1, 0.82, 1.4]} /><Box p={[0, 0.0, 0.12]} s={[0.34, 0.06, 0.5]} c={sole} /></group>
    case 'hitop':
    default:
      return <group><Cyl p={[0, 0.24, -0.02]} r={0.14} h={0.34} c={color} /><Box p={[0, 0.1, 0.14]} s={[0.28, 0.16, 0.3]} c={color} /><Ball p={[0, 0.1, 0.28]} r={0.14} c={color} s={[0.95, 0.85, 1.1]} /><Box p={[0, 0.0, 0.1]} s={[0.32, 0.08, 0.5]} c={sole} /></group>
  }
}

function Legs({ id, pants, walk }: { id: string; pants: string; walk?: boolean }) {
  const s = shoeForId(id)
  const left = useRef<THREE.Group>(null)
  const right = useRef<THREE.Group>(null)
  const lift = useRef<[THREE.Group | null, THREE.Group | null]>([null, null])
  const gait = useGait()
  useFrame((st) => {
    if (!walk) return
    const { speed, phase } = gait.current
    const amp = strideAmp(speed)
    // Sans cadence fournie (un personnage marqué `walk` mais que personne ne
    // déplace), on retombe sur l'ancienne horloge : une vitesse de croisière
    // décalée par l'identité, pour que deux voisins ne battent pas ensemble.
    const p = amp > 0.01 ? phase : st.clock.elapsedTime * 7 + hashCode(id) * 0.3
    const a = amp > 0.01 ? amp : 1
    if (left.current) left.current.rotation.x = Math.sin(p) * 0.72 * a
    if (right.current) right.current.rotation.x = Math.sin(p + Math.PI) * 0.72 * a
    // LE PIED SE LÈVE. Une jambe qui ne fait que pivoter autour de la hanche
    // traverse le sol à mi-course — le talon s'enfonçait dans le tatami à
    // chaque pas, et c'est ce qui donnait la démarche glissée. On relève le
    // pied pendant la phase AÉRIENNE seulement, celle où la jambe avance.
    const up = (k: number) => Math.max(0, Math.sin(k)) * 0.14 * a
    if (lift.current[0]) lift.current[0].position.y = up(p)
    if (lift.current[1]) lift.current[1].position.y = up(p + Math.PI)
  })
  return (
    <group>
      {[-0.22, 0.22].map((x, i) => (
        // pivot at the hip (y≈0.62) so the whole leg swings, then offset the
        // leg + shoe back down to the floor.
        <group key={x} ref={i === 0 ? left : right} position={[x, 0.62, 0.14]}>
          <group ref={(el) => { lift.current[i] = el }}>
            <group position={[0, -0.62, 0]}>
              <Limb p={[0, 0.36, 0]} r={0.135} len={0.34} c={pants} />
              <Shoe kind={s.kind} color={s.color} sole={s.sole} />
            </group>
          </group>
        </group>
      ))}
    </group>
  )
}

export function Character3D({
  id,
  character,
  x,
  z,
  mood,
  selected,
  busy,
  title = '',
  onSelect,
  bare = false,
  walk = false,
  grounded = true,
  fn,
  role,
}: {
  id: string
  character: Character
  x: number
  z: number
  mood: Mood
  selected: boolean
  busy: boolean
  name?: string
  title?: string
  level?: number
  onSelect: () => void
  bare?: boolean
  walk?: boolean
  /** y a-t-il un sol sous lui ? · un aperçu d'avatar flotte, et une ombre
   *  de contact y devient une tache sombre suspendue dans le vide */
  grounded?: boolean
  /** le MÉTIER · il habille le personnage (voir ./JobLook3D). Le skin donne
   *  la couleur, que l'utilisateur choisit ; le métier donne le vêtement,
   *  qu'il ne choisit pas. Les deux se combinent sans se marcher dessus. */
  fn?: Department | string
  /** le rôle · filet de sécurité quand `fn` porte une valeur d'un ancien
   *  format sauvegardé dans le navigateur (voir jobOf) */
  role?: string
}) {
  const g = useRef<THREE.Group>(null)
  const [hover, setHover] = useState(false)
  // la cadence · fournie par celui qui le déplace, immobile par défaut
  const gait = useGait()
  const banter = useDojo((s) => s.banter)
  const heroTargetId = useDojo((s) => s.heroTargetId)
  // le métier, résolu une fois · `fn` s'il est valide, le rôle sinon
  const job = jobOf(fn, role)
  // la forme de la tête · une par espèce, et tout ce qui s'y pose s'y réfère
  const head = headOf(character.kind)
  const isSlime = character.kind === 'slime'
  const isOcto = character.kind === 'octopus'
  const isMonitor = character.kind === 'monitor'
  const isGhost = character.kind === 'ghost'
  const isJelly = character.kind === 'jellyfish'
  const isBib = character.kind === 'bibendum'
  const isGeo = character.kind === 'geo'
  // a skin can force a specific accessory (character.acc); otherwise auto-pick
  const forcedAcc = character.acc && (ACCS as string[]).includes(character.acc) ? character.acc as Acc : null
  // Un seul couvre-chef · si le MÉTIER en pose un sur le sommet du crâne, le
  // chapeau tiré au sort passe son tour. Sans ce garde-fou on obtenait une
  // casquette sous un haut-de-forme, et un casque de chantier sous une
  // chevelure de vampire — visible sur capture, et signalé par personne.
  const acc = CROWNED.has(job as never) ? null : (forcedAcc ?? accForId(id, character.kind))
  const speaking = banter && banter.who === 'agent' && banter.agentId === id
  const visited = heroTargetId === id // the Chief is hovering above this agent

  useFrame((state) => {
    if (!g.current) return
    const t = state.clock.elapsedTime
    const happy = mood === 'happy' || mood === 'love'
    const think = mood === 'think'
    const error = mood === 'error'

    // LA MARCHE · le buste, lui aussi. Des jambes qui battent sous un tronc
    // parfaitement immobile, c'est une marionnette sur un rail ; le poids du
    // corps monte et descend à CHAQUE appui, donc deux fois par cycle de pas.
    const amp = strideAmp(gait.current.speed)
    const gp = gait.current.phase

    // vertical: breathing, plus excited jumps when the Chief visits and
    // celebratory hops when a task lands well
    let y = Math.sin(t * 1.6 + x) * 0.03
    if (visited) y += Math.abs(Math.sin(t * 3.2)) * 0.13
    if (busy) y += Math.sin(t * 9 + x) * 0.015
    if (happy) y += Math.max(0, Math.sin(t * 4 + x)) * 0.16
    if (amp > 0.01) y += Math.abs(Math.sin(gp)) * 0.055 * amp
    g.current.position.y = y

    // lean / tilt driven by activity + mood
    let rotX = 0
    if (busy) rotX += 0.1 // hunch over the keyboard
    if (visited) rotX -= 0.2 // look up at the Chief
    if (error) rotX += 0.16 // slump
    // on se penche dans le sens de la marche · un corps qui avance sans
    // pencher se lit comme un corps qu'on POUSSE
    rotX += 0.11 * amp
    // LE SALUT · plié en deux vers l'avant, tout le buste. Il vaut par-dessus
    // le reste : on ne respire pas en saluant son maître.
    rotX += gait.current.bow * 0.62
    let rotZ = 0
    if (think) rotZ = Math.sin(t * 1.4) * 0.13 // pensive head tilt
    if (error) rotZ += Math.sin(t * 26) * 0.06 // frustrated shake
    if (visited) rotZ += Math.sin(t * 2.4) * 0.09 // happy sway toward the Chief
    // le roulis d'épaules de la marche · un demi-cycle par pas
    if (amp > 0.01) rotZ += Math.sin(gp) * 0.07 * amp
    g.current.rotation.x += (rotX - g.current.rotation.x) * 0.12
    g.current.rotation.z += (rotZ - g.current.rotation.z) * 0.3

    // scale: hover + excitement / celebration pulse
    const pulse = (visited ? 0.04 : 0) + (happy ? Math.max(0, Math.sin(t * 4)) * 0.05 : 0)
    const target = (hover ? 1.06 : 1) + pulse
    g.current.scale.lerp(new THREE.Vector3(target, target, target), 0.2)

    // ON SE RETOURNE QUAND QUELQU'UN PARLE AU MAÎTRE.
    //
    // Le coursier traversait la pièce et douze personnes continuaient de
    // taper sans lever les yeux. C'est ce qui faisait que la visite ne
    // comptait pas : un événement que personne dans la salle ne remarque
    // n'est pas un événement.
    //
    // Un coup d'œil PAR-DESSUS L'ÉPAULE, pas un demi-tour : l'estrade est
    // derrière eux, et se retourner complètement pour écouter aurait donné
    // douze dos à la caméra. Le signe de l'angle dit déjà de quel côté se
    // trouve le maître, il suffit de le brider.
    //
    // La nouvelle est LUE, pas reçue par abonnement : douze abonnés auraient
    // re-rendu douze arbres de personnage complets pour tourner douze têtes.
    const heard = peekNews().phase
    const listening = heard === 'greeting' || heard === 'telling'
    let yaw = 0
    if (listening && !bare) {
      const full = Math.atan2(DAIS.x - x, DAIS.z - z)
      yaw = Math.max(-0.68, Math.min(0.68, full))
    }
    g.current.rotation.y += (yaw - g.current.rotation.y) * 0.05
  })

  const events = {
    onClick: (e: any) => {
      e.stopPropagation()
      onSelect()
    },
    onPointerOver: (e: any) => {
      e.stopPropagation()
      setHover(true)
      document.body.style.cursor = 'pointer'
    },
    onPointerOut: () => {
      setHover(false)
      document.body.style.cursor = 'auto'
    },
  }

  return (
    <group position={[x, 0, z]}>
      {grounded && <Contact r={0.95} />}
      {!bare && selected && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
          <ringGeometry args={[0.95, 1.15, 40]} />
          <meshBasicMaterial color={'#ff7eb6'} transparent opacity={0.85} side={THREE.DoubleSide} />
        </mesh>
      )}

      <group ref={g} {...(bare ? {} : events)}>
        {/* Invisible, generous tap target so agents are easy to click/tap even
            though their geometry is small · covers the full standing volume. */}
        {!bare && (
          <mesh position={[0, 1.25, 0]} raycast={undefined}>
            <cylinderGeometry args={[0.95, 0.95, 3, 10]} />
            <meshBasicMaterial transparent opacity={0} depthWrite={false} />
          </mesh>
        )}
        {isSlime ? (
          <group position={[0, 0.05, 0]}>
            <Ball p={[0, 0.78, 0]} r={0.8} c={character.face} s={[1, 0.86, 1]} />
            <Cyl p={[0, 1.5, 0]} r={0.05} h={0.4} c={character.face} />
            <Ball p={[0, 1.78, 0]} r={0.14} c={'#fff'} />
            <Ball p={[0, 1.8, 0.1]} r={0.06} c={'#333'} />
            <group position={[0, 0.92, 0]}><Face3D mood={mood} kind={character.kind} z={0.9} size={1.06} halo={character.face} /></group>
            <Arm side={-1} color={character.face} hand={character.face} busy={busy} />
            <Arm side={1} color={character.face} hand={character.face} busy={busy} wave={visited} />
          </group>
        ) : isOcto ? (
          <group position={[0, 0.05, 0]}>
            {/* bulbous mantle, lifted so the face clears the laptop */}
            <Ball p={[0, 1.78, 0]} r={0.8} c={character.face} s={[1, 1.14, 1]} />
            <Ball p={[-0.3, 2.32, 0.2]} r={0.17} c={character.face} />
            <Ball p={[0.3, 2.32, 0.2]} r={0.17} c={character.face} />
            {/* pale face patch: a round sphere tucked inside the mantle so only
                its front cap pokes out · no side clipping artifacts */}
            <Ball p={[0, 1.74, 0.42]} r={0.52} c={'#ffe6ef'} />
            {/* rosy cheeks + big, high-contrast ASCII expression */}
            <Ball p={[-0.5, 1.58, 0.62]} r={0.12} c={'#ff8fa3'} />
            <Ball p={[0.5, 1.58, 0.62]} r={0.12} c={'#ff8fa3'} />
            <group position={[0, 1.76, 0]}><Face3D mood={mood} kind={character.kind} z={0.98} size={1.22} halo={'#ffe6ef'} /></group>
            {/* eight tentacles splaying out around the mantle */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const ang = (i / 8) * Math.PI * 2 + 0.4
              const dir: [number, number] = [Math.cos(ang) * 1.1, Math.sin(ang) * 0.7 + 0.35]
              return (
                <Tentacle
                  key={i}
                  base={[Math.cos(ang) * 0.42, 1.28, Math.sin(ang) * 0.3 + 0.12]}
                  dir={dir}
                  color={i % 2 ? character.face : character.outfit}
                  phase={i * 0.8}
                  busy={busy || visited}
                />
              )
            })}
          </group>
        ) : isGhost ? (
          <group position={[0, 0.35, 0]}>
            {/* floaty sheet: rounded dome + wavy skirt, translucent */}
            <mesh position={[0, 1.5, 0]} castShadow>
              <sphereGeometry args={[0.72, 22, 20]} />
              <Mat color={character.face} transparent opacity={0.9} {...MAT} />
            </mesh>
            <mesh position={[0, 1.02, 0]}>
              <cylinderGeometry args={[0.72, 0.82, 0.9, 22]} />
              <Mat color={character.face} transparent opacity={0.9} {...MAT} />
            </mesh>
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const a = (i / 6) * Math.PI * 2
              return (
                <mesh key={i} position={[Math.cos(a) * 0.68, 0.52, Math.sin(a) * 0.68]}>
                  <coneGeometry args={[0.16, 0.4, 12]} />
                  <Mat color={character.face} transparent opacity={0.85} {...MAT} />
                </mesh>
              )
            })}
            {/* little arm nubs */}
            <Ball p={[-0.78, 1.28, 0.1]} r={0.16} c={character.face} />
            <Ball p={[0.78, 1.28, 0.1]} r={0.16} c={character.face} />
            <group position={[0, 1.52, 0]}><Face3D mood={mood} kind={character.kind} z={0.72} size={1.06} halo={character.face} /></group>
          </group>
        ) : isJelly ? (
          <group position={[0, 0.15, 0]}>
            {/* translucent bell */}
            <mesh position={[0, 1.95, 0]} scale={[1, 0.82, 1]} castShadow>
              <sphereGeometry args={[0.82, 24, 20]} />
              <Mat color={character.face} emissive={character.outfit} emissiveIntensity={0.25} transparent opacity={0.7} roughness={0.3} />
            </mesh>
            <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.78, 0.1, 12, 28]} />
              <Mat color={character.outfit2} transparent opacity={0.75} {...MAT} />
            </mesh>
            <group position={[0, 1.9, 0]}><Face3D mood={mood} kind={character.kind} z={0.78} size={1.06} halo={character.face} /></group>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
              const a = (i / 8) * Math.PI * 2
              return <JellyLeg key={i} base={[Math.cos(a) * 0.6, 1.45, Math.sin(a) * 0.6]} color={i % 2 ? character.face : character.outfit} phase={i * 0.8} busy={busy || visited} />
            })}
          </group>
        ) : isBib ? (
          <group position={[0, 0.05, 0]}>
            <Legs id={id} pants={character.pants} walk={walk} />
            {/* puffy stacked tire-man */}
            <Ball p={[0, 0.66, 0.32]} r={0.56} c={character.face} />
            <Ball p={[0, 1.16, 0.06]} r={0.62} c={character.face} />
            <Ball p={[0, 1.62, 0]} r={0.48} c={character.face} />
            <Ball p={[-0.5, 1.34, 0.04]} r={0.2} c={character.face} />
            <Ball p={[0.5, 1.34, 0.04]} r={0.2} c={character.face} />
            {/* dark tire grooves */}
            {[0.92, 1.4].map((gy) => (
              <mesh key={gy} position={[0, gy, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.55, 0.04, 8, 24]} />
                <Mat color={character.outfit2} {...MAT} />
              </mesh>
            ))}
            <Ball p={[0, 2.12, 0]} r={0.5} c={character.face} />
            <group position={[0, 2.14, 0]}><Face3D mood={mood} kind={character.kind} z={0.5} size={0.91} halo={character.face} /></group>
            <Arm side={-1} color={character.face} hand={character.face} busy={busy} />
            <Arm side={1} color={character.face} hand={character.face} busy={busy} wave={visited} />
          </group>
        ) : isGeo ? (
          <GeoBody c={character} mood={mood} />
        ) : (
          <group>
            {/* legs + shoes (mostly tucked under the desk in the office, shown in previews) */}
            <Legs id={id} pants={character.pants} walk={walk} />
            {/* torse · plus petit que la tête, comme sur une figurine */}
            <Ball p={[0, 1.06, 0]} r={0.44} c={character.outfit} s={[1, 1.02, 0.9]} />
            {/* épaules, rentrées sous la tête */}
            <Ball p={[-0.37, 1.22, 0.02]} r={0.15} c={character.outfit} />
            <Ball p={[0.37, 1.22, 0.02]} r={0.15} c={character.outfit} />
            {/* La TENUE · un col, une ceinture et un écusson. Le torse était
                une sphère d'une seule couleur : à cette distance il se lisait
                comme un ballon sous une tête, pas comme quelqu'un d'habillé.
                Trois anneaux suffisent à donner un vêtement. */}
            {/* Les rayons ne sont pas choisis à l'œil : le torse est un
                ellipsoïde de demi-hauteur 0,52, donc son rayon à la hauteur y
                vaut 0,5·√(1−(Δy/0,52)²). Un premier essai avec des valeurs
                devinées a enterré col et ceinture À L'INTÉRIEUR de la sphère —
                trois anneaux invisibles, rendus à chaque image pour rien. */}
            <mesh position={[0, 1.36, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.32, 0.07, 8, 22]} />
              <Mat color={character.outfit2} {...MAT} />
            </mesh>
            <mesh position={[0, 0.88, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.4, 0.05, 8, 24]} />
              <Mat color={character.outfit2} {...MAT} />
            </mesh>
            {/* la boucle de ceinture */}
            <mesh position={[0, 0.88, 0.4]}>
              <boxGeometry args={[0.16, 0.13, 0.07]} />
              <Mat color={character.extra} roughness={0.35} metalness={0.3} />
            </mesh>
            {job && <JobBody fn={job} accent={character.extra} />}
            {/* l'écusson · la touche d'accent, à hauteur de cœur */}
            <mesh position={[-0.17, 1.14, 0.39]} rotation={[0.1, 0.35, 0]}>
              <circleGeometry args={[0.095, 16]} />
              <Mat color={character.extra} roughness={0.4} side={THREE.DoubleSide} />
            </mesh>
            {isMonitor ? (
              <group position={[0, HEAD_LIFT, 0]}><MonitorHead c={character} mood={mood} /></group>
            ) : (
              <group position={[0, HEAD_LIFT, 0]}>
              <AboutY y={HEAD_Y} scale={HEAD_S}>
                {/* la coquille · cube, rectangle, ronde ou ovale selon l'espèce */}
                <HeadShell h={head} c={character.face} />
                {/* les joues · aplaties CONTRE la face avant. Sur une boîte
                    elles disparaissaient dedans ; sur une sphère elles
                    dépassaient toutes seules. Les deux cas se règlent en les
                    accrochant à la profondeur de la tête plutôt qu'à un
                    nombre écrit à la main. */}
                {[-1, 1].map((sd) => (
                  <Ball key={sd} p={[sd * head.x * 0.62, HEAD_Y - head.y * 0.26, head.z * 0.9]} r={0.12} c={'#ff8fa3'} s={[1, 0.8, 0.4]} />
                ))}
                <Toppers c={character} h={head} />
                {/* le visage · ENFANT de la tête, immobile dans son repère.
                    Un plan plat posé juste devant le crâne est devant lui
                    PARTOUT : la surface d'une sphère ou d'une boîte ne dépasse
                    jamais son propre z maximal. Plus de bataille de
                    profondeur, plus de glyphes avalés par un museau. */}
                <group position={[0, HEAD_Y, 0]}>
                  <Face3D mood={mood} kind={character.kind} z={head.z + 0.04} size={head.x * 1.95} halo={character.face} />
                </group>
                {job && <JobHead fn={job} accent={character.extra} h={head} />}
                {acc && <Accessory kind={acc} id={id} h={head} />}
              </AboutY>
              </group>
            )}
            {/* typing arms · the right one waves hello when the Chief drops by */}
            <Arm side={-1} color={character.outfit} hand={character.face} busy={busy} />
            <Arm side={1} color={character.outfit} hand={character.face} busy={busy} wave={visited} />
          </group>
        )}
      </group>

      {/* L'étiquette se pose AU-DESSUS de ce que le personnage porte. À 2,95
          elle était calée sur une tête nue ; un haut-de-forme ou un chapeau de
          sorcier monte bien plus haut, et sur les captures de l'application les
          noms se lisaient À TRAVERS les chapeaux. */}
      {!bare && (
        <Html position={[0, isSlime ? 2.6 : 3.55, 0]} center distanceFactor={11} zIndexRange={[6, 0]} pointerEvents="none" occlude={false}>
          <div className={`tag3d ${selected ? 'sel' : ''}`}>
            {title}
          </div>
        </Html>
      )}
      {/* the agent's line of the conversation with the brain */}
      {!bare && speaking && (
        <Html position={[0.8, isSlime ? 2.2 : 2.75, 0]} center distanceFactor={9} zIndexRange={[8, 0]} pointerEvents="none">
          <div className="bubble3d">{banter.text}</div>
        </Html>
      )}
      {!bare && busy && (
        <Html position={[0, isSlime ? 3.05 : 4.0, 0]} center distanceFactor={12} zIndexRange={[6, 0]} pointerEvents="none">
          <div className="work3d" />
        </Html>
      )}
    </group>
  )
}

