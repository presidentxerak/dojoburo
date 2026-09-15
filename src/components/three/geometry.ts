// Les arêtes du dojo.
//
// Une boîte de three.js a des angles PARFAITEMENT vifs. Dans le monde réel
// aucune arête ne l'est : il y a toujours un congé, large d'un dixième de
// millimètre sur un meuble, de plusieurs centimètres sur un jouet. Et c'est
// ce congé qui attrape la lumière — le filet clair qui court le long d'une
// arête est ce que l'œil lit comme « un objet », par opposition à « un
// polygone coloré ». C'est le premier signe du rendu bon marché, avant même
// les textures.
//
// On remplace donc chaque boîte par une boîte à arêtes adoucies. La méthode
// est celle de RoundedBoxGeometry : on subdivise la boîte, puis on projette
// chaque sommet sur la surface d'un « cube arrondi » — pour chaque sommet on
// cherche le point le plus proche dans la boîte INTÉRIEURE (la boîte moins
// le rayon) et on le repousse de ce rayon dans la direction qui les sépare.
// Les faces restent planes, seules les arêtes et les coins s'arrondissent.
//
// Le coût est en SOMMETS, pas en appels de dessin : une boîte passe de 24 à
// ~96 sommets. C'est négligeable à côté d'un appel de dessin, et les
// géométries sont mises en cache par dimensions — une bibliothèque de cent
// livres de même taille partage une seule géométrie.
import * as THREE from 'three'

const cache = new Map<string, THREE.BufferGeometry>()

/**
 * Une boîte aux arêtes adoucies.
 *
 * `radius` est donné en PROPORTION de la plus petite dimension (0,08 par
 * défaut), pas en unités du monde : un plateau de bureau fin et une armoire
 * haute reçoivent alors un congé visuellement comparable. Donner un rayon
 * absolu faisait disparaître les pièces minces, dont le rayon dépassait la
 * demi-épaisseur.
 */
export function roundedBox(w: number, h: number, d: number, radius = 0.08, seg = 3): THREE.BufferGeometry {
  // le congé ne peut pas dépasser la moitié de la plus petite dimension,
  // sinon la boîte intérieure s'inverse et la géométrie se retourne
  const r = Math.min(Math.min(w, h, d) * 0.5 * 0.98, Math.min(w, h, d) * radius)
  const key = `${w.toFixed(3)},${h.toFixed(3)},${d.toFixed(3)},${r.toFixed(4)},${seg}`
  const hit = cache.get(key)
  if (hit) return hit

  const g = new THREE.BoxGeometry(w, h, d, seg, seg, seg)
  const pos = g.attributes.position as THREE.BufferAttribute
  const ix = w / 2 - r, iy = h / 2 - r, iz = d / 2 - r
  const v = new THREE.Vector3(), c = new THREE.Vector3(), dir = new THREE.Vector3()
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i)
    c.set(
      Math.max(-ix, Math.min(ix, v.x)),
      Math.max(-iy, Math.min(iy, v.y)),
      Math.max(-iz, Math.min(iz, v.z)),
    )
    dir.subVectors(v, c)
    const len = dir.length()
    if (len > 1e-6) {
      dir.multiplyScalar(r / len)
      v.copy(c).add(dir)
      pos.setXYZ(i, v.x, v.y, v.z)
    }
  }
  pos.needsUpdate = true
  // sans cela les normales restent celles de la boîte d'origine et les
  // congés s'éclairent comme des angles vifs · tout le bénéfice disparaît
  g.computeVertexNormals()
  cache.set(key, g)
  return g
}

/** Un cylindre aux bords chanfreinés · même raison, pour les piliers et les
 *  plateaux ronds. On l'obtient d'un cylindre ouvert coiffé de deux tores
 *  serait plus cher ; ici on se contente d'un cylindre bien segmenté, dont
 *  le bord vif se voit beaucoup moins qu'un angle de boîte. */
export function drumGeometry(r: number, h: number, seg = 24): THREE.BufferGeometry {
  const key = `drum:${r.toFixed(3)},${h.toFixed(3)},${seg}`
  const hit = cache.get(key)
  if (hit) return hit
  const g = new THREE.CylinderGeometry(r, r, h, seg)
  cache.set(key, g)
  return g
}

/** Combien de géométries distinctes sont gardées · lu par les épreuves, pour
 *  qu'un cache qui enfle sans borne se voie au lieu de se deviner. */
export function geometryCacheSize(): number {
  return cache.size
}
