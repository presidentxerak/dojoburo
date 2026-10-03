// LE COURS « Business et monétisation avec l'IA », PARTIE A · voir ./types et ./index.
//
// LES DEUX PREMIERS MODULES · lire le marché, puis l'offre et le prototype.
// La partie B (business-b) couvre la vente, la livraison, l'automatisation des
// opérations, la mesure et la tenue dans la durée.
//
// UN FIL ROUGE · Nora, personnage fictif, assistante administrative salariée à
// plein temps dans une agence immobilière. Elle croise chaque semaine des
// artisans du bâtiment (plombiers, électriciens, peintres) qui chiffrent des
// travaux. Elle veut lancer une activité à côté avec l'IA, avec environ six
// heures par semaine et sans épargne à engager : ce sont des hypothèses du cas
// fictif, présentées comme telles. Au fil des cours, elle lit le marché,
// choisit un service productisé, une niche (les petits artisans du bâtiment de
// sa région), découvre en entretien que le vrai problème est la relance des
// devis restés sans réponse, puis construit l'offre « Atelier Relance ».
//
// CE QUE LE COURS S'INTERDIT · aucune promesse de gains, aucun chiffre de
// marché, aucun revenu, aucun témoignage, aucun prix d'outil, aucun seuil
// légal ni taux. Les outils nommés (Tally, Google Forms, Google Sheets, Make,
// Zapier, n8n, Carrd, ChatGPT, Claude, Le Chat) le sont pour leurs principes
// stables ; leurs offres et leurs limites renvoient à leur documentation
// officielle. Le droit renvoie aux sources officielles (service-public.fr,
// URSSAF, impots.gouv.fr, INPI, CNIL), jamais à un article recopié.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import { enrichKey } from '../enrich/types'
import { deepKey } from '../deep/types'
import type { CoursePart } from './types'

/* ================================================================== */
/* MODULE 1 · LIRE LE MARCHÉ                                           */
/* ================================================================== */

const M1 = 'bz-m1'

const MARKET: Level[] = [
  {
    id: 'bz-value',
    master: 'watch',
    minutes: 10,
    title: B('Where value is created in the AI market', "Où se crée la valeur sur le marché de l'IA"),
    learn: B(
      'You will map the layers of the AI market and locate where a small independent business can capture value.',
      "Vous situerez les couches du marché de l'IA et repérerez où une petite activité indépendante peut capter de la valeur.",
    ),
    act: B('Map the AI value chain for a sector you know, then mark the layers a solo founder can really occupy.',
      "Cartographiez la chaîne de valeur de l'IA dans un secteur connu, puis marquez les couches accessibles seul."),
    steps: [
      B('Name the layers: infrastructure, models, tools and platforms, applications, then services and integration.',
        'Nommez les couches : infrastructure, modèles, outils et plateformes, applications, puis services et intégration.'),
      B('For each layer, note what it takes to compete there: capital, research, distribution or knowledge of a trade.',
        "Pour chaque couche, notez ce qu'il faut pour y concourir : capital, recherche, distribution ou connaissance d'un métier."),
      B('Ask what the next model release would make obsolete in each layer: what survives it is closer to lasting value.',
        "Demandez-vous ce que le prochain modèle rendrait obsolète dans chaque couche : ce qui y survit est plus durable."),
      B('Mark the one or two layers where your knowledge of a trade and your network give you an edge.',
        "Marquez la ou les deux couches où votre connaissance d'un métier et votre réseau vous donnent un avantage."),
    ],
    trap: B(
      'Building a thin wrapper around a model, with no access to customers or data: the next model update can absorb it overnight.',
      "Construire une simple surcouche d'un modèle, sans accès aux clients ni aux données : la prochaine mise à jour peut l'absorber du jour au lendemain.",
    ),
    quiz: {
      q: B('Nora wants to start an AI side business next to her job. Which position best survives new model releases?',
        "Nora veut lancer une activité IA à côté de son emploi. Quelle position résiste le mieux aux nouveaux modèles ?"),
      options: [
        B('A general chat app that answers any question, under her own logo', 'Une app de chat généraliste qui répond à tout, sous son propre logo'),
        B('A service for one trade she knows, wired into its daily tools', "Un service pour un métier qu'elle connaît, branché sur ses outils"),
        B('A new LLM trained from scratch on public data from the web', 'Un nouveau LLM entraîné de zéro sur des données publiques du web'),
      ],
      answer: 1,
      why: B(
        'A general chat app competes with the model makers themselves, and training a model takes capital. Knowledge of a trade and access to its tools do not come with the next model.',
        "Une app de chat généraliste concurrence les éditeurs de modèles eux-mêmes, et entraîner un modèle demande des capitaux. Connaître un métier et ses outils ne vient pas avec le prochain modèle.",
      ),
    },
    badge: B('Reads the value chain', 'Lit la chaîne de valeur'),
  },
  {
    id: 'bz-models',
    master: 'analysis',
    minutes: 11,
    title: B('The business models open to you with AI', "Les modèles économiques possibles avec l'IA"),
    learn: B(
      'You will compare seven business models by time, risk, cash and scale, and choose the one that fits your situation.',
      'Vous comparerez sept modèles économiques selon le temps, le risque, la trésorerie et l\'échelle, et choisirez le vôtre.',
    ),
    act: B('Score seven business models against your real constraints, then keep two with an AI as a sparring partner.',
      'Notez sept modèles économiques selon vos contraintes réelles, puis gardez-en deux avec une IA pour contradicteur.'),
    steps: [
      B('List the models: freelance, productised service, agency, SaaS or micro-SaaS, digital products, training, consulting.',
        'Listez les modèles : freelance, service productisé, agence, SaaS ou micro-SaaS, produits numériques, formation, conseil.'),
      B('Write your constraints first: hours per week, savings, skills, tolerance for months without revenue.',
        "Écrivez d'abord vos contraintes : heures par semaine, épargne, compétences, tolérance aux mois sans revenu."),
      B('Score each model: time before the first payment, work before selling, link between income and hours, risk.',
        'Notez chaque modèle : délai avant le premier paiement, travail avant de vendre, lien entre revenu et heures, risque.'),
      B('Keep two models and write, for each, the condition that would make you switch to the other one.',
        "Gardez deux modèles et écrivez, pour chacun, la condition qui vous ferait passer à l'autre."),
    ],
    trap: B(
      'Starting with a SaaS because it "scales": with no customers yet, months of building come before any proof that anyone will pay.',
      "Commencer par un SaaS parce qu'il « passe à l'échelle » : sans client, des mois de construction précèdent toute preuve que quelqu'un paiera.",
    ),
    quiz: {
      q: B('With six hours a week and no savings to spend, which model gives Nora the fastest proof that people pay?',
        "Avec six heures par semaine et aucune épargne à engager, quel modèle prouve le plus vite à Nora qu'on paiera ?"),
      options: [
        B('A micro-SaaS she codes alone over the next six months of evenings', "Un micro-SaaS qu'elle code seule pendant six mois de soirées"),
        B('An online course recorded before she has had a single customer', "Une formation en ligne enregistrée avant d'avoir eu un seul client"),
        B('A small productised service, sold and delivered by hand at first', 'Un petit service productisé, vendu et livré à la main au début'),
      ],
      answer: 2,
      why: B(
        'A productised service can be sold before anything is automated: payment comes first, tools follow. A SaaS or a course demands weeks of work before the first euro.',
        "Un service productisé se vend avant toute automatisation : le paiement vient d'abord, les outils suivent. Un SaaS ou une formation exigent des semaines de travail avant le premier euro.",
      ),
    },
    badge: B('Chooses a model on purpose', 'Choisit son modèle à dessein'),
  },
  {
    id: 'bz-niche',
    master: 'triage',
    minutes: 10,
    title: B('Choosing a market and a niche', 'Choisir un marché et une niche'),
    learn: B(
      'You will narrow a broad market to a niche defined by who, which problem, and how you can reach them.',
      'Vous réduirez un marché large à une niche définie par un public, un problème et un moyen de l\'atteindre.',
    ),
    act: B('Score five candidate niches on access, pain, ability to pay and your edge, then commit to one.',
      "Notez cinq niches selon l'accès, la douleur, la capacité à payer et votre avantage, puis engagez-vous sur une."),
    steps: [
      B('Write five niches as "who + situation", such as small building trades firms that quote every week.',
        'Écrivez cinq niches sous la forme « qui + situation », par exemple les artisans du bâtiment qui chiffrent chaque semaine.'),
      B('Score each from one to five: can you reach them, does it hurt, can they pay, do you know the trade?',
        'Notez chacune de un à cinq : pouvez-vous les joindre, est-ce douloureux, peuvent-ils payer, connaissez-vous le métier ?'),
      B('Ask an AI to argue against your top niche, then check its objections with two people of that trade.',
        'Demandez à une IA de plaider contre votre niche favorite, puis vérifiez ses objections auprès de deux gens du métier.'),
      B('Commit to one niche for a set period, with the signal that would make you change before the end.',
        'Engagez-vous sur une niche pour une durée fixée, avec le signal qui vous ferait changer avant la fin.'),
    ],
    trap: B(
      'Refusing to choose so as not to lose anyone: a message written for everyone speaks to no one, and nobody recommends a generalist.',
      'Refuser de choisir pour ne perdre personne : un message écrit pour tous ne parle à personne, et personne ne recommande un généraliste.',
    ),
    quiz: {
      q: B('Nora hesitates between "SMEs" and "building trades firms she meets at work". Why prefer the second?',
        'Nora hésite entre « les PME » et « les artisans du bâtiment croisés au travail ». Pourquoi préférer le second ?'),
      options: [
        B('She can reach them this week and she speaks their language', 'Elle peut les joindre cette semaine et elle parle leur langue'),
        B('Small firms always have more money to spend than larger ones', 'Les petites entreprises ont toujours plus de budget que les grandes'),
        B('A narrow niche guarantees that there will be no competition', "Une niche étroite garantit l'absence de toute concurrence"),
      ],
      answer: 0,
      why: B(
        'Access and knowledge of the trade are what a beginner lacks most. A niche removes neither competition nor budget questions: it makes people reachable and the message precise.',
        "L'accès et la connaissance du métier manquent le plus au débutant. Une niche ne supprime ni la concurrence ni les questions de budget : elle rend les gens joignables et le message précis.",
      ),
    },
    badge: B('Picks a niche and holds it', 'Choisit une niche et la tient'),
  },
  {
    id: 'bz-interviews',
    master: 'research',
    minutes: 12,
    title: B('Finding a real problem: customer interviews', 'Trouver un vrai problème : les entretiens clients'),
    learn: B(
      'You will run customer interviews that collect past facts rather than polite opinions, following Mom Test principles.',
      'Vous mènerez des entretiens qui recueillent des faits passés plutôt que des avis polis, selon les principes du Mom Test.',
    ),
    act: B('Prepare a guide of questions about the past, hold five interviews, then sort facts from opinions.',
      'Préparez un guide de questions sur le passé, menez cinq entretiens, puis séparez les faits des avis.'),
    steps: [
      B('Ask about the last time the problem happened: what they did, what it cost them, what they tried.',
        "Demandez la dernière fois que le problème s'est produit : ce qu'ils ont fait, ce que cela a coûté, ce qu'ils ont essayé."),
      B('Do not pitch your idea during the interview: once you have described it, people protect your feelings.',
        "Ne présentez pas votre idée pendant l'entretien : une fois qu'elle est décrite, les gens ménagent vos sentiments."),
      B('Write your notes right after, separating facts, opinions, compliments and commitments.',
        'Rédigez vos notes juste après, en séparant faits, avis, compliments et engagements.'),
      B('Ask an AI for patterns across the notes, then check each one against the quotes it relies on.',
        "Demandez à une IA les tendances communes aux notes, puis vérifiez chacune contre les citations qui l'appuient."),
    ],
    trap: B(
      'Asking "would you use a tool that...?": the answer is a polite guess about the future, not proof of a problem worth paying for.',
      'Demander « utiliseriez-vous un outil qui... ? » : la réponse est une supposition polie sur l\'avenir, pas la preuve d\'un problème qui vaut un paiement.',
    ),
    quiz: {
      q: B('Which question, put to a plumber, gives Nora the most reliable information?',
        "Quelle question, posée à un plombier, donne à Nora l'information la plus fiable ?"),
      options: [
        B('Would you pay for a tool that writes all your quotes for you?', 'Paieriez-vous pour un outil qui rédige tous vos devis à votre place ?'),
        B('Tell me about the last quote you sent: what happened next?', "Racontez-moi le dernier devis envoyé : que s'est-il passé ensuite ?"),
        B('Do you think AI will soon change the way plumbers work?', "Pensez-vous que l'IA va bientôt changer le métier de plombier ?"),
      ],
      answer: 1,
      why: B(
        'Only the past is a fact: what he did, how long it took, what followed. Questions about a hypothetical tool or the future invite kind guesses that commit him to nothing.',
        "Seul le passé est un fait : ce qu'il a fait, le temps passé, ce qui a suivi. Un outil hypothétique ou l'avenir appellent des suppositions aimables qui ne l'engagent à rien.",
      ),
    },
    badge: B('Asks about the past', 'Interroge le passé'),
  },
]

