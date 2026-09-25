// LA FORMATION MÉTIER « student » · voir ./types. Trois cités qui suivent la
// vie réelle d'un étudiant : comprendre un cours (ce qui déclenche le
// travail), réviser (ce dont il est fait), puis examens et travaux écrits (ce
// qui le termine). Le fil rouge est l'intégrité académique : l'IA est un
// tuteur, jamais un prête-plume, et les règles de l'établissement priment.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { TradePack } from './types'

const TINT = '#3b82f6'

/* ================================================================== */
/* CITÉ 1 · COMPRENDRE LE COURS                                        */
/* ================================================================== */

const ST_COURSE: Level[] = [
  {
    id: 'st-rules',
    master: 'triage',
    minutes: 6,
    title: B('Know what your course allows', 'Sachez ce que votre cours autorise'),
    learn: B(
      'You will sort your uses of AI into allowed, allowed if declared, and forbidden, course by course.',
      "Vous apprendrez à classer vos usages de l'IA en autorisés, autorisés si déclarés, et interdits, cours par cours.",
    ),
    act: B("Paste your course's AI policy, list your planned uses, and sort each one against that policy.",
      "Collez la politique IA de votre cours, listez vos usages prévus et classez chacun au regard de cette politique."),
    steps: [
      B('Find the rule: syllabus, assignment brief, or institution charter. The most specific one wins.',
        "Trouvez la règle : plan de cours, consigne du devoir ou charte de l'établissement. La plus précise l'emporte."),
      B('List what you plan to do: explain a concept, quiz you, correct grammar, suggest an outline.',
        "Listez ce que vous comptez faire : expliquer une notion, vous interroger, corriger la grammaire, proposer un plan."),
      B('Ask the AI to sort each use and to quote the sentence of the policy it relies on.',
        "Demandez à l'IA de classer chaque usage en citant la phrase de la politique sur laquelle elle s'appuie."),
      B('For every use marked unclear, write to your teacher before the work, not after.',
        "Pour chaque usage jugé ambigu, écrivez à votre enseignant avant le travail, et non après."),
    ],
    trap: B(
      'Assuming that what a friend was allowed in another course applies to yours. Rules change by course, by teacher and by assignment.',
      "Supposer que ce qu'un camarade a pu faire dans un autre cours vaut pour le vôtre. Les règles changent selon le cours, l'enseignant et le devoir.",
    ),
    quiz: {
      q: B('The syllabus allows AI, but the essay brief forbids it. What applies to the essay?',
        "Le plan de cours autorise l'IA, la consigne de l'essai l'interdit. Que retenez-vous pour l'essai ?"),
      options: [
        B('The syllabus, since it covers the whole course', "Le plan de cours, puisqu'il couvre tout le cours"),
        B('The essay brief, the more specific rule', "La consigne de l'essai, la règle la plus précise"),
        B('Whichever is more permissive, if you declare it', 'La plus permissive des deux, si vous le déclarez'),
      ],
      answer: 1,
      why: B(
        'A rule written for one assignment overrides the general one. If in doubt, ask the teacher in writing before you start: a written answer protects you.',
        "Une règle propre à un devoir prime sur la règle générale. En cas de doute, interrogez l'enseignant par écrit avant de commencer : une réponse écrite vous protège.",
      ),
    },
    badge: B('Checks the rules before using AI', "Vérifie les règles avant d'utiliser l'IA"),
  },
  {
    id: 'st-tutor',
    master: 'support',
    minutes: 7,
    title: B('A tutor that asks before it tells', 'Un tuteur qui questionne avant de répondre'),
    learn: B(
      'You will set up the AI to guide you with questions and hints instead of handing you the answer.',
      "Vous apprendrez à régler l'IA pour qu'elle vous guide par des questions et des indices au lieu de livrer la réponse.",
    ),
    act: B('Write tutor rules for one exercise you are stuck on, then work through it with graded hints.',
      "Rédigez des règles de tuteur pour un exercice qui vous bloque, puis avancez avec des indices gradués."),
    steps: [
      B('Paste the exercise and say where you are stuck, with what you already tried.',
        "Collez l'exercice et indiquez où vous bloquez, avec ce que vous avez déjà tenté."),
      B('Set the rule: one question at a time, hints from vague to precise, never the full solution.',
        "Posez la règle : une question à la fois, des indices du plus vague au plus précis, jamais la solution complète."),
      B('Answer each question yourself before asking for the next hint.',
        "Répondez vous-même à chaque question avant de demander l'indice suivant."),
      B('At the end, redo the exercise alone, with the conversation closed.',
        "À la fin, refaites l'exercice seul, la conversation fermée."),
    ],
    trap: B(
      'Asking "just show me the solution so I understand". Reading a solution feels like understanding, but you cannot yet produce it yourself.',
      "Demander « montre-moi juste la solution pour comprendre ». Lire une solution donne l'impression de comprendre, sans que vous sachiez encore la produire.",
    ),
    quiz: {
      q: B('After three hints you still cannot solve it. What is the best next move?',
        "Après trois indices, vous ne trouvez toujours pas. Quelle est la meilleure suite ?"),
      options: [
        B('Ask for the full solution and copy it into your notes', 'Demander la solution complète et la recopier dans vos notes'),
        B('Give up on this exercise and move on to the next one', 'Abandonner cet exercice et passer au suivant'),
        B('Ask which step of your attempt went wrong', 'Demander quelle étape de votre essai a déraillé'),
      ],
      answer: 2,
      why: B(
        'Locating your own error teaches more than a clean solution: you learn what to watch for next time. If you still need the solution, study it, close it, then redo it alone.',
        "Localiser votre propre erreur apprend davantage qu'une solution propre : vous savez quoi surveiller la prochaine fois. S'il faut la solution, étudiez-la, fermez-la, puis refaites seul.",
      ),
    },
    badge: B('Learns through questions, not answers', 'Apprend par questions, non par réponses'),
  },
  {
    id: 'st-explain',
    master: 'analysis',
    minutes: 6,
    title: B('Explain it back to find your gaps', 'Réexpliquez pour trouver vos lacunes'),
    learn: B(
      'You will explain a concept in your own words and have the AI find what is missing or wrong, based on your notes.',
      "Vous expliquerez une notion avec vos mots, et l'IA repérera ce qui manque ou est faux, à partir de vos notes.",
    ),
    act: B('Write a 150-word explanation of one concept from memory, then have it checked against your lecture notes.',
      "Écrivez de mémoire une explication de 150 mots d'une notion, puis faites-la vérifier au regard de vos notes de cours."),
    steps: [
      B('Write the explanation first, notes closed, as if for a classmate who missed the lecture.',
        "Rédigez l'explication d'abord, notes fermées, comme pour un camarade absent au cours."),
      B('Paste your lecture notes or slides, then your explanation, and label each part clearly.',
        "Collez vos notes ou diapositives de cours, puis votre explication, en étiquetant clairement chaque partie."),
      B('Ask for gaps, errors and vague words, each with the line of your notes that shows it.',
        "Demandez les oublis, les erreurs et les mots flous, chacun avec la ligne de vos notes qui le montre."),
      B('Rewrite the explanation from memory once more, and keep that version.',
        "Réécrivez l'explication de mémoire une seconde fois, et gardez cette version."),
    ],
    trap: B(
      'Asking the AI to explain the concept first. Its version will sound clearer than yours and may use a definition your teacher does not.',
      "Demander d'abord à l'IA d'expliquer la notion. Sa version paraîtra plus claire que la vôtre et peut reprendre une définition que votre enseignant n'emploie pas.",
    ),
    quiz: {
      q: B('Why paste your own lecture notes before asking for a check?',
        "Pourquoi coller vos propres notes de cours avant de demander une vérification ?"),
      options: [
        B('Your course may define the term differently from the AI', "Votre cours peut définir le terme autrement que l'IA"),
        B('The AI cannot understand the concept without your notes', "L'IA ne peut pas comprendre la notion sans vos notes"),
        B('It makes the answer shorter and easier to read quickly', 'Cela rend la réponse plus courte et plus rapide à lire'),
      ],
      answer: 0,
      why: B(
        'Your exam is marked against your course: its definitions, its notation, its examples. Checking against your notes shows the gap between what you wrote and what will be expected.',
        "Votre examen est corrigé au regard de votre cours : ses définitions, ses notations, ses exemples. Vérifier sur vos notes révèle l'écart entre ce que vous avez écrit et ce qui sera attendu.",
      ),
    },
    badge: B('Explains first, checks second', "Explique d'abord, vérifie ensuite"),
  },
]

/* ================================================================== */
/* CITÉ 2 · RÉVISER                                                    */
/* ================================================================== */

