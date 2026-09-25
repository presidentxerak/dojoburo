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
// CHAQUE ONGLET MÈNE À SA VUE · les onglets arrivent avec leur lot, jamais
// avant (Membres et Classements avec le lot 2, le Calendrier ensuite).
const code = page.replace(/\/\/[^\n]*/g, '')
ok('Membres et Classements ont leur vue', /membersTab \? <Members \/>/.test(code) && /boards \? <Boards me=\{me\} \/>/.test(code))
ok('un profil public par membre', /memberId \? <MemberView/.test(code) && /path\.match\(\/\^\\\/clan\\\/m\\\//.test(readFileSync('src/main.tsx', 'utf8')))
ok('pas d\'onglet Calendrier avant son lot', !/tabCalendar/.test(code) || /calendarTab \? <Calendar/.test(code))

/* --- 5b · les points et les niveaux -------------------------------------- */
ok('neuf niveaux, qui montent', C.LEVEL_POINTS.length === 9 && C.LEVEL_POINTS.every((v, i, a) => i === 0 || v > a[i - 1]))
ok('0 point, niveau 1 ; 5 points, niveau 2', C.levelOfPoints(0).level === 1 && C.levelOfPoints(5).level === 2 && C.levelOfPoints(4).level === 1)
ok('au sommet, plus de palier suivant', C.levelOfPoints(1e9).level === 9 && C.levelOfPoints(1e9).next === null)
const clientLevels = (client.match(/LEVEL_POINTS = \[([^\]]*)\]/)?.[1] || '').split(',').map((x) => Number(x.trim()))
ok('le navigateur connaît les mêmes paliers', clientLevels.join(',') === C.LEVEL_POINTS.join(','))
ok('pas d\'auto-j\'aime', /if \(author === me\) return send\(res, 400, \{ ok: false, error: 'own' \}\)/.test(api))
ok('un j\'aime donne un point à l\'auteur, le retirer le reprend', /set points = points \+ 1 where did = \$1', \[author\]/.test(api) && /set points = greatest\(points - 1, 0\) where did = \$1', \[author\]/.test(api))
ok('un membre est montré par son identifiant public', !JSON.stringify(C.serializeMember({ handle: 'h', name: 'N', points: 3, created_at: new Date(), last_seen_at: new Date() })).includes('did'))
ok('en ligne = vu il y a moins de cinq minutes', C.serializeMember({ handle: 'h', name: 'N', points: 0, created_at: new Date(), last_seen_at: new Date(Date.now() - 60e3) }).online === true
  && C.serializeMember({ handle: 'h', name: 'N', points: 0, created_at: new Date(), last_seen_at: new Date(Date.now() - 3600e3) }).online === false)

/* --- 5c · le calendrier --------------------------------------------------- */
const ev = C.validateEvent({ title: 'Live questions-réponses', startsAt: '2026-10-01T16:00:00.000Z', duration: 60, link: 'https://meet.example.com/abc' })
ok('un événement valide passe', !('error' in ev) && ev.startsAt === '2026-10-01T16:00:00.000Z')
ok('un lien de visio non chiffré est refusé', 'error' in C.validateEvent({ title: 'Live', startsAt: '2026-10-01T16:00:00Z', link: 'http://meet.example.com' }))
ok('une date illisible est refusée', 'error' in C.validateEvent({ title: 'Live', startsAt: 'demain' }))
ok('une durée hors bornes est refusée', 'error' in C.validateEvent({ title: 'Live', startsAt: '2026-10-01T16:00:00Z', duration: 5000 }))
ok('seuls les admins créent et suppriment un événement', /async function createEvent[\s\S]*?isAdmin\(me\)/.test(api) && /async function deleteEvent[\s\S]*?isAdmin\(me\)/.test(api))
ok('le calendrier a sa vue et son adresse', /calendarTab \? <Calendar me=\{me\} \/>/.test(code) && /'\/clan\/calendrier'/.test(readFileSync('src/main.tsx', 'utf8')))
ok('l\'agenda (.ics) se construit dans le navigateur', /export function icsOf/.test(client) && /BEGIN:VCALENDAR/.test(client))

/* --- 5d · les notifications et les messages ------------------------------ */
ok('jamais de notification pour son propre geste', C.shouldNotify('a', 'a') === false && C.shouldNotify('a', 'b') === true && C.shouldNotify(null, 'b') === false)
ok('un message vide ou trop long est refusé', 'error' in C.validateMessage({ to: '00000000-0000-4000-8000-000000000001', body: ' ' })
  && 'error' in C.validateMessage({ to: '00000000-0000-4000-8000-000000000001', body: 'x'.repeat(C.LIMITS.message.max + 1) }))
ok('un destinataire est désigné par son identifiant public', 'error' in C.validateMessage({ to: 'did:privy:x', body: 'Bonjour' }))
ok('on ne s\'écrit pas à soi-même', /if \(to === me\) return send\(res, 400/.test(api) && /check \(from_did <> to_did\)/.test(sql))
ok('un commentaire prévient l\'auteur, une réponse prévient celui à qui l\'on répond', /notify\(parentAuthor, 'reply'/.test(api) && /notify\(postAuthor, 'comment'/.test(api))
ok('un j\'aime prévient l\'auteur', /notify\(author, type === 'post' \? 'like_post' : 'like_comment'/.test(api))
ok('ouvrir une conversation marque ses messages comme lus', /update community_messages set read_at = now\(\) where to_did = \$1 and from_did = \$2/.test(api))
ok('la cloche et la messagerie ont leur adresse', /'\/clan\/notifications'/.test(readFileSync('src/main.tsx', 'utf8')) && /clan\\\/messages\\\//.test(readFileSync('src/main.tsx', 'utf8')))
ok('les non-lus se relisent sans canal permanent', /setInterval\(tick, 60000\)/.test(page) && !/WebSocket|EventSource/.test(page))

/* --- 6 · les morsures ---------------------------------------------------- */
ok('morsure · un identifiant exposé serait vu', JSON.stringify({ did: 'did:privy:x' }).includes('did:privy'))
ok('morsure · une borne divergente serait vue', !new RegExp('char_length\\(title\\) between 3 and 120').test('char_length(title) between 3 and 200'))

console.log('\ntest-community')
process.exitCode = fails ? 1 : 0
