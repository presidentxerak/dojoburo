import * as THREE from 'three'
import type { Department } from '../../data/agents'
import { ROOM, DESK_FWD } from '../../three/layout3d'
import { floorTexture, shoji as shojiTex, cornerShade, skyGradient } from './textures'
import { roundedBox } from './geometry'
import type { DojoPalette } from '../../data/templates'
import { Mat } from './Mat'
import { DAIS, LECTERN, PLANTS, baysOf, doorBayOf, doorAt } from './stage'

// La géométrie de la salle vit dans ./stage · la porte y est calculée une
// fois pour toutes, et le coursier la lit au même endroit que le mur qui la
// perce. On la réexporte parce que la scène l'importait d'ici.
export { doorAt }

const WOOD = '#b5793f'
const WOOD_D = '#7a4a24'
const PAPER = '#fff7e6'
const M = { roughness: 0.75, metalness: 0.06 }

// L'amplitude du relief. Une carte de normales à pleine échelle transforme
// un carrelage en tôle ondulée ; ce qu'on veut est juste assez pour que la
// lumière accroche le joint. Deux valeurs, une pour les sols (regardés de
// biais, donc le relief s'y voit beaucoup) et une pour les murs.
const NORMAL_FLOOR = new THREE.Vector2(0.55, 0.55)
const NORMAL_WALL = new THREE.Vector2(0.3, 0.3)

/**
 * Le garnissage de la salle · ce qui fait qu'une pièce n'a pas l'air vide.
 *
 * Les onze mondes posaient un sol, des murs et leur décor de thème, et
 * c'était tout : entre les bureaux et les murs il restait dix mètres de
 * plancher nu. Un lieu habité a un tapis sous la table, des plantes dans
 * les angles, de la lumière suspendue et quelque chose accroché au mur.
 *
 * La PISCINE de la villa (18,4 × 10,4 centrée en z = 1) occupe presque tout
 * le sol : tout ce qui se pose au sol la traverserait. La villa ne reçoit
 * donc que ce qui vole ou se plaque au mur.
 */
function RoomDressing({ P, decor, enclosed }: { P: DojoPalette; decor: string; enclosed?: boolean }) {
  const wet = decor === 'villa'
  return (
    <group>
      {/* PAS DE TAPIS SUR LE TATAMI.
          Il rassemblait les bureaux quand le sol était un aplat de couleur.
          Maintenant que tous les mondes ont un sol de tatami, ses nattes font
          déjà ce travail : elles donnent la trame et l'échelle. Un tapis
          par-dessus, et de surcroît bordé de la couleur d'accent, traversait
          les nattes de quatre bandes mauves — on le voyait sur téléphone, et
          c'est le contraire d'une salle de dojo.

          Reste un seul liseré, très pâle, qui marque l'aire de travail sans
          recouvrir quoi que ce soit. */}
      {!wet && (
        <group>
          {/* le liseré descend avec les rangées · les postes sont passés de
              z ≈ 0,7 à z ≈ 1,9 pour dégager le fond, et un cadre resté en
              arrière aurait coupé la première rangée en deux */}
          {[[0, -2.4, 15, 0.1], [0, 7.0, 15, 0.1], [-7.4, 2.3, 0.1, 9.4], [7.4, 2.3, 0.1, 9.4]].map(([x, z, w, d], i) => (
            <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.02, z]}>
              <planeGeometry args={[w, d]} />
              <Mat color={mute(P.accent, 0.62)} transparent opacity={0.22} flat />
            </mesh>
          ))}
        </group>
      )}

      {/* plantes d'angle · hautes, pour occuper le volume et pas seulement
          le sol */}
      {/* Les plantes d'angle ont avancé vers la caméra · elles bordaient les
          murs latéraux à mi-profondeur, là où le mobilier de métier vient de
          se replier (voir stage.PROP_SLOTS). Leurs positions vivent dans le
          plan de la salle, avec leur empreinte : le coursier les contourne. */}
      {!wet && PLANTS.map(([x, z], i) => (
        <group key={i} position={[x, 0, z]}>
          <mesh position={[0, 0.34, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.42, 0.34, 0.68, 18]} />
            <Mat color="#e6e8ee" {...M} />
          </mesh>
          <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.38, 0.38, 0.06, 18]} />
            <Mat color="#5a4630" roughness={1} />
          </mesh>
          {/* neuf feuilles fines et retombantes · une capsule épaisse par
              feuille donnait des bananes vertes plantées dans un pot */}
          {Array.from({ length: 9 }, (_, k) => {
            const a = (k / 9) * Math.PI * 2 + i * 0.7
            const lean = 0.34 + (k % 3) * 0.16
            const len = 1.15 - (k % 3) * 0.2
            return (
              <group key={k} rotation={[0, a, 0]}>
                <group position={[0, 0.76, 0]} rotation={[0, 0, -lean]}>
                  <mesh position={[0, len / 2, 0]} scale={[1, 1, 0.22]} castShadow>
                    <capsuleGeometry args={[0.13, len, 4, 10]} />
                    <Mat color={k % 2 ? '#3f8f4a' : '#57a85c'} roughness={0.68} />
                  </mesh>
                  {/* la nervure, qui sépare la feuille en deux valeurs */}
                  <mesh position={[0, len / 2, 0.015]} scale={[0.1, 1, 0.1]}>
                    <capsuleGeometry args={[0.13, len * 0.9, 3, 6]} />
                    <Mat color="#2e6f38" roughness={0.8} />
                  </mesh>
                </group>
              </group>
            )
          })}
        </group>
      ))}

      {/* PAS DE SUSPENSIONS.
          Trois lampes pendaient au bout d'un câble de 1,2 unité, à hauteur
          de mur — donc EN PLEIN DANS LE CADRE. La caméra plonge dans la
          pièce depuis le haut : tout ce qui est accroché en hauteur passe
          devant la scène au lieu de l'éclairer visuellement. Elles gênaient,
          on les retire.

          La lumière qu'elles versaient, elle, RESTE. C'est elle qui donne
          son chaud à la pièce ; la retirer avec les abat-jour aurait éteint
          le dojo pour une raison de cadrage. */}
      {/* UNE seule lumière pour toute la pièce. Chaque lumière ponctuelle se
          paie dans le nuanceur de CHAQUE matériau de la scène : en poser une
          par lampe avait fait tomber le rendu de deux à une image par seconde
          (scripts/perf-scene.mjs). */}
      {enclosed && <pointLight position={[0, ROOM.wallH - 1.6, -0.5]} color="#ffeec4" intensity={2.6} distance={26} />}

      {/* PLINTHE · une pièce dont le mur rencontre le sol à angle vif n'a
          pas l'air construite. Le bandeau court tout autour, et il porte la
          même couleur que les huisseries. */}
      {enclosed && (
        <group>
          <mesh position={[0, 0.16, -ROOM.d / 2 + 0.22]} castShadow receiveShadow>
            <boxGeometry args={[ROOM.w, 0.32, 0.14]} />
            <Mat color={P.trim} roughness={0.8} />
          </mesh>
          {[-1, 1].map((sd) => (
            <mesh key={sd} position={[sd * (ROOM.w / 2 - 0.22), 0.16, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.14, 0.32, ROOM.d]} />
              <Mat color={P.trim} roughness={0.8} />
            </mesh>
          ))}
        </group>
      )}

      {/* PAS DE PLAFOND, et c'est un choix. La caméra regarde la salle PAR
          LE DESSUS, comme une maison de poupée : un plafond et ses poutres
          se placent entre elle et l'équipe. Essayé, vu à la capture — deux
          barres brunes en travers de l'image, pile à hauteur de tête. Une
          pièce ouverte sur le dessus n'est pas un oubli, c'est la seule
          forme qui se regarde depuis cet angle. */}

      {/* OCCLUSION D'ANGLE · l'ombre douce qui s'accumule là où deux surfaces
          se rejoignent. C'est ce que produirait une vraie occlusion ambiante,
          qui demanderait une passe d'écran entière ; ici quatre plans en
          dégradé donnent l'essentiel de la lecture pour rien du tout. */}
      {enclosed && (
        <group>
          <mesh position={[0, 0.9, -ROOM.d / 2 + 0.24]}>
            <planeGeometry args={[ROOM.w, 1.8]} />
            <meshBasicMaterial map={cornerShade()} transparent opacity={0.5} depthWrite={false} />
          </mesh>
          {[-1, 1].map((sd) => (
            <mesh key={sd} position={[sd * (ROOM.w / 2 - 0.24), 0.9, 0]} rotation={[0, -sd * Math.PI / 2, 0]}>
              <planeGeometry args={[ROOM.d, 1.8]} />
              <meshBasicMaterial map={cornerShade()} transparent opacity={0.5} depthWrite={false} />
            </mesh>
          ))}
        </group>
      )}

      {/* panneaux muraux · trois cadres par mur latéral */}
      {enclosed && [-1, 1].map((sd) => (
        <group key={sd} position={[sd * (ROOM.w / 2 - 0.26), 3.1, 0]} rotation={[0, -sd * Math.PI / 2, 0]}>
          {[-3.2, 0, 3.2].map((z, i) => (
            <group key={z} position={[z, i === 1 ? 0.3 : 0, 0]}>
              <mesh castShadow><boxGeometry args={[2.0, 1.5, 0.1]} /><Mat color={WOOD_D} {...M} /></mesh>
              <mesh position={[0, 0, 0.07]}><boxGeometry args={[1.76, 1.26, 0.03]} /><Mat color={PAPER} roughness={0.95} /></mesh>
              <mesh position={[(i - 1) * 0.3, 0.1, 0.1]}><boxGeometry args={[0.9, 0.5, 0.02]} /><Mat color={P.accent} roughness={0.8} transparent opacity={0.75} /></mesh>
            </group>
          ))}
        </group>
      ))}
    </group>
  )
}

// Procedural Backrooms wallpaper: mono-yellow with faint vertical pinstripes,
// panel seams and damp mottling. Lazily built once and shared across walls.
let _wallTex: THREE.CanvasTexture | null = null
function backroomsWallpaper(): THREE.CanvasTexture | null {
  if (_wallTex) return _wallTex
  if (typeof document === 'undefined') return null
  const s = 128
  const c = document.createElement('canvas')
  c.width = s; c.height = s
  const g = c.getContext('2d')
  if (!g) return null
  g.fillStyle = '#c9b84e'; g.fillRect(0, 0, s, s)
  // faint vertical pinstripes
  for (let x = 0; x < s; x += 9) { g.fillStyle = 'rgba(138,122,44,0.22)'; g.fillRect(x, 0, 2, s) }
  // horizontal panel seams
  g.fillStyle = 'rgba(120,106,40,0.30)'; g.fillRect(0, 2, s, 2); g.fillRect(0, s - 3, s, 2)
  // deterministic damp mottling
  let seed = 7
  const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280 }
  for (let i = 0; i < 26; i++) {
    const r = 4 + rnd() * 12
    g.fillStyle = `rgba(${100 + rnd() * 30 | 0}, ${90 + rnd() * 24 | 0}, 40, 0.10)`
    g.beginPath(); g.arc(rnd() * s, rnd() * s, r, 0, Math.PI * 2); g.fill()
  }
  const t = new THREE.CanvasTexture(c)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  t.repeat.set(5, 2)
  _wallTex = t
  return t
}

function B({ p, s, c, rot, emissive, ei }: { p: [number, number, number]; s: [number, number, number]; c: string; rot?: [number, number, number]; emissive?: string; ei?: number }) {
  return (
    // arêtes adoucies · voir ./geometry, c'est le filet de lumière le long
    // de chaque arête qui distingue un objet d'un polygone coloré
    <mesh position={p} rotation={rot} geometry={roundedBox(s[0], s[1], s[2])} castShadow receiveShadow>
      <Mat color={c} emissive={emissive} emissiveIntensity={ei ?? 0} {...M} />
    </mesh>
  )
}
function Cy({ p, r, h, c, rot, emissive, ei }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number]; emissive?: string; ei?: number }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <cylinderGeometry args={[r, r, h, 16]} />
      <Mat color={c} emissive={emissive} emissiveIntensity={ei ?? 0} {...M} />
    </mesh>
  )
}
function Sp({ p, r, c, emissive, ei }: { p: [number, number, number]; r: number; c: string; emissive?: string; ei?: number }) {
  return (
    <mesh position={p} castShadow>
      <sphereGeometry args={[r, 16, 14]} />
      <Mat color={c} emissive={emissive} emissiveIntensity={ei ?? 0} {...M} />
    </mesh>
  )
}
function Co({ p, r, h, c, rot, emissive, ei, open }: { p: [number, number, number]; r: number; h: number; c: string; rot?: [number, number, number]; emissive?: string; ei?: number; open?: boolean }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <coneGeometry args={[r, h, 20, 1, open ?? false]} />
      <Mat color={c} emissive={emissive} emissiveIntensity={ei ?? 0} side={open ? 2 : 0} {...M} />
    </mesh>
  )
}
// Emissive "glow" ball used for lights, fireflies, blinking indicators.
function Glow({ p, r, c, i = 0.8 }: { p: [number, number, number]; r: number; c: string; i?: number }) {
  return (
    <mesh position={p}>
      <sphereGeometry args={[r, 14, 12]} />
      <Mat color={c} emissive={c} emissiveIntensity={i} roughness={0.3} />
    </mesh>
  )
}
// Thin glowing plane strip (floor light lines, screens, water sheen).
function Strip({ p, s, c, rot, i = 0.6 }: { p: [number, number, number]; s: [number, number]; c: string; rot?: [number, number, number]; i?: number }) {
  return (
    <mesh position={p} rotation={rot}>
      <planeGeometry args={s} />
      <Mat color={c} emissive={c} emissiveIntensity={i} transparent opacity={0.9} side={2} />
    </mesh>
  )
}

/** Job-specific 3D prop, placed on/beside each agent's desk · keyed by the
 *  agent's function (department) so any dojo's crew gets fitting props. */
function JobProp({ fn, dz }: { fn: Department; dz: number }) {
  switch (fn) {
    case 'Leadership': // trophy on desk
      return (
        <group position={[0.7, 0.96, dz - 0.1]}>
          <Cy p={[0, 0.18, 0]} r={0.11} h={0.16} c="#ffcf3b" />
          <Cy p={[0, 0.05, 0]} r={0.06} h={0.12} c="#e0a800" />
          <B p={[0, -0.02, 0]} s={[0.18, 0.06, 0.18]} c="#7a4a24" />
        </group>
      )
    case 'Engineering': // second monitor with code
      return (
        <group position={[0.72, 0.9, dz]}>
          <B p={[0, 0.2, 0]} s={[0.5, 0.34, 0.05]} c="#2b2f3d" />
          <B p={[0, 0.2, 0.03]} s={[0.44, 0.28, 0.02]} c="#0f2b22" emissive="#1f7a4a" ei={0.5} />
          <B p={[0, 0.0, 0]} s={[0.1, 0.06, 0.1]} c="#2b2f3d" />
        </group>
      )
    case 'Ops': // server rack beside
      return (
        <group position={[1.5, 0, dz - 0.4]}>
          <B p={[0, 0.9, 0]} s={[0.6, 1.8, 0.5]} c="#2a2e3d" />
          {[0.4, 0.8, 1.2, 1.6].map((y) => (
            <group key={y}>
              <B p={[0, y, 0.26]} s={[0.5, 0.14, 0.02]} c="#3a3f52" />
              <Sp p={[-0.15, y, 0.28]} r={0.03} c="#37d67a" />
              <Sp p={[0, y, 0.28]} r={0.03} c="#ffcf3b" />
            </group>
          ))}
        </group>
      )
    case 'Finance': // safe + coins
      return (
        <group position={[1.45, 0, dz - 0.3]}>
          <B p={[0, 0.5, 0]} s={[0.8, 1, 0.7]} c="#3a3f52" />
          <mesh position={[0, 0.55, 0.36]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.18, 0.18, 0.04, 20]} /><Mat color="#c9d2e2" {...M} /></mesh>
          <Cy p={[0, 1.06, 0]} r={0.14} h={0.05} c="#ffcf3b" />
          <Cy p={[0, 1.11, 0]} r={0.14} h={0.05} c="#ffd94b" />
        </group>
      )
    case 'Growth': // megaphone
      return (
        <group position={[0.72, 1.0, dz]} rotation={[0, -0.5, 0.3]}>
          <mesh castShadow><coneGeometry args={[0.2, 0.36, 18, 1, true]} /><Mat color="#f2617a" side={2} {...M} /></mesh>
          <Cy p={[0, -0.24, 0]} r={0.07} h={0.16} c="#7a1730" />
        </group>
      )
    case 'Product': // kanban board
      return (
        <group position={[1.42, 0.9, dz - 0.2]}>
          <B p={[0, 0.5, 0]} s={[0.9, 0.7, 0.05]} c="#f6f8fc" />
          {[-0.28, 0, 0.28].map((cx) => [0.6, 0.4].map((cy) => <B key={`${cx}-${cy}`} p={[cx, cy, 0.04]} s={[0.2, 0.14, 0.02]} c={cy > 0.5 ? '#ffe08a' : '#a7d8ff'} />))}
        </group>
      )
    case 'People': // potted plant
      return (
        <group position={[1.4, 0, dz - 0.2]}>
          <B p={[0, 0.3, 0]} s={[0.5, 0.5, 0.5]} c="#c17a4a" />
          <Cy p={[0, 0.7, 0]} r={0.06} h={0.4} c={WOOD_D} />
          <Sp p={[0, 1.05, 0]} r={0.42} c="#6cbf6c" />
          <Sp p={[-0.3, 0.9, 0]} r={0.26} c="#5faf5f" />
        </group>
      )
    default:
      return null
  }
}

// Un accent par coéquipier · pour qu'une rangée de soucoupes ou de
// champignons se lise comme un ensemble et non comme des clones.
//
// Les huit teintes étaient du fluo pur — fuchsia, cyan électrique, vert acide.
// Sur une soucoupe ou un pouf, c'est-à-dire sur un volume de près d'un mètre,
// une teinte pareille ne ponctue pas : elle devient le point le plus lumineux
// de la pièce, et l'œil y va avant d'aller aux personnages. Ce sont les mêmes
// familles de couleurs, rabattues dans les tons d'un dojo : terre cuite,
// safran, ardoise, mousse, bois, prune, céladon, vieux rose. La variété est
// intacte, le cri a disparu.
const FUN_COLORS = ['#b5614f', '#c79a4a', '#5f7286', '#6f8a55', '#a8784f', '#7a6180', '#7fa198', '#b07f86']
const funColor = (id: string) => FUN_COLORS[Math.abs(hashStr(id)) % FUN_COLORS.length]

// chair seat/back colour per theme (chairs are skipped for saucers & pools)
const CHAIR: Record<string, [string, string]> = {
  lab: ['#dfeaee', '#c3d6dc'], castle: ['#5a4a2b', '#4a3c22'], factory: ['#6b7280', '#565c68'],
  garden: ['#6b8f4a', '#4f7d3a'], startup: ['#4a5270', '#4a5270'], forest: ['#6b4a2a', '#4f3620'],
  wonderland: ['#ff9ecb', '#c98cff'], dojo: ['#7a4a24', '#5a3a1c'],
}

