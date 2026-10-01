// LE TEMPLE · une formation, vue de face, un étage par leçon.
//
// Demandé : « fais les dojo sous la forme d'un temple avec des étages [...]
// choisir son étage dojo qui représente un cours et voir les autres étudiants
// qui étudient en même temps [...] quand on clique sur son maître il nous
// accueille et va dans l'écran du cours [...] Sur desktop et mobile le temple
// est en fullscreen [...] on a son plan des étages en haut à droite en sticky
// et on peut en cliquant sur la porte du dojo au fond monter d'un étage ».
//
// L'ÉCRAN · plein écran, la tour au centre (le toit en haut, l'étage 1 juste
// au-dessus de l'entrée), un plan des étages collé en haut à droite, des
// commandes en bas (descendre, l'étage, monter, le chat). Les étages fermés
// portent un cadenas ; celui du temple gratuit s'ouvre avec une adresse.
import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { Lnk, navigate } from '../lib/router'
import { useHeadTags } from '../lib/headTags'
import { useLang, useT } from '../i18n'
import { say, type Bi } from '../data/bilingual'
import { PACK_BY_ID, levelsOf, lessonPath, eurOf } from '../data/packs'
import { useAccess, giveEmail } from '../game/access'
import { useGame } from '../game/progress'
import { useAccount, signIn } from '../lib/account'
import { sendSignup } from '../lib/newsletter'
import { BauhausIcon } from '../components/BauhausIcon'
import { gridToUrl } from '../pixel/raster'
import { ChibiSprite } from '../pixel/ChibiSprite'
import { useAvatar } from '../pixel/avatar'
import { sanitizeChibi } from '../pixel/chibi'
import { hashString } from '../pixel/grid'
import { masterOf } from '../pixel/masters'
import { sendPresence, fetchPresence, fetchRoom, postRoom, type Student, type RoomMessage } from '../lib/community'
import { drawFloor } from './art/floors'
import { drawDoorLeaf, drawDoorInside } from './art/door'
import { zen, useZenAmbience } from '../lib/zen'
import { getSettings, systemReducesMotion } from '../lib/settings'
import { SoundToggle } from './SoundToggle'
import { drawRoof, drawFloorStrip, drawBase } from './art/facade'
import { TT } from './templeText'

