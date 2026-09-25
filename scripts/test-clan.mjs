// LE CLAN · la logique du fil, vérifiée sans base ni navigateur.
//
// api/_lib/clan.ts décide seul de ce qui entre dans le fil : la validation, le
// nettoyage, les liens permis, le spam évident, la sérialisation et le curseur
// de pagination. Tout cela est pur, donc éprouvé ici sans Postgres.
//
// Ce qu'on garde, et pourquoi :
//   · RIEN D'INVISIBLE NE PASSE · caractères de contrôle, espaces de largeur
//     nulle, surcharges de direction : ce sont les outils du maquillage.
//   · UN LIEN EST UNE ADRESSE WEB · http(s) seulement. Un `javascript:` dans
//     une carte est un clic qui exécute du code.
//   · L'EMPREINTE DE L'AUTEUR NE SORT JAMAIS · le navigateur reçoit `mine`,
//     jamais `author_hash`.
//   · LE CURSEUR FAIT L'ALLER-RETOUR · et un curseur abîmé repart du début
//     au lieu de lever.
//   · LES DEUX COPIES DES BORNES S'ACCORDENT · serveur, navigateur et schéma
//     SQL disent les mêmes longueurs et les mêmes étiquettes.
//   · ET CHAQUE RÈGLE MORD · une garde qui laisse tout passer ressemble
//     exactement à une garde qui marche, tant qu'on ne l'a pas vue refuser.
//
//   node scripts/test-clan.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}
const OUT = 'node_modules/.dojo-clan'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const C = await load('api/_lib/clan.ts', 'clan.mjs')
const { LIMITS, TAGS } = C

const good = {
  pseudo: 'Nora',
  title: 'Un agent qui trie mes e-mails',
  body: 'Il lit chaque message, propose une étiquette et un brouillon de réponse.',
  link: 'https://example.org/mon-agent',
  tags: ['agent', 'automation'],
}
const v = (patch) => C.validateDraft({ ...good, ...patch })
const refused = (patch, field, reason) => {
  const r = v(patch)
  return !r.ok && r.field === field && (!reason || r.reason === reason)
}

/* --- 1 · la validation ---------------------------------------------------- */
console.log('--- la validation ---------------------------------------------')
{
  const r = v({})
  ok('un message correct passe', r.ok, r.ok ? '' : JSON.stringify(r))
  ok('il revient nettoyé et complet', r.ok && r.draft.pseudo === 'Nora' && r.draft.link === 'https://example.org/mon-agent'
    && r.draft.tags.join(',') === 'agent,automation')
  ok('le pseudonyme · 2 caractères au moins', refused({ pseudo: 'N' }, 'pseudo', 'too_short') && v({ pseudo: 'No' }).ok)
  ok('le pseudonyme · 24 au plus', refused({ pseudo: 'N'.repeat(25) }, 'pseudo', 'too_long') && v({ pseudo: 'N'.repeat(24) }).ok)
  ok('le pseudonyme · pas de balises ni de symboles', refused({ pseudo: '<b>Nora</b>' }, 'pseudo', 'chars')
    && refused({ pseudo: '@admin' }, 'pseudo', 'chars'))
  ok('le pseudonyme · accents, espace, apostrophe et tiret passent', v({ pseudo: "Zoé d'Arc-Ney 2" }).ok)
  ok('le pseudonyme est resserré', v({ pseudo: '  Nora   L.  ' }).draft?.pseudo === 'Nora L.')
  ok('le titre · 3 à 80', refused({ title: 'ab' }, 'title', 'too_short') && refused({ title: 'x'.repeat(81) }, 'title', 'too_long')
    && v({ title: 'abc' }).ok && v({ title: 'x'.repeat(80) }).ok)
  ok('le texte · 10 à 1000', refused({ body: 'trop court' .slice(0, 9) }, 'body', 'too_short')
    && refused({ body: 'x'.repeat(1001) }, 'body', 'too_long') && v({ body: 'x'.repeat(1000) }).ok)
  ok('les longueurs se comptent en caractères lus', v({ title: '🤖🤖🤖' }).ok && v({ body: '🤖'.repeat(1000) }).ok
    && refused({ body: '🤖'.repeat(1001) }, 'body', 'too_long'))
  ok('des espaces seuls ne font pas un titre', refused({ title: '     ' }, 'title', 'too_short'))
  ok('un champ qui n’est pas du texte est vide', refused({ title: 42 }, 'title') && refused({ pseudo: ['Nora'] }, 'pseudo'))
  ok('un corps absent est refusé sans lever', !C.validateDraft(undefined).ok && !C.validateDraft(null).ok)
}

