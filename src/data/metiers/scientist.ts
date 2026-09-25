// LA FORMATION MÉTIER « scientist » · voir ./types. Trois cités qui suivent le
// cycle réel d'une recherche : la littérature (ce qui déclenche le travail),
// l'étude elle-même, hypothèse, protocole et statistiques (ce dont il est
// fait), puis écrire, relire et obtenir un financement (ce qui le termine).
// Le fil rouge : le modèle n'invente jamais une référence, une donnée ni un
// résultat, chaque citation est vérifiée, les chiffres viennent de vos
// propres calculs, et les données inédites restent confidentielles.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { TradePack } from './types'

const TINT = '#6366f1'

/* ================================================================== */
/* CITÉ 1 · LA LITTÉRATURE                                             */
/* ================================================================== */

const SC_LIT: Level[] = [
  {
    id: 'sc-search',
    master: 'research',
    minutes: 7,
    title: B('Search strategies you run yourself', 'Des requêtes bibliographiques à lancer vous-même'),
    learn: B(
      'You will use AI to build a database search strategy, then run it yourself, so every reference comes from a real index.',
      "Vous ferez construire par l'IA une stratégie de recherche, puis la lancerez vous-même : chaque référence viendra d'un vrai index.",
    ),
    act: B('Describe your question, get synonyms and a boolean query, and run it in a bibliographic database.',
      "Décrivez votre question, obtenez synonymes et requête booléenne, et lancez-la dans une base bibliographique."),
    steps: [
      B('State your question in parts: population, exposure or intervention, outcome, study type.',
        "Énoncez votre question par éléments : population, exposition ou intervention, résultat, type d'étude."),
      B('Ask for synonyms and controlled vocabulary for each part, then a boolean query for your database.',
        "Demandez synonymes et vocabulaire contrôlé pour chaque élément, puis une requête booléenne pour votre base."),
      B('Run the query yourself in the database, and note the date and the number of hits.',
        "Lancez vous-même la requête dans la base, et notez la date et le nombre de résultats."),
      B('Check that three papers you already know come up. If not, fix the query, not the list.',
        "Vérifiez que trois articles que vous connaissez déjà remontent. Sinon, corrigez la requête, pas la liste."),
    ],
    trap: B(
      'Asking the model "list the key papers on this topic". It can return real-looking references that do not exist, or real papers with wrong details.',
      "Demander au modèle « liste les articles clés sur ce sujet ». Il peut rendre des références crédibles mais inexistantes, ou de vrais articles aux détails faux.",
    ),
    quiz: {
      q: B('How do you know your search query is good enough?', "Comment savoir si votre requête est assez bonne ?"),
      options: [
        B('It returns fewer than fifty results', 'Elle rend moins de cinquante résultats'),
        B('It finds the key papers you already know', 'Elle retrouve les articles clés que vous connaissez déjà'),
        B('The AI rated it as complete, precise and well built', "L'IA l'a jugée complète, précise et bien construite"),
      ],
      answer: 1,
      why: B(
        "Known relevant papers act as a test set. If the query misses them, it misses others too; a small number of hits or the AI's opinion proves nothing.",
        "Des articles pertinents déjà connus servent de jeu de test. Si la requête les manque, elle en manque d'autres ; un petit nombre de résultats ou l'avis de l'IA ne prouvent rien.",
      ),
    },
    badge: B('Searches the indexes, not the model', 'Cherche dans les index, pas dans le modèle'),
  },
  {
    id: 'sc-read',
    master: 'extraction',
    minutes: 7,
    title: B('Read a paper like a reviewer', 'Lisez un article en relecteur'),
    learn: B(
      "You will extract a paper's claim, design, sample and limits, each tied to a quoted passage you can verify.",
      "Vous extrairez l'affirmation, le protocole, l'échantillon et les limites d'un article, chacun lié à un passage cité.",
    ),
    act: B('Give the AI a full paper and ask for a reading grid where every entry quotes the text.',
      "Donnez à l'IA un article complet et demandez une grille de lecture où chaque case cite le texte."),
    steps: [
      B('Paste the full text, methods included. The abstract alone hides what matters.',
        "Collez le texte intégral, méthodes comprises. Le résumé seul cache l'essentiel."),
      B('Ask for main claim, design, sample size, controls, effect size and stated limits.',
        "Demandez l'affirmation principale, le protocole, l'effectif, les témoins, la taille d'effet et les limites."),
      B('Require a quote and section for each entry, and "not reported" when the paper is silent.',
        "Exigez une citation et sa section pour chaque case, et « non rapporté » quand l'article se tait."),
      B('Check three quotes in the PDF, then ask what the design cannot conclude.',
        "Vérifiez trois citations dans le PDF, puis demandez ce que le protocole ne permet pas de conclure."),
    ],
    trap: B(
      "Reading only the AI summary. It repeats the authors' framing and can smooth over a small sample or a missing control.",
      "Ne lire que le résumé de l'IA. Il reprend le cadrage des auteurs et peut gommer un petit effectif ou un témoin manquant.",
    ),
    quiz: {
      q: B('The grid says "sample: 24 mice" but gives no quote. What do you do?',
        "La grille indique « échantillon : 24 souris » sans citation. Que faites-vous ?"),
      options: [
        B('Find the number in the paper yourself', "Retrouver vous-même le chiffre dans l'article"),
        B('Keep it, since the number is plausible for such a study', "Le garder, car le chiffre est plausible pour ce type d'étude"),
        B('Ask the AI whether it is sure', "Demander à l'IA si elle en est sûre"),
      ],
      answer: 0,
      why: B(
        'A figure without a quote may be inferred or invented. Only the text proves it; asking the model if it is sure just gives you a second guess.',
        "Un chiffre sans citation peut être déduit ou inventé. Seul le texte le prouve ; demander au modèle s'il est sûr ne vous donne qu'une seconde supposition.",
      ),
    },
    badge: B('Reads with quotes in hand', 'Lit avec les citations en main'),
  },
  {
    id: 'sc-map',
    master: 'triage',
    minutes: 6,
    title: B('Map what is known, and what is not', "Cartographiez le connu et l'inconnu"),
    learn: B(
      'You will build a synthesis table from papers you have read, and spot agreements, conflicts and gaps.',
      "Vous construirez un tableau de synthèse à partir d'articles lus, et repérerez accords, contradictions et lacunes.",
    ),
    act: B('Give the AI your reading grids and ask for a table by question, method and finding, then the gaps.',
      "Donnez à l'IA vos grilles de lecture et demandez un tableau par question, méthode et résultat, puis les lacunes."),
    steps: [
      B('Paste only grids of papers you have read, each with its reference.',
        "Collez seulement les grilles d'articles que vous avez lus, chacune avec sa référence."),
      B('Ask for one row per paper and columns you choose: population, method, result, limits.',
        "Demandez une ligne par article et des colonnes que vous choisissez : population, méthode, résultat, limites."),
      B('Ask where results conflict, and which difference in method could explain it.',
        "Demandez où les résultats divergent, et quelle différence de méthode pourrait l'expliquer."),
      B('Ask what no paper in the table has studied. Treat each gap as a lead to verify.',
        "Demandez ce qu'aucun article du tableau n'a étudié. Traitez chaque lacune comme une piste à vérifier."),
    ],
    trap: B(
      'Taking "no study has looked at X" as a fact. It only means none of your papers did; search the databases before writing it.',
      "Prendre « aucune étude n'a examiné X » pour un fait. Cela signifie seulement qu'aucun de vos articles ne l'a fait ; cherchez dans les bases avant de l'écrire.",
    ),
    quiz: {
      q: B('The table shows two studies with opposite results. What do you ask first?',
        "Le tableau montre deux études aux résultats opposés. Que demandez-vous d'abord ?"),
      options: [
        B('Which of the two is right', 'Laquelle des deux a raison'),
        B('Which one was published in the better journal', 'Laquelle a paru dans la meilleure revue'),
        B('What differs in their populations or methods', 'Ce qui diffère dans leurs populations ou leurs méthodes'),
      ],
      answer: 2,
      why: B(
        'Opposite results often come from different populations, doses or measures. Finding that difference is a finding in itself, and often the gap your work can fill.',
        "Des résultats opposés viennent souvent de populations, de doses ou de mesures différentes. Trouver cette différence est déjà un résultat, et souvent la lacune que votre travail peut combler.",
      ),
    },
    badge: B('Maps the field from real reading', 'Cartographie ses lectures'),
  },
]

/* ================================================================== */
/* CITÉ 2 · CONCEVOIR ET ANALYSER L'ÉTUDE                              */
/* ================================================================== */

const SC_STUDY: Level[] = [
  {
    id: 'sc-hypothesis',
    master: 'growth',
    minutes: 6,
    title: B('A hypothesis that can be proven wrong', 'Une hypothèse qui peut être réfutée'),
    learn: B(
      'You will turn a vague idea into a testable hypothesis, with a prediction and the result that would refute it.',
      "Vous transformerez une idée vague en hypothèse testable, avec une prédiction et le résultat qui la réfuterait.",
    ),
    act: B('Write your idea in one sentence, then have the AI challenge it until it names a result that would refute it.',
      "Écrivez votre idée en une phrase, puis faites-la contester par l'IA jusqu'à nommer le résultat qui la réfuterait."),
    steps: [
      B('Write the idea as you would say it to a colleague, even if it is vague.',
        "Écrivez l'idée comme vous la diriez à un collègue, même vague."),
      B('Ask the AI to name each variable, how it is measured, and in whom.',
        "Demandez à l'IA de nommer chaque variable, sa mesure et la population concernée."),
      B('Ask for the prediction as a direction and a size, and for the result that would refute it.',
        "Demandez la prédiction sous forme de sens et d'ampleur, et le résultat qui la réfuterait."),
      B('Ask for two rival explanations of the same prediction, and how to tell them apart.',
        "Demandez deux explications rivales de la même prédiction, et comment les départager."),
    ],
    trap: B(
      'Keeping a hypothesis that any result would confirm. "X influences Y" survives every outcome, so it tells you nothing.',
      "Garder une hypothèse que tout résultat confirmerait. « X influence Y » survit à toute issue, et ne vous apprend donc rien.",
    ),
    quiz: {
      q: B('Which hypothesis can actually be refuted?', 'Quelle hypothèse peut réellement être réfutée ?'),
      options: [
        B('Sleep plays a role in memory', 'Le sommeil joue un rôle dans la mémoire'),
        B('One night without sleep lowers recall by at least 10% the next day', "Une nuit blanche réduit le rappel d'au moins 10 % le lendemain"),
        B('Sleep may affect memory in some people under certain conditions, depending on context', 'Le sommeil peut affecter la mémoire chez certains, selon les conditions et le contexte'),
      ],
      answer: 1,
      why: B(
        'Only the second names a measure, a direction and a threshold. A result below 10% would refute it; the other two survive any data.',
        "Seule la deuxième nomme une mesure, un sens et un seuil. Un résultat sous 10 % la réfuterait ; les deux autres survivent à toutes les données.",
      ),
    },
    badge: B('States what would prove it wrong', 'Dit ce qui lui donnerait tort'),
  },
  {
    id: 'sc-protocol',
    master: 'planning',
    minutes: 7,
    title: B('A protocol a colleague could rerun', "Un protocole qu'un collègue pourrait refaire"),
    learn: B(
      'You will have your protocol read by the AI as a colleague trying to rerun it, and fill every gap it finds.',
      "Vous ferez lire votre protocole par l'IA comme par un collègue qui veut le refaire, et comblerez chaque manque.",
    ),
    act: B('Paste your draft protocol and ask for every point where a colleague would have to guess.',
      "Collez votre projet de protocole et demandez chaque point où un collègue devrait deviner."),
    steps: [
      B('Paste the protocol with your hypothesis, primary outcome and planned analysis.',
        "Collez le protocole avec l'hypothèse, le critère principal et l'analyse prévue."),
      B('Ask the AI to act as a colleague rerunning it and to list every choice left unstated.',
        "Demandez à l'IA de jouer un collègue qui le refait et de lister chaque choix non précisé."),
      B('Check the sample size reasoning, randomisation, blinding and exclusion rules.',
        "Vérifiez la justification de l'effectif, la randomisation, l'insu et les règles d'exclusion."),
      B('Fill each gap yourself, and fix the analysis plan before collecting any data.',
        "Comblez vous-même chaque manque, et figez le plan d'analyse avant toute collecte."),
    ],
    trap: B(
      'Letting the AI pick your sample size. It will give a plausible number without your expected effect or variance; the calculation must use your values.',
      "Laisser l'IA choisir votre effectif. Elle donnera un nombre plausible sans votre effet attendu ni votre variance ; le calcul doit reposer sur vos valeurs.",
    ),
    quiz: {
      q: B('Why fix the analysis plan before collecting data?', "Pourquoi figer le plan d'analyse avant la collecte des données ?"),
      options: [
        B('To stop the data from steering which test you choose', 'Pour que les données ne dictent pas le choix du test'),
        B('Because journals always require it for publication', "Parce que les revues l'exigent toujours pour publier"),
        B('To save time later, during the final analysis phase of the project', "Pour gagner du temps plus tard, pendant la phase finale d'analyse"),
      ],
      answer: 0,
      why: B(
        'Choosing the test after seeing the data lets you, often without meaning to, pick the one that gives significance. A plan fixed in advance removes that freedom.',
        "Choisir le test après avoir vu les données permet, souvent sans le vouloir, de retenir celui qui donne un résultat significatif. Un plan figé d'avance retire cette liberté.",
      ),
    },
    badge: B('Writes protocols others can rerun', 'Écrit des protocoles reproductibles'),
  },
  {
    id: 'sc-stats',
    master: 'coding',
    minutes: 7,
    title: B('Check the statistics before you believe them', "Vérifiez les statistiques avant d'y croire"),
    learn: B(
      'You will have the AI review your choice of test and write an analysis script that you run yourself.',
      "Vous ferez examiner le choix de vos tests par l'IA et écrire un script d'analyse que vous exécuterez vous-même.",
    ),
    act: B('Describe your design and data, ask whether the test fits, then get a script and run it on your data.',
      "Décrivez protocole et données, demandez si le test convient, puis obtenez un script à exécuter sur vos données."),
    steps: [
      B('Describe design, variables and sample, but paste no unpublished raw data unless your rules allow it.',
        "Décrivez protocole, variables et effectif, sans coller de données brutes inédites si vos règles l'interdisent."),
      B('Ask which assumptions the test needs and how to check each one.',
        "Demandez quelles hypothèses le test exige et comment vérifier chacune."),
      B('Ask for a script in your language (R, Python) that reports effect sizes and intervals.',
        "Demandez un script dans votre langage (R, Python) qui rapporte tailles d'effet et intervalles."),
      B('Run it yourself on the real data. Only numbers from your run go in the paper.',
        "Exécutez-le vous-même sur les vraies données. Seuls les chiffres de votre exécution vont dans l'article."),
    ],
    trap: B(
      'Asking the model to "compute the p-value" in the chat. It can produce a plausible number without any real computation; run it in your own software.',
      "Demander au modèle de « calculer la p-value » dans la conversation. Il peut produire un nombre plausible sans vrai calcul ; faites-le dans votre logiciel.",
    ),
    quiz: {
      q: B('You ran 20 comparisons and one has p = 0.03. What do you check first?',
        "Vous avez fait 20 comparaisons et l'une donne p = 0,03. Que vérifiez-vous d'abord ?"),
      options: [
        B('Whether you corrected for multiple comparisons', 'Si vous avez corrigé les comparaisons multiples'),
        B('Whether the result fits your hypothesis', 'Si le résultat va dans le sens de votre hypothèse'),
        B('Whether the sample was large enough to publish it', "Si l'échantillon était assez grand pour publier"),
      ],
      answer: 0,
      why: B(
        'With 20 tests at the 5% threshold, about one false positive is expected by chance. Without correction, that p = 0.03 may be pure noise.',
        "Avec 20 tests au seuil de 5 %, on attend environ un faux positif par hasard. Sans correction, ce p = 0,03 peut n'être que du bruit.",
      ),
    },
    badge: B('Runs its own numbers', 'Calcule ses propres chiffres'),
  },
]

