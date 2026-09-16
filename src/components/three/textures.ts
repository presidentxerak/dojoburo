// Les textures du dojo, dessinées en code.
//
// Aucun fichier à télécharger : tout est peint une fois dans un canvas hors
// écran, puis gardé. Une image de tatami de 512 px coûterait 300 ko sur le
// réseau et bloquerait le premier rendu ; celle-ci coûte deux millisecondes
// de dessin et rien du tout en bande passante.
//
// Pourquoi ça change tout · un sol peint d'une seule couleur plate se lit
// comme un vide. Le même sol avec une trame — la natte du tatami, le fil du
// bois, le joint du carrelage — donne l'échelle de la pièce et attrape la
// lumière. C'est le poste qui distingue « une scène 3D » d'« un lieu ».
//
// Chaque texture est construite UNE fois et mise en cache par clé : sans le
// cache, un changement de dojo repeindrait tout et fabriquerait une nouvelle
// texture GPU à chaque fois, jusqu'à saturer la mémoire vidéo.
import * as THREE from 'three'

/** Une surface complète · sa couleur, son relief et sa rugosité. */
export interface Surface {
  map: THREE.Texture
  normalMap: THREE.Texture
  /** 0 = miroir, 1 = craie. Un carrelage renvoie la lumière, un tatami
   *  l'absorbe : leur donner la même valeur les fait lire comme la même
   *  matière peinte de deux couleurs. */
  roughness: number
}

const cache = new Map<string, Surface>()

/**
 * Dérive une carte de NORMALES de l'image de couleur, par un filtre de Sobel
 * sur la luminance.
 *
 * Sans elle, une texture n'est qu'un dessin collé sur un plan parfaitement
 * lisse : la lumière glisse dessus sans rien accrocher, et le sol reste plat
 * quoi qu'on y peigne. Avec elle, chaque joint de carrelage, chaque fil de
 * bois et chaque tresse de tatami dévie la lumière — le relief EXISTE pour
 * l'éclairage, sans un seul polygone de plus.
 *
 * L'approximation vaut ce qu'elle vaut : elle suppose que ce qui est sombre
 * est creux. C'est faux pour une texture qui porte de la couleur pure (un
 * liseré rouge n'est pas un sillon), et juste pour tout ce qu'on dessine
 * ici, où le sombre EST le joint ou la rainure.
 */
function normalFrom(cv: HTMLCanvasElement, strength: number): THREE.Texture {
  const s = cv.width
  const src = cv.getContext('2d')?.getImageData(0, 0, s, s)
  const out = document.createElement('canvas')
  out.width = out.height = s
  const octx = out.getContext('2d')
  if (!src || !octx) return new THREE.Texture()
  const img = octx.createImageData(s, s)
  const lum = (x: number, y: number) => {
    const i = (((y + s) % s) * s + ((x + s) % s)) * 4
    return (src.data[i] * 0.299 + src.data[i + 1] * 0.587 + src.data[i + 2] * 0.114) / 255
  }
  // ON LISSE AVANT DE DÉRIVER, et c'est la correction qui change tout.
  //
  // Le Sobel était appliqué à la luminance BRUTE, grain compris. Or le grain
  // est du bruit d'un pixel : dérivé, il produit une carte de normales qui
  // part dans tous les sens d'un pixel à l'autre. La lumière s'y accroche
  // partout et nulle part, et la surface scintille — c'est exactement ce qui
  // faisait lire l'herbe et le béton comme de la neige de télévision, et
  // c'est ce qu'on nous reproche.
  //
  // Une moyenne 3×3 avant la dérivée efface le grain et garde les ARÊTES :
  // le joint de carrelage, le fil du bois, la tresse du tatami. Le relief
  // porte alors la STRUCTURE de la matière, pas son bruit. Le grain reste
  // dans la couleur, où il est à sa place.
  const soft = (x: number, y: number) => {
    let a = 0
    for (let j = -1; j <= 1; j++) for (let i = -1; i <= 1; i++) a += lum(x + i, y + j)
    return a / 9
  }
  for (let y = 0; y < s; y++) {
    for (let x = 0; x < s; x++) {
      const dx = (soft(x + 1, y) - soft(x - 1, y)) * strength
      const dy = (soft(x, y + 1) - soft(x, y - 1)) * strength
      // le vecteur (-dx, -dy, 1) normalisé, encodé dans [0,255]
      const len = Math.hypot(dx, dy, 1)
      const i = (y * s + x) * 4
      img.data[i] = ((-dx / len) * 0.5 + 0.5) * 255
      img.data[i + 1] = ((-dy / len) * 0.5 + 0.5) * 255
      img.data[i + 2] = (1 / len) * 0.5 * 255 + 127.5
      img.data[i + 3] = 255
    }
  }
  octx.putImageData(img, 0, 0)
  const t = new THREE.CanvasTexture(out)
  t.wrapS = t.wrapT = THREE.RepeatWrapping
  return t
}

