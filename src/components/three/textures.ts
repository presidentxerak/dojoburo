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

const cache = new Map<string, THREE.Texture>()

function make(key: string, size: number, draw: (c: CanvasRenderingContext2D, s: number) => void, repeat: number): THREE.Texture {
  const hit = cache.get(key)
  if (hit) return hit
  const cv = document.createElement('canvas')
  cv.width = cv.height = size
  const ctx = cv.getContext('2d')
  if (!ctx) {
    // pas de canvas 2D (contexte perdu, navigateur exotique) · une texture
    // blanche neutre vaut mieux qu'une exception dans le rendu
    const t = new THREE.Texture()
    cache.set(key, t)
    return t
  }
  draw(ctx, size)
  const tex = new THREE.CanvasTexture(cv)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(repeat, repeat)
  tex.anisotropy = 4
  tex.colorSpace = THREE.SRGBColorSpace
  cache.set(key, tex)
  return tex
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
  }, 6)
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
  }, 5)
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
  }, 7)
}

/** Moquette · un feutre dense, sans motif, qui absorbe la lumière. */
export function carpet(base = '#8f93a8') {
  return make(`carpet-${base}`, 128, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    for (let i = 0; i < 3500; i++) {
      c.fillStyle = `rgba(255,255,255,${Math.random() * 0.1})`
      c.fillRect(Math.random() * s, Math.random() * s, 1.5, 1.5)
      c.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`
      c.fillRect(Math.random() * s, Math.random() * s, 1.5, 1.5)
    }
  }, 9)
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
    grain(c, s, 14)
  }, 5)
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
  }, 3)
}

/** Herbe · touffes courtes, deux verts. */
export function grass(base = '#93c74d', dark = '#6f9c33') {
  return make(`grass-${base}-${dark}`, 128, (c, s) => {
    c.fillStyle = base
    c.fillRect(0, 0, s, s)
    for (let i = 0; i < 1800; i++) {
      c.strokeStyle = Math.random() > 0.5 ? dark : 'rgba(255,255,255,0.18)'
      c.lineWidth = 1
      const x = Math.random() * s, y = Math.random() * s
      c.beginPath(); c.moveTo(x, y); c.lineTo(x + (Math.random() - 0.5) * 3, y - 2 - Math.random() * 3); c.stroke()
    }
  }, 10)
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
  }, 8)
}

/** Le sol de chaque monde · une seule table, pour que personne n'ait à
 *  deviner quelle texture va où. */
export function floorTexture(decor: string, ground: string): THREE.Texture | undefined {
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
