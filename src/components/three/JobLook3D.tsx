// La tenue de MÉTIER · ce qui distingue un ingénieur d'un directeur quand
// les deux sont des figurines de vinyle à grosse tête.
//
// Sur une étagère de figurines Animal Crossing, personne ne confond le
// gérant du magasin avec la secrétaire de mairie : l'un porte une chemise
// à fleurs, l'autre un gilet vert et un col blanc. Le MÉTIER est dans le
// vêtement, pas dans une étiquette au-dessus de la tête.
//
// C'est exactement ce qui manquait ici : douze coéquipiers en tenues
// identiques, différenciés seulement par une couleur et un badge de texte
// flottant. La couleur vient du skin (que l'utilisateur choisit), le métier
// vient d'ici — les deux se combinent sans se marcher dessus.
//
// Deux couches, séparées volontairement :
//   · ce qui se porte sur le CORPS (gilet, blouse, casque, col) ;
//   · ce qui se pose sur la TÊTE (casquette, lunettes, casque audio).
// La seconde est montée DANS le groupe mis à l'échelle de la tête, sinon
// une casquette resterait de la taille d'une casquette sur une tête de
// figurine — c'est-à-dire ridiculement petite.
import * as THREE from 'three'
import type { Department } from '../../data/agents'
import { ROLE_BY_ID, canonicalRole } from '../../data/roleAgents'
import { VINYL, PAINTED_METAL } from './toy'
import { roundedBox } from './geometry'

type V3 = [number, number, number]

const DEPARTMENTS: Department[] = ['Leadership', 'Engineering', 'Finance', 'Growth', 'Product', 'People', 'Ops']

/**
 * De quel métier relève ce coéquipier.
 *
 * On ne se fie PAS au seul champ `fn`. Les dojos vivent dans le navigateur
 * de l'utilisateur, parfois depuis des mois : un dojo créé avant que la
 * liste des départements ne se fixe porte des valeurs comme « Design » ou
 * « Marketing », qui n'en font pas partie. Le `switch` retombait alors en
 * silence sur `null` — aucune tenue, aucune erreur, rien à voir. Le défaut
 * était sous mes yeux dans mon propre jeu d'essai, où deux agents sur
 * quatre n'avaient rien : je l'avais mis sur le compte du cadrage.
 *
 * Le RÔLE, lui, porte toujours son département (data/roleAgents). On lit
 * donc `fn` s'il est valide, et on retombe sur le rôle sinon.
 */
export function jobOf(fn?: string, role?: string): Department | null {
  if (fn && (DEPARTMENTS as string[]).includes(fn)) return fn as Department
  if (role) {
    const r = ROLE_BY_ID[canonicalRole(role)]
    if (r?.dept) return r.dept
  }
  return null
}

// Les couleurs des ACCESSOIRES ne viennent pas du skin. Une couronne teintée
// de la couleur d'accent du personnage devenait vert pâle sur une tête vert
// pâle : l'objet existait et ne se voyait pas. Un casque de chantier est
// jaune, une couronne est dorée, un casque audio est noir — ce sont des
// objets du monde réel, pas des variantes de la palette du joueur.
const GOLD = '#f0b429'
const DARK = '#23262e'

function B({ p, s, c, rot, mat = VINYL }: { p: V3; s: V3; c: string; rot?: V3; mat?: object }) {
  return (
    <mesh position={p} rotation={rot} geometry={roundedBox(s[0], s[1], s[2], 0.18)} castShadow>
      <meshStandardMaterial color={c} {...mat} />
    </mesh>
  )
}
function Sp({ p, r, c, s = [1, 1, 1] as V3, mat = VINYL }: { p: V3; r: number; c: string; s?: V3; mat?: object }) {
  return (
    <mesh position={p} scale={s} castShadow>
      <sphereGeometry args={[r, 16, 14]} />
      <meshStandardMaterial color={c} {...mat} />
    </mesh>
  )
}
function Cy({ p, r, h, c, rot, mat = VINYL }: { p: V3; r: number; h: number; c: string; rot?: V3; mat?: object }) {
  return (
    <mesh position={p} rotation={rot} castShadow>
      <cylinderGeometry args={[r, r, h, 16]} />
      <meshStandardMaterial color={c} {...mat} />
    </mesh>
  )
}

/**
 * Ce qui se porte sur le corps · monté à l'échelle du torse.
 *
 * Le torse est un ellipsoïde de rayon 0,44 centré en y = 1,06, aplati à 0,9
 * en profondeur. Tout ce qui se pose dessus doit sortir de cette surface,
 * sinon il disparaît à l'intérieur — c'est l'erreur exacte qui avait rendu
 * col et ceinture invisibles la première fois.
 */
