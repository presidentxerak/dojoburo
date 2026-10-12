import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'technologie-4e',
  chapters: [
    /* ==================================================================== */
    /* PROGRAMMER UN SYSTÈME                                                  */
    /* ==================================================================== */
    {
      id: 'programmer',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'algorigramme',
          title: 'Algorithme et algorigramme',
          minutes: 30,
          objectives: [
            "Décrire le comportement attendu d'un système sous la forme d'un algorithme, avec des instructions précises et ordonnées.",
            "Utiliser une séquence, un événement, une condition, une boucle et une variable dans un algorithme.",
            "Représenter un algorithme par un algorigramme avec les symboles normalisés.",
            "Lire un algorigramme et prévoir le comportement du système qu'il décrit.",
          ],
          course: [
            {
              heading: "Du comportement attendu à l'algorithme",
              paragraphs: [
                "Un système automatisé agit seul, sans qu'une personne le commande à chaque instant : une barrière de parking, un portail électrique, un arrosage automatique, un robot aspirateur. Il reçoit des informations par ses entrées (des capteurs, des boutons) et agit par ses sorties (des actionneurs : moteur, lampe, pompe, haut-parleur).",
                "Avant de programmer un tel système, on décrit son comportement attendu de façon très précise : ce qu'il doit faire, dans quel ordre, et dans quelles situations. Cette description s'appelle un algorithme. Elle s'écrit d'abord en langage courant, avec des phrases courtes, avant d'être traduite dans un langage de programmation.",
                "Une machine ne devine rien : elle exécute exactement ce qui est écrit. Chaque instruction doit donc être claire et chiffrée. « Arroser un peu » ne convient pas ; il faut écrire « mettre la pompe en marche, attendre 20 secondes, arrêter la pompe ».",
              ],
              box: { label: "Définition", text: "Algorithme : suite finie et ordonnée d'instructions précises qui décrit comment réaliser une tâche ou comment un système doit se comporter. Il ne dépend d'aucun langage de programmation." },
            },
            {
              heading: "Les structures d'un algorithme",
              paragraphs: [
                "La séquence est une suite d'instructions exécutées l'une après l'autre, dans l'ordre où elles sont écrites. L'événement est ce qui déclenche une suite d'instructions ; on l'écrit avec « quand » ou « lorsque » : « quand on appuie sur le bouton, ouvrir le portail ».",
                "La condition permet de choisir entre deux actions selon le résultat d'un test, qui est vrai ou faux : « si la température est supérieure à 25 °C, alors mettre le ventilateur en marche, sinon l'arrêter ». Un test peut combiner deux conditions avec ET (les deux doivent être vraies) ou avec OU (il suffit que l'une soit vraie).",
                "La boucle répète des instructions. On peut répéter un nombre de fois connu (« répéter 5 fois »), sans fin (« répéter indéfiniment », pour un système qui surveille en permanence), ou tant qu'une condition reste vraie (« tant que le bac n'est pas plein, faire couler l'eau »).",
              ],
              box: { label: "À retenir", text: "Séquence : l'une après l'autre. Événement : « quand... ». Condition : « si... alors... sinon... », avec ET ou OU pour combiner deux tests. Boucle : « répéter n fois », « répéter indéfiniment », « tant que... »." },
            },
            {
              heading: "Les variables : mémoriser une valeur",
              paragraphs: [
                "Une variable est une case de la mémoire de la machine, qui porte un nom et contient une valeur. Cette valeur peut changer pendant le fonctionnement du système. On peut l'imaginer comme une boîte étiquetée dans laquelle on range un nombre, et dont on peut changer le contenu à tout moment.",
                "Les variables servent à compter, à mémoriser une mesure ou à garder un état. Le compteur de places libres d'un parking est une variable : au départ on la met à 50, puis on lui retire 1 à chaque voiture qui entre et on lui ajoute 1 à chaque voiture qui sort.",
                "On écrit par exemple « mettre places à 50 » pour donner une valeur de départ (on dit initialiser la variable), puis « ajouter -1 à places » ou « retirer 1 à places » pour la modifier. Oublier d'initialiser une variable est une erreur fréquente : le calcul part alors d'une valeur inconnue.",
              ],
              box: { label: "Définition", text: "Variable : case mémoire qui porte un nom et contient une valeur qui peut changer pendant l'exécution. Initialiser une variable : lui donner sa valeur de départ." },
            },
            {
              heading: "L'algorigramme : le dessin de l'algorithme",
              paragraphs: [
                "Un algorigramme (ou organigramme de programmation) représente un algorithme sous forme de schéma. Il utilise des symboles normalisés reliés par des lignes fléchées qui indiquent l'ordre. On le lit de haut en bas, en suivant les flèches.",
                "Le début et la fin se placent dans un rectangle aux coins arrondis (ou un ovale). Une action ou un calcul se place dans un rectangle (« allumer la lampe », « ajouter 1 à compteur »). Une lecture d'entrée ou un affichage peut se placer dans un parallélogramme (« lire la température », « afficher places »). Un test se place dans un losange : c'est une question à laquelle on répond par oui ou par non, et il a deux sorties.",
                "Une flèche qui remonte vers une étape déjà passée forme une boucle. Quand vous lisez un algorigramme, posez votre doigt sur « Début » et suivez les flèches : à chaque losange, regardez la réponse à la question pour savoir quelle sortie prendre.",
              ],
              box: { label: "Repère", text: "Rectangle arrondi : début ou fin. Rectangle : action. Parallélogramme : entrée ou sortie (lire, afficher). Losange : test, deux sorties oui et non. Flèche qui remonte : boucle." },
            },
          ],
          keyPoints: [
            "Algorithme : suite finie et ordonnée d'instructions précises, écrite avant de programmer.",
            "Un système reçoit des informations par ses entrées (capteurs, boutons) et agit par ses sorties (actionneurs).",
            "Structures : séquence, événement (quand), condition (si... alors... sinon), boucle (répéter, tant que).",
            "ET : les deux conditions doivent être vraies. OU : il suffit que l'une soit vraie.",
            "Variable : case mémoire nommée dont la valeur peut changer ; on l'initialise avant de l'utiliser.",
            "Algorigramme : rectangle pour une action, losange pour un test (oui ou non), parallélogramme pour lire ou afficher.",
          ],
          example: {
            statement: "Un petit parking de 50 places (données fictives) affiche le nombre de places libres. Quand une voiture se présente à l'entrée, la barrière se lève seulement s'il reste au moins une place, puis le nombre de places libres diminue de 1. Quand une voiture sort, le nombre de places libres augmente de 1. Écrire l'algorithme de ce système, puis décrire son algorigramme.",
            solution: [
              "Entrées : le capteur de voiture à l'entrée et le capteur de voiture à la sortie. Sorties : le moteur de la barrière et le panneau d'affichage. Il faut une variable « places » pour compter les places libres.",
              "Au démarrage, on initialise la variable : « mettre places à 50 ».",
              "Le parking fonctionne en permanence : on utilise une boucle « répéter indéfiniment ».",
              "Dans la boucle : « si une voiture est à l'entrée ET places > 0, alors lever la barrière, attendre le passage de la voiture, baisser la barrière, retirer 1 à places ». Puis « si une voiture sort, alors ajouter 1 à places ». Enfin « afficher places ».",
              "Algorigramme : Début, rectangle « places = 50 », puis losange « voiture à l'entrée et places > 0 ? ». Sortie oui : rectangles « lever la barrière », « baisser la barrière », « places = places - 1 ». Les deux sorties se rejoignent sur le losange « voiture qui sort ? » (oui : « places = places + 1 »), puis le parallélogramme « afficher places », et une flèche remonte au premier losange.",
              "Réponse : une variable initialisée à 50, une boucle sans fin, une condition double (voiture présente ET places > 0) pour l'entrée et une condition simple pour la sortie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans quel symbole de l'algorigramme faut-il placer chacun de ces éléments ? a) Début ; b) Allumer la LED rouge ; c) Bouton appuyé ? ; d) Lire la température ; e) Ajouter 1 à compteur ; f) Fin.",
              hint: "Demandez-vous si l'élément est une action, une question à réponse oui ou non, une lecture ou un affichage, ou bien le début ou la fin.",
              solution: [
                "a) « Début » : rectangle aux coins arrondis (ou ovale).",
                "b) « Allumer la LED rouge » est une action : rectangle.",
                "c) « Bouton appuyé ? » est une question à laquelle on répond par oui ou non : losange à deux sorties.",
                "d) « Lire la température » est une lecture d'entrée : parallélogramme.",
                "e) « Ajouter 1 à compteur » est un calcul, donc une action : rectangle.",
                "f) « Fin » : rectangle aux coins arrondis (ou ovale).",
                "Résultat : a et f en rectangle arrondi, b et e en rectangle, c en losange, d en parallélogramme.",
              ],
            },
            {
              level: 2,
              statement: "Un arrosage automatique de jardin (données fictives) mesure l'humidité du sol, de 0 % (sol très sec) à 100 % (sol gorgé d'eau). Il doit fonctionner ainsi, sans s'arrêter : lire l'humidité ; si l'humidité est inférieure à 30 %, mettre la pompe en marche, sinon l'arrêter ; attendre 10 minutes ; recommencer. a) Quel est le capteur ? Quel est l'actionneur ? b) Écrire l'algorithme. c) Que fait la pompe pour une humidité de 25 %, de 30 % et de 45 % ? d) Combien de fois l'humidité est-elle lue en 2 heures ?",
              hint: "« Inférieure à 30 % » se traduit par le test « humidité < 30 ». Pour la dernière question, comptez combien de périodes de 10 minutes il y a dans 2 heures (on néglige la durée des autres instructions).",
              solution: [
                "a) Le capteur est le capteur d'humidité du sol (il donne l'information). L'actionneur est la pompe (elle agit en faisant couler l'eau).",
                "b) Algorithme : « Répéter indéfiniment : lire l'humidité ; si humidité < 30 alors mettre la pompe en marche, sinon arrêter la pompe ; attendre 10 minutes. »",
                "c) 25 % : 25 < 30 est vrai, la pompe est en marche.",
                "30 % : 30 < 30 est faux (30 n'est pas strictement inférieur à 30), la pompe est arrêtée.",
                "45 % : 45 < 30 est faux, la pompe est arrêtée.",
                "d) 2 heures = 120 minutes ; 120 ÷ 10 = 12. L'humidité est lue 12 fois en 2 heures.",
                "Résultat : capteur d'humidité et pompe ; pompe en marche seulement à 25 % ; 12 lectures en 2 heures.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On donne l'algorithme suivant : « Mettre compteur à 0. Tant que compteur < 5 : allumer la LED, attendre 0,5 s, éteindre la LED, attendre 0,5 s, ajouter 1 à compteur. Fin. » a) Combien de fois la LED clignote-t-elle ? b) Combien de temps dure le programme (on néglige la durée des instructions autres que « attendre ») ? c) Quelle est la valeur de compteur à la fin ? d) Que faut-il changer pour que la LED clignote 8 fois ? e) Un élève oublie l'instruction « ajouter 1 à compteur ». Que se passe-t-il ?",
              hint: "Suivez l'algorithme pas à pas en notant dans un tableau la valeur de compteur au début de chaque tour, et le résultat du test « compteur < 5 ».",
              solution: [
                "a) Au début de chaque tour, compteur vaut 0, puis 1, 2, 3, 4 : le test « compteur < 5 » est vrai 5 fois. Quand compteur vaut 5, le test est faux et la boucle s'arrête. La LED clignote 5 fois.",
                "b) Un clignotement dure 0,5 + 0,5 = 1 s. Le programme dure 5 × 1 = 5 secondes.",
                "c) À la fin, compteur vaut 5 (c'est cette valeur qui rend le test faux).",
                "d) Il suffit de remplacer le test par « compteur < 8 » : compteur prend alors les valeurs 0 à 7 au début des tours, soit 8 tours.",
                "e) Sans « ajouter 1 à compteur », compteur reste à 0 : le test « 0 < 5 » est toujours vrai et la boucle ne s'arrête jamais. La LED clignote sans fin : c'est une boucle infinie involontaire.",
                "Résultat : 5 clignotements en 5 secondes ; compteur vaut 5 à la fin ; « compteur < 8 » pour 8 clignotements ; l'oubli provoque une boucle infinie.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément d'un algorigramme ou d'un algorithme à son rôle.",
            pairs: [
              { left: "Losange", right: "Contient un test, avec une sortie oui et une sortie non" },
              { left: "Rectangle", right: "Contient une action à exécuter" },
              { left: "Parallélogramme", right: "Contient une lecture d'entrée ou un affichage" },
              { left: "Flèche qui remonte", right: "Forme une boucle qui répète des étapes" },
              { left: "Variable", right: "Case mémoire nommée dont la valeur peut changer" },
              { left: "Initialiser", right: "Donner sa valeur de départ à une variable" },
            ],
          },
          quiz: [
            {
              q: "Dans un algorigramme, quel symbole a deux sorties, oui et non ?",
              options: ["Le rectangle", "Le losange", "Le parallélogramme", "L'ovale"],
              answer: 1,
              why: "Le losange contient un test : selon la réponse, oui ou non, on suit l'une ou l'autre de ses deux sorties.",
            },
            {
              q: "Le test « porte ouverte ET alarme activée » est vrai quand :",
              options: ["la porte est ouverte, quel que soit l'état de l'alarme", "l'alarme est activée, même porte fermée", "la porte est ouverte et l'alarme activée", "aucune des deux conditions n'est vraie"],
              answer: 2,
              why: "Avec ET, les deux conditions doivent être vraies en même temps ; avec OU, une seule suffirait.",
            },
            {
              q: "Qu'est-ce qu'une variable ?",
              options: ["Une case mémoire nommée dont la valeur peut changer", "Un capteur qui mesure une grandeur comme la lumière", "Un symbole de l'algorigramme en forme de losange", "Une erreur qui bloque l'exécution du programme"],
              answer: 0,
              why: "Une variable porte un nom et contient une valeur que le programme peut modifier, comme un compteur de places.",
            },
            {
              q: "« Tant que compteur < 3 : ajouter 1 à compteur », avec compteur mis à 0 au départ. Combien de tours fait la boucle ?",
              options: ["2", "4", "0", "3"],
              answer: 3,
              why: "Le test est vrai pour 0, 1 et 2, soit 3 tours ; quand compteur vaut 3, le test est faux et la boucle s'arrête.",
            },
            {
              q: "Pourquoi « arroser un peu » est-il une mauvaise instruction ?",
              options: ["Elle est trop longue", "Elle n'est pas chiffrée", "Un arrosage ne se programme pas", "Elle contient un verbe"],
              answer: 1,
              why: "La machine ne devine rien : il faut une valeur précise, par exemple « faire fonctionner la pompe pendant 20 secondes ».",
            },
          ],
          trap: "Oublier de faire évoluer la variable testée dans une boucle « tant que » (par exemple « ajouter 1 à compteur ») : le test reste toujours vrai et la boucle ne s'arrête jamais.",
          method: "Pour vérifier un algorithme, jouez le rôle de la machine : faites un tableau avec une colonne par variable et une colonne pour le résultat de chaque test, puis remplissez une ligne à chaque tour de boucle, sans rien deviner.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'programmer-blocs',
          title: 'Programmer un système avec des blocs',
          minutes: 35,
          objectives: [
            "Traduire un algorithme en programme avec un langage par blocs (Scratch, MakeCode).",
            "Déclencher une action par un événement et faire fonctionner plusieurs scripts en même temps.",
            "Utiliser une variable pour compter ou mémoriser une valeur.",
            "Combiner des conditions avec les opérateurs « et », « ou » et « non ».",
          ],
          course: [
            {
              heading: "Du programme à la carte électronique",
              paragraphs: [
                "Un programme est un algorithme traduit dans un langage que la machine sait exécuter. Au collège, on programme souvent avec des blocs qui s'emboîtent : Scratch pour animer des lutins à l'écran, MakeCode pour programmer une carte électronique comme la micro:bit.",
                "La carte micro:bit contient un microcontrôleur, un petit ordinateur complet sur une seule puce. Elle possède des entrées (deux boutons A et B, un capteur de lumière, un capteur de température, un accéléromètre qui détecte les mouvements, une boussole) et des sorties (une matrice de 25 LED, 5 × 5). Des broches permettent d'y brancher d'autres capteurs et actionneurs.",
                "Le programme est écrit sur l'ordinateur, essayé dans le simulateur, puis téléversé dans la carte. La carte l'exécute ensuite toute seule, même débranchée de l'ordinateur, si elle est alimentée par une pile : on parle de système embarqué, car le programme est enfermé dans l'objet.",
              ],
              box: { label: "Définition", text: "Programme : algorithme traduit dans un langage compris par la machine. Téléverser : transférer le programme de l'ordinateur vers la carte. Système embarqué : système électronique et informatique intégré dans un objet, qui exécute son programme de façon autonome." },
            },
            {
              heading: "Les événements et les scripts en parallèle",
              paragraphs: [
                "Un script est une pile de blocs qui commence par un bloc d'événement. Dans MakeCode : « au démarrage » (exécuté une seule fois, à la mise sous tension), « toujours » (répété sans fin), « lorsque le bouton A est pressé ». Dans Scratch : « quand le drapeau vert est cliqué », « quand la touche espace est pressée ».",
                "Un même programme peut contenir plusieurs scripts qui fonctionnent en même temps : on dit qu'ils s'exécutent en parallèle. Par exemple, un script fait clignoter une LED dans la boucle « toujours » pendant qu'un autre attend l'appui sur le bouton A pour afficher un message.",
                "Dans Scratch, un lutin peut aussi prévenir les autres avec un message : le bloc « envoyer à tous [départ] » déclenche chez tous les lutins le script qui commence par « quand je reçois [départ] ». C'est ainsi qu'on synchronise plusieurs personnages.",
              ],
              box: { label: "À retenir", text: "Chaque script commence par un événement. Plusieurs scripts peuvent s'exécuter en parallèle. « Au démarrage » : une seule fois. « Toujours » : en boucle sans fin." },
            },
            {
              heading: "Les variables dans un programme par blocs",
              paragraphs: [
                "Pour utiliser une variable, on la crée en lui donnant un nom clair (score, passages, temps), puis on l'initialise. Dans MakeCode, on écrit « définir score à 0 » dans « au démarrage » ; dans Scratch, « mettre score à 0 » après « quand le drapeau vert est cliqué ».",
                "On modifie ensuite sa valeur avec « modifier score de 1 » (MakeCode) ou « ajouter 1 à score » (Scratch). Pour diminuer, on ajoute un nombre négatif : « modifier score de -1 ». On peut afficher la valeur avec « afficher nombre score » sur la micro:bit, ou la voir à l'écran dans Scratch.",
                "Exemple : un compteur de passages pour la porte du CDI. Au démarrage, passages vaut 0 ; à chaque appui sur A, on ajoute 1 et on affiche ; un appui sur B remet le compteur à 0.",
              ],
              box: { label: "Règle", text: "Créer la variable, l'initialiser (définir à une valeur de départ), puis la modifier. Un nombre négatif dans « modifier de » fait diminuer la variable." },
            },
            {
              heading: "Combiner des conditions : et, ou, non",
              paragraphs: [
                "Une condition compare souvent la valeur d'un capteur à un seuil avec < (inférieur à), > (supérieur à) ou = (égal à). Sur la micro:bit, le niveau de lumière va de 0 (obscurité) à 255 (forte lumière).",
                "Les opérateurs logiques permettent d'assembler plusieurs conditions. « A et B » est vrai seulement si A et B sont vraies toutes les deux. « A ou B » est vrai si au moins l'une des deux est vraie. « non A » est vrai quand A est fausse.",
                "Exemple : un éclairage de jardin qui s'allume seulement la nuit quand quelqu'un passe utilise « si niveau de lumière < 50 et présence = 1, alors allumer ». De jour, même si quelqu'un passe, la lampe reste éteinte, car la première condition est fausse.",
              ],
              box: { label: "À retenir", text: "« et » : les deux conditions vraies. « ou » : au moins une condition vraie. « non » : inverse vrai et faux." },
            },
          ],
          keyPoints: [
            "Un programme est un algorithme traduit en langage machine ; on le téléverse dans la carte.",
            "La micro:bit a des entrées (boutons, lumière, température, accéléromètre) et des sorties (25 LED).",
            "Chaque script commence par un événement ; plusieurs scripts s'exécutent en parallèle.",
            "Une variable se crée, s'initialise (« définir à »), puis se modifie (« modifier de »).",
            "« et » : toutes les conditions vraies ; « ou » : au moins une ; « non » : l'inverse.",
            "Système embarqué : le programme est enfermé dans l'objet, qui fonctionne seul.",
          ],
          example: {
            statement: "On programme une micro:bit pour compter les passages à la porte du CDI. Au démarrage : « définir passages à 0 ». Lorsque le bouton A est pressé : « modifier passages de 1 », puis « afficher nombre passages ». Lorsque le bouton B est pressé : « définir passages à 0 », puis « afficher nombre passages ». On appuie sur A trois fois, puis sur B une fois, puis sur A deux fois. Qu'affiche la carte à la fin ? Expliquer.",
            solution: [
              "Au démarrage, la variable passages est initialisée à 0.",
              "Premier appui sur A : passages = 0 + 1 = 1. Deuxième : 2. Troisième : 3. La carte affiche 3.",
              "Appui sur B : passages est remis à 0, la carte affiche 0.",
              "Deux appuis sur A : passages = 1, puis 2. La carte affiche 2.",
              "Réponse : la carte affiche 2, car le bouton B a remis le compteur à zéro avant les deux derniers appuis.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici un programme MakeCode. Au démarrage : « définir score à 10 ». Lorsque le bouton A est pressé : « modifier score de 5 ». Lorsque le bouton B est pressé : « modifier score de -3 ». Toujours : « afficher nombre score ». On appuie sur A, puis A, puis B. a) Quelle valeur la carte affiche-t-elle après chaque appui ? b) Combien de scripts ce programme contient-il ?",
              hint: "Partez de la valeur donnée au démarrage, puis appliquez chaque modification dans l'ordre des appuis. Un script commence par un bloc d'événement.",
              solution: [
                "a) Départ : score = 10.",
                "Après le premier A : 10 + 5 = 15. Après le deuxième A : 15 + 5 = 20. Après B : 20 - 3 = 17.",
                "b) Il y a 4 scripts, un par bloc d'événement : « au démarrage », « lorsque le bouton A est pressé », « lorsque le bouton B est pressé » et « toujours ».",
                "Résultat : la carte affiche 15, puis 20, puis 17 ; le programme contient 4 scripts.",
              ],
            },
            {
              level: 2,
              statement: "Un éclairage de jardin utilise une micro:bit. Un détecteur de présence est branché sur la broche P0 : il donne 1 quand quelqu'un passe et 0 sinon. On veut que la lampe s'allume seulement s'il fait sombre (niveau de lumière < 50) et si quelqu'un passe. a) Écrire le programme avec les blocs « toujours », « si... alors... sinon », « niveau de lumière », « lire la broche numérique P0 », l'opérateur « et », « allumer la lampe » et « éteindre la lampe ». b) Compléter : que fait la lampe dans les quatre cas suivants ? Cas 1 : lumière 30, présence 1. Cas 2 : lumière 30, présence 0. Cas 3 : lumière 200, présence 1. Cas 4 : lumière 200, présence 0. c) Que se passerait-il si l'on remplaçait « et » par « ou » ?",
              hint: "Pour chaque cas, évaluez séparément les deux conditions (vraie ou fausse), puis appliquez la règle de « et » : il faut les deux vraies.",
              solution: [
                "a) Programme : « toujours : si (niveau de lumière < 50) et (lire la broche numérique P0 = 1) alors allumer la lampe, sinon éteindre la lampe ».",
                "b) Cas 1 : 30 < 50 vrai, présence vrai : vrai et vrai = vrai, la lampe s'allume.",
                "Cas 2 : 30 < 50 vrai, présence faux : le « et » est faux, la lampe reste éteinte.",
                "Cas 3 : 200 < 50 faux : le « et » est faux, la lampe reste éteinte, même si quelqu'un passe.",
                "Cas 4 : les deux conditions sont fausses, la lampe reste éteinte.",
                "c) Avec « ou », il suffirait d'une seule condition vraie : la lampe s'allumerait toute la nuit (cas 2) et aussi en plein jour dès que quelqu'un passe (cas 3), ce qui gaspille de l'énergie.",
                "Résultat : la lampe s'allume seulement dans le cas 1 ; avec « ou », elle s'allumerait dans les cas 1, 2 et 3.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On veut faire un compte à rebours sur une micro:bit. Au démarrage : « définir temps à 10 ». Lorsque le bouton A est pressé : « tant que temps > 0 : afficher nombre temps, pause (ms) 1000, modifier temps de -1 », puis « montrer l'icône cœur ». a) Quels nombres s'affichent, dans l'ordre ? b) Combien de temps dure le compte à rebours, à la seconde près ? c) Quelle est la valeur de temps quand le cœur apparaît ? d) On appuie une seconde fois sur A : que se passe-t-il ? Pourquoi ? e) Corriger le programme pour qu'il recommence un compte à rebours de 10 secondes à chaque appui sur A.",
              hint: "Rappelez-vous que 1000 ms = 1 s. Pour d), regardez la valeur de temps au moment du deuxième appui et le résultat du test « temps > 0 ».",
              solution: [
                "a) La boucle affiche temps puis lui retire 1 : on voit 10, 9, 8, 7, 6, 5, 4, 3, 2, 1. Quand temps vaut 0, le test « 0 > 0 » est faux et la boucle s'arrête : 0 ne s'affiche pas.",
                "b) Il y a 10 tours de boucle, chacun avec une pause de 1000 ms = 1 s : le compte à rebours dure environ 10 secondes.",
                "c) Quand le cœur apparaît, temps vaut 0.",
                "d) Au deuxième appui, temps vaut toujours 0 : le test « temps > 0 » est faux dès le début, la boucle ne s'exécute pas et le cœur s'affiche aussitôt. La variable n'a été initialisée qu'une fois, au démarrage.",
                "e) Correction : placer « définir temps à 10 » au début du script « lorsque le bouton A est pressé », avant la boucle « tant que ». Chaque appui remet alors temps à 10.",
                "Résultat : 10 à 1 en 10 secondes, temps vaut 0 à la fin ; il faut réinitialiser la variable dans le script du bouton A.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour programmer un système avec une carte électronique.",
            items: [
              "Décrire le comportement attendu du système",
              "Écrire l'algorithme ou l'algorigramme",
              "Traduire l'algorithme en blocs dans le logiciel",
              "Essayer le programme dans le simulateur",
              "Téléverser le programme dans la carte",
              "Tester le fonctionnement sur l'objet réel",
            ],
          },
          quiz: [
            {
              q: "Le bloc « au démarrage » d'une micro:bit est exécuté :",
              options: ["une seule fois, à la mise sous tension", "sans arrêt, tant que la carte est alimentée", "à chaque appui sur le bouton A ou le bouton B", "jamais"],
              answer: 0,
              why: "« Au démarrage » sert à préparer le programme, par exemple à initialiser les variables ; c'est « toujours » qui répète sans fin.",
            },
            {
              q: "« modifier score de -2 » appliqué à score = 7 donne :",
              options: ["9", "-2", "14", "5"],
              answer: 3,
              why: "Modifier de -2, c'est ajouter -2, donc retirer 2 : 7 - 2 = 5.",
            },
            {
              q: "« lumière < 50 ou bouton A pressé » est vrai quand :",
              options: ["les deux conditions sont fausses", "au moins une condition est vraie", "seulement s'il fait jour", "jamais"],
              answer: 1,
              why: "Avec « ou », il suffit qu'une des deux conditions soit vraie pour que l'ensemble soit vrai.",
            },
            {
              q: "Que veut dire « téléverser » un programme ?",
              options: ["L'effacer", "Le transférer vers la carte", "L'imprimer", "Le dessiner en algorigramme"],
              answer: 1,
              why: "Téléverser, c'est envoyer le programme de l'ordinateur vers la carte, qui l'exécute ensuite seule.",
            },
            {
              q: "Dans Scratch, quel bloc déclenche le script « quand je reçois [départ] » ?",
              options: ["mettre départ à 0", "quand le drapeau vert est cliqué", "envoyer à tous [départ]", "répéter 10 fois"],
              answer: 2,
              why: "« Envoyer à tous » diffuse un message ; tous les scripts qui commencent par « quand je reçois » ce message démarrent.",
            },
          ],
          trap: "Initialiser une variable seulement dans « au démarrage » alors qu'elle doit repartir de sa valeur de départ à chaque utilisation : le deuxième lancement part de la valeur laissée par le premier.",
          method: "Pour prévoir ce que fait un programme avec une variable, écrivez sur votre brouillon la valeur de la variable après chaque événement (chaque appui, chaque tour de boucle), comme un relevé de compte, avant de lancer le simulateur pour vérifier.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'modifier-programme',
          title: 'Modifier un programme sur un objet réel ou simulé',
          minutes: 30,
          objectives: [
            "Lire un programme existant et repérer ses entrées, ses sorties, ses variables et ses paramètres.",
            "Modifier un programme pour faire évoluer le comportement d'un système.",
            "Tester le programme modifié en simulation puis sur l'objet réel, et comparer au comportement attendu.",
            "Repérer et corriger une erreur de programmation avec une démarche méthodique.",
          ],
          course: [
            {
              heading: "Lire un programme avant de le modifier",
              paragraphs: [
                "En technologie comme dans les entreprises, on écrit rarement un programme à partir de rien : on part souvent d'un programme existant qu'on améliore. Avant de toucher à quoi que ce soit, il faut le lire et le comprendre.",
                "Lire un programme, c'est répondre à quelques questions. Quels événements le déclenchent ? Quelles entrées lit-il (boutons, capteurs) ? Quelles sorties commande-t-il (LED, moteur, affichage) ? Quelles variables utilise-t-il ? Quels paramètres fixent son comportement : un seuil (« lumière < 100 »), une durée (« pause 500 ms »), une vitesse ?",
                "Les commentaires aident beaucoup : ce sont de petites notes écrites dans le programme, que la machine ignore, et qui expliquent à quoi sert chaque partie. Un bon programmeur en ajoute pour les personnes qui reprendront son travail.",
              ],
              box: { label: "Définition", text: "Paramètre : valeur fixée dans le programme qui règle le comportement du système (seuil, durée, vitesse). Commentaire : note ajoutée au programme pour l'expliquer, ignorée par la machine." },
            },
            {
              heading: "Modifier pas à pas",
              paragraphs: [
                "On peut modifier un paramètre (changer le seuil de 100 à 40 pour qu'une veilleuse s'allume plus tard), ajouter une condition (ne déclencher l'alarme que si elle est activée), ajouter une sortie (faire aussi sonner un buzzer) ou réorganiser les blocs (placer un test dans la boucle « toujours »).",
                "La règle d'or : une seule modification à la fois, suivie d'un test. Si l'on change cinq choses d'un coup et que le système ne marche plus, on ne sait pas laquelle est en cause. Avant de modifier, on garde une copie de la version qui fonctionne, pour pouvoir revenir en arrière.",
                "Attention aux unités. Dans MakeCode, le bloc « pause » compte en millisecondes : 1 seconde = 1 000 ms, donc une pause de 2,5 s s'écrit « pause (ms) 2500 ». Une erreur d'unité donne un système mille fois trop rapide ou trop lent.",
              ],
              box: { label: "Règle", text: "Une modification à la fois, puis un test. Garder une copie de la version qui fonctionne. Vérifier les unités : 1 s = 1 000 ms." },
            },
            {
              heading: "Tester en simulation, puis sur l'objet réel",
              paragraphs: [
                "Un simulateur reproduit à l'écran le comportement du système. Il est rapide, ne demande aucun matériel et ne risque rien : si un moteur tourne dans le mauvais sens, rien ne casse. Dans le simulateur de MakeCode, on règle par exemple le niveau de lumière ou la température avec un curseur pour voir la réaction du programme.",
                "Mais le simulateur est un modèle : il ne reproduit pas tout. Les capteurs réels donnent des valeurs qui varient, un moteur réel a des frottements, une pile s'use. Le programme doit donc toujours être testé ensuite sur l'objet réel.",
                "Pour chaque test, on prévoit d'abord le résultat attendu, on observe le résultat obtenu, puis on compare. On teste trois sortes de cas : un cas où la condition est vraie, un cas où elle est fausse, et le cas limite, où la valeur est exactement égale au seuil.",
              ],
              box: { label: "À retenir", text: "Simulation : rapide, sans matériel, sans risque, mais simplifiée. Objet réel : indispensable pour valider. Tester les cas vrai, faux et limite, en comparant résultat attendu et résultat obtenu." },
            },
            {
              heading: "Chercher et corriger un bogue",
              paragraphs: [
                "Un bogue (en anglais bug) est une erreur qui fait qu'un programme ne se comporte pas comme prévu. Déboguer, c'est le trouver et le corriger, avec une démarche d'enquêteur : observer précisément le défaut, faire une hypothèse sur sa cause, modifier un seul élément, tester de nouveau.",
                "Les bogues les plus fréquents au collège : un signe de comparaison inversé (< au lieu de >), un test placé hors de la boucle « toujours », une erreur d'unité, une variable jamais initialisée ou jamais remise à zéro, un capteur branché sur une autre broche que celle du programme.",
                "Une astuce efficace consiste à afficher la valeur mesurée par le capteur (« afficher nombre niveau de lumière ») : on voit alors les vraies valeurs, et l'on peut choisir un seuil adapté à la situation réelle au lieu de le deviner.",
              ],
              box: { label: "Méthode", text: "Déboguer : observer le défaut, faire une hypothèse, modifier un seul élément, tester. Afficher la valeur d'un capteur permet de voir ce que la carte mesure vraiment." },
            },
          ],
          keyPoints: [
            "Avant de modifier, lire le programme : événements, entrées, sorties, variables, paramètres.",
            "Un paramètre (seuil, durée, vitesse) règle le comportement ; un commentaire explique le programme.",
            "Une seule modification à la fois, suivie d'un test ; garder une copie de la version qui marche.",
            "Dans MakeCode, « pause » compte en millisecondes : 1 s = 1 000 ms.",
            "Simuler d'abord, puis toujours tester sur l'objet réel.",
            "Tester les cas vrai, faux et limite ; afficher la valeur d'un capteur aide à déboguer.",
          ],
          example: {
            statement: "Une veilleuse utilise ce programme : « toujours : si niveau de lumière < 100 alors allumer les LED, sinon éteindre les LED ». Problème : elle s'allume aussi en journée quand le ciel est couvert. On affiche la valeur du capteur (données fictives) : 80 par jour de ciel couvert, 160 par beau temps, 10 la nuit. Modifier le programme et le tester.",
            solution: [
              "Lecture du programme : une entrée (le capteur de lumière), une sortie (les LED), un paramètre (le seuil 100).",
              "Diagnostic : par ciel couvert, 80 < 100 est vrai, donc la veilleuse s'allume. Le seuil est trop haut.",
              "Modification : on choisit un seuil compris entre la valeur de la nuit (10) et celle du ciel couvert (80), par exemple 40. Nouveau programme : « toujours : si niveau de lumière < 40 alors allumer les LED, sinon éteindre les LED ».",
              "Tests : nuit, 10 < 40 vrai, la veilleuse s'allume ; ciel couvert, 80 < 40 faux, elle reste éteinte ; beau temps, 160 < 40 faux, elle reste éteinte ; cas limite, 40 < 40 faux, elle reste éteinte.",
              "Réponse : il suffit de modifier un seul paramètre, le seuil, en le passant de 100 à 40 ; les tests sont conformes au comportement attendu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une LED clignote avec ce programme : « toujours : allumer la LED, pause (ms) 500, éteindre la LED, pause (ms) 500 ». a) Combien de temps dure un clignotement complet ? b) On veut que la LED reste allumée 1 s puis éteinte 1 s. Quels paramètres faut-il modifier, et quelle valeur faut-il écrire ? c) Écrire en millisecondes une pause de 2,5 s, puis une pause de 0,2 s.",
              hint: "Rappelez-vous que 1 s = 1 000 ms. Pour convertir des secondes en millisecondes, on multiplie par 1 000.",
              solution: [
                "a) Un clignotement complet : 500 + 500 = 1 000 ms, soit 1 seconde.",
                "b) Il faut modifier les deux pauses et écrire 1000 dans chacune : « pause (ms) 1000 ». Le clignotement complet dure alors 2 secondes.",
                "c) 2,5 s = 2,5 × 1 000 = 2 500 ms ; 0,2 s = 0,2 × 1 000 = 200 ms.",
                "Résultat : 1 s par clignotement ; deux pauses à 1000 ms ; 2 500 ms et 200 ms.",
              ],
            },
            {
              level: 2,
              statement: "Un ventilateur de serre fonctionne avec ce programme : « toujours : si température > 28 alors mettre le moteur en marche, sinon arrêter le moteur ». La carte mesure des températures entières en degrés Celsius. Le jardinier veut maintenant : que le ventilateur démarre dès 26 °C (26 °C compris), et qu'une icône (un soleil) s'affiche quand il tourne. a) Quels sont l'entrée, la sortie et le paramètre du programme de départ ? b) Écrire le programme modifié. c) Proposer trois valeurs de test, en précisant le résultat attendu pour chacune.",
              hint: "« Dès 26 °C, 26 compris » : la condition doit être vraie pour 26. Avec des nombres entiers, « > 25 » et « ≥ 26 » donnent le même résultat.",
              solution: [
                "a) Entrée : le capteur de température. Sortie : le moteur du ventilateur. Paramètre : le seuil 28.",
                "b) Programme modifié : « toujours : si température ≥ 26 alors mettre le moteur en marche et montrer l'icône soleil, sinon arrêter le moteur et effacer l'écran ». On peut aussi écrire « température > 25 », puisque les températures mesurées sont entières.",
                "c) Test 1, cas faux : 24 °C, attendu : moteur arrêté, écran vide.",
                "Test 2, cas limite : 26 °C, attendu : moteur en marche et soleil affiché (26 ≥ 26 est vrai).",
                "Test 3, cas vrai : 30 °C, attendu : moteur en marche et soleil affiché.",
                "Résultat : on a modifié le seuil (28 vers 26), le signe de comparaison (> vers ≥) et ajouté une sortie (l'icône) ; on teste 24, 26 et 30 °C.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un parking de 20 places est géré par une micro:bit. Au démarrage : « définir places à 20 ». Toujours : « si capteur d'entrée = 1 alors modifier places de 1 » ; « si capteur de sortie = 1 alors modifier places de -1 » ; « afficher nombre places ». a) Au démarrage, 3 voitures entrent puis 1 voiture sort. Combien de places libres devrait-on avoir ? Qu'affiche ce programme ? b) Quel est le premier bogue et comment le corriger ? c) Lors du test réel, une seule voiture qui entre lentement fait baisser le compteur de plusieurs places. Expliquer pourquoi et proposer une correction.",
              hint: "Une voiture qui entre occupe une place : le nombre de places libres doit diminuer. Pour c), pensez à la vitesse de la boucle « toujours », qui tourne de nombreuses fois par seconde pendant que la voiture passe devant le capteur.",
              solution: [
                "a) Attendu : 20 - 3 + 1 = 18 places libres. Le programme, lui, ajoute 1 à chaque entrée et retire 1 à chaque sortie : 20 + 3 - 1 = 22. Il affiche 22, plus que le nombre total de places.",
                "b) Les signes sont inversés : une entrée doit retirer une place et une sortie en libérer une. Correction : « si capteur d'entrée = 1 alors modifier places de -1 » et « si capteur de sortie = 1 alors modifier places de 1 ».",
                "c) La boucle « toujours » tourne très vite. Tant que la voiture est devant le capteur, celui-ci reste à 1, et chaque tour de boucle retire une place : une seule voiture est comptée plusieurs fois.",
                "Correction : après avoir modifié places, attendre que la voiture soit passée, par exemple avec une boucle « tant que capteur d'entrée = 1 : pause (ms) 100 », qui bloque le comptage jusqu'à ce que le capteur repasse à 0. On fait de même pour la sortie.",
                "Résultat : 18 places attendues mais 22 affichées ; on inverse les signes, puis on attend le passage complet de chaque voiture pour ne la compter qu'une fois.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : modifier et tester un programme.",
            statements: [
              { text: "Si un programme marche dans le simulateur, il est inutile de le tester sur l'objet réel.", true: false, why: "Le simulateur simplifie la réalité : capteurs, moteurs et piles réels peuvent se comporter autrement." },
              { text: "Dans MakeCode, « pause (ms) 3000 » dure 3 secondes.", true: true, why: "1 s = 1 000 ms, donc 3 000 ms = 3 s." },
              { text: "Il vaut mieux modifier plusieurs blocs d'un coup pour gagner du temps.", true: false, why: "Si le système ne marche plus, on ne sait pas quelle modification est en cause : on change une chose à la fois." },
              { text: "Un commentaire modifie le comportement du programme.", true: false, why: "La machine ignore les commentaires : ils servent seulement aux personnes qui lisent le programme." },
              { text: "Afficher la valeur d'un capteur aide à choisir un seuil adapté.", true: true, why: "On voit ce que la carte mesure vraiment, au lieu de deviner la valeur du seuil." },
              { text: "Avec « si température > 25 », le cas limite à tester est 25 °C.", true: true, why: "Le cas limite est la valeur égale au seuil ; ici, 25 > 25 est faux." },
            ],
          },
          quiz: [
            {
              q: "Dans « si niveau de lumière < 100 alors allumer », le nombre 100 est :",
              options: ["une sortie", "un commentaire", "un événement", "un paramètre"],
              answer: 3,
              why: "C'est la valeur qui règle le comportement : en la changeant, on change le moment où la lampe s'allume.",
            },
            {
              q: "Combien de millisecondes y a-t-il dans 4 secondes ?",
              options: ["40 ms", "4 000 ms", "400 ms", "40 000 ms"],
              answer: 1,
              why: "1 s = 1 000 ms, donc 4 s = 4 × 1 000 = 4 000 ms.",
            },
            {
              q: "Quel est l'intérêt principal d'un simulateur ?",
              options: ["Tester vite et sans risque", "Remplacer tout essai réel", "Rendre la carte plus rapide", "Écrire les commentaires"],
              answer: 0,
              why: "Le simulateur permet d'essayer sans matériel et sans rien casser, mais il ne remplace pas l'essai sur l'objet réel.",
            },
            {
              q: "Quelle est la bonne démarche pour déboguer ?",
              options: ["Tout effacer et réécrire le programme depuis le début", "Changer plusieurs blocs au hasard jusqu'à ce que ça marche", "Observer, supposer une cause, modifier une chose, tester", "Ajouter des boucles partout"],
              answer: 2,
              why: "Comme un enquêteur, on observe le défaut, on fait une hypothèse, puis on la vérifie par une seule modification suivie d'un test.",
            },
            {
              q: "Pourquoi garder une copie de la version qui fonctionne ?",
              options: ["Pour rendre le programme plus court", "Pour pouvoir revenir en arrière", "Pour que la carte aille plus vite", "Parce que c'est obligatoire pour téléverser"],
              answer: 1,
              why: "Si une modification casse le fonctionnement, on peut retrouver la dernière version correcte.",
            },
          ],
          trap: "Oublier que le bloc « pause » de MakeCode compte en millisecondes : écrire « pause (ms) 2 » en pensant attendre 2 secondes donne une pause de 2 millièmes de seconde, invisible à l'œil.",
          method: "Avant de modifier, notez dans un tableau le comportement attendu pour trois valeurs (cas vrai, cas faux, cas limite). Après la modification, refaites les trois essais et cochez chaque ligne conforme : le programme n'est validé que si les trois sont cochées.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'intelligence-artificielle',
          title: 'L\'intelligence artificielle : apprendre à partir de données',
          minutes: 35,
          objectives: [
            "Distinguer un programme fondé sur des règles écrites et un système d'intelligence artificielle qui apprend à partir d'exemples.",
            "Décrire les étapes de l'apprentissage automatique : collecter, étiqueter, entraîner, tester, utiliser.",
            "Calculer un taux de réussite et expliquer pourquoi la qualité et la diversité des données comptent.",
            "Exercer un regard critique sur les résultats d'une intelligence artificielle.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'intelligence artificielle ?",
              paragraphs: [
                "L'intelligence artificielle (IA) désigne un ensemble de techniques qui permettent à une machine de réaliser des tâches qui semblaient demander l'intelligence humaine : reconnaître un visage ou un objet sur une image, comprendre une phrase prononcée, traduire un texte, recommander une vidéo, trier les courriels indésirables.",
                "Vous l'utilisez déjà : le téléphone qui se déverrouille en reconnaissant votre visage, l'assistant vocal qui répond à une question, le logiciel de traduction, la plateforme qui propose des vidéos selon ce que vous avez déjà regardé. Les agents conversationnels, qui rédigent des textes à partir d'une consigne appelée prompt, sont aussi des IA.",
              ],
              box: { label: "Définition", text: "Intelligence artificielle : ensemble de techniques qui permettent à une machine de réaliser des tâches comme reconnaître, classer, prédire ou produire du texte et des images, tâches qui semblaient réservées à l'intelligence humaine." },
            },
            {
              heading: "Des règles écrites à l'apprentissage par l'exemple",
              paragraphs: [
                "Jusqu'ici, vous avez écrit des programmes à base de règles : « si niveau de lumière < 50 alors allumer ». C'est la personne qui programme qui décide de chaque règle. Cette méthode fonctionne très bien quand les règles sont simples et faciles à écrire.",
                "Mais comment écrire les règles pour reconnaître un chat sur une photo ? Les chats ont des couleurs, des tailles et des positions très variées : il faudrait des milliers de règles, et il en manquerait toujours. On procède alors autrement : on montre à la machine un très grand nombre d'exemples, et elle trouve elle-même les régularités. C'est l'apprentissage automatique (en anglais machine learning).",
                "C'est un peu comme un enfant qui apprend à reconnaître les oiseaux : personne ne lui donne une définition complète, mais à force d'en voir, accompagnés du mot « oiseau », il finit par les reconnaître, même une espèce qu'il n'a jamais vue.",
              ],
              box: { label: "À retenir", text: "Programme à règles : l'humain écrit chaque règle (si... alors...). Apprentissage automatique : la machine construit elle-même son modèle à partir de nombreux exemples." },
            },
            {
              heading: "Les étapes de l'apprentissage automatique",
              paragraphs: [
                "1. Collecter des données : par exemple des centaines de photos de canettes, de bouteilles en plastique et de cartons, pour une poubelle qui trie seule les déchets. 2. Étiqueter chaque exemple : on indique pour chaque photo la bonne réponse (« canette », « bouteille », « carton »). Cette étiquette s'appelle aussi une classe.",
                "3. Entraîner : un programme analyse les exemples étiquetés et construit un modèle, c'est-à-dire le résultat de l'apprentissage, capable de reconnaître les classes. 4. Tester : on vérifie le modèle avec de nouveaux exemples qu'il n'a jamais vus pendant l'entraînement, pour mesurer s'il sait vraiment reconnaître, et pas seulement se souvenir des photos apprises.",
                "5. Utiliser : face à une nouvelle image, le modèle fait une prédiction, souvent accompagnée d'un score de confiance (« canette : 92 % »). Ce score n'est pas une certitude. Pour évaluer un modèle, on calcule son taux de réussite : le nombre de bonnes réponses divisé par le nombre total de tests, exprimé en pourcentage.",
              ],
              box: { label: "Formule", text: "Taux de réussite (en %) = nombre de bonnes réponses ÷ nombre total de tests × 100. Exemple : 36 bonnes réponses sur 40 tests donnent 36 ÷ 40 × 100 = 90 %." },
            },
            {
              heading: "Les limites de l'IA et le regard critique",
              paragraphs: [
                "Une IA ne vaut que par ses données. Si elle n'a appris qu'avec des photos de pommes rouges, elle reconnaîtra mal une pomme verte. Quand les données d'entraînement ne représentent pas toutes les situations, le modèle commet des erreurs systématiques : on parle de biais. Un biais peut avoir des conséquences graves, par exemple si un système reconnaît moins bien certains visages que d'autres.",
                "Une IA peut se tromper, même avec un score de confiance élevé. Les agents conversationnels produisent un texte en prédisant, mot après mot, une suite probable : leur réponse peut sembler sûre d'elle et pourtant contenir des erreurs ou des informations inventées. Il faut donc vérifier les informations importantes dans des sources fiables.",
                "Enfin, l'entraînement et l'utilisation des grands modèles demandent de puissants centres de données, qui consomment beaucoup d'électricité, et ces systèmes sont souvent nourris de données personnelles. L'IA est un outil : c'est à l'humain de garder l'esprit critique et de prendre les décisions.",
              ],
              box: { label: "À retenir", text: "Biais : erreur systématique due à des données d'entraînement incomplètes ou déséquilibrées. Une IA peut se tromper avec assurance : on vérifie, et c'est l'humain qui décide." },
            },
          ],
          keyPoints: [
            "IA : techniques qui permettent à une machine de reconnaître, classer, prédire ou produire du contenu.",
            "Programme à règles : l'humain écrit les règles. Apprentissage automatique : la machine apprend à partir d'exemples.",
            "Étapes : collecter, étiqueter, entraîner (on obtient un modèle), tester sur de nouveaux exemples, utiliser.",
            "Taux de réussite = bonnes réponses ÷ nombre de tests × 100.",
            "Des données incomplètes ou déséquilibrées créent des biais.",
            "Une IA peut se tromper avec assurance : on vérifie les informations, et l'humain décide.",
          ],
          example: {
            statement: "Une classe entraîne un modèle à distinguer les pommes et les bananes (données fictives). Elle utilise 100 photos de pommes et 100 photos de bananes, toutes étiquetées. Elle teste ensuite le modèle avec 40 nouvelles photos : il donne 36 bonnes réponses. a) Quelles sont les classes ? b) Pourquoi tester avec de nouvelles photos ? c) Calculer le taux de réussite. d) Le modèle se trompe sur une pomme verte : quelle hypothèse faire ?",
            solution: [
              "a) Les classes (les étiquettes) sont « pomme » et « banane ».",
              "b) Si l'on testait avec les photos de l'entraînement, le modèle pourrait seulement se souvenir des réponses. De nouvelles photos permettent de vérifier qu'il sait reconnaître des fruits qu'il n'a jamais vus.",
              "c) Taux de réussite = 36 ÷ 40 × 100 = 90 %.",
              "d) Hypothèse : les photos d'entraînement contenaient surtout des pommes rouges ; le modèle a appris que « pomme » va avec « rouge ». Il faut ajouter des photos de pommes vertes et jaunes, puis entraîner de nouveau.",
              "Réponse : deux classes, test sur des photos nouvelles, 90 % de réussite, et un probable biais dû à des données trop peu variées.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque système, dire s'il fonctionne surtout avec des règles écrites par un humain ou avec un modèle appris à partir d'exemples : a) un feu tricolore dont chaque couleur dure un temps fixe ; b) un logiciel qui reconnaît des chiffres écrits à la main ; c) un thermostat qui chauffe si la température est inférieure à 19 °C ; d) une messagerie qui repère les courriels indésirables après avoir analysé des milliers de messages signalés ; e) un logiciel de traduction automatique.",
              hint: "Demandez-vous si l'on peut écrire facilement la règle sous la forme « si... alors... ». Si c'est presque impossible, la machine a sans doute appris à partir d'exemples.",
              solution: [
                "a) Les durées sont fixées par une personne : programme à règles.",
                "b) Les écritures à la main sont trop variées pour des règles : modèle appris à partir d'exemples.",
                "c) « Si température < 19 alors chauffer » est une règle écrite : programme à règles.",
                "d) Le filtre a appris à partir de messages signalés : modèle appris.",
                "e) La traduction automatique s'appuie sur un modèle entraîné avec d'immenses quantités de textes : modèle appris.",
                "Résultat : règles pour a et c ; apprentissage pour b, d et e.",
              ],
            },
            {
              level: 2,
              statement: "Deux modèles de tri des déchets (données fictives) sont testés sur les mêmes 50 photos nouvelles. Le modèle A donne 42 bonnes réponses. Le modèle B, entraîné avec des photos plus variées (différents éclairages, objets écrasés ou sales), donne 47 bonnes réponses. a) Calculer le taux de réussite de chaque modèle. b) Calculer le taux d'erreur du modèle B. c) Quel modèle choisir, et que montre cette comparaison ?",
              hint: "Taux de réussite = bonnes réponses ÷ nombre de tests × 100. Le taux d'erreur est ce qui manque pour arriver à 100 %.",
              solution: [
                "a) Modèle A : 42 ÷ 50 × 100 = 84 %. Modèle B : 47 ÷ 50 × 100 = 94 %.",
                "b) Le modèle B se trompe sur 50 - 47 = 3 photos : 3 ÷ 50 × 100 = 6 %, soit 100 % - 94 %.",
                "c) On choisit le modèle B, qui réussit mieux sur des photos qu'il n'a jamais vues.",
                "La comparaison montre que des données d'entraînement plus variées, proches des situations réelles, donnent un modèle plus fiable.",
                "Résultat : A = 84 %, B = 94 % ; le modèle B a 6 % d'erreurs ; la variété des données améliore le modèle.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un modèle doit reconnaître les chats et les chiens. Il a été entraîné avec 200 photos : tous les chats étaient photographiés à l'intérieur, sur un canapé, et tous les chiens dehors, sur de l'herbe. On le teste avec 40 nouvelles photos de chats : sur les 20 chats photographiés à l'intérieur, il en reconnaît 19 ; sur les 20 chats photographiés dehors sur l'herbe, il n'en reconnaît que 6. a) Calculer le taux de réussite sur chaque groupe, puis sur l'ensemble des 40 photos. b) Expliquer ce que le modèle a sans doute appris. c) Comment s'appelle ce défaut ? d) Proposer deux améliorations.",
              hint: "Comparez les deux groupes de photos : qu'est-ce qui change, à part l'animal ? Pour l'ensemble, additionnez les bonnes réponses des deux groupes.",
              solution: [
                "a) Chats à l'intérieur : 19 ÷ 20 × 100 = 95 %. Chats dehors : 6 ÷ 20 × 100 = 30 %.",
                "Ensemble : 19 + 6 = 25 bonnes réponses sur 40, soit 25 ÷ 40 × 100 = 62,5 %.",
                "b) Pendant l'entraînement, le fond de l'image (canapé ou herbe) suffisait à distinguer chats et chiens. Le modèle a sans doute appris à reconnaître le décor plutôt que l'animal : un chat sur l'herbe est pris pour un chien.",
                "c) C'est un biais : les données d'entraînement ne représentaient pas toutes les situations réelles.",
                "d) Ajouter des photos de chats dehors et de chiens à l'intérieur, dans des décors variés ; puis entraîner de nouveau et tester sur de nouvelles photos de toutes les situations.",
                "Résultat : 95 %, 30 % et 62,5 % ; le modèle a appris le décor ; c'est un biais, corrigé en variant les données.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'apprentissage automatique pour une poubelle qui trie les déchets.",
            items: [
              "Collecter des centaines de photos de déchets",
              "Étiqueter chaque photo : canette, bouteille ou carton",
              "Entraîner le programme pour obtenir un modèle",
              "Tester le modèle avec des photos qu'il n'a jamais vues",
              "Utiliser le modèle pour trier les nouveaux déchets",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que l'apprentissage automatique ?",
              options: ["Une machine qui apprend à partir d'exemples", "Un humain qui écrit toutes les règles une par une", "Un robot qui se recharge seul", "Une carte qui se téléverse seule"],
              answer: 0,
              why: "La machine trouve elle-même les régularités dans de nombreux exemples, au lieu de suivre des règles écrites une à une.",
            },
            {
              q: "Pourquoi teste-t-on un modèle avec des exemples qu'il n'a jamais vus ?",
              options: ["Pour l'entraîner plus vite", "Pour réduire la quantité de données à stocker", "Pour vérifier qu'il reconnaît vraiment", "Pour éviter de l'étiqueter"],
              answer: 2,
              why: "Avec les exemples d'entraînement, il pourrait simplement se souvenir des réponses ; de nouveaux exemples mesurent sa vraie capacité.",
            },
            {
              q: "Un modèle donne 27 bonnes réponses sur 30 tests. Son taux de réussite est :",
              options: ["27 %", "3 %", "30 %", "90 %"],
              answer: 3,
              why: "27 ÷ 30 × 100 = 90 %.",
            },
            {
              q: "Un biais dans une IA vient le plus souvent :",
              options: ["d'une carte trop lente", "de données d'entraînement déséquilibrées", "d'un écran trop petit pour afficher les résultats", "d'une pile usée"],
              answer: 1,
              why: "Si les exemples ne représentent pas toutes les situations, le modèle se trompe de façon systématique sur celles qu'il n'a pas vues.",
            },
            {
              q: "Un agent conversationnel répond avec assurance. Que faire ?",
              options: ["Le croire, car il ne peut pas se tromper", "Vérifier les informations importantes", "Lui donner son mot de passe", "Arrêter d'utiliser Internet"],
              answer: 1,
              why: "Il produit une suite de mots probable, qui peut contenir des erreurs ou des informations inventées : on vérifie dans des sources fiables.",
            },
          ],
          trap: "Croire qu'une IA « comprend » ou « sait » comme un humain et que son score de confiance est une certitude : un modèle ne fait que reproduire ce qu'il a appris de ses données, et il peut se tromper avec assurance.",
          method: "Face à un système d'IA, posez-vous trois questions : avec quelles données a-t-il appris ? Ces données représentent-elles toutes les situations ? Comment a-t-il été testé ? Pour un calcul de taux de réussite, vérifiez que le résultat est entre 0 % et 100 %.",
        },
      ],
    },
    /* ==================================================================== */
    /* CONCEVOIR ET RÉALISER UNE SOLUTION                                     */
    /* ==================================================================== */
    {
      id: 'concevoir-realiser',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cahier-des-charges',
          title: 'Le cahier des charges',
          minutes: 30,
          objectives: [
            "Identifier le besoin auquel répond un objet et l'exprimer avec l'outil « bête à cornes ».",
            "Distinguer la fonction principale et les fonctions contraintes d'un objet.",
            "Associer à chaque fonction un critère d'appréciation, un niveau mesurable et une flexibilité.",
            "Utiliser le cahier des charges pour comparer des solutions et justifier un choix.",
          ],
          course: [
            {
              heading: "Pourquoi un cahier des charges ?",
              paragraphs: [
                "Tout projet de conception commence par un besoin : un manque ou un désir qu'un objet pourrait satisfaire. Par exemple, une famille qui part deux jours a besoin de nourrir son chat en son absence. Avant de chercher des solutions, il faut décrire précisément ce que l'objet devra faire.",
                "Le cahier des charges est le document qui fixe ces exigences. Il dit ce que l'objet doit faire et dans quelles conditions, mais pas comment le faire : il laisse le choix des solutions aux concepteurs. Il sert de référence pendant tout le projet, du choix des idées jusqu'aux tests du prototype.",
                "Dans la démarche de projet, il intervient au début : on identifie le besoin, on rédige le cahier des charges, on imagine et on choisit des solutions, on réalise un prototype, puis on le teste et on le compare au cahier des charges.",
              ],
              box: { label: "Définition", text: "Cahier des charges : document qui décrit le besoin, les fonctions que l'objet doit remplir et les contraintes à respecter, avec des critères mesurables. Il dit ce que l'objet doit faire, pas comment il est fabriqué." },
            },
            {
              heading: "Exprimer le besoin : la bête à cornes",
              paragraphs: [
                "Pour énoncer le besoin, on utilise un outil appelé « bête à cornes », qui répond à trois questions. À qui le produit rend-il service ? Sur quoi agit-il ? Dans quel but ?",
                "Pour un distributeur automatique de croquettes : il rend service au propriétaire du chat ; il agit sur les croquettes (et donc sur l'alimentation du chat) ; son but est de nourrir le chat à heures fixes, même en l'absence du propriétaire.",
                "La réponse à la troisième question permet d'écrire la fonction principale, aussi appelée fonction d'usage : c'est la raison d'être de l'objet. On la formule avec un verbe à l'infinitif : « permettre au propriétaire de nourrir son chat à heures fixes en son absence ».",
              ],
              box: { label: "Repère", text: "Bête à cornes : À qui le produit rend-il service ? Sur quoi agit-il ? Dans quel but ? La réponse au « but » donne la fonction principale, écrite avec un verbe à l'infinitif." },
            },
            {
              heading: "Fonction principale et fonctions contraintes",
              paragraphs: [
                "L'objet est en relation avec son environnement, que l'on appelle le milieu extérieur : l'utilisateur, l'animal, l'énergie, la maison, le budget, l'environnement naturel. On peut représenter ces relations sur un diagramme pieuvre : l'objet au centre, les éléments du milieu extérieur autour, et des traits pour chaque fonction.",
                "La fonction principale relie deux éléments du milieu extérieur à travers l'objet (le propriétaire et le chat). Les fonctions contraintes relient l'objet à un seul élément et imposent des limites : être alimenté en énergie, résister au chat qui le renverse, coûter un prix raisonnable, être facile à nettoyer, respecter les normes de sécurité, limiter l'impact sur l'environnement.",
              ],
              box: { label: "À retenir", text: "Fonction principale (FP) : la raison d'être de l'objet, elle relie deux éléments du milieu extérieur. Fonction contrainte (FC) : une limite imposée par un seul élément (énergie, sécurité, coût, environnement, esthétique)." },
            },
            {
              heading: "Critères, niveaux et flexibilité",
              paragraphs: [
                "Une fonction doit pouvoir être vérifiée. On lui associe donc un critère d'appréciation (ce que l'on mesure ou observe), un niveau (la valeur à atteindre, avec son unité) et une flexibilité (est-ce que l'on peut négocier ce niveau ?).",
                "Exemple pour le distributeur (données fictives). FC1 « être alimenté par piles » : critère, autonomie ; niveau, au moins 30 jours. FC2 « contenir une réserve suffisante » : critère, capacité ; niveau, au moins 2 kg. FC3 « respecter le budget » : critère, prix ; niveau, 40 € au plus.",
                "La flexibilité se note souvent de F0 à F3 : F0, niveau impératif, impossible à négocier ; F1, peu négociable ; F2, négociable ; F3, très négociable. Un critère de sécurité est toujours en F0.",
              ],
              box: { label: "Règle", text: "Chaque fonction a un critère (ce que l'on mesure), un niveau (la valeur, avec son unité) et une flexibilité (F0 impératif, F1 peu négociable, F2 négociable, F3 très négociable)." },
            },
          ],
          keyPoints: [
            "Le cahier des charges dit ce que l'objet doit faire, pas comment il est fabriqué.",
            "Bête à cornes : à qui rend-il service ? sur quoi agit-il ? dans quel but ?",
            "Fonction principale : la raison d'être de l'objet, écrite avec un verbe à l'infinitif.",
            "Fonctions contraintes : limites imposées par l'énergie, la sécurité, le coût, l'environnement...",
            "Chaque fonction a un critère, un niveau chiffré avec son unité et une flexibilité (F0 à F3).",
            "Le cahier des charges sert à choisir une solution puis à valider le prototype.",
          ],
          example: {
            statement: "Une équipe de collégiens doit concevoir un support pour poser un smartphone sur un bureau afin de suivre un cours en vidéo. Rédiger la bête à cornes, la fonction principale, puis deux fonctions contraintes avec leur critère, leur niveau et leur flexibilité (niveaux choisis par l'équipe, données fictives).",
            solution: [
              "À qui le produit rend-il service ? À l'élève qui suit un cours en vidéo.",
              "Sur quoi agit-il ? Sur le smartphone.",
              "Dans quel but ? Maintenir le smartphone incliné face à l'élève, sans qu'il le tienne.",
              "Fonction principale : « permettre à l'élève de regarder son smartphone posé sur le bureau, sans le tenir ».",
              "FC1 « être stable » : critère, le support ne bascule pas avec un téléphone posé dessus ; niveau, téléphone de 250 g au moins ; flexibilité F0.",
              "FC2 « respecter le budget » : critère, coût de la matière ; niveau, 1 € au plus par support ; flexibilité F2.",
              "Réponse : la bête à cornes donne la fonction principale ; chaque fonction contrainte est rendue vérifiable par un critère, un niveau chiffré et une flexibilité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici des fonctions d'une gourde isotherme. Indiquer pour chacune s'il s'agit de la fonction principale (FP) ou d'une fonction contrainte (FC) : a) permettre à l'utilisateur de transporter une boisson et de la garder fraîche ; b) ne pas fuir dans un sac ; c) coûter moins de 20 € ; d) supporter le lave-vaisselle ; e) avoir une couleur qui plaît aux adolescents.",
              hint: "La fonction principale est la raison pour laquelle on achète l'objet. Les autres fonctions imposent des limites liées au sac, au budget, au lave-vaisselle ou au goût de l'utilisateur.",
              solution: [
                "a) C'est la raison d'être de la gourde : fonction principale (FP).",
                "b) Contrainte liée au sac et à son contenu : FC.",
                "c) Contrainte de coût, liée au budget : FC.",
                "d) Contrainte d'entretien, liée au lave-vaisselle : FC.",
                "e) Contrainte esthétique, liée au goût de l'utilisateur : FC.",
                "Résultat : a est la fonction principale ; b, c, d et e sont des fonctions contraintes.",
              ],
            },
            {
              level: 2,
              statement: "On veut concevoir une lampe de bureau pour un collégien. a) Remplir la bête à cornes. b) Rédiger la fonction principale. c) Pour chacune des fonctions contraintes suivantes, proposer un critère et un niveau avec son unité : FC1 « ne pas encombrer le bureau » ; FC2 « consommer peu d'énergie » ; FC3 « s'adapter à la hauteur du plan de travail » (niveaux à choisir vous-même, données fictives). d) Quelle flexibilité donner à une fonction « ne présenter aucun risque d'électrocution » ? Pourquoi ?",
              hint: "Un critère est ce que l'on mesure (une dimension, une puissance, une hauteur) ; un niveau est une valeur chiffrée avec son unité, précédée de « au plus » ou « au moins ».",
              solution: [
                "a) À qui ? Au collégien. Sur quoi ? Sur la lumière du plan de travail (l'éclairage du bureau). Dans quel but ? Éclairer le plan de travail pour lire et écrire confortablement.",
                "b) Fonction principale : « permettre au collégien d'éclairer son plan de travail pour lire et écrire ».",
                "c) FC1 : critère, surface occupée par le pied ; niveau, au plus 15 cm × 15 cm. FC2 : critère, puissance électrique ; niveau, au plus 6 W. FC3 : critère, hauteur de la lampe réglable ; niveau, de 30 cm à 50 cm.",
                "d) Flexibilité F0, car il s'agit de la sécurité de l'utilisateur : ce niveau est impératif et ne se négocie jamais.",
                "Résultat : une bête à cornes complète, une fonction principale à l'infinitif, trois critères chiffrés avec leurs unités, et la sécurité en F0.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Le cahier des charges d'un distributeur de croquettes impose : autonomie au moins 30 jours (F0) ; prix au plus 40 € (F1) ; capacité au moins 2 kg (F2) ; masse à vide au plus 3 kg (F3). Trois solutions sont proposées. A : 35 €, autonomie 20 jours, capacité 2,5 kg, masse 2 kg. B : 45 €, autonomie 60 jours, capacité 3 kg, masse 2,8 kg. C : 38 €, autonomie 40 jours, capacité 1,8 kg, masse 2,5 kg. a) Pour chaque solution, indiquer les critères non respectés. b) Une solution doit-elle être éliminée d'office ? c) Le chat mange 60 g de croquettes par jour. Pendant combien de jours la réserve de la solution C le nourrit-elle ? d) Quelle solution conseiller ? Justifier.",
              hint: "Comparez chaque valeur au niveau demandé, en faisant attention aux mots « au moins » et « au plus ». Un critère en F0 ne se négocie pas. Pour c), convertissez 1,8 kg en grammes.",
              solution: [
                "a) A : autonomie 20 jours < 30 jours, non respecté (F0) ; le reste est conforme. B : prix 45 € > 40 €, non respecté (F1) ; le reste est conforme. C : capacité 1,8 kg < 2 kg, non respecté (F2) ; le reste est conforme.",
                "b) Oui, la solution A : elle ne respecte pas un critère en F0, impératif, qui ne se négocie pas.",
                "c) 1,8 kg = 1 800 g ; 1 800 ÷ 60 = 30. La réserve de C nourrit le chat pendant 30 jours.",
                "d) B et C ne respectent chacune qu'un critère. Le défaut de B porte sur un critère peu négociable (F1), celui de C sur un critère négociable (F2), avec un faible écart (0,2 kg) : sa réserve couvre tout de même 30 jours, autant que l'autonomie demandée.",
                "Résultat : on élimine A, et l'on conseille C, après accord du client sur la capacité, qui est négociable.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme du cahier des charges à sa définition.",
            pairs: [
              { left: "Besoin", right: "Manque ou désir qu'un objet peut satisfaire" },
              { left: "Fonction principale", right: "Raison d'être de l'objet, écrite avec un verbe à l'infinitif" },
              { left: "Fonction contrainte", right: "Limite imposée par un élément du milieu extérieur" },
              { left: "Critère", right: "Ce que l'on mesure ou observe pour vérifier une fonction" },
              { left: "Niveau", right: "Valeur à atteindre, avec son unité" },
              { left: "Flexibilité F0", right: "Niveau impératif, impossible à négocier" },
            ],
          },
          quiz: [
            {
              q: "Le cahier des charges décrit :",
              options: ["la façon de fabriquer l'objet", "le prix de vente en magasin", "ce que l'objet doit faire et les contraintes", "le mode d'emploi de l'objet"],
              answer: 2,
              why: "Il fixe les exigences (fonctions, contraintes, niveaux) sans imposer de solution technique.",
            },
            {
              q: "Laquelle de ces questions ne fait pas partie de la bête à cornes ?",
              options: ["Combien coûte-t-il ?", "À qui rend-il service ?", "Sur quoi agit-il ?", "Dans quel but ?"],
              answer: 0,
              why: "La bête à cornes pose trois questions : à qui, sur quoi, dans quel but. Le coût relève d'une fonction contrainte.",
            },
            {
              q: "« Coûter 40 € au plus » est :",
              options: ["la fonction principale", "un besoin", "un critère de sécurité", "une fonction contrainte"],
              answer: 3,
              why: "C'est une limite imposée par le budget : une fonction contrainte, avec le critère prix et le niveau 40 € au plus.",
            },
            {
              q: "Quel niveau est correctement écrit ?",
              options: ["Assez léger", "Pas trop cher", "Au plus 500 g", "Très solide"],
              answer: 2,
              why: "Un niveau est une valeur chiffrée avec son unité, que l'on peut vérifier par une mesure.",
            },
            {
              q: "Un critère noté F0 :",
              options: ["ne se négocie pas", "est très négociable", "peut être ignoré", "concerne seulement l'esthétique"],
              answer: 0,
              why: "F0 signifie flexibilité nulle : le niveau est impératif, comme pour la sécurité.",
            },
          ],
          trap: "Écrire des niveaux vagues (« pas trop lourd », « assez solide ») : sans valeur chiffrée ni unité, on ne pourra jamais vérifier si le prototype respecte le cahier des charges.",
          method: "Pour rédiger une fonction contrainte, complétez toujours la même phrase : « Critère : je mesure... ; Niveau : au moins ou au plus [nombre] [unité] ; Flexibilité : F0 à F3 ». Si vous ne pouvez pas la mesurer, reformulez-la.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'croquis-modelisation',
          title: 'Du croquis à la modélisation 3D',
          minutes: 35,
          objectives: [
            "Exprimer une idée de solution par un croquis à main levée annoté.",
            "Lire un dessin coté et utiliser une échelle pour passer des dimensions réelles au dessin.",
            "Modéliser une pièce simple en 3D : esquisse, cotation, extrusion, enlèvement de matière.",
            "Choisir le format de fichier adapté au moyen de fabrication.",
          ],
          course: [
            {
              heading: "Le croquis : chercher et partager une idée",
              paragraphs: [
                "Le croquis est un dessin rapide, fait à main levée, sans règle. Il sert à chercher des idées et à les montrer aux autres membres de l'équipe. Il n'a pas besoin d'être exact ni beau : il doit être compréhensible.",
                "Un bon croquis est annoté : des flèches et quelques mots indiquent les matériaux, les mouvements, les dimensions principales ou le rôle de chaque partie (« plaque en contreplaqué », « pivote ici »). On dessine souvent plusieurs croquis pour comparer plusieurs solutions avant d'en choisir une.",
                "Le croquis se distingue du schéma, qui représente le fonctionnement avec des symboles (un schéma électrique, par exemple), et du dessin technique, tracé avec précision et coté, qui sert à fabriquer.",
              ],
              box: { label: "Définition", text: "Croquis : dessin rapide à main levée, annoté, pour chercher et communiquer une idée. Schéma : représentation simplifiée du fonctionnement avec des symboles. Dessin technique : dessin précis et coté qui sert à fabriquer." },
            },
            {
              heading: "Le dessin coté et l'échelle",
              paragraphs: [
                "Un objet est souvent représenté par plusieurs vues : la vue de face, la vue de dessus et la vue de gauche. Chaque vue montre l'objet regardé d'un seul côté. Les cotes indiquent les dimensions de l'objet, en millimètres, avec des lignes terminées par des flèches.",
                "L'échelle indique le rapport entre la dimension sur le dessin et la dimension réelle. À l'échelle 1:1 (on lit « un pour un »), le dessin a la taille réelle. À l'échelle 1:2, le dessin est deux fois plus petit que l'objet : 1 mm sur le dessin représente 2 mm en réalité. À l'échelle 2:1, le dessin est deux fois plus grand, ce qui sert pour les petites pièces.",
                "Attention : quelle que soit l'échelle, les cotes indiquent toujours les dimensions réelles de l'objet. Une pièce de 80 mm dessinée à l'échelle 1:2 mesure 40 mm sur le papier, mais sa cote indique 80.",
              ],
              box: { label: "Formule", text: "Échelle = dimension sur le dessin ÷ dimension réelle (mêmes unités). À l'échelle 1:2, dimension sur le dessin = dimension réelle ÷ 2. Les cotes indiquent toujours la dimension réelle." },
            },
            {
              heading: "La modélisation 3D : de l'esquisse au volume",
              paragraphs: [
                "Un logiciel de modélisation 3D (on dit aussi modeleur volumique, ou logiciel de CAO, conception assistée par ordinateur) permet de construire une maquette numérique de la pièce. Au collège, on utilise par exemple Tinkercad, FreeCAD ou SketchUp.",
                "On commence par une esquisse : un dessin en deux dimensions tracé sur un plan (un rectangle, un cercle). On la cote avec les dimensions réelles. Puis on la transforme en volume : l'extrusion donne une épaisseur à l'esquisse (un rectangle extrudé de 3 mm devient une plaque). La révolution fait tourner un profil autour d'un axe pour obtenir une pièce ronde, comme un gobelet.",
                "On ajoute ensuite des détails : un enlèvement de matière pour faire un trou ou une poche, un congé pour arrondir une arête, un chanfrein pour la couper en biseau. Plusieurs pièces peuvent enfin être réunies dans un assemblage, pour vérifier qu'elles s'emboîtent.",
              ],
              box: { label: "À retenir", text: "Esquisse 2D cotée, puis volume par extrusion (donner une épaisseur) ou par révolution (tourner autour d'un axe), puis enlèvement de matière (trou, poche), congés et chanfreins, assemblage." },
            },
            {
              heading: "De la maquette numérique à la fabrication",
              paragraphs: [
                "La maquette numérique a de nombreux avantages : on la modifie en quelques clics, on la regarde sous tous les angles, on vérifie que les pièces s'assemblent, on calcule son volume et sa masse, et l'on peut parfois simuler sa résistance, avant de fabriquer quoi que ce soit.",
                "Pour fabriquer, on exporte le fichier dans le format attendu par la machine. Pour l'impression 3D, on exporte la pièce au format STL ; un logiciel de tranchage la découpe ensuite en fines couches et prépare les instructions de l'imprimante. Pour la découpe laser, on fournit un dessin en deux dimensions, souvent au format SVG ou DXF, qui donne le contour à découper.",
              ],
              box: { label: "Repère", text: "Impression 3D : fichier STL, puis logiciel de tranchage. Découpe laser : dessin 2D au format SVG ou DXF." },
            },
          ],
          keyPoints: [
            "Croquis : à main levée, annoté, pour chercher et partager une idée.",
            "Dessin technique : précis, avec des vues (face, dessus, gauche) et des cotes en millimètres.",
            "Échelle 1:2 : dessin deux fois plus petit ; 2:1 : deux fois plus grand ; les cotes restent réelles.",
            "Modélisation 3D : esquisse cotée, extrusion ou révolution, enlèvement de matière.",
            "Impression 3D : format STL et logiciel de tranchage ; découpe laser : dessin 2D en SVG ou DXF.",
          ],
          example: {
            statement: "On veut modéliser un porte-crayon en forme de cylindre : diamètre extérieur 70 mm, hauteur 100 mm, creusé par un trou cylindrique de diamètre 60 mm sur 95 mm de profondeur. Décrire les étapes de la modélisation, puis calculer l'épaisseur de la paroi et celle du fond.",
            solution: [
              "Étape 1 : sur le plan horizontal, tracer l'esquisse d'un cercle et le coter : diamètre 70 mm.",
              "Étape 2 : extruder ce cercle de 100 mm : on obtient un cylindre plein.",
              "Étape 3 : sur la face du dessus, tracer un cercle de diamètre 60 mm, centré, puis faire un enlèvement de matière de 95 mm de profondeur.",
              "Épaisseur de la paroi : (70 - 60) ÷ 2 = 10 ÷ 2 = 5 mm (la différence des diamètres se répartit des deux côtés).",
              "Épaisseur du fond : 100 - 95 = 5 mm.",
              "Étape 4 : exporter la pièce au format STL pour l'imprimer en 3D.",
              "Réponse : cercle de 70 mm extrudé de 100 mm, puis enlèvement d'un cercle de 60 mm sur 95 mm ; paroi et fond de 5 mm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Une pièce mesure 80 mm. Quelle longueur a-t-elle sur un dessin à l'échelle 1:2 ? b) Une vis mesure 15 mm. Quelle longueur a-t-elle sur un dessin à l'échelle 2:1 ? c) Sur un dessin à l'échelle 1:5, une étagère mesure 60 mm. Quelle est sa longueur réelle ? d) Sur le dessin de la question a), quel nombre est écrit sur la cote de la pièce ?",
              hint: "À l'échelle 1:2, on divise la dimension réelle par 2 ; à l'échelle 2:1, on la multiplie par 2. Pour retrouver la dimension réelle à partir du dessin, on fait l'opération inverse.",
              solution: [
                "a) Échelle 1:2 : 80 ÷ 2 = 40 mm sur le dessin.",
                "b) Échelle 2:1 : 15 × 2 = 30 mm sur le dessin.",
                "c) Échelle 1:5 : 1 mm sur le dessin représente 5 mm en réalité, donc 60 × 5 = 300 mm, soit 30 cm.",
                "d) La cote indique la dimension réelle : 80 (en millimètres), même si le trait mesure 40 mm.",
                "Résultat : 40 mm ; 30 mm ; 300 mm ; la cote indique 80.",
              ],
            },
            {
              level: 2,
              statement: "On veut modéliser un porte-clés : une plaque rectangulaire de 50 mm sur 20 mm, épaisse de 3 mm, percée d'un trou de diamètre 5 mm pour l'anneau. Le centre du trou est à 5 mm du petit côté de la plaque. a) Écrire dans l'ordre les étapes de la modélisation, en nommant les fonctions du logiciel. b) Calculer la largeur de matière qui reste entre le bord du trou et le petit côté de la plaque. c) Calculer le volume de la plaque avant le perçage, en mm³ puis en cm³.",
              hint: "Le rayon d'un cercle est la moitié de son diamètre. Le volume d'un pavé droit est longueur × largeur × hauteur, et 1 cm³ = 1 000 mm³.",
              solution: [
                "a) 1. Tracer l'esquisse d'un rectangle et le coter : 50 mm × 20 mm. 2. Extruder le rectangle de 3 mm pour obtenir la plaque. 3. Sur la face de la plaque, tracer un cercle de diamètre 5 mm dont le centre est à 5 mm du petit côté. 4. Faire un enlèvement de matière à travers toute l'épaisseur pour percer le trou. 5. Exporter au format STL.",
                "b) Le rayon du trou est 5 ÷ 2 = 2,5 mm. Entre le bord du trou et le petit côté, il reste 5 - 2,5 = 2,5 mm de matière.",
                "c) Volume = 50 × 20 × 3 = 3 000 mm³. Comme 1 cm³ = 1 000 mm³, cela fait 3 000 ÷ 1 000 = 3 cm³.",
                "Résultat : esquisse, extrusion, esquisse du trou, enlèvement de matière, export ; 2,5 mm de matière autour du trou ; 3 000 mm³ = 3 cm³.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un support de téléphone est modélisé comme une plaque pleine de 60 mm × 40 mm × 4 mm. On l'imprime en 3D en plastique PLA. On prendra pour le PLA une masse volumique de 1,24 g/cm³, et un prix du filament de 25 € le kilogramme. On suppose la pièce imprimée entièrement pleine. a) Calculer le volume de la pièce en cm³. b) Calculer sa masse, arrondie au dixième de gramme. c) Calculer le coût de la matière, arrondi au centime. d) On veut dessiner la plaque à l'échelle 1:2 : quelles sont ses dimensions sur le papier ?",
              hint: "Masse = volume × masse volumique (en cm³ et en g/cm³). 25 € le kilogramme, c'est 25 € pour 1 000 g : calculez d'abord le prix d'un gramme.",
              solution: [
                "a) Volume = 60 × 40 × 4 = 9 600 mm³ = 9 600 ÷ 1 000 = 9,6 cm³.",
                "b) Masse = 9,6 × 1,24 = 11,904 g, soit environ 11,9 g.",
                "c) Prix d'un gramme : 25 ÷ 1 000 = 0,025 €. Coût : 11,904 × 0,025 = 0,2976 €, soit environ 0,30 €.",
                "d) À l'échelle 1:2, on divise chaque dimension par 2 : 30 mm × 20 mm sur le papier (l'épaisseur de 4 mm, vue de côté, mesurerait 2 mm). Les cotes indiquent toujours 60, 40 et 4.",
                "Résultat : 9,6 cm³ ; environ 11,9 g ; environ 0,30 € de matière ; 30 mm × 20 mm sur le dessin à l'échelle 1:2.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour passer d'une idée de porte-clés à son impression 3D.",
            items: [
              "Dessiner un croquis annoté à main levée",
              "Tracer l'esquisse 2D de la plaque dans le logiciel",
              "Coter l'esquisse avec les dimensions réelles",
              "Extruder l'esquisse pour obtenir un volume",
              "Enlever de la matière pour percer le trou",
              "Exporter la pièce au format STL",
              "Préparer l'impression avec le logiciel de tranchage",
            ],
          },
          quiz: [
            {
              q: "Quelle est la principale qualité d'un croquis ?",
              options: ["Être tracé à la règle", "Être coté au millimètre", "Être imprimé en 3D", "Être rapide et compréhensible"],
              answer: 3,
              why: "Le croquis sert à chercher et partager une idée : il se fait à main levée, vite, avec des annotations.",
            },
            {
              q: "À l'échelle 1:2, une pièce de 120 mm mesure sur le dessin :",
              options: ["60 mm", "240 mm", "120 mm", "122 mm"],
              answer: 0,
              why: "À l'échelle 1:2, le dessin est deux fois plus petit : 120 ÷ 2 = 60 mm.",
            },
            {
              q: "Quelle fonction transforme un rectangle en plaque épaisse ?",
              options: ["Le chanfrein", "L'assemblage", "L'extrusion", "Le croquis"],
              answer: 2,
              why: "L'extrusion donne une épaisseur à une esquisse en deux dimensions.",
            },
            {
              q: "Sur un dessin à l'échelle 1:5, que lit-on sur la cote d'une pièce de 200 mm ?",
              options: ["40", "1 000", "5", "200"],
              answer: 3,
              why: "Les cotes indiquent toujours la dimension réelle, quelle que soit l'échelle du dessin.",
            },
            {
              q: "Quel format de fichier envoie-t-on vers une imprimante 3D, via le logiciel de tranchage ?",
              options: ["Le format MP3", "Le format STL", "Le format JPEG", "Le format PDF"],
              answer: 1,
              why: "Le format STL décrit la surface de la pièce en 3D ; le logiciel de tranchage le découpe en couches pour l'imprimante.",
            },
          ],
          trap: "Écrire sur les cotes les longueurs mesurées sur le dessin au lieu des dimensions réelles : à l'échelle 1:2, une pièce de 80 mm se dessine sur 40 mm, mais sa cote reste 80.",
          method: "Avant de modéliser, faites un croquis coté à main levée de la pièce, puis listez les étapes dans l'ordre (esquisse, extrusion, enlèvement de matière). Après chaque étape dans le logiciel, mesurez la pièce avec l'outil de mesure pour vérifier les dimensions.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'prototype',
          title: 'Réaliser et tester un prototype',
          minutes: 30,
          objectives: [
            "Distinguer une maquette et un prototype.",
            "Choisir un procédé de fabrication adapté à la pièce, au matériau et au temps disponible.",
            "Réaliser une pièce en suivant une procédure et en respectant les règles de sécurité.",
            "Tester un prototype, comparer les résultats au cahier des charges et proposer des améliorations.",
          ],
          course: [
            {
              heading: "Maquette ou prototype ?",
              paragraphs: [
                "Une maquette est une représentation de l'objet, souvent à échelle réduite et dans un matériau simple (carton, polystyrène), ou bien à l'écran sous forme de maquette numérique. Elle sert à juger la forme, l'aspect ou l'encombrement, mais elle ne fonctionne pas forcément.",
                "Un prototype est un premier exemplaire qui fonctionne, généralement à taille réelle, fabriqué pour être testé avant la production. Il permet de vérifier que la solution respecte le cahier des charges et de repérer les défauts quand ils coûtent encore peu à corriger.",
              ],
              box: { label: "Définition", text: "Maquette : représentation de l'objet (réduite, simplifiée ou numérique) pour juger sa forme. Prototype : premier exemplaire fonctionnel, en général à taille réelle, fabriqué pour être testé." },
            },
            {
              heading: "Choisir un procédé de fabrication",
              paragraphs: [
                "L'impression 3D est un procédé par ajout de matière (on dit aussi fabrication additive) : au collège, une buse chauffée fait fondre un fil de plastique, souvent du PLA, et le dépose couche par couche. Elle permet des formes complexes, mais elle est lente : une petite pièce demande souvent plus d'une heure.",
                "La découpe laser est un procédé par enlèvement de matière : un faisceau laser découpe ou grave une plaque plate (contreplaqué, carton, plaque de PMMA, un plastique transparent). Elle est rapide et précise pour des pièces planes, que l'on assemble ensuite par encoches ou par collage. Le perçage et le sciage enlèvent aussi de la matière.",
                "Certains procédés déforment la matière sans en ajouter ni en enlever : le pliage à chaud d'une plaque de plastique le long d'une ligne, ou le thermoformage, où une feuille de plastique chauffée et ramollie est plaquée sur un moule par aspiration. On choisit le procédé selon la forme de la pièce, le matériau, le nombre de pièces, le temps et le coût.",
              ],
              box: { label: "Repère", text: "Ajout de matière : impression 3D (formes complexes, lente). Enlèvement de matière : découpe laser, perçage, sciage (pièces planes, rapide). Déformation : pliage à chaud, thermoformage (coques, formes courbes)." },
            },
            {
              heading: "Fabriquer en sécurité",
              paragraphs: [
                "On fabrique en suivant une procédure (ou gamme de fabrication) : la liste ordonnée des opérations, avec pour chacune la machine, l'outil et les réglages. Elle permet de répartir le travail dans l'équipe et d'obtenir des pièces identiques.",
                "Les règles de sécurité sont impératives : utiliser une machine seulement avec l'autorisation du professeur, porter les lunettes de protection quand c'est demandé, attacher les cheveux longs, ne jamais toucher la buse ni le plateau d'une imprimante 3D en marche (la buse dépasse souvent 200 °C), ne jamais laisser une découpeuse laser sans surveillance (risque d'incendie), et ne jamais y découper de PVC, qui dégage des fumées toxiques.",
              ],
              box: { label: "Règle", text: "Autorisation du professeur, lunettes de protection, cheveux attachés, pas de contact avec les parties chaudes, surveillance permanente de la découpeuse laser, aucun matériau interdit (PVC). Ranger et nettoyer le poste à la fin." },
            },
            {
              heading: "Tester, comparer, améliorer",
              paragraphs: [
                "Tester un prototype, c'est vérifier, critère par critère, qu'il respecte le cahier des charges. Pour chaque critère, on prépare un protocole de test : ce que l'on mesure, avec quel instrument (règle, balance, rapporteur, chronomètre), dans quelles conditions, et quel niveau doit être atteint.",
                "Les résultats se notent dans un tableau de validation : critère, niveau attendu, valeur mesurée, conforme ou non conforme. Si un critère n'est pas respecté, on cherche la cause, on propose une amélioration, on modifie la maquette numérique et l'on teste à nouveau. Ces allers-retours sont normaux : chaque version du prototype est meilleure que la précédente.",
              ],
              box: { label: "À retenir", text: "Protocole de test : quoi mesurer, avec quel instrument, dans quelles conditions, quel niveau attendu. Tableau de validation : niveau attendu, valeur mesurée, conforme ou non. Non conforme : chercher la cause, améliorer, retester." },
            },
          ],
          keyPoints: [
            "Maquette : représentation pour juger la forme ; prototype : premier exemplaire qui fonctionne, pour tester.",
            "Ajout de matière : impression 3D. Enlèvement : découpe laser, perçage. Déformation : pliage, thermoformage.",
            "On choisit le procédé selon la forme, le matériau, le nombre de pièces, le temps et le coût.",
            "Sécurité : autorisation, lunettes, cheveux attachés, pas de contact avec les parties chaudes, jamais de PVC au laser.",
            "On teste critère par critère, avec un protocole, et l'on note les résultats dans un tableau de validation.",
            "Un critère non conforme conduit à une amélioration et à un nouveau test.",
          ],
          example: {
            statement: "Un prototype de support de téléphone est testé (données fictives). Cahier des charges : angle d'inclinaison de 60° à 5° près ; ne pas basculer avec un téléphone de 250 g ; coût de matière au plus 1 € ; durée d'impression au plus 2 h. Mesures : angle 63° ; le support bascule dès 230 g ; coût 0,30 € ; durée 1 h 40 min. Remplir le tableau de validation, conclure et proposer une amélioration.",
            solution: [
              "Angle : le niveau va de 55° à 65° ; 63° est dans l'intervalle : conforme.",
              "Stabilité : le support bascule à 230 g, avant 250 g : non conforme.",
              "Coût : 0,30 € ≤ 1 € : conforme.",
              "Durée : 1 h 40 min ≤ 2 h : conforme.",
              "Conclusion : 3 critères sur 4 sont respectés ; le prototype n'est pas encore validé à cause de la stabilité.",
              "Amélioration : élargir la base vers l'arrière pour que le téléphone ne fasse plus basculer le support, modifier la maquette numérique, imprimer une nouvelle version et refaire tous les tests.",
              "Réponse : prototype non validé (stabilité insuffisante) ; on élargit la base et l'on teste à nouveau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Maquette ou prototype ? a) Une abribus en carton à l'échelle 1:10, pour montrer son allure au conseil municipal. b) Le premier exemplaire d'un arrosage automatique de plantes, testé pendant une semaine en classe. c) Le modèle 3D d'un boîtier, regardé sous tous les angles à l'écran. d) Une lampe de vélo en taille réelle, qui fonctionne, testée sur la route avant d'être fabriquée en série.",
              hint: "Demandez-vous si l'objet fonctionne et s'il est fabriqué pour être testé, ou s'il sert seulement à montrer la forme.",
              solution: [
                "a) Réduite, en carton, pour montrer l'allure : maquette.",
                "b) Premier exemplaire qui fonctionne, testé : prototype.",
                "c) Représentation à l'écran pour juger la forme : maquette numérique.",
                "d) Taille réelle, fonctionne, testée avant la production : prototype.",
                "Résultat : a et c sont des maquettes ; b et d sont des prototypes.",
              ],
            },
            {
              level: 2,
              statement: "Proposer un procédé de fabrication pour chaque pièce et justifier : a) les côtés plats d'une boîte en contreplaqué, assemblés par encoches ; b) une petite pièce creuse et de forme complexe qui clipse un capteur sur un robot ; c) une coque transparente arrondie, en forme de bulle, pour protéger une lampe ; d) un pupitre obtenu à partir d'une plaque de plastique plate, pliée selon une ligne droite.",
              hint: "Pour chaque pièce, regardez sa forme (plane, complexe, courbe, pliée) et son matériau, puis associez-la à un procédé : ajout de matière, enlèvement de matière ou déformation.",
              solution: [
                "a) Pièces planes dans une plaque de contreplaqué : découpe laser, rapide et précise, qui peut aussi découper les encoches.",
                "b) Forme complexe et creuse, petite pièce : impression 3D, qui construit la pièce couche par couche.",
                "c) Coque fine, courbe et transparente : thermoformage d'une feuille de plastique chauffée sur un moule.",
                "d) Plaque plate pliée le long d'une ligne : pliage à chaud.",
                "Résultat : découpe laser, impression 3D, thermoformage, pliage à chaud.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). La classe doit fabriquer 24 supports de téléphone. Contraintes : au plus 4 heures de fonctionnement de machine au total, et un budget matière de 15 € au plus. Solution 1 : impression 3D, 1 h 40 min et 0,30 € de matière par support. Solution 2 : découpe laser dans du contreplaqué, 8 min et 0,45 € de matière par support. On dispose d'une seule machine de chaque sorte. a) Calculer la durée totale et le coût total de chaque solution. b) Quelle solution respecte les deux contraintes ? c) Le prototype en contreplaqué est testé : il bascule avec un téléphone de 200 g alors que le cahier des charges demande 250 g. Proposer deux améliorations.",
              hint: "Convertissez 1 h 40 min en minutes avant de multiplier. Pour comparer à 4 heures, convertissez aussi 4 h en minutes (1 h = 60 min).",
              solution: [
                "a) Solution 1 : 1 h 40 min = 100 min ; 24 × 100 = 2 400 min = 40 h. Coût : 24 × 0,30 = 7,20 €.",
                "Solution 2 : 24 × 8 = 192 min = 3 h 12 min. Coût : 24 × 0,45 = 10,80 €.",
                "b) Limite de temps : 4 h = 240 min. Solution 1 : 2 400 min > 240 min, non conforme, même si son coût (7,20 €) respecte le budget. Solution 2 : 192 min ≤ 240 min et 10,80 € ≤ 15 € : les deux contraintes sont respectées. On choisit la découpe laser.",
                "c) Améliorations possibles : élargir ou allonger la base à l'arrière pour déplacer le point de basculement ; diminuer l'angle d'inclinaison ; ajouter une pièce de renfort ou des patins antidérapants. On modifie le dessin, on découpe une nouvelle version et l'on refait le test avec un téléphone de 250 g.",
                "Résultat : impression 3D, 40 h et 7,20 € ; découpe laser, 3 h 12 min et 10,80 € ; seule la découpe laser respecte les deux contraintes ; on améliore la base et l'on reteste.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : réaliser et tester un prototype.",
            statements: [
              { text: "Un prototype est un premier exemplaire qui fonctionne, fabriqué pour être testé.", true: true, why: "C'est ce qui le distingue d'une maquette, qui sert surtout à juger la forme." },
              { text: "L'impression 3D est un procédé par enlèvement de matière.", true: false, why: "Elle ajoute la matière couche par couche : c'est de la fabrication additive." },
              { text: "On peut découper une plaque de PVC à la découpeuse laser.", true: false, why: "Le PVC dégage des fumées toxiques quand il est découpé au laser : il est interdit." },
              { text: "La découpe laser convient bien aux pièces planes.", true: true, why: "Le laser découpe des plaques plates ; les pièces sont ensuite assemblées." },
              { text: "Si un critère n'est pas conforme, le projet est raté et on abandonne.", true: false, why: "On cherche la cause, on améliore le prototype et l'on teste à nouveau : c'est normal dans un projet." },
              { text: "Un protocole de test précise ce que l'on mesure et avec quel instrument.", true: true, why: "Il indique aussi les conditions du test et le niveau attendu, pour que le test soit reproductible." },
              { text: "On peut laisser une découpeuse laser fonctionner seule pendant la récréation.", true: false, why: "Le laser peut enflammer le matériau : la machine doit toujours rester sous surveillance." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence entre une maquette et un prototype ?",
              options: ["Le prototype fonctionne et sert à tester", "La maquette est toujours plus grande", "Il n'y a aucune différence entre les deux", "Le prototype est toujours en carton"],
              answer: 0,
              why: "La maquette représente l'objet pour juger sa forme ; le prototype est un premier exemplaire fonctionnel que l'on teste.",
            },
            {
              q: "Quel procédé ajoute la matière couche par couche ?",
              options: ["La découpe laser", "Le pliage à chaud", "L'impression 3D", "Le perçage"],
              answer: 2,
              why: "L'impression 3D est un procédé de fabrication additive : la pièce est construite couche par couche.",
            },
            {
              q: "Pour fabriquer vite 30 pièces planes en contreplaqué, on choisit plutôt :",
              options: ["le thermoformage", "l'impression 3D", "le pliage à chaud", "la découpe laser"],
              answer: 3,
              why: "La découpe laser est rapide et précise pour des pièces planes découpées dans une plaque.",
            },
            {
              q: "Le niveau demandé est « 60° à 5° près » et l'on mesure 67°. Le critère est :",
              options: ["conforme", "à moitié conforme", "non conforme", "impossible à vérifier"],
              answer: 2,
              why: "L'angle doit être compris entre 55° et 65° ; 67° est en dehors de cet intervalle.",
            },
            {
              q: "Quelle règle de sécurité s'applique à l'imprimante 3D en marche ?",
              options: ["Ne pas toucher la buse ni le plateau", "Ouvrir la machine pour regarder la buse", "Retirer la pièce pendant l'impression", "Couper le courant toutes les cinq minutes"],
              answer: 0,
              why: "La buse dépasse souvent 200 °C : la toucher provoque une brûlure. On attend la fin de l'impression et le refroidissement.",
            },
          ],
          trap: "Conclure qu'un prototype est réussi parce qu'il « a l'air de marcher », sans mesurer chaque critère du cahier des charges : un seul critère non vérifié peut cacher un défaut.",
          method: "Avant de tester, préparez votre tableau de validation avec une ligne par critère (niveau attendu, instrument, valeur mesurée, conforme ou non). Remplissez-le pendant le test, puis écrivez une conclusion d'une phrase et une amélioration pour chaque ligne non conforme.",
        },
      ],
    },
  ],
}
