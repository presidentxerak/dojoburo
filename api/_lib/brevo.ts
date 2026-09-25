// BREVO · les e-mails de DojoBuro. Demandé : « On utilise Brevo ».
//
// Trois usages, et seulement trois :
//   · la NEWSLETTER · le contact entre dans la liste Brevo SEULEMENT s'il a
//     coché la case (voir api/newsletter) ; une désinscription l'en retire ;
//   · l'e-mail de BIENVENUE · transactionnel, envoyé une fois à l'adresse
//     donnée pour le week-end gratuit, avec le lien de la première leçon.
//     C'est le service demandé, pas de la prospection : il ne dépend pas de
//     la case ;
//   · les NOTIFICATIONS de la communauté · transactionnelles, pour les membres
//     qui les ont laissées activées (voir api/community).
//
// Sans BREVO_API_KEY, rien ne part et rien ne casse : chaque fonction rend
// `false`, et l'appelant continue. Les appels sont bornés dans le temps pour
// qu'un Brevo lent ne retienne pas la réponse de l'élève.
//
// Variables : BREVO_API_KEY (obligatoire pour envoyer), BREVO_LIST_ID (la
// liste de la newsletter), BREVO_SENDER_EMAIL et BREVO_SENDER_NAME (un
// expéditeur validé dans Brevo), PUBLIC_SITE_URL (les liens des e-mails).

const ENV = process.env as Record<string, string | undefined>
const API = 'https://api.brevo.com/v3'
const TIMEOUT_MS = 6000

export const brevoConfigured = (): boolean => !!ENV.BREVO_API_KEY
export const siteUrl = (): string =>
  (ENV.PUBLIC_SITE_URL || ENV.CHECKOUT_SITE_URL || 'https://www.dojoburo.com').replace(/\/$/, '')

async function call(path: string, method: string, body?: unknown): Promise<boolean> {
  const key = ENV.BREVO_API_KEY
  if (!key) return false
  const ctl = new AbortController()
  const t = setTimeout(() => ctl.abort(), TIMEOUT_MS)
  try {
    const r = await fetch(`${API}${path}`, {
      method,
      signal: ctl.signal,
      headers: { 'api-key': key, 'content-type': 'application/json', accept: 'application/json' },
      body: body === undefined ? undefined : JSON.stringify(body),
    })
    return r.ok
  } catch {
    return false
  } finally {
    clearTimeout(t)
  }
}

const listId = (): number | null => {
  const n = Number(ENV.BREVO_LIST_ID)
  return Number.isInteger(n) && n > 0 ? n : null
}

/** Ajouter (ou mettre à jour) un contact dans la liste de la newsletter. */
export function subscribeContact(email: string, lang: 'fr' | 'en', source: string): Promise<boolean> {
  const id = listId()
  if (!id) return Promise.resolve(false)
  return call('/contacts', 'POST', {
    email,
    listIds: [id],
    updateEnabled: true,
    attributes: { LANGUE: lang, SOURCE: source },
  })
}

/** Retirer un contact de la liste de la newsletter. */
export function unsubscribeContact(email: string): Promise<boolean> {
  const id = listId()
  if (!id) return Promise.resolve(false)
  return call(`/contacts/lists/${id}/contacts/remove`, 'POST', { emails: [email] })
}

/** Échapper un texte pour l'HTML d'un e-mail · les noms et titres viennent
 *  des membres, jamais insérés bruts. */
export function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

/** Le gabarit commun · sobre, lisible sur téléphone, un seul bouton. */
export function layout(o: { title: string; lines: string[]; cta: { label: string; href: string }; foot: string }): string {
  const p = o.lines.map((l) => `<p style="margin:0 0 14px;font-size:16px;line-height:1.55;color:#2e2446">${l}</p>`).join('')
  return `<!doctype html><html><body style="margin:0;background:#f4f0ff;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f0ff;padding:24px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:18px;padding:28px">
<tr><td>
<p style="margin:0 0 18px;font-size:14px;font-weight:bold;color:#7c3aed">DojoBuro</p>
<h1 style="margin:0 0 16px;font-size:24px;line-height:1.25;color:#1b1030">${o.title}</h1>
${p}
<p style="margin:22px 0 8px"><a href="${o.cta.href}" style="display:inline-block;padding:14px 22px;border-radius:12px;background:#7c3aed;color:#ffffff;font-weight:bold;text-decoration:none">${o.cta.label}</a></p>
<p style="margin:22px 0 0;font-size:12.5px;line-height:1.5;color:#6b5f8a">${o.foot}</p>
</td></tr></table></td></tr></table></body></html>`
}

/** Un e-mail transactionnel. */
export function sendEmail(o: { to: string; subject: string; html: string }): Promise<boolean> {
  const sender = ENV.BREVO_SENDER_EMAIL
  if (!sender) return Promise.resolve(false)
  return call('/smtp/email', 'POST', {
    sender: { email: sender, name: ENV.BREVO_SENDER_NAME || 'DojoBuro' },
    to: [{ email: o.to }],
    subject: o.subject,
    htmlContent: o.html,
  })
}