export function JobBody({ fn, accent }: { fn: Department; accent: string }) {
  switch (fn) {
    case 'Leadership':
      // veste croisée et cravate · l'autorité tient en deux revers
      return (
        <group>
          <B p={[-0.2, 1.06, 0.34]} s={[0.26, 0.5, 0.1]} c="#2b3350" rot={[0, 0, 0.22]} />
          <B p={[0.2, 1.06, 0.34]} s={[0.26, 0.5, 0.1]} c="#2b3350" rot={[0, 0, -0.22]} />
          <B p={[0, 1.2, 0.42]} s={[0.1, 0.12, 0.06]} c={accent} />
          <B p={[0, 1.0, 0.43]} s={[0.13, 0.3, 0.06]} c={accent} rot={[0, 0, 0.04]} />
        </group>
      )
    case 'Engineering':
      // sweat à capuche · la capuche retombe derrière la nuque
      return (
        <group>
          <Sp p={[0, 1.3, -0.3]} r={0.28} c="#3a4460" s={[1.2, 0.8, 0.7]} />
          <B p={[0, 1.02, 0.4]} s={[0.5, 0.36, 0.06]} c="#3a4460" />
          <B p={[0, 0.94, 0.44]} s={[0.34, 0.14, 0.05]} c="#2e3750" />
        </group>
      )
    case 'Finance':
      // gilet et nœud papillon
      return (
        <group>
          <B p={[-0.19, 1.04, 0.35]} s={[0.24, 0.52, 0.09]} c="#3d3a52" />
          <B p={[0.19, 1.04, 0.35]} s={[0.24, 0.52, 0.09]} c="#3d3a52" />
          <B p={[-0.09, 1.28, 0.4]} s={[0.12, 0.09, 0.07]} c={accent} rot={[0, 0, -0.3]} />
          <B p={[0.09, 1.28, 0.4]} s={[0.12, 0.09, 0.07]} c={accent} rot={[0, 0, 0.3]} />
          <Sp p={[0, 1.28, 0.42]} r={0.045} c={accent} />
        </group>
      )
    case 'Growth':
      // écharpe · le seul métier qui parle dehors, en toute saison
      return (
        <group>
          <mesh position={[0, 1.3, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.3, 0.075, 8, 20]} />
            <meshStandardMaterial color={accent} {...VINYL} />
          </mesh>
          <B p={[0.16, 1.06, 0.34]} s={[0.15, 0.42, 0.09]} c={accent} rot={[0, 0, -0.14]} />
        </group>
      )
    case 'Product':
      // tablier d'atelier · celui qui fabrique porte des poches
      return (
        <group>
          <B p={[0, 1.0, 0.36]} s={[0.56, 0.62, 0.07]} c="#6b5a44" />
          <B p={[0, 0.88, 0.41]} s={[0.4, 0.2, 0.05]} c="#5a4a36" />
          <B p={[-0.22, 1.32, 0.24]} s={[0.07, 0.24, 0.06]} c="#6b5a44" rot={[0, 0, 0.2]} />
          <B p={[0.22, 1.32, 0.24]} s={[0.07, 0.24, 0.06]} c="#6b5a44" rot={[0, 0, -0.2]} />
        </group>
      )
    case 'People':
      // col chemise ouvert et badge nominatif
      return (
        <group>
          <B p={[-0.13, 1.26, 0.36]} s={[0.2, 0.2, 0.07]} c="#f4f6fa" rot={[0, 0, 0.5]} />
          <B p={[0.13, 1.26, 0.36]} s={[0.2, 0.2, 0.07]} c="#f4f6fa" rot={[0, 0, -0.5]} />
          <B p={[0.2, 1.06, 0.38]} s={[0.16, 0.11, 0.04]} c="#f4f6fa" />
          <B p={[0.2, 1.06, 0.41]} s={[0.1, 0.03, 0.02]} c={accent} />
        </group>
      )
    case 'Ops':
      // gilet haute visibilité · deux bandes réfléchissantes
      return (
        <group>
          <B p={[-0.2, 1.04, 0.33]} s={[0.22, 0.54, 0.1]} c="#ffb400" />
          <B p={[0.2, 1.04, 0.33]} s={[0.22, 0.54, 0.1]} c="#ffb400" />
          <mesh position={[0, 1.12, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.42, 0.035, 6, 22]} />
            <meshStandardMaterial color="#e8eef6" roughness={0.3} metalness={0.2} />
          </mesh>
          <mesh position={[0, 0.96, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.43, 0.035, 6, 22]} />
            <meshStandardMaterial color="#e8eef6" roughness={0.3} metalness={0.2} />
          </mesh>
        </group>
      )
    default:
      return null
  }
}

/**
 * Ce qui se pose sur la TÊTE · à monter dans le groupe mis à l'échelle de
 * la tête (AboutY), avec les coordonnées du repère d'origine.
 *
 * La tête est une sphère de rayon 0,62 centrée en y = 1,95 dans ce repère.
 */
