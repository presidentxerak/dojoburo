// LA NEWSLETTER · le consentement à part, jamais déduit.
//
// POURQUOI CETTE ÉPREUVE EXISTE · demandé : « la version gratuite sert à
// l'acquisition de mails pour la newsletter ». Le RGPD interdit de
// conditionner l'accès gratuit à ce consentement : la case est séparée, non
// cochée, et le serveur ne compte qu'un `true` explicite. Ce qui se casse sans
// bruit : une case cochée d'avance, un consentement déduit d'une chaîne
// « true », un formulaire qui retire un consentement donné.
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}
const OUT = 'node_modules/.dojo-news'
mkdirSync(OUT, { recursive: true })
const r = await build({ entryPoints: ['api/_lib/newsletter.ts'], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
writeFileSync(join(OUT, 'n.mjs'), r.outputFiles[0].text)
const N = await import(pathToFileURL(join(OUT, 'n.mjs')).href)

const good = N.parseSignup({ email: '  Nora@Exemple.FR ', newsletter: true, lang: 'en', source: 'landing' })
ok('une adresse est normalisée', good.email === 'nora@exemple.fr' && good.lang === 'en' && good.source === 'landing')
ok('le consentement explicite est gardé', good.newsletter === true)
ok('sans case, pas de newsletter', N.parseSignup({ email: 'a@b.fr' }).newsletter === false)
ok('une chaîne « true » ne vaut pas consentement', N.parseSignup({ email: 'a@b.fr', newsletter: 'true' }).newsletter === false)
ok('une adresse invalide est refusée', 'error' in N.parseSignup({ email: 'pas-une-adresse' }))
ok('une source inconnue retombe sur le week-end', N.parseSignup({ email: 'a@b.fr', source: 'pirate' }).source === 'weekend')
const tok = N.unsubscribeToken('nora@exemple.fr', 's3cret')
ok('le lien de désinscription est signé', N.tokenMatches('nora@exemple.fr', tok, 's3cret') && !N.tokenMatches('autre@exemple.fr', tok, 's3cret'))
ok('… et un faux jeton est refusé', !N.tokenMatches('nora@exemple.fr', 'faux', 's3cret'))

const API = readFileSync('api/newsletter.ts', 'utf8')
ok('un formulaire sans case ne retire pas un consentement donné', /newsletter = newsletter_contacts\.newsletter or excluded\.newsletter/.test(API))
const PACK = readFileSync('src/game/PackPage.tsx', 'utf8')
ok('la case newsletter existe et n\'est pas cochée d\'avance', /useState\(false\)/.test(PACK) && /type="checkbox" checked=\{news\}/.test(PACK))
ok('l\'accès gratuit s\'ouvre sans attendre le serveur', /giveEmail\(v\)\n\s*void sendSignup\(v, news, 'weekend'\)/.test(PACK))
const SQL = readFileSync('db/newsletter.sql', 'utf8')
ok('la table garde le consentement et sa date', /newsletter\s+boolean not null default false/.test(SQL) && /consent_at/.test(SQL) && /unsubscribed_at/.test(SQL))

// LA LANDING PROMO · « explique de A à Z Dojoburo et met en avant la
// formation gratuite ». Le formulaire est dans le héros, la newsletter est une
// case à part, et l'envoi ouvre la première leçon.
const PROMO = readFileSync('src/game/Promo.tsx', 'utf8')
const MAIN = readFileSync('src/main.tsx', 'utf8')
ok('/decouvrir sert la landing promo', /path === '\/decouvrir'\) return <PromoPage \/>/.test(MAIN))
ok('le formulaire est dans le héros', /<section className="promo-hero" id="commencer">[\s\S]*?<StartForm/.test(PROMO))
ok('l\'envoi ouvre la première leçon, sans attendre le serveur', /giveEmail\(v\)\n\s*void sendSignup\(v, news, source\)\n\s*navigate\(FIRST_LESSON\)/.test(PROMO))
ok('la newsletter y est aussi une case à part, non cochée', /const \[news, setNews\] = useState\(false\)/.test(PROMO))
ok('le programme gratuit se lit en entier', /DISCOVERY_MODULE\.levels\.map/.test(PROMO))
// BREVO · « On utilise Brevo ». La liste de la newsletter seulement avec la
// case cochée ; la bienvenue une seule fois ; la désinscription répercutée.
const BREVO = readFileSync('api/_lib/brevo.ts', 'utf8')
ok('la liste Brevo seulement avec la case cochée', /if \(s\.newsletter\) jobs\.push\(subscribeContact\(/.test(API))
ok('la bienvenue une seule fois, à la première inscription', /returning \(xmax = 0\) as inserted/.test(API) && /if \(up\.rows\[0\]\?\.inserted\) jobs\.push\(sendEmail\(welcomeEmail/.test(API))
ok('la désinscription part aussi chez Brevo', /await unsubscribeContact\(email\)/.test(API))
ok('la bienvenue porte un lien de désinscription signé', /newsletter\/desinscription\?email=.*token=/.test(API) && /'\/newsletter\/desinscription'/.test(MAIN))
ok('sans clé Brevo, rien ne part et rien ne casse', /if \(!key\) return false/.test(BREVO) && /if \(brevoConfigured\(\)\)/.test(API))
ok('un e-mail n\'insère jamais un texte brut', /export function esc/.test(BREVO))
ok('la clé Brevo reste côté serveur', !/BREVO_API_KEY/.test(readFileSync('src/lib/newsletter.ts', 'utf8')))

console.log('\ntest-newsletter')
process.exitCode = fails ? 1 : 0
