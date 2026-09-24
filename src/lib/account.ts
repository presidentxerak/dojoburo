// LE COMPTE DU JOUEUR · la sauvegarde en ligne, côté navigateur.
//
// SANS CONNEXION, RIEN NE CHANGE. La progression vit dans ce navigateur
// (localStorage), et rien n'est envoyé. Ce fichier ne s'active que si Privy est
// configuré (VITE_PRIVY_APP_ID) ET que l'élève s'est connecté (e-mail ou
// Google). Alors :
//
//   1 · À LA CONNEXION · il rassemble ce que ce navigateur sait (leçons
//       terminées, partie de Dojoburo, pseudonyme du clan), l'envoie au
//       serveur qui le FUSIONNE avec la copie du compte (api/_lib/profile.ts),
//       et réécrit le résultat ici : dans le stockage, et dans les magasins en
//       mémoire (reloadProgress), pour que l'écran change sans recharger.
//       Les formations que le COMPTE a payées sont ouvertes ici (grant).
//   2 · ENSUITE · il relit les trois clés toutes les dix secondes et quand la
//       page passe en arrière-plan ; ce qui a changé part quelques secondes
//       plus tard. Au retour sur la page, il resynchronise, ce qui ramène ce
//       qu'un autre appareil a fait entre-temps.
//   3 · LES REÇUS · un paiement vérifié sur /merci laisse son identifiant de
//       session ici ('dojo.receipts'). Connecté, maintenant ou plus tard,
//       chaque reçu est présenté au serveur, qui relit le paiement chez Stripe
//       et inscrit la formation sur le compte : elle suit alors l'élève sur
//       tous ses appareils.
//
// SE DÉCONNECTER N'EFFACE RIEN · la progression reste dans ce navigateur.
//
// L'accès ne remonte jamais d'ici vers le serveur : il n'y a pas de champ pour
// lui dans ce qui est envoyé, et le serveur ignorerait de toute façon ce qu'on
// y mettrait.
import { useSyncExternalStore } from 'react'
import { apiFetch } from './apiFetch'
import { privyConfigured, privyControls, authSnapshot, onAuth } from '../auth/controls'
import { reloadProgress } from '../academy/progress'
import { grant, giveEmail, readAccess } from '../game/access'

// ---- les clés ------------------------------------------------------------------

/** La progression des cours et du jeu · voir academy/progress. */
const ACADEMY_KEY = 'dojoburo.academy.v1'
/** La partie de Dojoburo · voir sim/SimPage. */
const SIM_KEY = 'dojoburo.sim.v1'
/** Le pseudonyme du clan · voir lib/clan. */
const PSEUDO_KEY = 'dojoburo.clan.pseudo'
/** Quand ce navigateur a vu le pseudonyme changer · pour garder le plus récent. */
const META_KEY = 'dojo.account.meta'
/** Les paiements vérifiés sur ce navigateur, à inscrire sur le compte. */
export const RECEIPTS_KEY = 'dojo.receipts'

const POLL_MS = 10_000
const DEBOUNCE_MS = 3_000
/** au retour sur la page, pas plus d'une resynchronisation par intervalle */
const PULL_MIN_MS = 15_000
const MAX_RECEIPTS = 20

// ---- l'état, pour les écrans ------------------------------------------------------

export type SyncError = 'not_configured' | 'auth' | 'network' | 'too_large' | 'rate' | 'unavailable'

export interface AccountState {
  /** la connexion est-elle possible sur ce déploiement ? */
  enabled: boolean
  /** Privy a démarré · avant, on ne sait pas encore si quelqu'un est connecté */
  ready: boolean
  signedIn: boolean
  email: string
  status: 'idle' | 'syncing' | 'ok' | 'error'
  /** l'heure de la dernière synchronisation réussie · millisecondes */
  at: number | null
  error: SyncError | null
}

let state: AccountState = {
  enabled: privyConfigured(), ready: false, signedIn: false, email: '', status: 'idle', at: null, error: null,
}
const subs = new Set<() => void>()
function setState(patch: Partial<AccountState>) {
  state = { ...state, ...patch }
  subs.forEach((f) => f())
}