function make(key: string, size: number, draw: (c: CanvasRenderingContext2D, s: number) => void, repeat: number, bump = 6, roughness = 0.9): Surface {
  const hit = cache.get(key)
  if (hit) return hit
  const cv = document.createElement('canvas')
  cv.width = cv.height = size
  const ctx = cv.getContext('2d')
  if (!ctx) {
    // pas de canvas 2D (contexte perdu, navigateur exotique) · une texture
    // blanche neutre vaut mieux qu'une exception dans le rendu
    const t = { map: new THREE.Texture(), normalMap: new THREE.Texture(), roughness }
    cache.set(key, t)
    return t
  }
  draw(ctx, size)
  const tex = new THREE.CanvasTexture(cv)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeat, repeat)
  // Un sol se regarde EN FUYANTE, et c'est là qu'une texture répétée
  // s'effondre en moirage. L'anisotropie est ce qui la tient ; 4 était trop
  // bas, three.js ramènera de toute façon au maximum de la machine.
  tex.anisotropy = 16
  tex.colorSpace = THREE.SRGBColorSpace
  const nrm = normalFrom(cv, bump)
  nrm.repeat.set(repeat, repeat)
  nrm.anisotropy = 16
  const surf = { map: tex, normalMap: nrm, roughness }
  cache.set(key, surf)
  return surf
}

/** Bruit fin, appliqué par-dessus un aplat · casse la planéité sans se voir. */
function grain(c: CanvasRenderingContext2D, s: number, amount: number) {
  const img = c.getImageData(0, 0, s, s)
  const d = img.data
  for (let i = 0; i < d.length; i += 4) {
    const n = (Math.random() - 0.5) * amount
    d[i] += n; d[i + 1] += n; d[i + 2] += n
  }
  c.putImageData(img, 0, 0)
}

/** Natte de tatami · des bandes tressées, alternées d'un quart de tour. */
export function tatami(base = '#c9d98a', edge = '#8aa34e') {
  return make(`tatami-${base}-${edge}`, 256, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    const half = s / 2
    for (const [ox, oy, vertical] of [[0, 0, true], [half, 0, false], [0, half, false], [half, half, true]] as [number, number, boolean][]) {
      c.save()
      c.translate(ox, oy)
      c.strokeStyle = 'rgba(0,0,0,0.055)'
      c.lineWidth = 1
      for (let i = 3; i < half; i += 5) {
        c.beginPath()
        if (vertical) { c.moveTo(i, 0); c.lineTo(i, half) } else { c.moveTo(0, i); c.lineTo(half, i) }
        c.stroke()
      }
      c.restore()
    }
    // le liseré de tissu qui borde chaque natte
    c.strokeStyle = edge
    c.lineWidth = 4
    c.strokeRect(1, 1, half - 2, half - 2)
    c.strokeRect(half + 1, 1, half - 2, half - 2)
    c.strokeRect(1, half + 1, half - 2, half - 2)
    c.strokeRect(half + 1, half + 1, half - 2, half - 2)
    grain(c, s, 9)
  }, 6, 7, 0.94)
}

/** Lames de parquet · joints décalés d'une rangée à l'autre. */
export function planks(base = '#b98a52', line = '#8a5f36') {
  return make(`planks-${base}-${line}`, 256, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    const h = s / 8
    for (let r = 0; r < 8; r++) {
      const off = (r % 2) * (s / 3)
      c.strokeStyle = line
      c.lineWidth = 2
      c.beginPath(); c.moveTo(0, r * h); c.lineTo(s, r * h); c.stroke()
      for (let k = 0; k < 3; k++) {
        const x = (off + k * (s / 3)) % s
        c.beginPath(); c.moveTo(x, r * h); c.lineTo(x, (r + 1) * h); c.stroke()
      }
      // fil du bois
      c.strokeStyle = 'rgba(0,0,0,0.05)'
      c.lineWidth = 1
      for (let i = 0; i < 5; i++) {
        const y = r * h + 3 + Math.random() * (h - 6)
        c.beginPath(); c.moveTo(0, y); c.bezierCurveTo(s / 3, y + 2, (2 * s) / 3, y - 2, s, y); c.stroke()
      }
    }
    grain(c, s, 8)
  }, 5, 6, 0.62)
}

