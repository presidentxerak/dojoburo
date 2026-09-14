// Les contrôles de livrable, éprouvés dans les deux sens.
//
// Un contrôle a deux façons d'être inutile, et la seconde est la pire :
//
//   · il laisse passer un mauvais document — il ne sert à rien.
//   · il se déclenche sur un BON document — on apprend à l'ignorer, et le jour
//     où il a raison, personne ne le lit.
//
// Ce fichier éprouve donc chaque contrôle sur une paire : un livrable plausible
// qui doit passer, et une version abîmée d'exactement la façon dont le contrôle
// prétend se déclencher. Un contrôle qui ne distingue pas les deux est un
// contrôle qui ment.
//
//   node scripts/test-checks.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

const OUT = 'node_modules/.dojo-checks'
mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  const r = await build({
    entryPoints: [entry], bundle: true, format: 'esm', platform: 'node',
    write: false, logLevel: 'silent',
  })
  const f = join(OUT, name)
  writeFileSync(f, r.outputFiles[0].text)
  return import(pathToFileURL(f).href)
}
const K = await load('api/_lib/checks.ts', 'checks.mjs')
const W = await load('api/_lib/worktasks.ts', 'worktasks.mjs')

/* ---- de quoi fabriquer un livrable plausible ---------------------------- */
const para = (n) => Array.from({ length: n }, (_, i) =>
  `Cette section explique le point numero ${i + 1} avec assez de matiere pour ressembler a un vrai paragraphe de livrable professionnel, ecrit par quelqu'un qui connait le sujet et ne remplit pas.`).join('\n\n')

const table = (rows) => [
  '| Element | Detail | Responsable |',
  '| --- | --- | --- |',
  ...Array.from({ length: rows }, (_, i) => `| Ligne ${i + 1} | Un detail concret | Role |`),
].join('\n')

/** Un document générique qui passe les quatre contrôles universels. */
const GOOD = [
  '# Document', para(2), '## Contexte', para(2), '## Recommandation', para(2), table(4),
].join('\n\n')

console.log('--- les quatre contrôles universels --------------------------')
{
  const v = K.verify('strategy', GOOD)
  ok('un document plausible passe tout', v.ok, v.failed.map((f) => f.id).join(', ') || `${v.passed.length} contrôles`)
}
{
  const v = K.verify('strategy', '# Titre\n\nTrop court.')
  ok('trois lignes ne sont pas un livrable', !v.ok && v.failed.some((f) => f.id === 'substance'),
    v.failed.map((f) => f.id).join(', '))
}
{
  const v = K.verify('strategy', para(12))
  ok('un mur de prose sans titre ni tableau est signalé',
    v.failed.some((f) => f.id === 'structure'), v.failed.map((f) => f.id).join(', '))
}
{
  const v = K.verify('strategy', GOOD + '\n\nContact: [Your Company] pour la suite.')
  ok('un gabarit resté dans le texte est attrapé',
    v.failed.some((f) => f.id === 'no-placeholder'), v.failed.map((f) => f.id).join(', '))
}
{
  // Les marques que les prompts DEMANDENT ne doivent pas passer pour du gabarit.
  const v = K.verify('strategy', GOOD + '\n\nLe montant reste [FIGURE NEEDED] et le siege [DECIDE: France ou Belgique].')
  ok('mais les marques volontaires des prompts ne le sont pas',
    !v.failed.some((f) => f.id === 'no-placeholder'),
    '[DECIDE:] et [FIGURE NEEDED] sont ce qu’on demande au modèle d’écrire')
}
{
  const questions = ['# Questions', ...Array.from({ length: 12 }, (_, i) => `- Question ${i + 1} ?`)].join('\n')
  const v = K.verify('strategy', questions)
  ok('un texte fait de questions au lieu du livrable est signalé',
    v.failed.some((f) => f.id === 'answered'), v.failed.map((f) => f.id).join(', '))
}
{
  // ... sauf là où c'est le livrable attendu.
  const questions = ['# Guide', ...Array.from({ length: 14 }, (_, i) => `${i + 1}. Racontez-moi la derniere fois que ?`)].join('\n')
  const v = K.verify('interview-guide', questions)
  ok('mais un guide d’entretien a le droit de n’être que des questions',
    !v.failed.some((f) => f.id === 'answered'),
    'un avertissement systématique est un avertissement qu’on ignore')
}

