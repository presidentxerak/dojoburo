// D'OÙ L'ON VIENT · la carte à laquelle une cité appartient.
//
// POURQUOI CE N'EST PAS UN FIL D'ARIANE ÉCRIT DANS CHAQUE ÉCRAN. Il y a trois
// cartes (la semaine gratuite, le parcours, un métier) et deux écrans qui
// affichent un fil (la cité, le dojo). Écrit dans les deux, le lien du haut
// aurait fini par renvoyer quelqu'un qui suit une formation métier vers la
// carte du parcours généraliste, c'est à dire vers une carte où sa cité
// n'apparaît pas. C'est le genre de faute qu'on ne voit jamais soi-même, parce
// qu'on teste toujours le chemin qu'on vient d'écrire.
import type { Module } from '../data/curriculum'
import { TRADE_OF_CITY, tradePath } from '../data/trades'

/** L'adresse de la carte dont cette cité fait partie. */
export function mapOf(m: Module): string {
  if (m.track === 'discovery') return '/7-jours'
  if (m.track === 'trade') {
    const t = TRADE_OF_CITY[m.id]
    return t ? tradePath(t) : '/metier'
  }
  return '/formation'
}

/** La clé de traduction du nom de cette carte · une clé, jamais un libellé :
 *  les libellés sont traduits, les clés non. */
export function mapKey(m: Module): string {
  if (m.track === 'discovery') return 'g.toWeek'
  if (m.track === 'trade') return 'tr.toTrade'
  return 'g.map'
}
