// ---------------------------------------------------------------------------
// Le mobilier de MÉTIER · ce qui distingue « écrire un livre » de « ouvrir une
// boutique » quand les deux se déroulent dans la même pièce.
//
// Les onze mondes de Decor3D (dojo, villa, laboratoire, château, usine…) sont
// des DÉCORS : ils donnent le lieu, et l'utilisateur les choisit pour
// personnaliser son dojo. Ils ne bougent pas d'un pouce ici. Cette couche
// s'ajoute PAR-DESSUS et donne le MÉTIER : des bibliothèques pour un livre,
// un rack de serveurs pour une application, un portant et une caisse pour une
// boutique. Un dojo « écrire un livre » posé dans le château garde son
// château et gagne ses murs de livres.
//
// Emplacements · six, tous dans la bande du fond (z entre -6,0 et -5,0).
// Ce n'est pas de la timidité : la villa pose une PISCINE de 18,4 × 10,4
// centrée en z = 1, dont le bord arrière tombe à z = -4,2, et tout ce qu'on
// placerait sur les côtés ou devant flotterait dedans. La bande du fond est
// la seule zone sèche dans les onze mondes à la fois, et elle est exactement
// là où le regard se pose derrière l'équipe.
// ---------------------------------------------------------------------------
import { useMemo } from 'react'
import * as THREE from 'three'
import { MATTE, VINYL, PAINTED_METAL } from './toy'
import { roundedBox } from './geometry'
import { Mat } from './Mat'
import { PROP_SLOTS } from './stage'

type V3 = [number, number, number]

// --- primitives, mêmes conventions que Decor3D ------------------------------
const M = MATTE
function B({ p, s, c, rot, mat = M }: { p: V3; s: V3; c: string; rot?: V3; mat?: object }) {
  return <mesh position={p} rotation={rot} geometry={roundedBox(s[0], s[1], s[2])} castShadow receiveShadow><Mat color={c} {...mat} /></mesh>
}
function Cy({ p, r, h, c, rot, seg = 16, mat = M }: { p: V3; r: number; h: number; c: string; rot?: V3; seg?: number; mat?: object }) {
  return <mesh position={p} rotation={rot} castShadow><cylinderGeometry args={[r, r, h, seg]} /><Mat color={c} {...mat} /></mesh>
}
function Sp({ p, r, c, mat = VINYL }: { p: V3; r: number; c: string; mat?: object }) {
  return <mesh position={p} castShadow><sphereGeometry args={[r, 16, 14]} /><Mat color={c} {...mat} /></mesh>
}
function Co({ p, r, h, c, rot, seg = 16 }: { p: V3; r: number; h: number; c: string; rot?: V3; seg?: number }) {
  return <mesh position={p} rotation={rot} castShadow><coneGeometry args={[r, h, seg]} /><Mat color={c} {...M} /></mesh>
}
/** Une surface qui s'allume · écran, néon, braise. */
function Glow({ p, s, c, rot, i = 1 }: { p: V3; s: V3; c: string; rot?: V3; i?: number }) {
  return (
    <mesh position={p} rotation={rot}>
      <boxGeometry args={s} />
      <Mat color={c} emissive={c} emissiveIntensity={i} roughness={0.4} />
    </mesh>
  )
}

// Un hasard REPRODUCTIBLE. Un Math.random() dans le rendu redistribue les
// livres de la bibliothèque à chaque image : le mur se met à clignoter.
function rng(seed: number) {
  let s = seed >>> 0
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296 }
}


/** Un trépied qui TIENT. Les pieds étaient inclinés en appliquant un cosinus
 *  aux rotations X et Z, ce qui ne les fait pas s'écarter autour d'un cercle :
 *  ils partaient de travers et laissaient la colonne flotter au-dessus du
 *  vide. Chaque pied est maintenant orienté par une rotation Y (la direction)
 *  puis incliné par une rotation Z (l'écartement), dans cet ordre. */
function Tripod({ h = 1.5, spread = 0.42, c = '#2b2f3d' }: { h?: number; spread?: number; c?: string }) {
  const tilt = Math.atan2(spread, h)
  const len = Math.hypot(spread, h)
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <group key={i} rotation={[0, (i / 3) * Math.PI * 2 + 0.5, 0]}>
          <Cy p={[Math.sin(tilt) * len / 2, Math.cos(tilt) * len / 2, 0]} r={0.035} h={len} c={c} rot={[0, 0, -tilt]} />
          <Sp p={[spread, 0.03, 0]} r={0.05} c={c} />
        </group>
      ))}
      <Cy p={[0, h * 0.55, 0]} r={0.05} h={h * 1.1} c={c} />
    </group>
  )
}

// ============================================================================
// ÉCRIRE · livre, newsletter, cours, contenu
// ============================================================================

/** Une bibliothèque · le meuble signature d'un dojo « écrire un livre ». Les
 *  tranches sont posées une par une, hauteurs et couleurs tirées d'une graine
 *  fixe, avec quelques livres couchés en travers comme sur une vraie étagère. */
export function Bookcase({ seed = 1, w = 2.6, shelves = 4 }: { seed?: number; w?: number; shelves?: number }) {
  const spines = useMemo(() => {
    const r = rng(seed * 977 + 13)
    const pal = ['#c0453a', '#2f6da8', '#d9a02e', '#2f7d5a', '#7a4ac0', '#b8562f', '#3a4a66', '#c96a9a']
    const rows: { x: number; w: number; h: number; c: string; lean: number }[][] = []
    for (let s = 0; s < shelves; s++) {
      const row: { x: number; w: number; h: number; c: string; lean: number }[] = []
      let x = -w / 2 + 0.12
      while (x < w / 2 - 0.2) {
        const bw = 0.07 + r() * 0.08
        row.push({ x: x + bw / 2, w: bw, h: 0.42 + r() * 0.18, c: pal[Math.floor(r() * pal.length)], lean: r() < 0.12 ? (r() - 0.5) * 0.5 : 0 })
        x += bw + 0.012
      }
      rows.push(row)
    }
    return rows
  }, [seed, w, shelves])
  const gap = 0.72
  const h = shelves * gap + 0.34
  return (
    <group>
      {/* caisson */}
      <B p={[0, h / 2, -0.16]} s={[w + 0.16, h, 0.06]} c="#6b4a2b" />
      <B p={[-(w + 0.1) / 2, h / 2, 0]} s={[0.08, h, 0.34]} c="#7a5330" />
      <B p={[(w + 0.1) / 2, h / 2, 0]} s={[0.08, h, 0.34]} c="#7a5330" />
      <B p={[0, h - 0.04, 0]} s={[w + 0.24, 0.1, 0.4]} c="#7a5330" />
      <B p={[0, 0.06, 0]} s={[w + 0.24, 0.12, 0.4]} c="#7a5330" />
      {spines.map((row, s) => (
        <group key={s} position={[0, 0.18 + s * gap, 0]}>
          <B p={[0, -0.03, 0]} s={[w + 0.02, 0.06, 0.34]} c="#8a6238" />
          {row.map((b, i) => (
            <B key={i} p={[b.x, b.h / 2 + 0.02, 0]} s={[b.w, b.h, 0.26]} c={b.c} rot={[0, 0, b.lean]} />
          ))}
        </group>
      ))}
    </group>
  )
}