// ============================================================================
// LES SIÈGES
//
// Un tube, une croix, une planche et une plaque : quatre boîtes, répétées
// douze fois par salle, dans neuf mondes sur onze. C'était, après les
// personnages, l'objet le plus présent à l'écran — et le moins dessiné.
//
// Ce qui manquait n'est pas de la finesse, c'est de la STRUCTURE. Une chaise
// de bureau se reconnaît à son piètement à cinq branches et à ses roulettes,
// pas à son assise ; un tabouret à ses pieds écartés ; un banc à ses
// traverses. Chacune de ces choses coûte un maillage et se lit à cette
// distance, là où un galbe de deux millimètres ne se lit pas.
//
// Et un dojo zen n'a pas de chaise de bureau. Les quatre familles suivent le
// monde : chaise à roulettes là où l'on travaille sur écran, tabouret là où
// le sol compte, banc au château, souche en forêt.
// ============================================================================

type SeatKind = 'task' | 'stool' | 'bench' | 'stump'
const SEAT_KIND: Record<string, SeatKind> = {
  startup: 'task', lab: 'task', factory: 'task', backrooms: 'task',
  dojo: 'stool', garden: 'stool', wonderland: 'stool',
  castle: 'bench', forest: 'stump',
}

/** La chaise de travail · piètement cinq branches, vérin, assise galbée,
 *  dossier lombaire, accoudoirs. */
function TaskChair({ seat, back }: { seat: string; back: string }) {
  const metal = { roughness: 0.55, metalness: 0.3 }
  return (
    <group>
      {/* le piètement · CINQ branches, c'est la signature de l'objet */}
      {Array.from({ length: 5 }).map((_, i) => {
        const a = (i / 5) * Math.PI * 2 + 0.35
        return (
          <group key={i} rotation={[0, a, 0]}>
            <mesh position={[0, 0.09, 0.17]} rotation={[0.07, 0, 0]} geometry={roundedBox(0.1, 0.06, 0.36, 0.025)} castShadow>
              <Mat color="#2b2f3d" {...metal} />
            </mesh>
            {/* la roulette */}
            <mesh position={[0, 0.045, 0.34]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.045, 0.045, 0.055, 12]} />
              <Mat color="#15171f" roughness={0.95} />
            </mesh>
          </group>
        )
      })}
      {/* le vérin, en deux diamètres · un tube unique se lit comme un bâton */}
      <Cy p={[0, 0.22, 0]} r={0.055} h={0.24} c="#7f8794" />
      <Cy p={[0, 0.38, 0]} r={0.036} h={0.2} c="#c9cfd9" />
      <mesh position={[0, 0.48, 0.02]} geometry={roundedBox(0.3, 0.08, 0.32, 0.03)}>
        <Mat color="#20242f" {...metal} />
      </mesh>
      {/* l'assise · et son bourrelet avant, qui seul fait lire un coussin
          plutôt qu'une planche */}
      <mesh position={[0, 0.57, 0.02]} geometry={roundedBox(0.64, 0.11, 0.62, 0.08)} castShadow>
        <Mat color={seat} roughness={0.88} />
      </mesh>
      <mesh position={[0, 0.555, 0.31]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <capsuleGeometry args={[0.055, 0.5, 4, 10]} />
        <Mat color={seat} roughness={0.9} />
      </mesh>
      {/* la colonne du dossier, puis le dossier, incliné */}
      <mesh position={[0, 0.74, -0.3]} rotation={[0.2, 0, 0]} geometry={roundedBox(0.11, 0.36, 0.09, 0.03)}>
        <Mat color="#20242f" {...metal} />
      </mesh>
      <group position={[0, 1.06, -0.37]} rotation={[0.15, 0, 0]}>
        <mesh geometry={roundedBox(0.58, 0.64, 0.1, 0.1)} castShadow>
          <Mat color={back} roughness={0.88} />
        </mesh>
        <mesh position={[0, -0.21, 0.07]} rotation={[0, 0, Math.PI / 2]}>
          <capsuleGeometry args={[0.05, 0.42, 4, 10]} />
          <Mat color={back} roughness={0.9} />
        </mesh>
      </group>
      {/* les accoudoirs */}
      {[-1, 1].map((sd) => (
        <group key={sd}>
          <mesh position={[sd * 0.34, 0.68, -0.12]} geometry={roundedBox(0.06, 0.26, 0.07, 0.02)}>
            <Mat color="#20242f" {...metal} />
          </mesh>
          <mesh position={[sd * 0.34, 0.82, -0.02]} geometry={roundedBox(0.1, 0.05, 0.36, 0.025)} castShadow>
            <Mat color="#15171f" roughness={0.75} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/** Le tabouret · pieds écartés, ceinture, coussin. Un dojo zen n'a pas de
 *  chaise à roulettes. */
function Stool({ seat, back }: { seat: string; back: string }) {
  return (
    <group>
      {Array.from({ length: 4 }).map((_, i) => {
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4
        return (
          <group key={i} rotation={[0, a, 0]}>
            {/* le pied s'ÉCARTE · quatre pieds verticaux donnent une caisse */}
            <mesh position={[0, 0.27, 0.27]} rotation={[-0.16, 0, 0]} castShadow>
              <cylinderGeometry args={[0.042, 0.055, 0.56, 10]} />
              <Mat color={back} roughness={0.85} />
            </mesh>
            {/* la traverse basse, qui tient l'ensemble */}
            <mesh position={[0, 0.17, 0.22]} rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.026, 0.026, 0.42, 8]} />
              <Mat color={back} roughness={0.85} />
            </mesh>
          </group>
        )
      })}
      <mesh position={[0, 0.58, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.36, 0.34, 0.08, 22]} />
        <Mat color={back} roughness={0.8} />
      </mesh>
      {/* le zabuton · un tabouret nu est un billot */}
      <mesh position={[0, 0.66, 0]} geometry={roundedBox(0.6, 0.1, 0.58, 0.07)} castShadow>
        <Mat color={seat} roughness={0.95} />
      </mesh>
      {[-1, 1].map((sd) => (
        <mesh key={sd} position={[sd * 0.26, 0.66, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.05, 0.016, 6, 12]} />
          <Mat color={back} roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}

/** Le banc du château · deux tréteaux, une planche épaisse, une traverse
 *  chevillée et un coussin. */
function Bench({ seat, back }: { seat: string; back: string }) {
  return (
    <group>
      {[-1, 1].map((sd) => (
        <group key={sd} position={[sd * 0.42, 0, 0]}>
          <mesh position={[0, 0.28, 0]} geometry={roundedBox(0.14, 0.56, 0.5, 0.04)} castShadow>
            <Mat color={back} roughness={0.9} />
          </mesh>
          {/* le pied est ÉVIDÉ · c'est la découpe qui fait le meuble ancien */}
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.16, 0.22, 0.16]} />
            <Mat color="#2a2118" roughness={1} />
          </mesh>
          <mesh position={[0, 0.06, 0]} geometry={roundedBox(0.2, 0.09, 0.62, 0.03)} castShadow>
            <Mat color={back} roughness={0.9} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 0.16, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 0.98, 8]} />
        <Mat color={back} roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.6, 0]} geometry={roundedBox(1.24, 0.11, 0.54, 0.035)} castShadow receiveShadow>
        <Mat color={back} roughness={0.85} />
      </mesh>
      {/* les ferrures */}
      {[-0.42, 0.42].map((mx) => (
        <mesh key={mx} position={[mx, 0.545, 0]}>
          <boxGeometry args={[0.2, 0.025, 0.56]} />
          <Mat color="#4a4038" roughness={0.6} metalness={0.4} />
        </mesh>
      ))}
      <mesh position={[0, 0.7, 0.02]} geometry={roundedBox(0.72, 0.13, 0.46, 0.08)} castShadow>
        <Mat color={seat} roughness={0.95} />
      </mesh>
    </group>
  )
}

/** La souche · cernes, écorce, mousse. Personne n'apporte une chaise dans
 *  une forêt. */
function Stump({ seat }: { seat: string }) {
  return (
    <group>
      <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.46, 0.6, 16]} />
        <Mat color="#6b4a2a" roughness={1} />
      </mesh>
      {/* l'écorce · six plaques verticales, sinon c'est un fût de bois tourné */}
      {Array.from({ length: 7 }).map((_, i) => {
        const a = (i / 7) * Math.PI * 2
        return (
          <mesh key={i} position={[Math.cos(a) * 0.43, 0.3, Math.sin(a) * 0.43]} rotation={[0, -a, 0]} castShadow>
            <boxGeometry args={[0.07, 0.58, 0.16]} />
            <Mat color="#54381f" roughness={1} />
          </mesh>
        )
      })}
      {/* le dessus · aubier clair et cernes concentriques */}
      <mesh position={[0, 0.605, 0]} receiveShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.04, 16]} />
        <Mat color="#c4a06a" roughness={0.9} />
      </mesh>
      {[0.3, 0.2, 0.1].map((r) => (
        <mesh key={r} position={[0, 0.627, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[r - 0.018, r, 20]} />
          <Mat color="#9d7c4c" flat roughness={1} />
        </mesh>
      ))}
      {/* la mousse, d'un seul côté · elle pousse au nord */}
      <mesh position={[-0.3, 0.26, 0.24]} scale={[1, 0.6, 0.5]} castShadow>
        <sphereGeometry args={[0.2, 12, 10]} />
        <Mat color={seat} roughness={1} />
      </mesh>
      <mesh position={[0.34, 0.12, -0.26]} scale={[1, 0.5, 0.6]}>
        <sphereGeometry args={[0.14, 10, 8]} />
        <Mat color="#4f7d3a" roughness={1} />
      </mesh>
    </group>
  )
}

function Seat({ variant }: { variant: string }) {
  const [seat, back] = CHAIR[variant] ?? ['#4a5270', '#3a4058']
  switch (SEAT_KIND[variant] ?? 'task') {
    case 'stool': return <Stool seat={seat} back={back} />
    case 'bench': return <Bench seat={seat} back={back} />
    case 'stump': return <Stump seat={seat} />
    default: return <TaskChair seat={seat} back={back} />
  }
}

// The distinctive, fun desk shape for each theme. The surface sits at y≈0.9 so
// the shared Laptop lands on top. Rendered inside the desk group (at dz).
function WorkstationBase({ variant, id }: { variant: string; id: string }) {
  const hue = funColor(id)
  switch (variant) {
    case 'space': // a hovering flying saucer
      return (
        <group>
          <Cy p={[0, 0.42, 0]} r={1.25} h={0.05} c={hue} emissive={hue} ei={0.9} />
          <mesh position={[0, 0.7, 0]} scale={[1, 0.3, 1]} castShadow><sphereGeometry args={[1.22, 28, 18]} /><Mat color="#c3ccd8" metalness={0.55} roughness={0.3} /></mesh>
          <Cy p={[0, 0.84, 0]} r={0.5} h={0.14} c="#9aa3b2" />
          <mesh position={[0, 0.98, 0]}><sphereGeometry args={[0.44, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2]} /><Mat color={hue} emissive={hue} emissiveIntensity={0.5} transparent opacity={0.85} /></mesh>
          {/* blinking nav beacon on the dome */}
          <Glow p={[0, 1.28, 0]} r={0.06} c="#ff4d4d" i={1.2} />
          {/* rim running lights + a ring of hull portholes on the carlingue */}
          {Array.from({ length: 10 }).map((_, i) => { const a = (i / 10) * Math.PI * 2; return <Glow key={`r${i}`} p={[Math.cos(a) * 1.12, 0.72, Math.sin(a) * 1.12]} r={0.055} c={i % 2 ? '#ffffff' : hue} i={1.1} /> })}
          {Array.from({ length: 14 }).map((_, i) => { const a = (i / 14) * Math.PI * 2 + 0.2; return <mesh key={`h${i}`} position={[Math.cos(a) * 0.92, 0.78, Math.sin(a) * 0.92]}><sphereGeometry args={[0.05, 10, 8]} /><Mat color={i % 3 === 0 ? '#ffe066' : '#63d0ff'} emissive={i % 3 === 0 ? '#ffe066' : '#63d0ff'} emissiveIntensity={0.9} /></mesh> })}
        </group>
      )
    case 'garden': // a toadstool mushroom desk
      return (
        <group>
          <Cy p={[0, 0.42, 0]} r={0.34} h={0.84} c="#f4ecd8" />
          <mesh position={[0, 0.9, 0]} scale={[1, 0.5, 1]} castShadow><sphereGeometry args={[1.05, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2]} /><Mat color={hue} {...M} /></mesh>
          {/* classic chunky white spots, sitting on the curve of the cap */}
          {[[0, 1.35, 0.05, 0.22], [0.6, 1.1, 0.28, 0.2], [-0.6, 1.08, -0.1, 0.18], [0.28, 1.16, -0.55, 0.17], [-0.32, 1.14, 0.55, 0.19], [0.75, 0.95, -0.3, 0.15], [-0.72, 0.95, 0.4, 0.16], [0.15, 1.02, 0.78, 0.15]].map(([dx, dy, dz, r], i) => (
            <mesh key={i} position={[dx as number, dy as number, dz as number]} scale={[1, 0.7, 1]}><sphereGeometry args={[r as number, 16, 12]} /><Mat color="#ffffff" emissive="#ffffff" emissiveIntensity={0.12} roughness={0.8} /></mesh>
          ))}
        </group>
      )
    case 'wonderland': // a small fluffy white cloud desk
      return (
        <group>
          {[[0, 0.02, 0.72], [0.5, 0.04, 0.48], [-0.5, 0.04, 0.48], [0.28, -0.02, 0.44], [-0.28, -0.02, 0.44], [0, 0.14, 0.56]].map(([dx, dy, r], i) => (
            <mesh key={i} position={[dx as number, 0.9 + (dy as number), 0]} castShadow><sphereGeometry args={[r as number, 20, 16]} /><Mat color="#ffffff" emissive="#eef4ff" emissiveIntensity={0.18} roughness={1} /></mesh>
          ))}
          <Cy p={[0, 0.45, 0]} r={0.12} h={0.9} c={hue} emissive={hue} ei={0.35} />
        </group>
      )
    case 'forest': // un rondin fendu sur deux billots
      return (
        <group>
          {[-0.72, 0.72].map((sx) => (
            <group key={sx}>
              <Cy p={[sx, 0.38, 0]} r={0.24} h={0.76} c="#6b4a2a" />
              {/* l'écorce du billot */}
              {Array.from({ length: 5 }).map((_, i) => {
                const a = (i / 5) * Math.PI * 2 + sx
                return <mesh key={i} position={[sx + Math.cos(a) * 0.23, 0.38, Math.sin(a) * 0.23]} rotation={[0, -a, 0]}><boxGeometry args={[0.05, 0.74, 0.12]} /><Mat color="#54381f" roughness={1} /></mesh>
              })}
            </group>
          ))}
          {/* LE RONDIN EST FENDU · une demi-lune posée à plat, pas un tronc
              rond. Un tronc rond ne peut rien porter, et l'ordinateur y
              glissait : c'est la face sciée qui fait la table. */}
          <mesh position={[0, 0.78, 0]} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
            <cylinderGeometry args={[0.36, 0.36, 2.0, 18, 1, false, 0, Math.PI]} />
            <Mat color="#8a5a34" roughness={0.95} />
          </mesh>
          <mesh position={[0, 0.9, 0]} geometry={roundedBox(2.0, 0.06, 0.7, 0.02)} receiveShadow>
            <Mat color="#c4a06a" roughness={0.9} />
          </mesh>
          {/* les cernes, aux deux bouts */}
          {[-1, 1].map((sd) => (
            <group key={sd} position={[sd * 1.0, 0.78, 0]} rotation={[0, sd * Math.PI / 2, 0]}>
              {[0.3, 0.21, 0.12].map((r) => (
                <mesh key={r} position={[0, 0, 0.01]}><ringGeometry args={[r - 0.02, r, 20, 1, 0, Math.PI]} /><Mat color="#9d7c4c" flat roughness={1} /></mesh>
              ))}
            </group>
          ))}
          <Sp p={[0.95, 1.0, 0.15]} r={0.13} c={hue} emissive={hue} ei={0.4} />
          <Sp p={[-0.9, 0.6, -0.2]} r={0.16} c="#6cbf6c" />
          {/* une pousse de champignon sur le billot de gauche */}
          <Cy p={[-0.76, 0.82, 0.16]} r={0.03} h={0.14} c="#f2ead8" />
          <Co p={[-0.76, 0.93, 0.16]} r={0.1} h={0.1} c="#c0392b" />
        </group>
      )
    case 'lab': // une paillasse · dosseret, tablette basse, tiroir, vérins
      return (
        <group>
          <mesh position={[0, 0.9, 0]} geometry={roundedBox(1.92, 0.13, 0.88, 0.03)} castShadow receiveShadow>
            <Mat color="#eef5f7" roughness={0.45} />
          </mesh>
          <B p={[0, 0.9, 0.45]} s={[1.9, 0.05, 0.04]} c="#00e6ff" emissive="#00e6ff" ei={0.7} />
          {/* le DOSSERET · une paillasse sans relevé au fond laisse tout
              tomber derrière ; c'est aussi lui qui la distingue d'une table */}
          <mesh position={[0, 1.02, -0.43]} geometry={roundedBox(1.9, 0.22, 0.05, 0.02)} castShadow>
            <Mat color="#dfeaee" roughness={0.5} />
          </mesh>
          <B p={[0, 1.12, -0.43]} s={[1.9, 0.03, 0.06]} c={hue} emissive={hue} ei={0.5} />
          {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => <Cy key={i} p={[lx as number, 0.46, lz as number]} r={0.055} h={0.84} c="#cbdde3" />)}
          {/* les pieds réglables · le détail qui dit « laboratoire » */}
          {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => <Cy key={'f' + i} p={[lx as number, 0.03, lz as number]} r={0.085} h={0.06} c="#9aa8ad" />)}
          {/* la tablette inférieure, et son bac de flacons */}
          <mesh position={[0, 0.26, -0.06]} geometry={roundedBox(1.62, 0.05, 0.62, 0.02)} receiveShadow>
            <Mat color="#dfeaee" roughness={0.5} />
          </mesh>
          <mesh position={[0.5, 0.36, -0.06]} geometry={roundedBox(0.52, 0.16, 0.42, 0.03)} castShadow>
            <Mat color="#c3d6dc" roughness={0.6} />
          </mesh>
          {[-0.14, 0, 0.14].map((bx) => <Cy key={bx} p={[0.5 + bx, 0.47, -0.06]} r={0.045} h={0.18} c="#e6f3f6" />)}
          {/* le tiroir sous le plateau, côté coéquipier */}
          <group position={[-0.52, 0.72, 0.16]}>
            <mesh geometry={roundedBox(0.66, 0.16, 0.5, 0.02)} castShadow><Mat color="#dfeaee" roughness={0.5} /></mesh>
            <B p={[0, 0, 0.26]} s={[0.3, 0.035, 0.035]} c="#8fa6ad" />
          </group>
        </group>
      )
    case 'castle': // une table de banquet sur tréteaux, chevillée et ferrée
      return (
        <group>
          {/* le plateau · deux madriers jointés, pas une dalle */}
          {[-0.24, 0.24].map((pz) => (
            <mesh key={pz} position={[0, 0.9, pz]} geometry={roundedBox(2.0, 0.15, 0.46, 0.02)} castShadow receiveShadow>
              <Mat color="#6b4f2a" roughness={0.92} />
            </mesh>
          ))}
          <B p={[0, 0.985, 0]} s={[0.66, 0.02, 0.97]} c={hue} />
          {/* LES TRÉTEAUX · une table de banquet se démonte, elle ne se visse
              pas. Deux piètements en V, une traverse chevillée, des ferrures. */}
          {[-0.78, 0.78].map((sx) => (
            <group key={sx} position={[sx, 0, 0]}>
              {[-1, 1].map((sd) => (
                <mesh key={sd} position={[0, 0.42, sd * 0.2]} rotation={[sd * 0.26, 0, 0]} castShadow>
                  <boxGeometry args={[0.17, 0.86, 0.15]} />
                  <Mat color="#3f2e18" roughness={0.95} />
                </mesh>
              ))}
              <mesh position={[0, 0.07, 0]} geometry={roundedBox(0.24, 0.1, 0.9, 0.03)} castShadow>
                <Mat color="#3f2e18" roughness={0.95} />
              </mesh>
              <mesh position={[0, 0.78, 0]}>
                <boxGeometry args={[0.26, 0.09, 0.62]} />
                <Mat color="#4a3c22" roughness={0.9} />
              </mesh>
            </group>
          ))}
          <mesh position={[0, 0.3, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.055, 0.055, 1.78, 8]} />
            <Mat color="#3f2e18" roughness={0.95} />
          </mesh>
          {/* les ferrures forgées, aux angles */}
          {[-0.92, 0.92].map((mx) => (
            <mesh key={mx} position={[mx, 0.83, 0]}>
              <boxGeometry args={[0.14, 0.05, 0.9]} />
              <Mat color="#3a342c" roughness={0.55} metalness={0.45} />
            </mesh>
          ))}
        </group>
      )
    case 'factory': // un établi d'atelier · panneau perforé, rail, servante
      return (
        <group>
          <mesh position={[0, 0.9, 0]} geometry={roundedBox(1.92, 0.15, 0.88, 0.025)} castShadow receiveShadow>
            <Mat color="#9aa0aa" roughness={0.5} metalness={0.35} />
          </mesh>
          <B p={[0, 0.9, 0.45]} s={[1.9, 0.06, 0.05]} c="#f2c200" />
          {[-0.5, -0.1, 0.3].map((bx, i) => <Glow key={bx} p={[bx, 0.985, -0.3]} r={0.05} c={['#37d67a', '#ff5a3a', hue][i]} i={0.9} />)}
          {/* LE PANNEAU PERFORÉ et son rail · l'outillage se range à la
              verticale dans un atelier, et c'est ce mur d'outils qui dit le
              métier bien mieux que la table qui le porte */}
          <mesh position={[0, 1.18, -0.44]} geometry={roundedBox(1.84, 0.5, 0.04, 0.015)} castShadow>
            <Mat color="#6b7280" roughness={0.6} metalness={0.3} />
          </mesh>
          {/* PAS de perforations en maillages · vingt et un cylindres par
              panneau, douze panneaux par salle, pour des trous de deux
              pixels. Deux rainures horizontales donnent la même lecture de
              tôle percée pour deux maillages. */}
          {[1.06, 1.26].map((gy) => (
            <B key={gy} p={[0, gy, -0.415]} s={[1.76, 0.02, 0.02]} c="#3f444e" />
          ))}
          {[[-0.5, '#f2c200'], [0.1, '#c0392b'], [0.62, '#5b606b']].map(([tx, tc], i) => (
            <group key={i} position={[tx as number, 1.24, -0.38]}>
              <Cy p={[0, -0.1, 0]} r={0.02} h={0.26} c="#8f949e" />
              <mesh position={[0, -0.26, 0]} geometry={roundedBox(0.1, 0.12, 0.05, 0.02)}><Mat color={tc as string} roughness={0.7} /></mesh>
            </group>
          ))}
          {/* le piètement · profilés, entretoise diagonale, et une servante */}
          {[[-0.85, -0.35], [0.85, -0.35], [-0.85, 0.35], [0.85, 0.35]].map(([lx, lz], i) => <B key={i} p={[lx as number, 0.42, lz as number]} s={[0.12, 0.84, 0.12]} c="#565c68" />)}
          {[-1, 1].map((sd) => (
            <mesh key={sd} position={[sd * 0.85, 0.42, 0]} rotation={[0.72, 0, 0]}>
              <boxGeometry args={[0.05, 0.9, 0.05]} />
              <Mat color="#565c68" roughness={0.6} metalness={0.3} />
            </mesh>
          ))}
          <group position={[0.48, 0.28, -0.04]}>
            <mesh geometry={roundedBox(0.66, 0.54, 0.56, 0.03)} castShadow><Mat color="#c0392b" roughness={0.55} metalness={0.2} /></mesh>
            {[-0.16, 0.02, 0.2].map((dy) => (
              <B key={dy} p={[0, dy, 0.29]} s={[0.56, 0.13, 0.02]} c="#a32e20" />
            ))}
            {[-0.16, 0.02, 0.2].map((dy) => (
              <B key={'h' + dy} p={[0, dy, 0.31]} s={[0.24, 0.025, 0.025]} c="#e6e9ee" />
            ))}
          </group>
        </group>
      )
    case 'startup':
      // Un plateau noir sur deux joues noires, et c'était tout : l'objet le
      // plus répété de la scène — six à douze fois — était une dalle. Ce qui
      // fait un bureau, ce n'est pas sa forme générale, c'est ce qu'on lui
      // ajoute : un chant plus clair sur le plateau, un caisson à tiroirs sous
      // un des côtés, une traverse entre les pieds, un passe-câble. Chacun
      // coûte un maillage et se lit à cette distance.
      return (
        <group>
          <B p={[0, 0.9, 0]} s={[1.9, 0.09, 0.85]} c="#20242f" />
          {/* le chant · une arête plus claire, c'est elle qui détache le
              plateau du pied sur une photo comme dans une pièce */}
          <B p={[0, 0.855, 0.44]} s={[1.9, 0.035, 0.05]} c="#4a5164" />
          <B p={[0, 0.82, 0]} s={[1.96, 0.035, 0.9]} c={hue} emissive={hue} ei={0.5} />
          {[-0.82, 0.82].map((lx) => <B key={lx} p={[lx, 0.44, 0]} s={[0.09, 0.86, 0.72]} c="#2b2f3d" />)}
          {/* la traverse · deux joues sans rien entre elles donnent une table
              qui ne tient pas debout */}
          <B p={[0, 0.16, -0.24]} s={[1.62, 0.07, 0.07]} c="#2b2f3d" />
          {/* le caisson à tiroirs, sous la moitié droite */}
          <group position={[0.52, 0.42, -0.04]}>
            <B p={[0, 0, 0]} s={[0.56, 0.82, 0.62]} c="#262b38" />
            {[-0.24, 0, 0.24].map((dy) => (
              <group key={dy}>
                <B p={[0, dy, 0.32]} s={[0.5, 0.2, 0.03]} c="#333a4b" />
                <B p={[0, dy, 0.35]} s={[0.18, 0.03, 0.03]} c="#6f7890" />
              </group>
            ))}
          </group>
          {/* le passe-câble */}
          <Cy p={[-0.62, 0.95, -0.28]} r={0.07} h={0.03} c="#11141c" />
        </group>
      )
    case 'backrooms': // la table pliante · piètement en X, stratifié écaillé
      return (
        <group>
          <mesh position={[0, 0.9, 0]} geometry={roundedBox(1.9, 0.07, 0.85, 0.02)} castShadow receiveShadow>
            <Mat color="#d9cfa4" roughness={0.75} />
          </mesh>
          <B p={[0, 0.858, 0]} s={[1.94, 0.03, 0.89]} c="#a89e70" />
          {/* LE PIÈTEMENT EN X · c'est lui, et lui seul, qui fait qu'on
              reconnaît une table pliante de salle des fêtes */}
          {[-0.72, 0.72].map((sx) => (
            <group key={sx} position={[sx, 0, 0]}>
              {[-1, 1].map((sd) => (
                <mesh key={sd} position={[0, 0.43, 0]} rotation={[sd * 0.42, 0, 0]}>
                  <cylinderGeometry args={[0.032, 0.032, 0.92, 8]} />
                  <Mat color="#8a8a92" roughness={0.5} metalness={0.35} />
                </mesh>
              ))}
              <mesh position={[0, 0.43, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.026, 0.026, 0.5, 6]} />
                <Mat color="#8a8a92" roughness={0.5} metalness={0.35} />
              </mesh>
              {[-1, 1].map((sd) => (
                <mesh key={'f' + sd} position={[0, 0.02, sd * 0.38]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.03, 0.03, 0.4, 6]} />
                  <Mat color="#6f6f78" roughness={0.6} metalness={0.3} />
                </mesh>
              ))}
            </group>
          ))}
          {/* l'usure · deux auréoles de tasse et un coin écaillé. Une table
              neuve dans les Backrooms est un contresens. */}
          {[[-0.55, 0.2], [0.42, -0.24]].map(([cx, cz], i) => (
            <mesh key={i} position={[cx as number, 0.937, cz as number]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.055, 0.075, 18]} />
              <Mat color="#8d7f4a" flat transparent opacity={0.6} />
            </mesh>
          ))}
          <mesh position={[0.84, 0.937, 0.36]} rotation={[-Math.PI / 2, 0, 0.6]}>
            <planeGeometry args={[0.16, 0.12]} />
            <Mat color="#a89e70" flat />
          </mesh>
        </group>
      )
    case 'dojo':
    default:
      // LE BUREAU PAR DÉFAUT, donc celui qu'on voit le plus : c'est lui que
      // portent le dojo zen et tous les mondes sans table propre. Il était
      // une planche sur quatre bâtons.
      //
      // Ce qui fait une table en bois, ce n'est pas le plateau : c'est la
      // CEINTURE sous le plateau, qui l'épaissit et le sépare des pieds, et
      // la traverse basse qui empêche l'ensemble de se déformer. Un menuisier
      // les met parce qu'il le faut ; l'œil les cherche pour la même raison.
      return (
        <group>
          {/* le plateau · chant chanfreiné, pour que la lumière accroche
              l'arête au lieu de la manquer */}
          <mesh position={[0, 0.9, 0]} geometry={roundedBox(1.92, 0.11, 0.86, 0.035)} castShadow receiveShadow>
            <Mat color={WOOD} roughness={0.78} />
          </mesh>
          {/* la ceinture · trois côtés, jamais celui du coéquipier */}
          <B p={[0, 0.78, -0.36]} s={[1.76, 0.14, 0.06]} c={WOOD_D} />
          {[-0.88, 0.88].map((sx) => <B key={sx} p={[sx, 0.78, 0]} s={[0.06, 0.14, 0.76]} c={WOOD_D} />)}
          {/* les pieds · légèrement fuselés, et rentrés sous le plateau */}
          {[[-0.82, -0.32], [0.82, -0.32], [-0.82, 0.32], [0.82, 0.32]].map(([lx, lz], i) => (
            <mesh key={i} position={[lx as number, 0.36, lz as number]} castShadow>
              <cylinderGeometry args={[0.048, 0.068, 0.72, 8]} />
              <Mat color={WOOD_D} roughness={0.82} />
            </mesh>
          ))}
          {/* la traverse basse et son entretoise */}
          {[-0.82, 0.82].map((sx) => (
            <mesh key={sx} position={[sx, 0.16, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.032, 0.032, 0.6, 8]} />
              <Mat color={WOOD_D} roughness={0.85} />
            </mesh>
          ))}
          <mesh position={[0, 0.16, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.032, 0.032, 1.6, 8]} />
            <Mat color={WOOD_D} roughness={0.85} />
          </mesh>
          {/* la tablette du dessous · un rouleau et une boîte y dorment */}
          <mesh position={[-0.42, 0.3, -0.1]} geometry={roundedBox(0.84, 0.05, 0.56, 0.02)} receiveShadow>
            <Mat color={WOOD_D} roughness={0.9} />
          </mesh>
          <mesh position={[-0.5, 0.37, -0.1]} rotation={[0, 0.2, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.055, 0.055, 0.5, 10]} />
            <Mat color={PAPER} roughness={0.95} />
          </mesh>
          <mesh position={[-0.16, 0.4, -0.12]} geometry={roundedBox(0.28, 0.16, 0.34, 0.02)} castShadow>
            <Mat color="#8e6a44" roughness={0.9} />
          </mesh>
        </group>
      )
  }
}

