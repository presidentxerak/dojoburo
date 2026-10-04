// LES 330 PROFILS FICTIFS DE LA COMMUNAUTÉ · demandé : « Créé 330 profils en
// plus des maîtres dans la communauté qui posent des questions sur les cours
// (les maîtres leur répondent) et qui donnent des conseils et des tips pour
// les nouveaux arrivants ».
//
// SANS BADGE NI MENTION · demandé : « c'est une démo n'affiche pas profil
// fictif », puis « n'écris aucun message qui précise cela ». Le kind 'persona'
// les tient hors des classements et des messages privés. Aucun texte n'affirme
// pour autant que tous les comptes seraient de vraies personnes. Aucun témoignage, aucun
// chiffre de résultat : des questions de cours et des conseils de méthode.
//
// FONDÉS SUR LES COURS · chaque question porte sur un vrai cours, et la réponse
// du maître reprend ce que le cours enseigne (sa mission, ses étapes, son
// piège). Rien n'est inventé sur le fond.
//
// Sortie : api/_lib/personaSeed.ts (généré, ne pas modifier à la main).
//   node scripts/gen-personas.mjs
import { build } from 'esbuild'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { tmpdir } from 'node:os'

const OUT = join(tmpdir(), 'dojo-gen-personas'); mkdirSync(OUT, { recursive: true })
async function load(entry, name) {
  await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', outfile: join(OUT, name), logLevel: 'silent' })
  return import(pathToFileURL(join(OUT, name)).href)
}
const P = await load('src/data/packs.ts', 'packs.mjs')
const C = await load('src/pixel/chibi.ts', 'chibi.mjs')
const S = await load('api/_lib/communitySeed.ts', 'seed.mjs')

// 330 profils d'abord, puis 221 de plus · demandé : « Ajoute 221 autres profils ».
// Les 330 premiers gardent leur rôle (220 questions, 110 conseils) ; parmi les
// 221 suivants, 150 posent des questions et 71 donnent des conseils.
export const PERSONA_COUNT = 551
const ASKERS = 220
const isAsker = (k) => (k < 330 ? k < ASKERS : k < 480)

// un tirage reproductible · le même fichier à chaque génération
let seed = 20261004
const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
const pick = (a) => a[Math.floor(rnd() * a.length)]

const FIRST = ['Camille', 'Léa', 'Hugo', 'Inès', 'Nathan', 'Chloé', 'Yanis', 'Manon', 'Lucas', 'Sarah', 'Théo', 'Amina', 'Louis', 'Jade', 'Mehdi', 'Clara', 'Antoine', 'Zoé', 'Karim', 'Emma',
  'Julien', 'Lina', 'Maxime', 'Nora', 'Paul', 'Yasmine', 'Thomas', 'Alice', 'Rayan', 'Louise', 'Samuel', 'Anaïs', 'Adrien', 'Maëlle', 'Sofiane', 'Juliette', 'Bastien', 'Leïla', 'Romain', 'Eva',
  'Florian', 'Salomé', 'Kevin', 'Margaux', 'Ibrahim', 'Pauline', 'Victor', 'Aya', 'Quentin', 'Lou', 'Mathis', 'Elsa', 'Nicolas', 'Fatou', 'Arthur', 'Charlotte', 'Moussa', 'Agathe', 'Dylan', 'Héloïse',
  'Sacha', 'Noé', 'Andréa', 'Alex', 'Morgan', 'Eden', 'Céline', 'Olivier', 'Sophie', 'Marc', 'Isabelle', 'Pierre', 'Nadia', 'Laurent', 'Valérie', 'Franck', 'Sandrine', 'Malik', 'Aurélie', 'Diane']
const INITIALS = 'ABCDEFGHIJKLMNOPRSTVWY'.split('')

const names = new Set()
function nameOf() {
  for (;;) {
    const n = `${pick(FIRST)} ${pick(INITIALS)}.`
    if (!names.has(n)) { names.add(n); return n }
  }
}

