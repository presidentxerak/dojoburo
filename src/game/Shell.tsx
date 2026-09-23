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
import { type ReactNode } from 'react'
import { Lnk, usePath } from '../lib/router'
import { useT } from '../i18n'
import { Logo } from '../components/Logo'
import { Wordmark } from '../components/Wordmark'
import { BauhausIcon } from '../components/BauhausIcon'
import { LangSwitch } from '../components/LangSwitch'
import { useGame } from './progress'

/** Les trois portes · l'ordre est celui de la barre, de gauche à droite. */
const TABS: { to: string; key: string; glyph: 'house' | 'ring' | 'star' }[] = [
  { to: '/', key: 'nav.dojos', glyph: 'house' },
  { to: '/clan', key: 'nav.clan', glyph: 'ring' },
  { to: '/profil', key: 'nav.profile', glyph: 'star' },
]

/** L'onglet actif · « / » ne vaut que pour lui même, sinon il resterait
 *  allumé sur toutes les pages, ce qui ne dit plus où l'on est. */
const isOn = (path: string, to: string) =>
  to === '/' ? path === '/' || path.startsWith('/dojo') : path.startsWith(to)

export function Shell({ children, wide = false }: { children: ReactNode; wide?: boolean }) {
  const t = useT()
  const path = usePath()
  const g = useGame()

  return (
    <div className="gm">
      <header className="gm-top">
        <Lnk className="gm-brand" href="/">
          <Logo size={30} />
          <span className="gm-brand-wm"><Wordmark /></span>
        </Lnk>
        <div className="gm-top-right">
          {/* L'EXPÉRIENCE · dérivée des dojos finis, jamais écrite. */}
          <span className="gm-xp" title={t('gm.xpTitle')}>
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
            <BauhausIcon name={tab.glyph} size={19} />
            <span>{t(tab.key)}</span>
          </Lnk>
        ))}
      </nav>
    </div>
  )
}