// The laptop, positioned at a given base y/z (agent-facing keyboard, glowing lid).
function Laptop({ y, z }: { y: number; z: number }) {
  return (
    <group position={[0, y, z]}>
      <B p={[0, 0, 0]} s={[0.92, 0.05, 0.62]} c="#20242f" />
      <B p={[0, 0.02, 0]} s={[0.86, 0.03, 0.56]} c="#2b2f3d" />
      {[...Array(4)].map((_, r) =>
        [...Array(9)].map((_, k) => <B key={`${r}-${k}`} p={[-0.34 + k * 0.085, 0.045, -0.16 + r * 0.09]} s={[0.06, 0.02, 0.06]} c="#454b63" />),
      )}
      <B p={[0, 0.045, -0.22]} s={[0.26, 0.012, 0.14]} c="#3a4058" />
      <mesh position={[0, 0.055, -0.02]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.72, 0.42]} />
        <meshBasicMaterial color="#2a7fa8" transparent opacity={0.16} depthWrite={false} />
      </mesh>
      <group position={[0, 0, 0.22]} rotation={[0.3, 0, 0]}>
        <B p={[0, 0.44, 0.02]} s={[0.94, 0.66, 0.04]} c="#2b2f3d" />
        <B p={[0, 0.44, -0.02]} s={[0.82, 0.54, 0.02]} c="#0f2233" emissive="#2a7fa8" ei={0.6} />
        <B p={[0, 0.72, 0.02]} s={[0.9, 0.05, 0.06]} c="#63d0ff" emissive="#63d0ff" ei={0.7} />
        <mesh position={[0, 0.42, 0.042]}><circleGeometry args={[0.08, 20]} /><meshBasicMaterial color="#63d0ff" transparent opacity={0.85} /></mesh>
      </group>
    </group>
  )
}

// Mêmes teintes de dojo pour les bouées de la villa · une bouée fait un mètre
// de diamètre et il y en a une par coéquipier.
const FLOAT_COLORS = ['#c08a72', '#cfae6a', '#7c8fa3', '#8aa172', '#c09a74', '#93809e']

function Station({ id, fn, x, z, variant }: { id: string; fn: Department; x: number; z: number; variant: string }) {
  const dz = z + DESK_FWD // desk centre (toward camera)

  // Villa: no desks · agents lounge in the pool on inflatable ring floats,
  // with a laptop on a floating tray in front of them.
  if (variant === 'villa') {
    const fc = FLOAT_COLORS[Math.abs(hashStr(id)) % FLOAT_COLORS.length]
    return (
      <group position={[x, 0, 0]}>
        {/* inflatable ring float around the agent */}
        <mesh position={[0, 0.55, z + 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.95, 0.3, 16, 30]} />
          <Mat color={fc} roughness={0.5} />
        </mesh>
        {/* floating laptop tray */}
        <group position={[0, 0, dz + 0.1]}>
          <mesh position={[0, 0.52, 0]} castShadow><cylinderGeometry args={[0.62, 0.62, 0.12, 22]} /><Mat color="#fff6e6" roughness={0.6} /></mesh>
          <mesh position={[0, 0.46, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.62, 0.12, 12, 24]} /><Mat color="#ffffff" /></mesh>
          <Laptop y={0.62} z={-0.05} />
        </group>
      </group>
    )
  }

  // les soucoupes flottent (pas de siège) · partout ailleurs, le siège du
  // monde (voir Seat : chaise à roulettes, tabouret, banc ou souche)
  const noChair = variant === 'space'
  return (
    <group position={[x, 0, 0]}>
      {!noChair && (
        <group position={[0, 0, z - 0.55]}>
          <Seat variant={variant} />
        </group>
      )}

      <group position={[0, 0, dz]}>
        <WorkstationBase variant={variant} id={id} />
      </group>

      <Laptop y={0.96} z={z + 0.55} />
      <JobProp fn={fn} dz={dz} />
    </group>
  )
}

function Lantern({ x, z, c = '#e0524f' }: { x: number; z: number; c?: string }) {
  // a floor-standing paper lantern on a slim post (no ceiling to hang from)
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 0.05, 0]}><cylinderGeometry args={[0.16, 0.2, 0.1, 16]} /><Mat color={'#2b2b2b'} /></mesh>
      <mesh position={[0, 1.0, 0]}><cylinderGeometry args={[0.025, 0.025, 1.9, 8]} /><Mat color={'#333'} /></mesh>
      <mesh position={[0, 1.95, 0]} castShadow>
        <cylinderGeometry args={[0.34, 0.34, 0.7, 18]} />
        <Mat color={c} emissive={c} emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0, 1.95, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.24, 18]} />
        <Mat color={'#fff2c4'} emissive={'#ffcf6a'} emissiveIntensity={0.6} />
      </mesh>
    </group>
  )
}

