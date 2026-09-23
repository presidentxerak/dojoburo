// LA COQUILLE DU JEU · un en-tête, un contenu, une barre du bas.
//
// ---------------------------------------------------------------------------
// POURQUOI UNE COQUILLE, ALORS QUE CHAQUE PAGE SE DÉBROUILLAIT
//
// Chaque écran montait son propre en-tête de site, son propre pied de page et
// son propre robot. Six écrans, six fois la même composition, et six endroits
// où elle pouvait diverger · elle l'avait déjà fait, le fil d'Ariane d'une
// cité renvoyant vers la carte du parcours généraliste depuis une formation
// métier. Une coquille supprime la question.
//
// ---------------------------------------------------------------------------
// LA BARRE DU BAS, ET POURQUOI TROIS ONGLETS
//
// Les maquettes en montrent cinq : Dojo, Biblio, Le Clan, Inventaire, Admin.
// Trois de ces cinq ne correspondent à rien chez nous · la bibliothèque a été
// retirée du produit, il n'y a pas de panneau d'administration, et
// l'inventaire est ce que le profil contient déjà. Construire cinq onglets
// dont deux mènent à une page vide serait reprendre la forme des maquettes en
// perdant ce qu'elles font bien, qui est justement de ne montrer que ce qui
// existe.
//
// Restent trois portes, et chacune répond à une question qu'on se pose :
//
//   DOJOS    que puis-je apprendre ?          · les huit formations
//   CLAN     avec qui ?                       · la communauté
//   PROFIL   où j'en suis, et ce que j'ai     · progression, badges, la carte
//
// ---------------------------------------------------------------------------
// L'EXPÉRIENCE EST DANS L'EN-TÊTE, ET ELLE EST VRAIE
//
// Les maquettes affichent « 1250 XP » en haut à droite. Le nombre est ici
// calculé depuis les dojos réellement finis · un compteur décoratif qui ne
// bouge pas quand on travaille est pire qu'un compteur absent, parce qu'il
// apprend à ne plus regarder l'écran.
import { type ReactNode, useEffect, useRef, useState } from 'react'
import { Lnk, usePath } from '../lib/router'
import { useT } from '../i18n'
import { Logo } from '../components/Logo'
import { Wordmark } from '../components/Wordmark'
import { BauhausIcon } from '../components/BauhausIcon'
import type { IconName } from '../data/icons'
import { LangSwitch } from '../components/LangSwitch'
import { useGame } from './progress'

/** Les trois portes · l'ordre est celui de la barre, de gauche à droite.
 *
 *  ---------------------------------------------------------------------------
 *  DEUX DES TROIS SIGNES ONT CHANGÉ, ET LES DEUX POUR LA MÊME RAISON
 *
 *  La barre portait une maison, un anneau et une étoile · trois formes du jeu
 *  Bauhaus, correctes et interchangeables. Correctes, et c'est le problème :
 *  aucune des trois n'était de NOUS. Une maison désigne un accueil dans
 *  n'importe quelle application au monde, une étoile désigne des favoris
 *  partout ailleurs, et un profil n'est pas une liste de favoris.
 *
 *    DOJOS porte la MARQUE · c'est l'accueil, c'est là qu'on revient, et la
 *    marque est précisément le signe qui dit « vous êtes chez vous ». Le logo
 *    a en plus l'avantage d'être déjà connu de qui a vu le site.
 *
 *    PROFIL porte un SOURIRE · c'est une personne. Un visage le dit d'un coup,
 *    à douze pixels, dans toutes les langues, et sans qu'on ait à l'apprendre.
 *
 *  `glyph: null` marque la porte qui porte la marque plutôt qu'une icône. Le
 *  nom du logo n'est pas dans le jeu Bauhaus, et il n'a rien à y faire : une
 *  marque a ses proportions et son histoire, une icône a une grille. */
