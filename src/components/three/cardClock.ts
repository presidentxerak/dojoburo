// L'HORLOGE PARTAGÉE DES VIGNETTES · une seule boucle pour toutes les salles.
//
// POURQUOI · l'écran Training montre huit salles meublées et animées, chacune
// dans son propre canvas. Chacune tournait en « always », c'est à dire à la
// fréquence de l'écran : huit scènes complètes dessinées soixante fois par
// seconde, toutes dans la même image. Sur un portable ordinaire, la page
// entière (défilement compris) tombait à quelques images par seconde, et c'est
// le « ça lag beaucoup » qu'on nous a remonté.
//
// CE QUI CHANGE · les vignettes passent en « demand » et c'est cette horloge
// qui leur demande une image, à une cadence plafonnée (30 par seconde, 24 sur
// un appareil modeste), ce qui suffit à des personnages qui marchent et
// hochent la tête. Et surtout, elles NE SONT PAS DESSINÉES DANS LA MÊME IMAGE :
// l'horloge n'en réveille qu'une partie à chaque tour, les autres attendent le
// suivant. Le travail est réparti sur le temps au lieu de tomber en bloc, et
// le fil principal garde de quoi faire défiler la page.

import { getSettings, systemReducesMotion } from '../../lib/settings'

type Entry = { wake: () => void; next: number }

const entries = new Set<Entry>()
let raf = 0

/** Un appareil modeste · peu de cœurs, ou un écran tactile (téléphone,
 *  tablette). Lu une fois : ça ne change pas pendant la visite. */
const modest = (() => {
  if (typeof navigator === 'undefined') return false
  const cores = navigator.hardwareConcurrency || 4
  const touch = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches
  return cores <= 4 || touch
})()

/** la cadence d'une vignette, en images par seconde */
export const CARD_FPS = modest ? 24 : 30

function loop(now: number) {
  raf = entries.size ? requestAnimationFrame(loop) : 0
  // MOINS DE MOUVEMENT · le réglage « Réduire les animations » du profil, ou la
  // préférence du système : les salles restent sur leur dernière image (le
  // mode « demand » a dessiné la première au montage), et ne coûtent plus rien.
  if (getSettings().calm || systemReducesMotion()) return
  const due = [...entries].filter((e) => now >= e.next)
  if (!due.length) return
  // LA PART DE CE TOUR · juste assez pour que chacune tienne sa cadence sur
  // une boucle à 60 Hz. Avec huit salles à 30 images, quatre par tour.
  const share = Math.max(1, Math.ceil((entries.size * CARD_FPS) / 60))
  due.sort((a, b) => a.next - b.next)
  for (const e of due.slice(0, share)) {
    e.next = now + 1000 / CARD_FPS
    e.wake()
  }
}

/** Inscrire une vignette · rend de quoi la désinscrire. Les nouvelles venues
 *  sont décalées d'un cran, pour ne pas toutes démarrer dans la même image. */
export function addCard(wake: () => void): () => void {
  const e: Entry = { wake, next: (typeof performance !== 'undefined' ? performance.now() : 0) + entries.size * 7 }
  entries.add(e)
  if (!raf && typeof requestAnimationFrame !== 'undefined') raf = requestAnimationFrame(loop)
  return () => {
    entries.delete(e)
    if (!entries.size && raf) { cancelAnimationFrame(raf); raf = 0 }
  }
}
