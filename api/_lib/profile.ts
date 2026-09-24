// LE PROFIL DU JOUEUR · la logique pure de la sauvegarde en ligne.
//
// Tout ce qui décide de ce qu'un profil contient vit ici, et rien de ce qui
// touche le réseau ou la base : valider et borner ce qu'un appareil envoie,
// FUSIONNER la copie du serveur avec celle d'un appareil, et décider si un
// paiement peut être inscrit sur un compte. C'est ce qui permet à
// scripts/test-profile.mjs de tout éprouver sans Postgres, et à api/profile.ts
// de n'être que du HTTP et du SQL.
//
// ---------------------------------------------------------------------------
// LES RÈGLES DE FUSION, ET POURQUOI CELLES-LÀ
//
// Deux appareils jouent chacun de leur côté, puis se synchronisent. La fusion
// doit donner le même résultat quel que soit l'ordre, et elle ne doit jamais
// faire perdre ce qui a été gagné, ni fabriquer ce qui ne l'a pas été.
//
//   · LES LEÇONS TERMINÉES · l'UNION des deux listes. Une leçon finie sur un
//     appareil est finie. (Conséquence assumée : « marquer comme non terminé »
//     sur un appareil ne se propage pas, puisque l'autre la tient pour finie.)
//   · LES RÉPONSES AUX QUESTIONS · l'union aussi ; sur la même question, la
//     réponse de l'appareil qui synchronise l'emporte (c'est la plus récente).
//   · LA PARTIE DE DOJOBURO · la plus AVANCÉE, ENTIÈRE (jour, puis clients
//     servis, puis caisse). Additionner ou mélanger deux parties dupliquerait
//     la caisse : jouer le jour 3 sur deux appareils rapporterait deux fois.
//     Seuls deux champs se combinent : le tutoriel vu (OU) et le meilleur jour
//     atteint (le maximum), qui ne se gagnent pas deux fois.
//   · LE PSEUDONYME DU CLAN · le plus récent qui ne soit pas vide.
//
// ---------------------------------------------------------------------------
// L'ACCÈS NE VIENT JAMAIS DU CLIENT
//
// Tout champ d'accès envoyé par un appareil (access, grants, path, trade…) est
// IGNORÉ : il n'entre même pas dans la forme validée. Un droit ne s'inscrit sur
// un compte que par un paiement Stripe que le serveur a relu lui-même
// (api/profile.ts?action=claim), et une session de paiement n'ouvre qu'UN
// compte (voir decideClaim).

import { BUY_TRADES } from './checkoutSession.js'

// ---- les bornes ----------------------------------------------------------

export const LIMITS = {
  /** le profil sérialisé, au plus · bien au-delà d'un usage réel (quelques Ko) */
  blobBytes: 200 * 1024,
  /** le corps de la requête · le profil plus son enrobage */
  bodyBytes: 256 * 1024,
  /** une clé de progression « piste/leçon » ou « agent/cas/étape » */
  keyMax: 160,
  doneMax: 5000,
  answersMax: 5000,
  /** la même borne que le clan (api/_lib/clan.ts) */
  pseudoMax: 24,
} as const

/** Les plafonds de débit, par compte. */
export const RATES = {
  read: { max: 120, windowMs: 10 * 60 * 1000 },
  sync: { max: 90, windowMs: 10 * 60 * 1000 },
  claim: { max: 20, windowMs: 60 * 60 * 1000 },
  /** avant toute vérification de jeton · par IP hachée */
  ip: { max: 400, windowMs: 10 * 60 * 1000 },
} as const

/** Les métiers qu'un droit peut nommer · les mêmes que l'achat. */
export { BUY_TRADES }

// ---- les formes ------------------------------------------------------------

export interface AcademyBlob {
  /** chaque clé terminée · « piste/leçon » */
  done: string[]
  /** « piste/leçon » → l'option choisie */
  answers: Record<string, number>
}

export interface SimBlob {
  v: 1
  day: number
  cash: number
  reputation: number
  staff: Record<string, { level: number; xp: number }>
  upgrades: { budget: number; library: boolean; cache: boolean; coffee: boolean }
  best: number
  served: number
  tutored: boolean
}

export interface ClanBlob {
  pseudo: string
  /** quand l'appareil a vu ce pseudonyme changer · millisecondes */
  at: number
}

export interface ProfileData {
  v: 1
  academy: AcademyBlob | null
  sim: SimBlob | null
  clan: ClanBlob | null
}

/** CE QUI EST OUVERT · écrit par le serveur seul. */
export interface Access {
  path?: true
  /** les métiers achetés, dans l'ordre d'achat */
  trades?: string[]
}

