// La réfraction du dojo · deux objets, pas plus.
//
// `transmission` fait rendre à three.js une passe opaque supplémentaire dans
// une cible hors écran à chaque image. Cette passe est mutualisée : elle
// coûte le même prix pour deux objets que pour vingt, mais elle DOUBLE le
// nombre d'appels de dessin de la scène. Sur un dojo qui tourne déjà à
// 60 images/s ce n'est pas rien, et c'est exactement le poste de dépense
// que ShadowBudget existe pour éviter ailleurs.
//
// D'où deux règles. La réfraction doit se VOIR, à un endroit où le regard
// passe, et ne se payer qu'une fois : deux pièces au fond de la salle, à
// z = -7,2 — derrière le mobilier de métier (z ≈ -5 à -6) et hors de la
// piscine de la villa, qui couvre presque tout le reste du sol. Et elle ne
// s'active que si la machine peut la payer (canAffordRefraction) : mesuré,
// elle fait passer le dojo de 2 à 1 image par seconde sous rendu logiciel.
// Ailleurs, le même objet est dessiné en verre translucide et brillant.
import { createContext, useContext, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import { MATTE, PAINTED_METAL, canAffordRefraction } from './toy'
import { Mat } from './Mat'

type V3 = [number, number, number]

/** Vrai = la passe de réfraction est payable ici · voir canAffordRefraction. */
const Refract = createContext(false)

/**
 * Le verre. Deux implémentations pour un seul objet :
 *
 *   · avec réfraction · `transmission`, qui déforme réellement la scène
 *     derrière la paroi ;
 *   · sans · un matériau translucide et lisse. Il reflète l'environnement
 *     et laisse voir au travers, il ne courbe simplement pas l'image. Ce
 *     n'est pas un pis-aller honteux : c'est du verre dessiné plutôt que du
 *     verre simulé, et personne ne le remarque à cette distance.
 */
function Glass({ color, thickness }: { color: string; thickness: number }) {
  const on = useContext(Refract)
  if (on) {
    return (
      <meshPhysicalMaterial
        color={color}
        transmission={1}
        thickness={thickness}
        ior={1.34}
        roughness={0.05}
        metalness={0}
        transparent
      />
    )
  }
  return (
    <Mat
      color={color}
      transparent
      opacity={0.34}
      roughness={0.08}
      metalness={0.02}
      envMapIntensity={1.6}
      side={THREE.DoubleSide}
    />
  )
}

/** Fontaine à eau · la bonbonne réfracte ce qui se passe derrière elle. */
function WaterCooler({ accent }: { accent: string }) {
  return (
    <group>
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.66, 0.9, 0.56]} />
        <Mat color="#e8ebf0" {...MATTE} />
      </mesh>
      <mesh position={[0, 0.98, 0]} castShadow>
        <cylinderGeometry args={[0.34, 0.3, 0.16, 24]} />
        <Mat color="#c8cfd8" {...PAINTED_METAL} />
      </mesh>
      {/* la bonbonne · le seul volume vraiment réfractant de la pièce */}
      <mesh position={[0, 1.44, 0]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 0.76, 28]} />
        <Glass color="#cdeeff" thickness={0.5} />
      </mesh>
      <mesh position={[0, 1.9, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.3, 0.2, 24]} />
        <Glass color="#cdeeff" thickness={0.3} />
      </mesh>
      {/* robinet + gobelets */}
      <mesh position={[0, 0.66, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.16, 12]} />
        <Mat color={accent} {...PAINTED_METAL} />
      </mesh>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0.42, 0.98 + i * 0.09, 0]}>
          <cylinderGeometry args={[0.075, 0.055, 0.12, 14]} />
          <Mat color="#f6f7fb" roughness={0.6} />
        </mesh>
      ))}
    </group>
  )
}

/** Vitrine · une cloche de verre sur un socle, avec dedans le cristal aux
 *  couleurs du dojo. C'est l'objet qui montre le mieux la réfraction : on
 *  voit le cristal DÉFORMÉ à travers la paroi courbe. */
function Vitrine({ accent }: { accent: string }) {
  return (
    <group>
      <mesh position={[0, 0.34, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.0, 0.68, 1.0]} />
        <Mat color="#3a4050" {...MATTE} />
      </mesh>
      <mesh position={[0, 0.7, 0]} castShadow>
        <boxGeometry args={[1.12, 0.08, 1.12]} />
        <Mat color="#4a5262" {...MATTE} />
      </mesh>
      {/* le cristal, dedans */}
      <mesh position={[0, 1.12, 0]} castShadow>
        <octahedronGeometry args={[0.3, 0]} />
        <Mat color={accent} emissive={accent} emissiveIntensity={0.5} roughness={0.25} metalness={0.1} />
      </mesh>
      <pointLight position={[0, 1.12, 0]} color={accent} intensity={1.4} distance={3.2} />
      {/* la cloche */}
      <mesh position={[0, 1.18, 0]}>
        <cylinderGeometry args={[0.42, 0.42, 0.92, 28, 1, true]} />
        <Glass color="#eaf6ff" thickness={0.24} />
      </mesh>
      <mesh position={[0, 1.66, 0]}>
        <sphereGeometry args={[0.42, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <Glass color="#eaf6ff" thickness={0.24} />
      </mesh>
      <mesh position={[0, 1.66, 0]} rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[0.42, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshBasicMaterial visible={false} side={THREE.BackSide} />
      </mesh>
    </group>
  )
}

/** Les deux pièces de verre du dojo, toujours aux mêmes coins du fond. */
export function Glass3D({ accent }: { accent: string }) {
  const gl = useThree((s) => s.gl)
  // une fois, au montage · interroger le pilote à chaque image ne dirait rien
  // de plus et coûterait un aller-retour WebGL
  const on = useMemo(() => canAffordRefraction(gl), [gl])
  // La décision, écrite sur le canvas. Sans elle, la seule façon de vérifier
  // que la garde fait son travail serait de mesurer un nombre d'images — et
  // ce nombre ne veut rien dire sur la machine d'intégration, qui rend en
  // logiciel. Un attribut de données se lit sans rien deviner.
  useEffect(() => { gl.domElement.dataset.refraction = on ? '1' : '0' }, [gl, on])
  const L: V3 = [-9.0, 0, -7.2]
  const R: V3 = [9.0, 0, -7.2]
  return (
    <Refract.Provider value={on}>
      <group position={L} rotation={[0, 0.5, 0]}><WaterCooler accent={accent} /></group>
      <group position={R} rotation={[0, -0.5, 0]}><Vitrine accent={accent} /></group>
    </Refract.Provider>
  )
}
