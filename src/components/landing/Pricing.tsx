import { PLANS, planPrice, type Plan } from '../../data/plans'
import { useLang, useT } from '../../i18n'

// Pricing, from the one place that defines it (data/plans.ts).
//
// This page used to sell credits on a slider, 30 to 2,000 a month at a dollar
// each, while the Billing panel inside the app sold four different metered
// tiers at different rates. Same product, two prices, and both of them priced
// model tokens rather than the software.
//
// Now there are three plans and the middle one is the argument: the files.
// Voir l'en-tête de data/plans pour ce que chacune vend et pourquoi ce n'est
// plus compté à la tâche.

export function Pricing({
  enter,
  goBilling,
  goAssistant,
  connectors,
}: {
  enter: () => void
  goBilling: () => void
  goAssistant: () => void
  connectors: number
}) {
  const cta = (p: Plan) => (p.id === 'free' ? enter : goBilling)
  const t = useT()
  const lang = useLang()
  // LE TEXTE DE LA FORMULE dans la langue lue · l'anglais sert de secours
  // plutôt qu'un vide, comme partout ailleurs : une carte de prix à moitié
  // blanche est pire qu'une carte de prix en anglais.
  const copy = (p: Plan) => (lang === 'fr' && p.fr) || p
  // L'UNITÉ ET LE PLANCHER se construisent ICI et non dans data/plans, parce
  // qu'ils sont faits de mots. planUnit et planFloor rendaient « / seat /
  // month » et « from $75 a month » en dur : deux phrases anglaises sorties
  // d'un fichier de données, invisibles pour la traduction.
  const unit = (p: Plan) => (p.usd === 0 ? t('price.forever') : p.perSeat ? t('price.seatMonth') : t('price.month'))
  const floor = (p: Plan) =>
    p.perSeat && p.minSeats ? `${t('price.from')} $${p.usd * p.minSeats} ${t('price.aMonth')}` : null

  return (
    <>
      <div className="lp-plans plans3">
        {PLANS.map((p) => (
          <div key={p.id} className={`lp-plan${p.featured ? ' feat' : ''}`}>
            {p.featured && <div className="lp-plan-badge">{t('price.popular')}</div>}
            <div className="lp-plan-name">{p.name}</div>
            <div className="lp-plan-price">
              {planPrice(p)}
              <small> {unit(p)}</small>
            </div>
            {/* LE PLANCHER · $15 le siège et $15 tout court ne sont pas la même
                offre. Une carte qui affiche le prix unitaire sans dire combien
                de sièges il faut prendre commet exactement la faute que ce
                fichier existe pour empêcher : un prix qui veut dire deux
                choses. */}
            {floor(p) && <div className="lp-plan-floor">{floor(p)}</div>}
            <div className="lp-plan-sub">{copy(p).tagline}</div>
            <button className={`lp-cta${p.featured ? '' : ' ghostcta'}`} onClick={cta(p)}>
              {p.id === 'free' ? t('price.start') : `${t('price.choose')} ${p.name}`}
            </button>
            <div className="lp-plan-incl">{copy(p).inclHead}</div>
            <ul>
              {copy(p).incl.map((line) => (
                <li key={line}>{line === 'Every app connector' ? `All ${connectors} app connectors` : line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CE QUI N'EST PAS FACTURÉ · la vieille note expliquait comment une
          tâche était comptée. Plus rien n'est compté à la tâche, et la question
          que les gens se posent en lisant une grille de prix est celle-ci :
          qu'est-ce qui va m'être facturé en plus ? Réponse : rien. */}
      <p className="lp-plan-note">
        <b>{t('price.notMetered')}</b> {t('price.noMeterBody')}
      </p>

      <div className="lp-enterprise">
        <div>
          <strong>{t('price.entTitle')}</strong>
          <span>{t('price.entBody')}</span>
        </div>
        <button className="lp-ghost" onClick={goAssistant}>{t('price.askBot')}</button>
      </div>
    </>
  )
}
