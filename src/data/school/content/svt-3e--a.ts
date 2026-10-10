import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-3e',
  chapters: [
    /* ==================================================================== */
    /* L'INFORMATION GÉNÉTIQUE                                                */
    /* ==================================================================== */
    {
      id: 'information-genetique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'chromosomes-adn',
          title: 'Chromosomes, ADN et gènes',
          minutes: 30,
          objectives: [
            "Situer l'information génétique dans le noyau des cellules, portée par les chromosomes.",
            "Décrire un chromosome comme une longue molécule d'ADN, formée d'une ou de deux chromatides.",
            "Définir un gène comme une portion d'ADN qui détermine un caractère héréditaire.",
            "Exploiter une expérience de transfert de noyau ou de transgenèse pour montrer que l'ADN porte l'information génétique.",
          ],
          course: [
            {
              heading: "Le noyau, siège de l'information génétique",
              paragraphs: [
                "Tous les êtres vivants sont formés de cellules. Votre corps en compte des dizaines de milliers de milliards. Presque toutes possèdent un noyau (les globules rouges, qui le perdent en se formant, sont une exception). C'est dans ce noyau que se trouve l'information génétique : l'ensemble des instructions qui permettent à la cellule de fonctionner et qui déterminent les caractères héréditaires de l'individu.",
                "Une expérience célèbre le montre. En 1996, des chercheurs écossais ont prélevé le noyau d'une cellule d'une brebis à face blanche et l'ont placé dans un ovule (plus exactement un ovocyte) privé de son noyau, venant d'une brebis à face noire. La cellule obtenue a été implantée dans l'utérus d'une troisième brebis, une mère porteuse. L'agneau né, Dolly, avait la face blanche : il ressemblait à la brebis qui avait donné le noyau, et non aux deux autres.",
              ],
              box: { label: "À retenir", text: "L'information génétique se trouve dans le noyau de la cellule. Un être vivant obtenu par transfert de noyau possède les caractères de l'individu qui a donné le noyau." },
            },
            {
              heading: "Les chromosomes",
              paragraphs: [
                "Dans le noyau, l'information génétique est portée par des chromosomes. La plupart du temps, ils sont longs, fins et emmêlés : on ne les distingue pas au microscope. Au moment où la cellule se divise, ils s'enroulent sur eux-mêmes, se condensent et deviennent visibles sous la forme de petits bâtonnets.",
                "Un chromosome peut avoir deux aspects. Il est formé soit d'une seule chromatide (un seul bâtonnet), soit de deux chromatides identiques reliées en un point appelé centromère, ce qui lui donne une forme de X. Il possède deux chromatides après avoir été copié, juste avant une division cellulaire.",
              ],
              box: { label: "Définition", text: "Un chromosome est un élément du noyau qui porte l'information génétique. Il est formé d'une molécule d'ADN associée à des protéines. Il compte une chromatide, ou deux chromatides identiques reliées par le centromère." },
            },
            {
              heading: "L'ADN, la molécule de l'information génétique",
              paragraphs: [
                "Chaque chromatide contient une seule et très longue molécule d'ADN (acide désoxyribonucléique), enroulée autour de protéines. L'ADN a la forme d'une double hélice, comme une échelle torsadée, dont la structure a été décrite en 1953 par James Watson et Francis Crick, à partir notamment des travaux de Rosalind Franklin.",
                "L'ADN est construit avec seulement quatre éléments, désignés par les lettres A, T, C et G. L'ordre de ces lettres le long de la molécule, appelé séquence, forme un message, comme les lettres d'un texte. Mis bout à bout, l'ADN d'une seule de vos cellules mesurerait environ 2 mètres, alors que le noyau ne mesure que quelques micromètres : il est extrêmement replié.",
                "L'ADN est la même molécule chez tous les êtres vivants, et il est lu de la même façon. C'est pourquoi on peut transférer un gène d'une espèce à une autre : c'est la transgenèse. Depuis les années 1980, des bactéries qui ont reçu le gène humain de l'insuline fabriquent de l'insuline humaine, utilisée pour soigner des personnes diabétiques.",
              ],
            },
            {
              heading: "Les gènes",
              paragraphs: [
                "Un gène est une portion d'ADN, donc une petite partie d'un chromosome, qui contient l'information nécessaire à la réalisation d'un caractère héréditaire (par exemple le groupe sanguin). Chaque gène occupe un emplacement précis sur un chromosome donné. Un chromosome porte de quelques centaines à quelques milliers de gènes, et l'espèce humaine possède environ 20 000 gènes.",
                "Une analogie aide à retenir l'emboîtement : le noyau est une bibliothèque, chaque chromosome est un livre, l'ADN est le texte écrit avec un alphabet de quatre lettres, et un gène est une recette précise dans l'un de ces livres.",
              ],
              box: { label: "Définition", text: "Un gène est une portion d'ADN située à un emplacement précis d'un chromosome. Il porte l'information qui détermine un caractère héréditaire." },
            },
          ],
          keyPoints: [
            "L'information génétique est contenue dans le noyau des cellules.",
            "Elle est portée par les chromosomes, visibles sous forme de bâtonnets quand la cellule se divise.",
            "Un chromosome est formé d'une chromatide ou de deux chromatides identiques reliées par le centromère.",
            "Chaque chromatide contient une longue molécule d'ADN en double hélice, écrite avec quatre lettres : A, T, C, G.",
            "Un gène est une portion d'ADN qui détermine un caractère héréditaire ; l'être humain en possède environ 20 000.",
            "L'ADN est universel : un gène transféré dans une autre espèce y reste fonctionnel (transgenèse).",
          ],
          example: {
            statement: "Pour obtenir Dolly, des chercheurs ont placé le noyau d'une cellule de brebis à face blanche dans un ovocyte sans noyau provenant d'une brebis à face noire, puis ont implanté l'embryon dans une brebis porteuse à face noire. Dolly est née avec la face blanche. Que montre cette expérience ?",
            solution: [
              "Je relève l'origine de chaque élément : le noyau vient de la brebis à face blanche, le reste de la cellule (le cytoplasme) vient d'une brebis à face noire, et la gestation a eu lieu chez une brebis à face noire.",
              "J'observe le résultat : Dolly a la face blanche, comme la brebis qui a donné le noyau.",
              "Je raisonne : seul le noyau venait d'une brebis à face blanche. C'est donc lui qui a apporté l'information déterminant ce caractère.",
              "Conclusion : l'information génétique qui détermine les caractères héréditaires est contenue dans le noyau de la cellule.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants du plus grand au plus petit : gène, cellule, chromosome, noyau. Puis complétez la phrase : « Un gène est une portion d'... ».",
              hint: "Pensez à l'analogie de la bibliothèque : qu'est-ce qui contient quoi ?",
              solution: [
                "La cellule contient le noyau.",
                "Le noyau contient les chromosomes.",
                "Chaque chromosome porte de nombreux gènes.",
                "Ordre : cellule, noyau, chromosome, gène.",
                "Phrase complétée : « Un gène est une portion d'ADN » (située sur un chromosome).",
              ],
            },
            {
              level: 2,
              statement: "Le noyau d'une cellule humaine a un diamètre d'environ 6 µm. L'ADN qu'il contient, déroulé et mis bout à bout, mesurerait environ 2 m. Sachant que 1 m = 1 000 000 µm, calculez combien de fois l'ADN est plus long que le diamètre du noyau. Que pouvez-vous en déduire ?",
              hint: "Convertissez d'abord les 2 m en micromètres, puis divisez par 6.",
              solution: [
                "Conversion : 2 m = 2 × 1 000 000 µm = 2 000 000 µm.",
                "Division : 2 000 000 ÷ 6 ≈ 333 333.",
                "L'ADN est donc environ 330 000 fois plus long que le diamètre du noyau.",
                "Déduction : pour tenir dans le noyau, l'ADN doit être extrêmement enroulé et replié (autour de protéines), ce qui forme les chromosomes.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document : le diabète de type 1 se soigne par des injections d'insuline, une protéine fabriquée normalement par le pancréas. Depuis les années 1980, on insère le gène humain de l'insuline dans l'ADN de bactéries. Ces bactéries se multiplient et fabriquent de l'insuline humaine, qui est ensuite purifiée pour les malades. Les bactéries non modifiées ne fabriquent pas d'insuline. 1. Comment appelle-t-on cette technique ? 2. Montrez que le gène porte l'information nécessaire à la fabrication de l'insuline. 3. Que nous apprend cette expérience sur l'ADN des êtres vivants ?",
              hint: "Comparez les bactéries modifiées et les bactéries non modifiées : une seule chose les distingue.",
              solution: [
                "1. Transférer un gène d'une espèce à une autre s'appelle la transgenèse.",
                "2. Les bactéries non modifiées ne fabriquent pas d'insuline, alors que les bactéries qui ont reçu le gène humain en fabriquent. La seule différence entre elles est la présence de ce gène.",
                "Donc c'est le gène de l'insuline, une portion d'ADN, qui porte l'information permettant de fabriquer l'insuline.",
                "3. Un gène humain est lu et utilisé par une bactérie : l'ADN est la même molécule chez tous les êtres vivants et son information est lue de la même façon. On dit que l'ADN est universel.",
                "Conclusion : l'ADN est le support universel de l'information génétique.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Noyau", right: "Partie de la cellule qui contient l'information génétique" },
              { left: "Chromosome", right: "Élément du noyau formé d'ADN et de protéines" },
              { left: "ADN", right: "Molécule en double hélice, écrite avec A, T, C et G" },
              { left: "Gène", right: "Portion d'ADN qui détermine un caractère héréditaire" },
              { left: "Chromatide", right: "Chacun des deux bâtonnets identiques d'un chromosome copié" },
              { left: "Transgenèse", right: "Transfert d'un gène d'une espèce à une autre" },
            ],
          },
          quiz: [
            {
              q: "Où se trouve l'information génétique dans une cellule ?",
              options: ["Dans la membrane", "Dans le noyau", "Dans le cytoplasme uniquement", "Dans les globules rouges"],
              answer: 1,
              why: "L'information génétique est portée par les chromosomes, situés dans le noyau de la cellule.",
            },
            {
              q: "De quoi un chromosome est-il principalement constitué ?",
              options: ["De globules rouges", "D'eau et de sels minéraux dissous","D'ADN associé à des protéines", "De cellules"],
              answer: 2,
              why: "Un chromosome est une molécule d'ADN enroulée autour de protéines.",
            },
            {
              q: "Qu'est-ce qu'un gène ?",
              options: ["Une portion d'ADN", "Un chromosome entier", "Une cellule spécialisée", "Une protéine du sang"],
              answer: 0,
              why: "Un gène est une portion d'ADN, située à un emplacement précis d'un chromosome, qui détermine un caractère héréditaire.",
            },
            {
              q: "Dolly a été obtenue avec le noyau d'une brebis à face blanche. Quelle face avait-elle ?",
              options: ["Noire, comme la mère porteuse", "Noire, comme la donneuse de l'ovocyte", "Tachetée de blanc et de noir", "Blanche"],
              answer: 3,
              why: "Les caractères héréditaires dépendent de l'information génétique, contenue dans le noyau : Dolly ressemblait à la donneuse du noyau.",
            },
            {
              q: "Pourquoi une bactérie peut-elle fabriquer de l'insuline humaine après transgenèse ?",
              options: ["Parce qu'elle devient une cellule humaine", "Parce que l'ADN est lu de la même façon chez tous les êtres vivants", "Parce qu'elle absorbe toute l'insuline présente autour d'elle dans son milieu","Parce qu'elle perd son propre ADN"],
              answer: 1,
              why: "L'ADN est universel : un gène humain inséré dans une bactérie y est lu et utilisé.",
            },
          ],
          trap: "Confondre chromosome, ADN et gène, ou croire qu'un chromosome porte un seul gène. Un chromosome est une molécule d'ADN qui porte des centaines à des milliers de gènes.",
          method: "Pour vérifier une définition, refaites l'emboîtement à voix haute : cellule, noyau, chromosome, ADN, gène. Si un terme ne trouve pas sa place, revoyez sa définition.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'caryotype',
          title: 'Le caryotype humain',
          minutes: 30,
          objectives: [
            "Définir un caryotype et expliquer comment il est réalisé.",
            "Décrire le caryotype humain : 23 paires de chromosomes, dont une paire de chromosomes sexuels.",
            "Distinguer les cellules à 46 chromosomes et les gamètes à 23 chromosomes.",
            "Identifier sur un caryotype le sexe d'une personne et une anomalie du nombre de chromosomes.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un caryotype ?",
              paragraphs: [
                "Un caryotype est la photographie des chromosomes d'une cellule, rangés par paires. On l'obtient à partir de cellules en train de se diviser (par exemple des globules blancs prélevés dans le sang), car c'est seulement à ce moment que les chromosomes sont condensés et visibles. Ils possèdent alors deux chromatides et ont une forme de X.",
                "Les chromosomes sont ensuite classés selon trois critères : leur taille (du plus grand au plus petit), la position de leur centromère et la répartition des bandes claires et sombres qui apparaissent après coloration. Les deux chromosomes d'une même paire se ressemblent sur ces trois critères.",
              ],
              box: { label: "Définition", text: "Le caryotype est la représentation ordonnée des chromosomes d'une cellule, classés par paires selon leur taille, la position du centromère et leurs bandes." },
            },
            {
              heading: "Le caryotype humain : 23 paires de chromosomes",
              paragraphs: [
                "Les cellules humaines possèdent 46 chromosomes, regroupés en 23 paires. Les paires numérotées de 1 à 22 sont identiques chez la femme et chez l'homme : ce sont les autosomes. La 23e paire est celle des chromosomes sexuels (ou gonosomes) : XX chez la femme, XY chez l'homme. Le chromosome Y est beaucoup plus petit que le chromosome X.",
                "Les deux chromosomes d'une paire sont dits homologues : ils portent les mêmes gènes, aux mêmes emplacements. L'un vient du père, l'autre vient de la mère. Vous possédez donc chaque gène en deux exemplaires.",
              ],
              box: { label: "À retenir", text: "Caryotype humain : 46 chromosomes = 22 paires d'autosomes + 1 paire de chromosomes sexuels. Femme : XX. Homme : XY." },
            },
            {
              heading: "Cellules à 46 chromosomes et gamètes à 23 chromosomes",
              paragraphs: [
                "Toutes les cellules du corps possèdent 46 chromosomes, par paires, à l'exception des gamètes (cellules reproductrices). Un spermatozoïde ou un ovule ne contient que 23 chromosomes : un seul chromosome de chaque paire.",
                "Un ovule contient toujours un chromosome X. Un spermatozoïde contient soit un chromosome X, soit un chromosome Y. Lors de la fécondation, la réunion d'un ovule et d'un spermatozoïde rétablit les 46 chromosomes, par paires, dans la cellule-œuf.",
              ],
            },
            {
              heading: "Anomalies et diversité des caryotypes",
              paragraphs: [
                "Un caryotype permet de repérer une anomalie du nombre de chromosomes. Dans la trisomie 21, la cellule possède trois chromosomes 21 au lieu de deux, soit 47 chromosomes. D'autres anomalies touchent les chromosomes sexuels : le syndrome de Turner (un seul chromosome X, 45 chromosomes) ou le syndrome de Klinefelter (XXY, 47 chromosomes). Ces anomalies proviennent en général d'un gamète qui a reçu un chromosome en trop ou en moins.",
                "Le nombre de chromosomes est le même pour tous les individus d'une espèce, mais il varie d'une espèce à l'autre : 48 chez le chimpanzé, 38 chez le chat, 78 chez le chien, 64 chez le cheval, 8 chez la mouche drosophile. Il n'a aucun lien avec la taille ou la complexité de l'être vivant.",
              ],
              box: { label: "Repère", text: "Trisomie 21 : 47 chromosomes (trois chromosomes 21). Syndrome de Turner : 45 chromosomes (X seul). Syndrome de Klinefelter : 47 chromosomes (XXY)." },
            },
          ],
          keyPoints: [
            "Un caryotype présente les chromosomes d'une cellule en division, rangés par paires selon leur taille, leur centromère et leurs bandes.",
            "L'être humain possède 46 chromosomes : 22 paires d'autosomes et une paire de chromosomes sexuels.",
            "Femme : XX ; homme : XY.",
            "Les chromosomes d'une paire portent les mêmes gènes ; l'un vient du père, l'autre de la mère.",
            "Les gamètes ne contiennent que 23 chromosomes, un de chaque paire.",
            "La trisomie 21 se repère sur le caryotype : trois chromosomes 21, soit 47 chromosomes.",
          ],
          example: {
            statement: "Le caryotype d'un enfant compte 47 chromosomes. On y observe trois chromosomes 21 et, pour la 23e paire, un grand chromosome et un petit. Déterminez le sexe de l'enfant et nommez son anomalie.",
            solution: [
              "Je regarde la 23e paire : un grand chromosome (X) et un petit (Y), donc XY.",
              "Un enfant XY est un garçon.",
              "Je compte : 47 chromosomes au lieu de 46, avec un chromosome 21 en trop.",
              "Trois chromosomes 21 caractérisent la trisomie 21.",
              "Conclusion : il s'agit d'un garçon atteint de trisomie 21.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un caryotype présente 23 paires de chromosomes ; les deux chromosomes de la 23e paire sont deux grands chromosomes identiques. 1. Combien de chromosomes ce caryotype compte-t-il ? 2. Quel est le sexe de la personne ? 3. Ce caryotype présente-t-il une anomalie du nombre de chromosomes ?",
              hint: "Deux grands chromosomes sexuels identiques sont deux chromosomes X.",
              solution: [
                "1. 23 paires × 2 = 46 chromosomes.",
                "2. La 23e paire est formée de deux chromosomes X : XX, c'est une femme.",
                "3. Le nombre est de 46 et chaque paire compte deux chromosomes : aucune anomalie du nombre.",
                "Conclusion : caryotype normal de femme (46, XX).",
              ],
            },
            {
              level: 2,
              statement: "Voici le nombre de chromosomes des cellules (hors gamètes) de quelques espèces : chien 78, cheval 64, chat 38, drosophile 8, être humain 46. 1. Calculez le nombre de chromosomes d'un gamète de chacune de ces espèces. 2. Un élève affirme : « Plus une espèce est complexe, plus elle a de chromosomes. » Les données le confirment-elles ?",
              hint: "Un gamète reçoit un seul chromosome de chaque paire : divisez par 2.",
              solution: [
                "1. Chien : 78 ÷ 2 = 39 ; cheval : 64 ÷ 2 = 32 ; chat : 38 ÷ 2 = 19 ; drosophile : 8 ÷ 2 = 4 ; être humain : 46 ÷ 2 = 23.",
                "2. Le chien (78) et le cheval (64) ont plus de chromosomes que l'être humain (46).",
                "On ne peut pas dire pour autant qu'ils sont « plus complexes » : le nombre de chromosomes ne mesure pas la complexité.",
                "Conclusion : les données ne confirment pas l'affirmation. Le nombre de chromosomes est caractéristique d'une espèce, sans lien avec sa complexité.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. On étudie deux caryotypes. Caryotype A : 45 chromosomes, 22 paires d'autosomes normales et un seul chromosome X. Caryotype B : 47 chromosomes, 22 paires d'autosomes normales et trois chromosomes sexuels X, X et Y. 1. Nommez l'anomalie de chaque caryotype. 2. Sachant qu'un ovule normal contient 22 autosomes et un X, et qu'un spermatozoïde normal contient 22 autosomes et un X ou un Y, proposez une explication à l'origine du caryotype B.",
              hint: "Le caryotype B possède un chromosome sexuel en plus : il a été apporté par l'un des deux gamètes.",
              solution: [
                "1. Caryotype A : un seul chromosome X, 45 chromosomes, c'est le syndrome de Turner.",
                "Caryotype B : XXY, 47 chromosomes, c'est le syndrome de Klinefelter.",
                "2. La cellule-œuf résulte de la réunion d'un ovule et d'un spermatozoïde. Pour obtenir XXY, il faut que l'un des gamètes ait apporté deux chromosomes sexuels.",
                "Première possibilité : un spermatozoïde anormal contenant X et Y a fécondé un ovule normal contenant X.",
                "Seconde possibilité : un ovule anormal contenant deux X a été fécondé par un spermatozoïde normal contenant Y.",
                "Conclusion : le caryotype B provient d'un gamète anormal possédant un chromosome sexuel en trop (24 chromosomes au lieu de 23).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le caryotype.",
            statements: [
              { text: "Un caryotype humain normal compte 23 chromosomes.", true: false, why: "Il compte 46 chromosomes, soit 23 paires. Seuls les gamètes ont 23 chromosomes." },
              { text: "Les chromosomes XY caractérisent un homme.", true: true, why: "La 23e paire est XX chez la femme et XY chez l'homme." },
              { text: "Les deux chromosomes d'une paire viennent du même parent.", true: false, why: "L'un vient du père, l'autre de la mère." },
              { text: "Le chien a plus de chromosomes que l'être humain.", true: true, why: "Le chien en a 78 contre 46 : le nombre de chromosomes ne mesure pas la complexité." },
              { text: "Une personne atteinte de trisomie 21 possède 47 chromosomes.", true: true, why: "Elle possède trois chromosomes 21 au lieu de deux." },
              { text: "Un ovule peut contenir un chromosome Y.", true: false, why: "Un ovule contient toujours un chromosome X ; seul le spermatozoïde peut porter un Y." },
              { text: "On réalise un caryotype avec des cellules en division.", true: true, why: "C'est le seul moment où les chromosomes sont condensés et visibles." },
            ],
          },
          quiz: [
            {
              q: "Combien de paires d'autosomes compte le caryotype humain ?",
              options: ["23", "46", "22", "2"],
              answer: 2,
              why: "Il y a 22 paires d'autosomes et une 23e paire, celle des chromosomes sexuels.",
            },
            {
              q: "Quelle 23e paire observe-t-on chez une femme ?",
              options: ["XX", "XY", "YY", "X seul"],
              answer: 0,
              why: "La femme possède deux chromosomes X.",
            },
            {
              q: "Combien de chromosomes contient un spermatozoïde humain ?",
              options: ["46", "47", "92", "23"],
              answer: 3,
              why: "Un gamète reçoit un seul chromosome de chaque paire, soit 23 chromosomes.",
            },
            {
              q: "Selon quels critères range-t-on les chromosomes sur un caryotype ?",
              options: ["Leur couleur naturelle et leur âge", "Leur taille, leur centromère et leurs bandes", "L'ordre dans lequel on les a photographiés au microscope", "Le parent dont ils proviennent"],
              answer: 1,
              why: "On les classe par taille décroissante, selon la position du centromère et la répartition des bandes.",
            },
            {
              q: "Un caryotype compte trois chromosomes 21. De quoi s'agit-il ?",
              options: ["D'un syndrome de Turner", "D'un caryotype normal", "D'une trisomie 21", "D'un syndrome de Klinefelter"],
              answer: 2,
              why: "La présence de trois chromosomes 21 caractérise la trisomie 21.",
            },
          ],
          trap: "Dire que l'être humain possède 23 chromosomes. Il en possède 46, rangés en 23 paires ; seuls les gamètes en ont 23.",
          method: "Pour lire un caryotype, procédez toujours dans le même ordre : comptez les chromosomes, regardez la 23e paire pour le sexe, puis cherchez une paire qui n'a pas exactement deux chromosomes.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'genes-alleles-caracteres',
          title: 'Gènes, allèles et caractères',
          minutes: 35,
          objectives: [
            "Distinguer un caractère héréditaire d'un caractère influencé par l'environnement.",
            "Définir un allèle comme une version d'un gène.",
            "Expliquer qu'un individu possède deux allèles de chaque gène, un sur chaque chromosome d'une paire.",
            "Déterminer le groupe sanguin d'un individu à partir de ses allèles, en utilisant les notions de dominant et de récessif.",
          ],
          course: [
            {
              heading: "Des caractères héréditaires",
              paragraphs: [
                "Un caractère est un trait observable d'un individu : la couleur des yeux, le groupe sanguin, la forme du lobe de l'oreille, la taille. Un caractère héréditaire est transmis des parents aux enfants par l'intermédiaire des gènes. Le groupe sanguin, par exemple, est fixé dès la fécondation et ne change pas au cours de la vie.",
                "Beaucoup de caractères dépendent à la fois des gènes et de l'environnement (alimentation, soleil, activité physique). La couleur de la peau dépend des gènes, mais elle fonce au soleil ; la taille adulte dépend des gènes, mais aussi de l'alimentation pendant la croissance. Les vrais jumeaux ont les mêmes gènes, mais ils peuvent différer par leur musculature ou leurs cicatrices.",
              ],
              box: { label: "À retenir", text: "Les caractères d'un individu dépendent de ses gènes et, souvent, de son environnement. Seuls les caractères déterminés par les gènes sont héréditaires." },
            },
            {
              heading: "Un gène, plusieurs allèles",
              paragraphs: [
                "Un gène occupe toujours le même emplacement sur les deux chromosomes d'une paire. Mais il peut exister sous plusieurs versions, qui diffèrent par quelques lettres de leur séquence d'ADN : ces versions s'appellent des allèles. Par exemple, le gène du groupe sanguin ABO, situé sur la paire de chromosomes 9, existe sous trois allèles : A, B et O.",
                "Comme les chromosomes vont par paires, chaque individu possède deux exemplaires de chaque gène : un sur le chromosome venu du père, un sur le chromosome venu de la mère. Ces deux allèles peuvent être identiques (par exemple A et A) ou différents (par exemple A et O). On note les deux allèles entre parenthèses, séparés par deux traits obliques : (A//O).",
              ],
              box: { label: "Définition", text: "Un allèle est une version d'un gène. Un individu possède deux allèles de chaque gène, identiques ou différents, portés par les deux chromosomes d'une même paire." },
            },
            {
              heading: "Allèles dominants et récessifs : les groupes sanguins",
              paragraphs: [
                "Quand les deux allèles d'un gène sont différents, ils ne s'expriment pas toujours tous les deux. Un allèle est dominant s'il s'exprime même quand il est présent en un seul exemplaire. Un allèle est récessif s'il ne s'exprime que lorsqu'il est présent en deux exemplaires.",
                "Pour le groupe sanguin, les allèles A et B sont dominants sur l'allèle O, et A et B s'expriment tous les deux quand ils sont ensemble (on dit qu'ils sont codominants). Ainsi : (A//A) ou (A//O) donnent le groupe A ; (B//B) ou (B//O) donnent le groupe B ; (A//B) donne le groupe AB ; seul (O//O) donne le groupe O.",
                "Le facteur Rhésus est déterminé par un autre gène, porté par la paire de chromosomes 1. L'allèle Rh+ est dominant sur l'allèle Rh- : une personne n'est Rhésus négatif que si elle possède deux allèles Rh-.",
              ],
              box: { label: "Règle", text: "Allèle dominant : il s'exprime en un seul exemplaire. Allèle récessif : il ne s'exprime qu'en deux exemplaires. Groupe O = (O//O). Groupe AB = (A//B)." },
            },
            {
              heading: "Des allèles au caractère",
              paragraphs: [
                "Un gène contient l'information qui permet à la cellule de fabriquer une protéine. Deux allèles différents conduisent à des protéines un peu différentes, ce qui explique les différences de caractères. Par exemple, l'allèle A permet de fabriquer une protéine qui place une molécule A à la surface des globules rouges ; l'allèle O ne permet pas de fabriquer une protéine active.",
                "Certaines maladies génétiques sont dues à un allèle récessif. C'est le cas de la mucoviscidose, liée à un gène de la paire de chromosomes 7. Une personne qui possède un seul allèle muté n'est pas malade : elle est porteuse. Elle n'est malade que si elle a reçu l'allèle muté de ses deux parents.",
              ],
            },
          ],
          keyPoints: [
            "Un caractère héréditaire est déterminé par des gènes ; de nombreux caractères dépendent aussi de l'environnement.",
            "Un allèle est une version d'un gène.",
            "Chaque individu possède deux allèles de chaque gène, un venu de chaque parent.",
            "Un allèle dominant s'exprime en un exemplaire ; un allèle récessif ne s'exprime qu'en deux exemplaires.",
            "Groupe sanguin : A et B dominants sur O ; (A//B) donne AB ; seul (O//O) donne le groupe O.",
          ],
          example: {
            statement: "Un père de groupe A a pour allèles (A//O). Une mère de groupe B a pour allèles (B//O). Quels groupes sanguins leurs enfants peuvent-ils avoir ?",
            solution: [
              "Chaque parent transmet un seul de ses deux allèles à un enfant.",
              "Le père transmet A ou O ; la mère transmet B ou O.",
              "Combinaisons possibles : (A//B), (A//O), (O//B), (O//O).",
              "Je traduis en groupes : (A//B) donne AB ; (A//O) donne A ; (B//O) donne B ; (O//O) donne O.",
              "Conclusion : les enfants de ce couple peuvent être de groupe A, B, AB ou O.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le groupe sanguin de chaque personne : Léa (B//O), Hugo (A//B), Inès (O//O), Tom (A//A).",
              hint: "A et B dominent O ; A et B ensemble s'expriment tous les deux.",
              solution: [
                "Léa (B//O) : B domine O, elle est de groupe B.",
                "Hugo (A//B) : A et B s'expriment tous les deux, il est de groupe AB.",
                "Inès (O//O) : deux allèles O, elle est de groupe O.",
                "Tom (A//A) : il est de groupe A.",
              ],
            },
            {
              level: 2,
              statement: "Deux parents sont tous les deux de groupe A. Leur enfant est de groupe O. 1. Quels sont les allèles de l'enfant ? 2. Déduisez-en les allèles de chaque parent. Justifiez.",
              hint: "L'allèle O est récessif : pour être de groupe O, il faut deux allèles O.",
              solution: [
                "1. L'allèle O est récessif : l'enfant de groupe O possède forcément (O//O).",
                "2. L'enfant a reçu un allèle O de son père et un allèle O de sa mère.",
                "Chaque parent possède donc un allèle O. Comme ils sont de groupe A, leur autre allèle est A.",
                "Conclusion : les deux parents ont pour allèles (A//O). L'allèle O, présent chez eux, était masqué par l'allèle dominant A.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. La mucoviscidose est une maladie génétique due à un allèle muté m d'un gène porté par la paire de chromosomes 7 ; l'allèle normal est noté N. L'allèle m est récessif. Paul et Julie ne sont pas malades, mais leur premier enfant est atteint de mucoviscidose. 1. Donnez les allèles de l'enfant. 2. Déduisez-en les allèles de Paul et de Julie. 3. À l'aide d'un tableau de croisement des gamètes, déterminez la probabilité qu'un futur enfant du couple soit malade.",
              hint: "Un parent (N//m) produit deux sortes de gamètes, en proportions égales : N ou m.",
              solution: [
                "1. L'allèle m est récessif : l'enfant malade possède deux allèles mutés, (m//m).",
                "2. Il a reçu un allèle m de chaque parent. Paul et Julie ont donc chacun un allèle m ; comme ils ne sont pas malades, leur autre allèle est N : ils sont tous deux (N//m), porteurs sains.",
                "3. Gamètes de Paul : N (1 sur 2) ou m (1 sur 2). Gamètes de Julie : N (1 sur 2) ou m (1 sur 2).",
                "Tableau de croisement : N avec N donne (N//N) ; N avec m donne (N//m) ; m avec N donne (N//m) ; m avec m donne (m//m).",
                "Sur les quatre combinaisons, également probables, une seule, (m//m), correspond à un enfant malade.",
                "Conclusion : à chaque grossesse, la probabilité que l'enfant soit malade est de 1 sur 4 (25 %).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition ou à son exemple.",
            pairs: [
              { left: "Allèle", right: "Version d'un gène" },
              { left: "Allèle dominant", right: "S'exprime même en un seul exemplaire" },
              { left: "Allèle récessif", right: "Ne s'exprime qu'en deux exemplaires" },
              { left: "(O//O)", right: "Groupe sanguin O" },
              { left: "(A//B)", right: "Groupe sanguin AB" },
              { left: "Caractère héréditaire", right: "Trait transmis des parents aux enfants par les gènes" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un allèle ?",
              options: ["Une version d'un gène", "Une paire de chromosomes", "Un caractère acquis", "Une cellule reproductrice"],
              answer: 0,
              why: "Un allèle est l'une des versions possibles d'un gène, qui diffère des autres par quelques lettres d'ADN.",
            },
            {
              q: "Combien d'allèles de chaque gène une cellule du corps possède-t-elle ?",
              options: ["Un seul", "Trois", "Autant que de chromosomes", "Deux"],
              answer: 3,
              why: "Les chromosomes vont par paires : chaque gène est présent en deux exemplaires, un venu de chaque parent.",
            },
            {
              q: "Quel est le groupe sanguin d'une personne (A//O) ?",
              options: ["O", "A", "AB", "On ne peut pas savoir"],
              answer: 1,
              why: "L'allèle A est dominant sur l'allèle O : il s'exprime seul.",
            },
            {
              q: "Lequel de ces caractères dépend aussi de l'environnement ?",
              options: ["Le groupe sanguin", "Le facteur Rhésus", "La couleur de la peau", "Le nombre de chromosomes"],
              answer: 2,
              why: "La couleur de la peau dépend des gènes, mais elle fonce sous l'effet du soleil.",
            },
            {
              q: "Deux parents non malades ont un enfant atteint d'une maladie due à un allèle récessif. Que peut-on dire des parents ?",
              options: ["Ils portent chacun un allèle muté", "L'un d'eux est malade sans le savoir", "Ils n'ont aucun allèle muté", "Seule la mère porte l'allèle muté"],
              answer: 0,
              why: "L'enfant a reçu un allèle muté de chaque parent ; non malades, les parents possèdent aussi un allèle normal dominant.",
            },
          ],
          trap: "Confondre gène et allèle : le gène est l'emplacement et l'information pour un caractère (le groupe sanguin), l'allèle est l'une de ses versions (A, B ou O).",
          method: "Pour un problème de transmission, écrivez toujours les deux allèles de chaque parent, puis listez les gamètes possibles avant de les combiner : cela évite d'oublier une combinaison.",
        },
      ],
    },

    /* ==================================================================== */
    /* LA TRANSMISSION DE L'INFORMATION GÉNÉTIQUE                             */
    /* ==================================================================== */
    {
      id: 'transmission-genetique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mitose',
          title: "La division cellulaire : conserver l'information génétique",
          minutes: 30,
          objectives: [
            "Expliquer le rôle des divisions cellulaires dans la croissance, le renouvellement et la réparation de l'organisme.",
            "Décrire la copie de l'ADN qui précède la division : le passage des chromosomes d'une à deux chromatides.",
            "Décrire les grandes étapes de la mitose et la répartition des chromatides entre les deux cellules filles.",
            "Expliquer pourquoi les cellules filles possèdent la même information génétique que la cellule mère.",
          ],
          course: [
            {
              heading: "Pourquoi les cellules se divisent",
              paragraphs: [
                "Chaque être humain provient d'une seule cellule, la cellule-œuf, issue de la fécondation. Cette cellule se divise en deux, puis chacune se divise à nouveau, et ainsi de suite : c'est ainsi que se forment les dizaines de milliers de milliards de cellules de l'adulte.",
                "Les divisions cellulaires ne s'arrêtent pas à la naissance. Elles permettent la croissance, le renouvellement des cellules qui meurent (les cellules de la peau ou les globules rouges, fabriqués en permanence dans la moelle osseuse) et la réparation des tissus, par exemple lors de la cicatrisation d'une plaie.",
                "Toutes les cellules d'un individu, issues de la même cellule-œuf, possèdent les mêmes chromosomes et donc la même information génétique. Pour cela, chaque division doit transmettre une copie complète et exacte de l'information génétique aux deux nouvelles cellules.",
              ],
            },
            {
              heading: "Avant la division : la copie de l'ADN",
              paragraphs: [
                "Entre deux divisions, chaque chromosome est formé d'une seule chromatide, c'est-à-dire d'une seule molécule d'ADN. Avant de se diviser, la cellule copie entièrement son ADN : c'est la duplication (on parle aussi de réplication).",
                "Après la copie, chaque chromosome est formé de deux chromatides identiques, reliées par le centromère. La cellule humaine possède toujours 46 chromosomes, mais chacun est maintenant double : la quantité d'ADN de la cellule a doublé.",
              ],
              box: { label: "À retenir", text: "Avant chaque division, l'ADN est copié à l'identique. Chaque chromosome passe d'une chromatide à deux chromatides identiques, et la quantité d'ADN de la cellule double." },
            },
            {
              heading: "La mitose : un partage équitable",
              paragraphs: [
                "La mitose est la division d'une cellule, appelée cellule mère, en deux cellules filles. Elle se déroule en plusieurs étapes continues. D'abord, les chromosomes se condensent et deviennent visibles au microscope. Ensuite, ils s'alignent au centre de la cellule.",
                "Puis les deux chromatides de chaque chromosome se séparent et migrent vers deux pôles opposés de la cellule. Enfin, la cellule se partage en deux : chaque cellule fille reçoit une chromatide de chacun des 46 chromosomes. Pour aller plus loin, ces étapes portent les noms de prophase, métaphase, anaphase et télophase.",
              ],
              box: { label: "Définition", text: "La mitose est la division d'une cellule mère en deux cellules filles qui reçoivent chacune un exemplaire de chaque chromosome, et donc la même information génétique que la cellule mère." },
            },
            {
              heading: "Le résultat : des cellules génétiquement identiques",
              paragraphs: [
                "Comme les deux chromatides d'un chromosome sont des copies identiques, les deux cellules filles reçoivent exactement la même information génétique, identique à celle de la cellule mère. On dit qu'elles forment un clone. Chez l'être humain, une cellule à 46 chromosomes donne deux cellules à 46 chromosomes.",
                "Si l'on suit la quantité d'ADN d'une cellule, elle double pendant la copie (de Q à 2Q), puis revient à Q dans chaque cellule fille après la mitose. Et comme chaque division double le nombre de cellules, une cellule donne 2 cellules après une division, 4 après deux divisions, 8 après trois, soit 2ⁿ cellules après n divisions.",
              ],
              box: { label: "Formule", text: "Après n divisions successives d'une cellule, on obtient 2ⁿ cellules (2, 4, 8, 16, 32...). Quantité d'ADN : Q avant la copie, 2Q après la copie, Q dans chaque cellule fille." },
            },
          ],
          keyPoints: [
            "Les divisions cellulaires assurent la croissance, le renouvellement et la réparation de l'organisme.",
            "Avant la division, l'ADN est copié : chaque chromosome passe d'une à deux chromatides identiques.",
            "Pendant la mitose, les chromatides de chaque chromosome se séparent et se répartissent entre les deux cellules filles.",
            "Une cellule humaine à 46 chromosomes donne deux cellules filles à 46 chromosomes.",
            "Les cellules filles ont la même information génétique que la cellule mère : la mitose conserve l'information génétique.",
          ],
          example: {
            statement: "Une cellule de la peau humaine va se diviser. Indiquez le nombre de chromosomes et le nombre de chromatides de la cellule avant la copie de l'ADN, après la copie, puis dans chaque cellule fille.",
            solution: [
              "Avant la copie : 46 chromosomes, chacun à une chromatide, soit 46 chromatides.",
              "Après la copie : toujours 46 chromosomes, mais chacun à deux chromatides, soit 46 × 2 = 92 chromatides.",
              "Pendant la mitose, les deux chromatides de chaque chromosome se séparent et partent chacune dans une cellule fille.",
              "Dans chaque cellule fille : 46 chromosomes à une chromatide, soit 46 chromatides.",
              "Conclusion : le nombre de chromosomes (46) est conservé, et les deux cellules filles ont la même information génétique que la cellule mère.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Les cellules de l'oignon possèdent 16 chromosomes. Une cellule de racine d'oignon réalise une mitose. 1. Combien de chromatides compte-t-elle juste avant la mitose ? 2. Combien de chromosomes possède chaque cellule fille ?",
              hint: "Juste avant la mitose, l'ADN a déjà été copié.",
              solution: [
                "1. Avant la mitose, l'ADN est copié : 16 chromosomes à deux chromatides, soit 16 × 2 = 32 chromatides.",
                "2. La mitose conserve le nombre de chromosomes : chaque cellule fille possède 16 chromosomes (à une chromatide).",
              ],
            },
            {
              level: 2,
              statement: "Dans une culture, des cellules se divisent toutes les 24 heures. On part d'une seule cellule. 1. Combien de cellules obtient-on au bout de 5 jours ? 2. Au bout de combien de jours dépasse-t-on 1 000 cellules ?",
              hint: "Une division par jour : après n jours, il y a 2ⁿ cellules.",
              solution: [
                "1. En 5 jours, il y a 5 divisions : 2⁵ = 2 × 2 × 2 × 2 × 2 = 32 cellules.",
                "2. Je calcule les puissances de 2 : 2⁹ = 512 et 2¹⁰ = 1 024.",
                "512 est inférieur à 1 000, et 1 024 est supérieur à 1 000.",
                "Conclusion : 32 cellules après 5 jours, et on dépasse 1 000 cellules au bout de 10 jours (1 024 cellules).",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. On mesure la quantité d'ADN dans une cellule (en unités arbitraires) au cours du temps : 0 h : 6 ; 4 h : 6 ; 8 h : 9 ; 12 h : 12 ; 16 h : 12 ; 18 h : 6 (mesure faite dans l'une des deux cellules filles). 1. Entre quels moments l'ADN est-il copié ? Justifiez. 2. Que se passe-t-il entre 16 h et 18 h ? 3. Expliquez pourquoi les deux cellules filles possèdent la même information génétique que la cellule mère.",
              hint: "Repérez quand la quantité d'ADN double, puis quand elle est divisée par deux.",
              solution: [
                "1. La quantité d'ADN passe de 6 à 12 entre 4 h et 12 h : elle double. C'est la copie (duplication) de l'ADN, pendant laquelle chaque chromosome passe d'une à deux chromatides.",
                "2. Entre 16 h et 18 h, la quantité d'ADN mesurée dans une cellule fille revient de 12 à 6 : elle est divisée par deux. C'est la mitose, qui partage l'ADN entre deux cellules filles.",
                "3. La copie de l'ADN produit, pour chaque chromosome, deux chromatides identiques.",
                "Pendant la mitose, les deux chromatides de chaque chromosome se séparent et chaque cellule fille en reçoit une.",
                "Conclusion : chaque cellule fille reçoit un exemplaire identique de chaque chromosome ; elle a donc la même information génétique que la cellule mère (et la même quantité d'ADN, 6 unités).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui vont d'une cellule mère à deux cellules filles.",
            items: [
              "La cellule possède 46 chromosomes à une chromatide",
              "L'ADN est copié : chaque chromosome a deux chromatides identiques",
              "Les chromosomes se condensent et deviennent visibles",
              "Les chromosomes s'alignent au centre de la cellule",
              "Les chromatides de chaque chromosome se séparent vers deux pôles opposés",
              "La cellule se partage en deux",
              "Chaque cellule fille possède 46 chromosomes à une chromatide",
            ],
          },
          quiz: [
            {
              q: "Combien de chromosomes possède chaque cellule fille après la mitose d'une cellule humaine ?",
              options: ["23", "92", "47", "46"],
              answer: 3,
              why: "La mitose conserve le nombre de chromosomes : 46 dans la cellule mère, 46 dans chaque cellule fille.",
            },
            {
              q: "Que se passe-t-il juste avant une division cellulaire ?",
              options: ["L'ADN est copié", "La moitié des chromosomes disparaît", "Le noyau est expulsé de la cellule", "Les gènes changent de chromosome"],
              answer: 0,
              why: "La cellule copie son ADN : chaque chromosome passe d'une à deux chromatides identiques.",
            },
            {
              q: "Pendant la mitose, qu'est-ce qui se sépare ?",
              options: ["Les deux chromosomes d'une paire", "Le noyau et la membrane qui entoure la cellule","Les deux chromatides de chaque chromosome", "Les gènes et l'ADN"],
              answer: 2,
              why: "Les deux chromatides identiques de chaque chromosome se séparent et partent chacune dans une cellule fille.",
            },
            {
              q: "Combien de cellules obtient-on après 4 divisions successives d'une cellule ?",
              options: ["8", "16", "4", "32"],
              answer: 1,
              why: "Le nombre de cellules double à chaque division : 2⁴ = 16.",
            },
            {
              q: "Lequel de ces rôles n'est pas assuré par la mitose ?",
              options: ["La cicatrisation d'une plaie", "La croissance de l'enfant", "Le renouvellement de la peau", "La formation des gamètes"],
              answer: 3,
              why: "Les gamètes, à 23 chromosomes, sont formés par un autre type de division : la méiose.",
            },
          ],
          trap: "Croire que la mitose divise par deux le nombre de chromosomes. Elle sépare les deux chromatides de chaque chromosome : chaque cellule fille garde les 46 chromosomes.",
          method: "Pour ne pas confondre chromosome et chromatide, dessinez un chromosome en X (deux chromatides) puis coupé en deux bâtonnets (une chromatide chacun) : on compte les chromosomes par centromère, pas par bâtonnet.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'meiose-fecondation',
          title: "Méiose et fécondation : l'unicité de chaque individu",
          minutes: 35,
          objectives: [
            "Expliquer que la méiose produit des gamètes qui ne contiennent qu'un chromosome de chaque paire.",
            "Montrer que la répartition au hasard des chromosomes lors de la méiose produit des gamètes tous différents.",
            "Expliquer que la fécondation rétablit le nombre de chromosomes et réunit au hasard les chromosomes de deux parents.",
            "Relier méiose et fécondation à l'unicité génétique de chaque individu.",
          ],
          course: [
            {
              heading: "Les gamètes, des cellules à 23 chromosomes",
              paragraphs: [
                "Les gamètes sont les cellules reproductrices : les spermatozoïdes, produits dans les testicules, et les ovules, produits dans les ovaires. Ils se forment par un type particulier de division cellulaire, la méiose.",
                "Contrairement à la mitose, la méiose réduit de moitié le nombre de chromosomes. Une cellule à 46 chromosomes, soit 23 paires, donne des gamètes qui contiennent 23 chromosomes : un seul chromosome de chaque paire. Les gamètes ne contiennent donc qu'un seul allèle de chaque gène.",
              ],
              box: { label: "Définition", text: "La méiose est la division cellulaire qui forme les gamètes. Elle sépare les chromosomes de chaque paire : chaque gamète reçoit un seul chromosome de chaque paire, soit 23 chromosomes chez l'être humain." },
            },
            {
              heading: "La méiose, un brassage des chromosomes",
              paragraphs: [
                "La méiose est précédée d'une copie de l'ADN, puis comporte deux divisions successives. Lors de la première division, les deux chromosomes de chaque paire se séparent. Pour chaque paire, le hasard décide quel chromosome (celui d'origine paternelle ou celui d'origine maternelle) part dans quelle cellule, indépendamment des autres paires.",
                "Avec 23 paires, le nombre de combinaisons possibles est de 2²³, soit 8 388 608 gamètes différents pour un seul individu. Ce chiffre est même dépassé, car des portions de chromosomes peuvent s'échanger entre les deux chromosomes d'une paire au cours de la méiose. Un homme ou une femme produit donc des gamètes tous génétiquement différents.",
                "Une analogie : imaginez 23 paires de chaussettes, dont chaque paire compte une chaussette rouge et une bleue. Si vous prenez au hasard une chaussette de chaque paire, vous obtenez à chaque fois une collection différente.",
              ],
              box: { label: "Formule", text: "Pour n paires de chromosomes, la répartition au hasard lors de la méiose donne 2ⁿ gamètes différents. Chez l'être humain : 2²³ = 8 388 608." },
            },
            {
              heading: "La fécondation, une rencontre au hasard",
              paragraphs: [
                "La fécondation est la réunion d'un spermatozoïde et d'un ovule. Leurs noyaux fusionnent et forment la cellule-œuf, qui possède à nouveau 46 chromosomes, soit 23 paires : dans chaque paire, un chromosome vient du père et l'autre de la mère.",
                "Le spermatozoïde et l'ovule qui se rencontrent sont pris au hasard parmi tous les gamètes possibles. Un couple peut donc former 2²³ × 2²³ = 2⁴⁶ combinaisons, soit environ 70 000 milliards de cellules-œufs différentes, sans compter les échanges entre chromosomes.",
                "La fécondation détermine aussi le sexe. L'ovule contient toujours un chromosome X ; la moitié des spermatozoïdes porte un X, l'autre moitié un Y. La cellule-œuf est donc XX (fille) ou XY (garçon), avec une chance sur deux à chaque fois.",
              ],
            },
            {
              heading: "Chaque individu est unique",
              paragraphs: [
                "Grâce au brassage de la méiose et au hasard de la fécondation, chaque individu possède une combinaison d'allèles unique : deux frères et sœurs ont les mêmes parents, mais pas les mêmes chromosomes. La seule exception concerne les vrais jumeaux, issus d'une même cellule-œuf qui s'est séparée en deux embryons : ils ont la même information génétique.",
                "Les faux jumeaux, eux, proviennent de deux ovules fécondés par deux spermatozoïdes différents : ils sont aussi différents que des frères et sœurs nés à des moments différents.",
              ],
              box: { label: "À retenir", text: "Méiose (46 → 23) et fécondation (23 + 23 → 46) maintiennent le nombre de chromosomes d'une génération à l'autre, tout en créant des individus génétiquement uniques." },
            },
          ],
          keyPoints: [
            "La méiose forme les gamètes, qui ne contiennent qu'un chromosome de chaque paire : 23 chez l'être humain.",
            "Les chromosomes de chaque paire se répartissent au hasard : un individu peut produire 2²³ gamètes différents.",
            "La fécondation réunit un spermatozoïde et un ovule : la cellule-œuf retrouve 46 chromosomes.",
            "Le sexe est déterminé par le spermatozoïde : X donne une fille (XX), Y donne un garçon (XY).",
            "Méiose et fécondation rendent chaque individu génétiquement unique, sauf les vrais jumeaux.",
          ],
          example: {
            statement: "Une espèce imaginaire possède 2 paires de chromosomes, notées 1a et 1b pour la première paire, 2a et 2b pour la seconde. Combien de gamètes différents un individu peut-il produire ? Donnez-les.",
            solution: [
              "Chaque gamète reçoit un seul chromosome de chaque paire.",
              "Pour la paire 1, deux possibilités : 1a ou 1b. Pour la paire 2, deux possibilités : 2a ou 2b.",
              "Les choix se combinent : 2 × 2 = 2² = 4 gamètes différents.",
              "Liste : (1a, 2a), (1a, 2b), (1b, 2a), (1b, 2b).",
              "Conclusion : 4 gamètes différents, ce qui illustre la formule 2ⁿ avec n = 2 paires.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Les cellules de la mouche drosophile possèdent 8 chromosomes, soit 4 paires. 1. Combien de chromosomes contient un gamète de drosophile ? 2. Combien de chromosomes contient la cellule-œuf ?",
              hint: "La méiose divise le nombre de chromosomes par deux ; la fécondation réunit deux gamètes.",
              solution: [
                "1. Un gamète reçoit un chromosome de chaque paire : 8 ÷ 2 = 4 chromosomes.",
                "2. La cellule-œuf réunit deux gamètes : 4 + 4 = 8 chromosomes, soit 4 paires.",
              ],
            },
            {
              level: 2,
              statement: "Toujours chez la drosophile (4 paires de chromosomes), et sans tenir compte des échanges entre chromosomes : 1. Combien de gamètes différents un individu peut-il produire ? 2. Combien de cellules-œufs différentes un couple de drosophiles peut-il former ?",
              hint: "Utilisez 2ⁿ pour les gamètes, puis multipliez les possibilités des deux parents.",
              solution: [
                "1. Avec n = 4 paires : 2⁴ = 16 gamètes différents par individu.",
                "2. Le mâle peut fournir 16 spermatozoïdes différents et la femelle 16 ovules différents.",
                "Chaque spermatozoïde peut rencontrer chaque ovule : 16 × 16 = 256.",
                "Conclusion : 16 gamètes différents par individu et 256 cellules-œufs différentes possibles pour le couple.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Emma et Lucas sont frère et sœur ; ils ont les mêmes parents mais ne se ressemblent pas. Leurs cousines Jade et Manon sont de vraies jumelles et se ressemblent énormément. 1. Expliquez, à l'aide de la méiose et de la fécondation, pourquoi Emma et Lucas n'ont pas la même information génétique. 2. Expliquez pourquoi Jade et Manon ont la même information génétique. 3. Quel parent a déterminé le sexe de Lucas ? Justifiez.",
              hint: "Pensez au nombre de gamètes différents que chaque parent peut produire, et à l'origine des vrais jumeaux.",
              solution: [
                "1. Lors de la méiose, chaque parent répartit au hasard les chromosomes de ses 23 paires : il peut produire 2²³ gamètes différents.",
                "Emma et Lucas sont issus de deux fécondations différentes, donc de spermatozoïdes et d'ovules différents, choisis au hasard.",
                "Ils ont donc reçu des combinaisons de chromosomes, et d'allèles, différentes : leur information génétique n'est pas la même.",
                "2. Jade et Manon sont issues d'une seule cellule-œuf, qui s'est séparée en deux embryons au début du développement. Ces deux embryons ont reçu par mitose la même information génétique.",
                "3. Lucas est un garçon (XY). Sa mère n'a pu lui transmettre qu'un chromosome X ; le chromosome Y vient forcément du spermatozoïde de son père.",
                "Conclusion : c'est le père qui a déterminé le sexe de Lucas, et chaque enfant est génétiquement unique, sauf les vrais jumeaux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Méiose et fécondation.",
            statements: [
              { text: "La méiose produit des cellules à 23 chromosomes chez l'être humain.", true: true, why: "Elle forme les gamètes, qui contiennent un seul chromosome de chaque paire." },
              { text: "Tous les spermatozoïdes d'un homme sont génétiquement identiques.", true: false, why: "La répartition au hasard des chromosomes donne au moins 2²³ combinaisons différentes." },
              { text: "C'est la mère qui détermine le sexe de l'enfant.", true: false, why: "L'ovule porte toujours un X ; c'est le spermatozoïde, X ou Y, qui détermine le sexe." },
              { text: "La cellule-œuf possède 46 chromosomes.", true: true, why: "Elle réunit les 23 chromosomes du spermatozoïde et les 23 de l'ovule." },
              { text: "Les faux jumeaux ont la même information génétique.", true: false, why: "Ils proviennent de deux cellules-œufs différentes : ils sont aussi différents que des frères et sœurs." },
              { text: "Méiose et fécondation maintiennent le nombre de chromosomes de l'espèce.", true: true, why: "La méiose le divise par deux, la fécondation le rétablit : 46, puis 23, puis 46." },
            ],
          },
          quiz: [
            {
              q: "Où se déroule la méiose chez l'être humain ?",
              options: ["Dans toutes les cellules du corps humain","Dans les testicules et les ovaires", "Dans le sang", "Dans la peau"],
              answer: 1,
              why: "La méiose forme les gamètes : elle a lieu dans les organes reproducteurs, testicules et ovaires.",
            },
            {
              q: "Que reçoit chaque gamète ?",
              options: ["Les deux chromosomes de chaque paire", "Uniquement les chromosomes du père", "Un chromosome de chaque paire", "Une copie des 46 chromosomes"],
              answer: 2,
              why: "La méiose sépare les chromosomes de chaque paire : chaque gamète en reçoit un seul.",
            },
            {
              q: "Combien de gamètes différents un être humain peut-il produire, sans compter les échanges entre chromosomes ?",
              options: ["2²³, soit plus de 8 millions", "23", "46", "2 × 23, soit 46"],
              answer: 0,
              why: "Chacune des 23 paires offre deux possibilités indépendantes : 2²³ = 8 388 608.",
            },
            {
              q: "Quelle cellule-œuf donne un garçon ?",
              options: ["Ovule X et spermatozoïde X", "Ovule Y et spermatozoïde X", "Ovule X sans spermatozoïde", "Ovule X et spermatozoïde Y"],
              answer: 3,
              why: "Un garçon est XY : il a reçu le X de l'ovule et le Y du spermatozoïde.",
            },
            {
              q: "Pourquoi les vrais jumeaux ont-ils la même information génétique ?",
              options: ["Ils sont nés le même jour", "Leurs parents ont les mêmes allèles", "Ils proviennent d'une même cellule-œuf", "Ils ont été fécondés par le même ovule et deux spermatozoïdes"],
              answer: 2,
              why: "Une seule cellule-œuf s'est séparée en deux embryons qui ont reçu la même information génétique.",
            },
          ],
          trap: "Confondre mitose et méiose. La mitose donne deux cellules identiques à 46 chromosomes ; la méiose donne des gamètes tous différents à 23 chromosomes.",
          method: "Faites un tableau à deux colonnes, mitose et méiose, et comparez-les sur quatre lignes : où, nombre de chromosomes avant et après, cellules identiques ou non, rôle. Révisez avec ce tableau.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'mutations',
          title: 'Les mutations, source de diversité',
          minutes: 30,
          objectives: [
            "Définir une mutation comme une modification de la séquence de l'ADN.",
            "Identifier une mutation en comparant deux séquences d'ADN.",
            "Citer des facteurs qui augmentent la fréquence des mutations (agents mutagènes).",
            "Expliquer que les mutations créent de nouveaux allèles et sont à l'origine de la diversité génétique.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une mutation ?",
              paragraphs: [
                "Une mutation est une modification de la séquence de l'ADN : une lettre est remplacée par une autre (substitution), une lettre disparaît (suppression) ou une lettre est ajoutée (addition). Si cette modification touche un gène, elle crée une nouvelle version de ce gène, c'est-à-dire un nouvel allèle.",
                "Par exemple, si la séquence ATG CCA est modifiée en ATG CTA, la cinquième lettre, C, a été remplacée par T : c'est une substitution. Une seule lettre suffit pour obtenir un allèle différent.",
              ],
              box: { label: "Définition", text: "Une mutation est une modification de la séquence de l'ADN (substitution, suppression ou addition de lettres). Elle peut créer un nouvel allèle." },
            },
            {
              heading: "Des mutations rares, aléatoires, favorisées par certains agents",
              paragraphs: [
                "Les mutations se produisent spontanément, surtout lors de la copie de l'ADN qui précède chaque division : la cellule commet de rares erreurs qui ne sont pas toutes réparées. Elles sont rares et se produisent au hasard : une mutation n'apparaît jamais parce qu'elle serait utile.",
                "Certains facteurs de l'environnement augmentent la fréquence des mutations : on les appelle des agents mutagènes. Ce sont par exemple les rayons ultraviolets (UV) du soleil, les rayonnements comme les rayons X ou la radioactivité, et certaines substances chimiques, comme celles contenues dans la fumée du tabac.",
              ],
              box: { label: "Repère", text: "Agents mutagènes : rayons UV, rayons X, radioactivité, certaines substances chimiques (fumée de tabac). Se protéger du soleil et ne pas fumer limite les mutations." },
            },
            {
              heading: "Une mutation est-elle transmise aux enfants ?",
              paragraphs: [
                "Une mutation qui se produit dans une cellule du corps (une cellule de la peau, du poumon) est transmise par mitose aux cellules qui en descendent, mais pas aux enfants. Elle peut toutefois avoir des conséquences pour la personne : une accumulation de mutations peut conduire à un cancer, comme certains cancers de la peau favorisés par les coups de soleil.",
                "Une mutation qui se produit dans une cellule à l'origine des gamètes (dans les testicules ou les ovaires) peut se retrouver dans un gamète, puis dans la cellule-œuf : elle est alors transmise à l'enfant et présente dans toutes ses cellules.",
              ],
            },
            {
              heading: "Les effets des mutations : la source de la diversité",
              paragraphs: [
                "Beaucoup de mutations sont sans effet visible : on les dit neutres. D'autres sont défavorables. La drépanocytose, par exemple, est due au remplacement d'une seule lettre dans le gène de l'hémoglobine, la protéine qui transporte le dioxygène dans les globules rouges : ceux-ci se déforment en faucille et circulent mal.",
                "Certaines mutations sont favorables dans un milieu donné. Chez les bactéries, une mutation peut rendre une bactérie résistante à un antibiotique : en présence de ce médicament, elle survit et se multiplie, alors que les autres meurent.",
                "Tous les allèles qui existent aujourd'hui sont apparus un jour par mutation. Les mutations sont donc la source de la diversité des allèles, et la méiose et la fécondation combinent ensuite ces allèles de façon nouvelle à chaque génération.",
              ],
              box: { label: "À retenir", text: "Les mutations créent de nouveaux allèles : elles sont la source de la diversité génétique. Leurs effets peuvent être neutres, défavorables ou favorables selon le milieu." },
            },
          ],
          keyPoints: [
            "Une mutation est une modification de la séquence de l'ADN : substitution, suppression ou addition de lettres.",
            "Une mutation dans un gène crée un nouvel allèle.",
            "Les mutations sont rares et aléatoires ; les agents mutagènes (UV, rayons X, tabac) augmentent leur fréquence.",
            "Une mutation n'est transmise aux enfants que si elle touche une cellule à l'origine des gamètes.",
            "Les mutations peuvent être neutres, défavorables ou favorables : elles sont la source de la diversité génétique.",
          ],
          example: {
            statement: "Voici un extrait de deux allèles d'un même gène. Allèle 1 : TAC GGA TTC. Allèle 2 : TAC GCA TTC. Identifiez la mutation.",
            solution: [
              "Je compare les deux séquences lettre par lettre, en les écrivant l'une sous l'autre.",
              "Les quatre premières lettres sont identiques : T, A, C, G.",
              "La cinquième lettre diffère : G dans l'allèle 1, C dans l'allèle 2.",
              "Les lettres suivantes sont identiques, et les deux séquences ont la même longueur (9 lettres).",
              "Conclusion : il s'agit d'une substitution, la cinquième lettre G a été remplacée par C.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Comparez la séquence d'origine ATGCCGTA et la séquence mutée ATGCGTA. 1. Combien de lettres compte chaque séquence ? 2. Quel type de mutation s'est produit ?",
              hint: "Si les deux séquences n'ont pas la même longueur, une lettre a été ajoutée ou supprimée.",
              solution: [
                "1. La séquence d'origine compte 8 lettres, la séquence mutée 7 lettres.",
                "2. Je compare : ATGC est identique au début ; ensuite l'origine a CGTA et la séquence mutée GTA.",
                "L'un des deux C consécutifs a disparu.",
                "Conclusion : il s'agit d'une suppression d'une lettre C.",
              ],
            },
            {
              level: 2,
              statement: "Dites si chaque mutation peut être transmise aux enfants de l'individu, et justifiez. a) Une mutation dans une cellule de la peau, causée par les UV. b) Une mutation dans une cellule d'un testicule qui produit des spermatozoïdes. c) Une mutation dans une cellule du poumon d'un fumeur.",
              hint: "Seules les mutations qui peuvent se retrouver dans un gamète sont transmises aux enfants.",
              solution: [
                "a) Non : une cellule de la peau ne produit pas de gamètes. La mutation n'est transmise qu'aux cellules de peau qui en descendent par mitose.",
                "b) Oui : cette cellule est à l'origine de spermatozoïdes. Un spermatozoïde porteur de la mutation peut féconder un ovule et la transmettre à l'enfant.",
                "c) Non : comme pour la peau, la mutation reste dans les cellules du poumon issues de cette cellule ; elle peut favoriser un cancer chez le fumeur, mais n'est pas héritée.",
                "Conclusion : seule la mutation b) peut être transmise à la descendance.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document 1 : extrait du gène de l'hémoglobine. Allèle normal : CTG ACT CCT GAG GAG AAG. Allèle de la drépanocytose : CTG ACT CCT GTG GAG AAG. Document 2 : chez une personne qui possède deux allèles de la drépanocytose, les globules rouges prennent une forme de faucille, se bloquent dans les petits vaisseaux sanguins et transportent mal le dioxygène, ce qui provoque des douleurs et une fatigue importante. 1. Identifiez précisément la mutation. 2. Expliquez comment une modification aussi petite peut entraîner une maladie. 3. Cette mutation est héréditaire : dans quelles cellules s'est-elle produite au départ ?",
              hint: "Écrivez les deux séquences l'une sous l'autre et comparez-les groupe de trois lettres par groupe de trois lettres.",
              solution: [
                "1. Les trois premiers groupes (CTG ACT CCT) sont identiques. Le quatrième groupe est GAG pour l'allèle normal et GTG pour l'allèle de la drépanocytose : la lettre A a été remplacée par T. C'est une substitution, à la 11e lettre de l'extrait.",
                "2. Le gène contient l'information pour fabriquer l'hémoglobine. Avec l'allèle muté, la cellule fabrique une hémoglobine légèrement différente.",
                "Cette hémoglobine modifiée déforme les globules rouges en faucille : ils circulent mal et transportent moins bien le dioxygène, d'où les symptômes.",
                "3. Pour être transmise aux descendants, la mutation s'est produite, chez un ancêtre, dans une cellule à l'origine des gamètes (testicule ou ovaire). Elle a ensuite été transmise de génération en génération.",
                "Conclusion : le changement d'une seule lettre de l'ADN suffit à créer un nouvel allèle, qui modifie une protéine et peut provoquer une maladie.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition ou à son exemple.",
            pairs: [
              { left: "Mutation", right: "Modification de la séquence de l'ADN" },
              { left: "Substitution", right: "Une lettre de l'ADN est remplacée par une autre" },
              { left: "Agent mutagène", right: "Facteur qui augmente la fréquence des mutations, comme les UV" },
              { left: "Nouvel allèle", right: "Résultat d'une mutation dans un gène" },
              { left: "Drépanocytose", right: "Maladie due au changement d'une lettre du gène de l'hémoglobine" },
              { left: "Mutation dans une cellule de la peau", right: "Mutation non transmise aux enfants" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une mutation ?",
              options: ["Une modification de la séquence de l'ADN", "La perte d'un chromosome entier lors de la mitose", "Un changement de groupe sanguin au cours de la vie", "La division d'une cellule en deux"],
              answer: 0,
              why: "Une mutation est une modification de la séquence de l'ADN, qui peut créer un nouvel allèle.",
            },
            {
              q: "Lequel de ces facteurs est un agent mutagène ?",
              options: ["L'eau potable", "Le dioxygène de l'air respiré","Les rayons ultraviolets", "Le sommeil"],
              answer: 2,
              why: "Les rayons UV du soleil augmentent la fréquence des mutations de l'ADN.",
            },
            {
              q: "Une mutation apparaît-elle parce qu'elle est utile à l'individu ?",
              options: ["Oui, toujours", "Non, elle apparaît au hasard", "Oui, si le milieu change", "Seulement chez les bactéries"],
              answer: 1,
              why: "Les mutations sont aléatoires : elles apparaissent indépendamment de leur utilité.",
            },
            {
              q: "Quelle mutation peut être transmise aux enfants ?",
              options: ["Une mutation dans une cellule du foie", "Une mutation dans une cellule de la peau", "Une mutation provoquée par un coup de soleil", "Une mutation dans une cellule à l'origine des gamètes"],
              answer: 3,
              why: "Seule une mutation présente dans un gamète peut se retrouver dans la cellule-œuf, puis chez l'enfant.",
            },
            {
              q: "Pourquoi dit-on que les mutations sont la source de la diversité génétique ?",
              options: ["Elles détruisent les gènes", "Elles créent de nouveaux allèles", "Elles changent le nombre de chromosomes", "Elles copient l'ADN"],
              answer: 1,
              why: "Chaque mutation dans un gène crée une nouvelle version de ce gène : un nouvel allèle.",
            },
          ],
          trap: "Croire que les mutations sont toujours dangereuses ou qu'elles apparaissent pour répondre à un besoin. Elles sont aléatoires, et leurs effets peuvent être neutres, défavorables ou favorables.",
          method: "Pour comparer deux séquences, recopiez-les l'une sous l'autre, groupées par trois lettres, et numérotez les lettres : la différence saute aux yeux et vous pouvez donner sa position exacte.",
        },
      ],
    },

    /* ==================================================================== */
    /* L'ÉVOLUTION DES ÊTRES VIVANTS                                          */
    /* ==================================================================== */
    {
      id: 'evolution',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'parentes-classification',
          title: 'Relations de parenté et classification du vivant',
          minutes: 30,
          objectives: [
            "Classer des êtres vivants en groupes emboîtés à partir des attributs qu'ils partagent.",
            "Expliquer que plus deux espèces partagent d'attributs, plus elles sont apparentées.",
            "Interpréter un arbre de parenté et la notion d'ancêtre commun.",
            "Corriger l'idée fausse selon laquelle l'être humain descendrait du singe.",
          ],
          course: [
            {
              heading: "Classer selon ce que les êtres vivants possèdent",
              paragraphs: [
                "Pour classer les êtres vivants, les scientifiques comparent leurs attributs, c'est-à-dire les caractères qu'ils possèdent : une colonne vertébrale, quatre membres, des poils, des plumes. On ne classe jamais d'après ce qu'un être vivant ne possède pas, ni d'après son mode de vie (où il vit, ce qu'il mange, sa façon de se déplacer).",
                "Ainsi, le dauphin vit dans l'eau comme un poisson, mais il possède des poils (quelques-uns à la naissance) et des mamelles : c'est un mammifère. La chauve-souris vole comme un oiseau, mais elle a des poils et des mamelles et n'a pas de plumes : c'est aussi un mammifère.",
              ],
              box: { label: "Règle", text: "On classe les êtres vivants d'après les attributs qu'ils possèdent en commun, jamais d'après ce qui leur manque ni d'après leur mode de vie." },
            },
            {
              heading: "Des groupes emboîtés",
              paragraphs: [
                "Chaque attribut définit un groupe qui rassemble tous les êtres vivants qui le possèdent. Les Vertébrés possèdent un squelette interne avec une colonne vertébrale. Parmi eux, les Tétrapodes possèdent en plus quatre membres. Parmi les Tétrapodes, les Mammifères possèdent en plus des poils et des mamelles.",
                "Ces groupes s'emboîtent comme des poupées russes : tous les Mammifères sont des Tétrapodes, et tous les Tétrapodes sont des Vertébrés. On représente souvent cette classification par des ensembles dessinés les uns dans les autres.",
                "Certains mots de la vie courante ne correspondent pas à un groupe de la classification. Les « poissons », par exemple, ne forment pas un groupe : la truite, qui a un squelette osseux comme nous, est plus proche parente de l'être humain que du requin, dont le squelette est fait de cartilage.",
              ],
              box: { label: "Définition", text: "Un groupe emboîté rassemble tous les êtres vivants qui partagent un même attribut. Plus on avance vers l'intérieur, plus les êtres vivants partagent d'attributs." },
            },
            {
              heading: "Parenté et ancêtre commun",
              paragraphs: [
                "Si deux espèces partagent un attribut, c'est qu'elles l'ont hérité d'un même ancêtre qui le possédait déjà : un ancêtre commun. Plus deux espèces partagent d'attributs, plus leur ancêtre commun est récent, et plus elles sont proches parentes.",
                "On représente ces relations par un arbre de parenté. Les espèces actuelles sont au bout des branches ; chaque point où deux branches se rejoignent (un nœud) représente l'ancêtre commun de toutes les espèces situées au-dessus. Cet ancêtre est hypothétique : on ne peut pas l'identifier à une espèce fossile précise.",
                "L'être humain et le chimpanzé sont les espèces actuelles les plus proches parentes. Ils ne descendent pas l'un de l'autre : ils ont un ancêtre commun, qui vivait il y a plusieurs millions d'années (environ 7 millions d'années selon les estimations). Dire que « l'être humain descend du singe » est donc faux ; on peut dire en revanche qu'il partage un ancêtre commun avec les autres primates.",
              ],
              box: { label: "À retenir", text: "Plus deux espèces partagent d'attributs, plus elles sont apparentées : elles ont un ancêtre commun récent. Aucune espèce actuelle ne descend d'une autre espèce actuelle." },
            },
            {
              heading: "Une parenté de tout le vivant",
              paragraphs: [
                "Tous les êtres vivants partagent certains attributs : ils sont formés de cellules, et leur information génétique est portée par de l'ADN, lu de la même façon chez tous. Cela indique que tous les êtres vivants sont apparentés et descendent d'une même forme de vie ancestrale.",
                "La classification n'est pas figée : elle évolue avec les découvertes, en particulier grâce à la comparaison de l'ADN des espèces. La parenté entre les êtres vivants est l'un des principaux arguments en faveur de l'évolution.",
              ],
            },
          ],
          keyPoints: [
            "On classe les êtres vivants d'après les attributs qu'ils possèdent, pas d'après leur mode de vie.",
            "Les groupes sont emboîtés : Mammifères (poils, mamelles) dans Tétrapodes (quatre membres) dans Vertébrés (colonne vertébrale).",
            "Plus deux espèces partagent d'attributs, plus elles sont proches parentes.",
            "Deux espèces apparentées ont un ancêtre commun, représenté par un nœud sur l'arbre de parenté.",
            "L'être humain ne descend pas du chimpanzé : ils partagent un ancêtre commun.",
            "Tous les êtres vivants ont des cellules et de l'ADN : ils sont tous apparentés.",
          ],
          example: {
            statement: "On étudie six espèces. Toutes ont une colonne vertébrale. Truite, grenouille, lézard, souris et humain ont un squelette osseux (le requin a un squelette de cartilage). Grenouille, lézard, souris et humain ont quatre membres. Souris et humain ont des poils et des mamelles. Construisez les groupes emboîtés, puis indiquez si la truite est plus proche parente du requin ou de l'humain.",
            solution: [
              "Groupe « colonne vertébrale » (Vertébrés) : requin, truite, grenouille, lézard, souris, humain.",
              "À l'intérieur, groupe « squelette osseux » : truite, grenouille, lézard, souris, humain.",
              "À l'intérieur, groupe « quatre membres » (Tétrapodes) : grenouille, lézard, souris, humain.",
              "À l'intérieur, groupe « poils et mamelles » (Mammifères) : souris, humain.",
              "La truite partage avec l'humain la colonne vertébrale et le squelette osseux (2 attributs), alors qu'elle ne partage avec le requin que la colonne vertébrale (1 attribut).",
              "Conclusion : la truite est plus proche parente de l'humain que du requin, même si elle ressemble davantage au requin par son mode de vie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les animaux suivants, lesquels sont des mammifères ? Chauve-souris, pigeon, dauphin, crocodile, lapin. Justifiez à l'aide des attributs.",
              hint: "Cherchez les animaux qui possèdent des poils et des mamelles, sans vous laisser tromper par le milieu de vie.",
              solution: [
                "La chauve-souris a des poils et des mamelles : mammifère (elle vole, mais n'a pas de plumes).",
                "Le dauphin a des mamelles et quelques poils à la naissance : mammifère (il vit dans l'eau, mais ce n'est pas un critère).",
                "Le lapin a des poils et des mamelles : mammifère.",
                "Le pigeon a des plumes et pas de mamelles ; le crocodile a des écailles et pas de mamelles : ce ne sont pas des mammifères.",
                "Conclusion : les mammifères sont la chauve-souris, le dauphin et le lapin.",
              ],
            },
            {
              level: 2,
              statement: "Voici les attributs de cinq animaux. Escargot : aucune colonne vertébrale. Sardine : colonne vertébrale. Salamandre : colonne vertébrale, quatre membres. Chat : colonne vertébrale, quatre membres, poils et mamelles. Lapin : colonne vertébrale, quatre membres, poils et mamelles. 1. Construisez les groupes emboîtés. 2. Quel animal est le plus proche parent du chat ? 3. La salamandre est-elle plus proche parente de la sardine ou du lapin ?",
              hint: "Commencez par le groupe le plus large (colonne vertébrale), puis placez les groupes plus petits à l'intérieur.",
              solution: [
                "1. Vertébrés (colonne vertébrale) : sardine, salamandre, chat, lapin. L'escargot reste en dehors de ce groupe.",
                "Dans les Vertébrés, les Tétrapodes (quatre membres) : salamandre, chat, lapin.",
                "Dans les Tétrapodes, les Mammifères (poils et mamelles) : chat, lapin.",
                "2. Le lapin partage avec le chat tous ses attributs (3 attributs) : c'est son plus proche parent.",
                "3. La salamandre partage 2 attributs avec le lapin (colonne vertébrale, quatre membres) et 1 seul avec la sardine (colonne vertébrale).",
                "Conclusion : la salamandre est plus proche parente du lapin que de la sardine.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un arbre de parenté relie trois espèces actuelles : l'humain et le chimpanzé sont reliés par un nœud A ; le nœud A et le gorille sont reliés par un nœud B, situé plus bas sur l'arbre. Un camarade affirme : « L'arbre prouve que l'être humain descend du chimpanzé. » 1. Quelle est l'espèce la plus proche parente de l'humain sur cet arbre ? 2. Que représentent les nœuds A et B ? 3. Rédigez une réponse argumentée pour corriger l'affirmation du camarade.",
              hint: "Un nœud représente un ancêtre commun. Les espèces au bout des branches vivent toutes aujourd'hui.",
              solution: [
                "1. L'humain et le chimpanzé sont reliés par le nœud A, le plus récent : le chimpanzé est l'espèce la plus proche parente de l'humain sur cet arbre.",
                "2. Le nœud A représente l'ancêtre commun le plus récent de l'humain et du chimpanzé. Le nœud B, plus ancien, représente l'ancêtre commun des trois espèces.",
                "3. L'humain et le chimpanzé sont tous deux au bout d'une branche : ce sont deux espèces actuelles, qui ont chacune évolué depuis leur ancêtre commun.",
                "Aucune des deux ne descend de l'autre : elles descendent toutes les deux de l'ancêtre commun A, qui n'était ni un humain ni un chimpanzé actuel.",
                "Conclusion : l'affirmation est fausse. Il faut dire que l'être humain et le chimpanzé partagent un ancêtre commun récent, ce qui en fait des espèces proches parentes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez les idées reçues sur la classification.",
            statements: [
              { text: "La baleine est un poisson, puisqu'elle vit dans l'eau.", true: false, why: "Elle a des mamelles et allaite ses petits : c'est un mammifère. Le milieu de vie n'est pas un critère." },
              { text: "La chauve-souris est un mammifère.", true: true, why: "Elle possède des poils et des mamelles ; ses ailes ne font pas d'elle un oiseau." },
              { text: "L'être humain descend du chimpanzé.", true: false, why: "Ils partagent un ancêtre commun : aucune espèce actuelle ne descend d'une autre espèce actuelle." },
              { text: "Plus deux espèces partagent d'attributs, plus elles sont apparentées.", true: true, why: "Les attributs partagés ont été hérités d'un ancêtre commun d'autant plus récent qu'ils sont nombreux." },
              { text: "On peut classer les animaux d'après ce qu'ils n'ont pas, par exemple « sans pattes ».", true: false, why: "On classe uniquement d'après les attributs possédés en commun." },
              { text: "Tous les Mammifères sont des Vertébrés.", true: true, why: "Les groupes sont emboîtés : les Mammifères sont inclus dans les Tétrapodes, eux-mêmes inclus dans les Vertébrés." },
              { text: "Sur un arbre de parenté, un nœud représente une espèce fossile connue.", true: false, why: "Un nœud représente un ancêtre commun hypothétique, qu'on ne peut pas identifier à un fossile précis." },
            ],
          },
          quiz: [
            {
              q: "Sur quoi se fonde la classification actuelle des êtres vivants ?",
              options: ["Sur leur milieu de vie et leur façon de se déplacer", "Sur leur régime alimentaire", "Sur les attributs qu'ils partagent", "Sur leur taille"],
              answer: 2,
              why: "On classe les êtres vivants d'après les attributs qu'ils possèdent en commun.",
            },
            {
              q: "Quel attribut définit le groupe des Mammifères ?",
              options: ["Des poils et des mamelles", "Quatre membres", "Une colonne vertébrale", "La vie sur la terre ferme"],
              answer: 0,
              why: "Les Mammifères possèdent des poils et des mamelles ; quatre membres et colonne vertébrale définissent des groupes plus larges.",
            },
            {
              q: "Que représente un nœud sur un arbre de parenté ?",
              options: ["Une espèce actuelle", "Une espèce disparue identifiée par un fossile", "Le milieu de vie commun", "L'ancêtre commun des espèces qui en partent"],
              answer: 3,
              why: "Chaque nœud représente l'ancêtre commun hypothétique des espèces situées au-dessus de lui.",
            },
            {
              q: "Quel animal est le plus proche parent de l'être humain parmi ceux-ci ?",
              options: ["Le lézard", "La souris", "La truite", "Le requin"],
              answer: 1,
              why: "La souris partage avec l'humain le plus d'attributs, dont les poils et les mamelles : c'est un mammifère.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["L'humain et le chimpanzé ont un ancêtre commun", "L'humain descend du chimpanzé", "Le chimpanzé descend de l'humain", "L'humain et le chimpanzé ne sont pas apparentés"],
              answer: 0,
              why: "Les deux espèces actuelles descendent d'un ancêtre commun qui vivait il y a plusieurs millions d'années.",
            },
          ],
          trap: "Classer un animal d'après son mode de vie (la baleine avec les poissons, la chauve-souris avec les oiseaux) ou dire que l'être humain descend du singe, au lieu de raisonner sur les attributs partagés et l'ancêtre commun.",
          method: "Face à un tableau d'attributs, comptez pour chaque couple d'espèces le nombre d'attributs partagés et écrivez-le : le couple qui en partage le plus est le plus proche parent.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'selection-naturelle',
          title: 'La sélection naturelle et la dérive génétique',
          minutes: 35,
          objectives: [
            "Expliquer le mécanisme de la sélection naturelle à partir de la diversité des individus et de l'action du milieu.",
            "Expliquer le rôle du hasard dans l'évolution des populations : la dérive génétique.",
            "Calculer l'évolution de la proportion d'un caractère dans une population.",
            "Distinguer sélection naturelle et dérive génétique dans une situation donnée.",
          ],
          course: [
            {
              heading: "Des individus tous différents",
              paragraphs: [
                "Au sein d'une même espèce, les individus ne sont pas identiques : ils diffèrent par la couleur, la taille, la résistance à une maladie. Une partie de ces différences est héréditaire : elle provient des allèles que chaque individu possède. Les mutations créent de nouveaux allèles, et la méiose et la fécondation les combinent de façon unique pour chaque individu.",
                "On appelle population l'ensemble des individus d'une même espèce qui vivent dans un même lieu et se reproduisent entre eux. L'évolution, c'est la modification de la fréquence des allèles dans une population au fil des générations.",
              ],
            },
            {
              heading: "La sélection naturelle",
              paragraphs: [
                "Le naturaliste anglais Charles Darwin a proposé le mécanisme de la sélection naturelle dans son livre De l'origine des espèces, publié en 1859. Dans un milieu donné, certains individus possèdent des caractères qui leur permettent de mieux survivre et d'avoir plus de descendants. Ils transmettent plus souvent leurs allèles à la génération suivante.",
                "Au fil des générations, les allèles qui donnent un avantage deviennent de plus en plus fréquents dans la population, et ceux qui sont désavantageux deviennent rares. Le milieu ne crée pas les caractères : il trie parmi des variations qui existaient déjà, apparues au hasard par mutation.",
              ],
              box: { label: "Définition", text: "La sélection naturelle est le tri, par le milieu, des individus les mieux adaptés : ils survivent et se reproduisent davantage, si bien que leurs allèles deviennent plus fréquents au fil des générations." },
            },
            {
              heading: "Deux exemples de sélection naturelle",
              paragraphs: [
                "La phalène du bouleau est un papillon de nuit qui existe sous une forme claire et une forme sombre. Au XIXe siècle, en Angleterre, la pollution des usines a noirci les troncs d'arbres. Sur ces troncs sombres, les papillons clairs étaient plus visibles et plus souvent mangés par les oiseaux ; les papillons sombres ont survécu davantage et sont devenus majoritaires dans les régions industrielles. Quand la pollution a diminué, au XXe siècle, la forme claire est redevenue fréquente.",
                "Les bactéries offrent un exemple actuel. Dans une population de bactéries, quelques-unes peuvent porter, par mutation, un allèle de résistance à un antibiotique. Quand on utilise cet antibiotique, les bactéries sensibles meurent et les résistantes survivent et se multiplient : la population devient résistante.",
              ],
            },
            {
              heading: "La dérive génétique : le rôle du hasard",
              paragraphs: [
                "Tous les changements ne s'expliquent pas par un avantage. À chaque génération, le hasard intervient : quels individus se rencontrent, lesquels meurent accidentellement, quels allèles se retrouvent dans les gamètes qui forment les descendants. Ce changement aléatoire de la fréquence des allèles s'appelle la dérive génétique.",
                "La dérive génétique a des effets d'autant plus forts que la population est petite. Si une petite population de quelques individus s'installe sur une île, un allèle peut disparaître, ou au contraire devenir le seul présent, par simple hasard, qu'il soit utile ou non. C'est comme lancer une pièce : sur 4 lancers, on peut facilement obtenir 4 fois pile ; sur 1 000 lancers, on obtient presque toujours environ moitié pile, moitié face.",
              ],
              box: { label: "À retenir", text: "Mutations, sélection naturelle et dérive génétique modifient la fréquence des allèles dans les populations : c'est l'évolution. La sélection dépend du milieu, la dérive dépend du hasard et agit surtout dans les petites populations." },
            },
          ],
          keyPoints: [
            "Les individus d'une population diffèrent par leurs allèles, apparus par mutation et combinés par la reproduction sexuée.",
            "Sélection naturelle (Darwin, 1859) : le milieu favorise la survie et la reproduction des individus porteurs de caractères avantageux.",
            "Le milieu ne crée pas les caractères, il trie parmi ceux qui existent déjà.",
            "Dérive génétique : la fréquence des allèles change au hasard, surtout dans les petites populations.",
            "C'est la population qui évolue au fil des générations, pas l'individu au cours de sa vie.",
          ],
          example: {
            statement: "Au XIXe siècle, dans les régions industrielles d'Angleterre, la forme sombre de la phalène du bouleau, rare au départ, est devenue majoritaire. Expliquez ce changement à l'aide de la sélection naturelle.",
            solution: [
              "Au départ, la population de phalènes comprenait des individus clairs et quelques individus sombres : cette diversité existait avant la pollution.",
              "La pollution a noirci les troncs d'arbres : le milieu a changé.",
              "Sur les troncs sombres, les phalènes claires étaient plus visibles par les oiseaux et plus souvent mangées ; les sombres étaient mieux camouflées.",
              "Les phalènes sombres ont donc davantage survécu et se sont davantage reproduites, transmettant l'allèle de la couleur sombre.",
              "Conclusion : génération après génération, l'allèle de la forme sombre est devenu plus fréquent : c'est la sélection naturelle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une région enneigée une grande partie de l'année, une population de lièvres comprend des individus à pelage blanc en hiver et quelques individus à pelage restant brun. Les renards repèrent plus facilement les lièvres bruns sur la neige. Expliquez comment la proportion de lièvres blancs va évoluer au fil des générations.",
              hint: "Suivez le raisonnement : diversité, action du milieu, survie et reproduction, transmission.",
              solution: [
                "La population présente une diversité de pelage d'origine héréditaire.",
                "Sur la neige, les lièvres bruns sont plus visibles et plus souvent capturés par les renards.",
                "Les lièvres blancs survivent davantage, se reproduisent plus et transmettent l'allèle du pelage blanc.",
                "Conclusion : au fil des générations, la proportion de lièvres blancs augmente : c'est la sélection naturelle.",
              ],
            },
            {
              level: 2,
              statement: "Une forêt aux troncs noircis abrite 1 000 phalènes : 900 claires et 100 sombres. En un an, les oiseaux mangent 50 % des phalènes claires et 10 % des phalènes sombres. 1. Quelle est la proportion de phalènes sombres au départ ? 2. Combien de phalènes claires et sombres survivent ? 3. Quelle est la proportion de phalènes sombres parmi les survivantes ? Concluez.",
              hint: "Calculez d'abord le nombre de survivantes de chaque forme, puis divisez le nombre de sombres par le total des survivantes.",
              solution: [
                "1. Au départ : 100 ÷ 1 000 = 0,10, soit 10 % de phalènes sombres.",
                "2. Claires : 50 % sont mangées, donc 50 % survivent : 900 × 0,5 = 450. Sombres : 10 % sont mangées, donc 90 % survivent : 100 × 0,9 = 90.",
                "Total des survivantes : 450 + 90 = 540.",
                "3. Proportion de sombres : 90 ÷ 540 ≈ 0,167, soit environ 16,7 %.",
                "Conclusion : en un an, la proportion de phalènes sombres passe de 10 % à environ 16,7 %. Le milieu favorise la forme sombre : c'est la sélection naturelle.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Situation A : on traite une population de bactéries avec un antibiotique ; quelques jours plus tard, presque toutes les bactéries restantes sont résistantes à cet antibiotique. Situation B : une tempête emporte dix lézards sur une petite île ; quelques générations plus tard, un allèle de couleur des écailles, présent sur le continent, a disparu de la population de l'île, alors que cette couleur ne modifiait ni la survie ni la reproduction. 1. Pour chaque situation, identifiez le mécanisme d'évolution. Justifiez. 2. Expliquez pourquoi la situation B a peu de chances de se produire dans une population de plusieurs milliers de lézards.",
              hint: "Demandez-vous si le caractère qui devient fréquent ou disparaît donne un avantage dans le milieu.",
              solution: [
                "1. Situation A : la résistance donne un avantage en présence de l'antibiotique. Les bactéries sensibles meurent, les résistantes (apparues auparavant par mutation) survivent et se multiplient. C'est la sélection naturelle.",
                "Situation B : la couleur ne donne ni avantage ni désavantage. L'allèle a disparu par hasard, parce que peu d'individus le portaient et qu'ils ne l'ont pas transmis. C'est la dérive génétique.",
                "2. Dans une petite population, le hasard (quels individus se reproduisent, lesquels meurent accidentellement) peut faire disparaître un allèle en peu de générations.",
                "Dans une population de plusieurs milliers d'individus, un allèle est porté par de nombreux individus : il est très improbable que, par hasard, aucun ne le transmette.",
                "Conclusion : la situation A relève de la sélection naturelle, la situation B de la dérive génétique, dont les effets sont forts surtout dans les petites populations.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du raisonnement de la sélection naturelle.",
            items: [
              "Des mutations créent des allèles différents",
              "Les individus de la population présentent des caractères variés",
              "Le milieu impose une contrainte (prédateur, climat, maladie)",
              "Les individus porteurs d'un caractère avantageux survivent et se reproduisent davantage",
              "Ils transmettent plus souvent leurs allèles à la génération suivante",
              "Au fil des générations, ces allèles deviennent plus fréquents dans la population",
            ],
          },
          quiz: [
            {
              q: "Qui a proposé le mécanisme de la sélection naturelle en 1859 ?",
              options: ["Louis Pasteur", "Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck"],
              answer: 1,
              why: "Charles Darwin l'a exposé dans De l'origine des espèces, publié en 1859.",
            },
            {
              q: "Dans la sélection naturelle, quel est le rôle du milieu ?",
              options: ["Il crée les mutations utiles", "Il transforme les individus pendant leur vie", "Il n'a aucun rôle", "Il trie parmi les variations existantes"],
              answer: 3,
              why: "Le milieu ne crée pas les caractères : il favorise la survie et la reproduction de certains individus déjà différents.",
            },
            {
              q: "Qu'est-ce que la dérive génétique ?",
              options: ["Un changement au hasard de la fréquence des allèles", "Le déplacement des continents", "Une mutation provoquée par les UV", "La sélection des individus les plus forts par le milieu"],
              answer: 0,
              why: "La dérive génétique est la variation aléatoire de la fréquence des allèles d'une génération à l'autre.",
            },
            {
              q: "Dans quelle population la dérive génétique a-t-elle le plus d'effet ?",
              options: ["Une population très nombreuse", "Une population de bactéries traitées par un antibiotique", "Une petite population", "Aucune, elle agit partout de la même façon"],
              answer: 2,
              why: "Dans une petite population, le hasard peut faire disparaître ou fixer un allèle en peu de générations.",
            },
            {
              q: "Qu'est-ce qui évolue au fil des générations ?",
              options: ["Chaque individu au cours de sa vie", "Uniquement les espèces disparues", "Le nombre de chromosomes de chaque individu", "La population"],
              answer: 3,
              why: "Un individu garde ses allèles toute sa vie ; c'est la fréquence des allèles dans la population qui change.",
            },
          ],
          trap: "Croire que les êtres vivants se transforment pour s'adapter à leur milieu (la girafe qui allongerait son cou à force de l'étirer). Les variations apparaissent au hasard, et le milieu ne fait que trier.",
          method: "Pour expliquer une sélection naturelle, suivez toujours quatre étapes : diversité initiale, changement ou contrainte du milieu, survie et reproduction inégales, transmission des allèles au fil des générations.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'biodiversite-evolution',
          title: "La biodiversité, résultat de l'évolution",
          minutes: 30,
          objectives: [
            "Définir la biodiversité à ses trois niveaux : écosystèmes, espèces et diversité génétique.",
            "Définir une espèce et expliquer comment une nouvelle espèce peut apparaître.",
            "Mettre en évidence, à partir de fossiles, que la biodiversité change au cours des temps géologiques.",
            "Situer quelques grands événements de l'histoire de la vie sur une frise chronologique.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la biodiversité ?",
              paragraphs: [
                "La biodiversité est la diversité du vivant. On la décrit à trois niveaux : la diversité des écosystèmes (forêt, prairie, mare, récif de corail), la diversité des espèces qui vivent dans un milieu, et la diversité génétique, c'est-à-dire les différences entre les individus d'une même espèce, dues à leurs allèles.",
                "Une espèce est un ensemble d'êtres vivants qui se ressemblent et qui peuvent se reproduire entre eux en donnant des descendants fertiles. Le cheval et l'âne peuvent se reproduire, mais leur descendant, le mulet, est stérile : le cheval et l'âne sont deux espèces différentes. Près de deux millions d'espèces ont été décrites à ce jour, et beaucoup restent à découvrir.",
              ],
              box: { label: "Définition", text: "Biodiversité : diversité des écosystèmes, des espèces et des individus (diversité génétique). Espèce : ensemble d'individus qui se ressemblent et peuvent se reproduire entre eux en donnant des descendants fertiles." },
            },
            {
              heading: "Une biodiversité qui change au cours du temps",
              paragraphs: [
                "Les fossiles sont les restes ou les traces d'êtres vivants conservés dans les roches. Ils montrent que de nombreuses espèces ont existé puis ont disparu, comme les trilobites, les ammonites ou les dinosaures, et que les espèces actuelles n'ont pas toujours existé.",
                "La Terre s'est formée il y a environ 4,6 milliards d'années, et les plus anciennes traces de vie datent de plus de 3,5 milliards d'années. Notre espèce, Homo sapiens, n'est apparue qu'il y a environ 300 000 ans. La biodiversité actuelle n'est donc qu'une étape dans une très longue histoire.",
                "Certains fossiles présentent des attributs de deux groupes. Archaeopteryx, qui vivait il y a environ 150 millions d'années, avait des plumes et des ailes comme un oiseau, mais aussi des dents, des griffes aux ailes et une longue queue osseuse comme les dinosaures. Il témoigne de la parenté entre dinosaures et oiseaux.",
              ],
            },
            {
              heading: "Apparitions et disparitions d'espèces",
              paragraphs: [
                "De nouvelles espèces apparaissent. Lorsque deux populations d'une même espèce sont séparées (par une montagne, un bras de mer, un fleuve), elles ne se reproduisent plus entre elles. Dans chacune, des mutations différentes apparaissent, la sélection naturelle et la dérive génétique agissent différemment. Après de nombreuses générations, les deux populations peuvent devenir si différentes qu'elles ne peuvent plus donner de descendants fertiles ensemble : ce sont deux espèces.",
                "Des espèces disparaissent aussi, de façon continue. Au cours de l'histoire de la Terre, cinq grandes crises biologiques ont fait disparaître en peu de temps une grande partie des espèces. La plus importante s'est produite il y a environ 252 millions d'années, à la fin du Permien. La plus connue, il y a 66 millions d'années, a vu disparaître les dinosaures non aviens et les ammonites ; les groupes survivants, comme les mammifères, se sont ensuite diversifiés.",
              ],
              box: { label: "Repère", text: "Formation de la Terre : environ 4,6 milliards d'années. Premières traces de vie : plus de 3,5 milliards d'années. Crise de la fin du Permien : environ 252 millions d'années. Disparition des dinosaures non aviens : 66 millions d'années. Homo sapiens : environ 300 000 ans." },
            },
            {
              heading: "La biodiversité actuelle, résultat de l'évolution",
              paragraphs: [
                "La biodiversité que nous observons aujourd'hui résulte de plus de 3,5 milliards d'années d'évolution : des mutations, de la sélection naturelle, de la dérive génétique, de l'apparition et de la disparition d'espèces. Les oiseaux, par exemple, sont les descendants actuels d'un groupe de dinosaures.",
                "Cette histoire continue. Aujourd'hui, les activités humaines accélèrent la disparition de nombreuses espèces, ce qui fait de la préservation de la biodiversité un enjeu majeur, étudié dans la partie consacrée à l'environnement.",
              ],
              box: { label: "À retenir", text: "La biodiversité change au cours du temps : des espèces apparaissent, d'autres disparaissent. La biodiversité actuelle est une étape de l'histoire du vivant, résultat de l'évolution." },
            },
          ],
          keyPoints: [
            "La biodiversité existe à trois niveaux : écosystèmes, espèces, diversité génétique des individus.",
            "Une espèce regroupe des individus qui peuvent se reproduire entre eux et avoir des descendants fertiles.",
            "Les fossiles montrent que des espèces ont disparu et que d'autres sont apparues au cours du temps.",
            "Deux populations séparées pendant longtemps peuvent devenir deux espèces différentes.",
            "Cinq grandes crises biologiques ont marqué l'histoire de la vie, dont celle d'il y a 66 millions d'années.",
            "La biodiversité actuelle est le résultat de plus de 3,5 milliards d'années d'évolution.",
          ],
          example: {
            statement: "Archaeopteryx, un fossile daté d'environ 150 millions d'années, possédait des plumes, des ailes, des dents, des griffes aux doigts des ailes et une longue queue osseuse. En quoi ce fossile est-il un argument en faveur de l'évolution ?",
            solution: [
              "Je trie les attributs : plumes et ailes sont des attributs des oiseaux.",
              "Dents, griffes aux ailes et longue queue osseuse sont des attributs que l'on retrouve chez des dinosaures, et pas chez les oiseaux actuels.",
              "Archaeopteryx combine donc des attributs de deux groupes.",
              "Cela s'explique si les oiseaux et les dinosaures sont apparentés, les oiseaux descendant d'un groupe de dinosaures.",
              "Conclusion : ce fossile témoigne de la parenté entre groupes et de la transformation des espèces au cours du temps, c'est-à-dire de l'évolution.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À quel niveau de la biodiversité chaque exemple correspond-il ? a) Dans un jardin, les escargots des haies d'une même espèce ont des coquilles jaunes, roses ou brunes, rayées ou non. b) Une région comprend une forêt, une mare et une prairie. c) On recense trente espèces d'oiseaux dans un parc.",
              hint: "Demandez-vous si l'on compare des individus d'une même espèce, des espèces différentes ou des milieux différents.",
              solution: [
                "a) Il s'agit d'individus d'une même espèce qui diffèrent par leurs caractères héréditaires : diversité génétique.",
                "b) Il s'agit de milieux différents : diversité des écosystèmes.",
                "c) Il s'agit du nombre d'espèces différentes : diversité des espèces.",
              ],
            },
            {
              level: 2,
              statement: "On ramène toute l'histoire de la Terre (4,6 milliards d'années, soit 4 600 millions d'années) à une seule journée de 24 heures, de 0 h à minuit. 1. Combien de minutes avant minuit les dinosaures non aviens disparaissent-ils (il y a 66 millions d'années) ? 2. Combien de secondes avant minuit Homo sapiens apparaît-il (il y a 0,3 million d'années) ? Qu'en concluez-vous ?",
              hint: "24 h = 1 440 min = 86 400 s. Utilisez la proportionnalité : durée ÷ 4 600 × durée de la journée.",
              solution: [
                "1. Proportionnalité : 66 ÷ 4 600 × 1 440 min ≈ 20,7 min.",
                "Les dinosaures non aviens disparaissent environ 21 minutes avant minuit, vers 23 h 39.",
                "2. Proportionnalité : 0,3 ÷ 4 600 × 86 400 s ≈ 5,6 s.",
                "Homo sapiens apparaît environ 6 secondes avant minuit.",
                "Conclusion : notre espèce est apparue extrêmement récemment à l'échelle de l'histoire de la Terre ; la biodiversité actuelle n'est qu'un instant de cette histoire.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Situation imaginée : une population de souris vit dans une vallée. Un fleuve change de cours et la coupe en deux populations, qui ne peuvent plus se rencontrer. Sur la rive nord, le sol est sombre et humide ; sur la rive sud, il est clair et sec. Des milliers de générations plus tard, on remet en contact des souris des deux rives. 1. Expliquez pourquoi les deux populations sont devenues différentes. 2. Quelle expérience permettrait de savoir si elles forment désormais deux espèces ? 3. Quels résultats indiqueraient qu'il s'agit de deux espèces ?",
              hint: "Mobilisez les trois mécanismes vus dans ce chapitre, puis la définition de l'espèce.",
              solution: [
                "1. Séparées, les deux populations ne se reproduisent plus entre elles : leurs allèles ne se mélangent plus.",
                "Dans chacune, des mutations différentes apparaissent au hasard.",
                "Les milieux sont différents (sol sombre et humide, sol clair et sec) : la sélection naturelle favorise des caractères différents sur chaque rive. La dérive génétique modifie aussi, au hasard, la fréquence des allèles de façon différente.",
                "2. Il faut mettre des souris des deux rives ensemble et observer si elles se reproduisent, puis si leurs descendants sont eux-mêmes capables de se reproduire.",
                "3. Si elles ne se reproduisent pas, ou si leurs descendants sont stériles (comme le mulet), elles appartiennent à deux espèces différentes.",
                "Conclusion : l'isolement de deux populations, suivi de mutations, de sélection et de dérive différentes, peut conduire à l'apparition de nouvelles espèces.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque date à l'événement de l'histoire de la vie qui lui correspond.",
            pairs: [
              { left: "Environ 4,6 milliards d'années", right: "Formation de la Terre" },
              { left: "Plus de 3,5 milliards d'années", right: "Plus anciennes traces de vie" },
              { left: "Environ 252 millions d'années", right: "La plus grande crise biologique, à la fin du Permien" },
              { left: "Environ 150 millions d'années", right: "Archaeopteryx, à la fois oiseau et dinosaure" },
              { left: "66 millions d'années", right: "Disparition des dinosaures non aviens et des ammonites" },
              { left: "Environ 300 000 ans", right: "Apparition d'Homo sapiens" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces exemples relève de la diversité génétique ?",
              options: ["Une forêt et une mare voisines", "Trente espèces d'oiseaux différentes observées dans un même parc", "Des récifs de corail et des déserts", "Des chats d'une même portée de couleurs différentes"],
              answer: 3,
              why: "La diversité génétique concerne les différences entre individus d'une même espèce.",
            },
            {
              q: "Pourquoi le cheval et l'âne sont-ils deux espèces différentes ?",
              options: ["Ils n'ont pas la même taille", "Leur descendant, le mulet, est stérile", "Ils ne vivent pas dans le même milieu naturel", "L'un est domestique, l'autre non"],
              answer: 1,
              why: "Deux individus de la même espèce donnent des descendants fertiles ; le mulet est stérile.",
            },
            {
              q: "Que montrent les fossiles d'ammonites et de trilobites ?",
              options: ["Que les espèces ne changent jamais", "Qu'ils vivent encore aujourd'hui dans les grands fonds marins", "Que des espèces ont disparu au cours du temps", "Que la Terre a 300 000 ans"],
              answer: 2,
              why: "Ces groupes, abondants autrefois, n'existent plus aujourd'hui : la biodiversité change au cours du temps.",
            },
            {
              q: "Il y a combien de temps les dinosaures non aviens ont-ils disparu ?",
              options: ["66 millions d'années", "6 600 ans", "4,6 milliards d'années", "300 000 ans"],
              answer: 0,
              why: "Ils ont disparu lors de la crise biologique d'il y a 66 millions d'années, avec les ammonites.",
            },
            {
              q: "Comment une nouvelle espèce peut-elle apparaître ?",
              options: ["Un individu se transforme progressivement au cours de sa vie pour s'adapter à son milieu", "Une population isolée accumule des différences au fil des générations", "Deux espèces fusionnent en une seule", "Les fossiles reprennent vie"],
              answer: 1,
              why: "Isolée, une population évolue par mutations, sélection et dérive jusqu'à ne plus pouvoir se reproduire avec l'autre population.",
            },
          ],
          trap: "Croire que la biodiversité actuelle a toujours existé, ou qu'une espèce apparaît d'un coup. Les espèces apparaissent progressivement au fil de très nombreuses générations, et la plupart des espèces ayant existé ont disparu.",
          method: "Pour retenir les dates, construisez une frise à l'échelle sur une bande de papier et placez-y les grands événements : vous verrez à quel point l'apparition de notre espèce est récente.",
        },
      ],
    },

    /* ==================================================================== */
    /* LE MONDE MICROBIEN ET NOUS                                             */
    /* ==================================================================== */
    {
      id: 'monde-microbien',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'micro-organismes',
          title: 'Micro-organismes : bactéries, virus et microbiote',
          minutes: 30,
          objectives: [
            "Définir un micro-organisme et citer les principaux groupes : bactéries, champignons microscopiques, protozoaires et virus.",
            "Comparer une bactérie et un virus : organisation, taille, mode de multiplication.",
            "Utiliser les unités micromètre et nanomètre pour comparer des tailles.",
            "Expliquer le rôle du microbiote dans le fonctionnement de l'organisme.",
          ],
          course: [
            {
              heading: "Un monde invisible à l'œil nu",
              paragraphs: [
                "Un micro-organisme (ou microbe) est un être vivant trop petit pour être vu à l'œil nu, qui ne distingue pas les objets de moins de 0,1 mm environ. On l'observe au microscope. Les premiers micro-organismes ont été observés au XVIIe siècle par le Néerlandais Antoni van Leeuwenhoek, avec des microscopes qu'il fabriquait lui-même ; au XIXe siècle, Louis Pasteur a montré leur rôle dans les fermentations et dans certaines maladies.",
                "On distingue plusieurs groupes : les bactéries, les champignons microscopiques (comme les levures), les protozoaires (des êtres unicellulaires possédant un noyau, comme le parasite responsable du paludisme) et les virus, qui sont un cas à part. Les micro-organismes vivent partout : dans le sol, l'eau, l'air, et sur et dans notre corps.",
              ],
              box: { label: "Repère", text: "1 mm = 1 000 µm (micromètres). 1 µm = 1 000 nm (nanomètres). Bactérie : de l'ordre de 1 à quelques µm. Virus : de l'ordre de 20 à 300 nm." },
            },
            {
              heading: "Les bactéries",
              paragraphs: [
                "Une bactérie est un être vivant formé d'une seule cellule, sans noyau : son ADN se trouve directement dans le cytoplasme. Sa taille est de l'ordre de 1 à quelques micromètres : on peut l'observer au microscope optique. Selon leur forme, on distingue notamment les bactéries sphériques (coques) et les bactéries en bâtonnet (bacilles).",
                "Les bactéries se nourrissent, grandissent et se multiplient seules, par division : une bactérie donne deux bactéries identiques. Dans de bonnes conditions (nourriture, humidité, température favorable), certaines se divisent toutes les 20 minutes environ, ce qui explique qu'elles puissent devenir très nombreuses en quelques heures.",
              ],
            },
            {
              heading: "Les virus",
              paragraphs: [
                "Un virus est beaucoup plus petit qu'une bactérie, de l'ordre de 20 à 300 nanomètres : on ne peut l'observer qu'au microscope électronique. Ce n'est pas une cellule : il est formé d'un matériel génétique (de l'ADN ou un acide voisin, l'ARN) entouré d'une enveloppe de protéines.",
                "Un virus ne peut pas se multiplier seul. Il doit pénétrer dans une cellule vivante et la détourner pour qu'elle fabrique de nouveaux virus : c'est un parasite obligatoire. Les virus de la grippe, de la rougeole ou le VIH en sont des exemples. Les antibiotiques, efficaces contre les bactéries, sont sans effet sur les virus.",
              ],
              box: { label: "À retenir", text: "Bactérie : une cellule sans noyau, de quelques µm, qui se multiplie seule par division. Virus : pas une cellule, quelques dizaines à centaines de nm, ne se multiplie qu'à l'intérieur d'une cellule vivante." },
            },
            {
              heading: "Le microbiote, nos micro-organismes alliés",
              paragraphs: [
                "Notre corps héberge un nombre immense de micro-organismes, surtout des bactéries : selon les estimations récentes, il y a à peu près autant de bactéries que de cellules humaines dans notre organisme. On appelle microbiote l'ensemble des micro-organismes qui vivent dans un milieu donné. Le plus important est le microbiote intestinal, mais la peau et la bouche ont aussi le leur.",
                "Le microbiote est indispensable. Les bactéries de l'intestin dégradent des fibres alimentaires que nous ne savons pas digérer, produisent certaines vitamines (comme la vitamine K), occupent la place et empêchent l'installation de micro-organismes dangereux, et participent à la maturation de notre système immunitaire.",
                "Seule une petite partie des micro-organismes est pathogène, c'est-à-dire capable de provoquer une maladie. Beaucoup nous sont utiles, y compris dans l'alimentation : des bactéries transforment le lait en yaourt ou en fromage, et la levure de boulanger fait lever la pâte à pain.",
              ],
              box: { label: "Définition", text: "Le microbiote est l'ensemble des micro-organismes qui vivent dans un milieu, par exemple l'intestin. Le microbiote intestinal aide à la digestion, produit des vitamines et protège contre les micro-organismes pathogènes." },
            },
          ],
          keyPoints: [
            "Un micro-organisme est un être vivant invisible à l'œil nu : bactérie, champignon microscopique, protozoaire, ou virus.",
            "Une bactérie est une cellule sans noyau de quelques micromètres, qui se multiplie seule par division.",
            "Un virus n'est pas une cellule ; beaucoup plus petit (nanomètres), il ne se multiplie que dans une cellule vivante.",
            "1 mm = 1 000 µm et 1 µm = 1 000 nm.",
            "Le microbiote intestinal aide à digérer, produit des vitamines et protège contre les pathogènes.",
            "Seule une minorité de micro-organismes est pathogène.",
          ],
          example: {
            statement: "Une bactérie mesure 2 µm de long et un virus mesure 100 nm. Combien de fois la bactérie est-elle plus grande que le virus ?",
            solution: [
              "Pour comparer, j'exprime les deux tailles dans la même unité.",
              "1 µm = 1 000 nm, donc 2 µm = 2 × 1 000 = 2 000 nm.",
              "Je divise : 2 000 ÷ 100 = 20.",
              "Conclusion : la bactérie est 20 fois plus grande que le virus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque micro-organisme dans son groupe (bactérie, virus, champignon microscopique, protozoaire) : la levure de boulanger, le virus de la grippe, le bacille Escherichia coli, le Plasmodium (responsable du paludisme).",
              hint: "Rappelez-vous les quatre groupes du cours et l'exemple donné pour chacun.",
              solution: [
                "La levure de boulanger : champignon microscopique.",
                "Le virus de la grippe : virus.",
                "Escherichia coli, un bacille : bactérie.",
                "Le Plasmodium : protozoaire (un être unicellulaire possédant un noyau).",
              ],
            },
            {
              level: 2,
              statement: "Un microscope optique grossit au maximum environ 1 000 fois, et il ne permet pas de distinguer des détails de moins de 0,2 µm environ. 1. Quelle taille apparente aurait une bactérie de 2 µm grossie 1 000 fois (en mm) ? 2. Un virus mesure 100 nm. Convertissez cette taille en µm. Peut-on l'observer au microscope optique ? Justifiez.",
              hint: "Taille apparente = taille réelle × grossissement. Pensez à 1 mm = 1 000 µm et 1 µm = 1 000 nm.",
              solution: [
                "1. Taille apparente : 2 µm × 1 000 = 2 000 µm.",
                "2 000 µm = 2 000 ÷ 1 000 = 2 mm : la bactérie apparaît comme un objet de 2 mm, bien visible.",
                "2. 100 nm = 100 ÷ 1 000 = 0,1 µm.",
                "0,1 µm est plus petit que 0,2 µm, le plus petit détail que distingue le microscope optique.",
                "Conclusion : la bactérie est observable au microscope optique, mais pas le virus, qu'il faut observer au microscope électronique.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document : des chercheurs élèvent des souris dites axéniques, c'est-à-dire totalement dépourvues de micro-organismes, dans un environnement stérile. Ils les comparent à des souris normales, qui possèdent un microbiote. Ils constatent que les souris axéniques doivent manger davantage pour maintenir leur masse, que leur système immunitaire intestinal est moins développé et qu'elles sont plus sensibles à certaines infections. 1. Quel est l'intérêt de comparer avec des souris normales ? 2. À partir de chaque observation, déduisez un rôle du microbiote. 3. Un élève affirme : « Il faudrait éliminer tous les microbes de notre corps. » Que lui répondez-vous ?",
              hint: "Ce qui manque ou fonctionne moins bien chez les souris sans microbiote indique ce que le microbiote apporte normalement.",
              solution: [
                "1. Les souris normales servent de témoin : les deux lots ne diffèrent que par la présence ou l'absence de microbiote, donc les différences observées sont dues au microbiote.",
                "2. Les souris axéniques doivent manger davantage : le microbiote aide à tirer davantage d'énergie des aliments (il dégrade des fibres que l'organisme ne digère pas seul).",
                "Leur système immunitaire intestinal est moins développé : le microbiote participe à la maturation du système immunitaire.",
                "Elles sont plus sensibles à certaines infections : le microbiote protège contre les micro-organismes pathogènes, notamment en occupant la place.",
                "3. Ce serait une erreur : la plupart des micro-organismes de notre corps ne sont pas dangereux, et le microbiote est utile à la digestion, à l'immunité et à la protection contre les pathogènes.",
                "Conclusion : le microbiote est un allié indispensable au bon fonctionnement de l'organisme.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Faites le tri parmi les idées reçues sur les microbes.",
            statements: [
              { text: "Tous les microbes sont dangereux.", true: false, why: "Seule une minorité est pathogène ; beaucoup sont utiles, comme le microbiote ou les bactéries du yaourt." },
              { text: "Un virus est une cellule minuscule.", true: false, why: "Un virus n'est pas une cellule : c'est un matériel génétique entouré d'une enveloppe de protéines." },
              { text: "On peut observer une bactérie au microscope optique.", true: true, why: "Elle mesure de l'ordre de 1 à quelques micromètres, une taille accessible au microscope optique." },
              { text: "Un virus peut se multiplier seul dans une goutte d'eau.", true: false, why: "Il ne se multiplie qu'à l'intérieur d'une cellule vivante, qu'il détourne." },
              { text: "La levure qui fait lever le pain est un champignon microscopique.", true: true, why: "La levure de boulanger est un champignon unicellulaire." },
              { text: "Les antibiotiques soignent les maladies dues aux virus.", true: false, why: "Les antibiotiques agissent sur les bactéries, pas sur les virus." },
              { text: "Notre intestin abrite des bactéries utiles à la digestion.", true: true, why: "Le microbiote intestinal dégrade des fibres que nous ne savons pas digérer seuls." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la particularité d'une cellule bactérienne ?",
              options: ["Elle possède deux noyaux", "Elle mesure plusieurs millimètres", "Elle n'a pas de noyau", "Elle ne contient pas d'ADN"],
              answer: 2,
              why: "Une bactérie est une cellule sans noyau : son ADN est directement dans le cytoplasme.",
            },
            {
              q: "Comment un virus se multiplie-t-il ?",
              options: ["En détournant une cellule vivante", "Seul, par division, comme une bactérie", "En se nourrissant de sucres dans l'eau", "Par fécondation"],
              answer: 0,
              why: "Un virus n'est pas une cellule : il doit pénétrer dans une cellule vivante qui fabrique de nouveaux virus.",
            },
            {
              q: "Combien de nanomètres y a-t-il dans 1 micromètre ?",
              options: ["10", "1 000", "100", "1 000 000"],
              answer: 1,
              why: "1 µm = 1 000 nm, comme 1 mm = 1 000 µm.",
            },
            {
              q: "Quel est l'un des rôles du microbiote intestinal ?",
              options: ["Fabriquer les globules rouges", "Transporter le dioxygène dans le sang", "Produire les gamètes", "Protéger contre les micro-organismes pathogènes"],
              answer: 3,
              why: "En occupant la place, le microbiote empêche l'installation de micro-organismes dangereux ; il aide aussi à la digestion.",
            },
            {
              q: "Quel instrument faut-il pour observer un virus ?",
              options: ["Une loupe", "Un microscope optique", "Un microscope électronique", "L'œil nu suffit"],
              answer: 2,
              why: "Les virus, de quelques dizaines à quelques centaines de nanomètres, sont trop petits pour le microscope optique.",
            },
          ],
          trap: "Confondre bactérie et virus, ou penser que tous les microbes sont nuisibles. Une bactérie est une cellule autonome ; un virus n'est pas une cellule et a besoin d'une cellule pour se multiplier.",
          method: "Pour comparer deux tailles, convertissez-les toujours dans la même unité avant de diviser. Écrivez l'échelle mm, µm, nm avec « × 1 000 » entre chaque unité.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'contamination-infection',
          title: 'Contamination et infection',
          minutes: 30,
          objectives: [
            "Citer les barrières naturelles qui protègent l'organisme des micro-organismes.",
            "Définir la contamination et identifier les voies de contamination.",
            "Définir l'infection comme la multiplication des micro-organismes pathogènes dans l'organisme.",
            "Calculer l'évolution d'une population de bactéries qui se multiplient par division.",
          ],
          course: [
            {
              heading: "Les barrières naturelles de l'organisme",
              paragraphs: [
                "Nous sommes en permanence entourés de micro-organismes, mais notre corps possède des barrières naturelles. La peau, épaisse et imperméable, empêche leur entrée tant qu'elle n'est pas blessée ; son propre microbiote limite aussi l'installation des pathogènes.",
                "Les muqueuses, qui tapissent les voies respiratoires, digestives et génitales, sont recouvertes de mucus qui piège les micro-organismes. Dans les voies respiratoires, des cils rejettent ce mucus vers la gorge. Les larmes et la salive contiennent une enzyme qui détruit certaines bactéries, et l'acidité de l'estomac en tue beaucoup.",
              ],
              box: { label: "À retenir", text: "Barrières naturelles : la peau, les muqueuses et leur mucus, les cils des voies respiratoires, les larmes et la salive, l'acidité de l'estomac, et le microbiote." },
            },
            {
              heading: "La contamination",
              paragraphs: [
                "La contamination est l'entrée de micro-organismes pathogènes dans l'organisme, en franchissant ces barrières. Elle peut se faire par une plaie (le tétanos, dû à une bactérie du sol qui pénètre par une blessure souillée), par les voies respiratoires (la grippe, transmise par les gouttelettes émises en toussant, en éternuant ou en parlant), ou par les voies digestives (une salmonellose, après avoir consommé un aliment contaminé).",
                "La contamination peut aussi se faire par contact direct avec une personne malade ou des objets contaminés, par voie sexuelle ou par le sang (le VIH), ou encore par la piqûre d'un animal : le paludisme est transmis par la piqûre de certains moustiques, les anophèles femelles, qui injectent le parasite.",
              ],
              box: { label: "Définition", text: "La contamination est la pénétration de micro-organismes pathogènes dans l'organisme : par une plaie, par les voies respiratoires ou digestives, par voie sexuelle, par le sang ou par la piqûre d'un animal." },
            },
            {
              heading: "L'infection : les micro-organismes se multiplient",
              paragraphs: [
                "Après la contamination, si les micro-organismes parviennent à se multiplier dans l'organisme, il y a infection. Les bactéries se multiplient par division : 1 bactérie donne 2, puis 4, puis 8... Si elles se divisent toutes les 20 minutes, une seule bactérie en donne 2⁹ = 512 au bout de 3 heures. Certaines produisent des toxines, des substances toxiques, comme la bactérie du tétanos.",
                "Les virus pénètrent dans certaines cellules de l'organisme et les obligent à fabriquer de nouveaux virus ; une seule cellule infectée peut en libérer des centaines, voire des milliers, qui infectent les cellules voisines. La cellule infectée est souvent détruite.",
                "Le temps qui sépare la contamination de l'apparition des premiers symptômes (fièvre, fatigue, douleurs) s'appelle la période d'incubation. Pendant cette période, les micro-organismes se multiplient sans que la personne s'en aperçoive.",
              ],
              box: { label: "Définition", text: "L'infection est la multiplication des micro-organismes pathogènes dans l'organisme. La période d'incubation sépare la contamination des premiers symptômes." },
            },
            {
              heading: "Contaminé, infecté, malade : trois étapes différentes",
              paragraphs: [
                "Une contamination n'entraîne pas toujours une infection : le système immunitaire peut éliminer les micro-organismes avant qu'ils ne se multiplient. De même, une personne infectée n'a pas toujours de symptômes ; on parle alors de porteur asymptomatique. Elle peut pourtant transmettre les micro-organismes à d'autres personnes.",
                "Le plus souvent, les défenses de l'organisme finissent par éliminer les micro-organismes, et la personne guérit. Ces défenses, le système immunitaire, sont étudiées dans le chapitre suivant.",
              ],
            },
          ],
          keyPoints: [
            "Peau, muqueuses, mucus, larmes, salive, acidité de l'estomac et microbiote forment des barrières naturelles.",
            "La contamination est l'entrée des micro-organismes pathogènes dans l'organisme.",
            "Voies de contamination : plaie, voies respiratoires ou digestives, voie sexuelle, sang, piqûre d'animal.",
            "L'infection est la multiplication des micro-organismes dans l'organisme ; les bactéries se multiplient par division.",
            "L'incubation est la durée entre la contamination et les premiers symptômes.",
            "On peut être infecté sans symptômes et pourtant contagieux.",
          ],
          example: {
            statement: "Une bactérie pénètre dans une plaie. Dans ces conditions, elle se divise toutes les 20 minutes. Combien de bactéries y a-t-il au bout de 2 heures ?",
            solution: [
              "Je compte les divisions : 2 heures = 120 minutes, et 120 ÷ 20 = 6 divisions.",
              "À chaque division, le nombre de bactéries double.",
              "Après 6 divisions : 2⁶ = 2 × 2 × 2 × 2 × 2 × 2 = 64.",
              "Conclusion : au bout de 2 heures, il y a 64 bactéries. C'est l'infection : les bactéries se multiplient dans l'organisme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque maladie, indiquez la voie de contamination : le tétanos, la grippe, la salmonellose, le paludisme.",
              hint: "Demandez-vous par où le micro-organisme entre : la peau blessée, l'air, les aliments ou un animal.",
              solution: [
                "Tétanos : par une plaie souillée de terre (la bactérie franchit la peau blessée).",
                "Grippe : par les voies respiratoires, en inhalant des gouttelettes émises par une personne malade.",
                "Salmonellose : par les voies digestives, en consommant un aliment contaminé.",
                "Paludisme : par la piqûre d'un moustique anophèle femelle qui injecte le parasite dans le sang.",
              ],
            },
            {
              level: 2,
              statement: "100 bactéries pénètrent dans une plaie. Elles se divisent toutes les 30 minutes. 1. Combien de divisions se produisent en 3 heures ? 2. Combien de bactéries y a-t-il au bout de 3 heures ? 3. Pourquoi faut-il nettoyer une plaie rapidement ?",
              hint: "Chaque division multiplie le nombre de bactéries par 2 : après n divisions, il faut multiplier par 2ⁿ.",
              solution: [
                "1. 3 heures = 180 minutes ; 180 ÷ 30 = 6 divisions.",
                "2. 2⁶ = 64, donc 100 × 64 = 6 400 bactéries.",
                "3. Le nombre de bactéries double à chaque division : plus on attend, plus elles sont nombreuses et plus l'infection est difficile à combattre.",
                "Conclusion : 6 400 bactéries au bout de 3 heures ; nettoyer tôt limite fortement l'infection.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Situation fictive : une personne est contaminée par un virus au jour 0. On mesure le nombre de virus par millilitre de sang. Jour 0 : non détectable. Jour 1 : 100. Jour 2 : 10 000. Jour 3 : 1 000 000, apparition de la fièvre. Jour 5 : 100 000. Jour 8 : non détectable, guérison. 1. Quelle est la durée de la période d'incubation ? 2. Par combien le nombre de virus est-il multiplié entre le jour 1 et le jour 3 ? Comment appelle-t-on cette phase ? 3. Proposez une explication à la diminution observée après le jour 3. 4. Cette personne pouvait-elle contaminer son entourage avant d'avoir de la fièvre ? Justifiez.",
              hint: "L'incubation va de la contamination aux premiers symptômes. Pour la question 2, divisez la valeur du jour 3 par celle du jour 1.",
              solution: [
                "1. Contamination au jour 0, premiers symptômes (fièvre) au jour 3 : l'incubation dure 3 jours.",
                "2. 1 000 000 ÷ 100 = 10 000 : le nombre de virus est multiplié par 10 000 en deux jours. C'est l'infection : les virus se multiplient dans les cellules de l'organisme.",
                "3. Après le jour 3, le nombre de virus diminue jusqu'à devenir non détectable : les défenses de l'organisme (le système immunitaire) éliminent les virus.",
                "4. Oui : dès les jours 1 et 2, des virus sont présents et se multiplient, alors que la personne n'a pas encore de symptômes.",
                "Conclusion : on peut transmettre un virus pendant l'incubation, d'où l'importance des gestes d'hygiène même sans se sentir malade.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une maladie infectieuse.",
            items: [
              "Le micro-organisme pathogène est présent dans l'environnement",
              "Il franchit une barrière naturelle : c'est la contamination",
              "Il se multiplie dans l'organisme : c'est l'infection",
              "Les premiers symptômes apparaissent : fin de l'incubation",
              "Le système immunitaire élimine les micro-organismes",
              "La personne guérit",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que la contamination ?",
              options: ["L'entrée de micro-organismes pathogènes dans l'organisme", "L'apparition de la fièvre", "La guérison après une maladie", "La fabrication d'anticorps"],
              answer: 0,
              why: "La contamination est la pénétration des micro-organismes pathogènes, en franchissant les barrières naturelles.",
            },
            {
              q: "Lequel de ces éléments n'est pas une barrière naturelle ?",
              options: ["La peau", "Le mucus des voies respiratoires", "L'acidité de l'estomac", "Une plaie ouverte"],
              answer: 3,
              why: "Une plaie est au contraire une porte d'entrée : la barrière de la peau est rompue.",
            },
            {
              q: "Comment appelle-t-on la multiplication des micro-organismes dans l'organisme ?",
              options: ["La contamination", "L'infection", "L'incubation", "L'asepsie"],
              answer: 1,
              why: "L'infection correspond à la multiplication des micro-organismes pathogènes dans l'organisme.",
            },
            {
              q: "Une bactérie se divise toutes les 20 minutes. Combien de bactéries obtient-on en 1 heure ?",
              options: ["3", "6", "8", "60"],
              answer: 2,
              why: "1 heure = 3 divisions de 20 minutes, donc 2³ = 8 bactéries.",
            },
            {
              q: "Qu'appelle-t-on période d'incubation ?",
              options: ["La durée entre la contamination et les premiers symptômes", "La durée de la fièvre", "Le temps nécessaire pour guérir", "Le temps passé à l'hôpital"],
              answer: 0,
              why: "L'incubation est la période pendant laquelle les micro-organismes se multiplient sans provoquer encore de symptômes.",
            },
          ],
          trap: "Confondre contamination et infection : la contamination est l'entrée des micro-organismes, l'infection est leur multiplication dans l'organisme. Une contamination n'aboutit pas toujours à une infection.",
          method: "Pour un calcul de multiplication de bactéries, commencez par compter le nombre de divisions (durée totale ÷ durée d'une division), puis multipliez le nombre de départ par 2 autant de fois.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'hygiene-asepsie',
          title: 'Se protéger : hygiène, asepsie et antiseptiques',
          minutes: 30,
          objectives: [
            "Expliquer comment les mesures d'hygiène limitent la contamination.",
            "Distinguer asepsie et antisepsie, antiseptique et désinfectant.",
            "Expliquer les principes de conservation des aliments par le froid et par la chaleur.",
            "Concevoir une expérience pour tester l'efficacité d'un moyen de lutte contre les micro-organismes.",
          ],
          course: [
            {
              heading: "L'hygiène, première protection",
              paragraphs: [
                "Les mains transportent de nombreux micro-organismes. Se laver les mains au savon pendant au moins 30 secondes, ou utiliser une solution hydroalcoolique, avant de manger, après être allé aux toilettes ou après s'être mouché, limite fortement la contamination. Tousser ou éternuer dans son coude, utiliser un mouchoir à usage unique et porter un masque quand on est malade évitent de transmettre des gouttelettes contaminées.",
                "L'importance de l'hygiène des mains a été montrée au XIXe siècle. En 1847, à Vienne, le médecin Ignace Semmelweis a imposé aux médecins de se laver les mains avec une solution chlorée avant d'examiner les femmes qui allaient accoucher : les décès dus à la fièvre puerpérale, une infection, ont alors fortement diminué.",
              ],
            },
            {
              heading: "L'asepsie : empêcher les micro-organismes d'arriver",
              paragraphs: [
                "L'asepsie regroupe l'ensemble des mesures qui empêchent l'apport de micro-organismes dans un milieu qui en est dépourvu, par exemple pendant une opération chirurgicale. Au bloc opératoire, le matériel est stérilisé, les soignants portent des gants, des blouses et des masques stériles, et l'air est filtré.",
                "Les instruments sont stérilisés, par exemple dans un autoclave, qui utilise de la vapeur d'eau sous pression à plus de 120 °C : tous les micro-organismes sont détruits. Le matériel à usage unique, comme les seringues, participe aussi à l'asepsie.",
              ],
              box: { label: "Définition", text: "L'asepsie est l'ensemble des mesures qui empêchent l'apport de micro-organismes (matériel stérile, gants, masques, blouses)." },
            },
            {
              heading: "L'antisepsie : détruire les micro-organismes sur la peau",
              paragraphs: [
                "L'antisepsie consiste à détruire les micro-organismes présents sur un tissu vivant, comme la peau ou une plaie, à l'aide d'un antiseptique : alcool à 70°, chlorhexidine, produits iodés. On désinfecte ainsi la peau avant une piqûre ou une plaie après l'avoir lavée à l'eau et au savon, puis on la protège par un pansement. Au XIXe siècle, le chirurgien anglais Joseph Lister a introduit l'antisepsie en chirurgie en utilisant de l'acide phénique.",
                "Il ne faut pas confondre antiseptique et désinfectant. Un antiseptique s'applique sur les tissus vivants. Un désinfectant, comme l'eau de Javel, s'utilise sur les objets et les surfaces : il serait trop agressif pour la peau.",
              ],
              box: { label: "Règle", text: "Asepsie : empêcher les micro-organismes d'arriver. Antisepsie : détruire ceux qui sont déjà présents sur un tissu vivant. Antiseptique : pour la peau et les plaies. Désinfectant : pour les objets et les surfaces." },
            },
            {
              heading: "Conserver les aliments",
              paragraphs: [
                "Les micro-organismes se multiplient dans les aliments, surtout à température ambiante. Le froid ralentit leur multiplication sans les tuer : le réfrigérateur (entre 0 et 4 °C) conserve les aliments quelques jours, le congélateur (-18 °C) bloque la multiplication pendant plusieurs mois. Quand l'aliment est décongelé, les micro-organismes survivants peuvent recommencer à se multiplier.",
                "La chaleur, elle, peut détruire les micro-organismes. La pasteurisation, mise au point à partir des travaux de Louis Pasteur, chauffe l'aliment en dessous de 100 °C (par exemple 72 °C pendant 15 secondes pour le lait) : elle détruit la plupart des micro-organismes pathogènes, mais l'aliment doit être conservé au froid. La stérilisation, au-delà de 100 °C, détruit tous les micro-organismes : un aliment stérilisé, comme une conserve, se garde à température ambiante tant qu'il n'est pas ouvert.",
              ],
            },
          ],
          keyPoints: [
            "Le lavage des mains (savon, au moins 30 secondes, ou solution hydroalcoolique) limite la contamination.",
            "Asepsie : empêcher l'apport de micro-organismes (matériel stérile, gants, masques).",
            "Antisepsie : détruire les micro-organismes sur un tissu vivant avec un antiseptique (alcool à 70°, chlorhexidine).",
            "Un désinfectant, comme l'eau de Javel, est réservé aux objets et aux surfaces.",
            "Le froid ralentit la multiplication des micro-organismes ; la pasteurisation et la stérilisation les détruisent.",
          ],
          example: {
            statement: "Une infirmière désinfecte la peau d'un patient avec de l'alcool à 70° avant une prise de sang, puis utilise une aiguille stérile à usage unique. Identifiez la mesure d'antisepsie et la mesure d'asepsie.",
            solution: [
              "Je rappelle les définitions : l'antisepsie détruit les micro-organismes déjà présents sur un tissu vivant ; l'asepsie empêche l'apport de nouveaux micro-organismes.",
              "L'alcool à 70° appliqué sur la peau détruit les micro-organismes présents sur ce tissu vivant : c'est de l'antisepsie.",
              "L'aiguille stérile n'apporte aucun micro-organisme : c'est de l'asepsie.",
              "Conclusion : désinfecter la peau relève de l'antisepsie, utiliser une aiguille stérile relève de l'asepsie. Les deux se complètent pour éviter la contamination.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque action dans l'asepsie ou dans l'antisepsie : a) stériliser les instruments de chirurgie dans un autoclave ; b) appliquer de la chlorhexidine sur une écorchure ; c) porter des gants stériles pendant une opération ; d) frotter la peau avec de l'alcool à 70° avant une injection.",
              hint: "Demandez-vous si l'action empêche les micro-organismes d'arriver, ou si elle détruit ceux qui sont déjà sur la peau.",
              solution: [
                "a) Les instruments stériles n'apportent pas de micro-organismes : asepsie.",
                "b) La chlorhexidine détruit les micro-organismes sur une plaie : antisepsie.",
                "c) Les gants stériles empêchent l'apport de micro-organismes : asepsie.",
                "d) L'alcool détruit les micro-organismes présents sur la peau : antisepsie.",
              ],
            },
            {
              level: 2,
              statement: "Valeurs choisies pour l'exercice : dans un plat, une espèce de bactérie se divise toutes les 30 minutes à température ambiante, mais seulement toutes les 10 heures au réfrigérateur. Un plat contient 10 bactéries. 1. Combien y en aura-t-il au bout de 10 heures à température ambiante ? 2. Et au bout de 10 heures au réfrigérateur ? 3. Que concluez-vous sur le rôle du réfrigérateur ?",
              hint: "Comptez d'abord le nombre de divisions en 10 heures dans chaque cas.",
              solution: [
                "1. À température ambiante : 10 heures = 600 minutes ; 600 ÷ 30 = 20 divisions.",
                "2²⁰ = 1 048 576, donc 10 × 1 048 576 = 10 485 760 bactéries, soit plus de 10 millions.",
                "2. Au réfrigérateur : 1 seule division en 10 heures, donc 10 × 2 = 20 bactéries.",
                "3. Le froid ne tue pas les bactéries (il y en a toujours au moins 10), mais il ralentit énormément leur multiplication.",
                "Conclusion : plus de 10 millions de bactéries à température ambiante contre 20 au réfrigérateur ; le froid permet de conserver les aliments plus longtemps.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. On veut tester l'efficacité de différents moyens de lavage des mains. On dispose de boîtes de Petri contenant un milieu nutritif stérile, que l'on place ensuite 48 heures à 37 °C ; chaque bactérie déposée forme une colonie visible. 1. Proposez un protocole pour comparer : mains non lavées, mains lavées à l'eau seule, mains lavées au savon pendant 30 secondes, mains frottées avec une solution hydroalcoolique. 2. Résultats : boîte des mains non lavées, très nombreuses colonies ; eau seule, nombreuses colonies ; savon, peu de colonies ; solution hydroalcoolique, très peu de colonies. Interprétez. 3. Pourquoi faut-il une boîte qui n'a été touchée par aucune main ?",
              hint: "Un bon protocole ne fait varier qu'un seul paramètre à la fois et comporte un témoin.",
              solution: [
                "1. On prépare cinq boîtes identiques. Sur quatre d'entre elles, on pose le bout des doigts de la même main, de la même façon et pendant la même durée, après chacun des quatre traitements (non lavées, eau seule, savon 30 secondes, solution hydroalcoolique). La cinquième boîte n'est pas touchée. On place toutes les boîtes 48 heures à 37 °C, puis on compte les colonies.",
                "Seul le mode de lavage varie : toutes les autres conditions (milieu, température, durée, contact) sont identiques.",
                "2. Plus il y a de colonies, plus les doigts portaient de bactéries. Les mains non lavées en portent beaucoup ; l'eau seule en élimine peu ; le savon en élimine beaucoup ; la solution hydroalcoolique est la plus efficace dans cette expérience.",
                "3. La boîte non touchée est un témoin : si aucune colonie n'y pousse, on est sûr que le milieu était stérile et que les colonies des autres boîtes viennent bien des doigts.",
                "Conclusion : le lavage au savon et la solution hydroalcoolique réduisent fortement le nombre de bactéries sur les mains, ce qui limite la contamination.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Asepsie", right: "Empêcher l'apport de micro-organismes (matériel stérile, gants)" },
              { left: "Antisepsie", right: "Détruire les micro-organismes présents sur un tissu vivant" },
              { left: "Antiseptique", right: "Produit pour la peau et les plaies, comme l'alcool à 70°" },
              { left: "Désinfectant", right: "Produit pour les objets et les surfaces, comme l'eau de Javel" },
              { left: "Stérilisation", right: "Destruction de tous les micro-organismes, au-delà de 100 °C" },
              { left: "Réfrigération", right: "Ralentit la multiplication des micro-organismes sans les tuer" },
            ],
          },
          quiz: [
            {
              q: "Combien de temps faut-il au minimum se laver les mains au savon ?",
              options: ["5 secondes", "30 secondes", "10 minutes", "Le temps de les mouiller"],
              answer: 1,
              why: "Un lavage d'au moins 30 secondes, en frottant toutes les parties des mains, élimine efficacement les micro-organismes.",
            },
            {
              q: "Porter des gants stériles pendant une opération relève :",
              options: ["De l'antisepsie", "De la vaccination", "De l'asepsie", "De la pasteurisation"],
              answer: 2,
              why: "Les gants stériles empêchent l'apport de micro-organismes : c'est une mesure d'asepsie.",
            },
            {
              q: "Lequel de ces produits est un désinfectant, à ne pas appliquer sur la peau ?",
              options: ["L'alcool à 70°", "La chlorhexidine", "Un produit iodé pour les plaies", "L'eau de Javel"],
              answer: 3,
              why: "L'eau de Javel est un désinfectant pour les objets et les surfaces ; les trois autres sont des antiseptiques.",
            },
            {
              q: "Que fait le réfrigérateur aux bactéries d'un aliment ?",
              options: ["Il ralentit leur multiplication", "Il les tue toutes", "Il les rend plus nombreuses", "Il les transforme en virus"],
              answer: 0,
              why: "Le froid ralentit la multiplication des bactéries sans les tuer : l'aliment se garde plus longtemps, mais pas indéfiniment.",
            },
            {
              q: "Pourquoi une conserve stérilisée se garde-t-elle à température ambiante ?",
              options: ["Parce qu'elle contient du sucre", "Parce que tous ses micro-organismes ont été détruits", "Parce que le métal tue les microbes", "Parce qu'elle a été congelée"],
              answer: 1,
              why: "La stérilisation, au-delà de 100 °C, détruit tous les micro-organismes, et la boîte fermée empêche d'en apporter de nouveaux.",
            },
          ],
          trap: "Confondre asepsie et antisepsie, ou croire que le réfrigérateur tue les microbes. L'asepsie empêche l'arrivée des micro-organismes, l'antisepsie détruit ceux qui sont présents ; le froid ralentit seulement leur multiplication.",
          method: "Pour retenir la différence, associez « a- » privatif à asepsie (sans apport de microbes) et « anti- » à antisepsie (contre les microbes déjà là). Pour un protocole, vérifiez toujours : un seul paramètre qui varie et un témoin.",
        },
      ],
    },
  ],
}
