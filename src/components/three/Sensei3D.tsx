// Le maître du dojo · la mascotte de l'entreprise, devant l'équipe.
//
// C'était un panda. Un panda est mignon, mais il ne dit rien du produit :
// ce lieu est un DOJO, et ce qu'on attend devant une équipe qu'on dirige,
// c'est le maître. Il encourage au repos, il danse quand une tâche tombe,
// et un clic sur lui ouvre le tableau de bord — le comportement est
// exactement celui d'avant, seule la silhouette change.
//
// Mêmes proportions que les personnages : la tête fait la moitié de la
// hauteur, les membres sont des capsules, la matière est du vinyle. Un
// maître dessiné dans une autre grammaire que son équipe se lirait comme
// une pièce rapportée.
import { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useDojo } from '../../store'
import { VINYL, MATTE } from './toy'
import { Contact } from './Contact'

const SKIN = '#f6d3ae'   // teint
const ROBE = '#2f3a63'   // indigo profond · le gi
const ROBE2 = '#243052'  // ombre du gi
const BELT = '#1b1f2c'   // ceinture noire
const HAIR = '#f2f4f8'   // cheveux et barbe blancs
const WOOD = '#8a5f36'

function Sp({ p, r, c, s = [1, 1, 1] as [number, number, number], mat = VINYL }: { p: [number, number, number]; r: number; c: string; s?: [number, number, number]; mat?: object }) {
  return (
    <mesh position={p} scale={s} castShadow>
      <sphereGeometry args={[r, 20, 18]} />
      <meshStandardMaterial color={c} {...mat} />
    </mesh>
  )
}
function Bx({ p, s, c, rot, mat = VINYL }: { p: [number, number, number]; s: [number, number, number]; c: string; rot?: [number, number, number]; mat?: object }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <boxGeometry args={s} />
      <meshStandardMaterial color={c} {...mat} />
    </mesh>
  )
}
function Cap({ p, r, len, c, rot, mat = VINYL }: { p: [number, number, number]; r: number; len: number; c: string; rot?: [number, number, number]; mat?: object }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <capsuleGeometry args={[r, len, 6, 14]} />
      <meshStandardMaterial color={c} {...mat} />
    </mesh>
  )
}

// Ses répliques · aucun emoji, que de l'entrain. Au repos elles tournent ;
// une tâche terminée en choisit une de fête pendant qu'il danse.
const IDLE = ['Breathe. Then ship.', 'One task at a time.', 'The team is ready.', 'Small steps, every day.', 'Patience builds companies.', 'Focus is a muscle.', 'Begin where you stand.']
const HYPE = ['Well struck!', 'That is the way.', 'Another one done.', 'The form was clean.', 'Your team grows stronger.', 'Excellent. Again.', 'That is mastery.']
const pick = (a: string[]) => a[Math.floor(Math.random() * a.length)]

/** Le maître du dojo · il encourage l'équipe et danse à chaque tâche
 *  terminée. `bare` retire les bulles et le clic : le hero le montre, il ne
 *  le fait pas parler. `at` le déplace — au centre devant l'équipe dans
 *  l'application, sur le côté dans le hero, où le centre est occupé par la
 *  carte de verre. */
