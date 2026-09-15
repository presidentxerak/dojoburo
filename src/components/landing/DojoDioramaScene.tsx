// The three.js half of the hero diorama · reached only through ./DojoDiorama.
import { useRef, useEffect, useState, type ReactNode } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Character3D } from '../three/Character3D'
import { StudioLight } from '../three/StudioLight'
import { MATTE } from '../three/toy'
import { SKINS, skinById } from '../../data/skins'

// A full-3D dojo diorama that slowly rotates as the landing hero, with a
// vertical-scroll parallax. A little tatami island: torii gate, cherry tree,
// desks and a seated kawaii crew · the office, in miniature.

// Bois, pierre, herbe · la matière de décor partagée par tout le jeu. Elle
// porte son propre envMapIntensity : avec la valeur par défaut (1), la carte
// d'environnement s'ajoutait à l'hémisphère ET à la clé, et la scène entière
// virait au délavé — le torii sortait orange au lieu de rouge.
const MAT = MATTE
function Box({ p, s, c, r }: { p: [number, number, number]; s: [number, number, number]; c: string; r?: [number, number, number] }) {
  return <mesh position={p} scale={s} rotation={r} castShadow receiveShadow><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color={c} {...MAT} /></mesh>
}
function Ball({ p, r, c }: { p: [number, number, number]; r: number; c: string }) {
  return <mesh position={p} castShadow><sphereGeometry args={[r, 18, 16]} /><meshStandardMaterial color={c} {...MAT} /></mesh>
}

// Quatre silhouettes distinctes, choisies par ESPÈCE et non par identifiant :
// les identifiants sont générés (`${thème}-${espèce}`) et toutes les paires
// n'existent pas, si bien qu'un id écrit à la main retombait en silence sur
// SKINS[0]. Le « Puffy » précédent était une boule rose plus haute que le
// torii, qui masquait la moitié de l'île quand la scène tournait.
const CREW = ['cat', 'dragon', 'rabbit', 'panda']
  .map((k) => SKINS.find((s) => s.kind === k)?.id ?? SKINS[0].id)

/** Un balancement, pas un tour complet. L'île tournait sur 360° : pendant la
 *  moitié du cycle on ne voyait plus que le DOS de l'équipe, et un hero dont
 *  les personnages tournent le dos la moitié du temps ne montre rien. Elle
 *  oscille maintenant de ±24°, ce qui garde le mouvement et les visages. */
function Spin({ children }: { children: ReactNode }) {
  const g = useRef<THREE.Group>(null)
  useFrame((s) => { if (g.current) g.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.26) * 0.42 })
  return <group ref={g}>{children}</group>
}

/** Cadrage responsive. Un objectif unique ne peut pas tenir dans un écran
 *  16/9 ET dans un téléphone en 9/19,5 : à fov fixe, l'île débordait des
 *  deux côtés sur mobile (capture 390 px : le torii sortait du cadre).
 *  On élargit l'objectif et on recule à mesure que le cadre se resserre, et
 *  on vise SOUS l'île pour la faire remonter au-dessus de la carte. */
function Frame() {
  const camera = useThree((s) => s.camera)
  const w = useThree((s) => s.size.width)
  const h = useThree((s) => s.size.height)
  useEffect(() => {
    const a = w / Math.max(1, h)
    const cam = camera as THREE.PerspectiveCamera
    const wide = a >= 1.5, mid = a >= 1
    cam.fov = wide ? 30 : mid ? 36 : 46
    cam.position.set(0, wide ? 7.8 : mid ? 8.6 : 11.2, wide ? 15.4 : mid ? 16.5 : 20.5)
    // la cible sous le sol remonte la scène dans l'image · la carte en verre
    // occupe le bas, le dojo occupe le haut, et rien ne se cache derrière
    cam.lookAt(0, wide ? -2.1 : mid ? -2.6 : -3.4, 0)
    cam.updateProjectionMatrix()
  }, [camera, w, h])
  return null
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
      <group scale={0.62} position={[0, 0, -0.15]}>
        <Character3D bare id={`d${i}`} character={skinById(skin)} x={0} z={0} mood="work" selected={false} busy name="" level={1} onSelect={() => {}} />
      </group>
    </group>
  )
}

/** Le seul objet réfractant de la scène. `transmission` oblige three.js à
 *  rendre la scène une seconde fois dans une cible hors écran à chaque
 *  image : c'est le poste le plus cher du rendu. Un bassin, et un seul —
 *  la réfraction doit se voir, pas se payer douze fois. */
function Pond() {
  return (
    <group position={[0, 0.2, 2.0]}>
      {/* margelle de pierre */}
      <mesh position={[0, -0.03, 0]} receiveShadow>
        <cylinderGeometry args={[1.02, 1.02, 0.14, 40]} />
        <meshStandardMaterial color="#8f9aa2" roughness={0.85} metalness={0.04} />
      </mesh>
      {/* fond sombre, pour que l'eau ait quelque chose à déformer */}
      <mesh position={[0, 0.0, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.06, 36]} />
        <meshStandardMaterial color="#1b4c5a" roughness={0.9} />
      </mesh>
      {/* l'eau · verre épais, très lisse, légèrement teinté */}
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.9, 0.9, 0.16, 48]} />
        <meshPhysicalMaterial
          color="#bff0ff"
          transmission={1}
          thickness={0.55}
          ior={1.33}
          roughness={0.06}
          metalness={0}
          transparent
          opacity={1}
        />
      </mesh>
      {/* nénuphar */}
      <mesh position={[0.34, 0.17, 0.18]} rotation={[-Math.PI / 2, 0, 0.4]} castShadow>
        <circleGeometry args={[0.22, 20]} />
        <meshStandardMaterial color="#4f9d4a" roughness={0.7} side={THREE.DoubleSide} />
      </mesh>
      <Ball p={[0.3, 0.24, 0.1]} r={0.07} c="#ff9ec7" />
    </group>
  )
}