/** Carrelage · dalles claires et joint creusé. */
export function tiles(base = '#e8ebf0', joint = '#c3c9d4') {
  return make(`tiles-${base}-${joint}`, 256, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    const n = 4, step = s / n
    c.strokeStyle = joint
    c.lineWidth = 3
    for (let i = 0; i <= n; i++) {
      c.beginPath(); c.moveTo(i * step, 0); c.lineTo(i * step, s); c.stroke()
      c.beginPath(); c.moveTo(0, i * step); c.lineTo(s, i * step); c.stroke()
    }
    // un reflet doux au centre de chaque dalle
    for (let a = 0; a < n; a++) for (let b = 0; b < n; b++) {
      const g = c.createRadialGradient(a * step + step * 0.35, b * step + step * 0.3, 2, a * step + step / 2, b * step + step / 2, step * 0.7)
      g.addColorStop(0, 'rgba(255,255,255,0.4)')
      g.addColorStop(1, 'rgba(255,255,255,0)')
      c.fillStyle = g
      c.fillRect(a * step + 2, b * step + 2, step - 4, step - 4)
    }
    grain(c, s, 5)
  }, 7, 5, 0.34)
}

/** Moquette · un feutre dense, sans motif, qui absorbe la lumière. */
export function carpet(base = '#8f93a8') {
  // Trois mille cinq cents points d'un pixel et demi sur une toile de 128,
  // répétée NEUF fois : la même faute que l'herbe, et le même résultat — de
  // la neige de télévision, ici en blanc. C'est ce qu'on voyait sur le sol du
  // monde « start-up » et de l'atelier.
  //
  // Une moquette ne se lit pas à la fibre : elle se lit à la TRAÎNÉE, ces
  // bandes claires et sombres que laisse l'aspirateur, et à une granulation
  // qu'on devine sans la résoudre. Toile quatre fois plus grande, répétition
  // divisée par deux, traînées larges, et une fibre courte assez épaisse pour
  // faire plus d'un pixel à l'écran.
  return make(`carpet-${base}`, 512, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    // les traînées · larges bandes verticales à peine contrastées
    for (let i = 0; i < 26; i++) {
      const x = Math.random() * s
      const w = 18 + Math.random() * 70
      c.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
      c.fillRect(x, 0, w, s)
    }
    // la granulation · courte, épaisse, peu nombreuse
    c.lineCap = 'round'
    for (let i = 0; i < 1400; i++) {
      c.strokeStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'
      c.lineWidth = 1.5 + Math.random()
      const x = Math.random() * s, y = Math.random() * s
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + (Math.random() - 0.5) * 4, y + (Math.random() - 0.5) * 4); c.stroke()
    }
  }, 4, 2.5, 0.95)
}

/** Béton lissé · taches larges et poussière fine. */
export function concrete(base = '#b9bec9') {
  return make(`concrete-${base}`, 256, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    for (let i = 0; i < 26; i++) {
      const g = c.createRadialGradient(Math.random() * s, Math.random() * s, 2, Math.random() * s, Math.random() * s, 30 + Math.random() * 60)
      g.addColorStop(0, `rgba(0,0,0,${0.02 + Math.random() * 0.05})`)
      g.addColorStop(1, 'rgba(0,0,0,0)')
      c.fillStyle = g
      c.fillRect(0, 0, s, s)
    }
    grain(c, s, 7)
  }, 4, 4, 0.82)
}

/** Papier de riz · la trame fine d'un shoji, à contre-jour. */
export function shoji(base = '#f7f1e0') {
  return make(`shoji-${base}`, 128, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    c.strokeStyle = 'rgba(160,140,100,0.16)'
    c.lineWidth = 1
    for (let i = 0; i < s; i += 4) {
      c.beginPath(); c.moveTo(i, 0); c.lineTo(i, s); c.stroke()
      c.beginPath(); c.moveTo(0, i); c.lineTo(s, i); c.stroke()
    }
    grain(c, s, 6)
  }, 3, 3, 0.95)
}

/** Herbe · touffes courtes, deux verts. */
export function grass(base = '#93c74d', dark = '#6f9c33') {
  // Mille huit cents traits d'UN pixel sur une toile de 128, répétée DIX
  // fois : à la distance de la caméra, chaque brin mesurait un dixième de
  // pixel. On ne voyait donc pas de l'herbe, on voyait le moiré de mille huit
  // cents traits qu'on ne peut pas résoudre — de la neige verte.
  //
  // Toile quatre fois plus grande, répétition divisée par deux, brins plus
  // longs et moins nombreux : chaque brin fait maintenant plusieurs pixels à
  // l'écran, donc il se lit. Et surtout des TACHES larges par-dessous : une
  // pelouse n'est jamais d'un vert uniforme, c'est cette variation lente qui
  // la fait lire comme une étendue plutôt que comme un aplat bruité.
  return make(`grass-${base}-${dark}`, 512, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    for (let i = 0; i < 22; i++) {
      const g = c.createRadialGradient(Math.random() * s, Math.random() * s, 4, Math.random() * s, Math.random() * s, 60 + Math.random() * 120)
      g.addColorStop(0, Math.random() > 0.5 ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.07)')
      g.addColorStop(1, 'rgba(0,0,0,0)')
      c.fillStyle = g
      c.fillRect(0, 0, s, s)
    }
    c.lineCap = 'round'
    for (let i = 0; i < 900; i++) {
      c.strokeStyle = Math.random() > 0.45 ? dark : 'rgba(255,255,255,0.22)'
      c.lineWidth = 1.6 + Math.random() * 1.4
      const x = Math.random() * s, y = Math.random() * s
      const lean = (Math.random() - 0.5) * 7
      c.beginPath(); c.moveTo(x, y); c.quadraticCurveTo(x + lean * 0.5, y - 5, x + lean, y - 8 - Math.random() * 7); c.stroke()
    }
  }, 5, 4, 0.94)
}

