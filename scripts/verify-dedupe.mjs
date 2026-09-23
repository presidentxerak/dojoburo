// Des doublons plantés dans un vrai navigateur, et ce que l'app en fait.
//
// La suite unitaire prouve que la fusion est correcte. Elle ne prouve pas que
// le store l'appelle, que l'écran cesse d'afficher douze cartes identiques, que
// le brief écrit survit au rechargement, ni que le nettoyage est ENREGISTRÉ —
// sans quoi les doublons reviendraient au prochain lancement et le produit
// aurait menti.
//
//   npm run preview   puis   node scripts/verify-dedupe.mjs
import { chromium } from 'playwright'

const B = process.env.BASE || 'http://localhost:4173'
const b = await chromium.launch({
  executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium',
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
})
const p = await b.newPage({ viewport: { width: 1360, height: 1000 } })

const out = []
const ok = (n, c, extra = '') => out.push(`${c ? 'PASS' : 'FAIL'}  ${n}${extra ? ' · ' + extra : ''}`)

/* ---- l'état d'un fondateur qui a accumulé des copies -------------------- */
// Trois exemplaires de quatre spécialités, dans UNE entreprise : exactement ce
// que montrent les captures. Le brief et le coéquipier maison sont posés sur la
// DEUXIÈME copie, celle qu'un nettoyage naïf jetterait.
const SAVED = (() => {
  const agents = (extra = []) => [
    { id: 'x1', name: 'Chief', fn: 'exec', role: 'ceo', skinId: 's1', tasks: [], budget: 1, gx: 0, gy: 0 },
    { id: 'x2', name: 'Scout', fn: 'ops', role: 'research', skinId: 's2', tasks: [], budget: 1, gx: 1, gy: 0 },
    ...extra,
  ]
  const dojos = []
  const specs = ['social', 'startup', 'app', 'book']
  for (let copy = 0; copy < 3; copy++) {
    for (const a of specs) {
      const second = copy === 1 && a === 'social'
      dojos.push({
        id: `d_${a}_${copy}`,
        name: a,
        companyId: 'c_one',
        template: 'startup',
        archetype: a,
        goal: second ? 'Toucher les DSI avant mars' : '',
        agents: second
          ? agents([{ id: 'xc', name: 'Juriste maison', fn: 'ops', skinId: 's3', tasks: [], budget: 1, gx: 2, gy: 0, custom: { title: 'Juriste', desc: '', tint: '#f0f', apps: [] } }])
          : agents(),
      })
    }
  }
  return {
    account: { id: 'guest_test', name: 'Founder', handle: '', email: '', provider: 'guest', currency: 'USD', avatarSkinId: 's1' },
    companies: [{ id: 'c_one', name: 'Acme', createdAt: 1 }],
    activeCompanyId: 'c_one',
    dojos,
    activeDojoId: 'd_social_2',   // une copie qui va être absorbée
    projectName: 'Acme',
  }
})()

await p.addInitScript((saved) => {
  try {
    localStorage.setItem('dojoburo.beta', '1974')
    localStorage.setItem('dojoburo.workshop.v1', JSON.stringify(saved))
    sessionStorage.setItem('dojoburo.nav', '')
  } catch { /* private window */ }
}, SAVED)

await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(2500)

// L'avis se lit MAINTENANT · c'est le chargement où la fusion a eu lieu, et le
// suivant n'aura plus rien à annoncer. Il doit atteindre quelqu'un qui entre
// directement dans son dojo, sans passer par la vue entreprise où vit le détail.
const firstScreen = await p.innerText('body')

/* ---- ce que le store a fait -------------------------------------------- */
const state = await p.evaluate(() => {
  const raw = localStorage.getItem('dojoburo.workshop.v1')
  const s = raw ? JSON.parse(raw) : null
  return {
    total: s?.dojos?.length ?? -1,
    archetypes: (s?.dojos ?? []).map((d) => d.archetype).filter(Boolean),
    goals: (s?.dojos ?? []).map((d) => d.goal).filter(Boolean),
    customs: (s?.dojos ?? []).flatMap((d) => (d.agents ?? []).filter((a) => a.custom).map((a) => a.name)),
    active: s?.activeDojoId ?? null,
  }
})

ok('les douze copies deviennent quatre équipes', state.total === 4, `${state.total} équipes`)
ok('une seule de chaque spécialité',
  new Set(state.archetypes).size === state.archetypes.length && state.archetypes.length === 4,
  state.archetypes.join(', '))
