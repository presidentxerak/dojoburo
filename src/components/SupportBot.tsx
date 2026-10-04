// Dojobot · the built-in help assistant.
//
// It answers from the free local knowledge base first and only escalates to the
// server-side model for questions it can't match. Full screen when opened from
// the launcher, so there is room for the topic rail, the suggested questions and
// the answers themselves; embedded (on the landing) it stays in its section.
//
// When a topic has an animated walkthrough, Dojobot offers to play it and the
// walkthrough takes over the screen in place — the same one behind every
// "How to?" button in the app.
import { useEffect, useRef, useState } from 'react'
import { TOPIC_BY_ID, KB, matchTopic, matchConnector, connectorReply, topicIn, GREETING, type KBLink } from '../support/knowledge'
import { useLang, useT, pick, baseLang } from '../i18n'
import { askCascade } from '../support/askCascade'
import { TutorialOverlay } from './guide/TutorialOverlay'
import { WALKS, walkIn, type WalkId } from './guide/tutorialBeats'
import { LiveChibi } from '../pixel/LiveChibi'
import { DOJOBOT, LATEST_UPDATE, whatsNewLine } from '../support/dojobot'
import { BauhausIcon } from './BauhausIcon'

interface Msg {
  id: number
  who: 'bot' | 'user'
  text: string
  links?: KBLink[]
  chips?: string[]
  /** a walkthrough this answer can show, offered as a button */
  walk?: WalkId
}

let uid = 0
const nid = () => ++uid
const MAX_LEN = 1500

/** The topics offered up front, in the order someone meets them · the game
 *  first (it is the first button of the bar), then the training, then paying. */
const START_CHIPS = ['whatsnew', 'start', 'studios', 'teams', 'budget', 'training', 'trades', 'lessons', 'grades', 'pricing', 'buy', 'signin', 'settings']

/** Questions people actually ask, in their own words · one tap fills them in.
 *  Each one is written to land on its topic in the local answers, so a tap
 *  answers at once, without a model. */
const SUGGESTIONS = [
  { en: "What's new this week?", fr: 'Quoi de neuf cette semaine ?' },
  { en: 'How do I play Dojoburo?', fr: 'Comment joue-t-on à Dojoburo ?' },
  { en: 'What are tokens for in the game?', fr: 'À quoi servent les tokens dans le jeu ?' },
  { en: 'Where do I start the training?', fr: 'Par où commencer la formation ?' },
  { en: 'How much does it cost?', fr: 'Combien cela coûte-t-il ?' },
  { en: 'How does buying work?', fr: "Comment se passe l'achat ?" },
  { en: 'Where is my progress saved?', fr: 'Où est gardée ma progression ?' },
  { en: 'How do I get the black belt?', fr: 'Comment obtenir la ceinture noire ?' },
  { en: 'How do I turn off the animations?', fr: 'Comment désactiver les animations ?' },
]

/** Every walkthrough, offered as a shortcut in the rail. */
const WALK_IDS: WalkId[] = ['overview', 'company', 'teams', 'apps']

