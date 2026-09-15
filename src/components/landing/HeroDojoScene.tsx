// Le hero · le MÊME dojo que l'application, pas une maquette qui lui
// ressemble.
//
// La version précédente était une petite île de tatami construite à part :
// elle ne montrait donc pas le produit, et toute amélioration faite au dojo
// réel ne s'y voyait jamais. Ici on monte exactement les mêmes pièces —
// Decor3D pour le lieu, ThemeProps pour le mobilier de métier, Character3D
// pour l'équipe, Glass3D pour la réfraction, StudioLight pour l'éclairage.
// Ce que la page d'accueil promet est littéralement ce qu'on ouvre ensuite.
//
// Ce qui change par rapport à Scene3D : aucun magasin (le hero n'a pas de
// dojo actif), aucune interaction, et un cadrage propre au hero. La
// disposition des places passe par `seatPositions`, la fonction que
// l'application utilise elle-même — un hero qui recopierait les
// coordonnées dériverait dès la première retouche du plan de salle.
import { useEffect, useMemo, useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Decor3D } from '../three/Decor3D'
import { Character3D } from '../three/Character3D'
import { ThemeProps } from '../three/ThemeProps'
import { Glass3D } from '../three/Glass3D'
import { StudioLight } from '../three/StudioLight'
import { Sensei3D } from '../three/Sensei3D'
import { templateById } from '../../data/templates'
import { seatPositions } from '../../three/layout3d'
import { SKINS, skinById } from '../../data/skins'
import type { Department } from '../../data/agents'

// L'équipe de démonstration · choisie par ESPÈCE et non par identifiant, les
// identifiants de skins étant générés et toutes les paires n'existant pas.
const CREW: { kind: string; fn: Department; name: string }[] = [
  { kind: 'cat', fn: 'Leadership', name: 'Chief' },
  { kind: 'dragon', fn: 'Product', name: 'Scout' },
  { kind: 'rabbit', fn: 'Growth', name: 'Pixel' },
  { kind: 'panda', fn: 'Ops', name: 'Echo' },
  { kind: 'frog', fn: 'Engineering', name: 'Byte' },
]

/** Cadrage responsive · un objectif unique ne tient pas dans un 16/9 ET dans
 *  un téléphone en 9/19,5. On élargit et on recule à mesure que le cadre se
 *  resserre, et on vise SOUS la salle pour la faire remonter au-dessus de la
 *  carte de verre. */
function Frame({ target }: { target: React.MutableRefObject<number> }) {
  const camera = useThree((s) => s.camera)
  const w = useThree((s) => s.size.width)
  const h = useThree((s) => s.size.height)
  useEffect(() => {
    const a = w / Math.max(1, h)
    const cam = camera as THREE.PerspectiveCamera
    const wide = a >= 1.5, mid = a >= 1
    // La carte est CENTRÉE et haute : elle mange les deux tiers du cadre.
    // Viser le milieu de la salle revenait donc à cacher l'équipe derrière
    // le verre. On vise HAUT (le mur de shoji), ce qui fait descendre le
    // sol et l'équipe dans le tiers bas, sous la carte, où on les voit.
    // Viser trop haut découvrait le VIDE au-dessus des murs (ils ne font
    // que six unités) : la carte flottait sur un ciel nu. On vise juste
    // au-dessus du mur du fond — la pièce remplit le haut du cadre, et
    // l'équipe reste dans le tiers bas, sous le verre.
    cam.fov = wide ? 40 : mid ? 46 : 56
    cam.position.set(0, wide ? 6.6 : mid ? 7.0 : 7.8, wide ? 18.5 : mid ? 19.5 : 21)
    target.current = wide ? 3.4 : mid ? 3.1 : 2.6
    cam.lookAt(0, target.current, -2)
    cam.updateProjectionMatrix()
  }, [camera, w, h, target])
  return null
}

/** Un lent va-et-vient de la caméra · la salle respire sans jamais tourner
 *  le dos à l'équipe, et le hero n'est pas une image fixe. */
function Drift({ target }: { target: React.MutableRefObject<number> }) {
  const camera = useThree((s) => s.camera)
  const base = useRef<THREE.Vector3 | null>(null)
  useFrame((s) => {
    if (!base.current) base.current = camera.position.clone()
    const t = s.clock.elapsedTime
    camera.position.x = base.current.x + Math.sin(t * 0.18) * 1.8
    camera.position.y = base.current.y + Math.sin(t * 0.13) * 0.35
    camera.lookAt(0, target.current, -2)
  })
  return null
}

export default function HeroDojoScene() {
  // la hauteur visée · partagée par le cadrage et la dérive, sinon la
  // caméra saute à la première image de la dérive
  const lookY = useRef(3.4)

  // le monde du hero · le dojo zen, celui qui porte le nom du produit
  const tpl = templateById('dojo')
  const P = tpl.palette

  const seated = useMemo(() => {
    const pos = seatPositions(CREW.length)
    return CREW.map((c, i) => ({
      id: `hero${i}`,
      fn: c.fn,
      name: c.name,
      x: pos[i][0],
      z: pos[i][1],
      skin: SKINS.find((s) => s.kind === c.kind)?.id ?? SKINS[0].id,
    }))
  }, [])
  const stations = useMemo(() => seated.map((s) => ({ id: s.id, fn: s.fn, x: s.x, z: s.z })), [seated])

  // parallaxe au défilement · la scène s'éloigne doucement quand on descend
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
      style={{ transform: `translateY(${(t * -0.1).toFixed(1)}px) scale(${Math.max(0.88, 1 - t * 0.00035)})` }}
    >
      <Canvas
        shadows="soft"
        dpr={[1, 1.6]}
        camera={{ position: [0, 6.6, 18.5], fov: 40, near: 0.1, far: 120 }}
        gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.08 }}
      >
        <color attach="background" args={[P.bg]} />
        <fog attach="fog" args={[P.fog, 34, 62]} />
        <Frame target={lookY} />
        <Drift target={lookY} />
        <StudioLight />
        <hemisphereLight args={['#ffffff', P.ground, 0.55]} />
        <ambientLight intensity={0.22} />
        <directionalLight
          position={[7, 12, 8]}
          color="#fff1d8"
          intensity={1.65}
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
        <directionalLight position={[-8, 6, -5]} color="#bcd4ff" intensity={0.55} />
      <pointLight position={[0, 4.5, -4]} color={P.accent} intensity={0.7} distance={30} />
        <pointLight position={[-7, 2.5, 3]} color={P.accent} intensity={0.32} distance={18} />
        <pointLight position={[7, 2.5, 3]} color={P.accent} intensity={0.32} distance={18} />
        <Suspense fallback={null}>
          <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} stations={stations} />
          <ThemeProps archetype="startup" accent={P.accent} />
          <Glass3D accent={P.accent} />
          {seated.map((s) => (
            <Character3D
              key={s.id}
              bare
              id={s.id}
              character={skinById(s.skin)}
              x={s.x}
              z={s.z}
              mood="work"
              selected={false}
              busy
              name={s.name}
              level={1}
              onSelect={() => {}}
            />
          ))}
          {/* décalé sur la gauche · au centre il bouchait le seul bandeau
              libre sous la carte, celui où l'on voit l'équipe travailler */}
          <Sensei3D bare at={[-5.4, 0, 5.6]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
