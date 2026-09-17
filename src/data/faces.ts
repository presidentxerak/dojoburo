// ---------------------------------------------------------------------------
// ASCII facial expressions, rendered directly ON the character's head (two
// compact lines: eyes + mouth). The renderer cycles frames to animate.
// Pure ASCII so it reads on any head material (skin, metal, bone, slime…).
// ---------------------------------------------------------------------------
import type { Mood } from '../store'

export type Frame = string // 2 lines joined by \n

const F = (eyes: string, mouth: string): Frame => `${eyes}\n${mouth}`

export const FACES: Record<Mood, Frame[]> = {
  idle: [F('o o', '\\_/'), F('o o', '\\_/'), F('- -', '\\_/')], // occasional blink
  work: [F('o o', '==='), F('o o', '~~~')],
  happy: [F('^ ^', '\\_/'), F('^ ^', '\\o/')],
  think: [F('o .', ' ? '), F('. o', ' ? ')],
  talk: [F('o o', ' O '), F('o o', ' _ ')],
  love: [F('* *', '\\_/'), F('* *', ' u ')],
  error: [F('x x', ' ~ '), F('X X', ' ~ ')],
  // Endormi · les yeux fermés, et la bouche qui respire. Pas de « z z z » :
  // trois lettres au-dessus d'une tête se lisent comme une bulle de bande
  // dessinée, et la bulle appartient au maître, pas aux dormeurs.
  sleep: [F('- -', ' o '), F('- -', ' . ')],
}

/** Frame cycle speed per mood, in ms. */
export const FACE_SPEED: Record<Mood, number> = {
  idle: 2600,
  work: 240,
  happy: 380,
  think: 620,
  talk: 240,
  love: 400,
  error: 300,
  // très lent · une respiration, pas une animation
  sleep: 2200,
}

// --- le visage PROPRE À CHAQUE ESPÈCE --------------------------------------
//
// Les sept humeurs ci-dessus sont la grammaire commune : elles disent ce que
// le personnage RESSENT, et on n'y touche pas — un coéquipier qui ne peut plus
// montrer qu'il cherche ou qu'il a échoué ne raconte plus rien.
//
// Mais au repos et au travail, c'est-à-dire la quasi-totalité du temps qu'on
// passe à les regarder, les trente-deux espèces affichaient TOUTES `o o` et
// `===`. D'où le reproche, et il était juste : ils se ressemblaient.
//
// La règle est donc simple, et volontairement étroite : une espèce peut
// remplacer ses yeux et sa bouche AU REPOS et AU TRAVAIL. Dès qu'une humeur
// forte arrive — joie, doute, parole, tendresse, échec — la grammaire commune
// reprend la main. On gagne la variété là où elle se voit, sans perdre une
// seule expression.
export type FaceStyle = { eyes: string; mouth: string }

const S = (eyes: string, mouth: string): FaceStyle => ({ eyes, mouth })

export const FACE_BY_KIND: Record<string, FaceStyle> = {
  // museaux · une bouche en « w », le trait de museau le plus lisible en ASCII
  cat: S('^ ^', ' w '),
  poodle: S('o o', ' w '),
  bear: S('o o', ' w '),
  panda: S('o o', ' w '),
  rabbit: S('o o', ' w '),
  // becs · un chevron qui pointe vers l'avant
  duck: S('o o', ' > '),
  chicken: S('o o', ' > '),
  penguin: S('o o', ' > '),
  // machines · des yeux carrés et une bouche de grille
  robot: S('[ ]', '==='),
  cyborg: S('[o]', '==='),
  goldorak: S('[ ]', '==='),
  monitor: S('[ ]', '==='),
  geo: S('[ ]', ' - '),
  knight: S('[ ]', ' - '),
  // crocs · la bouche en « vvv »
  vampire: S('o o', 'vvv'),
  monster: S('O O', 'vvv'),
  godzilla: S('- -', 'vvv'),
  dragon: S('^ ^', 'vvv'),
  // revenants · de grandes orbites vides
  skeleton: S('O O', '==='),
  ghost: S('O O', ' _ '),
  // les yeux immenses
  frog: S('O O', ' _ '),
  alien: S('O O', ' . '),
  octopus: S('O O', ' o '),
  jellyfish: S('O O', ' ~ '),
  slime: S('O O', ' u '),
  mushroom: S('O O', ' u '),
  // le reste
  ninja: S('- -', ' _ '),
  wizard: S('- -', ' ~ '),
  mage: S('- -', ' ~ '),
  madscientist: S('o O', ' ~ '),
  bibendum: S('. .', ' u '),
  human: S('o o', ' _ '),
}

/** Le visage au repos d'une espèce · `null` si elle n'en a pas de propre, et
 *  alors la grammaire commune s'applique telle quelle. */
export function faceStyleOf(kind: string | undefined): FaceStyle | null {
  return (kind && FACE_BY_KIND[kind]) || null
}

/** Les humeurs où le style d'espèce s'applique · partout ailleurs, l'humeur
 *  parle plus fort que l'espèce. */
export const STYLED_MOODS: Mood[] = ['idle', 'work']
