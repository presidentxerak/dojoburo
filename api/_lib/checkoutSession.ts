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

// LES COURS VENDUS À PART · « coder une app » et « coder une app avec
// Lovable ». Recopiés de data/courses pour la même raison que les métiers, et
// vérifiés par scripts/test-sim contre la liste du programme.
export const BUY_COURSES: ReadonlySet<string> = new Set([
  'coder-une-app', 'coder-avec-lovable',
  'ecrire-un-livre',
  'storyboard',
  'bd-manga',
  'flow-ux',
  'architecture-logicielle',
  'comptabilite',
  'images-ia',
  'logo-charte',
  'design-system-figma',
  'ia-locale',
  'business-ia',
  'copywriting',
])

/** LE NOM DE CHAQUE TEMPLE, tel que l'acheteur le lit sur la page de paiement
 *  Stripe et sur son reçu · demandé : « Un temple (une formation) à 49€ ».
 *  Un seul produit Stripe vend tous les temples (STRIPE_PRICE_TEMPLE) ; c'est
 *  ce nom, posé dans le texte de la page de paiement et dans la description du
 *  paiement, qui dit lequel. Recopié des titres de data/packs pour la même
 *  raison que les métiers, et vérifié par scripts/test-pricing. La clé est
 *  'path', l'identifiant du métier, ou celui du cours. */
export const TEMPLE_NAMES: Readonly<Record<string, string>> = {
  path: "Faire travailler l'IA : la formation complète",
  'coder-une-app': 'Coder une app avec Claude Code',
  'coder-avec-lovable': 'Créer une app sans coder avec Lovable',
  'ecrire-un-livre': "Écrire un livre de A à Z avec l'IA",
  'storyboard': 'Storyboard pour le cinéma et la pub',
  'bd-manga': "Créer une bande dessinée ou un manga avec l'IA",
  'flow-ux': "Concevoir un flow UX avec l'IA",
  'architecture-logicielle': "Architecture logicielle avec l'IA",
  'comptabilite': "Tenir sa comptabilité de A à Z avec l'IA",
  'images-ia': 'Images IA de haute qualité : styles, Midjourney, retouche',
  'logo-charte': "Logotype et charte graphique avec l'IA",
  'design-system-figma': 'Design system de A à Z pour Figma',
  'ia-locale': "L'IA en local, open source et hors ligne",
  'business-ia': "Business et monétisation avec l'IA",
  'copywriting': "Copywriting et vente avec l'IA",
  growth: "L'IA pour les growth marketers",
  comms: "L'IA pour la communication",
  founder: "L'IA pour les fondateurs",
  product: "L'IA pour les chefs de produit",
  sales: "L'IA pour les commerciaux",
  assistant: "L'IA pour les assistants de direction",
  designer: "L'IA pour les designers",
  teacher: "L'IA pour les enseignants",
  student: "L'IA pour les étudiants",
  scientist: "L'IA pour les scientifiques",
  developer: "L'IA pour les développeurs",
  recruiter: "L'IA pour les recruteurs",
  lawyer: "L'IA pour les juristes",
  consultant: "L'IA pour les consultants",
}

/** Un identifiant de session Stripe Checkout · « cs_… ». */
export const isCheckoutSessionId = (v: unknown): v is string =>
  typeof v === 'string' && /^cs_[A-Za-z0-9_]+$/.test(v)

/** Ce qu'une session dit, une fois lue · rien d'autre ne sort de Stripe. */
export interface CheckoutVerdict {
  /** PAYÉ, ET SEULEMENT PAYÉ · une session ouverte ou expirée n'ouvre rien. */
  paid: boolean
  /** 'pass' · le Pass Dojo, qui ouvre tous les temples (voir data/plans) */
  plan: 'path' | 'trade' | 'course' | 'pass' | null
  trade: string | null
  /** le cours payé, quand plan vaut 'course' */
  course: string | null
}

/** La lecture d'une session brute renvoyée par Stripe · pure, testable. */
export function readCheckoutSession(r: any): CheckoutVerdict {
  const plan = String(r?.metadata?.plan || '')
  const trade = String(r?.metadata?.trade || '')
  const course = String(r?.metadata?.course || '')
  return {
    paid: r?.payment_status === 'paid',
    plan: plan === 'path' || plan === 'trade' || plan === 'course' || plan === 'pass' ? plan : null,
    trade: BUY_TRADES.has(trade) ? trade : null,
    course: BUY_COURSES.has(course) ? course : null,
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