/** Bureau d'écriture · machine à écrire, pile de manuscrit, lampe allumée. */
export function WritingDesk() {
  return (
    <group>
      <B p={[0, 0.74, 0]} s={[2.0, 0.1, 0.9]} c="#8a5f36" />
      {[[-0.88, -0.34], [0.88, -0.34], [-0.88, 0.34], [0.88, 0.34]].map(([x, z], i) => (
        <B key={i} p={[x, 0.37, z]} s={[0.1, 0.74, 0.1]} c="#6b4a2b" />
      ))}
      {/* machine à écrire */}
      <B p={[-0.3, 0.86, 0]} s={[0.66, 0.14, 0.5]} c="#2b2f3d" />
      <B p={[-0.3, 1.02, -0.16]} s={[0.56, 0.2, 0.1]} c="#3a4050" rot={[-0.3, 0, 0]} />
      <B p={[-0.3, 1.14, -0.1]} s={[0.4, 0.28, 0.02]} c="#f6f1e2" rot={[-0.12, 0, 0]} />
      {/* pile de manuscrit */}
      {[0, 1, 2, 3, 4].map((i) => (
        <B key={i} p={[0.68, 0.81 + i * 0.035, 0.05]} s={[0.46, 0.035, 0.6]} c="#f6f1e2" rot={[0, (i - 2) * 0.05, 0]} />
      ))}
      {/* lampe de bureau allumée */}
      <Cy p={[0.82, 0.82, -0.3]} r={0.14} h={0.05} c="#2f7d5a" />
      <Cy p={[0.82, 1.08, -0.3]} r={0.025} h={0.5} c="#2f7d5a" />
      <Co p={[0.7, 1.32, -0.24]} r={0.18} h={0.22} c="#2f7d5a" rot={[0.5, 0, 0.3]} />
      <Sp p={[0.7, 1.24, -0.2]} r={0.07} c="#fff0b8" mat={{ emissive: '#ffd98a', emissiveIntensity: 1.4, roughness: 0.5 }} />
      <pointLight position={[0.7, 1.16, -0.1]} color="#ffd98a" intensity={1.6} distance={4} />
    </group>
  )
}

/** Coin lecture · fauteuil, tapis, lampadaire, pile de livres au sol. */
export function ReadingNook() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
        <circleGeometry args={[1.5, 32]} />
        <Mat color="#9c5f52" roughness={1} />
      </mesh>
      {/* fauteuil */}
      <B p={[0, 0.34, 0]} s={[1.1, 0.34, 1.0]} c="#3f6da8" />
      <B p={[0, 0.82, -0.44]} s={[1.1, 0.96, 0.22]} c="#3f6da8" />
      <B p={[-0.56, 0.62, 0]} s={[0.16, 0.34, 1.0]} c="#35608f" />
      <B p={[0.56, 0.62, 0]} s={[0.16, 0.34, 1.0]} c="#35608f" />
      <Sp p={[0, 0.58, -0.22]} r={0.22} c="#ffd0b0" />
      {/* lampadaire */}
      <Cy p={[1.0, 0.04, -0.5]} r={0.2} h={0.08} c="#4a4a4a" />
      <Cy p={[1.0, 0.9, -0.5]} r={0.03} h={1.7} c="#4a4a4a" />
      <Co p={[1.0, 1.86, -0.5]} r={0.26} h={0.32} c="#f3e2b8" rot={[Math.PI, 0, 0]} />
      <pointLight position={[1.0, 1.66, -0.5]} color="#ffdfa0" intensity={2.2} distance={6} />
      {/* pile de livres au sol */}
      {['#c0453a', '#2f7d5a', '#d9a02e'].map((c, i) => (
        <B key={c} p={[-0.95, 0.06 + i * 0.1, 0.5]} s={[0.4, 0.1, 0.52]} c={c} rot={[0, i * 0.2, 0]} />
      ))}
    </group>
  )
}

/** Presse et papier · piles de tirages, bacs à courrier, enveloppes. */
export function PressStack() {
  return (
    <group>
      <B p={[0, 0.3, 0]} s={[1.5, 0.6, 0.9]} c="#8a5f36" />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <B key={i} p={[-0.3 + (i % 2) * 0.02, 0.63 + i * 0.05, 0]} s={[0.7, 0.05, 0.62]} c={i % 2 ? '#f6f1e2' : '#efe7d2'} rot={[0, (i - 4) * 0.03, 0]} />
      ))}
      {/* bacs à courrier empilés */}
      {[0, 1, 2].map((i) => (
        <group key={i} position={[0.62, 0.62 + i * 0.22, 0]}>
          <B p={[0, 0, 0]} s={[0.62, 0.04, 0.5]} c="#4a5262" />
          <B p={[0, 0.09, -0.23]} s={[0.62, 0.18, 0.04]} c="#4a5262" />
          <B p={[0, 0.06, 0]} s={[0.5, 0.06, 0.4]} c="#f6f1e2" />
        </group>
      ))}
    </group>
  )
}

/** Tableau noir et pupitre · le cours. */
export function Lectern() {
  return (
    <group>
      {/* tableau */}
      <B p={[0, 1.7, -0.3]} s={[3.4, 2.0, 0.12]} c="#26402f" />
      <B p={[0, 0.66, -0.24]} s={[3.6, 0.12, 0.24]} c="#7a5330" />
      <B p={[0, 2.76, -0.24]} s={[3.6, 0.12, 0.24]} c="#7a5330" />
      {/* traits de craie */}
      {[[-1.0, 2.1, 1.4], [-1.0, 1.85, 1.0], [0.5, 1.6, 0.9], [-0.6, 1.35, 1.8]].map(([x, y, w], i) => (
        <B key={i} p={[x, y, -0.23]} s={[w, 0.05, 0.02]} c="#dfe8e2" />
      ))}
      {/* craies */}
      {[-0.3, -0.1, 0.1].map((x, i) => <Cy key={x} p={[x, 0.74, -0.18]} r={0.03} h={0.16} c={['#fff', '#ffd98a', '#a8e0ff'][i]} rot={[0, 0, Math.PI / 2]} />)}
      {/* pupitre */}
      <B p={[1.7, 0.56, 0.9]} s={[0.7, 1.12, 0.5]} c="#8a5f36" />
      <B p={[1.7, 1.16, 0.86]} s={[0.84, 0.08, 0.6]} c="#6b4a2b" rot={[-0.24, 0, 0]} />
      <B p={[1.7, 1.22, 0.84]} s={[0.5, 0.03, 0.4]} c="#f6f1e2" rot={[-0.24, 0, 0]} />
    </group>
  )
}

// ============================================================================
// DIFFUSER · réseaux sociaux, podcast, vidéo, marque personnelle
// ============================================================================

