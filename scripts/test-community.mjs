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

/* --- 5e · modifier ------------------------------------------------------- */
ok('seul l\'auteur modifie son texte', /async function edit[\s\S]*?author_did !== me\) return send\(res, 403/.test(api))
ok('une modification est signalée', /edited_at = now\(\)/.test(api) && /edited_at timestamptz/.test(sql))
ok('on ne modifie qu\'un texte qu\'on voit en entier', /full && p\.mine && <button/.test(page))

/* --- 5f · les médias intégrés ---------------------------------------------- */
{
  const rb = await build({ entryPoints: ['src/lib/embeds.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  writeFileSync(join(OUT, 'e.mjs'), rb.outputFiles[0].text)
  const E = await import(pathToFileURL(join(OUT, 'e.mjs')).href)
  const yt = E.parseEmbed('https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=10')
  ok('YouTube : lecteur sans cookie reconstruit', yt?.src === 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0')
  ok('youtu.be et Shorts reconnus', E.parseEmbed('https://youtu.be/dQw4w9WgXcQ')?.kind === 'youtube' && E.parseEmbed('https://youtube.com/shorts/dQw4w9WgXcQ')?.tall === true)
  ok('Instagram, Vimeo, Loom, TikTok reconnus',
    E.parseEmbed('https://www.instagram.com/reel/Cabc123XYZ/')?.src === 'https://www.instagram.com/reel/Cabc123XYZ/embed'
    && E.parseEmbed('https://vimeo.com/123456789')?.src === 'https://player.vimeo.com/video/123456789'
    && E.parseEmbed('https://www.loom.com/share/' + 'a'.repeat(32))?.kind === 'loom'
    && E.parseEmbed('https://www.tiktok.com/@dojo/video/7212345678901234567')?.kind === 'tiktok')
  ok('un domaine inconnu reste du texte', E.parseEmbed('https://evil.example.com/watch?v=dQw4w9WgXcQ') === null)
  ok('une adresse piégée ne passe pas', E.parseEmbed('https://www.youtube.com/watch?v=abc"onload=x') === null && E.parseEmbed('http://www.youtube.com/watch?v=dQw4w9WgXcQ') === null)
  ok('trois médias au plus par message', E.embedsIn(Array.from({ length: 5 }, (_, i) => `https://vimeo.com/12345678${i}`).join(' ')).length === 3)
  const csp = readFileSync('vercel.json', 'utf8').match(/frame-src ([^;]*);/)?.[1] || ''
  ok('la CSP n\'ouvre que les lecteurs de la liste', E.EMBED_ORIGINS.every((o) => csp.includes(o)))
  ok('le lecteur ne se charge qu\'au clic', /const \[on, setOn\] = useState\(false\)/.test(page) && /sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"/.test(page))
  ok('aucune image distante avant le clic', !/backgroundImage: `url\(\$\{e\.thumb\}\)`/.test(page))
}

/* --- 5g · les mentions et les sondages ------------------------------------ */
{
  const H = '00000000-0000-4000-8000-000000000001'
  ok('une mention se lit dans le texte', C.mentionsIn(`Merci @[Nora](${H}) !`).join() === H)
  ok('cinq mentions au plus', C.mentionsIn(Array.from({ length: 8 }, (_, i) => `@[N${i}](00000000-0000-4000-8000-00000000000${i})`).join(' ')).length === C.MAX_MENTIONS)
  ok('une mention sans identifiant valide n\'en est pas une', C.mentionsIn('@[Nora](did:privy:x)').length === 0)
  ok('un sondage de 2 à 6 options, sans doublon', Array.isArray(C.validatePoll(['Oui', 'Non'])) && 'error' in C.validatePoll(['Oui']) && 'error' in C.validatePoll(['A', 'B', 'C', 'D', 'E', 'F', 'G']) && 'error' in C.validatePoll(['Oui', 'oui']))
  ok('sans options, pas de sondage', C.validatePoll(undefined) === null && C.validatePoll(['', ' ']) === null)
  const v = C.pollView(['A', 'B'], [{ option: 1, n: 3 }], 1)
  ok('les résultats se comptent', v.total === 3 && v.counts.join() === '0,3' && v.mine === 1)
  const row2 = { ...row, body: 'x'.repeat(300) + ` @[Nora](${H}) fin` }
  ok('l\'extrait ne coupe pas une mention', !/@\[[^\]]*$|\]\([^)]*\.\.\.$/.test(C.serializePost(row2, null, true).body))
  ok('une mention prévient la personne, pas l\'auteur', /async function notifyMentions[\s\S]*?row\.did === me \|\| already\.has\(row\.did\)/.test(api))
  ok('un vote se change et se retire', /on conflict \(post_id, did\) do update set option/.test(api) && /option === -1/.test(api))
  ok('la notification « mention » est permise par le schéma', /'mention'\)\)/.test(sql))
  const rc = await build({ entryPoints: ['src/lib/community.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent', external: ['./apiFetch'] }).catch(() => null)
  ok('le client range et relit les mentions', /export function encodeMentions/.test(client) && /export function decodeMentions/.test(client) && !!rc)
}

/* --- 5h · les notifications par e-mail (Brevo) ------------------------------ */
ok('un e-mail pour ce qui appelle une réponse, jamais pour un j\'aime', /if \(kind === 'comment' \|\| kind === 'reply' \|\| kind === 'mention'\) await mailNotification/.test(api))
ok('seulement si le membre ne les a pas coupées', /if \(!row \|\| !row\.email_notify\) return/.test(api) && /email_notify boolean not null default true/.test(sql))
ok('six au plus par heure et par membre', /community:mail:\$\{did\}`, 6, 60 \* 60 \* 1000/.test(api))
ok('un message privé : un e-mail par conversation et par demi-heure', /community:mailpair:\$\{me\}:\$\{to\}`, 1, 30 \* 60 \* 1000/.test(api))
ok('les noms et titres sont échappés dans l\'e-mail', /const who = esc\(/.test(api) && /esc\(String\(row\.post_title\)\)/.test(api))
ok('l\'adresse vient de Privy, jamais de la base de la communauté', /verifiedEmailOf\(did\)/.test(api) && !/email\s+text/.test(sql.split('LOT 7')[1] || ''))
ok('le membre coupe les e-mails depuis son profil', /setMail\(e\.target\.checked\)/.test(page))

/* --- 5b · les temples : présence et chat du cours ------------------------- */
//
// Demandé : « voir les autres étudiants qui étudient en même temps [...] en
// cliquant dessus discuter avec eux dans le chat du groupe du cours en privé
// ou en groupe ». Un personnage vient du navigateur, donc de n'importe qui.
ok('un personnage plat est accepté', JSON.stringify(C.cleanAvatar({ species: 'robot', skin: '#aabbcc' })) === '{"species":"robot","skin":"#aabbcc"}')
ok('un personnage avec du balisage est refusé', C.cleanAvatar({ hair: '<script>' }) === null)
ok('un personnage imbriqué est refusé', C.cleanAvatar({ hair: { a: 1 } }) === null && C.cleanAvatar([1]) === null)
ok('un personnage de cent champs est refusé', C.cleanAvatar(Object.fromEntries(Array.from({ length: 100 }, (_, i) => [`k${String.fromCharCode(97 + (i % 26))}`.repeat(1 + Math.floor(i / 26)), 'x']))) === null)
ok('un message de cours valide passe', !('error' in C.validateRoomPost({ room: 'weekend', body: 'Bonjour' })))
ok('un salon inventé est refusé', 'error' in C.validateRoomPost({ room: '../x', body: 'Bonjour' }))
ok('un message vide est refusé', 'error' in C.validateRoomPost({ room: 'weekend', body: '   ' }))
ok('un message trop long est refusé', 'error' in C.validateRoomPost({ room: 'weekend', body: 'a'.repeat(1001) }))
// LE GRADE · « ajoute le classement des membres avec leur grade »
ok('une ceinture connue est acceptée', C.cleanGrade('black') === 'black' && C.cleanGrade('white') === 'white')
ok('une ceinture inventée est refusée', C.cleanGrade('platine') === null && C.cleanGrade(3) === null && C.cleanGrade("green' or 1=1") === null)
ok('les ceintures du serveur sont celles du jeu', JSON.stringify(C.GRADES) === JSON.stringify(['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']))
{
  const API = readFileSync('api/community.ts', 'utf8')
  ok('le classement par grade existe', /grades: grades\.rows\.map/.test(API) && /array_position\(array\['white'/.test(API))
}
ok('la présence ne compte que les dernières minutes', C.PRESENCE_WINDOW_S > 0 && C.PRESENCE_WINDOW_S <= 300)
{
  const API = readFileSync('api/community.ts', 'utf8')
  const SQL = readFileSync('db/community.sql', 'utf8')
  ok('la présence et le salon ont leurs tables', /create table if not exists community_presence/.test(SQL) && /create table if not exists community_room_messages/.test(SQL))
  ok('lire le chat du cours demande un compte', /roomRead[\s\S]{0,400}(verif|auth|did)/i.test(API))
  ok('la présence n\'expose pas l\'identifiant', !/presenceList[\s\S]{0,1200}\bdid:/.test(API.replace(/where[^\n]*/g, '')))
}

/* --- 5c · une communauté qui ne paraît pas vide, sans rien inventer --------- */
//
// Demandé : éviter une communauté vide pour rassurer les futurs élèves. Les
// faux membres, la fausse activité et les faux témoignages ont été écartés ; à
// la place (« fais tout ») : des maîtres IA signalés comme tels, le statut de
// fondateur, des fils signés de l'équipe, de vrais témoignages avec accord.
{
  const rs = await build({ entryPoints: ['api/_lib/communitySeed.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  writeFileSync(join(OUT, 'seed.mjs'), rs.outputFiles[0].text)
  const S = await import(pathToFileURL(join(OUT, 'seed.mjs')).href)
  const API = readFileSync('api/community.ts', 'utf8')
  const SQL = readFileSync('db/community.sql', 'utf8')
  const MASTERS_SRC = readFileSync('src/pixel/masters.ts', 'utf8')
  // LES MAÎTRES IA · leur nom dit toujours « IA », et ce sont ceux du jeu
  ok('un maître IA porte « IA » dans son nom', Object.keys(S.MASTER_NAMES).every((p) => / · IA$/.test(S.masterName(p)) && S.masterName(p).length <= 32))
  const srcNames = [...MASTERS_SRC.matchAll(/'?([a-z-]+)'?: \{\n\s+name: '([A-Za-z]+)'/g)].map((m) => `${m[1]}:${m[2]}`).sort()
  const seedNames = Object.entries(S.MASTER_NAMES).map(([k, v]) => `${k}:${v}`).sort()
  ok('les maîtres du serveur sont ceux du jeu', JSON.stringify(srcNames) === JSON.stringify(seedNames), `${srcNames.length} / ${seedNames.length}`)
  ok('le maître se dit IA dans son prompt système', /You are an AI, not a person, and you never claim otherwise/.test(S.masterSystem('weekend', 'Le week-end')))
  ok('il n\'invente ni chiffres ni témoignages', /Never invent facts, figures, prices, sources or testimonials/.test(S.masterSystem('weekend', 'x')))
  ok('il répond à une question, pas à tout', S.callsMaster('Comment écrire un bon prompt ?') && S.callsMaster('Maître, une idée') && !S.callsMaster('Merci à tous'))
  ok('son budget est borné', /rateAllow\(`community:master:\$\{v\.room\}`, 30,/.test(API) && /rateAllow\('community:master:all', 400,/.test(API))
  ok('les maîtres et l\'équipe ne figurent pas aux classements', (API.match(/kind = 'member'/g) ?? []).length >= 5)
  // L'ÉQUIPE · des fils de départ signés, valides, jamais en double
  ok('les fils de l\'équipe sont signés de l\'équipe', S.TEAM_NAME === 'Équipe DojoBuro' && /author_did, category, title, body, pinned\) values \(\$1, \$2/.test(API) && /\[p\.id, TEAM_DID,/.test(API))
  ok('ils ne se dupliquent pas', /on conflict \(id\) do nothing/.test(API) && new Set(S.SEED_POSTS.map((p) => p.id)).size === S.SEED_POSTS.length)
  ok('ils respectent les bornes du fil', S.SEED_POSTS.every((p) => p.title.length >= 3 && p.title.length <= 120 && p.body.length >= 10 && p.body.length <= 5000))
  ok('ils disent que les maîtres sont des IA', S.SEED_POSTS.some((p) => /maîtres[^.]*sont des IA/.test(p.body)))
  ok('aucun nombre de membres inventé dans les fils', S.SEED_POSTS.every((p) => !/\d{3,}\s*(membres|élèves)/.test(p.body)))
  // LES FONDATEURS · les 500 premiers, pour toujours
  ok('le statut de fondateur est donné aux 500 premiers', /founder boolean not null default false/.test(SQL) && (API.match(/count\(\*\) < 500 from community_members where kind = 'member'/g) ?? []).length === 2)
  // LES TÉMOIGNAGES · écrits par le membre, avec son accord, relus
  ok('un témoignage exige le consentement', /consent\s+boolean not null check \(consent\)/.test(SQL) && /b\.consent !== true\) return send\(res, 400/.test(API))
  ok('il n\'est publié qu\'après relecture', /status = 'approved'/.test(API) && /if \(!\(await isAdmin\(me\)\)\) return send\(res, 403[\s\S]{0,420}update community_testimonials set status/.test(API))
  ok('il n\'existe aucun témoignage écrit à l\'avance', !/insert into community_testimonials[^;]*values \('/.test(API + SQL))
}

/* --- 6 · les morsures ---------------------------------------------------- */
ok('morsure · un identifiant exposé serait vu', JSON.stringify({ did: 'did:privy:x' }).includes('did:privy'))
ok('morsure · une borne divergente serait vue', !new RegExp('char_length\\(title\\) between 3 and 120').test('char_length(title) between 3 and 200'))

/* --- les profils fictifs ---------------------------------------------------- */
// Demandé : « Créé 330 profils en plus des maîtres dans la communauté qui posent
// des questions sur les cours (les maîtres leur répondent) et qui donnent des
// conseils et des tips pour les nouveaux arrivants ». Signalés comme fictifs,
// fondés sur les cours, sans aucun témoignage.
{
  const rp = await build({ entryPoints: ['api/_lib/personaSeed.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  writeFileSync(join(OUT, 'p.mjs'), rp.outputFiles[0].text)
  const PS = await import(pathToFileURL(join(OUT, 'p.mjs')).href)
  const rs = await build({ entryPoints: ['api/_lib/communitySeed.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  writeFileSync(join(OUT, 's.mjs'), rs.outputFiles[0].text)
  const SD = await import(pathToFileURL(join(OUT, 's.mjs')).href)
  const M = PS.PERSONA_MEMBERS, P = PS.PERSONA_POSTS, Cm = PS.PERSONA_COMMENTS
  ok('330 profils fictifs, en plus des maîtres', PS.PERSONA_COUNT === 330 && M.length === 330 && M.every((m) => /^persona:\d{3}$/.test(m.did)))
  ok('des noms uniques, dans la borne de la base', new Set(M.map((m) => m.name)).size === M.length && M.every((m) => m.name.length >= 2 && m.name.length <= 32))
  ok('chaque profil se présente comme profil de démonstration', M.every((m) => /^Profil de démonstration/.test(m.bio) && m.bio.length <= 280))
  const questions = P.filter((p) => p.category === 'questions')
  ok('ils posent des questions sur les cours, et un maître répond à chacune', questions.length >= 200 && questions.every((q) => Cm.some((c) => c.postId === q.id && /^master:/.test(c.did))))
  ok('chaque réponse vient d\'un vrai maître', Cm.every((c) => SD.MASTER_NAMES[c.did.replace('master:', '')]) && PS.PERSONA_MASTERS.every((m) => m.name.endsWith('· IA')))
  ok('ils donnent des conseils aux nouveaux', P.filter((p) => p.category !== 'questions').length >= 100)
  ok('les publications tiennent dans les bornes de la base', P.every((p) => p.title.length >= 3 && p.title.length <= 120 && p.body.length >= 10 && p.body.length <= 5000) && Cm.every((c) => c.body.length >= 1 && c.body.length <= 2000))
  ok('un auteur par publication, des identifiants fixes et uniques', new Set(P.map((p) => p.id)).size === P.length && P.every((p) => M.some((m) => m.did === p.did)))
  const ALL = [...P.map((p) => p.title + p.body), ...Cm.map((c) => c.body)].join('\n')
  // un pourcentage peut venir d'un cours cité (« inspectez à 100 % ») : les
  // chiffres sont cherchés dans les conseils écrits à la main, sans citation
  const OWN = P.filter((p) => !/«/.test(p.body)).map((p) => p.title + p.body).join('\n')
  ok('aucun témoignage ni résultat chiffré', !/j'ai (gagné|économisé|doublé|triplé)|grâce à dojoburo|mon chiffre d'affaires/i.test(ALL) && !/\d+ ?%|\d+ ?€/.test(OWN))
  ok('aucun emoji ni tiret long', !/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}–—]/u.test(ALL + M.map((m) => m.name + m.bio).join('')))
  const API = readFileSync('api/community.ts', 'utf8')
  ok('l\'API les écrit une fois, exclus des classements', /async function ensurePersonas/.test(API) && /'persona', now\(\) - interval/.test(API) && /on conflict \(id\) do nothing/.test(API))
  ok('la base accepte le kind persona (migration écrite)', /check \(kind in \('member', 'team', 'master', 'persona'\)\)/.test(readFileSync('db/community.sql', 'utf8')))
  // RÉPARÉE · demandé : « c'est une démo n'affiche pas profil fictif ». Plus de
  // badge ; la page du profil et le mot d'accueil disent la démonstration.
  ok('aucun badge sur les profils de démonstration', /kind === 'persona'\) return null/.test(readFileSync('src/game/Community.tsx', 'utf8')) && !/Profil fictif/.test(readFileSync('src/game/communityText.ts', 'utf8')))
  ok('le mot d\'accueil dit qu\'il existe des profils de démonstration, sans prétendre le contraire', /profils de démonstration/.test(SD.SEED_POSTS[0].body) && !/autres comptes sont de vraies personnes/.test(SD.SEED_POSTS[0].body))
}

console.log('\ntest-community')
process.exitCode = fails ? 1 : 0
