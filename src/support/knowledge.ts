// DojoBuro support knowledge base. This is the Tier-0 layer: deterministic,
// on-brand answers with link buttons that cost nothing and work with no backend.
// The support bot answers from here first and only escalates to the LLM cascade
// (via /api/chat) for questions it can't match.
//
// ---------------------------------------------------------------------------
// CE QUE CE ROBOT DÉCRIT, AUJOURD'HUI
//
// La barre du bas a quatre boutons : Dojoburo (le jeu, /dojoburo), Training
// (les formations, l'ancien onglet « Dojos », sur /), Clan et Profil. Les
// sujets de l'ancien produit (le bureau en trois dimensions, les ateliers, la
// société, les apparences, les profils métier, l'exécutant dans le nuage, la
// connexion par compte) ont été retirés : ils répondaient avec assurance sur
// des écrans que plus personne ne peut ouvrir depuis la navigation.
//
// TROIS IDENTIFIANTS ONT CHANGÉ DE SUJET, ET C'EST VOULU. 'studios', 'teams'
// et 'budget' sont nommés en dur dans components/SupportBot (les pastilles
// d'accueil). Les supprimer aurait laissé trois pastilles qui affichent un
// identifiant brut et ne répondent rien. Ils portent donc maintenant le jeu
// (on y dirige un studio d'IA), les spécialistes (l'équipe du studio) et les
// tokens (le budget du jour). Le jour où ces pastilles changent, les
// identifiants peuvent suivre.
//
// CE QUE CE ROBOT NE PROMET PAS · ni remboursement, ni facture, ni compte, ni
// accès sur plusieurs appareils. Rien de tout ça n'existe dans le code, et une
// promesse de robot de support est une promesse du produit.
import { CONNECTORS, type Connector } from '../data/connectors'
import type { Lang } from '../i18n/lang'
import { say } from '../data/bilingual'
// Counts and rosters come from the data the app runs on · see data/facts.
import { ACADEMY_LESSONS, ACADEMY_TRACKS, ACADEMY_HOURS } from '../data/facts'
// Le centre de formation · ses chiffres viennent des données, jamais d'une
// phrase écrite à la main dans une réponse de robot.
import { USE_CASE_COUNT } from '../data/agentUseCases'
import { COURSE_COUNT } from '../data/positioning'
import { FRAMEWORK_COUNT } from '../data/frameworks'
import { GRADES } from '../dojo/grades'
import { PACKS, FREE_PACK, PATH_PACK, modulesOf, levelsOf, minutesOf, packPath } from '../data/packs'
import { TRADES } from '../data/trades'
// LES PRIX · quatre réponses de cette base les recopiaient à la main, ce qui en
// faisait une cinquième grille de prix capable de contredire les quatre autres.
// Elle l'a fait : elle vendait encore Founder à 29 $ et 2 000 tâches longtemps
// après que le produit ait cessé d'exécuter quoi que ce soit.
import { PATH_EUR, TRADE_EUR, BUNDLE_EUR, priceTag } from '../data/plans'

const GRADE_COUNT = GRADES.length

// LES FORMATIONS EN CHIFFRES · lus dans data/packs, jamais recopiés.
const PACK_COUNT = PACKS.length
const FREE_LESSONS = levelsOf(FREE_PACK).length
const FREE_MINUTES = minutesOf(FREE_PACK)
const PATH_CITIES = modulesOf(PATH_PACK).length
const PATH_DOJOS = levelsOf(PATH_PACK).length
const TRADE_PACKS = PACKS.filter((p) => p.door === 'trade')
const TRADE_COUNT = TRADE_PACKS.length
const TRADE_CITIES = TRADE_PACKS[0] ? modulesOf(TRADE_PACKS[0]).length : 0
const tradeNames = (lang: Lang) => TRADES.map((t) => say(t.label, lang)).join(', ')
const FREE_HREF = packPath(FREE_PACK.id)

export interface KBLink {
  label: string
  href: string
  external?: boolean
}

/** Le même sujet en français.
 *
 *  Les LIENS n'y sont que par leur LIBELLÉ, dans le même ordre : une adresse
 *  ne se traduit pas, et la recopier dans la version française aurait donné
 *  deux listes d'adresses capables de diverger. Le libellé français se pose
 *  sur le lien anglais, position par position. */
export interface KBTopicFr {
  chip: string
  answer: string
  links?: string[]
}

export interface KBTopic {
  id: string
  chip: string
  answer: string
  links?: KBLink[]
  /** le même sujet en français · voir topicIn */
  fr?: KBTopicFr
  follow?: string[]
  keywords: string[]
  /** the animated walkthrough that shows this, if there is one · Dojobot
   *  offers it as a "Watch it" button and plays it full screen in place. */
  walk?: 'overview' | 'company' | 'teams' | 'apps'
}