/** Anneau lumineux sur trépied · le studio de création de contenu. */
export function RingLight() {
  return (
    <group>
      <Tripod h={1.5} spread={0.42} />
      {/* la colonne monte jusqu'à l'anneau · il y avait 26 cm de vide entre
          les deux, et l'anneau semblait posé sur rien */}
      <Cy p={[0, 1.62, 0]} r={0.04} h={0.9} c="#2b2f3d" />
      <Cy p={[0, 2.02, 0]} r={0.05} h={0.14} c="#3a4050" rot={[Math.PI / 2, 0, 0]} />
      <mesh position={[0, 2.02, 0.06]} rotation={[Math.PI / 2, 0, 0]} castShadow>
        <torusGeometry args={[0.58, 0.085, 12, 32]} />
        <Mat color="#f6f7fb" emissive="#ffffff" emissiveIntensity={1.4} roughness={0.5} />
      </mesh>
      <pointLight position={[0, 2.02, 0.5]} color="#ffffff" intensity={2.6} distance={7} />
      {/* téléphone tenu au centre de l'anneau */}
      <B p={[0, 2.02, 0.06]} s={[0.3, 0.6, 0.05]} c="#1c1f28" />
      <Glow p={[0, 2.02, 0.1]} s={[0.25, 0.53, 0.01]} c="#7ad7ff" i={0.7} />
    </group>
  )
}

/** Micro sur perche, bonnette et filtre anti-pop · le podcast. */
export function MicBoom() {
  return (
    <group>
      <Cy p={[0, 0.03, 0]} r={0.3} h={0.06} c="#2b2f3d" />
      <Cy p={[0, 0.7, 0]} r={0.05} h={1.3} c="#3a4050" />
      <Cy p={[0.4, 1.34, 0]} r={0.035} h={0.9} c="#3a4050" rot={[0, 0, Math.PI / 2 - 0.25]} />
      <group position={[0.82, 1.2, 0]}>
        <Cy p={[0, 0, 0]} r={0.09} h={0.34} c="#22262f" mat={PAINTED_METAL} />
        <Sp p={[0, 0.2, 0]} r={0.12} c="#4a5262" mat={PAINTED_METAL} />
        {/* filtre anti-pop */}
        <mesh position={[0, 0.06, 0.28]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.2, 0.025, 10, 24]} />
          <Mat color="#2b2f3d" {...M} />
        </mesh>
      </group>
      {/* casque posé sur le pied */}
      <mesh position={[0, 0.46, 0.16]} rotation={[0.5, 0, 0]} castShadow>
        <torusGeometry args={[0.22, 0.045, 10, 24, Math.PI]} />
        <Mat color="#e0454f" {...VINYL} />
      </mesh>
    </group>
  )
}

/** Panneau « à l'antenne » et mousse acoustique · le mur du studio. */
export function StudioWall({ accent = '#ff3b6b' }: { accent?: string }) {
  const tiles = useMemo(() => {
    const r = rng(7)
    return Array.from({ length: 18 }, (_, i) => ({
      x: -1.7 + (i % 6) * 0.68,
      y: 1.2 + Math.floor(i / 6) * 0.68,
      rot: Math.floor(r() * 4) * (Math.PI / 2),
    }))
  }, [])
  return (
    <group>
      {/* Le panneau POSE au sol. Il n'était qu'une grille de mousse flottant
          à 1,5 m : dans une pièce fermée on ne le voit pas, mais les mondes
          ouverts n'ont pas de mur derrière pour le porter. */}
      <B p={[0, 1.6, -0.1]} s={[4.3, 3.0, 0.12]} c="#23262e" />
      <B p={[0, 0.06, 0]} s={[4.4, 0.12, 0.7]} c="#2f333d" />
      {[-2.0, 2.0].map((x) => <B key={x} p={[x, 1.6, -0.02]} s={[0.16, 3.0, 0.3]} c="#2f333d" />)}
      {tiles.map((t, i) => (
        <group key={i} position={[t.x, t.y, 0]} rotation={[0, 0, t.rot]}>
          <B p={[0, 0, 0]} s={[0.6, 0.6, 0.1]} c="#2f333d" />
          <B p={[0.08, 0.08, 0.06]} s={[0.34, 0.34, 0.06]} c="#3c414d" />
        </group>
      ))}
      <group position={[0, 2.86, 0.06]}>
        <B p={[0, 0, 0]} s={[1.5, 0.44, 0.12]} c="#1c1f28" />
        <Glow p={[0, 0, 0.08]} s={[1.28, 0.26, 0.02]} c={accent} i={1.8} />
      </group>
    </group>
  )
}

/** Caméra sur trépied, claquette et boîte à lumière · la production vidéo. */
export function FilmRig() {
  return (
    <group>
      {/* trépied + caméra */}
      <Tripod h={1.2} spread={0.38} c="#22262f" />
      <B p={[0, 1.34, 0]} s={[0.66, 0.4, 0.5]} c="#2b2f3d" />
      <Cy p={[0, 1.34, 0.34]} r={0.17} h={0.3} c="#1c1f28" rot={[Math.PI / 2, 0, 0]} mat={PAINTED_METAL} />
      <Cy p={[0, 1.34, 0.5]} r={0.13} h={0.05} c="#6fd3ff" rot={[Math.PI / 2, 0, 0]} />
      <B p={[-0.44, 1.4, 0]} s={[0.26, 0.2, 0.02]} c="#6fd3ff" />
      {/* claquette posée au sol */}
      <group position={[1.0, 0.05, 0.5]} rotation={[0, -0.6, 0]}>
        <B p={[0, 0, 0]} s={[0.7, 0.06, 0.5]} c="#1c1f28" />
        <B p={[0, 0.1, -0.2]} s={[0.7, 0.07, 0.12]} c="#f2f2f2" rot={[0, 0, 0.12]} />
        {[-0.24, 0, 0.24].map((x) => <B key={x} p={[x, 0.11, -0.2]} s={[0.12, 0.08, 0.13]} c="#1c1f28" rot={[0, 0, 0.12]} />)}
      </group>
      {/* boîte à lumière */}
      <group position={[-1.5, 0, 0.2]}>
        <Tripod h={1.7} spread={0.4} c="#22262f" />
        <B p={[0, 1.9, 0]} s={[0.9, 0.9, 0.16]} c="#3a4050" rot={[0, 0.5, 0]} />
        <Glow p={[0.07, 1.9, 0.04]} s={[0.8, 0.8, 0.02]} c="#fff6e0" rot={[0, 0.5, 0]} i={1.4} />
        <pointLight position={[0.4, 1.9, 0.3]} color="#fff0d0" intensity={2.4} distance={8} />
      </group>
    </group>
  )
}

// ============================================================================
// CONSTRUIRE · application, SaaS, opérations
// ============================================================================

