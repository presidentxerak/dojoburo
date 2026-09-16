// Le coursier · il entre, il va voir le maître, il lui dit les nouvelles.
//
// Il ne servait à rien, et le reproche était juste : il traversait la salle,
// laissait tomber trois chemises sur le plancher et repartait. Personne ne
// recevait rien. Un personnage qui traverse une pièce sans que rien ne change
// derrière lui décore, il ne raconte pas.
//
// Maintenant il a un DESTINATAIRE. Le maître se tient au fond, sur son
// estrade ; le coursier franchit le seuil, remonte le couloir, salue, annonce
// la nouvelle du jour, lui remet les dossiers — qui finissent SUR l'estrade,
// à côté du maître, et non par terre au milieu de rien — puis salue à nouveau
// et ressort. Le maître, lui, se tourne vers lui, hoche la tête et répond
// (voir Sensei3D et news.ts).
//
// Il réutilise Character3D · le même corps, les mêmes matières, la même
// grammaire que l'équipe. Un coursier dessiné à part se lirait comme une
// pièce rapportée, et il aurait fallu le retoucher à chaque fois que les
// personnages changent — ce qui est arrivé trois fois cette semaine.
//
// Ce qui bouge est le GROUPE qui le porte, pas lui : Character3D reçoit des
// coordonnées fixes (0, 0) et ne sait rien du trajet. Ce qu'il reçoit en
// revanche, c'est la CADENCE (voir gait.ts) : sa vitesse réelle, pour que ses
// jambes tournent à la vitesse du sol au lieu de patiner.
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { Character3D } from './Character3D'
import { skinById } from '../../data/skins'
import { MATTE } from './toy'
import { roundedBox } from './geometry'
import { Mat } from './Mat'
import { GaitProvider, advance, type Gait } from './gait'
import { courierPath, pathLengths, pointAt, avoid, clampRoom, DAIS, LECTERN } from './stage'
import { drawNews, setNews, useNews } from './news'

/** Sa vitesse de marche, en unités par seconde. Un monde ouvert est deux
 *  fois plus profond qu'une salle fermée : à durée fixe il y sprintait. */
const SPEED = 1.55
/** Les temps d'arrêt, en secondes. */
const BOW_IN = 1.2      // le salut d'arrivée
const TALK = 8.4        // l'annonce, et la réponse du maître
const BOW_OUT = 1.1     // le salut de départ
/** Le temps entre deux tournées · assez long pour qu'on n'ait pas
 *  l'impression d'une navette, assez court pour qu'on le revoie. */
const REST = 17

/** La pile de dossiers · trois chemises de couleurs différentes, légèrement
 *  décalées. Une pile parfaitement alignée se lit comme un seul bloc. */
