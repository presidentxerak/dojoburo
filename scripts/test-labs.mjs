// Les ateliers sont-ils vraiment interactifs, et disent-ils la même chose que
// le reste du produit ?
//
// Deux dangers, et le second est le pire.
//
// LE PREMIER est de rebaptiser « atelier » une animation de plus. Un tutoriel
// interactif se reconnaît à une chose : le lecteur y décide de quelque chose.
// On exige donc que chaque atelier porte un contrôle réel — un champ, un
// curseur, une case — et de l'état qui en dépend.
//
// LE SECOND est la divergence. Les mêmes mathématiques alimentent la fiche du
// bac à sable, la page de sobriété et ces ateliers. Réécrire la formule dans
// l'atelier donnerait deux vérités, et le jour où elles ne s'accordent plus on
// enseigne un mensonge — dans une leçon dont le sujet est précisément de
// compter juste. On vérifie donc sur le TEXTE du fichier qu'aucune formule
// n'y est refaite à la main.
//
//   node scripts/test-labs.mjs
import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => {
  console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : ''))
  if (!c) fails++
}

const OUT = 'node_modules/.dojo-labs'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({ entryPoints: [entry], bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent' })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}

const A = await load('src/data/academy.ts', 'academy.mjs')
const src = readFileSync('src/academy/Lab.tsx', 'utf8')

console.log('--- chaque atelier déclaré existe --------------------------')
// Les identifiants vivent dans academy.ts (lu hors navigateur) et les
// composants dans Lab.tsx. Deux endroits, donc ils peuvent diverger : une
// leçon qui réclame un atelier absent rendrait un trou silencieux.
const declared = new Set(A.ALL_LESSONS.map(({ lesson }) => lesson.lab).filter(Boolean))
const built = [...src.matchAll(/^\s{2}(\w+): \{ title: '/gm)].map((m) => m[1])
ok('des ateliers sont bien accrochés à des leçons', declared.size >= 3, `${declared.size} déclarés`)
ok('des composants existent', built.length >= 3, built.join(', '))
const orphanLesson = [...declared].filter((d) => !built.includes(d))
ok('aucune leçon ne réclame un atelier absent', orphanLesson.length === 0, orphanLesson.join(', '))
const orphanLab = built.filter((b) => !declared.has(b))
ok('aucun atelier n’est écrit pour personne', orphanLab.length === 0,
  orphanLab.length ? `${orphanLab.join(', ')} · du code que personne n’atteint` : '')

console.log('\n--- ils sont MANIPULABLES, pas regardables -----------------')
// Un atelier sans contrôle est une illustration avec un nom flatteur.
// La première version de cette sonde comptait <input> et <textarea>, et
// ratait l'atelier dont les contrôles sont des boutons à deux états — elle
// accusait le code d'être figé alors qu'elle regardait à côté. Un bouton
// aria-pressed est un contrôle ; c'est même la bonne balise pour une bascule.
const controls = (src.match(/<input\b/g) || []).length
  + (src.match(/<textarea\b/g) || []).length
  + (src.match(/aria-pressed=/g) || []).length
ok('il y a de vrais contrôles', controls >= 4, `${controls} champs, curseurs, cases ou bascules`)
// …et `useState<T>(` ne s'écrit pas `useState(` · la sonde ne trouvait que les
// deux ateliers non typés, et concluait que les deux autres étaient morts.
const states = (src.match(/useState[<(]/g) || []).length
ok('…et de l’état qui en dépend', states >= 4, `${states} états`)
const bodies = src.split(/\nfunction \w+Lab\(/).slice(1)
const dead = bodies.filter((b) => !/useState[<(]/.test(b.slice(0, 900)))
ok('aucun atelier n’est figé', dead.length === 0, `${dead.length} sans état`)

console.log('\n--- aucune formule n’est refaite à la main -----------------')
// La règle qui compte. On cherche les signes d'un calcul de coût réécrit sur
// place : une multiplication par le nombre de tours, une somme d'historique,
// un prix par million. Tout cela doit venir de data/frugality.
ok('le modèle partagé est bien importé',
  /from '\.\.\/data\/frugality'/.test(src) && /compute\(/.test(src))
ok('…et l’estimateur de jetons aussi',
  /from '\.\.\/agents\/sandbox'/.test(src) && /estimateTokens\(/.test(src))

// La sonde « prix par million » cherchait une division par 1e6 et attrapait
// l'abréviation d'affichage (1,2M jetons), qui n'est pas un calcul de prix.
// La bonne règle est plus simple ET plus stricte : les ateliers ne chiffrent
// AUCUN montant. L'argent se manipule sur la page de sobriété, où l'on saisit
// ses propres tarifs ; un exemple chiffré glissé dans une leçon serait
// exactement le tarif en dur qu'on s'interdit partout ailleurs.
const reimplemented = [
  [/inPrice|outPrice|costMonth/, 'un montant manipulé dans un atelier'],
  [/n\s*\*\s*\(n\s*-\s*1\)|turns\s*\*\s*\(turns\s*-\s*1\)/, 'la somme de l’historique refaite à la main'],
  [/\.length\s*\/\s*3\.6|\/\s*CHARS_PER_TOKEN/, 'le comptage de jetons refait à la main'],
]
const found = reimplemented.filter(([re]) => re.test(src)).map(([, why]) => why)
ok('rien n’est recalculé localement', found.length === 0, found.join(' | '))

// …et la sonde sait trouver quelque chose : le fichier DOIT contenir des
// multiplications légitimes (mise à l'échelle des barres), sinon on ne
// cherchait rien.
ok('…et la sonde regardait bien le bon fichier', /TOKENS_PER_TOOL/.test(src) && src.length > 4000,
  `${src.length} caractères`)

console.log('\n--- ce que les ateliers annoncent reste prudent -------------')
ok('le comptage est présenté comme une estimation', /estimate/i.test(src))
ok('le coût d’un outil est annoncé comme prudent', /cautious/i.test(src))
// Aucun prix de fournisseur ne doit apparaître · même piège que la page de
// sobriété, et il est plus tentant ici parce qu'un exemple chiffré « parle ».
ok('aucun tarif de fournisseur n’est écrit en dur',
  !/\$\s?\d+(\.\d+)?\s*(per|\/)\s*(M|million)/i.test(src))

console.log('\n--- l’atelier vient AVANT la question ----------------------')
{
  const page = readFileSync('src/academy/Academy.tsx', 'utf8')
  const lab = page.indexOf('<Lab id=')
  const quiz = page.indexOf('<QuizView')
  ok('on manipule avant de répondre', lab > 0 && quiz > 0 && lab < quiz,
    'répondre sur ce qu’on n’a pas essayé, c’est apprendre à réciter')
}

console.log('\n' + (fails ? `${fails} échec(s)` : 'les ateliers tiennent'))
// LA SORTIE EST VIDÉE AVANT DE PARTIR · « process.exitCode » et non
// « process.exit() ».
//
// POURQUOI CE N'EST PAS UN DÉTAIL DE STYLE. Vers un terminal, l'écriture est
// synchrone et tout s'affiche. Vers un TUYAU · c'est à dire dès que le portail
// lance cette épreuve · elle est asynchrone, et « process.exit() » part sans
// attendre : ce qui n'est pas encore parti est JETÉ.
//
// Mesuré ici même : la même épreuve sur les mêmes données rendait 30 690
// caractères une fois sur deux et 9 326 l'autre, soit 179 lignes sur 528. Le
// code de sortie, lui, restait juste · une épreuve en échec était bien
// déclarée en échec. Ce qui disparaissait, c'était le DÉTAIL, c'est à dire la
// seule chose qu'on lit pour corriger.
//
// Poser le code et laisser Node sortir tout seul vide la file d'abord. Ces
// épreuves ne tiennent aucune ressource ouverte, donc il n'y a rien à forcer.
process.exitCode = fails ? 1 : 0
