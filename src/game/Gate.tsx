// CE QUI EST FERMÉ · le panneau, et ce qu'il dit.
//
// ---------------------------------------------------------------------------
// CE PANNEAU N'EST PAS UNE SERRURE, ET IL NE PRÉTEND PAS L'ÊTRE
//
// Les cours de ce produit voyagent dans le fichier que le navigateur télécharge
// pour afficher la page. Quelqu'un qui sait les lire les lira, quoi que fasse
// cet écran. Une vraie serrure demanderait de servir les niveaux payants depuis
// le serveur, après vérification du droit · voir api/_lib/entitlements, qui
// tient le droit réel.
//
// Alors à quoi sert ce panneau ? À la même chose qu'une porte dans un magasin :
// il dit où s'arrête ce qui est offert et ce qu'il faut pour continuer. Il est
// honnête parce qu'il dit exactement ça, et qu'il ne fait pas semblant d'être
// un coffre-fort.
//
// IL MONTRE LE PRIX. Un panneau qui dit seulement « réservé aux membres »
// laisse partir quelqu'un qui aurait payé sans lui donner la chance de le
// faire, ce qui est le seul défaut impardonnable d'un écran de ce genre.
import { Lnk } from '../lib/router'
import { useT } from '../i18n'
import { PATH_EUR, TRADE_EUR, priceTag } from '../data/plans'
import type { Module } from '../data/curriculum'

export function Gate({ module }: { module: Module }) {
  const t = useT()

  if (module.track === 'discovery') {
    return (
      <div className="lk">
        <h3>{t('g.lockWeek')}</h3>
        <p>{t('g.lockWeekBody')}</p>
        <Lnk className="lp-cta" href="/7-jours">{t('d.open')} →</Lnk>
      </div>
    )
  }

  const trade = module.track === 'trade'
  return (
    <div className="lk">
      <h3>{trade ? t('tr.lock') : t('g.lockPath')}</h3>
      <p>{trade ? t('tr.lockBody') : t('g.lockPathBody')}</p>
      <p className="lk-price">
        {priceTag(trade ? TRADE_EUR : PATH_EUR)} {t(trade ? 'price.addOn' : 'price.once')}
      </p>
      <Lnk className="lp-cta" href="/#pricing">{t('g.seePrices')} →</Lnk>
    </div>
  )
}
