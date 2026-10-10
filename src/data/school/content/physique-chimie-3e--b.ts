import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-3e',
  chapters: [
    /* ==================================================================== */
    /* FORCES ET INTERACTIONS                                                 */
    /* ==================================================================== */
    {
      id: 'forces-interactions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'actions-mecaniques',
          title: "Actions mécaniques et diagramme objet-interaction",
          minutes: 25,
          objectives: [
            "Identifier les actions mécaniques exercées sur un objet et leurs effets.",
            "Distinguer une action de contact d'une action à distance.",
            "Construire le diagramme objet-interaction (DOI) d'une situation.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une action mécanique ?",
              paragraphs: [
                "Un objet exerce une action mécanique sur un autre objet lorsqu'il est capable de le mettre en mouvement, de modifier son mouvement (changer sa vitesse ou la direction de sa trajectoire) ou de le déformer. Le pied qui frappe un ballon le met en mouvement, la raquette qui renvoie une balle modifie sa trajectoire, la main qui écrase une balle en mousse la déforme.",
                "Une action mécanique fait toujours intervenir deux objets : celui qui agit (l'acteur) et celui qui subit l'action (le receveur). Pour décrire une situation, on commence donc par choisir l'objet que l'on étudie, appelé le système, puis on cherche tous les objets qui agissent sur lui.",
              ],
              box: { label: "Définition", text: "Une action mécanique est une action exercée par un objet sur un autre, capable de le mettre en mouvement, de modifier son mouvement ou de le déformer." },
            },
            {
              heading: "Actions de contact et actions à distance",
              paragraphs: [
                "Une action de contact ne s'exerce que si les deux objets se touchent : la main qui pousse un chariot, le sol qui soutient une chaise, le fil qui retient une lampe, l'air qui freine un cycliste. L'action de l'air ou de l'eau est une action de contact, même si on ne la voit pas : le fluide touche l'objet sur toute sa surface.",
                "Une action à distance s'exerce sans que les objets se touchent. Au collège, vous en rencontrez trois : l'action de la Terre sur tout objet (attraction gravitationnelle, qui fait tomber les objets), l'action d'un aimant sur un objet en fer (action magnétique) et l'action d'un objet électrisé, comme une règle frottée qui attire des petits morceaux de papier (action électrique).",
              ],
              box: { label: "À retenir", text: "Contact : les objets se touchent (main, sol, fil, support, air, eau). À distance : les objets ne se touchent pas (Terre, aimant, objet électrisé)." },
            },
            {
              heading: "Une action mécanique est toujours une interaction",
              paragraphs: [
                "Si un objet A agit sur un objet B, alors B agit aussi sur A. On parle d'interaction entre A et B. Quand vous poussez un mur, le mur vous pousse aussi : c'est pourquoi, sur des patins à roulettes, vous reculez en poussant le mur. La Terre attire la Lune, et la Lune attire aussi la Terre (c'est l'une des causes des marées).",
                "Ces deux actions réciproques sont de même nature (toutes deux de contact ou toutes deux à distance) et s'exercent en même temps. Elles agissent sur deux objets différents, ce qui explique qu'elles ne s'annulent pas entre elles.",
              ],
            },
            {
              heading: "Construire un diagramme objet-interaction",
              paragraphs: [
                "Le diagramme objet-interaction (DOI) représente toutes les interactions d'une situation. Méthode : 1) on écrit le nom de chaque objet dans une bulle ; 2) on relie par un trait deux objets en interaction, en trait plein pour une interaction de contact et en trait pointillé pour une interaction à distance ; 3) on entoure en couleur le système étudié pour repérer d'un coup d'oeil les actions qu'il subit.",
                "Exemple : un livre posé sur une table. Les objets sont le livre, la table et la Terre. Le livre et la table se touchent : trait plein. La Terre attire le livre sans le toucher : trait pointillé. La table touche le sol, donc elle est aussi en interaction de contact avec la Terre, et la Terre l'attire à distance. Si le système est le livre, il subit deux actions : celle de la table (contact) et celle de la Terre (à distance).",
              ],
              box: { label: "Méthode", text: "Une bulle par objet ; un trait plein pour un contact, un trait pointillé pour une action à distance ; le système entouré en couleur. Le nombre de traits qui partent du système est le nombre d'actions qu'il subit." },
            },
          ],
          keyPoints: [
            "Une action mécanique peut mettre en mouvement, modifier un mouvement ou déformer un objet.",
            "Action de contact : les objets se touchent. Action à distance : ils ne se touchent pas.",
            "Actions à distance au collège : gravitationnelle (Terre, astres), magnétique (aimant), électrique.",
            "Si A agit sur B, alors B agit sur A : c'est une interaction.",
            "DOI : une bulle par objet, trait plein pour un contact, trait pointillé pour une action à distance.",
          ],
          example: {
            statement: "Un parachutiste descend, parachute ouvert, sans vent. Le système étudié est l'ensemble {parachutiste et parachute}. Faire l'inventaire des actions mécaniques qu'il subit et construire le DOI.",
            solution: [
              "On cherche les objets qui agissent sur le système : la Terre, qui l'attire vers le bas, et l'air, qui freine la toile du parachute et le corps du parachutiste.",
              "La Terre ne touche pas le parachutiste : c'est une action à distance.",
              "L'air est en contact avec le parachute et le parachutiste : c'est une action de contact.",
              "DOI : trois bulles, {parachutiste et parachute} (entourée en couleur), Terre et air. Trait pointillé entre le système et la Terre, trait plein entre le système et l'air.",
              "Conclusion : le système subit deux actions mécaniques, une à distance (la Terre) et une de contact (l'air).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque action, indiquez si elle est de contact ou à distance et précisez son effet (mise en mouvement, modification du mouvement ou déformation) : a) un aimant attire un trombone posé sur la table, qui se met à glisser vers lui ; b) un enfant appuie sur un ressort, qui se raccourcit ; c) une pomme se détache de l'arbre et tombe ; d) un gardien de but arrête le ballon avec ses mains.",
              hint: "Demandez-vous à chaque fois si les deux objets se touchent, puis observez ce qui arrive à l'objet qui subit l'action.",
              solution: [
                "a) L'aimant ne touche pas le trombone : action à distance (magnétique). Effet : mise en mouvement du trombone.",
                "b) La main touche le ressort : action de contact. Effet : déformation du ressort.",
                "c) La Terre ne touche pas la pomme : action à distance (gravitationnelle). Effet : mise en mouvement de la pomme, qui tombe.",
                "d) Les mains touchent le ballon : action de contact. Effet : modification du mouvement (le ballon est arrêté).",
              ],
            },
            {
              level: 2,
              statement: "Une lampe est suspendue au plafond par un fil. Les objets à prendre en compte sont la lampe, le fil, le plafond et la Terre. 1) Construisez le DOI de la situation. 2) Le système étudié est la lampe : combien d'actions subit-elle ? Lesquelles ?",
              hint: "Cherchez toutes les paires d'objets en interaction, y compris celles qui ne concernent pas la lampe. N'oubliez pas que la Terre attire tous les objets.",
              solution: [
                "1) Interactions de contact (traits pleins) : lampe et fil, fil et plafond.",
                "Interactions à distance (traits pointillés) : Terre et lampe, Terre et fil (le fil a aussi une masse). Le plafond fait partie de la maison, posée sur la Terre : on peut aussi tracer un trait plein entre plafond et Terre.",
                "2) On entoure la lampe. Deux traits partent de sa bulle : celui vers le fil (contact) et celui vers la Terre (à distance).",
                "Conclusion : la lampe subit deux actions, l'action de contact du fil et l'action à distance de la Terre.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Un skieur remonte une piste tiré par la perche d'un téléski. Il est en contact avec la neige par ses skis et l'air exerce sur lui une action qui le freine. 1) Nommez tous les objets qui agissent sur le système {skieur et skis}. 2) Classez ces actions en actions de contact et actions à distance. 3) Construisez le DOI centré sur le système. 4) La perche tire le skieur vers le haut de la piste. D'après le principe des interactions, que fait le skieur sur la perche ?",
              hint: "Il y a quatre objets qui agissent sur le système. Pour la dernière question, rappelez-vous que si A agit sur B, alors B agit sur A.",
              solution: [
                "1) Les objets qui agissent sur le système sont la Terre, la neige (le sol), la perche et l'air.",
                "2) Actions de contact : la neige, la perche et l'air touchent le système. Action à distance : la Terre.",
                "3) DOI : bulle {skieur et skis} entourée en couleur, reliée par des traits pleins aux bulles neige, perche et air, et par un trait pointillé à la bulle Terre.",
                "4) Le skieur exerce lui aussi une action de contact sur la perche : il la tire vers le bas de la piste. Les deux actions forment une interaction.",
                "Conclusion : le système subit quatre actions, dont trois de contact et une à distance.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur les actions mécaniques.",
            statements: [
              { text: "L'air exerce une action de contact sur un cycliste.", true: true, why: "L'air touche le cycliste sur toute sa surface : c'est une action de contact répartie, qui le freine." },
              { text: "Une action mécanique a toujours pour effet de mettre un objet en mouvement.", true: false, why: "Elle peut aussi modifier un mouvement ou déformer un objet, et un objet peut rester immobile sous plusieurs actions." },
              { text: "La Terre agit sur un ballon qui vole sans le toucher.", true: true, why: "L'attraction de la Terre est une action à distance : elle s'exerce même si le ballon est en l'air." },
              { text: "Quand on pousse un mur, le mur n'agit pas sur nous, car il ne bouge pas.", true: false, why: "Toute action est une interaction : le mur nous repousse, c'est pourquoi on recule si l'on est sur des patins." },
              { text: "Dans un DOI, une interaction à distance se représente par un trait pointillé.", true: true, why: "C'est la convention : trait plein pour un contact, trait pointillé pour une action à distance." },
              { text: "Un aimant ne peut agir sur un clou que s'il le touche.", true: false, why: "L'action magnétique est une action à distance : un aimant attire un clou en fer placé à quelques millimètres." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces actions est une action à distance ?",
              options: ["Le sol qui soutient une chaise posée dessus", "L'aimant qui attire une bille d'acier sans la toucher", "Le vent qui fait avancer un voilier sur l'eau", "Le fil qui retient un pendule accroché au plafond"],
              answer: 1,
              why: "L'aimant agit sans contact. Le sol, le vent et le fil touchent l'objet sur lequel ils agissent.",
            },
            {
              q: "Une balle de tennis s'écrase un instant sur la raquette. Quel effet de l'action est mis en évidence ?",
              options: ["Une mise en mouvement de la raquette", "Une action à distance de la raquette", "Aucun effet, car la balle repart", "Une déformation de la balle"],
              answer: 3,
              why: "La balle change de forme au contact de la raquette : l'action mécanique la déforme (et modifie aussi son mouvement).",
            },
            {
              q: "Dans un DOI, comment représente-t-on l'interaction entre un livre et la table sur laquelle il est posé ?",
              options: ["Par un trait plein entre les deux bulles", "Par un trait pointillé entre les deux bulles", "Par une flèche dirigée vers le bas", "On ne la représente pas, car le livre est immobile"],
              answer: 0,
              why: "Le livre et la table se touchent : c'est une interaction de contact, représentée par un trait plein.",
            },
            {
              q: "Combien d'actions subit un ballon posé immobile sur le sol ?",
              options: ["Aucune, puisqu'il ne bouge pas", "Une seule, celle du sol", "Deux : celle de la Terre et celle du sol", "Trois : celle de la Terre, du sol et du mouvement"],
              answer: 2,
              why: "La Terre l'attire à distance et le sol le soutient par contact. Ces deux actions se compensent, d'où l'immobilité.",
            },
            {
              q: "La Terre attire la Lune. Que peut-on en déduire ?",
              options: ["La Lune n'agit pas sur la Terre, car elle est plus petite", "La Lune attire aussi la Terre", "La Lune repousse la Terre pour rester en orbite"],
              answer: 1,
              why: "Une action mécanique est toujours une interaction : si la Terre agit sur la Lune, la Lune agit aussi sur la Terre.",
            },
          ],
          trap: "Oublier l'action de la Terre parce qu'elle « ne se voit pas », ou oublier l'action de l'air, alors que l'air touche l'objet et exerce bien une action de contact.",
          method: "Pour ne rien oublier, faites deux listes : d'abord tout ce qui touche le système (sol, support, fil, main, air, eau), puis les actions à distance (Terre, aimant, objet électrisé). Comptez ensuite les traits qui partent de la bulle du système.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'modeliser-force',
          title: "Modéliser une action par une force",
          minutes: 30,
          objectives: [
            "Modéliser une action mécanique par une force caractérisée par un point d'application, une direction, un sens et une valeur.",
            "Mesurer la valeur d'une force avec un dynamomètre et l'exprimer en newtons.",
            "Représenter une force par un segment fléché en respectant une échelle donnée.",
          ],
          course: [
            {
              heading: "Les quatre caractéristiques d'une force",
              paragraphs: [
                "Pour décrire précisément une action mécanique, les physiciens la modélisent par une force. Une force est définie par quatre caractéristiques : son point d'application (l'endroit où elle s'exerce), sa direction (la droite selon laquelle elle agit : verticale, horizontale, oblique), son sens (vers le haut, vers la droite...) et sa valeur, aussi appelée intensité.",
                "Pour une action de contact, le point d'application est le point de contact entre les deux objets : la force exercée par un fil sur une lampe s'applique au point d'attache du fil. Pour une action à distance comme l'attraction de la Terre, la force s'applique au centre de l'objet, appelé centre de gravité.",
              ],
              box: { label: "Définition", text: "Une force modélise une action mécanique. Elle est caractérisée par un point d'application, une direction, un sens et une valeur exprimée en newtons (N)." },
            },
            {
              heading: "Mesurer une force : le newton et le dynamomètre",
              paragraphs: [
                "La valeur d'une force s'exprime en newtons, de symbole N, en hommage au physicien anglais Isaac Newton. Pour vous donner un ordre de grandeur, il faut exercer une force d'environ 1 N pour soutenir une tablette de chocolat de 100 g, et d'environ 10 N pour soutenir une bouteille d'eau de 1 L.",
                "On mesure la valeur d'une force avec un dynamomètre. Il contient un ressort qui s'allonge d'autant plus que la force exercée est grande ; une graduation permet de lire directement la valeur en newtons. On note la force F, ou plus précisément F suivi de l'acteur et du receveur : F main/caisse désigne la force exercée par la main sur la caisse.",
              ],
            },
            {
              heading: "Représenter une force par un segment fléché",
              paragraphs: [
                "Sur un schéma, une force se représente par un segment fléché (on dit aussi un vecteur). Son origine est le point d'application, sa droite support donne la direction, la pointe de la flèche indique le sens et sa longueur est proportionnelle à la valeur de la force, selon une échelle choisie.",
                "Exemple : avec l'échelle 1 cm pour 10 N, une force de 30 N se représente par une flèche de 3 cm, et une force de 25 N par une flèche de 2,5 cm. Pour trouver la longueur, on divise la valeur de la force par la valeur représentée par 1 cm : 25 ÷ 10 = 2,5 cm.",
              ],
              box: { label: "Règle", text: "Origine de la flèche = point d'application ; direction de la flèche = direction de la force ; pointe = sens ; longueur = valeur ÷ échelle." },
            },
            {
              heading: "Les deux forces d'une interaction",
              paragraphs: [
                "Une interaction entre deux objets A et B se modélise par deux forces : F A/B, exercée par A sur B, et F B/A, exercée par B sur A. Ces deux forces ont la même direction, la même valeur et des sens opposés. Elles ne s'appliquent pas au même objet : l'une agit sur B, l'autre sur A.",
                "Quand un objet est immobile et soumis à deux forces, ces deux forces se compensent : elles ont la même direction, la même valeur et des sens opposés, et elles s'appliquent toutes deux à cet objet. Une lampe immobile suspendue à un fil subit l'attraction de la Terre vers le bas et la force du fil vers le haut, de même valeur.",
              ],
            },
          ],
          keyPoints: [
            "Une force a quatre caractéristiques : point d'application, direction, sens et valeur.",
            "La valeur d'une force s'exprime en newtons (N) et se mesure avec un dynamomètre.",
            "Une force se représente par un segment fléché dont la longueur dépend de l'échelle.",
            "Longueur de la flèche = valeur de la force ÷ valeur représentée par 1 cm.",
            "Les deux forces d'une interaction ont même direction, même valeur et des sens opposés.",
          ],
          example: {
            statement: "Une élève tire horizontalement une caisse vers la droite avec une corde. Le dynamomètre placé sur la corde indique 40 N. Donner les caractéristiques de la force exercée par la corde sur la caisse et préciser la longueur de la flèche avec l'échelle 1 cm pour 10 N.",
            solution: [
              "Point d'application : le point d'attache de la corde sur la caisse (action de contact).",
              "Direction : horizontale, celle de la corde.",
              "Sens : vers la droite.",
              "Valeur : F corde/caisse = 40 N, lue sur le dynamomètre.",
              "Longueur de la flèche : 40 ÷ 10 = 4 cm.",
              "Conclusion : on trace une flèche horizontale de 4 cm, partant du point d'attache et dirigée vers la droite.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Avec l'échelle 1 cm pour 5 N, quelle longueur de flèche faut-il tracer pour représenter des forces de valeurs : a) 15 N ; b) 40 N ; c) 12,5 N ? Inversement, quelle est la valeur d'une force représentée par une flèche de 3,5 cm ?",
              hint: "Divisez la valeur de la force par 5 pour obtenir la longueur en centimètres ; pour la question inverse, multipliez la longueur par 5.",
              solution: [
                "a) 15 ÷ 5 = 3 : flèche de 3 cm.",
                "b) 40 ÷ 5 = 8 : flèche de 8 cm.",
                "c) 12,5 ÷ 5 = 2,5 : flèche de 2,5 cm.",
                "Question inverse : 3,5 × 5 = 17,5. La force vaut 17,5 N.",
              ],
            },
            {
              level: 2,
              statement: "Une boule de pétanque est posée immobile sur le sol. La Terre l'attire avec une force verticale, vers le bas, de valeur 7 N, appliquée en son centre. 1) Quelle autre action la boule subit-elle ? 2) Donnez les caractéristiques de la force correspondante. 3) Représentez les deux forces avec l'échelle 1 cm pour 2 N (indiquez les longueurs).",
              hint: "La boule est immobile : les deux forces qu'elle subit se compensent. Pensez à l'objet qui la touche.",
              solution: [
                "1) La boule subit aussi l'action de contact du sol, qui la soutient.",
                "2) Force exercée par le sol sur la boule : point d'application au point de contact entre la boule et le sol ; direction verticale ; sens vers le haut ; valeur 7 N, car la boule est immobile et les deux forces se compensent.",
                "3) Longueur de chaque flèche : 7 ÷ 2 = 3,5 cm.",
                "On trace une flèche de 3,5 cm vers le bas partant du centre de la boule (force de la Terre) et une flèche de 3,5 cm vers le haut partant du point de contact avec le sol (force du sol).",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. On accroche un sac à un dynamomètre tenu à la main ; le dynamomètre indique 24 N et le sac reste immobile. 1) Quel est le rôle du dynamomètre ? 2) Le sac subit deux actions : lesquelles ? Sont-elles de contact ou à distance ? 3) Donnez les caractéristiques des deux forces modélisant ces actions. 4) Avec l'échelle 1 cm pour 8 N, quelle est la longueur de chaque flèche ? 5) Le dynamomètre exerce une force sur le sac ; d'après le principe des interactions, que fait le sac sur le dynamomètre ?",
              hint: "Le sac est immobile, donc les deux forces se compensent. Pour la question 5, rappelez-vous les caractéristiques des deux forces d'une interaction.",
              solution: [
                "1) Le dynamomètre mesure la valeur de la force qu'il exerce sur le sac : ici 24 N.",
                "2) Le sac subit l'action du dynamomètre (de contact, au crochet) et l'action de la Terre (à distance).",
                "3) Force du dynamomètre sur le sac : appliquée au point d'accroche, verticale, vers le haut, de valeur 24 N. Force de la Terre sur le sac : appliquée au centre de gravité du sac, verticale, vers le bas, de valeur 24 N, car le sac est immobile et les deux forces se compensent.",
                "4) 24 ÷ 8 = 3 : chaque flèche mesure 3 cm.",
                "5) Le sac exerce sur le dynamomètre une force de même direction (verticale), de même valeur (24 N) et de sens opposé (vers le bas), appliquée au crochet du dynamomètre.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour représenter une force sur un schéma.",
            items: [
              "Identifier l'acteur et le receveur de l'action",
              "Repérer le point d'application sur le receveur",
              "Déterminer la direction de la force",
              "Déterminer le sens de la force",
              "Calculer la longueur de la flèche avec l'échelle",
              "Tracer la flèche à partir du point d'application et la nommer",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de la valeur d'une force ?",
              options: ["Le kilogramme (kg)", "Le joule (J)", "Le newton (N)", "Le mètre par seconde (m/s)"],
              answer: 2,
              why: "La valeur d'une force s'exprime en newtons. Le kilogramme est l'unité de masse, le joule celle de l'énergie.",
            },
            {
              q: "Où se situe le point d'application de la force exercée par un fil sur un objet suspendu ?",
              options: ["Au point d'attache du fil sur l'objet", "Au centre de la Terre", "Au milieu du fil", "Au plafond auquel le fil est accroché"],
              answer: 0,
              why: "Pour une action de contact, la force s'applique au point de contact entre l'acteur (le fil) et le receveur (l'objet).",
            },
            {
              q: "Avec l'échelle 1 cm pour 20 N, une force de 50 N est représentée par une flèche de :",
              options: ["5 cm", "2 cm", "0,4 cm", "2,5 cm"],
              answer: 3,
              why: "Longueur = 50 ÷ 20 = 2,5 cm.",
            },
            {
              q: "Les forces F A/B et F B/A d'une interaction ont :",
              options: ["la même direction, le même sens et des valeurs différentes", "la même direction, la même valeur et des sens opposés", "des directions perpendiculaires et la même valeur", "des valeurs qui dépendent de l'objet le plus lourd"],
              answer: 1,
              why: "Les deux forces d'une interaction ont toujours même direction, même valeur et des sens opposés, quelles que soient les masses.",
            },
            {
              q: "Quel instrument mesure la valeur d'une force ?",
              options: ["Une balance", "Un chronomètre", "Un dynamomètre", "Un thermomètre"],
              answer: 2,
              why: "Le dynamomètre contient un ressort dont l'allongement indique la valeur de la force en newtons. La balance mesure une masse.",
            },
          ],
          trap: "Faire partir la flèche d'un mauvais endroit : la force exercée par le sol sur un objet part du point de contact avec le sol, alors que la force exercée par la Terre part du centre de gravité de l'objet.",
          method: "Avant de tracer, écrivez les quatre caractéristiques dans un petit tableau (point d'application, direction, sens, valeur), puis calculez la longueur. Une fois la flèche tracée, mesurez-la avec la règle et vérifiez qu'en la multipliant par l'échelle vous retrouvez la valeur de la force.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gravitation',
          title: "L'interaction gravitationnelle",
          minutes: 30,
          objectives: [
            "Décrire l'interaction gravitationnelle comme une interaction attractive à distance entre deux objets ayant une masse.",
            "Exploiter l'expression de la force de gravitation, la loi étant fournie.",
            "Expliquer qualitativement le rôle de la gravitation dans le mouvement des astres.",
          ],
          course: [
            {
              heading: "Une attraction universelle",
              paragraphs: [
                "Deux objets qui ont une masse s'attirent toujours l'un l'autre, même sans se toucher : c'est l'interaction gravitationnelle. Elle est à distance et toujours attractive. Elle existe entre la Terre et une pomme, entre le Soleil et les planètes, mais aussi entre deux élèves assis côte à côte. Dans ce dernier cas, elle est si faible qu'on ne la ressent pas.",
                "C'est Isaac Newton qui a énoncé la loi de la gravitation universelle, publiée en 1687 : la même loi explique la chute d'une pomme sur Terre et le mouvement de la Lune autour de la Terre. Le mot « universelle » signifie qu'elle s'applique partout dans l'Univers, à tous les objets ayant une masse.",
              ],
            },
            {
              heading: "La formule de la force de gravitation",
              paragraphs: [
                "Deux objets A et B, de masses mA et mB, dont les centres sont séparés par une distance d, exercent l'un sur l'autre des forces de même valeur F = G × mA × mB ÷ d². Les masses sont en kilogrammes (kg), la distance en mètres (m) et la force en newtons (N). G est la constante de gravitation universelle : G = 6,67 × 10⁻¹¹ N·m²/kg².",
                "Comme pour toute interaction, F A/B et F B/A ont même valeur, même direction (la droite qui joint les centres des deux objets) et des sens opposés : chaque force est dirigée vers l'autre objet. La Terre attire une pomme avec la même force que celle avec laquelle la pomme attire la Terre ; seule la pomme bouge visiblement, car sa masse est bien plus petite.",
              ],
              box: { label: "Formule", text: "F = G × mA × mB ÷ d², avec F en N, mA et mB en kg, d en m (distance entre les centres) et G = 6,67 × 10⁻¹¹ N·m²/kg²." },
            },
            {
              heading: "De quoi dépend la force de gravitation ?",
              paragraphs: [
                "La force augmente avec les masses : si l'on double la masse de l'un des objets, la force double. Elle diminue quand la distance augmente, et très vite, car d est au carré : si la distance est multipliée par 2, la force est divisée par 2² = 4 ; si la distance est multipliée par 3, la force est divisée par 3² = 9.",
                "Comme G est un nombre extrêmement petit, la force n'est importante que si au moins un des objets a une masse énorme, comme une planète ou une étoile. Entre deux personnes de 50 kg et 60 kg distantes de 1 m, F vaut environ 2 × 10⁻⁷ N, alors que la Terre attire chacune d'elles avec une force de plusieurs centaines de newtons.",
              ],
              box: { label: "À retenir", text: "Masse doublée : force doublée. Distance doublée : force divisée par 4. Distance triplée : force divisée par 9." },
            },
            {
              heading: "La gravitation organise l'Univers",
              paragraphs: [
                "Sans la gravitation, la Lune partirait en ligne droite dans l'espace. L'attraction de la Terre courbe sans cesse sa trajectoire et la maintient sur une orbite presque circulaire. De la même façon, l'attraction du Soleil maintient les planètes du système solaire sur leurs orbites, et les satellites artificiels tournent autour de la Terre grâce à elle.",
                "La gravitation explique aussi la forme presque sphérique des planètes et des étoiles, le regroupement des étoiles en galaxies, et les marées océaniques, dues principalement à l'attraction de la Lune et, dans une moindre mesure, à celle du Soleil.",
              ],
            },
          ],
          keyPoints: [
            "Deux objets ayant une masse s'attirent : l'interaction gravitationnelle est attractive et à distance.",
            "F = G × mA × mB ÷ d², avec G = 6,67 × 10⁻¹¹ N·m²/kg², les masses en kg et d en m.",
            "Les deux forces ont même valeur, même direction et des sens opposés.",
            "La force augmente avec les masses et diminue avec le carré de la distance.",
            "La gravitation maintient la Lune autour de la Terre et les planètes autour du Soleil.",
          ],
          example: {
            statement: "Calculer la valeur de la force de gravitation exercée par la Terre sur la Lune. Données : masse de la Terre mT = 5,97 × 10²⁴ kg ; masse de la Lune mL = 7,35 × 10²² kg ; distance Terre-Lune d = 3,84 × 10⁸ m ; G = 6,67 × 10⁻¹¹ N·m²/kg².",
            solution: [
              "On écrit la formule : F = G × mT × mL ÷ d².",
              "Les données sont déjà dans les bonnes unités (kg et m).",
              "Numérateur : 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 7,35 × 10²² ≈ 2,93 × 10³⁷.",
              "Dénominateur : d² = (3,84 × 10⁸)² ≈ 1,47 × 10¹⁷.",
              "F ≈ 2,93 × 10³⁷ ÷ 1,47 × 10¹⁷ ≈ 1,98 × 10²⁰ N.",
              "Conclusion : la Terre attire la Lune avec une force d'environ 1,98 × 10²⁰ N, et la Lune attire la Terre avec une force de même valeur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Deux élèves, de masses 50 kg et 60 kg, sont assis à 1,0 m l'un de l'autre. 1) Calculez la valeur de la force de gravitation qu'ils exercent l'un sur l'autre. Donnée : G = 6,67 × 10⁻¹¹ N·m²/kg². 2) Pourquoi ne ressentent-ils pas cette attraction ?",
              hint: "Appliquez F = G × mA × mB ÷ d² avec d = 1 m, donc d² = 1. Comparez ensuite le résultat à une force que vous connaissez.",
              solution: [
                "1) F = 6,67 × 10⁻¹¹ × 50 × 60 ÷ 1² = 6,67 × 10⁻¹¹ × 3 000 = 2,001 × 10⁻⁷ N.",
                "F ≈ 2,0 × 10⁻⁷ N, soit 0,000 000 2 N.",
                "2) Cette force est des milliards de fois plus faible que l'attraction de la Terre sur chacun d'eux (plusieurs centaines de newtons) : elle est imperceptible.",
              ],
            },
            {
              level: 2,
              statement: "Un satellite posé au sol, à la distance d = rT du centre de la Terre (rT étant le rayon de la Terre), est attiré par la Terre avec une force de 9 800 N. 1) Que devient cette force lorsque le satellite est en orbite à une distance d = 2 rT du centre de la Terre ? 2) Et à une distance d = 3 rT ? 3) Que se passe-t-il pour la force si l'on remplace le satellite par un autre de masse double, au sol ?",
              hint: "La distance est au carré dans la formule : si d est multipliée par k, la force est divisée par k². La force est proportionnelle à chaque masse.",
              solution: [
                "1) La distance est multipliée par 2, donc la force est divisée par 2² = 4 : 9 800 ÷ 4 = 2 450 N.",
                "2) La distance est multipliée par 3, donc la force est divisée par 3² = 9 : 9 800 ÷ 9 ≈ 1 089 N.",
                "3) La force est proportionnelle à la masse du satellite : elle double, 9 800 × 2 = 19 600 N.",
                "Conclusion : 2 450 N à d = 2 rT, environ 1 089 N à d = 3 rT, et 19 600 N pour un satellite deux fois plus lourd au sol.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Un randonneur de masse m = 70 kg se trouve à la surface de la Terre. Données : masse de la Terre mT = 5,97 × 10²⁴ kg ; rayon de la Terre rT = 6,37 × 10⁶ m ; G = 6,67 × 10⁻¹¹ N·m²/kg². 1) Quelle distance faut-il utiliser dans la formule de la force de gravitation ? 2) Calculez la force de gravitation exercée par la Terre sur le randonneur. 3) Calculez son poids avec P = m × g et g = 9,8 N/kg, puis comparez. 4) Déduisez de la question 2 une valeur de g arrondie au centième.",
              hint: "La distance d sépare les centres des deux objets : le centre du randonneur est pratiquement à la surface, donc à une distance rT du centre de la Terre.",
              solution: [
                "1) On utilise la distance entre le centre de la Terre et le randonneur, soit le rayon de la Terre : d = 6,37 × 10⁶ m.",
                "2) F = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 70 ÷ (6,37 × 10⁶)². Numérateur ≈ 2,787 × 10¹⁶ ; dénominateur ≈ 4,058 × 10¹³. F ≈ 687 N.",
                "3) P = 70 × 9,8 = 686 N. Les deux valeurs sont presque égales : le poids d'un objet à la surface de la Terre correspond pratiquement à la force de gravitation que la Terre exerce sur lui.",
                "4) g = F ÷ m ≈ 687 ÷ 70 ≈ 9,81 N/kg.",
                "Conclusion : F ≈ 687 N, très proche du poids de 686 N, et on retrouve g ≈ 9,81 N/kg.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément de la loi de gravitation à ce qu'il désigne.",
            pairs: [
              { left: "F", right: "La valeur de la force de gravitation, en newtons" },
              { left: "G", right: "La constante de gravitation universelle, 6,67 × 10⁻¹¹ N·m²/kg²" },
              { left: "mA et mB", right: "Les masses des deux objets, en kilogrammes" },
              { left: "d", right: "La distance entre les centres des deux objets, en mètres" },
              { left: "d multipliée par 2", right: "Force divisée par 4" },
              { left: "Une masse multipliée par 2", right: "Force multipliée par 2" },
            ],
          },
          quiz: [
            {
              q: "L'interaction gravitationnelle est :",
              options: ["attractive et à distance", "répulsive et à distance", "attractive et de contact", "tantôt attractive, tantôt répulsive"],
              answer: 0,
              why: "Deux masses s'attirent toujours, sans avoir besoin de se toucher.",
            },
            {
              q: "Si la distance entre deux astres est multipliée par 3, la force de gravitation est :",
              options: ["multipliée par 3", "divisée par 3", "divisée par 9", "inchangée"],
              answer: 2,
              why: "La distance intervient au carré au dénominateur : la force est divisée par 3² = 9.",
            },
            {
              q: "La Terre attire une pomme avec une force de 2 N. Avec quelle force la pomme attire-t-elle la Terre ?",
              options: ["0 N, car la pomme est trop légère", "2 N", "Une force beaucoup plus petite que 2 N", "Une force beaucoup plus grande que 2 N"],
              answer: 1,
              why: "Les deux forces d'une interaction ont la même valeur. La Terre ne bouge pas visiblement car sa masse est immense.",
            },
            {
              q: "Dans la formule F = G × mA × mB ÷ d², en quelle unité doit-on exprimer d ?",
              options: ["En kilomètres", "En années-lumière", "En centimètres", "En mètres"],
              answer: 3,
              why: "Avec G en N·m²/kg², la distance doit être en mètres et les masses en kilogrammes pour obtenir F en newtons.",
            },
            {
              q: "Pourquoi la Lune reste-t-elle en orbite autour de la Terre ?",
              options: ["Parce que la Terre l'attire et courbe sans cesse sa trajectoire", "Parce qu'il n'y a pas d'air dans l'espace pour la freiner", "Parce que la Lune n'a pas de masse"],
              answer: 0,
              why: "L'attraction gravitationnelle de la Terre dévie en permanence la Lune de la ligne droite qu'elle suivrait sans elle.",
            },
          ],
          trap: "Croire que l'objet le plus lourd attire plus fort que l'autre : les deux forces d'une interaction gravitationnelle ont toujours la même valeur. Autre erreur fréquente : oublier de mettre la distance au carré ou de la convertir en mètres.",
          method: "Pour un calcul avec des puissances de 10, posez d'abord la formule, remplacez chaque lettre par sa valeur entre parenthèses, puis tapez le calcul en une seule fois à la calculatrice avec la touche « × 10^x ». Vérifiez l'ordre de grandeur : une force entre astres est énorme, entre objets du quotidien elle est minuscule.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'poids-masse',
          title: "Le poids et la masse : P = m × g",
          minutes: 30,
          objectives: [
            "Distinguer la masse d'un objet et son poids.",
            "Calculer un poids, une masse ou une intensité de pesanteur avec la relation P = m × g.",
            "Donner les caractéristiques du poids d'un objet et le représenter.",
          ],
          course: [
            {
              heading: "La masse et le poids : deux grandeurs différentes",
              paragraphs: [
                "La masse m d'un objet mesure la quantité de matière qui le compose. Elle s'exprime en kilogrammes (kg) et se mesure avec une balance. Elle ne dépend pas du lieu : un sac de 10 kg a une masse de 10 kg à Paris, au sommet de l'Everest ou sur la Lune.",
                "Le poids P d'un objet est la force d'attraction exercée sur lui par l'astre sur lequel il se trouve (la Terre, la Lune, Mars...). C'est une force : il s'exprime en newtons (N) et se mesure avec un dynamomètre. Il dépend du lieu : sur la Lune, le même sac pèse environ six fois moins que sur Terre, alors que sa masse n'a pas changé.",
              ],
              box: { label: "À retenir", text: "Masse : quantité de matière, en kg, mesurée avec une balance, identique partout. Poids : force d'attraction de l'astre, en N, mesurée avec un dynamomètre, qui dépend du lieu." },
            },
            {
              heading: "La relation P = m × g",
              paragraphs: [
                "Le poids d'un objet est proportionnel à sa masse : un objet deux fois plus lourd a un poids deux fois plus grand. Le coefficient de proportionnalité s'appelle l'intensité de la pesanteur, notée g, et s'exprime en newtons par kilogramme (N/kg). Si l'on trace le poids en fonction de la masse, on obtient une droite qui passe par l'origine.",
                "Sur Terre, g vaut environ 9,8 N/kg (il varie très légèrement selon l'endroit : un peu moins à l'équateur qu'aux pôles). Ailleurs, g est différent : environ 1,6 N/kg sur la Lune, 3,7 N/kg sur Mars et 24,8 N/kg sur Jupiter. Un objet de 1 kg pèse donc environ 9,8 N sur Terre et seulement 1,6 N sur la Lune.",
              ],
              box: { label: "Formule", text: "P = m × g, avec P le poids en newtons (N), m la masse en kilogrammes (kg) et g l'intensité de la pesanteur en N/kg (environ 9,8 N/kg sur Terre). On en déduit m = P ÷ g et g = P ÷ m." },
            },
            {
              heading: "Les caractéristiques du poids",
              paragraphs: [
                "Le poids est une force, donc il a quatre caractéristiques. Point d'application : le centre de gravité de l'objet. Direction : la verticale du lieu. Sens : vers le bas, c'est-à-dire vers le centre de la Terre. Valeur : P = m × g.",
                "À la surface de la Terre, le poids d'un objet est pratiquement égal à la force de gravitation exercée par la Terre sur lui, calculée avec la loi de Newton. C'est pourquoi on dit que le poids est l'action à distance de la Terre sur l'objet, et c'est aussi pourquoi g est plus faible sur la Lune, qui a une masse bien plus petite que celle de la Terre.",
              ],
            },
            {
              heading: "Dans le langage courant",
              paragraphs: [
                "Dans la vie de tous les jours, on dit « je pèse 50 kilos » : c'est un abus de langage, puisqu'on donne une masse en kilogrammes et non un poids en newtons. En physique, il faut dire « ma masse est de 50 kg » et « mon poids est d'environ 490 N sur Terre ».",
                "Un astronaute sur la Lune garde la même masse, mais son poids est environ six fois plus faible : il peut faire des bonds bien plus hauts qu'il ne le ferait sur Terre. Dans un vaisseau en orbite, il flotte, mais cela ne veut pas dire que sa masse a disparu : elle est toujours la même.",
              ],
            },
          ],
          keyPoints: [
            "La masse (kg) se mesure avec une balance et ne dépend pas du lieu.",
            "Le poids (N) est une force, mesurée avec un dynamomètre, qui dépend du lieu.",
            "P = m × g ; sur Terre, g ≈ 9,8 N/kg ; sur la Lune, g ≈ 1,6 N/kg.",
            "Le poids est vertical, dirigé vers le bas, appliqué au centre de gravité.",
            "Penser à convertir la masse en kg avant d'utiliser P = m × g.",
          ],
          example: {
            statement: "Un astronaute équipé de sa combinaison a une masse de 80 kg. Calculer son poids sur Terre (g = 9,8 N/kg) puis sur la Lune (g = 1,6 N/kg). Quelle est sa masse sur la Lune ?",
            solution: [
              "On utilise P = m × g.",
              "Sur Terre : P = 80 × 9,8 = 784 N.",
              "Sur la Lune : P = 80 × 1,6 = 128 N.",
              "La masse ne dépend pas du lieu : sur la Lune, elle vaut toujours 80 kg.",
              "Conclusion : le poids passe de 784 N sur Terre à 128 N sur la Lune, soit environ six fois moins, alors que la masse reste de 80 kg.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On prend g = 9,8 N/kg sur Terre. 1) Calculez le poids d'un cartable de masse 2,5 kg. 2) Calculez le poids d'une pomme de masse 150 g. 3) Un objet a un poids de 49 N sur Terre : quelle est sa masse ?",
              hint: "Convertissez les grammes en kilogrammes (diviser par 1 000). Pour la question 3, utilisez m = P ÷ g.",
              solution: [
                "1) P = 2,5 × 9,8 = 24,5 N.",
                "2) 150 g = 0,150 kg, donc P = 0,150 × 9,8 = 1,47 N.",
                "3) m = P ÷ g = 49 ÷ 9,8 = 5 kg.",
                "Résultats : 24,5 N ; 1,47 N ; 5 kg.",
              ],
            },
            {
              level: 2,
              statement: "En classe, on suspend différentes masses à un dynamomètre. Résultats : 100 g → 0,98 N ; 200 g → 1,96 N ; 300 g → 2,94 N ; 500 g → 4,90 N. 1) Le poids est-il proportionnel à la masse ? Justifiez. 2) Déduisez-en la valeur de g dans la salle de classe. 3) Quel serait le poids d'une masse de 750 g ?",
              hint: "Convertissez chaque masse en kilogrammes, puis calculez le quotient P ÷ m pour chaque mesure.",
              solution: [
                "1) En kg, les masses sont 0,1 ; 0,2 ; 0,3 et 0,5 kg. Quotients P ÷ m : 0,98 ÷ 0,1 = 9,8 ; 1,96 ÷ 0,2 = 9,8 ; 2,94 ÷ 0,3 = 9,8 ; 4,90 ÷ 0,5 = 9,8.",
                "Le quotient est toujours le même : le poids est proportionnel à la masse.",
                "2) Le coefficient de proportionnalité est g = 9,8 N/kg.",
                "3) 750 g = 0,750 kg, donc P = 0,750 × 9,8 = 7,35 N.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Un robot d'exploration a une masse de 900 kg. Données : g Terre = 9,8 N/kg ; g Mars = 3,7 N/kg. 1) Calculez le poids du robot sur Terre, puis sur Mars. 2) Combien de fois le robot est-il moins lourd sur Mars que sur Terre ? Arrondissez au dixième. 3) Un élève affirme : « Sur Mars, le robot est plus léger, car sa masse diminue. » Corrigez cette affirmation. 4) Donnez les caractéristiques du poids du robot sur Mars.",
              hint: "Utilisez P = m × g pour chaque planète, puis faites le quotient des deux poids. Pensez à la différence entre masse et poids.",
              solution: [
                "1) Sur Terre : P = 900 × 9,8 = 8 820 N. Sur Mars : P = 900 × 3,7 = 3 330 N.",
                "2) 8 820 ÷ 3 330 ≈ 2,6 : le poids du robot est environ 2,6 fois plus faible sur Mars.",
                "3) L'affirmation est fausse : la masse du robot reste égale à 900 kg partout. C'est son poids qui diminue, car l'intensité de la pesanteur est plus faible sur Mars que sur Terre.",
                "4) Point d'application : le centre de gravité du robot ; direction : la verticale du lieu ; sens : vers le bas (vers le centre de Mars) ; valeur : 3 330 N.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Masse ou poids ? Démêlez le vrai du faux.",
            statements: [
              { text: "Sur la Lune, la masse d'un astronaute est plus petite que sur Terre.", true: false, why: "La masse ne dépend pas du lieu ; c'est le poids qui est plus faible sur la Lune." },
              { text: "Le poids s'exprime en newtons.", true: true, why: "Le poids est une force, donc il s'exprime en newtons (N)." },
              { text: "Une balance mesure le poids d'un objet en kilogrammes.", true: false, why: "Une balance indique une masse en kilogrammes ; le poids se mesure en newtons avec un dynamomètre." },
              { text: "Sur Terre, un objet de 1 kg a un poids d'environ 9,8 N.", true: true, why: "P = m × g = 1 × 9,8 = 9,8 N." },
              { text: "Le poids d'un objet est dirigé vers le haut.", true: false, why: "Le poids est vertical et dirigé vers le bas, vers le centre de la Terre." },
              { text: "Si l'on double la masse d'un objet, son poids double.", true: true, why: "Le poids est proportionnel à la masse : P = m × g." },
              { text: "Un astronaute qui flotte dans la station spatiale n'a plus de masse.", true: false, why: "Sa masse est toujours la même : seule la sensation de poids disparaît dans un vaisseau en orbite." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de l'intensité de la pesanteur g ?",
              options: ["Le newton (N)", "Le kilogramme (kg)", "Le mètre par seconde (m/s)", "Le newton par kilogramme (N/kg)"],
              answer: 3,
              why: "g = P ÷ m, donc son unité est le newton divisé par le kilogramme : N/kg.",
            },
            {
              q: "Quel est le poids sur Terre d'un objet de 5 kg (g = 9,8 N/kg) ?",
              options: ["5 N", "49 N", "0,51 N", "14,8 N"],
              answer: 1,
              why: "P = m × g = 5 × 9,8 = 49 N.",
            },
            {
              q: "Un objet a une masse de 12 kg sur Terre. Quelle est sa masse sur la Lune ?",
              options: ["2 kg, soit six fois moins", "72 kg, soit six fois plus", "12 kg, comme sur Terre", "On ne peut pas savoir sans dynamomètre"],
              answer: 2,
              why: "La masse est une quantité de matière : elle ne change pas quand l'objet change de lieu.",
            },
            {
              q: "Un objet de masse 2 kg a un poids de 7,4 N sur une planète. Quelle est l'intensité de la pesanteur sur cette planète ?",
              options: ["3,7 N/kg", "14,8 N/kg", "9,4 N/kg", "5,4 N/kg"],
              answer: 0,
              why: "g = P ÷ m = 7,4 ÷ 2 = 3,7 N/kg : c'est la valeur sur Mars.",
            },
            {
              q: "Où s'applique le poids d'un objet ?",
              options: ["Au point de contact avec le sol", "Au centre de gravité de l'objet", "Au centre de la Terre", "Au point le plus haut de l'objet"],
              answer: 1,
              why: "Le poids est une action à distance répartie dans tout l'objet ; on la modélise par une force appliquée au centre de gravité.",
            },
          ],
          trap: "Confondre masse et poids, ou oublier de convertir la masse en kilogrammes : avec m = 250 g, il faut écrire P = 0,250 × 9,8 = 2,45 N, et non 250 × 9,8.",
          method: "Écrivez toujours l'unité à côté de chaque grandeur : si vous trouvez un résultat en kg, c'est une masse ; en N, c'est un poids. Avant de calculer, vérifiez que la masse est bien en kg, puis contrôlez l'ordre de grandeur : sur Terre, le poids en newtons est environ dix fois la masse en kilogrammes.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'ÉNERGIE ET SES CONVERSIONS                                           */
    /* ==================================================================== */
    {
      id: 'energie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'formes-conversions',
          title: "Sources, formes et conversions d'énergie",
          minutes: 30,
          objectives: [
            "Identifier les sources, les formes, les transferts et les conversions d'énergie.",
            "Distinguer les sources d'énergie renouvelables et non renouvelables.",
            "Établir la chaîne énergétique d'un dispositif simple et utiliser la conservation de l'énergie.",
          ],
          course: [
            {
              heading: "Les formes d'énergie",
              paragraphs: [
                "L'énergie est ce qui permet de produire un mouvement, de chauffer, d'éclairer ou de faire fonctionner un appareil. Elle s'exprime en joules (J) ; dans la vie courante, on utilise aussi le kilowattheure (kWh) pour l'électricité et la kilocalorie pour les aliments.",
                "On distingue plusieurs formes d'énergie : l'énergie cinétique, liée au mouvement (une voiture qui roule, le vent) ; l'énergie de position, liée à l'altitude (l'eau retenue derrière un barrage) ; l'énergie thermique, liée à la température (l'eau chaude) ; l'énergie chimique, contenue dans les combustibles, les aliments et les piles ; l'énergie électrique ; l'énergie lumineuse (ou rayonnante), transportée par la lumière ; l'énergie nucléaire, contenue dans les noyaux des atomes.",
              ],
              box: { label: "Repère", text: "Formes d'énergie : cinétique, de position, thermique, chimique, électrique, lumineuse (rayonnante), nucléaire. Unité légale : le joule (J)." },
            },
            {
              heading: "Les sources d'énergie",
              paragraphs: [
                "Une source d'énergie est un phénomène ou une matière présente dans la nature dont on peut tirer de l'énergie. Une source est renouvelable si elle se reconstitue rapidement à l'échelle humaine : le Soleil, le vent, l'eau des rivières et des marées, la chaleur de la Terre (géothermie) et la biomasse (le bois, par exemple, si l'on replante les forêts).",
                "Une source est non renouvelable si ses réserves s'épuisent, car elles ont mis des millions d'années à se former ou ne se reforment pas : le pétrole, le charbon et le gaz naturel (les combustibles fossiles), ainsi que l'uranium utilisé dans les centrales nucléaires. La combustion des combustibles fossiles rejette du dioxyde de carbone, un gaz à effet de serre qui contribue au réchauffement climatique.",
              ],
              box: { label: "À retenir", text: "Renouvelables : solaire, éolien, hydraulique, géothermie, biomasse. Non renouvelables : pétrole, charbon, gaz naturel, uranium." },
            },
            {
              heading: "Convertisseurs et chaînes énergétiques",
              paragraphs: [
                "Un convertisseur est un dispositif qui transforme une forme d'énergie en une autre. Une éolienne convertit l'énergie cinétique du vent en énergie électrique ; un panneau photovoltaïque convertit l'énergie lumineuse en énergie électrique ; une pile convertit son énergie chimique en énergie électrique ; un moteur électrique convertit l'énergie électrique en énergie cinétique ; une lampe convertit l'énergie électrique en énergie lumineuse.",
                "On représente ces conversions par une chaîne énergétique : le convertisseur est placé dans un cadre, l'énergie qu'il reçoit arrive par une flèche, et chaque énergie qu'il fournit repart par une flèche qui porte son nom. Les formes des cadres (rectangle, ovale) peuvent varier selon les manuels ; l'essentiel est de nommer chaque convertisseur et chaque forme d'énergie.",
              ],
            },
            {
              heading: "La conservation de l'énergie",
              paragraphs: [
                "L'énergie ne se crée pas et ne disparaît pas : elle se transfère d'un objet à un autre ou se convertit d'une forme en une autre. C'est le principe de conservation de l'énergie. Pour un convertisseur, l'énergie qu'il reçoit est égale à la somme des énergies qu'il fournit.",
                "Une partie de l'énergie fournie sert à ce que l'on attend de l'appareil : c'est l'énergie utile. Le reste est de l'énergie dissipée, le plus souvent sous forme d'énergie thermique (l'appareil chauffe) : on parle parfois de pertes, mais cette énergie n'a pas disparu. Par exemple, une lampe qui reçoit 100 J d'énergie électrique et fournit 20 J d'énergie lumineuse dissipe 100 - 20 = 80 J d'énergie thermique.",
              ],
              box: { label: "Propriété", text: "Conservation de l'énergie : énergie reçue = énergie utile + énergie dissipée. L'énergie dissipée est le plus souvent de l'énergie thermique." },
            },
          ],
          keyPoints: [
            "L'énergie s'exprime en joules (J) et existe sous plusieurs formes.",
            "Sources renouvelables : Soleil, vent, eau, géothermie, biomasse. Non renouvelables : fossiles et uranium.",
            "Un convertisseur transforme une forme d'énergie en une autre.",
            "Chaîne énergétique : énergie reçue → convertisseur → énergie utile et énergie dissipée.",
            "L'énergie se conserve : énergie reçue = énergie utile + énergie dissipée.",
          ],
          example: {
            statement: "Établir la chaîne énergétique d'une éolienne et indiquer si sa source d'énergie est renouvelable. Elle reçoit 500 kJ d'énergie du vent et fournit 200 kJ d'énergie électrique : quelle énergie est dissipée ?",
            solution: [
              "Source d'énergie : le vent, qui est une source renouvelable.",
              "Énergie reçue par l'éolienne : l'énergie cinétique du vent.",
              "Énergie utile fournie : l'énergie électrique.",
              "Énergie dissipée : de l'énergie thermique (frottements dans les engrenages, échauffement de l'alternateur), et un peu d'énergie sonore.",
              "Chaîne : énergie cinétique du vent → [éolienne] → énergie électrique (utile) + énergie thermique (dissipée).",
              "Conservation : énergie dissipée = 500 - 200 = 300 kJ.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les sources d'énergie suivantes en renouvelables et non renouvelables : le charbon, le Soleil, le vent, le gaz naturel, le bois issu de forêts replantées, l'uranium, la chaleur du sous-sol, le pétrole.",
              hint: "Demandez-vous si la source se reconstitue rapidement à l'échelle d'une vie humaine.",
              solution: [
                "Renouvelables : le Soleil, le vent, le bois issu de forêts replantées (biomasse), la chaleur du sous-sol (géothermie).",
                "Non renouvelables : le charbon, le gaz naturel et le pétrole (combustibles fossiles), l'uranium.",
                "Il y a donc quatre sources renouvelables et quatre non renouvelables.",
              ],
            },
            {
              level: 2,
              statement: "Établissez la chaîne énergétique : 1) d'un sèche-cheveux, qui souffle de l'air chaud grâce à un ventilateur et à une résistance chauffante ; 2) d'une lampe de poche alimentée par une pile. Précisez à chaque fois l'énergie utile et l'énergie dissipée.",
              hint: "Repérez d'abord l'énergie reçue par l'appareil, puis ce qu'on attend de lui. Pour la lampe de poche, il y a deux convertisseurs à la suite.",
              solution: [
                "1) Le sèche-cheveux reçoit de l'énergie électrique. Il fournit de l'énergie thermique (air chaud) et de l'énergie cinétique (mouvement de l'air) : ces deux énergies sont utiles. Une petite partie est dissipée sous forme d'énergie sonore et de chaleur dans le moteur.",
                "Chaîne : énergie électrique → [sèche-cheveux] → énergie thermique et énergie cinétique (utiles) + énergie sonore (dissipée).",
                "2) La pile convertit son énergie chimique en énergie électrique, transférée à la lampe. La lampe convertit l'énergie électrique en énergie lumineuse (utile) et en énergie thermique (dissipée).",
                "Chaîne : énergie chimique → [pile] → énergie électrique → [lampe] → énergie lumineuse (utile) + énergie thermique (dissipée).",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. On compare deux lampes qui éclairent autant l'une que l'autre. Pendant une seconde, la lampe A (à incandescence) reçoit 60 J d'énergie électrique et la lampe B (à DEL) en reçoit 8 J. On donne : chaque lampe fournit 3 J d'énergie lumineuse par seconde. 1) Établissez la chaîne énergétique d'une lampe. 2) Calculez l'énergie thermique dissipée par chaque lampe en une seconde. 3) Quelle part de l'énergie reçue est utile pour chaque lampe ? Exprimez-la en pourcentage. 4) Quelle lampe faut-il choisir pour économiser l'énergie ? Justifiez.",
              hint: "Utilisez la conservation de l'énergie : énergie reçue = énergie utile + énergie dissipée. Pour le pourcentage, calculez énergie utile ÷ énergie reçue × 100.",
              solution: [
                "1) Énergie électrique → [lampe] → énergie lumineuse (utile) + énergie thermique (dissipée).",
                "2) Lampe A : 60 - 3 = 57 J d'énergie thermique. Lampe B : 8 - 3 = 5 J d'énergie thermique.",
                "3) Lampe A : 3 ÷ 60 × 100 = 5 %. Lampe B : 3 ÷ 8 × 100 = 37,5 %.",
                "4) Pour la même lumière, la lampe B reçoit 7,5 fois moins d'énergie (60 ÷ 8 = 7,5) et en gaspille beaucoup moins sous forme de chaleur.",
                "Conclusion : il faut choisir la lampe B, à DEL, qui convertit une bien plus grande part de l'énergie reçue en lumière.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque convertisseur à la conversion d'énergie qu'il réalise.",
            pairs: [
              { left: "Éolienne", right: "Énergie cinétique du vent → énergie électrique" },
              { left: "Panneau photovoltaïque", right: "Énergie lumineuse → énergie électrique" },
              { left: "Pile", right: "Énergie chimique → énergie électrique" },
              { left: "Moteur électrique", right: "Énergie électrique → énergie cinétique" },
              { left: "Lampe", right: "Énergie électrique → énergie lumineuse" },
              { left: "Radiateur électrique", right: "Énergie électrique → énergie thermique" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces sources d'énergie est renouvelable ?",
              options: ["Le gaz naturel", "Le vent", "L'uranium", "Le charbon"],
              answer: 1,
              why: "Le vent se renouvelle en permanence. Le gaz, l'uranium et le charbon ont des réserves limitées.",
            },
            {
              q: "Quelle est l'unité légale de l'énergie ?",
              options: ["Le joule (J)", "Le watt (W)", "Le newton (N)", "Le volt (V)"],
              answer: 0,
              why: "L'énergie s'exprime en joules. Le watt est l'unité de puissance, le newton celle de la force, le volt celle de la tension.",
            },
            {
              q: "Quelle conversion réalise un moteur électrique ?",
              options: ["Énergie cinétique → énergie électrique", "Énergie chimique → énergie électrique", "Énergie lumineuse → énergie électrique", "Énergie électrique → énergie cinétique"],
              answer: 3,
              why: "Le moteur reçoit de l'énergie électrique et met un objet en mouvement : il fournit de l'énergie cinétique (et dissipe de la chaleur).",
            },
            {
              q: "Un moteur reçoit 1 000 J d'énergie électrique et fournit 700 J d'énergie cinétique. Quelle énergie dissipe-t-il ?",
              options: ["1 700 J", "700 J", "300 J", "0 J, l'énergie se conserve"],
              answer: 2,
              why: "Énergie dissipée = énergie reçue - énergie utile = 1 000 - 700 = 300 J, le plus souvent sous forme thermique.",
            },
            {
              q: "Sous quelle forme l'énergie dissipée par un appareil se retrouve-t-elle le plus souvent ?",
              options: ["Énergie nucléaire", "Énergie chimique", "Énergie thermique", "Énergie de position"],
              answer: 2,
              why: "Les frottements et le passage du courant font chauffer les appareils : l'énergie dissipée est surtout thermique.",
            },
          ],
          trap: "Dire que l'énergie dissipée « disparaît » ou « est détruite » : elle est seulement convertie sous une forme non utile, le plus souvent de l'énergie thermique. Autre erreur : confondre la source (le vent) et la forme d'énergie (énergie cinétique).",
          method: "Pour construire une chaîne énergétique, posez-vous trois questions dans l'ordre : que reçoit l'appareil ? Que doit-il fournir pour remplir sa fonction (énergie utile) ? Qu'est-ce qui chauffe, fait du bruit ou se perd (énergie dissipée) ? Vérifiez enfin que la somme des énergies fournies est égale à l'énergie reçue.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'energie-cinetique',
          title: "L'énergie cinétique et la sécurité routière",
          minutes: 35,
          objectives: [
            "Calculer l'énergie cinétique d'un objet avec la relation Ec = ½ × m × v².",
            "Convertir une vitesse de km/h en m/s.",
            "Exploiter la décomposition de la distance d'arrêt en distance de réaction et distance de freinage.",
            "Relier l'influence de la vitesse sur l'énergie cinétique aux règles de sécurité routière.",
          ],
          course: [
            {
              heading: "L'énergie cinétique",
              paragraphs: [
                "Tout objet en mouvement possède une énergie liée à ce mouvement : l'énergie cinétique, notée Ec. Elle est d'autant plus grande que l'objet est lourd et qu'il va vite. Un camion lancé à 50 km/h possède bien plus d'énergie cinétique qu'un vélo à la même vitesse, et une voiture à 130 km/h bien plus qu'à 50 km/h.",
                "L'énergie cinétique se calcule avec la formule Ec = ½ × m × v². Attention aux unités : la masse m doit être en kilogrammes et la vitesse v en mètres par seconde ; on obtient alors Ec en joules. Un objet immobile (v = 0) a une énergie cinétique nulle.",
              ],
              box: { label: "Formule", text: "Ec = ½ × m × v², avec Ec en joules (J), m en kilogrammes (kg) et v en mètres par seconde (m/s)." },
            },
            {
              heading: "Le rôle de la vitesse et la conversion des unités",
              paragraphs: [
                "La vitesse intervient au carré : si la vitesse double, l'énergie cinétique est multipliée par 2² = 4 ; si la vitesse triple, elle est multipliée par 3² = 9. En revanche, si la masse double, l'énergie cinétique double seulement. Une petite augmentation de vitesse a donc de grandes conséquences.",
                "Les vitesses des véhicules sont données en km/h, mais la formule exige des m/s. Comme 1 km = 1 000 m et 1 h = 3 600 s, on passe des km/h aux m/s en divisant par 3,6 : 36 km/h = 10 m/s, 90 km/h = 25 m/s. Dans l'autre sens, on multiplie par 3,6.",
              ],
              box: { label: "Règle", text: "v (m/s) = v (km/h) ÷ 3,6 et v (km/h) = v (m/s) × 3,6. Vitesse doublée : énergie cinétique multipliée par 4." },
            },
            {
              heading: "La distance d'arrêt",
              paragraphs: [
                "Quand un conducteur aperçoit un danger, son véhicule ne s'arrête pas immédiatement. Pendant le temps de réaction, environ 1 s pour un conducteur attentif, le cerveau perçoit le danger et décide de freiner : le véhicule continue à rouler à la même vitesse. La distance parcourue pendant ce temps est la distance de réaction : DR = v × tR.",
                "Ensuite, pendant le freinage, le véhicule ralentit jusqu'à l'arrêt : il parcourt la distance de freinage DF. Pendant le freinage, l'énergie cinétique est convertie en énergie thermique par les frottements dans les freins, qui chauffent. Plus l'énergie cinétique est grande, plus la distance de freinage est longue : elle augmente comme le carré de la vitesse et s'allonge sur route mouillée.",
              ],
              box: { label: "Formule", text: "Distance d'arrêt = distance de réaction + distance de freinage : DA = DR + DF, avec DR = v × tR." },
            },
            {
              heading: "Vitesse et sécurité",
              paragraphs: [
                "Le temps de réaction augmente avec la fatigue, l'alcool, certains médicaments, les stupéfiants et l'utilisation du téléphone au volant : la distance de réaction s'allonge d'autant. La distance de freinage dépend de la vitesse, de l'état de la route, des pneus et des freins.",
                "En cas de choc, l'énergie cinétique du véhicule et de ses passagers doit être absorbée en un instant, ce qui provoque des dégâts d'autant plus graves que la vitesse est élevée. Un choc à 50 km/h correspond à peu près à une chute d'une hauteur d'environ 10 m (celle d'un troisième étage). C'est pourquoi les limitations de vitesse, la ceinture de sécurité et le casque sauvent des vies.",
              ],
            },
          ],
          keyPoints: [
            "Ec = ½ × m × v² : m en kg, v en m/s, Ec en J.",
            "Pour passer de km/h à m/s, on divise par 3,6.",
            "Si la vitesse double, l'énergie cinétique est multipliée par 4.",
            "DA = DR + DF, avec DR = v × tR (tR ≈ 1 s pour un conducteur attentif).",
            "Lors du freinage, l'énergie cinétique est convertie en énergie thermique dans les freins.",
          ],
          example: {
            statement: "Une voiture de masse 1 000 kg roule à 50 km/h, puis à 100 km/h. Calculer son énergie cinétique dans les deux cas et comparer.",
            solution: [
              "Conversion : 50 km/h = 50 ÷ 3,6 ≈ 13,9 m/s et 100 km/h = 100 ÷ 3,6 ≈ 27,8 m/s.",
              "À 50 km/h : Ec = ½ × 1 000 × (50 ÷ 3,6)² ≈ 500 × 192,9 ≈ 96 450 J, soit environ 9,6 × 10⁴ J.",
              "À 100 km/h : Ec = ½ × 1 000 × (100 ÷ 3,6)² ≈ 500 × 771,6 ≈ 385 800 J, soit environ 3,9 × 10⁵ J.",
              "Comparaison : 385 800 ÷ 96 450 ≈ 4 (exactement 4, car la vitesse est multipliée par 2 et 2² = 4).",
              "Conclusion : en doublant sa vitesse, la voiture a une énergie cinétique quatre fois plus grande.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Calculez l'énergie cinétique d'un ballon de football de masse 450 g lancé à 20 m/s. 2) Calculez l'énergie cinétique d'un cycliste qui, avec son vélo, a une masse de 80 kg et roule à 18 km/h.",
              hint: "Convertissez la masse en kg et la vitesse en m/s avant d'appliquer Ec = ½ × m × v².",
              solution: [
                "1) m = 450 g = 0,45 kg. Ec = ½ × 0,45 × 20² = 0,5 × 0,45 × 400 = 90 J.",
                "2) v = 18 ÷ 3,6 = 5 m/s. Ec = ½ × 80 × 5² = 0,5 × 80 × 25 = 1 000 J.",
                "Résultats : 90 J pour le ballon et 1 000 J pour le cycliste.",
              ],
            },
            {
              level: 2,
              statement: "Une voiture roule à 90 km/h. 1) Convertissez cette vitesse en m/s. 2) Calculez la distance de réaction pour un conducteur attentif (tR = 1 s), puis pour un conducteur qui lit un message sur son téléphone (tR = 2 s). 3) On admet que la distance de freinage vaut 45 m dans ces conditions. Calculez la distance d'arrêt dans les deux cas et concluez.",
              hint: "Pendant le temps de réaction, la voiture garde sa vitesse : DR = v × tR, avec v en m/s et tR en s.",
              solution: [
                "1) v = 90 ÷ 3,6 = 25 m/s.",
                "2) Conducteur attentif : DR = 25 × 1 = 25 m. Conducteur distrait : DR = 25 × 2 = 50 m.",
                "3) Conducteur attentif : DA = 25 + 45 = 70 m. Conducteur distrait : DA = 50 + 45 = 95 m.",
                "Conclusion : le téléphone allonge la distance d'arrêt de 25 m, soit environ la longueur de six voitures.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Un automobiliste roule à 72 km/h dans une voiture de masse totale 1 200 kg. Un enfant traverse la route 40 m devant lui. 1) Convertissez la vitesse en m/s. 2) Calculez l'énergie cinétique de la voiture. 3) Son temps de réaction est de 1 s : calculez la distance de réaction. 4) On admet que la distance de freinage vaut 25 m. La voiture peut-elle s'arrêter avant l'enfant ? 5) À 50 km/h, avec le même temps de réaction, on admet une distance de freinage de 12 m. Qu'en serait-il ? 6) Sous quelle forme l'énergie cinétique est-elle convertie pendant le freinage ?",
              hint: "Comparez la distance d'arrêt DA = DR + DF à la distance de 40 m. Pour la question 5, recommencez le calcul de DR avec la nouvelle vitesse en m/s.",
              solution: [
                "1) v = 72 ÷ 3,6 = 20 m/s.",
                "2) Ec = ½ × 1 200 × 20² = 600 × 400 = 240 000 J, soit 2,4 × 10⁵ J.",
                "3) DR = 20 × 1 = 20 m.",
                "4) DA = 20 + 25 = 45 m. Comme 45 m > 40 m, la voiture ne peut pas s'arrêter à temps.",
                "5) v = 50 ÷ 3,6 ≈ 13,9 m/s, donc DR ≈ 13,9 m et DA ≈ 13,9 + 12 ≈ 25,9 m. Comme 25,9 m < 40 m, la voiture s'arrêterait avant l'enfant.",
                "6) Pendant le freinage, l'énergie cinétique est convertie en énergie thermique : les freins et les pneus chauffent.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un arrêt d'urgence en voiture.",
            items: [
              "Un obstacle apparaît sur la route",
              "Le conducteur perçoit le danger",
              "La voiture roule encore à vitesse constante pendant le temps de réaction",
              "Le conducteur appuie sur la pédale de frein",
              "L'énergie cinétique est convertie en énergie thermique dans les freins",
              "La voiture s'immobilise au bout de la distance d'arrêt",
            ],
          },
          quiz: [
            {
              q: "Quelle est la vitesse en m/s d'un véhicule qui roule à 54 km/h ?",
              options: ["194,4 m/s", "54 m/s", "15 m/s", "5,4 m/s"],
              answer: 2,
              why: "On divise par 3,6 : 54 ÷ 3,6 = 15 m/s.",
            },
            {
              q: "Si la vitesse d'un véhicule est multipliée par 3, son énergie cinétique est :",
              options: ["multipliée par 3", "multipliée par 6", "divisée par 3", "multipliée par 9"],
              answer: 3,
              why: "La vitesse est au carré dans Ec = ½ × m × v² : l'énergie est multipliée par 3² = 9.",
            },
            {
              q: "Quelle est l'énergie cinétique d'un objet de 2 kg qui se déplace à 3 m/s ?",
              options: ["9 J", "3 J", "6 J", "18 J"],
              answer: 0,
              why: "Ec = ½ × 2 × 3² = 1 × 9 = 9 J.",
            },
            {
              q: "Que se passe-t-il pendant le temps de réaction du conducteur ?",
              options: ["La voiture est déjà en train de ralentir fortement", "La voiture continue à rouler à la même vitesse", "La voiture est arrêtée", "Les freins chauffent"],
              answer: 1,
              why: "Le conducteur n'a pas encore freiné : la voiture garde sa vitesse et parcourt la distance de réaction.",
            },
            {
              q: "Lequel de ces facteurs allonge la distance de réaction ?",
              options: ["Des pneus usés", "Une route mouillée", "La fatigue du conducteur", "Des freins en mauvais état"],
              answer: 2,
              why: "La fatigue augmente le temps de réaction. Les pneus, la route et les freins jouent sur la distance de freinage.",
            },
          ],
          trap: "Oublier de convertir la vitesse en m/s ou oublier de mettre la vitesse au carré. Autre confusion fréquente : croire que la distance d'arrêt ne dépend que du freinage, alors que la distance de réaction est souvent la plus grande aux vitesses modérées.",
          method: "Dans un calcul d'énergie cinétique, faites toujours la conversion sur une ligne à part (« v = 72 ÷ 3,6 = 20 m/s »), puis écrivez la formule, remplacez et calculez. Vérifiez à la calculatrice que vous avez bien élevé la vitesse, et seulement la vitesse, au carré.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conservation-energie',
          title: "Énergie de position et conservation de l'énergie",
          minutes: 30,
          objectives: [
            "Relier l'énergie de position d'un objet à son altitude et la calculer avec Ep = m × g × h.",
            "Décrire les conversions entre énergie de position et énergie cinétique lors d'une chute ou d'un mouvement.",
            "Utiliser la conservation de l'énergie mécanique en l'absence de frottements et interpréter son évolution en leur présence.",
          ],
          course: [
            {
              heading: "L'énergie de position",
              paragraphs: [
                "Un objet situé en hauteur possède une énergie liée à sa position par rapport au sol : l'énergie de position, appelée aussi énergie potentielle de pesanteur et notée Ep. Elle est due à l'attraction de la Terre : si on lâche l'objet, il tombe et acquiert de la vitesse. Plus l'objet est haut et lourd, plus son énergie de position est grande.",
                "On peut la calculer avec la formule Ep = m × g × h, où m est la masse en kg, g l'intensité de la pesanteur en N/kg et h l'altitude en mètres par rapport à un niveau de référence (le plus souvent le sol). Au niveau de référence, l'énergie de position est nulle.",
              ],
              box: { label: "Formule", text: "Ep = m × g × h, avec Ep en joules (J), m en kg, g en N/kg (9,8 N/kg sur Terre) et h en mètres, mesurée à partir d'un niveau de référence." },
            },
            {
              heading: "L'énergie mécanique",
              paragraphs: [
                "L'énergie mécanique d'un objet, notée Em, est la somme de son énergie cinétique et de son énergie de position : Em = Ec + Ep. Une pomme accrochée à son arbre a de l'énergie de position mais pas d'énergie cinétique ; un ballon qui roule au sol a de l'énergie cinétique mais pas d'énergie de position ; un oiseau qui vole possède les deux.",
              ],
              box: { label: "Définition", text: "Énergie mécanique : Em = Ec + Ep, somme de l'énergie cinétique (liée à la vitesse) et de l'énergie de position (liée à l'altitude)." },
            },
            {
              heading: "Des conversions pendant le mouvement",
              paragraphs: [
                "Lorsqu'un objet tombe, son altitude diminue et sa vitesse augmente : son énergie de position se convertit en énergie cinétique. Lorsqu'on lance une balle vers le haut, c'est l'inverse : elle ralentit en montant, son énergie cinétique se convertit en énergie de position, jusqu'au sommet où sa vitesse est nulle.",
                "Dans un barrage hydroélectrique, l'eau retenue en altitude possède de l'énergie de position ; en descendant dans les conduites, elle prend de la vitesse (énergie cinétique) et fait tourner une turbine reliée à un alternateur, qui produit de l'énergie électrique. Dans un manège de montagnes russes, le wagon accélère dans les descentes et ralentit dans les montées pour la même raison.",
              ],
            },
            {
              heading: "Conservation et frottements",
              paragraphs: [
                "En l'absence de frottements, l'énergie mécanique se conserve : ce que l'objet perd en énergie de position, il le gagne exactement en énergie cinétique. Une bille lâchée de 20 cm de haut dans une gouttière sans frottement remonterait de l'autre côté à 20 cm de haut exactement.",
                "En réalité, il y a toujours des frottements (avec l'air, avec le support). L'énergie mécanique diminue alors peu à peu : une partie est convertie en énergie thermique. Une balle qui rebondit remonte de moins en moins haut, un pendule finit par s'arrêter. L'énergie totale, elle, se conserve toujours : rien ne disparaît, l'énergie mécanique perdue se retrouve sous forme thermique.",
              ],
              box: { label: "À retenir", text: "Sans frottements : Em = Ec + Ep reste constante. Avec frottements : Em diminue, et l'énergie perdue est convertie en énergie thermique." },
            },
          ],
          keyPoints: [
            "L'énergie de position augmente avec l'altitude et la masse : Ep = m × g × h.",
            "Énergie mécanique : Em = Ec + Ep.",
            "Lors d'une chute, l'énergie de position se convertit en énergie cinétique.",
            "Sans frottements, l'énergie mécanique se conserve.",
            "Avec frottements, l'énergie mécanique diminue au profit de l'énergie thermique.",
          ],
          example: {
            statement: "Une balle de masse 0,5 kg est lâchée sans vitesse d'une hauteur de 20 m. On néglige les frottements et on prend g = 9,8 N/kg. Calculer son énergie de position au départ, son énergie cinétique juste avant de toucher le sol, puis sa vitesse à cet instant.",
            solution: [
              "Au départ : Ep = m × g × h = 0,5 × 9,8 × 20 = 98 J et Ec = 0 J (vitesse nulle), donc Em = 98 J.",
              "Juste avant le sol : h = 0, donc Ep = 0 J.",
              "Sans frottements, l'énergie mécanique se conserve : Ec = Em = 98 J.",
              "Vitesse : Ec = ½ × m × v², donc v² = 2 × Ec ÷ m = 2 × 98 ÷ 0,5 = 392, et v = √392 ≈ 19,8 m/s.",
              "Conclusion : la balle touche le sol avec une énergie cinétique de 98 J, à environ 19,8 m/s, soit environ 71 km/h.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On prend g = 9,8 N/kg. 1) Calculez l'énergie de position d'un plongeur de masse 60 kg au sommet d'un plongeoir de 10 m, en prenant la surface de l'eau comme référence. 2) Que vaut son énergie de position lorsqu'il arrive à la surface de l'eau ? 3) Que devient cette énergie pendant la chute ?",
              hint: "Appliquez Ep = m × g × h avec h mesurée depuis la surface de l'eau.",
              solution: [
                "1) Ep = 60 × 9,8 × 10 = 5 880 J.",
                "2) À la surface de l'eau, h = 0, donc Ep = 0 J.",
                "3) Pendant la chute, l'énergie de position se convertit en énergie cinétique : le plongeur va de plus en plus vite.",
              ],
            },
            {
              level: 2,
              statement: "Une skateuse s'élance sans vitesse du bord A d'une rampe en U (le « half-pipe »), descend jusqu'au point le plus bas B, puis remonte vers le bord opposé C, situé à la même hauteur que A. 1) Décrivez les conversions d'énergie entre A et B, puis entre B et C. 2) En quel point sa vitesse est-elle maximale ? 3) En pratique, sans pousser sur ses jambes, elle n'atteint pas tout à fait le bord C. Expliquez pourquoi.",
              hint: "Suivez l'altitude et la vitesse en chaque point, puis pensez à ce que deviennent les frottements.",
              solution: [
                "1) De A à B, l'altitude diminue et la vitesse augmente : l'énergie de position se convertit en énergie cinétique. De B à C, l'altitude augmente et la vitesse diminue : l'énergie cinétique se convertit en énergie de position.",
                "2) La vitesse est maximale au point B, le plus bas, où l'énergie de position est minimale.",
                "3) Les frottements des roues sur la rampe et de l'air sur la skateuse convertissent une partie de l'énergie mécanique en énergie thermique. L'énergie mécanique diminue, donc elle ne peut pas remonter à la hauteur de départ.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Le wagon d'un manège de montagnes russes, de masse 500 kg avec ses passagers, est au sommet d'une descente, à 30 m au-dessus du point le plus bas, avec une vitesse quasi nulle. On prend g = 9,8 N/kg. 1) Calculez l'énergie de position du wagon au sommet, en prenant le point le plus bas comme référence. 2) En négligeant les frottements, quelle serait son énergie cinétique au point le plus bas ? Déduisez-en sa vitesse en m/s puis en km/h. 3) En réalité, on mesure une vitesse de 22 m/s au point le plus bas. Calculez l'énergie cinétique réelle. 4) Quelle quantité d'énergie a été convertie par les frottements, et sous quelle forme ?",
              hint: "Sans frottements, toute l'énergie de position du sommet se retrouve en énergie cinétique en bas. Pour la vitesse, utilisez v² = 2 × Ec ÷ m.",
              solution: [
                "1) Ep = 500 × 9,8 × 30 = 147 000 J.",
                "2) Sans frottements, Em se conserve : en bas, Ec = 147 000 J. v² = 2 × 147 000 ÷ 500 = 588, donc v = √588 ≈ 24,2 m/s, soit 24,2 × 3,6 ≈ 87 km/h.",
                "3) Ec réelle = ½ × 500 × 22² = 250 × 484 = 121 000 J.",
                "4) Énergie convertie par les frottements : 147 000 - 121 000 = 26 000 J, convertie en énergie thermique (et un peu en énergie sonore).",
                "Conclusion : sans frottements le wagon atteindrait environ 87 km/h ; en réalité, 26 000 J sont dissipés et il arrive à 22 m/s.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Énergie de position, énergie cinétique et conservation.",
            statements: [
              { text: "Un objet immobile posé sur une étagère peut avoir de l'énergie.", true: true, why: "Il n'a pas d'énergie cinétique, mais il a de l'énergie de position, puisqu'il est en hauteur." },
              { text: "Quand une balle tombe, son énergie de position augmente.", true: false, why: "Son altitude diminue, donc son énergie de position diminue ; c'est son énergie cinétique qui augmente." },
              { text: "Sans frottements, l'énergie mécanique d'un objet qui tombe reste constante.", true: true, why: "L'énergie de position perdue est exactement convertie en énergie cinétique." },
              { text: "Avec les frottements, de l'énergie disparaît définitivement.", true: false, why: "L'énergie totale se conserve : l'énergie mécanique perdue est convertie en énergie thermique." },
              { text: "Au sommet de sa trajectoire, une balle lancée verticalement a une vitesse nulle.", true: true, why: "Toute son énergie cinétique a été convertie en énergie de position : elle s'arrête un instant avant de redescendre." },
              { text: "L'énergie de position d'un objet ne dépend pas de sa masse.", true: false, why: "Ep = m × g × h : à même hauteur, un objet deux fois plus lourd a une énergie de position deux fois plus grande." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'énergie de position d'un objet de 2 kg placé à 5 m de haut (g = 9,8 N/kg) ?",
              options: ["98 J", "10 J", "19,6 J", "49 J"],
              answer: 0,
              why: "Ep = m × g × h = 2 × 9,8 × 5 = 98 J.",
            },
            {
              q: "Lors de la descente d'un toboggan, quelle conversion d'énergie se produit principalement ?",
              options: ["Énergie cinétique → énergie de position", "Énergie de position → énergie cinétique", "Énergie électrique → énergie cinétique", "Énergie chimique → énergie de position"],
              answer: 1,
              why: "L'enfant perd de l'altitude et gagne de la vitesse : l'énergie de position se convertit en énergie cinétique (et un peu en chaleur).",
            },
            {
              q: "L'énergie mécanique d'un objet est égale à :",
              options: ["Ec × Ep", "Ec - Ep", "Ec + Ep", "Ep ÷ Ec"],
              answer: 2,
              why: "L'énergie mécanique est la somme de l'énergie cinétique et de l'énergie de position.",
            },
            {
              q: "Pourquoi un pendule finit-il par s'arrêter ?",
              options: ["Parce que l'attraction de la Terre disparaît", "Parce que sa masse diminue à chaque oscillation", "Parce que son énergie de position devient infinie", "Parce que les frottements convertissent son énergie mécanique en énergie thermique"],
              answer: 3,
              why: "À chaque oscillation, les frottements avec l'air et au point d'attache dissipent un peu d'énergie mécanique sous forme thermique.",
            },
            {
              q: "Dans une centrale hydroélectrique, l'eau retenue derrière le barrage possède surtout :",
              options: ["de l'énergie nucléaire", "de l'énergie de position", "de l'énergie lumineuse"],
              answer: 1,
              why: "L'eau est stockée en altitude : elle possède de l'énergie de position, convertie en énergie cinétique puis électrique.",
            },
          ],
          trap: "Penser que l'énergie mécanique se conserve toujours : elle ne se conserve qu'en l'absence de frottements. C'est l'énergie totale qui se conserve toujours, l'énergie mécanique perdue devenant de l'énergie thermique.",
          method: "Pour décrire un mouvement, faites un petit tableau avec trois lignes (départ, point intermédiaire, arrivée) et trois colonnes (altitude, vitesse, énergies) : quand l'altitude baisse, Ep baisse ; quand la vitesse augmente, Ec augmente. Vérifiez ensuite que la somme Ec + Ep reste la même s'il n'y a pas de frottements.",
        },
      ],
    },
    /* ==================================================================== */
    /* PUISSANCE ET ÉNERGIE ÉLECTRIQUES                                       */
    /* ==================================================================== */
    {
      id: 'electricite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-ohm',
          title: "La loi d'Ohm et la résistance",
          minutes: 30,
          objectives: [
            "Mesurer une tension, une intensité et une résistance avec les appareils adaptés.",
            "Exploiter la loi d'Ohm U = R × I pour calculer une tension, une intensité ou une résistance.",
            "Exploiter la caractéristique d'un conducteur ohmique.",
          ],
          course: [
            {
              heading: "Le conducteur ohmique et sa résistance",
              paragraphs: [
                "Un conducteur ohmique, souvent appelé simplement « résistance », est un dipôle qui s'oppose plus ou moins au passage du courant électrique. Placé en série dans un circuit, il diminue l'intensité du courant : c'est ainsi qu'on protège une DEL ou qu'on règle l'éclairage d'une lampe.",
                "Cette propriété est mesurée par une grandeur, la résistance, notée R, qui s'exprime en ohms (symbole Ω). Plus la résistance est grande, plus le dipôle s'oppose au passage du courant. On mesure une résistance avec un ohmmètre (un multimètre réglé sur Ω), branché aux bornes du dipôle retiré du circuit : on ne mesure jamais une résistance dans un circuit alimenté.",
              ],
              box: { label: "Repère", text: "Résistance R en ohms (Ω), mesurée à l'ohmmètre hors circuit. 1 kΩ = 1 000 Ω." },
            },
            {
              heading: "Rappel des mesures électriques",
              paragraphs: [
                "La tension U, en volts (V), se mesure avec un voltmètre branché en dérivation aux bornes du dipôle, en utilisant les bornes V et COM. L'intensité I, en ampères (A), se mesure avec un ampèremètre branché en série dans le circuit, en utilisant les bornes A (ou mA) et COM.",
                "On rencontre souvent des intensités en milliampères : 1 mA = 0,001 A, donc 25 mA = 0,025 A. Avant d'utiliser une formule, on convertit toujours l'intensité en ampères.",
              ],
            },
            {
              heading: "La loi d'Ohm",
              paragraphs: [
                "Si l'on mesure la tension U aux bornes d'un conducteur ohmique pour différentes intensités I du courant qui le traverse, on constate que U est proportionnelle à I. Le coefficient de proportionnalité est la résistance R : c'est la loi d'Ohm, du nom du physicien allemand Georg Ohm.",
                "La loi d'Ohm permet de calculer l'une des trois grandeurs connaissant les deux autres : U = R × I, I = U ÷ R et R = U ÷ I. Exemple : une résistance de 100 Ω traversée par un courant de 0,2 A a une tension à ses bornes U = 100 × 0,2 = 20 V.",
              ],
              box: { label: "Formule", text: "Loi d'Ohm : U = R × I, avec U en volts (V), R en ohms (Ω) et I en ampères (A). On en déduit I = U ÷ R et R = U ÷ I." },
            },
            {
              heading: "La caractéristique d'un conducteur ohmique",
              paragraphs: [
                "La caractéristique d'un dipôle est le graphique représentant la tension U à ses bornes en fonction de l'intensité I qui le traverse. Pour un conducteur ohmique, c'est une droite qui passe par l'origine, ce qui traduit la proportionnalité entre U et I.",
                "Pour trouver R à partir de la caractéristique, on choisit un point de la droite, on lit ses coordonnées (I ; U) et on calcule R = U ÷ I. Une lampe ou une DEL ne sont pas des conducteurs ohmiques : leur caractéristique n'est pas une droite passant par l'origine, et la loi d'Ohm ne s'applique pas à elles. Un conducteur ohmique traversé par un courant chauffe : c'est l'effet Joule, utilisé dans les radiateurs et les grille-pain.",
              ],
            },
          ],
          keyPoints: [
            "La résistance R s'exprime en ohms (Ω) et se mesure à l'ohmmètre, dipôle hors circuit.",
            "Voltmètre en dérivation (bornes V et COM), ampèremètre en série (bornes A et COM).",
            "Loi d'Ohm : U = R × I, donc I = U ÷ R et R = U ÷ I.",
            "Convertir les mA en A (diviser par 1 000) et les kΩ en Ω (multiplier par 1 000).",
            "La caractéristique d'un conducteur ohmique est une droite passant par l'origine.",
          ],
          example: {
            statement: "Une résistance de 220 Ω est traversée par un courant d'intensité 30 mA. Calculer la tension à ses bornes.",
            solution: [
              "On utilise la loi d'Ohm : U = R × I.",
              "Conversion : I = 30 mA = 30 ÷ 1 000 = 0,030 A.",
              "Calcul : U = 220 × 0,030 = 6,6 V.",
              "Conclusion : la tension aux bornes de la résistance est de 6,6 V.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez la grandeur manquante dans chaque cas : a) R = 100 Ω et I = 0,05 A : U = ? b) U = 12 V et R = 40 Ω : I = ? c) U = 4,5 V et I = 15 mA : R = ?",
              hint: "Choisissez la bonne forme de la loi d'Ohm (U = R × I, I = U ÷ R ou R = U ÷ I) et convertissez les mA en A.",
              solution: [
                "a) U = R × I = 100 × 0,05 = 5 V.",
                "b) I = U ÷ R = 12 ÷ 40 = 0,3 A.",
                "c) I = 15 mA = 0,015 A, donc R = U ÷ I = 4,5 ÷ 0,015 = 300 Ω.",
                "Résultats : 5 V ; 0,3 A ; 300 Ω.",
              ],
            },
            {
              level: 2,
              statement: "On mesure la tension aux bornes d'un dipôle pour plusieurs intensités : I = 0 mA → U = 0 V ; I = 10 mA → U = 0,47 V ; I = 20 mA → U = 0,94 V ; I = 30 mA → U = 1,41 V ; I = 40 mA → U = 1,88 V. 1) Ce dipôle est-il un conducteur ohmique ? Justifiez. 2) Calculez sa résistance. 3) Quelle tension mesurerait-on pour I = 50 mA ?",
              hint: "Convertissez les intensités en ampères et calculez le quotient U ÷ I pour chaque mesure : s'il est constant, U est proportionnelle à I.",
              solution: [
                "1) En ampères : 0,010 ; 0,020 ; 0,030 ; 0,040 A. Quotients U ÷ I : 0,47 ÷ 0,010 = 47 ; 0,94 ÷ 0,020 = 47 ; 1,41 ÷ 0,030 = 47 ; 1,88 ÷ 0,040 = 47.",
                "Le quotient est constant (et U = 0 pour I = 0) : U est proportionnelle à I, la caractéristique est une droite passant par l'origine. C'est un conducteur ohmique.",
                "2) R = 47 Ω.",
                "3) U = R × I = 47 × 0,050 = 2,35 V.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Une élève veut alimenter une DEL avec un générateur de tension 9 V. Pour fonctionner sans être détruite, la DEL doit avoir une tension de 2 V à ses bornes et être traversée par un courant d'au plus 20 mA. Elle place une résistance en série avec la DEL. 1) D'après la loi d'additivité des tensions dans un circuit en série, quelle doit être la tension aux bornes de la résistance ? 2) Calculez la résistance nécessaire pour avoir exactement 20 mA. 3) Elle dispose de résistances de 220 Ω, 330 Ω et 390 Ω. En gardant 7 V aux bornes de la résistance, calculez l'intensité obtenue avec chacune, puis indiquez celle qu'elle doit choisir. Arrondissez au dixième de mA.",
              hint: "Dans un circuit série, la tension du générateur se partage entre les dipôles : U générateur = U DEL + U résistance. Utilisez ensuite I = U ÷ R.",
              solution: [
                "1) U résistance = 9 - 2 = 7 V.",
                "2) R = U ÷ I = 7 ÷ 0,020 = 350 Ω.",
                "3) Avec 220 Ω : I = 7 ÷ 220 ≈ 0,0318 A = 31,8 mA. Avec 330 Ω : I = 7 ÷ 330 ≈ 0,0212 A = 21,2 mA. Avec 390 Ω : I = 7 ÷ 390 ≈ 0,0179 A = 17,9 mA.",
                "Seule la résistance de 390 Ω donne une intensité inférieure à 20 mA ; les deux autres dépasseraient la valeur maximale.",
                "Conclusion : elle doit choisir la résistance de 390 Ω.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque grandeur électrique à son unité et à sa mesure.",
            pairs: [
              { left: "Tension U", right: "En volts (V), voltmètre en dérivation" },
              { left: "Intensité I", right: "En ampères (A), ampèremètre en série" },
              { left: "Résistance R", right: "En ohms (Ω), ohmmètre hors circuit" },
              { left: "Loi d'Ohm", right: "U = R × I" },
              { left: "Caractéristique d'un conducteur ohmique", right: "Une droite passant par l'origine" },
              { left: "Effet Joule", right: "Un conducteur traversé par un courant chauffe" },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de la résistance électrique ?",
              options: ["Le volt (V)", "L'ampère (A)", "Le watt (W)", "L'ohm (Ω)"],
              answer: 3,
              why: "La résistance s'exprime en ohms, symbole Ω.",
            },
            {
              q: "Une résistance de 50 Ω est traversée par un courant de 0,2 A. Quelle est la tension à ses bornes ?",
              options: ["10 V", "250 V", "0,004 V", "50,2 V"],
              answer: 0,
              why: "U = R × I = 50 × 0,2 = 10 V.",
            },
            {
              q: "Comment branche-t-on un ampèremètre ?",
              options: ["En dérivation aux bornes du dipôle", "Hors circuit, sur le dipôle seul", "En série dans le circuit", "Directement aux bornes du générateur"],
              answer: 2,
              why: "L'ampèremètre mesure le courant qui le traverse : il doit être placé en série, dans la boucle du circuit.",
            },
            {
              q: "Une résistance a une tension de 6 V à ses bornes et est traversée par 20 mA. Que vaut R ?",
              options: ["0,3 Ω", "300 Ω", "120 Ω", "3 Ω"],
              answer: 1,
              why: "On convertit : 20 mA = 0,020 A. R = U ÷ I = 6 ÷ 0,020 = 300 Ω.",
            },
            {
              q: "La loi d'Ohm s'applique :",
              options: ["aux conducteurs ohmiques", "à tous les dipôles, y compris les DEL", "uniquement aux lampes à incandescence", "uniquement aux générateurs"],
              answer: 0,
              why: "Seuls les conducteurs ohmiques ont une tension proportionnelle à l'intensité. Une DEL ou une lampe ne suivent pas cette loi.",
            },
          ],
          trap: "Oublier de convertir les milliampères en ampères : avec I = 20 mA et U = 6 V, écrire R = 6 ÷ 20 = 0,3 Ω au lieu de R = 6 ÷ 0,020 = 300 Ω.",
          method: "Pour retenir les trois formes de la loi d'Ohm, partez toujours de U = R × I et isolez la grandeur cherchée comme dans une équation. Contrôlez l'ordre de grandeur : en classe, les résistances valent souvent de quelques dizaines à quelques milliers d'ohms, et les intensités quelques milliampères à quelques centaines de milliampères.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'puissance-electrique',
          title: "La puissance électrique : P = U × I",
          minutes: 30,
          objectives: [
            "Interpréter la puissance nominale indiquée sur un appareil électrique.",
            "Calculer une puissance, une tension ou une intensité avec la relation P = U × I.",
            "Expliquer le rôle d'un fusible ou d'un disjoncteur et repérer un risque de surintensité.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la puissance électrique ?",
              paragraphs: [
                "Les appareils électriques portent une plaque signalétique avec deux indications : la tension nominale, en volts, et la puissance nominale, en watts (W). Par exemple « 230 V, 2 000 W » sur une bouilloire. La tension nominale est la tension sous laquelle l'appareil fonctionne normalement ; en France, le secteur fournit une tension alternative de 230 V.",
                "La puissance indique la quantité d'énergie que l'appareil convertit chaque seconde. Une bouilloire de 2 000 W chauffe l'eau beaucoup plus vite qu'un chauffe-biberon de 200 W, car elle convertit dix fois plus d'énergie électrique par seconde. On utilise aussi le kilowatt : 1 kW = 1 000 W.",
              ],
              box: { label: "Définition", text: "La puissance nominale d'un appareil, en watts (W), est la puissance qu'il reçoit lorsqu'il fonctionne sous sa tension nominale. 1 kW = 1 000 W." },
            },
            {
              heading: "La relation P = U × I",
              paragraphs: [
                "La puissance électrique reçue par un appareil est égale au produit de la tension à ses bornes par l'intensité du courant qui le traverse : P = U × I. Avec U en volts et I en ampères, on obtient P en watts. Cette relation est valable pour les appareils de chauffage et les lampes ; elle donne un bon ordre de grandeur pour les autres appareils domestiques.",
                "On peut en déduire l'intensité qui traverse un appareil : I = P ÷ U. Une bouilloire de 2 300 W branchée sur le secteur à 230 V est traversée par un courant d'intensité I = 2 300 ÷ 230 = 10 A. Plus l'appareil est puissant, plus l'intensité du courant qui le traverse est grande.",
              ],
              box: { label: "Formule", text: "P = U × I, avec P en watts (W), U en volts (V) et I en ampères (A). On en déduit I = P ÷ U et U = P ÷ I." },
            },
            {
              heading: "Plusieurs appareils sur une même ligne",
              paragraphs: [
                "Dans une habitation, les appareils sont branchés en dérivation : ils reçoivent tous la tension de 230 V. L'intensité du courant dans le fil principal est la somme des intensités qui traversent chaque appareil ; de même, la puissance totale est la somme des puissances des appareils en fonctionnement.",
                "Si l'on branche trop d'appareils puissants sur la même multiprise, l'intensité totale devient très grande : c'est une surintensité. Les fils chauffent par effet Joule et peuvent provoquer un incendie. Une multiprise porte donc une indication de puissance ou d'intensité maximale à ne pas dépasser, par exemple 16 A, soit 16 × 230 = 3 680 W.",
              ],
            },
            {
              heading: "Les protections : fusible et disjoncteur",
              paragraphs: [
                "Pour éviter les surintensités, chaque circuit d'une habitation est protégé par un fusible ou par un disjoncteur placé dans le tableau électrique. Le fusible contient un fil qui fond et ouvre le circuit si l'intensité dépasse sa valeur maximale ; le disjoncteur coupe le courant automatiquement et peut être réenclenché une fois le problème réglé.",
                "Exemple : un circuit protégé par un disjoncteur de 16 A supporte au plus 16 × 230 = 3 680 W. Si l'on y fait fonctionner en même temps un radiateur de 2 000 W et un fer à repasser de 2 400 W, la puissance totale (4 400 W) donne I = 4 400 ÷ 230 ≈ 19,1 A : le disjoncteur coupe le circuit.",
              ],
              box: { label: "À retenir", text: "Puissance totale = somme des puissances. Si I totale = P totale ÷ U dépasse l'intensité maximale du fusible ou du disjoncteur, le circuit est coupé pour éviter l'échauffement des fils." },
            },
          ],
          keyPoints: [
            "La puissance s'exprime en watts (W) ; 1 kW = 1 000 W.",
            "P = U × I, donc I = P ÷ U.",
            "La tension du secteur en France est de 230 V (alternative).",
            "Les puissances des appareils branchés en même temps s'additionnent, comme les intensités.",
            "Fusibles et disjoncteurs coupent le circuit en cas de surintensité.",
          ],
          example: {
            statement: "Un four de puissance 2 760 W est branché sur le secteur (230 V). Calculer l'intensité du courant qui le traverse. Peut-il fonctionner sur un circuit protégé par un disjoncteur de 10 A ?",
            solution: [
              "On utilise P = U × I, donc I = P ÷ U.",
              "Calcul : I = 2 760 ÷ 230 = 12 A.",
              "Comparaison : 12 A > 10 A.",
              "Conclusion : le four est traversé par un courant de 12 A ; sur un circuit protégé à 10 A, le disjoncteur couperait le courant. Il faut un circuit protégé par un disjoncteur d'au moins 16 A.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Une lampe de vélo fonctionne sous 6 V et est traversée par un courant de 0,5 A. Calculez sa puissance. 2) Un aspirateur de 1 150 W est branché sur le secteur (230 V). Calculez l'intensité du courant qui le traverse. 3) Exprimez 2,5 kW en watts.",
              hint: "Utilisez P = U × I pour la question 1 et I = P ÷ U pour la question 2. 1 kW = 1 000 W.",
              solution: [
                "1) P = U × I = 6 × 0,5 = 3 W.",
                "2) I = P ÷ U = 1 150 ÷ 230 = 5 A.",
                "3) 2,5 kW = 2,5 × 1 000 = 2 500 W.",
                "Résultats : 3 W ; 5 A ; 2 500 W.",
              ],
            },
            {
              level: 2,
              statement: "Sur une multiprise marquée « 16 A maximum », on branche en même temps un radiateur de 2 000 W, une bouilloire de 2 200 W et une télévision de 100 W, tous alimentés en 230 V. 1) Calculez la puissance totale. 2) Calculez l'intensité totale du courant dans le câble de la multiprise (arrondir au dixième). 3) Ce branchement est-il sans danger ? Que conseillez-vous ?",
              hint: "Les appareils sont en dérivation : additionnez les puissances, puis utilisez I = P ÷ U.",
              solution: [
                "1) P totale = 2 000 + 2 200 + 100 = 4 300 W.",
                "2) I = 4 300 ÷ 230 ≈ 18,7 A.",
                "3) 18,7 A > 16 A : il y a surintensité, le câble risque de chauffer dangereusement.",
                "Conseil : ne pas faire fonctionner le radiateur et la bouilloire en même temps sur cette multiprise. Sans le radiateur, I = 2 300 ÷ 230 = 10 A, ce qui est acceptable.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Le circuit des prises de la cuisine d'un appartement est protégé par un disjoncteur de 20 A. On y branche un four de 2 500 W, un micro-ondes de 1 200 W et un lave-vaisselle de 1 800 W, tous en 230 V. 1) Calculez l'intensité du courant qui traverse chaque appareil (arrondir au dixième). 2) Que se passe-t-il si les trois appareils fonctionnent en même temps ? Justifiez par un calcul. 3) Quels appareils peut-on faire fonctionner ensemble deux par deux sans que le disjoncteur se déclenche ? 4) Expliquez pourquoi une surintensité est dangereuse.",
              hint: "Les intensités, comme les puissances, s'additionnent pour des appareils en dérivation. Comparez chaque total à 20 A.",
              solution: [
                "1) Four : 2 500 ÷ 230 ≈ 10,9 A. Micro-ondes : 1 200 ÷ 230 ≈ 5,2 A. Lave-vaisselle : 1 800 ÷ 230 ≈ 7,8 A.",
                "2) P totale = 2 500 + 1 200 + 1 800 = 5 500 W, donc I = 5 500 ÷ 230 ≈ 23,9 A. Comme 23,9 A > 20 A, le disjoncteur coupe le circuit.",
                "3) Four et micro-ondes : 3 700 W, I ≈ 16,1 A. Four et lave-vaisselle : 4 300 W, I ≈ 18,7 A. Micro-ondes et lave-vaisselle : 3 000 W, I ≈ 13,0 A. Les trois paires donnent moins de 20 A : on peut faire fonctionner n'importe quels deux appareils ensemble, mais pas les trois.",
                "4) Une intensité trop grande fait chauffer les fils par effet Joule : la gaine isolante peut fondre et provoquer un court-circuit ou un incendie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La puissance électrique à la maison.",
            statements: [
              { text: "La puissance électrique s'exprime en watts.", true: true, why: "Le watt (W) est l'unité de puissance ; on utilise aussi le kilowatt (1 kW = 1 000 W)." },
              { text: "Un appareil de 2 000 W convertit plus d'énergie par seconde qu'un appareil de 500 W.", true: true, why: "La puissance indique l'énergie convertie chaque seconde : 2 000 W, c'est quatre fois plus que 500 W." },
              { text: "Plus un appareil est puissant, plus l'intensité du courant qui le traverse est faible.", true: false, why: "Sous la même tension de 230 V, I = P ÷ U : l'intensité augmente avec la puissance." },
              { text: "On peut brancher autant d'appareils qu'on veut sur une multiprise.", true: false, why: "Les intensités s'additionnent : au-delà de l'intensité maximale, il y a surintensité et risque d'incendie." },
              { text: "Un disjoncteur coupe le courant en cas de surintensité.", true: true, why: "C'est son rôle : il protège les fils contre l'échauffement." },
              { text: "La tension du secteur en France est de 12 V.", true: false, why: "Le secteur fournit une tension alternative de 230 V ; 12 V est la tension d'une batterie de voiture." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la puissance d'un appareil fonctionnant sous 230 V et traversé par un courant de 2 A ?",
              options: ["115 W", "460 W", "232 W", "0,009 W"],
              answer: 1,
              why: "P = U × I = 230 × 2 = 460 W.",
            },
            {
              q: "Quelle intensité traverse un radiateur de 1 610 W branché sur le secteur (230 V) ?",
              options: ["0,14 A", "1 380 A", "7 A", "70 A"],
              answer: 2,
              why: "I = P ÷ U = 1 610 ÷ 230 = 7 A.",
            },
            {
              q: "Que valent 3,5 kW en watts ?",
              options: ["3 500 W", "350 W", "0,0035 W", "35 W"],
              answer: 0,
              why: "1 kW = 1 000 W, donc 3,5 kW = 3,5 × 1 000 = 3 500 W.",
            },
            {
              q: "Pourquoi une surintensité est-elle dangereuse ?",
              options: ["Parce que la tension du secteur augmente brusquement", "Parce que les appareils consomment moins d'énergie", "Parce que le courant change de sens", "Parce que les fils chauffent et peuvent provoquer un incendie"],
              answer: 3,
              why: "Une intensité trop grande fait chauffer les fils par effet Joule, ce qui peut faire fondre les isolants.",
            },
            {
              q: "Deux appareils de 1 000 W et 1 300 W fonctionnent ensemble sur le secteur. Quelle est l'intensité totale ?",
              options: ["2 300 A", "1 A", "10 A", "4,3 A"],
              answer: 2,
              why: "Puissance totale : 2 300 W, donc I = 2 300 ÷ 230 = 10 A.",
            },
          ],
          trap: "Confondre la puissance (en W) et l'énergie (en J ou en kWh), ou croire qu'un appareil plus puissant est traversé par un courant plus faible : sous 230 V, plus la puissance est grande, plus l'intensité est grande.",
          method: "Lisez la plaque signalétique comme une donnée d'énoncé : notez U et P, puis calculez I = P ÷ U. Dans un problème de multiprise ou de disjoncteur, additionnez d'abord les puissances, calculez l'intensité totale, puis comparez-la à l'intensité maximale en écrivant clairement l'inégalité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'energie-electrique',
          title: "L'énergie électrique : E = P × t et la facture",
          minutes: 35,
          objectives: [
            "Calculer l'énergie électrique transférée à un appareil avec la relation E = P × t.",
            "Exprimer une énergie en joules, en wattheures et en kilowattheures et passer d'une unité à l'autre.",
            "Calculer le coût d'une consommation électrique à partir d'une facture ou d'un relevé de compteur.",
          ],
          course: [
            {
              heading: "Énergie et puissance",
              paragraphs: [
                "L'énergie électrique E reçue par un appareil dépend de sa puissance P et de sa durée de fonctionnement t : E = P × t. Une lampe de 10 W allumée pendant 2 heures reçoit autant d'énergie qu'une lampe de 20 W allumée pendant 1 heure. La puissance dit à quel rythme l'énergie est convertie, l'énergie dit combien a été convertie au total.",
                "Une analogie : la puissance est comme le débit d'un robinet (litres par minute) et l'énergie comme la quantité d'eau recueillie dans la baignoire. Un robinet à petit débit ouvert longtemps peut remplir autant qu'un robinet à grand débit ouvert peu de temps.",
              ],
              box: { label: "Formule", text: "E = P × t. Si P est en watts (W) et t en secondes (s), E est en joules (J). Si P est en watts et t en heures (h), E est en wattheures (Wh). Si P est en kilowatts (kW) et t en heures, E est en kilowattheures (kWh)." },
            },
            {
              heading: "Joule, wattheure et kilowattheure",
              paragraphs: [
                "Le joule est l'unité légale de l'énergie, mais c'est une très petite unité pour l'électricité domestique. On utilise donc le wattheure (Wh), énergie reçue par un appareil de 1 W pendant 1 h, et surtout le kilowattheure (kWh), énergie reçue par un appareil de 1 kW pendant 1 h.",
                "Comme 1 h = 3 600 s, on a 1 Wh = 1 W × 3 600 s = 3 600 J. Comme 1 kWh = 1 000 Wh, on a 1 kWh = 3 600 000 J = 3,6 × 10⁶ J. Pour convertir des kWh en joules, on multiplie par 3,6 × 10⁶ ; pour convertir des joules en kWh, on divise par 3,6 × 10⁶.",
              ],
              box: { label: "À retenir", text: "1 Wh = 3 600 J et 1 kWh = 1 000 Wh = 3,6 × 10⁶ J. Pensez aux durées : 30 min = 0,5 h ; 15 min = 0,25 h ; 1 h = 3 600 s." },
            },
            {
              heading: "Le compteur et la facture",
              paragraphs: [
                "Le compteur électrique d'un logement mesure l'énergie électrique consommée, en kWh. Pour connaître la consommation sur une période, on fait la différence entre deux relevés (deux index) : si le compteur affiche 15 230 kWh le 1er mars et 15 530 kWh le 1er avril, la consommation de mars est de 15 530 - 15 230 = 300 kWh.",
                "Le fournisseur fait payer chaque kWh consommé à un prix fixé par le contrat, auquel s'ajoutent un abonnement et des taxes. Le coût de l'énergie se calcule par : coût = énergie consommée (en kWh) × prix d'un kWh. Avec un prix de 0,25 € par kWh, par exemple, 300 kWh coûtent 300 × 0,25 = 75 €.",
              ],
              box: { label: "Formule", text: "Coût = E (en kWh) × prix d'un kWh (en €/kWh)." },
            },
            {
              heading: "Économiser l'énergie",
              paragraphs: [
                "Pour réduire sa consommation, on peut agir sur la puissance (choisir des lampes à DEL plutôt que des lampes à incandescence, des appareils mieux classés sur l'étiquette énergie) et sur la durée (éteindre les lumières en quittant une pièce, ne pas laisser les appareils en veille, baisser le chauffage d'un degré).",
                "Un appareil en veille consomme peu à chaque instant, mais il fonctionne 24 heures sur 24 : sur une année, soit 24 × 365 = 8 760 heures, la consommation devient importante. Additionnées sur tous les appareils d'une maison, les veilles représentent une dépense que l'on peut éviter.",
              ],
            },
          ],
          keyPoints: [
            "E = P × t : W et s donnent des J ; kW et h donnent des kWh.",
            "1 Wh = 3 600 J ; 1 kWh = 3,6 × 10⁶ J.",
            "Le compteur mesure l'énergie en kWh : consommation = index final - index initial.",
            "Coût = énergie en kWh × prix d'un kWh.",
            "Pour économiser : réduire la puissance des appareils ou leur durée de fonctionnement.",
          ],
          example: {
            statement: "Un radiateur de 1 500 W fonctionne 4 heures par jour pendant 30 jours. Calculer l'énergie consommée en kWh et son coût, avec un prix de 0,25 € par kWh.",
            solution: [
              "Conversion de la puissance : P = 1 500 W = 1,5 kW.",
              "Durée totale : t = 4 × 30 = 120 h.",
              "Énergie : E = P × t = 1,5 × 120 = 180 kWh.",
              "Coût : 180 × 0,25 = 45 €.",
              "Conclusion : le radiateur consomme 180 kWh en un mois, ce qui coûte 45 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une lampe de 10 W reste allumée pendant 5 heures. 1) Calculez l'énergie reçue en Wh, puis en kWh. 2) Exprimez cette énergie en joules.",
              hint: "Avec P en W et t en h, E = P × t est en Wh. Puis 1 kWh = 1 000 Wh et 1 Wh = 3 600 J.",
              solution: [
                "1) E = 10 × 5 = 50 Wh, soit 50 ÷ 1 000 = 0,05 kWh.",
                "2) E = 50 × 3 600 = 180 000 J, soit 1,8 × 10⁵ J.",
                "Vérification par une autre méthode : E = 10 W × (5 × 3 600 s) = 10 × 18 000 = 180 000 J.",
              ],
            },
            {
              level: 2,
              statement: "Une lampe à incandescence de 60 W et une lampe à DEL de 8 W éclairent autant l'une que l'autre. Chacune fonctionne pendant 1 000 heures. Le prix du kWh est de 0,25 €. 1) Calculez l'énergie consommée par chaque lampe en kWh. 2) Calculez le coût pour chaque lampe. 3) Quelle économie réalise-t-on en choisissant la lampe à DEL ?",
              hint: "Convertissez les puissances en kW (diviser par 1 000) avant d'appliquer E = P × t avec t en heures.",
              solution: [
                "1) Lampe à incandescence : E = 0,060 × 1 000 = 60 kWh. Lampe à DEL : E = 0,008 × 1 000 = 8 kWh.",
                "2) Coûts : 60 × 0,25 = 15 € et 8 × 0,25 = 2 €.",
                "3) Économie : 15 - 2 = 13 €.",
                "Conclusion : sur 1 000 heures, la lampe à DEL fait économiser 52 kWh, soit 13 €.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Une famille relève son compteur : 12 345 kWh le 1er janvier et 12 645 kWh le 1er février. Le prix du kWh est de 0,25 € (abonnement non compris). 1) Calculez l'énergie consommée en janvier et son coût. 2) Leur box internet a une puissance de 10 W et reste branchée en permanence. Calculez l'énergie qu'elle consomme en une année de 365 jours, en kWh, puis le coût correspondant. 3) Exprimez la consommation de janvier en joules. 4) Proposez deux gestes pour réduire la facture.",
              hint: "La consommation est la différence entre les deux index. Pour la box, la durée est 24 × 365 heures et la puissance doit être convertie en kW.",
              solution: [
                "1) E = 12 645 - 12 345 = 300 kWh. Coût : 300 × 0,25 = 75 €.",
                "2) Durée : 24 × 365 = 8 760 h. P = 10 W = 0,010 kW. E = 0,010 × 8 760 = 87,6 kWh. Coût : 87,6 × 0,25 = 21,90 €.",
                "3) 300 kWh = 300 × 3,6 × 10⁶ J = 1,08 × 10⁹ J.",
                "4) Par exemple : éteindre la box et les appareils en veille quand on ne s'en sert pas (la nuit, pendant les vacances), et remplacer les lampes à incandescence par des lampes à DEL.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour calculer le coût d'utilisation d'un appareil.",
            items: [
              "Relever la puissance de l'appareil sur sa plaque signalétique",
              "Convertir la puissance en kilowatts",
              "Exprimer la durée de fonctionnement en heures",
              "Calculer l'énergie avec E = P × t, en kWh",
              "Multiplier l'énergie par le prix d'un kWh",
              "Conclure par une phrase avec le coût en euros",
            ],
          },
          quiz: [
            {
              q: "Quelle énergie consomme un appareil de 2 kW qui fonctionne pendant 3 h ?",
              options: ["0,67 kWh", "5 kWh", "6 kWh", "6 000 kWh"],
              answer: 2,
              why: "E = P × t = 2 kW × 3 h = 6 kWh.",
            },
            {
              q: "À combien de joules correspond 1 kWh ?",
              options: ["1 000 J", "3,6 × 10⁶ J", "3 600 J", "60 000 J"],
              answer: 1,
              why: "1 kWh = 1 000 W × 3 600 s = 3 600 000 J = 3,6 × 10⁶ J.",
            },
            {
              q: "Une lampe de 60 W est allumée 30 minutes. Quelle énergie consomme-t-elle ?",
              options: ["1 800 Wh", "120 Wh", "2 Wh", "30 Wh"],
              answer: 3,
              why: "30 min = 0,5 h, donc E = 60 × 0,5 = 30 Wh. L'erreur courante est de multiplier par 30 au lieu de 0,5.",
            },
            {
              q: "Le compteur passe de 8 400 kWh à 8 650 kWh. Avec un kWh à 0,20 €, quel est le coût de l'énergie consommée ?",
              options: ["50 €", "250 €", "1 730 €", "5 €"],
              answer: 0,
              why: "Consommation : 8 650 - 8 400 = 250 kWh. Coût : 250 × 0,20 = 50 €.",
            },
            {
              q: "Que mesure un compteur électrique domestique ?",
              options: ["La puissance de chaque appareil, en W", "L'énergie électrique consommée, en kWh", "L'intensité maximale, en A", "La tension du secteur, en V"],
              answer: 1,
              why: "Le compteur totalise l'énergie consommée par le logement, en kilowattheures ; c'est elle qui est facturée.",
            },
          ],
          trap: "Mélanger les unités dans E = P × t : multiplier des watts par des minutes, ou des watts par des heures en croyant obtenir des kWh. Il faut des kW et des heures pour obtenir des kWh, et 30 min s'écrit 0,5 h, pas 0,30 h.",
          method: "Avant de calculer, écrivez sur une ligne les unités que vous allez utiliser (« P en kW, t en h, donc E en kWh ») et convertissez les données en conséquence. Vérifiez ensuite le coût obtenu : une facture mensuelle de foyer se compte en dizaines ou centaines d'euros, pas en milliers.",
        },
      ],
    },
    /* ==================================================================== */
    /* SIGNAUX LUMINEUX ET SONORES                                            */
    /* ==================================================================== */
    {
      id: 'signaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'signaux-lumineux',
          title: "La lumière : propagation, vitesse et année-lumière",
          minutes: 30,
          objectives: [
            "Distinguer une source primaire de lumière d'un objet diffusant.",
            "Décrire la propagation rectiligne de la lumière et la modéliser par un rayon lumineux.",
            "Utiliser la vitesse de la lumière et la relation d = v × t pour calculer une distance ou une durée.",
            "Définir l'année-lumière et l'utiliser comme unité de distance.",
          ],
          course: [
            {
              heading: "Sources de lumière et objets diffusants",
              paragraphs: [
                "Une source primaire de lumière produit elle-même la lumière qu'elle émet : le Soleil et les autres étoiles, une flamme, une lampe allumée, un écran. Un objet diffusant ne produit pas de lumière : il renvoie dans toutes les directions une partie de la lumière qu'il reçoit. La Lune, les planètes, un livre ou un visage sont des objets diffusants.",
                "Pour qu'un objet soit vu, il faut que de la lumière venant de lui entre dans l'oeil. Dans une pièce totalement obscure, on ne voit pas les objets diffusants, car ils ne reçoivent aucune lumière à renvoyer. La Lune brille la nuit parce qu'elle diffuse la lumière du Soleil.",
              ],
              box: { label: "Définition", text: "Source primaire : objet qui produit la lumière qu'il émet (Soleil, flamme, lampe). Objet diffusant : objet qui renvoie dans toutes les directions la lumière qu'il reçoit (Lune, livre)." },
            },
            {
              heading: "La propagation rectiligne de la lumière",
              paragraphs: [
                "Dans un milieu transparent et homogène (dont les propriétés sont les mêmes en tout point, comme l'air calme, l'eau ou le verre), la lumière se propage en ligne droite : c'est la propagation rectiligne. On la met en évidence avec un faisceau laser rendu visible par un peu de fumée, ou en observant les rayons du Soleil qui passent à travers les nuages.",
                "On modélise le trajet de la lumière par un rayon lumineux : une droite munie d'une flèche qui indique le sens de propagation. La propagation rectiligne explique la formation des ombres et les éclipses. Contrairement au son, la lumière se propage aussi dans le vide : c'est ainsi que la lumière du Soleil et des étoiles nous parvient à travers l'espace.",
              ],
            },
            {
              heading: "La vitesse de la lumière",
              paragraphs: [
                "Dans le vide, la lumière se propage à la vitesse c = 299 792 458 m/s, que l'on arrondit à 3,00 × 10⁸ m/s, soit 300 000 km/s. Dans l'air, sa vitesse est pratiquement la même. Elle est plus faible dans les milieux transparents comme l'eau (environ 2,25 × 10⁸ m/s) ou le verre (environ 2 × 10⁸ m/s). Rien ne se déplace plus vite que la lumière dans le vide.",
                "Pour calculer une distance ou une durée de parcours, on utilise la relation d = v × t, avec d en mètres, v en m/s et t en secondes. Par exemple, la lumière du Soleil parcourt les 1,5 × 10¹¹ m qui nous séparent de lui en t = d ÷ v = 1,5 × 10¹¹ ÷ 3,00 × 10⁸ = 500 s, soit 8 min 20 s.",
              ],
              box: { label: "Formule", text: "c ≈ 3,00 × 10⁸ m/s dans le vide (et dans l'air). d = v × t, donc t = d ÷ v et v = d ÷ t (d en m, t en s, v en m/s)." },
            },
            {
              heading: "L'année-lumière",
              paragraphs: [
                "Les distances entre les étoiles sont si grandes que le kilomètre n'est pas pratique. Les astronomes utilisent l'année-lumière (symbole al) : c'est la distance parcourue par la lumière dans le vide en une année. Calcul : 1 al = 3,00 × 10⁸ m/s × (365,25 × 24 × 3 600) s ≈ 9,46 × 10¹⁵ m, soit environ 9 460 milliards de kilomètres. Attention : malgré son nom, l'année-lumière est une distance, pas une durée.",
                "L'étoile la plus proche du Soleil, Proxima du Centaure, est à environ 4,2 al : sa lumière met donc environ 4,2 ans pour nous parvenir. La galaxie d'Andromède est à environ 2,5 millions d'années-lumière. Regarder loin, c'est donc regarder dans le passé : on voit les astres tels qu'ils étaient quand leur lumière est partie.",
              ],
              box: { label: "À retenir", text: "1 année-lumière (al) = distance parcourue par la lumière dans le vide en un an ≈ 9,46 × 10¹⁵ m. C'est une unité de distance." },
            },
          ],
          keyPoints: [
            "Source primaire : produit sa lumière ; objet diffusant : renvoie la lumière reçue.",
            "Dans un milieu transparent et homogène, la lumière se propage en ligne droite.",
            "La lumière se propage dans le vide à c ≈ 3,00 × 10⁸ m/s.",
            "d = v × t, avec d en m, v en m/s et t en s.",
            "1 al ≈ 9,46 × 10¹⁵ m : c'est une distance, pas une durée.",
          ],
          example: {
            statement: "La Lune est à environ 3,84 × 10⁸ m de la Terre. Combien de temps la lumière qu'elle diffuse met-elle pour nous parvenir ? On prend c = 3,00 × 10⁸ m/s.",
            solution: [
              "On utilise d = v × t, donc t = d ÷ v.",
              "Les données sont en mètres et en mètres par seconde : t sera en secondes.",
              "Calcul : t = 3,84 × 10⁸ ÷ 3,00 × 10⁸ = 1,28 s.",
              "Conclusion : la lumière de la Lune met environ 1,28 s pour arriver jusqu'à nous ; nous voyons la Lune telle qu'elle était 1,28 s plus tôt.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez en sources primaires et objets diffusants : le Soleil, la Lune, une bougie allumée, un miroir, une planète, un écran de téléphone allumé, une feuille de papier, une étoile.",
              hint: "Demandez-vous si l'objet produit lui-même de la lumière ou s'il renvoie seulement celle qu'il reçoit.",
              solution: [
                "Sources primaires : le Soleil, la bougie allumée, l'écran de téléphone allumé, l'étoile.",
                "Objets diffusants (ou qui renvoient la lumière) : la Lune, la planète, la feuille de papier et le miroir (le miroir renvoie la lumière dans une direction précise, on dit qu'il la réfléchit).",
                "Il y a quatre sources primaires ; les quatre autres objets ne produisent pas de lumière.",
              ],
            },
            {
              level: 2,
              statement: "L'étoile Sirius est située à environ 8,6 années-lumière de la Terre. 1) Que signifie cette indication ? 2) Exprimez cette distance en mètres, sachant que 1 al ≈ 9,46 × 10¹⁵ m (deux chiffres significatifs). 3) Quand la lumière de Sirius que l'on observe ce soir a-t-elle quitté l'étoile ?",
              hint: "L'année-lumière est une distance : multipliez le nombre d'années-lumière par la valeur d'une année-lumière en mètres.",
              solution: [
                "1) La lumière émise par Sirius met environ 8,6 années pour parcourir la distance qui nous sépare de cette étoile.",
                "2) d = 8,6 × 9,46 × 10¹⁵ ≈ 8,1 × 10¹⁶ m.",
                "3) La lumière observée ce soir a quitté Sirius il y a environ 8,6 ans : on voit l'étoile telle qu'elle était il y a 8,6 ans.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Des astronomes envoient une brève impulsion laser vers un réflecteur déposé sur la Lune par une mission spatiale. La lumière fait l'aller-retour en 2,56 s. On prend c = 3,00 × 10⁸ m/s. 1) Pourquoi la lumière du laser peut-elle atteindre la Lune alors qu'il n'y a pas d'air dans l'espace ? 2) Quelle durée met la lumière pour faire l'aller simple ? 3) Calculez la distance Terre-Lune en mètres, puis en kilomètres. 4) Pourrait-on mesurer cette distance de la même façon avec un signal sonore ? Justifiez.",
              hint: "La durée mesurée correspond à un aller-retour : la distance Terre-Lune est parcourue deux fois.",
              solution: [
                "1) La lumière se propage aussi dans le vide : elle n'a pas besoin de matière pour se déplacer.",
                "2) Aller simple : 2,56 ÷ 2 = 1,28 s.",
                "3) d = c × t = 3,00 × 10⁸ × 1,28 = 3,84 × 10⁸ m, soit 3,84 × 10⁵ km (384 000 km).",
                "4) Non : le son ne se propage pas dans le vide, il ne pourrait pas traverser l'espace entre la Terre et la Lune.",
                "Conclusion : la distance Terre-Lune est d'environ 384 000 km.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion sur la lumière à sa définition ou à sa valeur.",
            pairs: [
              { left: "Source primaire", right: "Objet qui produit lui-même la lumière qu'il émet" },
              { left: "Objet diffusant", right: "Objet qui renvoie dans toutes les directions la lumière reçue" },
              { left: "Rayon lumineux", right: "Droite fléchée modélisant le trajet de la lumière" },
              { left: "Vitesse de la lumière dans le vide", right: "Environ 3,00 × 10⁸ m/s" },
              { left: "Année-lumière", right: "Distance parcourue par la lumière en un an, environ 9,46 × 10¹⁵ m" },
              { left: "Milieu homogène et transparent", right: "Milieu où la lumière se propage en ligne droite" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces objets est une source primaire de lumière ?",
              options: ["Le Soleil", "La Lune", "Une planète", "Un écran éteint"],
              answer: 0,
              why: "Le Soleil produit sa propre lumière. La Lune et les planètes renvoient la lumière du Soleil.",
            },
            {
              q: "L'année-lumière est une unité de :",
              options: ["durée", "vitesse", "luminosité", "distance"],
              answer: 3,
              why: "C'est la distance parcourue par la lumière dans le vide en une année, environ 9,46 × 10¹⁵ m.",
            },
            {
              q: "Quelle est la vitesse de la lumière dans le vide ?",
              options: ["340 m/s", "Environ 3,00 × 10⁸ m/s", "Environ 3,00 × 10⁵ m/s", "Elle est infinie"],
              answer: 1,
              why: "c ≈ 3,00 × 10⁸ m/s, soit 300 000 km/s. 340 m/s est la vitesse du son dans l'air.",
            },
            {
              q: "Combien de temps met la lumière pour parcourir 6,0 × 10⁸ m ?",
              options: ["0,5 s", "18 s", "2,0 s", "1,8 s"],
              answer: 2,
              why: "t = d ÷ c = 6,0 × 10⁸ ÷ 3,00 × 10⁸ = 2,0 s.",
            },
            {
              q: "Pourquoi voit-on une étoile lointaine telle qu'elle était dans le passé ?",
              options: ["Parce que sa lumière a mis du temps pour nous parvenir", "Parce que la lumière ralentit dans le vide", "Parce que les étoiles n'émettent de la lumière que la nuit", "Parce que l'oeil réagit avec retard"],
              answer: 0,
              why: "La lumière voyage à une vitesse finie : celle d'une étoile située à 100 al a mis 100 ans pour arriver jusqu'à nous.",
            },
          ],
          trap: "Croire que l'année-lumière est une durée, ou oublier de diviser par 2 la durée d'un aller-retour dans les mesures par réflexion (laser, radar).",
          method: "Dans tout calcul de propagation, écrivez la relation d = v × t, isolez la grandeur cherchée, puis vérifiez les unités (m, s, m/s). Lisez l'énoncé deux fois pour repérer les mots « aller-retour » ou « écho » : ils signalent qu'il faut diviser la distance parcourue par 2.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'signaux-sonores',
          title: "Le son : propagation, vitesse et fréquence",
          minutes: 30,
          objectives: [
            "Décrire la production d'un son et expliquer pourquoi il a besoin d'un milieu matériel pour se propager.",
            "Utiliser la vitesse du son dans différents milieux pour calculer une distance ou une durée.",
            "Calculer la fréquence d'un son périodique et situer un son parmi les infrasons, les sons audibles et les ultrasons.",
          ],
          course: [
            {
              heading: "La production et la propagation du son",
              paragraphs: [
                "Un son est produit par un objet qui vibre : la membrane d'un haut-parleur, les cordes d'une guitare, les cordes vocales. Cette vibration se transmet de proche en proche aux particules du milieu qui l'entoure (l'air, l'eau, un solide), comme une poussée qui se propage dans une file de dominos, jusqu'à atteindre l'oreille, dont le tympan se met à vibrer à son tour.",
                "Le son a donc besoin d'un milieu matériel pour se propager. Dans le vide, il n'y a pas de matière pour transmettre la vibration : le son ne se propage pas. Si l'on place un réveil qui sonne sous une cloche dont on retire l'air, on l'entend de moins en moins. Dans l'espace, deux astronautes ne peuvent pas s'entendre directement, sans radio.",
              ],
              box: { label: "À retenir", text: "Le son est une vibration qui se propage de proche en proche dans un milieu matériel (solide, liquide ou gaz). Il ne se propage pas dans le vide." },
            },
            {
              heading: "La vitesse du son",
              paragraphs: [
                "Le son se propage beaucoup moins vite que la lumière. Dans l'air, sa vitesse est d'environ 340 m/s (elle dépend un peu de la température). Elle est plus grande dans les liquides, environ 1 500 m/s dans l'eau, et encore plus dans les solides : plusieurs milliers de mètres par seconde, environ 5 000 à 6 000 m/s dans l'acier.",
                "Lors d'un orage, l'éclair et le tonnerre sont produits en même temps, mais on voit l'éclair presque instantanément, alors que le son du tonnerre arrive plus tard. En mesurant la durée Δt entre l'éclair et le tonnerre, on peut estimer la distance de l'orage : d = 340 × Δt. Il faut environ 3 secondes au son pour parcourir 1 km.",
              ],
              box: { label: "Repère", text: "Vitesse du son : environ 340 m/s dans l'air, 1 500 m/s dans l'eau, 5 000 à 6 000 m/s dans l'acier. On utilise toujours d = v × t." },
            },
            {
              heading: "La fréquence d'un son",
              paragraphs: [
                "Un son musical est un signal périodique : le même motif de vibration se répète régulièrement. La durée d'un motif est la période T, en secondes. La fréquence f est le nombre de vibrations par seconde ; elle s'exprime en hertz (Hz) et se calcule par f = 1 ÷ T. Un son de période T = 0,002 s a une fréquence f = 1 ÷ 0,002 = 500 Hz.",
                "Plus la fréquence est élevée, plus le son est aigu ; plus elle est faible, plus le son est grave. On visualise un signal sonore avec un microphone relié à un oscilloscope ou à un ordinateur : on mesure la durée de plusieurs motifs et on divise par leur nombre pour obtenir une période précise.",
              ],
              box: { label: "Formule", text: "f = 1 ÷ T, avec f en hertz (Hz) et T en secondes (s). 1 kHz = 1 000 Hz ; 1 ms = 0,001 s." },
            },
            {
              heading: "Ce que l'oreille entend",
              paragraphs: [
                "L'oreille humaine perçoit les sons dont la fréquence est comprise entre environ 20 Hz et 20 000 Hz : ce sont les sons audibles. Cette plage se réduit avec l'âge, surtout du côté des aigus. Les sons de fréquence inférieure à 20 Hz sont des infrasons (émis par exemple lors de séismes, et utilisés par les éléphants pour communiquer). Ceux de fréquence supérieure à 20 000 Hz sont des ultrasons (utilisés par les chauves-souris et les dauphins, et dans l'échographie et le sonar).",
                "Le niveau d'intensité sonore se mesure avec un sonomètre, en décibels (dB). Une exposition prolongée à partir de 80 à 85 dB peut abîmer l'audition, et le seuil de douleur est atteint vers 120 dB. Les lésions de l'oreille interne sont irréversibles : il faut limiter le volume des écouteurs et porter des protections lors des concerts.",
              ],
            },
          ],
          keyPoints: [
            "Un son est produit par un objet qui vibre et se propage dans un milieu matériel, jamais dans le vide.",
            "Vitesse du son : environ 340 m/s dans l'air, 1 500 m/s dans l'eau, plus encore dans les solides.",
            "f = 1 ÷ T : fréquence en Hz, période en s.",
            "Sons audibles : de 20 Hz à 20 000 Hz ; infrasons en dessous, ultrasons au-dessus.",
            "Un son aigu a une fréquence élevée, un son grave une fréquence faible.",
          ],
          example: {
            statement: "Pendant un orage, une élève compte 6 secondes entre l'éclair et le coup de tonnerre. À quelle distance se trouve l'orage ? On prend v = 340 m/s pour le son dans l'air.",
            solution: [
              "La lumière de l'éclair arrive presque instantanément : la durée mesurée est celle du trajet du son.",
              "On utilise d = v × t.",
              "Calcul : d = 340 × 6 = 2 040 m.",
              "Conclusion : l'orage se trouve à environ 2 040 m, soit à peu près 2 km.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Un son a une période T = 2 ms. Calculez sa fréquence. Est-il audible ? 2) Un autre son a une fréquence de 50 000 Hz. Comment l'appelle-t-on ? 3) Un son de 15 Hz est-il audible par l'être humain ?",
              hint: "Convertissez la période en secondes (1 ms = 0,001 s), puis utilisez f = 1 ÷ T. Comparez aux bornes 20 Hz et 20 000 Hz.",
              solution: [
                "1) T = 2 ms = 0,002 s, donc f = 1 ÷ 0,002 = 500 Hz. Comme 20 Hz < 500 Hz < 20 000 Hz, ce son est audible.",
                "2) 50 000 Hz > 20 000 Hz : c'est un ultrason.",
                "3) 15 Hz < 20 Hz : c'est un infrason, il n'est pas audible par l'être humain.",
              ],
            },
            {
              level: 2,
              statement: "En montagne, un randonneur crie face à une paroi rocheuse et entend l'écho de sa voix 3,0 s plus tard. La vitesse du son dans l'air est de 340 m/s. 1) Quel trajet le son a-t-il parcouru pendant ces 3,0 s ? 2) Calculez la distance entre le randonneur et la paroi. 3) Combien de temps faudrait-il pour entendre l'écho si la paroi était à 170 m ?",
              hint: "Le son fait l'aller jusqu'à la paroi puis le retour : la distance parcourue est le double de la distance cherchée.",
              solution: [
                "1) Le son est allé jusqu'à la paroi, s'y est réfléchi et est revenu : il a fait un aller-retour.",
                "2) Distance parcourue : 340 × 3,0 = 1 020 m. Distance à la paroi : 1 020 ÷ 2 = 510 m.",
                "3) Aller-retour : 2 × 170 = 340 m. Durée : t = 340 ÷ 340 = 1,0 s.",
                "Conclusion : la paroi est à 510 m ; à 170 m, l'écho reviendrait en 1,0 s.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Un bateau de pêche utilise un sonar pour repérer les fonds marins. L'émetteur envoie des ondes sonores vers le fond ; elles s'y réfléchissent et reviennent vers un récepteur placé sous la coque. Données : vitesse du son dans l'eau de mer v = 1 500 m/s. 1) Sur l'écran relié au récepteur, 5 périodes du signal émis durent 0,125 ms. Calculez la période puis la fréquence du signal. S'agit-il d'un son audible ? 2) L'écho revient 0,080 s après l'émission. Calculez la profondeur du fond. 3) Un banc de poissons provoque un écho au bout de 0,020 s. À quelle profondeur se trouve-t-il ? 4) Pourquoi ne pourrait-on pas utiliser ce dispositif dans le vide ?",
              hint: "Divisez la durée de plusieurs motifs par leur nombre pour obtenir la période, convertissez-la en secondes, puis f = 1 ÷ T. Pour la profondeur, pensez à l'aller-retour.",
              solution: [
                "1) T = 0,125 ÷ 5 = 0,025 ms = 2,5 × 10⁻⁵ s. f = 1 ÷ (2,5 × 10⁻⁵) = 40 000 Hz. Comme 40 000 Hz > 20 000 Hz, ce sont des ultrasons, inaudibles pour l'être humain.",
                "2) Distance aller-retour : 1 500 × 0,080 = 120 m. Profondeur : 120 ÷ 2 = 60 m.",
                "3) Distance aller-retour : 1 500 × 0,020 = 30 m. Profondeur du banc : 30 ÷ 2 = 15 m.",
                "4) Les ondes sonores ont besoin d'un milieu matériel pour se propager : dans le vide, elles ne se propagent pas.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ce que vous savez du son.",
            statements: [
              { text: "Le son se propage dans le vide.", true: false, why: "Le son a besoin de matière pour transmettre la vibration : il ne se propage pas dans le vide." },
              { text: "Le son va plus vite dans l'eau que dans l'air.", true: true, why: "Environ 1 500 m/s dans l'eau contre 340 m/s dans l'air." },
              { text: "Un son de 1 000 Hz est plus aigu qu'un son de 200 Hz.", true: true, why: "Plus la fréquence est élevée, plus le son est aigu." },
              { text: "Les ultrasons sont des sons très forts.", true: false, why: "Les ultrasons sont des sons de fréquence supérieure à 20 000 Hz ; cela n'a rien à voir avec leur niveau sonore." },
              { text: "On voit l'éclair avant d'entendre le tonnerre parce que la lumière va beaucoup plus vite que le son.", true: true, why: "La lumière arrive presque instantanément, le son met environ 3 s par kilomètre." },
              { text: "L'oreille humaine entend les sons de 5 Hz.", true: false, why: "5 Hz est un infrason : l'oreille humaine perçoit les sons à partir d'environ 20 Hz." },
              { text: "Une exposition prolongée à un niveau sonore élevé peut abîmer définitivement l'audition.", true: true, why: "Les cellules de l'oreille interne détruites ne se régénèrent pas." },
            ],
          },
          quiz: [
            {
              q: "Dans quel milieu le son ne peut-il pas se propager ?",
              options: ["L'eau", "Le vide", "L'acier", "L'air"],
              answer: 1,
              why: "Le son est une vibration de la matière : sans matière, dans le vide, il ne se propage pas.",
            },
            {
              q: "Quelle est la fréquence d'un son de période 0,01 s ?",
              options: ["100 Hz", "0,01 Hz", "10 Hz", "1 000 Hz"],
              answer: 0,
              why: "f = 1 ÷ T = 1 ÷ 0,01 = 100 Hz.",
            },
            {
              q: "Un son de 30 000 Hz est :",
              options: ["un infrason", "un son audible très grave", "un ultrason", "un son audible très aigu"],
              answer: 2,
              why: "Au-dessus de 20 000 Hz, ce n'est plus audible pour l'être humain : c'est un ultrason.",
            },
            {
              q: "On entend le tonnerre 9 s après l'éclair. L'orage est à environ :",
              options: ["340 m", "9 km", "37,8 m", "3 km"],
              answer: 3,
              why: "d = 340 × 9 = 3 060 m, soit environ 3 km.",
            },
            {
              q: "Quel appareil mesure le niveau d'intensité sonore ?",
              options: ["Le sonomètre", "L'ampèremètre", "Le dynamomètre"],
              answer: 0,
              why: "Le sonomètre mesure le niveau d'intensité sonore en décibels (dB).",
            },
          ],
          trap: "Confondre la fréquence (grave ou aigu, en Hz) et le niveau sonore (faible ou fort, en dB), ou oublier de diviser par 2 la distance dans un calcul d'écho.",
          method: "Faites un petit schéma de la situation (émetteur, obstacle, récepteur) et tracez le trajet du son avec des flèches : si le son revient à son point de départ, il a parcouru deux fois la distance cherchée. Pour une période lue sur un graphique, mesurez toujours plusieurs motifs pour être plus précis.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'communiquer-signaux',
          title: "Émettre et recevoir des signaux pour communiquer",
          minutes: 30,
          objectives: [
            "Identifier l'émetteur, le récepteur et le milieu de propagation dans une chaîne de transmission d'information.",
            "Comprendre que le son et la lumière permettent d'émettre et de transporter un signal, donc une information.",
            "Calculer la durée de transmission d'un signal avec la relation d = v × t.",
          ],
          course: [
            {
              heading: "Signal et information",
              paragraphs: [
                "Communiquer, c'est transmettre une information d'un endroit à un autre. Pour cela, on utilise un signal, c'est-à-dire un phénomène physique qui se propage et que l'on peut faire varier : un son, une lumière, une onde radio. Un feu tricolore transmet une information par la couleur de sa lumière ; une sirène de pompiers, par un son reconnaissable.",
                "Toute transmission suit la même chaîne : un émetteur produit le signal et y inscrit l'information (on dit qu'il la code), le signal se propage dans un milieu (air, eau, fibre de verre, vide), puis un récepteur capte le signal et en extrait l'information (il la décode). Quand vous parlez à un ami, vos cordes vocales sont l'émetteur, l'air le milieu de propagation et son oreille le récepteur.",
              ],
              box: { label: "À retenir", text: "Chaîne de transmission : information → émetteur (codage) → signal qui se propage dans un milieu → récepteur (décodage) → information." },
            },
            {
              heading: "Communiquer avec la lumière",
              paragraphs: [
                "La lumière transmet des informations depuis très longtemps : signaux de fumée, phares pour guider les navires, et dès la fin du XVIIIe siècle le télégraphe optique de Claude Chappe, dont les bras articulés, observés à la longue-vue de tour en tour, codaient des messages. Aujourd'hui, la télécommande d'un téléviseur envoie des impulsions de lumière infrarouge, invisible pour l'oeil, captées par un récepteur placé sur l'appareil.",
                "Les fibres optiques sont de fins fils de verre dans lesquels la lumière est guidée par des réflexions successives sur les parois, même quand la fibre est courbée. Les informations y sont codées en impulsions lumineuses très brèves (lumière allumée ou éteinte, soit 1 ou 0 en code binaire). Dans le verre, la lumière se propage à environ 2 × 10⁸ m/s, ce qui permet de transporter d'énormes quantités de données à travers les océans en une fraction de seconde.",
              ],
            },
            {
              heading: "Communiquer avec le son et les ondes radio",
              paragraphs: [
                "Le son sert à communiquer à courte distance : la voix, la musique, les alarmes. Les ultrasons sont utilisés pour « voir » sans lumière : le sonar des bateaux et l'échographie médicale émettent des ultrasons et analysent leurs échos pour construire une image. Les dauphins et les chauves-souris utilisent le même principe, l'écholocation.",
                "Les ondes radio, comme la lumière, sont des ondes électromagnétiques : elles se propagent dans l'air et dans le vide à environ 3,00 × 10⁸ m/s, sans avoir besoin de matière. Elles sont utilisées par la radio, la télévision, les téléphones portables, le Wi-Fi et le système de localisation par satellites (GPS), dont le récepteur calcule sa distance aux satellites à partir de la durée de trajet de leurs signaux.",
              ],
              box: { label: "Repère", text: "Son : besoin d'un milieu matériel, environ 340 m/s dans l'air. Lumière et ondes radio : se propagent aussi dans le vide, à environ 3,00 × 10⁸ m/s." },
            },
            {
              heading: "Choisir le bon signal",
              paragraphs: [
                "Le choix du signal dépend de la situation. Pour communiquer avec un satellite ou une sonde spatiale, on ne peut pas utiliser le son, qui ne traverse pas le vide : on utilise des ondes radio. Sous l'eau, les ondes radio et la lumière sont vite absorbées, alors que le son porte loin : les sous-marins et les bateaux utilisent des ondes sonores.",
                "La durée de transmission se calcule toujours avec t = d ÷ v. Un signal radio envoyé vers un satellite situé à 36 000 km d'altitude et renvoyé vers le sol parcourt 72 000 km, soit 7,2 × 10⁷ m : il met t = 7,2 × 10⁷ ÷ 3,00 × 10⁸ = 0,24 s. C'est ce léger décalage que l'on remarque parfois lors des liaisons par satellite.",
              ],
            },
          ],
          keyPoints: [
            "Un signal est un phénomène physique (son, lumière, onde radio) qui transporte une information.",
            "Chaîne : émetteur (codage) → milieu de propagation → récepteur (décodage).",
            "Le son a besoin d'un milieu matériel ; la lumière et les ondes radio se propagent aussi dans le vide.",
            "Fibre optique : la lumière y est guidée par réflexions et code l'information en impulsions.",
            "Durée de transmission : t = d ÷ v.",
          ],
          example: {
            statement: "Un câble à fibre optique de 6 000 km relie deux continents sous l'océan. La lumière s'y propage à 2,0 × 10⁸ m/s. Combien de temps met un signal pour parcourir ce câble ?",
            solution: [
              "On convertit la distance en mètres : 6 000 km = 6 000 000 m = 6,0 × 10⁶ m.",
              "On utilise d = v × t, donc t = d ÷ v.",
              "Calcul : t = 6,0 × 10⁶ ÷ 2,0 × 10⁸ = 0,030 s.",
              "Conclusion : le signal traverse l'océan en 0,030 s, soit 30 millisecondes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, nommez l'émetteur, le récepteur, le type de signal et le milieu de propagation : a) une conversation entre deux élèves dans la cour ; b) la télécommande qui allume un téléviseur ; c) un auditeur qui écoute une station de radio sur son poste.",
              hint: "Cherchez qui produit le signal, qui le capte, et de quelle nature il est (son, lumière visible ou infrarouge, onde radio).",
              solution: [
                "a) Émetteur : les cordes vocales de l'élève qui parle. Récepteur : l'oreille de l'autre élève. Signal : sonore. Milieu : l'air.",
                "b) Émetteur : la diode de la télécommande. Récepteur : le capteur infrarouge du téléviseur. Signal : lumineux (infrarouge). Milieu : l'air.",
                "c) Émetteur : l'antenne de la station de radio. Récepteur : l'antenne du poste de radio. Signal : onde radio. Milieu : l'air.",
              ],
            },
            {
              level: 2,
              statement: "Deux villes sont reliées de deux façons : par un câble à fibre optique de 3 000 km, dans lequel la lumière va à 2,0 × 10⁸ m/s, et par un satellite situé à 36 000 km d'altitude (le signal radio monte jusqu'au satellite puis redescend, soit environ 72 000 km au total, à 3,00 × 10⁸ m/s). 1) Calculez la durée de transmission par la fibre. 2) Calculez la durée de transmission par le satellite. 3) Quelle liaison est la plus rapide ? Expliquez ce résultat alors que la lumière est plus lente dans le verre.",
              hint: "Convertissez les distances en mètres et appliquez t = d ÷ v dans chaque cas.",
              solution: [
                "1) d = 3 000 km = 3,0 × 10⁶ m. t = 3,0 × 10⁶ ÷ 2,0 × 10⁸ = 0,015 s.",
                "2) d = 72 000 km = 7,2 × 10⁷ m. t = 7,2 × 10⁷ ÷ 3,00 × 10⁸ = 0,24 s.",
                "3) La fibre est 16 fois plus rapide (0,24 ÷ 0,015 = 16). Même si la lumière va moins vite dans le verre, le trajet par satellite est 24 fois plus long, ce qui l'emporte.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Un récepteur GPS reçoit un signal émis par un satellite. Le signal a mis 0,070 s pour lui parvenir. Données : les signaux GPS sont des ondes électromagnétiques qui se propagent à 3,00 × 10⁸ m/s. 1) Identifiez l'émetteur, le récepteur et le milieu de propagation (en grande partie). 2) Calculez la distance entre le satellite et le récepteur, en mètres puis en kilomètres. 3) Pourquoi le satellite ne pourrait-il pas utiliser un signal sonore ? 4) Le récepteur GPS reçoit en même temps les signaux de plusieurs satellites. À quoi cela lui sert-il ?",
              hint: "Utilisez d = v × t avec t en secondes. Pour la dernière question, pensez à ce qu'apporte la connaissance de plusieurs distances.",
              solution: [
                "1) Émetteur : le satellite. Récepteur : le boîtier GPS (ou le téléphone). Milieu : surtout le vide de l'espace, puis l'atmosphère.",
                "2) d = v × t = 3,00 × 10⁸ × 0,070 = 2,1 × 10⁷ m, soit 21 000 km.",
                "3) Le son ne se propage pas dans le vide : il ne pourrait pas traverser l'espace entre le satellite et la Terre.",
                "4) En connaissant sa distance à plusieurs satellites dont la position est connue, le récepteur peut calculer sa propre position.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la transmission d'un message par fibre optique.",
            items: [
              "L'expéditeur rédige un message sur son ordinateur",
              "L'émetteur code le message en impulsions lumineuses",
              "La lumière est guidée dans la fibre par réflexions successives",
              "Le récepteur capte les impulsions lumineuses",
              "Le récepteur décode les impulsions pour retrouver le message",
              "Le destinataire lit le message sur son écran",
            ],
          },
          quiz: [
            {
              q: "Dans une conversation téléphonique par portable, quel signal relie le téléphone à l'antenne relais ?",
              options: ["Un signal sonore", "Un signal ultrasonore", "Un signal infrarouge", "Une onde radio"],
              answer: 3,
              why: "Les téléphones portables communiquent avec les antennes relais par ondes radio, qui sont des ondes électromagnétiques.",
            },
            {
              q: "Quel est le rôle du récepteur dans une chaîne de transmission ?",
              options: ["Produire le signal", "Propager le signal", "Capter le signal et en extraire l'information", "Amplifier la vitesse du signal"],
              answer: 2,
              why: "Le récepteur capte le signal puis le décode pour retrouver l'information transmise.",
            },
            {
              q: "Pourquoi communique-t-on avec les sondes spatiales par ondes radio et non par le son ?",
              options: ["Parce que le son ne se propage pas dans le vide", "Parce que le son est trop rapide", "Parce que les ondes radio ont besoin d'air", "Parce que le son est trop aigu"],
              answer: 0,
              why: "Le son a besoin d'un milieu matériel ; les ondes radio, comme la lumière, se propagent dans le vide.",
            },
            {
              q: "Dans une fibre optique, la lumière est guidée par :",
              options: ["la gravitation", "des réflexions successives sur les parois", "le courant électrique qui la pousse", "des ultrasons"],
              answer: 1,
              why: "La lumière se réfléchit sur les parois de la fibre et suit ainsi ses courbes.",
            },
            {
              q: "Quel appareil utilise des ultrasons pour former une image ?",
              options: ["La télécommande", "Le téléphone portable", "L'échographe", "La radio FM"],
              answer: 2,
              why: "L'échographe émet des ultrasons et analyse leurs échos sur les organes pour construire une image.",
            },
          ],
          trap: "Croire que les ondes radio sont des sons parce qu'on entend la radio : l'onde radio transporte l'information jusqu'au poste, qui la convertit ensuite en son grâce à son haut-parleur.",
          method: "Pour analyser une situation de communication, remplissez toujours le même tableau à quatre cases : émetteur, signal (nature), milieu de propagation, récepteur. Vérifiez ensuite la cohérence : un signal sonore ne peut jamais traverser le vide.",
        },
      ],
    },
    /* ==================================================================== */
    /* PRÉPARER LE BREVET                                                     */
    /* ==================================================================== */
    {
      id: 'preparer-brevet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'exploiter-documents',
          title: "Extraire et exploiter des informations de documents",
          minutes: 30,
          objectives: [
            "Extraire une information utile d'un texte, d'un tableau, d'un graphique ou d'un schéma.",
            "Exploiter des informations en les reliant à ses connaissances pour répondre à une question.",
            "Rédiger une réponse justifiée en citant le document utilisé.",
          ],
          course: [
            {
              heading: "Les documents d'un sujet de sciences",
              paragraphs: [
                "Au brevet, les exercices de physique-chimie s'appuient presque toujours sur des documents : un texte qui présente une situation, un tableau de valeurs, un graphique, un schéma d'expérience ou de circuit, une photographie, une étiquette d'appareil. Toutes les données nécessaires ne sont pas dans les questions : il faut aller les chercher dans les documents.",
                "Avant de répondre, parcourez chaque document en entier : son titre, sa légende, les unités, les notes en bas de document. Une unité oubliée (des mA au lieu de A, des km au lieu de m) suffit à fausser un calcul. Repérez aussi les informations inutiles : un sujet peut en contenir pour vérifier que vous savez trier.",
              ],
            },
            {
              heading: "Lire un tableau et un graphique",
              paragraphs: [
                "Pour un tableau, repérez ce que représentent les lignes et les colonnes, et les unités. Pour un graphique, lisez d'abord le nom et l'unité de chaque axe : en abscisse (axe horizontal) se trouve la grandeur que l'on fait varier, en ordonnée (axe vertical) celle que l'on mesure. Repérez ensuite l'échelle : combien vaut un carreau sur chaque axe ?",
                "Pour lire une valeur, partez de la valeur connue sur un axe, montez ou décalez-vous jusqu'à la courbe, puis rejoignez l'autre axe, en traçant de fins pointillés. Interprétez aussi la forme de la courbe : une droite passant par l'origine traduit une situation de proportionnalité (comme U = R × I) ; une courbe qui monte de plus en plus vite traduit une grandeur qui augmente plus vite que l'autre (comme la distance de freinage en fonction de la vitesse).",
              ],
              box: { label: "Méthode", text: "Graphique : nom et unité des axes, échelle, lecture en pointillés depuis l'axe connu jusqu'à la courbe puis jusqu'à l'autre axe, interprétation de la forme de la courbe." },
            },
            {
              heading: "Extraire ou exploiter ?",
              paragraphs: [
                "Extraire une information, c'est la prélever telle qu'elle est dans le document, sans la transformer : « D'après le document 1, la vitesse du son dans l'eau est de 1 500 m/s. » Les consignes « relever », « citer », « indiquer d'après le document » demandent une extraction : on donne la valeur avec son unité et on cite le document.",
                "Exploiter une information, c'est s'en servir avec ses connaissances du cours pour répondre à une question qui ne se trouve pas directement dans le document : faire un calcul, comparer, expliquer, conclure. Il faut souvent croiser plusieurs documents : par exemple, prendre une puissance sur une étiquette (document 1), une durée dans un texte (document 2) et utiliser la formule E = P × t vue en cours.",
              ],
              box: { label: "À retenir", text: "Extraire : prélever l'information telle quelle, avec son unité, en citant le document. Exploiter : utiliser l'information avec ses connaissances pour calculer, comparer, expliquer ou conclure." },
            },
            {
              heading: "Rédiger une réponse justifiée",
              paragraphs: [
                "Une bonne réponse commence par citer sa source (« D'après le document 2... »), donne l'information ou le calcul, puis conclut par une phrase qui répond exactement à la question posée. Si la question demande de justifier, la réponse doit contenir l'argument (une valeur, une comparaison, une loi du cours) et pas seulement l'affirmation.",
                "Relisez la question après avoir rédigé : avez-vous répondu à ce qui était demandé, et à tout ce qui était demandé ? Une question qui commence par « Comparer » attend que les deux valeurs soient données et que l'on dise laquelle est la plus grande ; une question qui finit par « Conclure » attend une phrase de conclusion.",
              ],
            },
          ],
          keyPoints: [
            "Lire chaque document en entier : titre, légende, unités, notes.",
            "Graphique : axes, unités, échelle, puis lecture en pointillés.",
            "Droite passant par l'origine = situation de proportionnalité.",
            "Extraire = prélever tel quel ; exploiter = utiliser avec ses connaissances.",
            "Toujours citer le document et conclure par une phrase qui répond à la question.",
          ],
          example: {
            statement: "Document 1 : intensité de la pesanteur à la surface de quelques astres : Terre 9,8 N/kg ; Lune 1,6 N/kg ; Mars 3,7 N/kg ; Jupiter 24,8 N/kg. Document 2 : « Un robot de masse 10 kg a mesuré son poids à la surface de l'astre où il se trouve : 37 N. » Sur quel astre se trouve le robot ? Justifier.",
            solution: [
              "Extraction : d'après le document 2, m = 10 kg et P = 37 N.",
              "Connaissance du cours : P = m × g, donc g = P ÷ m.",
              "Calcul : g = 37 ÷ 10 = 3,7 N/kg.",
              "Exploitation du document 1 : la valeur 3,7 N/kg correspond à Mars.",
              "Conclusion : le robot se trouve sur Mars.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un document présente la caractéristique d'un dipôle : la tension U (en V, en ordonnée) en fonction de l'intensité I (en A, en abscisse). C'est une droite qui passe par l'origine et par le point de coordonnées I = 0,20 A et U = 10 V. 1) Extrayez la valeur de la tension pour I = 0,20 A. 2) Quelle est la nature de ce dipôle ? Justifiez. 3) Calculez sa résistance. 4) Quelle tension aurait-on pour I = 0,10 A ?",
              hint: "Une droite passant par l'origine traduit la proportionnalité entre U et I. Utilisez R = U ÷ I.",
              solution: [
                "1) D'après le document, pour I = 0,20 A, U = 10 V.",
                "2) La caractéristique est une droite passant par l'origine : U est proportionnelle à I, c'est un conducteur ohmique.",
                "3) R = U ÷ I = 10 ÷ 0,20 = 50 Ω.",
                "4) U = R × I = 50 × 0,10 = 5 V (par proportionnalité, l'intensité est divisée par 2, donc la tension aussi).",
              ],
            },
            {
              level: 2,
              statement: "Document : vitesse du son dans quelques milieux : air 340 m/s ; eau 1 500 m/s ; acier 5 900 m/s. Un ouvrier frappe d'un coup de marteau l'extrémité d'un long rail en acier de 1 020 m. À l'autre extrémité, une personne qui a l'oreille collée au rail entend deux sons successifs. 1) Expliquez pourquoi elle entend deux sons. 2) Calculez la durée de propagation du son dans l'acier, puis dans l'air (arrondir au millième de seconde si nécessaire). 3) Quelle durée sépare les deux sons ?",
              hint: "Le même son arrive par deux chemins, le rail et l'air, à des vitesses différentes. Utilisez t = d ÷ v pour chacun.",
              solution: [
                "1) Le son se propage à la fois dans le rail et dans l'air. D'après le document, il va beaucoup plus vite dans l'acier : il arrive donc d'abord par le rail, puis par l'air.",
                "2) Dans l'acier : t = 1 020 ÷ 5 900 ≈ 0,173 s. Dans l'air : t = 1 020 ÷ 340 = 3,000 s.",
                "3) Écart : 3,000 - 0,173 ≈ 2,83 s.",
                "Conclusion : la personne entend un premier son au bout de 0,173 s environ et un second environ 2,83 s plus tard.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Une famille hésite entre deux réfrigérateurs. Document 1 : le réfrigérateur A coûte 500 € et consomme 250 kWh par an. Document 2 : le réfrigérateur B coûte 600 € et consomme 150 kWh par an. Document 3 : prix de l'électricité retenu pour la comparaison : 0,25 € par kWh. 1) Extrayez la consommation annuelle de chaque appareil. 2) Calculez le coût annuel de l'électricité pour chaque réfrigérateur. 3) Au bout de combien d'années le surcoût d'achat du réfrigérateur B est-il compensé par ses économies d'électricité ? 4) Sachant qu'un réfrigérateur dure en général plus de dix ans, lequel conseillez-vous ? Justifiez.",
              hint: "Croisez les trois documents : consommation (documents 1 et 2) multipliée par le prix du kWh (document 3). Comparez ensuite la différence de prix d'achat à l'économie réalisée chaque année.",
              solution: [
                "1) D'après les documents 1 et 2 : A consomme 250 kWh par an, B consomme 150 kWh par an.",
                "2) Coût annuel de A : 250 × 0,25 = 62,50 €. Coût annuel de B : 150 × 0,25 = 37,50 €.",
                "3) Économie annuelle avec B : 62,50 - 37,50 = 25 €. Surcoût d'achat : 600 - 500 = 100 €. Durée : 100 ÷ 25 = 4 ans.",
                "4) Au bout de 4 ans, le surcoût est compensé ; au-delà, B fait économiser 25 € par an. Sur plus de dix ans, il revient moins cher et consomme moins d'énergie.",
                "Conclusion : on conseille le réfrigérateur B.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque consigne à ce qu'elle attend de vous.",
            pairs: [
              { left: "Relever", right: "Recopier une information du document, avec son unité" },
              { left: "Calculer", right: "Écrire la formule, remplacer, donner le résultat avec son unité" },
              { left: "Justifier", right: "Donner l'argument (valeur, loi, comparaison) qui prouve la réponse" },
              { left: "Comparer", right: "Donner les deux valeurs et dire laquelle est la plus grande" },
              { left: "Expliquer", right: "Dire pourquoi un phénomène se produit, à l'aide du cours" },
              { left: "Conclure", right: "Répondre au problème posé par une phrase finale" },
            ],
          },
          quiz: [
            {
              q: "Que signifie « extraire » une information d'un document ?",
              options: ["La transformer par un calcul", "La deviner à partir du titre", "La prélever telle qu'elle est, avec son unité", "La comparer à une autre valeur"],
              answer: 2,
              why: "Extraire, c'est relever l'information sans la modifier, en citant le document et en donnant l'unité.",
            },
            {
              q: "Sur un graphique, quelle forme traduit une situation de proportionnalité ?",
              options: ["Une droite passant par l'origine", "Une droite horizontale", "Une courbe qui monte de plus en plus vite", "Une droite qui ne passe pas par l'origine"],
              answer: 0,
              why: "Deux grandeurs proportionnelles sont représentées par une droite qui passe par l'origine du repère.",
            },
            {
              q: "Par quoi faut-il commencer pour lire un graphique ?",
              options: ["Par lire directement la valeur demandée", "Par identifier les grandeurs et les unités des axes", "Par recopier toutes les valeurs du graphique", "Par calculer la pente de la courbe"],
              answer: 1,
              why: "Sans connaître les grandeurs, les unités et l'échelle des axes, on ne peut pas lire une valeur correctement.",
            },
            {
              q: "Quelle réponse est correctement rédigée pour la question « Quelle est la vitesse du son dans l'eau ? » ?",
              options: ["1 500.", "C'est rapide.", "Elle est plus grande que dans l'air.", "D'après le document 1, elle est de 1 500 m/s."],
              answer: 3,
              why: "La bonne réponse cite le document, donne la valeur et précise l'unité.",
            },
            {
              q: "Exploiter des documents, c'est surtout :",
              options: ["recopier tous les documents dans la copie", "utiliser leurs informations avec ses connaissances pour répondre", "ne lire que le premier document", "donner son avis personnel sans argument"],
              answer: 1,
              why: "Exploiter, c'est mettre en relation les informations des documents et le cours pour calculer, expliquer ou conclure.",
            },
          ],
          trap: "Répondre de mémoire sans utiliser les documents, ou recopier une valeur sans son unité et sans citer le document : au brevet, la réponse doit montrer d'où vient l'information.",
          method: "Avant de répondre, soulignez dans la question le verbe de consigne et les grandeurs demandées, puis surlignez dans les documents les valeurs utiles avec leurs unités. Rédigez ensuite en trois temps : « D'après le document... », le calcul ou l'argument, et la phrase de conclusion.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rediger-calcul',
          title: "Rédiger un calcul : formule, conversion et unité",
          minutes: 30,
          objectives: [
            "Rédiger un calcul en écrivant la formule littérale, les données et le résultat avec son unité.",
            "Convertir les données dans les unités adaptées avant de calculer.",
            "Transformer une formule pour isoler la grandeur cherchée.",
            "Arrondir un résultat et vérifier sa vraisemblance.",
          ],
          course: [
            {
              heading: "Les étapes d'un calcul bien rédigé",
              paragraphs: [
                "Au brevet, un calcul juste mais mal présenté peut perdre des points, alors qu'un calcul bien rédigé montre au correcteur que vous maîtrisez la démarche. Un calcul complet suit six étapes : 1) écrire la formule littérale (avec des lettres) ; 2) relever les données avec leurs unités ; 3) convertir si nécessaire ; 4) remplacer les lettres par les valeurs (application numérique) ; 5) donner le résultat avec son unité ; 6) conclure par une phrase.",
                "Exemple : « Calculer le poids d'un sac de 4,0 kg sur Terre. » On écrit : P = m × g ; m = 4,0 kg et g = 9,8 N/kg ; P = 4,0 × 9,8 = 39,2 N, soit environ 39 N. Le poids du sac est d'environ 39 N. Chaque ligne est courte, mais aucune étape n'est sautée.",
              ],
              box: { label: "Méthode", text: "Formule littérale ; données avec unités ; conversions ; application numérique ; résultat avec unité ; phrase de conclusion." },
            },
            {
              heading: "Transformer une formule",
              paragraphs: [
                "Une formule peut servir à calculer chacune des grandeurs qu'elle contient. On l'isole comme dans une équation : si v = d ÷ t, alors d = v × t et t = d ÷ v. De même, P = m × g donne m = P ÷ g ; U = R × I donne I = U ÷ R et R = U ÷ I ; E = P × t donne t = E ÷ P et P = E ÷ t ; P = U × I donne I = P ÷ U.",
                "Pour vérifier une transformation, remplacez par des nombres simples : avec d = 10 et t = 2, on a v = 5 ; on vérifie bien que d = v × t = 5 × 2 = 10 et t = d ÷ v = 10 ÷ 5 = 2. Écrivez toujours la formule transformée avant de remplacer par les valeurs.",
              ],
            },
            {
              heading: "Les conversions indispensables",
              paragraphs: [
                "Les formules du programme fonctionnent avec des unités précises : la masse en kg, la distance en m, la durée en s, la vitesse en m/s pour l'énergie cinétique, l'intensité en A. Les conversions les plus fréquentes : 1 km = 1 000 m ; 1 g = 0,001 kg ; 1 mA = 0,001 A ; 1 min = 60 s ; 1 h = 3 600 s ; 1 kW = 1 000 W.",
                "Pour les vitesses, on divise par 3,6 pour passer des km/h aux m/s. Pour l'énergie, 1 Wh = 3 600 J et 1 kWh = 3,6 × 10⁶ J. Pour les durées en heures, attention aux minutes : 1 h 30 min = 1,5 h et 45 min = 0,75 h (on divise les minutes par 60).",
              ],
              box: { label: "Repère", text: "km → m : × 1 000 ; g → kg : ÷ 1 000 ; mA → A : ÷ 1 000 ; h → s : × 3 600 ; min → h : ÷ 60 ; km/h → m/s : ÷ 3,6 ; kWh → J : × 3,6 × 10⁶." },
            },
            {
              heading: "Arrondir et vérifier",
              paragraphs: [
                "Le résultat affiché par la calculatrice comporte souvent trop de chiffres. On l'arrondit en gardant à peu près autant de chiffres significatifs que les données les moins précises : avec des données à deux ou trois chiffres, on donne le résultat avec deux ou trois chiffres. Pour les très grands ou très petits nombres, on utilise l'écriture scientifique, par exemple 1,98 × 10²⁰ N.",
                "Enfin, on vérifie la vraisemblance du résultat : un piéton marche à environ 1 m/s, une voiture en ville roule à environ 14 m/s, un objet de 1 kg pèse environ 10 N sur Terre. Une vitesse de 3 000 m/s pour un cycliste ou une masse négative signalent une erreur de conversion ou de formule : il faut reprendre le calcul.",
              ],
            },
          ],
          keyPoints: [
            "Six étapes : formule, données, conversions, application numérique, résultat avec unité, conclusion.",
            "Isoler la grandeur cherchée avant de remplacer : t = d ÷ v, m = P ÷ g, I = U ÷ R.",
            "Convertir avant de calculer : kg, m, s, A, et m/s pour l'énergie cinétique.",
            "1 h 30 min = 1,5 h ; 45 min = 0,75 h ; km/h ÷ 3,6 = m/s.",
            "Arrondir raisonnablement et vérifier que le résultat est vraisemblable.",
          ],
          example: {
            statement: "Un TGV parcourt 450 km en 1 h 30 min à vitesse constante. Calculer sa vitesse en km/h, puis en m/s.",
            solution: [
              "Formule : v = d ÷ t.",
              "Données : d = 450 km ; t = 1 h 30 min = 1,5 h (30 min = 30 ÷ 60 = 0,5 h).",
              "Application numérique : v = 450 ÷ 1,5 = 300 km/h.",
              "Conversion : v = 300 ÷ 3,6 ≈ 83,3 m/s.",
              "Vérification : 300 km/h est bien une vitesse plausible pour un TGV.",
              "Conclusion : le TGV roule à 300 km/h, soit environ 83 m/s.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Convertissez : a) 2,5 km en m ; b) 750 g en kg ; c) 45 min en h ; d) 72 km/h en m/s ; e) 250 mA en A ; f) 1,5 kWh en J.",
              hint: "Utilisez le tableau des conversions du cours. Pour les minutes, divisez par 60 ; pour les km/h, divisez par 3,6.",
              solution: [
                "a) 2,5 × 1 000 = 2 500 m. b) 750 ÷ 1 000 = 0,750 kg.",
                "c) 45 ÷ 60 = 0,75 h. d) 72 ÷ 3,6 = 20 m/s.",
                "e) 250 ÷ 1 000 = 0,250 A. f) 1,5 × 3,6 × 10⁶ = 5,4 × 10⁶ J.",
              ],
            },
            {
              level: 2,
              statement: "À la question « Combien de temps le son met-il pour parcourir 1,7 km dans l'air (v = 340 m/s) ? », un élève a écrit : « 1,7 ÷ 340 = 0,005. Le son met 0,005. » 1) Relevez toutes les erreurs et oublis de cette réponse. 2) Rédigez la réponse correcte.",
              hint: "Vérifiez la présence de la formule, les unités des données, la conversion et l'unité du résultat.",
              solution: [
                "1) Erreurs et oublis : la formule n'est pas écrite ; la distance n'a pas été convertie en mètres alors que la vitesse est en m/s ; le résultat n'a pas d'unité ; il est faux à cause de l'oubli de conversion.",
                "2) Formule : d = v × t, donc t = d ÷ v.",
                "Données : d = 1,7 km = 1 700 m ; v = 340 m/s.",
                "Application numérique : t = 1 700 ÷ 340 = 5 s.",
                "Conclusion : le son met 5 s pour parcourir 1,7 km dans l'air.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet. Un ascenseur, de masse totale 600 kg avec ses passagers, monte de 30 m. Son moteur a une puissance de 8,0 kW. On prend g = 9,8 N/kg. 1) Calculez le poids de l'ascenseur chargé. 2) Calculez l'énergie de position gagnée par l'ascenseur pendant la montée (Ep = m × g × h). 3) En supposant que toute l'énergie fournie par le moteur sert à monter l'ascenseur, calculez la durée minimale de la montée (arrondir à la seconde). 4) Exprimez l'énergie de la question 2 en kWh (deux chiffres significatifs). Rédigez chaque calcul complètement.",
              hint: "Pour la question 3, transformez E = P × t en t = E ÷ P, avec E en J et P en W pour obtenir t en s.",
              solution: [
                "1) Formule : P = m × g. Données : m = 600 kg ; g = 9,8 N/kg. P = 600 × 9,8 = 5 880 N. Le poids de l'ascenseur chargé est de 5 880 N.",
                "2) Formule : Ep = m × g × h. Données : h = 30 m. Ep = 600 × 9,8 × 30 = 176 400 J. L'ascenseur gagne 176 400 J, soit environ 1,8 × 10⁵ J.",
                "3) Formule : E = P × t, donc t = E ÷ P. Conversion : P = 8,0 kW = 8 000 W. t = 176 400 ÷ 8 000 = 22,05 s. La montée dure au moins 22 s environ.",
                "4) Conversion : 1 kWh = 3,6 × 10⁶ J, donc E = 176 400 ÷ 3 600 000 = 0,049 kWh. L'énergie gagnée est d'environ 0,049 kWh.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les règles d'un calcul bien rédigé.",
            statements: [
              { text: "On peut donner un résultat sans unité si le calcul est juste.", true: false, why: "Un résultat sans unité est incomplet : 5 peut être 5 s, 5 m ou 5 km, ce qui change tout." },
              { text: "45 minutes correspondent à 0,45 h.", true: false, why: "Il faut diviser par 60 : 45 min = 45 ÷ 60 = 0,75 h." },
              { text: "Pour passer de km/h à m/s, on divise par 3,6.", true: true, why: "1 km/h = 1 000 m ÷ 3 600 s, donc on divise par 3,6." },
              { text: "Si v = d ÷ t, alors t = d ÷ v.", true: true, why: "On multiplie les deux membres par t puis on divise par v : t = d ÷ v." },
              { text: "Il faut écrire la formule littérale avant de remplacer par les valeurs.", true: true, why: "La formule montre la démarche au correcteur et évite les erreurs de calcul." },
              { text: "Dans Ec = ½ × m × v², on peut garder la vitesse en km/h.", true: false, why: "Pour obtenir des joules, la vitesse doit être en m/s et la masse en kg." },
              { text: "Un cycliste qui roule à 3 000 m/s, c'est un résultat vraisemblable.", true: false, why: "Un cycliste roule à quelques m/s : un tel résultat signale une erreur de conversion." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la première étape d'un calcul bien rédigé ?",
              options: ["Écrire la formule littérale", "Taper le calcul à la calculatrice", "Donner le résultat arrondi", "Écrire la phrase de conclusion"],
              answer: 0,
              why: "On commence par la formule avec des lettres : elle montre la démarche avant tout calcul.",
            },
            {
              q: "À partir de U = R × I, comment calcule-t-on I ?",
              options: ["I = U × R", "I = R ÷ U", "I = U - R", "I = U ÷ R"],
              answer: 3,
              why: "On divise les deux membres par R : I = U ÷ R.",
            },
            {
              q: "Combien vaut 1 h 15 min en heures ?",
              options: ["1,15 h", "1,5 h", "1,25 h", "0,75 h"],
              answer: 2,
              why: "15 min = 15 ÷ 60 = 0,25 h, donc 1 h 15 min = 1,25 h.",
            },
            {
              q: "Combien vaut 108 km/h en m/s ?",
              options: ["388,8 m/s", "30 m/s", "10,8 m/s", "1,8 m/s"],
              answer: 1,
              why: "108 ÷ 3,6 = 30 m/s.",
            },
            {
              q: "La calculatrice affiche 22,0588235 s pour une durée calculée à partir de données à deux chiffres. Quel résultat écrire ?",
              options: ["22,0588235 s", "22,0588235", "20", "Environ 22 s"],
              answer: 3,
              why: "On arrondit raisonnablement selon la précision des données et on n'oublie pas l'unité.",
            },
          ],
          trap: "Remplacer directement les valeurs sans écrire la formule, ou oublier une conversion (des km avec des m/s, des minutes comptées comme des centièmes d'heure) : le résultat est alors faux d'un facteur 1 000, 60 ou 3,6.",
          method: "Avant de remplacer les lettres, regardez les unités de toutes les données : si elles ne correspondent pas à celles de la formule, convertissez d'abord sur une ligne à part. Après le calcul, demandez-vous si le résultat est vraisemblable en le comparant à un ordre de grandeur que vous connaissez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'temps-limite',
          title: "Résoudre un exercice de sciences en temps limité",
          minutes: 35,
          objectives: [
            "Organiser son temps sur une partie de physique-chimie de 30 minutes.",
            "Repérer les questions indépendantes et traiter un sujet sans rester bloqué.",
            "Mobiliser les formules et les méthodes de l'année pour résoudre un exercice complet de type brevet.",
          ],
          course: [
            {
              heading: "L'épreuve de sciences du brevet",
              paragraphs: [
                "L'épreuve de sciences du brevet dure 1 heure et porte sur deux disciplines parmi la physique-chimie, les SVT et la technologie, chacune traitée en 30 minutes. Comme on ne sait pas toujours à l'avance lesquelles tombent, il faut être prêt dans les trois. La partie de physique-chimie se compose en général d'un ou de plusieurs exercices construits autour d'un contexte (le sport, l'espace, la maison...), avec des documents et des questions.",
                "Les questions portent sur l'ensemble du programme du cycle 4 : la matière et ses transformations, les mouvements et les interactions, l'énergie, les signaux. Elles mêlent restitution de connaissances, exploitation de documents, calculs et rédaction d'explications. Lisez la consigne en tête du sujet : elle précise notamment si la calculatrice est autorisée.",
              ],
            },
            {
              heading: "Gérer ses 30 minutes",
              paragraphs: [
                "Commencez par environ 3 minutes de lecture : parcourez tout le sujet, les documents et les questions, en soulignant les verbes de consigne et en entourant les données utiles. Vous repérez ainsi les questions faciles et celles qui sont indépendantes les unes des autres. Si le barème est indiqué, répartissez votre temps en proportion des points.",
                "Consacrez ensuite environ 24 minutes aux réponses. Ne restez pas plus de 2 ou 3 minutes bloqué sur une question : passez à la suivante en laissant de la place, et revenez-y à la fin. Gardez enfin 3 minutes pour relire : chaque résultat a-t-il une unité ? Chaque question a-t-elle une réponse ? Les phrases sont-elles lisibles ?",
              ],
              box: { label: "Repère", text: "Environ 3 min de lecture, 24 min de réponses, 3 min de relecture. Jamais plus de 2 ou 3 minutes bloqué sur une même question." },
            },
            {
              heading: "Répondre efficacement",
              paragraphs: [
                "Répondez avec des phrases courtes et précises, en utilisant le vocabulaire scientifique (force, énergie cinétique, conversion, intensité...). Pour un calcul, suivez toujours la même rédaction : formule, données converties, application numérique, résultat avec unité, phrase de conclusion. Pour une explication, appuyez-vous sur une loi ou une propriété du cours et sur les documents.",
                "Ne laissez aucune question sans réponse : une démarche bien rédigée peut rapporter des points même si le résultat final est faux. Si un résultat d'une question précédente vous manque, utilisez une valeur plausible en le signalant, ou expliquez la méthode que vous auriez suivie.",
              ],
            },
            {
              heading: "Les formules à connaître",
              paragraphs: [
                "Le jour de l'épreuve, vous devez savoir utiliser sans hésiter les relations de l'année et leurs unités. Les formules plus complexes, comme celle de la gravitation, sont en général fournies dans le sujet, mais les relations simples doivent être sues. Entraînez-vous sur des sujets d'annales en temps réel, chronomètre en main, puis corrigez-vous avec un corrigé en notant vos erreurs les plus fréquentes.",
              ],
              box: { label: "À retenir", text: "v = d ÷ t ; P = m × g ; Ec = ½ × m × v² ; Ep = m × g × h ; U = R × I ; P = U × I ; E = P × t ; f = 1 ÷ T ; F = G × mA × mB ÷ d² ; 1 kWh = 3,6 × 10⁶ J." },
            },
          ],
          keyPoints: [
            "Sciences au brevet : 1 h, deux disciplines parmi trois, 30 minutes chacune.",
            "Environ 3 min de lecture, 24 min de réponses, 3 min de relecture.",
            "Ne pas rester bloqué : passer à la question suivante et revenir ensuite.",
            "Toujours rédiger : formule, données, calcul, unité, conclusion.",
            "Ne laisser aucune question vide : une démarche correcte peut rapporter des points.",
          ],
          example: {
            statement: "Un exercice de physique-chimie à traiter en 30 minutes comporte quatre questions : 1) citer les formes d'énergie d'une chaîne énergétique ; 2) calculer une vitesse ; 3) calculer une énergie cinétique à partir du résultat de la question 2 ; 4) expliquer un phénomène à l'aide d'un document. Proposer un plan de travail.",
            solution: [
              "Minutes 0 à 3 : lire tout le sujet, souligner les verbes de consigne, entourer les données et repérer que la question 3 dépend de la question 2, alors que les questions 1 et 4 sont indépendantes.",
              "Minutes 3 à 8 : traiter la question 1, qui demande seulement des connaissances.",
              "Minutes 8 à 20 : traiter les questions 2 puis 3, en rédigeant chaque calcul complètement et en vérifiant les conversions.",
              "Minutes 20 à 27 : traiter la question 4 en citant le document et en s'appuyant sur le cours.",
              "Minutes 27 à 30 : relire les unités, les réponses manquantes et les conclusions.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un exercice de physique-chimie à traiter en 30 minutes comporte quatre questions notées 3, 5, 7 et 5 points, soit 20 points. Vous gardez 3 minutes de lecture et 3 minutes de relecture. 1) Combien de minutes restent pour répondre ? 2) Combien de temps pouvez-vous consacrer à chaque point ? 3) Déduisez-en le temps à consacrer à chaque question.",
              hint: "Retirez les 6 minutes de lecture et de relecture, puis partagez le temps restant proportionnellement aux points.",
              solution: [
                "1) 30 - 3 - 3 = 24 minutes pour répondre.",
                "2) 24 ÷ 20 = 1,2 minute par point.",
                "3) Question 1 : 3 × 1,2 = 3,6 min. Question 2 : 5 × 1,2 = 6 min. Question 3 : 7 × 1,2 = 8,4 min. Question 4 : 5 × 1,2 = 6 min.",
                "Vérification : 3,6 + 6 + 8,4 + 6 = 24 min.",
              ],
            },
            {
              level: 2,
              statement: "Mini-exercice à traiter en 8 minutes. Lors d'un orage, un élève voit un éclair puis entend le tonnerre 4,5 s plus tard. Données : vitesse du son dans l'air 340 m/s ; vitesse de la lumière 3,00 × 10⁸ m/s. 1) Pourquoi entend-on le tonnerre après avoir vu l'éclair ? 2) Calculez la distance de l'orage. 3) Calculez la durée mise par la lumière de l'éclair pour parcourir cette distance et expliquez pourquoi on peut la négliger.",
              hint: "Les deux signaux partent en même temps : comparez leurs vitesses. Utilisez d = v × t puis t = d ÷ v.",
              solution: [
                "1) L'éclair et le tonnerre sont produits en même temps, mais la lumière se propage beaucoup plus vite que le son : elle arrive presque instantanément.",
                "2) d = v × t = 340 × 4,5 = 1 530 m. L'orage est à environ 1,5 km.",
                "3) t = d ÷ v = 1 530 ÷ 3,00 × 10⁸ ≈ 5,1 × 10⁻⁶ s, soit environ 5 millionièmes de seconde.",
                "Cette durée est près d'un million de fois plus petite que 4,5 s : on peut la négliger et considérer que la durée mesurée est celle du trajet du son.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type brevet, à traiter en 15 minutes. Une trottinette électrique transporte un utilisateur ; la masse totale est de 90 kg. Sa vitesse maximale est de 25 km/h. Sa batterie stocke une énergie de 360 Wh et son moteur a une puissance de 300 W. 1) Établissez la chaîne énergétique de la trottinette en fonctionnement (batterie et moteur). 2) Convertissez la vitesse maximale en m/s (arrondir au centième). 3) Calculez l'énergie cinétique de l'ensemble à la vitesse maximale (arrondir à la dizaine de joules). 4) Calculez l'autonomie de la trottinette si le moteur fonctionne en permanence à 300 W, en heures puis en minutes. 5) En roulant à une vitesse moyenne de 20 km/h pendant toute cette durée, quelle distance peut-on parcourir ?",
              hint: "Pour l'autonomie, utilisez E = P × t, donc t = E ÷ P, avec E en Wh et P en W pour obtenir t en heures. Pour la distance, d = v × t avec v en km/h et t en h.",
              solution: [
                "1) Énergie chimique → [batterie] → énergie électrique → [moteur] → énergie cinétique (utile) + énergie thermique (dissipée).",
                "2) v = 25 ÷ 3,6 ≈ 6,94 m/s.",
                "3) Ec = ½ × m × v² = 0,5 × 90 × (25 ÷ 3,6)² ≈ 45 × 48,2 ≈ 2 170 J.",
                "4) t = E ÷ P = 360 ÷ 300 = 1,2 h, soit 1,2 × 60 = 72 min.",
                "5) d = v × t = 20 × 1,2 = 24 km.",
                "Conclusion : la trottinette a environ 2 170 J d'énergie cinétique à 25 km/h, une autonomie de 72 minutes et peut parcourir environ 24 km à 20 km/h.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour traiter une partie de sciences en 30 minutes.",
            items: [
              "Lire tout le sujet et les documents",
              "Souligner les verbes de consigne et entourer les données",
              "Repérer les questions indépendantes et les plus faciles",
              "Répondre aux questions en rédigeant chaque calcul",
              "Revenir sur les questions laissées de côté",
              "Relire les unités et les phrases de conclusion",
            ],
          },
          quiz: [
            {
              q: "Combien de temps dure la partie de physique-chimie de l'épreuve de sciences du brevet ?",
              options: ["15 minutes", "30 minutes", "1 heure", "2 heures"],
              answer: 1,
              why: "L'épreuve de sciences dure 1 heure pour deux disciplines, soit 30 minutes pour chacune.",
            },
            {
              q: "Vous êtes bloqué depuis 4 minutes sur une question. Que faire ?",
              options: ["Rester dessus jusqu'à trouver", "Abandonner tout l'exercice", "Passer à la suite et y revenir à la fin", "Recommencer l'exercice depuis le début"],
              answer: 2,
              why: "Les questions sont souvent indépendantes : on avance, puis on revient sur la question difficile s'il reste du temps.",
            },
            {
              q: "Que faut-il faire pendant les dernières minutes ?",
              options: ["Commencer un nouvel exercice", "Recopier l'énoncé sur la copie", "Effacer les calculs intermédiaires", "Relire les unités, les réponses manquantes et les conclusions"],
              answer: 3,
              why: "La relecture permet de corriger un oubli d'unité ou une question restée sans réponse.",
            },
            {
              q: "Une démarche correcte avec une erreur de calcul à la fin :",
              options: ["peut rapporter des points", "ne rapporte jamais rien", "fait perdre des points à tout l'exercice", "doit être effacée"],
              answer: 0,
              why: "Une démarche bien rédigée montre ce que vous savez faire : elle peut être valorisée même si le résultat final est faux.",
            },
            {
              q: "Quelle relation permet de calculer l'autonomie d'un appareil connaissant l'énergie de sa batterie et sa puissance ?",
              options: ["t = P ÷ E", "t = E × P", "t = E ÷ P", "t = E - P"],
              answer: 2,
              why: "E = P × t, donc t = E ÷ P. Avec E en Wh et P en W, la durée est en heures.",
            },
          ],
          trap: "Passer trop de temps sur la première question difficile et ne pas arriver au bout du sujet, alors que les dernières questions sont souvent indépendantes et parfois plus faciles.",
          method: "Entraînez-vous avec un chronomètre sur des sujets d'annales : notez l'heure de début, prévoyez sur le brouillon l'heure à laquelle chaque question doit être terminée, et respectez ces repères. Après chaque entraînement, listez vos erreurs (unité, conversion, rédaction) et relisez cette liste avant le suivant.",
        },
      ],
    },
  ],
}
