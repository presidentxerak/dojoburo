import { useRef, useEffect, useState, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Character3D } from '../three/Character3D'
import { SKINS, skinById } from '../../data/skins'

// A full-3D dojo diorama that slowly rotates as the landing hero, with a
// vertical-scroll parallax. A little tatami island: torii gate, cherry tree,
// desks and a seated kawaii crew — the office, in miniature.

const MAT = { roughness: 0.6, metalness: 0.05 }
function Box({ p, s, c, r }: { p: [number, number, number]; s: [number, number, number]; c: string; r?: [number, number, number] }) {
  return <mesh position={p} scale={s} rotation={r} castShadow receiveShadow><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color={c} {...MAT} /></mesh>
}
function Ball({ p, r, c }: { p: [number, number, number]; r: number; c: string }) {
  return <mesh position={p} castShadow><sphereGeometry args={[r, 18, 16]} /><meshStandardMaterial color={c} {...MAT} /></mesh>
}

// pick four visually distinct skins for the mini crew
const CREW = ['forest-dragon', 'space-ghost', 'retro-frog', 'space-bibendum']
  .map((id) => SKINS.find((s) => s.id === id)?.id ?? SKINS[0].id)

function Spin({ children }: { children: ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => { if (g.current) g.current.rotation.y = s.clock.elapsedTime * 0.22 })
  return <group ref={g}>{children}</group>
}

function Desk({ x, z, skin, i }: { x: number; z: number; skin: string; i: number }) {
  return (
    <group position={[x, 0, z]}>
      {/* wood desk + legs */}
      <Box p={[0, 0.62, 0.35]} s={[1.5, 0.16, 0.9]} c="#a9743f" />
      {[[-0.6, 0.05], [0.6, 0.05], [-0.6, 0.66], [0.6, 0.66]].map(([lx, lz], k) => <Box key={k} p={[lx, 0.3, lz]} s={[0.1, 0.6, 0.1]} c="#7a5330" />)}
      {/* laptop */}
      <Box p={[0, 0.78, 0.5]} s={[0.7, 0.05, 0.5]} c="#22242e" />
      <Box p={[0, 0.98, 0.72]} s={[0.7, 0.44, 0.05]} c="#22242e" r={[-0.3, 0, 0]} />
      {/* seated agent */}
      <group scale={0.72} position={[0, 0, -0.15]}>
        <Character3D bare id={`d${i}`} character={skinById(skin)} x={0} z={0} mood="work" selected={false} busy name="" level={1} onSelect={() => {}} />
      </group>
    </group>
  )
}

function Scene() {
  return (
    <Spin>
      <group scale={0.86} position={[0, -0.7, 0]}>
        {/* tatami island */}
        <mesh position={[0, -0.05, 0]} receiveShadow><cylinderGeometry args={[4.4, 4.6, 0.5, 56]} /><meshStandardMaterial color="#a6d15f" {...MAT} /></mesh>
        <mesh position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[4.2, 4.4, 56]} /><meshBasicMaterial color="#7fae3f" side={THREE.DoubleSide} /></mesh>
        {/* torii gate at the back */}
        <group position={[0, 0, -2.9]}>
          <Box p={[-1.4, 1.5, 0]} s={[0.26, 3.0, 0.26]} c="#e0432f" />
          <Box p={[1.4, 1.5, 0]} s={[0.26, 3.0, 0.26]} c="#e0432f" />
          <Box p={[0, 3.2, 0]} s={[3.9, 0.32, 0.38]} c="#e0432f" />
          <Box p={[0, 2.75, 0]} s={[3.2, 0.22, 0.3]} c="#c9381f" />
        </group>
        {/* cherry tree, tucked into a back corner so it never blocks the view */}
        <group position={[-3.1, 0, -1.9]}>
          <Box p={[0, 0.8, 0]} s={[0.26, 1.6, 0.26]} c="#8a5a34" />
          <Ball p={[0, 1.85, 0]} r={0.78} c="#ff9ec7" />
          <Ball p={[-0.5, 1.55, 0.15]} r={0.5} c="#ffb3d6" />
          <Ball p={[0.45, 1.6, -0.15]} r={0.44} c="#ff8fc0" />
        </group>
        {/* stone lantern */}
        <group position={[3.3, 0, -2.2]}>
          <Box p={[0, 0.4, 0]} s={[0.44, 0.8, 0.44]} c="#9aa4ab" />
          <Ball p={[0, 1.1, 0]} r={0.38} c="#b3bcc4" />
          <Box p={[0, 1.5, 0]} s={[0.72, 0.14, 0.72]} c="#9aa4ab" />
        </group>
        {/* seated crew, facing outward toward the camera */}
        <Desk x={-1.6} z={0.9} skin={CREW[0]} i={0} />
        <Desk x={1.6} z={0.9} skin={CREW[1]} i={1} />
        <Desk x={-1.6} z={-0.9} skin={CREW[2]} i={2} />
        <Desk x={1.6} z={-0.9} skin={CREW[3]} i={3} />
      </group>
    </Spin>
  )
}

/** The rotating dojo hero with vertical-scroll parallax. */
export function DojoDiorama() {
  const ref = useRef<HTMLDivElement>(null)
  const [t, setT] = useState(0)
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setT(window.scrollY || 0))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [])
  return (
    <div className="lp-dojo3d" ref={ref} style={{ transform: `translateY(${(t * -0.12).toFixed(1)}px) scale(${Math.max(0.86, 1 - t * 0.0004)})` }}>
      <Canvas shadows camera={{ position: [0, 6.4, 15], fov: 30 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
        <hemisphereLight args={['#ffffff', '#cfe0ff', 0.95]} />
        <directionalLight position={[6, 10, 6]} intensity={1.25} castShadow shadow-mapSize={[1024, 1024]} />
        <Scene />
      </Canvas>
    </div>
  )
}
