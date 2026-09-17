// La bibliothèque est-elle vendable ?
//
// Ce que cette garde protège n'est pas « le catalogue compile ». C'est la
// propriété qui décide si la partie payante EST payante : aucun corps de
// fichier ne doit se trouver dans le paquet du navigateur. Beaucoup de sites
// embarquent le texte entier et masquent la fin avec un dégradé ; le contenu
// est alors à deux clics dans l'inspecteur, et on facture quelque chose qu'on
// livre déjà. Dans un produit dont l'argument est l'honnêteté des chiffres,
// c'est la dernière chose à laisser traîner.
//
// Elle vérifie aussi les deux listes de gratuité — client et serveur — qui
// existent en double par nécessité et peuvent donc diverger. Un écart coûte
// de l'argent dans un sens et de la confiance dans l'autre.
//
//   node scripts/test-library.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-library'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const L = await load('src/data/library.ts', 'library.mjs')
const B = await load('api/_lib/libraryBodies.ts', 'bodies.mjs')
const F = await load('api/_lib/libraryFree.ts', 'free.mjs')
const S = await load('src/agents/sandbox.ts', 'sandbox.mjs')

console.log('--- le catalogue tient debout ------------------------------')
ok('il y a des entrées', L.ENTRY_COUNT >= 12, `${L.ENTRY_COUNT} entrées`)
ok('aucun doublon de slug', new Set(L.ENTRIES.map((e) => e.slug)).size === L.ENTRY_COUNT)

const badCat = L.ENTRIES.filter((e) => !L.CATEGORY_BY_ID[e.category])
ok('chaque entrée est dans une catégorie qui existe', badCat.length === 0,
  badCat.map((e) => `${e.slug} → ${e.category}`).join(', '))

const badTrade = L.ENTRIES.flatMap((e) => e.trades.filter((t) => !L.TRADE_IDS.has(t)).map((t) => `${e.slug} → ${t}`))
ok('chaque métier cité existe vraiment', badTrade.length === 0, badTrade.join(', '))

const noTrade = L.ENTRIES.filter((e) => e.trades.length === 0)
ok('aucune entrée n’est orpheline de métier', noTrade.length === 0, noTrade.map((e) => e.slug).join(', '))

const emptyCat = L.CATEGORIES.filter((c) => L.countByCategory(c.id) === 0)
ok('aucune catégorie vide', emptyCat.length === 0,
  emptyCat.length ? emptyCat.map((c) => c.id).join(', ') : 'un filtre qui ne rend rien est pire qu’un filtre absent')

const kinds = new Set(L.ENTRIES.map((e) => e.kind))
ok('les trois formes sont représentées', kinds.has('prompt') && kinds.has('brief') && kinds.has('skill'),
  [...kinds].join(', '))

console.log('\n--- la pédagogie est bien du côté gratuit -------------------')
// Le raisonnement est l'appât ET la valeur d'une académie. Une entrée sans
// « pourquoi » est un prompt de plus sur internet.
const thin = L.ENTRIES.filter((e) => e.why.length < 2 || e.adapt.length < 2 || !e.trap || !e.preview)
ok('chaque entrée explique pourquoi, quoi adapter, et le piège', thin.length === 0,
  thin.map((e) => e.slug).join(', '))
const shortSum = L.ENTRIES.filter((e) => e.summary.length < 30 || e.useCase.length < 60)
ok('chaque entrée dit quand s’en servir', shortSum.length === 0, shortSum.map((e) => e.slug).join(', '))

console.log('\n--- chaque entrée a bien un fichier ------------------------')
const missing = L.ENTRIES.filter((e) => !(e.slug in B.BODIES))
ok('aucune entrée annoncée sans corps', missing.length === 0, missing.map((e) => e.slug).join(', '))
const orphan = B.BODY_SLUGS.filter((s) => !L.ENTRY_BY_SLUG[s])
ok('aucun corps sans entrée au catalogue', orphan.length === 0, orphan.join(', '))

const tooShort = B.BODY_SLUGS.filter((s) => B.BODIES[s].length < 400)
ok('aucun fichier n’est un brouillon', tooShort.length === 0, tooShort.join(', '))

// L'extrait doit être un VRAI extrait · un aperçu qui ne se trouve pas dans le
// fichier est une vitrine qui montre autre chose que la marchandise.
const fake = L.ENTRIES.filter((e) => {
  const body = B.BODIES[e.slug]
  if (!body) return false
  const head = e.preview.split('\n')[0].trim()
  return head.length > 0 && !body.includes(head)
})
ok('l’extrait vient bien du fichier', fake.length === 0, fake.map((e) => e.slug).join(', '))

