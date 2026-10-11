import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ses-2nde',
  chapters: [
    /* ==================================================================== */
    /* QUAND LE PRIX CHANGE : CHOCS ET INTERVENTION PUBLIQUE                 */
    /* ==================================================================== */
    {
      id: 'marche-variations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'deplacements-courbes',
          title: 'Quand l\'offre ou la demande se déplace : effets sur le prix',
          minutes: 30,
          objectives: [
            "Distinguer un déplacement sur une courbe (variation du prix du bien) et un déplacement de la courbe (variation d'un autre déterminant).",
            "Identifier les facteurs qui déplacent la courbe de demande et ceux qui déplacent la courbe d'offre.",
            "Illustrer et interpréter, à partir d'exemples chiffrés, les effets d'un déplacement de courbe sur le prix et la quantité d'équilibre.",
          ],
          course: [
            {
              heading: "Glisser sur la courbe ou déplacer la courbe",
              paragraphs: [
                "Sur un marché concurrentiel, la courbe de demande est décroissante (plus le prix est bas, plus les acheteurs veulent acheter) et la courbe d'offre est croissante (plus le prix est élevé, plus les producteurs veulent vendre). Le prix d'équilibre est celui pour lequel la quantité offerte est égale à la quantité demandée. Ces courbes sont tracées toutes choses égales par ailleurs : on fait varier le seul prix du bien, en supposant que tout le reste (revenus, goûts, coûts de production...) est fixé.",
                "Il faut donc distinguer deux mouvements. Quand le prix du bien lui-même change, on se déplace le long de la courbe : c'est la quantité demandée (ou offerte) qui varie, la courbe ne bouge pas. Quand un autre facteur change, c'est la courbe entière qui se déplace : à chaque prix, les acheteurs (ou les vendeurs) veulent désormais une quantité différente. On parle alors d'une hausse ou d'une baisse de la demande (ou de l'offre).",
                "Par convention, un déplacement de la courbe vers la droite signifie une hausse (à chaque prix, la quantité est plus grande) et un déplacement vers la gauche une baisse. Pour la courbe d'offre, une baisse se lit aussi comme un déplacement vers le haut : il faut un prix plus élevé pour que les producteurs offrent la même quantité.",
              ],
              box: { label: "Règle", text: "Variation du prix du bien : déplacement SUR la courbe (variation de la quantité demandée ou offerte). Variation d'un autre déterminant : déplacement DE la courbe (variation de la demande ou de l'offre)." },
            },
            {
              heading: "Ce qui déplace la courbe de demande",
              paragraphs: [
                "Le revenu des ménages : pour la plupart des biens, une hausse du revenu augmente la demande (la courbe se déplace vers la droite). Les goûts et les modes : une campagne de publicité réussie ou un effet de mode augmente la demande, une crise sanitaire liée à un produit la fait chuter. Le nombre d'acheteurs : une population plus nombreuse ou l'arrivée de touristes accroît la demande.",
                "Le prix des autres biens joue aussi. Deux biens sont substituables quand l'un peut remplacer l'autre (le thé et le café, le train et l'avion) : si le prix du café augmente, une partie des consommateurs se tourne vers le thé, et la demande de thé augmente. Deux biens sont complémentaires quand ils s'utilisent ensemble (une console et ses jeux, une voiture et le carburant) : si le prix du carburant augmente fortement, la demande de voitures très gourmandes en carburant diminue.",
                "Enfin, les anticipations comptent : si les acheteurs s'attendent à une hausse prochaine du prix, ils avancent leurs achats et la demande augmente dès aujourd'hui.",
              ],
              box: { label: "Repère", text: "La demande augmente (courbe vers la droite) si : le revenu augmente, le bien devient à la mode, les acheteurs sont plus nombreux, le prix d'un substitut augmente, le prix d'un complément baisse, une hausse future du prix est anticipée." },
            },
            {
              heading: "Ce qui déplace la courbe d'offre",
              paragraphs: [
                "Les coûts de production sont le premier déterminant de l'offre. Si le prix des matières premières, de l'énergie ou les salaires augmentent, produire chaque unité coûte plus cher : à prix donné, les producteurs offrent moins, la courbe d'offre se déplace vers la gauche. À l'inverse, une baisse des coûts déplace l'offre vers la droite.",
                "Le progrès technique, qui permet de produire davantage avec les mêmes moyens, abaisse les coûts et augmente l'offre. L'arrivée de nouveaux producteurs sur le marché l'augmente aussi, tandis que la fermeture d'usines la réduit. Dans l'agriculture, les conditions climatiques jouent un grand rôle : une sécheresse, une gelée tardive ou une inondation détruisent une partie des récoltes et réduisent l'offre. Une réglementation plus exigeante (normes de sécurité, d'environnement) peut aussi augmenter les coûts et réduire l'offre.",
              ],
            },
            {
              heading: "Les quatre cas, illustrés par un exemple chiffré",
              paragraphs: [
                "Une hausse de la demande crée, au prix initial, une pénurie (demande supérieure à l'offre) : le prix monte jusqu'à un nouvel équilibre, où le prix et la quantité échangée sont plus élevés. Une baisse de la demande crée un excédent : le prix et la quantité baissent. Une hausse de l'offre crée un excédent : le prix baisse et la quantité échangée augmente. Une baisse de l'offre crée une pénurie : le prix monte et la quantité échangée diminue.",
                "Exemple (données fictives) : sur le marché des glaces d'une ville, la demande est Qd = 100 - 20P et l'offre Qo = 30P - 50 (P en euros, Q en milliers de cornets par jour). À l'équilibre, 100 - 20P = 30P - 50, soit 50P = 150 et P = 3 euros, pour Q = 40 milliers. Une vague de chaleur augmente la demande de 20 milliers à chaque prix : Qd = 120 - 20P. Le nouvel équilibre vérifie 120 - 20P = 30P - 50, soit P = 3,40 euros et Q = 52 milliers. Le prix et la quantité augmentent, comme prévu.",
                "Dans cet exemple, la quantité offerte passe de 40 à 52 milliers : ce n'est pas l'offre qui a augmenté (la courbe d'offre n'a pas bougé), c'est la quantité offerte, parce que les producteurs réagissent à la hausse du prix en se déplaçant le long de leur courbe.",
              ],
              box: { label: "À retenir", text: "Demande en hausse : prix en hausse, quantité en hausse. Demande en baisse : prix en baisse, quantité en baisse. Offre en hausse : prix en baisse, quantité en hausse. Offre en baisse : prix en hausse, quantité en baisse." },
            },
            {
              heading: "Raisonner un choc à la fois",
              paragraphs: [
                "Pour analyser un événement, on procède toujours dans le même ordre : identifier la courbe touchée (offre ou demande), préciser le sens du déplacement (gauche ou droite), puis en déduire l'effet sur le prix et sur la quantité d'équilibre. Le raisonnement suppose que les autres facteurs restent constants.",
                "Quand deux courbes se déplacent en même temps, une des deux conclusions devient incertaine. Si l'offre et la demande augmentent toutes les deux, la quantité échangée augmente sûrement, mais le prix peut monter, baisser ou rester stable selon l'ampleur respective des deux déplacements. On ne peut alors conclure qu'avec des données chiffrées.",
              ],
            },
          ],
          keyPoints: [
            "Une variation du prix du bien entraîne un déplacement sur la courbe ; un autre facteur déplace la courbe elle-même.",
            "Déterminants de la demande : revenu, goûts, nombre d'acheteurs, prix des biens substituables et complémentaires, anticipations.",
            "Déterminants de l'offre : coûts de production, progrès technique, nombre de producteurs, climat, réglementation.",
            "Vers la droite : hausse de l'offre ou de la demande ; vers la gauche : baisse.",
            "Hausse de la demande : prix et quantité augmentent. Baisse de l'offre : le prix augmente, la quantité diminue.",
            "Si les deux courbes se déplacent en même temps, l'effet sur le prix ou sur la quantité dépend de l'ampleur des déplacements.",
          ],
          example: {
            statement: "Sur le marché du chocolat, le prix du cacao, principale matière première, augmente fortement après de mauvaises récoltes. Analysez les effets de cet événement sur le prix et la quantité de chocolat échangée, en justifiant chaque étape.",
            solution: [
              "Identifier la courbe touchée : le cacao est un coût de production des chocolatiers. L'événement touche donc l'offre de chocolat, pas la demande (les goûts et les revenus des consommateurs n'ont pas changé).",
              "Préciser le sens du déplacement : produire une tablette coûte plus cher, donc à chaque prix les producteurs offrent moins. La courbe d'offre se déplace vers la gauche (ou vers le haut).",
              "Raisonner au prix initial : la quantité offerte devient inférieure à la quantité demandée, il y a une pénurie. La concurrence entre acheteurs fait monter le prix.",
              "Décrire l'ajustement : en montant, le prix réduit la quantité demandée (déplacement le long de la courbe de demande) jusqu'à un nouvel équilibre.",
              "Conclusion : le prix d'équilibre du chocolat augmente et la quantité échangée diminue. C'est un choc d'offre négatif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sur le marché du café, indiquez pour chaque événement quelle courbe se déplace, dans quel sens, et l'effet sur le prix et la quantité d'équilibre. (a) Une gelée détruit une partie des récoltes dans un grand pays producteur. (b) Le prix du thé baisse fortement. (c) Une étude très médiatisée vante les bienfaits du café pour la santé. (d) Une nouvelle machine permet de récolter les grains plus vite et à moindre coût.",
              hint: "Demandez-vous d'abord si l'événement change ce que veulent les acheteurs (demande) ou ce que peuvent produire les vendeurs (offre).",
              solution: [
                "(a) La gelée réduit la production possible : l'offre baisse, la courbe d'offre se déplace vers la gauche. Le prix augmente et la quantité échangée diminue.",
                "(b) Le thé est un substitut du café. Devenu moins cher, il attire une partie des buveurs de café : la demande de café baisse, la courbe de demande se déplace vers la gauche. Le prix et la quantité de café diminuent.",
                "(c) L'étude modifie les goûts en faveur du café : la demande augmente, la courbe de demande se déplace vers la droite. Le prix et la quantité augmentent.",
                "(d) La machine abaisse les coûts de production (progrès technique) : l'offre augmente, la courbe d'offre se déplace vers la droite. Le prix baisse et la quantité échangée augmente.",
                "Résultat : (a) offre en baisse, prix en hausse, quantité en baisse ; (b) demande en baisse, prix et quantité en baisse ; (c) demande en hausse, prix et quantité en hausse ; (d) offre en hausse, prix en baisse, quantité en hausse.",
              ],
            },
            {
              level: 2,
              statement: "Marché des vélos d'une ville (données fictives). Prix en euros : 100, 150, 200, 250, 300. Quantités demandées : 500, 400, 300, 200, 100. Quantités offertes : 100, 200, 300, 400, 500. (1) Déterminez l'équilibre. (2) La ville aménage de nombreuses pistes cyclables : à chaque prix, la quantité demandée augmente de 200 vélos. Quelle courbe se déplace, et dans quel sens ? (3) Déterminez le nouvel équilibre. (4) Calculez les taux de variation du prix et de la quantité d'équilibre. (5) Les vendeurs proposent désormais 400 vélos au lieu de 300 : l'offre a-t-elle augmenté ? Justifiez.",
              hint: "L'équilibre se trouve là où les deux colonnes de quantités sont égales. Pour un taux de variation : (valeur d'arrivée - valeur de départ) ÷ valeur de départ × 100.",
              solution: [
                "(1) Les quantités offerte et demandée sont égales à 300 pour un prix de 200 euros : l'équilibre initial est P = 200 euros et Q = 300 vélos.",
                "(2) Les pistes cyclables rendent le vélo plus attractif, ce n'est pas le prix du vélo qui a changé : la courbe de demande se déplace vers la droite (hausse de la demande).",
                "(3) Nouvelles quantités demandées : 700, 600, 500, 400, 300. Elles égalent les quantités offertes pour un prix de 250 euros (400 = 400). Nouvel équilibre : P = 250 euros, Q = 400 vélos.",
                "(4) Prix : (250 - 200) ÷ 200 × 100 = 25 %. Quantité : (400 - 300) ÷ 300 × 100 ≈ 33,3 %.",
                "(5) Non : la courbe d'offre n'a pas bougé (à 200 euros, les vendeurs offrent toujours 300 vélos). La quantité offerte augmente parce que le prix est passé à 250 euros : c'est un déplacement le long de la courbe d'offre.",
                "Résultat : équilibre initial (200 euros ; 300 vélos), nouvel équilibre (250 euros ; 400 vélos), soit +25 % pour le prix et environ +33,3 % pour la quantité, par une hausse de la demande.",
              ],
            },
            {
              level: 3,
              statement: "Document (données fictives) : sur le marché national du blé, la demande est Qd = 200 - 10P et l'offre Qo = 10P - 40, avec P le prix en euros par sac et Q en millions de sacs. Une sécheresse réduit l'offre de 40 millions de sacs à chaque prix. (1) Calculez l'équilibre avant la sécheresse. (2) Écrivez la nouvelle fonction d'offre et calculez le nouvel équilibre. (3) Calculez la recette totale des producteurs (prix × quantité) avant et après. (4) En un paragraphe argumenté, montrez à l'aide de vos résultats que la sécheresse pénalise les consommateurs et expliquez ce qu'elle change pour les producteurs.",
              hint: "Une baisse de l'offre de 40 à chaque prix s'écrit en retranchant 40 à la fonction d'offre. Résolvez ensuite Qd = Qo.",
              solution: [
                "(1) 200 - 10P = 10P - 40, donc 20P = 240 et P = 12 euros. Q = 200 - 10 × 12 = 80 millions de sacs (vérification : 10 × 12 - 40 = 80).",
                "(2) Nouvelle offre : Qo = 10P - 80. Équilibre : 200 - 10P = 10P - 80, donc 20P = 280 et P = 14 euros. Q = 200 - 140 = 60 millions de sacs (vérification : 140 - 80 = 60).",
                "(3) Recette avant : 12 × 80 = 960 millions d'euros. Recette après : 14 × 60 = 840 millions d'euros.",
                "(4) La sécheresse est un choc d'offre négatif : la courbe d'offre se déplace vers la gauche. Le prix passe de 12 à 14 euros, soit (14 - 12) ÷ 12 × 100 ≈ +16,7 %, et la quantité échangée de 80 à 60 millions de sacs, soit -25 %.",
                "Les consommateurs sont pénalisés deux fois : ils paient chaque sac plus cher et ils en obtiennent moins. Une partie des acheteurs, qui achetaient à 12 euros, renonce à acheter à 14 euros.",
                "Pour les producteurs pris ensemble, la hausse du prix ne compense pas la baisse des quantités : la recette totale recule de 960 à 840 millions d'euros. Mais les situations sont inégales : un agriculteur dont la récolte a été épargnée vend au prix plus élevé et peut y gagner, alors que celui qui a perdu sa récolte y perd.",
                "Conclusion : le prix augmente d'environ 16,7 %, la quantité baisse de 25 %, les consommateurs y perdent et la recette totale des producteurs diminue de 120 millions d'euros.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Déplacements sur les courbes et des courbes.",
            statements: [
              { text: "Une hausse du prix d'un bien déplace sa courbe de demande vers la gauche.", true: false, why: "Une variation du prix du bien entraîne un déplacement le long de la courbe : la quantité demandée baisse, la courbe ne bouge pas." },
              { text: "Une hausse du revenu des ménages déplace en général la courbe de demande vers la droite.", true: true, why: "Pour la plupart des biens, un revenu plus élevé permet d'acheter davantage à chaque prix." },
              { text: "Si le prix des matières premières augmente, la courbe d'offre se déplace vers la droite.", true: false, why: "Les coûts augmentent : à chaque prix, les producteurs offrent moins, la courbe d'offre se déplace vers la gauche." },
              { text: "Un progrès technique qui réduit les coûts fait baisser le prix d'équilibre et augmenter la quantité échangée.", true: true, why: "L'offre augmente (courbe vers la droite) : il apparaît un excédent au prix initial, et le prix baisse." },
              { text: "Une hausse de la demande fait baisser le prix d'équilibre.", true: false, why: "Une hausse de la demande crée une pénurie au prix initial : le prix d'équilibre augmente." },
              { text: "Si le prix d'un bien substituable augmente, la demande du bien étudié augmente.", true: true, why: "Une partie des acheteurs se reporte sur le bien étudié, devenu relativement moins cher." },
              { text: "Si l'offre et la demande augmentent en même temps, le prix d'équilibre augmente forcément.", true: false, why: "La quantité augmente sûrement, mais l'effet sur le prix dépend de l'ampleur des deux déplacements." },
            ],
          },
          quiz: [
            {
              q: "Le prix du beurre augmente. Que se passe-t-il sur le marché du beurre ?",
              options: [
                "La courbe de demande de beurre se déplace vers la gauche",
                "La quantité demandée baisse, le long de la courbe",
                "La courbe d'offre de beurre se déplace vers la droite",
                "La demande de beurre augmente car il est devenu plus rare",
              ],
              answer: 1,
              why: "La variation du prix du bien lui-même provoque un déplacement le long de la courbe de demande, pas un déplacement de la courbe.",
            },
            {
              q: "Le prix des consoles de jeux baisse fortement. Quel est l'effet sur la demande de jeux vidéo, bien complémentaire ?",
              options: [
                "Elle augmente",
                "Elle diminue, car les ménages dépensent leur argent dans les consoles",
                "Elle ne change pas, car le prix des jeux vidéo n'a pas varié",
              ],
              answer: 0,
              why: "Les consoles et les jeux s'utilisent ensemble : des consoles moins chères en font vendre davantage, ce qui augmente la demande de jeux.",
            },
            {
              q: "Une hausse du prix de l'énergie touche les boulangeries. Quel est l'effet sur le marché du pain ?",
              options: [
                "Le prix baisse et la quantité augmente",
                "Le prix et la quantité augmentent tous les deux",
                "Le prix augmente et la quantité diminue",
                "Le prix et la quantité diminuent tous les deux",
              ],
              answer: 2,
              why: "L'énergie est un coût de production : l'offre de pain baisse (courbe vers la gauche), le prix monte et la quantité échangée diminue.",
            },
            {
              q: "Dans le modèle, que signifie l'expression « toutes choses égales par ailleurs » ?",
              options: [
                "Tous les prix du marché sont égaux entre eux",
                "L'offre est toujours égale à la demande sur le marché",
                "Tous les acheteurs ont exactement le même revenu et les mêmes goûts",
                "On fait varier un seul facteur en supposant les autres fixes",
              ],
              answer: 3,
              why: "Le raisonnement isole l'effet d'un facteur : les autres déterminants sont supposés constants.",
            },
            {
              q: "Sur un marché, l'offre et la demande augmentent en même temps. Que peut-on affirmer sans données chiffrées ?",
              options: [
                "Le prix d'équilibre augmente forcément",
                "La quantité échangée augmente",
                "Le prix et la quantité restent stables",
                "La quantité échangée diminue forcément",
              ],
              answer: 1,
              why: "Les deux déplacements vers la droite augmentent la quantité ; leurs effets sur le prix sont opposés, donc l'effet sur le prix est indéterminé.",
            },
          ],
          trap: "Confondre une variation de la quantité demandée (déplacement le long de la courbe, dû au prix du bien) et une variation de la demande (déplacement de la courbe, dû à un autre facteur), par exemple en écrivant qu'une hausse du prix « fait baisser la demande ».",
          method: "Pour chaque événement, écrivez trois lignes dans cet ordre : quelle courbe est touchée et pourquoi, dans quel sens elle se déplace, quel est l'effet sur le prix puis sur la quantité. Vérifiez enfin avec le tableau des quatre cas.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'taxe-subvention',
          title: 'Les effets d\'une taxe ou d\'une subvention',
          minutes: 35,
          objectives: [
            "Illustrer et interpréter, par un exemple chiffré, les effets de la mise en œuvre d'une taxe forfaitaire sur le prix et la quantité d'équilibre.",
            "Calculer le prix payé par les consommateurs, le prix reçu par les producteurs et la recette fiscale.",
            "Expliquer les effets d'une subvention par unité et son coût pour les finances publiques.",
            "Identifier les objectifs de l'intervention publique sur les prix.",
          ],
          course: [
            {
              heading: "Pourquoi l'État intervient-il sur les prix ?",
              paragraphs: [
                "L'État et les collectivités publiques n'interviennent pas seulement en produisant des services non marchands : ils agissent aussi sur les prix des marchés, en prélevant des taxes ou en versant des subventions. Une taxe peut avoir pour but de financer les dépenses publiques (une recette fiscale) ou de modifier les comportements : rendre plus cher un produit nuisible pour la santé (le tabac) ou pour l'environnement (les énergies fossiles) afin d'en réduire la consommation.",
                "Une subvention poursuit souvent l'objectif inverse : encourager la production ou la consommation d'un bien jugé utile, par exemple une aide à l'achat d'un véhicule moins polluant ou à des travaux d'isolation des logements. Pour comprendre les effets de ces interventions, on utilise le modèle de l'offre et de la demande.",
              ],
            },
            {
              heading: "La taxe forfaitaire : un déplacement de la courbe d'offre",
              paragraphs: [
                "Une taxe forfaitaire (ou taxe unitaire) est un montant fixe prélevé sur chaque unité vendue, quel que soit le prix : par exemple 2 euros par paquet. Supposons qu'elle soit versée à l'État par les producteurs. Pour chaque unité, le vendeur ne garde que le prix payé par l'acheteur moins la taxe. Pour être prêt à offrir la même quantité qu'avant, il doit donc obtenir un prix plus élevé exactement du montant de la taxe.",
                "La courbe d'offre se déplace donc vers le haut, d'une hauteur égale au montant de la taxe (ce qui revient à un déplacement vers la gauche : à chaque prix payé par l'acheteur, les producteurs offrent moins). La courbe de demande, elle, ne bouge pas : les acheteurs réagissent au prix qu'ils paient, et se déplacent le long de leur courbe.",
              ],
              box: { label: "Définition", text: "Taxe forfaitaire (ou unitaire) : montant fixe prélevé par l'État sur chaque unité vendue. Si elle est payée par les producteurs, la courbe d'offre se déplace vers le haut du montant de la taxe." },
            },
            {
              heading: "Les effets de la taxe : qui la paie vraiment ?",
              paragraphs: [
                "Au nouvel équilibre, trois effets apparaissent. Le prix payé par les consommateurs augmente. Le prix effectivement reçu par les producteurs (prix payé moins taxe) diminue. La quantité échangée diminue. L'État perçoit une recette fiscale égale au montant de la taxe multiplié par la nouvelle quantité échangée.",
                "Exemple (données fictives) : demande Qd = 100 - 2P et offre Qo = 3P - 50. Sans taxe, 100 - 2P = 3P - 50 donne P = 30 euros et Q = 40 unités. L'État instaure une taxe de 5 euros par unité, payée par les producteurs : quand l'acheteur paie P, le vendeur reçoit P - 5, donc l'offre devient Qo = 3(P - 5) - 50 = 3P - 65. Le nouvel équilibre vérifie 100 - 2P = 3P - 65, soit 5P = 165, P = 33 euros et Q = 34 unités. Le producteur reçoit 33 - 5 = 28 euros. La recette fiscale vaut 5 × 34 = 170 euros.",
                "Le prix payé par les consommateurs n'augmente pas de 5 euros, mais de 3 euros ; le prix reçu par les producteurs baisse de 2 euros. La charge de la taxe est donc partagée : 3 euros par unité pour les acheteurs, 2 euros pour les vendeurs. C'est ce que les économistes appellent l'incidence fiscale : celui qui verse la taxe à l'État n'est pas forcément celui qui la supporte. Le partage dépend de la sensibilité des acheteurs et des vendeurs au prix : le côté du marché qui peut le moins renoncer à acheter (ou à vendre) en supporte la plus grande part.",
              ],
              box: { label: "Formule", text: "Prix reçu par le producteur = prix payé par le consommateur - taxe. Recette fiscale = taxe par unité × quantité échangée après la taxe. Part de la taxe supportée par les consommateurs = hausse du prix payé ÷ taxe." },
            },
            {
              heading: "La subvention : l'effet inverse, avec un coût public",
              paragraphs: [
                "Une subvention unitaire est une somme versée par l'État au producteur pour chaque unité vendue. Le producteur reçoit le prix payé par l'acheteur plus la subvention : il est prêt à offrir davantage à chaque prix. La courbe d'offre se déplace vers le bas du montant de la subvention (vers la droite). Le prix payé par les consommateurs baisse, le prix reçu par les producteurs (prix plus subvention) augmente, et la quantité échangée augmente.",
                "Avec les mêmes données et une subvention de 5 euros par unité, l'offre devient Qo = 3(P + 5) - 50 = 3P - 35. L'équilibre vérifie 100 - 2P = 3P - 35, soit P = 27 euros et Q = 46 unités. Le producteur reçoit 27 + 5 = 32 euros. La subvention coûte à l'État 5 × 46 = 230 euros. L'avantage est, ici aussi, partagé : 3 euros de baisse pour les acheteurs, 2 euros de hausse pour les vendeurs.",
                "Taxe et subvention ont donc des effets symétriques sur les prix et les quantités, mais pas sur les finances publiques : la taxe rapporte une recette, la subvention représente une dépense, financée par d'autres prélèvements.",
              ],
              box: { label: "À retenir", text: "Taxe : prix payé en hausse, prix reçu en baisse, quantité en baisse, recette pour l'État. Subvention : prix payé en baisse, prix reçu en hausse, quantité en hausse, dépense pour l'État." },
            },
          ],
          keyPoints: [
            "Une taxe forfaitaire est un montant fixe par unité vendue ; payée par les producteurs, elle déplace la courbe d'offre vers le haut de son montant.",
            "Avec une taxe : le prix payé par les consommateurs augmente, le prix reçu par les producteurs baisse, la quantité échangée diminue.",
            "Recette fiscale = taxe unitaire × nouvelle quantité échangée.",
            "La charge de la taxe est en général partagée entre acheteurs et vendeurs : c'est l'incidence fiscale.",
            "Une subvention unitaire déplace l'offre vers le bas : prix payé en baisse, quantité en hausse, coût = subvention × quantité.",
            "L'État taxe pour financer ses dépenses ou décourager une consommation ; il subventionne pour encourager une production ou une consommation.",
          ],
          example: {
            statement: "Sur un marché (données fictives), la demande est Qd = 60 - P et l'offre Qo = P - 20. L'État instaure une taxe de 4 euros par unité, payée par les producteurs. Calculez l'équilibre avant et après la taxe, le prix reçu par les producteurs, la recette fiscale et le partage de la charge de la taxe.",
            solution: [
              "Équilibre sans taxe : 60 - P = P - 20, donc 2P = 80 et P = 40 euros ; Q = 60 - 40 = 20 unités.",
              "Avec la taxe, le producteur reçoit P - 4 : l'offre devient Qo = (P - 4) - 20 = P - 24.",
              "Nouvel équilibre : 60 - P = P - 24, donc 2P = 84 et P = 42 euros ; Q = 60 - 42 = 18 unités (vérification : 42 - 24 = 18).",
              "Prix reçu par les producteurs : 42 - 4 = 38 euros.",
              "Recette fiscale : 4 × 18 = 72 euros.",
              "Partage : le prix payé augmente de 2 euros et le prix reçu baisse de 2 euros. Ici, la taxe est supportée à moitié par les consommateurs et à moitié par les producteurs.",
              "Réponse : on passe de (40 euros ; 20 unités) à un prix payé de 42 euros pour 18 unités ; les producteurs reçoivent 38 euros, l'État perçoit 72 euros et la charge est partagée à parts égales.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des mesures suivantes, indiquez s'il s'agit d'une taxe ou d'une subvention, quelle courbe se déplace et dans quel sens, puis l'effet sur le prix payé par les consommateurs et sur la quantité échangée. (a) L'État augmente la taxe sur chaque paquet de cigarettes vendu. (b) L'État verse aux producteurs une aide pour chaque panneau solaire vendu. (c) L'État crée une taxe fixe sur chaque billet d'avion vendu.",
              hint: "Une taxe rend la production moins avantageuse pour les vendeurs, une subvention la rend plus avantageuse : pensez au déplacement de la courbe d'offre.",
              solution: [
                "(a) C'est une taxe. La courbe d'offre de cigarettes se déplace vers le haut (vers la gauche). Le prix payé par les fumeurs augmente et la quantité vendue diminue, ce qui est le but recherché pour la santé publique.",
                "(b) C'est une subvention. La courbe d'offre de panneaux solaires se déplace vers le bas (vers la droite). Le prix payé par les acheteurs baisse et la quantité échangée augmente.",
                "(c) C'est une taxe forfaitaire. La courbe d'offre de billets d'avion se déplace vers le haut. Le prix payé par les voyageurs augmente et le nombre de billets vendus diminue.",
                "Résultat : (a) et (c) sont des taxes (prix en hausse, quantité en baisse) ; (b) est une subvention (prix en baisse, quantité en hausse).",
              ],
            },
            {
              level: 2,
              statement: "Marché d'un produit (données fictives). Prix en euros : 6, 7, 8, 9, 10, 11. Quantités demandées : 800, 750, 700, 650, 600, 550. Quantités offertes sans taxe : 500, 600, 700, 800, 900, 1 000. (1) Déterminez l'équilibre sans taxe. (2) L'État instaure une taxe de 3 euros par unité payée par les producteurs : un producteur qui reçoit un prix P de l'acheteur garde P - 3 euros, et offre donc la quantité qu'il offrait auparavant au prix P - 3. Calculez les quantités offertes avec la taxe pour les prix de 9, 10 et 11 euros. (3) Déterminez le nouvel équilibre, le prix reçu par les producteurs et la recette fiscale. (4) Qui supporte la plus grande part de la taxe ?",
              hint: "Avec la taxe, au prix de 10 euros, le producteur garde 10 - 3 = 7 euros : il offre donc ce qu'il offrait à 7 euros sans taxe.",
              solution: [
                "(1) Sans taxe, les quantités offerte et demandée sont égales à 700 pour un prix de 8 euros : équilibre P = 8 euros, Q = 700 unités.",
                "(2) Au prix de 9 euros, le producteur garde 6 euros et offre 500 unités. Au prix de 10 euros, il garde 7 euros et offre 600 unités. Au prix de 11 euros, il garde 8 euros et offre 700 unités.",
                "(3) Comparons avec la demande : à 9 euros, 650 demandés pour 500 offerts (pénurie) ; à 11 euros, 550 demandés pour 700 offerts (excédent) ; à 10 euros, 600 demandés pour 600 offerts. Le nouvel équilibre est P = 10 euros et Q = 600 unités.",
                "Prix reçu par les producteurs : 10 - 3 = 7 euros. Recette fiscale : 3 × 600 = 1 800 euros.",
                "(4) Le prix payé par les consommateurs augmente de 10 - 8 = 2 euros ; le prix reçu par les producteurs baisse de 8 - 7 = 1 euro. Vérification : 2 + 1 = 3 euros, soit le montant de la taxe. Les consommateurs en supportent 2 ÷ 3 ≈ 67 %, les producteurs environ 33 %.",
                "Résultat : le prix payé passe de 8 à 10 euros, la quantité de 700 à 600 unités, les producteurs reçoivent 7 euros, l'État perçoit 1 800 euros, et les consommateurs supportent les deux tiers de la taxe.",
              ],
            },
            {
              level: 3,
              statement: "Document (données fictives) : sur le marché des boissons sucrées d'un pays, la demande est Qd = 120 - 10P et l'offre Qo = 20P - 30 (P en euros par litre, Q en millions de litres). Pour lutter contre l'obésité, le gouvernement envisage une taxe de 1,50 euro par litre payée par les producteurs. (1) Calculez l'équilibre sans taxe. (2) Calculez le nouvel équilibre, le prix reçu par les producteurs et la recette fiscale. (3) Calculez le taux de variation de la quantité consommée. (4) En un paragraphe argumenté, montrez que cette taxe peut atteindre son objectif de santé publique, en précisant qui en supporte la charge et ce que l'État pourrait faire de la recette.",
              hint: "Avec la taxe, l'offre s'écrit Qo = 20(P - 1,5) - 30. Développez avant de résoudre Qd = Qo.",
              solution: [
                "(1) 120 - 10P = 20P - 30, donc 30P = 150 et P = 5 euros ; Q = 120 - 50 = 70 millions de litres (vérification : 100 - 30 = 70).",
                "(2) Offre avec taxe : Qo = 20(P - 1,5) - 30 = 20P - 60. Équilibre : 120 - 10P = 20P - 60, donc 30P = 180 et P = 6 euros ; Q = 120 - 60 = 60 millions de litres (vérification : 120 - 60 = 60). Prix reçu par les producteurs : 6 - 1,5 = 4,50 euros. Recette fiscale : 1,5 × 60 = 90 millions d'euros.",
                "(3) Variation de la quantité : (60 - 70) ÷ 70 × 100 ≈ -14,3 %.",
                "(4) Argument principal : la taxe déplace la courbe d'offre vers le haut, ce qui augmente le prix payé par les consommateurs de 5 à 6 euros. Les acheteurs réagissent en se déplaçant le long de leur courbe de demande : la consommation baisse d'environ 14,3 %, ce qui va dans le sens de l'objectif de santé publique.",
                "Charge de la taxe : sur 1,50 euro, les consommateurs en supportent 1 euro (hausse du prix payé), soit les deux tiers, et les producteurs 0,50 euro (baisse du prix reçu), soit un tiers. C'est précisément parce que le prix payé augmente que la consommation diminue.",
                "Usage de la recette : les 90 millions d'euros peuvent financer des actions de prévention ou le système de santé, ce qui renforce l'effet recherché. On peut nuancer : si les consommateurs étaient très peu sensibles au prix, la consommation baisserait peu et la taxe jouerait surtout un rôle de recette.",
                "Conclusion : la taxe fait passer le prix de 5 à 6 euros et la consommation de 70 à 60 millions de litres (environ -14,3 %), rapporte 90 millions d'euros et pèse pour les deux tiers sur les consommateurs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'analyse d'une taxe forfaitaire payée par les producteurs.",
            items: [
              "Calculer l'équilibre initial, sans taxe, en résolvant Qd = Qo",
              "Introduire la taxe : écrire la nouvelle offre en remplaçant P par P moins la taxe",
              "Résoudre Qd = nouvelle offre pour trouver le prix payé et la nouvelle quantité",
              "Soustraire la taxe du prix payé pour obtenir le prix reçu par les producteurs",
              "Comparer ces deux prix au prix initial pour répartir la charge de la taxe",
              "Conclure sur les effets de la taxe : prix, quantité, recette fiscale et partage de la charge",
            ],
          },
          quiz: [
            {
              q: "Une taxe forfaitaire de 2 euros par unité est payée par les producteurs. Comment se déplace la courbe d'offre ?",
              options: [
                "Vers le bas, de 2 euros",
                "Vers le haut, de 2 euros",
                "Elle ne bouge pas, c'est la demande qui se déplace vers la gauche",
              ],
              answer: 1,
              why: "Pour offrir la même quantité, les producteurs doivent obtenir 2 euros de plus par unité : la courbe d'offre monte du montant de la taxe.",
            },
            {
              q: "Après une taxe de 5 euros par unité, le prix payé par les consommateurs passe de 30 à 33 euros. Quel prix reçoivent les producteurs ?",
              options: ["33 euros", "30 euros", "25 euros", "28 euros"],
              answer: 3,
              why: "Prix reçu = prix payé - taxe = 33 - 5 = 28 euros.",
            },
            {
              q: "Une taxe de 3 euros par unité est instaurée ; la quantité échangée passe de 1 000 à 800 unités. Quelle est la recette fiscale ?",
              options: ["2 400 euros", "3 000 euros", "600 euros", "800 euros"],
              answer: 0,
              why: "La recette se calcule sur la quantité échangée après la taxe : 3 × 800 = 2 400 euros.",
            },
            {
              q: "Quel est l'effet d'une subvention unitaire versée aux producteurs ?",
              options: [
                "Le prix payé et la quantité échangée augmentent",
                "Le prix payé augmente et la quantité échangée baisse",
                "Le prix payé baisse et la quantité échangée augmente",
                "Le prix payé et la quantité échangée baissent",
              ],
              answer: 2,
              why: "La subvention déplace l'offre vers le bas : le prix payé par les acheteurs baisse et la quantité échangée augmente.",
            },
            {
              q: "Que désigne l'incidence fiscale ?",
              options: [
                "Le partage réel de la charge d'une taxe entre acheteurs et vendeurs",
                "Le montant total des impôts perçus par l'État en une année",
                "Le taux de la taxe sur la valeur ajoutée appliqué à un produit donné",
              ],
              answer: 0,
              why: "Celui qui verse la taxe n'est pas forcément celui qui la supporte : l'incidence fiscale décrit qui la supporte réellement, par la variation des prix.",
            },
          ],
          trap: "Croire que le prix payé par les consommateurs augmente toujours du montant total de la taxe : en général, la hausse du prix payé est inférieure à la taxe, car les producteurs en supportent une partie par la baisse du prix qu'ils reçoivent.",
          method: "Pour ne pas vous perdre, écrivez toujours trois prix : le prix d'équilibre initial, le prix payé après la taxe, le prix reçu par les producteurs (prix payé - taxe). Vérifiez enfin que la différence entre le prix payé et le prix reçu est bien égale à la taxe.",
        },
      ],
    },
    /* ==================================================================== */
    /* COMMENT DEVENONS-NOUS DES ACTEURS SOCIAUX ?                           */
    /* ==================================================================== */
    {
      id: 'socialisation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'socialisation-normes',
          title: 'La socialisation : apprendre normes et valeurs',
          minutes: 30,
          objectives: [
            "Définir la socialisation comme le processus d'apprentissage et d'intériorisation des normes et des valeurs.",
            "Distinguer normes et valeurs, et identifier les sanctions qui font respecter les normes.",
            "Distinguer socialisation primaire et socialisation secondaire.",
            "Illustrer les mécanismes de la socialisation : inculcation, imitation, interaction.",
          ],
          course: [
            {
              heading: "On ne naît pas acteur social, on le devient",
              paragraphs: [
                "À la naissance, un être humain ne sait ni parler, ni se tenir à table, ni saluer, ni se comporter en classe. Tout cela s'apprend au contact des autres. Les rares cas d'enfants ayant grandi presque sans contact humain, comme Victor, découvert vers 1800 dans l'Aveyron et éduqué ensuite par le médecin Jean Itard, montrent que, sans vie sociale, le langage et les manières d'être ne se développent pas d'eux-mêmes.",
                "Les sociologues appellent socialisation le processus par lequel les individus apprennent et intériorisent les manières de penser, de sentir et d'agir propres à leur société et à leurs groupes d'appartenance. Ce processus construit leur identité sociale et leur permet de vivre avec les autres. Émile Durkheim, l'un des fondateurs de la sociologie, voyait dans l'éducation une « socialisation méthodique de la jeune génération ».",
              ],
              box: { label: "Définition", text: "La socialisation est le processus d'apprentissage et d'intériorisation des normes, des valeurs et des rôles qui permet à un individu de s'intégrer à la société et de construire son identité sociale." },
            },
            {
              heading: "Valeurs et normes",
              paragraphs: [
                "Les valeurs sont des idéaux, des principes qu'une société ou un groupe juge désirables et qui orientent les actions : la liberté, l'égalité, la solidarité, le respect d'autrui, la réussite, l'honnêteté. Elles sont générales et abstraites. La devise de la République, « Liberté, Égalité, Fraternité », énonce ainsi des valeurs.",
                "Les normes sont des règles de conduite, explicites ou implicites, qui traduisent les valeurs en comportements concrets. La valeur de respect d'autrui se traduit par des normes comme saluer, ne pas couper la parole ou attendre son tour. On distingue les normes formelles, écrites et souvent juridiques (le Code de la route, le règlement intérieur du lycée), et les normes informelles, non écrites (la politesse, les codes vestimentaires, les usages à table).",
                "Les normes varient dans le temps et dans l'espace : la façon de se saluer (bise, poignée de main, inclinaison du buste), l'âge auquel on quitte le domicile de ses parents ou les tenues jugées convenables diffèrent selon les sociétés et les époques. Cela montre qu'elles sont apprises et non naturelles.",
              ],
              box: { label: "À retenir", text: "Valeur : idéal jugé désirable (le respect d'autrui). Norme : règle de conduite concrète qui en découle (dire bonjour). Une norme peut être formelle (écrite) ou informelle (non écrite)." },
            },
            {
              heading: "Les sanctions et l'intériorisation",
              paragraphs: [
                "Le respect des normes est encouragé par des sanctions, c'est-à-dire des réactions du groupe à un comportement. Elles sont positives (récompenses : félicitations, bonne note, applaudissements) ou négatives (punitions : amende, exclusion, moquerie). Elles sont formelles quand une institution les prévoit et les applique (une amende pour excès de vitesse, un avertissement du conseil de classe) et informelles quand elles viennent spontanément de l'entourage (un regard réprobateur, un compliment). L'ensemble de ces moyens forme le contrôle social.",
                "Pourtant, la plupart du temps, nous respectons les normes sans penser aux sanctions : nous les avons intériorisées. Une norme intériorisée paraît évidente, comme une seconde nature : on ne se demande pas chaque matin s'il faut s'habiller pour sortir. C'est le signe que la socialisation a réussi : la contrainte extérieure est devenue une disposition intérieure.",
              ],
            },
            {
              heading: "Comment apprend-on ? Mécanismes et étapes",
              paragraphs: [
                "La socialisation passe par trois mécanismes qui se combinent. L'inculcation est un apprentissage explicite et parfois contraignant : consignes, explications, récompenses et punitions (« dis merci », « range ta chambre »). L'imitation consiste à observer et reproduire les comportements des autres, souvent sans en avoir conscience. L'interaction désigne les échanges dans lesquels l'individu essaie, se trompe, ajuste son comportement aux réactions d'autrui, par exemple dans le jeu ou dans un groupe d'amis.",
                "Socialiser, c'est aussi apprendre des statuts et des rôles. Un statut est une position sociale (fille, élève, capitaine d'équipe, salarié) ; un rôle est l'ensemble des comportements attendus de celui qui occupe ce statut. Chacun occupe plusieurs statuts et apprend à jouer plusieurs rôles.",
                "La socialisation dure toute la vie. Les sociologues Peter Berger et Thomas Luckmann (1966) distinguent la socialisation primaire, celle de l'enfance, menée surtout par la famille et l'école, qui forme la personnalité de base, et la socialisation secondaire, celle de l'adolescence et de l'âge adulte, qui permet d'entrer dans de nouveaux groupes : le monde du travail (socialisation professionnelle), la vie de couple, une association. La socialisation secondaire s'appuie sur la primaire, qu'elle peut prolonger ou transformer.",
              ],
              box: { label: "Repère", text: "Socialisation primaire : enfance, famille et école, construction de la personnalité de base. Socialisation secondaire : adolescence et âge adulte, travail, couple, engagements, adaptation à de nouveaux groupes." },
            },
          ],
          keyPoints: [
            "La socialisation est l'apprentissage et l'intériorisation des normes, des valeurs et des rôles d'une société.",
            "Valeur : idéal jugé désirable. Norme : règle de conduite concrète, formelle (écrite) ou informelle.",
            "Les sanctions, positives ou négatives, formelles ou informelles, assurent le contrôle social.",
            "Une norme intériorisée est respectée sans contrainte extérieure : elle paraît naturelle.",
            "Trois mécanismes : inculcation, imitation, interaction.",
            "Socialisation primaire (enfance) et secondaire (adolescence et âge adulte) : la socialisation dure toute la vie.",
          ],
          example: {
            statement: "Situation : au lycée, Hugo arrive en retard en cours pour la troisième fois du mois. Il doit passer par la vie scolaire, qui inscrit le retard dans son dossier. Quand il entre en classe, plusieurs camarades soupirent bruyamment. Identifiez la valeur, la norme et les sanctions présentes dans cette situation.",
            solution: [
              "Repérer la norme : arriver à l'heure en cours. Elle est formelle, car elle figure dans le règlement intérieur du lycée.",
              "Repérer la valeur qui la fonde : le respect d'autrui (ne pas déranger le cours ni le professeur) et, plus largement, le sens des responsabilités et du travail.",
              "Identifier la première sanction : l'inscription du retard par la vie scolaire est une sanction négative et formelle, prévue et appliquée par l'institution.",
              "Identifier la seconde sanction : les soupirs des camarades sont une sanction négative et informelle, spontanée, qui exprime la désapprobation du groupe.",
              "Conclure : la situation montre deux formes du contrôle social qui poussent Hugo à intérioriser la norme de ponctualité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque élément, indiquez s'il s'agit d'une valeur ou d'une norme ; pour les normes, précisez si elles sont formelles ou informelles. (a) La liberté. (b) S'arrêter au feu rouge. (c) La solidarité. (d) Céder sa place assise à une personne âgée dans le bus. (e) Ne pas utiliser son téléphone en classe, comme le prévoit le règlement intérieur. (f) L'égalité entre les femmes et les hommes.",
              hint: "Une valeur est un idéal général ; une norme est une règle qui dit comment se comporter dans une situation précise.",
              solution: [
                "(a) La liberté est une valeur : un idéal général.",
                "(b) S'arrêter au feu rouge est une norme formelle, écrite dans le Code de la route et sanctionnée par une amende.",
                "(c) La solidarité est une valeur.",
                "(d) Céder sa place à une personne âgée est une norme informelle : aucun texte ne l'impose partout, mais elle est attendue par politesse (elle traduit les valeurs de respect et de solidarité).",
                "(e) Ne pas utiliser son téléphone en classe est une norme formelle, inscrite dans le règlement intérieur.",
                "(f) L'égalité entre les femmes et les hommes est une valeur.",
                "Résultat : valeurs (a), (c), (f) ; normes formelles (b), (e) ; norme informelle (d).",
              ],
            },
            {
              level: 2,
              statement: "Classez chaque sanction selon deux critères (positive ou négative, formelle ou informelle) : (a) une amende pour stationnement interdit ; (b) les félicitations du conseil de classe ; (c) des applaudissements après un exposé ; (d) des moqueries sur une tenue jugée démodée ; (e) une exclusion temporaire du lycée ; (f) un pouce levé sur une photo publiée en ligne. Expliquez ensuite pourquoi la plupart des individus respectent les normes même quand aucune sanction n'est possible.",
              hint: "Une sanction est formelle si une institution l'a prévue et l'applique selon une procédure ; sinon, elle est informelle.",
              solution: [
                "(a) Amende : négative et formelle (prévue par la loi, appliquée par une autorité).",
                "(b) Félicitations du conseil de classe : positive et formelle (prévue par l'institution scolaire).",
                "(c) Applaudissements : positive et informelle (réaction spontanée du public).",
                "(d) Moqueries : négative et informelle (réaction spontanée des pairs).",
                "(e) Exclusion temporaire : négative et formelle (décidée selon une procédure disciplinaire).",
                "(f) Pouce levé : positive et informelle (approbation spontanée des autres utilisateurs).",
                "Explication : au cours de leur socialisation, les individus ont intériorisé les normes ; elles leur paraissent évidentes et ils les respectent sans calcul, parce qu'elles font partie de leur manière d'être. Le contrôle social extérieur devient alors un contrôle intérieur.",
                "Résultat : négatives et formelles (a) et (e) ; positive et formelle (b) ; positives et informelles (c) et (f) ; négative et informelle (d).",
              ],
            },
            {
              level: 3,
              statement: "Situation (fictive) : Inès, 23 ans, vient d'obtenir son diplôme d'infirmière et commence à travailler dans un service hospitalier. Elle découvre des horaires de nuit, des règles d'hygiène très strictes, un vocabulaire technique, l'obligation de respecter le secret médical et la manière de parler aux patients et à leurs familles. Les premières semaines, une infirmière expérimentée la conseille et corrige ses gestes. En un paragraphe argumenté (affirmation, explication, illustration), montrez que la socialisation se poursuit à l'âge adulte.",
              hint: "Mobilisez la distinction entre socialisation primaire et secondaire, puis repérez dans la situation des normes, des valeurs et des mécanismes de socialisation.",
              solution: [
                "Affirmation : la socialisation ne s'arrête pas à l'enfance ; à l'âge adulte, la socialisation secondaire permet d'entrer dans de nouveaux groupes, notamment professionnels.",
                "Explication : la socialisation primaire, assurée surtout par la famille et l'école, forme la personnalité de base. Mais chaque nouveau milieu a ses normes, ses valeurs et ses rôles propres, que l'individu doit apprendre et intérioriser.",
                "Illustration (normes) : Inès apprend des normes formelles (règles d'hygiène, secret médical, horaires de nuit) et informelles (façon de parler aux patients et aux familles).",
                "Illustration (valeurs et rôle) : ces normes traduisent des valeurs du métier, comme le soin, la dignité du patient et la confiance. Inès apprend le rôle attaché à son nouveau statut d'infirmière.",
                "Illustration (mécanismes) : l'infirmière expérimentée corrige ses gestes (inculcation) ; Inès observe ses collègues (imitation) et ajuste son comportement aux réactions des patients et de l'équipe (interaction).",
                "Nuance : cette socialisation professionnelle s'appuie sur la socialisation primaire (le respect des règles appris à l'école, par exemple) qu'elle prolonge.",
                "Conclusion : l'exemple d'Inès montre une socialisation secondaire, professionnelle, qui transforme ses manières d'agir à l'âge adulte : la socialisation dure toute la vie.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Valeur", right: "Idéal qu'un groupe juge désirable et qui oriente les actions" },
              { left: "Norme", right: "Règle de conduite concrète, écrite ou non, en usage dans un groupe" },
              { left: "Sanction", right: "Réaction du groupe, positive ou négative, à un comportement" },
              { left: "Intériorisation", right: "Fait de considérer une règle apprise comme naturelle et évidente" },
              { left: "Socialisation primaire", right: "Socialisation de l'enfance, assurée surtout par la famille et l'école" },
              { left: "Socialisation secondaire", right: "Socialisation de l'âge adulte, qui permet d'entrer dans de nouveaux groupes" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces éléments est une valeur ?",
              options: [
                "Se lever quand un adulte entre en classe",
                "L'honnêteté",
                "Payer son ticket de bus",
                "Éteindre son téléphone au cinéma",
              ],
              answer: 1,
              why: "L'honnêteté est un idéal général ; les trois autres sont des règles de conduite précises, donc des normes.",
            },
            {
              q: "Une amie lève les yeux au ciel quand vous racontez une blague déplacée. De quel type de sanction s'agit-il ?",
              options: [
                "Positive et formelle",
                "Négative et formelle",
                "Positive et informelle",
                "Négative et informelle",
              ],
              answer: 3,
              why: "C'est une désapprobation (négative), spontanée et non prévue par une institution (informelle).",
            },
            {
              q: "Un enfant reproduit la façon dont son grand frère parle et se tient. Quel mécanisme de socialisation est à l'œuvre ?",
              options: ["L'inculcation", "L'imitation", "La sanction formelle"],
              answer: 1,
              why: "L'enfant observe et reproduit un modèle, souvent sans en avoir conscience : c'est l'imitation.",
            },
            {
              q: "Quelle situation relève de la socialisation secondaire ?",
              options: [
                "Un nouvel employé apprend les usages de son entreprise",
                "Un bébé apprend ses premiers mots au contact de ses parents",
                "Un enfant de 5 ans apprend à dire merci à table",
              ],
              answer: 0,
              why: "La socialisation secondaire intervient après l'enfance, quand l'individu entre dans de nouveaux groupes comme le monde du travail.",
            },
            {
              q: "Pourquoi les normes varient-elles d'une société à l'autre ?",
              options: [
                "Parce qu'elles dépendent du climat de chaque pays",
                "Parce qu'elles sont inscrites dans le patrimoine génétique",
                "Parce qu'elles sont apprises et non naturelles",
                "Parce que chaque individu choisit librement les siennes",
              ],
              answer: 2,
              why: "Les normes sont des constructions sociales transmises par la socialisation : elles diffèrent donc selon les sociétés et les époques.",
            },
          ],
          trap: "Confondre norme et valeur, par exemple en appelant « valeur » le fait de dire bonjour : la valeur est l'idéal (le respect d'autrui), la norme est la règle concrète qui le met en pratique (saluer).",
          method: "Pour distinguer norme et valeur, posez la question « Que dois-je faire, concrètement ? ». Si l'élément y répond par un comportement précis, c'est une norme ; s'il désigne un idéal général que plusieurs comportements peuvent servir, c'est une valeur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'instances-socialisation',
          title: 'Famille, école, pairs, médias : les instances de socialisation',
          minutes: 30,
          objectives: [
            "Identifier les principales instances de socialisation (famille, école, groupe des pairs, médias) et leur rôle respectif dans la socialisation des enfants et des jeunes.",
            "Comprendre comment la diversité des configurations familiales modifie les conditions de la socialisation des enfants et des adolescents.",
            "Montrer que les instances de socialisation peuvent être complémentaires ou concurrentes.",
          ],
          course: [
            {
              heading: "La famille, première instance de socialisation",
              paragraphs: [
                "Une instance (ou un agent) de socialisation est un groupe ou une institution qui transmet des normes et des valeurs. La famille est la première : c'est en son sein que l'enfant apprend sa langue maternelle, les habitudes alimentaires, les règles de politesse, le rapport au temps et à l'argent, et souvent des goûts culturels, des croyances ou des préférences politiques.",
                "Cette socialisation passe beaucoup par l'imitation et l'interaction quotidienne, dans un cadre affectif fort, mais aussi par l'inculcation (consignes, interdits, encouragements). Elle est d'autant plus durable qu'elle est précoce : elle constitue le socle de la socialisation primaire.",
              ],
            },
            {
              heading: "Des configurations familiales diverses",
              paragraphs: [
                "Les familles d'aujourd'hui prennent des formes variées. La famille dite traditionnelle réunit un couple et ses enfants. La famille monoparentale est formée d'un parent qui vit seul avec son ou ses enfants (le plus souvent la mère). La famille recomposée réunit un couple et au moins un enfant né d'une union précédente de l'un des conjoints. La famille homoparentale est formée d'un couple de même sexe et de ses enfants ; depuis la loi du 17 mai 2013, les couples de même sexe peuvent se marier et adopter en France.",
                "Ces configurations modifient les conditions de la socialisation. Dans une famille monoparentale, le parent dispose souvent de moins de temps et de ressources, car il assume seul les revenus et l'éducation ; ces familles sont plus exposées à la pauvreté. Dans une famille recomposée, l'enfant côtoie plusieurs figures adultes (beau-père, belle-mère) et des demi-frères ou demi-sœurs, parfois avec des règles différentes d'un foyer à l'autre.",
                "Plus largement, les relations familiales ont évolué : l'autorité parentale s'exerce davantage par le dialogue et la négociation, et l'épanouissement personnel de l'enfant est devenu une valeur centrale. Le sociologue François de Singly a souligné cette place accordée à l'autonomie de chacun dans la famille contemporaine.",
              ],
              box: { label: "Définition", text: "Famille monoparentale : un parent vivant seul avec au moins un enfant. Famille recomposée : un couple vivant avec au moins un enfant né d'une union précédente de l'un des conjoints." },
            },
            {
              heading: "L'école, une socialisation méthodique",
              paragraphs: [
                "L'école transmet des savoirs (lire, écrire, compter, raisonner), mais aussi des normes et des valeurs : la ponctualité, l'assiduité, le respect des règles et des autres, le travail personnel, l'acceptation de l'évaluation. Elle transmet les valeurs de la République (liberté, égalité, fraternité, laïcité), notamment à travers l'enseignement moral et civique.",
                "À la différence de la famille, l'école socialise de manière explicite et organisée, selon des programmes, des horaires et un règlement. Elle confronte aussi l'enfant à la vie en collectivité avec des personnes extérieures à sa famille, et à des adultes dont l'autorité ne repose pas sur un lien affectif.",
              ],
            },
            {
              heading: "Les pairs et les médias",
              paragraphs: [
                "Le groupe des pairs rassemble des personnes de même âge et de même statut (amis, camarades de classe, coéquipiers). Son rôle grandit à l'adolescence : on y apprend des codes vestimentaires, un langage, des goûts musicaux, des loisirs, et la manière de se faire accepter. Les relations y sont horizontales (entre égaux), alors qu'elles sont verticales dans la famille et à l'école (entre adultes et jeunes).",
                "Les médias et le numérique (télévision, plateformes vidéo, réseaux sociaux, jeux vidéo) diffusent des modèles de comportement, des normes de consommation, d'apparence ou de réussite, et des informations. Leur influence n'est pas mécanique : chacun reçoit les messages selon ce qu'il a déjà appris dans sa famille, à l'école et avec ses pairs, et les commente avec eux.",
              ],
              box: { label: "Repère", text: "Relations verticales : famille, école (adultes vers jeunes). Relations horizontales : groupe des pairs (entre égaux). Les médias diffusent des modèles reçus et interprétés par chacun." },
            },
            {
              heading: "Des instances complémentaires ou concurrentes",
              paragraphs: [
                "Les instances de socialisation peuvent se renforcer : une famille qui valorise la lecture et le travail scolaire prolonge l'action de l'école. Elles peuvent aussi transmettre des messages contradictoires : un groupe d'amis qui valorise le fait de ne pas travailler, des modèles médiatiques éloignés des valeurs familiales. L'adolescent doit alors composer entre des attentes différentes.",
                "Chaque individu est ainsi le produit de socialisations multiples, parfois cohérentes, parfois en tension. Le sociologue Bernard Lahire parle d'un « homme pluriel » (titre de son ouvrage de 1998) pour désigner des individus qui ont intériorisé des dispositions variées, qu'ils activent selon les situations.",
              ],
            },
          ],
          keyPoints: [
            "Les principales instances de socialisation sont la famille, l'école, le groupe des pairs et les médias.",
            "La famille assure l'essentiel de la socialisation primaire, surtout par imitation et interaction.",
            "Configurations familiales : traditionnelle, monoparentale, recomposée, homoparentale ; elles modifient les ressources et les repères de l'enfant.",
            "L'école socialise de façon méthodique : savoirs, normes (ponctualité, travail) et valeurs de la République.",
            "Le groupe des pairs, aux relations horizontales, pèse surtout à l'adolescence ; les médias diffusent des modèles interprétés par chacun.",
            "Les instances peuvent être complémentaires ou concurrentes : chacun est le produit de socialisations plurielles.",
          ],
          example: {
            statement: "Situation (fictive) : Maël, 14 ans, vit une semaine sur deux chez sa mère, qui vit seule, et une semaine sur deux chez son père, qui vit avec sa nouvelle compagne et la fille de celle-ci. Chez sa mère, les écrans sont limités ; chez son père, ils le sont moins. Identifiez les configurations familiales et expliquez ce qu'elles changent pour la socialisation de Maël.",
            solution: [
              "Identifier les configurations : chez sa mère, Maël vit dans une famille monoparentale (un parent seul avec son enfant) ; chez son père, dans une famille recomposée (un couple avec un enfant né d'une union précédente de chacun).",
              "Repérer ce qui change dans les repères : Maël côtoie plusieurs adultes (ses deux parents et la compagne de son père) et une jeune fille qui n'est pas sa sœur ; ses modèles sont plus nombreux.",
              "Repérer ce qui change dans les règles : les normes ne sont pas les mêmes d'un foyer à l'autre (usage des écrans). Maël doit apprendre à s'adapter à des attentes différentes.",
              "Repérer ce qui peut changer dans les ressources : sa mère, seule, assume les revenus et l'éducation, ce qui peut réduire le temps et l'argent disponibles.",
              "Conclusion : la diversité des configurations familiales modifie les conditions de la socialisation de Maël, en multipliant ses repères et en l'obligeant à composer entre plusieurs ensembles de normes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, identifiez l'instance de socialisation et le mécanisme principal (inculcation, imitation ou interaction). (a) Une professeure rappelle qu'on lève la main avant de parler. (b) Une adolescente adopte le style vestimentaire de ses amies pour être acceptée. (c) Un enfant de 4 ans fait semblant de téléphoner comme sa mère. (d) Un jeune reprend des expressions entendues dans des vidéos d'un créateur de contenu. (e) Lors d'une partie de football, des enfants se mettent d'accord sur les règles et les ajustent après une dispute.",
              hint: "L'inculcation passe par des consignes explicites ; l'imitation par la reproduction d'un modèle ; l'interaction par des échanges et des ajustements mutuels.",
              solution: [
                "(a) École, inculcation (règle énoncée explicitement par un adulte).",
                "(b) Groupe des pairs, imitation (elle reproduit le style de ses amies) et interaction (elle cherche leur approbation).",
                "(c) Famille, imitation (l'enfant reproduit un geste de sa mère).",
                "(d) Médias, imitation (il reproduit un modèle diffusé en ligne).",
                "(e) Groupe des pairs, interaction (les règles naissent des échanges et des ajustements entre enfants).",
                "Résultat : (a) école et inculcation ; (b) pairs, imitation et interaction ; (c) famille et imitation ; (d) médias et imitation ; (e) pairs et interaction.",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives) : dans un pays, sur 10 millions d'enfants mineurs, 68 % vivent avec leurs deux parents, 22 % dans une famille monoparentale et 10 % dans une famille recomposée. (1) Calculez le nombre d'enfants dans chaque configuration. (2) Rédigez une phrase donnant le sens du chiffre 22 %. (3) Expliquez deux façons dont la vie en famille monoparentale peut modifier les conditions de socialisation d'un enfant.",
              hint: "Pour passer d'une proportion à un effectif : effectif total × proportion ÷ 100.",
              solution: [
                "(1) Deux parents : 10 000 000 × 68 ÷ 100 = 6 800 000 enfants. Monoparentale : 10 000 000 × 22 ÷ 100 = 2 200 000 enfants. Recomposée : 10 000 000 × 10 ÷ 100 = 1 000 000 enfants. Vérification : 6,8 + 2,2 + 1 = 10 millions.",
                "(2) Dans ce pays (données fictives), sur 100 enfants mineurs, 22 vivent dans une famille monoparentale, c'est-à-dire avec un seul de leurs parents.",
                "(3) Première façon : le parent seul assume à la fois les revenus et l'éducation ; il dispose souvent de moins de temps et de ressources (ces familles sont plus exposées à la pauvreté), ce qui peut limiter certaines activités ou l'accompagnement scolaire.",
                "Deuxième façon : l'enfant a un parent de référence au quotidien ; d'autres adultes (l'autre parent un week-end sur deux, des grands-parents) peuvent jouer un rôle, avec parfois des règles différentes. L'enfant peut aussi prendre plus tôt certaines responsabilités dans le foyer.",
                "Résultat : 6,8 millions, 2,2 millions et 1 million d'enfants ; la configuration monoparentale modifie surtout les ressources disponibles et les figures adultes de référence.",
              ],
            },
            {
              level: 3,
              statement: "Situation (fictive) : Lucas, 15 ans, a des parents qui l'encouragent à lire et à bien travailler en classe. Au collège, ses professeurs valorisent l'effort et l'autonomie. Mais dans son groupe d'amis, avoir de bonnes notes est vu comme « fayot », et le soir, Lucas passe beaucoup de temps sur des vidéos qui mettent en avant l'argent facile et la célébrité. En un paragraphe argumenté, montrez que les instances de socialisation peuvent être concurrentes.",
              hint: "Identifiez les instances présentes, puis comparez les normes et les valeurs que chacune transmet : lesquelles vont dans le même sens, lesquelles s'opposent ?",
              solution: [
                "Affirmation : les instances de socialisation ne transmettent pas toujours les mêmes normes et valeurs ; elles peuvent entrer en concurrence.",
                "Explication : chaque instance a ses propres attentes. Quand elles divergent, l'individu reçoit des messages contradictoires et doit composer entre eux.",
                "Illustration (complémentarité) : la famille et l'école de Lucas vont dans le même sens : elles valorisent l'effort, la lecture et la réussite scolaire.",
                "Illustration (concurrence) : son groupe de pairs dévalorise la réussite scolaire et peut sanctionner informellement les bons élèves (moqueries) ; les vidéos qu'il regarde diffusent un modèle de réussite fondé sur l'argent facile, opposé à la valeur d'effort.",
                "Conséquence : Lucas doit arbitrer entre ces attentes, par exemple en continuant à travailler tout en le cachant à ses amis. Son comportement dépendra aussi de la force de sa socialisation familiale et de la place de chaque instance dans sa vie.",
                "Conclusion : la situation de Lucas montre des instances complémentaires (famille et école) et concurrentes (pairs et médias), ce qui fait de chaque individu le produit de socialisations plurielles.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque instance de socialisation à un exemple de ce qu'elle transmet.",
            pairs: [
              { left: "Famille", right: "La langue maternelle et les habitudes de table" },
              { left: "École", right: "La ponctualité et un travail évalué selon des programmes" },
              { left: "Groupe des pairs", right: "Le langage et les codes vestimentaires des amis du même âge" },
              { left: "Médias et réseaux sociaux", right: "Des modèles d'apparence et de consommation diffusés à grande échelle" },
              { left: "Entreprise", right: "Les règles et le vocabulaire d'un métier, à l'âge adulte" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue le groupe des pairs de la famille et de l'école ?",
              options: [
                "Il transmet uniquement des normes formelles et écrites",
                "Les relations y sont horizontales, entre égaux",
                "Il intervient seulement à l'âge adulte",
              ],
              answer: 1,
              why: "Les pairs sont des personnes de même âge et de même statut ; la famille et l'école reposent sur des relations verticales entre adultes et jeunes.",
            },
            {
              q: "Clara vit avec son père, la compagne de celui-ci et le fils de cette dernière. Dans quelle configuration familiale vit-elle ?",
              options: [
                "Une famille monoparentale",
                "Une famille élargie",
                "Une famille traditionnelle",
                "Une famille recomposée",
              ],
              answer: 3,
              why: "Le couple vit avec au moins un enfant né d'une union précédente de l'un des conjoints : c'est une famille recomposée.",
            },
            {
              q: "En quoi la socialisation scolaire est-elle dite méthodique ?",
              options: [
                "Elle est organisée par des programmes, des horaires et un règlement",
                "Elle repose surtout sur les liens d'affection entre élèves et professeurs",
                "Elle ne transmet que des savoirs, jamais des valeurs",
                "Elle remplace complètement la socialisation familiale",
              ],
              answer: 0,
              why: "L'école socialise de façon explicite et organisée, ce qui la distingue de la socialisation familiale, plus diffuse.",
            },
            {
              q: "Que montre la notion d'« homme pluriel » de Bernard Lahire ?",
              options: [
                "Chacun appartient toute sa vie à une seule famille et à un seul groupe",
                "Les médias déterminent seuls les comportements",
                "Chacun porte en lui des dispositions variées",
              ],
              answer: 2,
              why: "Lahire souligne que les individus sont socialisés par des instances multiples et activent des dispositions différentes selon les situations.",
            },
            {
              q: "Dans quel cas famille et école sont-elles complémentaires ?",
              options: [
                "Des amis se moquent des bons élèves",
                "Des parents aident leur enfant à faire ses devoirs",
                "Un enfant passe ses soirées sur des vidéos en ligne",
                "Un adolescent copie les tenues d'un chanteur",
              ],
              answer: 1,
              why: "En accompagnant le travail scolaire, les parents prolongent l'action de l'école : les deux instances se renforcent.",
            },
          ],
          trap: "Croire que les médias ou les pairs façonnent les jeunes de façon mécanique : les messages sont toujours reçus et interprétés à travers ce que l'individu a déjà intériorisé dans sa famille et à l'école.",
          method: "Pour analyser une situation de socialisation, faites un tableau à trois colonnes : l'instance (famille, école, pairs, médias), ce qu'elle transmet (normes, valeurs) et le mécanisme (inculcation, imitation, interaction). Comparez ensuite les lignes pour repérer complémentarités et concurrences.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'socialisation-differenciee',
          title: 'Une socialisation différenciée selon le genre et le milieu social',
          minutes: 35,
          objectives: [
            "Distinguer sexe et genre et identifier des stéréotypes de genre.",
            "Comprendre que la socialisation est différenciée selon le genre.",
            "Comprendre que la socialisation est différenciée selon le milieu social.",
            "Illustrer les effets de ces socialisations sur les goûts, les pratiques et les parcours scolaires, sans les présenter comme un destin.",
          ],
          course: [
            {
              heading: "Sexe et genre",
              paragraphs: [
                "Le sexe désigne les caractéristiques biologiques qui distinguent les femmes et les hommes. Le genre désigne la construction sociale des différences entre les sexes : l'ensemble des rôles, des comportements et des qualités qu'une société attribue aux hommes et aux femmes, et qu'elle considère comme masculins ou féminins. Ces attributions varient selon les époques et les sociétés, ce qui montre qu'elles sont apprises.",
                "Les stéréotypes de genre sont des représentations simplifiées et figées de ce que seraient « les filles » et « les garçons » (les filles seraient naturellement calmes et douées pour le soin, les garçons turbulents et doués pour la technique). En 1949, dans Le Deuxième Sexe, Simone de Beauvoir écrivait : « On ne naît pas femme : on le devient », formule qui résume l'idée que la féminité est le produit d'une socialisation.",
              ],
              box: { label: "Définition", text: "Le genre est la construction sociale des différences entre les femmes et les hommes : les rôles, comportements et qualités qu'une société définit comme féminins ou masculins." },
            },
            {
              heading: "Une socialisation différenciée selon le genre",
              paragraphs: [
                "Dès la naissance, filles et garçons ne sont pas traités de la même façon : couleurs et vêtements, jouets offerts (poupées et dînettes d'un côté, voitures et jeux de construction de l'autre), activités encouragées, façons de leur parler. Dans son livre Du côté des petites filles (1973), Elena Gianini Belotti décrivait déjà ces différences de traitement dès la petite enfance. Les livres pour enfants, la publicité, les dessins animés et les jeux vidéo véhiculent souvent les mêmes modèles.",
                "Ces apprentissages se font par toutes les instances : la famille (répartition des tâches domestiques observée chez les parents), l'école (attentes différentes des adultes, occupation de la cour de récréation), les pairs (moqueries envers un garçon qui fait de la danse ou une fille jugée « garçon manqué »), les médias. Ils pèsent sur les loisirs, les sports pratiqués, la confiance en soi dans certaines matières et, plus tard, sur les choix d'orientation : les filles restent minoritaires dans les filières d'ingénieurs et du numérique, et majoritaires dans les filières du soin, du social et des lettres.",
              ],
            },
            {
              heading: "Une socialisation différenciée selon le milieu social",
              paragraphs: [
                "Le milieu social d'une famille dépend notamment de la profession, du diplôme et des revenus des parents. Les pratiques éducatives varient selon le milieu : rapport au langage et à la lecture, place des écrans, loisirs (pratique d'un instrument, visite de musées, sports), alimentation, manière d'exercer l'autorité, projets d'avenir pour les enfants.",
                "Pierre Bourdieu a montré, avec Jean-Claude Passeron dans Les Héritiers (1964), que les enfants des milieux favorisés reçoivent un capital culturel (savoirs, langage, goûts, familiarité avec la culture valorisée par l'école) qui facilite leur réussite scolaire. Bourdieu appelle habitus l'ensemble des dispositions durables (manières de penser, de sentir, d'agir) intériorisées au cours de la socialisation, qui diffèrent selon les milieux et orientent les choix des individus.",
              ],
              box: { label: "À retenir", text: "Le capital culturel désigne les ressources culturelles (savoirs, langage, diplômes, goûts) transmises par la famille. Inégalement réparti selon les milieux sociaux, il influence la réussite scolaire." },
            },
            {
              heading: "Des socialisations qui se combinent, pas un destin",
              paragraphs: [
                "Le genre et le milieu social se combinent : être une fille d'un milieu populaire ou un garçon d'un milieu favorisé ne conduit pas aux mêmes expériences. De plus, l'individu reçoit des socialisations multiples (famille, école, pairs, médias) qui ne vont pas toujours dans le même sens.",
                "Ces socialisations différenciées créent des tendances statistiques, non des fatalités. Des parcours atypiques existent : dans Tableaux de familles (1995), Bernard Lahire étudie des enfants de milieux populaires qui réussissent à l'école, et montre l'importance de configurations familiales particulières (un membre de la famille qui accompagne la scolarité, un ordre et une régularité de vie). Les normes de genre évoluent aussi, et l'école mène des actions pour lutter contre les stéréotypes.",
              ],
            },
          ],
          keyPoints: [
            "Le sexe est biologique ; le genre est la construction sociale des différences entre femmes et hommes.",
            "Les stéréotypes de genre sont transmis par toutes les instances : jouets, attentes, médias, pairs.",
            "La socialisation de genre pèse sur les loisirs, la confiance en soi et les choix d'orientation.",
            "Les pratiques éducatives varient selon le milieu social (langage, lecture, loisirs, autorité).",
            "Bourdieu : le capital culturel transmis par la famille favorise la réussite scolaire ; l'habitus désigne des dispositions durables intériorisées.",
            "Ces socialisations créent des tendances, non un destin : des parcours atypiques existent.",
          ],
          example: {
            statement: "Situation : dans un catalogue de jouets, la page « filles » présente des poupées, des cuisines miniatures et des kits de maquillage sur fond rose ; la page « garçons » des voitures, des robots et des jeux de construction sur fond bleu. Expliquez en quoi ce catalogue participe à une socialisation différenciée selon le genre.",
            solution: [
              "Identifier l'instance : le catalogue est un support publicitaire (médias), choisi le plus souvent par la famille.",
              "Repérer les stéréotypes : les jouets « filles » renvoient au soin, à la maison et à l'apparence ; les jouets « garçons » à la technique, à la construction et à l'action.",
              "Expliquer le mécanisme : en jouant, l'enfant s'entraîne à des rôles (imitation et interaction) et développe certaines compétences plutôt que d'autres ; il intériorise ce qui est attendu de son genre.",
              "Montrer les effets possibles : ces goûts et ces compétences peuvent orienter plus tard les loisirs et les choix d'études (soin d'un côté, technique de l'autre).",
              "Conclusion : le catalogue transmet des normes de genre dès l'enfance ; il contribue à une socialisation différenciée, que d'autres instances peuvent renforcer ou contrebalancer.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque exemple, indiquez s'il illustre surtout une socialisation différenciée selon le genre ou selon le milieu social, et nommez l'instance concernée. (a) Des parents inscrivent leur fille à la danse et leur fils au football. (b) Dans une famille de cadres, on discute chaque soir de l'actualité à table. (c) Un garçon qui pleure se fait dire par ses camarades qu'il « fait la fille ». (d) Des parents enseignants emmènent souvent leurs enfants au musée. (e) Une publicité pour des produits ménagers ne montre que des femmes.",
              hint: "Demandez-vous ce qui fait la différence de traitement : le fait d'être une fille ou un garçon, ou la position sociale de la famille ?",
              solution: [
                "(a) Genre ; instance : la famille (activités choisies selon le sexe de l'enfant).",
                "(b) Milieu social ; instance : la famille (rapport au langage et à l'information propre à certains milieux).",
                "(c) Genre ; instance : le groupe des pairs (sanction informelle d'un comportement jugé non conforme au genre).",
                "(d) Milieu social ; instance : la famille (transmission d'un capital culturel).",
                "(e) Genre ; instance : les médias (stéréotype associant les femmes aux tâches domestiques).",
                "Résultat : genre pour (a), (c), (e) ; milieu social pour (b) et (d).",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives) : part des enfants de 11 ans pratiquant une activité encadrée, selon la profession des parents. Enfants de cadres : instrument de musique 40 %, football en club 20 %. Enfants d'ouvriers : instrument de musique 15 %, football en club 30 %. (1) Calculez l'écart en points de pourcentage pour chaque activité. (2) Calculez combien de fois les enfants de cadres pratiquent plus souvent un instrument que les enfants d'ouvriers. (3) Interprétez ces données en mobilisant la notion de socialisation différenciée.",
              hint: "Un écart en points est une simple soustraction de deux pourcentages ; un rapport s'obtient par une division.",
              solution: [
                "(1) Instrument : 40 - 15 = 25 points en faveur des enfants de cadres. Football en club : 30 - 20 = 10 points en faveur des enfants d'ouvriers.",
                "(2) 40 ÷ 15 ≈ 2,7 : les enfants de cadres pratiquent un instrument environ 2,7 fois plus souvent que les enfants d'ouvriers.",
                "(3) Les loisirs des enfants diffèrent selon le milieu social : ce ne sont pas seulement des goûts personnels, mais le produit d'une socialisation familiale différente.",
                "L'apprentissage d'un instrument suppose des ressources économiques (cours, achat de l'instrument) et culturelles (familiarité avec la musique classique, valorisation de cette pratique), plus fréquentes dans les familles de cadres : c'est une forme de capital culturel.",
                "Le football en club, moins coûteux et très valorisé dans les milieux populaires, y est plus pratiqué. Ces pratiques transmettent des goûts et des dispositions différents.",
                "Résultat : écarts de 25 points (instrument) et de 10 points (football), rapport d'environ 2,7 ; les pratiques de loisirs révèlent une socialisation différenciée selon le milieu social.",
              ],
            },
            {
              level: 3,
              statement: "Document (données fictives) : part des filles parmi les élèves de quatre formations après le bac. Formation d'ingénieurs : 28 %. Formation en informatique : 18 %. Formation d'infirmiers : 85 %. Formation de lettres : 70 %. Dans un développement construit d'une vingtaine de lignes, montrez que la socialisation différenciée selon le genre peut influencer les choix d'orientation.",
              hint: "Lisez d'abord les données (une phrase de lecture), puis expliquez le mécanisme : quelles instances, quels stéréotypes, quels effets sur la confiance et les goûts ? Pensez à nuancer.",
              solution: [
                "Introduction : les choix d'orientation semblent individuels ; pourtant, la répartition des filles et des garçons entre les formations est très inégale.",
                "Lecture des données : dans ce document (données fictives), les filles représentent 28 % des élèves des formations d'ingénieurs et 18 % en informatique, mais 85 % des élèves infirmiers et 70 % en lettres. Elles sont minoritaires dans les formations techniques et majoritaires dans celles du soin et des lettres.",
                "Explication 1 : dès l'enfance, la socialisation de genre oriente les jeux et les compétences : jouets de construction et de technique pour les garçons, jouets liés au soin pour les filles. Les goûts qui en découlent pèsent sur les choix d'études.",
                "Explication 2 : les stéréotypes transmis par la famille, l'école, les pairs et les médias (les garçons seraient « faits » pour les sciences, les filles pour le relationnel) influencent la confiance en soi dans certaines matières et la manière dont les jeunes se projettent dans un métier.",
                "Explication 3 : les sanctions informelles des pairs (moqueries envers un garçon qui veut devenir infirmier ou une fille passionnée d'informatique) peuvent décourager les choix non conformes.",
                "Nuance : ces influences sont des tendances, non une fatalité ; les normes de genre évoluent, des parcours atypiques existent, et des politiques publiques encouragent la mixité des formations. Le milieu social interagit aussi avec le genre.",
                "Conclusion : la socialisation différenciée selon le genre contribue à expliquer la répartition inégale des filles et des garçons entre les formations : l'orientation est aussi un fait social.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Socialisation, genre et milieu social.",
            statements: [
              { text: "Le genre désigne les différences biologiques entre femmes et hommes.", true: false, why: "Ce sont les caractéristiques du sexe ; le genre désigne la construction sociale des différences." },
              { text: "Les jouets offerts aux enfants peuvent transmettre des stéréotypes de genre.", true: true, why: "En orientant les jeux vers le soin ou vers la technique, ils participent à la socialisation de genre." },
              { text: "Les différences de loisirs entre milieux sociaux s'expliquent uniquement par les goûts personnels.", true: false, why: "Les goûts eux-mêmes sont le produit d'une socialisation et dépendent des ressources économiques et culturelles des familles." },
              { text: "Selon Bourdieu, le capital culturel transmis par la famille facilite la réussite scolaire.", true: true, why: "L'école valorise une culture plus familière aux enfants des milieux favorisés." },
              { text: "Un enfant de milieu populaire ne peut pas réussir à l'école.", true: false, why: "Les socialisations créent des tendances statistiques, non des fatalités ; Lahire a étudié de tels parcours de réussite." },
              { text: "Les normes de genre varient selon les époques et les sociétés.", true: true, why: "Elles sont apprises et non naturelles, ce qui explique leur variation." },
              { text: "Seule la famille transmet des normes de genre.", true: false, why: "L'école, les pairs et les médias y contribuent aussi." },
            ],
          },
          quiz: [
            {
              q: "Quelle phrase définit le mieux le genre ?",
              options: [
                "Les caractéristiques biologiques des individus",
                "La construction sociale des rôles féminins et masculins",
                "Le milieu social d'origine d'une personne",
                "L'ensemble des goûts personnels qu'un individu choisit librement",
              ],
              answer: 1,
              why: "Le genre renvoie à ce qu'une société attribue aux femmes et aux hommes, et non à la biologie.",
            },
            {
              q: "Qui a écrit « On ne naît pas femme : on le devient » ?",
              options: ["Elena Gianini Belotti", "Émile Durkheim", "Simone de Beauvoir"],
              answer: 2,
              why: "La formule figure dans Le Deuxième Sexe (1949) de Simone de Beauvoir.",
            },
            {
              q: "Que désigne le capital culturel ?",
              options: [
                "Les ressources culturelles (savoirs, langage, goûts) transmises par la famille",
                "Le patrimoine financier que les ménages placent en actions et en obligations",
                "Le nombre de musées et de théâtres dans une ville",
              ],
              answer: 0,
              why: "Chez Bourdieu, le capital culturel regroupe les ressources culturelles d'une famille, qui facilitent la réussite scolaire.",
            },
            {
              q: "Un garçon qui veut faire de la danse subit les moqueries de ses camarades. Que montre cet exemple ?",
              options: [
                "Une socialisation selon le milieu social, assurée par la famille",
                "Une sanction formelle prévue par l'école",
                "L'absence de normes chez les adolescents",
                "Une sanction informelle des pairs liée aux normes de genre",
              ],
              answer: 3,
              why: "Les moqueries sont une sanction informelle qui rappelle ce que le groupe juge conforme au genre masculin.",
            },
            {
              q: "Pourquoi dit-on que la socialisation différenciée n'est pas un destin ?",
              options: [
                "Parce qu'elle n'a aucun effet sur les parcours",
                "Parce qu'elle crée des tendances, avec des exceptions",
                "Parce que chacun choisit seul sa socialisation",
                "Parce qu'elle s'arrête à l'âge de six ans",
              ],
              answer: 1,
              why: "Elle produit des régularités statistiques, mais des socialisations multiples et des configurations particulières rendent possibles des parcours atypiques.",
            },
          ],
          trap: "Présenter les différences entre filles et garçons, ou entre milieux sociaux, comme naturelles ou comme une fatalité : elles résultent d'apprentissages sociaux et ne décrivent que des tendances statistiques.",
          method: "Dans un paragraphe sur la socialisation différenciée, citez toujours trois éléments : l'instance qui transmet (famille, école, pairs, médias), ce qui est transmis (une norme, un goût, un stéréotype) et l'effet observé (loisirs, orientation). Terminez par une nuance sur les parcours atypiques.",
        },
      ],
    },
    /* ==================================================================== */
    /* COMMENT S'ORGANISE LA VIE POLITIQUE ?                                 */
    /* ==================================================================== */
    {
      id: 'vie-politique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'institutions-france',
          title: 'Les institutions de la Ve République et la séparation des pouvoirs',
          minutes: 35,
          objectives: [
            "Comprendre la spécificité du pouvoir politique et le principe de séparation des pouvoirs.",
            "Identifier les principales institutions de la Ve République (Président de la République, Gouvernement, Parlement, Conseil constitutionnel, autorité judiciaire) et leurs fonctions.",
            "Caractériser les relations entre le pouvoir exécutif et le pouvoir législatif sous la Ve République.",
          ],
          course: [
            {
              heading: "Le pouvoir politique et l'État",
              paragraphs: [
                "Le pouvoir politique est la capacité de prendre des décisions qui s'imposent à l'ensemble d'une société : voter des lois, lever des impôts, rendre la justice, assurer la sécurité. Dans les sociétés modernes, il est exercé par l'État. Le sociologue Max Weber définit l'État comme le groupement qui revendique avec succès le monopole de la violence physique légitime sur un territoire : seuls la police, l'armée et la justice peuvent légalement employer la contrainte.",
                "Ce pouvoir doit être légitime, c'est-à-dire accepté comme juste par ceux qui y sont soumis. Dans une démocratie, la légitimité vient du peuple : selon l'article 3 de la Constitution française, la souveraineté nationale appartient au peuple, qui l'exerce par ses représentants et par la voie du référendum. Dans un État de droit, les gouvernants sont eux-mêmes soumis aux règles de droit, et leurs décisions peuvent être contrôlées par des juges.",
              ],
            },
            {
              heading: "La séparation des pouvoirs",
              paragraphs: [
                "Pour éviter qu'un pouvoir unique devienne tyrannique, Montesquieu, dans De l'esprit des lois (1748), propose de distinguer trois fonctions et de les confier à des organes différents : le pouvoir législatif (faire les lois), le pouvoir exécutif (appliquer les lois et conduire la politique) et le pouvoir judiciaire (juger les litiges et punir les infractions). Selon sa formule célèbre, il faut que « le pouvoir arrête le pouvoir ».",
                "Ce principe est inscrit à l'article 16 de la Déclaration des droits de l'homme et du citoyen de 1789 : une société dans laquelle la garantie des droits n'est pas assurée ni la séparation des pouvoirs déterminée n'a point de constitution. On distingue une séparation stricte des pouvoirs, où chaque pouvoir est indépendant (régime présidentiel, comme aux États-Unis), et une séparation souple, où les pouvoirs collaborent et disposent de moyens d'action réciproques (régime parlementaire, comme au Royaume-Uni).",
              ],
              box: { label: "Repère", text: "Pouvoir législatif : voter la loi (Parlement). Pouvoir exécutif : appliquer la loi et gouverner (Président et Gouvernement). Pouvoir judiciaire : juger (tribunaux). Montesquieu, De l'esprit des lois, 1748." },
            },
            {
              heading: "Les institutions de la Ve République",
              paragraphs: [
                "La Constitution de la Ve République, approuvée par référendum le 28 septembre 1958, a été promulguée le 4 octobre 1958. Le Président de la République est élu au suffrage universel direct depuis la révision constitutionnelle adoptée par référendum en 1962, pour cinq ans depuis le référendum de 2000 sur le quinquennat (appliqué à partir de 2002), et pour au plus deux mandats consécutifs depuis la révision de 2008. Il nomme le Premier ministre, préside le Conseil des ministres, promulgue les lois, est le chef des armées, peut dissoudre l'Assemblée nationale, soumettre certains projets au référendum et, en cas de crise grave, exercer des pouvoirs exceptionnels (article 16).",
                "Le Gouvernement, dirigé par le Premier ministre, « détermine et conduit la politique de la nation » (article 20) ; il est responsable devant l'Assemblée nationale. Le Parlement est bicaméral : l'Assemblée nationale compte 577 députés élus pour cinq ans au suffrage universel direct, et le Sénat 348 sénateurs élus pour six ans au suffrage universel indirect (par des grands électeurs, surtout des élus locaux). Selon l'article 24, le Parlement vote la loi, contrôle l'action du Gouvernement et évalue les politiques publiques.",
                "Le Conseil constitutionnel, composé de neuf membres nommés pour neuf ans, vérifie que les lois respectent la Constitution. Depuis 2010, tout justiciable peut, à l'occasion d'un procès, contester une loi déjà en vigueur par une question prioritaire de constitutionnalité (QPC). Enfin, l'autorité judiciaire est indépendante ; le Président de la République en est le garant, assisté du Conseil supérieur de la magistrature.",
              ],
              box: { label: "À retenir", text: "Président : élu au suffrage universel direct pour 5 ans. Assemblée nationale : 577 députés, 5 ans, suffrage direct. Sénat : 348 sénateurs, 6 ans, suffrage indirect. Conseil constitutionnel : 9 membres, 9 ans." },
            },
            {
              heading: "Un régime original : un exécutif fort et des pouvoirs qui se contrôlent",
              paragraphs: [
                "La Ve République organise une séparation souple des pouvoirs. Comme dans un régime parlementaire, le Gouvernement est responsable devant l'Assemblée nationale, qui peut le renverser en adoptant une motion de censure à la majorité absolue de ses membres (article 49), et le Président peut, en retour, dissoudre l'Assemblée (article 12). Mais le Président, élu directement par le peuple, dispose de pouvoirs importants : le politiste Maurice Duverger a qualifié ce régime de semi-présidentiel.",
                "Quand le Président dispose d'une majorité à l'Assemblée, il est le véritable chef de l'exécutif. Quand la majorité de l'Assemblée lui est opposée, il doit nommer un Premier ministre issu de cette majorité : c'est la cohabitation (1986-1988, 1993-1995, 1997-2002), où le Gouvernement conduit la politique intérieure. L'Assemblée peut aussi ne compter aucune majorité absolue, ce qui oblige le Gouvernement à rechercher des compromis : en décembre 2024, une motion de censure a été adoptée pour la deuxième fois seulement sous la Ve République, après celle de 1962.",
              ],
            },
          ],
          keyPoints: [
            "Le pouvoir politique impose des décisions à toute la société ; selon Weber, l'État détient le monopole de la violence physique légitime.",
            "Montesquieu (1748) : séparer les pouvoirs législatif, exécutif et judiciaire pour que « le pouvoir arrête le pouvoir ».",
            "Constitution du 4 octobre 1958 ; Président élu au suffrage universel direct (depuis 1962) pour 5 ans (depuis 2000).",
            "Parlement bicaméral : Assemblée nationale (577 députés) et Sénat (348 sénateurs) ; il vote la loi et contrôle le Gouvernement.",
            "Le Gouvernement est responsable devant l'Assemblée (motion de censure) ; le Président peut dissoudre l'Assemblée.",
            "Le Conseil constitutionnel contrôle la conformité des lois à la Constitution, y compris par la QPC depuis 2010.",
          ],
          example: {
            statement: "Expliquez les principales étapes par lesquelles un projet de loi présenté par le Gouvernement devient une loi applicable, en précisant le rôle de chaque institution.",
            solution: [
              "Le Gouvernement rédige un projet de loi ; après l'avis du Conseil d'État, il est délibéré en Conseil des ministres, puis déposé sur le bureau de l'une des deux assemblées. (Un texte déposé par des parlementaires s'appelle une proposition de loi.)",
              "Le texte est examiné en commission, puis discuté et voté en séance publique par l'Assemblée nationale et par le Sénat ; les parlementaires peuvent l'amender.",
              "Le texte fait la navette entre les deux assemblées jusqu'à ce qu'elles l'adoptent dans les mêmes termes. En cas de désaccord persistant, une commission mixte paritaire (7 députés et 7 sénateurs) cherche un compromis ; si elle échoue, le Gouvernement peut demander à l'Assemblée nationale de statuer définitivement.",
              "Avant la promulgation, le Conseil constitutionnel peut être saisi (par le Président de la République, le Premier ministre, le président de l'une des deux assemblées, 60 députés ou 60 sénateurs) ; il censure les dispositions contraires à la Constitution.",
              "Le Président de la République promulgue la loi dans les quinze jours ; elle est publiée au Journal officiel et devient applicable.",
              "Conclusion : la loi naît de la collaboration entre l'exécutif (qui propose et promulgue) et le législatif (qui débat et vote), sous le contrôle du Conseil constitutionnel : c'est une séparation souple des pouvoirs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque action, indiquez l'institution qui l'accomplit et le pouvoir correspondant (législatif, exécutif, judiciaire, ou contrôle de constitutionnalité). (a) Voter le budget de l'État. (b) Nommer le Premier ministre. (c) Condamner l'auteur d'un vol. (d) Déclarer contraire à la Constitution un article d'une loi. (e) Prendre les décrets d'application d'une loi. (f) Adopter une motion de censure.",
              hint: "Le pouvoir législatif vote les lois et contrôle le Gouvernement ; le pouvoir exécutif les applique ; le pouvoir judiciaire juge les personnes.",
              solution: [
                "(a) Le Parlement (Assemblée nationale et Sénat) : pouvoir législatif.",
                "(b) Le Président de la République : pouvoir exécutif.",
                "(c) Un tribunal (l'autorité judiciaire) : pouvoir judiciaire.",
                "(d) Le Conseil constitutionnel : contrôle de constitutionnalité.",
                "(e) Le Premier ministre et le Gouvernement : pouvoir exécutif.",
                "(f) L'Assemblée nationale : pouvoir législatif (contrôle du Gouvernement).",
                "Résultat : législatif pour (a) et (f), exécutif pour (b) et (e), judiciaire pour (c), contrôle de constitutionnalité pour (d).",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives) : répartition des 577 sièges de l'Assemblée nationale entre cinq groupes. Groupe A : 170 ; groupe B : 150 ; groupe C : 140 ; groupe D : 70 ; groupe E : 47. Le Gouvernement est soutenu par les groupes A et D. (1) Calculez la majorité absolue des sièges. (2) Le Gouvernement dispose-t-il d'une majorité absolue ? Calculez la part des sièges qu'il contrôle. (3) Les groupes B et C déposent une motion de censure. Sachant que seuls les votes favorables à la motion sont comptés et qu'elle doit réunir la majorité absolue des membres de l'Assemblée, peut-elle être adoptée si tous leurs députés la votent ? Et si 5 députés du groupe C ne la votent pas ? (4) Quelle est la conséquence de l'adoption d'une motion de censure ?",
              hint: "La majorité absolue est le premier nombre entier strictement supérieur à la moitié des sièges.",
              solution: [
                "(1) La moitié de 577 est 288,5 : la majorité absolue est de 289 sièges.",
                "(2) A + D = 170 + 70 = 240 sièges, soit moins de 289 : le Gouvernement ne dispose que d'une majorité relative. Part des sièges : 240 ÷ 577 × 100 ≈ 41,6 %.",
                "(3) B + C = 150 + 140 = 290 voix favorables, soit au moins 289 : la motion est adoptée si tous leurs députés la votent.",
                "Si 5 députés du groupe C ne la votent pas : 290 - 5 = 285 voix, soit moins de 289 : la motion est rejetée, même si ces députés ne soutiennent pas le Gouvernement.",
                "(4) Si une motion de censure est adoptée, le Premier ministre doit remettre au Président de la République la démission du Gouvernement (article 50 de la Constitution). C'est la responsabilité politique du Gouvernement devant l'Assemblée.",
                "Résultat : majorité absolue de 289 sièges ; le Gouvernement contrôle environ 41,6 % des sièges ; la censure passe avec 290 voix mais échoue avec 285 ; son adoption entraîne la démission du Gouvernement.",
              ],
            },
            {
              level: 3,
              statement: "Dans un développement construit d'une vingtaine de lignes, montrez que la Ve République organise une séparation souple des pouvoirs. Vous vous appuierez sur vos connaissances, en particulier sur les articles 12 (dissolution), 20 (rôle du Gouvernement), 24 (rôle du Parlement) et 49 (responsabilité du Gouvernement) de la Constitution.",
              hint: "Montrez d'abord que les pouvoirs sont bien distingués, puis qu'ils collaborent et disposent de moyens d'action réciproques. Comparez avec un régime de séparation stricte.",
              solution: [
                "Introduction : depuis Montesquieu, la séparation des pouvoirs vise à empêcher les abus ; elle peut être stricte (pouvoirs indépendants) ou souple (pouvoirs qui collaborent et se contrôlent). La Ve République relève du second modèle.",
                "Des pouvoirs distincts : le Parlement vote la loi, contrôle le Gouvernement et évalue les politiques publiques (article 24) ; le Gouvernement détermine et conduit la politique de la nation (article 20) ; l'autorité judiciaire est indépendante ; le Conseil constitutionnel contrôle la conformité des lois.",
                "Une collaboration : le Gouvernement participe à l'élaboration de la loi (la plupart des lois adoptées sont issues de projets de loi qu'il a déposés, et il peut demander à l'Assemblée de statuer définitivement) ; le Président promulgue les lois. Exécutif et législatif ne travaillent donc pas séparément.",
                "Des moyens d'action réciproques : l'Assemblée nationale peut renverser le Gouvernement par une motion de censure (article 49), comme en 1962 et en décembre 2024 ; en retour, le Président peut dissoudre l'Assemblée (article 12), comme en 2024, et provoquer de nouvelles élections législatives.",
                "Comparaison : dans un régime présidentiel comme celui des États-Unis, le Président ne peut pas dissoudre le Congrès et le Congrès ne peut pas renverser le Président pour des raisons politiques : la séparation y est stricte.",
                "Nuance : l'élection du Président au suffrage universel direct lui donne un poids particulier (régime qualifié de semi-présidentiel), surtout lorsqu'il dispose d'une majorité à l'Assemblée ; en période de cohabitation, l'équilibre penche vers le Premier ministre.",
                "Conclusion : la Ve République distingue les pouvoirs mais les fait collaborer et se contrôler mutuellement : c'est une séparation souple, avec un exécutif renforcé.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de la séparation des pouvoirs et de la Ve République dans l'ordre chronologique.",
            items: [
              "Montesquieu publie De l'esprit des lois",
              "La Déclaration des droits de l'homme et du citoyen lie constitution et séparation des pouvoirs",
              "La Constitution de la Ve République est promulguée",
              "Un référendum instaure l'élection du Président au suffrage universel direct",
              "Un référendum réduit le mandat présidentiel à cinq ans",
              "Une révision constitutionnelle crée la question prioritaire de constitutionnalité",
            ],
          },
          quiz: [
            {
              q: "Selon Montesquieu, pourquoi faut-il séparer les pouvoirs ?",
              options: [
                "Pour que le pouvoir arrête le pouvoir",
                "Pour donner tout le pouvoir au Parlement",
                "Pour que le roi gouverne sans contrôle",
                "Pour supprimer le pouvoir judiciaire",
              ],
              answer: 0,
              why: "Montesquieu veut éviter les abus : chaque pouvoir doit pouvoir limiter les autres.",
            },
            {
              q: "Combien de députés siègent à l'Assemblée nationale ?",
              options: ["348", "925", "577", "289"],
              answer: 2,
              why: "L'Assemblée nationale compte 577 députés ; 348 est le nombre de sénateurs, 289 la majorité absolue à l'Assemblée.",
            },
            {
              q: "Devant quelle institution le Gouvernement est-il responsable ?",
              options: [
                "Le Conseil constitutionnel",
                "Le Sénat uniquement",
                "Les tribunaux judiciaires",
                "L'Assemblée nationale",
              ],
              answer: 3,
              why: "L'Assemblée nationale peut renverser le Gouvernement en adoptant une motion de censure (article 49).",
            },
            {
              q: "Qu'est-ce qu'une cohabitation ?",
              options: [
                "Un Président face à une majorité de l'Assemblée qui lui est opposée",
                "La fusion de l'Assemblée nationale et du Sénat en un Congrès",
                "Un gouvernement qui réunit tous les partis représentés au Parlement",
              ],
              answer: 0,
              why: "Le Président doit alors nommer un Premier ministre issu de la majorité opposée, qui conduit la politique intérieure.",
            },
            {
              q: "Quel est le rôle du Conseil constitutionnel ?",
              options: [
                "Voter les lois de finances",
                "Juger les auteurs de crimes",
                "Vérifier que les lois respectent la Constitution",
                "Nommer le Premier ministre et les ministres du Gouvernement",
              ],
              answer: 2,
              why: "Il contrôle la conformité des lois à la Constitution, avant leur promulgation ou, depuis 2010, par la QPC.",
            },
          ],
          trap: "Croire que la Ve République applique une séparation stricte des pouvoirs : l'exécutif et le législatif y collaborent (le Gouvernement participe à la loi) et disposent de moyens d'action réciproques (motion de censure, dissolution).",
          method: "Construisez un schéma des institutions : le peuple au centre, avec des flèches vers le Président et l'Assemblée (suffrage direct) et vers le Sénat (suffrage indirect), puis les flèches de nomination, de censure et de dissolution. Refaites-le de mémoire pour vérifier que vous le maîtrisez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'acteurs-politiques',
          title: 'Partis, associations, groupes d\'intérêt et médias',
          minutes: 30,
          objectives: [
            "Identifier les principaux acteurs de la vie politique : partis politiques, associations, groupes d'intérêt et médias.",
            "Distinguer un parti politique d'un groupe d'intérêt selon leurs objectifs et leurs moyens d'action.",
            "Comprendre le rôle des médias et des réseaux sociaux dans la vie politique démocratique.",
            "Identifier les différentes formes de participation politique.",
          ],
          course: [
            {
              heading: "Les partis politiques : conquérir et exercer le pouvoir",
              paragraphs: [
                "Un parti politique est une organisation durable qui cherche à conquérir et à exercer le pouvoir, en présentant des candidats aux élections et en proposant un programme. Selon l'article 4 de la Constitution, les partis et groupements politiques concourent à l'expression du suffrage et exercent leur activité librement : le pluralisme politique est une condition de la démocratie.",
                "Les partis remplissent plusieurs fonctions : sélectionner et former des candidats, élaborer des programmes, mobiliser les électeurs lors des campagnes, structurer le débat entre une majorité et une opposition. Ils réunissent des adhérents et des militants (les plus actifs), et s'appuient sur des sympathisants. Ils sont en partie financés par l'État, en fonction de leurs résultats électoraux et de leur nombre de parlementaires.",
                "On les classe souvent selon le clivage gauche-droite, né en 1789 à l'Assemblée constituante, quand les députés favorables au veto du roi se placèrent à droite du président de séance et ses adversaires à gauche. Ce clivage reste un repère, même si d'autres oppositions (sur l'Europe, l'écologie ou l'immigration) traversent aussi la vie politique.",
              ],
              box: { label: "Définition", text: "Parti politique : organisation durable qui cherche à conquérir et exercer le pouvoir, en présentant des candidats aux élections et en défendant un programme." },
            },
            {
              heading: "Associations et groupes d'intérêt : influencer sans gouverner",
              paragraphs: [
                "Une association, au sens de la loi du 1er juillet 1901, réunit au moins deux personnes qui mettent en commun leurs connaissances ou leur activité dans un but autre que le partage de bénéfices. Beaucoup d'associations (sportives, culturelles) n'ont pas d'objectif politique ; d'autres défendent une cause (environnement, droits humains, aide aux plus démunis) et participent ainsi à la vie politique.",
                "Un groupe d'intérêt est une organisation qui défend des intérêts ou une cause et cherche à influencer les décisions publiques, sans chercher à exercer lui-même le pouvoir. Ce sont par exemple les syndicats de salariés (autorisés en France depuis la loi Waldeck-Rousseau de 1884), les organisations patronales, les organisations agricoles, les associations de consommateurs ou de défense de l'environnement.",
                "Leurs moyens d'action sont variés : rencontres avec des élus et des ministres, notes d'expertise, propositions d'amendements (c'est le lobbying), manifestations, grèves pour les syndicats, pétitions, campagnes dans les médias, recours devant les tribunaux. Pour rendre ce lobbying plus transparent, les représentants d'intérêts doivent s'inscrire sur un répertoire public tenu par la Haute Autorité pour la transparence de la vie publique, depuis la loi dite Sapin 2 de 2016.",
              ],
              box: { label: "À retenir", text: "Le parti veut exercer le pouvoir et présente des candidats ; le groupe d'intérêt veut influencer ceux qui l'exercent, sans se présenter aux élections." },
            },
            {
              heading: "Les médias : informer, débattre, contrôler",
              paragraphs: [
                "Les médias (presse, radio, télévision, sites d'information) jouent plusieurs rôles politiques. Ils informent les citoyens, organisent le débat entre les candidats et les partis, et contribuent à la mise à l'agenda : en choisissant les sujets dont ils parlent, ils influencent les questions que le public et les gouvernants jugent importantes. Le journalisme d'investigation contrôle aussi les gouvernants, d'où l'expression de « quatrième pouvoir ».",
                "La liberté de la presse est garantie en France par la loi du 29 juillet 1881. Le pluralisme des médias est une condition du débat démocratique ; l'Arcom, autorité de régulation de l'audiovisuel et du numérique créée en 2022, veille notamment au respect du pluralisme à la radio et à la télévision.",
                "Les réseaux sociaux ont transformé la communication politique : les responsables politiques s'adressent directement aux citoyens, et chacun peut commenter, partager, se mobiliser. Mais ils favorisent aussi la diffusion rapide de fausses informations, et leurs algorithmes tendent à montrer à chacun des contenus proches de ses opinions, ce qui peut enfermer dans des « bulles de filtre ».",
              ],
            },
            {
              heading: "Les citoyens et les formes de participation",
              paragraphs: [
                "Les citoyens participent à la vie politique de plusieurs façons. La participation conventionnelle passe par les canaux prévus par les institutions : voter, adhérer à un parti, se présenter à une élection, militer dans une campagne. La participation non conventionnelle passe par d'autres moyens : manifester, signer une pétition, boycotter un produit, faire grève, s'engager dans une association.",
                "Partis, associations, groupes d'intérêt et médias sont donc des intermédiaires entre les citoyens et le pouvoir : ils transmettent les demandes de la société, les organisent et les rendent visibles.",
              ],
            },
          ],
          keyPoints: [
            "Un parti politique cherche à conquérir et exercer le pouvoir ; il présente des candidats et défend un programme (article 4 de la Constitution).",
            "Un groupe d'intérêt cherche à influencer les décisions publiques sans exercer le pouvoir : syndicats, organisations patronales, ONG.",
            "Moyens des groupes d'intérêt : lobbying, manifestations, grèves, pétitions, campagnes médiatiques, recours en justice.",
            "Les médias informent, organisent le débat, mettent des sujets à l'agenda et contrôlent les gouvernants ; liberté de la presse : loi de 1881.",
            "Les réseaux sociaux facilitent l'expression directe mais diffusent aussi de fausses informations.",
            "Participation conventionnelle (vote, adhésion) et non conventionnelle (manifestation, pétition, boycott).",
          ],
          example: {
            statement: "Situation (fictive) : une association de défense de l'environnement s'oppose au projet d'une autoroute. Elle lance une pétition en ligne, organise une manifestation, rencontre des députés pour proposer un amendement et dépose un recours devant le tribunal administratif. Montrez que cette association agit comme un groupe d'intérêt et non comme un parti politique.",
            solution: [
              "Rappeler la distinction : un parti cherche à exercer le pouvoir en présentant des candidats ; un groupe d'intérêt cherche à influencer ceux qui l'exercent.",
              "Analyser l'objectif : l'association veut faire abandonner un projet précis ; elle ne présente pas de candidats et ne cherche pas à gouverner.",
              "Analyser les moyens : pétition et manifestation (mobiliser l'opinion), rencontre avec des députés et amendement (lobbying), recours (action en justice). Ce sont des moyens d'influence.",
              "Montrer son rôle démocratique : elle porte dans le débat public une cause que les élus doivent prendre en compte.",
              "Conclusion : par son objectif (influencer une décision) et ses moyens (pression et expertise), l'association agit comme un groupe d'intérêt.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque acteur (fictif) parmi : parti politique, groupe d'intérêt, média. (a) Une organisation qui présente des candidats à toutes les élections législatives avec un programme national. (b) Un syndicat de salariés qui appelle à la grève contre une réforme. (c) Un quotidien qui publie une enquête sur les dépenses d'un ministère. (d) Une fédération d'agriculteurs qui rencontre le ministre pour obtenir des aides. (e) Une association de consommateurs qui demande une loi contre les frais bancaires abusifs. (f) Une chaîne d'information qui organise un débat entre candidats.",
              hint: "Posez deux questions : l'acteur présente-t-il des candidats pour gouverner ? Sa fonction principale est-elle de produire et diffuser de l'information ?",
              solution: [
                "(a) Parti politique : il présente des candidats et un programme pour exercer le pouvoir.",
                "(b) Groupe d'intérêt : il défend les intérêts des salariés et fait pression par la grève.",
                "(c) Média : il informe et contrôle les gouvernants par l'investigation.",
                "(d) Groupe d'intérêt : il cherche à influencer une décision publique par le lobbying.",
                "(e) Groupe d'intérêt : il défend les intérêts des consommateurs auprès du législateur.",
                "(f) Média : il organise le débat public.",
                "Résultat : parti (a) ; groupes d'intérêt (b), (d), (e) ; médias (c) et (f).",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives) : enquête auprès de 1 200 jeunes de 18 à 24 ans. Au cours des douze derniers mois, 180 ont signé une pétition, 96 ont participé à une manifestation, 60 ont boycotté un produit et 24 ont adhéré à un parti politique. (1) Calculez la proportion de jeunes concernés par chaque forme de participation. (2) Classez ces formes en participation conventionnelle et non conventionnelle. (3) Que peut-on conclure de ces données sur l'engagement politique de ces jeunes ?",
              hint: "Proportion = effectif concerné ÷ effectif total × 100.",
              solution: [
                "(1) Pétition : 180 ÷ 1 200 × 100 = 15 %. Manifestation : 96 ÷ 1 200 × 100 = 8 %. Boycott : 60 ÷ 1 200 × 100 = 5 %. Adhésion à un parti : 24 ÷ 1 200 × 100 = 2 %.",
                "(2) L'adhésion à un parti relève de la participation conventionnelle ; la pétition, la manifestation et le boycott relèvent de la participation non conventionnelle.",
                "(3) Dans cette enquête (données fictives), les jeunes s'engagent beaucoup plus souvent par des formes non conventionnelles (jusqu'à 15 % pour la pétition) que par l'adhésion à un parti (2 %), soit 7,5 fois moins que la pétition (15 ÷ 2).",
                "On ne peut donc pas conclure à un désintérêt pour la politique : l'engagement prend des formes plus ponctuelles, centrées sur des causes précises, plutôt que l'adhésion durable à une organisation partisane.",
                "Résultat : 15 %, 8 %, 5 % et 2 % ; la participation non conventionnelle domine nettement l'adhésion partisane.",
              ],
            },
            {
              level: 3,
              statement: "Dans un développement construit d'une vingtaine de lignes, montrez que les groupes d'intérêt participent à la vie démocratique, mais que leur action pose aussi des problèmes.",
              hint: "Dans une première partie, montrez ce qu'ils apportent (représentation, expertise, mobilisation) ; dans une seconde, les risques (inégalités de moyens, opacité) et les réponses apportées.",
              solution: [
                "Introduction : les groupes d'intérêt (syndicats, organisations patronales, associations, ONG) cherchent à influencer les décisions publiques sans exercer le pouvoir. Leur rôle fait débat.",
                "Apport 1, la représentation : ils portent auprès des décideurs les demandes de groupes sociaux (salariés, agriculteurs, consommateurs) ou de causes (environnement) qui, sans eux, seraient peu entendues entre deux élections.",
                "Apport 2, l'expertise : ils fournissent aux élus des informations techniques sur les effets d'une loi (par exemple sur un secteur d'activité), ce qui peut améliorer les décisions.",
                "Apport 3, la mobilisation : pétitions, manifestations et campagnes font participer les citoyens et nourrissent le débat public ; les syndicats participent aussi à la négociation collective.",
                "Problème 1, l'inégalité des moyens : les groupes les mieux dotés (grandes entreprises, fédérations puissantes) peuvent peser davantage que des intérêts diffus ou peu organisés, ce qui contredit l'égalité entre citoyens.",
                "Problème 2, l'opacité : un lobbying discret peut orienter une loi sans que les citoyens le sachent. Pour y répondre, la loi Sapin 2 (2016) impose aux représentants d'intérêts de s'inscrire sur un répertoire public tenu par la Haute Autorité pour la transparence de la vie publique.",
                "Conclusion : les groupes d'intérêt sont des intermédiaires utiles entre la société et le pouvoir, à condition que leur action soit transparente et que la décision finale reste aux élus.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque acteur ou notion à sa description.",
            pairs: [
              { left: "Parti politique", right: "Présente des candidats aux élections pour exercer le pouvoir" },
              { left: "Syndicat de salariés", right: "Défend les intérêts des travailleurs et peut appeler à la grève" },
              { left: "Lobbying", right: "Action d'influence directe auprès des élus et des ministres" },
              { left: "Mise à l'agenda", right: "Fait de rendre un sujet prioritaire dans le débat public" },
              { left: "Pluralisme", right: "Existence de partis et de médias multiples et concurrents" },
              { left: "Participation non conventionnelle", right: "Manifester, signer une pétition ou boycotter un produit" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue un parti politique d'un groupe d'intérêt ?",
              options: [
                "Le parti ne peut pas recevoir d'argent public",
                "Le groupe d'intérêt est toujours illégal",
                "Le parti présente des candidats pour exercer le pouvoir",
                "Le groupe d'intérêt n'a jamais le droit de rencontrer des élus",
              ],
              answer: 2,
              why: "Le parti veut conquérir et exercer le pouvoir ; le groupe d'intérêt veut seulement influencer ceux qui l'exercent.",
            },
            {
              q: "Quelle loi garantit en France la liberté de la presse ?",
              options: [
                "La loi du 29 juillet 1881",
                "La loi du 1er juillet 1901",
                "La loi Waldeck-Rousseau de 1884",
              ],
              answer: 0,
              why: "La loi de 1881 fonde la liberté de la presse ; celle de 1901 concerne les associations et celle de 1884 les syndicats.",
            },
            {
              q: "Laquelle de ces actions relève de la participation conventionnelle ?",
              options: [
                "Signer une pétition en ligne",
                "Boycotter une marque",
                "Participer à une manifestation",
                "Voter à une élection",
              ],
              answer: 3,
              why: "Le vote passe par le canal prévu par les institutions ; les trois autres actions sont non conventionnelles.",
            },
            {
              q: "Que signifie le rôle de « mise à l'agenda » des médias ?",
              options: [
                "Publier le calendrier officiel des élections",
                "Rendre certains sujets prioritaires dans le débat public",
                "Fixer les dates des réunions du Conseil des ministres",
                "Décider à la place des élus du contenu des lois",
              ],
              answer: 1,
              why: "En choisissant les sujets dont ils parlent, les médias influencent ce que le public et les gouvernants jugent important.",
            },
            {
              q: "Quel risque les réseaux sociaux font-ils peser sur le débat démocratique ?",
              options: [
                "La diffusion rapide de fausses informations",
                "La suppression du droit de vote",
                "L'interdiction de tous les partis politiques d'opposition",
                "La fin de la liberté d'association",
              ],
              answer: 0,
              why: "Les réseaux sociaux facilitent l'expression de chacun, mais aussi la circulation de fausses informations et l'enfermement dans des bulles de filtre.",
            },
          ],
          trap: "Confondre parti politique et groupe d'intérêt parce que tous deux cherchent à peser sur la politique : seul le parti présente des candidats pour exercer lui-même le pouvoir.",
          method: "Pour classer un acteur, posez-vous toujours deux questions dans l'ordre : quel est son objectif (exercer le pouvoir, l'influencer, informer) ? Quels sont ses moyens (élections, pression, diffusion d'information) ? Justifiez votre réponse avec ces deux critères.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'opinion-publique',
          title: 'L\'opinion publique et les sondages',
          minutes: 30,
          objectives: [
            "Définir l'opinion publique et identifier ses modes d'expression.",
            "Expliquer la construction d'un sondage : population, échantillon représentatif, méthode des quotas.",
            "Calculer et interpréter une marge d'erreur pour lire un résultat de sondage avec prudence.",
            "Présenter les principales critiques adressées aux sondages d'opinion.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'opinion publique ?",
              paragraphs: [
                "L'opinion publique désigne l'ensemble des jugements et des attitudes partagés par une population, à un moment donné, sur des questions d'intérêt général. Elle s'est affirmée au XVIIIe siècle avec le développement de la presse, des cafés et des salons, où des particuliers discutaient librement des affaires publiques : le philosophe Jürgen Habermas parle de la naissance d'un « espace public ».",
                "L'opinion publique s'exprime de multiples façons : par le vote, par les manifestations et les pétitions, dans les courriers et les commentaires adressés aux médias, sur les réseaux sociaux. Depuis le XXe siècle, elle est surtout mesurée par les sondages d'opinion, au point que l'on confond souvent les deux.",
              ],
            },
            {
              heading: "Le sondage : interroger une partie pour connaître le tout",
              paragraphs: [
                "Un sondage consiste à interroger un échantillon, c'est-à-dire une partie de la population étudiée (la population mère, par exemple les électeurs inscrits), pour en déduire les opinions de l'ensemble. Pour que cette déduction soit valable, l'échantillon doit être représentatif : il doit ressembler à la population mère. La taille compte moins que la représentativité : un échantillon de 1 000 personnes bien construit vaut mieux que 100 000 réponses de volontaires sur un site.",
                "Deux méthodes existent. La méthode aléatoire tire les personnes au sort, chacune ayant la même chance d'être choisie. La méthode des quotas, la plus utilisée en France, construit un échantillon qui reproduit la structure de la population selon quelques critères : sexe, âge, profession (catégorie socioprofessionnelle), région, taille de la commune. Si la population compte 52 % de femmes, l'échantillon doit en compter 52 %. Les instituts procèdent ensuite à un redressement, en pondérant les réponses pour corriger les écarts restants.",
              ],
              box: { label: "Définition", text: "Échantillon représentatif : partie de la population qui en reproduit les caractéristiques. Méthode des quotas : on reproduit dans l'échantillon la structure de la population (sexe, âge, profession, région, taille de commune)." },
            },
            {
              heading: "La marge d'erreur : un résultat est une estimation",
              paragraphs: [
                "Même bien construit, un échantillon ne donne qu'une estimation : un autre échantillon aurait donné un résultat un peu différent. Pour un échantillon aléatoire de taille n, on retient une approximation vue en mathématiques : dans environ 95 % des cas, la proportion réelle se situe à moins de 1 ÷ √n de la proportion observée. Pour n = 1 000, 1 ÷ √1 000 ≈ 0,032, soit une marge d'environ 3 points de pourcentage.",
                "Conséquence : si un sondage auprès de 1 000 personnes donne 52 % pour une réponse et 48 % pour l'autre, on ne peut pas affirmer que la première est majoritaire, car leurs fourchettes (environ 48,8 % à 55,2 % et 44,8 % à 51,2 %) se chevauchent. Pour diviser la marge par deux, il faut multiplier la taille de l'échantillon par quatre. Pour un échantillon par quotas, ce calcul n'est qu'un ordre de grandeur, mais il rappelle qu'un écart de un ou deux points n'est pas significatif.",
              ],
              box: { label: "Formule", text: "Marge d'erreur approximative (au niveau de confiance de 95 %) : 1 ÷ √n. Fourchette : proportion observée - 1 ÷ √n à proportion observée + 1 ÷ √n. Exemple : n = 400 donne 1 ÷ 20 = 0,05, soit 5 points." },
            },
            {
              heading: "Un encadrement légal et des critiques",
              paragraphs: [
                "En France, la loi du 19 juillet 1977 encadre les sondages électoraux et a créé la Commission des sondages, qui veille à leur qualité. Leur publication doit être accompagnée d'une notice précisant notamment le commanditaire, l'organisme, les dates, la taille de l'échantillon, la méthode, le texte des questions et la marge d'erreur. La publication de sondages est interdite la veille et le jour du scrutin.",
                "Les sondages font l'objet de critiques. Dans un article de 1973 intitulé « L'opinion publique n'existe pas », Pierre Bourdieu conteste trois présupposés : que tout le monde a une opinion sur tout, que toutes les opinions se valent, et qu'il existe un accord sur les questions qui méritent d'être posées. Un sondage peut ainsi imposer une problématique, produire des opinions sur des sujets auxquels les sondés n'avaient pas réfléchi, et faire disparaître les non-réponses dans la présentation des résultats.",
                "La formulation des questions influence aussi les réponses (une question orientée suggère la bonne réponse). Enfin, un sondage est une photographie à un instant donné, non une prédiction ; sa publication peut même influencer les comportements, par exemple en incitant à rejoindre le camp donné gagnant (effet de ralliement) ou au contraire à soutenir celui donné perdant.",
              ],
            },
          ],
          keyPoints: [
            "L'opinion publique est l'ensemble des jugements partagés sur des questions d'intérêt général ; elle s'exprime par le vote, les manifestations, les médias et les sondages.",
            "Un sondage interroge un échantillon représentatif de la population mère ; en France, surtout par la méthode des quotas.",
            "Marge d'erreur approximative : 1 ÷ √n ; pour 1 000 personnes, environ 3 points.",
            "Deux résultats dont les fourchettes se chevauchent ne permettent pas de conclure.",
            "Loi de 1977, Commission des sondages, interdiction de publication la veille et le jour du scrutin.",
            "Bourdieu (1973) : « L'opinion publique n'existe pas » ; critiques sur la formulation, les non-réponses et l'imposition de problématique.",
          ],
          example: {
            statement: "Un sondage réalisé auprès de 1 000 électeurs (données fictives) donne 52 % des intentions de vote au candidat A et 48 % au candidat B. Un journal titre : « A va gagner l'élection ». Ce titre est-il justifié ?",
            solution: [
              "Calculer la marge d'erreur : 1 ÷ √1 000 ≈ 1 ÷ 31,6 ≈ 0,032, soit environ 3,2 points.",
              "Construire la fourchette de A : de 52 - 3,2 = 48,8 % à 52 + 3,2 = 55,2 %.",
              "Construire la fourchette de B : de 48 - 3,2 = 44,8 % à 48 + 3,2 = 51,2 %.",
              "Comparer : les deux fourchettes se chevauchent (entre 48,8 % et 51,2 %). L'écart observé de 4 points ne permet pas d'affirmer que A est réellement en tête.",
              "Ajouter les limites générales : un sondage est une photographie à un instant donné, les intentions peuvent évoluer d'ici le scrutin, et une partie des sondés peut ne pas aller voter.",
              "Réponse : le titre n'est pas justifié ; il faudrait écrire que les deux candidats sont au coude à coude.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un institut veut interroger un échantillon de 1 000 personnes représentatif de la population adulte d'un pays par la méthode des quotas. Dans la population (données fictives), il y a 52 % de femmes et 48 % d'hommes ; 27 % ont de 18 à 34 ans, 42 % de 35 à 59 ans et 31 % 60 ans ou plus. (1) Combien de femmes et d'hommes l'échantillon doit-il compter ? (2) Combien de personnes dans chaque tranche d'âge ? (3) Pourquoi un questionnaire rempli par 1 000 volontaires sur le site d'un journal ne serait-il pas représentatif ?",
              hint: "Appliquez chaque pourcentage à l'effectif de l'échantillon : 1 000 × pourcentage ÷ 100.",
              solution: [
                "(1) Femmes : 1 000 × 52 ÷ 100 = 520. Hommes : 1 000 × 48 ÷ 100 = 480. Vérification : 520 + 480 = 1 000.",
                "(2) 18-34 ans : 270 ; 35-59 ans : 420 ; 60 ans ou plus : 310. Vérification : 270 + 420 + 310 = 1 000.",
                "(3) Les volontaires choisissent eux-mêmes de répondre : ce sont des lecteurs de ce journal, souvent les plus intéressés par le sujet ou les plus engagés. Leur profil (âge, opinions, milieu social) ne reproduit pas celui de la population : l'échantillon est biaisé, quelle que soit sa taille.",
                "Résultat : 520 femmes et 480 hommes ; 270, 420 et 310 personnes selon l'âge ; un échantillon de volontaires n'est pas représentatif.",
              ],
            },
            {
              level: 2,
              statement: "Deux sondages (données fictives) mesurent la part des personnes favorables à une mesure. Sondage 1 : 400 personnes, 30 % favorables. Sondage 2 : 2 500 personnes, 30 % favorables. (1) Calculez la marge d'erreur approximative (1 ÷ √n) de chaque sondage, en points. (2) Donnez la fourchette de chaque résultat. (3) Quelle taille d'échantillon faudrait-il pour obtenir une marge d'environ 1 point ? (4) Que retenez-vous sur le lien entre taille de l'échantillon et précision ?",
              hint: "√400 = 20 et √2 500 = 50. Pour la question 3, cherchez n tel que 1 ÷ √n = 0,01.",
              solution: [
                "(1) Sondage 1 : 1 ÷ √400 = 1 ÷ 20 = 0,05, soit 5 points. Sondage 2 : 1 ÷ √2 500 = 1 ÷ 50 = 0,02, soit 2 points.",
                "(2) Sondage 1 : de 30 - 5 = 25 % à 30 + 5 = 35 %. Sondage 2 : de 30 - 2 = 28 % à 30 + 2 = 32 %.",
                "(3) 1 ÷ √n = 0,01 donne √n = 100, donc n = 100 × 100 = 10 000 personnes.",
                "(4) Plus l'échantillon est grand, plus la fourchette est étroite, mais la précision progresse lentement : multiplier la taille par 4 divise seulement la marge par 2 (de 400 à 1 600 personnes, on passe de 5 à 2,5 points). C'est pourquoi les instituts se contentent souvent d'environ 1 000 personnes, pour un coût raisonnable.",
                "Résultat : marges de 5 et 2 points, fourchettes de 25 à 35 % et de 28 à 32 % ; il faudrait 10 000 personnes pour une marge de 1 point.",
              ],
            },
            {
              level: 3,
              statement: "Document (fictif) : un site d'information publie le résultat suivant : « 72 % des Français pour l'uniforme à l'école ! ». La question posée était : « Êtes-vous favorable à l'uniforme, qui permettra enfin de lutter contre les inégalités et le harcèlement à l'école ? ». Résultats : oui 72 %, non 18 %, sans opinion 10 %. Le questionnaire a été rempli par 600 internautes volontaires. Dans un développement construit, montrez que ce résultat doit être interprété avec une grande prudence.",
              hint: "Examinez successivement l'échantillon, la formulation de la question, la marge d'erreur, le traitement des non-réponses et la présentation du titre.",
              solution: [
                "Introduction : un résultat de sondage n'a de valeur que si sa méthode est rigoureuse ; plusieurs défauts affaiblissent ici la conclusion.",
                "L'échantillon : 600 internautes volontaires ne forment pas un échantillon représentatif (ni quotas, ni tirage au sort) ; ce sont des lecteurs du site, peut-être particulièrement intéressés par le sujet. On ne peut pas parler « des Français ».",
                "La formulation : la question est orientée, car elle attribue d'avance des effets positifs à l'uniforme (« permettra enfin de lutter contre les inégalités et le harcèlement »). Elle pousse à répondre oui ; une formulation neutre serait : « Êtes-vous favorable ou opposé à l'uniforme à l'école ? ».",
                "La marge d'erreur : même avec un échantillon aléatoire de 600 personnes, la marge serait d'environ 1 ÷ √600 ≈ 0,041, soit 4 points. Mais pour un échantillon de volontaires, ce calcul n'a pas de sens : le biais de sélection n'est pas mesurable.",
                "Les non-réponses : 10 % des répondants sont sans opinion ; le titre les fait disparaître. Comme le souligne Bourdieu, un sondage peut faire croire que chacun a une opinion sur tout, et imposer une question que les sondés ne se posaient pas.",
                "Conclusion : le titre transforme une réponse orientée de 600 volontaires en opinion de tous les Français ; ce résultat ne permet pas de connaître l'opinion publique sur l'uniforme.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Opinion publique et sondages.",
            statements: [
              { text: "Plus un échantillon est grand, plus il est forcément représentatif.", true: false, why: "La représentativité dépend de la méthode (quotas, tirage au sort) ; 100 000 volontaires peuvent former un échantillon biaisé." },
              { text: "La méthode des quotas reproduit dans l'échantillon la structure de la population.", true: true, why: "On respecte les proportions de la population selon le sexe, l'âge, la profession, la région, la taille de commune." },
              { text: "Pour 1 000 personnes interrogées, la marge d'erreur est d'environ 3 points.", true: true, why: "1 ÷ √1 000 ≈ 0,032, soit environ 3 points." },
              { text: "Un sondage prédit avec certitude le résultat d'une élection.", true: false, why: "C'est une photographie à un instant donné, soumise à une marge d'erreur, et les intentions peuvent changer." },
              { text: "En France, on peut publier un sondage électoral la veille du scrutin.", true: false, why: "La publication est interdite la veille et le jour du scrutin." },
              { text: "La formulation d'une question peut modifier les réponses obtenues.", true: true, why: "Une question orientée suggère une réponse ; c'est l'un des principaux biais des sondages." },
              { text: "Pour Bourdieu, toutes les opinions recueillies par un sondage ont le même poids social.", true: false, why: "Bourdieu critique justement ce présupposé selon lequel toutes les opinions se valent." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un échantillon représentatif ?",
              options: [
                "Un groupe de volontaires très nombreux",
                "Une partie de la population qui en reproduit les caractéristiques",
                "L'ensemble des électeurs inscrits sur les listes électorales du pays",
                "Les personnes les mieux informées sur le sujet",
              ],
              answer: 1,
              why: "Un échantillon représentatif ressemble à la population mère, ce qui permet d'en déduire ses opinions.",
            },
            {
              q: "Quelle est la marge d'erreur approximative d'un sondage auprès de 400 personnes ?",
              options: ["2 points", "4 points", "10 points", "5 points"],
              answer: 3,
              why: "1 ÷ √400 = 1 ÷ 20 = 0,05, soit 5 points de pourcentage.",
            },
            {
              q: "Un sondage donne 51 % contre 49 % avec une marge de 3 points. Que peut-on conclure ?",
              options: [
                "Que la première réponse est sûrement majoritaire",
                "Que la seconde réponse est sûrement majoritaire",
                "Qu'on ne peut pas départager les deux réponses",
              ],
              answer: 2,
              why: "Les fourchettes (48 à 54 % et 46 à 52 %) se chevauchent : l'écart n'est pas significatif.",
            },
            {
              q: "Quelle méthode les instituts français utilisent-ils le plus souvent ?",
              options: [
                "La méthode des quotas",
                "Le recensement de toute la population",
                "Le tirage au sort intégral sur les listes électorales",
                "L'appel aux volontaires sur les réseaux sociaux",
              ],
              answer: 0,
              why: "La méthode des quotas est la plus utilisée en France ; elle reproduit la structure de la population selon quelques critères.",
            },
            {
              q: "Quel est l'un des présupposés critiqués par Bourdieu dans « L'opinion publique n'existe pas » ?",
              options: [
                "Les sondages coûtent trop cher aux médias",
                "Tout le monde a une opinion sur tout",
                "Les sondés mentent toujours",
                "Les échantillons sont toujours trop petits",
              ],
              answer: 1,
              why: "Bourdieu conteste l'idée que chacun a une opinion sur toute question, que toutes se valent et qu'il y a accord sur les questions à poser.",
            },
          ],
          trap: "Conclure qu'une réponse est majoritaire dès qu'elle dépasse 50 % dans un sondage, sans tenir compte de la marge d'erreur : avec 1 000 personnes, un écart de quelques points peut ne pas être significatif.",
          method: "Devant un résultat de sondage, vérifiez quatre éléments avant de conclure : qui a été interrogé et comment (échantillon), combien de personnes (marge d'erreur 1 ÷ √n), quelle question exacte (formulation), et quelle part de sans-opinion.",
        },
      ],
    },
    /* ==================================================================== */
    /* DIPLÔME, EMPLOI ET SALAIRE : QUELLES RELATIONS ?                      */
    /* ==================================================================== */
    {
      id: 'diplome-emploi-salaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'diplome-emploi',
          title: 'Le diplôme, une protection face au chômage',
          minutes: 30,
          objectives: [
            "Définir la population active, l'emploi et le chômage au sens du BIT, et calculer un taux de chômage.",
            "Montrer, à partir de données, que le diplôme protège du chômage et facilite l'insertion professionnelle.",
            "Expliquer pourquoi le diplôme protège du chômage : qualification, signal, concurrence pour les emplois.",
            "Comprendre que cette protection est relative.",
          ],
          course: [
            {
              heading: "Mesurer l'emploi et le chômage",
              paragraphs: [
                "La population active regroupe les personnes qui occupent un emploi (les actifs occupés) et celles qui en cherchent un (les chômeurs). Les autres sont inactives : élèves et étudiants sans emploi, retraités, personnes au foyer qui ne cherchent pas d'emploi. En France, l'Insee mesure l'emploi et le chômage grâce à l'enquête Emploi, selon les définitions du Bureau international du travail (BIT).",
                "Au sens du BIT, un chômeur est une personne de 15 ans ou plus qui remplit trois conditions : elle n'a pas travaillé, ne serait-ce qu'une heure, au cours d'une semaine donnée ; elle est disponible pour prendre un emploi dans les quinze jours ; elle a cherché activement un emploi au cours du mois précédent (ou en a trouvé un qui commence dans moins de trois mois). Une personne qui a travaillé une heure dans la semaine est donc un actif occupé.",
                "Le taux de chômage rapporte le nombre de chômeurs à la population active, et non à la population totale. Le taux d'emploi rapporte le nombre d'actifs occupés à la population totale d'une tranche d'âge (par exemple les 15-64 ans) : il mesure la capacité d'une économie à mobiliser sa population en âge de travailler.",
              ],
              box: { label: "Formule", text: "Population active = actifs occupés + chômeurs. Taux de chômage = chômeurs ÷ population active × 100. Taux d'emploi = actifs occupés ÷ population totale de la tranche d'âge × 100." },
            },
            {
              heading: "Le diplôme, une protection statistique face au chômage",
              paragraphs: [
                "Les enquêtes de l'Insee et celles du Céreq (Centre d'études et de recherches sur les qualifications), qui suivent les jeunes pendant plusieurs années après leur sortie de formation, montrent régulièrement la même relation : plus le niveau de diplôme est élevé, plus le taux de chômage est faible. Les personnes sans diplôme connaissent un taux de chômage plusieurs fois plus élevé que les diplômés de l'enseignement supérieur.",
                "Cet écart est particulièrement marqué au début de la vie active. On parle d'insertion professionnelle pour désigner le passage de la fin des études à un emploi stable. Les diplômés trouvent plus vite un premier emploi, accèdent plus souvent à un contrat à durée indéterminée (CDI) et à un emploi qualifié, tandis que les jeunes sans diplôme alternent plus souvent chômage et emplois précaires (contrats à durée déterminée, intérim). Le diplôme protège donc à la fois du chômage et de la précarité.",
                "Les périodes de crise économique accentuent ces différences : quand les embauches se raréfient, ce sont les moins diplômés qui en subissent le plus durement les effets.",
              ],
            },
            {
              heading: "Pourquoi le diplôme protège-t-il ?",
              paragraphs: [
                "Première explication, la qualification : le diplôme certifie que son titulaire a acquis des connaissances et des compétences qui le rendent plus productif. Les emplois qualifiés, qui se développent avec le progrès technique, lui sont accessibles. Deuxième explication, le signal : un employeur ne peut pas observer directement les capacités d'un candidat lors d'un recrutement ; le diplôme lui envoie un signal sur ses aptitudes (capacité de travail, persévérance, capacité d'apprendre) et réduit le risque d'erreur.",
                "Troisième explication, la concurrence entre candidats : quand les emplois sont rares, les employeurs choisissent les plus diplômés, même pour des postes qui ne demandent pas un tel niveau. Les diplômés acceptent alors des emplois moins qualifiés que leur formation (c'est le déclassement), ce qui évince les moins diplômés de ces emplois. Ces derniers sont ainsi en bout de « file d'attente » pour l'accès à l'emploi.",
              ],
              box: { label: "À retenir", text: "Le diplôme protège du chômage parce qu'il certifie une qualification, parce qu'il sert de signal aux employeurs, et parce qu'il place en tête de la file d'attente quand les emplois sont rares." },
            },
            {
              heading: "Une protection relative",
              paragraphs: [
                "La protection apportée par le diplôme n'est pas une garantie individuelle. La spécialité compte autant que le niveau : à niveau égal, certains domaines offrent plus de débouchés que d'autres. L'insertion dépend aussi de la conjoncture économique, du territoire et d'autres facteurs, comme l'origine sociale, les réseaux de relations ou le genre.",
                "Avec l'allongement des études (la massification scolaire), de plus en plus de jeunes sont diplômés : l'objectif d'amener 80 % d'une génération au niveau du baccalauréat a été fixé en 1985. Le diplôme devient alors de plus en plus nécessaire pour accéder à l'emploi, mais de moins en moins suffisant pour garantir un emploi correspondant à sa formation. On parle parfois d'inflation des diplômes.",
              ],
            },
          ],
          keyPoints: [
            "Population active = actifs occupés + chômeurs ; un chômeur BIT est sans emploi, disponible et en recherche active.",
            "Taux de chômage = chômeurs ÷ population active × 100 (et non population totale).",
            "Plus le diplôme est élevé, plus le taux de chômage est faible, surtout en début de vie active.",
            "Les diplômés s'insèrent plus vite et plus souvent en CDI ; le diplôme protège aussi de la précarité.",
            "Trois explications : qualification, signal envoyé aux employeurs, file d'attente et déclassement.",
            "Protection relative : spécialité, conjoncture, territoire et inflation des diplômes comptent aussi.",
          ],
          example: {
            statement: "Document (données fictives) : dans une région, on compte 4 000 actifs sans diplôme, dont 600 chômeurs, et 10 000 actifs diplômés du supérieur, dont 500 chômeurs. Calculez le taux de chômage de chaque groupe, comparez-les, puis interprétez.",
            solution: [
              "Rappeler la formule : taux de chômage = chômeurs ÷ population active × 100.",
              "Sans diplôme : 600 ÷ 4 000 × 100 = 15 %.",
              "Diplômés du supérieur : 500 ÷ 10 000 × 100 = 5 %.",
              "Comparer : l'écart est de 15 - 5 = 10 points de pourcentage ; le rapport est de 15 ÷ 5 = 3. Le taux de chômage des non-diplômés est trois fois plus élevé.",
              "Interpréter : le diplôme protège du chômage, parce qu'il certifie une qualification, sert de signal aux employeurs et place ses titulaires en tête de la file d'attente pour les emplois.",
              "Réponse : 15 % contre 5 %, soit un taux trois fois plus élevé pour les non-diplômés dans cette région.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "(1) Classez chaque personne parmi : actif occupé, chômeur au sens du BIT, inactif. (a) Une étudiante qui ne travaille pas et ne cherche pas d'emploi. (b) Un retraité. (c) Un lycéen qui a travaillé 3 heures la semaine dernière dans un restaurant. (d) Une femme sans emploi, disponible, qui envoie des candidatures chaque semaine. (e) Un homme sans emploi qui a cessé de chercher, découragé. (2) Dans un pays (données fictives), on compte 27 millions d'actifs occupés et 3 millions de chômeurs. Calculez la population active et le taux de chômage.",
              hint: "Pour être chômeur BIT, il faut cumuler trois conditions : être sans emploi, disponible et en recherche active.",
              solution: [
                "(1a) Inactive : elle ne travaille pas et ne cherche pas d'emploi.",
                "(1b) Inactif.",
                "(1c) Actif occupé : une seule heure de travail dans la semaine suffit.",
                "(1d) Chômeuse au sens du BIT : sans emploi, disponible, en recherche active.",
                "(1e) Inactif : il ne recherche plus d'emploi, il n'est donc pas compté comme chômeur, même s'il souhaiterait travailler.",
                "(2) Population active = 27 + 3 = 30 millions. Taux de chômage = 3 ÷ 30 × 100 = 10 %.",
                "Résultat : actif occupé (c) ; chômeuse (d) ; inactifs (a), (b), (e) ; population active de 30 millions et taux de chômage de 10 %.",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives) : actifs et chômeurs selon le diplôme. Sans diplôme : 2 000 actifs, 340 chômeurs. Baccalauréat : 5 000 actifs, 450 chômeurs. Bac + 2 : 3 000 actifs, 180 chômeurs. Bac + 3 et plus : 6 000 actifs, 300 chômeurs. (1) Calculez le taux de chômage de chaque groupe. (2) Calculez le taux de chômage de l'ensemble. (3) Combien de fois le taux de chômage des non-diplômés est-il plus élevé que celui des bac + 3 et plus ? (4) Rédigez une phrase de conclusion.",
              hint: "Pour l'ensemble, additionnez d'abord tous les chômeurs et tous les actifs ; ne faites pas la moyenne des quatre taux.",
              solution: [
                "(1) Sans diplôme : 340 ÷ 2 000 × 100 = 17 %. Baccalauréat : 450 ÷ 5 000 × 100 = 9 %. Bac + 2 : 180 ÷ 3 000 × 100 = 6 %. Bac + 3 et plus : 300 ÷ 6 000 × 100 = 5 %.",
                "(2) Chômeurs : 340 + 450 + 180 + 300 = 1 270. Actifs : 2 000 + 5 000 + 3 000 + 6 000 = 16 000. Taux d'ensemble : 1 270 ÷ 16 000 × 100 ≈ 7,9 %.",
                "Remarque : la moyenne simple des quatre taux, (17 + 9 + 6 + 5) ÷ 4 = 9,25 %, serait fausse, car les groupes n'ont pas le même nombre d'actifs.",
                "(3) 17 ÷ 5 = 3,4 : le taux de chômage des non-diplômés est 3,4 fois plus élevé que celui des bac + 3 et plus.",
                "(4) Dans ce document (données fictives), le taux de chômage diminue à chaque niveau de diplôme, de 17 % sans diplôme à 5 % à bac + 3 et plus : le diplôme protège du chômage.",
                "Résultat : 17 %, 9 %, 6 % et 5 % ; environ 7,9 % pour l'ensemble ; un rapport de 3,4 entre les extrêmes.",
              ],
            },
            {
              level: 3,
              statement: "Document (données fictives) : taux de chômage trois ans après la fin des études, pour deux générations de jeunes. Génération A, entrée sur le marché du travail en période de croissance : sans diplôme, 30 % ; CAP-BEP, 18 % ; baccalauréat, 12 % ; bac + 5, 5 %. Génération B, entrée en période de crise : sans diplôme, 40 % ; CAP-BEP, 24 % ; baccalauréat, 15 % ; bac + 5, 7 %. (1) Calculez, pour chaque diplôme, la hausse du taux de chômage entre les deux générations, en points. (2) Calculez le rapport entre le taux des non-diplômés et celui des bac + 5 pour chaque génération. (3) Dans un développement construit, montrez à l'aide du document et de vos connaissances que le diplôme protège du chômage, et que cette protection est particulièrement précieuse en période de crise.",
              hint: "Une variation en points est une différence de pourcentages. Pour expliquer, mobilisez les trois mécanismes : qualification, signal, file d'attente.",
              solution: [
                "(1) Sans diplôme : 40 - 30 = +10 points. CAP-BEP : 24 - 18 = +6 points. Baccalauréat : 15 - 12 = +3 points. Bac + 5 : 7 - 5 = +2 points.",
                "(2) Génération A : 30 ÷ 5 = 6. Génération B : 40 ÷ 7 ≈ 5,7. Les non-diplômés ont un taux de chômage environ six fois plus élevé que les bac + 5 dans les deux générations.",
                "(3) Le diplôme protège du chômage : dans chaque génération, le taux de chômage diminue quand le niveau de diplôme augmente (de 30 % à 5 % pour la génération A).",
                "Explication : le diplôme certifie une qualification recherchée par les entreprises ; il envoie aux employeurs un signal sur les capacités du candidat ; et quand les emplois sont rares, les employeurs recrutent en priorité les plus diplômés, y compris sur des postes moins qualifiés (déclassement), ce qui place les non-diplômés en fin de file d'attente.",
                "En période de crise : la hausse du chômage touche tous les niveaux, mais elle est de 10 points pour les non-diplômés contre 2 points pour les bac + 5. L'écart entre les deux groupes passe de 25 points (30 - 5) à 33 points (40 - 7). Le mécanisme de file d'attente s'intensifie quand les embauches se raréfient.",
                "Nuance : le rapport entre les taux reste proche de 6, et 7 % des bac + 5 sont tout de même au chômage dans la génération B : la protection est forte, mais relative.",
                "Conclusion : le diplôme protège du chômage, et cette protection est d'autant plus précieuse, en points de pourcentage, que la conjoncture est mauvaise.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Actif occupé", right: "Personne qui a travaillé au moins une heure pendant la semaine de référence" },
              { left: "Chômeur au sens du BIT", right: "Personne sans emploi, disponible et en recherche active d'emploi" },
              { left: "Inactif", right: "Personne qui n'a pas d'emploi et n'en cherche pas" },
              { left: "Taux de chômage", right: "Part des chômeurs dans la population active" },
              { left: "Insertion professionnelle", right: "Passage de la fin des études à un emploi stable" },
              { left: "Déclassement", right: "Fait d'occuper un emploi moins qualifié que son diplôme" },
            ],
          },
          quiz: [
            {
              q: "Comment calcule-t-on le taux de chômage ?",
              options: [
                "Chômeurs ÷ population totale × 100",
                "Chômeurs ÷ actifs occupés × 100",
                "Chômeurs ÷ population active × 100",
                "Actifs occupés ÷ population active × 100",
              ],
              answer: 2,
              why: "Le taux de chômage rapporte les chômeurs à la population active, c'est-à-dire aux actifs occupés et aux chômeurs.",
            },
            {
              q: "Un étudiant a travaillé 2 heures la semaine dernière. Comment l'Insee le classe-t-il ?",
              options: ["Actif occupé", "Chômeur au sens du BIT", "Inactif"],
              answer: 0,
              why: "Selon le BIT, une seule heure de travail pendant la semaine de référence suffit pour être un actif occupé.",
            },
            {
              q: "Que montrent les enquêtes sur le lien entre diplôme et chômage ?",
              options: [
                "Le taux de chômage est le même à tous les niveaux de diplôme",
                "Les plus diplômés sont les plus souvent au chômage",
                "Le diplôme ne compte qu'à partir de 40 ans",
                "Plus le diplôme est élevé, plus le chômage est faible",
              ],
              answer: 3,
              why: "La relation est régulière : le taux de chômage diminue quand le niveau de diplôme s'élève, surtout en début de vie active.",
            },
            {
              q: "Selon la théorie du signal, pourquoi un employeur s'intéresse-t-il au diplôme ?",
              options: [
                "Parce que la loi l'oblige à recruter le plus diplômé",
                "Parce qu'il renseigne sur des capacités difficiles à observer",
                "Parce qu'il garantit que le candidat restera dans l'entreprise",
                "Parce qu'il fixe automatiquement le salaire",
              ],
              answer: 1,
              why: "L'employeur ne peut pas observer directement les aptitudes d'un candidat ; le diplôme lui en donne une indication.",
            },
            {
              q: "Qu'appelle-t-on déclassement ?",
              options: [
                "Occuper un emploi moins qualifié que son diplôme",
                "Perdre son emploi à la suite d'une crise économique",
                "Redoubler une classe au lycée",
              ],
              answer: 0,
              why: "Le déclassement désigne un décalage entre le niveau de diplôme et le niveau de qualification de l'emploi occupé.",
            },
          ],
          trap: "Calculer le taux de chômage en divisant le nombre de chômeurs par la population totale, ou faire la moyenne simple de plusieurs taux de chômage pour obtenir un taux d'ensemble.",
          method: "Avant tout calcul, écrivez la formule avec ses mots (chômeurs ÷ population active × 100), puis vérifiez que le dénominateur contient bien les actifs occupés et les chômeurs. Lisez toujours un taux avec une phrase : « sur 100 actifs sans diplôme, 17 sont au chômage ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'diplome-salaire',
          title: 'Diplôme et salaire : un lien statistique',
          minutes: 30,
          objectives: [
            "Distinguer salaire brut et salaire net, salaire moyen et salaire médian.",
            "Montrer, à partir de données, l'existence d'un lien statistique entre le niveau de diplôme et le salaire.",
            "Expliquer ce lien par la théorie du capital humain et par la théorie du signal.",
            "Distinguer corrélation et causalité.",
          ],
          course: [
            {
              heading: "Le salaire : définitions et mesures",
              paragraphs: [
                "Le salaire est la rémunération du travail d'un salarié, versée par son employeur en contrepartie de son travail, dans le cadre d'un contrat de travail. Le salaire brut est le montant avant prélèvement des cotisations et contributions sociales payées par le salarié ; le salaire net est celui qu'il perçoit effectivement. En France, le SMIC (salaire minimum interprofessionnel de croissance) fixe le salaire horaire minimum légal.",
                "Pour comparer des groupes, on utilise le salaire moyen (la somme des salaires divisée par le nombre de salariés) ou le salaire médian (le salaire qui partage les salariés en deux groupes de même effectif : la moitié gagne moins, l'autre moitié gagne plus). La moyenne est tirée vers le haut par les salaires très élevés ; la médiane y est peu sensible et décrit mieux la situation d'un salarié « typique ».",
              ],
              box: { label: "Définition", text: "Salaire médian : salaire tel que la moitié des salariés gagne moins et l'autre moitié gagne plus. Salaire moyen : somme des salaires ÷ nombre de salariés." },
            },
            {
              heading: "Un lien statistique entre diplôme et salaire",
              paragraphs: [
                "Les données de l'Insee montrent que le salaire moyen et le salaire médian augmentent avec le niveau de diplôme : les diplômés du supérieur gagnent en moyenne nettement plus que les bacheliers, qui gagnent eux-mêmes plus que les personnes sans diplôme. L'écart tend en outre à se creuser au fil de la carrière, car les salaires des plus diplômés progressent en général davantage avec l'âge et l'expérience.",
                "Il s'agit d'un lien statistique, c'est-à-dire d'une relation observée en moyenne sur un grand nombre de personnes. Il ne signifie pas que chaque diplômé gagne plus que chaque non-diplômé : les salaires sont dispersés à chaque niveau de diplôme, et certains bacheliers gagnent plus que certains diplômés de bac + 5.",
              ],
            },
            {
              heading: "La théorie du capital humain",
              paragraphs: [
                "L'économiste américain Gary Becker a développé, notamment dans Human Capital (1964), la théorie du capital humain : l'ensemble des connaissances, des compétences et des qualités (y compris la santé) qu'un individu possède et qui le rendent productif. Comme une entreprise investit dans des machines, un individu investit dans sa formation.",
                "Cet investissement a un coût : les frais d'études, mais surtout le coût d'opportunité, c'est-à-dire le salaire auquel on renonce en étudiant au lieu de travailler. Il rapporte un rendement : les études accroissent la productivité, et l'employeur accepte de rémunérer davantage un salarié plus productif. Selon cette théorie, l'individu poursuit ses études tant que les gains futurs attendus dépassent leurs coûts.",
              ],
              box: { label: "À retenir", text: "Capital humain (Becker) : connaissances et compétences qui rendent un individu productif. Les études sont un investissement : coût (frais et coût d'opportunité) contre gain (salaire plus élevé lié à une productivité plus forte)." },
            },
            {
              heading: "Le diplôme signal, et les limites de l'explication",
              paragraphs: [
                "La théorie du signal, proposée par l'économiste Michael Spence au début des années 1970, donne une autre explication : même si les études ne rendaient pas plus productif, le diplôme renseigne l'employeur sur des qualités difficiles à observer (capacité de travail, persévérance). Les employeurs proposent donc des salaires plus élevés aux plus diplômés. Dans les faits, les grilles de salaires des conventions collectives et de la fonction publique tiennent aussi compte du diplôme ou du niveau de qualification.",
                "Attention enfin à ne pas confondre corrélation et causalité. Deux variables corrélées varient ensemble, mais cela ne prouve pas que l'une est la cause de l'autre : d'autres facteurs, comme l'origine sociale, le sexe, le réseau de relations, la région ou le secteur d'activité, influencent à la fois le diplôme obtenu et le salaire. Le diplôme joue un rôle important, mais il n'explique pas à lui seul les différences de salaire.",
              ],
            },
          ],
          keyPoints: [
            "Salaire brut : avant cotisations ; salaire net : effectivement perçu. Le SMIC est le salaire minimum légal.",
            "Salaire médian : la moitié gagne moins, la moitié gagne plus ; moins sensible aux valeurs extrêmes que la moyenne.",
            "En moyenne, le salaire augmente avec le niveau de diplôme, et l'écart se creuse au cours de la carrière.",
            "Capital humain (Becker, 1964) : les études sont un investissement qui accroît la productivité, donc le salaire.",
            "Théorie du signal (Spence) : le diplôme révèle aux employeurs des qualités difficiles à observer.",
            "Un lien statistique n'est pas une loi individuelle, et une corrélation n'est pas forcément une causalité.",
          ],
          example: {
            statement: "Les salaires mensuels nets de sept salariés d'une petite entreprise sont (données fictives) : 1 400 ; 1 500 ; 1 600 ; 1 800 ; 2 000 ; 2 300 ; 6 000 euros. Calculez le salaire moyen et le salaire médian, puis expliquez pourquoi ils sont différents.",
            solution: [
              "Calculer la somme des salaires : 1 400 + 1 500 + 1 600 + 1 800 + 2 000 + 2 300 + 6 000 = 16 600 euros.",
              "Calculer la moyenne : 16 600 ÷ 7 ≈ 2 371 euros.",
              "Trouver la médiane : les salaires sont déjà rangés par ordre croissant ; avec 7 valeurs, la médiane est la 4e, soit 1 800 euros (trois salariés gagnent moins, trois gagnent plus).",
              "Comparer : la moyenne dépasse la médiane d'environ 571 euros, car le salaire de 6 000 euros (celui du dirigeant, par exemple) tire la moyenne vers le haut ; six salariés sur sept gagnent moins que la moyenne.",
              "Réponse : salaire moyen d'environ 2 371 euros, salaire médian de 1 800 euros ; la médiane décrit mieux le salaire typique dans cette entreprise.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Document (données fictives) : salaire mensuel net médian selon le diplôme. Sans diplôme : 1 500 euros ; CAP-BEP : 1 650 euros ; baccalauréat : 1 800 euros ; bac + 2 : 2 100 euros ; bac + 3 ou 4 : 2 400 euros ; bac + 5 : 3 000 euros. (1) Rédigez une phrase donnant le sens de 2 100 euros. (2) Calculez l'indice de chaque salaire en prenant pour base 100 le salaire des personnes sans diplôme. (3) De combien de pour cent le salaire médian des bac + 5 dépasse-t-il celui des bacheliers ?",
              hint: "Indice = valeur étudiée ÷ valeur de référence × 100. Pour le pourcentage, utilisez le taux de variation.",
              solution: [
                "(1) Dans ce document (données fictives), la moitié des salariés titulaires d'un bac + 2 gagne moins de 2 100 euros nets par mois, et l'autre moitié gagne plus.",
                "(2) Sans diplôme : 100. CAP-BEP : 1 650 ÷ 1 500 × 100 = 110. Baccalauréat : 1 800 ÷ 1 500 × 100 = 120. Bac + 2 : 2 100 ÷ 1 500 × 100 = 140. Bac + 3 ou 4 : 2 400 ÷ 1 500 × 100 = 160. Bac + 5 : 3 000 ÷ 1 500 × 100 = 200.",
                "Lecture de l'indice 200 : le salaire médian des bac + 5 est deux fois plus élevé que celui des personnes sans diplôme.",
                "(3) (3 000 - 1 800) ÷ 1 800 × 100 ≈ 66,7 %.",
                "Résultat : indices 100, 110, 120, 140, 160 et 200 ; le salaire médian des bac + 5 dépasse d'environ 66,7 % celui des bacheliers.",
              ],
            },
            {
              level: 2,
              statement: "Situation (données fictives et simplifiées) : à 18 ans, Léa hésite entre travailler tout de suite pour un salaire net de 1 500 euros par mois, ou faire trois années d'études (frais de 1 000 euros par an, sans emploi pendant ce temps), puis travailler pour un salaire net de 2 100 euros par mois. On néglige l'évolution des salaires et des prix. (1) Calculez le coût total des études, en distinguant les frais et le coût d'opportunité. (2) Calculez le gain annuel procuré par les études une fois Léa en emploi. (3) Au bout de combien d'années de travail Léa aura-t-elle compensé le coût de ses études ? (4) Quelle théorie ce raisonnement illustre-t-il ?",
              hint: "Le coût d'opportunité est le salaire auquel Léa renonce pendant ses trois années d'études : 3 ans × 12 mois × 1 500 euros.",
              solution: [
                "(1) Frais d'études : 3 × 1 000 = 3 000 euros. Coût d'opportunité : 3 × 12 × 1 500 = 54 000 euros. Coût total : 3 000 + 54 000 = 57 000 euros.",
                "(2) Gain mensuel : 2 100 - 1 500 = 600 euros. Gain annuel : 600 × 12 = 7 200 euros.",
                "(3) 57 000 ÷ 7 200 ≈ 7,9 : il faut environ 8 années de travail après les études pour compenser leur coût. Au-delà, l'investissement devient rentable, et il l'est d'autant plus que la carrière est longue.",
                "(4) C'est la théorie du capital humain de Gary Becker : les études sont un investissement qui a un coût (dont le coût d'opportunité, ici de loin le plus important) et qui rapporte des salaires plus élevés.",
                "Résultat : coût de 57 000 euros, gain de 7 200 euros par an, compensation au bout d'environ 8 ans ; ce calcul simplifié illustre la théorie du capital humain.",
              ],
            },
            {
              level: 3,
              statement: "Document (données fictives) : salaires mensuels nets selon le diplôme, en euros. Bacheliers : premier décile (D1) 1 400, médiane 1 800, neuvième décile (D9) 2 900. Diplômés de bac + 5 : D1 1 900, médiane 3 000, D9 5 200. (D1 est le salaire au-dessous duquel se trouvent les 10 % les moins payés ; D9 celui au-dessus duquel se trouvent les 10 % les mieux payés.) (1) Calculez le rapport entre les médianes des deux groupes. (2) Comparez le D9 des bacheliers et le D1 des bac + 5. (3) Dans un développement construit, montrez que le lien entre diplôme et salaire est un lien statistique, qui ne signifie pas que le diplôme suffit à déterminer le salaire.",
              hint: "Un lien statistique décrit une tendance moyenne ; cherchez dans le document la preuve que des individus moins diplômés peuvent gagner plus que des individus plus diplômés, puis cherchez les autres facteurs possibles.",
              solution: [
                "(1) 3 000 ÷ 1 800 ≈ 1,67 : le salaire médian des bac + 5 est environ 1,67 fois plus élevé que celui des bacheliers (environ 67 % de plus).",
                "(2) Le D9 des bacheliers (2 900 euros) est supérieur au D1 des bac + 5 (1 900 euros) : les 10 % de bacheliers les mieux payés gagnent plus que les 10 % de bac + 5 les moins payés. Les distributions se chevauchent.",
                "(3) Un lien réel : en moyenne, le salaire augmente avec le diplôme, comme le montre l'écart entre les médianes. La théorie du capital humain l'explique par une productivité plus élevée, la théorie du signal par l'information que le diplôme donne aux employeurs.",
                "Un lien statistique : il décrit une tendance sur un grand nombre de personnes, pas une règle individuelle. Le chevauchement des distributions montre qu'un bachelier peut gagner plus qu'un diplômé de bac + 5.",
                "D'autres facteurs : le salaire dépend aussi de l'expérience et de l'âge, du secteur d'activité, de la taille de l'entreprise, de la région, du temps de travail, du sexe, de l'origine sociale et du réseau de relations. Certains de ces facteurs influencent à la fois le diplôme et le salaire : corrélation ne veut pas dire causalité simple.",
                "Conclusion : le diplôme est un déterminant important du salaire, mais il ne suffit pas à l'expliquer ; il faut raisonner en termes de tendance et tenir compte des autres facteurs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul d'un salaire médian à partir d'une liste de salaires.",
            items: [
              "Ranger les salaires par ordre croissant",
              "Compter les salaires ainsi rangés et repérer le rang du milieu",
              "Lire le salaire situé à ce rang dans la liste rangée",
              "Vérifier qu'il y a autant de salaires au-dessous qu'au-dessus de cette valeur",
              "Rédiger une phrase : la moitié des salariés gagne moins que ce montant",
            ],
          },
          quiz: [
            {
              q: "Que signifie un salaire médian de 2 000 euros ?",
              options: [
                "La plupart des salariés gagnent exactement 2 000 euros",
                "La somme des salaires divisée par le nombre de salariés vaut 2 000 euros",
                "La moitié des salariés gagne moins de 2 000 euros",
                "Aucun salarié ne gagne plus de 2 000 euros",
              ],
              answer: 2,
              why: "La médiane partage les salariés en deux groupes égaux : la moitié gagne moins, l'autre moitié gagne plus.",
            },
            {
              q: "Dans la théorie du capital humain, qu'est-ce que le coût d'opportunité des études ?",
              options: [
                "Le salaire auquel on renonce en étudiant",
                "Le prix des livres et des fournitures",
                "Les frais d'inscription payés à l'université",
                "Le montant des bourses reçues",
              ],
              answer: 0,
              why: "Le coût d'opportunité est ce que l'on perd en choisissant les études plutôt que le travail : le salaire non perçu.",
            },
            {
              q: "Quel économiste est associé à la théorie du capital humain ?",
              options: ["Michael Spence", "Gary Becker", "Max Weber", "Pierre Bourdieu"],
              answer: 1,
              why: "Gary Becker a développé la théorie du capital humain, notamment dans Human Capital (1964) ; Spence est associé à la théorie du signal.",
            },
            {
              q: "Pourquoi dit-on que le lien entre diplôme et salaire est « statistique » ?",
              options: [
                "Parce qu'il est calculé par l'État pour fixer chaque salaire",
                "Parce qu'il ne concerne que les salariés du secteur public",
                "Parce qu'il est observé en moyenne, avec des exceptions individuelles",
              ],
              answer: 2,
              why: "La relation décrit une tendance sur un grand nombre de personnes : certains moins diplômés gagnent plus que certains plus diplômés.",
            },
            {
              q: "Dans une entreprise, le salaire moyen est bien plus élevé que le salaire médian. Quelle est l'explication la plus probable ?",
              options: [
                "Tous les salariés de l'entreprise sont payés exactement au SMIC",
                "Quelques salaires très élevés tirent la moyenne vers le haut",
                "Les salaires sont tous identiques",
                "La médiane a été mal calculée",
              ],
              answer: 1,
              why: "La moyenne est sensible aux valeurs extrêmes, contrairement à la médiane.",
            },
          ],
          trap: "Conclure d'un lien statistique entre diplôme et salaire que tout diplômé gagnera plus que tout non-diplômé, ou que le diplôme est la seule cause des écarts de salaire, en oubliant les autres facteurs.",
          method: "Pour lire un tableau de salaires selon le diplôme, procédez en trois temps : une phrase de lecture d'une donnée, un calcul de comparaison (écart, rapport ou indice), puis une interprétation qui mobilise une théorie (capital humain ou signal) et une nuance (lien statistique, autres facteurs).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'autres-facteurs-insertion',
          title: 'Origine sociale, réseaux, genre : d\'autres facteurs d\'insertion',
          minutes: 35,
          objectives: [
            "Montrer que l'origine sociale influence l'accès au diplôme et l'insertion professionnelle.",
            "Expliquer le rôle des réseaux de relations dans l'accès à l'emploi.",
            "Analyser les inégalités entre les femmes et les hommes face à l'emploi et au salaire.",
            "Identifier les discriminations à l'embauche et la méthode du testing.",
          ],
          course: [
            {
              heading: "L'origine sociale, avant et après le diplôme",
              paragraphs: [
                "L'origine sociale pèse d'abord sur l'accès au diplôme : les enfants de cadres obtiennent beaucoup plus souvent un diplôme de l'enseignement supérieur que les enfants d'ouvriers. Pierre Bourdieu l'explique par le capital culturel transmis dans la famille, proche de la culture valorisée par l'école. Le sociologue Raymond Boudon insiste aussi sur les choix d'orientation : à résultats scolaires égaux, les familles n'évaluent pas de la même façon les coûts, les risques et les bénéfices des études longues selon leur position sociale.",
                "Le capital économique compte aussi : financer des études longues, un logement dans une grande ville, un stage peu ou pas rémunéré à l'étranger est plus facile pour une famille aisée. À diplôme égal, l'origine sociale continue de jouer sur l'insertion : connaissance des codes du recrutement (rédiger une lettre de motivation, se présenter en entretien), informations sur les métiers, possibilité financière de chercher plus longtemps un emploi correspondant à sa formation.",
              ],
            },
            {
              heading: "Les réseaux de relations",
              paragraphs: [
                "Une part importante des emplois est obtenue grâce à des relations : parents, amis, anciens camarades, anciens collègues, maîtres de stage. Bourdieu appelle capital social l'ensemble des relations qu'un individu peut mobiliser. Ce capital est inégalement réparti : les familles des milieux favorisés connaissent plus souvent des personnes en position de recruter ou de recommander.",
                "Le sociologue américain Mark Granovetter a montré, dans un article de 1973 sur « la force des liens faibles » puis dans une enquête publiée en 1974, que les emplois sont souvent trouvés grâce à des liens faibles (de simples connaissances) plutôt qu'à des liens forts (famille, amis proches) : les liens faibles relient à des milieux différents du sien et apportent donc des informations nouvelles sur les offres d'emploi.",
              ],
              box: { label: "Définition", text: "Capital social : ensemble des relations qu'un individu peut mobiliser. Liens forts : proches (famille, amis). Liens faibles : simples connaissances, qui apportent souvent des informations nouvelles sur les emplois (Granovetter)." },
            },
            {
              heading: "Le genre : à diplôme égal, des parcours inégaux",
              paragraphs: [
                "En France, les jeunes femmes sont aujourd'hui en moyenne plus diplômées que les jeunes hommes. Pourtant, elles occupent plus souvent des emplois à temps partiel, elles sont concentrées dans un nombre plus limité de métiers (soin, éducation, services administratifs, commerce), souvent moins bien rémunérés, et elles accèdent moins aux postes les plus élevés : on parle de plafond de verre. Les interruptions de carrière ou la réduction du temps de travail après la naissance des enfants les concernent beaucoup plus que les hommes.",
                "L'écart de salaire entre femmes et hommes s'analyse par étapes. Il est important si l'on compare les revenus salariaux de tous les salariés ; il se réduit quand on compare à temps de travail égal, car les femmes travaillent plus souvent à temps partiel ; il se réduit encore à poste et à expérience égaux ; mais une partie de l'écart reste inexpliquée par ces différences, et peut relever de discriminations. Le principe « à travail égal, salaire égal » est pourtant inscrit dans le Code du travail, et les entreprises d'au moins 50 salariés doivent publier chaque année un index de l'égalité professionnelle.",
              ],
              box: { label: "À retenir", text: "Plus diplômées en moyenne, les femmes restent pénalisées : temps partiel, concentration dans certains métiers, plafond de verre, effets de la maternité sur la carrière, et une part d'écart de salaire inexpliquée." },
            },
            {
              heading: "Les discriminations et leur mesure",
              paragraphs: [
                "Une discrimination est un traitement défavorable d'une personne fondé sur un critère interdit par la loi, comme l'origine, le sexe, l'âge, le handicap, l'apparence physique ou le lieu de résidence. Elle est punie par la loi ; le Défenseur des droits peut être saisi par les victimes. Le lieu de résidence peut aussi jouer indirectement : habiter loin des zones d'emploi ou mal desservi par les transports complique la recherche d'emploi.",
                "Pour mesurer les discriminations à l'embauche, les chercheurs utilisent le testing (ou test de correspondance) : on envoie en réponse à de vraies offres d'emploi des candidatures fictives identiques sur tous les points (diplôme, expérience) sauf un (par exemple le nom, qui suggère une origine, ou l'adresse). Si une candidature reçoit nettement moins de réponses positives, l'écart mesure une discrimination. Des campagnes de testing menées en France, notamment pour le ministère du Travail, ont mis en évidence des écarts selon l'origine supposée des candidats.",
              ],
            },
          ],
          keyPoints: [
            "L'origine sociale influence l'accès au diplôme (capital culturel, capital économique, choix d'orientation) et l'insertion à diplôme égal.",
            "Capital social : relations mobilisables ; Granovetter montre la « force des liens faibles » dans l'accès à l'emploi.",
            "Plus diplômées en moyenne, les femmes sont plus souvent à temps partiel, concentrées dans certains métiers et freinées par un plafond de verre.",
            "L'écart de salaire femmes-hommes se réduit à temps de travail et à poste égaux, sans disparaître.",
            "Une discrimination est un traitement défavorable fondé sur un critère interdit ; le testing permet de la mesurer.",
            "Le diplôme est nécessaire mais ne suffit pas : l'insertion dépend aussi de facteurs sociaux.",
          ],
          example: {
            statement: "Document (données fictives) : lors d'un testing, 1 000 offres d'emploi reçoivent chacune deux candidatures fictives identiques, sauf le nom. La candidature A (nom à consonance française) obtient 120 réponses positives, la candidature B (nom à consonance maghrébine) en obtient 80. Calculez les taux de réponse positive, comparez-les et interprétez.",
            solution: [
              "Taux de réponse de A : 120 ÷ 1 000 × 100 = 12 %.",
              "Taux de réponse de B : 80 ÷ 1 000 × 100 = 8 %.",
              "Écart : 12 - 8 = 4 points de pourcentage. Rapport : 12 ÷ 8 = 1,5 : la candidature A reçoit 1,5 fois plus de réponses positives, soit 50 % de plus.",
              "Autre lecture : la candidature B reçoit (8 - 12) ÷ 12 × 100 ≈ -33 % de réponses, soit un tiers de moins.",
              "Interpréter : les deux candidatures ne diffèrent que par le nom ; l'écart ne peut donc pas s'expliquer par le diplôme ou l'expérience. Il révèle une discrimination à l'embauche selon l'origine supposée.",
              "Réponse : 12 % contre 8 %, soit un écart de 4 points ; à diplôme égal, la candidature B a un tiers de chances de moins d'être rappelée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation (fictive), identifiez le facteur d'insertion en jeu : capital économique, capital culturel, capital social (réseau), genre, ou discrimination. (a) Grâce à un ami de son oncle, Samir obtient un stage dans un cabinet d'architecte. (b) Les parents de Chloé peuvent lui payer un logement à Paris pendant ses études. (c) Deux candidats ont le même CV, mais celui qui habite un quartier réputé difficile n'est jamais rappelé. (d) Après la naissance de son deuxième enfant, Julie passe à temps partiel et voit sa carrière ralentir. (e) Les parents de Tom, enseignants, l'aident à préparer ses entretiens de recrutement et connaissent bien les filières d'études.",
              hint: "Demandez-vous quelle ressource ou quel critère fait la différence : de l'argent, des savoirs et des codes, des relations, le fait d'être une femme, ou un critère interdit par la loi.",
              solution: [
                "(a) Capital social : le stage est obtenu grâce à une relation (un lien plutôt faible, l'ami d'un oncle).",
                "(b) Capital économique : la famille finance des études et un logement coûteux.",
                "(c) Discrimination fondée sur le lieu de résidence, critère interdit par la loi.",
                "(d) Genre : les interruptions et réductions d'activité liées aux enfants concernent beaucoup plus souvent les femmes et pèsent sur leur carrière.",
                "(e) Capital culturel : connaissance des codes du recrutement et des filières d'études.",
                "Résultat : (a) capital social ; (b) capital économique ; (c) discrimination ; (d) genre ; (e) capital culturel.",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives) : salaire mensuel net moyen dans un pays. Ensemble des salariés : hommes 2 600 euros, femmes 2 100 euros. En équivalent temps plein (comme si tous travaillaient à temps complet) : hommes 2 700 euros, femmes 2 400 euros. (1) Calculez, dans chaque cas, de combien de pour cent le salaire des femmes est inférieur à celui des hommes. (2) Quelle part de l'écart initial disparaît quand on raisonne en équivalent temps plein ? (3) À poste et expérience égaux, l'écart n'est plus que de 4 %. Que peut-on en conclure ?",
              hint: "L'écart en pourcentage se calcule par rapport au salaire des hommes : (salaire des hommes - salaire des femmes) ÷ salaire des hommes × 100.",
              solution: [
                "(1) Ensemble : (2 600 - 2 100) ÷ 2 600 × 100 = 500 ÷ 2 600 × 100 ≈ 19,2 %. En équivalent temps plein : (2 700 - 2 400) ÷ 2 700 × 100 = 300 ÷ 2 700 × 100 ≈ 11,1 %.",
                "(2) L'écart passe d'environ 19,2 % à 11,1 %, soit une baisse d'environ 8,1 points ; 8,1 ÷ 19,2 × 100 ≈ 42 % de l'écart initial s'explique par la différence de temps de travail (les femmes travaillent plus souvent à temps partiel).",
                "(3) Une autre partie de l'écart s'explique par des postes et des parcours différents (ségrégation professionnelle, plafond de verre, carrières interrompues). Il reste un écart de 4 % à poste et expérience égaux, que ces différences n'expliquent pas : il peut relever, au moins en partie, de discriminations.",
                "Résultat : écarts d'environ 19,2 % puis 11,1 % ; environ 42 % de l'écart tient au temps de travail ; un écart résiduel de 4 % subsiste à situation comparable.",
              ],
            },
            {
              level: 3,
              statement: "Document (données fictives) : situation de jeunes diplômés de bac + 5, trois ans après la fin de leurs études. Taux d'emploi : enfants de cadres 92 %, enfants d'ouvriers 85 %. Part des emplois trouvés grâce à des relations personnelles ou familiales : enfants de cadres 30 %, enfants d'ouvriers 18 %. Salaire mensuel net médian : hommes 2 400 euros, femmes 2 150 euros. Dans un développement construit, montrez à l'aide du document et de vos connaissances que le diplôme ne suffit pas à expliquer l'insertion professionnelle.",
              hint: "Tous ces jeunes ont le même niveau de diplôme : toute différence entre eux révèle l'effet d'un autre facteur. Organisez votre réponse en trois paragraphes (origine sociale, réseaux, genre).",
              solution: [
                "Introduction : le diplôme protège du chômage et favorise des salaires plus élevés ; mais à diplôme égal (ici bac + 5), l'insertion des jeunes reste inégale, ce qui révèle l'effet d'autres facteurs.",
                "Origine sociale : le taux d'emploi des enfants de cadres dépasse de 92 - 85 = 7 points celui des enfants d'ouvriers. À diplôme égal, les premiers bénéficient d'un capital culturel (codes du recrutement, informations sur les métiers) et d'un capital économique (possibilité de chercher plus longtemps, stages peu rémunérés) plus importants.",
                "Réseaux : 30 % des enfants de cadres ont trouvé leur emploi grâce à des relations, contre 18 % des enfants d'ouvriers, soit 12 points d'écart ; le rapport est de 30 ÷ 18 ≈ 1,7. Le capital social, plus riche dans les milieux favorisés, ouvre des opportunités ; comme l'a montré Granovetter, les relations apportent des informations sur des emplois qui ne sont pas toujours visibles autrement.",
                "Genre : le salaire médian des femmes est inférieur de (2 400 - 2 150) ÷ 2 400 × 100 ≈ 10,4 % à celui des hommes, alors qu'elles ont le même diplôme. Cet écart peut s'expliquer par l'orientation vers des spécialités et des métiers moins rémunérés, par le temps partiel, par le plafond de verre et, pour une part, par des discriminations.",
                "Nuance : le diplôme reste un atout majeur (les taux d'emploi de 85 % et 92 % sont élevés), mais il est nécessaire sans être suffisant.",
                "Conclusion : à diplôme égal, l'origine sociale, les réseaux de relations et le genre différencient l'insertion professionnelle ; le diplôme ne suffit donc pas à l'expliquer.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les autres facteurs de l'insertion professionnelle.",
            statements: [
              { text: "À diplôme égal, tous les jeunes ont les mêmes chances d'insertion professionnelle.", true: false, why: "L'origine sociale, les réseaux, le genre et les discriminations différencient l'insertion à diplôme égal." },
              { text: "Selon Granovetter, les simples connaissances aident souvent à trouver un emploi.", true: true, why: "Les liens faibles relient à d'autres milieux et apportent des informations nouvelles sur les offres d'emploi." },
              { text: "En France, les jeunes femmes sont en moyenne moins diplômées que les jeunes hommes.", true: false, why: "C'est l'inverse : elles sont en moyenne plus diplômées, ce qui rend les écarts d'insertion d'autant plus frappants." },
              { text: "L'écart de salaire entre femmes et hommes disparaît entièrement à temps de travail égal.", true: false, why: "Il se réduit, mais une partie subsiste à temps de travail, et même à poste égal." },
              { text: "Le testing compare des candidatures identiques sauf sur un critère.", true: true, why: "C'est ce qui permet d'attribuer l'écart de réponses à ce seul critère." },
              { text: "Le lieu de résidence peut être un motif de discrimination interdit par la loi.", true: true, why: "Il fait partie des critères de discrimination prohibés, avec l'origine, le sexe ou l'âge." },
              { text: "Le capital social désigne l'argent dont dispose une famille.", true: false, why: "Il désigne les relations mobilisables ; l'argent relève du capital économique." },
            ],
          },
          quiz: [
            {
              q: "Que désigne le capital social, au sens de Bourdieu ?",
              options: [
                "Le patrimoine financier et immobilier dont dispose une famille",
                "Les diplômes obtenus par les parents",
                "L'ensemble des relations qu'un individu peut mobiliser",
                "Le capital d'une entreprise",
              ],
              answer: 2,
              why: "Le capital social est fait des relations utiles ; l'argent relève du capital économique et les diplômes du capital culturel.",
            },
            {
              q: "Qu'appelle-t-on le plafond de verre ?",
              options: [
                "Une limite invisible freinant l'accès des femmes aux postes élevés",
                "Le salaire maximum fixé par la loi",
                "L'interdiction de travailler à temps partiel",
                "Un diplôme qui ne donne accès à aucun emploi",
              ],
              answer: 0,
              why: "Le plafond de verre désigne les obstacles peu visibles qui limitent l'accès des femmes aux plus hautes responsabilités.",
            },
            {
              q: "Lors d'un testing, la candidature A reçoit 15 % de réponses positives et la candidature B 10 %. Quel est l'écart ?",
              options: ["25 points", "50 points", "1,5 point", "5 points"],
              answer: 3,
              why: "L'écart en points est la différence des pourcentages : 15 - 10 = 5 points (A reçoit 1,5 fois plus de réponses).",
            },
            {
              q: "Pourquoi l'écart de salaire entre femmes et hommes se réduit-il quand on compare à temps de travail égal ?",
              options: [
                "Parce que les hommes travaillent plus souvent à temps partiel",
                "Parce que les femmes travaillent plus souvent à temps partiel",
                "Parce que le SMIC est différent selon le sexe",
              ],
              answer: 1,
              why: "Une partie de l'écart vient de la plus grande fréquence du temps partiel chez les femmes ; elle disparaît en équivalent temps plein.",
            },
            {
              q: "Selon Raymond Boudon, pourquoi l'origine sociale pèse-t-elle sur les choix d'orientation ?",
              options: [
                "Parce que la loi réserve certaines filières à certains milieux",
                "Parce que les familles évaluent différemment l'intérêt des études longues",
                "Parce que les enfants de cadres ont de meilleures capacités naturelles",
                "Parce que les études supérieures sont légalement interdites aux enfants d'ouvriers",
              ],
              answer: 1,
              why: "À résultats égaux, la position sociale de la famille modifie l'évaluation des coûts et des avantages des études longues.",
            },
          ],
          trap: "Confondre les trois capitaux : le capital économique (l'argent), le capital culturel (les savoirs, les diplômes, les codes) et le capital social (les relations). Les réseaux relèvent du capital social, pas du capital économique.",
          method: "Dans un document comparant des personnes de même diplôme, cherchez systématiquement ce qui varie (origine sociale, sexe, lieu de résidence) : chaque écart observé « à diplôme égal » est un argument pour montrer que le diplôme ne suffit pas. Chiffrez chaque écart en points ou en rapport.",
        },
      ],
    },
  ],
}
