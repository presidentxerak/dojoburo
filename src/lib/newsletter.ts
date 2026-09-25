// L'ADRESSE DU WEEK-END GRATUIT · envoyée au serveur (api/newsletter), avec le
// consentement à la newsletter tel qu'il a été donné, case cochée ou non.
//
// On n'attend pas la réponse pour ouvrir la formation : l'accès gratuit ne
// dépend ni du réseau ni de la base. Si l'envoi échoue, rien n'est perdu pour
// l'élève ; seule la collecte manque, et l'écran ne prétend pas le contraire.
import { apiFetch } from './apiFetch'
import { getLang } from '../i18n'

export type SignupSource = 'weekend' | 'landing' | 'profile'

export async function sendSignup(email: string, newsletter: boolean, source: SignupSource): Promise<boolean> {
  try {
    const r = await apiFetch('/api/newsletter', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ email: email.trim(), newsletter, lang: getLang(), source }),
    })
    const j = await r.json().catch(() => ({}))
    return r.ok && j?.ok === true
  } catch {
    return false
  }
}
