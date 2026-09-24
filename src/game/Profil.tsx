// LE PROFIL · où j'en suis, ce que j'ai, et la carte du monde.
//
// ---------------------------------------------------------------------------
// L'INVENTAIRE EST ICI, ET PAS DANS UN ONGLET À LUI
//
// Les maquettes lui donnent sa propre porte. Ça se défend quand il y a des
// objets à équiper ; ici il y a des badges, qui sont la trace de ce qu'on a
// fait. Un onglet « Inventaire » à côté d'un onglet « Profil » aurait coupé en
// deux la seule question qu'on se pose en arrivant · « où j'en suis ». Elle
// tient sur un écran.
//
// ---------------------------------------------------------------------------
// LA CARTE DE LA VALLÉE S'OUVRE D'ICI, EN PLEIN ÉCRAN
//
// Elle n'est plus dans la navigation, et c'est la correction la plus
// importante de ce lot : une scène en trois dimensions qu'on est OBLIGÉ de
// traverser pour atteindre un cours est un péage, et elle était illisible sur
// un téléphone. Elle devient ce qu'elle aurait toujours dû être · une
// récompense qu'on va voir, où l'on reconnaît les cités qu'on a finies.
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say } from '../data/bilingual'
import { PACKS, packPath, levelsOf, eurOf, type Pack } from '../data/packs'
import { TRADE_BY_ID } from '../data/trades'
import { useGame } from './progress'
import { useAccess, forgetAccess } from './access'
import { Shell } from './Shell'
import { Gauge, levelOf } from './Gauge'
import { useAccount, signIn, signOut, syncNow, initialOf } from '../lib/account'
import { AT, SYNC_ERROR, useAccountText } from './accountText'

export function ProfilPage() {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()

  useHeadTags({
    title: `${t('pr.title')} · DojoBuro`,
    description: t('pr.lead'),
    path: '/profil',
  })

  const earned = g.badges.length
  const lv = levelOf(g.xp)

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{t('pr.title')}</h1>
        <p className="gm-lead">{t('pr.lead')}</p>

        {/* LES COMPTEURS, PUIS LES JAUGES · le niveau et l'expérience en
            chiffres, le chemin vers le niveau suivant et la vitrine en barres. */}
        <div className="pf-nums">
          <span className="lv"><b>{lv.level}</b><i>{t('gm.lv')}</i></span>
          <span><b>{g.xp}</b><i>XP</i></span>
          <span><b>{g.pathPercent}%</b><i>{t('pr.ofPath')}</i></span>
        </div>
        <div className="pf-gauges">
          <Gauge value={lv.into} total={lv.need} label={t('gm.toNext')} />
          <Gauge value={earned} total={g.badgeTotal} label={t('pr.badges')} />
        </div>

        {g.nextUp && (
          <Lnk className="gm-cta gm-pump" href={packPath(packOfNext(g.nextUp.module.id))}>
            {g.started ? t('ac.continue') : t('gm.start')} · {say(g.nextUp.level.title, lang)} →
          </Lnk>
        )}
      </section>

      {/* LE COMPTE · « Où est la connexion avec le profil utilisateur ? ».
          Juste sous les compteurs : c'est la question qui décide si ce qu'on
          vient de lire survivra à un changement d'appareil. */}
      <AccountCard />

      {/* LA CARTE · une porte, pas un passage obligé. */}
      <section className="gm-sec">
        <Lnk className="pf-map" href="/carte">
          <span className="pf-map-t">
            <b>{t('pr.mapTitle')}</b>
            <em>{t('pr.mapBody')}</em>
          </span>
          <span className="pf-map-go">→</span>
        </Lnk>
      </section>

      {/* CE QUI EST OUVERT · dit une fois, à l'endroit où l'on se demande ce
          qu'on possède. */}
      <section className="gm-sec">
        <h2 className="pf-h2">{t('pr.ownedH2')}</h2>
        <div className="pf-owned">
          {PACKS.map((p) => <OwnedRow key={p.id} pack={p} />)}
        </div>
        {a.tester && <p className="pf-tester">{t('pr.tester')}</p>}
        <Lnk className="gm-cta" href="/tarifs">{t('g.seePrices')} →</Lnk>
      </section>

      {/* LA VITRINE · tous les badges de la portée, gagnés ou non. Une vitrine
          qui ne montre que les trophées obtenus ne dit pas ce qu'il reste. */}
      <section className="gm-sec">
        <h2 className="pf-h2">{t('pr.caseH2')} <span className="pf-of">{earned} / {g.badgeTotal}</span></h2>
        <div className="pf-case">
          {g.scopeLevels.map(({ module, level }) => {
            const done = g.isDone(module.id, level.id)
            return (
              <span key={`${module.id}/${level.id}`}
                className={`pf-badge${done ? ' on' : ''}`}
                style={{ ['--ac' as string]: module.tint }}>
                <i>{done && <BauhausIcon name="check" size={14} />}</i>
                <b>{say(level.badge, lang)}</b>
              </span>
            )
          })}
        </div>
      </section>

      {/* LE MÉTIER TRAVAILLÉ · c'est lui qui décide de ce que cette page
          compte. Une vitrine dont la taille change sans qu'on sache pourquoi
          est une vitrine à laquelle on cesse de croire. */}
      <section className="gm-sec">
        <h2 className="pf-h2">{t('tr.yours')}</h2>
        <p className="gm-lead">
          {a.pick && TRADE_BY_ID[a.pick]
            ? say(TRADE_BY_ID[a.pick].label, lang)
            : t('tr.none')}
        </p>
      </section>

      {/* CE QUI EST GARDÉ, ET COMMENT L'EFFACER · une page de profil qui ne
          dit pas où vit la progression laisse croire à un compte. */}
      <section className="gm-sec pf-end">
        <h2 className="pf-h2">{t('pr.dataH2')}</h2>
        <p className="gm-lead">{t('pr.dataBody')}</p>
        <button className="cc-btn pf-forget" onClick={() => { forgetAccess(); location.reload() }}>
          {t('pr.forget')}
        </button>
      </section>

      <SupportBot />
    </Shell>
  )
}

