// LA LEÇON COMME UNE QUÊTE · demandé : « Améliore le design des formations et
// leurs contenus et le design d'interaction type jeu vidéo ».
//
// Ce que le cours ne change pas : son texte. Ce qui change, c'est la façon de le
// parcourir, comme dans un jeu de rôle :
//   · LE JOURNAL DE QUÊTE · collé en haut, il montre les étapes de la leçon,
//     cochées au fil de la lecture, et l'XP en jeu ; un point mène à l'étape ;
//   · LE DIALOGUE DU MAÎTRE · une boîte de dialogue qui s'écrit lettre à
//     lettre, qu'on fait avancer d'un geste ou de la touche Entrée ;
//   · LA MISSION · les étapes deviennent des objectifs à cocher ;
//   · LE COMBAT DU QUIZ · voir game/Lesson (touches 1 à 4, « +XP », série) ;
//   · LA VICTOIRE · un écran de récompense : le coffre s'ouvre sur le badge,
//     l'XP se compte, les étoiles disent le score, et l'étage suivant attend.
// Le mouvement réduit (réglage ou système) affiche tout d'un coup, sans effet.
import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'
import { B, say, type Bi } from '../data/bilingual'
import { BauhausIcon } from '../components/BauhausIcon'
import { LiveChibi } from '../pixel/LiveChibi'
import { PixelIcon } from '../pixel/PixelIcon'
import type { ChibiSpec } from '../pixel/chibi'
import { getSettings, systemReducesMotion } from '../lib/settings'
import { zen } from '../lib/zen'
import { Lnk } from '../lib/router'

export const QT = {
  quest: B('Quest', 'Quête'),
  reward: B('Reward', 'Récompense'),
  next: B('Next', 'Suite'),
  skip: B('Skip', 'Passer'),
  mission: B('Your mission', 'Votre mission'),
  objectives: B('Objectives: tick each one once done.', 'Objectifs : cochez chacun une fois accompli.'),
  allDone: B('All objectives completed', 'Tous les objectifs sont accomplis'),
  streak: B('Streak', 'Série'),
  victory: B('Dojo cleared!', 'Dojo terminé !'),
  badge: B('Badge earned', 'Badge obtenu'),
  score: B('Quiz score', 'Score au quiz'),
  climb: B('Climb to the next floor', "Monter à l'étage suivant"),
  stay: B('Stay here', 'Rester ici'),
  backTemple: B('Back to the temple', 'Retour au temple'),
}

const calm = () => getSettings().calm || systemReducesMotion()

/* ------------------------------------------------------------------ */
/* LE JOURNAL DE QUÊTE                                                 */
/* ------------------------------------------------------------------ */

export interface QuestStep { id: string; label: string }

/** Les étapes franchies · une étape l'est quand on l'a fait défiler jusqu'à
 *  la moitié de l'écran. Lu dans le DOM (attributs data-step), pour ne pas
 *  toucher à la mise en page de chaque bloc. */
export function useQuestSteps(root: React.RefObject<HTMLElement | null>, key: string) {
  const [steps, setSteps] = useState<QuestStep[]>([])
  const [cleared, setCleared] = useState<Set<string>>(new Set())
  useEffect(() => {
    const el = root.current
    if (!el) return
    const nodes = [...el.querySelectorAll<HTMLElement>('[data-step]')]
    setSteps(nodes.map((n) => ({ id: n.dataset.step!, label: n.dataset.label || n.dataset.step! })))
    setCleared(new Set())
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          const id = (e.target as HTMLElement).dataset.step!
          setCleared((s) => (s.has(id) ? s : new Set(s).add(id)))
        }
      }
    }, { rootMargin: '0px 0px -50% 0px' })
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [root, key])
  return { steps, cleared }
}