export function TemplePage({ packId }: { packId: string }) {
  const lang = useLang()
  const t = useT()
  const s = (b: Bi) => say(b, lang)
  const pack = PACK_BY_ID[packId]
  const a = useAccess()
  const g = useGame()
  const acc = useAccount()
  const avatar = useAvatar()
  const floors = useMemo(() => (pack ? levelsOf(pack) : []), [pack])
  const master = masterOf(packId)
  // LA RÈGLE D'OUVERTURE · celle de l'écran du cours (game/Lesson) : le premier
  // étage de chaque temple est offert, les autres s'ouvrent avec la formation
  // (une adresse pour le temple gratuit, un achat pour les autres).
  const openAt = (i: number) => Boolean(pack) && (a.opensPack(pack!) || i === 0)

  useHeadTags({
    title: pack ? `${say(pack.title, lang)} · DojoBuro` : 'DojoBuro',
    description: pack ? say(pack.blurb, lang) : '',
    path: `/dojo/${packId}`,
  })

  // L'ÉTAGE OUVERT · celui de l'adresse (#etage-3), sinon le premier dojo
  // non terminé qu'on peut ouvrir.
  const firstUp = useMemo(() => {
    const i = floors.findIndex(({ module, level }, k) => !g.isDone(module.id, level.id) && (a.opensPack(pack!) || k === 0))
    return i >= 0 ? i : 0
  }, [floors, g, a])
  const [cur, setCur] = useState<number>(() => {
    const m = typeof location !== 'undefined' ? location.hash.match(/^#etage-(\d+)$/) : null
    return m ? Math.max(0, Math.min(floors.length - 1, Number(m[1]) - 1)) : -1
  })
  const current = cur < 0 ? firstUp : cur
  const [masterOpen, setMasterOpen] = useState(false)
  const [chatOpen, setChatOpen] = useState<false | 'group' | 'people'>(false)
  const scroller = useRef<HTMLDivElement>(null)
  useZenAmbience()

  const go = useCallback((i: number, smooth = true) => {
    const n = Math.max(0, Math.min(floors.length - 1, i))
    setCur(n)
    try { history.replaceState(history.state, '', `#etage-${n + 1}`) } catch { /* rien */ }
    const el = document.getElementById(`etage-${n + 1}`)
    el?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'center' })
  }, [floors.length])

  // LA PORTE ET L'ÉLÈVE · demandé : « L'étudiant doit être positionné devant
  // la porte du dojo qui s'ouvre et se ferme : quand on monte d'un étage la
  // porte s'ouvre et l'élève entre ». Monter : la porte s'ouvre, l'élève entre,
  // elle se referme ; on arrive à l'étage choisi, sa porte s'ouvre, l'élève en
  // sort, elle se referme. Un seul trajet à la fois.
  const [doorOpen, setDoorOpen] = useState<number | null>(null)
  const [me, setMe] = useState<'idle' | 'enter' | 'exit'>('exit')
  const busy = useRef(false)
  const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, getSettings().calm || systemReducesMotion() ? ms * 0.25 : ms))
  const arrive = useCallback(async (to: number) => {
    setMe('exit'); setDoorOpen(to); zen.sfx('door')
    await wait(560)
    setMe('idle'); setDoorOpen(null); zen.sfx('doorClose'); zen.sfx('arrive', 0.3)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const climb = useCallback(async (from: number, to: number) => {
    const n = Math.max(0, Math.min(floors.length - 1, to))
    if (busy.current || n === from) return
    busy.current = true
    try {
      if (from !== current) go(from, false)
      setDoorOpen(from); zen.sfx('door')
      await wait(430)
      setMe('enter'); zen.sfx('step'); zen.sfx('step', 0.2); zen.sfx('step', 0.4)
      await wait(520)
      setDoorOpen(null); zen.sfx('doorClose')
      await wait(220)
      go(n)
      await wait(650)
      await arrive(n)
    } finally {
      busy.current = false
    }
  }, [floors.length, current, go, arrive]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    requestAnimationFrame(() => go(current, false))
    const id = setTimeout(() => { void arrive(current) }, 350)
    return () => clearTimeout(id)
  }, [packId]) // eslint-disable-line react-hooks/exhaustive-deps

  // LA PRÉSENCE · un battement toutes les trente secondes depuis l'étage
  // ouvert, et la liste des présents relue toutes les vingt secondes.
  const [students, setStudents] = useState<Student[]>([])
  const floorId = floors[current]?.level.id
  useEffect(() => {
    if (!pack) return
    let alive = true
    const beat = () => {
      if (document.visibilityState !== 'visible') return
      if (acc.signedIn && floorId) void sendPresence(pack.id, floorId, avatar.spec)
      void fetchPresence(pack.id).then((r) => { if (alive && r.ok) setStudents(r.data.students) })
    }
    beat()
    const id = window.setInterval(beat, 25000)
    return () => { alive = false; clearInterval(id) }
  }, [pack, floorId, acc.signedIn, avatar.spec])

  if (!pack) {
    return (
      <div className="tp tp-missing">
        <p>{t('gm.noPack')}</p>
        <Lnk className="gm-cta" href="/">{s(TT.back)}</Lnk>
      </div>
    )
  }

  const roofUrl = gridToUrl(`roof:${pack.id}`, () => drawRoof(pack.tint))
  const stripUrl = gridToUrl('strip', () => drawFloorStrip())
  const baseUrl = gridToUrl(`base:${pack.id}`, () => drawBase(pack.tint))
  const leafL = gridToUrl('door:l', () => drawDoorLeaf('left'))
  const leafR = gridToUrl('door:r', () => drawDoorLeaf('right'))
  const inside = gridToUrl(`door:in:${pack.tint}`, () => drawDoorInside(pack.tint))
  const here = floors[current]
  const others = students.filter((x) => !x.me)

  return (
    <div className="tp" style={{ ['--ac' as string]: pack.tint }}>
      {/* L'EN-TÊTE · retour, le temple et l'étage. */}
      <header className="tp-top">
        <Lnk className="tp-back" href="/" aria-label={s(TT.back)}>←</Lnk>
        <div className="tp-title">
          <b>{say(pack.title, lang)}</b>
          <em>{s(TT.floor)} {current + 1} · {here ? say(here.level.title, lang) : ''}</em>
        </div>
        <SoundToggle />
      </header>

      {/* LE PLAN DES ÉTAGES · collé en haut à droite. */}
      <nav className="tp-map" aria-label={s(TT.map)}>
        {floors.map((_, i) => i).reverse().map((i) => {
          const { module, level } = floors[i]
          const open = openAt(i)
          const done = g.isDone(module.id, level.id)
          return (
            <button key={level.id} className={`tp-map-b${i === current ? ' on' : ''}${done ? ' done' : ''}${open ? '' : ' locked'}`}
              onClick={() => { zen.sfx('tap'); void climb(current, i) }} aria-label={`${s(TT.floor)} ${i + 1} · ${say(level.title, lang)}${open ? '' : ` · ${s(TT.locked)}`}`}
              aria-current={i === current ? 'true' : undefined}>
              <span>{i + 1}</span>
              {!open && <BauhausIcon name="lock" size={10} />}
              {done && <BauhausIcon name="check" size={10} />}
            </button>
          )
        })}
      </nav>

      {/* LA TOUR · le toit, les étages du plus haut au premier, l'entrée. */}
      <div className="tp-scroll" ref={scroller}>
        <div className="tp-tower">
          {roofUrl && <img className="tp-roof" src={roofUrl} alt="" aria-hidden="true" />}
          {floors.map((_, k) => floors.length - 1 - k).map((i) => {
            const { module, level } = floors[i]
            const open = openAt(i)
            const done = g.isDone(module.id, level.id)
            const isCur = i === current
            const onFloor = others.filter((x) => x.floor === level.id).slice(0, 3)
            // un décor différent à chaque étage · la spécialité du temple, le
            // rang de l'étage et le sujet de la leçon (voir art/floors)
            const floorUrl = gridToUrl(`floor:${pack.kit}:${pack.tint}:${i}:${level.master}`, () => drawFloor(pack.kit, pack.tint, i, level.master))
            return (
              <div key={level.id}>
                <section id={`etage-${i + 1}`} className={`tp-floor${isCur ? ' cur' : ''}${open ? '' : ' locked'}`}
                  aria-label={`${s(TT.floor)} ${i + 1} · ${say(level.title, lang)}`}>
                  {floorUrl && <img className="tp-floor-img" src={floorUrl} alt="" aria-hidden="true" />}
                  <span className="tp-sign">
                    <b>{i + 1}F</b> {say(level.title, lang)}
                    {done && <i className="tp-done"><BauhausIcon name="check" size={10} /> {s(TT.done)}</i>}
                  </span>

                  {/* LA PORTE DU FOND · elle s'ouvre, l'élève entre, et l'on monte d'un étage. */}
                  <button className={`tp-door${doorOpen === i ? ' open' : ''}`}
                    onClick={() => (i < floors.length - 1 ? void climb(i, i + 1) : zen.sfx('locked'))}
                    aria-label={i < floors.length - 1 ? s(TT.door) : s(TT.topFloor)} aria-disabled={i >= floors.length - 1}>
                    <span className="tp-door-win" aria-hidden="true">
                      {inside && <img className="tp-door-in" src={inside} alt="" />}
                      {leafL && <img className="tp-leaf l" src={leafL} alt="" />}
                      {leafR && <img className="tp-leaf r" src={leafR} alt="" />}
                    </span>
                  </button>

                  {/* L'ÉLÈVE · devant la porte, à l'étage où il se trouve. */}
                  {isCur && (
                    <span className={`tp-me ${me}`} aria-label={s(TT.you)}>
                      <ChibiSprite spec={avatar.spec} scale={1} />
                      <span className="tp-nametag">{s(TT.you)}</span>
                    </span>
                  )}

                  {/* LE MAÎTRE · il accueille, puis mène au cours. */}
                  <button className="tp-master" onClick={() => { if (i !== current) go(i); zen.sfx('open'); setMasterOpen(true) }} aria-label={`${s(TT.talkMaster)} ${master.name}`}>
                    <ChibiSprite spec={master.spec} scale={1} />
                    <span className="tp-nametag">{s(TT.master)} {master.name}</span>
                  </button>

                  {/* LES ÉLÈVES · moi d'abord sur mon étage, puis ceux qui sont là. */}
                  <div className="tp-students">
                    {onFloor.map((st) => (
                      <button key={st.handle} className="tp-student" onClick={() => { zen.sfx('tap'); setChatOpen('people') }} aria-label={st.name}>
                        <ChibiSprite spec={sanitizeChibi(st.avatar, hashString(st.handle))} scale={1} flip />
                        <span className="tp-nametag">{st.name}</span>
                      </button>
                    ))}
                  </div>

                  {!open && (
                    <div className="tp-lock">
                      <BauhausIcon name="lock" size={22} />
                      <b>{s(TT.lockedFloor)}</b>
                      {eurOf(pack) === 0
                        ? <button className="gm-cta" onClick={() => { go(i); zen.sfx('open'); setMasterOpen(true) }}>{s(TT.openWithEmail)} →</button>
                        : <Lnk className="gm-cta" href="/tarifs">{s(TT.unlock)} →</Lnk>}
                    </div>
                  )}
                </section>
                {stripUrl && <img className="tp-strip" src={stripUrl} alt="" aria-hidden="true" />}
              </div>
            )
          })}
          {baseUrl && <img className="tp-base" src={baseUrl} alt="" aria-hidden="true" />}
        </div>
      </div>

      {/* LES COMMANDES · comme un ascenseur : descendre, l'étage, monter. */}
      <footer className="tp-ctrl">
        <button className="tp-ctrl-b" onClick={() => void climb(current, current - 1)} disabled={current <= 0} aria-label={s(TT.down)}><span className="tp-arrow down"><BauhausIcon name="play" size={16} /></span></button>
        <button className="tp-ctrl-floor" onClick={() => { zen.sfx('open'); setMasterOpen(true) }}>
          <span>{s(TT.floor)}</span><b>{current + 1}</b>
        </button>
        <button className="tp-ctrl-b" onClick={() => void climb(current, current + 1)} disabled={current >= floors.length - 1} aria-label={s(TT.up)}><span className="tp-arrow up"><BauhausIcon name="play" size={16} /></span></button>
        <button className="tp-ctrl-chat" onClick={() => { zen.sfx('tap'); setChatOpen('group') }}>
          <BauhausIcon name="clan" size={18} /> {s(TT.chat)}{others.length ? ` · ${others.length}` : ''}
        </button>
      </footer>

      {masterOpen && here && (
        <div className="tp-modal" role="dialog" aria-modal="true" aria-label={`${s(TT.master)} ${master.name}`} onClick={() => setMasterOpen(false)}>
          <div className="tp-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="tp-master-big"><ChibiSprite spec={master.spec} scale={6} /></div>
            <div className="tp-bubble">
              <b>{s(TT.master)} {master.name}</b>
              <em>{s(master.role)}</em>
              <p>{s(master.welcome)}</p>
              <p className="tp-bubble-lesson"><b>{s(TT.floor)} {current + 1} · {say(here.level.title, lang)}</b><br />{say(here.level.learn, lang)}</p>
              <div className="tp-bubble-acts">
                <button className="cc-btn cc-slate" onClick={() => setMasterOpen(false)}>{s(TT.close)}</button>
                {openAt(current)
                  ? (
                    <button className="gm-cta" onClick={() => { zen.sfx('chime'); navigate(lessonPath(pack.id, here.level.id)) }}>
                      {g.isDone(here.module.id, here.level.id) ? s(TT.redoLesson) : s(TT.startLesson)} →
                    </button>
                  )
                  : eurOf(pack) === 0 ? <EmailGate /> : <Lnk className="gm-cta" href="/tarifs">{s(TT.unlock)} →</Lnk>}
              </div>
            </div>
          </div>
        </div>
      )}

      {chatOpen && <TempleChat room={pack.id} initial={chatOpen} students={others} floorNo={(id) => { const k = floors.findIndex((f) => f.level.id === id); return k >= 0 ? String(k + 1) : '' }} onClose={() => setChatOpen(false)} />}
    </div>
  )
}

