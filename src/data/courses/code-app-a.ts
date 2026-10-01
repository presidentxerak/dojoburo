// LE COURS « CODER UNE APP », PARTIE A · les fondations. Voir ./types et ./index.
//
// TROIS CITÉS, DANS L'ORDRE OÙ L'ON S'EN SERT · le terminal (là où tout se
// pilote), Git et GitHub (là où le code se garde et se partage), puis Claude
// Code (celui qui écrit avec vous, sous votre contrôle). La partie B prend la
// suite avec Supabase, Vercel, le projet complet et la production.
//
// LE FIL ROUGE · « Habitudes », un petit suivi d'habitudes : React, Vite et
// TypeScript côté navigateur, Supabase pour les comptes et les données, Vercel
// pour la mise en ligne, le code sur GitHub, écrit avec Claude Code. Chaque
// dojo fait faire un vrai pas de sa construction, ou de l'installation des
// outils qui la servent.
import { B } from '../bilingual'
import type { Level, Module } from '../curriculum'
import type { Enrichment } from '../enrich/types'
import type { Deepening } from '../deep/types'
import type { CoursePart } from './types'

const TINT = '#22d3ee'

/* ================================================================== */
/* CITÉ 1 · LE TERMINAL                                                */
/* ================================================================== */

const CA_TERMINAL: Level[] = [
  {
    id: 'ca-shell',
    master: 'support',
    minutes: 8,
    title: B('Terminal, shell, prompt: the words and the window', "Le terminal, le shell et l'invite de commande"),
    learn: B(
      'You will know what a terminal and a shell are, read a prompt, and type a command with its arguments.',
      "Vous saurez ce que sont un terminal et un shell, lire l'invite et taper une commande avec ses arguments.",
    ),
    act: B('Open the terminal you will use for the whole Habitudes project, name its shell, and run three first commands.',
      "Ouvrez le terminal qui servira à tout le projet Habitudes, identifiez son shell et lancez trois premières commandes."),
    steps: [
      B('macOS: open Terminal from Spotlight. Windows: install Windows Terminal with WSL (Ubuntu), or use PowerShell.',
        "Sur macOS, ouvrez Terminal via Spotlight. Sous Windows, installez Windows Terminal avec WSL (Ubuntu), ou utilisez PowerShell."),
      B('Read the prompt: it shows who you are, on which machine, in which folder, and that it waits for a command.',
        "Lisez l'invite : elle indique qui vous êtes, sur quelle machine, dans quel dossier, et qu'elle attend une commande."),
      B('Run `echo $SHELL` (macOS, Linux, WSL) to name your shell: usually zsh on macOS, bash on Ubuntu.',
        "Lancez `echo $SHELL` (macOS, Linux, WSL) pour nommer votre shell : zsh en général sur macOS, bash sur Ubuntu."),
      B('Type `ls -l ~`: `ls` is the command, `-l` an option, `~` an argument. Spaces separate them.',
        "Tapez `ls -l ~` : `ls` est la commande, `-l` une option, `~` un argument. Les espaces les séparent."),
    ],
    trap: B(
      'Pasting a command found online without reading it: the terminal runs it at once, with your rights, and never asks whether you meant it.',
      "Coller une commande trouvée en ligne sans la lire : le terminal l'exécute aussitôt, avec vos droits, sans demander si c'était voulu.",
    ),
    quiz: {
      q: B('In `npm install react`, what is `react`?', 'Dans `npm install react`, que représente `react` ?'),
      options: [
        B('The shell that interprets the whole command line', 'Le shell qui interprète toute la ligne de commande'),
        B('An argument passed to the npm command', 'Un argument transmis à la commande npm'),
        B('An option that changes how npm itself behaves', 'Une option qui modifie le comportement de npm lui-même'),
      ],
      answer: 1,
      why: B(
        'The first word is the program (npm), the next words are arguments it receives: here a subcommand, install, and a package name. Options usually start with a dash.',
        "Le premier mot est le programme (npm), les suivants sont les arguments qu'il reçoit : ici une sous-commande, install, et un nom de paquet. Les options commencent en général par un tiret.",
      ),
    },
    badge: B('First command typed', 'Première commande tapée'),
  },
  {
    id: 'ca-files',
    master: 'extraction',
    minutes: 9,
    title: B('Move around and handle files from the terminal', 'Se déplacer et gérer ses fichiers au terminal'),
    learn: B(
      'You will navigate folders, create, copy, move and delete files, and tell absolute paths from relative ones.',
      'Vous saurez parcourir les dossiers, créer, copier, déplacer, supprimer des fichiers, et distinguer chemin absolu et relatif.',
    ),
    act: B('Create the ~/projets folder that will hold Habitudes, and practise every command on a scratch folder inside it.',
      "Créez le dossier ~/projets qui accueillera Habitudes, et exercez chaque commande sur un dossier d'essai à l'intérieur."),
    steps: [
      B('Run `pwd` to see where you are, `ls` to list, `cd projets` to enter, `cd ..` to go up, `cd ~` to go home.',
        "Lancez `pwd` pour savoir où vous êtes, `ls` pour lister, `cd projets` pour entrer, `cd ..` pour remonter, `cd ~` pour rentrer."),
      B('Create with `mkdir -p ~/projets/essai` and `touch notes.txt`, then copy with `cp` and rename or move with `mv`.',
        'Créez avec `mkdir -p ~/projets/essai` et `touch notes.txt`, copiez avec `cp`, renommez ou déplacez avec `mv`.'),
      B('Press Tab to complete a name and the up arrow to recall a command: fewer typos, less typing.',
        'Appuyez sur Tab pour compléter un nom et sur la flèche du haut pour rappeler une commande : moins de fautes, moins de frappe.'),
      B('Delete with `rm notes.txt`, only after `pwd` and `ls` have shown exactly what you are about to remove.',
        "Supprimez avec `rm notes.txt`, seulement après que `pwd` et `ls` vous ont montré exactement ce que vous allez effacer."),
    ],
    trap: B(
      '`rm -rf` on a path you have not checked: there is no recycle bin in the terminal, and a stray space can widen the target.',
      "Un `rm -rf` sur un chemin non vérifié : le terminal n'a pas de corbeille, et une espace égarée peut élargir la cible.",
    ),
    quiz: {
      q: B('You are in ~/projets/habitudes. Which path points to ~/projets/essai/notes.txt?',
        'Vous êtes dans ~/projets/habitudes. Quel chemin désigne ~/projets/essai/notes.txt ?'),
      options: [
        B('essai/notes.txt, relative to the current folder', 'essai/notes.txt, relatif au dossier courant'),
        B('/essai/notes.txt, starting from the root of the disk', '/essai/notes.txt, en partant de la racine du disque'),
        B('../essai/notes.txt, one level up then into essai', '../essai/notes.txt : un niveau plus haut, puis essai'),
      ],
      answer: 2,
      why: B(
        'A relative path starts from where you are: `..` goes up to ~/projets, then essai/notes.txt. A path starting with / starts from the root of the disk, not from your home folder.',
        "Un chemin relatif part de l'endroit où vous êtes : `..` remonte à ~/projets, puis essai/notes.txt. Un chemin qui commence par / part de la racine du disque, pas de votre dossier personnel.",
      ),
    },
    badge: B('Paths read, files handled', 'Maître des chemins'),
  },
  {
    id: 'ca-node',
    master: 'tools',
    minutes: 10,
    title: B('Install Node.js and start the Habitudes project', 'Installer Node.js et créer le projet Habitudes'),
    learn: B(
      'You will install Node.js LTS and npm, create a React + Vite + TypeScript project and know what package.json does.',
      'Vous installerez Node.js LTS et npm, créerez un projet React, Vite et TypeScript et saurez à quoi sert package.json.',
    ),
    act: B('Install Node.js LTS, check it, then generate the Habitudes app with Vite and open it in your browser.',
      "Installez Node.js LTS, vérifiez-le, puis générez l'app Habitudes avec Vite et ouvrez-la dans votre navigateur."),
    steps: [
      B('Install the LTS version from nodejs.org, or with nvm (`nvm install --lts`), then check `node -v` and `npm -v`.',
        'Installez la version LTS depuis nodejs.org, ou avec nvm (`nvm install --lts`), puis vérifiez `node -v` et `npm -v`.'),
      B('In ~/projets, run `npm create vite@latest habitudes -- --template react-ts`, then `cd habitudes`.',
        'Dans ~/projets, lancez `npm create vite@latest habitudes -- --template react-ts`, puis `cd habitudes`.'),
      B('Run `npm install`: npm reads package.json and downloads the dependencies into node_modules.',
        'Lancez `npm install` : npm lit package.json et télécharge les dépendances dans node_modules.'),
      B('Run `npm run dev`, open the local address it prints (often localhost:5173), and stop it with Ctrl+C.',
        "Lancez `npm run dev`, ouvrez l'adresse locale affichée (souvent localhost:5173), puis arrêtez-le avec Ctrl+C."),
    ],
    trap: B(
      'Editing or committing node_modules: `npm install` rebuilds it from package.json and the lock file, so your changes vanish.',
      'Modifier ou committer node_modules : `npm install` le reconstruit depuis package.json et le fichier de verrouillage, vos changements disparaissent.',
    ),
    quiz: {
      q: B('A teammate clones Habitudes. The node_modules folder is missing. What should they run?',
        'Une collègue clone Habitudes. Le dossier node_modules est absent. Que doit-elle lancer ?'),
      options: [
        B('`npm install`, which rebuilds it from package.json', "`npm install`, qui le reconstruit d'après package.json"),
        B('`npm run dev`, which downloads whatever is missing on the fly', '`npm run dev`, qui télécharge au vol ce qui manque'),
        B('Nothing: they ask you to send your node_modules as a zip', 'Rien : elle vous demande votre node_modules en archive zip'),
      ],
      answer: 0,
      why: B(
        'package.json lists the dependencies and the lock file pins their exact versions. `npm install` rebuilds node_modules from them on any machine, so the folder is never shared.',
        "package.json liste les dépendances, le fichier de verrouillage fixe leurs versions exactes. `npm install` reconstruit node_modules à partir d'eux sur toute machine : ce dossier ne se partage pas.",
      ),
    },
    badge: B('Toolchain installed', "Chaîne d'outils installée"),
  },
  {
    id: 'ca-env',
    master: 'watch',
    minutes: 9,
    title: B('Environment variables, PATH and .env files', "Variables d'environnement, PATH et fichiers .env"),
    learn: B(
      'You will know what PATH and environment variables do, and keep secrets out of the code in a .env.local file.',
      'Vous comprendrez le rôle de PATH et des variables d\'environnement, et tiendrez les secrets hors du code.',
    ),
    act: B('Create the .env.local file of Habitudes with a harmless test variable, and read it from the app.',
      "Créez le fichier .env.local d'Habitudes avec une variable de test sans danger, et lisez-la depuis l'app."),
    steps: [
      B('Run `echo $PATH`: it lists the folders where the shell looks for programs, which is how `node` is found.',
        'Lancez `echo $PATH` : la liste des dossiers où le shell cherche les programmes. C\'est ainsi que `node` est trouvé.'),
      B('At the root of Habitudes, create .env.local with `VITE_APP_NAME=Habitudes` and check that .gitignore covers it.',
        "À la racine d'Habitudes, créez .env.local avec `VITE_APP_NAME=Habitudes` et vérifiez que .gitignore le couvre."),
      B('Read it in the front with `import.meta.env.VITE_APP_NAME`; a Node script reads `process.env` instead.',
        'Lisez-la côté navigateur avec `import.meta.env.VITE_APP_NAME` ; un script Node lit `process.env` à la place.'),
      B('Restart `npm run dev` after each change to .env.local: Vite reads the file when it starts.',
        'Relancez `npm run dev` après chaque modification de .env.local : Vite lit le fichier au démarrage.'),
    ],
    trap: B(
      'Prefixing a secret key with VITE_ to make it work: every VITE_ variable is copied into the code sent to browsers, where anyone can read it.',
      'Préfixer une clé secrète par VITE_ pour la faire marcher : toute variable VITE_ est recopiée dans le code envoyé aux navigateurs, lisible par tous.',
    ),
    quiz: {
      q: B('Which value can safely live in a VITE_ variable of Habitudes?',
        "Quelle valeur peut figurer sans risque dans une variable VITE_ d'Habitudes ?"),
      options: [
        B('The admin key that bypasses every rule of the database', "La clé d'administration qui contourne toutes les règles de la base"),
        B('The password of the email account that sends reminders', 'Le mot de passe du compte mail qui envoie les rappels'),
        B('A private payment API key, as long as the repo is private', "Une clé privée d'API de paiement, tant que le dépôt est privé"),
        B('The public URL of the API the front calls', "L'adresse publique de l'API qu'appelle le front"),
      ],
      answer: 3,
      why: B(
        'A VITE_ variable ends up in the JavaScript downloaded by every visitor. Only values designed to be public belong there; anything that grants power stays on a server.',
        'Une variable VITE_ finit dans le JavaScript téléchargé par chaque visiteur. Seules des valeurs conçues pour être publiques y ont leur place ; ce qui donne un pouvoir reste côté serveur.',
      ),
    },
    badge: B('Secrets kept out of the code', 'Secrets hors du code'),
  },
]