/** Métal strié · le plancher d'atelier. */
export function treadplate(base = '#a4acbd') {
  return make(`tread-${base}`, 128, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    const step = s / 4
    for (let a = 0; a < 4; a++) for (let b = 0; b < 4; b++) {
      c.save()
      c.translate(a * step + step / 2, b * step + step / 2)
      c.rotate(((a + b) % 2 ? 1 : -1) * 0.7)
      c.fillStyle = 'rgba(255,255,255,0.22)'
      c.fillRect(-step * 0.3, -2.5, step * 0.6, 5)
      c.fillStyle = 'rgba(0,0,0,0.16)'
      c.fillRect(-step * 0.3, 2, step * 0.6, 2)
      c.restore()
    }
    grain(c, s, 10)
    // Répétition de 4 et non de 8, relief de 5 et non de 9 : à 8 la dalle
    // faisait 2,5 unités et le motif se lisait comme du bruit plutôt que
    // comme de la tôle. Une texture trop répétée ne donne pas de la matière,
    // elle donne du grain.
  }, 4, 5, 0.42)
}

/**
 * Le dégradé d'occlusion d'angle · sombre en bas, transparent en haut.
 *
 * Posé debout contre un mur, il imite l'ombre qui s'accumule dans l'angle.
 * Ce n'est pas de l'occlusion ambiante calculée — celle-là demanderait une
 * passe d'écran entière, et sur cette machine on a déjà mesuré ce que coûte
 * une passe de plus. C'est un dégradé, et il donne l'essentiel de la lecture.
 */
const shadeCache = { t: null as THREE.Texture | null }
export function cornerShade(): THREE.Texture {
  if (shadeCache.t) return shadeCache.t
  const c = document.createElement('canvas')
  c.width = 4; c.height = 64
  const g = c.getContext('2d')
  if (g) {
    const grad = g.createLinearGradient(0, 64, 0, 0)
    grad.addColorStop(0, 'rgba(0,0,0,0.55)')
    grad.addColorStop(0.45, 'rgba(0,0,0,0.16)')
    grad.addColorStop(1, 'rgba(0,0,0,0)')
    g.fillStyle = grad
    g.fillRect(0, 0, 4, 64)
  }
  const t = new THREE.CanvasTexture(c)
  shadeCache.t = t
  return t
}

/** Le sol de chaque monde · une seule table, pour que personne n'ait à
 *  deviner quelle texture va où. */
export function floorTexture(decor: string, ground: string): Surface | undefined {
  switch (decor) {
    case 'dojo': return tatami('#d8e3a0', '#8aa34e')
    case 'garden':
    case 'forest': return grass(ground, '#5f8c2c')
    case 'villa': return tiles('#ffe3c4', '#e0a878')
    case 'castle': return planks('#a89a84', '#7a6a55')
    case 'factory': return treadplate(ground)
    case 'lab': return tiles('#e4f6fb', '#a8d2dd')
    case 'startup': return carpet('#cfd0f0')
    case 'space': return treadplate('#2a3168')
    case 'wonderland': return tiles('#f6d9ff', '#d3a8e8')
    case 'backrooms': return carpet('#9a8f5e')
    default: return concrete(ground)
  }
}

/**
 * Le ciel · un dégradé vertical, du sol au zénith.
 *
 * `<color attach="background">` peint un aplat : le monde ouvert flottait
 * donc dans un vide d'une seule teinte, sans horizon, et rien ne disait où
 * finissait le sol. Un dégradé donne une profondeur immédiate pour un seul
 * maillage — et il est peint aux couleurs du monde, donc chaque dojo garde
 * son climat.
 */
export function skyGradient(horizon: string, zenith: string): THREE.Texture {
  return make(`sky-${horizon}-${zenith}`, 64, (c, s) => {
    const g = c.createLinearGradient(0, s, 0, 0)
    g.addColorStop(0, horizon)
    g.addColorStop(0.42, horizon)
    g.addColorStop(1, zenith)
    c.fillStyle = g
    c.fillRect(0, 0, s, s)
  }, 1, 0, 1).map
}