const fr = (b) => b.fr
const clip = (s, n) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…`)
const lower = (s) => s.charAt(0).toLowerCase() + s.slice(1)

// LES COURS · une liste de [formation, module, cours], répartie entre formations
const packs = P.PACKS
const lessons = packs.map((p) => P.levelsOf(p).map(({ module, level }, i) => ({ p, module, level, i })))
const queue = []
for (let k = 0; k < 80; k++) {
  for (const l of lessons) if (l[k]) queue.push(l[k])
}

// LES QUESTIONS · trois façons de demander, et la réponse du maître tirée du cours
const ASK = [
  ({ p, level, i }) => ({
    title: `Par où commencer la mission de « ${fr(level.title)} » ?`,
    body: `Je suis la formation « ${fr(p.title)} », cours ${i + 1}. La mission dit : « ${fr(level.act)} »\n\nPar où commencer concrètement ? Je préfère demander avant de me lancer.`,
    answer: `Bonne question. Procédez dans cet ordre :\n${level.steps.map((st, k) => `${k + 1}. ${fr(st)}`).join('\n')}\n\nEt gardez en tête le piège de ce cours : ${lower(fr(level.trap))}`,
  }),
  ({ p, level }) => ({
    title: `Quelle erreur éviter dans « ${fr(level.title)} » ?`,
    body: `Je débute le cours « ${fr(level.title)} » (formation « ${fr(p.title)} »). Quelle est l'erreur la plus fréquente à ce stade, pour ne pas la faire ?`,
    answer: `L'erreur la plus fréquente : ${lower(fr(level.trap))}\n\nCe que le cours vous apprend : « ${fr(level.learn)} » Commencez par la première étape de la mission : ${lower(fr(level.steps[0]))}`,
  }),
  ({ p, level }) => ({
    title: `Que saurai-je faire après « ${fr(level.title)} » ?`,
    body: `Avant de m'y mettre : qu'est-ce que le cours « ${fr(level.title)} » de la formation « ${fr(p.title)} » permet de faire, et combien de temps prévoir ?`,
    answer: `${fr(level.learn)} Comptez environ ${level.minutes} minutes, mission comprise.\n\nLa mission : « ${fr(level.act)} » Et le piège à éviter : ${lower(fr(level.trap))}`,
  }),
]

