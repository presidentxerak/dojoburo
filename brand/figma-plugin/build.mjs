// Writes code.js.
//
// The plugin has to be one self-contained file — Figma's sandbox has no
// filesystem and no network — so the icon artwork and the token table are
// inlined here from their real sources rather than retyped. Run:
//
//   node brand/figma-plugin/build.mjs
//
// from the repo root whenever public/logo-icon-dojoburo.svg or
// brand/tokens/dojoburo.tokens.json changes.
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..', '..')

const icon = readFileSync(join(ROOT, 'public', 'logo-icon-dojoburo.svg'), 'utf8')
  .replace(/\s+/g, ' ')
  .trim()
const tokens = readFileSync(join(HERE, 'plugin.src.js'), 'utf8')

const out = tokens.replace("'__ICON_SVG__'", JSON.stringify(icon))
if (out === tokens) throw new Error('the __ICON_SVG__ placeholder was not found in plugin.src.js')

writeFileSync(join(HERE, 'code.js'), out)
console.log(`code.js written · ${(out.length / 1024).toFixed(1)} kB, icon inlined (${(icon.length / 1024).toFixed(1)} kB)`)
