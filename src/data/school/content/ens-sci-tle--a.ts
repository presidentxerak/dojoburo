import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ens-sci-tle',
  chapters: [
    /* ==================================================================== */
    /* SCIENCE, CLIMAT ET SOCIÉTÉ                                             */
    /* ==================================================================== */
    {
      id: 'science-climat-societe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'atmosphere-et-vie',
          title: 'L\'atmosphère terrestre et la vie',
          minutes: 30,
          objectives: [
            "Expliquer l'origine de l'atmosphère primitive, la formation des océans et le piégeage du dioxyde de carbone dans les roches.",
            "Ajuster les équations des réactions chimiques d'oxydation du fer par le dioxygène et de formation de l'ozone.",
            "Mettre en relation la production de dioxygène par la photosynthèse, l'oxydation du fer et l'apparition de la couche d'ozone.",
            "Identifier les réservoirs de carbone et expliquer l'origine et la formation des combustibles fossiles.",
          ],
          course: [
            {
              heading: "L'atmosphère primitive et la formation des océans",
              paragraphs: [
                "La Terre s'est formée il y a environ 4,57 milliards d'années (Ga). Son atmosphère primitive provient principalement du dégazage du manteau par le volcanisme, avec un apport possible de météorites et de comètes. Sa composition était proche de celle des gaz volcaniques actuels : surtout de la vapeur d'eau (H₂O), du dioxyde de carbone (CO₂) et du diazote (N₂). Elle ne contenait pas de dioxygène (O₂).",
                "En se refroidissant, la surface de la Terre est passée sous la température d'ébullition de l'eau : la vapeur d'eau s'est condensée et les pluies ont formé les océans. Des minéraux très anciens (des zircons d'Australie datés d'environ 4,4 Ga) indiquent que de l'eau liquide existait déjà très tôt dans l'histoire de la planète.",
                "Une grande partie du CO₂ atmosphérique s'est ensuite dissoute dans l'océan, puis a précipité sous forme de carbonates, comme le carbonate de calcium CaCO₃ qui constitue les calcaires. Le carbone a ainsi été piégé dans les roches sédimentaires, qui en sont aujourd'hui le plus grand réservoir. Le diazote, peu soluble et peu réactif, est resté dans l'atmosphère, où il est devenu majoritaire.",
              ],
              box: { label: "Repère", text: "Composition actuelle de l'air sec, en volume : diazote N₂ environ 78 %, dioxygène O₂ environ 21 %, argon Ar environ 0,9 %, dioxyde de carbone CO₂ environ 0,04 %. La vapeur d'eau, en quantité variable, s'y ajoute." },
            },
            {
              heading: "La vie transforme l'atmosphère : photosynthèse et dioxygène",
              paragraphs: [
                "Le dioxygène atmosphérique est d'origine biologique. Il est produit par la photosynthèse oxygénique, d'abord réalisée par des cyanobactéries, organismes unicellulaires vivant dans l'océan. Leur bilan s'écrit : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, grâce à l'énergie lumineuse. Les colonies de cyanobactéries construisent des roches litées, les stromatolithes, dont les plus anciens connus sont datés d'environ 3,5 Ga.",
                "Le dioxygène produit n'est pas resté d'emblée dans l'air. Il a d'abord oxydé les ions fer dissous dans l'océan (fer ferreux Fe²⁺), formant des oxydes de fer insolubles (fer ferrique Fe³⁺) qui ont sédimenté. Ces dépôts constituent les formations de fer rubané, alternances de couches riches en oxydes de fer et de couches siliceuses, déposées surtout entre 3,8 et 1,8 Ga. Exemples d'équations ajustées : 4 Fe + 3 O₂ → 2 Fe₂O₃ et 4 FeO + O₂ → 2 Fe₂O₃.",
                "Lorsque le fer dissous a été en grande partie consommé, le dioxygène s'est accumulé dans l'atmosphère : c'est la Grande Oxydation, vers 2,4 Ga. Les indices en sont nombreux : apparition sur les continents de paléosols rouges, riches en oxydes de fer, et disparition des dépôts de minéraux détritiques comme la pyrite (FeS₂) ou l'uraninite (UO₂), qui ne résistent pas à l'oxydation. La teneur en O₂ a ensuite augmenté par étapes, pour approcher sa valeur actuelle il y a quelques centaines de millions d'années.",
              ],
              box: { label: "Règle", text: "Ajuster une équation, c'est placer des nombres stœchiométriques devant les formules pour que chaque élément chimique soit présent en même nombre d'atomes dans les réactifs et dans les produits (conservation des éléments). Dans 4 Fe + 3 O₂ → 2 Fe₂O₃, on compte 4 Fe et 6 O de chaque côté." },
            },
            {
              heading: "L'ozone, un bouclier contre les ultraviolets",
              paragraphs: [
                "Dans la stratosphère, entre environ 15 et 35 km d'altitude, les rayonnements ultraviolets (UV) les plus énergétiques dissocient les molécules de dioxygène : O₂ → O + O. Chaque atome d'oxygène libéré peut se lier à une molécule de dioxygène : O + O₂ → O₃. Le bilan s'écrit 3 O₂ → 2 O₃. L'ozone formé absorbe à son tour une grande partie des UV de courte longueur d'onde (UV-C et la plupart des UV-B), qui endommagent l'ADN des êtres vivants.",
                "La couche d'ozone n'a pu se former qu'après l'accumulation du dioxygène dans l'atmosphère. Avant elle, la vie était limitée aux milieux aquatiques, où l'eau filtrait une partie des UV. La protection qu'elle offre a permis la colonisation des continents : les premiers végétaux terrestres apparaissent il y a environ 470 millions d'années, suivis par les animaux.",
                "Cette couche est fragile. Dans les années 1970, des chercheurs ont montré que des gaz industriels, les chlorofluorocarbures (CFC), détruisent l'ozone stratosphérique ; le « trou » de la couche d'ozone au-dessus de l'Antarctique a été mis en évidence en 1985. Le protocole de Montréal (1987) a organisé l'arrêt de leur production, et une reconstitution progressive de la couche est aujourd'hui observée. Attention : au niveau du sol, l'ozone est au contraire un polluant irritant.",
              ],
              box: { label: "Formule", text: "Formation de l'ozone : O₂ → O + O (sous l'effet des UV), puis O + O₂ → O₃. Bilan : 3 O₂ → 2 O₃." },
            },
            {
              heading: "Le carbone : réservoirs, flux et combustibles fossiles",
              paragraphs: [
                "Le carbone est réparti entre plusieurs réservoirs : l'atmosphère (CO₂, CH₄), la biosphère (êtres vivants), les sols (matière organique), l'océan (carbone dissous, de loin le plus grand réservoir superficiel) et les roches (carbonates et matière organique fossile, le plus grand de tous). Des flux relient ces réservoirs : photosynthèse et respiration, dissolution du CO₂ dans l'océan et dégazage, sédimentation, volcanisme. Le temps de résidence moyen du carbone dans un réservoir s'obtient en divisant son stock par le flux qui en sort.",
                "Les combustibles fossiles proviennent de la biomasse produite par photosynthèse. Le charbon s'est formé à partir de végétaux continentaux accumulés dans des marécages, par exemple au Carbonifère (il y a environ 360 à 300 millions d'années). Le pétrole et le gaz naturel proviennent surtout de la matière organique du plancton marin. Dans les deux cas, seule une très faible fraction de la matière organique échappe à la décomposition, dans des milieux pauvres en dioxygène, puis est enfouie et transformée par l'augmentation de la température et de la pression pendant des millions d'années.",
                "Ces combustibles sont donc des ressources non renouvelables à l'échelle humaine : ils se sont formés en des dizaines à des centaines de millions d'années, alors que l'humanité en brûle une grande partie en deux siècles. Leur combustion renvoie rapidement dans l'atmosphère, sous forme de CO₂, du carbone qui en avait été retiré très lentement : c'est la cause principale de l'augmentation actuelle de la concentration atmosphérique en CO₂.",
              ],
              box: { label: "À retenir", text: "Le dioxygène de l'air est un produit de la vie (photosynthèse). Il a d'abord oxydé le fer de l'océan, puis s'est accumulé dans l'atmosphère vers 2,4 Ga et a permis la formation de la couche d'ozone. Les combustibles fossiles sont du carbone d'origine photosynthétique stocké pendant des millions d'années." },
            },
          ],
          keyPoints: [
            "Atmosphère primitive issue du dégazage volcanique : H₂O, CO₂, N₂, sans O₂.",
            "Refroidissement : condensation de la vapeur d'eau et formation des océans ; le CO₂ dissous est piégé dans les carbonates (calcaires).",
            "Le dioxygène provient de la photosynthèse des cyanobactéries (stromatolithes dès environ 3,5 Ga).",
            "O₂ d'abord consommé par l'oxydation du fer océanique (fer rubané), puis accumulé dans l'air : Grande Oxydation vers 2,4 Ga.",
            "Ozone : O₂ → 2 O puis O + O₂ → O₃ ; il absorbe les UV et a permis la vie sur les continents.",
            "Réservoirs de carbone : atmosphère, biosphère, sols, océan, roches ; temps de résidence = stock ÷ flux sortant.",
            "Combustibles fossiles : biomasse enfouie et transformée en millions d'années, brûlée en quelques siècles.",
          ],
          example: {
            statement: "Dans l'océan primitif, le dioxygène produit par la photosynthèse a oxydé le fer. On modélise cette transformation par la réaction : Fe + O₂ → Fe₂O₃. a) Ajuster l'équation. b) Calculer la masse de dioxygène nécessaire pour oxyder 112 g de fer et la masse d'oxyde de fer obtenue. Données : M(Fe) = 56 g/mol ; M(O) = 16 g/mol.",
            solution: [
              "a) Fe₂O₃ contient 3 atomes d'oxygène, alors que chaque O₂ en apporte 2 : pour obtenir un nombre pair d'atomes d'oxygène, on prend 2 Fe₂O₃ (6 O), donc 3 O₂, puis 4 Fe pour les 4 atomes de fer. Équation ajustée : 4 Fe + 3 O₂ → 2 Fe₂O₃. Vérification : 4 Fe et 6 O de chaque côté.",
              "b) Quantité de matière de fer : n(Fe) = m ÷ M = 112 ÷ 56 = 2,0 mol.",
              "D'après l'équation, 4 mol de fer réagissent avec 3 mol de O₂ : n(O₂) = 2,0 × 3 ÷ 4 = 1,5 mol. Avec M(O₂) = 2 × 16 = 32 g/mol, m(O₂) = 1,5 × 32 = 48 g.",
              "De même, n(Fe₂O₃) = 2,0 × 2 ÷ 4 = 1,0 mol, et M(Fe₂O₃) = 2 × 56 + 3 × 16 = 160 g/mol, donc m(Fe₂O₃) = 160 g.",
              "Vérification par la conservation de la masse : 112 g + 48 g = 160 g. Réponse : il faut 48 g de dioxygène et l'on obtient 160 g d'oxyde de fer Fe₂O₃.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ajuster les équations suivantes. a) FeO + O₂ → Fe₂O₃ (oxydation d'un oxyde de fer). b) CO₂ + H₂O → C₆H₁₂O₆ + O₂ (bilan de la photosynthèse). c) O₂ → O₃ (bilan de la formation de l'ozone).",
              hint: "Commencez par l'élément qui n'apparaît que dans une seule molécule de chaque côté, et gardez l'oxygène pour la fin.",
              solution: [
                "a) Fe₂O₃ contient 2 Fe : il faut 2 FeO par Fe₂O₃. Pour 2 Fe₂O₃ (4 Fe, 6 O), il faut 4 FeO (4 Fe, 4 O) et 2 O supplémentaires, soit 1 O₂. Équation : 4 FeO + O₂ → 2 Fe₂O₃.",
                "b) Le glucose contient 6 C et 12 H : il faut 6 CO₂ et 6 H₂O. On compte alors 6 × 2 + 6 = 18 O à gauche ; à droite, 6 O dans le glucose, il en manque 12, soit 6 O₂. Équation : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.",
                "c) Il faut le même nombre d'atomes d'oxygène des deux côtés : le plus petit multiple commun de 2 et 3 est 6. Équation : 3 O₂ → 2 O₃.",
              ],
            },
            {
              level: 2,
              statement: "On utilise des ordres de grandeur simplifiés (données arrondies) du cycle du carbone. L'atmosphère contient environ 870 GtC (gigatonnes de carbone). Chaque année, elle échange environ 120 GtC avec la biosphère continentale (photosynthèse) et environ 80 GtC avec l'océan (dissolution). a) Calculer le temps de résidence moyen du carbone dans l'atmosphère. b) Les activités humaines émettent environ 10 GtC par an, dont environ la moitié reste dans l'atmosphère. Sachant qu'une hausse de 1 ppm de CO₂ correspond à environ 2,12 GtC, estimer l'augmentation annuelle de la concentration en CO₂. c) Pourquoi un flux de 10 GtC par an, petit devant les flux naturels, modifie-t-il la teneur de l'atmosphère ?",
              hint: "Le temps de résidence est le quotient du stock par le flux total qui sort du réservoir. Pour b, ne gardez que la moitié des émissions.",
              solution: [
                "a) Flux sortant de l'atmosphère : 120 + 80 = 200 GtC par an. Temps de résidence : 870 ÷ 200 ≈ 4,4 ans. Un atome de carbone reste en moyenne quelques années dans l'atmosphère avant d'être capté.",
                "b) Carbone qui reste dans l'atmosphère : 10 ÷ 2 = 5 GtC par an. Hausse de concentration : 5 ÷ 2,12 ≈ 2,4 ppm par an, ce qui correspond à l'ordre de grandeur mesuré au début des années 2020.",
                "c) Les flux naturels sont presque équilibrés : ce que la photosynthèse et l'océan retirent est compensé par la respiration et le dégazage. Les émissions humaines s'ajoutent à cet équilibre sans être entièrement compensées : année après année, l'excédent s'accumule.",
                "Remarque : un temps de résidence de quelques années ne signifie pas qu'un excès de CO₂ disparaît en quelques années ; les échanges ne font souvent que déplacer le carbone, et le retour à l'équilibre demande des siècles.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Document 1 : les stromatolithes, roches construites par des colonies de cyanobactéries, sont connus depuis environ 3,5 Ga. Document 2 : les formations de fer rubané, riches en oxydes de fer ferrique, se sont déposées dans les océans surtout entre 3,8 et 1,8 Ga. Document 3 : avant environ 2,4 Ga, les rivières déposaient des grains de pyrite (FeS₂) et d'uraninite (UO₂), minéraux détruits par oxydation au contact du dioxygène ; ces dépôts disparaissent ensuite. Document 4 : des paléosols rouges, contenant des oxydes de fer ferrique, apparaissent sur les continents à partir d'environ 2 Ga. À partir de ces documents et de vos connaissances, reconstituer l'histoire du dioxygène terrestre et montrer le rôle des êtres vivants.",
              hint: "Distinguez deux milieux : l'océan et l'atmosphère. Pour chaque document, demandez-vous s'il indique la présence ou l'absence de dioxygène, et dans quel milieu.",
              solution: [
                "Origine : le document 1 montre que des cyanobactéries, capables de photosynthèse oxygénique (6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂), existent dès environ 3,5 Ga. Les êtres vivants sont donc la source du dioxygène.",
                "Dans l'océan : le document 2 montre que, pendant une longue période, le dioxygène produit a oxydé le fer dissous, formant des oxydes de fer insolubles qui ont sédimenté. Le dioxygène était consommé au fur et à mesure dans l'océan.",
                "Dans l'atmosphère : le document 3 montre qu'avant 2,4 Ga, des minéraux sensibles à l'oxydation pouvaient être transportés à l'air libre sans être détruits : l'atmosphère était donc pauvre en dioxygène.",
                "Après 2,4 Ga, ces minéraux disparaissent et le document 4 montre que les sols continentaux s'oxydent : le dioxygène est désormais présent dans l'atmosphère. C'est la Grande Oxydation.",
                "Bilan : le dioxygène, produit par la photosynthèse, a d'abord été piégé par le fer océanique, puis s'est accumulé dans l'atmosphère vers 2,4 Ga, ce qui a ensuite permis la formation de la couche d'ozone. La vie a donc profondément modifié la composition de l'atmosphère.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Formation de la Terre (environ 4,57 Ga)",
              "Premiers océans d'eau liquide (dès environ 4,4 Ga)",
              "Plus anciens stromatolithes connus (environ 3,5 Ga)",
              "Grande Oxydation de l'atmosphère (environ 2,4 Ga)",
              "Premiers végétaux sur les continents (environ 470 millions d'années)",
              "Formation de grands gisements de charbon au Carbonifère (environ 300 millions d'années)",
              "Protocole de Montréal sur les gaz qui détruisent l'ozone (1987)",
            ],
          },
          quiz: [
            {
              q: "Quel gaz était absent de l'atmosphère primitive de la Terre ?",
              options: ["Le dioxyde de carbone", "La vapeur d'eau", "Le diazote", "Le dioxygène"],
              answer: 3,
              why: "L'atmosphère primitive, issue du dégazage volcanique, contenait surtout H₂O, CO₂ et N₂. Le dioxygène n'est apparu qu'avec la photosynthèse.",
            },
            {
              q: "Que traduisent les formations de fer rubané ?",
              options: ["Du dioxygène dans l'océan, qui oxyde le fer dissous", "Une très forte activité volcanique sous-marine, sans lien avec la vie", "L'existence d'une couche d'ozone épaisse", "Un climat sans aucun océan"],
              answer: 0,
              why: "Le fer dissous dans l'océan a été oxydé par le dioxygène issu de la photosynthèse ; les oxydes de fer insolubles ont sédimenté en couches.",
            },
            {
              q: "Quelle équation décrit la formation de l'ozone à partir d'un atome d'oxygène ?",
              options: ["2 O₃ → 3 O₂ sous l'effet des UV", "O₂ + H₂ → O₃", "O + O₂ → O₃", "CO₂ + O → O₃ + C"],
              answer: 2,
              why: "Les UV dissocient O₂ en deux atomes d'oxygène ; chaque atome se lie ensuite à une molécule de dioxygène : O + O₂ → O₃.",
            },
            {
              q: "Pourquoi les combustibles fossiles sont-ils des ressources non renouvelables ?",
              options: ["Parce que leur combustion détruit définitivement les atomes de carbone qu'ils contiennent", "Parce qu'ils se forment en millions d'années", "Parce qu'ils ne contiennent pas de carbone d'origine biologique"],
              answer: 1,
              why: "Leur formation demande des millions d'années, alors qu'ils sont consommés en quelques siècles. Les atomes de carbone, eux, sont conservés : ils passent dans le CO₂.",
            },
            {
              q: "À quand remonte l'accumulation du dioxygène dans l'atmosphère, appelée Grande Oxydation ?",
              options: ["Il y a 66 millions d'années", "Il y a 4,5 milliards d'années", "Il y a 540 millions d'années", "Il y a 2,4 milliards d'années"],
              answer: 3,
              why: "Vers 2,4 Ga, le fer dissous ayant été largement consommé, le dioxygène s'accumule dans l'air : les paléosols rouges apparaissent et les minéraux détritiques oxydables disparaissent.",
            },
          ],
          trap: "Croire que le dioxygène s'est accumulé dans l'atmosphère dès l'apparition de la photosynthèse : pendant des centaines de millions d'années, il a d'abord été consommé par l'oxydation du fer dissous dans l'océan.",
          method: "Pour ajuster une équation, dressez un petit tableau avec une ligne par élément (Fe, C, H, O) et une colonne pour chaque côté ; ajustez les éléments présents dans une seule molécule, puis l'oxygène en dernier, et vérifiez chaque ligne à la fin.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'systeme-climatique',
          title: 'La complexité du système climatique',
          minutes: 35,
          objectives: [
            "Distinguer la météorologie et le climat, et définir le climat par des moyennes calculées sur au moins 30 ans.",
            "Exploiter des indicateurs du climat passé, comme les carottes de glace, pour mettre en relation température et teneur en CO₂.",
            "Expliquer le renforcement de l'effet de serre par les activités humaines et le rôle des rétroactions.",
            "Expliquer le rôle de l'océan et des glaces dans l'évolution du climat et du niveau de la mer.",
          ],
          course: [
            {
              heading: "Météo et climat : deux échelles de temps",
              paragraphs: [
                "La météorologie décrit l'état de l'atmosphère en un lieu et à un moment donnés : température, précipitations, vent, pression, nébulosité. Elle varie d'un jour à l'autre et se prévoit au mieux sur une dizaine de jours. Le climat, lui, est la description statistique de ces grandeurs (moyennes, variabilité, fréquence des extrêmes) sur une longue période : par convention, l'Organisation météorologique mondiale retient au moins 30 ans.",
                "Une journée froide ou un été pluvieux ne disent donc rien, à eux seuls, de l'évolution du climat : seule une tendance mesurée sur plusieurs décennies est significative. Depuis 1850, on dispose de mesures de température suffisamment nombreuses pour calculer une température moyenne à la surface du globe. Selon le GIEC (2021), elle a augmenté d'environ 1,1 °C entre la période 1850-1900 et la décennie 2011-2020, et chacune des quatre dernières décennies a été plus chaude que toutes les précédentes depuis 1850.",
              ],
              box: { label: "Définition", text: "Le climat d'une région est l'ensemble des moyennes et de la variabilité des grandeurs atmosphériques (température, précipitations, vent...) calculées sur une période d'au moins 30 ans." },
            },
            {
              heading: "Reconstituer les climats du passé",
              paragraphs: [
                "Avant les thermomètres, on utilise des indicateurs indirects. Les carottes de glace forées en Antarctique contiennent des bulles d'air piégées lors de la formation de la glace : leur analyse donne directement la teneur passée de l'atmosphère en CO₂ et en méthane. La composition isotopique de la glace elle-même (rapport entre isotopes de l'hydrogène ou de l'oxygène) dépend de la température au moment des chutes de neige : elle sert de thermomètre. D'autres archives complètent ces données : sédiments marins, pollens, cernes des arbres, coraux.",
                "Les forages antarctiques couvrent environ 800 000 ans. Ils montrent une alternance de périodes glaciaires et interglaciaires, environ tous les 100 000 ans sur cette période, et une évolution parallèle de la température et de la teneur en CO₂, qui oscille entre environ 180 ppm en période glaciaire et 280 à 300 ppm en période interglaciaire. Lors du dernier maximum glaciaire, il y a environ 21 000 ans, la température moyenne mondiale était inférieure de 5 à 7 °C environ à l'actuelle et le niveau de la mer plus bas d'environ 120 m.",
                "Les variations naturelles sont déclenchées par de petites modifications de l'orbite terrestre, qui changent la répartition de l'énergie solaire reçue ; elles sont ensuite amplifiées par des rétroactions, dont celles du CO₂ et des glaces. La concentration actuelle en CO₂, supérieure à 420 ppm en 2024, dépasse nettement toutes les valeurs enregistrées dans ces glaces.",
              ],
              box: { label: "Repère", text: "ppm signifie « partie par million » : 420 ppm de CO₂ correspondent à 420 molécules de CO₂ pour un million de molécules d'air sec. Avant l'ère industrielle, la concentration était d'environ 280 ppm." },
            },
            {
              heading: "L'effet de serre renforcé par les activités humaines",
              paragraphs: [
                "La surface terrestre, chauffée par le Soleil, émet un rayonnement infrarouge. Certains gaz de l'atmosphère, dits gaz à effet de serre (vapeur d'eau, CO₂, méthane CH₄, protoxyde d'azote N₂O, ozone), absorbent une partie de ce rayonnement et en réémettent une partie vers le sol. Cet effet de serre naturel porte la température moyenne de surface à environ 15 °C, au lieu d'environ -18 °C sans lui.",
                "Depuis le milieu du XIXe siècle, les activités humaines ont fortement augmenté la concentration de ces gaz : le CO₂ est passé d'environ 280 ppm à plus de 420 ppm, soit une hausse de 50 %, à cause de la combustion des combustibles fossiles et de la déforestation ; la concentration en méthane a été multipliée par plus de 2,5 (élevage, rizières, fuites de gaz, décharges). L'effet de serre est ainsi renforcé : la Terre reçoit plus d'énergie qu'elle n'en perd, et elle se réchauffe jusqu'à atteindre un nouvel équilibre.",
                "On appelle forçage radiatif cette perturbation du bilan d'énergie de la Terre, exprimée en watts par mètre carré (W/m²). Le GIEC conclut, dans son rapport de 2021, que l'influence humaine a sans équivoque réchauffé l'atmosphère, l'océan et les terres.",
              ],
            },
            {
              heading: "Rétroactions, océan et glaces",
              paragraphs: [
                "Le système climatique comprend l'atmosphère, l'océan, la cryosphère (glaces), la biosphère et les sols. Ses composantes interagissent par des rétroactions. Une rétroaction est positive lorsqu'elle amplifie la perturbation initiale : un air plus chaud contient plus de vapeur d'eau (environ 7 % de plus par degré), gaz à effet de serre qui accentue le réchauffement ; la fonte de la neige et des glaces, très réfléchissantes, découvre des surfaces sombres qui absorbent plus d'énergie solaire (rétroaction glace-albédo). Une rétroaction est négative lorsqu'elle atténue la perturbation : une Terre plus chaude émet davantage de rayonnement infrarouge vers l'espace.",
                "L'océan joue un rôle majeur. Il a absorbé environ 90 % de l'énergie excédentaire accumulée par la Terre ces dernières décennies, ce qui ralentit le réchauffement de l'air mais réchauffe les eaux. Il absorbe aussi environ un quart du CO₂ émis par les activités humaines : le CO₂ dissous acidifie l'eau, dont le pH de surface a diminué d'environ 0,1 unité depuis l'ère industrielle, ce qui menace les organismes qui fabriquent un squelette calcaire (coraux, mollusques, certains planctons).",
                "Le niveau moyen des océans s'est élevé d'environ 20 cm entre 1901 et 2018, pour deux raisons principales : la dilatation thermique de l'eau qui se réchauffe et la fonte des glaces continentales (glaciers de montagne, calottes du Groenland et de l'Antarctique). La fonte de la banquise, glace de mer qui flotte déjà, ne fait quasiment pas monter le niveau de la mer. Comme l'océan et les calottes réagissent lentement, la hausse du niveau de la mer se poursuivra pendant des siècles.",
              ],
              box: { label: "Définition", text: "Une rétroaction est un mécanisme par lequel l'effet d'une perturbation agit sur sa propre cause. Positive, elle amplifie la perturbation (vapeur d'eau, albédo des glaces) ; négative, elle l'atténue (émission infrarouge accrue)." },
            },
          ],
          keyPoints: [
            "Météo : état de l'atmosphère à un instant ; climat : statistiques sur au moins 30 ans.",
            "Réchauffement d'environ 1,1 °C entre 1850-1900 et 2011-2020 (GIEC, 2021).",
            "Carottes de glace : bulles d'air (CO₂, CH₄) et isotopes (température) sur 800 000 ans ; température et CO₂ varient ensemble.",
            "CO₂ : environ 280 ppm avant l'ère industrielle, plus de 420 ppm en 2024 ; effet de serre renforcé.",
            "Rétroactions positives (vapeur d'eau, albédo des glaces) et négatives (émission infrarouge).",
            "L'océan stocke environ 90 % de l'énergie excédentaire et un quart du CO₂ émis : il se réchauffe et s'acidifie.",
            "Niveau marin : dilatation thermique et fonte des glaces continentales ; la fonte de la banquise ne l'élève quasiment pas.",
          ],
          example: {
            statement: "La concentration atmosphérique en CO₂ était d'environ 280 ppm avant l'ère industrielle et d'environ 420 ppm en 2023 (valeurs arrondies). a) Calculer l'augmentation relative de cette concentration. b) Sachant qu'une hausse de 1 ppm correspond à environ 2,12 GtC dans l'atmosphère, calculer la masse de carbone ajoutée, puis la masse de CO₂ correspondante. Données : M(C) = 12 g/mol ; M(CO₂) = 44 g/mol.",
            solution: [
              "a) Augmentation absolue : 420 - 280 = 140 ppm. Augmentation relative : 140 ÷ 280 = 0,50, soit + 50 %.",
              "b) Masse de carbone ajoutée : 140 × 2,12 ≈ 297 GtC.",
              "Une mole de CO₂ (44 g) contient une mole de carbone (12 g) : la masse de CO₂ est donc 44 ÷ 12 ≈ 3,67 fois celle du carbone qu'il contient.",
              "Masse de CO₂ : 297 × 44 ÷ 12 ≈ 1 090 Gt de CO₂.",
              "Réponse : la concentration a augmenté de 50 % ; l'atmosphère contient environ 300 GtC de plus, soit environ 1 100 Gt de CO₂. Ce n'est qu'une partie des émissions humaines, puisque l'océan et la végétation en ont absorbé une autre partie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dire si elle relève de la météorologie ou du climat, en justifiant. a) « Il a gelé ce matin à Lyon. » b) « La température moyenne de juillet à Lyon, calculée sur 1991-2020, est d'environ 22 °C. » (valeur fictive) c) « Un orage est annoncé demain sur la Bretagne. » d) « Les vagues de chaleur sont devenues plus fréquentes en France depuis les années 1980. »",
              hint: "Cherchez la durée concernée : un instant ou quelques jours, ou bien une statistique sur plusieurs décennies ?",
              solution: [
                "a) Météorologie : il s'agit de l'état de l'atmosphère à un moment précis.",
                "b) Climat : c'est une moyenne calculée sur 30 ans (1991-2020), qui correspond à la définition du climat.",
                "c) Météorologie : c'est une prévision à court terme d'un phénomène ponctuel.",
                "d) Climat : il s'agit d'une évolution statistique de la fréquence des extrêmes sur plusieurs décennies.",
              ],
            },
            {
              level: 2,
              statement: "En été arctique, une surface reçoit en moyenne une puissance solaire de 200 W par mètre carré (donnée fictive). L'albédo, fraction du rayonnement réfléchie, vaut environ 0,6 pour la glace de mer et 0,06 pour l'océan libre. a) Calculer la puissance absorbée par 1 m² de glace, puis par 1 m² d'océan. b) Expliquer pourquoi la fonte de la banquise constitue une rétroaction positive. c) Cette fonte fait-elle monter le niveau de la mer ? Justifier.",
              hint: "La fraction absorbée est égale à 1 - albédo. Pour c, pensez à la poussée d'Archimède s'exerçant sur un glaçon qui flotte.",
              solution: [
                "a) Glace : la fraction absorbée vaut 1 - 0,6 = 0,4, d'où 200 × 0,4 = 80 W. Océan : 1 - 0,06 = 0,94, d'où 200 × 0,94 = 188 W.",
                "L'océan libre absorbe donc 188 ÷ 80 ≈ 2,4 fois plus d'énergie que la glace.",
                "b) Un réchauffement fait fondre la banquise ; l'océan découvert absorbe plus d'énergie solaire ; cela accentue le réchauffement, qui fait fondre davantage de glace. La conséquence amplifie la cause : c'est une rétroaction positive.",
                "c) Non, presque pas : la banquise flotte et déplace déjà un volume d'eau dont la masse est égale à la sienne. En fondant, elle remplit à peu près exactement ce volume. Seule la fonte des glaces continentales élève sensiblement le niveau de la mer.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. On étudie deux causes de la hausse du niveau de la mer (données arrondies). 1) La couche superficielle de l'océan, de 700 m d'épaisseur, se réchauffe de 0,5 °C. Le coefficient de dilatation de l'eau de mer vaut environ 2 × 10⁻⁴ par °C, et la hausse de hauteur d'une couche d'eau vaut Δh = α × ΔT × h. Calculer la hausse du niveau de la mer qui en résulte. 2) La calotte du Groenland contient environ 2,9 millions de km³ de glace, de masse volumique 0,917 fois celle de l'eau liquide. La surface des océans est d'environ 3,61 × 10⁸ km². Calculer la hausse du niveau de la mer qu'entraînerait sa fonte complète. 3) Expliquer pourquoi la hausse du niveau de la mer se poursuivra pendant des siècles même si les émissions s'arrêtaient.",
              hint: "Pour 2, convertissez d'abord le volume de glace en volume d'eau liquide, puis répartissez ce volume sur toute la surface des océans.",
              solution: [
                "1) Δh = 2 × 10⁻⁴ × 0,5 × 700 = 0,07 m, soit environ 7 cm : un réchauffement modeste d'une épaisse couche d'eau produit une hausse mesurable.",
                "2) Volume d'eau liquide : 2,9 × 10⁶ × 0,917 ≈ 2,66 × 10⁶ km³. Hausse : 2,66 × 10⁶ ÷ 3,61 × 10⁸ ≈ 7,4 × 10⁻³ km, soit environ 7,4 m.",
                "3) L'océan profond se réchauffe très lentement, et la dilatation continue tant que la chaleur y pénètre. Les calottes glaciaires réagissent elles aussi sur des siècles à des millénaires. Le système climatique a donc une forte inertie.",
                "Conclusion : la dilatation thermique et la fonte des glaces continentales élèvent le niveau de la mer ; la fonte du Groenland, si elle était complète, aurait un effet considérable, mais elle s'étalerait sur une très longue durée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Climat", right: "Statistiques des grandeurs atmosphériques sur au moins 30 ans" },
              { left: "Albédo", right: "Fraction du rayonnement solaire réfléchie par une surface" },
              { left: "Rétroaction positive", right: "Mécanisme qui amplifie la perturbation qui l'a déclenché" },
              { left: "Forçage radiatif", right: "Perturbation du bilan d'énergie de la Terre, en W/m²" },
              { left: "Carotte de glace", right: "Archive contenant des bulles d'air anciennes" },
              { left: "Dilatation thermique", right: "Augmentation du volume de l'eau quand elle se réchauffe" },
            ],
          },
          quiz: [
            {
              q: "Sur quelle durée minimale le climat est-il défini par convention ?",
              options: ["Un an", "10 ans", "30 ans", "1 000 ans"],
              answer: 2,
              why: "L'Organisation météorologique mondiale calcule les normales climatiques sur des périodes de 30 ans.",
            },
            {
              q: "Que mesure-t-on dans les bulles d'air des carottes de glace ?",
              options: ["La composition de l'atmosphère passée, dont la teneur en CO₂", "La vitesse des vents de l'époque", "La salinité des océans anciens et la température de l'eau de mer"],
              answer: 0,
              why: "Les bulles sont de l'air ancien piégé dans la glace : on y dose directement le CO₂ et le méthane. La température se déduit, elle, de la composition isotopique de la glace.",
            },
            {
              q: "Pourquoi la fonte des calottes et des glaciers accentue-t-elle le réchauffement ?",
              options: ["Parce que la glace libère de l'ozone en fondant", "Parce qu'elle découvre des surfaces sombres qui absorbent plus d'énergie", "Parce que l'eau de fonte, plus chaude que l'air ambiant, réchauffe directement l'atmosphère", "Parce que la fonte produit du CO₂ par une réaction chimique"],
              answer: 1,
              why: "La glace a un albédo élevé ; les sols et l'océan découverts réfléchissent moins et absorbent plus de rayonnement solaire : c'est une rétroaction positive.",
            },
            {
              q: "Parmi ces phénomènes, lequel ne fait quasiment pas monter le niveau de la mer ?",
              options: ["La dilatation thermique de l'océan", "La fonte des glaciers de montagne", "La fonte de la calotte du Groenland", "La fonte de la banquise"],
              answer: 3,
              why: "La banquise flotte déjà : sa masse est égale à celle de l'eau qu'elle déplace, et sa fonte ne modifie presque pas le niveau de la mer.",
            },
            {
              q: "Quelle part du CO₂ émis par les activités humaines l'océan absorbe-t-il environ ?",
              options: ["La totalité", "Un quart", "Aucune", "Les trois quarts"],
              answer: 1,
              why: "L'océan absorbe environ un quart des émissions humaines de CO₂, ce qui limite la hausse dans l'air mais acidifie l'eau de mer.",
            },
          ],
          trap: "Confondre météo et climat, par exemple invoquer un hiver froid pour nier le réchauffement climatique ; autre confusion fréquente : croire que la fonte de la banquise fait monter le niveau de la mer, alors que c'est la fonte des glaces continentales qui l'élève.",
          method: "Devant un mécanisme climatique, écrivez la chaîne de causes et de conséquences sous forme de flèches (réchauffement → fonte → albédo plus faible → plus d'énergie absorbée → réchauffement) : si la dernière flèche renforce la première, la rétroaction est positive ; si elle l'affaiblit, elle est négative.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'climat-du-futur',
          title: 'Le climat du futur',
          minutes: 35,
          objectives: [
            "Expliquer le principe d'un modèle climatique et la manière dont il est validé.",
            "Mettre en œuvre un modèle simple de bilan radiatif pour estimer une température d'équilibre.",
            "Analyser des projections climatiques selon différents scénarios d'émissions et identifier les sources d'incertitude.",
            "Décrire les principales conséquences attendues du réchauffement climatique.",
          ],
          course: [
            {
              heading: "Les modèles climatiques",
              paragraphs: [
                "Un modèle climatique est un programme informatique qui simule le fonctionnement du système climatique. On découpe l'atmosphère et l'océan en un grand nombre de mailles (de l'ordre de 100 km de côté pour les modèles globaux, sur plusieurs dizaines de niveaux verticaux). Dans chaque maille, on calcule l'évolution de la température, du vent, de l'humidité ou des courants en appliquant les lois de la physique : conservation de la masse, de l'énergie et de la quantité de mouvement, lois du rayonnement. Le calcul avance par petits pas de temps, de quelques minutes.",
                "Certains phénomènes, comme les nuages ou la turbulence, sont plus petits qu'une maille : on ne peut pas les calculer directement, on les représente par des formules simplifiées appelées paramétrisations. C'est une des principales sources d'incertitude des modèles. Les modèles les plus complets couplent l'atmosphère, l'océan, les glaces, la végétation et le cycle du carbone.",
                "On évalue un modèle en vérifiant qu'il reproduit le climat observé : le climat actuel, l'évolution des températures depuis 1850 et des climats passés très différents, comme celui du dernier maximum glaciaire. Les projections publiées dès les années 1980 se sont révélées globalement cohérentes avec le réchauffement observé depuis.",
              ],
              box: { label: "Définition", text: "Une paramétrisation est une représentation simplifiée, dans un modèle, d'un phénomène trop petit ou trop complexe pour être calculé directement à l'échelle de la maille (nuages, turbulence, végétation)." },
            },
            {
              heading: "Un modèle simple : le bilan radiatif de la Terre",
              paragraphs: [
                "Le principe le plus simple est celui du bilan d'énergie. La Terre reçoit du Soleil une puissance par unité de surface S ≈ 1 361 W/m² au sommet de l'atmosphère, perpendiculairement aux rayons. Répartie sur toute la surface du globe (qui est 4 fois plus grande que le disque intercepté), elle donne en moyenne S ÷ 4 ≈ 340 W/m². Une fraction A ≈ 0,30, l'albédo terrestre, est réfléchie : la puissance absorbée vaut (1 - A) × S ÷ 4 ≈ 238 W/m².",
                "À l'équilibre, la Terre émet vers l'espace autant d'énergie qu'elle en absorbe. Selon la loi de Stefan-Boltzmann, un corps à la température T (en kelvins) émet une puissance surfacique σ × T⁴, avec σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴. On obtient T ≈ 255 K, soit environ -18 °C. La température moyenne réelle de surface, environ 15 °C (288 K), est plus élevée grâce à l'effet de serre.",
                "Ce modèle permet de tester l'effet d'une variation de paramètre : si l'albédo diminue, la puissance absorbée augmente et la température d'équilibre aussi. Il reste très simplifié : il ne décrit ni la répartition géographique du réchauffement, ni les rétroactions, ni la circulation de l'atmosphère et de l'océan, ce que seuls les modèles complets permettent.",
              ],
              box: { label: "Formule", text: "Équilibre radiatif : (1 - A) × S ÷ 4 = σ × T⁴, donc T = [(1 - A) × S ÷ (4σ)]^(1/4). Avec A = 0,30 et S = 1 361 W/m², T ≈ 255 K." },
            },
            {
              heading: "Scénarios et projections",
              paragraphs: [
                "Le climat futur dépend des émissions futures, donc de choix humains qu'aucun modèle ne peut prévoir. On définit donc des scénarios socio-économiques d'émissions et l'on calcule, pour chacun, une projection. Dans son rapport de 2021, le GIEC utilise cinq scénarios de référence, notés SSP, des émissions très faibles (SSP1-1.9) aux émissions très élevées (SSP5-8.5). Pour la période 2081-2100, comparée à 1850-1900, le réchauffement le plus probable est d'environ 1,4 °C dans le scénario le plus sobre, 1,8 °C (SSP1-2.6), 2,7 °C (SSP2-4.5), 3,6 °C (SSP3-7.0) et 4,4 °C dans le scénario le plus émetteur.",
                "Le GIEC a aussi établi que le réchauffement est à peu près proportionnel aux émissions cumulées de CO₂ : environ 0,45 °C par tranche de 1 000 Gt de CO₂ émises. Pour stabiliser la température, il faut donc atteindre des émissions nettes de CO₂ nulles (neutralité carbone). Le budget carbone restant, à partir de 2020, pour avoir une chance sur deux de limiter le réchauffement à 1,5 °C était estimé à environ 500 Gt de CO₂, soit une douzaine d'années d'émissions au rythme actuel.",
              ],
              box: { label: "À retenir", text: "Une projection n'est pas une prévision : c'est la réponse calculée du climat à un scénario d'émissions donné. L'écart entre scénarios montre que le climat de la fin du siècle dépend des choix faits aujourd'hui." },
            },
            {
              heading: "Incertitudes et conséquences",
              paragraphs: [
                "Trois sources d'incertitude se combinent. La variabilité naturelle du climat domine à court terme (quelques années). L'incertitude des modèles vient surtout des rétroactions, en particulier celle des nuages : la sensibilité climatique, réchauffement à l'équilibre pour un doublement de la concentration en CO₂, est probablement comprise entre 2,5 et 4 °C, avec une meilleure estimation de 3 °C (GIEC, 2021). Enfin, l'incertitude sur les émissions futures domine à long terme. C'est pourquoi on compare plusieurs modèles et plusieurs scénarios.",
                "Les conséquences attendues augmentent avec chaque fraction de degré : vagues de chaleur plus fréquentes et plus intenses, précipitations extrêmes plus fortes, sécheresses dans certaines régions, recul des glaciers, acidification de l'océan, menaces sur la biodiversité et les rendements agricoles, risques sanitaires. Le niveau de la mer pourrait s'élever d'environ 0,3 à 0,6 m d'ici 2100 dans le scénario le plus sobre, et d'environ 0,6 à 1 m dans le plus émetteur (par rapport à 1995-2014), avec des effets sur les populations littorales.",
                "Certains changements sont irréversibles à l'échelle humaine : la hausse du niveau de la mer et la fonte des calottes se poursuivront pendant des siècles. L'accord de Paris (2015) fixe l'objectif de contenir le réchauffement nettement en dessous de 2 °C et de poursuivre les efforts pour le limiter à 1,5 °C.",
              ],
            },
          ],
          keyPoints: [
            "Modèle climatique : mailles, lois de la physique, pas de temps ; paramétrisations pour les phénomènes plus petits que la maille.",
            "Validation : reproduire le climat actuel, l'évolution depuis 1850 et des climats passés.",
            "Bilan radiatif : (1 - A) × S ÷ 4 = σT⁴, d'où T ≈ 255 K (-18 °C) sans effet de serre.",
            "Scénarios SSP (GIEC, 2021) : réchauffement en 2081-2100 d'environ 1,4 °C à 4,4 °C selon les émissions.",
            "Réchauffement proportionnel aux émissions cumulées de CO₂ : stabiliser exige la neutralité carbone.",
            "Incertitudes : variabilité naturelle, modèles (nuages, sensibilité climatique), scénarios d'émissions.",
          ],
          example: {
            statement: "On utilise le modèle du bilan radiatif. Données : S = 1 361 W/m² ; σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴. a) Calculer la puissance surfacique absorbée par la Terre pour un albédo A = 0,30, puis sa température d'équilibre radiatif. b) Reprendre le calcul pour A = 0,32. c) Interpréter.",
            solution: [
              "a) Puissance absorbée : (1 - 0,30) × 1 361 ÷ 4 = 0,70 × 340,25 ≈ 238,2 W/m².",
              "À l'équilibre, σT⁴ = 238,2, donc T⁴ = 238,2 ÷ (5,67 × 10⁻⁸) ≈ 4,20 × 10⁹ K⁴ et T = (4,20 × 10⁹)^(1/4) ≈ 254,6 K, soit environ -18,6 °C.",
              "b) Puissance absorbée : 0,68 × 340,25 ≈ 231,4 W/m². T⁴ ≈ 231,4 ÷ (5,67 × 10⁻⁸) ≈ 4,08 × 10⁹ K⁴, d'où T ≈ 252,7 K, soit environ -20,4 °C.",
              "c) Une hausse de l'albédo de 0,02 abaisse la température d'équilibre d'environ 2 K. Inversement, une baisse de l'albédo (par exemple par la fonte des glaces) la ferait monter.",
              "Réponse : environ 255 K pour A = 0,30 et environ 253 K pour A = 0,32. La température calculée est inférieure à la température réelle (288 K) car ce modèle ignore l'effet de serre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le tableau suivant donne le réchauffement le plus probable en 2081-2100, par rapport à 1850-1900, selon le GIEC (2021) : SSP1-1.9 : 1,4 °C ; SSP1-2.6 : 1,8 °C ; SSP2-4.5 : 2,7 °C ; SSP3-7.0 : 3,6 °C ; SSP5-8.5 : 4,4 °C. a) Quels scénarios respectent l'objectif de l'accord de Paris de rester nettement sous 2 °C ? b) Calculer l'écart entre le scénario le plus émetteur et le plus sobre. c) Pourquoi parle-t-on de projections et non de prévisions ?",
              hint: "Comparez chaque valeur à 2 °C ; pour c, demandez-vous de quoi dépend le choix d'un scénario.",
              solution: [
                "a) Seuls SSP1-1.9 (1,4 °C) et SSP1-2.6 (1,8 °C) restent sous 2 °C ; seul le premier est proche de 1,5 °C.",
                "b) 4,4 - 1,4 = 3,0 °C d'écart entre les deux scénarios extrêmes.",
                "c) Chaque valeur est la réponse du climat à une trajectoire d'émissions supposée. Or ces émissions dépendent de choix politiques, économiques et techniques futurs : on ne peut pas savoir lequel se réalisera. On parle donc de projections conditionnelles, et non de prévisions.",
              ],
            },
            {
              level: 2,
              statement: "Selon le GIEC (2021), le réchauffement d'origine humaine est à peu près proportionnel aux émissions cumulées de CO₂, à raison d'environ 0,45 °C pour 1 000 Gt de CO₂. a) Les émissions cumulées entre 1850 et 2019 sont estimées à environ 2 390 Gt de CO₂. Calculer le réchauffement correspondant et le comparer au réchauffement d'origine humaine estimé pour 2010-2019, d'environ 1,07 °C. b) Le budget carbone restant à partir de début 2020 pour avoir une chance sur deux de limiter le réchauffement à 1,5 °C est d'environ 500 Gt de CO₂. Si les émissions restent de 40 Gt de CO₂ par an, en quelle année ce budget est-il épuisé ?",
              hint: "Pour a, appliquez la proportionnalité : 2 390 Gt correspondent à 2,39 fois 1 000 Gt. Pour b, divisez le budget par les émissions annuelles.",
              solution: [
                "a) Réchauffement : 2,39 × 0,45 ≈ 1,08 °C. La valeur est très proche du réchauffement d'origine humaine estimé (1,07 °C) : la relation de proportionnalité décrit bien l'évolution passée.",
                "b) Durée : 500 ÷ 40 = 12,5 ans. À partir de début 2020, le budget serait épuisé vers le milieu de l'année 2032.",
                "Conclusion : limiter le réchauffement à 1,5 °C imposerait une baisse très rapide des émissions ; au rythme actuel, le budget correspondant est consommé en une douzaine d'années.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. On reprend le modèle du bilan radiatif : S = 1 361 W/m² ; σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴. 1) Montrer que, pour A = 0,30, la température d'équilibre est d'environ 255 K. 2) La température moyenne réelle de la surface est d'environ 288 K. Que représente l'écart ? 3) Une fonte importante des glaces ferait passer l'albédo à 0,29. Calculer la nouvelle température d'équilibre et la variation obtenue. 4) Expliquer en quoi ce résultat illustre une rétroaction, puis citer deux limites de ce modèle.",
              hint: "Isolez T⁴ puis prenez la racine quatrième (deux racines carrées successives à la calculatrice).",
              solution: [
                "1) Puissance absorbée : 0,70 × 1 361 ÷ 4 ≈ 238,2 W/m². T⁴ = 238,2 ÷ (5,67 × 10⁻⁸) ≈ 4,20 × 10⁹, d'où T ≈ 254,6 K ≈ 255 K.",
                "2) L'écart 288 - 255 = 33 K représente l'effet de serre naturel : les gaz à effet de serre renvoient vers la surface une partie du rayonnement infrarouge qu'elle émet.",
                "3) Puissance absorbée : 0,71 × 340,25 ≈ 241,6 W/m². T⁴ ≈ 241,6 ÷ (5,67 × 10⁻⁸) ≈ 4,26 × 10⁹, d'où T ≈ 255,5 K. La température d'équilibre augmente d'environ 0,9 K.",
                "4) Un réchauffement fait fondre les glaces, ce qui diminue l'albédo et augmente encore la température : c'est une rétroaction positive.",
                "Limites : le modèle ne tient pas compte de l'effet de serre, il donne une température moyenne unique (sans répartition géographique ni saisons) et il ignore la circulation de l'atmosphère et de l'océan, ainsi que les autres rétroactions (vapeur d'eau, nuages).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation.",
            statements: [
              { text: "Un modèle climatique calcule directement chaque nuage de l'atmosphère.", true: false, why: "Les nuages sont plus petits qu'une maille : ils sont représentés par des paramétrisations." },
              { text: "Une projection climatique dépend du scénario d'émissions choisi.", true: true, why: "Chaque projection est la réponse du climat à une trajectoire d'émissions supposée." },
              { text: "Sans effet de serre, la température moyenne de la Terre serait d'environ -18 °C.", true: true, why: "Le bilan radiatif donne environ 255 K, contre 288 K réellement." },
              { text: "Si les émissions s'arrêtaient, le niveau de la mer cesserait aussitôt de monter.", true: false, why: "L'océan et les calottes ont une forte inertie : la hausse se poursuivrait pendant des siècles." },
              { text: "Pour stabiliser la température, il suffit de stabiliser les émissions annuelles de CO₂.", true: false, why: "Le réchauffement dépend des émissions cumulées : il faut atteindre des émissions nettes nulles." },
              { text: "Les modèles sont évalués en vérifiant qu'ils reproduisent les climats passés.", true: true, why: "Reproduire l'évolution depuis 1850 et des climats anciens est un test essentiel." },
              { text: "Une baisse de l'albédo terrestre fait baisser la température d'équilibre.", true: false, why: "Moins de rayonnement réfléchi signifie plus d'énergie absorbée, donc une température plus élevée." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une paramétrisation dans un modèle climatique ?",
              options: ["Une représentation simplifiée d'un phénomène plus petit que la maille", "Le choix du scénario d'émissions par les gouvernements", "Une mesure de température prise par satellite, puis intégrée telle quelle dans le modèle"],
              answer: 0,
              why: "Les nuages ou la turbulence ne peuvent pas être calculés maille par maille : on les représente par des formules simplifiées.",
            },
            {
              q: "Dans le modèle du bilan radiatif, pourquoi divise-t-on la constante solaire par 4 ?",
              options: ["Parce que l'atmosphère absorbe les trois quarts du rayonnement avant qu'il n'atteigne le sol", "Parce qu'il y a quatre saisons", "Parce que la sphère a 4 fois l'aire du disque éclairé", "Parce que l'albédo vaut environ un quart"],
              answer: 2,
              why: "La Terre intercepte le rayonnement sur un disque de surface πR², mais le répartit sur une sphère de surface 4πR².",
            },
            {
              q: "Quel réchauffement le GIEC (2021) projette-t-il en 2081-2100 dans le scénario intermédiaire SSP2-4.5 ?",
              options: ["Environ 0,5 °C", "Environ 1,1 °C", "Environ 8 °C", "Environ 2,7 °C"],
              answer: 3,
              why: "Le réchauffement le plus probable est d'environ 2,7 °C par rapport à 1850-1900 dans ce scénario, bien au-delà des objectifs de l'accord de Paris.",
            },
            {
              q: "Quelle source d'incertitude domine les projections pour la fin du siècle ?",
              options: ["La variabilité naturelle d'une année à l'autre", "Les émissions futures, qui dépendent des choix humains", "La précision des thermomètres actuels utilisés dans les stations"],
              answer: 1,
              why: "À long terme, l'écart entre scénarios d'émissions est la principale source de différence entre les projections.",
            },
            {
              q: "Pourquoi faut-il atteindre la neutralité carbone pour stabiliser la température ?",
              options: ["Parce que le CO₂ émis disparaît de lui-même de l'atmosphère en quelques mois", "Parce que la température ne dépend que du méthane", "Parce que l'albédo augmente toujours avec les émissions", "Parce que le réchauffement dépend des émissions cumulées"],
              answer: 3,
              why: "Tant que des émissions nettes s'ajoutent, le cumul augmente et la température continue de monter.",
            },
          ],
          trap: "Prendre une projection pour une prévision certaine, ou penser que les incertitudes des modèles autorisent à douter du réchauffement : tous les modèles et tous les scénarios prévoient un réchauffement, seule son ampleur varie.",
          method: "Pour lire une figure de projections, repérez d'abord la période de référence et l'horizon (par exemple 1850-1900 et 2081-2100), puis le scénario, et enfin la fourchette d'incertitude : citez toujours la valeur la plus probable avec sa fourchette.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'energie-et-climat',
          title: 'Énergie, choix de développement et futur climatique',
          minutes: 30,
          objectives: [
            "Distinguer énergie primaire et énergie finale, et ressources renouvelables et non renouvelables.",
            "Calculer la masse de CO₂ émise par la combustion d'un combustible et comparer les combustibles.",
            "Analyser l'empreinte carbone d'une activité en équivalent CO₂.",
            "Distinguer les mesures d'atténuation et d'adaptation face au changement climatique.",
          ],
          course: [
            {
              heading: "Les ressources énergétiques de l'humanité",
              paragraphs: [
                "L'énergie primaire est l'énergie contenue dans les ressources naturelles avant toute transformation : pétrole, gaz naturel, charbon, uranium, biomasse, énergie du vent, du rayonnement solaire, de l'eau des rivières. L'énergie finale est celle que reçoit l'utilisateur après transformation et transport : carburant à la pompe, électricité au compteur, gaz livré au domicile. Chaque transformation entraîne des pertes, si bien que l'énergie finale est toujours inférieure à l'énergie primaire mobilisée.",
                "On distingue les ressources non renouvelables, constituées de stocks qui se reconstituent beaucoup plus lentement qu'on ne les consomme (combustibles fossiles, uranium), et les ressources renouvelables, issues de flux continus (rayonnement solaire, vent, cycle de l'eau, biomasse si elle repousse). Aujourd'hui, les combustibles fossiles fournissent encore environ 80 % de l'énergie primaire consommée dans le monde, et la consommation mondiale d'énergie a beaucoup augmenté depuis le XIXe siècle, avec la population et le développement économique.",
              ],
              box: { label: "Définition", text: "Énergie primaire : énergie des ressources naturelles avant transformation. Énergie finale : énergie livrée à l'utilisateur. Ressource renouvelable : ressource issue d'un flux qui se renouvelle au moins aussi vite qu'on l'utilise." },
            },
            {
              heading: "Combustion et émission de CO₂",
              paragraphs: [
                "Brûler un combustible carboné, c'est le faire réagir avec le dioxygène : il se forme du dioxyde de carbone et de l'eau, et de l'énergie thermique est libérée. Exemples d'équations ajustées : C + O₂ → CO₂ (le charbon, modélisé par du carbone pur) ; CH₄ + 2 O₂ → CO₂ + 2 H₂O (le méthane, constituant principal du gaz naturel) ; 2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O (l'octane, qui modélise l'essence).",
                "Pour calculer la masse de CO₂ émise, on calcule la quantité de matière de combustible n = m ÷ M, on en déduit la quantité de CO₂ formée grâce aux nombres de l'équation, puis sa masse m = n × M(CO₂), avec M(CO₂) = 44 g/mol. Par exemple, 1 kg de méthane (M = 16 g/mol) représente 62,5 mol ; il forme 62,5 mol de CO₂, soit 62,5 × 44 = 2 750 g, c'est-à-dire 2,75 kg de CO₂.",
                "Pour comparer des combustibles, on rapporte la masse de CO₂ émise à l'énergie libérée. Le méthane libère environ 50 MJ par kilogramme et émet donc environ 55 g de CO₂ par mégajoule ; le carbone libère environ 33 MJ/kg pour 3,67 kg de CO₂, soit environ 110 g/MJ. À énergie égale, le charbon émet donc environ deux fois plus de CO₂ que le gaz naturel.",
              ],
              box: { label: "Formule", text: "n = m ÷ M ; quantités de matière proportionnelles aux nombres de l'équation ; m(CO₂) = n(CO₂) × 44 g/mol. Pour du carbone pur : m(CO₂) = m(C) × 44 ÷ 12 ≈ 3,67 × m(C)." },
            },
            {
              heading: "Équivalent CO₂ et empreinte carbone",
              paragraphs: [
                "Les gaz à effet de serre n'ont pas tous le même effet. Pour les comparer, on utilise le pouvoir de réchauffement global (PRG) sur 100 ans, rapporté à celui du CO₂ : une tonne de méthane réchauffe environ 27 à 30 fois plus qu'une tonne de CO₂ sur cette durée, et une tonne de protoxyde d'azote environ 270 fois plus. On exprime ainsi toutes les émissions en équivalent CO₂ (CO₂e) : 1 tonne de méthane compte pour environ 28 tonnes de CO₂e.",
                "L'empreinte carbone d'une personne ou d'un pays mesure les émissions provoquées par sa consommation, y compris celles émises à l'étranger pour fabriquer les produits importés. Elle se distingue de l'inventaire territorial, qui ne compte que les émissions produites sur le territoire. Elle se répartit entre grands postes : transports, logement (chauffage), alimentation, biens de consommation et services. Elle s'estime par une analyse des émissions sur l'ensemble de la vie des produits.",
              ],
            },
            {
              heading: "Atténuer et s'adapter : des choix de développement",
              paragraphs: [
                "Face au changement climatique, deux types de réponses se complètent. L'atténuation vise à limiter le réchauffement en réduisant les émissions de gaz à effet de serre ou en renforçant les puits de carbone : sobriété (réduire les besoins), efficacité énergétique (mieux isoler, utiliser des appareils moins gourmands), remplacement des énergies fossiles par des énergies bas carbone, protection des forêts et des sols. L'adaptation vise à réduire la vulnérabilité des sociétés et des écosystèmes aux effets du changement climatique : végétaliser les villes contre les îlots de chaleur, adapter les cultures, protéger les littoraux, prévoir des systèmes d'alerte.",
                "L'accord de Paris, signé en 2015, engage les États à contenir le réchauffement nettement en dessous de 2 °C. L'Union européenne et la France visent la neutralité carbone en 2050 : les émissions restantes devront alors être compensées par des absorptions (forêts, sols). Ces objectifs supposent des choix de développement : modes de transport, d'urbanisme, d'alimentation, de production d'énergie. Ils posent aussi une question de justice, car les pays qui ont le moins émis sont souvent les plus exposés, et l'accès à l'énergie reste indispensable au développement.",
              ],
              box: { label: "À retenir", text: "Atténuation : agir sur les causes (moins d'émissions, plus de puits de carbone). Adaptation : agir sur les conséquences (réduire la vulnérabilité). Les deux sont nécessaires, car une partie du réchauffement est déjà inévitable." },
            },
          ],
          keyPoints: [
            "Énergie primaire (ressource brute) et énergie finale (livrée à l'utilisateur) ; environ 80 % de l'énergie primaire mondiale est fossile.",
            "Combustion : combustible + O₂ → CO₂ + H₂O ; m(CO₂) se calcule avec n = m ÷ M et l'équation ajustée.",
            "1 kg de méthane émet 2,75 kg de CO₂ ; 1 kg de carbone émet 3,67 kg de CO₂.",
            "À énergie égale, le charbon émet environ deux fois plus de CO₂ que le gaz naturel.",
            "Équivalent CO₂ : le méthane compte environ 28 fois plus que le CO₂ sur 100 ans.",
            "Empreinte carbone : émissions liées à la consommation, importations comprises.",
            "Atténuation (réduire les émissions) et adaptation (réduire la vulnérabilité) se complètent.",
          ],
          example: {
            statement: "Une voiture consomme 6,0 L d'essence pour 100 km. On modélise l'essence par l'octane C₈H₁₈, de masse volumique 0,75 kg/L. a) Écrire l'équation ajustée de la combustion complète de l'octane. b) Calculer la masse de CO₂ émise par la combustion de 1,0 L d'essence. c) En déduire les émissions de la voiture en grammes de CO₂ par kilomètre. Données : M(C) = 12 g/mol ; M(H) = 1 g/mol ; M(O) = 16 g/mol.",
            solution: [
              "a) 2 C₈H₁₈ + 25 O₂ → 16 CO₂ + 18 H₂O. Vérification : 16 C, 36 H et 50 O de chaque côté.",
              "b) Masse d'octane dans 1,0 L : 0,75 kg = 750 g. M(C₈H₁₈) = 8 × 12 + 18 × 1 = 114 g/mol, donc n = 750 ÷ 114 ≈ 6,58 mol.",
              "D'après l'équation, 1 mol d'octane donne 8 mol de CO₂ : n(CO₂) = 8 × 6,58 ≈ 52,6 mol. Masse : 52,6 × 44 ≈ 2 315 g, soit environ 2,3 kg de CO₂ par litre.",
              "c) Pour 100 km : 6,0 × 2,315 ≈ 13,9 kg de CO₂. Par kilomètre : 13 900 ÷ 100 ≈ 139 g de CO₂ par km.",
              "Réponse : environ 2,3 kg de CO₂ par litre d'essence et environ 140 g de CO₂ par kilomètre parcouru (à l'usage, sans compter la fabrication du véhicule ni la production du carburant).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le gaz naturel est modélisé par le méthane CH₄. a) Écrire l'équation ajustée de sa combustion complète. b) Calculer la masse de CO₂ émise par la combustion de 1,0 kg de méthane. Données : M(C) = 12 g/mol ; M(H) = 1 g/mol ; M(O) = 16 g/mol.",
              hint: "Ajustez d'abord le carbone, puis l'hydrogène, puis l'oxygène. Une mole de méthane donne une mole de CO₂.",
              solution: [
                "a) CH₄ + 2 O₂ → CO₂ + 2 H₂O. Vérification : 1 C, 4 H et 4 O de chaque côté.",
                "b) M(CH₄) = 12 + 4 × 1 = 16 g/mol ; n(CH₄) = 1 000 ÷ 16 = 62,5 mol.",
                "n(CO₂) = n(CH₄) = 62,5 mol ; M(CO₂) = 12 + 2 × 16 = 44 g/mol ; m(CO₂) = 62,5 × 44 = 2 750 g.",
                "Réponse : la combustion de 1,0 kg de méthane émet 2,75 kg de CO₂.",
              ],
            },
            {
              level: 2,
              statement: "On compare deux combustibles pour produire la même énergie. Données : le méthane libère environ 50 MJ par kg et émet 2,75 kg de CO₂ par kg brûlé ; le charbon, modélisé par du carbone pur, libère environ 33 MJ par kg et émet 3,67 kg de CO₂ par kg brûlé. a) Calculer, pour chacun, la masse de CO₂ émise par mégajoule. b) Une centrale doit libérer 1 000 000 MJ de chaleur. Calculer la masse de CO₂ émise avec chaque combustible. c) Conclure.",
              hint: "Divisez la masse de CO₂ émise par kilogramme par l'énergie libérée par kilogramme.",
              solution: [
                "a) Méthane : 2,75 kg ÷ 50 MJ = 0,055 kg/MJ, soit 55 g de CO₂ par MJ. Carbone : 3,67 kg ÷ 33 MJ ≈ 0,111 kg/MJ, soit environ 111 g de CO₂ par MJ.",
                "b) Méthane : 1 000 000 × 0,055 = 55 000 kg, soit 55 t de CO₂. Carbone : 1 000 000 × 0,111 ≈ 111 000 kg, soit environ 111 t de CO₂.",
                "c) À énergie égale, le charbon émet environ deux fois plus de CO₂ que le gaz naturel (111 ÷ 55 ≈ 2). Remplacer le charbon par le gaz réduit les émissions, mais le gaz reste un combustible fossile émetteur, et ses fuites de méthane, puissant gaz à effet de serre, réduisent ce gain.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Une famille chauffe sa maison au gaz naturel et consomme 12 000 kWh de chaleur par an. On rappelle que 1 kWh = 3,6 MJ et que le méthane libère 50 MJ par kg en émettant 2,75 kg de CO₂ par kg. 1) Calculer la masse de méthane brûlée en un an et la masse de CO₂ émise. 2) La famille installe une pompe à chaleur qui fournit 3 kWh de chaleur pour 1 kWh d'électricité consommé ; l'électricité utilisée émet 0,06 kg de CO₂ par kWh. Calculer les nouvelles émissions annuelles et le pourcentage de baisse. 3) S'agit-il d'une mesure d'atténuation ou d'adaptation ? 4) Proposer une mesure d'adaptation de la maison aux vagues de chaleur, et une autre mesure d'atténuation fondée sur la sobriété.",
              hint: "Convertissez les kWh en MJ, puis divisez par l'énergie libérée par kilogramme de méthane. Pour 2, la pompe à chaleur divise par 3 l'électricité nécessaire.",
              solution: [
                "1) Énergie : 12 000 × 3,6 = 43 200 MJ. Masse de méthane : 43 200 ÷ 50 = 864 kg. CO₂ émis : 864 × 2,75 = 2 376 kg, soit environ 2,4 t de CO₂ par an.",
                "2) Électricité consommée : 12 000 ÷ 3 = 4 000 kWh. Émissions : 4 000 × 0,06 = 240 kg de CO₂ par an.",
                "Baisse : (2 376 - 240) ÷ 2 376 ≈ 0,90, soit environ 90 % de baisse des émissions liées au chauffage.",
                "3) C'est une mesure d'atténuation : elle réduit les émissions de gaz à effet de serre, donc agit sur la cause du réchauffement.",
                "4) Adaptation : installer des volets extérieurs ou planter des arbres qui ombragent la façade, pour limiter la chaleur intérieure lors des canicules. Atténuation par sobriété : baisser la température de consigne du chauffage (par exemple à 19 °C) pour réduire la consommation.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Énergie primaire", right: "Énergie des ressources naturelles avant transformation" },
              { left: "Énergie finale", right: "Énergie livrée à l'utilisateur, après transformation et transport" },
              { left: "Empreinte carbone", right: "Émissions liées à la consommation, importations comprises" },
              { left: "Équivalent CO₂", right: "Unité commune pour comparer l'effet des différents gaz à effet de serre" },
              { left: "Atténuation", right: "Réduire les émissions ou renforcer les puits de carbone" },
              { left: "Adaptation", right: "Réduire la vulnérabilité aux effets du changement climatique" },
            ],
          },
          quiz: [
            {
              q: "Quelle masse de CO₂ la combustion de 12 g de carbone pur produit-elle ?",
              options: ["12 g", "24 g", "44 g", "32 g"],
              answer: 2,
              why: "C + O₂ → CO₂ : 12 g de carbone représentent 1 mol, qui donne 1 mol de CO₂, soit 44 g. La masse augmente car les atomes d'oxygène s'ajoutent.",
            },
            {
              q: "Quelle part de l'énergie primaire mondiale est encore fournie par les combustibles fossiles ?",
              options: ["Environ 20 %", "Environ 80 %", "Environ 50 %", "Environ 99 %"],
              answer: 1,
              why: "Pétrole, charbon et gaz fournissent encore environ 80 % de l'énergie primaire consommée dans le monde.",
            },
            {
              q: "Laquelle de ces mesures relève de l'adaptation ?",
              options: ["Végétaliser une ville pour limiter les îlots de chaleur", "Remplacer une chaudière au fioul par une pompe à chaleur", "Développer les transports en commun dans toute l'agglomération", "Réduire la consommation de viande dans les cantines scolaires"],
              answer: 0,
              why: "Végétaliser la ville réduit la vulnérabilité aux canicules : c'est de l'adaptation. Les autres mesures réduisent les émissions : c'est de l'atténuation.",
            },
            {
              q: "Pourquoi exprime-t-on les émissions en équivalent CO₂ ?",
              options: ["Parce que seul le CO₂ est un gaz à effet de serre", "Parce que le méthane se transforme toujours en CO₂ en quelques jours", "Pour additionner des gaz à l'effet différent", "Pour mesurer la pollution de l'air"],
              answer: 2,
              why: "Chaque gaz est pondéré par son pouvoir de réchauffement global, ce qui permet d'additionner les émissions de CO₂, de méthane et de protoxyde d'azote.",
            },
            {
              q: "Qu'est-ce qui distingue l'empreinte carbone de l'inventaire territorial ?",
              options: ["Elle ne compte que le CO₂ émis par les voitures", "Elle exclut les émissions liées au chauffage des logements", "Elle ne concerne que les entreprises", "Elle inclut les émissions des produits importés"],
              answer: 3,
              why: "L'empreinte carbone compte les émissions liées à la consommation, y compris celles émises à l'étranger pour fabriquer ce qui est importé.",
            },
          ],
          trap: "Croire que la masse de CO₂ émise ne peut pas dépasser la masse de combustible brûlé : chaque atome de carbone se lie à deux atomes d'oxygène pris dans l'air, si bien que 1 kg de carbone donne 3,67 kg de CO₂.",
          method: "Pour un calcul de masse de CO₂, écrivez toujours la chaîne complète : masse de combustible → n = m ÷ M → n(CO₂) par l'équation → m(CO₂) = n × 44, et vérifiez l'ordre de grandeur (entre 2,5 et 3,7 kg de CO₂ par kg de combustible fossile).",
        },
      ],
    },
    /* ==================================================================== */
    /* LE FUTUR DES ÉNERGIES                                                  */
    /* ==================================================================== */
    {
      id: 'futur-des-energies',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'deux-siecles-electricite',
          title: 'Deux siècles d\'énergie électrique',
          minutes: 30,
          objectives: [
            "Situer dans le temps les grandes étapes de la maîtrise de l'énergie électrique.",
            "Expliquer le principe de l'alternateur, qui convertit l'énergie mécanique en énergie électrique par induction.",
            "Exploiter la caractéristique courant-tension d'une cellule photovoltaïque pour déterminer sa puissance maximale.",
            "Calculer le rendement d'un convertisseur d'énergie.",
          ],
          course: [
            {
              heading: "Deux siècles de découvertes",
              paragraphs: [
                "En 1800, l'Italien Alessandro Volta invente la pile, première source de courant électrique continu. En 1820, le Danois Hans Christian Ørsted observe qu'un courant électrique dévie l'aiguille d'une boussole : électricité et magnétisme sont liés. En 1831, l'Anglais Michael Faraday découvre l'induction électromagnétique : un aimant en mouvement près d'une bobine y fait apparaître une tension. C'est le principe de toutes les machines qui produisent aujourd'hui l'essentiel de l'électricité.",
                "Les machines industrielles suivent : vers 1870, la dynamo du Belge Zénobe Gramme produit un courant continu de façon fiable. En 1882, Thomas Edison met en service à New York l'une des premières centrales électriques, en courant continu. À la fin du XIXe siècle, le courant alternatif, défendu notamment par Nikola Tesla et George Westinghouse, s'impose, car des transformateurs permettent d'en modifier facilement la tension pour le transporter sur de longues distances.",
                "Une autre histoire commence en 1839, lorsque le Français Edmond Becquerel observe que la lumière peut produire un courant électrique : c'est l'effet photovoltaïque. En 1905, Albert Einstein explique un phénomène voisin, l'effet photoélectrique, en introduisant le photon, grain de lumière. En 1954, les laboratoires Bell, aux États-Unis, fabriquent la première cellule photovoltaïque au silicium utilisable.",
              ],
            },
            {
              heading: "L'alternateur : de l'énergie mécanique à l'énergie électrique",
              paragraphs: [
                "Un alternateur comporte deux parties : le rotor, partie mobile qui porte un aimant ou un électroaimant, et le stator, partie fixe qui porte des bobines de fil conducteur. Lorsque le rotor tourne, le champ magnétique qui traverse les bobines varie : une tension induite apparaît à leurs bornes. Comme l'aimant présente alternativement ses deux pôles, cette tension change de signe périodiquement : elle est alternative. En France, sa fréquence est de 50 Hz.",
                "L'alternateur convertit donc de l'énergie mécanique (de rotation) en énergie électrique. Il faut le faire tourner : c'est le rôle d'une turbine mise en mouvement par de la vapeur d'eau (centrales thermiques à combustible fossile, centrales nucléaires), par l'eau d'un barrage (centrales hydrauliques) ou par le vent (éoliennes). Les grands alternateurs ont un rendement très élevé, souvent supérieur à 95 % et proche de 99 % pour les plus puissants : la petite partie perdue l'est sous forme de chaleur.",
                "Attention à ne pas confondre le rendement de l'alternateur et celui de la centrale entière : dans une centrale thermique, c'est la conversion de la chaleur en énergie mécanique par la turbine qui limite le rendement global, de l'ordre de 33 à 40 %.",
              ],
              box: { label: "Définition", text: "L'induction électromagnétique est l'apparition d'une tension aux bornes d'une bobine lorsque le champ magnétique qui la traverse varie, par exemple sous l'effet d'un aimant en mouvement (Faraday, 1831)." },
            },
            {
              heading: "La cellule photovoltaïque : de la lumière à l'électricité",
              paragraphs: [
                "Une cellule photovoltaïque est faite d'un matériau semi-conducteur, le plus souvent du silicium. Lorsqu'un photon d'énergie suffisante est absorbé, il libère un électron qui peut circuler : la cellule convertit directement l'énergie lumineuse en énergie électrique, sans pièce mobile et sans combustion. Elle produit un courant continu. Une cellule au silicium délivre une tension de l'ordre de 0,6 V : on en associe plusieurs dizaines en série dans un panneau.",
                "Le comportement d'une cellule est décrit par sa caractéristique, la courbe de l'intensité I en fonction de la tension U, mesurée sous un éclairement donné. Elle part de l'intensité de court-circuit Icc (pour U = 0) et rejoint la tension à vide Uco (pour I = 0). La puissance fournie vaut P = U × I : elle est nulle aux deux extrémités et passe par un maximum, le point de puissance maximale, que les onduleurs des installations cherchent à suivre en permanence.",
                "Le rendement de la cellule est le rapport de la puissance électrique maximale à la puissance lumineuse reçue, égale à l'éclairement E (en W/m²) multiplié par la surface S. Les panneaux au silicium du commerce ont un rendement de l'ordre de 20 %. La production dépend de l'éclairement, donc de l'heure, de la saison et de la météo.",
              ],
              box: { label: "Formule", text: "Puissance électrique : P = U × I (W, V, A). Rendement d'un convertisseur : η = puissance utile ÷ puissance reçue. Pour une cellule : η = Pmax ÷ (E × S), avec E l'éclairement en W/m² et S la surface en m²." },
            },
          ],
          keyPoints: [
            "Repères : pile de Volta (1800), induction de Faraday (1831), dynamo de Gramme (vers 1870), centrale d'Edison (1882).",
            "Effet photovoltaïque observé par Becquerel (1839), expliqué par Einstein (1905) ; cellule au silicium en 1954.",
            "Alternateur : un rotor aimanté tourne devant des bobines fixes ; tension induite alternative (50 Hz en France).",
            "Alternateur : énergie mécanique → énergie électrique, rendement très élevé (souvent plus de 95 %).",
            "Cellule photovoltaïque : conversion directe lumière → électricité, courant continu, rendement de l'ordre de 20 %.",
            "P = U × I ; rendement η = puissance utile ÷ puissance reçue = Pmax ÷ (E × S) pour une cellule.",
          ],
          example: {
            statement: "Une cellule photovoltaïque de 100 cm² est éclairée sous 1 000 W/m². On relève sa caractéristique (données fictives) : U = 0 V, I = 3,00 A ; U = 0,20 V, I = 2,98 A ; U = 0,30 V, I = 2,95 A ; U = 0,40 V, I = 2,85 A ; U = 0,45 V, I = 2,70 A ; U = 0,50 V, I = 2,40 A ; U = 0,55 V, I = 1,60 A ; U = 0,60 V, I = 0 A. a) Donner Icc et Uco. b) Déterminer la puissance maximale. c) Calculer le rendement de la cellule.",
            solution: [
              "a) Intensité de court-circuit (U = 0) : Icc = 3,00 A. Tension à vide (I = 0) : Uco = 0,60 V.",
              "b) On calcule P = U × I pour chaque point : 0 W ; 0,596 W ; 0,885 W ; 1,14 W ; 1,215 W ; 1,20 W ; 0,88 W ; 0 W.",
              "La puissance maximale est Pmax ≈ 1,22 W, obtenue pour U = 0,45 V et I = 2,70 A.",
              "c) Surface : 100 cm² = 0,0100 m². Puissance lumineuse reçue : 1 000 × 0,0100 = 10,0 W.",
              "Rendement : η = 1,215 ÷ 10,0 ≈ 0,12. Réponse : la cellule convertit environ 12 % de la puissance lumineuse reçue en puissance électrique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une centrale hydraulique, un alternateur reçoit de la turbine une puissance mécanique de 500 MW et fournit une puissance électrique de 495 MW. a) Nommer la partie mobile et la partie fixe de l'alternateur et dire ce que chacune porte. b) Calculer le rendement de l'alternateur. c) Que devient la puissance non convertie en électricité ?",
              hint: "Le rendement est le quotient de la puissance utile (électrique) par la puissance reçue (mécanique).",
              solution: [
                "a) La partie mobile est le rotor, qui porte l'aimant ou l'électroaimant ; la partie fixe est le stator, qui porte les bobines dans lesquelles apparaît la tension induite.",
                "b) η = 495 ÷ 500 = 0,99, soit un rendement de 99 %.",
                "c) La puissance perdue vaut 500 - 495 = 5 MW. Elle est dissipée sous forme de chaleur (effet Joule dans les bobines, frottements) : l'alternateur doit être refroidi.",
              ],
            },
            {
              level: 2,
              statement: "Un panneau photovoltaïque de 1,7 m² comporte 60 cellules identiques associées en série. Chaque cellule a une tension à vide de 0,62 V. Sous un éclairement de 1 000 W/m², le panneau fournit une puissance maximale de 340 W (données fictives). a) Calculer la tension à vide du panneau. b) Calculer son rendement. c) À cet endroit, un mètre carré bien orienté reçoit 1 200 kWh d'énergie solaire par an. Estimer l'énergie électrique produite par le panneau en un an, en négligeant les autres pertes.",
              hint: "En série, les tensions s'additionnent. L'énergie produite en un an vaut le rendement multiplié par l'énergie solaire reçue par toute la surface.",
              solution: [
                "a) Tension à vide du panneau : 60 × 0,62 = 37,2 V.",
                "b) Puissance lumineuse reçue : 1 000 × 1,7 = 1 700 W. Rendement : η = 340 ÷ 1 700 = 0,20, soit 20 %.",
                "c) Énergie solaire reçue par le panneau en un an : 1 200 × 1,7 = 2 040 kWh. Énergie électrique produite : 0,20 × 2 040 = 408 kWh.",
                "Réponse : environ 400 kWh par an, une valeur maximale, car on a négligé l'échauffement des cellules, les pertes de l'onduleur et les salissures.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Une centrale hydraulique utilise une chute d'eau de hauteur h = 100 m avec un débit de 50 m³ d'eau par seconde. Données : masse volumique de l'eau ρ = 1 000 kg/m³ ; g = 9,81 N/kg ; rendement de la turbine 90 % ; rendement de l'alternateur 98 %. 1) Montrer que la puissance libérée par la chute d'eau vaut environ 49 MW (l'énergie potentielle de pesanteur d'une masse m à la hauteur h vaut m × g × h). 2) Calculer la puissance électrique fournie par la centrale. 3) Quelle surface de panneaux photovoltaïques de rendement 20 % faudrait-il pour fournir la même puissance sous un éclairement de 1 000 W/m² ? 4) Comparer les deux installations du point de vue de la régularité de la production.",
              hint: "En une seconde, 50 m³ d'eau, soit 50 000 kg, descendent de 100 m. Le rendement global d'une chaîne est le produit des rendements.",
              solution: [
                "1) En une seconde, la masse d'eau qui chute vaut m = 1 000 × 50 = 50 000 kg. Énergie libérée en une seconde : 50 000 × 9,81 × 100 = 4,905 × 10⁷ J. La puissance vaut donc environ 49 MW.",
                "2) Puissance électrique : 49,05 × 0,90 × 0,98 ≈ 43,3 MW.",
                "3) Chaque mètre carré de panneau fournit 0,20 × 1 000 = 200 W. Surface nécessaire : 43,3 × 10⁶ ÷ 200 ≈ 2,2 × 10⁵ m², soit environ 0,22 km².",
                "4) La centrale hydraulique produit tant que le débit est assuré, de jour comme de nuit, et sa production peut être réglée en ouvrant plus ou moins les vannes. Les panneaux n'atteignent cette puissance qu'en plein soleil : leur production est nulle la nuit et varie avec les nuages et les saisons.",
                "Conclusion : à puissance maximale égale, la production hydraulique est plus régulière et pilotable, alors que la production photovoltaïque est variable et nécessite des moyens de stockage ou des sources complémentaires.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de l'électricité dans l'ordre chronologique.",
            items: [
              "Volta invente la pile électrique (1800)",
              "Faraday découvre l'induction électromagnétique (1831)",
              "Becquerel observe l'effet photovoltaïque (1839)",
              "Gramme met au point sa dynamo industrielle (vers 1870)",
              "Edison met en service une centrale électrique à New York (1882)",
              "Einstein explique l'effet photoélectrique par le photon (1905)",
              "Première cellule photovoltaïque au silicium aux laboratoires Bell (1954)",
            ],
          },
          quiz: [
            {
              q: "Quel physicien découvre l'induction électromagnétique en 1831 ?",
              options: ["Alessandro Volta", "Michael Faraday", "Thomas Edison", "Albert Einstein"],
              answer: 1,
              why: "Michael Faraday montre en 1831 qu'un champ magnétique variable fait apparaître une tension dans une bobine : c'est le principe de l'alternateur.",
            },
            {
              q: "Quelle conversion réalise un alternateur ?",
              options: ["Énergie lumineuse en énergie électrique", "Énergie chimique en énergie électrique", "Énergie mécanique en énergie électrique", "Énergie électrique en énergie mécanique"],
              answer: 2,
              why: "Le rotor, entraîné par une turbine, tourne devant les bobines du stator : l'énergie mécanique de rotation est convertie en énergie électrique.",
            },
            {
              q: "Une cellule photovoltaïque fonctionne sous U = 0,50 V et I = 2,0 A. Quelle puissance électrique fournit-elle ?",
              options: ["1,0 W", "2,5 W", "4,0 W", "0,25 W"],
              answer: 0,
              why: "P = U × I = 0,50 × 2,0 = 1,0 W.",
            },
            {
              q: "Quel est l'ordre de grandeur du rendement d'un grand alternateur ?",
              options: ["Environ 10 %", "Environ 40 %", "Environ 60 %", "Plus de 95 %"],
              answer: 3,
              why: "Les grands alternateurs perdent très peu d'énergie : leur rendement dépasse souvent 95 % et approche 99 % pour les plus puissants.",
            },
            {
              q: "Quel avantage la cellule photovoltaïque présente-t-elle par rapport à une centrale à alternateur ?",
              options: ["Elle produit directement un courant alternatif à 50 Hz", "Elle convertit la lumière sans pièce mobile", "Elle a un rendement supérieur à celui d'un alternateur"],
              answer: 1,
              why: "La cellule convertit directement l'énergie lumineuse en énergie électrique, sans turbine ni rotor. Elle produit un courant continu et son rendement est de l'ordre de 20 %.",
            },
          ],
          trap: "Calculer la puissance maximale d'une cellule en multipliant l'intensité de court-circuit par la tension à vide : ces deux valeurs ne sont jamais obtenues en même temps, et la puissance est nulle en chacun de ces points.",
          method: "Pour exploiter une caractéristique I(U), ajoutez au tableau une ligne P = U × I, repérez la valeur la plus grande, puis vérifiez sur la courbe qu'elle se situe dans le « coude », juste avant la chute de l'intensité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'atouts-electricite',
          title: 'Les atouts de l\'électricité',
          minutes: 30,
          objectives: [
            "Expliquer pourquoi l'électricité est un vecteur d'énergie facile à transporter et à convertir.",
            "Identifier des modes de production d'électricité sans combustion.",
            "Comparer différents modes de stockage de l'énergie électrique.",
            "Calculer le rendement global d'une chaîne de conversion d'énergie.",
          ],
          course: [
            {
              heading: "Un vecteur d'énergie facile à transporter et à convertir",
              paragraphs: [
                "L'électricité n'est pas une source d'énergie qu'on trouverait dans la nature : on la produit à partir d'autres formes d'énergie (mécanique, lumineuse, chimique). On dit que c'est un vecteur d'énergie. Son premier atout est d'être transportée presque instantanément, par des réseaux de câbles, sur des centaines de kilomètres, jusqu'à chaque logement.",
                "Son second atout est de se convertir facilement, avec de bons rendements, en presque toutes les autres formes d'énergie : en énergie mécanique dans un moteur électrique (rendement souvent supérieur à 90 %), en énergie thermique dans un radiateur (la totalité de l'énergie reçue est convertie en chaleur), en énergie lumineuse dans une lampe, en énergie chimique lors de la charge d'une batterie ou d'une électrolyse. À titre de comparaison, un moteur thermique de voiture ne convertit qu'environ 30 à 40 % de l'énergie de son carburant en énergie mécanique.",
              ],
              box: { label: "Définition", text: "Un vecteur d'énergie est une forme sous laquelle l'énergie est transportée ou stockée entre sa source et son utilisation. L'électricité et l'hydrogène sont des vecteurs : il faut les produire à partir de sources primaires." },
            },
            {
              heading: "Produire de l'électricité sans combustion",
              paragraphs: [
                "Plusieurs modes de production n'émettent pas de CO₂ lors de leur fonctionnement. Les centrales hydrauliques convertissent l'énergie potentielle de pesanteur de l'eau d'un barrage, puis son énergie cinétique, en énergie mécanique dans une turbine. Les éoliennes récupèrent l'énergie cinétique du vent. Dans les deux cas, un alternateur produit ensuite l'électricité. Les cellules photovoltaïques convertissent directement l'énergie lumineuse. Les centrales nucléaires utilisent la chaleur dégagée par la fission de noyaux d'uranium pour produire de la vapeur qui fait tourner une turbine.",
                "L'énergie cinétique d'une masse m d'air animée d'une vitesse v vaut ½ × m × v². Comme la masse d'air qui traverse les pales chaque seconde est elle-même proportionnelle à v, la puissance récupérable par une éolienne est proportionnelle à v³ : si la vitesse du vent double, la puissance est multipliée par 8. C'est pourquoi l'emplacement des éoliennes est choisi avec soin. Ces modes de production ne sont toutefois pas sans impact : fabrication des installations, occupation des sols, déchets radioactifs pour le nucléaire.",
              ],
            },
            {
              heading: "Stocker l'énergie électrique",
              paragraphs: [
                "Sur un réseau, la production doit être égale à la consommation à chaque instant, sinon la fréquence de 50 Hz varie et le réseau peut s'effondrer. Or l'électricité elle-même ne se stocke directement qu'en très petite quantité (dans des condensateurs). Pour la stocker en grande quantité, il faut la convertir en une autre forme d'énergie, puis la reconvertir quand on en a besoin, avec des pertes à chaque étape.",
                "Les stations de transfert d'énergie par pompage (STEP) pompent l'eau d'un bassin inférieur vers un bassin supérieur quand l'électricité est abondante, puis la turbinent lors des pics de consommation : l'énergie est stockée sous forme d'énergie potentielle de pesanteur, E = m × g × h, avec un rendement global de l'ordre de 70 à 80 %. Les batteries stockent l'énergie sous forme chimique, avec un rendement de l'ordre de 90 % pour les batteries lithium-ion, mais une capacité limitée et des besoins en métaux. L'hydrogène, produit par électrolyse de l'eau puis reconverti dans une pile à combustible, permet de stocker longtemps de grandes quantités, mais avec un rendement global faible, de l'ordre de 25 à 35 %.",
                "Le stockage est d'autant plus utile que la part des énergies variables (éolien, solaire) augmente : il permet de déplacer dans le temps une production qui ne coïncide pas avec la demande.",
              ],
              box: { label: "Repère", text: "Ordres de grandeur des rendements de stockage (énergie restituée ÷ énergie stockée) : STEP 70 à 80 %, batterie lithium-ion environ 90 %, hydrogène (électrolyse puis pile à combustible) 25 à 35 %." },
            },
            {
              heading: "Le rendement d'une chaîne de conversion",
              paragraphs: [
                "Une chaîne énergétique représente les conversions successives entre une source et un usage. Chaque convertisseur reçoit une énergie, en fournit une partie sous la forme utile et dissipe le reste, le plus souvent sous forme de chaleur. Son rendement est η = énergie utile ÷ énergie reçue (ou puissance utile ÷ puissance reçue), toujours inférieur à 1.",
                "Lorsque plusieurs convertisseurs se suivent, l'énergie utile de l'un est l'énergie reçue par le suivant : le rendement global est le produit des rendements. Par exemple, une chaîne de trois convertisseurs de rendements 0,90, 0,80 et 0,50 a un rendement global de 0,90 × 0,80 × 0,50 = 0,36. Le rendement global est donc toujours inférieur au plus petit des rendements de la chaîne : c'est le maillon le moins efficace qu'il faut améliorer en priorité.",
              ],
              box: { label: "Formule", text: "Rendement d'un convertisseur : η = E utile ÷ E reçue. Rendement global d'une chaîne : η = η₁ × η₂ × η₃ × ... Unité d'énergie : 1 kWh = 3,6 × 10⁶ J." },
            },
          ],
          keyPoints: [
            "L'électricité est un vecteur d'énergie : on la produit à partir d'autres formes d'énergie.",
            "Atouts : transport rapide sur de longues distances, conversion facile et efficace (moteur électrique : plus de 90 %).",
            "Production sans combustion : hydraulique, éolien (puissance proportionnelle à v³), photovoltaïque, nucléaire.",
            "Production = consommation à chaque instant ; stocker impose de convertir l'électricité.",
            "Stockage : STEP (énergie potentielle, 70 à 80 %), batteries (chimique, environ 90 %), hydrogène (25 à 35 %).",
            "Rendement global d'une chaîne = produit des rendements des convertisseurs.",
          ],
          example: {
            statement: "Une STEP dispose d'un bassin supérieur situé 300 m au-dessus du bassin inférieur. On y pompe 1,0 million de m³ d'eau. Données : masse volumique de l'eau 1 000 kg/m³ ; g = 9,81 N/kg ; rendement du pompage 0,90 ; rendement de la turbine et de l'alternateur réunis 0,88 ; 1 MWh = 3,6 × 10⁹ J. a) Calculer l'énergie potentielle stockée. b) Calculer l'énergie électrique consommée pour le pompage et l'énergie électrique restituée. c) Calculer le rendement global du stockage.",
            solution: [
              "a) Masse d'eau : m = 1,0 × 10⁶ × 1 000 = 1,0 × 10⁹ kg. Énergie stockée : E = m × g × h = 1,0 × 10⁹ × 9,81 × 300 ≈ 2,94 × 10¹² J, soit 2,94 × 10¹² ÷ 3,6 × 10⁹ ≈ 818 MWh.",
              "b) Énergie électrique consommée pour pomper : 818 ÷ 0,90 ≈ 908 MWh (une partie est perdue dans les pompes).",
              "Énergie électrique restituée : 818 × 0,88 ≈ 719 MWh.",
              "c) Rendement global : 719 ÷ 908 ≈ 0,79, ce que l'on retrouve directement par le produit 0,90 × 0,88 = 0,792.",
              "Réponse : la STEP restitue environ 79 % de l'électricité utilisée pour la remplir, soit environ 720 MWh sur 908 MWh.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une centrale à charbon, l'énergie chimique du combustible est convertie en énergie thermique dans la chaudière (rendement 0,90), puis en énergie mécanique dans la turbine (rendement 0,45), puis en énergie électrique dans l'alternateur (rendement 0,98). a) Représenter la chaîne énergétique. b) Calculer le rendement global. c) Quelle énergie chimique faut-il pour produire 1 000 MWh d'électricité ?",
              hint: "Multipliez les trois rendements. Pour c, divisez l'énergie utile par le rendement global.",
              solution: [
                "a) Énergie chimique → chaudière → énergie thermique → turbine → énergie mécanique → alternateur → énergie électrique ; à chaque étape, une partie de l'énergie est perdue sous forme de chaleur.",
                "b) η = 0,90 × 0,45 × 0,98 ≈ 0,397, soit un rendement global d'environ 40 %.",
                "c) Énergie chimique nécessaire : 1 000 ÷ 0,397 ≈ 2 520 MWh. Environ 1 520 MWh sont dissipés sous forme de chaleur, surtout au niveau de la turbine et du circuit de refroidissement.",
              ],
            },
            {
              level: 2,
              statement: "On compare deux voitures qui doivent fournir la même énergie mécanique de 15 kWh aux roues (données simplifiées). Voiture électrique : chargeur (rendement 0,90), batterie (0,95), moteur (0,90). Voiture thermique : moteur à essence de rendement 0,30. a) Calculer le rendement global de la chaîne de la voiture électrique depuis la prise. b) Calculer l'énergie à fournir dans chaque cas. c) La comparaison est-elle complète ? Justifier.",
              hint: "Énergie reçue = énergie utile ÷ rendement global. Pour c, demandez-vous d'où vient l'électricité de la prise.",
              solution: [
                "a) η = 0,90 × 0,95 × 0,90 ≈ 0,77.",
                "b) Voiture électrique : 15 ÷ 0,77 ≈ 19,5 kWh d'électricité prise au réseau. Voiture thermique : 15 ÷ 0,30 = 50 kWh d'énergie chimique de carburant.",
                "La voiture électrique demande environ 2,6 fois moins d'énergie à l'utilisation.",
                "c) Non : il faut aussi tenir compte de la production de l'électricité (son rendement et ses émissions dépendent du mode de production), de la fabrication de la batterie et du véhicule, et du raffinage et du transport du carburant. Seule une analyse sur tout le cycle de vie permet une comparaison complète.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Un quartier équipé de panneaux photovoltaïques produit en milieu de journée un surplus de 100 kWh qu'il veut stocker pour la soirée. Solution A : une batterie de rendement global 0,90. Solution B : une chaîne hydrogène formée d'un électrolyseur (rendement 0,70), d'un stockage sous pression (0,90) et d'une pile à combustible (0,50). 1) Calculer l'énergie restituée le soir par chaque solution. 2) Pour quelle raison choisit-on malgré tout d'étudier l'hydrogène ? 3) La commune envisage aussi une petite éolienne. Le vent moyen passe de 5 m/s sur un premier site à 6 m/s sur un second. Par quel facteur la puissance récupérable est-elle multipliée ? 4) Conclure sur l'intérêt de combiner plusieurs solutions.",
              hint: "Le rendement global de la chaîne hydrogène est le produit de ses trois rendements. Pour 3, la puissance est proportionnelle au cube de la vitesse du vent.",
              solution: [
                "1) Batterie : 100 × 0,90 = 90 kWh. Hydrogène : rendement global 0,70 × 0,90 × 0,50 = 0,315, donc 100 × 0,315 = 31,5 kWh.",
                "La batterie restitue presque trois fois plus d'énergie pour une journée de stockage.",
                "2) L'hydrogène peut être stocké longtemps et en grande quantité, sans perte notable au cours du temps, ce qui permet de reporter une production d'été vers l'hiver ; il peut aussi alimenter des usages difficiles à électrifier directement (industrie, transports lourds). Les batteries conviennent mieux au stockage de quelques heures.",
                "3) Facteur : (6 ÷ 5)³ = 1,2³ ≈ 1,73. Une hausse de 20 % de la vitesse du vent augmente la puissance d'environ 73 %.",
                "4) Aucune solution n'est parfaite : la batterie est efficace mais pour des durées courtes, l'hydrogène a un rendement faible mais permet un stockage long, et l'éolienne produit aussi la nuit. Combiner sources et stockages permet de mieux faire coïncider production et consommation.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque moyen de stockage à la forme d'énergie stockée.",
            pairs: [
              { left: "STEP", right: "Énergie potentielle de pesanteur de l'eau remontée" },
              { left: "Batterie lithium-ion", right: "Énergie chimique de réactions réversibles" },
              { left: "Volant d'inertie", right: "Énergie cinétique d'une masse en rotation" },
              { left: "Hydrogène", right: "Énergie chimique d'un gaz produit par électrolyse" },
              { left: "Condensateur", right: "Énergie électrique stockée directement, en petite quantité" },
              { left: "Air comprimé", right: "Énergie stockée par la pression d'un gaz" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi dit-on que l'électricité est un vecteur d'énergie ?",
              options: ["Elle est produite à partir d'une autre énergie", "Elle se trouve à l'état naturel dans des gisements souterrains", "Elle ne peut être convertie qu'en chaleur"],
              answer: 0,
              why: "L'électricité ne s'extrait pas de la nature : on la produit à partir d'énergie mécanique, lumineuse ou chimique, puis on la transporte jusqu'à l'utilisateur.",
            },
            {
              q: "Quel est le rendement global d'une chaîne de trois convertisseurs de rendements 0,9 ; 0,8 et 0,5 ?",
              options: ["2,2", "0,36", "0,73", "0,5"],
              answer: 1,
              why: "Le rendement global est le produit des rendements : 0,9 × 0,8 × 0,5 = 0,36.",
            },
            {
              q: "Sous quelle forme une STEP stocke-t-elle l'énergie ?",
              options: ["Énergie chimique dans de grandes batteries", "Énergie cinétique de volants d'inertie", "Énergie thermique de sels fondus", "Énergie potentielle de l'eau"],
              answer: 3,
              why: "Une STEP remonte de l'eau dans un bassin supérieur : l'énergie est stockée sous forme d'énergie potentielle de pesanteur, puis restituée par une turbine.",
            },
            {
              q: "Quelle énergie une éolienne convertit-elle en électricité ?",
              options: ["L'énergie thermique de l'air chaud", "L'énergie potentielle des nuages", "L'énergie cinétique du vent"],
              answer: 2,
              why: "Les pales récupèrent une partie de l'énergie cinétique de l'air en mouvement, puis un alternateur la convertit en énergie électrique.",
            },
            {
              q: "Pourquoi le stockage de l'électricité est-il un enjeu majeur ?",
              options: ["Parce que l'électricité perd toute sa valeur si elle n'est pas consommée dans l'année", "Pour équilibrer à chaque instant production et consommation", "Parce que les centrales ne fonctionnent que la nuit, quand la demande est faible"],
              answer: 1,
              why: "Sur un réseau, la production doit égaler la consommation à chaque instant ; stocker permet de décaler une production variable vers les moments de forte demande.",
            },
          ],
          trap: "Additionner les rendements d'une chaîne ou prendre le plus petit d'entre eux comme rendement global : il faut les multiplier, et le résultat est toujours inférieur au plus petit rendement de la chaîne.",
          method: "Dessinez la chaîne énergétique avant tout calcul : une case par convertisseur, une flèche par forme d'énergie, et une flèche de pertes sous chaque case ; écrivez le rendement sur chaque case, puis multipliez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'transport-electricite',
          title: 'Optimiser le transport de l\'électricité',
          minutes: 35,
          objectives: [
            "Calculer les pertes par effet Joule dans une ligne électrique et expliquer l'intérêt de la haute tension.",
            "Expliquer le rôle des transformateurs dans le réseau électrique.",
            "Modéliser un réseau de distribution d'électricité par un graphe orienté et appliquer la loi des nœuds.",
            "Formuler et résoudre un problème simple d'optimisation des pertes sous contraintes.",
          ],
          course: [
            {
              heading: "L'effet Joule, source de pertes",
              paragraphs: [
                "Un câble électrique n'est pas un conducteur parfait : il possède une résistance R, qui dépend de sa longueur L, de sa section S et du matériau qui le constitue, selon R = ρ × L ÷ S, où ρ est la résistivité du matériau (en Ω·m). Une ligne longue et fine est donc plus résistante qu'une ligne courte et épaisse. Les lignes aériennes sont le plus souvent en aluminium, léger et bon conducteur.",
                "Lorsqu'un courant d'intensité I traverse une résistance R, une puissance P = R × I² est dissipée sous forme de chaleur : c'est l'effet Joule. Dans un radiateur, c'est l'effet recherché ; dans une ligne électrique, c'est une perte. Comme cette puissance dépend du carré de l'intensité, doubler l'intensité multiplie les pertes par 4. L'énergie perdue pendant une durée Δt vaut E = R × I² × Δt.",
              ],
              box: { label: "Formule", text: "Résistance d'un câble : R = ρ × L ÷ S. Puissance perdue par effet Joule : P = R × I² (W, Ω, A). Énergie perdue : E = R × I² × Δt." },
            },
            {
              heading: "Pourquoi transporter l'électricité sous haute tension",
              paragraphs: [
                "Une ligne doit transporter une puissance P donnée. En première approximation, P = U × I, donc I = P ÷ U : plus la tension U est élevée, plus l'intensité nécessaire est faible. Les pertes valent alors R × I² = R × P² ÷ U². À puissance transportée égale, multiplier la tension par 10 divise l'intensité par 10 et les pertes par 100.",
                "C'est pourquoi le réseau français de transport fonctionne en très haute tension, jusqu'à 400 000 V (400 kV), et que la tension est abaissée par étapes près des lieux de consommation : 20 000 V dans les réseaux de distribution, puis 230 V dans les logements. Les pertes du réseau de transport ne représentent alors que quelques pour cent de l'électricité transportée. La tension ne peut cependant pas être augmentée sans limite : il faut des pylônes plus hauts, des isolants plus performants et des distances de sécurité plus grandes.",
                "Les changements de tension sont réalisés par des transformateurs, dont le rendement est très élevé. Ils ne fonctionnent qu'en courant alternatif : c'est l'une des raisons pour lesquelles le courant alternatif s'est imposé à la fin du XIXe siècle pour les réseaux électriques.",
              ],
              box: { label: "Propriété", text: "À puissance transportée P fixée, les pertes par effet Joule valent R × P² ÷ U² : elles sont inversement proportionnelles au carré de la tension. Multiplier U par k divise les pertes par k²." },
            },
            {
              heading: "Modéliser un réseau par un graphe orienté",
              paragraphs: [
                "Un réseau électrique peut être modélisé par un graphe orienté. Ses sommets représentent les sources (centrales de production), les cibles (villes ou zones de consommation) et des nœuds intermédiaires (postes de transformation ou d'interconnexion). Ses arcs, orientés dans le sens de circulation de l'énergie, représentent les lignes. Sur chaque arc, on indique la résistance de la ligne et l'intensité maximale qu'elle peut supporter.",
                "En chaque nœud intermédiaire s'applique la loi des nœuds, conséquence de la conservation de la charge électrique : la somme des intensités des courants qui arrivent est égale à la somme des intensités des courants qui repartent. Les sources ont aussi une limite : chacune ne peut fournir qu'une intensité maximale, liée à sa puissance. Les cibles imposent enfin l'intensité dont elles ont besoin.",
              ],
              box: { label: "Règle", text: "Loi des nœuds : en tout nœud du réseau, la somme des intensités entrantes est égale à la somme des intensités sortantes." },
            },
            {
              heading: "Un problème d'optimisation sous contraintes",
              paragraphs: [
                "Optimiser le transport, c'est chercher la répartition des intensités dans les lignes qui rend minimales les pertes totales par effet Joule, P = R₁ × I₁² + R₂ × I₂² + ..., tout en respectant les contraintes : loi des nœuds, besoins des cibles, intensité maximale des lignes et des sources. La fonction à rendre minimale s'appelle la fonction coût.",
                "Exemple : une ville a besoin de 100 A (valeurs fictives et simplifiées) et peut être alimentée par deux sources reliées par des lignes de résistances R₁ = 2 Ω et R₂ = 3 Ω. Avec I₁ + I₂ = 100, les pertes valent P = 2 × I₁² + 3 × (100 - I₁)² = 5 × I₁² - 600 × I₁ + 30 000. Cette fonction du second degré est minimale pour I₁ = 600 ÷ (2 × 5) = 60 A, donc I₂ = 40 A, et les pertes valent alors 12 000 W. Alimenter la ville par la seule source 1 coûterait 20 000 W de pertes.",
                "Dans les cas plus complexes, on teste méthodiquement des répartitions possibles à l'aide d'un tableur ou d'un programme, et l'on retient celle qui respecte les contraintes avec les pertes les plus faibles. Les gestionnaires de réseau résolvent ainsi en permanence de grands problèmes d'optimisation.",
              ],
            },
          ],
          keyPoints: [
            "Résistance d'un câble : R = ρ × L ÷ S ; pertes par effet Joule : P = R × I².",
            "À puissance P fixée, I = P ÷ U et les pertes valent R × P² ÷ U² : elles diminuent avec le carré de la tension.",
            "Réseau français : transport jusqu'à 400 kV, distribution à 20 kV, logements à 230 V.",
            "Les transformateurs changent la tension et ne fonctionnent qu'en courant alternatif.",
            "Graphe orienté : sommets (sources, cibles, nœuds), arcs (lignes) ; loi des nœuds : entrées = sorties.",
            "Optimiser : rendre minimale la somme des R × I² en respectant les contraintes du réseau.",
          ],
          example: {
            statement: "Une ville a besoin d'une intensité de 100 A (données fictives). Elle peut être alimentée par la source S₁, par une ligne de résistance R₁ = 2 Ω, et par la source S₂, par une ligne de résistance R₂ = 3 Ω. a) Modéliser la situation par un graphe orienté et écrire la loi des nœuds. b) Exprimer les pertes totales en fonction de l'intensité I₁ fournie par S₁. c) Déterminer la répartition qui rend les pertes minimales et la comparer à une alimentation par S₁ seule.",
            solution: [
              "a) Sommets : S₁, S₂ (sources) et V (ville, cible). Arcs : S₁ → V et S₂ → V. Loi des nœuds en V : I₁ + I₂ = 100, donc I₂ = 100 - I₁.",
              "b) P = R₁ × I₁² + R₂ × I₂² = 2 × I₁² + 3 × (100 - I₁)². En développant : P = 2I₁² + 3 × (10 000 - 200I₁ + I₁²) = 5I₁² - 600I₁ + 30 000.",
              "c) C'est un polynôme du second degré de coefficient positif : il est minimal pour I₁ = -b ÷ (2a) = 600 ÷ 10 = 60 A. Alors I₂ = 40 A.",
              "Pertes minimales : 2 × 60² + 3 × 40² = 7 200 + 4 800 = 12 000 W. Avec S₁ seule : 2 × 100² = 20 000 W.",
              "Réponse : on fait fournir 60 A par S₁ et 40 A par S₂ ; les pertes sont de 12 000 W, soit 40 % de moins qu'avec la seule source S₁. On remarque que, à l'optimum, R₁ × I₁ = R₂ × I₂ (120 V dans les deux cas).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une ligne de résistance R = 10 Ω doit transporter une puissance P = 100 MW. On admet que P = U × I. a) Calculer l'intensité et les pertes par effet Joule si la tension vaut 400 kV. b) Même question pour une tension de 100 kV. c) Exprimer les pertes en pourcentage de la puissance transportée dans chaque cas et conclure.",
              hint: "Calculez d'abord I = P ÷ U en unités du système international (W et V), puis P = R × I².",
              solution: [
                "a) I = 100 × 10⁶ ÷ 400 × 10³ = 250 A. Pertes : 10 × 250² = 625 000 W, soit 0,625 MW.",
                "b) I = 100 × 10⁶ ÷ 100 × 10³ = 1 000 A. Pertes : 10 × 1 000² = 10 000 000 W, soit 10 MW.",
                "c) À 400 kV : 0,625 ÷ 100 = 0,625 % de pertes. À 100 kV : 10 ÷ 100 = 10 % de pertes.",
                "Conclusion : diviser la tension par 4 multiplie les pertes par 4² = 16. Transporter sous très haute tension réduit fortement les pertes.",
              ],
            },
            {
              level: 2,
              statement: "Une ligne aérienne en aluminium mesure 100 km et ses câbles ont une section de 500 mm². Résistivité de l'aluminium : ρ = 2,8 × 10⁻⁸ Ω·m. a) Calculer la résistance de la ligne. b) Calculer la puissance perdue lorsqu'elle est parcourue par un courant de 500 A, puis l'énergie perdue en 24 heures, en MWh. c) Quel serait l'effet d'un doublement de la section ? Pourquoi ne choisit-on pas des câbles très épais ?",
              hint: "Convertissez la longueur en mètres et la section en m² (1 mm² = 10⁻⁶ m²) avant d'appliquer R = ρ × L ÷ S.",
              solution: [
                "a) L = 1,0 × 10⁵ m ; S = 500 × 10⁻⁶ = 5,0 × 10⁻⁴ m². R = 2,8 × 10⁻⁸ × 1,0 × 10⁵ ÷ 5,0 × 10⁻⁴ = 5,6 Ω.",
                "b) P = R × I² = 5,6 × 500² = 1 400 000 W, soit 1,4 MW. En 24 h : E = 1,4 × 24 = 33,6 MWh.",
                "c) Doubler la section divise la résistance par 2 (2,8 Ω), donc les pertes aussi (0,7 MW). Mais des câbles plus épais sont plus lourds et plus coûteux, et exigent des pylônes plus robustes : on cherche un compromis entre pertes et coût.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives et simplifiées). Une ville V a besoin d'une intensité de 150 A. Elle est reliée à la source S₁ par une ligne de résistance R₁ = 1 Ω et à la source S₂ par une ligne de résistance R₂ = 4 Ω. 1) Représenter le réseau par un graphe orienté et écrire la loi des nœuds en V. 2) Montrer que les pertes totales s'écrivent P = 5I₁² - 1 200I₁ + 90 000, où I₁ est l'intensité fournie par S₁. 3) Déterminer la répartition optimale et les pertes correspondantes. 4) La source S₁ ne peut en réalité fournir que 100 A au maximum. Déterminer la nouvelle répartition optimale et les pertes correspondantes, puis comparer avec une alimentation par S₂ seule.",
              hint: "Pour 4, regardez si la valeur optimale trouvée en 3 respecte la contrainte ; sinon, utilisez le sens de variation de P sur l'intervalle autorisé.",
              solution: [
                "1) Sommets : S₁, S₂, V. Arcs : S₁ → V (1 Ω) et S₂ → V (4 Ω). Loi des nœuds en V : I₁ + I₂ = 150.",
                "2) P = 1 × I₁² + 4 × (150 - I₁)² = I₁² + 4 × (22 500 - 300I₁ + I₁²) = 5I₁² - 1 200I₁ + 90 000.",
                "3) Minimum pour I₁ = 1 200 ÷ (2 × 5) = 120 A, donc I₂ = 30 A. Pertes : 120² + 4 × 30² = 14 400 + 3 600 = 18 000 W.",
                "4) La contrainte impose 0 ≤ I₁ ≤ 100. Or P est décroissante pour I₁ ≤ 120 : sur cet intervalle, le minimum est atteint pour I₁ = 100 A, donc I₂ = 50 A. Pertes : 100² + 4 × 50² = 10 000 + 10 000 = 20 000 W.",
                "Avec S₂ seule : 4 × 150² = 90 000 W. La répartition contrainte (100 A et 50 A) produit 20 000 W de pertes, un peu plus que l'optimum sans contrainte (18 000 W), mais 4,5 fois moins qu'une alimentation par S₂ seule.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur le transport de l'électricité.",
            statements: [
              { text: "Les pertes par effet Joule sont proportionnelles au carré de l'intensité.", true: true, why: "P = R × I² : doubler l'intensité multiplie les pertes par 4." },
              { text: "À puissance égale, augmenter la tension augmente les pertes en ligne.", true: false, why: "Une tension plus élevée réduit l'intensité, donc les pertes, qui varient comme 1 ÷ U²." },
              { text: "Doubler la tension divise les pertes par 2.", true: false, why: "Les pertes sont divisées par 2² = 4." },
              { text: "Un transformateur fonctionne avec du courant continu.", true: false, why: "Il ne fonctionne qu'en courant alternatif, ce qui a favorisé ce type de courant pour les réseaux." },
              { text: "En un nœud du réseau, l'intensité qui arrive est égale à celle qui repart.", true: true, why: "C'est la loi des nœuds, conséquence de la conservation de la charge." },
              { text: "Une ligne plus longue a une résistance plus grande, à section égale.", true: true, why: "R = ρ × L ÷ S : la résistance est proportionnelle à la longueur." },
              { text: "La répartition optimale consiste toujours à n'utiliser que la ligne la moins résistante.", true: false, why: "Partager l'intensité entre plusieurs lignes réduit la somme des R × I² ; l'optimum utilise généralement toutes les lignes." },
            ],
          },
          quiz: [
            {
              q: "Comment s'exprime la puissance perdue par effet Joule dans une ligne de résistance R parcourue par un courant d'intensité I ?",
              options: ["P = R × I", "P = R × I²", "P = R ÷ I²", "P = U ÷ R"],
              answer: 1,
              why: "La puissance dissipée par effet Joule vaut P = R × I² : elle croît avec le carré de l'intensité.",
            },
            {
              q: "À puissance transportée égale, on multiplie la tension par 10. Les pertes par effet Joule sont :",
              options: ["multipliées par 10", "divisées par 10", "inchangées", "divisées par 100"],
              answer: 3,
              why: "L'intensité est divisée par 10 ; les pertes, proportionnelles à I², sont divisées par 10² = 100.",
            },
            {
              q: "Pourquoi les réseaux électriques utilisent-ils le courant alternatif ?",
              options: ["Pour pouvoir changer la tension avec des transformateurs", "Parce qu'il ne provoque aucune perte par effet Joule dans les câbles", "Parce que les appareils ménagers ne peuvent fonctionner qu'avec lui"],
              answer: 0,
              why: "Les transformateurs, qui élèvent la tension pour le transport puis l'abaissent pour la distribution, ne fonctionnent qu'en courant alternatif.",
            },
            {
              q: "Dans un graphe modélisant un réseau électrique, que traduit la loi des nœuds ?",
              options: ["La tension électrique est la même en tout point du réseau", "L'intensité qui entre dans un nœud en ressort", "Chaque ligne transporte la même intensité que sa voisine"],
              answer: 1,
              why: "La charge électrique se conserve : en chaque nœud, la somme des intensités entrantes est égale à la somme des intensités sortantes.",
            },
            {
              q: "Quelle tension est utilisée en France pour le transport de l'électricité sur de longues distances ?",
              options: ["230 V", "20 000 V", "400 000 V", "1 million de volts"],
              answer: 2,
              why: "Les grandes lignes du réseau de transport fonctionnent jusqu'à 400 kV ; la tension est abaissée à 20 kV pour la distribution, puis à 230 V pour les logements.",
            },
          ],
          trap: "Oublier d'élever l'intensité au carré dans P = R × I², ou calculer l'intensité avec des kilovolts et des mégawatts mélangés : convertissez toujours en volts et en watts avant de calculer.",
          method: "Pour un problème d'optimisation de réseau, procédez toujours dans le même ordre : dessiner le graphe, écrire la loi des nœuds, exprimer les pertes en fonction d'une seule intensité, chercher le minimum, puis vérifier que la solution respecte toutes les contraintes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'choix-energetiques',
          title: 'Choix énergétiques et impacts sur les sociétés',
          minutes: 30,
          objectives: [
            "Identifier les critères qui interviennent dans un choix énergétique : ressources, coûts, émissions, risques, acceptabilité.",
            "Comparer les émissions de différents modes de production d'électricité à l'aide d'analyses de cycle de vie.",
            "Calculer un facteur de charge et distinguer sources pilotables et sources intermittentes.",
            "Argumenter un choix énergétique en tenant compte de ses impacts sur les sociétés et l'environnement.",
          ],
          course: [
            {
              heading: "Les critères d'un choix énergétique",
              paragraphs: [
                "Choisir une manière de produire de l'énergie, c'est comparer des solutions selon plusieurs critères. La disponibilité de la ressource : stock limité (combustibles fossiles, uranium) ou flux renouvelable (soleil, vent, eau). Le coût : investissement de construction, coût d'exploitation, coût du combustible, démantèlement. Les impacts environnementaux : émissions de gaz à effet de serre, pollution de l'air, occupation des sols, consommation d'eau, effets sur la biodiversité et les paysages, déchets.",
                "D'autres critères concernent directement les sociétés : risques d'accident, sécurité d'approvisionnement et dépendance envers d'autres pays, besoins en métaux (cuivre, lithium, cobalt...), emplois créés, acceptabilité par les populations. Aucune source d'énergie ne l'emporte sur tous les critères : chaque choix est un compromis, qui relève d'une décision politique et citoyenne éclairée par les données scientifiques.",
              ],
            },
            {
              heading: "Comparer les émissions sur tout le cycle de vie",
              paragraphs: [
                "Une éolienne ou une centrale nucléaire n'émettent pas de CO₂ en fonctionnement, mais leur construction, l'extraction des matériaux et du combustible, leur maintenance et leur démantèlement en émettent. L'analyse de cycle de vie (ACV) évalue l'ensemble des impacts d'un produit ou d'une installation, de l'extraction des matières premières jusqu'au traitement des déchets. Rapportées à l'énergie produite, ces émissions s'expriment en grammes d'équivalent CO₂ par kilowattheure (gCO₂e/kWh).",
                "Selon les valeurs médianes rassemblées par le GIEC (2014), une centrale à charbon émet environ 820 gCO₂e/kWh et une centrale à gaz à cycle combiné environ 490, contre environ 48 pour le photovoltaïque au sol, 24 pour l'hydraulique, 12 pour le nucléaire et 11 pour l'éolien terrestre. Les sources bas carbone émettent donc, sur leur cycle de vie, de l'ordre de 15 à 75 fois moins que le charbon.",
              ],
              box: { label: "Repère", text: "Émissions sur le cycle de vie (valeurs médianes, GIEC 2014), en gCO₂e/kWh : charbon 820 ; gaz (cycle combiné) 490 ; photovoltaïque au sol 48 ; hydraulique 24 ; nucléaire 12 ; éolien terrestre 11." },
            },
            {
              heading: "Puissance, énergie et intermittence",
              paragraphs: [
                "Il ne faut pas confondre la puissance installée d'une centrale (en MW), qui est la puissance maximale qu'elle peut fournir, et l'énergie qu'elle produit réellement sur une année (en MWh). Leur rapport définit le facteur de charge : facteur de charge = énergie produite ÷ (puissance installée × durée). Une année compte 8 760 heures. Par exemple, une éolienne de 3 MW qui produit 6 570 MWh en un an a un facteur de charge de 6 570 ÷ (3 × 8 760) = 0,25, soit 25 %.",
                "Les sources éoliennes et solaires sont dites intermittentes ou variables : leur production dépend de la météo et, pour le solaire, de l'alternance du jour et de la nuit. Les sources pilotables, au contraire, peuvent produire à la demande : centrales hydrauliques de barrage, centrales à gaz, et, dans une certaine mesure, centrales nucléaires. Comme la production doit égaler la consommation à chaque instant, un système électrique qui intègre beaucoup de sources variables a besoin de flexibilité : stockage, interconnexions avec les pays voisins, sources pilotables et pilotage de la consommation.",
              ],
              box: { label: "Formule", text: "Facteur de charge = énergie produite sur une période ÷ (puissance installée × durée de la période). Sur un an : durée = 8 760 h." },
            },
            {
              heading: "Des choix qui engagent les sociétés",
              paragraphs: [
                "Le mix électrique d'un pays désigne la répartition de sa production d'électricité entre les différentes sources. Il dépend de son histoire et de ses ressources : en France, environ deux tiers de l'électricité est d'origine nucléaire, complétée par l'hydraulique, l'éolien, le solaire et un peu de gaz, ce qui donne une électricité peu carbonée. D'autres pays produisent encore une grande partie de leur électricité à partir du charbon.",
                "Les choix énergétiques ont des conséquences durables, car une centrale fonctionne plusieurs décennies : ils engagent les générations futures (gestion des déchets radioactifs, dérèglement climatique), l'aménagement des territoires (barrages, lignes, parcs éoliens), l'économie et la géopolitique (dépendance au pétrole, au gaz ou aux métaux critiques). Ils posent aussi une question de justice : plusieurs centaines de millions de personnes dans le monde n'ont toujours pas accès à l'électricité. La sobriété, qui consiste à réduire les besoins, complète ces choix de production.",
              ],
            },
          ],
          keyPoints: [
            "Critères : ressource, coût, émissions, autres impacts environnementaux, risques, dépendance, acceptabilité.",
            "ACV : émissions de l'extraction au démantèlement, en gCO₂e/kWh.",
            "Médianes GIEC (2014) : charbon 820, gaz 490, photovoltaïque 48, hydraulique 24, nucléaire 12, éolien terrestre 11 gCO₂e/kWh.",
            "Facteur de charge = énergie produite ÷ (puissance installée × durée) ; une année = 8 760 h.",
            "Sources intermittentes (éolien, solaire) et pilotables (barrages, gaz, nucléaire) ; besoin de flexibilité.",
            "Aucune source n'est parfaite : un choix énergétique est un compromis politique éclairé par la science.",
          ],
          example: {
            statement: "Une éolienne de puissance installée 3 MW a produit 6 570 MWh au cours d'une année (données fictives). a) Calculer l'énergie qu'elle aurait produite en fonctionnant toute l'année à pleine puissance. b) En déduire son facteur de charge. c) Expliquer pourquoi ce facteur est inférieur à 100 %.",
            solution: [
              "a) Une année compte 365 × 24 = 8 760 h. Énergie à pleine puissance : 3 × 8 760 = 26 280 MWh.",
              "b) Facteur de charge : 6 570 ÷ 26 280 = 0,25, soit 25 %.",
              "c) L'éolienne ne tourne pas à pleine puissance en permanence : le vent est parfois trop faible (la puissance varie comme le cube de la vitesse du vent), parfois trop fort (l'éolienne est alors arrêtée par sécurité), et il faut des arrêts de maintenance.",
              "Réponse : le facteur de charge vaut 25 % ; l'éolienne produit en un an autant que si elle fonctionnait à pleine puissance pendant un quart du temps.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À l'aide des valeurs médianes d'émissions sur le cycle de vie (GIEC, 2014) : charbon 820 gCO₂e/kWh ; gaz à cycle combiné 490 ; nucléaire 12 ; éolien terrestre 11, calculer la masse d'équivalent CO₂ émise pour produire 1 TWh d'électricité avec chacune de ces sources. Donnée : 1 TWh = 10⁹ kWh.",
              hint: "Multipliez l'émission par kWh par le nombre de kWh, puis convertissez les grammes en tonnes (1 t = 10⁶ g).",
              solution: [
                "Charbon : 820 × 10⁹ = 8,2 × 10¹¹ g, soit 8,2 × 10⁵ t, c'est-à-dire 820 000 t de CO₂e.",
                "Gaz : 490 × 10⁹ g = 490 000 t de CO₂e.",
                "Nucléaire : 12 × 10⁹ g = 12 000 t de CO₂e. Éolien terrestre : 11 × 10⁹ g = 11 000 t de CO₂e.",
                "Réponse : pour la même énergie, le charbon émet environ 75 fois plus que l'éolien terrestre (820 ÷ 11 ≈ 75) et le gaz environ 40 fois plus que le nucléaire (490 ÷ 12 ≈ 41).",
              ],
            },
            {
              level: 2,
              statement: "Un réacteur nucléaire de 1 300 MW fonctionne avec un facteur de charge de 75 %. On envisage de produire la même énergie annuelle avec des éoliennes de 3 MW dont le facteur de charge vaut 25 % (données simplifiées). a) Calculer l'énergie produite en un an par le réacteur. b) Calculer l'énergie produite en un an par une éolienne. c) Combien d'éoliennes faut-il ? d) Les deux solutions sont-elles équivalentes pour le système électrique ?",
              hint: "Énergie annuelle = puissance installée × 8 760 h × facteur de charge.",
              solution: [
                "a) Réacteur : 1 300 × 8 760 × 0,75 = 8 541 000 MWh, soit environ 8,5 TWh.",
                "b) Éolienne : 3 × 8 760 × 0,25 = 6 570 MWh.",
                "c) Nombre d'éoliennes : 8 541 000 ÷ 6 570 = 1 300 éoliennes.",
                "d) Non : elles produisent la même énergie sur l'année, mais pas au même moment. La production éolienne varie avec le vent et peut être faible pendant plusieurs jours ; il faut donc la compléter par du stockage, des sources pilotables ou des échanges avec les pays voisins. Les deux solutions diffèrent aussi par l'occupation de l'espace, les matériaux utilisés, les déchets et les risques.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Une île consomme 50 GWh d'électricité par an, entièrement produits par des groupes électrogènes au fioul qui émettent 700 gCO₂e/kWh. 1) Calculer les émissions annuelles actuelles, en tonnes. 2) On veut produire 40 % de l'électricité avec une centrale photovoltaïque de facteur de charge 15 %. Calculer l'énergie à produire par la centrale et sa puissance installée. 3) Avec des émissions de 48 gCO₂e/kWh pour le photovoltaïque, calculer les nouvelles émissions annuelles et leur baisse en pourcentage. 4) Citer deux difficultés posées par ce projet et une solution pour chacune.",
              hint: "Pour la puissance installée, utilisez la définition du facteur de charge : P = énergie ÷ (8 760 h × facteur de charge). Convertissez les GWh en kWh pour les émissions.",
              solution: [
                "1) 50 GWh = 50 × 10⁶ kWh. Émissions : 50 × 10⁶ × 700 = 3,5 × 10¹⁰ g, soit 35 000 t de CO₂e par an.",
                "2) Énergie photovoltaïque : 0,40 × 50 = 20 GWh = 20 000 MWh. Puissance installée : 20 000 ÷ (8 760 × 0,15) ≈ 15,2 MW.",
                "3) Fioul : 30 GWh, soit 30 × 10⁶ × 700 g = 21 000 t. Photovoltaïque : 20 × 10⁶ × 48 g = 960 t. Total : 21 960 t de CO₂e.",
                "Baisse : (35 000 - 21 960) ÷ 35 000 ≈ 0,37, soit environ 37 %.",
                "4) Première difficulté : la production solaire est nulle la nuit et variable ; solution : des batteries pour décaler la production vers le soir, en gardant les groupes au fioul comme appoint pilotable. Seconde difficulté : l'occupation des sols sur une île où l'espace est rare ; solution : installer les panneaux sur les toits, les parkings ou des terrains déjà artificialisés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Facteur de charge", right: "Énergie produite rapportée à la production à pleine puissance" },
              { left: "Source pilotable", right: "Source dont on peut régler la production à la demande" },
              { left: "Source intermittente", right: "Source dont la production dépend de la météo" },
              { left: "Analyse de cycle de vie", right: "Bilan des impacts de l'extraction au démantèlement" },
              { left: "Mix électrique", right: "Répartition de la production d'électricité entre les sources" },
              { left: "Sobriété", right: "Réduction des besoins en énergie par des choix d'usage" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une analyse de cycle de vie ?",
              options: ["La mesure des émissions d'une centrale uniquement pendant son fonctionnement normal", "Le bilan des impacts d'un produit, de sa fabrication à son élimination", "L'étude de la durée de vie d'une centrale avant son démantèlement"],
              answer: 1,
              why: "L'ACV prend en compte toutes les étapes : extraction des matières premières, fabrication, transport, utilisation, démantèlement et traitement des déchets.",
            },
            {
              q: "Une éolienne de 2 MW produit 4 380 MWh en un an. Quel est son facteur de charge ?",
              options: ["50 %", "2 %", "100 %", "25 %"],
              answer: 3,
              why: "Facteur de charge = 4 380 ÷ (2 × 8 760) = 4 380 ÷ 17 520 = 0,25, soit 25 %.",
            },
            {
              q: "Laquelle de ces sources d'électricité est pilotable ?",
              options: ["Un barrage hydraulique", "Une éolienne terrestre", "Un parc photovoltaïque sans stockage"],
              answer: 0,
              why: "On peut ouvrir ou fermer les vannes d'un barrage selon la demande. L'éolien et le solaire dépendent de la météo.",
            },
            {
              q: "Selon les valeurs médianes du GIEC (2014), laquelle de ces sources émet le plus de CO₂e par kWh sur son cycle de vie ?",
              options: ["Le nucléaire", "L'éolien", "Le gaz naturel", "Le photovoltaïque"],
              answer: 2,
              why: "Une centrale à gaz à cycle combiné émet environ 490 gCO₂e/kWh, contre 48 pour le photovoltaïque, 12 pour le nucléaire et 11 pour l'éolien terrestre.",
            },
            {
              q: "Pourquoi n'existe-t-il pas de source d'énergie parfaite ?",
              options: ["Parce que toutes les sources émettent autant de CO₂ sur leur cycle de vie", "Chaque source présente des inconvénients", "Parce que les sources renouvelables sont interdites dans de nombreux pays"],
              answer: 1,
              why: "Chaque source a ses limites (émissions, déchets, intermittence, coût, occupation des sols, risques) : un choix énergétique est toujours un compromis entre critères.",
            },
          ],
          trap: "Confondre puissance installée et énergie produite : 1 300 MW d'éoliennes ne produisent pas autant d'énergie que 1 300 MW nucléaires, car leurs facteurs de charge sont très différents.",
          method: "Pour argumenter un choix énergétique, construisez un tableau à double entrée (solutions en lignes, critères en colonnes), remplissez-le avec des données chiffrées et sourcées, puis concluez en hiérarchisant les critères selon le contexte étudié.",
        },
      ],
    },
    /* ==================================================================== */
    /* BIODIVERSITÉ ET ÉVOLUTION                                              */
    /* ==================================================================== */
    {
      id: 'histoire-du-vivant',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'biodiversite',
          title: 'La biodiversité et son évolution',
          minutes: 35,
          objectives: [
            "Décrire la biodiversité à ses différentes échelles et ses variations au cours du temps.",
            "Estimer l'effectif d'une population par la méthode de capture-marquage-recapture, avec un intervalle de confiance.",
            "Calculer des fréquences alléliques et génotypiques et utiliser le modèle de Hardy-Weinberg.",
            "Identifier les forces évolutives (mutations, sélection naturelle, dérive génétique, migrations) et les effets des activités humaines.",
          ],
          course: [
            {
              heading: "La biodiversité, à plusieurs échelles et en perpétuel changement",
              paragraphs: [
                "La biodiversité désigne la diversité du vivant à trois échelles : la diversité des écosystèmes (forêts, récifs coralliens, prairies...), la diversité des espèces qui les peuplent, et la diversité génétique, c'est-à-dire la variété des allèles des gènes au sein d'une même espèce. Environ 2 millions d'espèces ont été décrites, mais le nombre réel est bien plus grand : une estimation souvent citée, publiée en 2011, avance environ 8,7 millions d'espèces eucaryotes.",
                "La biodiversité actuelle n'est qu'une étape de l'histoire du vivant. Des espèces apparaissent et disparaissent en permanence. Les fossiles révèlent aussi cinq grandes crises d'extinction, dont celle de la fin du Permien (il y a environ 252 millions d'années), la plus importante, et celle de la fin du Crétacé (il y a 66 millions d'années), qui a vu disparaître les dinosaures non aviens. Après chaque crise, de nouveaux groupes se sont diversifiés.",
                "Aujourd'hui, la biodiversité s'érode à un rythme rapide. Selon le rapport de l'IPBES (2019), environ un million d'espèces animales et végétales sont menacées d'extinction. Les causes principales sont, dans l'ordre, le changement d'usage des terres et des mers (destruction et fragmentation des habitats), l'exploitation directe des organismes (surpêche, chasse), le changement climatique, les pollutions et les espèces exotiques envahissantes.",
              ],
            },
            {
              heading: "Estimer un effectif : la capture-marquage-recapture",
              paragraphs: [
                "On ne peut presque jamais compter tous les individus d'une population : on l'estime à partir d'échantillons. Dans la méthode de capture-marquage-recapture (CMR), on capture n₁ individus, on les marque sans leur nuire, puis on les relâche. Quelque temps plus tard, on capture un second échantillon de n₂ individus, parmi lesquels m sont marqués. On suppose que la proportion d'individus marqués dans cet échantillon est la même que dans toute la population : m ÷ n₂ = n₁ ÷ N, d'où N = n₁ × n₂ ÷ m.",
                "Cette estimation suppose que la population est fermée (pas de naissances, de décès ni de migrations entre les deux captures), que les marques ne se perdent pas et ne modifient pas la survie, et que les individus marqués se mélangent au hasard avec les autres. Comme le résultat dépend de l'échantillon, on l'accompagne d'un intervalle de confiance. Si f = m ÷ n₂ est la proportion observée, la proportion réelle d'individus marqués se trouve, avec un niveau de confiance de 95 %, dans l'intervalle [f - 1 ÷ √n₂ ; f + 1 ÷ √n₂] (formule valable pour n₂ ≥ 25 et 0,2 ≤ f ≤ 0,8). On en déduit un encadrement de N.",
              ],
              box: { label: "Formule", text: "CMR : N ≈ n₁ × n₂ ÷ m. Intervalle de confiance à 95 % de la proportion marquée : [f - 1 ÷ √n₂ ; f + 1 ÷ √n₂], avec f = m ÷ n₂. Comme N = n₁ ÷ p, N est compris entre n₁ ÷ (f + 1 ÷ √n₂) et n₁ ÷ (f - 1 ÷ √n₂)." },
            },
            {
              heading: "Le modèle de Hardy-Weinberg",
              paragraphs: [
                "Considérons un gène possédant deux allèles, A et a, de fréquences p et q dans une population, avec p + q = 1. Les individus peuvent être de génotype AA, Aa ou aa. Dans un modèle probabiliste où chaque descendant reçoit au hasard un allèle de chacun de ses parents, la probabilité d'être AA vaut p × p = p², celle d'être aa vaut q², et celle d'être Aa vaut 2pq (l'allèle A peut venir du père ou de la mère). On vérifie que p² + 2pq + q² = (p + q)² = 1.",
                "Le modèle de Hardy-Weinberg (1908) établit que, sous certaines conditions, les fréquences des allèles et des génotypes restent constantes de génération en génération. Ces conditions sont : une population de très grande taille, des unions au hasard (panmixie), et l'absence de mutation, de sélection et de migration. Aucune population réelle ne les remplit parfaitement : le modèle sert de référence. Si les fréquences observées s'en écartent, c'est qu'au moins une force évolutive agit.",
              ],
              box: { label: "Propriété", text: "À l'équilibre de Hardy-Weinberg, pour deux allèles de fréquences p et q (p + q = 1) : fréquence de AA = p², de Aa = 2pq, de aa = q². Ces fréquences restent stables au fil des générations." },
            },
            {
              heading: "Les forces qui font évoluer les populations",
              paragraphs: [
                "Les mutations, modifications aléatoires de l'ADN, créent de nouveaux allèles : elles sont la source de la diversité génétique. La sélection naturelle favorise les individus porteurs d'allèles qui augmentent leur survie ou leur reproduction dans un milieu donné : la fréquence de ces allèles augmente. Exemple classique : en Angleterre, lors de la révolution industrielle, la forme sombre de la phalène du bouleau est devenue majoritaire dans les régions polluées, où elle était moins repérée par les oiseaux sur les troncs noircis ; elle a régressé lorsque la pollution a diminué.",
                "La dérive génétique est la variation aléatoire des fréquences alléliques d'une génération à l'autre, due au hasard de la transmission des allèles et de la reproduction. Elle est d'autant plus forte que la population est petite et peut conduire à la disparition ou à la fixation d'un allèle sans qu'il présente d'avantage. Les migrations, enfin, apportent ou retirent des allèles et rapprochent la composition génétique des populations.",
                "Les activités humaines agissent sur ces forces. La fragmentation des habitats isole de petites populations, où la dérive appauvrit la diversité génétique, ce qui réduit leur capacité d'adaptation. Pour y remédier, on crée des corridors écologiques (trames vertes et bleues) qui rétablissent les échanges entre populations.",
              ],
              box: { label: "À retenir", text: "Mutations : création d'allèles. Sélection naturelle : tri des allèles selon leur effet sur la survie et la reproduction. Dérive génétique : variation aléatoire, forte dans les petites populations. Migrations : échanges d'allèles entre populations." },
            },
          ],
          keyPoints: [
            "Biodiversité : écosystèmes, espèces, diversité génétique ; environ 2 millions d'espèces décrites.",
            "Cinq grandes crises d'extinction, dont la fin du Permien (252 Ma) et la fin du Crétacé (66 Ma).",
            "CMR : N ≈ n₁ × n₂ ÷ m ; intervalle de confiance à 95 % de la proportion : f ± 1 ÷ √n₂.",
            "Hardy-Weinberg : AA = p², Aa = 2pq, aa = q², fréquences stables sous conditions (grande population, panmixie, ni mutation, ni sélection, ni migration).",
            "Forces évolutives : mutations, sélection naturelle, dérive génétique (petites populations), migrations.",
            "Causes de l'érosion actuelle : destruction des habitats, surexploitation, climat, pollutions, espèces envahissantes.",
          ],
          example: {
            statement: "Pour estimer la population de lézards d'un îlot, on en capture et marque 120, que l'on relâche. Une semaine plus tard, on en capture 100, dont 30 sont marqués. a) Estimer l'effectif N de la population. b) Déterminer l'intervalle de confiance à 95 % de la proportion d'individus marqués, puis un encadrement de N. c) Citer une condition nécessaire à la validité de cette estimation.",
            solution: [
              "a) N ≈ n₁ × n₂ ÷ m = 120 × 100 ÷ 30 = 400 lézards.",
              "b) Proportion observée : f = 30 ÷ 100 = 0,30. Les conditions n₂ ≥ 25 et 0,2 ≤ f ≤ 0,8 sont vérifiées. Comme 1 ÷ √100 = 0,1, l'intervalle de confiance est [0,30 - 0,1 ; 0,30 + 0,1] = [0,20 ; 0,40].",
              "La proportion réelle p vérifie p = n₁ ÷ N, donc N = 120 ÷ p. Pour p = 0,40 : N = 300 ; pour p = 0,20 : N = 600.",
              "Avec un niveau de confiance de 95 %, l'effectif est compris entre 300 et 600 lézards.",
              "c) Il faut par exemple que la population soit fermée pendant la semaine (pas de naissances, de décès ni de migrations notables) et que les lézards marqués se mélangent au hasard aux autres.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une population de 1 000 individus, on dénombre pour un gène à deux allèles A et a : 360 individus AA, 480 individus Aa et 160 individus aa (données fictives). a) Calculer les fréquences p de l'allèle A et q de l'allèle a. b) Calculer les effectifs attendus de chaque génotype selon le modèle de Hardy-Weinberg. c) La population est-elle à l'équilibre ?",
              hint: "Chaque individu porte deux allèles : la population en compte 2 000. Un individu AA apporte 2 allèles A, un individu Aa en apporte un.",
              solution: [
                "a) Nombre d'allèles A : 2 × 360 + 480 = 1 200 sur 2 000, donc p = 0,6. Nombre d'allèles a : 2 × 160 + 480 = 800, donc q = 0,4. Vérification : p + q = 1.",
                "b) Fréquences attendues : AA : p² = 0,36 ; Aa : 2pq = 2 × 0,6 × 0,4 = 0,48 ; aa : q² = 0,16. Effectifs attendus : 360, 480 et 160.",
                "c) Les effectifs observés sont égaux aux effectifs attendus : la population est à l'équilibre de Hardy-Weinberg pour ce gène.",
              ],
            },
            {
              level: 2,
              statement: "Dans un étang, on capture 200 poissons d'une espèce, que l'on marque et relâche. Quelques jours plus tard, on en capture 100, dont 40 sont marqués. a) Estimer l'effectif de la population. b) Calculer l'intervalle de confiance à 95 % de la proportion de poissons marqués et en déduire un encadrement de l'effectif. c) Comment pourrait-on réduire la largeur de cet encadrement ?",
              hint: "La demi-largeur de l'intervalle de confiance vaut 1 ÷ √n₂. Pour l'encadrement de N, divisez n₁ par chacune des bornes, en les inversant.",
              solution: [
                "a) N ≈ 200 × 100 ÷ 40 = 500 poissons.",
                "b) f = 40 ÷ 100 = 0,40 ; 1 ÷ √100 = 0,10. Intervalle de confiance : [0,30 ; 0,50]. Comme N = 200 ÷ p : pour p = 0,50, N = 400 ; pour p = 0,30, N ≈ 667.",
                "L'effectif est compris entre 400 et 667 poissons environ, avec un niveau de confiance de 95 %.",
                "c) En recapturant un échantillon plus grand : si n₂ = 400, la demi-largeur devient 1 ÷ √400 = 0,05, deux fois plus petite. Il faut quadrupler la taille de l'échantillon pour diviser la largeur par 2.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Chez un escargot, la couleur de la coquille dépend d'un gène à deux allèles : C (coquille claire) et c (coquille foncée). Dans une population de 500 escargots d'un bois, on compte 90 individus CC, 160 Cc et 250 cc. 1) Calculer les fréquences des allèles C et c. 2) Calculer les effectifs attendus si la population était à l'équilibre de Hardy-Weinberg, et les comparer aux effectifs observés. 3) Proposer deux hypothèses expliquant l'écart. 4) Dans une petite population isolée de 20 escargots, l'allèle C disparaît en quelques générations alors qu'il n'apporte aucun désavantage. Quelle force évolutive peut l'expliquer ?",
              hint: "Comptez les allèles sur 1 000 (deux par individu). Pour 3, reprenez les conditions du modèle de Hardy-Weinberg et demandez-vous laquelle peut ne pas être remplie.",
              solution: [
                "1) Allèles C : 2 × 90 + 160 = 340 sur 1 000, donc p = 0,34. Allèles c : 2 × 250 + 160 = 660, donc q = 0,66.",
                "2) Attendus : CC : 0,34² × 500 ≈ 0,1156 × 500 ≈ 58 ; Cc : 2 × 0,34 × 0,66 × 500 ≈ 0,4488 × 500 ≈ 224 ; cc : 0,66² × 500 ≈ 0,4356 × 500 ≈ 218.",
                "Observés : 90 CC, 160 Cc et 250 cc. On observe moins d'hétérozygotes et plus d'homozygotes que prévu : la population n'est pas à l'équilibre de Hardy-Weinberg.",
                "3) Hypothèse 1 : les unions ne se font pas au hasard (par exemple, les escargots se reproduisent plutôt avec des partenaires proches, de même phénotype), ce qui augmente la part des homozygotes. Hypothèse 2 : la population est en réalité formée de sous-populations séparées (zones claires et zones sombres du bois) où une sélection différente s'exerce, par exemple par des oiseaux prédateurs qui repèrent mieux les coquilles contrastant avec le sol.",
                "4) Dans une population de petite taille, le hasard de la reproduction fait varier fortement les fréquences alléliques : c'est la dérive génétique, qui peut éliminer un allèle sans qu'il soit désavantageux.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Mutation", right: "Modification aléatoire de l'ADN, source de nouveaux allèles" },
              { left: "Sélection naturelle", right: "Tri des allèles selon leur effet sur la survie et la reproduction" },
              { left: "Dérive génétique", right: "Variation aléatoire des fréquences alléliques, forte dans les petites populations" },
              { left: "Migration", right: "Échange d'allèles entre populations par le déplacement d'individus" },
              { left: "Panmixie", right: "Rencontre des partenaires sexuels au hasard" },
              { left: "Diversité génétique", right: "Variété des allèles au sein d'une même espèce" },
            ],
          },
          quiz: [
            {
              q: "Lors d'une CMR, on marque 50 individus ; on en recapture 40, dont 10 sont marqués. Quel effectif estime-t-on ?",
              options: ["200", "80", "500", "100"],
              answer: 0,
              why: "N ≈ n₁ × n₂ ÷ m = 50 × 40 ÷ 10 = 200 individus.",
            },
            {
              q: "Dans une population à l'équilibre de Hardy-Weinberg, l'allèle a a une fréquence q = 0,3. Quelle est la fréquence des hétérozygotes Aa ?",
              options: ["0,09", "0,21", "0,49", "0,42"],
              answer: 3,
              why: "p = 1 - 0,3 = 0,7, et la fréquence des hétérozygotes vaut 2pq = 2 × 0,7 × 0,3 = 0,42.",
            },
            {
              q: "Quelle force évolutive agit au hasard, et d'autant plus fortement que la population est petite ?",
              options: ["La sélection naturelle", "La dérive génétique", "La migration"],
              answer: 1,
              why: "La dérive génétique résulte du hasard de la transmission des allèles ; ses effets sont d'autant plus marqués que l'effectif est faible.",
            },
            {
              q: "Laquelle de ces conditions n'est pas requise par le modèle de Hardy-Weinberg ?",
              options: ["Population de très grande taille", "Absence de mutation", "Présence de sélection naturelle", "Unions au hasard"],
              answer: 2,
              why: "Le modèle suppose au contraire l'absence de sélection, comme l'absence de mutation et de migration.",
            },
            {
              q: "Quelle est la principale cause actuelle de l'érosion de la biodiversité selon l'IPBES (2019) ?",
              options: ["Les éruptions volcaniques de grande ampleur", "La destruction des habitats", "Les variations naturelles de l'orbite terrestre", "La chute d'un astéroïde géant"],
              answer: 1,
              why: "Le changement d'usage des terres et des mers, qui détruit et fragmente les habitats, est la première cause identifiée, devant la surexploitation et le changement climatique.",
            },
          ],
          trap: "Calculer la fréquence d'un allèle en comptant les individus au lieu des allèles : un individu hétérozygote Aa porte un allèle A et un allèle a, et la population compte deux fois plus d'allèles que d'individus.",
          method: "Pour tester l'équilibre de Hardy-Weinberg, suivez toujours trois étapes : calculer p et q à partir des effectifs observés, calculer les effectifs attendus p² × N, 2pq × N et q² × N, puis comparer et, en cas d'écart, chercher quelle condition du modèle n'est pas respectée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-grille-de-lecture',
          title: 'L\'évolution comme grille de lecture du monde',
          minutes: 30,
          objectives: [
            "Expliquer des particularités anatomiques surprenantes de l'espèce humaine par l'histoire évolutive.",
            "Expliquer l'apparition de résistances aux antibiotiques ou aux insecticides par la sélection naturelle.",
            "Identifier des compromis sélectifs, comme celui de la drépanocytose et du paludisme.",
            "Mobiliser les mécanismes de l'évolution pour éclairer des choix en médecine, en agriculture ou en conservation.",
          ],
          course: [
            {
              heading: "L'évolution, une clé pour comprendre le vivant",
              paragraphs: [
                "En 1859, Charles Darwin publie L'Origine des espèces. Il y montre que les espèces se transforment au cours du temps : les individus d'une population présentent des variations héréditaires, et ceux dont les caractères favorisent la survie et la reproduction dans un milieu donné laissent davantage de descendants. Génération après génération, ces caractères deviennent plus fréquents : c'est la sélection naturelle. Les découvertes de la génétique ont ensuite montré que ces variations proviennent de mutations de l'ADN.",
                "Le biologiste Theodosius Dobzhansky a résumé l'importance de cette théorie dans le titre d'un article de 1973, selon lequel rien n'a de sens en biologie si ce n'est à la lumière de l'évolution. L'évolution n'est pas qu'un récit du passé : c'est une grille de lecture qui explique des formes étonnantes du vivant et des phénomènes très actuels, comme la résistance des bactéries aux antibiotiques.",
              ],
            },
            {
              heading: "Des structures anatomiques héritées de l'histoire",
              paragraphs: [
                "Certaines structures du corps humain semblent mal conçues. Le nerf laryngé récurrent, qui commande les muscles du larynx, part du cerveau, descend dans le thorax, fait une boucle sous l'aorte, puis remonte vers le larynx. Ce détour s'explique par l'histoire : chez les poissons ancestraux, sans cou, ce nerf passait en arrière d'un vaisseau des branchies, juste à côté de sa cible. Au cours de l'évolution, l'allongement du cou et le déplacement du cœur dans le thorax ont étiré le nerf, toujours accroché sous ce vaisseau, devenu l'aorte. Chez la girafe, le détour atteint plusieurs mètres.",
                "Autre exemple : chez les mammifères, les voies respiratoires et digestives se croisent au niveau du pharynx, d'où le risque de fausse route ; cette disposition est héritée d'ancêtres chez qui les poumons se sont formés à partir du tube digestif. De même, la rétine des vertébrés est « inversée » : les fibres nerveuses passent devant les cellules sensibles à la lumière et se rassemblent en un point dépourvu de récepteurs, la tache aveugle, ce qui n'existe pas dans l'œil des pieuvres, construit au cours d'une histoire indépendante.",
                "Ces exemples montrent que l'évolution ne crée pas d'organes optimaux à partir de rien : elle modifie ce qui existe déjà. Le biologiste François Jacob a comparé ce processus à un bricolage. Une structure peut aussi résulter d'un compromis sélectif : chez l'espèce humaine, la bipédie impose un bassin étroit, alors que le gros cerveau impose une tête volumineuse à la naissance, ce qui rend l'accouchement difficile.",
              ],
              box: { label: "À retenir", text: "Les particularités anatomiques s'expliquent par l'histoire évolutive (structures héritées et modifiées) et par des compromis sélectifs entre des avantages et des inconvénients. La sélection naturelle ne produit pas des organismes parfaits." },
            },
            {
              heading: "Les pratiques humaines, des forces de sélection",
              paragraphs: [
                "La pénicilline, découverte par Alexander Fleming en 1928, est utilisée massivement à partir des années 1940. Très vite, des bactéries résistantes apparaissent. Le mécanisme est celui de la sélection naturelle : dans une population de milliards de bactéries, quelques-unes portent, par hasard, une mutation qui les rend résistantes. L'antibiotique ne crée pas cette mutation : il tue les bactéries sensibles, tandis que les résistantes survivent et se multiplient. La proportion de résistantes augmente à chaque traitement. Les bactéries peuvent aussi échanger des gènes de résistance (transferts horizontaux).",
                "L'antibiorésistance est aujourd'hui une menace sanitaire mondiale : certaines infections deviennent difficiles à soigner. D'où les recommandations : n'utiliser un antibiotique que contre une infection bactérienne (il est inefficace contre les virus), et suivre le traitement prescrit jusqu'au bout. Le même raisonnement explique la résistance des moustiques aux insecticides, des « mauvaises herbes » aux herbicides, ou la diminution de la taille des poissons dans les populations soumises à une pêche intensive qui prélève les plus gros.",
                "La sélection peut aussi être pratiquée volontairement : c'est la sélection artificielle, à l'origine des plantes cultivées et des animaux domestiques. À partir d'une même espèce de chou sauvage, les agriculteurs ont ainsi obtenu le chou pommé, le chou-fleur, le brocoli ou le chou de Bruxelles ; toutes les races de chiens descendent du loup.",
              ],
              box: { label: "Règle", text: "Un antibiotique ne rend pas les bactéries résistantes : il sélectionne les bactéries déjà résistantes, présentes par hasard dans la population. Ce sont les populations qui évoluent, pas les individus." },
            },
            {
              heading: "Un exemple de compromis : drépanocytose et paludisme",
              paragraphs: [
                "La drépanocytose est une maladie génétique due à un allèle muté du gène de l'hémoglobine, noté S. Les personnes homozygotes SS sont atteintes d'une anémie grave. Pourtant, l'allèle S est fréquent dans certaines régions d'Afrique, où sévit le paludisme. Les personnes hétérozygotes AS ne sont généralement pas malades et résistent mieux aux formes graves du paludisme que les homozygotes AA.",
                "Dans les régions impaludées, les hétérozygotes ont donc un avantage sélectif, ce qui maintient l'allèle S dans la population malgré le désavantage des homozygotes SS : c'est un compromis sélectif. Là où le paludisme est absent, cet avantage disparaît et la fréquence de l'allèle S diminue. Comprendre ces mécanismes est utile en médecine (antibiotiques, vaccins adaptés à l'évolution des virus de la grippe), en agriculture (alternance des pesticides) et en conservation de la biodiversité.",
              ],
            },
          ],
          keyPoints: [
            "Darwin (1859) : variations héréditaires et sélection naturelle ; les mutations sont la source des variations.",
            "Structures surprenantes héritées de l'histoire : nerf laryngé récurrent, croisement des voies aériennes et digestives, tache aveugle.",
            "L'évolution modifie l'existant (« bricolage ») et produit des compromis, pas des organismes parfaits.",
            "Antibiorésistance : l'antibiotique sélectionne les bactéries résistantes déjà présentes, il ne crée pas la mutation.",
            "Mêmes mécanismes : résistance aux insecticides et herbicides, effets de la pêche intensive ; sélection artificielle des espèces domestiques.",
            "Drépanocytose : les hétérozygotes AS résistent mieux au paludisme, ce qui maintient l'allèle S dans les zones impaludées.",
          ],
          example: {
            statement: "Un patient est infecté par une population de 10⁹ bactéries (données fictives). Une mutation conférant la résistance à un antibiotique y est présente chez une bactérie sur 10 millions. Le traitement, arrêté trop tôt, tue 99,9 % des bactéries sensibles et aucune bactérie résistante. a) Combien de bactéries résistantes sont présentes avant le traitement ? b) Calculer la proportion de bactéries résistantes après le traitement. c) Expliquer l'évolution observée.",
            solution: [
              "a) Bactéries résistantes : 10⁹ ÷ 10⁷ = 100 bactéries.",
              "b) Bactéries sensibles survivantes : environ 10⁹ × 0,001 = 10⁶. Bactéries résistantes : toujours 100.",
              "Proportion de résistantes après le traitement : 100 ÷ (10⁶ + 100) ≈ 10⁻⁴, soit environ une sur 10 000, contre une sur 10 millions avant : elle a été multipliée par environ 1 000.",
              "c) L'antibiotique n'a pas provoqué de mutation : la résistance existait déjà par hasard. En éliminant les bactéries sensibles, il a sélectionné les résistantes, qui vont se multiplier et transmettre leur résistance à leurs descendantes.",
              "Réponse : 100 bactéries résistantes au départ ; leur proportion passe d'environ 10⁻⁷ à environ 10⁻⁴. Un traitement mal conduit favorise l'émergence d'une population résistante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le nerf laryngé récurrent, qui commande les muscles du larynx, descend du cerveau jusque dans le thorax, passe sous l'aorte, puis remonte vers le larynx. a) En quoi ce trajet paraît-il peu efficace ? b) Expliquer ce trajet à l'aide de l'histoire évolutive des vertébrés. c) Quelle idée générale sur l'évolution cet exemple illustre-t-il ?",
              hint: "Comparez avec la disposition de ce nerf chez un poisson, animal sans cou dont le cœur est proche de la tête.",
              solution: [
                "a) Le nerf parcourt une distance bien plus longue que nécessaire : le larynx est situé dans le cou, tout près du cerveau.",
                "b) Chez les poissons ancestraux, ce nerf passait derrière un vaisseau sanguin des branchies, juste à côté de sa cible. Au cours de l'évolution des vertébrés terrestres, le cou s'est allongé et le cœur est descendu dans le thorax, entraînant ce vaisseau, devenu l'aorte. Le nerf, resté accroché sous lui, s'est allongé en faisant un détour.",
                "c) L'évolution modifie progressivement des structures héritées au lieu de les reconstruire : l'anatomie actuelle porte la trace de l'histoire de l'espèce.",
              ],
            },
            {
              level: 2,
              statement: "Dans une population bactérienne, 1 % des bactéries sont résistantes à un antibiotique. Lors de chaque traitement, 10 % des bactéries sensibles survivent et toutes les bactéries résistantes survivent ; entre deux traitements, la population se reconstitue en gardant les proportions des survivantes (données fictives). a) Calculer la proportion de résistantes après un traitement. b) Calculer cette proportion après le deuxième et le troisième traitement. c) Conclure et proposer une recommandation médicale.",
              hint: "Raisonnez sur 100 bactéries : comptez les résistantes et les sensibles survivantes, puis calculez la proportion de résistantes parmi les survivantes.",
              solution: [
                "a) Sur 100 bactéries : 1 résistante et 99 sensibles. Survivantes : 1 résistante et 99 × 0,1 = 9,9 sensibles. Proportion de résistantes : 1 ÷ 10,9 ≈ 0,092, soit environ 9,2 %.",
                "b) Deuxième traitement : sur 100 bactéries, 9,2 résistantes et 90,8 sensibles ; survivantes : 9,2 et 9,08. Proportion : 9,2 ÷ 18,28 ≈ 0,50, soit environ 50 %.",
                "Troisième traitement : 50 résistantes et 50 sensibles ; survivantes : 50 et 5. Proportion : 50 ÷ 55 ≈ 0,91, soit environ 91 %.",
                "c) En trois traitements, les résistantes passent de 1 % à environ 91 % de la population : l'antibiotique devient inefficace. Recommandation : ne prescrire d'antibiotiques que lorsqu'ils sont nécessaires (infection bactérienne) et respecter la durée prescrite, pour limiter cette sélection.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac (données fictives). Dans une population, la fréquence de l'allèle S de la drépanocytose est q = 0,10 à la naissance, avec des génotypes répartis selon le modèle de Hardy-Weinberg. Dans une région impaludée, la proportion d'enfants qui atteignent l'âge adulte est de 85 % pour les AA, 100 % pour les AS et 20 % pour les SS. 1) Calculer les fréquences des génotypes à la naissance. 2) Calculer la fréquence de l'allèle S chez les adultes survivants. 3) Reprendre le calcul dans une région sans paludisme, où les survies sont de 100 % pour AA et AS et de 20 % pour SS. 4) Expliquer pourquoi l'allèle S se maintient dans certaines régions et pas dans d'autres.",
              hint: "Multipliez chaque fréquence génotypique par la survie correspondante, puis comptez les allèles S parmi les survivants : la moitié des allèles des AS, tous ceux des SS, en divisant par le total des survivants.",
              solution: [
                "1) p = 0,90 et q = 0,10. Fréquences à la naissance : AA : 0,81 ; AS : 2 × 0,9 × 0,1 = 0,18 ; SS : 0,01.",
                "2) Survivants (région impaludée) : AA : 0,81 × 0,85 ≈ 0,689 ; AS : 0,18 ; SS : 0,01 × 0,2 = 0,002. Total : 0,8705.",
                "Fréquence de S chez les survivants : (0,18 ÷ 2 + 0,002) ÷ 0,8705 = 0,092 ÷ 0,8705 ≈ 0,106. Elle augmente (de 0,100 à 0,106).",
                "3) Région sans paludisme : survivants AA : 0,81 ; AS : 0,18 ; SS : 0,002 ; total : 0,992. Fréquence de S : 0,092 ÷ 0,992 ≈ 0,093. Elle diminue (de 0,100 à 0,093).",
                "4) Dans les régions impaludées, l'avantage des hétérozygotes, qui résistent mieux au paludisme, compense le désavantage des homozygotes SS : l'allèle S se maintient, c'est un compromis sélectif. Sans paludisme, seul le désavantage subsiste et l'allèle S régresse. La valeur sélective d'un allèle dépend donc du milieu.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Repérez les idées reçues sur l'évolution.",
            statements: [
              { text: "Un antibiotique provoque chez les bactéries la mutation qui les rend résistantes.", true: false, why: "La mutation existe déjà par hasard ; l'antibiotique sélectionne les bactéries qui la portent." },
              { text: "Ce sont les populations qui évoluent, pas les individus.", true: true, why: "La sélection modifie les fréquences des allèles d'une génération à l'autre dans une population." },
              { text: "La sélection naturelle produit toujours des organes parfaitement adaptés.", true: false, why: "Elle modifie des structures héritées et aboutit à des compromis, comme le nerf laryngé récurrent." },
              { text: "Un antibiotique est inefficace contre un virus.", true: true, why: "Les antibiotiques agissent sur des structures propres aux bactéries, absentes chez les virus." },
              { text: "Les hétérozygotes AS résistent mieux aux formes graves du paludisme.", true: true, why: "C'est l'avantage qui maintient l'allèle S de la drépanocytose dans les régions impaludées." },
              { text: "Les organismes changent volontairement pour s'adapter à leur milieu.", true: false, why: "Les variations apparaissent au hasard ; le milieu trie ensuite celles qui favorisent la survie et la reproduction." },
              { text: "Toutes les races de chiens sont issues de la sélection artificielle du loup.", true: true, why: "La domestication du loup puis la sélection pratiquée par les éleveurs ont produit la diversité des chiens." },
            ],
          },
          quiz: [
            {
              q: "Comment l'usage d'un antibiotique favorise-t-il les bactéries résistantes ?",
              options: ["Il provoque chez chaque bactérie la mutation qui la rend résistante", "Il renforce les défenses immunitaires des bactéries exposées", "Il élimine les sensibles, les résistantes se multiplient"],
              answer: 2,
              why: "L'antibiotique est un facteur de sélection : il tue les bactéries sensibles, et les rares résistantes, déjà présentes, se multiplient.",
            },
            {
              q: "Pourquoi le nerf laryngé récurrent fait-il un détour par le thorax ?",
              options: ["Ce trajet est hérité d'ancêtres sans cou", "Ce détour accélère la transmission des messages nerveux vers le larynx", "Il doit alimenter le cœur au passage, ce qui est sa fonction principale"],
              answer: 0,
              why: "Chez les poissons ancestraux, le nerf passait derrière un vaisseau des branchies ; l'allongement du cou et la descente du cœur ont étiré ce trajet.",
            },
            {
              q: "Quel ouvrage, publié en 1859, expose la théorie de l'évolution par la sélection naturelle ?",
              options: ["Essai sur le principe de population", "Philosophie zoologique", "La Logique du vivant", "L'Origine des espèces"],
              answer: 3,
              why: "Charles Darwin publie L'Origine des espèces en 1859. La Philosophie zoologique est de Lamarck (1809) et l'Essai sur le principe de population de Malthus (1798).",
            },
            {
              q: "Pourquoi l'allèle de la drépanocytose reste-t-il fréquent dans les régions où sévit le paludisme ?",
              options: ["Parce que les malades homozygotes ont plus d'enfants que la moyenne", "Les hétérozygotes résistent mieux au paludisme", "Parce que le parasite du paludisme provoque cette mutation"],
              answer: 1,
              why: "Les hétérozygotes AS, non malades, survivent mieux au paludisme que les AA : cet avantage maintient l'allèle S malgré la maladie des SS.",
            },
            {
              q: "Qu'appelle-t-on un compromis sélectif ?",
              options: ["Un accord entre deux espèces pour partager une ressource", "Une mutation qui n'a aucun effet sur l'organisme", "Un caractère avantageux mais aussi coûteux", "La sélection exercée volontairement par l'éleveur sur ses animaux"],
              answer: 2,
              why: "Un caractère peut apporter un avantage et un inconvénient à la fois, comme le bassin étroit lié à la bipédie qui rend l'accouchement difficile.",
            },
          ],
          trap: "Dire que les bactéries « s'adaptent » à l'antibiotique ou « deviennent » résistantes, comme si chaque bactérie se transformait : la résistance préexiste par hasard chez quelques bactéries, et c'est la population qui évolue par sélection.",
          method: "Pour expliquer une évolution par la sélection naturelle, rédigez toujours quatre étapes : variation préexistante d'origine aléatoire, facteur du milieu qui trie, survie et reproduction différentielles, augmentation de la fréquence du caractère au fil des générations.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-humaine',
          title: 'L\'évolution humaine',
          minutes: 30,
          objectives: [
            "Situer Homo sapiens parmi les primates et identifier ses plus proches parents actuels.",
            "Analyser des comparaisons de séquences génétiques pour établir des relations de parenté.",
            "Construire un arbre de parenté à partir de caractères dérivés partagés.",
            "Décrire les grandes étapes de la lignée humaine et expliquer son caractère buissonnant.",
          ],
          course: [
            {
              heading: "Homo sapiens, un primate parmi d'autres",
              paragraphs: [
                "L'espèce humaine, Homo sapiens, appartient au groupe des primates, qui comprend aussi les lémuriens, les singes d'Amérique, les macaques ou les babouins. Avec les gibbons, les orangs-outans, les gorilles, les chimpanzés et les bonobos, elle forme le groupe des hominoïdes, caractérisé notamment par l'absence de queue. Ses plus proches parents actuels sont le chimpanzé et le bonobo, deux espèces du genre Pan.",
                "Dire que l'Homme et le chimpanzé sont proches parents ne signifie pas que l'Homme descend du chimpanzé : les deux espèces actuelles descendent d'un ancêtre commun, qui n'était ni un humain ni un chimpanzé. Leurs lignées se sont séparées il y a environ 7 millions d'années, selon les estimations les plus courantes. Depuis, chacune a évolué de son côté : le chimpanzé actuel n'est pas un « ancêtre resté figé ».",
              ],
              box: { label: "Définition", text: "Deux espèces sont d'autant plus proches parentes que leur ancêtre commun exclusif est récent. Un ancêtre commun est une espèce, généralement inconnue, dont les deux espèces descendent." },
            },
            {
              heading: "Ce que révèlent les génomes",
              paragraphs: [
                "On compare les séquences d'ADN ou de protéines de différentes espèces, en comptant le nombre de différences entre elles. Plus deux espèces présentent peu de différences, plus leur ancêtre commun est récent, car les mutations s'accumulent au cours du temps dans chaque lignée. Les résultats sont souvent présentés dans une matrice des distances, tableau à double entrée qui donne le pourcentage de différences pour chaque paire d'espèces. Ainsi, sur les séquences alignées, les génomes de l'Homme et du chimpanzé ne diffèrent que d'environ 1,2 % de leurs nucléotides.",
                "L'ADN ancien a aussi transformé nos connaissances. En 2010, l'équipe de Svante Pääbo (prix Nobel de médecine 2022) publie une première version du génome de l'Homme de Néandertal. Elle montre que les humains actuels dont les ancêtres ne sont pas africains portent environ 2 % d'ADN néandertalien : Homo sapiens et les Néandertaliens se sont donc croisés. La même année, l'ADN d'un fragment d'os trouvé dans la grotte de Denisova, en Sibérie, révèle une autre population humaine, les Dénisoviens, dont certaines populations d'Océanie ont hérité quelques pour cent de leur génome.",
              ],
            },
            {
              heading: "Une lignée buissonnante",
              paragraphs: [
                "Les fossiles jalonnent l'histoire de la lignée humaine, qui commence en Afrique. Toumaï (Sahelanthropus tchadensis), découvert au Tchad en 2001 et daté d'environ 7 millions d'années, et Orrorin (Kenya, environ 6 millions d'années) sont parmi les plus anciens représentants proposés. Les australopithèques, comme Lucy (Australopithecus afarensis, découverte en Éthiopie en 1974 et datée d'environ 3,2 millions d'années), sont bipèdes mais ont un petit cerveau, d'un volume proche de celui d'un chimpanzé (environ 400 cm³).",
                "Le genre Homo apparaît il y a environ 2,8 millions d'années. Homo erectus est l'une des premières espèces à sortir d'Afrique : des fossiles d'environ 1,8 million d'années ont été trouvés en Géorgie. Les plus anciens fossiles attribués à Homo sapiens, découverts à Djebel Irhoud au Maroc, sont datés d'environ 300 000 ans. Les Néandertaliens, au cerveau aussi volumineux que le nôtre (environ 1 500 cm³ en moyenne, contre environ 1 350 cm³ pour Homo sapiens), ont vécu en Europe et au Proche-Orient jusqu'à il y a environ 40 000 ans.",
                "Plusieurs espèces humaines ont donc coexisté : il y a environ 60 000 ans, Homo sapiens partageait la planète avec les Néandertaliens, les Dénisoviens et Homo floresiensis, sur l'île de Florès en Indonésie. L'évolution humaine n'est pas une ligne droite menant à Homo sapiens, mais un buisson aux nombreuses ramifications, dont une seule subsiste aujourd'hui. On ne peut d'ailleurs jamais affirmer qu'un fossile est l'ancêtre direct d'une espèce actuelle.",
              ],
              box: { label: "Repère", text: "Toumaï : environ 7 Ma (Tchad). Lucy : environ 3,2 Ma (Éthiopie). Genre Homo : dès environ 2,8 Ma. Homo erectus hors d'Afrique : environ 1,8 Ma. Homo sapiens : environ 300 000 ans (Maroc). Disparition des Néandertaliens : environ 40 000 ans." },
            },
            {
              heading: "Construire un arbre de parenté",
              paragraphs: [
                "Pour établir les relations de parenté, on compare les états des caractères (anatomiques ou moléculaires). L'état ancestral est celui présent chez l'ancêtre ; l'état dérivé est une nouveauté évolutive apparue dans une lignée. Seuls les caractères dérivés partagés indiquent une parenté : des espèces qui partagent un état dérivé l'ont hérité d'un ancêtre commun exclusif. Par exemple, l'absence de queue est un caractère dérivé partagé par tous les hominoïdes.",
                "Les caractères dérivés propres à la lignée humaine concernent surtout la bipédie permanente (trou occipital situé sous le crâne, bassin court et large, fémur oblique vers le genou), l'augmentation du volume du cerveau, la réduction de la face et des canines. Dans un arbre de parenté, les espèces sont placées aux extrémités des branches et chaque nœud représente un ancêtre commun hypothétique : les fossiles sont placés sur des branches latérales, jamais au nœud lui-même.",
              ],
              box: { label: "Règle", text: "Seuls les caractères dérivés partagés permettent de regrouper des espèces. On emboîte les groupes : chaque groupe réunit toutes les espèces qui partagent une même innovation évolutive." },
            },
          ],
          keyPoints: [
            "Homo sapiens est un primate hominoïde ; ses plus proches parents actuels sont le chimpanzé et le bonobo.",
            "L'Homme ne descend pas du chimpanzé : ils ont un ancêtre commun, il y a environ 7 millions d'années.",
            "Moins de différences entre séquences, ancêtre commun plus récent ; Homme et chimpanzé diffèrent d'environ 1,2 %.",
            "ADN ancien : environ 2 % d'ADN néandertalien chez les humains non africains, preuve de croisements.",
            "Repères : Toumaï (7 Ma), Lucy (3,2 Ma), Homo (2,8 Ma), Homo sapiens (300 000 ans).",
            "Lignée buissonnante : plusieurs espèces humaines ont coexisté ; on ne désigne jamais un fossile comme ancêtre direct.",
          ],
          example: {
            statement: "La matrice suivante donne le pourcentage de différences entre des séquences d'ADN de quatre hominoïdes (données simplifiées) : Homme-Chimpanzé : 1,2 ; Homme-Gorille : 1,6 ; Chimpanzé-Gorille : 1,6 ; Homme-Orang-outan : 3,1 ; Chimpanzé-Orang-outan : 3,1 ; Gorille-Orang-outan : 3,1. Construire l'arbre de parenté de ces quatre espèces et l'interpréter.",
            solution: [
              "On repère d'abord la plus petite distance : 1,2 % entre l'Homme et le Chimpanzé. Ce sont les deux espèces les plus proches parentes : on les regroupe, avec un ancêtre commun exclusif.",
              "Le Gorille est ensuite à 1,6 % de l'Homme comme du Chimpanzé : il se rattache au groupe Homme-Chimpanzé par un ancêtre commun plus ancien.",
              "L'Orang-outan est à 3,1 % des trois autres espèces : il se rattache en dernier, par l'ancêtre commun le plus ancien.",
              "Arbre obtenu : (((Homme, Chimpanzé), Gorille), Orang-outan).",
              "Interprétation : le chimpanzé est le plus proche parent de l'Homme parmi ces espèces ; l'Homme est plus proche du chimpanzé que le chimpanzé ne l'est du gorille. Aucune espèce actuelle ne descend d'une autre : chaque nœud est un ancêtre commun disparu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère cinq espèces et quatre caractères. Macaque : queue présente, pas de bipédie permanente, volume crânien d'environ 100 cm³, pas de menton osseux. Chimpanzé : pas de queue, pas de bipédie permanente, environ 400 cm³, pas de menton. Lucy (Australopithecus afarensis) : pas de queue, bipédie permanente, environ 400 cm³, pas de menton. Homo erectus : pas de queue, bipédie permanente, environ 1 000 cm³, pas de menton. Homo sapiens : pas de queue, bipédie permanente, environ 1 350 cm³, menton osseux. Les états dérivés sont : absence de queue, bipédie permanente, volume crânien supérieur à 800 cm³, menton osseux. Construire les groupes emboîtés, puis l'arbre de parenté.",
              hint: "Pour chaque état dérivé, entourez toutes les espèces qui le possèdent : chaque cercle forme un groupe. Les groupes doivent s'emboîter.",
              solution: [
                "Absence de queue : Chimpanzé, Lucy, Homo erectus, Homo sapiens (le macaque garde l'état ancestral).",
                "Bipédie permanente : Lucy, Homo erectus, Homo sapiens. Volume crânien supérieur à 800 cm³ : Homo erectus, Homo sapiens. Menton osseux : Homo sapiens seul.",
                "Les groupes s'emboîtent : {Chimpanzé, Lucy, H. erectus, H. sapiens} contient {Lucy, H. erectus, H. sapiens}, qui contient {H. erectus, H. sapiens}.",
                "Arbre : (Macaque, (Chimpanzé, (Lucy, (Homo erectus, Homo sapiens)))). Le menton osseux est une innovation propre à Homo sapiens.",
              ],
            },
            {
              level: 2,
              statement: "On compare un fragment d'ADN de 20 nucléotides chez trois espèces (séquences fictives et très courtes). Homme : ATGGCTTACCGTAAGCTTGA. Chimpanzé : ATGGCTTACCGTAAGCTAGA. Gorille : ATGGCATACCGTAAGCTAGC. a) Compter les différences entre chaque paire d'espèces et les exprimer en pourcentage. b) Quelles sont les deux espèces les plus proches parentes ? c) Pourquoi les scientifiques comparent-ils des génomes entiers plutôt que des fragments aussi courts ?",
              hint: "Comparez les séquences position par position, de gauche à droite, en notant le rang de chaque différence.",
              solution: [
                "a) Homme-Chimpanzé : une seule différence (18e nucléotide : T chez l'Homme, A chez le Chimpanzé), soit 1 ÷ 20 = 5 %.",
                "Homme-Gorille : trois différences (6e, 18e et 20e nucléotides), soit 3 ÷ 20 = 15 %. Chimpanzé-Gorille : deux différences (6e et 20e nucléotides), soit 2 ÷ 20 = 10 %.",
                "b) L'Homme et le Chimpanzé sont les plus proches parents : leur ancêtre commun exclusif est le plus récent. Le Gorille se rattache ensuite à ce groupe.",
                "c) Sur un fragment aussi court, une seule mutation modifie fortement le pourcentage, et le hasard peut donner des résultats trompeurs. Comparer des millions de nucléotides donne des estimations beaucoup plus fiables (environ 1,2 % de différences entre les génomes de l'Homme et du chimpanzé).",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type bac. Document 1 : Toumaï est daté d'environ 7 millions d'années, Lucy d'environ 3,2 millions d'années, les plus anciens Homo sapiens d'environ 300 000 ans. Document 2 : il y a environ 60 000 ans, Homo sapiens, les Néandertaliens, les Dénisoviens et Homo floresiensis vivaient à la même époque. Document 3 : les humains actuels dont les ancêtres ne sont pas africains portent environ 2 % d'ADN néandertalien. À partir de ces documents et de vos connaissances, discuter les deux affirmations suivantes : « L'Homme descend du chimpanzé » et « L'évolution humaine est une marche en ligne droite de Toumaï jusqu'à Homo sapiens ».",
              hint: "Pour la première affirmation, mobilisez la notion d'ancêtre commun. Pour la seconde, cherchez dans les documents ce qui contredit l'idée d'une succession d'espèces se remplaçant une à une.",
              solution: [
                "Première affirmation : elle est fausse. L'Homme et le chimpanzé sont deux espèces actuelles, qui partagent un ancêtre commun ayant vécu il y a environ 7 millions d'années. Depuis, chaque lignée a évolué de façon indépendante : le chimpanzé actuel n'est pas notre ancêtre, mais notre plus proche parent actuel (avec le bonobo).",
                "Seconde affirmation : le document 1 pourrait faire croire à une succession linéaire, mais le document 2 montre que plusieurs espèces humaines ont vécu en même temps : elles ne se sont pas remplacées une à une.",
                "Le document 3 montre de plus que Homo sapiens et les Néandertaliens se sont croisés : les lignées ne sont pas toujours totalement séparées.",
                "Enfin, on ne peut pas affirmer qu'un fossile comme Toumaï ou Lucy est l'ancêtre direct d'Homo sapiens : on les place sur des branches latérales de l'arbre, près des nœuds.",
                "Conclusion : l'évolution humaine est buissonnante. De nombreuses espèces se sont succédé et ont parfois coexisté et échangé des gènes ; Homo sapiens est aujourd'hui la seule espèce survivante de ce buisson.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces jalons de la lignée humaine dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Toumaï, au Tchad (environ 7 millions d'années)",
              "Orrorin, au Kenya (environ 6 millions d'années)",
              "Lucy, en Éthiopie (environ 3,2 millions d'années)",
              "Apparition du genre Homo (environ 2,8 millions d'années)",
              "Homo erectus en Géorgie, hors d'Afrique (environ 1,8 million d'années)",
              "Plus anciens Homo sapiens connus, au Maroc (environ 300 000 ans)",
              "Disparition des Néandertaliens (environ 40 000 ans)",
            ],
          },
          quiz: [
            {
              q: "Quel est le plus proche parent actuel d'Homo sapiens ?",
              options: ["Le gorille", "Le chimpanzé", "L'orang-outan", "Le gibbon"],
              answer: 1,
              why: "Le chimpanzé et le bonobo (genre Pan) sont nos plus proches parents actuels : leurs génomes diffèrent du nôtre d'environ 1,2 %.",
            },
            {
              q: "Que signifie l'affirmation « l'Homme et le chimpanzé ont un ancêtre commun » ?",
              options: ["L'Homme descend directement du chimpanzé actuel, qui a peu changé", "Le chimpanzé est une forme moins évoluée de l'espèce humaine", "Les deux lignées divergent d'une même espèce ancienne"],
              answer: 2,
              why: "Les deux espèces actuelles descendent d'une espèce disparue, il y a environ 7 millions d'années ; chacune a ensuite évolué de son côté.",
            },
            {
              q: "Que révèle la présence d'environ 2 % d'ADN néandertalien chez les humains actuels non africains ?",
              options: ["Des métissages entre sapiens et Néandertaliens", "Que les Néandertaliens sont les ancêtres directs de tous les humains", "Une contamination des échantillons lors des analyses en laboratoire"],
              answer: 0,
              why: "Ces fragments d'ADN ont été hérités de croisements entre Homo sapiens et les Néandertaliens, lorsque les deux populations se sont rencontrées hors d'Afrique.",
            },
            {
              q: "Quel fossile, daté d'environ 7 millions d'années, est l'un des plus anciens représentants proposés de la lignée humaine ?",
              options: ["Lucy", "L'Homme de Néandertal", "Toumaï", "Homo erectus"],
              answer: 2,
              why: "Toumaï (Sahelanthropus tchadensis), découvert au Tchad en 2001, est daté d'environ 7 millions d'années. Lucy est datée d'environ 3,2 millions d'années.",
            },
            {
              q: "Pourquoi parle-t-on d'une évolution humaine « buissonnante » ?",
              options: ["Parce que les premiers humains vivaient dans des buissons de savane", "Parce que chaque espèce descend directement de la précédente", "Parce que l'évolution humaine s'est arrêtée avec Homo sapiens", "Plusieurs espèces humaines ont coexisté"],
              answer: 3,
              why: "La lignée humaine compte de nombreuses branches, dont plusieurs ont vécu en même temps ; une seule, Homo sapiens, subsiste aujourd'hui.",
            },
          ],
          trap: "Affirmer que « l'Homme descend du singe » au sens où il descendrait du chimpanzé actuel : l'Homme et le chimpanzé sont deux espèces cousines issues d'un ancêtre commun, et aucune espèce actuelle n'est l'ancêtre d'une autre.",
          method: "Pour construire un arbre à partir d'une matrice des distances, regroupez d'abord les deux espèces les plus proches, puis rattachez les autres une à une par distance croissante ; vérifiez enfin que chaque nœud correspond à un ancêtre commun et qu'aucune espèce n'est placée sur un nœud.",
        },
      ],
    },
  ],
}
