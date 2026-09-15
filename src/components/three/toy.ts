// Le rendu « jouet » de tout le dojo, en un seul endroit.
//
// Trois choses font qu'un objet 3D se lit comme une figurine de vinyle
// plutôt que comme un polygone coloré :
//
//   · une rugosité basse mais pas nulle · le vinyle a un reflet large et
//     doux, pas le point brillant du plastique verni ni le mat de la craie ;
//   · un éclairage d'environnement · sans lui, une sphère n'a qu'un point
//     lumineux et une ombre, et elle reste plate. C'est le poste qui change
//     le plus l'image pour le moins de travail ;
//   · aucune métallicité · une figurine peinte ne réfléchit pas le monde.
//
// Les 38 espèces de personnages et tous les décors passent par ces
// constantes : les changer ici restyle la totalité du jeu d'un coup.
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

/** Corps, têtes, membres · la matière par défaut d'un personnage.
 *
 *  0,42 de rugosité donnait une surface propre mais SÈCHE : la lumière s'y
 *  posait sans jamais s'y refléter, et une figurine sans reflet se lit comme
 *  une forme colorée, pas comme du plastique. Le reflet spéculaire — la
 *  tache claire qui glisse sur le crâne quand la caméra bouge — est ce qui
 *  dit « vinyle ». On resserre à 0,3 et on ouvre l'intensité d'environnement,
 *  qui est ce qui alimente ce reflet. */
export const VINYL = { roughness: 0.3, metalness: 0.0, envMapIntensity: 1.15 }

/** Bois, pierre, tissu · un décor absorbe plus qu'une figurine, mais pas au
 *  point de ne rien renvoyer : à 0,68 les meubles étaient des aplats. */
export const MATTE = { roughness: 0.56, metalness: 0.03, envMapIntensity: 0.85 }

/** Métal peint · casques, machines, robots. Assez lisse pour accrocher la
 *  lumière, jamais assez pour devenir un miroir. */
export const PAINTED_METAL = { roughness: 0.26, metalness: 0.4, envMapIntensity: 1.3 }

/**
 * La réfraction est-elle payable sur cette machine ?
 *
 * `transmission` oblige three.js à rendre une passe opaque supplémentaire
 * hors écran à chaque image. Mesuré (scripts/perf-scene.mjs) : le dojo
 * complet passe de 2 à 1 image par seconde sous SwiftShader — un facteur
 * DEUX. Le chiffre absolu ne vaut rien (c'est un rasteriseur logiciel), le
 * rapport si : la réfraction double le temps de rendu de la scène.
 *
 * Doubler le coût de la surface de travail principale sans le dire n'est pas
 * une amélioration graphique, c'est une dette qu'on fait payer à
 * l'utilisateur. On ne l'active donc que là où il y a de la marge, et on
 * retombe ailleurs sur un verre honnête — translucide et brillant, il ne
 * déforme simplement pas ce qu'il y a derrière.
 *
 * Trois refus, du plus sûr au plus prudent :
 *   · rendu LOGICIEL (SwiftShader, llvmpipe, Mesa générique) · pas de GPU ;
 *   · téléphone · l'écran est petit, le budget thermique aussi ;
 *   · moins de quatre cœurs · une machine d'entrée de gamme.
 */
export function canAffordRefraction(gl: THREE.WebGLRenderer): boolean {
  try {
    const ctx = gl.getContext()
    const dbg = ctx.getExtension('WEBGL_debug_renderer_info')
    const name = String(
      (dbg && ctx.getParameter(dbg.UNMASKED_RENDERER_WEBGL)) || ctx.getParameter(ctx.RENDERER) || '',
    ).toLowerCase()
    if (/swiftshader|llvmpipe|software|basic render|microsoft basic/.test(name)) return false
    if (typeof window !== 'undefined' && window.matchMedia?.('(max-width: 820px)').matches) return false
    const cores = (navigator as { hardwareConcurrency?: number }).hardwareConcurrency
    if (typeof cores === 'number' && cores > 0 && cores < 4) return false
    return true
  } catch {
    // impossible de savoir → on ne prend pas le risque
    return false
  }
}

/**
 * Construit une carte d'environnement à partir de la pièce de démonstration
 * de three.js. Aucun fichier à télécharger : la géométrie est décrite en
 * JavaScript, filtrée une fois au montage (~10 ms) puis gardée.
 *
 * Retourne aussi son propre nettoyage · une carte PMREM est une texture sur
 * le GPU, et en oublier une à chaque changement de dojo finit par saturer
 * la mémoire vidéo.
 */
export function makeStudioEnv(gl: THREE.WebGLRenderer): { texture: THREE.Texture; dispose: () => void } {
  const pmrem = new THREE.PMREMGenerator(gl)
  const room = new RoomEnvironment()
  const rt = pmrem.fromScene(room, 0.04)
  return {
    texture: rt.texture,
    dispose: () => {
      rt.dispose()
      pmrem.dispose()
      room.traverse((o) => {
        const m = o as THREE.Mesh
        if (m.geometry) m.geometry.dispose()
        const mat = m.material as THREE.Material | THREE.Material[] | undefined
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose())
        else if (mat) mat.dispose()
      })
    },
  }
}
