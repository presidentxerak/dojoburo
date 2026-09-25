// LE PROFIL · qui je suis dans le dojo, et cinq onglets pour le reste.
//
// ---------------------------------------------------------------------------
// POURQUOI DES ONGLETS
//
// Demandé : « ajoute des onglets car elle n'est pas claire du tout ». La page
// empilait tout (compteurs, compte, carte, formations, vitrine, métier,
// données) sur une seule colonne : on ne savait jamais où chercher. Elle garde
// en tête ce qu'on vient voir (le personnage de son grade, son niveau, son
// XP), puis cinq onglets, un sujet chacun, chacun avec son icône 3D :
//
//   PROGRESSION   la jauge, le prochain dojo, l'échelle des sept grades
//   BADGES        la vitrine
//   FORMATIONS    ce qui est débloqué, et le métier travaillé
//   COMPTE        la connexion, la synchronisation, où vit la progression
//   PARAMÈTRES    langue, son, effets, animations, vibrations, effacement
//
// L'onglet ouvert s'écrit dans l'adresse (#badges, #parametres...) : un lien
// y mène directement, et le retour arrière y ramène.
//
// ---------------------------------------------------------------------------
// LA CARTE DE LA VALLÉE N'EST PLUS ICI
//
// Demandé : « masque la Valley map du profil ». La page /carte existe
// toujours ; le profil n'y renvoie plus (scripts/test-charte le vérifie).
import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { SupportBot } from '../components/SupportBot'
import { BauhausIcon } from '../components/BauhausIcon'
import { LangSwitch } from '../components/LangSwitch'
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
import { useAccount, signIn, signOut, syncNow } from '../lib/account'
import { AT, SYNC_ERROR, useAccountText } from './accountText'
import { RANKS, rankOf, nextRank } from './ranks'
import { GradeAvatar, Icon3D, type Icon3DName } from './Icon3D'
import { useSettings, setSetting, resetSettings, systemReducesMotion, useLook, setLook, type Look } from '../lib/settings'
import { audio } from '../sim/audio'
import { eraseLocalData } from '../lib/erase'

type TabId = 'progression' | 'badges' | 'formations' | 'compte' | 'parametres'

const TABS: { id: TabId; key: string; icon: Icon3DName }[] = [
  { id: 'progression', key: 'pr.tabProgress', icon: 'progress' },
  { id: 'badges', key: 'pr.tabBadges', icon: 'badges' },
  { id: 'formations', key: 'pr.tabTrainings', icon: 'trainings' },
  { id: 'compte', key: 'pr.tabAccount', icon: 'account' },
  { id: 'parametres', key: 'pr.tabSettings', icon: 'settings' },
]

const tabFromHash = (): TabId => {
  if (typeof location === 'undefined') return 'progression'
  const h = location.hash.replace('#', '')
  return (TABS.find((x) => x.id === h)?.id) ?? 'progression'
}

