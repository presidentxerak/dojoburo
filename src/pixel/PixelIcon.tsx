// LES ICÔNES PIXEL · celles du profil et de la page de présentation.
//
// Elles remplacent les icônes 3D de l'ancien jeu (« Change complètement le
// design [...] en pixel art 2D »). Chaque icône est un petit dessin de 14 sur
// 14, écrit en lettres : une lettre par couleur, un point pour le vide. Le
// contour est ajouté par la grille, comme pour les personnages.
//
// ANIMÉES SELON LEUR THÈME · demandé : « faut que les icônes soient animées en
// fonction de leur thème ». Chacune a son geste, en pas francs comme un sprite
// (index.css, .picon-*) : les barres montent, la médaille se balance, le
// temple saute, la personne salue, l'engrenage tourne.
import { memo } from 'react'
import { Grid, PixelSvg, OUTLINE } from './grid'

export type PixelIconName = 'progress' | 'badges' | 'trainings' | 'account' | 'settings'

const PAL: Record<string, string> = {
  v: '#7c3aed', V: '#a78bfa', y: '#facc15', Y: '#fde68a', o: '#fb923c', r: '#ef4444',
  g: '#22c55e', G: '#86efac', b: '#3b82f6', w: '#fff7e0', s: '#f6c9a3', k: '#2b1d16', n: '#94a3b8', N: '#cbd5e1',
}

const ART: Record<PixelIconName, string[]> = {
  // trois barres qui montent
  progress: [
    '..............',
    '..........gg..',
    '..........gg..',
    '..........gg..',
    '......yy..gg..',
    '......yy..gg..',
    '......yy..gg..',
    '..vv..yy..gg..',
    '..vv..yy..gg..',
    '..vv..yy..gg..',
    '..vv..yy..gg..',
    '..............',
    'wwwwwwwwwwwwww',
    '..............',
  ],
  // une médaille et son ruban
  badges: [
    '...rr....rr...',
    '...rrr..rrr...',
    '....rrr.rr....',
    '.....rrrr.....',
    '.....yyyy.....',
    '...yyYYYYyy...',
    '..yyYyyyyYyy..',
    '..yYyyYYyyYy..',
    '..yYyYyyYyYy..',
    '..yYyyYYyyYy..',
    '..yyYyyyyYyy..',
    '...yyYYYYyy...',
    '.....yyyy.....',
    '..............',
  ],
  // un temple à deux toits
  trainings: [
    '......rr......',
    '....rrrrrr....',
    '..rrrrrrrrrr..',
    '.....wwww.....',
    '.....wkkw.....',
    '...rrrrrrrr...',
    '.rrrrrrrrrrrr.',
    '...wwwwwwww...',
    '...wwkkkkww...',
    '...wwkkkkww...',
    '...wwkkkkww...',
    '.nnnnnnnnnnnn.',
    'NNNNNNNNNNNNNN',
    '..............',
  ],
  // une tête et des épaules
  account: [
    '..............',
    '.....kkkk.....',
    '....kkkkkk....',
    '....ssssss....',
    '....skssks....',
    '....ssssss....',
    '.....ssss.....',
    '..............',
    '...vvvvvvvv...',
    '..vvvvVVvvvv..',
    '..vvvvVVvvvv..',
    '..vvvvVVvvvv..',
    '..vvvvvvvvvv..',
    '..............',
  ],
  // un engrenage
  settings: [
    '..............',
    '.....nnnn.....',
    '..nn.nnnn.nn..',
    '..nnnnnnnnnn..',
    '...nnNNNNnn...',
    '.nnnNN..NNnnn.',
    '.nnnN....Nnnn.',
    '.nnnN....Nnnn.',
    '.nnnNN..NNnnn.',
    '...nnNNNNnn...',
    '..nnnnnnnnnn..',
    '..nn.nnnn.nn..',
    '.....nnnn.....',
    '..............',
  ],
}

const cache = new Map<PixelIconName, Grid>()
function gridOf(name: PixelIconName): Grid {
  const hit = cache.get(name)
  if (hit) return hit
  const rows = ART[name]
  const g = new Grid(16, 16, 1, 1)
  rows.forEach((row, y) => [...row].forEach((c, x) => { if (PAL[c]) g.set(x, y, PAL[c]) }))
  g.outline(OUTLINE)
  cache.set(name, g)
  return g
}

export const PixelIcon = memo(function PixelIcon({ name, size = 32, className }: { name: PixelIconName; size?: number; className?: string }) {
  return <PixelSvg grid={gridOf(name)} scale={size / 16} className={`picon picon-${name}${className ? ` ${className}` : ''}`} />
})
