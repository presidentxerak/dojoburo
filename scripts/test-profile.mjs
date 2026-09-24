// LE PROFIL · la sauvegarde en ligne, vérifiée sans base ni navigateur.
//
// api/_lib/profile.ts décide seul de ce qu'un profil contient : la forme et la
// taille de ce qu'un appareil envoie, la FUSION entre la copie du serveur et
// celle d'un appareil, et l'inscription d'un paiement sur un compte. Tout cela
// est pur, donc éprouvé ici sans Postgres. Puis le handler (api/profile.ts)
// est appelé pour de vrai, sur une base de remplacement en mémoire (le module
// `pg` est substitué au moment du paquet) et un Stripe simulé.
//
// Ce qu'on garde, et pourquoi :
//   · RIEN DE CE QUI EST FINI NE SE PERD · les leçons terminées sont l'union
//     des deux copies, dans les deux sens.
//   · UNE PARTIE NE SE DUPLIQUE PAS · la plus avancée est prise ENTIÈRE ; deux
//     caisses ne s'additionnent jamais.
//   · L'ACCÈS NE VIENT JAMAIS DU CLIENT · un appareil qui envoie
//     { access: { path: true } } n'ouvre rien ; seul un paiement relu chez
//     Stripe ouvre, et sur UN compte.
//   · SANS JETON, 401 · SANS BASE, 503 · SANS TABLE, 503, jamais un 500.
//   · ET CHAQUE RÈGLE MORD, dans les deux sens.
//
//   node scripts/test-profile.mjs
import crypto from 'node:crypto'
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}
const OUT = 'node_modules/.dojo-profile'
mkdirSync(OUT, { recursive: true })

/** `pg` remplacé par une base en mémoire · voir FAKE plus bas. */
const fakePg = {
  name: 'fake-pg',
  setup(b) {
    b.onResolve({ filter: /^pg$/ }, () => ({ path: 'pg', namespace: 'fake-pg' }))
    b.onLoad({ filter: /.*/, namespace: 'fake-pg' }, () => ({
      contents: `
        export class Pool {
          constructor() {}
          on() { return this }
          query(sql, params) { return globalThis.__fakePg.query(sql, params) }
          async connect() { return { query: (s, p) => globalThis.__fakePg.query(s, p), release() {} } }
        }
        export default { Pool }`,
      loader: 'js',
    }))
  },
}
async function load(entry, name, plugins = []) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent', plugins })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const P = await load('api/_lib/profile.ts', 'profile.mjs')
const { LIMITS } = P

const sim = (o = {}) => ({
  v: 1, day: 3, cash: 500, reputation: 40,
  staff: { research: { level: 2, xp: 30 }, writing: { level: 1, xp: 0 } },
  upgrades: { budget: 1, library: true, cache: false, coffee: false },
  best: 3, served: 12, tutored: false, ...o,
})

