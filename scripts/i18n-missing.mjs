// CE QUI RESTE À TRADUIRE · node scripts/i18n-missing.mjs <code> [ui|content]
//
// Écrit node_modules/.i18n-parts/todo-<kind>-<code>.json : { indices, en } pour
// chaque texte de la source absent du catalogue de cette langue. C'est la
// liste à confier à un traducteur après l'ajout d'un cours (voir docs/I18N.md).
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'

const [code, kind = 'content'] = process.argv.slice(2)
const SOURCE = JSON.parse(readFileSync(kind === 'ui' ? 'src/i18n/source-ui.json' : 'src/i18n/source-content.json', 'utf8'))
const CAT = kind === 'ui' ? `src/i18n/locales/${code}.json` : `src/i18n/locales/content/${code}.json`
const cat = existsSync(CAT) ? JSON.parse(readFileSync(CAT, 'utf8')) : {}
const indices = [], en = []
SOURCE.forEach((s, i) => { if (!cat[s.en]) { indices.push(i); en.push(s.en) } })
mkdirSync('node_modules/.i18n-parts', { recursive: true })
writeFileSync(`node_modules/.i18n-parts/todo-${kind}-${code}.json`, JSON.stringify({ indices, en }, null, 1))
console.log(`i18n-missing · ${code} · ${kind} · ${indices.length} texte(s) à traduire · node_modules/.i18n-parts/todo-${kind}-${code}.json`)