// A glowing accent orb on a slim post · the "plain" template corner marker.
function Beacon({ x, z, c }: { x: number; z: number; c: string }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.9, 0]} r={0.14} h={1.8} c="#3a3f52" />
      <mesh position={[0, 1.95, 0]} castShadow>
        <icosahedronGeometry args={[0.34, 0]} />
        <Mat color={c} emissive={c} emissiveIntensity={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

// A themed planter/console for the back corners of a "plain" template.
function Planter({ x, z, c, accent }: { x: number; z: number; c: string; accent: string }) {
  return (
    <group position={[x, 0, z]}>
      <B p={[0, 0.4, 0]} s={[1.0, 0.8, 0.7]} c={c} />
      <B p={[0, 0.86, 0]} s={[1.05, 0.12, 0.75]} c={accent} emissive={accent} ei={0.35} />
      <Cy p={[0, 1.2, 0]} r={0.06} h={0.6} c="#4a5270" />
      <Sp p={[0, 1.55, 0]} r={0.28} c={accent} />
    </group>
  )
}

// Zen garden: cherry tree, stone lantern, bamboo, paper lanterns, taiko & bonsai.
function ZenGarden({ backZ, accent }: { backZ: number; accent: string }) {
  return (
    <group>
      {/* Les lanternes encadraient le fond à quatre unités de l'axe, c'est-à-dire
          pile là où se tient le maître depuis qu'il a son estrade. Elles
          filent dans les angles : le fond de la salle appartient désormais à
          la porte (à gauche) et à l'estrade (à droite). */}
      <Lantern x={-7.4} z={backZ + 1.5} c={accent} />
      <Lantern x={6.6} z={backZ + 1.5} c={accent} />
      <CherryTree x={-8.6} z={2.6} blossom={accent} />
      <StoneLantern x={-8.7} z={-2.2} />
      <Bamboo x={8.7} z={-1.5} />
      <Bamboo x={8.9} z={backZ + 2.6} />
      {[-8.4, -6.8, 6.3].map((rx) => (
        <group key={rx} position={[rx, 0, backZ + 1.3]}>
          <Sp p={[0, 0.14, 0]} r={0.3} c="#b7b2a6" />
          <Sp p={[0.42, 0.09, 0.22]} r={0.17} c="#c9c4b8" />
        </group>
      ))}
      <group position={[8, 0, backZ + 2]}>
        <mesh position={[0, 0.9, 0]} rotation={[0, 0, Math.PI / 2]} castShadow><cylinderGeometry args={[0.7, 0.7, 0.9, 24]} /><Mat color={'#c0392b'} {...M} /></mesh>
        {[-0.5, 0.5].map((s) => <mesh key={s} position={[s * 0.5, 0.35, 0]} rotation={[0, 0, s * 0.3]}><boxGeometry args={[0.1, 0.8, 0.1]} /><Mat color={WOOD_D} /></mesh>)}
      </group>
      <group position={[-8, 0, backZ + 2]}>
        <mesh position={[0, 0.3, 0]}><boxGeometry args={[0.7, 0.5, 0.7]} /><Mat color={'#c17a4a'} /></mesh>
        <mesh position={[0, 1.05, 0]} castShadow><sphereGeometry args={[0.45, 14, 12]} /><Mat color={'#6cbf6c'} /></mesh>
      </group>
    </group>
  )
}

// Generic themed accents for non-zen templates: corner beacons + planters.
function PlainAccents({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      <Beacon x={-8.6} z={2.6} c={P.accent} />
      <Beacon x={8.6} z={2.6} c={P.accent} />
      {/* les deux bandes latérales portent maintenant le mobilier de métier
          (voir stage.PROP_SLOTS) · les balises et les jardinières se collent
          au mur du fond, dans les angles qui restent */}
      <Beacon x={-9.5} z={backZ + 0.7} c={P.accent} />
      <Beacon x={9.5} z={backZ + 0.7} c={P.accent} />
      <Planter x={-6.2} z={backZ + 0.6} c={P.wallSide} accent={P.accent} />
      <Planter x={6.2} z={backZ + 0.6} c={P.wallSide} accent={P.accent} />
      {/* extra furnishings · floor lanterns, a lounge corner, a rug, plants & art */}
      <Lantern x={-7.2} z={5.2} c={P.accent} />
      <Lantern x={7.2} z={5.2} c={P.accent} />
      <LoungeCorner x={7.4} z={-1.5} c={P.wallSide} accent={P.accent} />
      <PottedPalm x={-6.8} z={7.4} />
      <PottedPalm x={-6.5} z={5.6} />
      <FloorRug x={0} z={2.4} c={P.accent} />
      <Sculpture x={5.4} z={5.4} c={P.trim} accent={P.accent} />
      <CrateStack x={-9.2} z={backZ + 0.8} c={P.wallSide} />
      <WallArt x={-6.5} y={3} z={backZ + 0.28} c={P.accent} />
      <WallArt x={6.5} y={3} z={backZ + 0.28} c={P.trim} />
    </group>
  )
}

// --- shared decorative props (reused across dojos) --------------------------
function PottedPalm({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, 0.28, 0]}><cylinderGeometry args={[0.34, 0.26, 0.56, 16]} /><Mat color="#c9cdd6" roughness={0.8} /></mesh>
      <mesh position={[0, 0.5, 0]}><cylinderGeometry args={[0.3, 0.3, 0.12, 16]} /><Mat color="#6b4a2a" /></mesh>
      {Array.from({ length: 7 }).map((_, i) => { const a = (i / 7) * Math.PI * 2; return (
        <mesh key={i} position={[Math.cos(a) * 0.28, 1.2, Math.sin(a) * 0.28]} rotation={[0.5, a, 0]} castShadow><boxGeometry args={[0.14, 1.5, 0.03]} /><Mat color={i % 2 ? '#3c9a52' : '#2f8747'} /></mesh>
      ) })}
      <Cy p={[0, 0.9, 0]} r={0.05} h={0.9} c="#4a7a3a" />
    </group>
  )
}
function LoungeCorner({ x, z, c, accent }: { x: number; z: number; c: string; accent: string }) {
  return (
    <group position={[x, 0, z]} rotation={[0, -0.5, 0]}>
      <B p={[0, 0.28, 0]} s={[2.2, 0.5, 0.9]} c={c} />
      <B p={[0, 0.72, -0.34]} s={[2.2, 0.9, 0.22]} c={c} />
      {[-0.6, 0.6].map((px) => <B key={px} p={[px, 0.72, 0.05]} s={[0.5, 0.22, 0.5]} c={accent} />)}
      {/* round side table with an orb */}
      <group position={[1.55, 0, 0.2]}>
        <Cy p={[0, 0.24, 0]} r={0.06} h={0.48} c="#2b2b2b" />
        <Cy p={[0, 0.5, 0]} r={0.42} h={0.06} c="#e7e3da" />
        <Sp p={[0, 0.62, 0]} r={0.12} c={accent} />
      </group>
    </group>
  )
}
function FloorRug({ x, z, c }: { x: number; z: number; c: string }) {
  return (
    <group position={[x, 0.015, z]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh receiveShadow><planeGeometry args={[7.2, 5]} /><Mat color="#efe9df" roughness={1} /></mesh>
      <mesh position={[0, 0, 0.001]}><ringGeometry args={[1.6, 1.9, 48]} /><Mat color={c} roughness={1} transparent opacity={0.7} /></mesh>
      <mesh position={[0, 0, 0.001]}><ringGeometry args={[2.6, 2.75, 48]} /><Mat color={c} roughness={1} transparent opacity={0.4} /></mesh>
    </group>
  )
}
function Sculpture({ x, z, c, accent }: { x: number; z: number; c: string; accent: string }) {
  return (
    <group position={[x, 0, z]}>
      <B p={[0, 0.3, 0]} s={[0.7, 0.6, 0.7]} c="#1c1c1c" />
      <Sp p={[0, 1.05, 0]} r={0.32} c={accent} />
      <Co p={[0, 1.7, 0]} r={0.3} h={0.55} c={c} />
    </group>
  )
}
function CrateStack({ x, z, c }: { x: number; z: number; c: string }) {
  return (
    <group position={[x, 0, z]}>
      <B p={[0, 0.35, 0]} s={[0.9, 0.7, 0.9]} c={c} />
      <B p={[0.25, 0.95, 0.1]} s={[0.7, 0.55, 0.7]} c="#c4a878" rot={[0, 0.4, 0]} />
      <B p={[-0.1, 1.5, -0.1]} s={[0.5, 0.45, 0.5]} c={c} rot={[0, -0.3, 0]} />
    </group>
  )
}
function WallArt({ x, y, z, c }: { x: number; y: number; z: number; c: string }) {
  return (
    <group position={[x, y, z]}>
      <B p={[0, 0, 0]} s={[1.5, 1.9, 0.06]} c="#20242c" />
      <B p={[0, 0, 0.04]} s={[1.3, 1.7, 0.02]} c="#f3f1ec" />
      <B p={[-0.2, 0.2, 0.06]} s={[0.7, 0.7, 0.01]} c={c} rot={[0, 0, 0.1]} />
      <Cy p={[0.35, -0.35, 0.06]} r={0.28} h={0.01} c="#e7d9b0" rot={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

function CherryTree({ x, z, blossom = '#ffb0d0' }: { x: number; z: number; blossom?: string }) {
  const blossoms: [number, number, number][] = [
    [0, 3.1, 0], [-0.7, 2.8, 0.2], [0.7, 2.9, -0.2], [-0.45, 3.45, -0.3], [0.5, 3.45, 0.3], [0, 2.55, 0.6], [0, 2.7, -0.6],
  ]
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 1.2, 0]} r={0.22} h={2.4} c={WOOD_D} />
      <Cy p={[-0.45, 2.2, 0.2]} r={0.09} h={1.0} c={WOOD_D} rot={[0, 0, 0.7]} />
      <Cy p={[0.5, 2.1, -0.2]} r={0.09} h={1.0} c={WOOD_D} rot={[0, 0, -0.6]} />
      {blossoms.map((p, i) => <Sp key={i} p={p} r={0.62} c={blossom} />)}
    </group>
  )
}

function StoneLantern({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.15, 0]} r={0.34} h={0.3} c="#9aa0a6" />
      <Cy p={[0, 0.55, 0]} r={0.12} h={0.6} c="#aab0b6" />
      <Cy p={[0, 0.95, 0]} r={0.34} h={0.24} c="#9aa0a6" />
      <mesh position={[0, 1.22, 0]} castShadow>
        <boxGeometry args={[0.42, 0.36, 0.42]} />
        <Mat color="#b7bcc2" emissive="#ffcf6a" emissiveIntensity={0.55} {...M} />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <coneGeometry args={[0.42, 0.36, 4]} />
        <Mat color="#8a9096" {...M} />
      </mesh>
      <Sp p={[0, 1.78, 0]} r={0.08} c="#8a9096" />
    </group>
  )
}

function Bamboo({ x, z }: { x: number; z: number }) {
  const stalks: [number, number, number][] = [[-0.25, 0, 3.0], [0.12, 0.2, 3.6], [0.36, -0.16, 2.6]]
  return (
    <group position={[x, 0, z]}>
      {stalks.map(([bx, bz, h], i) => (
        <group key={i} position={[bx, 0, bz]}>
          <Cy p={[0, h / 2, 0]} r={0.07} h={h} c="#7bbf5a" />
          {[0.9, 1.7, 2.5].filter((yy) => yy < h).map((yy) => <Sp key={yy} p={[0, yy, 0]} r={0.085} c="#5fa53f" />)}
          <Sp p={[0.2, h, 0.1]} r={0.2} c="#6cbf6c" />
          <Sp p={[-0.16, h - 0.12, -0.1]} r={0.16} c="#5faf5f" />
        </group>
      ))}
    </group>
  )
}

// ===========================================================================
// Theme-specific decor · one distinctive set per dojo template. Placed along the
// back wall and side edges (behind the desks), so each environment reads clearly
// as a start-up loft / space station / lab / villa / castle / garden / factory.
// ===========================================================================

// --- Start-up HQ: whiteboard, plants, beanbags, moving boxes, neon sign ------
// A low-poly mountain range for the far background of open-air dojos.
function Mountains({ z, c1, c2, snow }: { z: number; c1: string; c2: string; snow?: boolean }) {
  const peaks: [number, number, number][] = [[-13, 6, 6.5], [-7.5, 8, 7.5], [-2, 6, 6], [3.5, 8.5, 8], [9, 6.5, 7], [14, 7.5, 7]]
  return (
    <group position={[0, 0, z]}>
      {peaks.map(([x, h, r], i) => (
        <group key={i}>
          <mesh position={[x, 0, 0]} scale={[1, 1, 0.45]}><coneGeometry args={[r, h, 4]} /><Mat color={i % 2 ? c1 : c2} roughness={1} flatShading /></mesh>
          {snow && <mesh position={[x, h * 0.52 - 0.5, 0.2]} scale={[1, 1, 0.45]}><coneGeometry args={[r * 0.34, h * 0.34, 4]} /><Mat color="#ffffff" roughness={1} flatShading /></mesh>}
        </group>
      ))}
    </group>
  )
}

// A modern two-storey glass-and-white villa with a rooftop pergola, balcony
// railings and a warm terrace · sat behind the Miami pool.
function ModernVilla({ x, z }: { x: number; z: number }) {
  const white = '#f5f1e8'
  const warm = '#e7dccb'
  const glass = '#8fd7e6'
  return (
    <group position={[x, 0, z]}>
      {/* ground floor + cantilevered upper floor */}
      <B p={[0, 1.4, 0]} s={[6.4, 2.8, 3.4]} c={white} />
      <B p={[0, 2.9, 0]} s={[6.7, 0.18, 3.9]} c={warm} />
      <B p={[1.6, 4.0, 0.3]} s={[3.6, 2.0, 2.9]} c={white} />
      <B p={[1.6, 5.1, 0.3]} s={[3.9, 0.16, 3.2]} c={warm} />
      {/* glass window walls (ground) */}
      <B p={[-1.7, 1.3, 1.72]} s={[2.6, 2.0, 0.06]} c={glass} emissive="#4fc3d0" ei={0.28} />
      <B p={[1.5, 1.2, 1.72]} s={[2.0, 1.6, 0.06]} c={glass} emissive="#4fc3d0" ei={0.28} />
      {[-2.6, -1.7, -0.8].map((mx) => <B key={mx} p={[mx, 1.3, 1.76]} s={[0.05, 2.0, 0.04]} c={white} />)}
      {/* warm front door */}
      <B p={[2.5, 0.95, 1.73]} s={[0.9, 1.9, 0.06]} c="#c9784a" />
      {/* upper glass + balcony rail on the ground-floor roof */}
      <B p={[1.6, 4.1, 1.78]} s={[3.0, 1.5, 0.06]} c="#a7e0ec" emissive="#4fc3d0" ei={0.22} />
      <B p={[-1.8, 3.05, 1.8]} s={[2.6, 0.06, 0.06]} c={warm} />
      {[-3.0, -2.4, -1.8, -1.2, -0.6].map((rx) => <Cy key={rx} p={[rx, 3.0, 1.8]} r={0.03} h={0.32} c={warm} />)}
      {/* rooftop pergola: posts + slatted shade + greenery */}
      {[[-0.1, -0.9], [3.3, -0.9], [-0.1, 1.5], [3.3, 1.5]].map(([px, pz], i) => <Cy key={i} p={[px, 5.55, pz]} r={0.06} h={0.9} c="#c9b89a" />)}
      {[-0.6, 0.1, 0.8, 1.5, 2.2, 2.9].map((sx) => <B key={sx} p={[1.6 + (sx - 1.6), 6.02, 0.3]} s={[0.08, 0.06, 2.6]} c="#c9b89a" />)}
      <Sp p={[0.2, 5.7, -0.9]} r={0.4} c="#4faf5a" />
      <Sp p={[3.0, 5.7, 1.4]} r={0.36} c="#5cbf62" />
      {/* palm by the entrance */}
      <Co p={[4.3, 1.3, 1.2]} r={0.75} h={0.95} c="#3f9e52" />
      <Cy p={[4.3, 0.6, 1.2]} r={0.14} h={1.4} c="#b98a58" />
    </group>
  )
}

// A soft city skyline silhouette for the start-up loft.
function Skyline({ z, c }: { z: number; c: string }) {
  const towers: [number, number, number][] = [[-11, 5, 1.6], [-8.6, 7, 1.4], [-6.4, 4, 1.8], [-2, 8, 1.6], [0.6, 5.5, 1.4], [3, 9, 1.7], [6, 6, 1.5], [8.5, 7.5, 1.5], [11, 4.5, 1.7]]
  return (
    <group position={[0, 0, z]}>
      {towers.map(([x, h, w], i) => (
        <group key={i}>
          <B p={[x, h / 2, 0]} s={[w, h, 1]} c={c} />
          {Array.from({ length: Math.max(2, Math.round(h / 1.4)) }).map((_, r) => <Glow key={r} p={[x + (r % 2 ? 0.3 : -0.3), 1 + r * 1.2, 0.55]} r={0.05} c="#ffe9a0" i={0.7} />)}
        </group>
      ))}
    </group>
  )
}

function StartupDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* city skyline behind the loft */}
      <Skyline z={backZ - 4} c="#c6cbe8" />
      {/* Le tableau blanc était centré sur le mur du fond · il recouvrait la
          moitié de l'ouverture de la porte, et il occupe maintenant le mur
          DERRIÈRE le maître, ce qui lui donne un fond. */}
      <group position={[3.2, 2.7, backZ + 0.3]}>
        <B p={[0, 0, 0]} s={[5, 2.6, 0.1]} c="#f7f9fc" />
        <B p={[0, 0, -0.03]} s={[5.2, 2.8, 0.06]} c="#c7ccd6" />
        {[['#ffe08a', -1.7, 0.6], ['#a7d8ff', -1.2, 0.2], ['#ffb3c7', -1.6, -0.3], ['#b9f0c0', 1.5, 0.5], ['#ffd0a0', 1.1, 0.0], ['#d9c2ff', 1.7, -0.4]].map(([c, x, y], i) => (
          <B key={i} p={[x as number, y as number, 0.06]} s={[0.5, 0.4, 0.02]} c={c as string} rot={[0, 0, (i % 2 ? 0.06 : -0.05)]} />
        ))}
        <B p={[0, 1.5, 0]} s={[0.8, 0.09, 0.16]} c={P.accent} />
      </group>
      {/* neon bar sign on a side wall */}
      <group position={[-9.2, 3.4, backZ + 4]} rotation={[0, Math.PI / 2, 0]}>
        {[[-0.5, 0.4], [-0.15, 0.7], [0.2, 1.0], [0.55, 0.55]].map(([x, h], i) => (
          <B key={i} p={[x as number, (h as number) / 2, 0]} s={[0.16, h as number, 0.08]} c={P.accent} emissive={P.accent} ei={0.35} />
        ))}
      </group>
      <LoftPlant x={-8.4} z={backZ + 1.9} />
      <LoftPlant x={8.4} z={backZ + 1.9} />
      {/* beanbags near the front */}
      <mesh position={[-7.6, 0.35, 3]} castShadow scale={[1, 0.7, 1]}><sphereGeometry args={[0.7, 18, 14]} /><Mat color={P.accent} {...M} /></mesh>
      <mesh position={[7.7, 0.32, 3.2]} castShadow scale={[1, 0.7, 1]}><sphereGeometry args={[0.62, 18, 14]} /><Mat color="#ff9db1" {...M} /></mesh>
      {/* stacked moving boxes */}
      <group position={[8.2, 0, -0.5]}>
        <B p={[0, 0.35, 0]} s={[0.7, 0.7, 0.7]} c="#c79a6a" />
        <B p={[0.1, 1.0, 0.1]} s={[0.6, 0.6, 0.6]} c="#b98a58" />
        <B p={[-0.4, 0.35, 0.5]} s={[0.6, 0.7, 0.6]} c="#c79a6a" />
      </group>
      {/* accent area rug under the team */}
      {/* Un tapis de treize sur huit dans la couleur d'accent PURE : c'est la
          plus grande surface de la pièce après le sol, et elle criait. Teinte
          rabattue de moitié, et sans liseré — un Fresnel rasant sur un plan
          horizontal fait un halo à l'horizon (piège n° 4 du kit). */}
      {/* le grand tapis d'accent est retiré · treize sur huit posés sur du
          tatami, c'était la nappe qui cachait la natte */}
      {/* lounge couch + coffee table on the front-left */}
      <group position={[-8, 0, 5.4]} rotation={[0, 0.5, 0]}>
        <B p={[0, 0.32, 0]} s={[2.2, 0.4, 0.9]} c="#6b74a8" />
        <B p={[0, 0.7, -0.42]} s={[2.2, 0.7, 0.16]} c="#7c86bd" />
        <B p={[-1.02, 0.62, 0]} s={[0.18, 0.5, 0.9]} c="#7c86bd" />
        <B p={[1.02, 0.62, 0]} s={[0.18, 0.5, 0.9]} c="#7c86bd" />
      </group>
      {/* water cooler */}
      <group position={[8.6, 0, 5]}>
        <B p={[0, 0.55, 0]} s={[0.5, 1.1, 0.5]} c="#eef2f6" />
        <Sp p={[0, 1.35, 0]} r={0.34} c="#8fd0ff" emissive="#8fd0ff" ei={0.15} />
      </group>
      {/* pennant string across the room */}
      {[-4, -3.2, -2.4, -1.6, -0.8, 0, 0.8, 1.6, 2.4, 3.2, 4].map((x, i) => (
        <mesh key={x} position={[x, ROOM.wallH - 1.5 + Math.abs(x) * 0.02, 4.6]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.16, 0.3, 3]} />
          <Mat color={['#b07f86', '#c79a4a', '#7c8fa3', '#8aa172', '#7a6180'][i % 5]} {...M} />
        </mesh>
      ))}
      <LoftPlant x={6.6} z={7.2} />
    </group>
  )
}
function LoftPlant({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.35, 0]} r={0.32} h={0.7} c="#e7ded0" />
      {[[0, 1.3, 0, 0], [0.3, 1.15, 0.1, 0.5], [-0.3, 1.2, -0.1, -0.5], [0.15, 1.5, -0.2, 0.2]].map(([lx, ly, lz, rz], i) => (
        <mesh key={i} position={[lx as number, ly as number, lz as number]} rotation={[0.2, 0, rz as number]} scale={[0.5, 1.3, 0.1]} castShadow>
          <sphereGeometry args={[0.4, 12, 10]} /><Mat color={i % 2 ? '#4f9e52' : '#63bf66'} {...M} />
        </mesh>
      ))}
    </group>
  )
}

