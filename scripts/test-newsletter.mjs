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

console.log('\ntest-newsletter')
process.exitCode = fails ? 1 : 0
