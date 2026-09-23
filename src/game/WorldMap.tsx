// LA CARTE DU MONDE · treize cités dojo, vues de dessus.
//
// ---------------------------------------------------------------------------
// POURQUOI UNE CARTE PLUTÔT QU'UNE LISTE
//
// Un programme de treize modules affiché en liste demande de comparer treize
// choses avant d'en comprendre une. Une carte demande de choisir UN endroit où
// aller, ce qui est la première décision qu'on sait prendre, et elle montre en
// même temps ce qui est fait, ce qui reste et où l'on se trouve. C'est le même
// raisonnement que la salle de classe du dojo, qui a remplacé un catalogue de
// douze cartes par douze silhouettes endormies.
//
// ---------------------------------------------------------------------------
// CE QUI EST DESSINÉ, ET CE QUI NE L'EST PAS
//
// Dessiné : le sol, les routes, une cité par module, la silhouette du disciple
// sur la cité courante. Rien d'autre. Une carte de jeu se lit en une seconde ou
// ne se lit pas, et chaque objet décoratif ajouté coûte cette seconde.
//
// PAS dessiné : de la végétation, des nuages, des animations d'ambiance. Le
// produit a une charte graphique faite d'aplats, de traits fins et d'angles
// droits ; une carte fouillée y serait un corps étranger, et elle tiendrait mal
// sur un téléphone.
//
// ---------------------------------------------------------------------------
// LES COORDONNÉES VIENNENT DU PROGRAMME
//
// `at` est porté par le module, dans data/curriculum. Une cité ajoutée
// apparaît ici sans qu'on touche à ce fichier. L'inverse (une liste de
// positions tenue ici) aurait donné une treizième cité qui existe dans le
// programme et nulle part sur la carte.
import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { StudioLight } from '../components/three/StudioLight'
import { Character3D } from '../components/three/Character3D'
import { characterFor, faceIdForUseCase } from '../data/agentFaces'
import { PATH_MODULES, say, type Module } from '../data/curriculum'
import { useLang } from '../i18n'
import { useGame } from './progress'

/** Une case de la grille vaut cette distance en unités du monde. */
const CELL = 7

/** La grille du programme vers le monde 3D · le centre de la carte est
 *  calculé depuis les cités elles-mêmes, donc ajouter une cité en bord de
 *  carte recentre l'ensemble au lieu de la pousser hors champ. */
function useWorld(modules: Module[]) {
  return useMemo(() => {
    const xs = modules.map((m) => m.at[0])
    const ys = modules.map((m) => m.at[1])
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2
    const pos = (m: Module): [number, number] => [(m.at[0] - cx) * CELL, (m.at[1] - cy) * CELL]
    const span = {
      w: (Math.max(...xs) - Math.min(...xs) + 3) * CELL,
      d: (Math.max(...ys) - Math.min(...ys) + 3) * CELL,
    }
    return { pos, span }
  }, [modules])
}

/* ------------------------------------------------------------------ */
/* UNE CITÉ                                                            */
/* ------------------------------------------------------------------ */

/** Un dojo vu de dessus · une base carrée, un toit à deux pentes, une porte.
 *
 *  LE TOIT EST LE SIGNAL. C'est la seule forme reconnaissable d'un bâtiment
 *  japonais vu de haut, et c'est elle qui porte la couleur de la cité. Le reste
 *  est neutre pour que treize cités restent distinguables. */
