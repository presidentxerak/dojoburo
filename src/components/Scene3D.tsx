import { Suspense, useEffect, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { setAgentPositions, agentWorldPos } from '../three/layout3d'
import { skinById } from '../data/skins'
import { templateById } from '../data/templates'
import { useWorkshop, seatedAgents, type WAgent } from '../workshop'
import { useDojo } from '../store'
import { Decor3D, doorAt } from './three/Decor3D'
import { Character3D } from './three/Character3D'
import { Courier3D } from './three/Courier3D'
import { ThemeProps } from './three/ThemeProps'
import { Glass3D } from './three/Glass3D'
import { Sensei3D } from './three/Sensei3D'
import { ROLE_BY_ID, canonicalRole } from '../data/roleAgents'
import { useOverlay } from '../lib/overlay'

/** Camera rig: gentle default framing. On desktop it's biased LEFT so the room
 *  isn't hidden by the right-hand panel; on portrait/phone it's centred, widened
 *  (higher fov) and pulled back so the whole room fits without clipping. */
function CameraRig() {
  const { camera, size } = useThree()
  const selected = useDojo((s) => s.selectedAgent)
  const target = useRef(new THREE.Vector3(2.2, 1.2, 1))
  const camPos = useRef(new THREE.Vector3(2.2, 8.4, 14))
  const portrait = size.height > size.width

  // widen the field of view on narrow/portrait screens so the room fits
  useEffect(() => {
    const cam = camera as THREE.PerspectiveCamera
    const fov = portrait ? 60 : 42
    if (cam.fov !== fov) {
      cam.fov = fov
      cam.updateProjectionMatrix()
    }
  }, [camera, portrait])

  useFrame((_, dt) => {
    // the dojo lives in its own pane now (no right-hand overlay), so centre it.
    // Pulled in closer + a higher vantage so the characters read large and are
    // easy to tap, while still looking down ONTO the room (requested).
    let tx = 0
    let tz = 1
    let px = 0
    let pz = 14
    let py = 12.4
    let ty = 1.5
    if (portrait) {
      // even closer on phones so agents are big + tappable, from a top-down angle.
      ty = 1.55
      pz = 12.5
      py = 13
    }
    const sp = selected ? agentWorldPos(selected) : undefined
    if (sp) {
      const [ax, az] = sp
      tx = ax
      tz = az
      ty = 2.3 // lift the look-at so the brain hovering high above stays framed
      px = ax
      pz = az + (portrait ? 8.5 : 10.5)
      py = portrait ? 6.4 : 7.4
    }
    target.current.lerp(new THREE.Vector3(tx, ty, tz), Math.min(1, dt * 2.2))
    camPos.current.lerp(new THREE.Vector3(px, py, pz), Math.min(1, dt * 2.2))
    camera.position.copy(camPos.current)
    camera.lookAt(target.current)
  })
  return null
}

function Agents({ seated }: { seated: Array<{ agent: WAgent; x: number; z: number }> }) {
  const runtime = useDojo((s) => s.runtime)
  const stats = useDojo((s) => s.stats)
  const selectedAgent = useDojo((s) => s.selectedAgent)
  const select = useDojo((s) => s.selectAgent)

  // publish id -> world position so the Chief + camera can follow any agent
  useEffect(() => {
    const m: Record<string, [number, number]> = {}
    for (const { agent, x, z } of seated) m[agent.id] = [x, z]
    setAgentPositions(m)
  }, [seated])

  return (
    <group>
      {seated.map(({ agent: wa, x, z }) => {
        const rt = runtime[wa.id]
        return (
          <Character3D
            key={wa.id}
            id={wa.id}
            character={skinById(wa.skinId)}
            fn={wa.fn}
            role={wa.role}
            x={x}
            z={z}
            mood={rt?.mood ?? 'idle'}
            busy={!!rt?.busy}
            selected={selectedAgent === wa.id}
            name={wa.name}
            title={ROLE_BY_ID[canonicalRole(wa.role)]?.title ?? ''}
            level={stats[wa.id]?.level ?? 1}
            onSelect={() => {
              select(wa.id)
            }}
          />
        )
      })}
    </group>
  )
}

/** Shadows, drawn once instead of sixty times a second.
 *
 *  A 2048² shadow map re-rendered every frame is what the dojo was spending its
 *  budget on, and it bought nothing: the room, the desks and the walls never
 *  move, and the teammates' idle bob is millimetres from this camera. We draw
 *  the shadow map when the scene's composition actually changes — a different
 *  dojo, a teammate seated somewhere else — and leave it alone in between.
 *
 *  Before: ~500ms a frame, i.e. two frames a second, and every click in the
 *  header queued behind it. */
function ShadowBudget({ signature }: { signature: string }) {
  const gl = useThree((s) => s.gl)
  useEffect(() => {
    gl.shadowMap.autoUpdate = false
    gl.shadowMap.needsUpdate = true
    // one more pass after the lazy pieces (the panda, the decor) have loaded
    const t = setTimeout(() => { gl.shadowMap.needsUpdate = true }, 1200)
    return () => clearTimeout(t)
  }, [gl, signature])
  return null
}

export function Scene3D() {
  const deselect = useDojo((s) => s.selectAgent)
  const covered = useOverlay((s) => s.count > 0)
  const dojo = useWorkshop((s) => s.dojos.find((d) => d.id === s.activeDojoId))
  const tpl = templateById(dojo?.template)
  const P = tpl.palette
  // one seating layout, shared by the desks (Decor3D) and the characters (Agents)
  const seated = useMemo(() => seatedAgents(dojo ?? null), [dojo])
  const stations = useMemo(() => seated.map(({ agent, x, z }) => ({ id: agent.id, fn: agent.fn, x, z })), [seated])
  // what would actually change a shadow: which room, and who sits where
  const signature = useMemo(
    () => `${tpl.id}|${dojo?.archetype ?? ''}|${stations.map((s) => `${s.id}:${s.x},${s.z}`).join('|')}`,
    [tpl.id, dojo?.archetype, stations],
  )
  return (
    <Canvas
      shadows="soft"
      // Covered by a full-screen surface or the menu? Stop drawing. Nothing is
      // visible, and the loop was starving every click in the header.
      // Visible? Draw on the browser's own rhythm — animation deltas have to
      // come from requestAnimationFrame or the teammates stutter. Covered by a
      // surface or the menu? Draw nothing at all: that is where the cost was,
      // and it is what made panels take seconds to appear.
      frameloop={covered ? 'never' : 'always'}
      dpr={[1, 1.4]}
      camera={{ position: [2.2, 8.4, 14], fov: 42, near: 0.1, far: 100 }}
      gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.0 }}
      onPointerMissed={() => deselect(null)}
      onCreated={({ gl, invalidate }) => {
        // Recover gracefully from a lost WebGL context (common with DevTools
        // device mode or many canvases) instead of leaving the scene black.
        const canvas = gl.domElement
        canvas.addEventListener('webglcontextlost', (e) => { e.preventDefault() }, false)
        canvas.addEventListener('webglcontextrestored', () => { invalidate() }, false)
      }}
    >
      <color attach="background" args={[P.bg]} />
      <fog attach="fog" args={[P.fog, 24, 44]} />
      {/* éclairage d'environnement · sans lui les personnages n'ont qu'un
          point brillant et restent plats. Il remplace une partie de la
          lumière ambiante, qui écrasait le relief en éclairant tout
          également. */}
      {/* L'ÉCLAIRAGE DU KIT · trois sources, BLANCHES SANS EXCEPTION.
          Il y en avait sept, dont trois teintées de la couleur du thème et une
          hémisphérique crème. Une hémisphérique teintée rejoue exactement le
          défaut que le shader corrige : tout redevient pastel et sale, et
          aucune palette ne rattrape un mauvais rendu (piège n° 2 et n° 8 de la
          spécification du kit).
          La seule couleur admise est le violet très faible en contre-jour, qui
          creuse les ombres sans les teinter visiblement. */}
      <hemisphereLight args={['#ffffff', '#ffcf9a', 0.85]} />
      <directionalLight
        position={[4, 9, 6]}
        color="#ffffff"
        intensity={1.15}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0004}
        shadow-normalBias={0.03}
        shadow-camera-left={-16}
        shadow-camera-right={16}
        shadow-camera-top={16}
        shadow-camera-bottom={-16}
      />
      <directionalLight position={[-6, 4, 2]} color="#a263f0" intensity={0.2} />
      <Suspense fallback={null}>
        <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} stations={stations} />
        {/* LE COURSIER · il entre par la porte du fond, dépose des dossiers
            devant l'équipe et repart. C'est ce qui donne une raison d'être à
            la porte, et le seul mouvement de la scène qui ne boucle pas sur
            place. */}
        <Courier3D door={doorAt(tpl.enclosed)} />
        {/* le mobilier de MÉTIER · les bibliothèques d'un dojo « écrire un
            livre », la baie de serveurs d'une application. Il s'ajoute au
            monde choisi sans jamais le remplacer. */}
        <ThemeProps archetype={dojo?.archetype} accent={P.accent} />
        {/* la réfraction · deux pièces de verre, et deux seulement · voir
            le commentaire en tête de Glass3D pour ce que ça coûte */}
        <Glass3D accent={P.accent} />
        <Agents seated={seated} />
        {/* le maître du dojo · devant l'équipe, il danse à chaque tâche terminée */}
        <Sensei3D />
      </Suspense>
      <CameraRig />
      <ShadowBudget signature={signature} />
    </Canvas>
  )
}
