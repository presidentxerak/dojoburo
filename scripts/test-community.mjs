// LA COMMUNAUTÉ · le fil à la manière de Skool, tenu.
//
// POURQUOI CETTE ÉPREUVE EXISTE · demandé : « faire un clone amélioré de
// l'app skool.com [...] comme le groupe d'Elliot », avec un compte
// obligatoire pour participer et « Clan devient Communauté ». Ce qui peut se
// casser sans bruit : une écriture acceptée sans compte, un texte non borné,
// une borne différente entre le serveur, le schéma et le navigateur, un
// identifiant de compte exposé, un onglet qui a perdu son nom.
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}
const OUT = 'node_modules/.dojo-community'
mkdirSync(OUT, { recursive: true })
const r = await build({ entryPoints: ['api/_lib/community.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
writeFileSync(join(OUT, 'c.mjs'), r.outputFiles[0].text)
const C = await import(pathToFileURL(join(OUT, 'c.mjs')).href)

/* --- 1 · les règles ------------------------------------------------------ */
const good = C.validatePost({ category: 'wins', title: '  Mon agent  ', body: 'Il trie mes e-mails\n\n\n\nchaque matin.' })
ok('une publication valide est nettoyée', good.title === 'Mon agent' && good.body === 'Il trie mes e-mails\n\nchaque matin.')
ok('une catégorie inconnue est refusée', 'error' in C.validatePost({ category: 'pub', title: 'Titre', body: 'x'.repeat(20) }))
ok('un titre trop court est refusé', 'error' in C.validatePost({ category: 'general', title: 'a', body: 'x'.repeat(20) }))
ok('un message trop long est refusé', 'error' in C.validatePost({ category: 'general', title: 'Titre', body: 'x'.repeat(C.LIMITS.body.max + 1) }))
ok('un commentaire vide est refusé', 'error' in C.validateComment({ postId: '00000000-0000-4000-8000-000000000001', body: '   ' }))
ok('un commentaire sur un identifiant invalide est refusé', 'error' in C.validateComment({ postId: 'x', body: 'Merci' }))
ok('un nom trop long est refusé', typeof C.validateName('x'.repeat(40)) !== 'string')
ok('la recherche ignore un seul caractère', C.cleanQuery('a') === '' && C.cleanQuery(' prompt  agent ') === 'prompt agent')
const cur = C.encodeCursor({ t: new Date(0).toISOString(), id: '00000000-0000-4000-8000-000000000001' })
ok('le curseur fait l\'aller-retour', C.decodeCursor(cur)?.id === '00000000-0000-4000-8000-000000000001')
ok('un curseur forgé est ignoré', C.decodeCursor('pas-un-curseur') === null)

/* --- 2 · rien de brut ne sort --------------------------------------------- */
const row = { id: 'i', category: 'general', title: 't', body: 'b'.repeat(400), pinned: false, likes: 1, comments: 0, created_at: new Date(), edited_at: null, author_did: 'did:privy:abc123', author_name: 'Nora' }
const sp = C.serializePost(row, 'did:privy:abc123', true)
ok('l\'identifiant du compte ne sort jamais', !JSON.stringify(sp).includes('did:privy'))
ok('« c\'est moi » est calculé côté serveur', sp.mine === true && C.serializePost(row, 'did:privy:autre').mine === false)
ok('le fil n\'envoie qu\'un extrait', sp.truncated === true && sp.body.length < 340)
const sc = C.serializeComment({ ...row, post_id: 'p', parent_id: null, deleted: true }, null)
ok('un commentaire supprimé ne garde ni texte ni auteur', sc.body === '' && sc.author === null)

/* --- 3 · les trois copies des bornes s'accordent ------------------------- */
const client = readFileSync('src/lib/community.ts', 'utf8')
const sql = readFileSync('db/community.sql', 'utf8')
const ccat = (client.match(/COMMUNITY_CATEGORIES = \[([^\]]*)\]/)?.[1] || '').match(/'([a-z]+)'/g)?.map((x) => x.slice(1, -1)) || []
ok('le navigateur connaît les mêmes catégories', ccat.join(',') === C.CATEGORIES.join(','), ccat.join(','))
ok('le schéma connaît les mêmes catégories', C.CATEGORIES.every((c) => sql.includes(`'${c}'`)))
for (const [f, col] of [['name', 'name'], ['title', 'title'], ['body', 'body']]) {
  const m = client.match(new RegExp(`${f}:\\s*\\{\\s*min:\\s*(\\d+),\\s*max:\\s*(\\d+)`))
  ok(`le navigateur borne « ${f} » pareil`, m && +m[1] === C.LIMITS[f].min && +m[2] === C.LIMITS[f].max)
  ok(`le schéma borne « ${f} » pareil`, new RegExp(`char_length\\(${col}\\) between ${C.LIMITS[f].min} and ${C.LIMITS[f].max}`).test(sql))
}

/* --- 4 · l'endpoint ------------------------------------------------------ */
const api = readFileSync('api/community.ts', 'utf8')
ok('l\'écriture demande un compte vérifié', /if \(!me\) return send\(res, 401/.test(api) && /verifyPrivyToken\(/.test(api))
ok('sans base, 503 partout', /if \(!dbConfigured\(\)\) return send\(res, 503, \{ ok: false, error: 'not_configured' \}\)/.test(api))
ok('épingler est réservé aux admins', /async function pin[\s\S]*?if \(!\(await isAdmin\(me\)\)\) return send\(res, 403/.test(api))
ok('supprimer : l\'auteur ou un admin', /author_did !== me && !\(await isAdmin\(me\)\)/.test(api))
ok('les écritures passent par le limiteur', /async function limited/.test(api) && /limited\('post', me\)/.test(api) && /limited\('comment', me\)/.test(api))

/* --- 5 · la page --------------------------------------------------------- */
const page = readFileSync('src/game/Community.tsx', 'utf8')
const dict = readFileSync('src/i18n/dict.ts', 'utf8')
ok('l\'onglet Clan s\'appelle Communauté', /'nav\.clan': \{ en: 'Community', fr: 'Communauté' \}/.test(dict))
ok('déconnecté, écrire mène à la connexion', /onClick=\{signIn\}/.test(page))
ok('connecté, on choisit un nom avant de publier', /<JoinForm/.test(page))
ok('la page ne rend jamais de HTML', !/dangerouslySetInnerHTML|innerHTML/.test(page))
ok('pas d\'onglet qui ne mène nulle part', !/Calendrier|Classements|Membres/.test(page.replace(/\/\/[^\n]*/g, '')))

/* --- 6 · les morsures ---------------------------------------------------- */
ok('morsure · un identifiant exposé serait vu', JSON.stringify({ did: 'did:privy:x' }).includes('did:privy'))
ok('morsure · une borne divergente serait vue', !new RegExp('char_length\\(title\\) between 3 and 120').test('char_length(title) between 3 and 200'))

console.log('\ntest-community')
process.exitCode = fails ? 1 : 0
