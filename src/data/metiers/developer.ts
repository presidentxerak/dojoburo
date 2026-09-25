// LA FORMATION MÉTIER « developer » · voir ./types.
//
// LE CYCLE DU MÉTIER, EN TROIS CITÉS · ce qui déclenche le travail (un ticket
// sur un code que l'on connaît mal : comprendre, spécifier, protéger les
// secrets), ce dont il est fait (des tests, du débogage, des dépendances) et
// ce qui le termine (la relecture, la documentation, le commit). Le fil rouge
// est le même partout : l'IA écrit vite, et c'est l'humain qui répond de
// chaque ligne fusionnée.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { TradePack } from './types'

const TINT = '#84cc16'

/* ================================================================== */
/* CITÉ 1 · COMPRENDRE ET CADRER                                       */
/* ================================================================== */

const DV_FRAME: Level[] = [
  {
    id: 'dv-map',
    master: 'research',
    minutes: 7,
    title: B('Trace one request through unfamiliar code', 'Suivez une requête dans un code inconnu'),
    learn: B(
      'You will understand an unfamiliar codebase by following one real path through it, from entry point to database.',
      "Vous apprendrez à comprendre un code inconnu en suivant un chemin réel, du point d'entrée jusqu'à la base de données.",
    ),
    act: B('Have the AI trace the path of one request in your code, file by file, then check each step yourself.',
      "Faites tracer par l'IA le chemin d'une requête de votre code, fichier par fichier, puis vérifiez chaque étape."),
    steps: [
      B('Give the entry point (a route, a command, a job) and the files you have actually shared.',
        "Indiquez le point d'entrée (une route, une commande, une tâche planifiée) et les fichiers réellement fournis."),
      B('Ask for the path as a numbered list: file, function, what it does, what it passes on.',
        "Demandez le chemin sous forme de liste numérotée : fichier, fonction, rôle, ce qu'elle transmet."),
      B('Require every step inferred without seeing the code to be marked as a guess.',
        "Exigez que chaque étape déduite sans avoir vu le code soit signalée comme une supposition."),
      B('Open each file it names, or set a breakpoint, and confirm the path before changing anything.',
        "Ouvrez chaque fichier cité, ou posez un point d'arrêt, et confirmez le chemin avant toute modification."),
    ],
    trap: B(
      '"Explain this repository" returns a tidy summary of what such projects usually contain, including files that do not exist in yours.',
      "« Explique-moi ce dépôt » produit un résumé soigné de ce que contiennent d'habitude ces projets, y compris des fichiers absents du vôtre.",
    ),
    quiz: {
      q: B('The AI names a file, utils/tax.py, in the path it traced. You never shared it. What do you do?',
        "L'IA cite un fichier, utils/tax.py, dans le chemin tracé. Vous ne l'avez jamais fourni. Que faites-vous ?"),
      options: [
        B('Trust it, since the name follows the naming conventions of the project', 'Vous lui faites confiance, puisque le nom suit les conventions du projet'),
        B('Check whether the file exists and what it really contains', "Vous vérifiez que le fichier existe et ce qu'il contient réellement"),
        B('Ask the AI to confirm that the file really exists', "Vous demandez à l'IA de confirmer que le fichier existe bien"),
      ],
      answer: 1,
      why: B(
        'A model can only describe code it has read. A plausible file name is exactly what it produces to fill a gap, and asking it to confirm only produces another plausible answer.',
        "Un modèle ne décrit que le code qu'il a lu. Un nom de fichier plausible est précisément ce qu'il produit pour combler un vide, et lui demander confirmation produit une autre réponse plausible.",
      ),
    },
    badge: B('Code mapped before changed', 'Cartographe du code existant'),
  },
  {
    id: 'dv-spec',
    master: 'planning',
    minutes: 7,
    title: B('The spec comes before the generated code', 'La spécification précède le code généré'),
    learn: B(
      'You will write a short spec (inputs, outputs, edge cases, scope) that the AI must follow before it writes code.',
      "Vous rédigerez une courte spécification (entrées, sorties, cas limites, périmètre) que l'IA devra suivre avant de coder.",
    ),
    act: B('Write a ten-line spec for your next change and ask for a plan of the files to touch before any code.',
      "Rédigez une spécification de dix lignes pour votre prochaine modification et exigez un plan des fichiers avant le code."),
    steps: [
      B('State the behaviour: given this input, the function returns that output, with one real example.',
        "Décrivez le comportement : pour telle entrée, la fonction renvoie telle sortie, avec un exemple réel."),
      B('List the edge cases you already know: empty value, wrong type, duplicate, time zone.',
        "Listez les cas limites que vous connaissez déjà : valeur vide, mauvais type, doublon, fuseau horaire."),
      B('Name what must not change: public signatures, database schema, files outside the scope.',
        "Nommez ce qui ne doit pas changer : signatures publiques, schéma de la base, fichiers hors périmètre."),
      B('Ask for the plan first (files, functions, open questions), correct it, then ask for the code.',
        "Demandez d'abord le plan (fichiers, fonctions, questions ouvertes), corrigez-le, puis demandez le code."),
    ],
    trap: B(
      '"Add discount codes to checkout" gets you code that runs and decides for you: stacking, expiry, rounding. You find out in production.',
      "« Ajoute des codes promo au paiement » donne un code qui tourne et tranche à votre place : cumul, expiration, arrondi. Vous le découvrez en production.",
    ),
    quiz: {
      q: B('The plan the AI proposes changes the database schema, which your spec never mentioned. What do you do?',
        "Le plan proposé modifie le schéma de la base, ce que votre spécification ne mentionnait pas. Que faites-vous ?"),
      options: [
        B('Accept it: the model saw a need you had missed', "Vous l'acceptez : le modèle a vu un besoin qui vous avait échappé"),
        B('Ask for the code now and review the database migration carefully afterwards', 'Vous demandez le code et relirez attentivement la migration ensuite'),
        B('Stop, decide yourself, and add the limit to the spec', 'Vous arrêtez, tranchez vous-même et ajoutez la limite à la spécification'),
      ],
      answer: 2,
      why: B(
        'A schema change reaches far beyond your ticket: migrations, other services, rollback. The plan is the moment when refusing costs nothing.',
        "Un changement de schéma engage bien au-delà de votre ticket : migrations, autres services, retour arrière. Le plan est le moment où refuser ne coûte rien.",
      ),
    },
    badge: B('Spec before code', "La spécification d'abord"),
  },
  {
    id: 'dv-secrets',
    master: 'tools',
    minutes: 6,
    title: B('Share the code, never the secrets', 'Partagez le code, jamais les secrets'),
    learn: B(
      'You will send the AI the code it needs without keys, passwords, customer data or anything your policy forbids.',
      "Vous apprendrez à fournir à l'IA le code utile sans clés, mots de passe, données clients ni rien d'interdit chez vous.",
    ),
    act: B('Take a snippet you would paste today and clean it: placeholders for secrets, invented data for real records.',
      "Prenez un extrait que vous colleriez aujourd'hui et nettoyez-le : secrets remplacés, données réelles rendues fictives."),
    steps: [
      B('Search the snippet for keys, tokens, passwords, connection strings and internal URLs.',
        "Cherchez dans l'extrait les clés, tokens, mots de passe, chaînes de connexion et adresses internes."),
      B('Replace each one with a named placeholder, such as PAYMENT_API_KEY, so the code still reads.',
        "Remplacez chacun par un nom explicite, comme PAYMENT_API_KEY, pour que le code reste lisible."),
      B('Swap real customer records in logs or fixtures for invented ones with the same shape.',
        "Remplacez les données clients des logs ou des jeux d'essai par des données inventées de même forme."),
      B('If a real secret was sent, revoke and replace it now: deleting the message is not enough.',
        "Si un vrai secret est parti, révoquez-le et remplacez-le aussitôt : supprimer le message ne suffit pas."),
    ],
    trap: B(
      '"It is only the staging key": such keys often reach real data, and a pasted key has already left your control.',
      "« Ce n'est que la clé de préproduction » : ces clés ouvrent souvent de vraies données, et une clé collée a déjà quitté votre contrôle.",
    ),
    quiz: {
      q: B('You spot a live API key in a stack trace you sent to the AI an hour ago. What do you do first?',
        "Vous repérez une clé API active dans une stack trace envoyée à l'IA il y a une heure. Que faites-vous d'abord ?"),
      options: [
        B('Revoke the key and issue a new one', 'Vous révoquez la clé et en émettez une nouvelle'),
        B('Delete the conversation so that nobody can read the key', 'Vous supprimez la conversation pour que personne ne lise la clé'),
        B('Ask the AI to forget the key and to confirm it has', "Vous demandez à l'IA d'oublier la clé et de le confirmer"),
      ],
      answer: 0,
      why: B(
        'Once sent, a secret may be stored or logged outside your control. Deleting the chat or asking the model to forget changes nothing. Only revoking the key makes it worthless.',
        "Une fois envoyé, un secret peut être conservé ou journalisé hors de votre contrôle. Supprimer ou demander l'oubli n'y change rien : seule la révocation rend la clé inutilisable.",
      ),
    },
    badge: B('Secrets kept out of prompts', 'Gardien des secrets'),
  },
]