/* --- 1 · la forme et la taille ------------------------------------------- */
console.log('--- la forme et la taille -------------------------------------')
{
  const good = { v: 1, academy: { done: ['a/b'], answers: { 'a/b': 1 } }, sim: sim(), clan: { pseudo: 'Nora', at: 5 } }
  const r = P.validateBlob(good)
  ok('un profil correct passe', r.ok, r.ok ? '' : JSON.stringify(r))
  ok('il revient complet', r.ok && r.data.academy.done[0] === 'a/b' && r.data.sim.day === 3 && r.data.clan.pseudo === 'Nora')
  ok('ce qui n’est pas un objet est refusé', !P.validateBlob(null).ok && !P.validateBlob('x').ok && !P.validateBlob([1]).ok
    && P.validateBlob(42).error === 'invalid')
  const pad = (n) => ({ v: 1, academy: { done: [], answers: {} }, filler: 'x'.repeat(n) })
  ok(`au-delà de ${LIMITS.blobBytes / 1024} Ko, refusé`, P.validateBlob(pad(LIMITS.blobBytes + 10)).error === 'too_large')
  ok('… et juste en dessous, accepté', P.validateBlob(pad(LIMITS.blobBytes - 200)).ok)
  ok('la taille se compte en octets', P.byteSize('é') === 2 && P.validateBlob({ v: 1, f: 'é'.repeat(LIMITS.blobBytes / 2 + 10) }).error === 'too_large')
  ok('un champ inconnu ne survit pas', !('filler' in P.validateBlob(pad(10)).data))
  const dirty = P.cleanData({
    academy: { done: ['ok/1', 'ok/1', '', 42, 'x'.repeat(200), 'bad\u0000/k'], answers: { 'a/b': 2, 'c/d': -1, 'e/f': 1.5, 'g/h': 'x' } },
    sim: { day: 'dix', cash: -5, staff: { 'Research!': { level: 3 }, coding: { level: 500, xp: 1 } }, upgrades: { cache: true } },
    clan: { pseudo: '  Zoé\u0007  ', at: 'hier' },
  })
  ok('les leçons · doublons, vides et caractères de contrôle écartés', dirty.academy.done.join('|') === 'ok/1')
  ok('les réponses · seuls les entiers de 0 à 99', JSON.stringify(dirty.academy.answers) === '{"a/b":2}')
  ok('la partie · des bornes saines', dirty.sim.day === 1 && dirty.sim.cash === 0 && dirty.sim.staff.coding.level === 99
    && !('Research!' in dirty.sim.staff) && dirty.sim.upgrades.cache === false)
  ok('le pseudonyme · nettoyé et daté à zéro faute de mieux', dirty.clan.pseudo === 'Zoé' && dirty.clan.at === 0)
  ok('le pseudonyme · borné comme au clan', P.cleanClan({ pseudo: 'N'.repeat(40), at: 1 }).pseudo.length === 24)
}

/* --- 2 · la fusion -------------------------------------------------------- */
console.log('\n--- la fusion -------------------------------------------------')
{
  const A = { done: ['p/1', 'p/2'], answers: { 'p/1': 0, 'p/2': 1 } }
  const B = { done: ['p/2', 'p/3'], answers: { 'p/2': 2 } }
  const ab = P.mergeAcademy(A, B), ba = P.mergeAcademy(B, A)
  ok('les leçons · l’union, sans doublon', ab.done.join(',') === 'p/1,p/2,p/3')
  ok('… dans les deux sens', [...ba.done].sort().join(',') === 'p/1,p/2,p/3')
  ok('… rien n’est perdu si un côté est vide', P.mergeAcademy(A, { done: [], answers: {} }).done.length === 2
    && P.mergeAcademy(null, B).done.length === 2 && P.mergeAcademy(A, null).done.length === 2)
  ok('les réponses · l’appareil l’emporte sur la même question', ab.answers['p/2'] === 2 && ab.answers['p/1'] === 0)

  const behind = sim({ day: 2, served: 40, cash: 9000, tutored: true, best: 7 })
  const ahead = sim({ day: 5, served: 3, cash: 10, tutored: false, best: 5 })
  const m1 = P.mergeSim(behind, ahead), m2 = P.mergeSim(ahead, behind)
  ok('la partie · la plus avancée (le jour d’abord)', m1.day === 5 && m2.day === 5)
  ok('… prise ENTIÈRE · la caisse n’est pas celle de l’autre', m1.cash === 10 && m2.cash === 10 && m1.served === 3)
  ok('… jamais additionnée', m1.cash !== 9010 && m2.cash !== 9010)
  ok('le tutoriel vu · OU', m1.tutored === true && m2.tutored === true)
  ok('le meilleur jour · le maximum', m1.best === 7 && m2.best === 7)
  ok('à jour égal, les clients servis départagent', P.mergeSim(sim({ served: 9, cash: 1 }), sim({ served: 8, cash: 999 })).cash === 1)
  ok('à servis égaux, la caisse', P.mergeSim(sim({ cash: 100 }), sim({ cash: 200 })).cash === 200
    && P.mergeSim(sim({ cash: 200 }), sim({ cash: 100 })).cash === 200)
  ok('une seule partie, c’est elle', P.mergeSim(null, ahead).day === 5 && P.mergeSim(ahead, null).day === 5 && P.mergeSim(null, null) === null)

  const now = 1_000_000
  ok('le pseudonyme · le plus récent', P.mergeClan({ pseudo: 'Ancien', at: 10 }, { pseudo: 'Neuf', at: 20 }, now).pseudo === 'Neuf'
    && P.mergeClan({ pseudo: 'Neuf', at: 20 }, { pseudo: 'Ancien', at: 10 }, now).pseudo === 'Neuf')
  ok('… mais jamais un vide', P.mergeClan({ pseudo: 'Nora', at: 10 }, { pseudo: '', at: 99 }, now).pseudo === 'Nora'
    && P.mergeClan({ pseudo: '', at: 99 }, { pseudo: 'Nora', at: 1 }, now).pseudo === 'Nora')
  ok('… et une horloge en avance ne fige rien', P.mergeClan({ pseudo: 'Futur', at: now * 10 }, { pseudo: 'Présent', at: now }, now).pseudo === 'Présent')

  const server = { v: 1, academy: A, sim: behind, clan: { pseudo: 'Nora', at: 1 } }
  const device = { v: 1, academy: B, sim: ahead, clan: null, access: { path: true, trades: ['sales'] }, grants: ['everything'] }
  const all = P.mergeProfiles(server, device)
  ok('le profil entier · chaque règle à sa place', all.academy.done.length === 3 && all.sim.day === 5 && all.clan.pseudo === 'Nora')
  ok('L’ACCÈS ENVOYÉ PAR LE CLIENT EST IGNORÉ', !('access' in all) && !('grants' in all) && !JSON.stringify(all).includes('sales'))
  ok('… même au travers de la validation', !JSON.stringify(P.validateBlob(device).data).includes('path'))
}