const MARKET_ENRICH: Record<string, Enrichment> = {
  [enrichKey(M1, 'bz-value')]: {
    why: [
      B("The AI market can be read as a stack of layers. At the bottom, infrastructure: chips, data centres, cloud. Above it, the foundation models. Then tools and platforms that let others build on those models, applications for end users, and finally services and integration, where someone adapts all of this to one organisation. Each layer has its entry ticket: capital at the bottom, research for models, distribution and trade knowledge near the top.",
        "Le marché de l'IA se lit comme un empilement de couches. En bas, l'infrastructure : puces, centres de données, cloud. Au-dessus, les modèles de fondation. Puis les outils et plateformes pour bâtir sur ces modèles, les applications pour l'utilisateur final, enfin les services et l'intégration, qui adaptent le tout à une organisation. Chaque couche a son ticket d'entrée : le capital en bas, la recherche pour les modèles, la distribution et le métier en haut."),
      B("Value moves as the cycle advances. Each new model generation turns yesterday's feat into a standard feature, so a product whose only asset is calling a model with a good prompt is exposed: the model maker, or a competitor, can offer the same thing tomorrow. What lasts longer is what a model cannot download: knowledge of a trade, access to its customers, its data and context, and the trust of people who already work with you.",
        "La valeur se déplace à mesure que le cycle avance. Chaque génération de modèles fait de l'exploit d'hier une fonction standard : un produit dont le seul atout est d'appeler un modèle avec un bon prompt est exposé, car l'éditeur ou un concurrent peut offrir la même chose demain. Ce qui dure, c'est ce qu'un modèle ne télécharge pas : la connaissance d'un métier, l'accès à ses clients, ses données, la confiance de ceux qui travaillent déjà avec vous."),
      B("This is why the noise around AI misleads beginners twice: it suggests that being early with a technology is enough, and it moves attention to whatever was announced this week. A more useful reading asks two questions of any idea: which layer am I in, and what would remain of my offer if the next model did my core task for free?",
        "C'est pourquoi le bruit autour de l'IA trompe deux fois le débutant : il laisse croire qu'être en avance sur une technologie suffit, et il déplace l'attention vers l'annonce de la semaine. Une lecture plus utile pose deux questions à toute idée : dans quelle couche suis-je, et que resterait-il de mon offre si le prochain modèle faisait gratuitement ma tâche centrale ?"),
    ],
    example: {
      context: B("Nora, a fictional office assistant working full time in a real estate agency, wants to start an AI side business. Her first prompt asks for ideas and gets a list of fashionable apps.",
        "Nora, assistante administrative fictive salariée à plein temps dans une agence immobilière, veut lancer une activité IA à côté. Son premier prompt demande des idées et reçoit une liste d'apps à la mode."),
      before: B("Give me the 10 best AI business ideas for this year.",
        "Donne-moi les 10 meilleures idées de business IA de l'année."),
      after: B("You are helping me analyse where I could capture value in the AI market, not inventing ideas for me.\nMy situation: I work full time as an office assistant in a real estate agency. Every week I deal with building trades firms (plumbers, electricians, painters) who quote for repairs. I have about six hours a week, no coding skills and no savings to invest.\n1. Describe the layers of the AI value chain (infrastructure, models, tools and platforms, applications, services and integration) in two lines each, with what it takes to compete there.\n2. For each layer, tell me whether someone in my situation can realistically occupy it, and why.\n3. For the remaining layers, list three problems of building trades firms that AI could help with. For each one, say what would remain of the offer if the next model did the core task for free.\nDo not give any market figure or income estimate. If you lack information about my situation, ask me.",
        "Tu m'aides à analyser où je pourrais capter de la valeur sur le marché de l'IA, pas à inventer des idées pour moi.\nMa situation : je suis assistante administrative à plein temps dans une agence immobilière. Chaque semaine, je traite avec des artisans du bâtiment (plombiers, électriciens, peintres) qui chiffrent des réparations. J'ai environ six heures par semaine, aucune compétence en code et pas d'épargne à investir.\n1. Décris les couches de la chaîne de valeur de l'IA (infrastructure, modèles, outils et plateformes, applications, services et intégration) en deux lignes chacune, avec ce qu'il faut pour y concourir.\n2. Pour chaque couche, dis-moi si quelqu'un dans ma situation peut réalistement l'occuper, et pourquoi.\n3. Pour les couches restantes, liste trois problèmes des artisans du bâtiment que l'IA pourrait aider à résoudre. Pour chacun, dis ce qui resterait de l'offre si le prochain modèle faisait gratuitement la tâche centrale.\nNe donne aucun chiffre de marché ni estimation de revenu. S'il te manque une information sur ma situation, pose-moi la question."),
      takeaway: B("The first prompt asks for ideas in a vacuum and gets what everyone gets. The second gives a situation, an access to a trade and a durability test, so the answer helps Nora locate herself instead of chasing a fashionable app.",
        "Le premier prompt demande des idées hors sol et obtient ce que tout le monde obtient. Le second donne une situation, un accès à un métier et un test de durabilité : la réponse aide Nora à se situer au lieu de courir après une app à la mode."),
    },
    exercise: {
      goal: B("A one-page map of the AI value chain applied to a sector you know, with the one or two layers you can occupy and the reason why.",
        "Une carte d'une page de la chaîne de valeur de l'IA appliquée à un secteur que vous connaissez, avec la ou les deux couches que vous pouvez occuper et pourquoi."),
      prompt: B("You are helping me locate where I could capture value in the AI market.\nSector I know from the inside: [TRADE OR SECTOR].\nMy situation: [JOB, HOURS PER WEEK AVAILABLE, SKILLS, NETWORK].\nFor each layer of the value chain (infrastructure, models, tools and platforms, applications, services and integration), give: what it takes to compete there, whether I can realistically occupy it, and why.\nThen propose three positions in the accessible layers. For each one, answer: what would remain of it if the next model did the core task for free?\nNo market figures, no income promises. Ask me if something is missing.",
        "Tu m'aides à repérer où je pourrais capter de la valeur sur le marché de l'IA.\nSecteur que je connais de l'intérieur : [MÉTIER OU SECTEUR].\nMa situation : [EMPLOI, HEURES DISPONIBLES PAR SEMAINE, COMPÉTENCES, RÉSEAU].\nPour chaque couche de la chaîne de valeur (infrastructure, modèles, outils et plateformes, applications, services et intégration), donne : ce qu'il faut pour y concourir, si je peux réalistement l'occuper, et pourquoi.\nPropose ensuite trois positions dans les couches accessibles. Pour chacune, réponds : que resterait-il si le prochain modèle faisait gratuitement la tâche centrale ?\nAucun chiffre de marché, aucune promesse de revenu. Pose-moi la question s'il manque quelque chose."),
      check: [
        B("Each layer has an entry ticket stated, not just a name", "Chaque couche a un ticket d'entrée énoncé, pas seulement un nom"),
        B("The layers you kept rely on something you have: a trade, a network, data", "Les couches retenues s'appuient sur ce que vous avez : un métier, un réseau, des données"),
        B("Each position passed the next model test with a concrete answer", "Chaque position a passé le test du prochain modèle avec une réponse concrète"),
        B("No figure in the answer was presented as a fact without a source", "Aucun chiffre de la réponse n'a été présenté comme un fait sans source"),
      ],
      bonus: B("Read the latest product announcement of a major model maker. List the small products it could make redundant, and ask what those products lacked that would have protected them.",
        "Lisez la dernière annonce de produit d'un grand éditeur de modèles. Listez les petits produits qu'elle pourrait rendre inutiles, et demandez-vous ce qui leur manquait pour être protégés."),
    },
    more: [
      { q: B("An app that rewrites emails more politely gains users, then a model maker adds the same feature for free. What did the app lack?",
          "Une app qui rend les emails plus polis gagne des utilisateurs, puis un éditeur de modèles offre la même fonction. Que lui manquait-il ?"),
        options: [
          B("A more modern design and a wider choice of colour themes", "Un design plus moderne et un plus grand choix de thèmes de couleur"),
          B("Something a model cannot copy: customers, data, a trade", "Ce qu'un modèle ne copie pas : des clients, des données, un métier"),
          B("A higher price, which would have signalled a better quality", "Un prix plus élevé, qui aurait signalé une meilleure qualité"),
        ],
        answer: 1,
        why: B("Its only asset was a capability of the model, which the model maker could offer directly. Access to a trade, its data or its customers is what a new feature does not replace.",
          "Son seul atout était une capacité du modèle, que l'éditeur pouvait offrir directement. L'accès à un métier, à ses données ou à ses clients est ce qu'une nouvelle fonction ne remplace pas.") },
      { q: B("Which question best tests whether an AI business idea will last?",
          "Quelle question teste le mieux si une idée de business IA va durer ?"),
        options: [
          B("Was the technology behind it announced less than a month ago?", "La technologie qui la porte a-t-elle été annoncée il y a moins d'un mois ?"),
          B("Are well-known creators talking about it on social networks?", "Des créateurs connus en parlent-ils sur les réseaux sociaux ?"),
          B("What survives if a new model does the core task for free?", "Que reste-t-il si un nouveau modèle fait gratuitement la tâche centrale ?"),
        ],
        answer: 2,
        why: B("Novelty and attention fade quickly and say nothing about durability. Imagining the core task given away for free reveals what really carries the offer: a trade, access, data or trust.",
          "La nouveauté et l'attention retombent vite et ne disent rien de la durée. Imaginer la tâche centrale offerte gratuitement révèle ce qui porte vraiment l'offre : un métier, un accès, des données ou la confiance.") },
    ],
  },

  [enrichKey(M1, 'bz-models')]: {
    why: [
      B("Seven models cover most of what independents do with AI. Freelance sells hours of a skill. A productised service sells a fixed result at a fixed price, with a defined scope. An agency resells the work of a team. A SaaS or micro-SaaS sells access to software by subscription. Templates and digital products sell one file to many buyers. Training sells a learning path, and consulting sells a judgement on one client's situation.",
        "Sept modèles couvrent l'essentiel de ce que font les indépendants avec l'IA. Le freelance vend des heures d'une compétence. Le service productisé vend un résultat fixe à prix fixe, au périmètre défini. L'agence revend le travail d'une équipe. Le SaaS ou micro-SaaS vend l'accès à un logiciel par abonnement. Modèles et produits numériques vendent un fichier à beaucoup d'acheteurs. La formation vend un parcours, le conseil un jugement sur un cas."),
      B("These models differ less by prestige than by four variables: time before the first payment, work required before selling, link between income and hours worked, and the risk of building something nobody buys. Freelance and productised services pay quickly but tie income to time; SaaS and digital products loosen that link, at the cost of months of upfront work and an audience to sell to.",
        "Ces modèles diffèrent moins par leur prestige que par quatre variables : le délai avant le premier paiement, le travail exigé avant de vendre, le lien entre revenu et heures travaillées, et le risque de construire ce que personne n'achète. Freelance et service productisé paient vite mais lient le revenu au temps ; SaaS et produits numériques desserrent ce lien, au prix de mois de travail préalable et d'une audience à qui vendre."),
      B("A prudent path moves along these models in sequence: sell a service by hand, notice what repeats, standardise it into a productised service, then automate or package part of it. Starting directly at the end of the sequence skips the step where you learn what customers actually pay for.",
        "Un chemin prudent parcourt ces modèles dans l'ordre : vendre un service à la main, repérer ce qui se répète, le standardiser en service productisé, puis en automatiser ou en empaqueter une partie. Commencer directement par la fin saute l'étape où l'on apprend ce pour quoi les clients paient vraiment."),
    ],
    example: {
      context: B("Nora asks an AI which business model is 'the most profitable' and receives an enthusiastic plea for SaaS and passive income.",
        "Nora demande à une IA quel modèle économique est « le plus rentable » et reçoit un plaidoyer enthousiaste pour le SaaS et les revenus passifs."),
      before: B("What is the most profitable AI business model? I want passive income.",
        "Quel est le modèle de business IA le plus rentable ? Je veux des revenus passifs."),
      after: B("Act as a sceptical advisor, not a cheerleader.\nMy constraints: full-time job, about six hours a week, no savings to invest, no coding skills, good at organising and writing, I know building trades firms through my work.\nCompare these models for my situation: freelance, productised service, agency, SaaS or micro-SaaS, templates and digital products, training, consulting.\nFor each one, give in a table: time before the first payment, work needed before selling, link between income and hours, main risk for me.\nThen keep two models and explain, for each, the condition that would make me switch to the other.\nNo income figures and no promise of passive income: if a model depends on an audience I do not have, say so.",
        "Joue un conseiller sceptique, pas un supporter.\nMes contraintes : emploi à plein temps, environ six heures par semaine, pas d'épargne à investir, aucune compétence en code, à l'aise pour organiser et rédiger, je connais des artisans du bâtiment par mon travail.\nCompare ces modèles pour ma situation : freelance, service productisé, agence, SaaS ou micro-SaaS, modèles et produits numériques, formation, conseil.\nPour chacun, donne dans un tableau : délai avant le premier paiement, travail nécessaire avant de vendre, lien entre revenu et heures, principal risque pour moi.\nGarde ensuite deux modèles et explique, pour chacun, la condition qui me ferait passer à l'autre.\nAucun chiffre de revenu ni promesse de revenus passifs : si un modèle dépend d'une audience que je n'ai pas, dis-le."),
      takeaway: B("The first prompt asks for a ranking that does not exist and invites a sales pitch. The second gives constraints and criteria, so the comparison becomes a decision Nora can defend: a productised service now, a template later if the same request repeats.",
        "Le premier prompt demande un classement inexistant et appelle un discours de vente. Le second donne contraintes et critères : la comparaison devient une décision défendable, un service productisé maintenant, un modèle à vendre si la demande se répète."),
    },
    exercise: {
      goal: B("A comparison table of the seven models scored against your constraints, and two models kept, each with a switching condition.",
        "Un tableau comparatif des sept modèles notés selon vos contraintes, et deux modèles retenus, chacun avec sa condition de bascule."),
      prompt: B("Act as a sceptical advisor.\nMy constraints: [JOB AND HOURS PER WEEK], [SAVINGS AVAILABLE OR NOT], [SKILLS], [AUDIENCE OR NETWORK I ALREADY HAVE].\nCompare for my situation: freelance, productised service, agency, SaaS or micro-SaaS, templates and digital products, training, consulting.\nTable columns: time before the first payment, work before selling, link between income and hours, main risk for me, score from 1 to 5.\nKeep two models and give, for each, the signal that would make me switch to the other.\nNo income figures and no promises.",
        "Joue un conseiller sceptique.\nMes contraintes : [EMPLOI ET HEURES PAR SEMAINE], [ÉPARGNE DISPONIBLE OU NON], [COMPÉTENCES], [AUDIENCE OU RÉSEAU QUE J'AI DÉJÀ].\nCompare pour ma situation : freelance, service productisé, agence, SaaS ou micro-SaaS, modèles et produits numériques, formation, conseil.\nColonnes du tableau : délai avant le premier paiement, travail avant de vendre, lien entre revenu et heures, principal risque pour moi, note de 1 à 5.\nGarde deux modèles et donne, pour chacun, le signal qui me ferait passer à l'autre.\nAucun chiffre de revenu et aucune promesse."),
      check: [
        B("Your constraints were written before the comparison, not after", "Vos contraintes ont été écrites avant la comparaison, pas après"),
        B("Each model has a main risk stated for your own situation", "Chaque modèle a un risque principal énoncé pour votre situation"),
        B("The two models kept each have a concrete switching signal", "Les deux modèles retenus ont chacun un signal de bascule concret"),
        B("No income figure or promise slipped into the answer", "Aucun chiffre de revenu ni promesse ne s'est glissé dans la réponse"),
      ],
      bonus: B("Find three independents in your niche who describe publicly how they work, and place each one on the seven models. Note whether they started with the model they use today.",
        "Trouvez trois indépendants de votre niche qui décrivent publiquement leur façon de travailler, et placez chacun sur les sept modèles. Notez s'ils ont commencé par le modèle qu'ils pratiquent aujourd'hui."),
    },
    more: [
      { q: B("A designer sells 'logo and brand kit in five days, fixed price, two rounds of changes'. Which model is it?",
          "Une graphiste vend « logo et charte en cinq jours, prix fixe, deux séries de retouches ». De quel modèle s'agit-il ?"),
        options: [
          B("Freelance billed by the hour, as for any creative job", "Du freelance facturé à l'heure, comme tout métier créatif"),
          B("A productised service: fixed scope, price and delay", "Un service productisé : périmètre, prix et délai fixes"),
          B("A digital product, since the kit is delivered as files", "Un produit numérique, puisque la charte est livrée en fichiers"),
        ],
        answer: 1,
        why: B("Scope, price and delay are set in advance and identical for every client: that is a productised service. It is still made for each client, which distinguishes it from a product sold as is.",
          "Le périmètre, le prix et le délai sont fixés à l'avance et identiques pour chaque client : c'est un service productisé. Il reste réalisé pour chaque client, ce qui le distingue d'un produit vendu tel quel.") },
      { q: B("Why can a template shop be a poor first model for someone with no audience?",
          "Pourquoi une boutique de modèles à télécharger peut-elle être un mauvais premier choix sans audience ?"),
        options: [
          B("Sales depend on reaching many buyers she cannot reach yet", "Les ventes exigent de toucher beaucoup d'acheteurs encore hors de portée"),
          B("A template file can only ever be sold to a single buyer", "Un fichier de modèle ne peut se vendre qu'à un seul acheteur"),
          B("Selling templates first requires a registered limited company", "Vendre des modèles exige d'abord une société à responsabilité limitée"),
        ],
        answer: 0,
        why: B("A digital product earns little per sale, so it needs many buyers, and without an audience nobody sees it. A service needs only a few customers, who can be reached one by one.",
          "Un produit numérique rapporte peu par vente : il lui faut beaucoup d'acheteurs, et sans audience personne ne le voit. Un service n'a besoin que de quelques clients, que l'on peut joindre un par un.") },
    ],
  },

  [enrichKey(M1, 'bz-niche')]: {
    why: [
      B("A market is a broad set of people with a type of need; a niche is a smaller group, defined precisely enough that you can find them, speak their language and be recommended among them. 'Small businesses' is a market. 'Building trades firms of fewer than five people in one area, who quote every week' is a niche: you know where they are, what their week looks like and which words they use.",
        "Un marché est un vaste ensemble de personnes qui ont un type de besoin ; une niche est un groupe plus petit, défini assez précisément pour qu'on puisse le trouver, parler sa langue et y être recommandé. « Les petites entreprises » est un marché. « Les artisans du bâtiment de moins de cinq personnes d'une région, qui chiffrent chaque semaine » est une niche : on sait où ils sont, à quoi ressemble leur semaine et quels mots ils emploient."),
      B("Four criteria make a niche workable for a beginner: access (can you reach twenty of them this month), pain (does the problem cost them time, money or sleep), ability to pay (do they already pay for tools or help), and edge (do you know the trade better than an outsider). A niche strong on three criteria and weak on access is a trap: you will never get the conversations you need.",
        "Quatre critères rendent une niche praticable pour un débutant : l'accès (pouvez-vous en joindre vingt ce mois-ci), la douleur (le problème leur coûte-t-il du temps, de l'argent ou du sommeil), la capacité à payer (paient-ils déjà des outils ou de l'aide), et l'avantage (connaissez-vous le métier mieux qu'un inconnu). Une niche forte sur trois critères mais faible sur l'accès est un piège : vous n'obtiendrez jamais les conversations nécessaires."),
      B("Choosing a niche is a bet with a deadline, not a lifelong identity. Committing for a fixed period, with the signal that would make you change, protects you from two opposite errors: hopping to a new niche every week, and staying for years in a niche that never answered.",
        "Choisir une niche est un pari à échéance, pas une identité pour la vie. S'engager pour une durée fixée, avec le signal qui ferait changer, protège de deux erreurs opposées : sauter de niche en niche chaque semaine, et rester des années dans une niche qui n'a jamais répondu."),
    ],
    example: {
      context: B("Nora asks an AI to 'find a profitable niche' and gets a list of trendy sectors she has no link with and no way to reach.",
        "Nora demande à une IA de « trouver une niche rentable » et reçoit une liste de secteurs à la mode avec lesquels elle n'a aucun lien ni moyen de contact."),
      before: B("Find me a profitable niche for an AI business.",
        "Trouve-moi une niche rentable pour un business IA."),
      after: B("You are helping me choose a niche, not inventing one.\nCandidates I can reach: building trades firms that quote for our real estate agency, independent property managers, small cleaning companies, local estate agents, accounting firms in my town.\nFor each, score from 1 to 5: access (can I talk to twenty of them this month), pain (cost of the problem for them), ability to pay (do they already pay for tools or help), my edge (do I know their trade).\nJustify each score in one sentence, and say what you are guessing rather than knowing.\nThen argue against my highest-scoring niche as strongly as you can.\nNo market figures.",
        "Tu m'aides à choisir une niche, pas à en inventer une.\nCandidates que je peux joindre : les artisans du bâtiment qui chiffrent pour notre agence immobilière, les gestionnaires de biens indépendants, les petites entreprises de nettoyage, les agents immobiliers locaux, les cabinets comptables de ma ville.\nPour chacune, note de 1 à 5 : accès (puis-je parler à vingt d'entre eux ce mois-ci), douleur (coût du problème pour eux), capacité à payer (paient-ils déjà des outils ou de l'aide), mon avantage (est-ce que je connais leur métier).\nJustifie chaque note en une phrase, et dis ce que tu devines plutôt que ce que tu sais.\nPlaide ensuite contre ma niche la mieux notée, aussi fort que possible.\nAucun chiffre de marché."),
      takeaway: B("The first prompt hands the choice to a model that knows nothing of Nora's access. The second scores her real candidates on explicit criteria and asks for counter-arguments, so the AI supports a choice she can then check in the field.",
        "Le premier prompt confie le choix à un modèle qui ignore tout des accès de Nora. Le second note ses vraies candidates sur des critères explicites et demande des contre-arguments : l'IA soutient un choix qu'elle vérifiera ensuite sur le terrain."),
    },
    exercise: {
      goal: B("Five candidate niches scored on four criteria, one chosen for a fixed period, with the signal that would make you change.",
        "Cinq niches candidates notées sur quatre critères, une choisie pour une durée fixée, avec le signal qui vous ferait changer."),
      prompt: B("You are helping me choose a niche.\nFive candidates written as 'who + situation': [NICHE 1], [NICHE 2], [NICHE 3], [NICHE 4], [NICHE 5].\nWhat I know about each one: [LINK, CONTACTS, KNOWLEDGE OF THE TRADE].\nScore each from 1 to 5 on access, pain, ability to pay and my edge, with one sentence per score and what you are guessing.\nArgue against the top niche.\nThen write my commitment: the niche, the period ([NUMBER OF WEEKS]) and the signal that would make me change before the end.",
        "Tu m'aides à choisir une niche.\nCinq candidates écrites sous la forme « qui + situation » : [NICHE 1], [NICHE 2], [NICHE 3], [NICHE 4], [NICHE 5].\nCe que je sais de chacune : [LIEN, CONTACTS, CONNAISSANCE DU MÉTIER].\nNote chacune de 1 à 5 sur l'accès, la douleur, la capacité à payer et mon avantage, avec une phrase par note et ce que tu devines.\nPlaide contre la niche la mieux notée.\nRédige ensuite mon engagement : la niche, la durée ([NOMBRE DE SEMAINES]) et le signal qui me ferait changer avant la fin."),
      check: [
        B("Each niche is written as who + situation, not as a sector", "Chaque niche est écrite en qui + situation, pas comme un secteur"),
        B("Access was scored on names you could actually contact", "L'accès a été noté sur des noms que vous pourriez vraiment contacter"),
        B("You checked at least one AI objection with a person of the trade", "Vous avez vérifié au moins une objection de l'IA auprès d'une personne du métier"),
        B("The commitment has a period and a change signal", "L'engagement a une durée et un signal de changement"),
      ],
      bonus: B("List twenty names in your chosen niche that you could contact this month. If you cannot reach twenty, the access score was too generous: revise it before going further.",
        "Listez vingt noms de votre niche que vous pourriez contacter ce mois-ci. Si vous n'en atteignez pas vingt, la note d'accès était trop généreuse : révisez-la avant d'aller plus loin."),
    },
    more: [
      { q: B("Two niches score equally, but in one of them Nora knows nobody. What should decide?",
          "Deux niches obtiennent la même note, mais dans l'une Nora ne connaît personne. Qu'est-ce qui doit trancher ?"),
        options: [
          B("Where she can talk to people this month", "Celle où elle peut parler à des gens ce mois-ci"),
          B("The one with the most fashionable name online", "Celle dont le nom est le plus à la mode en ligne"),
          B("The one an AI ranked first in a generic list", "Celle qu'une IA a classée première dans une liste générique"),
        ],
        answer: 0,
        why: B("Everything that follows, interviews, tests and first sales, depends on conversations. A niche where she can talk to people this month lets her learn quickly; the other one stays theoretical.",
          "Tout ce qui suit, entretiens, tests et premières ventes, dépend des conversations. Une niche où elle peut parler à des gens ce mois-ci lui permet d'apprendre vite ; l'autre reste théorique.") },
      { q: B("Which of these is a niche rather than a market?",
          "Lequel de ces publics est une niche plutôt qu'un marché ?"),
        options: [
          B("Small and medium businesses across the whole of France", "Les petites et moyennes entreprises de toute la France"),
          B("Companies that want to use more artificial intelligence", "Les entreprises qui veulent utiliser davantage l'intelligence artificielle"),
          B("Small plumbing firms in one region who quote weekly", "Les petites entreprises de plomberie d'une région qui chiffrent chaque semaine"),
        ],
        answer: 2,
        why: B("A niche names who, in which situation, and where: you can list them and visit them. The other two are broad markets with no common situation or channel.",
          "Une niche nomme qui, dans quelle situation, et où : on peut en dresser la liste et aller les voir. Les deux autres sont des marchés larges, sans situation ni canal communs.") },
    ],
  },

  [enrichKey(M1, 'bz-interviews')]: {
    why: [
      B("People are poor predictors of their own future behaviour, and kind to those who ask them. Ask 'would you use this?' and most will say yes so as not to disappoint you. The Mom Test, a short book by Rob Fitzpatrick, draws simple rules from this: talk about their life rather than your idea, ask about specifics in the past rather than generalities or the future, and listen far more than you speak.",
        "Les gens prévoient mal leur propre comportement futur, et sont aimables avec ceux qui les interrogent. Demandez « utiliseriez-vous ceci ? » et la plupart diront oui pour ne pas vous décevoir. The Mom Test, un court livre de Rob Fitzpatrick, en tire des règles simples : parler de leur vie plutôt que de votre idée, interroger sur des faits passés précis plutôt que sur des généralités ou l'avenir, et écouter bien plus que parler."),
      B("A good interview collects facts: the last time the problem happened, what it cost, what they did about it, what they already pay for or tried. If someone has never tried to solve a problem, it is probably not painful enough to buy a solution. Compliments ('great idea') and hypothetical promises ('I would buy that') are noise; a commitment of time, reputation or money is a signal.",
        "Un bon entretien recueille des faits : la dernière fois que le problème s'est produit, ce qu'il a coûté, ce qu'ils ont fait, ce qu'ils paient ou ont déjà essayé. Si quelqu'un n'a jamais tenté de résoudre un problème, il n'est sans doute pas assez douloureux pour acheter une solution. Les compliments (« super idée ») et les promesses hypothétiques (« j'achèterais ») sont du bruit ; un engagement de temps, de réputation ou d'argent est un signal."),
      B("AI helps around the interview, not in it: preparing a guide, spotting leading questions, summarising notes and finding patterns across several conversations. It must not replace the conversations, and its patterns must be checked against the exact quotes, because a summary easily turns one person's remark into a trend.",
        "L'IA aide autour de l'entretien, pas pendant : préparer un guide, repérer les questions orientées, résumer les notes et trouver les tendances de plusieurs conversations. Elle ne remplace pas les conversations, et ses tendances se vérifient contre les citations exactes, car un résumé transforme facilement la remarque d'une seule personne en tendance."),
    ],
    example: {
      context: B("Nora prepares her first interviews with building trades firms and asks an AI for a questionnaire. She gets a list of questions about her future product.",
        "Nora prépare ses premiers entretiens avec des artisans du bâtiment et demande un questionnaire à une IA. Elle obtient une liste de questions sur son futur produit."),
      before: B("Write 10 questions to ask tradespeople whether they would buy my AI quote tool.",
        "Écris 10 questions pour demander à des artisans s'ils achèteraient mon outil IA de devis."),
      after: B("You are helping me prepare customer interviews following Mom Test principles: we talk about their life and about specific past events, and I do not present my idea.\nInterviewees: owners of small building trades firms (plumbing, electricity, painting) who send quotes every week.\nWrite a 20-minute guide: an opening, eight questions about the last quotes they wrote and sent (how, when, how long, what happened next, what they tried to improve it), and a closing that asks for the name of a colleague I could talk to.\nFor each question, explain in one line which fact it is meant to collect.\nThen list three questions I must avoid because they ask for opinions or predictions, and rewrite each one as a question about the past.",
        "Tu m'aides à préparer des entretiens clients selon les principes du Mom Test : on parle de leur vie et de faits passés précis, et je ne présente pas mon idée.\nPersonnes interrogées : des patrons de petites entreprises du bâtiment (plomberie, électricité, peinture) qui envoient des devis chaque semaine.\nRédige un guide de 20 minutes : une ouverture, huit questions sur les derniers devis rédigés et envoyés (comment, quand, combien de temps, ce qui a suivi, ce qu'ils ont tenté pour améliorer), et une conclusion qui demande le nom d'un confrère à qui parler.\nPour chaque question, explique en une ligne quel fait elle doit recueillir.\nListe ensuite trois questions à éviter parce qu'elles demandent des avis ou des prédictions, et réécris chacune en question sur le passé."),
      takeaway: B("The first prompt produces a sales survey that collects polite yeses. The second produces a guide about past behaviour, with the purpose of each question and the forbidden questions rewritten: Nora will come back with facts she can compare across interviews.",
        "Le premier prompt produit un sondage de vente qui recueille des oui polis. Le second produit un guide sur le passé, avec le but de chaque question et les questions interdites réécrites : Nora reviendra avec des faits comparables d'un entretien à l'autre."),
    },
    exercise: {
      goal: B("A 20-minute interview guide about the past, five interviews held, and notes sorted into facts, opinions, compliments and commitments.",
        "Un guide d'entretien de 20 minutes sur le passé, cinq entretiens menés, et des notes triées en faits, avis, compliments et engagements."),
      prompt: B("Part 1, before the interviews:\nPrepare a 20-minute interview guide following Mom Test principles for [WHO YOU INTERVIEW] about [THE PART OF THEIR WORK YOU SUSPECT IS PAINFUL]. Questions about specific past events only, no presentation of my idea, and a closing that asks for another contact.\nPart 2, after the interviews:\nHere are my raw notes: [NOTES OF FIVE INTERVIEWS].\nSort each statement into fact, opinion, compliment or commitment. Then list the patterns that appear in at least three interviews, each with the exact quotes that support it. Say clearly when a pattern rests on a single person.",
        "Partie 1, avant les entretiens :\nPrépare un guide d'entretien de 20 minutes selon les principes du Mom Test pour [QUI VOUS INTERROGEZ] au sujet de [LA PARTIE DE LEUR TRAVAIL QUE VOUS SUPPOSEZ DOULOUREUSE]. Uniquement des questions sur des faits passés précis, aucune présentation de mon idée, et une conclusion qui demande un autre contact.\nPartie 2, après les entretiens :\nVoici mes notes brutes : [NOTES DES CINQ ENTRETIENS].\nClasse chaque phrase en fait, avis, compliment ou engagement. Liste ensuite les tendances présentes dans au moins trois entretiens, chacune avec les citations exactes qui l'appuient. Signale clairement quand une tendance repose sur une seule personne."),
      check: [
        B("No question of your guide mentions your idea or the future", "Aucune question de votre guide ne mentionne votre idée ou l'avenir"),
        B("Each pattern comes with at least two exact quotes", "Chaque tendance s'appuie sur au moins deux citations exactes"),
        B("You can name one past action each interviewee took about the problem", "Vous pouvez citer une action passée de chaque personne face au problème"),
        B("You asked for a new contact at the end of each interview", "Vous avez demandé un nouveau contact à la fin de chaque entretien"),
      ],
      bonus: B("Reread one interview, or listen to it if the person agreed to be recorded, and estimate how long you spoke compared with them. If you spoke more than a third of the time, shorten the questions of your guide.",
        "Relisez un entretien, ou réécoutez-le si la personne a accepté l'enregistrement, et estimez votre temps de parole face au sien. Si vous avez parlé plus d'un tiers du temps, raccourcissez les questions de votre guide."),
    },
    more: [
      { q: B("An electrician says: 'Great idea, I would definitely use it!' How should Nora record it?",
          "Un électricien déclare : « Super idée, je l'utiliserais à coup sûr ! » Comment Nora doit-elle le noter ?"),
        options: [
          B("As a strong buying signal to put first in her notes file", "Comme un fort signal d'achat, à placer en tête de ses notes"),
          B("As a compliment: pleasant, but not evidence of anything", "Comme un compliment : agréable, mais sans valeur de preuve"),
          B("As a firm commitment, since he said 'definitely'", "Comme un engagement ferme, puisqu'il a dit « à coup sûr »"),
        ],
        answer: 1,
        why: B("Enthusiasm about an idea costs nothing and predicts little. A commitment would cost him something: time for a test, an introduction to a colleague, or a payment.",
          "L'enthousiasme pour une idée ne coûte rien et prédit peu. Un engagement lui coûterait quelque chose : du temps pour un essai, une mise en relation avec un confrère, ou un paiement.") },
      { q: B("Which outcome of an interview is the strongest signal for Nora?",
          "Quelle issue d'entretien est le signal le plus fort pour Nora ?"),
        options: [
          B("The painter books a slot to show her his last quotes", "Le peintre fixe un rendez-vous pour lui montrer ses derniers devis"),
          B("The painter says he finds the whole idea very interesting", "Le peintre dit trouver l'idée dans son ensemble très intéressante"),
          B("The painter thinks other trades might need it even more", "Le peintre pense que d'autres métiers en auraient encore plus besoin"),
        ],
        answer: 0,
        why: B("Booking time and opening his documents are commitments: they cost him something and give Nora real material. Interest and opinions about others commit him to nothing.",
          "Réserver du temps et ouvrir ses documents sont des engagements : ils lui coûtent quelque chose et donnent à Nora une matière réelle. L'intérêt et les avis sur les autres ne l'engagent à rien.") },
    ],
  },
}