function Folders() {
  const tint = ['#e8c15a', '#d9756a', '#6fa8d6']
  return (
    <group>
      {tint.map((c, i) => (
        <mesh
          key={c}
          position={[(i - 1) * 0.02, i * 0.06, 0]}
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

export function Courier3D({ enclosed, phase = 0 }: {
  /** la salle est-elle fermée ? · la porte et les murs en dépendent, et le
   *  coursier ne les recalcule pas lui-même (voir stage.ts) */
  enclosed?: boolean
  /** décalage de phase · deux dojos ouverts côte à côte ne partent pas
   *  ensemble */
  phase?: number
}) {
  const g = useRef<THREE.Group>(null)
  const carry = useRef<THREE.Group>(null)
  const handed = useRef<THREE.Group>(null)
  const gait = useRef<Gait>({ speed: 0, phase: 0, bow: 0 })
  const lastTour = useRef(-1)
  const news = useNews()
  // un skin fixe · le coursier est toujours le même, on le reconnaît
  const skin = useMemo(() => skinById('mono-human') ?? skinById('mono-robot'), [])

  // Le trajet, calculé UNE fois par salle · quatre points qui longent le fond
  // réservé sans y entrer (voir stage.courierPath).
  const route = useMemo(() => {
    const path = courierPath(enclosed)
    const { seg, total } = pathLengths(path)
    const walk = total / SPEED
    return { path, seg, total, walk, cycle: walk * 2 + BOW_IN + TALK + BOW_OUT + REST }
  }, [enclosed])

  useFrame((s, dt) => {
    if (!g.current) return
    const t = (s.clock.elapsedTime + phase) % route.cycle
    const tour = Math.floor((s.clock.elapsedTime + phase) / route.cycle)

    // une nouvelle par tournée, tirée au moment du départ
    if (tour !== lastTour.current) {
      lastTour.current = tour
      drawNews()
    }

    // --- où en est-il de son trajet ? ---------------------------------
    const tIn = route.walk
    const tBow = tIn + BOW_IN
    const tTalk = tBow + TALK
    const tBow2 = tTalk + BOW_OUT
    const tOut = tBow2 + route.walk

    let dist: number        // distance parcourue sur le chemin
    let speed = 0
    let bow = 0
    let facing: 'path' | 'master' = 'path'
    let stage: 'away' | 'incoming' | 'greeting' | 'telling' | 'leaving'

    if (t < tIn) {
      dist = t * SPEED
      speed = SPEED
      stage = 'incoming'
    } else if (t < tBow) {
      dist = route.total
      bow = Math.sin(((t - tIn) / BOW_IN) * Math.PI)
      facing = 'master'
      stage = 'greeting'
    } else if (t < tTalk) {
      dist = route.total
      facing = 'master'
      stage = 'telling'
    } else if (t < tBow2) {
      dist = route.total
      bow = Math.sin(((t - tTalk) / BOW_OUT) * Math.PI)
      facing = 'master'
      stage = 'greeting'
    } else if (t < tOut) {
      dist = route.total - (t - tBow2) * SPEED
      speed = SPEED
      stage = 'leaving'
    } else {
      // Hors de la fenêtre de livraison, il attend DERRIÈRE la porte. On le
      // déplace au lieu de le démonter : remonter un personnage complet
      // toutes les quarante secondes ferait un à-coup visible, alors que le
      // pousser hors champ ne coûte rien.
      dist = 0
      stage = 'away'
    }

    if (stage !== news.phase) setNews({ phase: stage })

    // --- la position, dégagée de ce qui est solide ---------------------
    const p = pointAt(route.path, route.seg, dist)
    let [x, z] = avoid(p.x, p.z, 0.62)
    // Les murs, mais SEULEMENT ceux de devant et des côtés. Le mur du fond,
    // il le franchit : c'est une porte. Le borner derrière aussi le faisait
    // apparaître d'un coup dans l'encadrement au lieu d'en sortir.
    const [cx, cz] = clampRoom(x, z, 0.62, enclosed)
    x = cx
    z = Math.min(cz, z)
    // il rejoint sa trajectoire au lieu d'y sauter · l'évitement peut le
    // déplacer d'un demi-mètre d'une image à l'autre quand un poste entre en
    // jeu, et sans ce lissage on le voit se téléporter
    const k = Math.min(1, dt * 12)
    g.current.position.x += (x - g.current.position.x) * k
    g.current.position.z += (z - g.current.position.z) * k

    // --- l'orientation -------------------------------------------------
    // Vers le maître quand il lui parle, vers son chemin quand il marche.
    // Sans cela il repartait à reculons.
    let want: number
    if (facing === 'master') {
      want = Math.atan2(DAIS.x - g.current.position.x, DAIS.z - g.current.position.z)
    } else if (stage === 'leaving') {
      want = Math.atan2(-p.dx, -p.dz)
    } else {
      want = Math.atan2(p.dx, p.dz)
    }
    // le plus court chemin angulaire · sans ce repli il fait un tour complet
    // pour rattraper un écart de dix degrés au passage de -π à π
    let delta = want - g.current.rotation.y
    while (delta > Math.PI) delta -= Math.PI * 2
    while (delta < -Math.PI) delta += Math.PI * 2
    g.current.rotation.y += delta * Math.min(1, dt * 6)

    // --- la démarche ---------------------------------------------------
    gait.current.speed = stage === 'away' ? 0 : speed
    gait.current.bow += (bow - gait.current.bow) * Math.min(1, dt * 9)
    advance(gait.current, dt)

    // --- les dossiers · dans ses bras, puis SUR l'estrade ---------------
    const given = t >= tBow
    if (carry.current) carry.current.visible = !given
    if (handed.current) handed.current.visible = given
  })

  if (!skin) return null

  const talking = news.phase === 'telling'

  return (
    <group>
      {/* il commence en coulisse, pas au milieu de la salle · sans cela la
          première image le montre en train de traverser le décor pour
          rejoindre sa porte */}
      <group ref={g} position={[route.path[0][0], 0, route.path[0][1]]}>
        <GaitProvider value={gait}>
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
        </GaitProvider>
        {/* la pile qu'il porte · à hauteur de mains, devant lui */}
        <group ref={carry} position={[0, 1.2, 0.72]}>
          <Folders />
        </group>
        {/* ce qu'il vient dire · au-dessus de lui, et seulement pendant
            l'annonce. Une bulle permanente sur un personnage qui marche
            suivrait la caméra pendant tout le trajet. */}
        {talking && (
          <Html position={[0, 2.6, 0]} center distanceFactor={12} zIndexRange={[8, 0]} pointerEvents="none">
            <div className="panda-bubble">{news.headline}</div>
          </Html>
        )}
      </group>
      {/* la pile REMISE · posée sur l'estrade, à côté du maître. Par terre au
          milieu de la salle, elle ne disait rien ; ici elle dit que quelque
          chose a été livré, et elle attend la tournée suivante. */}
      <group ref={handed} position={[DAIS.x + LECTERN.dx, LECTERN.top, DAIS.z + LECTERN.dz]} rotation={[0, 0.26, 0]} visible={false}>
        <Folders />
      </group>
    </group>
  )
}