function LinkButton({ link }: { link: KBLink }) {
  const external = link.external
  return (
    <a
      className="sb-link"
      href={link.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {link.label}
      <span aria-hidden>{external ? ' ↗' : ' →'}</span>
    </a>
  )
}

export function SupportBot({ embedded = false }: { embedded?: boolean }) {
  const [open, setOpen] = useState(embedded)
  const [busy, setBusy] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([])
  // the walkthrough currently playing over the chat, if any
  const [walk, setWalk] = useState<WalkId | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const greeted = useRef(false)
  const lang = useLang()
  const t = useT()
  // LA PREMIÈRE PHRASE SUIT L'APP · la dernière mise à jour s'y ajoute d'elle-même
  const hello = [pick(GREETING, lang), whatsNewLine(lang === 'fr' ? 'fr' : 'en')].filter(Boolean).join('\n\n')
  // LA PASTILLE · une mise à jour que ce navigateur n'a pas encore vue
  const [unseen, setUnseen] = useState(() => {
    try { return !!LATEST_UPDATE && localStorage.getItem('dojobot-seen') !== LATEST_UPDATE.id } catch { return false }
  })
  // LA BULLE D'ACCUEIL · une fois par visite, quelques secondes, puis elle s'en va
  const [tip, setTip] = useState(false)
  useEffect(() => {
    if (embedded) return
    let seen = false
    try { seen = sessionStorage.getItem('dojobot-tip') === '1' } catch { /* stockage refusé */ }
    if (seen) return
    const a = setTimeout(() => setTip(true), 2500)
    const b = setTimeout(() => setTip(false), 9500)
    try { sessionStorage.setItem('dojobot-tip', '1') } catch { /* stockage refusé */ }
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [embedded])
  const openBot = () => {
    setTip(false); setOpen(true); setUnseen(false)
    try { if (LATEST_UPDATE) localStorage.setItem('dojobot-seen', LATEST_UPDATE.id) } catch { /* stockage refusé */ }
  }

  useEffect(() => {
    if (open && !greeted.current) {
      greeted.current = true
      setMsgs([{ id: nid(), who: 'bot', text: hello, chips: START_CHIPS }])
    }
  }, [open])

  // full screen means the page behind must not scroll under it
  useEffect(() => {
    if (embedded || !open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [embedded, open])

  // Escape closes the chat (the walkthrough closes itself first)
  useEffect(() => {
    if (embedded || !open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && !walk) setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [embedded, open, walk])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs, busy])

  const pushBot = (m: Omit<Msg, 'id' | 'who'>) => setMsgs((s) => [...s, { id: nid(), who: 'bot', ...m }])

  // LA RÉPONSE PASSE PAR topicIn · le robot répondait en anglais sur une page
  // française, parce que ces deux fonctions lisaient le sujet brut. C'est le
  // seul endroit où la réponse est choisie, donc c'est le seul endroit à
  // corriger.
  const answerTopic = (id: string) => {
    const k = TOPIC_BY_ID[id]
    if (!k) return
    const x = topicIn(k, lang)
    pushBot({ text: x.answer, links: x.links, chips: x.follow, walk: x.walk })
  }

  const onChip = (id: string) => {
    const k = TOPIC_BY_ID[id]
    if (!k || busy) return
    setMsgs((s) => [...s, { id: nid(), who: 'user', text: topicIn(k, lang).chip }])
    setTimeout(() => answerTopic(id), 120)
  }

  const send = async (raw?: string) => {
    const text = (raw ?? input).trim().slice(0, MAX_LEN)
    if (!text || busy) return
    setInput('')
    setMsgs((s) => [...s, { id: nid(), who: 'user', text }])

    // a named app → deep-link to its dedicated step-by-step setup page
    const conn = matchConnector(text)
    const topic = matchTopic(text)
    // prefer the connector reply when the app name is the clear subject (no
    // stronger generic topic like pricing/security also matched)
    if (conn && (!topic || ['tools', 'setup', 'start', 'jobs', 'guide'].includes(topic.id))) {
      const r = connectorReply(conn, lang)
      setTimeout(() => pushBot({ text: r.text, links: r.links, chips: ['setup', 'tools', 'security'], walk: 'apps' }), 150)
      return
    }

    // free path first: answer common questions from the local KB
    if (topic) {
      setTimeout(() => answerTopic(topic.id), 150)
      return
    }

    // escalate to the server-side model (free-tier providers first)
    setBusy(true)
    const history = [...msgs, { id: 0, who: 'user' as const, text }]
      .filter((m) => m.text)
      .slice(-8)
      .map((m) => ({ role: m.who === 'user' ? ('user' as const) : ('assistant' as const), content: m.text }))
    const reply = await askCascade(history)
    setBusy(false)

    if (reply) {
      pushBot({ text: reply.text, chips: ['start', 'studios', 'pricing'] })
    } else {
      pushBot({
        text: t('sb.noReach'),
        chips: START_CHIPS,
      })
    }
  }

  const reset = () => {
    setMsgs([{ id: nid(), who: 'bot', text: hello, chips: START_CHIPS }])
    setInput('')
  }

  return (
    <>
      {!embedded && !open && (
        // UNE VRAIE BULLE DE CHAT · demandé : « fais une vraie bulle de chat ».
        // Le bouton était un disque dont un coin carré devait figurer la queue,
        // ce qui se lisait comme une tache. C'est maintenant la forme que tout
        // le monde reconnaît : une bulle arrondie, sa queue en bas à droite, et
        // trois points de conversation. Le nom reste annoncé au lecteur
        // d'écran par l'étiquette du bouton.
        // LE BOUTON A UN VISAGE · demandé : « créé l'avatar du Dojo bot ajoute un
        // peu de fun dans l'UI ». Dojobot lui-même, qui flotte dans sa bulle ; une
        // pastille signale une mise à jour pas encore vue, et une bulle se
        // présente une fois par visite.
        <div className="sb-launch-wrap">
          {tip && (
            <button className="sb-tip" onClick={openBot}>
              {lang === 'fr' ? 'Une question ? Je suis Dojobot.' : "A question? I'm Dojobot."}
            </button>
          )}
          <button className="sb-launch sb-launch-bot" onClick={openBot} aria-label={`Dojobot · ${t('sb.ask')}`}>
            <span className="sb-launch-av" aria-hidden="true"><LiveChibi spec={DOJOBOT} scale={2} seed="dojobot" /></span>
            {unseen && <i className="sb-launch-dot" aria-hidden="true" />}
          </button>
        </div>
      )}

      {open && (
        <section className={`sb-panel${embedded ? ' sb-embed' : ' sb-full'}`} role="dialog" aria-label="Dojobot">
          <header className="sb-head">
            <span className="sb-avatar sb-avatar-bot" aria-hidden="true"><LiveChibi spec={DOJOBOT} scale={2} seed="dojobot-head" /></span>
            <div className="sb-title">
              <strong>Dojobot</strong>
              <span className="sb-status"><i /> {t('sb.online')}</span>
            </div>
            {msgs.length > 1 && <button className="sb-reset" onClick={reset}>{t('sb.newChat')}</button>}
            {!embedded && <button className="sb-x" onClick={() => setOpen(false)} aria-label={t('header.close')}>×</button>}
          </header>

          <div className="sb-main">
            {/* the rail · every topic and every walkthrough, one tap away */}
            {!embedded && (
              <aside className="sb-rail">
                <span className="sb-rail-h">{t('sb.watchIt')}</span>
                <div className="sb-rail-walks">
                  {WALK_IDS.map((w) => (
                    <button key={w} className="sb-walk" onClick={() => setWalk(w)}>
                      <BauhausIcon className="sb-walk-play" name="play" size={12} />
                      <span>{walkIn(WALKS[w], baseLang(lang)).title}</span>
                    </button>
                  ))}
                </div>
                <span className="sb-rail-h">{t('sb.topics')}</span>
                <div className="sb-rail-topics">
                  {KB.map((k) => (
                    <button key={k.id} className="sb-railtopic" disabled={busy} onClick={() => onChip(k.id)}>{topicIn(k, lang).chip}</button>
                  ))}
                </div>
              </aside>
            )}

            <div className="sb-convo">
              <div className="sb-body" ref={scrollRef}>
                {/* QUOI DE NEUF · la dernière mise à jour, lue dans data/updates */}
                {msgs.length <= 1 && LATEST_UPDATE && (
                  <button className="sb-new" onClick={() => onChip('whatsnew')} disabled={busy}>
                    <span className="sb-new-k">{lang === 'fr' ? 'Quoi de neuf' : "What's new"}</span>
                    <b>{pick(LATEST_UPDATE.title, lang)}</b>
                    <span>{pick(LATEST_UPDATE.body, lang)}</span>
                  </button>
                )}
                {msgs.map((m) => (
                  <div key={m.id} className={`sb-row ${m.who}`}>
                    {m.who === 'bot' && <span className="sb-mini" aria-hidden="true"><LiveChibi spec={DOJOBOT} scale={1} seed={`m${m.id}`} /></span>}
                    <div className="sb-bubble">
                      {m.text}
                      {m.links && m.links.length > 0 && (
                        <div className="sb-links">
                          {m.links.map((l) => <LinkButton key={l.href} link={l} />)}
                        </div>
                      )}
                    </div>

                    {/* the answer has a walkthrough · offer to play it here */}
                    {m.walk && (
                      <button className="sb-watch" onClick={() => setWalk(m.walk!)}>
                        <BauhausIcon name="play" size={12} /> {t('sb.watchIt')} · {walkIn(WALKS[m.walk], baseLang(lang)).title}
                      </button>
                    )}

                    {m.chips && m.chips.length > 0 && (
                      <div className="sb-chips">
                        {m.chips.map((id) => (
                          <button key={id} className="sb-chip" onClick={() => onChip(id)} disabled={busy}>
                            {TOPIC_BY_ID[id] ? topicIn(TOPIC_BY_ID[id], lang).chip : id}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {busy && (
                  <div className="sb-row bot">
                    <span className="sb-mini is-thinking" aria-hidden="true"><LiveChibi spec={DOJOBOT} scale={1} seed="typing" /></span>
                    <div className="sb-bubble sb-typing"><span /><span /><span /></div>
                  </div>
                )}
              </div>

              {/* one tap fills the box with a real question */}
              {msgs.length <= 1 && (
                <div className="sb-sugg">
                  {SUGGESTIONS.map((sq) => {
                    const q = pick(sq, lang)
                    return <button key={q} className="sb-suggq" onClick={() => void send(q)} disabled={busy}>{q}</button>
                  })}
                </div>
              )}

              <form className="sb-input" onSubmit={(e) => { e.preventDefault(); void send() }}>
                <input
                  ref={inputRef}
                  value={input}
                  maxLength={MAX_LEN}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t('sb.placeholder')}
                  aria-label={t('sb.ask')}
                />
                <button type="submit" disabled={busy || !input.trim()} aria-label={t('sb.send')}>→</button>
              </form>
              <div className="sb-foot">{t('sb.foot')}</div>
            </div>
          </div>
        </section>
      )}

      {walk && <TutorialOverlay walk={walk} onClose={() => setWalk(null)} />}
    </>
  )
}