/* --- 3 · l'accès et les réclamations -------------------------------------- */
console.log('\n--- l’accès ---------------------------------------------------')
{
  ok('une session payée pour la formation ouvre la formation', JSON.stringify(P.grantOf({ paid: true, plan: 'path', trade: null })) === '{"path":true}')
  ok('une session payée pour un métier ouvre ce métier', JSON.stringify(P.grantOf({ paid: true, plan: 'trade', trade: 'sales' })) === '{"trade":"sales"}')
  ok('impayée, elle n’ouvre rien', P.grantOf({ paid: false, plan: 'path', trade: null }) === null)
  ok('un métier inventé n’ouvre rien', P.grantOf({ paid: true, plan: 'trade', trade: 'astronaute' }) === null
    && P.grantOf({ paid: true, plan: 'trade', trade: null }) === null && P.grantOf(null) === null)
  const a1 = P.applyGrant({}, { trade: 'sales' })
  const a2 = P.applyGrant(a1, { trade: 'sales' })
  const a3 = P.applyGrant(a2, { path: true })
  ok('inscrire un droit est idempotent', JSON.stringify(a1) === JSON.stringify(a2) && a2.trades.length === 1)
  ok('les droits s’additionnent', a3.path === true && a3.trades[0] === 'sales')
  ok('l’accès lu en base ne garde que les formes connues', JSON.stringify(P.cleanAccess({ path: 'yes', trades: ['sales', 'x', 'sales', 3], admin: true })) === '{"trades":["sales"]}')
  ok('une session jamais réclamée · on l’inscrit', P.decideClaim(null, 'did:a') === 'new' && P.decideClaim(undefined, 'did:a') === 'new')
  ok('réclamée par ce compte · déjà fait', P.decideClaim('did:a', 'did:a') === 'mine')
  ok('réclamée par un autre · refusé', P.decideClaim('did:a', 'did:b') === 'other')
  ok('le profil vide a la même forme qu’un plein', JSON.stringify(Object.keys(P.serializeProfile(null))) === '["data","access","updatedAt"]'
    && P.serializeProfile(null).data.academy === null)
}

