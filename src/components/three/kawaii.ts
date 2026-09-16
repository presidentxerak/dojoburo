// Le rendu kawaii · le cœur du kit Bubble Tea Time, porté ici.
//
// Ce que ce fichier remplace : un rendu physique (meshStandardMaterial) avec
// des reflets d'environnement. C'était défendable, et ce n'était pas le bon
// choix pour ce produit. Un rendu PBR demande des matières crédibles, des
// lumières crédibles et une image de ciel crédible ; à trois éléments près on
// obtient du plastique de catalogue, ce qui est exactement le reproche qu'on
// nous a fait, tour après tour.
//
// Le cel shading ne cherche pas la crédibilité, il cherche la LISIBILITÉ. Il
// tient en trois pièces qui se soutiennent, et en retirer une fait s'effondrer
// les deux autres (c'est écrit noir sur blanc dans la spécification du kit, et
// c'est vérifiable en coupant le rim : les personnages redeviennent plats).
//
//   1. une rampe cel à trois paliers, dont le premier à 118 et surtout pas 70 —
//      en dessous, la bande ombrée écrase la teinte et tout le décor paraît
//      sale ;
//   2. un liseré de Fresnel injecté dans le shader, qui trace la silhouette en
//      lumière : c'est LUI SEUL qui donne du volume sur une rampe plate ;
//   3. un relèvement de saturation autour de la luminance, qui ramène la bande
//      ombrée vers sa propre teinte au lieu du gris.
//
// Le coût est d'un seul programme GLSL pour la scène entière : les uniforms
// sont partagés et `customProgramCacheKey` est une constante. Sans cette clé,
// chaque matériau compile sa propre variante — c'est le piège n° 3 de la
// spécification.
import * as THREE from 'three'

/** Les réglages du liseré · les valeurs du kit, mesurées, pas devinées.
 *  rimPower plus bas → liseré large et laiteux. Plus haut → trop fin, volume
 *  perdu. rimStrength au-delà de 0,6 → effet néon. */
const RIM_CFG = {
  rimColor: 0xffffff,
  rimPower: 2.4,
  rimStrength: 0.42,
  saturation: 1.34,
  colorFloor: 0.1,
}

/** La rampe · trois paliers. Le premier palier est le réglage le plus
 *  sensible du kit. */
export const TOON_RAMP = (() => {
  const d = new Uint8Array([118, 196, 255])
  const t = new THREE.DataTexture(d, d.length, 1, THREE.RedFormat)
  t.minFilter = t.magFilter = THREE.NearestFilter
  t.generateMipmaps = false
  t.needsUpdate = true
  return t
})()

const RIM_UNIFORMS = {
  uRimColor: { value: new THREE.Color(RIM_CFG.rimColor) },
  uRimPower: { value: RIM_CFG.rimPower },
  uRimStrength: { value: RIM_CFG.rimStrength },
  uSat: { value: RIM_CFG.saturation },
  uFloor: { value: RIM_CFG.colorFloor },
}

// Ancré APRÈS `#include <opaque_fragment>` : c'est le seul endroit où
// gl_FragColor, normal, vViewPosition et diffuseColor coexistent, et c'est
// avant le tone mapping.
const RIM_FRAG = `#include <opaque_fragment>
{
  vec3 V = normalize( vViewPosition );
  float fres = 1.0 - clamp( dot( normal, V ), 0.0, 1.0 );
  gl_FragColor.rgb += uRimColor * pow( fres, uRimPower ) * uRimStrength;
  float lum = dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
  gl_FragColor.rgb = mix( vec3( lum ), gl_FragColor.rgb, uSat );
  gl_FragColor.rgb += diffuseColor.rgb * uFloor;
}`

/** Injecté dans le pipeline toon. Défini UNE fois au niveau du module : une
 *  fonction recréée à chaque rendu ferait recompiler le shader en boucle. */
export function applyRim(sh: {
  uniforms: Record<string, unknown>
  fragmentShader: string
}) {
  Object.assign(sh.uniforms, RIM_UNIFORMS)
  sh.fragmentShader =
    'uniform vec3 uRimColor;uniform float uRimPower;uniform float uRimStrength;' +
    'uniform float uSat;uniform float uFloor;\n' +
    sh.fragmentShader.replace('#include <opaque_fragment>', RIM_FRAG)
}

export const RIM_KEY = () => 'toonrim'
export const FLAT_KEY = () => 'toonflat'

// --- la palette du DOJO ----------------------------------------------------
//
// La palette du kit est celle d'un salon de bubble tea : beurre, fuchsia,
// menthe. Elle ne convient pas ici, et la règle de composition, elle, se
// transpose telle quelle : UNE base chaude dominante, DEUX accents saturés,
// une teinte tertiaire. Multiplier les teintes concurrentes donne du criard,
// pas du kawaii — c'est littéralement ce qu'on nous reproche depuis le début.
//
// Ici la base est le washi et le bois, les accents sont l'indigo et le rouge
// vermillon des temples, la tertiaire est le vert mousse. Rien de plus.
export const DOJO = {
  /** Les grandes surfaces · jamais saturées. Un mur de vingt mètres dans une
   *  couleur vive devient la seule chose qu'on voit. */
  tatami: 0xd8cfa4,
  tatamiEdge: 0x4a5a3a,
  washi: 0xf2ece0,
  plaster: 0xe6dfd0,
  wood: 0x8c6644,
  woodDark: 0x5d4230,
  beam: 0x6d4f38,
  stone: 0x9a978e,
  /** Les accents · en petite quantité, sur les objets, jamais sur les murs. */
  indigo: 0x2e4a6b,
  vermilion: 0xc4462f,
  moss: 0x6b7f4a,
  gold: 0xc9a227,
  ink: 0x2a1b16,
}

/** Les fourrures · désaturées par rapport au kit, pour un dojo. On garde la
 *  logique : les vêtements sont PLUS saturés que les fourrures, ils servent de
 *  ponctuation et aident à distinguer deux personnages de même espèce. */
export const FUR = [
  0xf0e2cd, 0xe8c9a0, 0xd9a877, 0xc98f63, 0xa8784f, 0x8a6244,
  0xe9e4da, 0xcfc8ba, 0xa8a89c, 0x7e7d75, 0x4a4a46, 0x2e2b28,
  0xd8c8b0, 0xbfd0c4, 0xc8c2d8, 0xe0c4c0, 0xc4d2d8, 0xd6d2a8,
]

/** Les vêtements · les teintes d'un dojo : indigo, vermillon, ocre, mousse,
 *  prune, ardoise. Saturées, mais dans une famille restreinte. */
export const CLOTH = [
  0x2e4a6b, 0xc4462f, 0xb07d2a, 0x5b7a3e, 0x6b4a6b, 0x3f4a55,
  0x1f3448, 0x8c3b2a, 0x7a6a2a, 0x46603a, 0x54405e, 0x2b3640,
]

export const PINK = 0xe7a0a8