const ST_REVISE: Level[] = [
  {
    id: 'st-cards',
    master: 'extraction',
    minutes: 6,
    title: B('Flashcards that make you recall', 'Des fiches qui obligent à se souvenir'),
    learn: B(
      'You will turn your notes into question cards that force active recall, one idea per card.',
      "Vous transformerez vos notes en fiches questions qui obligent au rappel actif, une idée par fiche.",
    ),
    act: B('Give the AI the notes of one lecture and ask for twenty question cards, each linked to its source line.',
      "Donnez à l'IA les notes d'un cours et demandez vingt fiches questions, chacune reliée à sa ligne source."),
    steps: [
      B('Paste one lecture only. A whole semester at once gives shallow, generic cards.',
        "Collez un seul cours. Un semestre entier d'un coup donne des fiches superficielles et génériques."),
      B('Ask for one idea per card, a question that needs recall, and a short answer.',
        "Demandez une idée par fiche, une question qui exige de se souvenir, et une réponse courte."),
      B('Ask for the note line each card comes from, and nothing from outside your notes.',
        "Demandez la ligne de notes d'où vient chaque fiche, et rien qui soit extérieur à vos notes."),
      B('Check every card against your notes before studying it. Delete any you cannot trace.',
        "Vérifiez chaque fiche sur vos notes avant de l'apprendre. Supprimez celles que vous ne retrouvez pas."),
    ],
    trap: B(
      'Rereading the cards, question and answer together. Recognising an answer is easy; producing it with the answer hidden is what the exam asks.',
      "Relire les fiches, question et réponse ensemble. Reconnaître une réponse est facile ; la produire, réponse cachée, est ce que l'examen demande.",
    ),
    quiz: {
      q: B('Which card trains recall best?', 'Quelle fiche entraîne le mieux le rappel ?'),
      options: [
        B('"Photosynthesis: definition, stages, inputs, outputs and role"', '« Photosynthèse : définition, étapes, entrées, sorties et rôle »'),
        B('"True or false: photosynthesis produces oxygen"', "« Vrai ou faux : la photosynthèse produit de l'oxygène »"),
        B('"What are the two products of photosynthesis?"', '« Quels sont les deux produits de la photosynthèse ? »'),
      ],
      answer: 2,
      why: B(
        'A card should hold one idea and make you produce it. A list card lets you half-remember and feel ready; true or false lets you guess with a one-in-two chance.',
        "Une fiche doit porter une idée et vous obliger à la produire. Une fiche liste permet de se souvenir à moitié en se croyant prêt ; le vrai ou faux laisse une chance sur deux.",
      ),
    },
    badge: B('Turns notes into recall cards', 'Fait de ses notes des fiches de rappel'),
  },
  {
    id: 'st-quiz',
    master: 'watch',
    minutes: 7,
    title: B('Get quizzed on your weak points', 'Faites-vous interroger sur vos points faibles'),
    learn: B(
      'You will run a quiz where the AI asks, waits for your answer, and comes back to what you missed.',
      "Vous apprendrez à mener un quiz où l'IA pose une question, attend votre réponse et revient sur vos erreurs.",
    ),
    act: B('Start a quiz on one chapter: one question at a time, answer hidden, and a list of misses at the end.',
      "Lancez un quiz sur un chapitre : une question à la fois, réponse cachée, et la liste de vos erreurs à la fin."),
    steps: [
      B('Give the chapter notes and the exam format: multiple choice, problems, or essay questions.',
        "Donnez les notes du chapitre et le format de l'examen : QCM, exercices ou questions de dissertation."),
      B('Ask for one question at a time, and no answer until you have written yours.',
        "Demandez une question à la fois, et aucune réponse avant que vous ayez écrit la vôtre."),
      B('Ask for questions that apply the idea to a new case, not only definitions.',
        "Demandez des questions qui appliquent la notion à un cas nouveau, pas seulement des définitions."),
      B('At the end, ask for the list of misses, and quiz only those again two days later.',
        "À la fin, demandez la liste des erreurs, et ne reprenez que celles-ci deux jours plus tard."),
    ],
    trap: B(
      'Asking for twenty questions with the answers underneath. You read the answer before trying, and the quiz turns back into rereading.',
      "Demander vingt questions avec les réponses en dessous. Vous lisez la réponse avant d'essayer, et le quiz redevient une relecture.",
    ),
    quiz: {
      q: B('You got 14 out of 20. What do you quiz next time?',
        'Vous obtenez 14 sur 20. Sur quoi vous interrogez-vous la fois suivante ?'),
      options: [
        B('The same twenty questions, to beat your score', 'Les vingt mêmes questions, pour battre votre score'),
        B('The six you missed, reworded as new cases', 'Les six manquées, reformulées en cas nouveaux'),
        B('A new chapter, since this one is mostly known', 'Un nouveau chapitre, puisque celui-ci est presque su'),
      ],
      answer: 1,
      why: B(
        'Your misses show exactly what is not learnt yet. Rewording them as new cases checks that you understood, not that you remember the exact question.',
        "Vos erreurs montrent précisément ce qui n'est pas encore acquis. Les reformuler en cas nouveaux vérifie que vous avez compris, et non que vous vous souvenez de la question.",
      ),
    },
    badge: B('Gets quizzed where it hurts', 'Se fait interroger là où ça coince'),
  },
  {
    id: 'st-spaced',
    master: 'planning',
    minutes: 7,
    title: B('Plan your revision back from the exam', "Planifiez vos révisions depuis l'examen"),
    learn: B(
      'You will build a revision plan that spreads each subject over several sessions with growing gaps.',
      "Vous construirez un plan de révision qui répartit chaque matière sur plusieurs séances, de plus en plus espacées.",
    ),
    act: B('Give your exam dates and free hours, and ask for a spaced plan you can actually keep.',
      "Donnez vos dates d'examen et vos heures libres, puis demandez un plan espacé que vous pourrez vraiment tenir."),
    steps: [
      B('List exams, dates, chapters per subject, and the hours you really have each week.',
        "Listez examens, dates, chapitres par matière, et les heures dont vous disposez vraiment chaque semaine."),
      B('Ask for each chapter to come back at growing gaps: next day, three days, a week, two weeks.',
        "Demandez que chaque chapitre revienne à intervalles croissants : lendemain, trois jours, une semaine, deux."),
      B('Ask to mix subjects within a week rather than one subject per week.',
        "Demandez d'alterner les matières dans la semaine plutôt qu'une matière par semaine."),
      B('Keep a free slot each week for what slipped, and a mock exam before the real one.',
        "Gardez chaque semaine un créneau libre pour les retards, et un examen blanc avant le vrai."),
    ],
    trap: B(
      'Planning ten-hour days in the last week. Cramming can get you through tomorrow, but most of it is gone a few weeks later.',
      "Prévoir des journées de dix heures la dernière semaine. Le bachotage peut suffire pour le lendemain, mais l'essentiel s'efface en quelques semaines.",
    ),
    quiz: {
      q: B('Same total hours: which plan helps you remember a chapter longest?',
        "À nombre d'heures égal, quel plan fait retenir un chapitre le plus longtemps ?"),
      options: [
        B('Four sessions, spaced out over two weeks', 'Quatre séances étalées sur deux semaines'),
        B('One long session, the day before the exam', "Une longue séance, la veille de l'examen"),
        B('Two sessions on two consecutive days', 'Deux séances sur deux jours consécutifs'),
      ],
      answer: 0,
      why: B(
        'Each time you recall something after a gap, memory holds it longer. This spacing effect is one of the best established results in the science of learning.',
        "Chaque fois que vous rappelez une notion après un intervalle, la mémoire la garde plus longtemps. Cet effet d'espacement est l'un des résultats les mieux établis sur l'apprentissage.",
      ),
    },
    badge: B('Spaces revision out', 'Étale ses révisions'),
  },
]

/* ================================================================== */
/* CITÉ 3 · EXAMENS ET TRAVAUX ÉCRITS                                  */
/* ================================================================== */

const ST_EXAMS: Level[] = [
  {
    id: 'st-mock',
    master: 'orchestration',
    minutes: 7,
    title: B('Sit a mock exam, then mark it', 'Passez un examen blanc, puis corrigez-le'),
    learn: B(
      "You will have the AI write a mock paper in your exam's format, sit it alone, and mark it against the grading scheme.",
      "Vous ferez rédiger un sujet blanc au format de votre examen, vous le passerez seul, puis le corrigerez selon le barème.",
    ),
    act: B('Give a past paper and its grading scheme, get a new paper in the same format, and sit it timed.',
      "Donnez une annale et son barème, obtenez un nouveau sujet au même format, et passez-le en temps limité."),
    steps: [
      B('Paste a past paper and its grading scheme, and ask for a new paper of the same shape.',
        "Collez une annale et son barème, puis demandez un nouveau sujet de même forme."),
      B('Sit it with a timer, closed book, away from the conversation.',
        "Composez avec un minuteur, sans documents, loin de la conversation."),
      B('Paste your answers and ask for a mark per question, citing the grading scheme.',
        "Collez vos réponses et demandez une note par question, en citant le barème."),
      B('Check two marks yourself. If the AI was too generous, ask it to mark again, strictly.',
        "Vérifiez vous-même deux notes. Si l'IA s'est montrée trop généreuse, exigez une correction plus stricte."),
    ],
    trap: B(
      "Taking the AI's mark as final. Models tend to be generous and may reward a long answer that misses what the grading scheme requires.",
      "Prendre la note de l'IA pour définitive. Les modèles ont tendance à être généreux et récompensent parfois une réponse longue qui manque ce qu'exige le barème.",
    ),
    quiz: {
      q: B("Your mock is done. What makes the AI's marking trustworthy?",
        "Votre examen blanc est terminé. Qu'est-ce qui rend la correction de l'IA fiable ?"),
      options: [
        B('Asking it to be kind so you stay motivated', 'Lui demander de rester bienveillante pour garder le moral'),
        B('Giving it the real grading scheme to cite', 'Lui donner le vrai barème, à citer'),
        B('Letting it mark without any criteria, to stay neutral', 'La laisser corriger sans critère, pour rester neutre'),
      ],
      answer: 1,
      why: B(
        'Without the grading scheme, the AI marks by its own idea of a good answer. With it, each point must match a criterion you can check yourself.',
        "Sans barème, l'IA note selon sa propre idée d'une bonne réponse. Avec lui, chaque point doit correspondre à un critère que vous pouvez vérifier vous-même.",
      ),
    },
    badge: B('Sits mock exams for real', 'Passe de vrais examens blancs'),
  },
  {
    id: 'st-cite',
    master: 'research',
    minutes: 6,
    title: B('Cite only sources you have checked', 'Ne citez que des sources vérifiées'),
    learn: B(
      "You will find sources with your library's tools and use the AI only to format and check citations.",
      "Vous chercherez vos sources avec les outils de la bibliothèque, et n'utiliserez l'IA que pour mettre en forme.",
    ),
    act: B('Find three sources in your library catalogue, then have the AI format them in your required style.',
      "Trouvez trois sources dans le catalogue de la bibliothèque, puis faites-les mettre en forme dans le style exigé."),
    steps: [
      B('Search the library catalogue or a database your course recommends, not the chat.',
        "Cherchez dans le catalogue de la bibliothèque ou une base conseillée par votre cours, pas dans la conversation."),
      B('Open each source and note author, year, title, and the page you will use.',
        "Ouvrez chaque source et notez l'auteur, l'année, le titre et la page que vous utiliserez."),
      B('Paste those records and ask for citations in your required style: APA, MLA, Chicago.',
        "Collez ces notices et demandez les références dans le style exigé : APA, MLA, Chicago."),
      B('Compare each formatted citation with its record, especially names, years and page numbers.',
        "Comparez chaque référence mise en forme avec sa notice, surtout les noms, les années et les pages."),
    ],
    trap: B(
      'Asking the AI "give me five sources on this topic". It can produce references that look perfect and do not exist, and citing one is a fault.',
      "Demander à l'IA « donne-moi cinq sources sur ce sujet ». Elle peut produire des références parfaites en apparence et inexistantes, et en citer une est une faute.",
    ),
    quiz: {
      q: B('The AI suggests a perfect article for your essay. What do you do?',
        "L'IA vous propose un article parfait pour votre essai. Que faites-vous ?"),
      options: [
        B('Find it in the library catalogue and read it first', "Le retrouver dans le catalogue et le lire d'abord"),
        B('Cite it as is, since authors, year and journal look complete', "Le citer tel quel, puisque auteurs, année et revue semblent complets"),
        B('Cite it, but add "suggested by an AI"', "Le citer en ajoutant « suggéré par une IA »"),
      ],
      answer: 0,
      why: B(
        'A reference is only real once you have found and opened it. If it appears in no catalogue or database, treat it as invented, however convincing it looks.',
        "Une référence n'est réelle qu'une fois retrouvée et ouverte. Si elle n'apparaît ni dans le catalogue ni dans une base, considérez-la comme inventée, aussi convaincante soit-elle.",
      ),
    },
    badge: B('Cites only checked sources', 'Ne cite que du vérifié'),
  },
  {
    id: 'st-draft',
    master: 'writing',
    minutes: 7,
    title: B('Feedback on your draft, not a rewrite', 'Des retours sur votre brouillon, pas une réécriture'),
    learn: B(
      'You will get feedback on your own draft against the marking criteria, without the AI writing it for you.',
      "Vous obtiendrez des retours sur votre brouillon selon les critères de notation, sans que l'IA l'écrive à votre place.",
    ),
    act: B('Paste your draft and the marking criteria, and ask for comments only, never rewritten sentences.',
      "Collez votre brouillon et les critères de notation, et demandez des commentaires seulement, jamais de phrases réécrites."),
    steps: [
      B('Check first that AI feedback is allowed for this assignment, and whether it must be declared.',
        "Vérifiez d'abord que les retours d'une IA sont permis pour ce devoir, et s'ils doivent être déclarés."),
      B('Paste the criteria, then the draft, and forbid any rewriting of your sentences.',
        "Collez les critères, puis le brouillon, et interdisez toute réécriture de vos phrases."),
      B('Ask for the three weakest points, each tied to a criterion and a paragraph number.',
        "Demandez les trois points les plus faibles, chacun lié à un critère et à un numéro de paragraphe."),
      B('Revise yourself, keep each version, and declare the help as the rules require.',
        "Révisez vous-même, gardez chaque version, et déclarez l'aide comme l'exigent les règles."),
    ],
    trap: B(
      'Accepting "improved" paragraphs from the AI. The text stops being yours, your style changes, and you may break your institution\'s rules.',
      "Accepter des paragraphes « améliorés » par l'IA. Le texte cesse d'être le vôtre, votre style change, et vous risquez d'enfreindre les règles de l'établissement.",
    ),
    quiz: {
      q: B('Which request keeps the essay yours?', "Quelle demande laisse l'essai être le vôtre ?"),
      options: [
        B('"Rewrite paragraph 3 so it reads more smoothly and clearly"', "« Réécris le paragraphe 3 pour qu'il soit plus fluide et plus clair »"),
        B('"Which paragraph weakens my argument, and why?"', '« Quel paragraphe affaiblit mon argument, et pourquoi ? »'),
        B('"Write a better conclusion I can adapt"', '« Écris une meilleure conclusion que je pourrai adapter »'),
      ],
      answer: 1,
      why: B(
        'A question about your text sends the work back to you: you decide what to change and how. A rewritten paragraph, even adapted, is still someone else\'s writing.',
        "Une question sur votre texte vous renvoie le travail : vous décidez quoi changer et comment. Un paragraphe réécrit, même adapté, reste l'écriture d'un autre.",
      ),
    },
    badge: B('Takes feedback, keeps the pen', 'Reçoit des retours, garde la plume'),
  },
]