const TABS: { to: string; key: string; glyph: IconName | null }[] = [
  { to: '/', key: 'nav.dojos', glyph: null },
  { to: '/clan', key: 'nav.clan', glyph: 'ring' },
  { to: '/profil', key: 'nav.profile', glyph: 'smile' },
]

/** L'onglet actif · « / » ne vaut que pour lui même, sinon il resterait
 *  allumé sur toutes les pages, ce qui ne dit plus où l'on est. */
const isOn = (path: string, to: string) =>
  to === '/' ? path === '/' || path.startsWith('/dojo') : path.startsWith(to)

/** LE COUP QUAND UN NOMBRE MONTE · vrai pendant le temps de l'animation, puis
 *  faux. C'est ce qui donne à un compteur le poids d'une récompense : un
 *  chiffre qui change sans bouger se remarque à peine, et on finit par ne plus
 *  le regarder · ce qui est exactement ce qu'on reproche à un compteur
 *  décoratif.
 *
 *  IL NE SAUTE PAS AU PREMIER RENDU. Sans la référence initialisée à la valeur
 *  d'arrivée, chaque changement de page ferait sauter l'expérience alors que
 *  rien n'a été gagné, et le geste perdrait tout son sens.
 *
 *  IL NE SAUTE QUE VERS LE HAUT. L'expérience ne redescend pas dans ce produit,
 *  mais la portée d'une page, elle, peut changer · et fêter une baisse serait
 *  la pire lecture possible du même mouvement.
 *
 *  LA MINUTERIE EST ANNULÉE AU DÉMONTAGE · sinon un changement d'écran pendant
 *  l'animation laisse une écriture d'état sur un composant parti. */
function useBump(value: number): boolean {
  const seen = useRef(value)
  const [on, setOn] = useState(false)
  useEffect(() => {
    if (value <= seen.current) { seen.current = value; return }
    seen.current = value
    setOn(true)
    const id = setTimeout(() => setOn(false), 460)
    return () => clearTimeout(id)
  }, [value])
  return on
}

export function Shell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  const t = useT()
  const path = usePath()
  const g = useGame()
  const bump = useBump(g.xp)

  return (
    <div className="gm">
      <header className="gm-top">
        <Lnk className="gm-brand" href="/">
          <Logo size={30} />
          <span className="gm-brand-wm"><Wordmark /></span>
        </Lnk>
        <div className="gm-top-right">
          {/* L'EXPÉRIENCE · dérivée des dojos finis, jamais écrite. Elle SAUTE
              quand elle monte · voir useBump. */}
          <span className={`gm-xp${bump ? ' gm-bumped' : ''}`} title={t('gm.xpTitle')}>
            <b>{g.xp}</b> <i>XP</i>
          </span>
          <LangSwitch compact />
        </div>
      </header>

      <main className={`gm-main${wide ? ' wide' : ''}`}>{children}</main>

      {/* LA BARRE DU BAS · elle reste au doigt, à hauteur de pouce, et elle ne
          défile pas. C'est la seule navigation du produit sur un téléphone. */}
      <nav className="gm-tabs" aria-label={t('gm.tabs')}>
        {TABS.map((tab) => (
          <Lnk
            key={tab.to}
            href={tab.to}
            className={`gm-tab${isOn(path, tab.to) ? ' on' : ''}`}
            aria-current={isOn(path, tab.to) ? 'page' : undefined}
          >
            {/* LA MARQUE OU L'ICÔNE, jamais les deux · voir TABS. Elles sont
                posées à la même taille de boîte pour que les trois signes
                s'alignent, le logo ayant un dessin plus dense que les
                primitives Bauhaus et paraissant plus gros à taille égale. */}
            <span className="gm-tab-g">
              {tab.glyph === null
                ? <Logo size={20} />
                : <BauhausIcon name={tab.glyph} size={20} />}
            </span>
            <span>{t(tab.key)}</span>
          </Lnk>
        ))}
      </nav>
    </div>
  )
}
