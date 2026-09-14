// Les règles permanentes · ce qu'on n'a plus à réexpliquer.
//
// Ce qui se vérifie ici n'est pas « la règle est enregistrée » mais les trois
// propriétés qui décident si la fonction sert à quelque chose : qu'une règle
// arrive VRAIMENT dans le prompt, qu'elle ne puisse pas enfler jusqu'à noyer la
// demande, et qu'un échec de contrôle propose la règle qui l'aurait évité.
//
//   node scripts/test-skills.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

let fails = 0
const ok = (n, c, extra = '') => { console.log((c ? 'ok    ' : 'FAIL  ') + n + (extra ? ' · ' + extra : '')); if (!c) fails++ }

// Le magasin écrit dans localStorage · on lui en donne un.
const mem = new Map()
globalThis.localStorage = {
  getItem: (k) => (mem.has(k) ? mem.get(k) : null),
  setItem: (k, v) => mem.set(k, String(v)),
  removeItem: (k) => mem.delete(k),
}

const OUT = 'node_modules/.dojo-skills'
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
const S = await load('src/agents/skills.ts', 'skills.mjs')
const K = await load('api/_lib/checks.ts', 'checks.mjs')

const D = 'dojo-1'

console.log('--- une règle arrive dans le prompt --------------------------')
{
  ok('sans règle, aucun bloc n’est ajouté', S.skillsBlock(D, 'scribe') === '',
    'un titre suivi de rien invite le modèle à inventer ce qui devrait s’y trouver')

  S.useSkills.getState().add(D, 'scribe', 'N’utilise jamais de superlatif.')
  const block = S.skillsBlock(D, 'scribe')
  ok('avec une règle, elle est dans le bloc', /superlatif/.test(block))
  ok('et le bloc dit au modèle quoi en faire', /Follow them/.test(block),
    'une liste sans consigne se lit comme du contexte, pas comme une contrainte')

  ok('un autre agent ne la reçoit pas', !/superlatif/.test(S.skillsBlock(D, 'scout')),
    'une règle d’agent qui fuite sur les dix-sept autres serait pire que pas de règle')
}
{
  S.useSkills.getState().add(D, '*', 'Nous vendons aux DSI francaises.')
  ok('une règle de maison vaut pour tous', /DSI/.test(S.skillsBlock(D, 'scout')) && /DSI/.test(S.skillsBlock(D, 'scribe')))

  const block = S.skillsBlock(D, 'scribe')
  ok('et elle passe AVANT la règle de l’agent',
    block.indexOf('DSI') < block.indexOf('superlatif'),
    'la maison cadre, l’agent précise · ce qui vient en dernier est lu en dernier')
}
{
  const other = 'dojo-2'
  ok('une autre équipe ne reçoit rien', S.skillsBlock(other, 'scribe') === '',
    'les règles appartiennent à l’équipe qui les a écrites')
}

console.log('\n--- ce qui empêche le prompt d’enfler -----------------------')
{
  const st = S.useSkills.getState()
  ok('la même règle deux fois n’est ajoutée qu’une', !st.add(D, 'scribe', 'N’utilise jamais de superlatif.'))
  ok('même avec une casse différente', !st.add(D, 'scribe', 'n’utilise JAMAIS de superlatif.'),
    'une majuscule de plus ferait un doublon que personne ne voit')
  ok('une règle vide est refusée', !st.add(D, 'scribe', '   '))
  ok('deux caractères ne sont pas une règle', !st.add(D, 'scribe', 'ok'))
}
{
  const st = S.useSkills.getState()
  const long = 'a'.repeat(S.MAX_LEN + 200)
  st.add(D, 'deck', long)
  const kept = st.forAgent(D, 'deck').find((s) => s.text.startsWith('aaa'))
  ok('une règle trop longue est coupée, pas refusée', kept && kept.text.length === S.MAX_LEN,
    `${kept?.text.length} caractères · un brief déguisé en règle reste utilisable`)
}
{
  const st = S.useSkills.getState()
  let added = 0
  for (let i = 0; i < S.MAX_PER_ROLE + 5; i++) if (st.add(D, 'pixel', `Regle numero ${i} pour cet agent.`)) added++
  ok('le nombre de règles par agent est plafonné', added === S.MAX_PER_ROLE, `${added} acceptées`)
  ok('et le plafond est bas, volontairement', S.MAX_PER_ROLE <= 10,
    'quarante règles dans un prompt système en font oublier la moitié et ratent la demande')
}

console.log('\n--- un échec devient une règle ------------------------------')
{
  // Le vrai point de la méthode : capitaliser sur l'erreur au lieu de la
  // recorriger. Chaque contrôle doit savoir proposer la règle qui l'évite.
  const ids = new Set()
  for (const id of ['strategy', 'design-system', 'market-study', 'terms-draft', 'pitch-deck',
    'experiments', 'interview-guide', 'release-check', 'contract-review', 'kpi-dashboard']) {
    for (const c of K.checksFor(id)) ids.add(c.id)
  }
  const noRule = [...ids].filter((id) => !S.ruleFromFailure(id))
  ok('chaque contrôle sait proposer la règle qui l’aurait évité', noRule.length === 0,
    noRule.join(', ') || `${ids.size} contrôles, chacun avec sa règle`)

  const r = S.ruleFromFailure('provenance')
  ok('et cette règle est une consigne, pas la description du problème',
    /Marque chaque chiffre/.test(r), r)

  ok('un identifiant inconnu ne propose rien plutôt que du vide',
    S.ruleFromFailure('nawak') === '',
    'un bouton qui ajoute une règle vide serait pire que pas de bouton')
}
{
  // Et le circuit complet : un livrable rate un contrôle, on en fait une règle,
  // la règle repart dans le prompt du lancement suivant.
  const v = K.verify('market-study', '# Marche\n\n## Taille\nLe marche pese 1,2 Md EUR.\n\n## Suite\nDu texte.')
  const failed = v.failed.find((f) => f.id === 'provenance')
  ok('le livrable rate bien le contrôle', !!failed)
  const rule = S.ruleFromFailure(failed.id)
  S.useSkills.getState().add('dojo-3', 'scout', rule, `échec: ${failed.id}`)
  ok('la règle proposée part dans le prompt du lancement suivant',
    S.skillsBlock('dojo-3', 'scout').includes(rule.slice(0, 30)),
    'c’est là que la correction cesse d’être à refaire')
  const kept = S.useSkills.getState().forAgent('dojo-3', 'scout')[0]
  ok('et elle garde d’où elle vient', /provenance/.test(kept.from || ''),
    'une règle sans sa raison devient une consigne qu’on n’ose plus retirer')
}

console.log('\n--- ce qui se perd, et ce qui reste -------------------------')
{
  const st = S.useSkills.getState()
  const before = st.forAgent(D, 'scribe').length
  const own = st.forAgent(D, 'scribe').find((s) => s.role === 'scribe')
  st.remove(D, own.id)
  ok('retirer une règle la retire', st.forAgent(D, 'scribe').length === before - 1)
  ok('et ne touche pas à la règle de maison',
    st.forAgent(D, 'scribe').some((s) => s.role === '*'))
}
{
  // Le magasin relit ce qu'il a écrit · sans cela, les règles disparaissent en
  // fermant l'onglet et on recommence à les retaper.
  const raw = mem.get('dojoburo.skills.v1')
  ok('les règles sont écrites sur le disque', !!raw && /superlatif|DSI/.test(raw))
}

rmSync(OUT, { recursive: true, force: true })
console.log(fails ? `\n${fails} FAILED` : '\nALL GREEN')
process.exit(fails ? 1 : 0)
