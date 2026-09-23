// Content drift check · the build fails when written copy stops being true.
//
// Most copy now imports src/data/facts.ts, so it cannot go stale. Three places
// cannot import it — the server-side support prompt (api/chat.ts runs in its own
// bundle), index.html, and the Academy's prose — and those are exactly the
// places a number quietly rots for months.
//
// So this script recomputes the facts from the real data and asserts that every
// written claim still matches. Add a rule the day you write a number down.
//
// Run standalone with `npm run check:content`; the build runs it too.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8')

// --- load the real data (strip the types with esbuild, then import) ---------
const { build } = await import('esbuild')
async function load(entry) {
  const out = await build({
    entryPoints: [path.join(ROOT, entry)],
    bundle: true, format: 'esm', platform: 'node', write: false, logLevel: 'silent',
    // data modules only · anything that reaches for the DOM is not a fact source
    external: ['react', 'zustand'],
  })
  return import('data:text/javascript;base64,' + Buffer.from(out.outputFiles[0].text).toString('base64'))
}

const roles = await load('src/data/roleAgents.ts')
const arch = await load('src/data/archetypes.ts')
const conns = await load('src/data/connectors.ts')
const budget = await load('src/data/budget.ts')
const academy = await load('src/data/academy.ts')
const plans = await load('src/data/plans.ts')
const faces = await load('src/data/agentFaces.ts')
const effort = await load('src/data/effort.ts')
// la promesse du produit · elle est DÉRIVÉE ici, jamais retapée (voir plus bas)
const pos = await load('src/data/positioning.ts')
// le catalogue de la bibliothèque · pour que sa taille annoncée soit la vraie
const lib = await load('src/data/library.ts')
// LES DOUZE AGENTS de la salle de classe · le centre de formation les annonce
// dans son sous-titre, dans son en-tête, sur la page /build et dans le prompt
// du robot de support. Quatre copies d'un même nombre.
const uc = await load('src/data/agentUseCases.ts')

const F = {
  crew: roles.COMPANY_IDS.length,
  roles: roles.ROLE_AGENTS.length,
  teams: arch.ARCHETYPES.length,
  apps: conns.CONNECTORS.length,
  creditUsd: budget.CREDIT_USD,
  pathEur: plans.PATH_EUR,
  tradeEur: plans.TRADE_EUR,
  bundleEur: plans.BUNDLE_EUR,
  discoveryDays: plans.DISCOVERY_DAYS,
  lessons: academy.LESSON_COUNT,
  tracks: academy.TRACKS.length,
  hours: Math.round((academy.TOTAL_MINUTES / 60) * 10) / 10,
  useCases: uc.USE_CASE_COUNT,
  courses: pos.COURSE_COUNT,
}
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
const runUsd = (F.creditUsd * 4).toFixed(2)

