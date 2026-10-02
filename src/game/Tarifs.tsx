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
//
// LA GRILLE À TROIS PRIX · demandé : « on va faire 3 prix [...] gratuit, Un
// temple (une formation) [...] et le Pass dojo [...] life time (toutes les
// formations actuelles et futures) ». Les montants ne s'écrivent pas ici, ils
// viennent de data/plans (voir scripts/test-game). Le Pass au milieu :
//   GRATUIT      le week-end IA et les premières leçons de chaque temple ;
//   PASS DOJO    toutes les formations, actuelles et futures, à vie ;
//   UN TEMPLE    n'importe quelle formation, au même prix (data/plans).
// Puis le tableau qui compare les trois, ligne à ligne. Le total « achetés un
// par un » est calculé depuis les prix des temples, jamais écrit à la main.
import { SEO } from '../data/seo'
import { useEffect, useState } from 'react'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say } from '../data/bilingual'
import { PACKS, PACK_BY_ID, packPath, levelsOf, eurOf, type Pack } from '../data/packs'
import { priceTag, PASS_EUR, TEMPLE_EUR, PASS_PAYS_FROM } from '../data/plans'
import { apiFetch } from '../lib/apiFetch'
import { addReceipt } from '../lib/account'
import { useAccess, grant, grantCourse, chooseTrade, FREE_LESSONS } from './access'
import { Shell } from './Shell'

type Buy = { plan: 'path' } | { plan: 'trade'; trade: string } | { plan: 'course'; course: string } | { plan: 'pass' }

