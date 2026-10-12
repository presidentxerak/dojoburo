import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-6e',
  chapters: [
    /* ================================================================== */
    /* LES ANGLES                                                           */
    /* ================================================================== */
    {
      id: 'angles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'angles-vocabulaire',
          title: 'Nommer un angle : aigu, droit, obtus',
          minutes: 25,
          objectives: [
            "Reconnaître un angle et nommer ses éléments : le sommet et les deux côtés.",
            "Nommer un angle avec trois lettres, en plaçant le sommet au milieu.",
            "Identifier un angle aigu, droit, obtus ou plat en le comparant à l'angle droit de l'équerre.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un angle ?",
              paragraphs: [
                "Ouvrez un compas, un éventail ou regardez les deux aiguilles d'une horloge : vous voyez un angle. En géométrie, un angle est la figure formée par deux demi-droites qui ont la même origine. Cette origine commune s'appelle le sommet de l'angle, et les deux demi-droites s'appellent les côtés de l'angle.",
                "Ce qui compte dans un angle, c'est l'écartement entre ses deux côtés, et non leur longueur. Les côtés sont des demi-droites : elles sont illimitées d'un côté, même si l'on n'en dessine qu'un morceau. Si vous prolongez les traits d'un angle, il ne devient donc pas plus grand : son ouverture reste exactement la même.",
              ],
              box: { label: "Définition", text: "Un angle est formé par deux demi-droites de même origine. L'origine commune est le sommet de l'angle ; les deux demi-droites sont ses côtés." },
            },
            {
              heading: "Nommer un angle",
              paragraphs: [
                "Pour nommer un angle, on utilise trois lettres : un point d'un côté, puis le sommet, puis un point de l'autre côté. Le sommet est toujours la lettre du milieu. Si les côtés sont les demi-droites [Ox) et [Oy), l'angle se nomme xOy. Si les côtés passent par les points A et B, il se nomme AOB, ou BOA : c'est le même angle.",
                "Sur le cahier, on écrit le nom d'un angle avec un petit chapeau au-dessus des trois lettres, pour le distinguer d'un triangle ou d'un segment. Dans le triangle ABC, il y a trois angles : l'angle BAC, de sommet A, l'angle ABC, de sommet B, et l'angle ACB, de sommet C.",
              ],
              box: { label: "À retenir", text: "Dans le nom d'un angle, la lettre du milieu est toujours le sommet. L'angle AOB et l'angle BOA désignent le même angle ; l'angle OAB est un autre angle, dont le sommet est A." },
            },
            {
              heading: "Angle aigu, droit, obtus ou plat",
              paragraphs: [
                "Pour classer les angles, on les compare à l'angle droit, que l'on vérifie avec l'équerre. Un angle droit est l'angle formé par deux droites perpendiculaires, comme le coin d'une feuille de papier ou d'une porte. Sur une figure, on le code par un petit carré placé dans le coin.",
                "Un angle aigu est plus petit qu'un angle droit : il est « pointu », comme la pointe d'un crayon bien taillé. Un angle obtus est plus grand qu'un angle droit, mais plus petit qu'un angle plat : il est très « ouvert », comme un livre largement ouvert. Un angle plat a ses deux côtés dans le prolongement l'un de l'autre : ensemble, ils forment une droite.",
                "Dans la leçon suivante, vous mesurerez les angles en degrés (°). Vous verrez alors qu'un angle droit mesure 90°, qu'un angle plat mesure 180°, qu'un angle aigu mesure moins de 90° et qu'un angle obtus mesure entre 90° et 180°.",
              ],
              box: { label: "Repère", text: "Angle aigu : plus petit qu'un angle droit. Angle droit : vérifié à l'équerre, codé par un petit carré (90°). Angle obtus : plus grand qu'un angle droit et plus petit qu'un angle plat. Angle plat : ses côtés forment une droite (180°)." },
            },
            {
              heading: "Comparer des angles sans les mesurer",
              paragraphs: [
                "Pour savoir si un angle est aigu, droit ou obtus, placez le coin de l'équerre sur le sommet, un bord de l'équerre le long d'un côté de l'angle. Si l'autre côté de l'angle passe à l'intérieur de l'équerre, l'angle est aigu ; s'il longe l'autre bord de l'équerre, l'angle est droit ; s'il passe à l'extérieur, l'angle est obtus.",
                "Pour comparer deux angles entre eux, on peut décalquer l'un des deux sur du papier calque (on fabrique un gabarit), puis le poser sur l'autre, sommet sur sommet et un côté sur un côté. L'angle dont le deuxième côté est le plus écarté est le plus grand. Attention : un angle dessiné avec de longs côtés n'est pas forcément plus grand qu'un angle dessiné avec des côtés courts.",
              ],
            },
          ],
          keyPoints: [
            "Un angle est formé par deux demi-droites de même origine : l'origine est le sommet, les demi-droites sont les côtés.",
            "On nomme un angle avec trois lettres, le sommet au milieu : xOy, AOB (ou BOA).",
            "La grandeur d'un angle dépend de l'écartement de ses côtés, pas de leur longueur.",
            "Angle aigu : plus petit qu'un angle droit. Angle droit : vérifié à l'équerre, codé par un petit carré.",
            "Angle obtus : plus grand qu'un angle droit et plus petit qu'un angle plat. Angle plat : ses côtés forment une droite.",
          ],
          example: {
            statement: "ABCD est un rectangle et l'on trace sa diagonale [AC]. a) Nommez les trois angles de sommet A que l'on voit sur la figure. b) Dites, pour chacun, s'il est aigu, droit ou obtus, en justifiant.",
            solution: [
              "Trois demi-droites partent du point A : [AB), [AC) et [AD). Chaque couple de ces demi-droites forme un angle de sommet A.",
              "On obtient l'angle BAD (côtés [AB) et [AD)), l'angle BAC (côtés [AB) et [AC)) et l'angle CAD (côtés [AC) et [AD)). Dans chaque nom, le sommet A est bien au milieu.",
              "Un rectangle a quatre angles droits : l'angle BAD est donc un angle droit.",
              "La diagonale [AC] passe à l'intérieur de l'angle droit BAD et le partage en deux angles. Chacun n'est qu'une partie de l'angle droit, il est donc plus petit que lui.",
              "Réponse : l'angle BAD est droit ; les angles BAC et CAD sont aigus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites si l'angle décrit est aigu, droit, obtus ou plat : a) le coin d'une feuille de cahier ; b) les deux aiguilles d'une horloge à 3 h ; c) les deux aiguilles d'une horloge à 1 h ; d) les deux aiguilles d'une horloge à 5 h ; e) les deux aiguilles d'une horloge à 6 h.",
              hint: "Imaginez une équerre posée au centre de l'horloge, un bord sur la grande aiguille qui montre le 12 : la petite aiguille est-elle dedans, sur l'autre bord ou dehors ? Pensez aussi au cas où les deux aiguilles sont alignées.",
              solution: [
                "a) Le coin d'une feuille est un angle droit (on peut le vérifier avec l'équerre).",
                "b) À 3 h, la grande aiguille montre le 12 et la petite le 3 : elles sont perpendiculaires, l'angle est droit.",
                "c) À 1 h, la petite aiguille montre le 1, entre le 12 et le 3 : l'angle est plus petit qu'un angle droit, il est aigu.",
                "d) À 5 h, la petite aiguille a dépassé le 3 sans atteindre le 6 : l'angle est plus grand qu'un angle droit et plus petit qu'un angle plat, il est obtus.",
                "e) À 6 h, les deux aiguilles sont dans le prolongement l'une de l'autre : elles forment une droite, l'angle est plat.",
              ],
            },
            {
              level: 2,
              statement: "On trace une droite (AB) et un point O de cette droite, situé entre A et B. On trace aussi une demi-droite [OC), le point C n'étant pas sur la droite (AB), de façon que l'angle AOC soit aigu. a) Nommez les trois angles de sommet O de la figure. b) Quelle est la nature de l'angle AOB ? c) L'angle COB est-il aigu, droit ou obtus ? Justifiez.",
              hint: "Un angle plat est formé de deux angles droits placés côte à côte. Si une partie de l'angle plat est plus petite qu'un angle droit, que dire de l'autre partie ?",
              solution: [
                "a) Trois demi-droites partent de O : [OA), [OB) et [OC). Les trois angles de sommet O sont l'angle AOC, l'angle COB et l'angle AOB.",
                "b) Les points A, O et B sont alignés et O est entre A et B : les demi-droites [OA) et [OB) sont dans le prolongement l'une de l'autre. L'angle AOB est plat.",
                "c) La demi-droite [OC) partage l'angle plat AOB en deux angles : AOC et COB. Un angle plat correspond à deux angles droits côte à côte.",
                "L'angle AOC est plus petit qu'un angle droit. Pour compléter l'angle plat, l'angle COB doit donc être plus grand qu'un angle droit ; il est aussi plus petit que l'angle plat AOB dont il n'est qu'une partie.",
                "Conclusion : l'angle COB est obtus.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Quatre demi-droites [Ox), [Oy), [Oz) et [Ot) ont la même origine O. Les demi-droites [Ox) et [Ot) sont dans le prolongement l'une de l'autre, et [Oy) puis [Oz) sont tracées entre elles, dans cet ordre en tournant de [Ox) vers [Ot). On sait que l'angle xOy est droit. a) Combien d'angles de sommet O peut-on nommer avec ces quatre demi-droites ? Écrivez-les tous. b) Donnez la nature de chacun de ces angles, en justifiant.",
              hint: "Associez les demi-droites deux par deux sans en oublier : [Ox) avec chacune des trois autres, puis [Oy) avec les deux suivantes, puis [Oz) avec [Ot). Pour la nature, servez-vous de l'angle plat xOt et de l'angle droit xOy.",
              solution: [
                "a) Avec [Ox) : xOy, xOz, xOt. Avec [Oy) : yOz, yOt. Avec [Oz) : zOt. On peut nommer 6 angles.",
                "L'angle xOt est plat, car [Ox) et [Ot) sont dans le prolongement l'une de l'autre. L'angle xOy est droit (c'est une donnée).",
                "L'angle plat xOt est formé de l'angle droit xOy et de l'angle yOt : l'angle yOt est donc lui aussi un angle droit.",
                "La demi-droite [Oz) est à l'intérieur de l'angle droit yOt : les angles yOz et zOt en sont des parties, ils sont aigus.",
                "L'angle xOz est formé de l'angle droit xOy et de l'angle yOz : il est plus grand qu'un angle droit, et plus petit que l'angle plat xOt. Il est obtus.",
                "Bilan : xOy droit, xOz obtus, xOt plat, yOz aigu, yOt droit, zOt aigu.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Angle aigu", right: "Plus petit qu'un angle droit" },
              { left: "Angle droit", right: "Vérifié à l'équerre, codé par un petit carré" },
              { left: "Angle obtus", right: "Entre un angle droit et un angle plat" },
              { left: "Angle plat", right: "Ses deux côtés forment une droite" },
              { left: "Sommet", right: "L'origine commune des deux côtés" },
              { left: "Côtés", right: "Les deux demi-droites qui forment l'angle" },
            ],
          },
          quiz: [
            { q: "Dans l'angle RST, quel point est le sommet ?", options: ["R", "S", "T"], answer: 1, why: "Le sommet est toujours la lettre du milieu du nom : ici S." },
            { q: "À 4 h, les deux aiguilles d'une horloge forment un angle :", options: ["aigu", "droit", "obtus", "plat"], answer: 2, why: "La petite aiguille a dépassé le 3 sans atteindre le 6 : l'angle est plus grand qu'un angle droit et plus petit qu'un angle plat." },
            { q: "On prolonge à la règle les deux côtés d'un angle aigu. Que devient cet angle ?", options: ["Il devient plus grand", "Il ne change pas", "Il devient droit", "Il devient plus petit"], answer: 1, why: "La grandeur d'un angle dépend de l'écartement de ses côtés, pas de leur longueur." },
            { q: "Quel nom désigne le même angle que l'angle MAP ?", options: ["AMP", "PMA", "PAM", "APM"], answer: 2, why: "Le sommet A doit rester au milieu : MAP et PAM désignent le même angle." },
            { q: "Les deux côtés d'un angle plat :", options: ["forment une droite", "sont perpendiculaires", "ont la même longueur", "se coupent en deux points"], answer: 0, why: "Dans un angle plat, les deux côtés sont dans le prolongement l'un de l'autre et forment une droite." },
          ],
          trap: "Ne pas placer le sommet au milieu du nom (écrire « l'angle OAB » pour un angle de sommet O), ou croire qu'un angle dessiné avec de longs côtés est plus grand qu'un angle aux côtés courts.",
          method: "Pour classer un angle, posez le coin de l'équerre sur le sommet, un bord le long d'un côté, puis regardez l'autre côté : à l'intérieur de l'équerre (aigu), le long du bord (droit) ou à l'extérieur (obtus).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rapporteur',
          title: 'Mesurer et tracer un angle au rapporteur',
          minutes: 30,
          objectives: [
            "Connaître le degré, unité de mesure des angles, ainsi que la mesure de l'angle droit et de l'angle plat.",
            "Mesurer un angle avec un rapporteur en choisissant la bonne graduation.",
            "Tracer un angle de mesure donnée.",
            "Estimer la mesure d'un angle avant de la mesurer, pour contrôler le résultat.",
          ],
          course: [
            {
              heading: "Le degré, unité de mesure des angles",
              paragraphs: [
                "Comme on mesure une longueur en centimètres, on mesure un angle en degrés, notés °. Si l'on partage un tour complet en 360 parts égales, chaque part forme un angle de 1°. Un demi-tour correspond à l'angle plat : 180°. Un quart de tour correspond à l'angle droit : 90°.",
                "On peut ainsi classer les angles d'après leur mesure : un angle aigu mesure moins de 90°, un angle droit exactement 90°, un angle obtus entre 90° et 180°, et un angle plat exactement 180°. Par exemple, un angle de 35° est aigu et un angle de 120° est obtus. Pour dire que l'angle AOB mesure 50°, on écrit sur le cahier : AOB = 50°, avec le chapeau sur AOB.",
              ],
              box: { label: "Repère", text: "Un tour complet : 360°. Un angle plat (demi-tour) : 180°. Un angle droit (quart de tour) : 90°. Angle aigu : moins de 90°. Angle obtus : entre 90° et 180°." },
            },
            {
              heading: "Le rapporteur",
              paragraphs: [
                "Le rapporteur est le plus souvent un demi-disque transparent gradué de 0° à 180°. Son centre est marqué par une petite croix ou un petit trait, sur le bord droit du bas. Le trait qui passe par le centre et par les deux graduations 0 est la ligne du zéro, souvent appelée ligne de foi.",
                "Les graduations sont écrites deux fois : une graduation va de 0 à 180 dans un sens, et une autre va de 0 à 180 dans l'autre sens. Cela permet de mesurer un angle, que son côté de départ soit à droite ou à gauche. Les deux nombres écrits au même endroit font toujours 180 au total : 50 et 130, 70 et 110, 15 et 165.",
              ],
            },
            {
              heading: "Mesurer un angle",
              paragraphs: [
                "Pour mesurer l'angle xOy : 1) estimez d'abord à l'œil s'il est aigu ou obtus ; 2) placez le centre du rapporteur exactement sur le sommet O ; 3) faites passer la ligne du zéro par le côté [Ox) ; 4) suivez la graduation qui commence à 0 sur ce côté jusqu'au côté [Oy), et lisez la mesure.",
                "Le contrôle est indispensable : si l'angle est aigu, la mesure doit être inférieure à 90° ; s'il est obtus, elle doit être supérieure à 90°. Si vous lisez 130° pour un angle visiblement aigu, vous avez suivi la mauvaise graduation : la bonne mesure est 180 - 130 = 50°. Si un côté est trop court pour atteindre les graduations, prolongez-le à la règle : cela ne change pas l'angle.",
              ],
              box: { label: "À retenir", text: "Centre du rapporteur sur le sommet, ligne du zéro sur un côté, lecture sur la graduation qui part de 0 sur ce côté. L'estimation (aigu ou obtus) permet de vérifier que l'on a lu la bonne graduation." },
            },
            {
              heading: "Tracer un angle de mesure donnée",
              paragraphs: [
                "Pour tracer un angle xOy de 65° : 1) tracez une demi-droite [Ox) ; 2) placez le centre du rapporteur sur O et la ligne du zéro sur [Ox) ; 3) en suivant la graduation qui part de 0 sur [Ox), faites un petit repère en face de 65 ; 4) retirez le rapporteur et tracez la demi-droite [Oy) qui part de O et passe par ce repère ; 5) codez l'angle et écrivez sa mesure.",
                "Pour un angle de 140°, on procède de la même façon. Comme 140° est plus que 90°, l'angle obtenu doit être obtus, plus ouvert que le coin d'une feuille : sinon, on a suivi la mauvaise graduation. Une mesure au rapporteur n'est jamais parfaite : un écart de 1° avec la valeur attendue est normal.",
              ],
            },
          ],
          keyPoints: [
            "Les angles se mesurent en degrés (°) : un tour fait 360°, un angle plat 180°, un angle droit 90°.",
            "Angle aigu : moins de 90°. Angle obtus : entre 90° et 180°.",
            "Pour mesurer : centre du rapporteur sur le sommet, ligne du zéro sur un côté, lecture sur la graduation qui part de 0 sur ce côté.",
            "Les deux nombres lus au même endroit du rapporteur totalisent 180 : 40 et 140, 75 et 105.",
            "Toujours estimer avant de mesurer : un angle aigu ne peut pas mesurer 130°.",
            "Pour tracer : une demi-droite, un repère en face de la mesure, puis la deuxième demi-droite tracée depuis le sommet.",
          ],
          example: {
            statement: "Léo mesure un angle ABC qui est visiblement aigu. Il place correctement le centre du rapporteur sur B et la ligne du zéro sur [BA), mais il annonce 145°. a) Pourquoi sa réponse est-elle impossible ? b) Quelle est la bonne mesure ? c) Expliquez ensuite comment tracer un angle DEF de 145°.",
            solution: [
              "a) L'angle ABC est aigu, donc sa mesure est inférieure à 90°. Or 145° est plus grand que 90° : cette mesure est impossible.",
              "Léo a lu la mauvaise graduation : celle qui ne commence pas à 0 sur le côté [BA).",
              "b) Au même endroit du rapporteur, les deux graduations totalisent 180. La bonne mesure est 180 - 145 = 35°.",
              "c) On trace la demi-droite [ED), on place le centre du rapporteur sur E et la ligne du zéro sur [ED), puis on fait un repère en face de 145 sur la graduation qui part de 0 sur [ED). On trace enfin [EF) passant par ce repère.",
              "Contrôle : l'angle DEF obtenu est obtus, ce qui est cohérent avec 145° > 90°.",
              "Réponse : l'angle ABC mesure 35° ; l'angle DEF se trace comme indiqué au c.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sans rapporteur, dites si un angle ayant la mesure donnée est aigu, droit, obtus ou plat : a) 47° ; b) 90° ; c) 135° ; d) 180° ; e) 89° ; f) 91°.",
              hint: "Comparez chaque mesure à 90° et à 180°.",
              solution: [
                "a) 47° < 90° : angle aigu.",
                "b) 90° : angle droit.",
                "c) 135° est entre 90° et 180° : angle obtus.",
                "d) 180° : angle plat.",
                "e) 89° < 90° : angle aigu, même s'il ressemble beaucoup à un angle droit.",
                "f) 91° est entre 90° et 180° : angle obtus.",
              ],
            },
            {
              level: 2,
              statement: "Un élève a mesuré trois angles. Pour chacun, il a noté les deux nombres écrits à l'endroit où passe le deuxième côté, sans savoir lequel garder. a) Un angle aigu : il lit 62 et 118. b) Un angle obtus : il lit 25 et 155. c) Un angle obtus : il lit 80 et 100. Donnez la bonne mesure de chaque angle, puis vérifiez que les deux nombres lus font bien 180 au total.",
              hint: "Un angle aigu mesure moins de 90°, un angle obtus plus de 90° : un seul des deux nombres convient à chaque fois.",
              solution: [
                "a) L'angle est aigu, sa mesure est inférieure à 90° : c'est 62°. Vérification : 62 + 118 = 180.",
                "b) L'angle est obtus, sa mesure est supérieure à 90° : c'est 155°. Vérification : 25 + 155 = 180.",
                "c) L'angle est obtus : c'est 100° (80° serait un angle aigu). Vérification : 80 + 100 = 180.",
                "Réponse : 62°, 155° et 100°.",
              ],
            },
            {
              level: 3,
              statement: "Défi : les angles de l'horloge. On s'intéresse à l'angle le plus petit formé par les deux aiguilles d'une horloge, à une heure pile (la petite aiguille est alors exactement sur un nombre). a) Quel angle forment les aiguilles à 3 h ? à 6 h ? b) Combien de degrés y a-t-il entre deux nombres voisins du cadran, par exemple entre le 12 et le 1 ? c) Déduisez-en la mesure et la nature de l'angle formé par les aiguilles à 2 h, à 4 h et à 5 h. d) À quelles heures pile, entre 1 h et 11 h, les aiguilles forment-elles un angle de 150° ?",
              hint: "Le cadran fait un tour complet, soit 360°, et il est partagé en 12 intervalles égaux par les nombres de 1 à 12.",
              solution: [
                "a) À 3 h, les aiguilles forment un angle droit : 90°. À 6 h, elles sont alignées : angle plat de 180°.",
                "b) Les 12 nombres partagent le tour complet en 12 parts égales : 360 ÷ 12 = 30. Il y a 30° entre deux nombres voisins.",
                "c) À 2 h : 2 × 30 = 60°, angle aigu. À 4 h : 4 × 30 = 120°, angle obtus. À 5 h : 5 × 30 = 150°, angle obtus.",
                "d) 150 ÷ 30 = 5 : il faut 5 intervalles entre les deux aiguilles. C'est le cas à 5 h (du 12 au 5) et à 7 h (du 7 au 12, en passant par 8, 9, 10 et 11, soit 5 intervalles).",
                "Réponse : les aiguilles forment un angle de 150° à 5 h et à 7 h.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour mesurer un angle au rapporteur.",
            items: [
              "Estimer à l'œil si l'angle est aigu ou obtus",
              "Placer le centre du rapporteur sur le sommet",
              "Faire passer la ligne du zéro par un côté de l'angle",
              "Suivre la graduation qui part de 0 jusqu'à l'autre côté",
              "Lire la mesure et la comparer à l'estimation",
            ],
          },
          quiz: [
            { q: "Combien mesure un angle droit ?", options: ["45°", "180°", "90°", "360°"], answer: 2, why: "Un angle droit est un quart de tour : 360 ÷ 4 = 90°." },
            { q: "Un angle de 100° est :", options: ["aigu", "obtus", "droit", "plat"], answer: 1, why: "100° est compris entre 90° et 180° : l'angle est obtus." },
            { q: "Pour un angle aigu, Inès lit 70 et 110 sur le rapporteur. Quelle est sa mesure ?", options: ["70°", "110°", "180°", "40°"], answer: 0, why: "Un angle aigu mesure moins de 90° : on garde 70°." },
            { q: "Où place-t-on le centre du rapporteur pour mesurer l'angle KLM ?", options: ["Sur le point K", "Sur le point M", "Au milieu de [KM]", "Sur le point L"], answer: 3, why: "Le centre du rapporteur se place sur le sommet de l'angle, la lettre du milieu : L." },
            { q: "Combien de degrés compte un tour complet ?", options: ["180°", "360°", "100°", "90°"], answer: 1, why: "Un tour complet mesure 360°, soit deux angles plats ou quatre angles droits." },
          ],
          trap: "Suivre la mauvaise graduation du rapporteur et annoncer 130° pour un angle aigu au lieu de 50°, faute d'avoir lu la graduation qui part de 0 sur le côté de l'angle.",
          method: "Avant de poser le rapporteur, dites « aigu » ou « obtus ». Après la lecture, vérifiez : moins de 90° pour un angle aigu, plus de 90° pour un angle obtus. Sinon, gardez l'autre nombre lu au même endroit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'bissectrice-somme-angles',
          title: 'La bissectrice et la somme des angles d\'un triangle',
          minutes: 35,
          objectives: [
            "Définir la bissectrice d'un angle et la construire au rapporteur.",
            "Connaître la somme des mesures des angles d'un triangle.",
            "Calculer la mesure du troisième angle d'un triangle à partir des deux autres.",
          ],
          course: [
            {
              heading: "La bissectrice d'un angle",
              paragraphs: [
                "La bissectrice d'un angle est la demi-droite qui part du sommet et partage cet angle en deux angles de même mesure. On peut la voir comme la « ligne du milieu » de l'angle : si l'on plie la feuille le long de la bissectrice, les deux côtés de l'angle se superposent exactement.",
                "Si [Oz) est la bissectrice de l'angle xOy, alors les angles xOz et zOy ont la même mesure, et chacun mesure la moitié de l'angle xOy. Par exemple, si l'angle xOy mesure 70°, alors les angles xOz et zOy mesurent chacun 35°. La bissectrice d'un angle droit le partage en deux angles de 45° ; celle d'un angle plat le partage en deux angles droits.",
              ],
              box: { label: "Définition", text: "La bissectrice d'un angle est la demi-droite issue du sommet qui partage cet angle en deux angles de même mesure. Chacun de ces deux angles mesure la moitié de l'angle de départ." },
            },
            {
              heading: "Construire la bissectrice",
              paragraphs: [
                "Au rapporteur : mesurez l'angle, divisez la mesure par 2, puis tracez depuis le sommet la demi-droite qui fait avec un côté un angle égal à cette moitié. Pour un angle xOy de 124°, on calcule 124 ÷ 2 = 62. On place le centre du rapporteur sur O et la ligne du zéro sur [Ox), on fait un repère en face de 62 et l'on trace [Oz). On vérifie enfin que l'angle zOy mesure lui aussi 62°.",
                "Au compas, sans rien mesurer : piquez sur le sommet O et tracez un arc qui coupe les deux côtés en A et en B. Puis, sans changer l'écartement, piquez en A puis en B et tracez deux arcs qui se coupent en un point C à l'intérieur de l'angle. La demi-droite [OC) est la bissectrice. Enfin, sur une feuille, on obtient la bissectrice par pliage, en superposant les deux côtés de l'angle.",
              ],
            },
            {
              heading: "La somme des angles d'un triangle",
              paragraphs: [
                "Découpez un triangle de papier, de la forme que vous voulez, et coloriez ses trois angles. Déchirez les trois coins et placez-les côte à côte, sommet contre sommet, sans qu'ils se chevauchent : ils forment toujours un angle plat. La somme des mesures des trois angles d'un triangle est donc égale à 180°.",
                "Cette propriété est vraie pour tous les triangles, petits ou grands, pointus ou aplatis ; vous la démontrerez plus tard au collège. Vous pouvez la vérifier au rapporteur : dans un triangle dont les angles mesurent 50°, 60° et 70°, on a bien 50 + 60 + 70 = 180. Si vous trouvez 179° ou 181°, ce sont de petites imprécisions de mesure.",
              ],
              box: { label: "Propriété", text: "Dans un triangle, la somme des mesures des trois angles est égale à 180°." },
            },
            {
              heading: "Calculer un angle manquant",
              paragraphs: [
                "Si l'on connaît deux angles d'un triangle, on calcule le troisième sans le mesurer : on additionne les deux mesures connues, puis on soustrait cette somme de 180°. Dans un triangle ABC où l'angle BAC mesure 48° et l'angle ABC mesure 75° : 48 + 75 = 123, puis 180 - 123 = 57. L'angle ACB mesure donc 57°.",
                "Quelques cas utiles. Dans un triangle rectangle, l'angle droit mesure 90°, donc les deux autres angles ont pour somme 180 - 90 = 90° : ce sont deux angles aigus. Dans un triangle équilatéral, les trois angles ont la même mesure : chacun mesure 180 ÷ 3 = 60°. Enfin, un triangle ne peut avoir ni deux angles droits ni deux angles obtus, car leur somme atteindrait ou dépasserait déjà 180°.",
              ],
              box: { label: "À retenir", text: "Troisième angle = 180° - (somme des deux angles connus). Triangle rectangle : les deux angles aigus ont pour somme 90°. Triangle équilatéral : trois angles de 60°." },
            },
          ],
          keyPoints: [
            "La bissectrice d'un angle est la demi-droite issue du sommet qui le partage en deux angles de même mesure.",
            "Chaque moitié mesure la moitié de l'angle : la bissectrice d'un angle de 80° donne deux angles de 40°.",
            "Au rapporteur : mesurer l'angle, diviser par 2, tracer. On peut aussi la construire au compas ou par pliage.",
            "Dans tout triangle, la somme des trois angles est égale à 180°.",
            "Troisième angle = 180° - (somme des deux autres).",
            "Triangle rectangle : deux angles aigus dont la somme vaut 90°. Triangle équilatéral : trois angles de 60°.",
          ],
          example: {
            statement: "Dans le triangle RST, l'angle SRT mesure 64° et l'angle RST mesure 38°. a) Calculez la mesure de l'angle RTS. b) On trace la bissectrice de l'angle RTS : quelle est la mesure de chacun des deux angles obtenus ?",
            solution: [
              "a) Dans un triangle, la somme des trois angles est égale à 180°.",
              "Somme des deux angles connus : 64 + 38 = 102.",
              "Angle RTS : 180 - 102 = 78. L'angle RTS mesure 78°.",
              "Contrôle : 64 + 38 + 78 = 180.",
              "b) La bissectrice partage l'angle RTS en deux angles de même mesure : 78 ÷ 2 = 39.",
              "Réponse : l'angle RTS mesure 78°, et sa bissectrice le partage en deux angles de 39°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez la mesure du troisième angle de chaque triangle, connaissant les deux autres : a) 70° et 50° ; b) 90° et 35° ; c) 105° et 45°.",
              hint: "Additionnez les deux mesures connues, puis soustrayez le résultat de 180°.",
              solution: [
                "a) 70 + 50 = 120 et 180 - 120 = 60. Le troisième angle mesure 60°.",
                "b) 90 + 35 = 125 et 180 - 125 = 55. Le troisième angle mesure 55° (le triangle est rectangle, et l'on a bien 35 + 55 = 90).",
                "c) 105 + 45 = 150 et 180 - 150 = 30. Le troisième angle mesure 30°.",
              ],
            },
            {
              level: 2,
              statement: "L'angle xOy mesure 136°. a) On trace sa bissectrice [Oz). Quelle est la mesure des angles xOz et zOy ? b) On trace ensuite la bissectrice [Ot) de l'angle xOz. Quelle est la mesure de l'angle xOt ? Et celle de l'angle tOy ? c) Donnez la nature des angles xOz, xOt et tOy.",
              hint: "L'angle tOy est formé de l'angle tOz et de l'angle zOy, placés côte à côte.",
              solution: [
                "a) La bissectrice partage l'angle de 136° en deux angles égaux : 136 ÷ 2 = 68. Les angles xOz et zOy mesurent chacun 68°.",
                "b) [Ot) partage l'angle xOz de 68° en deux : 68 ÷ 2 = 34. Les angles xOt et tOz mesurent chacun 34°.",
                "L'angle tOy est formé des angles tOz et zOy : 34 + 68 = 102. L'angle tOy mesure 102°.",
                "Vérification : xOt + tOy = 34 + 102 = 136, on retrouve bien l'angle xOy.",
                "c) xOz (68°) et xOt (34°) sont aigus ; tOy (102°) est obtus.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le triangle ABC est isocèle en A : on admet que ses angles ABC et ACB ont la même mesure. L'angle BAC mesure 40°. a) Calculez la mesure des angles ABC et ACB. b) La bissectrice de l'angle ABC coupe le côté [AC] en un point D. Calculez la mesure de l'angle DBC, puis celle de l'angle BDC dans le triangle BDC. c) Peut-on construire un triangle dont les angles mesurent 95°, 60° et 30° ? Justifiez.",
              hint: "Au a, les deux angles égaux se partagent ce qui reste de 180° une fois l'angle BAC retiré. Au b, l'angle BCD est le même angle que ACB, car D est sur le côté [AC].",
              solution: [
                "a) La somme des angles du triangle ABC vaut 180° : il reste 180 - 40 = 140° pour les angles ABC et ACB.",
                "Ils ont la même mesure : 140 ÷ 2 = 70. Les angles ABC et ACB mesurent chacun 70°.",
                "b) [BD) est la bissectrice de l'angle ABC : l'angle DBC mesure 70 ÷ 2 = 35°.",
                "Dans le triangle BDC, l'angle BCD est le même que l'angle ACB, car D est sur [AC] : il mesure 70°. Donc l'angle BDC mesure 180 - (35 + 70) = 180 - 105 = 75°.",
                "c) 95 + 60 + 30 = 185. La somme n'est pas égale à 180° : un tel triangle est impossible.",
                "Réponse : 70° et 70° ; l'angle DBC mesure 35° et l'angle BDC 75° ; non, le triangle du c n'existe pas.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les bissectrices et les angles du triangle.",
            statements: [
              { text: "La bissectrice d'un angle droit le partage en deux angles de 45°.", true: true, why: "90 ÷ 2 = 45 : chaque moitié mesure 45°." },
              { text: "Un triangle peut avoir deux angles droits.", true: false, why: "90 + 90 = 180 : il ne resterait rien pour le troisième angle." },
              { text: "La somme des angles d'un grand triangle est plus grande que celle d'un petit triangle.", true: false, why: "Quelle que soit sa taille, la somme des angles d'un triangle vaut toujours 180°." },
              { text: "Dans un triangle rectangle, les deux autres angles sont aigus.", true: true, why: "Leur somme vaut 180 - 90 = 90°, donc chacun mesure moins de 90°." },
              { text: "Un triangle peut avoir des angles de 100°, 50° et 40°.", true: false, why: "100 + 50 + 40 = 190, et non 180 : ce triangle n'existe pas." },
              { text: "Chaque angle d'un triangle équilatéral mesure 60°.", true: true, why: "Ses trois angles sont égaux et leur somme vaut 180° : 180 ÷ 3 = 60." },
              { text: "La bissectrice d'un angle de 150° le partage en deux angles de 70°.", true: false, why: "150 ÷ 2 = 75 : on obtient deux angles de 75°." },
              { text: "Un triangle peut avoir un angle obtus.", true: true, why: "Par exemple un triangle dont les angles mesurent 120°, 30° et 30° : la somme fait bien 180°." },
            ],
          },
          quiz: [
            { q: "Dans un triangle, deux angles mesurent 80° et 45°. Combien mesure le troisième ?", options: ["65°", "55°", "45°", "125°"], answer: 1, why: "80 + 45 = 125, puis 180 - 125 = 55." },
            { q: "L'angle AOB mesure 64°. Sa bissectrice le partage en deux angles de :", options: ["32°", "128°", "64°", "34°"], answer: 0, why: "La bissectrice partage l'angle en deux angles égaux : 64 ÷ 2 = 32." },
            { q: "Les deux angles aigus d'un triangle rectangle ont pour somme :", options: ["180°", "45°", "60°", "90°"], answer: 3, why: "L'angle droit mesure 90°, il reste 180 - 90 = 90° pour les deux autres angles." },
            { q: "Quelles mesures peuvent être celles des trois angles d'un même triangle ?", options: ["90°, 60° et 40°", "100°, 50° et 30°", "70°, 70° et 50°", "60°, 60° et 70°"], answer: 1, why: "Seule la somme 100 + 50 + 30 vaut 180 ; les trois autres font 190." },
            { q: "Un triangle a trois angles de même mesure. Chacun mesure :", options: ["90°", "45°", "60°", "30°"], answer: 2, why: "Les trois angles se partagent 180° : 180 ÷ 3 = 60." },
          ],
          trap: "Soustraire un seul angle de 180° au lieu de la somme des deux angles connus : dans un triangle ayant des angles de 50° et 60°, le troisième mesure 180 - 110 = 70°, et non 180 - 50 = 130°.",
          method: "Après avoir calculé le troisième angle, additionnez les trois mesures : vous devez retrouver exactement 180°. Pour une bissectrice, vérifiez que les deux moitiés ont la même mesure et que leur somme redonne l'angle de départ.",
        },
      ],
    },

    /* ================================================================== */
    /* DIVISION, MULTIPLES ET DIVISEURS                                     */
    /* ================================================================== */
    {
      id: 'division',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'division-euclidienne',
          title: 'La division euclidienne : quotient et reste',
          minutes: 30,
          objectives: [
            "Reconnaître une situation de division : un partage équitable ou un regroupement.",
            "Effectuer une division euclidienne posée et nommer le dividende, le diviseur, le quotient et le reste.",
            "Écrire l'égalité dividende = diviseur × quotient + reste et vérifier que le reste est inférieur au diviseur.",
            "Interpréter le quotient et le reste pour répondre à la question d'un problème.",
          ],
          course: [
            {
              heading: "Partager ou faire des groupes",
              paragraphs: [
                "On veut partager équitablement 47 billes entre 6 enfants. Chaque enfant reçoit 7 billes, car 6 × 7 = 42, et il reste 5 billes : c'est trop peu pour en redonner une à chacun. On vient d'effectuer une division euclidienne : 47 est le dividende, 6 est le diviseur, 7 est le quotient et 5 est le reste.",
                "La division sert aussi à faire des groupes. Avec 47 œufs, combien de boîtes de 6 œufs peut-on remplir ? On remplit 7 boîtes, et il reste 5 œufs. Dans les deux situations, partage ou regroupement, on cherche combien de fois le diviseur « tient » dans le dividende.",
              ],
            },
            {
              heading: "L'égalité de la division euclidienne",
              paragraphs: [
                "Le résultat d'une division euclidienne s'écrit avec une égalité : 47 = 6 × 7 + 5. Le reste doit toujours être plus petit que le diviseur : si le reste était égal ou supérieur à 6, on pourrait encore donner une bille de plus à chaque enfant. Ainsi, 47 = 6 × 6 + 11 est une égalité juste, mais ce n'est pas la division euclidienne de 47 par 6, car 11 est plus grand que 6.",
                "Le quotient et le reste sont des nombres entiers. Quand le reste est 0, on dit que la division « tombe juste » : par exemple 42 = 6 × 7 + 0, et l'on dit que 42 est divisible par 6. Attention : on ne divise jamais par 0.",
              ],
              box: { label: "Définition", text: "Effectuer la division euclidienne d'un nombre entier (le dividende) par un nombre entier non nul (le diviseur), c'est trouver deux nombres entiers, le quotient et le reste, tels que : dividende = diviseur × quotient + reste, avec reste < diviseur." },
            },
            {
              heading: "Poser la division",
              paragraphs: [
                "Pour diviser 857 par 6, on pose la division « en potence » et l'on commence par la gauche. En 8 centaines, combien de fois 6 ? 1 fois (6 × 1 = 6), il reste 8 - 6 = 2 centaines. On abaisse le chiffre suivant, 5 : on obtient 25 dizaines. En 25, combien de fois 6 ? 4 fois (6 × 4 = 24), il reste 1.",
                "On abaisse le 7 : on obtient 17 unités. En 17, combien de fois 6 ? 2 fois (6 × 2 = 12), il reste 5. Il n'y a plus de chiffre à abaisser : le quotient est 142 et le reste est 5. On vérifie : 6 × 142 + 5 = 852 + 5 = 857, et 5 < 6.",
                "Avant de poser la division, on prévoit le nombre de chiffres du quotient : 6 × 100 = 600 et 6 × 1 000 = 6 000, donc le quotient de 857 par 6 est compris entre 100 et 1 000 : il a 3 chiffres. Ce repère évite d'oublier un 0 au quotient, par exemple quand on divise 3 514 par 7 (le quotient est 502).",
              ],
              box: { label: "À retenir", text: "À chaque étape, le reste partiel doit être plus petit que le diviseur. On termine toujours par la vérification : diviseur × quotient + reste = dividende." },
            },
            {
              heading: "Le reste dans les problèmes",
              paragraphs: [
                "Selon la question posée, on n'utilise pas le reste de la même façon. 75 élèves partent en sortie dans des minibus de 8 places : 75 = 8 × 9 + 3. Il faut 10 minibus, car les 3 élèves restants doivent aussi monter : on ajoute 1 au quotient.",
                "En revanche, avec 75 €, on peut acheter 9 livres à 8 € pièce : il reste 3 €, pas assez pour un dixième livre, et l'on garde le quotient. Si la question est « Combien d'argent reste-t-il ? », la réponse est le reste : 3 €. Relisez toujours la question pour savoir si l'on attend le quotient, le quotient augmenté de 1, ou le reste.",
              ],
            },
          ],
          keyPoints: [
            "Division euclidienne : dividende = diviseur × quotient + reste.",
            "Le reste est toujours plus petit que le diviseur ; s'il vaut 0, la division tombe juste.",
            "On pose la division de gauche à droite, en abaissant un chiffre à la fois.",
            "Avant de calculer, on prévoit le nombre de chiffres du quotient.",
            "On vérifie toujours : diviseur × quotient + reste doit redonner le dividende.",
            "Dans un problème, la réponse peut être le quotient, le quotient augmenté de 1, ou le reste : relisez la question.",
          ],
          example: {
            statement: "Une fleuriste a 236 roses. Elle fait des bouquets de 9 roses. a) Combien de bouquets complets peut-elle faire ? b) Combien de roses lui restera-t-il ?",
            solution: [
              "On cherche combien de fois 9 « tient » dans 236 : on effectue la division euclidienne de 236 par 9.",
              "Nombre de chiffres du quotient : 9 × 10 = 90 et 9 × 100 = 900, donc le quotient est entre 10 et 100 : il a 2 chiffres.",
              "En 23 dizaines, combien de fois 9 ? 2 fois (9 × 2 = 18), il reste 23 - 18 = 5. On abaisse le 6 : 56. En 56, combien de fois 9 ? 6 fois (9 × 6 = 54), il reste 2.",
              "Quotient : 26 ; reste : 2. Vérification : 9 × 26 + 2 = 234 + 2 = 236, et 2 < 9.",
              "Réponse : elle peut faire 26 bouquets complets, et il lui restera 2 roses.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Effectuez les divisions euclidiennes suivantes, puis écrivez l'égalité correspondante : a) 59 par 7 ; b) 324 par 5 ; c) 1 000 par 8.",
              hint: "Cherchez dans la table du diviseur le plus grand produit qui ne dépasse pas le dividende, puis vérifiez que le reste est plus petit que le diviseur.",
              solution: [
                "a) 7 × 8 = 56 et 7 × 9 = 63 dépasse 59. Le quotient est 8 et le reste 59 - 56 = 3 : 59 = 7 × 8 + 3.",
                "b) En 32 dizaines, 6 fois 5 (30), il reste 2 ; on abaisse le 4 : en 24, 4 fois 5 (20), il reste 4. Donc 324 = 5 × 64 + 4.",
                "c) En 10 centaines, 1 fois 8, il reste 2 ; on abaisse un 0 : en 20, 2 fois 8 (16), il reste 4 ; on abaisse le dernier 0 : en 40, 5 fois 8 (40), il reste 0. Donc 1 000 = 8 × 125 + 0 : la division tombe juste.",
              ],
            },
            {
              level: 2,
              statement: "a) L'égalité 100 = 7 × 13 + 9 est-elle juste ? Est-ce la division euclidienne de 100 par 7 ? Si non, écrivez cette division euclidienne. b) Dans une division euclidienne, le diviseur est 12, le quotient est 15 et le reste est 7. Quel est le dividende ? c) En utilisant l'égalité du a, donnez le quotient et le reste de la division euclidienne de 100 par 13.",
              hint: "Une égalité peut être juste sans être une division euclidienne : regardez si le reste est plus petit que le diviseur.",
              solution: [
                "a) 7 × 13 = 91 et 91 + 9 = 100 : l'égalité est juste.",
                "Mais le reste 9 est plus grand que le diviseur 7 : on peut encore faire un groupe de 7. Comme 9 = 7 + 2, on obtient 100 = 7 × 14 + 2, avec 2 < 7. C'est la division euclidienne de 100 par 7 : quotient 14, reste 2.",
                "b) Dividende = diviseur × quotient + reste = 12 × 15 + 7 = 180 + 7 = 187.",
                "c) L'égalité 100 = 7 × 13 + 9 s'écrit aussi 100 = 13 × 7 + 9. Cette fois, le reste 9 est plus petit que le diviseur 13 : la division euclidienne de 100 par 13 a pour quotient 7 et pour reste 9.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un collège organise une sortie pour 214 élèves et 18 accompagnateurs. a) Les cars ont 50 places. Combien de cars faut-il réserver ? b) Au restaurant, les tables sont de 6 personnes et l'on remplit les tables au maximum. Combien de tables faut-il, et combien de places resteront vides ? c) Pour le goûter, on a acheté 500 biscuits, partagés équitablement entre tous les participants. Combien de biscuits chacun reçoit-il, et combien en reste-t-il ?",
              hint: "Calculez d'abord le nombre total de participants. Pour chaque question, demandez-vous si la réponse est le quotient, le quotient augmenté de 1, ou le reste.",
              solution: [
                "Nombre de participants : 214 + 18 = 232.",
                "a) 232 = 50 × 4 + 32. Quatre cars transportent 200 personnes ; il en reste 32 qui doivent aussi partir. Il faut 4 + 1 = 5 cars.",
                "b) 232 = 6 × 38 + 4 (6 × 38 = 228). 38 tables complètes accueillent 228 personnes ; les 4 dernières personnes ont besoin d'une 39e table. Il faut 39 tables.",
                "39 tables offrent 39 × 6 = 234 places, pour 232 personnes : 234 - 232 = 2 places resteront vides.",
                "c) 500 = 232 × 2 + 36 (232 × 2 = 464 et 500 - 464 = 36, avec 36 < 232). Chacun reçoit 2 biscuits et il en reste 36.",
                "Réponse : 5 cars ; 39 tables avec 2 places vides ; 2 biscuits chacun et 36 biscuits restants.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "On effectue la division euclidienne de 83 par 7. Reliez chaque mot à ce qu'il désigne.",
            pairs: [
              { left: "Le dividende", right: "83" },
              { left: "Le diviseur", right: "7" },
              { left: "Le quotient", right: "11" },
              { left: "Le reste", right: "6" },
              { left: "L'égalité", right: "83 = 7 × 11 + 6" },
              { left: "La condition sur le reste", right: "6 < 7" },
            ],
          },
          quiz: [
            { q: "Dans la division euclidienne de 50 par 8, le reste est :", options: ["2", "6", "4", "8"], answer: 0, why: "50 = 8 × 6 + 2 : le quotient est 6 et le reste est 2." },
            { q: "Quelle égalité est la division euclidienne de 38 par 5 ?", options: ["38 = 5 × 6 + 8", "38 = 5 × 8 - 2", "38 = 5 × 7 + 3", "38 = 4 × 8 + 6"], answer: 2, why: "5 × 7 = 35 et 35 + 3 = 38, avec un reste 3 plus petit que 5." },
            { q: "Dans une division, le diviseur est 9 et le reste est 11. Que peut-on dire ?", options: ["Le quotient vaut 2", "C'est impossible", "Le dividende vaut 20", "Le reste est correct"], answer: 1, why: "Le reste doit être plus petit que le diviseur : avec 11, on peut encore faire un groupe de 9." },
            { q: "29 personnes prennent des voitures de 4 places. Combien de voitures faut-il ?", options: ["7", "6", "9", "8"], answer: 3, why: "29 = 4 × 7 + 1 : 7 voitures sont pleines, et la personne restante a besoin d'une 8e voiture." },
            { q: "Combien de chiffres a le quotient de 3 456 par 7 ?", options: ["2", "3", "4", "5"], answer: 1, why: "7 × 100 = 700 et 7 × 1 000 = 7 000 : le quotient est entre 100 et 1 000, il a 3 chiffres." },
          ],
          trap: "Accepter un reste plus grand que le diviseur (écrire 47 = 6 × 6 + 11), ou oublier un 0 au quotient quand un reste partiel est trop petit (écrire 52 au lieu de 502 pour 3 514 divisé par 7).",
          method: "Commencez par prévoir le nombre de chiffres du quotient, et terminez toujours par la vérification diviseur × quotient + reste = dividende, en contrôlant que le reste est plus petit que le diviseur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'multiples-diviseurs',
          title: 'Multiples, diviseurs et critères de divisibilité',
          minutes: 30,
          objectives: [
            "Reconnaître si un nombre entier est un multiple ou un diviseur d'un autre nombre entier.",
            "Utiliser le vocabulaire : multiple de, diviseur de, divisible par.",
            "Utiliser les critères de divisibilité par 2, 3, 4, 5, 9 et 10.",
            "Trouver tous les diviseurs d'un nombre entier.",
          ],
          course: [
            {
              heading: "Multiples et diviseurs",
              paragraphs: [
                "Les multiples de 7 sont les nombres de la table de 7, que l'on peut prolonger aussi loin que l'on veut : 0, 7, 14, 21, 28, 35, 42... Un nombre est un multiple de 7 s'il est égal à 7 multiplié par un nombre entier. Comme 56 = 7 × 8, 56 est un multiple de 7. On dit aussi que 7 est un diviseur de 56, ou que 56 est divisible par 7.",
                "Pour savoir si un nombre est divisible par un autre, on peut effectuer la division euclidienne : si le reste est 0, il est divisible. Par exemple, 91 = 7 × 13 + 0 : 91 est divisible par 7. Mais 100 = 7 × 14 + 2 : le reste n'est pas nul, donc 100 n'est pas un multiple de 7.",
              ],
              box: { label: "Définition", text: "Dire que 56 = 7 × 8, c'est dire que 56 est un multiple de 7, que 7 est un diviseur de 56, et que 56 est divisible par 7. Le reste de la division euclidienne de 56 par 7 est alors égal à 0." },
            },
            {
              heading: "Les critères de divisibilité par 2, 5 et 10",
              paragraphs: [
                "Pour 2, 5 et 10, il suffit de regarder le chiffre des unités. Un nombre est divisible par 2 si son chiffre des unités est 0, 2, 4, 6 ou 8 : c'est un nombre pair. Il est divisible par 5 si son chiffre des unités est 0 ou 5. Il est divisible par 10 si son chiffre des unités est 0.",
                "Exemples : 3 470 se termine par 0, il est divisible par 2, par 5 et par 10. 2 865 se termine par 5 : il est divisible par 5, mais ni par 2 ni par 10. 1 234 se termine par 4 : parmi ces trois nombres, il n'est divisible que par 2.",
              ],
            },
            {
              heading: "Les critères de divisibilité par 3, 9 et 4",
              paragraphs: [
                "Pour 3 et 9, on additionne les chiffres du nombre. Un nombre est divisible par 3 si la somme de ses chiffres est divisible par 3 ; il est divisible par 9 si la somme de ses chiffres est divisible par 9. Pour 5 742 : 5 + 7 + 4 + 2 = 18. Comme 18 est dans la table de 9 et dans celle de 3, le nombre 5 742 est divisible par 9 et par 3 (5 742 = 9 × 638).",
                "Pour 1 345 : 1 + 3 + 4 + 5 = 13, qui n'est pas dans la table de 3 : 1 345 n'est divisible ni par 3 ni par 9. Attention : tout nombre divisible par 9 est aussi divisible par 3, mais l'inverse est faux. Par exemple, 21 est divisible par 3 (2 + 1 = 3), mais pas par 9.",
                "Pour 4, on regarde le nombre formé par les deux derniers chiffres : s'il est dans la table de 4, le nombre entier est divisible par 4. Ainsi 7 316 est divisible par 4, car 16 = 4 × 4 (et 7 316 = 4 × 1 829) ; 7 318 ne l'est pas, car 18 n'est pas dans la table de 4.",
              ],
              box: { label: "Règle", text: "Par 2 : chiffre des unités 0, 2, 4, 6 ou 8. Par 5 : chiffre des unités 0 ou 5. Par 10 : chiffre des unités 0. Par 4 : les deux derniers chiffres forment un multiple de 4. Par 3 : somme des chiffres divisible par 3. Par 9 : somme des chiffres divisible par 9." },
            },
            {
              heading: "Trouver tous les diviseurs d'un nombre",
              paragraphs: [
                "Pour trouver tous les diviseurs de 24, on cherche toutes les façons d'écrire 24 comme produit de deux nombres entiers, en commençant par 1 : 24 = 1 × 24 = 2 × 12 = 3 × 8 = 4 × 6. On essaie 5 : 24 n'est pas divisible par 5. Le nombre suivant, 6, figure déjà dans la liste : on peut s'arrêter.",
                "Les diviseurs de 24 sont donc 1, 2, 3, 4, 6, 8, 12 et 24. Tout nombre entier plus grand que 1 a au moins deux diviseurs : 1 et lui-même. Un nombre n'a qu'un nombre limité de diviseurs, mais il a une infinité de multiples, car on peut prolonger sa table sans fin.",
              ],
            },
          ],
          keyPoints: [
            "56 = 7 × 8 : 56 est un multiple de 7, 7 est un diviseur de 56, 56 est divisible par 7.",
            "Un nombre est divisible par un autre quand le reste de leur division euclidienne est 0.",
            "Par 2 : unités 0, 2, 4, 6, 8. Par 5 : unités 0 ou 5. Par 10 : unités 0.",
            "Par 3 (ou 9) : la somme des chiffres est divisible par 3 (ou 9). Par 4 : les deux derniers chiffres forment un multiple de 4.",
            "Divisible par 9 entraîne divisible par 3, mais pas l'inverse.",
            "Pour lister les diviseurs, on écrit le nombre comme produit de deux entiers en partant de 1, jusqu'à ce que les facteurs se rejoignent.",
          ],
          example: {
            statement: "Le nombre 1 755 est-il divisible par 2, par 3, par 4, par 5, par 9 et par 10 ? Justifiez chaque réponse.",
            solution: [
              "Le chiffre des unités est 5 : 1 755 est divisible par 5, mais pas par 2 (il est impair) ni par 10 (il ne se termine pas par 0).",
              "Somme des chiffres : 1 + 7 + 5 + 5 = 18. Comme 18 est divisible par 3 et par 9, le nombre 1 755 est divisible par 3 et par 9.",
              "Les deux derniers chiffres forment 55, qui n'est pas dans la table de 4 (4 × 13 = 52 et 4 × 14 = 56) : 1 755 n'est pas divisible par 4.",
              "Vérification pour 9 : 1 755 = 9 × 195.",
              "Réponse : 1 755 est divisible par 3, par 5 et par 9, mais pas par 2, ni par 4, ni par 10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les nombres 45, 72, 100, 135, 246 et 1 008, lesquels sont divisibles par 2 ? par 5 ? par 9 ?",
              hint: "Pour 2 et 5, regardez le chiffre des unités. Pour 9, calculez la somme des chiffres de chaque nombre.",
              solution: [
                "Par 2 (chiffre des unités pair) : 72, 100, 246 et 1 008.",
                "Par 5 (chiffre des unités 0 ou 5) : 45, 100 et 135.",
                "Sommes des chiffres : 45 donne 9 ; 72 donne 9 ; 100 donne 1 ; 135 donne 9 ; 246 donne 12 ; 1 008 donne 9.",
                "Par 9 (somme des chiffres divisible par 9) : 45, 72, 135 et 1 008. Le nombre 246 est divisible par 3 (12), mais pas par 9.",
              ],
            },
            {
              level: 2,
              statement: "a) Donnez la liste de tous les diviseurs de 36. b) Donnez tous les multiples de 15 compris entre 100 et 160. c) Complétez avec « multiple » ou « diviseur » : 8 est un ... de 48 ; 48 est un ... de 6 ; 13 est un ... de 39.",
              hint: "Pour le a, écrivez 36 comme produit de deux entiers en partant de 1 × 36. Pour le b, prolongez la table de 15.",
              solution: [
                "a) 36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6. 5 ne divise pas 36, et après 6 les facteurs se rejoignent.",
                "Les diviseurs de 36 sont : 1, 2, 3, 4, 6, 9, 12, 18 et 36.",
                "b) 15 × 7 = 105, 15 × 8 = 120, 15 × 9 = 135, 15 × 10 = 150 ; 15 × 6 = 90 est trop petit et 15 × 11 = 165 est trop grand. Les multiples cherchés sont 105, 120, 135 et 150.",
                "c) 8 est un diviseur de 48 (48 = 8 × 6) ; 48 est un multiple de 6 ; 13 est un diviseur de 39 (39 = 13 × 3).",
              ],
            },
            {
              level: 3,
              statement: "Défi : chiffres cachés. a) Le nombre à trois chiffres 4■6 est divisible par 9. Quel est le chiffre caché ? b) Le nombre 3■5 est divisible par 3 et par 5. Trouvez toutes les valeurs possibles du chiffre caché. c) Je suis un nombre compris entre 50 et 100. Je suis divisible par 4 et par 9. Qui suis-je ?",
              hint: "Pour 9 et 3, pensez à la somme des chiffres. Pour le c, faites d'abord la liste des multiples de 9 compris entre 50 et 100.",
              solution: [
                "a) La somme des chiffres est 4 + ■ + 6 = 10 + ■. Elle doit être un multiple de 9 : avec un seul chiffre, le seul choix est 18, donc ■ = 8. Le nombre est 486 (486 = 9 × 54).",
                "b) 3■5 se termine par 5 : il est toujours divisible par 5. La somme des chiffres vaut 3 + ■ + 5 = 8 + ■ ; elle doit être 9, 12 ou 15 (au plus 8 + 9 = 17).",
                "Donc ■ = 1, 4 ou 7 : les nombres possibles sont 315, 345 et 375.",
                "c) Multiples de 9 entre 50 et 100 : 54, 63, 72, 81, 90, 99. On garde ceux dont les deux derniers chiffres forment un multiple de 4 : seul 72 convient (72 = 4 × 18).",
                "Réponse : a) 8 ; b) 1, 4 ou 7 ; c) 72.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Utilisez les critères de divisibilité.",
            statements: [
              { text: "348 est divisible par 3.", true: true, why: "3 + 4 + 8 = 15, qui est dans la table de 3 (348 = 3 × 116)." },
              { text: "Tout nombre divisible par 3 est divisible par 9.", true: false, why: "12 est divisible par 3, mais pas par 9 : seul le contraire est vrai." },
              { text: "1 035 est divisible par 2.", true: false, why: "Son chiffre des unités est 5 : c'est un nombre impair." },
              { text: "7 est un diviseur de 63.", true: true, why: "63 = 7 × 9." },
              { text: "Un nombre qui se termine par 0 est divisible par 2, par 5 et par 10.", true: true, why: "Le chiffre 0 vérifie les trois critères à la fois." },
              { text: "25 a exactement deux diviseurs.", true: false, why: "25 a trois diviseurs : 1, 5 et 25." },
              { text: "13 est divisible par 3, car il se termine par 3.", true: false, why: "Pour 3, on regarde la somme des chiffres : 1 + 3 = 4, qui n'est pas dans la table de 3." },
              { text: "516 est divisible par 4.", true: true, why: "Ses deux derniers chiffres forment 16 = 4 × 4 (et 516 = 4 × 129)." },
            ],
          },
          quiz: [
            { q: "Lequel de ces nombres est divisible par 9 ?", options: ["1 234", "3 105", "2 010", "4 404"], answer: 1, why: "3 + 1 + 0 + 5 = 9. Les sommes des chiffres des autres nombres (10, 3 et 12) ne sont pas divisibles par 9." },
            { q: "Quel nombre n'est pas un diviseur de 30 ?", options: ["5", "6", "4", "15"], answer: 2, why: "30 = 4 × 7 + 2 : le reste n'est pas nul. En revanche 30 = 5 × 6 = 2 × 15." },
            { q: "Le nombre à deux chiffres 6■ est divisible par 2 et par 5. Le chiffre caché est :", options: ["0", "5", "2", "6"], answer: 0, why: "Pour être divisible à la fois par 2 et par 5, le chiffre des unités doit être 0 : le nombre est 60." },
            { q: "Quelle phrase est juste ?", options: ["35 est un diviseur de 5", "5 est un multiple de 35", "5 est divisible par 35", "35 est divisible par 5"], answer: 3, why: "35 = 5 × 7 : 35 est un multiple de 5, donc divisible par 5." },
            { q: "Lequel de ces nombres est divisible par 4 ?", options: ["1 234", "2 518", "3 136", "4 042"], answer: 2, why: "Ses deux derniers chiffres forment 36 = 4 × 9. Ni 34, ni 18, ni 42 ne sont dans la table de 4." },
          ],
          trap: "Utiliser le chiffre des unités pour tester la divisibilité par 3 ou par 9 (croire que 13 est divisible par 3 parce qu'il se termine par 3) : pour 3 et 9, c'est la somme des chiffres qui compte.",
          method: "Appliquez les critères dans l'ordre : d'abord le chiffre des unités (2, 5, 10), puis les deux derniers chiffres (4), enfin la somme des chiffres (3, 9). Confirmez une réponse « oui » en effectuant la division.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'division-decimale',
          title: 'Calculer un quotient décimal',
          minutes: 35,
          objectives: [
            "Calculer le quotient décimal de deux nombres entiers en poursuivant la division après la virgule.",
            "Diviser un nombre décimal par un nombre entier.",
            "Diviser un nombre par 10, par 100 ou par 1 000.",
            "Donner un arrondi d'un quotient au dixième ou au centième.",
          ],
          course: [
            {
              heading: "Quand la division euclidienne ne suffit pas",
              paragraphs: [
                "Quatre amis achètent une pizza à 18 € et partagent le prix équitablement. La division euclidienne donne 18 = 4 × 4 + 2 : chacun paierait 4 €, et il resterait 2 € à payer. Mais ces 2 € peuvent encore se partager, en centimes. On cherche le quotient décimal de 18 par 4 : le nombre qui, multiplié par 4, donne exactement 18. Ici, c'est 4,5, car 4 × 4,5 = 18. Chacun paie 4,50 €.",
                "Pour obtenir ce quotient, on pose la division comme d'habitude. Quand tous les chiffres de la partie entière du dividende ont été abaissés et que le reste n'est pas nul, on place une virgule au quotient, on écrit un 0 à droite du reste (car 18 = 18,0 = 18,00) et l'on continue la division.",
              ],
              box: { label: "Définition", text: "Le quotient de 18 par 4, noté 18 ÷ 4, est le nombre qui, multiplié par 4, donne 18 : c'est 4,5. On peut toujours vérifier un quotient par une multiplication." },
            },
            {
              heading: "Poser une division décimale",
              paragraphs: [
                "Calculons 17 ÷ 4. En 17, combien de fois 4 ? 4 fois (4 × 4 = 16), il reste 1. On place la virgule au quotient, puis on abaisse un 0 : 10 dixièmes. En 10, combien de fois 4 ? 2 fois (4 × 2 = 8), il reste 2. On abaisse un nouveau 0 : 20 centièmes. En 20, combien de fois 4 ? 5 fois exactement, il reste 0. Donc 17 ÷ 4 = 4,25.",
                "Pour diviser un nombre décimal par un nombre entier, on procède de la même façon, et l'on place la virgule au quotient au moment où l'on abaisse le chiffre des dixièmes du dividende. Exemple : 9,6 ÷ 3. En 9, combien de fois 3 ? 3 fois, il reste 0. On va abaisser le 6, chiffre des dixièmes : on place d'abord la virgule au quotient. En 6, combien de fois 3 ? 2 fois. Donc 9,6 ÷ 3 = 3,2. Vérification : 3 × 3,2 = 9,6.",
              ],
              box: { label: "À retenir", text: "On place la virgule au quotient au moment où l'on abaisse le premier chiffre après la virgule du dividende, ou le premier 0 ajouté. Puis on continue jusqu'à un reste nul, ou jusqu'à la précision demandée." },
            },
            {
              heading: "Diviser par 10, 100 ou 1 000",
              paragraphs: [
                "Diviser par 10, c'est rendre chaque chiffre 10 fois plus petit : chaque chiffre recule d'un rang vers la droite dans le tableau de numération (les dizaines deviennent des unités, les unités deviennent des dixièmes). En pratique, la virgule se déplace d'un rang vers la gauche : 352 ÷ 10 = 35,2 et 4,7 ÷ 10 = 0,47.",
                "De même, diviser par 100 déplace la virgule de deux rangs vers la gauche, et diviser par 1 000 de trois rangs. Si les chiffres manquent, on ajoute des 0 : 352 ÷ 1 000 = 0,352 et 6 ÷ 100 = 0,06. Exemple : si 1 000 feuilles identiques pèsent 4 800 g, une feuille pèse 4 800 ÷ 1 000 = 4,8 g.",
              ],
              box: { label: "Règle", text: "Diviser par 10, 100 ou 1 000 revient à déplacer la virgule de 1, 2 ou 3 rangs vers la gauche, en ajoutant des 0 si nécessaire : 52 ÷ 100 = 0,52 et 7 ÷ 1 000 = 0,007." },
            },
            {
              heading: "Des quotients qui ne s'arrêtent pas",
              paragraphs: [
                "Parfois, la division ne s'arrête jamais. Pour 10 ÷ 3 : en 10, 3 fois, il reste 1 ; on abaisse un 0 : en 10, encore 3 fois, il reste 1... Le même reste revient sans cesse, et le quotient s'écrit 3,333... avec des 3 sans fin. On ne peut pas écrire ce quotient exactement avec un nombre décimal : on en donne une valeur approchée.",
                "Pour arrondir un quotient, on calcule un chiffre de plus que la précision demandée. Au dixième, 10 ÷ 3 ≈ 3,3 ; au centième, 10 ÷ 3 ≈ 3,33. Pour 2 ÷ 3 = 0,666..., l'arrondi au centième est 0,67, car le chiffre suivant, 6, est supérieur ou égal à 5. Le symbole ≈ se lit « est environ égal à ».",
              ],
            },
          ],
          keyPoints: [
            "Le quotient de 18 par 4 est le nombre qui, multiplié par 4, donne 18 : 18 ÷ 4 = 4,5.",
            "Pour continuer une division après les unités, on place la virgule au quotient et l'on abaisse des 0.",
            "Pour diviser un décimal par un entier, on place la virgule au quotient en abaissant le chiffre des dixièmes.",
            "Diviser par 10, 100, 1 000 : la virgule se déplace de 1, 2, 3 rangs vers la gauche.",
            "Certains quotients ne s'arrêtent jamais (10 ÷ 3 = 3,333...) : on en donne un arrondi, avec le signe ≈.",
            "On vérifie un quotient par une multiplication : 4 × 4,5 = 18.",
          ],
          example: {
            statement: "Une corde de 23 m est coupée en 8 morceaux de même longueur. Quelle est la longueur d'un morceau ?",
            solution: [
              "On partage 23 m en 8 parts égales : on calcule le quotient décimal 23 ÷ 8.",
              "En 23, combien de fois 8 ? 2 fois (8 × 2 = 16), il reste 7. On place la virgule au quotient et l'on abaisse un 0 : 70.",
              "En 70, 8 fois (8 × 8 = 64), il reste 6. On abaisse un 0 : 60. En 60, 7 fois (8 × 7 = 56), il reste 4. On abaisse un 0 : 40. En 40, 5 fois exactement, il reste 0.",
              "Le quotient est 2,875. Vérification : 8 × 2,875 = 23.",
              "Réponse : chaque morceau mesure 2,875 m, soit 2 m, 87 cm et 5 mm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez mentalement : a) 45,8 ÷ 10 ; b) 7 ÷ 100 ; c) 1 250 ÷ 1 000 ; d) 0,9 ÷ 10.",
              hint: "Déplacez la virgule vers la gauche d'autant de rangs qu'il y a de 0 dans 10, 100 ou 1 000, et ajoutez des 0 si nécessaire.",
              solution: [
                "a) Un rang vers la gauche : 45,8 ÷ 10 = 4,58.",
                "b) 7 = 7,0 ; deux rangs vers la gauche, en ajoutant un 0 : 7 ÷ 100 = 0,07.",
                "c) Trois rangs vers la gauche : 1 250 ÷ 1 000 = 1,25 (le 0 final après la virgule ne s'écrit pas).",
                "d) Un rang vers la gauche, en ajoutant un 0 : 0,9 ÷ 10 = 0,09.",
              ],
            },
            {
              level: 2,
              statement: "Posez et calculez les quotients exacts : a) 27 ÷ 6 ; b) 31,5 ÷ 7 ; c) 3 ÷ 8. Vérifiez chaque résultat par une multiplication.",
              hint: "Pour le c, en 3, combien de fois 8 ? 0 fois : le quotient commence par 0, puis on place la virgule et l'on abaisse un 0.",
              solution: [
                "a) En 27, 4 fois 6 (24), il reste 3. Virgule, on abaisse un 0 : en 30, 5 fois 6 exactement. Donc 27 ÷ 6 = 4,5. Vérification : 6 × 4,5 = 27.",
                "b) En 31, 4 fois 7 (28), il reste 3. On abaisse le 5 des dixièmes, en plaçant d'abord la virgule : en 35, 5 fois 7 exactement. Donc 31,5 ÷ 7 = 4,5. Vérification : 7 × 4,5 = 31,5.",
                "c) En 3, 0 fois 8 : on écrit 0 au quotient, il reste 3. Virgule, on abaisse un 0 : en 30, 3 fois (24), il reste 6. En 60, 7 fois (56), il reste 4. En 40, 5 fois exactement.",
                "Donc 3 ÷ 8 = 0,375. Vérification : 8 × 0,375 = 3.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Trois amies achètent un cadeau à 50 € et veulent partager le prix équitablement. a) Posez la division 50 ÷ 3 jusqu'au chiffre des millièmes. Que remarquez-vous ? b) Donnez l'arrondi au centième de ce quotient. c) Chacune donne la somme arrondie au centime. Le total payé est-il exactement 50 € ? Proposez une répartition au centime près pour que le total fasse exactement 50 €.",
              hint: "Observez le reste à chaque étape de la division. Pour le c, multipliez l'arrondi par 3 et comparez avec 50 €.",
              solution: [
                "a) En 5, 1 fois 3, il reste 2 ; on abaisse le 0 : en 20, 6 fois (18), il reste 2. Virgule, on abaisse un 0 : en 20, 6 fois, il reste 2 ; puis encore 6, reste 2 ; puis encore 6, reste 2.",
                "On obtient 16,666... : le reste vaut toujours 2, et la division ne s'arrête jamais.",
                "b) Le chiffre des millièmes est 6, supérieur ou égal à 5 : l'arrondi au centième est 16,67.",
                "c) 3 × 16,67 = 50,01 : les trois amies paieraient 1 centime de trop.",
                "Répartition juste : deux amies paient 16,67 € et la troisième 16,66 €. Vérification : 16,67 + 16,67 + 16,66 = 50,00.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul de 7 ÷ 4.",
            items: [
              "En 7, combien de fois 4 ? 1 fois, il reste 3",
              "Placer la virgule au quotient",
              "Abaisser un 0 : 30 dixièmes",
              "En 30, combien de fois 4 ? 7 fois, il reste 2",
              "Abaisser un 0 : 20 centièmes",
              "En 20, combien de fois 4 ? 5 fois, il reste 0",
              "Conclure : 7 ÷ 4 = 1,75",
            ],
          },
          quiz: [
            { q: "Combien vaut 63 ÷ 100 ?", options: ["6,3", "0,63", "6 300", "0,063"], answer: 1, why: "Diviser par 100 déplace la virgule de deux rangs vers la gauche : 63 ÷ 100 = 0,63." },
            { q: "Quel est le quotient exact de 9 par 4 ?", options: ["2,1", "2,5", "2,25", "2,75"], answer: 2, why: "4 × 2,25 = 9. En posant : en 9, 2 fois 4, reste 1 ; en 10, 2 fois, reste 2 ; en 20, 5 fois." },
            { q: "Quel est l'arrondi au dixième de 7 ÷ 3 ?", options: ["2,33", "2,4", "3,2", "2,3"], answer: 3, why: "7 ÷ 3 = 2,333... ; le chiffre des centièmes est 3, inférieur à 5 : l'arrondi au dixième est 2,3." },
            { q: "Pour vérifier que 15 ÷ 6 = 2,5, on calcule :", options: ["6 × 2,5", "15 × 6", "15 - 2,5", "2,5 ÷ 6"], answer: 0, why: "Le quotient multiplié par le diviseur doit redonner le dividende : 6 × 2,5 = 15." },
            { q: "Combien vaut 14,4 ÷ 6 ?", options: ["24", "0,24", "2,4", "2,04"], answer: 2, why: "En 14, 2 fois 6 (12), il reste 2 ; on place la virgule et l'on abaisse le 4 : en 24, 4 fois. Vérification : 6 × 2,4 = 14,4." },
          ],
          trap: "Oublier de placer la virgule au quotient au moment d'abaisser le premier 0 ou le chiffre des dixièmes, ce qui donne 425 au lieu de 4,25 pour 17 ÷ 4.",
          method: "Estimez d'abord l'ordre de grandeur (17 ÷ 4, c'est un peu plus de 4) pour repérer une virgule mal placée, puis vérifiez le quotient par une multiplication : 4 × 4,25 = 17.",
        },
      ],
    },

    /* ================================================================== */
    /* LES FRACTIONS                                                        */
    /* ================================================================== */
    {
      id: 'fractions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fraction-partage',
          title: 'Une fraction pour partager et pour mesurer',
          minutes: 30,
          objectives: [
            "Utiliser une fraction pour exprimer le partage d'une unité en parts égales.",
            "Lire et écrire une fraction, et nommer son numérateur et son dénominateur.",
            "Utiliser une fraction pour exprimer une mesure, y compris quand elle est plus grande que 1.",
            "Calculer la fraction d'une quantité.",
          ],
          course: [
            {
              heading: "Partager une unité en parts égales",
              paragraphs: [
                "Une pizza est coupée en 8 parts égales et vous en mangez 3. Vous avez mangé trois huitièmes de la pizza, ce que l'on écrit 3/8. La pizza entière est l'unité : on l'a partagée en 8 parts égales, et l'on a pris 3 de ces parts.",
                "Le nombre du bas, 8, s'appelle le dénominateur : il indique en combien de parts égales on partage l'unité. Le nombre du haut, 3, s'appelle le numérateur : il indique combien de parts on prend. Les parts doivent être égales : si la pizza est coupée en 8 morceaux de tailles différentes, 3 morceaux ne font pas forcément 3/8 de la pizza.",
                "On lit les fractions ainsi : 1/2 se lit « un demi », 1/3 « un tiers », 1/4 « un quart ». À partir de 5, on ajoute « ième » au nombre : 2/5 se lit « deux cinquièmes », 7/10 « sept dixièmes », 5/12 « cinq douzièmes ».",
              ],
              box: { label: "Définition", text: "Dans la fraction a/b (avec b différent de 0), b est le dénominateur : il indique en combien de parts égales on partage l'unité. a est le numérateur : il indique combien de ces parts on prend." },
            },
            {
              heading: "Une fraction pour mesurer",
              paragraphs: [
                "Prenons une bande de papier comme unité de longueur, notée u. Une petite bande se reporte exactement 3 fois sur la bande unité : sa longueur est un tiers de u, soit 1/3 u. Si l'on met bout à bout 5 de ces petites bandes, on obtient une bande de longueur 5/3 u. Ainsi, 5/3, c'est 5 fois 1/3.",
                "Une fraction peut donc être plus grande que 1. Avec 3 tiers, on reconstitue exactement l'unité : 3/3 = 1. Avec 5 tiers, on dépasse l'unité : 5/3 = 3/3 + 2/3, c'est-à-dire 1 unité et encore 2 tiers.",
              ],
              box: { label: "À retenir", text: "a/b, c'est a fois 1/b. Si le numérateur est plus petit que le dénominateur, la fraction est plus petite que 1 ; s'ils sont égaux, elle est égale à 1 ; si le numérateur est plus grand, elle est plus grande que 1." },
            },
            {
              heading: "Décomposer une fraction plus grande que 1",
              paragraphs: [
                "On peut écrire une fraction plus grande que 1 comme la somme d'un nombre entier et d'une fraction plus petite que 1. Par exemple, 7/4 = 4/4 + 3/4 = 1 + 3/4 : c'est une unité et trois quarts.",
                "Pour 11/3, on cherche combien de fois 3 tiers (une unité) tiennent dans 11 tiers. La division euclidienne donne 11 = 3 × 3 + 2 : on fait 3 unités complètes et il reste 2 tiers. Donc 11/3 = 3 + 2/3, et ce nombre est compris entre 3 et 4.",
              ],
              box: { label: "Règle", text: "Pour décomposer a/b, on effectue la division euclidienne de a par b : le quotient donne le nombre entier, et le reste donne le numérateur de la fraction restante. Exemple : 17 = 5 × 3 + 2, donc 17/5 = 3 + 2/5." },
            },
            {
              heading: "Prendre une fraction d'une quantité",
              paragraphs: [
                "Une fraction sert aussi à prendre une partie d'une quantité. Pour calculer les 3/4 de 20 €, on partage d'abord 20 € en 4 parts égales : 20 ÷ 4 = 5, donc un quart de 20 € vaut 5 €. On prend ensuite 3 de ces parts : 3 × 5 = 15. Les 3/4 de 20 € valent 15 €.",
                "Autre exemple : un quart d'heure, c'est 1/4 de 60 minutes, soit 60 ÷ 4 = 15 minutes. Trois quarts d'heure, c'est 3 × 15 = 45 minutes. On peut aussi multiplier d'abord, puis diviser : 3 × 60 = 180 et 180 ÷ 4 = 45 ; le résultat est le même.",
              ],
              box: { label: "Méthode", text: "Pour prendre les a/b d'une quantité, on divise la quantité par b (on obtient une part), puis on multiplie le résultat par a (on prend a parts)." },
            },
          ],
          keyPoints: [
            "Dans a/b, le dénominateur b indique en combien de parts égales on partage l'unité ; le numérateur a indique combien de parts on prend.",
            "Les parts doivent être égales.",
            "On lit : un demi, un tiers, un quart, puis cinquièmes, sixièmes, dixièmes...",
            "a/b, c'est a fois 1/b ; une fraction peut être plus grande que 1 (5/3 = 1 + 2/3).",
            "La division euclidienne du numérateur par le dénominateur décompose une fraction : 11 = 3 × 3 + 2, donc 11/3 = 3 + 2/3.",
            "Prendre les a/b d'une quantité : diviser par b, puis multiplier par a.",
          ],
          example: {
            statement: "Une tablette de chocolat compte 24 carreaux identiques (données fictives). Léa mange les 3/8 de la tablette. a) Combien de carreaux a-t-elle mangés ? b) Quelle fraction de la tablette reste-t-il, et combien de carreaux cela représente-t-il ?",
            solution: [
              "a) On partage les 24 carreaux en 8 parts égales : 24 ÷ 8 = 3. Un huitième de la tablette, c'est 3 carreaux.",
              "Léa prend 3 de ces parts : 3 × 3 = 9. Elle a mangé 9 carreaux.",
              "b) La tablette entière compte 8 huitièmes ; Léa en a mangé 3, il en reste 8 - 3 = 5. Il reste 5/8 de la tablette.",
              "Nombre de carreaux restants : 5 × 3 = 15. Vérification : 9 + 15 = 24.",
              "Réponse : Léa a mangé 9 carreaux ; il reste 5/8 de la tablette, soit 15 carreaux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Un gâteau est coupé en 6 parts égales ; Tom en mange 1. Quelle fraction du gâteau a-t-il mangée ? Écrivez-la et lisez-la. b) Une bande est partagée en 10 parts égales, dont 7 sont coloriées. Quelle fraction de la bande est coloriée ? c) Écrivez en chiffres : trois quarts ; cinq tiers ; neuf demis. d) Parmi les fractions du c, lesquelles sont plus grandes que 1 ?",
              hint: "Le dénominateur est le nombre de parts égales, le numérateur le nombre de parts prises. Pour le d, comparez le numérateur et le dénominateur.",
              solution: [
                "a) Le gâteau est partagé en 6 parts égales et Tom en prend 1 : il a mangé 1/6 du gâteau, « un sixième ».",
                "b) 7 parts sur 10 parts égales sont coloriées : 7/10 de la bande, « sept dixièmes ».",
                "c) Trois quarts : 3/4 ; cinq tiers : 5/3 ; neuf demis : 9/2.",
                "d) 3/4 est plus petit que 1 (3 < 4). 5/3 est plus grand que 1 (5 > 3) et 9/2 aussi (9 > 2).",
                "Réponse : 1/6 ; 7/10 ; 3/4, 5/3, 9/2 ; les fractions plus grandes que 1 sont 5/3 et 9/2.",
              ],
            },
            {
              level: 2,
              statement: "a) Calculez : les 2/3 de 45 élèves ; les 3/10 de 250 g de farine ; les 5/4 de 12 L. b) Écrivez 13/4 et 17/5 comme la somme d'un nombre entier et d'une fraction plus petite que 1, puis donnez pour chacune les deux nombres entiers consécutifs qui l'encadrent.",
              hint: "Pour une fraction d'une quantité, divisez par le dénominateur puis multipliez par le numérateur. Pour décomposer, effectuez la division euclidienne du numérateur par le dénominateur.",
              solution: [
                "a) 45 ÷ 3 = 15, puis 2 × 15 = 30 : les 2/3 de 45 élèves, ce sont 30 élèves.",
                "250 ÷ 10 = 25, puis 3 × 25 = 75 : les 3/10 de 250 g, ce sont 75 g.",
                "12 ÷ 4 = 3, puis 5 × 3 = 15 : les 5/4 de 12 L, ce sont 15 L (plus que 12 L, ce qui est normal car 5/4 est plus grand que 1).",
                "b) 13 = 4 × 3 + 1, donc 13/4 = 3 + 1/4 : ce nombre est compris entre 3 et 4.",
                "17 = 5 × 3 + 2, donc 17/5 = 3 + 2/5 : ce nombre est compris entre 3 et 4.",
                "Réponse : 30 élèves, 75 g, 15 L ; 13/4 = 3 + 1/4 et 17/5 = 3 + 2/5, tous deux entre 3 et 4.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une bande unité, notée u, mesure 12 cm. a) Quelle est la longueur, en cm, d'une bande de 1/4 u ? de 3/4 u ? de 7/4 u ? b) Une autre bande mesure 15 cm. Exprimez sa longueur en fraction de u avec le dénominateur 4, puis comme la somme d'un nombre entier et d'une fraction plus petite que 1. c) Une petite bande mesure 2 cm. Quelle fraction de u représente-t-elle ?",
              hint: "Commencez par la longueur de 1/4 u. Pour le c, cherchez combien de fois la petite bande se reporte sur la bande unité.",
              solution: [
                "a) 1/4 u : 12 ÷ 4 = 3 cm. 3/4 u : 3 × 3 = 9 cm. 7/4 u : 7 × 3 = 21 cm.",
                "b) 15 cm = 5 × 3 cm, c'est-à-dire 5 fois 1/4 u : la bande mesure 5/4 u.",
                "5/4 = 4/4 + 1/4 = 1 + 1/4 : la bande mesure 1 u et 1/4 u. Vérification : 12 + 3 = 15 cm.",
                "c) 12 ÷ 2 = 6 : la petite bande se reporte exactement 6 fois sur la bande unité. Elle mesure donc 1/6 u.",
                "Réponse : 3 cm, 9 cm et 21 cm ; 15 cm = 5/4 u = 1 + 1/4 u ; 2 cm = 1/6 u.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque fraction à la situation qu'elle décrit.",
            pairs: [
              { left: "1/2", right: "La moitié d'une pizza" },
              { left: "1/4", right: "Un quart d'heure, soit 15 minutes" },
              { left: "3/4", right: "3 parts d'un gâteau coupé en 4 parts égales" },
              { left: "2/3", right: "Deux tiers d'une bouteille" },
              { left: "5/3", right: "Cinq fois un tiers de l'unité" },
              { left: "10/10", right: "L'unité entière" },
            ],
          },
          quiz: [
            { q: "Dans la fraction 5/8, le dénominateur est :", options: ["5", "8", "13", "40"], answer: 1, why: "Le dénominateur est le nombre du bas : il indique que l'unité est partagée en 8 parts égales." },
            { q: "Comment lit-on 7/3 ?", options: ["Sept trois", "Trois septièmes", "Sept tiers", "Trois sur sept"], answer: 2, why: "Le dénominateur 3 donne le nom des parts, les tiers, et le numérateur 7 leur nombre : sept tiers." },
            { q: "Combien valent les 3/4 de 32 ?", options: ["24", "8", "12", "96"], answer: 0, why: "32 ÷ 4 = 8, c'est un quart ; trois quarts, c'est 3 × 8 = 24." },
            { q: "Quelle fraction est plus grande que 1 ?", options: ["4/9", "6/6", "2/5", "9/4"], answer: 3, why: "Dans 9/4, le numérateur est plus grand que le dénominateur : 9/4 = 2 + 1/4. 6/6 est égal à 1, pas plus grand." },
            { q: "11/4 est égal à :", options: ["2 + 1/4", "3 + 1/4", "2 + 3/4", "1 + 3/4"], answer: 2, why: "11 = 4 × 2 + 3 : on fait 2 unités complètes et il reste 3 quarts, donc 11/4 = 2 + 3/4." },
          ],
          trap: "Inverser le numérateur et le dénominateur (écrire 8/3 au lieu de 3/8 pour 3 parts sur 8), ou oublier que les parts doivent être égales pour parler de fraction.",
          method: "Lisez une fraction en commençant par le bas : le dénominateur dit en combien de parts égales on coupe, le numérateur combien on en prend. Pour la fraction d'une quantité, divisez d'abord par le dénominateur, puis multipliez par le numérateur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fraction-demi-droite',
          title: 'Placer une fraction sur une demi-droite graduée',
          minutes: 30,
          objectives: [
            "Repérer un point d'une demi-droite graduée par une fraction : son abscisse.",
            "Placer une fraction sur une demi-droite graduée en partageant l'unité en parts égales.",
            "Choisir une unité de longueur adaptée au dénominateur.",
            "Encadrer une fraction entre deux nombres entiers consécutifs.",
          ],
          course: [
            {
              heading: "La demi-droite graduée",
              paragraphs: [
                "Pour graduer une demi-droite, on choisit un point de départ, l'origine, à laquelle on associe le nombre 0. On choisit ensuite une longueur, l'unité, que l'on reporte régulièrement à partir de l'origine : on obtient les graduations 1, 2, 3, 4...",
                "Chaque point de la demi-droite est alors repéré par un nombre, son abscisse. Si le point A est situé à 3 unités de l'origine, son abscisse est 3 ; on écrit A(3). Comme une règle graduée, la demi-droite permet de « voir » où se trouve un nombre et de le comparer aux autres.",
              ],
              box: { label: "Définition", text: "Sur une demi-droite graduée, chaque point est repéré par un nombre appelé son abscisse. L'origine a pour abscisse 0. La distance entre deux graduations entières consécutives est l'unité." },
            },
            {
              heading: "Placer une fraction",
              paragraphs: [
                "Pour placer le point d'abscisse 5/3, on partage chaque unité en 3 parts égales, comme l'indique le dénominateur. Chaque petite part mesure 1/3 de l'unité. On compte ensuite 5 petites parts à partir de l'origine : on arrive au point d'abscisse 5/3.",
                "Ce point se situe entre les graduations 1 et 2. En effet, 3 tiers font 1 et 6 tiers font 2 : 3/3 = 1 et 6/3 = 2. Le point d'abscisse 5/3 est donc entre 1 et 2, plus près de 2 que de 1.",
              ],
              box: { label: "Règle", text: "Pour placer le point d'abscisse a/b : on partage chaque unité en b parts égales, puis on compte a petites parts à partir de l'origine." },
            },
            {
              heading: "Choisir une bonne unité",
              paragraphs: [
                "Quand on trace soi-même la demi-droite, on choisit une unité qui se partage facilement. Pour placer des quarts, une unité de 4 cm est pratique : 1/4 de l'unité mesure 1 cm. Pour des tiers, on choisit 3 cm ou 6 cm. Avec une unité de 5 cm, les tiers seraient difficiles à tracer, car 5 ÷ 3 ne tombe pas juste.",
                "Si l'on doit placer à la fois des demis et des tiers, on choisit une unité qui se partage en 2 et en 3, par exemple 6 cm : 1/2 de l'unité mesure 3 cm et 1/3 mesure 2 cm.",
              ],
              box: { label: "À retenir", text: "On choisit une longueur d'unité qui est un multiple du dénominateur : 3 cm, 6 cm ou 12 cm pour des tiers ; 4 cm ou 8 cm pour des quarts ; 10 cm pour des cinquièmes ou des dixièmes." },
            },
            {
              heading: "Lire une abscisse et encadrer une fraction",
              paragraphs: [
                "Sur une demi-droite où chaque unité est partagée en 5 parts égales, un point B est situé sur la 7e petite graduation après l'origine. Chaque petite part vaut 1/5 : l'abscisse de B est 7/5.",
                "Pour savoir entre quels nombres entiers se trouve une fraction, on utilise la division euclidienne. Pour 7/5 : 7 = 5 × 1 + 2, donc 7/5 = 1 + 2/5 ; ce nombre est entre 1 et 2. Pour 17/4 : 17 = 4 × 4 + 1, donc 17/4 = 4 + 1/4 ; on écrit 4 < 17/4 < 5.",
              ],
              box: { label: "Repère", text: "Encadrer une fraction entre deux entiers consécutifs : on effectue la division euclidienne du numérateur par le dénominateur. Le quotient q donne l'encadrement q ≤ a/b < q + 1 (avec l'égalité quand le reste est 0)." },
            },
          ],
          keyPoints: [
            "Sur une demi-droite graduée, chaque point est repéré par son abscisse ; l'origine a pour abscisse 0.",
            "Pour placer a/b : partager chaque unité en b parts égales, puis compter a parts à partir de l'origine.",
            "On choisit une longueur d'unité qui se partage facilement par le dénominateur.",
            "b/b = 1, 2b/b = 2... : ces repères situent la fraction entre deux entiers.",
            "La division euclidienne du numérateur par le dénominateur donne l'encadrement : 17 = 4 × 4 + 1, donc 4 < 17/4 < 5.",
          ],
          example: {
            statement: "Tracez une demi-droite graduée d'origine O dont l'unité mesure 6 cm, puis placez les points A(1/3), B(5/6) et C(3/2). À quelle distance de O se trouve chaque point ?",
            solution: [
              "On marque l'origine O, puis les graduations 1 et 2, à 6 cm et 12 cm de O.",
              "A(1/3) : on partage l'unité en 3 parts égales de 6 ÷ 3 = 2 cm. A est à 2 cm de O.",
              "B(5/6) : on partage l'unité en 6 parts égales de 6 ÷ 6 = 1 cm, et l'on compte 5 parts : B est à 5 cm de O.",
              "C(3/2) : on partage l'unité en 2 parts égales de 6 ÷ 2 = 3 cm, et l'on compte 3 parts : C est à 9 cm de O, entre les graduations 1 et 2.",
              "Réponse : A est à 2 cm, B à 5 cm et C à 9 cm de l'origine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sur une demi-droite graduée d'origine O, chaque unité est partagée en 4 parts égales. On compte les petites graduations à partir de l'origine : le point A est sur la 3e, le point B sur la 6e et le point C sur la 9e. a) Donnez l'abscisse de chaque point sous la forme d'une fraction. b) Pour chaque point, dites entre quels nombres entiers consécutifs il se trouve.",
              hint: "Chaque petite part vaut 1/4 de l'unité. Rappelez-vous que 4/4 = 1, 8/4 = 2 et 12/4 = 3.",
              solution: [
                "a) Chaque petite graduation correspond à 1/4. A est à 3 quarts de l'origine : A(3/4). B est à 6 quarts : B(6/4). C est à 9 quarts : C(9/4).",
                "b) 3/4 est plus petit que 4/4 = 1 : A est entre 0 et 1.",
                "6/4 est entre 4/4 = 1 et 8/4 = 2 : B est entre 1 et 2.",
                "9/4 est entre 8/4 = 2 et 12/4 = 3 : C est entre 2 et 3.",
                "Réponse : A(3/4) entre 0 et 1 ; B(6/4) entre 1 et 2 ; C(9/4) entre 2 et 3.",
              ],
            },
            {
              level: 2,
              statement: "On veut placer sur une même demi-droite graduée les points D(2/5), E(7/5) et F(1/2). a) Expliquez pourquoi une unité de 10 cm est un bon choix. b) À quelle distance de l'origine faut-il placer chacun des points D, E et F ? c) Rangez les trois points du plus proche au plus éloigné de l'origine.",
              hint: "Cherchez une longueur qui se partage facilement à la fois en 5 et en 2.",
              solution: [
                "a) 10 cm se partage en 5 parts égales de 2 cm et en 2 parts égales de 5 cm : les cinquièmes et les demis se tracent facilement.",
                "b) D(2/5) : 2 parts de 2 cm, soit 4 cm de l'origine.",
                "E(7/5) : 7 parts de 2 cm, soit 14 cm de l'origine (entre les graduations 1 et 2).",
                "F(1/2) : 1 part de 5 cm, soit 5 cm de l'origine.",
                "c) 4 cm < 5 cm < 14 cm : dans l'ordre, D, puis F, puis E.",
                "Réponse : D à 4 cm, F à 5 cm, E à 14 cm ; ordre D, F, E.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Encadrez chacune des fractions suivantes entre deux nombres entiers consécutifs : 23/6 ; 40/7. b) Que remarquez-vous pour 50/10 ? c) On place sur une même demi-droite graduée les points P(23/6) et Q(40/7). Lequel est le plus éloigné de l'origine ? Justifiez sans tracer. d) Trouvez deux fractions de dénominateur 3 comprises entre 4 et 5.",
              hint: "Effectuez la division euclidienne du numérateur par le dénominateur. Pour le d, écrivez 4 et 5 avec le dénominateur 3.",
              solution: [
                "a) 23 = 6 × 3 + 5, donc 23/6 = 3 + 5/6 : 3 < 23/6 < 4.",
                "40 = 7 × 5 + 5, donc 40/7 = 5 + 5/7 : 5 < 40/7 < 6.",
                "b) 50 = 10 × 5 + 0 : le reste est nul, donc 50/10 = 5. Cette fraction est un nombre entier ; le point d'abscisse 50/10 est sur la graduation 5.",
                "c) 23/6 est plus petit que 4 et 40/7 est plus grand que 5 : Q est le plus éloigné de l'origine.",
                "d) 4 = 12/3 et 5 = 15/3. Les fractions de dénominateur 3 strictement comprises entre les deux sont 13/3 et 14/3.",
                "Réponse : 3 < 23/6 < 4 ; 5 < 40/7 < 6 ; 50/10 = 5 ; Q est le plus éloigné ; 13/3 et 14/3.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour placer le point d'abscisse 7/3 sur une demi-droite graduée.",
            items: [
              "Tracer la demi-droite d'origine O et choisir une unité qui se partage en 3, par exemple 3 cm",
              "Reporter l'unité pour placer les graduations 1, 2 et 3",
              "Partager chaque unité en 3 parts égales de 1 cm",
              "Compter 7 petites parts à partir de l'origine",
              "Marquer le point et écrire son abscisse 7/3",
              "Contrôler : le point est entre 2 et 3, car 6/3 = 2 et 9/3 = 3",
            ],
          },
          quiz: [
            { q: "Pour placer 4/5 sur une demi-droite graduée, on partage chaque unité en :", options: ["4 parts égales", "5 parts égales", "9 parts égales", "20 parts égales"], answer: 1, why: "Le dénominateur 5 indique le partage de l'unité ; on compte ensuite 4 parts depuis l'origine." },
            { q: "Entre quels nombres entiers consécutifs se trouve 13/4 ?", options: ["2 et 3", "4 et 5", "3 et 4", "1 et 2"], answer: 2, why: "13 = 4 × 3 + 1, donc 13/4 = 3 + 1/4 : ce nombre est entre 3 et 4." },
            { q: "L'unité mesure 6 cm. À quelle distance de l'origine se trouve le point d'abscisse 2/3 ?", options: ["4 cm", "2 cm", "3 cm", "6 cm"], answer: 0, why: "Un tiers de 6 cm mesure 2 cm ; deux tiers mesurent 2 × 2 = 4 cm." },
            { q: "Quelle longueur d'unité convient le mieux pour placer des septièmes ?", options: ["5 cm", "10 cm", "8 cm", "14 cm"], answer: 3, why: "14 cm se partage en 7 parts égales de 2 cm ; les autres longueurs ne sont pas des multiples de 7." },
            { q: "L'unité est partagée en 3 parts égales et un point est sur la 9e petite graduation. Son abscisse est :", options: ["3/9", "9/3", "1/9", "9"], answer: 1, why: "Chaque petite part vaut 1/3 ; 9 parts font 9/3, c'est-à-dire 3." },
          ],
          trap: "Partager l'unité selon le numérateur au lieu du dénominateur (couper l'unité en 7 pour placer 7/3), ou compter les petites parts à partir de la graduation 1 au lieu de l'origine.",
          method: "Avant de tracer, choisissez une unité qui est un multiple du dénominateur, puis contrôlez votre point par un encadrement : 7/3 doit se trouver entre 6/3 = 2 et 9/3 = 3.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fractions-egales-comparer',
          title: 'Fractions égales et comparaison de fractions',
          minutes: 35,
          objectives: [
            "Reconnaître et produire des fractions égales en multipliant ou en divisant le numérateur et le dénominateur par un même nombre.",
            "Comparer une fraction à 1.",
            "Comparer et ranger des fractions de même dénominateur.",
            "Comparer deux fractions dans des cas simples en les écrivant avec le même dénominateur.",
          ],
          course: [
            {
              heading: "Des fractions égales",
              paragraphs: [
                "Coupez une pizza en 2 parts égales et prenez-en 1 : vous avez 1/2 de la pizza. Coupez une pizza identique en 4 parts égales et prenez-en 2 : vous avez 2/4 de la pizza. Dans les deux cas, vous avez exactement la même quantité : 1/2 = 2/4. De même, 1/2 = 4/8. Sur une demi-droite graduée, ces fractions repèrent le même point.",
                "Pour passer de 1/2 à 2/4, on a multiplié le numérateur et le dénominateur par 2 : on a coupé chaque part en 2, ce qui donne deux fois plus de parts, deux fois plus petites. Ainsi, 3/5 = 6/10 = 60/100 (on multiplie par 2, puis par 10). On peut aussi diviser : 12/18 = 6/9 = 2/3 (on divise par 2, puis par 3).",
                "Attention : ajouter le même nombre en haut et en bas ne donne pas une fraction égale. En ajoutant 1, on passe de 1/2 à 2/3 : or 1/2 est une moitié, et 2/3 est plus qu'une moitié.",
              ],
              box: { label: "Propriété", text: "Une fraction ne change pas quand on multiplie, ou quand on divise, son numérateur et son dénominateur par un même nombre non nul. Exemples : 2/3 = (2 × 4)/(3 × 4) = 8/12 ; 15/20 = (15 ÷ 5)/(20 ÷ 5) = 3/4." },
            },
            {
              heading: "Comparer une fraction à 1",
              paragraphs: [
                "Une fraction est égale à 1 quand son numérateur est égal à son dénominateur : on prend toutes les parts de l'unité, par exemple 5/5 = 1. Si le numérateur est plus petit, il manque des parts pour faire une unité : 7/9 < 1. S'il est plus grand, on dépasse l'unité : 9/7 > 1.",
                "Cette comparaison à 1 permet souvent de conclure très vite. Pour comparer 4/5 et 6/5, ou 7/8 et 10/9, il suffit de remarquer que 4/5 < 1 et 6/5 > 1, ou que 7/8 < 1 et 10/9 > 1.",
              ],
            },
            {
              heading: "Comparer des fractions de même dénominateur",
              paragraphs: [
                "Quand deux fractions ont le même dénominateur, leurs parts ont la même taille. Il suffit alors de compter les parts : celle qui en a le plus est la plus grande. Par exemple, 3/8 < 5/8, car 3 huitièmes, c'est moins que 5 huitièmes.",
                "Pour ranger 4/7, 9/7, 2/7 et 6/7 dans l'ordre croissant (du plus petit au plus grand), on range les numérateurs : 2/7 < 4/7 < 6/7 < 9/7.",
              ],
              box: { label: "Règle", text: "Si deux fractions ont le même dénominateur, la plus grande est celle qui a le plus grand numérateur." },
            },
            {
              heading: "Se ramener au même dénominateur",
              paragraphs: [
                "Pour comparer 1/2 et 3/4, on ne peut pas compter directement les parts, car elles n'ont pas la même taille. On écrit alors 1/2 avec le dénominateur 4 : 1/2 = 2/4. Comme 2/4 < 3/4, on conclut que 1/2 < 3/4.",
                "Cette méthode fonctionne simplement quand un dénominateur est un multiple de l'autre. Pour comparer 2/3 et 5/6, on écrit 2/3 = 4/6 ; comme 4/6 < 5/6, on a 2/3 < 5/6. Pour comparer 7/10 et 3/5, on écrit 3/5 = 6/10 ; comme 7/10 > 6/10, on a 7/10 > 3/5.",
              ],
              box: { label: "À retenir", text: "Pour comparer deux fractions de dénominateurs différents, on transforme l'une d'elles en une fraction égale qui a le même dénominateur que l'autre, puis on compare les numérateurs." },
            },
          ],
          keyPoints: [
            "On obtient une fraction égale en multipliant (ou en divisant) le numérateur et le dénominateur par un même nombre non nul.",
            "Ajouter le même nombre en haut et en bas ne donne pas une fraction égale : 1/2 n'est pas égal à 2/3.",
            "Une fraction est plus petite que 1 si son numérateur est plus petit que son dénominateur, plus grande que 1 dans le cas contraire.",
            "Même dénominateur : la plus grande fraction est celle qui a le plus grand numérateur.",
            "Dénominateurs différents : on se ramène au même dénominateur, par exemple 1/2 = 2/4 < 3/4.",
          ],
          example: {
            statement: "Rangez dans l'ordre croissant les fractions suivantes : 7/10 ; 1/2 ; 9/10 ; 3/5.",
            solution: [
              "Les dénominateurs sont 10, 2 et 5. Comme 10 est un multiple de 2 et de 5, on écrit toutes les fractions avec le dénominateur 10.",
              "1/2 = (1 × 5)/(2 × 5) = 5/10.",
              "3/5 = (3 × 2)/(5 × 2) = 6/10.",
              "On range les numérateurs : 5/10 < 6/10 < 7/10 < 9/10.",
              "On revient aux fractions de l'énoncé. Réponse : 1/2 < 3/5 < 7/10 < 9/10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez les égalités : a) 2/3 = .../12 ; b) 5/4 = 15/... ; c) 18/24 = 3/... ; d) 7/10 = .../100.",
              hint: "Cherchez par quel nombre on a multiplié ou divisé le nombre connu, puis faites la même opération sur l'autre.",
              solution: [
                "a) On passe de 3 à 12 en multipliant par 4 : 2 × 4 = 8, donc 2/3 = 8/12.",
                "b) On passe de 5 à 15 en multipliant par 3 : 4 × 3 = 12, donc 5/4 = 15/12.",
                "c) On passe de 18 à 3 en divisant par 6 : 24 ÷ 6 = 4, donc 18/24 = 3/4.",
                "d) On passe de 10 à 100 en multipliant par 10 : 7 × 10 = 70, donc 7/10 = 70/100.",
                "Réponse : 8/12 ; 15/12 ; 3/4 ; 70/100.",
              ],
            },
            {
              level: 2,
              statement: "Comparez avec le signe <, > ou = : a) 5/9 et 7/9 ; b) 11/8 et 1 ; c) 3/4 et 7/8 ; d) 6/10 et 3/5 ; e) 4/3 et 7/6.",
              hint: "Si les dénominateurs sont différents, écrivez la fraction qui a le plus petit dénominateur avec le dénominateur de l'autre.",
              solution: [
                "a) Même dénominateur, et 5 < 7 : 5/9 < 7/9.",
                "b) 11 > 8, donc la fraction dépasse l'unité : 11/8 > 1.",
                "c) 3/4 = 6/8, et 6/8 < 7/8 : 3/4 < 7/8.",
                "d) 3/5 = 6/10 : 6/10 = 3/5.",
                "e) 4/3 = 8/6, et 8/6 > 7/6 : 4/3 > 7/6.",
                "Réponse : 5/9 < 7/9 ; 11/8 > 1 ; 3/4 < 7/8 ; 6/10 = 3/5 ; 4/3 > 7/6.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Quatre amis mangent des pizzas de même taille. Inès a mangé 3/4 d'une pizza, Hugo 5/8, Malik 1/2 et Zoé 9/8. a) Qui a mangé plus d'une pizza entière ? b) Rangez les quatre amis du plus petit mangeur au plus gros mangeur. c) Léo a mangé une quantité comprise entre celle de Hugo et celle d'Inès. Proposez une fraction possible de dénominateur 16.",
              hint: "Écrivez toutes les fractions avec le dénominateur 8. Pour le c, écrivez ensuite les fractions de Hugo et d'Inès avec le dénominateur 16.",
              solution: [
                "a) Seule la fraction de Zoé a un numérateur plus grand que son dénominateur : 9/8 > 1. Zoé a mangé plus d'une pizza.",
                "b) On écrit tout en huitièmes : Inès 3/4 = 6/8 ; Hugo 5/8 ; Malik 1/2 = 4/8 ; Zoé 9/8.",
                "4/8 < 5/8 < 6/8 < 9/8 : l'ordre est Malik, Hugo, Inès, Zoé.",
                "c) En seizièmes : Hugo 5/8 = 10/16 et Inès 6/8 = 12/16. La fraction 11/16 est comprise entre 10/16 et 12/16.",
                "Réponse : Zoé ; Malik, Hugo, Inès, Zoé ; Léo a pu manger 11/16 de pizza.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Attention aux pièges classiques.",
            statements: [
              { text: "2/3 = 4/6", true: true, why: "On a multiplié le numérateur et le dénominateur par 2." },
              { text: "1/2 = 2/3", true: false, why: "On a ajouté 1 en haut et en bas : cela ne donne pas une fraction égale. 2/3 est plus qu'une moitié." },
              { text: "5/7 < 6/7", true: true, why: "Même dénominateur : on compare les numérateurs, et 5 < 6." },
              { text: "9/8 < 1", true: false, why: "Le numérateur 9 est plus grand que le dénominateur 8 : la fraction dépasse 1." },
              { text: "1/10 < 1/5", true: true, why: "Une part d'une unité coupée en 10 est plus petite qu'une part d'une unité coupée en 5." },
              { text: "3/4 < 5/8, car 3 < 5", true: false, why: "Les parts n'ont pas la même taille : 3/4 = 6/8, et 6/8 > 5/8." },
              { text: "15/20 = 3/4", true: true, why: "On a divisé le numérateur et le dénominateur par 5." },
            ],
          },
          quiz: [
            { q: "Quelle fraction est égale à 3/5 ?", options: ["4/6", "5/7", "6/10", "3/10"], answer: 2, why: "6/10 s'obtient en multipliant le numérateur et le dénominateur de 3/5 par 2." },
            { q: "Quel signe convient entre 7/12 et 5/12 ?", options: ["<", ">", "="], answer: 1, why: "Même dénominateur : 7 > 5, donc 7/12 > 5/12." },
            { q: "Quelle fraction est plus petite que 1 ?", options: ["8/7", "5/5", "13/12", "11/12"], answer: 3, why: "Dans 11/12, le numérateur est plus petit que le dénominateur : il manque une part pour faire l'unité." },
            { q: "Complétez : 4/9 = 20/...", options: ["45", "25", "36", "13"], answer: 0, why: "On passe de 4 à 20 en multipliant par 5, donc on multiplie aussi 9 par 5 : 45." },
            { q: "Quel rangement est correct ?", options: ["1/2 < 3/8 < 5/8", "3/8 < 1/2 < 5/8", "3/8 < 5/8 < 1/2", "5/8 < 1/2 < 3/8"], answer: 1, why: "1/2 = 4/8, et 3/8 < 4/8 < 5/8." },
          ],
          trap: "Ajouter le même nombre au numérateur et au dénominateur en croyant obtenir une fraction égale (1/2 = 2/3 est faux), ou comparer des fractions de dénominateurs différents en ne regardant que les numérateurs.",
          method: "Pour comparer deux fractions, comparez-les d'abord à 1 ; si cela ne suffit pas, écrivez-les avec le même dénominateur avant de comparer les numérateurs. Un petit dessin de bandes partagées permet de vérifier votre réponse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'additionner-fractions',
          title: 'Additionner et soustraire des fractions',
          minutes: 30,
          objectives: [
            "Additionner et soustraire des fractions de même dénominateur.",
            "Ajouter une fraction à un nombre entier, ou la soustraire d'un nombre entier.",
            "Additionner ou soustraire deux fractions dont un dénominateur est un multiple de l'autre, dans des cas simples.",
            "Résoudre un problème de partage en utilisant des sommes et des différences de fractions.",
          ],
          course: [
            {
              heading: "Additionner des fractions de même dénominateur",
              paragraphs: [
                "Une tarte est coupée en 8 parts égales. Vous en mangez 2 parts le midi et 3 parts le soir : vous avez mangé 2 huitièmes, puis 3 huitièmes, soit 5 huitièmes en tout. On écrit : 2/8 + 3/8 = 5/8.",
                "On additionne les parts comme on additionne des objets : 2 pommes + 3 pommes = 5 pommes, et 2 huitièmes + 3 huitièmes = 5 huitièmes. Le dénominateur, qui donne la taille des parts, ne change pas. La soustraction fonctionne de la même façon : 7/5 - 4/5 = 3/5.",
              ],
              box: { label: "Règle", text: "Pour additionner (ou soustraire) deux fractions de même dénominateur, on additionne (ou on soustrait) les numérateurs et l'on garde le dénominateur : a/d + b/d = (a + b)/d et a/d - b/d = (a - b)/d." },
            },
            {
              heading: "On n'additionne pas les dénominateurs",
              paragraphs: [
                "Une erreur fréquente consiste à écrire 1/4 + 1/4 = 2/8. Or 2/8 = 1/4 : la somme serait égale à l'une des deux fractions ajoutées, ce qui est absurde. En réalité, un quart plus un quart font deux quarts : 1/4 + 1/4 = 2/4, c'est-à-dire une moitié.",
                "Pour contrôler un résultat, pensez à l'ordre de grandeur : quand on ajoute une fraction non nulle, la somme est plus grande que chacun des deux nombres ajoutés.",
              ],
            },
            {
              heading: "Ajouter ou soustraire un nombre entier",
              paragraphs: [
                "Un nombre entier peut s'écrire comme une fraction avec n'importe quel dénominateur : 1 = 4/4, 2 = 8/4, 3 = 9/3. Pour calculer 1 + 3/4, on écrit 1 = 4/4 : 1 + 3/4 = 4/4 + 3/4 = 7/4.",
                "De même, pour calculer 2 - 1/3, on écrit 2 = 6/3 : 2 - 1/3 = 6/3 - 1/3 = 5/3. Cette méthode est très utile dans les problèmes, où « l'unité entière » (le gâteau, le trajet, la journée) vaut 1.",
              ],
              box: { label: "À retenir", text: "Un entier s'écrit avec le dénominateur que l'on veut : 1 = 2/2 = 3/3 = 4/4 = 10/10 ; 2 = 4/2 = 6/3 = 8/4. On choisit le dénominateur de l'autre fraction." },
            },
            {
              heading: "Quand un dénominateur est un multiple de l'autre",
              paragraphs: [
                "Pour calculer 1/2 + 1/4, les parts n'ont pas la même taille. On utilise une fraction égale : 1/2 = 2/4. On peut alors additionner des quarts : 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
                "On transforme toujours la fraction qui a le plus petit dénominateur, en multipliant son numérateur et son dénominateur par le même nombre. Par exemple : 2/3 + 1/6 = 4/6 + 1/6 = 5/6, et 7/10 - 1/5 = 7/10 - 2/10 = 5/10.",
              ],
            },
          ],
          keyPoints: [
            "Même dénominateur : on additionne ou on soustrait les numérateurs et l'on garde le dénominateur.",
            "On n'additionne jamais les dénominateurs : 1/4 + 1/4 = 2/4, et non 2/8.",
            "Un entier s'écrit avec le dénominateur voulu : 1 = 4/4, donc 1 + 3/4 = 7/4.",
            "Si un dénominateur est un multiple de l'autre, on écrit d'abord une fraction égale : 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
            "Dans un problème, l'unité entière vaut 1 : ce qui reste se calcule par 1 - (la partie utilisée).",
          ],
          example: {
            statement: "Une bouteille de jus est pleine (données fictives). Sam en boit 2/10 le matin et 5/10 l'après-midi. a) Quelle fraction de la bouteille a-t-il bue dans la journée ? b) Quelle fraction de la bouteille reste-t-il ?",
            solution: [
              "a) Les deux fractions ont le même dénominateur : 2/10 + 5/10 = (2 + 5)/10 = 7/10.",
              "Sam a bu 7/10 de la bouteille.",
              "b) La bouteille pleine représente 1 = 10/10.",
              "Ce qui reste : 10/10 - 7/10 = 3/10.",
              "Vérification : 7/10 + 3/10 = 10/10 = 1. Réponse : Sam a bu 7/10 de la bouteille, et il en reste 3/10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez : a) 3/7 + 2/7 ; b) 9/10 - 4/10 ; c) 5/6 + 4/6 ; d) 11/4 - 6/4.",
              hint: "Les dénominateurs sont égaux : calculez avec les numérateurs et gardez le dénominateur.",
              solution: [
                "a) 3/7 + 2/7 = (3 + 2)/7 = 5/7.",
                "b) 9/10 - 4/10 = (9 - 4)/10 = 5/10 (c'est-à-dire 1/2).",
                "c) 5/6 + 4/6 = (5 + 4)/6 = 9/6, une fraction plus grande que 1 : 9/6 = 1 + 3/6.",
                "d) 11/4 - 6/4 = (11 - 6)/4 = 5/4.",
                "Réponse : 5/7 ; 5/10 ; 9/6 ; 5/4.",
              ],
            },
            {
              level: 2,
              statement: "Calculez : a) 1 + 2/5 ; b) 3 - 1/4 ; c) 1/2 + 3/8 ; d) 5/6 - 1/3.",
              hint: "Pour a et b, écrivez l'entier avec le dénominateur de la fraction. Pour c et d, transformez la fraction qui a le plus petit dénominateur.",
              solution: [
                "a) 1 = 5/5, donc 1 + 2/5 = 5/5 + 2/5 = 7/5.",
                "b) 3 = 12/4, donc 3 - 1/4 = 12/4 - 1/4 = 11/4.",
                "c) 8 = 2 × 4, donc 1/2 = 4/8 : 1/2 + 3/8 = 4/8 + 3/8 = 7/8.",
                "d) 6 = 3 × 2, donc 1/3 = 2/6 : 5/6 - 1/3 = 5/6 - 2/6 = 3/6 (c'est-à-dire 1/2).",
                "Réponse : 7/5 ; 11/4 ; 7/8 ; 3/6.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un jour de semaine, Nora dort pendant 3/8 de la journée, passe 1/4 de la journée au collège et 1/8 de la journée à manger et à se déplacer. Le reste du temps est libre. a) Quelle fraction de la journée Nora passe-t-elle à dormir, au collège, à manger et à se déplacer ? b) Quelle fraction de la journée lui reste-t-il de temps libre ? c) Une journée dure 24 heures. Combien d'heures de temps libre Nora a-t-elle ?",
              hint: "Écrivez 1/4 en huitièmes, puis souvenez-vous que la journée entière vaut 1 = 8/8. Pour le c, prenez une fraction d'une quantité.",
              solution: [
                "a) 1/4 = 2/8. Donc 3/8 + 1/4 + 1/8 = 3/8 + 2/8 + 1/8 = 6/8.",
                "b) La journée entière vaut 8/8. Temps libre : 8/8 - 6/8 = 2/8 (c'est-à-dire 1/4 de la journée).",
                "c) 24 ÷ 8 = 3 : un huitième de la journée, c'est 3 heures. 2/8 de la journée, c'est 2 × 3 = 6 heures.",
                "Vérification en heures : sommeil 3 × 3 = 9 h, collège 2 × 3 = 6 h, repas et trajets 3 h, temps libre 6 h ; 9 + 6 + 3 + 6 = 24 h.",
                "Réponse : 6/8 de la journée sont occupés, il reste 2/8 de temps libre, soit 6 heures.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque calcul à son résultat.",
            pairs: [
              { left: "2/9 + 5/9", right: "7/9" },
              { left: "8/5 - 3/5", right: "1" },
              { left: "1 + 1/3", right: "4/3" },
              { left: "1/2 + 1/4", right: "3/4" },
              { left: "3/4 - 1/4", right: "1/2" },
              { left: "2 - 1/2", right: "3/2" },
            ],
          },
          quiz: [
            { q: "Combien vaut 2/7 + 3/7 ?", options: ["5/14", "6/14", "1/7", "5/7"], answer: 3, why: "Même dénominateur : on additionne les numérateurs (2 + 3 = 5) et l'on garde les septièmes." },
            { q: "Combien vaut 9/4 - 5/4 ?", options: ["1", "4/0", "14/4", "4/8"], answer: 0, why: "9/4 - 5/4 = 4/4, et 4 quarts font une unité : le résultat est 1." },
            { q: "1 + 2/3 est égal à :", options: ["3/3", "3/4", "5/3", "2/3"], answer: 2, why: "1 = 3/3, donc 1 + 2/3 = 3/3 + 2/3 = 5/3." },
            { q: "Combien vaut 1/2 + 1/4 ?", options: ["2/6", "3/4", "2/4", "1/6"], answer: 1, why: "1/2 = 2/4, donc 1/2 + 1/4 = 2/4 + 1/4 = 3/4." },
            { q: "Un élève écrit 1/3 + 1/3 = 2/6. Quelle est son erreur ?", options: ["Il n'y en a aucune", "Le résultat est 1/6", "Il a additionné les dénominateurs", "Il fallait multiplier les numérateurs"], answer: 2, why: "Un tiers plus un tiers font deux tiers : 1/3 + 1/3 = 2/3. Le dénominateur ne change pas." },
          ],
          trap: "Additionner les numérateurs et aussi les dénominateurs (écrire 1/4 + 1/4 = 2/8) : le dénominateur indique la taille des parts, et il ne change pas quand on ajoute des parts de même taille.",
          method: "Lisez les fractions à voix haute avec le nom des parts (« deux septièmes plus trois septièmes ») : comme pour 2 pommes + 3 pommes, on compte les parts sans changer leur nom. Contrôlez ensuite que la somme est plus grande que chaque fraction ajoutée.",
        },
      ],
    },
  ],
}
