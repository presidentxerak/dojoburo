import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'nsi-1re',
  chapters: [
    /* ================================================================== */
    /* UNE HISTOIRE DE L'INFORMATIQUE                                       */
    /* ================================================================== */
    {
      id: 'histoire-informatique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'machines-pionniers',
          title: 'Des machines à calculer aux ordinateurs : les pionniers',
          minutes: 30,
          objectives: [
            "Situer dans le temps les principaux événements de l'histoire de l'informatique, des machines à calculer aux premiers ordinateurs.",
            "Identifier l'apport des pionniers : Pascal, Babbage, Ada Lovelace, Boole, Turing, von Neumann.",
            "Distinguer une machine à calculer, un calculateur programmable et un ordinateur à programme enregistré.",
            "Expliquer le rôle des progrès techniques (relais, tubes, transistors, circuits intégrés) dans l'évolution des machines.",
          ],
          course: [
            {
              heading: "Calculer avec des machines (XVIIe au XIXe siècle)",
              paragraphs: [
                "L'histoire de l'informatique commence avec le désir d'automatiser le calcul. En 1642, Blaise Pascal, âgé de dix-neuf ans, conçoit la Pascaline pour aider son père, chargé de la levée des impôts en Normandie : des roues dentées effectuent additions et soustractions, avec un mécanisme de retenue automatique. Quelques décennies plus tard, Gottfried Wilhelm Leibniz construit une machine capable aussi de multiplier, et il publie en 1703 une étude de la numération binaire, qui n'utilise que les chiffres 0 et 1. Ces machines calculent, mais elles n'exécutent aucun programme : l'opérateur commande chaque opération à la main.",
                "L'idée de programme apparaît dans un domaine inattendu, le tissage. Le métier à tisser de Joseph-Marie Jacquard (1801) lit une suite de cartes perforées : chaque carte commande le soulèvement des fils et donc le motif. Changer les cartes, c'est changer le motif sans modifier la machine. En 1890, Herman Hollerith utilise à son tour des cartes perforées et des machines électriques pour dépouiller le recensement des États-Unis ; son entreprise deviendra IBM en 1924.",
                "Le mathématicien anglais Charles Babbage conçoit à partir de 1834 la machine analytique, jamais achevée faute de moyens techniques et financiers. Elle devait comporter un « magasin » (une mémoire), un « moulin » (une unité de calcul), une lecture de cartes perforées pour les instructions et les données, et la possibilité de choisir la suite des opérations selon un résultat. En 1843, Ada Lovelace publie des notes sur cette machine ; elle y détaille une méthode pour calculer les nombres de Bernoulli, souvent considérée comme le premier programme, et pressent que la machine pourrait manipuler d'autres symboles que des nombres.",
              ],
              box: { label: "Repère", text: "1642 : Pascaline (Pascal). 1801 : métier à tisser à cartes perforées (Jacquard). 1834 : machine analytique (Babbage), jamais construite. 1843 : notes d'Ada Lovelace, premier programme publié. 1890 : cartes perforées de Hollerith pour le recensement américain." },
            },
            {
              heading: "La logique et la théorie : Boole, Shannon et Turing",
              paragraphs: [
                "En 1847, puis en 1854, le mathématicien britannique George Boole propose de traiter les raisonnements logiques comme des calculs sur deux valeurs, vrai et faux : c'est l'algèbre de Boole, avec ses opérations ET, OU, NON. En 1938, l'Américain Claude Shannon montre que des circuits électriques à interrupteurs (des relais) réalisent exactement ces opérations : la logique devient un moyen de concevoir des machines. Plus tard, Shannon fonde aussi la théorie de l'information et popularise le mot bit (binary digit, chiffre binaire).",
                "En 1936, le mathématicien britannique Alan Turing publie un article dans lequel il décrit une machine abstraite : un ruban infini divisé en cases, une tête qui lit et écrit un symbole par case, et une table de règles qui indique, selon l'état de la machine et le symbole lu, quoi écrire, dans quel sens se déplacer et quel état prendre. Ce modèle, la machine de Turing, définit précisément ce qu'est un calcul. Turing montre surtout qu'une machine universelle peut simuler n'importe quelle autre machine dont on lui fournit la description : un programme peut être traité comme une donnée.",
                "Pendant la Seconde Guerre mondiale, Turing travaille à Bletchley Park, en Angleterre, au décryptage des messages allemands chiffrés par la machine Enigma, en concevant des machines électromécaniques de recherche des clés. En 1950, il publie un article sur la question de savoir si une machine peut penser et propose un test, aujourd'hui appelé test de Turing.",
              ],
              box: { label: "Définition", text: "Une machine de Turing est un modèle abstrait de calcul : un ruban de cases, une tête de lecture et d'écriture, un ensemble fini d'états et une table de transitions. Tout ce qu'un ordinateur actuel sait calculer, une machine de Turing peut le calculer aussi, avec assez de temps et de ruban." },
            },
            {
              heading: "Les premiers calculateurs électroniques (1941 à 1949)",
              paragraphs: [
                "En 1941, l'ingénieur allemand Konrad Zuse met en service le Z3, un calculateur électromécanique à relais, programmable par un film perforé et travaillant en binaire. En Angleterre, les calculateurs Colossus (1943 et 1944), à tubes électroniques, servent à casser un autre chiffrement allemand. Aux États-Unis, l'ENIAC, achevé fin 1945 à l'université de Pennsylvanie par John Presper Eckert et John Mauchly, compte environ 17 500 tubes et pèse une trentaine de tonnes ; il calcule des tables de tir pour l'artillerie. Pour le programmer, une équipe de mathématiciennes, parmi lesquelles Jean Jennings et Betty Snyder, branche des câbles et règle des commutateurs : changer de programme prend des heures, voire des jours.",
                "En 1945, le mathématicien John von Neumann rédige un rapport sur un nouveau calculateur, l'EDVAC. Il y décrit une architecture où le programme est enregistré dans la mémoire, au même titre que les données : on change de programme en changeant le contenu de la mémoire, sans recâbler. La machine comprend une unité de calcul, une unité de commande, une mémoire et des dispositifs d'entrée et de sortie. Le 21 juin 1948, la petite machine expérimentale de l'université de Manchester (surnommée Baby) exécute le premier programme enregistré en mémoire ; l'EDSAC de Cambridge suit en 1949.",
              ],
              box: { label: "Définition", text: "Un ordinateur est une machine électronique, programmable, qui enregistre son programme dans sa mémoire avec les données, et qui est universelle : avec le bon programme, elle peut effectuer n'importe quel traitement calculable. On parle d'architecture de von Neumann." },
            },
            {
              heading: "Transistors, circuits intégrés, microprocesseurs",
              paragraphs: [
                "Les tubes électroniques chauffent, consomment beaucoup et tombent souvent en panne. En 1947, John Bardeen, Walter Brattain et William Shockley inventent le transistor aux laboratoires Bell : ce petit composant joue le rôle d'interrupteur commandé, comme le tube, mais il est bien plus petit, plus fiable et moins gourmand en énergie. En 1958, Jack Kilby (Texas Instruments) réalise le premier circuit intégré, qui réunit plusieurs composants sur une même pastille de semi-conducteur ; Robert Noyce en propose une version au silicium en 1959.",
                "En 1971, Intel commercialise le 4004, premier microprocesseur : toute l'unité de calcul et de commande tient sur une seule puce, avec environ 2 300 transistors. En 1965, Gordon Moore avait remarqué que le nombre de transistors par puce doublait à intervalle régulier ; en 1975, il estime ce rythme à un doublement tous les deux ans environ (loi de Moore, qui est une observation et non une loi physique). Les micro-ordinateurs apparaissent : le Micral N français en 1973, l'Apple II en 1977, l'IBM PC en 1981.",
                "Le vocabulaire français date de cette époque : le mot « ordinateur » est proposé en 1955 par le philologue Jacques Perret, à la demande d'IBM France, et le mot « informatique » est créé en 1962 par Philippe Dreyfus, à partir de « information » et « automatique ».",
              ],
              box: { label: "À retenir", text: "Relais (années 1940), tubes électroniques (années 1940 et 1950), transistors (inventés en 1947), circuits intégrés (1958), microprocesseurs (1971) : chaque étape rend les machines plus petites, plus rapides, plus fiables et moins chères." },
            },
          ],
          keyPoints: [
            "1642 : la Pascaline de Blaise Pascal additionne et soustrait, sans programme.",
            "1834 et 1843 : machine analytique de Babbage, programmable par cartes perforées ; Ada Lovelace en écrit le premier programme publié.",
            "Boole (algèbre logique, 1847 et 1854) et Turing (machine abstraite, 1936) fondent la théorie de l'informatique.",
            "1945 : ENIAC, calculateur électronique programmé par câblage ; rapport de von Neumann sur le programme enregistré en mémoire.",
            "1948 : premier programme enregistré exécuté à Manchester ; 1947 : transistor ; 1958 : circuit intégré ; 1971 : microprocesseur Intel 4004.",
            "Un ordinateur est programmable, à programme enregistré et universel : une calculatrice mécanique n'en est pas un.",
          ],
          example: {
            statement: "Expliquer pourquoi l'ENIAC, dans sa version de 1945, n'est pas un ordinateur au sens de von Neumann, alors que la machine de Manchester de 1948 en est un.",
            solution: [
              "Rappel de la définition : un ordinateur au sens de von Neumann enregistre son programme dans sa mémoire, au même titre que les données.",
              "L'ENIAC est électronique (environ 17 500 tubes) et programmable, mais son programme est réalisé par des câbles et des commutateurs : il n'est pas stocké dans une mémoire.",
              "Conséquence : changer de programme sur l'ENIAC demande de recâbler la machine, ce qui prend des heures ou des jours.",
              "La machine de Manchester exécute le 21 juin 1948 un programme placé dans sa mémoire : changer de programme revient à changer le contenu de cette mémoire.",
              "Réponse : l'ENIAC de 1945 est un calculateur électronique programmable par câblage ; la machine de Manchester est le premier ordinateur à programme enregistré, conforme à l'architecture de von Neumann.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer dans l'ordre chronologique les événements suivants, en indiquant la date de chacun : invention du transistor ; Pascaline ; article d'Alan Turing décrivant sa machine abstraite ; microprocesseur Intel 4004 ; notes d'Ada Lovelace sur la machine analytique.",
              hint: "Placez d'abord les deux événements antérieurs au XXe siècle, puis répartissez les trois autres entre 1930 et 1975.",
              solution: [
                "Pascaline de Blaise Pascal : 1642.",
                "Notes d'Ada Lovelace sur la machine analytique de Babbage : 1843.",
                "Article d'Alan Turing décrivant sa machine abstraite : 1936.",
                "Invention du transistor aux laboratoires Bell : 1947.",
                "Microprocesseur Intel 4004 : 1971.",
                "Ordre : Pascaline (1642), notes d'Ada Lovelace (1843), machine de Turing (1936), transistor (1947), Intel 4004 (1971).",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune des machines suivantes, indiquer si elle est programmable et si son programme est enregistré dans une mémoire, puis la qualifier (machine à calculer, calculateur programmable ou ordinateur) : a) la Pascaline (1642) ; b) la machine analytique de Babbage (projet de 1834) ; c) l'ENIAC (1945) ; d) la machine de Manchester (1948).",
              hint: "Posez-vous deux questions pour chaque machine : peut-on lui faire exécuter une suite d'opérations sans intervenir à chaque étape ? Où se trouve cette suite d'opérations ?",
              solution: [
                "a) La Pascaline n'est pas programmable : l'opérateur commande chaque addition ou soustraction. C'est une machine à calculer.",
                "b) La machine analytique devait être programmable par des cartes perforées, lues au fur et à mesure ; le programme est sur les cartes, pas dans la mémoire (le « magasin »). C'est un projet de calculateur programmable, jamais construit.",
                "c) L'ENIAC est programmable, mais le programme est réalisé par câblage et réglage de commutateurs, pas stocké en mémoire. C'est un calculateur électronique programmable.",
                "d) La machine de Manchester exécute un programme placé dans sa mémoire avec les données. C'est un ordinateur à programme enregistré.",
                "Bilan : seule la machine de Manchester répond aux trois critères (électronique, programmable, programme enregistré) de l'ordinateur au sens de von Neumann.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de synthèse. Le microprocesseur Intel 4004, sorti en 1971, comptait environ 2 300 transistors. 1. Rappeler l'énoncé de la loi de Moore dans sa version de 1975. 2. En appliquant cette loi à partir de 1971, estimer le nombre de transistors d'un processeur en 2021 ; donner l'ordre de grandeur, sachant que 2¹⁰ ≈ 1 000. 3. Les plus gros processeurs de 2021 comptaient plusieurs dizaines de milliards de transistors : commenter. 4. Expliquer pourquoi cette progression ne peut pas se poursuivre indéfiniment.",
              hint: "Comptez le nombre de périodes de deux ans entre 1971 et 2021 : le nombre de transistors est multiplié par 2 à chaque période.",
              solution: [
                "1. Loi de Moore (1975) : le nombre de transistors que l'on sait placer sur une puce double environ tous les deux ans. C'est une observation empirique, pas une loi physique.",
                "2. De 1971 à 2021, il s'écoule 50 ans, soit 50 ÷ 2 = 25 doublements. Le nombre de transistors est multiplié par 2²⁵.",
                "Or 2²⁵ = 2⁵ × 2¹⁰ × 2¹⁰ ≈ 32 × 1 000 × 1 000 = 32 millions (valeur exacte : 33 554 432).",
                "Estimation : 2 300 × 2²⁵ ≈ 2 300 × 33 554 432 ≈ 7,7 × 10¹⁰, soit environ 77 milliards de transistors.",
                "3. L'ordre de grandeur (quelques dizaines de milliards) correspond à ce qui est observé : la loi de Moore a donné une bonne prévision sur un demi-siècle.",
                "4. Un transistor ne peut pas être plus petit que quelques atomes : en miniaturisant, on se heurte à des limites physiques (fuites de courant, échauffement) et à des coûts de fabrication croissants. Le rythme des doublements ralentit depuis les années 2010.",
                "Résultat : environ 7,7 × 10¹⁰ transistors prévus en 2021, cohérent avec la réalité, mais la progression ralentit.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de l'informatique dans l'ordre chronologique.",
            items: [
              "Blaise Pascal conçoit la Pascaline",
              "Ada Lovelace décrit un programme pour la machine analytique",
              "George Boole publie son algèbre de la logique",
              "Alan Turing décrit sa machine abstraite",
              "L'ENIAC, calculateur électronique à tubes, est achevé",
              "Le transistor est inventé aux laboratoires Bell",
              "Intel commercialise le premier microprocesseur, le 4004",
            ],
          },
          quiz: [
            { q: "Qui a publié en 1843 ce qui est souvent considéré comme le premier programme ?", options: ["Charles Babbage", "Blaise Pascal", "Ada Lovelace", "Alan Turing"], answer: 2, why: "Ada Lovelace a détaillé dans ses notes une méthode de calcul des nombres de Bernoulli destinée à la machine analytique de Babbage." },
            { q: "Quelle idée est au cœur de l'architecture décrite par von Neumann en 1945 ?", options: ["Le programme est rangé en mémoire avec les données", "Le calcul se fait en base dix avec des roues dentées", "Le programme est câblé à la main sur des tableaux de connexions", "Les calculs sont confiés à des relais électromécaniques"], answer: 0, why: "Le programme enregistré en mémoire permet de changer de programme sans recâbler la machine." },
            { q: "Quel composant, inventé en 1947, a remplacé les tubes électroniques ?", options: ["Le circuit intégré", "Le microprocesseur", "Le relais", "Le transistor"], answer: 3, why: "Le transistor, inventé aux laboratoires Bell, est plus petit, plus fiable et moins gourmand que le tube." },
            { q: "Que décrit l'article publié par Alan Turing en 1936 ?", options: ["Les plans d'une machine électromécanique destinée à décrypter Enigma", "Une machine abstraite qui précise ce qu'est un calcul", "Le schéma électronique du premier ordinateur britannique"], answer: 1, why: "La machine de Turing est un modèle théorique ; les travaux sur Enigma viennent plus tard, pendant la guerre." },
            { q: "Qu'est-ce qui distingue la Pascaline d'un ordinateur ?", options: ["Elle lit des cartes perforées qui commandent chaque étape du calcul", "Elle fonctionne avec des tubes électroniques fragiles", "Elle n'exécute aucun programme enregistré"], answer: 2, why: "La Pascaline effectue l'opération que l'utilisateur commande, une par une : elle n'a ni programme ni mémoire de programme." },
          ],
          trap: "Confondre machine à calculer, calculateur programmable et ordinateur : l'ENIAC de 1945 est électronique et programmable, mais son programme est câblé ; seul le programme enregistré en mémoire fait l'ordinateur au sens de von Neumann.",
          method: "Construisez une frise chronologique à trois lignes (les idées théoriques, les machines, les composants) et placez-y chaque date avec un nom et un apport en quelques mots : les liens entre les lignes deviennent visibles et se retiennent mieux.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'langages-reseaux-web',
          title: 'Langages, réseaux, Web : les grandes étapes',
          minutes: 30,
          objectives: [
            "Situer dans le temps les grandes étapes de l'histoire des langages de programmation, des réseaux et du Web.",
            "Identifier l'apport de personnalités clés : Grace Hopper, John Backus, Dennis Ritchie, Louis Pouzin, Vinton Cerf et Robert Kahn, Tim Berners-Lee.",
            "Distinguer Internet, réseau mondial de réseaux, et le Web, application qui fonctionne sur Internet.",
          ],
          course: [
            {
              heading: "Du langage machine aux langages de haut niveau",
              paragraphs: [
                "Les premiers ordinateurs se programment en langage machine, c'est-à-dire directement avec des suites de 0 et de 1 qui codent les instructions du processeur. On invente vite l'assembleur, qui remplace ces codes par des mots courts (ADD, LOAD...), mais le programme reste lié à une machine précise. Au début des années 1950, l'Américaine Grace Hopper réalise l'un des premiers compilateurs (le A-0, en 1952) et défend l'idée de programmer avec des mots proches de l'anglais ; cette idée aboutit au langage COBOL (1959), destiné à la gestion.",
                "En 1957, l'équipe de John Backus chez IBM livre FORTRAN, premier langage de haut niveau largement diffusé, conçu pour le calcul scientifique. LISP (1958, John McCarthy) sert à la recherche en intelligence artificielle. En 1969, Ken Thompson et Dennis Ritchie créent le système UNIX aux laboratoires Bell ; Ritchie conçoit le langage C en 1972, et UNIX est réécrit en C en 1973, ce qui le rend portable d'une machine à l'autre.",
                "Viennent ensuite les langages orientés objet (C++ dans les années 1980, Java en 1995), JavaScript (1995) pour animer les pages Web, et Python, dont le Néerlandais Guido van Rossum publie la première version en 1991. Il n'existe pas de « meilleur » langage : chacun répond à des besoins (rapidité d'exécution, simplicité, sécurité, domaine d'application).",
              ],
              box: { label: "Définition", text: "Un compilateur traduit tout le programme source en langage machine avant l'exécution. Un interpréteur lit et exécute le programme instruction par instruction. Python est en général qualifié de langage interprété." },
            },
            {
              heading: "Naissance des réseaux et d'Internet",
              paragraphs: [
                "Au début des années 1960, Paul Baran aux États-Unis et Donald Davies au Royaume-Uni proposent la commutation de paquets : un message est découpé en petits paquets qui circulent indépendamment dans le réseau et sont réassemblés à l'arrivée. Contrairement au téléphone, aucune ligne n'est réservée de bout en bout, et le réseau peut contourner une panne. Le réseau ARPANET, financé par le ministère américain de la Défense, relie le 29 octobre 1969 l'université de Californie à Los Angeles et l'institut de recherche de Stanford ; il compte quatre nœuds à la fin de l'année.",
                "En 1971, Ray Tomlinson envoie les premiers courriers électroniques entre ordinateurs distincts et choisit le symbole @ pour séparer le nom de l'utilisateur de celui de la machine. La même année, en France, Louis Pouzin lance le réseau CYCLADES, fondé sur les datagrammes : des paquets autonomes, le réseau se contentant de les acheminer et les ordinateurs aux extrémités assurant la fiabilité. Cette idée inspire Vinton Cerf et Robert Kahn, qui publient en 1974 le protocole TCP, devenu le couple TCP/IP.",
                "Le 1er janvier 1983, ARPANET adopte TCP/IP : des réseaux différents peuvent désormais s'interconnecter selon des règles communes. Cette date est souvent retenue comme la naissance d'Internet, le « réseau des réseaux ». Le système des noms de domaine (DNS), qui associe un nom comme exemple.fr à une adresse numérique, est conçu en 1983. En France, le Minitel, lancé en 1982 sur un réseau national distinct, connaît un grand succès jusqu'à sa fermeture en 2012.",
              ],
              box: { label: "Repère", text: "1969 : ARPANET. 1971 : courrier électronique, projet CYCLADES. 1974 : publication de TCP par Cerf et Kahn. 1983 : passage d'ARPANET à TCP/IP, naissance d'Internet ; conception du DNS. 1982 : Minitel en France." },
            },
            {
              heading: "Le Web, une application d'Internet",
              paragraphs: [
                "En mars 1989, Tim Berners-Lee, informaticien britannique au CERN (Genève), propose un système de partage de documents reliés par des liens hypertextes. Avec Robert Cailliau, il met au point fin 1990 le premier serveur et le premier navigateur. Le Web repose sur trois inventions : le langage HTML pour écrire les pages, le protocole HTTP pour les transmettre, et les adresses URL pour les désigner. Le Web devient public en 1991.",
                "Le 30 avril 1993, le CERN place le logiciel du Web dans le domaine public : chacun peut l'utiliser et l'améliorer gratuitement. La même année, le navigateur graphique Mosaic affiche images et textes ensemble, et le Web se diffuse rapidement. En 1994, Tim Berners-Lee fonde le W3C, qui établit les standards du Web. Suivent les moteurs de recherche (Google en 1998), les encyclopédies collaboratives (Wikipédia en 2001), les réseaux sociaux, puis les smartphones, qui rendent l'accès permanent.",
              ],
              box: { label: "À retenir", text: "Internet est l'infrastructure : un réseau mondial de réseaux qui communiquent avec TCP/IP (1983). Le Web est l'un des services qui fonctionnent sur Internet (1989 à 1991), comme le courrier électronique ou le transfert de fichiers. Internet existait avant le Web." },
            },
          ],
          keyPoints: [
            "Langage machine, puis assembleur, puis langages de haut niveau traduits par un compilateur ou un interpréteur.",
            "Repères : FORTRAN (1957, Backus), COBOL (1959, inspiré par Grace Hopper), C (1972, Ritchie), Python (1991, van Rossum).",
            "Commutation de paquets (années 1960), ARPANET (1969), CYCLADES de Louis Pouzin (1971), TCP de Cerf et Kahn (1974).",
            "1er janvier 1983 : ARPANET adopte TCP/IP, date retenue pour la naissance d'Internet.",
            "Web : Tim Berners-Lee au CERN, proposé en 1989, public en 1991 ; HTML, HTTP et URL ; domaine public en 1993.",
            "Internet est le réseau ; le Web est une application qui l'utilise.",
          ],
          example: {
            statement: "Un camarade affirme : « Internet a été inventé par Tim Berners-Lee en 1989. » Corriger cette affirmation en quelques phrases argumentées.",
            solution: [
              "Identifier la confusion : l'affirmation mélange Internet, qui est un réseau, et le Web, qui est une application.",
              "Internet : il prolonge ARPANET (1969) ; il naît quand ARPANET adopte le protocole TCP/IP, conçu par Vinton Cerf et Robert Kahn, le 1er janvier 1983.",
              "Le Web : Tim Berners-Lee le propose au CERN en 1989 et le rend public en 1991, avec HTML, HTTP et les URL.",
              "Le Web fonctionne sur Internet, comme le courrier électronique, qui existait avant lui (1971).",
              "Réponse : Tim Berners-Lee n'a pas inventé Internet mais le Web, en 1989 ; Internet existait déjà depuis 1983 et descend d'ARPANET (1969).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer dans l'ordre chronologique et dater : création du langage Python ; premier lien du réseau ARPANET ; proposition du Web par Tim Berners-Lee ; langage FORTRAN ; adoption de TCP/IP par ARPANET ; langage C.",
              hint: "Deux événements datent des années 1950 à 1970 du côté des langages ; repérez ensuite les deux dates clés d'Internet.",
              solution: [
                "FORTRAN : 1957.",
                "Premier lien d'ARPANET : 1969.",
                "Langage C : 1972.",
                "Adoption de TCP/IP par ARPANET : 1er janvier 1983.",
                "Proposition du Web par Tim Berners-Lee : 1989.",
                "Python : 1991.",
                "Ordre : FORTRAN, ARPANET, C, TCP/IP, Web, Python.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune des situations suivantes, dire si elle utilise le Web ou seulement Internet sans le Web, et justifier : a) consulter un article de Wikipédia dans un navigateur ; b) envoyer un courriel avec un logiciel de messagerie installé sur l'ordinateur ; c) lire ses courriels dans une messagerie ouverte dans un navigateur (webmail) ; d) jouer à un jeu vidéo en réseau qui échange directement des données avec un serveur de jeu.",
              hint: "Le Web suppose des pages désignées par des URL et transmises par le protocole HTTP (ou HTTPS), en général affichées par un navigateur.",
              solution: [
                "a) Web : la page est désignée par une URL, transmise par HTTPS et affichée par un navigateur. Le Web utilise Internet pour transporter les données.",
                "b) Internet sans le Web : le logiciel de messagerie utilise des protocoles propres au courrier électronique (comme SMTP pour l'envoi), pas HTTP.",
                "c) Web : la messagerie est une application Web, affichée dans le navigateur et transmise par HTTPS.",
                "d) Internet sans le Web, dans le cas décrit : le jeu échange ses données avec le serveur par ses propres protocoles au-dessus de TCP/IP, sans pages Web.",
                "Conclusion : Internet transporte des données pour de nombreux services ; le Web n'est que l'un d'eux.",
              ],
            },
            {
              level: 3,
              statement: "Question de synthèse. 1. Expliquer le principe de la commutation de paquets et dire pourquoi elle rend un réseau plus robuste que le réseau téléphonique classique, qui réserve une ligne pendant toute la communication. 2. Quel a été l'apport du réseau français CYCLADES ? 3. Pourquoi la date du 1er janvier 1983 est-elle retenue pour la naissance d'Internet ? 4. En quoi la décision du CERN du 30 avril 1993 a-t-elle favorisé la diffusion du Web ?",
              hint: "Pour chaque question, donnez un fait daté puis sa conséquence, en une ou deux phrases.",
              solution: [
                "1. Le message est découpé en paquets numérotés, portant l'adresse du destinataire ; chacun est acheminé de routeur en routeur, éventuellement par des chemins différents, puis le message est reconstitué à l'arrivée.",
                "Aucune ligne n'est réservée : les liaisons sont partagées entre de nombreuses communications, et si une liaison tombe en panne, les paquets suivants passent par un autre chemin. Le réseau est plus efficace et plus robuste.",
                "2. CYCLADES, lancé en 1971 par Louis Pouzin, a mis en œuvre les datagrammes : le réseau achemine des paquets autonomes sans garantie, et ce sont les ordinateurs aux extrémités qui assurent la fiabilité. Ce principe a inspiré Cerf et Kahn pour TCP/IP.",
                "3. Ce jour-là, ARPANET adopte TCP/IP : des réseaux différents peuvent s'interconnecter grâce à des protocoles communs et ouverts, ce qui forme un réseau de réseaux, Internet.",
                "4. En plaçant le logiciel du Web dans le domaine public, le CERN permet à chacun de créer des serveurs et des navigateurs sans payer de droits ; associé à l'arrivée de navigateurs graphiques comme Mosaic (1993), cela provoque l'essor rapide du Web.",
                "Bilan : Internet repose sur la commutation de paquets et sur des protocoles ouverts (1983) ; le Web, ouvert à tous en 1993, s'est diffusé grâce à cette infrastructure.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque personnalité à son apport.",
            pairs: [
              { left: "Grace Hopper", right: "Premiers compilateurs, idée qui mène à COBOL" },
              { left: "John Backus", right: "Le langage FORTRAN (1957)" },
              { left: "Dennis Ritchie", right: "Le langage C et le système UNIX" },
              { left: "Louis Pouzin", right: "Le réseau CYCLADES et les datagrammes" },
              { left: "Vinton Cerf et Robert Kahn", right: "Le protocole TCP/IP" },
              { left: "Tim Berners-Lee", right: "Le Web : HTML, HTTP et URL" },
            ],
          },
          quiz: [
            { q: "En quelle année ARPANET adopte-t-il le protocole TCP/IP, date souvent retenue pour la naissance d'Internet ?", options: ["1969", "1983", "1989", "1993"], answer: 1, why: "Le passage à TCP/IP a lieu le 1er janvier 1983 ; 1969 est la date du premier lien d'ARPANET." },
            { q: "Quelle affirmation sur le Web est exacte ?", options: ["Il a été conçu au ministère américain de la Défense en 1969", "Il désigne l'ensemble des câbles et des routeurs d'Internet", "Il remplace le courrier électronique, apparu après lui", "C'est une application d'Internet proposée au CERN"], answer: 3, why: "Le Web, proposé par Tim Berners-Lee au CERN en 1989, est un service qui fonctionne sur Internet." },
            { q: "Quel langage, livré par IBM en 1957, est le premier langage de haut niveau largement diffusé ?", options: ["FORTRAN", "Python", "JavaScript", "C"], answer: 0, why: "FORTRAN, conçu par l'équipe de John Backus, est destiné au calcul scientifique." },
            { q: "Quel est le rôle d'un compilateur ?", options: ["Relier entre eux plusieurs réseaux différents", "Afficher les pages HTML reçues dans une fenêtre du navigateur", "Traduire un programme source en langage machine", "Découper un message en paquets numérotés"], answer: 2, why: "Le compilateur traduit tout le programme source en langage machine avant son exécution." },
            { q: "Quelles sont les trois inventions sur lesquelles repose le Web ?", options: ["TCP, IP et DNS", "HTML, HTTP et URL", "ARPANET, CYCLADES et Minitel", "FORTRAN, COBOL et C"], answer: 1, why: "HTML décrit les pages, HTTP les transmet et les URL les désignent." },
          ],
          trap: "Confondre Internet et le Web : Internet est le réseau mondial (TCP/IP, 1983, issu d'ARPANET en 1969), tandis que le Web (1989 à 1991) n'est qu'une des applications qui l'utilisent.",
          method: "Pour chaque grande étape, retenez un triplet date, personne, apport (par exemple 1974, Cerf et Kahn, TCP), puis entraînez-vous à expliquer en une phrase ce que cette étape a rendu possible par rapport à la précédente.",
        },
      ],
    },

    /* ================================================================== */
    /* PROGRAMMER EN PYTHON : LES BASES                                     */
    /* ================================================================== */
    {
      id: 'bases-python',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'variables-affectation',
          title: 'Variables, types et affectation',
          minutes: 30,
          objectives: [
            "Utiliser les types de base de Python : int, float, str et bool.",
            "Écrire et interpréter une affectation, y compris une affectation multiple.",
            "Suivre l'évolution des variables d'un programme à l'aide d'un tableau d'état.",
            "Convertir une valeur d'un type à un autre avec int, float et str.",
          ],
          course: [
            {
              heading: "Une variable : un nom associé à une valeur",
              paragraphs: [
                "Une variable est un nom qui désigne une valeur rangée dans la mémoire de l'ordinateur. En Python, une variable est créée lors de sa première affectation : l'instruction age = 16 associe le nom age à la valeur 16. On peut se la représenter comme une étiquette collée sur une boîte qui contient la valeur. L'affectation se lit de droite à gauche : Python calcule d'abord l'expression placée à droite du signe =, puis associe le résultat au nom placé à gauche.",
                "Le signe = n'est donc pas l'égalité des mathématiques. L'instruction x = x + 1 n'a aucun sens comme équation, mais elle en a un comme affectation : on calcule x + 1 avec l'ancienne valeur de x, puis on range le résultat dans x, qui augmente de 1. Pour tester l'égalité de deux valeurs, Python utilise un autre symbole, le double égal ==.",
                "Un nom de variable est formé de lettres, de chiffres et du caractère souligné _, sans espace (les lettres accentuées sont permises mais déconseillées), et ne commence jamais par un chiffre. Python distingue majuscules et minuscules : Note et note sont deux variables différentes. Les mots réservés du langage (if, for, while, def, return, True...) sont interdits. On choisit des noms explicites, écrits en minuscules avec des soulignés : prix_total plutôt que p.",
              ],
              box: { label: "Définition", text: "Une affectation, écrite nom = expression, évalue l'expression de droite puis associe sa valeur au nom de gauche. Si la variable existait déjà, son ancienne valeur est remplacée." },
            },
            {
              heading: "Les types de base et leurs opérations",
              paragraphs: [
                "Chaque valeur a un type, que donne la fonction type. Les entiers (int) s'écrivent sans virgule : 16, -3, 0 ; en Python, ils peuvent être aussi grands que la mémoire le permet (2 ** 100 est calculé exactement). Les nombres à virgule (float) s'écrivent avec un point : 3.14, 2.0, 1e-3 (qui vaut 0,001). Les chaînes de caractères (str) s'écrivent entre apostrophes ou entre guillemets : 'NSI'. Les booléens (bool) n'ont que deux valeurs, True et False. Le type d'une variable n'est pas déclaré : il est celui de la valeur qu'elle désigne, et il peut changer après une nouvelle affectation.",
                "Sur les nombres, on dispose de + (addition), - (soustraction), * (multiplication), ** (puissance) et de trois divisions. La division / donne toujours un float : 7 / 2 vaut 3.5 et 6 / 2 vaut 3.0. Le quotient entier // et le reste % correspondent à la division euclidienne : 17 // 5 vaut 3 et 17 % 5 vaut 2, car 17 = 5 × 3 + 2. Les priorités sont celles des mathématiques : ** d'abord, puis *, /, // et %, enfin + et - ; les parenthèses permettent de les modifier.",
                "Les opérateurs + et * agissent aussi sur les chaînes : + les met bout à bout (concaténation) et * les répète. Ainsi 'nsi' + '1re' vaut 'nsi1re', '3' + '4' vaut '34' et 'ab' * 3 vaut 'ababab'. La fonction len donne la longueur d'une chaîne : len('NSI') vaut 3.",
              ],
              box: { label: "Formule", text: "Pour deux entiers a et b, avec b > 0 : a = b × (a // b) + (a % b), et 0 ≤ a % b < b. Exemple : 17 = 5 × 3 + 2, donc 17 // 5 vaut 3 et 17 % 5 vaut 2. Le reste permet de tester la divisibilité : n est pair si n % 2 vaut 0." },
            },
            {
              heading: "Conversions, saisie et affichage",
              paragraphs: [
                "La fonction input affiche un message, attend que l'utilisateur tape une réponse et renvoie toujours une chaîne de caractères. Après n = input('Votre âge : '), si l'utilisateur tape 16, la variable n vaut '16' et non 16 : l'expression n + 1 provoque une erreur TypeError, car Python refuse d'additionner une chaîne et un entier. Il faut convertir : n = int(input('Votre âge : ')).",
                "Les fonctions de conversion portent le nom du type visé. int('42') vaut 42, float('2.5') vaut 2.5, str(16) vaut '16'. Appliquée à un float, int tronque : int(3.9) vaut 3. Une conversion impossible lève une erreur : int('douze') ou int('3.9') provoquent une ValueError. Dans un calcul mêlant int et float, Python convertit automatiquement l'entier : 2 + 3.0 vaut 5.0.",
                "La fonction print affiche une ou plusieurs valeurs, séparées par une espace : print('Total :', 12) affiche Total : 12. Les chaînes formatées, précédées de la lettre f, insèrent la valeur d'une expression placée entre accolades : avec age = 16, print(f'Vous avez {age} ans') affiche Vous avez 16 ans.",
              ],
            },
            {
              heading: "Suivre un programme : le tableau d'état",
              paragraphs: [
                "Les instructions s'exécutent dans l'ordre, l'une après l'autre. Pour prévoir le résultat d'un programme, on dresse un tableau d'état : une colonne par variable, une ligne par instruction, et l'on note la valeur de chaque variable après chaque instruction. Exemple : a = 3, puis b = 5, puis a = a + b, puis b = a * 2. Après la première ligne, a vaut 3 et b n'existe pas encore ; après la deuxième, b vaut 5 ; après la troisième, a vaut 8 ; après la quatrième, b vaut 16 (calculé avec la nouvelle valeur de a).",
                "Pour échanger les valeurs de deux variables, l'écriture a = b puis b = a ne fonctionne pas : après a = b, l'ancienne valeur de a est perdue, et les deux variables valent b. On peut passer par une variable temporaire : c = a, puis a = b, puis b = c. Python permet aussi l'affectation multiple a, b = b, a : toutes les expressions de droite sont évaluées d'abord, avec les anciennes valeurs, puis affectées ensemble.",
              ],
              box: { label: "Règle", text: "Dans une affectation, on évalue d'abord tout le membre de droite avec les valeurs actuelles des variables, puis on affecte. Dans l'affectation multiple x, y = e1, e2, les deux expressions e1 et e2 sont calculées avant toute modification." },
            },
          ],
          keyPoints: [
            "nom = expression : on évalue la droite, puis on associe la valeur au nom de gauche ; = n'est pas un test d'égalité (==).",
            "Quatre types de base : int (16), float (3.5), str ('NSI'), bool (True, False) ; type(x) donne le type.",
            "/ donne toujours un float ; // donne le quotient entier et % le reste de la division euclidienne.",
            "input renvoie toujours une chaîne : convertir avec int ou float avant de calculer.",
            "Un tableau d'état (une colonne par variable, une ligne par instruction) permet de suivre un programme.",
            "a, b = b, a échange deux valeurs ; a = b puis b = a ne les échange pas.",
          ],
          example: {
            statement: "On exécute les instructions suivantes, dans l'ordre : x = 7 ; y = 2 ; q = x // y ; r = x % y ; x = q * y + r ; z = x / y. Dresser le tableau d'état, puis donner la valeur et le type de q, r, x et z à la fin.",
            solution: [
              "Après x = 7 : x vaut 7. Après y = 2 : y vaut 2.",
              "q = x // y : quotient entier de 7 par 2, donc q vaut 3.",
              "r = x % y : reste de la division de 7 par 2, donc r vaut 1 (car 7 = 2 × 3 + 1).",
              "x = q * y + r : on calcule 3 × 2 + 1 = 7, donc x vaut de nouveau 7 ; on retrouve la relation de la division euclidienne.",
              "z = x / y : la division / donne un float, donc z vaut 3.5.",
              "Réponse : q vaut 3 (int), r vaut 1 (int), x vaut 7 (int) et z vaut 3.5 (float).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner la valeur et le type de chacune des expressions suivantes : a) 7 / 2 ; b) 7 // 2 ; c) 7 % 2 ; d) 2 ** 3 ; e) '7' + '2' ; f) int('7') + 2 ; g) 3 * 'ab'.",
              hint: "Repérez d'abord le type des opérandes : deux chaînes ne s'additionnent pas comme deux nombres.",
              solution: [
                "a) 7 / 2 vaut 3.5, de type float (la division / donne toujours un float).",
                "b) 7 // 2 vaut 3, de type int (quotient entier).",
                "c) 7 % 2 vaut 1, de type int (reste : 7 = 2 × 3 + 1).",
                "d) 2 ** 3 vaut 8, de type int.",
                "e) '7' + '2' vaut '72', de type str (concaténation de deux chaînes).",
                "f) int('7') + 2 vaut 9, de type int (la chaîne est convertie en entier avant l'addition).",
                "g) 3 * 'ab' vaut 'ababab', de type str (répétition).",
              ],
            },
            {
              level: 2,
              statement: "On exécute : a = 5 ; b = 3 ; a = a + b ; b = a - b ; a = a - b. a) Dresser le tableau d'état de a et b. b) Quel est l'effet de ce programme ? c) Le réécrire en une seule instruction Python.",
              hint: "Calculez chaque nouvelle valeur avec les valeurs obtenues à la ligne précédente, pas avec les valeurs de départ.",
              solution: [
                "Après a = 5 et b = 3 : a vaut 5, b vaut 3.",
                "a = a + b : a vaut 5 + 3 = 8 ; b vaut toujours 3.",
                "b = a - b : b vaut 8 - 3 = 5 ; a vaut toujours 8.",
                "a = a - b : a vaut 8 - 5 = 3 ; b vaut toujours 5.",
                "b) À la fin, a vaut 3 et b vaut 5 : le programme échange les valeurs de a et b, sans variable temporaire.",
                "c) En Python, on écrit simplement a, b = b, a.",
              ],
            },
            {
              level: 3,
              statement: "On veut écrire un programme qui demande une durée en secondes et l'affiche en heures, minutes et secondes. 1. Écrire ce programme en utilisant input, int, // et %. 2. Quel affichage obtient-on pour 7384 secondes ? 3. Un élève oublie la conversion et écrit duree = input('Durée en secondes : ') puis h = duree // 3600. Que se passe-t-il, et pourquoi ?",
              hint: "Une heure compte 3600 secondes : le quotient par 3600 donne les heures, et le reste contient les minutes et les secondes restantes.",
              solution: [
                "1. Ligne 1 : duree = int(input('Durée en secondes : ')). Ligne 2 : h = duree // 3600. Ligne 3 : reste = duree % 3600. Ligne 4 : m = reste // 60. Ligne 5 : s = reste % 60. Ligne 6 : print(f'{h} h {m} min {s} s').",
                "2. Pour 7384 : h = 7384 // 3600 = 2, car 2 × 3600 = 7200 ≤ 7384 < 10 800.",
                "reste = 7384 % 3600 = 7384 - 7200 = 184.",
                "m = 184 // 60 = 3, car 3 × 60 = 180, et s = 184 % 60 = 4.",
                "Vérification : 2 × 3600 + 3 × 60 + 4 = 7200 + 180 + 4 = 7384. L'affichage est 2 h 3 min 4 s.",
                "3. Sans int, duree est une chaîne ('7384'). L'opération // entre une chaîne et un entier n'existe pas : Python lève une erreur TypeError et le programme s'arrête.",
                "Résultat : 7384 secondes valent 2 h 3 min 4 s, et la conversion int est indispensable.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : variables, types et affectation.",
            statements: [
              { text: "En Python, x = x + 1 est une équation sans solution.", true: false, why: "C'est une affectation : on calcule x + 1, puis on range le résultat dans x." },
              { text: "6 / 2 vaut 3.0, qui est un float.", true: true, why: "La division / donne toujours un float, même quand elle tombe juste." },
              { text: "'3' + '4' vaut '7'.", true: false, why: "Sur des chaînes, + concatène : le résultat est '34'." },
              { text: "Les noms Note et note désignent deux variables différentes.", true: true, why: "Python distingue les majuscules des minuscules." },
              { text: "Un nom de variable peut commencer par un chiffre, comme 2nde.", true: false, why: "Un nom ne commence jamais par un chiffre ; on peut écrire seconde ou classe_2nde." },
              { text: "int(3.9) vaut 3.", true: true, why: "int tronque la partie décimale, il n'arrondit pas." },
              { text: "Si l'utilisateur tape 12, input renvoie l'entier 12.", true: false, why: "input renvoie toujours une chaîne, ici '12' : il faut la convertir avec int." },
            ],
          },
          quiz: [
            { q: "Que vaut l'expression 17 // 5 ?", options: ["3.4", "3", "2", "15"], answer: 1, why: "// donne le quotient entier : 17 = 5 × 3 + 2, donc le quotient vaut 3 (et le reste 2)." },
            { q: "Après a = 4 ; b = a ; a = a + 1, que vaut b ?", options: ["5", "Une erreur est levée", "4"], answer: 2, why: "b a reçu la valeur 4 ; modifier ensuite a ne change pas b." },
            { q: "Quel est le type de la valeur de 6 / 2 ?", options: ["int", "str", "bool", "float"], answer: 3, why: "La division / renvoie toujours un float : 6 / 2 vaut 3.0." },
            { q: "Que renvoie la fonction input ?", options: ["Une chaîne de caractères", "Un nombre entier ou flottant, selon ce que l'on tape", "Un booléen qui indique si la saisie est valide"], answer: 0, why: "input renvoie toujours un str ; on le convertit avec int ou float pour calculer." },
            { q: "Quelle instruction échange les valeurs de a et b ?", options: ["a = b ; b = a", "a, b = b, a", "a == b ; b == a", "b = a ; a = b"], answer: 1, why: "L'affectation multiple évalue b et a avant de les affecter ; les autres versions perdent une valeur ou ne font que des tests." },
          ],
          trap: "Croire que le signe = est une égalité ou qu'une affectation est « liée » : après b = a, modifier a ne modifie pas b, et l'écriture a = b puis b = a n'échange pas deux variables, elle perd l'ancienne valeur de a.",
          method: "Dès qu'un programme comporte plusieurs affectations, dressez un tableau d'état : une colonne par variable, une ligne par instruction, en calculant toujours avec les valeurs de la ligne précédente. Vérifiez ensuite en exécutant le programme avec des print.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'instructions-conditionnelles',
          title: 'Les instructions conditionnelles',
          minutes: 30,
          objectives: [
            "Écrire une instruction conditionnelle avec if, elif et else, en respectant l'indentation.",
            "Construire une condition à l'aide des opérateurs de comparaison et des opérateurs and, or et not.",
            "Prévoir la branche exécutée par un programme pour des valeurs données et choisir des valeurs de test.",
          ],
          course: [
            {
              heading: "Choisir entre deux traitements : if et else",
              paragraphs: [
                "Une instruction conditionnelle permet d'exécuter des instructions seulement si une condition est vraie. En Python, on écrit le mot if, la condition, puis deux points ; les instructions à exécuter forment un bloc, décalé vers la droite (indenté, en général de quatre espaces). Le mot else, suivi de deux points, introduit un second bloc, exécuté lorsque la condition est fausse. Exemple : ligne 1 : if note >= 10: ; ligne 2, dans le bloc : print('Admis') ; ligne 3 : else: ; ligne 4, dans le bloc : print('Non admis').",
                "L'indentation n'est pas décorative : c'est elle qui indique à Python quelles instructions appartiennent au bloc. Une instruction revenue au niveau du if est exécutée dans tous les cas, après la conditionnelle. Une indentation incohérente provoque une erreur IndentationError. La partie else est facultative : sans elle, on ne fait rien quand la condition est fausse.",
              ],
              box: { label: "Règle", text: "if condition: suivi d'un bloc indenté, exécuté si la condition vaut True ; else: suivi d'un bloc indenté, exécuté sinon. Les deux points et l'indentation sont obligatoires." },
            },
            {
              heading: "Les conditions : comparaisons et opérateurs logiques",
              paragraphs: [
                "Une condition est une expression booléenne, qui vaut True ou False. On l'obtient souvent par une comparaison : == (égal), != (différent), <, <=, >, >=. Ainsi 3 < 5 vaut True et 4 == 5 vaut False. Il ne faut pas confondre = (affectation) et == (test d'égalité). Python accepte les comparaisons enchaînées : 0 <= x < 10 signifie que x est compris entre 0 inclus et 10 exclu. Les chaînes se comparent selon l'ordre des codes de leurs caractères : 'chat' < 'chien' vaut True, mais 'Zoé' < 'anna' aussi, car les majuscules ont des codes plus petits que les minuscules.",
                "On combine les conditions avec and (vrai si les deux sont vraies), or (vrai si au moins une est vraie) et not (qui inverse la valeur). Les priorités sont not, puis and, puis or ; en cas de doute, on met des parenthèses. Python évalue and et or de gauche à droite et s'arrête dès que le résultat est connu : dans d != 0 and n % d == 0, le reste n'est jamais calculé si d vaut 0, ce qui évite une erreur de division par zéro.",
              ],
            },
            {
              heading: "Plusieurs cas : elif",
              paragraphs: [
                "Pour distinguer plus de deux cas, on ajoute des blocs elif (contraction de else if, « sinon si »). Python teste les conditions dans l'ordre et exécute le bloc de la première condition vraie, puis sort de la structure : les conditions suivantes ne sont même pas examinées. Le bloc else final, facultatif, traite tous les cas restants.",
                "L'ordre des tests compte donc. Pour attribuer une mention, on écrit : if note >= 16: mention = 'Très bien', puis elif note >= 14: mention = 'Bien', puis elif note >= 12: mention = 'Assez bien', puis else: mention = 'Aucune'. Avec 15, le premier test est faux, le deuxième vrai : la mention est Bien. Si l'on commençait par tester note >= 12, une note de 17 recevrait Assez bien, et les branches suivantes ne seraient jamais atteintes.",
              ],
              box: { label: "À retenir", text: "Dans une structure if, elif, ..., else, un seul bloc au plus est exécuté : celui de la première condition vraie (ou le else si aucune ne l'est). On ordonne les tests du cas le plus restrictif au plus général." },
            },
            {
              heading: "Conditions imbriquées et choix des tests",
              paragraphs: [
                "Un bloc peut lui-même contenir une conditionnelle : on parle de conditions imbriquées. Souvent, on peut les remplacer par une seule condition avec and ou or. Exemple : une année est bissextile si elle est divisible par 4 sans l'être par 100, ou si elle est divisible par 400. En Python : (annee % 4 == 0 and annee % 100 != 0) or annee % 400 == 0. Ainsi 2024 est bissextile, 1900 ne l'est pas (divisible par 100 mais pas par 400), 2000 l'est (divisible par 400).",
                "Pour vérifier une conditionnelle, on choisit des valeurs de test qui font passer par chaque branche, ainsi que les valeurs limites : pour if note >= 10, on teste 9, 10 et 11. C'est à la limite que se cachent les erreurs les plus fréquentes, par exemple > écrit à la place de >=.",
              ],
            },
          ],
          keyPoints: [
            "if condition: puis un bloc indenté ; else: pour le cas contraire ; deux points et indentation obligatoires.",
            "Comparaisons : ==, !=, <, <=, >, >= ; ne pas confondre = (affectation) et == (test).",
            "and, or, not combinent les conditions ; priorité : not, puis and, puis or ; évaluation de gauche à droite, arrêtée dès que le résultat est connu.",
            "Avec elif, seul le bloc de la première condition vraie est exécuté : l'ordre des tests compte.",
            "Tester chaque branche et les valeurs limites (9, 10 et 11 pour note >= 10).",
          ],
          example: {
            statement: "Écrire un programme qui, à partir d'une variable annee (un entier), affiche « bissextile » ou « non bissextile », puis donner l'affichage pour 2024, 1900, 2000 et 2023.",
            solution: [
              "Règle : une année est bissextile si elle est divisible par 4 et pas par 100, ou si elle est divisible par 400. « Divisible par 4 » se traduit par annee % 4 == 0.",
              "Ligne 1 : if (annee % 4 == 0 and annee % 100 != 0) or annee % 400 == 0: ; ligne 2, dans le bloc : print('bissextile') ; ligne 3 : else: ; ligne 4, dans le bloc : print('non bissextile').",
              "2024 : 2024 % 4 vaut 0 et 2024 % 100 vaut 24, la première partie est vraie : bissextile.",
              "1900 : divisible par 4 mais aussi par 100, la première partie est fausse ; 1900 % 400 vaut 300, la seconde aussi : non bissextile.",
              "2000 : divisible par 100, mais 2000 % 400 vaut 0 : bissextile.",
              "2023 : 2023 % 4 vaut 3 et 2023 % 400 vaut 23 : non bissextile.",
              "Réponse : 2024 et 2000 sont bissextiles ; 1900 et 2023 ne le sont pas.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) On exécute : ligne 1 : x = 7 ; ligne 2 : if x % 2 == 0: ; ligne 3, dans le bloc : print('pair') ; ligne 4 : else: ; ligne 5, dans le bloc : print('impair'). Qu'affiche ce programme ? Et si x vaut 12 ? b) Donner la valeur de : 3 < 5 and 5 < 2 ; 3 < 5 or 5 < 2 ; not (4 == 4) or 2 != 3.",
              hint: "Calculez d'abord chaque comparaison (True ou False), puis appliquez not, ensuite and, enfin or.",
              solution: [
                "a) Pour x = 7 : 7 % 2 vaut 1, la condition 1 == 0 est fausse, le bloc else s'exécute : affichage impair.",
                "Pour x = 12 : 12 % 2 vaut 0, la condition est vraie : affichage pair.",
                "b) 3 < 5 vaut True et 5 < 2 vaut False : True and False vaut False.",
                "True or False vaut True.",
                "not (4 == 4) vaut not True, soit False ; 2 != 3 vaut True ; False or True vaut True.",
                "Résultats : impair, pair, puis False, True, True.",
              ],
            },
            {
              level: 2,
              statement: "Un cinéma applique les tarifs suivants (données fictives) : moins de 14 ans, 5 euros ; de 14 à 25 ans inclus, 7 euros ; plus de 25 ans, 10 euros. a) Écrire un programme qui, à partir de la variable age, range le tarif dans la variable prix. b) Donner prix pour age valant 10, 14, 25 et 26. c) Un élève a écrit : if age > 0: prix = 10, puis elif age < 14: prix = 5, puis else: prix = 7. Quel est le problème ?",
              hint: "Traduisez chaque tranche par une condition, en faisant attention aux mots « inclus » et « moins de ». Pour c), demandez-vous quelle condition est vraie en premier.",
              solution: [
                "a) Ligne 1 : if age < 14: prix = 5 ; ligne 2 : elif age <= 25: prix = 7 ; ligne 3 : else: prix = 10. Quand on arrive au elif, on sait déjà que age ≥ 14 : inutile de le tester.",
                "b) age = 10 : 10 < 14, prix vaut 5.",
                "age = 14 : 14 < 14 est faux, 14 <= 25 est vrai, prix vaut 7.",
                "age = 25 : 25 <= 25 est vrai, prix vaut 7. age = 26 : les deux tests sont faux, prix vaut 10.",
                "c) Pour tout âge positif, la première condition age > 0 est vraie : prix vaut toujours 10 et les branches suivantes ne sont jamais atteintes. Il faut tester les cas les plus restrictifs d'abord.",
                "Résultat : 5, 7, 7 et 10 euros ; la version de l'élève donne 10 euros à tout le monde.",
              ],
            },
            {
              level: 3,
              statement: "Au baccalauréat général, un candidat dont la moyenne est supérieure ou égale à 10 est admis ; avec une moyenne d'au moins 8 et inférieure à 10, il passe les épreuves du second groupe (oral de rattrapage) ; en dessous de 8, il est ajourné. Un candidat admis obtient la mention Assez bien à partir de 12, Bien à partir de 14, Très bien à partir de 16. 1. Écrire un programme qui affiche le résultat à partir de la variable moyenne (un float). 2. Donner l'affichage pour 7.5, 8, 9.99, 12, 15.5 et 16. 3. Proposer un jeu de valeurs de test qui fait passer par chaque branche et par chaque valeur limite.",
              hint: "Commencez par trois cas (admis, second groupe, ajourné), puis, dans le cas admis, ajoutez une seconde conditionnelle pour la mention, en testant d'abord la mention la plus haute.",
              solution: [
                "1. Ligne 1 : if moyenne >= 10: ; ligne 2, dans le bloc : if moyenne >= 16: print('Admis, mention Très bien') ; ligne 3 : elif moyenne >= 14: print('Admis, mention Bien') ; ligne 4 : elif moyenne >= 12: print('Admis, mention Assez bien') ; ligne 5 : else: print('Admis') ; ligne 6, au niveau du premier if : elif moyenne >= 8: print('Second groupe') ; ligne 7 : else: print('Ajourné').",
                "2. 7.5 : 7.5 >= 10 et 7.5 >= 8 sont faux : Ajourné.",
                "8 : 8 >= 10 est faux, 8 >= 8 est vrai : Second groupe. 9.99 : même raisonnement, Second groupe.",
                "12 : admis ; 12 >= 16 et 12 >= 14 sont faux, 12 >= 12 est vrai : Admis, mention Assez bien.",
                "15.5 : admis ; 15.5 >= 14 est la première condition vraie : Admis, mention Bien. 16 : 16 >= 16 est vrai : Admis, mention Très bien.",
                "3. Valeurs de test : 7.9 et 8 (limite ajourné ou second groupe), 9.9 et 10 (limite second groupe ou admis), 11.9 et 12, 13.9 et 14, 15.9 et 16 (limites des mentions) ; chacune des six branches est ainsi parcourue.",
                "Résultat : Ajourné, Second groupe, Second groupe, Admis mention Assez bien, Admis mention Bien, Admis mention Très bien.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément de Python à son rôle.",
            pairs: [
              { left: "=", right: "Affecte une valeur à une variable" },
              { left: "==", right: "Teste si deux valeurs sont égales" },
              { left: "!=", right: "Teste si deux valeurs sont différentes" },
              { left: "elif", right: "Teste une nouvelle condition si les précédentes sont fausses" },
              { left: "and", right: "Vrai seulement si les deux conditions sont vraies" },
              { left: "not", right: "Inverse une valeur booléenne" },
            ],
          },
          quiz: [
            { q: "Avec x = 7, qu'affiche : if x > 10: print('A') ; elif x > 5: print('B') ; elif x > 0: print('C') ; else: print('D') ?", options: ["A", "B", "C", "B puis C"], answer: 1, why: "La première condition vraie est x > 5 : seul le bloc correspondant est exécuté, les suivants ne sont pas examinés." },
            { q: "Que vaut not (3 > 2) or 5 == 5 ?", options: ["True", "False", "Une erreur de syntaxe"], answer: 0, why: "not (3 > 2) vaut False et 5 == 5 vaut True ; False or True vaut True." },
            { q: "Quel symbole teste l'égalité de deux valeurs en Python ?", options: ["=", "!=", "==", "=>"], answer: 2, why: "Le signe = sert à l'affectation ; == compare deux valeurs." },
            { q: "Avec x = 0, que donne l'expression x != 0 and 10 / x > 1 ?", options: ["Elle lève une erreur ZeroDivisionError", "Elle vaut True car 10 / 0 est infini", "Elle vaut False sans calculer 10 / x"], answer: 2, why: "x != 0 vaut False : and s'arrête là, la division n'est jamais effectuée." },
            { q: "Dans une structure if, elif, else, combien de blocs sont exécutés au plus ?", options: ["Un seul", "Tous ceux dont la condition est vraie", "Deux : celui du if et celui du else", "Aucun si la condition du if est fausse"], answer: 0, why: "Python exécute le bloc de la première condition vraie, ou le else, puis sort de la structure." },
          ],
          trap: "Mal ordonner les tests d'une suite de elif (tester note >= 12 avant note >= 16, par exemple) : seule la première condition vraie est exécutée, et certaines branches ne sont jamais atteintes. Autre erreur fréquente : écrire = au lieu de == dans une condition.",
          method: "Avant d'écrire une conditionnelle, faites la liste des cas avec leurs bornes (inclus ou exclus) sur une droite graduée ; après l'avoir écrite, testez une valeur dans chaque cas et les deux valeurs qui entourent chaque borne.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'boucles',
          title: 'Les boucles bornées et non bornées',
          minutes: 35,
          objectives: [
            "Écrire une boucle bornée avec for et la fonction range.",
            "Écrire une boucle non bornée avec while, en s'assurant qu'elle se termine.",
            "Choisir le type de boucle adapté à un problème et utiliser un compteur ou un accumulateur.",
            "Prévoir le nombre de tours d'une boucle et les valeurs successives de ses variables.",
          ],
          course: [
            {
              heading: "La boucle bornée : for",
              paragraphs: [
                "Une boucle répète un bloc d'instructions. Lorsque le nombre de répétitions est connu à l'avance, on utilise une boucle bornée, écrite avec for. L'instruction for i in range(5): suivie d'un bloc indenté exécute ce bloc 5 fois ; la variable i prend successivement les valeurs 0, 1, 2, 3 et 4. Chaque exécution du bloc s'appelle un tour (ou une itération).",
                "La fonction range a plusieurs formes. range(n) produit les entiers de 0 à n - 1. range(a, b) produit les entiers de a inclus à b exclu : range(3, 7) donne 3, 4, 5, 6, soit b - a = 4 valeurs. range(a, b, p) avance avec un pas p : range(2, 11, 3) donne 2, 5, 8. Le pas peut être négatif : range(10, 0, -3) donne 10, 7, 4, 1. La borne de fin n'est jamais atteinte.",
                "La boucle for parcourt aussi directement les caractères d'une chaîne : for c in 'NSI': print(c) affiche N, puis S, puis I. On retrouvera ce parcours avec les listes.",
              ],
              box: { label: "Repère", text: "range(n) : 0, 1, ..., n - 1 (n valeurs). range(a, b) : a, a + 1, ..., b - 1 (b - a valeurs si a ≤ b). range(a, b, p) : a, a + p, a + 2p... tant que l'on reste avant b. La valeur de fin b est toujours exclue." },
            },
            {
              heading: "Compteurs et accumulateurs",
              paragraphs: [
                "Beaucoup de boucles suivent le même schéma : on initialise une variable avant la boucle, on la met à jour à chaque tour, on l'utilise après la boucle. Un accumulateur cumule des valeurs : pour calculer 1 + 2 + ... + 100, on écrit s = 0, puis for i in range(1, 101): s = s + i ; à la fin, s vaut 5050. Pour un produit, on initialise à 1 et non à 0 : p = 1, puis for i in range(1, 6): p = p * i donne 120, soit 5! (factorielle de 5).",
                "Un compteur compte les tours où une condition est vraie. Pour compter les voyelles d'un mot, on écrit nb = 0, puis for c in mot: if c in 'aeiouy': nb = nb + 1. L'oubli de l'initialisation, ou une initialisation placée dans la boucle, est une erreur classique : la variable serait remise à zéro à chaque tour.",
              ],
            },
            {
              heading: "La boucle non bornée : while",
              paragraphs: [
                "Lorsque l'on ne sait pas à l'avance combien de tours seront nécessaires, on utilise une boucle non bornée, écrite avec while (« tant que »). Le bloc est répété tant que la condition est vraie ; la condition est testée avant chaque tour, de sorte que le bloc peut n'être exécuté aucune fois. Exemple : pour trouver la plus petite puissance de 2 strictement supérieure à 1000, on écrit n = 0 et p = 1, puis while p <= 1000: p = p * 2 ; n = n + 1. À la fin, p vaut 1024 et n vaut 10.",
                "Le danger est la boucle infinie : si le bloc ne modifie jamais les variables de la condition, ou les modifie dans le mauvais sens, la condition reste vraie pour toujours. Avec n = 1 puis while n > 0: n = n + 1, le programme ne s'arrête jamais (on l'interrompt avec Ctrl+C). Pour s'assurer qu'une boucle while se termine, on vérifie qu'une quantité évolue à chaque tour vers la sortie, par exemple un entier positif qui diminue strictement.",
              ],
              box: { label: "Règle", text: "while condition: suivi d'un bloc indenté. La condition est évaluée avant chaque tour ; dès qu'elle vaut False, on sort de la boucle. Le bloc doit modifier au moins une variable de la condition pour que la boucle puisse s'arrêter." },
            },
            {
              heading: "Choisir sa boucle, boucles imbriquées",
              paragraphs: [
                "On choisit for quand le nombre de tours est connu (ou que l'on parcourt une chaîne, une liste), et while quand l'arrêt dépend d'une condition qui n'est pas prévisible simplement. Toute boucle for peut s'écrire avec while : for i in range(n) équivaut à i = 0, puis while i < n: (le bloc) ; i = i + 1. L'inverse n'est pas toujours possible simplement.",
                "Une boucle peut en contenir une autre. Avec for i in range(3): for j in range(4): print(i, j), le bloc intérieur s'exécute 3 × 4 = 12 fois : pour chaque valeur de i, j parcourt 0, 1, 2, 3. On s'en sert par exemple pour afficher une table de multiplication ou parcourir un tableau à deux dimensions.",
              ],
            },
          ],
          keyPoints: [
            "for i in range(n) : n tours, i allant de 0 à n - 1 ; range(a, b, p) : de a à b exclu, avec un pas p.",
            "while condition : on répète tant que la condition est vraie ; elle est testée avant chaque tour.",
            "Accumulateur : initialisé avant la boucle (0 pour une somme, 1 pour un produit), mis à jour dans la boucle.",
            "Une boucle while doit modifier les variables de sa condition, sinon elle peut ne jamais s'arrêter.",
            "for si le nombre de tours est connu, while si l'arrêt dépend d'une condition ; deux boucles imbriquées de n et m tours font n × m tours.",
          ],
          example: {
            statement: "On part d'un entier n = 6. Tant que n est différent de 1, on le divise par 2 s'il est pair, sinon on le remplace par 3n + 1 (suite de Syracuse). Écrire le programme qui compte le nombre d'étapes nécessaires pour atteindre 1, puis l'exécuter à la main.",
            solution: [
              "Le nombre d'étapes n'est pas connu à l'avance : on utilise une boucle while.",
              "Ligne 1 : n = 6 ; ligne 2 : etapes = 0 ; ligne 3 : while n != 1: ; ligne 4, dans la boucle : if n % 2 == 0: n = n // 2 ; ligne 5, dans la boucle : else: n = 3 * n + 1 ; ligne 6, dans la boucle : etapes = etapes + 1 ; ligne 7, après la boucle : print(etapes).",
              "Exécution : 6 est pair, n devient 3 (1 étape) ; 3 est impair, n devient 10 (2) ; puis 5 (3) ; puis 16 (4).",
              "Puis 8 (5), 4 (6), 2 (7) et enfin 1 (8) : la condition n != 1 devient fausse, on sort de la boucle.",
              "Réponse : le programme affiche 8 ; les valeurs successives de n sont 6, 3, 10, 5, 16, 8, 4, 2, 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Quelles valeurs affiche for k in range(2, 11, 3): print(k) ? b) Combien de tours effectue for i in range(5, 20) ? c) Écrire l'appel à range qui produit 10, 8, 6, 4, 2.",
              hint: "La borne de fin est toujours exclue ; avec un pas négatif, on part de la plus grande valeur.",
              solution: [
                "a) On part de 2 et on ajoute 3 tant que l'on reste avant 11 : 2, 5, 8 (la valeur suivante, 11, est exclue).",
                "b) range(5, 20) donne les entiers de 5 à 19 : 20 - 5 = 15 tours.",
                "c) On part de 10 avec un pas de -2 et l'on s'arrête avant 0 : range(10, 0, -2) (range(10, 1, -2) convient aussi).",
                "Résultats : 2, 5, 8 ; 15 tours ; range(10, 0, -2).",
              ],
            },
            {
              level: 2,
              statement: "a) Écrire un programme qui calcule la somme des carrés 1² + 2² + ... + 10² et donner le résultat. b) Écrire un programme qui compte les multiples de 7 compris entre 1 et 100 et donner le résultat. c) Pourquoi l'initialisation s = 0 doit-elle être placée avant la boucle et non dedans ?",
              hint: "Utilisez un accumulateur pour a) et un compteur avec une condition sur le reste de la division par 7 pour b).",
              solution: [
                "a) Ligne 1 : s = 0 ; ligne 2 : for i in range(1, 11): ; ligne 3, dans la boucle : s = s + i ** 2 ; ligne 4 : print(s).",
                "Calcul : 1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385.",
                "b) Ligne 1 : nb = 0 ; ligne 2 : for i in range(1, 101): ; ligne 3, dans la boucle : if i % 7 == 0: nb = nb + 1 ; ligne 4 : print(nb).",
                "Les multiples de 7 sont 7, 14, ..., 98 = 7 × 14 : il y en a 14.",
                "c) Placée dans la boucle, l'instruction s = 0 remettrait la somme à zéro à chaque tour : à la fin, s ne contiendrait que le dernier carré, 100.",
                "Résultats : 385 et 14.",
              ],
            },
            {
              level: 3,
              statement: "Une balle est lâchée d'une hauteur de 10 m ; après chaque rebond, elle remonte à 60 % de la hauteur précédente (données fictives). 1. Écrire un programme qui calcule le nombre de rebonds nécessaires pour que la hauteur atteinte devienne strictement inférieure à 1 m. 2. Exécuter ce programme à la main en dressant le tableau d'état. 3. Pourquoi une boucle for ne convient-elle pas directement ? 4. Que se passerait-il si, par erreur, on écrivait h = h * 1.2 ?",
              hint: "La hauteur après un rebond s'obtient en multipliant la hauteur précédente par 0.6 ; on répète tant que la hauteur reste supérieure ou égale à 1.",
              solution: [
                "1. Ligne 1 : h = 10 ; ligne 2 : n = 0 ; ligne 3 : while h >= 1: ; ligne 4, dans la boucle : h = h * 0.6 ; ligne 5, dans la boucle : n = n + 1 ; ligne 6, après la boucle : print(n).",
                "2. Départ : h = 10, n = 0. Tour 1 : h = 6, n = 1. Tour 2 : h = 3.6, n = 2. Tour 3 : h = 2.16, n = 3.",
                "Tour 4 : h = 1.296, n = 4. Tour 5 : h = 0.7776, n = 5. La condition 0.7776 >= 1 est fausse : on sort de la boucle.",
                "(Python affiche en réalité des valeurs comme 3.5999999999999996 au lieu de 3.6, à cause de la représentation des nombres flottants, sans effet ici sur le résultat.)",
                "3. Le nombre de rebonds n'est pas connu au départ : c'est justement ce que l'on cherche. On ne peut donc pas fixer à l'avance le nombre de tours d'une boucle for.",
                "4. Avec h = h * 1.2, la hauteur augmente à chaque tour : la condition h >= 1 reste toujours vraie et la boucle ne s'arrête jamais (boucle infinie).",
                "Résultat : il faut 5 rebonds ; la hauteur atteinte est alors d'environ 0,78 m.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre d'affichage les nombres affichés par : n = 5 ; while n != 1: print(n) ; if n % 2 == 0: n = n // 2 ; else: n = 3 * n + 1 ; puis, après la boucle, print(n).",
            items: ["5", "16", "8", "4", "2", "1"],
          },
          quiz: [
            { q: "Combien de fois le bloc de for i in range(3, 10) est-il exécuté ?", options: ["10", "7", "6", "8"], answer: 1, why: "i prend les valeurs 3 à 9, soit 10 - 3 = 7 valeurs." },
            { q: "Quelles valeurs prend i dans for i in range(1, 8, 2) ?", options: ["1, 3, 5, 7", "1, 3, 5", "2, 4, 6, 8", "1, 3, 5, 7, 9"], answer: 0, why: "On part de 1 avec un pas de 2 et l'on s'arrête avant 8 : 1, 3, 5, 7." },
            { q: "Que vaut s après s = 0 ; for k in range(5): s = s + k ?", options: ["15", "5", "10", "4"], answer: 2, why: "k prend les valeurs 0, 1, 2, 3, 4, dont la somme vaut 10." },
            { q: "Dans quel cas une boucle while est-elle préférable à une boucle for ?", options: ["Pour parcourir tous les caractères d'une chaîne", "Quand le nombre de tours est connu à l'avance", "Quand l'arrêt dépend d'une condition"], answer: 2, why: "while répète tant qu'une condition est vraie, sans connaître le nombre de tours." },
            { q: "Que se passe-t-il avec n = 1 ; while n > 0: n = n + 1 ?", options: ["La boucle ne s'exécute pas", "La boucle ne s'arrête jamais", "La boucle s'exécute une fois"], answer: 1, why: "n augmente à chaque tour et reste positif : la condition est toujours vraie, c'est une boucle infinie." },
          ],
          trap: "Oublier que la borne de fin de range est exclue (range(1, 10) s'arrête à 9), ou écrire une boucle while dont le bloc ne modifie pas la variable de la condition, ce qui produit une boucle infinie.",
          method: "Pour vérifier une boucle, exécutez-la à la main sur les deux ou trois premiers tours et sur le dernier, en notant les variables dans un tableau d'état ; pour une boucle while, identifiez par écrit la quantité qui évolue vers la condition de sortie.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions',
          title: 'Écrire et appeler des fonctions',
          minutes: 35,
          objectives: [
            "Définir une fonction en Python avec def, des paramètres et une valeur de retour.",
            "Appeler une fonction en lui passant des arguments et utiliser la valeur renvoyée.",
            "Distinguer renvoyer une valeur (return) et afficher une valeur (print).",
            "Distinguer variables locales et variables globales.",
          ],
          course: [
            {
              heading: "Pourquoi des fonctions ?",
              paragraphs: [
                "Une fonction est une suite d'instructions à laquelle on donne un nom, et que l'on peut exécuter autant de fois que l'on veut, avec des données différentes. Vous en utilisez déjà : print, len, int, type, abs ou max sont des fonctions prédéfinies de Python. Comme une recette de cuisine, une fonction reçoit des ingrédients (les paramètres), applique une méthode et fournit un résultat (la valeur renvoyée).",
                "Écrire ses propres fonctions évite de recopier le même code, découpe un problème complexe en petites tâches que l'on peut comprendre et tester séparément, et rend le programme plus lisible : un appel comme moyenne(12, 15, 9) dit ce qu'il fait. Corriger une erreur dans une fonction la corrige partout où elle est appelée.",
              ],
            },
            {
              heading: "Définir et appeler une fonction",
              paragraphs: [
                "On définit une fonction avec le mot def, son nom, la liste de ses paramètres entre parenthèses et deux points ; le corps est un bloc indenté. L'instruction return indique la valeur renvoyée. Exemple : def aire_rectangle(longueur, largeur): return longueur * largeur. La définition ne calcule rien : elle enregistre seulement la fonction. Le code s'exécute lors de l'appel, aire_rectangle(5, 3), qui vaut 15.",
                "Les paramètres sont les noms écrits dans la définition (longueur, largeur) ; les arguments sont les valeurs fournies lors de l'appel (5 et 3). À l'appel, chaque paramètre reçoit l'argument de même rang. Le nombre d'arguments doit correspondre au nombre de paramètres, sinon Python lève une erreur TypeError. Une fonction peut n'avoir aucun paramètre (on écrit alors des parenthèses vides), et elle peut renvoyer plusieurs valeurs sous forme de p-uplet : avec def division(a, b): return a // b, a % b, l'instruction q, r = division(17, 5) donne q = 3 et r = 2.",
              ],
              box: { label: "Définition", text: "def nom(param1, param2): suivi d'un bloc indenté qui se termine en général par return expression. Appeler la fonction, c'est écrire nom(arg1, arg2) : les paramètres reçoivent les arguments, le corps s'exécute, et l'appel prend la valeur renvoyée." },
            },
            {
              heading: "return n'est pas print",
              paragraphs: [
                "L'instruction return termine immédiatement l'exécution de la fonction et transmet une valeur au programme qui l'a appelée ; cette valeur peut être rangée dans une variable ou utilisée dans un calcul : 2 * aire_rectangle(5, 3) vaut 30. Les instructions placées après un return exécuté ne sont jamais exécutées. Une fonction peut contenir plusieurs return, par exemple dans les branches d'une conditionnelle : def valeur_absolue(x): if x >= 0: return x ; puis return -x.",
                "La fonction print, elle, se contente d'afficher à l'écran : la valeur affichée n'est pas récupérable par le programme. Une fonction qui ne contient pas de return renvoie la valeur spéciale None. Avec def double(x): print(2 * x), l'instruction y = double(4) affiche 8, mais y vaut None, et y + 1 provoque une erreur TypeError.",
              ],
              box: { label: "À retenir", text: "return renvoie une valeur au programme et termine la fonction ; print affiche une valeur pour l'utilisateur. Une fonction sans return renvoie None. Une fonction qui calcule un résultat doit le renvoyer avec return." },
            },
            {
              heading: "Variables locales, variables globales, documentation",
              paragraphs: [
                "Les paramètres et les variables créées dans le corps d'une fonction sont locales : elles n'existent que pendant l'appel et disparaissent ensuite. Les variables créées dans le programme principal sont globales. Une fonction peut lire une variable globale, mais une affectation dans la fonction crée une nouvelle variable locale de même nom, sans modifier la globale. Exemple : x = 10, puis def f(): x = 5 ; return x. L'appel f() renvoie 5, mais après l'appel, la variable globale x vaut toujours 10.",
                "La bonne pratique consiste donc à transmettre les données à une fonction par ses paramètres et à récupérer ses résultats par return. On documente chaque fonction par une chaîne de documentation (docstring), écrite entre trois guillemets juste sous la ligne def : elle décrit ce que fait la fonction, ses paramètres et ce qu'elle renvoie. La commande help(nom_de_la_fonction) l'affiche. La spécification précise des fonctions sera approfondie dans un chapitre ultérieur.",
              ],
            },
          ],
          keyPoints: [
            "def nom(paramètres): puis un bloc indenté ; return renvoie le résultat et termine la fonction.",
            "Définir une fonction n'exécute rien ; c'est l'appel nom(arguments) qui exécute le corps.",
            "Paramètres dans la définition, arguments à l'appel, en même nombre et dans le même ordre.",
            "print affiche, return renvoie ; une fonction sans return renvoie None.",
            "Les variables d'une fonction sont locales : elles disparaissent après l'appel et ne modifient pas les variables globales de même nom.",
          ],
          example: {
            statement: "Écrire une fonction moyenne(a, b, c) qui renvoie la moyenne de trois nombres, puis l'utiliser pour afficher « reçu » si la moyenne de 12, 15 et 9 est supérieure ou égale à 10, et « non reçu » sinon.",
            solution: [
              "La fonction a trois paramètres et renvoie un nombre : def moyenne(a, b, c): return (a + b + c) / 3. Les parenthèses sont indispensables, sinon seul c serait divisé par 3.",
              "Appel : moyenne(12, 15, 9) vaut (12 + 15 + 9) / 3 = 36 / 3 = 12.0 (un float, à cause de la division /).",
              "Utilisation : ligne 1 : m = moyenne(12, 15, 9) ; ligne 2 : if m >= 10: print('reçu') ; ligne 3 : else: print('non reçu').",
              "Comme 12.0 >= 10, le programme affiche reçu.",
              "Réponse : la fonction renvoie 12.0 et le programme affiche reçu ; c'est parce que la fonction renvoie sa valeur (et ne l'affiche pas) qu'on peut l'utiliser dans le test.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On définit def carre(x): return x * x. Donner la valeur de : a) carre(4) ; b) carre(-3) ; c) carre(carre(2)) ; d) carre(1.5) ; e) carre(2) + carre(3).",
              hint: "Pour un appel imbriqué, calculez d'abord l'appel le plus intérieur.",
              solution: [
                "a) carre(4) = 4 × 4 = 16.",
                "b) carre(-3) = (-3) × (-3) = 9.",
                "c) carre(2) = 4, puis carre(4) = 16 : carre(carre(2)) vaut 16.",
                "d) carre(1.5) = 1.5 × 1.5 = 2.25 (un float).",
                "e) carre(2) + carre(3) = 4 + 9 = 13.",
                "Résultats : 16, 9, 16, 2.25 et 13.",
              ],
            },
            {
              level: 2,
              statement: "a) Écrire une fonction est_pair(n) qui renvoie True si l'entier n est pair et False sinon. b) Écrire une fonction maximum3(a, b, c) qui renvoie le plus grand de trois nombres, sans utiliser la fonction max. c) Donner la valeur de est_pair(7), est_pair(0), maximum3(4, 9, 2) et maximum3(7, 7, 3).",
              hint: "Pour a), une comparaison vaut déjà True ou False : on peut la renvoyer directement. Pour b), gardez dans une variable le plus grand nombre vu jusque-là.",
              solution: [
                "a) def est_pair(n): return n % 2 == 0. L'expression n % 2 == 0 est un booléen, renvoyé tel quel.",
                "b) Ligne 1 : def maximum3(a, b, c): ; ligne 2 : m = a ; ligne 3 : if b > m: m = b ; ligne 4 : if c > m: m = c ; ligne 5 : return m.",
                "c) est_pair(7) : 7 % 2 vaut 1, donc False. est_pair(0) : 0 % 2 vaut 0, donc True (0 est pair).",
                "maximum3(4, 9, 2) : m vaut 4, puis 9 (car 9 > 4) ; 2 > 9 est faux : la fonction renvoie 9.",
                "maximum3(7, 7, 3) : m vaut 7 ; 7 > 7 est faux ; 3 > 7 est faux : la fonction renvoie 7.",
                "Résultats : False, True, 9 et 7.",
              ],
            },
            {
              level: 3,
              statement: "1. Écrire une fonction nb_diviseurs(n) qui renvoie le nombre de diviseurs d'un entier n ≥ 1. 2. Calculer nb_diviseurs(12) et nb_diviseurs(13). 3. Un nombre premier est un entier qui a exactement deux diviseurs. En utilisant nb_diviseurs, écrire une fonction est_premier(n). Que renvoie est_premier(1) ? 4. Écrire un programme qui affiche les nombres premiers inférieurs à 30. 5. Un élève a écrit print(compteur) au lieu de return compteur à la fin de nb_diviseurs. Que renvoie alors est_premier(13) ?",
              hint: "Un entier d divise n lorsque n % d vaut 0 ; parcourez tous les d de 1 à n avec une boucle for et un compteur.",
              solution: [
                "1. Ligne 1 : def nb_diviseurs(n): ; ligne 2 : compteur = 0 ; ligne 3 : for d in range(1, n + 1): ; ligne 4, dans la boucle : if n % d == 0: compteur = compteur + 1 ; ligne 5, après la boucle : return compteur.",
                "2. Les diviseurs de 12 sont 1, 2, 3, 4, 6, 12 : nb_diviseurs(12) vaut 6. Ceux de 13 sont 1 et 13 : nb_diviseurs(13) vaut 2.",
                "3. def est_premier(n): return nb_diviseurs(n) == 2. Le seul diviseur de 1 est 1 : nb_diviseurs(1) vaut 1, donc est_premier(1) renvoie False (1 n'est pas premier).",
                "4. for n in range(1, 30): if est_premier(n): print(n). Le programme affiche 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
                "5. Avec print, nb_diviseurs(13) affiche 2 mais renvoie None. Le test None == 2 vaut False : est_premier(13) renvoie False, ce qui est faux, et le programme du 4 n'affiche plus aucun nombre premier (il affiche seulement les nombres de diviseurs).",
                "Résultat : 6 et 2 diviseurs ; 10 nombres premiers inférieurs à 30 ; sans return, est_premier renvoie toujours False.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les fonctions en Python.",
            statements: [
              { text: "Définir une fonction avec def exécute immédiatement son corps.", true: false, why: "La définition enregistre la fonction ; son corps s'exécute seulement lors d'un appel." },
              { text: "Une fonction peut renvoyer plusieurs valeurs, regroupées dans un p-uplet.", true: true, why: "return a // b, a % b renvoie un p-uplet de deux valeurs." },
              { text: "print(x) placé dans une fonction renvoie la valeur de x.", true: false, why: "print affiche seulement ; sans return, la fonction renvoie None." },
              { text: "Une variable créée dans une fonction n'existe plus après l'appel.", true: true, why: "C'est une variable locale, détruite à la fin de l'appel." },
              { text: "On peut utiliser la valeur renvoyée dans une expression, comme 2 * f(3).", true: true, why: "L'appel f(3) prend la valeur renvoyée par return, utilisable comme toute valeur." },
              { text: "Avec def f(x): return x + 1, l'appel f(1, 2) renvoie 2.", true: false, why: "f attend un seul argument : l'appel avec deux arguments lève une TypeError." },
              { text: "Une fonction peut contenir plusieurs instructions return.", true: true, why: "Par exemple une dans chaque branche d'une conditionnelle ; la première exécutée termine la fonction." },
            ],
          },
          quiz: [
            { q: "Avec def f(x): return 3 * x + 1, que vaut f(f(1)) ?", options: ["13", "4", "7", "10"], answer: 0, why: "f(1) = 3 × 1 + 1 = 4, puis f(4) = 3 × 4 + 1 = 13." },
            { q: "Que renvoie une fonction qui ne contient aucune instruction return ?", options: ["0", "None", "Une erreur", "La dernière valeur calculée"], answer: 1, why: "Sans return, Python renvoie la valeur spéciale None." },
            { q: "Dans la définition def aire(l, h): ... et l'appel aire(5, 3), que sont 5 et 3 ?", options: ["Des paramètres", "Des variables globales", "Des arguments"], answer: 2, why: "Les arguments sont les valeurs passées à l'appel ; l et h sont les paramètres." },
            { q: "On exécute x = 10, puis def g(): x = 3 ; return x * 2, puis y = g(). Que valent x et y ?", options: ["x = 3 et y = 6", "x = 10 et y = 20", "x = 3 et y = 20", "x = 10 et y = 6"], answer: 3, why: "Le x de g est local : il vaut 3 pendant l'appel, d'où y = 6, et la variable globale x reste égale à 10." },
            { q: "Que deviennent les instructions placées après un return exécuté, dans le même bloc ?", options: ["Elles sont exécutées juste avant le retour", "Elles ne sont jamais exécutées", "Elles sont exécutées lors de l'appel suivant"], answer: 1, why: "return termine immédiatement l'exécution de la fonction." },
          ],
          trap: "Utiliser print au lieu de return dans une fonction qui doit fournir un résultat : la valeur s'affiche, mais la fonction renvoie None, et tout calcul ou test qui l'utilise devient faux ou provoque une erreur.",
          method: "Avant d'écrire une fonction, rédigez en une phrase ce qu'elle reçoit et ce qu'elle renvoie, avec un exemple d'appel et la valeur attendue (par exemple carre(4) doit valoir 16) ; après l'avoir écrite, vérifiez ces exemples en appelant la fonction.",
        },
      ],
    },

    /* ================================================================== */
    /* REPRÉSENTER LES DONNÉES : TYPES DE BASE                              */
    /* ================================================================== */
    {
      id: 'types-de-base',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'binaire-hexadecimal',
          title: 'Écrire un entier en binaire et en hexadécimal',
          minutes: 35,
          objectives: [
            "Passer de la représentation d'un entier naturel dans une base à sa représentation dans une autre (bases 2, 10 et 16).",
            "Évaluer le nombre de bits nécessaires à l'écriture en base 2 d'un entier, de la somme ou du produit de deux entiers.",
            "Additionner deux entiers écrits en binaire.",
          ],
          course: [
            {
              heading: "Les bases de numération",
              paragraphs: [
                "Notre écriture des nombres est positionnelle et utilise la base 10 : dans 2024, chaque chiffre est multiplié par une puissance de 10 qui dépend de sa position, 2024 = 2 × 10³ + 0 × 10² + 2 × 10¹ + 4 × 10⁰. Plus généralement, dans une base b (un entier b ≥ 2), on utilise b chiffres, de 0 à b - 1, et le chiffre placé au rang k (en comptant à partir de 0, depuis la droite) est multiplié par bᵏ.",
                "Les ordinateurs utilisent la base 2, car leurs composants électroniques ont deux états faciles à distinguer (courant ou pas de courant, tension haute ou basse). Un chiffre binaire, 0 ou 1, s'appelle un bit (binary digit). Un groupe de 8 bits forme un octet. Pour préciser la base, on écrit 1011₂ ou, en Python, 0b1011 ; l'hexadécimal (base 16) se note en Python avec le préfixe 0x.",
              ],
              box: { label: "Définition", text: "En base b, l'écriture aₙ...a₁a₀ (chaque chiffre aₖ étant compris entre 0 et b - 1) représente l'entier aₙ × bⁿ + ... + a₁ × b + a₀. En base 2, les poids des rangs sont 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024..." },
            },
            {
              heading: "Du binaire au décimal, et retour",
              paragraphs: [
                "Pour passer du binaire au décimal, on additionne les puissances de 2 correspondant aux bits égaux à 1 : 1011₂ = 8 + 2 + 1 = 11, et 11010110₂ = 128 + 64 + 16 + 4 + 2 = 214. Il est utile de connaître par cœur les puissances de 2 jusqu'à 2¹⁰ = 1024.",
                "Pour passer du décimal au binaire, on effectue des divisions euclidiennes successives par 2 jusqu'à obtenir un quotient nul ; l'écriture binaire est la suite des restes lus du dernier au premier. Pour 13 : 13 = 2 × 6 + 1, 6 = 2 × 3 + 0, 3 = 2 × 1 + 1, 1 = 2 × 0 + 1 ; en lisant les restes de bas en haut, 13 = 1101₂. Autre méthode : retrancher la plus grande puissance de 2 possible, puis recommencer (13 = 8 + 4 + 1). En Python, bin(13) renvoie '0b1101' et int('1101', 2) renvoie 13.",
              ],
              box: { label: "Méthode", text: "Décimal vers base b : divisions successives par b, puis lecture des restes du dernier au premier. Base b vers décimal : somme des chiffres multipliés par les puissances de b correspondant à leur rang." },
            },
            {
              heading: "L'hexadécimal, une écriture compacte du binaire",
              paragraphs: [
                "La base 16 utilise seize chiffres : 0 à 9, puis A (10), B (11), C (12), D (13), E (14) et F (15). Comme 16 = 2⁴, un chiffre hexadécimal correspond exactement à un groupe de 4 bits, et un octet s'écrit avec deux chiffres hexadécimaux. Pour convertir du binaire en hexadécimal, on regroupe les bits par paquets de 4 en partant de la droite : 11010110₂ = 1101 0110 = D6₁₆. On vérifie : D6₁₆ = 13 × 16 + 6 = 214.",
                "L'hexadécimal est très utilisé pour écrire des données binaires de façon lisible : adresses mémoire, adresses matérielles des cartes réseau, codes de couleur du Web. La couleur #FF8000 code trois octets, rouge FF = 255, vert 80 = 128 et bleu 00 = 0 : c'est un orange. En Python, hex(214) renvoie '0xd6' et int('D6', 16) renvoie 214.",
              ],
            },
            {
              heading: "Combien de bits ? Additionner en binaire",
              paragraphs: [
                "Avec n bits, on forme 2ⁿ combinaisons, ce qui permet de représenter les entiers naturels de 0 à 2ⁿ - 1 : de 0 à 255 sur 8 bits, de 0 à 65 535 sur 16 bits. Pour écrire un entier N ≥ 1, il faut n bits, où n est le plus petit entier tel que 2ⁿ > N : comme 2⁹ = 512 ≤ 1000 < 1024 = 2¹⁰, il faut 10 bits pour écrire 1000.",
                "La somme de deux entiers écrits sur n bits s'écrit sur au plus n + 1 bits, car elle est au plus égale à 2 × (2ⁿ - 1) = 2ⁿ⁺¹ - 2. Le produit d'un entier de n bits par un entier de m bits s'écrit sur au plus n + m bits, car (2ⁿ - 1)(2ᵐ - 1) < 2ⁿ⁺ᵐ. Par exemple, 255 × 255 = 65 025 tient sur 16 bits.",
                "On additionne en binaire comme en décimal, en posant l'opération, avec les règles 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10₂ (on écrit 0 et on retient 1) et 1 + 1 + 1 = 11₂ (on écrit 1 et on retient 1). Ainsi 1011₂ + 0110₂ = 10001₂, ce que l'on vérifie en décimal : 11 + 6 = 17.",
              ],
              box: { label: "Propriété", text: "Sur n bits, on représente 2ⁿ entiers naturels, de 0 à 2ⁿ - 1. La somme de deux entiers de n bits tient sur n + 1 bits ; le produit d'un entier de n bits par un entier de m bits tient sur n + m bits." },
            },
          ],
          keyPoints: [
            "En base b, le chiffre de rang k (depuis la droite, à partir de 0) est multiplié par bᵏ.",
            "Binaire vers décimal : additionner les puissances de 2 des bits à 1. Décimal vers binaire : divisions successives par 2, restes lus de bas en haut.",
            "Un chiffre hexadécimal (0 à 9, A à F) correspond à 4 bits ; un octet s'écrit avec deux chiffres hexadécimaux.",
            "Sur n bits : entiers de 0 à 2ⁿ - 1. Somme de deux entiers de n bits : n + 1 bits au plus ; produit n bits par m bits : n + m bits au plus.",
            "En Python : bin(13) donne '0b1101', hex(214) donne '0xd6', int('1101', 2) donne 13.",
          ],
          example: {
            statement: "Écrire 45 en binaire, puis en hexadécimal, et vérifier les deux résultats.",
            solution: [
              "Divisions successives par 2 : 45 = 2 × 22 + 1 ; 22 = 2 × 11 + 0 ; 11 = 2 × 5 + 1 ; 5 = 2 × 2 + 1 ; 2 = 2 × 1 + 0 ; 1 = 2 × 0 + 1.",
              "On lit les restes du dernier au premier : 45 = 101101₂.",
              "Vérification : 101101₂ = 32 + 8 + 4 + 1 = 45.",
              "Hexadécimal : on complète à gauche pour former des groupes de 4 bits, 0010 1101 ; 0010 = 2 et 1101 = 13 = D. Donc 45 = 2D₁₆.",
              "Vérification : 2D₁₆ = 2 × 16 + 13 = 32 + 13 = 45.",
              "Réponse : 45 = 101101₂ = 2D₁₆ (en Python, bin(45) donne '0b101101' et hex(45) donne '0x2d').",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Convertir 11010110₂ en décimal. b) Convertir 77 en binaire, par la méthode de votre choix, et vérifier.",
              hint: "Écrivez au-dessus de chaque bit son poids : 128, 64, 32, 16, 8, 4, 2, 1.",
              solution: [
                "a) Les bits à 1 ont pour poids 128, 64, 16, 4 et 2 : 128 + 64 + 16 + 4 + 2 = 214. Donc 11010110₂ = 214.",
                "b) La plus grande puissance de 2 inférieure ou égale à 77 est 64 : 77 - 64 = 13. Puis 13 - 8 = 5, puis 5 - 4 = 1, puis 1 - 1 = 0.",
                "Les puissances utilisées sont 64, 8, 4 et 1 : bits à 1 aux rangs 6, 3, 2 et 0, d'où 77 = 1001101₂.",
                "Vérification par les divisions : 77 = 2 × 38 + 1 ; 38 = 2 × 19 + 0 ; 19 = 2 × 9 + 1 ; 9 = 2 × 4 + 1 ; 4 = 2 × 2 + 0 ; 2 = 2 × 1 + 0 ; 1 = 2 × 0 + 1 ; restes lus de bas en haut : 1001101.",
                "Résultats : 11010110₂ = 214 et 77 = 1001101₂.",
              ],
            },
            {
              level: 2,
              statement: "a) Convertir 3A7₁₆ en décimal, puis en binaire. b) Sur une page Web, une couleur est codée #2E86C1 : donner les valeurs décimales de ses composantes rouge, verte et bleue (chacune codée sur un octet). c) Combien de couleurs différentes ce codage sur 3 octets permet-il ?",
              hint: "Pour le binaire, remplacez chaque chiffre hexadécimal par ses 4 bits ; pour les couleurs, découpez le code en trois paires de chiffres.",
              solution: [
                "a) 3A7₁₆ = 3 × 16² + 10 × 16 + 7 = 3 × 256 + 160 + 7 = 768 + 160 + 7 = 935.",
                "En binaire : 3 = 0011, A = 1010, 7 = 0111, d'où 0011 1010 0111, soit 1110100111₂ sans les zéros de tête. Vérification : 512 + 256 + 128 + 32 + 4 + 2 + 1 = 935.",
                "b) Rouge : 2E₁₆ = 2 × 16 + 14 = 46. Vert : 86₁₆ = 8 × 16 + 6 = 134. Bleu : C1₁₆ = 12 × 16 + 1 = 193.",
                "c) 3 octets font 24 bits, d'où 2²⁴ = 16 777 216 couleurs possibles (256 valeurs par composante, et 256³ = 16 777 216).",
                "Résultats : 3A7₁₆ = 935 = 1110100111₂ ; la couleur vaut (46, 134, 193) ; 16 777 216 couleurs.",
              ],
            },
            {
              level: 3,
              statement: "1. Combien de bits faut-il au minimum pour écrire 2024 en binaire ? Donner cette écriture, puis l'écriture hexadécimale de 2024. 2. On considère deux entiers naturels écrits chacun sur 8 bits. Quelle est la plus grande valeur possible de leur somme ? de leur produit ? Sur combien de bits s'écrivent-elles ? 3. Poser l'addition 10110110₂ + 01101101₂ et vérifier en décimal. 4. Un processeur range le résultat dans un registre de 8 bits et perd la retenue finale : quelle valeur obtient-il ?",
              hint: "Encadrez 2024 entre deux puissances de 2 consécutives. Pour l'addition, procédez de droite à gauche en notant soigneusement les retenues.",
              solution: [
                "1. 2¹⁰ = 1024 ≤ 2024 < 2048 = 2¹¹ : il faut 11 bits. 2024 = 1024 + 512 + 256 + 128 + 64 + 32 + 8, donc 2024 = 11111101000₂.",
                "En regroupant par 4 depuis la droite : 0111 1110 1000 = 7E8₁₆. Vérification : 7 × 256 + 14 × 16 + 8 = 1792 + 224 + 8 = 2024.",
                "2. Sur 8 bits, la plus grande valeur est 2⁸ - 1 = 255. Somme maximale : 255 + 255 = 510, qui s'écrit sur 9 bits (256 ≤ 510 < 512). Produit maximal : 255 × 255 = 65 025, qui s'écrit sur 16 bits (32 768 ≤ 65 025 < 65 536).",
                "3. De droite à gauche : 0 + 1 = 1 ; 1 + 0 = 1 ; 1 + 1 = 0, retenue 1 ; 0 + 1 + 1 = 0, retenue 1 ; 1 + 0 + 1 = 0, retenue 1 ; 1 + 1 + 1 = 1, retenue 1 ; 0 + 1 + 1 = 0, retenue 1 ; 1 + 0 + 1 = 0, retenue 1 ; la dernière retenue donne un neuvième bit.",
                "Résultat de l'addition : 100100011₂. Vérification : 10110110₂ = 182 et 01101101₂ = 109 ; 182 + 109 = 291, et 100100011₂ = 256 + 32 + 2 + 1 = 291.",
                "4. Sans le neuvième bit, il reste 00100011₂ = 32 + 2 + 1 = 35, soit 291 - 256 : le résultat est faux, c'est un dépassement de capacité.",
                "Résultats : 11 bits, 2024 = 11111101000₂ = 7E8₁₆ ; 510 sur 9 bits et 65 025 sur 16 bits ; somme 291 = 100100011₂ ; 35 dans un registre de 8 bits.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque écriture binaire ou hexadécimale à sa valeur décimale.",
            pairs: [
              { left: "1101₂", right: "13" },
              { left: "0x1F", right: "31" },
              { left: "11111111₂", right: "255" },
              { left: "0x10", right: "16" },
              { left: "100₂", right: "4" },
              { left: "0xC8", right: "200" },
            ],
          },
          quiz: [
            { q: "Que vaut 1101₂ en décimal ?", options: ["11", "1101", "15", "13"], answer: 3, why: "1101₂ = 8 + 4 + 1 = 13." },
            { q: "Combien de valeurs différentes peut-on représenter avec 8 bits ?", options: ["256", "255", "8", "128"], answer: 0, why: "2⁸ = 256 combinaisons, ce qui permet de coder les entiers de 0 à 255." },
            { q: "Quelle est l'écriture hexadécimale de 11111010₂ ?", options: ["AF", "F5", "1FA", "FA"], answer: 3, why: "On regroupe par 4 bits : 1111 = F et 1010 = A, d'où FA." },
            { q: "Combien de bits faut-il au minimum pour écrire 1000 en binaire ?", options: ["10", "9", "11", "1000"], answer: 0, why: "2⁹ = 512 ≤ 1000 < 1024 = 2¹⁰ : il faut 10 bits." },
            { q: "Combien de chiffres hexadécimaux faut-il pour écrire un octet ?", options: ["1", "4", "2", "8"], answer: 2, why: "Un chiffre hexadécimal code 4 bits ; un octet de 8 bits en demande donc 2." },
          ],
          trap: "Lire les restes des divisions successives dans le mauvais sens : le premier reste obtenu est le bit de poids faible (le plus à droite), il faut donc lire les restes du dernier au premier. Autre erreur : regrouper les bits par 4 en partant de la gauche pour passer en hexadécimal.",
          method: "Écrivez au-dessus des bits la ligne des poids (... 128, 64, 32, 16, 8, 4, 2, 1) : la conversion devient une simple addition. Vérifiez toujours une conversion en faisant le chemin inverse, ou en Python avec bin, hex et int.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'complement-a-deux',
          title: 'Les entiers relatifs : le complément à deux',
          minutes: 35,
          objectives: [
            "Représenter un entier relatif en binaire sur n bits à l'aide du complément à deux.",
            "Déterminer la valeur d'un entier relatif à partir de son écriture en complément à deux.",
            "Déterminer l'intervalle des entiers représentables sur n bits et repérer un dépassement de capacité.",
          ],
          course: [
            {
              heading: "Le problème des nombres négatifs",
              paragraphs: [
                "Un ordinateur ne stocke que des bits : il n'existe pas de « signe moins » en mémoire. Une première idée consiste à réserver le bit de gauche au signe (0 pour positif, 1 pour négatif) et à écrire la valeur absolue avec les autres bits : sur 8 bits, 5 s'écrirait 00000101 et -5 s'écrirait 10000101.",
                "Cette représentation a deux défauts. Le nombre 0 a deux écritures, 00000000 et 10000000. Surtout, l'addition binaire habituelle ne fonctionne plus : 00000101 + 10000101 = 10001010, qui représenterait -10 au lieu de 0. Il faudrait des circuits spéciaux pour additionner des nombres de signes différents. Les ordinateurs utilisent donc une autre représentation : le complément à deux.",
              ],
            },
            {
              heading: "Le principe du complément à deux",
              paragraphs: [
                "On travaille avec un nombre fixé n de bits. Un entier positif x, compris entre 0 et 2ⁿ⁻¹ - 1, s'écrit en binaire comme d'habitude ; son bit de gauche vaut alors 0. Un entier négatif x, compris entre -2ⁿ⁻¹ et -1, est représenté par l'écriture binaire de 2ⁿ + x, c'est-à-dire de 2ⁿ - |x| ; son bit de gauche vaut alors 1. Sur 8 bits (2⁸ = 256) : -1 est représenté par 255, soit 11111111 ; -5 par 251, soit 11111011 ; -128 par 128, soit 10000000.",
                "En pratique, on obtient l'écriture de -|x| en trois temps : on écrit |x| en binaire sur n bits, on inverse tous les bits (les 0 deviennent 1 et inversement), puis on ajoute 1. Pour -5 sur 8 bits : 5 = 00000101, l'inversion donne 11111010, et l'ajout de 1 donne 11111011. On vérifie en additionnant 5 et -5 : 00000101 + 11111011 = 1 00000000 ; la retenue finale, qui sortirait des 8 bits, est perdue, et il reste 00000000, soit 0.",
              ],
              box: { label: "Méthode", text: "Pour représenter un entier négatif -a sur n bits : 1) écrire a en binaire sur n bits ; 2) inverser tous les bits ; 3) ajouter 1. Le bit de gauche du résultat vaut 1. Contrôle : a + (-a) doit donner n zéros, la retenue finale étant perdue." },
            },
            {
              heading: "Lire un entier écrit en complément à deux",
              paragraphs: [
                "Pour lire un mot de n bits, on regarde d'abord son bit de gauche, appelé bit de poids fort. S'il vaut 0, le nombre est positif et se lit comme d'habitude : 01011010 = 64 + 16 + 8 + 2 = 90. S'il vaut 1, le nombre est négatif : on calcule sa valeur comme entier naturel et l'on retranche 2ⁿ. Ainsi 10110100 vaut 180 comme entier naturel, donc 180 - 256 = -76.",
                "On peut aussi appliquer de nouveau la méthode « inverser puis ajouter 1 », qui donne la valeur absolue : 10110100 devient 01001011, puis 01001100 = 76 ; le nombre est donc -76. Une troisième façon de voir : en complément à deux, le bit de poids fort a le poids négatif -2ⁿ⁻¹ et les autres bits leurs poids habituels : 10110100 = -128 + 32 + 16 + 4 = -76.",
              ],
            },
            {
              heading: "Intervalle représentable et dépassement de capacité",
              paragraphs: [
                "Sur n bits, le complément à deux représente les entiers de -2ⁿ⁻¹ à 2ⁿ⁻¹ - 1 : de -128 à 127 sur 8 bits, de -32 768 à 32 767 sur 16 bits, de -2 147 483 648 à 2 147 483 647 sur 32 bits. Il y a un nombre négatif de plus que de nombres strictement positifs, car 0 a une seule écriture. L'addition se fait comme pour les entiers naturels, en ignorant la retenue qui sort des n bits : 5 + (-3) = 00000101 + 11111101 = 1 00000010, d'où 00000010, soit 2.",
                "Si le vrai résultat sort de l'intervalle, il se produit un dépassement de capacité : 100 + 50 = 150 dépasse 127, et l'addition sur 8 bits donne 10010110, qui se lit -106. On le repère facilement : deux nombres de même signe donnent un résultat de signe contraire. En 1996, le premier vol de la fusée Ariane 5 a échoué à la suite de la conversion d'un nombre trop grand vers un entier de 16 bits. En Python, les entiers n'ont pas de taille limitée et bin(-5) renvoie '-0b101' ; pour voir l'écriture sur 8 bits, on peut calculer bin(-5 & 0xFF), qui renvoie '0b11111011'.",
              ],
              box: { label: "Propriété", text: "Sur n bits, le complément à deux code les entiers de -2ⁿ⁻¹ à 2ⁿ⁻¹ - 1. Le bit de poids fort vaut 1 pour les négatifs, 0 pour les positifs. Un dépassement de capacité se produit quand la somme de deux nombres de même signe a le signe contraire." },
            },
          ],
          keyPoints: [
            "Sur n bits, un négatif x est représenté par l'écriture binaire de 2ⁿ + x ; le bit de poids fort vaut alors 1.",
            "Méthode pour -a : écrire a sur n bits, inverser tous les bits, ajouter 1.",
            "Lecture : bit de poids fort à 0, lecture habituelle ; à 1, valeur comme entier naturel moins 2ⁿ.",
            "Intervalle sur n bits : de -2ⁿ⁻¹ à 2ⁿ⁻¹ - 1, soit de -128 à 127 sur 8 bits.",
            "L'addition se fait normalement en ignorant la retenue finale ; deux opérandes de même signe donnant un résultat de signe contraire signalent un dépassement.",
          ],
          example: {
            statement: "Représenter -37 en complément à deux sur 8 bits, puis vérifier le résultat de deux façons.",
            solution: [
              "On écrit 37 en binaire : 37 = 32 + 4 + 1 = 100101₂, soit 00100101 sur 8 bits.",
              "On inverse tous les bits : 11011010.",
              "On ajoute 1 : 11011010 + 1 = 11011011.",
              "Première vérification : 2⁸ - 37 = 256 - 37 = 219, et 11011011₂ = 128 + 64 + 16 + 8 + 2 + 1 = 219.",
              "Seconde vérification : 00100101 + 11011011 = 1 00000000 ; la retenue finale est perdue, il reste 00000000, soit 37 + (-37) = 0.",
              "Réponse : -37 s'écrit 11011011 en complément à deux sur 8 bits.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner la représentation en complément à deux sur 8 bits de : a) 23 ; b) -23 ; c) -100.",
              hint: "Un nombre positif s'écrit normalement ; pour un négatif, partez de sa valeur absolue sur 8 bits, inversez, puis ajoutez 1.",
              solution: [
                "a) 23 = 16 + 4 + 2 + 1, d'où 00010111 (positif : écriture habituelle sur 8 bits).",
                "b) On part de 00010111, on inverse : 11101000, on ajoute 1 : 11101001. Contrôle : 256 - 23 = 233 = 128 + 64 + 32 + 8 + 1, soit 11101001.",
                "c) 100 = 64 + 32 + 4, d'où 01100100 ; on inverse : 10011011 ; on ajoute 1 : 10011100. Contrôle : 256 - 100 = 156 = 128 + 16 + 8 + 4, soit 10011100.",
                "Résultats : 23 = 00010111, -23 = 11101001, -100 = 10011100.",
              ],
            },
            {
              level: 2,
              statement: "Les mots suivants représentent des entiers en complément à deux sur 8 bits. Donner leur valeur décimale : a) 01011010 ; b) 11110001 ; c) 10000001 ; d) 11111111.",
              hint: "Regardez d'abord le bit de poids fort : s'il vaut 1, calculez la valeur comme entier naturel puis retranchez 256.",
              solution: [
                "a) Bit de poids fort 0 : nombre positif. 01011010 = 64 + 16 + 8 + 2 = 90.",
                "b) Bit de poids fort 1 : 11110001 vaut 128 + 64 + 32 + 16 + 1 = 241 comme entier naturel, donc 241 - 256 = -15. Contrôle : inverser et ajouter 1 donne 00001110 + 1 = 00001111 = 15.",
                "c) 10000001 vaut 129 comme entier naturel, donc 129 - 256 = -127.",
                "d) 11111111 vaut 255 comme entier naturel, donc 255 - 256 = -1.",
                "Résultats : 90, -15, -127 et -1.",
              ],
            },
            {
              level: 3,
              statement: "On travaille en complément à deux sur 8 bits. 1. Calculer en binaire 45 + (-20) et vérifier le résultat. 2. Calculer en binaire 90 + 60. Quelle valeur obtient-on ? Expliquer. 3. Quel est l'intervalle des entiers représentables sur 12 bits ? 4. Appliquer la méthode « inverser puis ajouter 1 » à 10000000 (qui représente -128). Que constate-t-on, et pourquoi ?",
              hint: "Écrivez chaque opérande sur 8 bits avant de poser l'addition, et ne conservez que les 8 bits de droite du résultat.",
              solution: [
                "1. 45 = 32 + 8 + 4 + 1, soit 00101101. Pour -20 : 20 = 00010100, inversé 11101011, plus 1 : 11101100.",
                "00101101 + 11101100 = 1 00011001 ; on ignore la retenue finale : 00011001 = 16 + 8 + 1 = 25. On a bien 45 - 20 = 25 (pas de dépassement : les opérandes sont de signes contraires).",
                "2. 90 = 01011010 et 60 = 00111100. Leur somme vaut 10010110. Le bit de poids fort vaut 1 : ce mot représente 150 - 256 = -106.",
                "Le vrai résultat, 150, dépasse 127, le plus grand entier représentable sur 8 bits : c'est un dépassement de capacité, repérable car deux positifs donnent un résultat négatif.",
                "3. Sur 12 bits : de -2¹¹ à 2¹¹ - 1, soit de -2048 à 2047.",
                "4. 10000000 inversé donne 01111111, plus 1 donne 10000000 : on retrouve le même mot. En effet, l'opposé de -128 est 128, qui n'est pas représentable sur 8 bits (le maximum est 127).",
                "Résultats : 25 ; -106 à cause d'un dépassement ; de -2048 à 2047 ; -128 n'a pas d'opposé représentable sur 8 bits.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour écrire -37 en complément à deux sur 8 bits.",
            items: [
              "Écrire 37 en binaire : 100101",
              "Compléter à 8 bits : 00100101",
              "Inverser tous les bits : 11011010",
              "Ajouter 1 : 11011011",
              "Contrôler : 00100101 + 11011011 donne 00000000 sur 8 bits",
            ],
          },
          quiz: [
            { q: "Quel est l'intervalle des entiers représentables en complément à deux sur 8 bits ?", options: ["De -128 à 127", "De -127 à 127", "De 0 à 255", "De -128 à 128"], answer: 0, why: "Sur n bits, l'intervalle va de -2ⁿ⁻¹ à 2ⁿ⁻¹ - 1, soit de -128 à 127 pour n = 8." },
            { q: "Quelle est l'écriture de -1 en complément à deux sur 8 bits ?", options: ["10000001", "00000001", "01111111", "11111111"], answer: 3, why: "-1 est représenté par 2⁸ - 1 = 255, soit 11111111." },
            { q: "Sur 8 bits, quelle valeur le mot 10000000 représente-t-il en complément à deux ?", options: ["128", "-128", "-127", "-0"], answer: 1, why: "10000000 vaut 128 comme entier naturel, donc 128 - 256 = -128." },
            { q: "À quoi reconnaît-on un entier négatif écrit en complément à deux ?", options: ["Son bit de poids fort vaut 1", "Son bit de poids faible vaut 1", "Il contient plus de 1 que de 0"], answer: 0, why: "Les négatifs sont codés de 2ⁿ⁻¹ à 2ⁿ - 1 comme entiers naturels : leur bit de gauche vaut 1." },
            { q: "Sur 8 bits, que donne le calcul 100 + 50 en complément à deux ?", options: ["150, car le résultat tient sur 8 bits", "0, car la retenue finale est perdue", "-50, par symétrie", "-106 (dépassement de capacité)"], answer: 3, why: "150 dépasse 127 : le mot obtenu, 10010110, se lit 150 - 256 = -106." },
          ],
          trap: "Oublier d'ajouter 1 après l'inversion des bits (on obtient alors le complément à un : 11111010 pour -5 au lieu de 11111011), ou lire un mot négatif comme un entier naturel sans retrancher 2ⁿ.",
          method: "Contrôlez systématiquement : un nombre et son opposé doivent avoir une somme nulle sur n bits (en ignorant la retenue finale), et l'écriture d'un négatif x doit valoir 2ⁿ + x comme entier naturel.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'nombres-flottants',
          title: 'Les nombres flottants et leurs limites',
          minutes: 35,
          objectives: [
            "Calculer sur quelques exemples la représentation binaire de nombres réels comme 0,25, 0,1 ou 1/3.",
            "Expliquer pourquoi la représentation des réels en machine est approximative (notion de nombre flottant).",
            "Décrire le principe de la norme IEEE 754 : signe, exposant et mantisse.",
            "Éviter les tests d'égalité entre flottants et les remplacer par une comparaison à une tolérance près.",
          ],
          course: [
            {
              heading: "Écrire la partie décimale en binaire",
              paragraphs: [
                "En base 10, les chiffres placés après la virgule ont pour poids 10⁻¹, 10⁻², 10⁻³... En base 2, les bits placés après la virgule ont pour poids 2⁻¹ = 0,5, 2⁻² = 0,25, 2⁻³ = 0,125, 2⁻⁴ = 0,0625... Ainsi 0,101₂ = 0,5 + 0,125 = 0,625 et 101,11₂ = 4 + 1 + 0,5 + 0,25 = 5,75. (Dans le texte, on écrit les nombres avec une virgule ; en Python, avec un point : 5.75.)",
                "Pour convertir la partie décimale d'un nombre en binaire, on la multiplie par 2 : la partie entière du résultat (0 ou 1) donne le bit suivant, et l'on recommence avec la nouvelle partie décimale, jusqu'à obtenir 0. Pour 0,375 : 0,375 × 2 = 0,75, bit 0 ; 0,75 × 2 = 1,5, bit 1 ; 0,5 × 2 = 1,0, bit 1 ; la partie décimale est nulle, on s'arrête. Donc 0,375 = 0,011₂.",
              ],
              box: { label: "Méthode", text: "Partie entière : divisions successives par 2. Partie décimale : multiplications successives par 2, en relevant à chaque fois la partie entière (0 ou 1) dans l'ordre obtenu, jusqu'à obtenir une partie décimale nulle ou repérer un cycle." },
            },
            {
              heading: "Des nombres qui ne tombent pas juste",
              paragraphs: [
                "Appliquons la méthode à 0,1 : 0,2 (bit 0), 0,4 (bit 0), 0,8 (bit 0), 1,6 (bit 1, on garde 0,6), 1,2 (bit 1, on garde 0,2), puis 0,4 (bit 0)... On retrouve 0,2 : le calcul boucle indéfiniment, et 0,1 = 0,000110011001100...₂, avec le motif 0011 répété sans fin. De même, 1/3 = 0,010101...₂, comme il valait déjà 0,333... en base 10.",
                "Un nombre décimal comme 0,1, dont l'écriture est finie en base 10, peut donc avoir une écriture infinie en base 2. Comme la mémoire est finie, la machine conserve un nombre limité de bits et arrondit : elle ne stocke pas 0,1 mais un nombre binaire très proche. En revanche, 0,5, 0,25 ou 0,375 sont représentés exactement.",
              ],
              box: { label: "Propriété", text: "Une fraction irréductible p/q a une écriture binaire finie si et seulement si son dénominateur q est une puissance de 2. Ainsi 3/8 = 0,375 = 0,011₂ est exact, tandis que 1/10 et 1/3 ont une écriture binaire infinie et ne sont stockés qu'approximativement." },
            },
            {
              heading: "La norme IEEE 754 : signe, exposant, mantisse",
              paragraphs: [
                "Pour représenter des nombres très grands comme très petits, on utilise une écriture scientifique en base 2, dite à virgule flottante : x = (-1)ˢ × 1,m × 2ᵉ, où s est le bit de signe, m la mantisse (les bits après la virgule) et e l'exposant. La norme IEEE 754 fixe le format. En simple précision (32 bits) : 1 bit de signe, 8 bits d'exposant et 23 bits de mantisse ; l'exposant est stocké décalé de 127. En double précision (64 bits) : 1 bit de signe, 11 bits d'exposant (décalé de 1023) et 52 bits de mantisse. Le 1 avant la virgule n'est pas stocké, puisqu'il est toujours présent.",
                "Exemple en simple précision : -6,5 = -110,1₂ = -1,101₂ × 2². Le signe vaut s = 1 ; l'exposant stocké est 2 + 127 = 129 = 10000001₂ ; la mantisse est 101 suivi de vingt zéros. Le mot de 32 bits est donc 1 10000001 10100000000000000000000. Le type float de Python utilise la double précision : environ 15 à 17 chiffres décimaux significatifs, et des valeurs allant jusqu'à environ 1,8 × 10³⁰⁸.",
              ],
              box: { label: "Formule", text: "Valeur d'un flottant en simple précision : (-1)ˢ × 1,m₂ × 2^(E - 127), où s est le bit de signe, E l'exposant stocké sur 8 bits et m la mantisse sur 23 bits. En double précision : 11 bits d'exposant, décalage 1023, mantisse de 52 bits." },
            },
            {
              heading: "Conséquences pour le programmeur",
              paragraphs: [
                "Les petites erreurs d'arrondi apparaissent dans les calculs : en Python, 0.1 + 0.2 affiche 0.30000000000000004, et 0.1 + 0.2 == 0.3 vaut False. Ajouter dix fois 0.1 donne 0.9999999999999999 et non 1. Ce n'est pas un défaut de Python : tous les langages qui utilisent la norme IEEE 754 donnent ces résultats. Les erreurs peuvent s'accumuler : en 1991, l'horloge d'un système antimissile Patriot, qui comptait le temps en dixièmes de seconde, avait dérivé d'environ un tiers de seconde après une centaine d'heures de fonctionnement.",
                "On ne teste donc jamais l'égalité de deux flottants avec ==. On vérifie plutôt que leur écart est inférieur à une petite tolérance : abs(a - b) < 1e-9, ou math.isclose(a, b) après import math. La précision est aussi limitée pour les grands nombres : float(2**53 + 1) == float(2**53) vaut True. Pour des montants en euros, on compte souvent en centimes avec des entiers, qui sont exacts.",
              ],
              box: { label: "À retenir", text: "Un flottant est une approximation d'un réel. Jamais de test a == b entre flottants : on écrit abs(a - b) < epsilon, avec une tolérance epsilon adaptée au problème (par exemple 1e-9)." },
            },
          ],
          keyPoints: [
            "Après la virgule, les bits ont pour poids 0,5, 0,25, 0,125... ; partie décimale vers binaire : multiplications successives par 2.",
            "0,1 et 1/3 ont une écriture binaire infinie ; seules les fractions dont le dénominateur est une puissance de 2 tombent juste.",
            "IEEE 754 : signe, exposant, mantisse ; simple précision 1 + 8 + 23 bits, double précision (float de Python) 1 + 11 + 52 bits.",
            "0.1 + 0.2 == 0.3 vaut False en Python : les flottants sont des valeurs approchées.",
            "Comparer deux flottants avec abs(a - b) < 1e-9 (ou math.isclose), jamais avec ==.",
          ],
          example: {
            statement: "Déterminer l'écriture binaire de 0,1, puis expliquer pourquoi, en Python, 0.1 + 0.2 == 0.3 vaut False.",
            solution: [
              "Multiplications successives par 2 : 0,1 × 2 = 0,2 (bit 0) ; 0,2 × 2 = 0,4 (bit 0) ; 0,4 × 2 = 0,8 (bit 0) ; 0,8 × 2 = 1,6 (bit 1).",
              "On continue avec 0,6 : 0,6 × 2 = 1,2 (bit 1) ; puis 0,2 × 2 = 0,4 (bit 0) : on retrouve la valeur 0,2 déjà rencontrée, le calcul se répète.",
              "Donc 0,1 = 0,0001100110011...₂, le motif 0011 se répétant indéfiniment.",
              "La mémoire étant finie (52 bits de mantisse pour un float de Python), la machine arrondit : elle stocke une valeur très proche de 0,1, mais différente. Il en va de même pour 0,2 et 0,3.",
              "Les erreurs d'arrondi de 0.1 et de 0.2 s'ajoutent : la somme calculée vaut 0.30000000000000004, qui n'est pas le flottant le plus proche de 0,3.",
              "Réponse : 0,1 n'a pas d'écriture binaire finie, donc 0.1 + 0.2 et 0.3 sont deux approximations différentes, et le test == vaut False ; il faut écrire abs((0.1 + 0.2) - 0.3) < 1e-9, qui vaut True.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Écrire en binaire 0,625 et 2,25. b) Écrire en décimal 0,011₂ et 110,101₂.",
              hint: "Pour a), multipliez la partie décimale par 2 jusqu'à obtenir 0. Pour b), utilisez les poids 0,5, 0,25 et 0,125 après la virgule.",
              solution: [
                "a) 0,625 × 2 = 1,25 (bit 1) ; 0,25 × 2 = 0,5 (bit 0) ; 0,5 × 2 = 1,0 (bit 1) ; partie décimale nulle. Donc 0,625 = 0,101₂.",
                "2,25 : partie entière 2 = 10₂ ; partie décimale 0,25 × 2 = 0,5 (bit 0), 0,5 × 2 = 1,0 (bit 1). Donc 2,25 = 10,01₂.",
                "b) 0,011₂ = 0,25 + 0,125 = 0,375.",
                "110,101₂ = 4 + 2 + 0,5 + 0,125 = 6,625.",
                "Résultats : 0,625 = 0,101₂ ; 2,25 = 10,01₂ ; 0,011₂ = 0,375 ; 110,101₂ = 6,625.",
              ],
            },
            {
              level: 2,
              statement: "a) Déterminer l'écriture binaire de 0,2 et montrer qu'elle est infinie. b) Parmi les nombres 0,5 ; 0,3 ; 0,75 ; 1/3 ; 0,125, lesquels sont représentés exactement par un flottant ? Justifier.",
              hint: "Pour b), écrivez chaque nombre sous forme de fraction irréductible et regardez si le dénominateur est une puissance de 2.",
              solution: [
                "a) 0,2 × 2 = 0,4 (bit 0) ; 0,4 × 2 = 0,8 (bit 0) ; 0,8 × 2 = 1,6 (bit 1) ; 0,6 × 2 = 1,2 (bit 1) ; on retrouve 0,2.",
                "Le calcul se répète donc indéfiniment : 0,2 = 0,001100110011...₂, avec le motif 0011 répété sans fin.",
                "b) 0,5 = 1/2 : dénominateur 2 = 2¹, représentation exacte (0,1₂).",
                "0,3 = 3/10 : dénominateur 10 = 2 × 5, pas une puissance de 2 : représentation approchée.",
                "0,75 = 3/4 : dénominateur 4 = 2², exact (0,11₂). 1/3 : dénominateur 3, approché. 0,125 = 1/8 : dénominateur 2³, exact (0,001₂).",
                "Résultat : 0,5, 0,75 et 0,125 sont exacts ; 0,3 et 1/3 ne le sont pas.",
              ],
            },
            {
              level: 3,
              statement: "1. En simple précision (1 bit de signe, 8 bits d'exposant décalé de 127, 23 bits de mantisse), donner la valeur décimale des mots suivants : a) 0 10000010 01100000000000000000000 ; b) 1 01111110 10000000000000000000000. 2. On exécute x = 0, puis for i in range(10): x = x + 0.1, puis print(x == 1). Qu'affiche ce programme et pourquoi ? Réécrire le test correctement.",
              hint: "Calculez l'exposant réel E - 127, puis la valeur 1,m₂ en ajoutant le 1 implicite devant la mantisse, enfin appliquez le signe.",
              solution: [
                "1. a) Signe 0 : positif. Exposant stocké 10000010₂ = 130, exposant réel 130 - 127 = 3.",
                "Mantisse 011 suivi de zéros : 1,011₂ = 1 + 0,25 + 0,125 = 1,375. Valeur : 1,375 × 2³ = 1,375 × 8 = 11.",
                "b) Signe 1 : négatif. Exposant stocké 01111110₂ = 126, exposant réel 126 - 127 = -1.",
                "Mantisse 1 suivi de zéros : 1,1₂ = 1,5. Valeur : -1,5 × 2⁻¹ = -0,75.",
                "2. Le programme affiche False : 0,1 n'est pas représenté exactement, et les dix additions accumulent les erreurs d'arrondi ; x vaut 0.9999999999999999.",
                "Test correct : print(abs(x - 1) < 1e-9), qui affiche True (on peut aussi utiliser math.isclose(x, 1)).",
                "Résultats : 11 et -0,75 ; le test x == 1 affiche False, le test avec tolérance affiche True.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les nombres flottants.",
            statements: [
              { text: "Le nombre 0,1 est représenté exactement par un flottant.", true: false, why: "Son écriture binaire est infinie (motif 0011 répété) : la machine en stocke une valeur approchée." },
              { text: "Les nombres 0,5 et 0,25 sont représentés exactement.", true: true, why: "Ce sont 1/2 et 1/4 : leur dénominateur est une puissance de 2." },
              { text: "Le type float de Python est codé sur 64 bits.", true: true, why: "Python utilise la double précision de la norme IEEE 754." },
              { text: "Si 0.1 + 0.2 == 0.3 vaut False, c'est un bogue propre à Python.", true: false, why: "Tous les langages qui suivent la norme IEEE 754 donnent ce résultat." },
              { text: "1/3 a une écriture finie en base 2.", true: false, why: "1/3 = 0,010101...₂ : son dénominateur n'est pas une puissance de 2." },
              { text: "En double précision, un flottant comporte 1 bit de signe, 11 bits d'exposant et 52 bits de mantisse.", true: true, why: "1 + 11 + 52 = 64 bits." },
              { text: "Pour des montants en euros, compter en centimes avec des entiers évite les erreurs d'arrondi.", true: true, why: "Les entiers sont représentés exactement, contrairement à 0,10 euro en flottant." },
            ],
          },
          quiz: [
            { q: "Quelle est l'écriture binaire de 0,75 ?", options: ["0,111", "0,0011", "0,101", "0,11"], answer: 3, why: "0,11₂ = 0,5 + 0,25 = 0,75." },
            { q: "Que vaut 0.1 + 0.2 == 0.3 en Python ?", options: ["False", "True", "Une erreur"], answer: 0, why: "0.1 + 0.2 vaut 0.30000000000000004 : les deux approximations diffèrent." },
            { q: "Lequel de ces nombres a une écriture binaire finie ?", options: ["0,1", "0,15", "0,25", "0,3"], answer: 2, why: "0,25 = 1/4 = 0,01₂ ; les autres ont un dénominateur qui n'est pas une puissance de 2." },
            { q: "Combien de bits de mantisse la double précision (le type float de Python) utilise-t-elle ?", options: ["11", "23", "64", "52"], answer: 3, why: "La double précision comporte 1 bit de signe, 11 bits d'exposant et 52 bits de mantisse." },
            { q: "Comment tester si deux flottants a et b sont égaux ?", options: ["abs(a - b) < 1e-9", "a == b", "a = b", "round(a) == round(b)"], answer: 0, why: "On compare l'écart à une petite tolérance, car les flottants sont des valeurs approchées." },
          ],
          trap: "Tester l'égalité de deux flottants avec == (par exemple x == 1 après dix additions de 0.1) ou croire qu'un nombre qui « tombe juste » en base 10, comme 0,1, est représenté exactement en machine.",
          method: "Pour convertir une partie décimale, présentez les multiplications par 2 dans un tableau à deux colonnes (résultat, bit) et surveillez le retour d'une valeur déjà rencontrée, signe d'une écriture infinie ; dans vos programmes, remplacez tout == entre flottants par une comparaison avec tolérance.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'booleens-texte',
          title: 'Booléens, opérateurs logiques et encodage des textes',
          minutes: 35,
          objectives: [
            "Dresser la table de vérité d'une expression booléenne.",
            "Utiliser les opérateurs booléens and, or et not et exploiter leur évaluation séquentielle en Python.",
            "Identifier l'intérêt des différents systèmes d'encodage des caractères : ASCII, ISO-8859-1, Unicode.",
            "Convertir un caractère en son code et un texte dans différents formats d'encodage.",
          ],
          course: [
            {
              heading: "Valeurs et opérateurs booléens",
              paragraphs: [
                "Une valeur booléenne (du nom de George Boole) ne peut prendre que deux valeurs : vrai ou faux, notées True et False en Python, ou 1 et 0 en électronique. Trois opérateurs de base les combinent. not a (NON) inverse la valeur. a and b (ET) est vrai seulement si a et b sont vrais tous les deux. a or b (OU) est vrai si au moins l'un des deux est vrai, y compris quand les deux le sont.",
                "On définit aussi le OU exclusif, noté xor (ou ⊕), vrai si exactement l'un des deux est vrai ; en Python, pour deux booléens, on peut l'écrire a != b. Les priorités sont not, puis and, puis or : not a or b signifie (not a) or b. Les lois de De Morgan permettent de transformer une négation : not (a and b) équivaut à (not a) or (not b), et not (a or b) équivaut à (not a) and (not b).",
              ],
              box: { label: "Définition", text: "Tables de vérité, dans l'ordre (a, b) = (0, 0), (0, 1), (1, 0), (1, 1). a and b : 0, 0, 0, 1. a or b : 0, 1, 1, 1. a xor b : 0, 1, 1, 0. Et not a vaut 1 si a vaut 0, et 0 si a vaut 1." },
            },
            {
              heading: "Tables de vérité et évaluation séquentielle",
              paragraphs: [
                "La table de vérité d'une expression donne sa valeur pour toutes les combinaisons de valeurs de ses variables : avec n variables, elle compte 2ⁿ lignes (4 lignes pour 2 variables, 8 pour 3). On ajoute des colonnes intermédiaires pour calculer l'expression pas à pas. Par exemple, pour (a or b) and not (a and b), on calcule les colonnes a or b, a and b, not (a and b), puis la colonne finale : on trouve 0, 1, 1, 0, c'est-à-dire le OU exclusif. Deux expressions qui ont la même table de vérité sont équivalentes.",
                "En Python, and et or sont évalués de gauche à droite, et l'évaluation s'arrête dès que le résultat est connu (évaluation séquentielle, ou paresseuse). Dans a and b, si a est faux, b n'est pas évalué ; dans a or b, si a est vrai, b n'est pas évalué. On s'en sert pour éviter des erreurs : avec x = 0, l'expression x != 0 and 1 / x > 0.5 vaut False sans calculer 1 / x, alors que 1 / x > 0.5 and x != 0 provoque une ZeroDivisionError. L'ordre des opérandes compte donc.",
              ],
            },
            {
              heading: "Encoder des caractères : ASCII et ISO-8859-1",
              paragraphs: [
                "Un ordinateur ne stocke que des nombres : pour représenter un texte, on associe à chaque caractère un numéro, puis on écrit ce numéro en binaire. Cette correspondance s'appelle un encodage. Le code ASCII, défini aux États-Unis en 1963, utilise 7 bits, soit 128 caractères : lettres latines sans accent, chiffres, ponctuation et caractères de commande. On y trouve 'A' = 65, 'a' = 97 (les minuscules sont décalées de 32), '0' = 48 et l'espace = 32. En Python, ord('A') renvoie 65 et chr(97) renvoie 'a'.",
                "L'ASCII ne contient aucun caractère accentué. Des encodages sur 8 bits (256 caractères) ont donc été créés, qui conservent l'ASCII pour les 128 premiers codes et ajoutent d'autres caractères. ISO-8859-1, dit Latin-1, couvre la plupart des langues d'Europe de l'Ouest : é a le code 233, à le code 224. Mais il lui manque, par exemple, œ et le symbole €, ajoutés dans ISO-8859-15. Et il existe d'autres variantes pour le grec, le cyrillique... : un même octet désigne des caractères différents selon l'encodage, et un texte mal décodé devient illisible.",
              ],
            },
            {
              heading: "Unicode et UTF-8",
              paragraphs: [
                "Unicode, dont la première version date de 1991, est un catalogue universel qui attribue un numéro unique, appelé point de code, à chaque caractère de toutes les écritures du monde, ainsi qu'à de nombreux symboles : on le note U+ suivi de son écriture hexadécimale, par exemple U+0041 pour A, U+00E9 pour é, U+20AC pour €. Les versions récentes comptent plus de 150 000 caractères. Unicode définit plusieurs façons d'écrire ces numéros en octets ; la plus répandue, notamment sur le Web, est UTF-8.",
                "UTF-8 utilise de 1 à 4 octets par caractère : 1 octet pour les caractères ASCII (codes 0 à 127), ce qui le rend compatible avec l'ASCII ; 2 octets pour é (C3 A9) ; 3 octets pour € (E2 82 AC) ; 4 octets pour certains symboles rares. En Python, 'é'.encode('utf-8') renvoie b'\\xc3\\xa9', alors que 'é'.encode('latin-1') renvoie b'\\xe9'. Si un texte écrit en UTF-8 est lu comme du Latin-1, chaque é devient Ã© : c'est le signe d'une erreur d'encodage. Pour convertir un fichier, on le lit avec son encodage d'origine (open(nom, encoding='latin-1')) et on l'écrit avec le nouvel encodage (encoding='utf-8').",
              ],
              box: { label: "À retenir", text: "ASCII : 7 bits, 128 caractères, sans accents. ISO-8859-1 : 8 bits, 256 caractères, compatible ASCII, sans œ ni €. Unicode : un point de code pour chaque caractère du monde. UTF-8 : écrit ces points de code sur 1 à 4 octets, compatible ASCII, standard du Web." },
            },
          ],
          keyPoints: [
            "not inverse ; a and b est vrai si les deux sont vrais ; a or b est vrai si au moins un est vrai ; xor si exactement un l'est.",
            "Une table de vérité à n variables compte 2ⁿ lignes ; deux expressions de même table sont équivalentes.",
            "and et or s'arrêtent dès que le résultat est connu : x != 0 and 1 / x > 0.5 ne divise jamais par zéro.",
            "ASCII (7 bits, 128 caractères) : 'A' = 65, 'a' = 97, '0' = 48 ; ISO-8859-1 (8 bits) ajoute les accents d'Europe de l'Ouest.",
            "Unicode donne un point de code à chaque caractère ; UTF-8 l'écrit sur 1 à 4 octets (é : 2 octets, € : 3 octets).",
          ],
          example: {
            statement: "Dresser la table de vérité de l'expression not a or b, puis dire dans quel cas elle est fausse.",
            solution: [
              "Deux variables : la table compte 2² = 4 lignes. On ajoute une colonne intermédiaire pour not a.",
              "a = 0, b = 0 : not a vaut 1, donc 1 or 0 vaut 1.",
              "a = 0, b = 1 : not a vaut 1, donc 1 or 1 vaut 1.",
              "a = 1, b = 0 : not a vaut 0, donc 0 or 0 vaut 0.",
              "a = 1, b = 1 : not a vaut 0, donc 0 or 1 vaut 1.",
              "Réponse : la colonne finale est 1, 1, 0, 1 ; l'expression est fausse uniquement quand a est vrai et b faux (c'est l'implication « si a alors b »).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On pose a = True et b = False. Donner la valeur de : a) a and b ; b) a or b ; c) not a or b ; d) not (a and b) ; e) (a or b) and not b.",
              hint: "Appliquez les priorités : not d'abord, puis and, enfin or ; les parenthèses passent avant tout.",
              solution: [
                "a) True and False vaut False.",
                "b) True or False vaut True.",
                "c) not a vaut False, puis False or False vaut False.",
                "d) a and b vaut False, donc not (a and b) vaut True.",
                "e) a or b vaut True ; not b vaut True ; True and True vaut True.",
                "Résultats : False, True, False, True, True.",
              ],
            },
            {
              level: 2,
              statement: "a) Donner les codes ASCII, en décimal puis en hexadécimal, des caractères du mot NSI, sachant que 'A' a pour code 65 et que les lettres majuscules se suivent dans l'ordre alphabétique. b) Le texte « Ça coûte 5 € » compte 12 caractères (espaces compris). Combien d'octets occupe-t-il en UTF-8 ? c) Peut-on l'enregistrer en ISO-8859-1 ? Justifier.",
              hint: "Pour a), comptez le rang de chaque lettre dans l'alphabet à partir de A. Pour b), repérez les caractères qui ne font pas partie de l'ASCII.",
              solution: [
                "a) N est la 14e lettre : 65 + 13 = 78 = 4E₁₆. S est la 19e : 65 + 18 = 83 = 53₁₆. I est la 9e : 65 + 8 = 73 = 49₁₆.",
                "Vérification en hexadécimal : 4 × 16 + 14 = 78 ; 5 × 16 + 3 = 83 ; 4 × 16 + 9 = 73. En Python, ord('N') renvoie 78.",
                "b) Les caractères hors ASCII sont Ç (2 octets en UTF-8), û (2 octets) et € (3 octets). Les 9 autres caractères (a, c, o, t, e, 5 et les trois espaces) occupent 1 octet chacun.",
                "Total : 9 × 1 + 2 + 2 + 3 = 16 octets (en Python, len('Ça coûte 5 €'.encode('utf-8')) vaut 16).",
                "c) Non : ISO-8859-1 contient Ç et û, mais pas le symbole € ; Python lève une UnicodeEncodeError. Il faudrait ISO-8859-15 (12 octets) ou un encodage Unicode.",
                "Résultats : 78, 83, 73 (4E, 53, 49) ; 16 octets en UTF-8 ; impossible en ISO-8859-1 à cause de €.",
              ],
            },
            {
              level: 3,
              statement: "1. Dresser la table de vérité de E = (a and not b) or (not a and b). 2. Montrer que E a la même table que (a or b) and not (a and b) et nommer cette opération. 3. Écrire une fonction ou_exclusif(a, b) qui renvoie E. 4. On considère une liste t, éventuellement vide, et les deux expressions len(t) > 0 and t[0] == 5 puis t[0] == 5 and len(t) > 0. Que se passe-t-il pour chacune lorsque t = [] ? Expliquer.",
              hint: "Ajoutez des colonnes intermédiaires (not a, not b, a and not b, not a and b). Pour la question 4, rappelez-vous que t[0] provoque une erreur si la liste est vide.",
              solution: [
                "1. Ligne a = 0, b = 0 : a and not b = 0, not a and b = 0, E = 0. Ligne a = 0, b = 1 : 0 et 1, E = 1. Ligne a = 1, b = 0 : 1 et 0, E = 1. Ligne a = 1, b = 1 : 0 et 0, E = 0.",
                "La colonne de E est donc 0, 1, 1, 0.",
                "2. Pour (a or b) and not (a and b) : a or b donne 0, 1, 1, 1 ; not (a and b) donne 1, 1, 1, 0 ; leur conjonction donne 0, 1, 1, 0. Les deux tables sont identiques : les expressions sont équivalentes. C'est le OU exclusif (xor) : vrai si exactement une des deux variables est vraie.",
                "3. def ou_exclusif(a, b): return (a and not b) or (not a and b). Par exemple, ou_exclusif(True, True) renvoie False.",
                "4. Avec t = [] : dans len(t) > 0 and t[0] == 5, la première condition vaut False ; grâce à l'évaluation séquentielle, t[0] n'est pas évalué et l'expression vaut False.",
                "Dans t[0] == 5 and len(t) > 0, Python évalue d'abord t[0] sur une liste vide : il lève une IndexError et le programme s'arrête.",
                "Résultat : E est le OU exclusif ; il faut toujours placer en premier la condition qui protège la suivante.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa description.",
            pairs: [
              { left: "ASCII", right: "7 bits, 128 caractères, sans accents" },
              { left: "ISO-8859-1", right: "8 bits, 256 caractères, sans œ ni €" },
              { left: "Unicode", right: "Un point de code pour chaque caractère du monde" },
              { left: "UTF-8", right: "De 1 à 4 octets par caractère, compatible ASCII" },
              { left: "and", right: "Vrai seulement si les deux opérandes sont vrais" },
              { left: "not", right: "Inverse une valeur booléenne" },
            ],
          },
          quiz: [
            { q: "Que vaut True and not False ?", options: ["True", "False", "None"], answer: 0, why: "not False vaut True, et True and True vaut True." },
            { q: "Combien de lignes compte la table de vérité d'une expression à 3 variables booléennes ?", options: ["3", "6", "9", "8"], answer: 3, why: "Chaque variable a 2 valeurs possibles : 2³ = 8 combinaisons." },
            { q: "Quel est le code ASCII de la lettre A majuscule ?", options: ["97", "65", "48", "41"], answer: 1, why: "'A' a pour code 65 (41 en hexadécimal) ; 97 est le code de 'a' et 48 celui de '0'." },
            { q: "Combien d'octets le caractère é occupe-t-il en UTF-8 ?", options: ["2", "1", "3", "4"], answer: 0, why: "é (U+00E9) ne fait pas partie de l'ASCII : UTF-8 l'écrit sur 2 octets, C3 A9." },
            { q: "Pourquoi le mot « café » s'affiche-t-il « cafÃ© » ?", options: ["Le fichier est endommagé", "Le caractère é n'existe pas en Unicode", "Le fichier a été écrit en Latin-1 et lu en UTF-8", "Le fichier a été écrit en UTF-8 et lu en Latin-1"], answer: 3, why: "Les deux octets C3 A9 du é en UTF-8, lus en Latin-1, deviennent les deux caractères Ã et ©." },
          ],
          trap: "Croire qu'un caractère occupe toujours un octet : en UTF-8, é occupe 2 octets et € en occupe 3. Côté booléens, oublier que or est inclusif (vrai aussi quand les deux opérandes sont vrais) ou placer la condition protectrice en second dans un and.",
          method: "Pour une table de vérité, écrivez les 2ⁿ lignes dans l'ordre binaire (00, 01, 10, 11) et ajoutez une colonne par sous-expression ; pour un problème d'encodage, identifiez d'abord les caractères hors ASCII, ce sont eux qui posent problème.",
        },
      ],
    },
  ],
}
