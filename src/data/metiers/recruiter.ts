// LA FORMATION MÉTIER « recruiter » · voir ./types.
//
// LE CYCLE DU MÉTIER, EN TROIS CITÉS · ce qui déclenche le travail (une
// demande de recrutement : trouver le besoin, écrire l'annonce, fixer les
// critères), ce dont il est fait (le tri, le contrôle des biais, les
// entretiens structurés) et ce qui le termine (la décision, l'offre, la
// réponse à chaque candidat et le sort de ses données). Le fil rouge est la
// non-discrimination : aucun critère protégé, des biais testés et non
// supposés, et une décision qui reste humaine et explicable.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { TradePack } from './types'

const TINT = '#a855f7'

/* ================================================================== */
/* CITÉ 1 · DU BESOIN À L'ANNONCE                                      */
/* ================================================================== */

const RH_NEED: Level[] = [
  {
    id: 'rh-intake',
    master: 'planning',
    minutes: 7,
    title: B('Find the job behind the request', 'Trouvez le poste derrière la demande'),
    learn: B(
      "You will turn a manager's vague request into a clear need: expected results, problems to solve, real constraints.",
      "Vous apprendrez à transformer la demande floue d'un manager en besoin clair : résultats attendus, problèmes, contraintes.",
    ),
    act: B('Prepare your intake meeting with the AI, then turn your notes into three outcomes expected at twelve months.',
      "Préparez avec l'IA votre réunion de cadrage, puis tirez de vos notes trois résultats attendus à douze mois."),
    steps: [
      B('Give the request as written, the team, and why the position is open now.',
        "Donnez la demande telle qu'elle est écrite, l'équipe, et la raison pour laquelle le poste s'ouvre maintenant."),
      B('Ask for ten questions on results and problems, not on profile or background.',
        "Demandez dix questions sur les résultats et les problèmes, non sur le profil ou le parcours."),
      B('After the meeting, ask for three observable outcomes at twelve months, taken from your notes only.',
        "Après la réunion, demandez trois résultats observables à douze mois, tirés de vos seules notes."),
      B('Have the manager validate the outcomes in writing before any ad is drafted.',
        "Faites valider ces résultats par écrit par le manager avant toute rédaction d'annonce."),
    ],
    trap: B(
      'Starting from the previous job description: you hire a copy of the last person, including needs that no longer exist.',
      "Partir de l'ancienne fiche de poste : vous recrutez une copie de la personne précédente, y compris des besoins disparus.",
    ),
    quiz: {
      q: B('The manager asks for "someone young and dynamic, like the last one". What do you do first?',
        "Le manager demande « quelqu'un de jeune et dynamique, comme le précédent ». Que faites-vous d'abord ?"),
      options: [
        B('Put "young and dynamic team" in the ad, as he wants', "Vous écrivez « équipe jeune et dynamique » dans l'annonce"),
        B('Ask what results the person must achieve in a year', 'Vous demandez quels résultats la personne devra obtenir en un an'),
        B('Look for profiles similar to the previous holder of the job', 'Vous cherchez des profils proches de celui du précédent titulaire'),
      ],
      answer: 1,
      why: B(
        'Age is a protected criterion: it cannot appear in an ad or a selection. Behind "dynamic" there is usually a real need (pace, workload) that a result describes without discriminating.',
        "L'âge est un critère protégé : il ne peut figurer ni dans une annonce ni dans une sélection. Derrière « dynamique » se cache souvent un vrai besoin (rythme, charge) qu'un résultat décrit sans discriminer.",
      ),
    },
    badge: B('Need before profile', 'Le besoin avant le profil'),
  },
  {
    id: 'rh-ad',
    master: 'writing',
    minutes: 7,
    title: B('A job ad built on outcomes', 'Une annonce bâtie sur des résultats'),
    learn: B(
      'You will write an ad that describes the work and the real requirements, in words that exclude no one without reason.',
      "Vous rédigerez une annonce qui décrit le travail et les vraies exigences, sans mots qui écartent quiconque sans raison.",
    ),
    act: B('Draft your ad from the validated outcomes, then check it for exclusionary words and inflated requirements.',
      "Rédigez l'annonce à partir des résultats validés, puis traquez les mots excluants et les exigences gonflées."),
    steps: [
      B('Give the three outcomes, the team, the salary range and the working conditions.',
        "Donnez les trois résultats, l'équipe, la fourchette de salaire et les conditions de travail."),
      B('Split requirements into three to five must-haves and some nice-to-haves, and justify each must-have.',
        "Séparez trois à cinq exigences indispensables des souhaitables, et justifiez chaque indispensable."),
      B('Ask for the words that could deter or exclude a group, with a neutral alternative for each.',
        "Demandez les mots qui pourraient dissuader ou exclure un groupe, avec une alternative neutre pour chacun."),
      B('Reread it yourself: no age, gender, origin, health or family situation, even implied.',
        "Relisez vous-même : ni âge, ni sexe, ni origine, ni santé, ni situation familiale, même sous-entendus."),
    ],
    trap: B(
      '"Native speaker", "digital native", "recent graduate": common phrases that exclude by origin or age. The model writes them easily.',
      "« Langue maternelle », « digital native », « jeune diplômé » : des formules courantes qui excluent par l'origine ou l'âge. Le modèle les écrit volontiers.",
    ),
    quiz: {
      q: B('The job requires a high level of English. Which wording is right?',
        "Le poste exige un excellent niveau d'anglais. Quelle formulation est juste ?"),
      options: [
        B('English native speaker', 'Anglais langue maternelle'),
        B('Fluent English, to negotiate contracts with UK clients', 'Anglais courant, pour négocier des contrats avec des clients britanniques'),
        B('Perfectly bilingual profile, ideally someone who grew up abroad', "Profil parfaitement bilingue, idéalement élevé à l'étranger"),
      ],
      answer: 1,
      why: B(
        'Describe the level and what it is for. "Native speaker" and "grew up abroad" select by origin, not by skill, and exclude people who speak the language perfectly.',
        "Décrivez le niveau et son usage. « Langue maternelle » ou « élevé à l'étranger » sélectionnent par l'origine, non par la compétence, et excluent des personnes qui parlent parfaitement la langue.",
      ),
    },
    badge: B('Ads that exclude no one', "Des annonces qui n'excluent personne"),
  },
  {
    id: 'rh-criteria',
    master: 'analysis',
    minutes: 6,
    title: B('Set the criteria before the first CV', 'Fixez les critères avant le premier CV'),
    learn: B(
      'You will build a grid of four to six criteria, each with the evidence that shows it, before reading any application.',
      "Vous construirez une grille de quatre à six critères, chacun avec sa preuve observable, avant de lire une candidature.",
    ),
    act: B('Turn your must-haves into a grid: criterion, observable evidence, and what weak, solid and strong look like.',
      "Transformez vos indispensables en grille : critère, preuve observable, et ce que sont les niveaux faible, solide, fort."),
    steps: [
      B('Derive each criterion from an outcome of the job, never from a school, a company or a hobby.',
        "Tirez chaque critère d'un résultat attendu, jamais d'une école, d'une entreprise ou d'un loisir."),
      B('For each one, write the evidence you could find in a CV or hear in an interview.',
        "Pour chacun, écrivez la preuve que l'on peut trouver dans un CV ou entendre en entretien."),
      B('Ask the AI to spot criteria that could act as a proxy for age, gender or origin.',
        "Demandez à l'IA de repérer les critères qui pourraient servir d'indicateur indirect d'âge, de sexe ou d'origine."),
      B('Freeze the grid with the manager before opening the first application.',
        "Figez la grille avec le manager avant d'ouvrir la première candidature."),
    ],
    trap: B(
      'Setting the criteria after reading a few CVs: the grid then describes the candidate you liked, and every later file is judged against that person.',
      "Fixer les critères après quelques CV lus : la grille décrit alors le candidat qui vous a plu, et chaque dossier suivant est jugé contre lui.",
    ),
    quiz: {
      q: B('Which criterion belongs in the grid for a customer support team lead?',
        "Quel critère a sa place dans la grille d'un responsable d'équipe support client ?"),
      options: [
        B('Graduated from a well-known business school', "Diplômé d'une école de commerce reconnue"),
        B('Ten years or more of experience in the sector', "Dix ans d'expérience ou plus dans le secteur"),
        B('Has led a team through a peak of complaints', 'A mené une équipe pendant un pic de réclamations'),
      ],
      answer: 2,
      why: B(
        'A school says where someone studied, not what they can do. "Ten years or more" filters by age as much as by skill. Leading a team through a peak is evidence linked to the job.',
        "Une école dit où l'on a étudié, pas ce que l'on sait faire. « Dix ans ou plus » filtre par l'âge autant que par la compétence. Avoir mené une équipe dans un pic est une preuve liée au poste.",
      ),
    },
    badge: B('Criteria fixed in advance', "Des critères fixés d'avance"),
  },
]

