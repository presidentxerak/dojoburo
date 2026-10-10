import type { UnitContent } from '../types'

// Notation du code dans les leçons : les chaînes tiennent sur une seule ligne,
// le code Python est donc écrit ligne par ligne dans le texte (« ligne 1 : ... ;
// ligne 2, dans la boucle : ... »), avec l'indentation indiquée en toutes lettres.

export const CONTENT: UnitContent = {
  unit: 'nsi-tle',
  chapters: [
    /* ==================================================================== */
    /* ARCHITECTURES, SYSTÈMES D'EXPLOITATION ET RÉSEAUX                      */
    /* ==================================================================== */
    {
      id: 'architectures-reseaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'systeme-sur-puce',
          title: 'Les composants d\'un système sur puce',
          minutes: 25,
          objectives: [
            "Identifier les principaux composants d'un système sur puce sur un schéma de circuit.",
            "Expliquer les avantages de l'intégration des composants en termes de vitesse et de consommation.",
            "Distinguer un ordinateur à composants séparés, un microcontrôleur et un système sur puce.",
            "Citer les limites de l'intégration sur une seule puce.",
          ],
          course: [
            {
              heading: "De l'architecture de von Neumann au système sur puce",
              paragraphs: [
                "Tout ordinateur reprend l'architecture décrite par John von Neumann en 1945 : un processeur (unité arithmétique et logique, unité de commande et registres), une mémoire qui contient à la fois les programmes et les données, des entrées-sorties, et des bus qui relient ces éléments. Dans un ordinateur de bureau, ces fonctions sont réparties sur plusieurs circuits distincts posés sur une carte mère : le processeur, les barrettes de mémoire vive, la carte graphique, la carte réseau, etc.",
                "Un système sur puce (en anglais System on Chip, SoC) rassemble sur un seul circuit intégré, c'est-à-dire sur une seule puce de silicium, la plupart des composants d'un ordinateur complet. On le trouve dans les smartphones, les tablettes, les consoles portables, les objets connectés, les nano-ordinateurs comme le Raspberry Pi et, depuis 2020, dans certains ordinateurs portables (par exemple les puces Apple M1 et suivantes).",
                "Il ne faut pas le confondre avec le microcontrôleur, plus ancien et plus modeste : un microcontrôleur réunit aussi sur une puce un processeur, un peu de mémoire vive, de la mémoire flash et des entrées-sorties, mais il est conçu pour une tâche précise (piloter un lave-linge, une carte Arduino, un capteur). Un système sur puce est bien plus puissant : il fait fonctionner un système d'exploitation complet comme Android, iOS ou Linux.",
              ],
              box: { label: "Définition", text: "Un système sur puce (SoC) est un circuit intégré unique qui rassemble les principaux composants d'un ordinateur : processeur, processeur graphique, mémoires, contrôleurs d'entrées-sorties, interfaces de communication et gestion de l'énergie." },
            },
            {
              heading: "Les composants d'un système sur puce",
              paragraphs: [
                "Le circuit d'un smartphone est l'exemple type. On y trouve d'abord le processeur central (CPU), formé de plusieurs cœurs, souvent de deux sortes : des cœurs performants pour les tâches lourdes et des cœurs économes pour les tâches légères. Il exécute les instructions des programmes. À côté, le processeur graphique (GPU) réalise en parallèle les très nombreux calculs simples nécessaires à l'affichage, à la 3D et à la vidéo.",
                "Viennent ensuite des accélérateurs spécialisés : un processeur de signal pour le son, un processeur d'image (ISP) qui traite les données du capteur photo, et souvent un accélérateur pour l'intelligence artificielle (NPU), optimisé pour les calculs des réseaux de neurones. Les mémoires locales sont présentes sous forme de mémoires caches (niveaux L1, L2, L3) ; la mémoire vive principale est en général placée dans le même boîtier, empilée sur la puce ou à côté, et reliée par un contrôleur mémoire intégré.",
                "Enfin, le système sur puce contient les interfaces de communication : interfaces radio (modem 4G ou 5G, Wi-Fi, Bluetooth, géolocalisation par satellite) et interfaces filaires (USB, contrôleurs d'écran et de caméra), un circuit de gestion de l'énergie qui règle la tension et la fréquence de chaque bloc, et un réseau sur puce (ou bus d'interconnexion) qui fait circuler les données entre tous ces blocs.",
              ],
              box: { label: "À retenir", text: "Composants typiques : CPU multicœur, GPU, NPU, processeurs de signal et d'image, mémoires caches, contrôleur mémoire, modem et interfaces radio, interfaces filaires, gestion de l'énergie, réseau sur puce. L'écran, la batterie, les antennes et les capteurs restent hors de la puce." },
            },
            {
              heading: "Pourquoi intégrer : vitesse et consommation",
              paragraphs: [
                "Le premier avantage est la vitesse. Un signal électrique se propage dans un conducteur à une vitesse de l'ordre de 2 × 10⁸ m/s. À 3 GHz, un cycle d'horloge dure 1 ÷ (3 × 10⁹) ≈ 0,33 ns : pendant ce temps, le signal ne parcourt qu'environ 6,7 cm. Sur une carte mère, un aller-retour entre le processeur et la mémoire prend donc plusieurs cycles ; sur une puce, les distances se mesurent en millimètres et les échanges sont bien plus rapides. Les bus internes peuvent aussi être beaucoup plus larges.",
                "Le second avantage est la consommation. Faire circuler un signal demande de charger et décharger électriquement les conducteurs : plus ils sont longs, plus il faut d'énergie. En réduisant les distances et en supprimant les circuits d'interface entre puces séparées, on consomme moins et on chauffe moins. Le circuit de gestion de l'énergie peut en plus éteindre ou ralentir les blocs inutilisés. C'est décisif pour un appareil sur batterie qui ne peut pas avoir de ventilateur.",
                "S'y ajoutent un faible encombrement (tout tient sur quelques centimètres carrés), un poids réduit et un coût unitaire faible quand la puce est produite en très grande série. Cette intégration a été rendue possible par la miniaturisation des transistors, décrite par la loi de Moore : en 1965, Gordon Moore observe que le nombre de transistors par puce double à intervalle régulier, rythme qu'il ramène en 1975 à environ deux ans. Les systèmes sur puce récents comptent plus de dix milliards de transistors.",
              ],
              box: { label: "Propriété", text: "Rapprocher les composants raccourcit les connexions : les signaux arrivent plus vite (moins de cycles perdus, bus plus larges) et coûtent moins d'énergie (moins de chaleur, plus d'autonomie)." },
            },
            {
              heading: "Les limites de l'intégration",
              paragraphs: [
                "L'intégration a un prix. On ne peut ni remplacer ni améliorer un seul composant : pour plus de mémoire ou un meilleur processeur graphique, il faut changer tout le circuit, souvent tout l'appareil. Une panne d'un bloc rend la puce entière inutilisable. La chaleur est concentrée sur une très petite surface : quand la température monte trop, le système baisse la fréquence des cœurs pour se protéger, ce qui réduit les performances.",
                "Enfin, la conception et la fabrication d'un système sur puce coûtent extrêmement cher (études, masques de gravure, usines) : ce choix n'est rentable que pour des produits vendus à des millions d'exemplaires. Un ordinateur de bureau, où l'on veut pouvoir faire évoluer chaque pièce, garde donc souvent des composants séparés. Le choix dépend de l'usage : mobilité et autonomie d'un côté, évolutivité et réparabilité de l'autre.",
              ],
            },
          ],
          keyPoints: [
            "Un système sur puce (SoC) intègre sur un seul circuit la plupart des composants d'un ordinateur.",
            "Composants : CPU multicœur, GPU, NPU, processeurs de signal et d'image, caches, contrôleur mémoire, modem et radios, interfaces filaires, gestion de l'énergie, réseau sur puce.",
            "Un microcontrôleur est plus simple et dédié à une tâche ; un SoC fait tourner un système d'exploitation complet.",
            "Avantages : vitesse (distances courtes, bus larges), faible consommation et faible chaleur, encombrement réduit, coût bas en grande série.",
            "Limites : pas d'évolution ni de réparation d'un composant isolé, chaleur concentrée, conception très coûteuse.",
            "À 3 GHz, un signal ne parcourt qu'environ 6,7 cm pendant un cycle : la distance compte.",
          ],
          example: {
            statement: "Le schéma du système sur puce d'un smartphone comporte les blocs suivants : CPU à 8 cœurs, GPU, NPU, ISP, modem 5G, contrôleur mémoire, cache L3 partagé et réseau sur puce. Pour chaque usage, indiquez le bloc le plus sollicité : a) prendre une photo ; b) jouer à un jeu en 3D ; c) passer un appel en 5G ; d) déverrouiller le téléphone par reconnaissance faciale. Expliquez ensuite pourquoi tous ces usages passent par le réseau sur puce.",
            solution: [
              "a) La photo : le capteur, hors de la puce, envoie des données brutes que l'ISP (processeur d'image) traite (couleurs, bruit, netteté).",
              "b) Le jeu en 3D : le GPU calcule l'image, car l'affichage demande un très grand nombre de calculs simples réalisés en parallèle.",
              "c) L'appel en 5G : le modem 5G gère la communication radio avec l'antenne relais, l'antenne elle-même restant hors de la puce.",
              "d) La reconnaissance faciale : le NPU exécute le réseau de neurones qui compare le visage au modèle enregistré, avec l'aide de l'ISP pour l'image.",
              "Dans tous les cas, le CPU coordonne le travail et les données circulent entre les blocs et la mémoire par le réseau sur puce, qui relie tous les composants internes.",
              "Réponse : ISP, GPU, modem 5G, NPU ; le réseau sur puce est le chemin commun de toutes les données à l'intérieur du circuit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les éléments suivants d'un smartphone, indiquez ceux qui sont intégrés au système sur puce et ceux qui restent à l'extérieur : batterie, cœurs du processeur, processeur graphique, écran tactile, modem 4G, antenne, mémoire cache, capteur photo, contrôleur USB.",
              hint: "Un élément qui doit être en contact avec le monde physique (lumière, ondes, toucher, stockage d'énergie) reste en général hors de la puce ; son circuit de commande, lui, est intégré.",
              solution: [
                "Intégrés au SoC : les cœurs du processeur, le processeur graphique, le modem 4G, la mémoire cache et le contrôleur USB. Ce sont des circuits de calcul ou de commande.",
                "Hors du SoC : la batterie (stockage d'énergie), l'écran tactile (affichage et toucher), l'antenne (émission et réception des ondes) et le capteur photo (réception de la lumière).",
                "Ces éléments extérieurs sont reliés à la puce par des contrôleurs intégrés : contrôleur d'écran, ISP pour le capteur, modem pour l'antenne, circuit de gestion de l'énergie pour la batterie.",
                "Résultat : 5 éléments intégrés, 4 éléments extérieurs.",
              ],
            },
            {
              level: 2,
              statement: "On admet qu'un signal électrique se propage à 2 × 10⁸ m/s. Sur une carte mère, le processeur est à 8 cm de la mémoire ; dans un système sur puce, la mémoire est à 8 mm du processeur. L'horloge du processeur est à 2,5 GHz. a) Calculez la durée d'un cycle d'horloge. b) Calculez la durée d'un aller-retour du signal dans chaque cas. c) Exprimez ces durées en nombre de cycles et concluez.",
              hint: "Durée d'un cycle = 1 ÷ fréquence ; durée de trajet = distance ÷ vitesse, à doubler pour un aller-retour. Convertissez les distances en mètres.",
              solution: [
                "a) Durée d'un cycle : 1 ÷ (2,5 × 10⁹) = 4 × 10⁻¹⁰ s = 0,4 ns.",
                "b) Carte mère : aller simple 0,08 ÷ (2 × 10⁸) = 4 × 10⁻¹⁰ s = 0,4 ns, donc aller-retour 0,8 ns. Système sur puce : aller simple 0,008 ÷ (2 × 10⁸) = 4 × 10⁻¹¹ s = 0,04 ns, donc aller-retour 0,08 ns.",
                "c) Carte mère : 0,8 ÷ 0,4 = 2 cycles rien que pour la propagation. Système sur puce : 0,08 ÷ 0,4 = 0,2 cycle.",
                "Conclusion : diviser la distance par 10 divise le temps de propagation par 10 ; dans le système sur puce, l'aller-retour tient dans une fraction de cycle, alors que sur la carte mère il fait perdre au moins 2 cycles à chaque accès.",
              ],
            },
            {
              level: 3,
              statement: "Un fabricant hésite, pour une tablette, entre un système sur puce et une architecture à composants séparés. La batterie stocke 15,4 Wh. On suppose qu'en jeu, le système sur puce consomme en moyenne 2 W, et que la version à composants séparés consommerait 50 % de plus. a) Définissez un système sur puce. b) Calculez l'autonomie en jeu dans les deux cas (en heures et minutes). c) Donnez deux autres avantages et deux inconvénients du système sur puce. d) Justifiez le choix que devrait faire le fabricant.",
              hint: "Autonomie (h) = énergie (Wh) ÷ puissance (W). Pour convertir 0,13 h en minutes, multipliez par 60.",
              solution: [
                "a) Un système sur puce est un circuit intégré unique qui rassemble les principaux composants d'un ordinateur : processeur, processeur graphique, mémoires caches, contrôleurs, interfaces de communication et gestion de l'énergie.",
                "b) Avec le système sur puce : 15,4 ÷ 2 = 7,7 h, soit 7 h 42 min (0,7 × 60 = 42). Avec les composants séparés : la puissance vaut 2 × 1,5 = 3 W, d'où 15,4 ÷ 3 ≈ 5,13 h, soit environ 5 h 08 min (0,133 × 60 ≈ 8).",
                "c) Autres avantages : des échanges plus rapides grâce aux distances courtes, un encombrement et un poids réduits (et moins de chaleur, donc pas de ventilateur). Inconvénients : aucun composant ne peut être remplacé ou amélioré séparément, et la conception coûte très cher, ce qui n'est rentable qu'en très grande série.",
                "d) Une tablette est un appareil mobile, fin, sans ventilateur, produit en grande série : l'autonomie (plus de 2 h 30 gagnées en jeu) et la compacité priment sur l'évolutivité. Le fabricant a intérêt à choisir le système sur puce.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque composant d'un système sur puce à son rôle.",
            pairs: [
              { left: "CPU", right: "Exécute les instructions des programmes" },
              { left: "GPU", right: "Réalise en parallèle les calculs de l'affichage et de la 3D" },
              { left: "NPU", right: "Accélère les calculs des réseaux de neurones" },
              { left: "ISP", right: "Traite les données brutes du capteur photo" },
              { left: "Modem", right: "Gère les communications radio 4G ou 5G" },
              { left: "Réseau sur puce", right: "Transporte les données entre les blocs du circuit" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue un système sur puce d'un ordinateur de bureau classique ?",
              options: ["Il n'utilise pas l'architecture de von Neumann", "Ses composants principaux sont réunis sur un seul circuit intégré", "Il n'a pas de mémoire vive, seulement de la mémoire flash de stockage", "Il ne peut pas exécuter de système d'exploitation"],
              answer: 1,
              why: "Le SoC reprend l'architecture de von Neumann, mais rassemble processeur, GPU, contrôleurs et interfaces sur une seule puce au lieu de circuits séparés sur une carte mère.",
            },
            {
              q: "Lequel de ces éléments reste en dehors du système sur puce d'un smartphone ?",
              options: ["Le contrôleur mémoire", "Le processeur graphique", "Le modem 5G", "La batterie"],
              answer: 3,
              why: "La batterie stocke l'énergie et ne peut pas être gravée dans le silicium ; la puce contient seulement le circuit qui gère l'énergie.",
            },
            {
              q: "Pourquoi l'intégration réduit-elle la consommation électrique ?",
              options: ["Les connexions plus courtes demandent moins d'énergie pour transmettre un signal", "Les transistors d'un système sur puce ne consomment aucune énergie, même en calcul", "Un SoC n'a pas d'horloge", "Le SoC ne contient pas de processeur graphique"],
              answer: 0,
              why: "Charger et décharger des conducteurs longs coûte de l'énergie ; des liaisons de quelques millimètres et l'absence de circuits d'interface entre puces réduisent la consommation et la chaleur.",
            },
            {
              q: "Quelle différence y a-t-il entre un microcontrôleur et un système sur puce ?",
              options: ["Le microcontrôleur n'a aucune mémoire", "Le microcontrôleur est toujours plus rapide, car il possède davantage de cœurs", "Le microcontrôleur est plus simple et dédié à une tâche précise", "Il n'y a aucune différence"],
              answer: 2,
              why: "Les deux réunissent processeur, mémoire et entrées-sorties sur une puce, mais le microcontrôleur est modeste et spécialisé, alors que le SoC fait tourner un système d'exploitation complet.",
            },
            {
              q: "Quel est un inconvénient du système sur puce ?",
              options: ["Une consommation plus élevée qu'avec des composants séparés", "L'impossibilité de remplacer ou d'améliorer un seul composant", "Des échanges plus lents entre le processeur et la mémoire", "Un appareil plus encombrant"],
              answer: 1,
              why: "Tous les blocs étant gravés sur le même circuit, il faut changer la puce entière pour améliorer ou réparer l'un d'eux.",
            },
          ],
          trap: "Croire que tout le téléphone est dans la puce : l'écran, la batterie, les antennes et les capteurs restent à l'extérieur, seuls leurs contrôleurs sont intégrés. Autre confusion fréquente : appeler « système sur puce » un simple microcontrôleur.",
          method: "Pour réviser, dessinez de mémoire le schéma d'un SoC de smartphone en blocs, reliez-les par le réseau sur puce et écrivez à côté de chaque bloc un verbe d'action (exécuter, afficher, traiter l'image, communiquer). Pour justifier un avantage, citez toujours le mécanisme : distance plus courte, donc temps et énergie plus faibles.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'processus',
          title: 'Processus et ressources : ordonnancement et interblocage',
          minutes: 30,
          objectives: [
            "Décrire la création d'un processus et les différents états qu'il traverse.",
            "Décrire l'ordonnancement de plusieurs processus par le système et calculer un chronogramme.",
            "Mettre en évidence le risque de l'interblocage (deadlock) et proposer un moyen de l'éviter.",
            "Observer les processus d'une machine avec des commandes standard (ps, top, kill).",
          ],
          course: [
            {
              heading: "Programme et processus",
              paragraphs: [
                "Un programme est un fichier qui contient des instructions : il est inerte tant qu'on ne l'exécute pas. Un processus est un programme en cours d'exécution. Quand vous lancez un programme, le système d'exploitation crée un processus : il lui réserve une zone de mémoire (le code, les données, la pile d'appels), lui attribue un identifiant unique, le PID (Process IDentifier), et enregistre son contexte (valeurs des registres, état, fichiers ouverts) dans une structure appelée bloc de contrôle du processus.",
                "Un même programme peut donner plusieurs processus : ouvrir deux fois un éditeur de texte crée deux processus distincts, chacun avec sa mémoire. Les processus forment un arbre : chaque processus est créé par un processus parent, dont le PID est noté PPID. Sous Linux, le premier processus lancé au démarrage (init ou systemd) a le PID 1 et il est l'ancêtre de tous les autres.",
                "Sous Linux, la commande ps affiche les processus (ps -ef pour tous, avec PID et PPID), top les affiche en temps réel avec leur consommation de processeur et de mémoire, pstree montre l'arbre des processus et kill suivi d'un PID envoie un signal pour arrêter un processus. Sous Windows, le gestionnaire des tâches joue le même rôle.",
              ],
              box: { label: "Définition", text: "Un processus est une instance d'un programme en cours d'exécution, avec sa propre zone de mémoire et son contexte. Le système l'identifie par un numéro unique, le PID ; son créateur est son processus parent (PPID)." },
            },
            {
              heading: "Les états d'un processus",
              paragraphs: [
                "Sur un processeur à un seul cœur, un seul processus s'exécute à un instant donné. Pour donner l'illusion que plusieurs programmes tournent en même temps, le système les fait alterner très vite : c'est l'exécution concurrente. Un processus passe donc par plusieurs états : prêt (il attend qu'on lui donne le processeur), élu (il s'exécute), bloqué (il attend une ressource ou un événement : lecture sur le disque, saisie au clavier, arrivée d'un paquet réseau), puis terminé.",
                "Les transitions possibles sont précises. Prêt vers élu : l'ordonnanceur lui attribue le processeur. Élu vers prêt : le système lui retire le processeur, par exemple à la fin de son temps alloué (on parle de préemption). Élu vers bloqué : le processus demande une ressource indisponible. Bloqué vers prêt : la ressource devient disponible. Un processus bloqué ne repasse jamais directement à l'état élu : il doit d'abord redevenir prêt.",
                "Passer d'un processus à un autre demande de sauvegarder le contexte de l'un et de restaurer celui de l'autre : c'est la commutation de contexte. Elle prend un peu de temps, c'est pourquoi le système ne change pas de processus à chaque instruction.",
              ],
              box: { label: "À retenir", text: "États : prêt, élu, bloqué (et terminé). Transitions : prêt → élu (choix de l'ordonnanceur) ; élu → prêt (préemption) ; élu → bloqué (attente d'une ressource) ; bloqué → prêt (ressource obtenue). Jamais bloqué → élu directement." },
            },
            {
              heading: "L'ordonnancement",
              paragraphs: [
                "L'ordonnanceur est la partie du système d'exploitation qui choisit, parmi les processus prêts, celui qui sera élu. Plusieurs politiques existent. Premier arrivé, premier servi (FIFO) : les processus s'exécutent jusqu'au bout dans l'ordre d'arrivée. Plus court d'abord : parmi les processus prêts, on choisit celui dont la durée d'exécution est la plus courte. Priorités : chaque processus a une priorité et le plus prioritaire passe d'abord.",
                "Le tourniquet (round robin) est la politique la plus utilisée dans les systèmes interactifs : chaque processus reçoit le processeur pendant une durée fixe, le quantum ; s'il n'a pas fini, il retourne à la fin de la file des processus prêts. Personne n'attend indéfiniment et le système reste réactif. Quand un processus arrive au moment même où un quantum se termine, il faut une convention : dans cette leçon, le nouveau venu entre dans la file avant le processus qui vient d'être interrompu.",
                "Pour comparer les politiques, on calcule pour chaque processus le temps de séjour (instant de fin moins instant d'arrivée) et le temps d'attente (temps de séjour moins durée d'exécution), puis leurs moyennes. On représente l'exécution par un chronogramme : une ligne du temps où l'on indique quel processus occupe le processeur à chaque instant.",
              ],
              box: { label: "Formule", text: "Temps de séjour = instant de fin - instant d'arrivée. Temps d'attente = temps de séjour - durée d'exécution." },
            },
            {
              heading: "Ressources partagées et interblocage",
              paragraphs: [
                "Certaines ressources (un fichier en écriture, une imprimante, une zone de mémoire protégée par un verrou) ne peuvent être utilisées que par un seul processus à la fois : on parle d'exclusion mutuelle. Un processus qui demande une ressource déjà prise passe à l'état bloqué jusqu'à ce qu'elle soit libérée.",
                "Un interblocage (deadlock) se produit quand plusieurs processus s'attendent mutuellement : P1 détient la ressource R1 et attend R2, tandis que P2 détient R2 et attend R1. Aucun ne peut avancer, et aucun ne libérera sa ressource. L'analogie classique est celle d'un carrefour où quatre voitures, arrivées en même temps, laissent chacune la priorité à celle de droite : personne ne passe.",
                "Quatre conditions doivent être réunies simultanément pour un interblocage (conditions de Coffman, 1971) : exclusion mutuelle, détention et attente (un processus garde ses ressources en en attendant d'autres), absence de réquisition (on ne peut pas lui retirer une ressource) et attente circulaire. Pour l'éviter, il suffit de casser l'une d'elles, par exemple en imposant à tous les processus de demander les ressources dans le même ordre, ce qui rend l'attente circulaire impossible. On détecte un interblocage en cherchant un cycle dans le graphe des attentes.",
              ],
              box: { label: "Définition", text: "Un interblocage est une situation où un ensemble de processus sont tous bloqués, chacun attendant une ressource détenue par un autre processus de l'ensemble : l'attente forme un cycle et ne se termine jamais." },
            },
          ],
          keyPoints: [
            "Un processus est un programme en cours d'exécution, identifié par son PID ; il est créé par un processus parent (PPID).",
            "États : prêt, élu, bloqué, terminé ; un processus bloqué redevient prêt avant d'être élu.",
            "L'ordonnanceur choisit le processus élu : FIFO, plus court d'abord, priorités, tourniquet avec quantum.",
            "Temps de séjour = fin - arrivée ; temps d'attente = séjour - durée d'exécution.",
            "Interblocage : attente circulaire de ressources ; on l'évite en demandant les ressources toujours dans le même ordre.",
            "Commandes Linux : ps, top, pstree, kill.",
          ],
          example: {
            statement: "Trois processus arrivent : A à l'instant 0 (durée 3), B à l'instant 1 (durée 4), C à l'instant 2 (durée 2). Établissez le chronogramme et le temps de séjour moyen avec la politique FIFO, puis avec le tourniquet de quantum 2 (un processus qui arrive au moment où un quantum se termine entre dans la file avant le processus interrompu).",
            solution: [
              "FIFO : A s'exécute de 0 à 3, puis B de 3 à 7, puis C de 7 à 9.",
              "Temps de séjour FIFO : A : 3 - 0 = 3 ; B : 7 - 1 = 6 ; C : 9 - 2 = 7. Moyenne : 16 ÷ 3 ≈ 5,33.",
              "Tourniquet : A s'exécute de 0 à 2 (il lui reste 1). Pendant ce temps B arrive (instant 1) puis C (instant 2) : la file devient B, C, A.",
              "B s'exécute de 2 à 4 (il lui reste 2), la file devient C, A, B. C s'exécute de 4 à 6 et termine. A s'exécute de 6 à 7 et termine. B s'exécute de 7 à 9 et termine.",
              "Temps de séjour tourniquet : A : 7 - 0 = 7 ; B : 9 - 1 = 8 ; C : 6 - 2 = 4. Moyenne : 19 ÷ 3 ≈ 6,33.",
              "Réponse : 5,33 en FIFO et 6,33 avec le tourniquet. Ici, le tourniquet est moins bon en moyenne, mais il évite qu'un processus long monopolise le processeur : C est servi dès l'instant 4 au lieu de 7.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez la transition d'état du processus concerné : a) un traitement de texte attend que l'utilisateur appuie sur une touche ; b) l'utilisateur appuie sur la touche ; c) l'ordonnanceur donne le processeur au traitement de texte ; d) le quantum du traitement de texte est écoulé alors qu'il calcule encore.",
              hint: "Les quatre transitions possibles sont : prêt vers élu, élu vers prêt, élu vers bloqué, bloqué vers prêt.",
              solution: [
                "a) Le processus attend un événement (la frappe) : il passe de élu à bloqué.",
                "b) L'événement attendu se produit : il passe de bloqué à prêt (et non directement à élu).",
                "c) L'ordonnanceur le choisit : il passe de prêt à élu.",
                "d) Le système lui retire le processeur (préemption) : il passe de élu à prêt.",
                "Résultat : élu → bloqué, bloqué → prêt, prêt → élu, élu → prêt.",
              ],
            },
            {
              level: 2,
              statement: "Reprenez les processus A (arrivée 0, durée 3), B (arrivée 1, durée 4) et C (arrivée 2, durée 2). Appliquez la politique « plus court d'abord » non préemptive : quand le processeur se libère, on choisit parmi les processus arrivés celui dont la durée est la plus courte, et il s'exécute jusqu'au bout. a) Établissez le chronogramme. b) Calculez les temps de séjour et d'attente de chaque processus, puis le temps de séjour moyen. c) Comparez avec le FIFO (moyenne 5,33).",
              hint: "À l'instant 0, seul A est arrivé. Au moment où A termine, regardez quels processus sont arrivés et comparez leurs durées.",
              solution: [
                "a) À l'instant 0, seul A est présent : il s'exécute de 0 à 3. À l'instant 3, B (durée 4) et C (durée 2) attendent : C est le plus court, il s'exécute de 3 à 5, puis B de 5 à 9.",
                "b) Temps de séjour : A : 3 - 0 = 3 ; C : 5 - 2 = 3 ; B : 9 - 1 = 8. Temps d'attente : A : 3 - 3 = 0 ; C : 3 - 2 = 1 ; B : 8 - 4 = 4.",
                "Temps de séjour moyen : (3 + 3 + 8) ÷ 3 = 14 ÷ 3 ≈ 4,67.",
                "c) 4,67 < 5,33 : faire passer les processus courts d'abord réduit le temps de séjour moyen. Le revers est qu'un processus long risque d'attendre très longtemps si des processus courts arrivent sans cesse (famine).",
              ],
            },
            {
              level: 3,
              statement: "Trois processus partagent trois ressources en exclusion mutuelle. À un instant donné : P1 détient R1 et demande R2 ; P2 détient R2 et demande R3 ; P3 détient R3 et demande R1. a) Représentez la situation par un graphe orienté (un arc de Pi vers Pj quand Pi attend une ressource détenue par Pj). b) Montrez qu'il y a interblocage. c) On modifie P3 pour qu'il demande R4, une ressource libre, au lieu de R1. Décrivez le déroulement. d) Proposez une règle de programmation qui empêche tout interblocage dans ce système.",
              hint: "Un interblocage correspond à un cycle dans le graphe des attentes. Pour la règle, pensez à un ordre imposé pour les demandes de ressources.",
              solution: [
                "a) P1 attend R2 détenue par P2 : arc P1 → P2. P2 attend R3 détenue par P3 : arc P2 → P3. P3 attend R1 détenue par P1 : arc P3 → P1.",
                "b) Le graphe contient le cycle P1 → P2 → P3 → P1 : chaque processus attend une ressource que seul le suivant peut libérer, et aucun ne peut avancer. C'est un interblocage (les quatre conditions de Coffman sont réunies).",
                "c) P3 obtient R4, s'exécute jusqu'au bout et libère R3 et R4. P2 obtient alors R3, termine et libère R2 et R3. P1 obtient R2, termine et libère R1 et R2. Il n'y a plus de cycle, donc plus d'interblocage.",
                "d) On numérote les ressources (R1 < R2 < R3 < R4) et chaque processus doit les demander dans l'ordre croissant. P3, qui veut R1 et R3, devra demander R1 avant R3 : il ne peut plus détenir R3 en attendant R1, et l'attente circulaire devient impossible.",
                "Résultat : cycle donc interblocage ; l'ordre global de demande des ressources l'empêche.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "PID", right: "Numéro unique qui identifie un processus" },
              { left: "Ordonnanceur", right: "Choisit le processus prêt qui sera élu" },
              { left: "Quantum", right: "Durée maximale d'exécution accordée à chaque tour" },
              { left: "Préemption", right: "Retrait du processeur à un processus qui n'a pas fini" },
              { left: "Commutation de contexte", right: "Sauvegarde d'un processus et restauration d'un autre" },
              { left: "Interblocage", right: "Attente circulaire de ressources entre processus" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence entre un programme et un processus ?",
              options: ["Un processus est un programme écrit en Python", "Il n'y en a aucune, ce sont deux noms pour le même objet", "Un processus est un programme en cours d'exécution, avec sa mémoire et son contexte", "Un programme ne peut donner qu'un seul processus"],
              answer: 2,
              why: "Le programme est le fichier d'instructions ; le processus est son exécution. Un même programme peut d'ailleurs donner plusieurs processus.",
            },
            {
              q: "Un processus bloqué en attente du disque obtient enfin ses données. Dans quel état passe-t-il ?",
              options: ["Prêt", "Élu", "Terminé", "Il reste bloqué jusqu'au redémarrage"],
              answer: 0,
              why: "Un processus débloqué redevient prêt : c'est ensuite l'ordonnanceur qui décidera quand l'élire.",
            },
            {
              q: "Quel est le principe de l'ordonnancement par tourniquet ?",
              options: ["Le processus le plus court passe toujours en premier", "Les processus s'exécutent chacun jusqu'au bout, strictement dans l'ordre de leur arrivée dans la file", "Le processus de plus haute priorité garde le processeur", "Chaque processus reçoit le processeur pendant un quantum, puis retourne en fin de file"],
              answer: 3,
              why: "Le tourniquet partage le processeur par tranches de temps fixes, ce qui garantit qu'aucun processus n'attend indéfiniment.",
            },
            {
              q: "Un processus arrive à l'instant 2, dure 3 unités et termine à l'instant 9. Quel est son temps d'attente ?",
              options: ["7", "4", "9", "3"],
              answer: 1,
              why: "Temps de séjour : 9 - 2 = 7 ; temps d'attente : 7 - 3 = 4.",
            },
            {
              q: "Quel moyen permet d'éviter les interblocages ?",
              options: ["Imposer à tous les processus de demander les ressources dans le même ordre", "Augmenter la fréquence du processeur pour que chaque processus libère plus vite ses ressources", "Lancer moins de programmes en même temps sur la machine", "Utiliser un quantum plus long dans le tourniquet"],
              answer: 0,
              why: "Un ordre global de demande rend l'attente circulaire impossible ; la vitesse du processeur ou le quantum ne changent rien à un cycle d'attente.",
            },
          ],
          trap: "Faire passer un processus directement de l'état bloqué à l'état élu : il redevient d'abord prêt. Dans les chronogrammes, l'erreur classique est d'oublier qu'un processus n'arrive qu'à son instant d'arrivée, ou de confondre temps de séjour et temps d'attente.",
          method: "Pour un chronogramme, tenez à chaque instant clé (arrivée, fin de quantum, fin de processus) un tableau à trois colonnes : instant, processus élu, contenu de la file des prêts avec le temps restant de chacun. Vérifiez à la fin que la somme des durées d'exécution égale la longueur totale du chronogramme (s'il n'y a pas de temps mort).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'routage',
          title: 'Les protocoles de routage RIP et OSPF',
          minutes: 35,
          objectives: [
            "Lire une table de routage et déterminer par où un routeur envoie un paquet.",
            "Identifier, suivant le protocole de routage utilisé (RIP ou OSPF), la route empruntée par un paquet.",
            "Mettre à jour une table de routage RIP à partir de la table d'un voisin.",
            "Calculer le coût des liaisons OSPF et appliquer l'algorithme de Dijkstra.",
          ],
          course: [
            {
              heading: "Routeurs et tables de routage",
              paragraphs: [
                "Internet est un réseau de réseaux. Les routeurs relient ces réseaux entre eux : un routeur possède plusieurs interfaces, chacune reliée à un réseau et dotée d'une adresse IP. Quand un paquet arrive, le routeur lit l'adresse IP de destination et consulte sa table de routage pour savoir à quel voisin le transmettre. Chaque routeur ne connaît que le prochain saut, pas le chemin complet.",
                "Une ligne de table de routage indique : le réseau de destination (adresse et masque, par exemple 192.168.2.0/24, où /24 signifie que les 24 premiers bits désignent le réseau), la passerelle (l'adresse du prochain routeur, ou « directe » si le réseau est relié au routeur), l'interface de sortie et la métrique (une mesure de la longueur ou du coût de la route). Une route par défaut, notée 0.0.0.0/0, sert pour toutes les destinations non listées.",
                "Exemple : la table de R1 contient la ligne « 192.168.2.0/24, passerelle 10.0.0.2, interface eth1, métrique 1 ». Un paquet destiné à 192.168.2.17 appartient à ce réseau : R1 l'envoie par eth1 au routeur d'adresse 10.0.0.2. Remplir les tables à la main (routage statique) devient impossible dans un grand réseau qui évolue : les routeurs utilisent alors des protocoles de routage dynamique qui construisent et mettent à jour les tables automatiquement. Au programme : RIP et OSPF, utilisés à l'intérieur d'un même système autonome (le réseau d'un opérateur, d'une entreprise).",
              ],
              box: { label: "Définition", text: "La table de routage d'un routeur associe à chaque réseau de destination la passerelle (prochain routeur) et l'interface par lesquelles envoyer les paquets, avec une métrique qui mesure la route." },
            },
            {
              heading: "RIP : le routage à vecteur de distance",
              paragraphs: [
                "RIP (Routing Information Protocol) mesure une route par son nombre de sauts, c'est-à-dire le nombre de routeurs à traverser. Chaque routeur ne connaît au départ que ses réseaux directement reliés. Toutes les 30 secondes, il envoie sa table (la liste des destinations et de leurs distances) à ses voisins directs. Il ne connaît jamais la carte complète du réseau : seulement ce que lui disent ses voisins.",
                "Quand un routeur reçoit de son voisin V une destination D à la distance d, il calcule d + 1 (un saut de plus pour aller jusqu'à V). Si D est inconnue, il l'ajoute avec la passerelle V. Si d + 1 est strictement inférieur à la distance qu'il connaît, il remplace la route par celle qui passe par V. Si sa route actuelle vers D passe déjà par V, il adopte la nouvelle valeur, même plus grande, car V est sa source d'information. Sinon, il ne change rien. Après quelques échanges, les tables se stabilisent : on dit que le réseau a convergé.",
                "RIP limite la distance à 15 sauts : la valeur 16 signifie « inaccessible ». Il est donc réservé aux réseaux de petite taille. Si un routeur ne reçoit plus de nouvelles d'un voisin pendant 180 secondes, il considère les routes passant par lui comme invalides. La convergence après une panne est lente, et RIP ne tient pas compte du débit des liaisons : un chemin de 2 sauts sur des liaisons lentes est préféré à un chemin de 3 sauts sur des liaisons rapides.",
              ],
              box: { label: "Règle", text: "RIP : métrique = nombre de sauts. Reçue d'un voisin V : destination D à distance d. Si D est inconnue ou si d + 1 < distance actuelle (ou si la route actuelle passe par V), la nouvelle route est : D, passerelle V, distance d + 1. Maximum 15 sauts, 16 = inaccessible." },
            },
            {
              heading: "OSPF : le routage à état de liens",
              paragraphs: [
                "OSPF (Open Shortest Path First) procède autrement : chaque routeur diffuse à tout le réseau l'état de ses liaisons (ses voisins et le coût de chaque liaison). Chaque routeur finit ainsi par connaître la carte complète du réseau, représentée par un graphe pondéré, et calcule lui-même les meilleurs chemins vers toutes les destinations avec l'algorithme de Dijkstra.",
                "La métrique d'OSPF est un coût qui dépend du débit des liaisons : plus une liaison est rapide, plus son coût est faible. Une formule courante est coût = 10⁸ ÷ d, où d est le débit en bit/s : une liaison à 100 Mbit/s coûte 1, une liaison à 10 Mbit/s coûte 10, une liaison à 1 Gbit/s coûte 0,1. Le coût d'une route est la somme des coûts de ses liaisons, et OSPF choisit la route de coût total minimal. Dans un sujet, la formule est toujours donnée : appliquez celle de l'énoncé.",
                "OSPF n'a pas de limite de sauts, converge rapidement après une panne et peut découper un grand réseau en zones : il convient aux grands réseaux. En contrepartie, chaque routeur doit stocker la carte et faire plus de calculs. Exemple : de R1 à R5, la route R1-R3-R5 compte 2 sauts sur des liaisons à 10 Mbit/s (coût 10 + 10 = 20), la route R1-R2-R4-R5 compte 3 sauts sur des liaisons à 100 Mbit/s (coût 1 + 1 + 1 = 3). RIP choisit la première, OSPF la seconde.",
              ],
              box: { label: "Formule", text: "OSPF : coût d'une liaison = 10⁸ ÷ débit (en bit/s), sauf indication contraire de l'énoncé. Coût d'une route = somme des coûts de ses liaisons. La route choisie est celle de coût minimal." },
            },
            {
              heading: "Appliquer l'algorithme de Dijkstra",
              paragraphs: [
                "L'algorithme de Dijkstra calcule les plus courts chemins depuis un routeur de départ dans un graphe à poids positifs. On attribue la distance 0 au départ et une distance infinie aux autres. À chaque étape, on choisit le routeur non encore traité dont la distance provisoire est la plus petite, on le marque comme définitif, puis on met à jour ses voisins : si passer par lui donne une distance plus petite, on la retient et on note ce routeur comme prédécesseur.",
                "On présente les calculs dans un tableau : une ligne par étape, une colonne par routeur, chaque case contenant « distance (prédécesseur) ». Quand tous les routeurs sont traités, on remonte les prédécesseurs depuis l'arrivée pour obtenir le chemin. Le lien avec la leçon sur les graphes est direct : RIP revient à chercher un plus court chemin en nombre d'arêtes, OSPF un plus court chemin pondéré.",
              ],
            },
          ],
          keyPoints: [
            "Un routeur choisit le prochain saut grâce à sa table de routage : destination, passerelle, interface, métrique.",
            "RIP : vecteur de distance, métrique = nombre de sauts, échanges avec les voisins toutes les 30 s, 15 sauts maximum (16 = inaccessible).",
            "Mise à jour RIP : une destination annoncée à d par le voisin V vaut d + 1 en passant par V ; on la garde si elle est nouvelle ou meilleure.",
            "OSPF : état de liens, chaque routeur connaît tout le graphe et applique Dijkstra.",
            "OSPF : coût = 10⁸ ÷ débit (bit/s) en général ; la route choisie minimise la somme des coûts.",
            "RIP et OSPF peuvent choisir des routes différentes : moins de sauts n'est pas forcément plus rapide.",
          ],
          example: {
            statement: "Un réseau comporte cinq routeurs. Liaisons : R1-R2 (100 Mbit/s), R2-R4 (100 Mbit/s), R4-R5 (100 Mbit/s), R1-R3 (10 Mbit/s), R3-R5 (10 Mbit/s). Un paquet part de R1 vers R5. Déterminez la route choisie avec RIP, puis avec OSPF (coût = 10⁸ ÷ débit en bit/s).",
            solution: [
              "Deux routes existent : R1-R3-R5 et R1-R2-R4-R5.",
              "RIP compte les sauts : R1-R3-R5 compte 2 liaisons, R1-R2-R4-R5 en compte 3. RIP choisit R1-R3-R5.",
              "OSPF calcule les coûts : 100 Mbit/s = 10⁸ bit/s donne un coût de 10⁸ ÷ 10⁸ = 1 ; 10 Mbit/s = 10⁷ bit/s donne 10⁸ ÷ 10⁷ = 10.",
              "Coût de R1-R3-R5 : 10 + 10 = 20. Coût de R1-R2-R4-R5 : 1 + 1 + 1 = 3.",
              "Réponse : RIP choisit R1-R3-R5 (2 sauts) ; OSPF choisit R1-R2-R4-R5 (coût 3), plus longue en sauts mais beaucoup plus rapide.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La table de routage d'un routeur R contient quatre lignes : 172.16.0.0/16, directe, eth0 ; 10.1.0.0/16, passerelle 10.0.0.2, eth1 ; 10.2.0.0/16, passerelle 10.0.1.2, eth2 ; 0.0.0.0/0 (route par défaut), passerelle 10.0.0.2, eth1. Indiquez par quelle interface et vers quelle passerelle R envoie un paquet destiné à : a) 10.2.5.9 ; b) 172.16.3.4 ; c) 8.8.8.8 ; d) 10.1.200.1.",
              hint: "Avec un masque /16, seuls les deux premiers octets de l'adresse désignent le réseau. La route par défaut ne sert que si aucune autre ligne ne correspond.",
              solution: [
                "a) 10.2.5.9 commence par 10.2 : il appartient à 10.2.0.0/16. Envoi par eth2 vers la passerelle 10.0.1.2.",
                "b) 172.16.3.4 appartient à 172.16.0.0/16, réseau directement relié : envoi direct par eth0, sans passerelle.",
                "c) 8.8.8.8 ne correspond à aucun réseau listé : on utilise la route par défaut, eth1 vers 10.0.0.2.",
                "d) 10.1.200.1 appartient à 10.1.0.0/16 : envoi par eth1 vers 10.0.0.2.",
              ],
            },
            {
              level: 2,
              statement: "Le routeur R1 utilise RIP. Sa table (destination, passerelle, distance en sauts) est : R2, R2, 1 ; R3, R3, 1 ; R4, R2, 2 ; R6, R3, 4. Il reçoit de son voisin R3 la table suivante (destination, distance) : R2, 2 ; R4, 2 ; R5, 1 ; R6, 1. Donnez la table de R1 après cette mise à jour, en justifiant chaque ligne.",
              hint: "Ajoutez 1 à chaque distance annoncée par R3, puis comparez avec la table de R1. Pour une route qui passe déjà par R3, la nouvelle valeur est adoptée dans tous les cas.",
              solution: [
                "R3 est à 1 saut : chaque distance annoncée par R3 augmente de 1. Propositions via R3 : R2 à 3, R4 à 3, R5 à 2, R6 à 2.",
                "R2 : 3 > 1, on garde R2, passerelle R2, distance 1. R3 lui-même reste à 1 (voisin direct).",
                "R4 : 3 > 2, on garde R4, passerelle R2, distance 2.",
                "R5 : destination inconnue de R1, on l'ajoute : R5, passerelle R3, distance 2.",
                "R6 : la route actuelle passe déjà par R3 et 2 < 4 : on adopte R6, passerelle R3, distance 2.",
                "Table finale : R2, R2, 1 ; R3, R3, 1 ; R4, R2, 2 ; R5, R3, 2 ; R6, R3, 2.",
              ],
            },
            {
              level: 3,
              statement: "Un réseau d'entreprise comporte six routeurs A, B, C, D, E, F. Liaisons et débits : A-B 100 Mbit/s ; A-C 10 Mbit/s ; B-C 20 Mbit/s ; B-D 50 Mbit/s ; C-E 100 Mbit/s ; D-E 20 Mbit/s ; D-F 10 Mbit/s ; E-F 50 Mbit/s. On utilise la formule coût = 10⁸ ÷ débit (en bit/s). a) Calculez le coût de chaque liaison. b) Avec RIP, donnez les routes de A vers F de longueur minimale. c) Appliquez l'algorithme de Dijkstra depuis A et donnez la route OSPF de A vers F et son coût. d) La liaison B-C tombe en panne : quelle route OSPF est alors utilisée ?",
              hint: "50 Mbit/s = 5 × 10⁷ bit/s. Dans Dijkstra, traitez toujours le routeur non définitif de plus petite distance provisoire, puis mettez à jour ses voisins.",
              solution: [
                "a) A-B : 1 ; A-C : 10 ; B-C : 10⁸ ÷ (2 × 10⁷) = 5 ; B-D : 10⁸ ÷ (5 × 10⁷) = 2 ; C-E : 1 ; D-E : 5 ; D-F : 10 ; E-F : 2.",
                "b) Aucune liaison directe A-F ni route de 2 sauts (les voisins de A sont B et C, aucun n'est relié à F). Routes de 3 sauts : A-B-D-F et A-C-E-F. RIP retient l'une de ces deux routes de 3 sauts.",
                "c) Départ : A = 0. On traite A : B = 1 (A), C = 10 (A). On traite B (1) : C = min(10, 1 + 5) = 6 (B), D = 1 + 2 = 3 (B). On traite D (3) : E = 3 + 5 = 8 (D), F = 3 + 10 = 13 (D).",
                "On traite C (6) : E = min(8, 6 + 1) = 7 (C). On traite E (7) : F = min(13, 7 + 2) = 9 (E). On traite F (9) : fin.",
                "Remontée des prédécesseurs : F vient de E, E de C, C de B, B de A. Route OSPF : A-B-C-E-F, de coût 1 + 5 + 1 + 2 = 9.",
                "d) Sans B-C, les routes possibles sont A-B-D-E-F (1 + 2 + 5 + 2 = 10), A-B-D-F (1 + 2 + 10 = 13) et A-C-E-F (10 + 1 + 2 = 13). OSPF utilise A-B-D-E-F, de coût 10.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : RIP, OSPF et tables de routage.",
            statements: [
              { text: "Un routeur connaît le chemin complet de chaque paquet jusqu'à sa destination.", true: false, why: "Il ne connaît que le prochain saut : chaque routeur décide pour lui-même." },
              { text: "Avec RIP, une distance de 16 sauts signifie que la destination est inaccessible.", true: true, why: "RIP limite les routes à 15 sauts ; 16 joue le rôle de l'infini." },
              { text: "OSPF choisit toujours la route qui traverse le moins de routeurs.", true: false, why: "OSPF minimise la somme des coûts, liés aux débits ; c'est RIP qui minimise le nombre de sauts." },
              { text: "Avec OSPF, chaque routeur connaît la carte complète du réseau.", true: true, why: "Les routeurs diffusent l'état de leurs liens ; chacun reconstruit le graphe et applique Dijkstra." },
              { text: "Avec la formule 10⁸ ÷ débit, une liaison plus rapide a un coût plus élevé.", true: false, why: "Le débit est au dénominateur : plus il est grand, plus le coût est petit." },
              { text: "Avec RIP, un routeur n'échange ses informations qu'avec ses voisins directs.", true: true, why: "C'est le principe du vecteur de distance : chacun transmet sa table à ses voisins." },
              { text: "Une route par défaut 0.0.0.0/0 est utilisée avant toutes les autres lignes de la table.", true: false, why: "Elle ne sert que lorsqu'aucune route plus précise ne correspond à la destination." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la métrique utilisée par le protocole RIP ?",
              options: ["Le débit de la liaison la plus lente du chemin", "Le temps de réponse mesuré par le routeur", "La somme des coûts 10⁸ ÷ débit", "Le nombre de sauts"],
              answer: 3,
              why: "RIP compte le nombre de routeurs traversés ; les coûts liés au débit sont la métrique d'OSPF.",
            },
            {
              q: "Le routeur R reçoit de son voisin V : « destination D, distance 3 ». R connaît D à distance 5 par une autre passerelle. Que fait R avec RIP ?",
              options: ["Il garde sa route à 5", "Il adopte D via V à distance 4", "Il adopte D via V à distance 3", "Il supprime la destination D"],
              answer: 1,
              why: "Passer par V coûte un saut de plus : 3 + 1 = 4, qui est inférieur à 5 ; la nouvelle route passe donc par V.",
            },
            {
              q: "Quel algorithme chaque routeur OSPF applique-t-il pour calculer ses routes ?",
              options: ["Le tri fusion", "Le parcours en profondeur", "L'algorithme de Dijkstra", "L'algorithme de Boyer-Moore"],
              answer: 2,
              why: "Connaissant tout le graphe pondéré du réseau, le routeur calcule les plus courts chemins avec Dijkstra.",
            },
            {
              q: "Avec coût = 10⁸ ÷ débit, quel est le coût d'une liaison à 20 Mbit/s ?",
              options: ["5", "0,2", "20", "50"],
              answer: 0,
              why: "20 Mbit/s = 2 × 10⁷ bit/s, donc 10⁸ ÷ (2 × 10⁷) = 5.",
            },
            {
              q: "Pourquoi RIP n'est-il pas adapté aux très grands réseaux ?",
              options: ["Il ne fonctionne qu'avec des liaisons filaires", "Il exige que chaque routeur stocke la carte complète", "Il est limité à 15 sauts et converge lentement", "Il ne sait pas gérer les adresses IP"],
              answer: 2,
              why: "Au-delà de 15 sauts une destination est considérée comme inaccessible, et les informations se propagent lentement de voisin en voisin.",
            },
          ],
          trap: "Additionner les débits au lieu des coûts dans OSPF, ou oublier de convertir les débits en bit/s avant d'appliquer 10⁸ ÷ débit. Avec RIP, l'erreur classique est d'oublier d'ajouter 1 à la distance annoncée par le voisin.",
          method: "Dans un exercice de routage, commencez par dessiner le graphe du réseau à partir de l'énoncé et écrivez le coût sur chaque arête. Pour RIP, comptez les arêtes ; pour OSPF, faites le tableau de Dijkstra ligne par ligne, puis vérifiez votre résultat en calculant à la main le coût de deux ou trois autres routes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'securiser-les-communications',
          title: 'Sécuriser les communications : chiffrement et HTTPS',
          minutes: 30,
          objectives: [
            "Décrire les principes de chiffrement symétrique (clé partagée) et asymétrique (avec clé privée et clé publique).",
            "Chiffrer et déchiffrer un message avec un chiffrement symétrique simple (décalage, XOR).",
            "Décrire l'échange d'une clé symétrique en utilisant un protocole asymétrique pour sécuriser une communication HTTPS.",
            "Expliquer le rôle d'un certificat et d'une autorité de certification.",
          ],
          course: [
            {
              heading: "Pourquoi et comment chiffrer",
              paragraphs: [
                "Sur Internet, les paquets traversent de nombreux équipements qui ne nous appartiennent pas : un message en clair peut être lu ou modifié en chemin. Sécuriser une communication, c'est garantir sa confidentialité (seul le destinataire peut lire), son intégrité (le message n'a pas été modifié) et l'authentification (on parle bien à celui qu'on croit).",
                "Vocabulaire : le message lisible est le texte clair ; chiffrer, c'est le transformer en un texte chiffré illisible à l'aide d'un algorithme et d'une clé ; déchiffrer, c'est retrouver le texte clair avec la bonne clé. On dit « chiffrer », pas « crypter ». Selon le principe énoncé par Auguste Kerckhoffs en 1883, la sécurité doit reposer sur le secret de la clé et non sur le secret de l'algorithme, qui peut être public.",
              ],
              box: { label: "Définition", text: "Chiffrer : transformer un texte clair en texte chiffré à l'aide d'une clé. Déchiffrer : retrouver le texte clair à partir du chiffré, grâce à la clé. La sécurité repose sur le secret de la clé." },
            },
            {
              heading: "Le chiffrement symétrique",
              paragraphs: [
                "Dans un chiffrement symétrique, la même clé sert à chiffrer et à déchiffrer : l'expéditeur et le destinataire doivent la partager, d'où le nom de clé partagée. Le chiffrement par décalage (dit de César) en est l'exemple le plus simple : avec la clé 3, A devient D, B devient E, et « NSI » devient « QVL » ; on déchiffre en décalant de 3 dans l'autre sens.",
                "Le chiffrement par XOR (ou exclusif) travaille sur les bits : on combine chaque bit du message avec le bit correspondant de la clé (0 XOR 0 = 0, 0 XOR 1 = 1, 1 XOR 0 = 1, 1 XOR 1 = 0). Comme (m XOR k) XOR k = m, la même opération avec la même clé déchiffre. Le standard actuel, AES (adopté en 2001), utilise des clés de 128, 192 ou 256 bits ; il est très rapide et considéré comme sûr.",
                "Le problème du symétrique est la distribution des clés : comment transmettre la clé secrète sans qu'elle soit interceptée, si l'on ne dispose pas déjà d'un canal sûr ? De plus, chaque paire de personnes a besoin de sa propre clé : pour n personnes, il faut n(n - 1) ÷ 2 clés, soit 4 950 clés pour 100 personnes.",
              ],
              box: { label: "À retenir", text: "Symétrique : une seule clé, partagée, pour chiffrer et déchiffrer. Rapide, mais il faut échanger la clé de façon sûre, et n personnes ont besoin de n(n - 1) ÷ 2 clés." },
            },
            {
              heading: "Le chiffrement asymétrique",
              paragraphs: [
                "Dans un chiffrement asymétrique, chaque personne possède une paire de clés liées mathématiquement : une clé publique, que l'on peut diffuser à tous, et une clé privée, gardée secrète. Un message chiffré avec la clé publique de Bob ne peut être déchiffré qu'avec la clé privée de Bob. Retrouver la clé privée à partir de la clé publique est en pratique impossible.",
                "L'analogie est celle du cadenas : Bob distribue des cadenas ouverts (sa clé publique) ; n'importe qui peut fermer une boîte avec, mais seul Bob, qui garde la clé du cadenas (sa clé privée), peut l'ouvrir. L'algorithme le plus connu est RSA (Rivest, Shamir et Adleman, 1977), dont la sécurité repose sur la difficulté de décomposer un très grand nombre en produit de facteurs premiers.",
                "Le procédé fonctionne aussi dans l'autre sens : ce qui est chiffré avec la clé privée se déchiffre avec la clé publique. Tout le monde peut alors vérifier que seul le détenteur de la clé privée a pu produire ce message : c'est le principe de la signature numérique. Avec n personnes, il suffit de n paires de clés. En revanche, le chiffrement asymétrique est beaucoup plus lent que le symétrique : on ne l'utilise pas pour chiffrer de gros volumes de données.",
              ],
              box: { label: "À retenir", text: "Asymétrique : une paire de clés par personne. On chiffre avec la clé publique du destinataire, il déchiffre avec sa clé privée. Pas de secret à échanger, mais un calcul lent." },
            },
            {
              heading: "HTTPS : combiner les deux",
              paragraphs: [
                "HTTPS est le protocole HTTP sécurisé par TLS (qui a succédé à SSL). Il utilise par défaut le port 443, contre 80 pour HTTP. Il combine les deux chiffrements : l'asymétrique pour échanger une clé de façon sûre, puis le symétrique, rapide, pour toute la suite de la communication. On parle de chiffrement hybride.",
                "Le principe : le navigateur contacte le serveur ; le serveur envoie son certificat, qui contient sa clé publique et la signature d'une autorité de certification ; le navigateur vérifie cette signature grâce aux clés publiques des autorités qu'il connaît déjà ; il génère une clé de session symétrique aléatoire, la chiffre avec la clé publique du serveur et l'envoie ; le serveur la déchiffre avec sa clé privée ; désormais, les deux échangent les données chiffrées avec cette clé de session.",
                "Le certificat empêche l'attaque de l'homme du milieu : sans lui, un pirate placé entre le client et le serveur pourrait envoyer sa propre clé publique en se faisant passer pour le serveur. Dans les versions récentes de TLS, la clé de session est obtenue par un échange de type Diffie-Hellman plutôt qu'envoyée chiffrée, mais l'idée reste la même : l'asymétrique sert à établir un secret commun, le symétrique à chiffrer les échanges.",
              ],
              box: { label: "Repère", text: "HTTPS = HTTP + TLS, port 443. Certificat vérifié, clé de session symétrique échangée grâce au chiffrement asymétrique, puis données chiffrées en symétrique." },
            },
          ],
          keyPoints: [
            "Chiffrer garantit la confidentialité ; la sécurité repose sur le secret de la clé, pas de l'algorithme (principe de Kerckhoffs).",
            "Symétrique : une clé partagée (César, XOR, AES) ; rapide, mais la clé doit être échangée en secret.",
            "Asymétrique : clé publique pour chiffrer, clé privée pour déchiffrer (RSA, 1977) ; lent, mais sans secret à transmettre.",
            "Pour n personnes : n(n - 1) ÷ 2 clés en symétrique, n paires de clés en asymétrique.",
            "HTTPS (port 443) : certificat, échange d'une clé de session grâce à l'asymétrique, puis chiffrement symétrique des données.",
            "Le certificat, signé par une autorité de certification, protège contre l'attaque de l'homme du milieu.",
          ],
          example: {
            statement: "Alice veut envoyer à Bob l'octet 1011 0110 en le chiffrant par XOR avec la clé secrète 1100 1010. a) Calculez le chiffré. b) Montrez que Bob retrouve le message. c) Quel problème Alice et Bob doivent-ils résoudre avant de pouvoir communiquer ainsi ?",
            solution: [
              "a) On applique XOR bit à bit (le résultat vaut 1 si les deux bits sont différents) : 1011 0110 XOR 1100 1010.",
              "Premier quartet : 1⊕1 = 0, 0⊕1 = 1, 1⊕0 = 1, 1⊕0 = 1, soit 0111. Second quartet : 0⊕1 = 1, 1⊕0 = 1, 1⊕1 = 0, 0⊕0 = 0, soit 1100. Chiffré : 0111 1100.",
              "b) Bob calcule 0111 1100 XOR 1100 1010 : 0⊕1 = 1, 1⊕1 = 0, 1⊕0 = 1, 1⊕0 = 1, puis 1⊕1 = 0, 1⊕0 = 1, 0⊕1 = 1, 0⊕0 = 0, soit 1011 0110 : c'est le message de départ.",
              "c) C'est un chiffrement symétrique : Alice et Bob doivent d'abord partager la clé 1100 1010 sans qu'un tiers l'intercepte. C'est le problème de la distribution des clés, que résout le chiffrement asymétrique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Chiffrez le mot « RESEAU » avec le chiffrement par décalage de clé 3 (A devient D, ..., X devient A, Y devient B, Z devient C). b) Déchiffrez « FOH » sachant qu'il a été chiffré avec la même clé. c) Ce chiffrement est-il symétrique ou asymétrique ?",
              hint: "Pour déchiffrer, décalez chaque lettre de 3 rangs vers le début de l'alphabet.",
              solution: [
                "a) R → U, E → H, S → V, E → H, A → D, U → X : « RESEAU » devient « UHVHDX ».",
                "b) F → C, O → L, H → E : « FOH » se déchiffre en « CLE ».",
                "c) La même clé (le décalage de 3) sert à chiffrer et à déchiffrer : c'est un chiffrement symétrique. Avec seulement 25 décalages possibles, il se casse en essayant toutes les clés.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise compte 10 employés qui doivent tous pouvoir communiquer deux à deux de façon confidentielle. a) Combien de clés faut-il avec un chiffrement symétrique ? b) Combien de clés (publiques et privées) avec un chiffrement asymétrique ? c) Reprenez les calculs pour 100 employés. d) Pourquoi, malgré cet avantage, n'utilise-t-on pas seulement l'asymétrique pour chiffrer toutes les données ?",
              hint: "En symétrique, il faut une clé par paire d'employés ; le nombre de paires parmi n personnes est n(n - 1) ÷ 2.",
              solution: [
                "a) Une clé par paire : 10 × 9 ÷ 2 = 45 clés secrètes.",
                "b) Une paire de clés par employé : 10 paires, soit 20 clés (10 publiques et 10 privées).",
                "c) Pour 100 employés : 100 × 99 ÷ 2 = 4 950 clés en symétrique, contre 100 paires (200 clés) en asymétrique.",
                "d) Le chiffrement asymétrique est beaucoup plus lent : on s'en sert pour échanger une clé symétrique, puis le symétrique chiffre les données. C'est le principe du chiffrement hybride de HTTPS.",
              ],
            },
            {
              level: 3,
              statement: "Un élève se connecte au site de son lycée en HTTPS. a) Décrivez, dans l'ordre, les étapes qui permettent d'établir une communication chiffrée (version avec envoi d'une clé de session). b) Expliquez pourquoi le chiffrement asymétrique n'est utilisé qu'au début. c) Un pirate intercepte la clé de session chiffrée : peut-il la lire ? d) Le pirate se place entre l'élève et le serveur et envoie sa propre clé publique en prétendant être le lycée. Quel élément de HTTPS déjoue cette attaque, et comment ?",
              hint: "Distinguez bien ce qui est chiffré avec la clé publique du serveur et ce que seul le serveur peut déchiffrer. Pour d), pensez à la signature contenue dans le certificat.",
              solution: [
                "a) 1. Le navigateur contacte le serveur. 2. Le serveur envoie son certificat contenant sa clé publique. 3. Le navigateur vérifie la signature du certificat avec la clé publique de l'autorité de certification. 4. Il génère une clé de session aléatoire, la chiffre avec la clé publique du serveur et l'envoie. 5. Le serveur la déchiffre avec sa clé privée. 6. Les échanges sont chiffrés en symétrique avec la clé de session.",
                "b) L'asymétrique est lent : on ne l'utilise que pour transmettre un petit secret, la clé de session. Le symétrique, rapide, chiffre ensuite toutes les pages échangées.",
                "c) Non : la clé de session est chiffrée avec la clé publique du serveur, et seule la clé privée du serveur, que le pirate ne possède pas, permet de la déchiffrer.",
                "d) C'est le certificat. La clé publique du pirate ne peut pas être accompagnée d'un certificat valide au nom du lycée, signé par une autorité reconnue : la vérification de la signature échoue et le navigateur affiche une alerte de sécurité.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre l'établissement d'une connexion HTTPS (version avec envoi de la clé de session).",
            items: [
              "Le navigateur contacte le serveur",
              "Le serveur envoie son certificat contenant sa clé publique",
              "Le navigateur vérifie la signature du certificat",
              "Le navigateur chiffre une clé de session avec la clé publique du serveur",
              "Le serveur déchiffre la clé de session avec sa clé privée",
              "Les données sont échangées chiffrées avec la clé de session",
            ],
          },
          quiz: [
            {
              q: "Dans un chiffrement symétrique :",
              options: ["la même clé sert à chiffrer et à déchiffrer", "on chiffre avec une clé publique et on déchiffre avec une clé privée", "aucune clé n'est nécessaire", "chaque personne publie sa clé de déchiffrement"],
              answer: 0,
              why: "Symétrique signifie clé partagée : l'expéditeur et le destinataire utilisent la même clé secrète.",
            },
            {
              q: "Alice veut envoyer un message confidentiel à Bob avec un chiffrement asymétrique. Quelle clé utilise-t-elle pour chiffrer ?",
              options: ["Sa propre clé privée", "La clé privée de Bob", "La clé publique de Bob", "Sa propre clé publique"],
              answer: 2,
              why: "Seule la clé privée de Bob peut déchiffrer ce qui a été chiffré avec la clé publique de Bob : seul Bob pourra lire le message.",
            },
            {
              q: "Pourquoi HTTPS utilise-t-il le chiffrement symétrique pour les données ?",
              options: ["Parce que l'asymétrique n'est pas sûr", "Parce qu'il est beaucoup plus rapide que l'asymétrique", "Parce que les certificats des autorités l'exigent pour chaque page", "Parce que le symétrique n'utilise aucune clé"],
              answer: 1,
              why: "L'asymétrique est lent : il sert seulement à établir la clé de session, puis le symétrique chiffre rapidement les données.",
            },
            {
              q: "Quel est le rôle d'un certificat dans HTTPS ?",
              options: ["Chiffrer directement toutes les données échangées pendant la session", "Accélérer le chargement de la page", "Remplacer la clé de session", "Garantir que la clé publique appartient bien au site visité"],
              answer: 3,
              why: "Signé par une autorité de certification, il lie la clé publique à l'identité du site et empêche l'attaque de l'homme du milieu.",
            },
            {
              q: "Combien faut-il de clés symétriques pour que 6 personnes communiquent deux à deux en secret ?",
              options: ["6", "15", "12", "36"],
              answer: 1,
              why: "Une clé par paire : 6 × 5 ÷ 2 = 15.",
            },
          ],
          trap: "Croire qu'on chiffre un message avec sa propre clé privée pour le rendre confidentiel : pour la confidentialité, on chiffre avec la clé publique du destinataire. Chiffrer avec sa clé privée sert à signer, pas à cacher.",
          method: "Pour ne plus confondre les clés, posez-vous toujours la question : qui doit pouvoir déchiffrer ? Si c'est le destinataire seul, on utilise sa clé publique (lui seul a la clé privée). Pour décrire HTTPS, récitez les six étapes dans l'ordre en nommant à chaque fois la clé utilisée.",
        },
      ],
    },

    /* ==================================================================== */
    /* MÉTHODES ALGORITHMIQUES                                                */
    /* ==================================================================== */
    {
      id: 'algorithmique-avancee',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'diviser-pour-regner',
          title: 'Diviser pour régner : le tri fusion',
          minutes: 35,
          objectives: [
            "Écrire un algorithme utilisant la méthode « diviser pour régner ».",
            "Dérouler et programmer le tri fusion d'une liste.",
            "Comparer le coût du tri fusion (n log n) à celui des tris par insertion et par sélection (n²).",
          ],
          course: [
            {
              heading: "Le principe : diviser, régner, combiner",
              paragraphs: [
                "La méthode « diviser pour régner » résout un problème en trois étapes. Diviser : on découpe le problème en sous-problèmes de même nature, plus petits (souvent deux moitiés). Régner : on résout chaque sous-problème, en général récursivement, jusqu'à des cas si petits que la réponse est immédiate (le cas de base). Combiner : on construit la solution du problème initial à partir des solutions des sous-problèmes.",
                "La récursivité est l'outil naturel de cette méthode : la fonction s'appelle elle-même sur les sous-problèmes. L'intérêt est l'efficacité : en coupant le problème en deux à chaque étape, on n'a besoin que d'environ log₂(n) niveaux de découpage pour arriver à des problèmes de taille 1. Pour n = 1 024, cela fait 10 niveaux seulement.",
                "Vous connaissez déjà un algorithme de cette famille : la recherche dichotomique dans une liste triée. On compare la valeur cherchée à l'élément du milieu, puis on ne cherche que dans la moitié utile. Il n'y a ici qu'un seul sous-problème à résoudre et rien à combiner, et le coût est logarithmique.",
              ],
              box: { label: "Méthode", text: "Diviser pour régner : 1. diviser le problème en sous-problèmes plus petits de même nature ; 2. régner, c'est-à-dire résoudre chaque sous-problème (récursivement, jusqu'au cas de base) ; 3. combiner les solutions partielles." },
            },
            {
              heading: "Le tri fusion",
              paragraphs: [
                "Le tri fusion applique cette méthode au tri d'une liste. Diviser : on coupe la liste en deux moitiés. Régner : on trie récursivement chaque moitié ; une liste de longueur 0 ou 1 est déjà triée (cas de base). Combiner : on fusionne les deux moitiés triées en une seule liste triée.",
                "La fusion de deux listes triées se fait en un seul passage : on compare les premiers éléments restants des deux listes, on place le plus petit dans le résultat et on avance dans la liste d'où il vient ; quand une liste est vide, on ajoute la fin de l'autre. Exemple : fusionner [3, 27, 38] et [9, 10, 43] donne 3, puis 9, puis 10, puis 27, puis 38, puis 43.",
                "En Python, une version récursive de la fusion s'écrit ainsi. Ligne 1 : def fusion(a, b): ; ligne 2, dans la fonction : if a == []: return b ; ligne 3 : if b == []: return a ; ligne 4 : if a[0] <= b[0]: return [a[0]] + fusion(a[1:], b) ; ligne 5 : else: return [b[0]] + fusion(a, b[1:]). Le tri s'écrit alors : def tri_fusion(t): ; puis, dans la fonction, if len(t) <= 1: return t ; m = len(t) // 2 ; return fusion(tri_fusion(t[:m]), tri_fusion(t[m:])).",
              ],
              box: { label: "Algorithme", text: "tri_fusion(t) : si len(t) ≤ 1, renvoyer t ; sinon m = len(t) // 2, trier récursivement t[:m] et t[m:], puis renvoyer la fusion des deux moitiés triées." },
            },
            {
              heading: "Le coût du tri fusion",
              paragraphs: [
                "Comptons les comparaisons. Fusionner deux listes dont les longueurs totalisent k demande au plus k - 1 comparaisons, donc moins de k. À chaque niveau de découpage, les fusions portent au total sur les n éléments de la liste : chaque niveau coûte moins de n comparaisons. Comme il y a environ log₂(n) niveaux, le coût total est de l'ordre de n × log₂(n). On dit que le tri fusion a une complexité en O(n log n), dans tous les cas, même le pire.",
                "Les tris par insertion et par sélection, vus en première, ont un coût de l'ordre de n² dans le pire des cas. La différence est énorme pour de grandes listes : pour n = 1 000, n² vaut un million alors que n × log₂(n) vaut environ 10 000 ; pour n = 1 000 000, n² vaut 10¹² alors que n × log₂(n) vaut environ 2 × 10⁷. Un tri qui prendrait plusieurs heures en n² prend moins d'une seconde en n log n.",
                "Le tri fusion a une contrepartie : la version présentée ici crée de nouvelles listes et utilise donc de la mémoire supplémentaire, alors que les tris par insertion et par sélection peuvent trier la liste sur place. Le tri intégré de Python (sorted et la méthode sort) est un algorithme hybride qui s'inspire du tri fusion et du tri par insertion.",
              ],
              box: { label: "Propriété", text: "Le tri fusion a un coût en O(n log n) dans tous les cas : environ log₂(n) niveaux de découpage, et moins de n comparaisons par niveau. Les tris par insertion et par sélection coûtent O(n²) dans le pire des cas." },
            },
            {
              heading: "D'autres exemples",
              paragraphs: [
                "L'exponentiation rapide calcule xⁿ en utilisant xⁿ = (x^(n/2))² si n est pair et xⁿ = (x^((n-1)/2))² × x si n est impair. Ligne 1 : def puissance(x, n): ; ligne 2, dans la fonction : if n == 0: return 1 ; ligne 3 : p = puissance(x, n // 2) ; ligne 4 : if n % 2 == 0: return p * p ; ligne 5 : else: return p * p * x. Le nombre d'appels est de l'ordre de log₂(n) au lieu des n - 1 multiplications du calcul naïf.",
                "On peut aussi chercher le maximum d'une liste en prenant le maximum des maxima de ses deux moitiés. Ce n'est pas plus rapide qu'un simple parcours, mais c'est un bon entraînement à la méthode. Retenez que « diviser pour régner » est surtout rentable quand l'étape de combinaison est peu coûteuse et que les sous-problèmes sont de tailles équilibrées.",
              ],
            },
          ],
          keyPoints: [
            "Diviser pour régner : diviser en sous-problèmes, les résoudre (récursivement), combiner les solutions.",
            "Tri fusion : couper en deux, trier chaque moitié, fusionner ; cas de base : liste de longueur 0 ou 1.",
            "La fusion de deux listes triées se fait en un passage : on prend à chaque fois le plus petit des deux premiers éléments.",
            "Coût du tri fusion : O(n log n) dans tous les cas ; insertion et sélection : O(n²) dans le pire des cas.",
            "Recherche dichotomique et exponentiation rapide sont d'autres exemples, de coût logarithmique.",
          ],
          example: {
            statement: "Déroulez le tri fusion sur la liste [38, 27, 43, 3, 9, 82, 10], en coupant à l'indice m = len(t) // 2.",
            solution: [
              "Division : len = 7, m = 3. On obtient [38, 27, 43] et [3, 9, 82, 10].",
              "Moitié gauche : m = 1, on obtient [38] et [27, 43] ; [27, 43] se coupe en [27] et [43], dont la fusion donne [27, 43]. Fusion de [38] et [27, 43] : 27, puis 38, puis 43, soit [27, 38, 43].",
              "Moitié droite : m = 2, on obtient [3, 9] et [82, 10]. [3, 9] donne [3] et [9], fusionnés en [3, 9] ; [82, 10] donne [82] et [10], fusionnés en [10, 82].",
              "Fusion de [3, 9] et [10, 82] : 3, 9, puis la liste gauche est vide, on ajoute 10 et 82 : [3, 9, 10, 82].",
              "Fusion finale de [27, 38, 43] et [3, 9, 10, 82] : 27 contre 3, on place 3 ; 27 contre 9, on place 9 ; 27 contre 10, on place 10 ; 27 contre 82, on place 27 ; 38 contre 82, on place 38 ; 43 contre 82, on place 43 ; la liste gauche est vide, on ajoute 82.",
              "Résultat : [3, 9, 10, 27, 38, 43, 82].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Fusionnez les listes triées a = [2, 5, 9] et b = [1, 6, 7, 12] en détaillant chaque comparaison. Combien de comparaisons sont effectuées ?",
              hint: "À chaque étape, comparez les premiers éléments restants de a et de b, et placez le plus petit dans le résultat.",
              solution: [
                "2 et 1 : on place 1. 2 et 6 : on place 2. 5 et 6 : on place 5. 9 et 6 : on place 6. 9 et 7 : on place 7. 9 et 12 : on place 9.",
                "La liste a est vide : on ajoute la fin de b, c'est-à-dire 12, sans comparaison.",
                "Résultat : [1, 2, 5, 6, 7, 9, 12], obtenu avec 6 comparaisons (au plus 3 + 4 - 1 = 6).",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction suivante. Ligne 1 : def maximum(t, g, d): ; ligne 2, dans la fonction : if g == d: return t[g] ; ligne 3 : m = (g + d) // 2 ; ligne 4 : a = maximum(t, g, m) ; ligne 5 : b = maximum(t, m + 1, d) ; ligne 6 : if a > b: return a ; ligne 7 : else: return b. a) Identifiez les trois étapes de « diviser pour régner ». b) Quelle valeur renvoie maximum([4, 9, 2, 7], 0, 3) ? c) Combien d'appels à maximum sont effectués au total (appel initial compris) ?",
              hint: "Dessinez l'arbre des appels : chaque appel où g < d en provoque deux autres.",
              solution: [
                "a) Diviser : ligne 3, on coupe l'intervalle [g, d] en deux. Régner : lignes 4 et 5, appels récursifs, avec le cas de base ligne 2 (une seule case). Combiner : lignes 6 et 7, on garde le plus grand des deux maxima.",
                "b) maximum(t, 0, 3) : m = 1, appelle maximum(t, 0, 1) et maximum(t, 2, 3). maximum(t, 0, 1) : m = 0, renvoie le plus grand de t[0] = 4 et t[1] = 9, soit 9. maximum(t, 2, 3) renvoie le plus grand de 2 et 7, soit 7. Le plus grand de 9 et 7 est 9.",
                "c) Appels : maximum(0, 3), puis maximum(0, 1) et maximum(2, 3), puis les quatre appels sur une case : 1 + 2 + 4 = 7 appels.",
                "Résultat : la fonction renvoie 9 après 7 appels.",
              ],
            },
            {
              level: 3,
              statement: "On considère la fonction puissance du cours : def puissance(x, n): ; if n == 0: return 1 ; p = puissance(x, n // 2) ; if n % 2 == 0: return p * p ; else: return p * p * x. a) Donnez la suite des valeurs de n lors des appels de puissance(3, 13). b) Comptez le nombre de multiplications effectuées et comparez avec le calcul naïf 3 × 3 × ... × 3. c) Vérifiez que le résultat vaut 1 594 323. d) Justifiez que le nombre d'appels est de l'ordre de log₂(n).",
              hint: "À chaque appel, n est remplacé par n // 2. Un appel avec n pair fait une multiplication, un appel avec n impair en fait deux, l'appel avec n = 0 n'en fait aucune.",
              solution: [
                "a) n vaut successivement 13, 6, 3, 1, 0 : il y a 5 appels.",
                "b) n = 0 : 0 multiplication ; n = 1 (impair) : 2 ; n = 3 (impair) : 2 ; n = 6 (pair) : 1 ; n = 13 (impair) : 2. Total : 7 multiplications, contre 12 pour le calcul naïf (13 facteurs, donc 12 multiplications).",
                "c) Les appels renvoient : n = 0 : 1 ; n = 1 : 1 × 1 × 3 = 3 ; n = 3 : 3 × 3 × 3 = 27 ; n = 6 : 27 × 27 = 729 ; n = 13 : 729 × 729 × 3 = 531 441 × 3 = 1 594 323.",
                "d) À chaque appel, n est divisé par 2 (division entière) : partant de n, on atteint 0 après environ log₂(n) + 1 appels. Chaque appel fait au plus 2 multiplications : le coût est en O(log n), contre O(n) pour le calcul naïf.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : diviser pour régner et tri fusion.",
            statements: [
              { text: "Le tri fusion coupe la liste en deux, trie chaque moitié, puis fusionne les deux moitiés triées.", true: true, why: "Ce sont exactement les trois étapes : diviser, régner, combiner." },
              { text: "Le tri fusion a un coût en O(n²) dans le pire des cas, comme le tri par insertion.", true: false, why: "Son coût est en O(n log n) dans tous les cas : c'est tout son intérêt." },
              { text: "Fusionner deux listes triées de longueurs 4 et 5 demande au plus 8 comparaisons.", true: true, why: "Chaque comparaison place un élément ; le dernier se place sans comparaison : au plus 4 + 5 - 1 = 8." },
              { text: "Une liste de longueur 1 doit encore être coupée en deux avant d'être triée.", true: false, why: "C'est le cas de base : une liste de longueur 0 ou 1 est déjà triée." },
              { text: "Pour n = 1 024, le tri fusion découpe la liste sur 10 niveaux.", true: true, why: "2¹⁰ = 1 024 : on divise 10 fois par 2 pour arriver à des listes de taille 1." },
              { text: "Diviser pour régner donne toujours un algorithme plus rapide qu'un simple parcours.", true: false, why: "Le maximum par diviser pour régner coûte autant qu'un parcours : le gain dépend du problème et du coût de la combinaison." },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les trois étapes de la méthode « diviser pour régner » ?",
              options: ["Trier, chercher, afficher", "Initialiser, boucler, renvoyer", "Diviser, régner, combiner", "Découper, compter, comparer"],
              answer: 2,
              why: "On divise en sous-problèmes, on les résout (régner), puis on combine leurs solutions.",
            },
            {
              q: "Quel est le coût du tri fusion sur une liste de n éléments ?",
              options: ["O(n)", "O(log n)", "O(n²) dans le pire des cas", "O(n log n) dans tous les cas"],
              answer: 3,
              why: "Il y a environ log₂(n) niveaux de découpage et moins de n comparaisons par niveau.",
            },
            {
              q: "Quel est le cas de base de la fonction tri_fusion ?",
              options: ["Une liste de longueur 0 ou 1, renvoyée telle quelle", "Une liste déjà triée, détectée par un parcours", "Une liste de longueur 2, que l'on trie avec une seule comparaison", "Il n'y a pas de cas de base"],
              answer: 0,
              why: "Une liste de 0 ou 1 élément est triée : la récursivité s'arrête là. Sans cas de base, la fonction ne terminerait pas.",
            },
            {
              q: "Que donne la fusion de [1, 4, 8] et [2, 3, 9] ?",
              options: ["[1, 4, 8, 2, 3, 9]", "[1, 2, 3, 4, 8, 9]", "[1, 2, 4, 3, 8, 9]", "[2, 3, 9, 1, 4, 8]"],
              answer: 1,
              why: "On prend à chaque étape le plus petit des deux premiers éléments : 1, 2, 3, 4, 8, puis 9.",
            },
            {
              q: "Pour n = 1 000 000, environ combien de fois le tri fusion est-il plus rapide qu'un tri en n² ?",
              options: ["2 fois", "1 000 fois", "1 000 000 fois", "50 000 fois"],
              answer: 3,
              why: "n² = 10¹² et n × log₂(n) ≈ 2 × 10⁷ : le rapport vaut environ 10¹² ÷ (2 × 10⁷) = 50 000.",
            },
          ],
          trap: "Écrire tri_fusion sans renvoyer le résultat de la fusion (ou trier les moitiés sans les fusionner), et oublier le cas de base, ce qui provoque une récursion infinie. Dans la fusion, on oublie aussi souvent d'ajouter la fin de la liste qui n'est pas vide.",
          method: "Pour dérouler un tri fusion, dessinez l'arbre des découpages de haut en bas, puis remontez en écrivant sous chaque nœud le résultat de la fusion. Vérifiez à chaque fusion que la liste obtenue est triée et contient tous les éléments des deux listes de départ.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'programmation-dynamique',
          title: 'La programmation dynamique',
          minutes: 35,
          objectives: [
            "Utiliser la programmation dynamique pour écrire un algorithme.",
            "Repérer des sous-problèmes qui se chevauchent et mémoriser leurs résultats (mémoïsation).",
            "Construire une solution ascendante à l'aide d'un tableau, par exemple pour le rendu de monnaie.",
            "Discuter du coût en temps et en mémoire d'un algorithme de programmation dynamique.",
          ],
          course: [
            {
              heading: "Quand la récursivité recalcule sans cesse",
              paragraphs: [
                "La suite de Fibonacci est définie par F(0) = 0, F(1) = 1 et F(n) = F(n - 1) + F(n - 2). La traduction directe en Python est : def fib(n): ; if n <= 1: return n ; return fib(n - 1) + fib(n - 2). Elle est juste, mais extrêmement lente : fib(5) appelle fib(4) et fib(3), mais fib(4) appelle à son tour fib(3) : fib(3) est calculé deux fois, fib(2) trois fois, et ainsi de suite.",
                "Le nombre d'appels C(n) vérifie C(0) = C(1) = 1 et C(n) = 1 + C(n - 1) + C(n - 2) : il vaut 15 pour n = 5, 25 pour n = 6, et dépasse 2,6 millions pour n = 30. Il croît exponentiellement. Pourtant, il n'y a que n + 1 valeurs différentes à calculer : le problème vient de ce que les sous-problèmes se chevauchent et sont résolus de nombreuses fois.",
                "C'est la différence avec « diviser pour régner », où les sous-problèmes (les deux moitiés d'une liste) sont indépendants. La programmation dynamique, méthode formalisée par Richard Bellman dans les années 1950, s'applique quand un problème se décompose en sous-problèmes qui se chevauchent : on résout chaque sous-problème une seule fois et on mémorise son résultat.",
              ],
              box: { label: "Définition", text: "La programmation dynamique résout un problème en le décomposant en sous-problèmes qui se chevauchent, en résolvant chacun une seule fois et en mémorisant les résultats pour les réutiliser." },
            },
            {
              heading: "Première approche : la mémoïsation",
              paragraphs: [
                "La mémoïsation garde la fonction récursive, mais enregistre chaque résultat dans un dictionnaire. Avant de calculer, on regarde si la réponse est déjà connue. Ligne 1 : def fib(n, memo): ; ligne 2, dans la fonction : if n in memo: return memo[n] ; ligne 3 : if n <= 1: r = n ; ligne 4 : else: r = fib(n - 1, memo) + fib(n - 2, memo) ; ligne 5 : memo[n] = r ; ligne 6 : return r. On l'appelle avec fib(30, {}).",
                "Chaque valeur de 0 à n n'est calculée qu'une fois : le nombre de calculs devient proportionnel à n, au prix d'un dictionnaire de n + 1 entrées. On parle d'approche descendante : on part du problème de taille n et on descend vers les petits cas, comme dans la version récursive.",
              ],
              box: { label: "À retenir", text: "Mémoïsation : avant de calculer, chercher le résultat dans un dictionnaire ; après l'avoir calculé, l'y enregistrer. On échange de la mémoire contre du temps." },
            },
            {
              heading: "Seconde approche : la méthode ascendante",
              paragraphs: [
                "La méthode ascendante supprime la récursivité : on remplit un tableau en partant des plus petits cas, de sorte que chaque case se calcule à partir de cases déjà remplies. Ligne 1 : def fib(n): ; ligne 2 : f = [0] * (n + 1) ; ligne 3 : if n >= 1: f[1] = 1 ; ligne 4 : for i in range(2, n + 1): ; ligne 5, dans la boucle : f[i] = f[i - 1] + f[i - 2] ; ligne 6, après la boucle : return f[n].",
                "Le coût en temps est proportionnel à n, et l'on évite la limite de profondeur de récursivité de Python (environ 1 000 appels par défaut). Le coût en mémoire est aussi proportionnel à n ; on peut même le réduire à deux variables, puisque chaque terme ne dépend que des deux précédents. Écrire une solution de programmation dynamique, c'est donc toujours : définir précisément le sous-problème, écrire la relation de récurrence entre sous-problèmes, fixer les cas de base, puis choisir l'ordre de remplissage.",
              ],
            },
            {
              heading: "Le rendu de monnaie",
              paragraphs: [
                "Problème : rendre une somme s avec le moins de pièces possible, en disposant de pièces de valeurs données en quantité illimitée. L'algorithme glouton, qui prend toujours la plus grosse pièce possible, est optimal pour le système d'euros, mais pas pour tous les systèmes. Avec des pièces de 1, 3 et 4 et s = 6, le glouton rend 4 + 1 + 1 (3 pièces) alors que 3 + 3 n'en utilise que 2.",
                "Programmation dynamique : notons nb(x) le nombre minimal de pièces pour rendre x. Pour rendre x, on choisit une première pièce p ≤ x, puis on rend au mieux x - p. D'où la relation nb(0) = 0 et nb(x) = 1 + min(nb(x - p)) pour toutes les pièces p ≤ x. On remplit le tableau pour x = 0, 1, 2, ..., s.",
                "Avec les pièces 1, 3, 4 : nb(0) = 0, nb(1) = 1, nb(2) = 2, nb(3) = 1, nb(4) = 1, nb(5) = 1 + min(nb(4), nb(2), nb(1)) = 2, nb(6) = 1 + min(nb(5), nb(3), nb(2)) = 1 + 1 = 2. En Python : nb = [0] * (s + 1), puis pour x de 1 à s : nb[x] = 1 + min(nb[x - p] for p in pieces if p <= x), en supposant qu'une pièce de 1 existe pour que toute somme soit rendable.",
              ],
              box: { label: "Formule", text: "Rendu de monnaie : nb(0) = 0 et, pour x ≥ 1, nb(x) = 1 + min(nb(x - p)) pour toutes les pièces p ≤ x. On remplit nb(0), nb(1), ..., nb(s) dans l'ordre croissant." },
            },
          ],
          keyPoints: [
            "La programmation dynamique s'applique quand les sous-problèmes se chevauchent : on résout chacun une seule fois.",
            "Mémoïsation (descendante) : fonction récursive et dictionnaire des résultats déjà calculés.",
            "Méthode ascendante : tableau rempli des petits cas vers les grands, sans récursivité.",
            "Fibonacci naïf : nombre d'appels exponentiel ; en programmation dynamique : coût proportionnel à n.",
            "Rendu de monnaie : nb(0) = 0, nb(x) = 1 + min(nb(x - p)) ; le glouton n'est pas toujours optimal.",
            "On gagne du temps au prix d'une mémoire supplémentaire (le tableau ou le dictionnaire).",
          ],
          example: {
            statement: "Avec des pièces de 1, 3 et 4, on veut rendre 6. a) Quelle solution donne l'algorithme glouton ? b) Remplissez le tableau nb(x) pour x de 0 à 6 par programmation dynamique. c) Retrouvez une solution optimale.",
            solution: [
              "a) Glouton : la plus grosse pièce possible est 4, il reste 2 ; puis 1, il reste 1 ; puis 1. Solution 4 + 1 + 1, soit 3 pièces.",
              "b) nb(0) = 0 ; nb(1) = 1 + nb(0) = 1 ; nb(2) = 1 + nb(1) = 2 ; nb(3) = 1 + min(nb(2), nb(0)) = 1.",
              "nb(4) = 1 + min(nb(3), nb(1), nb(0)) = 1 ; nb(5) = 1 + min(nb(4), nb(2), nb(1)) = 1 + 1 = 2.",
              "nb(6) = 1 + min(nb(5), nb(3), nb(2)) = 1 + min(2, 1, 2) = 2.",
              "c) Le minimum pour 6 est atteint avec la pièce 3 (nb(3) = 1), et nb(3) est atteint avec la pièce 3 : la solution optimale est 3 + 3.",
              "Réponse : 2 pièces (3 + 3), contre 3 pour le glouton.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez F(10) avec la méthode ascendante en remplissant le tableau f[0], f[1], ..., f[10], avec f[0] = 0, f[1] = 1 et f[i] = f[i - 1] + f[i - 2]. Combien d'additions avez-vous effectuées ?",
              hint: "Remplissez les cases de gauche à droite : chaque case est la somme des deux précédentes.",
              solution: [
                "f[0] = 0, f[1] = 1, f[2] = 1, f[3] = 2, f[4] = 3, f[5] = 5.",
                "f[6] = 8, f[7] = 13, f[8] = 21, f[9] = 34, f[10] = 55.",
                "On a fait une addition par case de f[2] à f[10], soit 9 additions.",
                "Résultat : F(10) = 55, obtenu avec 9 additions.",
              ],
            },
            {
              level: 2,
              statement: "On utilise la version récursive naïve def fib(n): if n <= 1: return n ; return fib(n - 1) + fib(n - 2). a) En notant C(n) le nombre total d'appels pour calculer fib(n), justifiez que C(0) = C(1) = 1 et C(n) = 1 + C(n - 1) + C(n - 2). b) Calculez C(6). c) Combien de calculs distincts effectue la version mémoïsée pour fib(6) ? d) Expliquez la différence.",
              hint: "Un appel fib(n) compte pour 1, plus tous les appels déclenchés par fib(n - 1) et par fib(n - 2).",
              solution: [
                "a) fib(0) et fib(1) ne déclenchent aucun autre appel : C(0) = C(1) = 1. Pour n ≥ 2, l'appel fib(n) compte pour 1 et déclenche fib(n - 1) et fib(n - 2), d'où C(n) = 1 + C(n - 1) + C(n - 2).",
                "b) C(2) = 1 + 1 + 1 = 3 ; C(3) = 1 + 3 + 1 = 5 ; C(4) = 1 + 5 + 3 = 9 ; C(5) = 1 + 9 + 5 = 15 ; C(6) = 1 + 15 + 9 = 25.",
                "c) La version mémoïsée calcule chaque valeur fib(0), fib(1), ..., fib(6) une seule fois : 7 calculs distincts ; les autres appels trouvent immédiatement le résultat dans le dictionnaire.",
                "d) La version naïve recalcule les mêmes sous-problèmes (fib(2) est calculé 5 fois pour n = 6) ; la mémoïsation supprime ces répétitions. Résultat : 25 appels contre 7 calculs.",
              ],
            },
            {
              level: 3,
              statement: "Un robot se déplace dans une grille de 3 lignes et 3 colonnes, de la case en haut à gauche à la case en bas à droite, uniquement vers la droite ou vers le bas. Chaque case contient des pièces : ligne 0 : 2, 1, 3 ; ligne 1 : 4, 1, 2 ; ligne 2 : 1, 5, 1. Il ramasse les pièces de toutes les cases traversées (départ et arrivée compris). a) On note S[i][j] le maximum de pièces ramassées en arrivant sur la case (i, j). Écrivez la relation entre S[i][j], S[i - 1][j] et S[i][j - 1]. b) Remplissez le tableau S. c) Donnez le maximum et un chemin qui l'atteint. d) Combien de chemins un algorithme qui les essaierait tous devrait-il examiner ?",
              hint: "On arrive sur (i, j) soit depuis la case du dessus, soit depuis la case de gauche. Sur la première ligne et la première colonne, il n'y a qu'une façon d'arriver.",
              solution: [
                "a) Pour i ≥ 1 et j ≥ 1 : S[i][j] = grille[i][j] + max(S[i - 1][j], S[i][j - 1]). Sur la ligne 0 : S[0][j] = S[0][j - 1] + grille[0][j] ; sur la colonne 0 : S[i][0] = S[i - 1][0] + grille[i][0] ; et S[0][0] = 2.",
                "b) Ligne 0 : 2, 3, 6. Ligne 1 : S[1][0] = 2 + 4 = 6 ; S[1][1] = 1 + max(3, 6) = 7 ; S[1][2] = 2 + max(6, 7) = 9.",
                "Ligne 2 : S[2][0] = 6 + 1 = 7 ; S[2][1] = 5 + max(7, 7) = 12 ; S[2][2] = 1 + max(9, 12) = 13.",
                "c) Le maximum est S[2][2] = 13. En remontant : 13 vient de 12 (case (2, 1)), qui vient de (1, 1) ou de (2, 0) ; par exemple le chemin 2 → 4 → 1 → 5 → 1 (bas, droite, bas, droite) donne 2 + 4 + 1 + 5 + 1 = 13.",
                "d) Un chemin comporte 2 déplacements à droite et 2 vers le bas, dans un ordre quelconque : il y a 6 chemins (le nombre de façons de placer 2 « droite » parmi 4 déplacements). Ce nombre explose pour de grandes grilles, alors que la programmation dynamique ne calcule qu'une valeur par case.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa description.",
            pairs: [
              { left: "Sous-problèmes qui se chevauchent", right: "Les mêmes calculs reviennent plusieurs fois dans la récursivité" },
              { left: "Mémoïsation", right: "Enregistrer chaque résultat dans un dictionnaire pour ne pas le recalculer" },
              { left: "Méthode ascendante", right: "Remplir un tableau des petits cas vers les grands" },
              { left: "Algorithme glouton", right: "Choisir à chaque étape la meilleure option immédiate" },
              { left: "Relation de récurrence", right: "Exprime la solution d'un problème à partir de sous-problèmes" },
              { left: "Coût en mémoire", right: "Taille du tableau ou du dictionnaire des résultats" },
            ],
          },
          quiz: [
            {
              q: "Dans quel cas la programmation dynamique est-elle utile ?",
              options: ["Quand le problème n'a aucun sous-problème", "Quand des sous-problèmes identiques reviennent plusieurs fois", "Quand la liste est déjà triée", "Quand on veut éviter d'utiliser la moindre mémoire supplémentaire pendant le calcul"],
              answer: 1,
              why: "Elle évite de recalculer des sous-problèmes qui se chevauchent, en mémorisant leurs résultats, ce qui demande au contraire de la mémoire.",
            },
            {
              q: "Que fait la ligne « if n in memo: return memo[n] » dans une fonction mémoïsée ?",
              options: ["Elle renvoie un résultat déjà calculé sans refaire le calcul", "Elle supprime le résultat du dictionnaire", "Elle déclenche un appel récursif supplémentaire pour vérifier le résultat obtenu", "Elle vérifie que n est un entier positif"],
              answer: 0,
              why: "Si le résultat est déjà dans le dictionnaire, on le renvoie immédiatement : c'est ce qui supprime les calculs répétés.",
            },
            {
              q: "Avec des pièces de 1, 5, 6 et 9, combien de pièces faut-il au minimum pour rendre 11 ?",
              options: ["3", "4", "2", "1"],
              answer: 2,
              why: "5 + 6 = 11 utilise 2 pièces ; le glouton donnerait 9 + 1 + 1, soit 3 pièces.",
            },
            {
              q: "Quel est l'ordre de grandeur du nombre d'appels de la version naïve de fib(n) ?",
              options: ["Proportionnel à n", "Proportionnel à log n", "Constant", "Exponentiel en n"],
              answer: 3,
              why: "C(n) = 1 + C(n - 1) + C(n - 2) croît comme la suite de Fibonacci elle-même, de façon exponentielle.",
            },
            {
              q: "Quelle relation donne nb(x), le nombre minimal de pièces pour rendre x ?",
              options: ["nb(x) = 1 + min(nb(x - p)) pour les pièces p ≤ x", "nb(x) = nb(x - 1) + 1", "nb(x) = x ÷ (plus grande pièce)", "nb(x) = max(nb(x - p)) pour les pièces p ≤ x"],
              answer: 0,
              why: "On choisit une première pièce p, puis on rend x - p au mieux : on garde le meilleur choix de p et on ajoute 1 pour la pièce p.",
            },
          ],
          trap: "Confondre programmation dynamique et algorithme glouton : le glouton fait un choix local définitif et peut se tromper, alors que la programmation dynamique compare toutes les possibilités grâce aux résultats mémorisés. Autre erreur : remplir le tableau dans un ordre où une case utilise une case pas encore calculée.",
          method: "Avant d'écrire du code, rédigez en français les quatre éléments : ce que représente une case du tableau, la relation de récurrence, les cas de base, l'ordre de remplissage. Remplissez ensuite le tableau à la main sur un petit exemple : si le tableau est juste, le code n'est plus qu'une traduction.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'recherche-textuelle',
          title: 'La recherche textuelle : l\'algorithme de Boyer-Moore',
          minutes: 35,
          objectives: [
            "Écrire l'algorithme naïf de recherche d'un motif dans un texte.",
            "Étudier l'algorithme de Boyer-Moore pour la recherche d'un motif dans un texte.",
            "Construire la table des décalages d'un motif et dérouler l'algorithme à la main.",
            "Expliquer l'intérêt du prétraitement du motif.",
          ],
          course: [
            {
              heading: "Le problème et l'algorithme naïf",
              paragraphs: [
                "Rechercher un motif (une chaîne de longueur m) dans un texte (de longueur n), c'est trouver toutes les positions i telles que texte[i : i + m] == motif. C'est ce que fait la commande « Rechercher » d'un éditeur, un moteur de recherche dans un document, ou un logiciel qui cherche une séquence dans un génome (un texte écrit avec les lettres A, C, G, T).",
                "L'algorithme naïf essaie toutes les positions i de 0 à n - m. Pour chacune, il compare le motif au texte caractère par caractère, de gauche à droite, et s'arrête au premier caractère différent. Ensuite, il décale le motif d'une seule position. Dans le pire des cas (par exemple le motif AAAB dans un texte formé uniquement de A), il fait environ (n - m + 1) × m comparaisons, ce qui est très coûteux pour de longs motifs.",
                "En Python : def recherche_naive(texte, motif): ; puis res = [] ; for i in range(len(texte) - len(motif) + 1): ; dans la boucle, j = 0 ; while j < len(motif) and texte[i + j] == motif[j]: j = j + 1 ; if j == len(motif): res.append(i) ; et, après la boucle, return res.",
              ],
            },
            {
              heading: "L'idée de Boyer-Moore",
              paragraphs: [
                "L'algorithme publié par Robert Boyer et J Strother Moore en 1977 repose sur deux idées. Première idée : on compare le motif au texte de droite à gauche, en commençant par le dernier caractère du motif. Seconde idée : en cas de différence, on utilise le caractère du texte pour décaler le motif de plusieurs positions d'un coup, au lieu d'une seule.",
                "Exemple : on cherche « CTAG ». Si le caractère du texte placé sous la dernière lettre du motif est un X, lettre absente du motif, aucune occurrence ne peut contenir ce X : on peut décaler le motif de toute sa longueur, 4 positions. Si ce caractère est un C, on aligne le C du motif sous lui, en décalant de 3. Ces décalages ne dépendent que du motif : on les calcule une fois pour toutes avant la recherche. C'est le prétraitement du motif.",
                "Nous étudions la version simplifiée proposée par Nigel Horspool en 1980, la plus fréquente au lycée : le décalage dépend uniquement du caractère du texte aligné avec la dernière lettre du motif. L'algorithme complet de Boyer-Moore ajoute une seconde règle (le « bon suffixe ») ; dans un sujet, la règle de décalage est toujours précisée : appliquez celle de l'énoncé.",
              ],
              box: { label: "À retenir", text: "Boyer-Moore : on compare de droite à gauche et, en cas d'échec, on décale le motif de plusieurs positions grâce à une table calculée à l'avance à partir du motif (prétraitement)." },
            },
            {
              heading: "La table des décalages",
              paragraphs: [
                "Pour un motif de longueur m, on associe à chaque caractère c un décalage d(c). Si c apparaît dans le motif ailleurs qu'à la dernière position, d(c) = m - 1 - k, où k est l'indice de la dernière apparition de c parmi les positions 0 à m - 2. Sinon, d(c) = m. La dernière lettre du motif n'est donc pas prise en compte, sauf si elle apparaît aussi avant.",
                "Exemple avec « CTAG » (m = 4) : C est à l'indice 0, d(C) = 4 - 1 - 0 = 3 ; T est à l'indice 1, d(T) = 2 ; A est à l'indice 2, d(A) = 1 ; G n'apparaît qu'en dernière position, d(G) = 4, comme toute lettre absente. En Python : def table(motif): ; d = {} ; for k in range(len(motif) - 1): d[motif[k]] = len(motif) - 1 - k ; return d. Comme on parcourt le motif de gauche à droite, la dernière apparition écrase les précédentes.",
              ],
              box: { label: "Formule", text: "d(c) = m - 1 - k, où k est l'indice de la dernière apparition de c dans motif[0 .. m - 2] ; d(c) = m si c n'y apparaît pas. Le décalage est lu sur le caractère du texte aligné avec la dernière lettre du motif." },
            },
            {
              heading: "L'algorithme et son intérêt",
              paragraphs: [
                "On place le motif à la position i = 0. Tant que i ≤ n - m : on compare motif[j] et texte[i + j] pour j = m - 1, m - 2, ... tant qu'ils sont égaux ; si toutes les lettres coïncident, on a trouvé une occurrence en i. Dans tous les cas, on décale ensuite de d(texte[i + m - 1]), le décalage du caractère du texte aligné avec la dernière lettre du motif (valant m s'il n'est pas dans la table).",
                "En Python : d = table(motif) ; i = 0 ; while i <= n - m: ; dans la boucle, j = m - 1 ; while j >= 0 and texte[i + j] == motif[j]: j = j - 1 ; if j == -1: res.append(i) ; i = i + d.get(texte[i + m - 1], m). La méthode get renvoie m quand le caractère n'est pas une clé du dictionnaire.",
                "L'intérêt est d'autant plus grand que le motif est long et que l'alphabet est riche : beaucoup de caractères du texte sont absents du motif, et l'on avance alors de m positions en ne faisant qu'une comparaison. Dans les cas favorables, on n'examine qu'environ n ÷ m caractères du texte. C'est pourquoi des variantes de cet algorithme équipent les outils de recherche des éditeurs. L'étude précise du coût dans le pire des cas est difficile et n'est pas exigible.",
              ],
            },
          ],
          keyPoints: [
            "Algorithme naïf : on teste chaque position, comparaison de gauche à droite, décalage de 1 ; jusqu'à environ n × m comparaisons.",
            "Boyer-Moore (version Horspool) : comparaison de droite à gauche et décalages calculés à l'avance.",
            "Table : d(c) = m - 1 - k (dernière apparition de c avant la dernière position), m si c est absent.",
            "Le décalage se lit sur le caractère du texte aligné avec la dernière lettre du motif, qu'on ait trouvé une occurrence ou non.",
            "Le prétraitement du motif permet de sauter de nombreuses positions, surtout avec un long motif et un grand alphabet.",
          ],
          example: {
            statement: "On cherche le motif « CTAG » dans le texte « GATCTTCTAGCA » (indices 0 à 11) avec l'algorithme de Boyer-Moore-Horspool. Table : d(C) = 3, d(T) = 2, d(A) = 1, autres lettres : 4. Déroulez l'algorithme et comptez les comparaisons, puis comparez avec l'algorithme naïf.",
            solution: [
              "n = 12, m = 4 : les positions possibles vont de 0 à 8. Texte : G(0) A(1) T(2) C(3) T(4) T(5) C(6) T(7) A(8) G(9) C(10) A(11).",
              "i = 0 : on compare motif[3] = G et texte[3] = C : différents (1 comparaison). Décalage d(texte[3]) = d(C) = 3, donc i = 3.",
              "i = 3 : motif[3] = G et texte[6] = C : différents (1 comparaison). Décalage d(C) = 3, donc i = 6.",
              "i = 6 : G = G (texte[9]), A = A (texte[8]), T = T (texte[7]), C = C (texte[6]) : occurrence à la position 6 (4 comparaisons). Décalage d(texte[9]) = d(G) = 4, donc i = 10 > 8 : fin.",
              "Boyer-Moore : 3 positions examinées, 6 comparaisons. L'algorithme naïf examine les 9 positions de 0 à 8 et fait 1 + 1 + 1 + 3 + 1 + 1 + 4 + 1 + 1 = 14 comparaisons.",
              "Réponse : une occurrence, à la position 6 ; 6 comparaisons au lieu de 14.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Construisez la table des décalages de Boyer-Moore-Horspool pour le motif « RADAR ». Quel est le décalage associé à la lettre Z ?",
              hint: "m = 5 : on ne regarde que les positions 0 à 3 (R, A, D, A) et l'on garde, pour chaque lettre, sa dernière apparition.",
              solution: [
                "Le motif a pour longueur m = 5 ; positions 0 à 3 : R(0), A(1), D(2), A(3).",
                "R : dernière apparition (hors dernière position) à l'indice 0, d(R) = 5 - 1 - 0 = 4.",
                "A : dernière apparition à l'indice 3, d(A) = 5 - 1 - 3 = 1. D : indice 2, d(D) = 5 - 1 - 2 = 2.",
                "Toute autre lettre, comme Z, est absente : d(Z) = m = 5.",
                "Table : R → 4, A → 1, D → 2, autres → 5.",
              ],
            },
            {
              level: 2,
              statement: "On cherche le motif « ANA » dans le texte « BANANAS » (indices 0 à 6). a) Construisez la table des décalages. b) Déroulez l'algorithme de Boyer-Moore-Horspool en indiquant à chaque étape la position i, les comparaisons et le décalage. c) Donnez les positions des occurrences et le nombre total de comparaisons.",
              hint: "Après une occurrence trouvée, on continue : le décalage se lit toujours sur le caractère du texte aligné avec la dernière lettre du motif.",
              solution: [
                "a) m = 3, positions 0 et 1 : A(0), N(1). d(A) = 3 - 1 - 0 = 2 ; d(N) = 3 - 1 - 1 = 1 ; autres lettres : 3.",
                "b) Texte : B(0) A(1) N(2) A(3) N(4) A(5) S(6) ; positions possibles de 0 à 4. i = 0 : motif[2] = A contre texte[2] = N : différent (1 comparaison). Décalage d(N) = 1, i = 1.",
                "i = 1 : A = texte[3], N = texte[2], A = texte[1] : occurrence en 1 (3 comparaisons). Décalage d(texte[3]) = d(A) = 2, i = 3.",
                "i = 3 : A = texte[5], N = texte[4], A = texte[3] : occurrence en 3 (3 comparaisons). Décalage d(texte[5]) = d(A) = 2, i = 5 > 4 : fin.",
                "c) Occurrences aux positions 1 et 3 (elles se chevauchent), avec 1 + 3 + 3 = 7 comparaisons.",
              ],
            },
            {
              level: 3,
              statement: "On cherche le motif « NSI » dans le texte « LASPECIALITENSI » (15 caractères, indices 0 à 14). a) Construisez la table des décalages. b) Déroulez l'algorithme de Boyer-Moore-Horspool. c) Comptez les positions examinées et les comparaisons, puis faites de même pour l'algorithme naïf. d) Complétez la ligne manquante du code suivant : while i <= n - m: ; j = m - 1 ; while j >= 0 and texte[i + j] == motif[j]: j = j - 1 ; if j == -1: res.append(i) ; ......",
              hint: "Texte : L(0) A(1) S(2) P(3) E(4) C(5) I(6) A(7) L(8) I(9) T(10) E(11) N(12) S(13) I(14). La lettre I n'apparaît qu'en dernière position du motif : son décalage vaut 3.",
              solution: [
                "a) m = 3, positions 0 et 1 : N(0), S(1). d(N) = 2, d(S) = 1, toute autre lettre (y compris I) : 3.",
                "b) i = 0 : I contre texte[2] = S, différent ; décalage d(S) = 1, i = 1. i = 1 : I contre texte[3] = P, différent ; d(P) = 3, i = 4. i = 4 : I = texte[6], puis S contre texte[5] = C, différent ; d(texte[6]) = d(I) = 3, i = 7.",
                "i = 7 : I = texte[9], puis S contre texte[8] = L, différent ; d(I) = 3, i = 10. i = 10 : I contre texte[12] = N, différent ; d(N) = 2, i = 12. i = 12 : I = texte[14], S = texte[13], N = texte[12] : occurrence en 12 ; d(I) = 3, i = 15 > 12 : fin.",
                "c) Boyer-Moore : 6 positions examinées (0, 1, 4, 7, 10, 12) et 1 + 1 + 2 + 2 + 1 + 3 = 10 comparaisons. Naïf : 13 positions (0 à 12) ; pour i de 0 à 11, la première comparaison N contre texte[i] échoue (aucun N avant l'indice 12), soit 12 comparaisons, puis 3 pour i = 12 : 15 comparaisons.",
                "d) La ligne manquante est le décalage : i = i + d.get(texte[i + m - 1], m).",
                "Résultat : une occurrence en 12 ; 10 comparaisons contre 15, et l'écart grandit avec la longueur du motif et du texte.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'algorithme de Boyer-Moore-Horspool.",
            items: [
              "Construire la table des décalages à partir du motif",
              "Placer le motif à la position i = 0 du texte",
              "Comparer les caractères de droite à gauche, en partant de la fin du motif",
              "Si tous les caractères coïncident, noter une occurrence à la position i",
              "Lire le caractère du texte aligné avec la dernière lettre du motif",
              "Décaler le motif de la valeur donnée par la table pour ce caractère",
              "Recommencer tant que i ≤ n - m",
            ],
          },
          quiz: [
            {
              q: "Dans quel sens Boyer-Moore compare-t-il le motif au texte ?",
              options: ["De gauche à droite, exactement comme le fait l'algorithme naïf de recherche", "En commençant par le milieu du motif", "Dans un ordre aléatoire", "De droite à gauche, en partant de la dernière lettre du motif"],
              answer: 3,
              why: "Commencer par la fin permet, dès la première comparaison, d'exploiter le caractère du texte pour faire un grand saut.",
            },
            {
              q: "Pour le motif « LIGNE » (m = 5), quel est le décalage associé à la lettre W, absente du motif ?",
              options: ["0", "1", "5", "4"],
              answer: 2,
              why: "Une lettre absente du motif ne peut appartenir à aucune occurrence qui la recouvre : on décale de toute la longueur, m = 5.",
            },
            {
              q: "Pour le motif « CTAG », que vaut d(T) ?",
              options: ["1", "2", "3", "4"],
              answer: 1,
              why: "T est à l'indice 1 : d(T) = m - 1 - 1 = 4 - 1 - 1 = 2.",
            },
            {
              q: "Qu'appelle-t-on le prétraitement du motif ?",
              options: ["Le calcul, avant la recherche, de la table des décalages", "Le tri préalable des lettres du motif par ordre alphabétique croissant", "La conversion du texte en majuscules", "La suppression des espaces du texte"],
              answer: 0,
              why: "La table ne dépend que du motif : on la calcule une seule fois, puis on l'utilise à chaque décalage.",
            },
            {
              q: "Dans quel cas Boyer-Moore apporte-t-il le plus grand gain par rapport à l'algorithme naïf ?",
              options: ["Un motif d'une seule lettre", "Un texte formé d'une seule lettre répétée des milliers et des milliers de fois", "Un texte plus court que le motif", "Un long motif dont beaucoup de caractères du texte sont absents"],
              answer: 3,
              why: "Chaque caractère du texte absent du motif permet un saut de m positions : plus m est grand, plus le gain est important.",
            },
          ],
          trap: "Calculer le décalage avec le caractère du texte où la comparaison a échoué, alors que dans la version de Horspool on utilise toujours le caractère du texte aligné avec la dernière lettre du motif. Autre erreur : inclure la dernière lettre du motif dans la table, ce qui donnerait un décalage nul et une boucle infinie.",
          method: "Pour dérouler l'algorithme sur papier, écrivez le texte avec les indices au-dessus de chaque lettre, puis recopiez le motif sous le texte à chaque nouvelle position i. Notez à côté le nombre de comparaisons et le caractère qui donne le décalage : vous éviterez les erreurs d'alignement.",
        },
      ],
    },

    /* ==================================================================== */
    /* CALCULABILITÉ, PARADIGMES ET HISTOIRE                                  */
    /* ==================================================================== */
    {
      id: 'calculabilite-paradigmes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'calculabilite-decidabilite',
          title: 'Programme en tant que donnée, calculabilité, décidabilité',
          minutes: 30,
          objectives: [
            "Comprendre que tout programme est aussi une donnée.",
            "Comprendre que la calculabilité ne dépend pas du langage de programmation utilisé.",
            "Montrer, sans formalisme théorique, que le problème de l'arrêt est indécidable.",
          ],
          course: [
            {
              heading: "Un programme est aussi une donnée",
              paragraphs: [
                "Dans l'architecture de von Neumann, les programmes et les données sont rangés dans la même mémoire, sous la même forme : des suites de bits. Un programme peut donc être lu, transformé ou produit par un autre programme, exactement comme une donnée. Les exemples sont partout dans votre quotidien d'informaticien.",
                "Un compilateur (par exemple gcc pour le langage C) prend en entrée le texte d'un programme et produit en sortie un autre programme, en langage machine. L'interpréteur Python lit votre fichier .py et l'exécute instruction par instruction : votre programme est la donnée de l'interpréteur. Le système d'exploitation charge un fichier exécutable en mémoire pour créer un processus ; un navigateur télécharge du code JavaScript puis l'exécute ; un antivirus analyse des programmes pour y chercher des signatures malveillantes.",
                "En Python, les fonctions sont elles-mêmes des valeurs : on peut les ranger dans une variable, les passer en paramètre ou les renvoyer. Par exemple, def applique(f, x): return f(f(x)) prend une fonction f en paramètre, et applique(lambda x: x + 3, 10) renvoie 16. La fonction sorted(liste, key=len) reçoit la fonction len comme donnée pour savoir comment comparer.",
              ],
              box: { label: "À retenir", text: "Un programme est une donnée : il peut être l'entrée ou la sortie d'un autre programme (compilateur, interpréteur, système d'exploitation, antivirus, fonction passée en paramètre)." },
            },
            {
              heading: "Calculabilité : ce qu'un algorithme peut calculer",
              paragraphs: [
                "Une fonction est dite calculable s'il existe un algorithme qui, pour toute entrée, s'arrête et fournit le résultat. En 1928, le mathématicien David Hilbert pose le « problème de la décision » (Entscheidungsproblem) : existe-t-il une méthode mécanique pour décider si n'importe quel énoncé mathématique est vrai ? Pour répondre, il fallait d'abord définir précisément ce qu'est une méthode mécanique.",
                "En 1936, Alan Turing propose un modèle très simple, la machine de Turing : un ruban infini divisé en cases, une tête de lecture et d'écriture, un nombre fini d'états et une table de transitions qui indique, selon l'état et le symbole lu, quoi écrire, dans quel sens déplacer la tête et dans quel état passer. La même année, Alonzo Church aboutit au même résultat avec un autre modèle, le lambda-calcul, qu'il avait développé au début des années 1930 ; on démontre que les deux modèles calculent exactement les mêmes fonctions.",
                "La thèse de Church-Turing affirme que toute fonction calculable par une méthode effective est calculable par une machine de Turing. C'est une thèse, pas un théorème : elle n'est pas démontrable, mais aucun contre-exemple n'a jamais été trouvé. Conséquence pratique : tous les langages de programmation usuels (Python, C, Java, JavaScript...) sont équivalents à une machine de Turing, on dit qu'ils sont Turing-complets. Ce qui est calculable dans l'un l'est dans les autres : la calculabilité ne dépend pas du langage, seuls changent le confort d'écriture et l'efficacité.",
              ],
              box: { label: "Définition", text: "Une fonction est calculable s'il existe un algorithme qui la calcule en un nombre fini d'étapes pour toute entrée. Ce qui est calculable ne dépend pas du langage : les langages usuels sont tous Turing-complets." },
            },
            {
              heading: "Décidabilité et problème de l'arrêt",
              paragraphs: [
                "Un problème de décision est une question à laquelle on répond par oui ou non pour chaque entrée : « l'entier n est-il premier ? », « cette liste est-elle triée ? ». Il est décidable s'il existe un algorithme qui, pour toute entrée, s'arrête et donne la bonne réponse. Tester si un entier est premier est décidable : il suffit d'essayer tous les diviseurs possibles.",
                "Le problème de l'arrêt demande : étant donnés un programme P et une entrée x, l'exécution de P sur x s'arrête-t-elle ? Il serait précieux de pouvoir le décider, pour détecter automatiquement les boucles infinies. Turing a démontré en 1936 que c'est impossible : aucun programme ne peut répondre correctement pour tous les programmes et toutes les entrées. Le problème de l'arrêt est indécidable.",
                "Attention au sens de ce résultat : on peut souvent prouver qu'un programme particulier s'arrête, et les outils d'analyse détectent de nombreuses boucles infinies. Ce qui est impossible, c'est un programme unique qui réponde juste dans tous les cas. Exemple célèbre : pour la suite de Syracuse (si n est pair, on le divise par 2, sinon on le remplace par 3n + 1), personne ne sait démontrer que la boucle « tant que n ≠ 1 » s'arrête pour tout entier de départ, bien que cela ait été vérifié par ordinateur pour des entiers immenses.",
              ],
              box: { label: "Propriété", text: "Le problème de l'arrêt est indécidable (Turing, 1936) : il n'existe aucun programme arret(P, x) qui renvoie toujours correctement True si P s'arrête sur l'entrée x et False sinon." },
            },
            {
              heading: "La démonstration par l'absurde",
              paragraphs: [
                "Supposons qu'il existe une fonction arret(prog, x) qui renvoie toujours, en un temps fini, True si prog(x) s'arrête et False sinon. On écrit alors la fonction suivante. Ligne 1 : def paradoxe(prog): ; ligne 2, dans la fonction : if arret(prog, prog): ; ligne 3, dans le if : while True: pass (boucle infinie) ; ligne 4 : else: return 0. Cette fonction reçoit un programme et l'utilise aussi comme donnée : c'est possible, puisqu'un programme est une donnée.",
                "Que se passe-t-il pour paradoxe(paradoxe) ? Si arret(paradoxe, paradoxe) vaut True, c'est que paradoxe(paradoxe) s'arrête ; mais alors la ligne 3 s'exécute et paradoxe(paradoxe) boucle indéfiniment : contradiction. Si arret(paradoxe, paradoxe) vaut False, c'est que paradoxe(paradoxe) ne s'arrête pas ; mais alors la ligne 4 s'exécute et paradoxe(paradoxe) s'arrête : contradiction.",
                "Dans les deux cas on aboutit à une contradiction : l'hypothèse de départ est fausse, la fonction arret ne peut pas exister. Ce raisonnement a la même structure que le paradoxe du menteur (« cette phrase est fausse ») : un objet qui parle de lui-même et fait le contraire de ce qu'on prédit.",
              ],
            },
          ],
          keyPoints: [
            "Un programme est une donnée : compilateurs, interpréteurs, systèmes d'exploitation et fonctions en paramètre le montrent.",
            "Calculable : il existe un algorithme qui s'arrête et donne le résultat pour toute entrée.",
            "La machine de Turing (1936) et le lambda-calcul de Church définissent les mêmes fonctions calculables.",
            "Thèse de Church-Turing : les langages usuels sont Turing-complets, la calculabilité ne dépend pas du langage.",
            "Décidable : un algorithme répond oui ou non correctement et s'arrête pour toute entrée.",
            "Le problème de l'arrêt est indécidable : preuve par l'absurde avec paradoxe(paradoxe).",
          ],
          example: {
            statement: "On considère : def double(f): return lambda x: f(f(x)) et def plus2(x): return x + 2. a) Que vaut double(plus2)(5) ? b) Que vaut double(double(plus2))(0) ? c) En quoi cet exemple illustre-t-il qu'un programme est une donnée ?",
            solution: [
              "a) double(plus2) est la fonction x ↦ plus2(plus2(x)) = x + 4. Donc double(plus2)(5) = 9.",
              "b) double(plus2) ajoute 4 ; double(double(plus2)) applique deux fois cette fonction, donc ajoute 8. Ainsi double(double(plus2))(0) = 8.",
              "c) La fonction double reçoit une fonction en paramètre et renvoie une nouvelle fonction : des fonctions, c'est-à-dire des morceaux de programme, sont manipulées comme des valeurs ordinaires.",
              "Réponse : 9, puis 8 ; les fonctions sont ici des données d'entrée et de sortie d'une autre fonction.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des situations suivantes, indiquez quel programme est traité comme une donnée et par quel autre programme : a) vous lancez python3 jeu.py dans un terminal ; b) vous installez une application téléchargée sur un magasin d'applications ; c) le système d'exploitation démarre un navigateur ; d) un antivirus analyse un fichier exécutable reçu par courriel.",
              hint: "Cherchez à chaque fois le programme qui lit, copie, charge ou analyse le code d'un autre.",
              solution: [
                "a) Le programme jeu.py est la donnée de l'interpréteur Python, qui le lit et l'exécute.",
                "b) L'application est une donnée transmise par le réseau puis copiée sur le disque par le programme d'installation du magasin.",
                "c) Le fichier exécutable du navigateur est une donnée que le système d'exploitation charge en mémoire pour créer un processus.",
                "d) Le fichier exécutable est une donnée que l'antivirus lit et compare à des signatures connues, sans l'exécuter.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction syracuse(n) : ligne 1 : def syracuse(n): ; ligne 2 : etapes = 0 ; ligne 3 : while n != 1: ; ligne 4, dans la boucle : if n % 2 == 0: n = n // 2 ; ligne 5, dans la boucle : else: n = 3 * n + 1 ; ligne 6, dans la boucle : etapes = etapes + 1 ; ligne 7, après la boucle : return etapes. a) Calculez syracuse(6) en donnant la suite des valeurs de n. b) Calculez syracuse(7). c) Peut-on affirmer que syracuse(n) s'arrête pour tout entier n ≥ 1 ? d) Que se passe-t-il pour n = 0 ?",
              hint: "Si n est pair, on le divise par 2 ; sinon on le remplace par 3n + 1. On compte les passages dans la boucle jusqu'à atteindre 1.",
              solution: [
                "a) 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 : 8 passages dans la boucle, syracuse(6) = 8.",
                "b) 7 → 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1 : 16 passages, syracuse(7) = 16.",
                "c) Non : c'est la conjecture de Syracuse, vérifiée par ordinateur pour des entiers immenses mais jamais démontrée. On ne sait pas prouver que la boucle s'arrête pour tout n.",
                "d) Pour n = 0 : 0 est pair, 0 // 2 = 0, et n ne vaut jamais 1 : la boucle est infinie. Ici, la non-termination est facile à prouver ; c'est un cas particulier, pas une méthode générale.",
              ],
            },
            {
              level: 3,
              statement: "Un camarade affirme avoir écrit une fonction arret(prog, x) qui renvoie True si l'exécution de prog(x) se termine et False sinon, pour tout programme prog et toute entrée x. a) Écrivez la fonction paradoxe(prog) qui utilise arret. b) Étudiez les deux cas possibles pour paradoxe(paradoxe). c) Concluez. d) Expliquez pourquoi ce résultat n'empêche pas de prouver que la fonction def f(n): return n + 1 s'arrête toujours.",
              hint: "La fonction paradoxe doit faire le contraire de ce que prédit arret quand on lui donne son propre code comme entrée.",
              solution: [
                "a) Ligne 1 : def paradoxe(prog): ; ligne 2 : if arret(prog, prog): ; ligne 3, dans le if : while True: pass ; ligne 4 : else: return 0.",
                "b) Premier cas : arret(paradoxe, paradoxe) vaut True, donc paradoxe(paradoxe) devrait s'arrêter ; or la ligne 3 lance une boucle infinie : il ne s'arrête pas, contradiction. Second cas : arret(paradoxe, paradoxe) vaut False, donc paradoxe(paradoxe) ne devrait pas s'arrêter ; or la ligne 4 renvoie 0 : il s'arrête, contradiction.",
                "c) Les deux cas sont contradictoires : la fonction arret ne peut pas exister. Le problème de l'arrêt est indécidable, et l'affirmation du camarade est fausse (sa fonction se trompe ou ne répond pas pour certains programmes).",
                "d) L'indécidabilité signifie qu'aucun programme ne répond correctement pour tous les programmes. Pour un programme particulier, on peut raisonner : f ne contient ni boucle ni appel récursif, elle exécute une addition et renvoie un résultat, donc elle s'arrête toujours.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : calculabilité et décidabilité.",
            statements: [
              { text: "Un interpréteur Python traite le programme qu'il exécute comme une donnée.", true: true, why: "Il lit le texte du programme et l'exécute : le programme est son entrée." },
              { text: "Certaines fonctions calculables en C ne le sont pas en Python.", true: false, why: "Les deux langages sont Turing-complets : ils calculent exactement les mêmes fonctions." },
              { text: "Le problème de l'arrêt est indécidable : aucun programme ne peut le résoudre pour tous les programmes et toutes les entrées.", true: true, why: "C'est le résultat démontré par Turing en 1936." },
              { text: "L'indécidabilité de l'arrêt signifie qu'on ne peut jamais prouver qu'un programme s'arrête.", true: false, why: "On le prouve souvent pour un programme précis ; c'est un algorithme universel qui est impossible." },
              { text: "La thèse de Church-Turing est un théorème démontré.", true: false, why: "C'est une thèse : elle relie une notion intuitive (méthode effective) à un modèle formel et ne peut pas être démontrée." },
              { text: "Savoir si un entier n est premier est un problème décidable.", true: true, why: "Essayer tous les diviseurs de 2 à n - 1 donne la réponse en un nombre fini d'étapes." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces exemples montre qu'un programme est une donnée ?",
              options: ["Un compilateur transforme un programme source en programme exécutable", "Une variable contient la valeur 42", "Un fichier texte enregistré sur le disque contient une liste de courses à faire", "Un processeur exécute une addition"],
              answer: 0,
              why: "Le compilateur prend un programme en entrée et produit un programme en sortie : le programme est traité comme une donnée.",
            },
            {
              q: "Que signifie « un langage est Turing-complet » ?",
              options: ["Il a été inventé par Alan Turing", "Il peut calculer tout ce qu'une machine de Turing peut calculer", "Il garantit qu'aucun programme écrit dans ce langage ne contient de boucle infinie", "Il s'exécute plus vite que les autres"],
              answer: 1,
              why: "Un langage Turing-complet a la même puissance de calcul qu'une machine de Turing ; c'est le cas de tous les langages usuels.",
            },
            {
              q: "Qu'est-ce qu'un problème décidable ?",
              options: ["Un problème qui a toujours la réponse oui", "Un problème qu'un humain peut résoudre", "Un problème dont la réponse est connue de tous", "Un problème pour lequel un algorithme répond correctement oui ou non et s'arrête, pour toute entrée"],
              answer: 3,
              why: "La décidabilité exige un algorithme qui termine et donne la bonne réponse pour chaque entrée possible.",
            },
            {
              q: "Quel type de raisonnement prouve l'indécidabilité du problème de l'arrêt ?",
              options: ["Une récurrence sur la taille des programmes", "Un calcul de complexité", "Un raisonnement par l'absurde", "Un test sur un grand nombre de programmes"],
              answer: 2,
              why: "On suppose que arret existe, on construit paradoxe et l'on obtient une contradiction dans les deux cas.",
            },
            {
              q: "En quelle année Alan Turing décrit-il sa machine et démontre-t-il l'indécidabilité de l'arrêt ?",
              options: ["1945", "1936", "1928", "1969"],
              answer: 1,
              why: "Son article de 1936 répond au problème de la décision posé par Hilbert en 1928.",
            },
          ],
          trap: "Croire que l'indécidabilité de l'arrêt interdit de savoir si un programme donné s'arrête : elle interdit seulement un programme universel qui réponde juste pour tous les programmes. Autre confusion : penser que certains langages peuvent calculer plus de choses que d'autres.",
          method: "Apprenez la démonstration comme une petite histoire en trois temps : on suppose que arret existe ; on écrit paradoxe, qui fait le contraire de ce que prédit arret sur lui-même ; on examine les deux réponses possibles et l'on aboutit chaque fois à une contradiction. Récitez-la à voix haute jusqu'à pouvoir l'écrire en cinq lignes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'paradigmes',
          title: 'Les paradigmes de programmation',
          minutes: 30,
          objectives: [
            "Distinguer sur des exemples les paradigmes impératif, fonctionnel et objet.",
            "Identifier un effet de bord et écrire une fonction pure.",
            "Utiliser des fonctions d'ordre supérieur (map, filter, fonctions passées en paramètre).",
            "Choisir le paradigme de programmation selon le champ d'application d'un programme.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un paradigme ?",
              paragraphs: [
                "Un paradigme de programmation est une manière de concevoir et d'organiser un programme : une façon de penser le calcul. Chaque langage favorise un ou plusieurs paradigmes, mais beaucoup de langages, dont Python, sont multiparadigmes : avec le même langage, on peut écrire dans des styles différents, et un même programme peut mêler plusieurs paradigmes.",
                "Prenons un même problème, calculer la somme des éléments d'une liste, et écrivons-le de trois façons. Style impératif : def somme(t): ; s = 0 ; for x in t: s = s + x ; return s. Style fonctionnel : def somme(t): return 0 if t == [] else t[0] + somme(t[1:]). Style objet : on définirait une classe Panier avec un attribut articles et une méthode total(self). Le résultat est le même ; la manière de penser change.",
              ],
              box: { label: "Définition", text: "Un paradigme de programmation est un style de programmation, une façon d'organiser les calculs et les données. Les principaux au programme : impératif, fonctionnel, objet." },
            },
            {
              heading: "Le paradigme impératif",
              paragraphs: [
                "En programmation impérative, un programme est une suite d'instructions qui modifient l'état de la machine, c'est-à-dire le contenu des variables. Les outils de base sont l'affectation (s = s + x), la séquence, les instructions conditionnelles et les boucles. On décrit comment obtenir le résultat, pas à pas.",
                "Ce style est proche du fonctionnement réel du processeur, qui exécute des instructions modifiant des registres et la mémoire. C'est le paradigme historique (Fortran en 1957, C en 1972) et il reste celui de la programmation système et embarquée, où l'on veut maîtriser précisément la mémoire et le temps d'exécution. Sa difficulté : l'état change au cours du programme, et un bug peut venir d'une variable modifiée loin de l'endroit où l'erreur apparaît.",
              ],
            },
            {
              heading: "Le paradigme fonctionnel",
              paragraphs: [
                "En programmation fonctionnelle, un programme est une composition de fonctions, au sens mathématique. On privilégie les fonctions pures : leur résultat ne dépend que de leurs paramètres, et elles n'ont aucun effet de bord (elles ne modifient ni variable globale, ni paramètre, ni fichier, et n'affichent rien). Les données sont non mutables : au lieu de modifier une liste, on en construit une nouvelle. Les boucles sont remplacées par la récursivité.",
                "Les fonctions sont des valeurs comme les autres : on peut les passer en paramètre ou les renvoyer. Une fonction qui prend ou renvoie une fonction est dite d'ordre supérieur. En Python : list(map(lambda x: x * x, [1, 2, 3])) donne [1, 4, 9] ; list(filter(lambda x: x % 2 == 0, range(10))) donne [0, 2, 4, 6, 8] ; reduce(lambda a, b: a + b, [1, 2, 3, 4]), avec reduce importé du module functools, donne 10. Le mot-clé lambda crée une fonction anonyme.",
                "Avantages : une fonction pure se teste et se vérifie facilement (même entrée, même sortie), et plusieurs fonctions pures peuvent s'exécuter en parallèle sans se gêner. Langages emblématiques : Lisp (1958), Haskell, OCaml (développé en France à l'Inria). On les utilise notamment pour les compilateurs, l'analyse de programmes ou la finance.",
              ],
              box: { label: "Définition", text: "Une fonction pure renvoie toujours le même résultat pour les mêmes paramètres et n'a aucun effet de bord. Un effet de bord est une modification de l'état extérieur à la fonction : variable globale, paramètre mutable, affichage, fichier." },
            },
            {
              heading: "Le paradigme objet et le choix d'un paradigme",
              paragraphs: [
                "En programmation orientée objet, le programme est organisé autour d'objets qui regroupent des données (les attributs) et les opérations qui les manipulent (les méthodes). Une classe décrit un modèle d'objets ; chaque objet en est une instance. L'objet cache son fonctionnement interne et se manipule par ses méthodes (encapsulation). Langages emblématiques : Smalltalk, C++, Java. Ce paradigme convient pour modéliser des entités nombreuses et variées : interfaces graphiques, jeux, simulations.",
                "D'autres paradigmes existent : le paradigme déclaratif, où l'on décrit le résultat voulu sans dire comment l'obtenir (SQL : SELECT nom FROM eleve WHERE age > 17), la programmation logique (Prolog, créé à Marseille en 1972) ou la programmation événementielle (le programme réagit à des clics ou à des messages, comme en JavaScript dans un navigateur).",
                "Le choix dépend du champ d'application. Pilote de périphérique ou programme embarqué : impératif (C). Chaîne de transformations de données, calculs à vérifier ou à paralléliser : fonctionnel. Logiciel qui manipule de nombreuses entités ayant un état (fenêtres, personnages, comptes) : objet. Interrogation d'une base : déclaratif (SQL). Dans un vrai projet, on mélange souvent : des classes dont les méthodes sont écrites en style impératif, avec des map et filter fonctionnels.",
              ],
              box: { label: "À retenir", text: "Impératif : instructions qui modifient l'état. Fonctionnel : fonctions pures, pas d'effet de bord, fonctions comme valeurs. Objet : objets qui regroupent attributs et méthodes. Le bon choix dépend du problème, et l'on peut les combiner." },
            },
          ],
          keyPoints: [
            "Un paradigme est un style de programmation ; Python est multiparadigme.",
            "Impératif : affectations, boucles, l'état des variables évolue (C, Fortran).",
            "Fonctionnel : fonctions pures sans effet de bord, données non mutables, récursivité, fonctions d'ordre supérieur (Lisp, Haskell, OCaml).",
            "Objet : classes, attributs, méthodes, encapsulation (Smalltalk, C++, Java).",
            "map applique une fonction à chaque élément ; filter garde les éléments qui vérifient une condition.",
            "On choisit le paradigme selon le domaine, et un même programme peut en combiner plusieurs.",
          ],
          example: {
            statement: "On veut, à partir de la liste t = [3, 8, 5, 12, 7], obtenir la liste des carrés des nombres pairs. Écrivez une version impérative et une version fonctionnelle, puis donnez le résultat.",
            solution: [
              "Version impérative : ligne 1 : res = [] ; ligne 2 : for x in t: ; ligne 3, dans la boucle : if x % 2 == 0: res.append(x * x). La liste res est modifiée à chaque tour.",
              "Version fonctionnelle : res = list(map(lambda x: x * x, filter(lambda x: x % 2 == 0, t))). On filtre les pairs, puis on applique le carré, sans modifier aucune liste.",
              "On peut aussi écrire la liste en compréhension, inspirée du style fonctionnel : [x * x for x in t if x % 2 == 0].",
              "Les nombres pairs de t sont 8 et 12 ; leurs carrés sont 64 et 144.",
              "Réponse : [64, 144] dans les deux versions.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le paradigme principal de chaque extrait et justifiez. a) i = 0 ; while i < len(t) and t[i] != x: i = i + 1. b) def longueur(t): return 0 if t == [] else 1 + longueur(t[1:]). c) class Voiture: avec une méthode def accelerer(self, v): self.vitesse = self.vitesse + v. d) SELECT titre FROM livre WHERE annee < 1900.",
              hint: "Repérez les indices : boucle et affectations (impératif), récursivité sans modification (fonctionnel), classe et self (objet), description du résultat (déclaratif).",
              solution: [
                "a) Impératif : une boucle while modifie la variable i pas à pas.",
                "b) Fonctionnel : une fonction récursive pure, sans affectation ni modification de t (t[1:] crée une nouvelle liste).",
                "c) Objet : une classe dont la méthode modifie l'attribut vitesse de l'objet self.",
                "d) Déclaratif : la requête SQL décrit le résultat voulu, le SGBD choisit comment l'obtenir.",
              ],
            },
            {
              level: 2,
              statement: "Donnez le résultat de chaque expression (reduce est importé de functools). a) list(map(lambda x: x * x, [1, 2, 3, 4])). b) list(filter(lambda x: x % 2 == 0, range(10))). c) reduce(lambda a, b: a * b, [1, 2, 3, 4, 5]). d) sum(map(lambda x: x * x, filter(lambda x: x % 2 == 1, range(6)))). e) Réécrivez d) en une liste en compréhension passée à sum.",
              hint: "map transforme chaque élément, filter ne garde que ceux pour lesquels la fonction renvoie True, reduce combine les éléments deux à deux de gauche à droite.",
              solution: [
                "a) Chaque élément est élevé au carré : [1, 4, 9, 16].",
                "b) On garde les entiers pairs de 0 à 9 : [0, 2, 4, 6, 8].",
                "c) On multiplie de gauche à droite : ((((1 × 2) × 3) × 4) × 5) = 120.",
                "d) Les impairs de range(6) sont 1, 3, 5 ; leurs carrés 1, 9, 25 ; leur somme vaut 35.",
                "e) sum([x * x for x in range(6) if x % 2 == 1]), qui vaut aussi 35.",
              ],
            },
            {
              level: 3,
              statement: "On considère le code suivant. Ligne 1 : total = 0 ; ligne 2 : def ajoute(x): ; ligne 3, dans la fonction : global total ; ligne 4 : total = total + x ; ligne 5 : return total. Et une seconde fonction : def ajoute_fin(t, x): t.append(x) ; return t. a) Que renvoient deux appels successifs ajoute(5), puis ajoute(5) ? b) Ces deux fonctions sont-elles pures ? Justifiez. c) Écrivez une version pure de chacune. d) Une équipe doit écrire : un pilote pour un capteur de température ; un jeu où évoluent des dizaines de personnages ; un module qui calcule des statistiques sur des listes de mesures. Proposez un paradigme dominant pour chacun.",
              hint: "Une fonction pure renvoie le même résultat pour les mêmes paramètres et ne modifie rien à l'extérieur. Pour une liste, construisez-en une nouvelle au lieu de la modifier.",
              solution: [
                "a) Le premier appel renvoie 5 (total passe de 0 à 5), le second renvoie 10 (total passe de 5 à 10) : même paramètre, résultats différents.",
                "b) Aucune n'est pure. ajoute modifie la variable globale total, et son résultat dépend de l'historique des appels. ajoute_fin modifie la liste reçue en paramètre (effet de bord visible par l'appelant).",
                "c) Versions pures : def ajoute(total, x): return total + x ; def ajoute_fin(t, x): return t + [x]. La seconde construit une nouvelle liste et laisse t intacte.",
                "d) Pilote du capteur : impératif (proche du matériel, contrôle précis de la mémoire). Jeu : objet (une classe Personnage, chaque personnage étant un objet avec son état). Statistiques : fonctionnel (chaîne de fonctions pures map, filter, reduce, faciles à tester).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Paradigme impératif", right: "Suite d'instructions qui modifient l'état des variables" },
              { left: "Paradigme fonctionnel", right: "Composition de fonctions pures, sans modification de l'état" },
              { left: "Paradigme objet", right: "Objets regroupant attributs et méthodes" },
              { left: "Effet de bord", right: "Modification de l'état extérieur à une fonction" },
              { left: "Fonction d'ordre supérieur", right: "Fonction qui prend ou renvoie une fonction" },
              { left: "Paradigme déclaratif", right: "Décrire le résultat voulu sans dire comment l'obtenir" },
            ],
          },
          quiz: [
            {
              q: "Quelle caractéristique définit une fonction pure ?",
              options: ["Elle ne contient aucune boucle for ni while, seulement des appels récursifs", "Elle est écrite avec le mot-clé lambda", "Même résultat pour les mêmes paramètres, sans effet de bord", "Elle ne prend aucun paramètre"],
              answer: 2,
              why: "Une fonction pure ne dépend que de ses paramètres et ne modifie rien à l'extérieur ; elle peut contenir des boucles sur des variables locales.",
            },
            {
              q: "Que renvoie list(map(lambda x: x + 1, [1, 2, 3])) ?",
              options: ["[2, 3, 4]", "[1, 2, 3, 1]", "6", "[1, 2, 3]"],
              answer: 0,
              why: "map applique la fonction x ↦ x + 1 à chaque élément.",
            },
            {
              q: "Quel paradigme est le plus adapté pour un jeu où évoluent de nombreux personnages ayant chacun un état ?",
              options: ["Le paradigme déclaratif, avec des requêtes SQL", "Le paradigme objet", "Le paradigme logique", "Aucun, il faut un langage spécial"],
              answer: 1,
              why: "Chaque personnage peut être un objet d'une classe Personnage, regroupant son état (attributs) et ses actions (méthodes).",
            },
            {
              q: "Lequel de ces langages est emblématique de la programmation fonctionnelle ?",
              options: ["C", "Fortran", "SQL", "Haskell"],
              answer: 3,
              why: "Haskell est un langage purement fonctionnel ; C et Fortran sont impératifs, SQL est déclaratif.",
            },
            {
              q: "Python est dit multiparadigme. Cela signifie :",
              options: ["qu'il faut obligatoirement déclarer un paradigme unique au début de chaque fichier", "qu'il n'appartient à aucun paradigme", "qu'il est plus rapide que les autres langages", "qu'on peut y écrire dans plusieurs styles, même dans un seul programme"],
              answer: 3,
              why: "Python permet d'écrire du code impératif, fonctionnel et objet, et de les combiner dans un même programme.",
            },
          ],
          trap: "Croire qu'une fonction est fonctionnelle dès qu'elle utilise lambda ou qu'un code est objet dès qu'il appelle une méthode comme t.append : ce qui compte, c'est l'organisation du programme et la présence ou non d'effets de bord. Un t.append dans une fonction modifie la liste de l'appelant.",
          method: "Pour classer un extrait de code, posez trois questions : y a-t-il des affectations qui modifient l'état au fil des instructions (impératif) ? Les fonctions sont-elles pures et passées comme valeurs (fonctionnel) ? Les données et les traitements sont-ils regroupés dans des classes (objet) ? Justifiez toujours avec un élément précis du code.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'histoire-informatique',
          title: 'Les événements clés de l\'histoire de l\'informatique',
          minutes: 30,
          objectives: [
            "Situer dans le temps les principaux événements de l'histoire de l'informatique et leurs protagonistes.",
            "Relier ces repères historiques aux notions étudiées en NSI (machine de Turing, architecture de von Neumann, réseaux, langages).",
            "Identifier l'évolution des rôles relatifs des logiciels et des matériels.",
          ],
          course: [
            {
              heading: "Avant l'ordinateur : calculer et automatiser",
              paragraphs: [
                "L'informatique hérite de deux traditions : les machines à calculer et l'automatisation. En 1642, Blaise Pascal conçoit la Pascaline, une machine mécanique qui effectue additions et soustractions. En 1801, le métier à tisser de Joseph Marie Jacquard est commandé par des cartes perforées : le motif du tissu est un « programme » qu'on change en changeant de cartes.",
                "À partir de 1834, Charles Babbage conçoit la machine analytique, une machine mécanique programmable par cartes perforées, avec une unité de calcul et une mémoire, qui ne sera jamais achevée. En 1843, Ada Lovelace publie des notes sur cette machine, dans lesquelles elle décrit un algorithme de calcul des nombres de Bernoulli : on le considère souvent comme le premier programme publié. En 1854, George Boole fonde l'algèbre qui porte son nom, base de la logique des circuits. Pour le recensement américain de 1890, Herman Hollerith utilise des machines à cartes perforées ; son entreprise deviendra IBM en 1924.",
              ],
            },
            {
              heading: "1936 à 1950 : la naissance de l'ordinateur",
              paragraphs: [
                "En 1936, Alan Turing définit la machine de Turing et pose les bases théoriques de l'informatique (calculabilité, indécidabilité de l'arrêt). En 1938, Claude Shannon montre que l'algèbre de Boole permet de concevoir des circuits à relais. En 1941, Konrad Zuse achève le Z3, calculateur électromécanique programmable. Pendant la guerre, les Britanniques construisent à Bletchley Park les calculateurs Colossus (1944) pour casser des chiffrements allemands.",
                "En 1945, John von Neumann décrit l'architecture qui porte son nom : programme et données dans la même mémoire. En 1946 est présenté l'ENIAC, calculateur électronique à tubes de près de 30 tonnes, programmé en rebranchant des câbles et en réglant des commutateurs (ses premières programmeuses sont six femmes). En 1947, le transistor est inventé aux laboratoires Bell. En 1948, la machine expérimentale de Manchester exécute le premier programme enregistré en mémoire, et Shannon publie sa théorie de l'information.",
              ],
              box: { label: "Repère", text: "1936 : machine de Turing. 1945 : architecture de von Neumann. 1946 : ENIAC. 1947 : transistor. 1948 : premier programme enregistré exécuté (Manchester)." },
            },
            {
              heading: "1950 à 1980 : langages, circuits intégrés et réseaux",
              paragraphs: [
                "Les langages s'éloignent de la machine : en 1952, Grace Hopper réalise l'un des premiers compilateurs ; FORTRAN (John Backus, IBM) paraît en 1957, Lisp en 1958, COBOL en 1959. En 1956, la conférence de Dartmouth lance l'expression « intelligence artificielle ». En 1958, Jack Kilby réalise le premier circuit intégré. En 1962, Philippe Dreyfus forge le mot « informatique ». En 1965, Gordon Moore énonce la loi qui porte son nom.",
                "En 1969, le réseau ARPANET relie ses premiers ordinateurs aux États-Unis, et Ken Thompson et Dennis Ritchie créent le système UNIX aux laboratoires Bell ; Ritchie crée le langage C en 1972. En 1971, Intel commercialise le premier microprocesseur, le 4004. En France, au début des années 1970, le réseau CYCLADES de Louis Pouzin expérimente la transmission par datagrammes, idée reprise par Internet, et en 1973 le Micral N de François Gernelle est l'un des premiers micro-ordinateurs. En 1974, Vinton Cerf et Robert Kahn publient le protocole TCP ; en 1977, Rivest, Shamir et Adleman publient RSA.",
              ],
            },
            {
              heading: "De 1980 à nos jours : micro-informatique, Web, mobile et IA",
              paragraphs: [
                "L'ordinateur entre dans les foyers : IBM PC en 1981, Macintosh d'Apple en 1984. Le 1er janvier 1983, ARPANET adopte TCP/IP : c'est souvent retenu comme la naissance d'Internet. La même année, Richard Stallman lance le projet GNU, fondement du logiciel libre. En 1989, Tim Berners-Lee propose au CERN le World Wide Web (HTML, HTTP, URL), dont le premier site ouvre en 1990-1991. En 1991, Linus Torvalds publie le noyau Linux et Guido van Rossum la première version de Python.",
                "La suite est celle de la mise en réseau de tous : moteurs de recherche (Google est fondé en 1998), smartphone (l'iPhone en 2007), réseaux sociaux, informatique en nuage. L'intelligence artificielle marque aussi les esprits : en 1997, Deep Blue (IBM) bat le champion du monde d'échecs Garry Kasparov ; en 2016, AlphaGo bat Lee Sedol au jeu de go ; fin 2022, ChatGPT rend les grands modèles de langage accessibles au grand public.",
              ],
            },
            {
              heading: "Logiciels et matériels : des rôles qui évoluent",
              paragraphs: [
                "Au début, le matériel est tout : programmer l'ENIAC, c'est le recâbler. Avec le programme enregistré (1945-1948), le logiciel devient une donnée qu'on change sans toucher à la machine. Les langages de haut niveau et les compilateurs rendent ensuite le logiciel indépendant d'une machine précise : un même programme FORTRAN, puis C, peut être compilé pour des ordinateurs différents.",
                "Le logiciel devient alors un produit à part entière : en 1969, IBM commence à vendre ses logiciels séparément de ses machines, et une industrie du logiciel se développe ; avec le PC, le système d'exploitation et les applications prennent une valeur considérable. Aujourd'hui, le logiciel définit le plus souvent les fonctions d'un appareil (un téléphone change de fonctionnalités par une mise à jour), tandis que le matériel se spécialise pour accélérer certains logiciels : processeurs graphiques, accélérateurs pour l'IA, systèmes sur puce.",
              ],
              box: { label: "À retenir", text: "Évolution des rôles : d'abord le matériel câblé ; puis le programme enregistré fait du logiciel une donnée ; les langages le rendent portable ; il devient une industrie ; aujourd'hui il définit les fonctions, et le matériel se spécialise pour l'accélérer." },
            },
          ],
          keyPoints: [
            "1642 Pascaline ; 1801 métier Jacquard ; 1843 notes d'Ada Lovelace ; 1854 algèbre de Boole.",
            "1936 machine de Turing ; 1945 architecture de von Neumann ; 1946 ENIAC ; 1947 transistor.",
            "1957 FORTRAN ; 1958 circuit intégré ; 1962 mot « informatique » ; 1969 ARPANET et UNIX ; 1971 microprocesseur Intel 4004.",
            "1974 TCP (Cerf et Kahn) ; 1983 passage d'ARPANET à TCP/IP ; 1989 proposition du Web (Berners-Lee) ; 1991 Linux et Python.",
            "1997 Deep Blue ; 2007 iPhone ; 2016 AlphaGo ; 2022 ChatGPT.",
            "Le logiciel est passé du câblage à la donnée, puis à l'industrie ; le matériel se spécialise aujourd'hui pour l'accélérer.",
          ],
          example: {
            statement: "Reliez chacune des notions de NSI suivantes à l'événement historique qui l'a fait naître, avec sa date et son protagoniste : a) l'indécidabilité du problème de l'arrêt ; b) le fait que programme et données partagent la même mémoire ; c) le protocole TCP ; d) le langage HTML et le protocole HTTP.",
            solution: [
              "a) L'indécidabilité de l'arrêt est démontrée par Alan Turing en 1936, dans l'article où il définit sa machine.",
              "b) Le programme enregistré en mémoire est décrit par John von Neumann en 1945 (architecture de von Neumann), et réalisé pour la première fois à Manchester en 1948.",
              "c) TCP est publié par Vinton Cerf et Robert Kahn en 1974 ; ARPANET l'adopte avec IP le 1er janvier 1983.",
              "d) HTML et HTTP sont créés par Tim Berners-Lee au CERN, qui propose le Web en 1989.",
              "Réponse : Turing 1936, von Neumann 1945, Cerf et Kahn 1974, Berners-Lee 1989.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces événements dans l'ordre chronologique et donnez leur date : premier microprocesseur Intel 4004 ; machine de Turing ; proposition du World Wide Web ; ENIAC ; Pascaline ; ARPANET.",
              hint: "Placez d'abord les deux extrêmes (le XVIIᵉ siècle et la fin du XXᵉ siècle), puis les quatre événements du XXᵉ siècle.",
              solution: [
                "Pascaline : 1642.",
                "Machine de Turing : 1936.",
                "ENIAC : 1946.",
                "ARPANET : 1969.",
                "Intel 4004 : 1971.",
                "Proposition du World Wide Web : 1989.",
              ],
            },
            {
              level: 2,
              statement: "Associez chaque personne à sa contribution et à sa date : Ada Lovelace, Grace Hopper, John von Neumann, Dennis Ritchie, Tim Berners-Lee, Linus Torvalds. Contributions : le Web ; le noyau Linux ; un des premiers compilateurs ; le langage C ; l'architecture à programme enregistré ; le premier programme publié pour la machine analytique.",
              hint: "Deux contributions datent du XIXᵉ siècle ou des années 1940, deux des années 1950-1970, deux de la période 1989-1991.",
              solution: [
                "Ada Lovelace : premier programme publié pour la machine analytique de Babbage, 1843.",
                "John von Neumann : architecture à programme enregistré, 1945.",
                "Grace Hopper : un des premiers compilateurs, 1952.",
                "Dennis Ritchie : langage C, 1972 (après UNIX, créé avec Ken Thompson en 1969).",
                "Tim Berners-Lee : le Web, proposé en 1989. Linus Torvalds : le noyau Linux, 1991.",
              ],
            },
            {
              level: 3,
              statement: "Rédigez une réponse argumentée (une quinzaine de lignes) à la question : « Comment les rôles du matériel et du logiciel ont-ils évolué depuis les années 1940 ? ». Appuyez-vous sur au moins quatre exemples datés, et concluez sur la situation actuelle.",
              hint: "Construisez un plan chronologique en trois temps : le matériel domine, le logiciel s'autonomise, le logiciel domine et le matériel se spécialise.",
              solution: [
                "Introduction : au départ, un ordinateur est d'abord une machine ; le logiciel s'en est progressivement détaché jusqu'à en définir les fonctions.",
                "Premier temps, le matériel domine : l'ENIAC (1946) est programmé en rebranchant des câbles ; changer de calcul, c'est modifier la machine.",
                "Deuxième temps, le logiciel devient une donnée puis un produit : avec l'architecture de von Neumann (1945) et le premier programme enregistré exécuté à Manchester (1948), on change de programme sans toucher au matériel. Les compilateurs (Hopper, 1952) et FORTRAN (1957) rendent les programmes indépendants d'une machine précise. En 1969, IBM vend ses logiciels séparément : une industrie du logiciel naît, amplifiée par le PC (1981).",
                "Troisième temps, le logiciel domine et le matériel se spécialise : un smartphone (2007) change de fonctionnalités par simple mise à jour, et des circuits spécialisés (processeurs graphiques, accélérateurs d'IA intégrés aux systèmes sur puce) sont conçus pour exécuter efficacement certains logiciels.",
                "Conclusion : le rapport s'est inversé, le matériel est aujourd'hui conçu au service du logiciel, mais les progrès du matériel (transistor en 1947, circuit intégré en 1958, microprocesseur en 1971) restent la condition de tous ces logiciels.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Ada Lovelace publie ses notes sur la machine analytique",
              "Alan Turing définit sa machine",
              "L'ENIAC est présenté au public",
              "Intel commercialise le microprocesseur 4004",
              "ARPANET adopte TCP/IP",
              "Tim Berners-Lee propose le World Wide Web",
              "AlphaGo bat Lee Sedol au jeu de go",
            ],
          },
          quiz: [
            {
              q: "Qui décrit en 1945 l'architecture où programme et données partagent la même mémoire ?",
              options: ["Alan Turing", "John von Neumann", "Charles Babbage", "Claude Shannon"],
              answer: 1,
              why: "C'est l'architecture de von Neumann, décrite dans son rapport de 1945 sur l'EDVAC.",
            },
            {
              q: "Quel événement date de 1969 ?",
              options: ["L'invention du transistor", "La création du Web", "La sortie du premier PC d'IBM", "La mise en service d'ARPANET"],
              answer: 3,
              why: "ARPANET relie ses premiers ordinateurs en 1969, l'année où UNIX est créé ; le transistor date de 1947, le Web de 1989, le PC d'IBM de 1981.",
            },
            {
              q: "Comment programmait-on l'ENIAC en 1946 ?",
              options: ["En écrivant du code Python", "Avec un compilateur FORTRAN", "En rebranchant des câbles et en réglant des commutateurs", "En chargeant un programme enregistré sur un disque dur magnétique"],
              answer: 2,
              why: "L'ENIAC n'avait pas de programme enregistré : il fallait modifier physiquement ses connexions.",
            },
            {
              q: "Qui a proposé le World Wide Web, et où ?",
              options: ["Tim Berners-Lee, au CERN", "Vinton Cerf, à l'université Stanford", "Linus Torvalds, à Helsinki", "Louis Pouzin, à l'IRIA"],
              answer: 0,
              why: "Tim Berners-Lee propose le Web en 1989 au CERN, près de Genève ; Cerf est l'un des auteurs de TCP.",
            },
            {
              q: "Quel est le premier microprocesseur commercialisé, en 1971 ?",
              options: ["L'Intel 4004", "Le Micral N", "Le Z3", "Le Colossus"],
              answer: 0,
              why: "L'Intel 4004 réunit pour la première fois un processeur complet sur une seule puce ; le Micral N est un micro-ordinateur de 1973.",
            },
          ],
          trap: "Confondre l'invention d'Internet (réseau, ARPANET 1969, TCP/IP 1983) et celle du Web (service qui fonctionne sur Internet, 1989), ou attribuer à Turing la construction de l'ENIAC. Une date sans protagoniste ni lien avec une notion ne rapporte presque rien dans une réponse.",
          method: "Construisez une frise personnelle en quatre périodes (avant 1936, 1936 à 1950, 1950 à 1980, depuis 1980) et placez-y une dizaine de repères. Pour chacun, notez la notion du programme de NSI qui s'y rattache : vous mémoriserez mieux une date qui explique quelque chose que vous avez étudié.",
        },
      ],
    },

    /* ==================================================================== */
    /* PRÉPARER L'ÉPREUVE DU BAC                                              */
    /* ==================================================================== */
    {
      id: 'bac-nsi',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'epreuve-ecrite-nsi',
          title: 'L\'épreuve écrite : méthode des exercices',
          minutes: 25,
          objectives: [
            "Connaître le format de l'épreuve écrite de spécialité NSI.",
            "Analyser un sujet et répartir son temps entre les trois exercices.",
            "Rédiger des réponses adaptées à chaque type de question : code à écrire ou à compléter, trace d'exécution, coût, explication, requête SQL.",
          ],
          course: [
            {
              heading: "Le format de l'épreuve",
              paragraphs: [
                "L'épreuve terminale de spécialité NSI comporte une partie écrite et une partie pratique sur ordinateur. La partie écrite dure 3 h 30 et pèse plus lourd que la partie pratique dans la note finale. Le sujet comporte trois exercices indépendants, à traiter tous les trois ; chacun porte sur une ou plusieurs parties du programme (structures de données, bases de données, réseaux, systèmes, algorithmique, programmation objet...) et le barème de chaque exercice est indiqué sur le sujet. La calculatrice n'est pas autorisée.",
                "Le langage utilisé est Python, et SQL pour les questions de bases de données. Les exercices sont progressifs : ils commencent par des questions de compréhension (lire du code, appliquer une définition) et finissent par des questions plus ouvertes (écrire une fonction complète, justifier un coût). Les notions du programme de première sont supposées acquises. La liste exacte des notions évaluées à l'écrit est fixée par les textes officiels de la session : vérifiez-la avec votre professeur.",
              ],
              box: { label: "Repère", text: "Écrit de NSI : 3 h 30, trois exercices indépendants et obligatoires, sans calculatrice, code en Python et requêtes en SQL. Barème indiqué sur le sujet." },
            },
            {
              heading: "Lire le sujet et gérer son temps",
              paragraphs: [
                "Commencez par lire tout le sujet (10 à 15 minutes) : repérez le thème de chaque exercice, les annexes (documentation de fonctions, schéma d'une base, interface d'une classe) et les fonctions déjà fournies. Commencez par l'exercice où vous vous sentez le plus à l'aise : les exercices sont indépendants et peuvent être traités dans n'importe quel ordre, à condition de bien les numéroter sur la copie.",
                "Répartissez votre temps selon le barème, en gardant 10 à 15 minutes à la fin pour vous relire. Dans un exercice, les questions s'enchaînent souvent, mais une question non résolue ne bloque pas la suite : vous pouvez utiliser une fonction demandée plus tôt même si vous ne l'avez pas écrite, en respectant son nom et sa spécification. Si vous butez sur une question plus de 10 minutes, passez à la suivante et revenez-y à la fin.",
              ],
              box: { label: "Méthode", text: "Lire tout le sujet, repérer annexes et fonctions fournies, commencer par l'exercice le mieux maîtrisé, répartir le temps selon le barème, ne pas rester bloqué, garder du temps pour se relire." },
            },
            {
              heading: "Répondre aux différents types de questions",
              paragraphs: [
                "Écrire une fonction : respectez exactement le nom et les paramètres imposés, et terminez par un return (pas un print) sauf si l'énoncé demande d'afficher. Compléter un code à trous : recopiez la ligne entière complétée, en indiquant son numéro. Trace d'exécution : présentez un tableau avec une colonne par variable et une ligne par tour de boucle ou par appel.",
                "Coût d'un algorithme : donnez l'ordre de grandeur (constant, logarithmique, linéaire, quadratique) et justifiez-le en une phrase (nombre de tours de boucle, nombre d'appels). Question d'explication : répondez en une ou deux phrases précises, avec le vocabulaire du cours (pile, clé primaire, interblocage, sous-problèmes...). Requête SQL : écrivez les mots-clés en majuscules, dans l'ordre SELECT, FROM, JOIN ... ON, WHERE, ORDER BY, et mettez les chaînes entre apostrophes.",
                "Dessin d'un arbre, d'un graphe, d'une table de routage ou d'un chronogramme : soyez lisible et complet (étiquettes, sens des arcs, valeurs). Dans tous les cas, une réponse partielle mais juste rapporte des points : ne laissez pas de question blanche si vous savez en faire une partie.",
              ],
            },
            {
              heading: "Soigner sa copie",
              paragraphs: [
                "Sur papier, l'indentation fait partie du code : tracez si besoin un trait vertical léger pour aligner les blocs, et écrivez une instruction par ligne. Choisissez des noms de variables explicites. N'hésitez pas à ajouter un court commentaire pour expliquer une ligne délicate. Avant de rendre, testez mentalement chaque fonction sur un petit exemple, en particulier sur les cas limites (liste vide, un seul élément, valeur absente).",
              ],
            },
          ],
          keyPoints: [
            "3 h 30, trois exercices indépendants et obligatoires, sans calculatrice, en Python et en SQL.",
            "Lire tout le sujet d'abord, repérer annexes et fonctions fournies, répartir le temps selon le barème.",
            "On peut utiliser une fonction d'une question précédente même sans l'avoir écrite.",
            "Fonction : nom et paramètres imposés, return final ; trace : tableau des variables ; coût : ordre de grandeur justifié.",
            "SQL : SELECT, FROM, JOIN ... ON, WHERE, ORDER BY ; chaînes entre apostrophes.",
            "Indentation soignée, tests mentaux sur les cas limites, relecture finale.",
          ],
          example: {
            statement: "Une question d'écrit demande : « Écrire une fonction maximum(t) qui renvoie le plus grand élément d'une liste t non vide d'entiers, sans utiliser la fonction max. Donner son coût. » Rédigez une réponse complète.",
            solution: [
              "On respecte le nom et le paramètre imposés. Ligne 1 : def maximum(t): ; ligne 2, dans la fonction : m = t[0] ; ligne 3 : for x in t: ; ligne 4, dans la boucle : if x > m: m = x ; ligne 5, après la boucle : return m.",
              "On initialise avec t[0] (et non avec 0), car la liste peut ne contenir que des nombres négatifs ; c'est possible puisque t est non vide.",
              "Test mental : maximum([-4, -1, -7]) : m = -4, puis -1 > -4 donc m = -1, puis -7 < -1 ; la fonction renvoie -1.",
              "Coût : la boucle fait un tour par élément, avec une comparaison par tour : le coût est linéaire, en O(n) où n est la longueur de t.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un sujet comporte trois exercices notés 6, 6 et 8 points sur 20. Vous disposez de 3 h 30. Vous réservez 15 minutes au début pour lire le sujet et 15 minutes à la fin pour vous relire. Répartissez le temps restant proportionnellement au barème.",
              hint: "Calculez d'abord le temps restant en minutes, puis le temps disponible par point.",
              solution: [
                "Durée totale : 3 h 30 = 210 minutes. Temps restant : 210 - 15 - 15 = 180 minutes.",
                "Temps par point : 180 ÷ 20 = 9 minutes.",
                "Exercice à 6 points : 6 × 9 = 54 minutes ; exercice à 8 points : 8 × 9 = 72 minutes.",
                "Vérification : 54 + 54 + 72 = 180. Répartition : 54 min, 54 min et 1 h 12 min.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction suivante. Ligne 1 : def mystere(t): ; ligne 2 : r = 0 ; ligne 3 : for i in range(len(t)): ; ligne 4, dans la boucle : if t[i] > t[r]: r = i ; ligne 5, après la boucle : return r. a) Présentez la trace de mystere([3, 8, 1, 8, 5]) dans un tableau. b) Que renvoie cet appel ? c) Que calcule cette fonction en général ? d) Que se passe-t-il pour une liste vide ?",
              hint: "Faites un tableau avec les colonnes i, t[i], t[r] et r, et une ligne par tour de boucle.",
              solution: [
                "a) Au départ r = 0. i = 0 : t[0] = 3, t[r] = 3, 3 > 3 est faux, r = 0. i = 1 : 8 > 3, r = 1. i = 2 : 1 > 8 faux, r = 1. i = 3 : 8 > 8 faux, r = 1. i = 4 : 5 > 8 faux, r = 1.",
                "b) La fonction renvoie 1.",
                "c) Elle renvoie l'indice du maximum de t ; en cas d'égalité, c'est l'indice de la première apparition du maximum, car la comparaison est stricte.",
                "d) Pour une liste vide, la boucle ne s'exécute pas et la fonction renvoie 0, qui n'est pas un indice valide : il faudrait préciser dans la spécification que t est non vide.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. On dispose d'une classe Pile dont l'interface est : Pile() crée une pile vide ; p.est_vide() renvoie True si p est vide ; p.empiler(x) ajoute x au sommet ; p.depiler() retire et renvoie l'élément du sommet. 1. On crée une pile vide p, puis on exécute : p.empiler(3) ; p.empiler(5) ; p.empiler(8) ; a = p.depiler() ; p.empiler(2). Donnez la valeur de a et le contenu de p, du bas vers le sommet. 2. Écrivez une fonction taille(p) qui renvoie le nombre d'éléments de p, en laissant p dans son état initial à la fin. 3. Donnez le coût de taille en fonction du nombre n d'éléments.",
              hint: "Pour compter, il faut dépiler ; pour restaurer la pile, rangez les éléments dépilés dans une pile auxiliaire, puis remettez-les.",
              solution: [
                "1. Après les trois empilements, la pile contient 3, 5, 8 (8 au sommet). depiler renvoie 8, donc a = 8. Puis on empile 2 : la pile contient 3, 5, 2, du bas vers le sommet.",
                "2. Ligne 1 : def taille(p): ; ligne 2 : q = Pile() ; ligne 3 : n = 0 ; ligne 4 : while not p.est_vide(): ; lignes 5 et 6, dans la boucle : q.empiler(p.depiler()) puis n = n + 1 ; ligne 7, après la boucle : while not q.est_vide(): ; ligne 8, dans cette boucle : p.empiler(q.depiler()) ; ligne 9 : return n.",
                "Justification : la première boucle vide p dans q en comptant les éléments ; q contient alors les éléments dans l'ordre inverse. La seconde boucle les remet dans p, ce qui rétablit l'ordre initial.",
                "3. Chaque élément est dépilé et empilé deux fois, avec des opérations de coût constant : le coût est linéaire, en O(n).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'épreuve écrite de NSI.",
            statements: [
              { text: "L'épreuve écrite dure 3 h 30.", true: true, why: "C'est la durée de la partie écrite de l'épreuve de spécialité NSI." },
              { text: "La calculatrice est autorisée à l'écrit de NSI.", true: false, why: "Elle n'est pas autorisée : les calculs demandés se font à la main." },
              { text: "Il faut traiter les exercices dans l'ordre du sujet.", true: false, why: "Les exercices sont indépendants : on peut les traiter dans l'ordre de son choix, en les numérotant clairement." },
              { text: "On peut utiliser une fonction demandée à une question précédente même si on ne l'a pas écrite.", true: true, why: "Il suffit de respecter son nom et sa spécification : la question suivante est évaluée pour elle-même." },
              { text: "Pour une fonction qui doit renvoyer un résultat, un print suffit.", true: false, why: "Afficher n'est pas renvoyer : sans return, la fonction renvoie None." },
              { text: "Une réponse partielle mais juste peut rapporter des points.", true: true, why: "Les correcteurs valorisent chaque élément correct : mieux vaut une réponse partielle qu'une question blanche." },
            ],
          },
          quiz: [
            {
              q: "Combien d'exercices comporte le sujet de l'écrit de NSI ?",
              options: ["Cinq, dont trois au choix", "Un seul long problème portant sur l'ensemble du programme", "Deux exercices", "Trois exercices indépendants, tous à traiter"],
              answer: 3,
              why: "Le sujet comporte trois exercices indépendants, qu'il faut tous traiter.",
            },
            {
              q: "Vous bloquez depuis 10 minutes sur une question 2.c. Que faire ?",
              options: ["Rendre la copie", "Passer à la suite et y revenir à la fin", "Recommencer l'exercice depuis le début", "Rester jusqu'à trouver, quoi qu'il arrive"],
              answer: 1,
              why: "Les questions suivantes peuvent souvent être traitées indépendamment ; on revient sur la question difficile s'il reste du temps.",
            },
            {
              q: "Comment présenter une trace d'exécution ?",
              options: ["Dans un tableau : une colonne par variable, une ligne par tour de boucle ou par appel", "En recopiant le code sans rien ajouter", "En donnant seulement le résultat final", "En décrivant le programme en une phrase générale"],
              answer: 0,
              why: "Le tableau montre l'évolution de chaque variable et permet au correcteur de suivre le raisonnement.",
            },
            {
              q: "Quel est l'ordre correct des clauses d'une requête SQL ?",
              options: ["FROM, SELECT, WHERE, ORDER BY", "SELECT, WHERE, FROM, ORDER BY", "SELECT, FROM, WHERE, ORDER BY", "WHERE, SELECT, FROM, ORDER BY"],
              answer: 2,
              why: "On écrit SELECT (colonnes), FROM (table, avec éventuellement JOIN ... ON), WHERE (condition), puis ORDER BY (tri).",
            },
            {
              q: "Pourquoi initialiser le maximum avec t[0] plutôt qu'avec 0 ?",
              options: ["Parce que 0 est interdit en Python", "Parce que c'est plus rapide", "Parce que t[0] est toujours le plus grand élément d'une liste non vide", "Parce que la liste peut ne contenir que des nombres négatifs"],
              answer: 3,
              why: "Avec 0, maximum([-4, -1]) renverrait 0, qui n'est même pas dans la liste.",
            },
          ],
          trap: "Écrire une fonction qui affiche le résultat avec print au lieu de le renvoyer avec return, ou changer le nom et l'ordre des paramètres imposés par l'énoncé. Autre perte de points classique : rester bloqué sur une question et ne pas traiter la fin d'un exercice.",
          method: "Entraînez-vous sur des sujets d'annales en conditions réelles (3 h 30, sans calculatrice ni ordinateur), puis corrigez-vous en tapant votre code sur machine : vous verrez immédiatement vos erreurs d'indentation, de bornes ou de return. Notez-les dans une liste personnelle à relire avant l'épreuve.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'epreuve-pratique-nsi',
          title: 'L\'épreuve pratique sur machine',
          minutes: 30,
          objectives: [
            "Connaître le déroulement de l'épreuve pratique et ses deux exercices.",
            "Programmer un algorithme du programme à partir de sa spécification et le tester.",
            "Compléter un programme à trous en respectant une spécification.",
            "Écrire des tests avec assert, y compris pour les cas limites.",
          ],
          course: [
            {
              heading: "Le déroulement de l'épreuve",
              paragraphs: [
                "La partie pratique dure 1 heure et se passe sur ordinateur, avec un environnement de programmation Python. Le sujet est tiré dans une banque nationale de sujets publiée à l'avance : vous pouvez donc vous entraîner sur des sujets de même nature tout au long de l'année. Il comporte deux exercices.",
                "Le premier exercice demande de programmer un algorithme figurant explicitement au programme, dont on fournit la spécification : c'est la restitution d'un algorithme travaillé plusieurs fois en cours (recherche d'une occurrence, maximum, moyenne, tri par insertion ou par sélection, recherche dichotomique, conversion en binaire, parcours d'un tableau ou d'un dictionnaire...). Le sujet propose souvent des exemples d'appels avec les résultats attendus. Il peut interdire certaines fonctions intégrées (max, sort, index...) : respectez cette consigne.",
                "Pour le second exercice, un programme est fourni. Il ne s'agit pas de tout écrire, mais de le compléter : remplir les trous d'un programme à trous, le documenter, ou ajouter des assertions, afin qu'il respecte une spécification donnée.",
              ],
              box: { label: "Repère", text: "Épreuve pratique : 1 h sur machine, sujet issu d'une banque nationale publiée. Exercice 1 : programmer un algorithme du programme d'après sa spécification. Exercice 2 : compléter un programme fourni (trous, documentation, assertions)." },
            },
            {
              heading: "Méthode pour le premier exercice",
              paragraphs: [
                "Lisez la spécification jusqu'au bout : nom de la fonction, paramètres, type du résultat, préconditions (liste non vide ? triée ?), fonctions interdites. Recopiez d'abord la ligne def avec exactement le nom et les paramètres demandés, et une docstring qui résume la spécification.",
                "Transformez immédiatement les exemples de l'énoncé en tests : par exemple assert maximum([1, 5, 3]) == 5. Écrivez ensuite la version la plus simple qui fonctionne, exécutez le fichier et corrigez jusqu'à ce que tous les tests passent. Ajoutez enfin vos propres tests sur les cas limites : liste vide si elle est permise, un seul élément, valeur absente, doublons, valeurs négatives.",
                "Une instruction assert condition ne fait rien si la condition est vraie et arrête le programme avec une AssertionError si elle est fausse : c'est le moyen le plus rapide de vérifier votre code. Pour comprendre une erreur, lisez le message en entier (type de l'erreur et numéro de ligne) et, si besoin, affichez les variables avec print à l'intérieur de la boucle.",
              ],
              box: { label: "Méthode", text: "Spécification lue en entier, def avec le nom imposé, exemples transformés en assert, version simple, exécution, correction, puis tests des cas limites." },
            },
            {
              heading: "Méthode pour le second exercice",
              paragraphs: [
                "Lisez tout le programme fourni avant de compléter quoi que ce soit : repérez le rôle de chaque fonction, de chaque variable et l'endroit où chaque trou intervient. Ne modifiez pas les parties fournies, sauf si l'énoncé le demande : on évalue votre capacité à compléter un code existant.",
                "Pour chaque trou, demandez-vous ce que la variable doit valoir à cet endroit, et vérifiez la cohérence avec la suite du code. Exécutez dès que possible : les exemples fournis vous diront si vos compléments sont justes. Pour un exercice de documentation, rédigez une docstring qui indique ce que la fonction reçoit, ce qu'elle renvoie et ses préconditions ; pour un exercice d'assertions, testez des cas variés.",
              ],
            },
            {
              heading: "Se préparer pendant l'année",
              paragraphs: [
                "Entraînez-vous sur les sujets de la banque nationale dans les conditions de l'épreuve : une heure, deux exercices, sans aide extérieure. Constituez une fiche des algorithmes classiques à savoir écrire sans hésiter et réécrivez-les régulièrement de mémoire. Maîtrisez votre environnement : créer et enregistrer un fichier, exécuter, lire la console, relancer après correction. Enregistrez souvent votre travail pendant l'épreuve.",
              ],
            },
          ],
          keyPoints: [
            "1 h sur ordinateur, sujet tiré d'une banque nationale publiée : on peut s'entraîner sur des sujets de même nature.",
            "Exercice 1 : programmer un algorithme du programme à partir de sa spécification, en respectant les fonctions interdites.",
            "Exercice 2 : compléter un programme fourni sans modifier ses parties données.",
            "Transformer les exemples de l'énoncé en assert, puis tester les cas limites (vide, un élément, absent, doublons).",
            "Lire les messages d'erreur en entier : type d'erreur et numéro de ligne.",
            "Enregistrer souvent et exécuter dès que possible.",
          ],
          example: {
            statement: "Énoncé de type exercice 1 : « Écrire une fonction recherche(x, t) qui prend en paramètres un entier x et une liste d'entiers t, et qui renvoie l'indice de la dernière occurrence de x dans t, ou -1 si x n'apparaît pas. Exemples : recherche(1, [2, 3, 4]) renvoie -1 ; recherche(1, [10, 12, 1, 56]) renvoie 2 ; recherche(1, [1, 50, 1]) renvoie 2. » Proposez une solution et ses tests.",
            solution: [
              "On respecte la signature : ligne 1 : def recherche(x, t): ; ligne 2, dans la fonction : res = -1 ; ligne 3 : for i in range(len(t)): ; ligne 4, dans la boucle : if t[i] == x: res = i ; ligne 5, après la boucle : return res.",
              "Comme on parcourt toute la liste et qu'on met à jour res à chaque occurrence, res contient à la fin l'indice de la dernière occurrence, ou -1 si aucune n'a été trouvée.",
              "Tests issus de l'énoncé : assert recherche(1, [2, 3, 4]) == -1 ; assert recherche(1, [10, 12, 1, 56]) == 2 ; assert recherche(1, [1, 50, 1]) == 2.",
              "Tests des cas limites : assert recherche(1, []) == -1 (liste vide) ; assert recherche(5, [5]) == 0 (un seul élément).",
              "Exécution : aucune AssertionError, la fonction respecte la spécification.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez une fonction nb_occurrences(x, t) qui renvoie le nombre de fois où x apparaît dans la liste t, sans utiliser la méthode count. Donnez trois tests avec assert, dont un sur la liste vide.",
              hint: "Utilisez un compteur initialisé à 0 et augmentez-le de 1 à chaque élément égal à x.",
              solution: [
                "Ligne 1 : def nb_occurrences(x, t): ; ligne 2 : n = 0 ; ligne 3 : for e in t: ; ligne 4, dans la boucle : if e == x: n = n + 1 ; ligne 5, après la boucle : return n.",
                "Tests : assert nb_occurrences(3, [3, 1, 3, 3]) == 3 ; assert nb_occurrences(7, [1, 2]) == 0 ; assert nb_occurrences(4, []) == 0.",
                "Sur la liste vide, la boucle ne s'exécute pas et la fonction renvoie 0, ce qui est correct.",
              ],
            },
            {
              level: 2,
              statement: "Complétez le programme à trous suivant pour qu'il renvoie un indice de x dans la liste triée t, ou -1 si x est absent. Ligne 1 : def dichotomie(t, x): ; ligne 2 : g = 0 ; ligne 3 : d = len(t) - 1 ; ligne 4 : while g <= d: ; ligne 5, dans la boucle : m = ... ; ligne 6 : if t[m] == x: return ... ; ligne 7 : elif t[m] < x: g = ... ; ligne 8 : else: d = ... ; ligne 9, après la boucle : return -1. Vérifiez ensuite votre code sur dichotomie([1, 3, 5, 7, 9, 11], 9) et dichotomie([1, 3, 5, 7, 9, 11], 4).",
              hint: "m est l'indice du milieu de la zone [g, d]. Si t[m] < x, la valeur cherchée ne peut être qu'à droite de m, m exclu.",
              solution: [
                "Ligne 5 : m = (g + d) // 2. Ligne 6 : return m. Ligne 7 : g = m + 1. Ligne 8 : d = m - 1.",
                "Premier test : g = 0, d = 5, m = 2, t[2] = 5 < 9, g = 3 ; m = (3 + 5) // 2 = 4, t[4] = 9 : la fonction renvoie 4.",
                "Second test : g = 0, d = 5, m = 2, t[2] = 5 > 4, d = 1 ; m = 0, t[0] = 1 < 4, g = 1 ; m = 1, t[1] = 3 < 4, g = 2 ; g > d, la boucle s'arrête : la fonction renvoie -1.",
                "Écrire g = m au lieu de g = m + 1 pourrait provoquer une boucle infinie (quand g = d = m, la zone ne rétrécit plus).",
              ],
            },
            {
              level: 3,
              statement: "Écrivez une fonction tri_selection(t) qui trie la liste t dans l'ordre croissant, en place (elle modifie t et ne renvoie rien), sans utiliser sort ni sorted. Rappel du principe : pour chaque indice i, on cherche l'indice du minimum de t[i:], puis on échange cet élément avec t[i]. Proposez ensuite des tests avec assert couvrant : une liste quelconque, une liste vide, un seul élément, des doublons, une liste déjà triée.",
              hint: "Deux boucles imbriquées : la boucle externe sur i, la boucle interne cherche l'indice du minimum à partir de i + 1. L'échange s'écrit t[i], t[i_min] = t[i_min], t[i].",
              solution: [
                "Ligne 1 : def tri_selection(t): ; ligne 2, dans la fonction : for i in range(len(t) - 1): ; ligne 3, dans la boucle externe : i_min = i ; ligne 4 : for j in range(i + 1, len(t)): ; ligne 5, dans la boucle interne : if t[j] < t[i_min]: i_min = j ; ligne 6, dans la boucle externe après la boucle interne : t[i], t[i_min] = t[i_min], t[i].",
                "Trace sur [5, 2, 9, 1] : i = 0, minimum 1 à l'indice 3, échange : [1, 2, 9, 5] ; i = 1, minimum 2 à l'indice 1 : inchangé ; i = 2, minimum 5 à l'indice 3, échange : [1, 2, 5, 9].",
                "Tests : t = [5, 2, 9, 1] ; tri_selection(t) ; assert t == [1, 2, 5, 9]. Puis t = [] ; tri_selection(t) ; assert t == []. Puis t = [4] ; tri_selection(t) ; assert t == [4].",
                "Doublons et liste triée : t = [3, 1, 3, 2] ; tri_selection(t) ; assert t == [1, 2, 3, 3]. Puis t = [1, 2, 3] ; tri_selection(t) ; assert t == [1, 2, 3].",
                "Comme la fonction trie en place et ne renvoie rien, on teste la liste après l'appel : écrire assert tri_selection(t) == [1, 2, 5, 9] serait faux, car tri_selection renvoie None.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche conseillée pour le premier exercice de l'épreuve pratique.",
            items: [
              "Lire toute la spécification et repérer les fonctions interdites",
              "Écrire la ligne def avec le nom et les paramètres imposés",
              "Transformer les exemples de l'énoncé en assert",
              "Écrire une première version simple de la fonction",
              "Exécuter le fichier et corriger les erreurs",
              "Ajouter des tests sur les cas limites",
            ],
          },
          quiz: [
            {
              q: "Combien de temps dure l'épreuve pratique de NSI ?",
              options: ["1 heure", "30 minutes", "2 heures", "3 h 30"],
              answer: 0,
              why: "La partie pratique dure 1 heure sur ordinateur ; 3 h 30 est la durée de l'écrit.",
            },
            {
              q: "En quoi consiste en général le second exercice de l'épreuve pratique ?",
              options: ["Écrire un programme entièrement nouveau", "Rédiger une dissertation argumentée sur l'histoire de l'informatique", "Compléter un programme fourni (trous, documentation ou assertions)", "Répondre à un questionnaire à choix multiples"],
              answer: 2,
              why: "Un programme est fourni ; on le complète pour qu'il respecte une spécification.",
            },
            {
              q: "Que fait l'instruction assert f(2) == 4 si f(2) vaut 4 ?",
              options: ["Elle affiche True", "Elle arrête le programme", "Elle renvoie 4", "Rien, le programme continue"],
              answer: 3,
              why: "Une assertion vraie est silencieuse ; seule une assertion fausse déclenche une AssertionError.",
            },
            {
              q: "L'énoncé interdit d'utiliser max. Que faire ?",
              options: ["L'utiliser quand même, puisque le résultat obtenu sera juste", "Écrire soi-même le parcours qui cherche le maximum", "Utiliser sorted(t)[-1] à la place", "Ignorer l'exercice"],
              answer: 1,
              why: "L'exercice évalue la capacité à programmer l'algorithme : contourner l'interdiction avec une autre fonction intégrée ne respecte pas la consigne.",
            },
            {
              q: "Lequel de ces tests vérifie un cas limite ?",
              options: ["assert somme([1, 2, 3]) == 6", "assert somme([]) == 0", "assert somme([4, 5]) == 9", "assert somme([10, 20, 30]) == 60"],
              answer: 1,
              why: "La liste vide est un cas limite classique, où beaucoup de programmes échouent (division par zéro, accès à t[0]).",
            },
          ],
          trap: "Coder directement sans relire la spécification, puis découvrir trop tard qu'il fallait renvoyer un indice et non une valeur, ou que max était interdit. Autre erreur : modifier le code fourni dans le second exercice au lieu de compléter seulement les trous.",
          method: "Pendant l'année, chronométrez-vous sur des sujets de la banque nationale : 20 minutes pour le premier exercice, 30 minutes pour le second, 10 minutes de vérification. Gardez une fiche des algorithmes classiques et réécrivez-en un de mémoire chaque semaine, tests compris.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'erreurs-classiques-nsi',
          title: 'Écrire du code sur papier et éviter les erreurs classiques',
          minutes: 25,
          objectives: [
            "Écrire sur papier un code Python lisible, correctement indenté et conforme à la spécification.",
            "Repérer et corriger les erreurs classiques de syntaxe et de logique en Python.",
            "Éviter les erreurs fréquentes en récursivité, en programmation objet et en SQL.",
            "Vérifier un code à la main sur un petit exemple et sur les cas limites.",
          ],
          course: [
            {
              heading: "Écrire du code lisible sur papier",
              paragraphs: [
                "À l'écrit, il n'y a ni interpréteur ni coloration syntaxique : le correcteur doit pouvoir lire votre code sans ambiguïté. L'indentation fait partie de la syntaxe de Python : un décalage mal placé change le sens du programme (une instruction dans la boucle ou après la boucle). Décalez nettement chaque bloc, tracez au besoin un trait vertical léger pour aligner les instructions d'un même bloc, et écrivez une instruction par ligne.",
                "Recopiez exactement le nom et les paramètres imposés, utilisez des noms de variables parlants (indice_min plutôt que x2) et réutilisez les fonctions déjà définies dans le sujet au lieu de tout réécrire. Si vous devez corriger, barrez proprement et réécrivez la ligne entière plutôt que de surcharger.",
              ],
            },
            {
              heading: "Les erreurs classiques en Python",
              paragraphs: [
                "Erreurs de syntaxe : oublier les deux-points à la fin d'une ligne def, if, elif, else, for ou while ; confondre = (affectation) et == (comparaison) ; oublier de fermer une parenthèse ou un crochet. Erreurs de bornes : range(n) va de 0 à n - 1 ; le dernier élément d'une liste t est t[len(t) - 1] (ou t[-1]) et t[len(t)] provoque une IndexError ; range(1, len(t)) oublie t[0].",
                "Erreurs de logique : afficher avec print au lieu de renvoyer avec return ; placer un return dans une boucle, ce qui l'arrête dès le premier tour ; utiliser / (division décimale, résultat flottant) au lieu de // (division entière) pour un indice ; initialiser un maximum à 0 alors que les valeurs peuvent être négatives ; accéder à une clé absente d'un dictionnaire (KeyError) sans tester d'abord if cle in d.",
                "Erreurs liées aux listes : l'affectation b = a ne copie pas la liste, les deux noms désignent le même objet, et b.append(4) modifie aussi a ; pour copier, on écrit b = a.copy(), b = list(a) ou b = a[:]. Modifier une liste pendant qu'on la parcourt (supprimer des éléments dans un for) donne des résultats imprévisibles. Enfin, une méthode comme t.sort() ou t.append(x) modifie t et renvoie None : écrire t = t.sort() fait perdre la liste.",
              ],
              box: { label: "À retenir", text: "Deux-points, = contre ==, bornes de range, t[len(t)] interdit, return et non print, pas de return prématuré dans une boucle, // pour les indices, b = a ne copie pas une liste, t.sort() renvoie None." },
            },
            {
              heading: "Récursivité, objets et SQL",
              paragraphs: [
                "En récursivité, deux oublis reviennent sans cesse : le cas de base (la fonction s'appelle sans fin et Python lève une RecursionError) et le return devant l'appel récursif (la fonction calcule le résultat puis le perd et renvoie None). Vérifiez aussi que chaque appel rapproche du cas de base : appeler f(n) dans f(n) ne termine jamais.",
                "En programmation objet, le premier paramètre de chaque méthode est self, et l'on accède aux attributs par self.attribut ; oublier self crée une variable locale qui disparaît à la fin de la méthode. On appelle une méthode avec des parenthèses : p.est_vide() et non p.est_vide, qui désigne la méthode elle-même (toujours considérée comme vraie dans un test).",
                "En SQL : les chaînes de caractères s'écrivent entre apostrophes (WHERE nom = 'Durand'), sans quoi Durand est lu comme un nom de colonne ; la comparaison s'écrit = et non == ; une requête UPDATE ou DELETE sans WHERE modifie ou supprime toutes les lignes de la table ; une jointure précise sa condition avec JOIN ... ON table1.cle = table2.cle ; COUNT(*) compte les lignes, et l'on ne mélange pas une colonne et une fonction d'agrégat sans GROUP BY.",
              ],
              box: { label: "Règle", text: "Récursivité : cas de base et return devant l'appel récursif. Objet : self en premier paramètre, self.attribut, parenthèses aux appels de méthodes. SQL : chaînes entre apostrophes, = pour comparer, jamais d'UPDATE ou de DELETE sans WHERE." },
            },
            {
              heading: "Se relire efficacement",
              paragraphs: [
                "La meilleure vérification est l'exécution à la main : choisissez un petit exemple (trois ou quatre éléments), suivez les valeurs des variables ligne par ligne, et comparez le résultat avec celui attendu. Testez ensuite les cas limites : liste vide, un seul élément, valeur absente, valeur en première ou en dernière position, doublons. Enfin, relisez la question : le résultat demandé est-il une valeur, un indice, un booléen, une liste ? La fonction doit-elle modifier la liste ou en renvoyer une nouvelle ?",
              ],
            },
          ],
          keyPoints: [
            "Indentation nette, une instruction par ligne, nom et paramètres imposés recopiés exactement.",
            "Pièges de syntaxe : deux-points oubliés, = au lieu de ==, parenthèses non fermées.",
            "Pièges de bornes : range(n) va de 0 à n - 1, t[len(t)] n'existe pas, range(1, len(t)) oublie t[0].",
            "return et non print ; pas de return prématuré dans une boucle ; b = a ne copie pas une liste.",
            "Récursivité : cas de base et return devant l'appel récursif ; objet : self ; SQL : apostrophes, WHERE.",
            "Toujours exécuter le code à la main sur un petit exemple et sur les cas limites.",
          ],
          example: {
            statement: "Un élève a écrit la fonction suivante pour renvoyer True si tous les éléments de t sont positifs ou nuls. Ligne 1 : def tous_positifs(t) ; ligne 2 : for i in range(1, len(t)): ; ligne 3, dans la boucle : if t[i] < 0: return False ; ligne 4, dans la boucle : else: return True. Trouvez et corrigez les erreurs.",
            solution: [
              "Ligne 1 : il manque les deux-points. Correction : def tous_positifs(t):.",
              "Ligne 2 : range(1, len(t)) commence à 1 et oublie t[0]. Correction : for i in range(len(t)): (ou for x in t:).",
              "Ligne 4 : le return True dans la boucle arrête la fonction dès le premier élément positif ; tous_positifs([3, -1]) renverrait True. Il faut supprimer le else et placer return True après la boucle, une fois tous les éléments vérifiés.",
              "Code corrigé : def tous_positifs(t): ; for x in t: ; (dans la boucle) if x < 0: return False ; (après la boucle) return True.",
              "Vérification : tous_positifs([3, -1]) renvoie False au deuxième tour ; tous_positifs([]) renvoie True, ce qui est cohérent (aucun élément négatif).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Trouvez les trois erreurs de cette fonction censée renvoyer la moyenne d'une liste non vide t. Ligne 1 : def moyenne(t) ; ligne 2 : s = 0 ; ligne 3 : for i in range(1, len(t)): ; ligne 4, dans la boucle : s = s + t[i] ; ligne 5, après la boucle : print(s / len(t)).",
              hint: "Regardez la fin de la ligne 1, les bornes de la boucle et la dernière instruction.",
              solution: [
                "Ligne 1 : il manque les deux-points : def moyenne(t):.",
                "Ligne 3 : la boucle commence à 1 et oublie t[0] : il faut range(len(t)).",
                "Ligne 5 : la fonction affiche au lieu de renvoyer ; elle renvoie None. Il faut return s / len(t).",
                "Avec les corrections, moyenne([4, 6, 8]) renvoie 18 ÷ 3 = 6.0.",
              ],
            },
            {
              level: 2,
              statement: "On exécute : a = [1, 2, 3] ; b = a ; b.append(4) ; c = a.copy() ; c.append(5) ; t = [3, 1, 2] ; t = t.sort(). a) Que contiennent a, b et c à la fin ? b) Que contient t ? c) Corrigez la dernière instruction pour que t soit la liste triée.",
              hint: "b = a ne crée pas de nouvelle liste ; copy en crée une. La méthode sort modifie la liste et renvoie None.",
              solution: [
                "a) b désigne la même liste que a : b.append(4) modifie donc a. a et b valent [1, 2, 3, 4].",
                "c est une copie de a faite après l'ajout de 4 : c vaut [1, 2, 3, 4, 5], et a n'est pas modifiée par c.append(5).",
                "b) t.sort() trie la liste puis renvoie None, et l'affectation t = ... remplace la liste par None : t vaut None.",
                "c) On écrit simplement t.sort() (tri en place, t devient [1, 2, 3]) ou t = sorted(t) (sorted renvoie une nouvelle liste triée).",
              ],
            },
            {
              level: 3,
              statement: "Exercice type bac. 1. La fonction suivante doit renvoyer la somme des éléments d'une liste : ligne 1 : def somme(t): ; ligne 2 : if len(t) == 0: return 0 ; ligne 3 : else: t[0] + somme(t[1:]). Que renvoie somme([5]) ? Que se passe-t-il pour somme([4, 5]) ? Corrigez. 2. Dans une base, la table eleve(id, nom, classe) contient des élèves de plusieurs classes. Un élève écrit : UPDATE eleve SET classe = TG3 pour changer la classe de l'élève d'identifiant 12. Relevez les deux erreurs et corrigez la requête.",
              hint: "Pour la fonction, demandez-vous ce que renvoie une fonction Python qui se termine sans exécuter de return. Pour la requête, pensez aux chaînes de caractères et à la condition.",
              solution: [
                "1. somme([5]) calcule 5 + somme([]) = 5 + 0 = 5, mais ce résultat n'est pas renvoyé : la fonction renvoie None.",
                "somme([4, 5]) calcule 4 + somme([5]), c'est-à-dire 4 + None : Python lève une TypeError (on ne peut pas additionner un entier et None).",
                "Correction de la ligne 3 : else: return t[0] + somme(t[1:]). Alors somme([4, 5]) = 4 + (5 + 0) = 9.",
                "2. Première erreur : TG3 est une chaîne et doit être entre apostrophes, sinon il est lu comme un nom de colonne. Seconde erreur : sans WHERE, la requête modifie la classe de tous les élèves de la table.",
                "Requête corrigée : UPDATE eleve SET classe = 'TG3' WHERE id = 12.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque erreur à sa correction.",
            pairs: [
              { left: "if x = 3:", right: "if x == 3:" },
              { left: "for i in range(1, len(t)):", right: "for i in range(len(t)):" },
              { left: "print(resultat) en fin de fonction", right: "return resultat" },
              { left: "b = a pour copier une liste", right: "b = a.copy()" },
              { left: "f(n - 1) seul dans le cas récursif", right: "return f(n - 1)" },
              { left: "WHERE nom = Durand", right: "WHERE nom = 'Durand'" },
            ],
          },
          quiz: [
            {
              q: "Que renvoie une fonction Python qui se termine sans exécuter d'instruction return ?",
              options: ["0", "Une erreur", "None", "La dernière valeur calculée"],
              answer: 2,
              why: "Sans return, une fonction renvoie None ; c'est l'origine de nombreuses erreurs avec print ou un return oublié en récursivité.",
            },
            {
              q: "Pour t = [4, 7, 9], que provoque t[len(t)] ?",
              options: ["Il renvoie 9", "Il renvoie 4", "Il renvoie None", "Une IndexError"],
              answer: 3,
              why: "Les indices vont de 0 à len(t) - 1 = 2 ; l'indice 3 n'existe pas. Le dernier élément est t[len(t) - 1] ou t[-1].",
            },
            {
              q: "Après a = [1, 2] ; b = a ; b.append(3), que vaut a ?",
              options: ["[1, 2, 3]", "[1, 2]", "[3]", "Une erreur"],
              answer: 0,
              why: "b = a ne copie pas la liste : a et b désignent le même objet, modifié par append.",
            },
            {
              q: "Que fait la requête DELETE FROM eleve sans clause WHERE ?",
              options: ["Rien, la requête est refusée", "Elle supprime toutes les lignes de la table eleve", "Elle supprime la première ligne", "Elle supprime la table elle-même, avec sa structure et ses colonnes"],
              answer: 1,
              why: "Sans condition, toutes les lignes sont concernées ; la table reste mais devient vide (c'est DROP TABLE qui supprime la table).",
            },
            {
              q: "Dans une méthode, l'élève écrit vitesse = 0 au lieu de self.vitesse = 0. Quelle est la conséquence ?",
              options: ["Python lève une erreur de syntaxe", "L'attribut vitesse de l'objet passe à 0", "Tous les objets de la classe passent à 0", "Une variable locale est créée, et l'attribut de l'objet ne change pas"],
              answer: 3,
              why: "Sans self., on crée une variable locale à la méthode, qui disparaît à la fin de l'appel.",
            },
          ],
          trap: "Croire qu'un code « presque juste » est juste parce qu'il fonctionne sur l'exemple de l'énoncé : un return placé dans la boucle ou une borne de range décalée passe souvent l'exemple et échoue sur les cas limites. Sur papier, l'erreur la plus coûteuse reste l'indentation ambiguë.",
          method: "Constituez votre liste personnelle d'erreurs : chaque fois que vous en commettez une en exercice, notez-la avec sa correction. Avant chaque devoir, relisez cette liste, puis, sur la copie, relisez chaque fonction avec trois questions : les deux-points et l'indentation sont-ils corrects ? Les bornes sont-elles justes ? Le résultat est-il renvoyé ?",
        },
      ],
    },
  ],
}