const MARKET_DEEP: Record<string, Deepening> = {
  [deepKey(M1, 'bz-value')]: {
    intro: B("Before choosing what to sell, you need to know where you stand. This lesson describes the AI market as a chain of layers, from infrastructure to services, and explains why value does not stay where attention is. You will learn to recognise positions exposed to the next model update, and positions that rest on what a model cannot download: a trade, customers, data and trust. You will meet Nora, a fictional office assistant working full time, who runs through the course, and you will be able to place your own idea on the chain and justify it.",
      "Avant de choisir quoi vendre, il faut savoir où l'on se trouve. Ce cours décrit le marché de l'IA comme une chaîne de couches, de l'infrastructure aux services, et explique pourquoi la valeur ne reste pas là où se porte l'attention. Vous apprendrez à reconnaître les positions exposées à la prochaine mise à jour des modèles, et celles qui reposent sur ce qu'un modèle ne télécharge pas : un métier, des clients, des données et la confiance. Vous rencontrerez Nora, assistante administrative fictive salariée à plein temps, fil rouge de la formation, et vous saurez placer votre propre idée sur la chaîne et la justifier."),
    concepts: [
      { term: B('Value chain', 'Chaîne de valeur'),
        def: B("The sequence of layers that turn resources into something a customer pays for: infrastructure, models, tools and platforms, applications, services and integration.",
          "La suite des couches qui transforment des ressources en ce qu'un client paie : infrastructure, modèles, outils et plateformes, applications, services et intégration.") },
      { term: B('Commoditisation', 'Banalisation'),
        def: B("The process by which a rare capability becomes standard and cheap. In AI, each model generation commoditises some of what the previous one made special.",
          "Le processus par lequel une capacité rare devient standard et bon marché. En IA, chaque génération de modèles banalise une partie de ce que la précédente rendait exceptionnel.") },
      { term: B('Wrapper', 'Surcouche (wrapper)'),
        def: B("A product whose main content is a call to someone else's model with a prompt and an interface. Useful to start, fragile when it has nothing else.",
          "Un produit dont l'essentiel est l'appel au modèle d'un autre, avec un prompt et une interface. Utile pour démarrer, fragile s'il n'a rien d'autre.") },
      { term: B('Defensible asset', 'Atout défendable'),
        def: B("What protects an offer when the technology becomes common: knowledge of a trade, access to customers, specific data, trust, the way the service is delivered.",
          "Ce qui protège une offre quand la technologie se banalise : la connaissance d'un métier, l'accès aux clients, des données propres, la confiance, la manière de livrer le service.") },
      { term: B('Hype cycle', 'Cycle de la hype'),
        def: B("A model popularised by the firm Gartner, describing how attention to a technology rises, falls back, then settles with real uses. It describes attention, not value.",
          "Un modèle popularisé par le cabinet Gartner, qui décrit comment l'attention portée à une technologie monte, retombe, puis se stabilise avec des usages réels. Il décrit l'attention, pas la valeur.") },
    ],
    walkthrough: {
      title: B("Nora maps the AI value chain for the building trades firms she meets every week at the real estate agency.",
        "Nora cartographie la chaîne de valeur de l'IA pour les artisans du bâtiment qu'elle croise chaque semaine à l'agence immobilière."),
      steps: [
        B("She draws five layers on a page and writes, for each, the entry ticket: capital for infrastructure, research teams for models, developers for platforms, distribution for applications, trade knowledge for services. Why: seeing the tickets side by side shows immediately which layers are closed to her.",
          "Elle dessine cinq couches sur une page et écrit, pour chacune, le ticket d'entrée : capital pour l'infrastructure, équipes de recherche pour les modèles, développeurs pour les plateformes, distribution pour les applications, connaissance du métier pour les services. Pourquoi : voir les tickets côte à côte montre aussitôt les couches qui lui sont fermées."),
        B("She crosses out infrastructure, models and platforms, then hesitates on applications: a general quote generator app. Why: hesitating is useful; it is the layer where many beginners rush, and the one most exposed to the next model.",
          "Elle raye l'infrastructure, les modèles et les plateformes, puis hésite sur les applications : une app généraliste de génération de devis. Pourquoi : l'hésitation est utile ; c'est la couche où se précipitent beaucoup de débutants, et la plus exposée au prochain modèle."),
        B("She applies the next model test: if a mainstream assistant drafted quotes for free tomorrow, her app would lose its reason to exist. Why: the test turns a vague worry into a concrete question she can answer today.",
          "Elle applique le test du prochain modèle : si un assistant grand public rédigeait gratuitement des devis demain, son app perdrait sa raison d'être. Pourquoi : le test transforme une inquiétude vague en question concrète, à laquelle elle peut répondre dès aujourd'hui."),
        B("She looks at the services layer and lists what she has that a model lacks: she knows how these firms work, she can meet them, and they already trust the agency. Why: these assets do not come with a model update.",
          "Elle regarde la couche des services et liste ce qu'elle a et qu'un modèle n'a pas : elle sait comment travaillent ces artisans, elle peut les rencontrer, et ils font déjà confiance à l'agence. Pourquoi : ces atouts ne viennent pas avec une mise à jour de modèle."),
        B("She writes her position in one sentence: a service for small building trades firms, using AI tools inside their daily routine. Why: a written position can be tested in the next lessons, and abandoned if the facts contradict it.",
          "Elle écrit sa position en une phrase : un service pour les petits artisans du bâtiment, qui met des outils IA dans leur routine quotidienne. Pourquoi : une position écrite se teste dans les cours suivants, et s'abandonne si les faits la contredisent."),
      ],
    },
    mistakes: [
      { wrong: B("Choosing a layer because it is the one everyone talks about this month.",
          "Choisir une couche parce que c'est celle dont tout le monde parle ce mois-ci."),
        fix: B("Choose the layer whose entry ticket you hold: a trade, a network, data. Attention moves every week; your assets stay.",
          "Choisissez la couche dont vous détenez le ticket d'entrée : un métier, un réseau, des données. L'attention se déplace chaque semaine ; vos atouts restent.") },
      { wrong: B("Treating a well-crafted prompt as a lasting competitive advantage.",
          "Considérer un prompt bien écrit comme un avantage concurrentiel durable."),
        fix: B("A prompt can be copied or made useless by the next model. Build around it what cannot be copied: the relationship with customers, their context, your delivery.",
          "Un prompt se copie, ou devient inutile avec le prochain modèle. Construisez autour ce qui ne se copie pas : la relation client, leur contexte, votre façon de livrer.") },
      { wrong: B("Reading market forecasts and growth figures as a promise for your own business.",
          "Lire les prévisions de marché et les chiffres de croissance comme une promesse pour votre propre activité."),
        fix: B("A growing market says nothing about whether your customers will pay you. Only conversations and sales in your niche answer that question.",
          "Un marché en croissance ne dit rien de la décision de vos clients de vous payer. Seules les conversations et les ventes dans votre niche répondent à cette question.") },
    ],
    recap: [
      B("The AI market is a chain of layers, each with its own entry ticket.", "Le marché de l'IA est une chaîne de couches, chacune avec son ticket d'entrée."),
      B("Each model generation commoditises part of what the previous one made special.", "Chaque génération de modèles banalise une partie de ce que la précédente rendait exceptionnel."),
      B("What lasts is what a model cannot download: a trade, access, data, trust.", "Ce qui dure est ce qu'un modèle ne télécharge pas : un métier, un accès, des données, la confiance."),
      B("The next model test asks what remains if the core task becomes free.", "Le test du prochain modèle demande ce qui reste si la tâche centrale devient gratuite."),
    ],
    further: B("Pick three AI products you or people around you used a year ago, and check what became of them: still sold, absorbed into a bigger tool, or gone. For each, note its layer and what it relied on. This small retrospective trains your reading better than any forecast.",
      "Choisissez trois produits IA que vous ou votre entourage utilisiez il y a un an, et vérifiez ce qu'ils sont devenus : toujours vendus, absorbés par un outil plus grand, ou disparus. Pour chacun, notez sa couche et ce sur quoi il reposait. Cette petite rétrospective exerce votre lecture mieux qu'une prévision."),
    more: [
      { q: B("Nora hesitates between a general quote app and a service for the firms she knows. Which argument should weigh most?",
          "Nora hésite entre une app de devis généraliste et un service pour les artisans qu'elle connaît. Quel argument doit peser le plus ?"),
        options: [
          B("An app looks more modern and impresses friends and family more", "Une app paraît plus moderne et impressionne davantage l'entourage"),
          B("Her access to the firms is something a new model does not bring", "Son accès aux artisans est une chose qu'un nouveau modèle n'apporte pas"),
          B("A service can never be partly automated later on", "Un service ne peut jamais être automatisé en partie plus tard"),
        ],
        answer: 1,
        why: B("The general app competes with every mainstream assistant. Her access to firms and her knowledge of their work are assets a model update cannot replicate, and a service can be automated step by step later.",
          "L'app généraliste concurrence tous les assistants grand public. Son accès aux artisans et sa connaissance de leur travail sont des atouts qu'une mise à jour de modèle ne reproduit pas, et un service s'automatise peu à peu ensuite.") },
      { q: B("What does the hype cycle describe, and what does it not describe?",
          "Que décrit le cycle de la hype, et que ne décrit-il pas ?"),
        options: [
          B("It describes the profits of companies in each layer of the market", "Il décrit les profits des entreprises de chaque couche du marché"),
          B("It describes which business model will succeed for independents", "Il décrit quel modèle économique réussira aux indépendants"),
          B("It describes attention to a technology, not where value is captured", "Il décrit l'attention portée à une technologie, pas où se capte la valeur"),
        ],
        answer: 2,
        why: B("The cycle follows the rise and fall of expectations around a technology. It says nothing about who earns money from it, nor about what will work for a given independent.",
          "Le cycle suit la montée et la retombée des attentes autour d'une technologie. Il ne dit rien de qui en tire des revenus, ni de ce qui marchera pour un indépendant donné.") },
    ],
  },

  [deepKey(M1, 'bz-models')]: {
    intro: B("There is no single way to make a living with AI, and the choice of model shapes your weeks more than your tools do. This lesson presents seven business models open to an independent, from freelance to SaaS, and compares them on four variables: time before the first payment, work before selling, link between income and hours, and risk. It warns against the promise of passive income and proposes a prudent sequence. At the end, you will be able to score the models against your real constraints and keep two of them, with a clear switching condition.",
      "Il n'y a pas une seule façon de gagner sa vie avec l'IA, et le choix du modèle façonne vos semaines davantage que vos outils. Ce cours présente sept modèles économiques ouverts à un indépendant, du freelance au SaaS, et les compare sur quatre variables : délai avant le premier paiement, travail avant de vendre, lien entre revenu et heures, et risque. Il met en garde contre la promesse de revenus passifs et propose une progression prudente. À la fin, vous saurez noter les modèles selon vos contraintes réelles et en garder deux, avec une condition de bascule claire."),
    concepts: [
      { term: B('Productised service', 'Service productisé'),
        def: B("A service sold like a product: a fixed result, a fixed price, a defined scope and delay, identical for every client. It is easier to sell and to improve than custom work.",
          "Un service vendu comme un produit : un résultat fixe, un prix fixe, un périmètre et un délai définis, identiques pour chaque client. Il se vend et s'améliore plus facilement que le sur-mesure.") },
      { term: B('Recurring revenue', 'Revenu récurrent'),
        def: B("Income that renews each month or year without a new sale, such as a subscription or a maintenance contract. It stabilises cash, but it must be earned by lasting value.",
          "Un revenu qui se renouvelle chaque mois ou chaque année sans nouvelle vente, comme un abonnement ou un contrat de maintenance. Il stabilise la trésorerie, mais se mérite par une valeur durable.") },
      { term: B('Upfront work', 'Travail préalable'),
        def: B("The work needed before the first sale is possible: building software, recording a course, creating templates. The larger it is, the later you learn whether anyone pays.",
          "Le travail nécessaire avant toute première vente : construire un logiciel, enregistrer une formation, créer des modèles. Plus il est grand, plus vous apprenez tard si quelqu'un paie.") },
      { term: B('Leverage', 'Effet de levier'),
        def: B("The degree to which income can grow without your hours growing at the same rate. Freelance has little; software and digital products have more, if they find buyers.",
          "La mesure dans laquelle le revenu peut croître sans que vos heures croissent au même rythme. Le freelance en a peu ; le logiciel et les produits numériques davantage, s'ils trouvent preneurs.") },
    ],
    walkthrough: {
      title: B("Nora compares the seven models for her own situation, with six hours a week next to her job, as hypotheses of the case.",
        "Nora compare les sept modèles pour sa propre situation, avec six heures par semaine à côté de son emploi, hypothèses du cas."),
      steps: [
        B("She writes her constraints before anything else: about six hours a week, no savings to invest, no coding skills, at ease with organising and writing, access to building trades firms. Why: written first, the constraints cannot be bent afterwards to justify a favourite model.",
          "Elle écrit ses contraintes avant toute chose : environ six heures par semaine, pas d'épargne à investir, aucune compétence en code, à l'aise pour organiser et rédiger, un accès aux artisans du bâtiment. Pourquoi : écrites d'abord, les contraintes ne peuvent pas être tordues ensuite pour justifier un modèle préféré."),
        B("She asks an AI, in the role of a sceptical advisor, to fill a table: time before the first payment, upfront work, link between income and hours, main risk for her. Why: the sceptical role counters the enthusiasm models often show for passive income.",
          "Elle demande à une IA, dans le rôle d'un conseiller sceptique, de remplir un tableau : délai avant le premier paiement, travail préalable, lien entre revenu et heures, principal risque pour elle. Pourquoi : le rôle sceptique contrebalance l'enthousiasme que les modèles montrent souvent pour les revenus passifs."),
        B("She removes the agency (she has no team to manage) and the micro-SaaS (months of building with no coding skills). Why: excluding a model for a stated reason is a decision; excluding it for a vague feeling is not.",
          "Elle écarte l'agence (elle n'a pas d'équipe à encadrer) et le micro-SaaS (des mois de construction sans compétence en code). Pourquoi : exclure un modèle pour une raison énoncée est une décision ; l'exclure par impression ne l'est pas."),
        B("She keeps a productised service as the main model, and templates as a later option. Why: the service can be sold and delivered by hand right away, and repeated requests will show what deserves to become a template.",
          "Elle garde un service productisé comme modèle principal, et les modèles à télécharger comme option ultérieure. Pourquoi : le service se vend et se livre à la main tout de suite, et les demandes répétées montreront ce qui mérite de devenir un modèle."),
        B("She writes the switching condition: if the same deliverable is requested in nearly identical form by several clients, she will package it. Why: a condition written in advance avoids switching on a whim, or never switching at all.",
          "Elle écrit la condition de bascule : si plusieurs clients demandent le même livrable sous une forme presque identique, elle l'empaquettera. Pourquoi : une condition écrite d'avance évite de basculer sur un coup de tête, ou de ne jamais basculer."),
      ],
    },
    mistakes: [
      { wrong: B("Choosing a model for the promise of passive income without an audience or a tested offer.",
          "Choisir un modèle pour la promesse de revenus passifs, sans audience ni offre testée."),
        fix: B("Start with the model that brings a first payment soonest in your situation; leverage comes later, built on what customers have shown they pay for.",
          "Commencez par le modèle qui apporte le plus tôt un premier paiement dans votre situation ; le levier vient ensuite, bâti sur ce que les clients ont montré qu'ils paient.") },
      { wrong: B("Selling custom freelance work indefinitely, with a new scope and price for each client.",
          "Vendre indéfiniment du freelance sur mesure, avec un périmètre et un prix nouveaux pour chaque client."),
        fix: B("Spot what repeats across clients and turn it into a productised service: same scope, same price, same process. It becomes easier to sell, deliver and automate.",
          "Repérez ce qui se répète d'un client à l'autre et faites-en un service productisé : même périmètre, même prix, même processus. Il devient plus facile à vendre, à livrer et à automatiser.") },
      { wrong: B("Comparing models by what successful people say about them on social networks.",
          "Comparer les modèles d'après ce qu'en disent des personnes à succès sur les réseaux sociaux."),
        fix: B("Compare them on the four variables applied to your constraints. Public success stories are a biased sample: those who failed with the same model rarely post about it.",
          "Comparez-les sur les quatre variables appliquées à vos contraintes. Les réussites publiques sont un échantillon biaisé : ceux qui ont échoué avec le même modèle en parlent rarement.") },
    ],
    recap: [
      B("Seven models are open to independents, from freelance to SaaS, each with its own trade-offs.", "Sept modèles s'offrent aux indépendants, du freelance au SaaS, chacun avec ses compromis."),
      B("Compare them on time to first payment, upfront work, leverage and risk.", "Comparez-les sur le délai avant paiement, le travail préalable, le levier et le risque."),
      B("Write your constraints before comparing, so they cannot be bent.", "Écrivez vos contraintes avant de comparer, pour qu'elles ne se tordent pas."),
      B("A prudent path goes from service by hand to productised service, then to packaging.", "Un chemin prudent va du service à la main au service productisé, puis à l'empaquetage."),
    ],
    further: B("Draw the sequence you could follow over two years, from service by hand to a more packaged model, with the signal that would trigger each step. Revisit it every quarter: it is a hypothesis to test, not a plan to obey.",
      "Dessinez la progression que vous pourriez suivre sur deux ans, du service à la main à un modèle plus empaqueté, avec le signal qui déclencherait chaque étape. Revoyez-la chaque trimestre : c'est une hypothèse à tester, pas un plan à suivre aveuglément."),
    more: [
      { q: B("Which model ties income most directly to the hours worked?",
          "Quel modèle lie le plus directement le revenu aux heures travaillées ?"),
        options: [
          B("Freelance billed by the day or by the hour", "Le freelance facturé à la journée ou à l'heure"),
          B("A digital product sold to many buyers at once", "Un produit numérique vendu à de nombreux acheteurs"),
          B("A software subscription used by many customers", "Un abonnement logiciel utilisé par de nombreux clients"),
        ],
        answer: 0,
        why: B("In freelance, each euro corresponds to time sold: to earn more, you work more or raise your rate. Products and subscriptions loosen that link, after upfront work.",
          "En freelance, chaque euro correspond à du temps vendu : pour gagner plus, il faut travailler plus ou augmenter son tarif. Produits et abonnements desserrent ce lien, après un travail préalable.") },
      { q: B("Nora receives three nearly identical requests for the same deliverable. What does it suggest?",
          "Nora reçoit trois demandes presque identiques pour le même livrable. Qu'est-ce que cela suggère ?"),
        options: [
          B("That she should raise her prices at once for every client", "Qu'elle doit augmenter aussitôt ses prix pour tous ses clients"),
          B("That she should stop selling it and switch to a new idea", "Qu'elle doit cesser de le vendre et passer à une autre idée"),
          B("That the deliverable could be standardised or packaged", "Que le livrable pourrait être standardisé ou empaqueté"),
        ],
        answer: 2,
        why: B("Repetition is the signal that a service can become productised, then partly automated or turned into a template. It is the switching condition she wrote in advance.",
          "La répétition est le signal qu'un service peut devenir productisé, puis être en partie automatisé ou transformé en modèle. C'est la condition de bascule qu'elle avait écrite à l'avance.") },
    ],
  },

  [deepKey(M1, 'bz-niche')]: {
    intro: B("Most beginners fear that choosing a niche means losing customers. In practice, it is what makes customers findable and the message clear. This lesson distinguishes a market from a niche, gives four criteria to score candidates (access, pain, ability to pay, edge) and treats the choice as a bet with a deadline. You will follow Nora as she compares five niches she can reach, and you will be able to choose your own, with the signal that would make you change.",
      "La plupart des débutants craignent que choisir une niche fasse perdre des clients. En pratique, c'est ce qui rend les clients trouvables et le message clair. Ce cours distingue un marché d'une niche, donne quatre critères pour noter les candidates (accès, douleur, capacité à payer, avantage) et traite le choix comme un pari à échéance. Vous suivrez Nora qui compare cinq niches accessibles, et vous saurez choisir la vôtre, avec le signal qui vous ferait changer."),
    concepts: [
      { term: B('Market', 'Marché'),
        def: B("A broad set of people or organisations sharing a type of need, such as 'small businesses' or 'independent professionals'. Too broad to write one message or find a channel.",
          "Un vaste ensemble de personnes ou d'organisations qui partagent un type de besoin, comme « les petites entreprises » ou « les professions libérales ». Trop large pour un seul message ou un canal.") },
      { term: B('Niche', 'Niche'),
        def: B("A smaller group defined by who, in which situation and often where, precise enough to list names, use their words and be recommended between peers.",
          "Un groupe plus petit défini par qui, dans quelle situation et souvent où, assez précis pour dresser une liste de noms, employer leurs mots et être recommandé entre pairs.") },
      { term: B('Access', 'Accès'),
        def: B("Your concrete ability to talk to people in the niche soon: contacts, places you go, communities you belong to. Without access, nothing else can be tested.",
          "Votre capacité concrète à parler bientôt à des gens de la niche : contacts, lieux fréquentés, communautés auxquelles vous appartenez. Sans accès, rien d'autre ne peut être testé.") },
      { term: B('Ability to pay', 'Capacité à payer'),
        def: B("Evidence that the niche already spends money on its problem: tools, subcontractors, training. A niche that pays for nothing related is hard to sell to.",
          "Les indices que la niche dépense déjà de l'argent pour son problème : outils, sous-traitants, formations. Une niche qui ne paie rien de proche est difficile à convaincre.") },
      { term: B('Edge', 'Avantage'),
        def: B("What you know or have that an outsider lacks: experience of the trade, its vocabulary, a network, credibility. It shortens every conversation.",
          "Ce que vous savez ou possédez et qui manque à un inconnu : une expérience du métier, son vocabulaire, un réseau, une crédibilité. Il raccourcit chaque conversation.") },
    ],
    walkthrough: {
      title: B("Nora compares five niches she could reach and commits to one for a fixed period.",
        "Nora compare cinq niches qu'elle pourrait atteindre et s'engage sur l'une d'elles pour une durée fixée."),
      steps: [
        B("She writes five candidates as 'who + situation': building trades firms quoting for the agency, independent property managers, small cleaning companies, local estate agents, accounting firms in her town. Why: the 'who + situation' form forces precision, whereas a sector name stays vague.",
          "Elle écrit cinq candidates sous la forme « qui + situation » : les artisans qui chiffrent pour l'agence, les gestionnaires de biens indépendants, les petites entreprises de nettoyage, les agents immobiliers locaux, les cabinets comptables de sa ville. Pourquoi : la forme « qui + situation » oblige à préciser, alors qu'un nom de secteur reste vague."),
        B("She scores each one from one to five on access, pain, ability to pay and edge, and writes one sentence per score. Why: the sentence reveals the guesses; a score she cannot justify is a score to verify.",
          "Elle note chacune de un à cinq sur l'accès, la douleur, la capacité à payer et l'avantage, avec une phrase par note. Pourquoi : la phrase révèle les suppositions ; une note qu'elle ne sait pas justifier est une note à vérifier."),
        B("Building trades firms come first, mostly thanks to access and edge: she talks to them every week and knows how they work. Why: for a beginner, access weighs heavily, because every following step needs conversations.",
          "Les artisans du bâtiment arrivent en tête, surtout grâce à l'accès et à l'avantage : elle leur parle chaque semaine et connaît leur façon de travailler. Pourquoi : pour un débutant, l'accès pèse lourd, car chaque étape suivante exige des conversations."),
        B("She asks an AI to argue against this choice. It objects that such firms are busy and wary of software. She checks the objection with two firms she knows. Why: an objection is useful only once confronted with real people.",
          "Elle demande à une IA de plaider contre ce choix. Elle objecte que ces artisans sont débordés et méfiants envers les logiciels. Nora vérifie l'objection auprès de deux artisans qu'elle connaît. Pourquoi : une objection n'est utile qu'une fois confrontée à de vraies personnes."),
        B("She commits to this niche for eight weeks, with a change signal: if she cannot get five interviews within three weeks, she will move to property managers. Why: the deadline and the signal protect her from both hopping and stubbornness.",
          "Elle s'engage sur cette niche pour huit semaines, avec un signal de changement : si elle n'obtient pas cinq entretiens en trois semaines, elle passera aux gestionnaires de biens. Pourquoi : l'échéance et le signal la protègent à la fois de l'éparpillement et de l'entêtement."),
      ],
    },
    mistakes: [
      { wrong: B("Defining the niche by a sector only, such as 'construction' or 'health'.",
          "Définir la niche par un seul secteur, comme « le bâtiment » ou « la santé »."),
        fix: B("Add who exactly and in which situation: 'building trades firms of fewer than five people who quote every week'. You should be able to list names.",
          "Ajoutez qui exactement et dans quelle situation : « les artisans du bâtiment de moins de cinq personnes qui chiffrent chaque semaine ». Vous devez pouvoir dresser une liste de noms.") },
      { wrong: B("Choosing a niche on the pain criterion alone, without any way of reaching it.",
          "Choisir une niche sur le seul critère de la douleur, sans aucun moyen de l'atteindre."),
        fix: B("Score access first and test it: try to list twenty names you could contact this month. If you cannot, the niche is not workable yet.",
          "Notez d'abord l'accès et testez-le : essayez de lister vingt noms que vous pourriez contacter ce mois-ci. Si vous n'y arrivez pas, la niche n'est pas encore praticable.") },
      { wrong: B("Changing niche at the first silence, before any real attempt.",
          "Changer de niche au premier silence, avant toute vraie tentative."),
        fix: B("Set the period and the change signal at the start, then hold until the signal appears. Without that rule, every difficulty looks like a reason to leave.",
          "Fixez la durée et le signal de changement dès le départ, puis tenez jusqu'à ce que le signal apparaisse. Sans cette règle, chaque difficulté ressemble à une raison de partir.") },
    ],
    recap: [
      B("A market is broad; a niche is a group precise enough to list and reach.", "Un marché est large ; une niche est un groupe assez précis pour le lister et l'atteindre."),
      B("Score candidates on access, pain, ability to pay and edge.", "Notez les candidates sur l'accès, la douleur, la capacité à payer et l'avantage."),
      B("For a beginner, access weighs heavily, because everything needs conversations.", "Pour un débutant, l'accès pèse lourd, car tout passe par des conversations."),
      B("Commit for a fixed period, with a change signal written in advance.", "Engagez-vous pour une durée fixée, avec un signal de changement écrit à l'avance."),
    ],
    further: B("Find where your niche gathers: professional federations, trade fairs, local groups, supplier counters, online forums of the trade. Note three places, and in each, what people talk about. Their words will feed your interviews and, later, your offer.",
      "Repérez où se retrouve votre niche : fédérations professionnelles, salons, groupements locaux, comptoirs de fournisseurs, forums en ligne du métier. Notez trois lieux et, pour chacun, les sujets dont on y parle. Leurs mots nourriront vos entretiens puis votre offre."),
    more: [
      { q: B("Nora's AI says her niche 'is too small to be worth it'. What should she do first?",
          "L'IA de Nora affirme que sa niche « est trop petite pour en valoir la peine ». Que doit-elle faire d'abord ?"),
        options: [
          B("Widen to all small businesses in France straight away", "Élargir aussitôt à toutes les petites entreprises de France"),
          B("Check whether she can reach enough firms to learn and sell", "Vérifier si elle peut joindre assez d'artisans pour apprendre et vendre"),
          B("Ask the same question again until the AI changes its answer", "Reposer la question jusqu'à ce que l'IA change de réponse"),
        ],
        answer: 1,
        why: B("The model has no data on her access or on the firms around her. Whether the niche is big enough for a start is answered by counting reachable names, not by a general opinion.",
          "Le modèle n'a aucune donnée sur ses accès ni sur les artisans autour d'elle. Savoir si la niche suffit pour démarrer se vérifie en comptant les noms joignables, pas par un avis général.") },
      { q: B("Why does a narrow niche make recommendations more likely?",
          "Pourquoi une niche étroite rend-elle les recommandations plus probables ?"),
        options: [
          B("Because its members know each other and share the same problems", "Parce que ses membres se connaissent et partagent les mêmes problèmes"),
          B("Because the law obliges professionals to recommend their suppliers", "Parce que la loi oblige les professionnels à recommander leurs prestataires"),
          B("Because narrow niches never have any competing offers", "Parce que les niches étroites n'ont jamais d'offre concurrente"),
        ],
        answer: 0,
        why: B("Peers in the same trade talk to each other, meet at the same places and face the same issues. A service that solved a problem for one is easy for them to recommend to the next.",
          "Les pairs d'un même métier se parlent, se croisent aux mêmes endroits et rencontrent les mêmes difficultés. Un service qui a résolu le problème de l'un se recommande facilement au suivant.") },
    ],
  },

  [deepKey(M1, 'bz-interviews')]: {
    intro: B("An idea becomes a business only if it solves a problem people already feel and already try to solve. This lesson teaches you to find that problem through customer interviews, following the principles of The Mom Test by Rob Fitzpatrick: talk about their life, ask about specific past events, do not pitch. You will learn to tell facts from opinions, compliments and commitments, and to use AI to prepare and analyse interviews without letting it replace them. You will follow Nora's five interviews, which change the direction of her project.",
      "Une idée ne devient une activité que si elle résout un problème que les gens ressentent déjà et tentent déjà de résoudre. Ce cours vous apprend à trouver ce problème par des entretiens clients, selon les principes de The Mom Test de Rob Fitzpatrick : parler de leur vie, interroger sur des faits passés précis, ne pas présenter son idée. Vous apprendrez à distinguer faits, avis, compliments et engagements, et à utiliser l'IA pour préparer et analyser les entretiens sans la laisser les remplacer. Vous suivrez les cinq entretiens de Nora, qui changent la direction de son projet."),
    concepts: [
      { term: B('The Mom Test', 'The Mom Test'),
        def: B("A set of interview rules from Rob Fitzpatrick's book: ask questions that even someone who wants to please you, like your mother, cannot answer with a polite lie.",
          "Un ensemble de règles d'entretien tiré du livre de Rob Fitzpatrick : poser des questions auxquelles même quelqu'un qui veut vous faire plaisir, comme votre mère, ne peut répondre par un mensonge poli.") },
      { term: B('Past behaviour', 'Comportement passé'),
        def: B("What the person actually did the last time the problem occurred. It is the most reliable predictor available, far more than what they say they would do.",
          "Ce que la personne a réellement fait la dernière fois que le problème s'est produit. C'est l'indicateur le plus fiable dont on dispose, bien plus que ce qu'elle dit qu'elle ferait.") },
      { term: B('Commitment', 'Engagement'),
        def: B("Something the person gives that costs them: time for a follow-up, access to documents, an introduction to a peer, a deposit. Commitments separate interest from intent.",
          "Ce que la personne donne et qui lui coûte : du temps pour une suite, l'accès à des documents, une mise en relation avec un pair, un acompte. Les engagements séparent l'intérêt de l'intention.") },
      { term: B('Leading question', 'Question orientée'),
        def: B("A question that suggests the expected answer, such as 'don't you find quotes time-consuming?'. It produces agreement, not information.",
          "Une question qui suggère la réponse attendue, comme « vous ne trouvez pas que les devis prennent du temps ? ». Elle produit de l'adhésion, pas de l'information.") },
    ],
    walkthrough: {
      title: B("Nora interviews five building trades firm owners and discovers that the real problem is not where she expected it.",
        "Nora interroge cinq patrons d'entreprises du bâtiment et découvre que le vrai problème n'est pas là où elle l'attendait."),
      steps: [
        B("She starts from a guess: tradespeople waste time writing quotes. She asks an AI for a Mom Test guide about their last quotes, then removes two leading questions it slipped in. Why: even a good guide must be reread; models also write leading questions.",
          "Elle part d'une supposition : les artisans perdent du temps à rédiger leurs devis. Elle demande à une IA un guide Mom Test sur leurs derniers devis, puis retire deux questions orientées qui s'y étaient glissées. Pourquoi : même un bon guide se relit ; les modèles écrivent aussi des questions orientées."),
        B("She holds five interviews of twenty minutes, at the end of the working day, asking each one to tell the story of the last three quotes sent. Why: stories of real quotes give dates, durations and outcomes, not opinions.",
          "Elle mène cinq entretiens de vingt minutes, en fin de journée, en demandant à chacun de raconter les trois derniers devis envoyés. Pourquoi : l'histoire de vrais devis donne des dates, des durées et des issues, pas des avis."),
        B("A surprise emerges: writing the quote is not what bothers them most. Several quotes remained unanswered and were never followed up, for lack of time or out of embarrassment. Why: the problem is found by listening to facts, not by confirming the initial guess.",
          "Une surprise apparaît : rédiger le devis n'est pas ce qui les gêne le plus. Plusieurs devis sont restés sans réponse et n'ont jamais été relancés, faute de temps ou par gêne. Pourquoi : on trouve le problème en écoutant des faits, pas en confirmant la supposition de départ."),
        B("She writes her notes the same evening, sorting facts, opinions, compliments and commitments. One plumber offered to show her his unanswered quotes the following week. Why: notes written late lose the exact words, and the commitment is the strongest signal of the five interviews.",
          "Elle rédige ses notes le soir même, en séparant faits, avis, compliments et engagements. Un plombier a proposé de lui montrer ses devis sans réponse la semaine suivante. Pourquoi : des notes écrites tard perdent les mots exacts, et cet engagement est le signal le plus fort des cinq entretiens."),
        B("She gives the notes to an AI to find patterns, and checks each one against the quotes. One pattern, 'they want a mobile app', rests on a single person: she sets it aside. Why: a summary easily inflates one remark into a trend.",
          "Elle confie ses notes à une IA pour en tirer les tendances, et vérifie chacune contre les citations. Une tendance, « ils veulent une app mobile », repose sur une seule personne : elle la met de côté. Pourquoi : un résumé gonfle facilement une remarque isolée en tendance."),
        B("She rewrites her problem statement: small building trades firms lose quotes that nobody follows up. Why: this formulation, grounded in facts, will drive the offer and the prototype of the next module.",
          "Elle réécrit son énoncé du problème : les petits artisans du bâtiment perdent des devis que personne ne relance. Pourquoi : cette formulation, ancrée dans des faits, guidera l'offre et le prototype du module suivant."),
      ],
    },
    mistakes: [
      { wrong: B("Presenting the idea at the start of the interview to 'give context'.",
          "Présenter l'idée en début d'entretien pour « donner du contexte »."),
        fix: B("Keep the idea for the end, or for another meeting. Once it is described, the person reacts to it and protects your feelings, instead of telling their own story.",
          "Gardez l'idée pour la fin, ou pour un autre rendez-vous. Une fois décrite, la personne y réagit et ménage vos sentiments, au lieu de raconter sa propre histoire.") },
      { wrong: B("Counting compliments and 'I would buy it' as proof of demand.",
          "Compter les compliments et les « je l'achèterais » comme preuves de la demande."),
        fix: B("Record them as noise and look for commitments: a follow-up meeting, access to documents, an introduction, a payment. Only what costs the person something is a signal.",
          "Notez-les comme du bruit et cherchez les engagements : un rendez-vous de suite, l'accès à des documents, une mise en relation, un paiement. Seul ce qui coûte à la personne est un signal.") },
      { wrong: B("Letting the AI summary replace rereading the notes.",
          "Laisser le résumé de l'IA remplacer la relecture des notes."),
        fix: B("Ask the AI to cite the exact quotes behind each pattern, and check them yourself. Set aside any pattern that rests on a single person.",
          "Demandez à l'IA de citer les phrases exactes derrière chaque tendance, et vérifiez-les vous-même. Mettez de côté toute tendance qui repose sur une seule personne.") },
    ],
    recap: [
      B("Ask about specific past events, not opinions or the future.", "Interrogez sur des faits passés précis, pas sur des avis ou l'avenir."),
      B("Do not pitch your idea during the interview.", "Ne présentez pas votre idée pendant l'entretien."),
      B("Compliments are noise; commitments that cost something are signals.", "Les compliments sont du bruit ; les engagements qui coûtent sont des signaux."),
      B("AI prepares and analyses interviews; it does not replace them.", "L'IA prépare et analyse les entretiens ; elle ne les remplace pas."),
      B("Accept that the real problem may differ from your starting guess.", "Acceptez que le vrai problème diffère de votre supposition de départ."),
    ],
    further: B("Read The Mom Test by Rob Fitzpatrick, a short book that can be read in an evening. Then reread your interview guide and mark each question as past, opinion or future: rewrite every question that is not about the past.",
      "Lisez The Mom Test de Rob Fitzpatrick, un court livre qui se lit en une soirée. Relisez ensuite votre guide d'entretien et marquez chaque question comme passé, avis ou avenir : réécrivez toute question qui ne porte pas sur le passé."),
    more: [
      { q: B("Nora notices that a painter has never tried any solution for his unanswered quotes. What can she infer?",
          "Nora constate qu'un peintre n'a jamais rien tenté pour ses devis sans réponse. Que peut-elle en déduire ?"),
        options: [
          B("That he will certainly buy the first solution she offers him", "Qu'il achètera sûrement la première solution qu'elle lui proposera"),
          B("That the problem may not hurt him enough to pay for a solution", "Que le problème ne le gêne peut-être pas assez pour payer une solution"),
          B("That he has simply never heard about artificial intelligence", "Qu'il n'a tout simplement jamais entendu parler d'intelligence artificielle"),
        ],
        answer: 1,
        why: B("A painful problem usually triggers attempts: a notebook, a reminder, a helper. No attempt suggests a low priority for him; it is a fact to weigh against the other interviews.",
          "Un problème douloureux suscite en général des tentatives : un carnet, un rappel, une aide. L'absence de tentative suggère une faible priorité pour lui ; c'est un fait à peser face aux autres entretiens.") },
      { q: B("Which rewriting turns 'Would you like automatic reminders?' into a good interview question?",
          "Quelle réécriture transforme « Aimeriez-vous des relances automatiques ? » en bonne question d'entretien ?"),
        options: [
          B("Wouldn't automatic reminders make your week much easier?", "Les relances automatiques ne vous simplifieraient-elles pas la semaine ?"),
          B("How much would you pay each month for automatic reminders?", "Combien paieriez-vous par mois pour des relances automatiques ?"),
          B("What happened with the last quote that got no answer?", "Que s'est-il passé avec le dernier devis resté sans réponse ?"),
        ],
        answer: 2,
        why: B("The good question asks about a specific past event and reveals what he actually did. The other two remain hypothetical: one leads the answer, the other asks for a price on an imaginary product.",
          "La bonne question porte sur un fait passé précis et révèle ce qu'il a réellement fait. Les deux autres restent hypothétiques : l'une oriente la réponse, l'autre demande un prix pour un produit imaginaire.") },
    ],
  },
}

/* ================================================================== */
/* LES MODULES DU COURS                                                */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: M1, track: 'course', glyph: 'target', tint: '#ca8a04', at: [12, 82], levels: MARKET,
    title: B('Read the market', 'Lire le marché'),
    blurb: B('Where value is created in AI, the business models open to you, choosing a niche, and customer interviews.',
      "Où se crée la valeur en IA, les modèles économiques possibles, le choix d'une niche et les entretiens clients."),
  },
]

export const BUSINESS_A: CoursePart = {
  modules: MODULES,
  enrich: { ...MARKET_ENRICH },
  deep: { ...MARKET_DEEP },
}