/** Baie de serveurs · voyants qui ne clignotent pas au hasard à chaque image. */
export function ServerRack({ seed = 3 }: { seed?: number }) {
  const leds = useMemo(() => {
    const r = rng(seed * 31 + 7)
    return Array.from({ length: 14 }, (_, i) => ({
      y: 0.34 + i * 0.19,
      on: Array.from({ length: 5 }, () => r() > 0.45),
      hue: r(),
    }))
  }, [seed])
  return (
    <group>
      <B p={[0, 1.5, 0]} s={[1.3, 3.0, 0.9]} c="#23262e" />
      <B p={[0, 1.5, 0.46]} s={[1.18, 2.86, 0.03]} c="#14161d" />
      {leds.map((row, i) => (
        <group key={i} position={[0, row.y, 0.48]}>
          <B p={[0, 0, 0]} s={[1.1, 0.14, 0.03]} c="#2e323c" />
          {row.on.map((on, k) => on && (
            <Glow key={k} p={[-0.42 + k * 0.21, 0, 0.03]} s={[0.05, 0.05, 0.01]} c={row.hue > 0.6 ? '#ffb43a' : row.hue > 0.3 ? '#3ce08a' : '#4fc3f7'} i={1.6} />
          ))}
        </group>
      ))}
      <B p={[0, 3.04, 0]} s={[1.36, 0.1, 0.96]} c="#2e323c" />
    </group>
  )
}

/** Mur d'écrans · tableaux de bord, graphes, une console qui défile. */
export function MonitorWall({ accent = '#4fc3f7' }: { accent?: string }) {
  const bars = useMemo(() => { const r = rng(19); return Array.from({ length: 9 }, () => 0.15 + r() * 0.5) }, [])
  return (
    <group>
      <Cy p={[0, 0.06, 0]} r={0.52} h={0.12} c="#2b2f3d" />
      <Cy p={[0, 0.16, 0]} r={0.3} h={0.1} c="#3a4050" />
      <Cy p={[0, 1.1, 0]} r={0.07} h={1.9} c="#2b2f3d" />
      <B p={[0, 1.2, 0]} s={[1.0, 0.1, 0.1]} c="#2b2f3d" />
      {[[-1.12, 2.0], [0, 2.0], [1.12, 2.0], [-0.56, 1.14], [0.56, 1.14]].map(([x, y], i) => (
        <group key={i} position={[x, y, 0.08]}>
          <B p={[0, 0, 0]} s={[1.04, 0.72, 0.07]} c="#1c1f28" />
          <Glow p={[0, 0, 0.05]} s={[0.94, 0.62, 0.01]} c={i % 2 ? '#101a2a' : '#0e1d19'} i={0.35} />
          {i === 1
            ? bars.map((h, k) => <Glow key={k} p={[-0.38 + k * 0.095, -0.24 + h / 2, 0.06]} s={[0.06, h, 0.01]} c={accent} i={1.1} />)
            : Array.from({ length: 6 }, (_, k) => (
              <Glow key={k} p={[-0.2 + (k % 2) * 0.16, 0.2 - k * 0.08, 0.06]} s={[0.4 - (k % 3) * 0.1, 0.03, 0.01]} c={k % 3 ? '#3ce08a' : accent} i={0.9} />
            ))}
        </group>
      ))}
    </group>
  )
}

/** Tableau de flux · post-its, flèches, une boucle qu'on lit de loin. */
export function FlowBoard({ accent = '#7c5cff' }: { accent?: string }) {
  const notes = useMemo(() => {
    const r = rng(43)
    const pal = ['#ffd23f', '#ff8fc0', '#7ad7ff', '#a0e85b', '#ffb454']
    return Array.from({ length: 11 }, (_, i) => ({
      x: -1.35 + (i % 4) * 0.9 + (r() - 0.5) * 0.12,
      y: 2.3 - Math.floor(i / 4) * 0.64 + (r() - 0.5) * 0.1,
      rot: (r() - 0.5) * 0.3,
      c: pal[Math.floor(r() * pal.length)],
    }))
  }, [])
  return (
    <group>
      <B p={[0, 1.7, 0]} s={[3.6, 2.3, 0.1]} c="#f4f6fa" />
      <B p={[0, 1.7, -0.06]} s={[3.76, 2.46, 0.06]} c="#9aa4ab" />
      {notes.map((n, i) => (
        <B key={i} p={[n.x, n.y, 0.07]} s={[0.42, 0.42, 0.02]} c={n.c} rot={[0, 0, n.rot]} />
      ))}
      {[0, 1, 2].map((i) => (
        <B key={'a' + i} p={[-0.9 + i * 0.9, 1.0, 0.07]} s={[0.6, 0.05, 0.02]} c={accent} />
      ))}
      <Cy p={[0, 0.5, 0.2]} r={0.05} h={1.0} c="#9aa4ab" rot={[0.2, 0, 0]} />
    </group>
  )
}

/** Convoyeur et caisses · les opérations, une chaîne qui avance. */
export function Conveyor() {
  return (
    <group>
      <B p={[0, 0.7, 0]} s={[3.4, 0.12, 0.9]} c="#3a4050" mat={PAINTED_METAL} />
      {Array.from({ length: 9 }, (_, i) => (
        <Cy key={i} p={[-1.5 + i * 0.38, 0.78, 0]} r={0.08} h={0.86} c="#6b7280" rot={[Math.PI / 2, 0, 0]} mat={PAINTED_METAL} />
      ))}
      {[-1.5, 0, 1.5].map((x) => (
        <group key={x}>
          <B p={[x, 0.32, -0.36]} s={[0.12, 0.64, 0.12]} c="#4a5262" />
          <B p={[x, 0.32, 0.36]} s={[0.12, 0.64, 0.12]} c="#4a5262" />
        </group>
      ))}
      {[[-1.1, '#c68a4a'], [0.2, '#b8783a'], [1.3, '#c68a4a']].map(([x, c], i) => (
        <group key={i} position={[x as number, 1.0, 0]}>
          <B p={[0, 0, 0]} s={[0.56, 0.44, 0.56]} c={c as string} />
          <B p={[0, 0.23, 0]} s={[0.58, 0.04, 0.58]} c="#8a5f36" />
          <B p={[0, 0.25, 0]} s={[0.12, 0.02, 0.5]} c="#efe7d2" />
        </group>
      ))}
    </group>
  )
}

// ============================================================================
// VENDRE · boutique, e-commerce, ventes, partenariats
// ============================================================================

/** Rayonnage de boutique · cartons, boîtes et un peu de désordre honnête. */
export function ShopShelf({ seed = 5 }: { seed?: number }) {
  const goods = useMemo(() => {
    const r = rng(seed * 61 + 5)
    const pal = ['#ff8fc0', '#7ad7ff', '#ffd23f', '#a0e85b', '#ff9a52', '#c9a0ff']
    return [0, 1, 2].map((s) => Array.from({ length: 5 }, (_, i) => ({
      x: -1.0 + i * 0.5,
      w: 0.3 + r() * 0.12,
      h: 0.3 + r() * 0.18,
      c: pal[Math.floor(r() * pal.length)],
      s,
    }))).flat()
  }, [seed])
  return (
    <group>
      {[0, 1, 2, 3].map((i) => <B key={i} p={[0, 0.1 + i * 0.75, 0]} s={[2.6, 0.08, 0.7]} c="#b9c0c8" mat={PAINTED_METAL} />)}
      <B p={[-1.3, 1.2, 0]} s={[0.08, 2.4, 0.66]} c="#9aa4ab" mat={PAINTED_METAL} />
      <B p={[1.3, 1.2, 0]} s={[0.08, 2.4, 0.66]} c="#9aa4ab" mat={PAINTED_METAL} />
      <B p={[0, 1.2, -0.34]} s={[2.6, 2.4, 0.04]} c="#dfe4ea" />
      {goods.map((g, i) => (
        <B key={i} p={[g.x, 0.14 + g.s * 0.75 + g.h / 2, 0]} s={[g.w, g.h, 0.34]} c={g.c} />
      ))}
    </group>
  )
}