/* ================================================================== */
/* CITÉ 3 · ÉCRIRE, RELIRE, OBTENIR UN FINANCEMENT                     */
/* ================================================================== */

const SC_PUBLISH: Level[] = [
  {
    id: 'sc-write',
    master: 'writing',
    minutes: 7,
    title: B('Write the paper from your results only', "Rédigez l'article à partir de vos seuls résultats"),
    learn: B(
      'You will draft results from your own outputs, with every number traced and no invented citation.',
      "Vous rédigerez les résultats à partir de vos sorties, chaque chiffre tracé, sans citation inventée.",
    ),
    act: B('Paste your result tables and ask for a results section limited to those numbers, with [REF] for each citation.',
      "Collez vos tableaux et demandez une section résultats limitée à ces chiffres, avec [REF] pour chaque citation."),
    steps: [
      B('Paste the tables and figures as your software produced them, with sample sizes.',
        "Collez tableaux et figures tels que votre logiciel les a produits, avec les effectifs."),
      B('Ask for text that uses only those numbers, and flags any sentence that goes beyond them.',
        "Demandez un texte qui n'emploie que ces chiffres, et signale toute phrase qui va au-delà."),
      B('Forbid any reference: the AI writes [REF] where a source is needed, and you add real ones.',
        "Interdisez toute référence : l'IA écrit [REF] là où une source manque, et vous ajoutez les vraies."),
      B('Check every number in the text against your tables before sharing the draft.',
        "Vérifiez chaque chiffre du texte au regard de vos tableaux avant de diffuser le brouillon."),
    ],
    trap: B(
      'Letting the model "add relevant references" to the discussion. It may cite papers that do not exist, or that say the opposite.',
      "Laisser le modèle « ajouter des références pertinentes » à la discussion. Il peut citer des articles inexistants, ou qui disent le contraire.",
    ),
    quiz: {
      q: B('The draft says "a strong effect (d = 0.8)", but your table says d = 0.48. What went wrong?',
        "Le brouillon dit « un effet fort (d = 0,8) », mais votre tableau indique d = 0,48. Que s'est-il passé ?"),
      options: [
        B('A normal rounding choice that reviewers will accept without comment', 'Un arrondi normal que les relecteurs accepteront sans remarque'),
        B('The model wrote a plausible number, not yours', 'Le modèle a écrit un chiffre plausible, pas le vôtre'),
        B('Your table must contain an error', 'Votre tableau doit contenir une erreur'),
      ],
      answer: 1,
      why: B(
        'Models generate likely text, and "strong effect, d = 0.8" is a common phrase. Every number must be checked against your outputs, the only source of truth.',
        "Les modèles génèrent un texte probable, et « effet fort, d = 0,8 » est une formule courante. Chaque chiffre doit être vérifié sur vos sorties, seule source de vérité.",
      ),
    },
    badge: B('Writes only what the data show', "N'écrit que ce que montrent les données"),
  },
  {
    id: 'sc-review',
    master: 'watch',
    minutes: 6,
    title: B('Review a manuscript without leaking it', 'Relisez un manuscrit sans le divulguer'),
    learn: B(
      'You will use AI in peer review only as the journal allows, never exposing a confidential manuscript.',
      "Vous n'userez de l'IA en relecture que si la revue le permet, sans jamais exposer un manuscrit confidentiel.",
    ),
    act: B("Read the journal's policy, write your review notes yourself, then use AI only on your own notes.",
      "Lisez la politique de la revue, rédigez vos notes de relecture vous-même, puis n'appliquez l'IA qu'à vos notes."),
    steps: [
      B("Read the journal's policy on AI in peer review. Many forbid uploading the manuscript.",
        "Lisez la politique de la revue sur l'IA en relecture. Beaucoup interdisent d'y téléverser le manuscrit."),
      B('Read the manuscript and write your notes yourself: claims, methods, major and minor issues.',
        "Lisez le manuscrit et rédigez vous-même vos notes : affirmations, méthodes, problèmes majeurs et mineurs."),
      B('If allowed, give the AI your notes only, with no data, figures or text from the manuscript.',
        "Si c'est permis, ne donnez à l'IA que vos notes, sans données, figures ni texte du manuscrit."),
      B('Ask it to structure and clarify your points, and declare the use if the journal requires it.',
        "Demandez-lui de structurer et clarifier vos points, et déclarez l'usage si la revue l'exige."),
    ],
    trap: B(
      'Pasting the manuscript "just for a summary". It is unpublished, confidential work, and you may breach the journal\'s rules.',
      "Coller le manuscrit « juste pour un résumé ». C'est un travail inédit et confidentiel, et vous pouvez enfreindre les règles de la revue.",
    ),
    quiz: {
      q: B('The journal forbids AI tools for reviewers. What can you still do?',
        "La revue interdit les outils d'IA aux relecteurs. Que pouvez-vous encore faire ?"),
      options: [
        B('Paste only the methods section, which is less sensitive', 'Coller seulement les méthodes, moins sensibles'),
        B("Use AI but remove the authors' names first", "Utiliser l'IA en retirant d'abord le nom des auteurs"),
        B('Write the review yourself, without AI', 'Rédiger la relecture vous-même, sans IA'),
      ],
      answer: 2,
      why: B(
        "A ban covers the whole manuscript, anonymised or not, and every section. The rule is the journal's, and you accepted it when you agreed to review.",
        "Une interdiction couvre tout le manuscrit, anonymisé ou non, et chacune de ses sections. La règle est celle de la revue, et vous l'avez acceptée en acceptant de relire.",
      ),
    },
    badge: B('Keeps manuscripts confidential', 'Garde les manuscrits confidentiels'),
  },
  {
    id: 'sc-grant',
    master: 'orchestration',
    minutes: 7,
    title: B('Test your grant proposal against the panel', 'Éprouvez votre projet face au jury'),
    learn: B(
      "You will map your proposal to the funder's criteria and have the AI score it as a panel member would.",
      "Vous confronterez votre projet aux critères du financeur et le ferez noter par l'IA comme par un membre du jury.",
    ),
    act: B("Paste the call's evaluation criteria and your draft, and ask for a score and weakest point per criterion.",
      "Collez les critères de l'appel et votre projet, et demandez une note et le point le plus faible par critère."),
    steps: [
      B('Paste the evaluation criteria and weightings from the call, word for word.',
        "Collez mot pour mot les critères d'évaluation et leurs pondérations tirés de l'appel."),
      B('Ask the AI to score each criterion as a sceptical panel member, quoting your text.',
        "Demandez à l'IA de noter chaque critère en membre sceptique du jury, en citant votre texte."),
      B('Ask where aims, methods and budget do not match, and what looks unfeasible.',
        "Demandez où objectifs, méthodes et budget ne concordent pas, et ce qui paraît irréalisable."),
      B('Revise yourself. Never let the AI add preliminary results or references you do not have.',
        "Révisez vous-même. Ne laissez jamais l'IA ajouter des résultats préliminaires ou des références que vous n'avez pas."),
    ],
    trap: B(
      'Asking the AI to "strengthen" the proposal. It adds confident claims, preliminary data and citations that you cannot back up in front of the panel.',
      "Demander à l'IA de « renforcer » le projet. Elle ajoute des affirmations assurées, des données préliminaires et des citations que vous ne pourrez pas défendre.",
    ),
    quiz: {
      q: B('The AI scores "feasibility" low. What is the most useful follow-up?',
        "L'IA note faiblement la « faisabilité ». Quelle est la suite la plus utile ?"),
      options: [
        B('Ask it to rewrite the section in a more confident tone', 'Lui demander de réécrire la partie sur un ton plus assuré'),
        B('Add the preliminary results it suggests, to reassure the panel', "Ajouter les résultats préliminaires qu'elle suggère, pour rassurer"),
        B('Ask which task or resource looks unrealistic, and why', 'Lui demander quelle tâche ou ressource paraît irréaliste, et pourquoi'),
      ],
      answer: 2,
      why: B(
        'A low score is useful only if you know its cause. Tone does not fix an unrealistic timeline, and invented preliminary data is misconduct.',
        "Une note basse n'est utile que si vous en connaissez la cause. Le ton ne répare pas un calendrier irréaliste, et des données préliminaires inventées constituent une fraude.",
      ),
    },
    badge: B("Writes to the panel's criteria", 'Écrit selon les critères du jury'),
  },
]

/* ================================================================== */
/* LES CITÉS ET LE MÉTIER                                              */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: 'sc-literature', track: 'trade', glyph: 'rows', tint: TINT, at: [1, 28], levels: SC_LIT,
    title: B('The literature, checked', 'La littérature, vérifiée'),
    blurb: B('Build searches you run yourself, read a paper like a reviewer, and map what is known and what is not.',
      "Construisez des recherches que vous lancez vous-même, lisez un article en relecteur, et cartographiez le connu et l'inconnu."),
  },
  {
    id: 'sc-study', track: 'trade', glyph: 'hex', tint: TINT, at: [3, 28], levels: SC_STUDY,
    title: B('Design and analyse the study', "Concevoir et analyser l'étude"),
    blurb: B('A hypothesis that can fail, a protocol others can rerun, and statistics you check before believing them.',
      "Une hypothèse réfutable, un protocole que d'autres peuvent refaire, et des statistiques vérifiées avant d'y croire."),
  },
  {
    id: 'sc-publish', track: 'trade', glyph: 'pen', tint: TINT, at: [5, 28], levels: SC_PUBLISH,
    title: B('Write, review, get funded', 'Écrire, relire, obtenir un financement'),
    blurb: B('A paper written from your own results, a confidential peer review, and a grant proposal built for its panel.',
      "Un article écrit à partir de vos seuls résultats, une relecture confidentielle, et un projet de financement pensé pour son jury."),
  },
]

/* ================================================================== */
/* L'APPROFONDISSEMENT · data/enrich                                   */
/* ================================================================== */