/* ================================================================== */
/* CITÉ 2 · SÉLECTIONNER AVEC ÉQUITÉ                                   */
/* ================================================================== */

const RH_SELECT: Level[] = [
  {
    id: 'rh-screen',
    master: 'triage',
    minutes: 7,
    title: B('Screen applications against your grid', 'Triez les candidatures selon votre grille'),
    learn: B(
      'You will use the AI to extract evidence per criterion from anonymised files, while every decision stays yours.',
      "Vous utiliserez l'IA pour extraire des preuves par critère de dossiers anonymisés, chaque décision restant la vôtre.",
    ),
    act: B('Anonymise three applications, ask for the evidence found for each criterion, then decide yourself.',
      "Anonymisez trois candidatures, demandez les preuves trouvées pour chaque critère, puis décidez vous-même."),
    steps: [
      B('Check that your company allows this AI tool for candidate data before sending anything.',
        "Vérifiez que votre entreprise autorise cet outil IA pour des données de candidats avant tout envoi."),
      B('Remove name, photo, age, address, nationality and anything revealing family or health.',
        "Retirez nom, photo, âge, adresse, nationalité et tout ce qui révèle la situation familiale ou la santé."),
      B('Ask for quotes from the file for each criterion, and "no evidence found" when there are none.',
        "Demandez des citations du dossier pour chaque critère, et « aucune preuve trouvée » en leur absence."),
      B('Read each file yourself before deciding: the extraction helps, it does not choose.',
        "Lisez vous-même chaque dossier avant de décider : l'extraction aide, elle ne choisit pas."),
    ],
    trap: B(
      '"Rank these fifty CVs and keep the ten best": an opaque ranking where the model\'s biases decide, and no rejection can be explained.',
      "« Classe ces cinquante CV et garde les dix meilleurs » : un classement opaque où les biais du modèle décident, et aucun refus n'est explicable.",
    ),
    quiz: {
      q: B('The AI finds "no evidence" for a criterion in a CV. What do you do?',
        "L'IA ne trouve « aucune preuve » d'un critère dans un CV. Que faites-vous ?"),
      options: [
        B('Read the CV yourself: the evidence may be worded differently', 'Vous lisez le CV vous-même : la preuve peut être formulée autrement'),
        B('Reject the application, since this criterion is a must-have for the job', 'Vous écartez la candidature, ce critère étant indispensable au poste'),
        B('Ask the AI to rate the candidate out of ten instead', "Vous demandez plutôt à l'IA de noter le candidat sur dix"),
      ],
      answer: 0,
      why: B(
        'A missing quote means the model did not find the words, not that the skill is absent. A rejection must be a human decision you can explain, based on your own reading.',
        "Une citation absente signifie que le modèle n'a pas trouvé les mots, non que la compétence manque. Un refus doit être une décision humaine explicable, fondée sur votre propre lecture.",
      ),
    },
    badge: B('Evidence-based screening', 'Un tri fondé sur des preuves'),
  },
  {
    id: 'rh-bias',
    master: 'watch',
    minutes: 7,
    title: B('Test the model for bias before trusting it', 'Testez les biais du modèle avant de vous y fier'),
    learn: B(
      'You will run a paired test: the same application with one protected detail changed, to see if the output moves.',
      "Vous mènerez un test par paires : la même candidature avec un seul détail protégé modifié, pour voir si le résultat bouge.",
    ),
    act: B('Submit one CV in two copies differing only by the first name, and compare the outputs line by line.',
      "Soumettez un CV en deux copies qui ne diffèrent que par le prénom, et comparez les résultats ligne à ligne."),
    steps: [
      B('Take a real, anonymised CV and make two copies that differ by one detail: first name, age, career gap.',
        "Prenez un vrai CV anonymisé et faites-en deux copies qui ne diffèrent que d'un détail : prénom, âge, interruption."),
      B('Run your usual screening prompt several times on each copy, in separate conversations.',
        "Lancez votre prompt de tri habituel plusieurs fois sur chaque copie, dans des conversations séparées."),
      B('Compare evidence, wording and tone. A difference that repeats comes from the detail you changed.',
        "Comparez les preuves, les formulations et le ton. Une différence qui se répète vient du détail modifié."),
      B('If the outputs differ, suspend the workflow and report it; do not correct case by case.',
        "Si les résultats diffèrent, suspendez le procédé et signalez-le ; ne corrigez pas au cas par cas."),
    ],
    trap: B(
      'Believing that removing the name removes the bias: a career gap, a postcode or a graduation year can carry the same signal.',
      "Croire qu'ôter le nom supprime le biais : une interruption de carrière, un code postal ou une année de diplôme portent le même signal.",
    ),
    quiz: {
      q: B('Your paired test gives a weaker output for the copy with a career gap. What do you do?',
        "Votre test par paires donne un résultat plus faible pour la copie avec une interruption de carrière. Que faites-vous ?"),
      options: [
        B('Add "ignore career gaps" to the prompt, then carry on screening as before', "Vous ajoutez « ignore les interruptions » au prompt et poursuivez le tri"),
        B('Carry on: one test is not enough to conclude anything', 'Vous continuez : un seul test ne permet pas de conclure'),
        B('Suspend the workflow, rerun the test, and report the result', 'Vous suspendez le procédé, refaites le test et signalez le résultat'),
      ],
      answer: 2,
      why: B(
        'A gap can reflect illness, parental leave or caring for someone: protected situations. A prompt patch does not prove the bias is gone. Suspend, confirm, and report.',
        "Une interruption peut refléter une maladie, un congé parental ou l'aide à un proche : des situations protégées. Un correctif de prompt ne prouve rien. Suspendez, confirmez, signalez.",
      ),
    },
    badge: B('Bias tested, not assumed', 'Des biais testés, pas supposés'),
  },
  {
    id: 'rh-interview',
    master: 'research',
    minutes: 7,
    title: B('Same questions, same scale, for everyone', 'Mêmes questions, même échelle, pour tous'),
    learn: B(
      'You will prepare a structured interview: questions tied to your criteria and a rating scale with described levels.',
      "Vous préparerez un entretien structuré : des questions liées à vos critères et une échelle aux niveaux décrits.",
    ),
    act: B('Build your interview guide with the AI: two questions per criterion and a scale from 1 to 4 described in words.',
      "Construisez votre guide d'entretien avec l'IA : deux questions par critère et une échelle de 1 à 4 décrite en mots."),
    steps: [
      B('Give your grid and ask for questions on past situations: "Tell me about a time when..."',
        "Donnez votre grille et demandez des questions sur des situations vécues : « Racontez une fois où... »"),
      B('For each criterion, ask what an answer scored 1, 2, 3 and 4 sounds like, in concrete terms.',
        "Pour chaque critère, demandez à quoi ressemble concrètement une réponse notée 1, 2, 3 et 4."),
      B('Remove any question on private life, plans for children, religion, health or origin.',
        "Retirez toute question sur la vie privée, les projets d'enfants, la religion, la santé ou l'origine."),
      B('Ask every candidate the same questions in the same order, and note what they say.',
        "Posez les mêmes questions à chaque candidat, dans le même ordre, et notez ce qu'il dit."),
    ],
    trap: B(
      'A free-flowing chat "to get a feel": each candidate gets different questions, and the verdict measures how much you liked them.',
      "Une conversation libre « pour sentir la personne » : chaque candidat reçoit des questions différentes, et le verdict mesure votre sympathie.",
    ),
    quiz: {
      q: B('A panel member wants to ask a candidate whether she plans to have children soon. What do you say?',
        "Un membre du jury veut demander à une candidate si elle prévoit d'avoir des enfants bientôt. Que dites-vous ?"),
      options: [
        B('That the question is off limits: it is discriminatory', 'Que la question est exclue : elle est discriminatoire'),
        B('That he may ask it if he asks the men the same thing', "Qu'il peut la poser s'il la pose aussi aux hommes"),
        B('That he may ask it at the end, informally, off the record', "Qu'il peut la poser à la fin, de manière informelle"),
      ],
      answer: 0,
      why: B(
        'Family plans and pregnancy are protected. Asking everyone does not make the question lawful, and "informally" changes nothing: the answer could still weigh on the decision.',
        "Les projets familiaux et la grossesse sont protégés. Poser la question à tous ne la rend pas licite, et « de manière informelle » n'y change rien : la réponse pèserait sur la décision.",
      ),
    },
    badge: B('Structured interviews', 'Des entretiens structurés'),
  },
]