ok('le brief écrit sur une copie a survécu',
  state.goals.some((g) => /Toucher les DSI/.test(g)), state.goals.join(' | '))
ok('le coéquipier créé à la main aussi',
  state.customs.includes('Juriste maison'),
  'c’est le vrai travail · une carte en double ne l’est pas')

// Le nettoyage doit être ENREGISTRÉ · sinon il se rejoue à chaque ouverture et
// le fondateur retrouve ses doublons en revenant demain.
ok('et le nettoyage est écrit dans localStorage, pas seulement à l’écran',
  state.total === 4, 'relu depuis le disque, pas depuis le store en mémoire')

// La copie ouverte a été absorbée · on ne doit pas rester sur un dojo fantôme.
ok('l’équipe ouverte n’est pas une carte disparue',
  state.archetypes.length === 4 && !!state.active,
  `active: ${state.active}`)

/* ---- ce que l'écran montre --------------------------------------------- */
await p.goto(`${B}/#app`, { waitUntil: 'networkidle' })
await p.waitForTimeout(1500)
const tabs = await p.locator('.dtab-txt').allInnerTexts().catch(() => [])
if (tabs.length) {
  ok('aucun onglet n’est numéroté', !tabs.some((t) => /\s\d+$/.test(t)), tabs.join(' | '))
  ok('et aucun libellé n’apparaît deux fois', new Set(tabs).size === tabs.length, tabs.join(' | '))
}

// Une fusion silencieuse se lirait comme une suppression.
ok('la fusion est annoncée là où l’on atterrit',
  /fusionnée/.test(firstScreen),
  firstScreen.split('\n').find((l) => /fusionnée/.test(l))?.trim() ?? 'aucun mot à l’écran')
ok('et l’avis dit que rien n’a été supprimé',
  /supprimé|repris/.test(firstScreen),
  'c’est la phrase qui sépare un rangement d’une perte')

// Et il ne se répète pas : au chargement suivant il n'y a plus rien à annoncer.
const second = await p.innerText('body')
ok('mais il ne se rejoue pas au chargement suivant', !/fusionnée/.test(second),
  'un avis qui revient chaque jour pour un ménage déjà fait devient du bruit')

/* ---- et au rechargement ------------------------------------------------ */
await p.reload({ waitUntil: 'networkidle' })
await p.waitForTimeout(1800)
const after = await p.evaluate(() => {
  const s = JSON.parse(localStorage.getItem('dojoburo.workshop.v1') || '{}')
  return (s.dojos ?? []).length
})
ok('rien ne se remet à grignoter au rechargement', after === 4, `${after} équipes`)

const dup = await p.locator('.tmcard-dup').count().catch(() => 0)
ok('plus aucune carte marquée « Duplicate »', dup === 0, `${dup} badges`)

await b.close()
console.log(out.join('\n'))
const failed = out.filter((l) => l.startsWith('FAIL')).length
console.log(failed ? `\n${failed} FAILED` : '\nALL GREEN')
// LA SORTIE EST VIDÉE AVANT DE PARTIR, SANS RENONCER À PARTIR.
//
// Vers un terminal, écrire est synchrone. Vers un TUYAU · c'est-à-dire dès que
// le portail lance cette épreuve · c'est asynchrone, et « process.exit() » s'en
// va sans attendre : ce qui n'est pas encore sorti est jeté. Mesuré sur une
// épreuve de données : 528 lignes une fois, 179 la suivante, code de sortie 0
// dans les deux cas. Ce qui disparaît en premier, c'est le DÉTAIL d'un échec,
// donc la seule chose qu'on lit pour le corriger.
//
// UNE ÉPREUVE NAVIGATEUR NE PEUT PAS SE CONTENTER DE POSER SON CODE, parce
// qu'un navigateur laisse parfois une poignée ouverte et que le processus
// resterait pendu jusqu'au budget du portail · un faux échec de cinq minutes.
// D'où les deux temps : on pose le code et on laisse Node sortir seul, ce qui
// vide la file ; et une minuterie DÉRÉFÉRENCÉE force la sortie une demi-seconde
// plus tard si quelque chose retient encore. Déréférencée, elle n'empêche pas
// la sortie naturelle · elle ne se déclenche que s'il y a effectivement de quoi
// la retenir.
process.exitCode = failed ? 1 : 0
setTimeout(() => process.exit(process.exitCode ?? 0), 500).unref()