function City3D({
  module, x, z, percent, finished, locked, onOpen, label, doneLabel,
}: {
  module: Module
  x: number
  z: number
  percent: number
  finished: boolean
  locked: boolean
  onOpen: () => void
  /** le nom de la cité, déjà dans la langue lue · le composant ne traduit
   *  rien lui même, pour que la scène n'ait qu'une raison de se redessiner */
  label: string
  doneLabel: string
}) {
  const roof = useRef<THREE.Group>(null)
  // LA CITÉ FINIE RESPIRE · un mouvement lent, et rien d'autre. Une animation
  // permanente sur treize objets rendrait la carte illisible ; sur les cités
  // finies seulement, elle DIT quelque chose.
  useFrame(({ clock }) => {
    if (!roof.current || !finished) return
    roof.current.position.y = 1.6 + Math.sin(clock.elapsedTime * 1.4 + x) * 0.06
  })

  const tint = locked ? '#c8ccd4' : module.tint
  const size = 3.4

  return (
    <group position={[x, 0, z]} onClick={(e) => { e.stopPropagation(); if (!locked) onOpen() }}>
      {/* LA PLACE · elle donne la cible du clic, bien plus large que le
          bâtiment. Sur un téléphone, un toit de trois unités est intouchable. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
        <circleGeometry args={[size * 1.5, 32]} />
        <meshStandardMaterial color={finished ? tint : '#ffffff'} opacity={finished ? 0.18 : 0.9} transparent roughness={1} />
      </mesh>

      {/* LE SOCLE */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <boxGeometry args={[size, 1.4, size]} />
        <meshStandardMaterial color={locked ? '#e6e8ee' : '#ffffff'} roughness={0.95} />
      </mesh>

      {/* LE TOIT · deux pentes, dans la couleur de la cité */}
      <group ref={roof} position={[0, 1.6, 0]}>
        <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[size * 0.95, 1.5, 4]} />
          <meshStandardMaterial color={tint} roughness={0.85} />
        </mesh>
      </group>

      {/* LA PORTE · elle dit de quel côté on entre, et donne une échelle */}
      <mesh position={[0, 0.55, size / 2 + 0.02]}>
        <planeGeometry args={[1.1, 1.1]} />
        <meshStandardMaterial color={locked ? '#c8ccd4' : '#1a1c22'} roughness={1} />
      </mesh>

      {/* LA JAUGE · un trait au sol, pas un anneau flottant. Elle est lisible
          de haut, ce qui est le seul point de vue de cette carte. */}
      {percent > 0 && !finished && (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, size / 2 + 1]}>
          <planeGeometry args={[(size * 1.6 * percent) / 100, 0.34]} />
          <meshStandardMaterial color={tint} roughness={1} />
        </mesh>
      )}

      {/* L'ÉTIQUETTE · du vrai HTML, projeté par la caméra.
          Un texte dessiné DANS la scène se déforme avec l'angle, ne se
          sélectionne pas, n'est pas lu par un lecteur d'écran et coûte une
          texture par cité. Posé ici, il reste net, il reste du texte, et il
          suit exactement le bâtiment parce que c'est la caméra qui le place.
          Une version antérieure le posait en superposition avec une position
          calculée à la main : elle aurait dérivé du bâtiment au premier
          changement d'angle, ce qui est pire qu'une étiquette absente. */}
      <Html position={[0, 3.1, 0]} center distanceFactor={22} zIndexRange={[20, 0]}>
        <button
          className={`wm-tag${finished ? ' on' : ''}${locked ? ' off' : ''}`}
          style={{ ['--wt' as string]: tint }}
          onClick={(e) => { e.stopPropagation(); if (!locked) onOpen() }}
        >
          <b>{label}</b>
          <i>{doneLabel}</i>
        </button>
      </Html>
    </group>
  )
}

/* ------------------------------------------------------------------ */
/* LES ROUTES                                                          */
/* ------------------------------------------------------------------ */

/** Les chemins entre cités · ils relient chaque cité à la suivante dans
 *  l'ordre conseillé.
 *
 *  ILS NE VERROUILLENT RIEN. On peut aller où l'on veut : la route dit par où
 *  commencer quand on ne sait pas, ce qui est un conseil et non une serrure.
 *  Voir l'en-tête de data/curriculum. */
