import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-4e',
  chapters: [
    /* ==================================================================== */
    /* LA REPRODUCTION DES ÊTRES VIVANTS                                    */
    /* ==================================================================== */
    {
      id: 'reproduction-vivant',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sexuee-asexuee',
          title: "Reproduction sexuée et reproduction asexuée",
          minutes: 30,
          objectives: [
            "Distinguer la reproduction sexuée et la reproduction asexuée chez les animaux et chez les végétaux.",
            "Identifier les cellules reproductrices (gamètes) et la fécondation, qui forme une cellule-œuf.",
            "Relier chaque mode de reproduction à la ressemblance ou à la diversité des descendants.",
            "Expliquer comment la reproduction permet à une population de se maintenir et de coloniser un milieu.",
          ],
          course: [
            {
              heading: "Se reproduire : produire de nouveaux individus",
              paragraphs: [
                "Tout être vivant finit par mourir. Pourtant, les chênes, les fourmis ou les êtres humains sont toujours là, génération après génération. C'est grâce à la reproduction : chaque être vivant peut produire de nouveaux individus de la même espèce, ses descendants.",
                "La reproduction permet à une population de se maintenir dans le temps, mais aussi d'augmenter son effectif et de s'installer dans de nouveaux endroits : on dit qu'elle colonise le milieu. Il existe deux grands modes de reproduction : la reproduction sexuée et la reproduction asexuée.",
              ],
              box: { label: "Définition", text: "La reproduction est la production de nouveaux individus de la même espèce. Elle peut être sexuée (deux cellules reproductrices s'unissent) ou asexuée (un seul parent produit des descendants sans cellule reproductrice)." },
            },
            {
              heading: "La reproduction sexuée : deux gamètes qui s'unissent",
              paragraphs: [
                "Dans la reproduction sexuée, chaque parent fabrique des cellules reproductrices, appelées gamètes. Le gamète mâle (le spermatozoïde chez les animaux) s'unit au gamète femelle (l'ovule, ou ovocyte) : c'est la fécondation. Elle forme une cellule unique, la cellule-œuf, qui se divise de très nombreuses fois pour donner un nouvel individu.",
                "La fécondation peut avoir lieu hors du corps de la femelle, dans l'eau : c'est la fécondation externe, chez la plupart des poissons et chez les grenouilles. Elle peut aussi avoir lieu dans le corps de la femelle : c'est la fécondation interne, chez les mammifères, les oiseaux, les reptiles ou les insectes. Chez les plantes à fleurs, le gamète mâle est apporté par le grain de pollen.",
                "Certains animaux, comme l'escargot ou le ver de terre, sont hermaphrodites : chaque individu produit à la fois des gamètes mâles et des gamètes femelles. Pourtant, deux escargots doivent en général s'accoupler pour se reproduire.",
                "Les descendants issus de la reproduction sexuée sont tous différents les uns des autres, et différents de leurs parents : chacun reçoit un mélange unique de caractères venant des deux parents. Dans une portée de chatons, aucun chaton n'est la copie exacte d'un autre.",
              ],
              box: { label: "À retenir", text: "Reproduction sexuée : gamète mâle + gamète femelle → fécondation → cellule-œuf → nouvel individu. Les descendants sont tous différents : la reproduction sexuée crée de la diversité." },
            },
            {
              heading: "La reproduction asexuée : un seul parent, des copies",
              paragraphs: [
                "Dans la reproduction asexuée, un seul parent suffit et il n'y a ni gamète ni fécondation. Un morceau du parent se développe et devient un nouvel individu. Chez les végétaux, on parle aussi de multiplication végétative.",
                "Les exemples sont nombreux. Le fraisier produit de longues tiges rampantes, les stolons, qui s'enracinent et donnent de nouveaux fraisiers. Une pomme de terre plantée (un tubercule) donne une nouvelle plante. Un jardinier peut faire une bouture : un morceau de tige de géranium planté dans la terre forme des racines. Chez les animaux, l'hydre d'eau douce forme sur son corps un bourgeon qui se détache et devient une petite hydre. Une bactérie se divise simplement en deux bactéries.",
                "Les descendants obtenus par reproduction asexuée sont identiques entre eux et identiques à leur parent : ce sont des clones. Tous les fraisiers issus des stolons d'un même plant donnent par exemple des fraises de la même variété.",
              ],
              box: { label: "Définition", text: "Un clone est un ensemble d'individus identiques entre eux et identiques à l'individu dont ils proviennent. La reproduction asexuée produit des clones." },
            },
            {
              heading: "Deux façons de peupler un milieu",
              paragraphs: [
                "La reproduction asexuée est rapide et ne demande pas de partenaire : un seul individu installé dans un endroit favorable peut, en peu de temps, le recouvrir de ses clones. Mais comme tous les individus sont identiques, une maladie ou un changement du milieu qui tue l'un d'eux peut tous les tuer.",
                "La reproduction sexuée est plus lente : il faut que deux partenaires se rencontrent. En revanche, elle produit des individus tous différents. Si le milieu change, certains d'entre eux auront peut-être des caractères qui leur permettent de survivre. Beaucoup d'espèces utilisent les deux modes : le fraisier fleurit et fait des fruits, mais produit aussi des stolons.",
              ],
              box: { label: "À retenir", text: "Reproduction asexuée : rapide, un seul parent, descendants identiques (clones). Reproduction sexuée : deux parents, descendants tous différents. Les deux modes permettent de coloniser un milieu." },
            },
          ],
          keyPoints: [
            "La reproduction produit de nouveaux individus de la même espèce : elle maintient les populations et leur permet de coloniser le milieu.",
            "Reproduction sexuée : un gamète mâle et un gamète femelle s'unissent lors de la fécondation et forment une cellule-œuf.",
            "La fécondation est externe (dans l'eau) ou interne (dans le corps de la femelle).",
            "Les descendants issus de la reproduction sexuée sont tous différents : elle crée de la diversité.",
            "Reproduction asexuée : un seul parent, sans gamète ni fécondation (stolons, tubercules, boutures, bourgeonnement, division).",
            "La reproduction asexuée produit des clones, identiques entre eux et à leur parent.",
          ],
          example: {
            statement: "Dans des conditions de laboratoire très favorables, une bactérie peut se diviser en deux bactéries toutes les 20 minutes. On part d'une seule bactérie. 1) De quel mode de reproduction s'agit-il ? 2) Combien de bactéries obtient-on au bout de 2 heures, si aucune ne meurt ? 3) Comment sont ces bactéries entre elles ?",
            solution: [
              "1) Une seule bactérie se divise, sans gamète ni fécondation : c'est une reproduction asexuée.",
              "2) Je compte le nombre de divisions : 2 heures = 120 minutes, et 120 ÷ 20 = 6 divisions.",
              "À chaque division, le nombre de bactéries double : 1 → 2 → 4 → 8 → 16 → 32 → 64.",
              "Au bout de 2 heures, on obtient donc 64 bactéries (c'est 2 × 2 × 2 × 2 × 2 × 2 = 64).",
              "3) Ces bactéries sont toutes issues d'une seule bactérie par reproduction asexuée : elles sont identiques entre elles, ce sont des clones.",
              "Réponse : reproduction asexuée ; 64 bactéries identiques au bout de 2 heures.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque exemple dans la reproduction sexuée ou dans la reproduction asexuée. a) Un fraisier produit des stolons qui donnent de nouveaux fraisiers. b) Une grenouille femelle pond ses ovules dans l'eau, où un mâle libère ses spermatozoïdes. c) Un morceau de tige de géranium planté dans la terre forme des racines. d) Un pommier forme des pommes qui contiennent des pépins, ses graines. e) Une hydre forme un bourgeon qui se détache.",
              hint: "Demandez-vous à chaque fois s'il y a eu union de deux gamètes (fécondation) ou non.",
              solution: [
                "a) Pas de gamète : reproduction asexuée (les stolons donnent des clones).",
                "b) Les ovules sont fécondés par les spermatozoïdes : reproduction sexuée, avec une fécondation externe.",
                "c) Pas de gamète : reproduction asexuée (c'est un bouturage).",
                "d) Les graines se forment après la fécondation dans la fleur : reproduction sexuée.",
                "e) Pas de gamète : reproduction asexuée (bourgeonnement).",
                "Bilan : reproduction sexuée pour b et d ; reproduction asexuée pour a, c et e.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une jardinière plante un seul fraisier. Chaque année, chaque fraisier présent produit 5 stolons qui donnent chacun un nouveau fraisier, et aucun fraisier ne meurt. 1) Combien de fraisiers aura-t-elle au bout d'un an ? au bout de deux ans ? 2) Ces fraisiers seront-ils semblables ou différents ? Justifiez. 3) Une maladie touche cette variété de fraisier. Pourquoi risque-t-elle de détruire toute la plantation ?",
              hint: "Chaque année, il faut ajouter aux fraisiers déjà présents les nouveaux fraisiers produits par chacun d'eux.",
              solution: [
                "1) Au bout d'un an : 1 fraisier + 1 × 5 nouveaux = 6 fraisiers.",
                "Au bout de deux ans : 6 fraisiers + 6 × 5 nouveaux = 6 + 30 = 36 fraisiers.",
                "2) Les stolons sont une reproduction asexuée : tous les fraisiers sont identiques au premier plant et identiques entre eux, ce sont des clones.",
                "3) Si le premier fraisier ne résiste pas à cette maladie, aucun de ses clones ne lui résiste, puisqu'ils ont exactement les mêmes caractères : toute la plantation risque d'être détruite.",
                "Réponse : 6 fraisiers après un an, 36 après deux ans, tous identiques, donc tous sensibles à la même maladie.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici le cycle de vie de nombreux pucerons, de petits insectes qui vivent sur les plantes. Au printemps et en été, quand la nourriture (la sève des plantes) est abondante, les pucerons sont tous des femelles : chaque femelle donne naissance à des petites femelles sans fécondation, et plusieurs générations se succèdent en quelques semaines. En automne apparaissent des mâles et des femelles qui s'accouplent ; les femelles pondent alors des œufs fécondés, qui résistent au froid et passent l'hiver. 1) Quel mode de reproduction les pucerons utilisent-ils en été ? en automne ? Justifiez. 2) Expliquez l'intérêt de la reproduction d'été pour coloniser une plante. 3) Expliquez l'intérêt de la reproduction d'automne pour la survie de l'espèce.",
              hint: "Cherchez à chaque saison s'il y a fécondation, puis réfléchissez à ce que chaque mode apporte : la vitesse ou la diversité.",
              solution: [
                "1) En été, les femelles produisent des descendants sans fécondation : c'est une reproduction asexuée. En automne, mâles et femelles s'accouplent et les œufs sont fécondés : c'est une reproduction sexuée.",
                "2) En été, la nourriture est abondante. La reproduction asexuée est rapide et ne demande pas de partenaire : chaque femelle produit très vite de nombreuses femelles qui se reproduisent à leur tour. Les pucerons envahissent donc très rapidement la plante.",
                "3) En automne, la reproduction sexuée produit des œufs résistants au froid, qui permettent de passer l'hiver. De plus, les jeunes qui en sortent sont tous différents : si les conditions changent, certains ont plus de chances de survivre.",
                "Conclusion : les pucerons combinent les deux modes de reproduction, la vitesse de la reproduction asexuée en été et la diversité et la résistance de la reproduction sexuée avant l'hiver.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Sexuée ou asexuée, testez vos idées.",
            statements: [
              { text: "La reproduction sexuée nécessite une fécondation.", true: true, why: "Un gamète mâle et un gamète femelle s'unissent pour former une cellule-œuf." },
              { text: "Les descendants issus de la reproduction asexuée sont tous différents.", true: false, why: "Ils sont identiques entre eux et à leur parent : ce sont des clones." },
              { text: "Une bouture de géranium est un exemple de reproduction asexuée.", true: true, why: "Un morceau de la plante donne une nouvelle plante, sans gamète ni fécondation." },
              { text: "Seuls les animaux peuvent avoir une reproduction sexuée.", true: false, why: "Les plantes à fleurs ont aussi une reproduction sexuée : le pollen apporte le gamète mâle." },
              { text: "Chez la grenouille, la fécondation a lieu dans l'eau.", true: true, why: "C'est une fécondation externe : les gamètes se rencontrent hors du corps de la femelle." },
              { text: "Un escargot hermaphrodite n'a jamais besoin de partenaire pour se reproduire.", true: false, why: "Il produit les deux types de gamètes, mais deux escargots s'accouplent en général pour se reproduire." },
              { text: "Une même espèce peut utiliser les deux modes de reproduction.", true: true, why: "Le fraisier fleurit et produit des graines, mais il produit aussi des stolons." },
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on la cellule formée par la fécondation ?",
              options: ["Un gamète", "La cellule-œuf", "Un clone", "Un bourgeon"],
              answer: 1,
              why: "La fécondation unit un gamète mâle et un gamète femelle en une seule cellule, la cellule-œuf, qui se développe en nouvel individu.",
            },
            {
              q: "Lequel de ces exemples est une reproduction asexuée ?",
              options: ["La ponte d'une poule après accouplement", "La formation des graines d'un pommier", "La naissance d'un veau", "Les stolons du fraisier"],
              answer: 3,
              why: "Les stolons donnent de nouveaux fraisiers sans gamète ni fécondation.",
            },
            {
              q: "Que peut-on dire des descendants d'un même parent obtenus par reproduction asexuée ?",
              options: ["Ils sont identiques : ce sont des clones", "Ils sont tous de sexes différents", "Ils ressemblent pour moitié à chaque parent"],
              answer: 0,
              why: "Sans fécondation, les descendants reçoivent exactement les caractères de leur unique parent.",
            },
            {
              q: "Quel est l'avantage principal de la reproduction sexuée ?",
              options: ["Elle est beaucoup plus rapide que la reproduction asexuée", "Elle ne demande pas de partenaire", "Elle produit des individus tous différents", "Elle produit des copies du parent"],
              answer: 2,
              why: "Chaque descendant reçoit un mélange unique de caractères des deux parents : la diversité aide l'espèce à faire face aux changements du milieu.",
            },
            {
              q: "Chez quel animal la fécondation est-elle externe ?",
              options: ["Le chat", "La truite", "La poule", "Le lézard"],
              answer: 1,
              why: "Chez la plupart des poissons, comme la truite, les gamètes sont libérés dans l'eau, où a lieu la fécondation.",
            },
          ],
          trap: "Croire que la reproduction asexuée ne concerne que les végétaux. Des animaux comme l'hydre ou les pucerons, et toutes les bactéries, se reproduisent aussi sans fécondation.",
          method: "Pour classer un exemple, posez-vous une seule question : y a-t-il union de deux gamètes ? Si oui, la reproduction est sexuée et les descendants sont différents ; si non, elle est asexuée et les descendants sont des clones.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'plantes-a-fleurs',
          title: "La reproduction des plantes à fleurs",
          minutes: 30,
          objectives: [
            "Identifier les organes reproducteurs d'une fleur : étamines et pistil.",
            "Décrire la pollinisation et le rôle des pollinisateurs.",
            "Expliquer la transformation de la fleur en fruit et de l'ovule en graine après la fécondation.",
            "Relier la dispersion des graines à la colonisation du milieu par les plantes à fleurs.",
          ],
          course: [
            {
              heading: "La fleur, organe de la reproduction sexuée",
              paragraphs: [
                "Une fleur est formée de plusieurs pièces disposées en cercles. De l'extérieur vers l'intérieur, on trouve les sépales (souvent verts, ils protègent le bouton), les pétales (souvent colorés), les étamines, puis, au centre, le pistil.",
                "Les étamines sont les organes reproducteurs mâles. Chacune est formée d'un filet qui porte une anthère, un petit sac qui produit les grains de pollen. Chaque grain de pollen contient un gamète mâle.",
                "Le pistil est l'organe reproducteur femelle. Il est formé d'un stigmate (sa partie supérieure, souvent collante), d'un style (une sorte de tube) et, à sa base, d'un ovaire. L'ovaire contient un ou plusieurs ovules ; chaque ovule renferme un gamète femelle.",
                "La plupart des fleurs ont à la fois des étamines et un pistil. Mais chez certaines plantes, les fleurs mâles et les fleurs femelles sont séparées : sur la même plante, comme chez le maïs ou le noisetier, ou sur des plantes différentes, comme chez le kiwi ou le houx.",
              ],
              box: { label: "Repère", text: "Étamines (filet + anthère) : organes mâles, produisent le pollen. Pistil (stigmate + style + ovaire) : organe femelle, l'ovaire contient les ovules." },
            },
            {
              heading: "La pollinisation : transporter le pollen",
              paragraphs: [
                "Pour qu'il y ait fécondation, le pollen doit être transporté des étamines jusqu'au stigmate d'une fleur de la même espèce : c'est la pollinisation. Souvent, le pollen d'une fleur va sur la fleur d'une autre plante de la même espèce, ce qui mélange les caractères de deux parents.",
                "Le pollen peut être transporté par le vent, chez les graminées (blé, herbes des prés) ou le noisetier : leurs fleurs sont discrètes et produisent un pollen léger et très abondant. Il est le plus souvent transporté par des animaux, surtout des insectes (abeilles, bourdons, papillons, mouches). Ces fleurs attirent les insectes par leurs couleurs, leur odeur et leur nectar, un liquide sucré.",
                "En butinant, l'insecte se nourrit de nectar et de pollen, et des grains de pollen se collent à son corps. Il les dépose sur le stigmate de la fleur suivante. La plante et l'insecte profitent tous deux de cette association : on parle de coopération, ou mutualisme. Aujourd'hui, de nombreux pollinisateurs sont menacés, notamment par certains pesticides et par la disparition des haies et des fleurs sauvages.",
              ],
              box: { label: "Définition", text: "La pollinisation est le transport du pollen des étamines jusqu'au stigmate d'une fleur de la même espèce, par le vent ou par des animaux pollinisateurs." },
            },
            {
              heading: "De la fleur au fruit, de l'ovule à la graine",
              paragraphs: [
                "Sur le stigmate, le grain de pollen germe : il forme un long tube, le tube pollinique, qui s'enfonce dans le style jusqu'à un ovule. Le gamète mâle descend dans ce tube et s'unit au gamète femelle contenu dans l'ovule : c'est la fécondation. Elle forme une cellule-œuf, qui se développe en embryon, la future petite plante.",
                "Après la fécondation, la fleur se transforme : les pétales et les étamines fanent et tombent. Chaque ovule fécondé devient une graine, qui contient l'embryon et des réserves. L'ovaire grossit et devient le fruit, qui entoure les graines. Une cerise vient d'un ovaire qui contenait un seul ovule (la graine est dans le noyau) ; une tomate, d'un ovaire qui en contenait beaucoup.",
              ],
              box: { label: "À retenir", text: "Après la fécondation : l'ovule devient la graine, l'ovaire devient le fruit. Un fruit contient donc toujours une ou plusieurs graines (sauf chez certaines variétés cultivées)." },
            },
            {
              heading: "Disperser les graines pour coloniser le milieu",
              paragraphs: [
                "Une plante ne peut pas se déplacer, mais ses graines voyagent : c'est la dissémination. Les graines du pissenlit et les fruits ailés de l'érable sont portés par le vent. Les fruits charnus (mûres, cerises) sont mangés par des animaux qui rejettent les graines plus loin avec leurs excréments. Les fruits à crochets de la bardane s'accrochent aux poils des animaux. Les noix de coco flottent et peuvent être transportées par la mer.",
                "Quand une graine tombe dans un endroit favorable, avec de l'eau, une température suffisante et du dioxygène, elle germe et donne une nouvelle plante. Grâce aux graines, les plantes à fleurs peuvent ainsi coloniser des milieux parfois très éloignés de la plante qui les a produites.",
              ],
            },
          ],
          keyPoints: [
            "Les étamines (filet + anthère) produisent le pollen, qui contient les gamètes mâles.",
            "Le pistil (stigmate, style, ovaire) contient dans son ovaire les ovules, qui renferment les gamètes femelles.",
            "La pollinisation est le transport du pollen jusqu'au stigmate, par le vent ou par des animaux (surtout des insectes).",
            "Plante et pollinisateur coopèrent : l'insecte se nourrit, la plante est pollinisée.",
            "Le tube pollinique conduit le gamète mâle jusqu'à l'ovule, où a lieu la fécondation.",
            "Après la fécondation, l'ovule devient la graine et l'ovaire devient le fruit.",
            "La dissémination des graines (vent, animaux, eau) permet de coloniser de nouveaux milieux.",
          ],
          example: {
            statement: "Données fictives. Sur un cerisier, un élève enferme 50 fleurs encore en bouton dans des sachets en tissu très fin, que les insectes ne peuvent pas traverser. 50 autres fleurs sont laissées à l'air libre. Quelques semaines plus tard, il compte 3 cerises sur les fleurs ensachées et 38 cerises sur les fleurs libres. 1) Quel est le rôle des fleurs laissées libres ? 2) Calculez le pourcentage de fleurs devenues des fruits dans chaque lot. 3) Que concluez-vous ?",
            solution: [
              "1) Les fleurs libres servent de témoin : elles ne diffèrent des fleurs ensachées que par l'accès des insectes.",
              "2) Fleurs ensachées : 3 ÷ 50 × 100 = 6 % des fleurs ont donné un fruit.",
              "Fleurs libres : 38 ÷ 50 × 100 = 76 % des fleurs ont donné un fruit.",
              "3) Quand les insectes ne peuvent pas atteindre les fleurs, presque aucun fruit ne se forme. Les insectes transportent donc le pollen d'une fleur à l'autre : ils sont nécessaires à la pollinisation du cerisier.",
              "Réponse : sans pollinisateurs, très peu de fleurs sont fécondées, et donc très peu de fleurs deviennent des cerises (6 % contre 76 %).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque partie de la fleur à son rôle. Parties : a) anthère ; b) stigmate ; c) ovaire ; d) ovule ; e) pétale. Rôles : 1) devient la graine après la fécondation ; 2) produit les grains de pollen ; 3) reçoit le pollen ; 4) attire les insectes par sa couleur ; 5) devient le fruit après la fécondation.",
              hint: "Rappelez-vous la règle : l'ovule donne la graine, l'ovaire donne le fruit.",
              solution: [
                "a) L'anthère produit les grains de pollen : a → 2.",
                "b) Le stigmate reçoit le pollen : b → 3.",
                "c) L'ovaire devient le fruit : c → 5.",
                "d) L'ovule devient la graine : d → 1.",
                "e) Le pétale attire les insectes par sa couleur : e → 4.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Sur des plants de pois de senteur, on forme quatre lots de fleurs. Lot A : fleurs intactes, laissées libres. Lot B : on retire le pistil des fleurs. Lot C : on retire les étamines des fleurs encore en bouton, puis on les enferme dans un sachet. Lot D : comme le lot C, mais on dépose à la main, sur le stigmate, du pollen d'une autre fleur de pois de senteur. Résultats : des fruits (des gousses) se forment dans les lots A et D, aucun dans les lots B et C. 1) Quel organe de la fleur est indispensable pour obtenir un fruit ? Justifiez avec les lots A et B. 2) Que montre la comparaison des lots C et D ? 3) Quelle étape de la reproduction a été réalisée à la main dans le lot D ?",
              hint: "Comparez chaque fois deux lots qui ne diffèrent que par un seul élément.",
              solution: [
                "1) Les lots A et B ne diffèrent que par la présence du pistil. Sans pistil, aucun fruit : le pistil est indispensable, car c'est son ovaire qui devient le fruit.",
                "2) Les lots C et D ne diffèrent que par l'apport de pollen sur le stigmate. Sans pollen, pas de fruit ; avec du pollen, un fruit se forme : le pollen est nécessaire à la formation du fruit.",
                "3) Dans le lot D, l'expérimentateur a transporté lui-même le pollen jusqu'au stigmate : il a réalisé la pollinisation à la main.",
                "Conclusion : la formation d'un fruit nécessite le pistil et l'arrivée de pollen sur le stigmate, c'est-à-dire une pollinisation suivie d'une fécondation.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Chez le kiwi, chaque plant ne porte que des fleurs mâles ou que des fleurs femelles. Les fruits se forment uniquement sur les plants femelles. Données fictives : un arboriculteur plante 1 plant mâle pour 8 plants femelles, et il installe des ruches d'abeilles dans son verger au moment de la floraison. 1) Son verger compte 72 plants femelles. Combien de plants mâles doit-il planter ? 2) Pourquoi doit-il planter des plants mâles, alors qu'ils ne donnent jamais de fruits ? 3) Expliquez l'intérêt d'installer des ruches. 4) Un voisin traite ses champs avec un insecticide pendant la floraison. Quelles conséquences cela peut-il avoir sur la récolte de kiwis ? Argumentez.",
              hint: "Suivez le trajet du pollen : d'où part-il, où doit-il arriver, et qui le transporte ?",
              solution: [
                "1) Il faut 1 plant mâle pour 8 plants femelles : 72 ÷ 8 = 9 plants mâles.",
                "2) Les fleurs femelles n'ont pas d'étamines : le pollen ne peut venir que des fleurs mâles. Sans plants mâles, pas de pollen, donc pas de fécondation et pas de fruits.",
                "3) Le pollen doit être transporté des plants mâles jusqu'aux stigmates des fleurs femelles. Les abeilles, en butinant, assurent ce transport : elles réalisent la pollinisation.",
                "4) Si l'insecticide tue ou affaiblit les abeilles, moins de pollen est transporté jusqu'aux fleurs femelles. Moins de fleurs sont fécondées, donc moins de fleurs deviennent des fruits : la récolte de kiwis diminue.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la reproduction d'une plante à fleurs, du pollen à la nouvelle plante.",
            items: [
              "Les anthères des étamines produisent les grains de pollen.",
              "Un insecte transporte le pollen jusqu'au stigmate d'une autre fleur.",
              "Le grain de pollen germe et forme un tube pollinique.",
              "Le gamète mâle s'unit au gamète femelle dans l'ovule : c'est la fécondation.",
              "L'ovule devient une graine et l'ovaire devient un fruit.",
              "La graine est dispersée, puis elle germe et donne une nouvelle plante.",
            ],
          },
          quiz: [
            {
              q: "Quel organe de la fleur produit le pollen ?",
              options: ["Le stigmate", "L'ovaire", "L'anthère", "Le sépale"],
              answer: 2,
              why: "L'anthère, au sommet du filet de l'étamine, produit les grains de pollen.",
            },
            {
              q: "Que devient l'ovaire après la fécondation ?",
              options: ["Le fruit", "La graine", "Le pollen", "La tige"],
              answer: 0,
              why: "L'ovaire grossit et devient le fruit ; ce sont les ovules qu'il contient qui deviennent les graines.",
            },
            {
              q: "Qu'est-ce que la pollinisation ?",
              options: ["L'union des deux gamètes dans l'ovule", "La germination d'une graine", "Le transport du pollen jusqu'au stigmate", "La chute des pétales et des étamines après la floraison"],
              answer: 2,
              why: "La pollinisation précède la fécondation : le pollen est d'abord transporté jusqu'au stigmate.",
            },
            {
              q: "Pourquoi l'abeille visite-t-elle les fleurs ?",
              options: ["Pour pondre ses œufs à l'intérieur de l'ovaire", "Pour se nourrir de nectar et de pollen", "Pour manger les graines"],
              answer: 1,
              why: "L'abeille se nourrit ; en passant de fleur en fleur, elle transporte involontairement le pollen.",
            },
            {
              q: "Comment les graines de pissenlit sont-elles dispersées ?",
              options: ["Par l'eau", "Par les fourmis", "Par l'explosion du fruit", "Par le vent"],
              answer: 3,
              why: "Leurs fruits portent une aigrette de fins poils qui leur permet d'être emportés par le vent.",
            },
          ],
          trap: "Confondre pollinisation et fécondation. La pollinisation est le transport du pollen jusqu'au stigmate ; la fécondation vient après, quand le gamète mâle, arrivé par le tube pollinique, s'unit au gamète femelle dans l'ovule.",
          method: "Pour ne plus confondre fruit et graine, coupez une tomate ou une pomme : la partie charnue qui entoure les pépins vient de l'ovaire (c'est le fruit), et chaque pépin vient d'un ovule (c'est une graine). Retenez la paire : ovaire → fruit, ovule → graine.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'facteurs-reproduction',
          title: "Les facteurs qui influencent la reproduction",
          minutes: 25,
          objectives: [
            "Identifier des facteurs du milieu qui influencent la reproduction : température, durée du jour, eau, nourriture.",
            "Exploiter les résultats d'une expérience pour mettre en évidence l'effet d'un facteur sur la reproduction.",
            "Relier le nombre de descendants à leurs chances de survie.",
            "Expliquer quelques effets des activités humaines sur la reproduction des êtres vivants.",
          ],
          course: [
            {
              heading: "La reproduction dépend des conditions du milieu",
              paragraphs: [
                "Beaucoup d'êtres vivants ne se reproduisent pas n'importe quand. Les oiseaux de nos jardins construisent leur nid au printemps, les cerisiers fleurissent au printemps, les grenouilles pondent à la fin de l'hiver. La reproduction a lieu au moment où les conditions sont favorables à la survie des jeunes.",
                "Les principaux facteurs du milieu qui influencent la reproduction sont la température, la durée du jour (on parle de durée d'éclairement), la présence d'eau et la quantité de nourriture disponible. Ces facteurs changent avec les saisons et d'une année à l'autre.",
              ],
              box: { label: "Définition", text: "Un facteur du milieu est une caractéristique de l'environnement (température, lumière, eau, nourriture...) qui peut modifier la vie d'un être vivant, par exemple sa reproduction." },
            },
            {
              heading: "La lumière et la température",
              paragraphs: [
                "Les poules pondent davantage quand les jours sont longs. C'est pourquoi des éleveurs éclairent leurs poulaillers en hiver, pour que les poules continuent à pondre. De même, la floraison de nombreuses plantes dépend de la durée du jour : certaines fleurissent quand les jours sont longs, d'autres, comme le chrysanthème, fleurissent quand les jours raccourcissent, en automne.",
                "La température joue aussi un rôle. Les grenouilles rousses ne pondent que lorsque l'eau des mares s'est un peu réchauffée. Chez les tortues marines, la température du sable pendant le développement des œufs détermine même le sexe des petits : un nid plus chaud donne davantage de femelles, un nid plus frais davantage de mâles.",
              ],
            },
            {
              heading: "Eau, nourriture et survie des jeunes",
              paragraphs: [
                "Se reproduire demande beaucoup d'énergie. Quand la nourriture est rare, de nombreux animaux produisent moins de jeunes. Le harfang des neiges, une chouette de l'Arctique, pond par exemple davantage d'œufs les années où les lemmings, ses proies, sont nombreux. L'eau est aussi indispensable : les grenouilles ont besoin de mares pour pondre, et dans les déserts, beaucoup de plantes ne fleurissent qu'après une pluie.",
                "Tous les jeunes ne survivent pas. Certaines espèces, comme la morue, pondent des millions d'œufs sans s'en occuper : la plupart des œufs et des larves sont mangés, mais quelques-uns atteignent l'âge adulte. D'autres, comme les mammifères, ont peu de petits mais les protègent et les nourrissent longtemps : chaque petit a plus de chances de survivre.",
              ],
              box: { label: "À retenir", text: "Plus les conditions du milieu sont favorables (température, lumière, eau, nourriture), plus la reproduction est importante. Beaucoup de descendants sans soins, ou peu de descendants protégés : deux façons de maintenir une population." },
            },
            {
              heading: "L'être humain modifie la reproduction des êtres vivants",
              paragraphs: [
                "L'être humain utilise ces facteurs pour produire davantage : serres chauffées et éclairées, arrosage des cultures, alimentation et éclairage des élevages. Il peut ainsi obtenir des fleurs, des fruits ou des œufs en dehors de leur saison naturelle.",
                "Mais certaines activités humaines perturbent la reproduction des êtres vivants. Certains pesticides tuent ou affaiblissent les insectes pollinisateurs, ce qui réduit la formation des fruits. L'assèchement des zones humides fait disparaître les lieux de ponte des amphibiens. Certaines substances rejetées dans l'eau perturbent la reproduction de poissons. Le réchauffement climatique avance la floraison de certaines plantes et, chez les tortues marines, il augmente la proportion de femelles.",
              ],
            },
          ],
          keyPoints: [
            "La reproduction dépend de facteurs du milieu : température, durée du jour, eau, nourriture.",
            "Beaucoup d'espèces se reproduisent à une saison précise, favorable à la survie des jeunes.",
            "La durée du jour agit sur la ponte des poules et sur la floraison de nombreuses plantes.",
            "Chez les tortues marines, la température du nid détermine la proportion de mâles et de femelles.",
            "Beaucoup de descendants peu protégés, ou peu de descendants très protégés : deux stratégies de survie.",
            "Les activités humaines peuvent favoriser la reproduction (serres, élevages) ou la perturber (pesticides, pollution, réchauffement).",
          ],
          example: {
            statement: "Données fictives. Un éleveur compare deux poulaillers identiques (même race de poules, même nombre de poules, même nourriture, même température). Le poulailler A est éclairé 16 heures par jour, le poulailler B seulement 9 heures par jour. En un mois, une poule du poulailler A pond en moyenne 25 œufs, une poule du poulailler B en pond 8. 1) Quel facteur est testé ? 2) Pourquoi les autres conditions sont-elles identiques ? 3) Que concluez-vous ?",
            solution: [
              "1) La seule différence entre les deux poulaillers est la durée d'éclairement : c'est le facteur testé.",
              "2) Toutes les autres conditions sont identiques pour être sûr que la différence de ponte s'explique uniquement par la durée d'éclairement.",
              "3) Je compare : 25 œufs avec 16 heures de lumière, 8 œufs avec 9 heures, soit plus de trois fois plus d'œufs dans le poulailler A.",
              "Conclusion : une longue durée d'éclairement favorise la ponte des poules. Cela explique pourquoi les poules pondent davantage au printemps et en été, quand les jours sont longs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque observation, indiquez le facteur du milieu qui influence la reproduction (température, durée du jour, eau ou nourriture). a) Les grenouilles rousses pondent quand l'eau des mares se réchauffe. b) Dans le désert, certaines plantes fleurissent juste après une pluie. c) Le harfang des neiges pond plus d'œufs quand les lemmings sont abondants. d) Le chrysanthème fleurit quand les jours raccourcissent.",
              hint: "Repérez dans chaque phrase ce qui change dans l'environnement juste avant la reproduction.",
              solution: [
                "a) La température de l'eau.",
                "b) L'eau (la pluie).",
                "c) La nourriture (les lemmings sont ses proies).",
                "d) La durée du jour.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un horticulteur cultive des chrysanthèmes dans deux serres à la même température, avec le même arrosage et le même terreau. Serre 1 : 14 heures de lumière par jour. Serre 2 : 10 heures de lumière par jour. Après deux mois, les plants de la serre 2 sont en fleurs ; ceux de la serre 1 n'ont toujours pas fleuri après trois mois. 1) Quel facteur l'horticulteur étudie-t-il ? 2) Quelle conclusion peut-il tirer ? 3) Dans la nature, en France, à quelle saison les chrysanthèmes fleurissent-ils ? Expliquez. 4) Comment l'horticulteur peut-il obtenir des chrysanthèmes en fleurs au début de l'été ?",
              hint: "En France, les jours sont les plus longs en juin et raccourcissent ensuite jusqu'en décembre.",
              solution: [
                "1) La seule différence entre les deux serres est la durée d'éclairement : c'est le facteur étudié.",
                "2) Les chrysanthèmes ne fleurissent qu'avec des jours courts (10 heures) : une courte durée d'éclairement déclenche leur floraison.",
                "3) Dans la nature, les jours raccourcissent après l'été : les chrysanthèmes fleurissent donc en automne.",
                "4) Au printemps, il peut couvrir les plants plusieurs heures par jour avec une toile opaque pour leur faire « vivre » des jours courts, et ainsi déclencher la floraison plus tôt.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Chez une espèce de tortue marine, on mesure le pourcentage de femelles parmi les petits selon la température du sable pendant le développement des œufs : 27 °C → 10 % de femelles ; 29 °C → 50 % ; 31 °C → 90 %. 1) Décrivez l'effet de la température sur le sexe des petits. 2) Un nid de 100 œufs se développe à 31 °C. Combien de mâles et de femelles obtiendra-t-on si tous les œufs éclosent ? 3) Le réchauffement climatique augmente la température des plages. Quel problème cela pose-t-il pour la reproduction future de cette espèce ? 4) Proposez une mesure que des protecteurs de la nature pourraient prendre sur les plages.",
              hint: "Pour la question 3, demandez-vous ce qui se passe dans une population où il n'y a presque plus de mâles.",
              solution: [
                "1) Plus la température du sable est élevée, plus la proportion de femelles est forte : de 10 % à 27 °C jusqu'à 90 % à 31 °C.",
                "2) À 31 °C : 90 % de 100 œufs = 90 femelles, et 100 - 90 = 10 mâles.",
                "3) Avec des plages plus chaudes, il naîtra presque uniquement des femelles. Or la reproduction sexuée nécessite des mâles et des femelles : s'il y a trop peu de mâles, beaucoup de femelles ne pourront pas se reproduire et la population risque de diminuer.",
                "4) Par exemple, ombrager les nids pour abaisser la température du sable, ou déplacer certains œufs vers des zones plus fraîches et protégées.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque facteur à un exemple de son effet sur la reproduction.",
            pairs: [
              { left: "Durée du jour", right: "Les poules pondent davantage au printemps et en été." },
              { left: "Température", right: "Elle détermine la proportion de femelles chez les tortues marines." },
              { left: "Nourriture", right: "Le harfang pond plus d'œufs quand les lemmings abondent." },
              { left: "Eau", right: "Les grenouilles ont besoin de mares pour pondre." },
              { left: "Pesticides", right: "Ils affaiblissent les pollinisateurs et réduisent les récoltes de fruits." },
            ],
          },
          quiz: [
            {
              q: "Pourquoi certains éleveurs éclairent-ils leurs poulaillers en hiver ?",
              options: ["Pour réchauffer les poules pendant les nuits d'hiver", "Pour que les poules pondent davantage", "Pour faire grandir les poussins", "Pour éloigner les renards"],
              answer: 1,
              why: "Une longue durée d'éclairement favorise la ponte : l'éclairage imite les longues journées d'été.",
            },
            {
              q: "Chez les tortues marines, qu'est-ce qui détermine le sexe des petits ?",
              options: ["La taille de la mère", "La température du nid", "La durée du jour", "La profondeur de l'eau"],
              answer: 1,
              why: "Un nid plus chaud donne davantage de femelles, un nid plus frais davantage de mâles.",
            },
            {
              q: "La morue pond des millions d'œufs. Pourquoi la mer n'est-elle pas envahie de morues ?",
              options: ["Les œufs ne sont jamais fécondés", "Les morues adultes mangent toujours tous leurs propres petits", "La plupart des œufs et des larves sont mangés"],
              answer: 2,
              why: "Sans soins des parents, très peu d'œufs survivent jusqu'à l'âge adulte, ce qui suffit à maintenir la population.",
            },
            {
              q: "Quelle activité humaine perturbe la reproduction des amphibiens ?",
              options: ["L'assèchement des zones humides", "La plantation de haies autour des champs", "La création de mares", "L'éclairage des poulaillers"],
              answer: 0,
              why: "Les amphibiens pondent dans l'eau : supprimer les mares et les zones humides supprime leurs lieux de ponte.",
            },
            {
              q: "Dans une expérience sur l'effet de la lumière, que faut-il garder identique dans tous les lots ?",
              options: ["Uniquement la nourriture donnée aux animaux", "La durée d'éclairement", "Rien, tout peut changer", "Tous les facteurs, sauf la lumière"],
              answer: 3,
              why: "Seul le facteur étudié doit changer ; sinon, on ne saurait pas quel facteur explique le résultat.",
            },
          ],
          trap: "Conclure sur l'effet d'un facteur alors que deux facteurs changent à la fois entre les lots (par exemple la lumière et la température). On ne peut conclure que si un seul facteur diffère.",
          method: "Face à une expérience, repérez d'abord ce qui change entre les lots (le facteur testé) et vérifiez que tout le reste est identique. Puis décrivez les résultats avec des chiffres, et concluez par une phrase du type « tel facteur favorise (ou empêche) la reproduction de tel être vivant ».",
        },
      ],
    },
    /* ==================================================================== */
    /* PUBERTÉ ET APPAREILS REPRODUCTEURS                                   */
    /* ==================================================================== */
    {
      id: 'puberte',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'transformations-puberte',
          title: "Les transformations de la puberté",
          minutes: 25,
          objectives: [
            "Décrire les transformations du corps à la puberté chez la fille et chez le garçon.",
            "Distinguer les caractères sexuels primaires et les caractères sexuels secondaires.",
            "Relier la puberté au début du fonctionnement des appareils reproducteurs.",
            "Exploiter des données sur la croissance pour repérer le pic de croissance pubertaire.",
          ],
          course: [
            {
              heading: "La puberté, le passage vers le corps adulte",
              paragraphs: [
                "La puberté est la période pendant laquelle le corps d'un enfant se transforme en corps d'adulte, capable de se reproduire. Elle dure plusieurs années. Elle commence en général entre 8 et 13 ans chez les filles, et entre 9 et 14 ans chez les garçons.",
                "Chaque personne a son propre rythme : à 12 ans, certains élèves d'une même classe ont presque fini leur puberté, d'autres ne l'ont pas encore commencée. Ces différences sont tout à fait normales et ne disent rien de la future taille ou de la santé de chacun. Les transformations touchent le corps, mais aussi les émotions, les envies et les relations avec les autres.",
              ],
              box: { label: "Définition", text: "La puberté est la période de transformation du corps de l'enfant en corps d'adulte. À la fin de la puberté, les appareils reproducteurs fonctionnent : l'organisme est capable de se reproduire." },
            },
            {
              heading: "Chez la fille",
              paragraphs: [
                "Le premier signe visible est souvent le développement des seins. Puis des poils apparaissent sur le pubis et sous les aisselles, les hanches s'élargissent et la silhouette change. La croissance en taille s'accélère.",
                "Les ovaires commencent à fonctionner. Quelques mois avant les premières règles, des pertes blanches peuvent apparaître : c'est normal. Les premières règles arrivent souvent vers 12 ou 13 ans, parfois plus tôt ou plus tard. Elles montrent que l'appareil reproducteur s'est mis en route et que des cycles commencent.",
              ],
            },
            {
              heading: "Chez le garçon",
              paragraphs: [
                "Le premier signe est l'augmentation du volume des testicules, puis du pénis. Des poils apparaissent sur le pubis, sous les aisselles, puis sur le visage (la barbe) et parfois sur le torse. Les épaules s'élargissent et les muscles se développent.",
                "Le larynx grandit, ce qui rend la voix plus grave : c'est la mue. Pendant quelque temps, la voix peut « dérailler ». Les testicules commencent à produire des spermatozoïdes : les premières éjaculations apparaissent, parfois pendant le sommeil, ce qui est normal.",
              ],
            },
            {
              heading: "Caractères sexuels primaires et secondaires",
              paragraphs: [
                "Chez les filles comme chez les garçons, la taille augmente rapidement pendant quelques années (c'est le pic de croissance, qui arrive en moyenne plus tôt chez les filles), la transpiration devient plus forte et la peau plus grasse, ce qui peut provoquer de l'acné. Une bonne hygiène et un bon sommeil aident le corps pendant cette période.",
                "Les appareils reproducteurs (testicules et pénis, ou ovaires, utérus et vagin) sont présents dès la naissance : ce sont les caractères sexuels primaires. À la puberté, ils deviennent fonctionnels. Les autres caractères qui apparaissent à la puberté (seins, poils, voix grave, barbe, silhouette) sont les caractères sexuels secondaires.",
                "Ces transformations sont déclenchées par le cerveau. Il commande la mise en route des testicules et des ovaires, qui produisent alors des hormones sexuelles (la testostérone chez le garçon, les œstrogènes chez la fille) responsables de l'apparition des caractères sexuels secondaires.",
              ],
              box: { label: "À retenir", text: "Caractères sexuels primaires : les appareils reproducteurs, présents dès la naissance, qui deviennent fonctionnels à la puberté. Caractères sexuels secondaires : les caractères qui apparaissent à la puberté (seins, poils, mue de la voix, barbe...)." },
            },
          ],
          keyPoints: [
            "La puberté transforme le corps de l'enfant en corps d'adulte capable de se reproduire.",
            "Elle commence en général entre 8 et 13 ans chez les filles, entre 9 et 14 ans chez les garçons : chacun a son rythme.",
            "Fille : seins, poils, élargissement des hanches, premières règles.",
            "Garçon : testicules et pénis plus gros, poils, barbe, mue de la voix, premières éjaculations.",
            "Pour tous : pic de croissance, transpiration, peau plus grasse, changements des émotions.",
            "Caractères sexuels primaires : appareils reproducteurs présents dès la naissance ; secondaires : apparus à la puberté.",
            "La puberté est déclenchée par le cerveau et commandée par des hormones sexuelles.",
          ],
          example: {
            statement: "Données fictives. Voici la taille de Léa à chaque anniversaire : 10 ans : 138 cm ; 11 ans : 144 cm ; 12 ans : 152 cm ; 13 ans : 158 cm ; 14 ans : 161 cm ; 15 ans : 162 cm. 1) Calculez sa croissance pour chaque année. 2) Pendant quelle année a-t-elle le plus grandi ? 3) Comment s'appelle cette accélération de la croissance, et à quoi est-elle liée ?",
            solution: [
              "1) Je calcule la différence entre deux anniversaires : de 10 à 11 ans, 144 - 138 = 6 cm ; de 11 à 12 ans, 152 - 144 = 8 cm ; de 12 à 13 ans, 158 - 152 = 6 cm ; de 13 à 14 ans, 161 - 158 = 3 cm ; de 14 à 15 ans, 162 - 161 = 1 cm.",
              "2) La plus forte croissance est de 8 cm, entre 11 et 12 ans.",
              "3) C'est le pic de croissance pubertaire : pendant la puberté, la taille augmente plus vite, puis la croissance ralentit et s'arrête à la fin de la puberté.",
              "Réponse : Léa a le plus grandi entre 11 et 12 ans (8 cm), pendant sa puberté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque caractère, indiquez s'il s'agit d'un caractère sexuel primaire ou secondaire, et s'il concerne les filles, les garçons ou les deux. a) La présence d'ovaires. b) La mue de la voix. c) Le développement des seins. d) L'apparition de poils sous les aisselles. e) La présence de testicules. f) La pousse de la barbe.",
              hint: "Un caractère primaire est présent dès la naissance ; un caractère secondaire apparaît à la puberté.",
              solution: [
                "a) Les ovaires : caractère sexuel primaire, chez les filles.",
                "b) La mue de la voix : caractère sexuel secondaire, chez les garçons.",
                "c) Le développement des seins : caractère sexuel secondaire, chez les filles.",
                "d) Les poils sous les aisselles : caractère sexuel secondaire, chez les filles et chez les garçons.",
                "e) Les testicules : caractère sexuel primaire, chez les garçons.",
                "f) La barbe : caractère sexuel secondaire, chez les garçons.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Taille d'une fille et d'un garçon à chaque anniversaire. Fille : 10 ans : 140 cm ; 11 ans : 146 cm ; 12 ans : 154 cm ; 13 ans : 160 cm ; 14 ans : 163 cm. Garçon : 10 ans : 139 cm ; 11 ans : 144 cm ; 12 ans : 149 cm ; 13 ans : 156 cm ; 14 ans : 165 cm. 1) Calculez la croissance de chacun pour chaque année. 2) Indiquez pour chacun l'année du pic de croissance. 3) Comparez : ces données sont-elles en accord avec ce que vous savez de la puberté ?",
              hint: "Le pic de croissance correspond à l'année où la différence de taille est la plus grande.",
              solution: [
                "1) Fille : 6 cm (10 à 11 ans), 8 cm (11 à 12 ans), 6 cm (12 à 13 ans), 3 cm (13 à 14 ans).",
                "Garçon : 5 cm (10 à 11 ans), 5 cm (11 à 12 ans), 7 cm (12 à 13 ans), 9 cm (13 à 14 ans).",
                "2) Pic de croissance de la fille : entre 11 et 12 ans (8 cm). Pic du garçon : entre 13 et 14 ans (9 cm).",
                "3) Le pic de la fille arrive deux ans plus tôt que celui du garçon. C'est en accord avec le cours : en moyenne, la puberté commence plus tôt chez les filles que chez les garçons. Mais ce ne sont que deux exemples : chaque personne a son propre rythme.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Trois élèves de 4e s'inquiètent. Camille, 12 ans, n'a pas encore eu ses règles alors que sa meilleure amie les a depuis un an. Tom, 13 ans, a toujours une voix aiguë alors que la voix de plusieurs camarades a mué. Nina, 13 ans, a grandi de 9 cm en un an et ne comprend pas pourquoi. Rédigez une courte réponse argumentée pour les rassurer, en utilisant vos connaissances sur la puberté. Indiquez aussi dans quel cas il est utile d'en parler à un médecin.",
              hint: "Rappelez l'âge de début de la puberté, l'idée de rythme personnel et le pic de croissance.",
              solution: [
                "Camille : la puberté commence en général entre 8 et 13 ans chez les filles, et les premières règles arrivent souvent vers 12 ou 13 ans. À 12 ans, ne pas encore avoir ses règles est donc tout à fait normal.",
                "Tom : chez les garçons, la puberté commence en général entre 9 et 14 ans. La mue de la voix, due à la croissance du larynx, arrive plus ou moins tôt selon les personnes : à 13 ans, sa voix peut encore changer.",
                "Nina : pendant la puberté, la taille augmente très vite pendant quelques années : c'est le pic de croissance. Grandir de 9 cm en un an est donc normal à cet âge.",
                "Conclusion : chacun a son propre rythme et se comparer aux autres n'a pas de sens. En revanche, si aucun signe de puberté n'apparaît à 13 ans chez une fille ou à 14 ans chez un garçon, ou si un changement inquiète, il est utile d'en parler à un médecin ou à l'infirmière scolaire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez les idées reçues sur la puberté.",
            statements: [
              { text: "La puberté commence au même âge pour tout le monde.", true: false, why: "Elle commence en général entre 8 et 13 ans chez les filles et entre 9 et 14 ans chez les garçons : chacun a son rythme." },
              { text: "Les testicules et les ovaires sont présents dès la naissance.", true: true, why: "Ce sont des caractères sexuels primaires ; ils deviennent fonctionnels à la puberté." },
              { text: "La mue de la voix est due à la croissance du larynx.", true: true, why: "Le larynx grandit à la puberté, surtout chez les garçons, ce qui rend la voix plus grave." },
              { text: "Les premières règles marquent la fin de la croissance.", true: false, why: "La croissance continue en général encore un peu après les premières règles, puis ralentit." },
              { text: "Les poils sous les aisselles apparaissent chez les filles comme chez les garçons.", true: true, why: "C'est un caractère sexuel secondaire commun aux deux sexes." },
              { text: "La puberté ne transforme que le corps, pas les émotions.", true: false, why: "Les émotions, les envies et les relations avec les autres changent aussi pendant cette période." },
              { text: "Ce sont des hormones sexuelles qui font apparaître les caractères sexuels secondaires.", true: true, why: "La testostérone et les œstrogènes, produits par les testicules et les ovaires, en sont responsables." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un caractère sexuel secondaire ?",
              options: ["Un organe déjà présent dans le corps dès la naissance", "Un caractère qui apparaît à la puberté", "Un caractère transmis par la mère", "Une maladie de la puberté"],
              answer: 1,
              why: "Les caractères sexuels secondaires (seins, poils, mue, barbe...) apparaissent à la puberté.",
            },
            {
              q: "Quel est souvent le premier signe visible de la puberté chez le garçon ?",
              options: ["La pousse de la barbe", "La mue de la voix", "L'augmentation du volume des testicules", "L'apparition de boutons d'acné sur le visage et le dos"],
              answer: 2,
              why: "La puberté du garçon commence par l'augmentation du volume des testicules ; la barbe et la mue viennent plus tard.",
            },
            {
              q: "Lequel de ces caractères est un caractère sexuel primaire ?",
              options: ["L'utérus", "Les seins", "La voix grave", "La barbe"],
              answer: 0,
              why: "L'utérus fait partie de l'appareil reproducteur, présent dès la naissance.",
            },
            {
              q: "Que montrent les premières règles ?",
              options: ["Que la croissance en taille est complètement terminée", "Que la puberté n'a pas encore commencé", "Qu'il y a un problème de santé", "Que l'appareil reproducteur s'est mis à fonctionner"],
              answer: 3,
              why: "Les règles montrent que les ovaires et l'utérus fonctionnent : des cycles ont commencé.",
            },
            {
              q: "Qu'est-ce qui déclenche la puberté ?",
              options: ["Le cerveau", "L'estomac", "Les muscles", "La peau"],
              answer: 0,
              why: "Le cerveau commande la mise en route des testicules ou des ovaires, qui produisent alors des hormones sexuelles.",
            },
          ],
          trap: "Croire que la puberté arrive au même âge pour tous et s'inquiéter d'être « en avance » ou « en retard ». L'âge de début varie de plusieurs années d'une personne à l'autre, et ces différences sont normales.",
          method: "Pour réviser, construisez un tableau à trois colonnes (fille, garçon, les deux) et rangez-y chaque transformation de la puberté. Soulignez ensuite en couleur les caractères sexuels primaires, présents dès la naissance.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'appareils-reproducteurs',
          title: "Les appareils reproducteurs et les cellules reproductrices",
          minutes: 30,
          objectives: [
            "Identifier les organes de l'appareil reproducteur de l'homme et de la femme et leur rôle.",
            "Décrire les cellules reproductrices : spermatozoïdes et ovocytes.",
            "Comparer la production des gamètes chez l'homme et chez la femme à partir de la puberté.",
          ],
          course: [
            {
              heading: "L'appareil reproducteur de l'homme",
              paragraphs: [
                "L'homme possède deux testicules, placés dans les bourses, à l'extérieur du ventre. Là, leur température est de quelques degrés inférieure à celle du corps, ce qui est favorable à la production des spermatozoïdes. Les testicules ont deux rôles : produire les spermatozoïdes, de façon continue, de la puberté jusqu'à un âge avancé, et produire une hormone, la testostérone.",
                "Les spermatozoïdes sont stockés dans l'épididyme, un petit organe collé à chaque testicule. Lors de l'éjaculation, ils empruntent les spermiductes (ou canaux déférents). Des glandes, les vésicules séminales et la prostate, leur ajoutent un liquide nourricier : le mélange forme le sperme. Le sperme sort du corps par l'urètre, un canal qui traverse le pénis.",
                "Chez l'homme, l'urètre sert à la fois à l'évacuation de l'urine et à celle du sperme, mais jamais en même temps. Une éjaculation libère quelques millilitres de sperme, qui contiennent des dizaines à des centaines de millions de spermatozoïdes.",
              ],
              box: { label: "Repère", text: "Trajet des spermatozoïdes : testicule → épididyme → spermiducte → urètre → extérieur. Les vésicules séminales et la prostate ajoutent un liquide pour former le sperme." },
            },
            {
              heading: "L'appareil reproducteur de la femme",
              paragraphs: [
                "La femme possède deux ovaires, de la taille d'une amande, situés dans le ventre. Dès la naissance, chaque ovaire contient une réserve d'ovocytes qui ne sont pas encore mûrs. À partir de la puberté, environ une fois par mois, un ovaire libère en général un seul ovocyte : c'est l'ovulation. Les ovaires produisent aussi des hormones, les œstrogènes et la progestérone.",
                "L'ovocyte libéré est recueilli par le pavillon d'une trompe (ou oviducte), un conduit qui relie l'ovaire à l'utérus. C'est dans la trompe que peut avoir lieu la fécondation. L'utérus est un organe creux et musclé ; sa paroi interne, la muqueuse utérine, peut accueillir un embryon qui s'y développera. Le col de l'utérus s'ouvre sur le vagin, qui communique avec l'extérieur au niveau de la vulve.",
                "Chez la femme, l'urètre, qui évacue l'urine, est séparé de l'appareil reproducteur : il s'ouvre dans la vulve, en avant du vagin.",
              ],
              box: { label: "Repère", text: "Ovaires : produisent les ovocytes et des hormones. Trompes : lieu de la fécondation. Utérus : lieu du développement de l'embryon. Vagin : relie l'utérus à l'extérieur." },
            },
            {
              heading: "Deux cellules reproductrices très différentes",
              paragraphs: [
                "Le spermatozoïde est une cellule minuscule, d'environ 0,06 mm de long. Il possède une tête, qui contient son noyau, et un long flagelle qui le fait avancer en ondulant. Il est mobile et produit en quantités énormes.",
                "L'ovocyte est une grosse cellule ronde, d'environ 0,1 mm de diamètre : c'est l'une des plus grosses cellules du corps humain, à peine visible à l'œil nu. Il est immobile : il est déplacé dans la trompe par les mouvements de celle-ci. Il contient un noyau et des réserves.",
                "Ces cellules vivent peu de temps une fois libérées : l'ovocyte peut être fécondé pendant environ 24 heures après l'ovulation, et les spermatozoïdes survivent en général quelques jours (jusqu'à environ 5 jours) dans l'appareil reproducteur de la femme.",
              ],
            },
            {
              heading: "Production continue ou production cyclique",
              paragraphs: [
                "Chez l'homme, la production de spermatozoïdes commence à la puberté et se poursuit en continu, chaque jour, jusqu'à un âge avancé. Chez la femme, la libération des ovocytes est cyclique : en général un ovocyte par cycle d'environ 28 jours, de la puberté jusqu'à la ménopause, vers 50 ans. Une femme libère donc quelques centaines d'ovocytes au cours de sa vie.",
              ],
              box: { label: "À retenir", text: "Homme : des millions de spermatozoïdes produits chaque jour, en continu, à partir de la puberté. Femme : en général un ovocyte libéré par cycle, de la puberté à la ménopause." },
            },
          ],
          keyPoints: [
            "Les testicules produisent en continu les spermatozoïdes, et la testostérone, à partir de la puberté.",
            "Trajet des spermatozoïdes : testicule, épididyme, spermiducte, urètre ; la prostate et les vésicules séminales forment le sperme.",
            "Les ovaires libèrent en général un ovocyte par cycle (l'ovulation) et produisent des hormones.",
            "La fécondation a lieu dans une trompe ; l'embryon se développe dans l'utérus.",
            "Le spermatozoïde est petit et mobile (tête + flagelle) ; l'ovocyte est gros, rond et immobile.",
            "Production continue chez l'homme, cyclique chez la femme de la puberté à la ménopause.",
          ],
          example: {
            statement: "Remettez dans l'ordre les organes traversés par un spermatozoïde, de sa production jusqu'à sa sortie du corps : urètre, testicule, spermiducte, épididyme. À quel moment de ce trajet le sperme se forme-t-il ?",
            solution: [
              "Le spermatozoïde est produit dans le testicule : c'est le point de départ.",
              "Il est ensuite stocké dans l'épididyme, collé au testicule.",
              "Lors de l'éjaculation, il emprunte le spermiducte, puis l'urètre, qui traverse le pénis.",
              "Le long de ce trajet, les vésicules séminales et la prostate ajoutent un liquide aux spermatozoïdes : c'est le mélange des deux qui forme le sperme.",
              "Réponse : testicule → épididyme → spermiducte → urètre ; le sperme se forme quand le liquide des glandes s'ajoute aux spermatozoïdes, avant leur passage dans l'urètre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez l'organe qui correspond à chaque description. a) Il produit les ovocytes. b) C'est là qu'a lieu la fécondation. c) L'embryon s'y développe. d) Il produit les spermatozoïdes. e) Ce canal traverse le pénis. f) Cette glande ajoute un liquide aux spermatozoïdes.",
              hint: "Aidez-vous des deux encadrés « Repère » du cours.",
              solution: [
                "a) L'ovaire.",
                "b) La trompe (ou oviducte).",
                "c) L'utérus.",
                "d) Le testicule.",
                "e) L'urètre.",
                "f) La prostate (ou une vésicule séminale).",
              ],
            },
            {
              level: 2,
              statement: "Valeurs approchées. Le diamètre d'un ovocyte humain est d'environ 0,1 mm ; la tête d'un spermatozoïde mesure environ 0,005 mm de long. 1) Combien de fois le diamètre de l'ovocyte est-il plus grand que la longueur de la tête du spermatozoïde ? 2) Au microscope, une photo est grossie 400 fois. Quel diamètre aura l'ovocyte sur cette photo, en millimètres ? 3) Données fictives : un homme produit environ 1 000 spermatozoïdes par seconde. Combien en produit-il en une journée ? Comparez avec le nombre d'ovocytes libérés par une femme en un mois.",
              hint: "Une journée compte 24 × 60 × 60 secondes.",
              solution: [
                "1) 0,1 ÷ 0,005 = 20 : le diamètre de l'ovocyte est environ 20 fois plus grand que la tête du spermatozoïde.",
                "2) Sur la photo : 0,1 × 400 = 40 mm, soit 4 cm.",
                "3) Une journée compte 24 × 60 × 60 = 86 400 secondes.",
                "Production en une journée : 1 000 × 86 400 = 86 400 000 spermatozoïdes, soit environ 86 millions.",
                "Une femme libère en général un seul ovocyte par mois : la production de spermatozoïdes est continue et énorme, celle des ovocytes cyclique et très faible.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Cas 1 : chez un homme, on a coupé et fermé les deux spermiductes (c'est une méthode de contraception définitive, la vasectomie). Ses testicules fonctionnent normalement. Cas 2 : chez une femme, à la suite d'une infection, les deux trompes sont bouchées. Ses ovaires fonctionnent normalement. 1) L'homme du cas 1 éjacule-t-il encore du sperme ? Ce sperme contient-il des spermatozoïdes ? 2) La testostérone qu'il produit est libérée dans le sang. Garde-t-il ses caractères sexuels secondaires ? Justifiez. 3) La femme du cas 2 a-t-elle encore des ovulations ? Peut-elle avoir un enfant de façon naturelle ? Justifiez.",
              hint: "Distinguez bien le trajet des gamètes, qui passe par des conduits, et celui des hormones, qui passent par le sang.",
              solution: [
                "1) Les vésicules séminales et la prostate sont placées après la coupure et fonctionnent toujours : il éjacule encore du sperme. Mais les spermatozoïdes, bloqués dans les spermiductes, ne peuvent plus rejoindre l'urètre : le sperme n'en contient plus.",
                "2) La testostérone ne passe pas par les spermiductes : elle est libérée directement dans le sang par les testicules. L'opération ne change donc pas la quantité de testostérone, et l'homme garde ses caractères sexuels secondaires (barbe, voix grave...).",
                "3) Ses ovaires fonctionnent : elle a toujours des ovulations. Mais l'ovocyte ne peut pas avancer dans la trompe bouchée et les spermatozoïdes ne peuvent pas l'atteindre : la fécondation, qui a lieu dans la trompe, est impossible. Elle ne peut pas avoir d'enfant de façon naturelle.",
                "Conclusion : les gamètes circulent dans des conduits ; si ces conduits sont bloqués, la fécondation devient impossible, même si les organes qui produisent les gamètes fonctionnent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque organe à son rôle.",
            pairs: [
              { left: "Testicule", right: "Produit les spermatozoïdes et la testostérone." },
              { left: "Prostate", right: "Ajoute un liquide aux spermatozoïdes pour former le sperme." },
              { left: "Ovaire", right: "Libère en général un ovocyte par cycle." },
              { left: "Trompe", right: "Lieu de la rencontre des gamètes et de la fécondation." },
              { left: "Utérus", right: "Organe où se développe l'embryon." },
              { left: "Urètre", right: "Chez l'homme, canal qui conduit le sperme hors du corps." },
            ],
          },
          quiz: [
            {
              q: "Où les spermatozoïdes sont-ils produits ?",
              options: ["Dans la prostate", "Dans les testicules", "Dans l'urètre", "Dans la vessie, près des reins"],
              answer: 1,
              why: "Les testicules produisent les spermatozoïdes en continu à partir de la puberté.",
            },
            {
              q: "Où a lieu la fécondation chez la femme ?",
              options: ["Dans l'ovaire", "Au fond du vagin, près du col", "Dans l'utérus", "Dans une trompe"],
              answer: 3,
              why: "L'ovocyte est recueilli par la trompe ; c'est là que les spermatozoïdes peuvent le rencontrer.",
            },
            {
              q: "Quelle phrase décrit correctement l'ovocyte ?",
              options: ["Une grosse cellule ronde et immobile", "Une petite cellule munie d'un flagelle", "Une cellule produite chaque jour par millions"],
              answer: 0,
              why: "L'ovocyte mesure environ 0,1 mm et ne se déplace pas seul ; c'est le spermatozoïde qui est petit et muni d'un flagelle.",
            },
            {
              q: "Comment appelle-t-on la libération d'un ovocyte par l'ovaire ?",
              options: ["La fécondation", "La menstruation", "L'ovulation", "L'éjaculation"],
              answer: 2,
              why: "L'ovulation est la libération d'un ovocyte, en général un par cycle.",
            },
            {
              q: "Que contient le sperme ?",
              options: ["Uniquement des spermatozoïdes, sans aucun liquide", "De l'urine et des spermatozoïdes", "Des spermatozoïdes et le liquide des glandes", "Des ovocytes"],
              answer: 2,
              why: "Le sperme est un mélange de spermatozoïdes et du liquide produit par les vésicules séminales et la prostate.",
            },
          ],
          trap: "Croire que la fécondation a lieu dans l'utérus. Elle a lieu dans une trompe ; c'est l'embryon déjà formé qui descend ensuite dans l'utérus pour s'y développer.",
          method: "Apprenez les appareils reproducteurs en suivant le trajet des gamètes avec le doigt sur un schéma, organe par organe, en disant à voix haute le nom et le rôle de chacun. Puis refaites le schéma de mémoire, sans modèle, et complétez la légende.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'hormones-cycles',
          title: "Hormones et cycle menstruel",
          minutes: 30,
          objectives: [
            "Définir une hormone comme un messager chimique transporté par le sang.",
            "Expliquer le rôle des hormones dans le fonctionnement des testicules et des ovaires à partir de la puberté.",
            "Décrire le cycle menstruel : ovulation, évolution de la muqueuse utérine et règles.",
            "Exploiter des données pour situer l'ovulation dans un cycle.",
          ],
          course: [
            {
              heading: "Les hormones, des messagers chimiques",
              paragraphs: [
                "Une hormone est une substance produite par un organe, libérée dans le sang, et qui agit à distance sur d'autres organes, appelés organes cibles. Le sang transporte l'hormone dans tout le corps, mais seuls les organes cibles réagissent à son message.",
                "On peut comparer une hormone à un message diffusé à la radio : tout le monde peut l'entendre, mais seules les personnes concernées agissent. Les testicules produisent la testostérone ; les ovaires produisent les œstrogènes et la progestérone. Ce sont les hormones sexuelles.",
              ],
              box: { label: "Définition", text: "Une hormone est un messager chimique : elle est produite par un organe, transportée par le sang et agit sur des organes cibles." },
            },
            {
              heading: "Le cerveau commande les testicules et les ovaires",
              paragraphs: [
                "À la puberté, une région du cerveau, l'hypothalamus, et une petite glande située juste en dessous, l'hypophyse, commencent à libérer des hormones. Ces hormones, transportées par le sang, stimulent les testicules ou les ovaires, qui se mettent à produire des gamètes et des hormones sexuelles.",
                "Chez l'homme, cette commande est continue : les testicules produisent chaque jour des spermatozoïdes et de la testostérone. La testostérone entretient les caractères sexuels secondaires (barbe, voix grave, muscles) et permet la production des spermatozoïdes.",
              ],
            },
            {
              heading: "Chez la femme, un fonctionnement cyclique",
              paragraphs: [
                "Chez la femme, les ovaires fonctionnent par cycles, qui durent en moyenne 28 jours (souvent entre 21 et 35 jours selon les personnes, et ils sont souvent irréguliers au début de la puberté). Par convention, le premier jour du cycle est le premier jour des règles.",
                "Pendant la première partie du cycle, un follicule (une petite poche contenant un ovocyte) grossit dans l'ovaire et produit des œstrogènes. Vers le 14e jour d'un cycle de 28 jours, il libère l'ovocyte : c'est l'ovulation. Ce qui reste du follicule forme alors le corps jaune, qui produit de la progestérone et des œstrogènes.",
                "En réalité, la durée qui sépare l'ovulation de la fin du cycle est assez constante : l'ovulation a lieu environ 14 jours avant la fin du cycle, c'est-à-dire juste avant les règles suivantes. Dans un cycle de 32 jours, elle a donc lieu vers le 18e jour, et dans un cycle de 28 jours, vers le 14e jour.",
              ],
              box: { label: "Repère", text: "Jour 1 du cycle = premier jour des règles. Ovulation : environ 14 jours avant la fin du cycle (vers le 14e jour d'un cycle de 28 jours)." },
            },
            {
              heading: "La muqueuse utérine et les règles",
              paragraphs: [
                "Les hormones des ovaires agissent sur l'utérus, leur organe cible. Sous l'action des œstrogènes, puis de la progestérone, la muqueuse utérine s'épaissit et se remplit de vaisseaux sanguins : elle se prépare à accueillir un éventuel embryon.",
                "S'il n'y a pas de fécondation, le corps jaune disparaît à la fin du cycle et la quantité d'hormones ovariennes chute. Privée de ces hormones, la muqueuse utérine se détruit et s'élimine avec un peu de sang par le vagin : ce sont les règles, qui durent en général de 3 à 7 jours. Un nouveau cycle commence.",
                "S'il y a fécondation, l'embryon s'installe dans la muqueuse et produit une hormone qui maintient le corps jaune : les hormones restent élevées, la muqueuse est conservée et il n'y a pas de règles. C'est cette hormone de l'embryon que détecte un test de grossesse. Les cycles s'arrêtent définitivement à la ménopause, vers 50 ans.",
              ],
              box: { label: "À retenir", text: "Le cycle de l'ovaire et le cycle de l'utérus sont synchronisés par les hormones ovariennes. Sans fécondation, les hormones chutent et la muqueuse utérine est éliminée : ce sont les règles." },
            },
          ],
          keyPoints: [
            "Une hormone est produite par un organe, transportée par le sang et agit sur des organes cibles.",
            "À la puberté, le cerveau (hypothalamus et hypophyse) stimule les testicules et les ovaires par des hormones.",
            "Chez l'homme, la production de spermatozoïdes et de testostérone est continue.",
            "Chez la femme, le cycle dure en moyenne 28 jours ; le jour 1 est le premier jour des règles.",
            "L'ovulation a lieu environ 14 jours avant la fin du cycle (vers le jour 14 d'un cycle de 28 jours).",
            "Les œstrogènes et la progestérone font épaissir la muqueuse utérine ; quand ils chutent, la muqueuse est éliminée : ce sont les règles.",
          ],
          example: {
            statement: "Les règles d'une femme ont commencé le 3 mars. Ses cycles sont réguliers et durent 28 jours. 1) À quelle date l'ovulation a-t-elle probablement lieu ? 2) À quelle date ses prochaines règles devraient-elles commencer, s'il n'y a pas de fécondation ?",
            solution: [
              "Le 3 mars est le jour 1 du cycle, car c'est le premier jour des règles.",
              "1) Dans un cycle de 28 jours, l'ovulation a lieu vers le jour 14. Le jour 14 tombe 13 jours après le jour 1 : 3 + 13 = 16. L'ovulation a lieu vers le 16 mars.",
              "2) Le cycle dure 28 jours : les prochaines règles commencent le jour 29, soit 28 jours après le 3 mars : 3 + 28 = 31.",
              "Je vérifie : le jour 28, dernier jour du cycle, tombe le 30 mars ; l'ovulation (jour 14) a bien lieu 14 jours avant la fin du cycle (28 - 14 = 14).",
              "Réponse : ovulation vers le 16 mars ; prochaines règles vers le 31 mars.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec les mots suivants : sang, ovulation, progestérone, testostérone, règles, organes cibles. a) Une hormone est transportée par le ... et agit sur des .... b) Les testicules produisent la .... c) Le corps jaune produit de la .... d) La libération d'un ovocyte s'appelle l'.... e) L'élimination de la muqueuse utérine s'appelle les ....",
              hint: "Relisez la définition d'une hormone dans le premier encadré.",
              solution: [
                "a) Une hormone est transportée par le sang et agit sur des organes cibles.",
                "b) Les testicules produisent la testostérone.",
                "c) Le corps jaune produit de la progestérone.",
                "d) La libération d'un ovocyte s'appelle l'ovulation.",
                "e) L'élimination de la muqueuse utérine s'appelle les règles.",
              ],
            },
            {
              level: 2,
              statement: "En 1849, le médecin allemand Arnold Berthold réalise des expériences sur de jeunes coqs. Lot 1 : coqs non opérés ; adultes, ils ont une grande crête rouge, chantent et ont un comportement de coq. Lot 2 : on retire les testicules des jeunes coqs ; adultes, ils ont une petite crête pâle et ne chantent pas. Lot 3 : on retire les testicules, puis on greffe un testicule ailleurs dans le ventre, sans le relier à aucun nerf ; adultes, ces coqs ont une grande crête et un comportement de coq. 1) Que montre la comparaison des lots 1 et 2 ? 2) Dans le lot 3, le testicule greffé n'est relié à aucun nerf. Comment peut-il agir sur la crête ? 3) Quelle hormone est en cause ?",
              hint: "Si le message ne passe pas par les nerfs, il ne reste qu'un moyen de transport dans tout le corps.",
              solution: [
                "1) Sans testicules, la crête reste petite et le comportement de coq n'apparaît pas : les testicules sont nécessaires au développement des caractères sexuels secondaires du coq.",
                "2) Le testicule greffé, sans aucun nerf, rétablit la grande crête : il agit donc en libérant une substance qui passe dans le sang et atteint la crête. C'est le mode d'action d'une hormone.",
                "3) Il s'agit de la testostérone, l'hormone produite par les testicules.",
                "Conclusion : les testicules agissent à distance sur des organes cibles grâce à une hormone transportée par le sang.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Une femme note la date de début de ses règles pendant trois mois : 1er janvier, 2 février, 6 mars. 1) Calculez la durée de ses deux cycles. (Janvier compte 31 jours, février 28 jours cette année-là.) 2) Pour chaque cycle, indiquez le jour du cycle où a probablement eu lieu l'ovulation. 3) Pourquoi ne peut-on pas dire que l'ovulation a toujours lieu le 14e jour ? 4) Si le 6 mars aucune règle n'était apparue, quelle hypothèse pourrait-on faire, et comment la vérifier ?",
              hint: "L'ovulation a lieu environ 14 jours avant la fin du cycle : partez de la durée du cycle.",
              solution: [
                "1) Premier cycle : du 1er janvier au 2 février. Il reste 31 - 1 = 30 jours en janvier après le 1er, puis 2 jours en février : 30 + 2 = 32 jours.",
                "Deuxième cycle : du 2 février au 6 mars : 28 - 2 = 26 jours en février après le 2, puis 6 jours en mars : 26 + 6 = 32 jours.",
                "2) Les deux cycles durent 32 jours. L'ovulation a lieu environ 14 jours avant la fin du cycle : 32 - 14 = 18. Elle a probablement eu lieu vers le 18e jour de chaque cycle.",
                "3) C'est seulement dans un cycle de 28 jours que l'ovulation tombe vers le 14e jour. Ici, les cycles sont plus longs : l'ovulation est plus tardive. De plus, la durée des cycles peut varier d'un mois à l'autre.",
                "4) L'absence de règles peut indiquer une grossesse : l'embryon produit une hormone qui maintient le corps jaune, donc la muqueuse. On peut le vérifier par un test de grossesse, qui détecte cette hormone, puis consulter un médecin. Un simple retard de règles est aussi possible.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les événements d'un cycle menstruel de 28 jours, sans fécondation.",
            items: [
              "Jour 1 : les règles commencent, la muqueuse utérine est éliminée.",
              "Un follicule grossit dans l'ovaire et produit des œstrogènes ; la muqueuse se reconstruit.",
              "Vers le jour 14, l'ovaire libère un ovocyte : c'est l'ovulation.",
              "Le corps jaune produit de la progestérone : la muqueuse s'épaissit encore.",
              "Sans fécondation, le corps jaune disparaît et les hormones ovariennes chutent.",
              "La muqueuse se détruit : de nouvelles règles ouvrent un nouveau cycle.",
            ],
          },
          quiz: [
            {
              q: "Comment une hormone atteint-elle ses organes cibles ?",
              options: ["Par les nerfs", "Par le sang", "Par l'air respiré", "Par le tube digestif"],
              answer: 1,
              why: "Une hormone est libérée dans le sang, qui la transporte dans tout le corps jusqu'aux organes cibles.",
            },
            {
              q: "Que désigne le jour 1 du cycle menstruel ?",
              options: ["Le jour de l'ovulation", "Le jour de la fécondation", "Le premier jour des règles", "Le dernier jour des règles"],
              answer: 2,
              why: "Par convention, le cycle commence le premier jour des règles.",
            },
            {
              q: "Pourquoi les règles se produisent-elles ?",
              options: ["Parce que l'ovocyte se détruit à l'intérieur de l'ovaire", "Parce que la quantité d'hormones ovariennes chute", "Parce que l'ovulation vient d'avoir lieu", "Parce que la testostérone augmente"],
              answer: 1,
              why: "Sans fécondation, le corps jaune disparaît, les hormones ovariennes chutent et la muqueuse utérine n'est plus entretenue.",
            },
            {
              q: "Dans un cycle de 30 jours, vers quel jour a lieu l'ovulation ?",
              options: ["Le jour 16", "Le jour 14", "Le jour 30", "Le jour 1"],
              answer: 0,
              why: "L'ovulation a lieu environ 14 jours avant la fin du cycle : 30 - 14 = 16.",
            },
            {
              q: "Quel organe commande le fonctionnement des testicules et des ovaires ?",
              options: ["Le cœur", "L'utérus, grâce à sa muqueuse épaisse", "La peau", "Le cerveau, avec l'hypophyse"],
              answer: 3,
              why: "L'hypothalamus et l'hypophyse libèrent des hormones qui stimulent les testicules et les ovaires.",
            },
          ],
          trap: "Croire que l'ovulation a toujours lieu le 14e jour du cycle. Elle a lieu environ 14 jours avant la fin du cycle : dans un cycle plus long ou plus court que 28 jours, elle est décalée, et un cycle peut varier d'un mois à l'autre.",
          method: "Pour situer les événements d'un cycle, dessinez une frise de 28 cases : coloriez les jours de règles au début, placez l'ovulation 14 cases avant la fin, puis indiquez au-dessus l'hormone principale de chaque période (œstrogènes avant l'ovulation, progestérone après).",
        },
      ],
    },
    /* ==================================================================== */
    /* DE LA FÉCONDATION À LA NAISSANCE                                     */
    /* ==================================================================== */
    {
      id: 'procreation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fecondation-grossesse',
          title: "Fécondation, grossesse et naissance",
          minutes: 30,
          objectives: [
            "Décrire la fécondation et la formation de la cellule-œuf chez l'être humain.",
            "Expliquer la nidation et le développement de l'embryon, puis du fœtus, dans l'utérus.",
            "Expliquer le rôle du placenta dans les échanges entre la mère et le fœtus.",
            "Relier ces échanges à des comportements responsables pendant la grossesse.",
          ],
          course: [
            {
              heading: "La rencontre des gamètes et la fécondation",
              paragraphs: [
                "Lors d'un rapport sexuel, le sperme est déposé dans le vagin. Les spermatozoïdes traversent le col de l'utérus, puis l'utérus, et remontent dans les trompes. Sur les dizaines de millions de spermatozoïdes du départ, seules quelques centaines arrivent près de l'ovocyte.",
                "Un seul spermatozoïde pénètre dans l'ovocyte. Son noyau s'unit au noyau de l'ovocyte : c'est la fécondation. Elle forme une cellule unique, la cellule-œuf. Aussitôt, l'enveloppe de la cellule-œuf se modifie et empêche les autres spermatozoïdes d'entrer.",
                "La fécondation n'est possible que pendant quelques jours de chaque cycle, autour de l'ovulation : l'ovocyte ne vit qu'environ 24 heures, et les spermatozoïdes survivent jusqu'à environ 5 jours dans l'appareil reproducteur de la femme.",
              ],
              box: { label: "Définition", text: "La fécondation est l'union d'un spermatozoïde et d'un ovocyte, et plus précisément de leurs noyaux. Elle a lieu dans une trompe et forme la cellule-œuf, première cellule d'un nouvel individu." },
            },
            {
              heading: "De la cellule-œuf au fœtus",
              paragraphs: [
                "La cellule-œuf se divise en 2 cellules, puis 4, puis 8, et ainsi de suite, tout en descendant dans la trompe vers l'utérus : elle devient un embryon. Environ une semaine après la fécondation, l'embryon s'implante dans la muqueuse utérine épaissie : c'est la nidation. La grossesse commence.",
                "Pendant les deux premiers mois, l'embryon forme ses organes ; son cœur commence à battre dès la fin du premier mois. À partir du troisième mois, on l'appelle fœtus : il a la forme d'un petit être humain, ses organes grandissent et mûrissent. La mère sent ses premiers mouvements vers le quatrième ou le cinquième mois.",
                "Une grossesse dure environ 9 mois. Pendant toute cette période, le fœtus baigne dans le liquide amniotique, contenu dans une poche qui le protège des chocs.",
              ],
              box: { label: "Repère", text: "Fécondation (dans la trompe) → nidation (environ 7 jours après, dans l'utérus) → embryon (2 premiers mois) → fœtus (du 3e mois à la naissance) → naissance (environ 9 mois)." },
            },
            {
              heading: "Le placenta, lieu d'échanges entre la mère et le fœtus",
              paragraphs: [
                "Le placenta est un organe qui se forme pendant la grossesse, accroché à la paroi de l'utérus. Il est relié au fœtus par le cordon ombilical, qui contient des vaisseaux sanguins. Dans le placenta, le sang de la mère et celui du fœtus circulent très près l'un de l'autre, séparés par une paroi très fine, mais ils ne se mélangent pas.",
                "À travers cette paroi, le sang de la mère fournit au fœtus le dioxygène, l'eau et les nutriments dont il a besoin. Le sang du fœtus rejette du dioxyde de carbone et des déchets, comme l'urée, qui sont ensuite éliminés par l'organisme de la mère.",
                "Mais le placenta n'est pas une barrière parfaite. L'alcool, la nicotine et le monoxyde de carbone de la fumée de tabac, certains médicaments, les drogues et certains microbes le traversent et peuvent nuire gravement au développement du fœtus. C'est pourquoi on recommande zéro alcool et zéro tabac pendant toute la grossesse, et aucun médicament sans avis médical.",
              ],
              box: { label: "À retenir", text: "Mère → fœtus : dioxygène, eau, nutriments. Fœtus → mère : dioxyde de carbone, déchets. Les deux sangs ne se mélangent pas. L'alcool, le tabac et certains médicaments traversent aussi le placenta." },
            },
            {
              heading: "La naissance",
              paragraphs: [
                "À la fin de la grossesse, le muscle de l'utérus se contracte de façon régulière : ce sont les contractions. Le col de l'utérus s'ouvre, la poche qui contient le liquide amniotique se rompt (on dit que la mère « perd les eaux »), puis le bébé est expulsé par le vagin, le plus souvent la tête la première. C'est l'accouchement.",
                "Le cordon ombilical est coupé : sa trace forme le nombril. Le bébé respire alors avec ses poumons pour la première fois, puisque le placenta ne lui apporte plus de dioxygène. Quelques minutes plus tard, le placenta est à son tour expulsé : c'est la délivrance.",
                "Parfois, il naît deux bébés. Les « vrais jumeaux » viennent d'une seule cellule-œuf qui s'est séparée en deux au tout début du développement : ils sont toujours du même sexe et se ressemblent énormément. Les « faux jumeaux » viennent de deux ovocytes fécondés par deux spermatozoïdes différents : ils peuvent être de sexes différents et se ressemblent comme un frère et une sœur.",
              ],
            },
          ],
          keyPoints: [
            "La fécondation est l'union d'un spermatozoïde et d'un ovocyte dans une trompe ; elle forme la cellule-œuf.",
            "La fécondation n'est possible que quelques jours par cycle, autour de l'ovulation.",
            "Environ une semaine après la fécondation, l'embryon s'implante dans la muqueuse utérine : c'est la nidation.",
            "L'embryon devient un fœtus à partir du 3e mois ; la grossesse dure environ 9 mois.",
            "Le placenta permet les échanges entre le sang de la mère et celui du fœtus, sans mélange des deux sangs.",
            "L'alcool, le tabac, certains médicaments et certains microbes traversent le placenta : zéro alcool et zéro tabac pendant la grossesse.",
            "À la naissance, les contractions de l'utérus expulsent le bébé, puis le placenta.",
          ],
          example: {
            statement: "Une femme a des cycles réguliers de 28 jours ; son ovulation a lieu vers le jour 14. L'ovocyte vit environ 24 heures et les spermatozoïdes jusqu'à 5 jours. Pour chaque rapport sexuel, dites si une fécondation est possible : a) un rapport le jour 11 ; b) un rapport le jour 20.",
            solution: [
              "Je rappelle la condition : il faut qu'un spermatozoïde vivant rencontre l'ovocyte vivant dans la trompe.",
              "a) Rapport le jour 11 : les spermatozoïdes peuvent survivre jusqu'au jour 11 + 5 = 16. L'ovulation a lieu vers le jour 14 : des spermatozoïdes sont encore vivants quand l'ovocyte est libéré. Une fécondation est possible.",
              "b) Rapport le jour 20 : l'ovocyte, libéré vers le jour 14, ne vit qu'environ 24 heures ; il est donc mort depuis le jour 15. Aucune fécondation n'est possible pendant ce cycle.",
              "Réponse : fécondation possible pour le rapport du jour 11, impossible pour celui du jour 20. Attention : ce calcul suppose un cycle parfaitement régulier, ce qui n'est jamais garanti ; il ne peut pas servir de méthode de contraception.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque mot à sa définition. Mots : a) fécondation ; b) nidation ; c) placenta ; d) cordon ombilical ; e) liquide amniotique. Définitions : 1) organe d'échanges entre le sang de la mère et celui du fœtus ; 2) implantation de l'embryon dans la muqueuse utérine ; 3) liquide qui entoure et protège le fœtus ; 4) union d'un spermatozoïde et d'un ovocyte ; 5) lien contenant des vaisseaux sanguins entre le fœtus et le placenta.",
              hint: "Suivez l'ordre chronologique : d'abord la rencontre des gamètes, puis l'installation dans l'utérus, puis les organes de la grossesse.",
              solution: [
                "a) Fécondation → 4 : union d'un spermatozoïde et d'un ovocyte.",
                "b) Nidation → 2 : implantation de l'embryon dans la muqueuse utérine.",
                "c) Placenta → 1 : organe d'échanges entre le sang de la mère et celui du fœtus.",
                "d) Cordon ombilical → 5 : lien contenant des vaisseaux sanguins entre le fœtus et le placenta.",
                "e) Liquide amniotique → 3 : liquide qui entoure et protège le fœtus.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives, en unités arbitraires. On compare le sang qui va du placenta vers le fœtus (sang A) et le sang qui revient du fœtus vers le placenta (sang B), dans le cordon ombilical. Dioxygène : A = 15, B = 7. Glucose (un nutriment) : A = 9, B = 7. Dioxyde de carbone : A = 45, B = 50. Urée (un déchet) : A = 2, B = 3. 1) Quelles substances le fœtus prélève-t-il dans le sang qui lui arrive ? Justifiez. 2) Quelles substances le fœtus rejette-t-il ? Justifiez. 3) Où ces substances sont-elles échangées avec le sang de la mère ?",
              hint: "Si une substance est plus abondante dans le sang qui arrive que dans le sang qui repart, c'est que le fœtus l'a utilisée.",
              solution: [
                "1) Le dioxygène passe de 15 à 7 et le glucose de 9 à 7 : il y en a moins dans le sang qui repart. Le fœtus prélève donc du dioxygène et du glucose.",
                "2) Le dioxyde de carbone passe de 45 à 50 et l'urée de 2 à 3 : il y en a plus dans le sang qui repart. Le fœtus rejette donc du dioxyde de carbone et de l'urée.",
                "3) Ces substances sont échangées dans le placenta, où le sang du fœtus et le sang de la mère sont séparés par une paroi très fine, sans se mélanger.",
                "Conclusion : la mère fournit au fœtus le dioxygène et les nutriments, et elle élimine ses déchets, grâce au placenta.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lou affirme : « Ma tante est enceinte. Elle peut bien boire un petit verre de vin de temps en temps : le bébé est protégé par le placenta, puisque les deux sangs ne se mélangent pas. » 1) Rédigez une réponse argumentée pour expliquer à Lou pourquoi son raisonnement est faux. 2) La tante de Lou attend des jumeaux : un garçon et une fille. Sont-ils issus d'une seule cellule-œuf ou de deux ? Justifiez.",
              hint: "Les sangs ne se mélangent pas, mais que se passe-t-il à travers la paroi du placenta ?",
              solution: [
                "1) Il est vrai que le sang de la mère et celui du fœtus ne se mélangent pas. Mais dans le placenta, ils ne sont séparés que par une paroi très fine, à travers laquelle passent de nombreuses substances : c'est ainsi que le fœtus reçoit son dioxygène et ses nutriments.",
                "L'alcool traverse lui aussi cette paroi : quand la mère boit, l'alcool arrive dans le sang du fœtus. Or les organes du fœtus, en particulier son cerveau, sont en formation et très sensibles à l'alcool, qui peut provoquer des troubles graves et définitifs.",
                "Comme on ne connaît pas de quantité sans risque, la recommandation est zéro alcool pendant toute la grossesse : même « un petit verre de temps en temps » est déconseillé.",
                "2) Les vrais jumeaux, issus d'une seule cellule-œuf, sont toujours du même sexe. Un garçon et une fille sont donc de faux jumeaux : ils sont issus de deux cellules-œufs, formées par la fécondation de deux ovocytes par deux spermatozoïdes différents.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes, de la rencontre des gamètes à la naissance.",
            items: [
              "Les spermatozoïdes déposés dans le vagin traversent le col et l'utérus.",
              "Dans une trompe, un spermatozoïde pénètre dans l'ovocyte : c'est la fécondation.",
              "La cellule-œuf se divise en descendant dans la trompe.",
              "L'embryon s'implante dans la muqueuse utérine : c'est la nidation.",
              "Le placenta se forme et assure les échanges avec le sang de la mère.",
              "Devenu fœtus au 3e mois, il grandit et ses organes mûrissent.",
              "Les contractions de l'utérus provoquent l'accouchement.",
            ],
          },
          quiz: [
            {
              q: "Où a lieu la nidation ?",
              options: ["Dans la trompe, près de l'ovaire", "Dans l'ovaire", "Dans la muqueuse utérine", "Dans le vagin"],
              answer: 2,
              why: "L'embryon, arrivé dans l'utérus, s'implante dans la muqueuse utérine environ une semaine après la fécondation.",
            },
            {
              q: "Combien de spermatozoïdes fécondent un ovocyte ?",
              options: ["Un seul", "Deux", "Quelques centaines", "Plusieurs millions"],
              answer: 0,
              why: "Un seul spermatozoïde pénètre dans l'ovocyte ; l'enveloppe de la cellule-œuf empêche ensuite les autres d'entrer.",
            },
            {
              q: "Que reçoit le fœtus par le placenta ?",
              options: ["Du dioxyde de carbone et de l'urée", "Du dioxygène et des nutriments", "Le sang de sa mère, qui se mélange au sien", "Uniquement de l'eau"],
              answer: 1,
              why: "Le sang de la mère fournit au fœtus du dioxygène et des nutriments ; les deux sangs ne se mélangent pas.",
            },
            {
              q: "À partir de quand parle-t-on de fœtus plutôt que d'embryon ?",
              options: ["Dès la fécondation", "Dès la nidation", "Seulement au moment de la naissance", "À partir du troisième mois"],
              answer: 3,
              why: "Pendant les deux premiers mois, on parle d'embryon ; à partir du troisième mois, de fœtus.",
            },
            {
              q: "Des jumeaux sont un garçon et une fille. Que peut-on en déduire ?",
              options: ["Ils sont issus de deux cellules-œufs", "Ils sont issus d'une seule cellule-œuf", "Ils sont nés de deux grossesses différentes"],
              answer: 0,
              why: "Les vrais jumeaux, issus d'une seule cellule-œuf, sont toujours du même sexe ; ceux-ci sont donc de faux jumeaux.",
            },
          ],
          trap: "Croire que le placenta protège le fœtus de tout parce que les deux sangs ne se mélangent pas. Les substances passent à travers la paroi qui les sépare : le dioxygène et les nutriments, mais aussi l'alcool, la nicotine, certains médicaments et certains microbes.",
          method: "Pour retenir les étapes, construisez une frise de la grossesse avec les lieux et les durées : trompe (fécondation), utérus vers 7 jours (nidation), 2 mois (embryon), 3e mois (fœtus), 9 mois (naissance). Récitez-la en ajoutant à chaque étape un mot-clé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'contraception',
          title: "Maîtriser sa fertilité : la contraception",
          minutes: 30,
          objectives: [
            "Relier le fonctionnement des appareils reproducteurs aux principes de la maîtrise de la reproduction.",
            "Expliquer le mode d'action des principales méthodes de contraception.",
            "Distinguer la contraception régulière et la contraception d'urgence.",
            "Identifier les personnes et les lieux auxquels s'adresser pour s'informer.",
          ],
          course: [
            {
              heading: "Maîtriser sa reproduction, un choix responsable",
              paragraphs: [
                "La contraception est l'ensemble des méthodes qui permettent d'éviter une grossesse non désirée, de façon temporaire et réversible : quand on arrête la méthode, on peut à nouveau avoir un enfant. Elle permet de choisir le moment où l'on souhaite devenir parent.",
                "Chaque méthode bloque une étape de la reproduction : l'ovulation, la rencontre des gamètes ou la nidation. La contraception concerne les deux partenaires. Une relation sexuelle suppose aussi le consentement libre de chacun : chacun a le droit de dire non, à tout moment.",
                "Maîtriser sa reproduction, c'est aussi aider les couples qui n'arrivent pas à avoir d'enfant. L'assistance médicale à la procréation propose par exemple la fécondation in vitro : des ovocytes et des spermatozoïdes sont mis en contact en laboratoire, puis un embryon est placé dans l'utérus.",
              ],
              box: { label: "Définition", text: "La contraception regroupe les méthodes qui empêchent temporairement et de façon réversible une grossesse, en bloquant l'ovulation, la rencontre des gamètes ou la nidation." },
            },
            {
              heading: "Empêcher la rencontre des gamètes : les préservatifs",
              paragraphs: [
                "Le préservatif masculin est un étui fin, le plus souvent en latex, qui se déroule sur le pénis en érection avant tout contact : il retient le sperme. Le préservatif féminin est une gaine souple placée dans le vagin. Dans les deux cas, les spermatozoïdes ne peuvent pas atteindre l'ovocyte.",
                "Un préservatif ne s'utilise qu'une seule fois. Il faut vérifier sa date de péremption et la présence d'une norme sur l'emballage, et ne jamais en utiliser deux à la fois. Les préservatifs sont les seules méthodes de contraception qui protègent aussi des infections sexuellement transmissibles (IST).",
              ],
            },
            {
              heading: "Agir grâce aux hormones, ou dans l'utérus",
              paragraphs: [
                "La pilule contient des hormones fabriquées en laboratoire, proches des hormones des ovaires. Prise chaque jour, à heure régulière, elle empêche l'ovulation ; elle rend aussi le passage du col de l'utérus difficile pour les spermatozoïdes. Un oubli peut la rendre inefficace. D'autres méthodes utilisent des hormones : l'implant, un petit bâtonnet placé sous la peau du bras pour plusieurs années, le patch ou l'anneau vaginal.",
                "Le dispositif intra-utérin (DIU, souvent appelé stérilet) est un petit objet placé dans l'utérus par un médecin ou une sage-femme, pour plusieurs années. Le DIU au cuivre gêne les spermatozoïdes et empêche la nidation ; le DIU hormonal agit surtout en empêchant les spermatozoïdes de passer.",
                "Ces méthodes sont prescrites par un médecin ou une sage-femme. Il existe aussi des méthodes définitives, réservées aux adultes : la vasectomie chez l'homme et la ligature des trompes chez la femme. Le retrait et le calcul des jours « sans risque » sont très peu fiables : ce ne sont pas des méthodes de contraception sûres.",
              ],
              box: { label: "À retenir", text: "Préservatifs : empêchent la rencontre des gamètes et protègent des IST. Pilule, implant, patch, anneau : hormones qui empêchent l'ovulation. DIU : placé dans l'utérus, empêche la fécondation ou la nidation." },
            },
            {
              heading: "En cas d'oubli ou d'accident : la contraception d'urgence",
              paragraphs: [
                "Après un rapport non protégé ou mal protégé (oubli de pilule, préservatif qui a glissé ou s'est déchiré), on peut prendre une contraception d'urgence, souvent appelée « pilule du lendemain ». Elle doit être prise le plus tôt possible : selon le produit, jusqu'à 3 ou 5 jours après le rapport, mais elle est d'autant plus efficace qu'elle est prise tôt. Elle agit surtout en retardant l'ovulation.",
                "En France, elle est délivrée en pharmacie sans ordonnance et gratuitement, et l'infirmière scolaire peut aussi la donner aux élèves. C'est une solution de secours, pas une méthode régulière. Pour toute question, on peut s'adresser à un médecin, à une sage-femme, à l'infirmière scolaire ou à un centre de santé sexuelle, où les consultations sont gratuites et confidentielles pour les mineurs.",
                "En cas de grossesse non désirée, l'interruption volontaire de grossesse (IVG) est autorisée par la loi en France. C'est un acte médical, encadré par des professionnels, et non une méthode de contraception.",
              ],
              box: { label: "Repère", text: "Contraception d'urgence : le plus tôt possible après un rapport mal protégé, sans ordonnance en pharmacie ou auprès de l'infirmière scolaire. Ce n'est pas une contraception régulière." },
            },
          ],
          keyPoints: [
            "La contraception évite une grossesse non désirée de façon temporaire et réversible.",
            "Chaque méthode bloque une étape : ovulation, rencontre des gamètes ou nidation.",
            "Les préservatifs empêchent la rencontre des gamètes et sont les seuls à protéger aussi des IST.",
            "La pilule et l'implant apportent des hormones qui empêchent l'ovulation ; la pilule se prend chaque jour.",
            "La contraception d'urgence se prend le plus tôt possible après un rapport mal protégé ; elle est sans ordonnance.",
            "Le retrait et le calcul des jours ne sont pas des méthodes fiables.",
            "S'informer : médecin, sage-femme, infirmière scolaire, centre de santé sexuelle.",
          ],
          example: {
            statement: "Pour chaque méthode, indiquez quelle étape de la reproduction elle bloque : a) la pilule ; b) le préservatif masculin ; c) le DIU au cuivre ; d) la vasectomie.",
            solution: [
              "a) La pilule apporte des hormones qui empêchent l'ovulation : aucun ovocyte n'est libéré, donc aucune fécondation n'est possible.",
              "b) Le préservatif retient le sperme : les spermatozoïdes ne rencontrent pas l'ovocyte. Il bloque la rencontre des gamètes.",
              "c) Le DIU au cuivre gêne les spermatozoïdes, ce qui empêche la fécondation, et il empêche aussi la nidation de l'embryon.",
              "d) La vasectomie coupe les spermiductes : le sperme ne contient plus de spermatozoïdes, la rencontre des gamètes est impossible.",
              "Bilan : ovulation bloquée (pilule) ; rencontre des gamètes bloquée (préservatif, vasectomie) ; fécondation et nidation empêchées (DIU au cuivre).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque méthode, indiquez si elle utilise des hormones (oui ou non) et si elle protège des IST (oui ou non) : a) préservatif masculin ; b) pilule ; c) implant ; d) préservatif féminin ; e) DIU au cuivre.",
              hint: "Une seule famille de méthodes protège des IST : celle qui empêche tout contact avec le sperme et les sécrétions.",
              solution: [
                "a) Préservatif masculin : sans hormone ; protège des IST.",
                "b) Pilule : avec hormones ; ne protège pas des IST.",
                "c) Implant : avec hormones ; ne protège pas des IST.",
                "d) Préservatif féminin : sans hormone ; protège des IST.",
                "e) DIU au cuivre : sans hormone ; ne protège pas des IST.",
                "Bilan : seuls les préservatifs protègent des IST.",
              ],
            },
            {
              level: 2,
              statement: "Que conseilleriez-vous dans chacune de ces situations ? Justifiez. a) Un couple utilise un préservatif ; celui-ci s'est déchiré pendant le rapport. b) Une jeune femme qui prend la pilule l'a oubliée plusieurs jours et a eu un rapport. c) Un couple pense que le retrait (le garçon se retire avant l'éjaculation) suffit pour éviter une grossesse.",
              hint: "Pensez à la contraception d'urgence, aux IST et au fait que des spermatozoïdes peuvent être présents avant l'éjaculation.",
              solution: [
                "a) Le sperme a pu être en contact avec le vagin : il faut prendre une contraception d'urgence le plus tôt possible. Comme le préservatif ne protégeait plus des IST, il est aussi conseillé de faire un dépistage, en demandant conseil à un médecin ou à un centre de santé sexuelle.",
                "b) Après plusieurs oublis, la pilule peut ne plus empêcher l'ovulation : une contraception d'urgence est conseillée au plus vite, et il faut lire la notice ou demander conseil à un pharmacien ou à un médecin pour reprendre la pilule, en utilisant des préservatifs les jours suivants.",
                "c) Le retrait n'est pas fiable : il demande un contrôle difficile, et des spermatozoïdes peuvent être présents dans le liquide émis avant l'éjaculation. Il faut choisir une vraie méthode de contraception, et des préservatifs pour se protéger des IST.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Inès pense pouvoir éviter une grossesse en calculant les jours « sans risque ». Ses cycles durent habituellement 28 jours, avec une ovulation vers le jour 14. Elle considère que les jours après le jour 15 sont sans risque. Mais ce mois-ci, son cycle dure 32 jours. On rappelle que l'ovulation a lieu environ 14 jours avant la fin du cycle, et que les spermatozoïdes peuvent survivre jusqu'à 5 jours. 1) Vers quel jour a lieu l'ovulation ce mois-ci ? 2) Un rapport a lieu le jour 16. Une fécondation est-elle possible ? Justifiez par un calcul. 3) Expliquez pourquoi le calcul des jours n'est pas une méthode de contraception fiable.",
              hint: "Calculez d'abord la date d'ovulation pour un cycle de 32 jours, puis jusqu'à quel jour les spermatozoïdes peuvent survivre.",
              solution: [
                "1) Ovulation environ 14 jours avant la fin du cycle : 32 - 14 = 18. Ce mois-ci, l'ovulation a lieu vers le jour 18.",
                "2) Les spermatozoïdes déposés le jour 16 peuvent survivre jusqu'au jour 16 + 5 = 21. L'ovulation a lieu vers le jour 18, entre ces deux dates : des spermatozoïdes vivants peuvent rencontrer l'ovocyte. Une fécondation est donc possible.",
                "3) La durée d'un cycle peut varier d'un mois à l'autre (stress, maladie, voyage...), et on ne connaît la durée du cycle qu'une fois qu'il est terminé. La date de l'ovulation ne peut donc pas être prévue à l'avance avec certitude, et les spermatozoïdes survivent plusieurs jours.",
                "Conclusion : un jour qui semblait « sans risque » ne l'était pas ; seules les vraies méthodes de contraception (préservatifs, pilule, implant, DIU...) sont fiables.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque méthode à son mode d'action.",
            pairs: [
              { left: "Préservatif", right: "Retient le sperme et protège aussi des IST." },
              { left: "Pilule", right: "Hormones prises chaque jour qui empêchent l'ovulation." },
              { left: "Implant", right: "Bâtonnet sous la peau du bras qui libère des hormones pendant plusieurs années." },
              { left: "DIU au cuivre", right: "Placé dans l'utérus, il gêne les spermatozoïdes et empêche la nidation." },
              { left: "Contraception d'urgence", right: "À prendre le plus tôt possible après un rapport mal protégé." },
              { left: "Vasectomie", right: "Méthode définitive : le sperme ne contient plus de spermatozoïdes." },
            ],
          },
          quiz: [
            {
              q: "Quelle méthode protège à la fois d'une grossesse et des IST ?",
              options: ["La pilule", "Le préservatif", "L'implant", "Le DIU au cuivre"],
              answer: 1,
              why: "Les préservatifs empêchent tout contact avec le sperme et les sécrétions : ils sont les seuls à protéger aussi des IST.",
            },
            {
              q: "Comment agit principalement la pilule contraceptive ?",
              options: ["Elle détruit les spermatozoïdes dans le vagin", "Elle empêche l'ovulation", "Elle provoque les règles chaque semaine", "Elle bouche les trompes définitivement"],
              answer: 1,
              why: "Ses hormones empêchent l'ovulation : aucun ovocyte n'est libéré.",
            },
            {
              q: "Quand faut-il prendre une contraception d'urgence ?",
              options: ["Chaque matin au réveil, en complément de la pilule habituelle", "Uniquement avant un rapport prévu", "Seulement si les règles ont du retard", "Le plus tôt possible après un rapport mal protégé"],
              answer: 3,
              why: "Elle se prend le plus tôt possible après le rapport, jusqu'à 3 ou 5 jours selon le produit ; elle est d'autant plus efficace qu'elle est prise tôt.",
            },
            {
              q: "Où un élève peut-il obtenir une contraception d'urgence sans ordonnance ?",
              options: ["Auprès de l'infirmière scolaire", "Au secrétariat du collège, sur simple demande", "Dans un supermarché"],
              answer: 0,
              why: "L'infirmière scolaire peut la délivrer ; elle est aussi disponible gratuitement et sans ordonnance en pharmacie.",
            },
            {
              q: "Pourquoi le retrait n'est-il pas une méthode fiable ?",
              options: ["Parce qu'il provoque une IST", "Parce qu'il rend le garçon stérile au bout de quelques années", "Parce que des spermatozoïdes peuvent sortir avant l'éjaculation", "Parce qu'il abîme l'utérus"],
              answer: 2,
              why: "Le liquide émis avant l'éjaculation peut contenir des spermatozoïdes, et le contrôle est difficile.",
            },
          ],
          trap: "Croire que la pilule protège des IST. Elle empêche seulement l'ovulation ; seuls les préservatifs protègent à la fois d'une grossesse et des infections sexuellement transmissibles.",
          method: "Pour chaque méthode de contraception, posez-vous deux questions et notez les réponses dans un tableau : quelle étape de la reproduction bloque-t-elle (ovulation, rencontre des gamètes, nidation) ? protège-t-elle des IST ? Ce tableau suffit à répondre à la plupart des questions.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ist-prevention',
          title: "Les infections sexuellement transmissibles et leur prévention",
          minutes: 25,
          objectives: [
            "Identifier quelques infections sexuellement transmissibles et les micro-organismes qui les provoquent.",
            "Expliquer les modes de transmission des IST.",
            "Relier la connaissance des modes de transmission aux moyens de prévention : préservatif, vaccination, dépistage.",
            "Argumenter en faveur d'un comportement responsable pour sa santé et celle des autres.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une IST ?",
              paragraphs: [
                "Une infection sexuellement transmissible (IST) est une infection provoquée par un micro-organisme qui se transmet principalement lors des rapports sexuels, par contact avec le sperme, les sécrétions vaginales, le sang ou les muqueuses (la peau fine et humide des organes génitaux, de la bouche ou de l'anus).",
                "Les IST sont provoquées par différents micro-organismes. Des bactéries : les chlamydias, le gonocoque (responsable de la gonorrhée) ou la bactérie de la syphilis. Des virus : le VIH, les papillomavirus humains (HPV), le virus de l'herpès génital ou celui de l'hépatite B. Il existe aussi des IST dues à des parasites.",
                "Beaucoup d'IST ne donnent aucun symptôme pendant longtemps. Une personne peut donc être infectée et transmettre l'infection sans le savoir. Quand il y a des symptômes, ce peuvent être des brûlures en urinant, des écoulements, des boutons ou des plaies sur les organes génitaux.",
              ],
              box: { label: "Définition", text: "Une IST est une infection due à une bactérie, un virus ou un parasite, qui se transmet principalement lors de rapports sexuels non protégés. Elle passe souvent inaperçue, sans symptôme." },
            },
            {
              heading: "Des conséquences parfois graves",
              paragraphs: [
                "L'infection à chlamydias est très fréquente chez les jeunes. Elle se soigne facilement avec des antibiotiques, mais si elle n'est pas soignée, elle peut abîmer les trompes et rendre une femme stérile. Certains papillomavirus peuvent provoquer, des années plus tard, des cancers, en particulier le cancer du col de l'utérus.",
                "Le VIH (virus de l'immunodéficience humaine) détruit peu à peu certaines cellules de défense de l'organisme. Sans traitement, après plusieurs années, l'organisme ne parvient plus à se défendre contre des microbes habituellement peu dangereux : c'est le sida. Le VIH se transmet par les rapports sexuels non protégés, par le sang (par exemple en partageant une seringue) et de la mère à l'enfant pendant la grossesse, l'accouchement ou l'allaitement.",
                "Il n'existe ni vaccin ni guérison contre le VIH, mais des traitements très efficaces empêchent le virus de se multiplier : une personne bien traitée peut vivre longtemps, et elle ne transmet plus le virus par voie sexuelle.",
              ],
            },
            {
              heading: "Se protéger et protéger les autres",
              paragraphs: [
                "Le préservatif, masculin ou féminin, utilisé à chaque rapport, est le moyen le plus efficace pour se protéger des IST. La pilule, l'implant ou le DIU protègent d'une grossesse, mais pas des IST.",
                "Des vaccins protègent de certaines IST. La vaccination contre les papillomavirus est recommandée pour les filles et les garçons de 11 à 14 ans, et elle est proposée gratuitement au collège, en classe de 5e. La vaccination contre l'hépatite B est aussi recommandée.",
                "Le dépistage permet de savoir si l'on est infecté, même sans symptôme, et de se soigner tôt. Il est gratuit et confidentiel dans les centres de dépistage (CeGIDD) et dans les centres de santé sexuelle. Après un risque d'exposition au VIH (rapport non protégé, préservatif déchiré), un traitement d'urgence existe : il faut consulter aux urgences le plus vite possible, au mieux dans les 4 heures et au plus tard dans les 48 heures.",
              ],
              box: { label: "À retenir", text: "Se protéger des IST : le préservatif à chaque rapport, la vaccination (papillomavirus, hépatite B) et le dépistage, gratuit et confidentiel. En cas de risque d'exposition au VIH : consulter en urgence, dans les 48 heures au plus tard." },
            },
            {
              heading: "Ce qui ne transmet pas les IST",
              paragraphs: [
                "Le VIH ne se transmet pas par la salive, les larmes ou la sueur. On ne l'attrape pas en embrassant quelqu'un sur la joue, en lui serrant la main, en buvant dans son verre, en partageant des toilettes ou une piscine, ni par une piqûre de moustique. Connaître les vrais modes de transmission permet de se protéger efficacement et d'éviter de rejeter injustement les personnes qui vivent avec le VIH.",
              ],
            },
          ],
          keyPoints: [
            "Une IST est due à une bactérie, un virus ou un parasite transmis surtout lors de rapports sexuels non protégés.",
            "Beaucoup d'IST ne donnent aucun symptôme : on peut transmettre une IST sans le savoir.",
            "Chlamydias : soignées par antibiotiques, mais peuvent rendre stérile si elles ne sont pas traitées.",
            "Le VIH se transmet par voie sexuelle, par le sang et de la mère à l'enfant ; sans traitement, il conduit au sida.",
            "Le préservatif est le meilleur moyen de prévention ; la pilule ne protège pas des IST.",
            "Vaccins contre les papillomavirus et l'hépatite B ; dépistage gratuit et confidentiel.",
            "Le VIH ne se transmet ni par la salive, ni par une poignée de main, ni par les moustiques.",
          ],
          example: {
            statement: "Pour chaque situation, indiquez s'il existe un risque de transmission du VIH, et justifiez : a) partager une bouteille d'eau avec une personne séropositive (porteuse du VIH) ; b) avoir un rapport sexuel sans préservatif avec une personne dont on ne connaît pas le statut ; c) utiliser une seringue déjà utilisée par une autre personne ; d) être piqué par un moustique.",
            solution: [
              "Je rappelle les trois modes de transmission du VIH : les rapports sexuels non protégés, le sang, et de la mère à l'enfant.",
              "a) Pas de risque : le VIH ne se transmet pas par la salive.",
              "b) Risque : un rapport sexuel non protégé est le principal mode de transmission. Il faut utiliser un préservatif, et après un tel rapport, consulter rapidement.",
              "c) Risque : la seringue peut contenir du sang infecté ; c'est une transmission par le sang.",
              "d) Pas de risque : le moustique ne transmet pas le VIH.",
              "Réponse : risque dans les situations b et c ; aucun risque dans les situations a et d.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le type de micro-organisme (bactérie ou virus) responsable de chaque infection, et dites si l'on peut s'en protéger par un vaccin : a) VIH ; b) chlamydias ; c) papillomavirus humains ; d) hépatite B ; e) gonorrhée.",
              hint: "Les antibiotiques soignent les infections bactériennes ; les deux vaccins cités dans le cours protègent contre des virus.",
              solution: [
                "a) VIH : un virus ; pas de vaccin.",
                "b) Chlamydias : des bactéries ; pas de vaccin, mais elles se soignent par antibiotiques.",
                "c) Papillomavirus humains : des virus ; un vaccin existe, recommandé de 11 à 14 ans.",
                "d) Hépatite B : un virus ; un vaccin existe.",
                "e) Gonorrhée : une bactérie (le gonocoque) ; pas de vaccin, elle se soigne par antibiotiques.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Lors d'une journée de dépistage, 200 jeunes font un test de dépistage des chlamydias. 6 tests sont positifs. Parmi ces 6 personnes infectées, 4 n'avaient aucun symptôme. 1) Calculez le pourcentage de tests positifs. 2) Calculez le pourcentage de personnes infectées qui n'avaient aucun symptôme (arrondi à l'unité). 3) Que montrent ces résultats sur l'intérêt du dépistage ? 4) Que risquaient ces 4 personnes si elles n'avaient pas été dépistées ?",
              hint: "Un pourcentage se calcule ainsi : (partie ÷ total) × 100.",
              solution: [
                "1) Tests positifs : 6 ÷ 200 × 100 = 3 %.",
                "2) Personnes infectées sans symptôme : 4 ÷ 6 × 100 ≈ 66,7, soit environ 67 %.",
                "3) Les deux tiers des personnes infectées ne se savaient pas malades : sans dépistage, on ne peut pas savoir qu'on est infecté. Le dépistage permet de se soigner et d'éviter de transmettre l'infection.",
                "4) Sans traitement, elles pouvaient transmettre l'infection à leurs partenaires sans le savoir, et l'infection pouvait abîmer leurs trompes (chez une femme) et entraîner une stérilité.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Maël affirme : « Ma copine prend la pilule, donc on n'a pas besoin de préservatif. » Rédigez une réponse argumentée d'une dizaine de lignes pour lui expliquer pourquoi son raisonnement est incomplet. Utilisez au moins trois connaissances du cours, et proposez-lui des solutions concrètes.",
              hint: "Distinguez bien les deux risques : la grossesse et les IST. Pensez aussi à l'absence fréquente de symptômes, au dépistage et à la vaccination.",
              solution: [
                "Maël a raison sur un point : la pilule, bien prise, empêche l'ovulation et donc une grossesse.",
                "Mais la pilule ne protège pas des IST. Elle n'empêche pas le contact avec le sperme, les sécrétions vaginales ou les muqueuses, par lesquels passent les bactéries et les virus.",
                "De plus, beaucoup d'IST, comme l'infection à chlamydias, ne donnent aucun symptôme : l'un des deux partenaires peut être infecté sans le savoir, et transmettre l'infection.",
                "Les conséquences peuvent être graves : stérilité due aux chlamydias, cancers dus à certains papillomavirus, ou infection par le VIH, dont on ne guérit pas.",
                "Solutions : utiliser un préservatif à chaque rapport, en plus de la pilule ; faire un dépistage tous les deux (gratuit et confidentiel dans un CeGIDD ou un centre de santé sexuelle) ; se faire vacciner contre les papillomavirus et l'hépatite B. C'est seulement après un dépistage négatif des deux partenaires, dans une relation stable, qu'on peut envisager d'arrêter le préservatif.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Faites le tri parmi les idées reçues sur les IST.",
            statements: [
              { text: "On peut avoir une IST sans aucun symptôme.", true: true, why: "Beaucoup d'IST passent inaperçues pendant longtemps : seul le dépistage permet de le savoir." },
              { text: "La pilule protège des IST.", true: false, why: "Elle empêche l'ovulation, mais pas le passage des micro-organismes : seul le préservatif protège des IST." },
              { text: "Le VIH peut se transmettre par une piqûre de moustique.", true: false, why: "Le moustique ne transmet pas le VIH." },
              { text: "Un vaccin protège contre certains papillomavirus.", true: true, why: "Il est recommandé pour les filles et les garçons de 11 à 14 ans." },
              { text: "Une infection à chlamydias non soignée peut rendre stérile.", true: true, why: "Elle peut abîmer les trompes et empêcher la rencontre des gamètes." },
              { text: "On guérit aujourd'hui définitivement du VIH grâce à un traitement.", true: false, why: "Les traitements contrôlent très bien le virus, mais ne l'éliminent pas : il faut les prendre à vie." },
              { text: "Le dépistage des IST peut être gratuit et confidentiel.", true: true, why: "C'est le cas dans les CeGIDD et dans les centres de santé sexuelle." },
              { text: "On peut attraper le VIH en buvant dans le verre d'une personne séropositive.", true: false, why: "Le VIH ne se transmet pas par la salive." },
            ],
          },
          quiz: [
            {
              q: "Quel moyen protège le mieux des IST lors d'un rapport sexuel ?",
              options: ["La pilule", "Le préservatif", "L'implant", "La contraception d'urgence"],
              answer: 1,
              why: "Le préservatif empêche le contact avec le sperme, les sécrétions et les muqueuses ; les méthodes hormonales ne protègent pas des IST.",
            },
            {
              q: "Pourquoi le dépistage est-il important, même sans symptôme ?",
              options: ["Parce qu'il remplace le préservatif", "Parce qu'il protège de toutes les IST", "Parce que beaucoup d'IST ne donnent aucun symptôme", "Parce qu'il est obligatoire chaque année pour tous les élèves de collège"],
              answer: 2,
              why: "Une personne peut être infectée sans le savoir ; le dépistage permet de se soigner et d'éviter de transmettre l'infection.",
            },
            {
              q: "Par quel moyen le VIH ne se transmet-il pas ?",
              options: ["Un rapport sexuel non protégé", "Une seringue partagée", "De la mère à l'enfant", "Un baiser sur la joue"],
              answer: 3,
              why: "Le VIH ne se transmet pas par la salive ; il se transmet par voie sexuelle, par le sang et de la mère à l'enfant.",
            },
            {
              q: "Quelle IST peut-on prévenir par un vaccin dès le collège ?",
              options: ["Les papillomavirus", "Le VIH", "La gonorrhée, due au gonocoque"],
              answer: 0,
              why: "La vaccination contre les papillomavirus est recommandée de 11 à 14 ans et proposée au collège ; il n'existe pas de vaccin contre le VIH.",
            },
            {
              q: "Après un préservatif déchiré avec un partenaire dont on ne connaît pas le statut, que faire pour le VIH ?",
              options: ["Attendre tranquillement l'apparition d'éventuels symptômes pendant quelques mois", "Consulter aux urgences dans les 48 heures au plus tard", "Prendre un antibiotique", "Ne rien faire, le risque est nul"],
              answer: 1,
              why: "Un traitement d'urgence contre le VIH existe ; il doit être commencé le plus tôt possible, au plus tard dans les 48 heures.",
            },
          ],
          trap: "Penser qu'une personne en bonne santé apparente ne peut pas avoir d'IST. La plupart des IST ne donnent aucun symptôme pendant longtemps : seul un dépistage permet de savoir si l'on est infecté.",
          method: "Pour répondre à une question sur un risque d'IST, raisonnez en deux étapes : identifiez d'abord le mode de transmission en jeu (sexuel, sang, mère-enfant, ou aucun), puis associez-lui le bon moyen de prévention (préservatif, vaccination, dépistage, matériel à usage unique).",
        },
      ],
    },
    /* ==================================================================== */
    /* NOURRIR LES ORGANES : RESPIRATION ET CIRCULATION                     */
    /* ==================================================================== */
    {
      id: 'nutrition-organes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'besoins-organes',
          title: "Les besoins des organes en dioxygène et en nutriments",
          minutes: 25,
          objectives: [
            "Identifier les besoins des organes en dioxygène et en nutriments, et les déchets qu'ils produisent.",
            "Exploiter des données comparant le sang qui entre dans un organe et le sang qui en sort.",
            "Relier l'augmentation de l'activité d'un organe à l'augmentation de ses besoins.",
            "Expliquer que les cellules utilisent le dioxygène et les nutriments pour produire de l'énergie.",
          ],
          course: [
            {
              heading: "Des organes qui consomment et qui rejettent",
              paragraphs: [
                "Vos muscles, votre cerveau, votre cœur et tous vos autres organes sont formés de cellules. Pour fonctionner, ces cellules ont besoin en permanence de dioxygène et de nutriments : le glucose (un sucre), les acides aminés (issus des protéines) et les acides gras (issus des lipides). Elles ont aussi besoin d'eau et de sels minéraux.",
                "Ces substances sont apportées par le sang. Si l'on compare le sang qui entre dans un muscle et le sang qui en sort, on constate que le sang qui sort contient moins de dioxygène et moins de glucose, mais plus de dioxyde de carbone. Le muscle a donc prélevé du dioxygène et du glucose dans le sang, et il y a rejeté du dioxyde de carbone.",
              ],
              box: { label: "À retenir", text: "Les organes prélèvent dans le sang du dioxygène et des nutriments (glucose, acides aminés, acides gras), et ils y rejettent des déchets, comme le dioxyde de carbone." },
            },
            {
              heading: "Plus un organe travaille, plus il consomme",
              paragraphs: [
                "Pendant un effort, un muscle travaille davantage : il consomme beaucoup plus de dioxygène et de glucose qu'au repos, et il produit davantage de dioxyde de carbone. L'organisme s'adapte : le cœur bat plus vite et la respiration s'accélère. Ainsi, une plus grande quantité de sang, riche en dioxygène, arrive chaque minute aux muscles.",
                "Certains organes consomment beaucoup même au repos. Le cerveau ne représente qu'environ 2 % de la masse du corps, mais il utilise environ 20 % du dioxygène consommé par l'organisme au repos. Privées de dioxygène pendant quelques minutes seulement, les cellules du cerveau sont gravement endommagées.",
              ],
            },
            {
              heading: "Dans les cellules : produire de l'énergie",
              paragraphs: [
                "Pourquoi les cellules ont-elles besoin de dioxygène et de glucose ? Parce qu'elles en tirent l'énergie nécessaire à leur fonctionnement. Dans les cellules, le glucose réagit avec le dioxygène : cette transformation libère de l'énergie et produit du dioxyde de carbone et de l'eau. On l'appelle la respiration cellulaire.",
                "On peut la comparer au moteur d'une voiture, qui utilise du carburant et l'air pour produire du mouvement, en rejetant des gaz. Dans la cellule, la transformation est lente, sans flamme, et à 37 °C. L'énergie libérée permet aux muscles de se contracter, au cerveau de fonctionner, et elle maintient la température du corps. Une partie des nutriments, comme les acides aminés, sert aussi à construire et à réparer les cellules.",
              ],
              box: { label: "Formule", text: "Respiration cellulaire : glucose + dioxygène → dioxyde de carbone + eau + énergie." },
            },
            {
              heading: "Le sang relie les organes entre eux",
              paragraphs: [
                "Le sang fait le lien entre les organes qui approvisionnent l'organisme et ceux qui consomment. L'intestin grêle fait passer les nutriments dans le sang ; les poumons y font entrer le dioxygène. Le sang les transporte jusqu'à toutes les cellules du corps.",
                "Les déchets sont aussi transportés par le sang : le dioxyde de carbone est rejeté au niveau des poumons. D'autres déchets, comme l'urée, qui provient de l'utilisation des protéines, sont filtrés par les reins et éliminés dans l'urine.",
              ],
              box: { label: "Repère", text: "Apports : intestin grêle (nutriments), poumons (dioxygène). Transport : le sang, mis en mouvement par le cœur. Élimination : poumons (dioxyde de carbone), reins (urée)." },
            },
          ],
          keyPoints: [
            "Les cellules des organes ont besoin de dioxygène et de nutriments (glucose, acides aminés, acides gras), apportés par le sang.",
            "Le sang qui sort d'un organe contient moins de dioxygène et de glucose, et plus de dioxyde de carbone.",
            "Plus un organe est actif, plus il consomme de dioxygène et de nutriments.",
            "Pendant un effort, le cœur et la respiration accélèrent pour apporter plus de sang aux muscles.",
            "Respiration cellulaire : glucose + dioxygène → dioxyde de carbone + eau + énergie.",
            "Les déchets sont éliminés par les poumons (dioxyde de carbone) et par les reins (urée).",
          ],
          example: {
            statement: "Valeurs approchées. On mesure la quantité de dioxygène dans 100 mL de sang qui entre dans un muscle de la cuisse et dans 100 mL de sang qui en sort. Au repos : sang entrant 20 mL, sang sortant 15 mL. Pendant une course : sang entrant 20 mL, sang sortant 8 mL. 1) Calculez la quantité de dioxygène prélevée par le muscle dans 100 mL de sang, au repos et pendant la course. 2) Que concluez-vous ?",
            solution: [
              "1) Au repos : 20 - 15 = 5 mL de dioxygène prélevés dans 100 mL de sang.",
              "Pendant la course : 20 - 8 = 12 mL de dioxygène prélevés dans 100 mL de sang.",
              "Je compare : 12 ÷ 5 = 2,4. Pendant la course, le muscle prélève 2,4 fois plus de dioxygène dans chaque volume de sang.",
              "2) Le muscle consomme plus de dioxygène quand il travaille : ses besoins augmentent avec son activité.",
              "De plus, pendant l'effort, il reçoit aussi beaucoup plus de sang chaque minute : sa consommation totale augmente donc encore davantage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les substances suivantes en deux groupes : celles que les cellules prélèvent dans le sang et celles qu'elles y rejettent. Dioxygène, glucose, dioxyde de carbone, urée, acides aminés, eau.",
              hint: "Un déchet est une substance produite par les cellules et qui doit être éliminée de l'organisme.",
              solution: [
                "Prélevées dans le sang : le dioxygène, le glucose, les acides aminés et l'eau.",
                "Rejetées dans le sang : le dioxyde de carbone et l'urée, qui sont des déchets.",
                "Remarque : l'eau est aussi produite par la respiration cellulaire, mais elle n'est pas un déchet toxique comme l'urée.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Au repos, 0,5 litre de sang traverse un muscle chaque minute, et chaque litre de sang lui cède 50 mL de dioxygène. Pendant un effort intense, 5 litres de sang traversent ce muscle chaque minute, et chaque litre de sang lui cède 150 mL de dioxygène. 1) Calculez la quantité de dioxygène reçue par le muscle en une minute, au repos et pendant l'effort. 2) Combien de fois plus de dioxygène le muscle reçoit-il pendant l'effort ? 3) Citez les deux changements qui expliquent cette augmentation.",
              hint: "Quantité de dioxygène par minute = volume de sang par minute × dioxygène cédé par litre.",
              solution: [
                "1) Au repos : 0,5 × 50 = 25 mL de dioxygène par minute.",
                "Pendant l'effort : 5 × 150 = 750 mL de dioxygène par minute.",
                "2) 750 ÷ 25 = 30 : le muscle reçoit 30 fois plus de dioxygène pendant l'effort.",
                "3) Deux changements : il passe beaucoup plus de sang dans le muscle chaque minute (10 fois plus), et le muscle prélève plus de dioxygène dans chaque litre de sang (3 fois plus).",
                "Réponse : 25 mL par minute au repos, 750 mL par minute pendant l'effort, soit 30 fois plus.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Valeurs approchées. Chez un adulte de 70 kg, le cerveau pèse environ 1,4 kg. Au repos, l'organisme consomme environ 250 mL de dioxygène par minute, et le cerveau en utilise environ 20 %. 1) Calculez le pourcentage de la masse du corps que représente le cerveau. 2) Calculez la quantité de dioxygène utilisée par le cerveau en une minute, puis en une journée (en litres). 3) Lors d'un arrêt du cœur, les secours doivent pratiquer immédiatement un massage cardiaque. Expliquez pourquoi, à l'aide de vos connaissances.",
              hint: "Une journée compte 24 × 60 = 1 440 minutes, et 1 L = 1 000 mL.",
              solution: [
                "1) 1,4 ÷ 70 × 100 = 2 % : le cerveau représente 2 % de la masse du corps.",
                "2) Par minute : 20 % de 250 mL = 0,20 × 250 = 50 mL de dioxygène.",
                "Par jour : 50 × 1 440 = 72 000 mL, soit 72 litres de dioxygène.",
                "3) Lors d'un arrêt du cœur, le sang ne circule plus : le cerveau, qui consomme beaucoup de dioxygène, n'en reçoit plus. Ses cellules sont gravement endommagées au bout de quelques minutes seulement. Le massage cardiaque fait circuler le sang et continue d'apporter du dioxygène au cerveau en attendant les secours.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque organe à son rôle dans la nutrition de l'organisme.",
            pairs: [
              { left: "Intestin grêle", right: "Fait passer les nutriments dans le sang." },
              { left: "Poumons", right: "Font entrer le dioxygène dans le sang et rejettent le dioxyde de carbone." },
              { left: "Cœur", right: "Met le sang en mouvement dans tout le corps." },
              { left: "Reins", right: "Filtrent le sang et éliminent l'urée dans l'urine." },
              { left: "Muscles", right: "Consomment du dioxygène et du glucose pour se contracter." },
            ],
          },
          quiz: [
            {
              q: "Quel gaz le sang qui sort d'un muscle contient-il en plus grande quantité que le sang qui y entre ?",
              options: ["Le dioxygène", "Le diazote de l'air inspiré", "Le dioxyde de carbone"],
              answer: 2,
              why: "Le muscle rejette dans le sang le dioxyde de carbone produit par ses cellules.",
            },
            {
              q: "Lequel de ces éléments est un nutriment ?",
              options: ["Le glucose", "L'urée", "Le dioxyde de carbone", "Le pain"],
              answer: 0,
              why: "Le glucose est un nutriment, utilisable par les cellules ; le pain est un aliment, qui doit d'abord être digéré.",
            },
            {
              q: "Que produit la respiration cellulaire, en plus de l'énergie ?",
              options: ["Du glucose et du dioxygène en grande quantité", "Du dioxyde de carbone et de l'eau", "De l'urée et du sucre", "Des acides aminés"],
              answer: 1,
              why: "Glucose + dioxygène → dioxyde de carbone + eau + énergie.",
            },
            {
              q: "Pourquoi le cœur bat-il plus vite pendant un effort ?",
              options: ["Pour éliminer plus d'urée dans l'urine", "Pour refroidir les muscles plus rapidement", "Pour digérer plus vite le dernier repas", "Pour apporter plus de sang aux muscles"],
              answer: 3,
              why: "Les muscles actifs ont besoin de plus de dioxygène et de glucose : le cœur envoie plus de sang chaque minute.",
            },
            {
              q: "Quel organe élimine l'urée ?",
              options: ["Les poumons", "Le foie", "Les reins", "Le cœur"],
              answer: 2,
              why: "Les reins filtrent le sang et éliminent l'urée dans l'urine.",
            },
          ],
          trap: "Confondre aliment et nutriment. Le pain ou la viande sont des aliments ; les cellules ne peuvent utiliser que des nutriments (glucose, acides aminés, acides gras), obtenus après la digestion et transportés par le sang.",
          method: "Face à un tableau qui compare le sang entrant et le sang sortant d'un organe, faites pour chaque substance la soustraction entrant moins sortant. Un résultat positif signifie que l'organe l'a prélevée ; un résultat négatif, qu'il l'a rejetée. Concluez ensuite par une phrase.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'respiration',
          title: "La respiration et les échanges gazeux",
          minutes: 30,
          objectives: [
            "Décrire le trajet de l'air dans l'appareil respiratoire.",
            "Expliquer les mouvements respiratoires : inspiration et expiration.",
            "Expliquer les échanges gazeux dans les alvéoles pulmonaires et les caractéristiques de cette surface d'échange.",
            "Relier des comportements comme le tabagisme à la santé de l'appareil respiratoire.",
          ],
          course: [
            {
              heading: "Le trajet de l'air",
              paragraphs: [
                "L'air entre par le nez ou par la bouche. Dans les fosses nasales, il est réchauffé, humidifié et en partie filtré. Il passe ensuite par le pharynx (le carrefour avec le tube digestif), puis par le larynx, qui contient les cordes vocales.",
                "L'air descend ensuite dans la trachée, un tube renforcé par des anneaux de cartilage, qui se divise en deux bronches, une pour chaque poumon. Les bronches se ramifient en tubes de plus en plus fins, les bronchioles, qui se terminent par de minuscules sacs : les alvéoles pulmonaires, groupées comme des grappes de raisin.",
                "Les voies respiratoires sont tapissées de mucus et de cils microscopiques : les poussières et les microbes se collent au mucus, que les cils font remonter vers la gorge.",
              ],
              box: { label: "Repère", text: "Trajet de l'air : fosses nasales (ou bouche) → pharynx → larynx → trachée → bronches → bronchioles → alvéoles pulmonaires." },
            },
            {
              heading: "Inspiration et expiration",
              paragraphs: [
                "Les poumons n'ont pas de muscles : ils suivent les mouvements de la cage thoracique. Lors de l'inspiration, le diaphragme, un muscle en forme de dôme situé sous les poumons, se contracte et s'abaisse, et les muscles situés entre les côtes soulèvent les côtes. Le volume de la cage thoracique augmente, les poumons se gonflent et l'air entre.",
                "Lors de l'expiration, ces muscles se relâchent : le volume de la cage thoracique diminue et l'air est chassé des poumons. Au repos, un adolescent respire environ 12 à 20 fois par minute, et chaque inspiration fait entrer environ un demi-litre d'air. Pendant un effort, les mouvements respiratoires deviennent plus rapides et plus amples.",
              ],
            },
            {
              heading: "Les échanges gazeux dans les alvéoles",
              paragraphs: [
                "L'air inspiré contient environ 21 % de dioxygène et 0,04 % de dioxyde de carbone ; l'air expiré contient environ 16 % de dioxygène et 4 % de dioxyde de carbone. Entre les deux, des échanges ont eu lieu dans les alvéoles.",
                "Chaque alvéole est entourée d'un réseau de vaisseaux sanguins très fins, les capillaires. La paroi de l'alvéole et celle des capillaires sont extrêmement fines : moins d'un millième de millimètre au total. Le dioxygène passe de l'air des alvéoles dans le sang, et le dioxyde de carbone passe du sang dans l'air des alvéoles, qui sera expiré.",
                "Les poumons contiennent plusieurs centaines de millions d'alvéoles. Leur surface totale est immense, de l'ordre de 100 m², soit environ cinquante fois la surface de la peau. Une grande surface, une paroi très fine, un sang qui circule en permanence et un air sans cesse renouvelé : ce sont les caractéristiques d'une surface d'échange efficace.",
              ],
              box: { label: "À retenir", text: "Dans les alvéoles, le dioxygène passe de l'air dans le sang et le dioxyde de carbone passe du sang dans l'air. La surface d'échange est très grande, très fine et très irriguée." },
            },
            {
              heading: "Protéger son appareil respiratoire",
              paragraphs: [
                "La fumée de tabac contient des milliers de substances. Les goudrons se déposent dans les poumons, paralysent les cils et provoquent des cancers. Le monoxyde de carbone prend la place du dioxygène dans les globules rouges : le sang transporte moins de dioxygène, et le fumeur s'essouffle plus vite. La nicotine rend dépendant : il devient très difficile d'arrêter.",
                "Le tabac est responsable de bronchites chroniques, de cancers du poumon et de maladies du cœur et des vaisseaux. La chicha expose aussi à ces substances, et la cigarette électronique contient souvent de la nicotine. La pollution de l'air irrite aussi les voies respiratoires. Ne pas commencer à fumer, aérer les pièces et pratiquer une activité physique protègent l'appareil respiratoire.",
              ],
            },
          ],
          keyPoints: [
            "Trajet de l'air : fosses nasales, pharynx, larynx, trachée, bronches, bronchioles, alvéoles.",
            "Inspiration : le diaphragme s'abaisse et les côtes se soulèvent, l'air entre ; expiration : les muscles se relâchent, l'air sort.",
            "L'air expiré contient moins de dioxygène (16 % au lieu de 21 %) et plus de dioxyde de carbone (4 % au lieu de 0,04 %).",
            "Dans les alvéoles, le dioxygène passe dans le sang et le dioxyde de carbone passe dans l'air.",
            "Surface d'échange efficace : très grande (environ 100 m²), paroi très fine, nombreux capillaires.",
            "Le tabac abîme les poumons : goudrons (cancers), monoxyde de carbone (moins de dioxygène transporté), nicotine (dépendance).",
          ],
          example: {
            statement: "Données simplifiées. Au repos, Sami respire 12 fois par minute et fait entrer 0,5 L d'air à chaque inspiration. L'air inspiré contient 21 % de dioxygène et l'air expiré 16 %. 1) Calculez le volume d'air qui entre dans ses poumons en une minute. 2) Calculez le volume de dioxygène qui passe dans son sang en une minute.",
            solution: [
              "1) Volume d'air par minute : 12 × 0,5 = 6 L.",
              "2) À chaque passage dans les poumons, l'air perd 21 - 16 = 5 % de son volume en dioxygène : c'est la part qui passe dans le sang.",
              "Volume de dioxygène absorbé : 5 % de 6 L = 0,05 × 6 = 0,3 L.",
              "Je convertis : 0,3 L = 300 mL.",
              "Réponse : 6 L d'air entrent chaque minute, et environ 300 mL de dioxygène passent dans le sang.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remettez dans l'ordre les organes traversés par l'air inspiré, depuis l'extérieur : bronchiole, trachée, fosses nasales, alvéole, bronche, larynx, pharynx.",
              hint: "Le larynx, qui contient les cordes vocales, est situé juste au-dessus de la trachée.",
              solution: [
                "L'air entre par les fosses nasales, passe par le pharynx puis le larynx.",
                "Il descend dans la trachée, puis dans une bronche, puis dans les bronchioles.",
                "Il arrive enfin dans les alvéoles.",
                "Réponse : fosses nasales → pharynx → larynx → trachée → bronche → bronchiole → alvéole.",
              ],
            },
            {
              level: 2,
              statement: "On fabrique un modèle de l'appareil respiratoire : une bouteille en plastique sans fond, fermée en bas par une membrane de caoutchouc souple. Dans le goulot, un tube en Y porte deux ballons de baudruche placés à l'intérieur de la bouteille. Quand on tire la membrane vers le bas, les ballons se gonflent ; quand on la relâche, ils se dégonflent. 1) Indiquez ce que représentent la bouteille, la membrane, le tube en Y et les ballons. 2) Quel mouvement respiratoire est modélisé quand on tire la membrane vers le bas ? Expliquez. 3) Citez une limite de ce modèle.",
              hint: "Cherchez quel muscle s'abaisse pendant l'inspiration et ce qui, dans le corps, entoure les poumons.",
              solution: [
                "1) La bouteille représente la cage thoracique ; la membrane, le diaphragme ; le tube en Y, la trachée et les deux bronches ; les ballons, les poumons.",
                "2) Tirer la membrane vers le bas modélise l'inspiration : quand le diaphragme s'abaisse, le volume de la cage thoracique augmente, les poumons se gonflent et l'air entre.",
                "3) Limites possibles : la bouteille est rigide alors que les côtes se soulèvent ; les ballons sont creux et ne contiennent ni bronchioles ni alvéoles ; le modèle ne montre pas les échanges gazeux avec le sang.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Dans le sang, le dioxygène est transporté par les globules rouges. 100 mL de sang peuvent transporter 20 mL de dioxygène si tous leurs sites de transport sont libres. Chez un non-fumeur, 1 % de ces sites sont occupés par du monoxyde de carbone ; chez un gros fumeur, 8 %. 1) Calculez le volume de dioxygène que peuvent transporter 100 mL de sang chez le non-fumeur et chez le fumeur. 2) Expliquez pourquoi un fumeur s'essouffle plus vite pendant un effort. 3) Citez deux autres effets du tabac sur l'appareil respiratoire.",
              hint: "Si 8 % des sites sont occupés par le monoxyde de carbone, il n'en reste que 92 % pour le dioxygène.",
              solution: [
                "1) Non-fumeur : 99 % des sites sont libres, donc 0,99 × 20 = 19,8 mL de dioxygène pour 100 mL de sang.",
                "Fumeur : 92 % des sites sont libres, donc 0,92 × 20 = 18,4 mL de dioxygène pour 100 mL de sang.",
                "2) Le sang du fumeur transporte moins de dioxygène. Pendant un effort, ses muscles en reçoivent moins, alors que leurs besoins augmentent : pour compenser, il doit respirer plus vite et son cœur doit battre plus vite, il s'essouffle donc plus tôt.",
                "3) Les goudrons se déposent dans les poumons, paralysent les cils et peuvent provoquer des cancers ; la fumée provoque des bronchites chroniques ; la nicotine rend dépendant.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez ce que vous savez sur la respiration.",
            statements: [
              { text: "Les poumons se gonflent grâce à leurs propres muscles.", true: false, why: "Les poumons n'ont pas de muscles : ils suivent les mouvements du diaphragme et des côtes." },
              { text: "Pendant l'inspiration, le diaphragme s'abaisse.", true: true, why: "En se contractant, il s'aplatit vers le bas et augmente le volume de la cage thoracique." },
              { text: "L'air expiré ne contient plus du tout de dioxygène.", true: false, why: "Il en contient encore environ 16 % : seule une partie du dioxygène passe dans le sang." },
              { text: "Les échanges gazeux ont lieu dans les bronches.", true: false, why: "Ils ont lieu dans les alvéoles, dont la paroi très fine est entourée de capillaires." },
              { text: "Le dioxyde de carbone passe du sang vers l'air des alvéoles.", true: true, why: "Il est ensuite rejeté avec l'air expiré." },
              { text: "Le monoxyde de carbone de la fumée de tabac réduit le transport du dioxygène.", true: true, why: "Il prend la place du dioxygène dans les globules rouges." },
              { text: "La surface des alvéoles est de l'ordre de quelques centimètres carrés.", true: false, why: "Elle est de l'ordre de 100 m², grâce à plusieurs centaines de millions d'alvéoles." },
            ],
          },
          quiz: [
            {
              q: "Où ont lieu les échanges gazeux dans les poumons ?",
              options: ["Dans la trachée", "Dans les alvéoles", "Dans le larynx", "Dans les bronches"],
              answer: 1,
              why: "Les alvéoles ont une paroi très fine, entourée de capillaires sanguins : c'est là que les gaz passent entre l'air et le sang.",
            },
            {
              q: "Que fait le diaphragme lors de l'inspiration ?",
              options: ["Il se contracte et s'abaisse", "Il se relâche et remonte", "Il ferme la trachée", "Il pousse l'air hors des poumons"],
              answer: 0,
              why: "En se contractant, le diaphragme s'abaisse, le volume de la cage thoracique augmente et l'air entre.",
            },
            {
              q: "Quelle est la proportion de dioxygène dans l'air expiré ?",
              options: ["0 %", "4 %", "21 %", "16 %"],
              answer: 3,
              why: "L'air inspiré en contient environ 21 % ; une partie passe dans le sang, il en reste environ 16 % dans l'air expiré.",
            },
            {
              q: "Laquelle de ces caractéristiques rend les alvéoles efficaces pour les échanges ?",
              options: ["Leur paroi épaisse et rigide", "Leur petit nombre", "Leur paroi très fine", "L'absence de vaisseaux sanguins"],
              answer: 2,
              why: "Une paroi très fine, une très grande surface et de nombreux capillaires facilitent le passage des gaz.",
            },
            {
              q: "Quelle substance de la fumée de tabac rend dépendant ?",
              options: ["Les goudrons", "La nicotine", "Le monoxyde de carbone", "La vapeur d'eau"],
              answer: 1,
              why: "La nicotine provoque une dépendance ; les goudrons sont cancérigènes et le monoxyde de carbone réduit le transport du dioxygène.",
            },
          ],
          trap: "Croire que l'on « respire » seulement en faisant entrer de l'air dans les poumons. Les mouvements respiratoires ne font que renouveler l'air ; l'essentiel est l'échange de gaz entre l'air des alvéoles et le sang.",
          method: "Pour décrire un échange gazeux, utilisez toujours la même phrase en trois éléments : quel gaz, d'où vers où, à quel endroit. Par exemple : « le dioxygène passe de l'air des alvéoles vers le sang des capillaires pulmonaires ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'circulation-sanguine',
          title: "La circulation sanguine",
          minutes: 30,
          objectives: [
            "Décrire l'organisation du cœur et le sens de circulation du sang.",
            "Distinguer la circulation pulmonaire et la circulation générale.",
            "Identifier le rôle des artères, des veines et des capillaires.",
            "Relier la composition du sang à son rôle de transport.",
          ],
          course: [
            {
              heading: "Le cœur, une double pompe",
              paragraphs: [
                "Le cœur est un muscle creux, à peu près de la taille d'un poing, situé dans la cage thoracique entre les deux poumons. En se contractant régulièrement, il propulse le sang dans les vaisseaux sanguins. Au repos, il bat environ 60 à 80 fois par minute chez un adulte.",
                "Le cœur comporte quatre cavités : deux oreillettes en haut, qui reçoivent le sang, et deux ventricules en bas, qui envoient le sang hors du cœur. Une cloison sépare complètement le cœur droit du cœur gauche : le sang des deux moitiés ne se mélange jamais.",
                "Des valvules, sortes de clapets, ne s'ouvrent que dans un sens : de l'oreillette vers le ventricule, puis du ventricule vers l'artère. Elles empêchent le sang de refluer. Le bruit des battements du cœur est celui de la fermeture des valvules.",
              ],
              box: { label: "Repère", text: "Dans chaque moitié du cœur, le sang circule toujours dans le même sens : veine → oreillette → ventricule → artère." },
            },
            {
              heading: "Une circulation double",
              paragraphs: [
                "Le ventricule droit envoie le sang pauvre en dioxygène dans l'artère pulmonaire, vers les poumons. Là, le sang se charge en dioxygène et se débarrasse du dioxyde de carbone. Il revient au cœur, dans l'oreillette gauche, par les veines pulmonaires. C'est la circulation pulmonaire, ou petite circulation.",
                "Le ventricule gauche, dont la paroi est la plus épaisse, envoie le sang riche en dioxygène dans l'aorte, la plus grosse artère du corps. Les artères le conduisent à tous les organes, qui y prélèvent dioxygène et nutriments et y rejettent leurs déchets. Le sang, devenu pauvre en dioxygène, revient au cœur, dans l'oreillette droite, par les veines caves. C'est la circulation générale.",
                "Le sang reste toujours à l'intérieur des vaisseaux : la circulation est fermée. C'est le médecin anglais William Harvey qui a démontré, en 1628, que le sang circule en circuit fermé, propulsé par le cœur.",
              ],
              box: { label: "À retenir", text: "Circulation pulmonaire : ventricule droit → artère pulmonaire → poumons → veines pulmonaires → oreillette gauche. Circulation générale : ventricule gauche → aorte → organes → veines caves → oreillette droite." },
            },
            {
              heading: "Artères, veines et capillaires",
              paragraphs: [
                "Les artères transportent le sang du cœur vers les organes. Leur paroi est épaisse et élastique, car le sang y circule sous forte pression : c'est leur battement que l'on sent au poignet, le pouls. Les veines ramènent le sang des organes vers le cœur ; leur paroi est plus fine, et celles des jambes possèdent des valvules qui empêchent le sang de redescendre.",
                "Entre les artères et les veines, dans chaque organe, le sang passe dans les capillaires, des vaisseaux extrêmement fins, à peine plus larges qu'un globule rouge. Leur paroi très mince permet les échanges entre le sang et les cellules. Attention : une artère se définit par le sens du sang (il part du cœur), pas par sa richesse en dioxygène. L'artère pulmonaire transporte du sang pauvre en dioxygène.",
              ],
            },
            {
              heading: "Le sang, un liquide qui transporte",
              paragraphs: [
                "Un adulte possède environ 5 litres de sang. Il est formé d'un liquide, le plasma, et de cellules. Le plasma transporte les nutriments, la plus grande partie du dioxyde de carbone, les déchets comme l'urée, et les hormones. Les globules rouges, très nombreux, contiennent l'hémoglobine, qui transporte le dioxygène et donne au sang sa couleur rouge. Les globules blancs participent à la défense de l'organisme et les plaquettes à la coagulation.",
                "Pour garder un cœur et des vaisseaux en bonne santé, il est recommandé de pratiquer une activité physique régulière, de ne pas fumer et de limiter le sel, le sucre et les graisses en excès, qui favorisent les maladies du cœur et des vaisseaux.",
              ],
            },
          ],
          keyPoints: [
            "Le cœur est un muscle à quatre cavités : deux oreillettes reçoivent le sang, deux ventricules l'envoient dans les artères.",
            "Une cloison sépare le cœur droit du cœur gauche ; les valvules imposent un sens unique au sang.",
            "Circulation pulmonaire : du ventricule droit aux poumons, retour à l'oreillette gauche.",
            "Circulation générale : du ventricule gauche (aorte) aux organes, retour à l'oreillette droite (veines caves).",
            "Artères : du cœur vers les organes ; veines : des organes vers le cœur ; capillaires : lieux d'échanges.",
            "Le plasma transporte nutriments, déchets et dioxyde de carbone ; les globules rouges transportent le dioxygène.",
          ],
          example: {
            statement: "Valeurs approchées. Au repos, le cœur d'un adulte bat 70 fois par minute, et chaque ventricule éjecte environ 70 mL de sang à chaque battement. 1) Quel volume de sang le ventricule gauche envoie-t-il dans l'aorte en une minute ? 2) Et en une journée, en litres ? 3) Le corps ne contient qu'environ 5 L de sang. Que peut-on en déduire ?",
            solution: [
              "1) Volume par minute : 70 × 70 = 4 900 mL, soit environ 4,9 L par minute.",
              "2) Une journée compte 24 × 60 = 1 440 minutes. Volume par jour : 4,9 × 1 440 = 7 056 L, soit environ 7 000 litres.",
              "3) En une minute, le ventricule gauche envoie presque tout le volume de sang du corps (4,9 L sur 5 L).",
              "Le cœur ne fabrique pas 7 000 litres de sang par jour : c'est toujours le même sang qui revient au cœur et repart. Le sang circule donc en circuit fermé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez le trajet d'un globule rouge qui part du ventricule gauche avec les mots suivants : poumons, aorte, veines caves, oreillette droite, ventricule droit, artère pulmonaire, veines pulmonaires, oreillette gauche, muscle de la jambe. Ventricule gauche → ... → ... → ... → ... → ... → ... → ... → ... → ventricule gauche.",
              hint: "Le globule rouge fait d'abord la circulation générale, puis la circulation pulmonaire.",
              solution: [
                "Circulation générale : ventricule gauche → aorte → muscle de la jambe → veines caves → oreillette droite.",
                "Puis passage dans le ventricule droit.",
                "Circulation pulmonaire : ventricule droit → artère pulmonaire → poumons → veines pulmonaires → oreillette gauche → ventricule gauche.",
                "Réponse : aorte, muscle de la jambe, veines caves, oreillette droite, ventricule droit, artère pulmonaire, poumons, veines pulmonaires, oreillette gauche.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On mesure chez un adolescent le nombre de battements du cœur par minute et le volume de sang éjecté par le ventricule gauche à chaque battement. Au repos : 70 battements par minute, 70 mL par battement. Pendant une course : 150 battements par minute, 110 mL par battement. 1) Calculez le volume de sang envoyé dans l'aorte en une minute, au repos et pendant la course (en litres). 2) Combien de fois plus de sang est envoyé pendant la course ? (Arrondissez au dixième.) 3) Expliquez l'intérêt de cette adaptation.",
              hint: "Volume par minute = nombre de battements par minute × volume éjecté à chaque battement.",
              solution: [
                "1) Au repos : 70 × 70 = 4 900 mL = 4,9 L par minute.",
                "Pendant la course : 150 × 110 = 16 500 mL = 16,5 L par minute.",
                "2) 16,5 ÷ 4,9 ≈ 3,37, soit environ 3,4 fois plus de sang pendant la course.",
                "3) Pendant la course, les muscles consomment beaucoup plus de dioxygène et de glucose, et produisent plus de dioxyde de carbone. En envoyant plus de sang chaque minute, le cœur augmente l'apport de dioxygène et de nutriments aux muscles et l'évacuation de leurs déchets.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Au XVIIe siècle, beaucoup de savants pensaient que le sang était fabriqué sans cesse par le foie à partir des aliments, puis consommé par les organes. William Harvey a montré que c'était impossible, par un raisonnement de calcul. Refaites un raisonnement de ce type avec des valeurs approchées actuelles : le ventricule gauche éjecte 70 mL de sang par battement, à 70 battements par minute, et le corps contient 5 L de sang. 1) Calculez le volume de sang envoyé dans l'aorte en une heure, en litres. 2) Comparez-le au volume de sang du corps. 3) Expliquez pourquoi ce résultat montre que le sang circule en circuit fermé. 4) Un élève dit : « Les artères transportent toujours du sang riche en dioxygène. » Corrigez-le.",
              hint: "Demandez-vous si un être humain pourrait manger assez pour fabriquer chaque heure un tel volume de sang.",
              solution: [
                "1) Par minute : 70 × 70 = 4 900 mL = 4,9 L. Par heure : 4,9 × 60 = 294 L.",
                "2) 294 ÷ 5 ≈ 59 : en une heure, le cœur envoie dans l'aorte environ 59 fois le volume total de sang du corps.",
                "3) Il est impossible de fabriquer près de 300 litres de sang par heure à partir des aliments, ni que les organes les consomment. C'est donc toujours le même sang qui revient au cœur et repart : il circule en circuit fermé.",
                "4) C'est faux : une artère est un vaisseau qui part du cœur, quel que soit son contenu. L'artère pulmonaire part du ventricule droit et transporte du sang pauvre en dioxygène vers les poumons.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Suivez le sang en partant du ventricule droit : remettez les étapes dans l'ordre.",
            items: [
              "Ventricule droit",
              "Artère pulmonaire",
              "Capillaires des poumons",
              "Veines pulmonaires",
              "Oreillette gauche",
              "Ventricule gauche",
              "Aorte",
            ],
          },
          quiz: [
            {
              q: "Quelle cavité du cœur envoie le sang dans l'aorte ?",
              options: ["L'oreillette droite, qui reçoit les veines caves", "Le ventricule gauche", "Le ventricule droit", "L'oreillette gauche"],
              answer: 1,
              why: "Le ventricule gauche, à la paroi la plus épaisse, propulse le sang riche en dioxygène dans l'aorte, vers tous les organes.",
            },
            {
              q: "Qu'est-ce qu'une artère ?",
              options: ["Un vaisseau qui transporte du sang du cœur vers les organes", "Un vaisseau qui contient toujours du sang riche en dioxygène", "Un vaisseau qui ramène le sang au cœur"],
              answer: 0,
              why: "Une artère se définit par le sens du sang : il part du cœur. L'artère pulmonaire transporte d'ailleurs du sang pauvre en dioxygène.",
            },
            {
              q: "Où ont lieu les échanges entre le sang et les cellules des organes ?",
              options: ["Dans l'aorte", "Dans les veines caves", "Dans les oreillettes", "Dans les capillaires"],
              answer: 3,
              why: "La paroi très mince des capillaires permet le passage des substances entre le sang et les cellules.",
            },
            {
              q: "Quel élément du sang transporte la plus grande partie du dioxygène ?",
              options: ["Le plasma", "Les plaquettes", "Les globules rouges", "Les globules blancs"],
              answer: 2,
              why: "Les globules rouges contiennent l'hémoglobine, qui fixe le dioxygène.",
            },
            {
              q: "Où arrive le sang qui revient des poumons ?",
              options: ["Dans l'oreillette droite", "Dans le ventricule droit", "Dans l'oreillette gauche", "Dans l'aorte"],
              answer: 2,
              why: "Les veines pulmonaires ramènent le sang riche en dioxygène dans l'oreillette gauche.",
            },
          ],
          trap: "Croire qu'une artère transporte toujours du sang riche en dioxygène et une veine du sang pauvre. Ce qui définit une artère, c'est que le sang part du cœur : l'artère pulmonaire transporte du sang pauvre en dioxygène, et les veines pulmonaires du sang riche.",
          method: "Dessinez le cœur « vu de face », sans oublier que la gauche du cœur est à droite sur le schéma. Coloriez en rouge le côté gauche (sang riche en dioxygène) et en bleu le côté droit (sang pauvre), puis tracez les deux boucles avec des flèches, en nommant chaque vaisseau.",
        },
      ],
    },
    /* ==================================================================== */
    /* DIGESTION, ALIMENTATION ET MICROBIOTE                                */
    /* ==================================================================== */
    {
      id: 'digestion-microbiote',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'digestion',
          title: "La digestion des aliments",
          minutes: 30,
          objectives: [
            "Décrire le trajet des aliments dans le tube digestif et identifier les glandes digestives.",
            "Distinguer la digestion mécanique et la digestion chimique.",
            "Expliquer le rôle des enzymes digestives dans la transformation des aliments en nutriments.",
            "Interpréter une expérience de digestion réalisée en tube, avec un témoin.",
          ],
          course: [
            {
              heading: "L'appareil digestif",
              paragraphs: [
                "Les aliments traversent un long tube, le tube digestif : la bouche, le pharynx, l'œsophage, l'estomac, l'intestin grêle (long de plusieurs mètres), le gros intestin, puis le rectum et l'anus.",
                "Des glandes digestives déversent leurs sucs dans le tube digestif : les glandes salivaires (dans la bouche), les glandes de la paroi de l'estomac, le pancréas et les glandes de la paroi de l'intestin grêle. Le foie produit la bile, stockée dans la vésicule biliaire puis versée dans l'intestin grêle. Les aliments ne passent jamais dans le foie ni dans le pancréas : seuls leurs sucs rejoignent le tube digestif.",
              ],
              box: { label: "Repère", text: "Tube digestif : bouche → pharynx → œsophage → estomac → intestin grêle → gros intestin → rectum → anus. Glandes : salivaires, gastriques, pancréas, foie (bile), glandes intestinales." },
            },
            {
              heading: "Une digestion mécanique et chimique",
              paragraphs: [
                "La digestion mécanique découpe les aliments en petits morceaux : les dents coupent et broient, la langue mélange, et les muscles de l'estomac brassent le contenu. Plus les morceaux sont petits, plus leur surface de contact avec les sucs digestifs est grande.",
                "La digestion chimique transforme les grosses molécules des aliments en petites molécules, les nutriments. Elle est réalisée par des enzymes digestives contenues dans les sucs digestifs (la salive, le suc gastrique, le suc pancréatique et le suc intestinal).",
                "Une enzyme est spécifique : chacune n'agit que sur un type de molécule, comme une clé qui n'ouvre qu'une serrure. L'amylase de la salive agit sur l'amidon, mais pas sur les protéines. Les enzymes digestives agissent le mieux à 37 °C, la température du corps ; une forte chaleur les détruit.",
              ],
              box: { label: "Définition", text: "Une enzyme digestive est une molécule produite par une glande digestive, qui accélère la transformation d'un aliment précis en nutriments. Elle est spécifique et agit le mieux à 37 °C." },
            },
            {
              heading: "Des aliments aux nutriments",
              paragraphs: [
                "L'amidon (dans le pain, les pâtes, le riz) commence à être digéré dans la bouche par l'amylase de la salive ; sa digestion se termine dans l'intestin grêle, où il est transformé en glucose. Les protéines (viande, poisson, œufs, lentilles) sont attaquées dans l'estomac par une enzyme qui agit en milieu acide, puis transformées en acides aminés dans l'intestin grêle.",
                "Les lipides (huile, beurre) sont surtout digérés dans l'intestin grêle. La bile, qui ne contient pas d'enzyme, les fragmente en fines gouttelettes ; une enzyme du suc pancréatique, la lipase, les transforme ensuite en acides gras et en glycérol.",
                "L'eau, les sels minéraux et les vitamines sont déjà assez petits : ils ne sont pas digérés. Les fibres (la cellulose des végétaux, par exemple) ne sont pas digérées par nos enzymes : elles arrivent intactes dans le gros intestin.",
              ],
              box: { label: "À retenir", text: "Amidon → glucose. Protéines → acides aminés. Lipides → acides gras et glycérol. Ces nutriments passent dans le sang au niveau de l'intestin grêle." },
            },
            {
              heading: "Une expérience pour le montrer, et la suite du trajet",
              paragraphs: [
                "On peut reproduire la digestion dans des tubes à essai. Le tube A contient de l'empois d'amidon et de la salive, le tube B de l'empois d'amidon et de l'eau (c'est le témoin), tous deux à 37 °C. Après 15 minutes, l'eau iodée (qui devient bleu-noir en présence d'amidon) reste jaune-orangé dans le tube A mais devient bleu-noir dans le tube B. La liqueur de Fehling chauffée donne un précipité rouge brique (signe de la présence d'un sucre) seulement dans le tube A. La salive a donc transformé l'amidon en sucre.",
                "Dans l'intestin grêle, les nutriments traversent la paroi et passent dans le sang : c'est l'absorption intestinale. La paroi forme de nombreux replis, les villosités, qui donnent une surface d'échange immense. Ce qui n'est pas absorbé passe dans le gros intestin, où l'eau est récupérée ; les restes forment les selles, rejetées par l'anus.",
              ],
            },
          ],
          keyPoints: [
            "Tube digestif : bouche, pharynx, œsophage, estomac, intestin grêle, gros intestin, rectum, anus.",
            "Glandes digestives : salivaires, gastriques, pancréas, foie (bile), glandes intestinales ; les aliments n'y passent pas.",
            "Digestion mécanique : dents et brassage ; digestion chimique : enzymes des sucs digestifs.",
            "Une enzyme est spécifique d'un aliment et agit le mieux à 37 °C.",
            "Amidon → glucose ; protéines → acides aminés ; lipides → acides gras et glycérol.",
            "Les nutriments passent dans le sang au niveau de l'intestin grêle ; les fibres ne sont pas digérées par nos enzymes.",
          ],
          example: {
            statement: "On prépare trois tubes à 37 °C contenant de l'empois d'amidon. Tube 1 : + salive. Tube 2 : + eau. Tube 3 : + salive préalablement bouillie. Après 15 minutes, on fait le test à l'eau iodée. Résultats : tube 1, pas de coloration bleu-noir ; tubes 2 et 3, coloration bleu-noir. Interprétez ces résultats.",
            solution: [
              "Je rappelle le test : l'eau iodée devient bleu-noir en présence d'amidon.",
              "Tube 2 (témoin, avec de l'eau) : l'amidon est toujours présent. L'eau seule ne digère pas l'amidon.",
              "Tube 1 : l'amidon a disparu. La salive contient donc une substance qui a transformé l'amidon : c'est l'amylase, une enzyme.",
              "Tube 3 : l'amidon est toujours présent. La salive bouillie n'agit plus : la chaleur a détruit l'enzyme.",
              "Conclusion : la salive contient une enzyme, l'amylase, qui digère l'amidon à 37 °C, et qui est détruite par une forte chaleur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase. a) L'amidon est transformé en .... b) Les protéines sont transformées en .... c) Les lipides sont transformés en ... et en glycérol. d) La bile est produite par le ... et ne contient pas d'.... e) Les nutriments passent dans le sang au niveau de l'....",
              hint: "Relisez l'encadré « À retenir » de la partie sur les nutriments.",
              solution: [
                "a) L'amidon est transformé en glucose.",
                "b) Les protéines sont transformées en acides aminés.",
                "c) Les lipides sont transformés en acides gras et en glycérol.",
                "d) La bile est produite par le foie et ne contient pas d'enzyme.",
                "e) Les nutriments passent dans le sang au niveau de l'intestin grêle.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On mélange de l'empois d'amidon et de la salive dans quatre tubes placés à des températures différentes, et on mesure le temps nécessaire pour que l'amidon disparaisse (test à l'eau iodée). À 0 °C : l'amidon est encore présent après 1 heure. À 20 °C : il disparaît en 25 minutes. À 37 °C : il disparaît en 8 minutes. À 90 °C : il est encore présent après 1 heure. 1) À quelle température l'amylase agit-elle le plus vite ? Reliez ce résultat au corps humain. 2) On réchauffe ensuite à 37 °C le tube qui était à 0 °C, et l'amidon disparaît. On refroidit à 37 °C le tube qui était à 90 °C, et l'amidon reste présent. Que concluez-vous sur l'effet du froid et de la chaleur sur l'enzyme ?",
              hint: "Comparez les deux tubes de la question 2 : dans l'un, l'enzyme recommence à agir, dans l'autre non.",
              solution: [
                "1) L'amylase agit le plus vite à 37 °C (8 minutes). C'est la température du corps humain : l'enzyme est efficace dans les conditions de la bouche et de l'intestin.",
                "2) Le tube qui était à 0 °C se remet à digérer l'amidon une fois réchauffé : le froid ralentit ou bloque l'enzyme, mais ne la détruit pas.",
                "Le tube qui était à 90 °C ne digère plus l'amidon, même à 37 °C : la forte chaleur a détruit l'enzyme, de façon définitive.",
                "Conclusion : l'enzyme agit le mieux à 37 °C ; le froid la bloque de façon réversible ; une forte chaleur la détruit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On place un petit cube de blanc d'œuf cuit (riche en protéines) dans quatre tubes à 37 °C. Tube 1 : + suc gastrique. Tube 2 : + eau. Tube 3 : + suc gastrique rendu non acide. Tube 4 : + suc gastrique préalablement bouilli. Après 24 heures, le cube a disparu dans le tube 1 ; il est intact dans les tubes 2, 3 et 4. 1) Quel est le rôle du tube 2 ? 2) Que montre le tube 1 ? 3) Que montrent les tubes 3 et 4 sur les conditions d'action de l'enzyme du suc gastrique ? 4) Dans l'organisme, la digestion des protéines n'est pas terminée à la sortie de l'estomac. Où se termine-t-elle, et quels nutriments obtient-on ?",
              hint: "Comparez chaque tube au tube 1 : un seul élément change à chaque fois.",
              solution: [
                "1) Le tube 2 est le témoin : il montre que l'eau seule ne fait pas disparaître le blanc d'œuf.",
                "2) Le suc gastrique fait disparaître le blanc d'œuf : il contient une enzyme qui digère les protéines.",
                "3) Tube 3 : sans acidité, le suc gastrique n'agit plus ; l'enzyme de l'estomac a besoin d'un milieu acide. Tube 4 : bouilli, le suc gastrique n'agit plus ; la chaleur a détruit l'enzyme.",
                "4) La digestion des protéines se termine dans l'intestin grêle, grâce aux enzymes du suc pancréatique et du suc intestinal. On obtient des acides aminés, qui passent dans le sang.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Suivez une bouchée de pain : remettez dans l'ordre les étapes de son trajet.",
            items: [
              "Bouche : mastication et début de digestion de l'amidon par la salive.",
              "Pharynx : la déglutition envoie la bouchée vers l'œsophage.",
              "Œsophage : la bouchée descend jusqu'à l'estomac.",
              "Estomac : brassage et action du suc gastrique.",
              "Intestin grêle : fin de la digestion et passage des nutriments dans le sang.",
              "Gros intestin : récupération de l'eau et formation des selles.",
              "Rectum et anus : rejet des selles.",
            ],
          },
          quiz: [
            {
              q: "Quel organe produit la bile ?",
              options: ["Le pancréas", "L'estomac", "Le foie", "La vésicule biliaire"],
              answer: 2,
              why: "La bile est produite par le foie, puis stockée dans la vésicule biliaire avant d'être versée dans l'intestin grêle.",
            },
            {
              q: "En quoi l'amidon est-il transformé par la digestion ?",
              options: ["En glucose", "En acides aminés", "En acides gras", "En fibres"],
              answer: 0,
              why: "L'amidon est une grosse molécule formée de nombreux glucoses ; la digestion libère le glucose.",
            },
            {
              q: "Que signifie « une enzyme est spécifique » ?",
              options: ["Elle n'agit qu'à 0 °C", "Elle agit sur tous les aliments", "Elle n'agit que sur un type de molécule", "Elle est produite par toutes les cellules"],
              answer: 2,
              why: "Chaque enzyme n'agit que sur un type de molécule : l'amylase agit sur l'amidon, pas sur les protéines.",
            },
            {
              q: "Où les nutriments passent-ils dans le sang ?",
              options: ["Dans l'estomac", "Dans l'intestin grêle", "Dans l'œsophage", "Dans le foie, après la digestion"],
              answer: 1,
              why: "La paroi de l'intestin grêle, très repliée, laisse passer les nutriments dans le sang.",
            },
            {
              q: "Quel test révèle la présence d'amidon ?",
              options: ["La liqueur de Fehling chauffée", "L'eau de chaux qui se trouble et blanchit", "Une goutte de bile", "L'eau iodée qui devient bleu-noir"],
              answer: 3,
              why: "L'eau iodée devient bleu-noir en présence d'amidon ; la liqueur de Fehling, elle, révèle certains sucres.",
            },
          ],
          trap: "Croire que les aliments passent dans le foie ou le pancréas. Ce sont des glandes annexes : seuls leurs sucs (bile, suc pancréatique) rejoignent l'intestin grêle ; les aliments restent toujours dans le tube digestif.",
          method: "Pour interpréter une expérience de digestion en tube, comparez toujours chaque tube au témoin, puis au tube où la digestion a eu lieu : notez l'unique différence, le résultat, et concluez en une phrase sur l'enzyme ou sur sa condition d'action (température, acidité).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'microbiote',
          title: "Le microbiote intestinal",
          minutes: 25,
          objectives: [
            "Définir le microbiote intestinal.",
            "Identifier les rôles du microbiote dans la digestion et la protection de l'organisme.",
            "Expliquer comment l'alimentation et les antibiotiques modifient le microbiote.",
            "Relier l'équilibre du microbiote à des comportements favorables à la santé.",
          ],
          course: [
            {
              heading: "Des milliards de micro-organismes en nous",
              paragraphs: [
                "Votre intestin abrite une foule de micro-organismes, surtout des bactéries, mais aussi des levures et des virus. Leur ensemble forme le microbiote intestinal. La plupart vivent dans le gros intestin. On estime qu'il y a dans le corps humain des dizaines de milliers de milliards de bactéries, à peu près autant que de cellules humaines.",
                "Le microbiote comprend des centaines d'espèces différentes, et sa composition est propre à chaque personne. La grande majorité de ces micro-organismes sont inoffensifs ou utiles : ils vivent en bonne entente avec nous.",
              ],
              box: { label: "Définition", text: "Le microbiote intestinal est l'ensemble des micro-organismes (bactéries surtout, levures, virus) qui vivent dans l'intestin, principalement dans le gros intestin." },
            },
            {
              heading: "Un microbiote qui s'installe dès la naissance",
              paragraphs: [
                "Avant la naissance, l'intestin du fœtus ne contient pratiquement pas de micro-organismes. Dès la naissance, le bébé est colonisé par des bactéries venues de sa mère et de son environnement, puis par celles apportées par le lait et, plus tard, par les aliments.",
                "Le microbiote se diversifie pendant les premières années de la vie, puis il reste assez stable chez l'adulte. Il peut cependant être modifié par l'alimentation, par certains médicaments comme les antibiotiques, ou par une maladie.",
              ],
            },
            {
              heading: "Des rôles essentiels pour notre santé",
              paragraphs: [
                "Les bactéries du microbiote digèrent une partie des fibres que nos propres enzymes ne savent pas digérer. Cette fermentation produit des gaz, mais aussi des substances utiles qui nourrissent les cellules de la paroi de l'intestin. Certaines bactéries produisent aussi des vitamines, comme la vitamine K.",
                "Le microbiote protège l'organisme : en occupant la place et en consommant la nourriture disponible, les bactéries utiles empêchent les bactéries dangereuses de s'installer. Il participe aussi à l'éducation des défenses de l'organisme pendant l'enfance.",
                "En échange, les micro-organismes trouvent dans l'intestin un abri chaud et de la nourriture. Chacun des deux partenaires profite de cette association : on parle de symbiose.",
              ],
              box: { label: "À retenir", text: "Le microbiote digère une partie des fibres, produit certaines vitamines, protège contre les bactéries dangereuses et aide les défenses de l'organisme. C'est une association à bénéfices réciproques, une symbiose." },
            },
            {
              heading: "Un équilibre à préserver",
              paragraphs: [
                "Une alimentation riche en fibres (fruits, légumes, légumineuses comme les lentilles, céréales complètes) nourrit les bactéries utiles et favorise un microbiote varié. Une alimentation pauvre en fibres et riche en produits très transformés appauvrit au contraire cette diversité.",
                "Les antibiotiques tuent les bactéries responsables d'une infection, mais aussi une partie des bactéries utiles du microbiote. Cela peut provoquer des diarrhées, et le microbiote met ensuite des semaines à se reconstituer, parfois incomplètement. C'est pourquoi les antibiotiques ne doivent être pris que sur prescription médicale, en respectant la dose et la durée du traitement. Ils sont inutiles contre les virus, par exemple contre le rhume.",
              ],
            },
          ],
          keyPoints: [
            "Le microbiote intestinal est l'ensemble des micro-organismes qui vivent dans notre intestin, surtout dans le gros intestin.",
            "Il compte des dizaines de milliers de milliards de bactéries, de centaines d'espèces ; sa composition est propre à chacun.",
            "Il s'installe dès la naissance et se diversifie pendant les premières années.",
            "Il digère une partie des fibres, produit certaines vitamines et protège contre les bactéries dangereuses.",
            "Nous et notre microbiote vivons en symbiose : chacun profite de l'association.",
            "Les fibres favorisent un microbiote varié ; les antibiotiques le perturbent et ne se prennent que sur prescription.",
          ],
          example: {
            statement: "Données fictives. On place des fibres végétales dans deux flacons fermés, sans dioxygène, à 37 °C. Flacon A : fibres + un peu de contenu du gros intestin (riche en bactéries). Flacon B : fibres + le même contenu préalablement stérilisé (toutes les bactéries ont été tuées). Après 24 heures, des gaz se sont formés et la quantité de fibres a diminué dans le flacon A ; rien n'a changé dans le flacon B. Que concluez-vous ?",
            solution: [
              "J'identifie le témoin : le flacon B ne diffère du flacon A que par l'absence de bactéries vivantes.",
              "Dans le flacon A, les fibres diminuent et des gaz apparaissent : les fibres ont été transformées.",
              "Dans le flacon B, sans bactéries vivantes, rien ne change.",
              "La seule différence étant la présence de bactéries vivantes, ce sont elles qui ont transformé les fibres.",
              "Conclusion : les bactéries du microbiote digèrent une partie des fibres, que nos enzymes ne digèrent pas, en produisant des gaz.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces affirmations, recopiez celles qui décrivent un rôle du microbiote intestinal : a) il digère une partie des fibres ; b) il produit la bile ; c) il produit certaines vitamines ; d) il empêche des bactéries dangereuses de s'installer ; e) il transporte le dioxygène dans le sang ; f) il participe à l'éducation des défenses de l'organisme.",
              hint: "Trois affirmations décrivent le rôle d'autres organes ou d'autres cellules.",
              solution: [
                "Rôles du microbiote : a (digestion d'une partie des fibres), c (production de certaines vitamines), d (protection contre les bactéries dangereuses) et f (éducation des défenses de l'organisme).",
                "b) La bile est produite par le foie.",
                "e) Le dioxygène est transporté par les globules rouges.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Chez un patient, on compte le nombre d'espèces de bactéries différentes présentes dans son microbiote. Avant un traitement antibiotique de 7 jours : 400 espèces. À la fin du traitement : 150 espèces. Un mois après : 300 espèces. Trois mois après : 370 espèces. 1) Calculez le pourcentage de diminution du nombre d'espèces pendant le traitement. 2) Décrivez l'évolution après le traitement. Le microbiote est-il redevenu identique au bout de trois mois ? 3) Expliquez pourquoi il ne faut pas prendre d'antibiotiques sans prescription médicale.",
              hint: "Pourcentage de diminution = (valeur de départ - valeur d'arrivée) ÷ valeur de départ × 100.",
              solution: [
                "1) Diminution : 400 - 150 = 250 espèces. Pourcentage : 250 ÷ 400 × 100 = 62,5 %.",
                "2) Après le traitement, le nombre d'espèces remonte : 300 après un mois, 370 après trois mois. Mais il n'a pas retrouvé sa valeur de départ (370 au lieu de 400) : le microbiote n'est pas redevenu identique.",
                "3) Les antibiotiques tuent aussi les bactéries utiles du microbiote, qui met longtemps à se reconstituer. De plus, ils sont inutiles contre les virus. Il faut donc les réserver aux infections bactériennes, sur prescription d'un médecin, en respectant la dose et la durée.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lucas affirme : « Les bactéries sont des microbes dangereux. Il faudrait toutes les éliminer de notre corps, avec des produits antibactériens et des antibiotiques, pour être en bonne santé. » 1) Rédigez une réponse argumentée pour montrer que son raisonnement est faux, en utilisant au moins trois rôles du microbiote. 2) Proposez deux habitudes alimentaires qui favorisent un microbiote varié, en expliquant pourquoi.",
              hint: "Rappelez ce que le microbiote apporte à l'organisme, et ce que l'organisme apporte au microbiote.",
              solution: [
                "1) Toutes les bactéries ne sont pas dangereuses : la grande majorité des bactéries de notre microbiote sont inoffensives ou utiles. Elles digèrent une partie des fibres que nos enzymes ne savent pas digérer, produisent certaines vitamines comme la vitamine K, et empêchent les bactéries dangereuses de s'installer en occupant la place. Elles aident aussi les défenses de l'organisme à se mettre en place.",
                "Les éliminer toutes nous priverait de ces bénéfices et laisserait la place libre à des bactéries dangereuses. Les antibiotiques pris sans raison appauvrissent justement le microbiote. Nous vivons en symbiose avec notre microbiote : chacun profite de l'association.",
                "2) Manger chaque jour des fruits et des légumes, et des légumineuses (lentilles, pois chiches) ou des céréales complètes : leurs fibres nourrissent les bactéries utiles et favorisent leur diversité.",
                "Limiter les produits très transformés, pauvres en fibres, qui appauvrissent la diversité du microbiote.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur le microbiote.",
            statements: [
              { text: "Toutes les bactéries de notre intestin sont dangereuses.", true: false, why: "La grande majorité sont inoffensives ou utiles à notre santé." },
              { text: "Le microbiote vit surtout dans le gros intestin.", true: true, why: "C'est là que se trouve la plus grande partie des micro-organismes intestinaux." },
              { text: "Le microbiote digère une partie des fibres.", true: true, why: "Nos enzymes ne savent pas les digérer ; les bactéries les font fermenter." },
              { text: "Nous naissons avec un microbiote déjà complet.", true: false, why: "Le microbiote s'installe à la naissance et se diversifie pendant les premières années." },
              { text: "Les antibiotiques peuvent perturber le microbiote.", true: true, why: "Ils tuent aussi une partie des bactéries utiles." },
              { text: "Les antibiotiques soignent le rhume.", true: false, why: "Le rhume est dû à des virus, sur lesquels les antibiotiques n'agissent pas." },
              { text: "Tout le monde a exactement le même microbiote.", true: false, why: "Sa composition est propre à chaque personne." },
            ],
          },
          quiz: [
            {
              q: "Où vit la plus grande partie du microbiote intestinal ?",
              options: ["Dans l'estomac, au contact du suc gastrique", "Dans le gros intestin", "Dans l'œsophage", "Dans le foie"],
              answer: 1,
              why: "La plupart des micro-organismes intestinaux vivent dans le gros intestin.",
            },
            {
              q: "Que digèrent les bactéries du microbiote, que nos enzymes ne digèrent pas ?",
              options: ["Une partie des fibres", "Le glucose", "Les acides aminés des protéines", "Le dioxygène"],
              answer: 0,
              why: "Nos enzymes ne savent pas digérer les fibres ; les bactéries du gros intestin en font fermenter une partie.",
            },
            {
              q: "Comment le microbiote nous protège-t-il des bactéries dangereuses ?",
              options: ["En produisant de la bile", "En fabriquant des globules rouges", "En occupant la place et la nourriture disponibles", "En augmentant fortement la température de tout l'intestin"],
              answer: 2,
              why: "Les bactéries utiles occupent l'espace et consomment la nourriture : les bactéries dangereuses s'installent plus difficilement.",
            },
            {
              q: "Quel type d'aliment favorise un microbiote varié ?",
              options: ["Les boissons sucrées", "Les produits très transformés", "Les aliments riches en sel", "Les aliments riches en fibres"],
              answer: 3,
              why: "Les fibres des fruits, des légumes, des légumineuses et des céréales complètes nourrissent les bactéries utiles.",
            },
            {
              q: "Comment appelle-t-on une association où chacun des deux partenaires profite de l'autre ?",
              options: ["Une infection", "Une symbiose", "Une contamination"],
              answer: 1,
              why: "Le microbiote trouve un abri et de la nourriture, et nous apporte en échange digestion des fibres, vitamines et protection.",
            },
          ],
          trap: "Croire que « bactérie » veut toujours dire « maladie ». La grande majorité des bactéries de notre intestin sont utiles ; seules certaines bactéries, dites pathogènes, provoquent des maladies.",
          method: "Pour retenir les rôles du microbiote, associez chacun à un mot-clé : « fibres » (digestion), « vitamines » (production), « place » (protection), « défenses » (éducation). Pour chaque mot-clé, entraînez-vous à rédiger une phrase complète d'explication.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'alimentation-sante',
          title: "Alimentation équilibrée et santé",
          minutes: 30,
          objectives: [
            "Relier la nature des aliments à leurs apports en nutriments et en énergie.",
            "Expliquer ce qu'est une alimentation équilibrée en fonction des besoins de l'organisme.",
            "Calculer l'apport énergétique d'un aliment ou d'un repas à partir de sa composition.",
            "Relier des habitudes alimentaires et l'activité physique à la santé.",
          ],
          course: [
            {
              heading: "Ce que nous apportent les aliments",
              paragraphs: [
                "Les aliments contiennent des glucides (les sucres, dont l'amidon des féculents comme le pain, les pâtes ou le riz), des lipides (les graisses de l'huile, du beurre, du fromage), des protéines (viande, poisson, œufs, laitages, légumineuses), de l'eau, des sels minéraux (calcium, fer...), des vitamines et des fibres.",
                "Ces constituants ont des rôles différents. Les glucides et les lipides fournissent surtout de l'énergie. Les protéines servent surtout à construire et à réparer les cellules, notamment les muscles. Le calcium solidifie les os et les dents ; le fer est indispensable aux globules rouges ; les vitamines permettent le bon fonctionnement de l'organisme ; les fibres facilitent le transit et nourrissent le microbiote.",
                "L'énergie apportée par les aliments se mesure en kilojoules (kJ) ou en kilocalories (kcal). Les lipides sont plus de deux fois plus énergétiques que les glucides et les protéines.",
              ],
              box: { label: "Repère", text: "1 g de glucides apporte 17 kJ (4 kcal) ; 1 g de protéines apporte 17 kJ (4 kcal) ; 1 g de lipides apporte 38 kJ (9 kcal)." },
            },
            {
              heading: "Des besoins qui varient",
              paragraphs: [
                "Les besoins en énergie et en nutriments ne sont pas les mêmes pour tout le monde : ils dépendent de l'âge, du sexe, de la taille et de l'activité physique. Un adolescent en pleine croissance a des besoins importants, en particulier en protéines, en calcium et en fer. Un sportif dépense plus d'énergie qu'une personne peu active.",
                "Pour garder un poids stable, les apports en énergie doivent compenser les dépenses. Si l'on apporte régulièrement plus d'énergie que l'on n'en dépense, l'excès est stocké sous forme de graisse : on prend du poids. Si l'on en apporte moins, on puise dans ses réserves et l'on maigrit.",
              ],
              box: { label: "Règle", text: "Une alimentation équilibrée apporte tous les nutriments nécessaires, en quantités adaptées, avec des apports d'énergie qui compensent les dépenses de l'organisme." },
            },
            {
              heading: "Manger équilibré au quotidien",
              paragraphs: [
                "Le Programme national nutrition santé (PNNS) donne des repères simples : au moins 5 portions de fruits et légumes par jour ; des féculents chaque jour, de préférence complets ; des légumineuses (lentilles, haricots secs, pois chiches) au moins deux fois par semaine ; des produits laitiers chaque jour ; limiter les produits sucrés, salés et gras, ainsi que les boissons sucrées. L'eau est la seule boisson indispensable.",
                "Il est aussi recommandé de faire des repas réguliers, sans sauter le petit-déjeuner, et de pratiquer au moins une heure d'activité physique par jour à votre âge. Sur de nombreux emballages, le Nutri-Score, une lettre de A (vert) à E (orange foncé), aide à comparer la qualité nutritionnelle de produits d'une même catégorie.",
              ],
            },
            {
              heading: "Alimentation et santé",
              paragraphs: [
                "Une alimentation déséquilibrée a des conséquences sur la santé. Trop de sucre favorise les caries, le surpoids et l'obésité, et à long terme le diabète de type 2. Trop de sel favorise l'hypertension artérielle et les maladies du cœur et des vaisseaux. Un excès de graisses augmente aussi ces risques.",
                "À l'inverse, des carences peuvent apparaître. Un manque de fer provoque une anémie, avec une grande fatigue. Un manque de calcium et de vitamine D fragilise les os. Autrefois, les marins privés de fruits et de légumes frais pendant les longs voyages souffraient du scorbut, une maladie due au manque de vitamine C.",
              ],
              box: { label: "À retenir", text: "Manger varié, en quantités adaptées, avec des fruits, des légumes et des fibres, en limitant le sucre, le sel et les graisses, et bouger au moins une heure par jour : c'est la base d'une bonne santé." },
            },
          ],
          keyPoints: [
            "Glucides et lipides fournissent surtout l'énergie ; les protéines construisent ; minéraux et vitamines assurent le bon fonctionnement.",
            "Énergie : 17 kJ par gramme de glucides ou de protéines, 38 kJ par gramme de lipides.",
            "Les besoins dépendent de l'âge, du sexe, de la taille et de l'activité physique.",
            "Apports supérieurs aux dépenses : prise de poids ; apports inférieurs : amaigrissement.",
            "Repères : au moins 5 fruits et légumes par jour, féculents, légumineuses, laitages, eau ; limiter sucre, sel et graisses.",
            "Au moins une heure d'activité physique par jour à l'adolescence.",
            "Excès (sucre, sel, graisses) et carences (fer, calcium, vitamines) nuisent à la santé.",
          ],
          example: {
            statement: "Données fictives. L'étiquette d'un paquet de biscuits indique, pour 100 g : glucides 65 g, lipides 20 g, protéines 6 g. 1) Calculez l'énergie apportée par 100 g de biscuits, en kJ. 2) Calculez l'énergie apportée par une portion de 30 g. 3) Quel constituant apporte le plus d'énergie après les glucides ?",
            solution: [
              "1) J'utilise les valeurs : 17 kJ par gramme de glucides et de protéines, 38 kJ par gramme de lipides.",
              "Glucides : 65 × 17 = 1 105 kJ. Lipides : 20 × 38 = 760 kJ. Protéines : 6 × 17 = 102 kJ.",
              "Total pour 100 g : 1 105 + 760 + 102 = 1 967 kJ.",
              "2) Une portion de 30 g représente 30 ÷ 100 = 0,3 fois 100 g : 1 967 × 0,3 = 590,1 kJ, soit environ 590 kJ.",
              "3) Les lipides apportent 760 kJ : ils ne pèsent que 20 g, mais chaque gramme apporte plus de deux fois plus d'énergie qu'un gramme de glucides.",
              "Réponse : 1 967 kJ pour 100 g ; environ 590 kJ pour une portion de 30 g.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque aliment, indiquez un constituant important qu'il apporte et son rôle principal : a) huile d'olive ; b) pâtes ; c) poisson ; d) yaourt ; e) orange.",
              hint: "Rappelez-vous les trois grands rôles : fournir de l'énergie, construire, assurer le bon fonctionnement.",
              solution: [
                "a) Huile d'olive : des lipides, qui fournissent de l'énergie.",
                "b) Pâtes : des glucides (amidon), qui fournissent de l'énergie.",
                "c) Poisson : des protéines, qui servent à construire et à réparer les cellules.",
                "d) Yaourt : du calcium (et des protéines), qui solidifie les os et les dents.",
                "e) Orange : de la vitamine C (et des fibres), qui assure le bon fonctionnement de l'organisme.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Les dépenses d'énergie de Hugo, 14 ans, sont de 10 500 kJ par jour. Un mercredi, il consomme : petit-déjeuner 2 000 kJ ; déjeuner 3 500 kJ ; goûter (un soda et un paquet de chips) 2 500 kJ ; dîner 3 800 kJ. 1) Calculez ses apports en énergie pour la journée. 2) Comparez-les à ses dépenses. 3) Si ce déséquilibre se répète chaque jour, quelle sera sa conséquence au bout d'une semaine ? Calculez l'excès sur 7 jours. 4) Proposez deux changements pour rééquilibrer sa journée.",
              hint: "Apports - dépenses = excès (si le résultat est positif).",
              solution: [
                "1) Apports : 2 000 + 3 500 + 2 500 + 3 800 = 11 800 kJ.",
                "2) 11 800 - 10 500 = 1 300 kJ : ses apports dépassent ses dépenses de 1 300 kJ.",
                "3) Sur 7 jours : 1 300 × 7 = 9 100 kJ d'excès. Cet excès est stocké sous forme de graisse : à la longue, Hugo prendra du poids.",
                "4) Par exemple : remplacer le soda et les chips par un fruit, du pain et un produit laitier, moins énergétiques et plus riches en fibres, calcium et vitamines ; et augmenter ses dépenses en pratiquant une activité physique (au moins une heure par jour).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Goûter A : une canette de soda (35 g de glucides) et un paquet de chips de 45 g (glucides 23 g, lipides 15 g, protéines 3 g). Goûter B : 50 g de pain (glucides 28 g, protéines 4 g, lipides 1 g), une pomme (glucides 17 g) et un yaourt nature (glucides 6 g, protéines 5 g, lipides 2 g). 1) Calculez l'énergie apportée par chaque goûter (17 kJ par gramme de glucides ou de protéines, 38 kJ par gramme de lipides). 2) Un morceau de sucre pèse environ 5 g. À combien de morceaux de sucre correspondent les glucides de la canette ? 3) Lequel de ces goûters conseilleriez-vous ? Argumentez avec au moins trois arguments.",
              hint: "Calculez l'énergie de chaque aliment séparément, puis additionnez.",
              solution: [
                "1) Goûter A. Soda : 35 × 17 = 595 kJ. Chips : 23 × 17 + 15 × 38 + 3 × 17 = 391 + 570 + 51 = 1 012 kJ. Total A : 595 + 1 012 = 1 607 kJ.",
                "Goûter B. Pain : 28 × 17 + 4 × 17 + 1 × 38 = 476 + 68 + 38 = 582 kJ. Pomme : 17 × 17 = 289 kJ. Yaourt : 6 × 17 + 5 × 17 + 2 × 38 = 102 + 85 + 76 = 263 kJ. Total B : 582 + 289 + 263 = 1 134 kJ.",
                "2) 35 ÷ 5 = 7 : la canette contient l'équivalent de 7 morceaux de sucre.",
                "3) Le goûter B est plus adapté. Il apporte moins d'énergie (1 134 kJ contre 1 607 kJ), ce qui limite le risque d'excès. Ses glucides viennent surtout de l'amidon du pain et du fruit, et non de sucre ajouté dans une boisson. Il apporte des fibres (pomme, pain), du calcium et des protéines (yaourt), utiles à la croissance. Le goûter A apporte beaucoup de sucre, de graisses et de sel, et presque aucune fibre ni vitamine.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque constituant des aliments à son rôle ou à sa particularité.",
            pairs: [
              { left: "Glucides", right: "Source d'énergie : pain, pâtes, riz, fruits." },
              { left: "Lipides", right: "Les plus énergétiques : 38 kJ par gramme." },
              { left: "Protéines", right: "Construisent et réparent les cellules : viande, œufs, lentilles." },
              { left: "Calcium", right: "Solidifie les os et les dents : lait, fromage, yaourt." },
              { left: "Fer", right: "Indispensable aux globules rouges ; sa carence fatigue." },
              { left: "Fibres", right: "Non digérées par nos enzymes, elles nourrissent le microbiote." },
            ],
          },
          quiz: [
            {
              q: "Combien d'énergie apporte 1 g de lipides ?",
              options: ["4 kJ", "17 kJ", "38 kJ", "100 kJ"],
              answer: 2,
              why: "Les lipides apportent 38 kJ (9 kcal) par gramme, plus de deux fois plus que les glucides ou les protéines (17 kJ).",
            },
            {
              q: "Que se passe-t-il si les apports en énergie dépassent régulièrement les dépenses ?",
              options: ["L'excès est stocké en graisse", "L'excès est éliminé dans l'urine", "Les muscles grossissent forcément", "Rien du tout"],
              answer: 0,
              why: "L'énergie en excès est mise en réserve sous forme de graisse : on prend du poids.",
            },
            {
              q: "Quel nutriment sert surtout à construire et à réparer les cellules ?",
              options: ["Les glucides rapides", "Les lipides", "L'eau", "Les protéines"],
              answer: 3,
              why: "Les protéines, digérées en acides aminés, servent à fabriquer les cellules, notamment celles des muscles.",
            },
            {
              q: "Quelle est la recommandation pour les fruits et légumes ?",
              options: ["Une portion par semaine", "Au moins 5 portions par jour", "Uniquement en été", "Seulement sous forme de jus de fruits"],
              answer: 1,
              why: "Le PNNS recommande au moins 5 portions de fruits et légumes par jour, pour leurs fibres, vitamines et minéraux.",
            },
            {
              q: "Quelle maladie est due à un manque de vitamine C ?",
              options: ["Le diabète de type 2", "L'anémie", "Le scorbut", "L'hypertension"],
              answer: 2,
              why: "Le scorbut, autrefois fréquent chez les marins privés de fruits et légumes frais, est dû au manque de vitamine C.",
            },
          ],
          trap: "Croire qu'un aliment est « bon » ou « mauvais » à lui seul. C'est l'équilibre de l'ensemble des repas, les quantités et l'activité physique qui comptent : un goûter sucré de temps en temps n'est pas un problème, mais tous les jours il déséquilibre l'alimentation.",
          method: "Pour calculer l'énergie d'un aliment, faites un petit tableau : une ligne par constituant (glucides, lipides, protéines), la masse en grammes, la valeur par gramme (17 ou 38 kJ), puis le produit. Additionnez la dernière colonne et vérifiez que les lipides sont bien multipliés par 38.",
        },
      ],
    },
  ],
}