// LES CONSEILS GÉNÉRAUX · de méthode, pour les nouveaux, sans aucun résultat promis
const TIPS = [
  ['Nouveaux : commencez par le week-end gratuit', 'Le week-end de l\'IA est court et gratuit, et il pose le vocabulaire que toutes les autres formations utilisent : token, prompt, contexte, modèle. Faites-le en premier, les cours suivants vous paraîtront bien plus simples.'],
  ['Faites la mission avant le quiz', 'Chaque cours se termine par un quiz, mais c\'est la mission qui fait apprendre. Cochez vraiment ses objectifs, sur votre propre cas, avant de répondre aux questions. Le quiz devient alors une simple vérification.'],
  ['Un cours par jour vaut mieux que dix le dimanche', 'Les cours sont courts. En faire un par jour, à heure fixe, aide plus que de tout enchaîner en une fois : vous avez le temps d\'appliquer ce que vous venez d\'apprendre.'],
  ['Remplacez toujours les [CROCHETS]', 'Les prompts des exercices contiennent des passages entre crochets. C\'est là que se joue la qualité de la réponse : remplacez-les par votre vrai contexte, votre public, vos contraintes, et non par des généralités.'],
  ['Gardez vos meilleurs prompts quelque part', 'Créez un simple document où vous collez chaque prompt qui a bien marché, avec une ligne sur ce qu\'il fait. Au bout de quelques semaines, c\'est votre boîte à outils personnelle.'],
  ['Relisez tout ce que l\'IA affirme', 'Un modèle peut se tromper avec beaucoup d\'assurance, surtout sur les chiffres, les dates, les noms et les sources. Vérifiez chaque fait important avant de l\'utiliser, en particulier dans un document envoyé à quelqu\'un.'],
  ['Jamais de données confidentielles dans un prompt partagé', 'Avant de publier un prompt ici, retirez les noms, les e-mails, les chiffres internes et tout ce qui permettrait d\'identifier quelqu\'un ou votre entreprise. Remplacez-les par des exemples fictifs.'],
  ['Posez vos questions dans le chat du cours', 'Dans chaque formation, le bouton Chat ouvre la discussion du cours, où le maître IA répond aux questions. C\'est souvent plus rapide que de chercher seul, et les réponses restent visibles pour les suivants.'],
  ['Refaites un cours raté, sans complexe', 'Le badge demande de répondre à toutes les questions et d\'en réussir la majorité. Si ce n\'est pas le cas, relisez le cours et repassez le quiz : c\'est fait pour, et la deuxième lecture est souvent la plus utile.'],
  ['Utilisez le plan des cours en haut à droite', 'Dans une formation, le plan à droite permet de sauter directement à n\'importe quel cours. Pratique pour revenir sur une notion sans tout refaire.'],
  ['Donnez un rôle et un format à l\'IA', 'Un prompt qui précise qui parle (un rôle), à qui (le public) et sous quelle forme (un tableau, une liste, cinq lignes) donne presque toujours une meilleure réponse qu\'une question posée en une phrase.'],
  ['Demandez à l\'IA de vous poser des questions', 'Quand vous ne savez pas quoi préciser, terminez votre prompt par : « Avant de répondre, pose-moi les questions dont tu as besoin. » Vous verrez tout de suite ce qui manquait.'],
  ['Comparez deux versions plutôt qu\'une', 'Demandez deux ou trois variantes d\'une même réponse, puis choisissez et combinez. On juge bien mieux en comparant qu\'en relisant un seul texte.'],
  ['Un exercice à la fois, sur votre vrai travail', 'Les exercices sont plus utiles appliqués à une tâche réelle de votre semaine qu\'à un exemple inventé. Choisissez un e-mail, un compte rendu ou un tableau que vous devez vraiment produire.'],
  ['Les vidéos en fin de cours complètent, elles ne remplacent pas', 'Sous chaque cours, des vidéos YouTube approfondissent le sujet. Regardez-les après la mission : vous saurez quoi y chercher, et vous les retiendrez mieux.'],
  ['Présentez-vous dans le fil Présentations', 'Quelques lignes suffisent : votre métier, la formation que vous suivez, une tâche que vous aimeriez confier à l\'IA. Cela aide les autres à vous répondre au bon niveau.'],
  ['Lisez les Nouveautés du lundi', 'Chaque lundi, la page Nouveautés résume les annonces IA de la semaine avec le lien vers la source. Dix minutes de lecture suffisent pour rester à jour sans se noyer.'],
  ['Choisissez le modèle selon la tâche', 'Un petit modèle rapide suffit pour reformuler ou trier ; gardez les modèles les plus puissants pour le raisonnement long ou le code. C\'est plus rapide, et souvent moins cher.'],
  ['Donnez des exemples de ce que vous voulez', 'Un ou deux exemples du résultat attendu valent mieux qu\'une longue description. L\'IA reproduit très bien un style ou une structure qu\'on lui montre.'],
  ['Découpez les grandes tâches', 'Plutôt qu\'un seul prompt énorme, avancez par étapes : le plan, puis chaque partie, puis la relecture. Vous gardez la main à chaque étape et vous repérez vite ce qui dérape.'],
  ['Notez ce que vous avez appris après chaque cours', 'Une phrase à la fin de chaque cours, dans vos notes : ce que vous ferez différemment demain. C\'est la meilleure façon de transformer un cours en habitude.'],
  ['Le piège de chaque cours est la partie la plus utile', 'Chaque cours nomme l\'erreur du débutant. Lisez-la deux fois : savoir ce qu\'il ne faut pas faire évite souvent plus de problèmes que de connaître la bonne méthode.'],
  ['Partagez un avant et après dans le fil Prompts', 'Le plus instructif pour tout le monde : votre premier prompt, la version améliorée, et ce que la différence a changé. On apprend énormément des essais des autres.'],
  ['Le profil garde votre progression', 'Sans compte, votre progression reste dans ce navigateur. Créez un compte gratuit si vous changez souvent d\'appareil, pour la retrouver partout.'],
  ['Créez votre personnage dès le début', 'Dans le Profil, créez votre personnage : il porte votre grade et vous accompagne dans les formations. Un petit détail, mais il rend la progression plus concrète.'],
  ['Ne cherchez pas le prompt parfait', 'Un prompt correct suivi de deux ou trois demandes de correction donne souvent un meilleur résultat qu\'une heure passée à écrire le prompt idéal. Itérez.'],
  ['Demandez à l\'IA de critiquer son propre travail', 'Après une première réponse, demandez : « Relis ta réponse comme un expert exigeant et liste ses trois points faibles. » Puis faites corriger. Le résultat progresse nettement.'],
  ['Précisez ce que vous ne voulez pas', 'Dire ce qu\'il faut éviter (le jargon, les listes à puces, un ton trop commercial) est aussi efficace que dire ce qu\'il faut faire. Une ligne de contraintes change beaucoup de choses.'],
  ['Gardez le même fil pour un même projet', 'Dans votre outil d\'IA, gardez une conversation par projet : le contexte s\'accumule et vous n\'avez pas à tout réexpliquer. Ouvrez-en une nouvelle quand vous changez de sujet.'],
  ['Les formations métier pour gagner du temps', 'Si vous avez déjà les bases, une formation métier va droit aux usages de votre profession. Regardez la liste dans l\'onglet Formations et commencez par celle qui correspond à votre semaine type.'],
  ['Testez un outil sur une vraie tâche avant de l\'adopter', 'Avant d\'adopter un nouvel outil d\'IA, essayez-le une heure sur une tâche réelle, avec vos critères : qualité, temps gagné, confidentialité. La démonstration ne suffit pas.'],
  ['Lisez les conditions d\'utilisation des outils', 'Avant de confier des documents de travail à un outil, vérifiez ce qu\'il fait de vos données et si une option permet d\'exclure vos contenus de l\'entraînement. C\'est écrit dans ses conditions.'],
  ['Faites relire par un humain ce qui compte', 'Pour un contrat, un message sensible ou un chiffre important, l\'IA aide à préparer, mais une personne compétente doit relire. C\'est aussi ce que répètent les maîtres dans les cours.'],
  ['Les badges ne sont pas une course', 'Prenez le temps de comprendre chaque cours plutôt que d\'enchaîner les badges. Ce qui compte, c\'est ce que vous saurez refaire seul la semaine suivante.'],
  ['Utilisez l\'affichage qui vous repose les yeux', 'Dans Profil, Paramètres, Affichage, vous pouvez choisir l\'affichage clair ou sombre. Utile si vous apprenez le soir.'],
  ['Coupez la musique si elle vous distrait', 'La musique zen des formations se coupe avec le bouton de la note, en haut, et les bruitages se règlent dans Profil, Paramètres.'],
  ['Revenez sur un cours une semaine plus tard', 'Relire un cours une semaine après l\'avoir fini, puis refaire sa mission sur un autre cas, ancre bien mieux les notions qu\'une seule lecture.'],
  ['Écrivez vos prompts comme un brief', 'Imaginez que vous confiez la tâche à un collègue qui ne connaît rien au dossier : le contexte, l\'objectif, les contraintes, le format. C\'est exactement ce qu\'attend un modèle.'],
  ['Demandez les sources, puis vérifiez-les', 'Quand l\'IA cite une source, ouvrez-la. Une référence peut exister mais ne pas dire ce que la réponse lui fait dire, ou ne pas exister du tout.'],
  ['Restez bienveillant dans les réponses', 'Tout le monde a débuté. Quand vous répondez à quelqu\'un ici, partez de ce qu\'il a essayé et proposez une étape concrète : c\'est ce qui rend cette communauté utile.'],
]