/* --- 2 · le nettoyage ----------------------------------------------------- */
console.log('\n--- le nettoyage ----------------------------------------------')
{
  ok('les caractères de contrôle partent', C.cleanLine('a\u0000b\u0007c\u007Fd\u0085e') === 'abcde')
  ok('les caractères invisibles partent', C.cleanLine('No​ra‮﻿') === 'Nora')
  ok('une ligne n’a pas de retour', C.cleanLine('un\ndeux\r\ntrois\tquatre') === 'un deux trois quatre')
  const t = C.cleanText('  première\r\n\r\n\r\n\r\nseconde  \n\u0000troisième\t fin  ')
  ok('un texte garde ses retours, pas trois lignes vides', t === 'première\n\nseconde\ntroisième fin', JSON.stringify(t))
  ok('le HTML reste du texte (il ne sera jamais interprété)',
    v({ body: '<script>alert(1)</script> et du texte' }).draft?.body === '<script>alert(1)</script> et du texte')
  ok('la forme NFC est imposée', C.cleanLine('é') === 'é')
}

/* --- 3 · les liens -------------------------------------------------------- */
console.log('\n--- les liens -------------------------------------------------')
{
  ok('https passe', C.cleanLink('https://exemple.fr/a?b=1').ok)
  ok('http passe', C.cleanLink('http://exemple.fr').ok)
  ok('un lien vide est facultatif', C.cleanLink('').ok && C.cleanLink('').link === null && C.cleanLink(undefined).link === null)
  for (const bad of ['javascript:alert(1)', 'JAVASCRIPT:alert(1)', 'data:text/html,<b>x</b>', 'ftp://exemple.fr',
    'file:///etc/passwd', 'vbscript:x', '//exemple.fr', 'exemple.fr']) {
    ok(`refusé · ${bad}`, !C.cleanLink(bad).ok)
  }
  ok('refusé · des identifiants dans l’adresse', C.cleanLink('https://banque.fr@leurre.io').reason === 'credentials')
  ok('refusé · une machine locale ou une IP', !C.cleanLink('http://localhost:3000').ok && !C.cleanLink('http://127.0.0.1/').ok
    && !C.cleanLink('http://[::1]/').ok && !C.cleanLink('http://intranet/').ok)
  ok('refusé · une adresse trop longue', C.cleanLink('https://exemple.fr/' + 'a'.repeat(300)).reason === 'too_long')
  ok('le lien refusé nomme son champ', refused({ link: 'javascript:alert(1)' }, 'link', 'scheme'))
}

/* --- 4 · les étiquettes --------------------------------------------------- */
console.log('\n--- les étiquettes --------------------------------------------')
{
  ok('aucune étiquette, c’est permis', v({ tags: [] }).ok && v({ tags: undefined }).ok)
  ok('trois au plus', v({ tags: ['agent', 'rag', 'game'] }).ok && refused({ tags: ['agent', 'rag', 'game', 'prompt'] }, 'tags', 'too_many'))
  ok('hors de la liste, refusée', refused({ tags: ['crypto'] }, 'tags', 'unknown'))
  ok('pas une liste, refusée', refused({ tags: 'agent' }, 'tags', 'shape'))
  ok('casse et doublons ramenés', v({ tags: ['Agent', 'agent', ' RAG '] }).draft?.tags.join(',') === 'agent,rag')
}

/* --- 5 · le spam évident -------------------------------------------------- */
console.log('\n--- le spam ---------------------------------------------------')
{
  const two = 'Voir https://a.fr et www.b.fr pour le détail.'
  const three = 'Voir https://a.fr, http://b.fr et www.c.fr pour le détail.'
  ok('deux liens dans le texte passent', v({ body: two }).ok)
  ok('trois liens dans le texte sont du spam', (() => { const r = v({ body: three }); return !r.ok && r.error === 'spam' && r.reason === 'links' })())
  ok('le lien du champ prévu ne compte pas', C.countLinks(two) === 2 && v({ body: two, link: 'https://d.fr' }).ok)

  const now = Date.parse('2026-09-24T12:00:00.000Z')
  const h = await C.hashBody('Le même texte, posté deux fois.')
  const h2 = await C.hashBody('  le MÊME texte,   posté deux fois.  ')
  ok('le même texte a la même empreinte, casse et espaces ignorés', h === h2 && /^[0-9a-f]{64}$/.test(h))
  ok('un autre texte a une autre empreinte', h !== await C.hashBody('Un texte différent, vraiment.'))
  ok('le même texte dans l’heure est un doublon',
    C.isDuplicate([{ bodyHash: h, createdAt: new Date(now - 10 * 60 * 1000) }], h, now))
  ok('au-delà de l’heure, ce n’en est plus un',
    !C.isDuplicate([{ bodyHash: h, createdAt: new Date(now - 61 * 60 * 1000) }], h, now))
  ok('un autre texte dans l’heure n’en est pas un',
    !C.isDuplicate([{ bodyHash: 'f'.repeat(64), createdAt: new Date(now - 60 * 1000) }], h, now))
  ok('aucun message récent, aucun doublon', !C.isDuplicate([], h, now))
}

