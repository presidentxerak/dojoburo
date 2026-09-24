// LES TARIFS, DANS LE JEU · et l'achat qui ouvre vraiment la formation.
//
// CE QUI N'ALLAIT PAS. « Voir les tarifs » menait à la section tarifs de
// l'ancienne page de présentation (/decouvrir), dans un autre habillage, avec
// des boutons qui ouvraient le studio. Et aucun paiement n'ouvrait rien : la
// fonction qui donne l'accès (game/access · grant) n'était appelée nulle part.
//
// LE CHEMIN, MAINTENANT, SANS QUITTER LE JEU :
//   une carte fermée ou un dojo fermé → /tarifs → le paiement Stripe (un
//   achat unique, voir api/buy) → /merci, qui vérifie le paiement auprès du
//   serveur, ouvre la formation dans ce navigateur, et mène à son premier dojo.
//   Annuler ramène ici, avec une phrase qui dit que rien n'a été débité.
//
// CE QUE LA PAGE DIT ET NE DIT PAS. Elle dit ce qui est vrai du produit : un
// achat unique, pas d'abonnement, l'accès ouvert dans ce navigateur (la
// progression et l'accès y sont gardés, voir game/access). Elle ne promet pas
// de remboursement, de facture ni de compte, parce que rien de tout ça n'est
// écrit dans le code.
import { useEffect, useState } from 'react'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say } from '../data/bilingual'
import { PACKS, PACK_BY_ID, packPath } from '../data/packs'
import { PLAN_BY_ID, priceTag, PATH_EUR, TRADE_EUR } from '../data/plans'
import { apiFetch } from '../lib/apiFetch'
import { useAccess, grant, chooseTrade } from './access'
import { Shell } from './Shell'

type Buy = { plan: 'path' } | { plan: 'trade'; trade: string }

/** Lancer le paiement · rend un message d'erreur lisible, ou part vers Stripe. */
async function startPurchase(what: Buy, email: string | undefined, t: (k: string) => string): Promise<string> {
  try {
    const r = await apiFetch('/api/buy', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ ...what, email }),
    })
    const j = await r.json()
    if (j?.ok && j.url) { window.location.href = j.url; return '' }
    return j?.error === 'not_configured' || j?.error === 'plan_not_configured' ? t('tf.errOff')
      : j?.error === 'rate' ? t('tf.errRate')
        : t('tf.errUp')
  } catch {
    return t('tf.errUp')
  }
}

export function TarifsPage() {
  const lang = useLang()
  const t = useT()
  const a = useAccess()
  const [busy, setBusy] = useState<string | null>(null)
  const [msg, setMsg] = useState('')
  const trades = PACKS.filter((p) => p.door === 'trade')
  const [pick, setPick] = useState<string>(a.pick ?? trades[0]?.trade ?? '')
  const cancelled = typeof location !== 'undefined' && /[?&]annule=1/.test(location.search)

  useHeadTags({ title: `${t('tf.title')} · DojoBuro`, description: t('tf.lead'), path: '/tarifs' })

  const buy = async (what: Buy, key: string) => {
    setBusy(key); setMsg('')
    const m = await startPurchase(what, a.email, t)
    if (m) { setMsg(m); setBusy(null) }
  }

  const free = PLAN_BY_ID.free
  const full = PLAN_BY_ID.founder
  const trade = PLAN_BY_ID.managed
  const inclOf = (p: typeof free) => (lang === 'fr' && p.fr ? p.fr.incl : p.incl)
  const pickedPack = trades.find((p) => p.trade === pick)

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{t('tf.title')}</h1>
        <p className="gm-lead">{t('tf.lead')}</p>
        {cancelled && <p className="tf-note">{t('tf.cancelled')}</p>}
        {msg && <p className="tf-note err" role="alert">{msg}</p>}
      </section>

      <section className="gm-sec">
        <div className="tf-grid">
          {/* LE WEEK-END · gratuit, une adresse suffit */}
          <article className="tf-card" style={{ ['--ac' as string]: PACK_BY_ID.weekend?.tint }}>
            <span className="tf-name">{say(PACK_BY_ID.weekend.title, lang)}</span>
            <span className="tf-price">{t('gm.free')}</span>
            <p className="tf-tag">{lang === 'fr' && free.fr ? free.fr.tagline : free.tagline}</p>
            <ul className="tf-incl">{inclOf(free).map((l) => <li key={l}><BauhausIcon name="check" size={13} />{l}</li>)}</ul>
            <Lnk className="gm-cta tf-go" href={packPath('weekend')}>
              {a.hasEmail ? t('ac.continue') : t('tf.startFree')} →
            </Lnk>
          </article>

          {/* LA FORMATION COMPLÈTE · l'offre principale */}
          <article className="tf-card main" style={{ ['--ac' as string]: PACK_BY_ID.generaliste?.tint }}>
            <span className="tf-flag">{t('tf.main')}</span>
            <span className="tf-name">{say(PACK_BY_ID.generaliste.title, lang)}</span>
            <span className="tf-price">{priceTag(PATH_EUR)} <i>{t('tf.once')}</i></span>
            <p className="tf-tag">{lang === 'fr' && full.fr ? full.fr.tagline : full.tagline}</p>
            <ul className="tf-incl">{inclOf(full).map((l) => <li key={l}><BauhausIcon name="check" size={13} />{l}</li>)}</ul>
            {a.hasPath ? (
              <Lnk className="gm-cta tf-go" href={packPath('generaliste')}>{t('tf.owned')} · {t('ac.continue')} →</Lnk>
            ) : (
              <button className="gm-cta tf-go" disabled={busy !== null} onClick={() => buy({ plan: 'path' }, 'path')}>
                {busy === 'path' ? t('tf.going') : `${t('tf.buy')} · ${priceTag(PATH_EUR)}`}
              </button>
            )}
          </article>

          {/* LE MÉTIER · on choisit lequel, puis on l'achète */}
          <article className="tf-card" style={{ ['--ac' as string]: pickedPack?.tint }}>
            <span className="tf-name">{t('tf.trade')}</span>
            <span className="tf-price">{priceTag(TRADE_EUR)} <i>{t('tf.perTrade')}</i></span>
            <p className="tf-tag">{lang === 'fr' && trade.fr ? trade.fr.tagline : trade.tagline}</p>
            <div className="tf-trades" role="radiogroup" aria-label={t('tf.trade')}>
              {trades.map((p) => (
                <button key={p.id} role="radio" aria-checked={pick === p.trade}
                  className={`tf-chip${pick === p.trade ? ' on' : ''}`}
                  style={{ ['--ac' as string]: p.tint }}
                  onClick={() => { if (p.trade) { setPick(p.trade); chooseTrade(p.trade) } }}>
                  {say(p.title, lang)}
                </button>
              ))}
            </div>
            {pickedPack && (a.trade === pick || a.tester) ? (
              <Lnk className="gm-cta tf-go" href={packPath(pickedPack.id)}>{t('tf.owned')} · {t('ac.continue')} →</Lnk>
            ) : (
              <button className="gm-cta tf-go" disabled={busy !== null || !pick} onClick={() => buy({ plan: 'trade', trade: pick }, 'trade')}>
                {busy === 'trade' ? t('tf.going') : `${t('tf.buy')} · ${priceTag(TRADE_EUR)}`}
              </button>
            )}
            <p className="tf-fine">{t('tf.tradeAfter')}</p>
          </article>
        </div>
      </section>

      <section className="gm-sec">
        <div className="cl-note tf-facts">
          <b>{t('tf.factsH')}</b>
          <ul>
            <li>{t('tf.fact1')}</li>
            <li>{t('tf.fact2')}</li>
            <li>{t('tf.fact3')}</li>
          </ul>
        </div>
      </section>

      <SupportBot />
    </Shell>
  )
}