function Scene() {
  return (
    <Spin>
      <group scale={0.86} position={[0, -0.7, 0]}>
        {/* tatami island */}
        <mesh position={[0, -0.05, 0]} receiveShadow><cylinderGeometry args={[4.4, 4.6, 0.5, 56]} /><meshStandardMaterial color="#93c74d" {...MAT} /></mesh>
        <mesh position={[0, 0.22, 0]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[4.2, 4.4, 56]} /><meshBasicMaterial color="#5f8c2c" side={THREE.DoubleSide} /></mesh>
        {/* torii gate at the back */}
        <group position={[0, 0, -2.55]}>
          <Box p={[-1.18, 1.35, 0]} s={[0.24, 2.7, 0.24]} c="#e0432f" />
          <Box p={[1.18, 1.35, 0]} s={[0.24, 2.7, 0.24]} c="#e0432f" />
          <Box p={[0, 2.88, 0]} s={[3.3, 0.28, 0.34]} c="#e0432f" />
          <Box p={[0, 2.48, 0]} s={[2.7, 0.2, 0.26]} c="#c9381f" />
        </group>
        {/* cherry tree, tucked into a back corner so it never blocks the view */}
        <group position={[-3.4, 0, -2.5]}>
          <Box p={[0, 0.72, 0]} s={[0.22, 1.44, 0.22]} c="#8a5a34" />
          <Ball p={[0, 1.6, 0]} r={0.6} c="#ff9ec7" />
          <Ball p={[-0.38, 1.36, 0.12]} r={0.38} c="#ffb3d6" />
          <Ball p={[0.34, 1.4, -0.12]} r={0.34} c="#ff8fc0" />
        </group>
        {/* lanterne de pierre · socle, fût, chambre de feu allumée, toit à
            pans et bouton. La version précédente — un cube surmonté d'une
            boule et d'une dalle — se lisait comme une cuvette de toilettes. */}
        <group position={[3.3, 0, -2.2]}>
          <Box p={[0, 0.12, 0]} s={[0.78, 0.24, 0.78]} c="#8d979e" />
          <Box p={[0, 0.62, 0]} s={[0.3, 0.8, 0.3]} c="#9aa4ab" />
          <Box p={[0, 1.06, 0]} s={[0.62, 0.12, 0.62]} c="#8d979e" />
          {/* chambre de feu · quatre montants et une lumière au milieu */}
          {[[-0.2, -0.2], [0.2, -0.2], [-0.2, 0.2], [0.2, 0.2]].map(([px, pz], k) => (
            <Box key={k} p={[px, 1.34, pz]} s={[0.08, 0.44, 0.08]} c="#9aa4ab" />
          ))}
          <mesh position={[0, 1.34, 0]}>
            <sphereGeometry args={[0.17, 14, 12]} />
            <meshStandardMaterial color="#ffd98a" emissive="#ffb43a" emissiveIntensity={1.6} roughness={0.5} />
          </mesh>
          <pointLight position={[0, 1.34, 0]} color="#ffb43a" intensity={2.2} distance={3.4} />
          {/* toit pyramidal + bouton */}
          <mesh position={[0, 1.72, 0]} castShadow>
            <coneGeometry args={[0.58, 0.34, 4]} />
            <meshStandardMaterial color="#7f8a92" {...MAT} />
          </mesh>
          <Ball p={[0, 1.96, 0]} r={0.1} c="#8d979e" />
        </group>
        <Pond />
        {/* seated crew, facing outward toward the camera */}
        <Desk x={-2.0} z={1.25} skin={CREW[0]} i={0} />
        <Desk x={2.0} z={1.25} skin={CREW[1]} i={1} />
        <Desk x={-2.0} z={-1.05} skin={CREW[2]} i={2} />
        <Desk x={2.0} z={-1.05} skin={CREW[3]} i={3} />
      </group>
    </Spin>
  )
}

/** The canvas and its scroll parallax. The BOX and the in-view observer belong
 *  to ./DojoDiorama — one element, one observer. Splitting them across two
 *  elements made the observer lose its target the moment the scene mounted,
 *  and the diorama flickered out of existence instead of appearing. */
export default function DojoDioramaScene() {
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
    <div
      className="lp-dojo3d-inner"
      style={{ transform: `translateY(${(t * -0.12).toFixed(1)}px) scale(${Math.max(0.86, 1 - t * 0.0004)})` }}
    >
      <Canvas
        shadows="soft"
        camera={{ position: [0, 6.6, 15.2], fov: 31 }}
        dpr={[1, 1.7]}
        gl={{ alpha: true, antialias: true }}
      >
        <Frame />
        <StudioLight />
        <hemisphereLight args={['#ffffff', '#cfe0ff', 0.4]} />
        {/* clé · l'ombre est cadrée serré sur l'île, sinon 1024 px s'étalent
            sur toute la scène et le contour devient une bouillie d'escaliers */}
        <directionalLight
          position={[6, 10, 6]}
          intensity={1.15}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0006}
          shadow-normalBias={0.02}
          shadow-camera-left={-7}
          shadow-camera-right={7}
          shadow-camera-top={7}
          shadow-camera-bottom={-7}
          shadow-camera-near={1}
          shadow-camera-far={30}
        />
        {/* contre-jour froid, côté opposé · détache les silhouettes du fond */}
        <directionalLight position={[-7, 5, -6]} intensity={0.3} color="#bcd6ff" />
        <Scene />
      </Canvas>
    </div>
  )
}