// --- Space Station: porthole planet, consoles, floor light strips, antenna ---
function SpaceDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* a Stargate looming in the deep background */}
      <group position={[0, 4.4, backZ - 6]}>
        {/* outer naquadah ring */}
        <mesh castShadow><torusGeometry args={[3.4, 0.55, 16, 48]} /><Mat color="#6b6f7a" metalness={0.7} roughness={0.35} /></mesh>
        <mesh><torusGeometry args={[3.0, 0.18, 12, 48]} /><Mat color="#4a4e58" metalness={0.6} roughness={0.4} /></mesh>
        {/* rippling event horizon */}
        <mesh position={[0, 0, -0.1]}><circleGeometry args={[2.85, 48]} /><Mat color="#2fb6e6" emissive="#39c6f0" emissiveIntensity={0.8} transparent opacity={0.9} /></mesh>
        <mesh position={[0, 0, 0]}><ringGeometry args={[1.6, 2.0, 48]} /><meshBasicMaterial color="#bfeeff" transparent opacity={0.4} side={2} /></mesh>
        {/* 9 chevrons; the top one locked (orange) */}
        {Array.from({ length: 9 }).map((_, i) => {
          const a = (i / 9) * Math.PI * 2 + Math.PI / 2
          const lit = i === 0
          return (
            <group key={i} position={[Math.cos(a) * 3.4, Math.sin(a) * 3.4, 0.2]} rotation={[0, 0, a - Math.PI / 2]}>
              <mesh><coneGeometry args={[0.34, 0.5, 3]} /><Mat color={lit ? '#ff7a1e' : '#8a2a12'} emissive={lit ? '#ff8a2e' : '#000'} emissiveIntensity={lit ? 0.9 : 0} metalness={0.5} roughness={0.4} /></mesh>
            </group>
          )
        })}
      </group>
      {/* Saturn in the background, with tilted rings */}
      <group position={[-8.5, 4.4, backZ - 2.5]} rotation={[0, 0, 0.4]}>
        <Sp p={[0, 0, 0]} r={2.0} c="#d9b877" emissive="#8a6f3a" ei={0.3} />
        <mesh position={[0, 0, 0]} scale={[1, 1, 0.18]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[3.0, 0.45, 2, 64]} /><Mat color="#cdb48a" emissive="#8a7550" emissiveIntensity={0.25} transparent opacity={0.92} side={2} /></mesh>
        <mesh position={[0, 0, 0]} scale={[1, 1, 0.18]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[3.7, 0.16, 2, 64]} /><Mat color="#b8a074" emissive="#7a663f" emissiveIntensity={0.25} transparent opacity={0.75} side={2} /></mesh>
      </group>
      {/* the Moon on the other side, cratered */}
      <group position={[8.5, 5, backZ - 2]}>
        <Sp p={[0, 0, 0]} r={1.35} c="#c9ccd6" emissive="#6a6f7b" ei={0.25} />
        {[[-0.45, 0.35, 0.28], [0.45, -0.2, 0.32], [0.1, 0.55, 0.2], [-0.25, -0.45, 0.25], [0.55, 0.35, 0.18]].map(([cx, cy, r], i) => (
          <mesh key={i} position={[cx as number, cy as number, 1.2]}><circleGeometry args={[r as number, 16]} /><meshBasicMaterial color="#9aa0ad" /></mesh>
        ))}
      </group>
      {/* le hublot passe derrière le maître · centré, il mordait sur
          l'ouverture de la porte */}
      <group position={[3.2, 3, backZ + 0.35]}>
        <mesh><torusGeometry args={[1.7, 0.22, 16, 40]} /><Mat color="#3a4890" metalness={0.6} roughness={0.3} /></mesh>
        <mesh position={[0, 0, -0.05]}><circleGeometry args={[1.6, 40]} /><meshBasicMaterial color="#05070f" /></mesh>
        <Sp p={[0.4, -0.2, 0.1]} r={0.9} c="#3d7bd6" emissive="#1b3f7a" ei={0.4} />
        <mesh position={[0.4, -0.2, 0.2]} scale={[1, 0.4, 1]}><sphereGeometry args={[0.92, 20, 8]} /><Mat color="#6fae6a" transparent opacity={0.5} /></mesh>
        {[[-1, 0.9], [1.1, 0.6], [-0.7, -1.1], [0.9, 1.1]].map(([x, y], i) => <Glow key={i} p={[x as number, y as number, 0.1]} r={0.03} c="#eaf6ff" i={1} />)}
      </group>
      {/* starfield across the back wall */}
      {[[-8, 4.6], [-6.4, 5.2], [-5.2, 3.8], [-3.4, 5], [6.2, 4.4], [7.6, 5.1], [5, 3.9], [3.6, 5.2], [-8.6, 2.4], [8.4, 2.8], [-2, 5.4], [2, 5.3]].map(([x, y], i) => (
        <Glow key={i} p={[x as number, y as number, backZ + 0.5]} r={0.04 + (i % 3) * 0.015} c="#eaf6ff" i={0.9} />
      ))}
      {/* control consoles along the back */}
      {[-7.3, 7.3].map((cx) => (
        <group key={cx} position={[cx, 0, backZ + 1.4]}>
          <B p={[0, 0.55, 0]} s={[2.4, 1.1, 0.5]} c="#141a30" />
          <B p={[0, 1.05, 0.2]} s={[2.2, 0.5, 0.15]} c="#0c1024" rot={[-0.5, 0, 0]} />
          {[-0.7, -0.2, 0.3, 0.8].map((dx, i) => <Glow key={i} p={[dx, 1.12, 0.34]} r={0.05} c={i % 2 ? P.accent : '#37d67a'} i={1} />)}
        </group>
      ))}
      {/* floor light strips running forward */}
      {/* les rubans lumineux s'arrêtent DEVANT l'estrade · ils la traversaient
          de part en part, et un ruban qui passe sous un plancher surélevé
          n'éclaire plus rien */}
      {[-2.4, 2.4].map((x) => <Strip key={x} p={[x, 0.03, backZ + 7]} s={[0.14, 6]} c={P.accent} rot={[-Math.PI / 2, 0, 0]} i={0.8} />)}
      {/* antenna dish in a corner */}
      <group position={[-8.6, 0, backZ + 2.2]}>
        <Cy p={[0, 1.2, 0]} r={0.08} h={2.4} c="#3a3f52" />
        <mesh position={[0, 2.4, 0.2]} rotation={[-0.7, 0, 0]}><coneGeometry args={[0.6, 0.4, 24, 1, true]} /><Mat color="#c9d2e2" side={2} metalness={0.4} roughness={0.5} /></mesh>
        <Glow p={[0, 2.5, 0.35]} r={0.05} c={P.accent} i={1} />
      </group>
    </group>
  )
}

// --- Science Lab: glassware bench, DNA helix, fume hood, periodic panel -------
function LabDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* reagent shelves on the side walls */}
      {[-9, 9].map((sx, si) => [1.6, 2.6].map((sy) => (
        <group key={`${sx}-${sy}`} position={[sx, sy, 1]} rotation={[0, si ? -Math.PI / 2 : Math.PI / 2, 0]}>
          <B p={[0, 0, 0]} s={[5, 0.08, 0.4]} c="#dfeaee" />
          {[-1.8, -1.1, -0.4, 0.4, 1.1, 1.8].map((bx, i) => (
            <group key={bx} position={[bx, 0.28, 0]}>
              <Cy p={[0, 0, 0]} r={0.11} h={0.46} c="#e6f3f6" />
              <Cy p={[0, -0.06, 0]} r={0.1} h={0.28} c={['#00e6ff', '#37d67a', '#ffcf3b', '#ff5aa0', '#8a5cff', '#ff8a1e'][i]} emissive={['#00e6ff', '#37d67a', '#ffcf3b', '#ff5aa0', '#8a5cff', '#ff8a1e'][i]} ei={0.4} />
            </group>
          ))}
        </group>
      )))}
      {/* bubbles rising above the back flasks */}
      {[-7.05, -6.5].map((x) => [0.7, 1.0, 1.3].map((y, k) => (
        <Sp key={`${x}-${y}`} p={[x + (k % 2 ? 0.05 : -0.05), y, backZ + 1.5]} r={0.05 - k * 0.008} c="#bff0ff" emissive="#bff0ff" ei={0.5} />
      )))}
      {/* La paillasse courait sur six unités au MILIEU du fond : la place du
          maître, et le passage du coursier. Elle a filé dans l'angle gauche,
          raccourcie à quatre — elle y tient sans mordre sur la porte. */}
      <group position={[-7.6, 0, backZ + 1.5]}>
        <B p={[0, 0.95, 0]} s={[4, 0.12, 0.9]} c="#dfeaee" />
        {[-1.5, -1.05, -0.6].map((x, i) => (
          <group key={x} position={[x, 1.0, 0]}>
            <Cy p={[0, 0.28, 0]} r={0.14} h={0.56} c="#cfeef2" />
            <Cy p={[0, 0.18, 0]} r={0.13} h={0.3} c={[P.accent, '#37d67a', '#ffcf3b'][i]} emissive={[P.accent, '#37d67a', '#ffcf3b'][i]} ei={0.5} />
          </group>
        ))}
        {[0.55, 1.1].map((x, i) => (
          <group key={x} position={[x, 1.0, 0]}>
            <Co p={[0, 0.34, 0]} r={0.24} h={0.5} c="#d3f0f4" />
            <Cy p={[0, 0.1, 0]} r={0.05} h={0.16} c="#d3f0f4" />
            <Sp p={[0, 0.2, 0]} r={0.16} c={i ? '#ff5aa0' : '#8a5cff'} emissive={i ? '#ff5aa0' : '#8a5cff'} ei={0.5} />
          </group>
        ))}
        {/* microscope */}
        <group position={[1.7, 1.0, 0]}>
          <B p={[0, 0.08, 0]} s={[0.3, 0.12, 0.4]} c="#2b3145" />
          <Cy p={[0, 0.4, -0.05]} r={0.05} h={0.6} c="#3a4058" rot={[0.3, 0, 0]} />
          <Cy p={[0.05, 0.66, 0.12]} r={0.04} h={0.2} c="#20242f" rot={[0.9, 0, 0]} />
        </group>
      </group>
      {/* l'hélice avance d'une paillasse · elles se traversaient depuis que
          la paillasse a rejoint l'angle gauche */}
      <group position={[-8.6, 0, backZ + 4.8]}>
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 0.4 + i * 0.28
          const a = i * 0.6
          return (
            <group key={i} position={[0, y, 0]}>
              <Glow p={[Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5]} r={0.09} c="#00e6ff" i={0.6} />
              <Glow p={[Math.cos(a + Math.PI) * 0.5, 0, Math.sin(a + Math.PI) * 0.5]} r={0.09} c="#ff5aa0" i={0.6} />
              {i % 2 === 0 && <B p={[0, 0, 0]} s={[1.0, 0.03, 0.03]} c="#bfe9ef" rot={[0, -a, 0]} />}
            </group>
          )
        })}
      </group>
      {/* fume hood */}
      <group position={[8.3, 0, backZ + 2]}>
        <B p={[0, 1.1, 0]} s={[1.8, 2.2, 1]} c="#eef5f7" />
        <B p={[0, 1.35, 0.5]} s={[1.5, 1.2, 0.05]} c="#bfe4ea" emissive="#8fd6e0" ei={0.25} />
        <B p={[0, 0.4, 0.5]} s={[1.6, 0.5, 0.06]} c="#dfeaee" />
      </group>
      {/* le tableau périodique passe derrière le maître · centré, il mordait
          sur l'ouverture de la porte */}
      <group position={[3.2, 2.7, backZ + 0.3]}>
        <B p={[0, 0, 0]} s={[4.4, 2.2, 0.08]} c="#f4fbfd" />
        {Array.from({ length: 3 }).map((_, r) => Array.from({ length: 9 }).map((_, c) => (
          <B key={`${r}-${c}`} p={[-1.8 + c * 0.45, 0.6 - r * 0.5, 0.05]} s={[0.38, 0.42, 0.02]} c={['#bfe4ea', '#cfe9ef', '#d9f0e0'][(r + c) % 3]} />
        )))}
      </group>
    </group>
  )
}

// A sagging string of festoon party lights, glowing bulbs strung on a catenary.
function Festoon({ x1, x2, z, y, sag = 1.3 }: { x1: number; x2: number; z: number; y: number; sag?: number }) {
  const cols = ['#ffe08a', '#ff8fa3', '#8be0ff', '#b9f0c0', '#ffc24b']
  const n = 12
  return (
    <group>
      {Array.from({ length: n }).map((_, i) => {
        const t = i / (n - 1)
        const x = x1 + (x2 - x1) * t
        const by = y - Math.sin(t * Math.PI) * sag
        return <Glow key={i} p={[x, by, z]} r={0.09} c={cols[i % cols.length]} i={0.95} />
      })}
    </group>
  )
}

// A thatched tiki bar with bamboo posts and a couple of stools.
function TikiBar({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      {/* counter */}
      <B p={[0, 0.72, 0]} s={[2.6, 0.18, 0.9]} c="#8a5a34" />
      <B p={[0, 0.36, 0.36]} s={[2.6, 0.72, 0.14]} c="#a5733f" />
      {[[-1.15, -0.35], [1.15, -0.35]].map(([px, pz], i) => <Cy key={i} p={[px, 0.9, pz]} r={0.08} h={1.8} c="#b98a58" />)}
      {/* thatch roof */}
      <Co p={[0, 2.1, 0]} r={1.9} h={0.9} c="#c9a24a" />
      <Co p={[0, 1.86, 0]} r={2.0} h={0.5} c="#b8902f" open />
      {/* stools */}
      {[-0.8, 0.8].map((sx) => (
        <group key={sx} position={[sx, 0, 1.1]}>
          <Cy p={[0, 0.66, 0]} r={0.05} h={1.32} c="#7a5a3a" />
          <Cy p={[0, 1.34, 0]} r={0.24} h={0.12} c="#ff7a59" />
        </group>
      ))}
      {/* a couple of tropical drinks on the bar */}
      {[-0.5, 0.4].map((dx, i) => <Cy key={dx} p={[dx, 0.92, 0.1]} r={0.09} h={0.28} c={i ? '#ffd23f' : '#ff5d6c'} />)}
    </group>
  )
}

// A potted monstera-style plant for the villa deck.
function MonsteraPot({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.3, 0]} r={0.34} h={0.6} c="#d9cdb8" />
      <Cy p={[0, 0.62, 0]} r={0.36} h={0.08} c="#c7b89c" />
      {[[0.2, 1.1, 0], [-0.25, 0.95, 0.1], [0.05, 1.35, -0.1], [-0.1, 1.15, 0.25]].map(([lx, ly, lz], i) => (
        <mesh key={i} position={[lx as number, ly as number, lz as number]} rotation={[0.3, i, 0.2]} scale={[0.5, 0.06, 0.7]} castShadow>
          <sphereGeometry args={[0.5, 10, 8]} />
          <Mat color={i % 2 ? '#3f9e52' : '#57b85f'} {...M} />
        </mesh>
      ))}
    </group>
  )
}

// --- Miami Villa: pool, palms, loungers, umbrella, sunset disc ---------------
function VillaDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* tropical hills + a modern villa behind the pool */}
      <Mountains z={backZ - 7} c1="#7fb08a" c2="#95c49a" />
      <ModernVilla x={0} z={backZ - 2.5} />
      {/* sunset sun high in the sky */}
      <group position={[6, 6.5, backZ - 4]}>
        <Sp p={[0, 0, 0]} r={1.5} c="#ff9a52" emissive="#ff7a3a" ei={0.6} />
        {[1.9, 2.3, 2.7].map((r, i) => <mesh key={r} rotation={[0, 0, 0]}><torusGeometry args={[r, 0.05, 8, 40]} /><Mat color="#ffcaa0" emissive="#ffb07a" emissiveIntensity={0.5 - i * 0.12} transparent opacity={0.7} /></mesh>)}
      </group>
      {/* the seating pool itself is drawn in Decor3D (agents lounge in it) */}
      <PalmTree x={-9} z={backZ + 2} />
      <PalmTree x={9} z={backZ + 2.3} />
      <PalmTree x={-9.1} z={6.5} />
      <PalmTree x={9.1} z={6.5} />
      {/* festoon party lights strung between the palms across the pool */}
      <Festoon x1={-8.8} x2={8.8} z={backZ + 2.2} y={4.4} sag={1.6} />
      <Festoon x1={-8.9} x2={9} z={6.4} y={4.2} sag={1.7} />
      {/* le plongeoir était planté dans le couloir de la porte · on entrait
          dedans */}
      <group position={[-7.8, 0, backZ + 3]}>
        <B p={[0, 0.6, 0]} s={[0.5, 0.1, 0.5]} c="#cfd6da" />
        <B p={[0, 0.72, 1.5]} s={[0.7, 0.1, 3]} c="#eef3f5" />
        <Cy p={[0, 0.36, 0.2]} r={0.05} h={0.72} c="#9aa4ab" />
      </group>
      {/* poolside tiki bar + planters */}
      <TikiBar x={-8} z={7.4} />
      <MonsteraPot x={6.2} z={7.6} />
      <MonsteraPot x={0.4} z={7.8} />
      {/* poolside sun loungers on the front deck */}
      {[-4.4, 4.4].map((x, i) => (
        <group key={x} position={[x, 0, 7.2]} rotation={[0, i ? -0.4 : 0.4, 0]}>
          <B p={[0, 0.28, 0]} s={[0.8, 0.08, 1.8]} c="#ffffff" />
          <B p={[0, 0.5, -0.7]} s={[0.8, 0.08, 0.7]} c="#ff7a59" rot={[-0.6, 0, 0]} />
          {[-0.25, 0, 0.25].map((lx) => <Cy key={lx} p={[lx, 0.12, 0.8]} r={0.04} h={0.24} c="#d8b18a" />)}
        </group>
      ))}
      {/* beach umbrella on the deck */}
      <group position={[8.4, 0, 6.4]}>
        <Cy p={[0, 1.1, 0]} r={0.05} h={2.2} c="#e7ded0" />
        <Co p={[0, 2.4, 0]} r={1.2} h={0.7} c="#ff7a59" />
        <Co p={[0, 2.4, 0]} r={1.2} h={0.7} c={P.accent} rot={[0, 0.4, 0]} open />
      </group>
    </group>
  )
}
function PalmTree({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      {[0, 1, 2, 3].map((i) => <Cy key={i} p={[i * 0.05, 0.5 + i * 0.7, 0]} r={0.16 - i * 0.015} h={0.72} c="#b98a58" rot={[0, 0, -0.05 * i]} />)}
      {Array.from({ length: 7 }).map((_, i) => {
        const a = (i / 7) * Math.PI * 2
        return <mesh key={i} position={[0.2 + Math.cos(a) * 0.1, 3.1, Math.sin(a) * 0.1]} rotation={[Math.sin(a) * 0.5, a, 0.7]} scale={[0.18, 0.04, 1.3]} castShadow><sphereGeometry args={[0.6, 8, 6]} /><Mat color={i % 2 ? '#3f9e52' : '#57b85f'} {...M} /></mesh>
      })}
      {[[0.25, -0.1], [-0.1, 0.2], [0.15, 0.2]].map(([cx, cz], i) => <Sp key={i} p={[cx, 2.95, cz]} r={0.13} c="#b5793f" />)}
    </group>
  )
}

