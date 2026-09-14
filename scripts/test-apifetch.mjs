// Un écran qui n'a aucune raison d'aboutir un jour.
//
// « Loading your company… » restait à l'écran indéfiniment sur un téléphone.
// Ni erreur, ni message, ni rien dans la console : la requête n'était jamais
// PARTIE. `apiFetch` attendait le jeton d'identité — `await
// privyControls.getAccessToken?.()` — sans limite de temps, et sur mobile (Safari
// qui bloque le stockage tiers, une connexion qui tombe pendant que le SDK
// s'initialise) cette promesse peut ne jamais se résoudre.
//
// Ce n'était donc pas un appel qui traînait. C'était TOUS les appels de l'app
// qui ne partaient pas, derrière une seule promesse suspendue.
//
// Trois propriétés, et la troisième compte autant que les deux autres :
//
//   · une identité qui ne vient pas ne bloque rien · on part en invité ;
//   · une requête qui ne revient pas finit par échouer · un `catch` n'a jamais
//     lieu sur une promesse qui pend, donc l'écran ne peut rien dire ;
//   · une identité qui vient NORMALEMENT est toujours attachée. Un garde-fou
//     qui déconnecte les gens qui n'ont rien demandé est pire que le défaut.
//
//   node scripts/test-apifetch.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const OUT = 'node_modules/.dojo-apifetch'
mkdirSync(OUT, { recursive: true })
// UN seul paquet, qui exporte les deux.
//
// esbuild inline `controls` dans le paquet de `apiFetch` : l'importer à part
// donnerait un DEUXIÈME objet `privyControls`, et piloter celui-là ne changerait
// rien à ce que la fonction voit. On réexporte donc le vrai depuis le même
// paquet — c'est la seule façon d'éprouver ce que l'app exécute vraiment.
const r3 = await build({
  stdin: {
    contents: `export * from '${process.cwd()}/src/lib/apiFetch.ts'
export { privyControls } from '${process.cwd()}/src/auth/controls.ts'`,
    resolveDir: process.cwd(), loader: 'ts',
  },
  bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
})
const f3 = join(OUT, 'both.mjs')
writeFileSync(f3, r3.outputFiles[0].text)
const M = await import(pathToFileURL(f3).href)

const realFetch = globalThis.fetch
let lastInit = null
globalThis.fetch = async (url, init) => { lastInit = init; return { ok: true, status: 200, url: String(url) } }

const ms = () => Date.now()

console.log('--- l’identité ne peut pas bloquer l’app ---------------------')
{
  // LE défaut. Une promesse qui ne se résout jamais.
  M.privyControls.getAccessToken = () => new Promise(() => {})
  const t0 = ms()
  const res = await Promise.race([
    M.apiFetch('/api/org?action=me'),
    new Promise((r2) => setTimeout(() => r2('PENDU'), 12000)),
  ])
  const took = ms() - t0
  ok('une identité qui ne vient jamais ne pend plus', res !== 'PENDU',
    res === 'PENDU' ? 'l’écran resterait sur « Loading… » pour toujours' : `répondu en ${took} ms`)
  ok('et cela prend quelques secondes, pas quelques minutes', took < 9000, `${took} ms`)
  ok('la requête part quand même, en invité',
    !(lastInit?.headers || {}).authorization,
    'une page lue sans être identifié vaut mieux qu’une page qui ne se charge pas')
}

console.log('\n--- mais une identité NORMALE est toujours attachée ----------')
{
  M.privyControls.getAccessToken = async () => 'tok-abc'
  lastInit = null
  await M.apiFetch('/api/org?action=me')
  ok('un jeton obtenu voyage bien', lastInit?.headers?.authorization === 'Bearer tok-abc',
    'un garde-fou qui déconnecte ceux qui n’ont rien demandé est pire que le défaut')
}
{
  // Lent mais dans les clous · on doit l'attendre, pas l'abandonner.
  M.privyControls.getAccessToken = () => new Promise((r2) => setTimeout(() => r2('tok-lent'), 1200))
  lastInit = null
  await M.apiFetch('/api/org?action=me')
  ok('une identité lente mais honnête est attendue', lastInit?.headers?.authorization === 'Bearer tok-lent',
    '1,2 s · on ne coupe pas au premier hoquet')
}
{
  M.privyControls.getAccessToken = async () => { throw new Error('privy down') }
  lastInit = null
  const res = await M.apiFetch('/api/org?action=me')
  ok('une identité en erreur ne casse pas la requête', !!res && !lastInit?.headers?.authorization)
}
{
  M.privyControls.getAccessToken = async () => null
  lastInit = null
  await M.apiFetch('/api/org?action=me')
  ok('personne de connecté ⇒ aucun en-tête, et c’est normal', !lastInit?.headers?.authorization)
}

console.log('\n--- et la requête elle-même a une échéance -------------------')
{
  M.privyControls.getAccessToken = async () => null
  lastInit = null
  await M.apiFetch('/api/org?action=me')
  ok('une requête part avec un signal d’abandon', !!lastInit?.signal,
    'sans lui, une requête qui ne revient jamais laisse son écran sur « Loading… »')

  const mine = new AbortController()
  lastInit = null
  await M.apiFetch('/api/org?action=me', { signal: mine.signal })
  ok('mais un signal fourni par l’appelant l’emporte', lastInit?.signal === mine.signal,
    'il sait ce qu’il attend mieux que ce fichier')
}
{
  // Et les en-têtes de l'appelant survivent · les écraser enverrait des
  // requêtes sans content-type, refusées par les endpoints en POST.
  M.privyControls.getAccessToken = async () => 'tok-1'
  lastInit = null
  await M.apiFetch('/api/x', { method: 'POST', headers: { 'content-type': 'application/json' } })
  ok('les en-têtes de l’appelant sont conservés',
    lastInit?.headers?.['content-type'] === 'application/json'
    && lastInit?.headers?.authorization === 'Bearer tok-1')
}

globalThis.fetch = realFetch
rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