export function ProfilPage() {
  const t = useT()
  const [tab, setTab] = useState<TabId>(tabFromHash)
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  useHeadTags({
    title: `${t('pr.title')} · DojoBuro`,
    description: t('pr.lead'),
    path: '/profil',
  })

  // LE RETOUR ARRIÈRE · un changement d'adresse (lien, historique) rouvre
  // l'onglet qu'elle nomme.
  useEffect(() => {
    const on = () => setTab(tabFromHash())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const open = (id: TabId) => {
    setTab(id)
    try { history.replaceState(history.state, '', id === 'progression' ? location.pathname : `#${id}`) } catch { /* rien */ }
  }

  // LE CLAVIER · les flèches passent d'un onglet à l'autre (le modèle ARIA
  // des onglets), Début et Fin vont aux bouts.
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = TABS.findIndex((x) => x.id === tab)
    let j = i
    if (e.key === 'ArrowRight') j = (i + 1) % TABS.length
    else if (e.key === 'ArrowLeft') j = (i - 1 + TABS.length) % TABS.length
    else if (e.key === 'Home') j = 0
    else if (e.key === 'End') j = TABS.length - 1
    else return
    e.preventDefault()
    open(TABS[j].id)
    refs.current[j]?.focus()
  }

  return (
    <Shell>
      <section className="gm-sec">
        <h1 className="gm-h1">{t('pr.title')}</h1>
        <Hero />
      </section>

      <section className="gm-sec pf-tabs-sec">
        <div className="pf-tabs" role="tablist" aria-label={t('pr.tabs')} onKeyDown={onKey}>
          {TABS.map((x, i) => (
            <button
              key={x.id}
              ref={(el) => { refs.current[i] = el }}
              id={`pf-tab-${x.id}`}
              role="tab"
              className={`pf-tab${tab === x.id ? ' on' : ''}`}
              aria-selected={tab === x.id}
              aria-controls={`pf-panel-${x.id}`}
              tabIndex={tab === x.id ? 0 : -1}
              onClick={() => open(x.id)}
            >
              <Icon3D name={x.icon} size={40} />
              <span>{t(x.key)}</span>
            </button>
          ))}
        </div>
      </section>

      <div
        key={tab}
        className="pf-panel"
        role="tabpanel"
        id={`pf-panel-${tab}`}
        aria-labelledby={`pf-tab-${tab}`}
      >
        {tab === 'progression' && <ProgressTab />}
        {tab === 'badges' && <BadgesTab />}
        {tab === 'formations' && <TrainingsTab />}
        {tab === 'compte' && <AccountTab />}
        {tab === 'parametres' && <SettingsTab />}
      </div>

      <SupportBot />
    </Shell>
  )
}

/* ------------------------------------------------------------------ */
/* L'EN-TÊTE · le personnage du grade, le grade, le niveau             */
/* ------------------------------------------------------------------ */

function Hero() {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const lv = levelOf(g.xp)
  const rank = rankOf(lv.level)
  const next = nextRank(lv.level)
  const acc = useAccount()
  const gap = next ? next.from - lv.level : 0
  const belt = next ? say(next.belt, lang).replace(/^./, (c) => (lang === 'fr' ? c.toLowerCase() : c)) : ''

  return (
    // LA CEINTURE NOIRE SUR FOND NOIR · son nom s'écrit en violet clair, sinon
    // on ne le lirait pas.
    <div className="pf-hero" style={{ ['--belt' as string]: rank.tint, ['--belt-ink' as string]: rank.id === 'black' ? '#c4b5fd' : rank.tint }}>
      <GradeAvatar rank={rank} size={104} animated className="pf-hero-av" />
      <div className="pf-hero-t">
        <em>{t('pr.yourGrade')}</em>
        <b>{say(rank.belt, lang)}</b>
        <span className="pf-hero-title">{say(rank.title, lang)}</span>
        {acc.signedIn && acc.email && <span className="pf-hero-mail">{acc.email}</span>}
        <span className="pf-hero-nums">
          <span className="pf-chip lv">{t('gm.lv')} {lv.level}</span>
          <span className="pf-chip">{g.xp} XP</span>
          <span className="pf-chip">{g.badges.length} {t('pr.badges')}</span>
        </span>
        <p className="pf-hero-next">
          {next
            ? (gap === 1 ? t('pr.nextGrade1') : t('pr.nextGrade').replace('{n}', String(gap))).replace('{belt}', belt)
            : t('pr.topGrade')}
        </p>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* PROGRESSION                                                         */
/* ------------------------------------------------------------------ */

function ProgressTab() {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  const lv = levelOf(g.xp)
  const rank = rankOf(lv.level)

  return (
    <>
      <section className="gm-sec">
        <p className="gm-lead">{t('pr.lead')}</p>
        <div className="pf-nums">
          <span className="lv"><b>{lv.level}</b><i>{t('gm.lv')}</i></span>
          <span><b>{g.xp}</b><i>XP</i></span>
          <span><b>{g.pathPercent}%</b><i>{t('pr.ofPath')}</i></span>
        </div>
        <div className="pf-gauges">
          <Gauge value={lv.into} total={lv.need} label={t('gm.toNext')} />
          <Gauge value={g.badges.length} total={g.badgeTotal} label={t('pr.badges')} />
        </div>

        {g.nextUp && (
          <Lnk className="gm-cta gm-pump" href={packPath(packOfNext(g.nextUp.module.id))}>
            {g.started ? t('ac.continue') : t('gm.start')} · {say(g.nextUp.level.title, lang)} →
          </Lnk>
        )}
      </section>

      {/* L'ÉCHELLE DES GRADES · les sept personnages, ceux à venir en
          silhouette. Voir ce qu'on n'a pas encore est ce qui donne envie. */}
      <section className="gm-sec">
        <h2 className="pf-h2">{t('pr.gradesH2')}</h2>
        <p className="gm-lead">{t('pr.gradesLead')}</p>
        <ol className="pf-ladder">
          {RANKS.map((r) => {
            const now = r.id === rank.id
            const got = lv.level >= r.from
            return (
              <li key={r.id} className={`pf-rung${now ? ' now' : ''}${got ? ' got' : ''}`} style={{ ['--belt' as string]: r.tint }}>
                <GradeAvatar rank={r} size={64} locked={!got} animated={now} />
                <span className="pf-rung-t">
                  <b>{say(r.belt, lang)}</b>
                  <em>{say(r.title, lang)} · {t('pr.fromLevel').replace('{n}', String(r.from))}</em>
                  <span>{say(r.means, lang)}</span>
                </span>
                <span className={`pf-rung-st${now ? ' now' : got ? ' got' : ''}`}>
                  {now ? t('pr.gradeNow') : got ? t('pr.gradeDone') : t('pr.gradeLocked')}
                </span>
              </li>
            )
          })}
        </ol>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* BADGES · la vitrine, tous les badges de la portée, gagnés ou non.   */
/* ------------------------------------------------------------------ */

function BadgesTab() {
  const lang = useLang()
  const t = useT()
  const g = useGame()
  return (
    <section className="gm-sec">
      <h2 className="pf-h2">{t('pr.caseH2')} <span className="pf-of">{g.badges.length} / {g.badgeTotal}</span></h2>
      <Gauge value={g.badges.length} total={g.badgeTotal} label={t('pr.badges')} />
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
  )
}

/* ------------------------------------------------------------------ */
/* FORMATIONS · ce qui est ouvert, et le métier travaillé              */
/* ------------------------------------------------------------------ */

function TrainingsTab() {
  const lang = useLang()
  const t = useT()
  const a = useAccess()
  return (
    <>
      <section className="gm-sec">
        <h2 className="pf-h2">{t('pr.ownedH2')}</h2>
        <div className="pf-owned">
          {PACKS.map((p) => <OwnedRow key={p.id} pack={p} />)}
        </div>
        {a.tester && <p className="pf-tester">{t('pr.tester')}</p>}
        <Lnk className="gm-cta" href="/tarifs">{t('g.seePrices')} →</Lnk>
      </section>

      {/* LE MÉTIER TRAVAILLÉ · c'est lui qui décide de ce que la vitrine
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
    </>
  )
}

/* ------------------------------------------------------------------ */
/* COMPTE · la connexion, puis où vit la progression                   */
/* ------------------------------------------------------------------ */

function AccountTab() {
  const t = useT()
  return (
    <>
      <AccountCard />
      <section className="gm-sec">
        <h2 className="pf-h2">{t('pr.dataH2')}</h2>
        <p className="gm-lead">{t('pr.dataBody')}</p>
      </section>
    </>
  )
}

/* ------------------------------------------------------------------ */
/* PARAMÈTRES · « ajoute des paramètres »                              */
/* ------------------------------------------------------------------ */

/** « Tout effacer » · lib/erase retire les clés de ce navigateur (le jeu ne
 *  touche jamais le stockage lui-même, voir scripts/test-game), puis l'accès
 *  est oublié et la page repart de zéro. */
function eraseEverything() {
  eraseLocalData()
  forgetAccess()
  location.reload()
}

function SettingsTab() {
  const t = useT()
  const s = useSettings()
  const [muted, setMuted] = useState(() => audio.isMuted())
  const sysCalm = systemReducesMotion()

  return (
    <section className="gm-sec">
      <h2 className="pf-h2">{t('st.h2')}</h2>
      <p className="gm-lead">{t('st.lead')}</p>

      <div className="st-list">
        <LookRow />
        <div className="st-row">
          <span className="st-t"><b>{t('st.lang')}</b><em>{t('st.langBody')}</em></span>
          <LangSwitch />
        </div>
        <Toggle label={t('st.sound')} body={t('st.soundBody')} on={!muted}
          onChange={(v) => { audio.setMuted(!v); setMuted(!v) }} />
        <Toggle label={t('st.fx')} body={t('st.fxBody')} on={s.fx}
          onChange={(v) => setSetting('fx', v)} />
        <Toggle label={t('st.calm')} body={sysCalm ? `${t('st.calmBody')} ${t('st.systemCalm')}` : t('st.calmBody')} on={s.calm}
          onChange={(v) => setSetting('calm', v)} />
        <Toggle label={t('st.haptics')} body={t('st.hapticsBody')} on={s.haptics}
          onChange={(v) => setSetting('haptics', v)} />
      </div>

      <button className="cc-btn cc-slate st-reset" onClick={resetSettings}>{t('st.reset')}</button>

      <div className="st-danger">
        <h3>{t('st.dangerH3')}</h3>
        <p>{t('st.dangerBody')}</p>
        <button className="cc-btn pf-forget" onClick={eraseEverything}>{t('pr.forget')}</button>
      </div>
    </section>
  )
}

/** L'AFFICHAGE · trois choix côte à côte, comme la langue : l'état et les
 *  alternatives se lisent d'un coup d'oeil. */
function LookRow() {
  const t = useT()
  const look = useLook()
  const opts: { id: Look; key: string }[] = [
    { id: 'dark', key: 'st.dark' },
    { id: 'light', key: 'st.light' },
    { id: 'system', key: 'st.system' },
  ]
  return (
    <div className="st-row">
      <span className="st-t"><b>{t('st.look')}</b><em>{t('st.lookBody')}</em></span>
      <div className="st-seg" role="group" aria-label={t('st.look')}>
        {opts.map((o) => (
          <button key={o.id} className={`st-seg-b${look === o.id ? ' on' : ''}`} aria-pressed={look === o.id} onClick={() => setLook(o.id)}>
            {t(o.key)}
          </button>
        ))}
      </div>
    </div>
  )
}

/** Un interrupteur · un vrai bouton « switch » : l'état est lu par le lecteur
 *  d'écran, et le libellé Activé / Désactivé le dit aussi à l'oeil. */
function Toggle({ label, body, on, onChange }: { label: string; body: string; on: boolean; onChange: (v: boolean) => void }) {
  const t = useT()
  return (
    <div className="st-row">
      <span className="st-t"><b>{label}</b><em>{body}</em></span>
      <button
        role="switch"
        aria-checked={on}
        aria-label={label}
        className={`st-toggle${on ? ' on' : ''}`}
        onClick={() => onChange(!on)}
      >
        <i aria-hidden="true" />
        <span>{on ? t('st.on') : t('st.off')}</span>
      </button>
    </div>
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
  const g = useGame()
  const rank = rankOf(levelOf(g.xp).level)
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
              <GradeAvatar rank={rank} size={44} className="pf-acct-av" />
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