// --- Castle: arched windows, banners, wall torches, throne, chandelier -------
function CastleDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  const stone = '#8f959c'
  return (
    <group>
      <Mountains z={backZ - 8} c1="#7b8a9a" c2="#8fa0ad" snow />
      {/* distant castle keep towers */}
      {[-8, 8].map((x) => (
        <group key={x} position={[x, 0, backZ - 4]}>
          <B p={[0, 3, 0]} s={[2.4, 6, 2.4]} c="#9aa0ad" />
          {[-0.8, 0, 0.8].map((cx) => <B key={cx} p={[cx, 6.2, 0]} s={[0.5, 0.6, 2.4]} c="#9aa0ad" />)}
          <Co p={[0, 7, 0]} r={1.6} h={1.6} c={P.accent} />
        </group>
      ))}
      {/* Le tapis rouge descendait l'axe de la salle et ne menait nulle part.
          Il s'aligne maintenant sur l'estrade : il part des pieds du maître
          et court jusqu'au devant de la scène. Un tapis rouge est un
          chemin — encore faut-il qu'il aille quelque part. */}
      <mesh position={[DAIS.x, 0.03, 1.9]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 11.6]} />
        <Mat color="#8e2436" roughness={0.9} />
      </mesh>
      <mesh position={[DAIS.x, 0.04, 1.9]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.4, 11.6]} />
        <Mat color={P.accent} roughness={0.7} transparent opacity={0.4} />
      </mesh>
      {/* iron chandeliers extra + hanging shields on side walls */}
      {[-9.2, 9.2].map((x, i) => [0, 4].map((z) => (
        <mesh key={`${x}-${z}`} position={[x, 3, z]} rotation={[0, i ? -Math.PI / 2 : Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.5, 0.42, 0.14, 6]} />
          <Mat color={i ? '#6b5426' : P.accent} metalness={0.5} roughness={0.5} />
        </mesh>
      )))}
      {/* arched windows on the back wall */}
      {[-5.5, 5.5].map((x) => (
        <group key={x} position={[x, 2.6, backZ + 0.3]}>
          <B p={[0, 0, 0]} s={[1.7, 2.6, 0.1]} c="#6f757c" />
          <B p={[0, -0.1, 0.06]} s={[1.2, 2.1, 0.04]} c="#bfe0ff" emissive="#8fc4ff" ei={0.4} />
          <mesh position={[0, 1.05, 0.06]}><cylinderGeometry args={[0.6, 0.6, 0.04, 20, 1, false, 0, Math.PI]} /><Mat color="#bfe0ff" emissive="#8fc4ff" emissiveIntensity={0.4} /></mesh>
        </group>
      ))}
      {/* les bannières passent DERRIÈRE le maître · l'une d'elles pendait en
          travers de l'ouverture de la porte */}
      {[2.4, 4.8].map((x, i) => (
        <group key={x} position={[x, 2.9, backZ + 0.32]}>
          <B p={[0, 0, 0]} s={[1.1, 2.8, 0.06]} c={i ? '#7a1f4a' : '#26407a'} />
          <B p={[0, 1.5, 0]} s={[1.2, 0.14, 0.1]} c={P.accent} />
          <Sp p={[0, 0.2, 0.05]} r={0.28} c={P.accent} />
        </group>
      ))}
      {/* wall torches */}
      {[-8.7, 8.7].map((x) => [backZ + 3, 1].map((z) => (
        <group key={`${x}-${z}`} position={[x, 2.3, z]}>
          <Cy p={[0, 0, 0]} r={0.05} h={0.5} c="#3a3128" rot={[0.5, 0, 0]} />
          <Co p={[0, 0.4, 0.2]} r={0.16} h={0.5} c="#ff8a1e" emissive="#ff6a00" ei={0.9} />
          <Glow p={[0, 0.5, 0.2]} r={0.09} c="#ffd070" i={1} />
        </group>
      )))}
      {/* Le trône occupait exactement la place du maître — c'était d'ailleurs
          le seul monde qui avait déjà compris ce qu'il fallait mettre au
          fond. Il cède l'axe à l'estrade et s'installe dans l'angle gauche,
          où il reste ce qu'il est : un siège vide, et une histoire. */}
      <group position={[-8.0, 0, backZ + 2.2]}>
        <B p={[0, 0.15, 0]} s={[2.4, 0.3, 2]} c={stone} />
        <B p={[0, 0.7, -0.5]} s={[1.4, 0.14, 1.2]} c="#5a4a2b" />
        <B p={[0, 1.6, -1]} s={[1.4, 1.8, 0.16]} c="#5a4a2b" />
        {[-0.7, 0.7].map((ax) => <B key={ax} p={[ax, 1.0, -0.4]} s={[0.16, 0.8, 1.1]} c="#4a3c22" />)}
        {[-0.55, 0, 0.55].map((gx) => <Glow key={gx} p={[gx, 2.4, -1]} r={0.08} c={P.accent} i={0.7} />)}
      </group>
      {/* chandelier */}
      <group position={[0, ROOM.wallH - 0.8, 3.5]}>
        <Cy p={[0, 0.4, 0]} r={0.012} h={0.8} c="#3a3128" />
        <mesh><torusGeometry args={[0.7, 0.05, 8, 24]} /><Mat color={P.accent} metalness={0.5} roughness={0.4} /></mesh>
        {Array.from({ length: 6 }).map((_, i) => { const a = (i / 6) * Math.PI * 2; return <Glow key={i} p={[Math.cos(a) * 0.7, 0.1, Math.sin(a) * 0.7]} r={0.07} c="#ffd070" i={1} /> })}
      </group>
    </group>
  )
}

// --- Magical Garden: glowing trees, mushrooms, fireflies, fountain, arch -----
function GardenDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      <Mountains z={backZ - 7} c1="#7fbf6a" c2="#95cf7f" />
      <BlossomTree x={-8.5} z={2.6} c={P.accent} />
      <BlossomTree x={8.6} z={backZ + 2.4} c="#c98cff" />
      <BlossomTree x={8.8} z={5.4} c="#ffb0d8" />
      {/* lily pond on the front-left with pads + blossoms */}
      <group position={[-7.6, 0, 5.4]}>
        <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[1.8, 32]} /><Mat color="#5fb0c4" transparent opacity={0.8} roughness={0.3} emissive="#3f8f9f" emissiveIntensity={0.15} /></mesh>
        {[[0.4, 0.3], [-0.6, -0.2], [0.2, -0.7], [-0.3, 0.7]].map(([lx, lz], i) => (
          <group key={i} position={[lx as number, 0.06, lz as number]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[0.36, 18]} /><Mat color="#4f9e52" /></mesh>
            {i % 2 === 0 && <Sp p={[0, 0.08, 0]} r={0.12} c="#ff9ecb" emissive="#ff9ecb" ei={0.3} />}
          </group>
        ))}
      </group>
      {/* butterflies / fireflies drifting mid-air */}
      {[[-4.5, 2.6, 4], [4.6, 3, 3], [-1.5, 2.4, 5], [2.2, 3.2, backZ + 3], [6, 2.2, 2], [-6.5, 2.8, 0]].map(([x, y, z], i) => (
        <group key={i} position={[x as number, y as number, z as number]}>
          <Sp p={[-0.1, 0, 0]} r={0.09} c={i % 2 ? '#ff9ecb' : '#ffd6f0'} emissive="#ff9ecb" ei={0.4} />
          <Sp p={[0.1, 0, 0]} r={0.09} c={i % 2 ? '#c98cff' : '#e0c2ff'} emissive="#c98cff" ei={0.4} />
        </group>
      ))}
      {/* la fontaine tenait le centre du fond · elle rejoint l'angle gauche,
          où elle répond au bassin aux nénuphars */}
      <group position={[-8.0, 0, backZ + 2.6]}>
        <Cy p={[0, 0.2, 0]} r={1.3} h={0.4} c="#bfc9b0" />
        <Strip p={[0, 0.42, 0]} s={[2.2, 2.2]} c="#7fe0ff" rot={[-Math.PI / 2, 0, 0]} i={0.4} />
        <Cy p={[0, 0.7, 0]} r={0.7} h={0.5} c="#cdd7bd" />
        <Cy p={[0, 1.1, 0]} r={0.35} h={0.4} c="#cdd7bd" />
        <Glow p={[0, 1.5, 0]} r={0.18} c="#aef0ff" i={0.8} />
      </group>
      {/* glowing mushroom clusters */}
      {[[-6, 3], [6.4, 2.6], [-8.6, backZ + 5.2], [7.2, backZ + 1.4]].map(([x, z], i) => (
        <group key={i} position={[x as number, 0, z as number]}>
          {[[0, 0, 0.5], [0.35, 0.1, 0.35], [-0.3, -0.05, 0.4]].map(([mx, mz, h], k) => (
            <group key={k} position={[mx as number, 0, mz as number]}>
              <Cy p={[0, (h as number) / 2, 0]} r={0.08} h={h as number} c="#f2ead8" />
              <Co p={[0, (h as number) + 0.06, 0]} r={0.22} h={0.28} c={k % 2 ? '#ff86c0' : '#a06cff'} emissive={k % 2 ? '#ff86c0' : '#a06cff'} ei={0.7} />
            </group>
          ))}
        </group>
      ))}
      {/* l'arche de fleurs s'aligne sur l'estrade · elle encadre le maître au
          lieu d'encadrer du vide */}
      <group position={[DAIS.x, 0, backZ + 4.4]}>
        {[-2, 2].map((x) => <Cy key={x} p={[x, 1.4, 0]} r={0.1} h={2.8} c="#4f7d3a" />)}
        <mesh position={[0, 2.8, 0]} rotation={[0, 0, 0]}><torusGeometry args={[2, 0.12, 10, 24, Math.PI]} /><Mat color="#4f7d3a" {...M} /></mesh>
        {Array.from({ length: 9 }).map((_, i) => { const a = (i / 8) * Math.PI; return <Sp key={i} p={[Math.cos(a) * 2, 2.8 + Math.sin(a) * 2, 0]} r={0.28} c={i % 2 ? '#ff9ecb' : '#ffd0e6'} emissive="#ff9ecb" ei={0.25} /> })}
      </group>
      {/* fireflies */}
      {[[-5, 2.2, 3], [4, 3, 2], [-2, 2.6, backZ + 3], [2.5, 3.2, backZ + 2], [6, 1.8, 1], [-6.5, 2.4, -1]].map(([x, y, z], i) => (
        <Glow key={i} p={[x as number, y as number, z as number]} r={0.05} c="#fff3a0" i={1} />
      ))}
    </group>
  )
}
function BlossomTree({ x, z, c }: { x: number; z: number; c: string }) {
  const blossoms: [number, number, number][] = [[0, 3.1, 0], [-0.8, 2.8, 0.2], [0.8, 2.9, -0.2], [-0.5, 3.5, -0.3], [0.55, 3.5, 0.3], [0, 2.6, 0.7], [0, 2.75, -0.7]]
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 1.3, 0]} r={0.24} h={2.6} c={WOOD_D} />
      <Cy p={[-0.5, 2.3, 0.2]} r={0.1} h={1.1} c={WOOD_D} rot={[0, 0, 0.7]} />
      <Cy p={[0.55, 2.2, -0.2]} r={0.1} h={1.1} c={WOOD_D} rot={[0, 0, -0.6]} />
      {blossoms.map((p, i) => <Sp key={i} p={p} r={0.66} c={c} emissive={c} ei={0.28} />)}
    </group>
  )
}

// --- Factory: gantry, conveyor, robot arm, pipes, hazard cones, panel --------
function FactoryDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  const steel = '#8f949e'
  const steelD = '#5b606b'
  return (
    <group>
      {/* industrial skyline + smoking chimneys behind */}
      <Mountains z={backZ - 8} c1="#6b7280" c2="#7c8490" />
      {[-7, 7].map((x) => (
        <group key={x} position={[x, 0, backZ - 3]}>
          <Cy p={[0, 3, 0]} r={0.7} h={6} c="#6b6068" />
          <Cy p={[0, 5.6, 0]} r={0.78} h={0.5} c="#8f2418" />
          <Sp p={[0, 6.6, 0]} r={0.9} c="#c9ccd6" />
        </group>
      ))}
      {/* hazard tape stripes on the floor edges */}
      {[-8.4, 8.4].map((x) => (
        <group key={x}>
          {Array.from({ length: 9 }).map((_, i) => (
            <mesh key={i} position={[x, 0.03, -6 + i * 1.5]} rotation={[-Math.PI / 2, 0, Math.PI / 4]}>
              <planeGeometry args={[0.5, 0.5]} />
              <Mat color={i % 2 ? '#1c1c22' : '#f2c200'} />
            </mesh>
          ))}
        </group>
      ))}
      {/* stacked barrels */}
      <group position={[-8.2, 0, 5.2]}>
        {[[0, 0], [0.7, 0], [0.35, 0.7]].map(([bx, bz], i) => (
          <Cy key={i} p={[bx as number, 0.55, bz as number]} r={0.34} h={1.1} c={['#c0392b', '#f2c200', '#2e6da4'][i]} />
        ))}
        <Cy p={[0.35, 1.35, 0.35]} r={0.34} h={0.6} c="#2e6da4" />
      </group>
      {/* sparks near the robot arm */}
      {[[8.1, 1.0, backZ + 2], [8.4, 0.8, backZ + 2.2], [7.8, 1.2, backZ + 1.9]].map(([x, y, z], i) => (
        <Glow key={i} p={[x as number, y as number, z as number]} r={0.05} c="#ffcf3b" i={1} />
      ))}
      {/* big gear on the back wall */}
      <group position={[6.4, 3.4, backZ + 0.35]}>
        {Array.from({ length: 10 }).map((_, i) => { const a = (i / 10) * Math.PI * 2; return <B key={i} p={[Math.cos(a) * 0.9, Math.sin(a) * 0.9, 0]} s={[0.28, 0.28, 0.14]} c={steelD} rot={[0, 0, a]} /> })}
        <Cy p={[0, 0, 0]} r={0.7} h={0.16} c={steel} rot={[Math.PI / 2, 0, 0]} />
        <Cy p={[0, 0, 0.02]} r={0.24} h={0.2} c={P.trim} rot={[Math.PI / 2, 0, 0]} />
      </group>
      {/* overhead gantry */}
      <group position={[0, ROOM.wallH - 0.5, 1]}>
        {[-8, 8].map((x) => <B key={x} p={[x, 0, 0]} s={[0.3, 1.2, 0.3]} c={steelD} />)}
        <B p={[0, 0.4, 0]} s={[17, 0.24, 0.4]} c={steel} />
        <B p={[0, 0.4, -3]} s={[17, 0.24, 0.4]} c={steel} />
        {[-4, 0, 4].map((x) => <B key={x} p={[x, 0.4, -1.5]} s={[0.24, 0.2, 3]} c={steel} />)}
      </group>
      {/* Le convoyeur barrait le fond sur sept unités, donc la porte ET la
          place du maître. Raccourci et poussé dans l'angle gauche, il fait
          exactement le même travail : montrer que quelque chose est
          fabriqué ici. */}
      <group position={[-7.4, 0, backZ + 3]}>
        <B p={[0, 0.5, 0]} s={[4.6, 0.16, 1]} c={steelD} />
        <B p={[0, 0.6, 0]} s={[4.4, 0.05, 0.9]} c="#2b2f3d" />
        {[-1.7, -0.55, 0.6, 1.7].map((x) => <Cy key={x} p={[x, 0.44, 0]} r={0.1} h={1} c={steel} rot={[Math.PI / 2, 0, 0]} />)}
        {[-1.4, 0.3, 1.5].map((x, i) => <B key={x} p={[x, 0.82, 0]} s={[0.6, 0.5, 0.6]} c={i % 2 ? '#c79a6a' : P.accent} />)}
      </group>
      {/* robot arm */}
      <group position={[8.2, 0, backZ + 2]}>
        <Cy p={[0, 0.2, 0]} r={0.4} h={0.4} c={steelD} />
        <Cy p={[0, 0.9, 0]} r={0.18} h={1.2} c={P.trim} />
        <Cy p={[0.5, 1.6, 0]} r={0.14} h={1.2} c={steel} rot={[0, 0, 1]} />
        <Cy p={[1.1, 1.2, 0]} r={0.1} h={0.8} c={steel} rot={[0, 0, 0.4]} />
        <B p={[1.4, 0.85, 0]} s={[0.2, 0.3, 0.2]} c={P.accent} emissive={P.accent} ei={0.3} />
      </group>
      {/* pipes along a side wall */}
      {[1.6, 2.0, 2.4].map((y, i) => <Cy key={y} p={[-9, y, 0]} r={0.12} h={ROOM.d - 2} c={i === 1 ? P.trim : steel} rot={[Math.PI / 2, 0, 0]} />)}
      {/* hazard cones */}
      {[[-6, 3], [-5.4, 3.3], [6, 3.2]].map(([x, z], i) => (
        <group key={i} position={[x as number, 0, z as number]}>
          <Co p={[0, 0.35, 0]} r={0.24} h={0.7} c="#ff8a1e" />
          <Cy p={[0, 0.32, 0]} r={0.18} h={0.1} c="#ffffff" />
          <B p={[0, 0.02, 0]} s={[0.5, 0.04, 0.5]} c="#ff8a1e" />
        </group>
      ))}
      {/* le pupitre de contrôle passe derrière le maître · centré, il mordait
          sur l'ouverture de la porte */}
      <group position={[3.2, 2.4, backZ + 0.3]}>
        <B p={[0, 0, 0]} s={[4, 1.6, 0.16]} c={steelD} />
        <B p={[0, 0.9, 0]} s={[4.2, 0.24, 0.18]} c="#f2c200" />
        {Array.from({ length: 5 }).map((_, i) => <Glow key={i} p={[-1.4 + i * 0.7, 0.2, 0.1]} r={0.09} c={['#37d67a', '#ffcf3b', '#ff5a3a', '#37d67a', P.accent][i]} i={0.9} />)}
        {[-1.2, 0.2, 1.4].map((x) => <mesh key={x} position={[x, -0.35, 0.1]}><torusGeometry args={[0.22, 0.03, 8, 20]} /><Mat color="#20242f" /></mesh>)}
      </group>
    </group>
  )
}

