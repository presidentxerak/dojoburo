// LE REBOND ET LES PARTICULES · ce qui répond au doigt quand on appuie.
//
// POURQUOI · demandé : « ajoute plus de design d'interaction avec des
// particules et des bump sur les CTA ». Un bouton qui ne bouge pas quand on
// l'enfonce laisse un doute d'une fraction de seconde (« ai-je bien appuyé ? »),
// et c'est ce doute qui fait dire d'une interface qu'elle est molle.
//
// UN SEUL ÉCOUTEUR POUR TOUTE L'APPLICATION · posé une fois sur le document,
// il reconnaît les boutons d'action par leur classe. Aucun composant n'a à s'en
// soucier, et un bouton ajouté demain rebondit sans qu'on y pense.
//
//   · LE REBOND · sur tous les boutons d'action : une classe `jz-bump` le temps
//     d'une animation CSS (voir index.css), retirée à la fin.
//   · LES PARTICULES · sur les boutons PRINCIPAUX seulement (les violets) :
//     une gerbe d'éclats qui part du point touché. Sur chaque bouton, ce serait
//     du bruit ; sur ceux qui font avancer, c'est une récompense.
//   · LA VIBRATION · un souffle (8 ms) sur les téléphones qui la permettent.
//
// CE QUI L'ÉTEINT · le réglage « Effets visuels » du profil, le réglage
// « Réduire les animations », et la préférence du système. Les particules sont
// des éléments du DOM animés par le navigateur (Web Animations), sans canvas
// ni boucle : rien ne tourne quand personne n'appuie.
import { effectsOn, getSettings } from './settings'

/** Les boutons qui rebondissent. */
export const BUMP_SELECTOR = [
  '.gm-cta', '.cc-btn', '.pk-go', '.sim-btn', '.sim-go', '.sim-ico', '.ln-opt',
  '.gm-tab', '.pf-tab', '.lsw-b', '.sb-launch', '.gm-acct', '.st-toggle', '.pf-own',
].join(',')

/** Les boutons principaux · ceux qui lancent aussi une gerbe de particules. */
export const BURST_SELECTOR = ['.gm-cta', '.pk-go', '.sim-go', '.cc-violet'].join(',')

const COLORS = ['#c4b5fd', '#a78bfa', '#8b5cf6', '#f0abfc', '#fde68a', '#ffffff']

let layer: HTMLDivElement | null = null
function getLayer(): HTMLDivElement {
  if (layer && layer.isConnected) return layer
  layer = document.createElement('div')
  layer.className = 'jz-layer'
  layer.setAttribute('aria-hidden', 'true')
  document.body.appendChild(layer)
  return layer
}

/** Une gerbe de particules au point (x, y) de l'écran. */
export function burst(x: number, y: number, count = 14) {
  if (typeof document === 'undefined' || !effectsOn()) return
  const host = getLayer()
  for (let i = 0; i < count; i++) {
    const p = document.createElement('i')
    const star = i % 4 === 0
    p.className = star ? 'jz-p jz-star' : 'jz-p'
    const size = star ? 13 + Math.random() * 7 : 7 + Math.random() * 5
    // CENTRÉE PAR SES MARGES · la transformation ne porte que le trajet, sans
    // calc() : un pourcentage mêlé à des pixels dans une image clé est lu
    // différemment d'un navigateur à l'autre.
    p.style.cssText = `left:${x}px;top:${y}px;width:${size}px;height:${size}px;margin:${-size / 2}px 0 0 ${-size / 2}px;background:${COLORS[i % COLORS.length]}`
    host.appendChild(p)
    const a = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.6
    const d = 38 + Math.random() * 50
    const dx = Math.round(Math.cos(a) * d)
    const dy = Math.round(Math.sin(a) * d - 12)
    const spin = star ? 180 : 0
    const anim = p.animate(
      [
        { transform: 'translate(0px, 0px) scale(0.5) rotate(0deg)', opacity: 1 },
        { transform: `translate(${Math.round(dx * 0.75)}px, ${Math.round(dy * 0.75)}px) scale(1.1) rotate(${spin / 2}deg)`, opacity: 1, offset: 0.55 },
        { transform: `translate(${dx}px, ${dy + 18}px) scale(0.3) rotate(${spin}deg)`, opacity: 0 },
      ],
      { duration: 560 + Math.random() * 260, easing: 'cubic-bezier(.2,.7,.3,1)' },
    )
    anim.onfinish = () => p.remove()
    anim.oncancel = () => p.remove()
  }
}

/** Le rebond d'un élément · relancé à chaque appui, même rapproché. */
export function bump(el: Element) {
  if (!effectsOn()) return
  el.classList.remove('jz-bump')
  // relire la mise en page relance l'animation si la classe était déjà là
  void (el as HTMLElement).offsetWidth
  el.classList.add('jz-bump')
  const done = () => { el.classList.remove('jz-bump'); el.removeEventListener('animationend', done) }
  el.addEventListener('animationend', done)
  setTimeout(done, 600)
}

function onPress(e: PointerEvent) {
  if (e.button !== 0) return
  const target = e.target as Element | null
  const el = target?.closest?.(BUMP_SELECTOR)
  if (!el || (el as HTMLButtonElement).disabled || el.getAttribute('aria-disabled') === 'true') return
  bump(el)
  if (el.matches(BURST_SELECTOR)) burst(e.clientX, e.clientY)
  if (getSettings().haptics && e.pointerType === 'touch' && typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try { navigator.vibrate(8) } catch { /* refusé : rien */ }
  }
}

let installed = false
/** Poser l'écouteur, une fois pour toute l'application. */
export function installJuice() {
  if (installed || typeof document === 'undefined') return
  installed = true
  document.addEventListener('pointerdown', onPress, { passive: true, capture: true })
}