/* ================================================================== */
/* LES CITÉS ET LE MÉTIER                                              */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: 'st-course', track: 'trade', glyph: 'centre', tint: TINT, at: [1, 26], levels: ST_COURSE,
    title: B('Understand the course, honestly', 'Comprendre le cours, honnêtement'),
    blurb: B('Know what your course allows, make the AI a tutor, and explain the lesson back to find your gaps.',
      "Sachez ce que votre cours autorise, faites de l'IA un tuteur, et réexpliquez la leçon pour trouver vos lacunes."),
  },
  {
    id: 'st-revise', track: 'trade', glyph: 'layers', tint: TINT, at: [3, 26], levels: ST_REVISE,
    title: B('Revision that sticks', 'Des révisions qui tiennent'),
    blurb: B('Cards that make you recall, quizzes that follow your mistakes, and reviews spread out until the exam.',
      "Des fiches qui font rappeler, des quiz qui suivent vos erreurs, et des révisions étalées jusqu'à l'examen."),
  },
  {
    id: 'st-exams', track: 'trade', glyph: 'check', tint: TINT, at: [5, 26], levels: ST_EXAMS,
    title: B('Exams and written work', 'Examens et travaux écrits'),
    blurb: B('A mock exam in real conditions, sources you have actually found, and feedback on a draft that stays yours.',
      "Un examen blanc en conditions réelles, des sources réellement trouvées, et des retours sur un brouillon qui reste le vôtre."),
  },
]

/* ================================================================== */
/* L'APPROFONDISSEMENT · data/enrich                                   */
/* ================================================================== */