// --- Forest Lake (Japanese): torii in a lake, pines, hills, stone lanterns ---
function Pine({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Cy p={[0, 0.6, 0]} r={0.2} h={1.2} c="#6b4a2a" />
      {[1.35, 2.05, 2.65].map((y, i) => <Co key={y} p={[0, y, 0]} r={1.15 - i * 0.3} h={1.05} c={i % 2 ? '#3f7d4a' : '#4f9e58'} />)}
    </group>
  )
}
function ForestDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  return (
    <group>
      {/* snowy mountains far behind + soft hills on the horizon */}
      <Mountains z={backZ - 9} c1="#8fa6ad" c2="#a3b8bd" snow />
      {[[-7, backZ - 3], [0, backZ - 4], [7, backZ - 3]].map(([x, z], i) => (
        <mesh key={i} position={[x as number, 0, z as number]} scale={[1, 0.7, 1]}><coneGeometry args={[6, 6, 20]} /><Mat color={i === 1 ? '#8fae9a' : '#a3c4a8'} roughness={1} /></mesh>
      ))}
      {/* the lake */}
      <mesh position={[0, 0.05, backZ + 1.5]} rotation={[-Math.PI / 2, 0, 0]}><planeGeometry args={[24, 9]} /><Mat color="#4f8fb0" transparent opacity={0.9} roughness={0.15} emissive="#2f6f90" emissiveIntensity={0.18} /></mesh>
      {/* Le torii se dresse DERRIÈRE le maître, sur son estrade. Il tenait le
          centre du fond, c'est-à-dire sa place ; déplacé de trois unités, il
          cesse de lui disputer le fond et devient ce qu'un torii est : le
          seuil devant lequel on se tient. */}
      <group position={[DAIS.x, 0, backZ + 0.8]}>
        {[-1.7, 1.7].map((x) => <Cy key={x} p={[x, 1.55, 0]} r={0.17} h={3.1} c="#c0392b" />)}
        <B p={[0, 3.2, 0]} s={[4.8, 0.32, 0.34]} c="#a02a1c" />
        <B p={[0, 3.4, 0]} s={[5.2, 0.18, 0.24]} c="#8f2418" />
        <B p={[0, 2.65, 0]} s={[3.9, 0.24, 0.26]} c="#c0392b" />
      </group>
      <Pine x={-9} z={backZ + 3} />
      <Pine x={9} z={backZ + 3} />
      <Pine x={-8.6} z={4.5} />
      <Pine x={8.8} z={4.6} />
      <StoneLantern x={-6} z={5.4} />
      <StoneLantern x={6} z={5.4} />
      {/* lily pads + a couple of glowing floating lanterns on the lake */}
      {[[-8.5, backZ + 1], [7.5, backZ + 2], [-7.2, backZ + 0.5], [8.6, backZ + 2.5]].map(([x, z], i) => (
        <mesh key={i} position={[x as number, 0.1, z as number]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[0.42, 16]} /><Mat color="#3f9e6a" /></mesh>
      ))}
      {[[-8.0, backZ + 2.5], [7.6, backZ + 1]].map(([x, z], i) => <Glow key={i} p={[x as number, 0.35, z as number]} r={0.16} c={P.accent} i={0.8} />)}
    </group>
  )
}

// --- Wonderland: giant rainbow, floating clouds, lollipops, stars ------------
function Cloud({ x, y, z, s = 1 }: { x: number; y: number; z: number; s?: number }) {
  // overlapping puffs with a flat-ish base so it reads as a real fluffy cloud
  const puffs = [[0, 0, 1.0], [0.85, 0.05, 0.68], [-0.85, 0.05, 0.68], [0.45, 0.28, 0.62], [-0.45, 0.28, 0.62], [0, 0.34, 0.66], [1.5, -0.02, 0.5], [-1.5, -0.02, 0.5]]
  return (
    <group position={[x, y, z]} scale={s}>
      {puffs.map(([dx, dy, r], i) => (
        <mesh key={i} position={[dx as number, dy as number, 0]} castShadow>
          <sphereGeometry args={[r as number, 20, 16]} />
          <Mat color="#ffffff" emissive="#eef4ff" emissiveIntensity={0.2} roughness={1} />
        </mesh>
      ))}
    </group>
  )
}
function WonderlandDecor({ backZ, P }: { backZ: number; P: DojoPalette }) {
  const rainbow = ['#ff5d6c', '#ff9a52', '#ffd23f', '#7bd88f', '#4fc3f7', '#c98cff']
  return (
    <group>
      {/* pastel candy hills far behind */}
      <Mountains z={backZ - 7} c1="#ffb0d8" c2="#c9b0ff" />
      {/* a giant rainbow arch over the back */}
      <group position={[0, 0, backZ]}>
        {rainbow.map((c, i) => (
          <mesh key={c}><torusGeometry args={[8 - i * 0.55, 0.28, 12, 48, Math.PI]} /><Mat color={c} emissive={c} emissiveIntensity={0.3} roughness={0.6} /></mesh>
        ))}
      </group>
      {/* fluffy floating clouds */}
      <Cloud x={-8} y={4.5} z={backZ + 2} s={1.2} />
      <Cloud x={8} y={5.2} z={backZ + 1} />
      <Cloud x={-5.5} y={6.4} z={2} s={0.8} />
      <Cloud x={6} y={5.6} z={3} s={0.9} />
      <Cloud x={0} y={7.2} z={backZ + 1} s={1.1} />
      {/* giant lollipops */}
      {[[-9.2, 5], [9.2, 4.6]].map(([x, z], i) => (
        <group key={i} position={[x as number, 0, z as number]}>
          <Cy p={[0, 1.6, 0]} r={0.09} h={3.2} c="#ffffff" />
          <mesh position={[0, 3.3, 0]}><torusGeometry args={[0.55, 0.18, 14, 28]} /><Mat color={rainbow[i * 3]} emissive={rainbow[i * 3]} emissiveIntensity={0.3} /></mesh>
          <mesh position={[0, 3.3, 0.02]}><circleGeometry args={[0.42, 24]} /><Mat color={rainbow[i * 3 + 2]} emissive={rainbow[i * 3 + 2]} emissiveIntensity={0.2} /></mesh>
        </group>
      ))}
      {/* twinkling stars + floating hearts */}
      {[[-6, 3, 4], [5, 4, 3], [-2, 5, backZ + 3], [3, 3.5, 5], [7, 3, 1], [-7, 2.5, 1]].map(([x, y, z], i) => (
        <Glow key={i} p={[x as number, y as number, z as number]} r={0.09} c={rainbow[i % 6]} i={1} />
      ))}
      {/* candy-cane pillars flanking the scene */}
      {[-9.4, 9.4].map((x) => (
        <group key={x} position={[x, 0, backZ + 4]}>
          <Cy p={[0, 1.6, 0]} r={0.2} h={3.2} c="#ffffff" />
          {[0.4, 1.0, 1.6, 2.2, 2.8].map((y) => <Cy key={y} p={[0, y, 0]} r={0.205} h={0.22} c={P.accent} rot={[0, 0, 0.5]} />)}
        </group>
      ))}
    </group>
  )
}

