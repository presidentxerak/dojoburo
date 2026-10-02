// LE PIED DE PAGE DE L'APP · demandé : « créé un footer ». Posé par le cadre
// (game/Shell) sous chaque page, et par la page promo : les formations,
// la communauté, et les trois pages légales (game/Legal).
import { Lnk } from '../lib/router'
import { useLang } from '../i18n'
import { B, say } from '../data/bilingual'
import { LEGAL_PAGES } from '../data/legal'

const FT = {
  trainings: B('Trainings', 'Formations'),
  map: B('The temple map', 'La carte des temples'),
  free: B('The free AI weekend', 'Le Week-end IA gratuit'),
  prices: B('Pricing', 'Les tarifs'),
  community: B('Community', 'Communauté'),
  profile: B('My progress', 'Ma progression'),
  settings: B('Privacy settings', 'Réglages de confidentialité'),
  legal: B('Legal', 'Informations légales'),
  rights: B('All rights reserved.', 'Tous droits réservés.'),
  tagline: B('Learn to put AI to work, one temple at a time.', "Apprendre à faire travailler l'IA, un temple après l'autre."),
}

const YEAR = new Date().getFullYear()

/** Le pied de page de l'app · trois colonnes qui passent l'une sous l'autre. */
export function GameFooter() {
  const lang = useLang()
  const s = (b: { en: string; fr: string }) => say(b, lang)
  return (
    <footer className="gf" aria-label={s(FT.legal)}>
      <div className="gf-in">
        <div className="gf-brand">
          <b>Dojoburo</b>
          <p>{s(FT.tagline)}</p>
        </div>
        <nav className="gf-col" aria-label={s(FT.trainings)}>
          <span className="gf-h">{s(FT.trainings)}</span>
          <Lnk href="/">{s(FT.map)}</Lnk>
          <Lnk href="/dojo/weekend">{s(FT.free)}</Lnk>
          <Lnk href="/tarifs">{s(FT.prices)}</Lnk>
          <Lnk href="/clan">{s(FT.community)}</Lnk>
          <Lnk href="/profil">{s(FT.profile)}</Lnk>
        </nav>
        <nav className="gf-col" aria-label={s(FT.legal)}>
          <span className="gf-h">{s(FT.legal)}</span>
          <Lnk href={LEGAL_PAGES.mentions.path}>{s(LEGAL_PAGES.mentions.title)}</Lnk>
          <Lnk href={LEGAL_PAGES.privacy.path}>{s(LEGAL_PAGES.privacy.title)}</Lnk>
          <Lnk href={LEGAL_PAGES.terms.path}>{s(LEGAL_PAGES.terms.title)}</Lnk>
          <Lnk href="/profil#parametres">{s(FT.settings)}</Lnk>
        </nav>
      </div>
      <p className="gf-copy">© {YEAR} Dojoburo. {s(FT.rights)}</p>
    </footer>
  )
}

