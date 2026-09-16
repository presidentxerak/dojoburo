// LA DÉMARCHE · une seule horloge de pas, partagée par tout le personnage.
//
// Les jambes battaient sur `elapsedTime * 7`, les bras sur `elapsedTime * 6`,
// et le buste ne bougeait pas du tout. Résultat : un personnage qui glisse,
// dont les bras vivent leur vie et dont les pieds patinent dès qu'il ralentit
// — c'est la définition du patinage, et c'est ce qui se voyait.
//
// Ici, celui qui DÉPLACE le personnage (le coursier) tient la cadence : il
// sait sa vitesse, il fait avancer la phase en conséquence, et les jambes,
// les bras et le buste lisent la même valeur. Une jambe qui recule à la
// vitesse du sol ne patine pas, par construction.
//
// C'est un objet MUTABLE passé par contexte, jamais un état : la démarche
// change soixante fois par seconde, et un re-render par image remonterait
// tout l'arbre du personnage pour une rotation d'épaule.
import { createContext, useContext } from 'react'

export type Gait = {
  /** unités par seconde · 0 = à l'arrêt */
  speed: number
  /** la phase du pas, en radians · elle AVANCE, elle ne se recalcule pas */
  phase: number
  /** l'inclinaison du salut · 0 = droit, 1 = plié en deux */
  bow: number
}

export const STILL: Gait = { speed: 0, phase: 0, bow: 0 }

const Ctx = createContext<{ current: Gait }>({ current: STILL })
export const GaitProvider = Ctx.Provider
export const useGait = () => useContext(Ctx)

/** La cadence du pas · une jambe va plus vite quand on marche plus vite, et
 *  pas linéairement : c'est l'amplitude qui grandit d'abord. */
export const strideHz = (speed: number) => 1.5 + Math.min(speed, 3) * 0.72

/** L'amplitude du pas · elle s'ouvre jusqu'à la vitesse de marche normale
 *  puis sature. Sans plafond, un coursier pressé faisait le grand écart. */
export const strideAmp = (speed: number) => Math.min(1, speed / 1.7)

/** Fait avancer la phase d'une image · à appeler par celui qui déplace le
 *  personnage, une seule fois par image. */
export function advance(g: Gait, dt: number) {
  g.phase += strideHz(g.speed) * Math.PI * 2 * Math.min(dt, 0.05)
}