/* ================================================================== */
/* CITÉ 2 · GIT ET GITHUB                                              */
/* ================================================================== */

const CA_GIT: Level[] = [
  {
    id: 'ca-commit',
    master: 'writing',
    minutes: 10,
    title: B("Git's model: working tree, staging, commit", 'Le modèle de Git : copie de travail, index, commit'),
    learn: B(
      'You will understand how Git records history and make clean commits with messages that say why.',
      "Vous comprendrez comment Git enregistre l'historique et ferez des commits propres, aux messages qui disent pourquoi.",
    ),
    act: B('Turn the Habitudes folder into a Git repository and record its first two commits with clear messages.',
      'Faites du dossier Habitudes un dépôt Git et enregistrez ses deux premiers commits, avec des messages clairs.'),
    steps: [
      B('Set your identity once with `git config --global user.name` and `user.email`, then run `git init` in habitudes.',
        'Déclarez votre identité une fois avec `git config --global user.name` et `user.email`, puis lancez `git init` dans habitudes.'),
      B('Run `git status`: it shows what changed, what is staged and what Git does not track yet.',
        'Lancez `git status` : il montre ce qui a changé, ce qui est indexé et ce que Git ne suit pas encore.'),
      B('Stage with `git add .`, check with `git status`, then record with `git commit -m "Create the Vite skeleton"`.',
        'Indexez avec `git add .`, vérifiez avec `git status`, puis enregistrez avec `git commit -m "Crée le squelette Vite"`.'),
      B('Change the title in App.tsx, commit that change alone, then read the history with `git log --oneline`.',
        "Changez le titre dans App.tsx, committez ce seul changement, puis lisez l'historique avec `git log --oneline`."),
    ],
    trap: B(
      'One giant commit called "update" at the end of the day: nobody, you included, can later tell what changed, why, or what to undo.',
      'Un commit géant nommé « update » en fin de journée : personne, vous compris, ne saura plus dire ce qui a changé, pourquoi, ni quoi annuler.',
    ),
    quiz: {
      q: B('You ran `git add App.tsx`, then edited App.tsx again. What will `git commit` record?',
        'Vous avez lancé `git add App.tsx`, puis modifié App.tsx à nouveau. Que va enregistrer `git commit` ?'),
      options: [
        B('Both versions, merged automatically into a single change', 'Les deux versions, fusionnées automatiquement en un seul changement'),
        B('The version you staged, not the edits made after `git add`', 'La version indexée, sans les modifications faites après `git add`'),
        B('The latest version on disk, since commit always reads the file', 'La dernière version sur le disque, car commit relit toujours le fichier'),
      ],
      answer: 1,
      why: B(
        'git add copies the state of the file into the staging area at that moment. The commit records the staging area, so later edits wait for another `git add`.',
        "git add copie l'état du fichier dans l'index à cet instant. Le commit enregistre l'index : les modifications ultérieures attendent un nouveau `git add`.",
      ),
    },
    badge: B('First commits recorded', 'Premiers commits enregistrés'),
  },
  {
    id: 'ca-branch',
    master: 'analysis',
    minutes: 10,
    title: B('Branches, merges and conflicts without panic', 'Branches, merges et conflits, sans paniquer'),
    learn: B(
      'You will work on a branch, merge it into main and resolve a conflict calmly, line by line.',
      'Vous travaillerez sur une branche, la fusionnerez dans main et résoudrez un conflit calmement, ligne par ligne.',
    ),
    act: B('Build the habit list of Habitudes on its own branch, merge it into main, and resolve a conflict made on purpose.',
      'Construisez la liste des habitudes sur sa propre branche, fusionnez-la dans main et résolvez un conflit créé exprès.'),
    steps: [
      B('From a clean main, run `git switch -c feature/habit-list`, then build and commit the list there.',
        'Depuis un main propre, lancez `git switch -c feature/liste-habitudes`, puis construisez et committez la liste sur cette branche.'),
      B('Go back with `git switch main`, change the same title line in App.tsx and commit, to provoke a conflict.',
        'Revenez avec `git switch main`, modifiez la même ligne de titre dans App.tsx et committez, pour provoquer un conflit.'),
      B('Run `git merge feature/habit-list`, read the markers <<<<<<<, ======= and >>>>>>>, and keep the right lines.',
        'Lancez `git merge feature/liste-habitudes`, lisez les marqueurs <<<<<<<, ======= et >>>>>>>, et gardez les bonnes lignes.'),
      B('Remove the markers, run the app, then `git add` and `git commit`. If lost, `git merge --abort` starts over.',
        "Retirez les marqueurs, lancez l'app, puis `git add` et `git commit`. En cas de doute, `git merge --abort` annule tout."),
    ],
    trap: B(
      'Resolving a conflict by keeping one whole side without reading the other: the merge succeeds, and the work of the other branch silently disappears.',
      "Résoudre un conflit en gardant tout un côté sans lire l'autre : le merge réussit, et le travail de l'autre branche disparaît sans bruit.",
    ),
    quiz: {
      q: B('A merge stops with a conflict in App.tsx. What is the calmest first move?',
        'Un merge s\'arrête sur un conflit dans App.tsx. Quel est le premier geste le plus serein ?'),
      options: [
        B('Run `git status` to see which files conflict, then read each one', 'Lancer `git status` pour voir les fichiers en conflit, puis lire chacun'),
        B('Delete the branch and redo the feature from scratch on main', 'Supprimer la branche et refaire la fonctionnalité de zéro sur main'),
        B('Force the merge so that Git keeps the most recent version of the file', 'Forcer le merge pour que Git garde la version la plus récente du fichier'),
      ],
      answer: 0,
      why: B(
        'A conflict is not an error: Git refuses to choose between two edits of the same lines. status lists the files, the markers show both versions, and you decide. Nothing is lost.',
        'Un conflit n\'est pas une erreur : Git refuse de choisir entre deux modifications des mêmes lignes. status liste les fichiers, les marqueurs montrent les deux versions, vous tranchez. Rien n\'est perdu.',
      ),
    },
    badge: B('Conflict resolved calmly', 'Conflit résolu sans panique'),
  },
  {
    id: 'ca-github',
    master: 'growth',
    minutes: 11,
    title: B('GitHub: publish the repo and open a pull request', 'GitHub : publier le dépôt et ouvrir une pull request'),
    learn: B(
      'You will link Git to GitHub, push Habitudes online, pull changes and review work through pull requests.',
      'Vous relierez Git à GitHub, pousserez Habitudes en ligne, récupérerez les changements et relirez par pull request.',
    ),
    act: B('Publish Habitudes as a private GitHub repo, push main, then open your first pull request from a branch.',
      'Publiez Habitudes dans un dépôt GitHub privé, poussez main, puis ouvrez votre première pull request depuis une branche.'),
    steps: [
      B('Create a GitHub account, install the GitHub CLI and run `gh auth login`: it sets up HTTPS or an SSH key for you.',
        'Créez un compte GitHub, installez la CLI GitHub et lancez `gh auth login` : elle configure pour vous HTTPS ou une clé SSH.'),
      B('Create an empty private repo named habitudes, then `git remote add origin <URL>` and `git push -u origin main`.',
        'Créez un dépôt privé vide nommé habitudes, puis `git remote add origin <URL>` et `git push -u origin main`.'),
      B('Push a branch with `git push -u origin feature/stats`, then open a pull request with `gh pr create` that says why.',
        'Poussez une branche avec `git push -u origin feature/stats`, puis ouvrez une pull request avec `gh pr create` qui dit pourquoi.'),
      B('Read the diff of the pull request, merge it on GitHub, then run `git switch main` and `git pull` locally.',
        'Relisez le diff de la pull request, fusionnez-la sur GitHub, puis lancez `git switch main` et `git pull` en local.'),
    ],
    trap: B(
      'Typing your GitHub password for `git push`: GitHub refuses passwords over HTTPS. Use `gh auth login` or an SSH key, never a password in a script.',
      'Taper votre mot de passe GitHub pour `git push` : GitHub le refuse en HTTPS. Utilisez `gh auth login` ou une clé SSH, jamais un mot de passe dans un script.',
    ),
    quiz: {
      q: B('What does `-u` add in `git push -u origin main`?', 'Qu\'apporte `-u` dans `git push -u origin main` ?'),
      options: [
        B('It uploads the whole history again, replacing what is on GitHub', "Il renvoie tout l'historique, en remplaçant ce qui est sur GitHub"),
        B('It updates GitHub only if nobody else has pushed in the meantime', "Il ne met GitHub à jour que si personne d'autre n'a poussé entre-temps"),
        B('It links main to origin/main for later push and pull', 'Il relie main à origin/main pour les push et pull suivants'),
      ],
      answer: 2,
      why: B(
        '-u (--set-upstream) records origin/main as the upstream of your local main. Then a plain `git push` or `git pull` knows where to go, and `git status` says if you are ahead or behind.',
        '-u (--set-upstream) fait d\'origin/main la branche amont de votre main local. Ensuite, un simple `git push` ou `git pull` sait où aller, et `git status` dit si vous êtes en avance ou en retard.',
      ),
    },
    badge: B('Repo published, PR opened', 'Dépôt publié, PR ouverte'),
  },
  {
    id: 'ca-ignore',
    master: 'triage',
    minutes: 10,
    title: B('.gitignore, secrets and a protected main', '.gitignore, secrets et branche main protégée'),
    learn: B(
      'You will keep node_modules and .env files out of Git, react correctly to a pushed secret, and protect main.',
      'Vous tiendrez node_modules et les .env hors de Git, réagirez correctement à un secret poussé et protégerez main.',
    ),
    act: B('Check the .gitignore of Habitudes, protect its main branch on GitHub, and rehearse what to do with a leaked key.',
      "Vérifiez le .gitignore d'Habitudes, protégez sa branche main sur GitHub et répétez la conduite à tenir face à une clé fuitée."),
    steps: [
      B('Check that .gitignore lists node_modules, dist and `*.local`, then add `.env` and `.env.*` with `!.env.example`.',
        'Vérifiez que .gitignore liste node_modules, dist et `*.local`, puis ajoutez `.env` et `.env.*` avec `!.env.example`.'),
      B('Run `git check-ignore -v .env.local`, then `git status`, to confirm no secret file is waiting to be committed.',
        "Lancez `git check-ignore -v .env.local`, puis `git status`, pour confirmer qu'aucun fichier secret n'attend d'être committé."),
      B('If a secret was pushed: revoke it at the provider first, create a new one, then clean the history and warn the team.',
        "Si un secret a été poussé : révoquez-le d'abord chez le fournisseur, créez-en un nouveau, puis nettoyez l'historique et prévenez l'équipe."),
      B('In the repository configuration on GitHub, add a rule for main: changes through a pull request only, no force push.',
        'Dans la configuration du dépôt sur GitHub, ajoutez une règle pour main : changements par pull request uniquement, sans force push.'),
    ],
    trap: B(
      'Deleting the file in a new commit and thinking the secret is gone: it stays in the history, and anyone who cloned or scanned the repo may have it.',
      "Supprimer le fichier dans un nouveau commit en croyant le secret disparu : il reste dans l'historique, et qui a cloné ou scanné le dépôt l'a peut-être.",
    ),
    quiz: {
      q: B('You notice a database password in a commit pushed to GitHub an hour ago. What comes first?',
        'Vous découvrez un mot de passe de base de données dans un commit poussé il y a une heure. Que faites-vous d\'abord ?'),
      options: [
        B('Change the password at the provider so the leaked one stops working', "Changer le mot de passe chez le fournisseur pour rendre l'ancien inutilisable"),
        B('Rewrite the Git history to erase the commit, then force push', "Réécrire l'historique Git pour effacer le commit, puis forcer le push"),
        B('Make the repository private so that nobody else can read it', 'Passer le dépôt en privé pour que plus personne ne puisse le lire'),
        B('Add the file to .gitignore so that Git stops tracking it from now on', 'Ajouter le fichier à .gitignore pour que Git cesse de le suivre désormais'),
      ],
      answer: 0,
      why: B(
        'Once pushed, a secret must be treated as public: clones, forks and scanners may have it. Only revocation makes it worthless. Cleaning the history and .gitignore come next.',
        "Une fois poussé, un secret doit être tenu pour public : clones, forks et robots de scan l'ont peut-être. Seule la révocation le rend inutilisable. Historique et .gitignore viennent ensuite.",
      ),
    },
    badge: B('Main protected, secrets guarded', 'Gardien de la branche main'),
  },
]

