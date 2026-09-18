// LE PIED DE PAGE · un seul, pour tout le site.
//
// Il en existait SIX, écrits à la main, un par page. Ils ne disaient pas la
// même chose : cinq d'entre eux ne mentionnaient pas /build, qui est pourtant
// devenu la porte d'entrée du produit ; celui de l'académie ne renvoyait pas à
// la bibliothèque ; et le même cours s'appelait « Academy » ici et « Prompt
// engineering » là. Un visiteur qui descend au bas de deux pages différentes y
// trouvait deux plans du site différents.
//
// C'est exactement le défaut que les piliers existent pour empêcher, et
// l'en-tête le tenait déjà : il lit PILLARS et ne connaît aucun libellé. Le
// pied de page, lui, était resté en dehors, parce qu'un pied de page ne se
// regarde pas et que personne ne clique dedans. C'est précisément pour ça
// qu'il pourrit : rien ne le contredit.
//
// Les seuls liens écrits ici sont ceux qui n'appartiennent à aucun pilier :
// l'accueil, le guide de branchement, et les deux pages légales.
import { PILLARS } from '../data/positioning'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'

/** Les liens hors piliers · ils ne changent pas avec le produit. */
const FIXED: Array<[string, string]> = [
  // « Où faire tourner votre agent » · ce n'est pas un pilier, c'est la
  // dernière marche du premier cours. Elle a sa page parce que comparer
  // quinze projets ne tient pas dans une fiche d'agent.
  ['/frameworks', 'Frameworks'],
  ['/guide', 'App setup guide'],
  ['/teammates', 'The crew'],
  ['/terms', 'Terms'],
  ['/privacy', 'Privacy'],
]

export function SiteFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
      <nav className="lp-foot-links">
        <a href="/">Home</a>
        {/* LES PILIERS, dans leur ordre · y compris la salle d'entraînement,
            dont l'adresse est un fragment vers l'app. Le filtrer aurait été la
            première ligne d'une nouvelle divergence. */}
        {PILLARS.map((p) => <a key={p.id} href={p.path}>{p.nav}</a>)}
        {FIXED.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
    </footer>
  )
}