/* ================================================================== */
/* CITÉ 2 · CONSTRUIRE AVEC UN FILET                                   */
/* ================================================================== */

const DV_BUILD: Level[] = [
  {
    id: 'dv-tests',
    master: 'coding',
    minutes: 7,
    title: B('Write the test before asking for code', 'Écrivez le test avant de demander le code'),
    learn: B(
      'You will turn your spec into tests first, so the generated code has a target it cannot argue with.',
      "Vous apprendrez à traduire votre spécification en tests d'abord, pour donner au code généré une cible indiscutable.",
    ),
    act: B('Have tests written from your spec, watch them fail, then ask for the code that makes them pass.',
      "Faites écrire les tests d'après votre spécification, constatez leur échec, puis demandez le code qui les réussit."),
    steps: [
      B('Give the spec and ask for one test per behaviour and per edge case, with readable names.',
        "Fournissez la spécification et demandez un test par comportement et par cas limite, avec des noms lisibles."),
      B('Read the expected values yourself: a test that asserts a wrong result protects the bug.',
        "Relisez vous-même les valeurs attendues : un test qui affirme un mauvais résultat protège le bug."),
      B('Run them before any code exists. A test that already passes tests nothing.',
        "Exécutez-les avant que le code existe. Un test qui passe déjà ne teste rien."),
      B('Ask for the code, and forbid any change to the tests to make them pass.',
        "Demandez le code, en interdisant toute modification des tests pour les faire passer."),
    ],
    trap: B(
      'Asking for code and its tests together gets tests written to match the code, bugs included. They pass, and prove nothing.',
      "Demander le code et ses tests ensemble produit des tests calqués sur le code, bugs compris. Ils passent, et ne prouvent rien.",
    ),
    quiz: {
      q: B('A generated test fails. The AI proposes to change the expected value from 119.99 to 120. What do you check?',
        "Un test généré échoue. L'IA propose de remplacer la valeur attendue 119.99 par 120. Que vérifiez-vous ?"),
      options: [
        B('Whether all the other tests still pass after the change', 'Si tous les autres tests passent encore après ce changement'),
        B('Which value the spec requires: the test or the code may be wrong', 'Quelle valeur exige la spécification : le test ou le code peut être faux'),
        B('Whether 120 is just a rounding of 119.99, which would be acceptable', "Si 120 n'est qu'un arrondi de 119.99, ce qui serait acceptable"),
      ],
      answer: 1,
      why: B(
        'The spec is the referee. If it says two decimals, the code is wrong and the test is right. Changing the expected value to pass hides exactly the bug the test caught.',
        "La spécification tranche. Si elle exige deux décimales, le code est faux et le test est juste. Modifier la valeur attendue masque précisément le bug détecté.",
      ),
    },
    badge: B('Tests first, code second', "Le test d'abord, le code ensuite"),
  },
  {
    id: 'dv-debug',
    master: 'analysis',
    minutes: 7,
    title: B('Debug with evidence, not guesses', 'Déboguez sur preuves, pas sur intuitions'),
    learn: B(
      'You will give the AI a reproduction, the exact error and the logs, and get hypotheses you can test one by one.',
      "Vous apprendrez à fournir à l'IA une reproduction, l'erreur exacte et les logs, pour obtenir des hypothèses testables.",
    ),
    act: B('Package a real bug as evidence (steps, expected, actual, logs) and ask for ranked hypotheses.',
      "Présentez un vrai bug sous forme de preuves (étapes, attendu, obtenu, logs) et demandez des hypothèses classées."),
    steps: [
      B('Write the smallest steps that reproduce the bug, and how often it happens.',
        "Écrivez les étapes minimales qui reproduisent le bug, et sa fréquence d'apparition."),
      B('Paste the full error, the stack trace and the log lines around it, cleaned of secrets.',
        "Collez l'erreur complète, la stack trace et les lignes de log voisines, nettoyées des secrets."),
      B('Say what changed recently: deploy, dependency, data, configuration.',
        "Précisez ce qui a changé récemment : déploiement, dépendance, données, configuration."),
      B('Ask for three hypotheses, each with the check that would confirm or rule it out.',
        "Demandez trois hypothèses, chacune avec la vérification qui la confirmerait ou l'écarterait."),
    ],
    trap: B(
      '"It crashes, fix it" gets a plausible patch for a bug the model imagined. The symptom may vanish while the cause stays.',
      "« Ça plante, corrige » obtient un correctif plausible pour un bug imaginé. Le symptôme peut disparaître, la cause demeure.",
    ),
    quiz: {
      q: B('The AI suggests three possible causes for a timeout. Where do you start?',
        "L'IA propose trois causes possibles à un timeout. Par laquelle commencez-vous ?"),
      options: [
        B('The one the AI ranked first, since it is the most probable', "Celle que l'IA a classée en premier, puisqu'elle est la plus probable"),
        B('The one whose fix is shortest to write and deploy', 'Celle dont le correctif est le plus court à écrire et à déployer'),
        B('The one a quick check can confirm or rule out', "Celle qu'une vérification rapide peut confirmer ou écarter"),
      ],
      answer: 2,
      why: B(
        "The model's ranking is an opinion; a check is evidence. Start with the hypothesis you can settle fastest: each one ruled out narrows the search. Patching first changes the system you are studying.",
        "Le classement du modèle est une opinion ; une vérification est une preuve. Commencez par l'hypothèse la plus rapide à trancher. Corriger d'abord modifie le système que vous étudiez.",
      ),
    },
    badge: B('Bugs chased with evidence', 'Enquêteur sur preuves'),
  },
  {
    id: 'dv-deps',
    master: 'watch',
    minutes: 6,
    title: B('Vet every package it suggests', 'Vérifiez chaque paquet proposé'),
    learn: B(
      'You will check that a suggested dependency exists, is maintained, and has a licence your project can accept.',
      "Vous apprendrez à vérifier qu'une dépendance proposée existe, est maintenue et porte une licence acceptable pour vous.",
    ),
    act: B('Take a package the AI suggested and check it in the registry: name, author, activity, licence.',
      "Prenez un paquet suggéré par l'IA et vérifiez-le dans le registre : nom, auteur, activité, licence."),
    steps: [
      B('Look the exact name up in the official registry: a near-miss name can be a trap.',
        "Cherchez le nom exact dans le registre officiel : un nom presque identique peut être un piège."),
      B('Check the last release, the open issues and the number of maintainers.',
        "Vérifiez la dernière version publiée, les tickets ouverts et le nombre de mainteneurs."),
      B('Read the licence and compare it with your company policy before installing.',
        "Lisez la licence et comparez-la à la politique de votre entreprise avant d'installer."),
      B('Ask whether the standard library or an existing dependency already does the job.',
        "Demandez si la bibliothèque standard ou une dépendance existante fait déjà le travail."),
    ],
    trap: B(
      'Installing a package because the AI named it: models invent plausible names, and attackers publish malware under such names.',
      "Installer un paquet parce que l'IA l'a nommé : les modèles inventent des noms plausibles, et des attaquants publient sous ces noms.",
    ),
    quiz: {
      q: B('The AI suggests a package under the GPL for your closed-source product. What do you do?',
        "L'IA suggère un paquet sous licence GPL pour votre produit propriétaire. Que faites-vous ?"),
      options: [
        B('Check your company policy or ask legal before using it', "Vous consultez la politique interne ou le juridique avant de l'utiliser"),
        B('Use it: open-source packages are free for any kind of use', "Vous l'utilisez : un paquet open source est libre pour tout usage"),
        B('Ask the AI whether the licence is compatible and follow its answer', "Vous demandez à l'IA si la licence convient et suivez sa réponse"),
      ],
      answer: 0,
      why: B(
        'Copyleft licences such as the GPL can impose obligations on the code that uses them, depending on how you distribute it. That is a question for your policy, not for the model.',
        "Les licences copyleft comme la GPL peuvent imposer des obligations au code qui les utilise, selon sa distribution. C'est une question pour votre politique, non pour le modèle.",
      ),
    },
    badge: B('Dependencies vetted at the door', 'Vigie des dépendances'),
  },
]

