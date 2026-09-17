// Peser les fichiers de la bibliothèque, et écrire le résultat dans le catalogue.
//
// Chaque carte affiche ce que le fichier coûte en jetons. C'est le pilier
// sobriété appliqué à notre propre marchandise : on ne peut pas vendre un
// cours sur le coût des requêtes et laisser le lecteur deviner le poids de ce
// qu'on lui donne.
//
// Ce chiffre ne peut pas être tapé à la main. Il change à chaque virgule
// ajoutée à un fichier, personne ne le recalcule, et il ment en silence. Il est
// donc CALCULÉ ici, depuis les corps réels, et réécrit dans src/data/library.ts.
// scripts/test-library.mjs échoue tant que les deux ne coïncident pas, ce qui
// rend l'oubli impossible plutôt qu'improbable.
//
//   node scripts/weigh-library.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const OUT = 'node_modules/.dojo-library'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const B = await load('api/_lib/libraryBodies.ts', 'bodies.mjs')
const S = await load('src/agents/sandbox.ts', 'sandbox.mjs')

const path = 'src/data/library.ts'
let src = readFileSync(path, 'utf8')
let changed = 0
const missing = []

// On repère chaque entrée par son slug, puis le `tokens:` qui la suit. Le
// catalogue est une liste d'objets littéraux : chercher la paire slug→tokens
// dans cet ordre est plus sûr que de compter les accolades.
for (const [slug, body] of Object.entries(B.BODIES)) {
  const weight = S.estimateTokens(body)
  const at = src.indexOf(`slug: '${slug}'`)
  if (at < 0) { missing.push(slug); continue }
  const after = src.slice(at)
  const m = /\n(\s*)tokens: (\d+),/.exec(after)
  if (!m) { missing.push(slug + ' (pas de champ tokens)'); continue }
  const was = Number(m[2])
  if (was !== weight) {
    src = src.slice(0, at) + after.replace(m[0], `\n${m[1]}tokens: ${weight},`)
    changed++
    console.log(`  ${slug.padEnd(28)} ${String(was).padStart(5)} → ${String(weight).padStart(5)}`)
  }
}

if (missing.length) {
  console.log('\nFAIL  corps sans entrée au catalogue : ' + missing.join(', '))
  process.exit(1)
}

if (changed) {
  writeFileSync(path, src)
  console.log(`\n${changed} poids réécrit(s) dans ${path}`)
} else {
  console.log('tous les poids étaient déjà justes')
}
