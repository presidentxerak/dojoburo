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
  'dv-frame/dv-map': {
    why: [
      B("A model asked to explain a whole repository draws on two sources: the files you gave it, and everything it has seen in similar projects. When the first runs out, the second fills the gap without warning. The result reads like a map of your code, but part of it is the map of an average project.",
        "Un modèle à qui l'on demande d'expliquer un dépôt entier puise à deux sources : les fichiers fournis, et tout ce qu'il a vu dans des projets semblables. Quand la première s'épuise, la seconde comble le vide sans prévenir. Le résultat ressemble à une carte de votre code, mais une partie décrit un projet moyen."),
      B("Following one request forces the model onto a single real path: this route calls this controller, which calls this service. Each link is either visible in the files you shared or it is not. A numbered list with one file per step makes the gaps visible, and the GUESS label makes them explicit.",
        "Suivre une seule requête oblige le modèle à parcourir un chemin réel : cette route appelle ce contrôleur, qui appelle ce service. Chaque maillon figure dans les fichiers fournis, ou n'y figure pas. Une liste numérotée, un fichier par étape, rend les trous visibles, et l'étiquette SUPPOSITION les rend explicites."),
      B("The last step is yours. Opening each file, or running the request with a breakpoint, turns the model's reading into a checked map. After two or three paths, you know the codebase better than any summary would have told you, and you know which parts nobody has explained yet.",
        "La dernière étape vous revient. Ouvrir chaque fichier, ou exécuter la requête avec un point d'arrêt, transforme la lecture du modèle en carte vérifiée. Après deux ou trois chemins, vous connaissez mieux le code que ne l'aurait permis un résumé, et vous savez quelles parties restent inexpliquées."),
    ],
    example: {
      context: B("Karim joined a team two days ago. His first ticket: invoices over 1,000 euros show a VAT total one cent off. He has never seen the invoicing service.",
        "Karim a rejoint une équipe il y a deux jours. Son premier ticket : les factures de plus de 1 000 euros affichent une TVA décalée d'un centime. Il n'a jamais vu le service de facturation."),
      before: B("Here is our invoicing repo. Explain how it works and where the VAT bug could be.",
        "Voici notre dépôt de facturation. Explique-moi comment il marche et où pourrait se trouver le bug de TVA."),
      after: B("I am new to this codebase and I need to trace one request, not the whole project.\nEntry point: POST /invoices, defined in api/routes.py (attached).\nFiles attached: api/routes.py, invoices/service.py, invoices/models.py.\nTrace the path of this request as a numbered list. For each step: file, function, what it does, what it passes to the next step.\nRules:\n- Only describe code you can see in the attached files.\n- When a step calls code I did not attach, write GUESS and name the file I would need.\n- Point out every place where the VAT amount is computed or rounded.\nEnd with the three questions I should ask a teammate.",
        "Je découvre ce code et je veux suivre une seule requête, pas tout le projet.\nPoint d'entrée : POST /invoices, défini dans api/routes.py (joint).\nFichiers joints : api/routes.py, invoices/service.py, invoices/models.py.\nTrace le chemin de cette requête sous forme de liste numérotée. Pour chaque étape : fichier, fonction, ce qu'elle fait, ce qu'elle transmet à l'étape suivante.\nRègles :\n- Ne décris que le code visible dans les fichiers joints.\n- Quand une étape appelle du code que je n'ai pas joint, écris SUPPOSITION et nomme le fichier qu'il me faudrait.\n- Signale chaque endroit où le montant de TVA est calculé ou arrondi.\nTermine par les trois questions que je devrais poser à un collègue."),
      takeaway: B("The second prompt narrows the question to one path, forbids silent gap-filling and aims at the bug. Karim gets a list he can check, and two GUESS lines telling him which files to open next.",
        "Le second prompt réduit la question à un chemin, interdit de combler les vides en silence et vise le bug. Karim obtient une liste vérifiable, et deux lignes SUPPOSITION qui lui indiquent quels fichiers ouvrir ensuite."),
    },
    exercise: {
      goal: B("A numbered, checked map of one request in your own codebase, with every guess identified and then resolved.",
        "Une carte numérotée et vérifiée d'une requête de votre propre code, où chaque supposition est repérée puis résolue."),
      prompt: B("I need to understand one path through an unfamiliar codebase.\nEntry point: [ROUTE, COMMAND OR JOB, AND THE FILE WHERE IT IS DEFINED]\nFiles I am attaching: [LIST OF FILES]\nWhat I am trying to do: [YOUR TICKET IN ONE LINE]\nTrace the path as a numbered list: file, function, what it does, what it passes on.\nRules: describe only code you can see. When a step depends on code I did not attach, write GUESS and name the file I should open. Highlight every step related to [THE TOPIC OF YOUR TICKET].\nFinish with the questions I should ask the team.",
        "Je dois comprendre un chemin dans un code que je ne connais pas.\nPoint d'entrée : [ROUTE, COMMANDE OU TÂCHE, ET LE FICHIER OÙ ELLE EST DÉFINIE]\nFichiers joints : [LISTE DES FICHIERS]\nCe que je cherche à faire : [VOTRE TICKET EN UNE LIGNE]\nTrace le chemin sous forme de liste numérotée : fichier, fonction, rôle, ce qu'elle transmet.\nRègles : ne décris que le code que tu vois. Quand une étape dépend de code que je n'ai pas joint, écris SUPPOSITION et nomme le fichier à ouvrir. Mets en évidence chaque étape liée à [LE SUJET DE VOTRE TICKET].\nTermine par les questions que je devrais poser à l'équipe."),
      check: [
        B("Each step names a file and a function you can find in your repository", "Chaque étape nomme un fichier et une fonction que vous retrouvez dans votre dépôt"),
        B("Every step outside the attached files is labelled as a guess", "Chaque étape hors des fichiers joints est étiquetée comme supposition"),
        B("You opened the files where the topic of your ticket is handled", "Vous avez ouvert les fichiers où le sujet de votre ticket est traité"),
        B("You corrected the map wherever the code said something else", "Vous avez corrigé la carte partout où le code disait autre chose"),
      ],
      bonus: B("Run the request once with a breakpoint or a log line at each step of the map. If execution skips a step or adds one, update the map and keep it in your notes for the next ticket.",
        "Exécutez la requête une fois avec un point d'arrêt ou une ligne de log à chaque étape de la carte. Si l'exécution saute une étape ou en ajoute une, mettez la carte à jour et conservez-la pour le prochain ticket."),
    },
    more: [
      { q: B("You attached 3 files. The traced path has 7 steps, 4 of them in files you did not attach, and none marked as a guess. What do you conclude?",
          "Vous avez joint 3 fichiers. Le chemin compte 7 étapes, dont 4 hors de ces fichiers, sans supposition signalée. Qu'en concluez-vous ?"),
        options: [
          B("The model inferred them from the imports, so they are reliable", "Le modèle les a déduites des imports, elles sont donc fiables"),
          B("The path is complete: you can start writing the fix", "Le chemin est complet : vous pouvez commencer le correctif"),
          B("Those steps may be invented: ask again with the rule", "Ces étapes peuvent être inventées : relancez avec la règle"),
        ],
        answer: 2,
        why: B("An import shows that a file exists, not what it does. Four unmarked steps outside the attached files mean the model filled gaps without saying so. Re-ask with the GUESS rule, then open those files.",
          "Un import prouve qu'un fichier existe, pas ce qu'il fait. Quatre étapes non signalées hors des fichiers joints signifient que le modèle a comblé des vides sans le dire. Relancez avec la règle SUPPOSITION, puis ouvrez ces fichiers.") },
      { q: B("Where do you start to understand an unfamiliar codebase for a specific ticket?",
          "Par où commencez-vous pour comprendre un code inconnu en vue d'un ticket précis ?"),
        options: [
          B("The README, read from top to bottom before anything else", "Le README, lu de bout en bout avant toute autre chose"),
          B("The route or command your ticket actually triggers", "La route ou la commande que votre ticket déclenche"),
          B("The largest file, since it usually holds most of the logic", "Le plus gros fichier, qui contient souvent l'essentiel"),
        ],
        answer: 1,
        why: B("Your ticket lives on one path. Starting from its entry point gives you a real thread to follow and a map you can check. A README or a big file gives you breadth, rarely the part you need today.",
          "Votre ticket vit sur un chemin précis. Partir de son point d'entrée donne un fil réel à suivre et une carte vérifiable. Un README ou un gros fichier donnent une vue large, rarement la partie utile aujourd'hui.") },
    ],
  },

  'dv-frame/dv-spec': {
    why: [
      B("A short request leaves dozens of decisions open. The model does not ask: it picks the most common answer for each one. Discounts stack or not, codes expire at midnight in some time zone, amounts round up or down. Each choice is plausible, and none of them is yours. You discover them later, one bug report at a time.",
        "Une demande courte laisse des dizaines de décisions ouvertes. Le modèle ne pose pas de question : il retient pour chacune la réponse la plus courante. Les remises se cumulent ou non, les codes expirent à minuit dans un certain fuseau, les montants s'arrondissent dans un sens. Chaque choix est plausible, aucun n'est le vôtre, et vous les découvrez un ticket de bug à la fois."),
      B("A spec closes those decisions before code exists: the behaviour with a real example, the known edge cases, what must not change. Ten lines are enough for a typical ticket. The 'must not change' list matters most, because it is the one thing the model cannot guess from your request.",
        "Une spécification tranche ces décisions avant que le code existe : le comportement avec un exemple réel, les cas limites connus, ce qui ne doit pas changer. Dix lignes suffisent pour un ticket courant. La liste « ne doit pas changer » compte le plus, car c'est la seule chose que le modèle ne peut pas deviner à partir de votre demande."),
      B("Asking for a plan before the code gives you a cheap checkpoint. Reading five files and three open questions takes a minute. Finding the same decision in 300 lines of diff takes an hour, and by then the working code pulls you toward accepting it.",
        "Demander un plan avant le code vous offre un point de contrôle peu coûteux. Lire cinq fichiers et trois questions ouvertes prend une minute. Retrouver la même décision dans 300 lignes de diff prend une heure, et le code qui fonctionne vous pousse alors à l'accepter."),
    ],
    example: {
      context: B("Léa must add discount codes to the checkout of an online shop. Her first attempt produced 400 lines across eleven files, including a change to the orders table.",
        "Léa doit ajouter des codes promo au paiement d'une boutique en ligne. Sa première tentative a produit 400 lignes dans onze fichiers, dont une modification de la table des commandes."),
      before: B("Add discount codes to our checkout. Here is the checkout code.",
        "Ajoute des codes promo à notre paiement. Voici le code du paiement."),
      after: B("Before writing any code, read this spec and give me a plan.\nBehaviour: the customer enters a code at checkout. A valid code applies a percentage discount to the basket total, before shipping. Example: basket 80.00, code SPRING10 (10%), total before shipping 72.00.\nEdge cases: unknown code (message 'Code not valid', nothing changes); expired code (same message); a second code replaces the first, never stacks; rounding to 2 decimals, half up.\nMust not change: the orders table schema, the payment module, the public signature of compute_total().\nPlan format: files to change, functions to add, and the questions this spec leaves open. No code yet.",
        "Avant d'écrire la moindre ligne, lis cette spécification et propose-moi un plan.\nComportement : le client saisit un code au paiement. Un code valide applique une remise en pourcentage sur le total du panier, avant livraison. Exemple : panier 80.00, code SPRING10 (10 %), total avant livraison 72.00.\nCas limites : code inconnu (message « Code non valide », rien ne change) ; code expiré (même message) ; un second code remplace le premier, sans cumul ; arrondi à 2 décimales, au plus proche.\nNe doit pas changer : le schéma de la table des commandes, le module de paiement, la signature publique de compute_total().\nFormat du plan : fichiers à modifier, fonctions à ajouter, et les questions que cette spécification laisse ouvertes. Pas de code pour l'instant."),
      takeaway: B("The spec settles stacking, expiry and rounding in advance, and fences off the schema and the payment module. The plan comes back with two open questions (case sensitivity, one use per customer) that Léa answers before a single line exists.",
        "La spécification tranche d'avance le cumul, l'expiration et l'arrondi, et met hors d'atteinte le schéma et le paiement. Le plan revient avec deux questions ouvertes (casse, usage unique par client) que Léa règle avant qu'une seule ligne existe."),
    },
    exercise: {
      goal: B("A ten-line spec for a real change, and a plan you corrected before any code was written.",
        "Une spécification de dix lignes pour une vraie modification, et un plan corrigé avant qu'une ligne de code soit écrite."),
      prompt: B("Do not write code yet. Read this spec and propose a plan.\nBehaviour: [WHAT HAPPENS, WITH ONE REAL EXAMPLE: INPUT AND EXPECTED OUTPUT]\nEdge cases I already know: [EMPTY, INVALID, DUPLICATE, LIMITS...]\nMust not change: [SCHEMA, PUBLIC SIGNATURES, MODULES OUTSIDE SCOPE]\nConstraints: [LANGUAGE VERSION, ALLOWED LIBRARIES, PERFORMANCE]\nGive me: the files you would change and why, the functions you would add, and every question this spec leaves open. If the plan needs to touch anything in the 'must not change' list, stop and tell me.",
        "N'écris pas encore de code. Lis cette spécification et propose un plan.\nComportement : [CE QUI SE PASSE, AVEC UN EXEMPLE RÉEL : ENTRÉE ET SORTIE ATTENDUE]\nCas limites déjà connus : [VIDE, INVALIDE, DOUBLON, BORNES...]\nNe doit pas changer : [SCHÉMA, SIGNATURES PUBLIQUES, MODULES HORS PÉRIMÈTRE]\nContraintes : [VERSION DU LANGAGE, BIBLIOTHÈQUES AUTORISÉES, PERFORMANCE]\nDonne-moi : les fichiers que tu modifierais et pourquoi, les fonctions que tu ajouterais, et chaque question que cette spécification laisse ouverte. Si le plan doit toucher un élément de la liste « ne doit pas changer », arrête-toi et dis-le-moi."),
      check: [
        B("Your behaviour line contains a real example with values", "Votre ligne de comportement contient un exemple réel avec des valeurs"),
        B("The 'must not change' list names at least one concrete file, table or signature", "La liste « ne doit pas changer » nomme au moins un fichier, une table ou une signature"),
        B("The plan lists open questions, and you answered each one", "Le plan liste des questions ouvertes, et vous avez répondu à chacune"),
        B("No file appears in the plan that the spec does not justify", "Aucun fichier du plan n'échappe à une justification par la spécification"),
      ],
      bonus: B("Save the spec in the ticket. When the code arrives, it becomes your review checklist, and its edge cases become the test list of the next city.",
        "Enregistrez la spécification dans le ticket. Quand le code arrivera, elle deviendra votre grille de relecture, et ses cas limites deviendront la liste des tests de la cité suivante."),
    },
    more: [
      { q: B("Your spec is ready. What is the main benefit of asking for a plan before the code?",
          "Votre spécification est prête. Quel est le principal intérêt de demander un plan avant le code ?"),
        options: [
          B("The generated code will be shorter and will run faster", "Le code généré sera plus court et s'exécutera plus vite"),
          B("You correct decisions while it still costs nothing", "Vous corrigez les décisions tant que cela ne coûte rien"),
          B("The model can paste the plan as comments in the code", "Le modèle peut recopier le plan en commentaires dans le code"),
        ],
        answer: 1,
        why: B("A plan is short and exposes the decisions: which files, which functions, which questions. Refusing one line of a plan costs a minute; undoing the same decision inside a working diff costs an hour.",
          "Un plan est court et expose les décisions : quels fichiers, quelles fonctions, quelles questions. Refuser une ligne de plan coûte une minute ; défaire la même décision dans un diff qui fonctionne coûte une heure.") },
      { q: B("A spec contains the behaviour with an example, the edge cases and the constraints. Which line is missing?",
          "Une spécification contient le comportement avec un exemple, les cas limites et les contraintes. Quelle ligne manque ?"),
        options: [
          B("The expected delivery date of the ticket", "La date de livraison prévue du ticket"),
          B("The coding style guide of the team", "Le guide de style de code de l'équipe"),
          B("What must not change", "Ce qui ne doit pas changer"),
          B("The name of the person who will review it", "Le nom de la personne qui relira"),
        ],
        answer: 2,
        why: B("Without a 'must not change' line, the model is free to touch schemas, signatures and neighbouring modules. It is the only boundary it cannot infer from the request.",
          "Sans ligne « ne doit pas changer », le modèle est libre de toucher schémas, signatures et modules voisins. C'est la seule frontière qu'il ne peut pas déduire de la demande.") },
    ],
  },

  'dv-frame/dv-secrets': {
    why: [
      B("What you paste into an AI tool leaves your machine. Depending on the tool and your company's contract, it may be stored, logged or reviewed. You do not control that copy and you cannot recall it. A secret in a prompt should be treated like a secret posted in a shared channel: exposed.",
        "Ce que vous collez dans un outil IA quitte votre machine. Selon l'outil et le contrat de votre entreprise, ce contenu peut être conservé, journalisé ou relu. Vous ne contrôlez pas cette copie et ne pouvez pas la rappeler. Un secret dans un prompt doit donc être traité comme un secret publié dans un canal partagé : exposé."),
      B("The model does not need real values to help. It needs the shape of the code: that a key is read from the environment, that a connection string is built here, that a record has these fields. Named placeholders and invented records of the same format keep everything the model uses and none of the risk.",
        "Le modèle n'a pas besoin des vraies valeurs pour aider. Il a besoin de la forme du code : qu'une clé est lue dans l'environnement, qu'une chaîne de connexion est construite ici, qu'un enregistrement a tels champs. Des noms explicites et des données inventées de même format conservent tout ce qu'il utilise, sans le risque."),
      B("When a secret does slip through, only revocation works: disable the key, issue a new one, update the configuration. Deleting the conversation or asking the model to forget protects nothing, because a copy may already exist elsewhere.",
        "Quand un secret passe malgré tout, seule la révocation fonctionne : désactiver la clé, en émettre une nouvelle, mettre à jour la configuration. Supprimer la conversation ou demander l'oubli ne protège rien, car une copie peut déjà exister ailleurs."),
    ],
    example: {
      context: B("Tom's payment webhook fails in staging. To ask the AI, he copies the error, the config file and a request log that contains a customer's email address.",
        "Le webhook de paiement de Tom échoue en préproduction. Pour interroger l'IA, il copie l'erreur, le fichier de configuration et un log de requête contenant l'adresse e-mail d'une cliente."),
      before: B("Why does this fail?\nconfig.py:\nPAYMENT_KEY = \"live_51Hq...\"\nDB_URL = \"postgres://admin:Pa55word@10.0.3.12/prod\"\nlog: {\"email\": \"marie.dupont@example.com\", \"amount\": 129.00} 401 Unauthorized",
        "Pourquoi ça échoue ?\nconfig.py :\nPAYMENT_KEY = \"live_51Hq...\"\nDB_URL = \"postgres://admin:Pa55word@10.0.3.12/prod\"\nlog : {\"email\": \"marie.dupont@example.com\", \"amount\": 129.00} 401 Unauthorized"),
      after: B("Our payment webhook returns 401 Unauthorized in staging. Real values are replaced by placeholders.\nconfig.py:\nPAYMENT_API_KEY = os.environ[\"PAYMENT_API_KEY\"]  # in staging, this key starts with the live prefix\nDB_URL = os.environ[\"DB_URL\"]  # staging database\nFailing request log (invented data, same shape):\n{\"email\": \"customer@example.com\", \"amount\": 129.00} -> 401 Unauthorized\nWhat are the likely causes of a 401 on this webhook, and what should I check for each?",
        "Notre webhook de paiement renvoie 401 Unauthorized en préproduction. Les vraies valeurs sont remplacées par des noms explicites.\nconfig.py :\nPAYMENT_API_KEY = os.environ[\"PAYMENT_API_KEY\"]  # en préproduction, cette clé commence par le préfixe live\nDB_URL = os.environ[\"DB_URL\"]  # base de préproduction\nLog de la requête en échec (données inventées, même forme) :\n{\"email\": \"client@example.com\", \"amount\": 129.00} -> 401 Unauthorized\nQuelles sont les causes probables d'un 401 sur ce webhook, et que dois-je vérifier pour chacune ?"),
      takeaway: B("The second version keeps what matters for the diagnosis (a live key used in staging, the 401) and removes everything that would be exposed. The model can still spot the mismatch between key and environment.",
        "La seconde version garde ce qui compte pour le diagnostic (une clé live utilisée en préproduction, le 401) et retire tout ce qui serait exposé. Le modèle peut encore repérer le décalage entre la clé et l'environnement."),
    },
    exercise: {
      goal: B("A snippet from your current work, cleaned of every secret and personal record, that still lets the AI answer your question.",
        "Un extrait de votre travail en cours, débarrassé de tout secret et de toute donnée personnelle, qui permet encore à l'IA de répondre à votre question."),
      prompt: B("I need help with this code. Secrets and personal data have been replaced.\nPlaceholders used: [LIST, e.g. PAYMENT_API_KEY = the payment provider key, read from the environment]\nCode: [YOUR CLEANED SNIPPET]\nLogs or data (invented, same format as the real ones): [YOUR CLEANED LOGS]\nMy question: [WHAT YOU NEED]\nIf you need a real value to answer, tell me which one and why, instead of guessing.",
        "J'ai besoin d'aide sur ce code. Les secrets et les données personnelles ont été remplacés.\nNoms utilisés : [LISTE, par ex. PAYMENT_API_KEY = la clé du prestataire de paiement, lue dans l'environnement]\nCode : [VOTRE EXTRAIT NETTOYÉ]\nLogs ou données (inventés, même format que les vrais) : [VOS LOGS NETTOYÉS]\nMa question : [CE DONT VOUS AVEZ BESOIN]\nSi tu as besoin d'une vraie valeur pour répondre, dis-moi laquelle et pourquoi, au lieu de deviner."),
      check: [
        B("No key, token, password or connection string with credentials remains", "Il ne reste aucune clé, aucun token, mot de passe ou chaîne de connexion avec identifiants"),
        B("No real name, email address or customer identifier remains", "Il ne reste aucun nom réel, aucune adresse e-mail ni identifiant de client"),
        B("Each placeholder says what it stands for", "Chaque nom explicite indique ce qu'il remplace"),
        B("The AI's answer did not need any of the removed values", "La réponse de l'IA n'a eu besoin d'aucune des valeurs retirées"),
      ],
      bonus: B("Read your company's policy on AI tools: which tools are approved, and for which kinds of data. If there is none, ask your security or tech lead which rule applies before your next paste.",
        "Lisez la politique de votre entreprise sur les outils IA : quels outils sont autorisés, et pour quelles données. S'il n'en existe pas, demandez à votre responsable sécurité ou technique quelle règle s'applique avant votre prochain copier-coller."),
    },
    more: [
      { q: B("Which of these can you usually paste into an AI tool as it is?",
          "Lequel de ces éléments pouvez-vous en général coller tel quel dans un outil IA ?"),
        options: [
          B("The .env file of the staging environment", "Le fichier .env de l'environnement de préproduction"),
          B("A log line containing a customer's email address", "Une ligne de log contenant l'adresse e-mail d'un client"),
          B("A function that reads a key from the environment", "Une fonction qui lit une clé dans l'environnement"),
        ],
        answer: 2,
        why: B("A function that reads a key contains the name of the variable, not its value. The .env file holds the values themselves, and the log line holds personal data. Both must be cleaned first.",
          "Une fonction qui lit une clé contient le nom de la variable, pas sa valeur. Le fichier .env contient les valeurs elles-mêmes, et la ligne de log des données personnelles : les deux doivent être nettoyés.") },
      { q: B("Why is a named placeholder such as PAYMENT_API_KEY better than simply deleting the line?",
          "Pourquoi un nom explicite comme PAYMENT_API_KEY vaut-il mieux que la suppression de la ligne ?"),
        options: [
          B("The code stays readable and the model still sees where the key is used", "Le code reste lisible et le modèle voit encore où la clé sert"),
          B("It encrypts the real key before the prompt is sent", "Il chiffre la vraie clé avant l'envoi du prompt"),
          B("It lets the model safely guess the real value", "Il permet au modèle de deviner la vraie valeur sans risque"),
        ],
        answer: 0,
        why: B("Deleting the line removes information the model may need: where the key is read, how it is passed. A placeholder keeps that structure and carries no secret. Nothing is encrypted, and nothing should be guessed.",
          "Supprimer la ligne retire une information utile : où la clé est lue, comment elle circule. Un nom explicite garde cette structure sans porter de secret. Rien n'est chiffré, et rien ne doit être deviné.") },
    ],
  },

  'dv-build/dv-tests': {
    why: [
      B("When a model writes code and tests in the same answer, both come from the same understanding of the task. If it misread the task, the tests encode the same misreading, and they pass. You get green checks that prove the code agrees with itself, not with what you needed.",
        "Quand un modèle écrit le code et les tests dans la même réponse, les deux viennent de la même compréhension de la tâche. S'il l'a mal comprise, les tests reprennent la même erreur, et ils passent. Vous obtenez des voyants verts qui prouvent que le code est d'accord avec lui-même, non avec votre besoin."),
      B("Writing tests from the spec first breaks that loop. The tests describe what you asked for before any implementation exists. Running them and watching them fail proves they test something: a test that passes against empty code checks nothing.",
        "Écrire d'abord les tests à partir de la spécification brise cette boucle. Les tests décrivent ce que vous avez demandé avant qu'une implémentation existe. Les exécuter et les voir échouer prouve qu'ils testent quelque chose : un test qui passe sur du code vide ne vérifie rien."),
      B("The last rule, never edit a test to make it pass, keeps the target fixed. When the model proposes changing an expected value, the question goes back to the spec: which one is wrong? Sometimes it is the test. You decide that, not the model.",
        "La dernière règle, ne jamais modifier un test pour le faire passer, maintient la cible fixe. Quand le modèle propose de changer une valeur attendue, la question retourne à la spécification : lequel se trompe ? Parfois, c'est le test. C'est vous qui en décidez, pas le modèle."),
    ],
    example: {
      context: B("Léa's discount spec is ready: 10% on 80.00 gives 72.00, codes never stack, rounding to 2 decimals, half up. She now needs the function apply_discount().",
        "La spécification de Léa est prête : 10 % sur 80.00 donnent 72.00, les codes ne se cumulent pas, arrondi à 2 décimales au plus proche. Il lui faut maintenant la fonction apply_discount()."),
      before: B("Write the discount function and some tests for it.",
        "Écris la fonction de remise et quelques tests."),
      after: B("Here is the spec for apply_discount(basket_total, code): [spec pasted]\nStep 1 only: write the tests, no implementation.\n- One test per behaviour and per edge case in the spec.\n- Test names state the behaviour: test_second_code_replaces_first, not test_2.\n- Use the exact values from the spec: 80.00 with SPRING10 gives 72.00.\n- Include rounding: 19.99 with a 15% code gives 16.99.\nI will run them and confirm they fail. Then I will ask for the code, and you will not be allowed to change the tests.",
        "Voici la spécification de apply_discount(basket_total, code) : [spécification collée]\nÉtape 1 seulement : écris les tests, sans implémentation.\n- Un test par comportement et par cas limite de la spécification.\n- Les noms des tests disent le comportement : test_second_code_replaces_first, pas test_2.\n- Utilise les valeurs exactes de la spécification : 80.00 avec SPRING10 donne 72.00.\n- Inclus l'arrondi : 19.99 avec un code à 15 % donne 16.99.\nJe les exécuterai et vérifierai qu'ils échouent. Ensuite je demanderai le code, et tu n'auras pas le droit de modifier les tests."),
      takeaway: B("The tests now come from the spec, with its values. They fail against empty code, so Léa knows they work. The code that follows has a fixed target, and the rounding test catches a bug on the first run.",
        "Les tests viennent désormais de la spécification, avec ses valeurs. Ils échouent sur du code vide, donc Léa sait qu'ils fonctionnent. Le code qui suit vise une cible fixe, et le test d'arrondi attrape un bug dès la première exécution."),
    },
    exercise: {
      goal: B("A set of tests written from your spec, seen failing, then passing with generated code that was not allowed to touch them.",
        "Une série de tests écrits d'après votre spécification, vus en échec, puis réussis par un code généré qui n'avait pas le droit d'y toucher."),
      prompt: B("Here is the spec for [FUNCTION OR ENDPOINT]:\n[YOUR SPEC: BEHAVIOUR WITH EXAMPLE, EDGE CASES]\nTest framework: [PYTEST, JEST, JUNIT...]\nStep 1: write the tests only. One test per behaviour and per edge case, with names that describe the behaviour, and the exact values from the spec. No implementation.\nAfter I confirm they fail, step 2: write the code that makes them pass. Rule for step 2: do not modify any test. If you think a test is wrong, say which one and why, and stop.",
        "Voici la spécification de [FONCTION OU ENDPOINT] :\n[VOTRE SPÉCIFICATION : COMPORTEMENT AVEC EXEMPLE, CAS LIMITES]\nFramework de test : [PYTEST, JEST, JUNIT...]\nÉtape 1 : écris uniquement les tests. Un test par comportement et par cas limite, avec des noms qui décrivent le comportement, et les valeurs exactes de la spécification. Aucune implémentation.\nQuand je t'aurai confirmé qu'ils échouent, étape 2 : écris le code qui les fait passer. Règle de l'étape 2 : ne modifie aucun test. Si tu penses qu'un test est faux, dis lequel et pourquoi, puis arrête-toi."),
      check: [
        B("Every edge case of your spec has its own test", "Chaque cas limite de votre spécification a son propre test"),
        B("You checked each expected value yourself, with a calculator if needed", "Vous avez vérifié vous-même chaque valeur attendue, calculatrice en main si besoin"),
        B("You ran the tests and saw them fail before any code existed", "Vous avez exécuté les tests et constaté leur échec avant que le code existe"),
        B("The final diff contains no change to the test files", "Le diff final ne contient aucune modification des fichiers de test"),
      ],
      bonus: B("Ask the AI which inputs would break the function that your tests do not cover. Keep only the cases your spec should have included, add their tests, and update the spec as well.",
        "Demandez à l'IA quelles entrées casseraient la fonction sans être couvertes par vos tests. Ne gardez que les cas que votre spécification aurait dû prévoir, ajoutez leurs tests, et mettez aussi la spécification à jour."),
    },
    more: [
      { q: B("You run the new tests before writing any code, and they all pass. What does it mean?",
          "Vous exécutez les nouveaux tests avant d'écrire le code, et tous passent. Qu'est-ce que cela signifie ?"),
        options: [
          B("The framework is misconfigured and must be reinstalled", "Le framework est mal configuré et doit être réinstallé"),
          B("They do not test the new behaviour: check them first", "Ils ne testent pas le nouveau comportement : vérifiez-les"),
          B("The code is already correct, so you can move on to the next ticket", "Le code est déjà correct, vous pouvez passer au ticket suivant"),
        ],
        answer: 1,
        why: B("The behaviour does not exist yet, so a correct test must fail. If it passes, it asserts something already true, or nothing at all. Fix the tests before asking for any code.",
          "Le comportement n'existe pas encore, donc un test correct doit échouer. S'il passe, il affirme une chose déjà vraie, ou rien du tout. Corrigez les tests avant de demander le code.") },
      { q: B("The AI writes: \"I adjusted two tests so that the suite passes.\" What do you do?",
          "L'IA écrit : « J'ai ajusté deux tests pour que la suite passe. » Que faites-vous ?"),
        options: [
          B("Accept it, since the whole suite is now green", "Vous acceptez, puisque toute la suite est verte"),
          B("Delete the two tests to keep the suite stable", "Vous supprimez les deux tests pour stabiliser la suite"),
          B("Reject the test changes and ask which spec point conflicts", "Vous refusez ces changements et demandez quel point de la spécification bloque"),
        ],
        answer: 2,
        why: B("Tests adjusted to fit the code no longer check the spec. Either the code is wrong, or the spec and its test are. That decision is yours, and it starts from the spec.",
          "Des tests ajustés au code ne vérifient plus la spécification. Soit le code est faux, soit la spécification et son test le sont. Cette décision vous revient, et elle part de la spécification.") },
    ],
  },

  'dv-build/dv-debug': {
    why: [
      B("A model cannot run your program. Faced with 'it crashes', it reasons from typical crashes in code like yours and proposes the most common fix. That fix may be right. It may also hide the symptom while the real cause stays in place, ready to fail differently next week.",
        "Un modèle ne peut pas exécuter votre programme. Face à « ça plante », il raisonne à partir des plantages typiques d'un code comme le vôtre et propose le correctif le plus courant. Ce correctif peut être juste. Il peut aussi masquer le symptôme pendant que la vraie cause demeure, prête à échouer autrement la semaine suivante."),
      B("Evidence turns guessing into reasoning. The reproduction says when it happens; the exact error and stack trace say where; the logs say in which state; the recent changes say what is new. With these four pieces, the model can connect a symptom to a cause, and you can check the connection.",
        "Les preuves transforment la devinette en raisonnement. La reproduction dit quand cela arrive ; l'erreur exacte et la stack trace disent où ; les logs disent dans quel état ; les changements récents disent ce qui est nouveau. Avec ces quatre éléments, le modèle peut relier un symptôme à une cause, et vous pouvez vérifier ce lien."),
      B("Asking for hypotheses, each with its check, keeps you in the loop. You run the check, report the result, and the next round starts from a fact. Each hypothesis ruled out is progress, even before any fix exists.",
        "Demander des hypothèses, chacune avec sa vérification, vous garde dans la boucle. Vous exécutez la vérification, rapportez le résultat, et le tour suivant part d'un fait. Chaque hypothèse écartée est un progrès, même avant tout correctif."),
    ],
    example: {
      context: B("Since Monday, about one export in twenty times out in production. Samir's team deployed a new version of the reporting service that Monday morning.",
        "Depuis lundi, environ un export sur vingt tombe en timeout en production. L'équipe de Samir a déployé une nouvelle version du service de rapports ce lundi matin."),
      before: B("Our export times out sometimes. Here is the export function. Fix it.",
        "Notre export part en timeout de temps en temps. Voici la fonction d'export. Corrige-la."),
      after: B("Bug report. Please reason from the evidence.\nReproduction: export of the 'Sales by region' report over a full year. Fails about 1 time in 20; never fails over one month.\nExpected: CSV file in under 30 s. Actual: 504 after 60 s.\nError and stack trace: [pasted, cleaned]\nLogs around a failure: the SQL query takes 58 s; on successful runs, 4 s.\nChanged on Monday: new version of the reporting service; the query now joins the returns table.\nGive me three hypotheses, most likely first. For each: what would confirm it, what would rule it out, and how long the check takes. No fix yet.",
        "Rapport de bug. Raisonne à partir des preuves.\nReproduction : export du rapport « Ventes par région » sur une année complète. Échoue environ 1 fois sur 20 ; n'échoue jamais sur un mois.\nAttendu : un fichier CSV en moins de 30 s. Obtenu : 504 au bout de 60 s.\nErreur et stack trace : [collées, nettoyées]\nLogs autour d'un échec : la requête SQL prend 58 s ; 4 s quand l'export réussit.\nChangé lundi : nouvelle version du service de rapports ; la requête joint désormais la table des retours.\nDonne-moi trois hypothèses, la plus probable d'abord. Pour chacune : ce qui la confirmerait, ce qui l'écarterait, et la durée de la vérification. Pas de correctif pour l'instant."),
      takeaway: B("The evidence points at the new join. The model's first hypothesis is a missing index on the returns table, with a two-minute check: read the query plan. Samir confirms it before touching any code.",
        "Les preuves désignent la nouvelle jointure. La première hypothèse du modèle est un index manquant sur la table des retours, avec une vérification de deux minutes : lire le plan d'exécution. Samir la confirme avant de toucher au code."),
    },
    exercise: {
      goal: B("A bug from your work written up as evidence, and a list of hypotheses each paired with a check you can actually run.",
        "Un bug de votre travail présenté sous forme de preuves, et une liste d'hypothèses associées chacune à une vérification réalisable."),
      prompt: B("Help me debug from evidence. Do not propose a fix yet.\nReproduction steps: [SMALLEST STEPS, AND HOW OFTEN IT HAPPENS]\nExpected: [WHAT SHOULD HAPPEN]  Actual: [WHAT HAPPENS]\nExact error and stack trace: [PASTE, WITHOUT SECRETS]\nLogs around the failure: [PASTE, WITHOUT PERSONAL DATA]\nWhat changed recently: [DEPLOY, DEPENDENCY, DATA, CONFIGURATION]\nGive me three hypotheses, most likely first. For each: what would confirm it, what would rule it out, and how long the check takes.",
        "Aide-moi à déboguer à partir des preuves. Ne propose pas encore de correctif.\nÉtapes de reproduction : [ÉTAPES MINIMALES, ET FRÉQUENCE]\nAttendu : [CE QUI DEVRAIT SE PASSER]  Obtenu : [CE QUI SE PASSE]\nErreur exacte et stack trace : [À COLLER, SANS SECRETS]\nLogs autour de l'échec : [À COLLER, SANS DONNÉES PERSONNELLES]\nCe qui a changé récemment : [DÉPLOIEMENT, DÉPENDANCE, DONNÉES, CONFIGURATION]\nDonne-moi trois hypothèses, la plus probable d'abord. Pour chacune : ce qui la confirmerait, ce qui l'écarterait, et la durée de la vérification."),
      check: [
        B("Someone else could reproduce the bug from your steps alone", "Une autre personne pourrait reproduire le bug avec vos seules étapes"),
        B("The error is pasted in full, not summarised", "L'erreur est collée en entier, pas résumée"),
        B("Each hypothesis comes with a check you can actually run", "Chaque hypothèse s'accompagne d'une vérification réalisable"),
        B("You ran at least one check before accepting any fix", "Vous avez mené au moins une vérification avant d'accepter un correctif"),
      ],
      bonus: B("Once the cause is confirmed, ask for a test that reproduces the bug before asking for the fix. It fails now, passes after the fix, and stops the bug from coming back unnoticed.",
        "Une fois la cause confirmée, demandez un test qui reproduit le bug avant de demander le correctif. Il échoue maintenant, passe après la correction, et empêche le bug de revenir sans bruit."),
    },
    more: [
      { q: B("The AI's patch makes the error disappear, but nobody found the cause. What is the risk?",
          "Le correctif de l'IA fait disparaître l'erreur, mais personne n'a trouvé la cause. Quel est le risque ?"),
        options: [
          B("The patch may hide the symptom while the cause remains", "Le correctif peut masquer le symptôme pendant que la cause demeure"),
          B("The patch will noticeably slow the whole application down", "Le correctif ralentira nettement l'ensemble de l'application"),
          B("There is none: if the error is gone, the bug is fixed", "Aucun : si l'erreur a disparu, le bug est corrigé"),
        ],
        answer: 0,
        why: B("Catching an exception or adding a retry can silence a symptom without touching its cause. The bug then returns in another form, harder to trace because the original error is gone.",
          "Intercepter une exception ou ajouter un nouvel essai peut faire taire un symptôme sans toucher sa cause. Le bug revient alors sous une autre forme, plus difficile à tracer puisque l'erreur d'origine a disparu.") },
      { q: B("Which piece of evidence usually narrows the search the fastest?",
          "Quel élément de preuve resserre en général le plus vite la recherche ?"),
        options: [
          B("A description of the bug in your own words", "Une description du bug avec vos propres mots"),
          B("What changed just before the bug appeared", "Ce qui a changé juste avant l'apparition du bug"),
          B("The complete list of the project's dependencies", "La liste complète des dépendances du projet"),
        ],
        answer: 1,
        why: B("A system that worked yesterday and fails today changed somewhere: code, dependency, data or configuration. Naming that change often points straight at the cause.",
          "Un système qui fonctionnait hier et échoue aujourd'hui a changé quelque part : code, dépendance, données ou configuration. Nommer ce changement désigne souvent directement la cause.") },
    ],
  },

  'dv-build/dv-deps': {
    why: [
      B("A model suggests packages the way it suggests words: by what is likely. Most suggestions exist, but some are plausible names that were never published, or old names since abandoned. Attackers know it: they register names that models tend to invent, or names one letter away from popular ones, and fill them with malicious code.",
        "Un modèle suggère des paquets comme il suggère des mots : selon ce qui est probable. La plupart existent, mais certains sont des noms plausibles jamais publiés, ou d'anciens noms abandonnés. Des attaquants le savent : ils enregistrent les noms que les modèles inventent volontiers, ou des noms à une lettre de paquets populaires, et y placent du code malveillant."),
      B("Existing is not enough. A package with one maintainer and no release in three years will not get security fixes. A licence is a legal condition: permissive licences such as MIT allow almost any use with attribution, while copyleft licences such as the GPL can require you to share your own code under certain conditions. Your company decides which it accepts.",
        "Exister ne suffit pas. Un paquet maintenu par une seule personne et sans version depuis trois ans ne recevra pas de correctifs de sécurité. Une licence est une condition juridique : les licences permissives comme MIT autorisent presque tout usage avec mention de l'auteur, les licences copyleft comme la GPL peuvent imposer de partager votre propre code sous conditions. Votre entreprise décide de ce qu'elle accepte."),
      B("Every dependency is code you ship without having written or read it. Asking whether the standard library or an existing dependency can do the job often removes the need altogether. Fewer dependencies mean fewer updates, fewer licences to track and fewer doors for an attacker.",
        "Chaque dépendance est du code que vous livrez sans l'avoir écrit ni lu. Demander si la bibliothèque standard ou une dépendance existante fait déjà le travail supprime souvent le besoin. Moins de dépendances, c'est moins de mises à jour, moins de licences à suivre et moins de portes pour un attaquant."),
    ],
    example: {
      context: B("Inès needs to parse phrases such as '3 days ago' in a Python service. The AI's first answer tells her to install a package whose name she has never seen.",
        "Inès doit interpréter des expressions comme « il y a 3 jours » dans un service Python. La première réponse de l'IA lui conseille d'installer un paquet dont elle n'a jamais entendu parler."),
      before: B("Which package should I use to parse relative dates in Python? Give me the pip install command.",
        "Quel paquet utiliser pour lire des dates relatives en Python ? Donne-moi la commande pip install."),
      after: B("I need to parse relative dates ('3 days ago', 'next Monday') in a Python service.\nConstraints: our policy accepts MIT, BSD and Apache 2.0 licences only. We already depend on python-dateutil.\n1. Can the standard library or python-dateutil do this? Show how, if so.\n2. If not, suggest at most two packages. For each: the exact name as published, what I should check in the registry (maintainers, last release, licence), and how confident you are that the name is correct.\nI will verify every name myself before installing anything.",
        "Je dois interpréter des dates relatives (« il y a 3 jours », « lundi prochain ») dans un service Python.\nContraintes : notre politique n'accepte que les licences MIT, BSD et Apache 2.0. Nous dépendons déjà de python-dateutil.\n1. La bibliothèque standard ou python-dateutil savent-elles le faire ? Si oui, montre comment.\n2. Sinon, propose au plus deux paquets. Pour chacun : le nom exact tel que publié, ce que je dois vérifier dans le registre (mainteneurs, dernière version, licence), et ton degré de certitude sur le nom.\nJe vérifierai chaque nom moi-même avant toute installation."),
      takeaway: B("The second prompt starts from what is already installed and states the licence policy. The model names one package and admits some doubt; Inès finds it in the registry, maintained and under an accepted licence, before installing it.",
        "Le second prompt part de ce qui est déjà installé et énonce la politique de licences. Le modèle nomme un paquet en signalant un doute ; Inès le retrouve dans le registre, maintenu et sous une licence acceptée, avant de l'installer."),
    },
    exercise: {
      goal: B("A written check of one dependency suggested by the AI: existence, maintenance, licence, and whether you need it at all.",
        "Une vérification écrite d'une dépendance suggérée par l'IA : existence, maintenance, licence, et nécessité réelle."),
      prompt: B("I need to [WHAT THE CODE MUST DO] in [LANGUAGE AND FRAMEWORK].\nAlready installed: [MAIN DEPENDENCIES]\nLicences our policy accepts: [LIST, OR 'UNKNOWN, I WILL ASK']\n1. Can the standard library or an installed dependency do this? Show how.\n2. If not, suggest at most two packages with their exact published name, and tell me what to check in the registry for each.\nSay clearly when you are not sure a package name is correct.",
        "Je dois [CE QUE LE CODE DOIT FAIRE] en [LANGAGE ET FRAMEWORK].\nDéjà installé : [DÉPENDANCES PRINCIPALES]\nLicences acceptées par notre politique : [LISTE, OU « INCONNUES, JE DEMANDERAI »]\n1. La bibliothèque standard ou une dépendance installée savent-elles le faire ? Montre comment.\n2. Sinon, propose au plus deux paquets avec leur nom exact tel que publié, et dis-moi ce que je dois vérifier dans le registre pour chacun.\nDis clairement quand tu n'es pas sûr du nom d'un paquet."),
      check: [
        B("You found the package in the official registry under the exact name", "Vous avez trouvé le paquet dans le registre officiel sous le nom exact"),
        B("You noted the date of the last release and the number of maintainers", "Vous avez noté la date de la dernière version et le nombre de mainteneurs"),
        B("The licence is on your company's accepted list, or you asked", "La licence figure sur la liste acceptée par votre entreprise, ou vous avez demandé"),
        B("You checked whether an existing dependency could do the job", "Vous avez vérifié si une dépendance existante pouvait faire le travail"),
      ],
      bonus: B("Run your ecosystem's audit command, the one that lists known vulnerabilities in your dependencies. Ask the AI to explain each finding, then read the advisory itself before upgrading anything.",
        "Lancez la commande d'audit de votre écosystème, celle qui liste les vulnérabilités connues de vos dépendances. Demandez à l'IA d'expliquer chaque résultat, puis lisez l'avis lui-même avant toute mise à jour."),
    },
    more: [
      { q: B("The registry shows a package with the suggested name: created three weeks ago, one maintainer, 40 downloads. What do you do?",
          "Le registre affiche un paquet au nom suggéré : créé il y a trois semaines, un mainteneur, 40 téléchargements. Que faites-vous ?"),
        options: [
          B("Install it: the name matches the suggestion exactly", "Vous l'installez : le nom correspond exactement à la suggestion"),
          B("Treat it as suspicious and look for an established alternative", "Vous le jugez suspect et cherchez une alternative établie"),
          B("Install it in a separate environment to see what it does first", "Vous l'installez dans un environnement séparé pour voir ce qu'il fait"),
        ],
        answer: 1,
        why: B("A brand-new package matching a name models tend to invent is the typical shape of a malicious upload. Installing it anywhere already runs its code. Look for a well-established alternative instead.",
          "Un paquet tout récent portant un nom que les modèles inventent volontiers a la forme typique d'une publication malveillante. L'installer, même à part, exécute déjà son code. Cherchez plutôt une alternative bien établie.") },
      { q: B("Why ask first whether the standard library can do the job?",
          "Pourquoi demander d'abord si la bibliothèque standard fait déjà le travail ?"),
        options: [
          B("Each dependency adds code, updates and a licence to track", "Chaque dépendance ajoute du code, des mises à jour et une licence à suivre"),
          B("Standard library code always runs faster than a package", "Le code de la bibliothèque standard est toujours plus rapide"),
          B("Registries limit the number of dependencies per project", "Les registres limitent le nombre de dépendances par projet"),
        ],
        answer: 0,
        why: B("The standard library is not always faster, and registries set no limit. The point is cost: every dependency is code you ship, update and answer for without having written it.",
          "La bibliothèque standard n'est pas toujours plus rapide, et les registres ne fixent aucune limite. La question est le coût : chaque dépendance est du code que vous livrez, mettez à jour et assumez sans l'avoir écrit.") },
    ],
  },

  'dv-ship/dv-review': {
    why: [
      B("Generated code fails in its own ways. It invents calls that look right but do not exist in your version of a library. It changes things nobody asked for, tidying a file or renaming a variable. It handles the normal case well and forgets the null value, the timeout and the malicious input. A review checklist aims at those specific failures.",
        "Le code généré échoue à sa manière. Il invente des appels qui semblent justes mais n'existent pas dans votre version d'une bibliothèque. Il modifie ce que personne n'a demandé, range un fichier ou renomme une variable. Il traite bien le cas normal et oublie la valeur nulle, le timeout et l'entrée malveillante. Une grille de relecture vise ces défauts précis."),
      B("Scope comes first because it is the fastest check: compare the list of changed files with the spec. Any extra file is either a hidden decision or noise, and both need an explanation. Then come invented calls, then inputs and errors, where security bugs live: unvalidated input, queries built from strings, secrets written to logs.",
        "Le périmètre vient d'abord, car c'est la vérification la plus rapide : comparez la liste des fichiers modifiés à la spécification. Tout fichier en trop est une décision cachée ou du bruit, et les deux demandent une explication. Viennent ensuite les appels inventés, puis les entrées et les erreurs, où logent les failles : entrée non validée, requête construite par concaténation, secret écrit dans un log."),
      B("Asking the model to review its own diff as a hostile reviewer surfaces some issues quickly, but its findings are suggestions, not verdicts: it may miss what it got wrong the first time. The final judgement belongs to the person who approves the merge, because that person answers for every line.",
        "Demander au modèle une relecture hostile de son propre diff fait vite ressortir certains problèmes, mais ses remarques sont des suggestions, non des verdicts : il peut manquer ce qu'il a raté la première fois. Le jugement final appartient à la personne qui approuve la fusion, car c'est elle qui répond de chaque ligne."),
    ],
    example: {
      context: B("Hugo asked the AI to add pagination to the GET /customers endpoint. The diff is 180 lines, the tests pass, and his lead asks him to review it before merging.",
        "Hugo a demandé à l'IA d'ajouter une pagination à l'endpoint GET /customers. Le diff fait 180 lignes, les tests passent, et son responsable lui demande de le relire avant la fusion."),
      before: B("Review this diff and tell me if it's OK to merge.",
        "Relis ce diff et dis-moi si je peux le fusionner."),
      after: B("Review this diff as a hostile senior reviewer. The spec was: add page and page_size parameters to GET /customers, default page_size 50, maximum 200. Nothing else.\nCheck, in this order:\n1. Scope: list every change the spec does not require.\n2. Calls: list every library function or option used, given our versions: [versions]. Flag any you are not sure exists.\n3. Inputs: what happens with page=0, page=-1, page_size=10000, page='abc'?\n4. Security: is any query built from user input without parameters?\nFor each finding: line, problem, severity (blocking or not). Do not rewrite the code.",
        "Relis ce diff comme un relecteur senior hostile. La spécification était : ajouter les paramètres page et page_size à GET /customers, page_size par défaut 50, maximum 200. Rien d'autre.\nVérifie, dans cet ordre :\n1. Périmètre : liste chaque modification que la spécification n'exige pas.\n2. Appels : liste chaque fonction ou option de bibliothèque utilisée, compte tenu de nos versions : [versions]. Signale celles dont tu n'es pas sûr qu'elles existent.\n3. Entrées : que se passe-t-il avec page=0, page=-1, page_size=10000, page='abc' ?\n4. Sécurité : une requête est-elle construite à partir d'une saisie sans paramètres ?\nPour chaque remarque : ligne, problème, gravité (bloquant ou non). Ne réécris pas le code."),
      takeaway: B("The hostile review finds a helper renamed in an unrelated file and no upper bound on page_size. Hugo checks both in the code, confirms them, and sends the diff back. The tests had passed all along.",
        "La relecture hostile repère une fonction utilitaire renommée dans un fichier sans rapport et l'absence de plafond pour page_size. Hugo vérifie les deux dans le code, les confirme et renvoie le diff. Les tests passaient depuis le début."),
    },
    exercise: {
      goal: B("A written review of a generated diff, with every finding classified as blocking or not, and your own verdict on each.",
        "Une relecture écrite d'un diff généré, où chaque remarque est classée bloquante ou non, avec votre propre verdict sur chacune."),
      prompt: B("Review this diff as a demanding senior reviewer. Do not rewrite it.\nThe spec was: [YOUR SPEC IN A FEW LINES]\nVersions: [LANGUAGE, FRAMEWORK AND LIBRARY VERSIONS]\nCheck in this order: 1. scope (changes the spec does not require), 2. calls to functions or options that may not exist in these versions, 3. inputs and errors (empty, invalid, huge, timeout), 4. security (injection, secrets, permissions).\nFor each finding: line, problem, blocking or not.\nDiff: [PASTE THE DIFF]",
        "Relis ce diff comme un relecteur senior exigeant. Ne le réécris pas.\nLa spécification était : [VOTRE SPÉCIFICATION EN QUELQUES LIGNES]\nVersions : [VERSIONS DU LANGAGE, DU FRAMEWORK ET DES BIBLIOTHÈQUES]\nVérifie dans cet ordre : 1. périmètre (modifications que la spécification n'exige pas), 2. appels à des fonctions ou options qui pourraient ne pas exister dans ces versions, 3. entrées et erreurs (vide, invalide, énorme, timeout), 4. sécurité (injection, secrets, permissions).\nPour chaque remarque : ligne, problème, bloquant ou non.\nDiff : [COLLEZ LE DIFF]"),
      check: [
        B("You compared the list of changed files with the spec yourself", "Vous avez comparé vous-même la liste des fichiers modifiés à la spécification"),
        B("You looked up at least one library call in its official documentation", "Vous avez vérifié au moins un appel de bibliothèque dans sa documentation officielle"),
        B("Each finding has your own verdict: confirmed or rejected", "Chaque remarque porte votre propre verdict : confirmée ou rejetée"),
        B("You would put your name on the merged result", "Vous signeriez de votre nom le résultat fusionné"),
      ],
      bonus: B("Turn your checklist into a short review template kept in the repository, and use it for human pull requests too. The failures of generated code are exaggerated versions of everyone's.",
        "Transformez votre grille en un court modèle de relecture conservé dans le dépôt, et utilisez-le aussi pour les pull requests humaines. Les défauts du code généré sont des versions exagérées de ceux de tout le monde."),
    },
    more: [
      { q: B("The diff adds pagination but also renames a helper function in another module. What do you do?",
          "Le diff ajoute la pagination mais renomme aussi une fonction utilitaire dans un autre module. Que faites-vous ?"),
        options: [
          B("Accept it, since the new name is clearer than the old one", "Vous acceptez, puisque le nouveau nom est plus clair"),
          B("Accept it as long as all the tests still pass", "Vous acceptez tant que tous les tests passent encore"),
          B("Ask for the rename to be removed or proposed separately", "Vous demandez de retirer le renommage ou de le proposer à part"),
        ],
        answer: 2,
        why: B("A change outside the spec is a decision nobody reviewed on purpose. Other code, or other teams, may call that function. Keep the diff to its scope, and propose the rename on its own if it is worth it.",
          "Une modification hors spécification est une décision que personne n'a examinée. D'autres parties du code, ou d'autres équipes, peuvent appeler cette fonction. Limitez le diff à son périmètre et proposez le renommage à part s'il en vaut la peine.") },
      { q: B("Which point do you check first when reviewing a generated diff?",
          "Quel point vérifiez-vous en premier dans la relecture d'un diff généré ?"),
        options: [
          B("The formatting and the naming style", "La mise en forme et le style de nommage"),
          B("The performance of each new function", "La performance de chaque nouvelle fonction"),
          B("The comments written in the code", "Les commentaires écrits dans le code"),
          B("The scope: changed files against the spec", "Le périmètre : fichiers modifiés et spécification"),
        ],
        answer: 3,
        why: B("Scope is the fastest check and it catches the most costly surprise: changes nobody asked for. Formatting can be automated, and performance matters only once you know the right code changed.",
          "Le périmètre est la vérification la plus rapide et attrape la surprise la plus coûteuse : des modifications que personne n'a demandées. La mise en forme s'automatise, et la performance ne compte qu'une fois le bon code modifié.") },
    ],
  },

  'dv-ship/dv-docs': {
    why: [
      B("The model reads code well and cannot see the intentions behind it. Given only the code, it describes what each line does, which the next developer can already read in the code. What they cannot read is why: why two retries and not five, why this cache expires after ten minutes. That part comes from you.",
        "Le modèle lit bien le code mais ne voit pas les intentions qui l'ont produit. Avec le seul code, il décrit ce que fait chaque ligne, ce que le développeur suivant lit déjà dans le code. Ce qu'il ne peut pas lire, c'est le pourquoi : pourquoi deux essais et non cinq, pourquoi ce cache expire au bout de dix minutes. Cette partie vient de vous."),
      B("Naming the reader decides what the documentation contains. A new teammate needs to run the module, call it correctly and change it without breaking it. A runnable example serves all three at once, and a list of known limits saves them from rediscovering each one in production.",
        "Nommer le lecteur décide du contenu de la documentation. Un nouveau collègue doit lancer le module, l'appeler correctement et le modifier sans le casser. Un exemple exécutable sert les trois à la fois, et une liste des limites connues lui évite de les redécouvrir une à une en production."),
      B("Documentation generated from code can still be wrong: the model may describe the usual behaviour of such a module rather than yours. Running the example and checking each claim against the code makes it trustworthy. A wrong README costs more than none, because people believe it.",
        "Une documentation tirée du code peut quand même être fausse : le modèle peut décrire le comportement habituel d'un tel module plutôt que le vôtre. Exécuter l'exemple et confronter chaque affirmation au code la rend fiable. Un README faux coûte plus cher qu'aucun README, car on le croit."),
    ],
    example: {
      context: B("Nadia rewrote the retry logic of the email-sending module: two retries, 30 seconds apart, then the message goes to a dead-letter queue. The README still describes the old behaviour.",
        "Nadia a réécrit la logique de nouvel essai du module d'envoi d'e-mails : deux essais espacés de 30 secondes, puis le message part dans une file d'échecs. Le README décrit encore l'ancien comportement."),
      before: B("Write documentation for this module. [code attached]",
        "Écris la documentation de ce module. [code joint]"),
      after: B("Update the README section of the email-sending module (code attached).\nReader: a developer who joins next month and must call this module and change its settings.\nWhat the code does not tell them, and you must include:\n- Why two retries, 30 s apart: the provider rate-limits us beyond that, and duplicate emails are worse than delays.\n- Where failed messages go: the dead-letter queue, checked daily by the on-call person.\nInclude: one runnable example of sending an email, the settings and their defaults, the known limits.\nDo not paraphrase the code line by line. Mark any statement you infer rather than read in the code with (to check).",
        "Mets à jour la section README du module d'envoi d'e-mails (code joint).\nLecteur : un développeur qui arrive le mois prochain et devra appeler ce module et modifier ses réglages.\nCe que le code ne lui dit pas, et que tu dois inclure :\n- Pourquoi deux essais espacés de 30 s : au-delà, le prestataire nous limite, et un e-mail en double est pire qu'un retard.\n- Où partent les messages en échec : la file d'échecs, consultée chaque jour par la personne d'astreinte.\nInclus : un exemple exécutable d'envoi, les réglages et leurs valeurs par défaut, les limites connues.\nNe paraphrase pas le code ligne à ligne. Marque (à vérifier) toute affirmation que tu déduis au lieu de la lire dans le code."),
      takeaway: B("The README now explains the two decisions a newcomer would otherwise question, with an example Nadia runs before committing. One inferred statement about attachments turns out to be false, and she fixes it.",
        "Le README explique désormais les deux décisions qu'un nouveau venu aurait remises en cause, avec un exemple que Nadia exécute avant de committer. Une affirmation déduite sur les pièces jointes se révèle fausse : elle la corrige."),
    },
    exercise: {
      goal: B("A README section for a module you changed, which says why, runs as written, and matches the code claim by claim.",
        "Une section README pour un module que vous avez modifié, qui dit pourquoi, s'exécute telle quelle et concorde avec le code point par point."),
      prompt: B("Write the README section for this module: [MODULE NAME] (code attached).\nReader: [WHO WILL READ IT AND WHAT THEY MUST BE ABLE TO DO]\nWhat the code does not show, to include: [YOUR REASONS FOR THE DESIGN, IN TWO OR THREE LINES]\nInclude: one runnable usage example, the settings and their defaults, the known limits.\nDo not paraphrase the code. Mark every statement you infer rather than read in the code with (to check).",
        "Écris la section README de ce module : [NOM DU MODULE] (code joint).\nLecteur : [QUI LA LIRA ET CE QU'IL DOIT POUVOIR FAIRE]\nCe que le code ne montre pas, à inclure : [VOS RAISONS DE CONCEPTION, EN DEUX OU TROIS LIGNES]\nInclus : un exemple d'utilisation exécutable, les réglages et leurs valeurs par défaut, les limites connues.\nNe paraphrase pas le code. Marque (à vérifier) toute affirmation que tu déduis au lieu de la lire dans le code."),
      check: [
        B("The section states at least one reason that is not visible in the code", "La section donne au moins une raison invisible dans le code"),
        B("You ran the example exactly as written", "Vous avez exécuté l'exemple exactement tel qu'il est écrit"),
        B("Every (to check) mark was verified, then removed or corrected", "Chaque mention (à vérifier) a été contrôlée, puis retirée ou corrigée"),
        B("Nothing in the section describes behaviour the code does not have", "Rien dans la section ne décrit un comportement absent du code"),
      ],
      bonus: B("Ask for the docstring of the one function a newcomer is most likely to misuse, with that misuse shown as what not to do. Keep it short enough to be read in the editor.",
        "Demandez la docstring de la fonction qu'un nouveau venu risque le plus de mal utiliser, avec ce mauvais usage montré comme contre-exemple. Gardez-la assez courte pour être lue dans l'éditeur."),
    },
    more: [
      { q: B("What should documentation contain that the code itself cannot show?",
          "Que doit contenir une documentation que le code lui-même ne peut pas montrer ?"),
        options: [
          B("Why the code was designed this way", "Pourquoi le code a été conçu ainsi"),
          B("The list of every function in the module", "La liste de toutes les fonctions du module"),
          B("The number of lines in each source file", "Le nombre de lignes de chaque fichier source"),
        ],
        answer: 0,
        why: B("The list of functions and the line count can be read or generated from the code at any time. The reasons behind a design exist only in someone's head until they are written down.",
          "La liste des fonctions et le nombre de lignes se lisent ou se génèrent à tout moment depuis le code. Les raisons d'une conception n'existent que dans une tête tant qu'elles ne sont pas écrites.") },
      { q: B("The AI marked one statement (to check). The code shows it is false. What does it tell you?",
          "L'IA a marqué une affirmation (à vérifier). Le code montre qu'elle est fausse. Qu'en retenez-vous ?"),
        options: [
          B("The whole README must be thrown away and rewritten", "Le README entier est à jeter et à réécrire"),
          B("The mark worked: fix it and check similar statements", "Le marquage a fonctionné : corrigez et vérifiez les affirmations voisines"),
          B("The model cannot be used for documentation work", "Le modèle est inutilisable pour la documentation"),
        ],
        answer: 1,
        why: B("The mark did its job: it showed you where the model was guessing. Fix that statement, and look for others of the same kind that might have slipped through without a mark.",
          "Le marquage a joué son rôle : il vous a montré où le modèle devinait. Corrigez cette affirmation, et cherchez-en d'autres du même type qui auraient pu passer sans marque.") },
    ],
  },

  'dv-ship/dv-commit': {
    why: [
      B("A diff shows what changed. The model reads it well and can summarise it, but that is the part a reviewer could rebuild alone. The part nobody can rebuild is the reason: the bug report, the incident, the constraint. The model only knows it if you give it, which is why the ticket belongs in the prompt.",
        "Un diff montre ce qui a changé. Le modèle le lit bien et sait le résumer, mais c'est la partie qu'un relecteur pourrait reconstituer seul. Celle que personne ne peut reconstituer, c'est la raison : le rapport de bug, l'incident, la contrainte. Le modèle ne la connaît que si vous la lui donnez, d'où la place du ticket dans le prompt."),
      B("A consistent format does the rest: one summary line under about fifty characters, a blank line, the why, then what changed. Tools and colleagues scan the first line; the body is read months later, during an incident, by someone who needs the reason.",
        "Un format constant fait le reste : une ligne de résumé d'une cinquantaine de caractères, une ligne vide, le pourquoi, puis ce qui change. Les outils et les collègues parcourent la première ligne ; le corps est lu des mois plus tard, pendant un incident, par quelqu'un qui a besoin de la raison."),
      B("Asking the model to list what the diff changes beyond the ticket is a free last review: each item is either a missing sentence or a change that should not be there. And once you sign the commit, the message is your statement. Rewrite anything you cannot stand behind.",
        "Demander au modèle ce que le diff modifie au-delà du ticket offre une dernière relecture gratuite : chaque élément est une phrase manquante ou une modification qui n'a rien à faire là. Et une fois le commit signé, le message devient votre déclaration. Réécrivez tout ce que vous ne pouvez pas assumer."),
    ],
    example: {
      context: B("Karim fixed the VAT rounding bug on invoices over 1,000 euros. His diff touches the rounding function and a test file, and the team format requires a why.",
        "Karim a corrigé le bug d'arrondi de TVA sur les factures de plus de 1 000 euros. Son diff touche la fonction d'arrondi et un fichier de test, et le format de l'équipe exige un pourquoi."),
      before: B("Write a commit message for this diff. [diff pasted]",
        "Écris un message de commit pour ce diff. [diff collé]"),
      after: B("Write a commit message for this diff, in our format: summary line under 50 characters, blank line, then why, then what changed.\nContext (ticket INV-482): invoices over 1,000 euros showed VAT one cent off, because VAT was rounded on each line and then summed. Our accounting rule requires rounding on the total.\nAlso list, separately, anything the diff changes that this context does not explain.\nDo not claim effects I have not measured (performance, memory).\n[diff pasted]",
        "Écris un message de commit pour ce diff, dans notre format : ligne de résumé de moins de 50 caractères, ligne vide, puis le pourquoi, puis ce qui change.\nContexte (ticket INV-482) : les factures de plus de 1 000 euros affichaient une TVA décalée d'un centime, parce que la TVA était arrondie ligne par ligne puis additionnée. Notre règle comptable impose l'arrondi sur le total.\nListe aussi, à part, tout ce que le diff modifie sans que ce contexte l'explique.\nN'affirme aucun effet que je n'ai pas mesuré (performance, mémoire).\n[diff collé]"),
      takeaway: B("The message states the cause and the accounting rule, which the diff alone could not tell. The separate list flags an import reordering Karim had not noticed; he removes it from the commit.",
        "Le message énonce la cause et la règle comptable, ce que le diff seul ne pouvait pas dire. La liste séparée signale un réordonnancement d'imports que Karim n'avait pas vu ; il le retire du commit."),
    },
    exercise: {
      goal: B("A commit message for your last change that states the why, contains nothing you cannot vouch for, and follows your team's format.",
        "Un message de commit pour votre dernière modification, qui dit pourquoi, ne contient rien que vous ne puissiez garantir et suit le format de l'équipe."),
      prompt: B("Write a commit message for this diff in this format: [YOUR TEAM FORMAT, e.g. summary under 50 characters, blank line, why, what changed].\nContext: [THE TICKET OR THE PROBLEM, IN TWO LINES]\nSeparately, list anything the diff changes that the context does not explain.\nDo not claim any effect I have not measured.\nDiff: [PASTE THE DIFF]",
        "Écris un message de commit pour ce diff dans ce format : [LE FORMAT DE VOTRE ÉQUIPE, par ex. résumé de moins de 50 caractères, ligne vide, pourquoi, ce qui change].\nContexte : [LE TICKET OU LE PROBLÈME, EN DEUX LIGNES]\nÀ part, liste tout ce que le diff modifie sans que le contexte l'explique.\nN'affirme aucun effet que je n'ai pas mesuré.\nDiff : [COLLEZ LE DIFF]"),
      check: [
        B("The summary line says what the change does, in under 50 characters", "La ligne de résumé dit ce que fait la modification, en moins de 50 caractères"),
        B("The body gives the reason, which the diff alone does not show", "Le corps donne la raison, que le diff seul ne montre pas"),
        B("You dealt with every item on the separate list: explained or removed", "Vous avez traité chaque élément de la liste séparée : expliqué ou retiré"),
        B("You could defend every sentence if asked during a review", "Vous pourriez défendre chaque phrase si on vous interrogeait en relecture"),
      ],
      bonus: B("Use the same inputs to ask for the pull request description, with one more section: how to test it. A reviewer who can reproduce your check in two minutes reviews faster and better.",
        "Utilisez les mêmes éléments pour demander la description de la pull request, avec une section de plus : comment la tester. Un relecteur capable de reproduire votre vérification en deux minutes relit plus vite et mieux."),
    },
    more: [
      { q: B("Which part of a commit message can the model not produce from the diff alone?",
          "Quelle partie d'un message de commit le modèle ne peut-il pas produire à partir du seul diff ?"),
        options: [
          B("The list of the files that were changed", "La liste des fichiers modifiés"),
          B("The short summary of what the code now does", "Le bref résumé de ce que fait désormais le code"),
          B("The reason for the change", "La raison de la modification"),
        ],
        answer: 2,
        why: B("Files and behaviour are in the diff, so the model can describe them. The reason lives in the ticket, the incident or your head. Without it, the message only repeats what the diff already shows.",
          "Les fichiers et le comportement figurent dans le diff, le modèle peut donc les décrire. La raison vit dans le ticket, l'incident ou votre tête. Sans elle, le message répète ce que le diff montre déjà.") },
      { q: B("The separate list reveals a timeout value you did not mean to change. What do you do?",
          "La liste séparée révèle une valeur de timeout que vous ne vouliez pas modifier. Que faites-vous ?"),
        options: [
          B("Revert it, or justify it in a commit of its own", "Vous l'annulez, ou la justifiez dans un commit à part"),
          B("Mention it in the commit message, then merge as planned", "Vous la mentionnez dans le message, puis fusionnez comme prévu"),
          B("Leave it in, since the tests are passing", "Vous la laissez, puisque les tests passent"),
        ],
        answer: 0,
        why: B("An unintended change is not made acceptable by being mentioned or by passing tests. Revert it, or if it is truly needed, give it its own commit with its own reason.",
          "Une modification involontaire ne devient pas acceptable parce qu'elle est mentionnée ou que les tests passent. Annulez-la, ou si elle est vraiment nécessaire, donnez-lui son propre commit avec sa propre raison.") },
    ],
  },
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
