// DojoBuro support knowledge base. This is the Tier-0 layer: deterministic,
// on-brand answers with link buttons that cost nothing and work with no backend.
// The support bot answers from here first and only escalates to the LLM cascade
// (via /api/chat) for questions it can't match.
import { CONNECTORS, type Connector } from '../data/connectors'
import type { Lang } from '../i18n/lang'
// Counts and rosters come from the data the app runs on · see data/facts.
import { CREW_WORD, CREW_LIST, ACADEMY_LESSONS, ACADEMY_TRACKS, ACADEMY_HOURS } from '../data/facts'
// Le centre de formation · ses chiffres viennent des données, jamais d'une
// phrase écrite à la main dans une réponse de robot.
import { USE_CASE_COUNT } from '../data/agentUseCases'
import { COURSE_COUNT } from '../data/positioning'
import { FRAMEWORK_COUNT } from '../data/frameworks'
import { GRADES } from '../dojo/grades'
// LES PRIX · quatre réponses de cette base les recopiaient à la main, ce qui en
// faisait une cinquième grille de prix capable de contredire les quatre autres.
// Elle l'a fait : elle vendait encore Founder à 29 $ et 2 000 tâches longtemps
// après que le produit ait cessé d'exécuter quoi que ce soit.
import { PATH_EUR, TRADE_EUR, BUNDLE_EUR, DISCOVERY_DAYS, priceTag } from '../data/plans'

