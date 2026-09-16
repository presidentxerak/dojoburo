// LES NOUVELLES · ce que le coursier vient dire au maître.
//
// Le coursier entrait, posait une pile de dossiers PAR TERRE et repartait.
// Il donnait une raison d'être à la porte, et c'est tout : personne ne le
// regardait, personne ne recevait rien, et la pile restait au sol jusqu'au
// tour suivant. Un personnage qui traverse une pièce sans que rien ne change
// derrière lui est un écran de veille.
//
// Maintenant il a un destinataire. Il va jusqu'au maître, salue, annonce la
// nouvelle, la lui remet, et le maître répond. C'est un échange : deux
// personnages qui se parlent, chacun avec sa réplique, et une pile de
// dossiers qui finit SUR l'estrade plutôt que sur le plancher.
//
// Le canal est un module, pas un store : deux composants de la scène 3D,
// deux abonnés, aucune persistance. Un store global pour ça aurait coûté un
// re-render de l'application entière à chaque salut.
import { useSyncExternalStore } from 'react'

export type NewsPhase =
  | 'away'      // il attend derrière la porte
  | 'incoming'  // il traverse la salle
  | 'greeting'  // il salue
  | 'telling'   // il annonce la nouvelle
  | 'leaving'   // il repart

export type News = { phase: NewsPhase; headline: string; reply: string }

/** Ce qu'on vient annoncer · des nouvelles d'une jeune entreprise, sans
 *  emoji et sans exclamation inutile. Elles doivent pouvoir être lues par
 *  le maître comme par l'équipe. */
export const HEADLINES = [
  'Two new sign-ups this morning.',
  'The invoice cleared.',
  'A customer wrote back.',
  'The build is green again.',
  'Three briefs are ready for review.',
  'Traffic doubled overnight.',
  'The partner said yes.',
  'Payroll is filed.',
  'A bug report came in from Osaka.',
  'The deck was approved.',
  'The waiting list passed one hundred.',
  'Legal signed off on the terms.',
]

/** Ce que le maître répond · court, calme, et toujours tourné vers l'action
 *  suivante. Un maître qui commente sans décider ne sert à rien non plus. */
export const REPLIES = [
  'Good. Tell the team.',
  'Noted. Keep the pace.',
  'Then we begin.',
  'Put it on the board.',
  'Well carried. Rest a moment.',
  'We answer today.',
  'That is the way.',
  'Small steps, every day.',
]

let state: News = { phase: 'away', headline: HEADLINES[0], reply: REPLIES[0] }
const subs = new Set<() => void>()

export function setNews(patch: Partial<News>) {
  const next = { ...state, ...patch }
  if (next.phase === state.phase && next.headline === state.headline && next.reply === state.reply) return
  state = next
  subs.forEach((f) => f())
}

/** Tire une nouvelle et la réponse qui va avec · appelé une fois par
 *  tournée, au moment où le coursier se met en route. */
export function drawNews() {
  setNews({
    headline: HEADLINES[Math.floor(Math.random() * HEADLINES.length)],
    reply: REPLIES[Math.floor(Math.random() * REPLIES.length)],
  })
}

const subscribe = (f: () => void) => {
  subs.add(f)
  return () => { subs.delete(f) }
}
const snapshot = () => state

export function useNews(): News {
  return useSyncExternalStore(subscribe, snapshot, snapshot)
}
