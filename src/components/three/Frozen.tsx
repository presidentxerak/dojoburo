// LE DÉCOR FIGÉ · ce qui ne bouge jamais ne coûte presque rien.
//
// DEUX COÛTS, DEUX RÉPONSES
//
// 1 · LE RECALCUL DES PLACES. À chaque image, three.js parcourt toute la scène
// pour recalculer la matrice de chaque objet, qu'il ait bougé ou non. On les
// calcule une fois, puis on les sort du parcours.
//
// 2 · LES APPELS DE DESSIN. Mesuré sur les vignettes de Training : une salle
// meublée compte environ 550 objets, chacun avec SON matériau, soit à peu près
// 400 appels de dessin par image et par salle. Huit salles à l'écran, c'est
// 3 200 appels par image : c'est cela qui faisait « lag », bien plus que le
// nombre de triangles. On FUSIONNE donc le décor : tous les objets opaques qui
// partagent la même apparence (même couleur, même rugosité, même texture…)
// deviennent un seul objet, dessiné en un seul appel. La salle se dessine à
// l'identique, en quelques dizaines d'appels.
//
// À N'EMPLOYER QUE POUR DU STATIQUE ET DU NON CLIQUABLE · un objet animé placé
// ici resterait figé à sa première pose, et un objet fusionné ne reçoit plus
// de clic. Decor3D, ThemeProps et les tapis du jeu n'ont ni animation ni clic.
import { type ReactNode, useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

/** L'apparence d'un matériau, en texte · deux matériaux qui donnent la même
 *  chaîne se dessinent pareil et peuvent partager un appel. */
function lookOf(m: THREE.Material): string | null {
  const x = m as THREE.MeshStandardMaterial & THREE.MeshPhysicalMaterial & { flatShading?: boolean }
  // le transparent se trie objet par objet · le fusionner changerait l'ordre
  if (m.transparent || m.opacity < 1) return null
  const c = (k: keyof typeof x) => ((x[k] as THREE.Color | undefined)?.getHexString?.() ?? '-')
  return [
    m.type, c('color'), c('emissive'), x.emissiveIntensity ?? '-',
    x.roughness ?? '-', x.metalness ?? '-', x.clearcoat ?? '-', x.sheen ?? '-',
    x.map?.uuid ?? '-', x.flatShading ? 1 : 0, m.side, m.vertexColors ? 1 : 0,
    x.envMapIntensity ?? '-', m.toneMapped ? 1 : 0, m.depthWrite ? 1 : 0,
  ].join('|')
}

/** Fusionner le décor sous `root` · rend le nombre d'objets remplacés. */
function bake(root: THREE.Object3D): number {
  root.updateMatrixWorld(true)
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert()
  const groups = new Map<string, THREE.Mesh[]>()
  root.traverse((o) => {
    const m = o as THREE.Mesh
    if (!m.isMesh || (m as unknown as THREE.InstancedMesh).isInstancedMesh || (m as unknown as THREE.SkinnedMesh).isSkinnedMesh) return
    if (Array.isArray(m.material) || !m.visible || m.userData.noBake) return
    // un objet caché par un parent caché ne se dessine pas : on le laisse
    let p: THREE.Object3D | null = m.parent
    while (p && p !== root) { if (!p.visible) return; p = p.parent }
    const key = lookOf(m.material)
    if (!key) return
    const list = groups.get(key)
    if (list) list.push(m)
    else groups.set(key, [m])
  })

  let replaced = 0
  for (const list of groups.values()) {
    if (list.length < 2) continue
    const hasMap = !!(list[0].material as THREE.MeshStandardMaterial).map
    const geos: THREE.BufferGeometry[] = []
    for (const m of list) {
      let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone()
      g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, m.matrixWorld))
      // LES MÊMES ATTRIBUTS PARTOUT · la fusion l'exige. Sans texture, les
      // coordonnées de texture ne servent à rien : on les retire.
      if (!g.getAttribute('normal')) g.computeVertexNormals()
      for (const name of Object.keys(g.attributes)) {
        if (name === 'position' || name === 'normal' || (hasMap && name === 'uv')) continue
        g.deleteAttribute(name)
      }
      if (hasMap && !g.getAttribute('uv')) { g.dispose(); g = null as unknown as THREE.BufferGeometry }
      if (g) { g.morphAttributes = {}; geos.push(g) }
    }
    if (geos.length < 2) { geos.forEach((g) => g.dispose()); continue }
    const merged = mergeGeometries(geos, false)
    geos.forEach((g) => g.dispose())
    if (!merged) continue
    const one = new THREE.Mesh(merged, list[0].material)
    one.castShadow = list.some((m) => m.castShadow)
    one.receiveShadow = list.some((m) => m.receiveShadow)
    one.name = 'frozen-merge'
    one.matrixAutoUpdate = false
    one.updateMatrix()
    root.add(one)
    // LES ORIGINAUX RESTENT EN PLACE, CACHÉS · React les possède et les
    // retirera lui-même au démontage ; un objet caché n'est ni parcouru ni
    // dessiné.
    for (const m of list) { m.visible = false; replaced++ }
  }
  return replaced
}

export function Frozen({ children, merge = true }: { children: ReactNode; merge?: boolean }) {
  const g = useRef<THREE.Group>(null)
  // TOUT DE SUITE, PAS APRÈS QUELQUES IMAGES · les salles hors de l'écran ne
  // dessinent qu'une image, et c'est justement celles qu'on voit en arrivant
  // dessus. Le décor est construit dans le même passage que ce groupe (aucune
  // suspension dedans), donc il est complet quand cet effet s'exécute.
  useLayoutEffect(() => {
    const o = g.current
    if (!o) return
    o.updateMatrixWorld(true)
    if (merge) { bake(o); o.updateMatrixWorld(true) }
    o.traverse((c) => { c.matrixAutoUpdate = false; c.matrixWorldAutoUpdate = false })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <group ref={g}>{children}</group>
}