export function Sensei3D({ bare = false, at = [0, 0, 6.2] as [number, number, number] }: { bare?: boolean; at?: [number, number, number] }) {
  const cheer = useDojo((s) => s.cheer)
  const cheerTick = useDojo((s) => s.cheerTick)
  const g = useRef<THREE.Group>(null)
  const armL = useRef<THREE.Group>(null)
  const armR = useRef<THREE.Group>(null)
  const beard = useRef<THREE.Group>(null)
  const [hover, setHover] = useState(false)
  const [bubble, setBubble] = useState(IDLE[0])
  const [party, setParty] = useState(false)

  const clockNow = useRef(0)
  const danceEnd = useRef(0)

  useEffect(() => {
    if (bare) return
    const id = window.setInterval(() => { if (clockNow.current > danceEnd.current) setBubble(pick(IDLE)) }, 6500)
    return () => window.clearInterval(id)
  }, [bare])

  useEffect(() => {
    if (bare || cheerTick === 0) return
    danceEnd.current = clockNow.current + 3.4
    setBubble(pick(HYPE))
    setParty(true)
    const id = window.setTimeout(() => setParty(false), 2600)
    return () => window.clearTimeout(id)
  }, [cheerTick, bare])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    clockNow.current = t
    const dancing = t < danceEnd.current
    if (g.current) {
      const sc = (hover ? 1.06 : 1) * (dancing ? 1.04 : 1)
      g.current.scale.lerp(new THREE.Vector3(sc, sc, sc), 0.2)
      if (dancing) {
        g.current.position.y = Math.abs(Math.sin(t * 9)) * 0.5
        g.current.rotation.y = Math.sin(t * 7) * 0.5
        g.current.rotation.z = Math.sin(t * 12) * 0.1
      } else {
        // respiration lente · un maître ne s'agite pas
        g.current.position.y = THREE.MathUtils.lerp(g.current.position.y, Math.sin(t * 1.4) * 0.05, 0.1)
        g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, 0, 0.1)
        g.current.rotation.z = Math.sin(t * 1.1) * 0.02
      }
    }
    // la barbe suit le mouvement avec un temps de retard · c'est ce
    // décalage qui la fait lire comme de la matière et non comme un bloc
    if (beard.current) beard.current.rotation.x = Math.sin(t * (dancing ? 8 : 1.3)) * (dancing ? 0.22 : 0.05)
    const wave = dancing ? -2.2 + Math.sin(t * 16) * 0.5 : 0
    if (armL.current) armL.current.rotation.z = THREE.MathUtils.lerp(armL.current.rotation.z, wave, 0.25)
    if (armR.current) armR.current.rotation.z = THREE.MathUtils.lerp(armR.current.rotation.z, -wave, 0.25)
  })

  const events = bare ? {} : {
    onClick: (e: { stopPropagation: () => void }) => { e.stopPropagation(); cheer() },
    onPointerOver: (e: { stopPropagation: () => void }) => { e.stopPropagation(); setHover(true); document.body.style.cursor = 'pointer' },
    onPointerOut: () => { setHover(false); document.body.style.cursor = 'auto' },
  }

  return (
    <group position={at} {...events}>
      {/* l'ombre de contact · sans elle il flotte un centimètre au-dessus
          du plancher, comme toute l'équipe avant lui */}
      <Contact r={1.15} />
      <group ref={g}>
        {/* ---- le gi · une robe qui s'évase vers le sol -------------- */}
        <mesh position={[0, 0.52, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.46, 0.86, 1.04, 22]} />
          <meshStandardMaterial color={ROBE} {...MATTE} />
        </mesh>
        {/* le pan croisé, en biais sur la poitrine */}
        <Bx p={[0.06, 0.86, 0.4]} s={[0.62, 0.5, 0.06]} c={ROBE2} rot={[0, 0, -0.5]} mat={MATTE} />
        {/* ceinture noire + son nœud */}
        <mesh position={[0, 0.72, 0]} castShadow>
          <cylinderGeometry args={[0.62, 0.66, 0.17, 22]} />
          <meshStandardMaterial color={BELT} {...MATTE} />
        </mesh>
        <Bx p={[0, 0.7, 0.6]} s={[0.26, 0.2, 0.12]} c={BELT} mat={MATTE} />
        <Cap p={[-0.12, 0.5, 0.62]} r={0.05} len={0.28} c={BELT} rot={[0.3, 0, 0.25]} mat={MATTE} />
        <Cap p={[0.12, 0.5, 0.62]} r={0.05} len={0.28} c={BELT} rot={[0.3, 0, -0.25]} mat={MATTE} />
        {/* sandales de bois qui dépassent sous la robe */}
        <Bx p={[-0.22, 0.05, 0.3]} s={[0.26, 0.1, 0.44]} c={WOOD} mat={MATTE} />
        <Bx p={[0.22, 0.05, 0.3]} s={[0.26, 0.1, 0.44]} c={WOOD} mat={MATTE} />

        {/* ---- les bras · manches larges, mains nues ------------------ */}
        <group ref={armL} position={[-0.52, 1.0, 0.1]}>
          <Cap p={[-0.1, -0.22, 0]} r={0.17} len={0.3} c={ROBE} rot={[0, 0, 0.18]} mat={MATTE} />
          <Sp p={[-0.16, -0.5, 0.04]} r={0.13} c={SKIN} />
        </group>
        <group ref={armR} position={[0.52, 1.0, 0.1]}>
          <Cap p={[0.1, -0.22, 0]} r={0.17} len={0.3} c={ROBE} rot={[0, 0, -0.18]} mat={MATTE} />
          <Sp p={[0.16, -0.5, 0.04]} r={0.13} c={SKIN} />
        </group>

        {/* ---- la tête · moitié de la silhouette, comme l'équipe ------ */}
        <group position={[0, 1.66, 0.04]}>
          <Sp p={[0, 0, 0]} r={0.6} c={SKIN} />
          {/* oreilles */}
          <Sp p={[-0.56, -0.04, 0]} r={0.14} c={SKIN} s={[0.6, 1, 0.8]} />
          <Sp p={[0.56, -0.04, 0]} r={0.14} c={SKIN} s={[0.6, 1, 0.8]} />
          {/* couronne de cheveux + chignon · le crâne est dégarni sur le dessus */}
          <mesh position={[0, 0.1, -0.04]} castShadow>
            <torusGeometry args={[0.52, 0.11, 10, 26]} />
            <meshStandardMaterial color={HAIR} {...MATTE} />
          </mesh>
          <Sp p={[0, 0.5, -0.24]} r={0.19} c={HAIR} mat={MATTE} />
          <Cap p={[0, 0.68, -0.26]} r={0.06} len={0.14} c={HAIR} mat={MATTE} />
          {/* sourcils épais et tombants */}
          <Cap p={[-0.24, 0.16, 0.5]} r={0.055} len={0.2} c={HAIR} rot={[0, 0, 1.25]} mat={MATTE} />
          <Cap p={[0.24, 0.16, 0.5]} r={0.055} len={0.2} c={HAIR} rot={[0, 0, -1.25]} mat={MATTE} />
          {/* yeux calmes, mi-clos · deux traits, pas deux billes */}
          <Bx p={[-0.22, 0.0, 0.56]} s={[0.17, 0.045, 0.03]} c="#22252d" />
          <Bx p={[0.22, 0.0, 0.56]} s={[0.17, 0.045, 0.03]} c="#22252d" />
          {/* joues */}
          <Sp p={[-0.36, -0.14, 0.44]} r={0.11} c="#ff9fae" s={[1, 0.8, 0.6]} />
          <Sp p={[0.36, -0.14, 0.44]} r={0.11} c="#ff9fae" s={[1, 0.8, 0.6]} />
          {/* nez + moustache */}
          <Sp p={[0, -0.12, 0.58]} r={0.08} c="#efbf95" />
          <Cap p={[-0.13, -0.24, 0.52]} r={0.045} len={0.12} c={HAIR} rot={[0, 0, 1.4]} mat={MATTE} />
          <Cap p={[0.13, -0.24, 0.52]} r={0.045} len={0.12} c={HAIR} rot={[0, 0, -1.4]} mat={MATTE} />
          {/* la barbe · trois volumes qui s'affinent, suspendus au menton */}
          <group ref={beard} position={[0, -0.34, 0.34]}>
            <Sp p={[0, -0.12, 0]} r={0.26} c={HAIR} s={[1, 1.1, 0.8]} mat={MATTE} />
            <Sp p={[0, -0.38, -0.02]} r={0.19} c={HAIR} s={[1, 1.2, 0.8]} mat={MATTE} />
            <Cap p={[0, -0.64, -0.03]} r={0.09} len={0.2} c={HAIR} mat={MATTE} />
          </group>
        </group>
      </group>

      {/* ---- le bâton de bambou, planté à côté de lui ---------------- */}
      <group position={[0.95, 0, 0.1]} rotation={[0, 0, 0.06]}>
        <mesh position={[0, 1.12, 0]} castShadow>
          <cylinderGeometry args={[0.055, 0.06, 2.24, 12]} />
          <meshStandardMaterial color="#8fae4a" {...MATTE} />
        </mesh>
        {[0.45, 1.0, 1.55, 2.05].map((y) => (
          <mesh key={y} position={[0, y, 0]} castShadow>
            <cylinderGeometry args={[0.07, 0.07, 0.06, 12]} />
            <meshStandardMaterial color="#7a9a3a" {...MATTE} />
          </mesh>
        ))}
      </group>

      {!bare && party && (
        <Html position={[0, 3.05, 0.2]} center distanceFactor={12} zIndexRange={[9, 0]} pointerEvents="none">
          <div className="panda-confetti" aria-hidden>{Array.from({ length: 10 }).map((_, i) => <span key={i} style={{ ['--i' as string]: i }} />)}</div>
        </Html>
      )}
      {!bare && (
        <Html position={[0, 2.72, 0.2]} center distanceFactor={12} zIndexRange={[8, 0]} pointerEvents="none">
          <div className={`panda-bubble${party ? ' hype' : ''}`}>{bubble}</div>
        </Html>
      )}
      {!bare && (
        <Html position={[0, 2.12, 0]} center distanceFactor={12} zIndexRange={[6, 0]} pointerEvents="none">
          <div className="tag3d panda">Sensei · dojo master</div>
        </Html>
      )}
    </group>
  )
}
