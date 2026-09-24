// DOJOBURO · l'écran du jeu, plein écran.
//
// Le dojo en 3D occupe tout l'écran ; par-dessus : en haut la journée (heure,
// tokens, chiffre du jour, réputation, commandes), à gauche les clients qui
// attendent, en bas les travaux en cours, et le panneau du brief qui s'ouvre
// quand on touche un client (sur le côté sur ordinateur, en feuille du bas sur
// téléphone).
//
// QUI DÉCIDE QUOI · toute la règle est dans engine.ts, pure et testée
// (scripts/test-sim). Cet écran fait avancer le temps, rend ce que le moteur
// dit, et traduit les événements en sons, en bulles du maître et en toasts.
// Il ne calcule aucune qualité ni aucun gain lui-même.
//
// LE TEMPS · une boucle d'animation fait avancer la journée à chaque image,
// mais l'interface ne se redessine que dix fois par seconde, ou tout de suite
// quand il se passe quelque chose : une horloge et des barres de patience
// n'ont pas besoin de soixante images par seconde, et le dojo 3D, lui, anime
// ses personnages sans attendre React.
import { useEffect, useMemo, useRef, useState } from 'react'
import { Lnk } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useDojo } from '../store'
import { BRIEFS } from './briefs'
import { SKILLS, type Skill } from './types'
import {
  DAY_SECONDS, FATIGUE_LIMIT, LEVEL_MAX, TEAM_MAX, TOKEN_STEP,
  buy, clock, closeDay, launch, needFor, newSave, offers, preview, reviveSave, startDay, suggest, tick, trainPrice,
  type Allocation, type Day, type GameEvent, type LaunchError, type OfferId, type Outcome, type Save, type Summary,
} from './engine'
import { SimScene, type ClientView, type StaffView } from './SimScene'
import { EVENTS, MASTER, OFFERS, OUTCOME, T, useSimText } from './text'
import { staffColor, staffName, staffShort } from './staff'
import { audio, type Sfx } from './audio'
import type { Bi } from '../data/bilingual'

/* ------------------------------------------------------------------ */
/* LA SAUVEGARDE                                                       */
/* ------------------------------------------------------------------ */

const SAVE_KEY = 'dojoburo.sim.v1'
function loadSave(): Save {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    return reviveSave(raw ? JSON.parse(raw) : null)
  } catch {
    return newSave()
  }
}
function storeSave(s: Save) {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(s)) } catch { /* navigation privée : on joue sans garder */ }
}

/* ------------------------------------------------------------------ */
/* PETITS OUTILS D'AFFICHAGE                                           */
/* ------------------------------------------------------------------ */

