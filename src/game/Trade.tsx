// LES FORMATIONS MÉTIER · on choisit son métier, puis on a sa carte.
//
// ---------------------------------------------------------------------------
// POURQUOI LE CHOIX EST UNE PAGE, ET PAS UN MENU DÉROULANT
//
// Choisir son métier décide de tout ce qu'on lira ensuite. Un menu déroulant
// le fait passer pour un réglage, et un réglage se change sans y penser ; on
// se retrouve alors avec six formations entamées et aucune finie. Une page qui
// dit ce que chaque métier contient fait prendre la décision une fois.
//
// LE CHOIX N'EST PAS UNE SERRURE. On peut revenir ici et en changer : ce qui a
// été fait reste fait, parce que la progression est rangée par cité et par
// dojo, et qu'une cité ne disparaît pas quand on regarde ailleurs.
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk, navigate } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say, modulePath, levelPath } from '../data/curriculum'
import {
  TRADES, TRADE_BY_ID, citiesOfTrade, tradePath,
  TRADE_CITY_COUNT, TRADE_LEVEL_COUNT, TRADE_MINUTES,
} from '../data/trades'
import { TRADE_EUR, priceTag } from '../data/plans'
import { useGame } from './progress'
import { useAccess, chooseTrade } from './access'
import { WorldMap } from './WorldMap'

/* ------------------------------------------------------------------ */
/* LE CHOIX                                                            */
/* ------------------------------------------------------------------ */

export function TradeHomePage() {
  const lang = useLang()
  const t = useT()
  const a = useAccess()

  useHeadTags({
    title: `${t('tr.title')} · DojoBuro`,
    description: t('tr.lead'),
    path: '/metier',
  })

  return (
    <div className="landing dg2 ac tr">
      <SiteHeader />

      <section className="lp-sec tr-hero">
        <h1>{t('tr.title')}</h1>
        <p className="lp-lead">{t('tr.lead')}</p>
        <div className="lp-badges">
          <span>{TRADE_CITY_COUNT} {t('g.cities')}</span>
          <span>{TRADE_LEVEL_COUNT} {t('g.dojos')}</span>
          <span>{TRADE_MINUTES} {t('ac.min')}</span>
          <span>{priceTag(TRADE_EUR)} {t('price.addOn')}</span>
        </div>
      </section>

      <section className="lp-sec">
        <div className="tr-grid">
          {TRADES.map((tr) => (
            <Lnk
              key={tr.id}
              className={`appcard tr-card${a.pick === tr.id ? ' on' : ''}`}
              href={tradePath(tr.id)}
              style={{ ['--ac' as string]: tr.tint }}
            >
              <span className="tr-g"><BauhausIcon name={tr.glyph} size={20} /></span>
              <b>{say(tr.label, lang)}</b>
              <em>{say(tr.who, lang)}</em>
              <i className="tr-cities">
                {citiesOfTrade(tr.id).map((m) => say(m.title, lang)).join(' · ')}
              </i>
            </Lnk>
          ))}
        </div>
      </section>

      {/* CE QUE LE MÉTIER SUPPOSE · dit ici, parce que quelqu'un qui arrive
          directement sur cette page croirait acheter une formation entière. */}
      <section className="lp-sec alt tr-after">
        <h2>{t('tr.needH2')}</h2>
        <p className="lp-lead">{t('tr.needBody')}</p>
        <Lnk className="lp-cta" href="/formation">{t('d.seePath')} →</Lnk>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* UN MÉTIER                                                           */
/* ------------------------------------------------------------------ */

export function TradePage({ tradeId }: { tradeId: string }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const trade = TRADE_BY_ID[tradeId]
  const cities = citiesOfTrade(tradeId)

  useHeadTags({
    title: trade ? `${say(trade.label, lang)} · DojoBuro` : `${t('tr.noTrade')} · DojoBuro`,
    description: trade ? say(trade.who, lang) : t('tr.noTradeBody'),
    path: tradePath(tradeId),
  })

  if (!trade) {
    return (
      <div className="landing dg2 ac">
        <SiteHeader />
        <section className="lp-sec">
          <h2>{t('tr.noTrade')}</h2>
          <p className="lp-lead">{t('tr.noTradeBody')}</p>
          <p><Lnk className="lp-ghost" href="/metier">← {t('tr.backTrades')}</Lnk></p>
        </section>
        <SiteFooter />
      </div>
    )
  }

  const done = cities.reduce((n, m) => n + g.cityOf(m).done, 0)
  const total = cities.reduce((n, m) => n + m.levels.length, 0)
  const next = cities.map((m) => g.cityOf(m)).find((c) => c.next)

  return (
    <div className="landing dg2 ac fm" style={{ ['--ac' as string]: trade.tint }}>
      <SiteHeader />

      {/* LA CARTE DU MÉTIER · les mêmes cités dojo, la même vue de dessus.
          Une carte différente pour la formation métier aurait fait croire à un
          autre produit, et toute amélioration faite à l'une aurait manqué à
          l'autre. Elle lit les cités qu'on lui donne, rien de plus. */}
      <div className="fm-full">
        <WorldMap modules={cities} onOpen={(id) => navigate(modulePath(id))} />
        <div className="fm-hud">
          <h1>{say(trade.label, lang)}</h1>
          <p>{cities.length} {t('g.cities')} · {total} {t('g.dojos')} · {say(trade.who, lang)}</p>
          <span className="fm-bar">
            <i style={{ width: `${total ? Math.round((done / total) * 100) : 0}%` }} />
          </span>
          <em>{done} / {total} {t('g.dojos')}</em>
        </div>
      </div>

      <section className="lp-sec fm-list">
        <h2>{t('g.allCities')}</h2>
        <div className="fm-cities">
          {cities.map((m, i) => {
            const c = g.cityOf(m)
            return (
              <Lnk
                className={`fm-city${c.finished ? ' done' : ''}`}
                key={m.id}
                href={modulePath(m.id)}
                style={{ ['--ac' as string]: m.tint }}
              >
                <span className="fm-city-n">{i + 1}</span>
                <BauhausIcon className="fm-city-g" name={m.glyph} size={18} />
                <b>{say(m.title, lang)}</b>
                <span className="fm-city-b">{say(m.blurb, lang)}</span>
                <em>{c.done} / {c.total} {t('g.dojos')}</em>
                <span className="fm-city-bar"><i style={{ width: `${c.percent}%` }} /></span>
              </Lnk>
            )
          })}
        </div>

        {/* CHOISIR CE MÉTIER · c'est ce qui décide de la carte qu'on voit dans
            son profil et du dojo où l'on reprend. On peut en changer. */}
        <p className="tr-pick">
          {a.pick === trade.id
            ? <span className="tr-picked"><BauhausIcon name="check" size={13} /> {t('tr.picked')}</span>
            : <button className="lp-cta sm" onClick={() => chooseTrade(trade.id)}>{t('tr.pick')}</button>}
          {next?.next && (
            <Lnk className="lp-ghost" href={levelPath(next.module.id, next.next.id)}>
              {done > 0 ? t('ac.continue') : t('g.enter')} →
            </Lnk>
          )}
        </p>
      </section>

      <SiteFooter />
      <SupportBot />
    </div>
  )
}