// --- the rules -------------------------------------------------------------
// Each rule says: in this file, this claim must be present, and the stale
// variants must not be. `must` may be a string or a RegExp.
// Claims that were true once and are not any more.
//
// Every one of these shipped: the app told people their company never left
// their browser after wave two put a copy on the server, sold credits at a
// pound each in one screen while another sold a $29 plan, and promised each of
// eighteen teammates a studio when three have one. None of it was caught by a
// type checker or a browser test, because all of it compiled and rendered
// perfectly — it was just false.
//
// `never` is checked across src/, api/ and db/, so a sentence cannot come back
// in a file this list has never heard of. api/ was outside the sweep until the
// audit found the checkout endpoint still describing credits settled in XRP —
// server files carry copy too, and nobody reads them.
const NEVER = [
  { re: /never leaves your device/i, why: 'a signed-in company is copied to the server · say what is actually true' },
  { re: /100% in your browser/i, why: 'documents sync to the organisation · scope the claim to media and exports' },
  { re: /nothing is sent to a server/i, why: 'the same' },
  { re: /buy credits|Top up credits|credits in your own currency/i, why: 'the app sells plans, not credits · src/data/plans.ts is the only price' },
  { re: /one credit per task|about one credit/i, why: 'nothing is priced per credit any more' },
  { re: /metered balance/i, why: 'there is no balance to meter' },
  // NB: not /xumm/ — the support index deliberately keeps wallet words as
  // SEARCH KEYWORDS so that someone asking "do I need a wallet?" reaches the
  // answer that says no. A keyword is not a claim.
  { re: /settled on a fast rail|XRPL|VITE_XUMM/i, why: 'the settlement rail was removed' },
  { re: /one agent each|owns one studio/i, why: 'three teammates have a control panel, not eighteen' },
  // This one was true for a fortnight and is not any more. Billing sells the
  // monthly plans through Stripe Subscriptions; a screen that still apologises
  // for not being able to take a card is now its own kind of false claim.
  { re: /[Pp]lans cannot be bought/, why: 'Billing sells plans · api/checkout.ts is subscription mode' },
  // The screen was called "My Credits" long after there were any: the menu item,
  // its title, and five places that told a founder to go there for their key.
  // A name is a claim too — this one told people to look for a balance.
  { re: /My Credits/, why: 'the screen is Billing · there is no credit balance to open' },
  // The old positioning. It sold the one thing we are worst at — being a
  // generic agent builder — in the sentence every competitor already uses, and
  // it disagreed with the h1 for months: the page said "company", the meta tag
  // said "projects", and nothing compared them.
  { re: /projects automator|agent creation simple/i, why: 'the product teaches · it does not build for you' },
  // LE REPOSITIONNEMENT. L'app vendait une entreprise déjà dotée de son
  // personnel ; elle enseigne maintenant. Ces phrases-là ont été vraies
  // pendant des mois, elles sont partout dans les têtes, et elles
  // reviendraient d'elles-mêmes à la première page recopiée d'une ancienne.
  // Une promesse périmée sur une page d'accueil est le mensonge le moins cher
  // à commettre et le plus cher à réparer.
  { re: /already staffed/i, why: 'we no longer staff a company · we teach' },
  { re: /teams that arrive (formed|briefed)/i, why: 'the same · nothing arrives ready to work for you' },
  { re: /Create your (company|dojo teams)/i, why: 'the call to action is the course, not a creation flow' },
  // Twenty-two of the forty-four can act. "Your whole stack" over the full
  // catalogue is the overclaim the connector audit exists to stop.
  { re: /connects? your whole stack/i, why: 'quote APP_LIVE_COUNT · the catalogue is bigger than what can act' },
  // LE CARBONE. Il a été promis dans six endroits pendant deux lots, avant
  // qu'on décide de ne mesurer que les jetons : mesurer une empreinte demande
  // des facteurs d'énergie par jeton et une intensité réseau que nous n'avons
  // pas, et c'est le métier de Nekomai. Une promesse d'empreinte qui revient
  // dans une page produit est un chiffre inventé en puissance, dans un outil
  // dont tout l'argument est la mesure honnête.
  //
  // La règle vise la PROMESSE, pas le mot : la page de sobriété doit pouvoir
  // dire qu'elle ne mesure pas le carbone, et nommer qui le fait.
  { re: /in grams of CO₂e|in grams of CO2e/i, why: 'we count tokens · carbon is Nekomai’s job, and the page says so' },
  // LE NOMBRE DE PILIERS, écrit en toutes lettres. Il a été « quatre » dans
  // l'en-tête, dans la page d'accueil et dans le prompt du robot pendant que
  // la liste en contenait cinq. Un compte écrit à la main est un compte qui
  // se périme au premier ajout, et celui-ci se périme dans la phrase la plus
  // lue du site.
  { re: /(four|FOUR) pillars/i, why: 'the count comes from PILLARS.length · never typed' },
  // LE DOJO COMME USINE. Il est devenu un centre de formation : on n'y fait
  // plus produire une équipe, on y apprend à fabriquer un agent puis on
  // l'emporte. Ces phrases ont été vraies et reviendraient d'elles-mêmes.
  { re: /run your business for you|agents that work for you/i, why: 'the dojo teaches · nothing here works for anyone' },
]