const locale = (lang: string) => (lang === 'fr' ? 'fr-FR' : 'en-US')
const euros = (n: number, lang: string) =>
  new Intl.NumberFormat(locale(lang), { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n)
/** les tokens en milliers · « 12k », comme on les compte dans le métier */
const kTok = (n: number, lang: string) =>
  `${(n / 1000).toLocaleString(locale(lang), { maximumFractionDigits: 1 })}k`

const OUTCOME_TONE: Record<Outcome, string> = { excellent: 'ex', good: 'ok', meh: 'meh', failed: 'ko' }
const ERR: Record<LaunchError, Bi> = {
  gone: T.errGone, empty: T.errEmpty, 'too-many': T.errMany, busy: T.errBusy, down: T.errDown, budget: T.errBudget, over: T.closed,
}

/** Les pictogrammes du jeu · traits simples, couleur du texte. */
function Ico({ name, size = 20 }: { name: 'back' | 'pause' | 'play' | 'sound' | 'mute' | 'full' | 'exit' | 'minus' | 'plus' | 'close' | 'star'; size?: number }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true }
  switch (name) {
    case 'back': return <svg {...p}><path d="M15 5l-7 7 7 7" /></svg>
    case 'pause': return <svg {...p}><path d="M8 5v14M16 5v14" /></svg>
    case 'play': return <svg {...p}><path d="M7 5l12 7-12 7z" fill="currentColor" /></svg>
    case 'sound': return <svg {...p}><path d="M4 10v4h4l5 4V6L8 10z" fill="currentColor" /><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12" /></svg>
    case 'mute': return <svg {...p}><path d="M4 10v4h4l5 4V6L8 10z" fill="currentColor" /><path d="M17 9l5 6M22 9l-5 6" /></svg>
    case 'full': return <svg {...p}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg>
    case 'exit': return <svg {...p}><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" /></svg>
    case 'minus': return <svg {...p}><path d="M5 12h14" /></svg>
    case 'plus': return <svg {...p}><path d="M12 5v14M5 12h14" /></svg>
    case 'star': return <svg {...p} strokeWidth={1.6}><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" fill="currentColor" /></svg>
    default: return <svg {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
  }
}

/** Une jauge plate · une piste, un remplissage, un libellé. */
function Bar({ value, tone }: { value: number; tone?: string }) {
  return (
    <span className={`sim-bar${tone ? ` ${tone}` : ''}`}>
      <i style={{ width: `${Math.max(0, Math.min(1, value)) * 100}%` }} />
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* L'ÉCRAN                                                             */
/* ------------------------------------------------------------------ */

type Screen = 'title' | 'play' | 'summary' | 'shop'
interface Toast { id: number; tone: string; title: string; body?: string }
interface Flash { kind: 'happy' | 'error'; until: number }
interface Said { text: string; until: number }

export function SimPage() {
  const { lang, t } = useSimText()
  useHeadTags({ title: `${t(T.title)} · ${t(T.tagline)}`, description: t(T.pitch), path: '/dojoburo' })

  // LE PLEIN ÉCRAN FIGE LE DOCUMENT · comme la carte : une scène qu'on touche
  // ne doit pas faire défiler la page derrière elle.
  useEffect(() => {
    document.documentElement.classList.add('is-fixed')
    return () => document.documentElement.classList.remove('is-fixed')
  }, [])

  const [save, setSave] = useState<Save>(loadSave)
  const [day, setDay] = useState<Day | null>(null)
  const [screen, setScreen] = useState<Screen>('title')
  const [summary, setSummary] = useState<Summary | null>(null)
  const [paused, setPaused] = useState(false)
  const [speed, setSpeed] = useState<1 | 2>(1)
  const [openUid, setOpenUid] = useState<string | null>(null)
  const [alloc, setAlloc] = useState<Allocation>({})
  const [clients, setClients] = useState<ClientView[]>([])
  const [flash, setFlash] = useState<Partial<Record<Skill, Flash>>>({})
  const [said, setSaid] = useState<Said | null>(null)
  const [toasts, setToasts] = useState<Toast[]>([])
  const [tut, setTut] = useState<number | null>(null)
  const [muted, setMutedState] = useState(() => audio.isMuted())
  const [fs, setFs] = useState(false)
  const [canFs, setCanFs] = useState(false)
  const [trainPick, setTrainPick] = useState<Skill>('research')

  // les références que lit la boucle · toujours à jour, sans relancer la boucle
  const dayRef = useRef<Day | null>(null)
  const saveRef = useRef(save)
  const pausedRef = useRef(false)
  const speedRef = useRef<1 | 2>(1)
  const clientsRef = useRef<ClientView[]>([])
  const openRef = useRef<string | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const toastId = useRef(0)
  saveRef.current = save
  speedRef.current = speed
  clientsRef.current = clients
  openRef.current = openUid
  pausedRef.current = paused || tut !== null

  useEffect(() => { storeSave(save) }, [save])
  useEffect(() => audio.subscribe(() => setMutedState(audio.isMuted())), [])
  useEffect(() => () => audio.music.stop(), [])

  const sfx = (n: Sfx) => audio.sfx(n)
  const toast = (tone: string, title: string, body?: string) => {
    const id = ++toastId.current
    setToasts((ts) => [...ts.slice(-2), { id, tone, title, body }])
    setTimeout(() => setToasts((ts) => ts.filter((x) => x.id !== id)), body ? 7000 : 3200)
  }
  const masterSay = (b: Bi, at: number) => setSaid({ text: t(b), until: at + 6 })

  /* --- le plein écran ---------------------------------------------------- */
  useEffect(() => {
    setCanFs(typeof document !== 'undefined' && !!document.fullscreenEnabled)
    const on = () => setFs(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', on)
    return () => document.removeEventListener('fullscreenchange', on)
  }, [])
  const toggleFs = () => {
    sfx('tap')
    if (document.fullscreenElement) void document.exitFullscreen?.()
    else void rootRef.current?.requestFullscreen?.().catch(() => {})
  }

  /* --- les événements du moteur ----------------------------------------- */
  const freeSlot = (views: ClientView[]) => {
    const used = new Set(views.filter((v) => v.state === 'waiting').map((v) => v.slot))
    for (let i = 0; i < 3; i++) if (!used.has(i)) return i
    return 0
  }

  const finishDay = () => {
    const d = dayRef.current
    if (!d) return
    const r = closeDay(d, saveRef.current)
    saveRef.current = r.save
    setSave(r.save)
    setSummary(r.summary)
    setOpenUid(null)
    setScreen('summary')
    sfx('dayEnd')
    audio.music.setIntensity(0.15)
    if (r.summary.won) useDojo.getState().cheer()
  }

  const handle = (events: GameEvent[], d: Day) => {
    for (const e of events) {
      if (e.type === 'arrive') {
        sfx('client')
        const views = clientsRef.current
        const next = [...views, { uid: e.waiting.uid, slot: freeSlot(views), state: 'waiting' as const }]
        clientsRef.current = next
        setClients(next)
      } else if (e.type === 'leave') {
        const closing = d.t >= DAY_SECONDS
        const next = clientsRef.current.map((c) => (c.uid === e.waiting.uid ? { ...c, state: 'angry' as const } : c))
        clientsRef.current = next
        setClients(next)
        if (openRef.current === e.waiting.uid) { setOpenUid(null); toast('ko', t(T.errGone)) }
        if (!closing) { sfx('leave'); masterSay(MASTER.leave, d.t) }
      } else if (e.type === 'done') {
        const r = e.result
        sfx(r.outcome === 'excellent' ? 'excellent' : r.outcome === 'failed' ? 'fail' : 'success')
        if (r.earned > 0) setTimeout(() => sfx('coin'), 260)
        const kind: Flash['kind'] = r.outcome === 'failed' || r.outcome === 'meh' ? 'error' : 'happy'
        setFlash((f) => {
          const n = { ...f }
          for (const s of r.team) n[s] = { kind, until: d.t + 3 }
          return n
        })
        masterSay(MASTER[r.outcome], d.t)
        if (r.outcome === 'excellent') useDojo.getState().cheer()
        toast(
          OUTCOME_TONE[r.outcome],
          `${t(OUTCOME[r.outcome])} · ${r.quality} % · ${r.earned > 0 ? '+' : ''}${euros(r.earned, lang)}`,
          `${t(r.brief.title)}. ${t(T.lesson)} : ${t(r.brief.tip)}`,
        )
      } else if (e.type === 'levelup') {
        sfx('levelup')
        toast('ex', `${staffShort(e.skill, lang)} ${t(T.levelUp)} ${t(T.level)} ${e.level}`)
      } else if (e.type === 'dayEnd') {
        finishDay()
      }
    }
  }
  const handleRef = useRef(handle)
  handleRef.current = handle

  /* --- la boucle --------------------------------------------------------- */
  useEffect(() => {
    if (screen !== 'play') return
    let raf = 0
    let last = performance.now()
    let acc = 0
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop)
      const real = Math.min(0.25, (now - last) / 1000)
      last = now
      const d = dayRef.current
      if (!d || d.over || pausedRef.current) return
      const r = tick(d, saveRef.current, real * speedRef.current, BRIEFS)
      dayRef.current = r.day
      if (r.save !== saveRef.current) { saveRef.current = r.save; setSave(r.save) }
      // 17 h · plus aucun client n'entrera, on prévient une fois
      const warnAt = DAY_SECONDS * (8 / 9)
      if (d.t < warnAt && r.day.t >= warnAt) { sfx('warning'); toast('info', t(T.closing)) }
      acc += real
      if (r.events.length) handleRef.current(r.events, r.day)
      if (r.events.length || acc >= 0.1) { acc = 0; setDay(r.day) }
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen])

  // LA MUSIQUE SUIT LA TENSION · plus de clients qui attendent, et la fin de
  // journée qui approche, et la bande-son s'anime.
  const queueLen = day?.queue.length ?? 0
  const late = (day?.t ?? 0) > DAY_SECONDS * 0.8
  useEffect(() => {
    if (screen !== 'play') return
    audio.music.setIntensity(Math.min(1, 0.25 + queueLen * 0.2 + (late ? 0.2 : 0)))
  }, [screen, queueLen, late])
  useEffect(() => { audio.music.setPaused(paused || tut !== null) }, [paused, tut])

  // UN ONGLET CACHÉ MET EN PAUSE · la journée ne file pas pendant qu'on lit
  // un message ailleurs.
  useEffect(() => {
    const on = () => { if (document.hidden && screen === 'play') setPaused(true) }
    document.addEventListener('visibilitychange', on)
    return () => document.removeEventListener('visibilitychange', on)
  }, [screen])

  /* --- les actions ------------------------------------------------------- */
  const begin = () => {
    audio.unlock()
    audio.music.start()
    const s = saveRef.current
    const d = startDay(s, (Date.now() % 2147483647) | 0)
    dayRef.current = d
    setDay(d)
    setClients([]); clientsRef.current = []
    setFlash({}); setAlloc({}); setOpenUid(null); setPaused(false); setSummary(null)
    setScreen('play')
    sfx('dayStart')
    masterSay(MASTER.start, 0)
    if (d.event) toast('info', t(EVENTS[d.event].name), `${t(EVENTS[d.event].body)}${d.down ? ` (${staffName(d.down, lang)})` : ''}`)
    if (!s.tutored) setTut(0)
  }

  const newGame = () => {
    if (!window.confirm(t(T.confirmReset))) return
    const s = { ...newSave(), tutored: saveRef.current.tutored }
    saveRef.current = s
    setSave(s)
    sfx('tap')
  }

  const quitDay = () => {
    if (!window.confirm(t(T.quitWarn))) return
    dayRef.current = null
    setDay(null); setClients([]); clientsRef.current = []; setOpenUid(null); setPaused(false)
    setScreen('title')
    audio.music.setIntensity(0.15)
  }

  const openBrief = (uid: string) => {
    audio.unlock()
    if (openUid === uid) { closeBrief(); return }
    sfx('open')
    setOpenUid(uid)
    setAlloc({})
    if (tut === 0) setTut(1)
  }
  const closeBrief = () => { sfx('close'); setOpenUid(null); setAlloc({}) }

  const waiting = day?.queue.find((w) => w.uid === openUid) ?? null
  const brief = waiting?.brief ?? null

  const togglePick = (s: Skill) => {
    const d = dayRef.current
    if (!d || !brief) return
    if (alloc[s] != null) {
      sfx('unassign')
      setAlloc((a) => { const n = { ...a }; delete n[s]; return n })
      return
    }
    if (d.busy[s] || d.down === s) { sfx('error'); toast('ko', t(d.down === s ? T.errDown : T.errBusy)); return }
    if (Object.keys(alloc).length >= TEAM_MAX) { sfx('error'); toast('ko', t(T.errMany)); return }
    sfx('assign')
    setAlloc((a) => ({ ...a, [s]: TOKEN_STEP * 2 }))
  }
  const step = (s: Skill, dir: 1 | -1) => {
    const cur = alloc[s] ?? 0
    const next = cur + dir * TOKEN_STEP
    if (next < TOKEN_STEP) { togglePick(s); return }
    sfx('tick')
    setAlloc((a) => ({ ...a, [s]: next }))
  }
  const doSuggest = () => {
    const d = dayRef.current
    if (!d || !brief) return
    sfx('assign')
    setAlloc(suggest(d, saveRef.current, brief))
  }
  const doLaunch = () => {
    const d = dayRef.current
    if (!d || !openUid) return
    const r = launch(d, saveRef.current, openUid, alloc)
    if (!r.ok) { sfx('error'); toast('ko', t(ERR[r.error])); return }
    dayRef.current = r.day
    setDay(r.day)
    sfx('launch')
    const next = clientsRef.current.map((c) => (c.uid === openUid ? { ...c, state: 'happy' as const } : c))
    clientsRef.current = next
    setClients(next)
    setOpenUid(null)
    setAlloc({})
  }

  const doBuy = (id: OfferId, skill?: Skill) => {
    const r = buy(saveRef.current, id, skill)
    if (!r.ok) { sfx('error'); toast('ko', t(r.error === 'cash' ? T.noCash : T.cantPick)); return }
    sfx('buy')
    saveRef.current = r.save
    setSave(r.save)
    toast('ok', `${t(T.bought)} · ${t(OFFERS[id].name)}${skill ? ` · ${staffShort(skill, lang)}` : ''}`)
  }

  const togglePause = () => { sfx('tap'); setPaused((p) => !p) }
  const toggleSound = () => { audio.unlock(); audio.setMuted(!audio.isMuted()) }

  // les raccourcis · Espace pour la pause, Échap pour fermer le brief
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (screen !== 'play') return
      const tag = (e.target as HTMLElement | null)?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === ' ') { e.preventDefault(); setPaused((p) => !p) }
      if (e.key === 'Escape') { setOpenUid(null); setAlloc({}) }
    }
    window.addEventListener('keydown', on)
    return () => window.removeEventListener('keydown', on)
  }, [screen])

  /* --- ce que la scène montre ------------------------------------------- */
  const now = day?.t ?? 0
  const staffViews = useMemo(() => {
    const v = {} as Record<Skill, StaffView>
    for (const s of SKILLS) {
      const f = flash[s]
      v[s] = {
        busy: !!day?.busy[s],
        tired: (day?.fatigue[s] ?? 0) > FATIGUE_LIMIT,
        down: day?.down === s,
        level: save.staff[s].level,
        flash: f && f.until > now ? f.kind : null,
        picked: alloc[s] != null,
      }
    }
    return v
    // `now` n'arrondit qu'à la seconde : les réactions durent trois secondes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [day?.busy, day?.fatigue, day?.down, save.staff, flash, alloc, Math.floor(now)])

  const masterSays = screen === 'play' && said && said.until > now ? said.text : null
  const pv = useMemo(
    () => (day && brief && Object.keys(alloc).length ? preview(day, save, brief, alloc) : null),
    [day, save, brief, alloc],
  )
  const left = day ? day.budget - day.spent : 0

  /* --- le rendu ---------------------------------------------------------- */
  return (
    <div className={`sim${openUid ? ' has-panel' : ''}`} ref={rootRef}>
      <SimScene
        staff={staffViews}
        clients={clients}
        masterSays={masterSays}
        paused={paused || screen === 'summary' || screen === 'shop'}
        lang={lang}
        onPickStaff={(s) => { if (brief) togglePick(s) }}
        onClientGone={(uid) => {
          const next = clientsRef.current.filter((c) => c.uid !== uid)
          clientsRef.current = next
          setClients(next)
        }}
      />

      {/* ---------------- LE HAUT · la journée et les commandes ------------- */}
      <header className="sim-top">
        {screen === 'play' ? (
          <button className="sim-ico" onClick={quitDay} aria-label={t(T.quit)} title={t(T.quit)}><Ico name="back" /></button>
        ) : (
          <Lnk className="sim-ico" href="/" aria-label={t(T.back)} title={t(T.back)}><Ico name="back" /></Lnk>
        )}
        {day && screen === 'play' ? (
          <>
            <div className="sim-pill sim-day">
              <b>{t(T.day)} {day.day}</b>
              <span className={day.t >= DAY_SECONDS * (8 / 9) ? 'late' : ''}>{clock(day.t)}</span>
            </div>
            <div className="sim-gauge" title={`${left.toLocaleString(locale(lang))} ${t(T.budgetLeft)}`}>
              <span className="sim-gl">{t(T.budget)} <b>{kTok(left, lang)}</b></span>
              <Bar value={left / day.budget} tone={left / day.budget < 0.2 ? 'low' : 'tok'} />
            </div>
            <div className="sim-gauge">
              <span className="sim-gl">{t(T.revenue)} <b>{euros(day.revenue, lang)}</b> <em>/ {euros(day.objective, lang)}</em></span>
              <Bar value={day.revenue / day.objective} tone={day.revenue >= day.objective ? 'win' : 'rev'} />
            </div>
            <div className="sim-pill sim-rep" title={t(T.reputation)}><Ico name="star" size={16} /> {day.reputation}</div>
          </>
        ) : (
          <div className="sim-pill sim-brand"><b>{t(T.title)}</b></div>
        )}
        <div className="sim-ctl">
          {screen === 'play' && (
            <>
              <button className="sim-ico" onClick={togglePause} aria-label={paused ? t(T.resumeGame) : t(T.pause)} aria-pressed={paused}>
                <Ico name={paused ? 'play' : 'pause'} />
              </button>
              <button className={`sim-ico sim-speed${speed === 2 ? ' on' : ''}`} onClick={() => { sfx('tap'); setSpeed((v) => (v === 1 ? 2 : 1)) }}
                aria-label={`${t(T.speed)} ${speed === 1 ? 2 : 1}`} aria-pressed={speed === 2}>
                {'×'}{speed}
              </button>
            </>
          )}
          <button className="sim-ico" onClick={toggleSound} aria-label={t(T.sound)} aria-pressed={!muted}>
            <Ico name={muted ? 'mute' : 'sound'} />
          </button>
          {canFs && (
            <button className="sim-ico" onClick={toggleFs} aria-label={fs ? t(T.exit) : t(T.fullscreen)}>
              <Ico name={fs ? 'exit' : 'full'} />
            </button>
          )}
        </div>
      </header>

      {/* ---------------- LES CLIENTS QUI ATTENDENT ------------------------- */}
      {day && screen === 'play' && (
        <aside className="sim-queue" aria-label={t(T.waiting)}>
          {day.queue.length === 0 && <p className="sim-empty">{t(T.noneWaiting)}</p>}
          {day.queue.map((w) => {
            const p = (w.leaveAt - day.t) / (w.leaveAt - w.arrivedAt)
            return (
              <button key={w.uid} className={`sim-client${openUid === w.uid ? ' on' : ''}`} onClick={() => openBrief(w.uid)}>
                <span className="sim-cn"><b>{w.brief.client.name}</b> <em>{t(w.brief.client.trade)}</em></span>
                <span className="sim-ct">{t(w.brief.title)}</span>
                <span className="sim-cm">
                  <span>{euros(w.brief.reward, lang)}</span>
                  <span>{kTok(needFor(w.brief, save), lang)} tokens</span>
                </span>
                <Bar value={p} tone={p < 0.3 ? 'low' : 'pat'} />
              </button>
            )
          })}
        </aside>
      )}

      {/* ---------------- LES TRAVAUX EN COURS ------------------------------ */}
      {day && screen === 'play' && day.jobs.length > 0 && (
        <section className="sim-jobs" aria-label={t(T.working)}>
          {day.jobs.map((j) => (
            <div key={j.uid} className="sim-job">
              <span className="sim-jt">{t(j.brief.title)}</span>
              <span className="sim-dots">{j.team.map((s) => <i key={s} style={{ background: staffColor(s) }} title={staffShort(s, lang)} />)}</span>
              <Bar value={(day.t - j.startAt) / (j.endAt - j.startAt)} tone="job" />
            </div>
          ))}
        </section>
      )}

      {/* ---------------- LE BRIEF ------------------------------------------ */}
      {day && screen === 'play' && waiting && brief && (
        <section className="sim-panel" role="dialog" aria-label={t(T.brief)}>
          <div className="sim-ph">
            <div>
              <span className="sim-kick">{brief.client.name} · {t(brief.client.trade)}</span>
              <h2>{t(brief.title)}</h2>
            </div>
            <button className="sim-ico" onClick={closeBrief} aria-label={t(T.close)}><Ico name="close" size={18} /></button>
          </div>
          <p className="sim-ask">{t(brief.ask)}</p>
          <div className="sim-facts">
            <span><em>{t(T.reward)}</em><b>{euros(brief.reward, lang)}</b></span>
            <span><em>{t(T.tokensNeeded)}</em><b>{kTok(needFor(brief, save), lang)}</b></span>
            <span><em>{t(T.leavesIn)}</em><b>{Math.max(0, Math.ceil(waiting.leaveAt - day.t))} s</b></span>
          </div>

          <h3 className="sim-h3">{t(T.needs)}</h3>
          <ul className="sim-needs">
            {(Object.entries(brief.needs) as [Skill, number][]).map(([s, n]) => {
              const on = alloc[s] != null
              const ok = on && save.staff[s].level >= n
              return (
                <li key={s} className={ok ? 'ok' : on ? 'part' : ''} style={{ ['--c' as string]: staffColor(s) }}>
                  <i />{staffShort(s, lang)}
                  <span className="sim-lv" aria-label={`${t(T.level)} ${n}`}>{Array.from({ length: n }, (_, i) => <b key={i} />)}</span>
                </li>
              )
            })}
          </ul>

          <div className="sim-teamh">
            <h3 className="sim-h3">{t(T.team)} <em>{Object.keys(alloc).length}/{TEAM_MAX}</em></h3>
            <button className="sim-btn" onClick={doSuggest}>{t(T.suggest)}</button>
          </div>
          <p className="sim-help">{t(T.pickTeam)}</p>
          <ul className="sim-staff">
            {SKILLS.map((s) => {
              const on = alloc[s] != null
              const busy = !!day.busy[s]
              const down = day.down === s
              const tired = day.fatigue[s] > FATIGUE_LIMIT
              const wanted = brief.needs[s] != null
              return (
                <li key={s} className={`${on ? 'on' : ''}${busy || down ? ' off' : ''}${wanted ? ' wanted' : ''}`} style={{ ['--c' as string]: staffColor(s) }}>
                  <button className="sim-sp" onClick={() => togglePick(s)} aria-pressed={on} disabled={(busy || down) && !on}>
                    <i className="sim-sw" />
                    <span className="sim-sn">{staffShort(s, lang)}</span>
                    <span className="sim-sl">{t(T.level)} {save.staff[s].level}</span>
                    {down ? <span className="sim-tag">{t(T.down)}</span>
                      : busy ? <span className="sim-tag">{t(T.busy)}</span>
                        : tired ? <span className="sim-tag warn">{t(T.tired)}</span>
                          : wanted ? <span className="sim-tag want">{t(T.wanted)}</span> : null}
                  </button>
                  {on && (
                    <span className="sim-step">
                      <button onClick={() => step(s, -1)} aria-label="-1000"><Ico name="minus" size={16} /></button>
                      <b>{kTok(alloc[s] ?? 0, lang)}</b>
                      <button onClick={() => step(s, 1)} aria-label="+1000"><Ico name="plus" size={16} /></button>
                    </span>
                  )}
                </li>
              )
            })}
          </ul>

          <div className="sim-pv" aria-live="polite">
            {pv ? (
              <>
                <div className="sim-pvq">
                  <span>{t(T.quality)}</span>
                  <b className={OUTCOME_TONE[pv.outcome]}>{pv.quality} % · {t(OUTCOME[pv.outcome])}</b>
                </div>
                <Bar value={pv.quality / 100} tone={OUTCOME_TONE[pv.outcome]} />
                <div className="sim-pvc">
                  <span>{t(T.cost)} <b>{kTok(pv.cost, lang)}</b></span>
                  <span className={pv.cost > left ? 'bad' : ''}>{kTok(Math.max(0, left - pv.cost), lang)} {t(T.after)}</span>
                </div>
                <ul className="sim-warn">
                  {pv.missing.length > 0 && <li>{t(T.missing)} : {pv.missing.map((s) => staffShort(s, lang)).join(', ')}</li>}
                  {pv.wasted.length > 0 && <li>{t(T.wasted)} : {pv.wasted.map((s) => staffShort(s, lang)).join(', ')}</li>}
                  {pv.tired.length > 0 && <li>{t(T.tiredWarn)} : {pv.tired.map((s) => staffShort(s, lang)).join(', ')}</li>}
                  {pv.fuel > 0 && pv.fuel < 0.85 && <li>{t(T.underfuel)}</li>}
                  {pv.fuel > 1.3 && <li>{t(T.overfuel)}</li>}
                  {pv.cost > left && <li className="bad">{t(T.errBudget)}</li>}
                </ul>
              </>
            ) : <p className="sim-help">{t(T.tutorial2)}</p>}
          </div>
          <button className="gm-cta sim-go" onClick={doLaunch} disabled={!pv || pv.cost > left}>{t(T.launch)}</button>
        </section>
      )}

      {/* ---------------- LES TOASTS ---------------------------------------- */}
      <div className="sim-toasts" aria-live="polite">
        {toasts.map((x) => (
          <div key={x.id} className={`sim-toast ${x.tone}`}>
            <b>{x.title}</b>
            {x.body && <span>{x.body}</span>}
          </div>
        ))}
      </div>

      {/* ---------------- LA PAUSE ------------------------------------------ */}
      {screen === 'play' && paused && tut === null && (
        <div className="sim-veil" onClick={togglePause}>
          <div className="sim-card sim-small" onClick={(e) => e.stopPropagation()}>
            <h2 className="sim-h2">{t(T.paused)}</h2>
            <button className="gm-cta" onClick={togglePause}>{t(T.resumeGame)}</button>
            <button className="sim-btn sim-quiet" onClick={quitDay}>{t(T.quit)}</button>
          </div>
        </div>
      )}

      {/* ---------------- LE TUTORIEL --------------------------------------- */}
      {screen === 'play' && tut !== null && (
        <div className="sim-veil soft">
          <div className="sim-card sim-small sim-tut">
            <span className="sim-kick">{t(T.master)} · {tut + 1}/3</span>
            <p>{t([T.tutorial1, T.tutorial2, T.tutorial3][tut])}</p>
            <button className="gm-cta" onClick={() => {
              sfx('tap')
              if (tut < 2) { setTut(tut + 1); return }
              setTut(null)
              const s = { ...saveRef.current, tutored: true }
              saveRef.current = s
              setSave(s)
            }}>{tut < 2 ? t(T.next) : t(T.gotIt)}</button>
          </div>
        </div>
      )}

      {/* ---------------- L'ÉCRAN TITRE ------------------------------------- */}
      {screen === 'title' && (
        <div className="sim-veil">
          <div className="sim-card sim-hero">
            <h1 className="sim-title">{t(T.title)}</h1>
            <p className="sim-tagline">{t(T.tagline)}</p>
            <p className="sim-pitch">{t(T.pitch)}</p>
            <button className="gm-cta sim-play" onClick={begin}>
              {save.day > 1 || save.served > 0 ? `${t(T.resume)} · ${t(T.day)} ${save.day}` : t(T.play)}
            </button>
            {(save.day > 1 || save.served > 0) && (
              <div className="sim-stats">
                <span><em>{t(T.cash)}</em><b>{euros(save.cash, lang)}</b></span>
                <span><em>{t(T.best)}</em><b>{save.best}</b></span>
                <span><em>{t(T.totalServed)}</em><b>{save.served}</b></span>
              </div>
            )}
            <div className="sim-row">
              {(save.day > 1 || save.served > 0) && <button className="sim-btn" onClick={() => { sfx('open'); setScreen('shop') }}>{t(T.shop)}</button>}
              {(save.day > 1 || save.served > 0) && <button className="sim-btn sim-quiet" onClick={newGame}>{t(T.newGame)}</button>}
              <Lnk className="sim-btn sim-quiet" href="/">{t(T.back)}</Lnk>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- LA FIN DE JOURNÉE --------------------------------- */}
      {screen === 'summary' && summary && (
        <div className="sim-veil">
          <div className="sim-card">
            <span className="sim-kick">{t(T.dayOver)} · {t(T.day)} {summary.day}</span>
            <h2 className={`sim-h2 ${summary.won ? 'win' : ''}`}>{summary.won ? t(T.won) : t(T.missed)}</h2>
            <div className="sim-sum">
              <span><em>{t(T.revenue)}</em><b>{euros(summary.revenue, lang)} <i>/ {euros(summary.objective, lang)}</i></b></span>
              <Bar value={summary.revenue / summary.objective} tone={summary.won ? 'win' : 'rev'} />
              <span><em>{t(T.frugal)}</em><b>+{euros(summary.bonus, lang)}</b></span>
              <small>{kTok(summary.left, lang)} {t(T.budgetLeft)} · {t(T.frugalWhy)}</small>
              <span><em>{t(T.served)}</em><b>{summary.served}</b></span>
              {summary.lost > 0 && <span><em>{t(T.lost)}</em><b>{summary.lost}</b></span>}
              <span><em>{t(T.avgQuality)}</em><b>{summary.quality} %</b></span>
              <span><em>{t(T.excellentN)}</em><b>{summary.excellent}</b></span>
              <span><em>{t(T.reputation)}</em><b>{summary.reputation}</b></span>
              <span><em>{t(T.cash)}</em><b>{euros(save.cash, lang)}</b></span>
            </div>
            <div className="sim-row">
              <button className="sim-btn" onClick={() => { sfx('open'); setScreen('shop') }}>{t(T.toShop)}</button>
              <button className="gm-cta" onClick={begin}>{summary.won ? `${t(T.nextDay)} ${save.day}` : t(T.replay)}</button>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- LA BOUTIQUE --------------------------------------- */}
      {screen === 'shop' && (
        <div className="sim-veil">
          <div className="sim-card sim-shop">
            <div className="sim-ph">
              <div>
                <h2 className="sim-h2">{t(T.shop)}</h2>
                <p className="sim-help">{t(T.shopLead)}</p>
              </div>
              <span className="sim-pill sim-cash">{euros(save.cash, lang)}</span>
            </div>
            <ul className="sim-offers">
              {offers(save).filter((o) => o.id !== 'train').map((o) => (
                <li key={o.id}>
                  <span><b>{t(OFFERS[o.id].name)}</b><em>{t(OFFERS[o.id].body)}</em></span>
                  {o.available || o.id === 'cache' && !save.upgrades.cache ? (
                    <button className="gm-cta" disabled={!o.available || save.cash < o.price} onClick={() => doBuy(o.id)}>{euros(o.price, lang)}</button>
                  ) : <span className="sim-tag want">{t(T.owned)}</span>}
                </li>
              ))}
            </ul>
            <h3 className="sim-h3">{t(OFFERS.train.name)}</h3>
            <p className="sim-help">{t(OFFERS.train.body)}</p>
            <ul className="sim-staff sim-train">
              {SKILLS.map((s) => (
                <li key={s} className={trainPick === s ? 'on' : ''} style={{ ['--c' as string]: staffColor(s) }}>
                  <button className="sim-sp" onClick={() => { sfx('tap'); setTrainPick(s) }} aria-pressed={trainPick === s}>
                    <i className="sim-sw" />
                    <span className="sim-sn">{staffShort(s, lang)}</span>
                    <span className="sim-sl">{t(T.level)} {save.staff[s].level}</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="gm-cta" disabled={save.staff[trainPick].level >= LEVEL_MAX || save.cash < trainPrice(save, trainPick)}
              onClick={() => doBuy('train', trainPick)}>
              {save.staff[trainPick].level >= LEVEL_MAX
                ? `${staffName(trainPick, lang)} · ${t(T.maxed)}`
                : `${t(T.train)} ${staffName(trainPick, lang)} · ${euros(trainPrice(save, trainPick), lang)}`}
            </button>
            <div className="sim-row">
              <button className="sim-btn sim-quiet" onClick={() => { sfx('close'); setScreen(summary ? 'summary' : 'title') }}>{t(T.backShort)}</button>
              <button className="gm-cta" onClick={begin}>{`${t(T.nextDay)} ${save.day}`}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