/** L'initiale de l'adresse · la pastille ronde de l'en-tête et du profil. */
export const initialOf = (email: string): string => (email.trim()[0] || '·').toUpperCase()

export function useAccount(): AccountState {
  return useSyncExternalStore(
    (f) => { subs.add(f); return () => { subs.delete(f) } },
    () => state,
    () => state,
  )
}

// ---- le stockage -----------------------------------------------------------------

function raw(k: string): string | null {
  try { return localStorage.getItem(k) } catch { return null }
}
function put(k: string, v: string): void {
  try { localStorage.setItem(k, v) } catch { /* navigation privée · rien ne persiste */ }
}
function parse(k: string): unknown {
  const r = raw(k)
  if (!r) return null
  try { return JSON.parse(r) } catch { return null }
}

interface Meta { pseudo: string; at: number }
function readMeta(): Meta | null {
  const m = parse(META_KEY) as Partial<Meta> | null
  return m && typeof m.pseudo === 'string' && typeof m.at === 'number' ? { pseudo: m.pseudo, at: m.at } : null
}

/** Noter quand le pseudonyme a changé sur ce navigateur. Sans trace (premier
 *  passage), la date est inconnue : zéro, pour qu'un pseudonyme déjà sur le
 *  compte l'emporte. */
function observePseudo(): Meta {
  const now = (raw(PSEUDO_KEY) || '').trim()
  const m = readMeta()
  if (m && m.pseudo === now) return m
  const next = { pseudo: now, at: m ? Date.now() : 0 }
  put(META_KEY, JSON.stringify(next))
  return next
}

/** Ce que ce navigateur envoie · jamais d'accès, il n'a pas de place ici. */
function collect() {
  const m = observePseudo()
  return {
    v: 1,
    academy: parse(ACADEMY_KEY),
    sim: parse(SIM_KEY),
    clan: { pseudo: m.pseudo, at: m.at },
  }
}

/** L'empreinte des trois clés · ce qui décide s'il y a quelque chose à envoyer. */
const snapshot = (): string => JSON.stringify([raw(ACADEMY_KEY), raw(SIM_KEY), raw(PSEUDO_KEY)])

// ---- ce que le serveur renvoie --------------------------------------------------

interface ServerAccess { path?: boolean; trades?: string[] }

/** L'accès du COMPTE, appliqué ici · seulement ce qui manque. Une formation
 *  ouverte sur ce navigateur ne se ferme jamais parce que le compte ne la
 *  connaît pas encore (son reçu est peut-être en route). */
function applyAccess(a: ServerAccess | null | undefined) {
  if (!a || typeof a !== 'object') return
  const local = readAccess()
  if (a.path === true && !local.path) grant({ path: true })
  const trades = Array.isArray(a.trades) ? a.trades.filter((x) => typeof x === 'string') : []
  if (trades.length && !local.trade) grant({ trade: trades[trades.length - 1] })
}

function applyData(d: any) {
  if (!d || typeof d !== 'object') return
  if (d.academy && typeof d.academy === 'object') {
    const next = JSON.stringify({ done: d.academy.done ?? [], answers: d.academy.answers ?? {} })
    if (next !== raw(ACADEMY_KEY)) { put(ACADEMY_KEY, next); reloadProgress() }
  }
  // LA PARTIE · une écriture suffit : la page du jeu relit sa sauvegarde en
  // s'ouvrant.
  if (d.sim && typeof d.sim === 'object') {
    const next = JSON.stringify(d.sim)
    if (next !== raw(SIM_KEY)) put(SIM_KEY, next)
  }
  if (d.clan && typeof d.clan.pseudo === 'string' && d.clan.pseudo) {
    if (d.clan.pseudo !== (raw(PSEUDO_KEY) || '').trim()) put(PSEUDO_KEY, d.clan.pseudo)
    put(META_KEY, JSON.stringify({ pseudo: d.clan.pseudo, at: Number(d.clan.at) || 0 }))
  }
}