export const KB: KBTopic[] = [
  {
    // LE JEU · premier bouton de la barre du bas. L'identifiant reste
    // 'studios' parce que SupportBot le nomme dans ses pastilles d'accueil, et
    // c'est bien un studio qu'on y dirige · voir l'en-tête du fichier.
    id: 'studios',
    chip: 'The Dojoburo game',
    answer:
      `Dojoburo is the game, the first button of the bottom bar. You run an AI studio inside a dojo, with ${USE_CASE_COUNT} specialist agents and the master watching from the back. Clients walk in one after another and give you a brief. ` +
      'To play, open a waiting brief, pick one to four free specialists, and give each of them tokens. While you choose, a quality preview shows how well the job is likely to go, so you can change your pick before you launch. The tokens leave your budget the moment you launch, and that budget is limited for the day. ' +
      'Each day runs from 9:00 to 18:00 on the clock, and you can pause. The day has a revenue objective: meet it and you move on to the next day, miss it and you replay the same day, with no game over. A client left waiting too long walks out unhappy and your reputation drops. Tokens you did not spend pay you a frugality bonus at the end of the day. From day 2, one event per day shakes things up: a rush of clients, a token price spike, a viral day, a specialist out, or the master\'s advice. Between two days, the shop turns your revenue into upgrades, like a bigger token budget or a level for one of your specialists. Your progress is saved in this browser. ' +
      'It teaches what the training teaches: put the right specialist on the job, and give it the tokens the job needs, not more.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'See the trainings', href: '/' },
    ],
    follow: ['teams', 'budget', 'training'],
    keywords: ['dojoburo', 'game', 'jeu', 'jouer', 'play', 'simulation', 'startup', 'studio', 'brief', 'briefs', 'client', 'objective', 'objectif', 'revenue', "chiffre d'affaires", 'reputation', 'réputation', 'event', 'événement', 'shop', 'boutique', 'upgrade', 'amélioration', 'journée', 'game over', 'sensei'],
    fr: {
      chip: 'Le jeu Dojoburo',
      answer:
        `Dojoburo, c'est le jeu, le premier bouton de la barre du bas. Tu diriges un studio d'IA dans un dojo, avec ${USE_CASE_COUNT} agents spécialisés, et le maître qui te regarde depuis le fond de la salle. Des clients entrent l'un après l'autre et te confient un brief. Pour jouer, ouvre un brief en attente, choisis un à quatre spécialistes libres, et donne des tokens à chacun. Pendant que tu choisis, un aperçu de la qualité te montre comment le travail risque de tourner, pour que tu puisses changer d'avis avant de lancer. Les tokens quittent ton budget au moment où tu lances, et ce budget est limité pour la journée. Chaque journée va de 9 h à 18 h sur l'horloge, et tu peux mettre en pause. La journée a un objectif de chiffre d'affaires : atteins-le et tu passes au jour suivant, rate-le et tu rejoues la même journée, sans game over. Un client qui attend trop longtemps repart mécontent, et ta réputation baisse. Les tokens que tu n'as pas dépensés te rapportent un bonus de sobriété en fin de journée. À partir du jour 2, un événement par jour change la donne : une affluence de clients, une flambée du prix des tokens, un jour viral, un spécialiste absent, ou le conseil du maître. Entre deux journées, la boutique transforme ton chiffre d'affaires en améliorations, comme un budget de tokens plus gros ou un niveau de plus pour un de tes spécialistes. Ta progression est enregistrée dans ce navigateur. Le jeu t'apprend la même chose que la formation : mettre le bon spécialiste sur le bon travail, et lui donner les tokens dont le travail a besoin, pas plus.`,
      links: [
        'Jouer à Dojoburo',
        'Voir les formations',
      ],
    },
  },
  {
    // LES SPÉCIALISTES DU JEU · l'identifiant 'teams' est gardé pour les
    // pastilles de SupportBot · voir l'en-tête du fichier.
    id: 'teams',
    chip: 'Pick the right specialists',
    answer:
      `Your studio has ${USE_CASE_COUNT} specialists, one per shape of problem taught in the course: a researcher, a writer, a responder, a coder, an analyst, a sorter, an extractor, a watcher, a planner, a tool builder, a growth experimenter and a conductor. Each brief says which skills it needs, and at what level. ` +
      'Put the right specialist on each need and the quality climbs. Put the wrong one and the need is simply not covered, however many tokens you give. The conductor can stand in for a missing skill, but only poorly: its real strength is coordinating two or more colleagues, which earns a bonus. ' +
      'Specialists gain experience with every job and level up, which makes them better and quicker. They also get tired, and a very tired specialist does weaker work, so let them rest. ' +
      'The quality preview updates while you choose: try a pick, read the preview, change it, then launch. After each job, a short tip explains why those specialists were the right ones. It is the course\'s first lesson in game form: every agent fails in its own way, so you pick the one built for the problem in front of you.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'Build an agent', href: '/build' },
    ],
    follow: ['studios', 'budget', 'build'],
    keywords: ['specialist', 'specialists', 'spécialiste', 'spécialistes', 'which specialist', 'quel spécialiste', 'orchestrator', 'orchestrateur', 'conductor', "chef d'orchestre", 'fatigue', 'tired', 'fatigué', 'level up', 'quality', 'qualité', 'preview', 'aperçu', 'employee', 'employé', 'my team', 'mon équipe', 'right agent', 'bon agent'],
    fr: {
      chip: 'Choisir les bons spécialistes',
      answer:
        `Ton studio compte ${USE_CASE_COUNT} spécialistes, un par forme de problème enseignée dans le cours : le chercheur, le rédacteur, le répondant, le codeur, l'analyste, le trieur, l'extracteur, la vigie, le planificateur, l'outilleur, l'expérimentateur et le chef d'orchestre. Chaque brief dit de quelles compétences il a besoin, et à quel niveau. Mets le bon spécialiste sur chaque besoin et la qualité grimpe. Mets le mauvais et le besoin n'est tout simplement pas couvert, peu importe les tokens que tu donnes. Le chef d'orchestre peut remplacer une compétence absente, mais mal : sa vraie force, c'est de coordonner deux collègues ou plus, ce qui rapporte un bonus. Les spécialistes gagnent de l'expérience à chaque travail et montent de niveau, ce qui les rend meilleurs et plus rapides. Ils se fatiguent aussi, et un spécialiste très fatigué fait un travail moins bon, alors laisse-les souffler. L'aperçu de la qualité se met à jour pendant que tu choisis : essaie une équipe, lis l'aperçu, change, puis lance. Après chaque travail, une courte astuce t'explique pourquoi ces spécialistes étaient les bons. C'est la première leçon du cours, en version jeu : chaque agent échoue à sa manière, alors tu prends celui qui est fait pour le problème que tu as devant toi.`,
      links: [
        'Jouer à Dojoburo',
        'Construire un agent',
      ],
    },
  },
  {
    // LES TOKENS · l'identifiant 'budget' est gardé pour les pastilles de
    // SupportBot. Il remplace l'ancien sujet « tokens », qui décrivait un
    // sélecteur de modes dans l'en-tête d'un écran qui n'est plus dans la
    // navigation.
    id: 'budget',
    chip: 'Tokens and budget',
    answer:
      'A token is the unit a model reads, writes and bills: a small piece of a word. Every prompt you send and every answer you get costs tokens, which is why tokens are what an AI job really costs. ' +
      'In Dojoburo, tokens are your daily budget. Each brief needs a certain amount of tokens to be done well, and you hand them out to your specialists before you launch. Give too few and the quality drops fast. Give far more than the job needs and it barely gets better. Tokens handed to a specialist the brief does not need are mostly wasted. Whatever is left at the end of the day comes back as a frugality bonus, in euros. On a price spike day, every token you hand out costs more from your budget. In the shop, a bigger budget, a prompt library and a cache all stretch your tokens further. ' +
      'The training teaches the same habit with real models, and the /frugality page shows where your tokens actually go in a conversation.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'Where your tokens go', href: '/frugality' },
    ],
    follow: ['studios', 'teams', 'lessons'],
    keywords: ['token', 'tokens', 'jeton', 'jetons', 'budget', 'frugality', 'frugalité', 'sobriété', 'frugal', 'bonus', 'consumption', 'consommation', 'price spike', 'flambée', 'waste', 'gaspill', 'cache', 'prompt library', 'bibliothèque de prompts'],
    fr: {
      chip: 'Tokens et budget',
      answer:
        `Un token, c'est l'unité qu'un modèle lit, écrit et facture : un petit morceau de mot. Chaque prompt que tu envoies et chaque réponse que tu reçois coûtent des tokens, et c'est pour ça que les tokens sont le vrai coût d'un travail d'IA. Dans Dojoburo, les tokens sont ton budget du jour. Chaque brief a besoin d'une certaine quantité de tokens pour être bien fait, et tu les distribues à tes spécialistes avant de lancer. Donnes-en trop peu et la qualité chute vite. Donnes-en bien plus que le travail n'en demande et elle ne s'améliore presque pas. Les tokens donnés à un spécialiste dont le brief n'a pas besoin sont en grande partie gaspillés. Ce qui te reste en fin de journée te revient en bonus de sobriété, en euros. Un jour de flambée des prix, chaque token que tu donnes coûte plus cher à ton budget. Dans la boutique, un budget plus gros, une bibliothèque de prompts et un cache font tous durer tes tokens plus longtemps. La formation t'apprend la même habitude avec de vrais modèles, et la page /frugality te montre où passent vraiment tes tokens dans une conversation.`,
      links: [
        'Jouer à Dojoburo',
        'Où passent tes tokens',
      ],
    },
  },
  {
    id: 'start',
    chip: 'Getting started',
    answer:
      'Everything starts from the bottom bar, which has four buttons. DOJOBURO is the game: you run an AI studio, clients bring briefs, and you spend a limited token budget on the right specialists. TRAINING is the courses (it used to be called Dojos): the free AI weekend, the full training and the trade trainings. CLAN is where disciples will show what they built with AI. There is no feed yet, and the page says so instead of faking one; for now it shows your level, your XP and your badges. PROFILE is your progress: level, badges, what you unlocked, the valley map, and where your data lives. ' +
      'Two good ways in: play a first day of Dojoburo, or open Training and start the free AI weekend. No account is needed, everything is kept in this browser. The XP at the top of the screen comes from the dojos you actually finished. The app has a single dark violet theme, so there is no light mode switch to look for.',
    links: [
      { label: 'Play Dojoburo', href: '/dojoburo' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['studios', 'training', 'signin'],
    keywords: ['start', 'begin', 'get started', 'commencer', 'démarrer', 'débuter', 'how does it work', 'comment ça marche', 'navigation', 'menu', 'bottom bar', 'barre du bas', 'onglet', 'tabs', 'dojos tab', 'onglet dojos', 'clan', 'where is', 'où est', 'dark mode', 'mode sombre', 'light mode', 'mode clair', 'theme', 'thème'],
    fr: {
      chip: 'Pour commencer',
      answer:
        `Tout part de la barre du bas, qui a quatre boutons. DOJOBURO, c'est le jeu : tu diriges un studio d'IA, des clients t'apportent des briefs, et tu dépenses un budget de tokens limité sur les bons spécialistes. TRAINING, ce sont les formations (l'onglet s'appelait Dojos avant) : le week-end de l'IA gratuit, la formation complète et les formations métier. CLAN, c'est là où les disciples montreront ce qu'ils ont construit avec l'IA. Il n'y a pas encore de fil, et la page le dit plutôt que d'en inventer un ; pour l'instant, elle montre ton niveau, ton XP et tes badges. PROFIL, c'est ta progression : ton niveau, tes badges, ce que tu as débloqué, la carte de la vallée, et l'endroit où vivent tes données. Deux bonnes façons d'entrer : joue une première journée de Dojoburo, ou ouvre Training et commence le week-end de l'IA gratuit. Aucun compte n'est nécessaire, tout est gardé dans ce navigateur. L'XP en haut de l'écran vient des dojos que tu as vraiment terminés. L'application a un seul thème, sombre et violet, donc il n'y a pas de bouton de mode clair à chercher.`,
      links: [
        'Jouer à Dojoburo',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // LES FORMATIONS · l'onglet Training, qui s'appelait Dojos. Les nombres
    // viennent de data/packs : une formation qui grossit n'a pas à être
    // recopiée ici.
    id: 'training',
    chip: 'The trainings',
    answer:
      `Training is the second button of the bottom bar (it used to be called Dojos), and it holds ${PACK_COUNT} trainings. The AI weekend is free: ${FREE_LESSONS} short lessons, about ${FREE_MINUTES} minutes in total, and it asks for your email and nothing else. The full training is ${PATH_CITIES} dojo cities and ${PATH_DOJOS} dojos: prompting, the models, the assistants, agents, design and cost. Then ${TRADE_COUNT} trade trainings, ${TRADE_CITIES} more cities each, written for one job: ${tradeNames('en')}. ` +
      'You cross the cities at your own pace and in the order you like, and a master waits for you in each one. Every dojo is a short lesson that ends with a badge and some XP, and you can replay any dojo whenever you want. The first dojo of every city opens once you have given your email, so you can see how it teaches before paying.',
    links: [
      { label: 'Open Training', href: '/' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['lessons', 'pricing', 'profile'],
    keywords: ['training', 'trainings', 'formation', 'formations', 'course', 'courses', 'cours', 'parcours', 'dojo', 'dojos', 'city', 'cities', 'cité', 'cités', 'weekend', 'week-end', 'trade', 'métier', 'métiers', 'master', 'maître', 'curriculum', 'programme', 'un dojo', 'a dojo', 'dojo city', 'cité dojo', 'what can i learn', "qu'est-ce que j'apprends"],
    fr: {
      chip: 'Les formations',
      answer:
        `Training, c'est le deuxième bouton de la barre du bas (il s'appelait Dojos avant), et il réunit ${PACK_COUNT} formations. Le week-end de l'IA est gratuit : ${FREE_LESSONS} leçons courtes, environ ${FREE_MINUTES} minutes en tout, et on te demande ton adresse e-mail, rien d'autre. La formation complète, c'est ${PATH_CITIES} cités dojo et ${PATH_DOJOS} dojos : le prompt, les modèles, les assistants, les agents, le design et le coût. Puis ${TRADE_COUNT} formations métier, chacune avec ${TRADE_CITIES} cités de plus, écrites pour un métier : ${tradeNames('fr')}. Tu traverses les cités à ton rythme et dans l'ordre que tu veux, et un maître t'attend dans chacune. Chaque dojo est une leçon courte qui se termine par un badge et de l'XP, et tu peux refaire n'importe quel dojo quand tu veux. Le premier dojo de chaque cité s'ouvre dès que tu as donné ton adresse, pour que tu voies comment ça enseigne avant de payer.`,
      links: [
        'Ouvrir Training',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // LE FORMAT D'UNE LEÇON · voir data/enrich/types. Un dojo tenait en six
    // lignes ; il porte maintenant le mécanisme, un avant / après, un exercice
    // et trois questions.
    id: 'lessons',
    chip: 'How a lesson works',
    answer:
      'Every dojo is a short lesson of a few minutes, taught by its master, and it is built to make you do things, not just read. It opens with what you will learn and your mission. Then comes WHY IT WORKS: the mechanism in two or three short paragraphs, so you understand it instead of memorising a recipe. THE MOVES: a few concrete steps. BEFORE AND AFTER: a real prompt that went wrong, the same prompt fixed, and what changed. THE TRAP to dodge. YOUR TURN: an exercise to do in your own AI tool, with what you will have at the end, a prompt to copy (replace the parts in [BRACKETS] with your own case), a checklist to check your result yourself, and a bonus to go further. ' +
      'Then three questions to check you really got it. When you are done, you grab the dojo\'s badge and its XP, and you can come back to any dojo whenever you want.',
    links: [
      { label: 'Try a free lesson', href: FREE_HREF },
      { label: 'Open Training', href: '/' },
    ],
    follow: ['training', 'pricing', 'profile'],
    keywords: ['lesson', 'lessons', 'leçon', 'leçons', 'exercise', 'exercice', 'exercices', 'why it works', 'pourquoi ça marche', 'before and after', 'avant / après', 'avant/après', 'copy the prompt', 'copier le prompt', 'prompt to copy', 'prompt à copier', 'checklist', 'quiz', 'three questions', 'trois questions', 'lesson format', 'format'],
    fr: {
      chip: 'Comment marche une leçon',
      answer:
        `Chaque dojo est une leçon courte de quelques minutes, menée par son maître, et elle est faite pour te faire agir, pas seulement lire. Elle s'ouvre sur ce que tu vas apprendre et sur ta mission. Vient ensuite POURQUOI ÇA MARCHE : le mécanisme en deux ou trois paragraphes courts, pour que tu comprennes au lieu d'apprendre une recette par cœur. LES GESTES : quelques étapes concrètes. AVANT / APRÈS : un vrai prompt qui a raté, le même prompt réparé, et ce qui a changé. LE PIÈGE à éviter. À TOI DE JOUER : un exercice à faire dans ton propre outil d'IA, avec ce que tu vas obtenir, un prompt à copier (remplace les parties entre [CROCHETS] par ton cas), une checklist pour vérifier toi-même ton résultat, et un bonus pour aller plus loin. Puis trois questions pour vérifier que c'est vraiment acquis. Quand tu as fini, tu prends le badge du dojo et son XP, et tu peux revenir sur n'importe quel dojo quand tu veux.`,
      links: [
        'Essayer une leçon gratuite',
        'Ouvrir Training',
      ],
    },
  },
  {
    // LES PRIX · lus dans data/plans. Le week-end remplace l'ancienne
    // « semaine de découverte » : même contenu, nouveau nom · voir data/packs.
    id: 'pricing',
    chip: 'Pricing',
    answer:
      `No subscription: you pay once, and nothing renews. The AI weekend is free: ${FREE_LESSONS} short lessons, and it asks for your email, no card. The full training is ${priceTag(PATH_EUR)}, paid once: every one of the ${PATH_CITIES} dojo cities, in the order you like, with the files and the updates. A trade training is ${priceTag(TRADE_EUR)} per trade, paid once too: ${TRADE_CITIES} more cities written for one job. It is best taken after the full training, because it does not explain the basics again. Both together come to ${priceTag(BUNDLE_EUR)}. ` +
      'Not sure yet? Once you have given your email, the first dojo of every city is free, so you can judge before paying. Everything is on the /tarifs page, and the training opens in this browser as soon as the payment is confirmed.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['buy', 'training', 'signin'],
    keywords: ['pricing', 'price', 'prices', 'tarif', 'tarifs', 'prix', 'cost', 'coût', 'how much', 'combien', 'expensive', 'cher', 'free', 'gratuit', 'subscription', 'abonnement', 'monthly', 'mensuel', 'per month', 'par mois', 'plans', 'formule', 'paid once', 'une fois', 'bundle', 'how much is', 'how much does', 'combien coûte', 'le prix', 'les prix', 'quel prix', 'formation complète', 'full training'],
    fr: {
      chip: 'Les tarifs',
      answer:
        `Pas d'abonnement : tu paies une fois, et rien ne se renouvelle. Le week-end de l'IA est gratuit : ${FREE_LESSONS} leçons courtes, et on te demande ton adresse e-mail, pas de carte bancaire. La formation complète coûte ${priceTag(PATH_EUR)}, payée une fois : chacune des ${PATH_CITIES} cités dojo, dans l'ordre que tu veux, avec les fichiers et les mises à jour. Une formation métier coûte ${priceTag(TRADE_EUR)} par métier, payée une fois elle aussi : ${TRADE_CITIES} cités de plus, écrites pour un métier. Elle se prend plutôt après la formation complète, parce qu'elle ne réexplique pas les bases. Les deux ensemble font ${priceTag(BUNDLE_EUR)}. Tu hésites encore ? Dès que tu as donné ton adresse, le premier dojo de chaque cité est gratuit, pour que tu juges avant de payer. Tout est sur la page /tarifs, et la formation s'ouvre dans ce navigateur dès que le paiement est confirmé.`,
      links: [
        'Voir les tarifs',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    // L'ACHAT · le chemin réel, voir game/Tarifs : /tarifs, le paiement
    // Stripe, puis /merci qui demande au serveur si c'est payé avant d'ouvrir
    // quoi que ce soit.
    id: 'buy',
    chip: 'How buying works',
    answer:
      'Buying happens on the /tarifs page, without leaving the app. Choose the full training, or pick your trade and choose a trade training, then press Buy: you go to a Stripe payment page and pay once. When the payment is done you come back to a thank-you page, which asks our server whether the payment really went through. Only then does the training open, in this browser, with a button that takes you to its first dojo. If you cancel, you come back to the prices and nothing was charged. ' +
      'There is no account: your access and your progress are kept in this browser, so come back with the same one. If the thank-you page says it found no paid order and you just paid, open the link from your payment confirmation again. If it could not check, try again in a minute: nothing is lost.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Your progress', href: '/profil' },
    ],
    follow: ['pricing', 'signin', 'troubleshoot'],
    keywords: ['buy', 'buying', 'acheter', 'achat', 'purchase', 'payment', 'paiement', 'pay', 'payer', 'stripe', 'card', 'carte bancaire', 'checkout', 'unlock', 'débloquer', 'merci', 'thank you page', 'after paying', 'après le paiement', 'cancel', 'annuler', 'charged', 'débité', 'acheter la formation', 'acheter une formation', 'buy the training', 'buy a training'],
    fr: {
      chip: "Comment se passe l'achat",
      answer:
        `L'achat se fait sur la page /tarifs, sans quitter l'application. Choisis la formation complète, ou choisis ton métier puis la formation métier, et appuie sur Acheter : tu passes sur une page de paiement Stripe et tu paies une fois. Quand le paiement est fait, tu reviens sur une page de remerciement, qui demande à notre serveur si le paiement est vraiment passé. C'est seulement à ce moment-là que la formation s'ouvre, dans ce navigateur, avec un bouton qui t'emmène à son premier dojo. Si tu annules, tu reviens sur les tarifs et rien n'a été débité. Il n'y a pas de compte : ton accès et ta progression sont gardés dans ce navigateur, alors reviens avec le même. Si la page de remerciement dit qu'elle n'a trouvé aucune commande payée alors que tu viens de payer, rouvre le lien de ta confirmation de paiement. Si elle n'a pas pu vérifier, réessaie dans une minute : rien n'est perdu.`,
      links: [
        'Voir les tarifs',
        'Ta progression',
      ],
    },
  },
  {
    id: 'signin',
    chip: 'Do I need an account?',
    answer:
      'No. There are no accounts and no passwords. The free AI weekend asks for your email and nothing else. Everything else, your progress, your badges, what you unlocked and your Dojoburo save, is kept in this browser. ' +
      'That has one consequence worth knowing: another browser, another device or a private window starts from zero, and clearing this browser\'s data erases what you finished here. The Profile page says where your progress lives, and has a button to erase everything if you share this browser.',
    links: [
      { label: 'Your progress', href: '/profil' },
      { label: 'Start the free weekend', href: FREE_HREF },
    ],
    follow: ['profile', 'buy', 'security'],
    keywords: ['sign in', 'signin', 'log in', 'login', 'account', 'compte', 'register', 'sign up', 'signup', 'inscription', "s'inscrire", 'password', 'mot de passe', 'guest', 'invité', 'another device', 'autre appareil', 'another browser', 'autre navigateur', 'sync', 'synchro', 'save my progress', 'sauvegarde', 'do i need an account'],
    fr: {
      chip: 'Faut-il un compte ?',
      answer:
        `Non. Il n'y a ni compte ni mot de passe. Le week-end de l'IA gratuit te demande ton adresse e-mail, rien d'autre. Tout le reste, ta progression, tes badges, ce que tu as débloqué et ta partie de Dojoburo, est gardé dans ce navigateur. Ça a une conséquence à connaître : un autre navigateur, un autre appareil ou une fenêtre privée repart de zéro, et effacer les données de ce navigateur efface ce que tu as terminé ici. La page Profil te dit où vit ta progression, et elle a un bouton pour tout effacer si tu partages ce navigateur.`,
      links: [
        'Ta progression',
        'Commencer le week-end gratuit',
      ],
    },
  },
  {
    id: 'profile',
    chip: 'Your profile',
    answer:
      'Profile is the fourth button of the bottom bar, and it answers one question: where am I? It shows your level, your XP and how much of the path you have done, a gauge towards the next level, and a button to pick up where you left off. From there you open the valley map, full screen, to see every dojo city. You also see which trainings you have unlocked, your trophy case with every badge (earned or not), the trade you are working on, and where your progress lives: in this browser and nowhere else, with a button to erase everything.',
    links: [
      { label: 'Open your profile', href: '/profil' },
      { label: 'The valley map', href: '/carte' },
    ],
    follow: ['signin', 'training', 'certification'],
    keywords: ['profile', 'profil', 'progress', 'progression', 'xp', 'experience', 'expérience', 'level', 'niveau', 'my badges', 'mes badges', 'trophy', 'vitrine', 'map', 'valley', 'vallée', 'erase', 'effacer', 'reset', 'unlocked', 'débloqué'],
    fr: {
      chip: 'Ton profil',
      answer:
        `Profil, c'est le quatrième bouton de la barre du bas, et il répond à une seule question : où j'en suis ? Il te montre ton niveau, ton XP et la part du parcours que tu as faite, une jauge vers le niveau suivant, et un bouton pour reprendre là où tu t'étais arrêté. De là, tu ouvres la carte de la vallée, en plein écran, pour voir toutes les cités dojo. Tu y vois aussi les formations que tu as débloquées, ta vitrine avec tous les badges (gagnés ou non), le métier sur lequel tu travailles, et l'endroit où vit ta progression : dans ce navigateur et nulle part ailleurs, avec un bouton pour tout effacer.`,
      links: [
        'Ouvrir ton profil',
        'La carte de la vallée',
      ],
    },
  },
  {
    // LE COURS PRINCIPAL · il n'avait AUCUN sujet. Le robot savait parler de
    // l'académie, de la bibliothèque et des jetons, mais pas de la porte
    // d'entrée du produit : quelqu'un qui demandait « comment je crée un
    // agent ? » tombait sur la cascade LLM ou sur rien.
    id: 'build',
    chip: 'Build an agent',
    answer:
      `Building an agent is the first of the ${COURSE_COUNT} courses, and it is where you start. You walk into the dojo at /build and ${USE_CASE_COUNT} agents are asleep around the room, one per SHAPE of problem: a researcher, a writer, a responder, an engineer, an analyst, a sorter, an extractor, a watcher, a planner, an operator, a campaigner, a conductor. They are asleep because none of them exists yet. You click the one whose problem you actually have, it wakes up, and its page opens full screen with the whole course for it. ` +
      'Each one is taught separately because each one FAILS differently: a research agent invents sources, a sorting agent confuses two neighbouring categories, an extractor returns a plausible value for a field that was simply missing. A general "write a good prompt" course prepares you for none of them. ' +
      'Every path is four steps, and each step MAKES something that did not exist before: a rule, an instruction, a test set. The page explains, for each step, why it exists, the concrete moves, and the same thing written badly next to the same thing written well. At the end you take the agent away as a file in five formats (system prompt, markdown brief, tool schemas, skill folder, neutral manifest), none of which belongs to a provider.',
    links: [
      { label: 'Walk into the dojo', href: '/build' },
      { label: 'How the certification works', href: '/build#certification' },
    ],
    follow: ['certification', 'frameworks', 'teams'],
    keywords: ['build', 'build an agent', 'create an agent', 'créer un agent', 'make an agent', 'first agent', 'use case', "cas d'usage", 'twelve agents', '12 agents', 'agent shapes', 'which agent', 'researcher', 'extractor', 'triage', 'sorter', 'export agent', 'framework'],
    fr: {
      chip: "Construire un agent",
      answer:
        `Construire un agent, c'est le premier des ${COURSE_COUNT} cours, et c'est par là que tu commences. Tu entres dans le dojo, à /build, et ${USE_CASE_COUNT} agents dorment autour de la salle, un par FORME de problème : un chercheur, un rédacteur, un répondant, un ingénieur, un analyste, un trieur, un extracteur, une sentinelle, un planificateur, un opérateur, un expérimentateur, un chef d'orchestre. Ils dorment parce qu'aucun n'existe encore. Tu cliques sur celui dont tu as vraiment le problème, il se réveille, et sa page s'ouvre en plein écran avec tout le cours qui lui correspond. Chacun s'enseigne à part parce que chacun ÉCHOUE à sa manière : un agent de recherche invente des sources, un agent de tri confond deux catégories voisines, un extracteur te rend une valeur plausible pour un champ qui était tout simplement absent. Un cours général du genre « écris un bon prompt » ne te prépare à aucun des trois. Chaque parcours fait quatre étapes, et chaque étape FABRIQUE quelque chose qui n'existait pas : une règle, une instruction, un jeu d'épreuves. Pour chaque étape, la page t'explique pourquoi elle existe, les gestes concrets, et la même chose mal écrite à côté de la même chose bien écrite. À la fin, tu repars avec ton agent sous forme de fichier, dans cinq formats (system prompt, dossier markdown, schémas d'outils, dossier de skill, manifeste neutre), dont aucun n'appartient à un provider.`,
      links: [
        "Entrer dans le dojo",
        "Comment marche la certification",
      ],
    },
  },
  {
    // OÙ FAIRE TOURNER L'AGENT · la question qui suit immédiatement l'export,
    // et à laquelle rien ne répondait.
    id: 'frameworks',
    chip: 'Where to run it',
    answer:
      `You finish a path with a file: an instruction, tool schemas, a manifest. The question straight after is where to run it, and /frameworks answers it for ${FRAMEWORK_COUNT} of them: LangGraph, LangChain, CrewAI, LlamaIndex, the OpenAI Agents SDK, Google ADK, Pydantic AI, the Microsoft Agent Framework, AutoGen, Semantic Kernel, Mastra, Agno, Strands, smolagents and MetaGPT. ` +
      'For each one: how it MODELS an agent (that is the sentence to understand first, because it decides whether yours fits), where every piece of your exported file goes, what catches people out, and when NOT to take it. ' +
      'There is no code on that page, on purpose. These projects move fast and a snippet written today is wrong in a few months: someone copies it, it breaks, and they think they misunderstood. We teach the part that does not go stale, which is also the part that takes the time: what your agent BECOMES in each framework. A system prompt is an instruction here, a backstory there, a typed signature elsewhere. Once you know that, the current documentation is a five minute read. Every entry links to it.',
    links: [
      { label: 'Compare the frameworks', href: '/frameworks' },
      { label: 'Build an agent first', href: '/build' },
    ],
    follow: ['build', 'certification'],
    keywords: ['framework', 'frameworks', 'langgraph', 'langchain', 'crewai', 'llamaindex', 'openai agents', 'agents sdk', 'google adk', 'pydantic ai', 'autogen', 'ag2', 'semantic kernel', 'mastra', 'agno', 'strands', 'smolagents', 'metagpt', 'integrate', 'intégrer', 'deploy', 'run my agent', 'where to run'],
    fr: {
      chip: "Où le faire tourner",
      answer:
        `Tu termines un parcours avec un fichier : un system prompt, des schémas d'outils, un manifeste. La question qui suit tout de suite, c'est où le faire tourner, et /frameworks y répond pour ${FRAMEWORK_COUNT} d'entre eux : LangGraph, LangChain, CrewAI, LlamaIndex, l'OpenAI Agents SDK, Google ADK, Pydantic AI, le Microsoft Agent Framework, AutoGen, Semantic Kernel, Mastra, Agno, Strands, smolagents et MetaGPT. Pour chacun : comment il MODÉLISE un agent (c'est la phrase à comprendre en premier, parce que c'est elle qui décide si le tien y rentre), où va chaque morceau de ton fichier exporté, ce qui piège les gens, et quand NE PAS le prendre. Il n'y a aucun code sur cette page, et c'est voulu. Ces projets bougent vite, et un extrait écrit aujourd'hui sera faux dans quelques mois : quelqu'un le copie, ça casse, et il croit avoir mal compris. On t'enseigne la partie qui ne se périme pas, et c'est aussi celle qui prend du temps : ce que ton agent DEVIENT dans chaque framework. Un system prompt est une instruction ici, une histoire là, une signature typée ailleurs. Une fois que tu sais ça, la documentation du jour se lit en cinq minutes. Chaque entrée y renvoie.`,
      links: [
        "Comparer les frameworks",
        "Construire un agent d'abord",
      ],
    },
  },
  {
    // LA CERTIFICATION · le produit distribuait des badges, des ceintures et
    // des diplômes sans avoir jamais dit comment ils s'obtiennent.
    id: 'certification',
    chip: 'Badges and belts',
    answer:
      `Steps make badges, badges and finished agents move your belt, and the ${COURSE_COUNT} courses together make the diploma. The rules are the same for everyone and nothing is given for showing up. ` +
      'A STEP is ticked when you have MADE the thing it produces, not when you have read about it. Nothing checks up on you, and that is the point: a progress bar you can cheat tells you nothing. ' +
      'A BADGE is never given for a step. It is given for a path taken end to end, which means you have one shape of problem you can actually handle. ' +
      `A BELT counts FINISHED agents, never steps: starting four paths and finishing none moves nothing at all. There are ${GRADE_COUNT} of them, from white to black, and the black one asks for all ${USE_CASE_COUNT}. ` +
      'The DIPLOMA asks for all three courses in full. It reads "certified DojoBuro", which means certified by us and by nobody else: it is not an industry qualification, no employer has heard of it, and we would rather say that here than let you find out later. Everything is kept in your browser, nobody sells it and nobody verifies it.',
    links: [
      { label: 'See how it works', href: '/build#certification' },
      { label: 'Your progress', href: '/build' },
    ],
    follow: ['build', 'profile'],
    keywords: ['badge', 'badges', 'belt', 'belts', 'ceinture', 'grade', 'diploma', 'diplôme', 'certification', 'certified', 'certifié', 'reward', 'récompense'],
    fr: {
      chip: "Insignes et ceintures",
      answer:
        `Les étapes font les insignes, les insignes et les agents terminés font avancer ta ceinture, et les ${COURSE_COUNT} cours ensemble font le diplôme. Les règles sont les mêmes pour tout le monde, et rien ne se gagne juste en étant présent. Une ÉTAPE se coche quand tu as FABRIQUÉ ce qu'elle produit, pas quand tu as lu à son sujet. Personne ne te surveille, et c'est tout l'intérêt : une barre de progression qu'on peut tricher ne t'apprend rien. Un INSIGNE ne se donne jamais pour une étape. Il se gagne sur un parcours mené d'un bout à l'autre, ce qui veut dire que tu sais traiter une forme de problème. Une CEINTURE compte les agents TERMINÉS, jamais les étapes : commencer quatre parcours sans en finir aucun ne fait rien avancer du tout. Il y en a ${GRADE_COUNT}, de la blanche à la noire, et la noire demande les ${USE_CASE_COUNT}. Le DIPLÔME demande les trois cours en entier. Il porte la mention « certifié DojoBuro », ce qui veut dire certifié par nous et par personne d'autre : ce n'est pas une qualification reconnue par une branche, aucun employeur n'en a entendu parler, et je préfère te le dire ici plutôt que tu le découvres plus tard. Tout est gardé dans ton navigateur, personne ne le vend et personne ne le vérifie.`,
      links: [
        "Voir comment ça marche",
        "Ta progression",
      ],
    },
  },
  {
    id: 'academy',
    chip: 'Dojo Academy',
    answer:
      `The Dojo Academy is our free course on how all of this actually works · ${ACADEMY_LESSONS} lessons across ${ACADEMY_TRACKS} tracks, about ${ACADEMY_HOURS} hours in total, and it starts from absolutely zero. It assumes you have never heard the words "agent", "vibe coding", "IDE" or "coding agent", and explains each one in plain language the moment it comes up. Every lesson is short (5 to 8 minutes), has an animation beside it showing the thing being explained actually happening, and ends with a question to check you got it plus one thing to go and do. Nothing is gated and no account is needed · your progress is remembered in this browser. The five tracks: 1) START HERE · what an agent is, why a team beats one assistant, your first project, and reading the work it produced. 2) THE LANDSCAPE, PLAINLY · vibe coding, chatbots vs IDEs vs coding agents vs an agent workspace, how to write a brief instead of a wish, and what everything costs. 3) YOUR TEAMMATES · the eight plain-English fields that define a teammate, how to edit one so every future run improves, choosing their apps, and shaping the crew. 4) BUILD A SYSTEM · what a loop is, designing your own plan backwards from the artefact, chaining several teams together, and finding the step that broke. 5) GO LIVE · connecting a real app safely, the review checklist before you ship, the seven mistakes everyone makes, and a 30-day plan. If you are new, start at lesson one · it is the fastest way to stop guessing.`,
    links: [
      { label: 'Open the Academy', href: '/academy' },
      { label: 'Start lesson 1', href: '/academy/start-here/what-is-an-agent' },
    ],
    follow: ['build', 'training', 'budget'],
    keywords: ['academy', 'académie', 'beginner', 'débutant', 'vibe coding', 'claude code', 'what is an agent', "c'est quoi un agent", "qu'est-ce qu'un agent", 'coding agent'],
    fr: {
      chip: "L'académie du dojo",
      answer:
        `L'académie du dojo, c'est notre cours gratuit pour comprendre comment tout ça marche vraiment · ${ACADEMY_LESSONS} leçons réparties sur ${ACADEMY_TRACKS} pistes, environ ${ACADEMY_HOURS} heures en tout, et on part vraiment de zéro. Le cours suppose que tu n'as jamais entendu les mots « agent », « vibe coding », « éditeur de code » ou « agent développeur », et il explique chacun en mots simples au moment où il apparaît. Chaque leçon est courte (5 à 8 minutes), a une animation à côté qui montre la chose expliquée en train de se produire, et se termine par une question pour vérifier que tu as compris, plus une chose à aller faire. Rien n'est verrouillé et aucun compte n'est nécessaire · ta progression est retenue dans ce navigateur. Les cinq pistes : 1) COMMENCE ICI · ce qu'est un agent, pourquoi une équipe vaut mieux qu'un assistant seul, ton premier projet, et comment lire le travail produit. 2) LE PAYSAGE, SANS JARGON · le vibe coding, les agents conversationnels contre les éditeurs de code contre les agents développeurs contre un atelier d'agents, comment écrire une commande plutôt qu'un souhait, et ce que tout ça coûte. 3) TES COÉQUIPIERS · les huit champs en clair qui définissent un coéquipier, comment en modifier un pour que tous les passages à venir s'améliorent, choisir ses applications, et façonner l'équipe. 4) CONSTRUIRE UN SYSTÈME · ce qu'est une boucle, comment dessiner ton plan à l'envers depuis l'objet produit, mettre plusieurs équipes en chaîne, et trouver l'étape qui a cassé. 5) PASSER EN VRAI · brancher une vraie application sans danger, la liste à relire avant de livrer, les sept erreurs que tout le monde commet, et un plan sur trente jours. Si tu débutes, commence à la leçon une · c'est le moyen le plus rapide d'arrêter de deviner.`,
      links: [
        "Ouvrir l'académie",
        "Commencer la leçon 1",
      ],
    },
  },
  {
    // LES APPLICATIONS · la page /guide existe toujours et documente chaque
    // connecteur. Ce sujet décrivait l'ancien geste (brancher une application
    // à un coéquipier depuis son bureau), qui n'est plus dans la navigation.
    id: 'tools',
    walk: 'apps',
    chip: 'Connect real tools',
    answer:
      'The app setup guide at /guide covers 40+ apps · Notion, GitHub, Gmail, Google Drive, Calendar & Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Apollo, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, Cloudinary, DocuSign, Zendesk, Intercom, Supabase, PostHog, GA4 and more. For each one it explains how an agent reaches the app: you approve access once on the app\'s own screen (OAuth), the access is held on the server rather than in the browser, and the agent works inside the app through MCP, the standard that lets an agent use a tool. Every app has its own step-by-step page · name the app and I will link it.',
    links: [
      { label: 'Set up each app · step by step', href: '/guide', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['setup', 'guide', 'frameworks'],
    keywords: ['tool', 'tools', 'connect', 'integration', 'mcp', 'oauth', 'github', 'slack', 'notion', 'gmail', 'jira', 'hubspot', 'figma', 'api', 'apps', 'connecteur', 'connector', 'brancher'],
    fr: {
      chip: 'Brancher de vrais outils',
      answer:
        `Le guide de branchement, sur /guide, couvre plus de 40 applications · Notion, GitHub, Gmail, Google Drive, Agenda et Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Apollo, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, Cloudinary, DocuSign, Zendesk, Intercom, Supabase, PostHog, GA4 et d'autres. Pour chacune, il t'explique comment un agent atteint l'application : tu donnes ton accord une fois sur l'écran de l'application elle-même (OAuth), l'accès est gardé sur le serveur plutôt que dans le navigateur, et l'agent travaille dans l'application grâce à MCP, le standard qui permet à un agent de se servir d'un outil. Chaque application a sa propre page pas à pas · donne-moi son nom et je t'y emmène.`,
      links: [
        'Régler chaque application, pas à pas',
        "Ce qu'est MCP",
      ],
    },
  },
  {
    id: 'setup',
    walk: 'apps',
    chip: 'How to connect an app',
    answer:
      'Connecting an app is set up once per app by whoever runs the deployment: 1) create an OAuth app in the provider console (Notion integrations, GitHub OAuth apps, Google Cloud credentials…) and set the redirect URI to https://YOUR-SITE/api/connect; 2) copy the client id + secret into env as <APP>_CLIENT_ID and <APP>_CLIENT_SECRET (Google apps share GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET); 3) apps WITH a first-party MCP server (Notion, GitHub, Linear, Stripe) work right away; apps WITHOUT one (Gmail, Drive, Calendar, Slack…) also need <APP>_MCP_URL pointed at a hosted MCP hub (Composio, Zapier, Pipedream). PKCE apps (Airtable, X, Canva) are automatic. Once the env is set, the tool shows a Connect button instead of a "set up" link, and connecting is one click. Every app also has its own step-by-step page in the app setup guide (scopes, exact env vars, gotchas) · just name the app and I will link it.',
    links: [
      { label: 'Step-by-step setup for every app', href: '/guide', external: true },
      { label: 'MCP hub (Composio)', href: 'https://composio.dev', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'guide', 'security'],
    keywords: ['setup', 'set up', 'client id', 'client secret', 'oauth app', 'redirect', 'env', 'configure', 'composio', 'zapier', 'pipedream', 'mcp url', 'mcp_url', 'hub', 'how to connect', 'create app', 'pkce', 'credentials'],
    fr: {
      chip: 'Comment brancher une application',
      answer:
        `Brancher une application se règle une seule fois par application, par la personne qui exploite le déploiement : 1) crée une application OAuth dans la console du fournisseur (intégrations Notion, applications OAuth GitHub, identifiants Google Cloud…) et règle l'adresse de redirection sur https://TON-SITE/api/connect ; 2) recopie l'identifiant et le secret client dans l'environnement, sous <APP>_CLIENT_ID et <APP>_CLIENT_SECRET (les applications Google partagent GOOGLE_CLIENT_ID et GOOGLE_CLIENT_SECRET) ; 3) les applications qui ont leur propre serveur MCP (Notion, GitHub, Linear, Stripe) marchent tout de suite ; celles qui n'en ont pas (Gmail, Drive, Agenda, Slack…) demandent en plus <APP>_MCP_URL pointé sur un hub MCP hébergé (Composio, Zapier, Pipedream). Les applications en PKCE (Airtable, X, Canva) sont automatiques. Une fois l'environnement réglé, l'outil affiche un bouton Brancher au lieu d'un lien « à régler », et brancher tient en un clic. Chaque application a aussi sa page pas à pas dans le guide de branchement (permissions, variables exactes, pièges) · donne-moi le nom de l'application et je t'y emmène.`,
      links: [
        'Réglage pas à pas de chaque application',
        'Hub MCP (Composio)',
        "Ce qu'est MCP",
      ],
    },
  },
  {
    id: 'guide',
    walk: 'overview',
    chip: 'App setup guide',
    answer:
      'The app setup guide, at /guide, is the manual for connecting agents to real apps. It covers how connecting works end to end, how to configure it, how to use it and see the results, how to stay safe and keep a budget in check, running things locally or in the cloud, linking your own external agents, and a directory with a dedicated step-by-step page for every app. Its sections carry a "How to?" button that plays an animated walkthrough full screen.',
    links: [
      { label: 'Open the app setup guide', href: '/guide', external: true },
      { label: 'Where to run an agent', href: '/frameworks' },
    ],
    follow: ['setup', 'tools', 'frameworks'],
    keywords: ['guide', 'dojo guide', 'setup guide', 'guide de branchement', 'manual', 'manuel', 'walkthrough', 'visite guidée', 'tutorial', 'tuto'],
    fr: {
      chip: 'Le guide de branchement',
      answer:
        `Le guide de branchement, sur /guide, c'est le manuel pour brancher des agents sur de vraies applications. Il couvre comment le branchement marche d'un bout à l'autre, comment le régler, comment s'en servir et voir les résultats, comment rester en sécurité et garder un budget sous contrôle, faire tourner les choses chez toi ou dans le nuage, relier tes propres agents extérieurs, et un annuaire avec une page pas à pas pour chaque application. Ses sections ont un bouton « Comment faire ? » qui lance une visite animée en plein écran.`,
      links: [
        'Ouvrir le guide de branchement',
        'Où faire tourner un agent',
      ],
    },
  },
  {
    id: 'security',
    chip: 'Security & privacy',
    answer:
      'There is no crypto here: no wallet, no seed, no coins. Payment happens on a Stripe payment page, so your card details are typed there and not on our pages. There is no account and no password: your progress, your badges, what you unlocked and your Dojoburo save live in this browser, and the Profile page says so plainly. The site ships with a strict Content-Security-Policy and security headers. Treat this browser like your own device, and if you share it, the Profile page has a button to erase everything.',
    links: [
      { label: 'Where your progress lives', href: '/profil' },
      { label: 'See the prices', href: '/tarifs' },
    ],
    follow: ['signin', 'buy', 'profile'],
    keywords: ['security', 'secure', 'safe', 'sécurité', 'privacy', 'vie privée', 'confidentialité', 'hack', 'scam', 'arnaque', 'phishing', 'data', 'données', 'csp', 'protect', 'is it safe', 'safety', 'wallet', 'portefeuille', 'crypto', 'seed', 'metamask', 'xaman'],
    fr: {
      chip: 'Sécurité et vie privée',
      answer:
        `Il n'y a aucune cryptomonnaie ici : pas de portefeuille, pas de phrase secrète, pas de pièces. Le paiement se fait sur une page de paiement Stripe, donc ta carte bancaire se tape là-bas, pas sur nos pages. Il n'y a ni compte ni mot de passe : ta progression, tes badges, ce que tu as débloqué et ta partie de Dojoburo vivent dans ce navigateur, et la page Profil le dit clairement. Le site est livré avec une politique de sécurité du contenu stricte et des en-têtes de sécurité. Traite ce navigateur comme ton propre appareil, et si tu le partages, la page Profil a un bouton pour tout effacer.`,
      links: [
        'Où vit ta progression',
        'Voir les tarifs',
      ],
    },
  },
  {
    id: 'troubleshoot',
    chip: 'Troubleshooting',
    answer:
      'A few things usually explain it. A DOJO IS LOCKED: the AI weekend opens with your email, the first dojo of every city opens once you have given it, and the rest comes with the training it belongs to, on /tarifs. YOU PAID BUT NOTHING OPENED: the training opens on the thank-you page once our server confirms the payment. If that page found no paid order, open the link from your payment confirmation again; if it could not check, try again in a minute, nothing is lost. YOUR PROGRESS OR YOUR GAME IS GONE: both live in this browser only, so another browser, another device, a private window or cleared site data starts from zero. THE 3D DOJO STAYS BLANK: your browser may be blocking WebGL, so try another browser or switch on hardware acceleration.',
    links: [
      { label: 'See the prices', href: '/tarifs' },
      { label: 'Your progress', href: '/profil' },
    ],
    follow: ['buy', 'signin', 'pricing'],
    keywords: ['bug', 'broken', 'error', 'erreur', 'not working', 'marche pas', 'stuck', 'bloqué', 'blank', 'vide', 'fail', 'problem', 'problème', 'issue', 'help', 'aide', 'webgl', 'refresh', 'locked', 'verrouillé', 'fermé', 'lost', 'perdu', 'disappeared', 'disparu'],
    fr: {
      chip: 'Dépannage',
      answer:
        `Quelques causes expliquent presque tout. UN DOJO EST FERMÉ : le week-end de l'IA s'ouvre avec ton adresse e-mail, le premier dojo de chaque cité s'ouvre dès que tu l'as donnée, et le reste vient avec la formation à laquelle il appartient, sur /tarifs. TU AS PAYÉ MAIS RIEN NE S'EST OUVERT : la formation s'ouvre sur la page de remerciement, une fois que notre serveur a confirmé le paiement. Si cette page n'a trouvé aucune commande payée, rouvre le lien de ta confirmation de paiement ; si elle n'a pas pu vérifier, réessaie dans une minute, rien n'est perdu. TA PROGRESSION OU TA PARTIE A DISPARU : les deux vivent seulement dans ce navigateur, donc un autre navigateur, un autre appareil, une fenêtre privée ou des données effacées repartent de zéro. LE DOJO EN TROIS DIMENSIONS RESTE VIDE : ton navigateur bloque peut-être WebGL, alors essaie un autre navigateur ou active l'accélération matérielle.`,
      links: [
        'Voir les tarifs',
        'Ta progression',
      ],
    },
  },
]

/** Le sujet dans la langue demandée · un seul chemin, comme partout ailleurs.
 *
 *  Les MOTS-CLÉS ne sont pas traduits, et c'est voulu : ils contiennent déjà
 *  les deux langues, parce qu'on tape « ceinture » aussi bien que « belt ».
 *  Les dédoubler par langue casserait la reconnaissance d'une question posée
 *  en anglais par un lecteur qui lit la page en français. */
export function topicIn(t: KBTopic, lang: Lang): KBTopic {
  if (lang !== 'fr' || !t.fr) return t
  return {
    ...t,
    chip: t.fr.chip,
    answer: t.fr.answer,
    links: t.links?.map((l, i) => ({ ...l, label: t.fr!.links?.[i] ?? l.label })),
  }
}

export const TOPIC_BY_ID: Record<string, KBTopic> = Object.fromEntries(KB.map((t) => [t.id, t]))

// Aliases the way people actually name apps in chat, mapped to a connector id.
const CONNECTOR_ALIASES: Record<string, string> = {
  'google drive': 'gdrive', drive: 'gdrive', 'google calendar': 'gcal', calendar: 'gcal',
  'google classroom': 'gclassroom', classroom: 'gclassroom', gsheet: 'gdrive', sheets: 'gdrive',
  twitter: 'twitter', x: 'twitter', 'whatsapp business': 'whatsapp', qb: 'quickbooks',
}

/** If the user names a specific app, return its connector so the bot can deep-link
 *  to that connector's dedicated /guide/<id> setup page. */
export function matchConnector(text: string): Connector | null {
  const q = text.toLowerCase()
  // longest alias first so "google drive" beats a bare "google"
  const aliases = Object.keys(CONNECTOR_ALIASES).sort((a, b) => b.length - a.length)
  for (const a of aliases) if (q.includes(a)) return CONNECTORS.find((c) => c.id === CONNECTOR_ALIASES[a]) ?? null
  let best: Connector | null = null
  for (const c of CONNECTORS) {
    const label = c.label.toLowerCase()
    if (q.includes(label) || q.includes(c.id.toLowerCase())) {
      if (!best || label.length > best.label.length) best = c
    }
  }
  return best
}

/** A ready-made chat answer that points to a connector's dedicated setup page.
 *
 *  Le BLURB du connecteur reste dans sa langue d'origine · il vit dans
 *  data/connectors, qui n'est pas traduit, et le recopier ici en aurait fait
 *  une deuxième version capable de diverger. La phrase autour, elle, suit la
 *  langue lue. */
export function connectorReply(c: Connector, lang: Lang = 'en'): { text: string; links: KBLink[] } {
  if (lang === 'fr') {
    return {
      text: `${c.label} : ${c.blurb} Brancher tient en un clic une fois que l'exploitant a fait le réglage. Voici la page de réglage complète, pas à pas, pour ${c.label}.`,
      links: [
        { label: `Régler ${c.label}, pas à pas`, href: `/guide/${c.id}`, external: true },
        { label: `Ouvrir la console ${c.provider}`, href: c.docsUrl, external: true },
        { label: 'Tous les connecteurs (guide du dojo)', href: '/guide', external: true },
      ],
    }
  }
  return {
    text: `${c.label}: ${c.blurb} Connecting is one click once the operator has set it up. Here is the full step-by-step setup page for ${c.label}.`,
    links: [
      { label: `Set up ${c.label} · step by step`, href: `/guide/${c.id}`, external: true },
      { label: `Open the ${c.provider} console`, href: c.docsUrl, external: true },
      { label: 'All connectors (Dojo Guide)', href: '/guide', external: true },
    ],
  }
}

/** Cheap keyword scorer so the bot can answer offline before spending anything. */
export function matchTopic(text: string): KBTopic | null {
  const q = text.toLowerCase()
  let best: KBTopic | null = null
  let bestScore = 0
  for (const t of KB) {
    let score = 0
    for (const k of t.keywords) if (q.includes(k)) score += k.length >= 5 ? 2 : 1
    // LES DEUX PASTILLES · quelqu'un qui lit la page en français tape le
    // libellé français qu'il a sous les yeux. Ne comparer que l'anglais
    // aurait fait tomber cette question dans la cascade payante.
    if (q.includes(t.chip.toLowerCase())) score += 3
    else if (t.fr && q.includes(t.fr.chip.toLowerCase())) score += 3
    if (score > bestScore) {
      bestScore = score
      best = t
    }
  }
  return bestScore >= 2 ? best : null
}

// LA PREMIÈRE PHRASE DU ROBOT VENDAIT L'ANCIEN PRODUIT · elle promettait
// « un atelier professionnel par coéquipier, qui tourne dans votre
// navigateur », c'est à dire l'outil de productivité d'avant le
// repositionnement, et c'est la toute première chose que lit un visiteur qui
// ouvre le robot. Elle dit maintenant ce que le site est : un centre de
// formation où l'on construit un agent et où l'on repart avec.
//
// ELLE A CHANGÉ UNE DEUXIÈME FOIS · le produit a maintenant une barre du bas
// à quatre boutons, dont un jeu. L'accueil la présente, parce que c'est la
// première question qu'on se pose : où est quoi.
export const GREETING = {
  en:
    "Hi, I'm Dojobot. Short version: the bottom bar has four buttons. Dojoburo is the game, where you run an AI studio with a limited token budget. Training is the courses, starting with a free AI weekend. Clan is the community page, and Profile is where your progress lives. No account is needed, everything is kept in this browser. Ask me anything in your own words, or pick a topic below.",
  fr:
    "Salut, moi c'est Dojobot. En bref : la barre du bas a quatre boutons. Dojoburo, c'est le jeu, où tu diriges un studio d'IA avec un budget de tokens limité. Training, ce sont les formations, à commencer par un week-end de l'IA gratuit. Clan, c'est la page de la communauté, et Profil, c'est là que vit ta progression. Aucun compte n'est nécessaire, tout est gardé dans ce navigateur. Pose-moi ta question avec tes propres mots, ou choisis un sujet ci-dessous.",
}