/* --- 4 · le handler, pour de vrai ----------------------------------------- */
console.log('\n--- le handler ------------------------------------------------')
// L'identité · de vrais jetons ES256, contre un JWKS de remplacement (comme
// scripts/test-authz.mjs). Stripe · des sessions simulées.
const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', { namedCurve: 'P-256' })
const jwk = { ...publicKey.export({ format: 'jwk' }), kid: 'k1', alg: 'ES256', use: 'sig' }
const APP = 'app_test_profile'
const SESSIONS = {
  cs_test_path: { payment_status: 'paid', metadata: { plan: 'path' } },
  cs_test_trade: { payment_status: 'paid', metadata: { plan: 'trade', trade: 'sales' } },
  cs_test_unpaid: { payment_status: 'unpaid', metadata: { plan: 'path' } },
}
let stripeCalls = 0
globalThis.fetch = async (u) => {
  const url = String(u)
  if (url.includes('jwks.json')) return new Response(JSON.stringify({ keys: [jwk] }), { headers: { 'content-type': 'application/json' } })
  const m = url.match(/api\.stripe\.com\/v1\/checkout\/sessions\/([^?]+)/)
  if (m) {
    stripeCalls++
    const s = SESSIONS[decodeURIComponent(m[1])]
    return new Response(JSON.stringify(s ?? { error: { message: 'No such session' } }), { status: s ? 200 : 404 })
  }
  throw new Error('réseau interdit dans ce test · ' + url)
}
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url')
const now = Math.floor(Date.now() / 1000)
function token(sub) {
  const h = b64({ alg: 'ES256', kid: 'k1', typ: 'JWT' })
  const p = b64({ sub, iss: 'privy.io', aud: APP, exp: now + 600, iat: now })
  const sig = crypto.sign('sha256', Buffer.from(`${h}.${p}`), { key: privateKey, dsaEncoding: 'ieee-p1363' })
  return `${h}.${p}.${sig.toString('base64url')}`
}

// LA BASE EN MÉMOIRE · juste les requêtes qu'emploie api/profile.ts, avec de
// vraies transactions (un rollback rend l'état d'avant).
const FAKE = {
  profiles: new Map(), claims: new Map(), snap: null, missingTable: false,
  reset() { this.profiles.clear(); this.claims.clear(); this.snap = null; this.missingTable = false },
  async query(sql, p = []) {
    const q = sql.replace(/\s+/g, ' ').trim().toLowerCase()
    if (q === 'begin') { this.snap = [new Map(this.profiles), new Map(this.claims)]; return { rows: [], rowCount: 0 } }
    if (q === 'commit') { this.snap = null; return { rows: [], rowCount: 0 } }
    if (q === 'rollback') { if (this.snap) [this.profiles, this.claims] = this.snap; this.snap = null; return { rows: [], rowCount: 0 } }
    if (this.missingTable) throw Object.assign(new Error('relation "game_profiles" does not exist'), { code: '42P01' })
    const row = (did) => this.profiles.get(did)
    if (q.startsWith('select data, access, updated_at from game_profiles')) {
      const r = row(p[0]); return { rows: r ? [structuredClone(r)] : [], rowCount: r ? 1 : 0 }
    }
    if (q.startsWith('select access from game_profiles')) {
      const r = row(p[0]); return { rows: r ? [{ access: structuredClone(r.access) }] : [], rowCount: r ? 1 : 0 }
    }
    if (q.startsWith('insert into game_profiles (user_did, data)')) {
      if (/access/.test(q.split('returning')[0].replace('game_profiles (user_did, data)', ''))) throw new Error('la synchronisation écrit l’accès')
      const prev = row(p[0])
      const r = { data: JSON.parse(p[1]), access: prev?.access ?? {}, updated_at: new Date() }
      this.profiles.set(p[0], r)
      return { rows: [structuredClone(r)], rowCount: 1 }
    }
    if (q.startsWith('insert into game_profiles (user_did, access)')) {
      const prev = row(p[0])
      this.profiles.set(p[0], { data: prev?.data ?? {}, access: JSON.parse(p[1]), updated_at: new Date() })
      return { rows: [], rowCount: 1 }
    }
    if (q.startsWith('insert into game_profile_claims')) {
      if (this.claims.has(p[0])) return { rows: [], rowCount: 0 }
      this.claims.set(p[0], { user_did: p[1], grant: JSON.parse(p[2]) })
      return { rows: [], rowCount: 1 }
    }
    if (q.startsWith('select user_did from game_profile_claims')) {
      const c = this.claims.get(p[0]); return { rows: c ? [{ user_did: c.user_did }] : [], rowCount: c ? 1 : 0 }
    }
    throw new Error('requête inattendue · ' + q.slice(0, 80))
  },
}
globalThis.__fakePg = FAKE