function errorOf(status: number, j: any): SyncError {
  const e = j && typeof j.error === 'string' ? j.error : ''
  if (e === 'not_configured') return 'not_configured'
  // PAS DE JSON · la fonction n'existe pas sur ce déploiement (un serveur de
  // développement sert la page d'accueil à sa place) · même lecture que le clan.
  if (!j && (status === 200 || status === 404)) return 'not_configured'
  if (status === 401 || e === 'auth') return 'auth'
  if (status === 413 || e === 'too_large') return 'too_large'
  if (status === 429 || e === 'rate') return 'rate'
  return 'unavailable'
}

// ---- la synchronisation ----------------------------------------------------------

/** l'empreinte des clés au dernier accord avec le serveur */
let lastSynced = ''
let inflight: Promise<void> | null = null
let again = false
let pushTimer: ReturnType<typeof setTimeout> | null = null
let pollTimer: ReturnType<typeof setInterval> | null = null

const signedIn = () => authSnapshot().authenticated

async function runSync(opts: { keepalive?: boolean } = {}): Promise<void> {
  setState({ status: 'syncing' })
  const sent = snapshot()
  const body = JSON.stringify({ data: collect() })
  let res: Response
  try {
    res = await apiFetch('/api/profile', {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body,
      // la page se ferme peut-être · la requête doit partir quand même (dans
      // la limite de 64 Ko que le navigateur impose à ce mode)
      keepalive: !!opts.keepalive && body.length < 60_000,
    })
  } catch {
    setState({ status: 'error', error: 'network' })
    return
  }
  let j: any = null
  try { j = await res.json() } catch { /* pas du JSON */ }
  if (!j || j.ok !== true) {
    setState({ status: 'error', error: errorOf(res.status, j) })
    return
  }
  // CE QUI A BOUGÉ PENDANT L'ALLER-RETOUR n'est pas écrasé · une leçon finie
  // pendant la requête serait perdue. On garde la copie locale, et on
  // resynchronise aussitôt : le serveur fusionnera la nouvelle version.
  if (snapshot() === sent) {
    applyData(j.data)
    lastSynced = snapshot()
  } else {
    again = true
  }
  applyAccess(j.access)
  setState({ status: 'ok', at: Date.now(), error: null })
}

/** Synchroniser maintenant · une seule requête à la fois, et une de plus si
 *  quelque chose a changé pendant la première. */
export function syncNow(opts: { keepalive?: boolean } = {}): Promise<void> {
  if (!signedIn()) return Promise.resolve()
  if (pushTimer) { clearTimeout(pushTimer); pushTimer = null }
  if (inflight) { again = true; return inflight }
  inflight = runSync(opts)
    .then(() => claimReceipts())
    .catch(() => { setState({ status: 'error', error: 'network' }) })
    .finally(() => {
      inflight = null
      if (again) { again = false; schedule(1000) }
    })
  return inflight
}

function schedule(ms = DEBOUNCE_MS) {
  if (!signedIn() || pushTimer) return
  pushTimer = setTimeout(() => { pushTimer = null; void syncNow() }, ms)
}

const dirty = () => snapshot() !== lastSynced

function poll() {
  if (signedIn() && dirty()) schedule()
}

function onVisibility() {
  if (!signedIn()) return
  if (document.visibilityState === 'hidden') {
    if (dirty()) void syncNow({ keepalive: true })
  } else {
    pullIfStale()
  }
}

function pullIfStale() {
  if (!signedIn()) return
  if (state.status === 'error' || !state.at || Date.now() - state.at > PULL_MIN_MS) void syncNow()
}

function startTimers() {
  if (pollTimer) return
  pollTimer = setInterval(poll, POLL_MS)
  document.addEventListener('visibilitychange', onVisibility)
  window.addEventListener('focus', pullIfStale)
}

function stopTimers() {
  if (pollTimer) { clearInterval(pollTimer); pollTimer = null }
  if (pushTimer) { clearTimeout(pushTimer); pushTimer = null }
  document.removeEventListener('visibilitychange', onVisibility)
  window.removeEventListener('focus', pullIfStale)
}

