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
  /*@ENRICH@*/
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