/** Ce qu'on achète pour ouvrir ce temple · null s'il ne se vend pas seul. */
const buyOf = (p: Pack): Buy | null =>
  p.door === 'path' ? { plan: 'path' }
    : p.door === 'trade' && p.trade ? { plan: 'trade', trade: p.trade }
      : p.door === 'course' && p.course ? { plan: 'course', course: p.course }
        : null

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
  // LES TEMPLES QUI SE VENDENT SEULS · la formation complète, les métiers, les
  // cours à part ; le week-end est gratuit et n'y figure donc pas.
  const paid = PACKS.filter((p) => eurOf(p) > 0 && buyOf(p))
  const sum = paid.reduce((n, p) => n + eurOf(p), 0)
  const [pick, setPick] = useState<string>(PACK_BY_ID.generaliste ? 'generaliste' : paid[0]?.id ?? '')
  const unit = PACK_BY_ID[pick]
  const cancelled = typeof location !== 'undefined' && /[?&]annule=1/.test(location.search)

  useHeadTags({ title: say(SEO.prices.title, lang), description: say(SEO.prices.description, lang), path: '/tarifs' })

  const buy = async (what: Buy, key: string) => {
    setBusy(key); setMsg('')
    const m = await startPurchase(what, a.email, t)
    if (m) { setMsg(m); setBusy(null) }
  }
  const yes = <span className="tf-yes" title={t('tf.yes')}><BauhausIcon name="check" size={15} /><span className="lq-sr">{t('tf.yes')}</span></span>
  const no = <span className="tf-no" title={t('tf.no')}><BauhausIcon name="cross" size={12} /><span className="lq-sr">{t('tf.no')}</span></span>
  const rows: [string, JSX.Element, JSX.Element, JSX.Element][] = [
    [t('tf.rowWeekend'), yes, yes, yes],
    [`${FREE_LESSONS} ${t('tf.freeLessons')}`, yes, yes, yes],
    [t('tf.rowOne'), no, yes, yes],
    [t('tf.rowAll'), no, no, yes],
    [t('tf.rowFuture'), no, no, yes],
    [t('tf.rowUpdates'), no, yes, yes],
  ]

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
          {/* GRATUIT · une adresse suffit */}
          <article className="tf-card" style={{ ['--ac' as string]: PACK_BY_ID.weekend?.tint }}>
            <span className="tf-name">{t('tf.freeName')}</span>
            <span className="tf-price">{priceTag(0)}</span>
            <p className="tf-tag">{t('tf.freeTag')}</p>
            <ul className="tf-incl">
              <li><BauhausIcon name="check" size={13} />{t('tf.free1')}</li>
              <li><BauhausIcon name="check" size={13} />{FREE_LESSONS} {t('tf.freeLessons')}</li>
              <li><BauhausIcon name="check" size={13} />{t('tf.free3')}</li>
            </ul>
            <Lnk className="gm-cta tf-go" href={packPath('weekend')}>
              {a.hasEmail ? t('ac.continue') : t('tf.startFree')} →
            </Lnk>
          </article>

          {/* LE PASS DOJO · l'offre recommandée, au milieu */}
          <article className="tf-card main" style={{ ['--ac' as string]: '#7c3aed' }}>
            <span className="tf-flag">{t('tf.reco')}</span>
            <span className="tf-name">{t('tf.passName')}</span>
            <span className="tf-price">{priceTag(PASS_EUR)} <i>{t('tf.forLife')}</i></span>
            <p className="tf-tag">{t('tf.passTag')}</p>
            <ul className="tf-incl">
              <li><BauhausIcon name="check" size={13} />{paid.length} {t('tf.passTemples')}</li>
              <li><BauhausIcon name="check" size={13} />{t('tf.pass2')}</li>
              <li><BauhausIcon name="check" size={13} />{t('tf.payFrom').replace('{n}', String(PASS_PAYS_FROM))}</li>
              <li><BauhausIcon name="check" size={13} />{t('tf.pass3')}</li>
            </ul>
            <p className="tf-sum">{t('tf.passSum')} <s>{priceTag(sum)}</s></p>
            {a.hasPass ? (
              <Lnk className="gm-cta tf-go" href="/">{t('tf.owned')} · {t('ac.continue')} →</Lnk>
            ) : (
              <button className="gm-cta tf-go gm-pump" disabled={busy !== null} onClick={() => buy({ plan: 'pass' }, 'pass')}>
                {busy === 'pass' ? t('tf.going') : `${t('tf.passBuy')} · ${priceTag(PASS_EUR)}`}
              </button>
            )}
          </article>

          {/* UN TEMPLE · on le choisit, on paie son prix */}
          <article className="tf-card" style={{ ['--ac' as string]: unit?.tint }}>
            <span className="tf-name">{t('tf.unitName')}</span>
            <span className="tf-price">{priceTag(TEMPLE_EUR)} <i>{t('tf.once')}</i></span>
            <p className="tf-tag">{t('tf.unitTag')}</p>
            <label className="tf-pick">
              <span>{t('tf.unitPick')}</span>
              <select value={pick} onChange={(e) => {
                setPick(e.target.value)
                const tr = PACK_BY_ID[e.target.value]?.trade
                if (tr) chooseTrade(tr)
              }}>
                {paid.map((p) => <option key={p.id} value={p.id}>{say(p.title, lang)}</option>)}
              </select>
            </label>
            {unit && <p className="tf-fine">{levelsOf(unit).length} {t('tf.unitLessons')}</p>}
            {unit && a.ownsPack(unit) ? (
              <Lnk className="gm-cta tf-go" href={packPath(unit.id)}>{t('tf.owned')} · {t('ac.continue')} →</Lnk>
            ) : unit && buyOf(unit) ? (
              <button className="gm-cta tf-go" disabled={busy !== null} onClick={() => buy(buyOf(unit)!, 'unit')}>
                {busy === 'unit' ? t('tf.going') : `${t('tf.buy')} · ${priceTag(eurOf(unit))}`}
              </button>
            ) : null}
          </article>
        </div>
      </section>

      {/* LE TABLEAU DES PRIX · les trois choix, ligne à ligne */}
      <section className="gm-sec">
        <h2 className="pf-h2">{t('tf.compareH')}</h2>
        <div className="tf-table-wrap">
          <table className="tf-table">
            <thead>
              <tr>
                <th scope="col"><span className="lq-sr">{t('tf.title')}</span></th>
                <th scope="col">{t('tf.freeName')}</th>
                <th scope="col">{t('tf.unitName')}</th>
                <th scope="col" className="main">{t('tf.passName')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, f, u, p]) => (
                <tr key={label}><th scope="row">{label}</th><td>{f}</td><td>{u}</td><td className="main">{p}</td></tr>
              ))}
              <tr className="tf-price-row">
                <th scope="row">{t('tf.rowPrice')}</th>
                <td>{priceTag(0)}</td>
                <td>{priceTag(TEMPLE_EUR)}</td>
                <td className="main">{priceTag(PASS_EUR)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="gm-sec">
        <div className="cl-note tf-facts">
          <b>{t('tf.factsH')}</b>
          <ul>
            <li>{t('tf.fact1')}</li>
            <li>{t('tf.fact2')}</li>
            <li>{FREE_LESSONS} {t('tf.fact3')}</li>
            <li>{t('tf.fact4')}</li>
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
        // LE REÇU · gardé pour être inscrit sur le compte (lib/account), dès
        // maintenant si l'élève est connecté, sinon à sa prochaine connexion.
        // La formation suit alors l'élève sur ses autres appareils.
        if (j?.ok && j.paid && (j.plan === 'pass' || j.plan === 'path' || (j.plan === 'trade' && j.trade) || (j.plan === 'course' && j.course))) addReceipt(id)
        // LE PASS DOJO · tout s'ouvre ; on reprend par la formation complète
        if (j?.ok && j.paid && j.plan === 'pass') { grant({ pass: true }); setTo('generaliste'); setState('ok') }
        else if (j?.ok && j.paid && j.plan === 'path') { grant({ path: true }); setTo('generaliste'); setState('ok') }
        else if (j?.ok && j.paid && j.plan === 'trade' && j.trade) {
          grant({ trade: j.trade }); chooseTrade(j.trade)
          setTo(PACKS.find((p) => p.trade === j.trade)?.id ?? 'generaliste'); setState('ok')
        } else if (j?.ok && j.paid && j.plan === 'course' && j.course) {
          grantCourse(j.course)
          setTo(PACK_BY_ID[j.course] ? j.course : 'generaliste'); setState('ok')
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
