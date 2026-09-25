// Chaque endpoint, sur des entrées hostiles, sans rien de configuré.
//
// L'app tourne sur quinze fonctions serveur. Un déploiement neuf n'a ni base,
// ni coffre, ni clé de modèle, ni Stripe — et c'est l'état par DÉFAUT, pas un
// accident. Ce que chacune répond dans cet état décide de ce que l'écran peut
// dire, et un écran ne peut rien dire d'une fonction qui lève, qui pend, ou qui
// rend du HTML là où le client attend du JSON.
//
// Quatre propriétés, sur chaque endpoint et chaque entrée :
//
//   1 · elle RÉPOND · une exception non rattrapée devient un 500 sans corps, et
//       `await res.json()` lève côté client. C'est exactement la forme du
//       défaut « Loading… pour toujours » ;
//   2 · en JSON · le client fait `res.json()` sans exception sur tous ces
//       chemins ;
//   3 · sans jamais dire « ok: true » à une requête qu'elle n'a pas honorée ;
//   4 · sans faire fuiter un secret dans le message d'erreur.
//
// Les entrées éprouvées sont celles qu'on reçoit vraiment : une action
// manquante, une action inventée, un corps qui n'est pas du JSON, un corps
// énorme, des paramètres absents, une méthode inattendue.
//
//   node scripts/test-endpoints.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