/* --- 6 · l'identité ------------------------------------------------------- */
console.log('\n--- l’identité ------------------------------------------------')
{
  const key = 'k'.repeat(43)
  const d1 = await C.hashDeviceKey(key)
  ok('la clé devient une empreinte de 64 caractères', /^[0-9a-f]{64}$/.test(d1) && !d1.includes(key))
  ok('la même clé, la même empreinte', d1 === await C.hashDeviceKey(key))
  ok('une autre clé, une autre empreinte', d1 !== await C.hashDeviceKey('j'.repeat(43)))
  ok('l’IP dépend du sel', (await C.hashIp('1.2.3.4', 'a')) !== (await C.hashIp('1.2.3.4', 'b')))
  ok('une clé trop courte ou exotique est refusée', !C.isDeviceKey('court') && !C.isDeviceKey('k'.repeat(31))
    && !C.isDeviceKey('k'.repeat(40) + '!') && !C.isDeviceKey(undefined) && C.isDeviceKey(key))
  ok('un identifiant de message est un uuid', C.isPostId('7d1c2a3e-1111-4a2b-9c3d-0123456789ab')
    && !C.isPostId("1' or '1'='1") && !C.isPostId(''))
}

/* --- 7 · le curseur ------------------------------------------------------- */
console.log('\n--- le curseur ------------------------------------------------')
{
  const c = { t: '2026-09-24T10:11:12.345Z', id: '7d1c2a3e-1111-4a2b-9c3d-0123456789ab' }
  const s = C.encodeCursor(c)
  const back = C.decodeCursor(s)
  ok('il fait l’aller-retour', back && back.t === c.t && back.id === c.id, s)
  ok('il tient dans une adresse', /^[A-Za-z0-9_-]+$/.test(s))
  ok('il accepte une date objet', C.decodeCursor(C.encodeCursor({ t: new Date(c.t), id: c.id }))?.t === c.t)
  for (const bad of ['', 'xx', '!!!', 'a'.repeat(400), Buffer.from('2026-09-24T10:11:12.345Z|pas-un-uuid').toString('base64url'),
    Buffer.from('hier|7d1c2a3e-1111-4a2b-9c3d-0123456789ab').toString('base64url'),
    Buffer.from(`${c.t}|${c.id}|en-trop`).toString('base64url'), null, 42]) {
    ok(`un curseur abîmé rend null · ${String(bad).slice(0, 24)}`, C.decodeCursor(bad) === null)
  }
}

/* --- 8 · la sérialisation et la page -------------------------------------- */
console.log('\n--- la sérialisation ------------------------------------------')
{
  const me = 'a'.repeat(64)
  const row = (i, author = 'b'.repeat(64)) => ({
    id: `00000000-0000-4000-8000-${String(i).padStart(12, '0')}`,
    author_hash: author, pseudo: 'Nora', title: 'Titre', body: 'Un texte de dix', link: null,
    tags: ['agent', 'inventée'], created_at: new Date(Date.UTC(2026, 8, 24, 12, 0, 0) - i * 1000), bravos: '3', bravoed: i === 1,
  })
  const p = C.serializePost(row(1, me), me)
  ok('l’empreinte de l’auteur ne sort jamais', !('author_hash' in p) && !JSON.stringify(p).includes(me))
  ok('« mine » se calcule côté serveur', p.mine === true && C.serializePost(row(1), me).mine === false
    && C.serializePost(row(1, me), null).mine === false)
  ok('les nombres sont des nombres, les dates des ISO', p.bravos === 3 && p.created_at.endsWith('Z') && p.bravoed === true)
  ok('une étiquette inconnue en base ne sort pas', p.tags.join(',') === 'agent')

  const rows = Array.from({ length: LIMITS.pageSize + 1 }, (_, i) => row(i + 1))
  const full = C.toPage(rows, me)
  ok(`une page fait ${LIMITS.pageSize} messages`, full.posts.length === LIMITS.pageSize)
  const cur = C.decodeCursor(full.next)
  ok('la ligne en trop annonce une suite, pointée sur le dernier affiché',
    !!cur && cur.id === rows[LIMITS.pageSize - 1].id && cur.t === rows[LIMITS.pageSize - 1].created_at.toISOString())
  ok('sans ligne en trop, pas de suite', C.toPage(rows.slice(0, LIMITS.pageSize), me).next === null
    && C.toPage([], me).next === null && C.toPage([], me).posts.length === 0)
}

