// Le retour d'une autorisation, et l'endroit où il atterrit.
//
// Le fournisseur renvoie vers la racine du site avec `#connected=notion`. Cette
// adresse n'est aucune des routes de l'app : elle tombait donc sur la PAGE
// D'ACCUEIL — le fondateur autorisait Notion et se retrouvait sur l'argumentaire
// commercial, sans un mot lui disant que ça avait marché. Le message de
// confirmation existait bien, dans App.tsx, sur un écran où l'on ne passait pas.
//
// Maintenant que l'autorisation se déroule dans sa propre fenêtre (workApi ·
// startConnect), ce retour doit faire une chose de plus : prévenir la fenêtre
// qui l'a ouverte, puis disparaître. Sans cela la connexion réussirait dans une
// fenêtre que personne ne regarde, et l'app continuerait d'afficher « non
// connecté » jusqu'au prochain rechargement.
//
// Deux chemins, parce qu'il y a deux façons d'arriver ici :
//
//   · fenêtre fille — on prévient la fenêtre mère et on se ferme.
//   · même onglet (bloqueur de fenêtres) — on dépose le résultat et on rejoint
//     l'app, qui l'affiche en arrivant.

export interface ConnectResult {
  ok: boolean
  /** l'identifiant du connecteur, ou le message d'erreur */
  detail: string
}

const HANDOFF = 'dojoburo.connect.result'
const CHANNEL = 'dojoburo-connect'

/** Lit `#connected=…` / `#connect_error=…` dans l'adresse courante. */
export function readConnectHash(hash = location.hash): ConnectResult | null {
  const okm = hash.match(/#connected=([\w.-]+)/)
  if (okm) return { ok: true, detail: okm[1] }
  const errm = hash.match(/#connect_error=([^&]+)/)
  if (errm) return { ok: false, detail: safeDecode(errm[1]) }
  return null
}

const safeDecode = (s: string): string => {
  try { return decodeURIComponent(s) } catch { return s }
}

/**
 * À appeler AVANT de rendre quoi que ce soit.
 *
 * Rend true quand cette page n'a rien à afficher — elle est la fenêtre
 * d'autorisation, elle a fait son travail et elle se ferme. Rendre l'app
 * pendant ce temps ferait clignoter la page d'accueil dans la fenêtre fille
 * juste avant sa fermeture.
 */
export function handleConnectReturn(): boolean {
  const r = readConnectHash()
  if (!r) return false

  const opener = safeOpener()
  if (opener) {
    try {
      opener.postMessage({ channel: CHANNEL, ...r }, location.origin)
    } catch {
      /* la fenêtre mère a été fermée entre-temps · on continue et on se ferme */
    }
    try { window.close() } catch { /* certains navigateurs refusent */ }
    return true
  }

  // Pas de fenêtre mère : le bouton est retombé sur la navigation classique.
  // On garde le résultat le temps d'un saut d'écran plutôt que de le laisser
  // dans l'adresse, où un rechargement le rejouerait indéfiniment.
  try { sessionStorage.setItem(HANDOFF, JSON.stringify(r)) } catch { /* mode privé */ }
  location.replace(`${location.pathname}${location.search}#app`)
  return true
}

/** `window.opener` lève sur certaines politiques d'origine · on ne se fie à rien. */
function safeOpener(): Window | null {
  try {
    const o = window.opener as Window | null
    return o && o !== window ? o : null
  } catch {
    return null
  }
}

/**
 * Le résultat laissé par le chemin « même onglet », consommé UNE fois.
 *
 * Le retirer à la lecture est le point important : sans cela, revenir sur
 * l'app rejouerait « Notion est connecté » à chaque ouverture d'onglet.
 */
export function takeConnectResult(): ConnectResult | null {
  try {
    const raw = sessionStorage.getItem(HANDOFF)
    if (!raw) return null
    sessionStorage.removeItem(HANDOFF)
    const r = JSON.parse(raw)
    return typeof r?.ok === 'boolean' ? r as ConnectResult : null
  } catch {
    return null
  }
}

/**
 * Côté fenêtre mère : écouter la fille.
 *
 * `event.origin` est vérifié parce que n'importe quelle page peut poster un
 * message à une fenêtre qu'elle a ouverte. Sans ce contrôle, un site tiers
 * pourrait faire afficher « Notion est connecté » et déclencher un rechargement
 * des connexions à volonté.
 *
 * Rend la fonction qui retire l'écouteur.
 */
export function onConnectResult(fn: (r: ConnectResult) => void): () => void {
  const h = (e: MessageEvent) => {
    if (e.origin !== location.origin) return
    const d = e.data as { channel?: string; ok?: boolean; detail?: string } | null
    if (!d || d.channel !== CHANNEL || typeof d.ok !== 'boolean') return
    fn({ ok: d.ok, detail: String(d.detail ?? '') })
  }
  window.addEventListener('message', h)
  return () => window.removeEventListener('message', h)
}