export function JobHead({ fn, accent }: { fn: Department; accent: string }) {
  const hy = 1.95
  switch (fn) {
    case 'Leadership':
      // une couronne discrète · trois pointes, pas un chapeau de fête
      return (
        <group>
          <Cy p={[0, hy + 0.56, 0]} r={0.44} h={0.14} c={GOLD} mat={PAINTED_METAL} />
          {[-0.32, 0, 0.32].map((x, i) => (
            <mesh key={x} position={[x, hy + 0.78, 0]} castShadow>
              <coneGeometry args={[0.11, 0.32 + (i === 1 ? 0.12 : 0), 10]} />
              <meshStandardMaterial color={GOLD} {...PAINTED_METAL} />
            </mesh>
          ))}
        </group>
      )
    case 'Engineering':
      // casque audio · l'arceau passe au-dessus, les écouteurs sur les côtés
      return (
        <group>
          <mesh position={[0, hy + 0.3, 0]} rotation={[0, 0, Math.PI]} castShadow>
            <torusGeometry args={[0.55, 0.055, 10, 22, Math.PI]} />
            <meshStandardMaterial color="#2b2f3d" {...VINYL} />
          </mesh>
          {[-1, 1].map((sd) => (
            <Cy key={sd} p={[sd * 0.58, hy + 0.1, 0]} r={0.19} h={0.12} c={DARK} rot={[0, 0, Math.PI / 2]} />
          ))}
          {[-1, 1].map((sd) => (
            <Cy key={'c' + sd} p={[sd * 0.65, hy + 0.1, 0]} r={0.13} h={0.03} c={accent} rot={[0, 0, Math.PI / 2]} />
          ))}
        </group>
      )
    case 'Finance':
      // lunettes rondes · deux cercles et un pont
      return (
        <group position={[0, hy + 0.04, 0.6]}>
          {[-0.26, 0.26].map((x) => (
            <mesh key={x} position={[x, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.22, 0.04, 8, 20]} />
              <meshStandardMaterial color="#2b2f3d" {...VINYL} />
            </mesh>
          ))}
          <B p={[0, 0, 0]} s={[0.18, 0.04, 0.04]} c="#2b2f3d" />
          {/* les branches, qui partent vers les tempes · sans elles les
              cercles flottent devant le visage */}
          {[-1, 1].map((sd) => (
            <B key={sd} p={[sd * 0.46, 0, -0.16]} s={[0.04, 0.04, 0.34]} c="#2b2f3d" rot={[0, sd * 0.4, 0]} />
          ))}
        </group>
      )
    case 'Growth':
      // micro-casque · l'arceau et la tige devant la bouche
      return (
        <group>
          <mesh position={[0, hy + 0.3, 0]} rotation={[0, 0, Math.PI]} castShadow>
            <torusGeometry args={[0.55, 0.045, 10, 22, Math.PI]} />
            <meshStandardMaterial color="#2b2f3d" {...VINYL} />
          </mesh>
          <Cy p={[-0.58, hy + 0.1, 0]} r={0.15} h={0.1} c="#2b2f3d" rot={[0, 0, Math.PI / 2]} />
          <Cy p={[-0.4, hy - 0.16, 0.34]} r={0.03} h={0.5} c="#2b2f3d" rot={[0.5, 0, -0.9]} />
          <Sp p={[-0.1, hy - 0.3, 0.52]} r={0.075} c={accent} />
        </group>
      )
    case 'Product':
      // casquette · visière tournée devant
      return (
        <group>
          <mesh position={[0, hy + 0.42, 0]} castShadow>
            <sphereGeometry args={[0.58, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
            <meshStandardMaterial color={accent} {...VINYL} side={THREE.DoubleSide} />
          </mesh>
          <B p={[0, hy + 0.4, 0.52]} s={[0.66, 0.06, 0.42]} c={accent} rot={[0.14, 0, 0]} />
          <Sp p={[0, hy + 0.66, 0]} r={0.07} c="#f4f6fa" />
        </group>
      )
    case 'People':
      // fleur à l'oreille · le métier qui accueille
      return (
        <group position={[0.5, hy + 0.32, 0.2]}>
          {[0, 1, 2, 3, 4].map((i) => {
            const a = (i / 5) * Math.PI * 2
            return <Sp key={i} p={[Math.cos(a) * 0.13, Math.sin(a) * 0.13, 0]} r={0.085} c="#ff9ec7" s={[1, 1, 0.5]} />
          })}
          <Sp p={[0, 0, 0.04]} r={0.06} c="#ffd23f" />
        </group>
      )
    case 'Ops':
      // casque de chantier · calotte et bord, avec sa crête
      return (
        <group>
          <mesh position={[0, hy + 0.4, 0]} castShadow>
            <sphereGeometry args={[0.6, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2.1]} />
            <meshStandardMaterial color="#ffb400" {...VINYL} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0, hy + 0.4, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
            <torusGeometry args={[0.6, 0.06, 8, 24]} />
            <meshStandardMaterial color="#e8a300" {...VINYL} />
          </mesh>
          <B p={[0, hy + 0.66, 0]} s={[0.1, 0.16, 0.9]} c="#e8a300" />
        </group>
      )
    default:
      return null
  }
}