/** La formation qui contient cette cité · pour que « reprendre » mène à la
 *  formation et non à une adresse de module qui n'existe plus. */
function packOfNext(moduleId: string): string {
  const p = PACKS.find((x) => x.modules.includes(moduleId))
  return p ? p.id : PACKS[0].id
}

/* ------------------------------------------------------------------ */
/* LE COMPTE · trois états, dits honnêtement                           */
/* ------------------------------------------------------------------ */
//
//   (a) la connexion n'est pas activée sur ce déploiement · on le dit, et on
//       dit où vit la progression, au lieu d'afficher un bouton qui ne mène
//       nulle part ;
//   (b) déconnecté · ce que la connexion apporte, et le bouton ;
//   (c) connecté · l'adresse, l'état de la synchronisation, la déconnexion.

function AccountCard() {
  const { t, lang } = useAccountText()
  const acc = useAccount()
  const time = (ms: number) =>
    new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { hour: '2-digit', minute: '2-digit' }).format(ms)

  return (
    <section className="gm-sec" aria-labelledby="pf-acct-h">
      <div className="pf-acct">
        <h2 id="pf-acct-h" className="pf-h2">{t(AT.title)}</h2>

        {!acc.enabled && <p className="gm-lead">{t(AT.offBody)}</p>}

        {acc.enabled && !acc.signedIn && (
          <>
            <p className="gm-lead">{t(AT.outBody)}</p>
            <p className="pf-acct-note">{t(AT.outHow)}</p>
            <button className="gm-cta pf-acct-in" onClick={signIn} disabled={!acc.ready}>
              {acc.ready ? t(AT.signIn) : t(AT.starting)}
            </button>
          </>
        )}

        {acc.enabled && acc.signedIn && (
          <>
            <p className="pf-acct-who">
              <span className="pf-acct-av" aria-hidden="true">{initialOf(acc.email)}</span>
              <span className="pf-acct-id">
                <em>{t(AT.account)}</em>
                <b>{acc.email || '·'}</b>
              </span>
            </p>
            <p className="gm-lead">{t(AT.inBody)}</p>
            <p className={`pf-acct-st${acc.status === 'error' ? ' err' : ''}`} role="status">
              {acc.status === 'syncing'
                ? t(AT.syncing)
                : acc.status === 'error' && acc.error
                  ? t(SYNC_ERROR[acc.error])
                  : acc.at
                    ? t(AT.syncedAt).replace('{time}', time(acc.at))
                    : t(AT.notYet)}
            </p>
            <div className="pf-acct-acts">
              {acc.status === 'error' && (
                <button className="cc-btn cc-violet" onClick={() => void syncNow()}>{t(AT.retry)}</button>
              )}
              <button className="cc-btn cc-slate" onClick={() => void signOut()}>{t(AT.signOut)}</button>
            </div>
            <p className="pf-acct-note">{t(AT.signOutNote)}</p>
          </>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */

function OwnedRow({ pack }: { pack: Pack }) {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const a = useAccess()
  const open = a.opensPack(pack)
  const levels = levelsOf(pack)
  const done = levels.filter(({ module, level }) => g.isDone(module.id, level.id)).length

  return (
    <Lnk className={`pf-own${open ? ' on' : ''}`} href={packPath(pack.id)}
      style={{ ['--ac' as string]: pack.tint }}>
      <span className="pf-own-m">
        {open ? <BauhausIcon name="check" size={12} /> : <BauhausIcon name="lock" size={12} />}
      </span>
      <span className="pf-own-t">
        <b>{say(pack.title, lang)}</b>
        {/* CE QUE DIT CETTE LIGNE · l'état, puis l'avancement. Une première
            version écrivait « 0 dojo · Terminé » sur une formation qu'on
            venait d'ouvrir, en collant deux libellés qui n'allaient pas
            ensemble. Une phrase fausse sur un écran de progression est pire
            qu'une phrase absente : elle fait douter du compteur. */}
        <em>
          {open
            ? `${t('pr.opened')} · ${done} / ${levels.length}`
            : eurOf(pack) === 0 ? t('gm.needEmail') : t('gm.locked')}
        </em>
      </span>
    </Lnk>
  )
}
