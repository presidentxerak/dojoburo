// Le matériau de toute la scène · un seul point de passage.
//
// Pourquoi un composant plutôt qu'un remplacement de `meshStandardMaterial`
// par `meshToonMaterial` partout : il y avait cent quatre-vingt-dix-huit
// sites, dont soixante-dix passaient `roughness` ou `metalness` en clair. Ces
// deux propriétés n'existent pas sur un matériau toon, et three.js n'ignore
// pas une propriété inconnue en silence — il l'écrit dans la console à chaque
// création. Il aurait donc fallu reprendre soixante-dix sites à la main, dans
// neuf fichiers, pour un gain nul.
//
// Ce composant les ABSORBE : ce qui relève du rendu physique tombe dans
// `rest` et n'est jamais transmis. Le remplacement devient mécanique, une
// seule substitution de nom, et les anciens sacs de propriétés (VINYL, MATTE,
// PAINTED_METAL) continuent de se répandre sans qu'on y touche.
//
// `flat` retire le liseré. À réserver aux GRANDES SURFACES HORIZONTALES, sols
// en tête : un Fresnel rasant sur un plan produit un halo à l'horizon. C'est
// le piège n° 4 de la spécification du kit.
import * as THREE from 'three'
import { FLAT_KEY, RIM_KEY, TOON_RAMP, applyRim } from './kawaii'

export function Mat({
  color,
  map,
  normalMap,
  normalScale,
  emissive,
  emissiveIntensity,
  transparent,
  opacity,
  side,
  depthWrite,
  flat = false,
  ...rest
}: {
  color?: THREE.ColorRepresentation
  map?: THREE.Texture | null
  normalMap?: THREE.Texture | null
  normalScale?: THREE.Vector2
  emissive?: THREE.ColorRepresentation
  emissiveIntensity?: number
  transparent?: boolean
  opacity?: number
  side?: THREE.Side
  depthWrite?: boolean
  /** sans liseré · sols et grandes surfaces horizontales */
  flat?: boolean
  // absorbés volontairement · roughness, metalness, envMapIntensity…
  [k: string]: unknown
}) {
  void rest
  return (
    <meshToonMaterial
      color={color}
      map={map ?? undefined}
      normalMap={normalMap ?? undefined}
      normalScale={normalScale}
      emissive={emissive}
      emissiveIntensity={emissiveIntensity}
      transparent={transparent}
      opacity={opacity}
      side={side}
      depthWrite={depthWrite}
      gradientMap={TOON_RAMP}
      onBeforeCompile={flat ? undefined : applyRim}
      customProgramCacheKey={flat ? FLAT_KEY : RIM_KEY}
    />
  )
}
