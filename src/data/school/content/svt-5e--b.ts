import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-5e',
  chapters: [
    /* ==================================================================== */
    /* LE CORPS PENDANT UN EFFORT                                             */
    /* ==================================================================== */
    {
      id: 'effort-physique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'adaptations-effort',
          title: 'Les adaptations de l\'organisme à l\'effort',
          minutes: 30,
          objectives: [
            "Mesurer et comparer la fréquence cardiaque et la fréquence ventilatoire au repos et pendant un effort.",
            "Relier l'augmentation de l'activité des muscles à leurs besoins accrus en dioxygène et en nutriments.",
            "Expliquer comment les appareils respiratoire et circulatoire s'adaptent pour approvisionner les muscles.",
            "Exploiter un tableau ou un graphique de mesures réalisées pendant un effort.",
          ],
          course: [
            {
              heading: "Pendant un effort, les muscles travaillent davantage",
              paragraphs: [
                "Quand vous courez, nagez ou montez un escalier, vos muscles se contractent beaucoup plus souvent et plus fort qu'au repos. Pour fonctionner, les cellules des muscles ont besoin d'énergie. Elles la tirent de la respiration cellulaire, que vous avez déjà étudiée : elles utilisent des nutriments, surtout du glucose, et du dioxygène, et elles rejettent du dioxyde de carbone.",
                "Plus un muscle travaille, plus il a besoin d'énergie. Pendant un effort, les muscles consomment donc davantage de dioxygène et de glucose, et ils rejettent davantage de dioxyde de carbone. Pour un adulte, la consommation de dioxygène passe d'environ 0,3 L par minute au repos à plus de 2 L par minute pendant un effort intense.",
                "Les muscles qui travaillent produisent aussi beaucoup de chaleur : c'est pour cela que vous avez chaud et que vous transpirez. La sueur, en s'évaporant à la surface de la peau, refroidit le corps.",
              ],
              box: { label: "À retenir", text: "Pendant un effort, les cellules des muscles consomment plus de dioxygène et de nutriments (glucose) et rejettent plus de dioxyde de carbone. Elles produisent aussi plus de chaleur, évacuée en partie par la transpiration." },
            },
            {
              heading: "La respiration s'accélère et s'amplifie",
              paragraphs: [
                "La fréquence ventilatoire est le nombre de mouvements respiratoires (une inspiration et une expiration) effectués en une minute. Au repos, elle est d'environ 12 à 20 mouvements par minute chez un adulte, un peu plus chez un enfant. Pendant un effort intense, elle peut dépasser 40 mouvements par minute.",
                "Le volume d'air qui entre dans les poumons à chaque inspiration augmente lui aussi : environ 0,5 L au repos, jusqu'à 2 ou 3 L pendant un effort. On dit que la respiration devient plus ample, plus profonde.",
                "En multipliant la fréquence ventilatoire par le volume d'air d'un mouvement, on obtient le débit ventilatoire : le volume d'air qui traverse les poumons en une minute. Par exemple, 15 mouvements de 0,5 L donnent 7,5 L par minute au repos, alors que 40 mouvements de 2,5 L donnent 100 L par minute pendant un effort. Plus d'air renouvelé dans les alvéoles, c'est plus de dioxygène qui passe dans le sang et plus de dioxyde de carbone éliminé.",
              ],
              box: { label: "Formule", text: "Débit ventilatoire (L/min) = fréquence ventilatoire (mouvements/min) × volume d'air par mouvement (L). Pendant un effort, les deux facteurs augmentent." },
            },
            {
              heading: "Le cœur bat plus vite et plus fort",
              paragraphs: [
                "La fréquence cardiaque est le nombre de battements du cœur en une minute. On la mesure en prenant le pouls, au poignet ou sur le côté du cou : on compte les battements pendant 15 secondes, puis on multiplie par 4. Au repos, elle se situe en général entre 60 et 100 battements par minute chez un collégien. Pendant un effort intense, elle peut approcher 200 battements par minute.",
                "On estime souvent la fréquence cardiaque maximale d'une personne par le calcul 220 moins son âge : environ 208 battements par minute à 12 ans. Ce n'est qu'une estimation, qui varie d'une personne à l'autre.",
                "À chaque battement, le cœur envoie aussi plus de sang dans les artères. Le débit cardiaque, c'est-à-dire le volume de sang envoyé par le cœur en une minute, passe ainsi d'environ 5 L par minute au repos à 20 L par minute ou plus pendant un effort intense.",
                "Enfin, le sang est mieux réparti : pendant l'effort, les vaisseaux des muscles qui travaillent s'élargissent et reçoivent la plus grande partie du sang, alors que les organes digestifs en reçoivent moins. Les muscles reçoivent ainsi beaucoup plus de dioxygène et de glucose, et leur dioxyde de carbone est évacué plus vite.",
              ],
              box: { label: "Formule", text: "Débit cardiaque (L/min) = fréquence cardiaque (battements/min) × volume de sang éjecté à chaque battement (L). Pendant un effort, les deux facteurs augmentent." },
            },
            {
              heading: "Des adaptations qui ont des limites",
              paragraphs: [
                "Quand l'intensité de l'effort augmente, la consommation de dioxygène augmente aussi, mais pas sans fin : elle atteint une valeur maximale, propre à chaque personne. Au-delà, l'organisme ne peut plus apporter davantage de dioxygène aux muscles, et l'effort ne peut pas être tenu longtemps.",
                "Après l'effort, la fréquence cardiaque et la fréquence ventilatoire ne reviennent pas tout de suite à leur valeur de repos : elles diminuent progressivement en quelques minutes. C'est la récupération. Toutes ces adaptations se font automatiquement, sans que vous ayez besoin d'y penser.",
              ],
              box: { label: "À retenir", text: "Pendant un effort, les appareils respiratoire et circulatoire s'adaptent ensemble : la respiration et le cœur accélèrent, ce qui augmente l'apport de dioxygène et de glucose aux muscles et l'élimination du dioxyde de carbone." },
            },
          ],
          keyPoints: [
            "Un muscle qui travaille consomme plus de dioxygène et de glucose, rejette plus de dioxyde de carbone et produit plus de chaleur.",
            "Fréquence ventilatoire : nombre de mouvements respiratoires par minute. Elle augmente pendant l'effort, comme le volume d'air de chaque mouvement.",
            "Débit ventilatoire = fréquence ventilatoire × volume d'air par mouvement.",
            "Fréquence cardiaque : nombre de battements du cœur par minute. On la mesure en prenant le pouls.",
            "Pendant l'effort, le débit cardiaque augmente et le sang est dirigé surtout vers les muscles.",
            "La consommation de dioxygène a une valeur maximale ; après l'effort, les fréquences reviennent peu à peu à leur valeur de repos.",
          ],
          example: {
            statement: "Données fictives. Au repos, Samir effectue 16 mouvements respiratoires par minute et inspire 0,5 L d'air à chaque mouvement. Après 5 minutes de course, il effectue 40 mouvements par minute et inspire 2 L d'air à chaque mouvement. Calculer son débit ventilatoire au repos et pendant l'effort, puis expliquer l'intérêt de cette modification.",
            solution: [
              "Débit ventilatoire = fréquence ventilatoire × volume d'air par mouvement.",
              "Au repos : 16 × 0,5 = 8 L d'air par minute.",
              "Pendant la course : 40 × 2 = 80 L d'air par minute.",
              "Comparaison : 80 ÷ 8 = 10. Le débit ventilatoire est multiplié par 10.",
              "Explication : pendant la course, les muscles de Samir consomment beaucoup plus de dioxygène. En renouvelant beaucoup plus d'air dans ses poumons, il fait passer plus de dioxygène dans son sang et élimine plus de dioxyde de carbone.",
              "Réponse : 8 L/min au repos, 80 L/min pendant l'effort ; cette augmentation permet de répondre aux besoins accrus des muscles en dioxygène.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Au repos, Inès compte 19 battements de son pouls en 15 secondes. Juste après une course de 3 minutes, elle compte 40 battements en 15 secondes. Calculer sa fréquence cardiaque au repos et après la course, puis dire de combien elle a augmenté.",
              hint: "Une minute contient 4 fois 15 secondes : multipliez chaque nombre de battements par 4.",
              solution: [
                "Au repos : 19 × 4 = 76 battements par minute.",
                "Après la course : 40 × 4 = 160 battements par minute.",
                "Augmentation : 160 - 76 = 84 battements par minute.",
                "Réponse : la fréquence cardiaque d'Inès passe de 76 à 160 battements par minute, soit une augmentation de 84 battements par minute.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On mesure la consommation de dioxygène d'une élève qui court sur un tapis roulant à des vitesses croissantes. À 4 km/h : 0,6 L/min ; à 8 km/h : 1,2 L/min ; à 12 km/h : 1,8 L/min ; à 14 km/h : 2,1 L/min ; à 16 km/h : 2,1 L/min. 1. Décrire l'évolution de la consommation de dioxygène. 2. Quelle est sa consommation maximale de dioxygène ? 3. Expliquer pourquoi elle ne peut pas courir longtemps à 16 km/h.",
              hint: "Regardez d'abord jusqu'à quelle vitesse la consommation augmente, puis ce qui se passe ensuite.",
              solution: [
                "1. De 4 à 14 km/h, la consommation de dioxygène augmente avec la vitesse (de 0,6 à 2,1 L/min). Entre 14 et 16 km/h, elle n'augmente plus : elle reste à 2,1 L/min.",
                "2. Sa consommation maximale de dioxygène est donc de 2,1 L/min.",
                "3. À 16 km/h, ses muscles auraient besoin de plus de dioxygène, mais son organisme ne peut pas lui en apporter davantage : la limite est atteinte.",
                "Réponse : la consommation augmente avec l'intensité de l'effort jusqu'à un maximum de 2,1 L/min ; au-delà, l'apport de dioxygène ne suit plus et l'effort ne peut pas durer.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données simplifiées. Au repos, le cœur d'un adolescent envoie 5 L de sang par minute ; 20 % de ce sang va aux muscles et 25 % aux organes digestifs. Pendant un effort intense, son cœur envoie 20 L de sang par minute ; 80 % va aux muscles et 4 % aux organes digestifs. 1. Calculer le volume de sang reçu chaque minute par les muscles, puis par les organes digestifs, au repos et pendant l'effort. 2. Par combien le débit de sang des muscles est-il multiplié ? 3. Expliquer l'intérêt de ces changements.",
              hint: "Pour calculer 20 % de 5 L, faites 5 × 20 ÷ 100. Comparez ensuite les résultats des deux situations.",
              solution: [
                "1. Muscles au repos : 5 × 20 ÷ 100 = 1 L/min. Muscles pendant l'effort : 20 × 80 ÷ 100 = 16 L/min.",
                "Organes digestifs au repos : 5 × 25 ÷ 100 = 1,25 L/min. Organes digestifs pendant l'effort : 20 × 4 ÷ 100 = 0,8 L/min.",
                "2. Muscles : 16 ÷ 1 = 16. Le débit de sang des muscles est multiplié par 16.",
                "3. Le cœur envoie plus de sang, et ce sang est surtout dirigé vers les muscles qui travaillent, au détriment des organes digestifs, moins utiles pendant l'effort.",
                "Les muscles reçoivent ainsi beaucoup plus de dioxygène et de glucose, et leur dioxyde de carbone est évacué plus vite.",
                "Réponse : 1 L/min puis 16 L/min pour les muscles (16 fois plus), 1,25 L/min puis 0,8 L/min pour les organes digestifs ; le sang est redistribué vers les muscles qui en ont besoin.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : que se passe-t-il dans le corps pendant un effort ?",
            statements: [
              { text: "Pendant un effort, les muscles consomment plus de dioxygène qu'au repos.", true: true, why: "Les muscles ont besoin de plus d'énergie, qu'ils tirent de la respiration cellulaire avec du dioxygène et du glucose." },
              { text: "Pendant un effort, seule la fréquence ventilatoire augmente ; le volume de chaque inspiration reste le même.", true: false, why: "La respiration s'accélère et devient aussi plus ample : le volume d'air de chaque mouvement augmente." },
              { text: "On peut mesurer sa fréquence cardiaque en prenant son pouls.", true: true, why: "Chaque battement du cœur provoque une pulsation que l'on sent au poignet ou au cou." },
              { text: "Pendant un effort, tous les organes reçoivent plus de sang qu'au repos.", true: false, why: "Le sang est redistribué : les muscles en reçoivent beaucoup plus, mais les organes digestifs en reçoivent moins." },
              { text: "La consommation de dioxygène peut augmenter sans aucune limite si l'on court plus vite.", true: false, why: "Elle atteint une valeur maximale, propre à chaque personne." },
              { text: "Transpirer pendant un effort permet de refroidir le corps.", true: true, why: "Les muscles produisent de la chaleur ; l'évaporation de la sueur sur la peau évacue une partie de cette chaleur." },
            ],
          },
          quiz: [
            {
              q: "Que mesure la fréquence ventilatoire ?",
              options: ["Le nombre de battements du cœur par minute", "Le volume total d'air contenu dans les deux poumons", "Le nombre de mouvements respiratoires par minute", "La quantité de sang envoyée par le cœur"],
              answer: 2,
              why: "La fréquence ventilatoire est le nombre de mouvements respiratoires (inspiration et expiration) effectués en une minute.",
            },
            {
              q: "Pourquoi le cœur bat-il plus vite pendant un effort ?",
              options: ["Pour apporter plus de dioxygène et de glucose aux muscles", "Pour faire baisser la température du corps pendant la course", "Pour envoyer plus de sang vers l'estomac", "Parce que les poumons ralentissent"],
              answer: 0,
              why: "Un débit de sang plus important apporte aux muscles le dioxygène et le glucose dont ils ont davantage besoin.",
            },
            {
              q: "On compte 30 battements en 15 secondes. Quelle est la fréquence cardiaque ?",
              options: ["7,5 battements par minute", "30 battements par minute", "60 battements par minute", "120 battements par minute"],
              answer: 3,
              why: "Une minute contient 4 fois 15 secondes : 30 × 4 = 120 battements par minute.",
            },
            {
              q: "Quel gaz les muscles rejettent-ils davantage pendant un effort ?",
              options: ["Le dioxygène", "Le dioxyde de carbone", "Le diazote", "La vapeur d'eau seulement"],
              answer: 1,
              why: "La respiration cellulaire produit du dioxyde de carbone ; plus elle est intense, plus les muscles en rejettent.",
            },
            {
              q: "Pendant un effort, quel organe reçoit moins de sang qu'au repos ?",
              options: ["Le muscle de la cuisse", "Le cœur lui-même", "L'intestin", "Le muscle du mollet"],
              answer: 2,
              why: "Pendant l'effort, le sang est dirigé vers les muscles qui travaillent ; les organes digestifs, comme l'intestin, en reçoivent moins.",
            },
          ],
          trap: "Croire que seule la fréquence augmente pendant l'effort. En réalité, le volume d'air de chaque inspiration et le volume de sang de chaque battement augmentent aussi, et le sang est redirigé vers les muscles.",
          method: "Pour exploiter des mesures, procédez toujours en trois temps : je décris (les valeurs avant et après, avec les unités), je calcule (une différence ou un rapport), puis j'explique en reliant le résultat aux besoins des muscles.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'hygiene-de-vie',
          title: 'Entraînement, récupération et hygiène de vie',
          minutes: 25,
          objectives: [
            "Expliquer les effets d'un entraînement régulier sur le cœur, la respiration et les muscles.",
            "Identifier les conditions d'un effort sans danger : échauffement, hydratation et récupération.",
            "Relier le sommeil, l'alimentation et l'activité physique au maintien de la santé.",
            "Argumenter sur les dangers du dopage pour la santé.",
          ],
          course: [
            {
              heading: "L'entraînement améliore les capacités de l'organisme",
              paragraphs: [
                "Une personne qui pratique un sport régulièrement s'entraîne : ses organes s'adaptent peu à peu à l'effort. Son cœur devient plus efficace et envoie plus de sang à chaque battement. Résultat : au repos, il a besoin de battre moins souvent. La fréquence cardiaque de repos d'un sportif entraîné est souvent plus basse que celle d'une personne qui ne fait pas de sport.",
                "L'entraînement développe aussi les muscles et leur capacité à utiliser le dioxygène. La consommation maximale de dioxygène augmente : la personne peut fournir un effort plus intense ou plus long avant d'atteindre ses limites.",
                "Enfin, après un effort, la fréquence cardiaque d'une personne entraînée revient plus vite à sa valeur de repos. On dit qu'elle récupère plus vite.",
              ],
              box: { label: "À retenir", text: "Un entraînement régulier rend le cœur plus efficace (fréquence cardiaque de repos plus basse), augmente la consommation maximale de dioxygène et accélère la récupération après l'effort." },
            },
            {
              heading: "Préparer et terminer un effort sans danger",
              paragraphs: [
                "L'échauffement prépare le corps à l'effort : quelques minutes d'exercices progressifs font monter peu à peu la fréquence cardiaque et la température des muscles. Les muscles échauffés sont plus souples, ce qui diminue le risque de blessure, comme une déchirure musculaire.",
                "L'hydratation est indispensable. En transpirant, le corps perd de l'eau et des sels minéraux. Il faut donc boire avant, pendant et après l'effort, par petites gorgées. Pour un effort ordinaire, l'eau suffit.",
                "La récupération fait partie de l'entraînement : après l'effort, le corps a besoin de repos, de sommeil et d'une alimentation adaptée pour réparer les muscles et refaire ses réserves. S'entraîner trop, sans repos, fatigue l'organisme et augmente le risque de blessure. Une douleur dans la poitrine, un malaise ou un essoufflement anormal sont des signaux d'alerte : il faut arrêter l'effort et prévenir un adulte.",
              ],
              box: { label: "Règle", text: "Un effort sans danger : s'échauffer progressivement, boire régulièrement, respecter ses limites, puis récupérer (repos, sommeil, alimentation)." },
            },
            {
              heading: "Une bonne hygiène de vie",
              paragraphs: [
                "L'hygiène de vie, ce sont les habitudes qui permettent de rester en bonne santé. L'Organisation mondiale de la santé recommande aux jeunes de 5 à 17 ans au moins 60 minutes par jour, en moyenne, d'activité physique d'intensité modérée à soutenue : marcher vite, faire du vélo, jouer au ballon, nager.",
                "Le sommeil permet au corps de récupérer et au cerveau de mémoriser ce qu'il a appris. Les spécialistes du sommeil recommandent environ 9 à 11 heures de sommeil par nuit entre 6 et 13 ans. Les écrans utilisés le soir retardent l'endormissement.",
                "Une alimentation variée et équilibrée apporte l'énergie et les matériaux dont les muscles ont besoin : féculents, fruits et légumes, produits laitiers, une source de protéines, et de l'eau. Le tabac, au contraire, diminue les performances : le monoxyde de carbone contenu dans la fumée réduit la quantité de dioxygène transportée par le sang.",
              ],
            },
            {
              heading: "Le dopage : tricher et mettre sa santé en danger",
              paragraphs: [
                "Le dopage consiste à utiliser des substances ou des méthodes interdites pour augmenter artificiellement ses performances. C'est une tricherie, interdite dans toutes les compétitions et contrôlée par des agences antidopage, comme l'Agence mondiale antidopage.",
                "Le dopage est aussi très dangereux pour la santé. Par exemple, l'EPO augmente le nombre de globules rouges : le sang devient plus épais, ce qui peut provoquer la formation de caillots et des accidents cardiaques. Les stéroïdes anabolisants font grossir les muscles, mais ils peuvent abîmer le cœur et le foie et perturber la croissance chez les jeunes.",
              ],
              box: { label: "Définition", text: "Le dopage est l'utilisation de substances ou de méthodes interdites pour améliorer artificiellement ses performances. Il est interdit et dangereux pour la santé." },
            },
          ],
          keyPoints: [
            "L'entraînement régulier abaisse la fréquence cardiaque de repos, augmente la consommation maximale de dioxygène et accélère la récupération.",
            "L'échauffement prépare le cœur et les muscles et limite les blessures.",
            "En transpirant, on perd de l'eau : il faut boire avant, pendant et après l'effort.",
            "La récupération (repos, sommeil, alimentation) fait partie de l'entraînement.",
            "Hygiène de vie : au moins 60 minutes d'activité physique par jour, un sommeil suffisant, une alimentation équilibrée, pas de tabac.",
            "Le dopage est une tricherie interdite et dangereuse pour la santé.",
          ],
          example: {
            statement: "Données fictives. En septembre, la fréquence cardiaque de repos d'Emma est de 82 battements par minute. Après trois mois de natation, trois fois par semaine, elle n'est plus que de 72 battements par minute. Calculer la diminution, puis expliquer ce changement.",
            solution: [
              "Diminution : 82 - 72 = 10 battements par minute.",
              "Au repos, les besoins des muscles d'Emma n'ont pas changé : son cœur doit toujours envoyer environ la même quantité de sang chaque minute.",
              "Grâce à l'entraînement, son cœur est devenu plus efficace : il envoie plus de sang à chaque battement.",
              "Il peut donc envoyer la même quantité de sang en battant moins souvent.",
              "Réponse : la fréquence cardiaque de repos d'Emma a diminué de 10 battements par minute, car l'entraînement a rendu son cœur plus efficace.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer les habitudes suivantes en deux groupes, favorables ou défavorables à la santé et aux performances sportives : s'échauffer avant un match ; dormir 6 heures par nuit à 12 ans ; boire de l'eau pendant un entraînement ; faire 60 minutes d'activité physique par jour ; jouer sur une console tard le soir ; fumer.",
              hint: "Pour chaque habitude, demandez-vous si elle aide le corps à se préparer, à récupérer ou à bien fonctionner.",
              solution: [
                "Favorables : s'échauffer avant un match (prépare le cœur et les muscles) ; boire de l'eau pendant un entraînement (compense l'eau perdue par la sueur) ; faire 60 minutes d'activité physique par jour (recommandation pour les jeunes).",
                "Défavorables : dormir 6 heures par nuit à 12 ans (c'est trop peu, il faut environ 9 à 11 heures) ; jouer sur une console tard le soir (retarde l'endormissement) ; fumer (diminue le transport du dioxygène par le sang).",
                "Réponse : trois habitudes favorables et trois défavorables, comme indiqué ci-dessus.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Deux élèves, Lucas et Nora, font le même effort. On mesure leur fréquence cardiaque (en battements par minute) à la fin de l'effort, puis chaque minute. Lucas : 160 ; 125 ; 100 ; 85 ; 75. Nora : 165 ; 150 ; 135 ; 120 ; 108. Au repos, Lucas est à 70 et Nora à 78. 1. Calculer la diminution de la fréquence cardiaque de chacun en 4 minutes. 2. Lequel des deux est le plus entraîné ? Justifier avec deux arguments.",
              hint: "Faites la différence entre la première et la dernière valeur. Pensez aussi à comparer les fréquences de repos.",
              solution: [
                "1. Lucas : 160 - 75 = 85 battements par minute en 4 minutes. Nora : 165 - 108 = 57 battements par minute en 4 minutes.",
                "2. Premier argument : la fréquence cardiaque de Lucas diminue plus vite, et après 4 minutes elle est presque revenue à sa valeur de repos (75 pour 70). Il récupère plus vite.",
                "Second argument : la fréquence cardiaque de repos de Lucas (70) est plus basse que celle de Nora (78).",
                "Réponse : Lucas est le plus entraîné, car il récupère plus vite et sa fréquence cardiaque de repos est plus basse.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Un footballeur de 60 kg perd environ 1,5 L de sueur par heure de match. Les médecins du sport considèrent qu'une perte d'eau supérieure à environ 2 % de la masse du corps diminue les performances. 1 L d'eau a une masse de 1 kg. 1. Quelle quantité d'eau perd-il pendant un match de 90 minutes ? 2. Quelle perte d'eau, en kg, correspond à 2 % de sa masse ? 3. Quelle quantité d'eau doit-il boire au minimum pendant le match pour ne pas dépasser ce seuil ?",
              hint: "90 minutes, c'est 1,5 heure. Pour 2 % de 60 kg, calculez 60 × 2 ÷ 100.",
              solution: [
                "1. Durée : 90 min = 1,5 h. Perte : 1,5 × 1,5 = 2,25 L d'eau, soit 2,25 kg.",
                "2. Seuil : 60 × 2 ÷ 100 = 1,2 kg.",
                "3. Sans boire, il perdrait 2,25 kg, ce qui dépasse le seuil de 1,2 kg. Il doit donc compenser au moins : 2,25 - 1,2 = 1,05 kg, soit 1,05 L d'eau.",
                "Vérification : 2,25 - 1,05 = 1,2 kg, la perte reste bien égale au seuil, sans le dépasser.",
                "Réponse : il perd 2,25 L d'eau pendant le match ; il doit boire au moins 1,05 L pendant le match (en réalité un peu plus, par petites gorgées régulières).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à ce qu'elle apporte ou provoque.",
            pairs: [
              { left: "Échauffement", right: "Prépare progressivement le cœur et les muscles et limite les blessures" },
              { left: "Hydratation", right: "Compense l'eau perdue par la transpiration" },
              { left: "Récupération", right: "Laisse au corps le temps de réparer les muscles et de refaire ses réserves" },
              { left: "Sommeil", right: "Permet de récupérer et de mémoriser ce que l'on a appris" },
              { left: "Entraînement régulier", right: "Abaisse la fréquence cardiaque de repos" },
              { left: "Dopage", right: "Tricherie interdite, dangereuse pour le cœur et le foie" },
            ],
          },
          quiz: [
            {
              q: "Chez une personne entraînée, la fréquence cardiaque de repos est souvent :",
              options: ["plus élevée", "plus basse", "exactement la même", "impossible à mesurer"],
              answer: 1,
              why: "Le cœur entraîné envoie plus de sang à chaque battement : il peut battre moins souvent au repos.",
            },
            {
              q: "À quoi sert principalement l'échauffement ?",
              options: ["À perdre du poids juste avant le match", "À fatiguer les muscles", "À remplacer l'entraînement", "À préparer le cœur et les muscles"],
              answer: 3,
              why: "L'échauffement fait monter progressivement la fréquence cardiaque et la température des muscles, ce qui limite les blessures.",
            },
            {
              q: "Combien de temps d'activité physique par jour l'OMS recommande-t-elle aux 5 à 17 ans ?",
              options: ["Au moins 60 minutes", "Au moins 10 minutes", "Au moins 3 heures", "Une heure par semaine"],
              answer: 0,
              why: "L'OMS recommande au moins 60 minutes par jour, en moyenne, d'activité physique modérée à soutenue.",
            },
            {
              q: "Pourquoi l'EPO utilisée pour se doper est-elle dangereuse ?",
              options: ["Elle détruit les muscles", "Elle empêche de transpirer", "Elle épaissit le sang", "Elle fait baisser le pouls"],
              answer: 2,
              why: "L'EPO augmente le nombre de globules rouges : le sang devient plus épais, ce qui favorise les caillots et les accidents cardiaques.",
            },
            {
              q: "Pourquoi faut-il boire pendant un effort long ?",
              options: ["Pour digérer plus vite", "Pour compenser l'eau perdue par la sueur", "Pour accélérer le cœur", "Pour éviter de respirer trop vite pendant l'effort"],
              answer: 1,
              why: "La transpiration fait perdre de l'eau et des sels minéraux ; une perte trop importante diminue les performances.",
            },
          ],
          trap: "Penser que le repos est du temps perdu pour progresser. La récupération (repos, sommeil, alimentation) fait partie de l'entraînement : sans elle, le corps s'épuise et se blesse.",
          method: "Pour justifier qu'une personne est entraînée, cherchez deux indices dans les données : une fréquence cardiaque de repos plus basse et un retour plus rapide à cette valeur après l'effort.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES PAYSAGES ET L'ÉROSION                                              */
    /* ==================================================================== */
    {
      id: 'paysages-erosion',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'erosion',
          title: 'L\'érosion façonne les paysages',
          minutes: 30,
          objectives: [
            "Définir l'érosion comme l'ensemble des phénomènes qui dégradent les roches et en enlèvent les débris.",
            "Identifier les agents de l'érosion (eau, gel, vent, glaciers, êtres vivants) à partir de l'observation d'un paysage.",
            "Relier la vitesse de l'érosion à la nature des roches, au climat et à la végétation.",
            "Expliquer comment certaines activités humaines accélèrent l'érosion.",
          ],
          course: [
            {
              heading: "Des paysages qui changent lentement",
              paragraphs: [
                "Un paysage, c'est l'ensemble de ce que l'on voit d'un lieu : le relief (montagnes, vallées, falaises), les roches, l'eau, la végétation et les constructions humaines. Les paysages semblent immobiles, mais ils changent sans cesse, le plus souvent très lentement, à l'échelle de milliers ou de millions d'années.",
                "Les roches qui affleurent, c'est-à-dire qui apparaissent à la surface du sol, sont attaquées en permanence par la pluie, le gel, le vent ou les racines. Elles se fragmentent ou se décomposent sur place : c'est l'altération. Les débris ainsi formés sont ensuite arrachés et emportés : c'est l'ablation.",
                "L'ensemble de ces phénomènes s'appelle l'érosion. Elle use les reliefs : les montagnes jeunes ont des sommets pointus, alors que les montagnes très anciennes, usées par des millions d'années d'érosion, ont des formes arrondies, comme le Massif central ou la Bretagne.",
              ],
              box: { label: "Définition", text: "L'érosion est l'ensemble des phénomènes naturels qui dégradent les roches (altération) et en enlèvent les débris (ablation). Elle façonne les paysages." },
            },
            {
              heading: "L'eau, principal agent de l'érosion",
              paragraphs: [
                "L'eau de pluie qui ruisselle sur les pentes arrache de petites particules de sol et de roche. Rassemblée en ruisseaux puis en rivières, elle creuse peu à peu des vallées. Sur les côtes, les vagues frappent le pied des falaises, les creusent et provoquent des éboulements : la falaise recule.",
                "L'eau agit aussi chimiquement. L'eau de pluie, légèrement acide car elle contient du dioxyde de carbone dissous, dissout lentement le calcaire. Elle crée ainsi des fissures élargies, des gouffres et des grottes dans les régions calcaires.",
                "Le granite, lui, ne se dissout pas, mais l'eau transforme certains de ses minéraux en argile. Les grains de quartz, très résistants, se détachent : le granite se transforme en un sable grossier appelé arène granitique. Il reste parfois de grosses boules de granite arrondies, entassées les unes sur les autres : on parle de chaos granitique, comme à Huelgoat, en Bretagne.",
              ],
              box: { label: "À retenir", text: "L'eau érode les roches de deux façons : mécaniquement (ruissellement, rivières, vagues) et chimiquement (dissolution du calcaire, transformation du granite en arène)." },
            },
            {
              heading: "Le gel, le vent, les glaciers et les êtres vivants",
              paragraphs: [
                "En montagne, l'eau s'infiltre dans les fissures des roches. Quand elle gèle, elle augmente de volume (d'environ 9 %) et agit comme un coin qui écarte la fissure. Après de nombreux cycles de gel et de dégel, des morceaux de roche anguleux se détachent et s'accumulent au pied des parois : ce sont les éboulis.",
                "Dans les déserts, le vent soulève le sable et le projette contre les roches, qu'il use comme une ponceuse. Les glaciers, d'énormes masses de glace qui glissent lentement, arrachent et broient les roches sur leur passage ; ils creusent des vallées en forme de U.",
                "Les êtres vivants participent aussi à l'érosion : les racines des arbres s'enfoncent dans les fissures et les élargissent en grossissant, et les lichens qui couvrent les rochers attaquent lentement leur surface.",
              ],
              box: { label: "Repère", text: "Agents de l'érosion : l'eau (pluie, rivières, mer), le gel, le vent, les glaciers et les êtres vivants." },
            },
            {
              heading: "Une érosion plus ou moins rapide, accélérée par l'être humain",
              paragraphs: [
                "La vitesse de l'érosion dépend de plusieurs facteurs : la nature de la roche (le granite est plus résistant que l'argile ou le sable), le climat (fortes pluies, nombreux cycles de gel et de dégel), la pente et la végétation. Les plantes protègent le sol : leurs feuilles freinent la pluie et leurs racines retiennent la terre.",
                "Certaines activités humaines accélèrent l'érosion : déboiser une pente, arracher les haies, laisser un champ sans végétation pendant l'hiver ou imperméabiliser les sols. L'eau de pluie ruisselle alors plus fort et emporte la terre fertile, ce qui peut provoquer des coulées de boue.",
                "On peut au contraire limiter l'érosion en plantant des haies, en conservant une couverture végétale sur les champs, en aménageant des terrasses sur les pentes ou en protégeant les dunes avec des clôtures et des plantes.",
              ],
              box: { label: "À retenir", text: "La végétation protège les sols de l'érosion. En la supprimant, l'être humain accélère l'érosion et la perte de terre fertile." },
            },
          ],
          keyPoints: [
            "L'érosion dégrade les roches (altération) et emporte leurs débris (ablation) : elle façonne les paysages.",
            "L'eau est le principal agent : ruissellement, rivières, vagues, dissolution du calcaire, transformation du granite en arène.",
            "Le gel fait éclater les roches (éboulis), le vent les use, les glaciers creusent des vallées en U, les racines élargissent les fissures.",
            "La vitesse de l'érosion dépend de la roche, du climat, de la pente et de la végétation.",
            "Le déboisement et les sols laissés nus accélèrent l'érosion ; les haies et la végétation la limitent.",
          ],
          example: {
            statement: "En haute montagne, au pied d'une paroi rocheuse, on observe un grand amas de morceaux de roche aux arêtes vives (éboulis). Dans ce lieu, la température passe très souvent au-dessous puis au-dessus de 0 °C. Expliquer la formation de ces éboulis.",
            solution: [
              "Observation : les morceaux de roche ont des arêtes vives, ils n'ont donc pas été usés par un long transport ; ils sont tombés de la paroi située juste au-dessus.",
              "L'eau de pluie ou de fonte des neiges s'infiltre dans les fissures de la paroi.",
              "Quand la température descend au-dessous de 0 °C, cette eau gèle et augmente de volume : elle écarte les bords de la fissure.",
              "Quand elle dégèle, l'eau s'infiltre un peu plus profondément, puis gèle à nouveau. Les cycles de gel et de dégel élargissent la fissure peu à peu.",
              "Réponse : les éboulis sont formés par le gel, qui fait éclater la roche ; les morceaux détachés tombent et s'accumulent au pied de la paroi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque observation, nommer l'agent de l'érosion responsable. a) Les sculptures en calcaire d'une vieille église sont devenues floues après des siècles de pluie. b) Un rocher est fendu par les racines d'un arbre. c) En plein désert, des rochers sont polis par les grains de sable. d) Une falaise du bord de mer s'écroule pendant une tempête. e) Une vallée de montagne a la forme d'un U.",
              hint: "Repérez le lieu (désert, montagne, mer) et ce qui agit sur la roche : la pluie, les vagues, le vent, la glace ou un être vivant.",
              solution: [
                "a) L'eau de pluie, qui dissout lentement le calcaire.",
                "b) Un être vivant : les racines de l'arbre élargissent la fissure.",
                "c) Le vent, qui projette les grains de sable contre les rochers.",
                "d) La mer : les vagues creusent le pied de la falaise et provoquent son écroulement.",
                "e) Un glacier, qui a creusé cette vallée en forme de U.",
                "Réponse : eau de pluie, être vivant, vent, vagues, glacier.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une falaise recule en moyenne de 25 cm par an. Une maison est construite à 12 m du bord de la falaise. 1. Dans combien d'années, en moyenne, le bord de la falaise atteindra-t-il la maison ? 2. À quelle distance du bord se trouvera la maison dans 20 ans ? 3. Pourquoi ce calcul n'est-il qu'une estimation ?",
              hint: "Convertissez 12 m en centimètres avant de diviser. Pour la question 2, calculez le recul total en 20 ans.",
              solution: [
                "1. 12 m = 1 200 cm. Nombre d'années : 1 200 ÷ 25 = 48 ans.",
                "2. Recul en 20 ans : 20 × 25 = 500 cm, soit 5 m. Distance restante : 12 - 5 = 7 m.",
                "3. C'est une moyenne : en réalité, la falaise recule souvent par éboulements soudains, par exemple lors d'une tempête. Elle peut perdre plusieurs mètres d'un coup, puis rester stable pendant plusieurs années.",
                "Réponse : environ 48 ans ; la maison sera à 7 m du bord dans 20 ans ; le recul réel est irrégulier.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. On remplit deux bacs inclinés de la même terre, avec la même pente. Le bac A est couvert de gazon, le bac B est laissé nu. On les arrose avec la même quantité d'eau, de la même façon, et on récupère l'eau qui s'écoule en bas. Après séchage, on pèse la terre emportée : 20 g pour le bac A, 260 g pour le bac B. 1. Quelle question cette expérience cherche-t-elle à résoudre ? 2. Pourquoi faut-il garder la même terre, la même pente et le même arrosage ? 3. Combien de fois plus de terre le bac nu a-t-il perdu ? 4. Conclure, puis expliquer pourquoi déboiser une colline peut provoquer des coulées de boue.",
              hint: "Une seule chose change entre les deux bacs : c'est elle que l'on teste. Pour la question 3, divisez une masse par l'autre.",
              solution: [
                "1. L'expérience cherche à savoir si la végétation protège le sol de l'érosion par l'eau de pluie.",
                "2. Pour que la seule différence entre les bacs soit la présence de végétation. Si un résultat change, on saura que c'est à cause d'elle.",
                "3. 260 ÷ 20 = 13 : le bac nu a perdu 13 fois plus de terre.",
                "4. Conclusion : la végétation protège le sol ; ses feuilles freinent la pluie et ses racines retiennent la terre.",
                "Sur une colline déboisée, plus rien ne retient le sol : lors de fortes pluies, l'eau ruisselle et emporte de grandes quantités de terre, ce qui peut former des coulées de boue.",
                "Réponse : la végétation réduit fortement l'érosion (13 fois moins de terre perdue ici), et le déboisement l'accélère.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque agent de l'érosion à son action sur les roches.",
            pairs: [
              { left: "Le gel", right: "Fait éclater les roches en gelant dans leurs fissures" },
              { left: "L'eau de pluie", right: "Dissout lentement le calcaire et forme des grottes" },
              { left: "Les vagues", right: "Creusent le pied des falaises, qui reculent" },
              { left: "Le vent", right: "Projette le sable et use les roches des déserts" },
              { left: "Les glaciers", right: "Creusent des vallées en forme de U" },
              { left: "Les racines", right: "Élargissent les fissures en grossissant" },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on l'érosion ?",
              options: ["La dégradation des roches et l'enlèvement de leurs débris", "La formation lente de nouvelles montagnes au cours des millions d'années", "Le dépôt de sable au fond de la mer, loin des côtes", "La fabrication de roches par les volcans"],
              answer: 0,
              why: "L'érosion regroupe l'altération des roches et l'ablation, c'est-à-dire l'enlèvement de leurs débris.",
            },
            {
              q: "Pourquoi le gel fait-il éclater les roches ?",
              options: ["Parce que la glace est plus lourde que l'eau", "Parce que le froid rend les roches liquides", "Parce que l'eau augmente de volume en gelant", "Parce que la glace dissout la roche"],
              answer: 2,
              why: "En gelant dans une fissure, l'eau augmente de volume d'environ 9 % et écarte les bords de la fissure.",
            },
            {
              q: "Quelle roche l'eau de pluie dissout-elle lentement ?",
              options: ["Le granite rose", "Le calcaire", "Le quartz", "Le basalte"],
              answer: 1,
              why: "L'eau de pluie, légèrement acide, dissout le calcaire ; elle forme ainsi des grottes et des gouffres.",
            },
            {
              q: "Quelle action humaine accélère l'érosion des sols ?",
              options: ["Planter des haies", "Garder de l'herbe sur les pentes", "Construire des terrasses", "Déboiser une colline"],
              answer: 3,
              why: "Sans arbres, plus rien ne freine la pluie ni ne retient la terre : l'eau emporte le sol.",
            },
            {
              q: "Qu'est-ce que l'arène granitique ?",
              options: ["Un sable issu de l'altération du granite", "Une grotte creusée dans le granite", "Une montagne de granite très pointue", "Une coulée de lave refroidie au fond d'un volcan"],
              answer: 0,
              why: "L'eau transforme certains minéraux du granite en argile et libère les grains de quartz : on obtient un sable grossier, l'arène.",
            },
          ],
          trap: "Croire que l'érosion est rapide et due seulement aux tempêtes. Elle agit surtout lentement et en permanence, et l'eau n'est pas son seul agent : le gel, le vent, les glaciers et les êtres vivants y participent.",
          method: "Pour identifier un agent de l'érosion sur une photo, posez-vous trois questions : où est ce lieu (montagne, désert, littoral) ? quelle est la forme des débris (anguleux ou arrondis) ? qu'est-ce qui agit ici sur la roche (eau, glace, vent, plantes) ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'transport-sedimentation',
          title: 'Transport et dépôt des sédiments',
          minutes: 30,
          objectives: [
            "Décrire le transport des sédiments par l'eau, le vent et les glaciers.",
            "Relier la taille des sédiments transportés ou déposés à la vitesse du courant.",
            "Expliquer la formation de couches de sédiments là où le courant ralentit.",
            "Appliquer le principe de superposition pour comparer l'âge de couches de sédiments.",
          ],
          course: [
            {
              heading: "Des débris en voyage : les sédiments",
              paragraphs: [
                "Les débris arrachés par l'érosion sont appelés des sédiments. On les classe selon leur taille, du plus gros au plus fin : les blocs, les galets, les graviers, les sables (grains de quelques centièmes de millimètre à 2 mm), les limons et les argiles, si fines qu'on ne distingue pas leurs particules à l'œil nu.",
                "Les rivières sont les principaux transporteurs de sédiments. Les plus gros roulent ou rebondissent sur le fond, les plus fins restent en suspension dans l'eau, qui devient boueuse après un orage. Une partie de la roche voyage même dissoute dans l'eau, invisible : c'est le cas du calcaire dissous.",
                "Le vent transporte surtout des sables et des poussières : des poussières du Sahara arrivent parfois jusqu'en France et colorent le ciel en orange. Les glaciers, eux, transportent des débris de toutes tailles, des blocs énormes jusqu'à la poussière de roche.",
              ],
              box: { label: "Définition", text: "Un sédiment est un débris (bloc, galet, sable, argile...) ou une substance dissoute, provenant de l'érosion, qui est transporté puis déposé." },
            },
            {
              heading: "La vitesse du courant décide de ce qui est transporté",
              paragraphs: [
                "Plus le courant est rapide, plus il peut transporter de gros sédiments. Un torrent de montagne déplace des galets et même des blocs lors des crues. Une rivière de plaine, plus lente, ne transporte plus que des sables et des boues.",
                "Quand le courant ralentit, les sédiments se déposent dans l'ordre : les plus gros d'abord, les plus fins en dernier. Le long d'une rivière, on trouve donc plutôt des blocs et des galets en amont, près de la source, puis des sables, et enfin des boues fines près de l'embouchure. On dit que les sédiments sont triés selon leur taille.",
                "Pendant le transport, les débris se heurtent et frottent les uns contre les autres : ils s'usent et s'arrondissent. Un galet bien rond a souvent voyagé longtemps, alors qu'un débris anguleux a peu voyagé.",
              ],
              box: { label: "Règle", text: "Courant rapide : gros sédiments transportés. Quand le courant ralentit, les sédiments se déposent, les plus gros en premier, les plus fins en dernier." },
            },
            {
              heading: "Où les sédiments se déposent : la sédimentation",
              paragraphs: [
                "Le dépôt des sédiments s'appelle la sédimentation. Il se produit là où l'eau ralentit : à l'intérieur des courbes d'une rivière (les méandres), dans les lacs, à l'embouchure des fleuves, et surtout au fond des mers et des océans, où aboutit la plus grande partie des sédiments.",
                "Les sédiments se déposent en couches à peu près horizontales, appelées strates. Chaque couche correspond à une période de dépôt. La sédimentation est en général très lente : il faut souvent des milliers d'années pour former une couche épaisse de quelques mètres.",
                "L'être humain modifie aussi ce voyage : les barrages retiennent les sédiments dans leur lac de retenue, si bien qu'en aval, les rivières et les plages en reçoivent moins.",
              ],
            },
            {
              heading: "Lire une série de couches",
              paragraphs: [
                "Dans une série de couches qui n'ont pas été bousculées, chaque nouvelle couche se dépose au-dessus de la précédente. La couche du bas s'est donc déposée la première : c'est la plus ancienne. La couche du haut est la plus récente. C'est le principe de superposition.",
                "La nature de chaque couche renseigne aussi sur les conditions de son dépôt : une couche de galets indique un courant rapide, une couche d'argile indique une eau très calme. En lisant les couches de bas en haut, on lit donc une histoire, dans l'ordre où elle s'est déroulée.",
              ],
              box: { label: "Propriété", text: "Principe de superposition : dans une série de couches non bousculées, une couche est plus récente que celle qui se trouve en dessous d'elle." },
            },
          ],
          keyPoints: [
            "Les sédiments sont les débris de l'érosion : blocs, galets, graviers, sables, limons, argiles, et substances dissoutes.",
            "L'eau, le vent et les glaciers transportent les sédiments ; les rivières en sont les principaux transporteurs.",
            "Plus le courant est rapide, plus les sédiments transportés sont gros. Quand il ralentit, les plus gros se déposent en premier.",
            "Le transport use et arrondit les débris.",
            "La sédimentation forme des couches (strates), surtout au fond des mers et des lacs.",
            "Principe de superposition : la couche du dessous est la plus ancienne.",
          ],
          example: {
            statement: "On place dans un bocal d'eau un mélange de graviers, de sable et d'argile. On ferme, on agite vigoureusement, puis on laisse reposer. Décrire et expliquer ce que l'on observe.",
            solution: [
              "Observation : les graviers tombent au fond presque immédiatement, puis le sable se dépose par-dessus en quelques secondes.",
              "L'eau reste trouble longtemps : l'argile se dépose très lentement et forme une couche fine tout en haut.",
              "Explication : quand on cesse d'agiter, l'eau ralentit puis s'immobilise. Les sédiments les plus gros et les plus lourds se déposent en premier, les plus fins en dernier.",
              "On obtient trois couches triées selon la taille des sédiments, comme lorsqu'un courant ralentit dans la nature.",
              "Réponse : de bas en haut, graviers, sable, puis argile ; les sédiments se déposent dans l'ordre de leur taille, du plus gros au plus fin.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ranger ces sédiments du plus gros au plus fin : sable, bloc, argile, galet, gravier. Puis indiquer lesquels on trouve surtout dans un torrent de montagne et lesquels on trouve surtout près de l'embouchure d'un fleuve.",
              hint: "Un courant rapide transporte et dépose de gros sédiments ; un courant lent ne dépose que des sédiments fins.",
              solution: [
                "Du plus gros au plus fin : bloc, galet, gravier, sable, argile.",
                "Dans un torrent de montagne, le courant est rapide : on y trouve surtout des blocs et des galets.",
                "Près de l'embouchure, le courant est lent : on y trouve surtout du sable fin et de l'argile (des boues).",
                "Réponse : bloc, galet, gravier, sable, argile ; blocs et galets dans le torrent, sables fins et argiles près de l'embouchure.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives et simplifiées. Dans une rivière, chaque sédiment se dépose quand la vitesse du courant descend au-dessous d'une certaine valeur : 50 cm/s pour le gravier, 20 cm/s pour le sable, 5 cm/s pour le limon, 0,5 cm/s pour l'argile. On mesure la vitesse du courant en trois endroits : A (torrent) 150 cm/s ; B (plaine) 30 cm/s ; C (estuaire) 3 cm/s. Quels sédiments se déposent en A, en B et en C, sachant que l'eau arrive en A chargée des quatre sédiments ?",
              hint: "En chaque endroit, comparez la vitesse mesurée à chaque valeur seuil : si la vitesse est plus petite que le seuil, ce sédiment se dépose.",
              solution: [
                "En A, 150 cm/s est plus grand que tous les seuils : aucun de ces sédiments ne se dépose, tous sont transportés.",
                "En B, 30 cm/s est inférieur à 50 cm/s mais supérieur à 20 cm/s : le gravier se dépose ; le sable, le limon et l'argile continuent leur voyage.",
                "En C, 3 cm/s est inférieur à 20 cm/s et à 5 cm/s : le sable et le limon se déposent. Mais 3 cm/s est supérieur à 0,5 cm/s : l'argile reste en suspension.",
                "Réponse : rien ne se dépose en A ; le gravier se dépose en B ; le sable et le limon se déposent en C ; l'argile part plus loin, en mer, où l'eau est plus calme.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Dans une falaise, on observe cinq couches de sédiments horizontales, non bousculées. De bas en haut : couche 1, galets ; couche 2, sable ; couche 3, argile, épaisse de 3 m ; couche 4, sable ; couche 5, galets. 1. Quelle est la couche la plus ancienne ? la plus récente ? Justifier. 2. Comment la vitesse du courant a-t-elle évolué de la couche 1 à la couche 3, puis de la couche 3 à la couche 5 ? 3. La couche d'argile s'est déposée à la vitesse de 0,5 mm par an. Combien de temps a duré son dépôt ?",
              hint: "Appliquez le principe de superposition, puis reliez la taille des sédiments à la vitesse du courant. Pour la question 3, convertissez 3 m en millimètres.",
              solution: [
                "1. D'après le principe de superposition, la couche 1 (en bas) est la plus ancienne et la couche 5 (en haut) est la plus récente.",
                "2. De la couche 1 à la couche 3, les sédiments sont de plus en plus fins (galets, sable, argile) : le courant a ralenti, l'eau est devenue de plus en plus calme.",
                "De la couche 3 à la couche 5, les sédiments redeviennent de plus en plus gros (argile, sable, galets) : le courant s'est à nouveau accéléré.",
                "3. 3 m = 3 000 mm. Durée : 3 000 ÷ 0,5 = 6 000 ans.",
                "Réponse : couche 1 la plus ancienne, couche 5 la plus récente ; le courant a ralenti puis s'est accéléré ; le dépôt de l'argile a duré 6 000 ans.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le voyage d'un grain de sable, de la montagne jusqu'à la mer.",
            items: [
              "L'eau de pluie altère le granite d'une montagne.",
              "Un grain de quartz se détache de la roche.",
              "L'eau qui ruisselle l'entraîne jusqu'à un torrent.",
              "La rivière le transporte vers l'aval, en l'arrondissant.",
              "Le courant ralentit à l'embouchure et le grain se dépose.",
              "D'autres sédiments le recouvrent, couche après couche.",
            ],
          },
          quiz: [
            {
              q: "Où trouve-t-on surtout de gros galets le long d'une rivière ?",
              options: ["À l'embouchure, dans la mer", "Au milieu de la plaine, loin des montagnes", "Dans les lacs très calmes", "En amont, près de la source"],
              answer: 3,
              why: "En amont, le courant est rapide : il transporte et dépose de gros sédiments. Plus loin, le courant ralentit et seuls les sédiments fins arrivent.",
            },
            {
              q: "Que se passe-t-il quand le courant d'une rivière ralentit ?",
              options: ["Les sédiments les plus fins se déposent en premier", "Les sédiments les plus gros se déposent en premier", "Tous les sédiments remontent à la surface", "Les sédiments se dissolvent"],
              answer: 1,
              why: "Les plus gros sédiments ont besoin d'un courant rapide pour être transportés : ils se déposent dès que le courant ralentit.",
            },
            {
              q: "Un galet bien arrondi indique qu'il :",
              options: ["vient de se détacher", "a été taillé par l'être humain", "a voyagé longtemps", "s'est formé dans un volcan"],
              answer: 2,
              why: "Pendant le transport, les débris se heurtent et s'usent : plus le voyage est long, plus ils sont arrondis.",
            },
            {
              q: "Dans une série de couches non bousculées, quelle couche est la plus ancienne ?",
              options: ["Celle du bas", "Celle du haut", "Celle du milieu", "La plus épaisse de toutes"],
              answer: 0,
              why: "Chaque couche se dépose sur la précédente : celle du bas s'est déposée en premier (principe de superposition).",
            },
            {
              q: "Où se dépose la plus grande partie des sédiments ?",
              options: ["Au sommet des montagnes", "Dans les grottes calcaires", "Au fond des mers et des océans", "Dans les nuages, avec la pluie"],
              answer: 2,
              why: "Les rivières finissent dans les mers et les océans, où l'eau calme laisse se déposer les sédiments.",
            },
          ],
          trap: "Inverser l'ordre de dépôt en pensant que les sédiments fins se déposent en premier. C'est l'inverse : quand le courant ralentit, les plus gros se déposent d'abord ; les plus fins, comme l'argile, ont besoin d'une eau presque immobile.",
          method: "Pour lire une série de couches, partez toujours du bas (le plus ancien) et remontez. Pour chaque couche, notez la taille des sédiments et traduisez-la en vitesse du courant : gros sédiments, courant rapide ; sédiments fins, eau calme.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'roches-sedimentaires-fossiles',
          title: 'Des roches sédimentaires et des fossiles',
          minutes: 30,
          objectives: [
            "Expliquer la transformation des sédiments en roche sédimentaire (compaction et cimentation).",
            "Identifier quelques roches sédimentaires et les sédiments dont elles proviennent.",
            "Définir un fossile et expliquer les conditions de sa formation.",
            "Utiliser des fossiles pour reconstituer un environnement du passé.",
          ],
          course: [
            {
              heading: "Des sédiments à la roche",
              paragraphs: [
                "Au fond d'un lac ou d'une mer, les couches de sédiments s'empilent pendant des milliers, puis des millions d'années. Le poids des couches supérieures tasse les sédiments situés en dessous et chasse une partie de l'eau qu'ils contiennent : c'est la compaction.",
                "Dans l'eau qui circule entre les grains, des substances dissoutes se déposent sous forme de cristaux et collent les grains entre eux, comme un ciment : c'est la cimentation. Les sédiments meubles deviennent ainsi une roche dure et cohérente.",
                "L'ensemble de ces transformations s'appelle la diagenèse. Elle est très lente : il faut en général des milliers à des millions d'années pour transformer des sédiments en roche.",
              ],
              box: { label: "Définition", text: "Une roche sédimentaire est une roche formée par l'accumulation de sédiments, transformés en roche dure par compaction et cimentation. Elle est souvent disposée en couches." },
            },
            {
              heading: "Quelques roches sédimentaires",
              paragraphs: [
                "Chaque roche sédimentaire garde la trace des sédiments dont elle provient. Le sable cimenté donne le grès ; des galets cimentés donnent un conglomérat (appelé poudingue quand les galets sont arrondis) ; la boue d'argile tassée donne l'argilite.",
                "Le calcaire se forme surtout dans les mers, par l'accumulation de coquilles et de squelettes d'êtres vivants marins, ou par le dépôt de calcaire dissous dans l'eau. La craie est un calcaire très fin, formé de minuscules plaques produites par des algues microscopiques. Le charbon, lui, provient de l'accumulation de débris de végétaux dans d'anciens marécages.",
                "Pour reconnaître un calcaire, on dépose une goutte d'acide chlorhydrique dilué sur la roche, avec des lunettes et des gants : un calcaire fait une effervescence (il « mousse ») car il libère du dioxyde de carbone. Un grès ou une argilite ne réagissent pas.",
              ],
              box: { label: "Repère", text: "Sable → grès. Galets → conglomérat. Argile → argilite. Coquilles et squelettes marins → calcaire. Débris de végétaux → charbon. Un calcaire fait effervescence avec l'acide chlorhydrique." },
            },
            {
              heading: "Les fossiles, des traces de vie du passé",
              paragraphs: [
                "Un fossile est un reste (coquille, os, dent, tronc) ou une trace (empreinte, terrier, trace de pas) d'un être vivant ancien, conservé dans une roche. On les trouve presque toujours dans les roches sédimentaires.",
                "Pour qu'un fossile se forme, l'être vivant doit être enfoui rapidement sous des sédiments, à l'abri de l'air et des animaux qui mangent les cadavres. Ses parties molles se décomposent ; ses parties dures (coquille, os) se conservent ou sont lentement remplacées par des minéraux. Parfois, seule l'empreinte de l'être vivant reste dans la roche.",
                "Ces conditions sont rarement réunies : la plupart des êtres vivants ne deviennent jamais des fossiles. Certains fossiles appartiennent à des groupes qui ont aujourd'hui disparu, comme les ammonites (des mollusques marins à coquille enroulée) ou les trilobites.",
              ],
              box: { label: "Définition", text: "Un fossile est un reste ou une trace d'un être vivant ancien, conservé dans une roche, le plus souvent sédimentaire." },
            },
            {
              heading: "Les fossiles racontent les paysages du passé",
              paragraphs: [
                "Pour reconstituer un environnement du passé, on compare les fossiles aux êtres vivants actuels qui leur ressemblent, en supposant qu'ils vivaient dans les mêmes conditions. Aujourd'hui, les coraux qui construisent des récifs vivent dans des mers chaudes, peu profondes et claires. Si l'on trouve des coraux fossiles dans une roche, on en déduit que cette roche s'est formée dans une mer chaude et peu profonde.",
                "C'est ainsi que l'on sait que la région de Paris a été recouverte par la mer : le calcaire utilisé pour construire de nombreux monuments parisiens contient des coquillages marins fossiles. Il s'est formé dans une mer peu profonde, il y a environ 45 millions d'années. Le paysage actuel n'a donc rien à voir avec celui du passé.",
              ],
              box: { label: "À retenir", text: "Les roches sédimentaires et leurs fossiles permettent de reconstituer les milieux du passé, en les comparant aux milieux et aux êtres vivants actuels." },
            },
          ],
          keyPoints: [
            "Compaction et cimentation transforment lentement des sédiments en roche sédimentaire (diagenèse).",
            "Sable → grès ; galets → conglomérat ; argile → argilite ; coquilles marines → calcaire ; végétaux → charbon.",
            "Un calcaire fait effervescence au contact de l'acide chlorhydrique dilué.",
            "Un fossile est un reste ou une trace d'un être vivant ancien, conservé dans une roche sédimentaire.",
            "Un fossile se forme si l'être vivant est enfoui rapidement, à l'abri de l'air.",
            "En comparant les fossiles aux êtres vivants actuels, on reconstitue les environnements du passé.",
          ],
          example: {
            statement: "Un échantillon de roche est formé de grains de sable collés entre eux. Il ne réagit pas à l'acide chlorhydrique. On y trouve des coquilles fossiles semblables à celles des coques, des coquillages qui vivent aujourd'hui sur les plages, dans le sable de la zone des marées. Nommer la roche, puis indiquer dans quel milieu elle s'est formée.",
            solution: [
              "La roche est formée de grains de sable cimentés et ne réagit pas à l'acide : c'est un grès.",
              "Elle contient des fossiles de coquillages proches des coques actuelles.",
              "Aujourd'hui, les coques vivent dans le sable des plages, au bord de la mer. On suppose que leurs ancêtres fossiles vivaient dans les mêmes conditions.",
              "Le sable s'est donc déposé au bord d'une mer, sur une plage ou près du rivage, puis il a été transformé en roche.",
              "Réponse : c'est un grès, formé à partir de sable déposé au bord de la mer.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associer chaque roche sédimentaire au sédiment ou aux débris dont elle provient : grès, conglomérat, argilite, calcaire coquillier, charbon. Sédiments et débris : galets, débris de végétaux, sable, coquilles marines, boue d'argile.",
              hint: "Le nom de la roche aide parfois : un calcaire coquillier contient des coquilles. Pour les autres, relisez l'encadré « Repère ».",
              solution: [
                "Grès : sable cimenté.",
                "Conglomérat : galets cimentés.",
                "Argilite : boue d'argile tassée.",
                "Calcaire coquillier : accumulation de coquilles marines.",
                "Charbon : débris de végétaux accumulés dans d'anciens marécages.",
                "Réponse : grès et sable ; conglomérat et galets ; argilite et argile ; calcaire coquillier et coquilles ; charbon et végétaux.",
              ],
            },
            {
              level: 2,
              statement: "On teste trois roches A, B et C avec une goutte d'acide chlorhydrique dilué. A : effervescence, roche blanche très fine qui tache les doigts. B : aucune réaction, grains de sable visibles et collés. C : effervescence, nombreuses coquilles visibles. 1. Identifier chaque roche parmi : craie, grès, calcaire coquillier. 2. Laquelle contient une preuve directe d'un dépôt en milieu marin ? Justifier.",
              hint: "L'effervescence signale un calcaire. Ensuite, regardez la taille des éléments et la présence de fossiles.",
              solution: [
                "1. A fait effervescence : c'est un calcaire ; très fin, blanc et tachant, c'est la craie.",
                "B ne réagit pas et contient des grains de sable : c'est le grès.",
                "C fait effervescence et contient des coquilles : c'est le calcaire coquillier.",
                "2. C contient des coquilles fossiles. Si ces coquilles ressemblent à celles d'animaux qui vivent aujourd'hui dans la mer, elles prouvent que la roche s'est formée dans un milieu marin.",
                "Réponse : A craie, B grès, C calcaire coquillier ; les fossiles de C indiquent un dépôt marin (la craie est aussi d'origine marine, mais ses algues sont invisibles à l'œil nu).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Dans une carrière, on observe trois couches horizontales, non bousculées. En bas : un grès contenant des empreintes de fougères, des plantes qui poussent aujourd'hui sur la terre ferme, dans des lieux humides. Au milieu : une argilite contenant des coquilles de limnées, des escargots qui vivent aujourd'hui dans les lacs et les étangs d'eau douce. En haut : un calcaire contenant des coraux et des oursins fossiles. Reconstituer l'histoire de ce lieu, dans l'ordre chronologique, en justifiant chaque étape.",
              hint: "Commencez par la couche la plus ancienne (principe de superposition), puis, pour chaque couche, comparez ses fossiles aux êtres vivants actuels.",
              solution: [
                "Ordre : d'après le principe de superposition, la couche du bas est la plus ancienne ; on lit donc l'histoire de bas en haut.",
                "Étape 1 (grès à fougères) : les fougères vivent aujourd'hui sur la terre ferme, dans des lieux humides. Le lieu était d'abord une terre humide couverte de végétation, où se déposait du sable.",
                "Étape 2 (argilite à limnées) : les limnées vivent aujourd'hui en eau douce et calme, et l'argile se dépose dans une eau calme. Le lieu est devenu un lac ou un étang.",
                "Étape 3 (calcaire à coraux et oursins) : les coraux et les oursins vivent aujourd'hui dans la mer, et les coraux dans des mers chaudes et peu profondes. Le lieu a ensuite été recouvert par une mer chaude et peu profonde.",
                "Réponse : terre ferme humide, puis lac d'eau douce, puis mer chaude et peu profonde ; le paysage de ce lieu a donc profondément changé au cours du temps.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : roches sédimentaires et fossiles.",
            statements: [
              { text: "Une roche sédimentaire se forme en quelques jours après le dépôt des sédiments.", true: false, why: "La compaction et la cimentation demandent en général des milliers à des millions d'années." },
              { text: "Le grès est formé de grains de sable cimentés.", true: true, why: "Le sable, tassé et cimenté, devient un grès." },
              { text: "Tous les êtres vivants finissent par devenir des fossiles.", true: false, why: "Il faut un enfouissement rapide, à l'abri de l'air : ces conditions sont rares." },
              { text: "Une empreinte de pas de dinosaure est un fossile.", true: true, why: "Un fossile peut être un reste, mais aussi une trace d'activité d'un être vivant ancien." },
              { text: "Un calcaire fait effervescence avec l'acide chlorhydrique dilué.", true: true, why: "Le calcaire réagit avec l'acide en libérant du dioxyde de carbone, d'où les bulles." },
              { text: "Des coraux fossiles indiquent que la roche s'est formée dans un désert.", true: false, why: "Les coraux actuels vivent dans des mers chaudes et peu profondes : la roche s'est formée dans un tel milieu." },
              { text: "On trouve surtout les fossiles dans les roches sédimentaires.", true: true, why: "Les êtres vivants y sont enfouis sous les sédiments, ce qui permet leur conservation." },
            ],
          },
          quiz: [
            {
              q: "Quelles transformations changent des sédiments en roche ?",
              options: ["La fusion et le refroidissement", "La compaction et la cimentation", "L'érosion et le transport", "La dissolution et l'évaporation"],
              answer: 1,
              why: "Le poids des couches tasse les sédiments (compaction), puis des cristaux collent les grains entre eux (cimentation).",
            },
            {
              q: "Quelle roche provient de galets cimentés ?",
              options: ["Le conglomérat", "Le grès", "La craie blanche", "L'argilite"],
              answer: 0,
              why: "Des galets collés entre eux par un ciment naturel forment un conglomérat.",
            },
            {
              q: "Quelle condition favorise la formation d'un fossile ?",
              options: ["Rester longtemps à l'air libre", "Être mangé par d'autres animaux après sa mort", "Vivre très longtemps", "Être enfoui rapidement sous des sédiments"],
              answer: 3,
              why: "Un enfouissement rapide protège le corps de l'air et des charognards et permet sa conservation.",
            },
            {
              q: "Le calcaire de nombreux monuments de Paris contient des coquillages marins fossiles. On en déduit que :",
              options: ["les coquillages ont été apportés par les bâtisseurs", "les coquillages vivaient autrefois dans la Seine", "la région était recouverte par la mer", "la roche s'est formée dans un volcan"],
              answer: 2,
              why: "Ces fossiles d'animaux marins montrent que le calcaire s'est formé dans une mer qui recouvrait la région.",
            },
            {
              q: "Comment reconnaît-on un calcaire ?",
              options: ["Il est toujours noir comme le charbon", "Il fait effervescence avec l'acide", "Il fond dans l'eau froide", "Il attire les aimants"],
              answer: 1,
              why: "Au contact de l'acide chlorhydrique dilué, un calcaire libère du dioxyde de carbone : il fait des bulles.",
            },
          ],
          trap: "Croire qu'un fossile est forcément un os ou un animal entier transformé en pierre. Un fossile peut aussi être une coquille, une feuille, une empreinte ou une trace de pas, et il se trouve presque toujours dans une roche sédimentaire.",
          method: "Pour reconstituer un milieu du passé, raisonnez toujours en deux temps : « aujourd'hui, cet être vivant (ou ce sédiment) se trouve dans tel milieu » ; « donc, quand la roche s'est formée, ce lieu était probablement ce milieu ».",
        },
      ],
    },
    /* ==================================================================== */
    /* MÉTÉOROLOGIE ET CLIMAT                                                 */
    /* ==================================================================== */
    {
      id: 'meteo-climat',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'meteo-ou-climat',
          title: 'Distinguer la météo et le climat',
          minutes: 30,
          objectives: [
            "Distinguer la météorologie, qui décrit le temps à un moment donné, et le climat, qui décrit le temps moyen sur une longue durée.",
            "Identifier les grandeurs mesurées en météorologie et les instruments qui les mesurent.",
            "Lire et exploiter un diagramme climatique (températures et précipitations).",
            "Relier la répartition des grandes zones climatiques à l'énergie reçue du Soleil selon la latitude.",
          ],
          course: [
            {
              heading: "La météo : le temps qu'il fait",
              paragraphs: [
                "La météorologie étudie le temps qu'il fait en un lieu à un moment donné : aujourd'hui, demain, cette semaine. Elle décrit l'état de la partie basse de l'atmosphère, la couche d'air qui entoure la Terre.",
                "Pour cela, on mesure plusieurs grandeurs : la température de l'air (en degrés Celsius, °C, avec un thermomètre), les précipitations (en millimètres, mm, avec un pluviomètre), la direction du vent (avec une girouette) et sa vitesse (en km/h, avec un anémomètre), la pression de l'air (en hectopascals, hPa, avec un baromètre) et l'humidité de l'air (en %, avec un hygromètre).",
                "En France, Météo-France rassemble les mesures de centaines de stations, de ballons-sondes et de satellites. Des ordinateurs calculent ensuite l'évolution probable du temps : les prévisions sont assez fiables pour les jours qui viennent, mais de moins en moins au-delà d'une semaine.",
              ],
              box: { label: "Repère", text: "1 mm de pluie correspond à 1 L d'eau tombé sur une surface de 1 m². Une pression supérieure à environ 1 013 hPa annonce plutôt du beau temps, une pression basse plutôt du mauvais temps." },
            },
            {
              heading: "Le climat : le temps moyen sur une longue durée",
              paragraphs: [
                "Le climat d'un lieu, c'est l'ensemble des conditions météorologiques moyennes que l'on y observe sur une longue durée. Par convention internationale, on calcule ces moyennes sur au moins 30 ans : températures moyennes de chaque mois, quantité de pluie, nombre de jours de gel, vents dominants.",
                "Le climat permet de savoir à quoi s'attendre, alors que la météo dit ce qui se passe vraiment un jour donné. Par exemple, le climat de Brest est doux et humide toute l'année, mais il peut arriver qu'un jour d'été y soit froid et sec. Ce jour-là ne change pas le climat de Brest.",
                "Une formule aide à retenir la différence : la météo, c'est le temps d'un jour ; le climat, c'est la moyenne de milliers de jours.",
              ],
              box: { label: "Définition", text: "La météo décrit le temps qu'il fait en un lieu à un moment donné. Le climat décrit les conditions météorologiques moyennes d'un lieu, calculées sur au moins 30 ans." },
            },
            {
              heading: "Lire un diagramme climatique",
              paragraphs: [
                "Un diagramme climatique résume le climat d'un lieu sur une année. Les mois sont placés en abscisse, de janvier à décembre. Des barres représentent les précipitations moyennes de chaque mois (en mm), et une courbe représente la température moyenne de chaque mois (en °C). Chaque grandeur a son propre axe vertical.",
                "Pour décrire un climat à partir d'un diagramme, on relève le mois le plus chaud et le mois le plus froid, on calcule l'amplitude thermique annuelle (la différence entre la température du mois le plus chaud et celle du mois le plus froid) et on additionne les précipitations des douze mois pour obtenir le total annuel. On repère enfin s'il existe une saison sèche.",
              ],
              box: { label: "Méthode", text: "Amplitude thermique annuelle = température du mois le plus chaud - température du mois le plus froid. Précipitations annuelles = somme des précipitations des 12 mois." },
            },
            {
              heading: "Les grandes zones climatiques de la Terre",
              paragraphs: [
                "La Terre est une sphère. À l'équateur, les rayons du Soleil arrivent presque perpendiculairement au sol : leur énergie est concentrée sur une petite surface, et il fait chaud. Près des pôles, les rayons arrivent très inclinés : la même énergie s'étale sur une grande surface, et il fait froid. Vous pouvez le vérifier avec une lampe de poche : dirigée droit sur une table, elle éclaire une petite tache très lumineuse ; inclinée, elle éclaire une grande tache plus pâle.",
                "On distingue ainsi une zone chaude autour de l'équateur, deux zones tempérées et deux zones froides autour des pôles. Dans chaque zone, d'autres facteurs modifient le climat : la proximité de l'océan adoucit les températures, et la température baisse avec l'altitude, d'environ 0,6 °C tous les 100 m en moyenne.",
                "La France métropolitaine, située dans la zone tempérée, connaît plusieurs climats : océanique à l'ouest, semi-continental à l'est, méditerranéen au sud-est, et montagnard dans les Alpes, les Pyrénées ou le Massif central.",
              ],
              box: { label: "À retenir", text: "La Terre reçoit plus d'énergie solaire par mètre carré à l'équateur qu'aux pôles : c'est la principale cause des grandes zones climatiques (chaude, tempérées, froides)." },
            },
          ],
          keyPoints: [
            "Météo : le temps qu'il fait en un lieu à un moment donné. Climat : les conditions moyennes d'un lieu, sur au moins 30 ans.",
            "Instruments : thermomètre (°C), pluviomètre (mm), anémomètre (vitesse du vent), girouette (direction), baromètre (hPa), hygromètre (%).",
            "Un diagramme climatique montre les précipitations (barres) et les températures (courbe) moyennes de chaque mois.",
            "Amplitude thermique annuelle = mois le plus chaud - mois le plus froid.",
            "L'énergie solaire reçue diminue de l'équateur vers les pôles : zone chaude, zones tempérées, zones froides.",
            "La température baisse avec l'altitude, d'environ 0,6 °C tous les 100 m.",
          ],
          example: {
            statement: "Pour chaque phrase, dire si elle relève de la météo ou du climat. a) « Demain, il pleuvra sur Lille le matin. » b) « À Marseille, les étés sont chauds et secs. » c) « Il a fait -3 °C cette nuit à Strasbourg. » d) « En moyenne, il tombe environ 600 mm de pluie par an à Paris. »",
            solution: [
              "Méthode : on cherche si la phrase parle d'un moment précis (météo) ou d'une moyenne, d'une habitude sur de longues années (climat).",
              "a) Un moment précis, demain matin : c'est de la météo (une prévision).",
              "b) Une habitude, valable tous les étés : c'est le climat.",
              "c) Une mesure d'une nuit précise : c'est de la météo.",
              "d) Une moyenne annuelle : c'est le climat.",
              "Réponse : a et c relèvent de la météo ; b et d relèvent du climat.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une station météorologique de collège possède un thermomètre, un pluviomètre, un anémomètre, une girouette et un baromètre. Pour chaque instrument, indiquer la grandeur qu'il mesure et son unité (si elle existe).",
              hint: "Relisez la liste des grandeurs mesurées en météorologie dans la première partie du cours.",
              solution: [
                "Thermomètre : la température de l'air, en degrés Celsius (°C).",
                "Pluviomètre : la quantité de précipitations, en millimètres (mm).",
                "Anémomètre : la vitesse du vent, en kilomètres par heure (km/h).",
                "Girouette : la direction d'où vient le vent (nord, sud-ouest...), sans unité.",
                "Baromètre : la pression de l'air, en hectopascals (hPa).",
                "Réponse : cinq instruments, cinq grandeurs, comme indiqué ci-dessus.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Voici les moyennes mensuelles d'une ville, de janvier à décembre. Températures (°C) : 6 ; 7 ; 9 ; 11 ; 14 ; 17 ; 19 ; 19 ; 17 ; 13 ; 9 ; 7. Précipitations (mm) : 100 ; 80 ; 70 ; 60 ; 60 ; 45 ; 40 ; 45 ; 60 ; 90 ; 100 ; 110. 1. Quels sont le mois le plus froid et les mois les plus chauds ? 2. Calculer l'amplitude thermique annuelle. 3. Calculer le total des précipitations annuelles. 4. Y a-t-il une saison sèche ? Ce climat a-t-il des hivers rudes ? Proposer un type de climat.",
              hint: "Repérez la plus petite et la plus grande température. Pour le total, additionnez les douze valeurs par groupes de trois pour éviter les erreurs.",
              solution: [
                "1. Mois le plus froid : janvier (6 °C). Mois les plus chauds : juillet et août (19 °C).",
                "2. Amplitude : 19 - 6 = 13 °C.",
                "3. Total : (100 + 80 + 70) + (60 + 60 + 45) + (40 + 45 + 60) + (90 + 100 + 110) = 250 + 165 + 145 + 300 = 860 mm.",
                "4. Il pleut tous les mois (au moins 40 mm), un peu plus en automne et en hiver : il n'y a pas de vraie saison sèche. L'hiver est doux (6 °C au plus froid) et l'été modéré.",
                "Réponse : amplitude de 13 °C, 860 mm de pluie par an, hivers doux, pluie toute l'année : c'est un climat tempéré océanique.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Un village situé à 200 m d'altitude a une température moyenne annuelle de 12 °C. 1. Sachant que la température baisse d'environ 0,6 °C tous les 100 m, estimer la température moyenne annuelle d'un sommet voisin situé à 2 200 m d'altitude. 2. Un jour d'avril, il neige dans le village. Un habitant affirme : « Cette neige prouve que le climat de notre village est en train de se refroidir. » Expliquer pourquoi ce raisonnement est faux.",
              hint: "Calculez d'abord la différence d'altitude, puis le nombre de fois 100 m qu'elle contient. Pour la question 2, demandez-vous si un seul jour peut renseigner sur une moyenne de 30 ans.",
              solution: [
                "1. Différence d'altitude : 2 200 - 200 = 2 000 m, soit 20 fois 100 m.",
                "Baisse de température : 20 × 0,6 = 12 °C.",
                "Température estimée au sommet : 12 - 12 = 0 °C.",
                "2. Une chute de neige un jour d'avril est un événement météorologique : elle décrit le temps d'un jour précis.",
                "Le climat est une moyenne calculée sur au moins 30 ans. Un seul jour, même inhabituel, ne suffit pas à montrer qu'il change ; il faudrait comparer les moyennes de longues périodes.",
                "Réponse : environ 0 °C au sommet ; l'habitant confond météo et climat.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque instrument de météorologie à ce qu'il mesure.",
            pairs: [
              { left: "Thermomètre", right: "Température de l'air, en °C" },
              { left: "Pluviomètre", right: "Quantité de pluie tombée, en mm" },
              { left: "Anémomètre", right: "Vitesse du vent" },
              { left: "Girouette", right: "Direction d'où vient le vent" },
              { left: "Baromètre", right: "Pression de l'air, en hPa" },
              { left: "Hygromètre", right: "Humidité de l'air, en %" },
            ],
          },
          quiz: [
            {
              q: "Sur quelle durée minimale calcule-t-on les moyennes qui définissent un climat ?",
              options: ["Une semaine", "Un an", "Au moins 30 ans", "Une seule saison"],
              answer: 2,
              why: "Par convention internationale, le climat est décrit par des moyennes calculées sur au moins 30 ans.",
            },
            {
              q: "Laquelle de ces phrases décrit un climat ?",
              options: ["Il pleut à Nantes ce matin", "Demain, grand soleil sur toute la Côte d'Azur", "Orage prévu ce soir à Lyon", "Les hivers sont froids à Moscou"],
              answer: 3,
              why: "« Les hivers sont froids » décrit une habitude, valable sur de longues années : c'est le climat. Les autres phrases décrivent le temps d'un moment précis.",
            },
            {
              q: "Avec quel instrument mesure-t-on la vitesse du vent ?",
              options: ["Un baromètre", "Un anémomètre", "Un pluviomètre", "Un hygromètre"],
              answer: 1,
              why: "L'anémomètre mesure la vitesse du vent ; la girouette indique sa direction.",
            },
            {
              q: "Pourquoi fait-il plus chaud à l'équateur qu'aux pôles ?",
              options: ["Les rayons du Soleil y arrivent presque perpendiculairement", "L'équateur est plus proche du Soleil que les pôles", "Il y a plus de nuages aux pôles qu'ailleurs", "Les océans y sont plus salés et beaucoup plus profonds qu'ailleurs"],
              answer: 0,
              why: "À l'équateur, l'énergie solaire est concentrée sur une petite surface ; aux pôles, les rayons inclinés l'étalent sur une grande surface.",
            },
            {
              q: "Mois le plus chaud : 24 °C ; mois le plus froid : 3 °C. Quelle est l'amplitude thermique annuelle ?",
              options: ["27 °C", "24 °C", "8 °C", "21 °C"],
              answer: 3,
              why: "Amplitude = 24 - 3 = 21 °C.",
            },
          ],
          trap: "Confondre météo et climat, par exemple croire qu'une journée très froide prouve que le climat se refroidit. Un événement d'un jour relève de la météo ; le climat se juge sur des moyennes d'au moins 30 ans.",
          method: "Devant une phrase, cherchez l'indice de temps : un moment précis (aujourd'hui, demain, cette nuit) signale la météo ; une habitude ou une moyenne (en général, chaque été, par an) signale le climat.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'changement-climatique',
          title: 'Le changement climatique actuel et ses causes',
          minutes: 35,
          objectives: [
            "Distinguer l'effet de serre naturel et son renforcement par les activités humaines.",
            "Exploiter des données montrant l'augmentation de la teneur en dioxyde de carbone de l'air et de la température moyenne de la Terre.",
            "Identifier les principales causes humaines du changement climatique actuel et quelques-unes de ses conséquences.",
            "Distinguer les actions qui limitent le changement climatique (atténuation) et celles qui permettent de s'y adapter (adaptation).",
          ],
          course: [
            {
              heading: "Le climat a déjà changé, mais jamais aussi vite",
              paragraphs: [
                "Le climat de la Terre a souvent changé au cours de son histoire, pour des raisons naturelles. Il y a environ 20 000 ans, pendant la dernière glaciation, d'immenses glaciers recouvraient une grande partie du nord de l'Europe, et le niveau des mers était plus bas de plus de 100 m. Ces changements naturels se sont produits sur des milliers d'années.",
                "Aujourd'hui, le climat se réchauffe beaucoup plus vite. Selon le GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat), qui rassemble les travaux de milliers de scientifiques, la température moyenne à la surface de la Terre a augmenté d'environ 1,1 °C entre la fin du XIXe siècle (1850-1900) et la décennie 2011-2020.",
                "1,1 °C peut sembler faible, mais il s'agit d'une moyenne sur toute la planète et sur toute l'année. Pendant la dernière glaciation, la température moyenne de la Terre n'était inférieure que de quelques degrés à celle d'aujourd'hui.",
              ],
              box: { label: "Repère", text: "D'après le GIEC (rapport de 2021), la température moyenne à la surface de la Terre a augmenté d'environ 1,1 °C entre 1850-1900 et 2011-2020." },
            },
            {
              heading: "L'effet de serre, un phénomène naturel",
              paragraphs: [
                "Le Soleil chauffe la surface de la Terre. La Terre, à son tour, renvoie de l'énergie vers l'espace sous forme de rayonnement infrarouge, invisible, que l'on ressent comme de la chaleur. Certains gaz de l'atmosphère, appelés gaz à effet de serre, retiennent une partie de cette chaleur, comme la vitre d'une serre ou une couverture.",
                "Les principaux gaz à effet de serre sont la vapeur d'eau, le dioxyde de carbone (CO₂) et le méthane. Cet effet de serre naturel est indispensable à la vie : sans lui, la température moyenne de la Terre serait d'environ -18 °C, au lieu d'environ 15 °C.",
              ],
              box: { label: "Définition", text: "L'effet de serre est le phénomène par lequel certains gaz de l'atmosphère (vapeur d'eau, dioxyde de carbone, méthane...) retiennent une partie de la chaleur renvoyée par la Terre, ce qui réchauffe sa surface." },
            },
            {
              heading: "Les activités humaines renforcent l'effet de serre",
              paragraphs: [
                "Depuis la révolution industrielle, au XIXe siècle, les êtres humains brûlent de grandes quantités de combustibles fossiles (charbon, pétrole, gaz naturel) pour se déplacer, produire de l'électricité, se chauffer et fabriquer des objets. Cette combustion rejette du dioxyde de carbone dans l'air. La déforestation y contribue aussi : les forêts détruites ne captent plus de dioxyde de carbone par la photosynthèse, et les arbres brûlés en libèrent.",
                "D'autres activités rejettent du méthane : l'élevage des ruminants (vaches, moutons), les rizières et les décharges. Résultat : la teneur de l'air en dioxyde de carbone est passée d'environ 280 ppm avant l'ère industrielle à plus de 420 ppm aujourd'hui (ppm signifie « parties par million » : 420 molécules de CO₂ pour un million de molécules d'air).",
                "Plus il y a de gaz à effet de serre, plus la chaleur est retenue : l'effet de serre se renforce et la Terre se réchauffe. Le GIEC conclut qu'il est sans équivoque que l'influence humaine a réchauffé le climat.",
              ],
              box: { label: "À retenir", text: "Le changement climatique actuel est causé par les activités humaines : la combustion du charbon, du pétrole et du gaz, la déforestation et certaines activités agricoles augmentent les gaz à effet de serre dans l'air." },
            },
            {
              heading: "Des conséquences déjà visibles",
              paragraphs: [
                "Les glaciers de montagne reculent presque partout. Le niveau moyen des mers a monté d'environ 20 cm entre 1901 et 2018, d'après le GIEC : l'eau des océans se dilate en se réchauffant, et la fonte des glaciers posés sur les continents ajoute de l'eau à la mer.",
                "Les vagues de chaleur deviennent plus fréquentes et plus intenses, comme certaines sécheresses et certaines pluies extrêmes. Les êtres vivants sont touchés : de nombreuses espèces se déplacent vers le nord ou montent en altitude pour retrouver des températures qui leur conviennent, et les coraux blanchissent et peuvent mourir quand l'eau de mer devient trop chaude.",
              ],
            },
            {
              heading: "Agir : atténuer et s'adapter",
              paragraphs: [
                "Atténuer le changement climatique, c'est réduire les émissions de gaz à effet de serre : utiliser des énergies qui rejettent peu de CO₂ (solaire, éolien, hydraulique...), mieux isoler les bâtiments, préférer la marche, le vélo ou les transports en commun, limiter le gaspillage, protéger et replanter les forêts. En 2015, l'accord de Paris a fixé l'objectif de contenir le réchauffement nettement en dessous de 2 °C, et si possible à 1,5 °C.",
                "S'adapter, c'est se préparer aux changements qui arrivent déjà : planter des arbres en ville pour créer de l'ombre, économiser l'eau, construire des bâtiments qui restent frais, protéger les côtes contre la montée de la mer. Les deux types d'actions sont nécessaires et complémentaires.",
              ],
              box: { label: "Définition", text: "Atténuation : réduire les émissions de gaz à effet de serre pour limiter le réchauffement. Adaptation : modifier nos manières de vivre et nos aménagements pour réduire les effets du réchauffement." },
            },
          ],
          keyPoints: [
            "Le climat a toujours varié naturellement, mais lentement ; le réchauffement actuel est très rapide (environ 1,1 °C entre 1850-1900 et 2011-2020).",
            "L'effet de serre naturel (vapeur d'eau, CO₂, méthane) maintient la Terre à environ 15 °C au lieu de -18 °C.",
            "La combustion des énergies fossiles, la déforestation et l'élevage renforcent l'effet de serre.",
            "Le CO₂ de l'air est passé d'environ 280 ppm à plus de 420 ppm.",
            "Conséquences : recul des glaciers, montée des mers, vagues de chaleur, déplacement d'espèces.",
            "Atténuation : réduire les émissions. Adaptation : se préparer aux effets du réchauffement.",
          ],
          example: {
            statement: "Teneur moyenne de l'air en dioxyde de carbone mesurée à l'observatoire de Mauna Loa (Hawaï), valeurs arrondies : 317 ppm en 1960, 339 ppm en 1980, 370 ppm en 2000, 414 ppm en 2020. Décrire l'évolution, puis comparer l'augmentation entre 1960 et 1980 et celle entre 2000 et 2020.",
            solution: [
              "Description : de 1960 à 2020, la teneur en CO₂ augmente sans cesse, de 317 à 414 ppm.",
              "Augmentation totale : 414 - 317 = 97 ppm en 60 ans.",
              "Entre 1960 et 1980 : 339 - 317 = 22 ppm en 20 ans.",
              "Entre 2000 et 2020 : 414 - 370 = 44 ppm en 20 ans.",
              "Comparaison : 44 ÷ 22 = 2. En 20 ans, l'augmentation est deux fois plus forte au début du XXIe siècle qu'entre 1960 et 1980.",
              "Réponse : la teneur en CO₂ augmente, et de plus en plus vite ; c'est la conséquence de l'augmentation des rejets humains de CO₂.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chaque action dans la bonne catégorie, atténuation ou adaptation : a) isoler le toit d'une maison pour moins chauffer ; b) planter des arbres dans une cour d'école pour avoir de l'ombre pendant les canicules ; c) aller au collège à vélo plutôt qu'en voiture ; d) récupérer l'eau de pluie pour arroser le jardin pendant les sécheresses ; e) produire de l'électricité avec des panneaux solaires.",
              hint: "Demandez-vous si l'action diminue les rejets de gaz à effet de serre (atténuation) ou si elle aide à mieux vivre avec les effets du réchauffement (adaptation).",
              solution: [
                "a) Isoler le toit : on consomme moins d'énergie pour se chauffer, donc on rejette moins de CO₂ : atténuation.",
                "b) Planter des arbres pour l'ombre : on se protège des canicules : adaptation (les arbres captent aussi un peu de CO₂).",
                "c) Le vélo à la place de la voiture : pas de carburant brûlé : atténuation.",
                "d) Récupérer l'eau de pluie : on se prépare aux sécheresses : adaptation.",
                "e) Les panneaux solaires : électricité produite sans brûler de combustible fossile : atténuation.",
                "Réponse : atténuation pour a, c et e ; adaptation pour b et d.",
              ],
            },
            {
              level: 2,
              statement: "1. Sans effet de serre, la température moyenne de la Terre serait d'environ -18 °C ; avec l'effet de serre naturel, elle est d'environ 15 °C. Calculer le réchauffement dû à l'effet de serre naturel. 2. La teneur de l'air en CO₂ est passée d'environ 280 ppm avant l'ère industrielle à 420 ppm. Calculer l'augmentation en ppm, puis dire de quelle fraction de la valeur de départ elle correspond.",
              hint: "Pour passer de -18 à 15, il faut d'abord remonter jusqu'à 0. Pour la fraction, divisez l'augmentation par 280.",
              solution: [
                "1. De -18 °C à 0 °C : 18 °C ; de 0 °C à 15 °C : 15 °C. Réchauffement : 18 + 15 = 33 °C.",
                "2. Augmentation : 420 - 280 = 140 ppm.",
                "Fraction : 140 ÷ 280 = 0,5, soit la moitié de la valeur de départ (une augmentation de 50 %).",
                "Réponse : l'effet de serre naturel réchauffe la Terre d'environ 33 °C ; la teneur en CO₂ a augmenté de 140 ppm, soit de moitié.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives et arrondies. Jade habite à 5 km de son collège et fait un aller et un retour par jour, 160 jours par an. Rejets de CO₂ par kilomètre et par personne : voiture avec le conducteur seul, 0,2 kg ; bus scolaire, 0,05 kg ; vélo, 0 kg. 1. Quelle distance parcourt-elle en un an pour aller au collège ? 2. Calculer les rejets de CO₂ de ces trajets en un an en voiture, puis en bus. 3. Combien de CO₂ économiserait-elle en prenant le bus au lieu de la voiture ? et le vélo ? 4. Ces choix relèvent-ils de l'atténuation ou de l'adaptation ? Justifier.",
              hint: "Un aller et un retour font 2 × 5 km par jour. Multipliez ensuite la distance annuelle par les rejets par kilomètre.",
              solution: [
                "1. Par jour : 2 × 5 = 10 km. Par an : 10 × 160 = 1 600 km.",
                "2. En voiture : 1 600 × 0,2 = 320 kg de CO₂. En bus : 1 600 × 0,05 = 80 kg de CO₂.",
                "3. Bus au lieu de voiture : 320 - 80 = 240 kg de CO₂ économisés. Vélo au lieu de voiture : 320 - 0 = 320 kg économisés.",
                "4. Ces choix réduisent les rejets de gaz à effet de serre : ils relèvent de l'atténuation.",
                "Réponse : 1 600 km par an ; 320 kg en voiture, 80 kg en bus ; 240 kg économisés avec le bus, 320 kg avec le vélo ; ce sont des actions d'atténuation.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : idées reçues sur le changement climatique.",
            statements: [
              { text: "Sans effet de serre, la Terre serait beaucoup plus froide.", true: true, why: "Sans lui, la température moyenne serait d'environ -18 °C au lieu de 15 °C." },
              { text: "L'effet de serre est entièrement causé par les êtres humains.", true: false, why: "L'effet de serre est naturel ; les activités humaines le renforcent." },
              { text: "Un hiver très froid prouve que la Terre ne se réchauffe pas.", true: false, why: "Un hiver relève de la météo ; le réchauffement se mesure sur des moyennes de longue durée et sur toute la planète." },
              { text: "La vapeur d'eau est un gaz à effet de serre.", true: true, why: "C'est même le principal gaz à effet de serre naturel, avec le dioxyde de carbone et le méthane." },
              { text: "Brûler du pétrole, du charbon ou du gaz rejette du dioxyde de carbone.", true: true, why: "La combustion des combustibles fossiles est la principale source de CO₂ d'origine humaine." },
              { text: "La fonte de la banquise, qui flotte sur la mer, est la principale cause de la montée des océans.", true: false, why: "La glace qui flotte occupe déjà sa place dans l'eau ; la mer monte surtout à cause de la dilatation de l'eau qui se réchauffe et de la fonte des glaces posées sur les continents." },
              { text: "Le climat de la Terre a déjà changé naturellement dans le passé.", true: true, why: "Il y a environ 20 000 ans, une glaciation couvrait de glace le nord de l'Europe ; mais ces changements étaient beaucoup plus lents." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la principale cause du changement climatique actuel ?",
              options: ["Les rejets de gaz à effet de serre par les activités humaines", "Le rapprochement entre la Terre et le Soleil", "L'activité des volcans de la planète, de plus en plus nombreux", "Le trou dans la couche d'ozone au-dessus des pôles"],
              answer: 0,
              why: "La combustion des énergies fossiles, la déforestation et certaines activités agricoles renforcent l'effet de serre.",
            },
            {
              q: "Lequel de ces gaz est un gaz à effet de serre ?",
              options: ["Le diazote", "Le dioxygène", "Le méthane", "L'hélium"],
              answer: 2,
              why: "Le méthane, comme la vapeur d'eau et le dioxyde de carbone, retient une partie de la chaleur renvoyée par la Terre.",
            },
            {
              q: "De combien la température moyenne de la Terre a-t-elle augmenté entre 1850-1900 et 2011-2020, d'après le GIEC ?",
              options: ["Environ 0,1 °C", "Environ 1,1 °C", "Environ 5 °C", "Environ 11 °C"],
              answer: 1,
              why: "Le GIEC estime ce réchauffement à environ 1,1 °C, ce qui est très rapide à l'échelle de l'histoire du climat.",
            },
            {
              q: "Laquelle de ces actions est une action d'adaptation ?",
              options: ["Installer des panneaux solaires sur le toit du collège", "Prendre le train plutôt que l'avion", "Isoler les murs de sa maison", "Végétaliser une cour pour la rafraîchir"],
              answer: 3,
              why: "Végétaliser une cour aide à mieux supporter les fortes chaleurs : c'est s'adapter. Les autres actions réduisent les émissions : c'est de l'atténuation.",
            },
            {
              q: "Pourquoi la déforestation renforce-t-elle l'effet de serre ?",
              options: ["Les arbres rejettent du méthane", "Les forêts détruites ne captent plus de CO₂", "Les arbres refroidissent le Soleil", "Les forêts produisent beaucoup trop de vapeur d'eau"],
              answer: 1,
              why: "Par la photosynthèse, les arbres captent du dioxyde de carbone ; détruits ou brûlés, ils n'en captent plus et peuvent même en libérer.",
            },
          ],
          trap: "Confondre l'effet de serre et le trou dans la couche d'ozone. Ce sont deux phénomènes différents : l'ozone protège des rayons ultraviolets, alors que le réchauffement actuel est dû au renforcement de l'effet de serre par les gaz rejetés par les activités humaines.",
          method: "Pour expliquer le changement climatique, construisez une chaîne de causes et de conséquences, avec des flèches : activités humaines → plus de gaz à effet de serre → effet de serre renforcé → réchauffement → conséquences (glaciers, mers, êtres vivants).",
        },
      ],
    },
    /* ==================================================================== */
    /* LE PEUPLEMENT DES MILIEUX ET LA BIODIVERSITÉ                           */
    /* ==================================================================== */
    {
      id: 'biodiversite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'repartition-etres-vivants',
          title: 'Pourquoi les êtres vivants ne sont pas répartis au hasard',
          minutes: 30,
          objectives: [
            "Relier la répartition des êtres vivants aux conditions du milieu : lumière, température, humidité, nature du sol, immersion.",
            "Expliquer l'étagement de la végétation en montagne et la répartition des algues sur un littoral rocheux.",
            "Identifier des relations entre êtres vivants (alimentation, compétition) qui influencent leur répartition.",
            "Concevoir une expérience qui teste l'influence d'un seul facteur du milieu.",
          ],
          course: [
            {
              heading: "Chaque espèce vit là où le milieu lui convient",
              paragraphs: [
                "Soulevez une pierre dans un jardin : vous y trouverez peut-être des cloportes, alors qu'il n'y en a pas sur la pelouse ensoleillée juste à côté. Ce n'est pas un hasard. Chaque milieu possède des caractéristiques, appelées facteurs du milieu : la lumière, la température, l'humidité, la nature du sol, le vent, ou la salinité de l'eau.",
                "Chaque espèce a des besoins et ne supporte que certaines conditions. Elle vit donc là où les facteurs du milieu lui conviennent. Les cloportes, qui se dessèchent vite, vivent dans des lieux humides et sombres. Les mousses poussent surtout dans les endroits ombragés et humides. Le châtaignier pousse sur les sols acides, comme ceux issus du granite, mais pas sur les sols calcaires.",
                "Un écosystème est formé d'un milieu de vie et de l'ensemble des êtres vivants qui l'habitent, ainsi que des relations qu'ils entretiennent entre eux et avec ce milieu : une mare, une forêt, une prairie sont des écosystèmes.",
              ],
              box: { label: "Définition", text: "Les facteurs du milieu sont les caractéristiques d'un lieu (lumière, température, humidité, nature du sol, salinité...). Un écosystème est l'ensemble formé par un milieu de vie, les êtres vivants qui y vivent et leurs relations." },
            },
            {
              heading: "En montagne : les étages de végétation",
              paragraphs: [
                "Quand on monte en montagne, la température baisse d'environ 0,6 °C tous les 100 m, l'hiver dure plus longtemps et le vent est plus fort. La végétation change donc avec l'altitude : elle est organisée en étages.",
                "Dans les Alpes du Nord, on distingue en général : l'étage collinéen jusqu'à environ 800 m (chênes, cultures), l'étage montagnard jusqu'à environ 1 500 m (hêtres, sapins), l'étage subalpin jusqu'à environ 2 200 m (épicéas, mélèzes, pins cembro), l'étage alpin jusqu'à environ 3 000 m (pelouses et plantes basses, sans arbres), puis l'étage nival (rochers, neige, quelques lichens).",
                "Ces limites ne sont pas fixes : elles sont plus hautes sur le versant ensoleillé (l'adret) que sur le versant à l'ombre (l'ubac), car il y fait plus chaud.",
              ],
              box: { label: "À retenir", text: "En montagne, la végétation est répartie en étages (collinéen, montagnard, subalpin, alpin, nival), car la température diminue avec l'altitude." },
            },
            {
              heading: "Sur un littoral rocheux : des ceintures d'algues",
              paragraphs: [
                "Sur les côtes rocheuses de la Manche et de l'Atlantique, la marée monte et descend environ deux fois par jour. La zone recouverte puis découverte par la mer s'appelle l'estran. Plus on monte sur l'estran, plus les êtres vivants restent longtemps hors de l'eau, exposés au soleil, au dessèchement et aux changements de température.",
                "Les algues brunes y forment des ceintures, de haut en bas : la pelvétie tout en haut (rarement recouverte par la mer), puis le fucus spiralé, le fucus vésiculeux, le fucus denté et, tout en bas, les laminaires, découvertes seulement lors des très grandes marées basses. Chaque espèce vit au niveau où la durée passée hors de l'eau lui convient.",
              ],
              box: { label: "Repère", text: "Ceintures d'algues brunes, du haut vers le bas de l'estran : pelvétie, fucus spiralé, fucus vésiculeux, fucus denté, laminaires." },
            },
            {
              heading: "Les relations entre êtres vivants, et comment tester un facteur",
              paragraphs: [
                "La répartition des êtres vivants dépend aussi des autres êtres vivants. Un animal vit là où il trouve sa nourriture : la buse chasse là où vivent les campagnols. Les espèces sont aussi en compétition : sous une hêtraie très dense, peu de plantes poussent au sol, car les hêtres captent presque toute la lumière.",
                "Pour savoir si un facteur influence la répartition d'une espèce, on réalise une expérience : on compare deux situations qui ne diffèrent que par ce seul facteur. Par exemple, on place des cloportes dans une boîte à moitié humide et à moitié sèche, avec la même lumière partout, et on compte où ils se trouvent après quelques minutes.",
              ],
              box: { label: "Méthode", text: "Pour tester un facteur du milieu, on compare deux situations où ce facteur seul change, toutes les autres conditions restant identiques, avec plusieurs individus." },
            },
          ],
          keyPoints: [
            "Les êtres vivants ne sont pas répartis au hasard : chaque espèce vit là où les facteurs du milieu lui conviennent.",
            "Facteurs du milieu : lumière, température, humidité, nature du sol, salinité, durée d'immersion.",
            "En montagne, la végétation est étagée : collinéen, montagnard, subalpin, alpin, nival.",
            "Sur l'estran, les algues brunes forment des ceintures selon le temps qu'elles passent hors de l'eau.",
            "La nourriture disponible et la compétition entre espèces influencent aussi la répartition.",
            "Pour tester un facteur, on ne fait varier que lui.",
          ],
          example: {
            statement: "Données fictives. On place 10 cloportes dans une boîte obscure dont une moitié contient de la terre humide et l'autre de la terre sèche. Après 10 minutes : 9 cloportes côté humide, 1 côté sec. On recommence avec une boîte entièrement humide, dont une moitié est éclairée et l'autre à l'obscurité : 8 cloportes côté obscur, 2 côté éclairé. Que peut-on conclure ?",
            solution: [
              "Première expérience : seule l'humidité change entre les deux moitiés. 9 cloportes sur 10 choisissent le côté humide.",
              "Les cloportes recherchent donc l'humidité.",
              "Seconde expérience : seule la lumière change. 8 cloportes sur 10 choisissent le côté obscur.",
              "Les cloportes recherchent donc l'obscurité.",
              "Réponse : l'humidité et l'obscurité influencent la répartition des cloportes ; c'est pourquoi on les trouve sous les pierres et les feuilles mortes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque observation, nommer le facteur du milieu qui explique la répartition de l'être vivant. a) Les mousses couvrent surtout la face d'un mur qui reste à l'ombre et humide. b) Les laminaires vivent tout en bas de l'estran. c) Les lézards se tiennent sur les pierres ensoleillées. d) Il n'y a plus d'arbres au-dessus de 2 200 m d'altitude dans les Alpes du Nord.",
              hint: "Pour chaque cas, demandez-vous ce qui est différent entre l'endroit où vit l'être vivant et les endroits voisins.",
              solution: [
                "a) La lumière et l'humidité : les mousses ont besoin d'humidité et supportent l'ombre.",
                "b) La durée passée hors de l'eau (l'immersion) : les laminaires ne supportent pas de rester longtemps à l'air.",
                "c) La température (et l'ensoleillement) : les lézards se réchauffent au soleil.",
                "d) La température, qui baisse avec l'altitude : au-dessus de l'étage subalpin, il fait trop froid pour les arbres.",
                "Réponse : lumière et humidité, immersion, température, température liée à l'altitude.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le long d'un versant des Alpes du Nord, on a relevé la végétation dominante : à 500 m, chênes et champs ; à 1 200 m, hêtres et sapins ; à 1 900 m, épicéas et mélèzes ; à 2 500 m, pelouses et plantes en coussinet ; à 3 200 m, rochers et lichens. 1. Nommer l'étage de végétation de chaque relevé. 2. Estimer de combien la température moyenne est plus basse à 3 200 m qu'à 500 m. 3. Expliquer pourquoi la végétation change avec l'altitude.",
              hint: "Utilisez les limites d'altitude du cours, puis comptez combien de fois 100 m séparent 500 m et 3 200 m.",
              solution: [
                "1. 500 m : étage collinéen ; 1 200 m : étage montagnard ; 1 900 m : étage subalpin ; 2 500 m : étage alpin ; 3 200 m : étage nival.",
                "2. Différence d'altitude : 3 200 - 500 = 2 700 m, soit 27 fois 100 m. Baisse de température : 27 × 0,6 = 16,2 °C.",
                "3. En montant, il fait de plus en plus froid et la saison favorable à la croissance est plus courte : seules les espèces adaptées à ces conditions peuvent pousser à chaque altitude.",
                "Réponse : collinéen, montagnard, subalpin, alpin, nival ; environ 16 °C de moins à 3 200 m ; la température qui baisse avec l'altitude explique l'étagement.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Sur un estran, on connaît la durée maximale, en pourcentage du temps, pendant laquelle chaque algue supporte d'être hors de l'eau : pelvétie 90 % ; fucus spiralé 70 % ; fucus vésiculeux 50 % ; fucus denté 30 % ; laminaires 5 %. Au point B de l'estran, les algues sont hors de l'eau 45 % du temps. 1. Quelles algues pourraient supporter de vivre au point B ? 2. Pourtant, au point B, on n'observe que du fucus vésiculeux. Proposer une explication. 3. Proposer une expérience simple pour tester votre explication.",
              hint: "Une algue peut vivre au point B si elle supporte d'être hors de l'eau au moins 45 % du temps. Pensez ensuite aux relations entre les algues elles-mêmes.",
              solution: [
                "1. Il faut supporter au moins 45 % du temps hors de l'eau : la pelvétie (90 %), le fucus spiralé (70 %) et le fucus vésiculeux (50 %) le peuvent. Le fucus denté (30 %) et les laminaires (5 %) ne le peuvent pas.",
                "2. La durée hors de l'eau n'explique donc pas tout. Une explication possible est la compétition : au point B, le fucus vésiculeux pousserait mieux que la pelvétie et le fucus spiralé, et occuperait toute la place disponible.",
                "3. Expérience possible : sur une petite surface du point B, retirer tous les fucus vésiculeux, et laisser une surface voisine intacte pour comparer.",
                "Si, après plusieurs mois, la pelvétie ou le fucus spiralé s'installent sur la surface dégagée et pas sur l'autre, l'hypothèse de la compétition est confirmée.",
                "Réponse : trois algues pourraient vivre en B, mais la compétition avec le fucus vésiculeux explique probablement qu'il soit seul ; un facteur du milieu fixe les limites, les relations entre espèces précisent la répartition.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Sur un estran rocheux de Bretagne, remettez les ceintures d'algues dans l'ordre, du haut vers le bas.",
            items: [
              "Pelvétie (presque toujours hors de l'eau)",
              "Fucus spiralé",
              "Fucus vésiculeux",
              "Fucus denté",
              "Laminaires (presque toujours sous l'eau)",
            ],
          },
          quiz: [
            {
              q: "Lequel de ces éléments est un facteur du milieu ?",
              options: ["Le nom de l'espèce", "La couleur d'une fleur", "L'âge de l'animal", "L'humidité du sol"],
              answer: 3,
              why: "L'humidité est une caractéristique du lieu ; les autres propositions sont des caractéristiques des êtres vivants eux-mêmes.",
            },
            {
              q: "Pourquoi la végétation change-t-elle quand on monte en montagne ?",
              options: ["Parce que l'air contient plus de dioxygène", "Parce que la température baisse", "Parce que le sol devient salé", "Parce que les jours sont plus longs"],
              answer: 1,
              why: "La température baisse d'environ 0,6 °C tous les 100 m : seules les espèces adaptées au froid poussent en altitude.",
            },
            {
              q: "Quelle algue vit tout en bas de l'estran ?",
              options: ["Les laminaires", "La pelvétie", "Le fucus spiralé", "Le fucus vésiculeux"],
              answer: 0,
              why: "Les laminaires ne supportent pas de rester longtemps hors de l'eau : elles ne sont découvertes que lors des très grandes marées basses.",
            },
            {
              q: "Pour tester l'effet de la lumière sur des cloportes, que faut-il faire ?",
              options: ["Changer la lumière et l'humidité en même temps", "Utiliser un seul cloporte", "Ne changer que la lumière", "Mettre les cloportes au soleil"],
              answer: 2,
              why: "Pour savoir si un facteur agit, il faut que lui seul change entre les deux situations, avec plusieurs individus.",
            },
            {
              q: "Sous une hêtraie dense, peu de plantes poussent au sol. Pourquoi ?",
              options: ["Les hêtres captent presque toute la lumière", "Le sol y est trop salé", "Il y fait beaucoup trop chaud pendant tout l'été", "Les hêtres mangent les autres plantes"],
              answer: 0,
              why: "C'est un exemple de compétition pour la lumière : les feuilles des hêtres laissent passer très peu de lumière jusqu'au sol.",
            },
          ],
          trap: "Croire que les êtres vivants choisissent librement où vivre, ou qu'ils sont répartis au hasard. Leur répartition s'explique par les facteurs du milieu et par leurs relations avec les autres êtres vivants.",
          method: "Pour expliquer une répartition, comparez toujours deux endroits voisins : cherchez le facteur qui diffère (lumière, humidité, température, sol, immersion) et reliez-le aux besoins de l'être vivant.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'activites-humaines-biodiversite',
          title: 'Les activités humaines modifient les milieux',
          minutes: 30,
          objectives: [
            "Définir la biodiversité à trois niveaux : la diversité des écosystèmes, des espèces et des individus d'une même espèce.",
            "Identifier les principales menaces que les activités humaines font peser sur la biodiversité.",
            "Expliquer, à partir d'un exemple, comment une activité humaine modifie un écosystème et entraîne des effets en chaîne.",
            "Exploiter des données de suivi d'une population.",
          ],
          course: [
            {
              heading: "La biodiversité, la diversité du vivant",
              paragraphs: [
                "La biodiversité est la diversité du monde vivant. On la décrit à trois niveaux. D'abord, la diversité des écosystèmes : forêts, prairies, mares, récifs coralliens, déserts. Ensuite, la diversité des espèces : les scientifiques en ont décrit environ deux millions, et il en reste sans doute beaucoup plus à découvrir.",
                "Enfin, la diversité des individus au sein d'une même espèce : tous les coquelicots ou tous les êtres humains ne sont pas identiques. Cette diversité est importante, car elle permet à une espèce de mieux résister aux changements, par exemple à une maladie ou à une sécheresse.",
              ],
              box: { label: "Définition", text: "La biodiversité est la diversité du vivant à trois niveaux : diversité des écosystèmes, diversité des espèces et diversité des individus au sein d'une même espèce." },
            },
            {
              heading: "Les grandes menaces sur la biodiversité",
              paragraphs: [
                "En 2019, la Plateforme intergouvernementale sur la biodiversité et les services écosystémiques (IPBES) a estimé qu'environ un million d'espèces animales et végétales sont menacées d'extinction. Elle a identifié cinq grandes causes directes, toutes liées aux activités humaines.",
                "La première est la destruction et la transformation des milieux : villes, routes et zones commerciales qui recouvrent les sols, forêts abattues, zones humides asséchées, haies arrachées. La deuxième est la surexploitation : pêche excessive, chasse, braconnage. Au large du Canada, la morue a par exemple été tellement pêchée que sa pêche a dû être interdite en 1992.",
                "Viennent ensuite le changement climatique, les pollutions (pesticides, engrais en excès, plastiques, lumière la nuit) et les espèces exotiques envahissantes. Ces dernières sont transportées, volontairement ou non, loin de leur région d'origine et prolifèrent, faute de prédateurs. Le frelon asiatique, arrivé en France vers 2004, s'attaque par exemple aux abeilles.",
              ],
              box: { label: "Repère", text: "Les cinq grandes menaces sur la biodiversité : destruction des milieux, surexploitation, changement climatique, pollutions, espèces exotiques envahissantes." },
            },
            {
              heading: "Quand un milieu est modifié",
              paragraphs: [
                "Quand on assèche une zone humide pour la cultiver ou construire, les grenouilles, les libellules et de nombreux oiseaux perdent leur lieu de vie et de reproduction. Quand on arrache des haies, les oiseaux, les hérissons et les insectes qui y vivaient et s'y abritaient disparaissent, et le sol s'érode davantage.",
                "Les routes et les villes découpent aussi les milieux en morceaux isolés : c'est la fragmentation. Les animaux ne peuvent plus circuler d'un morceau à l'autre pour se nourrir ou se reproduire, et beaucoup meurent écrasés en traversant les routes.",
                "Toutes les activités humaines ne sont pas néfastes : des prairies fauchées une fois par an, des mares creusées ou des haies entretenues peuvent au contraire abriter une grande diversité d'espèces. Tout dépend de la manière dont on aménage et exploite le milieu.",
              ],
            },
            {
              heading: "Des effets en chaîne",
              paragraphs: [
                "Dans un écosystème, les êtres vivants dépendent les uns des autres, notamment pour se nourrir. Si une espèce disparaît ou diminue, les autres sont touchées. Par exemple, des insecticides qui tuent les insectes privent de nourriture les hirondelles et les chauves-souris qui les mangent.",
                "L'être humain dépend lui aussi de la biodiversité : de nombreuses cultures (pommiers, fraisiers, colza...) ont besoin des insectes pollinisateurs, comme les abeilles, pour produire des fruits et des graines. En abîmant la biodiversité, l'humanité fragilise donc sa propre alimentation.",
              ],
              box: { label: "À retenir", text: "Les activités humaines modifient les écosystèmes ; la disparition d'une espèce peut entraîner des effets en chaîne sur les autres, y compris sur l'être humain." },
            },
          ],
          keyPoints: [
            "La biodiversité se décrit à trois niveaux : écosystèmes, espèces, individus d'une même espèce.",
            "Environ un million d'espèces sont menacées d'extinction (IPBES, 2019).",
            "Cinq grandes menaces : destruction des milieux, surexploitation, changement climatique, pollutions, espèces exotiques envahissantes.",
            "La fragmentation des milieux par les routes et les villes isole les populations.",
            "Les espèces dépendent les unes des autres : une disparition entraîne des effets en chaîne.",
          ],
          example: {
            statement: "Données fictives. Dans une commune agricole, on a compté les couples d'alouettes des champs : 120 en 2000, 84 en 2010, 60 en 2020. Pendant cette période, la plupart des haies ont été arrachées et l'usage des pesticides a augmenté. 1. Calculer la baisse entre 2000 et 2020, puis la fraction de la population perdue. 2. Proposer une explication.",
            solution: [
              "1. Baisse : 120 - 60 = 60 couples en 20 ans.",
              "Fraction perdue : 60 ÷ 120 = 0,5, soit la moitié de la population (50 %).",
              "2. Les alouettes nourrissent leurs petits avec des insectes : les pesticides, en tuant les insectes, réduisent leur nourriture.",
              "La disparition des haies et des milieux variés réduit aussi les abris et la nourriture disponibles.",
              "Réponse : la population a diminué de moitié ; cette baisse peut s'expliquer par la destruction des milieux et par la pollution par les pesticides.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associer chaque situation à la menace sur la biodiversité qu'elle illustre (destruction des milieux, surexploitation, changement climatique, pollutions, espèces exotiques envahissantes). a) Un marais est asséché pour construire un centre commercial. b) Des tortues de Floride relâchées dans un étang mangent les œufs des espèces locales. c) Des bateaux pêchent plus de thons qu'il n'en naît chaque année. d) Des sacs plastiques sont avalés par des tortues marines. e) Des espèces de papillons remontent vers le nord à cause de la hausse des températures.",
              hint: "Pour chaque situation, demandez-vous ce qui fait du tort aux êtres vivants : leur lieu de vie disparaît, on en prélève trop, une substance les empoisonne, une nouvelle espèce arrive, ou le climat change.",
              solution: [
                "a) Destruction des milieux : le marais disparaît.",
                "b) Espèce exotique envahissante : la tortue de Floride vient d'Amérique et concurrence les espèces locales.",
                "c) Surexploitation : on prélève plus de poissons que l'espèce n'en renouvelle.",
                "d) Pollution : les déchets plastiques tuent des animaux.",
                "e) Changement climatique : les espèces se déplacent pour retrouver des températures qui leur conviennent.",
                "Réponse : a destruction des milieux, b espèce envahissante, c surexploitation, d pollution, e changement climatique.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Dans un département, on a compté les nids de frelons asiatiques détruits chaque année : 20 en 2015, 60 en 2016, 180 en 2017. 1. Par combien le nombre de nids est-il multiplié chaque année ? 2. Si cette évolution continuait, combien de nids compterait-on en 2018 ? 3. Expliquer pourquoi une espèce exotique peut proliférer aussi vite et pourquoi le frelon asiatique inquiète les apiculteurs.",
              hint: "Divisez le nombre d'une année par celui de l'année précédente. Pensez ensuite aux prédateurs de cette espèce dans son nouveau milieu.",
              solution: [
                "1. 60 ÷ 20 = 3 et 180 ÷ 60 = 3 : le nombre de nids est multiplié par 3 chaque année.",
                "2. En 2018 : 180 × 3 = 540 nids.",
                "3. Dans son nouveau milieu, une espèce exotique a peu ou pas de prédateurs et de maladies qui la limitent : elle peut se multiplier rapidement.",
                "Le frelon asiatique chasse les abeilles devant les ruches : il affaiblit les colonies, ce qui menace la production de miel et la pollinisation.",
                "Réponse : multiplication par 3 chaque année, 540 nids en 2018 si l'évolution continuait ; l'absence de prédateurs explique la prolifération, et la prédation sur les abeilles inquiète les apiculteurs.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Dans une région agricole, on a suivi pendant 20 ans le nombre moyen d'insectes capturés par piège et le nombre de couples d'hirondelles. Au début : 400 insectes par piège et 50 couples d'hirondelles. À la fin : 100 insectes par piège et 20 couples d'hirondelles. Pendant cette période, l'usage d'insecticides a fortement augmenté. 1. Calculer le pourcentage de baisse des insectes, puis des hirondelles. 2. Proposer une explication reliant ces deux baisses. 3. Montrer que cette situation peut aussi toucher les agriculteurs. 4. Proposer deux mesures pour améliorer la situation.",
              hint: "Pourcentage de baisse = (valeur de départ - valeur d'arrivée) ÷ valeur de départ × 100. Les hirondelles se nourrissent d'insectes en vol.",
              solution: [
                "1. Insectes : (400 - 100) ÷ 400 × 100 = 300 ÷ 400 × 100 = 75 %. Hirondelles : (50 - 20) ÷ 50 × 100 = 30 ÷ 50 × 100 = 60 %.",
                "2. Les insecticides tuent les insectes ; or les hirondelles se nourrissent d'insectes. Privées de nourriture, elles élèvent moins de petits et leur population diminue : c'est un effet en chaîne.",
                "3. Parmi les insectes disparus figurent des pollinisateurs, utiles à de nombreuses cultures. Et les hirondelles mangent aussi des insectes qui abîment les cultures : leur disparition peut favoriser ces ravageurs.",
                "4. Exemples de mesures : réduire l'usage des insecticides ; replanter des haies et des bandes fleuries, qui abritent et nourrissent les insectes.",
                "Réponse : baisse de 75 % des insectes et de 60 % des hirondelles ; la disparition des insectes prive les hirondelles de nourriture ; les agriculteurs perdent des pollinisateurs et des alliés contre les ravageurs.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque menace sur la biodiversité à un exemple.",
            pairs: [
              { left: "Destruction des milieux", right: "Une zone humide asséchée pour construire" },
              { left: "Fragmentation", right: "Une autoroute qui coupe une forêt en deux" },
              { left: "Surexploitation", right: "La pêche de plus de poissons qu'il n'en naît" },
              { left: "Pollution", right: "Des pesticides qui tuent les insectes pollinisateurs" },
              { left: "Espèce exotique envahissante", right: "Le frelon asiatique qui chasse les abeilles" },
              { left: "Changement climatique", right: "Des papillons qui remontent vers le nord" },
            ],
          },
          quiz: [
            {
              q: "Combien d'espèces vivantes les scientifiques ont-ils décrites environ ?",
              options: ["Environ deux mille", "Environ deux millions", "Environ deux cent mille", "Environ vingt mille"],
              answer: 1,
              why: "Environ deux millions d'espèces ont été décrites, et de nombreuses autres restent à découvrir.",
            },
            {
              q: "Laquelle de ces situations est une surexploitation ?",
              options: ["Arracher une haie", "Relâcher une tortue de Floride", "Pêcher trop de morues", "Construire un parking"],
              answer: 2,
              why: "La surexploitation consiste à prélever plus d'individus d'une espèce qu'elle ne peut en renouveler.",
            },
            {
              q: "Pourquoi une espèce exotique envahissante prolifère-t-elle souvent ?",
              options: ["Elle vit plus longtemps que toutes les autres espèces", "Elle est protégée par la loi", "Elle mange uniquement des plantes", "Elle a peu de prédateurs dans son nouveau milieu"],
              answer: 3,
              why: "Loin de sa région d'origine, elle n'a souvent ni prédateurs ni maladies qui limitent sa population.",
            },
            {
              q: "Qu'appelle-t-on la fragmentation des milieux ?",
              options: ["Le découpage d'un milieu en morceaux isolés", "La transformation des roches en sable", "L'arrivée d'espèces nouvelles dans un milieu", "Le recul des glaciers en montagne"],
              answer: 0,
              why: "Routes, villes et champs découpent les milieux : les animaux ne peuvent plus circuler d'un morceau à l'autre.",
            },
            {
              q: "Quel est le niveau de biodiversité illustré par la variété de couleurs des coquelicots d'un même champ ?",
              options: ["La diversité des écosystèmes", "La diversité des espèces", "La diversité des individus d'une espèce", "La diversité des climats sur toute la planète"],
              answer: 2,
              why: "Tous ces coquelicots appartiennent à la même espèce : leurs différences illustrent la diversité des individus au sein d'une espèce.",
            },
          ],
          trap: "Réduire la biodiversité au seul nombre d'espèces, ou ses menaces à la seule pollution. La biodiversité compte trois niveaux (écosystèmes, espèces, individus), et la première menace est la destruction des milieux.",
          method: "Pour expliquer l'effet d'une activité humaine, écrivez une chaîne de causes : activité → milieu modifié → espèce touchée → effets sur les autres espèces. Vérifiez que chaque flèche est justifiée par une donnée ou une connaissance.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'preserver-biodiversite',
          title: 'Préserver la biodiversité',
          minutes: 30,
          objectives: [
            "Expliquer pourquoi la préservation de la biodiversité est nécessaire, y compris pour l'être humain.",
            "Identifier des mesures de protection : espaces protégés, corridors écologiques, réglementations, réintroductions.",
            "Argumenter un choix d'aménagement en tenant compte de ses effets sur la biodiversité.",
            "Proposer des actions individuelles et collectives en faveur de la biodiversité.",
          ],
          course: [
            {
              heading: "Pourquoi préserver la biodiversité ?",
              paragraphs: [
                "La biodiversité rend à l'être humain de nombreux services. Elle fournit la nourriture, le bois, les fibres, et de nombreux médicaments : l'aspirine, par exemple, a été mise au point à partir d'une substance découverte dans l'écorce du saule. Les insectes pollinisateurs permettent la production de nombreux fruits et légumes.",
                "Les écosystèmes rendent aussi des services moins visibles : les zones humides filtrent l'eau et limitent les inondations, les vers de terre et les champignons fabriquent un sol fertile, les forêts et les océans absorbent une partie du dioxyde de carbone rejeté par les activités humaines.",
                "Enfin, beaucoup de personnes pensent que chaque espèce a une valeur en elle-même, et que nous avons la responsabilité de la transmettre aux générations futures. Une espèce disparue ne reviendra jamais.",
              ],
              box: { label: "À retenir", text: "Préserver la biodiversité, c'est protéger des espèces et des écosystèmes qui ont une valeur en eux-mêmes et qui rendent des services indispensables à l'être humain (nourriture, médicaments, pollinisation, eau, sols)." },
            },
            {
              heading: "Protéger des espaces et les relier",
              paragraphs: [
                "Une première solution est de protéger des espaces naturels, où les activités humaines sont limitées ou encadrées. En France, il existe des parcs nationaux (le premier, celui de la Vanoise, a été créé en 1963), des réserves naturelles et des sites du réseau européen Natura 2000.",
                "Mais des espaces protégés isolés ne suffisent pas : les animaux et les plantes ont besoin de circuler pour se nourrir, se reproduire et se disperser. On crée donc des corridors écologiques, qui relient les milieux entre eux : haies, bandes boisées, bords de rivières préservés. En France, l'ensemble de ces continuités s'appelle la trame verte (pour les milieux terrestres) et bleue (pour les milieux aquatiques).",
                "Pour franchir les routes, on construit des passages à faune : des ponts couverts de végétation au-dessus des autoroutes, ou des tunnels sous les routes pour les grenouilles et les crapauds, appelés crapauducs.",
              ],
              box: { label: "Définition", text: "Un corridor écologique est un espace (haie, bande boisée, rivière, passage à faune) qui relie des milieux de vie et permet aux êtres vivants de circuler entre eux." },
            },
            {
              heading: "Protéger les espèces et encadrer les activités",
              paragraphs: [
                "Certaines espèces sont protégées par la loi : il est interdit de les capturer, de les cueillir ou de détruire leurs lieux de vie. La pêche est encadrée par des quotas (une quantité maximale à pêcher) et des tailles minimales, pour laisser les poissons se reproduire.",
                "Les pollutions sont aussi réglementées. En France, depuis 2019, les particuliers ne peuvent plus acheter ni utiliser de pesticides chimiques de synthèse pour leur jardin. Lorsqu'une route ou un quartier doit être construit, le projet doit d'abord chercher à éviter de détruire des milieux naturels, puis à réduire ses effets, et seulement en dernier recours à compenser les dégâts, par exemple en restaurant un milieu ailleurs.",
                "Enfin, on peut réintroduire des espèces disparues d'une région : le vautour fauve a ainsi été réintroduit dans les Grands Causses, dans les années 1980, et il y vit de nouveau en liberté.",
              ],
              box: { label: "Règle", text: "Pour un projet d'aménagement : d'abord éviter de détruire les milieux, puis réduire les effets qui ne peuvent pas être évités, et en dernier recours compenser." },
            },
            {
              heading: "Chacun peut agir",
              paragraphs: [
                "Chacun peut agir à son échelle : laisser un coin de jardin ou de cour sans tonte, planter des fleurs locales pour les pollinisateurs, installer un nichoir, ne pas cueillir les plantes protégées, ne jamais relâcher dans la nature un animal de compagnie exotique, comme une tortue de Floride, et limiter ses déchets.",
                "Vous pouvez aussi aider les scientifiques. Grâce aux programmes de sciences participatives, comme Vigie-Nature du Muséum national d'Histoire naturelle, des milliers de volontaires comptent les oiseaux, les papillons ou les escargots de leur jardin. Ces observations permettent de suivre l'évolution de la biodiversité dans tout le pays.",
              ],
            },
          ],
          keyPoints: [
            "La biodiversité fournit nourriture, médicaments, pollinisation, eau propre et sols fertiles ; une espèce disparue ne revient jamais.",
            "Espaces protégés : parcs nationaux (Vanoise, 1963), réserves naturelles, sites Natura 2000.",
            "Les corridors écologiques (trame verte et bleue, passages à faune) relient les milieux.",
            "Espèces protégées, quotas de pêche, interdiction des pesticides de synthèse dans les jardins depuis 2019, réintroductions.",
            "Aménagement : éviter, puis réduire, puis compenser.",
            "Chacun peut agir : coin sauvage, nichoir, pas d'animal exotique relâché, sciences participatives.",
          ],
          example: {
            statement: "Données fictives. Chaque printemps, les crapauds d'une forêt traversent une route pour aller pondre dans un étang. Avant la construction d'un crapauduc, on comptait 400 crapauds écrasés par an ; après, on en compte 40. 1. Calculer la baisse du nombre de crapauds écrasés, puis son pourcentage. 2. Expliquer l'intérêt de cet aménagement.",
            solution: [
              "1. Baisse : 400 - 40 = 360 crapauds écrasés en moins chaque année.",
              "Pourcentage : 360 ÷ 400 × 100 = 90 %.",
              "2. Le crapauduc est un tunnel sous la route : les crapauds peuvent rejoindre l'étang sans traverser la chaussée.",
              "Plus de crapauds atteignent l'étang pour pondre : la population peut se maintenir. Le crapauduc rétablit un corridor écologique entre la forêt et l'étang.",
              "Réponse : 360 crapauds sauvés par an, soit une baisse de 90 % de la mortalité sur la route ; le crapauduc relie à nouveau les deux milieux de vie des crapauds.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chaque mesure dans l'une des trois catégories suivantes : protection d'un espace, protection d'une espèce, action individuelle. a) Créer une réserve naturelle dans un marais. b) Interdire la cueillette d'une orchidée rare. c) Installer un nichoir dans son jardin. d) Fixer un quota de pêche pour le thon rouge. e) Participer à un comptage d'oiseaux de sciences participatives. f) Créer un parc national.",
              hint: "Demandez-vous si la mesure concerne un territoire entier, une espèce précise, ou ce qu'une personne fait chez elle ou dans son temps libre.",
              solution: [
                "Protection d'un espace : a) la réserve naturelle du marais ; f) le parc national.",
                "Protection d'une espèce : b) l'interdiction de cueillir l'orchidée rare ; d) le quota de pêche du thon rouge.",
                "Action individuelle : c) le nichoir ; e) le comptage d'oiseaux.",
                "Réponse : a et f protègent des espaces, b et d protègent des espèces, c et e sont des actions individuelles.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Des élèves comptent les papillons pendant 15 minutes, le même jour, à la même heure, dans deux jardins voisins. Jardin A, pelouse tondue chaque semaine et traitée aux pesticides : 6 papillons de 2 espèces. Jardin B, avec un coin de fleurs sauvages, sans pesticides : 30 papillons de 7 espèces. 1. Combien de fois plus de papillons trouve-t-on dans le jardin B ? 2. Pourquoi les élèves ont-ils compté le même jour, à la même heure et pendant la même durée ? 3. Proposer une explication à la différence observée. 4. Proposer deux conseils au propriétaire du jardin A.",
              hint: "Pour la question 2, pensez à ce qui pourrait fausser la comparaison (la météo, l'heure). Pour la question 3, demandez-vous de quoi les papillons ont besoin.",
              solution: [
                "1. 30 ÷ 6 = 5 : il y a 5 fois plus de papillons dans le jardin B (et 7 espèces au lieu de 2).",
                "2. Pour que seule la différence entre les jardins explique le résultat : la météo, l'heure et la durée du comptage peuvent changer le nombre de papillons observés.",
                "3. Le jardin B offre des fleurs sauvages, qui nourrissent les papillons (nectar) et leurs chenilles, et il n'y a pas de pesticides pour les tuer. Le jardin A offre peu de nourriture et contient des pesticides.",
                "4. Conseils : laisser un coin sans tonte avec des fleurs sauvages ; arrêter les pesticides (ce qui est d'ailleurs obligatoire pour les particuliers depuis 2019).",
                "Réponse : 5 fois plus de papillons dans le jardin B, grâce à la nourriture disponible et à l'absence de pesticides.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Une région doit construire une route entre deux villes. Tracé 1 : il traverse une forêt et détruit 12 ha de bois, au milieu d'un corridor emprunté par des cerfs et des chevreuils. Tracé 2 : il longe la forêt, détruit 3 ha de bois, mais il est plus long et plus cher. La règle fixée pour ce projet impose de replanter 2 ha de forêt pour chaque hectare détruit. 1. Calculer la surface à replanter pour chaque tracé. 2. En utilisant la règle « éviter, réduire, compenser », dire quel tracé est préférable pour la biodiversité. 3. Proposer un aménagement supplémentaire pour limiter les effets de la route sur les animaux. 4. Pourquoi replanter une forêt ne compense-t-il qu'imparfaitement la destruction d'une forêt ancienne ?",
              hint: "Multipliez chaque surface détruite par 2. Rappelez-vous que la compensation n'arrive qu'en dernier recours, après avoir cherché à éviter et à réduire.",
              solution: [
                "1. Tracé 1 : 12 × 2 = 24 ha à replanter. Tracé 2 : 3 × 2 = 6 ha à replanter.",
                "2. Le tracé 2 évite la traversée du corridor et réduit la surface détruite (3 ha au lieu de 12 ha, soit 4 fois moins). La règle demande d'éviter puis de réduire avant de compenser : le tracé 2 est préférable pour la biodiversité, même s'il coûte plus cher.",
                "3. Construire des passages à faune (un pont végétalisé au-dessus de la route, ou un passage en dessous) là où les animaux ont l'habitude de circuler, et poser des clôtures qui les guident vers ces passages.",
                "4. Une forêt replantée est jeune : il faut des dizaines, voire des centaines d'années, pour qu'elle retrouve de grands arbres, du bois mort et toutes les espèces d'une forêt ancienne. Et elle est située ailleurs, donc elle ne remplace pas le corridor détruit.",
                "Réponse : 24 ha contre 6 ha à replanter ; le tracé 2 est préférable, complété par des passages à faune ; la compensation reste imparfaite, d'où la priorité donnée à l'évitement.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : préserver la biodiversité.",
            statements: [
              { text: "Une espèce disparue peut toujours être recréée plus tard.", true: false, why: "Une espèce éteinte disparaît pour toujours : c'est pourquoi il faut agir avant." },
              { text: "Un corridor écologique permet aux animaux de circuler entre deux milieux.", true: true, why: "Haies, bandes boisées et passages à faune relient les milieux de vie." },
              { text: "Relâcher sa tortue de Floride dans un étang aide la biodiversité locale.", true: false, why: "C'est une espèce exotique qui concurrence les espèces locales : il ne faut jamais la relâcher." },
              { text: "Le premier parc national français est celui de la Vanoise, créé en 1963.", true: true, why: "Il a été créé en 1963 dans les Alpes, notamment pour protéger le bouquetin." },
              { text: "Protéger un seul grand espace isolé suffit pour préserver toutes les espèces.", true: false, why: "Les êtres vivants ont aussi besoin de circuler entre les milieux : il faut des corridors qui les relient." },
              { text: "Des collégiens peuvent aider les scientifiques en comptant les oiseaux de leur jardin.", true: true, why: "Les sciences participatives, comme Vigie-Nature, reposent sur les observations de volontaires." },
              { text: "Compenser une destruction est la première chose à faire dans un projet d'aménagement.", true: false, why: "La règle est d'abord d'éviter, puis de réduire ; compenser n'intervient qu'en dernier recours." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces exemples est un service rendu par la biodiversité ?",
              options: ["La formation des nuages", "Les marées de la Manche et de l'Atlantique", "La pollinisation des cultures", "Le vent"],
              answer: 2,
              why: "Les insectes pollinisateurs permettent à de nombreuses cultures de produire des fruits et des graines.",
            },
            {
              q: "Qu'est-ce qu'un crapauduc ?",
              options: ["Un tunnel sous une route", "Une réserve pour crapauds", "Un étang artificiel", "Une espèce de crapaud"],
              answer: 0,
              why: "Le crapauduc permet aux amphibiens de traverser une route sans risquer d'être écrasés.",
            },
            {
              q: "Quel ordre faut-il suivre pour un projet d'aménagement ?",
              options: ["Compenser, réduire, éviter", "Éviter, réduire, compenser", "Réduire, compenser, éviter", "Compenser, éviter, réduire"],
              answer: 1,
              why: "On cherche d'abord à éviter les dégâts, puis à réduire ceux qui restent, et on ne compense qu'en dernier recours.",
            },
            {
              q: "Pourquoi fixe-t-on des quotas de pêche ?",
              options: ["Pour vendre le poisson plus cher", "Pour réserver la pêche aux grands bateaux", "Pour pêcher le plus possible chaque année", "Pour laisser les poissons se reproduire"],
              answer: 3,
              why: "En limitant la quantité pêchée, on laisse assez de poissons se reproduire pour renouveler la population.",
            },
            {
              q: "Laquelle de ces actions est utile à la biodiversité ?",
              options: ["Tondre toute la pelouse chaque semaine", "Laisser un coin de fleurs sauvages", "Traiter le jardin aux pesticides", "Relâcher un poisson rouge dans une rivière"],
              answer: 1,
              why: "Un coin de fleurs sauvages nourrit et abrite les insectes pollinisateurs.",
            },
          ],
          trap: "Croire que protéger la biodiversité consiste seulement à créer des réserves isolées, ou que l'on peut toujours compenser une destruction. Il faut aussi relier les milieux, et la priorité est d'éviter de les détruire.",
          method: "Pour argumenter un choix d'aménagement, utilisez la règle « éviter, réduire, compenser » comme plan : pour chaque solution, dites ce qui est évité, ce qui est réduit, ce qui reste à compenser, puis concluez en comparant.",
        },
      ],
    },
  ],
}
