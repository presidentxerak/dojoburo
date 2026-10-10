import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'technologie-3e',
  chapters: [
    /* ==================================================================== */
    /* OBJETS TECHNIQUES, USAGES ET SOCIÉTÉ                                   */
    /* ==================================================================== */
    {
      id: 'objets-usages',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'besoin-fonction-usage',
          title: "Besoin, fonction d'usage et contraintes",
          minutes: 25,
          objectives: [
            "Identifier le besoin auquel répond un objet technique et formuler sa fonction d'usage.",
            "Distinguer la fonction d'usage, la fonction d'estime et les contraintes d'un objet.",
            "Associer une fonction technique à la solution technique qui la réalise.",
            "Exprimer une contrainte par un critère et un niveau vérifiables.",
          ],
          course: [
            {
              heading: "Du besoin à l'objet technique",
              paragraphs: [
                "Un objet technique est un objet fabriqué par l'être humain pour répondre à un besoin. Un besoin est une nécessité ou un désir ressenti par un utilisateur : se déplacer, s'éclairer, communiquer, conserver des aliments, se protéger de la pluie. Un objet naturel, comme un caillou ou une branche, n'est pas un objet technique tant qu'il n'a pas été transformé.",
                "Un même besoin peut être satisfait par des objets très différents. Pour se déplacer en ville, on peut utiliser un vélo, une trottinette, un bus ou une voiture. Inversement, un objet peut répondre à plusieurs besoins : un smartphone permet de téléphoner, de photographier, de s'orienter et de payer.",
                "Lorsqu'un objet est composé de plusieurs éléments qui interagissent pour accomplir une tâche, souvent de façon automatique, on parle de système technique : un portail automatique, un ascenseur ou une machine à laver sont des systèmes techniques.",
              ],
              box: { label: "Méthode", text: "Pour exprimer le besoin, on répond à trois questions (outil appelé « bête à cornes ») : à qui l'objet rend-il service ? Sur quoi agit-il ? Dans quel but ? La réponse à la troisième question donne la fonction d'usage." },
            },
            {
              heading: "Fonction d'usage et fonction d'estime",
              paragraphs: [
                "La fonction d'usage décrit ce à quoi sert l'objet. On la formule avec un verbe à l'infinitif suivi d'un complément. Une lampe de poche permet d'éclairer dans l'obscurité ; un taille-crayon permet de tailler un crayon ; une gourde permet de transporter une boisson.",
                "La fonction d'estime regroupe ce qui rend l'objet agréable, beau ou désirable aux yeux de l'utilisateur, sans changer ce à quoi il sert : la couleur, la forme, la marque, la matière, la finition. Deux gourdes de couleurs différentes ont la même fonction d'usage, mais pas la même fonction d'estime. Cette fonction compte beaucoup dans le choix d'un objet au moment de l'achat.",
              ],
              box: { label: "Définition", text: "Fonction d'usage : le service rendu par l'objet, ce à quoi il sert. Fonction d'estime : ce qui le rend attirant pour l'utilisateur (aspect, couleur, marque), indépendamment de son usage." },
            },
            {
              heading: "Fonctions techniques et solutions techniques",
              paragraphs: [
                "Pour assurer sa fonction d'usage, un objet doit réaliser plusieurs actions internes appelées fonctions techniques. Chaque fonction technique est réalisée par une solution technique, c'est-à-dire un composant ou un procédé précis.",
                "Prenons un vélo. Sa fonction d'usage est de permettre à une personne de se déplacer. Parmi ses fonctions techniques : transmettre le mouvement des pédales à la roue arrière (solution technique : chaîne et pignons), ralentir ou arrêter le vélo (solution technique : freins à patins ou freins à disque), guider la direction (solution technique : guidon et fourche). Une même fonction technique peut avoir plusieurs solutions techniques : le concepteur choisit la plus adaptée.",
              ],
            },
            {
              heading: "Les contraintes, les critères et les niveaux",
              paragraphs: [
                "Une contrainte est une exigence que l'objet doit respecter. Elle peut concerner la sécurité, le respect des normes, le coût, la masse, les dimensions, l'énergie, l'environnement ou encore l'esthétique. Un jouet pour jeune enfant, par exemple, ne doit pas comporter de petites pièces détachables.",
                "Pour qu'une contrainte soit vérifiable, on la précise par un critère, ce que l'on mesure ou observe, et par un niveau, la valeur attendue. Exemple : contrainte « la lampe doit fonctionner longtemps », critère « autonomie », niveau « au moins 8 heures ». Toutes les fonctions et contraintes d'un objet sont rassemblées dans un document appelé cahier des charges.",
              ],
              box: { label: "À retenir", text: "Contrainte = exigence à respecter. Critère = ce que l'on mesure (masse, autonomie, prix). Niveau = la valeur attendue, souvent avec une unité (≤ 200 g, ≥ 8 h, ≤ 30 €)." },
            },
          ],
          keyPoints: [
            "Un objet technique est fabriqué par l'être humain pour répondre à un besoin.",
            "La bête à cornes : à qui rend-il service ? Sur quoi agit-il ? Dans quel but ?",
            "Fonction d'usage : ce à quoi sert l'objet, formulée avec un verbe à l'infinitif.",
            "Fonction d'estime : ce qui rend l'objet attirant (couleur, forme, marque).",
            "Une fonction technique est réalisée par une solution technique (un composant précis).",
            "Une contrainte se vérifie grâce à un critère et un niveau, regroupés dans le cahier des charges.",
          ],
          example: {
            statement: "Réaliser la bête à cornes d'une brosse à dents électrique, puis formuler sa fonction d'usage et citer un élément relevant de la fonction d'estime.",
            solution: [
              "À qui l'objet rend-il service ? À l'utilisateur, la personne qui se brosse les dents.",
              "Sur quoi agit-il ? Sur les dents (et les gencives).",
              "Dans quel but ? Pour les nettoyer en éliminant la plaque dentaire.",
              "Fonction d'usage : permettre à l'utilisateur de nettoyer ses dents.",
              "Fonction d'estime : par exemple la couleur du manche ou son design arrondi, qui ne changent pas l'efficacité du brossage.",
              "Réponse : la brosse à dents électrique rend service à l'utilisateur, agit sur ses dents, dans le but de les nettoyer ; sa couleur relève de la fonction d'estime.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour une gourde isotherme, classer chaque élément dans l'une des trois catégories (fonction d'usage, fonction d'estime, contrainte) : a) garder une boisson chaude ou froide pendant plusieurs heures ; b) être disponible en couleur pastel ; c) contenir au moins 50 cl ; d) pouvoir passer au lave-vaisselle ; e) porter un logo gravé.",
              hint: "Demandez-vous pour chaque élément : est-ce le service rendu, un aspect qui plaît, ou une exigence mesurable à respecter ?",
              solution: [
                "a) Garder une boisson chaude ou froide est le service rendu : c'est la fonction d'usage.",
                "b) La couleur pastel rend l'objet attirant sans changer son usage : fonction d'estime.",
                "c) Contenir au moins 50 cl est une exigence mesurable (critère : contenance, niveau : ≥ 50 cl) : contrainte.",
                "d) Passer au lave-vaisselle est une exigence que l'objet doit respecter : contrainte.",
                "e) Le logo gravé relève de l'aspect et de la marque : fonction d'estime.",
                "Résultat : usage = a ; estime = b et e ; contraintes = c et d.",
              ],
            },
            {
              level: 2,
              statement: "Une trottinette électrique est destinée à des adultes qui se déplacent en ville. a) Réaliser sa bête à cornes. b) Formuler sa fonction d'usage. c) Proposer deux contraintes, chacune avec un critère et un niveau. d) Citer une fonction technique et la solution technique qui la réalise.",
              hint: "Pour les contraintes, pensez à ce qu'un utilisateur attend : aller assez loin, pouvoir la porter, ne pas dépasser une certaine vitesse.",
              solution: [
                "a) Elle rend service à l'utilisateur adulte, elle agit sur l'utilisateur lui-même (qu'elle transporte), dans le but de le déplacer en ville.",
                "b) Fonction d'usage : permettre à une personne de se déplacer en ville.",
                "c) Exemple 1 : contrainte d'autonomie, critère « distance parcourue avec une charge », niveau « au moins 20 km ». Exemple 2 : contrainte de transport, critère « masse », niveau « au plus 15 kg ». D'autres réponses sont possibles (vitesse maximale, temps de recharge, prix).",
                "d) Fonction technique : ralentir la trottinette ; solution technique : un frein à disque sur la roue arrière (ou un frein électrique).",
                "Résultat : la fonction d'usage est de déplacer une personne en ville ; chaque contrainte proposée est vérifiable grâce à son critère et à son niveau.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Le cahier des charges d'une lampe frontale de randonnée impose : autonomie d'au moins 10 h, masse au plus 120 g, prix de vente au plus 40 €. Un fabricant propose un modèle de 95 g vendu 35 €, équipé d'une batterie de capacité 1 200 mAh ; la lampe consomme un courant de 150 mA. On rappelle que l'autonomie (en h) se calcule en divisant la capacité (en mAh) par le courant consommé (en mA). a) Calculer l'autonomie de cette lampe. b) Le modèle respecte-t-il le cahier des charges ? Justifier pour chaque critère. c) Quelle capacité minimale de batterie faudrait-il pour respecter le critère d'autonomie ?",
              hint: "Comparez chaque valeur du modèle au niveau exigé, en faisant attention au sens de l'inégalité (au moins, au plus).",
              solution: [
                "a) Autonomie = 1 200 mAh ÷ 150 mA = 8 h.",
                "b) Masse : 95 g ≤ 120 g, le critère est respecté.",
                "Prix : 35 € ≤ 40 €, le critère est respecté.",
                "Autonomie : 8 h < 10 h, le critère n'est pas respecté. Le modèle ne respecte donc pas le cahier des charges.",
                "c) Il faut une capacité C telle que C ÷ 150 ≥ 10, soit C ≥ 10 × 150 = 1 500 mAh.",
                "Résultat : autonomie de 8 h, modèle non conforme à cause de l'autonomie ; il faudrait une batterie d'au moins 1 500 mAh.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Besoin", right: "Nécessité ou désir ressenti par un utilisateur" },
              { left: "Fonction d'usage", right: "Ce à quoi sert l'objet" },
              { left: "Fonction d'estime", right: "Ce qui rend l'objet attirant (couleur, forme, marque)" },
              { left: "Contrainte", right: "Exigence que l'objet doit respecter" },
              { left: "Critère", right: "Ce que l'on mesure pour vérifier une contrainte" },
              { left: "Niveau", right: "Valeur attendue pour un critère" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la fonction d'usage d'un parapluie ?",
              options: ["Être de couleur vive", "Protéger une personne de la pluie", "Coûter moins de 20 €", "Se replier en 3 parties"],
              answer: 1,
              why: "La fonction d'usage est le service rendu : protéger de la pluie. La couleur relève de l'estime, le prix et le pliage sont des contraintes.",
            },
            {
              q: "Dans la bête à cornes, la question « Dans quel but ? » permet de trouver :",
              options: ["l'utilisateur de l'objet", "la matière de l'objet", "le prix de l'objet", "la fonction d'usage"],
              answer: 3,
              why: "La réponse à « Dans quel but ? » exprime le service rendu, donc la fonction d'usage.",
            },
            {
              q: "« Masse : au plus 2 kg ». Dans cette contrainte, « au plus 2 kg » est :",
              options: ["le niveau", "le critère", "la fonction d'estime", "la solution technique"],
              answer: 0,
              why: "Le critère est la grandeur mesurée (la masse) ; le niveau est la valeur attendue (au plus 2 kg).",
            },
            {
              q: "Sur un vélo, « chaîne et pignons » est :",
              options: ["une fonction d'usage", "une contrainte", "une solution technique", "une fonction d'estime"],
              answer: 2,
              why: "La chaîne et les pignons sont les composants qui réalisent la fonction technique « transmettre le mouvement des pédales à la roue ».",
            },
            {
              q: "Lequel de ces éléments relève de la fonction d'estime d'un smartphone ?",
              options: ["Son autonomie", "La finition de sa coque", "Sa capacité de stockage", "Sa résistance aux chocs"],
              answer: 1,
              why: "La finition touche à l'aspect et au plaisir de l'utilisateur ; l'autonomie, le stockage et la résistance sont des performances mesurables.",
            },
          ],
          trap: "Confondre fonction d'usage et solution technique : « avoir une batterie » n'est pas la fonction d'usage d'une lampe, c'est une solution technique ; sa fonction d'usage est d'éclairer.",
          method: "Formulez toujours la fonction d'usage avec un verbe à l'infinitif suivi d'un complément (« permettre de... »), puis vérifiez qu'elle ne mentionne aucun composant ni aucune couleur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cycle-vie-impact',
          title: "Cycle de vie, impact environnemental et réparabilité",
          minutes: 30,
          objectives: [
            "Décrire les étapes du cycle de vie d'un objet technique, de l'extraction des matières premières à la fin de vie.",
            "Identifier les impacts environnementaux d'un objet à chaque étape de son cycle de vie.",
            "Comparer des objets selon leur réparabilité et leur durée de vie.",
            "Proposer des solutions d'éco-conception pour réduire l'impact d'un objet.",
          ],
          course: [
            {
              heading: "Les étapes du cycle de vie",
              paragraphs: [
                "Le cycle de vie d'un objet technique regroupe toutes les étapes de son existence, « du berceau à la tombe ». Il commence par l'extraction des matières premières (minerais, pétrole, bois, sable) et se poursuit par la fabrication, où ces matières sont transformées en matériaux puis en pièces assemblées.",
                "Viennent ensuite le transport et la distribution, qui acheminent l'objet de l'usine jusqu'au magasin ou au domicile, puis l'utilisation, pendant laquelle l'objet peut consommer de l'énergie, de l'eau ou des consommables (piles, cartouches, filtres).",
                "La dernière étape est la fin de vie. Plusieurs voies existent, de la meilleure à la moins bonne pour l'environnement : le réemploi (l'objet sert à quelqu'un d'autre), la réparation, le recyclage des matériaux, la valorisation énergétique (on brûle les déchets pour produire de la chaleur ou de l'électricité) et enfin l'enfouissement en décharge.",
              ],
              box: { label: "Définition", text: "Le cycle de vie d'un objet comprend cinq grandes étapes : extraction des matières premières, fabrication, transport et distribution, utilisation, fin de vie." },
            },
            {
              heading: "Mesurer l'impact environnemental",
              paragraphs: [
                "À chaque étape, l'objet a un impact sur l'environnement : il consomme des ressources (matières, eau, énergie), il émet des gaz à effet de serre, il peut polluer l'air, l'eau ou les sols, et il produit des déchets. Les émissions de gaz à effet de serre sont exprimées en kilogrammes équivalent CO₂ (kg CO₂e).",
                "L'étude qui additionne les impacts de toutes les étapes s'appelle l'analyse du cycle de vie (ACV). Elle permet de repérer l'étape la plus polluante. Pour un smartphone, l'ADEME (l'Agence de la transition écologique) indique que la fabrication représente la plus grande partie de l'impact : garder son appareil plus longtemps est donc très efficace. Pour un radiateur électrique ou un réfrigérateur, c'est au contraire l'utilisation qui pèse le plus, à cause de l'énergie consommée pendant des années.",
              ],
            },
            {
              heading: "Allonger la durée de vie : la réparabilité",
              paragraphs: [
                "Un objet qui dure plus longtemps évite d'en fabriquer un nouveau. La réparabilité est la facilité avec laquelle un objet peut être réparé : documentation disponible, démontage possible avec des outils courants, pièces détachées disponibles et à un prix raisonnable.",
                "En France, la loi relative à la lutte contre le gaspillage et à l'économie circulaire (loi AGEC, 2020) a imposé, depuis le 1er janvier 2021, l'affichage d'un indice de réparabilité noté sur 10 pour certains produits (smartphones, ordinateurs portables, téléviseurs, lave-linge, tondeuses...). Depuis 2025, il est remplacé par un indice de durabilité pour certains appareils comme les téléviseurs et les lave-linge.",
                "À l'inverse, l'obsolescence programmée consiste à réduire volontairement la durée de vie d'un produit pour pousser à son remplacement. En France, c'est un délit depuis la loi de transition énergétique de 2015.",
              ],
              box: { label: "Repère", text: "Indice de réparabilité : note sur 10 affichée en France depuis 2021. Il prend en compte la documentation, la facilité de démontage, la disponibilité et le prix des pièces détachées, et un critère propre à chaque catégorie de produits." },
            },
            {
              heading: "Matériaux, recyclage et éco-conception",
              paragraphs: [
                "Pour être recyclés, les matériaux doivent être triés : métaux, plastiques, verre, bois, papier et carton suivent des filières différentes. Un objet qui mélange de nombreux matériaux collés entre eux, ou qui utilise des matériaux composites (plusieurs matériaux liés de façon inséparable), est difficile à recycler. Les appareils électriques usagés (DEEE) se déposent en déchèterie ou en magasin.",
                "L'éco-conception consiste à prendre en compte l'environnement dès la conception de l'objet : choisir des matériaux recyclables ou recyclés, réduire la masse et le nombre de matériaux, assembler par vis ou emboîtement plutôt que par collage pour faciliter le démontage, réduire la consommation d'énergie à l'utilisation, prévoir des pièces remplaçables.",
              ],
              box: { label: "À retenir", text: "Pour réduire l'impact d'un objet : le garder plus longtemps, le réparer, le donner ou le revendre, puis seulement en dernier recours le recycler. Le concepteur, lui, pratique l'éco-conception." },
            },
          ],
          keyPoints: [
            "Cycle de vie : extraction, fabrication, transport et distribution, utilisation, fin de vie.",
            "Fin de vie, par ordre de préférence : réemploi, réparation, recyclage, valorisation énergétique, enfouissement.",
            "L'analyse du cycle de vie (ACV) additionne les impacts de toutes les étapes.",
            "Pour un smartphone, la fabrication est l'étape la plus lourde : le garder longtemps réduit son impact.",
            "Indice de réparabilité noté sur 10, affiché en France depuis 2021 (loi AGEC).",
            "Éco-conception : penser à l'environnement dès la conception (matériaux, démontage, énergie).",
          ],
          example: {
            statement: "Pour un ordinateur portable, indiquer à quelle étape du cycle de vie appartient chaque événement : a) le minerai de cuivre est extrait d'une mine ; b) l'ordinateur est livré par camion au magasin ; c) l'ordinateur est rechargé chaque soir ; d) la carte électronique est assemblée en usine ; e) l'ordinateur hors d'usage est déposé en déchèterie, où ses métaux sont récupérés.",
            solution: [
              "a) Extraire le minerai de cuivre : extraction des matières premières.",
              "b) La livraison en camion : transport et distribution.",
              "c) La recharge quotidienne consomme de l'électricité pendant l'usage : utilisation.",
              "d) L'assemblage de la carte électronique : fabrication.",
              "e) Le dépôt en déchèterie et la récupération des métaux : fin de vie (recyclage).",
              "Réponse dans l'ordre du cycle : a (extraction), d (fabrication), b (transport), c (utilisation), e (fin de vie).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer ces voies de fin de vie d'un vélo, de la plus favorable à la moins favorable pour l'environnement : recyclage de l'aluminium du cadre ; enfouissement en décharge ; réparation du dérailleur ; don du vélo à une association qui le revend.",
              hint: "La meilleure solution est celle qui évite de fabriquer un nouvel objet et qui conserve l'objet entier.",
              solution: [
                "Le don à une association permet le réemploi : le vélo entier sert à quelqu'un d'autre sans transformation.",
                "La réparation du dérailleur prolonge la vie du vélo en ne remplaçant qu'une pièce.",
                "Le recyclage récupère le matériau, mais demande de l'énergie pour refondre l'aluminium.",
                "L'enfouissement ne récupère rien : c'est la pire solution.",
                "Résultat : réemploi (don), réparation, recyclage, enfouissement. Le don et la réparation sont tous deux très favorables ; on accepte aussi l'ordre réparation puis don.",
              ],
            },
            {
              level: 2,
              statement: "On donne les émissions de gaz à effet de serre d'un smartphone (valeurs simplifiées pour l'exercice) : fabrication 50 kg CO₂e, transport 2 kg CO₂e, utilisation 1 kg CO₂e par an, fin de vie 1 kg CO₂e. a) Calculer les émissions totales si le smartphone est utilisé 2 ans, puis 4 ans. b) Calculer dans chaque cas les émissions par année d'utilisation. c) Conclure.",
              hint: "L'utilisation dépend du nombre d'années ; les autres étapes ne comptent qu'une seule fois.",
              solution: [
                "a) Pour 2 ans : 50 + 2 + 2 × 1 + 1 = 55 kg CO₂e.",
                "Pour 4 ans : 50 + 2 + 4 × 1 + 1 = 57 kg CO₂e.",
                "b) Par année d'utilisation : 55 ÷ 2 = 27,5 kg CO₂e par an pour 2 ans, et 57 ÷ 4 = 14,25 kg CO₂e par an pour 4 ans.",
                "c) Garder le smartphone deux fois plus longtemps divise presque par deux ses émissions par année d'utilisation, car la fabrication, qui pèse le plus, est répartie sur plus d'années.",
                "Résultat : 55 kg et 57 kg CO₂e au total ; 27,5 kg et 14,25 kg CO₂e par an ; prolonger la durée d'utilisation réduit fortement l'impact annuel.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Une famille hésite entre deux lave-linge. Modèle A : 450 €, indice de réparabilité 8,2 sur 10, durée de vie estimée 10 ans. Modèle B : 400 €, indice de réparabilité 4,1 sur 10, durée de vie estimée 6 ans. a) Citer trois éléments pris en compte par l'indice de réparabilité. b) Calculer pour chaque modèle le coût d'achat par année d'utilisation (arrondi au centime). c) Quel modèle conseiller ? Justifier par deux arguments, l'un économique, l'autre environnemental.",
              hint: "Divisez le prix par la durée de vie, puis pensez à ce qu'implique une machine qu'il faut remplacer plus souvent.",
              solution: [
                "a) Par exemple : la disponibilité de la documentation, la facilité de démontage, la disponibilité des pièces détachées (on accepte aussi le prix des pièces détachées).",
                "b) Modèle A : 450 ÷ 10 = 45,00 € par an.",
                "Modèle B : 400 ÷ 6 ≈ 66,67 € par an.",
                "c) Argument économique : le modèle A coûte plus cher à l'achat mais revient à environ 21,67 € de moins par année d'utilisation (66,67 - 45,00).",
                "Argument environnemental : le modèle A, plus durable et plus facile à réparer, évite de fabriquer un nouvel appareil au bout de 6 ans, ce qui réduit la consommation de matières premières et les déchets.",
                "Résultat : il faut conseiller le modèle A (45,00 € par an contre 66,67 €, et un impact environnemental plus faible).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du cycle de vie d'un objet.",
            items: [
              "Extraction des matières premières",
              "Fabrication des pièces et assemblage",
              "Transport et distribution",
              "Utilisation par le consommateur",
              "Fin de vie : réemploi, recyclage ou élimination",
            ],
          },
          quiz: [
            {
              q: "Quelle est la première étape du cycle de vie d'un objet ?",
              options: ["La fabrication", "Le transport", "L'extraction des matières premières", "La conception du logo"],
              answer: 2,
              why: "Avant de fabriquer, il faut extraire les ressources naturelles (minerais, pétrole, bois) qui deviendront les matériaux.",
            },
            {
              q: "Quelle voie de fin de vie est la plus favorable à l'environnement ?",
              options: ["Le réemploi", "Le recyclage", "La valorisation énergétique", "L'enfouissement"],
              answer: 0,
              why: "Le réemploi garde l'objet entier en service, sans transformation ni nouvelle fabrication.",
            },
            {
              q: "Pour un smartphone, quelle étape pèse le plus dans l'impact environnemental ?",
              options: ["Le transport", "La fin de vie", "La recharge quotidienne", "La fabrication"],
              answer: 3,
              why: "Selon l'ADEME, la fabrication (extraction des métaux, composants électroniques) représente la plus grande partie de l'impact d'un smartphone.",
            },
            {
              q: "L'indice de réparabilité affiché en France est noté :",
              options: ["sur 5", "sur 10", "sur 20", "de A à G"],
              answer: 1,
              why: "L'indice de réparabilité est une note sur 10, affichée depuis le 1er janvier 2021 pour certains produits.",
            },
            {
              q: "Lequel de ces choix relève de l'éco-conception ?",
              options: ["Visser les pièces plutôt que les coller", "Ajouter un emballage plus épais", "Mélanger plusieurs plastiques collés", "Souder la batterie à la carte"],
              answer: 0,
              why: "Des pièces vissées se démontent facilement, ce qui facilite la réparation et le tri des matériaux en fin de vie.",
            },
          ],
          trap: "Croire que le recyclage est toujours la meilleure solution : garder, réparer ou donner un objet est plus favorable, car le recyclage consomme lui aussi de l'énergie et ne récupère pas tout.",
          method: "Pour analyser un objet, faites un tableau à cinq colonnes (extraction, fabrication, transport, utilisation, fin de vie) et notez dans chacune une ressource consommée et un impact : vous ne raterez aucune étape.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-objets',
          title: "L'évolution des objets et leurs effets sur la société",
          minutes: 25,
          objectives: [
            "Situer un objet technique dans une famille et dans une lignée d'objets.",
            "Identifier les facteurs qui font évoluer les objets : progrès techniques, besoins, réglementation, coût.",
            "Comparer des objets d'une même famille selon des critères mesurables.",
            "Analyser les effets positifs et négatifs d'une évolution technique sur la société et l'environnement.",
          ],
          course: [
            {
              heading: "Familles et lignées d'objets",
              paragraphs: [
                "Une famille d'objets regroupe des objets qui répondent au même besoin, avec la même fonction d'usage, même s'ils fonctionnent de façon très différente. Pour s'éclairer, on a utilisé la bougie, la lampe à huile, la lampe à pétrole, la lampe à incandescence, la lampe fluocompacte et la lampe à LED : tous ces objets forment la famille des objets d'éclairage.",
                "Une lignée d'objets regroupe, au sein d'une famille, les objets qui utilisent le même principe technique et qui se sont améliorés au fil du temps. La bougie, la lampe à huile et la lampe à pétrole produisent de la lumière par une flamme : elles forment une lignée. Les lampes électriques (incandescence, fluocompacte, LED) en forment une autre.",
              ],
              box: { label: "Définition", text: "Famille d'objets : objets qui ont la même fonction d'usage. Lignée d'objets : objets d'une même famille qui reposent sur le même principe technique et qui se succèdent dans le temps." },
            },
            {
              heading: "Pourquoi les objets évoluent",
              paragraphs: [
                "Les progrès scientifiques et techniques sont un premier moteur : nouveaux matériaux (plastiques, alliages légers, composites), nouvelles sources d'énergie, miniaturisation de l'électronique. L'invention du transistor en 1947, aux laboratoires Bell aux États-Unis, a permis de fabriquer des appareils électroniques de plus en plus petits, jusqu'aux ordinateurs et aux smartphones.",
                "Les besoins et les modes de vie changent aussi : on veut des objets plus légers, plus rapides, connectés, plus économes. La réglementation joue un rôle : l'Union européenne a retiré progressivement les lampes à incandescence de la vente à partir de 2009 parce qu'elles gaspillaient beaucoup d'énergie. Enfin, le coût de fabrication et la concurrence entre fabricants poussent à innover.",
              ],
            },
            {
              heading: "Comparer des objets d'une même famille",
              paragraphs: [
                "Pour décrire une évolution de façon objective, on compare les objets avec des critères mesurables : masse, dimensions, consommation d'énergie, performance, prix, durée de vie. On présente souvent cette comparaison dans un tableau ou sur une frise chronologique.",
                "Exemple de l'éclairage : la lampe à incandescence, mise au point à la fin des années 1870 par Joseph Swan et Thomas Edison, produit de la lumière en chauffant un filament ; l'essentiel de l'énergie est perdu en chaleur. Son efficacité lumineuse est de l'ordre de 10 à 15 lumens par watt, alors qu'une lampe à LED dépasse souvent 80 lumens par watt. À éclairage égal, une lampe à LED consomme donc beaucoup moins d'électricité et dure bien plus longtemps.",
              ],
              box: { label: "Formule", text: "Énergie consommée : E = P × t. Avec P en watts (W) et t en heures (h), E est en wattheures (Wh). 1 kWh = 1 000 Wh." },
            },
            {
              heading: "Les effets sur la société et l'environnement",
              paragraphs: [
                "Les évolutions techniques ont souvent des effets positifs : communication instantanée, accès à l'information, progrès de la santé, sécurité, confort, gain de temps. Le téléphone portable permet par exemple de joindre les secours depuis presque partout.",
                "Elles ont aussi des effets négatifs, qu'il faut savoir nommer : consommation de ressources et d'énergie, déchets électroniques, dépendance aux écrans, collecte de données personnelles, inégalités d'accès (la fracture numérique), disparition de certains métiers au profit d'autres. Analyser un objet, c'est peser ces avantages et ces inconvénients, sans jugement tout fait.",
              ],
              box: { label: "À retenir", text: "Une évolution technique s'analyse toujours selon trois points de vue : ce qu'elle apporte aux utilisateurs, ce qu'elle change dans la société, et ses conséquences sur l'environnement." },
            },
          ],
          keyPoints: [
            "Famille d'objets : même fonction d'usage ; lignée : même principe technique au sein d'une famille.",
            "Les objets évoluent grâce aux progrès techniques, aux nouveaux besoins, à la réglementation et au coût.",
            "Le transistor (1947) a permis la miniaturisation de l'électronique.",
            "On compare des objets avec des critères mesurables : masse, énergie, performance, prix.",
            "E = P × t : à éclairage égal, une LED consomme bien moins qu'une lampe à incandescence.",
            "Toute évolution a des effets positifs et négatifs sur la société et l'environnement.",
          ],
          example: {
            statement: "Classer ces objets de communication en deux lignées et nommer la famille : lettre manuscrite, télégraphe électrique, pigeon voyageur, téléphone fixe, smartphone.",
            solution: [
              "Tous ces objets permettent de transmettre un message à distance : ils appartiennent à la famille des objets de communication.",
              "La lettre manuscrite et le pigeon voyageur transportent physiquement le message : ils reposent sur un même principe, le transport d'un support matériel.",
              "Le télégraphe électrique, le téléphone fixe et le smartphone transmettent le message sous forme de signal électrique ou d'ondes : ils forment une autre lignée.",
              "Dans la lignée électrique, l'ordre chronologique est : télégraphe, téléphone fixe, smartphone.",
              "Réponse : famille des objets de communication ; lignée du transport matériel (lettre, pigeon) et lignée de la transmission par signal (télégraphe, téléphone fixe, smartphone).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque facteur d'évolution, donner la catégorie correspondante (progrès technique, nouveau besoin, réglementation) : a) l'arrivée des batteries lithium-ion, plus légères ; b) l'interdiction de vendre des lampes à incandescence dans l'Union européenne ; c) le souhait de travailler depuis chez soi en visioconférence.",
              hint: "Un progrès technique vient des laboratoires et des usines, un besoin vient des utilisateurs, une réglementation vient des lois.",
              solution: [
                "a) Les batteries lithium-ion sont une nouvelle technologie : progrès technique.",
                "b) L'interdiction de vente est décidée par une autorité publique : réglementation.",
                "c) Le travail à distance est une demande des utilisateurs : nouveau besoin.",
                "Résultat : a = progrès technique ; b = réglementation ; c = nouveau besoin.",
              ],
            },
            {
              level: 2,
              statement: "Une lampe à incandescence de 60 W et une lampe à LED de 8 W éclairent autant. Chacune fonctionne 4 h par jour pendant 365 jours. a) Calculer l'énergie consommée en un an par chaque lampe, en kWh. b) Calculer l'économie réalisée avec la LED, sachant que le kWh coûte 0,25 € (prix choisi pour l'exercice).",
              hint: "Calculez d'abord la durée totale de fonctionnement en heures, puis utilisez E = P × t et divisez par 1 000 pour passer en kWh.",
              solution: [
                "Durée de fonctionnement : t = 4 × 365 = 1 460 h.",
                "a) Lampe à incandescence : E = 60 × 1 460 = 87 600 Wh = 87,6 kWh.",
                "Lampe à LED : E = 8 × 1 460 = 11 680 Wh = 11,68 kWh.",
                "b) Énergie économisée : 87,6 - 11,68 = 75,92 kWh.",
                "Économie : 75,92 × 0,25 = 18,98 €.",
                "Résultat : 87,6 kWh contre 11,68 kWh par an, soit une économie de 18,98 € par an et par lampe.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un document présente l'évolution du baladeur musical : baladeur à cassette (années 1980, environ 400 g, une cassette d'environ 20 morceaux), baladeur CD (années 1990, environ 250 g, un CD d'environ 15 morceaux), baladeur numérique (années 2000, environ 150 g, des milliers de morceaux en mémoire), puis la musique en streaming sur smartphone. a) Citer deux critères qui montrent l'évolution. b) Indiquer un progrès technique qui explique le passage au baladeur numérique. c) Donner un effet positif et un effet négatif du streaming sur la société ou l'environnement.",
              hint: "Repérez dans le document les grandeurs qui changent d'une génération à l'autre, puis pensez à ce qu'implique écouter de la musique stockée sur des serveurs distants.",
              solution: [
                "a) La masse diminue (de 400 g à 150 g environ) et le nombre de morceaux disponibles augmente fortement (de quelques dizaines à plusieurs milliers).",
                "b) Le passage au numérique s'explique par la miniaturisation de l'électronique et par les mémoires numériques capables de stocker des fichiers musicaux compressés.",
                "c) Effet positif : un accès immédiat à un très grand nombre de morceaux, sans support physique à fabriquer.",
                "Effet négatif : le streaming consomme de l'énergie à chaque écoute (serveurs, réseaux, appareil) et suppose une connexion, ce qui exclut ceux qui n'y ont pas accès.",
                "Résultat : la masse a baissé et la capacité a explosé grâce à l'électronique numérique ; le streaming facilite l'accès à la musique mais consomme de l'énergie en permanence.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'évolution des objets.",
            statements: [
              { text: "Une bougie et une lampe à LED appartiennent à la même famille d'objets.", true: true, why: "Elles ont la même fonction d'usage : éclairer." },
              { text: "Une bougie et une lampe à LED appartiennent à la même lignée.", true: false, why: "Elles reposent sur des principes différents : une flamme pour l'une, l'électricité pour l'autre." },
              { text: "Le transistor a été inventé en 1947.", true: true, why: "Il a été mis au point aux laboratoires Bell et a permis la miniaturisation de l'électronique." },
              { text: "Une évolution technique n'a que des effets positifs.", true: false, why: "Elle peut aussi entraîner des déchets, une consommation de ressources ou des inégalités d'accès." },
              { text: "La réglementation peut faire disparaître un objet du marché.", true: true, why: "L'Union européenne a retiré progressivement les lampes à incandescence de la vente à partir de 2009." },
              { text: "Une lampe à incandescence transforme presque toute son énergie en lumière.", true: false, why: "L'essentiel de l'énergie est perdu en chaleur, d'où son efficacité lumineuse faible." },
            ],
          },
          quiz: [
            {
              q: "Des objets qui ont la même fonction d'usage forment :",
              options: ["une lignée", "un cycle de vie", "un cahier des charges", "une famille"],
              answer: 3,
              why: "La famille regroupe les objets qui répondent au même besoin ; la lignée est un sous-ensemble qui partage le même principe technique.",
            },
            {
              q: "Quelle invention de 1947 a permis la miniaturisation de l'électronique ?",
              options: ["La pile électrique", "Le transistor", "L'ampoule électrique", "Le télégraphe"],
              answer: 1,
              why: "Le transistor, inventé aux laboratoires Bell en 1947, remplace les tubes électroniques encombrants.",
            },
            {
              q: "Une lampe de 10 W fonctionne 5 h. Quelle énergie consomme-t-elle ?",
              options: ["2 Wh", "15 Wh", "50 Wh", "500 Wh"],
              answer: 2,
              why: "E = P × t = 10 × 5 = 50 Wh.",
            },
            {
              q: "Lequel est un effet négatif possible de la généralisation des smartphones ?",
              options: ["L'augmentation des déchets électroniques", "L'accès rapide à l'information", "La possibilité d'appeler les secours", "Le paiement sans contact"],
              answer: 0,
              why: "La fabrication et le renouvellement fréquent des smartphones produisent des déchets électroniques difficiles à recycler.",
            },
            {
              q: "Pour comparer objectivement deux objets d'une même famille, on utilise :",
              options: ["leur couleur préférée", "leur publicité", "des critères mesurables", "leur marque"],
              answer: 2,
              why: "Des critères comme la masse, la consommation ou le prix se mesurent et permettent une comparaison objective.",
            },
          ],
          trap: "Confondre famille et lignée : la famille réunit tous les objets qui ont la même fonction d'usage, alors que la lignée ne réunit que ceux qui utilisent le même principe technique.",
          method: "Pour une question d'évolution, construisez une petite frise avec trois objets et notez sous chacun deux valeurs mesurables (masse, consommation, capacité) : la comparaison devient évidente et chiffrée.",
        },
      ],
    },
    /* ==================================================================== */
    /* CHAÎNE D'INFORMATION ET CHAÎNE D'ÉNERGIE                               */
    /* ==================================================================== */
    {
      id: 'chaines-information-energie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'chaine-information',
          title: "La chaîne d'information : acquérir, traiter, communiquer",
          minutes: 30,
          objectives: [
            "Décrire le fonctionnement d'un système automatisé à l'aide de la chaîne d'information et de la chaîne d'énergie.",
            "Identifier les fonctions acquérir, traiter et communiquer, et les composants qui les réalisent.",
            "Distinguer une information logique d'une information analogique.",
          ],
          course: [
            {
              heading: "Deux chaînes dans un système automatisé",
              paragraphs: [
                "Un système automatisé, comme un portail automatique, un lampadaire qui s'allume seul ou une porte de supermarché, fonctionne sans que l'utilisateur ait à commander chaque action. Pour le comprendre, on le décompose en deux chaînes qui travaillent ensemble.",
                "La chaîne d'information recueille les informations, les traite et décide de ce qu'il faut faire : c'est le « cerveau » du système. La chaîne d'énergie reçoit les ordres de la chaîne d'information et réalise l'action physique (ouvrir, éclairer, chauffer, déplacer) : ce sont ses « muscles ».",
                "Exemple d'une porte automatique de magasin : un détecteur repère une personne qui approche (information), une carte électronique décide d'ouvrir, puis un moteur fait coulisser la porte (énergie).",
              ],
              box: { label: "Définition", text: "Chaîne d'information : partie du système qui acquiert, traite et communique les informations. Chaîne d'énergie : partie qui alimente, distribue, convertit et transmet l'énergie pour réaliser l'action." },
            },
            {
              heading: "Acquérir : capter les informations",
              paragraphs: [
                "La fonction acquérir consiste à recueillir les informations sur l'environnement ou sur les demandes de l'utilisateur. Elle est réalisée par des capteurs (capteur de luminosité, de température, de distance, détecteur de présence) et par des interfaces homme-machine (bouton poussoir, clavier, écran tactile, télécommande).",
                "Un capteur transforme une grandeur physique (lumière, température, distance, pression) en un signal électrique que la carte électronique peut lire.",
                "Une information logique (on dit aussi tout ou rien) n'a que deux états, notés 0 et 1 : bouton appuyé ou relâché, présence détectée ou non. Une information analogique peut prendre une infinité de valeurs dans un intervalle : une température, une luminosité, une distance. La carte électronique la convertit en un nombre : on obtient alors une information numérique.",
              ],
              box: { label: "À retenir", text: "Logique : deux états seulement (0 ou 1, oui ou non). Analogique : une valeur qui varie de façon continue. Numérique : une valeur codée par des nombres (en binaire dans la machine)." },
            },
            {
              heading: "Traiter : décider grâce au programme",
              paragraphs: [
                "La fonction traiter est réalisée par une unité de traitement, le plus souvent un microcontrôleur placé sur une carte programmable (cartes Arduino ou micro:bit au collège, par exemple). Le microcontrôleur exécute un programme : il compare les informations reçues à des valeurs fixées et décide des ordres à donner.",
                "Exemple : « si la luminosité est inférieure à un seuil et si une présence est détectée, alors allumer l'éclairage ». Le traitement peut aussi mémoriser des informations (stocker), comme un nombre de passages ou un code secret.",
              ],
            },
            {
              heading: "Communiquer : transmettre les ordres et les messages",
              paragraphs: [
                "La fonction communiquer transmet les décisions. D'une part, elle envoie des ordres à la chaîne d'énergie (par exemple au circuit qui commande un moteur). D'autre part, elle informe l'utilisateur ou d'autres systèmes : voyant lumineux, écran, signal sonore, message envoyé sur un smartphone par Wi-Fi ou Bluetooth.",
                "Les trois fonctions se suivent toujours dans le même ordre : acquérir, puis traiter, puis communiquer. Les informations circulent dans ce sens, et les ordres partent ensuite vers la chaîne d'énergie.",
              ],
              box: { label: "Repère", text: "Acquérir (capteurs, boutons) → Traiter (microcontrôleur, programme) → Communiquer (ordres vers la chaîne d'énergie, messages vers l'utilisateur : voyant, écran, buzzer, liaison sans fil)." },
            },
          ],
          keyPoints: [
            "Un système automatisé = une chaîne d'information (décider) + une chaîne d'énergie (agir).",
            "Chaîne d'information : acquérir, traiter, communiquer.",
            "Acquérir : capteurs et interfaces homme-machine (boutons, clavier, écran tactile).",
            "Traiter : un microcontrôleur exécute un programme et prend les décisions.",
            "Communiquer : ordres vers la chaîne d'énergie, messages vers l'utilisateur.",
            "Information logique : 2 états ; information analogique : valeur continue.",
          ],
          example: {
            statement: "Un éclairage extérieur s'allume automatiquement quand il fait nuit et qu'une personne passe devant la maison. Il comprend : un capteur de luminosité, un détecteur de présence infrarouge, une carte programmable, un voyant témoin et une lampe. Décrire sa chaîne d'information.",
            solution: [
              "Acquérir : le capteur de luminosité mesure la lumière ambiante (information analogique) et le détecteur de présence repère un passage (information logique).",
              "Traiter : la carte programmable exécute le programme ; si la luminosité est faible et qu'une présence est détectée, elle décide d'allumer.",
              "Communiquer : la carte envoie l'ordre d'allumage vers la chaîne d'énergie et allume le voyant témoin pour informer l'utilisateur.",
              "La lampe, elle, appartient à la chaîne d'énergie : elle convertit l'énergie électrique en lumière.",
              "Réponse : acquérir (capteur de luminosité, détecteur de présence), traiter (carte programmable), communiquer (ordre à la chaîne d'énergie, voyant témoin).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un sèche-mains automatique se met en marche quand on place les mains dessous. Associer chaque composant à la fonction qu'il réalise dans la chaîne d'information (acquérir, traiter ou communiquer) : a) le capteur infrarouge de présence ; b) le microcontrôleur ; c) la liaison qui envoie l'ordre de marche au circuit du moteur.",
              hint: "Suivez le trajet de l'information : d'où vient-elle, où est-elle analysée, où part-elle ?",
              solution: [
                "a) Le capteur infrarouge détecte les mains : il acquiert l'information.",
                "b) Le microcontrôleur décide de mettre en marche : il traite l'information.",
                "c) La liaison vers le circuit du moteur transmet l'ordre : elle communique.",
                "Résultat : a = acquérir ; b = traiter ; c = communiquer.",
              ],
            },
            {
              level: 2,
              statement: "Une alarme de maison comprend : un clavier à code, un détecteur d'ouverture de porte, un détecteur de mouvement, une centrale programmable, une sirène et un module qui envoie un SMS au propriétaire. a) Classer les composants dans les fonctions de la chaîne d'information (la sirène sera placée à part). b) Pour chacun des deux détecteurs, préciser si l'information est logique ou analogique.",
              hint: "Un détecteur qui répond seulement « ouvert » ou « fermé » donne une information à deux états.",
              solution: [
                "a) Acquérir : le clavier à code, le détecteur d'ouverture de porte, le détecteur de mouvement.",
                "Traiter : la centrale programmable, qui compare le code saisi et décide de déclencher l'alarme.",
                "Communiquer : le module SMS, qui informe le propriétaire, et l'ordre envoyé à la sirène.",
                "La sirène convertit l'énergie électrique en son : c'est un actionneur de la chaîne d'énergie.",
                "b) Le détecteur d'ouverture donne deux états (porte ouverte ou fermée) : information logique. Le détecteur de mouvement indique présence ou absence : information logique également.",
                "Résultat : acquérir = clavier et détecteurs ; traiter = centrale ; communiquer = module SMS et ordre à la sirène ; les deux détecteurs donnent une information logique.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Une serre automatique ouvre une fenêtre d'aération quand la température dépasse 28 °C et déclenche l'arrosage quand l'humidité du sol descend sous 30 %. Elle contient : un capteur de température, un capteur d'humidité du sol, une carte programmable, un écran qui affiche les mesures, un moteur qui ouvre la fenêtre, une pompe. a) Indiquer les composants qui réalisent la fonction acquérir et le type d'information qu'ils fournissent. b) Rédiger en une phrase la règle de décision du traitement pour l'aération. c) Il fait 31 °C et l'humidité du sol est de 45 %. Quels ordres la carte envoie-t-elle ? Justifier.",
              hint: "Comparez chaque mesure à son seuil, séparément, en faisant attention au sens « au-dessus » ou « en dessous ».",
              solution: [
                "a) Acquérir : le capteur de température et le capteur d'humidité du sol. Tous deux mesurent une grandeur qui varie de façon continue : ils fournissent une information analogique.",
                "b) Si la température mesurée est supérieure à 28 °C, alors la carte ordonne au moteur d'ouvrir la fenêtre ; sinon, la fenêtre reste fermée.",
                "c) Température : 31 °C > 28 °C, donc la carte envoie l'ordre d'ouvrir la fenêtre.",
                "Humidité : 45 % n'est pas inférieure à 30 %, donc la carte n'envoie pas l'ordre d'arroser : la pompe reste à l'arrêt.",
                "L'écran affiche dans tous les cas les mesures (fonction communiquer vers l'utilisateur).",
                "Résultat : la fenêtre s'ouvre, l'arrosage ne se déclenche pas, l'écran affiche 31 °C et 45 %.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque composant à sa fonction dans la chaîne d'information.",
            pairs: [
              { left: "Capteur de température", right: "Acquérir une grandeur analogique" },
              { left: "Bouton poussoir", right: "Acquérir une information logique" },
              { left: "Microcontrôleur", right: "Traiter les informations selon un programme" },
              { left: "Voyant lumineux", right: "Communiquer un état à l'utilisateur" },
              { left: "Module Bluetooth", right: "Communiquer avec un smartphone" },
            ],
          },
          quiz: [
            {
              q: "Quelles sont, dans l'ordre, les fonctions de la chaîne d'information ?",
              options: ["Acquérir, traiter, communiquer", "Traiter, acquérir, communiquer", "Alimenter, distribuer, convertir", "Communiquer, traiter, acquérir"],
              answer: 0,
              why: "L'information est d'abord captée, puis analysée par le programme, enfin transmise sous forme d'ordres ou de messages.",
            },
            {
              q: "Dans un système automatisé, quel composant réalise la fonction traiter ?",
              options: ["Un capteur", "Un moteur", "Un microcontrôleur", "Une batterie"],
              answer: 2,
              why: "Le microcontrôleur exécute le programme et prend les décisions.",
            },
            {
              q: "Un interrupteur de fin de course (appuyé ou non) fournit une information :",
              options: ["analogique", "logique", "thermique", "mécanique"],
              answer: 1,
              why: "Il n'a que deux états possibles : c'est une information logique, dite tout ou rien.",
            },
            {
              q: "À quelle chaîne appartient le moteur d'un portail automatique ?",
              options: ["À la chaîne d'information, fonction acquérir", "À la chaîne d'information, fonction traiter", "À la chaîne d'information, fonction communiquer", "À la chaîne d'énergie"],
              answer: 3,
              why: "Le moteur réalise l'action physique : il convertit l'énergie électrique en énergie mécanique dans la chaîne d'énergie.",
            },
            {
              q: "Un écran qui affiche la température d'une serre réalise la fonction :",
              options: ["acquérir", "communiquer", "convertir", "traiter"],
              answer: 1,
              why: "L'écran transmet une information à l'utilisateur : c'est la fonction communiquer.",
            },
          ],
          trap: "Placer le moteur ou la lampe dans la chaîne d'information : ces composants agissent physiquement, ils appartiennent à la chaîne d'énergie ; seul l'ordre qui leur est envoyé relève de la fonction communiquer.",
          method: "Pour chaque composant, posez-vous une seule question : « Est-ce qu'il manipule une information ou est-ce qu'il réalise une action physique ? » Information : chaîne d'information. Action : chaîne d'énergie.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chaine-energie',
          title: "La chaîne d'énergie : alimenter, distribuer, convertir, transmettre",
          minutes: 30,
          objectives: [
            "Identifier les fonctions alimenter, distribuer, convertir et transmettre dans un système technique.",
            "Nommer les formes d'énergie et les conversions réalisées par les actionneurs.",
            "Calculer une puissance, une énergie et un rendement.",
            "Déterminer la vitesse de sortie d'une transmission par engrenages.",
          ],
          course: [
            {
              heading: "Les quatre fonctions de la chaîne d'énergie",
              paragraphs: [
                "La chaîne d'énergie fournit l'énergie nécessaire à l'action et la transforme jusqu'à agir sur la matière ou sur l'objet à déplacer. Elle reçoit les ordres de la chaîne d'information.",
                "Alimenter : fournir l'énergie au système (réseau électrique à 230 V, pile, batterie, panneau solaire). Distribuer : laisser passer ou non l'énergie vers l'actionneur, sur ordre de la chaîne d'information ; cette fonction est assurée par un préactionneur (relais, transistor, carte de commande de moteur). Convertir : transformer l'énergie en une autre forme utile ; c'est le rôle de l'actionneur (moteur électrique, LED, résistance chauffante). Transmettre : transmettre et adapter le mouvement jusqu'à l'élément qui agit (engrenages, poulies et courroie, pignon et chaîne, pignon et crémaillère).",
              ],
              box: { label: "Définition", text: "Chaîne d'énergie : Alimenter (source d'énergie) → Distribuer (préactionneur) → Convertir (actionneur) → Transmettre (mécanisme de transmission) → action sur l'élément à déplacer." },
            },
            {
              heading: "Les formes d'énergie et leurs conversions",
              paragraphs: [
                "On distingue plusieurs formes d'énergie : électrique, mécanique (mouvement), thermique (chaleur), lumineuse, chimique (stockée dans une pile, une batterie ou un carburant). Un actionneur convertit une forme en une autre : un moteur électrique convertit l'énergie électrique en énergie mécanique, une LED convertit l'énergie électrique en énergie lumineuse, une résistance chauffante convertit l'énergie électrique en énergie thermique.",
                "Aucune conversion n'est parfaite : une partie de l'énergie est perdue, le plus souvent sous forme de chaleur (un moteur chauffe). Le rendement mesure la part d'énergie réellement utile.",
              ],
              box: { label: "Formule", text: "Rendement : η = énergie utile ÷ énergie absorbée (ou puissance utile ÷ puissance absorbée). Le rendement est toujours inférieur à 1, soit inférieur à 100 %." },
            },
            {
              heading: "Puissance et énergie électriques",
              paragraphs: [
                "La puissance électrique reçue par un appareil se calcule par P = U × I, avec U la tension en volts (V), I l'intensité du courant en ampères (A) et P la puissance en watts (W). Un moteur alimenté sous 12 V et parcouru par un courant de 2 A reçoit une puissance de 24 W.",
                "L'énergie consommée dépend de la puissance et de la durée : E = P × t. Avec P en watts et t en heures, E est en wattheures (Wh) ; avec t en secondes, E est en joules (J). La capacité d'une batterie est souvent donnée en wattheures : une batterie de 36 Wh peut alimenter un appareil de 24 W pendant 36 ÷ 24 = 1,5 h.",
              ],
              box: { label: "Formule", text: "P = U × I (W = V × A) ; E = P × t (Wh = W × h, ou J = W × s) ; 1 Wh = 3 600 J ; durée de fonctionnement = énergie disponible ÷ puissance." },
            },
            {
              heading: "Transmettre et adapter le mouvement",
              paragraphs: [
                "Un moteur électrique tourne souvent très vite, alors que l'élément à entraîner (une roue, un portail) doit aller plus lentement mais avec plus de force. On utilise alors un réducteur, par exemple un engrenage : une petite roue dentée (le pignon menant, fixé au moteur) entraîne une grande roue dentée (la roue menée).",
                "Le rapport de transmission r compare la vitesse de sortie à la vitesse d'entrée : r = Z menant ÷ Z mené, où Z est le nombre de dents. La vitesse de sortie vaut N sortie = N entrée × r. Si le pignon menant a moins de dents que la roue menée, r est inférieur à 1 et la vitesse diminue. Un système pignon-crémaillère transforme une rotation en translation, comme sur un portail coulissant.",
              ],
              box: { label: "Formule", text: "Engrenage : r = Z menant ÷ Z mené = N sortie ÷ N entrée, donc N sortie = N entrée × r. Les vitesses de rotation N s'expriment souvent en tours par minute (tr/min)." },
            },
          ],
          keyPoints: [
            "Chaîne d'énergie : alimenter, distribuer, convertir, transmettre.",
            "Alimenter : batterie, pile, secteur 230 V, panneau solaire ; distribuer : préactionneur (relais, transistor).",
            "Convertir : l'actionneur change la forme de l'énergie (moteur : électrique vers mécanique).",
            "P = U × I ; E = P × t ; rendement η = utile ÷ absorbée, toujours inférieur à 1.",
            "Engrenage : r = Z menant ÷ Z mené et N sortie = N entrée × r.",
            "Les pertes d'énergie se font surtout sous forme de chaleur.",
          ],
          example: {
            statement: "Un portail coulissant automatique est alimenté par le réseau électrique. Une carte de commande autorise ou non le passage du courant vers un moteur électrique ; le moteur entraîne un réducteur à engrenages, puis un pignon qui engrène sur une crémaillère fixée au portail. Décrire sa chaîne d'énergie et les formes d'énergie mises en jeu.",
            solution: [
              "Alimenter : le réseau électrique fournit l'énergie électrique (230 V).",
              "Distribuer : la carte de commande, sur ordre de la chaîne d'information, laisse passer ou non l'énergie électrique vers le moteur.",
              "Convertir : le moteur convertit l'énergie électrique en énergie mécanique de rotation (avec des pertes en chaleur).",
              "Transmettre : le réducteur diminue la vitesse de rotation ; le pignon et la crémaillère transforment la rotation en translation du portail.",
              "Réponse : réseau électrique (alimenter), carte de commande (distribuer), moteur (convertir), réducteur et pignon-crémaillère (transmettre) ; énergie électrique puis mécanique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour une trottinette électrique, associer chaque composant à sa fonction dans la chaîne d'énergie : a) le moteur placé dans la roue ; b) la batterie lithium-ion ; c) le variateur électronique qui envoie plus ou moins d'énergie au moteur ; d) la roue qui transmet le mouvement au sol.",
              hint: "Repérez d'abord la source d'énergie, puis l'élément qui transforme l'énergie électrique en mouvement.",
              solution: [
                "a) Le moteur convertit l'énergie électrique en énergie mécanique : convertir.",
                "b) La batterie fournit l'énergie : alimenter.",
                "c) Le variateur dose l'énergie envoyée au moteur selon l'ordre reçu : distribuer.",
                "d) La roue transmet le mouvement jusqu'au sol : transmettre.",
                "Résultat : batterie = alimenter ; variateur = distribuer ; moteur = convertir ; roue = transmettre.",
              ],
            },
            {
              level: 2,
              statement: "Le moteur d'un petit robot est alimenté sous une tension de 12 V et parcouru par un courant de 2 A. a) Calculer la puissance reçue par le moteur. b) Calculer l'énergie consommée en 30 minutes, en Wh. c) La batterie du robot stocke 36 Wh. Combien de temps le moteur peut-il fonctionner avec une batterie pleine (en supposant qu'il est le seul à consommer) ?",
              hint: "Convertissez 30 minutes en heures avant d'utiliser E = P × t.",
              solution: [
                "a) P = U × I = 12 × 2 = 24 W.",
                "b) 30 min = 0,5 h, donc E = P × t = 24 × 0,5 = 12 Wh.",
                "c) Durée = énergie disponible ÷ puissance = 36 ÷ 24 = 1,5 h.",
                "1,5 h = 1 h 30 min.",
                "Résultat : 24 W ; 12 Wh en 30 minutes ; 1 h 30 min d'autonomie.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Le moteur d'un volet roulant tourne à 3 000 tr/min. Il entraîne un pignon de 10 dents qui engrène sur une roue de 50 dents, solidaire de l'axe d'enroulement du volet. Le moteur absorbe une puissance électrique de 24 W et fournit une puissance mécanique utile de 18 W. a) Calculer le rapport de transmission de l'engrenage. b) En déduire la vitesse de rotation de l'axe d'enroulement. c) Calculer le rendement du moteur, en pourcentage. d) Que devient la puissance perdue ?",
              hint: "Le pignon de 10 dents est fixé au moteur : c'est lui le menant.",
              solution: [
                "a) r = Z menant ÷ Z mené = 10 ÷ 50 = 0,2.",
                "b) N sortie = N entrée × r = 3 000 × 0,2 = 600 tr/min.",
                "c) η = puissance utile ÷ puissance absorbée = 18 ÷ 24 = 0,75, soit 75 %.",
                "d) Puissance perdue : 24 - 18 = 6 W, dissipée principalement sous forme de chaleur (échauffement du moteur, frottements).",
                "Résultat : r = 0,2 ; l'axe tourne à 600 tr/min ; rendement de 75 % ; 6 W perdus en chaleur.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la chaîne d'énergie d'un vélo à assistance électrique.",
            items: [
              "Alimenter : la batterie fournit l'énergie électrique",
              "Distribuer : le contrôleur dose l'énergie envoyée au moteur",
              "Convertir : le moteur transforme l'énergie électrique en énergie mécanique",
              "Transmettre : le pignon et la chaîne entraînent la roue",
              "Agir : la roue fait avancer le vélo",
            ],
          },
          quiz: [
            {
              q: "Quel composant réalise la fonction convertir dans un ventilateur ?",
              options: ["La prise de courant", "Le moteur électrique", "L'interrupteur", "Le câble"],
              answer: 1,
              why: "Le moteur convertit l'énergie électrique en énergie mécanique qui fait tourner les pales.",
            },
            {
              q: "Un relais commandé par une carte programmable réalise la fonction :",
              options: ["distribuer", "alimenter", "convertir", "acquérir"],
              answer: 0,
              why: "Le relais est un préactionneur : il laisse passer ou non l'énergie vers l'actionneur, sur ordre de la chaîne d'information.",
            },
            {
              q: "Un appareil est alimenté sous 230 V et parcouru par 2 A. Sa puissance vaut :",
              options: ["115 W", "232 W", "460 W", "4 600 W"],
              answer: 2,
              why: "P = U × I = 230 × 2 = 460 W.",
            },
            {
              q: "Un moteur absorbe 50 W et fournit 40 W utiles. Son rendement est :",
              options: ["1,25", "10 %", "90 %", "80 %"],
              answer: 3,
              why: "η = 40 ÷ 50 = 0,8, soit 80 %. Un rendement ne peut pas dépasser 1.",
            },
            {
              q: "Un pignon menant de 12 dents entraîne une roue de 36 dents. La vitesse de sortie est :",
              options: ["trois fois plus faible", "trois fois plus grande", "identique", "douze fois plus faible"],
              answer: 0,
              why: "r = 12 ÷ 36 = 1/3 : la roue menée tourne trois fois moins vite que le pignon.",
            },
          ],
          trap: "Inverser le rapport de transmission en divisant le nombre de dents de la roue menée par celui du pignon menant : avec un petit pignon sur le moteur, la vitesse de sortie doit diminuer, donc r doit être inférieur à 1.",
          method: "Après chaque calcul, vérifiez la cohérence : un rendement est inférieur à 1, une puissance s'exprime en W, une énergie en Wh ou en J, et un réducteur fait tourner la sortie moins vite que le moteur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'capteurs-actionneurs',
          title: "Capteurs et actionneurs",
          minutes: 25,
          objectives: [
            "Identifier le rôle d'un capteur et celui d'un actionneur dans un système.",
            "Choisir un capteur adapté à la grandeur à mesurer et préciser le type de signal qu'il fournit.",
            "Associer un actionneur à la conversion d'énergie qu'il réalise.",
            "Calculer une distance mesurée par un capteur à ultrasons.",
          ],
          course: [
            {
              heading: "Les capteurs : les sens du système",
              paragraphs: [
                "Un capteur prélève une information sur une grandeur physique et la transforme en signal électrique exploitable par la carte de traitement. Il appartient à la chaîne d'information (fonction acquérir). Comme nos sens, il permet au système de « percevoir » son environnement.",
                "Exemples courants : la photorésistance (ou capteur de luminosité) mesure la lumière ; la thermistance mesure la température ; le capteur à ultrasons ou à infrarouge mesure une distance ; le détecteur de présence infrarouge passif (PIR) repère le rayonnement d'une personne qui bouge ; l'interrupteur de fin de course détecte un contact ; le capteur d'humidité mesure l'humidité de l'air ou du sol ; l'accéléromètre mesure une inclinaison ou un mouvement.",
              ],
              box: { label: "Définition", text: "Capteur : composant qui transforme une grandeur physique (lumière, température, distance, contact) en signal électrique. Capteur logique : deux états (0 ou 1). Capteur analogique : signal qui varie de façon continue avec la grandeur mesurée." },
            },
            {
              heading: "Choisir un capteur",
              paragraphs: [
                "Pour choisir un capteur, on se pose quatre questions : quelle grandeur faut-il mesurer ? Faut-il seulement savoir si elle dépasse un seuil (capteur logique) ou connaître sa valeur (capteur analogique) ? Dans quelle plage de valeurs (par exemple de 2 cm à 4 m pour un capteur de distance) ? Avec quelle précision ?",
                "Le capteur à ultrasons émet une onde sonore inaudible et mesure la durée t que met l'écho à revenir après s'être réfléchi sur un obstacle. L'onde fait l'aller et le retour : la distance est donc d = v × t ÷ 2, avec v la vitesse du son dans l'air, environ 340 m/s. Pour un écho reçu au bout de 0,01 s : d = 340 × 0,01 ÷ 2 = 1,7 m.",
              ],
              box: { label: "Formule", text: "Capteur à ultrasons : d = v × t ÷ 2, avec v ≈ 340 m/s (vitesse du son dans l'air), t la durée aller-retour en secondes et d en mètres." },
            },
            {
              heading: "Les actionneurs : les muscles du système",
              paragraphs: [
                "Un actionneur convertit l'énergie qu'il reçoit (le plus souvent électrique) en une autre forme d'énergie pour agir. Il appartient à la chaîne d'énergie (fonction convertir).",
                "Le moteur à courant continu produit une rotation ; le servomoteur se place à une position angulaire précise (souvent entre 0° et 180°) ; le moteur pas à pas tourne par petits angles réguliers, utile pour les imprimantes 3D ; le vérin produit une translation (aller et retour) ; la LED produit de la lumière ; le buzzer produit un son ; la résistance chauffante produit de la chaleur ; l'électroaimant attire une pièce métallique, comme dans une gâche électrique de porte.",
              ],
            },
            {
              heading: "Le préactionneur : l'intermédiaire indispensable",
              paragraphs: [
                "Une carte programmable délivre un courant très faible sur ses sorties : de quoi allumer une LED, mais pas faire tourner un moteur puissant. Entre la carte et l'actionneur, on place donc un préactionneur (relais, transistor, carte de commande de moteur) : il reçoit l'ordre de faible énergie et commande le passage d'une énergie plus importante vers l'actionneur.",
                "Analogie : le préactionneur est comme un robinet. La main (la carte) fournit un petit effort pour tourner la poignée, et c'est un débit d'eau important (l'énergie) qui passe ou non.",
              ],
              box: { label: "À retenir", text: "Capteur → chaîne d'information (acquérir). Préactionneur → chaîne d'énergie (distribuer). Actionneur → chaîne d'énergie (convertir)." },
            },
          ],
          keyPoints: [
            "Un capteur transforme une grandeur physique en signal électrique : fonction acquérir.",
            "Capteur logique : 0 ou 1 ; capteur analogique : valeur continue.",
            "Ultrasons : d = v × t ÷ 2, avec v ≈ 340 m/s (aller et retour).",
            "Un actionneur convertit l'énergie pour agir : moteur, servomoteur, vérin, LED, buzzer, résistance chauffante.",
            "Le préactionneur (relais, transistor) commande la forte énergie à partir d'un ordre faible.",
          ],
          example: {
            statement: "Un robot aspirateur utilise un capteur à ultrasons pour éviter les murs. L'écho revient 4 ms après l'émission. La vitesse du son dans l'air est de 340 m/s. Calculer la distance entre le robot et le mur.",
            solution: [
              "Conversion de la durée : 4 ms = 0,004 s.",
              "L'onde fait l'aller et le retour : d = v × t ÷ 2.",
              "d = 340 × 0,004 ÷ 2 = 1,36 ÷ 2 = 0,68 m.",
              "Réponse : le mur se trouve à 0,68 m, soit 68 cm du robot.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer ces composants en capteurs et en actionneurs : photorésistance, servomoteur, bouton poussoir, buzzer, thermistance, vérin électrique, détecteur de présence infrarouge, LED.",
              hint: "Un capteur reçoit une information de l'extérieur ; un actionneur agit sur l'extérieur.",
              solution: [
                "Capteurs (ils prélèvent une information) : photorésistance (lumière), bouton poussoir (appui), thermistance (température), détecteur de présence infrarouge (passage d'une personne).",
                "Actionneurs (ils convertissent l'énergie pour agir) : servomoteur (rotation à un angle précis), buzzer (son), vérin électrique (translation), LED (lumière).",
                "Résultat : 4 capteurs et 4 actionneurs, répartis comme ci-dessus.",
              ],
            },
            {
              level: 2,
              statement: "Un robot mobile mesure la distance aux obstacles avec un capteur à ultrasons (vitesse du son : 340 m/s). a) L'écho revient au bout de 5,0 ms. Calculer la distance de l'obstacle. b) Le programme doit arrêter le robot à 20 cm d'un obstacle. Calculer la durée aller-retour de l'écho correspondant à cette distance, en ms (arrondie au centième).",
              hint: "Pour la question b, isolez t dans d = v × t ÷ 2 : t = 2 × d ÷ v, avec d en mètres.",
              solution: [
                "a) t = 5,0 ms = 0,005 s ; d = 340 × 0,005 ÷ 2 = 1,7 ÷ 2 = 0,85 m.",
                "b) d = 20 cm = 0,20 m ; t = 2 × d ÷ v = 2 × 0,20 ÷ 340 = 0,40 ÷ 340 ≈ 0,001 18 s.",
                "0,001 18 s ≈ 1,18 ms.",
                "Résultat : l'obstacle est à 0,85 m ; le robot doit s'arrêter quand la durée de l'écho devient inférieure ou égale à environ 1,18 ms.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Pour réguler la température d'un aquarium, on étudie une thermistance. Ses mesures : 10 °C → 19,9 kΩ ; 20 °C → 12,5 kΩ ; 25 °C → 10,0 kΩ ; 30 °C → 8,1 kΩ. a) Comment évolue la résistance quand la température augmente ? b) Ce capteur fournit-il une information logique ou analogique ? Justifier. c) Quel actionneur faut-il commander pour réchauffer l'eau, et quelle conversion d'énergie réalise-t-il ? d) Pourquoi ne peut-on pas brancher cet actionneur directement sur une sortie de la carte programmable ?",
              hint: "Lisez le tableau dans l'ordre des températures croissantes et regardez le sens de variation de la résistance.",
              solution: [
                "a) Quand la température passe de 10 °C à 30 °C, la résistance passe de 19,9 kΩ à 8,1 kΩ : elle diminue quand la température augmente.",
                "b) La résistance prend une infinité de valeurs selon la température : le capteur fournit une information analogique.",
                "c) Il faut commander une résistance chauffante : elle convertit l'énergie électrique en énergie thermique.",
                "d) Une sortie de carte programmable ne fournit qu'un courant très faible, insuffisant pour une résistance chauffante : il faut un préactionneur (relais ou transistor) qui commande le passage de l'énergie.",
                "Résultat : résistance décroissante avec la température, information analogique, résistance chauffante (électrique vers thermique) commandée par un relais.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : capteurs et actionneurs.",
            statements: [
              { text: "Un buzzer est un capteur de son.", true: false, why: "Le buzzer produit un son : c'est un actionneur. Un microphone serait le capteur." },
              { text: "Un capteur à ultrasons mesure une durée d'aller-retour pour calculer une distance.", true: true, why: "On divise par 2 car l'onde parcourt deux fois la distance." },
              { text: "Un bouton poussoir fournit une information logique.", true: true, why: "Il n'a que deux états : appuyé ou relâché." },
              { text: "Un servomoteur peut se placer à un angle précis.", true: true, why: "Il est commandé en position, souvent entre 0° et 180°." },
              { text: "On peut toujours brancher un gros moteur directement sur une sortie de carte programmable.", true: false, why: "La sortie fournit trop peu de courant ; il faut un préactionneur comme un relais ou un transistor." },
              { text: "Une LED est un capteur de lumière.", true: false, why: "La LED émet de la lumière : c'est un actionneur. La photorésistance est le capteur de lumière." },
            ],
          },
          quiz: [
            {
              q: "Quel capteur choisir pour allumer une lampe quand il fait nuit ?",
              options: ["Un capteur de température", "Un fin de course", "Un capteur de luminosité", "Un accéléromètre"],
              answer: 2,
              why: "Le capteur de luminosité (photorésistance) mesure la lumière ambiante.",
            },
            {
              q: "Quel actionneur produit un mouvement de translation ?",
              options: ["Une LED", "Un buzzer", "Une résistance chauffante", "Un vérin"],
              answer: 3,
              why: "Le vérin produit un mouvement rectiligne d'aller et retour.",
            },
            {
              q: "L'écho d'un capteur à ultrasons revient après 0,002 s (son : 340 m/s). La distance est :",
              options: ["0,68 m", "0,34 m", "3,4 m", "0,17 m"],
              answer: 1,
              why: "d = 340 × 0,002 ÷ 2 = 0,34 m. Sans la division par 2, on trouverait à tort 0,68 m.",
            },
            {
              q: "Un relais placé entre une carte et un moteur est :",
              options: ["un préactionneur", "un capteur", "un actionneur", "une source d'énergie"],
              answer: 0,
              why: "Il distribue l'énergie vers le moteur sur ordre de la carte : c'est un préactionneur.",
            },
            {
              q: "Une résistance chauffante convertit l'énergie électrique en énergie :",
              options: ["lumineuse", "mécanique", "chimique", "thermique"],
              answer: 3,
              why: "Elle chauffe : elle produit de l'énergie thermique, comme dans un grille-pain ou un radiateur.",
            },
          ],
          trap: "Oublier de diviser par 2 dans le calcul d'un capteur à ultrasons : la durée mesurée correspond à l'aller et au retour de l'onde, donc à deux fois la distance.",
          method: "Mémorisez un couple par sens : lumière (photorésistance et LED), son (microphone et buzzer), chaleur (thermistance et résistance chauffante). Dans chaque couple, le premier capte, le second agit.",
        },
      ],
    },
    /* ==================================================================== */
    /* MODÉLISER ET SIMULER                                                   */
    /* ==================================================================== */
    {
      id: 'modeliser-simuler',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'modele-3d',
          title: "Représenter un objet : croquis, schéma et modèle 3D",
          minutes: 25,
          objectives: [
            "Choisir le mode de représentation adapté : croquis, schéma, dessin technique ou modèle 3D.",
            "Lire et utiliser une échelle pour passer des dimensions du dessin aux dimensions réelles.",
            "Décrire les étapes de création d'un modèle 3D avec un logiciel de conception assistée par ordinateur.",
          ],
          course: [
            {
              heading: "Le croquis : exprimer une idée rapidement",
              paragraphs: [
                "Le croquis est un dessin à main levée, réalisé rapidement, sans instrument et sans échelle précise. Il sert à exprimer et à partager une idée au début d'un projet : forme générale, principe de fonctionnement, emplacement des éléments. On l'annote avec des flèches et des mots.",
                "Un bon croquis n'a pas besoin d'être beau : il doit être lisible et compréhensible par les autres membres de l'équipe. On en réalise souvent plusieurs pour comparer des solutions.",
              ],
            },
            {
              heading: "Le schéma et le dessin technique",
              paragraphs: [
                "Le schéma est une représentation simplifiée qui utilise des symboles normalisés, compris de tous. Le schéma électrique représente un circuit avec les symboles du générateur, de la lampe, de l'interrupteur ; le schéma de principe montre comment fonctionne un mécanisme sans dessiner les pièces en détail.",
                "Le dessin technique représente précisément une pièce avec des vues : la vue de face, la vue de dessus et la vue de gauche, alignées entre elles. Il indique les dimensions réelles par des cotes, exprimées en millimètres, et il est réalisé à une échelle connue.",
                "L'échelle compare les dimensions du dessin aux dimensions réelles. À l'échelle 1:2, le dessin est deux fois plus petit que l'objet ; à l'échelle 1:1, il est en vraie grandeur ; à l'échelle 2:1, il est deux fois plus grand (utile pour les petites pièces).",
              ],
              box: { label: "Formule", text: "Échelle = dimension sur le dessin ÷ dimension réelle (dans la même unité). Donc dimension réelle = dimension sur le dessin ÷ échelle. À l'échelle 1:5, 40 mm sur le dessin représentent 40 ÷ 0,2 = 200 mm." },
            },
            {
              heading: "Le modèle 3D numérique",
              paragraphs: [
                "Un modèle 3D est une représentation numérique en trois dimensions, créée avec un logiciel de conception assistée par ordinateur (CAO). On peut le faire tourner à l'écran, l'observer sous tous les angles, et obtenir automatiquement ses vues, ses dimensions, son volume ou sa masse.",
                "On crée généralement une pièce en deux temps : on trace une esquisse en 2D (un rectangle, un cercle), puis on la transforme en volume par une opération, comme l'extrusion (on « tire » l'esquisse en épaisseur) ou la révolution (on la fait tourner autour d'un axe). On peut ensuite percer, arrondir, enlever de la matière, puis assembler plusieurs pièces pour vérifier qu'elles s'emboîtent.",
                "Le modèle 3D peut être exporté vers une machine de fabrication : une imprimante 3D (souvent au format STL) ou une machine de découpe laser. Il évite de fabriquer des pièces qui ne s'assemblent pas.",
              ],
              box: { label: "Définition", text: "CAO : conception assistée par ordinateur. Extrusion : transformation d'une esquisse 2D en volume par ajout d'épaisseur. Révolution : création d'un volume en faisant tourner une esquisse autour d'un axe." },
            },
            {
              heading: "Choisir la bonne représentation",
              paragraphs: [
                "Chaque représentation a son usage. Pour proposer une idée en quelques minutes : le croquis. Pour expliquer un circuit ou un principe : le schéma. Pour fabriquer une pièce à la main avec ses dimensions exactes : le dessin technique coté. Pour vérifier un assemblage, calculer une masse ou piloter une machine : le modèle 3D.",
              ],
              box: { label: "À retenir", text: "Croquis : idée, rapide, sans échelle. Schéma : symboles normalisés, principe. Dessin technique : vues, cotes en mm, échelle. Modèle 3D : numérique, mesures et fabrication automatiques." },
            },
          ],
          keyPoints: [
            "Croquis : dessin à main levée pour exprimer une idée, sans échelle.",
            "Schéma : représentation simplifiée avec des symboles normalisés.",
            "Dessin technique : vues alignées (face, dessus, gauche), cotes en mm, échelle.",
            "Dimension réelle = dimension sur le dessin ÷ échelle.",
            "Modèle 3D (CAO) : esquisse 2D puis extrusion ou révolution ; export vers imprimante 3D.",
          ],
          example: {
            statement: "Sur un dessin technique à l'échelle 1:5, la longueur d'une étagère mesure 160 mm. Quelle est sa longueur réelle, en millimètres puis en centimètres ?",
            solution: [
              "L'échelle 1:5 signifie que 1 mm sur le dessin représente 5 mm en réalité.",
              "Dimension réelle = dimension sur le dessin × 5 (ce qui revient à diviser par l'échelle 0,2).",
              "Longueur réelle = 160 × 5 = 800 mm.",
              "800 mm = 80 cm.",
              "Réponse : l'étagère mesure 800 mm, soit 80 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquer le mode de représentation le plus adapté à chaque situation (croquis, schéma, dessin technique ou modèle 3D) : a) proposer en 5 minutes une idée de support de téléphone à l'équipe ; b) expliquer comment brancher une LED et sa résistance sur une pile ; c) préparer l'impression 3D d'une pièce ; d) donner à un camarade les dimensions exactes d'une plaque à découper à la main.",
              hint: "Associez chaque situation à son besoin principal : rapidité, symboles, précision des cotes ou fabrication par machine.",
              solution: [
                "a) Une idée rapide, sans précision : croquis.",
                "b) Un circuit électrique avec des symboles normalisés : schéma (électrique).",
                "c) L'imprimante 3D a besoin d'un fichier numérique en volume : modèle 3D.",
                "d) Des dimensions exactes pour fabriquer : dessin technique coté.",
                "Résultat : a = croquis ; b = schéma ; c = modèle 3D ; d = dessin technique.",
              ],
            },
            {
              level: 2,
              statement: "a) Une pièce réelle de 120 mm est dessinée à l'échelle 1:2. Quelle est sa longueur sur le dessin ? b) Sur un dessin à l'échelle 1:5, une cote mesure 45 mm. Quelle est la dimension réelle ? c) Une vis de 8 mm de long est dessinée à l'échelle 5:1. Quelle est sa longueur sur le dessin ?",
              hint: "À l'échelle 1:2 le dessin est deux fois plus petit ; à l'échelle 5:1 il est cinq fois plus grand.",
              solution: [
                "a) Dimension sur le dessin = dimension réelle × échelle = 120 × 1/2 = 60 mm.",
                "b) Dimension réelle = 45 × 5 = 225 mm.",
                "c) Dimension sur le dessin = 8 × 5 = 40 mm.",
                "Résultat : 60 mm ; 225 mm ; 40 mm.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un support de téléphone est modélisé en 3D. Il est formé d'un socle en pavé de 80 mm × 60 mm × 10 mm et d'un dossier en pavé de 80 mm × 10 mm × 50 mm. Il sera imprimé plein en PLA, de masse volumique 1,24 g/cm³ ; le filament coûte 25 € le kilogramme. a) Calculer le volume total de la pièce en cm³. b) Calculer sa masse. c) Calculer le coût du filament utilisé, arrondi au centime. d) Citer deux avantages de la modélisation 3D avant l'impression.",
              hint: "1 cm³ = 1 000 mm³. Calculez le volume de chaque pavé séparément, puis additionnez.",
              solution: [
                "a) Socle : 80 × 60 × 10 = 48 000 mm³ = 48 cm³. Dossier : 80 × 10 × 50 = 40 000 mm³ = 40 cm³. Volume total : 48 + 40 = 88 cm³.",
                "b) Masse = volume × masse volumique = 88 × 1,24 = 109,12 g.",
                "c) 109,12 g = 0,109 12 kg ; coût = 0,109 12 × 25 = 2,728 € ≈ 2,73 €.",
                "d) Le modèle 3D permet de vérifier les dimensions et l'assemblage avant de fabriquer, et de calculer la masse et le coût de matière à l'avance (on accepte aussi : tester plusieurs formes sans gaspiller de matière).",
                "Résultat : 88 cm³, 109,12 g et environ 2,73 € de filament.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa signification.",
            pairs: [
              { left: "Croquis", right: "Dessin à main levée pour exprimer une idée" },
              { left: "Schéma", right: "Représentation simplifiée avec des symboles normalisés" },
              { left: "Cote", right: "Dimension réelle indiquée sur un dessin, en mm" },
              { left: "Échelle 1:2", right: "Dessin deux fois plus petit que l'objet" },
              { left: "Extrusion", right: "Transformer une esquisse 2D en volume" },
              { left: "Modèle 3D", right: "Représentation numérique en trois dimensions" },
            ],
          },
          quiz: [
            {
              q: "Quelle représentation est réalisée à main levée et sans échelle ?",
              options: ["Le dessin technique", "Le modèle 3D", "Le schéma électrique", "Le croquis"],
              answer: 3,
              why: "Le croquis sert à exprimer rapidement une idée, sans instrument ni échelle.",
            },
            {
              q: "Sur un dessin à l'échelle 1:10, une longueur de 25 mm représente :",
              options: ["250 mm", "2,5 mm", "35 mm", "25 cm²"],
              answer: 0,
              why: "Le dessin est dix fois plus petit : 25 × 10 = 250 mm.",
            },
            {
              q: "Dans un dessin technique, les cotes sont exprimées en :",
              options: ["centimètres", "mètres", "millimètres", "pouces"],
              answer: 2,
              why: "Par convention, les cotes d'un dessin technique sont en millimètres, sans écrire l'unité.",
            },
            {
              q: "Quelle opération de CAO crée un volume en faisant tourner une esquisse autour d'un axe ?",
              options: ["L'extrusion", "La révolution", "Le perçage", "L'assemblage"],
              answer: 1,
              why: "La révolution fait tourner l'esquisse autour d'un axe, idéale pour une roue ou un gobelet.",
            },
            {
              q: "Quelle échelle permet de représenter une très petite pièce en l'agrandissant ?",
              options: ["1:2", "1:1", "5:1", "1:5"],
              answer: 2,
              why: "Avec 5:1, le dessin est cinq fois plus grand que la pièce réelle.",
            },
          ],
          trap: "Inverser l'échelle : à l'échelle 1:5, il faut multiplier la dimension du dessin par 5 pour trouver la dimension réelle, et non la diviser.",
          method: "Avant tout calcul d'échelle, demandez-vous si l'objet réel est plus grand ou plus petit que le dessin : votre résultat doit aller dans ce sens.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'simuler-comportement',
          title: "Simuler un comportement et comparer aux mesures",
          minutes: 25,
          objectives: [
            "Expliquer l'intérêt de la simulation pour prévoir le comportement d'un objet avant sa fabrication.",
            "Identifier les paramètres et les hypothèses simplificatrices d'un modèle.",
            "Comparer les résultats d'une simulation aux mesures réalisées sur le réel en calculant un écart relatif.",
            "Proposer une explication et une amélioration quand l'écart est trop grand.",
          ],
          course: [
            {
              heading: "Pourquoi simuler ?",
              paragraphs: [
                "Un modèle est une représentation simplifiée d'un objet ou d'un phénomène. Simuler, c'est faire fonctionner ce modèle, le plus souvent sur ordinateur, pour prévoir comment l'objet réel va se comporter : comment une pièce se déforme sous une charge, quelle température atteint une maison, comment un robot se déplace, quel courant circule dans un circuit.",
                "La simulation permet de tester de nombreuses solutions sans fabriquer de prototype à chaque fois. Elle fait gagner du temps et de l'argent, économise de la matière, et permet d'étudier des situations dangereuses ou difficiles à reproduire (un choc de voiture, un séisme). Un programme peut aussi être simulé : les cartes programmables disposent souvent d'un simulateur à l'écran.",
              ],
              box: { label: "Définition", text: "Modèle : représentation simplifiée du réel. Simulation : utilisation du modèle pour prévoir le comportement d'un objet ou d'un système dans des conditions données." },
            },
            {
              heading: "Paramètres et hypothèses",
              paragraphs: [
                "Pour simuler, on fixe des paramètres : les dimensions, le matériau, la masse, la tension d'alimentation, la température extérieure... Changer un paramètre permet de voir son influence : par exemple, augmenter l'épaisseur d'une étagère diminue sa déformation.",
                "Un modèle repose aussi sur des hypothèses simplificatrices : on néglige certains frottements, on suppose le matériau parfaitement homogène, on considère que la batterie délivre toujours la même tension. Ces simplifications rendent le calcul possible, mais elles expliquent pourquoi la simulation ne donne jamais exactement le résultat réel.",
              ],
            },
            {
              heading: "Comparer la simulation et la mesure",
              paragraphs: [
                "Pour valider un modèle, on fabrique un prototype et on réalise des mesures selon un protocole précis (mêmes conditions que la simulation, même instrument, plusieurs essais dont on fait la moyenne). On compare ensuite la valeur mesurée à la valeur simulée.",
                "On calcule l'écart relatif, exprimé en pourcentage, en prenant ici la valeur simulée comme référence. Si l'écart est inférieur à la tolérance fixée par le cahier des charges (par exemple 10 %), le modèle est jugé fiable ; sinon, il faut chercher la cause.",
              ],
              box: { label: "Formule", text: "Écart relatif (%) = |valeur mesurée - valeur simulée| ÷ valeur simulée × 100. Exemple : simulé 0,50 m/s, mesuré 0,46 m/s : écart = 0,04 ÷ 0,50 × 100 = 8 %." },
            },
            {
              heading: "Interpréter un écart et améliorer",
              paragraphs: [
                "Un écart trop grand peut venir du modèle (hypothèse trop simplificatrice, paramètre mal renseigné, comme un matériau différent de celui utilisé), de la mesure (instrument imprécis, mauvaise lecture, conditions différentes) ou du prototype (défaut de fabrication, pièce mal montée).",
                "On corrige alors le modèle ou le prototype, puis on recommence la comparaison : c'est une démarche itérative. Au fil des allers-retours, la simulation devient de plus en plus fidèle au réel.",
              ],
              box: { label: "À retenir", text: "Simuler, mesurer, comparer, expliquer l'écart, améliorer, recommencer : la simulation ne remplace pas la mesure, elle la prépare." },
            },
          ],
          keyPoints: [
            "Un modèle est une représentation simplifiée ; la simulation le fait fonctionner pour prévoir le réel.",
            "La simulation fait gagner du temps, de l'argent et de la matière.",
            "Un modèle repose sur des paramètres et des hypothèses simplificatrices.",
            "Écart relatif (%) = |mesure - simulation| ÷ simulation × 100.",
            "Si l'écart dépasse la tolérance : chercher la cause (modèle, mesure, prototype) et recommencer.",
          ],
          example: {
            statement: "La simulation prévoit qu'un robot roule à 0,50 m/s. Sur le prototype, on mesure qu'il parcourt 4,6 m en 10 s. La tolérance acceptée est de 10 %. Le modèle est-il validé ?",
            solution: [
              "Vitesse mesurée : v = d ÷ t = 4,6 ÷ 10 = 0,46 m/s.",
              "Écart absolu : |0,46 - 0,50| = 0,04 m/s.",
              "Écart relatif : 0,04 ÷ 0,50 × 100 = 8 %.",
              "Comparaison : 8 % < 10 %, l'écart est inférieur à la tolérance.",
              "Réponse : l'écart relatif est de 8 %, le modèle est validé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La simulation thermique d'une maquette de maison prévoit une température intérieure de 21,0 °C. On mesure 22,4 °C. Calculer l'écart relatif, arrondi au dixième de pourcent.",
              hint: "Calculez d'abord la différence entre les deux valeurs, puis divisez par la valeur simulée.",
              solution: [
                "Écart absolu : |22,4 - 21,0| = 1,4 °C.",
                "Écart relatif : 1,4 ÷ 21,0 × 100 ≈ 6,67 %.",
                "Résultat : l'écart relatif est d'environ 6,7 %.",
              ],
            },
            {
              level: 2,
              statement: "La simulation prévoit une autonomie de 5,0 h pour la batterie d'un robot. Trois essais sur le prototype donnent 4,4 h, 4,6 h et 4,5 h. Le cahier des charges tolère un écart de 8 %. a) Calculer la moyenne des mesures. b) Calculer l'écart relatif. c) Le modèle est-il validé ? Proposer deux causes possibles de l'écart.",
              hint: "La moyenne est la somme des trois mesures divisée par 3.",
              solution: [
                "a) Moyenne = (4,4 + 4,6 + 4,5) ÷ 3 = 13,5 ÷ 3 = 4,5 h.",
                "b) Écart relatif = |4,5 - 5,0| ÷ 5,0 × 100 = 0,5 ÷ 5,0 × 100 = 10 %.",
                "c) 10 % > 8 % : le modèle n'est pas validé.",
                "Causes possibles : le modèle néglige les frottements des roues ou la consommation de la carte électronique ; la batterie réelle a une capacité un peu inférieure à celle annoncée (on accepte aussi : batterie pas complètement chargée au départ).",
                "Résultat : moyenne de 4,5 h, écart de 10 %, modèle non validé.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Une étagère en bois de 15 mm d'épaisseur est simulée avec une charge de 10 kg : le logiciel prévoit une flèche (déformation au centre) de 2,0 mm. Sur le prototype chargé de 10 kg, on mesure 2,6 mm. La tolérance est de 15 %. a) Calculer l'écart relatif. b) Conclure sur la validité du modèle. c) On découvre que le bois réel est moins rigide que celui choisi dans le logiciel. Quelle partie de la démarche faut-il corriger ? d) Avec le bon matériau et une épaisseur portée à 18 mm, la simulation prévoit 2,0 mm et la mesure donne 2,2 mm. La nouvelle étagère est-elle validée ?",
              hint: "Recommencez le même calcul d'écart pour la question d, puis comparez à la même tolérance.",
              solution: [
                "a) Écart relatif = |2,6 - 2,0| ÷ 2,0 × 100 = 0,6 ÷ 2,0 × 100 = 30 %.",
                "b) 30 % > 15 % : le modèle n'est pas validé, la simulation sous-estime la déformation.",
                "c) Le paramètre « matériau » du modèle est faux : il faut corriger le modèle en choisissant dans le logiciel un bois de rigidité conforme au bois réel, puis relancer la simulation.",
                "d) Écart relatif = |2,2 - 2,0| ÷ 2,0 × 100 = 0,2 ÷ 2,0 × 100 = 10 % ; 10 % < 15 %.",
                "Résultat : écart initial de 30 % (non validé) ; après correction, écart de 10 %, l'étagère et son modèle sont validés.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche de validation d'une simulation.",
            items: [
              "Construire le modèle numérique de l'objet",
              "Fixer les paramètres et les hypothèses",
              "Lancer la simulation et relever le résultat",
              "Mesurer le même comportement sur le prototype",
              "Calculer l'écart relatif",
              "Conclure, puis corriger le modèle ou le prototype si besoin",
            ],
          },
          quiz: [
            {
              q: "Quel est le principal intérêt d'une simulation ?",
              options: ["Prévoir le comportement avant de fabriquer", "Remplacer définitivement toutes les mesures", "Rendre l'objet plus joli", "Supprimer le cahier des charges"],
              answer: 0,
              why: "La simulation permet de tester des solutions virtuellement, ce qui fait gagner du temps et de la matière ; elle ne remplace pas la mesure.",
            },
            {
              q: "Simulé : 40 °C ; mesuré : 42 °C. L'écart relatif est :",
              options: ["2 %", "5 %", "4,8 %", "20 %"],
              answer: 1,
              why: "|42 - 40| ÷ 40 × 100 = 2 ÷ 40 × 100 = 5 %.",
            },
            {
              q: "« On néglige les frottements de l'air » est :",
              options: ["une mesure", "un résultat", "un paramètre de coût", "une hypothèse simplificatrice"],
              answer: 3,
              why: "C'est une simplification du réel adoptée pour rendre le calcul possible.",
            },
            {
              q: "L'écart relatif est de 12 % et la tolérance de 10 %. Que faut-il faire ?",
              options: ["Valider le modèle", "Supprimer la mesure gênante", "Chercher la cause de l'écart et corriger", "Augmenter la tolérance sans raison"],
              answer: 2,
              why: "L'écart dépasse la tolérance : il faut identifier la cause (modèle, mesure, prototype) puis recommencer.",
            },
            {
              q: "Pour une mesure fiable sur le prototype, il vaut mieux :",
              options: ["faire un seul essai rapide", "faire plusieurs essais et calculer la moyenne", "changer de conditions à chaque essai", "arrondir à l'unité"],
              answer: 1,
              why: "Plusieurs essais dans les mêmes conditions limitent l'effet des erreurs de mesure.",
            },
          ],
          trap: "Diviser l'écart par la mauvaise valeur ou oublier de multiplier par 100 : l'écart relatif se calcule par rapport à la valeur de référence (ici la valeur simulée) et s'exprime en pourcentage.",
          method: "Rédigez toujours la conclusion en trois temps : la valeur de l'écart, la comparaison avec la tolérance (« 8 % < 10 % »), puis la décision (« le modèle est validé »).",
        },
      ],
    },
    /* ==================================================================== */
    /* INFORMATIQUE ET PROGRAMMATION                                          */
    /* ==================================================================== */
    {
      id: 'informatique-programmation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'algorithme-programme',
          title: "De l'algorithme au programme",
          minutes: 30,
          objectives: [
            "Définir un algorithme et le distinguer d'un programme.",
            "Utiliser les structures de base : séquence, boucle, condition et événement.",
            "Utiliser une variable et suivre l'évolution de sa valeur pas à pas.",
            "Représenter un algorithme par un algorigramme.",
          ],
          course: [
            {
              heading: "Algorithme et programme",
              paragraphs: [
                "Un algorithme est une suite finie et ordonnée d'instructions qui permet de résoudre un problème ou d'accomplir une tâche. Une recette de cuisine en est un bon exemple : des ingrédients au départ (les données), des étapes à suivre dans l'ordre, et un plat à la fin (le résultat). Un algorithme peut s'écrire en langage courant.",
                "Un programme est la traduction d'un algorithme dans un langage de programmation que la machine sait exécuter : langage par blocs (Scratch, MakeCode), ou langage textuel (Python). L'ordinateur ou la carte programmable exécute les instructions une par une, exactement comme elles sont écrites, sans rien deviner : une erreur d'ordre ou d'oubli produit un mauvais résultat.",
              ],
              box: { label: "Définition", text: "Algorithme : suite finie et ordonnée d'instructions pour résoudre un problème. Programme : traduction d'un algorithme dans un langage compris par la machine." },
            },
            {
              heading: "Les structures de base",
              paragraphs: [
                "La séquence : les instructions s'exécutent l'une après l'autre, dans l'ordre. La boucle répète des instructions : un nombre de fois connu (« répéter 10 fois »), jusqu'à ce qu'une condition soit vraie (« répéter jusqu'à ce que la distance soit inférieure à 10 cm »), ou sans fin (« répéter indéfiniment », bloc « toujours »).",
                "La condition (ou instruction conditionnelle) permet de choisir : « si la condition est vraie alors faire ceci, sinon faire cela ». La condition utilise des opérateurs de comparaison (<, >, =, ≤, ≥) et peut combiner plusieurs tests avec « et », « ou », « non ».",
                "L'événement déclenche un groupe d'instructions : « quand le drapeau vert est cliqué », « quand le bouton A est pressé », « au démarrage ». En technologie, la plupart des programmes commencent par un événement.",
              ],
              box: { label: "À retenir", text: "Séquence : dans l'ordre. Boucle : répéter (n fois, jusqu'à, toujours). Condition : si... alors... sinon. Événement : quand... (déclenche le programme)." },
            },
            {
              heading: "Les variables",
              paragraphs: [
                "Une variable est un espace de mémoire qui porte un nom et contient une valeur qui peut changer pendant l'exécution du programme : un score, un compteur, une température mesurée. Donner une valeur à une variable s'appelle une affectation ; on l'écrit par exemple « mettre score à 0 » ou score ← 0.",
                "Pour comprendre un programme, on le suit pas à pas en notant la valeur de chaque variable après chaque instruction, dans un tableau de suivi. Exemple : compteur ← 0, puis répéter 4 fois « compteur ← compteur + 3 ». Après chaque tour, compteur vaut 3, 6, 9, puis 12. Le programme affiche 12.",
              ],
              box: { label: "Règle", text: "Dans « x ← x + 1 », on calcule d'abord la partie de droite avec l'ancienne valeur de x, puis on range le résultat dans x. Si x valait 5, il vaut ensuite 6." },
            },
            {
              heading: "L'algorigramme et la mise au point",
              paragraphs: [
                "Un algorigramme (ou organigramme) représente un algorithme sous forme de schéma avec des symboles normalisés : un ovale (ou rectangle arrondi) pour le début et la fin, un rectangle pour une instruction, un losange pour un test avec deux sorties (oui et non), un parallélogramme pour une entrée ou une sortie de données. Des flèches indiquent l'ordre.",
                "Un programme se met au point en le testant : on vérifie qu'il donne le bon résultat dans plusieurs cas, y compris les cas limites (une valeur exactement égale au seuil, par exemple). Corriger une erreur s'appelle déboguer.",
              ],
            },
          ],
          keyPoints: [
            "Algorithme : suite finie et ordonnée d'instructions ; programme : sa traduction dans un langage.",
            "Boucle : répéter n fois, répéter jusqu'à, répéter indéfiniment.",
            "Condition : si... alors... sinon, avec des comparaisons (<, >, =).",
            "Variable : nom + valeur qui change ; x ← x + 1 utilise l'ancienne valeur de x.",
            "Algorigramme : ovale (début, fin), rectangle (instruction), losange (test).",
            "Tester les cas limites : une valeur égale au seuil.",
          ],
          example: {
            statement: "Suivre pas à pas le programme suivant et donner la valeur affichée : « compteur ← 0 ; répéter 4 fois : compteur ← compteur + 3 ; fin de la boucle ; afficher compteur ».",
            solution: [
              "Avant la boucle : compteur = 0.",
              "Tour 1 : compteur ← 0 + 3 = 3.",
              "Tour 2 : compteur ← 3 + 3 = 6.",
              "Tour 3 : compteur ← 6 + 3 = 9.",
              "Tour 4 : compteur ← 9 + 3 = 12. La boucle a été répétée 4 fois, elle s'arrête.",
              "Réponse : le programme affiche 12.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner les valeurs de a et b affichées à la fin de ce programme : « a ← 5 ; b ← 2 ; a ← a + b ; b ← a × 2 ; afficher a et b ».",
              hint: "Exécutez les instructions dans l'ordre, en utilisant à chaque ligne la valeur la plus récente des variables.",
              solution: [
                "a ← 5 : a = 5.",
                "b ← 2 : b = 2.",
                "a ← a + b = 5 + 2 = 7 : a = 7.",
                "b ← a × 2 = 7 × 2 = 14 (on utilise la nouvelle valeur de a) : b = 14.",
                "Résultat : le programme affiche a = 7 et b = 14.",
              ],
            },
            {
              level: 2,
              statement: "Un ventilateur est commandé par le programme : « toujours : T ← température mesurée ; si T > 25 alors allumer le ventilateur, sinon éteindre le ventilateur ». a) Indiquer l'état du ventilateur pour T = 22 °C, T = 25 °C et T = 27 °C. b) On souhaite que le ventilateur s'allume aussi à exactement 25 °C. Quelle modification faut-il apporter ? c) Pourquoi utilise-t-on la boucle « toujours » ?",
              hint: "Le signe > est strict : 25 n'est pas strictement supérieur à 25.",
              solution: [
                "a) T = 22 : 22 > 25 est faux, le ventilateur est éteint.",
                "T = 25 : 25 > 25 est faux, le ventilateur est éteint.",
                "T = 27 : 27 > 25 est vrai, le ventilateur est allumé.",
                "b) Il faut remplacer la condition T > 25 par T ≥ 25 (ou par « T > 24 » si les mesures sont des nombres entiers).",
                "c) La boucle « toujours » permet de mesurer la température en permanence et de réagir dès qu'elle change.",
                "Résultat : éteint, éteint, allumé ; condition T ≥ 25 ; la boucle surveille la température sans arrêt.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. On considère le programme : « x ← 1 ; répéter 4 fois : x ← x × 2 ; fin de la boucle ; afficher x ». a) Quelle valeur est affichée ? b) Quelle seule modification permet d'afficher 81 ? c) On remplace la boucle par « répéter jusqu'à x > 100 : x ← x × 2 », en gardant x ← 1 au départ. Combien de tours la boucle effectue-t-elle et quelle valeur est affichée ? d) Décrire l'algorigramme de la version c en citant les symboles utilisés.",
              hint: "Pour la question c, dressez un tableau avec le numéro du tour et la valeur de x, et arrêtez-vous dès que x dépasse 100.",
              solution: [
                "a) x prend successivement les valeurs 2, 4, 8, 16 : le programme affiche 16.",
                "b) 81 = 3 × 3 × 3 × 3 : il suffit de remplacer x ← x × 2 par x ← x × 3 (avec x ← 1 et 4 répétitions).",
                "c) Tours successifs : 2, 4, 8, 16, 32, 64, 128. Après le 7e tour, x = 128 > 100, la boucle s'arrête : 7 tours et le programme affiche 128.",
                "d) Un ovale « Début » ; un rectangle « x ← 1 » ; un rectangle « x ← x × 2 » ; un losange « x > 100 ? » : si non, une flèche revient au rectangle « x ← x × 2 » ; si oui, un parallélogramme « afficher x » ; un ovale « Fin ».",
                "Résultat : 16 ; remplacer × 2 par × 3 ; 7 tours et affichage de 128.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : algorithmes et programmes.",
            statements: [
              { text: "Un algorithme peut s'écrire en langage courant, sans ordinateur.", true: true, why: "Une recette ou un itinéraire sont des algorithmes ; le programme, lui, est écrit dans un langage pour la machine." },
              { text: "Une boucle « répéter 5 fois » exécute ses instructions 4 fois.", true: false, why: "Elle les exécute exactement 5 fois." },
              { text: "Si x vaut 3, après x ← x + 2, x vaut 5.", true: true, why: "On calcule 3 + 2 avec l'ancienne valeur, puis on range 5 dans x." },
              { text: "Avec la condition « si T > 20 », le bloc « alors » s'exécute pour T = 20.", true: false, why: "20 > 20 est faux : c'est le bloc « sinon » qui s'exécute." },
              { text: "Dans un algorigramme, un test est représenté par un losange.", true: true, why: "Le losange a deux sorties : oui et non." },
              { text: "Une carte programmable devine ce que le programmeur voulait faire.", true: false, why: "Elle exécute les instructions exactement comme elles sont écrites, erreurs comprises." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un algorithme ?",
              options: ["Un langage de programmation", "Une suite finie et ordonnée d'instructions", "Un composant électronique", "Un fichier de données"],
              answer: 1,
              why: "Un algorithme décrit les étapes à suivre ; il peut ensuite être traduit en programme dans un langage.",
            },
            {
              q: "Quelle structure permet de répéter des instructions ?",
              options: ["La condition", "L'affectation", "La boucle", "L'événement"],
              answer: 2,
              why: "La boucle répète un groupe d'instructions (n fois, jusqu'à une condition, ou indéfiniment).",
            },
            {
              q: "« x ← 3 ; x ← x + 4 ; x ← x × 2 ». Que vaut x à la fin ?",
              options: ["14", "11", "10", "7"],
              answer: 0,
              why: "x vaut 3, puis 3 + 4 = 7, puis 7 × 2 = 14.",
            },
            {
              q: "Dans un algorigramme, quel symbole représente un test ?",
              options: ["Le rectangle", "L'ovale", "Le parallélogramme", "Le losange"],
              answer: 3,
              why: "Le losange contient la question posée et possède deux sorties, oui et non.",
            },
            {
              q: "« Si T > 30 alors allumer, sinon éteindre ». Pour T = 30, le système :",
              options: ["allume", "s'arrête de fonctionner", "éteint", "affiche une erreur"],
              answer: 2,
              why: "30 > 30 est faux, donc le bloc « sinon » s'exécute : le système éteint.",
            },
          ],
          trap: "Utiliser l'ancienne valeur d'une variable après qu'elle a été modifiée : dans « a ← a + b ; b ← a × 2 », le calcul de b utilise la nouvelle valeur de a.",
          method: "Pour lire un programme, faites un tableau de suivi avec une colonne par variable et une ligne par instruction exécutée (ou par tour de boucle) : vous ne pourrez plus vous tromper de valeur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'programmer-systeme',
          title: "Programmer un système avec capteurs et actionneurs",
          minutes: 30,
          objectives: [
            "Organiser le programme d'un système embarqué : initialisation puis boucle principale.",
            "Lire une entrée logique ou analogique et commander une sortie.",
            "Utiliser un seuil, ou deux seuils, pour décider d'une action.",
            "Tester et mettre au point un programme sur le système réel ou sur un simulateur.",
          ],
          course: [
            {
              heading: "La structure d'un programme de système",
              paragraphs: [
                "Un système embarqué (robot, serre automatique, barrière de parking) est piloté par une carte programmable. Son programme a presque toujours deux parties. L'initialisation, exécutée une seule fois au démarrage, donne une valeur de départ aux variables et place les actionneurs dans un état sûr (moteur arrêté, barrière fermée).",
                "La boucle principale (« toujours » ou « répéter indéfiniment ») s'exécute ensuite sans fin : lire les capteurs, comparer les valeurs à des seuils, commander les actionneurs, informer l'utilisateur, puis recommencer. Elle tourne très vite, de nombreuses fois par seconde, ce qui donne l'impression que le système réagit instantanément.",
              ],
              box: { label: "À retenir", text: "Au démarrage : initialiser (variables, actionneurs en position sûre). Toujours : lire les capteurs → décider (conditions) → commander les actionneurs → afficher." },
            },
            {
              heading: "Entrées et sorties de la carte",
              paragraphs: [
                "La carte communique avec les capteurs et les actionneurs par ses broches (ou ports). Une entrée logique lit deux états, 0 ou 1 (bouton relâché ou appuyé). Une entrée analogique lit une tension et la convertit en nombre : sur de nombreuses cartes (Arduino Uno, micro:bit), la valeur obtenue va de 0 à 1023. Un capteur de luminosité peut ainsi renvoyer 150 dans le noir et 900 en plein jour.",
                "Une sortie logique allume ou éteint un composant (une LED, un relais). Certaines sorties permettent de faire varier la puissance, par exemple la luminosité d'une LED ou la vitesse d'un moteur. Un servomoteur reçoit un angle à atteindre, par exemple 90°.",
              ],
              box: { label: "Repère", text: "Entrée logique : 0 ou 1. Entrée analogique : souvent un nombre de 0 à 1023. Sortie : allumer, éteindre, régler une vitesse ou un angle. Un moteur se commande à travers un préactionneur." },
            },
            {
              heading: "Décider avec des seuils",
              paragraphs: [
                "Pour décider, le programme compare la valeur lue à un seuil : « si luminosité < 300 alors allumer la LED, sinon l'éteindre ». Le choix du seuil se fait par l'essai : on relève les valeurs du capteur dans différentes situations, puis on choisit une valeur intermédiaire.",
                "Avec un seul seuil, un système peut s'allumer et s'éteindre sans arrêt quand la mesure oscille autour de la valeur choisie. On utilise alors deux seuils : un chauffage s'allume si la température descend sous 19 °C et ne s'éteint que lorsqu'elle dépasse 21 °C ; entre les deux, il garde son état précédent. Ce fonctionnement est celui d'un thermostat.",
              ],
            },
            {
              heading: "Tester et mettre au point",
              paragraphs: [
                "On teste le programme par étapes : d'abord chaque capteur seul, en affichant sa valeur à l'écran, puis chaque actionneur seul, puis l'ensemble. Un simulateur permet de vérifier la logique avant de téléverser le programme sur la carte.",
                "Pour chaque test, on prévoit le résultat attendu, on observe le résultat obtenu et on compare. On n'oublie pas les cas limites (valeur égale au seuil) et les situations imprévues (deux boutons appuyés en même temps).",
              ],
              box: { label: "Méthode", text: "Tester un programme : 1. afficher les valeurs des capteurs ; 2. tester chaque actionneur seul ; 3. tester les conditions, y compris les cas limites ; 4. comparer le résultat obtenu au résultat attendu." },
            },
          ],
          keyPoints: [
            "Programme d'un système : initialisation (une fois), puis boucle « toujours ».",
            "Boucle principale : lire les capteurs, décider, commander, afficher.",
            "Entrée logique : 0 ou 1 ; entrée analogique : souvent de 0 à 1023.",
            "Un seuil se choisit à partir de mesures réelles du capteur.",
            "Deux seuils (comme un thermostat) évitent les allumages et extinctions incessants.",
          ],
          example: {
            statement: "Une veilleuse doit s'allumer quand il fait sombre. Le capteur de luminosité renvoie environ 120 dans le noir et 850 en plein jour. Écrire le programme en langage courant et indiquer l'état de la LED pour une mesure de 250 puis de 600.",
            solution: [
              "On choisit un seuil intermédiaire entre 120 et 850, par exemple 300.",
              "Au démarrage : éteindre la LED.",
              "Toujours : lum ← valeur du capteur de luminosité ; si lum < 300 alors allumer la LED, sinon éteindre la LED.",
              "Pour lum = 250 : 250 < 300 est vrai, la LED est allumée.",
              "Pour lum = 600 : 600 < 300 est faux, la LED est éteinte.",
              "Réponse : programme avec un seuil de 300 ; LED allumée à 250, éteinte à 600.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une barrière de parking doit s'ouvrir quand on appuie sur le bouton A, rester ouverte 5 secondes, puis se refermer. Le servomoteur est à 0° barrière fermée et à 90° barrière ouverte. Compléter le programme : « au démarrage : régler le servomoteur à ... ; quand le bouton A est pressé : régler le servomoteur à ... ; attendre ... secondes ; régler le servomoteur à ... ».",
              hint: "Au démarrage, la barrière doit être dans une position sûre.",
              solution: [
                "Au démarrage, la barrière doit être fermée : régler le servomoteur à 0°.",
                "Quand le bouton A est pressé : régler le servomoteur à 90° (ouverture).",
                "Attendre 5 secondes.",
                "Régler le servomoteur à 0° (fermeture).",
                "Résultat : 0°, 90°, 5 s, 0°.",
              ],
            },
            {
              level: 2,
              statement: "Un chauffage est piloté par : « toujours : si T < 19 alors allumer le chauffage ; si T > 21 alors éteindre le chauffage ». Au départ, le chauffage est éteint. La température mesurée prend successivement les valeurs 18,5 °C ; 20 °C ; 21,5 °C ; 20 °C ; 18,8 °C. Indiquer l'état du chauffage après chaque mesure, puis expliquer l'intérêt d'avoir deux seuils.",
              hint: "Entre 19 °C et 21 °C, aucune des deux conditions n'est vraie : le chauffage garde l'état qu'il avait.",
              solution: [
                "18,5 °C : 18,5 < 19, le chauffage s'allume.",
                "20 °C : aucune condition n'est vraie, le chauffage reste allumé.",
                "21,5 °C : 21,5 > 21, le chauffage s'éteint.",
                "20 °C : aucune condition n'est vraie, le chauffage reste éteint.",
                "18,8 °C : 18,8 < 19, le chauffage se rallume.",
                "Intérêt : avec un seul seuil, le chauffage s'allumerait et s'éteindrait sans arrêt autour de cette valeur ; deux seuils espacés évitent ces commutations incessantes qui usent le relais.",
                "Résultat : allumé, allumé, éteint, éteint, allumé.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un parking compte ses places libres. Programme : « au démarrage : places ← 3 ; toujours : si le capteur d'entrée détecte une voiture et places > 0 alors ouvrir la barrière d'entrée et places ← places - 1 ; si le capteur de sortie détecte une voiture alors places ← places + 1 ; si places = 0 alors allumer le feu rouge, sinon allumer le feu vert ». Les événements suivants se produisent dans l'ordre : entrée, entrée, sortie, entrée, entrée, entrée. a) Dresser le tableau de suivi de la variable places. b) Quelle est la couleur du feu à la fin ? c) Que se passe-t-il pour la dernière voiture ? d) Quel capteur proposer pour détecter les voitures ?",
              hint: "Avant chaque entrée, vérifiez la condition places > 0 : si elle est fausse, la barrière ne s'ouvre pas et places ne change pas.",
              solution: [
                "a) Départ : places = 3. Entrée : places = 2. Entrée : places = 1. Sortie : places = 2. Entrée : places = 1. Entrée : places = 0.",
                "Dernière entrée : places > 0 est faux (places = 0), la barrière ne s'ouvre pas et places reste à 0.",
                "b) places = 0, donc le feu rouge est allumé.",
                "c) La dernière voiture est refusée : la barrière reste fermée car le parking est complet.",
                "d) Un capteur de présence placé dans la voie, par exemple un détecteur infrarouge ou un capteur à ultrasons qui repère le passage d'un véhicule (on accepte aussi une boucle magnétique au sol).",
                "Résultat : places vaut 3, 2, 1, 2, 1, 0, 0 ; feu rouge ; la dernière voiture ne peut pas entrer.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le déroulement du programme d'un système automatisé.",
            items: [
              "Au démarrage : initialiser les variables",
              "Placer les actionneurs dans un état sûr",
              "Lire les valeurs des capteurs",
              "Comparer les valeurs aux seuils",
              "Commander les actionneurs selon la décision",
              "Afficher l'état puis recommencer la boucle",
            ],
          },
          quiz: [
            {
              q: "Quelles instructions ne s'exécutent qu'une seule fois ?",
              options: ["Celles de la boucle « toujours »", "Celles d'une condition « sinon »", "Celles placées « au démarrage »", "Celles d'une boucle « répéter 10 fois »"],
              answer: 2,
              why: "Le bloc « au démarrage » sert à l'initialisation ; il s'exécute une fois, à la mise sous tension.",
            },
            {
              q: "Sur une carte Arduino Uno, une entrée analogique renvoie une valeur comprise entre :",
              options: ["0 et 1", "0 et 1023", "0 et 100", "-5 et 5"],
              answer: 1,
              why: "La tension lue est convertie en un nombre de 0 à 1023.",
            },
            {
              q: "Lequel de ces composants est branché sur une sortie de la carte ?",
              options: ["Un bouton poussoir", "Une photorésistance", "Un capteur de température", "Une LED"],
              answer: 3,
              why: "La LED est commandée par la carte : c'est une sortie. Les trois autres sont des capteurs, donc des entrées.",
            },
            {
              q: "Pourquoi place-t-on la lecture des capteurs dans une boucle « toujours » ?",
              options: ["Pour surveiller en permanence", "Pour économiser la batterie", "Pour éviter d'utiliser des variables", "Pour que le programme s'arrête"],
              answer: 0,
              why: "La boucle relit les capteurs sans cesse, ce qui permet de réagir dès qu'une valeur change.",
            },
            {
              q: "Thermostat : allumer si T < 19, éteindre si T > 21. Le chauffage est allumé et T = 20 °C. Il :",
              options: ["s'éteint", "clignote", "affiche une erreur", "reste allumé"],
              answer: 3,
              why: "Aucune condition n'est vraie entre 19 et 21 °C : le chauffage garde son état précédent.",
            },
          ],
          trap: "Oublier l'initialisation : sans « au démarrage », une variable comme un compteur ou l'état d'un moteur peut partir d'une valeur imprévue et fausser tout le fonctionnement.",
          method: "Avant d'écrire le programme, relevez les valeurs réelles du capteur dans les deux situations à distinguer (sombre et clair, sec et humide), puis choisissez un seuil nettement entre les deux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reseaux-donnees',
          title: "Réseaux informatiques et transmission des données",
          minutes: 30,
          objectives: [
            "Décrire la composition d'un réseau informatique et le rôle de ses équipements (commutateur, routeur, serveur).",
            "Identifier une adresse IP valide et expliquer le rôle des adresses IP, MAC et du DNS.",
            "Expliquer la transmission des données par paquets et distinguer Internet du Web.",
            "Calculer une durée de transfert à partir d'une taille de fichier et d'un débit.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un réseau ?",
              paragraphs: [
                "Un réseau informatique est un ensemble d'équipements (ordinateurs, tablettes, imprimantes, serveurs, objets connectés) reliés entre eux pour échanger des données. Un réseau local relie les appareils d'une maison, d'un collège ou d'une entreprise. Internet est un réseau mondial qui relie entre eux des millions de réseaux : c'est un « réseau de réseaux ».",
                "Les appareils sont reliés par des câbles (câble Ethernet en cuivre, fibre optique qui transporte la lumière) ou sans fil, par ondes radio (Wi-Fi, réseau mobile 4G ou 5G, Bluetooth pour de courtes distances).",
                "Le commutateur (switch) relie les appareils d'un même réseau local et transmet chaque message uniquement à son destinataire. Le routeur relie des réseaux différents et choisit le chemin des données : la box internet de la maison contient un routeur qui relie le réseau local à Internet. Un serveur est un ordinateur qui fournit un service (pages web, messagerie, stockage) à des clients qui le lui demandent.",
              ],
              box: { label: "Définition", text: "Commutateur : relie les appareils d'un même réseau local. Routeur : relie des réseaux différents et oriente les données. Serveur : fournit un service ; client : demande ce service." },
            },
            {
              heading: "Les adresses : IP, MAC et noms de domaine",
              paragraphs: [
                "Pour que les données arrivent au bon endroit, chaque appareil connecté possède une adresse IP. En version 4 (IPv4), elle s'écrit avec quatre nombres compris entre 0 et 255, séparés par des points, par exemple 192.168.1.12. Dans un réseau local courant, les appareils du même réseau ont les trois premiers nombres identiques (192.168.1.x) et se distinguent par le dernier.",
                "L'adresse MAC est l'identifiant de la carte réseau, fixé par le fabricant ; elle s'écrit avec six nombres en hexadécimal, par exemple 3C:52:82:4A:10:F7. Le DNS (système de noms de domaine) fonctionne comme un annuaire : il traduit un nom facile à retenir, comme www.education.gouv.fr, en l'adresse IP du serveur correspondant.",
              ],
              box: { label: "Règle", text: "Adresse IPv4 : 4 nombres de 0 à 255 séparés par des points. 192.168.1.12 est valide ; 192.168.1.300 ne l'est pas (300 > 255) ; 192.168.1 ne l'est pas (3 nombres seulement)." },
            },
            {
              heading: "La transmission par paquets",
              paragraphs: [
                "Toutes les données (textes, images, sons, vidéos) sont codées en binaire, avec des 0 et des 1 appelés bits. Un octet est un groupe de 8 bits. Pour être envoyé, un fichier est découpé en petits morceaux appelés paquets. Chaque paquet porte l'adresse IP de l'expéditeur, celle du destinataire et un numéro d'ordre.",
                "Les paquets voyagent indépendamment, de routeur en routeur, et peuvent prendre des chemins différents. À l'arrivée, ils sont remis dans l'ordre ; un paquet perdu est redemandé. Ces règles communes s'appellent des protocoles : TCP/IP pour l'acheminement, HTTP ou HTTPS (version chiffrée) pour les pages web.",
                "Internet et le Web ne sont pas la même chose. Internet est le réseau physique et ses protocoles ; le Web est un service qui fonctionne sur Internet et permet de consulter des pages reliées par des liens. Il a été inventé par Tim Berners-Lee au CERN en 1989. La messagerie électronique est un autre service d'Internet.",
              ],
            },
            {
              heading: "Le débit et la durée de transfert",
              paragraphs: [
                "Le débit est la quantité de données transmise par seconde. Il s'exprime en bits par seconde (bit/s) et ses multiples : kbit/s, Mbit/s (mégabits par seconde), Gbit/s. La taille d'un fichier, elle, s'exprime en octets : ko, Mo (mégaoctets), Go.",
                "Pour calculer une durée de transfert, il faut exprimer la taille et le débit avec la même unité : on multiplie la taille en octets par 8 pour l'obtenir en bits. Exemple : un fichier de 100 Mo transmis à 50 Mbit/s. 100 Mo = 800 Mbit, donc t = 800 ÷ 50 = 16 s.",
              ],
              box: { label: "Formule", text: "1 octet = 8 bits. Durée de transfert : t = taille (en bits) ÷ débit (en bit/s). On prend ici 1 Mo = 1 000 ko et 1 Go = 1 000 Mo." },
            },
          ],
          keyPoints: [
            "Réseau : appareils reliés pour échanger des données ; Internet est un réseau de réseaux.",
            "Commutateur : réseau local ; routeur : relie des réseaux différents (la box internet).",
            "Adresse IPv4 : 4 nombres de 0 à 255 ; le DNS traduit un nom de domaine en adresse IP.",
            "Les données sont découpées en paquets qui portent les adresses de l'expéditeur et du destinataire.",
            "Le Web (1989, Tim Berners-Lee) est un service d'Internet, pas Internet lui-même.",
            "1 octet = 8 bits ; t = taille en bits ÷ débit en bit/s.",
          ],
          example: {
            statement: "Combien de temps faut-il pour télécharger une application de 100 Mo avec une connexion de 50 Mbit/s ?",
            solution: [
              "La taille est en octets et le débit en bits par seconde : il faut convertir.",
              "100 Mo = 100 × 8 = 800 Mbit.",
              "t = taille ÷ débit = 800 ÷ 50 = 16 s.",
              "Réponse : le téléchargement dure 16 secondes (en théorie, sans compter les ralentissements du réseau).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces adresses, lesquelles sont des adresses IPv4 valides ? Justifier : a) 192.168.1.12 ; b) 10.0.0.256 ; c) 172.16.4 ; d) 8.8.8.8.",
              hint: "Vérifiez deux choses : il y a exactement quatre nombres, et chacun est compris entre 0 et 255.",
              solution: [
                "a) 192.168.1.12 : quatre nombres, tous entre 0 et 255 : valide.",
                "b) 10.0.0.256 : 256 dépasse 255 : non valide.",
                "c) 172.16.4 : seulement trois nombres : non valide.",
                "d) 8.8.8.8 : quatre nombres entre 0 et 255 : valide.",
                "Résultat : les adresses a et d sont valides, b et c ne le sont pas.",
              ],
            },
            {
              level: 2,
              statement: "a) Combien de temps faut-il pour envoyer une photo de 4 Mo avec un débit de 8 Mbit/s ? b) Combien de temps faut-il pour télécharger une vidéo de 1,5 Go avec un débit de 100 Mbit/s ? Donner le résultat en secondes puis en minutes.",
              hint: "Convertissez les Go en Mo (× 1 000), puis les Mo en Mbit (× 8).",
              solution: [
                "a) 4 Mo = 4 × 8 = 32 Mbit ; t = 32 ÷ 8 = 4 s.",
                "b) 1,5 Go = 1 500 Mo = 1 500 × 8 = 12 000 Mbit.",
                "t = 12 000 ÷ 100 = 120 s.",
                "120 s = 2 min.",
                "Résultat : 4 s pour la photo ; 120 s, soit 2 min, pour la vidéo.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Dans une salle de technologie, trois ordinateurs (PC1 : 192.168.10.21 ; PC2 : 192.168.10.35 ; PC3 : 192.168.10.48) et une imprimante (192.168.10.250) sont reliés par câble à un équipement A. L'équipement A est relié à un équipement B, lui-même relié à Internet. a) Nommer les équipements A et B et préciser leur rôle. b) Un élève configure un nouvel ordinateur avec l'adresse 192.168.11.5. Pourra-t-il imprimer directement sur l'imprimante de la salle ? Justifier (on admet que les appareils d'un même réseau ont les trois premiers nombres identiques). c) Un élève tape l'adresse www.education.gouv.fr. Expliquer comment son ordinateur trouve le serveur. d) Expliquer pourquoi une page web arrive en entier même si ses paquets prennent des chemins différents.",
              hint: "Comparez les trois premiers nombres des adresses, puis rappelez le rôle du DNS et celui du numéro d'ordre des paquets.",
              solution: [
                "a) A est un commutateur (switch) : il relie les appareils du réseau local de la salle et transmet chaque message à son destinataire. B est un routeur : il relie le réseau local à Internet et oriente les données vers l'extérieur.",
                "b) Le réseau de la salle est 192.168.10.x ; la nouvelle adresse commence par 192.168.11 : l'ordinateur n'est pas dans le même réseau, il ne pourra pas communiquer directement avec l'imprimante. Il faut lui donner une adresse en 192.168.10.x non utilisée, par exemple 192.168.10.60.",
                "c) L'ordinateur interroge un serveur DNS, qui lui renvoie l'adresse IP du serveur web correspondant au nom www.education.gouv.fr ; l'ordinateur envoie alors sa demande à cette adresse IP, via le commutateur et le routeur.",
                "d) Chaque paquet porte un numéro d'ordre et l'adresse du destinataire : à l'arrivée, l'ordinateur remet les paquets dans l'ordre et redemande ceux qui manquent (rôle du protocole TCP).",
                "Résultat : A = commutateur, B = routeur ; l'adresse 192.168.11.5 ne convient pas ; le DNS traduit le nom en adresse IP ; les paquets numérotés sont réassemblés à l'arrivée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément du réseau à son rôle.",
            pairs: [
              { left: "Adresse IP", right: "Identifie un appareil connecté au réseau" },
              { left: "Adresse MAC", right: "Identifiant de la carte réseau, fixé par le fabricant" },
              { left: "Commutateur", right: "Relie les appareils d'un même réseau local" },
              { left: "Routeur", right: "Relie des réseaux différents et oriente les données" },
              { left: "DNS", right: "Traduit un nom de domaine en adresse IP" },
              { left: "Paquet", right: "Morceau de données numéroté et adressé" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces adresses IPv4 est valide ?",
              options: ["192.168.1", "300.20.1.4", "10.0.0.1.5", "172.16.0.254"],
              answer: 3,
              why: "Elle comporte quatre nombres, tous compris entre 0 et 255.",
            },
            {
              q: "Quel équipement relie le réseau local d'une maison à Internet ?",
              options: ["Le commutateur", "L'imprimante", "Le routeur", "La carte réseau"],
              answer: 2,
              why: "Le routeur relie des réseaux différents : ici le réseau local et Internet.",
            },
            {
              q: "Combien de bits contient un octet ?",
              options: ["8", "2", "10", "1 024"],
              answer: 0,
              why: "Un octet est un groupe de 8 bits.",
            },
            {
              q: "Quel est le rôle du DNS ?",
              options: ["Chiffrer les mots de passe", "Traduire un nom de domaine en adresse IP", "Augmenter le débit", "Relier les câbles"],
              answer: 1,
              why: "Le DNS est l'annuaire d'Internet : il associe un nom comme www.exemple.fr à l'adresse IP du serveur.",
            },
            {
              q: "Le Web est :",
              options: ["un service qui fonctionne sur Internet", "un autre nom d'Internet", "un câble sous-marin", "un type de routeur"],
              answer: 0,
              why: "Internet est le réseau ; le Web, inventé en 1989, est un service de pages reliées par des liens qui l'utilise.",
            },
          ],
          trap: "Oublier de convertir les octets en bits dans un calcul de durée : un fichier de 10 Mo à 10 Mbit/s met 8 secondes, et non 1 seconde, car 10 Mo = 80 Mbit.",
          method: "Dans tout calcul de transfert, écrivez les unités à chaque ligne (Mo, Mbit, Mbit/s, s) : si les unités ne se simplifient pas, une conversion manque.",
        },
      ],
    },
    /* ==================================================================== */
    /* CONCEVOIR ET RÉALISER UN PROJET                                        */
    /* ==================================================================== */
    {
      id: 'concevoir-realiser',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'demarche-projet',
          title: "La démarche de projet et le cahier des charges",
          minutes: 30,
          objectives: [
            "Décrire les étapes de la démarche de projet, du besoin à la validation.",
            "Rédiger un cahier des charges avec des fonctions, des critères et des niveaux.",
            "Organiser un projet en équipe à l'aide d'un planning.",
            "Choisir une solution de manière argumentée à l'aide d'une grille de choix.",
          ],
          course: [
            {
              heading: "Les étapes de la démarche de projet",
              paragraphs: [
                "Un projet technique part d'un besoin et aboutit à un objet ou à un système qui y répond. Pour ne rien oublier, on suit une démarche en plusieurs étapes : identifier le besoin et étudier les objets existants ; rédiger le cahier des charges ; rechercher des solutions ; choisir une solution ; la concevoir (croquis, modèle 3D, programme) ; réaliser un prototype ; le tester et le valider ; enfin présenter le projet.",
                "La démarche n'est pas toujours linéaire : si un test échoue, on revient à l'étape de conception ou de réalisation. À la fin des étapes importantes, l'équipe fait une revue de projet : elle présente l'avancement, vérifie que le cahier des charges est respecté et décide de la suite.",
              ],
              box: { label: "Repère", text: "Besoin → cahier des charges → recherche de solutions → choix d'une solution → conception → réalisation du prototype → tests et validation → présentation." },
            },
            {
              heading: "Le cahier des charges",
              paragraphs: [
                "Le cahier des charges est le document de référence du projet. Il décrit ce que l'objet doit faire (ses fonctions) et les exigences qu'il doit respecter (ses contraintes), sans imposer de solution technique : il dit « quoi », pas « comment ». C'est lui qui servira à valider le prototype à la fin.",
                "Chaque fonction ou contrainte est accompagnée d'un critère mesurable et d'un niveau. Exemple pour un distributeur automatique de croquettes : fonction « distribuer la nourriture à heures fixes », critère « nombre de repas par jour », niveau « au moins 2 » ; contrainte « être autonome en énergie », critère « durée de fonctionnement sur piles », niveau « au moins 1 mois » ; contrainte « être sûr pour l'animal », critère « pièces accessibles coupantes », niveau « aucune ».",
              ],
              box: { label: "Définition", text: "Cahier des charges : document qui exprime le besoin sous forme de fonctions et de contraintes, chacune précisée par un critère mesurable et un niveau à atteindre. Il ne décrit pas la solution." },
            },
            {
              heading: "Organiser le travail en équipe",
              paragraphs: [
                "Un projet se mène en équipe : chacun a un rôle (responsable de la conception, de la programmation, de la fabrication, de la communication) et l'équipe partage ses décisions dans un carnet de bord.",
                "Le planning permet de prévoir la durée de chaque tâche et de respecter la date de fin. On le représente souvent par un diagramme de Gantt : chaque tâche est une barre horizontale placée sur une échelle de temps. Certaines tâches se suivent (on ne peut pas tester avant d'avoir fabriqué), d'autres peuvent se faire en même temps (préparer la présentation pendant les derniers tests).",
              ],
            },
            {
              heading: "Choisir une solution de façon argumentée",
              paragraphs: [
                "Lors de la recherche, l'équipe imagine plusieurs solutions. Pour choisir, on utilise une grille de choix : on note chaque solution sur plusieurs critères du cahier des charges (par exemple de 1 à 5), on multiplie chaque note par un coefficient qui traduit l'importance du critère, puis on additionne. La solution qui obtient le meilleur total est retenue.",
                "Cette méthode rend le choix objectif et facile à expliquer lors de la revue de projet. Elle montre aussi qu'un changement de priorités (des coefficients différents) peut changer la solution retenue.",
              ],
              box: { label: "Méthode", text: "Grille de choix : total d'une solution = somme des (note × coefficient) pour chaque critère. On retient la solution qui a le plus grand total." },
            },
          ],
          keyPoints: [
            "Démarche : besoin, cahier des charges, solutions, choix, conception, prototype, tests, présentation.",
            "Le cahier des charges dit « quoi », pas « comment » : fonctions, contraintes, critères, niveaux.",
            "Le prototype est validé en le comparant au cahier des charges.",
            "Diagramme de Gantt : une barre par tâche sur une échelle de temps.",
            "Grille de choix : somme des notes × coefficients ; on retient le meilleur total.",
          ],
          example: {
            statement: "Une équipe dispose de 10 semaines. Les tâches, réalisées l'une après l'autre, durent : cahier des charges 1 semaine, recherche de solutions 2 semaines, conception 2 semaines, réalisation 3 semaines, tests 1 semaine, préparation de la présentation 1 semaine. a) Le planning tient-il en 10 semaines ? b) La réalisation prend finalement 4 semaines. Proposer une solution pour finir à temps.",
            solution: [
              "a) Durée totale : 1 + 2 + 2 + 3 + 1 + 1 = 10 semaines : le planning tient tout juste.",
              "b) Avec une réalisation de 4 semaines, la durée devient 11 semaines : il manque 1 semaine.",
              "La préparation de la présentation ne dépend pas des résultats finaux pour sa plus grande partie : on peut la mener en même temps que les tests, par un autre membre de l'équipe.",
              "Les tests et la présentation se déroulent alors en parallèle pendant la même semaine : 1 + 2 + 2 + 4 + 1 = 10 semaines.",
              "Réponse : le planning initial dure 10 semaines ; avec le retard, on fait la présentation en parallèle des tests pour rester à 10 semaines.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquer à quelle étape de la démarche de projet correspond chaque phrase du carnet de bord : a) « Nous avons dessiné trois croquis de solutions différentes. » b) « Nous avons écrit que la masse du robot doit être au plus 500 g. » c) « Nous avons imprimé le châssis en 3D. » d) « Nous avons vérifié que le robot monte une pente de 10°. »",
              hint: "Repérez le verbe principal : dessiner des idées, fixer une exigence, fabriquer, vérifier.",
              solution: [
                "a) Plusieurs croquis pour comparer des idées : recherche de solutions.",
                "b) Une exigence avec un critère (masse) et un niveau (≤ 500 g) : rédaction du cahier des charges.",
                "c) Fabriquer une pièce : réalisation du prototype.",
                "d) Vérifier une performance : tests et validation.",
                "Résultat : a = recherche de solutions ; b = cahier des charges ; c = réalisation ; d = tests.",
              ],
            },
            {
              level: 2,
              statement: "Une classe veut concevoir une station météo pour la cour du collège : elle doit mesurer la température et l'humidité, afficher les mesures, fonctionner dehors et être alimentée par un petit panneau solaire. Rédiger trois lignes du cahier des charges, chacune avec une fonction ou une contrainte, un critère et un niveau.",
              hint: "Chaque niveau doit être une valeur vérifiable, avec une unité ou un nombre.",
              solution: [
                "Ligne 1 : fonction « mesurer la température de l'air » ; critère « plage de mesure » ; niveau « de -10 °C à 40 °C au moins ».",
                "Ligne 2 : fonction « afficher les mesures » ; critère « fréquence de mise à jour » ; niveau « au moins une mesure toutes les 10 minutes ».",
                "Ligne 3 : contrainte « résister aux intempéries » ; critère « fonctionnement sous la pluie » ; niveau « aucune panne après un essai d'arrosage de 10 minutes ».",
                "D'autres lignes sont acceptées (autonomie la nuit, dimensions, coût) si elles comportent un critère mesurable et un niveau.",
                "Résultat : trois exigences vérifiables, qui serviront à valider le prototype.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Pour un robot de livraison miniature, une équipe compare trois solutions, notées de 1 à 5 sur trois critères. Coût (coefficient 2) : A = 4, B = 3, C = 5. Facilité de fabrication (coefficient 1) : A = 3, B = 4, C = 2. Autonomie (coefficient 3) : A = 2, B = 4, C = 3. a) Calculer le total de chaque solution. b) Quelle solution retenir ? c) Le client décide finalement que le coût est le critère le plus important : coût coefficient 3, fabrication coefficient 1, autonomie coefficient 2. Refaire le calcul et conclure.",
              hint: "Pour chaque solution, multipliez chaque note par son coefficient, puis additionnez les trois produits.",
              solution: [
                "a) A : 4 × 2 + 3 × 1 + 2 × 3 = 8 + 3 + 6 = 17.",
                "B : 3 × 2 + 4 × 1 + 4 × 3 = 6 + 4 + 12 = 22.",
                "C : 5 × 2 + 2 × 1 + 3 × 3 = 10 + 2 + 9 = 21.",
                "b) La solution B obtient le meilleur total (22) : on la retient.",
                "c) Nouveaux totaux. A : 4 × 3 + 3 × 1 + 2 × 2 = 12 + 3 + 4 = 19. B : 3 × 3 + 4 × 1 + 4 × 2 = 9 + 4 + 8 = 21. C : 5 × 3 + 2 × 1 + 3 × 2 = 15 + 2 + 6 = 23.",
                "Avec ces priorités, la solution C l'emporte (23).",
                "Résultat : 17, 22 et 21, la solution B est retenue ; avec les nouveaux coefficients, 19, 21 et 23, la solution C est retenue.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la démarche de projet.",
            items: [
              "Identifier le besoin",
              "Rédiger le cahier des charges",
              "Rechercher des solutions",
              "Choisir une solution",
              "Réaliser le prototype",
              "Tester et valider",
              "Présenter le projet",
            ],
          },
          quiz: [
            {
              q: "Que contient un cahier des charges ?",
              options: ["Les fonctions et contraintes, avec critères et niveaux", "Le plan de montage détaillé de toutes les pièces de l'objet", "Le programme de la carte", "La facture des composants"],
              answer: 0,
              why: "Il exprime le besoin (quoi faire et quelles exigences), sans décrire la solution.",
            },
            {
              q: "Quelle étape vient juste après la rédaction du cahier des charges ?",
              options: ["Les tests", "La présentation", "La réalisation", "La recherche de solutions"],
              answer: 3,
              why: "Une fois le besoin précisé, on imagine plusieurs solutions avant d'en choisir une.",
            },
            {
              q: "Un diagramme de Gantt sert à :",
              options: ["représenter un circuit", "planifier les tâches dans le temps", "dessiner une pièce", "noter les solutions"],
              answer: 1,
              why: "Chaque tâche y est représentée par une barre placée sur une échelle de temps.",
            },
            {
              q: "Note 4 avec un coefficient 3 et note 2 avec un coefficient 1 : total ?",
              options: ["10", "7", "14", "12"],
              answer: 2,
              why: "4 × 3 + 2 × 1 = 12 + 2 = 14.",
            },
            {
              q: "À quoi sert le cahier des charges à la fin du projet ?",
              options: ["À rien, il est remplacé par le prototype", "À fixer le prix de vente", "À choisir la couleur", "À valider le prototype"],
              answer: 3,
              why: "On compare les résultats des tests aux niveaux du cahier des charges pour valider ou non le prototype.",
            },
          ],
          trap: "Écrire une solution dans le cahier des charges (« le robot aura deux moteurs ») au lieu d'une exigence vérifiable (« vitesse au moins 0,2 m/s ») : le cahier des charges dit ce qu'il faut obtenir, pas comment.",
          method: "Relisez chaque ligne de votre cahier des charges en vous demandant : « Comment vérifierai-je cela sur le prototype ? » Si vous ne savez pas quoi mesurer, le critère ou le niveau manque.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'design-innovation',
          title: "Design, créativité et innovation",
          minutes: 25,
          objectives: [
            "Utiliser des outils de créativité pour imaginer des solutions : remue-méninges, carte mentale, biomimétisme.",
            "Expliquer ce qu'est le design d'un objet : forme, usage, ergonomie et esthétique.",
            "Distinguer invention et innovation, innovation incrémentale et innovation de rupture.",
            "Identifier les moyens de protéger une invention ou l'apparence d'un objet.",
          ],
          course: [
            {
              heading: "Les outils de la créativité",
              paragraphs: [
                "La créativité est la capacité à imaginer des idées nouvelles. Elle se travaille avec des outils. Le remue-méninges (brainstorming) consiste à produire le plus grand nombre d'idées possible en un temps limité, sans les critiquer : on trie seulement ensuite. La carte mentale organise les idées autour d'un mot central, en branches et sous-branches.",
                "On peut aussi détourner un objet existant de son usage, combiner deux objets en un, ou s'inspirer de la nature : c'est le biomimétisme. L'ingénieur suisse George de Mestral a imaginé la fermeture auto-agrippante (connue sous la marque Velcro) en observant les fruits de la bardane accrochés aux poils de son chien. Au Japon, le nez d'un train à grande vitesse Shinkansen a été redessiné en s'inspirant du bec du martin-pêcheur, pour réduire le bruit à la sortie des tunnels.",
              ],
              box: { label: "Définition", text: "Biomimétisme : démarche qui s'inspire des formes, des matériaux ou des fonctionnements du vivant pour concevoir des objets ou des systèmes techniques." },
            },
            {
              heading: "Le design d'un objet",
              paragraphs: [
                "Le design ne se limite pas à la beauté : c'est la conception de la forme d'un objet en fonction de son usage. Un bon design associe la fonction (l'objet sert bien), l'ergonomie (il est adapté au corps et facile à utiliser), l'esthétique (il plaît) et, de plus en plus, l'éco-conception (il respecte l'environnement).",
                "Le designer observe les utilisateurs, imagine des formes par des croquis, puis les teste sur des maquettes. Une poignée de casserole bien conçue, par exemple, ne chauffe pas, tient bien en main et ne fait pas basculer la casserole. On parle de design centré sur l'utilisateur : on part de ses besoins et de ses gestes, y compris ceux des personnes en situation de handicap.",
              ],
            },
            {
              heading: "Invention et innovation",
              paragraphs: [
                "Une invention est une création technique nouvelle : un objet, un procédé ou une solution qui n'existait pas. Une innovation est une invention (ou une nouvelle combinaison de techniques existantes) qui trouve sa place sur le marché et dans les usages. Toutes les inventions ne deviennent pas des innovations.",
                "On distingue l'innovation incrémentale, qui améliore progressivement un objet existant (un smartphone avec un meilleur appareil photo, une trottinette au pliage plus simple), et l'innovation de rupture, qui change profondément les usages et remplace souvent les objets précédents (l'appareil photo numérique face à la pellicule, la navigation par GPS face aux cartes routières en papier).",
              ],
              box: { label: "À retenir", text: "Invention : création nouvelle. Innovation : invention adoptée par les utilisateurs. Incrémentale : amélioration progressive. De rupture : changement profond des usages." },
            },
            {
              heading: "Protéger une création",
              paragraphs: [
                "En France, une invention peut être protégée par un brevet, déposé auprès de l'INPI (Institut national de la propriété industrielle). Pour être brevetable, une invention doit être nouvelle, impliquer une activité inventive (ne pas être évidente pour un spécialiste) et être susceptible d'application industrielle. Le brevet donne à son titulaire le droit d'interdire aux autres d'exploiter l'invention pendant 20 ans au maximum ; en échange, l'invention est publiée.",
                "L'apparence d'un objet (sa forme, ses lignes, ses couleurs) peut être protégée par le dépôt d'un dessin ou modèle, pour une durée de 5 ans renouvelable jusqu'à 25 ans. Un nom ou un logo se protège par le dépôt d'une marque.",
              ],
              box: { label: "Repère", text: "Brevet : protège une invention technique, 20 ans au maximum. Dessin ou modèle : protège l'apparence, jusqu'à 25 ans. Marque : protège un nom ou un logo. Organisme français : l'INPI." },
            },
          ],
          keyPoints: [
            "Remue-méninges : beaucoup d'idées, sans critique ; carte mentale : idées organisées autour d'un centre.",
            "Biomimétisme : s'inspirer du vivant (bardane et fermeture auto-agrippante).",
            "Design : forme pensée pour l'usage, l'ergonomie, l'esthétique et l'environnement.",
            "Innovation = invention adoptée ; incrémentale (amélioration) ou de rupture (nouveaux usages).",
            "Brevet : 20 ans au maximum (INPI) ; dessin ou modèle : apparence ; marque : nom ou logo.",
          ],
          example: {
            statement: "Classer ces trois exemples en innovation incrémentale ou de rupture, en justifiant : a) une nouvelle version d'un aspirateur, plus silencieuse ; b) le passage de la cassette vidéo à la vidéo à la demande sur Internet ; c) une brosse à dents dont le manche est plus ergonomique.",
            solution: [
              "a) L'aspirateur fonctionne toujours de la même façon, il est seulement amélioré : innovation incrémentale.",
              "b) On ne loue plus ni n'achète un support physique : la façon de regarder des films change complètement et les cassettes disparaissent : innovation de rupture.",
              "c) La brosse garde le même principe, avec une meilleure prise en main : innovation incrémentale.",
              "Réponse : a et c sont incrémentales, b est une innovation de rupture.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une équipe cherche des idées pour un porte-clés qui ne se perd pas. Elle procède ainsi : chacun propose ses idées pendant 10 minutes, toutes sont notées sans aucune critique, puis l'équipe les trie. a) Comment s'appelle cette méthode ? b) Pourquoi interdit-on la critique pendant la première phase ?",
              hint: "Pensez au but de la première phase : la quantité ou la qualité ?",
              solution: [
                "a) C'est un remue-méninges (brainstorming).",
                "b) La critique bloque la prise de parole et fait abandonner des idées trop tôt ; le but de la première phase est d'obtenir le plus grand nombre d'idées, car une idée étrange peut en inspirer une bonne.",
                "Résultat : remue-méninges ; on ne critique pas pour favoriser la quantité et la variété des idées, le tri vient après.",
              ],
            },
            {
              level: 2,
              statement: "Document : « À la sortie des tunnels, les premiers trains à grande vitesse Shinkansen produisaient une forte détonation, due à l'air comprimé devant le train. Les ingénieurs ont allongé et affiné le nez du train en s'inspirant du bec du martin-pêcheur, un oiseau qui plonge dans l'eau presque sans éclaboussures. » a) Quelle démarche de créativité a été utilisée ? b) Quel problème a été résolu ? c) Citer un autre exemple de cette démarche.",
              hint: "Repérez dans le document ce qui vient de la nature et ce qui concerne le train.",
              solution: [
                "a) Il s'agit du biomimétisme : les ingénieurs se sont inspirés de la forme d'un être vivant, le bec du martin-pêcheur.",
                "b) Le problème résolu est le bruit (la détonation) produit par l'air comprimé à la sortie des tunnels.",
                "c) Autre exemple : la fermeture auto-agrippante, inspirée des fruits de la bardane qui s'accrochent aux poils des animaux.",
                "Résultat : biomimétisme, pour réduire le bruit à la sortie des tunnels ; autre exemple : la fermeture auto-agrippante.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Des élèves ont conçu une gourde munie d'un mécanisme original qui filtre l'eau quand on appuie sur le bouchon. Ils ont aussi donné à la gourde une forme très reconnaissable et un nom, « Aquaclic ». a) Le mécanisme de filtration est-il une invention ou une innovation ? Expliquer à quelle condition il deviendrait une innovation. b) Quelle protection choisir pour le mécanisme, pour la forme et pour le nom ? c) Citer les trois conditions pour qu'une invention soit brevetable. d) Si le brevet est déposé en 2026, à partir de quelle année au plus tard tout le monde pourra-t-il exploiter librement le mécanisme ?",
              hint: "Associez chaque élément (technique, apparence, nom) à un titre de protection, et rappelez la durée maximale d'un brevet.",
              solution: [
                "a) Pour l'instant, c'est une invention : une création technique nouvelle. Elle deviendra une innovation si elle est produite, vendue et adoptée par les utilisateurs.",
                "b) Le mécanisme se protège par un brevet ; la forme de la gourde par un dépôt de dessin ou modèle ; le nom « Aquaclic » par un dépôt de marque. Ces dépôts se font en France auprès de l'INPI.",
                "c) L'invention doit être nouvelle, impliquer une activité inventive et être susceptible d'application industrielle.",
                "d) Le brevet dure au maximum 20 ans : 2026 + 20 = 2046. Au plus tard en 2046, le mécanisme pourra être exploité librement.",
                "Résultat : invention (innovation si elle est adoptée) ; brevet, dessin ou modèle, marque ; nouveauté, activité inventive, application industrielle ; libre au plus tard en 2046.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : design, créativité et innovation.",
            statements: [
              { text: "Pendant un remue-méninges, on élimine tout de suite les idées irréalistes.", true: false, why: "On note toutes les idées sans critique ; le tri vient ensuite." },
              { text: "Toute invention devient une innovation.", true: false, why: "Une invention ne devient innovation que si elle est adoptée par les utilisateurs ou le marché." },
              { text: "Le biomimétisme s'inspire du vivant pour concevoir des objets.", true: true, why: "Exemple : la fermeture auto-agrippante inspirée des fruits de la bardane." },
              { text: "Le design s'occupe uniquement de la couleur des objets.", true: false, why: "Le design pense la forme en fonction de l'usage, de l'ergonomie, de l'esthétique et de l'environnement." },
              { text: "Un brevet protège une invention pendant 20 ans au maximum.", true: true, why: "Au-delà, l'invention tombe dans le domaine public." },
              { text: "Le passage de la pellicule photo au numérique est une innovation de rupture.", true: true, why: "Il a profondément changé les usages et fait presque disparaître la pellicule." },
              { text: "Une meilleure batterie dans une nouvelle version d'un téléphone est une innovation de rupture.", true: false, why: "C'est une amélioration progressive : une innovation incrémentale." },
            ],
          },
          quiz: [
            {
              q: "Quelle méthode consiste à produire un maximum d'idées sans les juger ?",
              options: ["La grille de choix", "Le remue-méninges", "Le diagramme de Gantt", "Le cahier des charges"],
              answer: 1,
              why: "Le remue-méninges privilégie la quantité d'idées ; le tri vient dans un second temps.",
            },
            {
              q: "Qu'est-ce qu'une innovation ?",
              options: ["Une invention adoptée par les utilisateurs", "Une idée nouvelle notée dans un carnet de recherche", "Un dessin à main levée", "Un objet ancien restauré"],
              answer: 0,
              why: "Une innovation est une invention qui trouve sa place sur le marché et dans les usages.",
            },
            {
              q: "Quel organisme reçoit les dépôts de brevets en France ?",
              options: ["L'ADEME", "Le CERN", "L'Éducation nationale", "L'INPI"],
              answer: 3,
              why: "L'Institut national de la propriété industrielle (INPI) enregistre brevets, marques, dessins et modèles.",
            },
            {
              q: "L'ergonomie d'un objet concerne :",
              options: ["son prix", "son recyclage", "son adaptation au corps et à l'usage", "sa marque"],
              answer: 2,
              why: "Un objet ergonomique est facile et confortable à utiliser, adapté aux gestes de l'utilisateur.",
            },
            {
              q: "Pour protéger la forme originale d'une lampe, on dépose :",
              options: ["un dessin ou modèle", "un brevet", "un cahier des charges", "une marque"],
              answer: 0,
              why: "Le dessin ou modèle protège l'apparence ; le brevet protège une invention technique, la marque un nom ou un logo.",
            },
          ],
          trap: "Confondre invention et innovation : une invention est une nouveauté technique, elle ne devient une innovation que lorsqu'elle est adoptée par les utilisateurs.",
          method: "Pour classer une innovation, posez la question : « Les gens utilisent-ils l'objet de la même façon qu'avant ? » Si oui, elle est incrémentale ; si les usages ont changé, elle est de rupture.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'prototyper',
          title: "Réaliser et tester un prototype",
          minutes: 25,
          objectives: [
            "Distinguer une maquette d'un prototype.",
            "Choisir un procédé de fabrication adapté : fabrication additive ou soustractive, assemblage.",
            "Rédiger un protocole d'essai pour vérifier un critère du cahier des charges.",
            "Valider un prototype et proposer des améliorations à partir des résultats des tests.",
          ],
          course: [
            {
              heading: "Maquette et prototype",
              paragraphs: [
                "Une maquette est une représentation de l'objet, souvent à échelle réduite et en matériaux simples (carton, mousse, papier), qui sert à visualiser la forme, l'encombrement ou l'aspect. Elle n'est pas forcément fonctionnelle : la maquette d'un bâtiment ne contient ni chauffage ni ascenseur.",
                "Un prototype est un premier exemplaire fonctionnel de l'objet, réalisé à l'échelle 1 ou proche, pour vérifier qu'il remplit bien ses fonctions et respecte le cahier des charges. Il précède la fabrication en série. On en réalise souvent plusieurs versions successives, de plus en plus abouties.",
              ],
              box: { label: "Définition", text: "Maquette : représentation, souvent réduite, pour visualiser la forme ; pas forcément fonctionnelle. Prototype : premier exemplaire fonctionnel, pour tester l'objet avant sa fabrication en série." },
            },
            {
              heading: "Les procédés de réalisation",
              paragraphs: [
                "La fabrication additive construit la pièce en ajoutant de la matière couche par couche : c'est le principe de l'imprimante 3D, qui dépose un filament de plastique fondu (souvent du PLA). Elle permet des formes complexes, mais elle est lente. La fabrication soustractive part d'un bloc ou d'une plaque et enlève de la matière : découpe laser, perçage, sciage, fraisage. Le formage déforme la matière sans en enlever (pliage, thermoformage d'une feuille de plastique chauffée).",
                "Les pièces sont ensuite assemblées : par vis et écrous (démontable), par emboîtement ou clipsage, par collage (souvent non démontable). Le choix tient compte du matériau, de la précision attendue, du temps, du coût et de la possibilité de démonter l'objet pour le réparer.",
                "La réalisation suit une fiche de fabrication qui indique l'ordre des opérations, les machines et outils, et les consignes de sécurité : lunettes de protection, cheveux attachés, machine utilisée seulement sous la surveillance du professeur.",
              ],
              box: { label: "Repère", text: "Additive : ajout de matière couche par couche (impression 3D). Soustractive : enlèvement de matière (découpe laser, perçage, fraisage). Formage : déformation sans enlèvement (pliage, thermoformage)." },
            },
            {
              heading: "Tester le prototype : le protocole d'essai",
              paragraphs: [
                "Tester, c'est vérifier un critère du cahier des charges dans des conditions définies à l'avance. Un protocole d'essai précise : le critère vérifié et son niveau attendu, le matériel de mesure (chronomètre, balance, mètre, multimètre), les conditions de l'essai, les étapes à suivre et le nombre d'essais.",
                "Exemple : pour vérifier qu'un robot roule au moins à 0,2 m/s, on trace une distance de 3 m sur un sol plat, on chronomètre le robot sur cette distance, on recommence trois fois et on calcule la vitesse moyenne v = d ÷ t.",
              ],
            },
            {
              heading: "Valider et améliorer",
              paragraphs: [
                "Les résultats sont rassemblés dans un tableau de validation : pour chaque critère, le niveau attendu, la valeur mesurée et la conclusion (conforme ou non conforme). Le prototype est validé si tous les critères sont conformes.",
                "Si un critère n'est pas respecté, on cherche la cause et on propose une amélioration : modifier la conception, changer de matériau, ajuster le programme. On réalise alors une nouvelle version du prototype et on refait les essais. Cette boucle d'amélioration est normale : peu de prototypes réussissent du premier coup.",
              ],
              box: { label: "À retenir", text: "Tableau de validation : critère, niveau attendu, valeur mesurée, conforme ou non. Non conforme : chercher la cause, améliorer, tester à nouveau." },
            },
          ],
          keyPoints: [
            "Maquette : visualiser la forme ; prototype : premier exemplaire fonctionnel à tester.",
            "Fabrication additive (impression 3D) ou soustractive (découpe laser, perçage).",
            "Assemblage démontable (vis, emboîtement) ou non démontable (collage).",
            "Protocole d'essai : critère, niveau, matériel, conditions, étapes, nombre d'essais.",
            "Tableau de validation : conforme ou non ; sinon, améliorer et tester à nouveau.",
          ],
          example: {
            statement: "Pour un robot dont le cahier des charges impose une vitesse d'au moins 0,2 m/s, on chronomètre trois passages sur 3 m : 13 s, 12 s et 11 s. Le critère est-il respecté ?",
            solution: [
              "Durée moyenne : (13 + 12 + 11) ÷ 3 = 36 ÷ 3 = 12 s.",
              "Vitesse moyenne : v = d ÷ t = 3 ÷ 12 = 0,25 m/s.",
              "Comparaison : 0,25 m/s ≥ 0,2 m/s.",
              "Réponse : la vitesse moyenne est de 0,25 m/s, le critère est respecté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Maquette ou prototype ? a) Un modèle en carton, à l'échelle 1:10, d'un abri à vélos, pour montrer sa forme au conseil du collège. b) Un premier robot complet, programmé, que l'on fait rouler pour mesurer son autonomie. c) Une forme en mousse d'une manette de jeu, pour tester sa prise en main sans électronique.",
              hint: "Demandez-vous si l'objet réalisé fonctionne vraiment ou s'il sert seulement à voir la forme.",
              solution: [
                "a) Échelle réduite, carton, sert à montrer la forme : maquette.",
                "b) Exemplaire complet et fonctionnel, testé : prototype.",
                "c) Forme seule, sans fonctionnement : maquette (dite maquette d'aspect ou d'ergonomie).",
                "Résultat : a = maquette ; b = prototype ; c = maquette.",
              ],
            },
            {
              level: 2,
              statement: "Une pièce de 30 mm de haut est imprimée en 3D avec des couches de 0,2 mm d'épaisseur. Chaque couche demande en moyenne 1 min 20 s. a) Combien de couches faut-il ? b) Calculer la durée d'impression en minutes, puis en heures et minutes. c) L'impression 3D est-elle un procédé additif ou soustractif ? Citer un procédé de l'autre catégorie.",
              hint: "Convertissez 1 min 20 s en secondes avant de multiplier.",
              solution: [
                "a) Nombre de couches = 30 ÷ 0,2 = 150 couches.",
                "b) 1 min 20 s = 80 s ; durée = 150 × 80 = 12 000 s.",
                "12 000 s = 12 000 ÷ 60 = 200 min = 3 h 20 min.",
                "c) L'impression 3D ajoute de la matière couche par couche : procédé additif. Procédé soustractif : la découpe laser (ou le perçage, le fraisage).",
                "Résultat : 150 couches, 200 min soit 3 h 20 min, procédé additif.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Le cahier des charges d'un robot suiveur de ligne impose : masse au plus 500 g ; vitesse au moins 0,2 m/s ; autonomie au moins 30 min ; suivre la ligne sans en sortir lors de 3 essais sur 3. Résultats des tests du prototype : masse 540 g ; parcours de 3 m en 12 s ; autonomie 42 min ; 2 essais réussis sur 3. a) Calculer la vitesse du robot. b) Dresser le tableau de validation (critère, niveau, mesure, conclusion). c) Le prototype est-il validé ? d) Proposer une amélioration pour chaque critère non conforme.",
              hint: "Un seul critère non conforme suffit pour que le prototype ne soit pas validé.",
              solution: [
                "a) v = d ÷ t = 3 ÷ 12 = 0,25 m/s.",
                "b) Masse : niveau ≤ 500 g, mesure 540 g, non conforme. Vitesse : niveau ≥ 0,2 m/s, mesure 0,25 m/s, conforme. Autonomie : niveau ≥ 30 min, mesure 42 min, conforme. Suivi de ligne : niveau 3 essais sur 3, mesure 2 sur 3, non conforme.",
                "c) Deux critères ne sont pas respectés : le prototype n'est pas validé.",
                "d) Masse : alléger le châssis, par exemple en l'évidant ou en l'imprimant avec moins de matière, ou choisir une batterie plus légère, l'autonomie ayant de la marge (42 min pour 30 exigées).",
                "Suivi de ligne : réajuster le seuil des capteurs de ligne dans le programme, ou réduire légèrement la vitesse dans les virages, la vitesse ayant aussi de la marge.",
                "Résultat : 0,25 m/s ; masse et suivi de ligne non conformes ; prototype non validé ; on l'allège et on règle les capteurs, puis on refait les essais.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque procédé ou notion à sa description.",
            pairs: [
              { left: "Impression 3D", right: "Ajout de matière couche par couche" },
              { left: "Découpe laser", right: "Enlèvement de matière dans une plaque" },
              { left: "Thermoformage", right: "Mise en forme d'une feuille de plastique chauffée" },
              { left: "Maquette", right: "Représentation pour visualiser la forme" },
              { left: "Prototype", right: "Premier exemplaire fonctionnel à tester" },
              { left: "Protocole d'essai", right: "Démarche précise pour vérifier un critère" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue un prototype d'une maquette ?",
              options: ["Il est toujours en carton", "Il est plus petit", "Il est fonctionnel", "Il n'est jamais testé"],
              answer: 2,
              why: "Le prototype est un premier exemplaire qui fonctionne et que l'on teste ; la maquette sert surtout à visualiser.",
            },
            {
              q: "La découpe laser est un procédé :",
              options: ["additif", "de formage", "d'assemblage", "soustractif"],
              answer: 3,
              why: "Le laser enlève de la matière dans une plaque : c'est un procédé soustractif.",
            },
            {
              q: "Lequel de ces assemblages est démontable ?",
              options: ["Vis et écrou", "Collage", "Soudure", "Rivetage"],
              answer: 0,
              why: "Une vis se dévisse, ce qui facilite la réparation et le recyclage.",
            },
            {
              q: "Un robot parcourt 2 m en 8 s. Sa vitesse est :",
              options: ["4 m/s", "0,25 m/s", "16 m/s", "0,4 m/s"],
              answer: 1,
              why: "v = d ÷ t = 2 ÷ 8 = 0,25 m/s.",
            },
            {
              q: "Un critère sur quatre n'est pas conforme. Le prototype :",
              options: ["est validé", "n'est pas validé", "est validé à 75 %", "doit être jeté"],
              answer: 1,
              why: "Tous les critères doivent être conformes ; on améliore le prototype et on refait les essais.",
            },
          ],
          trap: "Conclure qu'un prototype est validé parce que la plupart des critères sont respectés : il suffit d'un seul critère non conforme pour que la validation soit refusée.",
          method: "Préparez le tableau de validation avant les essais, avec le niveau attendu de chaque critère : pendant les tests, il ne restera qu'à noter les mesures et à comparer.",
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
          id: 'analyser-systeme-documents',
          title: "Analyser un système technique à partir de documents",
          minutes: 30,
          objectives: [
            "Prélever dans un dossier documentaire les informations utiles pour répondre à une question.",
            "Décrire le fonctionnement d'un système technique à l'aide de ses chaînes d'information et d'énergie.",
            "Exploiter des caractéristiques techniques pour effectuer un calcul et vérifier un critère du cahier des charges.",
            "Rédiger une réponse justifiée en citant le document utilisé.",
          ],
          course: [
            {
              heading: "Ce qui vous attend au brevet",
              paragraphs: [
                "La technologie fait partie de l'épreuve écrite de sciences du brevet, qui dure 1 heure et porte sur deux disciplines parmi la physique-chimie, les SVT et la technologie, à raison de 30 minutes chacune. Les disciplines retenues ne sont connues que le jour de l'épreuve : il faut donc être prêt dans les trois.",
                "Un sujet de technologie présente le plus souvent un objet ou un système réel (une serre, un portail, un robot, un vélo électrique) à travers un dossier de documents : un texte de présentation, des photos, des schémas, un tableau de caractéristiques, un extrait de cahier des charges, parfois un programme. Les questions vont du plus simple (identifier, nommer) au plus exigeant (calculer, justifier, compléter un programme).",
              ],
              box: { label: "Repère", text: "Épreuve de sciences : 1 h pour deux disciplines parmi trois (physique-chimie, SVT, technologie), soit 30 minutes pour la technologie. Un document réponse est parfois à compléter et à rendre avec la copie." },
            },
            {
              heading: "Lire un dossier documentaire avec méthode",
              paragraphs: [
                "Commencez par lire le texte de présentation : il dit quel est le système, à quoi il sert et dans quel contexte. Repérez ensuite le type de chaque document (photo, schéma, tableau, programme) et son titre. Lisez alors toutes les questions et notez, à côté de chacune, le numéro du ou des documents qui permettent d'y répondre.",
                "Dans les tableaux de caractéristiques, relevez les valeurs avec leur unité (V, A, W, Wh, mAh, km/h, kg). Une valeur sans unité ne veut rien dire, et une erreur d'unité est la cause la plus fréquente des calculs faux. Soulignez les mots du cahier des charges qui fixent un niveau : « au moins », « au plus », « inférieur à ».",
              ],
            },
            {
              heading: "Les questions les plus fréquentes",
              paragraphs: [
                "Certaines questions reviennent très souvent : formuler la fonction d'usage du système ; compléter la chaîne d'information (acquérir, traiter, communiquer) ou la chaîne d'énergie (alimenter, distribuer, convertir, transmettre) avec les composants cités dans les documents ; dire si un capteur fournit une information logique ou analogique ; nommer la conversion d'énergie réalisée par un actionneur.",
                "Viennent ensuite les calculs, toujours accompagnés de leur formule : puissance P = U × I, énergie E = P × t, énergie stockée dans une batterie E = U × capacité (en Ah), autonomie, vitesse v = d ÷ t, durée de transfert. Le sujet se termine souvent par une vérification : le système respecte-t-il le cahier des charges ?",
              ],
              box: { label: "Formule", text: "Énergie d'une batterie : E (Wh) = U (V) × Q (Ah). Exemple : 12 V × 7 Ah = 84 Wh. Nombre de jours d'autonomie = énergie stockée ÷ énergie consommée par jour." },
            },
            {
              heading: "Rédiger une réponse justifiée",
              paragraphs: [
                "Une bonne réponse est une phrase complète qui s'appuie sur une preuve. On cite le document (« D'après le document 3... »), on donne la valeur avec son unité, puis on conclut en répondant exactement à la question posée.",
                "Pour un calcul, on écrit la formule, puis le calcul avec les valeurs, puis le résultat avec son unité, et enfin une phrase de conclusion. Pour une vérification de cahier des charges, on compare explicitement : « 14 jours ≥ 5 jours, le critère est respecté ».",
              ],
              box: { label: "Méthode", text: "Réponse justifiée : 1. citer le document ; 2. donner la valeur et l'unité ; 3. comparer au niveau attendu si besoin ; 4. conclure par une phrase qui répond à la question." },
            },
          ],
          keyPoints: [
            "Épreuve de sciences : 30 minutes de technologie si elle est tirée au sort parmi les trois disciplines.",
            "Lire la présentation, repérer les documents, puis associer chaque question à ses documents.",
            "Relever chaque valeur avec son unité ; souligner « au moins », « au plus ».",
            "Énergie d'une batterie : E (Wh) = U (V) × Q (Ah).",
            "Réponse justifiée : document cité, valeur et unité, comparaison, conclusion.",
          ],
          example: {
            statement: "Document : « Le système d'arrosage autonome d'un jardin partagé comprend un panneau solaire qui recharge une batterie, un capteur d'humidité du sol, une carte programmable, un relais et une pompe électrique qui puise l'eau d'une cuve. » a) Formuler la fonction d'usage du système. b) Compléter sa chaîne d'énergie avec les composants cités.",
            solution: [
              "a) Le système sert à arroser le jardin sans intervention humaine : fonction d'usage « arroser automatiquement les plantations du jardin ».",
              "b) Alimenter : le panneau solaire et la batterie fournissent l'énergie électrique.",
              "Distribuer : le relais, commandé par la carte programmable, laisse passer ou non l'énergie vers la pompe.",
              "Convertir : la pompe convertit l'énergie électrique en énergie mécanique, qui met l'eau en mouvement.",
              "Le capteur d'humidité et la carte programmable appartiennent à la chaîne d'information (acquérir et traiter).",
              "Réponse : fonction d'usage « arroser automatiquement le jardin » ; alimenter (panneau solaire, batterie), distribuer (relais), convertir (pompe).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Tableau de caractéristiques d'une trottinette électrique : batterie 36 V, 7,8 Ah ; moteur 250 W ; vitesse maximale 25 km/h ; masse 12,5 kg ; autonomie annoncée 20 km. a) Relever la tension de la batterie, la puissance du moteur et la masse, avec leurs unités. b) Calculer l'énergie stockée dans la batterie.",
              hint: "Utilisez E = U × Q avec Q en ampères-heures pour obtenir des wattheures.",
              solution: [
                "a) Tension : 36 V ; puissance du moteur : 250 W ; masse : 12,5 kg.",
                "b) E = U × Q = 36 × 7,8 = 280,8 Wh.",
                "Résultat : 36 V, 250 W, 12,5 kg ; la batterie stocke 280,8 Wh.",
              ],
            },
            {
              level: 2,
              statement: "Document : « Le volet roulant d'une salle de classe se ferme automatiquement en cas de fort ensoleillement. Un capteur de luminosité et une horloge informent le boîtier de commande programmable. Celui-ci commande un relais qui alimente, depuis le réseau électrique 230 V, un moteur tubulaire. Le moteur entraîne l'axe d'enroulement du volet par l'intermédiaire d'un réducteur. Un voyant sur l'interrupteur mural indique que le mode automatique est actif. » Compléter la chaîne d'information et la chaîne d'énergie de ce système.",
              hint: "Placez d'abord les composants qui manipulent des informations, puis suivez le trajet de l'énergie du réseau jusqu'au volet.",
              solution: [
                "Chaîne d'information. Acquérir : le capteur de luminosité et l'horloge. Traiter : le boîtier de commande programmable. Communiquer : l'ordre envoyé au relais et le voyant du mode automatique.",
                "Chaîne d'énergie. Alimenter : le réseau électrique 230 V. Distribuer : le relais. Convertir : le moteur tubulaire (énergie électrique en énergie mécanique). Transmettre : le réducteur et l'axe d'enroulement.",
                "Résultat : acquérir (capteur, horloge), traiter (boîtier), communiquer (ordre au relais, voyant) ; alimenter (230 V), distribuer (relais), convertir (moteur), transmettre (réducteur, axe).",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Pour le système d'arrosage autonome du jardin partagé, on donne : pompe 12 V, 1,5 A, qui fonctionne en tout 20 minutes par jour ; batterie 12 V, 7 Ah. Extrait du cahier des charges : « le système doit pouvoir arroser pendant au moins 5 jours sans soleil ». a) Calculer la puissance de la pompe. b) Calculer l'énergie consommée par la pompe en une journée, en Wh. c) Calculer l'énergie stockée dans la batterie. d) Le critère du cahier des charges est-il respecté ? Justifier.",
              hint: "Convertissez 20 minutes en heures (20 ÷ 60) avant d'utiliser E = P × t.",
              solution: [
                "a) P = U × I = 12 × 1,5 = 18 W.",
                "b) t = 20 min = 20 ÷ 60 h = 1/3 h ; E = P × t = 18 × 1/3 = 6 Wh par jour.",
                "c) E batterie = U × Q = 12 × 7 = 84 Wh.",
                "d) Nombre de jours sans soleil = 84 ÷ 6 = 14 jours (en considérant que seule la pompe consomme). 14 jours ≥ 5 jours.",
                "Résultat : 18 W, 6 Wh par jour, 84 Wh stockés ; avec 14 jours d'autonomie, le critère est respecté.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la méthode pour analyser un système à partir de documents.",
            items: [
              "Lire le texte de présentation du système",
              "Repérer le type et le titre de chaque document",
              "Lire toutes les questions",
              "Associer chaque question aux documents utiles",
              "Relever les valeurs avec leurs unités",
              "Rédiger une réponse justifiée qui cite le document",
            ],
          },
          quiz: [
            {
              q: "Combien de temps dure la partie technologie de l'épreuve de sciences du brevet ?",
              options: ["1 heure", "2 heures", "15 minutes", "30 minutes"],
              answer: 3,
              why: "L'épreuve de sciences dure 1 heure pour deux disciplines, soit 30 minutes chacune.",
            },
            {
              q: "Une batterie de 12 V et 10 Ah stocke une énergie de :",
              options: ["22 Wh", "120 Wh", "1,2 Wh", "12 Wh"],
              answer: 1,
              why: "E = U × Q = 12 × 10 = 120 Wh.",
            },
            {
              q: "Dans un document, un relais commandé par une carte réalise la fonction :",
              options: ["convertir", "acquérir", "distribuer", "transmettre"],
              answer: 2,
              why: "Le relais laisse passer ou non l'énergie vers l'actionneur : c'est le préactionneur, fonction distribuer.",
            },
            {
              q: "Quelle est la première chose à faire face à un dossier documentaire ?",
              options: ["Lire le texte de présentation", "Commencer par le calcul le plus long", "Répondre à la dernière question", "Recopier les documents"],
              answer: 0,
              why: "La présentation donne le contexte et la fonction du système, indispensables pour comprendre les autres documents.",
            },
            {
              q: "Une réponse justifiée doit contenir :",
              options: ["seulement le résultat", "une opinion personnelle", "le document cité, la valeur et une conclusion", "la recopie de la question"],
              answer: 2,
              why: "La justification s'appuie sur une preuve tirée du document, avec la valeur et son unité, puis conclut.",
            },
          ],
          trap: "Répondre avec ses connaissances générales sans exploiter les documents : au brevet, la réponse attendue s'appuie sur les composants et les valeurs donnés dans le dossier, qu'il faut citer.",
          method: "Dès la lecture des questions, écrivez dans la marge le numéro du document utile pour chacune : vous saurez où chercher et vous ne perdrez pas de temps à tout relire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lire-completer-programme',
          title: "Lire et compléter un programme ou un algorithme",
          minutes: 30,
          objectives: [
            "Décrire le comportement d'un système à partir de son programme.",
            "Exécuter un programme à la main à l'aide d'un tableau de suivi.",
            "Compléter un programme ou un algorithme pour qu'il respecte une consigne.",
            "Utiliser les opérateurs de comparaison et les opérateurs logiques et, ou, non.",
          ],
          course: [
            {
              heading: "Lire un programme par blocs",
              paragraphs: [
                "Au brevet, le programme est souvent donné sous forme de blocs, comme dans Scratch ou MakeCode, ou sous forme d'algorithme écrit en langage courant. Pour le lire, repérez dans l'ordre : l'événement qui le déclenche (« quand le drapeau est cliqué », « au démarrage », « quand le bouton A est pressé ») ; l'initialisation des variables ; la boucle principale ; les conditions ; les actions sur les actionneurs.",
                "Traduisez ensuite chaque bloc en phrase : « tant que le capteur de fin de course n'est pas appuyé, le moteur tourne dans le sens de l'ouverture ». La suite de ces phrases décrit le comportement du système.",
              ],
            },
            {
              heading: "Exécuter un programme à la main",
              paragraphs: [
                "Pour savoir ce que fait un programme dans une situation donnée, on l'exécute « à la main » dans un tableau de suivi : une colonne par variable ou par capteur, une ligne par étape ou par tour de boucle. On écrit la valeur de chaque variable après chaque instruction, et l'état des actionneurs.",
                "Soyez attentif aux comparaisons : « < » (strictement inférieur) et « ≤ » (inférieur ou égal) ne donnent pas le même résultat pour une valeur égale au seuil. Un test « distance < 10 » est faux pour une distance de 10 cm.",
              ],
              box: { label: "Règle", text: "Pour une valeur égale au seuil : « x < 10 » est faux, « x ≤ 10 » est vrai. Testez toujours le cas limite." },
            },
            {
              heading: "Combiner des conditions : et, ou, non",
              paragraphs: [
                "Une condition peut combiner plusieurs tests. « A et B » est vrai seulement si A et B sont vrais tous les deux. « A ou B » est vrai si au moins l'un des deux est vrai. « non A » est vrai quand A est faux.",
                "Exemple : « si porte ouverte et alarme activée, alors déclencher la sirène ». Si la porte s'ouvre alors que l'alarme est désactivée, la sirène ne sonne pas. Avec « ou », elle sonnerait dès qu'une seule des deux conditions serait vraie, ce qui n'aurait pas de sens.",
              ],
              box: { label: "À retenir", text: "A et B : vrai si les deux sont vrais. A ou B : vrai si au moins un est vrai. non A : vrai si A est faux." },
            },
            {
              heading: "Compléter un programme",
              paragraphs: [
                "Pour compléter un programme, partez de la consigne (le comportement attendu) et cherchez ce qui manque : une valeur de seuil, un opérateur de comparaison, un bloc d'action (allumer, démarrer le moteur), une instruction sur une variable (ajouter 1), ou une condition d'arrêt de boucle.",
                "Vérifiez ensuite votre réponse en exécutant le programme complété sur deux ou trois situations, dont le cas limite. L'algorigramme et le programme se correspondent : un losange devient un bloc « si » ou une condition de boucle, un rectangle devient une instruction.",
              ],
              box: { label: "Méthode", text: "Compléter : 1. lire la consigne ; 2. repérer ce que fait chaque bloc déjà présent ; 3. identifier le manque ; 4. compléter ; 5. tester sur plusieurs cas, dont le cas limite." },
            },
          ],
          keyPoints: [
            "Lire un programme : événement, initialisation, boucle, conditions, actions.",
            "Tableau de suivi : une colonne par variable, une ligne par étape.",
            "« < » et « ≤ » diffèrent pour une valeur égale au seuil.",
            "Et : les deux vrais ; ou : au moins un vrai ; non : inverse.",
            "Après avoir complété, tester le programme sur plusieurs cas, dont le cas limite.",
          ],
          example: {
            statement: "Programme d'un portail : « quand le bouton de la télécommande est pressé : répéter jusqu'à ce que le fin de course ouvert soit appuyé : faire tourner le moteur dans le sens ouverture ; fin de la boucle ; arrêter le moteur ; attendre 30 secondes ; ... ». Décrire ce que fait la partie écrite, puis compléter la suite pour que le portail se referme seul.",
            solution: [
              "Événement : le programme démarre quand on appuie sur la télécommande.",
              "La boucle fait tourner le moteur dans le sens ouverture tant que le portail n'est pas complètement ouvert ; quand le fin de course ouvert est appuyé, la boucle s'arrête et le moteur s'arrête.",
              "Le portail reste ouvert 30 secondes.",
              "Suite à écrire : « répéter jusqu'à ce que le fin de course fermé soit appuyé : faire tourner le moteur dans le sens fermeture ; fin de la boucle ; arrêter le moteur ».",
              "Réponse : le portail s'ouvre jusqu'en butée, attend 30 s, puis la partie ajoutée le referme jusqu'au fin de course fermé et arrête le moteur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une alarme suit la règle : « si porte ouverte et alarme activée, alors sirène en marche, sinon sirène arrêtée ». Indiquer l'état de la sirène dans les quatre cas : a) porte fermée, alarme désactivée ; b) porte ouverte, alarme désactivée ; c) porte fermée, alarme activée ; d) porte ouverte, alarme activée.",
              hint: "Avec « et », les deux conditions doivent être vraies en même temps.",
              solution: [
                "a) Aucune des deux conditions n'est vraie : sirène arrêtée.",
                "b) Porte ouverte vrai, alarme activée faux : la condition « et » est fausse, sirène arrêtée.",
                "c) Porte ouverte faux : sirène arrêtée.",
                "d) Les deux conditions sont vraies : sirène en marche.",
                "Résultat : la sirène ne fonctionne que dans le cas d.",
              ],
            },
            {
              level: 2,
              statement: "Un distributeur de gel doit délivrer une dose quand une main se trouve à moins de 10 cm du capteur à ultrasons. Programme à compléter : « toujours : d ← distance mesurée (en cm) ; si d [1] [2] alors : démarrer [3] ; attendre 1 seconde ; arrêter [3] ; attendre jusqu'à ce que d > 15 ; fin si ». a) Compléter [1], [2] et [3]. b) Que se passe-t-il pour d = 25 cm puis pour d = 8 cm ? c) À quoi sert l'instruction « attendre jusqu'à ce que d > 15 » ?",
              hint: "« À moins de 10 cm » signifie que la distance est strictement inférieure à 10 cm.",
              solution: [
                "a) [1] : < ; [2] : 10 ; [3] : la pompe (l'actionneur qui délivre le gel).",
                "b) d = 25 : 25 < 10 est faux, rien ne se passe. d = 8 : 8 < 10 est vrai, la pompe fonctionne 1 seconde puis s'arrête.",
                "c) Elle bloque le programme tant que la main reste devant le capteur : on évite ainsi de délivrer plusieurs doses à la suite ; il faut retirer la main (au-delà de 15 cm) pour obtenir une nouvelle dose.",
                "Résultat : si d < 10 alors démarrer la pompe ; aucune dose à 25 cm, une dose à 8 cm ; une seule dose par passage de main.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Programme d'arrosage d'une serre : « au démarrage : arrosages ← 0 ; toujours : h ← humidité du sol (en %) ; si h < 30 et arrosages < 3 alors : démarrer la pompe ; attendre 10 secondes ; arrêter la pompe ; arrosages ← arrosages + 1 ; fin si ; attendre 1 heure ». a) Quel est le rôle de la variable arrosages ? b) Au cours d'une journée, l'humidité mesurée à chaque passage dans la boucle vaut successivement : 45, 28, 25, 35, 22, 20, 18. Dresser le tableau de suivi (h, arrosage ou non, valeur de arrosages). c) Quelle est la durée totale de fonctionnement de la pompe ? d) On ajoute un capteur de pluie. Réécrire la condition pour ne jamais arroser quand il pleut.",
              hint: "À chaque passage, vérifiez les deux conditions de la règle « et » : l'humidité, puis le nombre d'arrosages déjà réalisés.",
              solution: [
                "a) La variable arrosages compte le nombre d'arrosages déjà réalisés ; elle limite l'arrosage à 3 fois.",
                "b) h = 45 : 45 < 30 faux, pas d'arrosage, arrosages = 0. h = 28 : vrai et 0 < 3, arrosage, arrosages = 1. h = 25 : vrai et 1 < 3, arrosage, arrosages = 2.",
                "h = 35 : faux, pas d'arrosage, arrosages = 2. h = 22 : vrai et 2 < 3, arrosage, arrosages = 3.",
                "h = 20 : 20 < 30 vrai mais 3 < 3 faux, pas d'arrosage, arrosages = 3. h = 18 : même chose, pas d'arrosage, arrosages = 3.",
                "c) 3 arrosages de 10 secondes : 3 × 10 = 30 secondes de fonctionnement.",
                "d) « si h < 30 et arrosages < 3 et non pluie détectée alors... ».",
                "Résultat : la variable limite à 3 arrosages ; arrosages aux mesures 28, 25 et 22 ; la pompe fonctionne 30 s ; condition complétée par « et non pluie détectée ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : lire et compléter un programme.",
            statements: [
              { text: "« A et B » est vrai dès que A est vrai.", true: false, why: "Il faut que A et B soient vrais tous les deux." },
              { text: "« A ou B » est vrai si au moins l'une des deux conditions est vraie.", true: true, why: "C'est la définition du « ou » en programmation." },
              { text: "Pour d = 10, le test « d < 10 » est vrai.", true: false, why: "10 n'est pas strictement inférieur à 10 ; il faudrait « d ≤ 10 »." },
              { text: "Un tableau de suivi permet d'exécuter un programme à la main.", true: true, why: "On y note la valeur des variables à chaque étape." },
              { text: "Dans un algorigramme, un losange correspond à un bloc « si » ou à une condition de boucle.", true: true, why: "Le losange représente un test avec deux sorties, oui et non." },
              { text: "Une boucle « répéter jusqu'à » s'arrête quand sa condition devient fausse.", true: false, why: "Elle s'arrête quand la condition devient vraie : on répète jusqu'à ce qu'elle soit vraie." },
            ],
          },
          quiz: [
            {
              q: "Par quoi un programme de système commence-t-il le plus souvent ?",
              options: ["Un événement comme « au démarrage »", "Une boucle « toujours » sans rien avant", "Un bloc « arrêter le moteur »", "Une condition « sinon »"],
              answer: 0,
              why: "L'événement déclenche l'exécution ; viennent ensuite l'initialisation et la boucle principale.",
            },
            {
              q: "« Si température > 25 ou fenêtre ouverte alors arrêter le chauffage ». Il fait 20 °C, fenêtre ouverte. Le chauffage :",
              options: ["continue de chauffer", "chauffe plus fort", "s'arrête", "clignote"],
              answer: 2,
              why: "Avec « ou », une seule condition vraie suffit : la fenêtre est ouverte, donc le chauffage s'arrête.",
            },
            {
              q: "Quel test est vrai pour x = 5 ?",
              options: ["x < 5", "x > 5", "x ≠ 5", "x ≤ 5"],
              answer: 3,
              why: "5 ≤ 5 est vrai (inférieur ou égal) ; les trois autres tests sont faux pour x = 5.",
            },
            {
              q: "« compteur ← 0 ; répéter 3 fois : compteur ← compteur + 2 ». Valeur finale ?",
              options: ["5", "6", "3", "2"],
              answer: 1,
              why: "compteur vaut 2, puis 4, puis 6.",
            },
            {
              q: "« répéter jusqu'à fin de course appuyé : moteur en marche ». Quand le moteur s'arrête-t-il ?",
              options: ["Au bout d'une seconde", "Jamais", "Quand le fin de course est relâché", "Quand le fin de course est appuyé"],
              answer: 3,
              why: "La boucle se répète jusqu'à ce que la condition soit vraie : dès que le fin de course est appuyé, on sort de la boucle.",
            },
          ],
          trap: "Confondre « et » et « ou » dans une condition : « si porte ouverte ou alarme activée » ferait sonner la sirène dès l'activation de l'alarme, même porte fermée.",
          method: "Après avoir complété un programme, testez-le sur trois valeurs : une nettement sous le seuil, une nettement au-dessus et une exactement égale au seuil. Si les trois résultats correspondent à la consigne, votre réponse est juste.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'temps-limite-techno',
          title: "Résoudre un exercice de technologie en temps limité",
          minutes: 35,
          objectives: [
            "Organiser son temps pour traiter un sujet de technologie en 30 minutes.",
            "Identifier ce qu'attend chaque verbe de consigne.",
            "Rédiger un calcul complet : formule, application numérique, résultat avec unité, conclusion.",
            "Mobiliser les formules et le vocabulaire de la technologie du cycle 4.",
          ],
          course: [
            {
              heading: "Gérer ses 30 minutes",
              paragraphs: [
                "En 30 minutes, il faut aller à l'essentiel. Prenez 3 minutes pour lire la présentation, survoler les documents et lire toutes les questions. Traitez ensuite les questions dans l'ordre, car elles suivent souvent la logique du système, mais ne restez jamais bloqué : au bout de 2 ou 3 minutes sans idée, passez à la suivante et revenez-y à la fin.",
                "Les questions sont souvent en partie indépendantes : un calcul raté n'empêche pas de répondre à la question d'après. Si un résultat vous manque, utilisez une valeur raisonnable en le signalant. Gardez 2 ou 3 minutes à la fin pour relire, vérifier les unités et compléter le document réponse éventuel, qui doit être rendu avec la copie.",
              ],
              box: { label: "Repère", text: "Environ 3 min de lecture, 24 min de réponses, 3 min de relecture. Une question bloquante est laissée de côté, puis reprise à la fin." },
            },
            {
              heading: "Comprendre les verbes de consigne",
              paragraphs: [
                "Le verbe de la question dit exactement ce qu'il faut faire. Identifier, citer, nommer : une réponse courte, un mot ou un composant. Décrire : dire comment est ou comment se comporte le système, sans forcément expliquer pourquoi. Expliquer : dire comment ou pourquoi cela fonctionne, avec un enchaînement de causes.",
                "Justifier : prouver sa réponse avec un élément du document, une valeur ou un calcul. Calculer : écrire la formule, faire le calcul et donner le résultat avec son unité. Compléter : remplir un schéma, un tableau ou un programme, souvent sur le document réponse. Comparer : mettre en regard deux valeurs ou deux solutions. Conclure : répondre clairement à la question de départ, par exemple « le cahier des charges est respecté ».",
              ],
            },
            {
              heading: "Rédiger un calcul complet",
              paragraphs: [
                "Un calcul bien rédigé suit toujours quatre étapes : la formule littérale (P = U × I), l'application numérique avec les valeurs du document (P = 24 × 3), le résultat avec son unité (P = 72 W), et une phrase de conclusion si la question le demande. Même si le résultat est faux, la formule et la démarche rapportent des points.",
                "Vérifiez la cohérence du résultat : un rendement est inférieur à 1, un robot de collège ne roule pas à 300 m/s, une durée de transfert d'une photo ne se compte pas en heures avec une bonne connexion. Pensez aux conversions : minutes en heures, mm en m, Mo en Mbit, mAh en Ah.",
              ],
              box: { label: "Formule", text: "v = d ÷ t ; P = U × I ; E = P × t ; E batterie = U × Q ; η = utile ÷ absorbée ; engrenage N sortie = N entrée × Z menant ÷ Z mené ; ultrasons d = v × t ÷ 2 ; transfert t = taille en bits ÷ débit." },
            },
            {
              heading: "Utiliser le bon vocabulaire",
              paragraphs: [
                "Les correcteurs attendent les mots précis de la technologie : capteur, actionneur, préactionneur, chaîne d'information (acquérir, traiter, communiquer), chaîne d'énergie (alimenter, distribuer, convertir, transmettre), information logique ou analogique, énergie électrique, mécanique, thermique, lumineuse, cahier des charges, critère, niveau.",
                "Écrivez des phrases courtes et précises plutôt que de longues explications vagues. « Le moteur convertit l'énergie électrique en énergie mécanique » vaut mieux que « le moteur fait marcher le portail ».",
              ],
              box: { label: "À retenir", text: "Une réponse efficace : le bon verbe de consigne respecté, le vocabulaire technique exact, la valeur avec son unité, une phrase de conclusion." },
            },
          ],
          keyPoints: [
            "30 minutes : 3 min de lecture, environ 24 min de réponses, 3 min de relecture.",
            "Ne jamais rester bloqué : passer à la question suivante et revenir ensuite.",
            "Justifier = prouver avec un document, une valeur ou un calcul.",
            "Calcul : formule, application numérique, résultat avec unité, conclusion.",
            "Vocabulaire précis : capteur, actionneur, acquérir, distribuer, convertir, énergie mécanique...",
            "Ne pas oublier le document réponse à rendre avec la copie.",
          ],
          example: {
            statement: "Question de sujet : « Le moteur d'un portail est alimenté sous 24 V et consomme 3 A. Justifier que sa puissance respecte le cahier des charges, qui impose au plus 100 W. » Rédiger la réponse complète.",
            solution: [
              "Le verbe « justifier » demande une preuve : ici un calcul suivi d'une comparaison.",
              "Formule : P = U × I.",
              "Application numérique : P = 24 × 3.",
              "Résultat : P = 72 W.",
              "Comparaison : 72 W ≤ 100 W.",
              "Réponse : la puissance du moteur est de 72 W, inférieure à 100 W : le cahier des charges est respecté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune de ces questions, indiquer ce qui est attendu : a) « Citer le capteur qui détecte l'ouverture de la porte. » b) « Justifier que la batterie permet 3 jours d'autonomie. » c) « Expliquer pourquoi le moteur est relié à un réducteur. »",
              hint: "Repérez le verbe de consigne de chaque question et rappelez-vous son attendu.",
              solution: [
                "a) « Citer » : une réponse courte, le nom du capteur (par exemple l'interrupteur de fin de course ou le détecteur d'ouverture), sans explication.",
                "b) « Justifier » : une preuve chiffrée, par exemple le calcul de l'énergie stockée divisée par l'énergie consommée par jour, puis la comparaison avec 3 jours.",
                "c) « Expliquer » : une explication du fonctionnement, par exemple « le moteur tourne trop vite ; le réducteur diminue la vitesse de rotation pour entraîner le portail lentement et avec plus de force ».",
                "Résultat : a = un nom ; b = un calcul et une comparaison ; c = un enchaînement de causes.",
              ],
            },
            {
              level: 2,
              statement: "Exercice à traiter en 10 minutes. Un lampadaire solaire comprend un panneau solaire, une batterie de 12 V et 20 Ah, un capteur de luminosité, une carte de commande et une lampe à LED de 20 W. La nuit, la lampe reste allumée 10 heures. Le cahier des charges impose que la batterie, pleine, assure au moins une nuit complète d'éclairage. a) Citer le capteur qui permet d'allumer la lampe à la tombée de la nuit et préciser le type d'information qu'il fournit. b) Calculer l'énergie stockée dans la batterie. c) Calculer l'énergie consommée par la lampe en une nuit. d) Le cahier des charges est-il respecté ? Justifier.",
              hint: "Utilisez E = U × Q pour la batterie et E = P × t pour la lampe, les deux en Wh.",
              solution: [
                "a) Le capteur de luminosité ; il mesure une lumière qui varie de façon continue : information analogique.",
                "b) E batterie = U × Q = 12 × 20 = 240 Wh.",
                "c) E lampe = P × t = 20 × 10 = 200 Wh.",
                "d) 240 Wh ≥ 200 Wh : la batterie pleine assure une nuit complète (avec une réserve de 40 Wh).",
                "Résultat : capteur de luminosité (analogique) ; 240 Wh stockés ; 200 Wh consommés ; le cahier des charges est respecté.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet, à traiter en 30 minutes. Un portail coulissant de 4 m de long est motorisé et alimenté par une batterie rechargée par un panneau solaire. Documents : batterie 24 V, 7 Ah ; carte de commande ; moteur 24 V qui consomme 3 A ; pignon et crémaillère ; vitesse de déplacement du portail 0,25 m/s ; 10 ouvertures et 10 fermetures par jour. Cahier des charges : ouverture complète en moins de 20 s ; au moins 15 jours de fonctionnement sans soleil. a) Compléter la chaîne d'énergie avec les composants cités. b) Calculer la puissance du moteur. c) Calculer la durée d'une ouverture complète et vérifier le critère correspondant. d) Calculer l'énergie consommée par jour, en joules puis en Wh. e) Le critère d'autonomie est-il respecté ?",
              hint: "Une manœuvre dure le temps de parcourir 4 m ; il y a 20 manœuvres par jour. Pour passer des joules aux wattheures, divisez par 3 600.",
              solution: [
                "a) Alimenter : la batterie (rechargée par le panneau solaire). Distribuer : la carte de commande. Convertir : le moteur (énergie électrique en énergie mécanique). Transmettre : le pignon et la crémaillère (rotation transformée en translation du portail).",
                "b) P = U × I = 24 × 3 = 72 W.",
                "c) t = d ÷ v = 4 ÷ 0,25 = 16 s ; 16 s < 20 s, le critère d'ouverture est respecté.",
                "d) Nombre de manœuvres : 10 + 10 = 20 ; durée totale : 20 × 16 = 320 s. E = P × t = 72 × 320 = 23 040 J, soit 23 040 ÷ 3 600 = 6,4 Wh par jour.",
                "e) E batterie = U × Q = 24 × 7 = 168 Wh. Nombre de jours = 168 ÷ 6,4 = 26,25, soit 26 jours complets. 26 jours ≥ 15 jours : le critère est respecté.",
                "Résultat : 72 W ; ouverture en 16 s (conforme) ; 6,4 Wh par jour ; environ 26 jours d'autonomie, le cahier des charges est respecté.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque verbe de consigne à ce qu'il attend.",
            pairs: [
              { left: "Citer", right: "Donner un nom ou un élément, sans explication" },
              { left: "Décrire", right: "Dire comment est ou se comporte le système" },
              { left: "Expliquer", right: "Dire comment ou pourquoi cela fonctionne" },
              { left: "Justifier", right: "Prouver avec un document, une valeur ou un calcul" },
              { left: "Calculer", right: "Formule, application numérique, résultat avec unité" },
              { left: "Conclure", right: "Répondre clairement à la question de départ" },
            ],
          },
          quiz: [
            {
              q: "Vous bloquez sur une question depuis 3 minutes. Que faire ?",
              options: ["Rester jusqu'à trouver", "Passer à la suivante et y revenir à la fin", "Rendre la copie", "Recopier l'énoncé"],
              answer: 1,
              why: "Les questions sont souvent en partie indépendantes : mieux vaut gagner des points ailleurs puis revenir.",
            },
            {
              q: "Que manque-t-il dans la réponse « P = 24 × 3 = 72 » ?",
              options: ["Un schéma", "Le nom du professeur", "Rien", "L'unité, ici le watt (W)"],
              answer: 3,
              why: "Un résultat sans unité est incomplet : P = 72 W.",
            },
            {
              q: "Le verbe « justifier » demande :",
              options: ["une opinion", "une réponse d'un seul mot", "une preuve (document, valeur, calcul)", "un dessin"],
              answer: 2,
              why: "Justifier, c'est appuyer sa réponse sur un élément vérifiable.",
            },
            {
              q: "23 040 J correspondent à :",
              options: ["6,4 Wh", "64 Wh", "0,64 Wh", "384 Wh"],
              answer: 0,
              why: "1 Wh = 3 600 J, donc 23 040 ÷ 3 600 = 6,4 Wh.",
            },
            {
              q: "Laquelle de ces phrases utilise le vocabulaire attendu ?",
              options: ["Le moteur convertit l'énergie électrique en énergie mécanique", "Le moteur fait marcher le truc", "Le moteur donne de la force", "Le moteur fait bouger le portail grâce aux piles qui sont dedans"],
              answer: 0,
              why: "Elle nomme la fonction (convertir) et les formes d'énergie avec les termes exacts.",
            },
          ],
          trap: "Donner un résultat sans unité ou sans conclusion : « 72 » ne répond pas à la question ; il faut écrire « 72 W, inférieur à 100 W, le critère est respecté ».",
          method: "Entraînez-vous avec un chronomètre sur des sujets complets : notez l'heure de début, fixez-vous un temps par question, et repérez à la fin les questions où vous avez perdu du temps.",
        },
      ],
    },
  ],
}
