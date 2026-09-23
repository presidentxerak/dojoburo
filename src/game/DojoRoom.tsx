// LA SALLE D'UN DOJO · le maître, et rien d'autre.
//
// C'est la même pièce que partout ailleurs dans le produit : Decor3D pour le
// lieu, Sensei3D pour le maître, Character3D pour la silhouette. Une salle
// dessinée à part se lirait comme un autre produit, et toute amélioration faite
// au dojo réel ne s'y verrait jamais.
//
// CE QUI CHANGE D'UN DOJO À L'AUTRE : le maître, et la couleur. Chaque cité a
// sa teinte, chaque niveau son maître, et c'est assez pour que treize cités ne
// se ressemblent pas sans redessiner treize salles.
//
// LE MAÎTRE PARLE UNE FOIS, et il dit ce qu'on vient FAIRE, pas ce qu'on vient
// lire. Une bulle qui récite une maxime au-dessus d'un cours est un professeur
// qui ne vous écoute pas.
import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Decor3D } from '../components/three/Decor3D'
import { Character3D } from '../components/three/Character3D'
import { Sensei3D } from '../components/three/Sensei3D'
import { StudioLight } from '../components/three/StudioLight'
import { templateById } from '../data/templates'
import { characterFor, faceIdForUseCase } from '../data/agentFaces'
import type { Department } from '../data/agents'

export function DojoRoom({ master, tint, says }: {
  /** l'identifiant du cas d'usage qui tient ce dojo */
  master: string
  /** la couleur de la cité · elle teinte la lumière, pas les murs, parce que
   *  des murs colorés écraseraient le personnage */
  tint: string
  says: string
}) {
  const tpl = templateById('dojo')
  const P = tpl.palette
  // UN SEUL POSTE · le maître attend, le disciple entre. Une salle remplie de
  // douze silhouettes est la salle de /build, qui répond à une autre question
  // (« lequel choisir ? »). Ici on a déjà choisi.
  const stations = useMemo(
    () => [{ id: master, fn: 'Product' as Department, x: 0, z: 2.4 }],
    [master],
  )

  return (
    <div className="dr">
      <Canvas
        shadows="soft"
        dpr={[1, 1.4]}
        camera={{ position: [0, 6.4, 12.5], fov: 42, near: 0.1, far: 100 }}
        gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ camera }) => camera.lookAt(0, 1.7, 0)}
      >
        <color attach="background" args={[P.bg]} />
        <fog attach="fog" args={[P.fog, 22, 44]} />
        <StudioLight />
        <hemisphereLight args={['#ffffff', tint, 0.8]} />
        <directionalLight
          position={[4, 9, 6]} color="#ffffff" intensity={1.15} castShadow
          shadow-mapSize-width={2048} shadow-mapSize-height={2048}
          shadow-bias={-0.0004} shadow-normalBias={0.03}
          shadow-camera-left={-14} shadow-camera-right={14}
          shadow-camera-top={14} shadow-camera-bottom={-14}
        />
        <Suspense fallback={null}>
          <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} stations={stations} />
          <Character3D
            id={master}
            character={characterFor(faceIdForUseCase(master))}
            fn="Product"
            x={0}
            z={2.4}
            mood="work"
            busy
            selected
            onSelect={() => {}}
          />
          <Sensei3D says={says} />
        </Suspense>
      </Canvas>
    </div>
  )
}