/* --- 9 · les copies s'accordent ------------------------------------------- */
console.log('\n--- les bornes, partout les mêmes -----------------------------')
{
  const client = readFileSync('src/lib/clan.ts', 'utf8')
  const ctags = (client.match(/CLAN_TAGS\s*=\s*\[([^\]]*)\]/)?.[1] || '').match(/'([a-z]+)'/g)?.map((x) => x.slice(1, -1)) || []
  ok('le navigateur connaît les mêmes étiquettes', ctags.join(',') === TAGS.join(','), ctags.join(','))
  for (const f of ['pseudo', 'title', 'body']) {
    const m = client.match(new RegExp(`${f}:\\s*\\{\\s*min:\\s*(\\d+),\\s*max:\\s*(\\d+)`))
    ok(`le navigateur borne « ${f} » pareil`, m && +m[1] === LIMITS[f].min && +m[2] === LIMITS[f].max, m ? `${m[1]}..${m[2]}` : 'introuvable')
  }
  const sql = readFileSync('db/clan.sql', 'utf8')
  for (const f of ['pseudo', 'title', 'body']) {
    const m = sql.match(new RegExp(`char_length\\(${f}\\) between (\\d+) and (\\d+)`))
    ok(`le schéma borne « ${f} » pareil`, m && +m[1] === LIMITS[f].min && +m[2] === LIMITS[f].max, m ? `${m[1]}..${m[2]}` : 'introuvable')
  }
  ok('le schéma masque au même seuil', new RegExp(`where reports < ${LIMITS.hideAt}\\b`).test(sql))
  ok('le schéma borne les étiquettes pareil', new RegExp(`cardinality\\(tags\\) <= ${LIMITS.tags.max}`).test(sql))
}

