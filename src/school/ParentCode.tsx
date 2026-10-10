// LA SAISIE DU CODE PARENT · quatre cases, comme la porte de la bêta. Le code
// est vérifié par school/progress (condensé SHA-256, cinq essais puis une
// minute d'attente).
import { useEffect, useRef, useState } from 'react'
import { lockedFor } from './progress'
import { say } from '../data/bilingual'
import { ST } from './text'

export function ParentCode({ label, onSubmit, autoFocus = false }: {
  label: string
  /** rend vrai si le code est accepté */
  onSubmit: (code: string) => Promise<boolean>
  autoFocus?: boolean
}) {
  const lang = 'fr' as const
  const [code, setCode] = useState('')
  const [state, setState] = useState<'idle' | 'busy' | 'wrong' | 'locked'>('idle')
  const input = useRef<HTMLInputElement>(null)
  useEffect(() => { if (autoFocus) input.current?.focus() }, [autoFocus])
  const submit = async (v: string) => {
    if (lockedFor() > 0) { setState('locked'); return }
    setState('busy')
    const ok = await onSubmit(v)
    if (!ok) { setState(lockedFor() > 0 ? 'locked' : 'wrong'); setCode(''); input.current?.focus() }
    else setState('idle')
  }
  return (
    <div className={`sc-code${state === 'wrong' ? ' is-wrong' : ''}`}>
      <label className="sc-code-boxes" onClick={() => input.current?.focus()}>
        <span className="bg-sr">{label}</span>
        <input
          ref={input}
          className="bg-input"
          type="password"
          value={code}
          inputMode="numeric"
          autoComplete="off"
          maxLength={4}
          onChange={(e) => {
            const v = e.target.value.replace(/\D/g, '').slice(0, 4)
            setCode(v); if (state !== 'busy') setState('idle')
            if (v.length === 4) void submit(v)
          }}
        />
        {[0, 1, 2, 3].map((k) => (
          <span key={k} className={`sc-code-box${code[k] ? ' is-full' : ''}${code.length === k ? ' is-next' : ''}`} aria-hidden="true" />
        ))}
      </label>
      <p className="sc-code-msg" role="alert">
        {state === 'wrong' ? say(ST.wrongCode, lang) : state === 'locked' ? `${say(ST.locked, lang)} ${lockedFor()} ${say(ST.seconds, lang)}.` : label}
      </p>
    </div>
  )
}