const ENRICH: Record<string, Enrichment> = {
  /* ---------------------------------------------------------------- */
  /* CITÉ 1 · COMPRENDRE LE COURS                                      */
  /* ---------------------------------------------------------------- */

  'st-course/st-rules': {
    why: [
      B("Most institutions no longer have a single rule on AI. The charter sets a frame, the syllabus adapts it, and each assignment brief can tighten or loosen it. A take-home essay may forbid AI while the weekly problem sets allow it. The rule that applies is the one written closest to the work you hand in.",
        "La plupart des établissements n'ont plus une règle unique sur l'IA. La charte pose un cadre, le plan de cours l'adapte, et chaque consigne de devoir peut le resserrer ou l'assouplir. Un essai à la maison peut interdire l'IA quand les exercices hebdomadaires l'autorisent. La règle qui s'applique est celle écrite au plus près du travail rendu."),
      B("Policies rarely list uses one by one. They say things like \"AI may support learning but not produce assessed work\". Sorting your concrete uses against that sentence is the real work: asking for an explanation falls on one side, asking for a paragraph on the other, and correcting grammar often sits in between.",
        "Les politiques énumèrent rarement les usages un à un. Elles disent par exemple « l'IA peut soutenir l'apprentissage mais pas produire un travail évalué ». Le vrai travail consiste à confronter vos usages concrets à cette phrase : demander une explication tombe d'un côté, demander un paragraphe de l'autre, et corriger la grammaire se situe souvent entre les deux."),
      B("Asking the AI to quote the sentence it relies on keeps it honest: a classification without a quote is only an opinion. And the AI does not decide. For every grey case, a two-line email to the teacher gives you a written answer you can show later if anyone asks.",
        "Exiger que l'IA cite la phrase sur laquelle elle s'appuie la garde honnête : un classement sans citation n'est qu'un avis. Et l'IA ne tranche pas. Pour chaque cas gris, un courriel de deux lignes à l'enseignant vous donne une réponse écrite, à montrer si quelqu'un pose la question plus tard."),
    ],
    example: {
      context: B("Léa, a second-year economics student, has a take-home essay on inflation and a weekly problem set. She wants to use AI for both.",
        "Léa, étudiante en deuxième année d'économie, doit rendre un essai sur l'inflation et une feuille d'exercices hebdomadaire. Elle veut utiliser l'IA pour les deux."),
      before: B("Am I allowed to use AI for my university assignments?",
        "Est-ce que j'ai le droit d'utiliser l'IA pour mes devoirs à la fac ?"),
      after: B("Here are two texts from my course.\nTEXT A, the syllabus AI policy: [pasted]\nTEXT B, the essay brief: [pasted]\nThe uses I am considering:\n1. Explain the quantity theory of money in simpler words.\n2. Quiz me on the problem set chapter.\n3. Correct the grammar of my essay.\n4. Suggest an outline for the essay.\n5. Check the format of my citations.\nFor each use, separately for the essay and for the problem set, classify it: ALLOWED, ALLOWED IF DECLARED, FORBIDDEN or UNCLEAR. Quote the exact sentence of text A or B that supports each classification. If no sentence covers a use, write UNCLEAR: do not guess.\nThen write the two-line question I should send my teacher about the unclear cases.",
        "Voici deux textes de mon cours.\nTEXTE A, la politique IA du plan de cours : [collé]\nTEXTE B, la consigne de l'essai : [collée]\nLes usages que j'envisage :\n1. Expliquer plus simplement la théorie quantitative de la monnaie.\n2. M'interroger sur le chapitre de la feuille d'exercices.\n3. Corriger la grammaire de mon essai.\n4. Proposer un plan pour l'essai.\n5. Vérifier le format de mes citations.\nPour chaque usage, séparément pour l'essai et pour les exercices, classe-le : AUTORISÉ, AUTORISÉ SI DÉCLARÉ, INTERDIT ou AMBIGU. Cite la phrase exacte du texte A ou B qui justifie chaque classement. Si aucune phrase ne couvre un usage, écris AMBIGU : ne devine pas.\nRédige ensuite la question de deux lignes que je devrais envoyer à mon enseignant sur les cas ambigus."),
      takeaway: B("The first prompt asks the AI for a general opinion it cannot have. The second makes it read Léa's own rules, quote them, and stop at UNCLEAR instead of guessing.",
        "Le premier prompt demande à l'IA un avis général qu'elle ne peut pas avoir. Le second lui fait lire les règles de Léa, les citer, et s'arrêter à AMBIGU au lieu de deviner."),
    },
    exercise: {
      goal: B("A table of your planned AI uses for one course, each classified with the sentence of the policy that justifies it, and a question ready for your teacher.",
        "Un tableau de vos usages prévus de l'IA pour un cours, chacun classé avec la phrase de la politique qui le justifie, et une question prête pour votre enseignant."),
      prompt: B("Here is the AI policy of my course: [PASTE THE SYLLABUS OR CHARTER TEXT].\nHere is the brief of the assignment I am working on: [PASTE THE BRIEF, OR WRITE NONE].\nThe uses I am considering: [4 TO 6 CONCRETE USES].\nFor each use, one line: use | ALLOWED, ALLOWED IF DECLARED, FORBIDDEN or UNCLEAR | exact quote that supports it.\nRules: the assignment brief overrides the general policy. Never infer a permission that no sentence gives. If nothing covers a use, answer UNCLEAR.\nEnd with a short, polite email to [TEACHER'S NAME] asking about the unclear uses only.",
        "Voici la politique IA de mon cours : [COLLE LE PLAN DE COURS OU LA CHARTE].\nVoici la consigne du devoir sur lequel je travaille : [COLLE LA CONSIGNE, OU ÉCRIS AUCUNE].\nLes usages que j'envisage : [4 À 6 USAGES CONCRETS].\nPour chaque usage, une ligne : usage | AUTORISÉ, AUTORISÉ SI DÉCLARÉ, INTERDIT ou AMBIGU | citation exacte qui le justifie.\nRègles : la consigne du devoir prime sur la politique générale. N'en déduis jamais une permission qu'aucune phrase ne donne. Si rien ne couvre un usage, réponds AMBIGU.\nTermine par un courriel court et poli à [NOM DE L'ENSEIGNANT] qui porte uniquement sur les usages ambigus."),
      check: [
        B("Every classification comes with a quote you can find in your documents", "Chaque classement est accompagné d'une citation que vous retrouvez dans vos documents"),
        B("The brief's rule was applied before the general policy", "La règle de la consigne a été appliquée avant la politique générale"),
        B("No use is marked allowed without a sentence that says so", "Aucun usage n'est marqué autorisé sans une phrase qui le dise"),
        B("The email asks only about the unclear cases, in two or three lines", "Le courriel ne porte que sur les cas ambigus, en deux ou trois lignes"),
      ],
      bonus: B("Keep the table and the teacher's answer in the folder of the course. If your use of AI is ever questioned, you can show that you asked, and that you followed the answer.",
        "Rangez le tableau et la réponse de l'enseignant dans le dossier du cours. Si votre usage de l'IA est un jour mis en question, vous pourrez montrer que vous avez demandé, et suivi la réponse."),
    },
    more: [
      { q: B("The policy says: \"AI may support learning but must not produce assessed work.\" Which use is clearly forbidden?",
          "La politique dit : « l'IA peut soutenir l'apprentissage mais ne doit pas produire de travail évalué. » Quel usage est clairement interdit ?"),
        options: [
          B("Asking it to explain a concept from last week's lecture again", "Lui demander de réexpliquer une notion du cours de la semaine dernière"),
          B("Asking it to quiz you before the exam", "Lui demander de vous interroger avant l'examen"),
          B("Asking it for the introduction of your graded essay", "Lui demander l'introduction de votre essai noté"),
          B("Asking it how to use the library database", "Lui demander comment utiliser la base de la bibliothèque"),
        ],
        answer: 2,
        why: B("The introduction is part of the work that is marked, so the AI would be producing assessed work. Explaining, quizzing and finding your way in the library all support learning.",
          "L'introduction fait partie du travail noté : l'IA produirait donc un travail évalué. Expliquer, interroger et aider à s'orienter dans la bibliothèque relèvent du soutien à l'apprentissage.") },
      { q: B("A friend in another course was allowed to have AI suggest outlines. Your brief says nothing. What do you do?",
          "Un ami, dans un autre cours, pouvait faire proposer un plan par l'IA. Votre consigne n'en dit rien. Que faites-vous ?"),
        options: [
          B("Ask your teacher in writing before using it", "Vous interrogez votre enseignant par écrit avant de l'utiliser"),
          B("Use it, since a brief that says nothing allows everything", "Vous l'utilisez, puisqu'une consigne muette autorise tout"),
          B("Use it and mention it only if someone asks", "Vous l'utilisez et ne le mentionnez que si l'on vous le demande"),
        ],
        answer: 0,
        why: B("Rules vary by course, and silence is not permission. A written answer from your teacher settles the question and protects you if your work is ever checked.",
          "Les règles varient d'un cours à l'autre, et le silence ne vaut pas permission. Une réponse écrite de l'enseignant règle la question et vous protège si votre travail est un jour contrôlé.") },
    ],
  },

  'st-course/st-tutor': {
    why: [
      B("A model is built to be helpful, and for most users helpful means a complete answer. Ask \"how do I solve this?\" and it solves it. You read a correct solution, nod along, and feel you understood. That feeling misleads: recognising each step is far easier than finding the first one yourself, which is what the exam asks.",
        "Un modèle est conçu pour aider, et pour la plupart des utilisateurs, aider signifie donner une réponse complète. Demandez « comment résoudre ceci ? » et il le résout. Vous lisez une solution juste, vous approuvez, et vous croyez avoir compris. Ce sentiment trompe : reconnaître chaque étape est bien plus facile que trouver soi-même la première, ce que l'examen exige."),
      B("Tutor rules change that default. One question at a time forces you to think before the next step. Graded hints, from a nudge to a near answer, let you take just the help you need. Forbidding the full solution keeps the last step for you, and that step is what makes the knowledge yours.",
        "Les règles de tuteur changent ce comportement par défaut. Une question à la fois vous oblige à réfléchir avant l'étape suivante. Des indices gradués, du simple coup de pouce à la quasi-réponse, vous laissent prendre juste l'aide nécessaire. Interdire la solution complète vous réserve la dernière étape, celle qui rend le savoir vôtre."),
      B("Saying where you are stuck and what you tried matters: the tutor can aim its first question at your real block, not at the start of the exercise. Redoing the exercise alone at the end is the only proof that the help turned into skill.",
        "Dire où vous bloquez et ce que vous avez tenté compte : le tuteur peut viser votre vrai blocage, et non le début de l'exercice. Refaire l'exercice seul à la fin reste la seule preuve que l'aide s'est changée en compétence."),
    ],
    example: {
      context: B("Hugo, a first-year engineering student, is stuck on a statics exercise: find the tension in two cables holding a 50 kg sign.",
        "Hugo, en première année d'école d'ingénieurs, bloque sur un exercice de statique : trouver la tension de deux câbles qui retiennent une enseigne de 50 kg."),
      before: B("Solve this exercise: [exercise text]",
        "Résous cet exercice : [énoncé]"),
      after: B("Act as my physics tutor. Here is the exercise: [exercise text].\nWhere I am stuck: I drew the two cables and the weight, but I do not know how to write the equations.\nWhat I tried: I added the two tensions and set them equal to the weight, and the result is wrong.\nRules:\n1. Ask me one question at a time, then wait for my answer.\n2. If I am wrong, do not correct me: give a hint, from the vaguest to the most precise, three levels at most.\n3. Never give the full solution or the final values.\n4. When I get there, ask me to explain in one sentence why my first attempt was wrong.",
        "Joue le rôle de mon tuteur de physique. Voici l'exercice : [énoncé].\nOù je bloque : j'ai dessiné les deux câbles et le poids, mais je ne sais pas écrire les équations.\nCe que j'ai tenté : j'ai additionné les deux tensions et je les ai égalées au poids, et le résultat est faux.\nRègles :\n1. Pose-moi une question à la fois, puis attends ma réponse.\n2. Si je me trompe, ne me corrige pas : donne un indice, du plus vague au plus précis, trois niveaux au maximum.\n3. Ne donne jamais la solution complète ni les valeurs finales.\n4. Quand j'y arrive, demande-moi d'expliquer en une phrase pourquoi ma première tentative était fausse."),
      takeaway: B("Hugo's attempt reveals his real error: adding the tensions without splitting them into components. The tutor's first question can go straight there, and the last one makes him name the mistake.",
        "La tentative d'Hugo révèle sa vraie erreur : additionner les tensions sans les décomposer. La première question du tuteur peut aller droit au but, et la dernière l'oblige à nommer son erreur."),
    },
    exercise: {
      goal: B("One exercise solved by you, with the AI asking questions and giving graded hints, then redone alone without the conversation.",
        "Un exercice résolu par vous, l'IA posant des questions et donnant des indices gradués, puis refait seul sans la conversation."),
      prompt: B("Act as my tutor in [SUBJECT]. Here is the exercise: [THE EXERCISE].\nWhere I am stuck: [THE EXACT POINT WHERE I AM STUCK].\nWhat I already tried: [MY ATTEMPT, EVEN IF WRONG].\nRules:\n1. One question at a time. Wait for my answer before continuing.\n2. If my answer is wrong, give a hint instead of the correction: level 1 a direction, level 2 the relevant idea from the course, level 3 the first line of the method. Never beyond.\n3. Never write the full solution or the final result, even if I ask. Remind me of this rule instead.\n4. At the end, ask me to state in my own words the idea I was missing.",
        "Joue le rôle de mon tuteur en [MATIÈRE]. Voici l'exercice : [L'EXERCICE].\nOù je bloque : [LE POINT PRÉCIS OÙ JE BLOQUE].\nCe que j'ai déjà tenté : [MA TENTATIVE, MÊME FAUSSE].\nRègles :\n1. Une question à la fois. Attends ma réponse avant de continuer.\n2. Si ma réponse est fausse, donne un indice au lieu de la correction : niveau 1 une direction, niveau 2 la notion du cours concernée, niveau 3 la première ligne de la méthode. Jamais au-delà.\n3. N'écris jamais la solution complète ni le résultat final, même si je le demande. Rappelle-moi plutôt cette règle.\n4. À la fin, demande-moi d'énoncer avec mes mots l'idée qui me manquait."),
      check: [
        B("You wrote your own attempt in the prompt, even a wrong one", "Vous avez écrit votre propre tentative dans le prompt, même fausse"),
        B("The AI asked questions and never gave the final result", "L'IA a posé des questions et n'a jamais donné le résultat final"),
        B("You answered each question before asking for the next hint", "Vous avez répondu à chaque question avant de demander l'indice suivant"),
        B("You redid the exercise alone, conversation closed, and got it right", "Vous avez refait l'exercice seul, conversation fermée, et vous l'avez réussi"),
      ],
      bonus: B("Save the tutor rules in a reusable note, or as the instructions of a project dedicated to this course, so that every study session starts in tutor mode.",
        "Enregistrez les règles de tuteur dans une note réutilisable, ou comme instructions d'un projet dédié à ce cours, pour que chaque séance de travail démarre en mode tuteur."),
    },
    more: [
      { q: B("Mid-exercise, you type \"just give me the answer, I'm tired\". The tutor refuses and gives a hint. Was it right?",
          "En plein exercice, vous tapez « donne-moi la réponse, je suis fatigué ». Le tuteur refuse et donne un indice. A-t-il eu raison ?"),
        options: [
          B("No, a good tutor should adapt when the student is tired or stressed", "Non, un bon tuteur doit s'adapter quand l'étudiant est fatigué ou stressé"),
          B("Yes, that is the rule you set, and it protects your learning", "Oui, c'est la règle posée, et elle protège votre apprentissage"),
          B("No, refusing just wastes the little time you have left tonight", "Non, refuser gaspille le peu de temps qui vous reste ce soir"),
        ],
        answer: 1,
        why: B("The rule exists for exactly this moment. If you are too tired, stop and come back later: a solution read while exhausted gives the feeling of progress without the skill.",
          "La règle existe précisément pour ce moment. Si vous êtes trop fatigué, arrêtez et revenez plus tard : une solution lue dans l'épuisement donne l'impression d'avancer sans la compétence.") },
      { q: B("Why say what you already tried before the first hint?",
          "Pourquoi indiquer ce que vous avez déjà tenté avant le premier indice ?"),
        options: [
          B("It proves to the AI that you really worked, so it agrees to help more", "Cela prouve à l'IA que vous avez vraiment travaillé, pour qu'elle aide davantage"),
          B("It lets the tutor aim at your real error, not the start", "Cela permet au tuteur de viser votre vraie erreur, pas le début"),
          B("It is required for the AI to understand the exercise", "C'est nécessaire pour que l'IA comprenne l'exercice"),
          B("It makes the hints shorter", "Cela raccourcit les indices"),
        ],
        answer: 1,
        why: B("Your attempt shows where your reasoning breaks. The tutor can start from that point instead of re-explaining what you already know.",
          "Votre tentative montre où votre raisonnement se rompt. Le tuteur peut partir de ce point au lieu de réexpliquer ce que vous savez déjà.") },
    ],
  },

  'st-course/st-explain': {
    why: [
      B("Explaining a concept in your own words is one of the most reliable tests of understanding. Gaps that stay hidden when you reread your notes appear as soon as you must write the link between two ideas: the word does not come, or the sentence sounds right and says nothing.",
        "Expliquer une notion avec vos propres mots est l'un des tests de compréhension les plus fiables. Les lacunes invisibles à la relecture apparaissent dès qu'il faut écrire le lien entre deux idées : le mot ne vient pas, ou la phrase sonne juste sans rien dire."),
      B("The AI reads such an explanation well, on one condition: it must compare it with your course, not with its general knowledge. Disciplines use the same word differently, and each teacher chooses a notation. With your notes in front of it, the model can point to the line you contradicted or skipped.",
        "L'IA lit bien ce genre d'explication, à une condition : la comparer à votre cours, et non à ses connaissances générales. Les disciplines emploient un même mot différemment, et chaque enseignant choisit ses notations. Avec vos notes sous les yeux, le modèle peut désigner la ligne que vous avez contredite ou oubliée."),
      B("Write first, check second: that order is what works. If you read the AI's explanation first, you will reproduce its wording and believe you understood. The second rewrite from memory, after the feedback, is what fixes the corrected version in your head.",
        "Écrire d'abord, vérifier ensuite : c'est l'ordre qui fonctionne. Si vous lisez d'abord l'explication de l'IA, vous reprendrez sa formulation en croyant avoir compris. La seconde réécriture de mémoire, après les retours, est ce qui ancre la version corrigée."),
    ],
    example: {
      context: B("Inès, a psychology student, must master classical conditioning for a midterm. Her lecture slides use the teacher's own terms.",
        "Inès, étudiante en psychologie, doit maîtriser le conditionnement classique pour un partiel. Les diapositives de son cours emploient les termes propres à l'enseignante."),
      before: B("Explain classical conditioning to me simply.",
        "Explique-moi simplement le conditionnement classique."),
      after: B("Below are two texts.\nNOTES: my lecture slides on classical conditioning [pasted].\nMY EXPLANATION: [my 150 words, written from memory].\nCompare MY EXPLANATION with NOTES only, not with your general knowledge.\nList:\n1. What NOTES say that I left out.\n2. What I wrote that contradicts NOTES.\n3. Words I used vaguely (\"it\", \"the reaction\") where NOTES use a precise term.\nFor each point, quote the line of NOTES concerned. Do not rewrite my explanation.",
        "Voici deux textes.\nNOTES : mes diapositives de cours sur le conditionnement classique [collées].\nMON EXPLICATION : [mes 150 mots, écrits de mémoire].\nCompare MON EXPLICATION avec NOTES seulement, pas avec tes connaissances générales.\nListe :\n1. Ce que disent NOTES et que j'ai omis.\n2. Ce que j'ai écrit et qui contredit NOTES.\n3. Les mots flous que j'emploie (« ça », « la réaction ») là où NOTES emploient un terme précis.\nPour chaque point, cite la ligne de NOTES concernée. Ne réécris pas mon explication."),
      takeaway: B("The first prompt gives Inès a smooth explanation she can only reread. The second finds that she confused the conditioned and unconditioned stimulus, and shows her the slide that says so.",
        "Le premier prompt donne à Inès une explication lisse qu'elle ne peut que relire. Le second découvre qu'elle confond stimulus conditionnel et stimulus inconditionnel, et lui montre la diapositive qui le dit."),
    },
    exercise: {
      goal: B("An explanation written from memory, the list of its gaps and errors checked against your notes, and a second version rewritten without help.",
        "Une explication écrite de mémoire, la liste de ses oublis et erreurs vérifiés sur vos notes, et une seconde version réécrite sans aide."),
      prompt: B("Below are two texts.\nNOTES: [YOUR LECTURE NOTES OR SLIDES ON THE CONCEPT]\nMY EXPLANATION: [YOUR 150 WORDS, WRITTEN FROM MEMORY, NOTES CLOSED]\nCompare MY EXPLANATION with NOTES only. Use no outside knowledge.\n1. Gaps: what NOTES contain that I left out and that an exam could ask.\n2. Errors: what I wrote that contradicts NOTES.\n3. Vague words: where I used an everyday word instead of the course's term.\nQuote the line of NOTES for each point. Do not rewrite my explanation and do not give me a model answer.\nEnd with one question I should be able to answer if I have understood.",
        "Voici deux textes.\nNOTES : [MES NOTES OU DIAPOSITIVES DE COURS SUR LA NOTION]\nMON EXPLICATION : [MES 150 MOTS, ÉCRITS DE MÉMOIRE, NOTES FERMÉES]\nCompare MON EXPLICATION avec NOTES seulement. N'utilise aucune connaissance extérieure.\n1. Oublis : ce que contiennent NOTES, que j'ai omis et qu'un examen pourrait demander.\n2. Erreurs : ce que j'ai écrit et qui contredit NOTES.\n3. Mots flous : là où j'emploie un mot courant au lieu du terme du cours.\nCite la ligne de NOTES pour chaque point. Ne réécris pas mon explication et ne me donne pas de réponse modèle.\nTermine par une question à laquelle je devrais savoir répondre si j'ai compris."),
      check: [
        B("You wrote your explanation before opening the conversation", "Vous avez écrit votre explication avant d'ouvrir la conversation"),
        B("Each point of the feedback quotes a line from your notes", "Chaque point des retours cite une ligne de vos notes"),
        B("The AI did not hand you a model explanation", "L'IA ne vous a pas remis d'explication modèle"),
        B("Your second version, from memory, fixes the errors listed", "Votre seconde version, de mémoire, corrige les erreurs relevées"),
      ],
      bonus: B("Three days later, write the explanation again without looking at either version. Whatever you lost in between is what belongs on a flashcard.",
        "Trois jours plus tard, réécrivez l'explication sans regarder aucune des deux versions. Ce que vous avez perdu entre-temps mérite une fiche."),
    },
    more: [
      { q: B("The AI calls your explanation \"excellent\" but quotes no line from your notes. What do you do?",
          "L'IA juge votre explication « excellente » mais ne cite aucune ligne de vos notes. Que faites-vous ?"),
        options: [
          B("Accept it and move on to the next concept", "Vous l'acceptez et passez à la notion suivante"),
          B("Ask for each point to be justified by a quote from your notes", "Vous exigez que chaque point soit justifié par une citation de vos notes"),
          B("Ask it for its own ideal version so you can compare the two side by side", "Vous lui demandez sa version idéale pour comparer les deux côte à côte"),
        ],
        answer: 1,
        why: B("Praise without a quote may just be the model being agreeable. Requiring a quote forces a real comparison with your course, and the weak points appear.",
          "Un éloge sans citation peut n'être que de la complaisance du modèle. Exiger une citation force une vraie comparaison avec votre cours, et les points faibles apparaissent.") },
      { q: B("Your teacher defines \"elasticity\" differently from the AI's usual definition. What counts for the exam?",
          "Votre enseignant définit l'élasticité autrement que la définition habituelle de l'IA. Qu'est-ce qui compte pour l'examen ?"),
        options: [
          B("The AI's definition, since it is more general and more widely used", "La définition de l'IA, plus générale et plus répandue"),
          B("Either one, as long as it is correct", "L'une ou l'autre, pourvu qu'elle soit juste"),
          B("Your teacher's definition, as written in the notes", "Celle de votre enseignant, telle que notée dans le cours"),
          B("A mix of both, to show breadth", "Un mélange des deux, pour montrer votre culture"),
        ],
        answer: 2,
        why: B("You are marked against the course. Using your teacher's definition and notation shows you followed it; another definition, even a correct one, can cost points.",
          "Vous êtes noté au regard du cours. Employer la définition et les notations de l'enseignant montre que vous l'avez suivi ; une autre définition, même juste, peut coûter des points.") },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* CITÉ 2 · RÉVISER                                                  */
  /* ---------------------------------------------------------------- */

  'st-revise/st-cards': {
    why: [
      B("Active recall means pulling an answer out of memory rather than reading it. Each retrieval strengthens the memory more than a reread does, which is why testing yourself beats highlighting. A flashcard is simply a tool that forces retrieval: a question on one side, the answer hidden on the other.",
        "Le rappel actif consiste à extraire une réponse de sa mémoire plutôt qu'à la relire. Chaque récupération renforce le souvenir davantage qu'une relecture ; c'est pourquoi s'interroger bat le surlignage. Une fiche n'est qu'un outil pour forcer ce rappel : une question d'un côté, la réponse cachée de l'autre."),
      B("AI turns notes into cards quickly, but its defaults are poor: cards that list five facts, definitions copied word for word, or details added from its own knowledge that your course never covered. One idea per card, a question that needs thinking, and a source line for each card fix all three.",
        "L'IA transforme vite des notes en fiches, mais ses réglages par défaut sont médiocres : des fiches qui énumèrent cinq faits, des définitions recopiées mot pour mot, ou des détails tirés de ses connaissances que votre cours n'a jamais abordés. Une idée par fiche, une question qui fait réfléchir et une ligne source par fiche corrigent ces trois défauts."),
      B("The source line is also your check. A card you cannot trace to your notes is either invented or off the syllabus; either way it should not take your revision time. Checking twenty cards takes ten minutes and keeps you from learning something false.",
        "La ligne source sert aussi de contrôle. Une fiche introuvable dans vos notes est soit inventée, soit hors programme ; dans les deux cas, elle ne mérite pas votre temps de révision. Vérifier vingt fiches prend dix minutes et vous évite d'apprendre une erreur."),
    ],
    example: {
      context: B("Samir, a first-year law student, has twelve pages of notes on the formation of contracts and an exam in three weeks.",
        "Samir, étudiant en première année de droit, a douze pages de notes sur la formation du contrat et un examen dans trois semaines."),
      before: B("Make flashcards from my notes. [12 pages of notes]",
        "Fais-moi des fiches à partir de mes notes. [12 pages de notes]"),
      after: B("Here are my notes from ONE lecture, the formation of contracts, lines numbered: [pasted].\nMake 20 flashcards.\nRules:\n1. One idea per card.\n2. The question must make me produce the answer: no true or false, no \"list everything about\".\n3. At least 6 cards apply a rule to a short case (\"A makes an offer, B replies with a change: is there a contract?\").\n4. Answers of 25 words max.\n5. After each card, the line number of my notes it comes from.\n6. Nothing that is not in my notes. If something seems missing, list it separately as a question for me, not as a card.\nFormat: Q | A | line.",
        "Voici mes notes d'UN cours, la formation du contrat, lignes numérotées : [collées].\nFais 20 fiches.\nRègles :\n1. Une idée par fiche.\n2. La question doit m'obliger à produire la réponse : pas de vrai ou faux, pas de « dites tout sur ».\n3. Au moins 6 fiches appliquent une règle à un court cas (« A fait une offre, B répond en la modifiant : y a-t-il contrat ? »).\n4. Réponses de 25 mots au maximum.\n5. Après chaque fiche, le numéro de la ligne de mes notes dont elle vient.\n6. Rien qui ne soit dans mes notes. Si quelque chose semble manquer, liste-le à part comme une question pour moi, pas comme une fiche.\nFormat : Q | R | ligne."),
      takeaway: B("The first request produces cards on everything, some drawn from general knowledge. The second gives Samir 20 traceable cards, including cases like those of his exam, and flags what his notes lack.",
        "La première demande produit des fiches sur tout, certaines tirées de connaissances générales. La seconde donne à Samir 20 fiches traçables, dont des cas semblables à ceux de son examen, et signale ce qui manque à ses notes."),
    },
    exercise: {
      goal: B("Twenty question cards from one lecture, each traceable to a line of your notes, ready to import into your flashcard app or to print.",
        "Vingt fiches questions tirées d'un cours, chacune reliée à une ligne de vos notes, prêtes à importer dans votre application de fiches ou à imprimer."),
      prompt: B("Here are my notes from ONE lecture of [COURSE], lines numbered: [MY NOTES].\nMy exam format: [MULTIPLE CHOICE / PROBLEMS / ESSAY / ORAL].\nMake [NUMBER, E.G. 20] flashcards.\nRules:\n1. One idea per card.\n2. The question must make me produce the answer. No true or false, no \"list everything about\".\n3. At least a third of the cards apply an idea to a short new case, in the style of my exam.\n4. Answers of 25 words max.\n5. The line number of my notes for each card.\n6. Nothing from outside my notes. List anything that seems missing separately, as a question for me.\nFormat: Q | A | line, one card per line, so I can import it.",
        "Voici mes notes d'UN cours de [MATIÈRE], lignes numérotées : [MES NOTES].\nFormat de mon examen : [QCM / EXERCICES / DISSERTATION / ORAL].\nFais [NOMBRE, PAR EXEMPLE 20] fiches.\nRègles :\n1. Une idée par fiche.\n2. La question doit m'obliger à produire la réponse. Pas de vrai ou faux, pas de « dites tout sur ».\n3. Au moins un tiers des fiches appliquent une notion à un court cas nouveau, dans le style de mon examen.\n4. Réponses de 25 mots au maximum.\n5. Le numéro de ligne de mes notes pour chaque fiche.\n6. Rien d'extérieur à mes notes. Liste à part ce qui semble manquer, comme une question pour moi.\nFormat : Q | R | ligne, une fiche par ligne, pour que je puisse l'importer."),
      check: [
        B("Each card holds one idea only", "Chaque fiche ne porte qu'une seule idée"),
        B("You found the source line of every card in your notes", "Vous avez retrouvé dans vos notes la ligne source de chaque fiche"),
        B("At least a third of the cards are small cases, not definitions", "Au moins un tiers des fiches sont de petits cas, pas des définitions"),
        B("You deleted or corrected every card you could not trace", "Vous avez supprimé ou corrigé toute fiche introuvable dans vos notes"),
      ],
      bonus: B("Study the cards with the answer hidden, saying the answer out loud before turning. Sort them into three piles: known, hesitant, missed. Only the last two come back tomorrow.",
        "Travaillez les fiches réponse cachée, en disant la réponse à voix haute avant de retourner. Répartissez-les en trois piles : su, hésitant, raté. Seules les deux dernières reviennent demain."),
    },
    more: [
      { q: B("A card reads: \"Name three causes of the French Revolution, their dates and their effects.\" What is wrong?",
          "Une fiche demande : « Citez trois causes de la Révolution française, leurs dates et leurs effets. » Quel est le problème ?"),
        options: [
          B("Nothing, it covers the whole topic well in one go", "Aucun, elle couvre bien tout le sujet d'un coup"),
          B("It is too hard for a flashcard", "Elle est trop difficile pour une fiche"),
          B("It should be a true or false question", "Elle devrait être en vrai ou faux"),
          B("It packs nine facts into one card", "Elle entasse neuf faits sur une seule fiche"),
        ],
        answer: 3,
        why: B("With nine facts, you will remember some, feel close enough, and mark the card as known. Split it into one card per cause: each miss then shows exactly what to review.",
          "Avec neuf faits, vous en retiendrez quelques-uns, vous vous sentirez assez proche, et marquerez la fiche comme sue. Faites une fiche par cause : chaque erreur montrera alors précisément quoi revoir.") },
      { q: B("The AI adds a card on a court ruling that is not in your notes. What do you do?",
          "L'IA ajoute une fiche sur un arrêt qui ne figure pas dans vos notes. Que faites-vous ?"),
        options: [
          B("Delete it, or check it in your course before keeping it", "Vous la supprimez, ou la vérifiez dans le cours avant de la garder"),
          B("Keep it, since extra knowledge on the topic can only ever help", "Vous la gardez, car un savoir en plus sur le sujet ne peut qu'aider"),
          B("Keep it and quote it in the exam to stand out", "Vous la gardez et la citez à l'examen pour vous démarquer"),
        ],
        answer: 0,
        why: B("A detail outside your notes may be invented, outdated or off the syllabus. Citing a ruling that does not exist in an exam is worse than citing none. Check it first.",
          "Un détail extérieur à vos notes peut être inventé, périmé ou hors programme. Citer à l'examen un arrêt qui n'existe pas est pire que n'en citer aucun. Vérifiez d'abord.") },
    ],
  },

  'st-revise/st-quiz': {
    why: [
      B("A quiz only trains memory if you answer before seeing the answer. When question and answer arrive together, your eye goes to the answer and the effort of recall never happens. Asking for one question at a time, and nothing until you reply, is the whole trick.",
        "Un quiz n'entraîne la mémoire que si vous répondez avant de voir la réponse. Quand question et réponse arrivent ensemble, l'œil va à la réponse et l'effort de rappel n'a jamais lieu. Demander une question à la fois, et rien avant votre réponse, en est tout le secret."),
      B("Exams rarely ask for a definition alone. They give a case and expect you to recognise which idea applies. Questions that transfer an idea to a new situation are harder, and they are the ones that show whether you understood or only memorised the wording of your notes.",
        "Les examens demandent rarement une définition seule. Ils proposent un cas et attendent que vous reconnaissiez la notion qui s'applique. Les questions qui transposent une notion à une situation nouvelle sont plus difficiles, et ce sont elles qui montrent si vous avez compris ou seulement mémorisé vos notes."),
      B("The list of misses is the most valuable output of the session: it tells you where to spend the next hour. Coming back to it two days later, with reworded questions, combines recall and spacing, the two most effective study techniques known.",
        "La liste des erreurs est le produit le plus précieux de la séance : elle vous dit où passer l'heure suivante. Y revenir deux jours plus tard, avec des questions reformulées, combine le rappel et l'espacement, les deux techniques d'étude les plus efficaces que l'on connaisse."),
    ],
    example: {
      context: B("Chloé, a nursing student, has an exam on cardiac pharmacology in ten days. Her exam is built on short clinical cases.",
        "Chloé, étudiante infirmière, passe un examen de pharmacologie cardiaque dans dix jours. Son examen repose sur de courts cas cliniques."),
      before: B("Give me 20 questions with answers on cardiac drugs.",
        "Donne-moi 20 questions avec les réponses sur les médicaments cardiaques."),
      after: B("Quiz me on this chapter: [my notes on cardiac pharmacology].\nMy exam uses short clinical cases.\nRules:\n1. One question at a time. Wait for my answer. Never show the answer before I reply.\n2. Mostly short cases: a patient, a prescription, a symptom, and what I should notice.\n3. After my answer: right or wrong, the reason in two sentences, and the line of my notes.\n4. Stay within my notes.\n5. After 15 questions, stop and give me my score, the list of questions I missed, and the idea each miss points to.",
        "Interroge-moi sur ce chapitre : [mes notes de pharmacologie cardiaque].\nMon examen repose sur de courts cas cliniques.\nRègles :\n1. Une question à la fois. Attends ma réponse. Ne montre jamais la réponse avant que j'aie répondu.\n2. Surtout des cas courts : un patient, une prescription, un symptôme, et ce que je dois remarquer.\n3. Après ma réponse : juste ou faux, la raison en deux phrases, et la ligne de mes notes.\n4. Reste dans mes notes.\n5. Après 15 questions, arrête-toi et donne-moi mon score, la liste des questions manquées, et la notion que révèle chaque erreur."),
      takeaway: B("The first prompt gives Chloé a sheet to read. The second makes her answer 15 cases blind and ends with the three ideas she actually needs to review.",
        "Le premier prompt donne à Chloé une feuille à lire. Le second lui fait résoudre 15 cas à l'aveugle et se termine par les trois notions qu'elle doit réellement revoir."),
    },
    exercise: {
      goal: B("A 15-question quiz answered blind, and the list of your misses with the idea behind each, to reuse in two days.",
        "Un quiz de 15 questions résolu à l'aveugle, et la liste de vos erreurs avec la notion derrière chacune, à reprendre dans deux jours."),
      prompt: B("Quiz me on this chapter of [COURSE]: [MY NOTES].\nMy exam format: [MULTIPLE CHOICE / SHORT CASES / PROBLEMS / ESSAY QUESTIONS].\nRules:\n1. One question at a time. Wait for my answer. Never reveal the answer before I reply.\n2. At least half the questions apply an idea to a new case, in my exam's format.\n3. After each answer: right or wrong, why in two sentences, and the line of my notes concerned.\n4. Nothing outside my notes.\n5. After [NUMBER] questions, stop and give my score, the list of missed questions, and for each the idea I need to review.",
        "Interroge-moi sur ce chapitre de [MATIÈRE] : [MES NOTES].\nFormat de mon examen : [QCM / CAS COURTS / EXERCICES / QUESTIONS DE DISSERTATION].\nRègles :\n1. Une question à la fois. Attends ma réponse. Ne révèle jamais la réponse avant que j'aie répondu.\n2. Au moins la moitié des questions appliquent une notion à un cas nouveau, au format de mon examen.\n3. Après chaque réponse : juste ou faux, pourquoi en deux phrases, et la ligne de mes notes concernée.\n4. Rien d'extérieur à mes notes.\n5. Après [NOMBRE] questions, arrête-toi et donne mon score, la liste des questions manquées et, pour chacune, la notion à revoir."),
      check: [
        B("You wrote every answer before seeing the correction", "Vous avez écrit chaque réponse avant de voir la correction"),
        B("At least half the questions were cases, not definitions", "Au moins la moitié des questions étaient des cas, pas des définitions"),
        B("You saved the list of misses with the idea behind each", "Vous avez gardé la liste des erreurs avec la notion derrière chacune"),
        B("You set a date, two days later, to be quizzed on those misses only", "Vous avez fixé une date, deux jours plus tard, pour être interrogé sur ces erreurs seulement"),
      ],
      bonus: B("In two days, paste the list of misses and ask for new questions on the same ideas, worded differently. If you miss one again, make a flashcard of it.",
        "Dans deux jours, collez la liste des erreurs et demandez de nouvelles questions sur les mêmes notions, formulées autrement. Si vous en manquez une encore, faites-en une fiche."),
    },
    more: [
      { q: B("The AI keeps asking you definitions, while your exam uses clinical cases. What do you change?",
          "L'IA vous pose sans cesse des définitions, alors que votre examen repose sur des cas cliniques. Que changez-vous ?"),
        options: [
          B("Ask for questions in your exam's format, with cases", "Vous demandez des questions au format de votre examen, avec des cas"),
          B("Nothing: learn all the definitions first, the cases can wait until later", "Rien : toutes les définitions d'abord, les cas attendront"),
          B("Ask for harder definitions", "Vous demandez des définitions plus difficiles"),
          B("Switch to another AI tool", "Vous changez d'outil d'IA"),
        ],
        answer: 0,
        why: B("You train for the task you will face. Knowing a definition does not mean you will recognise it in a case, and the exam only asks for the second.",
          "On s'entraîne à la tâche que l'on affrontera. Connaître une définition ne garantit pas de la reconnaître dans un cas, et l'examen ne demande que la seconde chose.") },
      { q: B("The quiz is over and you scored 17 out of 20. What is the most useful thing to keep?",
          "Le quiz est terminé et vous avez 17 sur 20. Que faut-il surtout garder ?"),
        options: [
          B("The score, to track your progress from one session to the next", "Le score, pour suivre vos progrès d'une séance à l'autre"),
          B("The full conversation, to reread it", "La conversation entière, pour la relire"),
          B("The three misses and the idea behind each", "Les trois erreurs et la notion derrière chacune"),
        ],
        answer: 2,
        why: B("The score says how you did; the misses say what to do next. Rereading the conversation would bring back passive review, the habit the quiz is meant to replace.",
          "Le score dit comment vous avez fait ; les erreurs disent quoi faire ensuite. Relire la conversation ramènerait la révision passive, l'habitude que le quiz doit remplacer.") },
    ],
  },

  'st-revise/st-spaced': {
    why: [
      B("Memory fades fast after a first lesson, then more slowly after each successful recall. Reviewing just as you begin to forget, after a day, then three, then a week, gets the most memory out of each hour. This is spaced repetition, and flashcard apps rely on the same principle.",
        "La mémoire s'efface vite après une première leçon, puis plus lentement après chaque rappel réussi. Réviser au moment où l'on commence à oublier, après un jour, puis trois, puis une semaine, tire le plus de mémoire de chaque heure. C'est la répétition espacée, et les applications de fiches reposent sur le même principe."),
      B("Planning this by hand for five subjects is tedious, and that is where AI helps: it can lay out every chapter at growing gaps and fit them into the hours you really have. The plan is only as good as your inputs: exam dates, chapters, and your actual weekly hours, not the ideal ones.",
        "Planifier cela à la main pour cinq matières est fastidieux, et c'est là que l'IA aide : elle peut disposer chaque chapitre à intervalles croissants dans les heures dont vous disposez vraiment. Le plan ne vaut que ce que valent vos données : dates d'examen, chapitres, et heures réelles par semaine, pas les heures idéales."),
      B("Mixing subjects within a week, called interleaving, feels harder than one subject at a time, and that is why it works: you must first recognise what kind of problem you face. A free slot each week absorbs the delays that always come, so one bad day does not bring down the whole plan.",
        "Alterner les matières dans la semaine, ce que l'on appelle l'entrelacement, paraît plus difficile qu'une matière à la fois, et c'est pour cela que cela marche : il faut d'abord reconnaître le type de problème posé. Un créneau libre par semaine absorbe les retards qui arrivent toujours, pour qu'une mauvaise journée ne fasse pas tomber tout le plan."),
    ],
    example: {
      context: B("Maxime, a third-year biology student, has four exams in five weeks, a part-time job at weekends, and about twelve free hours a week.",
        "Maxime, en troisième année de biologie, a quatre examens en cinq semaines, un emploi à temps partiel le week-end et environ douze heures libres par semaine."),
      before: B("Make me a revision schedule for my exams.",
        "Fais-moi un planning de révisions pour mes examens."),
      after: B("Build my revision plan.\nExams: genetics on 12 June (6 chapters), ecology on 14 June (5), biochemistry on 18 June (7), statistics on 20 June (4).\nToday: 13 May. Free hours: Monday to Friday, 6 pm to 8:30 pm. Nothing at weekends (job).\nRules:\n1. Each chapter is studied once, then reviewed at growing gaps: next day, 3 days, 1 week, 2 weeks.\n2. At least two subjects each evening.\n3. Friday evening stays free each week, for delays.\n4. A timed mock exam for each subject in the last ten days.\n5. Never more than the hours I gave.\nOutput: a table by date, with subject, chapter, and type (first study, review, mock).",
        "Construis mon plan de révision.\nExamens : génétique le 12 juin (6 chapitres), écologie le 14 juin (5), biochimie le 18 juin (7), statistiques le 20 juin (4).\nAujourd'hui : 13 mai. Heures libres : du lundi au vendredi, de 18 h à 20 h 30. Rien le week-end (emploi).\nRègles :\n1. Chaque chapitre est étudié une fois, puis révisé à intervalles croissants : lendemain, 3 jours, 1 semaine, 2 semaines.\n2. Au moins deux matières chaque soir.\n3. Le vendredi soir reste libre chaque semaine, pour les retards.\n4. Un examen blanc chronométré par matière dans les dix derniers jours.\n5. Jamais plus que les heures indiquées.\nSortie : un tableau par date, avec matière, chapitre et type (première étude, révision, examen blanc)."),
      takeaway: B("The first plan would assume unlimited time and one subject per week. The second fits Maxime's twelve real hours, brings each chapter back four times, and leaves room for the week that goes wrong.",
        "Le premier plan supposerait un temps illimité et une matière par semaine. Le second tient dans les douze heures réelles de Maxime, fait revenir chaque chapitre quatre fois, et laisse de la place pour la semaine qui déraille."),
    },
    exercise: {
      goal: B("A dated revision plan up to your last exam, where each chapter comes back at growing gaps within your real free hours.",
        "Un plan de révision daté jusqu'à votre dernier examen, où chaque chapitre revient à intervalles croissants dans vos heures libres réelles."),
      prompt: B("Build my revision plan.\nExams: [SUBJECT, DATE AND NUMBER OF CHAPTERS, FOR EACH EXAM].\nToday's date: [DATE].\nMy real free hours: [DAYS AND TIME SLOTS, HONESTLY].\nChapters I already know well: [LIST, OR NONE].\nRules:\n1. Each chapter: a first study, then reviews at growing gaps (next day, 3 days, 1 week, 2 weeks), as far as the exam date allows.\n2. At least two subjects in any session longer than an hour.\n3. One free slot per week for delays.\n4. A timed mock exam per subject in the last ten days.\n5. Never exceed the hours I gave.\nOutput: a table by date: subject | chapter | first study, review or mock.\nThen tell me which exam is most at risk with this schedule.",
        "Construis mon plan de révision.\nExamens : [MATIÈRE, DATE ET NOMBRE DE CHAPITRES, POUR CHAQUE EXAMEN].\nDate du jour : [DATE].\nMes heures libres réelles : [JOURS ET CRÉNEAUX, HONNÊTEMENT].\nChapitres que je maîtrise déjà : [LISTE, OU AUCUN].\nRègles :\n1. Chaque chapitre : une première étude, puis des révisions à intervalles croissants (lendemain, 3 jours, 1 semaine, 2 semaines), autant que la date d'examen le permet.\n2. Au moins deux matières dans toute séance de plus d'une heure.\n3. Un créneau libre par semaine pour les retards.\n4. Un examen blanc chronométré par matière dans les dix derniers jours.\n5. Ne dépasse jamais les heures indiquées.\nSortie : un tableau par date : matière | chapitre | première étude, révision ou examen blanc.\nDis-moi ensuite quel examen est le plus menacé avec ce planning."),
      check: [
        B("The hours in the plan match your real week, classes and job included", "Les heures du plan correspondent à votre vraie semaine, cours et emploi compris"),
        B("Each chapter appears at least three times, at growing gaps", "Chaque chapitre apparaît au moins trois fois, à intervalles croissants"),
        B("Most sessions mix at least two subjects", "La plupart des séances mêlent au moins deux matières"),
        B("Each week has a free slot, and each subject a mock exam", "Chaque semaine a un créneau libre, et chaque matière un examen blanc"),
      ],
      bonus: B("Put the plan in your calendar, one event per session. Every Sunday, paste what you actually did and ask the AI to reschedule the rest without adding hours.",
        "Reportez le plan dans votre agenda, un événement par séance. Chaque dimanche, collez ce que vous avez réellement fait et demandez à l'IA de replanifier le reste sans ajouter d'heures."),
    },
    more: [
      { q: B("Your plan gives a whole week to genetics, then a week to ecology. What does it lack?",
          "Votre plan consacre une semaine entière à la génétique, puis une semaine à l'écologie. Que lui manque-t-il ?"),
        options: [
          B("More hours per day, so each block covers the subject in more depth", "Plus d'heures par jour, pour approfondir chaque bloc"),
          B("Reviews spaced over time, and subjects mixed", "Des révisions espacées, et des matières alternées"),
          B("A colour code per subject, so the plan is easier to read at a glance", "Un code couleur par matière, pour lire le plan d'un coup d'œil"),
        ],
        answer: 1,
        why: B("By the exam, genetics will not have been seen for weeks. Bringing each subject back several times, and mixing them, keeps everything alive until the exam date.",
          "Le jour de l'examen, la génétique n'aura pas été revue depuis des semaines. Faire revenir chaque matière plusieurs fois, et les alterner, garde tout vivant jusqu'à la date d'examen.") },
      { q: B("Halfway through, you are three sessions behind. What do you ask the AI?",
          "À mi-parcours, vous avez trois séances de retard. Que demandez-vous à l'IA ?"),
        options: [
          B("To add evening hours until you have caught up", "D'ajouter des heures le soir jusqu'à rattraper le retard"),
          B("To drop all the planned reviews and keep only the first study of each chapter", "De supprimer les révisions pour ne garder que la première étude"),
          B("To start a brand new plan from scratch", "De repartir d'un plan entièrement nouveau"),
          B("To reschedule within your hours, using the free slots first", "De replanifier dans vos heures, en utilisant d'abord les créneaux libres"),
        ],
        answer: 3,
        why: B("The free slots exist for this. Adding hours you do not have creates a plan you will not follow; dropping reviews removes the part that makes you remember.",
          "Les créneaux libres existent pour cela. Ajouter des heures que vous n'avez pas crée un plan que vous ne suivrez pas ; supprimer les révisions retire ce qui fait retenir.") },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* CITÉ 3 · EXAMENS ET TRAVAUX ÉCRITS                                */
  /* ---------------------------------------------------------------- */

  'st-exams/st-mock': {
    why: [
      B("An exam tests a performance under constraints: limited time, no notes, a set format. Knowing the content is not enough; you must also retrieve it fast and organise it the way the examiner expects. A mock exam is the only rehearsal of that performance.",
        "Un examen évalue une performance sous contraintes : un temps limité, pas de notes, un format imposé. Connaître le contenu ne suffit pas ; il faut aussi le retrouver vite et l'organiser comme l'attend le correcteur. L'examen blanc est la seule répétition de cette performance."),
      B("Past papers are the best model of what your teacher asks. Given one, the AI can produce a new paper with the same structure, the same kinds of questions and the same weighting. Without one, it invents a generic exam that may test the wrong skills.",
        "Les annales sont le meilleur modèle de ce que demande votre enseignant. À partir de l'une d'elles, l'IA peut produire un nouveau sujet de même structure, avec les mêmes types de questions et la même pondération. Sans annale, elle invente un examen générique qui peut tester les mauvaises compétences."),
      B("Marking is where AI needs the most supervision. Models tend to be lenient and to reward long answers. The grading scheme fixes that: each mark must match a criterion. Checking two marks yourself tells you whether you can trust the rest.",
        "La correction est l'étape où l'IA demande le plus de surveillance. Les modèles ont tendance à être indulgents et à récompenser les réponses longues. Le barème corrige cela : chaque point doit correspondre à un critère. Vérifier vous-même deux notes vous dit si le reste est fiable."),
    ],
    example: {
      context: B("Yanis, a first-year economics student, has a microeconomics exam in two weeks. He has two past papers with their grading schemes.",
        "Yanis, en première année d'économie, passe un examen de microéconomie dans deux semaines. Il dispose de deux annales et de leurs barèmes."),
      before: B("Make me a microeconomics practice exam.",
        "Fais-moi un examen d'entraînement de microéconomie."),
      after: B("Here is a past paper [pasted] and its grading scheme [pasted].\nWrite a NEW paper with exactly the same structure: same number of exercises, same types of questions, same points per question, same duration (2 hours).\nChange the data and the contexts; stay within these chapters: consumer choice, elasticities, market equilibrium.\nGive the paper only. No solutions yet: I will sit it first and send my answers.\nWhen I send them, mark each question with the grading scheme, quote the criterion for each point given or refused, and be strict: a long answer earns nothing without the expected element.",
        "Voici une annale [collée] et son barème [collé].\nRédige un NOUVEAU sujet de structure identique : même nombre d'exercices, mêmes types de questions, mêmes points par question, même durée (2 heures).\nChange les données et les contextes ; reste dans ces chapitres : choix du consommateur, élasticités, équilibre de marché.\nDonne seulement le sujet. Pas de corrigé pour l'instant : je le passe d'abord et je t'envoie mes réponses.\nQuand je te les envoie, corrige chaque question avec le barème, cite le critère de chaque point accordé ou refusé, et sois strict : une réponse longue ne rapporte rien sans l'élément attendu."),
      takeaway: B("The first request gives a generic exam with the answers on the same page. The second produces a paper shaped like Yanis's real exam, holds back the solutions, and ties every mark to a criterion.",
        "La première demande donne un examen générique, corrigé sur la même page. La seconde produit un sujet taillé comme le vrai examen de Yanis, retient le corrigé, et relie chaque point à un critère."),
    },
    exercise: {
      goal: B("A new paper in your exam's format, sat in real conditions, then marked question by question against the grading scheme.",
        "Un nouveau sujet au format de votre examen, passé en conditions réelles, puis corrigé question par question selon le barème."),
      prompt: B("Here is a past paper from my course: [THE PAST PAPER].\nHere is its grading scheme: [THE SCHEME, OR THE TEACHER'S CRITERIA].\nChapters to cover: [LIST].\nStep 1. Write a NEW paper with the same structure: number of questions, types, points and duration. Change data and contexts. Give the paper only, no solutions.\nStep 2. Wait. I will sit it in [DURATION] with no notes and send my answers.\nStep 3. Mark each answer with the grading scheme: points given, points refused, and the criterion quoted for each. Be strict: length earns nothing on its own.\nStep 4. List the two chapters that cost me the most points.",
        "Voici une annale de mon cours : [L'ANNALE].\nVoici son barème : [LE BARÈME, OU LES CRITÈRES DE L'ENSEIGNANT].\nChapitres à couvrir : [LISTE].\nÉtape 1. Rédige un NOUVEAU sujet de même structure : nombre de questions, types, points et durée. Change les données et les contextes. Donne seulement le sujet, sans corrigé.\nÉtape 2. Attends. Je le passe en [DURÉE] sans documents et je t'envoie mes réponses.\nÉtape 3. Corrige chaque réponse avec le barème : points accordés, points refusés, et le critère cité pour chacun. Sois strict : la longueur seule ne rapporte rien.\nÉtape 4. Liste les deux chapitres qui m'ont coûté le plus de points."),
      check: [
        B("The new paper has the same structure and points as the past paper", "Le nouveau sujet a la même structure et le même barème que l'annale"),
        B("You sat it timed, without notes and without the conversation open", "Vous l'avez passé en temps limité, sans notes ni conversation ouverte"),
        B("Every mark cites a criterion of the grading scheme", "Chaque note cite un critère du barème"),
        B("You checked two marks yourself, and they held", "Vous avez vérifié vous-même deux notes, et elles tiennent"),
      ],
      bonus: B("Put the two weakest chapters back into your revision plan as first sessions next week, and sit a second mock paper on them ten days before the exam.",
        "Replacez les deux chapitres les plus faibles dans votre plan de révision, en tête de la semaine prochaine, et passez sur eux un second sujet blanc dix jours avant l'examen."),
    },
    more: [
      { q: B("The AI gives you 18 out of 20, but you left one question half done. What do you conclude?",
          "L'IA vous donne 18 sur 20, alors que vous avez laissé une question à moitié faite. Qu'en concluez-vous ?"),
        options: [
          B("The marking is too generous: ask for strict use of the scheme", "La correction est trop généreuse : exigez une application stricte du barème"),
          B("The AI understood what you meant to write, so the mark is fair on the whole", "L'IA a compris ce que vous vouliez écrire, la note est donc juste"),
          B("You are ready, there is no need for another mock", "Vous êtes prêt, un autre examen blanc est inutile"),
        ],
        answer: 0,
        why: B("A half-finished question cannot earn full marks under any scheme. A mark that high means the AI rewarded intentions. Ask it to go through each criterion again.",
          "Une question à moitié traitée ne peut obtenir tous ses points sous aucun barème. Une note aussi haute signifie que l'IA a récompensé des intentions. Demandez-lui de reprendre chaque critère.") },
      { q: B("You have no past paper. What is the best basis for a mock exam?",
          "Vous n'avez aucune annale. Quelle est la meilleure base pour un examen blanc ?"),
        options: [
          B("Ask the AI for a typical exam in the subject", "Demander à l'IA un examen type de la matière"),
          B("Skip the mock and reread the notes instead", "Renoncer à l'examen blanc et relire les notes"),
          B("Copy an exam from another university found online, as it is", "Reprendre tel quel un examen d'une autre université trouvé en ligne"),
          B("The format and criteria your teacher announced", "Le format et les critères annoncés par l'enseignant"),
        ],
        answer: 3,
        why: B("The format your teacher announced (duration, question types, weighting) is the closest thing to a past paper. A \"typical\" exam may train skills your course never asks for.",
          "Le format annoncé par l'enseignant (durée, types de questions, pondération) est ce qui ressemble le plus à une annale. Un examen « type » peut entraîner des compétences que votre cours ne demande jamais.") },
    ],
  },

  'st-exams/st-cite': {
    why: [
      B("A model writes text that is likely, not text that is checked. A reference is a very predictable pattern (authors, year, title, journal, pages), so the model can produce one that looks perfect and points to nothing. This is not a rare bug: it is how the model behaves when asked for sources from memory.",
        "Un modèle écrit un texte probable, non un texte vérifié. Une référence est un motif très prévisible (auteurs, année, titre, revue, pages) : le modèle peut donc en produire une, parfaite en apparence, qui ne renvoie à rien. Ce n'est pas un défaut rare, c'est son comportement normal lorsqu'on lui demande des sources de mémoire."),
      B("Some tools search the web and show links, which helps, but a link still has to be opened: the page does not always say what the summary claims. Your library catalogue and the databases your course recommends remain the reliable starting point, because every record there describes a document that exists.",
        "Certains outils cherchent sur le web et affichent des liens, ce qui aide, mais un lien doit encore être ouvert : la page ne dit pas toujours ce qu'affirme le résumé. Le catalogue de votre bibliothèque et les bases conseillées par votre cours restent le point de départ fiable, car chaque notice y décrit un document qui existe."),
      B("Where AI is genuinely useful is formatting. Citation styles are fussy (italics, order, punctuation), and given a real record the model applies them well. The last check is yours: names, years and pages copied wrong are the most frequent errors, and examiners spot them.",
        "L'IA est réellement utile pour la mise en forme. Les styles de citation sont pointilleux (italique, ordre, ponctuation) et, à partir d'une vraie notice, le modèle les applique bien. La dernière vérification vous revient : noms, années et pages mal recopiés sont les erreurs les plus fréquentes, et les correcteurs les repèrent."),
    ],
    example: {
      context: B("Emma, a sociology master's student, needs three sources on remote work and loneliness for a 3,000-word essay in APA style.",
        "Emma, en master de sociologie, a besoin de trois sources sur le télétravail et l'isolement pour un essai de 3 000 mots au format APA."),
      before: B("Give me 3 academic sources on remote work and loneliness, in APA format.",
        "Donne-moi 3 sources académiques sur le télétravail et l'isolement, au format APA."),
      after: B("I found these three sources in my university library database. Here are their records, copied as displayed:\n1. [record 1: authors, year, title, journal, volume, pages, DOI]\n2. [record 2]\n3. [record 3]\nFormat each one as an APA reference, and give the in-text citation for a quote on page 42 of source 2.\nDo not add, complete or correct any information. If a field APA needs is missing from a record, write MISSING in its place so I can find it.",
        "J'ai trouvé ces trois sources dans la base de ma bibliothèque universitaire. Voici leurs notices, recopiées telles qu'affichées :\n1. [notice 1 : auteurs, année, titre, revue, volume, pages, DOI]\n2. [notice 2]\n3. [notice 3]\nMets chacune en forme comme référence APA, et donne la citation dans le texte pour un extrait de la page 42 de la source 2.\nN'ajoute, ne complète et ne corrige aucune information. Si un champ exigé par l'APA manque dans une notice, écris MANQUANT à sa place pour que je le retrouve."),
      takeaway: B("The first prompt asks the model to remember sources, which is exactly where it invents. The second gives it only real records and forbids it to fill gaps, so a missing field shows up instead of being made up.",
        "Le premier prompt demande au modèle de se souvenir de sources, précisément là où il invente. Le second ne lui donne que de vraies notices et lui interdit de combler les trous : un champ manquant apparaît au lieu d'être inventé."),
    },
    exercise: {
      goal: B("Three sources found with your library's tools, formatted in the style your course requires, and checked against their records.",
        "Trois sources trouvées avec les outils de votre bibliothèque, mises en forme dans le style exigé par votre cours, et vérifiées sur leurs notices."),
      prompt: B("I found these sources myself in [CATALOGUE OR DATABASE]. Here are their records, copied as displayed:\n1. [RECORD 1]\n2. [RECORD 2]\n3. [RECORD 3]\nFormat each one in [CITATION STYLE REQUIRED BY MY COURSE].\nAlso give the in-text citation for [THE PASSAGE I WILL QUOTE, WITH ITS PAGE].\nRules: do not add, complete or correct any information. If a field the style needs is missing, write MISSING in its place. Do not suggest other sources.",
        "J'ai trouvé ces sources moi-même dans [CATALOGUE OU BASE]. Voici leurs notices, recopiées telles qu'affichées :\n1. [NOTICE 1]\n2. [NOTICE 2]\n3. [NOTICE 3]\nMets chacune en forme selon [STYLE DE CITATION EXIGÉ PAR MON COURS].\nDonne aussi la citation dans le texte pour [LE PASSAGE QUE JE CITERAI, AVEC SA PAGE].\nRègles : n'ajoute, ne complète et ne corrige aucune information. Si un champ exigé par le style manque, écris MANQUANT à sa place. Ne propose aucune autre source."),
      check: [
        B("You opened each source before formatting it", "Vous avez ouvert chaque source avant de la mettre en forme"),
        B("The AI added no information absent from your records", "L'IA n'a ajouté aucune information absente de vos notices"),
        B("You compared names, years and pages with each record", "Vous avez comparé noms, années et pages avec chaque notice"),
        B("Every missing field was found by you, not by the AI", "Chaque champ manquant a été retrouvé par vous, et non par l'IA"),
      ],
      bonus: B("Ask the AI what your required style says about citing a web page, a report and a book chapter, then compare its answer with your library's style guide.",
        "Demandez à l'IA ce que votre style exige pour citer une page web, un rapport et un chapitre d'ouvrage, puis comparez sa réponse avec le guide de style de votre bibliothèque."),
    },
    more: [
      { q: B("A reference given by the AI has a DOI. Is that enough proof that it exists?",
          "Une référence donnée par l'IA comporte un DOI. Est-ce une preuve suffisante de son existence ?"),
        options: [
          B("Yes, a DOI is always unique and checked", "Oui, un DOI est toujours unique et contrôlé"),
          B("No, the DOI can be invented too: open it", "Non, le DOI peut être inventé lui aussi : ouvrez-le"),
          B("Yes, as long as the journal named in it is a real journal", "Oui, pourvu que la revue citée existe vraiment"),
        ],
        answer: 1,
        why: B("The model can generate a DOI in the right format that leads nowhere, or to another article. Resolving the DOI and reading the title that comes up is the check.",
          "Le modèle peut générer un DOI au bon format qui ne mène nulle part, ou à un autre article. Résoudre le DOI et lire le titre qui s'affiche, voilà la vérification.") },
      { q: B("Your essay is due tonight and one source's page number is missing. What do you do?",
          "Votre essai est à rendre ce soir et il manque le numéro de page d'une source. Que faites-vous ?"),
        options: [
          B("Ask the AI to complete it", "Vous demandez à l'IA de le compléter"),
          B("Leave the reference out entirely", "Vous supprimez entièrement la référence"),
          B("Find it in the document, or cite without it as the style allows", "Vous la retrouvez dans le document, ou citez sans elle si le style le permet"),
          B("Write a plausible page number", "Vous indiquez un numéro de page plausible"),
        ],
        answer: 2,
        why: B("An invented page number is a false citation, even a small one. The document is the only source for it, and most styles also say how to cite when no page is available.",
          "Un numéro de page inventé est une fausse citation, même minime. Le document en est la seule source, et la plupart des styles disent aussi comment citer en l'absence de page.") },
    ],
  },

  'st-exams/st-draft': {
    why: [
      B("Feedback and rewriting look close, but they are opposites. Feedback points to a weakness and leaves the fix to you: you decide, you write, you learn. Rewriting does the fix: you get a better paragraph and learn nothing, and the text now contains writing that is not yours, which many institutions treat as misconduct.",
        "Retour et réécriture semblent proches, mais ils s'opposent. Un retour désigne une faiblesse et vous laisse la corriger : vous décidez, vous écrivez, vous apprenez. Une réécriture corrige à votre place : vous obtenez un meilleur paragraphe sans rien apprendre, et le texte contient une écriture qui n'est pas la vôtre, ce que beaucoup d'établissements sanctionnent."),
      B("The marking criteria make the feedback useful. Without them, the AI comments on style in general. With them, it can say that paragraph 4 makes a claim without evidence, which is exactly what the criterion \"argument supported by sources\" will penalise.",
        "Les critères de notation rendent les retours utiles. Sans eux, l'IA commente le style en général. Avec eux, elle peut dire que le paragraphe 4 avance une affirmation sans preuve, précisément ce que le critère « argumentation étayée par des sources » pénalisera."),
      B("Keeping each version of your draft, and declaring the help when your rules ask for it, protects you. If your work is questioned, the history of versions shows how the text grew, and the declaration shows you had nothing to hide.",
        "Conserver chaque version de votre brouillon, et déclarer l'aide lorsque les règles l'exigent, vous protège. Si votre travail est mis en doute, l'historique des versions montre comment le texte a grandi, et la déclaration montre que vous n'aviez rien à cacher."),
    ],
    example: {
      context: B("Nora, a history student, has a 2,500-word draft on the 1936 Popular Front. Her course allows AI feedback if declared, but not AI writing.",
        "Nora, étudiante en histoire, a rédigé 2 500 mots sur le Front populaire de 1936. Son cours autorise les retours d'une IA s'ils sont déclarés, mais pas l'écriture par une IA."),
      before: B("Improve my essay and make it more academic. [draft]",
        "Améliore mon essai et rends-le plus universitaire. [brouillon]"),
      after: B("Here are the marking criteria of my essay [pasted], then my draft with numbered paragraphs [pasted].\nYou are a demanding reader, not a co-author.\n1. Name the three weakest points of the draft, each tied to one criterion and to paragraph numbers.\n2. For each, explain the problem in two sentences and ask me one question that would help me fix it.\n3. Do not rewrite, rephrase or suggest any sentence. Do not correct the text itself.\n4. Then say which criterion my draft meets best, so I know what to keep.",
        "Voici les critères de notation de mon essai [collés], puis mon brouillon aux paragraphes numérotés [collé].\nTu es un lecteur exigeant, pas un coauteur.\n1. Nomme les trois points les plus faibles du brouillon, chacun lié à un critère et à des numéros de paragraphe.\n2. Pour chacun, explique le problème en deux phrases et pose-moi une question qui m'aiderait à le corriger.\n3. Ne réécris, ne reformule et ne propose aucune phrase. Ne corrige pas le texte lui-même.\n4. Dis ensuite quel critère mon brouillon remplit le mieux, pour que je sache quoi garder."),
      takeaway: B("The first prompt would return a text partly written by the AI, which Nora's course forbids. The second returns three problems and three questions: the revision, and the essay, stay hers.",
        "Le premier prompt renverrait un texte en partie écrit par l'IA, ce que le cours de Nora interdit. Le second renvoie trois problèmes et trois questions : la révision, et l'essai, restent les siens."),
    },
    exercise: {
      goal: B("Three weak points of your draft tied to the marking criteria, a revision you write yourself, and a declaration of the help if your rules require one.",
        "Trois points faibles de votre brouillon reliés aux critères de notation, une révision écrite par vous, et une déclaration de l'aide si vos règles l'exigent."),
      prompt: B("Here are the marking criteria of my assignment: [THE CRITERIA OR RUBRIC].\nHere is my draft, paragraphs numbered: [MY DRAFT].\nYou are a demanding reader, not a co-author.\n1. The three weakest points, each tied to one criterion and to paragraph numbers.\n2. For each, the problem in two sentences, then one question that helps me fix it myself.\n3. Never rewrite, rephrase or propose sentences, even as an example. Do not correct spelling or grammar unless I ask.\n4. The criterion my draft meets best.\nMy course's rule on AI for this assignment is: [QUOTE OF THE RULE]. If what I ask breaks it, tell me and stop.",
        "Voici les critères de notation de mon devoir : [LES CRITÈRES OU LA GRILLE].\nVoici mon brouillon, paragraphes numérotés : [MON BROUILLON].\nTu es un lecteur exigeant, pas un coauteur.\n1. Les trois points les plus faibles, chacun lié à un critère et à des numéros de paragraphe.\n2. Pour chacun, le problème en deux phrases, puis une question qui m'aide à le corriger moi-même.\n3. Ne réécris, ne reformule et ne propose jamais de phrase, même en exemple. Ne corrige ni l'orthographe ni la grammaire sauf si je le demande.\n4. Le critère que mon brouillon remplit le mieux.\nLa règle de mon cours sur l'IA pour ce devoir est : [CITATION DE LA RÈGLE]. Si ma demande l'enfreint, dis-le et arrête-toi."),
      check: [
        B("You checked the rule of this assignment before starting", "Vous avez vérifié la règle propre à ce devoir avant de commencer"),
        B("The feedback contains no rewritten sentence", "Les retours ne contiennent aucune phrase réécrite"),
        B("Each point is tied to a criterion and a paragraph", "Chaque point est relié à un critère et à un paragraphe"),
        B("You saved the draft before and after your revision", "Vous avez gardé le brouillon avant et après votre révision"),
      ],
      bonus: B("Write your declaration of AI use in two sentences: which tool, for what (feedback on draft 1 against the criteria), and what it did not do (no writing). Check it matches the form your institution requires.",
        "Rédigez votre déclaration d'usage de l'IA en deux phrases : quel outil, pour quoi (retours sur le brouillon 1 selon les critères), et ce qu'il n'a pas fait (aucune écriture). Vérifiez qu'elle suit la forme exigée par votre établissement."),
    },
    more: [
      { q: B("The AI answers your request for feedback with a rewritten paragraph \"as an example\". What do you do?",
          "À votre demande de retours, l'IA répond par un paragraphe réécrit « à titre d'exemple ». Que faites-vous ?"),
        options: [
          B("Use it as a model and adapt a few of the words so it sounds more like you", "Vous vous en inspirez en changeant quelques mots pour qu'il vous ressemble"),
          B("Keep it, since it was offered without you asking", "Vous le gardez, puisqu'il a été proposé sans demande"),
          B("Set it aside, restate the rule, and ask for a question instead", "Vous l'écartez, rappelez la règle, et demandez une question à la place"),
        ],
        answer: 2,
        why: B("An example paragraph is still writing done for you, and once read it shapes yours. Restate the rule: problems and questions only.",
          "Un paragraphe d'exemple reste une écriture faite à votre place, et une fois lu, il façonne la vôtre. Rappelez la règle : des problèmes et des questions, rien d'autre.") },
      { q: B("Your rules say AI feedback must be declared. When do you write the declaration?",
          "Vos règles imposent de déclarer les retours d'une IA. Quand rédigez-vous la déclaration ?"),
        options: [
          B("When you hand in the work, describing exactly what the AI did", "En rendant le travail, en décrivant précisément ce qu'a fait l'IA"),
          B("Only if the teacher asks about it", "Seulement si l'enseignant pose la question"),
          B("Never, feedback is not really help", "Jamais, des retours ne sont pas vraiment une aide"),
          B("Before you start, as one general statement covering all your future work", "Avant de commencer, en une mention générale couvrant tous vos travaux"),
        ],
        answer: 0,
        why: B("A declaration is useful when it is precise and handed in with the work: which tool, for which step, and what it did not do. A vague or late one protects no one.",
          "Une déclaration est utile lorsqu'elle est précise et rendue avec le travail : quel outil, pour quelle étape, et ce qu'il n'a pas fait. Une mention vague ou tardive ne protège personne.") },
    ],
  },
}

/* ================================================================== */
/* LA COUCHE PÉDAGOGIQUE · data/deep                                   */
/* ================================================================== */

const DEEP: Record<string, Deepening> = {
  /*@DEEP@*/
}

export const METIER_STUDENT: TradePack = {
  trade: {
    id: 'student',
    label: B('Student', 'Étudiant'),
    who: B('You follow courses, sit exams and hand in written work, and you want to learn, not just finish.',
      "Vous suivez des cours, passez des examens et rendez des travaux écrits, et vous voulez apprendre, pas seulement finir."),
    glyph: 'layers', tint: TINT,
    cities: ['st-course', 'st-revise', 'st-exams'],
  },
  modules: MODULES,
  enrich: ENRICH,
  deep: DEEP,
}
