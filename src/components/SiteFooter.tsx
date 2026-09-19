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
import { LangSwitch } from './LangSwitch'
import { useLang, useT } from '../i18n'

/** Les liens hors piliers · ils ne changent pas avec le produit.
 *
 *  Leur libellé passe par une CLÉ, pas par le texte anglais : le pied de page
 *  est la surface que personne ne relit, donc exactement celle où un libellé
 *  non traduit resterait des mois sans que ça gêne qui que ce soit. */
const FIXED: Array<[string, string]> = [
  // « Où faire tourner votre agent » · ce n'est pas un pilier, c'est la
  // dernière marche du premier cours. Elle a sa page parce que comparer
  // quinze projets ne tient pas dans une fiche d'agent.
  ['/frameworks', 'nav.frameworks'],
  ['/guide', 'nav.guide'],
  ['/teammates', 'nav.crew'],
  ['/terms', 'nav.terms'],
  ['/privacy', 'nav.privacy'],
]

export function SiteFooter() {
  const t = useT()
  const lang = useLang()
  return (
    <footer className="lp-footer">
      <div className="lp-brand"><Logo size={26} /> <Wordmark /></div>
      <nav className="lp-foot-links">
        <a href="/">{t('nav.home')}</a>
        {/* LES PILIERS, dans leur ordre · y compris la salle d'entraînement,
            dont l'adresse est un fragment vers l'app. Le filtrer aurait été la
            première ligne d'une nouvelle divergence. */}
        {PILLARS.map((p) => (
          <a key={p.id} href={p.path}>{(lang === 'fr' && p.fr?.nav) || p.nav}</a>
        ))}
        {FIXED.map(([href, key]) => <a key={href} href={href}>{t(key)}</a>)}
      </nav>
      {/* LE SÉLECTEUR VIT DANS LE PIED DE PAGE, pas dans l'en-tête.
          Un réglage qu'on utilise une fois puis plus jamais ne mérite pas une
          place dans une barre de navigation que l'on regarde à chaque page ;
          le bas de page est l'endroit conventionnel, et c'est là que les gens
          vont le chercher. Il est aussi dans le menu du profil, pour qui est
          déjà dans l'application et ne redescend jamais. */}
      <LangSwitch />
      {/* L'AVERTISSEMENT, et pourquoi il est là.
          Le site se traduit par lots. Entre le premier et le dernier, qui
          choisit le français lit du français autour de cours en anglais. Ne
          rien dire serait le pire choix : la personne croit à un défaut, ne
          sait pas si le reste viendra, et repart. On le dit donc à l'endroit
          exact où le choix se fait.
          Il part le jour où la prose des cours est traduite · le portail
          compte les fichiers à chaque passage et le dira
          (scripts/test-i18n.mjs, bloc couverture). */}
      {lang === 'fr' && <p className="lp-foot-note">{t('i18n.partial')}</p>}
    </footer>
  )
}