// LES CONSEILS TIRÉS DES COURS · un conseil de méthode sur un vrai cours
const COURSE_TIP = [
  ({ p, level, i }) => ({
    title: `Conseil pour « ${fr(p.title)} » : ne sautez pas le cours ${i + 1}`,
    body: `Pour celles et ceux qui commencent « ${fr(p.title)} » : le cours ${i + 1}, « ${fr(level.title)} », mérite d\'être fait sérieusement. Sa mission : « ${fr(level.act)} »\n\nEt le piège à connaître : ${lower(fr(level.trap))}`,
  }),
  ({ p, level }) => ({
    title: `Un piège à connaître dans « ${fr(level.title)} »`,
    body: `Une remarque pour les nouveaux de la formation « ${fr(p.title)} ». Le cours « ${fr(level.title)} » nomme une erreur fréquente : ${lower(fr(level.trap))}\n\nLe garder en tête avant de faire la mission évite de devoir tout recommencer.`,
  }),
  ({ p, level }) => ({
    title: `« ${fr(level.title)} » : faites la mission étape par étape`,
    body: `Dans « ${fr(p.title)} », le cours « ${fr(level.title)} » se fait très bien en suivant ses étapes dans l\'ordre :\n${level.steps.map((st, k) => `${k + 1}. ${fr(st)}`).join('\n')}\n\nPrenez votre propre cas plutôt qu\'un exemple inventé, c\'est bien plus parlant.`,
  }),
]