/* @@CITE3@@ */

/* ================================================================== */
/* LES CITÉS DE LA PARTIE A                                            */
/* ================================================================== */

const MODULES: Module[] = [
  {
    id: 'ca-terminal', track: 'course', glyph: 'rows', tint: TINT, at: [12, 48], levels: CA_TERMINAL,
    title: B('The terminal', 'Le terminal'),
    blurb: B('Open a shell, move through folders, install Node.js and start Habitudes, keep secrets out of the code.',
      "Ouvrez un shell, parcourez vos dossiers, installez Node.js, lancez Habitudes et tenez les secrets hors du code."),
  },
  {
    id: 'ca-git', track: 'course', glyph: 'layers', tint: TINT, at: [30, 60], levels: CA_GIT,
    title: B('Git and GitHub', 'Git et GitHub'),
    blurb: B('Record the history of Habitudes, work on branches, publish on GitHub and keep every secret out of the repo.',
      "Enregistrez l'historique d'Habitudes, travaillez sur des branches, publiez sur GitHub et tenez chaque secret hors du dépôt."),
  },
  /* @@MODULES@@ */
]

/* ================================================================== */
/* L'APPROFONDISSEMENT (data/enrich)                                   */
/* ================================================================== */

const ENRICH: Record<string, Enrichment> = {
  'ca-terminal/ca-shell': {
    why: [
      B("A terminal is only a window: it passes what you type to a program and shows what that program prints back. The program is the shell: zsh on recent macOS, bash on most Linux systems and on Ubuntu under WSL, PowerShell on Windows. The shell reads your line, splits it into words, finds the program named by the first word and starts it with the others.",
        "Un terminal n'est qu'une fenêtre : il transmet ce que vous tapez à un programme et affiche ce que celui-ci répond. Ce programme est le shell : zsh sur les macOS récents, bash sur la plupart des systèmes Linux et sur Ubuntu sous WSL, PowerShell sous Windows. Le shell lit votre ligne, la découpe en mots, trouve le programme désigné par le premier mot et le lance avec les autres."),
      B("That simple grammar explains every command of this course. `git commit -m \"Add habit list\"` reads as the program git, the subcommand commit, the option -m and its value in quotes. The quotes keep the message as one argument; without them each word would arrive separately. Once you read commands this way, documentation becomes readable.",
        "Cette grammaire simple explique toutes les commandes de ce cours. `git commit -m \"Ajoute la liste des habitudes\"` se lit : le programme git, la sous-commande commit, l'option -m et sa valeur entre guillemets. Les guillemets gardent le message en un seul argument ; sans eux, chaque mot arriverait séparément. Lues ainsi, les documentations deviennent lisibles."),
      B("The terminal matters here because every tool of the course speaks this language: npm, Git, the GitHub CLI, the Vercel and Supabase CLIs, and Claude Code itself, which runs in the terminal and proposes commands you will have to read before approving them. Reading a command line is a safety skill, not a matter of taste.",
        "Le terminal compte ici parce que tous les outils du cours parlent cette langue : npm, Git, la CLI de GitHub, celles de Vercel et de Supabase, et Claude Code lui-même, qui s'exécute dans le terminal et propose des commandes que vous devrez lire avant de les approuver. Savoir lire une ligne de commande est une compétence de sécurité, pas une affaire de goût."),
    ],
    example: {
      context: B("Inès is about to start Habitudes. A tutorial tells her to run a command she does not understand, and she wants an AI assistant to explain it first.",
        "Inès s'apprête à commencer Habitudes. Un tutoriel lui demande de lancer une commande qu'elle ne comprend pas, et elle veut qu'un assistant IA la lui explique d'abord."),
      before: B("What does this do? curl -fsSL https://example.com/setup.sh | bash",
        "Ça fait quoi ? curl -fsSL https://example.com/setup.sh | bash"),
      after: B("I am a beginner, on macOS with zsh. Before I run this command, explain it to me word by word:\ncurl -fsSL https://example.com/setup.sh | bash\nFor each part: the program or option, what it does, and whether it changes anything on my computer.\nThen tell me what the script could do with my rights, how I can read it before running it, and the safer two-step version (download, read, then run).",
        "Je débute, sur macOS avec zsh. Avant que je lance cette commande, explique-la-moi mot par mot :\ncurl -fsSL https://example.com/setup.sh | bash\nPour chaque partie : le programme ou l'option, son rôle, et s'il modifie quelque chose sur mon ordinateur.\nDis-moi ensuite ce que le script pourrait faire avec mes droits, comment le lire avant de l'exécuter, et la version plus prudente en deux temps (télécharger, lire, puis lancer)."),
      takeaway: B("The second prompt gives the system and the shell, and asks for a word-by-word reading and for the risk. Inès learns that the pipe hands a downloaded script straight to bash, and how to read it first.",
        "Le second prompt précise le système et le shell, et demande une lecture mot par mot ainsi que le risque. Inès apprend que le tube transmet un script téléchargé directement à bash, et comment le lire d'abord."),
    },
    exercise: {
      goal: B("Three commands you will use for Habitudes, each read word by word before you run it.",
        "Trois commandes que vous emploierez pour Habitudes, chacune lue mot par mot avant d'être lancée."),
      prompt: B("I am learning the terminal on [MACOS / WINDOWS WITH WSL / WINDOWS WITH POWERSHELL], my shell is [ZSH / BASH / POWERSHELL].\nExplain these commands word by word, before I run them:\n1. [FIRST COMMAND, FOR EXAMPLE ls -la ~]\n2. [SECOND COMMAND]\n3. [THIRD COMMAND]\nFor each: the program, each option and argument, what it changes on my computer (nothing, a file, a setting), and how to undo it if needed. Point out any part that would behave differently on my system.",
        "J'apprends le terminal sur [MACOS / WINDOWS AVEC WSL / WINDOWS AVEC POWERSHELL], mon shell est [ZSH / BASH / POWERSHELL].\nExplique ces commandes mot par mot, avant que je les lance :\n1. [PREMIÈRE COMMANDE, PAR EXEMPLE ls -la ~]\n2. [DEUXIÈME COMMANDE]\n3. [TROISIÈME COMMANDE]\nPour chacune : le programme, chaque option et argument, ce qu'elle modifie sur mon ordinateur (rien, un fichier, un réglage), et comment revenir en arrière si besoin. Signale toute partie qui se comporterait autrement sur mon système."),
      check: [
        B("You named your system and your shell before asking", "Vous avez indiqué votre système et votre shell avant de demander"),
        B("Each command is split into program, options and arguments", "Chaque commande est découpée en programme, options et arguments"),
        B("You know which command changes something and which only reads", "Vous savez quelle commande modifie quelque chose et laquelle ne fait que lire"),
        B("You ran each command only after reading its explanation", "Vous n'avez lancé chaque commande qu'après avoir lu son explication"),
      ],
      bonus: B("Run `man ls` (or `Get-Help Get-ChildItem` in PowerShell) and compare the official manual with the AI explanation. Note one option the AI did not mention. Press q to leave the manual.",
        "Lancez `man ls` (ou `Get-Help Get-ChildItem` sous PowerShell) et comparez le manuel officiel à l'explication de l'IA. Notez une option que l'IA n'a pas citée. Appuyez sur q pour quitter le manuel."),
    },
    more: [
      { q: B("You open Windows Terminal and read PS C:\\Users\\ines>. Which shell are you in?",
          "Vous ouvrez Windows Terminal et lisez PS C:\\Users\\ines>. Dans quel shell êtes-vous ?"),
        options: [
          B("bash, inside the Ubuntu distribution of WSL", "bash, dans la distribution Ubuntu de WSL"),
          B("PowerShell, as the PS at the start of the prompt shows", "PowerShell, comme l'indique le PS en tête de l'invite"),
          B("zsh, the default shell of recent versions of Windows", "zsh, le shell par défaut des versions récentes de Windows"),
        ],
        answer: 1,
        why: B("PowerShell prefixes its prompt with PS and shows a Windows path. Under WSL you would see a Linux prompt such as ines@laptop:~$. zsh is the default on macOS, not on Windows.",
          "PowerShell fait précéder son invite de PS et affiche un chemin Windows. Sous WSL, vous verriez une invite Linux du type ines@laptop:~$. zsh est le shell par défaut de macOS, pas de Windows.") },
      { q: B("In `git commit -m \"Add habit list\"`, why are the quotes needed?",
          "Dans `git commit -m \"Ajoute la liste\"`, pourquoi les guillemets sont-ils nécessaires ?"),
        options: [
          B("They keep the message as a single argument despite the spaces", "Ils gardent le message en un seul argument malgré les espaces"),
          B("They tell Git that the text is a comment it must ignore", "Ils signalent à Git un commentaire qu'il doit ignorer"),
          B("They are optional decoration some shells add to commands for readability", "Ils sont une décoration facultative que certains shells ajoutent pour la lisibilité"),
        ],
        answer: 0,
        why: B("The shell splits a line on spaces. Without quotes, -m would receive only the first word, and the next ones would arrive as extra arguments that Git would try to read as file names.",
          "Le shell découpe une ligne sur les espaces. Sans guillemets, -m ne recevrait que le premier mot, et les suivants arriveraient comme arguments supplémentaires que Git tenterait de lire comme des noms de fichiers.") },
    ],
  },

  'ca-terminal/ca-files': {
    why: [
      B("The shell always works from one folder, the current directory, shown by `pwd`. Every relative path is read from there: notes.txt means the file of that name here, ../essai the essai folder one level up. An absolute path starts from the root, /, or from your home folder, ~, and means the same thing wherever you are. Most file errors of beginners come from a command run in the wrong folder.",
        "Le shell travaille toujours depuis un dossier, le répertoire courant, qu'affiche `pwd`. Tout chemin relatif se lit à partir de là : notes.txt désigne le fichier de ce nom ici, ../essai le dossier essai un niveau au-dessus. Un chemin absolu part de la racine, /, ou de votre dossier personnel, ~, et désigne la même chose où que vous soyez. La plupart des erreurs de fichiers des débutants viennent d'une commande lancée dans le mauvais dossier."),
      B("The commands are short because each does one thing: mkdir creates a folder, touch an empty file, cp copies, mv moves or renames, rm removes. They combine with options, such as -p to create parent folders or -r to act on a folder and its content. None of them asks for confirmation by default, and rm does not use a recycle bin.",
        "Les commandes sont courtes parce que chacune fait une seule chose : mkdir crée un dossier, touch un fichier vide, cp copie, mv déplace ou renomme, rm supprime. Elles se combinent à des options, comme -p pour créer les dossiers parents ou -r pour agir sur un dossier et son contenu. Aucune ne demande de confirmation par défaut, et rm ne passe pas par une corbeille."),
      B("Tab completion and history are not comfort features. Completing a name with Tab guarantees it exists, which removes typos from paths; the up arrow and `history` replay a command exactly instead of retyping it. Together with a quick `pwd` before anything destructive, they make the terminal safer than it looks.",
        "La complétion par Tab et l'historique ne sont pas de simples conforts. Compléter un nom avec Tab garantit qu'il existe, ce qui élimine les fautes dans les chemins ; la flèche du haut et `history` rejouent une commande à l'identique au lieu de la retaper. Avec un `pwd` rapide avant toute opération destructrice, ils rendent le terminal plus sûr qu'il n'y paraît."),
    ],
    example: {
      context: B("Hugo wants to tidy his downloads before starting Habitudes. He asks an AI for a command and is about to paste the answer.",
        "Hugo veut ranger ses téléchargements avant de commencer Habitudes. Il demande une commande à une IA et s'apprête à coller la réponse."),
      before: B("Give me a command to delete all the old files in my folder.",
        "Donne-moi une commande pour supprimer tous les vieux fichiers de mon dossier."),
      after: B("I am on macOS with zsh, in ~/Downloads (checked with pwd).\nI want to remove the .zip files older than 30 days in this folder only, not in subfolders.\nFirst give me a command that only LISTS the files that would be removed, so I can check them.\nThen give me the removal command, explain each option, and tell me what cannot be undone.\nDo not use sudo, and do not use rm -rf.",
        "Je suis sur macOS avec zsh, dans ~/Downloads (vérifié avec pwd).\nJe veux supprimer les fichiers .zip de plus de 30 jours dans ce dossier seulement, pas dans les sous-dossiers.\nDonne-moi d'abord une commande qui se contente de LISTER les fichiers concernés, pour que je les vérifie.\nDonne-moi ensuite la commande de suppression, explique chaque option et dis-moi ce qui est irréversible.\nN'utilise ni sudo ni rm -rf."),
      takeaway: B("The second prompt states the folder, the exact criteria and the scope, and asks to list before deleting. Hugo checks the files on screen before anything disappears.",
        "Le second prompt précise le dossier, les critères exacts et le périmètre, et demande de lister avant de supprimer. Hugo vérifie les fichiers à l'écran avant que rien ne disparaisse."),
    },
    exercise: {
      goal: B("A practice folder for Habitudes built and cleaned with the core commands, without opening a file explorer.",
        "Un dossier d'essai pour Habitudes créé puis nettoyé avec les commandes de base, sans ouvrir l'explorateur de fichiers."),
      prompt: B("I am practising the terminal on [SYSTEM AND SHELL]. My current folder is [RESULT OF pwd].\nGive me an exercise of ten commands, one at a time, that:\n1. creates ~/projets/essai with two subfolders and three empty files,\n2. copies one file, renames another, moves a third into a subfolder,\n3. deletes only what I created, after listing it.\nAfter each command, tell me what `ls` should show, so I can compare. Use relative paths at least twice and an absolute path at least once, and tell me which is which.",
        "Je m'exerce au terminal sur [SYSTÈME ET SHELL]. Mon dossier courant est [RÉSULTAT DE pwd].\nPropose-moi un exercice de dix commandes, une à la fois, qui :\n1. crée ~/projets/essai avec deux sous-dossiers et trois fichiers vides,\n2. copie un fichier, en renomme un autre, en déplace un troisième dans un sous-dossier,\n3. supprime uniquement ce que j'ai créé, après l'avoir listé.\nAprès chaque commande, dis-moi ce que `ls` devrait afficher, pour que je compare. Utilise au moins deux chemins relatifs et un chemin absolu, et indique lequel est lequel."),
      check: [
        B("You ran `pwd` before each command that deletes or moves", "Vous avez lancé `pwd` avant chaque commande qui supprime ou déplace"),
        B("What `ls` showed matched the expected result at every step", "Ce qu'affichait `ls` correspondait au résultat attendu à chaque étape"),
        B("You can say which paths were relative and which were absolute", "Vous savez dire quels chemins étaient relatifs et lesquels absolus"),
        B("Nothing outside ~/projets/essai was touched", "Rien hors de ~/projets/essai n'a été touché"),
      ],
      bonus: B("Display your last commands with `history | tail -n 15`, then replay one with the up arrow. Try `rm -i` once to see the confirmation it asks for.",
        "Affichez vos dernières commandes avec `history | tail -n 15`, puis rejouez-en une avec la flèche du haut. Essayez une fois `rm -i` pour voir la confirmation qu'il demande."),
    },
    more: [
      { q: B("You type `cd hab` then press Tab, and nothing completes. What does it tell you?",
          "Vous tapez `cd hab` puis Tab, et rien ne se complète. Qu'est-ce que cela vous apprend ?"),
        options: [
          B("Tab completion is switched off by default in every shell", "La complétion est désactivée par défaut dans tous les shells"),
          B("No folder here starts with hab, or several of them do", "Aucun dossier ne commence par hab ici, ou plusieurs le font"),
          B("The folder exists but is hidden, so you need sudo to enter it", "Le dossier existe mais il est caché, il faut sudo pour y entrer"),
        ],
        answer: 1,
        why: B("Completion only offers names that exist. Silence means no match in the current folder, or several candidates: press Tab twice to list them, and check where you are with pwd.",
          "La complétion ne propose que des noms qui existent. Le silence signale aucune correspondance dans le dossier courant, ou plusieurs candidats : appuyez deux fois sur Tab pour les lister, et vérifiez où vous êtes avec pwd.") },
      { q: B("What does `mv brouillon.txt notes.txt` do when notes.txt does not exist yet?",
          "Que fait `mv brouillon.txt notes.txt` quand notes.txt n'existe pas encore ?"),
        options: [
          B("It renames brouillon.txt to notes.txt", "Il renomme brouillon.txt en notes.txt"),
          B("It copies brouillon.txt and keeps both files side by side", "Il copie brouillon.txt et garde les deux fichiers côte à côte"),
          B("It fails, since mv only moves files between different folders", "Il échoue, car mv ne déplace qu'entre des dossiers différents"),
        ],
        answer: 0,
        why: B("Renaming is moving to a new name in the same place. Beware: if notes.txt already exists, mv replaces it without asking, unless you add -i.",
          "Renommer, c'est déplacer vers un nouveau nom au même endroit. Attention : si notes.txt existe déjà, mv le remplace sans demander, sauf avec l'option -i.") },
    ],
  },

  'ca-terminal/ca-node': {
    why: [
      B("Node.js runs JavaScript outside the browser. You need it even for a front-end app such as Habitudes, because the tools that build it are JavaScript programs: Vite, the TypeScript compiler, the test runner. npm comes with Node and installs those tools and the libraries your app uses, such as React. Choose the LTS version, maintained for a long time, rather than the latest Current release.",
        "Node.js exécute du JavaScript hors du navigateur. Il vous le faut même pour une app front comme Habitudes, parce que les outils qui la construisent sont des programmes JavaScript : Vite, le compilateur TypeScript, l'outil de test. npm est livré avec Node et installe ces outils ainsi que les bibliothèques de votre app, comme React. Choisissez la version LTS, maintenue longtemps, plutôt que la dernière version Current."),
      B("package.json is the identity card of the project: its name, its scripts (dev, build, preview) and its dependencies with acceptable version ranges. package-lock.json records the exact versions installed, so every machine gets the same tree. node_modules is the result: often hundreds of folders, rebuilt by `npm install`, never edited by hand and never committed.",
        "package.json est la carte d'identité du projet : son nom, ses scripts (dev, build, preview) et ses dépendances avec les plages de versions acceptées. package-lock.json consigne les versions exactes installées, pour que chaque machine obtienne le même arbre. node_modules en est le résultat : souvent des centaines de dossiers, reconstruits par `npm install`, jamais modifiés à la main et jamais committés."),
      B("A version manager such as nvm (or nvm-windows, fnm) lets you switch Node versions per project, and avoids permission problems with global installs on macOS and Linux. The official installer is simpler and fine to start. Either way, `node -v` and `npm -v` prove that the shell finds the right programs, which the next dojo explains through PATH.",
        "Un gestionnaire de versions comme nvm (ou nvm-windows, fnm) permet de changer de version de Node selon le projet, et évite les problèmes de permissions des installations globales sur macOS et Linux. L'installateur officiel est plus simple et convient pour commencer. Dans les deux cas, `node -v` et `npm -v` prouvent que le shell trouve les bons programmes, ce que le dojo suivant explique par PATH."),
    ],
    example: {
      context: B("Camille generated Habitudes with Vite, but `npm run dev` fails with an error she does not understand. She asks an AI assistant for help.",
        "Camille a généré Habitudes avec Vite, mais `npm run dev` échoue avec une erreur qu'elle ne comprend pas. Elle demande de l'aide à un assistant IA."),
      before: B("npm run dev doesn't work, how do I fix it?",
        "npm run dev ne marche pas, comment je répare ?"),
      after: B("I created a React + TypeScript project with `npm create vite@latest habitudes -- --template react-ts`.\nSystem: Ubuntu under WSL. node -v prints v16.20.2, npm -v prints 8.19.4.\nIn ~/projets/habitudes I ran `npm install` (no error), then `npm run dev`, which prints:\n[full error pasted here]\nExplain what the error means, whether my Node version can be the cause, and give me the commands to fix it, one at a time, with how to check that each one worked.",
        "J'ai créé un projet React + TypeScript avec `npm create vite@latest habitudes -- --template react-ts`.\nSystème : Ubuntu sous WSL. node -v affiche v16.20.2, npm -v affiche 8.19.4.\nDans ~/projets/habitudes, j'ai lancé `npm install` (sans erreur), puis `npm run dev`, qui affiche :\n[erreur complète collée ici]\nExplique ce que signifie l'erreur, si ma version de Node peut en être la cause, et donne-moi les commandes pour corriger, une à la fois, avec la façon de vérifier que chacune a fonctionné."),
      takeaway: B("The versions in the second prompt carry the answer: recent Vite releases require a much newer Node. The fix is `nvm install --lts`, a fresh `npm install`, and the app starts.",
        "Les versions données dans le second prompt portent la réponse : les versions récentes de Vite exigent un Node bien plus récent. La correction : `nvm install --lts`, un nouveau `npm install`, et l'app démarre."),
    },
    exercise: {
      goal: B("Node.js LTS installed and checked, and the Habitudes skeleton running in your browser, with every file of the root explained.",
        "Node.js LTS installé et vérifié, et le squelette d'Habitudes qui tourne dans votre navigateur, chaque fichier de la racine expliqué."),
      prompt: B("I have just created the Habitudes app with Vite (React + TypeScript). Node: [RESULT OF node -v], npm: [RESULT OF npm -v].\nHere is the list of files at the root, from `ls -a`: [PASTE THE LIST]\nHere is my package.json: [PASTE IT]\n1. Explain the role of each file and folder in one line, and say which ones I will edit and which ones I must never edit by hand.\n2. Explain each script of package.json and when I would run it.\n3. Tell me whether my Node version suits this Vite version, and where to check it in the official docs.",
        "Je viens de créer l'app Habitudes avec Vite (React + TypeScript). Node : [RÉSULTAT DE node -v], npm : [RÉSULTAT DE npm -v].\nVoici la liste des fichiers de la racine, obtenue avec `ls -a` : [COLLEZ LA LISTE]\nVoici mon package.json : [COLLEZ-LE]\n1. Explique le rôle de chaque fichier et dossier en une ligne, et dis lesquels je modifierai et lesquels je ne dois jamais modifier à la main.\n2. Explique chaque script de package.json et quand je le lancerais.\n3. Dis-moi si ma version de Node convient à cette version de Vite, et où le vérifier dans la documentation officielle."),
      check: [
        B("`node -v` shows an LTS version (an even major number)", "`node -v` affiche une version LTS (numéro majeur pair)"),
        B("The app opens at the local address printed by `npm run dev`", "L'app s'ouvre à l'adresse locale affichée par `npm run dev`"),
        B("You can say what package.json, the lock file and node_modules each contain", "Vous savez dire ce que contiennent package.json, le fichier de verrouillage et node_modules"),
        B("You stopped the dev server with Ctrl+C and the prompt came back", "Vous avez arrêté le serveur de développement avec Ctrl+C et l'invite est revenue"),
      ],
      bonus: B("Edit the title in src/App.tsx while `npm run dev` is running and watch the page update without reloading. That is hot module replacement, and you will rely on it every day.",
        "Modifiez le titre dans src/App.tsx pendant que `npm run dev` tourne, et regardez la page se mettre à jour sans rechargement. C'est le hot module replacement, et vous vous en servirez tous les jours."),
    },
    more: [
      { q: B("Why choose the LTS version of Node.js for Habitudes rather than the newest release?",
          "Pourquoi choisir la version LTS de Node.js pour Habitudes plutôt que la plus récente ?"),
        options: [
          B("The newest release cannot run React apps at all", "La plus récente ne sait pas du tout exécuter d'app React"),
          B("LTS is the only version that npm accepts to install packages for", "La LTS est la seule version pour laquelle npm accepte d'installer des paquets"),
          B("It is maintained longer, and tools and hosts target it first", "Elle est maintenue plus longtemps, et outils et hébergeurs la visent d'abord"),
        ],
        answer: 2,
        why: B("LTS releases get security fixes for a long period, and they are what libraries, CI services and hosting platforms test against first. Current releases are fine for experimenting, less so for a project you will deploy.",
          "Les versions LTS reçoivent des correctifs de sécurité sur une longue période, et ce sont elles que bibliothèques, services d'intégration et hébergeurs testent en premier. Les versions Current conviennent pour expérimenter, moins pour un projet à déployer.") },
      { q: B("What happens if you delete node_modules in Habitudes?",
          "Que se passe-t-il si vous supprimez node_modules dans Habitudes ?"),
        options: [
          B("Nothing serious: `npm install` rebuilds it from package.json", "Rien de grave : `npm install` le reconstruit d'après package.json"),
          B("The project is lost for good, because your own source code lives inside it", "Le projet est perdu pour de bon, car votre propre code source vit dans ce dossier"),
          B("React stops working until you reinstall Node.js from scratch", "React cesse de fonctionner jusqu'à une réinstallation complète de Node.js"),
        ],
        answer: 0,
        why: B("node_modules only holds downloaded dependencies. Your code lives in src and the configuration files. Deleting the folder and running `npm install` again is even a common fix for a broken install.",
          "node_modules ne contient que les dépendances téléchargées. Votre code vit dans src et dans les fichiers de configuration. Supprimer ce dossier puis relancer `npm install` est même un remède courant à une installation cassée.") },
    ],
  },

  'ca-terminal/ca-env': {
    why: [
      B("Every program starts with a set of environment variables: named values such as HOME, PATH or LANG, inherited from the shell that launched it. PATH is the list of folders where the shell looks for a program when you type its name. If `node` is not found after an installation, its folder is missing from PATH, which a new terminal or the right line in ~/.zshrc or ~/.bashrc usually fixes.",
        "Tout programme démarre avec un ensemble de variables d'environnement : des valeurs nommées comme HOME, PATH ou LANG, héritées du shell qui l'a lancé. PATH est la liste des dossiers où le shell cherche un programme quand vous tapez son nom. Si `node` est introuvable après une installation, son dossier manque au PATH, ce que corrige en général un nouveau terminal ou la bonne ligne dans ~/.zshrc ou ~/.bashrc."),
      B("A secret is any value that grants power: an API key, a database password, a token. It must never be written in the code, because code is copied, shared and pushed. The code reads a variable by name instead, and the value lives elsewhere: in a .env.local file on your machine, in the host's configuration in production. The same code then runs everywhere with different values.",
        "Un secret est toute valeur qui donne un pouvoir : une clé d'API, un mot de passe de base de données, un token. Il ne doit jamais être écrit dans le code, parce que le code se copie, se partage et se pousse. Le code lit plutôt une variable par son nom, et la valeur vit ailleurs : dans un fichier .env.local sur votre machine, dans la configuration de l'hébergeur en production. Le même code s'exécute alors partout avec des valeurs différentes."),
      B("Vite adds a twist that matters for Habitudes. In browser code, only variables prefixed with VITE_ are available, through import.meta.env, and their values are written into the JavaScript sent to every visitor. The prefix is a filter, not a protection: a VITE_ variable is public by construction. Truly secret keys stay on a server, read with process.env, which part B of the course sets up.",
        "Vite ajoute une subtilité qui compte pour Habitudes. Dans le code exécuté par le navigateur, seules les variables préfixées par VITE_ sont disponibles, via import.meta.env, et leurs valeurs sont écrites dans le JavaScript envoyé à chaque visiteur. Ce préfixe est un filtre, pas une protection : une variable VITE_ est publique par construction. Les clés vraiment secrètes restent côté serveur, lues avec process.env, ce que la partie B met en place."),
    ],
    example: {
      context: B("Yanis wants Habitudes to call an external API. He asks an AI assistant to wire the key in, and gets code with the key written in clear in App.tsx.",
        "Yanis veut qu'Habitudes appelle une API externe. Il demande à un assistant IA d'y brancher la clé, et obtient un code où la clé figure en clair dans App.tsx."),
      before: B("Add my API key sk_live_abc123 to the app so the call works.",
        "Ajoute ma clé API sk_live_abc123 dans l'app pour que l'appel marche."),
      after: B("My app Habitudes is built with Vite, React and TypeScript, and has no server yet.\nI need to call an external API that requires a secret key. Do not write any key in the code, and do not ask me for its value.\n1. Tell me whether this key can safely be exposed to the browser, and why.\n2. If it cannot, explain the options (a serverless function, a backend) and which one suits a beginner.\n3. Show me how the code reads the value by name, which file holds it locally (.env.local), and how to check that .gitignore excludes that file.",
        "Mon app Habitudes est construite avec Vite, React et TypeScript, et n'a pas encore de serveur.\nJe dois appeler une API externe qui exige une clé secrète. N'écris aucune clé dans le code et ne me demande pas sa valeur.\n1. Dis-moi si cette clé peut être exposée au navigateur sans risque, et pourquoi.\n2. Si ce n'est pas le cas, explique les options (une fonction serverless, un backend) et laquelle convient à quelqu'un qui débute.\n3. Montre-moi comment le code lit la valeur par son nom, quel fichier la contient en local (.env.local), et comment vérifier que .gitignore exclut ce fichier."),
      takeaway: B("The first prompt leaks the key into the conversation and into the code, so it must now be revoked. The second keeps the value out of both, and raises the real question: a secret never belongs in a VITE_ variable.",
        "Le premier prompt fait fuiter la clé dans la conversation et dans le code : il faut désormais la révoquer. Le second tient la valeur hors des deux, et pose la vraie question : un secret n'a jamais sa place dans une variable VITE_."),
    },
    exercise: {
      goal: B("A .env.local file for Habitudes that Git will ignore, one public variable read by the app, and a clear list of what may and may not go into it.",
        "Un fichier .env.local pour Habitudes que Git ignorera, une variable publique lue par l'app, et une liste claire de ce qui peut y figurer ou non."),
      prompt: B("My project Habitudes uses Vite, React and TypeScript. Later it will use [SERVICES YOU PLAN TO USE, FOR EXAMPLE SUPABASE].\nHere is my .gitignore: [PASTE IT]\n1. Tell me whether .env.local is ignored, and which line does it.\n2. For each value I will need, [LIST THE VALUES BY NAME, NEVER THEIR CONTENT], tell me whether it is public (can be prefixed with VITE_) or secret (server only), and why.\n3. Show me how to read VITE_APP_NAME in App.tsx with TypeScript, and how to declare its type.\nDo not invent the variable names these services use: tell me where in their official docs I will find them.",
        "Mon projet Habitudes utilise Vite, React et TypeScript. Il utilisera plus tard [LES SERVICES PRÉVUS, PAR EXEMPLE SUPABASE].\nVoici mon .gitignore : [COLLEZ-LE]\n1. Dis-moi si .env.local est ignoré, et par quelle ligne.\n2. Pour chaque valeur dont j'aurai besoin, [LISTEZ LES VALEURS PAR LEUR NOM, JAMAIS LEUR CONTENU], dis-moi si elle est publique (préfixable par VITE_) ou secrète (serveur uniquement), et pourquoi.\n3. Montre-moi comment lire VITE_APP_NAME dans App.tsx avec TypeScript, et comment déclarer son type.\nN'invente pas les noms de variables de ces services : dis-moi où les trouver dans leur documentation officielle."),
      check: [
        B("You found the .gitignore line that covers .env.local (`*.local` in the Vite template)", "Vous avez trouvé la ligne de .gitignore qui couvre .env.local (`*.local` dans le modèle Vite)"),
        B("The app displays VITE_APP_NAME after a restart of `npm run dev`", "L'app affiche VITE_APP_NAME après un redémarrage de `npm run dev`"),
        B("Each planned value is classified as public or secret, with a reason", "Chaque valeur prévue est classée publique ou secrète, avec une raison"),
        B("No real secret appears in the code, in the prompt or in the chat history", "Aucun vrai secret n'apparaît dans le code, dans le prompt ni dans l'historique de la conversation"),
      ],
      bonus: B("Create a .env.example file listing the variable names with empty values, and commit it later: it tells a teammate what to fill in without revealing anything.",
        "Créez un fichier .env.example qui liste les noms des variables avec des valeurs vides, et committez-le plus tard : il indique à un collègue quoi remplir sans rien révéler."),
    },
    more: [
      { q: B("You installed a tool and the terminal says command not found. What does PATH have to do with it?",
          "Vous avez installé un outil et le terminal répond command not found. Quel rapport avec PATH ?"),
        options: [
          B("PATH stores the passwords the shell needs to run programs", "PATH stocke les mots de passe dont le shell a besoin pour lancer les programmes"),
          B("The tool's folder is not in the list of folders the shell searches", "Le dossier de l'outil ne figure pas parmi ceux où cherche le shell"),
          B("None: the tool simply needs a reboot of the whole computer first", "Aucun : l'outil exige simplement un redémarrage complet de l'ordinateur"),
        ],
        answer: 1,
        why: B("The shell only finds programs located in the folders listed in PATH. Opening a new terminal reloads the configuration; if that is not enough, the installer's instructions say which line to add to ~/.zshrc or ~/.bashrc.",
          "Le shell ne trouve que les programmes situés dans les dossiers listés par PATH. Ouvrir un nouveau terminal recharge la configuration ; sinon, les instructions de l'installateur indiquent quelle ligne ajouter à ~/.zshrc ou ~/.bashrc.") },
      { q: B("You change a value in .env.local but the app still shows the old one. Why?",
          "Vous modifiez une valeur dans .env.local, mais l'app affiche toujours l'ancienne. Pourquoi ?"),
        options: [
          B("Vite reads .env files at startup: restart `npm run dev`", "Vite lit les fichiers .env au démarrage : relancez `npm run dev`"),
          B("The browser caches environment variables for a full day", "Le navigateur garde les variables d'environnement en cache une journée"),
          B("Values in .env.local only apply once the code is committed", "Les valeurs de .env.local ne s'appliquent qu'une fois le code committé"),
        ],
        answer: 0,
        why: B("The dev server loads environment files when it starts and injects their values into the code it serves. A change needs a restart; committing has nothing to do with it, since .env.local is never committed.",
          "Le serveur de développement charge les fichiers d'environnement à son démarrage et injecte leurs valeurs dans le code servi. Un changement exige un redémarrage ; committer n'y change rien, puisque .env.local n'est jamais committé.") },
    ],
  },

  /* @@ENRICH@@ */
}

