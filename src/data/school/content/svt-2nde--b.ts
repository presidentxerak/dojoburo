import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-2nde',
  chapters: [
    /* ==================================================================== */
    /* LES MÉCANISMES DE L'ÉVOLUTION                                          */
    /* ==================================================================== */
    {
      id: 'mecanismes-evolution',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'selection-naturelle',
          title: "La sélection naturelle",
          minutes: 30,
          objectives: [
            "Expliquer que les mutations, aléatoires, sont la source de la diversité des allèles sur laquelle agissent les mécanismes de l'évolution.",
            "Expliquer la sélection naturelle comme le résultat de la pression du milieu et des interactions entre êtres vivants sur la survie et la reproduction des individus.",
            "Calculer et interpréter l'évolution de la fréquence d'un allèle ou d'un phénotype dans une population au fil des générations.",
            "Raisonner sur un exemple de sélection naturelle : phalène du bouleau, résistance aux antibiotiques ou aux insecticides, pinsons des Galápagos.",
          ],
          course: [
            {
              heading: "La variation héréditaire, matière première de l'évolution",
              paragraphs: [
                "Une population est l'ensemble des individus d'une même espèce qui vivent dans un même espace et peuvent se reproduire entre eux. Ces individus possèdent les mêmes gènes, mais pas toujours les mêmes allèles : c'est la diversité génétique de la population. On la décrit par la fréquence de chaque allèle, c'est-à-dire la proportion qu'il représente parmi tous les exemplaires de ce gène présents dans la population.",
                "Les nouveaux allèles naissent des mutations, des modifications de la séquence de l'ADN. Les mutations sont rares et aléatoires : elles se produisent au hasard, sans être provoquées ni orientées par les besoins de l'organisme ou par le milieu. Une mutation peut être neutre (sans effet sur la survie ni sur la reproduction), défavorable ou, plus rarement, favorable. Chez les animaux, seules les mutations présentes dans les cellules à l'origine des gamètes sont transmises aux descendants.",
                "La reproduction sexuée combine ensuite les allèles de deux parents : chaque descendant possède une combinaison originale. Mutations et reproduction sexuée entretiennent ainsi la diversité génétique, sur laquelle agissent deux mécanismes qui modifient la fréquence des allèles au fil des générations : la sélection naturelle, étudiée ici, et la dérive génétique.",
              ],
              box: { label: "Définition", text: "La fréquence d'un allèle dans une population est la proportion de cet allèle parmi l'ensemble des allèles de ce gène portés par les individus de la population. Elle s'exprime par un nombre entre 0 et 1, ou en pourcentage." },
            },
            {
              heading: "Le principe de la sélection naturelle",
              paragraphs: [
                "Le mécanisme de la sélection naturelle a été proposé par Charles Darwin et Alfred Russel Wallace, dont les travaux furent présentés ensemble à Londres en 1858. Darwin le développe l'année suivante, en 1859, dans son livre L'Origine des espèces. Le raisonnement repose sur des constats simples : les individus d'une population diffèrent entre eux ; une partie de ces différences est héréditaire ; et chaque génération produit plus de descendants que le milieu ne peut en faire survivre.",
                "Dans un milieu donné, les individus porteurs de certains caractères héréditaires survivent mieux ou se reproduisent davantage que les autres : ils laissent en moyenne plus de descendants, auxquels ils transmettent leurs allèles. Génération après génération, la fréquence des allèles qui confèrent cet avantage augmente dans la population, et celle des autres diminue. Ce tri ne crée pas les allèles : il agit sur une diversité qui existe déjà.",
                "Ce qui est avantageux dépend du milieu : un même caractère peut être favorable dans un environnement et défavorable dans un autre. Les facteurs qui exercent ce tri sont appelés pressions de sélection : le climat, la disponibilité de la nourriture, les prédateurs, les parasites et les maladies, mais aussi la compétition entre individus de la même espèce ou d'espèces différentes, et le choix des partenaires sexuels.",
              ],
              box: { label: "Définition", text: "La sélection naturelle est le tri, exercé par le milieu et par les interactions entre êtres vivants, entre les individus d'une population selon leurs caractères héréditaires : les porteurs des allèles les plus favorables dans ce milieu laissent plus de descendants, et la fréquence de ces allèles augmente au fil des générations." },
            },
            {
              heading: "Un exemple historique : la phalène du bouleau",
              paragraphs: [
                "La phalène du bouleau (Biston betularia) est un papillon de nuit qui se repose le jour sur les troncs d'arbres. Il en existe une forme claire mouchetée et une forme sombre, et cette différence de couleur est héréditaire. En Angleterre, avant la révolution industrielle, les troncs étaient clairs, couverts de lichens, et la forme claire dominait largement. La forme sombre, très rare, n'est signalée près de Manchester qu'en 1848.",
                "Au XIXe siècle, les fumées du charbon tuent les lichens et noircissent les troncs dans les régions industrielles. Les phalènes claires y deviennent très visibles pour les oiseaux qui les chassent, alors que les sombres passent inaperçues. Les sombres survivent donc mieux, se reproduisent davantage, et à la fin du siècle elles sont devenues majoritaires dans ces régions. Dans les années 1950, les expériences de lâcher et de recapture de Bernard Kettlewell confirment que la prédation par les oiseaux dépend de la couleur des papillons et du support.",
                "Après l'adoption de lois contre la pollution de l'air au milieu du XXe siècle, les troncs redeviennent clairs et la forme claire redevient majoritaire en quelques décennies. En 2016, des chercheurs ont identifié la mutation responsable de la forme sombre dans un gène nommé cortex. Cet exemple montre que le milieu n'a pas créé la mutation : il a trié des formes qui existaient déjà.",
              ],
            },
            {
              heading: "La sélection naturelle observée aujourd'hui",
              paragraphs: [
                "La sélection naturelle s'observe parfois en quelques années. Dans une population de bactéries, quelques individus peuvent porter, par hasard, une mutation qui les rend résistants à un antibiotique. Lorsque l'antibiotique est utilisé, les bactéries sensibles meurent, les résistantes survivent et se multiplient : la population devient résistante. Plus les antibiotiques sont utilisés, plus cette pression de sélection est forte. Le même mécanisme explique la résistance des moustiques aux insecticides ou celle de certaines plantes adventices aux herbicides.",
                "Sur l'île de Daphné Majeure, aux Galápagos, les biologistes Peter et Rosemary Grant ont suivi pendant des décennies une population de pinsons. Lors de la sécheresse de 1977, les petites graines tendres se sont raréfiées et il ne restait surtout que des graines grosses et dures. Les oiseaux au bec plus grand et plus robuste, capables de les ouvrir, ont mieux survécu, et la génération suivante avait en moyenne un bec plus grand. La taille du bec étant en grande partie héréditaire, la sélection naturelle a modifié la population en une seule génération.",
              ],
              box: { label: "À retenir", text: "Mutation aléatoire, puis variation héréditaire, puis survie et reproduction différentielles dans un milieu donné, puis augmentation de la fréquence des allèles avantageux. Le milieu ne provoque pas les mutations utiles : il trie les individus." },
            },
          ],
          keyPoints: [
            "Les mutations, rares et aléatoires, créent de nouveaux allèles ; la reproduction sexuée produit de nouvelles combinaisons.",
            "Fréquence d'un allèle : proportion de cet allèle parmi tous les allèles de ce gène dans la population.",
            "Sélection naturelle (Darwin et Wallace, 1858 ; Darwin, 1859) : les porteurs d'allèles favorables dans un milieu laissent plus de descendants.",
            "Pressions de sélection : climat, nourriture, prédateurs, parasites, compétition, choix des partenaires.",
            "Un caractère n'est avantageux que dans un milieu donné : la phalène sombre est favorisée sur des troncs noircis, la claire sur des troncs clairs.",
            "La sélection ne crée pas les allèles : elle trie une diversité déjà présente (résistance aux antibiotiques, aux insecticides).",
          ],
          example: {
            statement: "Données fictives. Dans un bois proche d'une région industrielle, on a recensé la proportion de phalènes sombres : 2 % en 1850, 30 % en 1870, 75 % en 1890 et 95 % en 1910. a) Décrivez l'évolution. b) Expliquez-la à l'aide de la notion de sélection naturelle.",
            solution: [
              "Décrire avec les valeurs : la proportion de phalènes sombres passe de 2 % en 1850 à 95 % en 1910, soit une augmentation de 93 points en 60 ans ; la forme sombre, d'abord rare, devient très majoritaire.",
              "Rappeler l'origine de la forme sombre : elle résulte d'une mutation, apparue par hasard, qui existait avant l'augmentation de la pollution.",
              "Identifier le changement du milieu : les fumées industrielles tuent les lichens et noircissent les troncs sur lesquels les papillons se posent le jour.",
              "Identifier la pression de sélection : sur des troncs sombres, les phalènes claires sont plus visibles et davantage mangées par les oiseaux ; les sombres survivent mieux et se reproduisent davantage.",
              "Conclure sur la transmission : les phalènes sombres transmettent l'allèle de la couleur sombre à leurs descendants, dont la proportion augmente à chaque génération.",
              "Réponse : la forme sombre passe de 2 % à 95 % en 60 ans parce que, dans un milieu noirci par la pollution, la prédation par les oiseaux favorise la survie et la reproduction des porteurs de l'allèle sombre : c'est la sélection naturelle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Dans une population de 400 phalènes, on compte 300 individus sombres et 100 individus clairs. a) Calculez la proportion de chaque forme. b) Dans la description suivante, identifiez la mutation, la variation héréditaire, la pression de sélection et le résultat : « Un hôpital utilise beaucoup un antibiotique. Quelques bactéries d'une population portent un allèle de résistance apparu par hasard. Les bactéries sensibles sont tuées, les résistantes se multiplient. Un an plus tard, la plupart des bactéries de l'hôpital sont résistantes. »",
              hint: "Une proportion se calcule en divisant l'effectif d'une forme par l'effectif total. La pression de sélection est le facteur du milieu qui tue ou empêche de se reproduire.",
              solution: [
                "a) Formes sombres : 300 ÷ 400 = 0,75, soit 75 %. Formes claires : 100 ÷ 400 = 0,25, soit 25 %. Vérification : 75 % + 25 % = 100 %.",
                "b) Mutation : l'apparition, par hasard, de l'allèle de résistance chez quelques bactéries.",
                "Variation héréditaire : la population contient des bactéries sensibles et des bactéries résistantes, qui transmettent ce caractère à leurs descendantes.",
                "Pression de sélection : l'antibiotique, qui tue les bactéries sensibles.",
                "Résultat : la fréquence de l'allèle de résistance augmente, et la population devient majoritairement résistante en un an.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives, inspirées des expériences de Kettlewell. Dans un bois pollué aux troncs noircis, on lâche 200 phalènes claires et 200 phalènes sombres, toutes marquées. Quelques jours plus tard, on recapture 30 claires et 60 sombres. Dans un bois non pollué aux troncs clairs, on lâche 200 phalènes de chaque forme et l'on recapture 50 claires et 25 sombres. a) Calculez le taux de recapture de chaque forme dans chaque bois. b) Interprétez ces résultats. c) Que peut-on prévoir pour la fréquence de la forme sombre dans chaque bois au fil des générations ?",
              hint: "Taux de recapture = nombre recapturé ÷ nombre lâché. Un papillon recapturé est un papillon qui a survécu, en particulier aux oiseaux.",
              solution: [
                "a) Bois pollué : claires 30 ÷ 200 = 15 % ; sombres 60 ÷ 200 = 30 %. Bois non pollué : claires 50 ÷ 200 = 25 % ; sombres 25 ÷ 200 = 12,5 %.",
                "b) Dans le bois pollué, les sombres sont recapturées deux fois plus souvent que les claires (30 % contre 15 %) : elles ont mieux survécu. Dans le bois non pollué, c'est l'inverse : les claires survivent deux fois mieux (25 % contre 12,5 %).",
                "Interprétation : la survie dépend de l'accord entre la couleur du papillon et celle du tronc ; les papillons les plus visibles sont davantage mangés par les oiseaux. La prédation est la pression de sélection.",
                "c) Les individus qui survivent se reproduisent et transmettent leurs allèles : dans le bois pollué, la fréquence de la forme sombre devrait augmenter ; dans le bois non pollué, elle devrait diminuer.",
                "Résultat : la sélection naturelle favorise la forme sombre en milieu pollué et la forme claire en milieu non pollué ; aucun caractère n'est avantageux dans l'absolu.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique à partir de documents. Document 1 : chez un moustique, un allèle R rend les individus résistants à un insecticide ; l'allèle S les laisse sensibles. Document 2 (données fictives, inspirées d'études menées sur des moustiques du littoral méditerranéen) : fréquence de l'allèle R dans une population : 1 % avant les traitements ; 60 % après cinq ans de traitements annuels ; 20 % cinq ans après l'arrêt des traitements. Document 3 : en l'absence d'insecticide, les moustiques porteurs de l'allèle R survivent moins bien l'hiver que les porteurs de l'allèle S. En vous appuyant sur les documents et vos connaissances, expliquez l'évolution de la fréquence de l'allèle R.",
              hint: "Traitez les deux périodes séparément : quel est l'allèle avantagé pendant les traitements, puis après leur arrêt ? Pensez à préciser l'origine de l'allèle R.",
              solution: [
                "Origine de l'allèle R : il est présent à 1 % avant tout traitement ; il est donc apparu par mutation, au hasard, avant l'usage de l'insecticide, qui ne l'a pas provoqué.",
                "Pendant les traitements : l'insecticide tue surtout les moustiques sensibles. Les porteurs de R survivent mieux, se reproduisent davantage et transmettent R : sa fréquence passe de 1 % à 60 % en cinq ans. L'insecticide est la pression de sélection.",
                "Après l'arrêt : l'avantage de R disparaît, mais le document 3 montre qu'il a un coût, une moins bonne survie hivernale. Les porteurs de S sont alors favorisés, et la fréquence de R diminue de 60 % à 20 %.",
                "Généralisation : le même allèle est avantageux dans un milieu traité et désavantageux dans un milieu non traité ; la sélection naturelle dépend du milieu.",
                "Conclusion : la fréquence de R augmente de 1 % à 60 % sous l'effet de la sélection exercée par l'insecticide, puis diminue à 20 % après l'arrêt des traitements, car R devient défavorable. Cela plaide pour un usage limité et raisonné des insecticides.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la sélection naturelle.",
            statements: [
              { text: "L'antibiotique provoque chez les bactéries les mutations qui les rendent résistantes.", true: false, why: "Les mutations sont aléatoires et préexistent : l'antibiotique tue les bactéries sensibles et laisse se multiplier les résistantes." },
              { text: "La sélection naturelle agit sur des caractères héréditaires.", true: true, why: "Seuls les caractères transmis aux descendants peuvent voir leur fréquence changer au fil des générations." },
              { text: "Un caractère avantageux l'est dans tous les milieux.", true: false, why: "L'avantage dépend du milieu : la phalène sombre est favorisée sur des troncs noircis, défavorisée sur des troncs clairs." },
              { text: "Les individus favorisés sont ceux qui laissent le plus de descendants.", true: true, why: "La sélection naturelle se mesure à la reproduction : survivre ne suffit pas, il faut transmettre ses allèles." },
              { text: "Un individu change ses allèles pour s'adapter à son milieu au cours de sa vie.", true: false, why: "Un individu garde ses allèles ; c'est la composition de la population qui change d'une génération à l'autre." },
              { text: "La compétition entre individus de la même espèce peut être une pression de sélection.", true: true, why: "Quand les ressources manquent, les individus les plus aptes à les obtenir laissent plus de descendants." },
              { text: "La sélection naturelle ne peut s'observer que sur des millions d'années.", true: false, why: "Chez les bactéries, les insectes ou les pinsons des Galápagos, elle s'observe en quelques années ou générations." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'origine des nouveaux allèles dans une population ?",
              options: ["Les besoins des individus face au milieu", "Les mutations, aléatoires", "La sélection naturelle elle-même", "L'entraînement des individus"],
              answer: 1,
              why: "Les nouveaux allèles proviennent de mutations qui se produisent au hasard ; la sélection trie ensuite les individus qui les portent.",
            },
            {
              q: "Sur des troncs noircis par la pollution, pourquoi les phalènes sombres deviennent-elles majoritaires ?",
              options: ["La pollution les a rendues sombres", "Elles ont appris à se cacher", "Elles changent de couleur en grandissant", "Elles sont moins mangées par les oiseaux"],
              answer: 3,
              why: "Moins visibles sur les troncs sombres, elles survivent mieux et se reproduisent davantage, et transmettent l'allèle de la couleur sombre.",
            },
            {
              q: "En quelle année Darwin publie-t-il L'Origine des espèces ?",
              options: ["1859", "1809", "1900", "1953"],
              answer: 0,
              why: "L'ouvrage paraît en 1859, un an après la présentation commune des travaux de Darwin et de Wallace en 1858.",
            },
            {
              q: "Lors de la sécheresse de 1977 à Daphné Majeure, quels pinsons ont été favorisés ?",
              options: ["Ceux au plumage le plus clair", "Ceux au bec le plus petit et le plus fin", "Ceux au bec le plus grand", "Ceux qui migraient vers le continent"],
              answer: 2,
              why: "Il ne restait surtout que des graines grosses et dures : les oiseaux capables de les ouvrir ont mieux survécu.",
            },
            {
              q: "Dans une population de 500 bactéries, 125 sont résistantes. Quelle est la proportion de bactéries résistantes ?",
              options: ["12,5 %", "25 %", "40 %", "75 %"],
              answer: 1,
              why: "125 ÷ 500 = 0,25, soit 25 %.",
            },
          ],
          trap: "Croire que le milieu provoque les mutations utiles (« les bactéries deviennent résistantes pour survivre ») : les mutations sont aléatoires et préexistantes, et le milieu ne fait que trier les individus qui les portent.",
          method: "Pour expliquer un cas de sélection naturelle, suivez toujours la même chaîne en quatre maillons : origine de la variation (mutation aléatoire), changement ou caractéristique du milieu (pression de sélection), survie et reproduction différentielles, évolution de la fréquence de l'allèle au fil des générations.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'derive-genetique',
          title: "La dérive génétique",
          minutes: 30,
          objectives: [
            "Définir la dérive génétique comme une modification aléatoire de la fréquence des allèles d'une population au cours des générations.",
            "Expliquer pourquoi la dérive génétique est d'autant plus marquée que l'effectif de la population est faible.",
            "Utiliser un modèle (tirage au sort, simulation numérique) pour montrer qu'un allèle peut se fixer ou disparaître par hasard.",
            "Expliquer l'effet fondateur et l'effet goulot d'étranglement à partir d'exemples, et comparer dérive génétique et sélection naturelle.",
          ],
          course: [
            {
              heading: "Le hasard de la reproduction",
              paragraphs: [
                "D'une génération à l'autre, tous les individus d'une population ne se reproduisent pas, et ceux qui se reproduisent n'ont pas tous le même nombre de descendants, souvent pour des raisons qui n'ont rien à voir avec leurs allèles : un accident, une tempête, une rencontre manquée. De plus, chaque parent ne transmet à chaque descendant qu'un seul de ses deux allèles d'un gène, choisi au hasard lors de la formation des gamètes.",
                "Les allèles de la génération suivante forment donc un échantillon tiré au hasard parmi ceux de la génération des parents. Comme tout échantillon, il ne reproduit pas exactement les proportions de départ : la fréquence de chaque allèle varie un peu, au hasard, d'une génération à l'autre. Ce phénomène, appelé dérive génétique, se produit même lorsque les allèles n'apportent aucun avantage ni désavantage.",
                "Une analogie aide à le comprendre : un sac contient autant de billes rouges que de billes blanches. Si l'on tire 10 billes au hasard, on obtient rarement exactement 5 rouges et 5 blanches ; on peut obtenir 7 rouges et 3 blanches. Si l'on reconstitue un nouveau sac avec ces proportions, puis qu'on recommence, les proportions dérivent d'un tirage à l'autre, sans direction prévisible.",
              ],
              box: { label: "Définition", text: "La dérive génétique est la modification aléatoire de la fréquence des allèles dans une population, d'une génération à l'autre. Elle résulte du hasard de la reproduction et de la transmission des allèles, et ne dépend pas de l'avantage que procurent ces allèles." },
            },
            {
              heading: "Une dérive d'autant plus forte que la population est petite",
              paragraphs: [
                "L'ampleur de la dérive dépend de l'effectif de la population. Si l'on lance 10 fois une pièce, obtenir 7 fois pile (70 %) est fréquent ; si on la lance 1 000 fois, on obtient presque toujours une proportion proche de 50 %. De même, dans une petite population, la fréquence d'un allèle peut varier fortement en une génération, alors que dans une très grande population elle reste presque stable.",
                "Au fil des générations, les variations aléatoires s'accumulent. Un allèle peut atteindre la fréquence de 100 % : on dit qu'il est fixé, car tous les individus le portent. L'autre allèle a alors disparu, et seule une nouvelle mutation ou l'arrivée d'individus venus d'une autre population pourrait le réintroduire. Dans une petite population, fixation et disparition surviennent en peu de générations : la dérive réduit la diversité génétique.",
                "Les simulations numériques le montrent : si l'on suit dix populations de 10 individus partant toutes d'une fréquence de 50 %, la plupart ont fixé ou perdu l'allèle en quelques dizaines de générations, et pas toutes dans le même sens. Avec dix populations de 1 000 individus, les fréquences s'écartent peu de 50 % sur la même durée. On ne peut pas prévoir le résultat dans une population donnée, seulement le comportement d'ensemble.",
              ],
              box: { label: "Propriété", text: "Plus l'effectif d'une population est faible, plus la dérive génétique est rapide et forte : les fréquences des allèles y varient davantage d'une génération à l'autre, et un allèle s'y fixe ou y disparaît plus vite." },
            },
            {
              heading: "Effet fondateur et goulot d'étranglement",
              paragraphs: [
                "Lorsqu'un petit groupe d'individus fonde une nouvelle population, par exemple en colonisant une île, il n'emporte qu'un échantillon des allèles de la population d'origine. Par hasard, certains allèles rares peuvent y être fréquents, et d'autres absents : c'est l'effet fondateur. Chez les Amish de Pennsylvanie, communauté issue d'un petit nombre de migrants arrivés d'Europe au XVIIIe siècle et longtemps restée isolée, une maladie héréditaire rare, le syndrome d'Ellis-van Creveld (une forme de nanisme avec doigts surnuméraires), est beaucoup plus fréquente que dans le reste de la population.",
                "Lorsqu'une population voit son effectif brutalement réduit (chasse, épidémie, catastrophe), les survivants ne portent qu'une partie des allèles initiaux : c'est un goulot d'étranglement. L'éléphant de mer du Nord, chassé pour son huile au XIXe siècle, ne comptait plus que quelques dizaines d'individus à la fin de ce siècle. Protégé, il compte aujourd'hui plus de cent mille individus, mais sa diversité génétique est restée très faible : l'effectif s'est reconstitué, pas les allèles perdus.",
                "Ces phénomènes concernent directement la protection des espèces menacées. Une petite population isolée perd rapidement sa diversité génétique par dérive, ce qui la rend plus vulnérable à une maladie ou à un changement du milieu. C'est l'une des raisons pour lesquelles on réintroduit parfois des individus venus d'autres populations, comme les ours bruns venus de Slovénie et relâchés dans les Pyrénées à partir de 1996.",
              ],
            },
            {
              heading: "Dérive et sélection : deux mécanismes complémentaires",
              paragraphs: [
                "La sélection naturelle et la dérive génétique modifient toutes deux la fréquence des allèles, mais de manière différente. La sélection est orientée : dans un milieu donné, elle augmente de façon prévisible la fréquence des allèles avantageux. La dérive est aléatoire : elle peut augmenter ou diminuer la fréquence de n'importe quel allèle, qu'il soit neutre, avantageux ou défavorable.",
                "Les deux mécanismes agissent en même temps. Dans une grande population, la sélection l'emporte en général. Dans une petite population, la dérive peut être plus forte que la sélection : un allèle avantageux peut disparaître par hasard, et un allèle légèrement défavorable peut se fixer. Les mutations apportent sans cesse de nouveaux allèles, et les échanges d'individus entre populations, ou migrations, tendent à rendre leurs compositions génétiques plus semblables.",
              ],
              box: { label: "À retenir", text: "Mutations : création de nouveaux allèles, au hasard. Sélection naturelle : tri orienté par le milieu, favorise les allèles avantageux. Dérive génétique : variation aléatoire des fréquences, forte dans les petites populations, réduit la diversité génétique." },
            },
          ],
          keyPoints: [
            "Dérive génétique : variation aléatoire de la fréquence des allèles d'une génération à l'autre, due au hasard de la reproduction.",
            "Elle agit même sur des allèles neutres, sans avantage ni désavantage.",
            "Plus l'effectif est faible, plus la dérive est forte : un allèle peut se fixer (100 %) ou disparaître (0 %) en peu de générations.",
            "La dérive réduit la diversité génétique ; seule une mutation ou une migration peut réintroduire un allèle perdu.",
            "Effet fondateur : quelques individus fondent une population (Amish de Pennsylvanie). Goulot d'étranglement : effectif brutalement réduit (éléphant de mer du Nord).",
            "Sélection : orientée par le milieu ; dérive : aléatoire. Les deux agissent ensemble.",
          ],
          example: {
            statement: "Données fictives. On suit un allèle B, sans effet sur la survie ni sur la reproduction, dans deux populations partant d'une fréquence de 50 %. Population 1 (10 individus) : 50 %, 30 %, 40 %, 15 %, 0 % aux générations 0 à 4. Population 2 (1 000 individus) : 50 %, 49 %, 51 %, 50 %, 49 % aux mêmes générations. Comparez l'évolution de la fréquence de B dans les deux populations et expliquez-la.",
            solution: [
              "Décrire la population 1 : la fréquence de B varie fortement et sans direction régulière (baisse, hausse, puis baisse) et atteint 0 % à la génération 4 : l'allèle B a disparu.",
              "Décrire la population 2 : la fréquence de B reste comprise entre 49 % et 51 %, presque stable.",
              "Écarter la sélection naturelle : l'allèle B n'a aucun effet sur la survie ni sur la reproduction ; ses variations ne peuvent donc pas venir d'un tri par le milieu.",
              "Identifier le mécanisme : à chaque génération, les allèles transmis sont un échantillon pris au hasard parmi ceux des parents ; c'est la dérive génétique.",
              "Relier à l'effectif : dans une population de 10 individus (20 allèles), l'échantillon est petit et s'écarte beaucoup des proportions des parents ; dans une population de 1 000 individus, il les reproduit presque exactement.",
              "Réponse : B disparaît par hasard en quatre générations dans la petite population, mais reste vers 50 % dans la grande : la dérive génétique est d'autant plus forte que l'effectif est faible.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Une population de 25 plantes porte, pour un gène de couleur des pétales, 50 allèles au total. À la génération 1, on compte 20 allèles a. À la génération 2, toujours 25 plantes, on compte 12 allèles a. Cet allèle n'a aucun effet sur la survie ni sur la reproduction. a) Calculez la fréquence de a à chaque génération. b) Quel mécanisme explique ce changement ? Justifiez.",
              hint: "Chaque plante porte deux allèles du gène. Fréquence = nombre d'allèles a ÷ nombre total d'allèles du gène.",
              solution: [
                "a) Génération 1 : 20 ÷ 50 = 0,40, soit 40 %. Génération 2 : 12 ÷ 50 = 0,24, soit 24 %.",
                "La fréquence de a a diminué de 16 points en une génération.",
                "b) L'allèle a ne procure ni avantage ni désavantage : ce changement ne peut pas résulter de la sélection naturelle.",
                "Résultat : il s'agit de la dérive génétique, une variation aléatoire due au hasard de la reproduction, marquée ici parce que la population est petite (25 individus).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Avec un logiciel de simulation, on suit un allèle neutre de fréquence initiale 50 % dans cinq populations de 10 individus et cinq populations de 500 individus. Après 50 générations, on obtient : populations de 10 individus : 0 %, 100 %, 0 %, 0 %, 100 % ; populations de 500 individus : 38 %, 61 %, 52 %, 45 %, 57 %. a) Dans combien de petites populations l'allèle est-il fixé ? perdu ? b) Calculez l'écart maximal à 50 % dans les grandes populations. c) Expliquez ces résultats. d) Pourquoi les cinq petites populations n'évoluent-elles pas toutes dans le même sens ?",
              hint: "Fixé signifie 100 %, perdu signifie 0 %. Pensez à l'analogie des lancers de pièce, peu nombreux ou très nombreux.",
              solution: [
                "a) Petites populations : l'allèle est fixé dans 2 populations (100 %) et perdu dans 3 (0 %). Aucune n'a conservé les deux allèles.",
                "b) Grandes populations : les écarts à 50 % sont 12, 11, 2, 5 et 7 points ; l'écart maximal est de 12 points (38 %). Toutes conservent les deux allèles.",
                "c) L'allèle étant neutre, ces variations sont dues à la dérive génétique. Dans les petites populations, chaque génération ne transmet qu'un petit échantillon de 20 allèles, qui s'écarte fortement des proportions des parents : les écarts s'accumulent jusqu'à la fixation ou la perte. Dans les grandes populations, l'échantillon de 1 000 allèles reste proche des proportions des parents.",
                "d) La dérive est aléatoire : son sens n'est pas prévisible ; le hasard fixe l'allèle dans certaines populations et l'élimine dans d'autres.",
                "Résultat : la dérive est d'autant plus forte que l'effectif est faible ; elle conduit en peu de générations à la perte de diversité génétique dans les petites populations.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique à partir de documents. Document 1 : l'éléphant de mer du Nord a été chassé pour son huile au XIXe siècle ; à la fin du siècle, il ne restait que quelques dizaines d'individus. Protégé au XXe siècle, il compte aujourd'hui plus de cent mille individus. Document 2 (données fictives) : sur 20 gènes étudiés, on trouve plusieurs allèles pour 1 seul gène chez l'éléphant de mer du Nord, contre 6 gènes chez l'éléphant de mer du Sud, une espèce proche qui n'a pas subi une telle chasse. Document 3 : une population peu diversifiée génétiquement a moins de chances de compter des individus résistants face à une nouvelle maladie. a) Calculez le pourcentage de gènes présentant plusieurs allèles chez chaque espèce. b) Expliquez la faible diversité génétique de l'éléphant de mer du Nord. c) Pourquoi la forte augmentation de l'effectif n'a-t-elle pas restauré cette diversité ? d) Quel risque cela représente-t-il pour l'espèce ?",
              hint: "Pensez au goulot d'étranglement : que deviennent les allèles portés par les individus tués ? Puis demandez-vous comment de nouveaux allèles pourraient apparaître.",
              solution: [
                "a) Éléphant de mer du Nord : 1 ÷ 20 = 5 % des gènes étudiés ont plusieurs allèles. Éléphant de mer du Sud : 6 ÷ 20 = 30 %.",
                "b) La chasse a réduit la population à quelques dizaines d'individus : c'est un goulot d'étranglement. Les allèles portés uniquement par les individus tués ont disparu. Ensuite, dans une population aussi petite, la dérive génétique a été très forte et a fait disparaître par hasard d'autres allèles, en fixant les restants.",
                "c) L'augmentation de l'effectif multiplie les individus, mais ceux-ci descendent tous des quelques survivants et portent donc les mêmes allèles. Les allèles perdus ne peuvent réapparaître que par de nouvelles mutations, rares, ou par l'arrivée d'individus d'une autre population de la même espèce, qui n'existe pas ici.",
                "d) D'après le document 3, face à une nouvelle maladie ou à un changement du milieu, l'espèce risque de ne compter que peu ou pas d'individus porteurs d'allèles favorables : elle est plus vulnérable.",
                "Conclusion : le goulot d'étranglement et la dérive qui l'a accompagné expliquent la faible diversité génétique de l'éléphant de mer du Nord (5 % contre 30 %), qui demeure malgré le retour d'un effectif important et fragilise l'espèce.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une modélisation de la dérive génétique avec des billes.",
            items: [
              "Placer dans un sac 10 billes rouges et 10 billes blanches : une population de 10 individus, 20 allèles, fréquence de 50 %.",
              "Tirer une bille au hasard et noter sa couleur.",
              "Remettre la bille dans le sac et recommencer jusqu'à obtenir 20 tirages.",
              "Constituer un nouveau sac avec les couleurs tirées : c'est la génération suivante.",
              "Calculer la nouvelle fréquence des billes rouges.",
              "Répéter les tirages, génération après génération, jusqu'à la fixation ou la disparition d'une couleur.",
            ],
          },
          quiz: [
            {
              q: "Quelle est la cause de la dérive génétique ?",
              options: ["L'avantage procuré par certains allèles", "Le hasard de la reproduction", "Les pressions exercées par les prédateurs", "Le choix des partenaires sexuels"],
              answer: 1,
              why: "La dérive résulte du hasard : les allèles transmis sont un échantillon aléatoire de ceux des parents, indépendamment de leur effet.",
            },
            {
              q: "Dans quelle population la dérive génétique est-elle la plus forte ?",
              options: ["Une population de 100 000 individus", "Une population de 10 000 individus", "Une population de 1 000 individus", "Une population de 20 individus"],
              answer: 3,
              why: "La dérive est d'autant plus marquée que l'effectif est faible : les échantillons d'allèles transmis s'y écartent davantage des proportions de départ.",
            },
            {
              q: "Que signifie qu'un allèle est « fixé » dans une population ?",
              options: ["Sa fréquence atteint 100 %", "Il ne mute plus jamais", "Il est porté par un seul individu", "Sa fréquence reste à 50 %"],
              answer: 0,
              why: "Un allèle fixé est porté par tous les individus : les autres allèles de ce gène ont disparu de la population.",
            },
            {
              q: "Une petite île est colonisée par cinq lézards venus du continent. Leurs descendants portent des allèles en proportions très différentes de celles du continent. Comment nomme-t-on ce phénomène ?",
              options: ["Une sélection naturelle", "Une mutation", "Un effet fondateur", "Une migration"],
              answer: 2,
              why: "Les fondateurs n'emportent qu'un échantillon des allèles de la population d'origine : c'est l'effet fondateur, une forme de dérive.",
            },
            {
              q: "En quoi la dérive génétique diffère-t-elle de la sélection naturelle ?",
              options: ["Elle crée de nouveaux allèles", "Elle n'agit que sur les bactéries", "Son sens est aléatoire et imprévisible", "Elle augmente toujours la diversité génétique des populations"],
              answer: 2,
              why: "La sélection favorise de façon orientée les allèles avantageux, alors que la dérive fait varier les fréquences au hasard, et tend à réduire la diversité.",
            },
          ],
          trap: "Confondre dérive génétique et sélection naturelle : si l'allèle étudié ne procure ni avantage ni désavantage, ou si ses variations sont irrégulières dans une petite population, c'est la dérive, aléatoire, et non un tri par le milieu.",
          method: "Pour identifier le mécanisme en jeu, posez deux questions : l'allèle apporte-t-il un avantage dans ce milieu (si oui, pensez sélection) ? la population est-elle petite et les variations irrégulières (si oui, pensez dérive) ? Citez toujours l'effectif de la population dans votre réponse.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'notion-espece',
          title: "La notion d'espèce et la formation de nouvelles espèces",
          minutes: 30,
          objectives: [
            "Définir une espèce comme une population d'individus suffisamment isolés génétiquement des autres populations, et discuter les limites des critères de ressemblance et d'interfécondité.",
            "Expliquer qu'une espèce n'est définie que durant un laps de temps fini : elle apparaît, se transforme et peut disparaître.",
            "Expliquer la formation d'une nouvelle espèce par l'isolement reproducteur de populations, sous l'effet des mutations, de la sélection naturelle et de la dérive génétique.",
            "Exploiter un exemple de formation d'espèces : populations isolées sur des îles, espèces en anneau.",
          ],
          course: [
            {
              heading: "Définir une espèce : ressemblance et interfécondité",
              paragraphs: [
                "Pendant longtemps, les espèces ont été définies par la ressemblance : appartiennent à une même espèce les individus qui ont les mêmes caractères. C'est sur cette base que le naturaliste suédois Carl von Linné a fondé au XVIIIe siècle la nomenclature binominale encore utilisée : chaque espèce porte un nom de genre suivi d'un nom d'espèce, comme Homo sapiens ou Biston betularia. Ce critère a des limites : le mâle et la femelle d'une même espèce peuvent être très différents (le paon et la paonne), une chenille ne ressemble pas au papillon adulte, et deux espèces distinctes peuvent être presque impossibles à distinguer, comme le pouillot véloce et le pouillot fitis, deux petits oiseaux qui se reconnaissent surtout à leur chant.",
                "Au XXe siècle, le biologiste Ernst Mayr a popularisé un critère fondé sur la reproduction : une espèce est un ensemble de populations dont les individus peuvent se reproduire entre eux dans la nature et donner une descendance viable et fertile. Ainsi, toutes les races de chiens forment une seule espèce, malgré leurs différences de taille et d'aspect. En revanche, l'âne et la jument donnent un mulet, généralement stérile : l'âne et le cheval sont deux espèces distinctes.",
                "Ce critère a lui aussi des limites. Il ne s'applique pas aux êtres vivants qui se reproduisent sans sexualité, comme les bactéries, ni aux espèces fossiles, dont on ne peut pas tester la reproduction. Et certaines espèces distinctes peuvent parfois produire des hybrides fertiles. Les biologistes combinent donc plusieurs critères : morphologie, reproduction, comportement, milieu de vie et comparaison des séquences d'ADN.",
              ],
              box: { label: "Définition", text: "Une espèce peut être considérée comme une population (ou un ensemble de populations) d'individus suffisamment isolés génétiquement des autres populations : ils échangent des allèles entre eux par la reproduction, mais pas, ou très peu, avec les autres." },
            },
            {
              heading: "L'isolement reproducteur",
              paragraphs: [
                "Tant que des individus de deux populations se reproduisent entre eux, des allèles circulent de l'une à l'autre : c'est le flux de gènes. Il maintient une certaine ressemblance génétique entre les populations, qui restent une même espèce. Lorsque ce flux s'interrompt, les populations sont isolées génétiquement et peuvent évoluer chacune de leur côté.",
                "Plusieurs barrières peuvent empêcher la reproduction. Une barrière géographique sépare physiquement les populations : un bras de mer, une chaîne de montagnes, un fleuve. D'autres barrières empêchent la reproduction même quand les individus se rencontrent : des périodes de reproduction décalées, des comportements de parade ou des chants différents qui ne sont plus reconnus, des organes reproducteurs incompatibles. Enfin, si une fécondation a lieu, l'hybride peut ne pas se développer ou être stérile, comme le mulet.",
              ],
              box: { label: "À retenir", text: "Le flux de gènes relie les populations d'une même espèce. L'isolement reproducteur (géographique, temporel, comportemental, mécanique ou génétique) interrompt ce flux et permet aux populations de diverger." },
            },
            {
              heading: "La formation de nouvelles espèces",
              paragraphs: [
                "La formation d'une nouvelle espèce, appelée spéciation, commence souvent par la séparation d'une population en deux, par exemple lorsqu'un petit groupe colonise une île ou qu'un obstacle naturel se forme. Privées de flux de gènes, les deux populations accumulent des différences : chacune subit des mutations différentes, apparues au hasard ; chacune est soumise à des pressions de sélection propres à son milieu ; et la dérive génétique, forte si l'une d'elles est petite, modifie leurs fréquences d'allèles indépendamment.",
                "Au bout de nombreuses générations, les différences accumulées peuvent devenir telles que les individus des deux populations ne peuvent plus se reproduire entre eux, même si l'obstacle disparaît et qu'ils se rencontrent à nouveau. Les deux populations sont alors isolées génétiquement de façon durable : elles forment deux espèces distinctes. Aux Galápagos, une quinzaine d'espèces de pinsons, aux becs adaptés à des nourritures différentes, descendent ainsi d'une population ancestrale venue du continent sud-américain.",
                "Les espèces en anneau montrent la spéciation en train de se faire. En Californie, des populations de salamandres du genre Ensatina se répartissent autour de la vallée centrale. Chaque population peut se reproduire avec ses voisines, mais aux deux extrémités de l'anneau, dans le sud, les populations qui se rencontrent ne se reproduisent pratiquement plus entre elles : elles se comportent comme deux espèces, alors qu'elles sont reliées par une chaîne continue de populations interfécondes.",
              ],
              box: { label: "Définition", text: "La spéciation est la formation d'une ou de plusieurs espèces nouvelles à partir d'une espèce ancestrale. Elle résulte de l'isolement reproducteur de populations qui, séparées, accumulent des différences génétiques par mutations, sélection naturelle et dérive génétique." },
            },
            {
              heading: "Une espèce n'existe que durant un temps fini",
              paragraphs: [
                "Une espèce n'est donc pas une catégorie fixée pour toujours : elle n'est définie que durant un laps de temps fini. Elle apparaît lorsqu'un ensemble de populations s'individualise et devient isolé génétiquement : on définit alors une espèce supplémentaire. Elle se transforme au cours du temps, sous l'effet de la sélection naturelle et de la dérive génétique.",
                "Une espèce disparaît lorsque tous ses individus meurent : c'est l'extinction, comme celle du dodo de l'île Maurice, à la fin du XVIIe siècle, ou celle des dinosaures non aviens il y a 66 millions d'années. Elle peut aussi disparaître en tant qu'espèce si ses individus cessent d'être isolés génétiquement, lorsque, une barrière ayant disparu, ils se reproduisent à nouveau largement avec une espèce proche et que les deux ensembles se confondent. La biodiversité actuelle n'est ainsi qu'une étape de l'histoire du vivant.",
              ],
            },
          ],
          keyPoints: [
            "Critère de ressemblance (Linné, XVIIIe siècle) : limité par les différences entre sexes, entre stades de vie, et par les espèces jumelles.",
            "Critère d'interfécondité : descendance viable et fertile ; inapplicable aux bactéries et aux fossiles.",
            "Une espèce est une population d'individus suffisamment isolés génétiquement des autres populations.",
            "Le flux de gènes relie les populations ; l'isolement reproducteur l'interrompt (géographique, comportemental, temporel, mécanique, hybrides stériles).",
            "Spéciation : populations isolées qui divergent par mutations, sélection et dérive jusqu'à ne plus pouvoir se reproduire entre elles.",
            "Une espèce n'existe que durant un temps fini : elle apparaît, se transforme, puis s'éteint ou cesse d'être isolée.",
          ],
          example: {
            statement: "Données fictives. On étudie trois populations de grillons : A et B vivent dans la même forêt, C sur une île voisine. Les croisements donnent : A × B, descendants nombreux et fertiles ; A × C, aucun accouplement, car les femelles A ne répondent pas au chant des mâles C ; B × C, idem. Les trois populations se ressemblent beaucoup. Combien d'espèces y a-t-il ? Justifiez.",
            solution: [
              "Rappeler le critère : appartiennent à une même espèce des individus qui peuvent se reproduire entre eux et donner une descendance viable et fertile, et qui sont isolés génétiquement des autres populations.",
              "Analyser A × B : la descendance est fertile, des allèles circulent entre A et B : elles forment une même espèce.",
              "Analyser A × C et B × C : aucun accouplement n'a lieu, car le chant des mâles C n'est pas reconnu : c'est un isolement reproducteur comportemental, auquel s'ajoute ici l'isolement géographique.",
              "Écarter le critère de ressemblance : les trois populations se ressemblent, mais la ressemblance ne suffit pas à définir l'espèce (espèces jumelles).",
              "Réponse : il y a deux espèces, l'une formée des populations A et B, l'autre de la population C, isolée génétiquement des deux autres.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque cas, indiquez s'il s'agit d'une ou de deux espèces, et précisez le critère utilisé : a) un chihuahua et un labrador ont, par l'intermédiaire d'autres chiens, des descendants fertiles ; b) un âne et une jument donnent un mulet, généralement stérile ; c) le pouillot véloce et le pouillot fitis se ressemblent beaucoup mais, ayant des chants différents, ne s'accouplent pas entre eux dans la nature ; d) le paon et la paonne ont des plumages très différents et se reproduisent ensemble.",
              hint: "Ne vous fiez pas à l'apparence : demandez-vous chaque fois si la reproduction est possible et si les descendants sont fertiles.",
              solution: [
                "a) Une seule espèce : les descendants sont fertiles et des allèles circulent entre toutes les races de chiens, malgré leurs différences de taille.",
                "b) Deux espèces : le mulet est généralement stérile ; il n'y a pas de flux de gènes durable entre ânes et chevaux.",
                "c) Deux espèces : malgré leur ressemblance, elles sont isolées par leur comportement (chant) et ne se reproduisent pas entre elles.",
                "d) Une seule espèce : ce sont le mâle et la femelle de la même espèce ; leur différence d'aspect est un dimorphisme sexuel.",
                "Résultat : a) et d) une espèce, b) et c) deux espèces ; le critère décisif est l'interfécondité, pas la ressemblance.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Autour d'une chaîne de montagnes infranchissable, on trouve six populations d'oiseaux, notées 1 à 6, disposées en arc de cercle de 1 à 6. Chaque population se reproduit avec succès avec ses voisines immédiates (1 avec 2, 2 avec 3, ..., 5 avec 6). Les populations 1 et 6, qui se rencontrent à l'extrémité de l'arc, ne se reproduisent pas entre elles. a) Les populations 1 et 6 appartiennent-elles à la même espèce selon le critère d'interfécondité ? b) Des allèles de la population 1 peuvent-ils atteindre la population 6 ? Comment ? c) Expliquez pourquoi cette situation illustre la formation progressive d'espèces. d) Que se passerait-il si les populations 3 et 4 disparaissaient ?",
              hint: "Pensez au flux de gènes de proche en proche, puis à ce qui arrive quand une chaîne de populations est coupée.",
              solution: [
                "a) Prises isolément, 1 et 6 ne se reproduisent pas entre elles : selon le critère d'interfécondité, elles se comportent comme deux espèces différentes.",
                "b) Oui : un allèle de la population 1 peut passer dans la population 2 par reproduction, puis de 2 à 3, et ainsi de suite jusqu'à 6. Le flux de gènes existe de proche en proche, même s'il est très lent.",
                "c) Les populations se sont différenciées progressivement le long de l'arc (mutations, sélection, dérive). Les différences sont faibles entre voisines, mais elles s'additionnent et deviennent suffisantes, aux extrémités, pour empêcher la reproduction : c'est une espèce en anneau, une spéciation en cours.",
                "d) Sans les populations 3 et 4, le flux de gènes entre le groupe 1-2 et le groupe 5-6 serait totalement interrompu. Ces deux groupes, isolés génétiquement, formeraient alors deux espèces distinctes.",
                "Résultat : la limite entre espèces n'est pas toujours nette ; l'isolement génétique s'installe progressivement, et une espèce se définit à un moment donné.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique à partir de documents. Document 1 (données fictives) : il y a environ 2 millions d'années, quelques lézards d'une espèce continentale ont colonisé deux îles éloignées, X et Y, à la faveur d'un radeau de végétation. Document 2 : l'île X est couverte de forêt humide, l'île Y de rochers secs et nus. Document 3 (données fictives) : aujourd'hui, les lézards de X sont verts, ceux de Y gris ; leur parade nuptiale diffère. En élevage, des croisements forcés X × Y donnent des œufs dont la plupart ne se développent pas, et les rares jeunes obtenus sont stériles. Expliquez comment deux espèces ont pu se former à partir de la population continentale.",
              hint: "Organisez votre réponse dans l'ordre chronologique : isolement, puis divergence (en nommant trois mécanismes), puis constat de l'isolement reproducteur.",
              solution: [
                "Isolement : les lézards de X et ceux de Y, séparés par la mer, ne peuvent plus échanger d'allèles entre eux ni avec le continent : il n'y a plus de flux de gènes.",
                "Effet fondateur et dérive : chaque île a été colonisée par quelques individus seulement, qui n'emportaient qu'un échantillon des allèles du continent ; dans ces petites populations, la dérive génétique a ensuite modifié les fréquences des allèles au hasard, différemment sur chaque île.",
                "Mutations : pendant 2 millions d'années, des mutations différentes, apparues au hasard, se sont produites dans chaque population.",
                "Sélection naturelle : les milieux diffèrent (forêt humide sur X, rochers secs sur Y) ; une couleur verte, moins visible des prédateurs dans le feuillage, a pu être favorisée sur X, et une couleur grise sur les rochers de Y.",
                "Isolement reproducteur : les différences accumulées touchent aussi la parade nuptiale (isolement comportemental) et la compatibilité génétique : les hybrides sont rarement viables et stériles. Même réunis, les lézards de X et de Y ne pourraient plus échanger d'allèles.",
                "Conclusion : l'isolement géographique, suivi de la divergence des deux populations par effet fondateur, dérive, mutations et sélection naturelle, a conduit à un isolement reproducteur : les lézards de X et de Y forment aujourd'hui deux espèces distinctes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Espèce", right: "Population d'individus suffisamment isolés génétiquement des autres populations" },
              { left: "Flux de gènes", right: "Circulation des allèles entre populations par la reproduction" },
              { left: "Isolement reproducteur", right: "Impossibilité pour deux populations d'échanger des allèles" },
              { left: "Spéciation", right: "Formation d'une nouvelle espèce à partir d'une espèce ancestrale" },
              { left: "Mulet", right: "Hybride généralement stérile d'un âne et d'une jument" },
              { left: "Extinction", right: "Disparition de tous les individus d'une espèce" },
            ],
          },
          quiz: [
            {
              q: "Un âne et une jument donnent un mulet, généralement stérile. On en conclut que :",
              options: ["L'âne et le cheval sont deux espèces", "L'âne et le cheval forment une seule espèce", "Le mulet est une nouvelle espèce", "La jument est une espèce hybride"],
              answer: 0,
              why: "Le critère d'interfécondité exige une descendance fertile ; le mulet étant généralement stérile, âne et cheval sont deux espèces.",
            },
            {
              q: "Pourquoi le critère d'interfécondité ne peut-il pas s'appliquer aux espèces fossiles ?",
              options: ["Les fossiles sont trop petits", "On ne peut pas observer leur reproduction", "Les fossiles n'ont pas d'ADN", "Leurs restes sont trop rares pour être comparés entre eux"],
              answer: 1,
              why: "On ne peut pas tester si des êtres vivants disparus se reproduisaient entre eux ; on utilise alors des critères morphologiques.",
            },
            {
              q: "Par quoi commence souvent la formation d'une nouvelle espèce ?",
              options: ["Par l'apparition simultanée de nombreux individus nouveaux", "Par une augmentation de l'effectif de la population", "Par une mutation qui change l'espèce en une génération", "Par l'isolement d'une population"],
              answer: 3,
              why: "L'isolement interrompt le flux de gènes ; les populations séparées peuvent alors accumuler des différences.",
            },
            {
              q: "Les races de chiens, très différentes d'aspect, forment :",
              options: ["Plusieurs espèces, une par race", "Deux espèces, les grands et les petits chiens", "Une seule espèce", "Une espèce en anneau"],
              answer: 2,
              why: "Les chiens de toutes races peuvent se reproduire entre eux, directement ou de proche en proche, avec une descendance fertile.",
            },
            {
              q: "Quel phénomène n'intervient pas dans la divergence de deux populations isolées ?",
              options: ["Le flux de gènes entre elles", "Les mutations apparues au hasard", "La sélection naturelle propre à chaque milieu", "La dérive génétique, forte si l'effectif est faible"],
              answer: 0,
              why: "Isolées, les populations n'échangent plus d'allèles ; c'est justement l'absence de flux de gènes qui permet leur divergence.",
            },
          ],
          trap: "Définir l'espèce par la seule ressemblance : des individus très différents peuvent appartenir à la même espèce (races de chiens, mâle et femelle), et deux espèces peuvent se ressembler beaucoup (pouillots véloce et fitis).",
          method: "Pour expliquer une spéciation, rédigez dans l'ordre chronologique : 1) isolement et arrêt du flux de gènes ; 2) divergence par mutations, sélection et dérive, en reliant chaque mécanisme à un élément des documents ; 3) constat de l'isolement reproducteur, même si les populations se rencontrent à nouveau.",
        },
      ],
    },

    /* ==================================================================== */
    /* GÉOSCIENCES ET DYNAMIQUE DES PAYSAGES                                  */
    /* ==================================================================== */
    {
      id: 'geosciences-paysages',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'alteration-erosion',
          title: "Altération et érosion des roches",
          minutes: 35,
          objectives: [
            "Distinguer l'altération (physique, chimique, biologique) et l'érosion des roches, et expliquer le rôle majeur de l'eau.",
            "Expliquer l'altération du granite : désagrégation en arène, transformation des feldspaths et des micas en argiles, résistance du quartz.",
            "Expliquer la dissolution du calcaire par une eau chargée en dioxyde de carbone et ses conséquences sur les paysages karstiques.",
            "Identifier les facteurs qui influencent la vitesse de l'altération et de l'érosion : climat, nature de la roche, pente, couverture végétale.",
          ],
          course: [
            {
              heading: "Des paysages façonnés par l'altération et l'érosion",
              paragraphs: [
                "Les roches qui affleurent à la surface de la Terre se sont souvent formées en profondeur, à des températures et des pressions élevées, ou au fond des mers. À la surface, elles sont au contact de l'atmosphère, de l'eau et des êtres vivants, des conditions dans lesquelles leurs minéraux ne sont pas stables : elles se transforment lentement. Ces transformations, à l'échelle de milliers ou de millions d'années, façonnent les reliefs et les paysages.",
                "On distingue deux processus complémentaires. L'altération transforme la roche sur place : elle la fragmente (altération physique) ou modifie la nature chimique de ses minéraux (altération chimique), souvent avec l'aide des êtres vivants (altération biologique). L'érosion enlève ensuite les produits de l'altération et les déplace, sous l'action de la gravité, de l'eau, du vent ou de la glace. Dans le langage courant, le mot érosion désigne souvent l'ensemble de ces processus.",
                "L'eau est l'agent principal : elle s'infiltre dans les fissures, gèle, dissout et transforme les minéraux, ruisselle et emporte les particules. Les reliefs jeunes et élevés, comme les Alpes, sont fortement attaqués ; des massifs anciens comme le Massif armoricain ou le Massif central, restes d'une chaîne de montagnes formée il y a plus de 300 millions d'années, ont été aplanis par une très longue érosion.",
              ],
              box: { label: "Définition", text: "L'altération est l'ensemble des transformations physiques, chimiques et biologiques subies sur place par une roche au contact de l'atmosphère, de l'eau et des êtres vivants. L'érosion est l'enlèvement et le déplacement des produits de cette altération par la gravité, l'eau, le vent ou la glace." },
            },
            {
              heading: "L'altération physique : la roche se fragmente",
              paragraphs: [
                "L'altération physique, ou désagrégation, découpe la roche en fragments sans changer la nature de ses minéraux. En montagne, l'eau qui s'infiltre dans les fissures gèle la nuit et augmente de volume d'environ 9 % : la glace agit comme un coin qui élargit la fissure. Répétée à chaque cycle de gel et de dégel, cette action, la cryoclastie (ou gélifraction), détache des blocs anguleux qui s'accumulent au pied des parois en éboulis.",
                "Dans les déserts, les fortes variations de température entre le jour et la nuit dilatent et contractent les minéraux, ce qui fragilise la roche (thermoclastie). Les êtres vivants participent aussi à la fragmentation : les racines des arbres s'insinuent dans les fissures et les élargissent en grossissant. La fragmentation augmente la surface de roche exposée à l'eau, ce qui accélère l'altération chimique.",
              ],
            },
            {
              heading: "L'altération chimique : l'exemple du granite",
              paragraphs: [
                "Le granite est une roche magmatique formée de trois types de minéraux visibles à l'œil nu : le quartz, grisâtre et vitreux ; les feldspaths, blancs ou roses ; les micas, noirs (biotite) ou blancs et brillants (muscovite). L'eau de pluie, légèrement acide parce qu'elle contient du dioxyde de carbone dissous et des acides produits par les êtres vivants du sol, réagit lentement avec certains de ces minéraux : c'est l'hydrolyse.",
                "Les feldspaths et la biotite sont transformés en argiles, de très fines particules (quelques micromètres), et libèrent des ions (potassium, sodium, calcium, magnésium) qui partent en solution dans l'eau. Le fer de la biotite s'oxyde et colore la roche en ocre ou en rouille. Le quartz, lui, résiste presque totalement. Privée de la cohésion que lui donnaient les feldspaths, la roche se désagrège en un sable grossier, l'arène granitique, formé de grains de quartz, de feldspaths en partie altérés et d'argiles.",
                "L'altération progresse plus vite le long des fractures (diaclases), où l'eau circule. Entre ces fractures, des noyaux de granite sain s'arrondissent peu à peu. Quand l'érosion évacue l'arène, ces boules de granite apparaissent en surface et forment des chaos granitiques, comme au Sidobre (Tarn), à Huelgoat (Finistère) ou sur la côte de granit rose, à Ploumanac'h.",
              ],
              box: { label: "Repère", text: "Altération du granite : quartz, très résistant, inchangé ; feldspaths, transformés en argiles avec libération d'ions en solution ; biotite, transformée en argiles et en oxydes de fer. Produit : l'arène granitique (quartz, argiles, ions emportés par l'eau)." },
            },
            {
              heading: "La dissolution du calcaire et les paysages karstiques",
              paragraphs: [
                "Le calcaire est une roche sédimentaire composée principalement de carbonate de calcium (CaCO₃). L'eau de pluie, enrichie en dioxyde de carbone dans l'atmosphère et surtout dans le sol, le dissout : le carbonate de calcium passe en solution sous forme d'ions calcium et d'ions hydrogénocarbonate. Plus l'eau contient de dioxyde de carbone, plus la dissolution est efficace ; un sol couvert de végétation, riche en dioxyde de carbone produit par la respiration des racines et des microorganismes, l'accélère.",
                "La dissolution crée un paysage particulier, le karst : surfaces creusées de rigoles (lapiaz), dépressions fermées (dolines), gouffres, grottes et rivières souterraines, comme dans les Causses ou au gouffre de Padirac (Lot). Dans les grottes, l'eau chargée d'ions perd une partie de son dioxyde de carbone au contact de l'air : la réaction s'inverse, du carbonate de calcium précipite et construit lentement stalactites et stalagmites.",
              ],
              box: { label: "Formule", text: "Dissolution du calcaire : CaCO₃ + H₂O + CO₂ → Ca²⁺ + 2 HCO₃⁻. La réaction inverse, lorsque l'eau perd du CO₂, fait précipiter le carbonate de calcium (stalactites, stalagmites)." },
            },
            {
              heading: "Les facteurs de l'altération et de l'érosion",
              paragraphs: [
                "Le climat joue un rôle majeur : l'altération chimique est très rapide en climat chaud et humide, où elle peut produire des dizaines de mètres de roche altérée ; en climat froid, la cryoclastie domine ; en climat aride, le vent et les écarts de température prennent le relais. La nature de la roche compte aussi : le quartz résiste, le calcaire se dissout, le granite s'arénise, une roche très fracturée s'altère plus vite qu'une roche massive.",
                "Le relief intervient par la pente : sur des versants raides, les produits de l'altération sont évacués rapidement, ce qui expose sans cesse de la roche fraîche. Enfin, la couverture végétale protège les sols : le feuillage freine les gouttes de pluie, les racines retiennent les particules. Là où la végétation disparaît, l'érosion s'accélère fortement.",
              ],
            },
          ],
          keyPoints: [
            "Altération : transformation sur place (physique, chimique, biologique). Érosion : enlèvement et transport des produits de l'altération.",
            "L'eau est l'agent principal : gel dans les fissures (cryoclastie), hydrolyse, dissolution, ruissellement.",
            "Granite : le quartz résiste, les feldspaths et la biotite donnent des argiles et des ions ; la roche devient arène, puis boules et chaos.",
            "Calcaire : CaCO₃ + H₂O + CO₂ → Ca²⁺ + 2 HCO₃⁻ ; dissolution à l'origine du karst (dolines, gouffres, grottes).",
            "Facteurs : climat (chaud et humide pour l'altération chimique), roche, pente, végétation.",
          ],
          example: {
            statement: "Dans une carrière, on observe de haut en bas : 1) un sable grossier, friable, contenant des grains de quartz intacts, des feldspaths blanchâtres qui s'effritent sous l'ongle et des paillettes ocre ; 2) des boules de granite dur entourées de ce sable ; 3) un granite massif et dur, aux feldspaths brillants. Expliquez ces observations.",
            solution: [
              "Identifier la roche de départ : le niveau 3 est du granite sain (quartz, feldspaths brillants, micas), non altéré.",
              "Identifier le niveau 1 : c'est l'arène granitique, produit de l'altération du granite.",
              "Expliquer la composition de l'arène : le quartz, résistant, est intact ; les feldspaths, transformés en partie en argiles par l'hydrolyse, deviennent ternes et friables ; la couleur ocre provient de l'oxydation du fer de la biotite.",
              "Expliquer le niveau 2 : l'eau circule d'abord le long des fractures, où l'altération progresse ; entre elles subsistent des noyaux de granite sain, arrondis, les futures boules d'un chaos.",
              "Relier à la profondeur : l'altération, due à l'eau venue de la surface, est d'autant plus avancée qu'on est près de la surface.",
              "Réponse : de bas en haut, on passe du granite sain à des boules entourées d'arène, puis à une arène complète : l'altération par l'eau progresse de la surface vers la profondeur et le long des fractures, en transformant feldspaths et micas mais pas le quartz.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque phénomène dans l'altération physique, chimique ou biologique (un phénomène peut relever de deux catégories), et nommez-le si possible : a) l'eau gèle dans une fissure de rocher en montagne ; b) une eau acide transforme les feldspaths d'un granite en argiles ; c) les racines d'un pin élargissent une fente dans une falaise ; d) une eau chargée de CO₂ creuse une doline dans un plateau calcaire ; e) les acides produits par des lichens attaquent la surface d'une roche.",
              hint: "Demandez-vous si la nature des minéraux change (chimique) ou si la roche est seulement fragmentée (physique), et si un être vivant intervient (biologique).",
              solution: [
                "a) Altération physique : la cryoclastie (gélifraction), fragmentation par le gel de l'eau.",
                "b) Altération chimique : l'hydrolyse des feldspaths, qui donne des argiles et des ions en solution.",
                "c) Altération physique et biologique : un être vivant fragmente la roche, sans en changer les minéraux.",
                "d) Altération chimique : la dissolution du calcaire (CaCO₃ + H₂O + CO₂ → Ca²⁺ + 2 HCO₃⁻).",
                "e) Altération chimique et biologique : des êtres vivants produisent des acides qui modifient les minéraux.",
                "Résultat : physique : a, c ; chimique : b, d, e ; biologique : c, e.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On compare un bloc de granite sain de 1 000 g et le même volume d'arène issue de ce granite. Granite sain : quartz 300 g, feldspaths 600 g, micas 100 g. Arène : quartz 300 g, feldspaths 250 g, micas 30 g, argiles 260 g. a) Calculez la masse totale de l'arène. b) Quel minéral n'a pas été modifié ? c) Calculez le pourcentage de feldspaths altérés. d) Calculez la masse de matière disparue et expliquez sous quelle forme elle a quitté la roche.",
              hint: "Comparez minéral par minéral. La matière qui manque n'a pas disparu : pensez à ce que l'eau emporte lors de l'hydrolyse.",
              solution: [
                "a) Masse de l'arène : 300 + 250 + 30 + 260 = 840 g.",
                "b) Le quartz : 300 g dans le granite comme dans l'arène ; il résiste à l'altération.",
                "c) Feldspaths altérés : 600 - 250 = 350 g, soit 350 ÷ 600 × 100 ≈ 58 % des feldspaths de départ.",
                "d) Masse disparue : 1 000 - 840 = 160 g. Les feldspaths et micas ont perdu 350 + 70 = 420 g ; 260 g se retrouvent sous forme d'argiles, et les 160 g restants ont été emportés par l'eau sous forme d'ions en solution (potassium, sodium, calcium, magnésium...).",
                "Résultat : l'arène pèse 840 g ; le quartz est intact, environ 58 % des feldspaths sont altérés, et 160 g de matière sont partis en solution.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique à partir de documents. Document 1 (données fictives) : vitesse d'abaissement de la surface d'un plateau calcaire par dissolution : région A, climat tempéré humide et couvert forestier : 0,05 mm par an ; région B, même climat mais sol nu : 0,03 mm par an ; région C, climat froid et sec : 0,01 mm par an. Document 2 : la respiration des racines et des microorganismes enrichit l'air et l'eau du sol en dioxyde de carbone. Document 3 : réaction de dissolution du calcaire : CaCO₃ + H₂O + CO₂ → Ca²⁺ + 2 HCO₃⁻. a) Calculez, pour chaque région, le temps nécessaire pour abaisser la surface de 10 m. b) Expliquez la différence entre A et C. c) Expliquez la différence entre A et B à l'aide des documents 2 et 3.",
              hint: "Convertissez 10 m en millimètres avant de diviser par la vitesse. Pour c), cherchez quel réactif de la réaction est plus abondant sous une forêt.",
              solution: [
                "a) 10 m = 10 000 mm. Région A : 10 000 ÷ 0,05 = 200 000 ans. Région B : 10 000 ÷ 0,03 ≈ 333 000 ans. Région C : 10 000 ÷ 0,01 = 1 000 000 ans.",
                "b) A et C diffèrent par le climat : la dissolution exige de l'eau liquide, abondante dans un climat humide et rare dans un climat sec et froid, où l'eau est souvent gelée. La dissolution est donc cinq fois plus rapide en A qu'en C.",
                "c) A et B ont le même climat mais diffèrent par la végétation. D'après le document 2, sous la forêt, la respiration des racines et des microorganismes enrichit l'eau du sol en CO₂. D'après le document 3, le CO₂ est un réactif de la dissolution : plus l'eau en contient, plus elle dissout de calcaire.",
                "Conclusion : le climat (quantité d'eau liquide) et la végétation (apport de CO₂ par le sol) contrôlent la vitesse de dissolution : 10 m de calcaire disparaissent en 200 000 ans sous une forêt tempérée, contre un million d'années en climat froid et sec.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Cryoclastie", right: "Fragmentation d'une roche par le gel de l'eau dans ses fissures" },
              { left: "Hydrolyse", right: "Transformation des feldspaths en argiles par l'eau, avec libération d'ions" },
              { left: "Arène granitique", right: "Sable grossier issu de l'altération du granite" },
              { left: "Chaos granitique", right: "Amas de boules de granite dégagées par l'érosion de l'arène" },
              { left: "Doline", right: "Dépression fermée creusée par la dissolution du calcaire" },
              { left: "Éboulis", right: "Accumulation de blocs anguleux au pied d'une paroi" },
            ],
          },
          quiz: [
            {
              q: "Quel minéral du granite résiste le mieux à l'altération ?",
              options: ["Le feldspath", "La biotite", "Le quartz", "Aucun, ils s'altèrent tous à la même vitesse"],
              answer: 2,
              why: "Le quartz est presque inaltérable ; il se retrouve intact dans l'arène, puis dans les sables.",
            },
            {
              q: "Que deviennent les feldspaths lors de l'altération chimique du granite ?",
              options: ["Des grains de quartz plus petits et plus durs", "Des argiles et des ions en solution", "Du calcaire déposé dans les fissures", "Des micas noirs"],
              answer: 1,
              why: "L'hydrolyse transforme les feldspaths en argiles et libère des ions emportés par l'eau.",
            },
            {
              q: "Pourquoi l'eau qui gèle dans une fissure fragmente-t-elle la roche ?",
              options: ["Elle dissout les minéraux", "Elle augmente de volume", "Elle devient acide", "Elle refroidit les minéraux, qui rétrécissent"],
              answer: 1,
              why: "En gelant, l'eau augmente de volume d'environ 9 % et élargit la fissure comme un coin : c'est la cryoclastie.",
            },
            {
              q: "Quel gaz dissous dans l'eau permet la dissolution du calcaire ?",
              options: ["Le dioxyde de carbone", "Le dioxygène", "Le diazote", "Le méthane"],
              answer: 0,
              why: "Selon la réaction CaCO₃ + H₂O + CO₂ → Ca²⁺ + 2 HCO₃⁻, le CO₂ dissous rend l'eau capable de dissoudre le carbonate de calcium.",
            },
            {
              q: "Dans quel climat l'altération chimique est-elle la plus rapide ?",
              options: ["Froid et sec", "Froid et humide", "Chaud et sec", "Chaud et humide"],
              answer: 3,
              why: "L'eau abondante et la température élevée accélèrent les réactions chimiques entre l'eau et les minéraux.",
            },
          ],
          trap: "Confondre altération et érosion : l'altération transforme la roche sur place, l'érosion enlève et déplace ses produits. Autre erreur fréquente : croire que le quartz s'altère en argiles, alors que ce sont les feldspaths et les micas.",
          method: "Pour décrire l'altération d'une roche, faites un tableau à trois colonnes : minéral de départ, devenir (inchangé, transformé en argiles, dissous), produit final. Pour le granite, il doit contenir le quartz, les feldspaths et la biotite.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'transport-sedimentation',
          title: "Transport, sédimentation et formation des roches sédimentaires",
          minutes: 35,
          objectives: [
            "Identifier les agents de transport (gravité, eau, vent, glace) et les modes de transport des particules et des ions.",
            "Exploiter le diagramme de Hjulström pour relier la vitesse du courant, la taille des particules et leur érosion, leur transport ou leur dépôt.",
            "Expliquer le tri des sédiments et la formation de couches sédimentaires dans les zones de dépôt.",
            "Expliquer la transformation des sédiments en roches sédimentaires (diagenèse) et nommer les principales roches formées.",
          ],
          course: [
            {
              heading: "Les agents et les modes de transport",
              paragraphs: [
                "Les produits de l'altération sont déplacés par quatre agents. La gravité fait tomber ou glisser les matériaux sur les pentes : chutes de blocs, éboulis, glissements de terrain. L'eau courante est l'agent le plus important : ruisseaux, rivières et fleuves transportent chaque année d'énormes quantités de matériaux vers les lacs et les océans. Le vent déplace les sables et les poussières, et construit les dunes. Les glaciers, enfin, emportent des débris de toutes tailles, des argiles aux blocs de plusieurs mètres.",
                "Une rivière transporte les matériaux de trois façons. Les ions issus de l'altération chimique voyagent dissous, invisibles. Les particules les plus fines, argiles et limons, restent en suspension et rendent l'eau trouble. Les plus grosses, sables, graviers et galets, roulent ou rebondissent sur le fond : c'est le charriage. En se heurtant, ces fragments s'usent et s'arrondissent : un galet bien arrondi a parcouru une longue distance, un fragment anguleux a peu voyagé. Le glacier, lui, transporte sans trier ni arrondir : ses dépôts, les moraines, mélangent toutes les tailles.",
              ],
              box: { label: "Repère", text: "Tailles des particules (convention courante) : argiles, moins de 4 µm ; limons (silts), de 4 µm à 63 µm ; sables, de 63 µm à 2 mm ; graviers et galets, plus de 2 mm ; au-delà de quelques dizaines de centimètres, on parle de blocs." },
            },
            {
              heading: "Vitesse du courant et taille des particules : le diagramme de Hjulström",
              paragraphs: [
                "En 1935, le géographe suédois Filip Hjulström a représenté sur un diagramme le comportement des particules dans un cours d'eau en fonction de deux grandeurs : leur taille (en abscisse) et la vitesse du courant (en ordonnée). Deux courbes y délimitent trois domaines. Au-dessus de la courbe supérieure, le courant arrache les particules du fond : c'est l'érosion. Entre les deux courbes, les particules déjà en mouvement continuent d'être transportées. Sous la courbe inférieure, elles se déposent : c'est la sédimentation.",
                "Pour les particules plus grosses que les sables fins, le diagramme se lit simplement : plus une particule est grosse, plus il faut un courant rapide pour la mettre en mouvement, et plus elle se dépose tôt quand le courant ralentit. Les sables fins, de quelques dixièmes de millimètre, sont les plus faciles à arracher. Les argiles et les limons forment une exception : collées entre elles, ces particules très fines résistent à l'arrachement et exigent un courant rapide pour être érodées, mais une fois en suspension, elles ne se déposent que dans une eau presque immobile.",
              ],
              box: { label: "Propriété", text: "Quand la vitesse du courant diminue, les particules se déposent dans l'ordre de leur taille : d'abord les blocs et les galets, puis les graviers, les sables, et en dernier les limons et les argiles, qui exigent une eau presque immobile. Les ions dissous ne se déposent pas par ralentissement." },
            },
            {
              heading: "La sédimentation : où et comment les sédiments se déposent",
              paragraphs: [
                "Les sédiments se déposent là où le courant ralentit : à l'intérieur des méandres, dans les plaines inondées lors des crues, à l'entrée des lacs, dans les deltas et les estuaires, et surtout au fond des mers. Le long d'un cours d'eau, les dépôts sont donc triés : galets dans le torrent de montagne, graviers et sables dans la rivière de plaine, limons et argiles dans le delta et au large. Après une crue, une couche peut aussi montrer des grains de plus en plus fins vers le haut, à mesure que le courant faiblissait : c'est un granoclassement.",
                "Les ions dissous arrivent jusqu'à la mer, où ils peuvent être extraits de l'eau. De nombreux êtres vivants, coquillages, coraux, algues microscopiques, utilisent les ions calcium et hydrogénocarbonate pour fabriquer leur squelette ou leur coquille en carbonate de calcium ; à leur mort, ces restes s'accumulent au fond. Dans les lagunes où l'eau s'évapore fortement, des sels précipitent : gypse, sel gemme. Les sédiments s'empilent en couches horizontales, les strates, et forment au fil du temps des séries épaisses de centaines de mètres.",
              ],
              box: { label: "Principe", text: "Principe de superposition, énoncé par Nicolas Sténon en 1669 : dans une série de couches sédimentaires non déformées, une couche est plus récente que celle qu'elle recouvre et plus ancienne que celle qui la recouvre." },
            },
            {
              heading: "De la boue à la roche : la diagenèse",
              paragraphs: [
                "Un sédiment fraîchement déposé est meuble et gorgé d'eau. Recouvert par de nouvelles couches, il s'enfonce et subit le poids des dépôts supérieurs : les grains se rapprochent, l'eau est expulsée et le volume des vides diminue, c'est la compaction. L'eau qui circule entre les grains dépose ensuite des minéraux (calcite, silice) qui les soudent entre eux, c'est la cimentation. L'ensemble de ces transformations, qui se déroulent sur des milliers à des millions d'années, s'appelle la diagenèse.",
                "La diagenèse transforme chaque type de sédiment en une roche sédimentaire : un sable devient un grès ; des galets et des graviers cimentés forment un conglomérat (poudingue si les éléments sont arrondis, brèche s'ils sont anguleux) ; des argiles donnent une argilite ; des boues et des débris de coquilles calcaires donnent un calcaire. La craie, comme celle des falaises d'Étretat, est un calcaire formé presque entièrement de minuscules plaques calcaires d'algues microscopiques, les coccolithes.",
              ],
              box: { label: "À retenir", text: "Diagenèse = compaction (expulsion de l'eau) + cimentation (précipitation de minéraux entre les grains). Sable → grès ; galets → conglomérat ; argiles → argilite ; boues et coquilles calcaires → calcaire ; coccolithes → craie." },
            },
          ],
          keyPoints: [
            "Agents de transport : gravité, eau (agent principal), vent, glace.",
            "Une rivière transporte les ions dissous, les argiles et limons en suspension, les sables et galets par charriage.",
            "Diagramme de Hjulström : plus une particule est grosse, plus il faut de vitesse pour la déplacer ; les argiles cohésives font exception à l'érosion.",
            "Quand le courant ralentit, les particules se déposent de la plus grosse à la plus fine : les sédiments sont triés.",
            "Principe de superposition (Sténon, 1669) : une couche est plus récente que celle qu'elle recouvre.",
            "Diagenèse : compaction puis cimentation. Sable → grès, galets → conglomérat, argiles → argilite, coquilles → calcaire.",
          ],
          example: {
            statement: "Données simplifiées (valeurs fictives arrondies, de l'ordre de celles du diagramme de Hjulström). Seuil d'érosion et seuil de dépôt : limon (0,02 mm), érodé au-dessus de 40 cm/s, déposé sous 0,2 cm/s ; sable fin (0,2 mm), érodé au-dessus de 20 cm/s, déposé sous 2 cm/s ; sable grossier (1 mm), érodé au-dessus de 30 cm/s, déposé sous 10 cm/s ; gravier (10 mm), érodé au-dessus de 100 cm/s, déposé sous 70 cm/s. Une rivière coule à 50 cm/s sur un fond qui contient ces quatre types de particules. Lesquelles sont érodées ? Que se passe-t-il ensuite si le courant ralentit à 5 cm/s ?",
            solution: [
              "Méthode : une particule au repos est érodée si la vitesse dépasse son seuil d'érosion ; une particule en mouvement se dépose si la vitesse descend sous son seuil de dépôt.",
              "À 50 cm/s : le limon (seuil 40), le sable fin (20) et le sable grossier (30) sont érodés, car 50 dépasse leur seuil. Le gravier (seuil 100) n'est pas érodé : il reste sur le fond.",
              "À 5 cm/s, pour les particules transportées : le sable grossier se dépose, car 5 est inférieur à son seuil de dépôt de 10 cm/s.",
              "Le sable fin (dépôt sous 2 cm/s) et le limon (dépôt sous 0,2 cm/s) restent transportés, car 5 cm/s dépasse leur seuil de dépôt.",
              "Réponse : à 50 cm/s, le courant emporte limon, sable fin et sable grossier, mais pas le gravier ; à 5 cm/s, seul le sable grossier se dépose, les particules plus fines poursuivent leur voyage : les sédiments sont triés selon leur taille.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Nommez la roche sédimentaire formée par la diagenèse de chacun des sédiments suivants : un sable ; des galets arrondis ; une boue argileuse ; une accumulation de coquilles calcaires. b) Que peut-on dire de la distance de transport de galets très arrondis ? de fragments anguleux ? c) Un dépôt mélange des argiles, des galets et des blocs anguleux de plusieurs mètres, sans aucun tri. Quel agent de transport l'a probablement déposé ?",
              hint: "Pour c), pensez à l'agent qui transporte tout ensemble, sans trier les tailles ni arrondir les fragments.",
              solution: [
                "a) Sable → grès ; galets arrondis → conglomérat (poudingue) ; boue argileuse → argilite ; coquilles calcaires → calcaire.",
                "b) Des galets très arrondis ont été longuement usés par les chocs : ils ont parcouru une grande distance, en général dans un cours d'eau. Des fragments anguleux ont peu voyagé.",
                "c) L'absence de tri et la présence de blocs anguleux de grande taille mêlés à des argiles indiquent un transport par un glacier : c'est une moraine.",
                "Résultat : grès, conglomérat, argilite, calcaire ; arrondi signifie long transport ; un dépôt non trié avec de gros blocs anguleux est d'origine glaciaire.",
              ],
            },
            {
              level: 2,
              statement: "Données simplifiées (valeurs fictives arrondies) : argile (0,002 mm), érodée au-dessus de 150 cm/s, déposée sous 0,01 cm/s ; limon, érodé au-dessus de 40 cm/s, déposé sous 0,2 cm/s ; sable fin, 20 cm/s et 2 cm/s ; sable grossier, 30 cm/s et 10 cm/s ; gravier, 100 cm/s et 70 cm/s. Un torrent coule à 120 cm/s, puis devient une rivière de plaine à 8 cm/s, qui forme un delta où l'eau coule à 1 cm/s, avant de se jeter dans un lac où elle est presque immobile (0,005 cm/s). Toutes les particules sont présentes dans le torrent. a) Le torrent peut-il arracher l'argile de son lit ? le gravier ? b) Indiquez, pour chaque particule transportée, l'endroit où elle se dépose. c) Quelle propriété des dépôts mettez-vous ainsi en évidence ?",
              hint: "Comparez chaque vitesse au seuil de dépôt de chaque particule, en commençant par la plus grosse. Une particule se dépose au premier endroit où la vitesse passe sous son seuil.",
              solution: [
                "a) À 120 cm/s, le gravier est arraché (seuil 100 cm/s), mais pas l'argile du lit (seuil 150 cm/s), car les argiles sont cohésives. L'argile déjà en suspension, apportée par le ruissellement, est en revanche transportée.",
                "b) Rivière de plaine (8 cm/s) : le gravier (dépôt sous 70) et le sable grossier (dépôt sous 10) se déposent.",
                "Delta (1 cm/s) : le sable fin se dépose (1 est inférieur à 2) ; le limon (0,2) et l'argile (0,01) restent en suspension.",
                "Lac (0,005 cm/s) : le limon et l'argile se déposent enfin, car 0,005 est inférieur à 0,2 et à 0,01.",
                "c) Les particules se déposent de la plus grosse à la plus fine à mesure que le courant ralentit : les sédiments sont triés le long du cours d'eau.",
                "Résultat : graviers et sables grossiers dans la plaine, sables fins dans le delta, limons et argiles au fond du lac.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique à partir de documents. Document 1 : dans une falaise, on observe quatre couches horizontales, de bas en haut : couche 1, un conglomérat à galets bien arrondis ; couche 2, un grès ; couche 3, une argilite ; couche 4, un calcaire riche en coquilles fossiles d'animaux marins. Document 2 : aujourd'hui, sur un littoral, on trouve des galets sur la plage, des sables près du rivage, des boues argileuses plus au large, et des boues calcaires riches en coquilles loin des apports des fleuves. a) Classez les couches de la plus ancienne à la plus récente en citant le principe utilisé. b) Expliquez comment le sable de la couche 2 est devenu un grès. c) Proposez, à l'aide du document 2, une reconstitution de l'évolution du milieu de dépôt au cours du temps.",
              hint: "Associez chaque roche au sédiment dont elle provient, puis à l'endroit du littoral actuel où ce sédiment se dépose. Le présent sert de clé pour comprendre le passé.",
              solution: [
                "a) D'après le principe de superposition (Sténon, 1669), dans des couches non déformées, la plus basse est la plus ancienne : couche 1, puis 2, puis 3, puis 4 (la plus récente).",
                "b) Le sable déposé a été recouvert par d'autres sédiments. Sous leur poids, les grains se sont rapprochés et l'eau a été expulsée (compaction) ; puis des minéraux, calcite ou silice, ont précipité entre les grains et les ont soudés (cimentation). Cette diagenèse a transformé le sable meuble en grès.",
                "c) Chaque roche provient d'un sédiment : galets (couche 1), sables (couche 2), argiles (couche 3), boues calcaires à coquilles marines (couche 4). D'après le document 2, ces sédiments se déposent de plus en plus loin du rivage.",
                "En un même lieu, on est donc passé d'un dépôt de plage à des dépôts de plus en plus éloignés du rivage : la mer a progressivement avancé sur le continent et le milieu est devenu de plus en plus profond.",
                "Conclusion : de la couche 1 à la couche 4, la succession galets, sables, argiles, calcaires marins traduit un éloignement progressif du rivage, donc une avancée de la mer sur ce site au cours du temps.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui mènent du granite d'une montagne à un grès.",
            items: [
              "Le granite du relief s'altère en arène sous l'action de l'eau.",
              "Le ruissellement arrache les grains de l'arène : c'est l'érosion.",
              "La rivière transporte les grains de quartz, qui s'usent et sont triés.",
              "Le courant ralentit et les sables se déposent dans un bassin.",
              "De nouvelles couches les recouvrent : les grains sont compactés et l'eau expulsée.",
              "Des minéraux précipitent entre les grains et les soudent : le sable devient un grès.",
            ],
          },
          quiz: [
            {
              q: "Comment une rivière transporte-t-elle les ions issus de l'altération chimique ?",
              options: ["En suspension", "Par charriage sur le fond", "Dissous dans l'eau", "Par saltation"],
              answer: 2,
              why: "Les ions sont en solution : ils voyagent dissous jusqu'aux lacs et aux océans, où ils peuvent précipiter.",
            },
            {
              q: "Quand le courant d'une rivière ralentit, quelles particules se déposent en premier ?",
              options: ["Les argiles", "Les galets", "Les limons", "Les sables fins"],
              answer: 1,
              why: "Les particules les plus grosses ont besoin du courant le plus fort pour être transportées : elles se déposent les premières.",
            },
            {
              q: "Quelle roche se forme par la diagenèse d'un sable ?",
              options: ["Un grès", "Une argilite", "Un granite", "Une craie"],
              answer: 0,
              why: "Compactés puis cimentés, les grains de sable forment un grès.",
            },
            {
              q: "Selon le principe de superposition, dans une série de couches non déformées :",
              options: ["La couche la plus épaisse est la plus ancienne", "La couche la plus haute est la plus ancienne", "Toutes les couches ont le même âge", "La couche la plus basse est la plus ancienne"],
              answer: 3,
              why: "Chaque couche se dépose sur la précédente ; la plus basse s'est donc déposée en premier.",
            },
            {
              q: "Que désigne la compaction lors de la diagenèse ?",
              options: ["Le dépôt de calcite entre les grains", "Le rapprochement des grains et l'expulsion de l'eau", "Le dépôt de calcite ou de silice qui soude les grains entre eux", "La dissolution du calcaire"],
              answer: 1,
              why: "Sous le poids des couches supérieures, les grains se rapprochent et l'eau est chassée ; la cimentation vient ensuite.",
            },
          ],
          trap: "Croire que les particules les plus fines sont toujours les plus faciles à arracher : les argiles, cohésives, exigent un courant rapide pour être érodées, même si elles ne se déposent ensuite que dans une eau presque immobile.",
          method: "Pour lire le diagramme de Hjulström, placez d'abord le point (taille, vitesse), puis demandez-vous si la particule est au repos (franchit-elle la courbe d'érosion ?) ou déjà en mouvement (passe-t-elle sous la courbe de dépôt ?). Écrivez toujours la valeur lue et le seuil comparé.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'paysages-activites-humaines',
          title: "Les activités humaines et la dynamique des paysages",
          minutes: 25,
          objectives: [
            "Identifier les effets des activités humaines sur l'érosion, le transport et la sédimentation : déforestation, urbanisation, barrages, extractions, aménagements du littoral.",
            "Expliquer qu'un barrage ou une extraction de granulats crée un déficit de sédiments en aval et sur le littoral.",
            "Citer les usages des roches sédimentaires comme ressources (granulats, calcaire, argile, gypse) et les enjeux de leur exploitation.",
            "Argumenter sur des choix d'aménagement en tenant compte des risques et de la dynamique naturelle des paysages.",
          ],
          course: [
            {
              heading: "Les roches et les sédiments, des ressources",
              paragraphs: [
                "Les produits de l'érosion et les roches sédimentaires sont des ressources essentielles. Les granulats, sables et graviers, entrent dans la fabrication du béton et dans les routes ; le calcaire, chauffé avec de l'argile, donne le ciment, et seul, la chaux ; l'argile sert à fabriquer briques, tuiles et céramiques ; le sable riche en quartz sert à fabriquer le verre ; le gypse donne le plâtre. Selon le Programme des Nations unies pour l'environnement, le sable et les graviers sont, après l'eau, la ressource naturelle la plus exploitée au monde en volume.",
                "Ces matériaux sont extraits dans des carrières de roches dures concassées, dans les anciens dépôts des rivières (alluvions, terrasses) ou en mer. Leur formation par altération, transport et sédimentation a demandé des milliers à des millions d'années : à l'échelle d'une vie humaine, ce sont des ressources non renouvelables. Leur extraction modifie en outre les paysages et la dynamique des cours d'eau et des côtes.",
              ],
              box: { label: "À retenir", text: "Ressources issues de l'érosion et de la sédimentation : granulats (béton, routes), calcaire (ciment, chaux), argile (briques, tuiles), sable de quartz (verre), gypse (plâtre). Formées en des milliers à des millions d'années, elles ne sont pas renouvelables à l'échelle humaine." },
            },
            {
              heading: "Barrages et extractions : des rivières privées de sédiments",
              paragraphs: [
                "Un barrage ralentit l'eau dans sa retenue : les sédiments transportés s'y déposent, et la retenue s'envase peu à peu, ce qui réduit son volume utile. En aval, l'eau, privée de sa charge, conserve son énergie et arrache les matériaux de son lit et de ses berges : le lit s'enfonce, c'est l'incision. Plus loin, les deltas et les plages ne reçoivent plus assez de sédiments pour compenser l'érosion par la mer et reculent. Depuis la construction du haut barrage d'Assouan, achevé en 1970, le Nil n'apporte presque plus de sédiments à son delta, dont certaines côtes reculent.",
                "Les extractions de granulats dans le lit des rivières ont des effets semblables : elles creusent le lit, abaissent le niveau de la nappe d'eau souterraine voisine et fragilisent les ouvrages. L'effondrement du pont Wilson, à Tours, en 1978, a été relié à l'abaissement du lit de la Loire. En France, les extractions dans le lit mineur des cours d'eau sont interdites depuis 1994 ; les granulats proviennent désormais surtout de carrières hors du lit, de roches concassées et, de plus en plus, du recyclage de matériaux de démolition.",
              ],
              box: { label: "Propriété", text: "Un barrage piège les sédiments dans sa retenue (envasement) et crée en aval un déficit de sédiments : incision du lit, érosion des berges, recul des deltas et des plages." },
            },
            {
              heading: "Sols, versants et villes : un ruissellement accéléré",
              paragraphs: [
                "La végétation protège les sols contre l'érosion. Lorsqu'on défriche une forêt, qu'on laisse un sol nu entre deux cultures ou qu'on fait pâturer trop d'animaux sur un versant, la pluie frappe directement le sol, l'eau ruisselle au lieu de s'infiltrer et emporte les particules : l'érosion des sols peut être multipliée par un facteur considérable. Elle produit des ravines, des coulées de boue, et envase les rivières en aval.",
                "En ville, les toits, les routes et les parkings imperméabilisent le sol : l'eau de pluie ne s'infiltre plus et rejoint très vite les cours d'eau, ce qui aggrave les crues soudaines. Les terrassements, les routes taillées dans les versants et l'urbanisation de pentes instables peuvent aussi déclencher des glissements de terrain. À l'inverse, des aménagements comme les terrasses de culture, les haies ou les bandes enherbées ralentissent le ruissellement et retiennent les sols.",
              ],
            },
            {
              heading: "Le littoral, un paysage en mouvement",
              paragraphs: [
                "Une côte sableuse est alimentée par les sédiments des fleuves et par l'érosion des falaises voisines ; les vagues qui arrivent en biais déplacent le sable le long du rivage, c'est la dérive littorale. Le trait de côte avance là où les apports dépassent les pertes et recule ailleurs. Pour protéger une plage, on construit parfois des épis, des murets perpendiculaires au rivage : ils retiennent le sable d'un côté, mais privent la plage située en aval de la dérive, qui recule à son tour. Les digues et les enrochements protègent localement, mais reportent souvent l'érosion plus loin.",
                "Avec l'élévation du niveau de la mer liée au réchauffement climatique, le recul de certaines côtes s'accélère. D'autres solutions sont alors envisagées : recharger les plages en sable, laisser les dunes se reconstituer, ou déplacer les constructions menacées, ce que l'on appelle la relocalisation. L'immeuble du Signal, à Soulac-sur-Mer (Gironde), construit à environ deux cents mètres de la mer à la fin des années 1960, a dû être évacué en 2014 à cause du recul de la dune, puis démoli en 2023.",
                "Sur les rivières aussi, on cherche à restaurer la dynamique naturelle. Sur la Sélune, dans la Manche, deux barrages ont été démantelés entre la fin des années 2010 et le début des années 2020 pour rétablir la circulation des sédiments et des poissons migrateurs. Aménager durablement, c'est tenir compte de ces mouvements naturels de matière plutôt que de chercher à les arrêter partout.",
              ],
              box: { label: "À retenir", text: "Un aménagement modifie les flux de sédiments : ce qui est retenu à un endroit manque ailleurs. Les choix d'aménagement doivent tenir compte de la dynamique d'ensemble d'un cours d'eau ou d'une côte, des risques et des usages." },
            },
          ],
          keyPoints: [
            "Granulats, calcaire, argile, sable et gypse sont des ressources issues de l'érosion et de la sédimentation, non renouvelables à l'échelle humaine.",
            "Un barrage piège les sédiments : envasement de la retenue, incision du lit en aval, recul des deltas (Nil après Assouan, 1970).",
            "En France, l'extraction de granulats dans le lit mineur des cours d'eau est interdite depuis 1994.",
            "Déforestation, sols nus et urbanisation accélèrent le ruissellement, l'érosion des sols et les crues.",
            "Épis et digues protègent localement mais reportent l'érosion ; recharge en sable, dunes et relocalisation sont des alternatives.",
          ],
          example: {
            statement: "Données fictives. Avant la construction d'un barrage, une rivière apportait chaque année 1 200 000 tonnes de sédiments à son embouchure. Après la construction, elle n'en apporte plus que 180 000 tonnes. a) Calculez le pourcentage de sédiments retenus. b) Prévoyez les conséquences dans la retenue, dans le lit en aval et sur la plage de l'embouchure.",
            solution: [
              "Calculer la masse retenue : 1 200 000 - 180 000 = 1 020 000 tonnes par an.",
              "Calculer le pourcentage : 1 020 000 ÷ 1 200 000 × 100 = 85 %.",
              "Dans la retenue : l'eau ralentie dépose ses sédiments ; la retenue s'envase et son volume utile diminue chaque année.",
              "Dans le lit en aval : l'eau, privée de sa charge, arrache les matériaux du fond et des berges ; le lit s'enfonce (incision).",
              "Sur la plage : l'apport de sable ne compense plus l'érosion par les vagues ; la plage s'amincit et le trait de côte recule.",
              "Réponse : 85 % des sédiments sont retenus ; la retenue s'envase, le lit s'incise en aval, et la côte recule faute d'apports.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque activité humaine à sa conséquence principale sur la dynamique des paysages : activités : a) construction d'un barrage ; b) défrichement d'un versant ; c) imperméabilisation d'un quartier ; d) construction d'un épi sur une plage ; e) extraction de graviers dans le lit d'une rivière. Conséquences : 1) ruissellement accru et crues plus soudaines ; 2) recul de la plage voisine située en aval de la dérive littorale ; 3) envasement de la retenue et déficit de sédiments en aval ; 4) érosion accélérée des sols et coulées de boue ; 5) creusement du lit et abaissement de la nappe voisine.",
              hint: "Pour chaque activité, demandez-vous si elle retient des sédiments, en enlève, ou modifie la façon dont l'eau s'écoule.",
              solution: [
                "a) Barrage → 3) : les sédiments se déposent dans la retenue et manquent en aval.",
                "b) Défrichement → 4) : sans végétation, la pluie et le ruissellement emportent le sol.",
                "c) Imperméabilisation → 1) : l'eau ne s'infiltre plus et rejoint très vite les cours d'eau.",
                "d) Épi → 2) : le sable est retenu d'un côté de l'épi et manque de l'autre.",
                "e) Extraction de graviers → 5) : le lit s'enfonce et entraîne avec lui le niveau de la nappe.",
                "Résultat : a-3, b-4, c-1, d-2, e-5.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une retenue de barrage a une capacité de 50 millions de m³. La rivière y apporte 400 000 m³ de sédiments par an, dont 90 % se déposent dans la retenue. a) Calculez le volume de sédiments piégés chaque année. b) Au bout de combien d'années la moitié de la capacité de la retenue sera-t-elle comblée ? c) Calculez le volume de sédiments qui continue vers l'aval chaque année. d) Proposez une conséquence de ce déficit pour une plage située à l'embouchure.",
              hint: "Moitié de la capacité : 25 millions de m³. Divisez ce volume par le volume piégé chaque année.",
              solution: [
                "a) Volume piégé : 400 000 × 0,90 = 360 000 m³ par an.",
                "b) Moitié de la capacité : 50 000 000 ÷ 2 = 25 000 000 m³. Durée : 25 000 000 ÷ 360 000 ≈ 69,4 ans, soit environ 69 ans.",
                "c) Volume transmis vers l'aval : 400 000 - 360 000 = 40 000 m³ par an, soit seulement 10 % des apports.",
                "d) La plage de l'embouchure ne reçoit plus que 10 % du sable qu'elle recevait : l'érosion par les vagues n'est plus compensée, la plage s'amincit et le trait de côte recule.",
                "Résultat : 360 000 m³ piégés par an ; la moitié de la retenue est comblée en 69 ans environ ; 40 000 m³ seulement poursuivent vers l'aval.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique et argumentation à partir de documents. Document 1 (données fictives) : sur une côte sableuse où la dérive littorale va du nord vers le sud, une commune a construit en 2000 un épi pour protéger sa plage. Largeur de la plage au nord de l'épi : 30 m en 2000, 55 m en 2020 ; au sud de l'épi : 40 m en 2000, 10 m en 2020. Document 2 : un fleuve proche, qui alimentait cette côte en sable, est équipé de trois barrages depuis les années 1970. Document 3 : trois options sont discutées : A) construire un second épi plus au sud ; B) recharger chaque année la plage sud en sable ; C) déplacer progressivement les constructions menacées et laisser la dune se reconstituer. a) Calculez l'évolution moyenne annuelle de la largeur de chaque plage. b) Expliquez ces évolutions. c) Discutez les trois options et justifiez celle qui vous paraît la plus durable.",
              hint: "Un épi retient le sable apporté par la dérive du côté d'où elle vient. Pour c), examinez chaque option sous l'angle de la dynamique des sédiments, du coût et de la durée.",
              solution: [
                "a) Plage nord : (55 - 30) ÷ 20 = +1,25 m par an. Plage sud : (10 - 40) ÷ 20 = -1,5 m par an.",
                "b) La dérive littorale apporte le sable du nord : l'épi le bloque, il s'accumule au nord, qui s'élargit. Au sud, le sable n'arrive plus, mais les vagues continuent de l'emporter : la plage maigrit. Le document 2 ajoute une cause plus générale : les barrages retiennent le sable du fleuve et réduisent l'alimentation de toute la côte.",
                "c) Option A : un second épi protégerait la plage sud, mais reporterait le même déficit encore plus au sud, sans augmenter la quantité totale de sable disponible.",
                "Option B : la recharge compense le déficit et préserve la plage, mais elle doit être renouvelée chaque année, a un coût élevé et prélève du sable ailleurs.",
                "Option C : laisser la dune se reconstituer et éloigner les constructions accepte la mobilité naturelle du trait de côte ; c'est plus difficile socialement et coûteux au départ, mais c'est la solution qui ne crée pas de nouveau déficit.",
                "Conclusion argumentée : les options A et B traitent les effets localement ; l'option C, éventuellement combinée à une recharge transitoire, est la plus durable, car elle tient compte de la dynamique d'ensemble des sédiments (dérive littorale et apports réduits par les barrages).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : activités humaines et dynamique des paysages.",
            statements: [
              { text: "Un barrage retient une partie des sédiments transportés par la rivière.", true: true, why: "L'eau ralentit dans la retenue et y dépose ses sédiments, qui manquent ensuite en aval." },
              { text: "En aval d'un barrage, le lit de la rivière a tendance à se remplir de sédiments.", true: false, why: "C'est l'inverse : l'eau privée de sa charge arrache les matériaux du lit, qui s'enfonce (incision)." },
              { text: "Le sable et les graviers sont des ressources renouvelables à l'échelle d'une vie humaine.", true: false, why: "Ils se forment par altération, transport et sédimentation en des milliers à des millions d'années." },
              { text: "Un épi protège la plage située en aval de la dérive littorale.", true: false, why: "Il retient le sable du côté d'où vient la dérive ; la plage située en aval en est privée et recule." },
              { text: "L'imperméabilisation des sols en ville peut aggraver les crues.", true: true, why: "L'eau ne s'infiltre plus et rejoint très vite les cours d'eau." },
              { text: "Une haie en bas d'un champ en pente peut freiner l'érosion des sols.", true: true, why: "Elle ralentit le ruissellement et retient les particules arrachées au champ." },
              { text: "Le calcaire est la matière première du ciment.", true: true, why: "Le ciment est fabriqué en chauffant un mélange de calcaire et d'argile." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la conséquence d'un barrage sur la retenue située en amont ?",
              options: ["Elle se creuse", "Elle s'envase", "Elle se vide de ses sédiments", "Elle devient plus salée"],
              answer: 1,
              why: "L'eau ralentie y dépose ses sédiments, ce qui réduit peu à peu le volume utile de la retenue.",
            },
            {
              q: "Pourquoi certaines côtes du delta du Nil reculent-elles depuis les années 1970 ?",
              options: ["Le Nil apporte trop de sédiments", "Le climat est devenu plus humide", "Le barrage d'Assouan retient ses sédiments", "Les crues du Nil sont devenues plus violentes"],
              answer: 2,
              why: "Le haut barrage d'Assouan, achevé en 1970, piège les sédiments qui alimentaient le delta.",
            },
            {
              q: "Quelle roche sédimentaire sert à fabriquer le plâtre ?",
              options: ["Le gypse", "Le grès", "L'argilite", "La craie"],
              answer: 0,
              why: "Le gypse, une roche formée par évaporation de l'eau de mer, chauffé puis broyé, donne le plâtre.",
            },
            {
              q: "Depuis 1994, en France, l'extraction de granulats est interdite :",
              options: ["Dans toutes les carrières", "Sur les plages", "En mer", "Dans le lit mineur des cours d'eau"],
              answer: 3,
              why: "Ces extractions creusaient le lit des rivières, abaissaient les nappes et fragilisaient les ouvrages comme les ponts.",
            },
            {
              q: "Quel aménagement accepte la mobilité naturelle du trait de côte ?",
              options: ["Une digue en béton le long du rivage", "La relocalisation des constructions", "Un enrochement", "Une série d'épis perpendiculaires à la plage"],
              answer: 1,
              why: "Déplacer les constructions menacées laisse le littoral évoluer librement au lieu de fixer le trait de côte.",
            },
          ],
          trap: "Raisonner sur un seul lieu : un aménagement qui retient des sédiments à un endroit (barrage, épi) en prive toujours un autre, situé en aval ; il faut suivre le trajet des sédiments sur l'ensemble du cours d'eau ou de la côte.",
          method: "Pour analyser un aménagement, dessinez un schéma fléché du trajet des sédiments (source, transport, dépôt) avant et après l'aménagement, puis indiquez où il y a désormais excès et où il y a déficit.",
        },
      ],
    },

    /* ==================================================================== */
    /* AGROSYSTÈMES ET DÉVELOPPEMENT DURABLE                                  */
    /* ==================================================================== */
    {
      id: 'agrosystemes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sol-formation',
          title: "Le sol, un patrimoine fragile : composition et formation",
          minutes: 30,
          objectives: [
            "Décrire la composition d'un sol : fraction minérale, matière organique, eau, air et êtres vivants.",
            "Expliquer la formation d'un sol à partir d'une roche mère, par altération et par l'action des êtres vivants (humification, minéralisation), et son organisation en horizons.",
            "Expliquer le rôle du complexe argilo-humique dans la rétention des ions et la fertilité du sol.",
            "Expliquer pourquoi le sol est un patrimoine fragile : formation très lente, dégradation rapide.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un sol ?",
              paragraphs: [
                "Le sol est la couche superficielle et meuble qui recouvre les roches à la surface des continents, épaisse de quelques centimètres à plusieurs mètres. Il se forme à l'interface entre les roches, l'atmosphère, l'eau et les êtres vivants, et c'est dans le sol que les plantes puisent l'eau et les ions minéraux nécessaires à leur croissance. Il est donc à la base de presque toute la production agricole.",
                "Un sol associe cinq constituants. La fraction minérale provient de l'altération de la roche sous-jacente, la roche mère : graviers, sables, limons et argiles. La matière organique provient des êtres vivants : feuilles mortes, racines, cadavres, excréments, et l'humus, une matière organique sombre et stable issue de leur transformation. L'eau du sol contient des ions dissous : c'est la solution du sol. L'air occupe les vides (pores) entre les particules. Enfin, le sol abrite une foule d'êtres vivants : racines, vers de terre, insectes, acariens, champignons et bactéries.",
                "Les proportions de sables, de limons et d'argiles définissent la texture du sol. Un sol sableux laisse passer l'eau et se réchauffe vite, mais retient mal l'eau et les ions ; un sol argileux retient l'eau et les ions, mais se gorge d'eau et se travaille difficilement. Un sol équilibré, dit limoneux ou franc, est souvent le plus favorable aux cultures.",
              ],
              box: { label: "Définition", text: "Le sol est la couche superficielle meuble de la croûte terrestre, formée par l'altération d'une roche mère et par l'action des êtres vivants. Il associe une fraction minérale, de la matière organique, de l'eau, de l'air et des êtres vivants." },
            },
            {
              heading: "La formation d'un sol : altération et vie",
              paragraphs: [
                "Un sol se forme à partir d'une roche mère qui s'altère sous l'action de l'eau et du climat, comme on l'a vu pour le granite ou le calcaire. Des êtres vivants pionniers, lichens et mousses, colonisent les fissures ; ils accélèrent l'altération et laissent, en mourant, leurs premiers restes organiques. Puis des plantes plus grandes s'installent, dont les racines fragmentent la roche plus profondément et dont les feuilles mortes forment une litière à la surface.",
                "Les décomposeurs du sol, vers de terre, insectes, champignons et bactéries, fragmentent puis transforment cette matière organique. Une partie est transformée en humus : c'est l'humification. Une autre partie est entièrement décomposée en molécules minérales, dioxyde de carbone, eau et ions (nitrates, phosphates, potassium...) que les plantes peuvent absorber : c'est la minéralisation. Les vers de terre, dont Charles Darwin avait étudié le rôle dans un livre publié en 1881, mélangent en permanence la matière organique et la matière minérale.",
                "Au fil du temps, le sol s'organise en couches superposées, les horizons. Un profil simplifié comprend, de haut en bas : la litière (horizon O) ; un horizon sombre, riche en humus mêlé aux minéraux (horizon A) ; un horizon d'altération ou d'accumulation, plus clair (horizon B) ; la roche mère fragmentée (horizon C) ; puis la roche mère saine (R). Selon la FAO, l'organisation des Nations unies pour l'alimentation et l'agriculture, la formation d'un seul centimètre de sol peut demander jusqu'à mille ans.",
              ],
              box: { label: "À retenir", text: "Humification : transformation d'une partie de la matière organique en humus, stable. Minéralisation : décomposition complète de la matière organique en CO₂, eau et ions minéraux utilisables par les plantes. Ces deux processus sont réalisés par les décomposeurs du sol." },
            },
            {
              heading: "Le complexe argilo-humique, réservoir de fertilité",
              paragraphs: [
                "Les argiles et l'humus portent à leur surface des charges électriques négatives. Ils s'associent, grâce à des ions positifs comme le calcium (Ca²⁺) qui leur servent de ponts, en agrégats appelés complexe argilo-humique. Ces agrégats donnent au sol une structure grumeleuse, aérée, qui retient l'eau tout en laissant circuler l'air et les racines.",
                "Grâce à ses charges négatives, le complexe argilo-humique retient à sa surface les ions positifs (cations) : potassium (K⁺), calcium (Ca²⁺), magnésium (Mg²⁺), ammonium (NH₄⁺). Ces ions ne sont pas emportés par l'eau de pluie. Ils s'échangent avec la solution du sol, où les racines les absorbent : le complexe fonctionne comme un réservoir qui stocke les ions et les libère progressivement. En revanche, les ions négatifs comme les nitrates (NO₃⁻) ne sont pas retenus : ils restent dans la solution du sol et peuvent être entraînés vers les nappes d'eau souterraines par les pluies, c'est le lessivage.",
              ],
              box: { label: "Propriété", text: "Le complexe argilo-humique, chargé négativement, retient les cations (K⁺, Ca²⁺, Mg²⁺, NH₄⁺) et les échange avec la solution du sol, où les racines les absorbent. Les anions comme les nitrates (NO₃⁻) ne sont pas retenus et peuvent être lessivés." },
            },
            {
              heading: "Un patrimoine fragile",
              paragraphs: [
                "Le sol se forme en des milliers d'années, mais il peut être dégradé en quelques années, voire en un seul orage. Les principales menaces sont l'érosion par l'eau et le vent des sols laissés nus, le tassement par des engins lourds qui écrase les pores et empêche l'eau et les racines de pénétrer, la perte de matière organique, la pollution (métaux, hydrocarbures, résidus de pesticides), la salinisation des sols irrigués en climat sec et l'artificialisation, lorsque le sol est recouvert par des routes et des bâtiments.",
                "À l'échelle d'une vie humaine, un sol détruit ne se reforme pas : c'est une ressource non renouvelable, un patrimoine à transmettre. Le préserver suppose de le garder couvert de végétation, d'y restituer de la matière organique, de limiter le tassement et de réduire l'artificialisation des terres agricoles.",
              ],
              box: { label: "À retenir", text: "Formation très lente (jusqu'à mille ans pour un centimètre selon la FAO), dégradation rapide (érosion, tassement, pollution, artificialisation) : le sol est un patrimoine non renouvelable à l'échelle humaine." },
            },
          ],
          keyPoints: [
            "Le sol associe une fraction minérale (issue de la roche mère), de la matière organique (litière, humus), de l'eau, de l'air et des êtres vivants.",
            "La texture est la proportion de sables, de limons et d'argiles.",
            "Les décomposeurs réalisent l'humification (humus) et la minéralisation (ions minéraux utilisables par les plantes).",
            "Horizons, de haut en bas : litière (O), horizon humifère (A), horizon d'altération ou d'accumulation (B), roche mère fragmentée (C), roche mère (R).",
            "Le complexe argilo-humique retient les cations (K⁺, Ca²⁺, Mg²⁺, NH₄⁺) ; les nitrates (NO₃⁻) ne sont pas retenus et peuvent être lessivés.",
            "Formation très lente, dégradation rapide : le sol est un patrimoine non renouvelable à l'échelle humaine.",
          ],
          example: {
            statement: "On décrit un profil de sol forestier, de haut en bas : 0 à 3 cm, feuilles mortes peu décomposées ; 3 à 20 cm, terre brun foncé, grumeleuse, riche en racines et en vers de terre ; 20 à 60 cm, terre plus claire, compacte, avec quelques fragments de roche ; 60 à 90 cm, granite fragmenté et friable ; au-delà, granite dur. Nommez chaque horizon et expliquez l'origine de la couleur et de la structure de l'horizon situé entre 3 et 20 cm.",
            solution: [
              "Horizon de 0 à 3 cm : la litière (horizon O), formée de débris végétaux peu décomposés.",
              "Horizon de 3 à 20 cm : l'horizon humifère (horizon A), où la matière organique transformée se mêle aux minéraux.",
              "Horizon de 20 à 60 cm : l'horizon B, plus pauvre en matière organique, où domine la matière minérale issue de l'altération.",
              "Horizon de 60 à 90 cm : la roche mère altérée et fragmentée (horizon C) ; au-delà, la roche mère saine (R), ici le granite.",
              "Origine de la couleur de l'horizon A : l'humus, matière organique sombre produite par les décomposeurs à partir de la litière.",
              "Origine de la structure grumeleuse : les argiles et l'humus s'associent en complexe argilo-humique, et les vers de terre mélangent matière organique et minérale.",
              "Réponse : O, A, B, C puis R ; l'horizon A est brun foncé à cause de l'humus et grumeleux grâce au complexe argilo-humique et à l'activité des vers de terre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants parmi les cinq constituants du sol (fraction minérale, matière organique, eau, air, êtres vivants) : grains de quartz ; humus ; lombric ; dioxygène des pores ; ions nitrate dissous ; argiles ; feuilles mortes ; filaments d'un champignon ; limons. Puis indiquez l'origine de la fraction minérale.",
              hint: "Distinguez ce qui vit (êtres vivants) de ce qui provient d'êtres vivants morts (matière organique). Les ions dissous se trouvent dans l'eau du sol.",
              solution: [
                "Fraction minérale : grains de quartz, argiles, limons.",
                "Matière organique : humus, feuilles mortes.",
                "Eau (solution du sol) : ions nitrate dissous.",
                "Air : dioxygène des pores.",
                "Êtres vivants : lombric, filaments du champignon.",
                "Résultat : la fraction minérale provient de l'altération de la roche mère située sous le sol.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On analyse 200 g de terre sèche d'un champ : on obtient 90 g de sables, 70 g de limons et 40 g d'argiles. a) Calculez le pourcentage de chaque classe de particules. b) Ce sol est-il plutôt sableux, limoneux ou argileux ? c) Un agriculteur apporte un engrais contenant du potassium (K⁺) et des nitrates (NO₃⁻). Après de fortes pluies, lequel de ces ions risque le plus d'être perdu ? Justifiez à l'aide du complexe argilo-humique.",
              hint: "Pourcentage = masse de la classe ÷ masse totale × 100. Pour c), regardez le signe de la charge de chaque ion.",
              solution: [
                "a) Sables : 90 ÷ 200 × 100 = 45 %. Limons : 70 ÷ 200 × 100 = 35 %. Argiles : 40 ÷ 200 × 100 = 20 %. Vérification : 45 + 35 + 20 = 100 %.",
                "b) Aucune classe ne domine très largement ; avec 45 % de sables, 35 % de limons et 20 % d'argiles, c'est un sol équilibré, à tendance sableuse.",
                "c) Le complexe argilo-humique est chargé négativement : il retient les cations comme K⁺, qui restent disponibles pour les plantes. Les nitrates, anions (NO₃⁻), ne sont pas retenus : ils restent dans la solution du sol et sont entraînés par l'eau de pluie vers les nappes.",
                "Résultat : 45 % de sables, 35 % de limons, 20 % d'argiles ; les nitrates risquent le plus d'être perdus par lessivage.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique à partir de documents. Document 1 (données fictives) : dans une région, un sol se forme à raison de 2 cm par millénaire. Document 2 (données fictives) : sur une parcelle en pente labourée et laissée nue l'hiver, l'érosion emporte 20 tonnes de sol par hectare et par an ; sous une prairie permanente, 0,2 tonne par hectare et par an. Document 3 : la masse volumique du sol est de 1,3 tonne par m³ ; un hectare mesure 10 000 m². a) Convertissez la vitesse de formation en millimètres par an. b) Calculez l'épaisseur de sol perdue chaque année dans chaque situation. c) Calculez le temps nécessaire pour perdre les 30 cm de sol cultivable de la parcelle labourée, et le temps nécessaire pour reformer ces 30 cm. d) Concluez sur la notion de patrimoine fragile.",
              hint: "Volume perdu = masse ÷ masse volumique ; épaisseur = volume ÷ surface. Gardez les mètres jusqu'au bout, puis convertissez en millimètres.",
              solution: [
                "a) 2 cm = 20 mm par 1 000 ans, soit 20 ÷ 1 000 = 0,02 mm par an.",
                "b) Parcelle labourée : volume perdu = 20 ÷ 1,3 ≈ 15,4 m³ par hectare ; épaisseur = 15,4 ÷ 10 000 ≈ 0,0015 m, soit environ 1,5 mm par an. Prairie : 0,2 ÷ 1,3 ≈ 0,154 m³ ; épaisseur ≈ 0,0000154 m, soit environ 0,015 mm par an.",
                "Comparaison : sur la parcelle labourée, la perte (1,5 mm par an) est environ 75 fois plus rapide que la formation (0,02 mm par an) ; sous la prairie, elle (0,015 mm par an) est inférieure à la formation : le sol se maintient.",
                "c) 30 cm = 300 mm. Perte : 300 ÷ 1,5 = 200 ans. Formation : 300 ÷ 0,02 = 15 000 ans.",
                "d) Il faudrait environ 15 000 ans pour reformer ce que deux siècles de sol nu en pente peuvent détruire : à l'échelle humaine, le sol n'est pas renouvelable. Une couverture végétale permanente, comme la prairie, le protège efficacement.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la formation d'un sol à partir d'une roche nue.",
            items: [
              "Une roche mère nue affleure à la surface.",
              "La roche se fissure et commence à s'altérer sous l'action de l'eau et du gel.",
              "Des lichens et des mousses colonisent les fissures de la roche.",
              "Leurs restes s'accumulent et se mêlent aux produits d'altération : un sol mince apparaît.",
              "Des plantes plus grandes s'installent et leurs racines approfondissent l'altération.",
              "Des horizons distincts se différencient : le sol devient épais et évolué.",
            ],
          },
          quiz: [
            {
              q: "D'où provient la fraction minérale d'un sol ?",
              options: ["De la décomposition des feuilles mortes", "Des engrais apportés par l'agriculteur", "Des poussières venues de l'espace", "De l'altération de la roche mère"],
              answer: 3,
              why: "Les sables, limons et argiles du sol résultent de l'altération de la roche sur laquelle le sol s'est formé.",
            },
            {
              q: "Comment appelle-t-on la décomposition complète de la matière organique en ions minéraux ?",
              options: ["La minéralisation", "L'humification", "La diagenèse", "La photosynthèse"],
              answer: 0,
              why: "La minéralisation, réalisée par les décomposeurs, libère du CO₂, de l'eau et des ions utilisables par les plantes.",
            },
            {
              q: "Quel ion le complexe argilo-humique ne retient-il pas ?",
              options: ["Le potassium K⁺", "Le calcium Ca²⁺", "Le nitrate NO₃⁻", "L'ammonium NH₄⁺"],
              answer: 2,
              why: "Le complexe, chargé négativement, retient les cations ; les nitrates, chargés négativement, restent dans la solution du sol.",
            },
            {
              q: "Dans un profil de sol, quel horizon est le plus riche en humus ?",
              options: ["L'horizon C", "L'horizon A", "L'horizon B", "La roche mère R"],
              answer: 1,
              why: "L'horizon A, sous la litière, est sombre parce que la matière organique transformée s'y mêle aux minéraux.",
            },
            {
              q: "Selon la FAO, combien de temps peut demander la formation d'un centimètre de sol ?",
              options: ["Quelques semaines", "Une dizaine d'années", "Jusqu'à mille ans", "Plusieurs milliards d'années"],
              answer: 2,
              why: "La formation d'un sol est extrêmement lente : un centimètre peut demander jusqu'à mille ans.",
            },
          ],
          trap: "Confondre humus et matière organique fraîche, ou humification et minéralisation : l'humification produit l'humus, matière organique stable ; la minéralisation détruit la matière organique en libérant des ions minéraux.",
          method: "Pour décrire un profil de sol, procédez de haut en bas et notez pour chaque horizon trois indices : couleur (plus c'est sombre, plus il y a d'humus), présence de racines et d'êtres vivants, fragments de roche. Le passage progressif vers la roche mère montre que le sol en est issu.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'agrosysteme-fonctionnement',
          title: "Fonctionnement d'un agrosystème : flux de matière et d'énergie",
          minutes: 30,
          objectives: [
            "Définir un agrosystème et le comparer à un écosystème naturel.",
            "Décrire les flux d'énergie et de matière dans un agrosystème : production de biomasse par photosynthèse, transferts entre niveaux trophiques, exportation par la récolte.",
            "Expliquer la nécessité des intrants (engrais, eau, énergie) pour compenser les exportations, à partir du cycle simplifié de l'azote.",
            "Calculer et comparer les rendements d'une production végétale et d'une production animale.",
          ],
          course: [
            {
              heading: "Un écosystème géré par l'être humain",
              paragraphs: [
                "Un agrosystème est un écosystème créé et entretenu par l'être humain pour produire de la nourriture, des fibres ou de l'énergie : un champ de blé, une prairie pâturée par des vaches, un verger, une rizière, une vigne. Comme tout écosystème, il associe un milieu (sol, climat) et des êtres vivants en interaction ; mais ces êtres vivants sont en grande partie choisis par l'agriculteur.",
                "Un agrosystème diffère d'un écosystème naturel sur plusieurs points. La biodiversité y est réduite, souvent à une seule espèce cultivée (monoculture) dont les individus sont génétiquement très semblables. L'être humain y intervient en permanence : travail du sol, semis, fertilisation, irrigation, protection contre les ravageurs et les plantes concurrentes. Surtout, une grande partie de la biomasse produite est récoltée et quitte le champ : c'est l'exportation.",
              ],
              box: { label: "Définition", text: "Un agrosystème est un écosystème modifié et géré par l'être humain pour produire de la biomasse (aliments, fibres, énergie), dont une grande partie est exportée hors du système lors de la récolte." },
            },
            {
              heading: "Le flux d'énergie : de la lumière à l'assiette",
              paragraphs: [
                "Les plantes cultivées sont des producteurs primaires : par la photosynthèse, elles utilisent l'énergie lumineuse pour fabriquer leur matière organique à partir du dioxyde de carbone de l'air, de l'eau et des ions minéraux du sol. Elles ne captent qu'une faible part de l'énergie solaire reçue, de l'ordre de 1 % ou moins : le reste est réfléchi ou dissipé sous forme de chaleur.",
                "Lorsque des animaux d'élevage, consommateurs primaires, mangent ces végétaux, ils n'en transforment qu'une petite partie en leur propre matière : la plus grande partie de l'énergie est utilisée pour la respiration (maintien de la température, déplacements, fonctionnement des organes) et perdue sous forme de chaleur, ou rejetée dans les excréments. En ordre de grandeur, environ 10 % seulement de l'énergie passe d'un niveau trophique au suivant ; ce rendement varie selon les animaux, il est meilleur pour un poulet que pour un bœuf.",
                "Conséquence directe : il faut beaucoup plus de surface cultivée pour produire une quantité donnée d'énergie alimentaire sous forme de viande que sous forme de végétaux consommés directement. Un même champ nourrit davantage de personnes s'il produit des céréales ou des légumineuses mangées par les humains que s'il nourrit du bétail.",
              ],
              box: { label: "Repère", text: "Rendement de transfert d'un niveau trophique au suivant : environ 10 % (ordre de grandeur). L'énergie non transférée est surtout perdue sous forme de chaleur par la respiration. L'énergie circule en flux ouvert : elle n'est pas recyclée." },
            },
            {
              heading: "Le flux de matière : exportations et intrants",
              paragraphs: [
                "Dans une forêt naturelle, les feuilles mortes, le bois mort et les cadavres retournent au sol, où les décomposeurs les minéralisent : les éléments chimiques (azote, phosphore, potassium...) sont recyclés et réabsorbés par les plantes. Le cycle de la matière y est presque fermé. Dans un agrosystème, la récolte emporte hors du champ une grande partie de la biomasse, et avec elle les éléments qu'elle contient : chaque récolte appauvrit le sol.",
                "Pour maintenir la production, l'agriculteur compense ces exportations par des apports extérieurs, les intrants. Les engrais minéraux apportent de l'azote, du phosphore et du potassium (engrais NPK). Les engrais azotés de synthèse sont fabriqués à partir du diazote de l'air par le procédé Haber-Bosch, très consommateur d'énergie, généralement d'origine fossile ; le phosphore et le potassium proviennent de gisements miniers. Les engrais organiques (fumier, lisier, compost) recyclent les déjections animales et les déchets végétaux. S'y ajoutent l'eau d'irrigation, les produits phytosanitaires et le carburant des machines.",
              ],
              box: { label: "À retenir", text: "Écosystème naturel : matière recyclée sur place par les décomposeurs. Agrosystème : matière exportée par la récolte, compensée par des intrants (engrais minéraux ou organiques, eau, énergie, produits phytosanitaires)." },
            },
            {
              heading: "Le cycle simplifié de l'azote",
              paragraphs: [
                "L'azote est indispensable aux plantes pour fabriquer leurs protéines et leur ADN. L'air contient environ 78 % de diazote (N₂), mais la plupart des plantes ne peuvent pas l'utiliser : elles absorbent l'azote sous forme d'ions, nitrates (NO₃⁻) et ammonium (NH₄⁺), présents dans la solution du sol. Ces ions proviennent de la minéralisation de la matière organique par les bactéries du sol, qui produisent d'abord de l'ammonium, puis des nitrates.",
                "Certaines plantes, les légumineuses (pois, luzerne, trèfle, soja, haricot), vivent en association avec des bactéries du genre Rhizobium, logées dans des renflements de leurs racines, les nodosités. Ces bactéries fixent le diazote de l'air et le transforment en composés azotés utilisables par la plante. Les légumineuses n'ont donc presque pas besoin d'engrais azoté, et leurs résidus enrichissent le sol pour la culture suivante.",
                "Les sorties d'azote d'un champ sont l'exportation par la récolte, le lessivage des nitrates vers les nappes et une perte gazeuse vers l'atmosphère, réalisée par certaines bactéries dans les sols gorgés d'eau. Les entrées sont la minéralisation des résidus, la fixation par les légumineuses et les engrais. Un bilan permet d'ajuster la dose d'engrais aux besoins réels de la culture.",
              ],
              box: { label: "Repère", text: "Les plantes absorbent l'azote sous forme de nitrates (NO₃⁻) et d'ammonium (NH₄⁺). Sources : minéralisation de la matière organique, fixation du N₂ par les bactéries des nodosités des légumineuses, engrais. Pertes : récolte, lessivage, émissions gazeuses." },
            },
          ],
          keyPoints: [
            "Agrosystème : écosystème géré par l'être humain pour produire de la biomasse ; biodiversité réduite, interventions permanentes, exportation par la récolte.",
            "Les plantes cultivées, producteurs primaires, captent par photosynthèse une faible part de l'énergie solaire (de l'ordre de 1 %).",
            "Environ 10 % de l'énergie passe d'un niveau trophique au suivant : produire de la viande demande plus de surface que produire des végétaux.",
            "La récolte exporte la matière ; les intrants (engrais NPK, fumier, eau, énergie) compensent ces exportations.",
            "Les plantes absorbent l'azote sous forme de nitrates et d'ammonium ; les légumineuses, grâce aux Rhizobium de leurs nodosités, utilisent le N₂ de l'air.",
          ],
          example: {
            statement: "Données fictives. Un champ de blé produit 8 tonnes de grains par hectare. Les grains contiennent 2 % d'azote en masse. La minéralisation de la matière organique du sol fournit 60 kg d'azote par hectare pendant la culture. a) Calculez la masse d'azote exportée par la récolte des grains. b) Quelle masse d'azote l'agriculteur doit-il apporter au minimum pour compenser cette exportation ?",
            solution: [
              "Convertir la récolte en kilogrammes : 8 tonnes = 8 000 kg de grains par hectare.",
              "a) Masse d'azote exportée : 8 000 × 2 ÷ 100 = 160 kg d'azote par hectare.",
              "Faire le bilan : la culture a besoin d'au moins 160 kg d'azote par hectare pour les seuls grains ; le sol en fournit 60 kg par minéralisation.",
              "b) Apport minimal : 160 - 60 = 100 kg d'azote par hectare.",
              "Réponse : la récolte exporte 160 kg d'azote par hectare ; il faut apporter au moins 100 kg d'azote par hectare, sous forme d'engrais ou par une légumineuse cultivée auparavant, sans compter les besoins des pailles et des racines ni les pertes par lessivage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour un champ de maïs, classez chaque élément parmi les entrées (intrants ou apports naturels) et les sorties de matière ou d'énergie : a) épandage d'engrais azoté ; b) récolte des épis ; c) lumière solaire ; d) irrigation ; e) lessivage des nitrates vers la nappe ; f) fumier ; g) chaleur dégagée par la respiration des plantes. Indiquez ensuite qui est le producteur primaire de cet agrosystème.",
              hint: "Une entrée arrive dans le champ, une sortie le quitte. L'énergie aussi entre et sort.",
              solution: [
                "Entrées : a) engrais azoté (intrant) ; c) lumière solaire (énergie) ; d) irrigation (intrant) ; f) fumier (intrant organique).",
                "Sorties : b) récolte des épis (exportation de matière) ; e) lessivage des nitrates (perte de matière) ; g) chaleur de la respiration (perte d'énergie).",
                "Le producteur primaire est le maïs, qui fabrique sa matière organique par photosynthèse.",
                "Résultat : entrées a, c, d, f ; sorties b, e, g ; producteur primaire : le maïs.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un hectare de céréales produit des grains contenant 100 000 MJ d'énergie alimentaire. Un être humain a besoin d'environ 10 MJ par jour. a) Combien de personnes ces grains peuvent-ils nourrir pendant un an s'ils sont consommés directement ? b) Si ces grains servent à nourrir des animaux, et que 10 % de leur énergie se retrouve dans la viande consommée, combien de personnes cette viande peut-elle nourrir pendant un an ? c) Expliquez la différence.",
              hint: "Besoin annuel d'une personne : 10 × 365 MJ. Pour b), commencez par calculer l'énergie contenue dans la viande.",
              solution: [
                "Besoin annuel d'une personne : 10 × 365 = 3 650 MJ.",
                "a) 100 000 ÷ 3 650 ≈ 27,4 : environ 27 personnes nourries pendant un an.",
                "b) Énergie dans la viande : 100 000 × 10 ÷ 100 = 10 000 MJ ; 10 000 ÷ 3 650 ≈ 2,7 : environ 2 à 3 personnes.",
                "c) Les animaux utilisent la plus grande partie de l'énergie des grains pour leur respiration (chaleur, mouvements, fonctionnement des organes) ; seule une petite partie, environ 10 %, est transformée en viande.",
                "Résultat : le même hectare nourrit environ dix fois plus de personnes en céréales consommées directement (environ 27) qu'en viande (environ 2,7).",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement scientifique à partir de documents. Document 1 (données fictives) : un agriculteur cultive du blé sur 100 ha. Parcelle A (50 ha), blé après blé : il faut apporter 150 kg d'azote par hectare. Parcelle B (50 ha), blé après une culture de pois : les résidus du pois fournissent 50 kg d'azote par hectare, et l'apport nécessaire n'est plus que de 100 kg. Document 2 (données fictives) : la fabrication de 1 kg d'azote d'engrais de synthèse consomme environ 45 MJ d'énergie, essentiellement fossile. Document 3 : les nitrates non absorbés par les plantes peuvent être entraînés vers les nappes par les pluies d'hiver. a) Expliquez pourquoi la parcelle B a besoin de moins d'engrais. b) Calculez l'économie d'engrais et d'énergie réalisée sur la parcelle B par rapport à la parcelle A. c) Montrez que cette pratique présente aussi un intérêt pour la qualité de l'eau.",
              hint: "Le pois est une légumineuse : pensez aux nodosités. Pour b), calculez d'abord l'économie par hectare, puis multipliez par la surface.",
              solution: [
                "a) Le pois est une légumineuse : ses nodosités abritent des bactéries Rhizobium qui fixent le diazote de l'air. Ses résidus, minéralisés par les décomposeurs, libèrent de l'azote utilisable par le blé suivant (ici 50 kg par hectare).",
                "b) Économie d'engrais : 150 - 100 = 50 kg d'azote par hectare, soit 50 × 50 = 2 500 kg sur les 50 ha de la parcelle B.",
                "Économie d'énergie : 2 500 × 45 = 112 500 MJ, soit 2 250 MJ par hectare.",
                "c) Moins d'engrais apporté signifie moins de risque d'excès de nitrates non absorbés en fin de culture ; d'après le document 3, ce sont ces nitrates qui sont lessivés vers les nappes pendant l'hiver. La rotation avec une légumineuse limite donc la pollution des eaux souterraines.",
                "Conclusion : en insérant un pois dans la rotation, l'agriculteur économise 2 500 kg d'azote de synthèse et 112 500 MJ d'énergie fossile sur 50 ha, tout en réduisant le risque de pollution des nappes par les nitrates.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Producteur primaire", right: "Être vivant qui fabrique sa matière organique par photosynthèse" },
              { left: "Exportation", right: "Biomasse récoltée qui quitte le champ avec les éléments qu'elle contient" },
              { left: "Intrant", right: "Apport extérieur à l'agrosystème : engrais, eau, énergie, produits phytosanitaires" },
              { left: "Nodosité", right: "Renflement des racines d'une légumineuse abritant des bactéries fixatrices d'azote" },
              { left: "Lessivage", right: "Entraînement des nitrates du sol vers les nappes par l'eau de pluie" },
              { left: "Procédé Haber-Bosch", right: "Fabrication industrielle d'engrais azoté à partir du diazote de l'air" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue principalement un agrosystème d'un écosystème naturel ?",
              options: ["L'absence de photosynthèse", "L'absence totale de décomposeurs dans le sol cultivé", "L'exportation d'une grande partie de la biomasse", "L'absence totale de consommateurs"],
              answer: 2,
              why: "La récolte fait sortir du système une grande partie de la biomasse produite et les éléments qu'elle contient.",
            },
            {
              q: "Environ quelle part de l'énergie passe d'un niveau trophique au suivant ?",
              options: ["10 %", "50 %", "90 %", "100 %"],
              answer: 0,
              why: "En ordre de grandeur, 10 % ; le reste est surtout perdu sous forme de chaleur par la respiration.",
            },
            {
              q: "Sous quelle forme la plupart des plantes absorbent-elles l'azote ?",
              options: ["Diazote de l'air", "Protéines du sol", "Nitrates et ammonium", "Dioxyde d'azote"],
              answer: 2,
              why: "Les plantes absorbent des ions minéraux azotés dissous dans la solution du sol : nitrates (NO₃⁻) et ammonium (NH₄⁺).",
            },
            {
              q: "Pourquoi les légumineuses ont-elles peu besoin d'engrais azoté ?",
              options: ["Elles n'ont pas besoin d'azote", "Leurs feuilles absorbent directement l'azote contenu dans la pluie", "Elles poussent seulement sur des sols riches", "Des bactéries de leurs racines fixent le N₂ de l'air"],
              answer: 3,
              why: "Les bactéries Rhizobium de leurs nodosités transforment le diazote de l'air en composés azotés utilisables par la plante.",
            },
            {
              q: "Une récolte exporte 9 000 kg de grains contenant 2 % d'azote. Quelle masse d'azote est exportée ?",
              options: ["18 kg", "180 kg", "450 kg", "1 800 kg"],
              answer: 1,
              why: "9 000 × 2 ÷ 100 = 180 kg d'azote.",
            },
          ],
          trap: "Croire que les plantes utilisent directement le diazote de l'air, abondant : seules les légumineuses en profitent, grâce aux bactéries de leurs nodosités ; les autres dépendent des nitrates et de l'ammonium du sol.",
          method: "Pour tout bilan d'agrosystème, faites deux colonnes, entrées et sorties, en séparant matière et énergie ; vérifiez les unités (tonnes, kilogrammes, hectares) avant de calculer, puis concluez en disant ce qui doit être compensé.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'agriculture-durable',
          title: "Vers des pratiques agricoles durables",
          minutes: 30,
          objectives: [
            "Identifier les impacts environnementaux de certaines pratiques agricoles : pollution des eaux par les nitrates et les pesticides, eutrophisation, dégradation des sols, perte de biodiversité, émissions de gaz à effet de serre.",
            "Expliquer le mécanisme de l'eutrophisation d'un milieu aquatique.",
            "Présenter des pratiques agricoles plus durables (rotations, légumineuses, couverts végétaux, haies, lutte biologique, agroforesterie) et justifier leur intérêt.",
            "Argumenter sur des choix agricoles et alimentaires en conciliant production, environnement et santé.",
          ],
          course: [
            {
              heading: "Les effets d'une agriculture intensive",
              paragraphs: [
                "À partir du milieu du XXe siècle, l'agriculture des pays industrialisés s'est intensifiée : mécanisation, engrais de synthèse, produits phytosanitaires, variétés sélectionnées à haut rendement, irrigation. Les rendements ont fortement augmenté, ce qui a permis de nourrir une population en forte croissance. Mais ces pratiques ont aussi des coûts pour l'environnement et pour la santé.",
                "Les excès d'engrais polluent les eaux : les nitrates lessivés gagnent les nappes et les rivières, et le phosphore entraîné avec les particules de sol rejoint les cours d'eau. Les pesticides peuvent contaminer l'eau, les sols et les aliments, et toucher des espèces non visées, comme les insectes pollinisateurs ; leur usage répété sélectionne en outre des ravageurs et des adventices résistants. Les sols laissés nus s'érodent, les engins lourds les tassent, et leur teneur en matière organique diminue.",
                "La simplification des paysages, avec l'arrachage de haies et l'agrandissement des parcelles lors des remembrements, et la monoculture réduisent la biodiversité. Enfin, l'agriculture émet des gaz à effet de serre : protoxyde d'azote (N₂O) issu des engrais azotés, méthane (CH₄) produit par la digestion des ruminants et par les rizières, dioxyde de carbone du carburant et de la fabrication des engrais.",
              ],
              box: { label: "À retenir", text: "Impacts possibles d'une agriculture intensive : pollution des eaux (nitrates, phosphore, pesticides), dégradation des sols (érosion, tassement, perte de matière organique), perte de biodiversité, résistances des ravageurs, gaz à effet de serre (N₂O, CH₄, CO₂)." },
            },
            {
              heading: "L'eutrophisation, un exemple de déséquilibre",
              paragraphs: [
                "Lorsque des nitrates et des phosphates en excès arrivent dans un lac, une rivière lente ou une baie peu profonde, ils agissent comme un engrais pour les algues et les végétaux aquatiques, qui prolifèrent. À leur mort, cette énorme biomasse est décomposée par des bactéries qui consomment le dioxygène dissous dans l'eau. Le milieu s'appauvrit en dioxygène, parfois jusqu'à l'anoxie : poissons et invertébrés meurent asphyxiés. Ce processus est l'eutrophisation.",
                "Sur certaines côtes bretonnes, l'excès de nitrates provenant principalement des bassins versants agricoles favorise les marées vertes, des proliférations d'algues (ulves) qui s'échouent sur les plages ; en se décomposant, elles peuvent dégager un gaz toxique, le sulfure d'hydrogène. Pour limiter ces pollutions, l'Union européenne a adopté en 1991 la directive « nitrates », et la réglementation fixe à 50 mg par litre la teneur maximale en nitrates d'une eau destinée à la consommation humaine.",
              ],
              box: { label: "Définition", text: "L'eutrophisation est l'enrichissement excessif d'un milieu aquatique en éléments nutritifs (nitrates, phosphates), qui provoque la prolifération des algues, puis, lors de leur décomposition par les bactéries, l'appauvrissement de l'eau en dioxygène et la mort d'une partie des êtres vivants." },
            },
            {
              heading: "Des pratiques plus durables",
              paragraphs: [
                "L'agroécologie cherche à produire en s'appuyant sur les processus écologiques plutôt que sur les seuls intrants. La rotation des cultures, qui fait alterner des espèces différentes sur une même parcelle, coupe le cycle des ravageurs et des maladies propres à chaque culture ; l'insertion de légumineuses apporte de l'azote fixé par les bactéries de leurs nodosités. Les couverts végétaux semés entre deux cultures, appelés cultures intermédiaires pièges à nitrates, absorbent les nitrates restants avant les pluies d'hiver et protègent le sol de l'érosion.",
                "Les haies, les bandes enherbées et l'agroforesterie, qui associe arbres et cultures sur une même parcelle, freinent le ruissellement, retiennent le sol, stockent du carbone et abritent des auxiliaires des cultures : oiseaux, carabes, coccinelles. La lutte biologique utilise ces ennemis naturels des ravageurs : larves de coccinelles contre les pucerons, petites guêpes trichogrammes lâchées contre la pyrale du maïs. La réduction du travail du sol préserve sa structure et ses vers de terre.",
                "Une fertilisation raisonnée calcule la dose d'engrais à partir d'un bilan, et la fractionne au moment où la plante en a besoin. L'agriculture biologique va plus loin en s'interdisant les engrais et les pesticides de synthèse. Ces pratiques ont aussi des limites : elles demandent davantage de connaissances et de travail, et certaines s'accompagnent de rendements plus faibles, ce qui peut exiger plus de surface pour produire autant.",
              ],
              box: { label: "Définition", text: "L'agroécologie est un ensemble de pratiques agricoles qui s'appuient sur les fonctionnements écologiques (diversité des cultures, fixation de l'azote, auxiliaires des cultures, vie du sol) pour produire en réduisant les intrants et les impacts sur l'environnement." },
            },
            {
              heading: "Produire et consommer de façon durable",
              paragraphs: [
                "Le développement durable cherche à répondre aux besoins des générations présentes sans compromettre ceux des générations futures. Pour l'agriculture, il s'agit de concilier trois exigences : produire assez de nourriture de qualité, préserver les sols, l'eau, la biodiversité et le climat, et permettre aux agriculteurs de vivre de leur travail. Aucune pratique ne satisfait parfaitement les trois : les choix résultent de compromis, à discuter selon le contexte de chaque exploitation.",
                "Les consommateurs participent aussi à ces choix. Comme environ 10 % seulement de l'énergie passe d'un niveau trophique au suivant, une alimentation plus riche en végétaux et plus modérée en produits animaux demande moins de surface agricole et d'intrants. Réduire le gaspillage alimentaire, privilégier des produits de saison et s'informer sur les modes de production sont d'autres leviers.",
              ],
            },
          ],
          keyPoints: [
            "L'intensification a fortement augmenté les rendements, mais peut polluer les eaux, dégrader les sols, réduire la biodiversité et émettre des gaz à effet de serre.",
            "Eutrophisation : excès de nitrates et de phosphates, prolifération d'algues, décomposition qui consomme le dioxygène, mort des animaux aquatiques.",
            "Directive européenne « nitrates » (1991) ; eau potable : au maximum 50 mg de nitrates par litre.",
            "Pratiques durables : rotations, légumineuses, couverts végétaux, haies, agroforesterie, lutte biologique, fertilisation raisonnée.",
            "Le développement durable concilie production, environnement et revenu des agriculteurs ; les choix alimentaires y contribuent.",
          ],
          example: {
            statement: "Données fictives. Dans un lac qui reçoit les eaux d'un bassin agricole, on mesure en été : en juin, 2 µg de chlorophylle par litre et 9 mg de dioxygène dissous par litre au fond ; en juillet, 40 µg de chlorophylle par litre et 6 mg de dioxygène ; en août, 15 µg de chlorophylle par litre et 1 mg de dioxygène, avec de nombreux poissons morts. Expliquez ces mesures.",
            solution: [
              "Interpréter la chlorophylle : sa teneur mesure la quantité d'algues ; elle est multipliée par 20 entre juin et juillet (de 2 à 40 µg par litre) : les algues prolifèrent.",
              "Expliquer la prolifération : les eaux du bassin agricole apportent des nitrates et des phosphates qui fertilisent les algues.",
              "Interpréter août : la chlorophylle baisse (15 µg par litre) car beaucoup d'algues sont mortes ; leurs restes tombent au fond.",
              "Expliquer la chute du dioxygène : les bactéries qui décomposent ces algues mortes consomment le dioxygène dissous, qui passe de 9 à 1 mg par litre.",
              "Relier à la mort des poissons : privés de dioxygène, les poissons meurent asphyxiés.",
              "Réponse : l'apport d'éléments nutritifs provoque une prolifération d'algues puis, lors de leur décomposition, un effondrement du dioxygène qui tue les poissons : le lac est eutrophisé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque pratique à son intérêt principal : pratiques : a) cultiver de la luzerne dans la rotation ; b) semer un couvert végétal après la récolte de l'été ; c) planter une haie en bas d'une parcelle en pente ; d) lâcher des trichogrammes dans un champ de maïs ; e) faire alterner blé, colza et pois sur une parcelle. Intérêts : 1) limiter un ravageur sans insecticide ; 2) apporter de l'azote fixé dans l'air ; 3) piéger les nitrates avant les pluies d'hiver et couvrir le sol ; 4) couper le cycle des ravageurs et des maladies propres à une culture ; 5) freiner le ruissellement et l'érosion.",
              hint: "Repérez la légumineuse, l'auxiliaire des cultures et la pratique qui protège le sol en hiver.",
              solution: [
                "a) Luzerne → 2) : légumineuse, elle fixe le diazote de l'air grâce aux bactéries de ses nodosités.",
                "b) Couvert végétal → 3) : il absorbe les nitrates restants et protège le sol nu.",
                "c) Haie → 5) : elle ralentit l'eau qui ruisselle et retient le sol.",
                "d) Trichogrammes → 1) : ces petites guêpes parasitent les œufs de la pyrale du maïs.",
                "e) Rotation → 4) : un ravageur propre à une culture ne retrouve pas son hôte l'année suivante.",
                "Résultat : a-2, b-3, c-5, d-1, e-4.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Sur une exploitation de 50 ha, on estime que 40 kg d'azote par hectare sont lessivés chaque hiver lorsque le sol reste nu après la récolte, et seulement 15 kg par hectare lorsqu'un couvert végétal est semé. a) Calculez la masse totale d'azote lessivée dans chaque cas. b) Calculez le pourcentage de réduction obtenu grâce au couvert. c) Le captage d'eau potable voisin présente 65 mg de nitrates par litre. De combien de pour cent dépasse-t-il la limite de 50 mg par litre ? d) Expliquez comment le couvert végétal réduit le lessivage.",
              hint: "Pourcentage de réduction = (valeur de départ - nouvelle valeur) ÷ valeur de départ × 100. Même méthode pour le dépassement, par rapport à 50.",
              solution: [
                "a) Sol nu : 40 × 50 = 2 000 kg d'azote. Avec couvert : 15 × 50 = 750 kg d'azote.",
                "b) Réduction : (2 000 - 750) ÷ 2 000 × 100 = 1 250 ÷ 2 000 × 100 = 62,5 %.",
                "c) Dépassement : (65 - 50) ÷ 50 × 100 = 15 ÷ 50 × 100 = 30 % au-dessus de la limite.",
                "d) Les plantes du couvert absorbent par leurs racines les nitrates restés dans le sol après la récolte ; ces nitrates, intégrés à leur matière organique, ne sont plus entraînés par les pluies d'hiver. Ils seront restitués au sol quand le couvert sera détruit et minéralisé, au profit de la culture suivante.",
                "Résultat : 2 000 kg lessivés sans couvert contre 750 kg avec, soit 62,5 % de réduction ; l'eau du captage dépasse la limite de 30 %.",
              ],
            },
            {
              level: 3,
              statement: "Argumentation à partir de documents. Document 1 (données fictives) : comparaison de deux exploitations céréalières de 100 ha. Exploitation A : rendement en blé 8 t/ha ; engrais azoté 180 kg/ha ; 6 traitements pesticides par an ; 50 vers de terre par m² ; aucune haie. Exploitation B, en agroécologie : rendement 6,5 t/ha ; engrais azoté 60 kg/ha (rotation avec légumineuses) ; 1 traitement par an ; 200 vers de terre par m² ; 4 km de haies. Document 2 : les vers de terre aèrent le sol, favorisent l'infiltration de l'eau et participent à la minéralisation de la matière organique. a) Calculez la production totale de blé de chaque exploitation et l'écart en pourcentage. b) Calculez, pour chaque exploitation, la masse de blé produite par kilogramme d'azote apporté. c) Rédigez une argumentation : quelle exploitation vous paraît la plus durable ? Tenez compte de la production et de l'environnement.",
              hint: "Pour b), divisez le rendement en kilogrammes par hectare par la dose d'azote en kilogrammes par hectare. Pour c), présentez avantages et limites de chaque exploitation avant de conclure.",
              solution: [
                "a) Exploitation A : 8 × 100 = 800 t. Exploitation B : 6,5 × 100 = 650 t. Écart : (800 - 650) ÷ 800 × 100 = 18,75 % : B produit environ 19 % de blé en moins.",
                "b) A : 8 000 ÷ 180 ≈ 44 kg de blé par kg d'azote. B : 6 500 ÷ 60 ≈ 108 kg de blé par kg d'azote. B utilise l'azote environ 2,4 fois plus efficacement.",
                "c) Avantages de A : une production plus élevée sur la même surface. Limites : beaucoup d'engrais (risques de lessivage des nitrates et d'émissions de N₂O, forte consommation d'énergie pour les fabriquer), six traitements par an (risques pour l'eau et les pollinisateurs), un sol moins vivant (50 vers de terre par m²) et aucune haie.",
                "Avantages de B : trois fois moins d'engrais, six fois moins de traitements, un sol quatre fois plus riche en vers de terre, donc mieux aéré et mieux drainé (document 2), des haies favorables à la biodiversité et contre l'érosion. Limite : une production inférieure d'environ 19 %, qui demanderait plus de surface pour produire autant.",
                "Conclusion argumentée : l'exploitation B paraît la plus durable, car elle préserve le sol, l'eau et la biodiversité, conditions de la production future, tout en conservant un rendement élevé ; la baisse de production reste un enjeu, que la réduction du gaspillage et l'évolution de l'alimentation peuvent aider à compenser.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : agriculture et développement durable.",
            statements: [
              { text: "L'eutrophisation est provoquée par un manque d'éléments nutritifs dans l'eau.", true: false, why: "C'est l'inverse : elle résulte d'un excès de nitrates et de phosphates, qui fait proliférer les algues." },
              { text: "Lors de l'eutrophisation, c'est la décomposition des algues mortes qui appauvrit l'eau en dioxygène.", true: true, why: "Les bactéries décomposeurs consomment le dioxygène dissous pour dégrader l'énorme biomasse d'algues mortes." },
              { text: "Un couvert végétal semé après la récolte limite le lessivage des nitrates.", true: true, why: "Ses racines absorbent les nitrates restés dans le sol avant les pluies d'hiver." },
              { text: "La lutte biologique consiste à utiliser des pesticides d'origine naturelle en grande quantité.", true: false, why: "Elle utilise des êtres vivants ennemis naturels des ravageurs, comme les coccinelles contre les pucerons." },
              { text: "Les haies peuvent abriter des auxiliaires des cultures.", true: true, why: "Oiseaux, carabes et coccinelles y trouvent abri et nourriture, et chassent les ravageurs des parcelles voisines." },
              { text: "La digestion des ruminants émet du méthane, un gaz à effet de serre.", true: true, why: "Les microorganismes de leur panse produisent du méthane lors de la digestion de l'herbe." },
              { text: "Une pratique agricole durable n'a jamais aucune limite.", true: false, why: "Toute pratique implique des compromis : plus de travail, de connaissances, ou parfois des rendements plus faibles." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la première étape de l'eutrophisation d'un lac ?",
              options: ["La mort des poissons", "La consommation du dioxygène dissous par les bactéries", "Un apport excessif de nitrates et de phosphates", "La disparition de toutes les algues"],
              answer: 2,
              why: "L'excès d'éléments nutritifs déclenche la prolifération des algues, dont la décomposition consommera ensuite le dioxygène.",
            },
            {
              q: "Quelle est la teneur maximale en nitrates d'une eau destinée à la consommation humaine ?",
              options: ["5 mg par litre", "50 mg par litre", "500 mg par litre", "5 g par litre"],
              answer: 1,
              why: "La réglementation fixe à 50 mg par litre la teneur maximale en nitrates de l'eau potable.",
            },
            {
              q: "Quel gaz à effet de serre est principalement émis par l'usage des engrais azotés ?",
              options: ["Le protoxyde d'azote", "Le dioxygène", "La vapeur d'eau", "Le diazote"],
              answer: 0,
              why: "Une partie de l'azote des engrais est transformée par les bactéries du sol en protoxyde d'azote (N₂O), un puissant gaz à effet de serre.",
            },
            {
              q: "Lâcher des coccinelles contre les pucerons est un exemple de :",
              options: ["Fertilisation raisonnée", "Rotation des cultures", "Culture intermédiaire", "Lutte biologique"],
              answer: 3,
              why: "La lutte biologique utilise des ennemis naturels des ravageurs à la place des pesticides.",
            },
            {
              q: "Pourquoi la rotation des cultures limite-t-elle les ravageurs ?",
              options: ["Elle les rend résistants aux insecticides", "Ils ne retrouvent pas leur plante hôte l'année suivante", "Elle augmente la quantité d'engrais", "Elle supprime les haies et les bosquets où ils passent l'hiver"],
              answer: 1,
              why: "Un ravageur spécialisé d'une culture voit son cycle interrompu lorsque cette culture change de parcelle.",
            },
          ],
          trap: "Croire que l'eutrophisation tue les poissons parce que les nitrates sont toxiques : c'est la décomposition des algues proliférantes par les bactéries qui consomme le dioxygène de l'eau et provoque l'asphyxie.",
          method: "Pour argumenter sur une pratique agricole, construisez un tableau à trois lignes, production, environnement, revenu et travail de l'agriculteur, notez avantages et limites chiffrés tirés des documents, puis concluez en nommant le compromis retenu.",
        },
      ],
    },
  ],
}