const call = (H, method, url, { auth, body, origin, raw } = {}) => new Promise((resolve) => {
  const headers = { host: 'dojoburo.test' }
  if (auth) headers.authorization = `Bearer ${auth}`
  if (origin) headers.origin = origin
  const req = {
    method, url, headers, rawBody: raw !== undefined ? raw : body === undefined ? undefined : JSON.stringify(body),
    on(ev, fn) { if (ev === 'end') fn(); return req }, destroy() {},
  }
  const res = {
    statusCode: 200, _h: {},
    setHeader(k, v) { this._h[k.toLowerCase()] = v },
    end(b) { resolve({ status: this.statusCode, body: b ? JSON.parse(b) : null, headers: this._h }) },
  }
  Promise.resolve(H(req, res)).catch((e) => resolve({ status: 'LEVÉ', body: String(e) }))
})

// Sans Privy côté serveur · un module chargé AVANT de poser PRIVY_APP_ID.
delete process.env.PRIVY_APP_ID; delete process.env.VITE_PRIVY_APP_ID
process.env.DATABASE_URL = 'postgres://fake/db'
const NOAUTH = (await load('api/profile.ts', 'profile-noauth.mjs', [fakePg])).default
{
  const r = await call(NOAUTH, 'GET', '/api/profile', { auth: token('did:privy:alice') })
  ok('sans Privy côté serveur · 503 « not_configured »', r.status === 503 && r.body?.error === 'not_configured' && r.body?.detail === 'auth')
}

