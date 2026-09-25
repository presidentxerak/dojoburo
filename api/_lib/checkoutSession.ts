// LA VÉRIFICATION D'UN PAIEMENT STRIPE · une seule fois, pour deux lecteurs.
//
// Deux fonctions serveur posent la même question à Stripe : « cette session de
// paiement est-elle payée, et pour quoi ? ».
//
//   · api/buy.ts, au retour de paiement (page /merci), pour ouvrir la formation
//     dans le navigateur de l'élève ;
//   · api/profile.ts (?action=claim), pour inscrire ce droit sur le COMPTE de
//     l'élève, afin qu'il le retrouve sur un autre appareil.
//
// Deux copies de cette lecture auraient fini par diverger, et une divergence
// ici a deux formes, toutes deux graves : un droit ouvert sur un navigateur et
// refusé sur le compte, ou l'inverse. La lecture vit donc ici, sans rien qui
// dépende de Node : api/buy.ts tourne sur le runtime edge, api/profile.ts sur
// Node, et les deux importent ce fichier tel quel (fetch, AbortController).

/** Les métiers qu'on peut acheter · recopiés des identifiants de data/trades,
 *  parce qu'une fonction serveur ne lit pas le paquet du navigateur. */
// LA LISTE DES MÉTIERS EN VENTE · recopiée ici parce que les fonctions du
// serveur ne lisent pas les données du jeu. scripts/test-trades vérifie qu'elle
// est identique à celle du programme : un métier affiché qu'on ne peut pas
// acheter, ou l'inverse, serait vu.
export const BUY_TRADES: ReadonlySet<string> = new Set([
  'growth', 'comms', 'founder', 'product', 'sales', 'assistant',
  'designer', 'teacher', 'student', 'scientist', 'developer', 'recruiter', 'lawyer', 'consultant',
])

/** Un identifiant de session Stripe Checkout · « cs_… ». */
export const isCheckoutSessionId = (v: unknown): v is string =>
  typeof v === 'string' && /^cs_[A-Za-z0-9_]+$/.test(v)

/** Ce qu'une session dit, une fois lue · rien d'autre ne sort de Stripe. */
export interface CheckoutVerdict {
  /** PAYÉ, ET SEULEMENT PAYÉ · une session ouverte ou expirée n'ouvre rien. */
  paid: boolean
  plan: 'path' | 'trade' | null
  trade: string | null
}

/** La lecture d'une session brute renvoyée par Stripe · pure, testable. */
export function readCheckoutSession(r: any): CheckoutVerdict {
  const plan = String(r?.metadata?.plan || '')
  const trade = String(r?.metadata?.trade || '')
  return {
    paid: r?.payment_status === 'paid',
    plan: plan === 'path' || plan === 'trade' ? plan : null,
    trade: BUY_TRADES.has(trade) ? trade : null,
  }
}

/** Un appel à Stripe, borné dans le temps · rend null sur toute erreur, pour
 *  ne jamais renvoyer au navigateur une erreur brute qui porterait la clé. */
export async function stripeRequest(path: string, key: string, timeoutMs: number, form?: URLSearchParams): Promise<any | null> {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), timeoutMs)
  try {
    const res = await fetch(`https://api.stripe.com/v1/${path}`, {
      method: form ? 'POST' : 'GET',
      signal: ctrl.signal,
      headers: {
        authorization: `Bearer ${key}`,
        ...(form ? { 'content-type': 'application/x-www-form-urlencoded' } : {}),
      },
      body: form,
    })
    const j = await res.json().catch(() => null)
    return res.ok ? j : null
  } catch {
    return null
  } finally {
    clearTimeout(t)
  }
}

/** Relire une session chez Stripe · null quand Stripe ne répond pas. */
export async function verifyCheckoutSession(id: string, key: string, timeoutMs: number): Promise<CheckoutVerdict | null> {
  const r = await stripeRequest(`checkout/sessions/${encodeURIComponent(id)}`, key, timeoutMs)
  return r ? readCheckoutSession(r) : null
}