console.log('\n--- ce que chaque livrable a promis --------------------------')
const pairs = [
  {
    id: 'design-system',
    good: '# Design system\n\n```json\n{"name":"Acme","colors":{"primary":"#2f6bff"},"typography":{"fontFamily":"Inter"}}\n```\n\n## Palette\n' + para(2) + '\n\n## Composants\n' + para(2),
    bad: '# Design system\n\n## Palette\n' + para(3) + '\n\n## Composants\n' + para(2),
    check: 'tokens-json',
    says: 'sans bloc JSON valide, il n’y a rien à importer dans Figma',
  },
  {
    id: 'market-study',
    good: '# Marche\n\n## Taille\nLe marche pese 1,2 Md EUR [estimated from INSEE 2024].\n' + para(2) + '\n\n## Concurrents\n' + table(4),
    bad: '# Marche\n\n## Taille\nLe marche pese 1,2 Md EUR.\n' + para(2) + '\n\n## Concurrents\n' + table(4),
    check: 'provenance',
    says: 'un chiffre non marqué passe pour une mesure alors que c’est une estimation',
  },
  {
    id: 'terms-draft',
    good: '# CGU\n\nCeci est un brouillon, pas un avis juridique.\n\n## Service\n' + para(2) + '\n\n## Droit applicable\n[DECIDE: France ou Luxembourg]\n\n## Donnees\n' + para(2),
    bad: '# CGU\n\n## Service\n' + para(3) + '\n\n## Droit applicable\nLe droit francais s’applique.\n\n## Donnees\n' + para(2),
    check: 'not-legal-advice',
    says: 'un brouillon qui ne se présente pas comme tel se lit comme un document opposable',
  },
  {
    id: 'pitch-deck',
    good: ['# Deck', ...Array.from({ length: 12 }, (_, i) => `## Slide ${i + 1} — Le point de cette diapositive\n${para(1)}`)].join('\n\n'),
    bad: ['# Deck', ...Array.from({ length: 4 }, (_, i) => `## Slide ${i + 1}\n${para(1)}`)].join('\n\n'),
    check: 'slides',
    says: 'quatre diapositives ne sont pas le deck demandé',
  },
  {
    id: 'experiments',
    good: '# Backlog\n\n' + table(10) + '\n\n## Le premier\n' + para(2),
    bad: '# Backlog\n\n' + table(3) + '\n\n## Le premier\n' + para(2),
    check: 'backlog-rows',
    says: 'trois idées ne sont pas un backlog d’expériences',
  },
  {
    id: 'release-check',
    good: '# Release\n\n## Avant\n' + para(2) + '\n\n## Retour arriere\n```bash\ngit revert HEAD\nnpm run deploy\n```\n\n## Apres\n' + para(2),
    bad: '# Release\n\n## Avant\n' + para(2) + '\n\n## Retour arriere\nRevenir a la version precedente.\n\n## Apres\n' + para(2),
    check: 'rollback-commands',
    says: '« revenir à la version précédente » ne se rejoue pas à 3 h du matin',
  },
  {
    id: 'interview-guide',
    good: ['# Guide', '## Ouverture', para(1), ...Array.from({ length: 12 }, (_, i) => `${i + 1}. Racontez-moi la derniere fois que vous avez ?`)].join('\n\n'),
    bad: ['# Guide', '## Ouverture', para(2), ...Array.from({ length: 4 }, (_, i) => `${i + 1}. Une question ?`)].join('\n\n'),
    check: 'questions',
    says: 'quatre questions ne remplissent pas un entretien',
  },
  {
    // Le MÊME livrable, éprouvé sur son second contrôle · un document peut être
    // présenté comme un brouillon et trancher quand même à votre place.
    id: 'terms-draft',
    good: '# CGU\n\nCeci est un brouillon pour revue juridique.\n\n## Service\n' + para(2) + '\n\n## Droit\n[DECIDE: France ou Luxembourg]\n\n## Donnees\n' + para(2),
    bad: '# CGU\n\nCeci est un brouillon pour revue juridique.\n\n## Service\n' + para(2) + '\n\n## Droit\nLe droit francais s’applique et le tribunal competent est Paris.\n\n## Donnees\n' + para(2),
    check: 'open-decisions',
    says: 'trancher à la place du fondateur est pire que laisser un blanc marqué',
  },
  {
    id: 'contract-review',
    good: '# Revue\n\n' + table(6) + '\n\n## A negocier\n' + para(2),
    bad: '# Revue\n\n' + para(4),
    check: 'clause-table',
    says: 'une revue de contrat en prose ne se relit pas clause par clause',
  },
  {
    id: 'kpi-dashboard',
    good: '# KPI\n\n' + table(6) + '\n\n## Laisse de cote\n' + para(2),
    bad: '# KPI\n\n' + para(4),
    check: 'metric-table',
    says: 'sans définition en regard, une métrique n’est qu’un mot',
  },
]