/* --- 10 · l'endpoint et la page ------------------------------------------- */
console.log('\n--- l’endpoint et la page -------------------------------------')
{
  const api = readFileSync('api/clan.ts', 'utf8')
  // LA PAGE A CHANGÉ · demandé : « Clan devient Communauté », refaite à la
  // manière de Skool (game/Community). Les assertions sur la page portent
  // maintenant sur elle ; celles sur l'endpoint du clan restent, il sert
  // toujours les anciens messages.
  const page = readFileSync('src/game/Community.tsx', 'utf8')
  const text = readFileSync('src/game/communityText.ts', 'utf8')
  ok('l’endpoint vérifie l’origine', /originAllowed\(/.test(api))
  ok('sans base, il le dit en 503', /dbConfigured\(\)\)\s*return send\(res,\s*503,\s*\{\s*ok:\s*false,\s*error:\s*'not_configured'/.test(api))
  ok('il passe par le limiteur partagé', /from '\.\/_lib\/ratelimit\.js'/.test(api))
  ok('il ne renvoie jamais une ligne brute', /post:\s*serializePost\(/.test(api) && /\.\.\.toPage\(/.test(api)
    && !/(?:post|posts):\s*r\.rows/.test(api))
  ok('la page ne rend jamais de HTML', !/dangerouslySetInnerHTML|innerHTML/.test(page))
  ok('la page dit quand le serveur n’est pas configuré', /'not_configured'/.test(page) && /CT\.offTitle/.test(page))
  ok('la page n’emploie plus les clés cl.* du dictionnaire', !/t\('cl\./.test(page))
  ok('la page passe par apiFetch', /from '\.\/apiFetch'/.test(readFileSync('src/lib/community.ts', 'utf8')))
  // AUCUN LIEN FABRIQUÉ À PARTIR D'UN MESSAGE · le texte d'un membre est
  // affiché comme du texte ; une adresse qu'il contient n'est pas cliquable.
  ok('aucun lien n\'est tiré du texte d\'un membre', !/href=\{(?:p|x|post|c)\./.test(page))

  // LE FRANÇAIS DU CLAN · vouvoiement, pas de tiret cadratin.
  const fr = [...text.matchAll(/B\(\s*(?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")\s*,\s*('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g)].map((m) => m[1].slice(1, -1))
  const TU = /(?<!\p{L})(?:tu|te|toi|ta|tes|ton)(?!\p{L})|(?<!\p{L})t['’](?=\p{L})/iu
  ok('le clan a ses textes français', fr.length >= 40, `${fr.length} chaînes`)
  ok('le clan vouvoie', fr.every((s) => !TU.test(s)), fr.filter((s) => TU.test(s)).slice(0, 2).join(' | '))
  ok('aucun tiret cadratin', fr.every((s) => !s.includes('—')))
}

/* --- 10b · le handler, sans base ------------------------------------------ */
console.log('\n--- le handler, sans base -------------------------------------')
{
  delete process.env.DATABASE_URL
  const r = await build({ entryPoints: ['api/clan.ts'], bundle: true, format: 'esm', platform: 'node', write: false, external: ['pg'], logLevel: 'silent' })
  const f = join(OUT, 'clan-api.mjs')
  writeFileSync(f, r.outputFiles[0].text)
  const H = (await import(pathToFileURL(f).href)).default
  const call = (method, url, headers = {}, body) => new Promise((resolve) => {
    const req = {
      method, url, headers: { host: 'dojoburo.test', ...headers }, rawBody: body,
      on(ev, fn) { if (ev === 'end') fn(); return req }, destroy() {},
    }
    const res = {
      statusCode: 200, _h: {},
      setHeader(k, v) { this._h[k.toLowerCase()] = v },
      end(b) { resolve({ status: this.statusCode, body: b ? JSON.parse(b) : null }) },
    }
    Promise.resolve(H(req, res)).catch((e) => resolve({ status: 'LEVÉ', body: String(e) }))
  })
  const off = await call('GET', '/api/clan')
  ok('sans base · 503 et « not_configured »', off.status === 503 && off.body?.error === 'not_configured' && off.body?.ok === false)
  const foreign = await call('POST', '/api/clan?action=create', { origin: 'https://ailleurs.example' }, '{}')
  ok('une autre origine est refusée avant tout', foreign.status === 403 && foreign.body?.error === 'origin')
  const same = await call('POST', '/api/clan?action=create', { origin: 'https://www.dojoburo.test' }, '{}')
  ok('… et le même site passe la porte (puis bute sur la base)', same.status === 503 && same.body?.error === 'not_configured')
  const put = await call('PUT', '/api/clan')
  ok('une méthode inattendue est refusée', put.status === 405 && put.body?.error === 'method')
}

/* --- 11 · les morsures ---------------------------------------------------- */
console.log('\n--- les morsures ----------------------------------------------')
{
  // Chaque règle doit refuser ce qu'elle vise ET laisser passer ce qu'elle ne
  // vise pas · une garde qui ne mord que dans un sens est un décor.
  ok('morsure · un lien « javascript: » camouflé est vu', !C.cleanLink(' \tjavascript:alert(1)').ok
    && !C.cleanLink('java​script:alert(1)').ok)
  ok('morsure · … et un vrai lien n’est pas accusé', C.cleanLink('https://github.com/nora/agent').ok)
  ok('morsure · trois liens sont vus, deux ne le sont pas', C.countLinks('https://a.fr http://b.fr www.c.fr') === 3
    && C.countLinks('https://a.fr et http://b.fr') === 2)
  ok('morsure · un doublon à 59 min est vu, à 61 min non',
    C.isDuplicate([{ bodyHash: 'x', createdAt: 0 }], 'x', 59 * 60 * 1000) && !C.isDuplicate([{ bodyHash: 'x', createdAt: 0 }], 'x', 61 * 60 * 1000))
  ok('morsure · un tutoiement serait vu', /(?<!\p{L})(?:tu|te|toi|ta|tes|ton)(?!\p{L})|(?<!\p{L})t['’](?=\p{L})/iu.test('Partage ton agent'))
  ok('morsure · un pseudonyme de 24 passe, de 25 non', v({ pseudo: 'é'.repeat(24) }).ok && !v({ pseudo: 'é'.repeat(25) }).ok)
  ok('morsure · un curseur valide n’est pas rejeté par excès de zèle',
    C.decodeCursor(C.encodeCursor({ t: '2020-01-01T00:00:00.000Z', id: 'ffffffff-ffff-4fff-bfff-ffffffffffff' })) !== null)
}

console.log(fails ? `\ntest-clan · ${fails} problème(s)` : '\ntest-clan · tout est vert')
process.exit(fails ? 1 : 0)