process.env.PRIVY_APP_ID = APP
process.env.STRIPE_SECRET_KEY = 'sk_test_fake'
const H = (await load('api/profile.ts', 'profile-api.mjs', [fakePg])).default
const alice = token('did:privy:alice'), bob = token('did:privy:bob')
{
  delete process.env.DATABASE_URL
  const off = await call(H, 'GET', '/api/profile', { auth: alice })
  ok('sans base · 503 « not_configured »', off.status === 503 && off.body?.error === 'not_configured' && off.body?.ok === false)
  const offPut = await call(H, 'PUT', '/api/profile', { auth: alice, body: { data: {} } })
  ok('… une écriture aussi, et jamais « ok »', offPut.status === 503 && offPut.body?.ok === false)
  process.env.DATABASE_URL = 'postgres://fake/db'

  const anon = await call(H, 'GET', '/api/profile')
  ok('sans jeton · 401', anon.status === 401 && anon.body?.error === 'auth')
  const junk = await call(H, 'GET', '/api/profile', { auth: 'pas.un.jeton' })
  ok('un jeton invalide · 401', junk.status === 401)
  const forged = token('did:privy:alice').split('.'); forged[1] = b64({ sub: 'did:privy:bob', iss: 'privy.io', aud: APP, exp: now + 600 })
  ok('un jeton retouché · 401', (await call(H, 'GET', '/api/profile', { auth: forged.join('.') })).status === 401)
  ok('une autre origine · 403 avant tout', (await call(H, 'GET', '/api/profile', { auth: alice, origin: 'https://ailleurs.example' })).status === 403)
  ok('une méthode inattendue · 405', (await call(H, 'DELETE', '/api/profile', { auth: alice })).status === 405)

  FAKE.reset()
  const empty = await call(H, 'GET', '/api/profile', { auth: alice })
  ok('un compte neuf · un profil vide, pas une erreur', empty.status === 200 && empty.body?.ok === true
    && empty.body.data.academy === null && JSON.stringify(empty.body.access) === '{}' && empty.body.updatedAt === null)

  // DEUX APPAREILS · le téléphone d'abord, puis l'ordinateur.
  const phone = { v: 1, academy: { done: ['p/1', 'p/2'], answers: { 'p/1': 0 } }, sim: sim({ day: 4, cash: 300, tutored: true }), clan: { pseudo: 'Nora', at: 100 } }
  const laptop = { v: 1, academy: { done: ['p/3'], answers: {} }, sim: sim({ day: 2, cash: 5000 }), clan: { pseudo: '', at: 500 },
    access: { path: true, trades: ['sales'] } }
  const s1 = await call(H, 'PUT', '/api/profile', { auth: alice, body: { data: phone } })
  ok('la première synchronisation enregistre', s1.status === 200 && s1.body?.ok && s1.body.data.academy.done.length === 2 && !!s1.body.updatedAt)
  const s2 = await call(H, 'POST', '/api/profile?action=sync', { auth: alice, body: { data: laptop, access: { path: true } } })
  ok('la seconde FUSIONNE · l’union des leçons', s2.status === 200 && s2.body.data.academy.done.sort().join(',') === 'p/1,p/2,p/3')
  ok('… la partie la plus avancée, entière', s2.body.data.sim.day === 4 && s2.body.data.sim.cash === 300 && s2.body.data.sim.tutored === true)
  ok('… le pseudonyme non vide', s2.body.data.clan.pseudo === 'Nora')
  ok('… et L’ACCÈS ENVOYÉ PAR L’APPAREIL N’OUVRE RIEN', JSON.stringify(s2.body.access) === '{}'
    && JSON.stringify(FAKE.profiles.get('did:privy:alice').access) === '{}')
  const g = await call(H, 'GET', '/api/profile', { auth: alice })
  ok('la lecture rend la version fusionnée', g.body?.data?.academy?.done?.length === 3 && g.body.data.sim.day === 4)
  ok('bob ne voit pas le profil d’alice', (await call(H, 'GET', '/api/profile', { auth: bob })).body?.data?.academy === null)

  const big = await call(H, 'PUT', '/api/profile', { auth: alice, body: { data: { v: 1, pad: 'x'.repeat(LIMITS.blobBytes + 1) } } })
  ok('un profil trop lourd · 413', big.status === 413 && big.body?.error === 'too_large')
  const huge = await call(H, 'PUT', '/api/profile', { auth: alice, raw: 'x'.repeat(LIMITS.bodyBytes + 1) })
  ok('un corps trop lourd · 413 avant même la lecture', huge.status === 413)
  ok('un corps illisible · 400', (await call(H, 'PUT', '/api/profile', { auth: alice, raw: '{' })).body?.error === 'bad_json')
  ok('un profil qui n’en est pas un · 400', (await call(H, 'PUT', '/api/profile', { auth: alice, body: { data: 'x' } })).body?.error === 'invalid')
  ok('une action inventée · 400', (await call(H, 'POST', '/api/profile?action=inventée', { auth: alice, body: {} })).body?.error === 'unknown_action')

  // LES RÉCLAMATIONS
  const bad = await call(H, 'POST', '/api/profile?action=claim', { auth: alice, body: { session_id: "cs_1' or 1=1" } })
  ok('un identifiant de session invalide · 400', bad.status === 400 && bad.body?.error === 'session')
  const unpaid = await call(H, 'POST', '/api/profile?action=claim', { auth: alice, body: { session_id: 'cs_test_unpaid' } })
  ok('une session impayée · 402, rien d’inscrit', unpaid.status === 402 && !FAKE.claims.has('cs_test_unpaid'))
  const c1 = await call(H, 'POST', '/api/profile?action=claim', { auth: alice, body: { session_id: 'cs_test_path' } })
  ok('une session payée · la formation sur le compte', c1.status === 200 && c1.body?.access?.path === true && c1.body.claimed === 'new', JSON.stringify(c1))
  const c2 = await call(H, 'POST', '/api/profile?action=claim', { auth: alice, body: { session_id: 'cs_test_path' } })
  ok('la réclamer deux fois · idempotent', c2.status === 200 && c2.body.claimed === 'already' && JSON.stringify(c2.body.access) === '{"path":true}')
  const c3 = await call(H, 'POST', '/api/profile?action=claim', { auth: bob, body: { session_id: 'cs_test_path' } })
  ok('LA MÊME SESSION PAR UN AUTRE COMPTE · 409', c3.status === 409 && c3.body?.error === 'claimed')
  ok('… et bob n’a rien reçu', JSON.stringify(FAKE.profiles.get('did:privy:bob')?.access ?? {}) === '{}')
  const c4 = await call(H, 'POST', '/api/profile?action=claim', { auth: alice, body: { session_id: 'cs_test_trade' } })
  ok('un métier s’ajoute à la formation', c4.status === 200 && c4.body.access.path === true && c4.body.access.trades.join(',') === 'sales')
  const after = await call(H, 'PUT', '/api/profile', { auth: alice, body: { data: { v: 1, access: {} } } })
  ok('une synchronisation ne retire pas un droit acquis', after.body?.access?.path === true && after.body.access.trades[0] === 'sales')
  ok('le progrès survit à une synchronisation presque vide', after.body.data.academy.done.length === 3)
  const down = await call(H, 'POST', '/api/profile?action=claim', { auth: alice, body: { session_id: 'cs_test_inconnue' } })
  ok('Stripe ne connaît pas la session · 503, pas un faux « ok »', down.status === 503 && down.body?.ok === false)
  const calls = stripeCalls
  delete process.env.STRIPE_SECRET_KEY
  const nokey = await call(H, 'POST', '/api/profile?action=claim', { auth: alice, body: { session_id: 'cs_test_path' } })
  ok('sans clé Stripe · 503 « not_configured »', nokey.status === 503 && nokey.body?.error === 'not_configured' && stripeCalls === calls)
  process.env.STRIPE_SECRET_KEY = 'sk_test_fake'

  FAKE.missingTable = true
  const nt = await call(H, 'GET', '/api/profile', { auth: alice })
  ok('sans les tables · 503 « not_configured », jamais un 500', nt.status === 503 && nt.body?.error === 'not_configured' && nt.body?.detail === 'schema')
  const ntw = await call(H, 'PUT', '/api/profile', { auth: alice, body: { data: {} } })
  ok('… une écriture aussi', ntw.status === 503 && ntw.body?.error === 'not_configured')
  FAKE.missingTable = false
  for (const r of [s1, s2, g, c1]) if (r.headers?.['cache-control'] !== 'no-store') { ok('les réponses ne se mettent pas en cache', false); break }
}

