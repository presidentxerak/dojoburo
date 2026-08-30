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
import { TOPIC_BY_ID, KB, matchTopic, matchConnector, connectorReply, GREETING, type KBLink } from '../support/knowledge'
import { askCascade } from '../support/askCascade'
import { TutorialOverlay } from './guide/TutorialOverlay'
import { WALKS, type WalkId } from './guide/tutorialBeats'
import { Logo } from './Logo'

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

/** The topics offered up front, in the order a founder meets them. */
const START_CHIPS = ['start', 'teams', 'budget', 'signin', 'tools', 'studios', 'guide', 'pricing', 'security']

/** Questions people actually ask, in their own words · one tap fills them in. */
const SUGGESTIONS = [
  'How do I create my company?',
  'What is inside a dojo team?',
  'How much will this cost me?',
  'How do I connect Gmail?',
  'Do I need to sign in?',
  'Is my data safe?',
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

  useEffect(() => {
    if (open && !greeted.current) {
      greeted.current = true
      setMsgs([{ id: nid(), who: 'bot', text: GREETING, chips: START_CHIPS }])
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

  const answerTopic = (id: string) => {
    const t = TOPIC_BY_ID[id]
    if (!t) return
    pushBot({ text: t.answer, links: t.links, chips: t.follow, walk: t.walk })
  }

  const onChip = (id: string) => {
    const t = TOPIC_BY_ID[id]
    if (!t || busy) return
    setMsgs((s) => [...s, { id: nid(), who: 'user', text: t.chip }])
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
      const r = connectorReply(conn)
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
      pushBot({ text: reply.text, chips: ['start', 'budget', 'security'] })
    } else {
      pushBot({
        text: "I couldn't reach my brain just now, but these topics cover most questions. Pick one, or watch a walkthrough on the left.",
        chips: START_CHIPS,
      })
    }
  }

  const reset = () => {
    setMsgs([{ id: nid(), who: 'bot', text: GREETING, chips: START_CHIPS }])
    setInput('')
  }

  return (
    <>
      {!embedded && !open && (
        <button className="sb-launch" onClick={() => setOpen(true)} aria-label="Ask Dojobot">
          <Logo size={26} className="sb-face" />
          <span className="sb-launch-label">Dojobot</span>
        </button>
      )}

      {open && (
        <section className={`sb-panel${embedded ? ' sb-embed' : ' sb-full'}`} role="dialog" aria-label="Dojobot">
          <header className="sb-head">
            <Logo size={32} className="sb-avatar" />
            <div className="sb-title">
              <strong>Dojobot</strong>
              <span className="sb-status"><i /> online · ask me anything about DojoBuro</span>
            </div>
            {msgs.length > 1 && <button className="sb-reset" onClick={reset}>New chat</button>}
            {!embedded && <button className="sb-x" onClick={() => setOpen(false)} aria-label="Close">×</button>}
          </header>

          <div className="sb-main">
            {/* the rail · every topic and every walkthrough, one tap away */}
            {!embedded && (
              <aside className="sb-rail">
                <span className="sb-rail-h">Watch it</span>
                <div className="sb-rail-walks">
                  {WALK_IDS.map((w) => (
                    <button key={w} className="sb-walk" onClick={() => setWalk(w)}>
                      <span className="sb-walk-play" aria-hidden>▶</span>
                      <span>{WALKS[w].title}</span>
                    </button>
                  ))}
                </div>
                <span className="sb-rail-h">Topics</span>
                <div className="sb-rail-topics">
                  {KB.map((t) => (
                    <button key={t.id} className="sb-railtopic" disabled={busy} onClick={() => onChip(t.id)}>{t.chip}</button>
                  ))}
                </div>
              </aside>
            )}

            <div className="sb-convo">
              <div className="sb-body" ref={scrollRef}>
                {msgs.map((m) => (
                  <div key={m.id} className={`sb-row ${m.who}`}>
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
                        <span aria-hidden>▶</span> Watch it · {WALKS[m.walk].title}
                      </button>
                    )}

                    {m.chips && m.chips.length > 0 && (
                      <div className="sb-chips">
                        {m.chips.map((id) => (
                          <button key={id} className="sb-chip" onClick={() => onChip(id)} disabled={busy}>
                            {TOPIC_BY_ID[id]?.chip ?? id}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {busy && (
                  <div className="sb-row bot">
                    <div className="sb-bubble sb-typing"><span /><span /><span /></div>
                  </div>
                )}
              </div>

              {/* one tap fills the box with a real question */}
              {msgs.length <= 1 && (
                <div className="sb-sugg">
                  {SUGGESTIONS.map((q) => (
                    <button key={q} className="sb-suggq" onClick={() => void send(q)} disabled={busy}>{q}</button>
                  ))}
                </div>
              )}

              <form className="sb-input" onSubmit={(e) => { e.preventDefault(); void send() }}>
                <input
                  ref={inputRef}
                  value={input}
                  maxLength={MAX_LEN}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything · in your own words"
                  aria-label="Ask Dojobot"
                />
                <button type="submit" disabled={busy || !input.trim()} aria-label="Send">→</button>
              </form>
              <div className="sb-foot">Answers may use AI. Never share keys or passwords here.</div>
            </div>
          </div>
        </section>
      )}

      {walk && <TutorialOverlay walk={walk} onClose={() => setWalk(null)} />}
    </>
  )
}