export function QuestHud({ title, dojo, xp, steps, cleared, done, master }: {
  title: string; dojo: string; xp: number; steps: QuestStep[]; cleared: Set<string>; done: boolean; master: ChibiSpec
}) {
  const lang = useLang()
  const pct = steps.length ? Math.round((cleared.size / steps.length) * 100) : 0
  return (
    <div className="lq-hud" role="navigation" aria-label={say(QT.quest, lang)}>
      <span className="lq-hud-av"><LiveChibi spec={master} scale={1} seed="hud" /></span>
      <div className="lq-hud-main">
        <div className="lq-hud-top">
          <b>{say(QT.quest, lang)} · {dojo}</b>
          <span className="lq-hud-xp">{done ? <BauhausIcon name="check" size={12} /> : null} {xp} XP</span>
        </div>
        <span className="lq-hud-title">{title}</span>
        <div className="lq-hud-bar" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}><i style={{ width: `${done ? 100 : pct}%` }} /></div>
        <ol className="lq-hud-steps">
          {steps.map((st, k) => (
            <li key={st.id}>
              <button className={cleared.has(st.id) || done ? 'on' : ''} title={st.label} aria-label={`${k + 1} · ${st.label}`}
                onClick={() => document.querySelector(`[data-step="${st.id}"]`)?.scrollIntoView({ behavior: calm() ? 'auto' : 'smooth', block: 'start' })} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* LE DIALOGUE DU MAÎTRE                                               */
/* ------------------------------------------------------------------ */

export function MasterDialog({ name, spec, lines }: { name: string; spec: ChibiSpec; lines: string[] }) {
  const lang = useLang()
  const [k, setK] = useState(0)
  const [shown, setShown] = useState(0)
  const text = lines[k] ?? ''
  const typing = shown < text.length
  useEffect(() => { setShown(calm() ? text.length : 0) }, [k, text])
  useEffect(() => {
    if (!typing) return
    const id = setTimeout(() => setShown((n) => Math.min(text.length, n + 2)), 18)
    return () => clearTimeout(id)
  }, [shown, typing, text])
  const advance = () => {
    if (typing) { setShown(text.length); return }
    if (k < lines.length - 1) { setK(k + 1); zen.sfx('tap') }
  }
  return (
    <div className="lq-dialog" role="group" aria-label={name}>
      <span className="lq-dialog-av"><LiveChibi spec={spec} scale={4} seed={name} /></span>
      <div className="lq-dialog-box" tabIndex={0} onClick={advance}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); advance() } }}>
        <b className="lq-dialog-name">{name}</b>
        {/* le texte entier pour les lecteurs d'écran, la frappe pour les yeux */}
        <p className="lq-sr">{text}</p>
        <p aria-hidden="true">{text.slice(0, shown)}{typing && <span className="lq-caret" />}</p>
        <span className="lq-dialog-foot">
          <span>{k + 1} / {lines.length}</span>
          {k < lines.length - 1 || typing
            ? <span className="lq-dialog-next">{say(QT.next, lang)} <BauhausIcon name="play" size={10} /></span>
            : null}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* LA MISSION                                                          */
/* ------------------------------------------------------------------ */

export function Mission({ act, steps }: { act: Bi; steps: Bi[] }) {
  const lang = useLang()
  const [got, setGot] = useState<Set<number>>(new Set())
  const all = got.size === steps.length
  const toggle = (n: number) => setGot((s) => {
    const next = new Set(s)
    if (next.has(n)) next.delete(n)
    else { next.add(n); zen.sfx(next.size === steps.length ? 'chime' : 'tap') }
    return next
  })
  return (
    <div className="lq-mission">
      <span className="lq-mission-k"><PixelIcon name="badges" size={20} /> {say(QT.mission, lang)}</span>
      <p className="lq-mission-act">{say(act, lang)}</p>
      <p className="lq-mission-lead">{say(QT.objectives, lang)}</p>
      <ol className="lq-objs">
        {steps.map((s, n) => (
          <li key={s.en}>
            <button className={got.has(n) ? 'on' : ''} aria-pressed={got.has(n)} onClick={() => toggle(n)}>
              <span className="lq-box">{got.has(n) ? <BauhausIcon name="check" size={12} /> : n + 1}</span>
              <span>{say(s, lang)}</span>
            </button>
          </li>
        ))}
      </ol>
      {all && <p className="lq-mission-done"><BauhausIcon name="star" size={12} /> {say(QT.allDone, lang)}</p>}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* LA VICTOIRE                                                         */
/* ------------------------------------------------------------------ */

export function Victory({ xp, badge, right, total, nextHref, templeHref, onClose }: {
  xp: number; badge: string; right: number; total: number; nextHref: string | null; templeHref: string; onClose: () => void
}) {
  const lang = useLang()
  const [count, setCount] = useState(calm() ? xp : 0)
  const box = useRef<HTMLDivElement>(null)
  useEffect(() => {
    zen.sfx('chime')
    box.current?.focus()
    if (calm()) return
    const t0 = performance.now()
    let raf = 0
    const step = (now: number) => {
      const f = Math.min(1, (now - t0) / 900)
      setCount(Math.round(xp * f))
      if (f < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [xp])
  const stars = total === 0 ? 3 : Math.max(1, Math.round((right / total) * 3))
  return (
    <div className="lq-win" role="dialog" aria-modal="true" aria-label={say(QT.victory, lang)} onClick={onClose}>
      <div className="lq-win-card" ref={box} tabIndex={-1} onClick={(e) => e.stopPropagation()} onKeyDown={(e) => { if (e.key === 'Escape') onClose() }}>
        <span className="lq-win-k">{say(QT.reward, lang)}</span>
        <h2>{say(QT.victory, lang)}</h2>
        <div className="lq-chest" aria-hidden="true"><span className="lq-chest-lid" /><span className="lq-chest-body" /><span className="lq-chest-glow" /><PixelIcon name="badges" size={48} /></div>
        <p className="lq-win-badge">{say(QT.badge, lang)} · <b>{badge}</b></p>
        <p className="lq-win-xp">+{count} XP</p>
        <div className="lq-stars" aria-label={`${say(QT.score, lang)} ${right} / ${total}`}>
          {[0, 1, 2].map((k) => <span key={k} className={k < stars ? 'on' : ''} style={{ animationDelay: `${0.3 + k * 0.18}s` }}><BauhausIcon name="star" size={26} /></span>)}
        </div>
        <p className="lq-win-score">{say(QT.score, lang)} : {right} / {total}</p>
        <div className="lq-win-acts">
          <button className="cc-btn cc-slate" onClick={onClose}>{say(QT.stay, lang)}</button>
          {nextHref
            ? <Lnk className="gm-cta" href={nextHref}>{say(QT.climb, lang)} →</Lnk>
            : <Lnk className="gm-cta" href={templeHref}>{say(QT.backTemple, lang)} →</Lnk>}
        </div>
      </div>
    </div>
  )
}