/* ================================================================== */
/* CITÉ 3 · DÉCIDER, PROPOSER, INFORMER                                */
/* ================================================================== */

const RH_CLOSE: Level[] = [
  {
    id: 'rh-debrief',
    master: 'orchestration',
    minutes: 6,
    title: B('Decide on evidence, not impressions', 'Décidez sur des preuves, pas sur des impressions'),
    learn: B(
      'You will run a debrief where each interviewer scores alone first, and the AI only organises the evidence.',
      "Vous mènerez un débriefing où chacun note seul d'abord, et où l'IA ne fait qu'organiser les preuves.",
    ),
    act: B("Collect each interviewer's notes and scores, ask for an evidence table per criterion, then decide together.",
      "Réunissez notes et scores de chaque intervieweur, demandez un tableau de preuves par critère, puis décidez ensemble."),
    steps: [
      B('Have each interviewer score every criterion alone, with a quote, before any discussion.',
        "Faites noter chaque critère par chaque intervieweur seul, avec une citation, avant toute discussion."),
      B('Ask the AI for a table: criterion, scores, quotes, and where the interviewers disagree.',
        "Demandez à l'IA un tableau : critère, scores, citations, et points de désaccord entre intervieweurs."),
      B('Discuss the disagreements first, going back to the quotes, not to impressions.',
        "Discutez d'abord les désaccords, en revenant aux citations, non aux impressions."),
      B('Record the decision and its reasons per criterion, in the words of those who decide.',
        "Consignez la décision et ses raisons critère par critère, dans les mots de ceux qui décident."),
    ],
    trap: B(
      'Asking the AI "who should we hire?": the model ranks people it has never met, and the team hides behind a verdict nobody gave.',
      "Demander à l'IA « qui embaucher ? » : le modèle classe des gens qu'il n'a jamais vus, et l'équipe se cache derrière un verdict sans auteur.",
    ),
    quiz: {
      q: B('In the debrief, the most senior interviewer speaks first and everyone agrees. What was missing?',
        "Au débriefing, l'intervieweur le plus ancien parle en premier et tous l'approuvent. Qu'est-ce qui a manqué ?"),
      options: [
        B('Nothing: the most experienced opinion should naturally prevail', "Rien : l'avis le plus expérimenté doit primer"),
        B('Scores recorded individually before the meeting', 'Des scores notés individuellement avant la réunion'),
        B('The AI should have spoken first to stay neutral', "L'IA aurait dû s'exprimer en premier, par neutralité"),
      ],
      answer: 1,
      why: B(
        'Once a senior voice is heard, others anchor on it. Scores written alone beforehand keep each view independent, so the discussion compares evidence rather than rank.',
        "Une fois qu'une voix d'autorité s'est exprimée, les autres s'y alignent. Des scores écrits seuls au préalable gardent chaque avis indépendant, et la discussion compare des preuves.",
      ),
    },
    badge: B('Decisions backed by evidence', 'Des décisions étayées'),
  },
  {
    id: 'rh-offer',
    master: 'extraction',
    minutes: 6,
    title: B('An offer the candidate can check', 'Une offre que le candidat peut vérifier'),
    learn: B(
      'You will draft an offer where every figure and condition comes from a validated source, never from the model.',
      "Vous rédigerez une offre dont chaque chiffre et chaque condition viennent d'une source validée, jamais du modèle.",
    ),
    act: B('List the validated terms, have the offer drafted from them only, then check each figure against its source.',
      "Listez les conditions validées, faites rédiger l'offre à partir d'elles seules, puis vérifiez chaque chiffre."),
    steps: [
      B('Gather the approved terms: salary, start date, trial period, working hours, benefits.',
        "Réunissez les conditions approuvées : salaire, date d'entrée, période d'essai, horaires, avantages."),
      B('Ask for the offer using only those terms, with [TO CONFIRM] for anything missing.',
        "Demandez l'offre avec ces seules conditions, et [À CONFIRMER] pour tout élément manquant."),
      B('Check each figure and each date against the approved source, one by one.',
        "Vérifiez chaque chiffre et chaque date contre la source approuvée, un par un."),
      B('Remove any promise nobody approved: bonus, remote days, promotion.',
        "Supprimez toute promesse que personne n'a validée : prime, télétravail, promotion."),
    ],
    trap: B(
      'Letting the model "complete" the offer: it adds a plausible bonus or benefit, and the candidate signs believing it.',
      "Laisser le modèle « compléter » l'offre : il ajoute une prime ou un avantage plausible, et le candidat signe en y croyant.",
    ),
    quiz: {
      q: B('The draft offer mentions "a 13th-month bonus", which is not in the approved terms. What do you do?',
        "L'offre rédigée mentionne « un treizième mois », absent des conditions approuvées. Que faites-vous ?"),
      options: [
        B('Keep it: it is standard in the sector', "Vous le gardez : c'est l'usage dans le secteur"),
        B('Ask the manager informally whether it is fine to leave it in', "Vous demandez au manager, en passant, s'il peut rester"),
        B('Remove it, and add it back only once it is approved', "Vous le retirez, et ne le rétablissez qu'une fois approuvé"),
      ],
      answer: 2,
      why: B(
        'An offer commits the company. A clause the model added "because it is usual" becomes a promise the candidate relies on. Only approved terms go into the offer.',
        "Une offre engage l'entreprise. Une clause ajoutée par le modèle « parce que c'est l'usage » devient une promesse sur laquelle le candidat compte. Seules les conditions approuvées y figurent.",
      ),
    },
    badge: B('Offers without surprises', 'Des offres sans surprise'),
  },
  {
    id: 'rh-reply',
    master: 'support',
    minutes: 6,
    title: B('Answer every candidate, protect their data', 'Répondez à chaque candidat, protégez ses données'),
    learn: B(
      'You will write clear, respectful rejections and handle candidate data as the law and your policy require.',
      "Vous rédigerez des refus clairs et respectueux, et traiterez les données des candidats comme la loi et votre politique l'exigent.",
    ),
    act: B('Write a rejection template with the AI, then check the retention rules for the files you hold.',
      "Rédigez avec l'IA un modèle de refus, puis vérifiez les règles de conservation des dossiers que vous détenez."),
    steps: [
      B('Give the stage reached and one or two job-related reasons you are willing to share.',
        "Donnez l'étape atteinte et une ou deux raisons liées au poste que vous acceptez de partager."),
      B('Ask for a short, human message: thanks, decision, reason, next step if any.',
        "Demandez un message court et humain : remerciement, décision, raison, suite éventuelle."),
      B('Check that no reason refers to a protected criterion, even politely worded.',
        "Vérifiez qu'aucune raison ne renvoie à un critère protégé, même formulée avec tact."),
      B('Delete or archive files as your retention policy says, and never paste them into unapproved tools.',
        "Supprimez ou archivez les dossiers selon votre politique, sans jamais les coller dans un outil non autorisé."),
    ],
    trap: B(
      'A rejection that mentions "a better cultural fit" or "a more junior profile": vague at best, discriminatory at worst.',
      "Un refus qui invoque une « meilleure adéquation culturelle » ou « un profil plus junior » : flou au mieux, discriminatoire au pire.",
    ),
    quiz: {
      q: B('A rejected candidate asks for the data you hold about her. What do you do?',
        "Une candidate refusée demande les données que vous détenez sur elle. Que faites-vous ?"),
      options: [
        B('Apply your data protection procedure, within the legal time limit', 'Vous appliquez votre procédure de protection des données, dans le délai légal'),
        B('Refuse politely, since the recruitment process for the job is now closed', 'Vous refusez poliment, puisque le recrutement pour ce poste est clos'),
        B('Send only the AI summaries, which are not personal data in any case', "Vous envoyez seulement les résumés de l'IA, qui ne sont pas des données personnelles"),
      ],
      answer: 0,
      why: B(
        'Under data protection law such as the GDPR, candidates can access their data, including notes and AI summaries about them. Your procedure and its deadline apply.',
        "Selon le droit de la protection des données, comme le RGPD, un candidat peut accéder à ses données, y compris les notes et résumés de l'IA le concernant. Votre procédure et son délai s'appliquent.",
      ),
    },
    badge: B('Respectful, lawful replies', 'Des réponses respectueuses et licites'),
  },
]

