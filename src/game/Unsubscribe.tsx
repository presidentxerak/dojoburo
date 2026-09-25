// LA DÉSINSCRIPTION DE LA NEWSLETTER · le lien des e-mails mène ici.
//
// Un clic suffit : la page lit l'adresse et le jeton signé dans l'adresse,
// les envoie à api/newsletter, et dit ce qui s'est passé. Pas de compte à
// ouvrir, pas de raison à donner.
import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { B, say } from '../data/bilingual'
import { Lnk } from '../lib/router'
import { Logo } from '../components/Logo'

const U = {
  title: B('Newsletter', 'Newsletter'),
  working: B('Unsubscribing...', 'Désinscription en cours...'),
  done: B('Your address is unsubscribed. You will no longer receive the DojoBuro newsletter.', 'Votre adresse est désinscrite de la newsletter DojoBuro. Vous ne la recevrez plus.'),
  bad: B('This link is not valid, or has already been used.', "Ce lien n'est pas valide, ou a déjà servi."),
  off: B('The server cannot handle this right now. Try again later.', 'Le serveur ne peut pas traiter la demande pour le moment. Réessayez plus tard.'),
  back: B('Back to DojoBuro', 'Retour à DojoBuro'),
}

export function UnsubscribePage() {
  const lang = useLang()
  const [state, setState] = useState<'working' | 'done' | 'bad' | 'off'>('working')
  useEffect(() => {
    const q = new URLSearchParams(location.search)
    const email = q.get('email') || ''
    const token = q.get('token') || ''
    if (!email || !token) { setState('bad'); return }
    void fetch(`/api/newsletter?action=unsubscribe&email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`)
      .then(async (r) => {
        const j = await r.json().catch(() => ({}))
        setState(r.ok && j?.ok ? 'done' : r.status === 503 ? 'off' : 'bad')
      })
      .catch(() => setState('off'))
  }, [])
  return (
    <div className="gm promo">
      <main className="promo-main unsub">
        <Logo size={40} />
        <h1 className="promo-h2">{say(U.title, lang)}</h1>
        <p className="promo-lead">{say(U[state], lang)}</p>
        <Lnk className="gm-cta" href="/decouvrir">{say(U.back, lang)}</Lnk>
      </main>
    </div>
  )
}