const GRADE_COUNT = GRADES.length

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
    follow: ['certification', 'academy', 'tokens'],
    keywords: ['build', 'build an agent', 'create an agent', 'créer un agent', 'make an agent', 'first agent', 'use case', "cas d'usage", 'dojo', 'twelve agents', '12 agents', 'agent shapes', 'which agent', 'researcher', 'extractor', 'triage', 'sorter', 'export agent', 'framework'],
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
    follow: ['build', 'academy'],
    keywords: ['badge', 'badges', 'belt', 'belts', 'ceinture', 'grade', 'diploma', 'diplôme', 'certification', 'certified', 'certifié', 'progress', 'progression', 'reward', 'récompense', 'level', 'niveau'],
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
    follow: ['start', 'tools', 'cost'],
    keywords: ['academy', 'académie', 'course', 'cours', 'learn', 'apprendre', 'tutorial', 'tuto', 'lesson', 'leçon', 'beginner', 'débutant', 'guide', 'training', 'formation', 'vibe coding', 'ide', 'claude code', 'what is an agent', 'agent'],
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
    id: 'tokens',
    chip: 'Control your consumption',
    answer:
      `The chip in the middle of the dojo header is your token dial. It shows which mode you are in and how many tokens you have spent today, and clicking it opens the full picker. There are three modes and each one changes exactly three things, how long an answer may be, whether the model thinks before writing, and how many of a teammate's connected apps travel with the run. SAVER: answers capped at 1,500 tokens, no apps attached, so the team drafts instead of acting · the cheapest way to tune a brief before you commit. BALANCED (the default): 4,000 tokens and up to 3 apps, with real actions in them · start here and only change it when you have a reason. MAX: 8,000 tokens, thinking switched on and up to 8 apps · three to five times the tokens of Saver, so save it for the run you are actually going to ship. The panel shows our estimate for your team's next full run in each mode, AND the real token counts of the runs you have already done, reported by the model itself, so you can check our estimates against reality. One more thing worth knowing: every app you switch on for a teammate ships that app's tool definitions with every single step they run, so a teammate with eight apps costs more per step than the same teammate with two, in every mode. Connecting is still free · it is the running that costs.`,
    links: [
      { label: 'Open my dojo', href: '#app' },
      { label: 'The cost lesson', href: '/academy/the-landscape/what-it-costs' },
    ],
    follow: ['cost', 'budget', 'tools'],
    keywords: ['token', 'tokens', 'jeton', 'jetons', 'consumption', 'consommation', 'cost', 'coût', 'mode', 'saver', 'balanced', 'max', 'economy', 'économie', 'spend', 'dépense', 'limit', 'limite', 'optimise', 'optimiser', 'usage', 'meter', 'compteur'],
    fr: {
      chip: "Maîtrise ta consommation",
      answer:
        `La pastille au milieu de l'en-tête du dojo, c'est ton bouton des tokens. Elle te montre dans quel mode tu es et combien de tokens la journée aurait coûté, et un clic ouvre le sélecteur complet. Il y a trois modes et chacun change exactement trois choses : la longueur maximale d'une réponse, le fait que le modèle réfléchisse avant d'écrire, et le nombre d'applications branchées d'un coéquipier qui voyagent avec le passage. ÉCONOME : réponses plafonnées à 1 500 tokens, aucune application attachée, donc l'équipe rédige au lieu d'agir · le moyen le moins cher d'ajuster un brief avant de t'engager. ÉQUILIBRÉ (par défaut) : 4 000 tokens et jusqu'à 3 applications, avec de vraies actions dedans · commence là, et ne change que si tu as une raison. MAXIMUM : 8 000 tokens, la réflexion allumée et jusqu'à 8 applications · trois à cinq fois les tokens d'Économe, donc garde-le pour le passage que tu vas vraiment livrer. Le panneau te montre notre estimation pour le prochain passage complet de ton équipe dans chaque mode, ET les comptes de tokens réels des passages déjà faits, rapportés par le modèle lui-même, pour que tu puisses confronter nos estimations à la réalité. Encore une chose à savoir : chaque application que tu allumes pour un coéquipier fait voyager ses définitions d'outils avec chacune de ses étapes, donc un coéquipier à huit applications coûte plus par étape que le même à deux, dans tous les modes. Brancher reste gratuit · c'est faire tourner qui compte.`,
      links: [
        "Ouvrir mon dojo",
        "La leçon sur le coût",
      ],
    },
  },
  {
    id: 'studios',
    chip: 'The studios',
    answer:
      `The practice dojo is populated by ${CREW_WORD} characters, each opening its own workspace when you click it: ${CREW_LIST.map((r) => `${r.name} (${r.title})`).join(', ')}. You can hide the ones you don't need and create your OWN custom agents too. The brand you choose in Brandi flows into every studio, so the whole team shares one company name, domain and look. Editing and export run on your own machine · video, image compression and exports never leave it. The documents your company produces are also kept for your organisation, so a colleague sees the same work. The AI creates a first version and you keep full control. And front-and-centre in your 3D office stands the team panda · a mascot who cheers the crew on and breaks into a dance every time a task is completed (tap him to make him celebrate on cue).`,
    links: [
      { label: 'See the studios', href: '#studios' },
      { label: 'Open my office', href: '#app' },
    ],
    follow: ['start', 'tools', 'cost'],
    keywords: ['studio', 'studios', 'branding', 'marque', 'logo', 'site', 'website', 'campagne', 'campaign', 'pub', 'ads', 'video', 'vidéo', 'montage', 'finance', 'compta', 'crm', 'outbound', 'analytics', 'local', 'module', 'panda', 'mascot', 'mascotte', 'dance', 'cheer'],
    fr: {
      chip: "Les ateliers",
      answer:
        `Le dojo d'entraînement est peuplé de ${CREW_WORD} personnages, et chacun ouvre son propre espace de travail quand tu cliques dessus : ${CREW_LIST.map((r) => r.name + ' (' + r.title + ')').join(', ')}. Tu peux masquer ceux dont tu n'as pas besoin et créer aussi tes PROPRES agents. La marque que tu choisis dans Brandi se répand dans tous les ateliers, pour que toute l'équipe partage un seul nom de société, un seul domaine et un seul style. Le montage et l'export tournent sur ta machine · la vidéo, la compression d'images et les exports ne la quittent jamais. Les documents produits par ta société sont aussi conservés pour ton organisation, pour qu'un collègue voie le même travail. L'IA fabrique une première version et tu gardes la main de bout en bout. Et au centre de ton bureau en trois dimensions se tient le panda de l'équipe · une mascotte qui encourage tout le monde et se met à danser à chaque tâche terminée (touche-le pour qu'il fasse la fête sur commande).`,
      links: [
        "Voir les ateliers",
        "Ouvrir mon bureau",
      ],
    },
  },
  {
    id: 'start',
    walk: 'company',
    chip: 'Getting started',
    answer:
      'Two screens, no prompt to write. 1) You land on one card: name a practice dojo and hit Open the dojo. Signing in only keeps it across devices (or continue as a guest, saved in this browser only). 2) Next comes "Choose your dojo teams": the whole catalogue, and you tick the ones you want to study. Every card names the teammates inside it, the apps they use, and how many tasks one full run would take, and a bar at the bottom keeps the running total in view. Hit Add teams and you land in the dojo: click a teammate to read the brief that makes it a specialist, change it, and see what changes. It is a sandbox, nothing there calls a paid model or writes to your real accounts. Every screen has a "How to?" button that plays an animated walkthrough full screen.',
    links: [
      { label: 'Open your cockpit', href: '#app' },
      { label: 'Watch the walkthrough', href: '/guide#walkthrough' },
    ],
    follow: ['signin', 'teams', 'tools'],
    keywords: ['start', 'begin', 'how do i', 'get started', 'first', 'use', 'run a skill', 'onboard', 'how to', 'how does it work', 'company name', 'name my company', 'walkthrough', 'tutorial'],
    fr: {
      chip: "Pour commencer",
      answer:
        `Deux écrans, aucun prompt à écrire. 1) Tu arrives sur une seule carte : donne un nom à ton dojo d'entraînement et appuie sur Ouvrir le dojo. Te connecter sert seulement à le retrouver d'un appareil à l'autre (ou continue en invité, enregistré dans ce navigateur seulement). 2) Vient ensuite « Choisis tes équipes de dojo » : le catalogue entier, et tu coches celles que tu veux étudier. Chaque carte nomme les coéquipiers qu'elle contient, les applications qu'ils utilisent, et le nombre de tâches d'un passage complet, et une barre en bas garde le total sous tes yeux. Appuie sur Ajouter les équipes et tu atterris dans le dojo : clique sur un coéquipier pour lire la fiche qui en fait un spécialiste, modifie-la, et regarde ce qui change. C'est un bac à sable : rien là-dedans n'appelle un modèle payant ni n'écrit dans tes vrais comptes. Chaque écran a un bouton « Comment faire ? » qui lance une visite animée en plein écran.`,
      links: [
        "Ouvrir ton poste de pilotage",
        "Voir la visite guidée",
      ],
    },
  },
  {
    id: 'teams',
    walk: 'teams',
    chip: 'Dojo team cards',
    answer:
      'A dojo team card is a worked example of a whole team, ready made. Each card names every teammate inside it and how many there are (a researcher, a maker, an analyst, a team lead…), the apps they work in, how many steps their plan has, and how many tasks one full run takes, marked Light, Medium or Heavy. They are grouped by speciality: Marketing, Product, Content, Creative, Business and Operations. Tick as many as you need, the bar at the bottom adds up the teams, the teammates, the tasks and the app connections as you go. Each one becomes a dojo inside your company: a 3D office where you can rename teammates, add or remove them, change the apps they use, rewrite how any one of them works, and run the whole plan in one go. Nothing is locked and nothing needs configuring first.',
    links: [
      { label: 'Pick a team', href: '#app' },
      { label: 'Shape your team', href: '/guide#team' },
    ],
    follow: ['start', 'team', 'tools'],
    keywords: ['team card', 'team cards', 'dojo team', 'dojo teams', 'archetype', 'project card', 'cards', 'speciality', 'specialty', 'pick a team', 'catalogue', 'catalog', 'pipeline'],
    fr: {
      chip: "Les cartes d'équipe",
      answer:
        `Une carte d'équipe de dojo, c'est un exemple travaillé d'une équipe entière, prête à l'emploi. Chaque carte nomme chaque coéquipier qu'elle contient et combien ils sont (un chercheur, un fabricant, un analyste, un responsable d'équipe…), les applications dans lesquelles ils travaillent, le nombre d'étapes de leur plan, et le nombre de tâches d'un passage complet, marqué Léger, Moyen ou Lourd. Elles sont groupées par spécialité : marketing, produit, contenu, création, affaires et opérations. Coches-en autant qu'il t'en faut : la barre du bas additionne les équipes, les coéquipiers, les tâches et les branchements au fur et à mesure. Chacune devient un dojo dans ta société : un bureau en trois dimensions où tu peux renommer des coéquipiers, en ajouter ou en retirer, changer les applications qu'ils utilisent, réécrire la façon de travailler de n'importe lequel, et lancer le plan entier d'un coup. Rien n'est verrouillé et rien n'a besoin d'être configuré avant.`,
      links: [
        "Choisir une équipe",
        "Façonner ton équipe",
      ],
    },
  },
  {
    id: 'budget',
    walk: 'apps',
    chip: 'What a team costs',
    answer:
      'Every dojo team card shows its size before you pick it. A team\'s plan is a fixed list of steps and one step is one task, so a 4-step team is 4 tasks for a full run. Cards are marked Light (up to 3 tasks), Medium (up to 5) or Heavy above that, and the bar at the bottom of the chooser adds up everything you have ticked. It costs you nothing here: nothing in the dojo calls a paid model, so no plan draws on anything. The dollar figure beside a card is what those tasks would cost at the model\'s published rate the day you run them yourself, on your own key, which is the number worth learning to read.',
    links: [
      { label: 'Pick a team', href: '#app' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['pricing', 'tools', 'cost'],
    keywords: ['budget', 'estimate', 'how much does a team cost', 'team cost', 'tasks per run', 'per run', 'light medium heavy', 'expensive', 'what will it cost', 'cost of a dojo'],
    fr: {
      chip: "Ce que coûte une équipe",
      answer:
        `Chaque carte d'équipe de dojo te montre sa taille avant que tu la choisisses. Le plan d'une équipe est une liste d'étapes fixe et une étape est une tâche, donc une équipe à 4 étapes fait 4 tâches pour un passage complet. Les cartes sont marquées Léger (jusqu'à 3 tâches), Moyen (jusqu'à 5) ou Lourd au-delà, et la barre en bas du sélecteur additionne tout ce que tu as coché. Ici, ça ne te coûte rien : rien dans le dojo n'appelle un modèle payant, donc aucune formule ne tire sur quoi que ce soit. Le montant en dollars à côté d'une carte, c'est ce que ces tâches coûteraient au tarif publié du modèle le jour où tu les lanceras toi-même, sur ta propre clé, et c'est ce chiffre-là qu'il vaut la peine d'apprendre à lire.`,
      links: [
        "Choisir une équipe",
        "Formules et tarifs",
      ],
    },
  },
  {
    id: 'signin',
    walk: 'company',
    chip: 'Do I need an account?',
    answer:
      'Not to look around. You can open the app, type a name and read every team card without signing in. Signing in is asked for at one moment only: when you hit Create your project, because that saves something real. Sign in with your email or Google and your project, your teammates and everything they make are still there next time, on any device you sign in from. Prefer not to? "Continue as guest" keeps everything in this browser only, it works exactly the same, but clearing your browser data clears your project with it.',
    links: [
      { label: 'Open the app', href: '#app' },
      { label: 'How it works', href: '/guide#how' },
    ],
    follow: ['start', 'security', 'pricing'],
    keywords: ['sign in', 'signin', 'log in', 'login', 'account', 'register', 'sign up', 'signup', 'save', 'save my project', 'guest', 'do i need an account', 'privy', 'email login', 'google login'],
    fr: {
      chip: "Faut-il un compte ?",
      answer:
        `Pas pour regarder. Tu peux ouvrir l'application, taper un nom et lire chaque carte d'équipe sans te connecter. La connexion t'est demandée à un seul moment : quand tu appuies sur Crée ton projet, parce que ça enregistre quelque chose de réel. Connecte-toi avec ton adresse e-mail ou avec Google, et ton projet, tes coéquipiers et tout ce qu'ils fabriquent seront encore là la fois suivante, sur n'importe quel appareil depuis lequel tu te connectes. Tu préfères t'en passer ? « Continuer en invité » garde tout dans ce navigateur seulement : ça marche exactement pareil, mais effacer les données de ton navigateur efface ton projet avec.`,
      links: [
        "Ouvrir l'application",
        "Comment ça marche",
      ],
    },
  },
  {
    id: 'jobs',
    chip: 'Adapts to your job',
    answer:
      'DojoBuro is a productivity hub that reshapes itself to your profession. 23 ready profiles · startup founder, CEO, entrepreneur, product manager, engineer, app & game maker, researcher, growth hacker, community manager, marketer, sales, seller/vendor, designer, lawyer, accountant, real-estate agent, wealth advisor (CGP), HR, manager, secretary, support/call-centre, student and teacher · each seeds a matching crew, a fitting 3D world, and the exact apps that job needs (a teacher gets Google Classroom + Drive + Calendar; a realtor gets a CRM + DocuSign + WhatsApp; a CGP gets Salesforce + DocuSign). Everything stays editable, so you can mix any crew, world and tools.',
    links: [
      { label: 'Built for your job', href: '#jobs' },
      { label: 'How to connect an app', href: '#stack' },
    ],
    follow: ['setup', 'tools', 'cost'],
    keywords: ['job', 'profession', 'metier', 'role', 'trade', 'growth hacker', 'community', 'freelance', 'lawyer', 'accountant', 'hr', 'designer', 'researcher', 'manager', 'secretary', 'sales', 'seller', 'vendor', 'marketer', 'founder', 'realtor', 'real estate', 'wealth', 'cgp', 'advisor', 'student', 'teacher', 'educator', 'school', 'my work'],
    fr: {
      chip: "S'adapte à ton métier",
      answer:
        `DojoBuro est un espace de travail qui se remodèle selon ton métier. 23 profils prêts · fondateur de start-up, dirigeant, entrepreneur, chef de produit, ingénieur, créateur d'applications et de jeux, chercheur, growth hacker, animateur de communauté, marketeur, commercial, vendeur, designer, avocat, comptable, agent immobilier, conseiller en gestion de patrimoine, ressources humaines, manager, secrétaire, support et centre d'appels, étudiant et enseignant · chacun amorce une équipe qui lui correspond, un univers en trois dimensions qui lui va, et exactement les applications dont ce métier a besoin (un enseignant reçoit Google Classroom, Drive et Agenda ; un agent immobilier un CRM, DocuSign et WhatsApp ; un conseiller en patrimoine Salesforce et DocuSign). Tout reste modifiable, donc tu peux mélanger n'importe quelle équipe, n'importe quel univers et n'importe quels outils.`,
      links: [
        "Fait pour ton métier",
        "Comment brancher une application",
      ],
    },
  },
  {
    id: 'wallet',
    chip: 'Credits & profile',
    answer:
      `There is no wallet and no crypto to manage. Your profile is your account, what you have bought, and your preferences. It is paid by card, once: the ${DISCOVERY_DAYS} discovery days are free, the whole path is ${priceTag(PATH_EUR)}, and your trade module is ${priceTag(TRADE_EUR)} on top. Nothing renews, so there is nothing to cancel. You never see a wallet, a seed or any coin.`,
    links: [
      { label: 'Profile & plan', href: '#profile' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['onramp', 'security', 'pricing'],
    keywords: ['wallet', 'profile', 'account', 'seed', 'address', 'fund', 'faucet', 'balance', 'plan', 'no crypto'],
    fr: {
      chip: "Profil et formule",
      answer:
        `Il n'y a aucun portefeuille et aucune cryptomonnaie à gérer. Ton profil, c'est ton compte, ce que tu as acheté, et tes préférences. Ça se paie par carte, une seule fois : les ${DISCOVERY_DAYS} jours de découverte sont gratuits, le parcours entier coûte ${priceTag(PATH_EUR)}, et ton module métier ${priceTag(TRADE_EUR)} en plus. Rien ne se renouvelle, donc il n'y a rien à résilier. Tu ne vois jamais de portefeuille, de phrase secrète ni de token de cryptomonnaie.`,
      links: [
        "Profil et formule",
        "Formules et tarifs",
      ],
    },
  },
  {
    id: 'cost',
    walk: 'apps',
    chip: 'What a plan costs',
    answer:
      `Nothing you do here costs you anything per run, because nothing here calls a paid model. No plan counts tasks, credits or tokens. You pay once for the course itself: ${priceTag(PATH_EUR)} for the whole path, ${priceTag(TRADE_EUR)} more for your trade. The cost that does exist starts the day you take an agent out of the dojo and run it: then it is your own provider key and your own bill, which is exactly what the frugality module teaches you to keep small.`,
    links: [
      { label: 'Cost breakdown', href: '#cost' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['onramp', 'pricing', 'wallet'],
    keywords: ['cost', 'price', 'fee', 'how much', 'expensive', 'pay', 'per task', 'plan', 'plans'],
    fr: {
      chip: "Ce que coûte une formule",
      answer:
        `Rien de ce que tu fais ici ne te coûte quoi que ce soit à chaque passage, parce que rien ici n'appelle un modèle payant. Aucune formule ne décompte de tâches, de crédits ni de tokens. Tu paies le cours lui-même, une seule fois : ${priceTag(PATH_EUR)} le parcours entier, ${priceTag(TRADE_EUR)} de plus pour ton métier. Le coût qui existe vraiment commence le jour où tu sors un agent du dojo et que tu le fais tourner : c'est alors ta propre clé de provider et ta propre facture, et c'est justement ce que le module de sobriété t'apprend à garder petite.`,
      links: [
        "Détail du coût",
        "Formules et tarifs",
      ],
    },
  },
  {
    id: 'pricing',
    walk: 'apps',
    chip: 'Plans & pricing',
    answer:
      `Nothing recurs, and that is the first thing to know: no subscription, no meter, nothing to cancel. Découverte (${priceTag(0)}) is ${DISCOVERY_DAYS} days, one lesson a day, and it asks for your email and nothing else. Formation (${priceTag(PATH_EUR)}, paid once) opens every dojo city, in any order, with the files and the updates. Métier (${priceTag(TRADE_EUR)}, added after) is one more city written for the job you actually do. Both together come to ${priceTag(BUNDLE_EUR)}. Paid by card · no crypto.`,
    links: [
      { label: 'See the plans', href: '#pricing' },
      { label: 'Cost per task', href: '#cost' },
    ],
    follow: ['cost', 'tools', 'onramp'],
    keywords: ['plan', 'plans', 'pricing', 'price', 'cost', 'subscription', 'quota', 'tier', 'upgrade', 'billing', 'free', 'founder', 'managed', 'business', 'byok', 'own key', 'how much'],
    fr: {
      chip: "Formules et tarifs",
      answer:
        `Rien ne se renouvelle, et c'est la première chose à savoir : aucun abonnement, aucun compteur, rien à résilier. Découverte (${priceTag(0)}), c'est ${DISCOVERY_DAYS} jours, une leçon par jour, et on te demande ton adresse e-mail, rien d'autre. Formation (${priceTag(PATH_EUR)}, payée une fois) t'ouvre toutes les cités dojo, dans l'ordre que tu veux, avec les fichiers et les mises à jour. Métier (${priceTag(TRADE_EUR)}, en supplément) ajoute une cité écrite pour le travail que tu fais vraiment. Les deux ensemble font ${priceTag(BUNDLE_EUR)}. Paiement par carte · aucune cryptomonnaie.`,
      links: [
        "Voir les formules",
        "Le coût par tâche",
      ],
    },
  },
  {
    id: 'onramp',
    chip: 'How you pay',
    answer:
      'A plan, by card, in your own currency (\u20ac/$/\u00a5), through Stripe. That is the whole of it: there is no balance to top up and no meter to watch, because we do not sell you model tokens. The day you take an agent out, your own key runs the work and your provider bills you for it, separately. No wallet, no coins, no crypto. Just exploring? The free tier lets you learn and build without spending anything.',
    links: [
      { label: 'See the full flow', href: '#onramp' },
      { label: 'Cost per task', href: '#cost' },
    ],
    follow: ['wallet', 'pricing', 'security'],
    keywords: ['pay', 'card', 'credit card', 'subscribe', 'subscription', 'fiat', 'euro', 'dollar', 'stripe', 'checkout', 'purchase', 'currency'],
    fr: {
      chip: "Comment tu paies",
      answer:
        `Une formule, par carte, dans ta propre monnaie (euro, dollar, yen), via Stripe. C'est tout : il n'y a aucun solde à recharger et aucun compteur à surveiller, parce qu'on ne te vend pas de tokens de modèle. Le jour où tu sors un agent, c'est ta propre clé qui fait tourner le travail et ton provider qui te facture, séparément. Aucun portefeuille, aucun token de cryptomonnaie, aucune cryptomonnaie. Tu veux juste explorer ? La formule gratuite te laisse apprendre et construire sans rien dépenser.`,
      links: [
        "Voir tout le parcours",
        "Le coût par tâche",
      ],
    },
  },
  {
    id: 'payments',
    chip: 'How payments work',
    answer:
      'Simple: you pay for a plan by card in your own currency. There is no wallet, no coins and no crypto anywhere. Every task leaves a receipt in your dashboard, so you always see exactly what ran, whoever paid for the model.',
    links: [
      { label: 'Bring your own key', href: '#pay' },
      { label: 'How it works', href: '#how' },
    ],
    follow: ['onramp', 'cost', 'tools'],
    keywords: ['payment', 'payments', 'billing', 'receipt', 'charge', 'how do payments', 'subscription'],
    fr: {
      chip: "Comment marchent les paiements",
      answer:
        `C'est simple : tu paies une formule par carte, dans ta propre monnaie. Il n'y a aucun portefeuille, aucun token de cryptomonnaie et aucune cryptomonnaie nulle part. Chaque tâche laisse une trace dans ton tableau de bord, donc tu vois toujours exactement ce qui a tourné, peu importe qui a payé le modèle.`,
      links: [
        "Apporte ta propre clé",
        "Comment ça marche",
      ],
    },
  },
  {
    id: 'security',
    chip: 'Security & privacy',
    answer:
      'There is no crypto for you to secure · no wallet, no seed, no coins. You hold a plan, paid by card. The app ships with a strict Content-Security-Policy, security headers and scraper protection. Your app access and the operator\'s model key are sealed away on the server, behind rate limits and spending caps. Keys you bring yourself (e.g. an ElevenLabs voice key) and any local wallet material stay in your browser, so treat this browser like your own device.',
    links: [
      { label: 'Security details', href: '#prod' },
      { label: 'Credits & profile', href: '#profile' },
    ],
    follow: ['wallet', 'pricing'],
    keywords: ['security', 'secure', 'safe', 'privacy', 'hack', 'scam', 'phishing', 'seed', 'csp', 'protect', 'data'],
    fr: {
      chip: "Sécurité et vie privée",
      answer:
        `Il n'y a aucune cryptomonnaie à sécuriser · aucun portefeuille, aucune phrase secrète, aucun token. Tu as une formule, payée par carte. L'application est livrée avec une politique de sécurité du contenu stricte, des en-têtes de sécurité et une protection contre les moissonneurs. Tes accès aux applications et la clé de modèle de l'opérateur sont scellés sur le serveur, derrière des limites de débit et des plafonds de dépense. Les clés que tu apportes toi-même (par exemple une clé de voix ElevenLabs) et tout ce qui relève d'un portefeuille local restent dans ton navigateur : traite donc ce navigateur comme ton propre appareil.`,
      links: [
        "Le détail de la sécurité",
        "Profil et formule",
      ],
    },
  },
  {
    id: 'tools',
    walk: 'apps',
    chip: 'Connect real tools',
    answer:
      'Connect 40+ apps · Notion, GitHub, Gmail, Google Drive, Calendar & Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Apollo, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, Cloudinary, DocuSign, Zendesk, Intercom, Supabase, PostHog, GA4 and more. Connecting is one click on the app\'s own screen; access is sealed away server-side and kept fresh for you. While your teammate works, it reaches into the app directly, so the work really happens in your account · and each task leaves a receipt in your dashboard. Each agent ships with a small, curated set of the best apps for its job (no duplicates), and it\'s fully modular: open its Connect apps panel, tap "+ Add apps" to bring in any other app, or remove one you don\'t use · saved per company.',
    links: [
      { label: 'Set up each app · step by step', href: '/guide', external: true },
      { label: 'Connect your stack', href: '#stack' },
    ],
    follow: ['setup', 'linkagents', 'environment'],
    keywords: ['tool', 'tools', 'connect', 'integration', 'mcp', 'oauth', 'github', 'slack', 'notion', 'gmail', 'stripe', 'jira', 'hubspot', 'figma', 'real content', 'output', 'api', 'apps'],
    fr: {
      chip: "Brancher de vrais outils",
      answer:
        `Plus de 40 applications · Notion, GitHub, Gmail, Google Drive, Agenda et Classroom, Slack, Discord, Zoom, WhatsApp, Linear, Jira, Trello, Asana, Airtable, Stripe, QuickBooks, Xero, Shopify, HubSpot, Salesforce, Apollo, Calendly, Mailchimp, X, LinkedIn, Buffer, Figma, Canva, Cloudinary, DocuSign, Zendesk, Intercom, Supabase, PostHog, GA4 et d'autres. Brancher tient en un clic sur l'écran de l'application elle-même ; l'accès est scellé côté serveur et tenu à jour pour toi. Pendant que ton coéquipier travaille, il atteint l'application directement, donc le travail se fait vraiment dans ton compte · et chaque tâche laisse une trace dans ton tableau de bord. Chaque agent arrive avec un petit jeu choisi des meilleures applications pour son métier (sans doublons), et c'est entièrement modulaire : ouvre son panneau Brancher des applications, touche « + Ajouter » pour en apporter une autre, ou retires-en une dont tu ne te sers pas · enregistré par société.`,
      links: [
        "Régler chaque application, pas à pas",
        "Brancher tes outils",
      ],
    },
  },
  {
    id: 'linkagents',
    chip: 'Link your own agents',
    answer:
      'Already run an AI agent at Notion, Slack, or anywhere else? Bring it in to help one of your teammates. Open the agent editor in the Dojo Studio, scroll to "Outside helpers" and click "+ Add a helper", then pick how it helps: it can lend its tools (they join everything this teammate does, exactly like a connected app · this is the MCP standard), take a whole task off their hands and send the answer back (the A2A standard), or be a plain web address we send the task to and read the reply from. Paste the https address and an optional access key, then hit Verify to check it answers and read back its name and what it can do. The key never touches this browser · the server holds it, just like your connected apps. Hand a whole task across from the teammate\'s card in the office; tool helpers ride along automatically whenever that teammate works, on the free built-in models as well as on your own Claude key.',
    links: [
      { label: 'Open the Dojo Studio', href: '#studio' },
      { label: 'What is A2A', href: 'https://a2a-protocol.org', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'setup', 'security'],
    keywords: ['external agent', 'external agents', 'link agent', 'connect agent', 'my agent', 'own agent', 'a2a', 'agent2agent', 'agent to agent', 'delegate', 'mcp agent', 'webhook', 'notion agent', 'slack agent', 'other agents', 'third party agent'],
    fr: {
      chip: "Brancher tes propres agents",
      answer:
        `Tu fais déjà tourner un agent IA chez Notion, chez Slack ou ailleurs ? Amène-le pour aider un de tes coéquipiers. Ouvre l'éditeur d'agent dans l'atelier du dojo, descends jusqu'à « Aides extérieures » et clique sur « + Ajouter une aide », puis choisis comment elle aide : elle peut prêter ses outils (ils rejoignent tout ce que fait ce coéquipier, exactement comme une application branchée · c'est le standard MCP), prendre une tâche entière à sa charge et renvoyer la réponse (le standard A2A), ou n'être qu'une adresse web à laquelle on envoie la tâche et dont on lit la réponse. Colle l'adresse https et une clé d'accès facultative, puis appuie sur Vérifier pour contrôler qu'elle répond et relire son nom et ce qu'elle sait faire. La clé ne touche jamais ce navigateur · c'est le serveur qui la détient, comme pour tes applications branchées. Passe une tâche entière depuis la carte du coéquipier dans le bureau ; les aides qui prêtent des outils accompagnent automatiquement ce coéquipier chaque fois qu'il travaille.`,
      links: [
        "Ouvrir l'atelier du dojo",
        "Ce qu'est A2A",
        "Ce qu'est MCP",
      ],
    },
  },
  {
    id: 'setup',
    walk: 'apps',
    chip: 'How to connect an app',
    answer:
      'Every agent card AND the Dojo Studio editor show a "Connect tools" panel with the agent\'s curated apps (and a "+ Add apps" button to bring in any other app, or remove one you don\'t use · fully modular, saved per company), plus a short setup guide. FOR YOU it is one click: open the teammate, find the app under its tasks, click Connect and approve once on the app\'s own screen · access is sealed away on the server and your teammate can work inside the app for real. IF YOU RUN THIS DEPLOYMENT (one-time, per app): 1) create an OAuth app in the provider console (Notion integrations, GitHub OAuth apps, Google Cloud credentials…) and set the redirect URI to https://YOUR-SITE/api/connect; 2) copy the client id + secret into env as <APP>_CLIENT_ID and <APP>_CLIENT_SECRET (Google apps share GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET); 3) apps WITH a first-party MCP server (Notion, GitHub, Linear, Stripe) work right away; apps WITHOUT one (Gmail, Drive, Calendar, Slack…) also need <APP>_MCP_URL pointed at a hosted MCP hub (Composio, Zapier, Pipedream). PKCE apps (Airtable, X, Canva) are automatic. Once the env is set the tool shows a Connect button instead of a "set up" link. Every app also has its own step-by-step page in the Dojo Guide (scopes, exact env vars, gotchas) · just name the app and I will link it.',
    links: [
      { label: 'Step-by-step setup for every app', href: '/guide', external: true },
      { label: 'MCP hub (Composio)', href: 'https://composio.dev', external: true },
      { label: 'What is MCP', href: 'https://modelcontextprotocol.io', external: true },
    ],
    follow: ['tools', 'linkagents', 'environment'],
    keywords: ['setup', 'set up', 'client id', 'client secret', 'oauth app', 'redirect', 'env', 'configure', 'composio', 'zapier', 'pipedream', 'mcp url', 'mcp_url', 'hub', 'how to connect', 'create app', 'pkce', 'credentials', 'connect panel', 'studio'],
    fr: {
      chip: "Comment brancher une application",
      answer:
        `Chaque carte d'agent ET l'éditeur de l'atelier montrent un panneau « Brancher des outils » avec les applications choisies de l'agent (et un bouton « + Ajouter » pour en apporter n'importe quelle autre, ou en retirer une dont tu ne te sers pas · entièrement modulaire, enregistré par société), plus un court guide de réglage. POUR TOI, ça tient en un clic : ouvre le coéquipier, trouve l'application sous ses tâches, clique sur Brancher et donne ton accord une fois sur l'écran de l'application · l'accès est scellé sur le serveur et ton coéquipier peut travailler dans l'application pour de vrai. SI TU EXPLOITES CE DÉPLOIEMENT (une seule fois, par application) : 1) crée une application OAuth dans la console du fournisseur (intégrations Notion, applications OAuth GitHub, identifiants Google Cloud…) et règle l'adresse de redirection sur https://TON-SITE/api/connect ; 2) recopie l'identifiant et le secret client dans l'environnement, sous <APP>_CLIENT_ID et <APP>_CLIENT_SECRET (les applications Google partagent GOOGLE_CLIENT_ID et GOOGLE_CLIENT_SECRET) ; 3) les applications qui ont leur propre serveur MCP (Notion, GitHub, Linear, Stripe) marchent tout de suite ; celles qui n'en ont pas (Gmail, Drive, Agenda, Slack…) demandent en plus <APP>_MCP_URL pointé sur un concentrateur MCP hébergé (Composio, Zapier, Pipedream). Les applications en PKCE (Airtable, X, Canva) sont automatiques. Une fois l'environnement réglé, l'outil affiche un bouton Brancher au lieu d'un lien « à régler ». Chaque application a aussi sa page pas à pas dans le guide du dojo (permissions, variables exactes, pièges) · donne-moi le nom de l'application et je t'y emmène.`,
      links: [
        "Réglage pas à pas de chaque application",
        "Concentrateur MCP (Composio)",
        "Ce qu'est MCP",
      ],
    },
  },
  {
    id: 'guide',
    walk: 'overview',
    chip: 'Dojo Guide',
    answer:
      'The Dojo Guide is the full manual, and every section carries its own "How to?" button that plays the matching animated walkthrough full screen. It covers: how the whole thing works, how the practice dojo is laid out, how to shape a team, what each studio does, how to connect an app step by step (with a dedicated page per app), how to keep your budget under control, how to stay safe, and troubleshooting. Open it from the "Dojo Guide" button in the header, on the landing or inside the app.',
    links: [
      { label: 'Open the Dojo Guide', href: '/guide', external: true },
      { label: 'How to connect an app', href: '#stack' },
    ],
    follow: ['setup', 'tools', 'cost'],
    keywords: ['guide', 'dojo guide', 'help', 'how to', 'walkthrough', 'tutorial', 'get started guide', 'security', 'safe', 'hack', 'budget', 'configure'],
    fr: {
      chip: "Le guide du dojo",
      answer:
        `Le guide du dojo, c'est le manuel complet, et chaque section a son propre bouton « Comment faire ? » qui lance la visite animée correspondante en plein écran. Il couvre : comment tout ça marche, comment le dojo d'entraînement est agencé, comment façonner une équipe, ce que fait chaque atelier, comment brancher une application pas à pas (avec une page dédiée par application), comment garder ton budget sous contrôle, comment rester en sécurité, et le dépannage. Ouvre-le depuis le bouton « Guide du dojo » dans l'en-tête, sur la page d'accueil ou dans l'application.`,
      links: [
        "Ouvrir le guide du dojo",
        "Comment brancher une application",
      ],
    },
  },
  {
    id: 'team',
    chip: 'Create & arrange agents',
    answer:
      `Your dojo ships with ${CREW_WORD} teammates, and you can shape the crew any way you like. Create your OWN agent from the CEO dashboard: tap "New agent", give it a name and job title, then open it to set its accent colour, the apps it works with (live connect in place), a task list you assign to it and a private notepad · all saved locally. Hide the presets you don\'t need (restore them anytime from the roster), and rearrange everyone on the dojo grid: tap "Arrange team" on the dojo (or "Arrange on grid" in the CEO dashboard), tap an agent, then tap a cell · the 3D office reseats live, on desktop and mobile. Press Cmd/Ctrl+K (or the Search button) any time for a quick launcher that jumps to any agent, page or action.`,
    links: [
      { label: 'Open the CEO dashboard', href: '#app' },
      { label: 'Build your own team', href: '#studio' },
    ],
    follow: ['skins', 'jobs', 'tools'],
    keywords: ['custom agent', 'create agent', 'new agent', 'add agent', 'build agent', 'own agent', 'arrange', 'rearrange', 'move agent', 'grid', 'hide agent', 'restore agent', 'tasks', 'notes', 'command palette', 'quick search', 'shortcut', 'cmd k', 'ctrl k', 'search', 'team'],
    fr: {
      chip: "Créer et disposer les agents",
      answer:
        `Ton dojo arrive avec ${CREW_WORD} coéquipiers, et tu peux façonner l'équipe comme tu veux. Crée ton PROPRE agent depuis le tableau de bord : touche « Nouvel agent », donne-lui un nom et un intitulé, puis ouvre-le pour régler sa couleur d'accent, les applications avec lesquelles il travaille (branchement en place), une liste de tâches que tu lui confies et un bloc-notes privé · le tout enregistré localement. Masque les préréglages dont tu n'as pas besoin (tu pourras les rétablir à tout moment depuis la liste), et redispose tout le monde sur la grille du dojo : touche « Disposer l'équipe » sur le dojo (ou « Disposer sur la grille » dans le tableau de bord), touche un agent, puis une case · le bureau en trois dimensions se réorganise en direct, sur ordinateur comme sur téléphone. Appuie sur Cmd ou Ctrl + K (ou sur le bouton Rechercher) à tout moment pour ouvrir un lanceur rapide qui saute à n'importe quel agent, n'importe quelle page ou n'importe quelle action.`,
      links: [
        "Ouvrir le tableau de bord",
        "Bâtir ta propre équipe",
      ],
    },
  },
  {
    id: 'skins',
    chip: 'Skins & customization',
    answer:
      'Every agent is fully customizable in the Dojo Studio: 180+ skins across 30 themes and many characters · robots, ninjas, aliens, cats, dragons, ghosts, pandas, a bibendum, a jellyfish, plus Zelda-style knights, mages and mad-scientist professors · each with a vivid face, legs and its own shoes, and sometimes a hat (bowler, top hat, beret, party or flower crown). Click an agent\'s avatar to open its editor, then change the skin, rename it, swap its function and tasks, set a budget, or move it on the grid. You can run several dojos (companies) in different worlds side by side.',
    links: [
      { label: 'Build your own team', href: '#studio' },
      { label: 'Meet the office', href: '#cast' },
    ],
    follow: ['jobs', 'tools'],
    keywords: ['skin', 'skins', 'avatar', 'character', 'customize', 'customise', 'knight', 'zelda', 'mage', 'wizard', 'scientist', 'hat', 'edit agent', 'appearance', 'look', 'theme', 'world'],
    fr: {
      chip: "Apparences et personnalisation",
      answer:
        `Chaque agent se personnalise entièrement dans l'atelier du dojo : plus de 180 apparences réparties sur 30 thèmes et de nombreux personnages · robots, ninjas, extraterrestres, chats, dragons, fantômes, pandas, un bonhomme de pneus, une méduse, et des chevaliers, des mages et des professeurs savants fous à la Zelda · chacun avec un visage marqué, des jambes et ses propres chaussures, parfois un chapeau (melon, haut-de-forme, béret, chapeau de fête ou couronne de fleurs). Clique sur l'avatar d'un agent pour ouvrir son éditeur, puis change l'apparence, renomme-le, échange sa fonction et ses tâches, pose un budget, ou déplace-le sur la grille. Tu peux faire tourner plusieurs dojos (sociétés) dans des univers différents, côte à côte.`,
      links: [
        "Bâtir ta propre équipe",
        "Voir le bureau",
      ],
    },
  },
  {
    id: 'environment',
    chip: 'Cloud or local',
    answer:
      'Run it two ways. Cloud: a managed worker runs the model + tool calls and keeps agents going when the tab is closed, with every key sealed away on the server. Local / self-hosted: run your own worker and point connectors at your own MCP endpoints · your keys, your machine, the same office. Either way the browser is just the cockpit: it shows the 3D office and triggers tasks; the worker does the authenticated work.',
    links: [
      { label: 'Cloud or local', href: '#stack' },
      { label: 'Runtime & environment', href: '#env' },
    ],
    follow: ['tools', 'security'],
    keywords: ['run', 'runs', 'where', 'cloud', 'server', 'browser', 'local', 'self-host', 'self hosted', 'backend', 'worker', 'environment', 'on premise'],
    fr: {
      chip: "Dans le nuage ou chez toi",
      answer:
        `Deux façons de le faire tourner. Dans le nuage : un exécutant géré fait tourner le modèle et les tool calls et garde les agents en marche quand l'onglet est fermé, avec chaque clé scellée sur le serveur. Chez toi : fais tourner ton propre exécutant et pointe les connecteurs sur tes propres points d'accès MCP · tes clés, ta machine, le même bureau. Dans les deux cas, le navigateur n'est que le poste de pilotage : il montre le bureau en trois dimensions et déclenche les tâches ; c'est l'exécutant qui fait le travail authentifié.`,
      links: [
        "Nuage ou machine locale",
        "Exécution et environnement",
      ],
    },
  },
  {
    id: 'networks',
    chip: 'Explore free vs go live',
    answer:
      'Start on the free tier · take the courses, meet the crew and take the worked examples apart in the sandbox, at no cost, and finish with the diploma. When you are ready to go live, you leave with a file rather than a subscription: the instruction and the tool schemas you built, which you point at a framework and run on your own provider key, on the model you choose. We never sit between you and that bill. No crypto at any point.',
    links: [
      { label: 'Open the app', href: '#app' },
      { label: 'Plans & pricing', href: '#pricing' },
    ],
    follow: ['wallet', 'pricing'],
    keywords: ['network', 'testnet', 'devnet', 'mainnet', 'faucet', 'switch', 'live', 'free tier', 'go live', 'explore'],
    fr: {
      chip: "Explorer gratuitement ou passer en vrai",
      answer:
        `Commence par la formule gratuite · suis les cours, rencontre l'équipe et démonte les exemples travaillés dans le bac à sable, sans rien payer, et termine avec le diplôme. Quand tu es prêt à passer en vrai, tu repars avec un fichier plutôt qu'avec un abonnement : le system prompt et les schémas d'outils que tu as construits, que tu pointes sur un framework et que tu fais tourner sur ta propre clé de provider, avec le modèle de ton choix. On ne se met jamais entre toi et cette facture. Aucune cryptomonnaie, à aucun moment.`,
      links: [
        "Ouvrir l'application",
        "Formules et tarifs",
      ],
    },
  },
  {
    id: 'xaman',
    chip: 'Do I need a wallet?',
    answer:
      'No · there is no wallet, no seed and no coins anywhere in DojoBuro. You pay for a plan in your own currency (USD, EUR, JPY…) with a card. There is nothing crypto to set up, secure or understand.',
    links: [
      { label: 'How you pay', href: '#pay' },
      { label: 'Credits & profile', href: '#profile' },
    ],
    follow: ['security', 'wallet'],
    keywords: ['xaman', 'xumm', 'gem', 'gemwallet', 'crossmark', 'sign', 'signing', 'connect wallet', 'wallet', 'crypto', 'coin', 'metamask'],
    fr: {
      chip: "Faut-il un portefeuille ?",
      answer:
        `Non · il n'y a aucun portefeuille, aucune phrase secrète et aucun token de cryptomonnaie nulle part dans DojoBuro. Tu paies une formule dans ta propre monnaie (euro, dollar, yen…) avec une carte. Il n'y a rien de cryptographique à installer, à sécuriser ni à comprendre.`,
      links: [
        "Comment tu paies",
        "Profil et formule",
      ],
    },
  },
  {
    id: 'troubleshoot',
    chip: 'Troubleshooting',
    answer:
      "If a task won't run, check you have not hit your daily limit (or add your own Claude key, which has none), and that the app it needs is connected. If totals look stale, reload to refresh. If the 3D office is blank, your browser may be blocking WebGL · try another browser or enable hardware acceleration.",
    links: [
      { label: 'Open the app', href: '#app' },
    ],
    follow: ['wallet', 'networks'],
    keywords: ['bug', 'broken', 'error', 'not working', 'stuck', 'blank', 'fail', 'problem', 'issue', 'help', 'webgl', 'refresh'],
    fr: {
      chip: "Dépannage",
      answer:
        `Si une tâche refuse de partir, vérifie que tu n'as pas atteint ton plafond quotidien (ou ajoute ta propre clé Claude, qui n'en a aucun), et que l'application dont elle a besoin est bien branchée. Si des totaux semblent figés, recharge la page pour les rafraîchir. Si le bureau en trois dimensions reste vide, ton navigateur bloque peut-être WebGL · essaie un autre navigateur ou active l'accélération matérielle.`,
      links: [
        "Ouvrir l'application",
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
export const GREETING = {
  en:
    "Hi, I'm Dojobot. Short version: this is a training centre. You walk into the dojo, pick the shape of agent you actually need, and build it step by step until you leave with a file you can run anywhere. Everything is free to learn, nothing here calls a paid model, and no account is needed. Ask me anything in your own words, or pick a topic below. When a question has a walkthrough, I can play it for you full screen.",
  fr:
    "Salut, moi c'est Dojobot. En bref : ici, c'est un centre de formation. Tu entres dans le dojo, tu choisis la forme d'agent dont tu as vraiment besoin, et tu construis ton agent étape par étape jusqu'à repartir avec un fichier qui tourne n'importe où. Tout l'apprentissage est gratuit, rien ici n'appelle un modèle payant, et aucun compte n'est nécessaire. Pose-moi ta question avec tes propres mots, ou choisis un sujet ci-dessous. Quand une question a sa visite guidée, je peux te la lancer en plein écran.",
}