/* ------------------------------------------------------------------ */

/** LE RETOUR DE PAIEMENT · on demande au serveur si la session est payée, et
 *  seulement alors on ouvre la formation. Une adresse /merci recopiée à la
 *  main n'ouvre donc rien : il faut une session payée. */
export function MerciPage() {
  const lang = useLang()
  const t = useT()
  const [state, setState] = useState<'wait' | 'ok' | 'no' | 'err'>('wait')
  const [to, setTo] = useState<string>('generaliste')

  useHeadTags({ title: `${t('mc.title')} · DojoBuro`, description: t('mc.title'), path: '/merci' })

  useEffect(() => {
    const id = new URLSearchParams(location.search).get('session_id') || ''
    if (!id) { setState('no'); return }
    let alive = true
    ;(async () => {
      try {
        const r = await apiFetch(`/api/buy?session_id=${encodeURIComponent(id)}`)
        const j = await r.json()
        if (!alive) return
        if (j?.ok && j.paid && j.plan === 'path') { grant({ path: true }); setTo('generaliste'); setState('ok') }
        else if (j?.ok && j.paid && j.plan === 'trade' && j.trade) {
          grant({ trade: j.trade }); chooseTrade(j.trade)
          setTo(PACKS.find((p) => p.trade === j.trade)?.id ?? 'generaliste'); setState('ok')
        } else setState(j?.ok ? 'no' : 'err')
      } catch { if (alive) setState('err') }
    })()
    return () => { alive = false }
  }, [])

  const pack = PACK_BY_ID[to]
  return (
    <Shell>
      <section className="gm-sec">
        {state === 'wait' && <><h1 className="gm-h1">{t('mc.wait')}</h1><p className="gm-lead">{t('mc.waitBody')}</p></>}
        {state === 'ok' && (
          <>
            <h1 className="gm-h1">{t('mc.title')}</h1>
            <p className="gm-lead">{t('mc.okBody')} {pack ? say(pack.title, lang) : ''}.</p>
            <Lnk className="gm-cta gm-pump" href={packPath(to)}>{t('mc.go')} →</Lnk>
          </>
        )}
        {(state === 'no' || state === 'err') && (
          <>
            <h1 className="gm-h1">{t('mc.noTitle')}</h1>
            <p className="gm-lead">{state === 'no' ? t('mc.noBody') : t('mc.errBody')}</p>
            <Lnk className="gm-cta" href="/tarifs">{t('g.seePrices')} →</Lnk>
          </>
        )}
      </section>
    </Shell>
  )
}