const ENRICH: Record<string, Enrichment> = {
  /* ---------------------------------------------------------------- */
  /* CITÉ 1 · LA LITTÉRATURE                                           */
  /* ---------------------------------------------------------------- */

  'sc-literature/sc-search': {
    why: [
      B("A literature search is only as good as its query. Databases match words, not ideas: a paper on \"sleep deprivation\" will not show up for \"lack of sleep\" unless you include both. Building the list of synonyms and controlled terms for each part of your question is tedious, and a model does it well, because it knows how people in a field phrase things.",
        "Une recherche bibliographique ne vaut que sa requête. Les bases associent des mots, pas des idées : un article sur la « privation de sommeil » ne remontera pas pour « manque de sommeil » si vous n'incluez pas les deux. Dresser la liste des synonymes et termes contrôlés de chaque élément de votre question est fastidieux, et un modèle le fait bien, car il sait comment les chercheurs d'un domaine formulent les choses."),
      B("What a model must not do is replace the database. Asked for \"the key papers\", it predicts plausible references from memory: some are real, some merge several papers, some do not exist. The split of labour is therefore strict: the AI helps you write the query, the database returns the papers.",
        "Ce qu'un modèle ne doit pas faire, c'est remplacer la base. Sollicité pour « les articles clés », il prédit de mémoire des références plausibles : certaines existent, d'autres fusionnent plusieurs articles, d'autres n'existent pas. Le partage des tâches est donc strict : l'IA vous aide à écrire la requête, la base renvoie les articles."),
      B("Known papers are your quality check. If three papers you know are relevant do not come up, the query lacks a synonym or is too narrow. Recording the date, database and number of hits makes the search reproducible, which reviewers and systematic reviews require.",
        "Les articles déjà connus sont votre contrôle qualité. Si trois articles que vous savez pertinents ne remontent pas, la requête manque d'un synonyme ou est trop étroite. Noter la date, la base et le nombre de résultats rend la recherche reproductible, ce qu'exigent les relecteurs et les revues systématiques."),
    ],
    example: {
      context: B("Amel Haddad, a postdoc in public health, starts a review on shift work and type 2 diabetes. She searches PubMed.",
        "Amel Haddad, postdoctorante en santé publique, commence une revue sur le travail posté et le diabète de type 2. Elle cherche dans PubMed."),
      before: B("What are the main studies on shift work and diabetes? Give me the references.",
        "Quelles sont les principales études sur le travail posté et le diabète ? Donne-moi les références."),
      after: B("I am building a PubMed search. Do not list any papers.\nMy question, in parts:\n- Population: adult workers\n- Exposure: shift work, night work, rotating schedules\n- Outcome: incidence of type 2 diabetes\n- Study types: cohort and case-control\n1. For each part, give synonyms and the matching MeSH terms.\n2. Combine them into one PubMed query, with OR inside each part and AND between parts.\n3. Suggest one filter for study type and tell me what it may wrongly exclude.\nI will run the query myself and check that these three papers come up: [three known references].",
        "Je construis une recherche PubMed. Ne cite aucun article.\nMa question, par éléments :\n- Population : travailleurs adultes\n- Exposition : travail posté, travail de nuit, horaires tournants\n- Résultat : incidence du diabète de type 2\n- Types d'étude : cohortes et cas-témoins\n1. Pour chaque élément, donne les synonymes (en anglais, langue de la base) et les termes MeSH correspondants.\n2. Combine-les en une requête PubMed, avec OR dans chaque élément et AND entre les éléments.\n3. Propose un filtre sur le type d'étude et dis-moi ce qu'il risque d'exclure à tort.\nJe lancerai la requête moi-même et vérifierai que ces trois articles remontent : [trois références connues]."),
      takeaway: B("The first prompt asks the model to remember papers, where it can invent. The second uses it for what it does well, vocabulary and syntax, and leaves the retrieval to the database, with a built-in test.",
        "Le premier prompt demande au modèle de se souvenir d'articles, là où il peut inventer. Le second l'emploie pour ce qu'il fait bien, le vocabulaire et la syntaxe, et laisse la recherche à la base, avec un test intégré."),
    },
    exercise: {
      goal: B("A documented search strategy for your question, run in a real database, that finds the papers you already know are relevant.",
        "Une stratégie de recherche documentée pour votre question, lancée dans une vraie base, qui retrouve les articles que vous savez pertinents."),
      prompt: B("I am building a search in [DATABASE: PubMed, Web of Science, Scopus, other]. Do not list or suggest any papers.\nMy question, in parts:\n- Population or system: [WHO OR WHAT]\n- Intervention or exposure: [WHAT]\n- Comparison, if any: [AGAINST WHAT]\n- Outcome: [WHAT IS MEASURED]\n- Study types I want: [DESIGNS]\n1. For each part, list synonyms, spelling variants and the database's controlled vocabulary if it has one.\n2. Write one query in this database's syntax: OR within a part, AND between parts, truncation where useful.\n3. Tell me which part is most likely to make me miss relevant papers, and why.\nI will run it and check that these known papers come up: [2 TO 3 REFERENCES I KNOW].",
        "Je construis une recherche dans [BASE : PubMed, Web of Science, Scopus, autre]. Ne cite ni ne suggère aucun article.\nMa question, par éléments :\n- Population ou système : [QUI OU QUOI]\n- Intervention ou exposition : [QUOI]\n- Comparaison éventuelle : [PAR RAPPORT À QUOI]\n- Résultat : [CE QUI EST MESURÉ]\n- Types d'étude voulus : [PROTOCOLES]\n1. Pour chaque élément, liste synonymes, variantes d'orthographe et vocabulaire contrôlé de la base s'il existe.\n2. Écris une requête dans la syntaxe de cette base : OR dans un élément, AND entre éléments, troncature si utile.\n3. Dis-moi quel élément risque le plus de me faire manquer des articles pertinents, et pourquoi.\nJe la lancerai et vérifierai que ces articles connus remontent : [2 À 3 RÉFÉRENCES QUE JE CONNAIS]."),
      check: [
        B("The AI listed no papers, only terms and a query", "L'IA n'a listé aucun article, seulement des termes et une requête"),
        B("You ran the query yourself in the database", "Vous avez lancé la requête vous-même dans la base"),
        B("Your known papers all came up, or you fixed the query until they did", "Vos articles connus remontent tous, ou vous avez corrigé la requête jusqu'à ce qu'ils remontent"),
        B("You recorded the database, the date, the query and the number of hits", "Vous avez noté la base, la date, la requête et le nombre de résultats"),
      ],
      bonus: B("Run the same question in a second database and compare: papers found in only one of them show which terms each index uses, and make your search more complete.",
        "Lancez la même question dans une seconde base et comparez : les articles présents dans une seule montrent les termes propres à chaque index, et complètent votre recherche."),
    },
    more: [
      { q: B("The AI gives you a perfect-looking reference that your database cannot find. What is the most likely explanation?",
          "L'IA vous donne une référence parfaite en apparence, introuvable dans votre base. Quelle est l'explication la plus probable ?"),
        options: [
          B("The database is incomplete for recent years", "La base est incomplète pour les années récentes"),
          B("The reference was generated, not retrieved", "La référence a été générée, et non retrouvée"),
          B("The paper was retracted and removed from the index", "L'article a été rétracté et retiré de l'index"),
        ],
        answer: 1,
        why: B("Models produce references by predicting plausible text. A reference absent from the major indexes is far more likely to be fabricated than missing; treat it as nonexistent until you find it.",
          "Les modèles produisent des références en prédisant un texte plausible. Une référence absente des grands index a bien plus de chances d'être inventée que manquante ; considérez-la comme inexistante tant que vous ne l'avez pas trouvée.") },
      { q: B("Your query returns 4,200 hits. What do you do first?",
          "Votre requête rend 4 200 résultats. Que faites-vous d'abord ?"),
        options: [
          B("Ask the AI to pick the twenty best papers on the topic from memory", "Demander à l'IA de choisir de mémoire les vingt meilleurs articles"),
          B("Keep only the first page of results", "Ne garder que la première page de résultats"),
          B("Add every possible filter until you reach 100", "Ajouter tous les filtres possibles jusqu'à 100 résultats"),
          B("Find which part of the query is too broad and tighten it", "Repérer l'élément trop large de la requête et le resserrer"),
        ],
        answer: 3,
        why: B("A huge result set usually comes from one broad term. Tightening that part keeps the search reproducible; blind filters or the first page drop relevant papers for no reason.",
          "Un très grand nombre de résultats vient souvent d'un terme trop large. Resserrer cet élément garde la recherche reproductible ; des filtres aveugles ou la première page écartent sans raison des articles pertinents.") },
    ],
  },

  'sc-literature/sc-read': {
    why: [
      B("A paper's abstract is written by its authors to present the result at its best. The information that decides how far to trust it (sample size, controls, how outcomes were measured, what was excluded) sits in the methods and supplementary material. A useful reading grid forces you to find those elements, whatever the abstract says.",
        "Le résumé d'un article est écrit par ses auteurs pour présenter le résultat sous son meilleur jour. Les informations qui décident du crédit à lui accorder (effectif, témoins, mesure des critères, exclusions) se trouvent dans les méthodes et le matériel supplémentaire. Une grille de lecture utile vous oblige à trouver ces éléments, quoi que dise le résumé."),
      B("AI speeds up filling the grid, with one danger: when a detail is missing, a model tends to fill it with what is typical for such studies. Requiring a quote and a section for each entry, and \"not reported\" when nothing is found, turns that risk into information: a missing control is itself a finding.",
        "L'IA accélère le remplissage de la grille, avec un danger : quand un détail manque, un modèle tend à le combler par ce qui est habituel pour ce type d'étude. Exiger une citation et une section pour chaque case, et « non rapporté » quand rien n'est trouvé, transforme ce risque en information : un témoin manquant est lui-même un résultat."),
      B("Checking three quotes against the PDF tells you whether the grid can be trusted. The last question, what the design cannot conclude, is the reviewer's question: an observational study cannot show causation, a small sample cannot rule out a modest effect.",
        "Vérifier trois citations dans le PDF vous dit si la grille est fiable. La dernière question, ce que le protocole ne permet pas de conclure, est celle du relecteur : une étude observationnelle ne démontre pas une causalité, un petit effectif n'exclut pas un effet modeste."),
    ],
    example: {
      context: B("Julien, a PhD student in neuroscience, must present a paper on a new memory-enhancing drug in mice at his lab's journal club on Friday.",
        "Julien, doctorant en neurosciences, doit présenter vendredi au journal club de son laboratoire un article sur un nouveau médicament censé améliorer la mémoire chez la souris."),
      before: B("Summarise this paper for my journal club. [abstract]",
        "Résume cet article pour mon journal club. [résumé]"),
      after: B("Here is the full text of a paper, methods and supplementary material included: [pasted].\nFill this reading grid. For each entry, quote the exact passage and give its section. If the paper does not report it, write NOT REPORTED; do not infer.\n1. Main claim\n2. Design (randomised? blinded? pre-registered?)\n3. Sample size per group, and how it was justified\n4. Control condition\n5. Primary outcome and how it was measured\n6. Effect size and confidence interval\n7. Exclusions and their reasons\n8. Limits stated by the authors\nThen: what can this design NOT conclude, in three points?",
        "Voici le texte intégral d'un article, méthodes et matériel supplémentaire compris : [collé].\nRemplis cette grille de lecture. Pour chaque case, cite le passage exact et donne sa section. Si l'article ne le rapporte pas, écris NON RAPPORTÉ ; ne déduis rien.\n1. Affirmation principale\n2. Protocole (randomisé ? en aveugle ? préenregistré ?)\n3. Effectif par groupe, et sa justification\n4. Condition témoin\n5. Critère principal et sa mesure\n6. Taille d'effet et intervalle de confiance\n7. Exclusions et leurs raisons\n8. Limites déclarées par les auteurs\nEnsuite : que ce protocole ne permet-il PAS de conclure, en trois points ?"),
      takeaway: B("The summary would have repeated the authors' enthusiasm. The grid shows 12 mice per group, no blinding reported and 4 animals excluded without reason: Julien now has the questions his journal club needs.",
        "Le résumé aurait repris l'enthousiasme des auteurs. La grille montre 12 souris par groupe, aucun aveugle rapporté et 4 animaux exclus sans raison : Julien a désormais les questions dont son journal club a besoin."),
    },
    exercise: {
      goal: B("A completed reading grid for one paper in your field, every entry backed by a quote you have checked, and three limits of its design.",
        "Une grille de lecture complète pour un article de votre domaine, chaque case appuyée sur une citation vérifiée, et trois limites de son protocole."),
      prompt: B("Here is the full text of a paper, including methods and supplementary material: [FULL TEXT].\nFill this grid. For each entry, quote the exact passage and name its section. If the paper does not report it, write NOT REPORTED. Never infer or complete from general knowledge.\n1. Main claim\n2. Design: [THE DESIGN FEATURES THAT MATTER IN MY FIELD]\n3. Sample size and its justification\n4. Controls or comparison\n5. Primary outcome and how it was measured\n6. Effect size with uncertainty (interval, error)\n7. Exclusions, missing data and their handling\n8. Limits stated by the authors\n9. Funding and conflicts of interest\nThen list three things this design cannot conclude, and one question I should ask the authors.",
        "Voici le texte intégral d'un article, méthodes et matériel supplémentaire compris : [TEXTE INTÉGRAL].\nRemplis cette grille. Pour chaque case, cite le passage exact et nomme sa section. Si l'article ne le rapporte pas, écris NON RAPPORTÉ. Ne déduis ni ne complète jamais à partir de connaissances générales.\n1. Affirmation principale\n2. Protocole : [LES CARACTÉRISTIQUES QUI COMPTENT DANS MON DOMAINE]\n3. Effectif et sa justification\n4. Témoins ou comparaison\n5. Critère principal et sa mesure\n6. Taille d'effet avec son incertitude (intervalle, erreur)\n7. Exclusions, données manquantes et leur traitement\n8. Limites déclarées par les auteurs\n9. Financement et conflits d'intérêts\nListe ensuite trois choses que ce protocole ne permet pas de conclure, et une question que je devrais poser aux auteurs."),
      check: [
        B("You pasted the full text, not only the abstract", "Vous avez collé le texte intégral, et non le seul résumé"),
        B("Every entry has a quote and a section, or says not reported", "Chaque case a une citation et une section, ou indique non rapporté"),
        B("You found three of the quotes in the PDF, word for word", "Vous avez retrouvé trois des citations dans le PDF, mot pour mot"),
        B("The limits listed come from the design, not from general criticism", "Les limites relevées viennent du protocole, et non d'une critique générale"),
      ],
      bonus: B("Check the paper against the reporting guideline for its design (for example CONSORT for trials, ARRIVE for animal studies): ask which items of the guideline your grid shows as not reported.",
        "Confrontez l'article à la recommandation de rapport de son type d'étude (par exemple CONSORT pour les essais, ARRIVE pour l'expérimentation animale) : demandez quels éléments de la recommandation votre grille montre comme non rapportés."),
    },
    more: [
      { q: B("Why ask for \"not reported\" instead of letting the model fill every entry?",
          "Pourquoi exiger « non rapporté » au lieu de laisser le modèle remplir chaque case ?"),
        options: [
          B("It makes the grid shorter, cleaner and faster to read in a journal club", "Cela rend la grille plus courte, plus nette et plus rapide à lire"),
          B("Models cannot read methods sections", "Les modèles ne savent pas lire les sections de méthodes"),
          B("A missing detail is information about the paper's quality", "Un détail manquant renseigne sur la qualité de l'article"),
        ],
        answer: 2,
        why: B("An unreported randomisation or blinding is a weakness reviewers look for. If the model fills the gap with what is usual, you lose exactly the signal you were reading for.",
          "Une randomisation ou un aveugle non rapportés sont des faiblesses que les relecteurs recherchent. Si le modèle comble le vide par l'habituel, vous perdez précisément le signal que vous cherchiez.") },
      { q: B("A cross-sectional survey finds that coffee drinkers report less depression. What can it NOT conclude?",
          "Une enquête transversale trouve que les buveurs de café déclarent moins de dépression. Que ne peut-elle PAS conclure ?"),
        options: [
          B("That the two are associated in this sample", "Que les deux sont associés dans cet échantillon"),
          B("That the association deserves further study", "Que l'association mérite d'autres études"),
          B("That coffee reduces the risk of depression", "Que le café réduit le risque de dépression"),
        ],
        answer: 2,
        why: B("A cross-sectional design measures both at once, so it cannot show which came first or rule out other causes. It supports an association, not a causal effect.",
          "Un protocole transversal mesure les deux en même temps : il ne peut montrer lequel précède l'autre ni écarter d'autres causes. Il établit une association, pas un effet causal.") },
    ],
  },

  'sc-literature/sc-map': {
    why: [
      B("Reading papers one after another leaves you with impressions. A synthesis table puts them side by side on the same columns, and patterns appear: all positive studies used the same population, the two negative ones measured the outcome differently. That comparison is where research questions come from.",
        "Lire les articles l'un après l'autre laisse des impressions. Un tableau de synthèse les place côte à côte sur les mêmes colonnes, et des régularités apparaissent : toutes les études positives portaient sur la même population, les deux négatives mesuraient le critère autrement. C'est de cette comparaison que naissent les questions de recherche."),
      B("The AI does this assembly work well, provided its input is your reading grids and not its memory of the field. Built from your grids, every cell traces back to a paper you read and checked. Built from memory, the table mixes real and imagined results without telling you which is which.",
        "L'IA fait bien ce travail d'assemblage, à condition que ses données soient vos grilles de lecture, et non son souvenir du domaine. Construit à partir de vos grilles, chaque case renvoie à un article lu et vérifié. Construit de mémoire, le tableau mêle résultats réels et imaginés sans vous dire lesquels."),
      B("A gap in your table is not a gap in the literature: it may only mean you have not found the paper yet. Treat each gap as a hypothesis to test with a targeted search before writing \"no study has examined\" in an introduction or a grant.",
        "Une lacune dans votre tableau n'est pas une lacune de la littérature : elle signifie peut-être seulement que vous n'avez pas encore trouvé l'article. Traitez chaque lacune comme une hypothèse à tester par une recherche ciblée avant d'écrire « aucune étude n'a examiné » dans une introduction ou un projet."),
    ],
    example: {
      context: B("Sofia, a researcher in ecology, has read 14 papers on urban heat and bird breeding success and must write the state of the art for a paper.",
        "Sofia, chercheuse en écologie, a lu 14 articles sur la chaleur urbaine et le succès reproducteur des oiseaux et doit rédiger l'état de l'art d'un article."),
      before: B("What does the literature say about urban heat and bird breeding? Write a state of the art.",
        "Que dit la littérature sur la chaleur urbaine et la reproduction des oiseaux ? Rédige un état de l'art."),
      after: B("Here are my reading grids for 14 papers I have read, each starting with its reference: [pasted].\nUse only these grids. Do not add any paper or result.\n1. Build a table: one row per paper; columns: species, city and climate, heat measure, breeding measure, main result, sample size, main limit.\n2. Group the papers whose results agree, and list the conflicts. For each conflict, name the difference in method or setting that could explain it.\n3. List the combinations (species, climate, measure) that none of these 14 papers covers. Call them \"not covered in my set\", not \"gaps in the literature\".",
        "Voici mes grilles de lecture de 14 articles que j'ai lus, chacune commençant par sa référence : [collées].\nN'utilise que ces grilles. N'ajoute aucun article ni aucun résultat.\n1. Construis un tableau : une ligne par article ; colonnes : espèce, ville et climat, mesure de la chaleur, mesure de la reproduction, résultat principal, effectif, limite principale.\n2. Regroupe les articles dont les résultats concordent, et liste les contradictions. Pour chacune, nomme la différence de méthode ou de contexte qui pourrait l'expliquer.\n3. Liste les combinaisons (espèce, climat, mesure) qu'aucun de ces 14 articles ne couvre. Appelle-les « non couvertes dans mon corpus », et non « lacunes de la littérature »."),
      takeaway: B("The first prompt produces a fluent state of the art that may cite papers Sofia never read. The second builds on her 14 grids and shows that all non-negative results came from Mediterranean cities: a real lead to check.",
        "Le premier prompt produit un état de l'art fluide qui peut citer des articles que Sofia n'a jamais lus. Le second s'appuie sur ses 14 grilles et montre que tous les résultats non négatifs viennent de villes méditerranéennes : une vraie piste à vérifier."),
    },
    exercise: {
      goal: B("A synthesis table of the papers you have read, the conflicts with a possible explanation, and the combinations not covered, each to be checked by a targeted search.",
        "Un tableau de synthèse des articles que vous avez lus, les contradictions avec une explication possible, et les combinaisons non couvertes, chacune à vérifier par une recherche ciblée."),
      prompt: B("Here are my reading grids for [NUMBER] papers I have read, each starting with its reference: [MY GRIDS].\nUse only these grids. Add no paper, no result, no reference.\n1. Table: one row per paper; columns: [THE 5 TO 7 COLUMNS THAT MATTER IN MY FIELD].\n2. Groups of papers whose results agree; then each conflict, with the difference in method, population or setting that could explain it.\n3. Combinations that none of these papers covers. Label them \"not covered in my set\".\n4. For each combination, a search query I could run to check whether it is really a gap.\nIf a grid lacks information for a column, write \"not in grid\".",
        "Voici mes grilles de lecture de [NOMBRE] articles que j'ai lus, chacune commençant par sa référence : [MES GRILLES].\nN'utilise que ces grilles. N'ajoute aucun article, aucun résultat, aucune référence.\n1. Tableau : une ligne par article ; colonnes : [LES 5 À 7 COLONNES QUI COMPTENT DANS MON DOMAINE].\n2. Les groupes d'articles dont les résultats concordent ; puis chaque contradiction, avec la différence de méthode, de population ou de contexte qui pourrait l'expliquer.\n3. Les combinaisons qu'aucun de ces articles ne couvre. Étiquette-les « non couvertes dans mon corpus ».\n4. Pour chaque combinaison, une requête que je pourrais lancer pour vérifier s'il s'agit vraiment d'une lacune.\nSi une grille manque d'information pour une colonne, écris « absent de la grille »."),
      check: [
        B("Every row matches a paper you have read yourself", "Chaque ligne correspond à un article que vous avez lu vous-même"),
        B("No paper or result appears that was not in your grids", "Aucun article ni résultat n'apparaît qui ne figurait pas dans vos grilles"),
        B("Each conflict comes with a concrete difference in method or setting", "Chaque contradiction s'accompagne d'une différence concrète de méthode ou de contexte"),
        B("You ran at least one gap query before calling it a gap", "Vous avez lancé au moins une requête de vérification avant de parler de lacune"),
      ],
      bonus: B("Add a column for the year and country of each study, and ask whether results shift over time or by region. Such shifts often reveal a change in methods rather than in the phenomenon studied.",
        "Ajoutez une colonne pour l'année et le pays de chaque étude, et demandez si les résultats évoluent dans le temps ou selon la région. De tels décalages révèlent souvent un changement de méthode plutôt qu'un changement du phénomène étudié."),
    },
    more: [
      { q: B("The table shows no study on your species in tropical cities. What can you write?",
          "Le tableau ne montre aucune étude sur votre espèce en ville tropicale. Que pouvez-vous écrire ?"),
        options: [
          B("\"To our knowledge, no study has ever examined this species in tropical cities\"", "« À notre connaissance, aucune étude n'a jamais examiné cette espèce en ville tropicale »"),
          B("\"Few studies exist\", which is safer", "« Peu d'études existent », formule plus prudente"),
          B("Nothing yet: first run a targeted search in the databases", "Rien pour l'instant : lancez d'abord une recherche ciblée dans les bases"),
        ],
        answer: 2,
        why: B("The table only covers the papers you read. A claim about the whole literature needs a search designed to find such papers; \"few studies\" is just as unfounded without it.",
          "Le tableau ne couvre que les articles que vous avez lus. Une affirmation sur toute la littérature exige une recherche conçue pour trouver de tels articles ; « peu d'études » est tout aussi infondé sans elle.") },
      { q: B("Why feed the AI your reading grids rather than asking it about the field?",
          "Pourquoi donner à l'IA vos grilles de lecture plutôt que l'interroger sur le domaine ?"),
        options: [
          B("So every cell of the table traces back to a paper you checked", "Pour que chaque case du tableau renvoie à un article vérifié"),
          B("Because the grids are much shorter than the full papers, so it goes faster", "Parce que les grilles sont bien plus courtes que les articles, ce qui va plus vite"),
          B("Because the AI knows nothing about your field", "Parce que l'IA ignore tout de votre domaine"),
          B("To make the table look more personal", "Pour que le tableau paraisse plus personnel"),
        ],
        answer: 0,
        why: B("From memory, the model mixes real and plausible results. From your grids, every statement has a source you have read and can cite.",
          "De mémoire, le modèle mêle résultats réels et plausibles. À partir de vos grilles, chaque affirmation a une source que vous avez lue et pouvez citer.") },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* CITÉ 2 · CONCEVOIR ET ANALYSER L'ÉTUDE                            */
  /* ---------------------------------------------------------------- */

  'sc-study/sc-hypothesis': {
    why: [
      B("Most research ideas start vague: \"stress affects sleep\". Such a sentence cannot fail, since any result, positive, negative or null, can be read as \"an effect\" or \"a complex relationship\". A testable hypothesis names what is measured, in whom, in which direction and roughly how much, so that some results would prove it wrong.",
        "La plupart des idées de recherche naissent vagues : « le stress affecte le sommeil ». Une telle phrase ne peut pas échouer, puisque tout résultat, positif, négatif ou nul, peut se lire comme « un effet » ou « une relation complexe ». Une hypothèse testable nomme ce qui est mesuré, chez qui, dans quel sens et à peu près de combien, de sorte que certains résultats la démentiraient."),
      B("An AI is a useful sparring partner here, because it has no attachment to your idea. Asked to name the variables and the refuting result, it exposes every word that hides a choice: which stress, measured how, over what time. The decisions stay yours; the AI makes them visible.",
        "Une IA est ici un bon partenaire d'entraînement, parce qu'elle n'est pas attachée à votre idée. Invitée à nommer les variables et le résultat réfutant, elle révèle chaque mot qui cache un choix : quel stress, mesuré comment, sur quelle durée. Les décisions restent les vôtres ; l'IA les rend visibles."),
      B("Rival explanations are the last test. If two mechanisms predict the same result, your study cannot tell them apart unless you add a measure that differs between them. Finding this before the study costs an afternoon; finding it in peer review costs a rejection.",
        "Les explications rivales sont le dernier test. Si deux mécanismes prédisent le même résultat, votre étude ne peut les départager sans une mesure qui diffère de l'un à l'autre. Le découvrir avant l'étude coûte un après-midi ; le découvrir en relecture coûte un rejet."),
    ],
    example: {
      context: B("Karim, a psychology researcher, wants to study whether smartphone use before bed harms students' sleep.",
        "Karim, chercheur en psychologie, veut étudier si l'usage du smartphone avant le coucher nuit au sommeil des étudiants."),
      before: B("Help me write a hypothesis: smartphone use affects students' sleep.",
        "Aide-moi à formuler une hypothèse : l'usage du smartphone affecte le sommeil des étudiants."),
      after: B("My idea: smartphone use before bed harms students' sleep.\nAct as a demanding methodologist. Do not write the hypothesis for me; question it.\n1. List every vague word and the choices it hides (which use, how long before bed, which aspect of sleep, measured how).\n2. Once I have answered, check that my hypothesis states: population, independent variable and its measure, outcome and its measure, direction, expected size.\n3. Ask me which result would refute it.\n4. Give two rival explanations that would predict the same result (for example, stress causing both screen use and poor sleep) and one measure that would separate each from mine.",
        "Mon idée : l'usage du smartphone avant le coucher nuit au sommeil des étudiants.\nJoue un méthodologiste exigeant. N'écris pas l'hypothèse à ma place ; interroge-la.\n1. Liste chaque mot vague et les choix qu'il cache (quel usage, combien de temps avant le coucher, quel aspect du sommeil, mesuré comment).\n2. Une fois mes réponses données, vérifie que mon hypothèse précise : population, variable indépendante et sa mesure, critère et sa mesure, sens, ampleur attendue.\n3. Demande-moi quel résultat la réfuterait.\n4. Donne deux explications rivales qui prédiraient le même résultat (par exemple le stress, cause à la fois de l'usage des écrans et du mauvais sommeil) et une mesure qui départagerait chacune de la mienne."),
      takeaway: B("Karim ends with: \"In first-year students, 30 minutes or more of phone use in the last hour before bed delays sleep onset by at least 15 minutes, measured by actigraphy.\" A smaller delay would refute it, and stress is measured as a rival.",
        "Karim aboutit à : « Chez les étudiants de première année, 30 minutes ou plus de téléphone dans l'heure précédant le coucher retardent l'endormissement d'au moins 15 minutes, mesuré par actimétrie. » Un retard moindre la réfuterait ; le stress est mesuré."),
    },
    exercise: {
      goal: B("One testable hypothesis in your field, with its measures, direction and expected size, the result that would refute it, and one rival explanation you can measure.",
        "Une hypothèse testable dans votre domaine, avec ses mesures, son sens et son ampleur attendue, le résultat qui la réfuterait, et une explication rivale mesurable."),
      prompt: B("My research idea, as I would say it to a colleague: [MY IDEA IN ONE SENTENCE].\nMy field and the kind of data I can collect: [FIELD, DATA].\nAct as a demanding methodologist. Do not write the hypothesis for me.\n1. List every vague word in my idea and the choices it hides. Ask me to decide each one.\n2. When I have answered, check that my hypothesis has: population, independent variable and measure, outcome and measure, direction, expected size. Tell me what is still missing.\n3. Ask me which result would refute it. If I cannot name one, tell me why.\n4. Give two rival explanations predicting the same result, and for each, a measure that would tell it apart from mine.",
        "Mon idée de recherche, telle que je la dirais à un collègue : [MON IDÉE EN UNE PHRASE].\nMon domaine et le type de données que je peux recueillir : [DOMAINE, DONNÉES].\nJoue un méthodologiste exigeant. N'écris pas l'hypothèse à ma place.\n1. Liste chaque mot vague de mon idée et les choix qu'il cache. Demande-moi de trancher chacun.\n2. Une fois mes réponses données, vérifie que mon hypothèse comporte : population, variable indépendante et sa mesure, critère et sa mesure, sens, ampleur attendue. Dis-moi ce qui manque encore.\n3. Demande-moi quel résultat la réfuterait. Si je ne peux pas en nommer un, explique pourquoi.\n4. Donne deux explications rivales qui prédisent le même résultat et, pour chacune, une mesure qui la distinguerait de la mienne."),
      check: [
        B("You made each choice yourself; the AI only asked", "Vous avez fait chaque choix vous-même ; l'IA n'a fait que demander"),
        B("The hypothesis names a measure, a direction and an expected size", "L'hypothèse nomme une mesure, un sens et une ampleur attendue"),
        B("You can state a result that would refute it", "Vous pouvez énoncer un résultat qui la réfuterait"),
        B("At least one rival explanation has a measure in your plan", "Au moins une explication rivale a une mesure dans votre plan"),
      ],
      bonus: B("Write your hypothesis and refuting result in a dated document, or pre-register it on a public registry. Recording the prediction before the data exist is the strongest proof that you did not adjust it afterwards.",
        "Consignez votre hypothèse et le résultat réfutant dans un document daté, ou préenregistrez-la sur un registre public. Enregistrer la prédiction avant l'existence des données est la meilleure preuve que vous ne l'avez pas ajustée après coup."),
    },
    more: [
      { q: B("Your hypothesis is \"diet X changes gut bacteria\". Why is it weak?",
          "Votre hypothèse est « le régime X modifie le microbiote intestinal ». Pourquoi est-elle faible ?"),
        options: [
          B("It is too specific to be published", "Elle est trop précise pour être publiée"),
          B("Diet is not a proper variable", "Le régime n'est pas une vraie variable"),
          B("It should be phrased as an open question rather than as a statement", "Elle devrait être formulée en question ouverte plutôt qu'en affirmation"),
          B("It gives no direction, measure or size, so almost any result fits", "Elle ne donne ni sens, ni mesure, ni ampleur : presque tout résultat convient"),
        ],
        answer: 3,
        why: B("With billions of bacteria and hundreds of species, some change is almost certain. Naming which taxa, in which direction and by how much makes the hypothesis able to fail.",
          "Avec des milliards de bactéries et des centaines d'espèces, un changement est presque certain. Nommer quels groupes, dans quel sens et de combien rend l'hypothèse capable d'échouer.") },
      { q: B("Stress could cause both late phone use and poor sleep. What does this change for your study?",
          "Le stress pourrait causer à la fois l'usage tardif du téléphone et le mauvais sommeil. Qu'est-ce que cela change pour votre étude ?"),
        options: [
          B("Nothing, as long as the sample is large enough to reach significance", "Rien, tant que l'échantillon est assez grand pour atteindre la significativité"),
          B("It makes the study pointless", "Cela rend l'étude inutile"),
          B("You must measure stress, or design the study to control it", "Il faut mesurer le stress, ou concevoir l'étude pour le contrôler"),
        ],
        answer: 2,
        why: B("A confounder produces an association without the causal link you claim. A large sample makes that false association more significant, not less; only measuring or controlling it helps.",
          "Un facteur de confusion produit une association sans le lien causal que vous affirmez. Un grand échantillon rend cette fausse association plus significative, pas moins ; seuls sa mesure ou son contrôle aident.") },
    ],
  },

  'sc-study/sc-protocol': {
    why: [
      B("A protocol is reproducible when a competent colleague could run the same study from the text alone and get comparable results. Most protocols fail this test in small ways: an unstated randomisation method, an exclusion rule decided later, a measurement time left vague. Each gap is a place where results can drift, and where reviewers will ask.",
        "Un protocole est reproductible quand un collègue compétent peut mener la même étude à partir du seul texte et obtenir des résultats comparables. La plupart des protocoles échouent à ce test par petites touches : une méthode de randomisation non précisée, une règle d'exclusion décidée plus tard, un moment de mesure resté flou. Chaque manque est un endroit où les résultats peuvent dériver, et où les relecteurs poseront la question."),
      B("Authors cannot see their own gaps, because they fill them from memory. A model reading the text as a colleague who must rerun it has no such memory: it stops at every unstated choice. That role, and the instruction to list rather than fix, is what makes the review useful.",
        "Un auteur ne voit pas ses propres manques, car il les comble de mémoire. Un modèle qui lit le texte comme un collègue devant le refaire n'a pas cette mémoire : il s'arrête à chaque choix non précisé. Ce rôle, et la consigne de lister plutôt que de corriger, font l'utilité de la relecture."),
      B("Some choices must not be delegated. A sample size depends on the effect you expect and the variability of your measure, values that come from your pilot data or the literature you read. The analysis plan must be fixed before the data exist; otherwise the data will choose it for you.",
        "Certains choix ne se délèguent pas. Un effectif dépend de l'effet attendu et de la variabilité de votre mesure, des valeurs qui viennent de vos données pilotes ou de la littérature lue. Le plan d'analyse doit être figé avant l'existence des données ; sinon, ce sont les données qui le choisiront."),
    ],
    example: {
      context: B("Léna, a postdoc in plant biology, drafts a protocol to test whether a soil fungus improves wheat drought tolerance in the greenhouse.",
        "Léna, postdoctorante en biologie végétale, rédige un protocole pour tester si un champignon du sol améliore la tolérance du blé à la sécheresse, en serre."),
      before: B("Improve my protocol. [draft protocol]",
        "Améliore mon protocole. [projet de protocole]"),
      after: B("Here is my draft protocol: [pasted], with my hypothesis and primary outcome (biomass after 21 days of drought).\nAct as a colleague in another lab who must rerun this study exactly, from this text alone.\n1. List every point where you would have to guess: materials, doses, timings, conditions, measurements, who does what.\n2. Check: sample size and its justification, randomisation of pots to treatments, blinding of whoever measures, exclusion rules, handling of dead plants.\n3. Check that the analysis plan is complete: test, covariates, handling of missing data.\nDo not fix anything and do not propose numbers: list the gaps and tell me why each one matters.",
        "Voici mon projet de protocole : [collé], avec mon hypothèse et mon critère principal (biomasse après 21 jours de sécheresse).\nJoue un collègue d'un autre laboratoire qui doit refaire exactement cette étude, à partir de ce seul texte.\n1. Liste chaque point où tu devrais deviner : matériel, doses, durées, conditions, mesures, qui fait quoi.\n2. Vérifie : effectif et sa justification, randomisation des pots entre traitements, insu de la personne qui mesure, règles d'exclusion, traitement des plantes mortes.\n3. Vérifie que le plan d'analyse est complet : test, covariables, traitement des données manquantes.\nNe corrige rien et ne propose aucun chiffre : liste les manques et dis-moi pourquoi chacun compte."),
      takeaway: B("The review finds 11 gaps, including where pots sit in the greenhouse (edge pots dry faster) and who weighs the biomass. Léna fills them herself and computes the sample size from her pilot variance.",
        "La relecture relève 11 manques, dont la place des pots dans la serre (ceux du bord sèchent plus vite) et la personne qui pèse la biomasse. Léna les comble elle-même et calcule l'effectif à partir de la variance de son essai pilote."),
    },
    exercise: {
      goal: B("The list of every unstated choice in your protocol, each filled by you, and an analysis plan fixed before data collection.",
        "La liste de chaque choix non précisé de votre protocole, chacun comblé par vous, et un plan d'analyse figé avant la collecte."),
      prompt: B("Here is my draft protocol: [MY PROTOCOL].\nHypothesis: [HYPOTHESIS]. Primary outcome: [OUTCOME AND HOW IT IS MEASURED].\nAct as a colleague in another lab who must rerun this study exactly, from this text alone.\n1. List every point where you would have to guess, section by section.\n2. Check these items and say for each whether it is stated, vague or missing: sample size and justification, allocation or randomisation, blinding, inclusion and exclusion rules, handling of dropouts or failures, [ITEMS SPECIFIC TO MY FIELD].\n3. Check the analysis plan: primary test, covariates, missing data, multiple comparisons.\nDo not fix anything and propose no numbers. For each gap, say why it matters for the result.",
        "Voici mon projet de protocole : [MON PROTOCOLE].\nHypothèse : [HYPOTHÈSE]. Critère principal : [CRITÈRE ET SA MESURE].\nJoue un collègue d'un autre laboratoire qui doit refaire exactement cette étude, à partir de ce seul texte.\n1. Liste chaque point où tu devrais deviner, section par section.\n2. Vérifie ces éléments et dis pour chacun s'il est précisé, flou ou absent : effectif et justification, répartition ou randomisation, insu, critères d'inclusion et d'exclusion, traitement des abandons ou échecs, [ÉLÉMENTS PROPRES À MON DOMAINE].\n3. Vérifie le plan d'analyse : test principal, covariables, données manquantes, comparaisons multiples.\nNe corrige rien et ne propose aucun chiffre. Pour chaque manque, dis pourquoi il compte pour le résultat."),
      check: [
        B("The AI listed gaps without filling them", "L'IA a listé les manques sans les combler"),
        B("You filled each gap yourself, with a reason", "Vous avez comblé chaque manque vous-même, avec une raison"),
        B("Your sample size is computed from your own expected effect and variance", "Votre effectif est calculé à partir de votre propre effet attendu et de votre variance"),
        B("The analysis plan is dated and fixed before any data collection", "Le plan d'analyse est daté et figé avant toute collecte"),
      ],
      bonus: B("Give the revised protocol to a real colleague for ten minutes and ask the same question: where would you have to guess? Compare their list with the AI's; the differences show what only field experience catches.",
        "Confiez le protocole révisé dix minutes à un vrai collègue et posez la même question : où devriez-vous deviner ? Comparez sa liste avec celle de l'IA ; les différences montrent ce que seule l'expérience du terrain repère."),
    },
    more: [
      { q: B("The AI suggests \"n = 30 per group, which is standard\". What do you do?",
          "L'IA propose « n = 30 par groupe, c'est l'usage ». Que faites-vous ?"),
        options: [
          B("Accept it, since 30 is a common rule of thumb", "Vous l'acceptez, 30 étant une règle empirique courante"),
          B("Double it to be on the safe side, whatever the effect you expect", "Vous le doublez par prudence, quel que soit l'effet attendu"),
          B("Compute it from your expected effect, variance and power", "Vous le calculez à partir de l'effet attendu, de la variance et de la puissance"),
        ],
        answer: 2,
        why: B("There is no standard sample size. The right number depends on the smallest effect worth detecting and on your measure's variability; a generic number can leave you underpowered or waste resources.",
          "Il n'existe pas d'effectif standard. Le bon nombre dépend du plus petit effet qui vaille d'être détecté et de la variabilité de votre mesure ; un chiffre générique peut vous priver de puissance ou gaspiller des ressources.") },
      { q: B("Why ask the AI to act as a colleague who must rerun the study?",
          "Pourquoi demander à l'IA de jouer un collègue qui doit refaire l'étude ?"),
        options: [
          B("So it looks for details a stranger would need, not for style", "Pour qu'elle cherche les détails utiles à un inconnu, et non le style"),
          B("Because a colleague's tone is friendlier", "Parce que le ton d'un collègue est plus aimable"),
          B("So it rewrites the whole protocol in a standard format that journals accept", "Pour qu'elle réécrive le protocole dans un format standard accepté par les revues"),
          B("To check the protocol's grammar and spelling", "Pour vérifier la grammaire et l'orthographe du protocole"),
        ],
        answer: 0,
        why: B("The role sets the reading: someone who must reproduce the work stops at every unstated choice. \"Improve my protocol\" invites comments on wording, which change nothing in reproducibility.",
          "Le rôle fixe la lecture : quelqu'un qui doit reproduire le travail s'arrête à chaque choix non précisé. « Améliore mon protocole » invite des remarques de formulation, qui ne changent rien à la reproductibilité.") },
    ],
  },

  'sc-study/sc-stats': {
    why: [
      B("A statistical test answers a precise question under precise assumptions: independent observations, a given distribution, equal variances, a fixed number of comparisons. When an assumption fails, the p-value no longer means what you think. Checking the fit between design and test is the step most often skipped, and the one reviewers check first.",
        "Un test statistique répond à une question précise sous des hypothèses précises : observations indépendantes, distribution donnée, variances égales, nombre fixé de comparaisons. Quand une hypothèse tombe, la p-value ne signifie plus ce que vous croyez. Vérifier l'adéquation entre protocole et test est l'étape la plus souvent sautée, et la première que vérifient les relecteurs."),
      B("An AI is useful to review that fit and to write analysis code, but not to produce the numbers. A model asked for a p-value in conversation may generate a plausible figure without any real computation. Numbers must come from code you run on the real data, in your own software, where the script records exactly what was done.",
        "Une IA est utile pour examiner cette adéquation et écrire le code d'analyse, mais pas pour produire les chiffres. Un modèle à qui l'on demande une p-value dans la conversation peut générer un nombre plausible sans aucun calcul réel. Les chiffres doivent venir d'un code exécuté sur les vraies données, dans votre logiciel, où le script garde la trace exacte de ce qui a été fait."),
      B("Unpublished data are often confidential: patient records, industrial partners, results under embargo. Describing the structure (variables, types, sample size) or sharing a few synthetic rows is enough to get a correct script. Share real data only with a tool your institution has approved for that data.",
        "Les données inédites sont souvent confidentielles : dossiers de patients, partenaires industriels, résultats sous embargo. Décrire leur structure (variables, types, effectif) ou partager quelques lignes synthétiques suffit à obtenir un script correct. Ne partagez de vraies données qu'avec un outil approuvé par votre établissement pour ces données."),
    ],
    example: {
      context: B("Thomas, a clinical researcher, compares pain scores between three treatments in 90 patients, each measured at three time points.",
        "Thomas, chercheur clinicien, compare des scores de douleur entre trois traitements chez 90 patients, chacun mesuré à trois moments."),
      before: B("Here are my data [patient table]. Run an ANOVA and tell me if it's significant.",
        "Voici mes données [tableau des patients]. Fais une ANOVA et dis-moi si c'est significatif."),
      after: B("I will not share patient data. Here is the structure: 90 patients, variable group (3 treatments, 30 each), variable time (day 0, 7, 28), pain score from 0 to 10 (ordinal), age and sex as covariates. Each patient is measured three times.\n1. Is a one-way ANOVA on all measurements appropriate here? If not, why, and what fits this design?\n2. List the assumptions of the model you propose and how to check each one.\n3. Write an R script that fits it, checks the assumptions, and reports effect sizes with 95% confidence intervals, with a correction for the pairwise comparisons.\n4. Generate 10 synthetic rows with the same structure so I can test the script before running it on the real data.",
        "Je ne partagerai pas les données des patients. Voici leur structure : 90 patients, variable groupe (3 traitements, 30 chacun), variable temps (jour 0, 7, 28), score de douleur de 0 à 10 (ordinal), âge et sexe en covariables. Chaque patient est mesuré trois fois.\n1. Une ANOVA à un facteur sur toutes les mesures convient-elle ici ? Sinon, pourquoi, et qu'est-ce qui convient à ce protocole ?\n2. Liste les hypothèses du modèle proposé et comment vérifier chacune.\n3. Écris un script R qui l'ajuste, vérifie les hypothèses et rapporte les tailles d'effet avec leurs intervalles de confiance à 95 %, avec une correction pour les comparaisons deux à deux.\n4. Génère 10 lignes synthétiques de même structure pour que je teste le script avant de l'exécuter sur les vraies données."),
      takeaway: B("The one-way ANOVA would have treated 270 measurements as independent when they come from 90 patients. The second prompt surfaces the repeated measures, protects the patients' data, and yields numbers Thomas computes himself.",
        "L'ANOVA à un facteur aurait traité 270 mesures comme indépendantes alors qu'elles viennent de 90 patients. Le second prompt fait apparaître les mesures répétées, protège les données des patients, et donne des chiffres que Thomas calcule lui-même."),
    },
    exercise: {
      goal: B("A check of your test against your design, and an analysis script tested on synthetic rows, then run by you on the real data.",
        "Une vérification de votre test au regard de votre protocole, et un script d'analyse testé sur des lignes synthétiques, puis exécuté par vous sur les vraies données."),
      prompt: B("I will not paste my raw data. Here is its structure:\n- Design: [DESIGN: GROUPS, REPEATED MEASURES, MATCHING...]\n- Variables: [NAME, TYPE AND UNIT OF EACH VARIABLE]\n- Sample size: [N PER GROUP]\n- Hypothesis and primary outcome: [HYPOTHESIS, OUTCOME]\n- Test I planned: [TEST]\n1. Does this test fit the design? If not, why, and what fits?\n2. List its assumptions and how to check each.\n3. Write a script in [R / PYTHON / OTHER] that runs the analysis, checks the assumptions, and reports effect sizes with confidence intervals, correcting for multiple comparisons if there are any.\n4. Generate 10 synthetic rows with the same structure so I can test the script.\nDo not state any result: I will run the script myself.",
        "Je ne collerai pas mes données brutes. Voici leur structure :\n- Protocole : [PROTOCOLE : GROUPES, MESURES RÉPÉTÉES, APPARIEMENT...]\n- Variables : [NOM, TYPE ET UNITÉ DE CHAQUE VARIABLE]\n- Effectif : [N PAR GROUPE]\n- Hypothèse et critère principal : [HYPOTHÈSE, CRITÈRE]\n- Test prévu : [TEST]\n1. Ce test convient-il au protocole ? Sinon, pourquoi, et qu'est-ce qui convient ?\n2. Liste ses hypothèses et comment vérifier chacune.\n3. Écris un script en [R / PYTHON / AUTRE] qui mène l'analyse, vérifie les hypothèses et rapporte les tailles d'effet avec leurs intervalles de confiance, en corrigeant les comparaisons multiples s'il y en a.\n4. Génère 10 lignes synthétiques de même structure pour que je teste le script.\nN'annonce aucun résultat : j'exécuterai le script moi-même."),
      check: [
        B("No raw unpublished data left your approved tools", "Aucune donnée brute inédite n'a quitté vos outils autorisés"),
        B("The test matches the design, repeated measures and pairing included", "Le test correspond au protocole, mesures répétées et appariements compris"),
        B("The script reports effect sizes and intervals, not only p-values", "Le script rapporte tailles d'effet et intervalles, pas seulement des p-values"),
        B("Every number you will report comes from your own run of the script", "Chaque chiffre que vous rapporterez vient de votre propre exécution du script"),
      ],
      bonus: B("Save the script, the software version and the date with your results, and rerun it from scratch once before submission. If the numbers differ, you have found a reproducibility problem before a reviewer did.",
        "Archivez le script, la version du logiciel et la date avec vos résultats, et relancez-le entièrement une fois avant soumission. Si les chiffres diffèrent, vous avez trouvé un problème de reproductibilité avant un relecteur."),
    },
    more: [
      { q: B("Why generate synthetic rows before running the script on real data?",
          "Pourquoi générer des lignes synthétiques avant d'exécuter le script sur les vraies données ?"),
        options: [
          B("To test the code without exposing the real data", "Pour tester le code sans exposer les vraies données"),
          B("To add them to the real sample and gain statistical power", "Pour les ajouter au vrai échantillon et gagner en puissance"),
          B("To see in advance which result you will get", "Pour savoir à l'avance quel résultat vous obtiendrez"),
        ],
        answer: 0,
        why: B("Synthetic rows share the structure, not the content. They let you debug the code safely; mixing them into the real sample would be fabrication.",
          "Les lignes synthétiques partagent la structure, pas le contenu. Elles permettent de corriger le code sans risque ; les mêler au vrai échantillon serait une fabrication de données.") },
      { q: B("Three patients are each measured on 3 days. How many independent units do you have?",
          "Trois patients sont mesurés chacun à 3 dates. Combien d'unités indépendantes avez-vous ?"),
        options: [
          B("Nine, one per measurement", "Neuf, une par mesure"),
          B("Three, one per patient", "Trois, une par patient"),
          B("Six, as a compromise between the two", "Six, compromis entre les deux"),
          B("It depends on the test chosen", "Cela dépend du test choisi"),
        ],
        answer: 1,
        why: B("Measurements on the same patient are correlated. Treating them as independent inflates the sample size and makes p-values too small; repeated-measures models handle this.",
          "Les mesures d'un même patient sont corrélées. Les traiter comme indépendantes gonfle l'effectif et rend les p-values trop petites ; les modèles à mesures répétées en tiennent compte.") },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* CITÉ 3 · ÉCRIRE, RELIRE, OBTENIR UN FINANCEMENT                   */
  /* ---------------------------------------------------------------- */

  'sc-publish/sc-write': {
    why: [
      B("The results section has one job: report accurately what the analysis produced. A model writing from a general description of your study will produce the text such papers usually contain, with numbers that are typical rather than yours. Pasting the actual output tables and restricting the text to those numbers turns the model into a careful writer instead of an inventive one.",
        "La section résultats a une seule fonction : rapporter fidèlement ce que l'analyse a produit. Un modèle qui écrit à partir d'une description générale de votre étude produira le texte que contiennent d'ordinaire ces articles, avec des chiffres typiques plutôt que les vôtres. Coller les vrais tableaux de sortie et limiter le texte à ces chiffres fait du modèle un rédacteur scrupuleux plutôt qu'inventif."),
      B("References are the other danger. Asked to support a sentence with citations, a model may produce references that do not exist, or real papers that say something else. Writing [REF] as a placeholder keeps the draft honest: you then insert sources you have read, from your reference manager.",
        "Les références sont l'autre danger. Invité à appuyer une phrase par des citations, un modèle peut produire des références inexistantes, ou de vrais articles qui disent autre chose. Écrire [REF] comme marque de réservation garde le brouillon honnête : vous insérez ensuite des sources que vous avez lues, depuis votre gestionnaire de références."),
      B("Overclaiming is the subtle failure: \"X improves Y\" when the design shows an association, \"significant\" used to mean important. Asking the model to flag any sentence that goes beyond the numbers catches these before a reviewer does. Check the journal's policy on AI in writing, and declare the use as required.",
        "L'exagération est l'échec discret : « X améliore Y » quand le protocole montre une association, « significatif » employé pour « important ». Demander au modèle de signaler toute phrase qui dépasse les chiffres les attrape avant un relecteur. Vérifiez la politique de la revue sur l'IA en rédaction, et déclarez l'usage comme exigé."),
    ],
    example: {
      context: B("Mei Chen, an epidemiologist, has the final regression tables of a cohort study on air pollution and asthma admissions and must draft the results section.",
        "Mei Chen, épidémiologiste, dispose des tableaux de régression finaux d'une étude de cohorte sur la pollution de l'air et les hospitalisations pour asthme, et doit rédiger la section résultats."),
      before: B("Write the results and discussion of my study on air pollution and asthma, with references.",
        "Écris les résultats et la discussion de mon étude sur la pollution de l'air et l'asthme, avec des références."),
      after: B("Here are my final output tables, as produced by my software: [Table 1 descriptive statistics, Table 2 adjusted regression, Table 3 sensitivity analyses].\nWrite the results section (400 words max).\nRules:\n1. Use only numbers present in these tables, copied exactly, with their confidence intervals.\n2. Do not interpret causally: this is an observational cohort.\n3. Do not cite anything. Where a comparison with the literature would help, write [REF].\n4. After the text, list any sentence that states more than the tables show, and any number you had to round.",
        "Voici mes tableaux de sortie finaux, tels que produits par mon logiciel : [Tableau 1 statistiques descriptives, Tableau 2 régression ajustée, Tableau 3 analyses de sensibilité].\nÉcris la section résultats (400 mots au maximum).\nRègles :\n1. N'emploie que des chiffres présents dans ces tableaux, recopiés exactement, avec leurs intervalles de confiance.\n2. N'interprète pas causalement : il s'agit d'une cohorte observationnelle.\n3. Ne cite rien. Là où une comparaison avec la littérature aiderait, écris [REF].\n4. Après le texte, liste toute phrase qui affirme plus que ce que montrent les tableaux, et tout chiffre que tu as dû arrondir."),
      takeaway: B("The first prompt invites invented numbers, causal claims and fabricated references. The second yields a draft where every figure is checkable, every citation is a placeholder, and the overstatements are listed for review.",
        "Le premier prompt invite chiffres inventés, affirmations causales et références fabriquées. Le second donne un brouillon où chaque chiffre est vérifiable, chaque citation une marque de réservation, et les exagérations listées pour relecture."),
    },
    exercise: {
      goal: B("A results section drafted from your own output tables, every number checked against them, [REF] placeholders instead of citations, and a list of possible overstatements.",
        "Une section résultats rédigée à partir de vos tableaux de sortie, chaque chiffre vérifié sur eux, des marques [REF] au lieu de citations, et une liste d'exagérations possibles."),
      prompt: B("Here are my final output tables, exactly as my software produced them: [MY TABLES OR OUTPUTS].\nStudy design: [DESIGN]. Primary outcome: [OUTCOME].\nWrite the [SECTION: RESULTS / FIGURE LEGENDS] ([LENGTH] max).\nRules:\n1. Use only numbers present in these tables, copied exactly, with their uncertainty.\n2. Match the claims to the design: no causal wording for an observational design.\n3. Cite nothing. Write [REF] wherever a source would be needed.\n4. Do not describe analyses that are not in the tables.\nAfter the text: list every sentence that says more than the tables show, and every number you rounded or recalculated.",
        "Voici mes tableaux de sortie finaux, exactement tels que produits par mon logiciel : [MES TABLEAUX OU SORTIES].\nProtocole : [PROTOCOLE]. Critère principal : [CRITÈRE].\nÉcris la [SECTION : RÉSULTATS / LÉGENDES DES FIGURES] ([LONGUEUR] au maximum).\nRègles :\n1. N'emploie que des chiffres présents dans ces tableaux, recopiés exactement, avec leur incertitude.\n2. Accorde les affirmations au protocole : aucune formulation causale pour un protocole observationnel.\n3. Ne cite rien. Écris [REF] partout où une source serait nécessaire.\n4. Ne décris aucune analyse absente des tableaux.\nAprès le texte : liste chaque phrase qui dit plus que les tableaux, et chaque chiffre que tu as arrondi ou recalculé."),
      check: [
        B("Every number in the text appears in your tables, digit for digit", "Chaque chiffre du texte figure dans vos tableaux, à l'identique"),
        B("No reference was written by the AI, only [REF] placeholders", "Aucune référence n'a été écrite par l'IA, seulement des marques [REF]"),
        B("The wording matches the design (association, not effect, if observational)", "La formulation correspond au protocole (association, et non effet, si observationnel)"),
        B("You replaced each [REF] with a source you have read", "Vous avez remplacé chaque [REF] par une source que vous avez lue"),
      ],
      bonus: B("Check your target journal's policy on AI-assisted writing and draft the disclosure sentence now, while you remember exactly which sections the AI drafted and how you checked them.",
        "Consultez la politique de la revue visée sur la rédaction assistée par IA et rédigez dès maintenant la phrase de déclaration, tant que vous savez exactement quelles sections l'IA a ébauchées et comment vous les avez vérifiées."),
    },
    more: [
      { q: B("The draft says \"pollution increases asthma admissions\" for your cohort study. What do you change?",
          "Le brouillon dit « la pollution augmente les hospitalisations pour asthme » pour votre étude de cohorte. Que modifiez-vous ?"),
        options: [
          B("Nothing, since the association is statistically significant in your model", "Rien, puisque l'association est statistiquement significative dans votre modèle"),
          B("Add \"significantly\" to make it stronger", "Ajouter « significativement » pour la renforcer"),
          B("Delete the sentence altogether", "Supprimer purement et simplement la phrase"),
          B("State an association, not a causal effect", "Énoncer une association, et non un effet causal"),
        ],
        answer: 3,
        why: B("An observational cohort shows that exposure and outcome move together after adjustment, not that one causes the other. \"Is associated with\" states what the design supports.",
          "Une cohorte observationnelle montre qu'exposition et critère varient ensemble après ajustement, pas que l'un cause l'autre. « Est associé à » énonce ce que le protocole permet.") },
      { q: B("You need a citation for a well-known finding, and the AI offers one. What do you do?",
          "Vous avez besoin d'une citation pour un résultat bien connu, et l'IA en propose une. Que faites-vous ?"),
        options: [
          B("Use it, since the finding is well known", "Vous l'employez, puisque le résultat est bien connu"),
          B("Keep [REF] and find the source in a database", "Vous gardez [REF] et cherchez la source dans une base"),
          B("Use it, but check only that the journal exists", "Vous l'employez en vérifiant seulement que la revue existe"),
        ],
        answer: 1,
        why: B("Even for well-known findings, models can attach the wrong paper, year or authors. The source must be one you found and read; the placeholder keeps the gap visible until then.",
          "Même pour des résultats connus, les modèles peuvent associer le mauvais article, la mauvaise année ou les mauvais auteurs. La source doit être une source que vous avez trouvée et lue ; la marque garde le manque visible jusque-là.") },
    ],
  },

  'sc-publish/sc-review': {
    why: [
      B("A manuscript under review is confidential, unpublished work that the authors entrusted to the journal and, through it, to you. Pasting it into a general AI tool may send it to a third party, with possible retention depending on the tool and its settings. Many journals and funders therefore forbid reviewers to upload manuscripts, or allow it only in approved tools.",
        "Un manuscrit en relecture est un travail inédit et confidentiel que les auteurs ont confié à la revue et, par elle, à vous. Le coller dans un outil d'IA grand public peut l'envoyer à un tiers, avec une conservation possible selon l'outil et ses réglages. Beaucoup de revues et de financeurs interdisent donc aux relecteurs de téléverser les manuscrits, ou ne le permettent que dans des outils approuvés."),
      B("The judgement is also what the editor asked of you, not of a model. Your expertise decides whether the controls are adequate or the claim goes too far. Within the rules, the AI can still help with your own words: turning rough notes into a clear, well-organised report, or checking that your tone stays constructive.",
        "Le jugement est aussi ce que l'éditeur vous a demandé, à vous et non à un modèle. C'est votre expertise qui décide si les témoins suffisent ou si l'affirmation va trop loin. Dans le respect des règles, l'IA peut encore aider sur vos propres mots : transformer des notes brutes en rapport clair et bien organisé, ou vérifier que le ton du rapport reste constructif."),
      B("A good report separates major issues (those that threaten the conclusions) from minor ones (clarity, presentation), and ties each to a place in the manuscript. That structure is what makes a review useful to authors and editors, and it can be built entirely from your notes.",
        "Un bon rapport distingue les problèmes majeurs (ceux qui menacent les conclusions) des mineurs (clarté, présentation), et rattache chacun à un endroit du manuscrit. Cette structure fait l'utilité d'une relecture pour les auteurs et l'éditeur, et elle se construit entièrement à partir de vos notes."),
    ],
    example: {
      context: B("Ana Oliveira, an immunologist, reviews a manuscript for a journal that forbids uploading manuscripts to AI tools but allows help with the reviewer's own text.",
        "Ana Oliveira, immunologiste, relit un manuscrit pour une revue qui interdit de téléverser les manuscrits dans des outils d'IA mais permet l'aide sur le texte propre du relecteur."),
      before: B("Here is a manuscript I'm reviewing [full PDF]. Write a peer review report.",
        "Voici un manuscrit que je relis [PDF complet]. Écris un rapport de relecture."),
      after: B("Below are my own review notes on a manuscript. They contain no text, data or figures from the manuscript, and no names.\n[my notes: 1. Claim: treatment X reduces inflammation in model Y. 2. Controls: no vehicle-only group in Fig. 3. 3. n = 4 per group, no power calculation. 4. Western blots: quantification method not described. 5. Title overstates: mouse data only. 6. Typos in methods.]\nOrganise these notes into a review report: a two-sentence summary of what I understood, major issues, minor issues, each with the section I cited.\nDo not add any criticism I did not write. Keep the tone constructive and specific.",
        "Voici mes propres notes de relecture sur un manuscrit. Elles ne contiennent ni texte, ni données, ni figures du manuscrit, ni aucun nom.\n[mes notes : 1. Affirmation : le traitement X réduit l'inflammation dans le modèle Y. 2. Témoins : pas de groupe véhicule seul en fig. 3. 3. n = 4 par groupe, sans calcul de puissance. 4. Western blots : méthode de quantification non décrite. 5. Le titre exagère : données chez la souris seulement. 6. Coquilles dans les méthodes.]\nOrganise ces notes en rapport de relecture : un résumé de deux phrases de ce que j'ai compris, problèmes majeurs, problèmes mineurs, chacun avec la section que j'ai citée.\nN'ajoute aucune critique que je n'ai pas écrite. Garde un ton constructif et précis."),
      takeaway: B("The first prompt breaks the journal's policy and hands the judgement to the model. The second respects both: the expertise is Ana's, the manuscript never leaves her hands, and the AI only shapes her report.",
        "Le premier prompt enfreint la politique de la revue et confie le jugement au modèle. Le second respecte les deux : l'expertise est celle d'Ana, le manuscrit ne quitte jamais ses mains, et l'IA ne fait que mettre en forme son rapport."),
    },
    exercise: {
      goal: B("A peer review report built from your own notes, within the journal's policy, with major and minor issues tied to sections of the manuscript.",
        "Un rapport de relecture construit à partir de vos propres notes, dans le respect de la politique de la revue, avec problèmes majeurs et mineurs rattachés aux sections du manuscrit."),
      prompt: B("The journal's policy on AI for reviewers says: [QUOTE OF THE POLICY]. If what follows breaks it, tell me and stop.\nBelow are my own review notes. They contain no text, data, figures or names from the manuscript: [MY NOTES, NUMBERED, WITH THE SECTION CONCERNED].\n1. Write a two-sentence summary of the study as my notes describe it.\n2. Sort my points into major issues (they threaten the conclusions) and minor issues (clarity, presentation). Explain each in one or two sentences, with its section.\n3. Add no criticism I did not write, and no praise either.\n4. For each major issue, suggest the analysis or experiment that would address it, marked as a suggestion.",
        "La politique de la revue sur l'IA pour les relecteurs dit : [CITATION DE LA POLITIQUE]. Si ce qui suit l'enfreint, dis-le et arrête-toi.\nVoici mes propres notes de relecture. Elles ne contiennent ni texte, ni données, ni figures, ni noms tirés du manuscrit : [MES NOTES, NUMÉROTÉES, AVEC LA SECTION CONCERNÉE].\n1. Écris un résumé de deux phrases de l'étude telle que mes notes la décrivent.\n2. Classe mes points en problèmes majeurs (ils menacent les conclusions) et mineurs (clarté, présentation). Explique chacun en une ou deux phrases, avec sa section.\n3. N'ajoute aucune critique que je n'ai pas écrite, ni aucun éloge.\n4. Pour chaque problème majeur, propose l'analyse ou l'expérience qui y répondrait, présentée comme une suggestion."),
      check: [
        B("You read the journal's policy before using any AI", "Vous avez lu la politique de la revue avant tout usage de l'IA"),
        B("Nothing from the manuscript itself was pasted", "Rien du manuscrit lui-même n'a été collé"),
        B("Every point in the report comes from your notes", "Chaque point du rapport vient de vos notes"),
        B("Major and minor issues are separated and tied to sections", "Problèmes majeurs et mineurs sont séparés et rattachés à des sections"),
      ],
      bonus: B("If the journal requires it, add a line to your confidential comments to the editor stating how you used AI (organising your own notes) and what you did not do (no upload of the manuscript).",
        "Si la revue l'exige, ajoutez à vos commentaires confidentiels pour l'éditeur une ligne indiquant comment vous avez utilisé l'IA (mise en forme de vos notes) et ce que vous n'avez pas fait (aucun téléversement du manuscrit)."),
    },
    more: [
      { q: B("The journal's policy says nothing about AI. What is the safest course?",
          "La politique de la revue ne dit rien de l'IA. Quelle est la conduite la plus sûre ?"),
        options: [
          B("Upload the manuscript, since nothing forbids it", "Téléverser le manuscrit, puisque rien ne l'interdit"),
          B("Ask the editor, and meanwhile keep the manuscript out of AI tools", "Interroger l'éditeur, et d'ici là garder le manuscrit hors des outils d'IA"),
          B("Upload only the figures and tables, since they contain no sentences of the authors", "Téléverser seulement figures et tableaux, qui ne contiennent aucune phrase des auteurs"),
        ],
        answer: 1,
        why: B("Confidentiality applies whether or not AI is mentioned. Silence is not permission; the editor can tell you what is acceptable for this journal.",
          "La confidentialité s'applique, que l'IA soit mentionnée ou non. Le silence ne vaut pas permission ; l'éditeur peut vous dire ce qui est acceptable pour cette revue.") },
      { q: B("Your notes say \"n = 4, no power analysis\". Is this a major or a minor issue?",
          "Vos notes indiquent « n = 4, pas d'analyse de puissance ». Problème majeur ou mineur ?"),
        options: [
          B("Minor, it is a presentation detail", "Mineur, c'est un détail de présentation"),
          B("Neither, small samples are normal in the field", "Ni l'un ni l'autre, les petits effectifs sont courants"),
          B("Minor, as long as the p-value is below 0.05", "Mineur, tant que la p-value est inférieure à 0,05"),
          B("Major if the conclusions depend on it", "Majeur si les conclusions en dépendent"),
        ],
        answer: 3,
        why: B("A sample too small to detect the claimed effect reliably threatens the conclusion itself. A low p-value from four animals can be a chance result; that is a major issue.",
          "Un effectif trop petit pour détecter de façon fiable l'effet annoncé menace la conclusion elle-même. Une p-value basse obtenue sur quatre animaux peut relever du hasard : c'est un problème majeur.") },
    ],
  },

  'sc-publish/sc-grant': {
    why: [
      B("A grant panel does not read a proposal as a paper. Each member scores it against the funder's published criteria, often weighted: excellence, impact, feasibility, team. A brilliant idea described in a way that does not map onto those criteria loses points it deserved. Reading your draft through the criteria is therefore the most useful review you can do.",
        "Un jury de financement ne lit pas un projet comme un article. Chaque membre le note selon les critères publiés du financeur, souvent pondérés : excellence, impact, faisabilité, équipe. Une idée brillante décrite d'une façon qui ne correspond pas à ces critères perd des points qu'elle méritait. Lire votre projet à travers les critères est donc la relecture la plus utile qui soit."),
      B("An AI plays a sceptical panel member well if it has the criteria word for word and must quote your text for each score. It then shows where a criterion has no answer in your draft, and where aims, work packages and budget do not match, a frequent reason for low feasibility scores.",
        "Une IA joue bien un membre de jury sceptique si elle dispose des critères mot pour mot et doit citer votre texte pour chaque note. Elle montre alors où un critère reste sans réponse dans votre projet, et où objectifs, lots de travail et budget ne concordent pas, cause fréquente de notes de faisabilité basses."),
      B("The limit is honesty. Asked to \"strengthen\" a proposal, a model adds confident promises, preliminary results and citations. Every such addition is a claim you must be able to prove to the panel; preliminary data you do not have would be fabrication. The AI diagnoses; you write.",
        "La limite est l'honnêteté. Invité à « renforcer » un projet, un modèle ajoute des promesses assurées, des résultats préliminaires et des citations. Chacun de ces ajouts est une affirmation que vous devez pouvoir prouver au jury ; des données préliminaires que vous n'avez pas seraient une fabrication. L'IA diagnostique ; vous écrivez."),
    ],
    example: {
      context: B("Paul Morel, a materials scientist, is preparing a proposal on recyclable battery membranes for a national research agency, due in three weeks.",
        "Paul Morel, chercheur en science des matériaux, prépare pour une agence nationale de la recherche un projet sur des membranes de batterie recyclables, à déposer dans trois semaines."),
      before: B("Make my grant proposal more convincing. [draft]",
        "Rends mon projet de financement plus convaincant. [projet]"),
      after: B("Here are the evaluation criteria of the call, word for word, with their weights: [pasted]. Then my draft proposal: [pasted].\nAct as a sceptical panel member who has 20 proposals to score.\n1. For each criterion, give a score on the call's scale, quote the passage of my draft that supports it, and name the weakest point.\n2. List mismatches between aims, work packages, timeline and budget (for example a task with no person-months).\n3. List the claims a panel member would ask me to prove.\nDo not rewrite anything; do not add results, data or references.",
        "Voici les critères d'évaluation de l'appel, mot pour mot, avec leurs pondérations : [collés]. Puis mon projet : [collé].\nJoue un membre de jury sceptique qui a 20 projets à noter.\n1. Pour chaque critère, donne une note selon l'échelle de l'appel, cite le passage de mon projet qui la justifie, et nomme le point le plus faible.\n2. Liste les incohérences entre objectifs, lots de travail, calendrier et budget (par exemple une tâche sans personne-mois).\n3. Liste les affirmations qu'un membre du jury me demanderait de prouver.\nNe réécris rien ; n'ajoute ni résultats, ni données, ni références."),
      takeaway: B("\"More convincing\" would have returned polished text with bold promises. The criteria-based review shows that impact scores low because no user of the membranes is named, and that work package 3 has no budget line.",
        "« Plus convaincant » aurait renvoyé un texte poli aux promesses audacieuses. La relecture par critères montre que l'impact est faiblement noté faute d'utilisateur nommé des membranes, et que le lot 3 n'a aucune ligne budgétaire."),
    },
    exercise: {
      goal: B("A criterion-by-criterion score of your proposal with quoted evidence, the list of mismatches between aims and resources, and the claims you must be able to prove.",
        "Une note critère par critère de votre projet avec citations à l'appui, la liste des incohérences entre objectifs et moyens, et les affirmations que vous devez pouvoir prouver."),
      prompt: B("Evaluation criteria of the call, word for word, with weights and scale: [CRITERIA].\nMy draft proposal: [MY DRAFT, OR THE SECTIONS READY SO FAR].\nAct as a sceptical panel member in [FIELD] with many proposals to score.\n1. Score each criterion on the call's scale. Quote the passage that justifies the score. Name the single weakest point.\n2. List mismatches between aims, methods, work packages, timeline and budget.\n3. List every claim a panel member would ask me to prove, and what evidence would convince them.\n4. Name the criterion where one revision would gain the most points.\nDo not rewrite my text. Do not invent preliminary results, data, partners or references.",
        "Critères d'évaluation de l'appel, mot pour mot, avec pondérations et échelle : [CRITÈRES].\nMon projet : [MON PROJET, OU LES SECTIONS DÉJÀ PRÊTES].\nJoue un membre de jury sceptique en [DOMAINE] qui a de nombreux projets à noter.\n1. Note chaque critère selon l'échelle de l'appel. Cite le passage qui justifie la note. Nomme le point le plus faible.\n2. Liste les incohérences entre objectifs, méthodes, lots de travail, calendrier et budget.\n3. Liste chaque affirmation qu'un membre du jury me demanderait de prouver, et la preuve qui le convaincrait.\n4. Nomme le critère où une seule révision rapporterait le plus de points.\nNe réécris pas mon texte. N'invente ni résultats préliminaires, ni données, ni partenaires, ni références."),
      check: [
        B("The criteria were pasted word for word, with their weights", "Les critères ont été collés mot pour mot, avec leurs pondérations"),
        B("Each score quotes a passage of your draft", "Chaque note cite un passage de votre projet"),
        B("Every claim to prove has real evidence behind it, or you removed it", "Chaque affirmation à prouver repose sur une preuve réelle, ou vous l'avez retirée"),
        B("Nothing in the revised proposal was invented by the AI", "Rien dans le projet révisé n'a été inventé par l'IA"),
      ],
      bonus: B("Ask two colleagues to score the draft on the same criteria, without seeing the AI's scores. Where all three agree on a weak point, fix it first; where they disagree, the text is probably ambiguous.",
        "Demandez à deux collègues de noter le projet selon les mêmes critères, sans voir les notes de l'IA. Là où les trois s'accordent sur un point faible, corrigez-le d'abord ; là où ils divergent, le texte est sans doute ambigu."),
    },
    more: [
      { q: B("The AI suggests adding \"our preliminary results show a 40% gain\". You have no such data. What do you do?",
          "L'IA suggère d'ajouter « nos résultats préliminaires montrent un gain de 40 % ». Vous n'avez pas ces données. Que faites-vous ?"),
        options: [
          B("Add it, since it will be true once the project runs", "Vous l'ajoutez, puisque ce sera vrai une fois le projet lancé"),
          B("Add it with a more cautious figure", "Vous l'ajoutez avec un chiffre plus prudent"),
          B("Refuse it and describe honestly what you do have", "Vous refusez et décrivez honnêtement ce dont vous disposez"),
        ],
        answer: 2,
        why: B("Stating results you do not have is fabrication, whatever the figure. Panels value honest pilot data, or a clear plan to obtain them, over invented numbers they may ask you to show.",
          "Annoncer des résultats que vous n'avez pas est une fabrication, quel que soit le chiffre. Les jurys préfèrent des données pilotes honnêtes, ou un plan clair pour les obtenir, à des chiffres inventés qu'ils pourraient vous demander de montrer.") },
      { q: B("Why paste the call's criteria word for word rather than summarising them?",
          "Pourquoi coller les critères de l'appel mot pour mot plutôt que de les résumer ?"),
        options: [
          B("Funders word and weight them differently, and panels score to that text", "Chaque financeur les formule et pondère à sa façon, et le jury note selon ce texte"),
          B("To make the prompt longer and more detailed", "Pour rendre le prompt plus long et plus détaillé"),
          B("Because the AI cannot summarise criteria", "Parce que l'IA ne sait pas résumer des critères"),
          B("It is not needed, since all panels in every country use the same criteria", "Ce n'est pas nécessaire, puisque tous les jurys emploient les mêmes critères"),
        ],
        answer: 0,
        why: B("\"Impact\" can mean societal benefit for one funder and scientific influence for another. Panels score to the exact wording and weights, so your review must use them too.",
          "« Impact » peut désigner le bénéfice pour la société chez un financeur et l'influence scientifique chez un autre. Les jurys notent selon la formulation et les pondérations exactes : votre relecture doit donc les employer aussi.") },
    ],
  },
}

/* ================================================================== */
/* LA COUCHE PÉDAGOGIQUE · data/deep                                   */
/* ================================================================== */

const DEEP: Record<string, Deepening> = {
  /*@DEEP@*/
}

export const METIER_SCIENTIST: TradePack = {
  trade: {
    id: 'scientist',
    label: B('Scientist', 'Scientifique'),
    who: B('You read the literature, run studies and publish, and every claim you make must hold up to checking.',
      "Vous lisez la littérature, menez des études et publiez, et chacune de vos affirmations doit résister à la vérification."),
    glyph: 'hex', tint: TINT,
    cities: ['sc-literature', 'sc-study', 'sc-publish'],
  },
  modules: MODULES,
  enrich: ENRICH,
  deep: DEEP,
}
