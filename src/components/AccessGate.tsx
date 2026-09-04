import { useEffect, useRef, useState } from 'react'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'

// The private beta door.
//
// Nothing is reachable until the code is entered, and once it is the browser
// remembers — a gate you re-cross on every visit stops being a door and starts
// being a wall.
//
// Be clear about what this is: the code ships inside the JavaScript bundle, so
// anyone who opens the network tab can read it. That makes this a "not for the
// public yet" sign, which is exactly what a private demo needs, and NOT a
// security boundary. Nothing behind it should be anything a determined stranger
// must not see. Moving the check to the server (a small /api endpoint holding
// the code in an env var) is the upgrade when that stops being true.
const CODE = '1974'
const KEY = 'dojoburo.beta'

/** true once this browser has been let in */
export function betaUnlocked(): boolean {
  try { return localStorage.getItem(KEY) === CODE } catch { return true }
}

export function AccessGate({ onOpen }: { onOpen: () => void }) {
  const [value, setValue] = useState('')
  const [wrong, setWrong] = useState(false)
  const input = useRef<HTMLInputElement>(null)

  // the field is the only thing on screen · put the cursor in it
  useEffect(() => { input.current?.focus() }, [])

  // nothing behind this scrolls while it is up
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.trim() !== CODE) {
      setWrong(true)
      setValue('')
      input.current?.focus()
      return
    }
    try { localStorage.setItem(KEY, CODE) } catch { /* a private window still gets in, just not remembered */ }
    onOpen()
  }

  return (
    <div className="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <form className="gate-card" onSubmit={submit}>
        <span className="gate-mark"><Logo size={54} /></span>
        <Wordmark className="gate-name" />

        <h1 className="gate-title" id="gate-title">Private access to Dojoburo Beta version</h1>
        <p className="gate-lead">Enter the access code you were given.</p>

        <input
          ref={input}
          className={`gate-input${wrong ? ' wrong' : ''}`}
          type="password"
          inputMode="numeric"
          autoComplete="off"
          aria-label="Access code"
          aria-invalid={wrong}
          placeholder="Access code"
          value={value}
          onChange={(e) => { setValue(e.target.value); setWrong(false) }}
        />

        {/* the message replaces nothing and moves nothing · the card keeps its height */}
        <span className={`gate-msg${wrong ? ' on' : ''}`} role="alert">
          {wrong ? 'That code is not right. Try again.' : ' '}
        </span>

        <button className="gate-go" type="submit" disabled={!value.trim()}>Enter</button>
      </form>
    </div>
  )
}