// LES PRÉSENTATIONS · courtes et neutres, sans mention ajoutée (demandé : « n'écris
// aucun message qui précise cela [...] ceci n'est pas nécessaire »)
const BIOS = [
  (c) => `Suit la formation « ${c} ».`,
  (c) => `En formation : « ${c} », un cours à la fois.`,
  (c) => `J'apprends l'IA avec la formation « ${c} ».`,
  (c) => `Formation en cours : « ${c} ». Toujours partant pour échanger des prompts.`,
  (c) => `Je découvre l'IA avec « ${c} ».`,
]

const members = []
const posts = []
const comments = []
const masters = new Map()
const id = (prefix, n) => `${prefix}-0000-4000-8000-${String(n).padStart(12, '0')}`

for (let k = 0; k < PERSONA_COUNT; k++) {
  const asker = isAsker(k)
  const l = queue[k % queue.length]
  const name = nameOf()
  const did = `persona:${String(k + 1).padStart(3, '0')}`
  const course = fr(l.p.title)
  members.push({
    did, name,
    bio: clip(BIOS[k % BIOS.length](course), 280),
    avatar: C.randomChibi(1000 + k),
  })
  // LES HEURES · les publications s'étalent sur environ deux mois, la plus récente d'abord
  const hoursAgo = Math.round((k + 1) * 4.3 + rnd() * 3)
  if (asker) {
    const q = ASK[k % ASK.length](l)
    const postId = id('7e0a0002', k + 1)
    posts.push({ id: postId, did, category: 'questions', title: clip(q.title, 120), body: clip(q.body, 4900), hoursAgo, comments: 1 })
    const md = S.masterDid(l.p.id)
    masters.set(md, S.masterName(l.p.id))
    comments.push({ id: id('7e0a0003', k + 1), postId, did: md, body: clip(q.answer, 1990), hoursAgo: Math.max(0, hoursAgo - 1 - (k % 4)) })
  } else {
    const t = k < 330 ? k - ASKERS : 110 + (k - 480)
    const postId = id('7e0a0002', k + 1)
    if (t < TIPS.length) {
      const [title, body] = TIPS[t]
      posts.push({ id: postId, did, category: t % 5 === 3 ? 'prompts' : 'general', title, body, hoursAgo, comments: 0 })
    } else {
      const tip = COURSE_TIP[t % COURSE_TIP.length](queue[(ASKERS + t * 3) % queue.length])
      posts.push({ id: postId, did, category: 'general', title: clip(tip.title, 120), body: clip(tip.body, 4900), hoursAgo, comments: 0 })
    }
  }
}

const out = `// GÉNÉRÉ PAR scripts/gen-personas.mjs · ne pas modifier à la main.
// Les ${PERSONA_COUNT} profils de démonstration de la communauté,
// leurs questions de cours, les réponses des maîtres et leurs conseils.
export interface PersonaMember { did: string; name: string; bio: string; avatar: unknown }
export interface PersonaPost { id: string; did: string; category: string; title: string; body: string; hoursAgo: number; comments: number }
export interface PersonaComment { id: string; postId: string; did: string; body: string; hoursAgo: number }

export const PERSONA_COUNT = ${PERSONA_COUNT}
export const PERSONA_MASTERS: { did: string; name: string }[] = ${JSON.stringify([...masters].map(([did, name]) => ({ did, name })))}
export const PERSONA_MEMBERS: PersonaMember[] = ${JSON.stringify(members)}
export const PERSONA_POSTS: PersonaPost[] = ${JSON.stringify(posts)}
export const PERSONA_COMMENTS: PersonaComment[] = ${JSON.stringify(comments)}
`
writeFileSync('api/_lib/personaSeed.ts', out)
console.log(`gen-personas · ${members.length} profils, ${posts.length} publications (${posts.filter((p) => p.category === 'questions').length} questions, ${posts.filter((p) => p.category !== 'questions').length} conseils), ${comments.length} réponses de maîtres, ${masters.size} maîtres`)