/* ================================================================== */
/* LES TROIS CITÉS ET LE MÉTIER                                        */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: 'rh-need', track: 'trade', glyph: 'pen', tint: TINT, at: [1, 32], levels: RH_NEED,
    title: B('From the need to the job ad', "Du besoin à l'annonce"),
    blurb: B('Find the job behind the request, write an ad built on outcomes, fix your criteria before the first CV.',
      "Trouvez le poste derrière la demande, rédigez une annonce fondée sur des résultats, fixez vos critères avant le premier CV."),
  },
  {
    id: 'rh-select', track: 'trade', glyph: 'clan', tint: TINT, at: [3, 32], levels: RH_SELECT,
    title: B('Select fairly', 'Sélectionner avec équité'),
    blurb: B('Screen anonymised files against your grid, test the model for bias, run structured interviews.',
      "Triez des dossiers anonymisés selon votre grille, testez les biais du modèle, menez des entretiens structurés."),
  },
  {
    id: 'rh-close', track: 'trade', glyph: 'envelope', tint: TINT, at: [5, 32], levels: RH_CLOSE,
    title: B('Decide, offer, inform', 'Décider, proposer, informer'),
    blurb: B('Decide on evidence, write an offer the candidate can check, answer every candidate with respect.',
      "Décidez sur des preuves, rédigez une offre vérifiable, répondez à chaque candidat avec égard."),
  },
]

/* ================================================================== */
/* L'APPROFONDISSEMENT (data/enrich)                                   */
/* ================================================================== */

const ENRICH: Record<string, Enrichment> = {
  /*@@ENRICH*/
}

/* ================================================================== */
/* LA COUCHE PÉDAGOGIQUE (data/deep)                                   */
/* ================================================================== */

const DEEP: Record<string, Deepening> = {
  /*@@DEEP*/
}

export const METIER_RECRUITER: TradePack = {
  trade: {
    id: 'recruiter',
    label: B('Recruiter', 'Recruteur'),
    who: B('You hire for your company or your clients, and you answer for how every candidate is treated.',
      "Vous recrutez pour votre entreprise ou vos clients, et vous répondez de la façon dont chaque candidat est traité."),
    glyph: 'clan', tint: TINT,
    cities: ['rh-need', 'rh-select', 'rh-close'],
  },
  modules: MODULES,
  enrich: ENRICH,
  deep: DEEP,
}