export type Grant = { path: true } | { trade: string }

export const EMPTY_DATA: ProfileData = { v: 1, academy: null, sim: null, clan: null }

// ---- le nettoyage ----------------------------------------------------------

const CONTROL = /[\u0000-\u001F\u007F-\u009F]/
const isObj = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v)
const num = (x: unknown, d: number, lo = 0, hi = Number.MAX_SAFE_INTEGER): number =>
  typeof x === 'number' && Number.isFinite(x) ? Math.min(hi, Math.max(lo, x)) : d
const isKey = (k: unknown): k is string =>
  typeof k === 'string' && k.length > 0 && k.length <= LIMITS.keyMax && !CONTROL.test(k)

export function cleanAcademy(raw: unknown): AcademyBlob | null {
  if (!isObj(raw)) return null
  const done: string[] = []
  const seen = new Set<string>()
  if (Array.isArray(raw.done)) {
    for (const k of raw.done) {
      if (!isKey(k) || seen.has(k)) continue
      seen.add(k)
      done.push(k)
      if (done.length >= LIMITS.doneMax) break
    }
  }
  const answers: Record<string, number> = {}
  if (isObj(raw.answers)) {
    let n = 0
    for (const [k, v] of Object.entries(raw.answers)) {
      if (!isKey(k) || typeof v !== 'number' || !Number.isInteger(v) || v < 0 || v > 99) continue
      answers[k] = v
      if (++n >= LIMITS.answersMax) break
    }
  }
  return { done, answers }
}

export function cleanSim(raw: unknown): SimBlob | null {
  if (!isObj(raw)) return null
  const staff: SimBlob['staff'] = {}
  if (isObj(raw.staff)) {
    let n = 0
    for (const [k, x] of Object.entries(raw.staff)) {
      if (!/^[a-z]{1,32}$/.test(k) || !isObj(x)) continue
      staff[k] = { level: num(x.level, 1, 1, 99), xp: num(x.xp, 0) }
      if (++n >= 32) break
    }
  }
  const u = isObj(raw.upgrades) ? raw.upgrades : {}
  return {
    v: 1,
    day: num(raw.day, 1, 1, 999),
    cash: num(raw.cash, 0),
    reputation: num(raw.reputation, 10, 0, 100),
    staff,
    upgrades: { budget: num(u.budget, 0, 0, 50), library: !!u.library, cache: !!u.cache && !!u.library, coffee: !!u.coffee },
    best: num(raw.best, 1, 1, 999),
    served: num(raw.served, 0),
    tutored: !!raw.tutored,
  }
}

export function cleanClan(raw: unknown): ClanBlob | null {
  if (!isObj(raw)) return null
  const pseudo = typeof raw.pseudo === 'string'
    ? raw.pseudo.replace(/[\u0000-\u001F\u007F-\u009F]/g, '').trim().slice(0, LIMITS.pseudoMax)
    : ''
  return { pseudo, at: num(raw.at, 0) }
}

/** Une copie lue en base, ou reçue · jamais d'exception, jamais de champ
 *  inconnu. C'EST ICI QUE L'ACCÈS ENVOYÉ PAR LE CLIENT DISPARAÎT : la forme
 *  rendue n'a pas de place pour lui. */
export function cleanData(raw: unknown): ProfileData {
  if (!isObj(raw)) return { ...EMPTY_DATA }
  return {
    v: 1,
    academy: cleanAcademy(raw.academy),
    sim: cleanSim(raw.sim),
    clan: cleanClan(raw.clan),
  }
}

export type BlobResult =
  | { ok: true; data: ProfileData }
  | { ok: false; error: 'invalid' | 'too_large'; reason?: string }

/** La taille en octets UTF-8 · une chaîne de caractères accentués pèse plus
 *  que sa longueur. */
export const byteSize = (s: string): number => new TextEncoder().encode(s).length

/** Ce qu'un appareil envoie · refusé s'il n'a pas la forme d'un profil ou s'il
 *  pèse plus que la borne, nettoyé sinon. */
export function validateBlob(raw: unknown): BlobResult {
  if (!isObj(raw)) return { ok: false, error: 'invalid', reason: 'shape' }
  let text: string
  try { text = JSON.stringify(raw) } catch { return { ok: false, error: 'invalid', reason: 'shape' } }
  if (byteSize(text) > LIMITS.blobBytes) return { ok: false, error: 'too_large' }
  return { ok: true, data: cleanData(raw) }
}

// ---- la fusion -------------------------------------------------------------

