import { useEffect, useRef, useState } from 'react'
import { TOPIC_BY_ID, matchTopic, matchConnector, connectorReply, GREETING, type KBLink } from '../support/knowledge'
import { askCascade } from '../support/askCascade'

interface Msg {
  id: number
  who: 'bot' | 'user'
  text: string
  links?: KBLink[]
  chips?: string[]
}

let uid = 0
const nid = () => ++uid
const MAX_LEN = 1500
const START_CHIPS = ['guide', 'start', 'setup', 'skins', 'cost', 'pricing', 'tools']

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

/** DojoBuro support assistant. Answers from the free local knowledge base first
 *  and only escalates to the server-side LLM cascade for unmatched questions. */
export function SupportBot({ embedded = false }: { embedded?: boolean }) {
  const [open, setOpen] = useState(embedded)
  const [busy, setBusy] = useState(false)
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState<Msg[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const greeted = useRef(false)

  useEffect(() => {
    if (open && !greeted.current) {
      greeted.current = true
      setMsgs([{ id: nid(), who: 'bot', text: GREETING, chips: START_CHIPS }])
    }
  }, [open])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [msgs, busy])

  const pushBot = (m: Omit<Msg, 'id' | 'who'>) => setMsgs((s) => [...s, { id: nid(), who: 'bot', ...m }])

  const answerTopic = (id: string) => {
    const t = TOPIC_BY_ID[id]
    if (!t) return
    pushBot({ text: t.answer, links: t.links, chips: t.follow })
  }

  const onChip = (id: string) => {
    const t = TOPIC_BY_ID[id]
    if (!t || busy) return
    setMsgs((s) => [...s, { id: nid(), who: 'user', text: t.chip }])
    setTimeout(() => answerTopic(id), 120)
  }

  const send = async () => {
    const text = input.trim().slice(0, MAX_LEN)
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
      setTimeout(() => pushBot({ text: r.text, links: r.links, chips: ['setup', 'tools', 'security'] }), 150)
      return
    }

    // free path first: answer common questions from the local KB
    if (topic) {
      setTimeout(() => answerTopic(topic.id), 150)
      return
    }

    // escalate to the server-side cascade (free-tier models first)
    setBusy(true)
    const history = [...msgs, { id: 0, who: 'user' as const, text }]
      .filter((m) => m.text)
      .slice(-8)
      .map((m) => ({ role: m.who === 'user' ? ('user' as const) : ('assistant' as const), content: m.text }))
    const reply = await askCascade(history)
    setBusy(false)

    if (reply) {
      pushBot({ text: reply.text, chips: ['start', 'cost', 'security'] })
    } else {
      pushBot({
        text: "I couldn't reach the assistant just now, but these topics cover most questions. Pick one, or explore the office and help pages.",
        chips: START_CHIPS,
      })
    }
  }

  return (
    <>
      {!embedded && !open && (
        <button className="sb-launch" onClick={() => setOpen(true)} aria-label="Open help & support">
          <span className="sb-face" aria-hidden>◕‿◕</span>
          <span className="sb-launch-label">Help</span>
        </button>
      )}

      {open && (
        <section className={`sb-panel${embedded ? ' sb-embed' : ''}`} role="dialog" aria-label="DojoBuro support assistant">
          <header className="sb-head">
            <span className="sb-avatar" aria-hidden>◕‿◕</span>
            <div className="sb-title">
              <strong>DojoBuro Assistant</strong>
              <span className="sb-status"><i /> online · guided help</span>
            </div>
            {!embedded && <button className="sb-x" onClick={() => setOpen(false)} aria-label="Close">×</button>}
          </header>

          <div className="sb-body" ref={scrollRef}>
            {msgs.map((m) => (
              <div key={m.id} className={`sb-row ${m.who}`}>
                <div className="sb-bubble">
                  {m.text}
                  {m.links && m.links.length > 0 && (
                    <div className="sb-links">
                      {m.links.map((l) => (
                        <LinkButton key={l.href} link={l} />
                      ))}
                    </div>
                  )}
                </div>
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

          <form
            className="sb-input"
            onSubmit={(e) => {
              e.preventDefault()
              void send()
            }}
          >
            <input
              value={input}
              maxLength={MAX_LEN}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about wallets, cost, security…"
              aria-label="Ask the assistant"
            />
            <button type="submit" disabled={busy || !input.trim()} aria-label="Send">→</button>
          </form>
          <div className="sb-foot">Answers may use AI. Never share seeds or passwords here.</div>
        </section>
      )}
    </>
  )
}