/** Portant, cintres et vêtements · la boutique qu'on regarde, pas le stock. */
export function ClothingRack() {
  const pal = ['#e0454f', '#3f6da8', '#2f7d5a', '#d9a02e', '#7a4ac0', '#ff8fc0']
  return (
    <group>
      <Cy p={[-0.9, 0.04, 0]} r={0.26} h={0.08} c="#6b7280" mat={PAINTED_METAL} />
      <Cy p={[0.9, 0.04, 0]} r={0.26} h={0.08} c="#6b7280" mat={PAINTED_METAL} />
      <Cy p={[-0.9, 0.85, 0]} r={0.04} h={1.7} c="#9aa4ab" mat={PAINTED_METAL} />
      <Cy p={[0.9, 0.85, 0]} r={0.04} h={1.7} c="#9aa4ab" mat={PAINTED_METAL} />
      <Cy p={[0, 1.68, 0]} r={0.035} h={1.9} c="#b9c0c8" rot={[0, 0, Math.PI / 2]} mat={PAINTED_METAL} />
      {pal.map((c, i) => (
        <group key={c} position={[-0.72 + i * 0.29, 0, 0]}>
          <mesh position={[0, 1.6, 0]} rotation={[0, 0, Math.PI]} castShadow>
            <torusGeometry args={[0.07, 0.012, 8, 16, Math.PI]} />
            <Mat color="#b9c0c8" {...PAINTED_METAL} />
          </mesh>
          <B p={[0, 1.42, 0]} s={[0.26, 0.14, 0.1]} c={c} />
          <B p={[0, 1.05, 0]} s={[0.34, 0.66, 0.14]} c={c} />
        </group>
      ))}
    </group>
  )
}

