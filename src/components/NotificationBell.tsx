import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useDojo } from '../store'
import { useWork } from '../agents/workStore'
import { BauhausIcon } from './BauhausIcon'
import { useProgress } from '../academy/progress'
import { readLearning } from '../dojo/learning'

function rel(ms: number): string {
  const s = Math.max(0, (Date.now() - ms) / 1000)
  if (s < 60) return 'just now'
  if (s < 3600) return `${Math.floor(s / 60)}m ago`
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`
  return `${Math.floor(s / 86400)}d ago`
}

/** LE CENTRE DE NOTIFICATIONS · ce qui a bougé DANS VOTRE APPRENTISSAGE.
 *
 *  Il annonçait « Chief · Building your company » et « Agent working », c'est à
 *  dire un produit qui n'existe plus : le dojo est un bac à sable depuis le
 *  repositionnement, il ne fait tourner aucune entreprise et rend sa réponse
 *  instantanément. Ouvert un jour normal, ce centre affichait donc deux listes
 *  vides sous deux titres qui promettaient du travail en cours.
 *
 *  Il porte maintenant ce qui est vrai et vérifiable : la prochaine étape,
 *  puis ce qui a été gagné. Un centre de notifications qui annonce du travail
 *  imaginaire vaut moins qu'un centre vide, parce qu'il apprend à ne plus
 *  l'ouvrir.
 *
 *  Ce qui tourne VRAIMENT y reste, en tête et seulement quand ça tourne : un
 *  bac à sable qui calcule, ça existe, même si ça dure une seconde. */
export function NotificationBell() {
  const notifications = useDojo((s) => s.notifications)
  const clear = useDojo((s) => s.clearNotifications)
  const [open, setOpen] = useState(false)
  const running = useWork((s) => s.runningTask)
  const autopilot = useWork((s) => s.autopilot)
  const count = notifications.length

  const p = useProgress()
  const L = readLearning(p.doneKeys)

  // CE QUI TOURNE · seulement quand ça tourne. Le libellé ne promet plus qu'on
  // bâtit une entreprise : le bac à sable calcule un coût et rend la main.
  const ongoing: { title: string; text: string }[] = []
  if (autopilot.running) ongoing.push({ title: 'The sandbox', text: `Working through the plan · ${autopilot.step}…` })
  if (running) ongoing.push({ title: 'The sandbox', text: `Step “${running}” · nothing is sent and nothing is charged.` })

  // LA PASTILLE compte ce qu'il y a d'ACTIONNABLE, pas ce qui traîne. Un
  // compteur qui monte avec de vieilles lignes d'historique finit ignoré.
  const badge = (L.nextStep ? 1 : 0) + ongoing.length

  return (
    <div className="notif">
      <button className="notif-btn" onClick={() => setOpen(true)} aria-label="Notifications">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
        {badge > 0 && <span className="notif-count">{badge > 9 ? '9+' : badge}</span>}
      </button>

      {open && createPortal(
        <div className="notifc-overlay">
          <div className="notifc">
            <header className="notifc-bar">
              <h2 className="notifc-title">Notification center</h2>
              <div className="notifc-bar-r">
                {count > 0 && <button className="notifc-clear" onClick={clear}>Clear all</button>}
                <button className="notifc-close" onClick={() => setOpen(false)} aria-label="Close"><BauhausIcon name="cross" size={13} /></button>
              </div>
            </header>
            <div className="notifc-body">
              {/* LA SUITE · la seule chose actionnable, donc la première. Un
                  centre qui commence par un historique demande de lire avant
                  de pouvoir agir. */}
              <section className="notifc-sec">
                <h3>Your next step</h3>
                {L.nextStep ? (
                  <a className="notifc-next" href={`/build/${L.nextStep.useCase}`}>
                    <span className="notif-dot live" />
                    <div className="notif-txt">
                      <strong>{L.nextStep.title}</strong>
                      <span>Step {L.nextStep.index + 1} of {L.nextStep.name}. {L.advice}</span>
                    </div>
                  </a>
                ) : (
                  <p className="notifc-empty">Every agent in the dojo is built. There is nothing left here to do.</p>
                )}
              </section>

              {/* CE QUI EST GAGNÉ · sans date. Le magasin de progression ne
                  garde qu'un ensemble de clés terminées, et inventer un
                  horodatage pour faire joli serait le genre de détail faux qui
                  décrédibilise le reste. */}
              <section className="notifc-sec">
                <h3>What you have earned</h3>
                {L.earned.length === 0 ? (
                  <p className="notifc-empty">
                    Nothing yet, and nothing is given for showing up. Finish one step and the first badge is yours.
                  </p>
                ) : (
                  <ul className="notifc-list">
                    {L.earned.map((e) => (
                      <li key={e.id}>
                        <span className="notif-dot" />
                        <div className="notif-txt"><strong>{e.title}</strong><span>{e.says}</span></div>
                        <em className="notif-kind">{e.kind}</em>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              {/* CE QUI TOURNE · la section n'existe que s'il y a quelque
                  chose dedans. Un titre « Operations in progress » au-dessus
                  d'un « rien en ce moment » permanent est une promesse tenue
                  zéro fois sur cent. */}
              {ongoing.length > 0 && (
                <section className="notifc-sec">
                  <h3>Running right now</h3>
                  <ul className="notifc-list">
                    {ongoing.map((o, i) => (
                      <li key={i}>
                        <span className="notif-dot live" />
                        <div className="notif-txt"><strong>{o.title}</strong><span>{o.text}</span></div>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              {count > 0 && (
              <section className="notifc-sec">
                <h3>Recent activity</h3>
                <ul className="notifc-list">
                  {notifications.map((n) => (
                    <li key={n.id}>
                      <span className="notif-dot" style={{ background: n.color }} />
                      <div className="notif-txt"><strong>{n.title}</strong><span>{n.text}</span></div>
                      <time className="notif-time">{rel(n.ts)}</time>
                    </li>
                  ))}
                </ul>
              </section>
              )}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  )
}
