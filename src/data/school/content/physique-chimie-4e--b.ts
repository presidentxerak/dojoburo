import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-4e',
  chapters: [
    /* ==================================================================== */
    /* MOUVEMENT ET VITESSE                                                   */
    /* ==================================================================== */
    {
      id: 'mouvement-vitesse',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'referentiel-trajectoire',
          title: 'Référentiel et trajectoire',
          minutes: 30,
          objectives: [
            "Choisir un référentiel (un objet de référence) pour décrire le mouvement d'un objet.",
            "Expliquer qu'un même objet peut être en mouvement par rapport à un référentiel et immobile par rapport à un autre : c'est la relativité du mouvement.",
            "Identifier la trajectoire d'un point d'un objet : rectiligne, circulaire ou curviligne.",
            "Montrer que la trajectoire d'un point dépend du référentiel choisi.",
          ],
          course: [
            {
              heading: "Mouvement ou immobilité : tout dépend de l'observateur",
              paragraphs: [
                "Vous êtes assis dans un train qui roule. Votre voisin de siège ne bouge pas par rapport à vous : pour vous, il est immobile. Pourtant, une personne restée sur le quai le voit passer à toute vitesse : pour elle, votre voisin est en mouvement. Qui a raison ? Les deux ! Ils ne décrivent pas le mouvement par rapport au même objet.",
                "Un objet est en mouvement par rapport à un autre objet si sa position par rapport à cet autre objet change au cours du temps. Il est immobile par rapport à cet objet si sa position ne change pas. Dire simplement « cet objet bouge » ne suffit donc pas : il faut toujours préciser par rapport à quoi.",
              ],
              box: { label: "Définition", text: "Un objet est en mouvement par rapport à un objet de référence si sa position par rapport à cet objet change au cours du temps. Sinon, il est immobile par rapport à lui. Le mouvement est relatif : il dépend de l'objet de référence choisi." },
            },
            {
              heading: "Le référentiel : l'objet de référence",
              paragraphs: [
                "L'objet par rapport auquel on décrit un mouvement s'appelle le référentiel. On lui associe une horloge (un chronomètre) pour repérer les instants. Choisir un référentiel, c'est choisir le « point de vue » à partir duquel on observe le mouvement.",
                "Le référentiel le plus utilisé dans la vie courante est le référentiel terrestre : c'est le sol, ou tout objet immobile par rapport au sol (un bâtiment, un arbre, un poteau). Quand on dit qu'une voiture roule à 50 km/h, on sous-entend : par rapport à la route, donc dans le référentiel terrestre. On peut aussi choisir le train, la voiture, le vélo comme référentiel. Pour étudier le mouvement des planètes, on choisit un référentiel lié au Soleil.",
                "Une description correcte cite toujours le référentiel. Exemple : « Le passager assis est immobile dans le référentiel du train ; il est en mouvement dans le référentiel terrestre. »",
              ],
              box: { label: "Règle", text: "Avant de dire qu'un objet est immobile ou en mouvement, on choisit un référentiel et on le nomme. Le référentiel terrestre (le sol et tout ce qui est fixe par rapport à lui) est le plus utilisé dans la vie courante." },
            },
            {
              heading: "La trajectoire d'un point",
              paragraphs: [
                "Pour simplifier, on étudie souvent le mouvement d'un seul point de l'objet, par exemple le centre d'une balle ou la lampe d'un casque. La trajectoire de ce point est l'ensemble des positions successives qu'il occupe au cours du mouvement. On peut l'imaginer comme la trace laissée par le point, comme les traces de skis dans la neige.",
                "On distingue trois types de trajectoires. Une trajectoire rectiligne est une portion de droite : une pomme qui tombe verticalement, une voiture sur une route en ligne droite. Une trajectoire circulaire est un cercle ou une portion de cercle : l'extrémité de l'aiguille d'une horloge, une nacelle de grande roue. Toutes les autres trajectoires sont curvilignes (des courbes quelconques) : un ballon lancé vers le panier, une feuille qui tombe en tourbillonnant.",
              ],
              box: { label: "Définition", text: "La trajectoire d'un point est l'ensemble des positions successives occupées par ce point au cours du mouvement. Elle peut être rectiligne (droite), circulaire (cercle) ou curviligne (autre courbe)." },
            },
            {
              heading: "La trajectoire dépend aussi du référentiel",
              paragraphs: [
                "Prenons la valve d'une roue de vélo qui roule en ligne droite. Pour le cycliste (référentiel du vélo), la valve tourne autour de l'axe de la roue : sa trajectoire est circulaire. Pour un piéton sur le trottoir (référentiel terrestre), la valve tourne tout en avançant avec le vélo : elle dessine une suite d'arches. Sa trajectoire est curviligne.",
                "De même, un passager lâche une balle dans un train qui roule tout droit à vitesse constante. Pour lui, la balle tombe verticalement : trajectoire rectiligne. Pour une personne sur le quai, la balle avance avec le train en tombant : elle décrit une courbe. Retenez qu'une trajectoire n'a de sens que si l'on précise le référentiel.",
              ],
              box: { label: "À retenir", text: "Le même point peut avoir des trajectoires différentes dans deux référentiels différents. Pour décrire un mouvement, on précise donc toujours : le référentiel, le point étudié, puis la forme de sa trajectoire." },
            },
          ],
          keyPoints: [
            "Un objet est en mouvement par rapport à un autre si sa position par rapport à lui change au cours du temps.",
            "Le référentiel est l'objet de référence par rapport auquel on décrit le mouvement ; on lui associe une horloge.",
            "Le référentiel terrestre (le sol et ce qui est fixe par rapport à lui) est le plus utilisé dans la vie courante.",
            "La trajectoire d'un point est l'ensemble de ses positions successives : rectiligne, circulaire ou curviligne.",
            "Le mouvement et la trajectoire dépendent du référentiel choisi : il faut toujours le nommer.",
          ],
          example: {
            statement: "Léa est assise dans un bus qui roule sur une route parfaitement droite. Tom attend à l'arrêt de bus, debout sur le trottoir. 1) Léa est-elle immobile ou en mouvement ? 2) Tom est-il immobile ou en mouvement ? 3) Quelle est la trajectoire d'un point du bus dans le référentiel terrestre ?",
            solution: [
              "1) La réponse dépend du référentiel. Dans le référentiel du bus, la position de Léa par rapport au bus ne change pas : elle est immobile.",
              "Dans le référentiel terrestre (le trottoir, la route), la position de Léa change au cours du temps : elle est en mouvement.",
              "2) Dans le référentiel terrestre, Tom ne change pas de position : il est immobile. Dans le référentiel du bus, la position de Tom change (il s'éloigne derrière le bus) : il est en mouvement.",
              "3) La route est droite : dans le référentiel terrestre, un point du bus se déplace en ligne droite. Sa trajectoire est rectiligne.",
              "Réponse : Léa est immobile dans le référentiel du bus et en mouvement dans le référentiel terrestre ; c'est l'inverse pour Tom ; la trajectoire du bus dans le référentiel terrestre est rectiligne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans le référentiel terrestre, indiquer le type de trajectoire (rectiligne, circulaire ou curviligne) de chacun des points suivants : a) une pomme qui tombe verticalement de l'arbre ; b) l'extrémité d'une pale d'éolienne qui tourne ; c) le centre d'un ballon de basket lancé vers le panier ; d) une voiture sur une portion d'autoroute en ligne droite ; e) une nacelle de grande roue.",
              hint: "Imaginez la trace laissée par le point : une droite, un cercle ou une autre courbe ?",
              solution: [
                "a) La pomme tombe verticalement, en ligne droite : trajectoire rectiligne.",
                "b) L'extrémité de la pale tourne autour de l'axe de l'éolienne : trajectoire circulaire.",
                "c) Le ballon monte puis redescend en formant une courbe : trajectoire curviligne.",
                "d) La voiture suit une ligne droite : trajectoire rectiligne.",
                "e) La nacelle tourne autour de l'axe de la grande roue : trajectoire circulaire.",
                "Réponse : rectiligne, circulaire, curviligne, rectiligne, circulaire.",
              ],
            },
            {
              level: 2,
              statement: "Dans un train qui roule, Paul est assis à sa place et Marie marche dans l'allée vers l'avant du train. Dans un pré, le long de la voie, une vache regarde passer le train. Pour chaque personnage (Paul, Marie, la vache), dire s'il est immobile ou en mouvement : a) dans le référentiel du train ; b) dans le référentiel terrestre.",
              hint: "Pour chaque cas, demandez-vous si la position du personnage change par rapport au train, puis par rapport au sol.",
              solution: [
                "Paul : sa position par rapport au train ne change pas, il est immobile dans le référentiel du train ; il avance avec le train par rapport au sol, il est en mouvement dans le référentiel terrestre.",
                "Marie : elle se déplace dans l'allée, sa position par rapport au train change, elle est en mouvement dans le référentiel du train ; elle est aussi en mouvement dans le référentiel terrestre (elle avance avec le train, et même un peu plus vite que lui).",
                "La vache : sa position par rapport au sol ne change pas, elle est immobile dans le référentiel terrestre ; par rapport au train, sa position change (les passagers la voient défiler vers l'arrière), elle est en mouvement dans le référentiel du train.",
                "Réponse : Paul est immobile (train) et en mouvement (sol) ; Marie est en mouvement dans les deux référentiels ; la vache est en mouvement (train) et immobile (sol).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un cycliste roule en ligne droite sur une route plate. Une petite lampe est fixée sur la valve de sa roue avant. 1) Quelle est la trajectoire de la lampe dans le référentiel du vélo ? 2) Quelle est la trajectoire du centre de la roue (le moyeu) dans le référentiel terrestre ? 3) La trajectoire de la lampe dans le référentiel terrestre est-elle circulaire ? Justifier. 4) Quelle conclusion générale peut-on en tirer ?",
              hint: "Dans le référentiel terrestre, la lampe fait deux choses à la fois : elle tourne autour du moyeu et elle avance avec le vélo.",
              solution: [
                "1) Dans le référentiel du vélo, le moyeu est fixe et la lampe tourne autour de lui en restant toujours à la même distance : sa trajectoire est circulaire.",
                "2) Le moyeu avance avec le vélo, en ligne droite et toujours à la même hauteur au-dessus de la route : sa trajectoire est rectiligne dans le référentiel terrestre.",
                "3) Non. Dans le référentiel terrestre, la lampe tourne autour du moyeu pendant que celui-ci avance : elle monte, avance, redescend jusqu'au sol, puis recommence. Elle dessine une suite d'arches : sa trajectoire est curviligne.",
                "4) Le même point (la lampe) a une trajectoire circulaire dans un référentiel et curviligne dans un autre.",
                "Réponse : la trajectoire d'un point dépend du référentiel choisi ; il faut toujours préciser le référentiel avant de décrire une trajectoire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur le mouvement.",
            statements: [
              { text: "Un passager assis dans un avion en vol est immobile par rapport à l'avion.", true: true, why: "Sa position par rapport à l'avion ne change pas : il est immobile dans le référentiel de l'avion." },
              { text: "Un arbre au bord de la route est toujours immobile, quel que soit le référentiel.", true: false, why: "L'arbre est immobile dans le référentiel terrestre, mais il est en mouvement par rapport à une voiture qui passe." },
              { text: "La trajectoire d'un point est l'ensemble des positions qu'il occupe au cours du mouvement.", true: true, why: "C'est la définition : on peut l'imaginer comme la trace laissée par le point." },
              { text: "L'extrémité de l'aiguille d'une horloge a une trajectoire rectiligne.", true: false, why: "Elle tourne autour de l'axe de l'horloge : sa trajectoire est circulaire." },
              { text: "Un même point peut avoir une trajectoire circulaire dans un référentiel et curviligne dans un autre.", true: true, why: "C'est le cas de la valve d'une roue de vélo : circulaire pour le cycliste, en arches pour le piéton." },
              { text: "On peut dire qu'un objet est en mouvement sans préciser le référentiel.", true: false, why: "Sans référentiel, la phrase n'a pas de sens : le mouvement est relatif." },
              { text: "Le référentiel terrestre est lié au sol.", true: true, why: "Il est formé par le sol et tous les objets immobiles par rapport au sol." },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on le référentiel ?",
              options: ["La vitesse de l'objet étudié", "L'objet par rapport auquel on décrit le mouvement", "La forme de la courbe dessinée par l'objet pendant son déplacement", "La durée totale du mouvement observé"],
              answer: 1,
              why: "Le référentiel est l'objet de référence choisi pour décrire le mouvement ; on lui associe une horloge.",
            },
            {
              q: "Un conducteur roule sur l'autoroute. Dans quel référentiel est-il immobile ?",
              options: ["Le référentiel terrestre", "Le référentiel d'un pont au-dessus de l'autoroute", "Le référentiel de sa voiture"],
              answer: 2,
              why: "Sa position ne change pas par rapport à sa voiture ; elle change par rapport au sol et au pont.",
            },
            {
              q: "Quelle est la trajectoire d'une nacelle de grande roue dans le référentiel terrestre ?",
              options: ["Circulaire", "Rectiligne", "Curviligne quelconque", "Il n'y a pas de trajectoire"],
              answer: 0,
              why: "La nacelle tourne autour de l'axe de la roue, toujours à la même distance : sa trajectoire est un cercle.",
            },
            {
              q: "Un passager lâche une balle dans un train qui roule tout droit à vitesse constante. Pour une personne sur le quai, la trajectoire de la balle est :",
              options: ["rectiligne verticale", "circulaire", "curviligne", "immobile"],
              answer: 2,
              why: "Sur le quai, on voit la balle tomber tout en avançant avec le train : elle décrit une courbe.",
            },
            {
              q: "Quel ensemble forme le référentiel terrestre ?",
              options: ["Le Soleil et les planètes", "Le sol et tout objet immobile par rapport au sol", "Tout objet en mouvement sur Terre", "Les satellites artificiels qui tournent autour de la Terre"],
              answer: 1,
              why: "Le référentiel terrestre est lié au sol : un bâtiment, un arbre ou un poteau en font partie.",
            },
          ],
          trap: "Dire qu'un objet est « immobile » ou « en mouvement » sans préciser par rapport à quoi : sans référentiel, la phrase n'a pas de sens, car le mouvement est relatif.",
          method: "Pour décrire un mouvement, répondez toujours dans cet ordre : 1) par rapport à quoi (le référentiel) ? 2) quel point étudie-t-on ? 3) quelle est la forme de sa trajectoire ? Une réponse complète cite toujours le référentiel.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse-moyenne',
          title: 'Calculer une vitesse moyenne',
          minutes: 35,
          objectives: [
            "Calculer une vitesse moyenne à partir d'une distance parcourue et d'une durée : v = d ÷ t.",
            "Utiliser les unités m/s et km/h et passer de l'une à l'autre.",
            "Calculer une distance ou une durée à partir d'une vitesse moyenne.",
            "Convertir les durées (heures, minutes, secondes) avant de calculer.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la vitesse moyenne ?",
              paragraphs: [
                "Deux élèves font le même trajet de 2 km pour venir au collège : l'un met 30 minutes à pied, l'autre 8 minutes à vélo. Le cycliste est plus rapide : il parcourt la même distance en moins de temps. La vitesse mesure cette rapidité : elle compare la distance parcourue et la durée du parcours.",
                "On calcule la vitesse moyenne en divisant la distance parcourue d par la durée du parcours t. On dit « moyenne » car, pendant un trajet, la vitesse change souvent : on ralentit au feu rouge, on accélère dans une descente. La vitesse moyenne est la vitesse constante qu'il aurait fallu garder pour faire le même trajet dans la même durée.",
                "Le compteur d'une voiture, lui, indique la vitesse à chaque instant : on l'appelle la vitesse instantanée. Elle peut être très différente de la vitesse moyenne sur tout le trajet.",
              ],
              box: { label: "Formule", text: "v = d ÷ t, où v est la vitesse moyenne, d la distance parcourue et t la durée du parcours." },
            },
            {
              heading: "Les unités de la vitesse",
              paragraphs: [
                "Si la distance est en mètres (m) et la durée en secondes (s), la vitesse est en mètres par seconde (m/s) : c'est l'unité du Système international. Si la distance est en kilomètres (km) et la durée en heures (h), la vitesse est en kilomètres par heure (km/h) : c'est l'unité des panneaux routiers.",
                "Pour passer d'une unité à l'autre, on raisonne ainsi : 1 m/s, c'est 1 m parcouru en 1 s. En 1 h, c'est-à-dire 3 600 s, on parcourt donc 3 600 m, soit 3,6 km. Ainsi 1 m/s = 3,6 km/h. Pour convertir des m/s en km/h, on multiplie par 3,6 ; pour convertir des km/h en m/s, on divise par 3,6. Exemples : 10 m/s = 36 km/h ; 90 km/h = 25 m/s.",
              ],
              box: { label: "Repère", text: "1 m/s = 3,6 km/h. De m/s vers km/h : multiplier par 3,6. De km/h vers m/s : diviser par 3,6." },
            },
            {
              heading: "Calculer une distance ou une durée",
              paragraphs: [
                "La formule v = d ÷ t peut s'écrire de deux autres façons : d = v × t pour calculer une distance, et t = d ÷ v pour calculer une durée. Un randonneur qui marche 2 h à la vitesse moyenne de 4 km/h parcourt d = 4 × 2 = 8 km. Une voiture qui parcourt 150 km à 100 km/h de moyenne met t = 150 ÷ 100 = 1,5 h.",
                "Attention à la lecture des durées : 1,5 h ne signifie pas 1 h 50 min. Le chiffre après la virgule est une fraction d'heure : 0,5 h est une demi-heure, soit 30 min. Donc 1,5 h = 1 h 30 min. De même 0,25 h = 15 min et 0,75 h = 45 min.",
              ],
              box: { label: "Formule", text: "d = v × t (calculer une distance) ; t = d ÷ v (calculer une durée). Les unités doivent être cohérentes : km, h et km/h ensemble, ou m, s et m/s ensemble." },
            },
            {
              heading: "Convertir avant de calculer, puis vérifier",
              paragraphs: [
                "Avant de calculer, on vérifie que les unités vont ensemble. Si la distance est en kilomètres et la durée en minutes, on convertit la durée en heures. Rappel : 1 h = 60 min = 3 600 s. Exemple : un cycliste parcourt 12 km en 30 min. Comme 30 min = 0,5 h, sa vitesse moyenne est v = 12 ÷ 0,5 = 24 km/h.",
                "On termine en vérifiant que le résultat est plausible, à l'aide de quelques ordres de grandeur : un piéton marche à environ 5 km/h, un cycliste roule à environ 20 km/h, une voiture en ville à 50 km/h au plus. Le son se propage dans l'air à environ 340 m/s et la lumière à environ 300 000 km/s. Un piéton à 50 km/h signale une erreur !",
              ],
            },
          ],
          keyPoints: [
            "Vitesse moyenne : v = d ÷ t (distance parcourue divisée par la durée du parcours).",
            "On en déduit d = v × t et t = d ÷ v.",
            "Unités cohérentes : m et s donnent des m/s ; km et h donnent des km/h.",
            "1 m/s = 3,6 km/h : multiplier par 3,6 pour passer en km/h, diviser par 3,6 pour passer en m/s.",
            "1 h = 60 min = 3 600 s ; 1,5 h = 1 h 30 min (et non 1 h 50 min).",
            "Toujours écrire l'unité du résultat et vérifier qu'il est plausible.",
          ],
          example: {
            statement: "Un cycliste parcourt 18 km en 45 min. Calculer sa vitesse moyenne en km/h, puis en m/s.",
            solution: [
              "On veut une vitesse en km/h : la distance est déjà en km, il faut convertir la durée en heures.",
              "45 min = 45 ÷ 60 h = 0,75 h.",
              "v = d ÷ t = 18 ÷ 0,75 = 24 km/h.",
              "Conversion en m/s : 24 ÷ 3,6 ≈ 6,7 m/s.",
              "Vérification : 24 km/h est une vitesse plausible pour un cycliste.",
              "Réponse : la vitesse moyenne du cycliste est de 24 km/h, soit environ 6,7 m/s.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Une coureuse parcourt un tour de piste de 400 m en 80 s. Calculer sa vitesse moyenne en m/s, puis en km/h.",
              hint: "La distance est en mètres et la durée en secondes : le résultat de d ÷ t sera directement en m/s.",
              solution: [
                "v = d ÷ t = 400 ÷ 80 = 5 m/s.",
                "Conversion : 5 × 3,6 = 18 km/h.",
                "Réponse : la vitesse moyenne de la coureuse est 5 m/s, soit 18 km/h.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une famille part en vacances. Elle parcourt d'abord 240 km d'autoroute à la vitesse moyenne de 120 km/h, puis 60 km de petites routes à la vitesse moyenne de 60 km/h. 1) Calculer la durée de chaque partie du trajet. 2) Calculer la durée totale et la distance totale. 3) Calculer la vitesse moyenne sur l'ensemble du trajet. 4) Est-elle égale à la moyenne des deux vitesses, (120 + 60) ÷ 2 ?",
              hint: "Utilisez t = d ÷ v pour chaque partie. Pour la vitesse moyenne du trajet complet, divisez la distance totale par la durée totale.",
              solution: [
                "1) Autoroute : t = 240 ÷ 120 = 2 h. Petites routes : t = 60 ÷ 60 = 1 h.",
                "2) Durée totale : 2 h + 1 h = 3 h. Distance totale : 240 km + 60 km = 300 km.",
                "3) v = 300 ÷ 3 = 100 km/h.",
                "4) La moyenne des deux vitesses vaut (120 + 60) ÷ 2 = 90 km/h, ce qui est différent de 100 km/h : la famille a passé plus de temps à 120 km/h qu'à 60 km/h.",
                "Réponse : la vitesse moyenne sur le trajet est 100 km/h ; on ne calcule jamais une vitesse moyenne en faisant la moyenne des vitesses, mais en divisant la distance totale par la durée totale.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pendant un orage, on voit l'éclair, puis on entend le tonnerre 6 s plus tard. La lumière arrive presque instantanément ; le son se propage dans l'air à environ 340 m/s. 1) À quelle distance se trouve l'orage ? Donner le résultat en mètres, puis en kilomètres. 2) Une règle pratique dit : « la durée en secondes divisée par 3 donne la distance en kilomètres ». Vérifier cette règle avec la question 1, puis l'expliquer. 3) L'orage se trouve maintenant à 3,4 km. Combien de temps s'écoule entre l'éclair et le tonnerre ?",
              hint: "Le son parcourt la distance entre l'orage et vous en 6 s : utilisez d = v × t. Pour la question 3, convertissez d'abord la distance en mètres.",
              solution: [
                "1) d = v × t = 340 × 6 = 2 040 m, soit environ 2 km.",
                "2) 6 ÷ 3 = 2 km : la règle donne bien le même résultat. Explication : en 3 s, le son parcourt 340 × 3 = 1 020 m, soit environ 1 km. Chaque groupe de 3 s correspond donc à environ 1 km.",
                "3) 3,4 km = 3 400 m. t = d ÷ v = 3 400 ÷ 340 = 10 s.",
                "Réponse : l'orage est à environ 2 km (2 040 m) ; la règle pratique est vérifiée car le son parcourt environ 1 km en 3 s ; à 3,4 km, le tonnerre arrive 10 s après l'éclair.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez du plus lent au plus rapide (convertissez si besoin : 1 m/s = 3,6 km/h).",
            items: [
              "Un escargot : environ 1 mm/s",
              "Un piéton : 5 km/h",
              "Un cycliste : 6 m/s",
              "Une voiture sur autoroute : 130 km/h",
              "Un avion de ligne : 250 m/s",
              "Le son dans l'air : 340 m/s",
              "La lumière : 300 000 km/s",
            ],
          },
          quiz: [
            {
              q: "Quelle formule permet de calculer une vitesse moyenne ?",
              options: ["v = d × t", "v = t ÷ d", "v = d ÷ t", "v = d + t"],
              answer: 2,
              why: "La vitesse moyenne est la distance parcourue divisée par la durée du parcours.",
            },
            {
              q: "À combien de m/s correspond une vitesse de 72 km/h ?",
              options: ["20 m/s", "259,2 m/s", "7,2 m/s", "36 m/s"],
              answer: 0,
              why: "Pour passer des km/h aux m/s, on divise par 3,6 : 72 ÷ 3,6 = 20 m/s.",
            },
            {
              q: "Un trajet dure 1,5 h. Cela correspond à :",
              options: ["1 h 50 min", "1 h 05 min", "1 h 15 min", "1 h 30 min"],
              answer: 3,
              why: "0,5 h est une demi-heure, soit 30 min : 1,5 h = 1 h 30 min.",
            },
            {
              q: "Un scooter roule pendant 30 min à la vitesse moyenne de 50 km/h. Quelle distance parcourt-il ?",
              options: ["1 500 km", "25 km", "100 km", "80 km"],
              answer: 1,
              why: "30 min = 0,5 h, donc d = v × t = 50 × 0,5 = 25 km.",
            },
            {
              q: "Usain Bolt a couru le 100 m en 9,58 s en 2009. Sa vitesse moyenne est d'environ :",
              options: ["10,4 m/s", "958 m/s", "1 m/s", "95,8 m/s"],
              answer: 0,
              why: "v = 100 ÷ 9,58 ≈ 10,4 m/s, soit environ 37,6 km/h.",
            },
          ],
          trap: "Calculer avec des unités qui ne vont pas ensemble, par exemple diviser des kilomètres par des minutes et annoncer des km/h, ou lire 1,5 h comme « 1 h 50 min » alors que 1,5 h = 1 h 30 min.",
          method: "Avant tout calcul, écrivez les données avec leurs unités et convertissez-les pour qu'elles aillent ensemble (km et h, ou m et s). Écrivez la formule, remplacez, calculez, puis vérifiez l'ordre de grandeur : un piéton ne marche pas à 50 km/h.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mouvement-uniforme-varie',
          title: 'Mouvement uniforme, accéléré ou ralenti',
          minutes: 30,
          objectives: [
            "Caractériser un mouvement par sa trajectoire et par l'évolution de sa vitesse.",
            "Distinguer un mouvement uniforme, un mouvement accéléré et un mouvement ralenti.",
            "Exploiter une chronophotographie pour déterminer la nature d'un mouvement.",
            "Calculer une vitesse moyenne entre deux positions d'une chronophotographie.",
          ],
          course: [
            {
              heading: "La vitesse peut changer au cours du mouvement",
              paragraphs: [
                "Observez une voiture à un feu rouge. Quand le feu passe au vert, elle démarre et sa vitesse augmente : son mouvement est accéléré. Ensuite, elle roule à 50 km/h sans changer de vitesse : son mouvement est uniforme. À l'approche du feu suivant, le conducteur freine et la vitesse diminue : le mouvement est ralenti (on dit aussi décéléré).",
                "Un même trajet peut donc comporter plusieurs phases. Pour décrire le mouvement, on précise comment évolue la valeur de la vitesse dans chacune d'elles : elle est constante, elle augmente ou elle diminue.",
              ],
              box: { label: "Définition", text: "Mouvement uniforme : la valeur de la vitesse reste constante. Mouvement accéléré : la valeur de la vitesse augmente. Mouvement ralenti : la valeur de la vitesse diminue." },
            },
            {
              heading: "Nommer complètement un mouvement",
              paragraphs: [
                "Pour caractériser complètement un mouvement dans un référentiel donné, on associe deux informations : la forme de la trajectoire (rectiligne, circulaire ou curviligne) et l'évolution de la vitesse (uniforme, accéléré ou ralenti).",
                "Exemples dans le référentiel terrestre : un train qui roule en ligne droite à vitesse constante a un mouvement rectiligne uniforme ; une bille lâchée qui tombe a un mouvement rectiligne accéléré ; l'extrémité de l'aiguille des secondes d'une horloge a un mouvement circulaire uniforme ; un vélo qui freine dans un virage a un mouvement curviligne ralenti.",
              ],
              box: { label: "À retenir", text: "Nom d'un mouvement = forme de la trajectoire + évolution de la vitesse. Exemple : « rectiligne accéléré », « circulaire uniforme »." },
            },
            {
              heading: "Lire une chronophotographie",
              paragraphs: [
                "Une chronophotographie est une image sur laquelle on a superposé les positions successives d'un objet, enregistrées à intervalles de temps égaux (par exemple toutes les 0,1 s). C'est un outil précieux : il fige le mouvement sur une seule image.",
                "La forme de la trajectoire se lit dans l'alignement des points : des points alignés indiquent une trajectoire rectiligne, des points sur un cercle une trajectoire circulaire. L'évolution de la vitesse se lit dans l'écartement des points. Comme la durée entre deux images est toujours la même, un objet rapide parcourt une grande distance entre deux images, un objet lent une petite distance.",
                "Si les points sont régulièrement espacés, la vitesse est constante : mouvement uniforme. Si l'écart entre les points augmente, la vitesse augmente : mouvement accéléré. Si l'écart diminue, la vitesse diminue : mouvement ralenti.",
              ],
              box: { label: "Règle", text: "Sur une chronophotographie : écarts égaux = uniforme ; écarts de plus en plus grands = accéléré ; écarts de plus en plus petits = ralenti." },
            },
            {
              heading: "Calculer une vitesse sur une chronophotographie",
              paragraphs: [
                "Pour calculer la vitesse moyenne entre deux positions, on mesure la distance réelle d qui les sépare et on compte la durée t correspondante (nombre d'intervalles × durée d'un intervalle). Puis on applique v = d ÷ t. Si la chronophotographie est à l'échelle, on convertit d'abord la distance mesurée sur l'image en distance réelle.",
                "Exemple : les images sont prises toutes les 0,04 s. Sur le document, deux positions successives sont séparées de 2 cm, et 1 cm sur le document représente 10 cm en réalité. La distance réelle est 2 × 10 = 20 cm = 0,2 m. La vitesse moyenne vaut v = 0,2 ÷ 0,04 = 5 m/s.",
              ],
              box: { label: "Formule", text: "v = d ÷ t, avec d la distance réelle entre deux positions (en m) et t la durée qui les sépare : nombre d'intervalles × durée d'un intervalle (en s)." },
            },
          ],
          keyPoints: [
            "Mouvement uniforme : vitesse constante ; accéléré : vitesse qui augmente ; ralenti : vitesse qui diminue.",
            "On nomme un mouvement par sa trajectoire et l'évolution de sa vitesse : « rectiligne uniforme », « circulaire accéléré »...",
            "Une chronophotographie montre les positions d'un objet à intervalles de temps égaux.",
            "Points alignés : trajectoire rectiligne. Écarts égaux : uniforme ; croissants : accéléré ; décroissants : ralenti.",
            "Vitesse entre deux positions : v = d ÷ t, avec la distance réelle (échelle) et la durée réelle.",
          ],
          example: {
            statement: "Données fictives. On filme un skateur qui roule en ligne droite et on relève sa position toutes les 0,5 s. Les distances parcourues entre deux positions successives sont : 1,0 m ; 1,0 m ; 1,0 m ; 1,0 m ; puis 0,8 m ; 0,6 m ; 0,4 m. 1) Décrire le mouvement du skateur dans le référentiel terrestre. 2) Calculer sa vitesse pendant la première phase.",
            solution: [
              "La trajectoire est rectiligne (le skateur roule en ligne droite).",
              "Première phase : les distances parcourues pendant chaque intervalle de 0,5 s sont égales (1,0 m) : la vitesse est constante, le mouvement est rectiligne uniforme.",
              "Seconde phase : les distances diminuent (0,8 m, puis 0,6 m, puis 0,4 m) : la vitesse diminue, le mouvement est rectiligne ralenti.",
              "2) Pendant la première phase : v = d ÷ t = 1,0 ÷ 0,5 = 2 m/s.",
              "Réponse : mouvement rectiligne uniforme à 2 m/s (soit 7,2 km/h), puis rectiligne ralenti.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommer complètement le mouvement de chaque objet dans le référentiel terrestre : a) un TGV qui roule en ligne droite à 300 km/h, sans changer de vitesse ; b) une pomme qui tombe de l'arbre ; c) une voiture qui freine en ligne droite avant un feu rouge ; d) l'extrémité de l'aiguille des secondes d'une horloge ; e) une balle lancée verticalement vers le haut, pendant sa montée.",
              hint: "Pour chaque objet, donnez deux informations : la forme de la trajectoire, puis l'évolution de la vitesse.",
              solution: [
                "a) Ligne droite et vitesse constante : mouvement rectiligne uniforme.",
                "b) La pomme tombe verticalement de plus en plus vite : mouvement rectiligne accéléré.",
                "c) Ligne droite et vitesse qui diminue : mouvement rectiligne ralenti.",
                "d) L'aiguille tourne régulièrement : mouvement circulaire uniforme.",
                "e) La balle monte verticalement de moins en moins vite, jusqu'à s'arrêter en haut : mouvement rectiligne ralenti.",
                "Réponse : rectiligne uniforme ; rectiligne accéléré ; rectiligne ralenti ; circulaire uniforme ; rectiligne ralenti.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Sur une chronophotographie, une bille roule sur une rampe ; les images sont prises toutes les 0,2 s et les positions sont alignées. Les distances réelles entre deux positions successives sont : 0,10 m ; 0,20 m ; 0,30 m ; 0,40 m. 1) Quelle est la nature du mouvement ? 2) Calculer la vitesse moyenne entre les deux premières positions, puis entre les deux dernières. 3) Calculer la vitesse moyenne sur tout l'enregistrement.",
              hint: "Il y a 4 intervalles de 0,2 s. Pour la question 3, additionnez les distances et les durées.",
              solution: [
                "1) Les positions sont alignées : trajectoire rectiligne. Les écarts augmentent : la vitesse augmente. Le mouvement est rectiligne accéléré.",
                "2) Entre les deux premières positions : v = 0,10 ÷ 0,2 = 0,5 m/s. Entre les deux dernières : v = 0,40 ÷ 0,2 = 2 m/s.",
                "3) Distance totale : 0,10 + 0,20 + 0,30 + 0,40 = 1,00 m. Durée totale : 4 × 0,2 = 0,8 s. v = 1,00 ÷ 0,8 = 1,25 m/s.",
                "Réponse : mouvement rectiligne accéléré ; la vitesse passe de 0,5 m/s à 2 m/s ; la vitesse moyenne sur tout l'enregistrement est 1,25 m/s.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Sur la chronophotographie d'une balle qui roule sur une table, les positions sont alignées et prises toutes les 40 ms. Sur le document, tous les écarts entre deux positions successives mesurent 1,5 cm. Échelle : 1 cm sur le document représente 4 cm en réalité. 1) Quelle est la nature du mouvement ? 2) Calculer la distance réelle entre deux positions successives, en mètres. 3) Calculer la vitesse de la balle en m/s, puis en km/h. 4) Si la balle garde ce mouvement, combien de temps lui faut-il pour parcourir 3 m ?",
              hint: "1 ms = 0,001 s, donc 40 ms = 0,040 s. Convertissez d'abord la distance du document en distance réelle grâce à l'échelle.",
              solution: [
                "1) Positions alignées : trajectoire rectiligne. Écarts tous égaux : vitesse constante. Le mouvement est rectiligne uniforme.",
                "2) Distance réelle : 1,5 × 4 = 6 cm = 0,06 m.",
                "3) Durée entre deux positions : 40 ms = 0,040 s. v = 0,06 ÷ 0,040 = 1,5 m/s. En km/h : 1,5 × 3,6 = 5,4 km/h.",
                "4) t = d ÷ v = 3 ÷ 1,5 = 2 s.",
                "Réponse : mouvement rectiligne uniforme ; 0,06 m entre deux positions ; v = 1,5 m/s, soit 5,4 km/h ; il faut 2 s pour parcourir 3 m.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mouvement à un exemple (référentiel terrestre).",
            pairs: [
              { left: "Rectiligne uniforme", right: "Une voiture roule en ligne droite à vitesse constante" },
              { left: "Rectiligne accéléré", right: "Une bille lâchée tombe vers le sol" },
              { left: "Rectiligne ralenti", right: "Un vélo freine en ligne droite jusqu'à l'arrêt" },
              { left: "Circulaire uniforme", right: "L'extrémité de l'aiguille des secondes d'une horloge" },
              { left: "Chronophotographie", right: "Positions successives enregistrées à intervalles de temps égaux" },
            ],
          },
          quiz: [
            {
              q: "Sur une chronophotographie, les points sont alignés et régulièrement espacés. Le mouvement est :",
              options: ["rectiligne accéléré", "rectiligne ralenti", "circulaire uniforme", "rectiligne uniforme"],
              answer: 3,
              why: "Des points alignés indiquent une trajectoire rectiligne, et des écarts égaux une vitesse constante.",
            },
            {
              q: "Sur une chronophotographie, l'écart entre deux positions successives augmente. Cela signifie que :",
              options: ["la vitesse augmente", "la vitesse diminue", "la vitesse est constante", "l'objet tourne en rond"],
              answer: 0,
              why: "Pendant la même durée, l'objet parcourt une distance de plus en plus grande : il va de plus en plus vite.",
            },
            {
              q: "Une voiture démarre en ligne droite au feu vert. Son mouvement est :",
              options: ["rectiligne uniforme", "rectiligne accéléré", "circulaire accéléré", "rectiligne ralenti"],
              answer: 1,
              why: "La trajectoire est une droite et la vitesse augmente au démarrage.",
            },
            {
              q: "Les images d'une chronophotographie sont prises toutes les 0,1 s. Deux positions successives sont distantes de 0,3 m en réalité. La vitesse moyenne entre ces deux positions est :",
              options: ["0,03 m/s", "0,3 m/s", "3 m/s", "30 m/s"],
              answer: 2,
              why: "v = d ÷ t = 0,3 ÷ 0,1 = 3 m/s.",
            },
            {
              q: "Que signifie « mouvement ralenti » ?",
              options: ["La trajectoire est une courbe", "La valeur de la vitesse diminue", "L'objet est immobile", "La vitesse reste faible mais constante"],
              answer: 1,
              why: "Un mouvement ralenti est un mouvement dont la vitesse diminue au cours du temps.",
            },
          ],
          trap: "Croire que des points de plus en plus espacés sur une chronophotographie indiquent un mouvement ralenti : c'est l'inverse, car l'objet parcourt alors une distance de plus en plus grande pendant la même durée.",
          method: "Devant une chronophotographie, procédez en deux temps : regardez d'abord l'alignement des points (forme de la trajectoire), puis mesurez à la règle quelques écarts successifs (évolution de la vitesse). Rédigez enfin le nom complet du mouvement en citant le référentiel.",
        },
      ],
    },
    /* ==================================================================== */
    /* INTERACTIONS ET FORCES                                                 */
    /* ==================================================================== */
    {
      id: 'interactions-forces',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'actions-mecaniques',
          title: 'Actions de contact et actions à distance',
          minutes: 30,
          objectives: [
            "Identifier les actions mécaniques qui s'exercent sur un objet.",
            "Distinguer une action de contact et une action à distance.",
            "Décrire les effets d'une action mécanique : mettre en mouvement, modifier la vitesse ou la trajectoire, déformer.",
            "Définir une interaction comme deux actions réciproques entre deux objets.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une action mécanique ?",
              paragraphs: [
                "Quand vous poussez un chariot, quand un gardien arrête le ballon ou quand vous écrasez une balle en mousse, un objet agit sur un autre : on parle d'action mécanique. L'objet qui agit s'appelle l'acteur (ou l'auteur), l'objet qui subit l'action s'appelle le receveur. Exemple : dans « le pied frappe le ballon », le pied est l'acteur et le ballon le receveur.",
                "On reconnaît une action mécanique à ses effets. Elle peut mettre un objet en mouvement (pousser un chariot immobile), modifier sa vitesse (le gardien arrête le ballon, un cycliste freine), modifier sa trajectoire (la raquette renvoie la balle dans une autre direction) ou le déformer (écraser une canette, étirer un ressort). Une même action peut produire plusieurs effets à la fois.",
              ],
              box: { label: "Définition", text: "Une action mécanique est exercée par un objet (l'acteur) sur un autre objet (le receveur). Elle peut mettre en mouvement le receveur, modifier sa vitesse, modifier sa trajectoire ou le déformer." },
            },
            {
              heading: "Les actions de contact",
              paragraphs: [
                "Une action de contact ne s'exerce que si l'acteur touche le receveur. La main qui pousse une porte, le pied qui frappe un ballon, la corde qui tire un seau, le sol qui soutient vos pieds : dès que le contact cesse, l'action disparaît.",
                "Certaines actions de contact s'exercent sur une toute petite surface, presque en un point : le doigt qui appuie sur un bouton. On dit qu'elles sont localisées. D'autres s'exercent sur toute une surface : le vent sur la voile d'un bateau, l'eau sur la coque, l'air sur un parachute. On dit qu'elles sont réparties. Les frottements de l'air ou du sol, qui freinent les objets, sont aussi des actions de contact.",
              ],
              box: { label: "Définition", text: "Action de contact : l'acteur et le receveur se touchent. Elle peut être localisée (sur une très petite surface) ou répartie (sur toute une surface)." },
            },
            {
              heading: "Les actions à distance",
              paragraphs: [
                "Une action à distance s'exerce sans que l'acteur touche le receveur. Lâchez une gomme : elle tombe, alors que personne ne la touche. C'est la Terre qui l'attire. Cette action à distance de la Terre s'exerce sur tous les objets proches d'elle ; on l'appelle le poids de l'objet.",
                "Il existe d'autres actions à distance. Un aimant attire un clou en fer sans le toucher : c'est une action magnétique. Une règle en plastique frottée sur un pull attire de petits morceaux de papier : c'est une action électrique. Dans les trois cas, aucun contact n'est nécessaire.",
              ],
              box: { label: "Définition", text: "Action à distance : l'acteur agit sur le receveur sans le toucher. Exemples : l'attraction de la Terre (le poids), l'action d'un aimant, l'action d'un objet électrisé." },
            },
            {
              heading: "Une interaction : deux actions réciproques",
              paragraphs: [
                "Une action ne va jamais dans un seul sens. Debout sur des rollers, poussez un mur : c'est vous qui reculez ! Le mur agit sur vous en même temps que vous agissez sur lui. De même, si vous approchez un clou d'un aimant posé sur une table bien lisse, l'aimant se déplace vers le clou : le clou attire aussi l'aimant.",
                "Lorsque deux objets agissent l'un sur l'autre, on dit qu'ils sont en interaction. La Terre attire une pomme, et la pomme attire aussi la Terre ; mais la Terre est si énorme que l'effet sur elle est imperceptible. Une interaction peut être de contact ou à distance.",
              ],
              box: { label: "Définition", text: "Deux objets sont en interaction lorsque chacun exerce une action sur l'autre. Si A agit sur B, alors B agit aussi sur A." },
            },
          ],
          keyPoints: [
            "Une action mécanique est exercée par un acteur sur un receveur.",
            "Effets d'une action : mettre en mouvement, modifier la vitesse, modifier la trajectoire, déformer.",
            "Action de contact : l'acteur touche le receveur (localisée ou répartie).",
            "Action à distance : sans contact. Exemples : la Terre (le poids), un aimant, un objet électrisé.",
            "Interaction : si A agit sur B, alors B agit sur A.",
          ],
          example: {
            statement: "Un footballeur frappe un ballon posé sur la pelouse ; le ballon s'élève puis retombe. 1) Citer les actions qui s'exercent sur le ballon pendant la frappe, en précisant si ce sont des actions de contact ou à distance. 2) Même question pendant le vol du ballon. 3) Quels sont les effets de l'action du pied sur le ballon ?",
            solution: [
              "1) Pendant la frappe, le ballon subit : l'action du pied (contact), l'action de la pelouse sur laquelle il repose (contact), l'action de l'air (contact, faible) et l'action de la Terre (à distance).",
              "2) Pendant le vol, plus rien ne touche le ballon, sauf l'air : il subit l'action de l'air (contact, faible) et l'action de la Terre (à distance).",
              "3) Le pied met le ballon en mouvement ; pendant le choc, il le déforme légèrement.",
              "Réponse : pendant la frappe, pied, pelouse et air (contact) et Terre (à distance) ; pendant le vol, air (contact) et Terre (à distance) ; le pied met le ballon en mouvement et le déforme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque action, nommer l'acteur et le receveur, puis dire s'il s'agit d'une action de contact ou à distance : a) un aimant attire un trombone ; b) une main lance une balle ; c) la Terre attire un parachutiste ; d) l'air freine le parachute ; e) une corde remonte un seau du puits ; f) une règle électrisée attire des petits morceaux de papier.",
              hint: "Demandez-vous à chaque fois : l'acteur touche-t-il le receveur ?",
              solution: [
                "a) Acteur : l'aimant ; receveur : le trombone ; action à distance (magnétique).",
                "b) Acteur : la main ; receveur : la balle ; action de contact.",
                "c) Acteur : la Terre ; receveur : le parachutiste ; action à distance.",
                "d) Acteur : l'air ; receveur : le parachute ; action de contact (répartie sur toute la toile).",
                "e) Acteur : la corde ; receveur : le seau ; action de contact.",
                "f) Acteur : la règle ; receveur : les morceaux de papier ; action à distance (électrique).",
                "Réponse : actions à distance en a), c) et f) ; actions de contact en b), d) et e).",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, indiquer le ou les effets de l'action décrite (mise en mouvement, modification de la vitesse, modification de la trajectoire, déformation) : a) le gardien bloque le ballon dans ses mains ; b) une raquette renvoie la balle de tennis ; c) on écrase une canette vide ; d) le vent fait avancer un voilier immobile ; e) un aimant placé sur le côté dévie une bille d'acier qui roule.",
              hint: "Regardez l'état du receveur avant et après l'action : était-il immobile ? a-t-il changé de vitesse, de direction, de forme ?",
              solution: [
                "a) Le ballon s'arrête : l'action modifie sa vitesse (elle devient nulle).",
                "b) La balle repart dans une autre direction et à une autre vitesse : modification de la trajectoire et de la vitesse (la balle est aussi déformée pendant le choc).",
                "c) La canette change de forme : déformation.",
                "d) Le voilier immobile se met à avancer : mise en mouvement.",
                "e) La bille change de direction : modification de la trajectoire.",
                "Réponse : a) vitesse ; b) trajectoire et vitesse ; c) déformation ; d) mise en mouvement ; e) trajectoire.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Inès et Hugo, chaussés de rollers, sont immobiles face à face sur un sol lisse. Inès pousse Hugo avec les mains. 1) Que se passe-t-il pour Hugo ? Quelle action en est la cause ? 2) On observe qu'Inès recule aussi. Quel objet agit sur elle ? Expliquer. 3) Inès pousse ensuite un mur : elle recule, mais le mur ne bouge pas. Quel objet agit sur Inès ? Pourquoi le mur ne semble-t-il pas bouger ? 4) Quelle notion ces expériences illustrent-elles ?",
              hint: "Rappelez-vous que si A agit sur B, alors B agit aussi sur A. Pour le mur, pensez à ce à quoi il est fixé.",
              solution: [
                "1) Hugo se met en mouvement et recule : c'est l'action de contact des mains d'Inès sur Hugo.",
                "2) Inès recule car Hugo agit lui aussi sur elle, au même moment, par le contact entre leurs mains et son corps. Inès et Hugo sont en interaction.",
                "3) C'est le mur qui agit sur Inès et la fait reculer. Inès agit aussi sur le mur, mais le mur est fixé au bâtiment, lui-même solidaire du sol : cet ensemble est bien trop lourd pour être mis en mouvement par Inès.",
                "4) Ces expériences illustrent la notion d'interaction : une action est toujours réciproque.",
                "Réponse : dans chaque cas, les deux objets agissent l'un sur l'autre ; ce sont des interactions de contact.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à l'exemple ou à la définition qui lui correspond.",
            pairs: [
              { left: "Action de contact localisée", right: "Le doigt qui appuie sur un bouton" },
              { left: "Action de contact répartie", right: "Le vent qui pousse sur toute la voile" },
              { left: "Action à distance", right: "L'aimant qui attire un clou sans le toucher" },
              { left: "Interaction", right: "Deux actions réciproques entre deux objets" },
              { left: "Déformation", right: "L'effet visible quand on écrase une balle en mousse" },
              { left: "Modification de la trajectoire", right: "L'effet d'un aimant sur une bille qui roule à côté" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces actions est une action à distance ?",
              options: ["Le pied qui frappe le ballon", "La corde qui tire un traîneau", "La Terre qui attire une pomme", "La main qui pousse une porte"],
              answer: 2,
              why: "La Terre attire la pomme sans la toucher : c'est une action à distance.",
            },
            {
              q: "Dans la phrase « Le marteau enfonce le clou », quel est le receveur ?",
              options: ["Le clou", "Le marteau", "La main", "La planche dans laquelle on cloue"],
              answer: 0,
              why: "Le receveur est l'objet qui subit l'action : ici le clou, sur lequel agit le marteau.",
            },
            {
              q: "Le vent qui gonfle la voile d'un bateau exerce une action :",
              options: ["à distance", "de contact localisée", "de contact répartie"],
              answer: 2,
              why: "L'air touche la voile sur toute sa surface : c'est une action de contact répartie.",
            },
            {
              q: "Sur des rollers, vous poussez un mur et vous reculez. Pourquoi ?",
              options: ["Parce que vous avez perdu l'équilibre", "Parce que le mur agit aussi sur vous", "Parce que le sol vous pousse en arrière", "Parce que l'air vous freine"],
              answer: 1,
              why: "Vous et le mur êtes en interaction : en même temps que vous agissez sur le mur, il agit sur vous.",
            },
            {
              q: "Quel effet produit le gardien qui arrête un ballon ?",
              options: ["Il le met en mouvement", "Il le déforme de façon définitive", "Il ne produit aucun effet", "Il modifie sa vitesse"],
              answer: 3,
              why: "Le ballon passe d'une certaine vitesse à l'arrêt : l'action du gardien modifie sa vitesse.",
            },
          ],
          trap: "Oublier les actions à distance, surtout celle de la Terre, dans l'inventaire des actions, ou croire qu'une action ne va que dans un sens : dans une interaction, chacun des deux objets agit sur l'autre.",
          method: "Pour faire l'inventaire des actions qui s'exercent sur un objet, cherchez d'abord tout ce qui le touche (actions de contact), puis ajoutez systématiquement la Terre et, s'il y en a, les aimants ou les objets électrisés (actions à distance).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'diagramme-objets-interactions',
          title: 'Le diagramme objets-interactions',
          minutes: 30,
          objectives: [
            "Choisir le système étudié et identifier les objets qui interagissent avec lui.",
            "Construire un diagramme objets-interactions en distinguant les interactions de contact et à distance.",
            "Utiliser le diagramme pour faire l'inventaire des actions qui s'exercent sur le système.",
          ],
          course: [
            {
              heading: "Choisir le système étudié",
              paragraphs: [
                "Dans une situation, beaucoup d'objets agissent les uns sur les autres. Pour s'y retrouver, on choisit d'abord l'objet que l'on veut étudier : on l'appelle le système. Tout le reste forme le milieu extérieur.",
                "Par exemple, pour un livre posé sur une table, si l'on s'intéresse au livre, le système est le livre. La table, la Terre, l'air autour sont des objets extérieurs. Le choix du système est la première étape de toute étude d'un mouvement ou d'un équilibre.",
              ],
              box: { label: "Définition", text: "Le système est l'objet que l'on choisit d'étudier. Les autres objets forment le milieu extérieur." },
            },
            {
              heading: "Construire le diagramme objets-interactions",
              paragraphs: [
                "Le diagramme objets-interactions (on l'abrège souvent en DOI) est un schéma qui montre quels objets interagissent avec le système. Chaque objet est écrit dans une bulle (un ovale ou un rectangle). On met en valeur le système, par exemple en l'entourant d'un double trait ou d'une autre couleur.",
                "On relie ensuite par un trait deux objets qui sont en interaction. Par convention, on trace un trait plein pour une interaction de contact et un trait en pointillés pour une interaction à distance. Chaque trait représente une interaction, c'est-à-dire deux actions réciproques.",
                "N'oubliez jamais la Terre : tout objet proche de la Terre est en interaction à distance avec elle. L'action de l'air, souvent très faible, peut être négligée quand l'énoncé le précise.",
              ],
              box: { label: "Règle", text: "Dans un diagramme objets-interactions : une bulle par objet, le système mis en valeur ; trait plein = interaction de contact ; trait en pointillés = interaction à distance." },
            },
            {
              heading: "Lire le diagramme : l'inventaire des actions",
              paragraphs: [
                "Le diagramme sert à faire l'inventaire des actions exercées sur le système : il y a autant d'actions sur le système que de traits qui touchent sa bulle. Les traits qui relient deux objets extérieurs entre eux ne comptent pas pour le système.",
                "Exemple du livre posé sur la table, en négligeant l'air : la bulle « livre » est reliée à la bulle « table » par un trait plein et à la bulle « Terre » par un trait en pointillés. Le livre subit donc deux actions : l'action de contact de la table et l'action à distance de la Terre.",
              ],
              box: { label: "À retenir", text: "Nombre d'actions exercées sur le système = nombre de traits qui touchent la bulle du système." },
            },
            {
              heading: "Un exemple avec un aimant",
              paragraphs: [
                "Une bille d'acier est suspendue à un fil accroché à une potence. On approche un aimant sur le côté, sans toucher la bille : le fil s'incline. Choisissons la bille comme système.",
                "Objets en interaction avec la bille : le fil, qui la touche (trait plein) ; la Terre, qui l'attire à distance (pointillés) ; l'aimant, qui l'attire sans la toucher (pointillés). La potence touche le fil, mais pas la bille : sur le diagramme, elle est reliée au fil, pas à la bille. La bille subit donc trois actions : une de contact et deux à distance.",
              ],
            },
          ],
          keyPoints: [
            "Le système est l'objet étudié ; le reste forme le milieu extérieur.",
            "Dans un diagramme objets-interactions, chaque objet est dans une bulle et le système est mis en valeur.",
            "Trait plein : interaction de contact. Trait en pointillés : interaction à distance.",
            "On n'oublie jamais la Terre, en interaction à distance avec tout objet proche d'elle.",
            "Le nombre d'actions sur le système est égal au nombre de traits qui touchent sa bulle.",
          ],
          example: {
            statement: "Une bille d'acier est suspendue à un fil accroché à une potence ; un aimant placé sur le côté l'attire sans la toucher. On néglige l'air. Construire le diagramme objets-interactions avec la bille comme système, puis faire l'inventaire des actions qui s'exercent sur la bille.",
            solution: [
              "Système : la bille (bulle mise en valeur).",
              "Objets en interaction avec la bille : le fil (il la touche), la Terre (elle l'attire à distance), l'aimant (il l'attire sans la toucher).",
              "Traits : bille et fil reliés par un trait plein ; bille et Terre par des pointillés ; bille et aimant par des pointillés. On peut aussi relier le fil et la potence par un trait plein, mais ce trait ne touche pas la bille.",
              "Trois traits touchent la bulle de la bille : elle subit trois actions.",
              "Réponse : action de contact du fil, action à distance de la Terre, action à distance de l'aimant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une pomme est accrochée à une branche de pommier. On néglige l'air. 1) Choisir le système. 2) Décrire le diagramme objets-interactions. 3) La pomme se détache et tombe : quelles interactions restent pendant la chute (on néglige toujours l'air) ?",
              hint: "Cherchez ce qui touche la pomme, puis n'oubliez pas l'action à distance qui s'exerce sur tout objet proche de la Terre.",
              solution: [
                "1) Le système est la pomme.",
                "2) La pomme est reliée à la branche par un trait plein (la queue de la pomme touche la branche) et à la Terre par un trait en pointillés.",
                "3) Pendant la chute, la pomme ne touche plus la branche : seul reste le trait en pointillés avec la Terre.",
                "Réponse : accrochée, la pomme subit l'action de la branche (contact) et de la Terre (à distance) ; en tombant, seulement celle de la Terre.",
              ],
            },
            {
              level: 2,
              statement: "Un footballeur tire dans un ballon posé sur la pelouse. Le système est le ballon ; on ne néglige pas l'air. 1) Construire le diagramme objets-interactions au moment du tir. 2) Construire le diagramme pendant le vol du ballon. 3) Combien d'actions s'exercent sur le ballon dans chaque cas ?",
              hint: "Au moment du tir, le ballon touche encore la pelouse et le pied. Pendant le vol, il ne touche plus que l'air.",
              solution: [
                "1) Au moment du tir : ballon relié par des traits pleins au pied, à la pelouse et à l'air ; relié à la Terre par des pointillés.",
                "2) Pendant le vol : ballon relié à l'air par un trait plein et à la Terre par des pointillés.",
                "3) Au moment du tir, 4 traits touchent la bulle du ballon : 4 actions. Pendant le vol, 2 traits : 2 actions.",
                "Réponse : 4 actions au moment du tir (pied, pelouse, air, Terre) ; 2 actions pendant le vol (air, Terre).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une boîte B est posée sur une boîte A, elle-même posée sur une table. On néglige l'air. 1) Construire le diagramme objets-interactions complet avec les objets : Terre, table, A et B. 2) Faire l'inventaire des actions qui s'exercent sur la boîte A. 3) Faire l'inventaire des actions qui s'exercent sur la boîte B. 4) Pourquoi la table n'apparaît-elle pas dans l'inventaire des actions sur B ?",
              hint: "Repérez, pour chaque paire d'objets, s'ils se touchent. La Terre interagit à distance avec chacun des objets.",
              solution: [
                "1) Traits pleins : B et A (B est posée sur A) ; A et table (A est posée sur la table). Traits en pointillés : Terre et B ; Terre et A ; Terre et table. (La table touche aussi le sol, que l'on peut ajouter.)",
                "2) Système A : trois traits touchent sa bulle. Actions : la boîte B (contact), la table (contact), la Terre (à distance).",
                "3) Système B : deux traits touchent sa bulle. Actions : la boîte A (contact), la Terre (à distance).",
                "4) La table ne touche pas la boîte B : il n'y a pas de trait entre leurs bulles. La table agit sur A, qui agit sur B, mais elle n'agit pas directement sur B.",
                "Réponse : sur A, trois actions (B, table, Terre) ; sur B, deux actions (A, Terre) ; la table n'agit pas sur B car elle ne la touche pas.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour faire l'inventaire des actions avec un diagramme objets-interactions.",
            items: [
              "Lire la situation et choisir le système étudié",
              "Repérer tous les objets en interaction avec le système, sans oublier la Terre",
              "Écrire le système et chacun de ces objets dans une bulle",
              "Relier le système à chaque objet : trait plein pour un contact, pointillés pour une action à distance",
              "Compter les traits qui touchent la bulle du système",
              "Rédiger l'inventaire des actions exercées sur le système",
            ],
          },
          quiz: [
            {
              q: "Dans un diagramme objets-interactions, que représente un trait en pointillés ?",
              options: ["Une interaction de contact", "Une interaction à distance", "Une interaction négligée", "Un objet qui ne bouge pas"],
              answer: 1,
              why: "Par convention, les pointillés représentent une interaction à distance, et un trait plein une interaction de contact.",
            },
            {
              q: "Un livre est posé sur une table ; on néglige l'air. Combien d'actions s'exercent sur le livre ?",
              options: ["Une", "Trois", "Quatre", "Deux"],
              answer: 3,
              why: "Le livre est relié à la table (contact) et à la Terre (à distance) : deux actions.",
            },
            {
              q: "Quel objet ne faut-il jamais oublier dans un diagramme objets-interactions ?",
              options: ["La Terre", "Le Soleil", "L'aimant", "La table"],
              answer: 0,
              why: "Tout objet proche de la Terre est en interaction à distance avec elle.",
            },
            {
              q: "Une lampe est suspendue à un fil fixé au plafond. Quel objet n'agit pas directement sur la lampe ?",
              options: ["Le fil", "La Terre, qui l'attire", "Le plafond"],
              answer: 2,
              why: "Le plafond touche le fil, mais pas la lampe : sur le diagramme, il est relié au fil et non à la lampe.",
            },
            {
              q: "Comment appelle-t-on l'objet que l'on choisit d'étudier ?",
              options: ["Le milieu extérieur", "Le référentiel", "Le système", "L'interaction principale"],
              answer: 2,
              why: "Le système est l'objet étudié ; tout le reste forme le milieu extérieur.",
            },
          ],
          trap: "Relier par un trait plein deux objets qui ne se touchent pas (la Terre et un objet en l'air, l'aimant et la bille), ou compter dans l'inventaire des traits qui ne touchent pas la bulle du système.",
          method: "Pour chaque objet de la situation, posez-vous une seule question : « Touche-t-il le système ? » Si oui, trait plein ; sinon, il n'y a de trait (en pointillés) que s'il agit à distance : Terre, aimant ou objet électrisé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'modeliser-force',
          title: 'Modéliser une action par une force',
          minutes: 35,
          objectives: [
            "Modéliser une action mécanique par une force caractérisée par un point d'application, une direction, un sens et une valeur.",
            "Mesurer la valeur d'une force avec un dynamomètre et l'exprimer en newtons (N).",
            "Représenter une force par un segment fléché en respectant une échelle donnée.",
            "Lire les caractéristiques d'une force sur un schéma.",
          ],
          course: [
            {
              heading: "De l'action mécanique à la force",
              paragraphs: [
                "Une action mécanique peut être plus ou moins intense et s'exercer dans des directions différentes : pousser doucement un chariot vers l'avant n'a pas le même effet que le tirer fortement vers la droite. Pour décrire une action avec précision, les physiciens la modélisent par une force.",
                "Une force est notée avec la lettre F surmontée d'une petite flèche. On précise souvent l'acteur et le receveur : la force exercée par la Terre sur une pomme se note F Terre/pomme (on lit « F de la Terre sur la pomme »).",
              ],
              box: { label: "Définition", text: "Une force est le modèle qui décrit une action mécanique exercée par un acteur sur un receveur. Elle est caractérisée par quatre éléments : un point d'application, une direction, un sens et une valeur." },
            },
            {
              heading: "Les quatre caractéristiques d'une force",
              paragraphs: [
                "Le point d'application est l'endroit où la force s'exerce. Pour une action de contact localisée, c'est le point de contact entre l'acteur et le receveur. Pour l'action à distance de la Terre (le poids), on choisit le centre de l'objet.",
                "La direction est la droite suivant laquelle la force agit : verticale, horizontale ou inclinée. Le sens indique de quel côté la force agit sur cette droite : vers le haut ou vers le bas, vers la droite ou vers la gauche. Ne confondez pas : la verticale est une direction, « vers le bas » est un sens.",
                "La valeur indique l'intensité de l'action. Elle s'exprime en newtons (symbole N), du nom du savant anglais Isaac Newton. Exemple : le poids d'un objet est toujours vertical et orienté vers le bas, avec pour point d'application le centre de l'objet.",
              ],
              box: { label: "À retenir", text: "Point d'application : où la force s'exerce. Direction : la droite d'action (verticale, horizontale...). Sens : de quel côté sur cette droite (vers le haut, vers la droite...). Valeur : en newtons (N)." },
            },
            {
              heading: "Mesurer une force avec un dynamomètre",
              paragraphs: [
                "On mesure la valeur d'une force avec un dynamomètre. Cet appareil contient un ressort : plus la force exercée sur son crochet est grande, plus le ressort s'allonge. Une graduation en newtons permet de lire directement la valeur de la force.",
                "Quelques ordres de grandeur : pour tenir une tablette de chocolat de 100 g, il faut exercer une force d'environ 1 N ; pour tenir une bouteille d'eau de 1,5 L, environ 15 N. Avant toute mesure, on vérifie que le dynamomètre indique bien 0 N quand rien n'est accroché, et on choisit un dynamomètre adapté à la force à mesurer.",
              ],
              box: { label: "Repère", text: "Le dynamomètre mesure la valeur d'une force, en newtons (N). Pour tenir un objet de 100 g, il faut une force d'environ 1 N." },
            },
            {
              heading: "Représenter une force par un segment fléché",
              paragraphs: [
                "Sur un schéma, une force est représentée par un segment fléché (une flèche). La flèche part du point d'application ; elle est tracée suivant la direction de la force ; sa pointe indique le sens ; sa longueur est proportionnelle à la valeur de la force, selon une échelle choisie.",
                "Pour trouver la longueur de la flèche, on utilise l'échelle. Exemple : avec l'échelle 1 cm pour 2 N, une force de 5 N est représentée par une flèche de 5 ÷ 2 = 2,5 cm. Inversement, une flèche de 3 cm représente une force de 3 × 2 = 6 N. Sur un même schéma, on utilise la même échelle pour toutes les forces : la plus longue flèche représente la force de plus grande valeur.",
              ],
              box: { label: "Règle", text: "La flèche d'une force part du point d'application, suit la direction, pointe dans le sens de la force, et a une longueur égale à la valeur divisée par l'échelle (exemple : 6 N à l'échelle 1 cm pour 2 N donne 3 cm)." },
            },
          ],
          keyPoints: [
            "Une force modélise une action mécanique ; on la note F avec une flèche, en précisant acteur et receveur.",
            "Quatre caractéristiques : point d'application, direction, sens, valeur.",
            "La valeur d'une force s'exprime en newtons (N) et se mesure avec un dynamomètre.",
            "Le poids : vertical, vers le bas, appliqué au centre de l'objet.",
            "Flèche : part du point d'application, suit la direction, pointe dans le sens ; longueur = valeur ÷ échelle.",
          ],
          example: {
            statement: "Une lampe est suspendue à un fil vertical. Le fil exerce sur la lampe une force de valeur 6 N. 1) Donner les quatre caractéristiques de cette force. 2) Quelle est la longueur de la flèche qui la représente à l'échelle 1 cm pour 2 N ?",
            solution: [
              "Acteur : le fil ; receveur : la lampe ; c'est une action de contact.",
              "Point d'application : le point d'attache du fil sur la lampe (point de contact).",
              "Direction : verticale (celle du fil). Sens : vers le haut (le fil retient la lampe). Valeur : 6 N.",
              "Longueur de la flèche : 6 ÷ 2 = 3 cm.",
              "Réponse : force appliquée au point d'attache, verticale, vers le haut, de valeur 6 N, représentée par une flèche de 3 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À l'échelle 1 cm pour 10 N, calculer la longueur de la flèche qui représente chacune de ces forces : a) 30 N ; b) 45 N ; c) 5 N ; d) 120 N. Puis, à la même échelle, donner la valeur de la force représentée par une flèche de 7 cm.",
              hint: "Longueur (en cm) = valeur (en N) ÷ 10. Pour la dernière question, faites l'inverse : valeur = longueur × 10.",
              solution: [
                "a) 30 ÷ 10 = 3 cm.",
                "b) 45 ÷ 10 = 4,5 cm.",
                "c) 5 ÷ 10 = 0,5 cm.",
                "d) 120 ÷ 10 = 12 cm.",
                "Flèche de 7 cm : 7 × 10 = 70 N.",
                "Réponse : 3 cm ; 4,5 cm ; 0,5 cm ; 12 cm ; la flèche de 7 cm représente une force de 70 N.",
              ],
            },
            {
              level: 2,
              statement: "Un enfant tire un traîneau sur la neige avec une corde horizontale. Il est placé à droite du traîneau et exerce une force de valeur 80 N. 1) Nommer l'acteur et le receveur ; l'action est-elle de contact ou à distance ? 2) Donner les quatre caractéristiques de la force exercée par la corde sur le traîneau. 3) Calculer la longueur de la flèche à l'échelle 1 cm pour 20 N.",
              hint: "La corde tire le traîneau vers l'enfant. Le point d'application est l'endroit où la corde est attachée au traîneau.",
              solution: [
                "1) Acteur : la corde (tenue par l'enfant) ; receveur : le traîneau ; action de contact.",
                "2) Point d'application : le point d'attache de la corde sur le traîneau. Direction : horizontale (celle de la corde). Sens : vers la droite (vers l'enfant). Valeur : 80 N.",
                "3) Longueur : 80 ÷ 20 = 4 cm.",
                "Réponse : force appliquée au point d'attache, horizontale, vers la droite, de 80 N, représentée par une flèche de 4 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sur un schéma à l'échelle 1 cm pour 0,5 N, une bille d'acier suspendue à un fil, immobile, est représentée avec deux flèches. Flèche 1 : elle part du point d'attache du fil sur la bille, est verticale, pointe vers le haut et mesure 4 cm. Flèche 2 : elle part du centre de la bille, est verticale, pointe vers le bas et mesure 4 cm. 1) Quelle force représente chaque flèche ? Préciser l'acteur et s'il s'agit d'une action de contact ou à distance. 2) Calculer la valeur de chaque force. 3) Comparer les caractéristiques des deux forces. 4) Un élève dessine la flèche 2 en la faisant partir du point d'attache du fil. Quelle est son erreur ?",
              hint: "Une force à distance ne s'applique pas en un point de contact. Pour la valeur, multipliez la longueur par l'échelle.",
              solution: [
                "1) Flèche 1 : la force exercée par le fil sur la bille (action de contact, appliquée au point d'attache). Flèche 2 : la force exercée par la Terre sur la bille, c'est-à-dire son poids (action à distance, appliquée au centre de la bille).",
                "2) Chaque flèche mesure 4 cm : valeur = 4 × 0,5 = 2 N pour chacune.",
                "3) Les deux forces ont la même direction (verticale) et la même valeur (2 N), mais des sens opposés (l'une vers le haut, l'autre vers le bas) et des points d'application différents.",
                "4) La Terre ne touche pas la bille : son action s'exerce à distance sur toute la bille, et on la représente à partir du centre de la bille, pas du point d'attache du fil.",
                "Réponse : fil (contact) et Terre (à distance), toutes deux de valeur 2 N, de même direction et de sens opposés ; le poids se représente à partir du centre de la bille.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez que vous savez modéliser une force.",
            statements: [
              { text: "Le newton (N) est l'unité de la valeur d'une force.", true: true, why: "La valeur d'une force s'exprime en newtons, du nom d'Isaac Newton." },
              { text: "Une force est toujours verticale.", true: false, why: "Le poids est vertical, mais une force peut être horizontale ou inclinée, comme celle d'une corde qui tire un traîneau." },
              { text: "Direction et sens, c'est la même chose.", true: false, why: "La direction est la droite d'action (verticale par exemple) ; le sens indique de quel côté (vers le haut ou vers le bas)." },
              { text: "Sur un même schéma, plus la flèche est longue, plus la valeur de la force est grande.", true: true, why: "Avec une même échelle, la longueur de la flèche est proportionnelle à la valeur de la force." },
              { text: "Un dynamomètre sert à mesurer la valeur d'une force.", true: true, why: "Son ressort s'allonge d'autant plus que la force est grande ; on lit la valeur en newtons." },
              { text: "À l'échelle 1 cm pour 5 N, une force de 15 N est représentée par une flèche de 15 cm.", true: false, why: "La longueur vaut 15 ÷ 5 = 3 cm." },
              { text: "Le poids d'un objet a pour point d'application le centre de l'objet.", true: true, why: "La Terre agit à distance sur tout l'objet : on représente son action à partir de son centre." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de la valeur d'une force ?",
              options: ["Le kilogramme (kg)", "Le newton (N)", "Le mètre par seconde (m/s)", "Le joule (J)"],
              answer: 1,
              why: "La valeur d'une force s'exprime en newtons (N) ; le kilogramme est l'unité de masse.",
            },
            {
              q: "Laquelle de ces propositions est un sens et non une direction ?",
              options: ["Vers le bas", "Verticale", "Horizontale", "Inclinée à 30°"],
              answer: 0,
              why: "Verticale, horizontale et inclinée sont des directions ; « vers le bas » indique le sens.",
            },
            {
              q: "À l'échelle 1 cm pour 4 N, quelle est la longueur de la flèche d'une force de 10 N ?",
              options: ["40 cm", "4 cm", "0,4 cm", "2,5 cm"],
              answer: 3,
              why: "Longueur = valeur ÷ échelle = 10 ÷ 4 = 2,5 cm.",
            },
            {
              q: "Quel appareil mesure la valeur d'une force ?",
              options: ["Une balance électronique", "Un chronomètre", "Un dynamomètre", "Un thermomètre"],
              answer: 2,
              why: "Le dynamomètre, grâce à son ressort gradué, mesure la valeur d'une force en newtons.",
            },
            {
              q: "Où place-t-on le point d'application de la force exercée par une main qui pousse une boîte ?",
              options: ["Au centre de la Terre", "Au point de contact entre la main et la boîte", "Au centre de la main", "N'importe où sur la boîte, cela ne change rien"],
              answer: 1,
              why: "Pour une action de contact localisée, le point d'application est le point de contact entre l'acteur et le receveur.",
            },
          ],
          trap: "Confondre direction et sens : la direction est la droite suivant laquelle la force agit (verticale, horizontale...), le sens indique de quel côté elle agit sur cette droite (vers le haut, vers la gauche...).",
          method: "Pour décrire une force, recopiez toujours la même grille : acteur, receveur, contact ou distance, point d'application, direction, sens, valeur. Pour tracer la flèche, calculez d'abord sa longueur avec l'échelle, puis tracez-la au crayon à partir du point d'application.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES CIRCUITS ÉLECTRIQUES                                               */
    /* ==================================================================== */
    {
      id: 'circuits-electriques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'serie-derivation',
          title: 'Circuits en série et circuits avec dérivations',
          minutes: 30,
          objectives: [
            "Distinguer un circuit en série et un circuit comportant des dérivations.",
            "Identifier les nœuds, les branches et la branche principale d'un circuit.",
            "Schématiser un circuit électrique avec les symboles normalisés.",
            "Prévoir l'effet du retrait ou de la panne d'un dipôle selon le type de circuit.",
          ],
          course: [
            {
              heading: "Rappels : dipôles, symboles et sens du courant",
              paragraphs: [
                "Un circuit électrique comprend un générateur (une pile, une batterie) et des récepteurs (lampes, moteurs, DEL, résistances), reliés par des fils de connexion. Chacun de ces composants possède deux bornes : on les appelle des dipôles. Le courant ne circule que si le circuit forme une boucle fermée.",
                "Pour schématiser un circuit, on utilise des symboles normalisés : la pile est représentée par deux traits parallèles de longueurs différentes (le grand trait est la borne +) ; la lampe par un cercle barré d'une croix ; le moteur par un cercle contenant la lettre M ; l'interrupteur ouvert par un trait levé, l'interrupteur fermé par un trait continu. Les fils sont tracés à la règle, avec des angles droits.",
                "Par convention, à l'extérieur du générateur, le courant circule de la borne + vers la borne - du générateur. On l'indique sur le schéma par une flèche sur un fil.",
              ],
              box: { label: "Règle", text: "Sens conventionnel du courant : à l'extérieur du générateur, le courant va de la borne + vers la borne -. Le courant ne circule que dans une boucle fermée." },
            },
            {
              heading: "Le circuit en série",
              paragraphs: [
                "Dans un circuit en série, tous les dipôles sont branchés les uns à la suite des autres et forment une seule boucle avec le générateur. Le courant n'a qu'un seul chemin possible.",
                "Conséquence : si un dipôle est retiré ou grillé, la boucle est ouverte et plus aucun dipôle ne fonctionne. C'est ce qui se passe avec certaines guirlandes : une seule ampoule grillée et toute la guirlande s'éteint. L'ordre des dipôles dans la boucle ne change rien à leur fonctionnement. Si l'on ajoute des lampes en série, chacune brille moins.",
              ],
              box: { label: "Définition", text: "Des dipôles sont en série lorsqu'ils forment avec le générateur une seule boucle. Si l'un d'eux est retiré ou grillé, aucun ne fonctionne plus." },
            },
            {
              heading: "Le circuit avec dérivations",
              paragraphs: [
                "Un circuit avec dérivations comporte plusieurs boucles. On y repère des nœuds : un nœud est un point du circuit où se rejoignent au moins trois fils. Une branche est une portion de circuit comprise entre deux nœuds consécutifs. La branche qui contient le générateur s'appelle la branche principale ; les autres sont des branches dérivées.",
                "Des dipôles placés dans des branches différentes reliées aux deux mêmes nœuds sont dits en dérivation. Chaque branche dérivée fonctionne indépendamment des autres : si l'on dévisse la lampe d'une branche, les lampes des autres branches restent allumées. En revanche, si un dipôle de la branche principale est retiré, plus rien ne fonctionne.",
                "Dans une maison, les lampes et les appareils sont branchés en dérivation : vous pouvez éteindre la lumière de la cuisine sans éteindre celle du salon, et débrancher le grille-pain sans couper le réfrigérateur.",
              ],
              box: { label: "Définition", text: "Nœud : point où se rejoignent au moins trois fils. Branche : portion de circuit entre deux nœuds consécutifs. Branche principale : celle qui contient le générateur. Des dipôles en dérivation fonctionnent indépendamment les uns des autres." },
            },
            {
              heading: "Attention au court-circuit",
              paragraphs: [
                "Un fil de connexion branché directement entre les deux bornes d'un dipôle le court-circuite : le courant passe par le fil et le dipôle ne fonctionne plus (une lampe court-circuitée s'éteint). Dans un circuit en série, les autres lampes brillent alors plus fort.",
                "Relier directement les deux bornes d'un générateur par un fil est un court-circuit du générateur : le courant devient très intense, les fils et la pile chauffent fortement, ce qui peut provoquer une brûlure ou un incendie. Il ne faut jamais le faire. Les installations domestiques sont protégées par des fusibles ou des disjoncteurs.",
              ],
              box: { label: "À retenir", text: "Un dipôle court-circuité ne fonctionne plus. Le court-circuit d'un générateur est dangereux : risque d'échauffement, de brûlure et d'incendie." },
            },
          ],
          keyPoints: [
            "Circuit en série : une seule boucle ; si un dipôle est retiré, plus rien ne fonctionne.",
            "Circuit avec dérivations : plusieurs boucles, des nœuds et des branches.",
            "Nœud : point où se rejoignent au moins trois fils ; branche : portion entre deux nœuds consécutifs.",
            "La branche principale contient le générateur ; les dipôles en dérivation fonctionnent indépendamment.",
            "Les appareils d'une maison sont branchés en dérivation.",
            "Le court-circuit d'un générateur est dangereux : il ne faut jamais relier directement ses deux bornes.",
          ],
          example: {
            statement: "Un circuit comprend une pile, un interrupteur K et une lampe L1, branchés à la suite les uns des autres jusqu'à un nœud A. Entre le nœud A et un nœud B, deux branches sont placées côte à côte : l'une contient une lampe L2, l'autre un moteur M. Le nœud B est relié à la pile. 1) Combien le circuit a-t-il de nœuds et de branches ? 2) Quels dipôles sont dans la branche principale ? 3) Que se passe-t-il si l'on dévisse L2 ? 4) Et si l'on dévisse L1 ?",
            solution: [
              "1) Les points A et B relient chacun trois fils : le circuit a 2 nœuds. Il a 3 branches : la branche principale, la branche de L2 et la branche du moteur.",
              "2) La branche principale contient le générateur : on y trouve la pile, l'interrupteur K et la lampe L1.",
              "3) Si l'on dévisse L2, sa branche est ouverte, mais la boucle pile, L1, moteur reste fermée : L1 reste allumée et le moteur continue de tourner.",
              "4) Si l'on dévisse L1, la branche principale est ouverte : le courant ne peut plus sortir de la pile, plus rien ne fonctionne.",
              "Réponse : 2 nœuds et 3 branches ; branche principale : pile, K et L1 ; sans L2, L1 et M fonctionnent ; sans L1, plus rien ne fonctionne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dire si les dipôles cités sont branchés en série ou en dérivation, et justifier : a) une guirlande dont toutes les ampoules s'éteignent quand une seule grille ; b) les deux phares avant d'une voiture : quand l'un grille, l'autre reste allumé ; c) les prises de courant d'une maison ; d) dans une lampe de poche, la pile, l'interrupteur et l'ampoule.",
              hint: "Demandez-vous si la panne d'un dipôle empêche les autres de fonctionner.",
              solution: [
                "a) Une ampoule grillée éteint toutes les autres : il n'y a qu'une boucle, les ampoules sont en série.",
                "b) Un phare grillé n'empêche pas l'autre de fonctionner : ils sont en dérivation.",
                "c) Chaque appareil branché fonctionne indépendamment des autres : les prises sont en dérivation.",
                "d) Les trois dipôles forment une seule boucle : ils sont en série.",
                "Réponse : a) série ; b) dérivation ; c) dérivation ; d) série.",
              ],
            },
            {
              level: 2,
              statement: "Un circuit comprend une pile, un interrupteur K fermé et une lampe L1 dans la branche principale. Entre deux nœuds A et B, il y a deux branches dérivées : la première contient la lampe L2 ; la seconde contient les lampes L3 et L4, placées l'une après l'autre. 1) Combien y a-t-il de branches ? 2) Quelles lampes sont en série entre elles ? 3) Que se passe-t-il si l'on dévisse L3 ? 4) Que se passe-t-il si l'on dévisse L2 ? 5) Que se passe-t-il si l'on ouvre K ?",
              hint: "Repérez la branche de chaque lampe. Une lampe dévissée ouvre seulement la branche dans laquelle elle se trouve.",
              solution: [
                "1) Il y a 3 branches : la branche principale (pile, K, L1), la branche de L2 et la branche de L3 et L4.",
                "2) L3 et L4 sont dans la même branche, l'une après l'autre : elles sont en série entre elles. (L1 est aussi en série avec l'ensemble des deux branches dérivées.)",
                "3) Si l'on dévisse L3, la branche L3 et L4 est ouverte : L4 s'éteint. L1 et L2 restent allumées.",
                "4) Si l'on dévisse L2, seule sa branche est ouverte : L1, L3 et L4 restent allumées.",
                "5) K est dans la branche principale : en l'ouvrant, on coupe tout le circuit, toutes les lampes s'éteignent.",
                "Réponse : 3 branches ; L3 et L4 en série ; sans L3, L4 s'éteint ; sans L2, les autres brillent ; K ouvert, tout s'éteint.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On veut éclairer la maquette d'une maison avec une pile, deux lampes (salon et cuisine) et trois interrupteurs. Le cahier des charges est le suivant : un interrupteur général K doit pouvoir tout éteindre ; chaque lampe doit pouvoir être allumée ou éteinte seule, grâce à son propre interrupteur (K1 pour le salon, K2 pour la cuisine). 1) Les deux lampes doivent-elles être en série ou en dérivation ? 2) Où placer K, K1 et K2 ? 3) Décrire le circuit obtenu, puis vérifier chaque exigence du cahier des charges.",
              hint: "Un interrupteur commande tous les dipôles de la même boucle. Pour commander une seule lampe, placez son interrupteur dans sa propre branche.",
              solution: [
                "1) Chaque lampe doit fonctionner indépendamment de l'autre : les lampes doivent être en dérivation.",
                "2) K doit tout couper : on le place dans la branche principale, avec la pile. K1 est placé dans la branche du salon, en série avec la lampe du salon ; K2 dans la branche de la cuisine, en série avec la lampe de la cuisine.",
                "3) Circuit : pile et K dans la branche principale ; entre deux nœuds, une branche contient K1 et la lampe du salon, l'autre contient K2 et la lampe de la cuisine.",
                "Vérification : K ouvert, la branche principale est coupée et les deux lampes sont éteintes. K fermé, K1 fermé et K2 ouvert, seule la lampe du salon brille ; K1 ouvert et K2 fermé, seule la lampe de la cuisine brille.",
                "Réponse : lampes en dérivation, K dans la branche principale, K1 et K2 chacun dans la branche de sa lampe ; toutes les exigences sont respectées.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot du vocabulaire des circuits à sa définition.",
            pairs: [
              { left: "Nœud", right: "Point du circuit où se rejoignent au moins trois fils" },
              { left: "Branche", right: "Portion de circuit comprise entre deux nœuds consécutifs" },
              { left: "Branche principale", right: "La branche qui contient le générateur" },
              { left: "Circuit en série", right: "Circuit formé d'une seule boucle" },
              { left: "Dipôles en dérivation", right: "Dipôles placés dans des branches différentes, entre les deux mêmes nœuds" },
              { left: "Court-circuit", right: "Liaison directe des deux bornes d'un dipôle par un fil" },
            ],
          },
          quiz: [
            {
              q: "Dans un circuit en série, une lampe grille. Que se passe-t-il ?",
              options: ["Les autres lampes se mettent à briller plus fort", "Seule cette lampe s'éteint", "Rien ne change", "Tous les dipôles cessent de fonctionner"],
              answer: 3,
              why: "Il n'y a qu'une boucle : une lampe grillée ouvre le circuit et le courant ne circule plus.",
            },
            {
              q: "Qu'est-ce qu'un nœud dans un circuit électrique ?",
              options: ["Un point où se rejoignent au moins trois fils", "Un fil mal branché qui empêche le courant de passer", "La borne + du générateur", "Un dipôle en panne"],
              answer: 0,
              why: "Un nœud est un point de jonction d'au moins trois fils ; il délimite les branches.",
            },
            {
              q: "Pourquoi les appareils d'une maison sont-ils branchés en dérivation ?",
              options: ["Pour qu'ils consomment moins", "Pour que le courant soit moins dangereux", "Pour qu'ils fonctionnent indépendamment", "Parce que c'est moins cher en fils électriques"],
              answer: 2,
              why: "En dérivation, chaque appareil peut être allumé ou éteint sans modifier le fonctionnement des autres.",
            },
            {
              q: "À l'extérieur du générateur, le sens conventionnel du courant va :",
              options: ["de la borne - vers la borne +", "de la borne + vers la borne -", "dans les deux sens à la fois", "dans le sens choisi par l'interrupteur"],
              answer: 1,
              why: "Par convention, le courant sort par la borne + du générateur et revient par la borne -.",
            },
            {
              q: "Dans un circuit avec dérivations, on retire un dipôle de la branche principale. Que se passe-t-il ?",
              options: ["Seule sa branche s'arrête", "Les branches dérivées fonctionnent mieux", "Rien ne change", "Plus rien ne fonctionne"],
              answer: 3,
              why: "Tout le courant passe par la branche principale : si elle est ouverte, aucune branche n'est alimentée.",
            },
          ],
          trap: "Croire que des dipôles dessinés côte à côte sur le schéma sont forcément en dérivation : il faut suivre le chemin du courant ; des dipôles sont en dérivation seulement s'ils sont dans des branches différentes reliées aux deux mêmes nœuds.",
          method: "Pour analyser un circuit, repassez au crayon de couleur chaque boucle en partant de la borne + du générateur. S'il n'y a qu'une boucle, le circuit est en série ; sinon, entourez les nœuds, numérotez les branches et repérez la branche principale (celle du générateur).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'intensite-courant',
          title: 'L\'intensité du courant et ses lois',
          minutes: 35,
          objectives: [
            "Mesurer l'intensité d'un courant avec un ampèremètre branché en série.",
            "Utiliser l'unité d'intensité, l'ampère (A), et convertir des milliampères en ampères.",
            "Exploiter la loi d'unicité de l'intensité dans un circuit en série.",
            "Exploiter la loi d'additivité des intensités dans un circuit avec dérivations.",
          ],
          course: [
            {
              heading: "L'intensité du courant : une grandeur mesurable",
              paragraphs: [
                "Le courant électrique qui traverse un circuit peut être plus ou moins important : une lampe brille plus ou moins, un moteur tourne plus ou moins vite. Pour le mesurer, on utilise une grandeur appelée intensité du courant, notée I.",
                "On peut comparer l'intensité au débit d'une rivière, c'est-à-dire à la quantité d'eau qui passe en un point chaque seconde : plus le débit est grand, plus il passe d'eau. De même, plus l'intensité est grande, plus il passe d'électricité en un point du circuit chaque seconde.",
                "L'intensité s'exprime en ampères (symbole A), du nom du physicien français André-Marie Ampère. On utilise souvent le milliampère (mA) pour les petites intensités : 1 A = 1 000 mA. Exemples : 0,25 A = 250 mA ; 40 mA = 0,040 A.",
              ],
              box: { label: "Repère", text: "L'intensité du courant se note I et s'exprime en ampères (A). 1 A = 1 000 mA ; 1 mA = 0,001 A." },
            },
            {
              heading: "Mesurer l'intensité avec un ampèremètre",
              paragraphs: [
                "On mesure l'intensité avec un ampèremètre, souvent un multimètre réglé en position ampèremètre (zone A ou mA). Sur un schéma, il est représenté par un cercle contenant la lettre A.",
                "L'ampèremètre se branche en série : on ouvre le circuit à l'endroit où l'on veut mesurer et on y insère l'appareil, pour que le courant le traverse. Le courant doit entrer par la borne A (ou mA) et sortir par la borne COM. Si la valeur affichée est négative, c'est que les bornes sont inversées.",
                "Par sécurité, on commence par le plus grand calibre, puis on choisit un calibre plus petit (mais supérieur à la valeur mesurée) pour obtenir une mesure plus précise. On ferme l'interrupteur seulement quand le montage est prêt.",
              ],
              box: { label: "Règle", text: "L'ampèremètre se branche en série. Le courant entre par la borne A (ou mA) et sort par la borne COM. On commence par le plus grand calibre." },
            },
            {
              heading: "La loi d'unicité de l'intensité (circuit en série)",
              paragraphs: [
                "Dans un circuit en série, mesurons l'intensité à différents endroits : avant la lampe, entre la lampe et le moteur, après le moteur. L'ampèremètre indique toujours la même valeur, par exemple 0,18 A, quel que soit l'ordre des dipôles.",
                "Le courant n'est donc pas « consommé » par les lampes : il n'y a pas moins de courant après une lampe qu'avant. Comme l'eau dans un tuyau unique, tout ce qui entre à un bout ressort à l'autre : le débit est le même partout.",
              ],
              box: { label: "Loi", text: "Loi d'unicité de l'intensité : dans un circuit en série, l'intensité du courant est la même en tout point du circuit." },
            },
            {
              heading: "La loi d'additivité des intensités (circuit avec dérivations)",
              paragraphs: [
                "Dans un circuit avec dérivations, le courant de la branche principale se partage entre les branches dérivées au niveau d'un nœud, puis se rassemble au nœud suivant. Comme une rivière qui se sépare en deux bras autour d'une île : l'eau du fleuve se répartit entre les deux bras, sans en perdre.",
                "On mesure par exemple I = 0,60 A dans la branche principale, I1 = 0,25 A dans la branche de la lampe L1 et I2 = 0,35 A dans celle de la lampe L2. On vérifie que 0,25 + 0,35 = 0,60 : l'intensité dans la branche principale est égale à la somme des intensités dans les branches dérivées. Plus généralement, en un nœud, la somme des intensités des courants qui arrivent est égale à la somme des intensités des courants qui repartent.",
              ],
              box: { label: "Loi", text: "Loi d'additivité des intensités (loi des nœuds) : l'intensité du courant dans la branche principale est égale à la somme des intensités dans les branches dérivées : I = I1 + I2." },
            },
          ],
          keyPoints: [
            "L'intensité I s'exprime en ampères (A) ; 1 A = 1 000 mA.",
            "L'ampèremètre se branche en série ; le courant entre par A (ou mA) et sort par COM.",
            "On commence par le plus grand calibre, puis on l'abaisse pour plus de précision.",
            "Loi d'unicité : en série, l'intensité est la même partout ; les lampes ne consomment pas le courant.",
            "Loi d'additivité : I (branche principale) = I1 + I2 (branches dérivées).",
          ],
          example: {
            statement: "Données fictives. Dans un circuit, une pile alimente deux lampes L1 et L2 branchées en dérivation. Un ampèremètre placé dans la branche principale indique 0,60 A ; un autre placé dans la branche de L1 indique 250 mA. 1) Convertir 250 mA en ampères. 2) Calculer l'intensité I2 du courant qui traverse L2. 3) Exprimer I2 en milliampères.",
            solution: [
              "1) 250 mA = 250 ÷ 1 000 = 0,25 A.",
              "2) D'après la loi d'additivité des intensités : I = I1 + I2, donc I2 = I - I1.",
              "I2 = 0,60 - 0,25 = 0,35 A.",
              "3) 0,35 A = 0,35 × 1 000 = 350 mA.",
              "Réponse : le courant qui traverse L2 a une intensité de 0,35 A, soit 350 mA.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Convertir : a) 0,35 A en mA ; b) 1 250 mA en A ; c) 45 mA en A ; d) 2 A en mA. 2) Données fictives. Dans un circuit en série comprenant une pile, une lampe et un moteur, un ampèremètre placé juste avant la lampe indique 180 mA. Que vont indiquer un ampèremètre placé entre la lampe et le moteur, puis un ampèremètre placé après le moteur ? Justifier.",
              hint: "Pour passer des A aux mA, multipliez par 1 000 ; des mA aux A, divisez par 1 000. Pour la question 2, pensez à la loi d'unicité.",
              solution: [
                "1) a) 0,35 × 1 000 = 350 mA ; b) 1 250 ÷ 1 000 = 1,25 A ; c) 45 ÷ 1 000 = 0,045 A ; d) 2 × 1 000 = 2 000 mA.",
                "2) Le circuit est en série : d'après la loi d'unicité, l'intensité est la même en tout point.",
                "Les deux ampèremètres indiquent donc aussi 180 mA.",
                "Réponse : 350 mA ; 1,25 A ; 0,045 A ; 2 000 mA ; les deux ampèremètres indiquent 180 mA.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une pile alimente trois dipôles branchés en dérivation : une lampe L1 traversée par I1 = 0,12 A, une lampe L2 traversée par I2 = 0,20 A et un moteur traversé par I3 = 0,30 A. 1) Calculer l'intensité I dans la branche principale. 2) Où faut-il placer l'ampèremètre pour mesurer I ? 3) On dévisse L2. On admet que le fonctionnement des autres branches ne change pas. Que devient I ?",
              hint: "Dans un circuit avec dérivations, l'intensité de la branche principale est la somme des intensités des branches dérivées.",
              solution: [
                "1) Loi d'additivité : I = I1 + I2 + I3 = 0,12 + 0,20 + 0,30 = 0,62 A.",
                "2) L'ampèremètre doit être branché en série dans la branche principale, par exemple juste à la sortie de la pile.",
                "3) Sans L2, sa branche ne laisse plus passer de courant (I2 = 0 A) : I = 0,12 + 0,30 = 0,42 A.",
                "Réponse : I = 0,62 A ; l'ampèremètre se place en série dans la branche principale ; sans L2, I = 0,42 A.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Un circuit comprend une pile et une lampe L1 dans la branche principale. Entre deux nœuds, il y a deux branches dérivées : la première contient une lampe L2 ; la seconde contient une lampe L3 et un moteur M branchés l'un après l'autre. On mesure : intensité dans L1 : 450 mA ; intensité dans L2 : 0,20 A. 1) Calculer l'intensité du courant qui traverse L3, en A puis en mA. 2) Quelle est l'intensité du courant qui traverse le moteur ? Justifier. 3) Un élève affirme : « L1 consomme une partie du courant, donc l'intensité est plus petite après L1 qu'avant. » Lui répondre.",
              hint: "Convertissez d'abord toutes les intensités dans la même unité. L3 et M sont dans la même branche, donc en série entre eux.",
              solution: [
                "1) L1 est dans la branche principale : I = 450 mA = 0,45 A. Loi d'additivité : I = I2 + I3, donc I3 = 0,45 - 0,20 = 0,25 A, soit 250 mA.",
                "2) L3 et M sont en série dans la même branche : d'après la loi d'unicité, ils sont traversés par la même intensité, 0,25 A.",
                "3) C'est faux : L1 est en série dans la branche principale, et la loi d'unicité s'applique. L'intensité est la même avant et après L1 (0,45 A). Le courant n'est pas consommé ; c'est l'énergie électrique qui est convertie par la lampe en lumière et en chaleur.",
                "Réponse : I3 = 0,25 A = 250 mA ; le moteur est aussi traversé par 0,25 A ; l'intensité est la même avant et après L1.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour mesurer une intensité avec un multimètre.",
            items: [
              "Régler le multimètre en position ampèremètre, sur le plus grand calibre",
              "Insérer l'ampèremètre en série, circuit ouvert : borne A vers la borne + de la pile, borne COM vers la borne -",
              "Fermer l'interrupteur du circuit",
              "Si la valeur est petite, passer à un calibre plus petit pour plus de précision",
              "Lire la valeur affichée",
              "Écrire le résultat avec son unité (A ou mA)",
            ],
          },
          quiz: [
            {
              q: "Comment branche-t-on un ampèremètre ?",
              options: ["En dérivation aux bornes d'un dipôle", "Directement aux bornes de la pile", "En série dans le circuit", "À la place du générateur"],
              answer: 2,
              why: "L'ampèremètre doit être traversé par le courant à mesurer : on le branche en série.",
            },
            {
              q: "Combien vaut 0,08 A en milliampères ?",
              options: ["8 mA", "800 mA", "0,8 mA", "80 mA"],
              answer: 3,
              why: "1 A = 1 000 mA, donc 0,08 A = 0,08 × 1 000 = 80 mA.",
            },
            {
              q: "Dans un circuit en série, l'intensité mesurée avant une lampe est 0,3 A. Après la lampe, elle vaut :",
              options: ["0,3 A", "moins de 0,3 A", "plus de 0,3 A", "0 A"],
              answer: 0,
              why: "Loi d'unicité : dans un circuit en série, l'intensité est la même en tout point.",
            },
            {
              q: "Deux lampes sont en dérivation. I1 = 0,15 A et I2 = 0,25 A. Que vaut l'intensité dans la branche principale ?",
              options: ["0,10 A", "0,40 A", "0,25 A", "0,15 A"],
              answer: 1,
              why: "Loi d'additivité : I = I1 + I2 = 0,15 + 0,25 = 0,40 A.",
            },
            {
              q: "Par quelle borne le courant doit-il sortir d'un ampèremètre ?",
              options: ["La borne A", "La borne mA", "La borne V/Ω", "La borne COM"],
              answer: 3,
              why: "Le courant entre par la borne A (ou mA) et sort par la borne COM.",
            },
          ],
          trap: "Croire que les lampes « consomment » le courant et que l'intensité diminue après chaque lampe : dans un circuit en série, l'intensité est la même en tout point (loi d'unicité).",
          method: "Avant d'appliquer une loi, identifiez le type de circuit : en série, utilisez la loi d'unicité (même intensité partout) ; avec des dérivations, la loi d'additivité (I = I1 + I2). Convertissez toutes les intensités dans la même unité avant de les additionner ou de les soustraire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tension-electrique',
          title: 'La tension électrique et ses lois',
          minutes: 35,
          objectives: [
            "Mesurer une tension avec un voltmètre branché en dérivation.",
            "Utiliser l'unité de tension, le volt (V).",
            "Exploiter la loi d'additivité des tensions dans un circuit en série.",
            "Exploiter la loi d'égalité des tensions pour des dipôles en dérivation.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la tension électrique ?",
              paragraphs: [
                "Sur une pile, on lit une indication comme 1,5 V, 4,5 V ou 9 V : c'est sa tension électrique. La tension, notée U, existe entre deux points, par exemple entre les deux bornes d'un dipôle. Elle s'exprime en volts (symbole V), du nom du physicien italien Alessandro Volta. La tension du secteur, dans les prises d'une maison, est de 230 V : elle est dangereuse.",
                "Pour se représenter la tension, on peut penser à l'eau d'un circuit de jardin : la pompe remonte l'eau en haut, d'où elle redescend en faisant tourner des roues. La différence de hauteur créée par la pompe joue le rôle de la tension du générateur : c'est elle qui « pousse » le courant dans le circuit.",
                "Différence importante avec l'intensité : une pile seule, non branchée, a déjà une tension entre ses bornes (environ 4,5 V pour une pile de 4,5 V), alors qu'aucun courant ne circule.",
              ],
              box: { label: "Repère", text: "La tension électrique se note U et s'exprime en volts (V). Une pile isolée a une tension entre ses bornes. Prises de la maison : 230 V, tension dangereuse." },
            },
            {
              heading: "Mesurer une tension avec un voltmètre",
              paragraphs: [
                "On mesure une tension avec un voltmètre, souvent un multimètre réglé en position voltmètre (zone V). Sur un schéma, il est représenté par un cercle contenant la lettre V.",
                "Le voltmètre se branche en dérivation, c'est-à-dire aux bornes du dipôle étudié, sans ouvrir le circuit : on relie ses deux bornes aux deux bornes du dipôle. La borne V est reliée du côté de la borne + du générateur, la borne COM du côté de la borne -. Comme pour l'ampèremètre, on commence par le plus grand calibre.",
                "Quelques mesures utiles : la tension aux bornes d'un fil de connexion ou d'un interrupteur fermé est pratiquement nulle. Dans un circuit en série ouvert, la tension aux bornes d'une lampe est nulle, mais la tension aux bornes de l'interrupteur ouvert est égale à celle du générateur.",
              ],
              box: { label: "Règle", text: "Le voltmètre se branche en dérivation, aux bornes du dipôle. Borne V du côté de la borne + du générateur, borne COM du côté de la borne -." },
            },
            {
              heading: "La loi d'additivité des tensions (circuit en série)",
              paragraphs: [
                "Dans un circuit en série formé d'une pile, d'une lampe et d'un moteur, on mesure par exemple : 4,5 V aux bornes de la pile, 2,7 V aux bornes de la lampe et 1,8 V aux bornes du moteur. On remarque que 2,7 + 1,8 = 4,5 : la tension du générateur se répartit entre les dipôles.",
                "Avec l'image du circuit d'eau : la hauteur que la pompe fait gagner à l'eau est entièrement redescendue à travers les différentes chutes, l'une après l'autre. La somme des hauteurs des chutes est égale à la hauteur créée par la pompe.",
              ],
              box: { label: "Loi", text: "Loi d'additivité des tensions : dans un circuit en série, la tension aux bornes du générateur est égale à la somme des tensions aux bornes des autres dipôles : U = U1 + U2 + ..." },
            },
            {
              heading: "La loi d'égalité des tensions (dipôles en dérivation)",
              paragraphs: [
                "Branchons deux lampes en dérivation directement aux bornes d'une pile de 4,5 V. Un voltmètre placé aux bornes de chaque lampe indique 4,5 V : les deux lampes ont la même tension à leurs bornes, égale à celle de la pile.",
                "C'est pour cela que tous les appareils d'une maison, branchés en dérivation, fonctionnent sous la même tension de 230 V. Attention : s'il y a un dipôle dans la branche principale, il prend sa part de la tension (loi d'additivité), et les dipôles en dérivation se partagent le reste, avec la même tension pour chacun.",
              ],
              box: { label: "Loi", text: "Loi d'égalité des tensions : des dipôles branchés en dérivation ont la même tension entre leurs bornes." },
            },
            {
              heading: "La tension nominale d'un dipôle",
              paragraphs: [
                "Sur le culot d'une lampe, on lit souvent deux indications, par exemple « 6 V ; 0,1 A ». La tension indiquée est la tension nominale : c'est la tension sous laquelle la lampe fonctionne normalement.",
                "Si la tension à ses bornes est bien plus faible, la lampe est en sous-tension : elle brille faiblement, ou pas du tout. Si la tension est bien plus forte, elle est en surtension : elle brille très fort, mais risque de griller rapidement. On choisit donc un générateur et un montage adaptés aux dipôles.",
              ],
            },
          ],
          keyPoints: [
            "La tension U s'exprime en volts (V) et se mesure entre deux points, par exemple aux bornes d'un dipôle.",
            "Le voltmètre se branche en dérivation ; borne V côté +, borne COM côté -.",
            "Tension aux bornes d'un fil ou d'un interrupteur fermé : pratiquement 0 V.",
            "Loi d'additivité (série) : U générateur = U1 + U2 + ...",
            "Loi d'égalité (dérivation) : les dipôles en dérivation ont la même tension à leurs bornes.",
            "Un dipôle fonctionne normalement sous sa tension nominale.",
          ],
          example: {
            statement: "Données fictives. Un circuit en série comprend une pile de 6,0 V, une lampe L1 et une lampe L2. Un voltmètre branché aux bornes de L1 indique 3,5 V. 1) Comment le voltmètre a-t-il été branché ? 2) Calculer la tension aux bornes de L2.",
            solution: [
              "1) Le voltmètre a été branché en dérivation aux bornes de L1, borne V du côté de la borne + de la pile.",
              "2) Le circuit est en série : on applique la loi d'additivité des tensions.",
              "U pile = U1 + U2, donc U2 = U pile - U1.",
              "U2 = 6,0 - 3,5 = 2,5 V.",
              "Réponse : la tension aux bornes de L2 est 2,5 V.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. 1) Un circuit en série comprend un générateur de 12 V, une lampe et un moteur. La tension aux bornes de la lampe est 7,5 V. Calculer la tension aux bornes du moteur. 2) Que mesure un voltmètre branché aux bornes d'un fil de connexion de ce circuit ?",
              hint: "En série, la tension du générateur est égale à la somme des tensions des autres dipôles.",
              solution: [
                "1) Loi d'additivité des tensions : U générateur = U lampe + U moteur.",
                "U moteur = 12 - 7,5 = 4,5 V.",
                "2) La tension aux bornes d'un fil de connexion est pratiquement nulle : le voltmètre indique environ 0 V.",
                "Réponse : 4,5 V aux bornes du moteur ; environ 0 V aux bornes du fil.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une pile de 4,5 V alimente un circuit qui comprend une lampe L1 dans la branche principale, puis deux lampes L2 et L3 branchées en dérivation l'une de l'autre. La tension aux bornes de L1 est 1,5 V. 1) Calculer la tension aux bornes de L2. 2) En déduire la tension aux bornes de L3. Justifier chaque réponse par la loi utilisée.",
              hint: "L'ensemble formé par L2 et L3 est en série avec L1. Puis, en dérivation, les tensions sont égales.",
              solution: [
                "1) L1 et l'ensemble {L2 ; L3} sont en série avec la pile. Loi d'additivité : U pile = U1 + U2, donc U2 = 4,5 - 1,5 = 3,0 V.",
                "2) L2 et L3 sont en dérivation : d'après la loi d'égalité des tensions, U3 = U2 = 3,0 V.",
                "Réponse : U2 = 3,0 V et U3 = 3,0 V.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. 1) Un circuit en série comprend une pile de 9 V, une lampe et un interrupteur. Donner la tension aux bornes de la lampe et aux bornes de l'interrupteur, d'abord quand l'interrupteur est ouvert, puis quand il est fermé (on considère que la tension aux bornes des fils est nulle). 2) On dispose d'un générateur de 12 V et de deux lampes identiques dont la tension nominale est 6 V. Faut-il les brancher en série ou en dérivation pour qu'elles fonctionnent normalement ? Justifier, et dire ce qui se passerait avec l'autre montage.",
              hint: "Interrupteur ouvert : aucun courant ne circule, la lampe a une tension nulle. Pour la question 2, appliquez la loi d'additivité au montage en série, et la loi d'égalité au montage en dérivation.",
              solution: [
                "1) Interrupteur ouvert : aucun courant ne circule, la tension aux bornes de la lampe est 0 V ; d'après la loi d'additivité, toute la tension se retrouve aux bornes de l'interrupteur : 9 V.",
                "Interrupteur fermé : la tension aux bornes de l'interrupteur fermé est pratiquement nulle (0 V) ; la lampe a donc 9 V à ses bornes.",
                "2) En série, les deux lampes identiques se partagent la tension du générateur : 12 ÷ 2 = 6 V chacune. C'est leur tension nominale : elles fonctionnent normalement.",
                "En dérivation, d'après la loi d'égalité, chaque lampe aurait 12 V à ses bornes, le double de sa tension nominale : elles seraient en surtension, brilleraient très fort et risqueraient de griller.",
                "Réponse : ouvert, 0 V pour la lampe et 9 V pour l'interrupteur ; fermé, 9 V pour la lampe et 0 V pour l'interrupteur ; il faut brancher les deux lampes en série.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ne confondez pas les lois de la tension et celles de l'intensité.",
            statements: [
              { text: "Le voltmètre se branche en dérivation, aux bornes du dipôle.", true: true, why: "On le branche sans ouvrir le circuit, ses deux bornes reliées aux deux bornes du dipôle." },
              { text: "Une pile qui n'est branchée à rien a une tension nulle entre ses bornes.", true: false, why: "Une pile isolée a une tension entre ses bornes, même si aucun courant ne circule." },
              { text: "Dans un circuit en série, la tension est toujours la même aux bornes de tous les dipôles.", true: false, why: "C'est l'intensité qui est la même partout en série ; les tensions, elles, s'additionnent." },
              { text: "La tension aux bornes d'un fil de connexion est pratiquement nulle.", true: true, why: "Un fil de connexion ne prend pratiquement aucune part de la tension du générateur." },
              { text: "Deux lampes branchées en dérivation ont la même tension à leurs bornes.", true: true, why: "C'est la loi d'égalité des tensions pour des dipôles en dérivation." },
              { text: "La tension aux bornes d'un interrupteur ouvert est toujours nulle.", true: false, why: "Dans un circuit en série, l'interrupteur ouvert a à ses bornes la tension du générateur." },
              { text: "Les appareils d'une maison fonctionnent sous la même tension parce qu'ils sont en dérivation.", true: true, why: "Branchés en dérivation sur le secteur, ils ont tous 230 V à leurs bornes." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de la tension électrique ?",
              options: ["L'ampère (A)", "Le volt (V)", "L'ohm (Ω)", "Le newton (N)"],
              answer: 1,
              why: "La tension s'exprime en volts, du nom d'Alessandro Volta.",
            },
            {
              q: "Un circuit en série comprend un générateur de 6 V et deux lampes. La première a 2,4 V à ses bornes. Quelle est la tension aux bornes de la seconde ?",
              options: ["8,4 V", "2,4 V", "6 V", "3,6 V"],
              answer: 3,
              why: "Loi d'additivité : 6 - 2,4 = 3,6 V.",
            },
            {
              q: "Trois lampes sont branchées en dérivation directement aux bornes d'une pile de 4,5 V. La tension aux bornes de chaque lampe vaut :",
              options: ["4,5 V", "1,5 V", "13,5 V", "0 V"],
              answer: 0,
              why: "Loi d'égalité des tensions : des dipôles en dérivation ont la même tension à leurs bornes, ici celle de la pile.",
            },
            {
              q: "Comment branche-t-on un voltmètre ?",
              options: ["En série, à la place d'un fil", "En série, juste après la pile", "En dérivation, aux bornes du dipôle", "N'importe comment, cela n'a pas d'importance"],
              answer: 2,
              why: "Le voltmètre se branche en dérivation : ses deux bornes sont reliées aux deux bornes du dipôle.",
            },
            {
              q: "Une lampe de tension nominale 6 V est branchée sur un générateur de 12 V. Elle est :",
              options: ["en sous-tension", "en surtension", "en fonctionnement normal"],
              answer: 1,
              why: "La tension à ses bornes dépasse sa tension nominale : elle brille très fort et risque de griller.",
            },
          ],
          trap: "Confondre les lois de l'intensité et celles de la tension : en série, c'est l'intensité qui est la même partout et ce sont les tensions qui s'additionnent ; en dérivation, ce sont les tensions qui sont égales et les intensités qui s'additionnent.",
          method: "Construisez un tableau de deux lignes et deux colonnes (série, dérivation ; intensité, tension) et remplissez-le : unicité, additivité des tensions, additivité des intensités, égalité des tensions. Avant chaque calcul, nommez la loi utilisée et le type de branchement.",
        },
      ],
    },
    /* ==================================================================== */
    /* RÉSISTANCE ET LOI D'OHM                                                */
    /* ==================================================================== */
    {
      id: 'resistance-ohm',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'resistance',
          title: 'La résistance électrique',
          minutes: 30,
          objectives: [
            "Définir la résistance électrique d'un dipôle et son unité, l'ohm (Ω).",
            "Mesurer une résistance avec un ohmmètre, le dipôle étant retiré du circuit.",
            "Décrire l'influence d'une résistance sur l'intensité du courant dans un circuit en série.",
            "Convertir des kiloohms en ohms et inversement.",
          ],
          course: [
            {
              heading: "Un dipôle qui s'oppose au passage du courant",
              paragraphs: [
                "Dans les appareils électroniques, on trouve de petits composants cylindriques entourés d'anneaux de couleur : ce sont des résistances (on dit aussi conducteurs ohmiques). Leur rôle est de s'opposer plus ou moins au passage du courant, afin de limiter son intensité.",
                "La grandeur qui mesure cette opposition s'appelle la résistance électrique, notée R. Elle s'exprime en ohms (symbole Ω, la lettre grecque oméga), du nom du physicien allemand Georg Ohm. On utilise aussi le kiloohm (1 kΩ = 1 000 Ω) et le mégaohm (1 MΩ = 1 000 000 Ω). Le mot « résistance » désigne donc à la fois le composant et la grandeur.",
                "Sur un schéma, une résistance est représentée par un petit rectangle. Les anneaux de couleur indiquent sa valeur selon un code des couleurs ; il est souvent plus simple de la mesurer.",
              ],
              box: { label: "Définition", text: "La résistance électrique R d'un dipôle traduit son opposition au passage du courant. Elle s'exprime en ohms (Ω). 1 kΩ = 1 000 Ω ; 1 MΩ = 1 000 000 Ω." },
            },
            {
              heading: "Mesurer une résistance avec un ohmmètre",
              paragraphs: [
                "On mesure une résistance avec un ohmmètre, en général un multimètre réglé en position ohmmètre (zone Ω). On relie les bornes du dipôle aux bornes V/Ω et COM du multimètre.",
                "Règle essentielle : le dipôle doit être retiré du circuit, ou au moins débranché de tout générateur. L'ohmmètre fait passer lui-même un petit courant dans le dipôle : une mesure faite dans un circuit alimenté serait fausse et pourrait abîmer l'appareil. Comme pour les autres mesures, on commence par le plus grand calibre.",
              ],
              box: { label: "Règle", text: "Un ohmmètre se branche aux bornes du dipôle, le dipôle étant hors circuit (jamais dans un circuit alimenté)." },
            },
            {
              heading: "L'influence d'une résistance sur l'intensité",
              paragraphs: [
                "Réalisons un circuit en série avec une pile et une lampe : la lampe brille normalement et l'ampèremètre indique par exemple 0,30 A. Ajoutons une résistance en série : la lampe brille moins et l'intensité diminue, par exemple à 0,20 A. Avec une résistance plus grande, la lampe brille encore moins et l'intensité diminue davantage.",
                "La position de la résistance dans la boucle n'a aucune importance : avant ou après la lampe, l'effet est le même, puisque l'intensité est la même partout dans un circuit en série. C'est ainsi qu'on protège une DEL : on la branche en série avec une résistance de protection qui limite l'intensité, sans quoi la DEL serait détruite.",
              ],
              box: { label: "Propriété", text: "Dans un circuit en série, plus la résistance ajoutée est grande, plus l'intensité du courant est faible. La place de la résistance dans la boucle ne change rien." },
            },
            {
              heading: "Des résistances partout",
              paragraphs: [
                "Tous les dipôles ont une résistance, plus ou moins grande. Celle d'un fil de connexion est si faible qu'on la considère comme nulle ; celle d'un isolant, comme le plastique d'une gaine, est énorme : il ne laisse pratiquement pas passer le courant.",
                "Une résistance traversée par un courant chauffe : elle convertit l'énergie électrique qu'elle reçoit en énergie thermique. On appelle ce phénomène l'effet Joule. Il est utile dans les appareils de chauffage (radiateur électrique, grille-pain, bouilloire, sèche-cheveux), qui contiennent une résistance chauffante. Il est gênant ailleurs, par exemple quand un ordinateur chauffe.",
              ],
              box: { label: "À retenir", text: "Une résistance traversée par un courant chauffe : c'est l'effet Joule, mis à profit dans les appareils de chauffage." },
            },
          ],
          keyPoints: [
            "La résistance R mesure l'opposition d'un dipôle au passage du courant ; elle s'exprime en ohms (Ω).",
            "1 kΩ = 1 000 Ω ; 1 MΩ = 1 000 000 Ω.",
            "L'ohmmètre se branche aux bornes du dipôle retiré du circuit.",
            "En série, plus la résistance est grande, plus l'intensité est faible ; sa position dans la boucle ne compte pas.",
            "Une DEL se protège avec une résistance en série ; une résistance traversée par un courant chauffe (effet Joule).",
          ],
          example: {
            statement: "Données fictives. Dans un circuit en série formé d'une pile et d'une lampe, on mesure I = 0,30 A. On ajoute en série une résistance R1 = 10 Ω : I = 0,20 A. On remplace R1 par R2 = 33 Ω : I = 0,11 A. 1) Comment évolue l'intensité quand on ajoute une résistance ? 2) Comparer les deux résistances et leur effet. 3) Comment varie l'éclat de la lampe ?",
            solution: [
              "1) Avec la résistance R1, l'intensité passe de 0,30 A à 0,20 A : ajouter une résistance en série diminue l'intensité du courant.",
              "2) R2 (33 Ω) est plus grande que R1 (10 Ω), et l'intensité est plus faible avec R2 (0,11 A) qu'avec R1 (0,20 A).",
              "3) La lampe brille d'autant moins que l'intensité qui la traverse est faible : elle brille moins avec R1, et encore moins avec R2.",
              "Réponse : plus la résistance ajoutée en série est grande, plus l'intensité est faible et moins la lampe brille.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Convertir : a) 2,2 kΩ en Ω ; b) 470 Ω en kΩ ; c) 1 MΩ en kΩ ; d) 0,1 kΩ en Ω. 2) Décrire en deux phrases comment mesurer la résistance d'un composant avec un multimètre.",
              hint: "1 kΩ = 1 000 Ω et 1 MΩ = 1 000 kΩ. Pour la mesure, pensez à la position du multimètre et à l'état du circuit.",
              solution: [
                "1) a) 2,2 × 1 000 = 2 200 Ω ; b) 470 ÷ 1 000 = 0,47 kΩ ; c) 1 MΩ = 1 000 000 Ω = 1 000 kΩ ; d) 0,1 × 1 000 = 100 Ω.",
                "2) On retire le composant du circuit et on règle le multimètre en position ohmmètre (Ω), sur le plus grand calibre.",
                "On relie les bornes du composant aux bornes V/Ω et COM, puis on lit la valeur en ohms, en abaissant le calibre si nécessaire.",
                "Réponse : 2 200 Ω ; 0,47 kΩ ; 1 000 kΩ ; 100 Ω ; la mesure se fait à l'ohmmètre, composant hors circuit.",
              ],
            },
            {
              level: 2,
              statement: "Une DEL est branchée en série avec une pile et une résistance de protection. On essaie successivement trois résistances : 100 Ω, 220 Ω et 470 Ω. 1) Avec quelle résistance l'intensité du courant est-elle la plus grande ? la plus petite ? 2) Avec quelle résistance la DEL brille-t-elle le plus ? 3) Un élève inverse la place de la DEL et de la résistance dans la boucle : cela change-t-il quelque chose ? 4) Pourquoi ne faut-il pas supprimer la résistance de protection ?",
              hint: "Plus la résistance est grande, plus elle s'oppose au passage du courant. N'oubliez pas la loi d'unicité de l'intensité en série.",
              solution: [
                "1) La plus petite résistance (100 Ω) s'oppose le moins au courant : l'intensité est la plus grande. Avec 470 Ω, l'intensité est la plus petite.",
                "2) La DEL brille d'autant plus qu'elle est traversée par un courant intense : elle brille le plus avec 100 Ω.",
                "3) Non : dans un circuit en série, l'intensité est la même partout ; la place de la résistance dans la boucle ne change rien.",
                "4) Sans résistance de protection, l'intensité deviendrait trop grande pour la DEL, qui serait détruite.",
                "Réponse : intensité maximale avec 100 Ω, minimale avec 470 Ω ; la DEL brille le plus avec 100 Ω ; l'ordre ne compte pas ; la résistance protège la DEL d'un courant trop intense.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Un élève étudie un circuit en série comprenant une pile, une lampe et un dipôle X. Il mesure l'intensité dans quatre situations. A : X est une résistance R placée avant la lampe, I = 0,15 A. B : la même résistance R est placée après la lampe, I = 0,15 A. C : X est remplacé par un simple fil, I = 0,25 A. D : X est une résistance R', I = 0,10 A. 1) Que montre la comparaison de A et B ? 2) Que montre la comparaison de A et C ? 3) Comparer R et R'. 4) Pour connaître la valeur de R, l'élève branche un ohmmètre aux bornes de R sans démonter le circuit, pile branchée. Quelle est son erreur ?",
              hint: "Comparez les situations deux par deux, en ne regardant que ce qui change entre elles.",
              solution: [
                "1) A et B ne diffèrent que par la position de R, et l'intensité est la même : la position de la résistance dans un circuit en série n'a pas d'influence.",
                "2) En remplaçant R par un fil (résistance pratiquement nulle), l'intensité passe de 0,15 A à 0,25 A : la résistance R diminue l'intensité du courant.",
                "3) Avec R', l'intensité (0,10 A) est plus faible qu'avec R (0,15 A) : R' s'oppose davantage au courant, donc R' est plus grande que R.",
                "4) Une résistance se mesure hors circuit : il faut retirer R du circuit, ou au moins débrancher la pile, sinon la mesure est fausse et l'ohmmètre risque d'être abîmé.",
                "Réponse : la position de R ne compte pas ; R diminue l'intensité ; R' est plus grande que R ; il faut mesurer R hors circuit.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa signification.",
            pairs: [
              { left: "Ohm (Ω)", right: "Unité de résistance électrique" },
              { left: "Ohmmètre", right: "Appareil qui mesure une résistance, dipôle hors circuit" },
              { left: "1 kΩ", right: "1 000 Ω" },
              { left: "Résistance de protection", right: "Limite l'intensité du courant qui traverse une DEL" },
              { left: "Effet Joule", right: "Une résistance traversée par un courant chauffe" },
              { left: "Fil de connexion", right: "Dipôle de résistance pratiquement nulle" },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de la résistance électrique ?",
              options: ["Le volt (V)", "L'ampère (A)", "Le newton (N)", "L'ohm (Ω)"],
              answer: 3,
              why: "La résistance s'exprime en ohms, du nom de Georg Ohm.",
            },
            {
              q: "Combien vaut 4,7 kΩ en ohms ?",
              options: ["47 Ω", "4 700 Ω", "470 Ω", "0,0047 Ω"],
              answer: 1,
              why: "1 kΩ = 1 000 Ω, donc 4,7 kΩ = 4,7 × 1 000 = 4 700 Ω.",
            },
            {
              q: "On ajoute une résistance en série avec une lampe. Que se passe-t-il ?",
              options: ["La lampe brille moins", "La lampe brille plus fort", "Rien ne change, car le courant ne passe pas dans les résistances", "La lampe s'éteint forcément"],
              answer: 0,
              why: "La résistance s'oppose au passage du courant : l'intensité diminue et la lampe brille moins.",
            },
            {
              q: "Comment doit-on mesurer la résistance d'un composant ?",
              options: ["Avec un ampèremètre en série", "Avec un ohmmètre, composant hors circuit", "Avec un voltmètre, circuit fermé et pile branchée", "Avec un ohmmètre, pile branchée"],
              answer: 1,
              why: "L'ohmmètre fait passer son propre courant : le composant doit être retiré du circuit ou débranché de tout générateur.",
            },
            {
              q: "Dans un grille-pain, la résistance chauffante convertit l'énergie électrique en :",
              options: ["énergie lumineuse uniquement", "énergie de mouvement", "énergie thermique", "énergie chimique"],
              answer: 2,
              why: "C'est l'effet Joule : une résistance traversée par un courant chauffe.",
            },
          ],
          trap: "Mesurer une résistance avec l'ohmmètre alors que le composant est encore branché dans un circuit alimenté : la mesure est fausse et l'appareil peut être abîmé. Le dipôle doit être hors circuit.",
          method: "Pour retenir les trois appareils de mesure, associez chacun à son branchement : ampèremètre en série (il est traversé par le courant), voltmètre en dérivation (aux bornes du dipôle), ohmmètre aux bornes du dipôle retiré du circuit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-ohm',
          title: 'La loi d\'Ohm',
          minutes: 35,
          objectives: [
            "Mesurer la tension aux bornes d'une résistance et l'intensité qui la traverse pour établir sa caractéristique.",
            "Tracer et exploiter la caractéristique tension-intensité d'un conducteur ohmique.",
            "Énoncer et utiliser la loi d'Ohm : U = R × I.",
            "Calculer une tension, une intensité ou une résistance en utilisant les bonnes unités.",
          ],
          course: [
            {
              heading: "Étudier une résistance : le montage",
              paragraphs: [
                "Pour savoir comment se comporte une résistance, on la branche en série avec un générateur dont on peut régler la tension et un ampèremètre, qui mesure l'intensité I du courant qui la traverse. Un voltmètre est branché en dérivation aux bornes de la résistance pour mesurer la tension U.",
                "On règle le générateur sur plusieurs valeurs et, à chaque fois, on note les valeurs de I et de U dans un tableau. Exemple avec une résistance de 100 Ω (données fictives) : pour I = 0 ; 0,02 ; 0,04 ; 0,06 ; 0,08 A, on mesure U = 0 ; 2,0 ; 4,0 ; 6,0 ; 8,0 V. Quand l'intensité double, la tension double aussi.",
              ],
            },
            {
              heading: "La caractéristique d'une résistance",
              paragraphs: [
                "On place les points du tableau dans un repère : l'intensité I en abscisse, la tension U en ordonnée. Ce graphique s'appelle la caractéristique de la résistance.",
                "Pour une résistance, les points sont alignés sur une droite qui passe par l'origine du repère. En mathématiques, vous savez ce que cela signifie : la tension U est proportionnelle à l'intensité I. Dans le tableau, le quotient U ÷ I est le même pour toutes les mesures : 2,0 ÷ 0,02 = 100 ; 4,0 ÷ 0,04 = 100 ; etc. Ce coefficient de proportionnalité est égal à la résistance R, en ohms.",
              ],
              box: { label: "Propriété", text: "La caractéristique d'une résistance (U en fonction de I) est une droite qui passe par l'origine : la tension à ses bornes est proportionnelle à l'intensité qui la traverse. Le coefficient de proportionnalité est sa résistance R." },
            },
            {
              heading: "La loi d'Ohm",
              paragraphs: [
                "Cette relation a été publiée en 1827 par Georg Ohm et porte son nom. La tension U aux bornes d'une résistance est égale au produit de sa résistance R par l'intensité I du courant qui la traverse : U = R × I.",
                "On peut l'écrire sous deux autres formes : R = U ÷ I pour calculer une résistance, et I = U ÷ R pour calculer une intensité. Attention aux unités : U en volts (V), R en ohms (Ω) et I en ampères (A). Une intensité donnée en milliampères doit être convertie en ampères avant le calcul, et une résistance en kiloohms convertie en ohms.",
                "Exemple : une résistance de 220 Ω est traversée par un courant de 30 mA. On convertit : 30 mA = 0,030 A. Puis U = R × I = 220 × 0,030 = 6,6 V.",
              ],
              box: { label: "Formule", text: "Loi d'Ohm : U = R × I, avec U en volts (V), R en ohms (Ω) et I en ampères (A). On en déduit R = U ÷ I et I = U ÷ R." },
            },
            {
              heading: "Une loi valable pour les conducteurs ohmiques",
              paragraphs: [
                "Recommençons l'expérience avec une lampe à la place de la résistance. Les points de la caractéristique ne sont pas alignés : ils forment une courbe. La tension n'est pas proportionnelle à l'intensité, car la résistance du filament augmente quand il chauffe. La loi d'Ohm ne s'applique pas à une lampe ; elle ne s'applique pas non plus à une DEL.",
                "Les dipôles qui vérifient la loi d'Ohm s'appellent des conducteurs ohmiques : ce sont les résistances. Pour savoir si un dipôle est un conducteur ohmique, on trace sa caractéristique et on vérifie si c'est une droite passant par l'origine, ou on vérifie que le quotient U ÷ I reste constant.",
              ],
              box: { label: "À retenir", text: "La loi d'Ohm ne s'applique qu'aux conducteurs ohmiques (les résistances). Une lampe ou une DEL ne la vérifient pas : leur caractéristique n'est pas une droite passant par l'origine." },
            },
          ],
          keyPoints: [
            "Caractéristique d'une résistance : U en fonction de I, droite passant par l'origine.",
            "Loi d'Ohm : U = R × I ; donc R = U ÷ I et I = U ÷ R.",
            "Unités : U en V, R en Ω, I en A (convertir les mA en A et les kΩ en Ω).",
            "La loi d'Ohm ne s'applique qu'aux conducteurs ohmiques, pas à une lampe ni à une DEL.",
            "Pour vérifier la loi : le quotient U ÷ I est constant et égal à R.",
          ],
          example: {
            statement: "Données fictives. Une résistance soumise à une tension de 5,5 V est traversée par un courant d'intensité 25 mA. 1) Calculer sa résistance R. 2) Quelle serait l'intensité du courant si la tension à ses bornes valait 11 V ?",
            solution: [
              "1) On utilise la loi d'Ohm sous la forme R = U ÷ I.",
              "Il faut l'intensité en ampères : 25 mA = 25 ÷ 1 000 = 0,025 A.",
              "R = 5,5 ÷ 0,025 = 220 Ω.",
              "2) On utilise I = U ÷ R : I = 11 ÷ 220 = 0,05 A, soit 50 mA.",
              "Vérification : la tension a doublé (de 5,5 V à 11 V), l'intensité aussi (de 25 mA à 50 mA), comme le prévoit la proportionnalité.",
              "Réponse : R = 220 Ω ; sous 11 V, l'intensité serait 0,05 A, soit 50 mA.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Une résistance R = 47 Ω est traversée par un courant d'intensité I = 0,20 A. Calculer la tension U à ses bornes. 2) Une résistance R = 60 Ω est soumise à une tension U = 12 V. Calculer l'intensité I du courant qui la traverse, en A puis en mA.",
              hint: "Écrivez d'abord la loi d'Ohm sous la forme qui donne la grandeur cherchée : U = R × I ou I = U ÷ R.",
              solution: [
                "1) U = R × I = 47 × 0,20 = 9,4 V.",
                "2) I = U ÷ R = 12 ÷ 60 = 0,2 A.",
                "En milliampères : 0,2 × 1 000 = 200 mA.",
                "Réponse : U = 9,4 V ; I = 0,2 A, soit 200 mA.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On a relevé, pour un dipôle D, les mesures suivantes. Intensité I (mA) : 0 ; 10 ; 20 ; 30 ; 40. Tension U (V) : 0 ; 1,5 ; 3,0 ; 4,5 ; 6,0. 1) Le dipôle D est-il un conducteur ohmique ? Justifier par un calcul. 2) Quelle est sa résistance ? 3) Calculer la tension à ses bornes pour I = 25 mA. 4) Calculer l'intensité qui le traverse pour U = 9,0 V.",
              hint: "Convertissez les intensités en ampères, puis calculez le quotient U ÷ I pour chaque mesure (sauf la première).",
              solution: [
                "1) En ampères, I = 0 ; 0,010 ; 0,020 ; 0,030 ; 0,040 A. Quotients U ÷ I : 1,5 ÷ 0,010 = 150 ; 3,0 ÷ 0,020 = 150 ; 4,5 ÷ 0,030 = 150 ; 6,0 ÷ 0,040 = 150. Le quotient est constant et le point (0 ; 0) est dans le tableau : la tension est proportionnelle à l'intensité, D est un conducteur ohmique.",
                "2) Sa résistance est égale au quotient : R = 150 Ω.",
                "3) I = 25 mA = 0,025 A ; U = R × I = 150 × 0,025 = 3,75 V.",
                "4) I = U ÷ R = 9,0 ÷ 150 = 0,06 A, soit 60 mA.",
                "Réponse : D est un conducteur ohmique de résistance 150 Ω ; U = 3,75 V pour 25 mA ; I = 60 mA pour 9,0 V.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Une DEL rouge fonctionne normalement quand elle est traversée par un courant de 20 mA ; la tension à ses bornes vaut alors 2,0 V. On veut l'alimenter avec une pile de 9,0 V, en plaçant en série une résistance de protection R. 1) Quelle doit être la tension aux bornes de R ? Nommer la loi utilisée. 2) Quelle intensité doit traverser R ? Nommer la loi utilisée. 3) Calculer la valeur de R. 4) Le magasin ne vend que des résistances de 330 Ω et de 390 Ω. Calculer l'intensité obtenue avec chacune (en supposant que la tension aux bornes de la DEL reste 2,0 V) et choisir la plus prudente.",
              hint: "Le circuit est en série : les tensions s'additionnent et l'intensité est la même partout. Puis appliquez la loi d'Ohm à la résistance seulement, jamais à la DEL.",
              solution: [
                "1) Loi d'additivité des tensions (circuit en série) : U pile = U DEL + U R, donc U R = 9,0 - 2,0 = 7,0 V.",
                "2) Loi d'unicité de l'intensité : la résistance est traversée par la même intensité que la DEL, 20 mA = 0,020 A.",
                "3) Loi d'Ohm appliquée à la résistance : R = U ÷ I = 7,0 ÷ 0,020 = 350 Ω.",
                "4) Avec 330 Ω : I = 7,0 ÷ 330 ≈ 0,021 A, soit environ 21 mA, un peu plus que 20 mA. Avec 390 Ω : I = 7,0 ÷ 390 ≈ 0,018 A, soit environ 18 mA, un peu moins que 20 mA.",
                "La résistance de 390 Ω est la plus prudente : la DEL est traversée par un courant légèrement inférieur à son courant de fonctionnement normal, elle brille un peu moins mais ne risque rien.",
                "Réponse : U R = 7,0 V ; I = 20 mA ; R = 350 Ω ; on choisit 390 Ω (environ 18 mA).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour vérifier la loi d'Ohm avec une résistance.",
            items: [
              "Réaliser le montage : générateur réglable, résistance et ampèremètre en série, voltmètre en dérivation aux bornes de la résistance",
              "Régler le générateur sur une première valeur de tension",
              "Relever I et U et les noter dans un tableau",
              "Recommencer pour plusieurs autres réglages du générateur",
              "Placer les points (I ; U) dans un repère, I en abscisse et U en ordonnée",
              "Constater que les points sont alignés sur une droite passant par l'origine",
              "Calculer R = U ÷ I et vérifier que ce quotient est constant",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'expression de la loi d'Ohm ?",
              options: ["U = R ÷ I", "U = I ÷ R", "U = R + I", "U = R × I"],
              answer: 3,
              why: "La tension aux bornes d'une résistance est égale au produit de sa résistance par l'intensité : U = R × I.",
            },
            {
              q: "Une résistance de 100 Ω est traversée par un courant de 0,05 A. La tension à ses bornes vaut :",
              options: ["5 V", "2 000 V", "0,0005 V", "50 V"],
              answer: 0,
              why: "U = R × I = 100 × 0,05 = 5 V.",
            },
            {
              q: "Une résistance est soumise à une tension de 6 V et traversée par 0,03 A. Sa valeur est :",
              options: ["0,18 Ω", "200 Ω", "0,005 Ω", "18 Ω"],
              answer: 1,
              why: "R = U ÷ I = 6 ÷ 0,03 = 200 Ω.",
            },
            {
              q: "À quoi ressemble la caractéristique U en fonction de I d'une résistance ?",
              options: ["À une courbe qui monte de plus en plus vite", "À une droite horizontale", "À une droite qui passe par l'origine", "À une droite verticale qui coupe l'axe des intensités"],
              answer: 2,
              why: "Pour un conducteur ohmique, U est proportionnelle à I : la caractéristique est une droite passant par l'origine.",
            },
            {
              q: "Pour lequel de ces dipôles peut-on utiliser la loi d'Ohm ?",
              options: ["Une lampe à filament", "Une DEL", "Une résistance", "Un interrupteur ouvert"],
              answer: 2,
              why: "La loi d'Ohm ne s'applique qu'aux conducteurs ohmiques, c'est-à-dire aux résistances.",
            },
          ],
          trap: "Utiliser la loi d'Ohm avec une intensité en milliampères (220 × 30 = 6 600 V au lieu de 6,6 V), ou l'appliquer à une lampe ou à une DEL, qui ne sont pas des conducteurs ohmiques.",
          method: "Avant de calculer avec la loi d'Ohm, écrivez les trois grandeurs avec leurs unités et convertissez-les (V, Ω, A). Écrivez la formule sous la forme qui donne la grandeur cherchée, puis vérifiez l'ordre de grandeur : quelques volts pour une pile, quelques milliampères pour une DEL.",
        },
      ],
    },
  ],
}