/* ================================================================== */
/* CITÉ 3 · FUSIONNER UN CODE DONT VOUS RÉPONDEZ                       */
/* ================================================================== */

const DV_SHIP: Level[] = [
  {
    id: 'dv-review',
    master: 'triage',
    minutes: 7,
    title: B("Review generated code like a colleague's", "Relisez le code généré comme celui d'un collègue"),
    learn: B(
      'You will review AI code with a checklist, because you remain responsible for every line you merge.',
      "Vous apprendrez à relire le code de l'IA avec une grille, car vous répondez de chaque ligne fusionnée.",
    ),
    act: B('Review your last generated diff line by line against the spec, and list what you would reject.',
      "Relisez votre dernier diff généré ligne à ligne, au regard de la spécification, et listez ce que vous refuseriez."),
    steps: [
      B('Check the scope first: every changed file must be justified by the spec.',
        "Vérifiez d'abord le périmètre : chaque fichier modifié doit être justifié par la spécification."),
      B('Look for invented calls: functions, options or endpoints that do not exist in your versions.',
        "Cherchez les appels inventés : fonctions, options ou endpoints absents de vos versions."),
      B('Check inputs and errors: validation, injection, what happens on null or on timeout.',
        "Contrôlez les entrées et les erreurs : validation, injection, comportement sur null ou sur timeout."),
      B('Ask the AI to review its own diff as a hostile reviewer, then judge its findings yourself.',
        "Demandez à l'IA une relecture hostile de son propre diff, puis jugez vous-même ses remarques."),
    ],
    trap: B(
      'Approving because the tests pass: tests only cover what someone thought of. The removed check or the extra file shows in the diff.',
      "Approuver parce que les tests passent : ils ne couvrent que ce qu'on a prévu. La vérification supprimée ou le fichier en trop se voient dans le diff.",
    ),
    quiz: {
      q: B('A colleague says: "The AI wrote it, so the AI is to blame if it breaks." What is true?',
        "Un collègue dit : « C'est l'IA qui l'a écrit, elle est fautive si ça casse. » Qu'est-ce qui est vrai ?"),
      options: [
        B('The person who merges the code answers for it', 'La personne qui fusionne le code en répond'),
        B('Responsibility is shared between the tool and the user', "La responsabilité est partagée entre l'outil et l'utilisateur"),
        B('The vendor of the AI tool answers for generated code', "L'éditeur de l'outil IA répond du code généré"),
      ],
      answer: 0,
      why: B(
        'A model cannot be held accountable: it cannot explain itself, fix production at night, or be held to a standard. Whoever approves the merge owns every line, as if written by hand.',
        "Un modèle ne rend pas de comptes : on ne peut ni l'interroger, ni l'appeler la nuit, ni lui imposer une norme. Qui approuve la fusion endosse chaque ligne, comme écrite à la main.",
      ),
    },
    badge: B('Every merged line owned', 'Responsable de chaque ligne'),
  },
  {
    id: 'dv-docs',
    master: 'writing',
    minutes: 6,
    title: B('Document for the developer who comes next', 'Documentez pour le développeur suivant'),
    learn: B(
      'You will get documentation that says why and how to use the code, checked claim by claim against the code.',
      "Vous obtiendrez une documentation qui dit pourquoi et comment utiliser le code, vérifiée point par point sur le code.",
    ),
    act: B('Ask for the README section of a module you changed, from the code and your reasons, then verify it.',
      "Demandez la section README d'un module modifié, à partir du code et de vos raisons, puis vérifiez-la."),
    steps: [
      B('Give the code and the reason for the change: the model sees the what, not the why.',
        "Fournissez le code et la raison de la modification : le modèle voit le quoi, pas le pourquoi."),
      B('Name the reader: a new teammate who must run, call and change this module.',
        "Nommez le lecteur : un nouveau collègue qui doit lancer, appeler et modifier ce module."),
      B('Ask for one runnable usage example and the known limits.',
        "Demandez un exemple d'utilisation exécutable et les limites connues."),
      B('Run the example and check each claim against the code before you commit it.',
        "Exécutez l'exemple et confrontez chaque affirmation au code avant de la committer."),
    ],
    trap: B(
      'Generated docs that paraphrase the code line by line: they add length, age badly, and never say why the code is this way.',
      "Une documentation qui paraphrase le code ligne à ligne : elle s'allonge, vieillit mal et ne dit jamais pourquoi le code est ainsi.",
    ),
    quiz: {
      q: B('The generated README says the function retries three times. The code retries twice. What do you do?',
        "Le README généré dit que la fonction réessaie trois fois. Le code réessaie deux fois. Que faites-vous ?"),
      options: [
        B('Change the code to three retries so that code and docs agree', 'Vous passez le code à trois essais pour que tout concorde'),
        B('Leave it: a small gap in the docs does no real harm', 'Vous laissez : un petit écart dans la doc est sans gravité'),
        B('Fix the README to match the code, and check the rest', 'Vous corrigez le README selon le code et vérifiez le reste'),
      ],
      answer: 2,
      why: B(
        'The code is what runs, so the docs must describe it. One wrong claim suggests others: check them all. Changing behaviour to fit a generated sentence is a decision, not a fix.',
        "Le code est ce qui s'exécute, la doc doit le décrire. Une affirmation fausse en annonce d'autres : vérifiez-les toutes. Changer le comportement pour une phrase générée est une décision, pas une correction.",
      ),
    },
    badge: B('Docs that match the code', 'Une doc fidèle au code'),
  },
  {
    id: 'dv-commit',
    master: 'extraction',
    minutes: 6,
    title: B('A commit message that says why', 'Un message de commit qui dit pourquoi'),
    learn: B(
      'You will turn a diff and its context into a commit message and a pull request a reviewer can trust.',
      "Vous apprendrez à tirer d'un diff et de son contexte un message de commit et une pull request dignes de confiance.",
    ),
    act: B('Give the AI your diff and the ticket, ask for a commit message, then correct what it could not know.',
      "Donnez à l'IA votre diff et le ticket, demandez un message de commit, puis corrigez ce qu'elle ne pouvait savoir."),
    steps: [
      B('Paste the diff and one or two lines on the problem it solves.',
        "Collez le diff et une ou deux lignes sur le problème qu'il résout."),
      B('Ask for your team format: a short summary line, then why, then what changed.',
        "Demandez le format de votre équipe : une ligne de résumé, puis le pourquoi, puis ce qui change."),
      B('Ask it to list what the diff changes that the ticket does not mention.',
        "Demandez-lui de lister ce que le diff modifie sans que le ticket le mentionne."),
      B('Rewrite any sentence you cannot vouch for, then sign the commit as your own.',
        "Réécrivez toute phrase dont vous ne pouvez répondre, puis signez le commit comme le vôtre."),
    ],
    trap: B(
      '"Update files", or a generated paragraph listing every changed line: the next person learns what changed, never why.',
      "« Update files », ou un paragraphe généré qui liste chaque ligne modifiée : la personne suivante apprend quoi, jamais pourquoi.",
    ),
    quiz: {
      q: B('The generated commit message says "improves performance". You measured nothing. What do you do?',
        "Le commit généré dit « améliore les performances ». Vous n'avez rien mesuré. Que faites-vous ?"),
      options: [
        B('Keep it: the change is probably faster anyway', 'Vous le gardez : la modification est sans doute plus rapide'),
        B('Remove the claim, or measure before writing it', "Vous retirez l'affirmation, ou mesurez avant de l'écrire"),
        B('Soften it into "should improve performance"', "Vous l'atténuez en « devrait améliorer les performances »"),
      ],
      answer: 1,
      why: B(
        'A commit message is a record others will rely on during an incident. An unmeasured claim, even softened, sends them down a false trail. Write what you know.',
        "Un message de commit est une trace sur laquelle d'autres s'appuieront pendant un incident. Une affirmation non mesurée, même atténuée, les égare. Écrivez ce que vous savez.",
      ),
    },
    badge: B('Commits that explain why', 'Des commits qui disent pourquoi'),
  },
]

