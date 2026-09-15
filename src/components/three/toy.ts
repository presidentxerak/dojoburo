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

/** Corps, têtes, membres · la matière par défaut d'un personnage. */
export const VINYL = { roughness: 0.42, metalness: 0.0, envMapIntensity: 0.85 }

/** Bois, pierre, tissu · un décor absorbe plus qu'une figurine. */
export const MATTE = { roughness: 0.68, metalness: 0.03, envMapIntensity: 0.6 }

/** Métal peint · casques, machines, robots. Assez lisse pour accrocher la
 *  lumière, jamais assez pour devenir un miroir. */
export const PAINTED_METAL = { roughness: 0.34, metalness: 0.35, envMapIntensity: 1.0 }

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
