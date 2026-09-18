// LES LIBELLÉS DU MENU, POUR LES ÉPREUVES.
//
// Sept fichiers du portail naviguent dans l'app en cliquant des entrées du
// menu, et ils recopiaient leur texte. Renommer une entrée en cassait donc
// quatre d'un coup, avec des délais d'attente dépassés plutôt qu'un message
// clair : il fallait lire trois traces pour comprendre qu'un libellé avait
// bougé. C'est arrivé exactement comme ça.
//
// Ils lisent maintenant src/data/menuLabels, le même fichier que l'app.
import { build } from 'esbuild'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const OUT = 'node_modules/.dojo-menu'
mkdirSync(OUT, { recursive: true })
const r = await build({
  entryPoints: ['src/data/menuLabels.ts'],
  bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
})
const f = join(OUT, 'menu.mjs')
writeFileSync(f, r.outputFiles[0].text)
export const { MENU_PROJECTS, MENU_EFFORT, MENU_CREW, MENU_PROGRESS } = await import(pathToFileURL(f).href)