/* --- 5 · les fichiers s'accordent ----------------------------------------- */
console.log('\n--- les fichiers s’accordent ----------------------------------')
{
  const api = readFileSync('api/profile.ts', 'utf8')
  const sql = readFileSync('db/profile.sql', 'utf8')
  const book = readFileSync('db/README.md', 'utf8')
  const buy = readFileSync('api/buy.ts', 'utf8')
  const client = readFileSync('src/lib/account.ts', 'utf8')
  const tarifs = readFileSync('src/game/Tarifs.tsx', 'utf8')
  const profil = readFileSync('src/game/Profil.tsx', 'utf8')
  const shell = readFileSync('src/game/Shell.tsx', 'utf8')
  const gate = readFileSync('src/auth/privyGate.tsx', 'utf8')
  const text = readFileSync('src/game/accountText.ts', 'utf8')
  const main = readFileSync('src/main.tsx', 'utf8')
  ok('l’endpoint vérifie l’origine et le jeton', /originAllowed\(/.test(api) && /verifyPrivyToken\(/.test(api))
  ok('il passe par le limiteur partagé', /from '\.\/_lib\/ratelimit\.js'/.test(api))
  ok('la synchronisation n’écrit pas la colonne d’accès', /insert into game_profiles \(user_did, data\)/.test(api)
    && !/insert into game_profiles \(user_did, data, access\)/.test(api))
  ok('le schéma crée les deux tables, réexécutable', /create table if not exists game_profiles/.test(sql)
    && /create table if not exists game_profile_claims/.test(sql) && /session_id\s+text primary key/.test(sql))
  ok('le runbook les nomme', /db\/profile\.sql/.test(book) && /`game_profiles`/.test(book) && /`game_profile_claims`/.test(book))
  ok('l’achat et la réclamation lisent Stripe au même endroit', /from '\.\/_lib\/checkoutSession\.js'/.test(buy)
    && /from '\.\/_lib\/checkoutSession\.js'/.test(api))
  ok('le navigateur n’envoie pas d’accès', !/access\s*:/.test(client.match(/function collect\(\)[\s\S]*?\n\}/)?.[0] ?? 'access:'))
  ok('le navigateur applique l’accès du serveur par grant()', /grant\(\{ path: true \}\)/.test(client))
  ok('se déconnecter n’efface rien', !/localStorage\.(removeItem|clear)/.test(client))
  ok('la page de retour garde le reçu', /addReceipt\(id\)/.test(tarifs))
  ok('le profil porte la carte du compte', /<AccountCard \/>/.test(profil) && /signIn/.test(profil) && /signOut/.test(profil))
  ok('l’en-tête porte l’entrée du compte', /<AccountEntry \/>/.test(shell) && /href="\/profil"/.test(shell))
  ok('l’app démarre la synchronisation', /startAccountSync\(\)/.test(main))
  ok('la fenêtre Privy prend le violet de l’app', /accentColor: '#7c3aed'/.test(gate) && !/#ff2d9b/.test(gate))

  // LE FRANÇAIS DU COMPTE · vouvoiement, pas de tiret cadratin.
  const fr = [...text.matchAll(/B\(\s*(?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")\s*,\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g)].map((m) => m[1].slice(1, -1))
  const TU = /(?<!\p{L})(?:tu|te|toi|ta|tes|ton)(?!\p{L})|(?<!\p{L})t['’](?=\p{L})/iu
  ok('le compte a ses textes français', fr.length >= 20, `${fr.length} chaînes`)
  ok('le compte vouvoie', fr.every((s) => !TU.test(s)), fr.filter((s) => TU.test(s)).slice(0, 2).join(' | '))
  ok('aucun tiret cadratin', fr.every((s) => !s.includes('—')))
  ok('« Se connecter », « Se déconnecter », « Réessayer »', fr.includes('Se connecter') && fr.includes('Se déconnecter') && fr.includes('Réessayer'))
}

/* --- 6 · les morsures ---------------------------------------------------- */
console.log('\n--- les morsures ----------------------------------------------')
{
  // Chaque règle refuse ce qu'elle vise ET laisse passer ce qu'elle ne vise
  // pas · une garde qui ne mord que dans un sens est un décor.
  ok('morsure · une union qui perdrait une leçon serait vue',
    P.mergeAcademy({ done: ['x/1'], answers: {} }, { done: ['x/2'], answers: {} }).done.length === 2)
  ok('morsure · … et une union ne fabrique pas de leçon',
    P.mergeAcademy({ done: ['x/1'], answers: {} }, { done: ['x/1'], answers: {} }).done.length === 1)
  const add = (a, b) => ({ ...a, cash: a.cash + b.cash })
  ok('morsure · une caisse additionnée serait vue', add(sim({ cash: 1 }), sim({ cash: 2 })).cash === 3
    && P.mergeSim(sim({ cash: 1 }), sim({ cash: 2 })).cash !== 3)
  ok('morsure · la partie la moins avancée ne gagne jamais, dans aucun ordre',
    P.mergeSim(sim({ day: 9 }), sim({ day: 1, cash: 1e9 })).day === 9 && P.mergeSim(sim({ day: 1, cash: 1e9 }), sim({ day: 9 })).day === 9)
  ok('morsure · l’accès client serait vu s’il passait', 'access' in { access: 1 } && !('access' in P.cleanData({ access: { path: true } })))
  ok('morsure · la borne de taille mord à +1 Ko, pas à -1 Ko',
    !P.validateBlob({ f: 'x'.repeat(LIMITS.blobBytes + 1024) }).ok && P.validateBlob({ f: 'x'.repeat(LIMITS.blobBytes - 1024) }).ok)
  ok('morsure · un autre compte est refusé, le même ne l’est pas', P.decideClaim('a', 'b') === 'other' && P.decideClaim('a', 'a') !== 'other')
  ok('morsure · un tutoiement serait vu', /(?<!\p{L})(?:tu|te|toi|ta|tes|ton)(?!\p{L})|(?<!\p{L})t['’](?=\p{L})/iu.test('Connecte-toi pour garder ta progression'))
}

rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\ntest-profile · ${fails} problème(s)` : '\ntest-profile · tout est vert')
process.exit(fails ? 1 : 0)