export function mergeAcademy(server: AcademyBlob | null, device: AcademyBlob | null): AcademyBlob | null {
  if (!server) return device ? cleanAcademy(device) : null
  if (!device) return cleanAcademy(server)
  // L'UNION · l'ordre du serveur d'abord, puis ce que l'appareil ajoute.
  const done = [...server.done]
  const seen = new Set(done)
  for (const k of device.done) if (!seen.has(k)) { seen.add(k); done.push(k) }
  return cleanAcademy({ done, answers: { ...server.answers, ...device.answers } })
}

/** La partie la plus avancée · -1, 0 ou 1, comme un comparateur de tri. */
export function compareSim(a: SimBlob, b: SimBlob): number {
  if (a.day !== b.day) return a.day > b.day ? 1 : -1
  if (a.served !== b.served) return a.served > b.served ? 1 : -1
  if (a.cash !== b.cash) return a.cash > b.cash ? 1 : -1
  return 0
}

export function mergeSim(server: SimBlob | null, device: SimBlob | null): SimBlob | null {
  if (!server) return device
  if (!device) return server
  // ENTIÈRE · jamais un mélange des deux. À égalité, celle de l'appareil.
  const win = compareSim(server, device) > 0 ? server : device
  return {
    ...win,
    tutored: server.tutored || device.tutored,
    best: Math.max(server.best, device.best),
  }
}

export function mergeClan(server: ClanBlob | null, device: ClanBlob | null, now = Date.now()): ClanBlob | null {
  // Une horloge d'appareil en avance ne doit pas figer un pseudonyme pour des
  // années · la date est bornée à maintenant.
  const s = server && server.pseudo ? { ...server, at: Math.min(server.at, now) } : null
  const d = device && device.pseudo ? { ...device, at: Math.min(device.at, now) } : null
  if (!s) return d ?? server ?? device ?? null
  if (!d) return s
  return d.at >= s.at ? d : s
}

export function mergeProfiles(server: ProfileData, device: ProfileData, now = Date.now()): ProfileData {
  const s = cleanData(server)
  const d = cleanData(device)
  return {
    v: 1,
    academy: mergeAcademy(s.academy, d.academy),
    sim: mergeSim(s.sim, d.sim),
    clan: mergeClan(s.clan, d.clan, now),
  }
}

// ---- l'accès ---------------------------------------------------------------

/** L'accès tel qu'il est lu en base · seules les formes connues survivent. */
export function cleanAccess(raw: unknown): Access {
  if (!isObj(raw)) return {}
  const out: Access = {}
  if (raw.path === true) out.path = true
  if (Array.isArray(raw.trades)) {
    const t = [...new Set(raw.trades.filter((x): x is string => typeof x === 'string' && BUY_TRADES.has(x)))]
    if (t.length) out.trades = t
  }
  return out
}

/** Ce qu'une session payée ouvre · null si elle n'ouvre rien. */
export function grantOf(v: { paid: boolean; plan: string | null; trade: string | null } | null): Grant | null {
  if (!v || !v.paid) return null
  if (v.plan === 'path') return { path: true }
  if (v.plan === 'trade' && v.trade && BUY_TRADES.has(v.trade)) return { trade: v.trade }
  return null
}

/** Inscrire un droit · idempotent : le réinscrire ne change rien. */
export function applyGrant(access: Access, grant: Grant | null): Access {
  const a = cleanAccess(access)
  if (!grant) return a
  if ('path' in grant) return { ...a, path: true }
  const trades = a.trades ?? []
  return trades.includes(grant.trade) ? a : { ...a, trades: [...trades, grant.trade] }
}

/** QUI A DÉJÀ RÉCLAMÉ CETTE SESSION ?
 *   · personne  → 'new'   · on l'inscrit sur ce compte ;
 *   · ce compte → 'mine'  · déjà fait, on répond pareil (idempotent) ;
 *   · un autre  → 'other' · refusé : un paiement n'ouvre qu'un compte. */
export function decideClaim(owner: string | null | undefined, did: string): 'new' | 'mine' | 'other' {
  if (!owner) return 'new'
  return owner === did ? 'mine' : 'other'
}

// ---- la sortie -------------------------------------------------------------

export interface ProfileRow { data: unknown; access: unknown; updated_at: Date | string | null }

/** Ce que le navigateur reçoit · toujours la même forme, profil vide compris. */
export function serializeProfile(row: ProfileRow | null | undefined): { data: ProfileData; access: Access; updatedAt: string | null } {
  if (!row) return { data: { ...EMPTY_DATA }, access: {}, updatedAt: null }
  const at = row.updated_at ? new Date(row.updated_at) : null
  return {
    data: cleanData(row.data),
    access: cleanAccess(row.access),
    updatedAt: at && !Number.isNaN(at.getTime()) ? at.toISOString() : null,
  }
}