/* ================================================================== */
/* LA COUCHE PÉDAGOGIQUE (data/deep)                                   */
/* ================================================================== */

const DEEP: Record<string, Deepening> = {
  'ca-terminal/ca-shell': {
    intro: B("Every tool of this course, from Git to Claude Code, is driven from a terminal. This dojo starts at the very beginning: the difference between the terminal (the window) and the shell (the program that reads your commands), how to open one on macOS or Windows, how to read the prompt, and the grammar of a command line: program, options, arguments. You will be able to open the terminal you will use for Habitudes, say which shell it runs, and read any command before running it.",
      "Tous les outils de ce cours, de Git à Claude Code, se pilotent depuis un terminal. Ce dojo part du tout début : la différence entre le terminal (la fenêtre) et le shell (le programme qui lit vos commandes), la façon d'en ouvrir un sur macOS ou sous Windows, la lecture de l'invite, et la grammaire d'une ligne de commande : programme, options, arguments. Vous saurez ouvrir le terminal qui servira à Habitudes, dire quel shell il exécute, et lire n'importe quelle commande avant de la lancer."),
    concepts: [
      { term: B('Terminal', 'Terminal'),
        def: B("The application that displays a text window and passes your keystrokes to a shell: Terminal or iTerm2 on macOS, Windows Terminal on Windows. It does not run commands itself.",
          "L'application qui affiche une fenêtre de texte et transmet vos frappes à un shell : Terminal ou iTerm2 sur macOS, Windows Terminal sous Windows. Elle n'exécute pas elle-même les commandes.") },
      { term: B('Shell', 'Shell'),
        def: B("The program that reads a command line, splits it into words, finds the program to run and starts it. zsh, bash and PowerShell are shells; their syntax differs in the details.",
          "Le programme qui lit une ligne de commande, la découpe en mots, trouve le programme à lancer et le démarre. zsh, bash et PowerShell sont des shells ; leur syntaxe diffère dans le détail.") },
      { term: B('Prompt', 'Invite (prompt du shell)'),
        def: B("The text the shell prints when it waits for you, often user, machine and current folder, ending with $, % or >. When it comes back, the previous command has finished.",
          "Le texte que le shell affiche quand il vous attend, souvent utilisateur, machine et dossier courant, terminé par $, % ou >. Quand elle réapparaît, la commande précédente est terminée.") },
      { term: B('WSL', 'WSL'),
        def: B("Windows Subsystem for Linux: a real Linux system (often Ubuntu) inside Windows, installed with `wsl --install`. Most web tutorials assume a Linux or macOS shell, so WSL saves you translating them.",
          "Windows Subsystem for Linux : un vrai système Linux (souvent Ubuntu) dans Windows, installé par `wsl --install`. La plupart des tutoriels web supposent un shell Linux ou macOS : WSL vous évite de les traduire.") },
      { term: B('Option and argument', 'Option et argument'),
        def: B("The words after the program name. An option changes how it behaves and usually starts with - or --, such as -l or --help; an argument says what to act on, such as a file name.",
          "Les mots qui suivent le nom du programme. Une option modifie son comportement et commence en général par - ou --, comme -l ou --help ; un argument désigne ce sur quoi il agit, comme un nom de fichier.") },
    ],
    walkthrough: {
      title: B("Inès works on Windows and wants a terminal that matches the tutorials of the Habitudes course.",
        "Inès travaille sous Windows et veut un terminal qui corresponde aux tutoriels du cours Habitudes."),
      steps: [
        B("She opens PowerShell as administrator and runs `wsl --install`, then restarts. Why: WSL gives her an Ubuntu shell, so the commands of this course work as written instead of needing a PowerShell translation.",
          "Elle ouvre PowerShell en administratrice et lance `wsl --install`, puis redémarre. Pourquoi : WSL lui donne un shell Ubuntu, et les commandes du cours fonctionnent telles quelles, sans traduction pour PowerShell."),
        B("At first launch, Ubuntu asks for a Linux user name and password. She notes that this is the password `sudo` will ask for later. Why: it is separate from her Windows password, and forgetting it blocks every installation.",
          "Au premier lancement, Ubuntu lui demande un nom d'utilisateur et un mot de passe Linux. Elle note que c'est celui que `sudo` réclamera plus tard. Pourquoi : il est distinct de son mot de passe Windows, et l'oublier bloque toute installation."),
        B("She opens an Ubuntu profile in Windows Terminal and reads the prompt ines@laptop:~$. Why: it tells her who she is, where she is (~, her Linux home folder) and that the shell is waiting.",
          "Elle ouvre un profil Ubuntu dans Windows Terminal et lit l'invite ines@laptop:~$. Pourquoi : elle y lit qui elle est, où elle se trouve (~, son dossier personnel Linux) et que le shell attend."),
        B("She runs `echo $SHELL` and reads /bin/bash, then `ls --help` and skims the options. Why: knowing her shell tells her which documentation applies, and --help is the first place to look before searching online.",
          "Elle lance `echo $SHELL` et lit /bin/bash, puis `ls --help` et parcourt les options. Pourquoi : connaître son shell lui dit quelle documentation s'applique, et --help est le premier endroit où chercher avant le web."),
        B("She decides to keep all her projects inside the Linux file system (~/projets), not under /mnt/c. Why: tools such as npm and Vite run much faster there, and permission surprises are avoided.",
          "Elle décide de garder tous ses projets dans le système de fichiers Linux (~/projets), et non sous /mnt/c. Pourquoi : npm et Vite y sont nettement plus rapides, et les surprises de permissions y sont évitées."),
      ],
    },
    mistakes: [
      { wrong: B("Mixing tutorials for bash and PowerShell, and pasting Linux commands into PowerShell.",
          "Mélanger des tutoriels bash et PowerShell, et coller des commandes Linux dans PowerShell."),
        fix: B("Pick one shell for the whole course (WSL with bash is the closest to the tutorials) and check which shell a tutorial assumes before copying anything.",
          "Choisissez un shell pour tout le cours (WSL avec bash est le plus proche des tutoriels) et vérifiez quel shell suppose un tutoriel avant d'en copier quoi que ce soit.") },
      { wrong: B("Typing a new command while the previous one is still running, because the prompt has not come back.",
          "Taper une nouvelle commande alors que la précédente tourne encore, l'invite n'étant pas revenue."),
        fix: B("Wait for the prompt. A long-running command such as `npm run dev` keeps the terminal busy: open a second terminal window, or stop it with Ctrl+C.",
          "Attendez l'invite. Une commande longue comme `npm run dev` occupe le terminal : ouvrez une seconde fenêtre de terminal, ou arrêtez-la avec Ctrl+C.") },
      { wrong: B("Running again with `sudo` any command that fails, to make the error go away.",
          "Relancer avec `sudo` toute commande qui échoue, pour faire disparaître l'erreur."),
        fix: B("Read the error first. `sudo` gives administrator rights to the whole command; for npm and project files, a permission error usually means a wrong folder or a bad install, not a lack of rights.",
          "Lisez d'abord l'erreur. `sudo` donne les droits d'administrateur à toute la commande ; pour npm et les fichiers du projet, une erreur de permission signale en général un mauvais dossier ou une installation défaillante, pas un manque de droits.") },
    ],
    recap: [
      B("The terminal is the window; the shell is the program that reads and runs your commands.", "Le terminal est la fenêtre ; le shell est le programme qui lit et exécute vos commandes."),
      B("A command line reads as program, then options, then arguments, separated by spaces.", "Une ligne de commande se lit : le programme, puis les options, puis les arguments, séparés par des espaces."),
      B("On Windows, WSL gives you the Linux shell that most web tutorials assume.", "Sous Windows, WSL fournit le shell Linux que supposent la plupart des tutoriels web."),
      B("Read every command before running it, especially one copied from the web or proposed by an AI.", "Lisez chaque commande avant de la lancer, surtout si elle vient du web ou d'une IA."),
    ],
    further: B("Spend ten minutes with `man` or `--help` on three commands you will use daily: ls, cp and git. Then customise your prompt only if it helps you: many developers display the current Git branch in it, which you will appreciate in the next city.",
      "Consacrez dix minutes à `man` ou à `--help` pour trois commandes que vous emploierez chaque jour : ls, cp et git. Personnalisez ensuite votre invite seulement si cela vous aide : beaucoup de développeurs y affichent la branche Git courante, ce que vous apprécierez dans la cité suivante."),
    more: [
      { q: B("On a Mac, what is the difference between Terminal and zsh?",
          "Sur un Mac, quelle différence y a-t-il entre Terminal et zsh ?"),
        options: [
          B("They are two names for the same program, one old and one new", "Ce sont deux noms du même programme, l'un ancien et l'autre récent"),
          B("zsh is the graphical version of Terminal, with more colours and themes", "zsh est la version graphique de Terminal, avec plus de couleurs et de thèmes"),
          B("Terminal displays the window, zsh reads and runs the commands", "Terminal affiche la fenêtre, zsh lit et exécute les commandes"),
        ],
        answer: 2,
        why: B("The terminal application is an interface; the shell is the interpreter behind it. You could run bash in the same Terminal window, or zsh in another terminal application.",
          "L'application terminal est une interface ; le shell est l'interpréteur qui travaille derrière. Vous pourriez lancer bash dans la même fenêtre Terminal, ou zsh dans une autre application.") },
      { q: B("A command has been running for a minute and the prompt has not come back. What does that mean?",
          "Une commande tourne depuis une minute et l'invite n'est pas revenue. Qu'est-ce que cela signifie ?"),
        options: [
          B("The terminal has crashed and must be closed and reopened at once", "Le terminal a planté et doit être fermé puis rouvert sans attendre"),
          B("The command is still running, or waiting for input from you", "La commande s'exécute encore, ou attend une saisie de votre part"),
          B("The shell is waiting for you to type the next command right away", "Le shell attend que vous tapiez tout de suite la commande suivante"),
        ],
        answer: 1,
        why: B("The prompt only reappears when the shell is ready. Until then, read the output: the program may be working, or asking a question. Ctrl+C stops it if needed.",
          "L'invite ne réapparaît que lorsque le shell est prêt. D'ici là, lisez la sortie : le programme travaille peut-être, ou vous pose une question. Ctrl+C l'arrête si nécessaire.") },
    ],
  },

  'ca-terminal/ca-files': {
    intro: B("Before you write any code, you need to be at ease where the code lives: folders and files. This dojo teaches the handful of commands that cover almost every need (pwd, ls, cd, mkdir, touch, cp, mv, rm), the difference between absolute and relative paths, and the two habits that prevent most accidents: completing names with Tab and checking where you are before destroying anything. You will be able to prepare the ~/projets folder of Habitudes and move around it without a file explorer.",
      "Avant d'écrire du code, il faut être à l'aise là où le code vit : les dossiers et les fichiers. Ce dojo enseigne la poignée de commandes qui couvre presque tous les besoins (pwd, ls, cd, mkdir, touch, cp, mv, rm), la différence entre chemins absolus et relatifs, et les deux habitudes qui préviennent la plupart des accidents : compléter les noms avec Tab et vérifier où l'on se trouve avant toute destruction. Vous saurez préparer le dossier ~/projets d'Habitudes et vous y déplacer sans explorateur de fichiers."),
    concepts: [
      { term: B('Current directory', 'Répertoire courant'),
        def: B("The folder the shell is in right now, shown by `pwd`. Every relative path and every command that creates files acts from there.",
          "Le dossier où se trouve le shell à cet instant, affiché par `pwd`. Tout chemin relatif et toute commande qui crée des fichiers agissent à partir de là.") },
      { term: B('Absolute path', 'Chemin absolu'),
        def: B("A path that starts from the root (/) or from your home folder (~), such as ~/projets/habitudes. It designates the same place wherever you are.",
          "Un chemin qui part de la racine (/) ou de votre dossier personnel (~), comme ~/projets/habitudes. Il désigne le même endroit où que vous soyez.") },
      { term: B('Relative path', 'Chemin relatif'),
        def: B("A path read from the current directory: src/App.tsx, ./notes.txt or ../essai. One dot means here, two dots mean the parent folder.",
          "Un chemin lu depuis le répertoire courant : src/App.tsx, ./notes.txt ou ../essai. Un point signifie ici, deux points le dossier parent.") },
      { term: B('Hidden file', 'Fichier caché'),
        def: B("A file whose name starts with a dot, such as .gitignore or .env.local. `ls` hides it, `ls -a` shows it. Many configuration files of this course are hidden.",
          "Un fichier dont le nom commence par un point, comme .gitignore ou .env.local. `ls` le masque, `ls -a` l'affiche. Beaucoup de fichiers de configuration de ce cours sont cachés.") },
    ],
    walkthrough: {
      title: B("Hugo prepares the folder structure of Habitudes, and practises on a scratch folder first.",
        "Hugo prépare l'arborescence d'Habitudes, en s'exerçant d'abord sur un dossier d'essai."),
      steps: [
        B("He runs `cd ~` then `mkdir -p projets/essai`. Why: -p creates projets and essai in one go, and starting from ~ makes the location certain whatever folder he was in.",
          "Il lance `cd ~` puis `mkdir -p projets/essai`. Pourquoi : -p crée projets et essai d'un coup, et partir de ~ rend l'emplacement certain, quel que soit le dossier précédent."),
        B("He enters with `cd projets/es` plus Tab, then runs `touch idees.md taches.md`. Why: Tab confirms the folder exists, and touch accepts several names at once.",
          "Il entre avec `cd projets/es` puis Tab, et lance `touch idees.md taches.md`. Pourquoi : Tab confirme que le dossier existe, et touch accepte plusieurs noms à la fois."),
        B("He copies with `cp idees.md idees-v2.md`, renames with `mv taches.md todo.md`, and checks with `ls -la`. Why: -a also shows hidden files and -l the size and date, so he sees exactly what the folder contains.",
          "Il copie avec `cp idees.md idees-v2.md`, renomme avec `mv taches.md todo.md` et vérifie avec `ls -la`. Pourquoi : -a montre aussi les fichiers cachés et -l la taille et la date : il voit exactement ce que contient le dossier."),
        B("Before cleaning up, he runs `pwd`, reads /Users/hugo/projets/essai, then runs `rm idees-v2.md todo.md`. Why: naming files one by one instead of using a wildcard limits a mistake to what he can see.",
          "Avant de nettoyer, il lance `pwd`, lit /Users/hugo/projets/essai, puis `rm idees-v2.md todo.md`. Pourquoi : nommer les fichiers un à un plutôt qu'avec un joker limite une erreur à ce qu'il voit."),
        B("He goes back up with `cd ..` and later removes the emptied folder with `rmdir essai`. Why: rmdir refuses to delete a folder that still contains files, which makes it a safe way to finish.",
          "Il remonte avec `cd ..` et supprime ensuite le dossier vidé avec `rmdir essai`. Pourquoi : rmdir refuse de supprimer un dossier qui contient encore des fichiers, ce qui en fait une façon sûre de terminer."),
      ],
    },
    mistakes: [
      { wrong: B("Putting spaces in folder names, then wondering why `cd mes projets` fails.",
          "Mettre des espaces dans les noms de dossiers, puis s'étonner que `cd mes projets` échoue."),
        fix: B("Prefer names without spaces or accents, such as mes-projets. If a name has spaces, quote it (`cd \"mes projets\"`) or let Tab complete it.",
          "Préférez des noms sans espaces ni accents, comme mes-projets. Si un nom contient des espaces, mettez-le entre guillemets (`cd \"mes projets\"`) ou laissez Tab le compléter.") },
      { wrong: B("Running `rm -r *` or `rm -rf` in a folder you have not checked with pwd.",
          "Lancer `rm -r *` ou `rm -rf` dans un dossier que vous n'avez pas vérifié avec pwd."),
        fix: B("Check the folder with pwd, list the targets with ls, then delete named files. Keep -rf for folders you have just listed, and never use it with a path built from a variable you have not seen.",
          "Vérifiez le dossier avec pwd, listez les cibles avec ls, puis supprimez des fichiers nommés. Réservez -rf à des dossiers que vous venez de lister, et jamais avec un chemin construit à partir d'une variable que vous n'avez pas vue.") },
      { wrong: B("Concluding a file is missing because `ls` does not show it, when its name starts with a dot.",
          "Conclure qu'un fichier manque parce que `ls` ne l'affiche pas, alors que son nom commence par un point."),
        fix: B("Use `ls -a` to see hidden files. .gitignore, .env.local and the .git folder are all hidden, and you will look for them often.",
          "Utilisez `ls -a` pour voir les fichiers cachés. .gitignore, .env.local et le dossier .git sont tous cachés, et vous les chercherez souvent.") },
    ],
    recap: [
      B("pwd before acting: every relative path is read from the current directory.", "pwd avant d'agir : tout chemin relatif se lit depuis le répertoire courant."),
      B("An absolute path starts with / or ~; a relative one starts from where you are.", "Un chemin absolu commence par / ou ~ ; un chemin relatif part de l'endroit où vous êtes."),
      B("Tab completes names that exist, the up arrow replays exact commands.", "Tab complète les noms qui existent, la flèche du haut rejoue les commandes à l'identique."),
      B("rm has no recycle bin: list first, then delete named files.", "rm n'a pas de corbeille : listez d'abord, puis supprimez des fichiers nommés."),
    ],
    further: B("Learn two more commands to read files: `cat` prints a short file and `less` pages through a long one (q to quit). Then open a whole folder in your code editor from the terminal, for example `code .` with VS Code, which you will do for Habitudes in the next dojo.",
      "Apprenez deux commandes de plus pour lire des fichiers : `cat` affiche un fichier court et `less` parcourt un long fichier (q pour quitter). Ouvrez ensuite un dossier entier dans votre éditeur depuis le terminal, par exemple `code .` avec VS Code, ce que vous ferez pour Habitudes au dojo suivant."),
    more: [
      { q: B("You are in ~/projets. Which command creates habitudes/src in one go, even if habitudes does not exist?",
          "Vous êtes dans ~/projets. Quelle commande crée habitudes/src d'un coup, même si habitudes n'existe pas ?"),
        options: [
          B("`touch habitudes/src`, which creates any missing parent", "`touch habitudes/src`, qui crée tout parent manquant"),
          B("`cd habitudes/src`, which creates the folders as it enters them", "`cd habitudes/src`, qui crée les dossiers en y entrant"),
          B("`mkdir -p habitudes/src`", "`mkdir -p habitudes/src`, tout simplement"),
        ],
        answer: 2,
        why: B("-p tells mkdir to create every missing parent folder. touch creates files, not folders, and cd only moves into folders that already exist.",
          "-p demande à mkdir de créer chaque dossier parent manquant. touch crée des fichiers, pas des dossiers, et cd n'entre que dans des dossiers existants.") },
      { q: B("Why does `ls` not show the .env.local file you just created?",
          "Pourquoi `ls` n'affiche-t-il pas le fichier .env.local que vous venez de créer ?"),
        options: [
          B("Because its name starts with a dot: use ls -a", "Parce que son nom commence par un point : utilisez ls -a"),
          B("Because the system protects secret files and hides them from you", "Parce que le système protège les fichiers secrets et vous les cache"),
          B("Because the file is empty, and ls never lists empty files", "Parce que le fichier est vide, et que ls n'affiche jamais les fichiers vides"),
        ],
        answer: 0,
        why: B("By convention, names starting with a dot are hidden from a plain ls. The file is there, and ls -a shows it. Nothing protects it: hidden does not mean secret.",
          "Par convention, les noms qui commencent par un point sont masqués par un ls simple. Le fichier est bien là, et ls -a l'affiche. Rien ne le protège : caché ne veut pas dire secret.") },
    ],
  },

  'ca-terminal/ca-node': {
    intro: B("This dojo installs the toolchain of the whole course and creates the project you will build in it. You will install Node.js in its LTS version, understand what npm does, generate the Habitudes app with Vite in its React and TypeScript template, and read the three things every JavaScript project contains: package.json, the lock file and node_modules. By the end, Habitudes runs on your machine at a local address, and you know which files are yours to edit.",
      "Ce dojo installe la chaîne d'outils de tout le cours et crée le projet que vous y construirez. Vous installerez Node.js en version LTS, comprendrez le rôle de npm, générerez l'app Habitudes avec Vite dans son modèle React et TypeScript, et lirez les trois éléments que contient tout projet JavaScript : package.json, le fichier de verrouillage et node_modules. À la fin, Habitudes tourne sur votre machine à une adresse locale, et vous savez quels fichiers sont à vous."),
    concepts: [
      { term: B('Node.js and npm', 'Node.js et npm'),
        def: B("Node.js runs JavaScript outside the browser; npm, installed with it, downloads packages from the npm registry and runs the scripts of a project.",
          "Node.js exécute du JavaScript hors du navigateur ; npm, installé avec lui, télécharge des paquets depuis le registre npm et lance les scripts d'un projet.") },
      { term: B('LTS', 'LTS'),
        def: B("Long Term Support: the Node.js versions maintained with security fixes for a long period. They have even major numbers. Prefer them for any project you plan to deploy.",
          "Long Term Support : les versions de Node.js maintenues avec des correctifs de sécurité sur une longue période. Elles portent un numéro majeur pair. Préférez-les pour tout projet destiné à être déployé.") },
      { term: B('Vite', 'Vite'),
        def: B("A build tool for front-end apps. In development it serves your files with instant updates; `npm run build` turns them into optimised static files ready to host.",
          "Un outil de build pour les apps front. En développement, il sert vos fichiers avec des mises à jour instantanées ; `npm run build` les transforme en fichiers statiques optimisés, prêts à être hébergés.") },
      { term: B('package.json and lock file', 'package.json et fichier de verrouillage'),
        def: B("package.json declares scripts and dependencies with version ranges; package-lock.json records the exact versions installed. Both are committed; node_modules is not.",
          "package.json déclare les scripts et les dépendances avec des plages de versions ; package-lock.json consigne les versions exactes installées. Les deux sont committés ; node_modules ne l'est pas.") },
      { term: B('Dev server', 'Serveur de développement'),
        def: B("The local server started by `npm run dev`. It only runs while the command is active, and only on your machine: nobody else can open your localhost:5173.",
          "Le serveur local lancé par `npm run dev`. Il ne tourne que tant que la commande est active, et seulement sur votre machine : personne d'autre ne peut ouvrir votre localhost:5173.") },
    ],
    walkthrough: {
      title: B("Camille installs Node.js with nvm on macOS and creates Habitudes in ~/projets.",
        "Camille installe Node.js avec nvm sur macOS et crée Habitudes dans ~/projets."),
      steps: [
        B("She installs nvm with the command from its official repository, reopens the terminal, then runs `nvm install --lts`. Why: nvm installs Node in her home folder, so global packages never need sudo, and she can change version later.",
          "Elle installe nvm avec la commande de son dépôt officiel, rouvre le terminal, puis lance `nvm install --lts`. Pourquoi : nvm installe Node dans son dossier personnel, les paquets globaux n'exigent donc jamais sudo, et elle pourra changer de version plus tard."),
        B("She checks `node -v` and `npm -v`. Why: two version numbers prove the shell finds both programs; an error such as command not found would mean the installation is not on the PATH yet.",
          "Elle vérifie `node -v` et `npm -v`. Pourquoi : deux numéros de version prouvent que le shell trouve les deux programmes ; une erreur du type command not found signifierait que l'installation n'est pas encore dans le PATH."),
        B("In ~/projets she runs `npm create vite@latest habitudes -- --template react-ts`. Why: the double dash passes the template option to Vite rather than to npm, and react-ts gives React with TypeScript, which catches many errors before the browser does.",
          "Dans ~/projets, elle lance `npm create vite@latest habitudes -- --template react-ts`. Pourquoi : le double tiret transmet l'option de modèle à Vite plutôt qu'à npm, et react-ts donne React avec TypeScript, qui repère beaucoup d'erreurs avant le navigateur."),
        B("She enters the folder, runs `npm install`, and sees node_modules and package-lock.json appear. Why: the template only declares dependencies; installing them is a separate, repeatable step.",
          "Elle entre dans le dossier, lance `npm install` et voit apparaître node_modules et package-lock.json. Pourquoi : le modèle ne fait que déclarer les dépendances ; les installer est une étape distincte et reproductible."),
        B("She runs `npm run dev`, opens the address it prints, then opens the project in her editor with `code .`. Why: from now on she keeps one terminal for the dev server and another for Git and Claude Code.",
          "Elle lance `npm run dev`, ouvre l'adresse affichée, puis ouvre le projet dans son éditeur avec `code .`. Pourquoi : désormais, elle garde un terminal pour le serveur de développement et un autre pour Git et Claude Code."),
      ],
    },
    mistakes: [
      { wrong: B("Installing Node with sudo, then running `sudo npm install -g` for every global tool.",
          "Installer Node avec sudo, puis lancer `sudo npm install -g` pour chaque outil global."),
        fix: B("Use the official installer or a version manager such as nvm. If npm asks for sudo for a global install, fix the installation instead of granting administrator rights to every package script.",
          "Utilisez l'installateur officiel ou un gestionnaire de versions comme nvm. Si npm réclame sudo pour une installation globale, réparez l'installation plutôt que d'accorder les droits d'administrateur aux scripts de chaque paquet.") },
      { wrong: B("Running `npm install` or `npm run dev` from ~/projets instead of from inside the habitudes folder.",
          "Lancer `npm install` ou `npm run dev` depuis ~/projets au lieu de l'intérieur du dossier habitudes."),
        fix: B("npm looks for package.json in the current folder. Run pwd: if the error says package.json cannot be found, you are one folder too high.",
          "npm cherche package.json dans le dossier courant. Lancez pwd : si l'erreur dit que package.json est introuvable, vous êtes un dossier trop haut.") },
      { wrong: B("Deleting package-lock.json to make a conflict or an error go away.",
          "Supprimer package-lock.json pour faire disparaître un conflit ou une erreur."),
        fix: B("Keep and commit the lock file: it guarantees identical installs on every machine and at the host. If it is broken, regenerate it with `npm install` and review the changes.",
          "Gardez et committez le fichier de verrouillage : il garantit des installations identiques sur chaque machine et chez l'hébergeur. S'il est cassé, régénérez-le avec `npm install` et relisez les changements.") },
    ],
    recap: [
      B("Node.js runs the tools that build Habitudes; install its LTS version.", "Node.js exécute les outils qui construisent Habitudes ; installez sa version LTS."),
      B("`node -v` and `npm -v` prove the installation is visible to the shell.", "`node -v` et `npm -v` prouvent que l'installation est visible du shell."),
      B("package.json and the lock file are committed; node_modules is rebuilt, never shared.", "package.json et le fichier de verrouillage sont committés ; node_modules se reconstruit et ne se partage pas."),
      B("`npm run dev` starts a local server that lives only while the command runs.", "`npm run dev` lance un serveur local qui ne vit que le temps de la commande."),
    ],
    further: B("Run `npm run build`, then `npm run preview`: you will see the optimised version of Habitudes that Vercel will host in part B of this course. Compare the dist folder it creates with src to understand what a build does.",
      "Lancez `npm run build`, puis `npm run preview` : vous verrez la version optimisée d'Habitudes que Vercel hébergera dans la partie B du cours. Comparez le dossier dist ainsi créé avec src pour comprendre ce que fait un build."),
    more: [
      { q: B("`npm run dev` fails because package.json cannot be found. What is the most likely cause?",
          "`npm run dev` échoue : package.json est introuvable. Quelle est la cause la plus probable ?"),
        options: [
          B("Node.js is too old to read package.json files", "Node.js est trop ancien pour lire les fichiers package.json"),
          B("The command was run outside the project folder", "La commande a été lancée hors du dossier du projet"),
          B("The Vite template forgot to create a package.json file at all", "Le modèle Vite a tout simplement oublié de créer package.json"),
        ],
        answer: 1,
        why: B("npm reads package.json from the current folder. The usual cause is being in ~/projets instead of ~/projets/habitudes: pwd tells you, and `cd habitudes` fixes it.",
          "npm lit package.json dans le dossier courant. La cause habituelle : être dans ~/projets au lieu de ~/projets/habitudes. pwd vous le dit, et `cd habitudes` le corrige.") },
      { q: B("Which files of the Habitudes skeleton should be committed?",
          "Quels fichiers du squelette d'Habitudes faut-il committer ?"),
        options: [
          B("Only src, since everything else is regenerated automatically", "Seulement src, car tout le reste se régénère automatiquement"),
          B("Everything, node_modules included, so the project works offline", "Tout, node_modules compris, pour que le projet marche hors ligne"),
          B("src, package.json, the lock file and the config files", "src, package.json, le fichier de verrouillage et la configuration"),
        ],
        answer: 2,
        why: B("The configuration files and the lock file are needed to rebuild the exact same project elsewhere. node_modules is rebuilt from them and stays out of Git.",
          "Les fichiers de configuration et le fichier de verrouillage sont nécessaires pour reconstruire exactement le même projet ailleurs. node_modules se reconstruit à partir d'eux et reste hors de Git.") },
    ],
  },

  'ca-terminal/ca-env': {
    intro: B("Your code will soon need values it must not contain: the address of your Supabase project, keys, passwords. This dojo explains the mechanism behind them. You will see what environment variables are, why PATH decides which programs the shell can find, what counts as a secret, and how Vite reads a .env.local file, with the one rule that surprises everyone: a VITE_ variable is public. You will be able to give Habitudes its first variable without ever writing a secret in the code.",
      "Votre code aura bientôt besoin de valeurs qu'il ne doit pas contenir : l'adresse de votre projet Supabase, des clés, des mots de passe. Ce dojo explique le mécanisme qui les porte. Vous verrez ce que sont les variables d'environnement, pourquoi PATH décide des programmes que le shell trouve, ce qui compte comme un secret, et comment Vite lit un fichier .env.local, avec la règle qui surprend tout le monde : une variable VITE_ est publique. Vous saurez donner à Habitudes sa première variable sans jamais écrire un secret dans le code."),
    concepts: [
      { term: B('Environment variable', "Variable d'environnement"),
        def: B("A named value available to a program when it starts, inherited from the shell, such as HOME or PATH. You can list them with `env` (or `printenv`).",
          "Une valeur nommée disponible pour un programme dès son démarrage, héritée du shell, comme HOME ou PATH. Vous pouvez les lister avec `env` (ou `printenv`).") },
      { term: B('PATH', 'PATH'),
        def: B("The variable that lists, separated by colons, the folders where the shell looks for programs. `which node` shows which folder the node it runs comes from.",
          "La variable qui liste, séparés par des deux-points, les dossiers où le shell cherche les programmes. `which node` montre de quel dossier vient le node qu'il exécute.") },
      { term: B('Secret', 'Secret'),
        def: B("Any value that grants access or power: API key, password, private token. It never appears in the code, in a commit, in a screenshot or in a prompt.",
          "Toute valeur qui donne un accès ou un pouvoir : clé d'API, mot de passe, token privé. Elle n'apparaît jamais dans le code, dans un commit, sur une capture d'écran ni dans un prompt.") },
      { term: B('.env.local', '.env.local'),
        def: B("A local file of NAME=value lines that Vite loads at startup. The Vite template keeps it out of Git through the `*.local` line of .gitignore.",
          "Un fichier local de lignes NOM=valeur que Vite charge au démarrage. Le modèle Vite l'exclut de Git grâce à la ligne `*.local` de .gitignore.") },
      { term: B('VITE_ prefix', 'Préfixe VITE_'),
        def: B("Only variables starting with VITE_ are exposed to browser code, through import.meta.env, and they are written into the public bundle. The prefix means public, never secret.",
          "Seules les variables commençant par VITE_ sont exposées au code du navigateur, via import.meta.env, et elles sont écrites dans le bundle public. Le préfixe signifie public, jamais secret.") },
    ],
    walkthrough: {
      title: B("Yanis prepares Habitudes for the services it will use later, without letting a single secret into the code.",
        "Yanis prépare Habitudes aux services qu'elle utilisera plus tard, sans laisser entrer un seul secret dans le code."),
      steps: [
        B("He runs `echo $PATH` and `which node`, and sees the folder created by nvm. Why: knowing where programs come from will save him the day a command is not found or the wrong version runs.",
          "Il lance `echo $PATH` et `which node`, et voit le dossier créé par nvm. Pourquoi : savoir d'où viennent les programmes le sauvera le jour où une commande est introuvable ou qu'une mauvaise version s'exécute."),
        B("He opens .gitignore and finds the `*.local` line, then creates .env.local with `VITE_APP_NAME=Habitudes`. Why: checking the ignore rule before writing any value means the file can never be committed by accident.",
          "Il ouvre .gitignore et y trouve la ligne `*.local`, puis crée .env.local avec `VITE_APP_NAME=Habitudes`. Pourquoi : vérifier la règle d'exclusion avant d'écrire la moindre valeur garantit que le fichier ne sera jamais committé par mégarde."),
        B("In App.tsx he displays `import.meta.env.VITE_APP_NAME` and restarts `npm run dev`. Why: the value appears only after the restart, which confirms that Vite reads the file at startup.",
          "Dans App.tsx, il affiche `import.meta.env.VITE_APP_NAME` et relance `npm run dev`. Pourquoi : la valeur n'apparaît qu'après le redémarrage, ce qui confirme que Vite lit le fichier au démarrage."),
        B("He runs `npm run build`, then `grep -r Habitudes dist`: the value is there, in clear. Why: seeing a VITE_ value inside the public files makes the rule concrete; a secret would be just as visible.",
          "Il lance `npm run build`, puis `grep -r Habitudes dist` : la valeur y figure en clair. Pourquoi : voir une valeur VITE_ dans les fichiers publics rend la règle concrète ; un secret y serait tout aussi visible."),
        B("He writes .env.example with the names and empty values, and lists the future secrets that must live on a server. Why: the next person knows what to fill in, and the line between public and secret is drawn before any service exists.",
          "Il rédige .env.example avec les noms et des valeurs vides, et liste les futurs secrets qui devront vivre côté serveur. Pourquoi : la personne suivante sait quoi remplir, et la frontière entre public et secret est tracée avant qu'aucun service n'existe."),
      ],
    },
    mistakes: [
      { wrong: B("Writing a key directly in the code \"just for the test\", meaning to move it later.",
          "Écrire une clé directement dans le code « juste pour tester », en comptant la déplacer plus tard."),
        fix: B("Put it in .env.local from the first minute and read it by name. A test value written in code ends up in a commit sooner or later.",
          "Placez-la dans .env.local dès la première minute et lisez-la par son nom. Une valeur de test écrite dans le code finit tôt ou tard dans un commit.") },
      { wrong: B("Believing a VITE_ variable is protected because it lives in .env.local.",
          "Croire qu'une variable VITE_ est protégée parce qu'elle vit dans .env.local."),
        fix: B("The file is private, the value is not: Vite copies it into the public JavaScript. Only values designed to be public may carry the VITE_ prefix.",
          "Le fichier est privé, la valeur ne l'est pas : Vite la recopie dans le JavaScript public. Seules les valeurs conçues pour être publiques peuvent porter le préfixe VITE_.") },
      { wrong: B("Pasting the content of .env.local into a chat with an AI to get help with a configuration error.",
          "Coller le contenu de .env.local dans une conversation avec une IA pour obtenir de l'aide sur une erreur de configuration."),
        fix: B("Share the variable names and the error, never the values. If a value was pasted, treat it as exposed: revoke it and create a new one.",
          "Partagez les noms des variables et l'erreur, jamais les valeurs. Si une valeur a été collée, considérez-la comme exposée : révoquez-la et créez-en une nouvelle.") },
    ],
    recap: [
      B("PATH lists the folders where the shell finds programs such as node and npm.", "PATH liste les dossiers où le shell trouve des programmes comme node et npm."),
      B("A secret grants power, so it never appears in code, commits or prompts.", "Un secret donne un pouvoir : il n'apparaît jamais dans le code, les commits ni les prompts."),
      B(".env.local holds local values and stays out of Git through .gitignore.", ".env.local contient les valeurs locales et reste hors de Git grâce à .gitignore."),
      B("In Vite, VITE_ means public: real secrets stay on a server, read with process.env.", "Dans Vite, VITE_ signifie public : les vrais secrets restent côté serveur, lus avec process.env."),
    ],
    further: B("Read the page on environment variables and modes in the official Vite documentation: it explains the order in which .env, .env.local and .env.production are loaded. In part B you will declare the same names in the environment variables of Vercel, so that production gets its own values.",
      "Lisez la page sur les variables d'environnement et les modes dans la documentation officielle de Vite : elle explique l'ordre de chargement de .env, .env.local et .env.production. Dans la partie B, vous déclarerez les mêmes noms dans les variables d'environnement de Vercel, pour que la production ait ses propres valeurs."),
    more: [
      { q: B("`which node` prints a path inside ~/.nvm. What does it tell you?",
          "`which node` affiche un chemin dans ~/.nvm. Qu'est-ce que cela vous apprend ?"),
        options: [
          B("That Node is installed twice and must be removed at once", "Que Node est installé deux fois et qu'il faut le désinstaller aussitôt"),
          B("That ~/.nvm is a secret folder that must stay out of PATH", "Que ~/.nvm est un dossier secret qui doit rester hors du PATH"),
          B("That the node you run is the one nvm installed", "Que le node exécuté est celui installé par nvm"),
        ],
        answer: 2,
        why: B("which shows the first match in PATH, the program the shell will really run. It is the quickest way to check which installation of a tool is active.",
          "which affiche la première correspondance dans PATH, c'est-à-dire le programme que le shell exécutera vraiment. C'est le moyen le plus rapide de savoir quelle installation d'un outil est active.") },
      { q: B("Where should a secret key used by Habitudes in production be stored?",
          "Où doit être stockée une clé secrète utilisée par Habitudes en production ?"),
        options: [
          B("In the host's environment variables, read server side", "Dans les variables d'environnement de l'hébergeur, lue côté serveur"),
          B("In a VITE_ variable of a .env.production file committed to the repo", "Dans une variable VITE_ d'un fichier .env.production committé dans le dépôt"),
          B("In the code, but encoded in base64 so that nobody can read it", "Dans le code, mais encodée en base64 pour que personne ne la lise"),
        ],
        answer: 0,
        why: B("A production secret lives in the host's environment, outside the code, and is only read by server code. base64 is an encoding, not encryption, and a VITE_ variable ends up in the browser.",
          "Un secret de production vit dans l'environnement de l'hébergeur, hors du code, et n'est lu que par du code serveur. base64 est un encodage, pas un chiffrement, et une variable VITE_ finit dans le navigateur.") },
    ],
  },

  /* @@DEEP@@ */
}

/* ================================================================== */
/* LA PARTIE A DU COURS                                                */
/* ================================================================== */

export const CODE_APP_A: CoursePart = { modules: MODULES, enrich: ENRICH, deep: DEEP }