/** Comptoir de caisse · terminal, écran allumé, tapis roulant. */
export function Checkout({ accent = '#3ce08a' }: { accent?: string }) {
  return (
    <group>
      <B p={[0, 0.5, 0]} s={[2.2, 1.0, 0.9]} c="#f0f2f6" />
      <B p={[0, 1.02, 0]} s={[2.3, 0.08, 1.0]} c="#c8cfd8" />
      <B p={[0, 0.5, 0.46]} s={[2.24, 0.16, 0.02]} c={accent} />
      {/* caisse + écran */}
      <B p={[-0.55, 1.2, 0]} s={[0.6, 0.3, 0.5]} c="#2b2f3d" />
      <B p={[-0.55, 1.5, -0.1]} s={[0.5, 0.34, 0.05]} c="#1c1f28" rot={[-0.25, 0, 0]} />
      <Glow p={[-0.55, 1.5, -0.06]} s={[0.42, 0.26, 0.01]} c="#7ad7ff" rot={[-0.25, 0, 0]} i={0.8} />
      {/* terminal de paiement */}
      <B p={[0.5, 1.12, 0.2]} s={[0.22, 0.12, 0.3]} c="#3a4050" rot={[-0.3, 0, 0]} />
      {/* sacs prêts */}
      {[0.8, 1.05].map((x, i) => (
        <group key={x} position={[x, 1.2, -0.15]}>
          <B p={[0, 0, 0]} s={[0.3, 0.32, 0.2]} c={i ? '#ffd23f' : '#ff8fc0'} />
          <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.08, 0.015, 8, 16, Math.PI]} />
            <Mat color="#8a5f36" {...M} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

/** Palettes et cartons filmés · l'entrepôt derrière la boutique. */
export function PalletStack({ seed = 9 }: { seed?: number }) {
  const boxes = useMemo(() => {
    const r = rng(seed * 17 + 3)
    return Array.from({ length: 7 }, (_, i) => ({
      x: -0.5 + (i % 3) * 0.5, y: 0.34 + Math.floor(i / 3) * 0.5, z: (r() - 0.5) * 0.2, rot: (r() - 0.5) * 0.3,
      c: r() > 0.5 ? '#c68a4a' : '#b8783a',
    }))
  }, [seed])
  return (
    <group>
      {[-0.3, 0.3].map((z) => <B key={z} p={[0, 0.06, z]} s={[1.8, 0.12, 0.34]} c="#8a5f36" />)}
      <B p={[0, 0.15, 0]} s={[1.8, 0.06, 1.0]} c="#9a6f42" />
      {boxes.map((b, i) => (
        <group key={i} position={[b.x, b.y, b.z]} rotation={[0, b.rot, 0]}>
          <B p={[0, 0, 0]} s={[0.46, 0.46, 0.46]} c={b.c} />
          <B p={[0, 0.02, 0.24]} s={[0.18, 0.1, 0.02]} c="#efe7d2" />
        </group>
      ))}
    </group>
  )
}

// ============================================================================
// CONVAINCRE · levée de fonds, étude, recrutement, support
// ============================================================================

/** Estrade, écran de projection et courbe qui monte · le pitch. */
export function PitchStage({ accent = '#ffb43a' }: { accent?: string }) {
  return (
    <group>
      <B p={[0, 0.12, 0]} s={[4.0, 0.24, 1.8]} c="#3a4050" />
      <B p={[0, 0.26, 0]} s={[3.8, 0.06, 1.6]} c="#8a1f2e" />
      {/* écran */}
      <Cy p={[-1.8, 1.7, -0.7]} r={0.05} h={3.0} c="#9aa4ab" mat={PAINTED_METAL} />
      <Cy p={[1.8, 1.7, -0.7]} r={0.05} h={3.0} c="#9aa4ab" mat={PAINTED_METAL} />
      <B p={[0, 2.1, -0.72]} s={[3.5, 2.0, 0.06]} c="#f6f7fb" />
      {/* la courbe qui monte, en marches */}
      {[0, 1, 2, 3, 4].map((i) => (
        <Glow key={i} p={[-1.3 + i * 0.65, 1.45 + i * 0.22, -0.67]} s={[0.5, 0.12, 0.01]} c={accent} i={1.2} />
      ))}
      <Glow p={[0, 2.9, -0.67]} s={[2.4, 0.08, 0.01]} c="#2b2f3d" i={0.1} />
      {/* pupitre */}
      <B p={[1.3, 0.85, 0.5]} s={[0.66, 1.2, 0.46]} c="#f0f2f6" />
      <B p={[1.3, 1.46, 0.46]} s={[0.8, 0.07, 0.56]} c="#c8cfd8" rot={[-0.2, 0, 0]} />
    </group>
  )
}

/** Trophée sur socle · ce que le dojo vise, posé bien en vue. */
export function Trophy({ c = '#e8c14a' }: { c?: string }) {
  return (
    <group>
      <B p={[0, 0.3, 0]} s={[0.8, 0.6, 0.8]} c="#2b2f3d" />
      <B p={[0, 0.63, 0]} s={[0.9, 0.08, 0.9]} c="#3a4050" />
      <Cy p={[0, 0.76, 0]} r={0.18} h={0.18} c={c} mat={PAINTED_METAL} />
      <Cy p={[0, 0.94, 0]} r={0.05} h={0.22} c={c} mat={PAINTED_METAL} />
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.28, 18, 16, 0, Math.PI * 2, 0, Math.PI / 1.7]} />
        <Mat color={c} {...PAINTED_METAL} side={THREE.DoubleSide} />
      </mesh>
      {[-1, 1].map((s) => (
        <mesh key={s} position={[s * 0.34, 1.18, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <torusGeometry args={[0.12, 0.035, 8, 16, Math.PI]} />
          <Mat color={c} {...PAINTED_METAL} />
        </mesh>
      ))}
    </group>
  )
}

/** Carte à épingles et fils · la cartographie de marché, de partenaires ou
 *  de territoire. */
export function MapBoard({ accent = '#e0454f' }: { accent?: string }) {
  const pins = useMemo(() => {
    const r = rng(83)
    return Array.from({ length: 8 }, () => ({ x: (r() - 0.5) * 2.8, y: 1.2 + r() * 1.5 }))
  }, [])
  return (
    <group>
      <B p={[0, 1.8, -0.05]} s={[3.4, 2.4, 0.08]} c="#c9a56b" />
      <B p={[0, 1.8, -0.1]} s={[3.6, 2.6, 0.06]} c="#7a5330" />
      {/* masses de terre stylisées */}
      {[[-0.8, 2.1, 1.2, 0.7], [0.9, 1.6, 0.9, 0.9], [-0.2, 1.1, 0.7, 0.4]].map(([x, y, w, h], i) => (
        <B key={i} p={[x, y, 0]} s={[w, h, 0.02]} c="#8fae6a" />
      ))}
      {pins.map((p, i) => (
        <group key={i}>
          <Sp p={[p.x, p.y, 0.06]} r={0.06} c={accent} />
          {i > 0 && (
            <B
              p={[(p.x + pins[i - 1].x) / 2, (p.y + pins[i - 1].y) / 2, 0.04]}
              s={[Math.hypot(p.x - pins[i - 1].x, p.y - pins[i - 1].y), 0.015, 0.01]}
              c={accent}
              rot={[0, 0, Math.atan2(p.y - pins[i - 1].y, p.x - pins[i - 1].x)]}
            />
          )}
        </group>
      ))}
    </group>
  )
}

/** Poste d'assistance · casque, file de tickets, voyant de file d'attente. */
export function SupportDesk({ accent = '#06b6d4' }: { accent?: string }) {
  return (
    <group>
      <B p={[0, 0.72, 0]} s={[2.0, 0.1, 0.9]} c="#e8ebf0" />
      <B p={[-0.9, 0.36, 0]} s={[0.12, 0.72, 0.84]} c="#c8cfd8" />
      <B p={[0.9, 0.36, 0]} s={[0.12, 0.72, 0.84]} c="#c8cfd8" />
      {/* écran + tickets */}
      <B p={[-0.4, 1.16, -0.2]} s={[0.9, 0.6, 0.05]} c="#1c1f28" rot={[-0.1, 0, 0]} />
      {Array.from({ length: 5 }, (_, i) => (
        <Glow key={i} p={[-0.4, 1.36 - i * 0.11, -0.17]} s={[0.7 - (i % 2) * 0.2, 0.05, 0.01]} c={i === 0 ? accent : '#3a4a5a'} rot={[-0.1, 0, 0]} i={i === 0 ? 1.3 : 0.4} />
      ))}
      {/* support de casque */}
      <Cy p={[0.7, 0.86, -0.1]} r={0.12} h={0.18} c="#3a4050" />
      <Cy p={[0.7, 1.16, -0.1]} r={0.03} h={0.42} c="#3a4050" />
      <mesh position={[0.7, 1.36, -0.1]} rotation={[0, 0, Math.PI]} castShadow>
        <torusGeometry args={[0.16, 0.04, 10, 20, Math.PI]} />
        <Mat color="#2b2f3d" {...VINYL} />
      </mesh>
      {[-1, 1].map((s) => <Sp key={s} p={[0.7 + s * 0.16, 1.26, -0.1]} r={0.07} c="#3a4050" />)}
      {/* afficheur de file */}
      <group position={[0.2, 1.3, 0.3]}>
        <B p={[0, 0, 0]} s={[0.44, 0.3, 0.06]} c="#1c1f28" />
        <Glow p={[0, 0, 0.04]} s={[0.34, 0.2, 0.01]} c={accent} i={1.4} />
      </group>
    </group>
  )
}

/** Mur de candidatures · fiches, badges, une grille de portraits anonymes. */
export function HiringBoard({ accent = '#14b8a6' }: { accent?: string }) {
  const cells = useMemo(() => {
    const r = rng(101)
    return Array.from({ length: 12 }, (_, i) => ({
      x: -1.3 + (i % 4) * 0.87,
      y: 2.4 - Math.floor(i / 4) * 0.72,
      pick: r() > 0.72,
    }))
  }, [])
  return (
    <group>
      <B p={[0, 1.8, -0.05]} s={[3.5, 2.5, 0.08]} c="#f4f6fa" />
      <B p={[0, 1.8, -0.1]} s={[3.66, 2.66, 0.06]} c="#9aa4ab" />
      {cells.map((c, i) => (
        <group key={i} position={[c.x, c.y, 0.02]}>
          <B p={[0, 0, 0]} s={[0.66, 0.54, 0.03]} c={c.pick ? accent : '#dfe4ea'} />
          <Sp p={[-0.16, 0.08, 0.04]} r={0.09} c={c.pick ? '#ffffff' : '#b9c0c8'} />
          <B p={[0.1, 0.1, 0.04]} s={[0.26, 0.04, 0.01]} c={c.pick ? '#ffffff' : '#9aa4ab'} />
          <B p={[0.08, 0.0, 0.04]} s={[0.22, 0.03, 0.01]} c={c.pick ? '#e6fffb' : '#b9c0c8'} />
        </group>
      ))}
    </group>
  )
}

// ============================================================================
// CRÉER · marque, identité, direction artistique
// ============================================================================

/** Chevalet, toile en cours et pots de peinture · la direction artistique. */
export function Easel({ accent = '#7c5cff' }: { accent?: string }) {
  return (
    <group>
      <Cy p={[-0.5, 0.85, 0.1]} r={0.045} h={1.7} c="#8a5f36" rot={[0, 0, 0.08]} />
      <Cy p={[0.5, 0.85, 0.1]} r={0.045} h={1.7} c="#8a5f36" rot={[0, 0, -0.08]} />
      <Cy p={[0, 0.8, -0.45]} r={0.045} h={1.7} c="#8a5f36" rot={[-0.25, 0, 0]} />
      <B p={[0, 0.9, 0.08]} s={[1.2, 0.08, 0.14]} c="#7a5330" />
      <B p={[0, 1.6, 0.02]} s={[1.5, 1.3, 0.05]} c="#f6f1e2" rot={[-0.06, 0, 0]} />
      {/* la composition en cours */}
      <B p={[-0.3, 1.8, 0.06]} s={[0.6, 0.5, 0.01]} c={accent} rot={[-0.06, 0, 0]} />
      <Sp p={[0.35, 1.5, 0.08]} r={0.24} c="#ffd23f" />
      <B p={[0.1, 1.2, 0.06]} s={[1.0, 0.1, 0.01]} c="#2b2f3d" rot={[-0.06, 0, 0]} />
      {/* pots de peinture */}
      {['#e0454f', '#3ce08a', '#4fc3f7', '#ffd23f'].map((c, i) => (
        <group key={c} position={[-0.9 + i * 0.28, 0.1, 0.55]}>
          <Cy p={[0, 0, 0]} r={0.11} h={0.2} c="#dfe4ea" />
          <Cy p={[0, 0.09, 0]} r={0.095} h={0.04} c={c} />
        </group>
      ))}
      <Cy p={[0.6, 0.16, 0.6]} r={0.02} h={0.44} c="#8a5f36" rot={[0.4, 0, 0.3]} />
    </group>
  )
}

/** Nuancier mural · la palette d'une marque, en grand. */
export function SwatchWall({ accent = '#e0459b' }: { accent?: string }) {
  const chips = useMemo(() => {
    const r = rng(137)
    const pal = ['#e0454f', '#3f6da8', '#2f7d5a', '#d9a02e', '#7a4ac0', '#ff8fc0', '#4fc3f7', '#3ce08a']
    return Array.from({ length: 20 }, (_, i) => ({
      x: -1.6 + (i % 5) * 0.8,
      y: 1.3 + Math.floor(i / 5) * 0.62,
      c: i === 7 ? accent : pal[Math.floor(r() * pal.length)],
      big: i === 7,
    }))
  }, [accent])
  return (
    <group>
      <B p={[0, 2.1, -0.06]} s={[4.2, 2.8, 0.08]} c="#f4f6fa" />
      {chips.map((c, i) => (
        <B key={i} p={[c.x, c.y, 0.02]} s={[c.big ? 0.72 : 0.62, c.big ? 0.56 : 0.48, 0.03]} c={c.c} />
      ))}
    </group>
  )
}

// ============================================================================
// MESURER · étude de marché, croissance, finance
// ============================================================================

/** Totem de graphiques · trois barres en volume et un anneau de part. */
export function ChartTotem({ accent = '#4fc3f7' }: { accent?: string }) {
  const hs = [1.1, 1.8, 1.45, 2.3]
  return (
    <group>
      <Cy p={[0, 0.08, 0]} r={1.0} h={0.16} c="#2b2f3d" />
      {hs.map((h, i) => (
        <group key={i} position={[-0.72 + i * 0.48, 0, 0]}>
          <B p={[0, 0.16 + h / 2, 0]} s={[0.36, h, 0.36]} c={i === hs.length - 1 ? accent : '#5a6272'} mat={i === hs.length - 1 ? { ...VINYL, emissive: accent, emissiveIntensity: 0.25 } : VINYL} />
          <B p={[0, 0.17 + h, 0]} s={[0.4, 0.04, 0.4]} c="#f0f2f6" />
        </group>
      ))}
      <mesh position={[0, 2.9, 0]} rotation={[0, 0, 0]} castShadow>
        <torusGeometry args={[0.44, 0.13, 12, 32, Math.PI * 1.45]} />
        <Mat color={accent} {...VINYL} />
      </mesh>
      <mesh position={[0, 2.9, 0]} rotation={[0, 0, Math.PI * 1.45]} castShadow>
        <torusGeometry args={[0.44, 0.13, 12, 32, Math.PI * 0.55]} />
        <Mat color="#5a6272" {...VINYL} />
      </mesh>
    </group>
  )
}

/** Banc de téléphonie · la prospection, trois postes alignés. */
export function PhoneBank({ accent = '#f59e0b' }: { accent?: string }) {
  return (
    <group>
      {[-1.1, 0, 1.1].map((x, i) => (
        <group key={x} position={[x, 0, 0]}>
          <B p={[0, 0.7, 0]} s={[1.0, 0.08, 0.7]} c="#e8ebf0" />
          <B p={[0, 0.35, -0.3]} s={[0.9, 0.7, 0.06]} c="#c8cfd8" />
          <B p={[0, 0.78, 0.05]} s={[0.36, 0.1, 0.26]} c="#2b2f3d" />
          <mesh position={[0, 0.9, 0.05]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <capsuleGeometry args={[0.05, 0.28, 4, 10]} />
            <Mat color="#3a4050" {...VINYL} />
          </mesh>
          <Glow p={[0, 0.95, -0.28]} s={[0.3, 0.06, 0.02]} c={i === 1 ? accent : '#3a4a5a'} i={i === 1 ? 1.4 : 0.3} />
        </group>
      ))}
    </group>
  )
}

// ============================================================================
// Les kits · quelle spécialité pose quoi, et où.
// ============================================================================

/** Les six emplacements vivent dans le plan de la salle · voir
 *  ./stage.ts. Ils barraient tout le fond, d'un mur à l'autre : le maître y
 *  a désormais son estrade, et la porte s'ouvre dans la même bande. Ils se
 *  replient sur les deux flancs, en arc. */
const SLOTS: { p: V3; r: number }[] = PROP_SLOTS

type Piece = { slot: number; el: (accent: string) => React.ReactNode; scale?: number }

/** La bibliothèque, déclinée · un seul meuble se lit comme un meuble, trois
 *  côte à côte se lisent comme une bibliothèque. */
const BOOK_WALL: Piece[] = [
  { slot: 0, el: () => <Bookcase seed={1} w={2.6} shelves={4} /> },
  { slot: 1, el: () => <Bookcase seed={2} w={2.6} shelves={5} /> },
  { slot: 2, el: () => <Bookcase seed={3} w={2.6} shelves={4} /> },
]

const KITS: Record<string, Piece[]> = {
  // — écrire —
  book: [
    ...BOOK_WALL,
    { slot: 0, el: () => <ReadingNook /> },
    { slot: 4, el: () => <WritingDesk /> },
    { slot: 5, el: () => <Bookcase seed={4} w={2.2} shelves={5} /> },
  ],
  newsletter: [
    { slot: 0, el: () => <PressStack /> },
    { slot: 1, el: () => <Bookcase seed={11} w={2.4} shelves={4} /> },
    { slot: 3, el: (a) => <FlowBoard accent={a} /> },
    { slot: 4, el: () => <WritingDesk /> },
    { slot: 5, el: () => <PressStack /> },
  ],
  content: [
    { slot: 0, el: () => <RingLight /> },
    { slot: 2, el: (a) => <FlowBoard accent={a} /> },
    { slot: 3, el: () => <Bookcase seed={21} w={2.4} shelves={4} /> },
    { slot: 4, el: () => <PressStack /> },
    { slot: 5, el: () => <WritingDesk /> },
  ],
  course: [
    { slot: 2, el: () => <Lectern /> },
    { slot: 0, el: () => <Bookcase seed={31} w={2.4} shelves={4} /> },
    { slot: 4, el: (a) => <MonitorWall accent={a} /> },
    { slot: 5, el: () => <ReadingNook /> },
  ],

  // — diffuser —
  social: [
    { slot: 0, el: () => <RingLight /> },
    { slot: 2, el: (a) => <StudioWall accent={a} /> },
    { slot: 3, el: (a) => <MonitorWall accent={a} /> },
    { slot: 4, el: () => <MicBoom /> },
    { slot: 5, el: () => <RingLight /> },
  ],
  podcast: [
    { slot: 1, el: () => <MicBoom /> },
    { slot: 2, el: (a) => <StudioWall accent={a} /> },
    { slot: 3, el: () => <MicBoom /> },
    { slot: 0, el: () => <RingLight /> },
    { slot: 5, el: (a) => <MonitorWall accent={a} /> },
  ],
  video: [
    { slot: 1, el: () => <FilmRig /> },
    { slot: 3, el: (a) => <StudioWall accent={a} /> },
    { slot: 4, el: () => <FilmRig /> },
    { slot: 0, el: () => <RingLight /> },
  ],
  'personal-brand': [
    { slot: 0, el: () => <RingLight /> },
    { slot: 2, el: (a) => <SwatchWall accent={a} /> },
    { slot: 4, el: () => <MicBoom /> },
    { slot: 5, el: (a) => <ChartTotem accent={a} /> },
  ],

  // — construire —
  app: [
    { slot: 0, el: () => <ServerRack seed={1} /> },
    { slot: 1, el: () => <ServerRack seed={2} /> },
    { slot: 3, el: (a) => <MonitorWall accent={a} /> },
    { slot: 4, el: (a) => <FlowBoard accent={a} /> },
  ],
  saas: [
    { slot: 0, el: () => <ServerRack seed={5} /> },
    { slot: 2, el: (a) => <MonitorWall accent={a} /> },
    { slot: 3, el: (a) => <ChartTotem accent={a} /> },
    { slot: 5, el: (a) => <FlowBoard accent={a} /> },
  ],
  ops: [
    { slot: 1, el: () => <Conveyor /> },
    { slot: 3, el: (a) => <FlowBoard accent={a} /> },
    { slot: 4, el: () => <PalletStack seed={2} /> },
    { slot: 0, el: () => <ServerRack seed={8} /> },
  ],
  startup: [
    { slot: 0, el: () => <ServerRack seed={12} /> },
    { slot: 2, el: (a) => <FlowBoard accent={a} /> },
    { slot: 3, el: (a) => <ChartTotem accent={a} /> },
    { slot: 5, el: (a) => <PitchStage accent={a} /> },
  ],

  // — vendre —
  shop: [
    { slot: 0, el: () => <ShopShelf seed={1} /> },
    { slot: 1, el: () => <ClothingRack /> },
    { slot: 3, el: (a) => <Checkout accent={a} /> },
    { slot: 4, el: () => <ShopShelf seed={2} /> },
    { slot: 5, el: () => <PalletStack seed={1} /> },
  ],
  'ecom-scale': [
    { slot: 0, el: () => <PalletStack seed={4} /> },
    { slot: 1, el: () => <ShopShelf seed={7} /> },
    { slot: 3, el: (a) => <ChartTotem accent={a} /> },
    { slot: 4, el: () => <Conveyor /> },
    { slot: 5, el: (a) => <Checkout accent={a} /> },
  ],
  sales: [
    { slot: 1, el: (a) => <PhoneBank accent={a} /> },
    { slot: 3, el: (a) => <ChartTotem accent={a} /> },
    { slot: 4, el: (a) => <MapBoard accent={a} /> },
    { slot: 0, el: (a) => <Trophy c={a} /> },
  ],
  partnership: [
    { slot: 2, el: (a) => <MapBoard accent={a} /> },
    { slot: 0, el: (a) => <Trophy c={a} /> },
    { slot: 4, el: (a) => <PitchStage accent={a} /> },
  ],
  localbiz: [
    { slot: 1, el: (a) => <MapBoard accent={a} /> },
    { slot: 3, el: (a) => <Checkout accent={a} /> },
    { slot: 4, el: () => <ShopShelf seed={9} /> },
    { slot: 0, el: (a) => <PhoneBank accent={a} /> },
  ],

  // — convaincre —
  pitch: [
    { slot: 2, el: (a) => <PitchStage accent={a} /> },
    { slot: 0, el: (a) => <ChartTotem accent={a} /> },
    { slot: 5, el: (a) => <Trophy c={a} /> },
    { slot: 4, el: (a) => <MonitorWall accent={a} /> },
  ],
  study: [
    { slot: 1, el: (a) => <ChartTotem accent={a} /> },
    { slot: 2, el: (a) => <MapBoard accent={a} /> },
    { slot: 4, el: (a) => <MonitorWall accent={a} /> },
    { slot: 5, el: () => <Bookcase seed={51} w={2.2} shelves={4} /> },
  ],
  hiring: [
    { slot: 2, el: (a) => <HiringBoard accent={a} /> },
    { slot: 0, el: (a) => <PhoneBank accent={a} /> },
    { slot: 4, el: (a) => <FlowBoard accent={a} /> },
    { slot: 5, el: (a) => <Trophy c={a} /> },
  ],
  support: [
    { slot: 1, el: (a) => <SupportDesk accent={a} /> },
    { slot: 3, el: (a) => <SupportDesk accent={a} /> },
    { slot: 4, el: (a) => <MonitorWall accent={a} /> },
    { slot: 0, el: (a) => <FlowBoard accent={a} /> },
  ],

  // — créer —
  brand: [
    { slot: 1, el: (a) => <Easel accent={a} /> },
    { slot: 2, el: (a) => <SwatchWall accent={a} /> },
    { slot: 4, el: (a) => <Easel accent={a} /> },
    { slot: 0, el: () => <Bookcase seed={61} w={2.2} shelves={3} /> },
  ],
  rebrand: [
    { slot: 2, el: (a) => <SwatchWall accent={a} /> },
    { slot: 0, el: (a) => <Easel accent={a} /> },
    { slot: 4, el: (a) => <MapBoard accent={a} /> },
    { slot: 5, el: (a) => <ChartTotem accent={a} /> },
  ],
}

/** Les spécialités dont on sait meubler l'atelier. */
export const THEMED_ARCHETYPES = Object.keys(KITS)

/**
 * Le mobilier de métier d'un dojo.
 *
 * Rend `null` pour une spécialité inconnue — et c'est voulu : un dojo sans
 * kit garde exactement le décor qu'il a toujours eu, plutôt que d'hériter
 * d'un mobilier générique qui ne veut rien dire. Les onze mondes restent
 * intacts dans les deux cas.
 */
export function ThemeProps({ archetype, accent }: { archetype?: string | null; accent: string }) {
  const kit = archetype ? KITS[archetype] : null
  if (!kit) return null
  return (
    <group>
      {kit.map((piece, i) => {
        const s = SLOTS[piece.slot]
        return (
          <group key={i} position={s.p} rotation={[0, s.r, 0]} scale={piece.scale ?? 1}>
            {piece.el(accent)}
          </group>
        )
      })}
    </group>
  )
}