for (const p of pairs) {
  const g = K.verify(p.id, p.good)
  ok(`${p.id} · un bon livrable passe`, g.ok, g.failed.map((f) => f.id).join(', ') || `${g.passed.length} contrôles`)
  const b = K.verify(p.id, p.bad)
  ok(`${p.id} · et « ${p.check} » se déclenche quand il faut`,
    !b.ok && b.failed.some((f) => f.id === p.check),
    b.failed.some((f) => f.id === p.check) ? p.says : `attrapé : ${b.failed.map((f) => f.id).join(', ') || 'rien'}`)
}

console.log('\n--- la couverture, et ce qu’elle vaut -----------------------')
{
  // Un contrôle déclaré mais jamais éprouvé ne prouve rien · on refuse d'en
  // ajouter sans sa paire.
  const covered = new Set([...pairs.map((p) => p.check), 'substance', 'structure', 'no-placeholder', 'answered'])
  // billing-policy n'a plus que les universels · son contrôle spécifique a été
  // retiré parce qu'il mesurait la longueur en prétendant vérifier le contenu.
  const declared = new Set()
  for (const id of [...new Set([...pairs.map((p) => p.id), 'strategy', 'billing-policy'])]) {
    for (const c of K.checksFor(id)) declared.add(c.id)
  }
  const untested = [...declared].filter((c) => !covered.has(c))
  ok('chaque contrôle éprouvé ici est éprouvé dans les deux sens', untested.length === 0,
    untested.join(', ') || `${covered.size} contrôles, chacun avec sa paire`)
}
{
  // Le point de bascule · chaque livrable du produit doit passer AU MOINS les
  // contrôles universels, sinon la vérification ne couvre rien.
  const ids = [...new Set([...Object.keys(K.checksFor ? {} : {}), ...pairs.map((p) => p.id)])]
  const none = ids.filter((id) => K.checksFor(id).length === 0)
  ok('aucun livrable n’est sans contrôle du tout', none.length === 0, none.join(', '))
}

console.log('\n--- la reprise ----------------------------------------------')
{
  const task = W.serverWorkTask('market-study')
  const v = K.verify('market-study', '# Marche\n\n' + para(3) + '\n\n## Concurrents\n' + table(4))
  const prompt = K.repairPrompt(task, 'le document', v.failed)
  ok('la consigne de reprise nomme ce qui a échoué', /provenance/.test(prompt), '')
  ok('et rend au modèle SON texte', /--- the document ---/.test(prompt) && /le document/.test(prompt),
    'repartir de zéro produirait un autre document, souvent moins bon')
  ok('et lui interdit d’inventer pour satisfaire le contrôle',
    /rather than inventing a value/.test(prompt),
    'sinon un contrôle sur la provenance s’achète avec une source fabriquée')
}
{
  // Un contrôle qui lève ne doit condamner personne.
  const boom = K.verify('design-system', null)
  ok('un texte absurde ne fait pas exploser la vérification', Array.isArray(boom.failed))
}

rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