// ---- les reçus ------------------------------------------------------------------

interface Receipt { id: string; state: 'pending' | 'claimed' | 'refused'; at: number }

function readReceipts(): Receipt[] {
  const r = parse(RECEIPTS_KEY)
  if (!Array.isArray(r)) return []
  return r.filter((x): x is Receipt =>
    !!x && typeof x.id === 'string' && /^cs_[A-Za-z0-9_]+$/.test(x.id)
    && (x.state === 'pending' || x.state === 'claimed' || x.state === 'refused'))
}
function writeReceipts(list: Receipt[]) { put(RECEIPTS_KEY, JSON.stringify(list.slice(-MAX_RECEIPTS))) }

/** Garder la trace d'un paiement vérifié · appelé par la page /merci. Connecté,
 *  il est aussitôt inscrit sur le compte ; sinon, il le sera à la connexion. */
export function addReceipt(sessionId: string): void {
  if (!/^cs_[A-Za-z0-9_]+$/.test(sessionId)) return
  const list = readReceipts()
  if (!list.some((r) => r.id === sessionId)) {
    list.push({ id: sessionId, state: 'pending', at: Date.now() })
    writeReceipts(list)
  }
  if (signedIn()) void claimReceipts()
}

let claiming = false
async function claimReceipts(): Promise<void> {
  if (claiming || !signedIn()) return
  claiming = true
  try {
    for (const r of readReceipts().filter((x) => x.state === 'pending')) {
      let res: Response
      try {
        res = await apiFetch('/api/profile?action=claim', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ session_id: r.id }),
        })
      } catch { return /* réseau · on réessaiera à la prochaine synchronisation */ }
      let j: any = null
      try { j = await res.json() } catch { /* pas du JSON */ }
      let next: Receipt['state'] | null = null
      if (j?.ok === true) { applyAccess(j.access); next = 'claimed' }
      // RÉCLAMÉ PAR UN AUTRE COMPTE, IMPAYÉ OU ILLISIBLE · le redemander ne
      // changera rien. La formation reste ouverte sur ce navigateur.
      else if (res.status === 409 || res.status === 402 || res.status === 400) next = 'refused'
      else return // serveur indisponible ou non configuré · plus tard
      writeReceipts(readReceipts().map((x) => (x.id === r.id ? { ...x, state: next! } : x)))
    }
  } finally {
    claiming = false
  }
}

// ---- la connexion ---------------------------------------------------------------

/** Ouvrir la fenêtre de connexion Privy (e-mail ou Google). */
export function signIn(): void {
  privyControls.login?.()
}

/** Se déconnecter · ce qui n'est pas encore parti part d'abord, et RIEN
 *  n'est effacé de ce navigateur. */
export async function signOut(): Promise<void> {
  try { if (dirty()) await syncNow() } catch { /* on se déconnecte quand même */ }
  privyControls.logout?.()
}

let currentDid = ''
let started = false

function onAuthChange() {
  const a = authSnapshot()
  setState({ ready: a.ready, signedIn: a.authenticated, email: a.authenticated ? a.email : '' })
  if (a.authenticated && a.did && a.did !== currentDid) {
    currentDid = a.did
    lastSynced = ''
    // L'ADRESSE DU COMPTE OUVRE LA SEMAINE GRATUITE · elle ne demande qu'une
    // adresse, et l'élève vient d'en prouver une.
    if (a.email && !readAccess().email) giveEmail(a.email)
    startTimers()
    void syncNow()
  } else if (!a.authenticated && currentDid) {
    currentDid = ''
    stopTimers()
    setState({ status: 'idle', at: null, error: null })
  }
}

/** Démarrer la synchronisation · une fois, au lancement de l'app. Sans Privy
 *  configuré, ne fait rien. */
export function startAccountSync(): void {
  if (started || !privyConfigured()) return
  started = true
  onAuth(onAuthChange)
  onAuthChange()
}
