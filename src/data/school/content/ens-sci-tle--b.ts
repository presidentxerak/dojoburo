import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ens-sci-tle',
  chapters: [
    /* ==================================================================== */
    /* LES MODÈLES DÉMOGRAPHIQUES                                             */
    /* ==================================================================== */
    {
      id: 'modeles-demographiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'modele-de-malthus',
          title: 'Croissance exponentielle et modèle de Malthus',
          minutes: 30,
          objectives: [
            "Analyser des données démographiques et identifier une évolution linéaire ou exponentielle.",
            "Exprimer l'effectif d'une population dans le modèle de Malthus à l'aide d'une suite géométrique.",
            "Comparer les prédictions du modèle de Malthus aux données réelles et discuter de ses limites.",
          ],
          course: [
            {
              heading: "Décrire l'évolution d'une population",
              paragraphs: [
                "L'effectif d'une population est le nombre d'individus qui la composent à une date donnée. Il varie sous l'effet de quatre flux : les naissances et les arrivées (immigration) l'augmentent, les décès et les départs (émigration) le diminuent. La différence entre naissances et décès est le solde naturel ; la différence entre arrivées et départs est le solde migratoire. Pour une population isolée, ou à l'échelle de la planète entière, seul compte le solde naturel.",
                "Pour comparer des populations de tailles différentes, on raisonne en taux. Le taux de natalité est le rapport du nombre de naissances d'une année à l'effectif de la population ; le taux de mortalité est le rapport du nombre de décès à cet effectif. On les exprime en pour mille (‰) ou en pourcentage. Par exemple, 12 000 naissances dans une population d'un million d'habitants correspondent à un taux de natalité de 12 ‰, soit 1,2 %.",
              ],
              box: { label: "Définition", text: "Le taux d'accroissement naturel d'une population est la différence entre son taux de natalité et son taux de mortalité. Avec une natalité de 1,2 % et une mortalité de 0,9 % par an, il vaut 0,3 % par an : la population gagne 3 individus pour 1 000 chaque année." },
            },
            {
              heading: "Évolution linéaire et évolution exponentielle",
              paragraphs: [
                "Une grandeur suit une évolution linéaire lorsqu'on lui ajoute la même quantité à chaque pas de temps. Si u(n) désigne sa valeur après n années, on a u(n+1) = u(n) + r, où r est constant : la suite (u(n)) est arithmétique et u(n) = u(0) + n × r. Sa représentation graphique est un ensemble de points alignés sur une droite. Exemple : un stock de céréales qui augmente de 5 tonnes chaque année.",
                "Une grandeur suit une évolution exponentielle lorsqu'on la multiplie par le même nombre q à chaque pas de temps : u(n+1) = q × u(n). La suite est géométrique de raison q et u(n) = u(0) × qⁿ. Si q > 1, la croissance s'accélère : l'augmentation absolue est de plus en plus grande, alors que l'augmentation relative (en pourcentage) reste constante. Une hausse de 3 % par an correspond à q = 1,03.",
                "Pour reconnaître le type d'évolution dans un tableau de données, on calcule les différences successives u(n+1) - u(n) et les quotients successifs u(n+1) ÷ u(n). Des différences à peu près constantes signalent une évolution linéaire ; des quotients à peu près constants signalent une évolution exponentielle. Une croissance exponentielle se caractérise aussi par un temps de doublement constant : avec 2 % par an, l'effectif double environ tous les 35 ans, puisque 1,02³⁵ ≈ 2.",
              ],
              box: { label: "Propriété", text: "Évolution linéaire : variation absolue constante, u(n) = u(0) + n × r. Évolution exponentielle : variation relative constante, u(n) = u(0) × qⁿ. Pour un taux de t % par an, le temps de doublement vaut environ 70 ÷ t années." },
            },
            {
              heading: "Le modèle de Malthus",
              paragraphs: [
                "Le pasteur et économiste anglais Thomas Robert Malthus (1766-1834) publie en 1798 son Essai sur le principe de population. Il y affirme qu'une population qui ne rencontre aucun obstacle croît selon une progression géométrique (il estime qu'elle peut doubler tous les 25 ans), alors que les subsistances ne peuvent croître, au mieux, que selon une progression arithmétique. Il en conclut que la population finit toujours par dépasser les ressources disponibles, ce qui provoque famines, épidémies et misère, à moins que les naissances ne soient limitées, par exemple en retardant l'âge du mariage.",
                "Le modèle mathématique qui porte son nom repose sur une hypothèse simple : chaque année, le nombre de naissances et le nombre de décès sont proportionnels à l'effectif de la population, avec un taux de natalité n et un taux de mortalité m constants. Si P(k) est l'effectif l'année k, alors P(k+1) = P(k) + n × P(k) - m × P(k) = (1 + n - m) × P(k). L'effectif suit donc une suite géométrique de raison q = 1 + n - m.",
                "Trois cas se présentent. Si n > m, alors q > 1 et l'effectif croît sans limite (vers l'infini). Si n < m, alors q < 1 et l'effectif décroît vers 0 : la population s'éteint. Si n = m, l'effectif reste constant. Par exemple, une population de 1 000 individus avec n = 4 % et m = 1 % par an est multipliée par 1,03 chaque année : elle compte 1 000 × 1,03¹⁰ ≈ 1 344 individus au bout de 10 ans.",
              ],
              box: { label: "Formule", text: "Modèle de Malthus (pas d'un an) : P(k+1) = (1 + n - m) × P(k), donc P(k) = P(0) × (1 + n - m)ᵏ, où n et m sont les taux annuels de natalité et de mortalité, supposés constants." },
            },
            {
              heading: "Confronter le modèle aux données réelles",
              paragraphs: [
                "Le modèle de Malthus décrit correctement certaines populations sur une durée courte : une culture de bactéries dans un milieu riche, une espèce introduite dans un milieu favorable sans prédateur, ou la population humaine pendant quelques décennies. La population mondiale, estimée à environ 1 milliard d'habitants vers 1800, a atteint 2 milliards vers 1927, 4 milliards en 1974 et 8 milliards en 2022 selon l'ONU : le temps de doublement s'est d'abord fortement raccourci, avant de cesser de diminuer.",
                "Sur le long terme, ses prédictions deviennent irréalistes. Une croissance exponentielle indéfinie est impossible dans un milieu aux ressources limitées (nourriture, espace, eau). De plus, les taux de natalité et de mortalité ne sont pas constants : le taux de croissance de la population mondiale a atteint un maximum d'un peu plus de 2 % par an au début des années 1960, puis il a diminué et il est passé sous 1 % par an vers 2020. Les pays traversent en effet une transition démographique : la mortalité baisse d'abord, puis la natalité.",
                "Malthus s'est également trompé sur les ressources : grâce aux progrès techniques de l'agriculture (mécanisation, engrais, sélection des variétés), la production alimentaire mondiale a augmenté plus vite qu'une progression arithmétique au XXe siècle. Son raisonnement garde néanmoins une valeur : il rappelle qu'aucune population ne peut croître indéfiniment dans un monde fini, idée qui a d'ailleurs inspiré Darwin dans l'élaboration de la théorie de la sélection naturelle.",
              ],
              box: { label: "À retenir", text: "Un modèle est une représentation simplifiée de la réalité. Le modèle de Malthus peut être pertinent sur une durée courte, mais il devient irréaliste sur une durée longue, car il ignore la limitation des ressources et la variation des taux de natalité et de mortalité." },
            },
          ],
          keyPoints: [
            "L'effectif varie selon les naissances, les décès et les migrations ; taux d'accroissement naturel = taux de natalité - taux de mortalité.",
            "Évolution linéaire : on ajoute la même quantité à chaque pas (suite arithmétique, points alignés).",
            "Évolution exponentielle : on multiplie par le même nombre q à chaque pas (suite géométrique) ; le temps de doublement est constant.",
            "Modèle de Malthus (1798) : P(k) = P(0) × (1 + n - m)ᵏ, avec n et m constants.",
            "Si n > m, l'effectif croît vers l'infini ; si n < m, il décroît vers 0 ; si n = m, il reste constant.",
            "Modèle acceptable sur une courte durée, irréaliste sur une longue durée : ressources limitées, taux variables (transition démographique).",
          ],
          example: {
            statement: "Une ville comptait 50 000 habitants en 2020. Son taux de natalité est de 1,4 % par an et son taux de mortalité de 0,9 % par an ; on néglige les migrations et on applique le modèle de Malthus. a) Exprimer l'effectif P(k) de la population k années après 2020. b) Estimer l'effectif en 2030. c) En quelle année l'effectif dépassera-t-il 60 000 habitants selon ce modèle ?",
            solution: [
              "a) Chaque année, la population est multipliée par q = 1 + n - m = 1 + 0,014 - 0,009 = 1,005. Donc P(k) = 50 000 × 1,005ᵏ.",
              "b) L'année 2030 correspond à k = 10 : P(10) = 50 000 × 1,005¹⁰ ≈ 50 000 × 1,0511 ≈ 52 557 habitants.",
              "c) On cherche le plus petit entier k tel que 50 000 × 1,005ᵏ > 60 000, c'est-à-dire 1,005ᵏ > 1,2.",
              "Avec le tableau de valeurs de la calculatrice : 1,005³⁶ ≈ 1,1967 < 1,2 et 1,005³⁷ ≈ 1,2027 > 1,2. On peut aussi résoudre k > ln(1,2) ÷ ln(1,005) ≈ 36,6.",
              "Réponse : le seuil de 60 000 habitants est dépassé pour k = 37, c'est-à-dire en 2057, à condition que les taux restent constants, ce qui est une hypothèse forte sur une telle durée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Deux grandeurs sont relevées chaque année pendant quatre ans. Grandeur A : 120 ; 150 ; 180 ; 210. Grandeur B : 200 ; 240 ; 288 ; 345,6. Pour chacune, indiquer si l'évolution est linéaire ou exponentielle, en justifiant, puis donner la valeur suivante prévue.",
              hint: "Calculez les différences successives, puis les quotients successifs : lequel des deux est constant ?",
              solution: [
                "Grandeur A : les différences valent 150 - 120 = 30, 180 - 150 = 30 et 210 - 180 = 30. Elles sont constantes : l'évolution est linéaire (suite arithmétique de raison 30).",
                "Valeur suivante de A : 210 + 30 = 240.",
                "Grandeur B : les différences valent 40, 48 et 57,6 ; elles ne sont pas constantes. Les quotients valent 240 ÷ 200 = 1,2 ; 288 ÷ 240 = 1,2 ; 345,6 ÷ 288 = 1,2. Ils sont constants : l'évolution est exponentielle (suite géométrique de raison 1,2, soit + 20 % par an).",
                "Valeur suivante de B : 345,6 × 1,2 = 414,72.",
              ],
            },
            {
              level: 2,
              statement: "Dans un milieu de culture riche, une population de 1 000 bactéries double toutes les 20 minutes. On suppose que cette croissance suit le modèle de Malthus. a) Combien de bactéries compte la culture au bout de 2 heures ? b) Au bout de combien de temps dépasse-t-elle un million de bactéries ? c) Calculer l'effectif prévu au bout de 24 heures et commenter, sachant qu'une bactérie a une masse de l'ordre de 10⁻¹² g.",
              hint: "Prenez comme pas de temps 20 minutes : à chaque pas, l'effectif est multiplié par 2. Comptez le nombre de pas dans la durée demandée.",
              solution: [
                "Avec un pas de 20 minutes, N(k) = 1 000 × 2ᵏ, où k est le nombre de périodes de 20 minutes écoulées.",
                "a) 2 heures = 120 minutes = 6 pas. N(6) = 1 000 × 2⁶ = 1 000 × 64 = 64 000 bactéries.",
                "b) On cherche k tel que 1 000 × 2ᵏ > 1 000 000, soit 2ᵏ > 1 000. Comme 2⁹ = 512 et 2¹⁰ = 1 024, il faut k = 10 pas, soit 200 minutes, c'est-à-dire 3 h 20 min.",
                "c) 24 heures = 1 440 minutes = 72 pas. N(72) = 1 000 × 2⁷² ≈ 4,7 × 10²⁴ bactéries.",
                "La masse correspondante serait d'environ 4,7 × 10²⁴ × 10⁻¹² g = 4,7 × 10¹² g, soit environ 4,7 millions de tonnes : c'est absurde pour une culture de laboratoire.",
                "Conclusion : le modèle de Malthus décrit bien le début de la croissance, mais les nutriments s'épuisent et les déchets s'accumulent ; la croissance ralentit puis s'arrête. Le modèle n'est valable que sur une courte durée.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Le tableau donne la population mondiale en milliards d'habitants (valeurs arrondies d'après les estimations des Nations unies) : 1950 : 2,5 ; 1960 : 3,0 ; 1970 : 3,7 ; 1980 : 4,4 ; 1990 : 5,3 ; 2000 : 6,1 ; 2010 : 7,0 ; 2020 : 7,8. 1) Calculer le coefficient multiplicateur de chaque décennie. 2) On modélise l'évolution à partir de 1950 par un modèle de Malthus dont le coefficient par décennie est celui de la période 1950-1960. Calculer la population prévue en 2020 et l'écart relatif avec la valeur estimée. 3) Ce modèle prévoit-il correctement la population de 2050, que l'ONU estime à environ 9,7 milliards ? 4) Conclure sur la validité du modèle.",
              hint: "Le coefficient multiplicateur d'une décennie est le quotient de la population en fin de décennie par la population en début de décennie. Ici, le pas de temps du modèle est la décennie.",
              solution: [
                "1) Coefficients : 3,0 ÷ 2,5 = 1,20 ; 3,7 ÷ 3,0 ≈ 1,23 ; 4,4 ÷ 3,7 ≈ 1,19 ; 5,3 ÷ 4,4 ≈ 1,20 ; 6,1 ÷ 5,3 ≈ 1,15 ; 7,0 ÷ 6,1 ≈ 1,15 ; 7,8 ÷ 7,0 ≈ 1,11. Ils restent proches de 1,2 jusqu'en 1990, puis diminuent nettement.",
                "2) Modèle : P(k) = 2,5 × 1,2ᵏ, avec k le nombre de décennies écoulées depuis 1950. En 2020, k = 7 : P(7) = 2,5 × 1,2⁷ ≈ 2,5 × 3,583 ≈ 9,0 milliards.",
                "Écart relatif : (9,0 - 7,8) ÷ 7,8 ≈ 0,15, soit environ 15 % : le modèle surestime nettement la population de 2020.",
                "3) En 2050, k = 10 : P(10) = 2,5 × 1,2¹⁰ ≈ 2,5 × 6,19 ≈ 15,5 milliards, bien au-delà des 9,7 milliards estimés par l'ONU. Le modèle ne convient pas pour cette prévision.",
                "4) Le modèle de Malthus décrit correctement la période 1950-1990, où le coefficient multiplicateur reste proche de 1,2. Depuis, la croissance ralentit : le taux d'accroissement diminue, en lien avec la baisse de la fécondité (transition démographique). Un modèle exponentiel à taux constant n'est donc valable que sur une durée limitée et ne permet pas de prévisions à long terme.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Taux de natalité", right: "Nombre de naissances d'une année rapporté à l'effectif de la population" },
              { left: "Suite arithmétique", right: "On ajoute la même quantité à chaque pas : évolution linéaire" },
              { left: "Suite géométrique", right: "On multiplie par le même nombre à chaque pas : évolution exponentielle" },
              { left: "Temps de doublement", right: "Durée constante au bout de laquelle une grandeur à croissance exponentielle double" },
              { left: "Modèle de Malthus", right: "Effectif multiplié chaque année par 1 + n - m, avec des taux constants" },
              { left: "Transition démographique", right: "Baisse de la mortalité, puis de la natalité, qui ralentit la croissance" },
            ],
          },
          quiz: [
            {
              q: "Une population de 5 000 individus a un taux de natalité de 3 % et un taux de mortalité de 1 % par an. Selon le modèle de Malthus, combien compte-t-elle au bout d'un an ?",
              options: ["5 020", "5 100", "5 150", "5 200"],
              answer: 1,
              why: "Le coefficient multiplicateur vaut q = 1 + 0,03 - 0,01 = 1,02, donc 5 000 × 1,02 = 5 100.",
            },
            {
              q: "Dans le modèle de Malthus, que devient l'effectif si le taux de mortalité est supérieur au taux de natalité ?",
              options: ["Il croît vers l'infini", "Il reste constant", "Il se stabilise à une valeur limite non nulle", "Il décroît vers 0"],
              answer: 3,
              why: "Si m > n, alors q = 1 + n - m < 1 : l'effectif est multiplié chaque année par un nombre inférieur à 1 et tend vers 0.",
            },
            {
              q: "Quelle série de valeurs traduit une évolution exponentielle ?",
              options: ["10 ; 15 ; 22,5 ; 33,75", "10 ; 15 ; 20 ; 25", "10 ; 20 ; 25 ; 27,5"],
              answer: 0,
              why: "Chaque valeur y est multipliée par 1,5 : les quotients successifs sont constants. La deuxième série a des différences constantes (évolution linéaire).",
            },
            {
              q: "En quelle année Malthus publie-t-il son Essai sur le principe de population ?",
              options: ["1789", "1838", "1798", "1859"],
              answer: 2,
              why: "L'Essai paraît en 1798. En 1838, Verhulst propose son modèle logistique ; 1859 est l'année de L'Origine des espèces de Darwin.",
            },
            {
              q: "Pourquoi le modèle de Malthus devient-il irréaliste sur une longue durée ?",
              options: ["Parce qu'il ne s'applique qu'aux bactéries et aux autres micro-organismes", "Parce qu'il suppose des taux constants et des ressources illimitées", "Parce qu'il prévoit une évolution linéaire", "Parce qu'il ignore les naissances"],
              answer: 1,
              why: "Le modèle suppose que natalité et mortalité ne changent pas et ne tient pas compte des ressources limitées : il prévoit une croissance infinie, impossible dans un monde fini.",
            },
          ],
          trap: "Conclure à une évolution exponentielle dès que les différences successives augmentent, sans vérifier que ce sont bien les quotients successifs qui sont constants. Autre erreur fréquente : prendre n - m comme coefficient multiplicateur au lieu de q = 1 + n - m.",
          method: "Devant un tableau de données démographiques, ajoutez systématiquement deux lignes au tableur : les différences u(n+1) - u(n) et les quotients u(n+1) ÷ u(n). Celle qui est à peu près constante désigne le modèle (linéaire ou exponentiel) et donne directement sa raison.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'modele-de-verhulst',
          title: 'Le modèle logistique de Verhulst',
          minutes: 30,
          objectives: [
            "Expliquer pourquoi la limitation des ressources rend nécessaires des modèles de croissance non exponentielle.",
            "Décrire le modèle logistique de Verhulst et interpréter ses paramètres r et K.",
            "Calculer les effectifs successifs d'une population avec un tableur ou un programme et interpréter la courbe obtenue.",
            "Analyser des prévisions démographiques en tenant compte de leurs hypothèses et de leurs incertitudes.",
          ],
          course: [
            {
              heading: "Quand les ressources deviennent limitantes",
              paragraphs: [
                "Dans le modèle de Malthus, le taux d'accroissement de la population est constant, quel que soit son effectif. Or, dans un milieu réel, plus une population est nombreuse, plus la compétition entre individus pour la nourriture, l'eau, l'espace ou les abris est forte. Les déchets s'accumulent, les maladies se transmettent plus facilement : la natalité tend à baisser et la mortalité à augmenter. Le taux d'accroissement diminue donc lorsque l'effectif augmente.",
                "C'est ce qu'on observe en laboratoire avec des levures ou des paramécies cultivées dans un volume fixe de milieu : la croissance est d'abord rapide, presque exponentielle, puis elle ralentit et l'effectif se stabilise. C'est aussi le cas d'une espèce introduite sur une île : après une phase d'expansion, son effectif plafonne à un niveau que le milieu peut supporter durablement.",
              ],
              box: { label: "Définition", text: "La capacité d'accueil (ou capacité biotique) d'un milieu, notée K, est l'effectif maximal d'une population que ce milieu peut supporter durablement, compte tenu des ressources disponibles." },
            },
            {
              heading: "Le modèle de Verhulst",
              paragraphs: [
                "En 1838, le mathématicien belge Pierre-François Verhulst (1804-1849) propose un modèle qui corrige celui de Malthus ; il le nomme « logistique » en 1845. Son idée : le taux d'accroissement n'est plus constant, il diminue à mesure que l'effectif augmente et s'annule lorsque l'effectif atteint la capacité d'accueil K. Il vaut r × (1 - N ÷ K), où r est le taux d'accroissement intrinsèque, c'est-à-dire celui de la population lorsqu'elle est très petite.",
                "Sous forme discrète, avec un pas de temps fixé (une heure, un an), le modèle s'écrit N(k+1) = N(k) + r × N(k) × (1 - N(k) ÷ K). Le terme r × N(k) est l'accroissement que prévoirait Malthus ; le facteur (1 - N(k) ÷ K) le freine d'autant plus que N(k) se rapproche de K. En mathématiques, on l'écrit aussi sous forme continue : N'(t) = r × N(t) × (1 - N(t) ÷ K).",
                "Exemple : une population de 100 individus, avec r = 0,5 par an et K = 1 000. La première année, l'accroissement vaut 0,5 × 100 × (1 - 0,1) = 45 : l'effectif passe à 145. Pour une population de 900 individus, l'accroissement ne vaudrait que 0,5 × 900 × 0,1 = 45 lui aussi, alors que le modèle de Malthus prévoirait 0,5 × 900 = 450.",
              ],
              box: { label: "Formule", text: "Modèle de Verhulst (forme discrète) : N(k+1) = N(k) + r × N(k) × (1 - N(k) ÷ K). r : taux d'accroissement intrinsèque ; K : capacité d'accueil du milieu." },
            },
            {
              heading: "La courbe logistique",
              paragraphs: [
                "La représentation de N en fonction du temps est une courbe en S, appelée sigmoïde ou courbe logistique. On y distingue trois phases. Au début, N est petit devant K, le facteur (1 - N ÷ K) est proche de 1 et la croissance est presque exponentielle : on retrouve le modèle de Malthus. Ensuite, la croissance ralentit. Enfin, l'effectif se stabilise au voisinage de K : c'est un plateau.",
                "L'accroissement r × N × (1 - N ÷ K) est maximal lorsque N = K ÷ 2 : c'est le point d'inflexion de la courbe, où la pente est la plus forte. Si l'effectif initial dépasse K, l'accroissement est négatif et l'effectif diminue jusqu'à K. Les effectifs N = 0 et N = K sont des équilibres : la population ne varie plus.",
                "Au tableur, on place le temps en colonne A et l'effectif en colonne B ; la cellule B3 contient par exemple la formule =B2+$E$1*B2*(1-B2/$E$2), où E1 contient r et E2 contient K, puis on recopie vers le bas. En Python, une boucle for applique la même relation de récurrence. Remarque : dans la forme discrète, si r est trop grand (r > 2), l'effectif ne se stabilise plus mais oscille autour de K.",
              ],
              box: { label: "Propriété", text: "Dans le modèle de Verhulst, l'effectif tend vers la capacité d'accueil K. La croissance est presque exponentielle tant que N est petit devant K, et l'accroissement est maximal lorsque N = K ÷ 2." },
            },
            {
              heading: "Les prévisions démographiques",
              paragraphs: [
                "Le taux de croissance de la population mondiale diminue depuis les années 1960, ce qui évoque qualitativement la deuxième phase d'une courbe logistique. Mais la population humaine n'obéit pas strictement au modèle de Verhulst : sa capacité d'accueil n'est pas fixe, car les techniques agricoles, les échanges et les modes de consommation la modifient. Surtout, le ralentissement s'explique par la transition démographique (baisse de la mortalité infantile, scolarisation, urbanisation, accès à la contraception) plus que par le manque de ressources.",
                "Les démographes de l'ONU construisent donc leurs projections pays par pays, en formulant des hypothèses sur l'évolution de la fécondité, de la mortalité et des migrations. Dans les projections publiées en 2024 (World Population Prospects), le scénario moyen prévoit un maximum d'environ 10,3 milliards d'habitants vers le milieu des années 2080, suivi d'une légère baisse. D'autres scénarios donnent des valeurs différentes : l'incertitude augmente avec l'horizon de la prévision.",
              ],
              box: { label: "À retenir", text: "Une projection démographique n'est pas une certitude : elle dépend d'hypothèses sur la fécondité, la mortalité et les migrations. Plus l'horizon est lointain, plus l'écart entre les scénarios est grand." },
            },
          ],
          keyPoints: [
            "Dans un milieu aux ressources limitées, le taux d'accroissement diminue quand l'effectif augmente.",
            "Capacité d'accueil K : effectif maximal qu'un milieu peut supporter durablement.",
            "Modèle de Verhulst (1838) : N(k+1) = N(k) + r × N(k) × (1 - N(k) ÷ K).",
            "Courbe en S (logistique) : phase presque exponentielle, ralentissement, plateau au niveau de K.",
            "Accroissement maximal lorsque N = K ÷ 2 ; si N dépasse K, l'effectif diminue vers K.",
            "Les projections de l'ONU reposent sur des scénarios (fécondité, mortalité, migrations) ; l'incertitude croît avec l'horizon.",
          ],
          example: {
            statement: "Une population suit le modèle de Verhulst avec N(0) = 100, r = 0,5 par an et K = 1 000. a) Calculer N(1), N(2) et N(3). b) Un tableur donne ensuite N(4) ≈ 392, N(5) ≈ 511, N(6) ≈ 636, N(7) ≈ 752 et N(8) ≈ 845. Entre quelles années l'accroissement est-il le plus grand ? Commenter. c) Vers quelle valeur l'effectif tend-il ?",
            solution: [
              "a) N(1) = 100 + 0,5 × 100 × (1 - 100 ÷ 1 000) = 100 + 50 × 0,9 = 145.",
              "N(2) = 145 + 0,5 × 145 × (1 - 0,145) = 145 + 72,5 × 0,855 ≈ 145 + 62,0 ≈ 207.",
              "N(3) ≈ 207 + 0,5 × 207 × (1 - 0,207) ≈ 207 + 82,1 ≈ 289.",
              "b) Accroissements successifs : 45 ; 62 ; 82 ; 103 ; 119 ; 125 ; 116 ; 93. Le plus grand (environ 125) a lieu entre les années 5 et 6, lorsque l'effectif passe de 511 à 636, c'est-à-dire au voisinage de K ÷ 2 = 500.",
              "C'est le point d'inflexion de la courbe en S : avant, la croissance accélère ; après, elle ralentit.",
              "c) L'accroissement devient de plus en plus faible à mesure que N se rapproche de K : l'effectif tend vers la capacité d'accueil, soit 1 000 individus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une population suit le modèle N(k+1) = N(k) + 0,4 × N(k) × (1 - N(k) ÷ 500), avec N(0) = 50. a) Identifier r et K. b) Calculer N(1) et N(2). c) Comparer avec les valeurs prévues par un modèle de Malthus de même taux r = 0,4.",
              hint: "Calculez d'abord N(k) ÷ 500, puis le facteur de freinage 1 - N(k) ÷ 500, avant de multiplier.",
              solution: [
                "a) r = 0,4 (taux d'accroissement intrinsèque) et K = 500 (capacité d'accueil).",
                "b) N(1) = 50 + 0,4 × 50 × (1 - 50 ÷ 500) = 50 + 20 × 0,9 = 50 + 18 = 68.",
                "N(2) = 68 + 0,4 × 68 × (1 - 68 ÷ 500) = 68 + 27,2 × 0,864 ≈ 68 + 23,5 = 91,5.",
                "c) Avec le modèle de Malthus, l'effectif est multiplié par 1,4 : 50 × 1,4 = 70, puis 70 × 1,4 = 98. Les deux modèles restent proches au début, car N est petit devant K ; l'écart augmentera ensuite.",
              ],
            },
            {
              level: 2,
              statement: "Une population de poissons vit dans un lac dont la capacité d'accueil est K = 12 000 poissons ; son taux d'accroissement intrinsèque est r = 0,3 par an. On utilise le modèle de Verhulst. a) Calculer l'accroissement annuel r × N × (1 - N ÷ K) pour N = 1 000, N = 6 000 et N = 11 000. b) Pour quel effectif l'accroissement est-il maximal ? c) Que se passe-t-il si l'on introduit des poissons jusqu'à atteindre N = 15 000 ? d) Pourquoi les gestionnaires de la pêche cherchent-ils à maintenir l'effectif autour de 6 000 poissons ?",
              hint: "Le facteur (1 - N ÷ K) vaut 1 quand N est nul, 0,5 quand N = K ÷ 2 et 0 quand N = K. Il devient négatif si N dépasse K.",
              solution: [
                "a) N = 1 000 : 0,3 × 1 000 × (1 - 1 000 ÷ 12 000) = 300 × (11 ÷ 12) = 275 poissons par an.",
                "N = 6 000 : 0,3 × 6 000 × (1 - 0,5) = 1 800 × 0,5 = 900 poissons par an.",
                "N = 11 000 : 0,3 × 11 000 × (1 ÷ 12) = 3 300 ÷ 12 = 275 poissons par an.",
                "b) L'accroissement est maximal pour N = K ÷ 2 = 6 000 (il vaut alors 900 par an). Il est plus faible quand la population est petite (peu de reproducteurs) ou proche de K (ressources limitantes).",
                "c) Pour N = 15 000 : 0,3 × 15 000 × (1 - 1,25) = 4 500 × (-0,25) = -1 125. L'accroissement est négatif : l'effectif diminue et revient vers K = 12 000.",
                "d) Autour de 6 000 poissons, la population se renouvelle le plus vite : on peut prélever chaque année environ 900 poissons sans faire baisser l'effectif. C'est l'idée du rendement maximal durable.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Des levures sont cultivées dans un volume fixe de milieu nutritif contenant du glucose. On mesure leur concentration N (en millions de cellules par mL) toutes les 2 heures (données simplifiées) : 0 h : 10 ; 2 h : 25 ; 4 h : 60 ; 6 h : 120 ; 8 h : 175 ; 10 h : 195 ; 12 h : 200 ; 14 h : 200. 1) Décrire l'allure de la courbe N(t). 2) On construit un modèle de Malthus à partir des deux premières mesures. Calculer son coefficient multiplicateur sur 2 heures, puis ses prévisions à 6 h et à 10 h. Comparer aux mesures. 3) Estimer la capacité d'accueil K et montrer que l'accroissement est maximal lorsque N est voisin de K ÷ 2. 4) Proposer deux explications biologiques au plateau observé.",
              hint: "Calculez les accroissements entre deux mesures successives et repérez le plus grand. Pour le modèle de Malthus, le coefficient sur 2 heures est 25 ÷ 10.",
              solution: [
                "1) La courbe a une forme en S : la croissance est de plus en plus rapide de 0 à 6 h, puis de plus en plus lente de 6 à 12 h, et l'effectif atteint enfin un plateau à 200 millions de cellules par mL.",
                "2) Coefficient multiplicateur sur 2 heures : q = 25 ÷ 10 = 2,5. Modèle : N(k) = 10 × 2,5ᵏ, k étant le nombre de périodes de 2 h.",
                "À 6 h (k = 3) : 10 × 2,5³ = 156,25, contre 120 mesurés. À 10 h (k = 5) : 10 × 2,5⁵ ≈ 977, contre 195 mesurés. Le modèle de Malthus surestime de plus en plus l'effectif : il n'est acceptable qu'au tout début de la culture.",
                "3) L'effectif se stabilise à 200 : K ≈ 200 millions de cellules par mL, donc K ÷ 2 ≈ 100.",
                "Accroissements sur chaque intervalle de 2 h : 15 ; 35 ; 60 ; 55 ; 20 ; 5 ; 0. Le plus grand (60) a lieu entre 4 h et 6 h, quand N passe de 60 à 120, donc au voisinage de 100 = K ÷ 2, comme le prévoit le modèle de Verhulst.",
                "4) Le glucose, ressource limitée, s'épuise progressivement ; les levures rejettent des déchets (l'éthanol produit par la fermentation, par exemple) qui deviennent toxiques en s'accumulant. Ces deux facteurs freinent la multiplication des cellules : le modèle logistique décrit mieux ces données que le modèle de Malthus.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le modèle logistique.",
            statements: [
              { text: "Dans le modèle de Verhulst, le taux d'accroissement est constant.", true: false, why: "Il vaut r × (1 - N ÷ K) : il diminue quand l'effectif augmente." },
              { text: "Au début de la croissance, les modèles de Malthus et de Verhulst donnent des résultats proches.", true: true, why: "Quand N est petit devant K, le facteur (1 - N ÷ K) est proche de 1." },
              { text: "La croissance logistique est la plus rapide lorsque l'effectif est proche de la capacité d'accueil.", true: false, why: "L'accroissement est maximal pour N = K ÷ 2 ; près de K, il devient presque nul." },
              { text: "Si l'effectif dépasse K, il diminue jusqu'à K.", true: true, why: "Le facteur (1 - N ÷ K) devient négatif, donc l'accroissement aussi." },
              { text: "La courbe logistique a la forme d'un S.", true: true, why: "Phase rapide, ralentissement, puis plateau : c'est une sigmoïde." },
              { text: "Les projections de l'ONU donnent avec certitude la population mondiale de 2100.", true: false, why: "Ce sont des scénarios fondés sur des hypothèses ; l'incertitude augmente avec l'horizon." },
              { text: "La capacité d'accueil d'un milieu peut changer au cours du temps.", true: true, why: "Elle dépend des ressources : un changement du climat ou une nouvelle technique agricole peut la modifier." },
            ],
          },
          quiz: [
            {
              q: "Que représente K dans le modèle de Verhulst ?",
              options: ["Le taux de natalité", "Le temps de doublement", "La capacité d'accueil du milieu", "L'effectif initial de la population étudiée"],
              answer: 2,
              why: "K est l'effectif maximal que le milieu peut supporter durablement : l'effectif tend vers K.",
            },
            {
              q: "Avec r = 0,2 et K = 1 000, quel est l'accroissement prévu pour N = 500 ?",
              options: ["50", "100", "250", "0"],
              answer: 0,
              why: "0,2 × 500 × (1 - 500 ÷ 1 000) = 100 × 0,5 = 50.",
            },
            {
              q: "Quelle est l'allure de la courbe de l'effectif dans le modèle logistique ?",
              options: ["Une droite", "Une courbe qui croît de plus en plus vite, sans limite", "Une courbe en cloche", "Une courbe en S qui se stabilise"],
              answer: 3,
              why: "La croissance est d'abord presque exponentielle, puis ralentit, et l'effectif se stabilise au niveau de K.",
            },
            {
              q: "En quelle année Verhulst publie-t-il son modèle ?",
              options: ["1798", "1838", "1859", "1927"],
              answer: 1,
              why: "Verhulst publie son modèle en 1838, quarante ans après l'Essai de Malthus (1798).",
            },
            {
              q: "Pourquoi la population humaine ne suit-elle pas strictement le modèle de Verhulst ?",
              options: ["Parce qu'elle décroît depuis 1960", "Parce que le modèle de Verhulst ne s'applique qu'aux micro-organismes de laboratoire", "Parce que K varie et que la natalité dépend de facteurs sociaux", "Parce qu'elle a déjà atteint sa capacité d'accueil"],
              answer: 2,
              why: "La capacité d'accueil évolue avec les techniques, et le ralentissement de la croissance vient surtout de la transition démographique, liée à des facteurs sociaux.",
            },
          ],
          trap: "Croire que la croissance est la plus rapide quand l'effectif est le plus grand : dans le modèle de Verhulst, l'accroissement est maximal pour N = K ÷ 2 et devient presque nul près de K. Autre erreur fréquente : oublier d'ajouter N(k) dans la relation de récurrence et ne calculer que l'accroissement.",
          method: "Pour vérifier une feuille de calcul logistique, testez trois cas simples à la main : N = 0 (accroissement nul), N = K ÷ 2 (accroissement r × K ÷ 4, le maximum) et N = K (accroissement nul). Si le tableur donne ces valeurs, votre formule est juste.",
        },
      ],
    },

    /* ==================================================================== */
    /* L'INTELLIGENCE ARTIFICIELLE                                            */
    /* ==================================================================== */
    {
      id: 'intelligence-artificielle',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'apprentissage-machine',
          title: 'Les principes de l\'apprentissage machine',
          minutes: 30,
          objectives: [
            "Distinguer un algorithme classique, dont les règles sont écrites par un programmeur, d'un algorithme d'apprentissage machine.",
            "Identifier le rôle des données d'entraînement et des données de test dans l'apprentissage supervisé.",
            "Calculer la sortie d'un neurone artificiel et expliquer comment l'apprentissage ajuste ses paramètres.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'apprentissage machine ?",
              paragraphs: [
                "Un algorithme classique applique des règles écrites à l'avance par un programmeur : pour trier des courriels, il pourrait par exemple rejeter tout message contenant certains mots. Cette approche atteint vite ses limites lorsque les règles sont trop nombreuses ou impossibles à formuler, comme pour reconnaître un chat sur une photographie : personne ne sait écrire la liste exhaustive des critères qui permettent de le faire.",
                "L'apprentissage machine (ou apprentissage automatique, en anglais machine learning) renverse la démarche : on fournit à l'algorithme un grand nombre d'exemples et il ajuste lui-même les paramètres d'un modèle pour réaliser la tâche. C'est une branche de l'intelligence artificielle, domaine de recherche né lors d'un atelier organisé au Dartmouth College (États-Unis) en 1956. Aujourd'hui, l'apprentissage machine sert à filtrer les spams, reconnaître des images ou la parole, traduire des textes, recommander des contenus ou aider au diagnostic médical.",
              ],
              box: { label: "Définition", text: "L'apprentissage machine est un ensemble de méthodes qui permettent à un algorithme d'ajuster les paramètres d'un modèle à partir d'exemples, afin de réaliser une tâche (classer, prédire) sur des données nouvelles, sans que les règles soient écrites explicitement par un programmeur." },
            },
            {
              heading: "Données, caractéristiques et étiquettes",
              paragraphs: [
                "Chaque exemple est décrit par des caractéristiques (ou descripteurs) mesurables : pour un fruit, sa masse, son diamètre, sa couleur ; pour une image, les valeurs de ses pixels. Dans l'apprentissage supervisé, chaque exemple porte aussi une étiquette, la bonne réponse attendue (« pomme » ou « orange », « spam » ou « non spam »). Le but est d'apprendre à prédire l'étiquette d'une donnée nouvelle à partir de ses caractéristiques. Lorsque l'étiquette est une catégorie, on parle de classification.",
                "Les données disponibles sont partagées en deux ensembles. Le jeu d'entraînement sert à ajuster le modèle. Le jeu de test, que le modèle n'a jamais vu pendant l'entraînement, sert à mesurer ses performances sur des cas nouveaux. C'est comme un élève qui s'entraîne sur des exercices corrigés et que l'on évalue ensuite sur un sujet inédit : réussir les exercices déjà vus ne prouve pas qu'il a compris.",
                "Il existe d'autres formes d'apprentissage. Dans l'apprentissage non supervisé, les données n'ont pas d'étiquette et l'algorithme cherche à les regrouper selon leurs ressemblances. Dans l'apprentissage par renforcement, un programme apprend par essais et erreurs en recevant des récompenses, ce qui a permis par exemple à des programmes d'atteindre un très haut niveau au jeu de go.",
              ],
              box: { label: "Repère", text: "Apprentissage supervisé : des données étiquetées, un jeu d'entraînement pour ajuster le modèle, un jeu de test pour l'évaluer sur des données qu'il n'a jamais vues." },
            },
            {
              heading: "Le neurone artificiel",
              paragraphs: [
                "Les réseaux de neurones artificiels s'inspirent, de façon très simplifiée, du système nerveux. Un neurone biologique reçoit des signaux par ses dendrites, au niveau de synapses plus ou moins efficaces, et émet à son tour un message nerveux le long de son axone si la stimulation qu'il reçoit est suffisante. Le neurone formel, proposé par Warren McCulloch et Walter Pitts en 1943, reprend ce principe : il reçoit des valeurs d'entrée, les combine et produit une sortie.",
                "Concrètement, chaque entrée xᵢ est multipliée par un poids wᵢ, qui joue le rôle de l'efficacité d'une synapse. Le neurone calcule la somme pondérée s = w₁ × x₁ + w₂ × x₂ + ... + b, où b est un biais, puis applique une fonction d'activation : dans le cas le plus simple, la sortie vaut 1 si s ≥ 0 et 0 sinon. Le perceptron, imaginé par Frank Rosenblatt à la fin des années 1950, est un neurone de ce type capable d'apprendre à classer des données en deux catégories.",
                "Apprendre, pour un neurone, c'est ajuster ses poids et son biais. On lui présente un exemple ; si sa sortie est fausse, on modifie légèrement les poids dans le sens qui réduit l'erreur, et l'on recommence sur des milliers d'exemples. Un réseau de neurones assemble de nombreux neurones en couches successives ; lorsque les couches sont nombreuses, on parle d'apprentissage profond (deep learning). Ces réseaux, qui comptent parfois des milliards de paramètres, se sont imposés à partir des années 2010 grâce à des données très abondantes et à des processeurs de calcul beaucoup plus puissants.",
              ],
              box: { label: "Formule", text: "Neurone artificiel à deux entrées : s = w₁ × x₁ + w₂ × x₂ + b ; sortie = 1 si s ≥ 0, sortie = 0 sinon. Les poids w₁, w₂ et le biais b sont les paramètres ajustés pendant l'apprentissage." },
            },
            {
              heading: "Les étapes d'un apprentissage",
              paragraphs: [
                "Un projet d'apprentissage supervisé suit toujours les mêmes étapes : collecter des données en quantité suffisante et représentatives du problème ; les étiqueter et les nettoyer ; les partager en jeu d'entraînement et jeu de test ; entraîner le modèle sur le premier ; l'évaluer sur le second ; enfin, l'utiliser sur de nouvelles données, ce qu'on appelle l'inférence.",
                "Un écueil classique est le surapprentissage : le modèle s'ajuste si bien aux exemples d'entraînement, y compris à leurs particularités accidentelles, qu'il les « apprend par cœur » et généralise mal. On le détecte par un écart important entre un taux de réussite très élevé sur le jeu d'entraînement et un taux nettement plus faible sur le jeu de test. On y remédie notamment en augmentant la quantité et la diversité des données, ou en choisissant un modèle plus simple.",
              ],
              box: { label: "À retenir", text: "Un modèle d'apprentissage ne « comprend » pas : il repère des régularités statistiques dans les données. Sa qualité dépend donc d'abord de la quantité, de la qualité et de la représentativité des données d'entraînement." },
            },
          ],
          keyPoints: [
            "Algorithme classique : règles écrites par un programmeur. Apprentissage machine : paramètres ajustés à partir d'exemples.",
            "Apprentissage supervisé : chaque exemple a des caractéristiques et une étiquette (la bonne réponse).",
            "Jeu d'entraînement pour ajuster le modèle, jeu de test (jamais vu) pour l'évaluer.",
            "Neurone artificiel : s = w₁ × x₁ + w₂ × x₂ + b, puis sortie 1 si s ≥ 0, 0 sinon.",
            "Apprendre, c'est ajuster les poids et le biais pour réduire l'erreur sur les exemples.",
            "Surapprentissage : excellent sur l'entraînement, médiocre sur le test ; le modèle a appris par cœur.",
          ],
          example: {
            statement: "Un neurone artificiel sert de filtre anti-spam. Ses entrées sont x₁ = nombre de liens dans le courriel et x₂ = 1 si le courriel contient le mot « gratuit », 0 sinon. Ses paramètres sont w₁ = 0,5, w₂ = 2 et b = -3 ; la sortie 1 signifie « spam ». Classer les courriels A (2 liens, contient « gratuit »), B (4 liens, ne contient pas « gratuit ») et C (8 liens, ne contient pas « gratuit »).",
            solution: [
              "Le neurone calcule s = 0,5 × x₁ + 2 × x₂ - 3, puis donne 1 si s ≥ 0 et 0 sinon.",
              "Courriel A : s = 0,5 × 2 + 2 × 1 - 3 = 1 + 2 - 3 = 0. Comme s ≥ 0, la sortie vaut 1 : A est classé spam.",
              "Courriel B : s = 0,5 × 4 + 2 × 0 - 3 = 2 - 3 = -1. Comme s < 0, la sortie vaut 0 : B n'est pas classé spam.",
              "Courriel C : s = 0,5 × 8 + 2 × 0 - 3 = 4 - 3 = 1 ≥ 0 : C est classé spam.",
              "Interprétation : le mot « gratuit » pèse autant que 4 liens (2 = 4 × 0,5), et le biais -3 fixe le seuil à partir duquel un courriel est jugé suspect. Dans un vrai filtre, ces valeurs ne sont pas choisies à la main : elles résultent de l'entraînement sur des milliers de courriels étiquetés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un neurone artificiel a deux entrées, les poids w₁ = 1 et w₂ = -2 et le biais b = 0,5. Sa sortie vaut 1 si s = w₁ × x₁ + w₂ × x₂ + b est positive ou nulle, 0 sinon. Calculer s et la sortie pour les entrées (x₁ ; x₂) = (3 ; 1), (1 ; 1) et (0 ; 0).",
              hint: "Remplacez x₁ et x₂ par leurs valeurs dans la somme pondérée, sans oublier d'ajouter le biais, puis comparez le résultat à 0.",
              solution: [
                "(3 ; 1) : s = 1 × 3 + (-2) × 1 + 0,5 = 3 - 2 + 0,5 = 1,5 ≥ 0 : la sortie vaut 1.",
                "(1 ; 1) : s = 1 × 1 + (-2) × 1 + 0,5 = 1 - 2 + 0,5 = -0,5 < 0 : la sortie vaut 0.",
                "(0 ; 0) : s = 0 + 0 + 0,5 = 0,5 ≥ 0 : la sortie vaut 1.",
                "Remarque : pour l'entrée (0 ; 0), seul le biais intervient ; c'est lui qui décide de la sortie en l'absence de signal.",
              ],
            },
            {
              level: 2,
              statement: "On entraîne un perceptron à deux entrées dont les paramètres valent au départ w₁ = 0, w₂ = 0 et b = 0 (sortie 1 si s ≥ 0, 0 sinon). On lui présente l'exemple x₁ = 1, x₂ = 2, dont l'étiquette attendue est y = 0. La règle d'apprentissage est : w₁ ← w₁ + η × (y - sortie) × x₁ ; w₂ ← w₂ + η × (y - sortie) × x₂ ; b ← b + η × (y - sortie), avec un pas d'apprentissage η = 0,5. a) Calculer la sortie du perceptron pour cet exemple. Est-elle correcte ? b) Calculer les nouveaux paramètres. c) Vérifier que le perceptron classe désormais correctement cet exemple.",
              hint: "La quantité (y - sortie) vaut 0 si la réponse est juste : rien ne change. Elle vaut -1 ou +1 si la réponse est fausse, et indique dans quel sens corriger.",
              solution: [
                "a) s = 0 × 1 + 0 × 2 + 0 = 0 ≥ 0, donc la sortie vaut 1. L'étiquette attendue est 0 : la réponse est fausse.",
                "b) L'erreur vaut y - sortie = 0 - 1 = -1. Nouveaux paramètres : w₁ = 0 + 0,5 × (-1) × 1 = -0,5 ; w₂ = 0 + 0,5 × (-1) × 2 = -1 ; b = 0 + 0,5 × (-1) = -0,5.",
                "c) Avec ces paramètres : s = (-0,5) × 1 + (-1) × 2 + (-0,5) = -0,5 - 2 - 0,5 = -3 < 0. La sortie vaut 0 : l'exemple est désormais bien classé.",
                "Conclusion : l'apprentissage consiste à répéter cette correction sur tous les exemples du jeu d'entraînement, plusieurs fois, jusqu'à ce que les erreurs deviennent rares.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Une équipe entraîne un réseau de neurones à reconnaître si une photographie représente un chat ou un chien. Elle dispose de 10 000 images étiquetées, dont elle utilise 8 000 pour l'entraînement et 2 000 pour le test. Après l'entraînement, le modèle classe correctement 99 % des images d'entraînement et 80 % des images de test. 1) Expliquer pourquoi on n'évalue pas le modèle sur les images d'entraînement. 2) Calculer le nombre d'images de test mal classées. 3) Quel phénomène l'écart entre 99 % et 80 % révèle-t-il ? Proposer deux moyens d'y remédier. 4) On présente au modèle la photographie d'un renard. Que peut-il répondre ? Que montre cet exemple ?",
              hint: "Pensez à la différence entre apprendre par cœur et généraliser. Pour la question 4, demandez-vous quelles réponses le modèle est capable de donner.",
              solution: [
                "1) Le modèle a ajusté ses paramètres sur les images d'entraînement : les réussir ne prouve pas qu'il saura traiter des images nouvelles. Le jeu de test, jamais vu, mesure sa capacité à généraliser.",
                "2) Taux d'erreur sur le test : 100 % - 80 % = 20 %. Nombre d'images mal classées : 0,20 × 2 000 = 400 images.",
                "3) L'écart important entre la réussite sur l'entraînement (99 %) et sur le test (80 %) révèle un surapprentissage : le modèle a mémorisé des détails propres aux images d'entraînement (arrière-plans, éclairages) au lieu de régularités générales.",
                "Remèdes possibles : augmenter le nombre et la diversité des images (races, poses, éclairages variés), créer de nouvelles images par transformations des anciennes (rotations, recadrages), ou utiliser un modèle plus simple, avec moins de paramètres.",
                "4) Le modèle ne connaît que deux classes : il répondra nécessairement « chat » ou « chien », sans pouvoir signaler qu'il s'agit d'un autre animal. Un modèle ne sait traiter que le type de données sur lequel il a été entraîné, et il peut se tromper sans aucun signal d'alerte hors de ce domaine.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un apprentissage supervisé.",
            items: [
              "Collecter un grand nombre de données représentatives",
              "Étiqueter et nettoyer les données",
              "Partager les données en jeu d'entraînement et jeu de test",
              "Entraîner le modèle en ajustant ses paramètres",
              "Évaluer le modèle sur le jeu de test",
              "Utiliser le modèle sur des données nouvelles",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue l'apprentissage machine d'un algorithme classique ?",
              options: ["Le modèle ajuste ses paramètres à partir d'exemples", "Il n'a pas besoin d'ordinateur", "Ses règles de décision sont toutes écrites à l'avance par un programmeur", "Il ne commet jamais d'erreur"],
              answer: 0,
              why: "En apprentissage machine, ce sont les exemples qui servent à régler les paramètres du modèle ; les règles ne sont pas écrites une à une par un programmeur.",
            },
            {
              q: "À quoi sert le jeu de test ?",
              options: ["À ajuster les poids du modèle", "À étiqueter les données", "À évaluer le modèle sur des données jamais vues", "À accélérer l'entraînement du réseau de neurones"],
              answer: 2,
              why: "Le jeu de test n'intervient pas dans l'entraînement : il mesure la capacité du modèle à généraliser à des cas nouveaux.",
            },
            {
              q: "Un neurone a pour poids w₁ = 2 et w₂ = -1 et pour biais b = -1. Quelle est sa sortie pour x₁ = 1 et x₂ = 3, sachant qu'elle vaut 1 si s ≥ 0 et 0 sinon ?",
              options: ["1", "0", "-2"],
              answer: 1,
              why: "s = 2 × 1 + (-1) × 3 - 1 = 2 - 3 - 1 = -2 < 0, donc la sortie vaut 0. La valeur -2 est s, pas la sortie.",
            },
            {
              q: "Un modèle réussit 98 % des exemples d'entraînement mais seulement 70 % des exemples de test. Comment nomme-t-on ce phénomène ?",
              options: ["Un biais de sélection", "Un apprentissage par renforcement", "Une généralisation réussie", "Un surapprentissage"],
              answer: 3,
              why: "Le modèle a « appris par cœur » les exemples d'entraînement et généralise mal : c'est le surapprentissage.",
            },
            {
              q: "Dans l'apprentissage supervisé, qu'appelle-t-on l'étiquette d'un exemple ?",
              options: ["La bonne réponse associée à l'exemple", "Le nombre de pixels de l'image", "Le poids le plus élevé du réseau", "La date à laquelle la donnée a été collectée"],
              answer: 0,
              why: "L'étiquette est la réponse attendue (par exemple « chat » ou « chien ») que le modèle doit apprendre à prédire.",
            },
          ],
          trap: "Croire qu'une IA « comprend » ou « raisonne » comme un humain : un modèle d'apprentissage repère des régularités statistiques dans ses données d'entraînement. Autre erreur fréquente : évaluer un modèle sur les données qui ont servi à l'entraîner, ce qui surestime ses performances.",
          method: "Pour calculer la sortie d'un neurone sans erreur, écrivez la somme pondérée en entier, terme par terme, avec les poids négatifs entre parenthèses, par exemple (-2) × 1, ajoutez le biais à la fin, puis seulement comparez le résultat à 0.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ia-classer-des-donnees',
          title: 'Classer des données et mesurer les limites de l\'IA',
          minutes: 35,
          objectives: [
            "Mettre en œuvre l'algorithme des k plus proches voisins pour classer une donnée nouvelle.",
            "Évaluer un classifieur à l'aide d'un taux de réussite et d'une matrice de confusion.",
            "Identifier les biais introduits par les données d'entraînement.",
            "Discuter des enjeux éthiques et sociétaux de l'intelligence artificielle.",
          ],
          course: [
            {
              heading: "L'algorithme des k plus proches voisins",
              paragraphs: [
                "L'algorithme des k plus proches voisins (en anglais k nearest neighbors, ou kNN) est l'une des méthodes de classification supervisée les plus simples. Chaque donnée étiquetée est représentée par un point dont les coordonnées sont ses caractéristiques, par exemple la longueur et la largeur des pétales d'une fleur. Pour classer une donnée nouvelle, on cherche les k données étiquetées les plus proches d'elle et on lui attribue la classe majoritaire parmi ces k voisins.",
                "La proximité se mesure par une distance. Avec deux caractéristiques, on utilise la distance euclidienne : entre les points (x₁ ; y₁) et (x₂ ; y₂), d = √((x₂ - x₁)² + (y₂ - y₁)²). Il faut veiller à ce que les caractéristiques soient comparables : si l'une est exprimée en grammes (des centaines) et l'autre en centimètres (quelques unités), la première écrase la seconde dans le calcul. On ramène alors les valeurs à des échelles voisines : c'est la normalisation.",
                "Le choix de k influe sur le résultat. Avec k = 1, la décision dépend d'un seul voisin, qui peut être un cas atypique ou mal étiqueté. Avec un k trop grand, on s'appuie sur des points éloignés qui ne ressemblent plus à la donnée à classer. Pour deux classes, on choisit un k impair afin d'éviter les égalités lors du vote. Le kNN n'a pas de phase d'entraînement à proprement parler : il garde en mémoire toutes les données et calcule les distances à chaque nouvelle demande.",
              ],
              box: { label: "Méthode", text: "Pour classer une donnée par les k plus proches voisins : 1) calculer sa distance à chaque donnée étiquetée ; 2) ranger ces distances par ordre croissant ; 3) retenir les k plus petites ; 4) attribuer la classe majoritaire parmi ces k voisins." },
            },
            {
              heading: "Mesurer les performances d'un classifieur",
              paragraphs: [
                "Pour évaluer un classifieur, on le fait fonctionner sur un jeu de test dont on connaît les étiquettes. Le taux de réussite (ou exactitude) est la proportion de données bien classées : nombre de bonnes réponses ÷ nombre total de données. Le taux d'erreur est son complément à 100 %. Mais un taux global ne suffit pas : il faut savoir quelles erreurs le modèle commet.",
                "La matrice de confusion croise les classes réelles et les classes prédites. Pour un test de dépistage, on distingue les vrais positifs (malades détectés), les vrais négatifs (sains reconnus sains), les faux positifs (sains déclarés malades) et les faux négatifs (malades non détectés). Selon l'usage, ces erreurs n'ont pas la même gravité : en médecine, un faux négatif laisse un malade sans soin, alors qu'un faux positif entraîne un examen complémentaire. Pour un filtre anti-spam, c'est plutôt le faux positif (un courriel important envoyé dans les indésirables) qui est gênant.",
                "Un taux global peut aussi être trompeur lorsque les classes sont déséquilibrées. Si 2 % seulement des personnes testées sont malades, un modèle qui répond toujours « sain » atteint 98 % de réussite, tout en ne détectant aucun malade.",
              ],
              box: { label: "Définition", text: "Faux positif : donnée classée dans la catégorie recherchée alors qu'elle n'en fait pas partie. Faux négatif : donnée de la catégorie recherchée que le modèle n'a pas détectée." },
            },
            {
              heading: "Les biais des données",
              paragraphs: [
                "Un modèle d'apprentissage reproduit les régularités présentes dans ses données d'entraînement, y compris leurs défauts. On parle de biais lorsque ces données ne représentent pas fidèlement la réalité. Si un groupe est sous-représenté, le modèle commet davantage d'erreurs pour ce groupe : une étude publiée en 2018 a ainsi montré que des systèmes commerciaux de reconnaissance du genre à partir de photographies se trompaient beaucoup plus souvent pour les femmes à la peau foncée que pour les hommes à la peau claire.",
                "Les données peuvent aussi transmettre des inégalités passées. Un outil de tri de candidatures entraîné sur les recrutements d'une entreprise qui embauchait surtout des hommes risque de pénaliser les candidatures féminines, sans qu'aucun programmeur ne l'ait voulu. Enfin, un modèle peut s'appuyer sur une corrélation trompeuse : si toutes les photographies de loups du jeu d'entraînement montrent de la neige, il peut apprendre à reconnaître la neige plutôt que le loup.",
              ],
              box: { label: "À retenir", text: "Les données ne sont jamais neutres. Un modèle n'est pas plus objectif que les données sur lesquelles il a été entraîné : il peut reproduire, voire amplifier, leurs biais." },
            },
            {
              heading: "Les limites et les enjeux de l'IA",
              paragraphs: [
                "Les réseaux de neurones profonds fonctionnent souvent comme des boîtes noires : leurs milliards de paramètres ne permettent pas d'expliquer simplement une décision, ce qui pose problème lorsqu'elle concerne un crédit, un diagnostic ou une décision de justice. Les modèles qui génèrent du texte peuvent en outre produire des réponses fausses formulées avec assurance. Le contrôle humain et la vérification des résultats restent donc indispensables.",
                "L'IA soulève aussi des enjeux de société : protection des données personnelles (encadrée en Europe par le RGPD, applicable depuis 2018), transformation des métiers, consommation d'électricité et d'eau des centres de données qui entraînent et font fonctionner les modèles. L'Union européenne a adopté en 2024 un règlement sur l'intelligence artificielle qui classe les usages selon leur niveau de risque et en interdit certains.",
              ],
              box: { label: "Repère", text: "Questions à se poser face à un système d'IA : sur quelles données a-t-il été entraîné ? Comment a-t-il été évalué ? Quelles erreurs commet-il et qui en subit les conséquences ? Un humain peut-il contrôler et contester la décision ?" },
            },
          ],
          keyPoints: [
            "kNN : on attribue à la donnée nouvelle la classe majoritaire parmi ses k plus proches voisins.",
            "Distance euclidienne : d = √((x₂ - x₁)² + (y₂ - y₁)²) ; les caractéristiques doivent être à des échelles comparables.",
            "k impair pour deux classes ; k = 1 est sensible aux cas atypiques, un k trop grand efface les nuances locales.",
            "Taux de réussite = bonnes réponses ÷ total ; la matrice de confusion distingue faux positifs et faux négatifs.",
            "Biais : des données non représentatives produisent un modèle qui se trompe davantage pour certains groupes.",
            "Limites : boîte noire, erreurs formulées avec assurance, coût énergétique, données personnelles ; le contrôle humain reste nécessaire.",
          ],
          example: {
            statement: "On dispose de fleurs de deux espèces, X et Y, décrites par la longueur et la largeur de leurs pétales (en cm). Données étiquetées : A (1,0 ; 0,5) X ; B (1,5 ; 1,0) X ; C (2,0 ; 0,8) X ; D (3,6 ; 2,4) X ; E (4,2 ; 2,0) Y ; F (3,5 ; 3,0) Y ; G (4,5 ; 3,2) Y ; H (5,0 ; 2,5) Y. Classer la fleur N (4,0 ; 2,5) avec k = 1, puis avec k = 3.",
            solution: [
              "On calcule la distance de N à chaque donnée, par exemple pour D : d = √((3,6 - 4,0)² + (2,4 - 2,5)²) = √(0,16 + 0,01) = √0,17 ≈ 0,41.",
              "De même : E : √(0,04 + 0,25) ≈ 0,54 ; F : √(0,25 + 0,25) ≈ 0,71 ; G : √(0,25 + 0,49) ≈ 0,86 ; H : √(1 + 0) = 1,00. Les fleurs A, B et C sont beaucoup plus loin (C ≈ 2,62 ; B ≈ 2,92 ; A ≈ 3,61).",
              "Rangement par distance croissante : D (X) 0,41 ; E (Y) 0,54 ; F (Y) 0,71 ; G (Y) 0,86 ; H (Y) 1,00 ; puis C, B et A.",
              "Avec k = 1 : le plus proche voisin est D, de l'espèce X. N est classée X.",
              "Avec k = 3 : les voisins sont D (X), E (Y) et F (Y). Deux voix pour Y contre une pour X : N est classée Y.",
              "Conclusion : le résultat dépend de k. Ici, D est un point isolé de l'espèce X au milieu des Y (une fleur atypique, voire une erreur d'étiquetage) ; avec k = 3, la décision est plus robuste.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Six données étiquetées sont représentées dans un repère : P1 (1 ; 2) rouge, P2 (2 ; 1) rouge, P3 (4 ; 6) bleu, P4 (5 ; 5) bleu, P5 (3 ; 2) rouge, P6 (1 ; 6) bleu. On veut classer la donnée N (3 ; 4). a) Calculer la distance de N à chacune des six données. b) Classer N avec k = 1, k = 3, puis k = 5.",
              hint: "Pour comparer des distances, il suffit de comparer leurs carrés : calculez (x - 3)² + (y - 4)² pour chaque point avant de prendre la racine carrée.",
              solution: [
                "a) P1 : √(4 + 4) = √8 ≈ 2,83 ; P2 : √(1 + 9) = √10 ≈ 3,16 ; P3 : √(1 + 4) = √5 ≈ 2,24 ; P4 : √(4 + 1) = √5 ≈ 2,24 ; P5 : √(0 + 4) = 2 ; P6 : √(4 + 4) = √8 ≈ 2,83.",
                "Ordre croissant : P5 (rouge) 2 ; P3 et P4 (bleus) 2,24 ; P1 (rouge) et P6 (bleu) 2,83 ; P2 (rouge) 3,16.",
                "k = 1 : le plus proche voisin est P5, rouge : N est classée rouge.",
                "k = 3 : P5 (rouge), P3 (bleu) et P4 (bleu) : deux bleus contre un rouge, N est classée bleu.",
                "k = 5 : P5, P3, P4, P1 et P6 : trois bleus (P3, P4, P6) contre deux rouges (P5, P1), N est classée bleu.",
              ],
            },
            {
              level: 2,
              statement: "Un modèle de dépistage d'une maladie est testé sur 200 radiographies dont l'état réel est connu : 50 proviennent de patients malades et 150 de patients sains. Le modèle déclare malades 40 des 50 patients malades et 15 des 150 patients sains. a) Construire la matrice de confusion. b) Calculer le taux de réussite et le taux d'erreur. c) Quelle proportion des malades le modèle détecte-t-il ? d) Quel type d'erreur est le plus grave ici ? Justifier.",
              hint: "Organisez un tableau à double entrée : classe réelle en lignes (malade, sain), classe prédite en colonnes (malade, sain). Les cases de la diagonale sont les bonnes réponses.",
              solution: [
                "a) Malades réels : 40 prédits malades (vrais positifs) et 10 prédits sains (faux négatifs). Sains réels : 15 prédits malades (faux positifs) et 135 prédits sains (vrais négatifs).",
                "b) Bonnes réponses : 40 + 135 = 175. Taux de réussite : 175 ÷ 200 = 0,875, soit 87,5 %. Erreurs : 10 + 15 = 25, taux d'erreur : 25 ÷ 200 = 12,5 %.",
                "c) Proportion de malades détectés : 40 ÷ 50 = 0,80, soit 80 % : un malade sur cinq n'est pas détecté.",
                "d) Les 10 faux négatifs sont les erreurs les plus graves : ces patients malades seraient rassurés à tort et ne seraient pas soignés. Les 15 faux positifs conduisent seulement à des examens complémentaires. Un tel modèle ne peut servir qu'à assister un médecin, qui garde la décision.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Un système de reconnaissance de visages a été entraîné sur 10 000 photographies : 8 500 représentent des personnes d'un groupe A et 1 500 des personnes d'un groupe B. Sur des photographies nouvelles, son taux d'erreur est de 2 % pour le groupe A et de 12 % pour le groupe B. 1) Calculer la proportion de chaque groupe dans les données d'entraînement. 2) On teste le système sur 1 000 photographies du groupe A et 1 000 du groupe B. Calculer le nombre d'erreurs dans chaque groupe. 3) Le fabricant annonce un taux d'erreur global de 3,5 %, mesuré sur un jeu de test ayant la même composition que les données d'entraînement. Vérifier ce chiffre et expliquer pourquoi il est trompeur. 4) Expliquer l'origine probable de l'écart entre les groupes et proposer deux mesures pour le réduire. 5) Citer un enjeu éthique soulevé par l'usage d'un tel système.",
              hint: "Un taux d'erreur global est une moyenne pondérée par la part de chaque groupe dans le jeu de test. Comparez ensuite la part du groupe B dans les données à son taux d'erreur.",
              solution: [
                "1) Groupe A : 8 500 ÷ 10 000 = 85 % ; groupe B : 1 500 ÷ 10 000 = 15 %.",
                "2) Groupe A : 0,02 × 1 000 = 20 erreurs. Groupe B : 0,12 × 1 000 = 120 erreurs, soit six fois plus.",
                "3) Taux global : 0,85 × 2 % + 0,15 × 12 % = 1,7 % + 1,8 % = 3,5 %. Le chiffre est exact, mais il masque l'écart entre les groupes, car le groupe B pèse peu dans la moyenne : une personne du groupe B a six fois plus de risques d'être mal reconnue.",
                "4) Le groupe B est sous-représenté dans les données d'entraînement : le modèle a vu trop peu d'exemples pour apprendre à le traiter correctement. C'est un biais des données.",
                "Mesures possibles : compléter les données pour que chaque groupe soit bien représenté ; mesurer et publier le taux d'erreur de chaque groupe séparément, et pas seulement un taux global ; faire contrôler les décisions importantes par un humain.",
                "5) Si le système sert à identifier des personnes (contrôle d'accès, enquête), les membres du groupe B subiront davantage d'erreurs, par exemple des refus injustifiés ou des soupçons infondés : c'est une discrimination produite par la technique, qui pose des questions d'équité et de responsabilité.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "k plus proches voisins", right: "Méthode qui attribue la classe majoritaire parmi les données les plus proches" },
              { left: "Faux positif", right: "Donnée classée dans la catégorie recherchée alors qu'elle n'en fait pas partie" },
              { left: "Faux négatif", right: "Donnée de la catégorie recherchée que le modèle n'a pas détectée" },
              { left: "Biais des données", right: "Données d'entraînement qui ne représentent pas fidèlement la réalité" },
              { left: "Matrice de confusion", right: "Tableau croisant les classes réelles et les classes prédites" },
              { left: "Boîte noire", right: "Modèle dont on ne peut pas expliquer simplement les décisions" },
            ],
          },
          quiz: [
            {
              q: "Avec la méthode des k plus proches voisins et k = 3, une donnée a pour voisins deux points bleus et un point rouge. Comment est-elle classée ?",
              options: ["Rouge", "On ne peut pas conclure", "Rouge et bleu à la fois", "Bleu"],
              answer: 3,
              why: "On retient la classe majoritaire parmi les 3 voisins : deux bleus contre un rouge.",
            },
            {
              q: "Quelle est la distance entre les points (1 ; 1) et (4 ; 5) ?",
              options: ["7", "5", "25", "√7"],
              answer: 1,
              why: "d = √((4 - 1)² + (5 - 1)²) = √(9 + 16) = √25 = 5.",
            },
            {
              q: "Un classifieur classe correctement 90 données sur 120. Quel est son taux de réussite ?",
              options: ["90 %", "30 %", "75 %", "80 %"],
              answer: 2,
              why: "90 ÷ 120 = 0,75, soit 75 % ; le taux d'erreur est donc de 25 %.",
            },
            {
              q: "Pour un test de dépistage d'une maladie grave, quelle erreur est en général la plus lourde de conséquences ?",
              options: ["Le faux négatif", "Le faux positif", "Le vrai positif", "Le vrai négatif"],
              answer: 0,
              why: "Un faux négatif laisse une personne malade sans diagnostic ni soin ; un faux positif entraîne surtout un examen complémentaire.",
            },
            {
              q: "Pourquoi un modèle entraîné surtout sur des visages d'un même groupe se trompe-t-il davantage pour les autres ?",
              options: ["Parce que les ordinateurs ont des préférences", "Parce que ses données d'entraînement sont biaisées", "Parce que la valeur de k choisie est trop petite", "Parce que les autres visages sont par nature plus difficiles à reconnaître"],
              answer: 1,
              why: "Le modèle a vu trop peu d'exemples des autres groupes : il reproduit le déséquilibre de ses données d'entraînement.",
            },
          ],
          trap: "Se contenter d'un taux de réussite global sans regarder la nature des erreurs : un modèle peut afficher plus de 95 % de réussite tout en manquant presque tous les cas rares qui comptent (malades, fraudes), ou en se trompant beaucoup plus pour un groupe sous-représenté.",
          method: "Pour un calcul de k plus proches voisins, présentez vos résultats dans un tableau à trois colonnes (point, distance, classe), triez-le par distance croissante, puis surlignez les k premières lignes avant de compter les voix. Vous éviterez ainsi d'oublier un voisin ou de mal compter.",
        },
      ],
    },

    /* ==================================================================== */
    /* LE PROJET EXPÉRIMENTAL ET NUMÉRIQUE                                    */
    /* ==================================================================== */
    {
      id: 'projet-experimental',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'concevoir-un-projet',
          title: 'Concevoir et mener un projet scientifique',
          minutes: 25,
          objectives: [
            "Formuler une question scientifique précise et une hypothèse testable.",
            "Concevoir un protocole expérimental en identifiant le paramètre étudié, la grandeur mesurée et les paramètres maintenus constants.",
            "Choisir un capteur et une chaîne d'acquisition numérique adaptés à la grandeur à mesurer.",
            "Planifier le travail d'une équipe et tenir un carnet de bord.",
          ],
          course: [
            {
              heading: "Le projet expérimental et numérique",
              paragraphs: [
                "Le programme d'enseignement scientifique de terminale prévoit un projet expérimental et numérique, mené en petit groupe sur une durée indicative d'une douzaine d'heures. Il associe une démarche expérimentale (concevoir et réaliser des mesures), une dimension numérique (acquisition des données par un capteur, traitement au tableur ou en Python, éventuellement simulation) et une communication des résultats.",
                "Le sujet peut se rattacher à un thème de l'année ou à une question qui intéresse le groupe : effet de la couleur d'une surface sur son échauffement (albédo), puissance d'un panneau photovoltaïque selon son inclinaison, croissance d'une culture de levures, refroidissement d'une boisson selon son récipient. L'important n'est pas l'originalité du sujet, mais la rigueur de la démarche et la qualité de l'analyse.",
              ],
              box: { label: "Repère", text: "Les trois dimensions du projet : expérimentale (mesurer), numérique (acquérir et traiter les données), communication (présenter la démarche et les résultats)." },
            },
            {
              heading: "De la question au protocole",
              paragraphs: [
                "Tout commence par une question scientifique précise, à laquelle une expérience peut répondre. « Le soleil chauffe-t-il ? » est trop vague ; « La température atteinte par une surface exposée à une lampe dépend-elle de sa couleur ? » est exploitable. On formule ensuite une hypothèse, c'est-à-dire une réponse provisoire que l'expérience pourra confirmer ou réfuter : « Une surface noire atteint une température plus élevée qu'une surface blanche. »",
                "Le protocole précise ce que l'on fait varier, ce que l'on mesure et ce que l'on garde constant. Le paramètre étudié (variable indépendante) est ici la couleur ; la grandeur mesurée (variable dépendante) est la température ; les paramètres contrôlés sont la lampe, la distance, la durée d'exposition, la matière et la taille des surfaces, la température initiale. On ne fait varier qu'un seul paramètre à la fois, sinon on ne peut pas savoir lequel est responsable de l'effet observé.",
                "Un bon protocole prévoit aussi un témoin, qui sert de référence (une situation sans le facteur testé, ou avec sa valeur habituelle), et des répétitions : une mesure unique ne permet pas de distinguer un effet réel d'une fluctuation. Il doit être rédigé assez précisément pour qu'une autre équipe puisse reproduire l'expérience.",
              ],
              box: { label: "Règle", text: "Un seul paramètre varie à la fois ; tous les autres sont maintenus constants. Chaque condition est répétée plusieurs fois et comparée à un témoin." },
            },
            {
              heading: "La chaîne d'acquisition numérique",
              paragraphs: [
                "Un capteur convertit une grandeur physique en un signal électrique. Une thermistance voit sa résistance varier avec la température ; une photorésistance, avec l'éclairement ; d'autres capteurs mesurent une pression, une distance, une concentration en dioxyde de carbone. Le signal est transmis à une carte à microcontrôleur (un petit ordinateur programmable) qui le convertit en nombres grâce à un convertisseur analogique-numérique, puis enregistre ces nombres ou les transmet à un ordinateur.",
                "Deux réglages sont essentiels. La période d'échantillonnage est la durée entre deux mesures successives (son inverse est la fréquence d'échantillonnage) : elle doit être petite devant la durée du phénomène étudié. Pour suivre un échauffement qui dure dix minutes, une mesure par seconde suffit ; pour la chute d'un objet qui dure une fraction de seconde, il faut des centaines de mesures par seconde. L'étalonnage consiste à comparer les valeurs du capteur à celles d'un instrument de référence, afin de convertir correctement le signal en grandeur physique.",
              ],
              box: { label: "Repère", text: "Chaîne d'acquisition : grandeur physique → capteur → signal électrique → conversion analogique-numérique → microcontrôleur ou ordinateur → fichier de données exploité au tableur ou en Python." },
            },
            {
              heading: "Mener le projet en équipe",
              paragraphs: [
                "Un projet de groupe s'organise : on répartit les rôles (montage, programmation, traitement des données, rédaction), on établit un calendrier des séances et on prévoit un essai préliminaire pour vérifier que le montage fonctionne et que les valeurs mesurées sont plausibles. Les imprévus sont normaux : un capteur défectueux ou un résultat inattendu fait partie de la démarche scientifique.",
                "Le carnet de bord garde la trace de tout le travail : date de chaque séance, montage utilisé (avec schémas ou photographies), réglages, résultats bruts, problèmes rencontrés et modifications apportées au protocole. Il permet de justifier ses choix lors de la présentation finale et de retrouver l'origine d'une anomalie. Les sources consultées (documents, notices, sites) y sont notées pour pouvoir être citées.",
              ],
              box: { label: "À retenir", text: "Un essai préliminaire évite de perdre des séances entières ; un carnet de bord tenu à chaque séance permet de justifier chaque choix." },
            },
          ],
          keyPoints: [
            "Le projet expérimental et numérique associe mesure, traitement numérique des données et communication.",
            "Une question précise, puis une hypothèse testable, que l'expérience peut confirmer ou réfuter.",
            "Protocole : un seul paramètre varie, les autres restent constants ; un témoin et des répétitions.",
            "Capteur : convertit une grandeur physique en signal électrique ; le microcontrôleur le numérise.",
            "Période d'échantillonnage petite devant la durée du phénomène ; capteur étalonné avec une référence.",
            "Essai préliminaire, répartition des rôles et carnet de bord tenu à chaque séance.",
          ],
          example: {
            statement: "Un groupe se demande si l'inclinaison d'un petit panneau photovoltaïque éclairé par une lampe modifie la puissance électrique qu'il fournit. Proposer une question, une hypothèse et un protocole.",
            solution: [
              "Question : la puissance électrique fournie par le panneau dépend-elle de l'angle entre le panneau et la direction de la lumière ?",
              "Hypothèse : la puissance est maximale lorsque la lumière arrive perpendiculairement au panneau et diminue à mesure que le panneau s'incline.",
              "Paramètre étudié : l'angle d'inclinaison (par exemple 0°, 15°, 30°, 45°, 60° et 75°, mesuré au rapporteur). Grandeur mesurée : la puissance P = U × I, calculée à partir de la tension U et de l'intensité I mesurées aux bornes d'une résistance de charge.",
              "Paramètres maintenus constants : même lampe, même distance entre la lampe et le panneau, même résistance de charge, pièce assombrie pour éliminer la lumière ambiante, panneau laissé refroidir entre deux mesures.",
              "Répétitions et référence : trois mesures par angle, réalisées dans un ordre mélangé ; la position où la lumière arrive perpendiculairement sert de référence.",
              "Acquisition : tension et intensité relevées par des capteurs reliés à un microcontrôleur, toutes les secondes pendant 30 s pour chaque angle ; on retient la valeur moyenne. Les résultats sont notés au carnet de bord, puis traités au tableur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un groupe étudie l'effet de la température sur la croissance de levures. Il prépare trois tubes contenant le même volume du même milieu nutritif et la même quantité de levures, les place à 20 °C, 30 °C et 40 °C, puis mesure toutes les 30 minutes la turbidité du milieu (son trouble) à l'aide d'un capteur de lumière : plus le milieu est trouble, plus il contient de levures. Identifier la question scientifique, le paramètre étudié, la grandeur mesurée et deux paramètres maintenus constants.",
              hint: "Le paramètre étudié est celui qui change d'un tube à l'autre ; la grandeur mesurée est celle que le capteur enregistre.",
              solution: [
                "Question : la température influence-t-elle la vitesse de croissance d'une population de levures ?",
                "Paramètre étudié (variable indépendante) : la température, qui prend les valeurs 20 °C, 30 °C et 40 °C.",
                "Grandeur mesurée : la turbidité du milieu, qui renseigne sur la concentration en levures.",
                "Paramètres maintenus constants : le volume et la composition du milieu nutritif, la quantité initiale de levures (et aussi l'intervalle entre deux mesures et le capteur utilisé).",
                "Remarque : il serait utile de préparer plusieurs tubes par température, afin de distinguer un effet réel d'une variation due au hasard.",
              ],
            },
            {
              level: 2,
              statement: "Un capteur de température relié à un microcontrôleur effectue une mesure toutes les 2 secondes. a) Quelle est la fréquence d'échantillonnage ? b) Combien de mesures obtient-on pendant une expérience d'échauffement de 20 minutes, en comptant la mesure initiale ? c) Avec un capteur de distance, le groupe veut ensuite étudier la chute d'une bille, qui dure 0,5 s. Une mesure toutes les 2 secondes convient-elle ? Proposer une période d'échantillonnage adaptée et calculer le nombre de mesures obtenues pendant la chute.",
              hint: "La fréquence est l'inverse de la période. Pour compter les mesures, divisez la durée totale par la période, puis ajoutez la mesure faite à l'instant initial.",
              solution: [
                "a) f = 1 ÷ T = 1 ÷ 2 s = 0,5 Hz, c'est-à-dire une mesure toutes les deux secondes.",
                "b) 20 minutes = 1 200 s. Nombre d'intervalles : 1 200 ÷ 2 = 600. En comptant la mesure à t = 0, on obtient 601 mesures, ce qui suffit largement pour suivre un échauffement lent.",
                "c) Avec une mesure toutes les 2 s, la chute de 0,5 s serait captée par une seule mesure, ou par aucune : ce réglage ne convient pas. La période doit être petite devant 0,5 s.",
                "Par exemple, avec une période de 1 ms (fréquence de 1 000 Hz), on obtient 0,5 ÷ 0,001 = 500 intervalles, soit 501 mesures pendant la chute : de quoi suivre précisément l'évolution de la position.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Un groupe veut savoir si un engrais favorise la croissance de plants de haricot. Il arrose un premier plant avec de l'eau contenant l'engrais et le place près de la fenêtre ; il arrose un second plant avec de l'eau sans engrais et le place au fond de la salle. Après trois semaines, le premier mesure 24 cm et le second 15 cm. Le groupe conclut : « L'engrais augmente la croissance de 60 %. » 1) Vérifier le calcul de 60 %. 2) Relever trois défauts du protocole. 3) Proposer un protocole corrigé. 4) Pourrait-on, à l'issue du protocole corrigé, généraliser la conclusion à toutes les plantes ?",
              hint: "Demandez-vous combien de paramètres diffèrent entre les deux plants, et combien de plants il faudrait pour que le hasard ne décide pas du résultat.",
              solution: [
                "1) (24 - 15) ÷ 15 = 9 ÷ 15 = 0,6, soit 60 % : le calcul est juste, mais la conclusion n'est pas établie.",
                "2) Premier défaut : deux paramètres varient en même temps, l'engrais et l'éclairement (un plant est près de la fenêtre) ; on ne peut pas attribuer la différence à l'engrais seul.",
                "Deuxième défaut : un seul plant par condition ; la différence peut venir de la variabilité naturelle entre individus (graines plus ou moins vigoureuses). Troisième défaut : la taille initiale des plants n'est pas mesurée, et les autres conditions (quantité d'eau, terre, taille du pot) ne sont pas précisées.",
                "3) Protocole corrigé : prendre au moins une dizaine de plants de même variété et de même taille initiale, dans des pots identiques remplis de la même terre ; les répartir au hasard en deux lots placés au même endroit ; arroser chaque plant avec le même volume d'eau, avec engrais pour le lot test et sans engrais pour le lot témoin ; mesurer la hauteur de chaque plant au début puis régulièrement pendant trois semaines, et comparer les moyennes des deux lots en tenant compte de leur dispersion.",
                "4) Non : le protocole ne concerne que des haricots, dans des conditions données et pour une dose d'engrais donnée. La conclusion est valable dans ce cadre ; l'étendre à d'autres plantes demanderait d'autres expériences.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un projet expérimental.",
            items: [
              "Formuler une question scientifique précise",
              "Proposer une hypothèse testable",
              "Rédiger le protocole et choisir les capteurs",
              "Réaliser un essai préliminaire",
              "Acquérir les mesures en répétant les essais",
              "Traiter et analyser les données",
              "Conclure et communiquer les résultats",
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces questions se prête le mieux à une expérience ?",
              options: ["L'énergie solaire est-elle vraiment utile pour la société ?", "Pourquoi la science progresse-t-elle plus vite aujourd'hui qu'autrefois ?", "Une surface noire chauffe-t-elle plus qu'une blanche sous une lampe ?", "Le climat va-t-il changer ?"],
              answer: 2,
              why: "Elle est précise, porte sur des grandeurs mesurables (couleur, température) et une expérience peut y répondre.",
            },
            {
              q: "Dans un protocole, combien de paramètres fait-on varier à la fois ?",
              options: ["Un seul", "Deux", "Tous ceux qui semblent utiles", "Aucun"],
              answer: 0,
              why: "Si plusieurs paramètres varient en même temps, on ne peut pas savoir lequel est responsable de l'effet observé.",
            },
            {
              q: "Quel est le rôle d'un capteur ?",
              options: ["Afficher les résultats des mesures sous forme de graphique légendé", "Convertir une grandeur physique en signal électrique", "Stocker le programme du microcontrôleur", "Calculer la moyenne des mesures"],
              answer: 1,
              why: "Le capteur transforme une grandeur (température, éclairement, pression) en signal électrique, ensuite numérisé.",
            },
            {
              q: "Un capteur effectue une mesure toutes les 0,1 s. Quelle est sa fréquence d'échantillonnage ?",
              options: ["0,1 Hz", "1 Hz", "100 Hz", "10 Hz"],
              answer: 3,
              why: "f = 1 ÷ T = 1 ÷ 0,1 s = 10 Hz, soit dix mesures par seconde.",
            },
            {
              q: "À quoi sert un essai préliminaire ?",
              options: ["À remplacer les répétitions des mesures", "À obtenir directement le résultat final", "À vérifier que le montage fonctionne", "À choisir la conclusion avant de mesurer"],
              answer: 2,
              why: "Il permet de contrôler le montage et la plausibilité des valeurs avant de lancer la série de mesures définitive.",
            },
          ],
          trap: "Faire varier plusieurs paramètres à la fois, ou se contenter d'une seule mesure par condition : on ne peut alors ni attribuer l'effet observé au paramètre étudié, ni le distinguer d'une fluctuation due au hasard.",
          method: "Avant de manipuler, remplissez un tableau de trois lignes : « je fais varier », « je mesure », « je garde constant ». Si la première ligne contient plus d'un élément, ou si la dernière est vide, votre protocole doit être revu.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'communiquer-resultats',
          title: 'Traiter des données et communiquer ses résultats',
          minutes: 30,
          objectives: [
            "Traiter une série de mesures à l'aide d'un tableur ou d'un programme : moyenne, écart-type, incertitude-type.",
            "Représenter des données par un graphique légendé et les modéliser par une fonction.",
            "Exprimer un résultat avec son incertitude et le comparer à une valeur de référence.",
            "Communiquer une démarche et ses résultats à l'écrit et à l'oral.",
          ],
          course: [
            {
              heading: "Des mesures répétées à la valeur retenue",
              paragraphs: [
                "Lorsqu'on répète une mesure dans les mêmes conditions, on n'obtient pas exactement la même valeur : de nombreux facteurs (lecture, réaction de l'opérateur, petites variations du dispositif) introduisent une variabilité. Pour une série de n mesures, on retient comme meilleure estimation la moyenne m, somme des valeurs divisée par n.",
                "La dispersion des mesures autour de la moyenne est caractérisée par l'écart-type expérimental s : plus s est grand, plus les valeurs sont dispersées. On en déduit l'incertitude-type sur la moyenne, u = s ÷ √n. Elle diminue lorsque le nombre de mesures augmente : multiplier le nombre de mesures par 4 divise l'incertitude-type par 2. Le résultat s'écrit m ± u, avec son unité, en arrondissant u par excès à un ou deux chiffres significatifs et la moyenne au même rang décimal.",
                "Pour comparer le résultat à une valeur de référence m(réf), on calcule le quotient |m - m(réf)| ÷ u. S'il est inférieur ou égal à 2, le résultat est jugé compatible avec la référence. S'il est nettement supérieur, l'écart n'est pas explicable par la seule variabilité des mesures, et il faut chercher une erreur systématique (capteur mal étalonné, protocole biaisé).",
              ],
              box: { label: "Formule", text: "Moyenne : m = (x₁ + x₂ + ... + xₙ) ÷ n. Incertitude-type sur la moyenne : u = s ÷ √n, où s est l'écart-type expérimental. Compatibilité avec une référence : |m - m(réf)| ÷ u ≤ 2." },
            },
            {
              heading: "Traiter les données au tableur ou en Python",
              paragraphs: [
                "Le tableur automatise ces calculs. Si les mesures sont placées dans les cellules A2 à A11, la formule =MOYENNE(A2:A11) donne la moyenne et =ECARTYPE(A2:A11) l'écart-type expérimental ; =RACINE(10) donne √10 pour calculer u. Une formule écrite dans une cellule peut être recopiée vers le bas pour traiter toute une colonne, par exemple pour calculer une puissance P = U × I à partir de deux colonnes de mesures.",
                "En Python, on range les mesures dans une liste ; le module statistics fournit mean() pour la moyenne et stdev() pour l'écart-type expérimental, et la bibliothèque matplotlib permet de tracer les graphiques. Un programme a l'avantage de traiter des milliers de valeurs issues d'un capteur et de pouvoir être relancé à l'identique sur de nouvelles données.",
              ],
              box: { label: "Règle", text: "Conservez toujours les données brutes dans un fichier à part. On ne modifie jamais une mesure ; on peut seulement écarter une valeur aberrante en le signalant et en justifiant ce choix." },
            },
            {
              heading: "Représenter et modéliser",
              paragraphs: [
                "Un graphique scientifique comporte un titre, des axes nommés avec leurs unités et une échelle adaptée. Les mesures sont représentées par des points, non reliés entre eux, éventuellement accompagnés de barres d'incertitude ; le modèle est représenté par une courbe continue. Pour comparer des catégories (surface noire ou blanche), un diagramme en barres convient ; pour suivre une grandeur en fonction d'une autre, on utilise un nuage de points.",
                "Modéliser, c'est choisir une fonction mathématique qui rend compte des points (linéaire, affine, exponentielle, logistique), puis en ajuster les paramètres ; le tableur ou Python le fait par régression. Un modèle est jugé satisfaisant si la courbe passe à travers les barres d'incertitude de la plupart des points, sans écart systématique. On évite de l'utiliser loin du domaine des mesures : extrapoler, c'est faire une hypothèse supplémentaire.",
              ],
              box: { label: "À retenir", text: "Mesures : des points non reliés. Modèle : une courbe continue. Axes : grandeur et unité. Toute extrapolation doit être signalée." },
            },
            {
              heading: "Communiquer ses résultats",
              paragraphs: [
                "Un compte rendu, une affiche ou une présentation orale suivent la même logique : la question posée et son intérêt, l'hypothèse, le matériel et le protocole, les résultats (tableaux et graphiques), leur analyse, puis une conclusion qui répond explicitement à la question. Les sources consultées sont citées.",
                "Il faut séparer clairement les résultats, ce que l'on a mesuré, de leur interprétation, ce que l'on en déduit. La discussion présente honnêtement les limites : sources d'erreur, nombre de mesures, conditions non maîtrisées, domaine de validité de la conclusion. Un résultat qui réfute l'hypothèse n'est pas un échec : il apporte une information, à condition d'être bien établi. À l'oral, on montre peu de diapositives, chacune centrée sur une idée et un graphique lisible.",
              ],
              box: { label: "Règle", text: "Une conclusion répond à la question posée, s'appuie sur les résultats chiffrés avec leurs incertitudes et indique ses limites." },
            },
          ],
          keyPoints: [
            "Valeur retenue : la moyenne m de n mesures répétées.",
            "Incertitude-type sur la moyenne : u = s ÷ √n ; le résultat s'écrit m ± u, avec son unité.",
            "Compatibilité avec une référence : |m - m(réf)| ÷ u ≤ 2.",
            "Tableur : =MOYENNE( ) et =ECARTYPE( ) ; Python : statistics.mean() et statistics.stdev().",
            "Graphique : titre, axes avec unités, mesures en points, modèle en courbe continue.",
            "Communiquer : question, hypothèse, protocole, résultats, analyse, conclusion et limites, sources.",
          ],
          example: {
            statement: "Sept groupes mesurent la vitesse du son dans l'air de la salle et obtiennent, en m/s : 338 ; 344 ; 341 ; 347 ; 339 ; 343 ; 345. Le tableur indique un écart-type expérimental s ≈ 3,26 m/s. a) Calculer la moyenne et l'incertitude-type sur la moyenne. b) Écrire le résultat. c) La valeur de référence dans l'air à 20 °C est d'environ 343 m/s. Le résultat est-il compatible avec elle ?",
            solution: [
              "a) Somme : 338 + 344 + 341 + 347 + 339 + 343 + 345 = 2 397. Moyenne : m = 2 397 ÷ 7 ≈ 342,43 m/s.",
              "Incertitude-type : u = s ÷ √7 ≈ 3,26 ÷ 2,646 ≈ 1,23 m/s, que l'on arrondit par excès à 1,3 m/s.",
              "b) Résultat : v = (342,4 ± 1,3) m/s, la moyenne étant arrondie au même rang décimal que l'incertitude.",
              "c) |342,4 - 343| ÷ 1,3 = 0,6 ÷ 1,3 ≈ 0,46. Ce quotient est inférieur à 2 : la mesure est compatible avec la valeur de référence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un groupe pèse six fois le même objet. Le tableur donne une moyenne m = 12,333 g et un écart-type expérimental s = 0,033 g. a) Calculer l'incertitude-type u sur la moyenne. b) Écrire le résultat. c) Le fabricant indique une masse de 12,35 g. La mesure est-elle compatible avec cette valeur ?",
              hint: "u = s ÷ √n avec n = 6 et √6 ≈ 2,449. Arrondissez u par excès à deux chiffres significatifs.",
              solution: [
                "a) u = 0,033 ÷ √6 ≈ 0,033 ÷ 2,449 ≈ 0,0135 g, arrondi par excès à 0,014 g.",
                "b) m = (12,333 ± 0,014) g.",
                "c) |12,333 - 12,35| ÷ 0,014 = 0,017 ÷ 0,014 ≈ 1,2. Ce quotient est inférieur à 2 : la mesure est compatible avec la valeur indiquée par le fabricant.",
              ],
            },
            {
              level: 2,
              statement: "Pour caractériser un composant, un groupe mesure la tension U à ses bornes pour plusieurs intensités I du courant qui le traverse. I = 0,010 A : U = 1,02 V ; I = 0,020 A : U = 1,98 V ; I = 0,030 A : U = 3,03 V ; I = 0,040 A : U = 3,97 V. Les intensités sont dans la colonne A du tableur (lignes 2 à 5) et les tensions dans la colonne B. a) Quelle formule écrire en C2 pour calculer U ÷ I ? b) Calculer U ÷ I pour chaque mesure. c) Proposer un modèle reliant U et I et donner la valeur de son paramètre. d) Comment ce modèle apparaît-il sur un graphique représentant U en fonction de I ?",
              hint: "Si le quotient U ÷ I est à peu près constant, U est proportionnelle à I. Le graphique d'une relation de proportionnalité est une droite passant par l'origine.",
              solution: [
                "a) En C2 : =B2/A2, formule que l'on recopie vers le bas jusqu'à C5.",
                "b) U ÷ I vaut 1,02 ÷ 0,010 = 102 Ω ; 1,98 ÷ 0,020 = 99 Ω ; 3,03 ÷ 0,030 = 101 Ω ; 3,97 ÷ 0,040 ≈ 99,3 Ω.",
                "c) Ces quotients sont tous proches de 100 Ω : on modélise par une relation de proportionnalité U = R × I (loi d'Ohm), avec R ≈ (102 + 99 + 101 + 99,3) ÷ 4 ≈ 100 Ω.",
                "d) Les points sont presque alignés sur une droite passant par l'origine, de coefficient directeur R ≈ 100 Ω. On trace les mesures en points et le modèle en droite continue ; les petits écarts proviennent de la variabilité des mesures.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Pour étudier l'effet de l'albédo, un groupe expose une surface noire et une surface blanche, identiques par ailleurs, à la même lampe pendant 10 minutes, puis mesure leur température finale avec un capteur. Cinq essais sont réalisés pour chaque surface. Surface noire : 41,2 ; 40,6 ; 42,0 ; 41,5 ; 40,9 (en °C). Surface blanche : 31,8 ; 32,5 ; 31,2 ; 32,0 ; 32,4 (en °C). Le tableur donne les écarts-types expérimentaux s = 0,54 °C pour la surface noire et s = 0,52 °C pour la surface blanche. 1) Calculer la moyenne et l'incertitude-type pour chaque surface. 2) Écrire les deux résultats. 3) La différence de température entre les deux surfaces est-elle significative ? 4) Rédiger une conclusion de quelques lignes pour le compte rendu, en reliant le résultat à l'albédo et en indiquant une limite de l'expérience.",
              hint: "u = s ÷ √5 avec √5 ≈ 2,236. Comparez l'écart entre les moyennes aux incertitudes-types : un écart de plusieurs dizaines de fois u ne peut pas être dû au hasard.",
              solution: [
                "1) Surface noire : somme 206,2, moyenne 206,2 ÷ 5 = 41,24 °C ; u = 0,54 ÷ 2,236 ≈ 0,242, arrondi par excès à 0,25 °C. Surface blanche : somme 159,9, moyenne 159,9 ÷ 5 = 31,98 °C ; u = 0,52 ÷ 2,236 ≈ 0,233, arrondi par excès à 0,24 °C.",
                "2) T(noire) = (41,24 ± 0,25) °C et T(blanche) = (31,98 ± 0,24) °C.",
                "3) Différence des moyennes : 41,24 - 31,98 = 9,26 °C, soit environ 37 fois l'incertitude-type de chaque moyenne (9,26 ÷ 0,25 ≈ 37). Cet écart est très largement supérieur à la variabilité des mesures : la différence est significative.",
                "4) Conclusion possible : « Sous le même éclairement, la surface noire atteint en moyenne 41,2 °C contre 32,0 °C pour la surface blanche, soit environ 9 °C de plus, un écart très supérieur aux incertitudes. Notre hypothèse est confirmée : la surface blanche, d'albédo plus élevé, réfléchit une plus grande part du rayonnement reçu et en absorbe moins. Limite : la lampe n'a pas le même spectre que le Soleil, et nous n'avons testé que deux couleurs d'un seul matériau. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : traiter et communiquer des résultats.",
            statements: [
              { text: "Multiplier par 4 le nombre de mesures divise l'incertitude-type sur la moyenne par 2.", true: true, why: "u = s ÷ √n et √4 = 2." },
              { text: "Sur un graphique, on relie les points de mesure entre eux par des segments.", true: false, why: "Les mesures restent des points ; seul le modèle est tracé en courbe continue." },
              { text: "Un résultat qui réfute l'hypothèse de départ rend le projet inutile.", true: false, why: "Réfuter une hypothèse est un résultat scientifique à part entière, s'il est bien établi." },
              { text: "Si |m - m(réf)| ÷ u vaut 5, la mesure est compatible avec la référence.", true: false, why: "Le quotient dépasse nettement 2 : il faut chercher une erreur systématique." },
              { text: "La conclusion d'un compte rendu doit répondre explicitement à la question posée.", true: true, why: "C'est son rôle ; elle s'appuie sur les résultats chiffrés et leurs incertitudes." },
              { text: "On peut utiliser un modèle loin du domaine des mesures sans aucune précaution.", true: false, why: "Extrapoler suppose que le modèle reste valable hors du domaine étudié, ce qui n'est pas prouvé." },
              { text: "Un axe de graphique doit indiquer la grandeur représentée et son unité.", true: true, why: "Sans unité, une valeur numérique n'a pas de sens physique." },
            ],
          },
          quiz: [
            {
              q: "Cinq mesures ont un écart-type expérimental s = 0,5 s. Quelle est l'incertitude-type sur leur moyenne ?",
              options: ["0,1 s", "0,22 s", "2,5 s", "1,1 s"],
              answer: 1,
              why: "u = s ÷ √5 = 0,5 ÷ 2,236 ≈ 0,22 s. La valeur 1,1 s correspond à l'erreur qui consiste à multiplier par √5.",
            },
            {
              q: "Quelle formule de tableur calcule la moyenne des cellules B2 à B21 ?",
              options: ["=SOMME(B2:B21)", "=ECARTYPE(B2:B21)", "=MOYENNE(B2:B21)", "=B2+B21/2"],
              answer: 2,
              why: "MOYENNE additionne les 20 valeurs et divise par leur nombre ; SOMME ne divise pas et ECARTYPE mesure la dispersion.",
            },
            {
              q: "Une mesure donne g = (9,68 ± 0,05) m/s² ; la valeur de référence est 9,81 m/s². Que conclure ?",
              options: ["Le résultat n'est pas compatible avec la référence", "Le résultat est compatible avec la référence", "On ne peut rien conclure sans connaître le nombre de mesures réalisées"],
              answer: 0,
              why: "|9,68 - 9,81| ÷ 0,05 = 2,6, valeur supérieure à 2 : l'écart dépasse ce que la variabilité explique, il faut chercher une erreur systématique.",
            },
            {
              q: "Dans un compte rendu, où présente-t-on les sources d'erreur et les limites de l'expérience ?",
              options: ["Dans l'introduction", "Dans la liste du matériel", "Dans le titre", "Dans la discussion des résultats"],
              answer: 3,
              why: "La discussion analyse les résultats, leurs limites et leur domaine de validité, avant la conclusion.",
            },
            {
              q: "Comment représente-t-on les mesures et le modèle sur un même graphique ?",
              options: ["Mesures et modèle en courbes continues", "Mesures en points, modèle en courbe continue", "Mesures en barres, modèle en points isolés"],
              answer: 1,
              why: "Les mesures sont des valeurs ponctuelles ; le modèle est une fonction, tracée de façon continue.",
            },
          ],
          trap: "Écrire un résultat sans incertitude ni unité, ou recopier tous les chiffres de la calculatrice (par exemple 342,428571 m/s) : le nombre de décimales de la moyenne doit être cohérent avec celui de l'incertitude-type.",
          method: "Rédigez votre conclusion en trois phrases : la réponse à la question avec la valeur chiffrée et son incertitude, l'interprétation qui la relie à la notion scientifique, puis une limite de l'expérience. Relisez-la en vous demandant si un lecteur qui n'aurait lu qu'elle saurait ce que vous avez trouvé.",
        },
      ],
    },
  ],
}