console.log('\n--- gratuit : les deux listes sont d’accord -----------------')
const clientFree = new Set(L.ENTRIES.filter((e) => e.free).map((e) => e.slug))
const serverFree = F.FREE_SLUGS
const onlyClient = [...clientFree].filter((s) => !serverFree.has(s))
const onlyServer = [...serverFree].filter((s) => !clientFree.has(s))
ok('rien n’est annoncé gratuit sans l’être', onlyClient.length === 0,
  onlyClient.length ? `${onlyClient.join(', ')} · le catalogue promet, le serveur refuse` : '')
ok('rien n’est donné sans être annoncé', onlyServer.length === 0,
  onlyServer.length ? `${onlyServer.join(', ')} · payant au catalogue, servi gratuitement` : '')
ok('il y a de quoi juger la marchandise', clientFree.size >= 1, `${clientFree.size} entrée(s) ouverte(s)`)
ok('…mais pas tout', clientFree.size < L.ENTRY_COUNT)

console.log('\n--- LE PAYANT NE FUIT PAS DANS LE NAVIGATEUR ---------------')
// La garde qui compte. On prend une empreinte longue et distinctive de chaque
// corps PAYANT, et on la cherche dans tout src/. Un extrait de quarante
// caractères ne prouverait rien (l'aperçu est censé y être) ; on prend une
// ligne du MILIEU du fichier, qui n'a aucune raison d'exister ailleurs.
function srcFilesIn(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) out.push(...srcFilesIn(p))
    else if (/\.html$/.test(name)) out.push(p)
  }
  return out
}
function srcFiles(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) out.push(...srcFiles(p))
    else if (/\.(ts|tsx|css|html)$/.test(name)) out.push(p)
  }
  return out
}
const SRC = srcFiles('src').map((f) => readFileSync(f, 'utf8')).join('\n')
let leaked = []
for (const slug of B.BODY_SLUGS) {
  if (serverFree.has(slug)) continue
  const lines = B.BODIES[slug].split('\n').map((l) => l.trim()).filter((l) => l.length > 45)
  // une ligne prise au milieu · ni l'en-tête (qui est l'aperçu), ni la fin
  const probe = lines[Math.floor(lines.length / 2)]
  if (!probe) continue
  if (SRC.includes(probe)) leaked.push(`${slug} · « ${probe.slice(0, 40)}… »`)
}
ok('aucun corps payant n’apparaît dans src/', leaked.length === 0, leaked.join(' | '))
ok('…et la sonde était bien capable de trouver quelque chose',
  SRC.includes(L.ENTRIES[0].preview.split('\n')[0].trim()),
  'l’aperçu, lui, DOIT être dans src · sinon la garde ne cherchait rien')

console.log('\n--- …ni dans les pages pré-rendues -------------------------')
// LA MÊME FUITE, PAR L'AUTRE PORTE. gen-seo publie une page HTML par entrée
// pour que le raisonnement soit indexable. Y pré-rendre le corps le mettrait
// en clair sur une adresse publique — la porte blindée à côté du mur.
//
// Cette vérification ne peut s'exécuter qu'après une construction. Quand
// dist/ n'existe pas, elle le DIT au lieu de s'afficher en vert : une garde
// qui passe parce qu'elle n'a rien regardé est pire qu'une garde absente.
{
  let dist = null
  try { dist = srcFilesIn('dist/library') } catch { dist = null }
  if (!dist || dist.length === 0) {
    console.log('····  pages pré-rendues non vérifiées · dist/library absent (construisez d’abord)')
  } else {
    const HTML = dist.map((f) => readFileSync(f, 'utf8')).join('\n')
    let out = []
    for (const slug of B.BODY_SLUGS) {
      if (serverFree.has(slug)) continue
      const lines = B.BODIES[slug].split('\n').map((l) => l.trim()).filter((l) => l.length > 45)
      const probe = lines[Math.floor(lines.length / 2)]
      if (probe && HTML.includes(probe)) out.push(slug)
    }
    ok('aucun corps payant dans dist/library', out.length === 0, out.join(', '))
    ok('…et les pages existent bien', dist.length >= L.ENTRY_COUNT, `${dist.length} page(s)`)
  }
}

console.log('\n--- ce que chaque fichier coûte ----------------------------')
// Le poids en jetons est affiché sur chaque carte : c'est le pilier sobriété
// appliqué à notre propre marchandise. Il est CALCULÉ, jamais tapé.
let wrong = []
for (const e of L.ENTRIES) {
  const real = S.estimateTokens(B.BODIES[e.slug] || '')
  if (e.tokens !== real) wrong.push(`${e.slug}: ${e.tokens} → ${real}`)
}
ok('le poids annoncé est le poids réel', wrong.length === 0,
  wrong.length ? `${wrong.length} entrée(s) à recalculer · npm run library:weigh` : 'recalculé depuis les corps')

console.log('\n' + (fails ? `${fails} échec(s)` : 'la bibliothèque tient'))
process.exit(fails ? 1 : 0)