/* ================================================================== */
/* LES TROIS CITÉS ET LE MÉTIER                                        */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: 'dv-frame', track: 'trade', glyph: 'box', tint: TINT, at: [1, 30], levels: DV_FRAME,
    title: B('Understand before you write', 'Comprendre avant d\'écrire'),
    blurb: B('Map an unfamiliar codebase, write the spec before the code, keep secrets out of every prompt.',
      "Cartographiez un code inconnu, écrivez la spécification avant le code, tenez les secrets hors de vos prompts."),
  },
  {
    id: 'dv-build', track: 'trade', glyph: 'gear', tint: TINT, at: [3, 30], levels: DV_BUILD,
    title: B('Build with a safety net', 'Construire avec un filet'),
    blurb: B('Tests before code, bugs chased with evidence, every dependency vetted before it gets in.',
      "Des tests avant le code, des bugs traqués sur preuves, chaque dépendance vérifiée avant d'entrer."),
  },
  {
    id: 'dv-ship', track: 'trade', glyph: 'check', tint: TINT, at: [5, 30], levels: DV_SHIP,
    title: B('Merge code you can answer for', 'Fusionner un code dont vous répondez'),
    blurb: B('Review generated code line by line, document for the next person, write commits that say why.',
      "Relisez le code généré ligne à ligne, documentez pour la personne suivante, écrivez des commits qui disent pourquoi."),
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

export const METIER_DEVELOPER: TradePack = {
  trade: {
    id: 'developer',
    label: B('Developer', 'Développeur'),
    who: B('You write and maintain code, and you answer for what goes into production.',
      "Vous écrivez et maintenez du code, et vous répondez de ce qui part en production."),
    glyph: 'box', tint: TINT,
    cities: ['dv-frame', 'dv-build', 'dv-ship'],
  },
  modules: MODULES,
  enrich: ENRICH,
  deep: DEEP,
}
