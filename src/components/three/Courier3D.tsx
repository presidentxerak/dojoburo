// Le coursier · quelqu'un entre, pose des dossiers, repart.
//
// Une salle où rien n'entre et rien ne sort est une vitrine. Le dojo avait des
// murs, puis une porte — il lui manquait une RAISON d'avoir une porte. Toutes
// les quarante secondes environ, quelqu'un la pousse, traverse jusqu'à
// l'équipe, dépose une pile de dossiers et repart. C'est le seul élément de la
// scène qui ne boucle pas sur place : il a un début, un milieu et une fin, et
// c'est ce qui fait qu'on regarde une pièce vivre plutôt qu'une maquette.
//
// Il réutilise Character3D · le même corps, les mêmes matières, la même
// grammaire que l'équipe. Un coursier dessiné à part se lirait comme une pièce
// rapportée, et il aurait fallu le retoucher à chaque fois que les personnages
// changent — ce qui est arrivé trois fois cette semaine.
//
// Ce qui bouge est le GROUPE qui le porte, pas lui : Character3D reçoit des
// coordonnées fixes (0, 0) et ne sait rien du trajet. Il continue de respirer,
// de cligner et de balancer les bras exactement comme les autres.
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Character3D } from './Character3D'
import { skinById } from '../../data/skins'
import { MATTE } from './toy'
import { roundedBox } from './geometry'
import { Mat } from './Mat'

/** Les étapes du trajet, en secondes depuis le début du cycle. */
const ENTER = 0
const WALK_IN = 5.5     // pousser la porte et avancer
const PAUSE = 8.5       // poser les dossiers
const WALK_OUT = 13.5   // repartir
const CYCLE = 42

/** La pile de dossiers · trois chemises de couleurs différentes, légèrement
 *  décalées. Une pile parfaitement alignée se lit comme un seul bloc. */
function Folders({ hold }: { hold: boolean }) {
  const tint = ['#e8c15a', '#d9756a', '#6fa8d6']
  return (
    <group>
      {tint.map((c, i) => (
        <mesh
          key={c}
          position={[(i - 1) * 0.02, i * 0.06, hold ? 0 : 0]}
          rotation={[0, (i - 1) * 0.08, 0]}
          geometry={roundedBox(0.46, 0.05, 0.34, 0.06)}
          castShadow
        >
          <Mat color={c} {...MATTE} />
        </mesh>
      ))}
    </group>
  )
}

export function Courier3D({
  /** le seuil · position exacte de la porte, calculée par Decor3D. Le
   *  coursier ne recalcule rien : deux calculs valent deux occasions de
   *  diverger, et il traverserait le mur à côté de sa porte. */
  door,
  /** jusqu'où il avance avant de déposer */
  dropZ = 4.4,
  /** décalage de phase · deux dojos ouverts côte à côte ne partent pas
   *  ensemble */
  phase = 0,
}: {
  door: { x: number; z: number }
  dropZ?: number
  phase?: number
}) {
  const doorZ = door.z
  const g = useRef<THREE.Group>(null)
  const carry = useRef<THREE.Group>(null)
  const dropped = useRef<THREE.Group>(null)
  // un skin fixe · le coursier est toujours le même, on le reconnaît
  const skin = useMemo(() => skinById('mono-human') ?? skinById('mono-robot'), [])

  useFrame((s) => {
    if (!g.current) return
    const t = (s.clock.elapsedTime + phase) % CYCLE

    // Hors de la fenêtre de livraison, il attend DERRIÈRE la porte. On le
    // déplace au lieu de le démonter : remonter un personnage complet toutes
    // les quarante secondes ferait un à-coup visible, alors que le pousser
    // hors champ ne coûte rien.
    let z: number
    let walking = true
    if (t < ENTER || t > WALK_OUT + 4) {
      z = doorZ - 3
      walking = false
    } else if (t < WALK_IN) {
      z = THREE.MathUtils.lerp(doorZ - 1.5, dropZ, (t - ENTER) / (WALK_IN - ENTER))
    } else if (t < PAUSE) {
      z = dropZ
      walking = false
    } else if (t < WALK_OUT) {
      z = THREE.MathUtils.lerp(dropZ, doorZ - 1.5, (t - PAUSE) / (WALK_OUT - PAUSE))
    } else {
      z = doorZ - 3
      walking = false
    }
    g.current.position.z = z
    // il rejoint l'axe de l'équipe en avançant · entrer par une porte
    // décalée et marcher tout droit l'aurait fait déposer dans un coin
    // Il s'arrête DE CÔTÉ, pas au milieu de l'équipe. Visé sur l'axe, il
    // finissait sa course dans les jambes d'un coéquipier assis — visible
    // sur capture, et le genre de chose qu'on ne voit qu'en regardant.
    const trip = Math.min(1, Math.max(0, (z - (doorZ - 1.5)) / Math.max(0.001, dropZ - (doorZ - 1.5))))
    g.current.position.x = THREE.MathUtils.lerp(door.x, -2.6, trip)
    // il fait demi-tour pour repartir · sans cela il marche à reculons
    const facing = t >= PAUSE && t < WALK_OUT ? Math.PI : 0
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, facing, 0.08)
    g.current.userData.walking = walking

    // les dossiers · dans les bras à l'aller, sur le bureau au retour
    const handed = t >= PAUSE
    if (carry.current) carry.current.visible = !handed && t < WALK_OUT + 4 && t > ENTER
    if (dropped.current) {
      dropped.current.visible = handed
      dropped.current.position.z = dropZ - 0.35
    }
  })

  if (!skin) return null

  return (
    <group>
      <group ref={g} position={[door.x, 0, doorZ - 3]}>
        <Character3D
          bare
          walk
          id="courier"
          character={skin}
          fn="Ops"
          x={0}
          z={0}
          mood="work"
          selected={false}
          busy={false}
          onSelect={() => {}}
        />
        {/* la pile qu'il porte · à hauteur de mains, devant lui */}
        <group ref={carry} position={[0, 1.2, 0.72]}>
          <Folders hold />
        </group>
      </group>
      {/* la pile qu'il a déposée · elle reste sur place jusqu'au tour suivant */}
      {/* la pile déposée · POSÉE AU SOL, à côté de lui. Sur un bureau, elle
          aurait traversé le mobilier : chaque monde a le sien, à des hauteurs
          différentes, et rien ne garantit qu'il y en ait un à cet endroit. */}
      <group ref={dropped} position={[-2.6, 0.06, 0]} visible={false}>
        <Folders hold={false} />
      </group>
    </group>
  )
}