function Roads({ points }: { points: [number, number][] }) {
  return (
    <group>
      {points.slice(0, -1).map(([x, z], i) => {
        const [nx, nz] = points[i + 1]
        const dx = nx - x
        const dz = nz - z
        const len = Math.hypot(dx, dz)
        return (
          <mesh
            key={i}
            rotation={[-Math.PI / 2, 0, -Math.atan2(dz, dx)]}
            position={[x + dx / 2, 0.01, z + dz / 2]}
          >
            <planeGeometry args={[len, 0.7]} />
            <meshStandardMaterial color="#e6e8ee" roughness={1} />
          </mesh>
        )
      })}
    </group>
  )
}

/* ------------------------------------------------------------------ */

export function WorldMap({ modules = PATH_MODULES, onOpen }: {
  /** LES CITÉS À DESSINER · le parcours par défaut, les trois cités d'un
   *  métier quand on est sur sa carte. Une deuxième carte écrite pour les
   *  métiers aurait fait croire à un autre produit, et toute amélioration
   *  faite à l'une aurait manqué à l'autre. */
  modules?: Module[]
  onOpen: (moduleId: string) => void
}) {
  const lang = useLang()
  const g = useGame()
  const { pos, span } = useWorld(modules)
  const points = useMemo(() => modules.map((m) => pos(m)), [modules, pos])
  // OÙ L'ON EST · la cité du prochain dojo non fait, quand elle est sur CETTE
  // carte. Sinon on se tient sur la première : poser le disciple hors champ
  // serait pire que ne pas le dessiner.
  const hereIndex = modules.findIndex((m) => m.id === g.nextUp.module.id)
  const here = hereIndex >= 0 ? points[hereIndex] : points[0]

  return (
    <div className="wm">
      <Canvas
        shadows="soft"
        dpr={[1, 1.4]}
        camera={{ position: [0, 34, 26], fov: 38, near: 0.1, far: 200 }}
        gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
        <color attach="background" args={['#f4f5f8']} />
        <StudioLight />
        <hemisphereLight args={['#ffffff', '#e8e4dc', 0.9]} />
        <directionalLight
          position={[12, 26, 10]} color="#ffffff" intensity={1.05} castShadow
          shadow-mapSize-width={2048} shadow-mapSize-height={2048}
          shadow-bias={-0.0004} shadow-normalBias={0.03}
          shadow-camera-left={-40} shadow-camera-right={40}
          shadow-camera-top={40} shadow-camera-bottom={-40}
        />
        <Suspense fallback={null}>
          {/* LE SOL · il porte la carte et reçoit les ombres. Sa taille vient
              de l'étendue des cités, donc il ne se met jamais à flotter sous
              une cité ajoutée en bord de carte. */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[span.w, span.d]} />
            <meshStandardMaterial color="#eceef3" roughness={1} />
          </mesh>
          <Roads points={points} />

          {/* LE DISCIPLE · il se tient sur la cité où reprendre, et c'est la
              seule chose qui dise « vous » sur cette carte. Sans lui, une
              carte de progression est un tableau de bord ; avec lui, c'est un
              endroit où l'on est.
              Il emprunte le visage du maître de son prochain dojo, ce qui
              évite un treizième personnage à dessiner et à tenir à jour. */}
          {here && (
            <Character3D
              id="disciple"
              character={characterFor(faceIdForUseCase(g.nextUp.level.master))}
              x={here[0]}
              z={here[1] + 4.6}
              mood="idle"
              selected={false}
              busy={false}
              fn="Product"
              onSelect={() => onOpen(g.nextUp.module.id)}
            />
          )}
          {modules.map((m, i) => {
            const c = g.cityOf(m)
            const [x, z] = points[i]
            return (
              <City3D
                key={m.id}
                module={m}
                x={x}
                z={z}
                percent={c.percent}
                finished={c.finished}
                locked={false}
                onOpen={() => onOpen(m.id)}
                label={say(m.title, lang)}
                doneLabel={`${c.done}/${c.total}`}
              />
            )
          })}
        </Suspense>
      </Canvas>

    </div>
  )
}
