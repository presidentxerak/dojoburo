import { useState } from 'react'
import { PILLARS } from '../data/positioning'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'
import { useWorkshop } from '../workshop'
import { skinById } from '../data/skins'
import { SkinAvatar } from './workshop/SkinAvatar'
import { useLang, useT } from '../i18n'

// The one site header, shared by the landing page, the Dojo Guide and every
// connector page · identical markup so they always match. Section links point at
// /#<id> so they work from any route (on the landing they just scroll). Pass an
// `enter` handler on the landing for a smooth in-page transition; elsewhere the
// CTA navigates to /#app.

// La navigation suit LES PILIERS, et rien d'autre.
//
// Elle listait Build / Connect / Team / Pricing : les quatre verbes d'un
// produit qui fabrique. Aucun d'eux ne décrit plus ce qu'on fait ici, et un
// en-tête est ce qu'un visiteur lit en premier ; le laisser en arrière aurait
// suffi à contredire toute la page en dessous.
//
// Le nombre n'est écrit NULLE PART. Il était écrit « les quatre piliers » dans
// ce commentaire et dans la page d'accueil, et le jour où un cinquième est
// arrivé les deux mentaient.
//
// Les libellés viennent de ./data/positioning, comme partout ailleurs : le
// jour où un pilier change de nom, il change de nom aux six endroits à la
// fois.
// La navigation porte des PILIERS, plus un lien fixe. Le libellé n'est plus
// figé à la construction du tableau : il dépend de la langue, donc il se
// calcule au rendu · un tableau constant évalué à l'import garderait l'anglais
// pour toujours, quelle que soit la langue choisie ensuite.
const NAV_PILLARS = PILLARS.filter((p) => p.id !== 'dojo')

export function SiteHeader({ enter }: { enter?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = useT()
  const lang = useLang()
  // When signed in we show the profile button + burger instead of Sign in/up.
  const account = useWorkshop((s) => s.account)
  // L'APPEL À L'ACTION EST LE DOJO. Il ouvrait « Créez votre entreprise »,
  // qui est exactement ce qu'on ne propose plus ; un bouton d'en-tête est la
  // promesse la plus visible d'un site, et celle-là était devenue fausse.
  // Il mène maintenant à /build, où le maître accueille et où l'on choisit son
  // agent : c'est la porte d'entrée du centre de formation, pas la leçon un.
  const learn = () => { setMenuOpen(false); window.location.href = '/build' }
  // Sign in / Sign up → le dojo, qui est désormais le bac à sable. Le
  // parcourir reste ouvert à tous ; Privy n'est demandé qu'au moment où l'on
  // enregistre quelque chose.
  const goDojo = () => { setMenuOpen(false); if (enter) enter(); else window.location.href = '/#app' }
  return (
    <>
      <header className="lp-nav">
        <a className="lp-brand" href="/" style={{ textDecoration: 'none' }}>
          <Logo size={38} /> <span className="lp-brand-wm"><Wordmark /> <span className="beta-badge">Beta</span></span>
        </a>
        <nav className="lp-nav-links">
          {NAV_PILLARS.map((p) => (
            <a key={p.id} href={p.path}>{(lang === 'fr' && p.fr?.nav) || p.nav}</a>
          ))}
          <a href="/#pricing">{t('nav.pricing')}</a>
        </nav>
        <div className="lp-nav-right">
          <button
            className={`lp-burger${menuOpen ? ' on' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
          <button className="lp-cta sm lp-cta-create lp-nav-create" onClick={learn}>{t('header.enter')}</button>
          {account ? (
            <button className="lp-profile-btn lp-auth-btn" onClick={goDojo} title={account.name || 'Enter the dojo'}>
              <SkinAvatar skin={skinById(account.avatarSkinId)} size={26} />
              <span>{account.name || 'My dojo'}</span>
            </button>
          ) : (
            <>
              <button className="lp-cta sm lp-cta-ghost lp-auth-btn" onClick={goDojo}>{t('header.signin')}</button>
              <button className="lp-cta sm lp-auth-btn" onClick={goDojo}>{t('header.signup')}</button>
            </>
          )}
        </div>
      </header>

      {menuOpen && (
        <>
          <div className="lp-menu-scrim" onClick={() => setMenuOpen(false)} />
          <nav className="lp-mobile-menu">
            {NAV_PILLARS.map((p) => (
              <a key={p.id} href={p.path} onClick={() => setMenuOpen(false)}>
                {(lang === 'fr' && p.fr?.nav) || p.nav}
              </a>
            ))}
            <a href="/#pricing" onClick={() => setMenuOpen(false)}>{t('nav.pricing')}</a>
            <a href="/guide" onClick={() => setMenuOpen(false)}>{t('nav.guide')}</a>
            <button className="lp-cta" onClick={learn}>{t('header.enter')}</button>
            <div className="lp-menu-auth">
              {account ? (
                <button className="lp-menu-profile" onClick={goDojo}>
                  <SkinAvatar skin={skinById(account.avatarSkinId)} size={30} />
                  <span>{account.name || t('header.mydojo')}<em>{t('header.enterArrow')} →</em></span>
                </button>
              ) : (
                <>
                  <button className="lp-cta lp-cta-ghost" onClick={goDojo}>{t('header.signin')}</button>
                  <button className="lp-cta" onClick={goDojo}>{t('header.signup')}</button>
                </>
              )}
            </div>
          </nav>
        </>
      )}
    </>
  )
}