const RULES = [
  // the support bot's server-side prompt · a separate bundle, cannot import facts
  { file: 'api/chat.ts', must: new RegExp(`${F.teams} ready-made teams`), why: `the catalogue has ${F.teams} ready-made teams` },
  // LES PRIX vivent dans src/data/plans.ts. Ils ont vécu à trois endroits qui se
  // contredisaient · la landing vendait des crédits à 1 $, le panneau Billing
  // vendait quatre paliers comptés, et budget.ts facturait un crédit à un
  // quatrième tarif · et ces règles existent pour empêcher de recommencer.
  //
  // ELLES ONT ÉTÉ RÉPARÉES, PAS SUPPRIMÉES. Elles affirmaient « Founder est à
  // 29 $ » et « Managed inclut 2 000 tâches ». Ces deux phrases sont devenues
  // fausses le jour où le produit a cessé d'exécuter du travail. Une garde dont
  // la prémisse a bougé doit affirmer la NOUVELLE vérité, sinon elle certifie
  // une erreur : ici, que le robot vend encore des exécutions.
  // TROISIÈME RÉPARATION DE CES LIGNES, et la raison est la même que les deux
  // premières : le modèle de vente a changé, donc ce que le robot doit dire a
  // changé avec lui. Ce n'est pas un assouplissement · c'est la nouvelle
  // vérité, affirmée aussi précisément que l'ancienne l'était.
  { file: 'api/chat.ts', must: new RegExp(`FORMATION \\(${F.pathEur} €, paid once\\)`), why: `the path is ${F.pathEur} €, paid once` },
  { file: 'api/chat.ts', must: new RegExp(`MÉTIER \\(${F.tradeEur} €, added after`), why: `the trade module is ${F.tradeEur} €, added after` },
  { file: 'api/chat.ts', must: new RegExp(`DISCOVERY \\(0 €\\) is ${F.discoveryDays} days`), why: `the free week is ${F.discoveryDays} days` },
  { file: 'api/chat.ts', must: /NOTHING RECURS/, why: 'the one thing the bot must say first about price' },
  // LES PLANS MORTS · quelqu'un qui a lu une ancienne grille va poser la
  // question, et un robot qui revend une capacité éteinte fait une promesse que
  // personne ne tiendra. Il doit savoir que c'est fini, donc la phrase qui les
  // enterre doit exister.
  { file: 'api/chat.ts', must: /say plainly that it is gone and what replaced it/, why: 'the bot must bury the old plans, not resell them' },
  { file: 'api/chat.ts', forbid: /\bStarter\b|1,500 credits|Pro-pack/, why: 'the metered plans are gone · we sell the course, the files and the seats' },

  // and nothing may hardcode a plan price outside plans.ts
  { file: 'src/components/landing/Pricing.tsx', forbid: /\$\d+ ?\/ ?month|PRICE_PER_CREDIT/, why: 'plan prices come from data/plans.ts' },
  { file: 'src/data/deckSlides.ts', forbid: /\$\d+\/mo\b|\$\d+\/seat/, why: 'the deck quoted its own prices on slide 07 · they come from data/plans.ts now' },
  { file: 'api/chat.ts', must: /Dojo Academy/, why: 'the bot must know the Academy exists' },
  // LA BIBLIOTHÈQUE · c'est la partie payante, donc celle qu'il ne faut pas
  // décrire de travers. Le robot doit savoir qu'elle existe, où elle est, et
  // surtout ce qui y est gratuit : quelqu'un à qui l'on refuse un fichier doit
  // s'entendre dire pourquoi, pas découvrir un mur.
  { file: 'api/chat.ts', must: 'LIBRARY (/library)', why: 'the bot must know the library and its address' },
  { file: 'api/chat.ts', must: 'the FILE ITSELF is what a paid plan buys', why: 'it must say what is free and what is not' },
  { file: 'src/support/knowledge.ts', must: "id: 'library'", why: 'the support index needs a library topic' },

  // the Academy's own prose
  { file: 'src/data/academy.ts', must: /paying for the teams, not for tokens/i, why: 'the pricing lesson must lead with what is actually sold' },
  { file: 'src/data/academy.ts', must: new RegExp(`Formation is ${F.pathEur} € paid once`), why: `the lesson must name the real price of the path` },
  { file: 'src/data/academy.ts', must: new RegExp(`Métier is ${F.tradeEur} € added on top`), why: `the lesson must say the trade module is an add-on, and what it costs` },
  { file: 'src/data/academy.ts', must: new RegExp(`come to ${F.bundleEur} €`), why: `the lesson must give the total of both, calculated` },
  { file: 'src/data/academy.ts', forbid: /\$29 a month|\$49 a month|includes 2,000 tasks/, why: 'the lesson taught the metered plans · they are gone' },
  { file: 'src/data/academy.ts', forbid: /(ships|comes) with (twelve|\d+) teammates/i, why: 'a crew-size claim belongs in facts.ts, not in a lesson' },

  // the landing page and the guide must not hardcode counts any more
  { file: 'src/Landing.tsx', forbid: /\b12 studios\b/, why: 'use CREW_COUNT from data/facts' },
  { file: 'src/Landing.tsx', forbid: /(ships|comes) with twelve/i, why: 'use CREW_WORD from data/facts' },
  { file: 'src/DojoGuide.tsx', forbid: /\b12 studios\b/, why: 'use CREW_COUNT from data/facts' },
  { file: 'src/DojoGuide.tsx', forbid: /(ships|comes) with twelve/i, why: 'use CREW_WORD from data/facts' },
  { file: 'src/support/knowledge.ts', forbid: /(ships|comes) with twelve/i, why: 'use CREW_WORD from data/facts' },

  // the Academy home + the landing invitation quote the lesson count
  // The landing renders {LESSON_COUNT} rather than a number, so this asserts the
  // WIRING, not the value. A literal here was correct the day it was typed and
  // wrong the day a lesson was added — which is the whole failure mode this
  // script exists to catch.
  // LE NOMBRE DE LEÇONS · la règle exigeait « {LESSON_COUNT} lessons », c'est à
  // dire le compte ET le mot anglais collés. Le mot est traduit maintenant, le
  // compte non · c'est exactement le bon partage. La garde ne doit donc plus
  // réclamer le mot anglais, qui serait une façon d'interdire la traduction au
  // nom de la justesse du chiffre, mais bien que le CHIFFRE soit lu et non
  // écrit, ce qui est ce qu'elle a toujours voulu dire.
  { file: 'src/Landing.tsx', must: /\{LESSON_COUNT\} \{t\('lp\.lessons'\)\}/, why: 'the landing must read the lesson count from the curriculum, not hardcode it' },

  // index.html · the one description a crawler reads before any JS runs. It must
  // carry the SAME position as the h1: those two disagreed for months because
  // nothing compared them, and the meta tag is what a shared link shows.
  { file: 'index.html', must: /<meta name="description"/, why: 'the site needs a description' },
  // LA PROMESSE, comparée à la vraie · pas à une copie.
  //
  // Ces deux lignes disaient « already staffed » en dur, dans le script même
  // qui existe pour empêcher une phrase écrite deux fois de diverger. Elles
  // lisent maintenant src/data/positioning.ts : le jour où la promesse change,
  // elle change à un seul endroit et la garde suit, au lieu d'échouer en
  // exigeant l'ancienne.
  { file: 'index.html', must: pos.PROMISE, why: `the meta description must carry the promise: "${pos.PROMISE}"` },
  // Le SÉPARATEUR est lu lui aussi · il était écrit « — » dans cette règle et
  // dans le titre, et le jour où la promesse est passée à la virgule les deux
  // ont menti ensemble sans que rien n'échoue. Le titre pose maintenant les
  // deux moitiés ET le séparateur, tous les trois importés.
  // LA PROMESSE, LE SOUS-TITRE ET LES DÉMENTIS · ils étaient lus directement
  // depuis positioning (PROMISE_LEAD, SUBTITLE, NOT_THIS). Ils passent
  // maintenant par positioningFor(lang), qui rend la bonne langue.
  //
  // CETTE GARDE A ÉTÉ RÉPARÉE, PAS ASSOUPLIE. Ce qu'elle protège n'a pas
  // changé d'un mot : le hero RENDU la promesse, séparateur compris, au lieu
  // de la retaper. Seul le chemin par lequel elle arrive a changé. Une garde
  // qu'on relâche parce qu'elle vient de rougir cesse de garder quoi que ce
  // soit · c'est le moment exact où elle était le plus utile.
  { file: 'src/Landing.tsx', must: /\{pos\.promiseLead\}\{PROMISE_SEP\}<span className="hl-acid">\{pos\.promiseHl\}<\/span>/, why: 'the hero must RENDER the promise, separator included, not retype it' },
  { file: 'src/Landing.tsx', must: /\{pos\.subtitle\}/, why: 'the hero subtitle comes from positioning.ts too' },
  { file: 'src/Landing.tsx', must: /pos\.notThis/, why: 'the landing must say in plain words what the product no longer does' },
  // … et la source reste UNE, dans les deux langues : positioningFor est le
  // seul chemin, donc il n'existe pas de version française qui vive ailleurs.
  { file: 'src/Landing.tsx', must: /positioningFor\(lang\)/, why: 'one entry point for the positioning, in either language' },
  { file: 'src/data/positioning.ts', must: /PROMISE_LEAD_FR/, why: 'the French promise lives with the English one, never in a parallel file' },
  { file: 'src/data/positioning.ts', must: /NOT_THIS_FR/, why: 'the same for the disclaimers' },
  // les quatre piliers sont la carte du produit · l'en-tête et l'accueil les
  // lisent au même endroit, sinon la navigation et la page se contredisent
  { file: 'src/components/SiteHeader.tsx', must: /PILLARS/, why: 'the header navigation is the pillars, read from positioning.ts' },
  // LE CENTRE DE FORMATION · trois cours, douze agents, et un maître qui tient
  // la progression. Chacun de ces trois faits est écrit sur plusieurs surfaces
  // et n'est vérifié nulle part ailleurs.
  { file: 'src/data/positioning.ts', must: "path: '/build'", why: 'the build pillar points at the real page' },
  { file: 'src/data/positioning.ts', must: /COURSE_PILLARS/, why: 'the three courses are named once, as pillars' },
  { file: 'src/data/positioning.ts', forbid: /twelve agents/i, why: 'the count is derived from USE_CASE_COUNT, never written' },
  { file: 'src/main.tsx', must: /path === '\/build'/, why: 'the dojo classroom needs a route, or the pillar leads nowhere' },
  { file: 'src/main.tsx', must: /\^\\\/build\\\//, why: 'each use case needs its own address, or none of the twelve is shareable' },
  { file: 'scripts/gen-seo.mjs', must: /USE_CASES/, why: 'the sitemap must carry the agent pages, or nothing indexes them' },
  { file: 'src/dojo/BuildAgent.tsx', must: /masterSays/, why: 'the master greets, and that is the first thing the page does' },
  // Les diplômes ont DÉMÉNAGÉ · ils étaient rendus dans BuildAgent, où ils ne
  // voyaient qu'un cours sur trois. Cette règle les suit dans MasterPanel
  // plutôt que de continuer à exiger l'ancien emplacement : une garde dont la
  // prémisse a bougé se répare, elle ne se supprime pas.
  { file: 'src/dojo/MasterPanel.tsx', must: /DIPLOMAS/, why: 'the master hands out the diplomas, wherever he teaches' },
  { file: 'src/dojo/diplomas.ts', must: /USE_CASE_COUNT/, why: 'a diploma threshold above the number of agents can never be earned' },
  // LE MAÎTRE TIENT LES TROIS COURS · il n'en tenait qu'un. On pouvait finir
  // les vingt leçons et les sept leviers sans qu'il ait rien à dire, ce qui
  // revient à annoncer trois cours et à n'en reconnaître qu'un.
  { file: 'src/dojo/MasterPanel.tsx', must: /COURSES/, why: 'the master reads the three courses, not one' },
  { file: 'src/dojo/MasterPanel.tsx', must: /masterAdvice/, why: 'a teacher says what to do next, not just what is done' },
  { file: 'src/academy/Academy.tsx', must: /<MasterPanel/, why: 'the master must hold the count on the prompt engineering course too' },
  { file: 'src/frugality/Frugality.tsx', must: /<MasterPanel/, why: '…and on the frugality course' },
  { file: 'src/dojo/BuildAgent.tsx', must: /<MasterPanel/, why: '…and where he teaches' },
  { file: 'src/frugality/Frugality.tsx', must: /markDone\(LEVER_TRACK/, why: 'the third course needs something to finish, or it is an article' },
  // La correction qui a rendu tout ça possible · le compteur de l'académie
  // additionnait les étapes d'agent et les leviers contre un dénominateur de
  // vingt leçons, donc il affichait « 34 sur 20 ».
  { file: 'src/academy/progress.ts', must: /readProgress/, why: 'one place counts the courses · doneCount must not add up three of them' },
  { file: 'src/academy/progress.ts', forbid: /doneCount: s\.done\.length/, why: 'that counted agent steps and levers as lessons' },
  { file: 'src/dojo/masterProgress.ts', must: /Math\.min\(100/, why: 'a progress bar above one hundred means the count is wrong' },
  { file: 'src/lib/agentExport.ts', must: /SKILL\.md/, why: 'prompts, briefs and skills must all leave the dojo as files' },
  // En chiffres ou en toutes lettres · le prompt du robot est de la prose, et
  // « twelve agents » y est plus juste que « 12 agents ». Ce qui compte est
  // que ce soit LE nombre, pas celui d'il y a deux lots.
  { file: 'api/chat.ts', must: new RegExp(`(${F.useCases}|${WORDS[F.useCases]}) agents`, 'i'), why: `the bot must know the room holds ${F.useCases} agents` },
  { file: 'api/chat.ts', must: /THREE COURSES/, why: 'the bot must describe a training centre, not a platform' },
  // …et la bibliothèque a une vraie adresse maintenant qu'elle existe
  { file: 'src/data/positioning.ts', must: "path: '/library'", why: 'the library pillar points at the real page' },
  { file: 'src/Landing.tsx', must: /ENTRY_COUNT/, why: 'the landing reads the catalogue size from the catalogue, not from a number' },
  // LA SOBRIÉTÉ · une vraie page, un vrai renvoi, et aucun tarif écrit en dur
  { file: 'src/data/positioning.ts', must: "path: '/frugality'", why: 'the frugality pillar points at the real page' },
  { file: 'src/frugality/Frugality.tsx', must: /do not measure carbon/i, why: 'the page must say plainly what it does not do' },
  { file: 'src/frugality/Frugality.tsx', must: /nekomai\.com/i, why: 'enterprises are pointed at Nekomai for carbon' },
  { file: 'src/data/frugality.ts', must: /inPrice: 0/, why: 'no supplier tariff is hardcoded · the user enters their own' },
  { file: 'api/chat.ts', must: /We do not measure carbon/i, why: 'the bot must not promise a footprint we do not compute' },
  // LES ATELIERS · la promesse « tutoriels interactifs » doit rester vraie.
  // Une scène qui tourne toute seule est une illustration ; ce qui la rend
  // interactive est le fait que le lecteur y décide de quelque chose.
  { file: 'src/academy/Lab.tsx', must: /from '\.\.\/data\/frugality'/, why: 'the labs use the shared cost model, never their own' },
  { file: 'src/data/academy.ts', must: /lab\?: LabId/, why: 'a lesson must be able to carry a lab' },
  { file: 'src/academy/Academy.tsx', must: /<Lab id=\{lesson\.lab\}/, why: 'the lesson page must actually render it' },
  { file: 'src/support/knowledge.ts', must: /\$\{LIB_COUNT\}/, why: 'the library size comes from facts.ts, never typed' },
  // LES ACCROCHES DES FORMULES · elles ont survécu au repositionnement entier
  // en promettant « construisez une entreprise » et « nous faisons tourner les
  // modèles pour vous », parce qu'aucune règle ne les regardait. Une accroche
  // est la phrase qu'on lit juste avant de sortir sa carte.
  { file: 'src/data/plans.ts', forbid: /Build a company and watch/i, why: 'nothing here builds a company for anyone' },
  { file: 'src/data/plans.ts', forbid: /We run the models for you/i, why: 'the dojo is a sandbox · nothing runs by default' },
  // CE QUE LA FORMULE GRATUITE PROMET A CHANGÉ · elle donnait le cours entier
  // et le diplôme quand tout était gratuit. Elle donne une semaine, et ce qui
  // la rend honnête est qu'elle soit ENTIÈRE et sans carte. Voir test-pricing,
  // qui vérifie la même promesse sur les données plutôt que sur le fichier.
  { file: 'src/data/plans.ts', must: /one lesson a day/i, why: 'the free week must say its rhythm, because that is what it is' },
  { file: 'src/data/plans.ts', must: /no card/i, why: 'the free week must promise it takes no card' },
  // LA GARDE QUI A CHANGÉ DE CIBLE · elle exigeait que la carte Managed avoue
  // que son allocation ne se consommait jamais. C'était le meilleur qu'on
  // pouvait faire tant qu'on vendait une capacité éteinte. On ne la vend plus,
  // donc la phrase à exiger n'est plus un aveu mais le nouveau produit : des
  // sièges. Ce que la garde continue d'interdire, c'est le retour de la vente
  // au forfait de tâches, sous n'importe quel nom.
  { file: 'src/data/plans.ts', must: /addOn/, why: 'the third plan is an add-on now, not a seat price' },
  { file: 'src/data/plans.ts', must: /once\?: boolean/, why: 'a paid plan must be able to say it does not recur' },
  { file: 'src/data/plans.ts', forbid: /tasks a month|tasks included|MANAGED_TASKS/, why: 'no plan sells tasks any more · nothing here runs to draw on them' },
  { file: 'src/data/plans.ts', must: /jamais l'identifiant|never the id/, why: 'plans.ts must keep saying why the ids and the names differ' },
  // and the apps section must quote what can ACT, not the catalogue size
  { file: 'src/Landing.tsx', must: /APP_LIVE_COUNT/, why: 'the landing quotes apps that can act, not the catalogue count' },
]

let bad = 0
for (const r of RULES) {
  let src
  try { src = read(r.file) } catch { console.log(`FAIL  ${r.file} · file not found`); bad++; continue }
  if (r.must && !(r.must instanceof RegExp ? r.must.test(src) : src.includes(r.must))) {
    console.log(`FAIL  ${r.file} · missing: ${r.why}`)
    console.log(`      expected ${r.must}`)
    bad++
  }
  if (r.forbid && r.forbid.test(src)) {
    console.log(`FAIL  ${r.file} · stale copy: ${r.why}`)
    console.log(`      found ${r.forbid}`)
    bad++
  }
}

// --- the effort modes exist in two places on purpose ------------------------
// The client shows them; the SERVER enforces them, because a browser cannot be
// trusted with a token ceiling. That means two tables, which means they can
// drift — so they are compared here on every build.
const runSrc = read('api/agent-run.ts')
for (const m of effort.EFFORT_MODES) {
  const row = new RegExp(`${m.id}:\\s*\\{\\s*maxTokens:\\s*(\\d+),\\s*thinking:\\s*(true|false),\\s*maxApps:\\s*(\\d+)`).exec(runSrc)
  if (!row) { console.log(`FAIL  agent-run · effort mode "${m.id}" is missing server-side`); bad++; continue }
  const [, mt, th, ma] = row
  if (Number(mt) !== m.maxTokens) { console.log(`FAIL  effort "${m.id}" · maxTokens ${m.maxTokens} in the app, ${mt} on the server`); bad++ }
  if ((th === 'true') !== m.thinking) { console.log(`FAIL  effort "${m.id}" · thinking disagrees between app and server`); bad++ }
  if (Number(ma) !== m.maxApps) { console.log(`FAIL  effort "${m.id}" · maxApps ${m.maxApps} in the app, ${ma} on the server`); bad++ }
}

// --- the task weights are a PRICE, so they cannot drift ---------------------
// A mode's weight decides how much of a paid allowance a run consumes. It is
// declared server-side (api/_lib/entitlements.ts) and described to the customer
// in src/data/effort.ts. Two places, one number: exactly the shape of drift this
// script exists to catch, and this one is worth money.
{
  const ent = read('api/_lib/entitlements.ts')
  const block = /export const MODE_WEIGHT[^=]*=\s*\{([\s\S]*?)\n\}/.exec(ent)
  if (!block) { console.log('FAIL  entitlements · MODE_WEIGHT is not where check-content expects it'); bad++ }
  else {
    const w = Object.fromEntries([...block[1].matchAll(/(\w+):\s*([\d.]+)/g)].map((m) => [m[1], Number(m[2])]))
    for (const m of effort.EFFORT_MODES) {
      if (!(m.id in w)) { console.log(`FAIL  entitlements · effort mode "${m.id}" has no task weight`); bad++ }
    }
    for (const id of Object.keys(w)) {
      if (!effort.EFFORT_MODES.some((m) => m.id === id)) {
        console.log(`FAIL  entitlements · task weight for "${id}", which is not an effort mode`); bad++
      }
    }
    // A dearer mode must never draw LESS from the allowance than a cheaper one.
    const order = effort.EFFORT_MODES.map((m) => w[m.id])
    for (let i = 1; i < order.length; i++) {
      if (order[i] <= order[i - 1]) {
        console.log(`FAIL  entitlements · "${effort.EFFORT_MODES[i].id}" costs no more than the mode below it`); bad++
      }
    }
  }
  // and the customer must be told, in the mode that costs three times as much
  const maxMode = effort.EFFORT_MODES.find((m) => m.id === 'max')
  const says = JSON.stringify(maxMode ?? {})
  if (!/draws|counts|allowance/i.test(says)) {
    console.log('FAIL  effort · Max does not tell the founder it draws more from the allowance'); bad++
  }
}

// --- internal consistency of the data itself -------------------------------
// A team whose plan names an agent that is not on its crew can never run that
// step. This has nothing to do with copy, but it is the same class of drift.
for (const a of arch.ARCHETYPES) {
  for (const s of a.loop) {
    if (!a.agents.includes(s.agent)) {
      console.log(`FAIL  archetypes · "${a.label}" step "${s.label}" is owned by "${s.agent}", who is not on its crew`)
      bad++
    }
    if (!roles.ROLE_BY_ID[s.agent]) {
      console.log(`FAIL  archetypes · "${a.label}" step "${s.label}" names unknown role "${s.agent}"`)
      bad++
    }
  }
  for (const id of a.agents) {
    if (!roles.ROLE_BY_ID[id]) { console.log(`FAIL  archetypes · "${a.label}" crew has unknown role "${id}"`); bad++ }
  }
  if (a.agents[0] !== 'chief') { console.log(`FAIL  archetypes · "${a.label}" does not start with the team lead`); bad++ }
}
// Deux coéquipiers assis dans le même dojo ne doivent pas porter le même
// visage · une équipe d'inconnus identiques aux noms différents est un défaut
// qu'on ne voit jamais dans un diff, seulement sur une capture d'écran.
//
// CETTE GARDE LISAIT LE FICHIER SOURCE À L'EXPRESSION RÉGULIÈRE, parce que la
// table vivait dans un .tsx à côté de JSX qu'on ne peut pas importer ici. Elle
// l'IMPORTE maintenant : la table a déménagé dans data/agentFaces, qui est du
// TypeScript ordinaire. Une garde qui relit du texte se casse au premier
// reformatage et, surtout, elle ne voyait pas la vraie valeur · c'est ainsi
// qu'elle a laissé passer une salle qui distribuait les visages par position.
{
  const face = faces.ROLE_FACE
  for (const r of roles.ROLE_AGENTS) {
    if (!face[r.id]) { console.log(`FAIL  ROLE_FACE · "${r.id}" has no 3D character (it would fall back to somebody else's)`); bad++ }
  }
  for (const a of arch.ARCHETYPES) {
    const used = {}
    for (const id of a.agents) {
      const f = face[id]
      if (f && used[f]) { console.log(`FAIL  ROLE_FACE · "${a.label}" gives "${id}" and "${used[f]}" the same face (${f})`); bad++ }
      used[f] = id
    }
  }
}
// ---- claims that must not come back ---------------------------------------
{
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const f = path.join(dir, e.name)
    return e.isDirectory() ? walk(f) : /\.(ts|tsx|sql)$/.test(e.name) ? [f] : []
  })
  const sweep = ['src', 'api', 'db'].flatMap((d) => walk(path.join(ROOT, d)))
  // The retirement script has to NAME the objects it drops, and one of them is
  // a column called xrpl_address. A `drop column` is the opposite of a claim —
  // it is how the claim stops being true — so this one file is exempt.
  const EXEMPT = new Set([path.join(ROOT, 'db', 'retire-settlement.sql')])
  for (const file of sweep) {
    if (EXEMPT.has(file)) continue
    // the rules themselves quote the phrases · do not flag this script, or a
    // comment explaining why a phrase is banned. `--` is here for the .sql
    // files, whose entire history of a decision lives in their header.
    const text = fs.readFileSync(file, 'utf8')
      .split('\n').filter((l) => !/^\s*(\/\/|\*|--)/.test(l)).join('\n')
    for (const n of NEVER) {
      const m = n.re.exec(text)
      if (m) {
        console.log(`FAIL  ${path.relative(ROOT, file)} · "${m[0]}" — ${n.why}`)
        bad++
      }
    }
  }
}

// every app a role reaches for must exist in the connector registry
const APP_IDS = new Set(conns.CONNECTORS.map((c) => c.id))
for (const r of roles.ROLE_AGENTS) {
  for (const id of r.apps ?? []) {
    if (!APP_IDS.has(id)) { console.log(`FAIL  roleAgents · "${r.name}" lists unknown app "${id}"`); bad++ }
  }
}
// every Academy lesson must be reachable and uniquely addressed
const seen = new Set()
for (const { track, lesson } of academy.ALL_LESSONS) {
  const k = `${track.slug}/${lesson.slug}`
  if (seen.has(k)) { console.log(`FAIL  academy · duplicate lesson url /${k}`); bad++ }
  seen.add(k)
  if (!lesson.summary || lesson.summary.length < 40) { console.log(`FAIL  academy · "${lesson.title}" has no usable meta description`); bad++ }
  if (!lesson.keywords?.length) { console.log(`FAIL  academy · "${lesson.title}" has no keywords`); bad++ }
  if (lesson.quiz.answer < 0 || lesson.quiz.answer >= lesson.quiz.options.length) {
    console.log(`FAIL  academy · "${lesson.title}" quiz answer is out of range`); bad++
  }
  if (lesson.blocks.length < 3) { console.log(`FAIL  academy · "${lesson.title}" is too thin (${lesson.blocks.length} blocks)`); bad++ }
}

console.log(bad
  ? `\ncheck-content · ${bad} problem${bad > 1 ? 's' : ''}`
  : `check-content · ok · crew ${F.crew} (${WORDS[F.crew]}) · ${F.teams} teams · ${F.apps} apps · ${F.lessons} lessons · 4-step run $${runUsd}`)
process.exit(bad ? 1 : 0)
