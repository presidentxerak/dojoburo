// LA PORTE DE LA BÊTA · demandé : « On va bloquer l'accès à l'app avec une page
// avec un code d'accès à 4 chiffres 1976 et le logo animé le nom de la marque
// en-dessous et la mention Beta gate : dans le fond de la page en full-screen
// on reprend le hero et sa baseline ».
//
// Une porte de présentation, côté navigateur : elle tient l'app fermée tant que
// le code n'est pas saisi, puis s'en souvient sur cet appareil. Ce n'est pas un
// contrôle d'accès au sens de la sécurité (le code voyage avec la page) : les
// données réservées restent protégées par le serveur, comme avant.
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Logo } from './Logo'
import { Wordmark } from './Wordmark'
import { useLang } from '../i18n'
import { B, say } from '../data/bilingual'
import { LP } from '../data/landing'
import { HeroTemple } from '../game/Promo'

export const BETA_CODE = '1976'
const KEY = 'dojo-beta-ok'

const GT = {
  beta: B('Beta', 'Bêta'),
  lead: B('Private beta. Enter your 4-digit access code.', 'Bêta privée. Saisissez votre code d\'accès à 4 chiffres.'),
  label: B('Access code', 'Code d\'accès'),
  wrong: B('That code is not the right one. Try again.', 'Ce code n\'est pas le bon. Réessayez.'),
  enter: B('Enter', 'Entrer'),
}

const isOpen = () => { try { return localStorage.getItem(KEY) === '1' } catch { return false } }

export function BetaGate({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(isOpen)
  if (open) return <>{children}</>
  return <Gate onOpen={() => { try { localStorage.setItem(KEY, '1') } catch { /* navigation privée · la porte se rouvrira */ } setOpen(true) }} />
}

function Gate({ onOpen }: { onOpen: () => void }) {
  const lang = useLang()
  const s = (b: { en: string; fr: string }) => say(b, lang)
  const [code, setCode] = useState('')
  const [wrong, setWrong] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const input = useRef<HTMLInputElement>(null)
  useEffect(() => { input.current?.focus() }, [])

  const check = (v: string) => {
    if (v.length < 4) return
    if (v === BETA_CODE) { setLeaving(true); setTimeout(onOpen, 420) }
    else { setWrong(true); setTimeout(() => { setCode(''); input.current?.focus() }, 450) }
  }

  return (
    <div className={`bg-gate${leaving ? ' is-leaving' : ''}`}>
      {/* LE FOND · le hero de la présentation et sa baseline, plein écran */}
      <div className="bg-hero" aria-hidden="true">
        <div className="bg-hero-t">
          <h2 className="bg-hero-h">{s(LP.h1)}</h2>
          <p className="bg-hero-sub">{s(LP.sub)}</p>
        </div>
        <div className="bg-hero-art"><HeroTemple /></div>
      </div>

      <main className="bg-card" role="dialog" aria-modal="true" aria-labelledby="bg-brand">
        <div className="bg-logo"><Logo size={88} /></div>
        <h1 className="bg-brand" id="bg-brand"><Wordmark /></h1>
        <span className="bg-pill">{s(GT.beta)}</span>
        <p className="bg-lead">{s(GT.lead)}</p>
        <form className={`bg-form${wrong ? ' is-wrong' : ''}`} onSubmit={(e) => { e.preventDefault(); check(code) }}>
          <label className="bg-boxes" onClick={() => input.current?.focus()}>
            <span className="bg-sr">{s(GT.label)}</span>
            <input
              ref={input}
              className="bg-input"
              value={code}
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="[0-9]*"
              maxLength={4}
              aria-invalid={wrong}
              onChange={(e) => {
                const v = e.target.value.replace(/\D/g, '').slice(0, 4)
                setWrong(false); setCode(v); if (v.length === 4) check(v)
              }}
            />
            {[0, 1, 2, 3].map((k) => (
              <span key={k} className={`bg-box${code[k] ? ' is-full' : ''}${code.length === k ? ' is-next' : ''}`} aria-hidden="true">
                {code[k] ?? ''}
              </span>
            ))}
          </label>
          <p className="bg-wrong" role="alert">{wrong ? s(GT.wrong) : ''}</p>
          <button className="bg-go" type="submit" disabled={code.length < 4}>{s(GT.enter)}</button>
        </form>
      </main>
    </div>
  )
}