/** L'ADRESSE QUI OUVRE LE TEMPLE GRATUIT · la même règle et la même case
 *  newsletter que partout ailleurs (voir game/PackPage, game/Promo). */
function EmailGate() {
  const t = useT()
  const lang = useLang()
  const [v, setV] = useState('')
  const [news, setNews] = useState(false)
  const ok = /.+@.+\..+/.test(v.trim())
  return (
    <form className="tp-gate" onSubmit={(e: FormEvent) => { e.preventDefault(); if (!ok) return; giveEmail(v); void sendSignup(v, news, 'weekend') }}>
      <p>{say(TT.emailGate, lang)}</p>
      <div className="tp-gate-row">
        <input type="email" className="promo-inp" value={v} onChange={(e) => setV(e.target.value)} placeholder={t('d.place')} aria-label={t('d.place')} required />
        <button className="gm-cta" type="submit" disabled={!ok}>{t('d.open')}</button>
      </div>
      <label className="ae-news"><input type="checkbox" checked={news} onChange={(e) => setNews(e.target.checked)} /><span>{t('d.news')}</span></label>
    </form>
  )
}

/* ------------------------------------------------------------------ */
/* LE CHAT DU COURS · les présents, et le groupe                        */
/* ------------------------------------------------------------------ */

function TempleChat({ room, initial, students, floorNo, onClose }: { room: string; initial: 'group' | 'people'; students: Student[]; floorNo: (id: string) => string; onClose: () => void }) {
  const lang = useLang()
  const s = (b: Bi) => say(b, lang)
  const acc = useAccount()
  const [tab, setTab] = useState<'group' | 'people'>(initial)
  const [msgs, setMsgs] = useState<RoomMessage[]>([])
  const [body, setBody] = useState('')
  const load = useCallback(() => {
    if (!acc.signedIn) return
    void fetchRoom(room).then((r) => { if (r.ok) setMsgs(r.data.messages) })
  }, [acc.signedIn, room])
  useEffect(() => {
    load()
    const id = window.setInterval(() => { if (document.visibilityState === 'visible') load() }, 10000)
    return () => clearInterval(id)
  }, [load])
  useEffect(() => {
    const el = document.querySelector('.tc-msgs')
    if (el) el.scrollTop = el.scrollHeight
  }, [msgs])

  return (
    <div className="tc" role="dialog" aria-modal="true" aria-label={s(TT.chat)}>
      <header className="tc-head">
        <div className="tc-tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'group'} className={tab === 'group' ? 'on' : ''} onClick={() => setTab('group')}>{s(TT.groupChat)}</button>
          <button role="tab" aria-selected={tab === 'people'} className={tab === 'people' ? 'on' : ''} onClick={() => setTab('people')}>{s(TT.present)} · {students.length}</button>
        </div>
        <button className="tc-x" onClick={onClose} aria-label={s(TT.close)}>×</button>
      </header>
      {!acc.signedIn
        ? (
          <div className="tc-signin">
            <p>{s(TT.signInChat)}</p>
            <button className="gm-cta" onClick={signIn}>{s(TT.signIn)}</button>
          </div>
        )
        : tab === 'people'
          ? (
            <ul className="tc-people">
              {students.length === 0 && <li className="tc-empty">{s(TT.nobody)}</li>}
              {students.map((st) => (
                <li key={st.handle}>
                  <ChibiSprite spec={sanitizeChibi(st.avatar, hashString(st.handle))} scale={2} />
                  <span><b>{st.name}</b><em>{s(TT.floor)} {floorNo(st.floor)}</em></span>
                  <Lnk className="cc-btn cc-slate" href={`/clan/messages/${st.handle}`}>{s(TT.privateMsg)}</Lnk>
                </li>
              ))}
            </ul>
          )
          : (
            <>
              <div className="tc-msgs">
                {msgs.length === 0 && <p className="tc-empty">{s(TT.noMessages)}</p>}
                {msgs.map((m) => (
                  <div key={m.id} className={`tc-msg${m.mine ? ' mine' : ''}`}>
                    <ChibiSprite spec={sanitizeChibi(m.author.avatar, hashString(m.author.handle))} scale={1} />
                    <div><b>{m.author.name}</b><p>{m.body}</p></div>
                  </div>
                ))}
              </div>
              <form className="tc-form" onSubmit={async (e) => {
                e.preventDefault()
                if (!body.trim()) return
                const r = await postRoom(room, body)
                if (r.ok) { zen.sfx('send'); setBody(''); load() }
              }}>
                <input className="promo-inp" value={body} onChange={(e) => setBody(e.target.value)} placeholder={s(TT.writeGroup)} aria-label={s(TT.writeGroup)} maxLength={1000} />
                <button className="gm-cta" type="submit">{s(TT.send)}</button>
              </form>
            </>
          )}
    </div>
  )
}