// DANS le dépôt, pas dans /tmp · le paquet garde `pg` en externe, et un
// module hors de l'arborescence ne sait pas le résoudre.
const TMP = 'node_modules/.dojo-endpoints'
mkdirSync(TMP, { recursive: true })
async function load(entry) {
  const out = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, external: ['pg'], logLevel: 'silent',
  })
  const f = join(TMP, basename(entry).replace(/\.ts$/, '.mjs'))
  writeFileSync(f, out.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

// DEUX runtimes, donc deux façons d'appeler.
//
// api/chat.ts et api/checkout.ts déclarent `runtime: 'edge'` : elles reçoivent
// un `Request` du Web et rendent une `Response`. Les treize autres sont des
// fonctions Node et reçoivent (req, res). Les éprouver toutes avec la même
// forme ne prouve rien — c'est l'épreuve qui se trompe de produit.
const EDGE = new Set(['chat', 'checkout', 'buy'])

async function callEdge(handler, method, url, body) {
  const r = await handler(new Request(`https://dojoburo.test${url}`, {
    method,
    headers: { 'content-type': 'application/json', origin: 'https://dojoburo.test' },
    body: method === 'GET' ? undefined : body,
  }))
  return {
    status: r.status,
    headers: Object.fromEntries([...r.headers].map(([k, v]) => [k.toLowerCase(), v])),
    body: await r.text(),
  }
}

// Un couple requête/réponse minimal · ce que Vercel passe à une fonction Node.
function fake(method, url, body) {
  const chunks = []
  const req = {
    method, url, headers: { host: 'dojoburo.test', 'content-type': 'application/json' },
    rawBody: body === undefined ? undefined : body,
    on(ev, fn) {
      if (ev === 'data' && body !== undefined) fn(Buffer.from(body, 'utf8'))
      if (ev === 'end') fn()
      return req
    },
    destroy() {},
  }
  let done
  const finished = new Promise((r) => { done = r })
  const res = {
    statusCode: 200,
    headersSent: false,
    _h: {},
    setHeader(k, v) { this._h[String(k).toLowerCase()] = v },
    getHeader(k) { return this._h[String(k).toLowerCase()] },
    removeHeader(k) { delete this._h[String(k).toLowerCase()] },
    write(c) { chunks.push(String(c)); return true },
    end(c) {
      if (c !== undefined) chunks.push(typeof c === 'string' ? c : String(c))
      this.headersSent = true
      done({ status: this.statusCode, headers: this._h, body: chunks.join('') })
      return this
    },
  }
  return { req, res, finished }
}

const SECRETS = [
  'CONNECTOR_ENC_KEY', 'STRIPE_SECRET_KEY', 'DATABASE_URL', 'sk-ant-', 'sk_live_',
  'password', 'postgres://',
]

/**
 * Appeler un endpoint et vérifier qu'il se comporte, quoi qu'on lui envoie.
 *
 * L'échéance est le point : une fonction qui n'appelle jamais `res.end()` est
 * une page qui tourne. Six secondes suffisent largement — aucune de ces entrées
 * ne devrait atteindre le réseau.
 */
async function probe(name, handler, method, url, body) {
  const label = `${name} · ${method} ${url.slice(0, 46)}${body !== undefined ? ' + corps' : ''}`
  let r
  try {
    const run = EDGE.has(name)
      ? callEdge(handler, method, url, body)
      : (async () => {
        const { req, res, finished } = fake(method, url, body)
        await handler(req, res)
        return finished
      })()
    r = await Promise.race([
      run,
      new Promise((resolve) => setTimeout(() => resolve('PENDU'), 6000)),
    ])
  } catch (e) {
    ok(label, false, `a LEVÉ : ${String(e?.message || e).slice(0, 90)}`)
    return null
  }
  if (r === 'PENDU') { ok(label, false, 'n’a jamais répondu · l’écran tournerait indéfiniment'); return null }

  // 2 · du JSON, sauf redirection (302) et sauf flux binaire déclaré
  const ct = String(r.headers['content-type'] || '')
  if (r.status === 302) { ok(label, true, '302'); return r }
  if (!/json/.test(ct) && !/audio|octet-stream/.test(ct)) {
    ok(label, false, `content-type « ${ct || 'aucun'} » · le client fait res.json()`)
    return r
  }
  if (/json/.test(ct)) {
    try { JSON.parse(r.body) } catch {
      ok(label, false, `corps illisible : ${r.body.slice(0, 70)}`)
      return r
    }
  }

  // 4 · aucun secret dans la réponse
  const leak = SECRETS.find((s) => r.body.includes(s) && s.length > 6)
  if (leak) { ok(label, false, `fuite possible : « ${leak} » dans la réponse`); return r }

  ok(label, true, `${r.status}`)
  return r
}

/* ------------------------------------------------------------------ */
// Rien n'est configuré · c'est l'état d'un déploiement neuf, et celui dans
// lequel ces fonctions doivent être les plus polies.
for (const k of ['DATABASE_URL', 'POSTGRES_URL', 'CONNECTOR_ENC_KEY', 'STRIPE_SECRET_KEY',
  'ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'MISTRAL_API_KEY', 'PRIVY_APP_ID', 'PRIVY_APP_SECRET']) {
  delete process.env[k]
}

const ENDPOINTS = [
  ['connect', 'api/connect.ts', [
    ['GET', '/api/connect'],
    ['GET', '/api/connect?action=list&client=diag'],
    ['GET', '/api/connect?action=nonsense'],
    ['GET', '/api/connect?action=start'],
    ['GET', '/api/connect?action=start&connector=pas-une-app'],
    ['POST', '/api/connect?action=setkey', '{ ceci nest pas du json'],
    ['POST', '/api/connect?action=setkey', JSON.stringify({ key: 'x' })],
    ['POST', '/api/connect?action=disconnect', '{}'],
    ['POST', '/api/connect?action=permit', JSON.stringify({ connector: 'stripe', write: true })],
    ['GET', '/api/connect?code=abc&state=faux'],
  ]],
  ['org', 'api/org.ts', [
    ['GET', '/api/org'],
    ['GET', '/api/org?action=me&client=diag'],
    ['GET', '/api/org?action=inventé'],
    ['POST', '/api/org?action=rename', 'pas du json'],
  ]],
  ['secrets', 'api/secrets.ts', [
    ['GET', '/api/secrets'],
    ['GET', '/api/secrets?action=list&dojo=d1&client=diag'],
    ['POST', '/api/secrets?action=save', '{'],
  ]],
  ['docs', 'api/docs.ts', [
    ['GET', '/api/docs'],
    ['GET', '/api/docs?action=list&client=diag'],
    ['POST', '/api/docs?action=push', 'nope'],
  ]],
  ['rag', 'api/rag.ts', [
    ['GET', '/api/rag'],
    ['GET', '/api/rag?action=list&client=diag'],
    ['POST', '/api/rag?action=parse', '{{{'],
  ]],
  ['tool-data', 'api/tool-data.ts', [
    ['GET', '/api/tool-data'],
    ['GET', '/api/tool-data?connector=stripe&client=diag'],
    ['GET', '/api/tool-data?connector=pas-une-app&client=diag'],
  ]],
  ['tool-action', 'api/tool-action.ts', [
    ['POST', '/api/tool-action', '{'],
    ['POST', '/api/tool-action', JSON.stringify({ connector: 'slack', action: 'post', text: 'hi' })],
    ['POST', '/api/tool-action', JSON.stringify({ connector: 'pas-une-app', action: 'post' })],
  ]],
  ['domain', 'api/domain.ts', [
    ['GET', '/api/domain'],
    ['GET', '/api/domain?name=acme'],
  ]],
  ['fonts', 'api/fonts.ts', [['GET', '/api/fonts']]],
  ['chat', 'api/chat.ts', [
    ['POST', '/api/chat', '{'],
    ['POST', '/api/chat', JSON.stringify({ messages: [{ role: 'user', content: 'bonjour' }] })],
    ['POST', '/api/chat', JSON.stringify({ messages: [] })],
  ]],
  ['tts', 'api/tts.ts', [
    ['POST', '/api/tts', '{'],
    ['POST', '/api/tts', JSON.stringify({ text: 'bonjour', voiceId: 'x' })],
  ]],
  ['checkout', 'api/checkout.ts', [
    ['POST', '/api/checkout', '{'],
    ['POST', '/api/checkout', JSON.stringify({ plan: 'managed', email: 'a@b.fr' })],
    ['POST', '/api/checkout', JSON.stringify({ plan: 'inventé' })],
  ]],
  // L'ACHAT D'UNE FORMATION · paiement unique, puis vérification au retour.
  ['buy', 'api/buy.ts', [
    ['POST', '/api/buy', '{'],
    ['POST', '/api/buy', JSON.stringify({ plan: 'inventé' })],
    ['POST', '/api/buy', JSON.stringify({ plan: 'trade', trade: 'astronaute' })],
    ['POST', '/api/buy', JSON.stringify({ plan: 'path', email: 'a@b.fr' })],
    ['GET', '/api/buy?session_id=pas-une-session'],
    ['GET', '/api/buy?session_id=cs_test_abc123'],
  ]],
  // LE CLAN · le fil de la communauté. Une fonction Node (elle parle à
  // Postgres), donc pas dans EDGE. Sans base, chaque méthode répond
  // « not_configured » en 503, et la page le dit au lieu d'inventer un fil.
  ['clan', 'api/clan.ts', [
    ['GET', '/api/clan'],
    ['GET', '/api/clan?cursor=pas-un-curseur'],
    ['POST', '/api/clan?action=create', '{'],
    ['POST', '/api/clan?action=create', JSON.stringify({ key: 'k'.repeat(43), pseudo: 'Nora', title: 'Un agent', body: 'Il trie mes e-mails chaque matin.' })],
    ['POST', '/api/clan?action=bravo', JSON.stringify({ key: 'k'.repeat(43), id: 'pas-un-id' })],
    ['POST', '/api/clan?action=inventée', '{}'],
    ['DELETE', '/api/clan?id=00000000-0000-4000-8000-000000000001'],
    ['PUT', '/api/clan', '{}'],
  ]],
  // LE PROFIL · la sauvegarde en ligne. Une fonction Node (Postgres). Sans
  // base ni Privy, chaque méthode répond « not_configured » en 503, et jamais
  // « ok » : l'écran dit alors que la progression reste dans le navigateur.
  ['profile', 'api/profile.ts', [
    ['GET', '/api/profile'],
    ['PUT', '/api/profile', '{'],
    ['PUT', '/api/profile', JSON.stringify({ data: { v: 1, academy: { done: ['a/b'], answers: {} } } })],
    ['POST', '/api/profile?action=sync', JSON.stringify({ data: {}, access: { path: true } })],
    ['POST', '/api/profile?action=claim', JSON.stringify({ session_id: 'cs_test_abc123' })],
    ['POST', '/api/profile?action=claim', JSON.stringify({ session_id: 'pas-une-session' })],
    ['POST', '/api/profile?action=inventée', '{}'],
    ['DELETE', '/api/profile', '{}'],
  ]],
  ['agent-run', 'api/agent-run.ts', [
    ['POST', '/api/agent-run', '{'],
    ['POST', '/api/agent-run', JSON.stringify({ task: 'positioning', agentName: 'Scout' })],
    ['POST', '/api/agent-run', JSON.stringify({ task: 'pas-une-tache' })],
  ]],
  ['agent-proxy', 'api/agent-proxy.ts', [
    ['POST', '/api/agent-proxy', '{'],
    ['POST', '/api/agent-proxy', JSON.stringify({ url: 'http://127.0.0.1:1/interne' })],
  ]],
  // LA COMMUNAUTÉ · lecture ouverte, écriture avec un compte. Sans base, 503.
  ['community', 'api/community.ts', [
    ['GET', '/api/community'],
    ['GET', '/api/community?action=post&id=pas-un-id'],
    ['GET', '/api/community?action=me'],
    ['POST', '/api/community?action=post', JSON.stringify({ category: 'general', title: 'Bonjour', body: 'Mon premier message ici.' })],
    ['POST', '/api/community?action=like', JSON.stringify({ type: 'post', id: '00000000-0000-4000-8000-000000000001' })],
  ]],
  // LA NEWSLETTER · l'adresse du week-end gratuit et le consentement à part.
  // Sans base, 503 « not_configured » ; jamais un faux succès.
  ['newsletter', 'api/newsletter.ts', [
    ['POST', '/api/newsletter', '{'],
    ['POST', '/api/newsletter', JSON.stringify({ email: 'pas-une-adresse' })],
    ['POST', '/api/newsletter', JSON.stringify({ email: 'nora@exemple.fr', newsletter: true, lang: 'fr', source: 'weekend' })],
    ['GET', '/api/newsletter?action=unsubscribe&email=nora@exemple.fr&token=faux'],
    ['GET', '/api/newsletter?action=inventée'],
  ]],
  ['checkout-webhook', 'api/checkout-webhook.ts', [
    ['POST', '/api/checkout-webhook', '{}'],
    ['POST', '/api/checkout-webhook', 'pas du json'],
  ]],
]

for (const [name, entry, cases] of ENDPOINTS) {
  console.log(`\n--- ${name} ------------------------------------------------`)
  let mod
  try {
    mod = await load(entry)
  } catch (e) {
    ok(`${name} · se charge`, false, String(e?.message || e).slice(0, 110))
    continue
  }
  const handler = mod.default
  if (typeof handler !== 'function') { ok(`${name} · exporte un handler`, false); continue }
  for (const [method, url, body] of cases) {
    await probe(name, handler, method, url, body)
  }
}

/* ---- et la règle qui compte le plus ---------------------------------- */
// Un endpoint sans base ne doit JAMAIS répondre « ok: true ». C'est ce qui
// ferait croire à l'écran qu'une clé est enregistrée alors que rien ne l'est.
console.log('\n--- sans base, personne ne prétend avoir réussi ---------------')
{
  // La règle qui compte le plus. Un « ok: true » sans base ferait croire à
  // l'écran qu'une clé est enregistrée, un document poussé, une permission
  // accordée — alors que rien n'a été écrit nulle part. C'est pire qu'une
  // erreur : c'est une erreur qu'on ne découvre que le lendemain.
  const WRITES = [
    ['connect', 'api/connect.ts', 'POST', '/api/connect?action=setkey', { connector: 'anthropic', client: 'd', key: 'sk-ant-api03-' + 'y'.repeat(40) }],
    ['connect', 'api/connect.ts', 'POST', '/api/connect?action=disconnect', { connector: 'notion', client: 'd' }],
    ['connect', 'api/connect.ts', 'POST', '/api/connect?action=permit', { connector: 'stripe', write: true, client: 'd' }],
    ['connect', 'api/connect.ts', 'POST', '/api/connect?action=removekey', { connector: 'anthropic', client: 'd' }],
    ['org', 'api/org.ts', 'POST', '/api/org?action=rename&client=d', { name: 'Autre' }],
    ['org', 'api/org.ts', 'POST', '/api/org?action=invite&client=d', { role: 'member' }],
    ['secrets', 'api/secrets.ts', 'POST', '/api/secrets?action=save&client=d', { dojo: 'd1', name: 'A', value: 'b' }],
    ['docs', 'api/docs.ts', 'POST', '/api/docs?action=push&client=d', { docs: [] }],
    ['rag', 'api/rag.ts', 'POST', '/api/rag?action=parse&client=d', { text: 'bonjour', title: 't' }],
    ['tool-action', 'api/tool-action.ts', 'POST', '/api/tool-action', { connector: 'slack', action: 'post', text: 'hi', client: 'd' }],
    ['clan', 'api/clan.ts', 'POST', '/api/clan?action=create', { key: 'k'.repeat(43), pseudo: 'Nora', title: 'Un agent', body: 'Il trie mes e-mails chaque matin.' }],
    ['clan', 'api/clan.ts', 'POST', '/api/clan?action=bravo', { key: 'k'.repeat(43), id: '00000000-0000-4000-8000-000000000001' }],
    ['clan', 'api/clan.ts', 'POST', '/api/clan?action=report', { key: 'k'.repeat(43), id: '00000000-0000-4000-8000-000000000001' }],
    ['newsletter', 'api/newsletter.ts', 'POST', '/api/newsletter', { email: 'nora@exemple.fr', newsletter: true }],
    ['community', 'api/community.ts', 'POST', '/api/community?action=join', { name: 'Nora' }],
    ['community', 'api/community.ts', 'POST', '/api/community?action=post', { category: 'general', title: 'Bonjour', body: 'Mon premier message ici.' }],
    ['community', 'api/community.ts', 'POST', '/api/community?action=comment', { postId: '00000000-0000-4000-8000-000000000001', body: 'Merci !' }],
    ['profile', 'api/profile.ts', 'PUT', '/api/profile', { data: { v: 1, academy: { done: ['a/b'], answers: {} } } }],
    ['profile', 'api/profile.ts', 'POST', '/api/profile?action=sync', { data: {}, access: { path: true } }],
    ['profile', 'api/profile.ts', 'POST', '/api/profile?action=claim', { session_id: 'cs_test_abc123' }],
  ]
  const bad = []
  for (const [name, entry, m, u, payload] of WRITES) {
    const mod = await load(entry)
    const { req, res, finished } = fake(m, u, JSON.stringify(payload))
    await handlerSafe(mod.default, req, res)
    const r = await Promise.race([finished, new Promise((x) => setTimeout(() => x(null), 6000))])
    if (!r) { bad.push(`${u} n’a pas répondu`); continue }
    let j = {}
    try { j = JSON.parse(r.body) } catch { bad.push(`${u} → corps illisible`); continue }
    if (j?.ok === true) bad.push(`${name} ${u.split('action=')[1] || ''} → ok:true`)
  }
  ok(`aucune des ${WRITES.length} écritures ne se déclare réussie sans base`,
    bad.length === 0, bad.join(' | ') || 'un « ok » sans base est une erreur qu’on découvre le lendemain')
}

async function handlerSafe(h, req, res) {
  try { await h(req, res) } catch { /* déjà compté ailleurs */ }
}

/* ---- la limite de corps doit couvrir ce que le client a le DROIT d'envoyer -- */
//
// Une limite de corps est un garde-fou contre l'abus, pas contre l'usage. Celle
// d'agent-run était à 8 000 caractères alors que le pire cas LÉGITIME —
// dix-huit règles permanentes, un brief, et quatre agents MCP externes dont les
// jetons sont souvent des JWT de 800 caractères — le dépasse. Le run échouait
// en « too_large » pour quelqu'un qui n'avait fait qu'utiliser le produit.
//
// Le pire cas est RECALCULÉ depuis les constantes du client : personne n'a à se
// souvenir de refaire l'addition en changeant l'une d'elles.
console.log('\n--- la limite de corps couvre l’usage légitime -----------------')
{
  const { readFileSync } = await import('node:fs')
  const skills = readFileSync('src/agents/skills.ts', 'utf8')
  const num = (name, fallback) => {
    const m = skills.match(new RegExp(`${name}\\s*=\\s*(\\d+)`))
    return m ? Number(m[1]) : fallback
  }
  const MAX_LEN = num('MAX_LEN', 220)
  const PER_ROLE = num('MAX_PER_ROLE', 8)
  const GLOBAL = num('MAX_GLOBAL', 10)

  // ce que api/agent-run accepte comme agents externes
  const run = readFileSync('api/agent-run.ts', 'utf8')
  const extCap = Number((run.match(/raw\.slice\(0,\s*(\d+)\)/) || [])[1] || 4)
  const limit = Number((run.match(/d\.length > (\d+)/) || [])[1] || 0)

  const JWT = 900   // un jeton d'agent externe · un JWT en fait couramment autant
  const worst =
    (PER_ROLE + GLOBAL) * (MAX_LEN + 8)   // les règles permanentes
    + extCap * (300 + 80 + JWT)           // url + nom + jeton, par agent externe
    + 300 + 200 + 80 + 80                 // brief, nom d'entreprise, tâche, dojo
    + 16 * 14                             // les connecteurs demandés
    + 600                                 // enrobage JSON, identité, effort

  ok('la limite de agent-run couvre le pire cas légitime du client',
    limit >= worst, `limite ${limit} · pire cas ${worst} caractères`)
  ok('et reste une limite, pas une porte ouverte', limit > 0 && limit <= 200000,
    `${limit} caractères`)
}

/* ---- qui est opérateur · le serveur le dit, le client ne le sait pas ------ */
//
// `src/config/admin.ts` portait l'adresse de l'opérateur en clair, pour décider
// d'afficher deux commandes. Elle partait donc dans le paquet JavaScript servi à
// tout le monde, où elle ne gardait rien : le serveur n'a jamais cru le client
// là-dessus, et l'autorisation d'écrire dans une application passe par le rôle
// dans l'organisation. Une adresse personnelle publiée pour rien est une adresse
// offerte aux robots.
//
// Le navigateur reçoit maintenant un booléen. Deux choses à tenir :
console.log('\n--- opérateur · dit par le serveur, pas porté par le client ----')
{
  const { readFileSync, readdirSync } = await import('node:fs')

  // 1 · le client ne porte plus de liste d'adresses.
  const fuites = []
  const walk = (dir) => {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const f = `${dir}/${e.name}`
      if (e.isDirectory()) { walk(f); continue }
      if (!/\.(ts|tsx)$/.test(e.name)) continue
      const src = readFileSync(f, 'utf8')
      // une adresse dans un `mailto:` est un contact volontaire (page légale,
      // effacement RGPD) · une adresse dans une LISTE est un privilège
      for (const m of src.matchAll(/[\w.+-]+@[\w.-]+\.\w+/g)) {
        const autour = src.slice(Math.max(0, m.index - 60), m.index)
        if (/mailto:|placeholder|example|@example|aria-|title=/i.test(autour)) continue
        if (/ADMIN|OPERATOR|allowlist|BUILTIN/i.test(src.slice(Math.max(0, m.index - 300), m.index))) {
          fuites.push(`${f} · ${m[0]}`)
        }
      }
    }
  }
  walk('src')
  ok('aucune liste d’adresses opérateur dans le paquet client',
    fuites.length === 0, fuites.slice(0, 3).join(' | ') || 'le serveur seul lit ADMIN_EMAILS')

  // 2 · et le serveur répond « non » quand il ne peut pas savoir.
  const C = await load('api/connect.ts')
  const { req, res, finished } = fake('GET', '/api/connect?action=list&client=diag')
  await handlerSafe(C.default, req, res)
  const r = await Promise.race([finished, new Promise((x) => setTimeout(() => x(null), 6000))])
  let j = {}
  try { j = JSON.parse(r?.body || '{}') } catch { /* signalé plus haut */ }
  ok('la liste des applications porte le drapeau opérateur', 'admin' in j,
    'sans lui, les deux écrans ne peuvent plus rien afficher de juste')
  ok('et il vaut « non » quand la base est absente', j.admin === false,
    'un privilège dont le défaut est « oui quand on ne sait pas » n’en est pas un')
}

rmSync(TMP, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