// --- The Backrooms: endless yellow rooms, buzzing fluorescents, damp carpet ---
function BackroomsDecor({ backZ }: { backZ: number }) {
  const halfW = ROOM.w / 2
  const tex = backroomsWallpaper()
  const doorH = ROOM.wallH - 2 // corridor height (matches the doorway lintel)
  const CW = 2.5 // corridor half-width (the doorway is 5 wide)
  const LEN = 34 // how far the corridor recedes before the fog swallows it
  const start = backZ // corridor mouth = the room's back wall
  // Le couloir était CENTRÉ, la porte de tous les autres mondes ne l'est pas.
  // Le coursier entrait donc ici par le mur, à deux mètres et demi de la
  // seule ouverture — visible, et vieux d'autant de versions que la porte.
  // Les Backrooms s'alignent sur le même seuil que les onze autres.
  const CX = doorAt(true).x
  // fluorescent fixtures receding down the hallway (some flicker-dead), the
  // fog (yellow) dissolves the far ones into an endless perspective
  const lights = Array.from({ length: 9 }).map((_, i) => start - 1.5 - i * 3.8)
  return (
    <group>
      {/* no ceiling over the room · a couple of fixtures hang in the open space */}
      {[[-4, 3], [5, -3]].map(([x, z], i) => (
        <group key={i} position={[x as number, ROOM.wallH - 0.5, z as number]}>
          <Cy p={[0, 0.35, 0]} r={0.03} h={0.7} c="#8a7f4a" />
          <B p={[0, 0, 0]} s={[2.4, 0.14, 1.0]} c="#b7ab5e" />
          <mesh position={[0, -0.09, 0]} rotation={[Math.PI / 2, 0, 0]}><planeGeometry args={[2.1, 0.82]} /><Mat color={i ? '#7a7248' : '#fff8d8'} emissive={i ? '#3a3722' : '#fff2b0'} emissiveIntensity={i ? 0.05 : 1.15} side={2} /></mesh>
        </group>
      ))}

      {/* ===== the infinite corridor beyond the doorway ===== */}
      <group>
        {/* corridor floor (damp carpet) */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[CX, 0.01, start - LEN / 2]} receiveShadow><planeGeometry args={[CW * 2, LEN]} /><Mat color="#9a8a3c" roughness={1} /></mesh>
        {/* corridor side walls (papered) */}
        {[-CW, CW].map((x) => (
          <mesh key={x} position={[CX + x, doorH / 2, start - LEN / 2]} receiveShadow><boxGeometry args={[0.3, doorH, LEN]} /><Mat color="#e8dca0" map={tex} roughness={1} /></mesh>
        ))}
        {/* no corridor ceiling · the receding fixtures hang in the open above */}
        {/* receding fluorescent panels */}
        {lights.map((z, i) => {
          const dead = i === 3 || i === 6
          return (
            <group key={i} position={[CX, doorH - 0.08, z]}>
              <B p={[0, 0.06, 0]} s={[2.2, 0.1, 1.1]} c="#b7ab5e" />
              <mesh position={[0, -0.02, 0]} rotation={[Math.PI / 2, 0, 0]}><planeGeometry args={[1.9, 0.9]} /><Mat color={dead ? '#7a7248' : '#fff8d8'} emissive={dead ? '#2f2c1a' : '#fff2b0'} emissiveIntensity={dead ? 0.04 : 1.2} side={2} /></mesh>
            </group>
          )
        })}
        {/* doorways punched along the corridor walls into yet more yellow rooms */}
        {[start - 6, start - 15, start - 24].map((z, i) => (
          <mesh key={i} position={[CX + (i % 2 ? 1 : -1) * (CW - 0.02), doorH / 2 - 0.5, z]}><boxGeometry args={[0.06, doorH - 1, 2.2]} /><Mat color="#14120a" /></mesh>
        ))}
      </group>

      {/* wall power outlets */}
      {[[-halfW + 0.24, 0.7, -2], [-halfW + 0.24, 0.7, 3], [halfW - 0.24, 0.7, 0]].map(([x, y, z], i) => (
        <group key={i} position={[x as number, y as number, z as number]}>
          <B p={[0, 0, 0]} s={[0.06, 0.32, 0.22]} c="#e8e0b8" />
          <B p={[0.02, 0.06, 0]} s={[0.02, 0.05, 0.04]} c="#3a3320" />
          <B p={[0.02, -0.06, 0]} s={[0.02, 0.05, 0.04]} c="#3a3320" />
        </group>
      ))}
      {/* moist stains on the carpet */}
      {[[3, 4], [-6, 2], [5, -4]].map(([x, z], i) => <mesh key={i} position={[x as number, 0.03, z as number]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[1.1 + i * 0.3, 20]} /><Mat color="#6f6428" transparent opacity={0.5} /></mesh>)}
      {/* an exposed pipe running along a side wall */}
      <Cy p={[halfW - 0.3, 4.4, 0]} r={0.14} h={ROOM.d - 2} c="#b3a86a" rot={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

// Dispatch to the right themed decor for a template id.
function ThemeDecor({ id, backZ, P }: { id: string; backZ: number; P: DojoPalette }) {
  switch (id) {
    case 'dojo': return <ZenGarden backZ={backZ} accent={P.accent} />
    case 'garden': return <GardenDecor backZ={backZ} P={P} />
    case 'space': return <SpaceDecor backZ={backZ} P={P} />
    case 'lab': return <LabDecor backZ={backZ} P={P} />
    case 'villa': return <VillaDecor backZ={backZ} P={P} />
    case 'castle': return <CastleDecor backZ={backZ} P={P} />
    case 'factory': return <FactoryDecor backZ={backZ} P={P} />
    case 'startup': return <StartupDecor backZ={backZ} P={P} />
    case 'forest': return <ForestDecor backZ={backZ} P={P} />
    case 'wonderland': return <WonderlandDecor backZ={backZ} P={P} />
    case 'backrooms': return <BackroomsDecor backZ={backZ} />
    default: return <PlainAccents backZ={backZ} P={P} />
  }
}

// L'ENVELOPPE DE DOJO · charpente de bois et panneaux de papier.
//
// Le reproche : « les fonds et arrière-plans sont pauvres et fades ». Il était
// exact, et pour une raison structurelle : seuls DEUX mondes sur douze avaient
// des murs. Les dix autres étaient une plateforme posée sur un dégradé, donc
// tout le haut du cadre — la moitié de l'image — n'était qu'un aplat de
// couleur. Aucun objet, aucune ombre, rien pour accrocher la lumière.
//
// Chaque dojo reçoit donc la même enveloppe : poteaux, linteau, plinthe et
// panneaux translucides. Elle est CONSTRUITE, pas plaquée — un poteau tous les
// cinq mètres, un quadrillage sur chaque panneau, une plinthe qui court au
// sol. C'est cette répétition régulière qui donne l'échelle de la pièce et qui
// fait qu'un mur se lit comme un mur.
//
// Les panneaux sont légèrement émissifs : sur une figurine de vinyle, la
// lumière rasante d'un fond clair est ce qui creuse les volumes. Un mur sombre
// aurait rendu les personnages plats.
//
// Les couleurs viennent de la palette du monde, jamais du bois « dojo » : un
// dojo spatial garde des murs bleu nuit, le laboratoire des murs blancs. Seule
// la CHARPENTE est commune, et c'est elle qui fait la famille.
/** Rapproche une couleur du gris de même clarté · garde la teinte, calme le
 *  cri. Sans cela, une palette saturée repeint toute la charpente. */
function mute(hex: string, amount: number): string {
  const n = hex.replace('#', '')
  const v = n.length === 3 ? n.split('').map((c) => c + c).join('') : n
  const num = parseInt(v, 16)
  const r = (num >> 16) & 255, g = (num >> 8) & 255, b = num & 255
  const grey = r * 0.299 + g * 0.587 + b * 0.114
  const mix = (c: number) => Math.round(c + (grey - c) * amount)
  return `#${[mix(r), mix(g), mix(b)].map((c) => c.toString(16).padStart(2, '0')).join('')}`
}

function Shoji({ w, h, paper, wood, glow }: { w: number; h: number; paper: string; wood: string; glow: number }) {
  const tex = shojiTex(paper)
  // Un meneau tous les ~1,6 · à 1,1 le quadrillage était deux fois plus
  // dense, soit ~170 maillages rien que pour les murs. Chacun est un appel de
  // dessin, et la mesure l'a vu : la scène est passée de trois images à deux
  // par fenêtre de quatre secondes. À cette distance de caméra la maille fine
  // ne se lit même pas — on paie un détail que personne ne voit.
  const mull = Math.max(1, Math.round(w / 1.6))     // meneaux verticaux
  const rails = Math.max(1, Math.round(h / 1.6))    // traverses
  return (
    <group>
      <mesh receiveShadow>
        <boxGeometry args={[w, h, 0.07]} />
        <Mat
          color={paper}
          map={tex.map}
          normalMap={tex.normalMap}
          normalScale={NORMAL_WALL}
          emissive={'#fff4dc'}
          emissiveIntensity={glow}
          roughness={0.86}
        />
      </mesh>
      {Array.from({ length: mull - 1 }, (_, i) => (
        <mesh key={'v' + i} position={[-w / 2 + (w * (i + 1)) / mull, 0, 0.05]}>
          <boxGeometry args={[0.055, h, 0.04]} />
          <Mat color={wood} roughness={0.8} />
        </mesh>
      ))}
      {Array.from({ length: rails - 1 }, (_, i) => (
        <mesh key={'h' + i} position={[0, -h / 2 + (h * (i + 1)) / rails, 0.05]}>
          <boxGeometry args={[w, 0.055, 0.04]} />
          <Mat color={wood} roughness={0.8} />
        </mesh>
      ))}
    </group>
  )
}

// Les dimensions de l'enveloppe · UNE seule définition.
//
// La porte doit être au même endroit pour celui qui la construit et pour celui
// qui la franchit. Recopier le calcul des travées dans le coursier l'aurait
// fait dériver à la première retouche du plan de salle — et un coursier qui
// traverse le mur à côté de sa porte est exactement le genre de défaut que
// personne ne signale et que tout le monde voit.
/** L'ESTRADE DU MAÎTRE · le fond de la salle, surélevé.
 *
 *  Le maître se tenait DEVANT l'équipe, dos à la caméra, au milieu du champ.
 *  Il est au fond maintenant, et un maître au fond sans rien sous les pieds
 *  n'est qu'un personnage garé contre un mur : il lui faut une PLACE. Trente
 *  centimètres suffisent — c'est ce qui sépare celui qui reçoit de ceux qui
 *  travaillent, et ce qui fait qu'on lève les yeux vers lui.
 *
 *  Elle est commune aux douze mondes, comme la charpente : seule la matière
 *  suit la palette. Un monde qui n'aurait pas d'estrade n'aurait pas de
 *  maître, et le coursier n'aurait personne à aller voir. */
function Dais({ P }: { P: DojoPalette }) {
  const wood = mute(P.trim, 0.42)
  const hd = DAIS.d / 2
  return (
    <group position={[DAIS.x, 0, DAIS.z]}>
      {/* le plateau · la même natte que le sol, un ton plus clair */}
      <mesh position={[0, DAIS.h / 2, 0]} geometry={roundedBox(DAIS.w, DAIS.h, DAIS.d, 0.05)} castShadow receiveShadow>
        <Mat color={P.ground} roughness={0.9} />
      </mesh>
      {/* la lisse de bord · c'est elle qui donne l'épaisseur. Un plateau posé
          au sol sans bordure se lit comme un tapis, pas comme une estrade. */}
      {[-1, 1].map((sd) => (
        <mesh key={'z' + sd} position={[0, DAIS.h - 0.06, sd * hd]} castShadow receiveShadow>
          <boxGeometry args={[DAIS.w + 0.12, 0.14, 0.12]} />
          <Mat color={wood} roughness={0.8} />
        </mesh>
      ))}
      {[-1, 1].map((sd) => (
        <mesh key={'x' + sd} position={[sd * (DAIS.w / 2), DAIS.h - 0.06, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.12, 0.14, DAIS.d + 0.12]} />
          <Mat color={wood} roughness={0.8} />
        </mesh>
      ))}
      {/* la marche · on monte sur une estrade, on n'y saute pas */}
      <mesh position={[0, DAIS.h / 4, hd + 0.3]} castShadow receiveShadow>
        <boxGeometry args={[2.2, DAIS.h / 2, 0.6]} />
        <Mat color={wood} roughness={0.85} />
      </mesh>
      {/* le pupitre bas · les dossiers remis par le coursier s'y posent */}
      <group position={[LECTERN.dx, 0, LECTERN.dz]}>
        <mesh position={[0, LECTERN.top - 0.04, 0]} geometry={roundedBox(LECTERN.w, 0.08, LECTERN.d, 0.03)} castShadow receiveShadow>
          <Mat color={wood} roughness={0.72} />
        </mesh>
        {[-1, 1].map((sd) => (
          <mesh key={sd} position={[sd * (LECTERN.w / 2 - 0.12), (LECTERN.top - 0.08) / 2 + DAIS.h / 2, 0]} castShadow>
            <boxGeometry args={[0.1, LECTERN.top - 0.08 - DAIS.h, LECTERN.d - 0.16]} />
            <Mat color={WOOD_D} roughness={0.8} />
          </mesh>
        ))}
      </group>
      {/* le coussin du maître · il se tient debout, mais un dojo sans zabuton
          n'est pas un dojo */}
      <mesh position={[0.95, DAIS.h + 0.06, 0.5]} rotation={[0, 0.3, 0]} geometry={roundedBox(0.74, 0.14, 0.74, 0.06)} castShadow>
        <Mat color={mute(P.accent, 0.5)} roughness={0.95} />
      </mesh>
      {/* la lanterne de l'estrade · elle éclaire celui qui reçoit, et elle
          signale de loin où il faut aller */}
      <Lantern x={-DAIS.w / 2 - 0.35} z={-hd + 0.3} c={P.accent} />
    </group>
  )
}

function DojoShell({ P, w, d, h }: { P: DojoPalette; w: number; d: number; h: number }) {
  const hw = w / 2
  const backZ = -d / 2
  // La charpente est DÉSATURÉE. Elle prenait `P.trim` pur : des poutres
  // violet vif ou corail vif tout autour de la pièce, répétées vingt fois.
  // Une charpente est en bois ; elle porte la teinte du monde, elle ne la
  // hurle pas. On garde la couleur, on lui retire la moitié de sa saturation.
  const wood = mute(P.trim, 0.42)
  const sill = 0.5                    // plinthe
  const head = h - 0.7                // linteau
  const bayH = head - sill
  // un poteau tous les ~4,6 unités · assez serré pour donner l'échelle, assez
  // lâche pour ne pas faire une palissade
  const bays = baysOf(w)
  const sideBays = Math.max(3, Math.round(d / 4.6))
  const bayW = w / bays
  const sideW = d / sideBays
  // LA PORTE · la travée centrale, du sol au linteau
  const doorBay = doorBayOf(bays)
  const doorX = -hw + bayW * (doorBay + 0.5)
  const doorHalf = bayW * 0.5
  const doorH = Math.min(h - 1.2, sill + bayH * 0.86)

  const Frame = ({ len, rotY, at }: { len: number; rotY: number; at: [number, number, number] }) => (
    <group position={at} rotation={[0, rotY, 0]}>
      {/* plinthe et linteau · les deux lignes horizontales qui tiennent tout */}
      <mesh position={[0, sill / 2, 0]} receiveShadow castShadow>
        <boxGeometry args={[len, sill, 0.34]} />
        <Mat color={wood} roughness={0.82} />
      </mesh>
      <mesh position={[0, head + 0.35, 0]} receiveShadow castShadow>
        <boxGeometry args={[len, 0.7, 0.42]} />
        <Mat color={wood} roughness={0.82} />
      </mesh>
    </group>
  )

  return (
    <group>
      {/* --- le fond, PERCÉ D'UNE PORTE ---------------------------------
          Une pièce sans entrée n'est pas une pièce, c'est une boîte. La travée
          centrale est donc une VRAIE ouverture : le mur est coupé en deux
          jambages et un linteau, l'encadrement est plus épais que la charpente
          courante, et deux vantaux coulissants restent entrouverts sur un
          couloir sombre — une porte fermée ne raconte rien. C'est par là
          qu'entre le coursier (voir Courier3D). */}
      {/* Les deux jambages n'ont PAS la même longueur : la porte est décalée,
          donc il reste plus de mur d'un côté que de l'autre. Les faire égaux
          laissait un trou béant à droite. */}
      {[-1, 1].map((sd) => {
        const edge = sd < 0 ? -hw : hw
        const near = doorX + sd * doorHalf
        const len = Math.abs(edge - near)
        return (
          <mesh key={'w' + sd} position={[(edge + near) / 2, h / 2, backZ - 0.2]} receiveShadow>
            <boxGeometry args={[Math.max(0.01, len), h, 0.4]} />
            <Mat color={P.wallBack} roughness={0.95} />
          </mesh>
        )
      })}
      <mesh position={[doorX, doorH + (h - doorH) / 2, backZ - 0.2]} receiveShadow>
        <boxGeometry args={[doorHalf * 2, h - doorH, 0.4]} />
        <Mat color={P.wallBack} roughness={0.95} />
      </mesh>
      {/* le couloir derrière · sombre, pour que l'ouverture se lise comme une
          PROFONDEUR et non comme un trou découpé dans un décor plat */}
      <mesh position={[doorX, doorH / 2, backZ - 1.7]} receiveShadow>
        <boxGeometry args={[doorHalf * 2 + 0.6, doorH, 0.3]} />
        <Mat color={'#33384a'} roughness={1} />
      </mesh>
      {[-1, 1].map((sd) => (
        <mesh key={'dj' + sd} position={[doorX + sd * doorHalf, doorH / 2, backZ]} castShadow receiveShadow>
          <boxGeometry args={[0.34, doorH, 0.5]} />
          <Mat color={wood} roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[doorX, doorH, backZ]} castShadow receiveShadow>
        <boxGeometry args={[doorHalf * 2 + 0.34, 0.4, 0.5]} />
        <Mat color={wood} roughness={0.8} />
      </mesh>
      {[-1, 1].map((sd) => (
        <group key={'dv' + sd} position={[doorX + sd * doorHalf * 0.66, doorH / 2 - 0.05, backZ + 0.22]}>
          <Shoji w={doorHalf * 0.62} h={doorH - 0.26} paper={P.wallBack} wood={wood} glow={0.07} />
        </group>
      ))}
      <mesh position={[doorX, 0.06, backZ + 0.34]} receiveShadow>
        <boxGeometry args={[doorHalf * 2 + 0.34, 0.12, 0.62]} />
        <Mat color={wood} roughness={0.85} />
      </mesh>
      {Array.from({ length: bays }, (_, i) => (
        i === doorBay ? null : (
          <group key={'b' + i} position={[-hw + bayW * (i + 0.5), sill + bayH / 2, backZ]}>
            <Shoji w={bayW - 0.34} h={bayH} paper={P.wallBack} wood={wood} glow={0.05} />
          </group>
        )
      ))}
      {/* les poteaux · ceux qui bordent l'ouverture sont remplacés par
          l'encadrement, sinon ils la barreraient */}
      {Array.from({ length: bays + 1 }, (_, i) => (
        i === doorBay || i === doorBay + 1 ? null : (
          <mesh key={'p' + i} position={[-hw + bayW * i, h / 2, backZ + 0.02]} castShadow receiveShadow>
            <boxGeometry args={[0.3, h, 0.36]} />
            <Mat color={wood} roughness={0.82} />
          </mesh>
        )
      ))}
      {/* la plinthe du fond est coupée par la porte · un seuil, pas une barre */}
      {[-1, 1].map((sd) => {
        const edge = sd < 0 ? -hw : hw
        const near = doorX + sd * doorHalf
        return <Frame key={'f' + sd} len={Math.max(0.01, Math.abs(edge - near))} rotY={0} at={[(edge + near) / 2, 0, backZ + 0.02]} />
      })}

      {/* --- les côtés --- */}
      {[-1, 1].map((sd) => (
        <group key={sd}>
          <mesh position={[sd * (hw + 0.2), h / 2, 0]} receiveShadow>
            <boxGeometry args={[0.4, h, d]} />
            <Mat color={P.wallSide} roughness={0.95} />
          </mesh>
          {Array.from({ length: sideBays }, (_, i) => (
            <group key={i} position={[sd * hw, sill + bayH / 2, -d / 2 + sideW * (i + 0.5)]} rotation={[0, Math.PI / 2, 0]}>
              <Shoji w={sideW - 0.34} h={bayH} paper={P.wallSide} wood={wood} glow={0.03} />
            </group>
          ))}
          {Array.from({ length: sideBays + 1 }, (_, i) => (
            <mesh key={'sp' + i} position={[sd * hw, h / 2, -d / 2 + sideW * i]} castShadow receiveShadow>
              <boxGeometry args={[0.36, h, 0.3]} />
              <Mat color={wood} roughness={0.82} />
            </mesh>
          ))}
          <Frame len={d} rotY={Math.PI / 2} at={[sd * hw, 0, 0]} />
        </group>
      ))}
    </group>
  )
}

export function Decor3D({ palette, decor, enclosed, stations }: { palette: DojoPalette; decor: string; enclosed?: boolean; stations: Array<{ id: string; fn: Department; x: number; z: number }> }) {
  const P = palette
  const backZ = -ROOM.d / 2
  const halfW = ROOM.w / 2
  return (
    <group>
      {enclosed ? (
        // an enclosed room (walls) · the classic dojo, or the Backrooms
        <group>
          {/* le sol PORTE une matière · un aplat de couleur se lit comme un
              vide, la même surface avec sa trame donne l'échelle de la pièce
              et accroche la lumière (voir ./textures) */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
            <planeGeometry args={[ROOM.w, ROOM.d]} />
            <Mat
              color={P.ground}
              map={floorTexture(decor, P.ground)?.map}
              normalMap={floorTexture(decor, P.ground)?.normalMap}
              normalScale={NORMAL_FLOOR}
              flat
              roughness={(floorTexture(decor, P.ground)?.roughness ?? 0.92) * 0.72}
              envMapIntensity={0.9}
            />
          </mesh>
          {/* La grille disait l'échelle tant que le sol était un aplat. Maintenant
              que le sol porte sa propre trame, elle ne fait que la rayer — on la
              garde uniquement là où il n'y a pas de texture. */}
          {decor !== 'backrooms' && !floorTexture(decor, P.ground) && <gridHelper args={[ROOM.w, 8, P.grid, P.grid]} position={[0, 0.02, 0]} />}
          {decor === 'backrooms' ? (
            <group>
              {/* les Backrooms gardent leur identité · papier jauni et une
                  porte au fond. Leur y coller une charpente de dojo aurait
                  effacé le seul monde dont le vide EST le sujet. */}
              {/* L'ouverture est DÉCALÉE comme celle des onze autres mondes :
                  le coursier entre par la même porte partout, et l'estrade du
                  maître tient dans la moitié droite du fond. Les deux jambages
                  n'ont donc pas la même largeur. */}
              {([[-7.5, 5], [5, 10]] as Array<[number, number]>).map(([x, w]) => (
                <mesh key={x} position={[x, ROOM.wallH / 2, backZ]} receiveShadow><boxGeometry args={[w, ROOM.wallH, 0.4]} /><Mat color="#e8dca0" map={backroomsWallpaper()} roughness={1} /></mesh>
              ))}
              <mesh position={[doorAt(true).x, ROOM.wallH - 1, backZ]} receiveShadow><boxGeometry args={[5.2, 2, 0.4]} /><Mat color="#e8dca0" map={backroomsWallpaper()} roughness={1} /></mesh>
              {[-1, 1].map((sd) => (
                <mesh key={sd} position={[sd * halfW, ROOM.wallH / 2, 0]} receiveShadow><boxGeometry args={[0.4, ROOM.wallH, ROOM.d]} /><Mat color="#e8dca0" map={backroomsWallpaper()} roughness={1} /></mesh>
              ))}
            </group>
          ) : (
            <DojoShell P={P} w={ROOM.w} d={ROOM.d} h={ROOM.wallH} />
          )}
          {decor === 'dojo' && (
            <group position={[3.2, 2.5, backZ + 0.3]}>
              {/* le kakémono · seul le dojo zen le porte, c'est sa signature */}
              <mesh><boxGeometry args={[2.4, 4.0, 0.14]} /><Mat color={WOOD_D} /></mesh>
              <mesh position={[-0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><Mat color={PAPER} /></mesh>
              <mesh position={[0.6, 0, 0.08]}><boxGeometry args={[1.0, 3.6, 0.04]} /><Mat color={P.accent} emissive={P.accent} emissiveIntensity={0.15} /></mesh>
            </group>
          )}
          {[-halfW + 0.6, halfW - 0.6].map((x) => (
            <mesh key={x} position={[x, ROOM.wallH / 2, backZ + 1]} castShadow><boxGeometry args={[0.5, ROOM.wallH, 0.5]} /><Mat color={decor === 'dojo' ? WOOD : P.trim} roughness={0.9} /></mesh>
          ))}
        </group>
      ) : (
        // open-air floating platform · the theme decor is the backdrop
        <group>
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
            <circleGeometry args={[26, 64]} />
            <Mat
              color={P.ground}
              map={floorTexture(decor, P.ground)?.map}
              normalMap={floorTexture(decor, P.ground)?.normalMap}
              normalScale={NORMAL_FLOOR}
              flat
              roughness={(floorTexture(decor, P.ground)?.roughness ?? 0.92) * 0.72}
              envMapIntensity={0.9}
            />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
            <ringGeometry args={[13.4, 26, 64]} />
            <Mat color={P.grid} roughness={1} transparent opacity={0.5} />
          </mesh>
          {!floorTexture(decor, P.ground) && <gridHelper args={[26, 13, P.grid, P.grid]} position={[0, 0.02, 0]} />}
          {/* La MÊME enveloppe, en plus large · elle se pose DERRIÈRE le décor
              du thème (palmiers, étagères, machines), qui tient dans un rayon
              d'une douzaine d'unités. Posée à la taille d'une salle fermée,
              elle aurait traversé les palmiers de la villa. */}
          <DojoShell P={P} w={30} d={23} h={7.5} />
        </group>
      )}

      {/* L'HORIZON · un dôme en dégradé, uniquement pour les mondes ouverts.
          Une salle fermée a des murs qui bornent le regard ; une plateforme
          flottante n'avait qu'un aplat de fond, et rien ne disait où finissait
          le sol. Le dôme est vu de l'intérieur (BackSide) et ne reçoit ni ne
          projette d'ombre : il ne coûte qu'un maillage. */}
      {!enclosed && (
        <mesh scale={[-1, 1, 1]}>
          <sphereGeometry args={[70, 24, 16]} />
          <meshBasicMaterial map={skyGradient(P.fog, P.bg)} side={THREE.BackSide} depthWrite={false} fog={false} />
        </mesh>
      )}

      <RoomDressing P={P} decor={decor} enclosed={enclosed} />

      <ThemeDecor id={decor} backZ={backZ} P={P} />

      {/* L'ESTRADE · au fond, à droite de la porte. Elle est posée APRÈS le
          décor du thème pour une raison simple : c'est elle qui commande, et
          c'est autour d'elle que les objets du fond ont été écartés (voir
          stage.KEEP_CLEAR). */}
      <Dais P={P} />

      {/* Villa: a pool covering the seating area · agents lounge in the water */}
      {decor === 'villa' && (
        <group>
          {/* La piscine suit les rangées · elle était centrée en z = 1 quand
              les postes l'étaient en z = 0,7. Ils ont descendu de 1,2 pour
              dégager le fond, et une piscine restée en arrière aurait noyé
              l'estrade du maître tout en laissant l'équipe sur le carrelage. */}
          {/* pool coping / tiled edge */}
          <mesh position={[0, 0.16, 2.3]} receiveShadow><boxGeometry args={[15.4, 0.32, 10.4]} /><Mat color="#eaf6f4" roughness={0.7} /></mesh>
          {/* water surface */}
          <mesh position={[0, 0.5, 2.3]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[14.6, 9.6]} />
            <Mat color={P.accent} emissive={P.accent} emissiveIntensity={0.15} transparent opacity={0.78} roughness={0.25} />
          </mesh>
          {/* ripple rings on the surface */}
          {[[-5, 5], [6, 4], [-2, -2], [3.5, 5.5]].map(([x, z], i) => (
            <mesh key={i} position={[x as number, 0.52, z as number]} rotation={[-Math.PI / 2, 0, 0]}>
              <ringGeometry args={[0.5 + i * 0.1, 0.62 + i * 0.1, 30]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.35} side={2} />
            </mesh>
          ))}
          {/* floating beach balls + a drink ring */}
          <mesh position={[-6, 0.75, 5.6]} castShadow><sphereGeometry args={[0.42, 18, 16]} /><Mat color="#ff5d6c" {...M} /></mesh>
          <mesh position={[5.6, 0.72, 5.2]} castShadow><sphereGeometry args={[0.36, 18, 16]} /><Mat color="#ffd23f" {...M} /></mesh>
          <mesh position={[2, 0.6, 5.8]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.34, 0.12, 12, 24]} /><Mat color="#4fc3f7" {...M} /></mesh>
          {/* a pink flamingo pool float */}
          <group position={[6.6, 0.62, -1.6]} rotation={[0, -0.5, 0]}>
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow><torusGeometry args={[0.72, 0.26, 14, 28]} /><Mat color="#ff8fc0" {...M} /></mesh>
            <Cy p={[0, 0.5, 0.55]} r={0.09} h={1.0} c="#ff8fc0" rot={[0.5, 0, 0]} />
            <Sp p={[0.02, 0.98, 0.78]} r={0.2} c="#ff8fc0" />
            <Co p={[0.02, 0.96, 0.98]} r={0.07} h={0.24} c="#ffb400" rot={[Math.PI / 2, 0, 0]} />
          </group>
          {/* a yellow donut float */}
          <mesh position={[-2.4, 0.6, -1.2]} rotation={[Math.PI / 2, 0, 0]} castShadow><torusGeometry args={[0.6, 0.24, 14, 28]} /><Mat color="#ffd23f" {...M} /></mesh>
          <mesh position={[-2.4, 0.72, -1.2]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.6, 0.12, 12, 24, Math.PI * 1.3]} /><Mat color="#ff6fae" {...M} /></mesh>
        </group>
      )}

      {stations.map((s) => (
        <Station key={s.id} id={s.id} fn={s.fn} x={s.x} z={s.z} variant={decor} />
      ))}
    </group>
  )
}

function hashStr(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i)
  return h
}
