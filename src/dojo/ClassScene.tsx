// LA SALLE DE CLASSE · le même dojo, douze agents, un maître qui accueille.
//
// C'est la même pièce que partout ailleurs, et c'est voulu : Decor3D pour le
// lieu, Character3D pour les silhouettes, Sensei3D pour le maître. Une salle
// de cours dessinée à part se lirait comme un autre produit, et toute
// amélioration faite au dojo réel ne s'y verrait jamais.
//
// CE QUI CHANGE EST CE QUE LES PERSONNAGES SONT. Ils ne travaillent plus pour
// vous : chacun porte une forme d'agent qu'on apprend à construire. Et tant
// qu'on n'en a choisi aucun, ils DORMENT. C'est le point d'interface le plus
// important de cette page : une salle où tout le monde s'affaire déjà ne donne
// aucune raison de choisir, alors qu'une salle endormie pose la question à
// votre place.
import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Decor3D } from '../components/three/Decor3D'
import { Character3D } from '../components/three/Character3D'
import { Sensei3D } from '../components/three/Sensei3D'
import { StudioLight } from '../components/three/StudioLight'
import { templateById } from '../data/templates'
import { seatPositions } from '../three/layout3d'
import { characterFor, faceIdForUseCase } from '../data/agentFaces'
import { USE_CASES } from '../data/agentUseCases'
import type { Department } from '../data/agents'

// LES VISAGES viennent de data/agentFaces, qui est aussi ce que lit la fiche
// d'un agent. Ils étaient pris ICI par position dans le catalogue de looks, au
// motif que « les identifiants de looks et ceux des cas d'usage viennent de
// deux fichiers qui n'ont pas à se connaître ». C'était vrai, et c'était quand
// même faux : la question « quel visage porte cet agent » n'a qu'une réponse,
// et deux écrans qui la calculent chacun de leur côté finissent par ne pas
// montrer le même agent. C'est ce qui est arrivé.

/** Le métier affiché sous chaque agent. Il habille la silhouette (voir
 *  JobLook3D) et n'a rien à voir avec le cas d'usage : un agent de recherche
 *  peut porter la tenue d'un analyste sans que cela dise quoi que ce soit de
 *  faux. */
const DEPTS: Department[] = ['Leadership', 'Product', 'Growth', 'Ops', 'Engineering', 'Finance']

export function ClassScene({ chosen, onChoose, says }: {
  /** le cas d'usage réveillé, s'il y en a un */
  chosen: string | null
  onChoose: (id: string) => void
  /** ce que le maître dit en ce moment */
  says: string
}) {
  const tpl = templateById('dojo')
  const P = tpl.palette
  const seats = useMemo(() => seatPositions(USE_CASES.length), [])
  const stations = useMemo(
    () => USE_CASES.map((u, i) => ({ id: u.id, fn: DEPTS[i % DEPTS.length], x: seats[i][0], z: seats[i][1] })),
    [seats],
  )

  return (
    <div className="cls-scene">
      <Canvas
        shadows="soft"
        dpr={[1, 1.4]}
        camera={{ position: [0, 11.5, 15.5], fov: 44, near: 0.1, far: 100 }}
        gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ camera }) => camera.lookAt(0, 1.6, 1)}
      >
        <color attach="background" args={[P.bg]} />
        <fog attach="fog" args={[P.fog, 26, 48]} />
        <StudioLight />
        <hemisphereLight args={['#ffffff', '#ffcf9a', 0.85]} />
        <directionalLight
          position={[4, 9, 6]} color="#ffffff" intensity={1.15} castShadow
          shadow-mapSize-width={2048} shadow-mapSize-height={2048}
          shadow-bias={-0.0004} shadow-normalBias={0.03}
          shadow-camera-left={-16} shadow-camera-right={16}
          shadow-camera-top={16} shadow-camera-bottom={-16}
        />
        <Suspense fallback={null}>
          <Decor3D palette={P} decor={tpl.id} enclosed={tpl.enclosed} stations={stations} />
          {USE_CASES.map((u, i) => (
            <Character3D
              key={u.id}
              id={u.id}
              // LE MÊME VISAGE QUE SUR SA FICHE · il était distribué par
              // position dans le catalogue de looks, ce qui donnait au dormeur
              // une tête et à sa page une autre. Voir data/agentFaces.
              character={characterFor(faceIdForUseCase(u.id))}
              fn={DEPTS[i % DEPTS.length]}
              x={seats[i][0]}
              z={seats[i][1]}
              // ENDORMI tant qu'on ne l'a pas choisi. Le seul réveillé est
              // celui qu'on vient de prendre, et il se met au travail.
              mood={chosen === u.id ? 'work' : 'sleep'}
              busy={chosen === u.id}
              selected={chosen === u.id}
              name={u.name}
              // L'ÉTIQUETTE PORTE LE NOM, pas la forme.
              //
              // Elle portait `u.shape`, c'est à dire une phrase entière (« Read
              // a lot, come back with the part that matters »). Douze phrases
              // posées à plat au dessus de douze personnages, sur une salle
              // large de dix mètres vue de haut, se chevauchaient et se
              // coupaient les unes les autres : on ne lisait plus une seule
              // étiquette, et on ne voyait plus la salle non plus.
              //
              // La forme du problème est écrite sur la carte, où il y a la
              // place de la lire. Au dessus de la tête il ne reste que le nom,
              // qui tient en deux mots et sert seulement à savoir sur qui on
              // s'apprête à cliquer.
              title={u.name}
              level={1}
              onSelect={() => onChoose(u.id)}
            />
          ))}
          <Sensei3D says={says} />
        </Suspense>
      </Canvas>
    </div>
  )
}
