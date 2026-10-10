import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-tle',
  chapters: [
    /* ==================================================================== */
    /* L'ORIGINE DU GÉNOTYPE DES INDIVIDUS                                    */
    /* ==================================================================== */
    {
      id: 'origine-du-genotype',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'conservation-des-genomes',
          title: 'La conservation des génomes : mitose et clones',
          minutes: 30,
          objectives: [
            "Expliquer comment la réplication de l'ADN puis la mitose conservent l'information génétique d'une cellule à ses cellules filles.",
            "Définir un clone et montrer que les cellules d'un clone peuvent accumuler des mutations qui les rendent différentes.",
            "Relier la reproduction asexuée, chez les bactéries comme chez les plantes, à la formation de clones.",
            "Exploiter des données quantitatives sur la quantité d'ADN par cellule au cours du cycle cellulaire.",
          ],
          course: [
            {
              heading: "Le cycle cellulaire : copier puis partager",
              paragraphs: [
                "Une cellule eucaryote qui se divise passe par un cycle cellulaire formé de deux grandes périodes : l'interphase et la mitose. Pendant l'interphase, la cellule grandit et, au cours de la phase S (synthèse), elle réplique son ADN. Chaque molécule d'ADN est copiée selon le mode semi-conservatif : les deux brins se séparent et chacun sert de modèle pour fabriquer un brin complémentaire, en respectant l'appariement A avec T et C avec G. On obtient deux molécules identiques, chacune formée d'un brin ancien et d'un brin nouveau.",
                "Après la phase S, chaque chromosome est formé de deux chromatides sœurs identiques, reliées par le centromère. Si l'on note Q la quantité d'ADN d'une cellule en début d'interphase, elle passe à 2Q à la fin de la phase S, puis revient à Q dans chaque cellule fille après la mitose.",
              ],
              box: { label: "Définition", text: "La réplication semi-conservative est la copie d'une molécule d'ADN dans laquelle chaque brin parental sert de modèle : chacune des deux molécules filles conserve un brin parental et possède un brin nouvellement synthétisé." },
            },
            {
              heading: "La mitose : une répartition égale des chromatides",
              paragraphs: [
                "La mitose est la division d'une cellule en deux cellules filles. On la découpe en quatre phases. En prophase, les chromosomes à deux chromatides se condensent et deviennent visibles, l'enveloppe du noyau disparaît et le fuseau de division se met en place. En métaphase, les chromosomes s'alignent au centre de la cellule et forment la plaque équatoriale. En anaphase, les centromères se séparent et les deux chromatides de chaque chromosome migrent chacune vers un pôle opposé. En télophase, deux noyaux se reforment et le cytoplasme se divise (cytodiérèse).",
                "Chez l'être humain (2n = 46), une cellule qui entre en mitose possède 46 chromosomes à deux chromatides, soit 92 chromatides. Chaque cellule fille reçoit 46 chromosomes à une chromatide. Le nombre de chromosomes est donc conservé, et chaque cellule fille reçoit une copie de chaque molécule d'ADN de la cellule mère.",
              ],
              box: { label: "À retenir", text: "Réplication puis mitose : les deux cellules filles reçoivent la même information génétique que la cellule mère, avec le même nombre de chromosomes. La mitose est une division conforme." },
            },
            {
              heading: "Les clones et leur évolution",
              paragraphs: [
                "Un clone est l'ensemble des cellules issues d'une cellule initiale par des mitoses successives. Un organisme pluricellulaire comme le vôtre est ainsi issu d'une cellule unique, la cellule œuf, et toutes ses cellules forment un clone. La reproduction asexuée produit aussi des clones : une bactérie qui se divise par scission donne une colonie de cellules apparentées, et un fraisier qui émet des stolons forme de nouveaux plants génétiquement semblables à lui.",
                "Pourtant, les cellules d'un clone ne sont pas parfaitement identiques. La réplication commet de rares erreurs non corrigées, et des agents mutagènes (rayons ultraviolets, certaines substances chimiques) endommagent l'ADN. Une mutation apparue dans une cellule est transmise à toutes ses descendantes : il se forme alors un sous-clone. Un organisme est donc une mosaïque de sous-clones. Un grain de beauté, ou une tumeur, correspond par exemple à un ensemble de cellules issues d'une même cellule qui portait des mutations.",
                "Chez les bactéries, le nombre de divisions est si grand que des mutations apparaissent à chaque génération dans la population. C'est l'une des sources de la diversité génétique des bactéries, par exemple de l'apparition de souches résistantes à un antibiotique.",
              ],
              box: { label: "Définition", text: "Un clone est un ensemble de cellules issues d'une même cellule initiale par mitoses successives. Les mutations survenues au cours de ces divisions créent des sous-clones : les cellules d'un clone ne sont pas toujours génétiquement identiques." },
            },
            {
              heading: "Mutations somatiques et mutations germinales",
              paragraphs: [
                "Une mutation qui touche une cellule somatique (une cellule du corps qui ne produit pas de gamètes) n'est transmise qu'aux cellules du sous-clone correspondant, dans l'individu : elle n'est pas héritée par ses descendants. En revanche, une mutation qui touche une cellule de la lignée germinale peut se retrouver dans un gamète, puis dans la cellule œuf, et donc dans toutes les cellules d'un enfant.",
                "Cette distinction est essentielle : les mutations somatiques expliquent par exemple l'apparition de cancers au cours de la vie, alors que seules les mutations germinales participent à la diversité génétique transmise d'une génération à l'autre.",
              ],
            },
          ],
          keyPoints: [
            "Pendant la phase S de l'interphase, l'ADN est répliqué de façon semi-conservative : la quantité d'ADN passe de Q à 2Q.",
            "La mitose (prophase, métaphase, anaphase, télophase) sépare les chromatides sœurs : chaque cellule fille reçoit la même information génétique.",
            "Un clone est l'ensemble des cellules issues d'une cellule initiale par mitoses successives.",
            "Les mutations survenues pendant les divisions créent des sous-clones : un organisme est une mosaïque de sous-clones.",
            "Une mutation somatique n'est pas transmise à la descendance ; une mutation germinale peut l'être.",
          ],
          example: {
            statement: "Une cellule humaine (2n = 46) contient Q = 6,6 pg d'ADN en début d'interphase. Indiquez, pour cette cellule en métaphase de mitose puis pour chaque cellule fille en fin de télophase, le nombre de chromosomes, le nombre de chromatides et la quantité d'ADN.",
            solution: [
              "Pendant la phase S, l'ADN est répliqué : chaque chromosome passe d'une à deux chromatides et la quantité d'ADN double.",
              "En métaphase, la cellule possède donc 46 chromosomes à deux chromatides, soit 46 × 2 = 92 chromatides, et 2Q = 2 × 6,6 = 13,2 pg d'ADN.",
              "En anaphase, les chromatides sœurs se séparent et migrent vers les pôles opposés.",
              "En fin de télophase, chaque cellule fille possède 46 chromosomes à une chromatide, soit 46 chromatides, et Q = 6,6 pg d'ADN.",
              "Conclusion : la mitose conserve le nombre de chromosomes (46) et l'information génétique ; seule la quantité d'ADN par cellule varie au cours du cycle, entre Q et 2Q.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Chez le chat, 2n = 38. Donnez le nombre de chromosomes et de chromatides d'une cellule en prophase de mitose, puis d'une cellule fille juste après la mitose.",
              hint: "En prophase, la réplication a déjà eu lieu : chaque chromosome compte deux chromatides.",
              solution: [
                "En prophase, la cellule possède 38 chromosomes, chacun formé de deux chromatides puisque l'ADN a été répliqué en phase S.",
                "Elle compte donc 38 × 2 = 76 chromatides.",
                "Après la mitose, chaque cellule fille possède 38 chromosomes à une chromatide, soit 38 chromatides.",
                "Résultat : prophase, 38 chromosomes et 76 chromatides ; cellule fille, 38 chromosomes et 38 chromatides.",
              ],
            },
            {
              level: 2,
              statement: "On mesure la quantité d'ADN par cellule dans une culture de cellules qui se divisent. À t = 0 h, la quantité vaut 10 unités arbitraires (u.a.). Entre t = 8 h et t = 14 h, elle augmente régulièrement jusqu'à 20 u.a. Elle reste à 20 u.a. jusqu'à t = 18 h, puis chute brutalement à 10 u.a. Identifiez les étapes du cycle cellulaire et expliquez chaque variation.",
              hint: "Associez une augmentation progressive à une synthèse, et une division par deux brutale à un partage.",
              solution: [
                "De 0 h à 8 h, la quantité reste à 10 u.a. : la cellule est en début d'interphase (phase G1), l'ADN n'est pas encore répliqué et chaque chromosome a une chromatide.",
                "De 8 h à 14 h, la quantité double progressivement de 10 à 20 u.a. : c'est la phase S, pendant laquelle l'ADN est répliqué de façon semi-conservative.",
                "De 14 h à 18 h, la quantité reste à 20 u.a. : fin d'interphase (phase G2) puis début de mitose ; les chromosomes ont deux chromatides.",
                "À 18 h, la quantité chute à 10 u.a. : en anaphase et télophase, les chromatides sœurs sont réparties entre deux cellules filles, chacune recevant la moitié de l'ADN.",
                "Conclusion : le cycle associe une duplication (phase S) et un partage égal (mitose), ce qui conserve l'information génétique d'une génération de cellules à la suivante.",
              ],
            },
            {
              level: 3,
              statement: "Une bactérie Escherichia coli placée dans un milieu favorable se divise toutes les 20 minutes. On part d'une seule bactérie. (1) Combien de bactéries obtient-on au bout de 10 heures, en supposant que toutes se divisent ? (2) Pour produire N cellules à partir d'une seule, il faut N - 1 divisions. Pour un gène donné, la probabilité qu'une mutation l'atteigne lors d'une division est d'environ 10⁻⁸ (une chance sur cent millions). Estimez le nombre de mutations de ce gène apparues dans la colonie. (3) Que pouvez-vous en conclure sur la notion de clone ?",
              hint: "Calculez d'abord le nombre de générations en 10 heures, puis utilisez 2 puissance ce nombre.",
              solution: [
                "(1) En 10 heures, il y a 10 × 60 ÷ 20 = 30 générations. Le nombre de bactéries double à chaque génération : N = 2³⁰ = 1 073 741 824, soit environ 1,07 × 10⁹ bactéries.",
                "(2) Le nombre de divisions est N - 1, soit environ 1,07 × 10⁹. Le nombre attendu de mutations de ce gène vaut 1,07 × 10⁹ × 10⁻⁸ ≈ 10,7, soit une dizaine de mutations.",
                "Chaque mutation est transmise à toutes les descendantes de la cellule mutée : la colonie contient donc une dizaine de sous-clones mutés pour ce seul gène, et bien davantage si l'on considère tous les gènes de la bactérie.",
                "(3) Une colonie issue d'une seule bactérie est un clone, mais ses cellules ne sont pas toutes génétiquement identiques : les mutations créent une diversité génétique au sein même d'un clone, sur laquelle la sélection peut agir (par exemple en présence d'un antibiotique).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui conduisent d'une cellule à deux cellules filles identiques.",
            items: [
              "Phase S : réplication semi-conservative de l'ADN, chaque chromosome passe à deux chromatides",
              "Prophase : condensation des chromosomes et disparition de l'enveloppe nucléaire",
              "Métaphase : alignement des chromosomes sur la plaque équatoriale",
              "Anaphase : séparation des chromatides sœurs vers les pôles opposés",
              "Télophase : reformation de deux noyaux et division du cytoplasme",
            ],
          },
          quiz: [
            {
              q: "Lors de la réplication semi-conservative, chaque molécule d'ADN fille est formée :",
              options: ["de deux brins nouveaux", "de deux brins anciens", "d'un brin ancien et d'un brin nouveau", "de fragments mélangés au hasard"],
              answer: 2,
              why: "Chaque brin parental sert de modèle et reste associé au brin qu'il a permis de synthétiser : une molécule fille conserve donc un brin ancien.",
            },
            {
              q: "Au cours de quelle phase de la mitose les chromatides sœurs se séparent-elles ?",
              options: ["L'anaphase", "La prophase", "La métaphase", "La télophase"],
              answer: 0,
              why: "En anaphase, les centromères se séparent et les deux chromatides de chaque chromosome migrent vers des pôles opposés.",
            },
            {
              q: "Qu'est-ce qu'un clone ?",
              options: ["Des cellules qui ont exactement le même âge", "Des individus d'une même espèce", "Des cellules toutes dépourvues de mutation", "Des cellules issues d'une même cellule par mitoses"],
              answer: 3,
              why: "Un clone est défini par son origine : toutes ses cellules descendent d'une cellule initiale par mitoses successives, même si des mutations les différencient ensuite.",
            },
            {
              q: "Une mutation survient dans une cellule de la peau d'un adulte. Que peut-on affirmer ?",
              options: ["Elle sera transmise à ses enfants", "Elle est transmise aux cellules issues de cette cellule", "Elle disparaît à la mitose suivante", "Elle touche toutes les cellules du corps"],
              answer: 1,
              why: "C'est une mutation somatique : elle est recopiée dans toutes les cellules qui descendent de la cellule mutée (un sous-clone), mais elle n'atteint pas les gamètes.",
            },
            {
              q: "Une cellule contient 12 pg d'ADN en métaphase de mitose. Combien chaque cellule fille en contient-elle ?",
              options: ["24 pg", "12 pg", "6 pg", "3 pg"],
              answer: 2,
              why: "En métaphase, l'ADN est déjà répliqué (2Q = 12 pg) ; la mitose partage les chromatides, donc chaque cellule fille reçoit Q = 6 pg.",
            },
          ],
          trap: "Confondre chromosome et chromatide : un chromosome à deux chromatides reste UN chromosome. Une cellule humaine en métaphase a 46 chromosomes (et 92 chromatides), pas 92 chromosomes.",
          method: "Pour toute question de quantité d'ADN, tracez une petite frise du cycle (G1, S, G2, mitose) et notez sous chaque étape le nombre de chromosomes, le nombre de chromatides et la quantité d'ADN (Q ou 2Q) : les erreurs sautent aux yeux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'brassage-meiose-fecondation',
          title: 'Brassages génétiques : méiose et fécondation',
          minutes: 35,
          objectives: [
            "Décrire la méiose comme une succession de deux divisions qui produit des cellules haploïdes à partir d'une cellule diploïde.",
            "Expliquer le brassage interchromosomique et le brassage intrachromosomique, et leur contribution à la diversité des gamètes.",
            "Expliquer comment la fécondation amplifie le brassage et rétablit la diploïdie.",
            "Relier des anomalies de la méiose (non-disjonction, crossing-over inégal) à des modifications du caryotype ou du génome.",
          ],
          course: [
            {
              heading: "La méiose : deux divisions après une seule réplication",
              paragraphs: [
                "Chez les espèces à reproduction sexuée, la méiose produit les gamètes (ou, chez les plantes, les spores). Elle débute dans une cellule diploïde (2n chromosomes, organisés en n paires de chromosomes homologues) dont l'ADN a été répliqué : chaque chromosome possède deux chromatides. Elle comprend deux divisions successives, sans nouvelle réplication entre elles.",
                "La première division est réductionnelle. En prophase I, les chromosomes homologues s'apparient étroitement (on parle de bivalents). En métaphase I, les paires se placent de part et d'autre du plan équatorial. En anaphase I, les deux chromosomes homologues de chaque paire se séparent et migrent vers des pôles opposés, chacun avec ses deux chromatides. Chaque cellule obtenue est haploïde (n chromosomes à deux chromatides).",
                "La seconde division est équationnelle et ressemble à une mitose : les chromatides sœurs se séparent. On obtient au total quatre cellules haploïdes, chacune avec n chromosomes à une chromatide. Chez l'être humain, 2n = 46 et chaque gamète possède n = 23 chromosomes.",
              ],
              box: { label: "Définition", text: "La méiose est la succession de deux divisions cellulaires, précédée d'une seule réplication, qui transforme une cellule diploïde (2n) en quatre cellules haploïdes (n). La division I sépare les chromosomes homologues, la division II sépare les chromatides sœurs." },
            },
            {
              heading: "Le brassage intrachromosomique : les crossing-over",
              paragraphs: [
                "En prophase I, lorsque les homologues sont appariés, des chromatides appartenant à deux chromosomes homologues peuvent s'enchevêtrer puis échanger des portions correspondantes : c'est le crossing-over (ou enjambement), visible au microscope sous forme de chiasmas.",
                "Si la cellule est hétérozygote pour deux gènes situés sur le même chromosome (par exemple A//a et B//b avec les allèles A et B sur un homologue, a et b sur l'autre), un crossing-over survenu entre ces deux gènes produit des chromatides recombinées portant de nouvelles associations d'allèles (A et b, ou a et B). Ce brassage intrachromosomique crée des combinaisons alléliques qui n'existaient pas chez le parent.",
              ],
              box: { label: "À retenir", text: "Brassage intrachromosomique : en prophase I, les crossing-over échangent des segments entre chromatides de chromosomes homologues et créent de nouvelles associations d'allèles sur un même chromosome." },
            },
            {
              heading: "Le brassage interchromosomique : le hasard de l'anaphase I",
              paragraphs: [
                "En métaphase I, l'orientation de chaque paire d'homologues par rapport aux pôles se fait au hasard, et indépendamment des autres paires. En anaphase I, le chromosome d'origine paternelle d'une paire peut donc partir vers le même pôle que le chromosome d'origine maternelle d'une autre paire. Ce brassage interchromosomique combine au hasard les allèles de gènes situés sur des chromosomes différents.",
                "Avec n paires de chromosomes, le nombre de combinaisons possibles est 2ⁿ. Pour un individu de génotype (A//a ; B//b), avec deux gènes sur deux paires différentes, il produit quatre types de gamètes en proportions égales : AB, Ab, aB et ab, chacun à 1/4. Chez l'être humain, n = 23 donne 2²³, soit environ 8,4 millions de combinaisons, sans même compter les crossing-over.",
              ],
              box: { label: "Formule", text: "Nombre de combinaisons de chromosomes dans les gamètes par le seul brassage interchromosomique : 2ⁿ, où n est le nombre de paires de chromosomes. Pour n = 23 : 2²³ = 8 388 608." },
            },
            {
              heading: "La fécondation et les anomalies de la méiose",
              paragraphs: [
                "La fécondation réunit au hasard un gamète mâle et un gamète femelle : la cellule œuf retrouve 2n chromosomes. Comme chaque parent produit une immense diversité de gamètes, et que leur rencontre est aléatoire, la fécondation amplifie le brassage. Avec le seul brassage interchromosomique, un couple humain peut produire 2²³ × 2²³ ≈ 7 × 10¹³ combinaisons différentes : chaque individu est génétiquement unique (sauf les vrais jumeaux, issus d'une même cellule œuf).",
                "La méiose connaît parfois des anomalies. Une non-disjonction (les homologues en anaphase I, ou les chromatides en anaphase II, ne se séparent pas) produit des gamètes à n + 1 ou n - 1 chromosomes. La fécondation d'un gamète à 24 chromosomes portant deux chromosomes 21 donne une cellule œuf à 47 chromosomes : c'est la trisomie 21.",
                "Un crossing-over inégal, entre homologues mal alignés, peut faire qu'une chromatide reçoive deux copies d'un gène et l'autre aucune. La duplication obtenue est la source des familles multigéniques : les copies, qui évoluent ensuite indépendamment par mutations, donnent des gènes apparentés aux fonctions voisines, comme les gènes des globines chez l'être humain.",
              ],
            },
          ],
          keyPoints: [
            "La méiose : une réplication puis deux divisions, d'une cellule 2n à quatre cellules n à une chromatide.",
            "Brassage intrachromosomique : crossing-over en prophase I entre chromatides de chromosomes homologues.",
            "Brassage interchromosomique : migration aléatoire et indépendante des homologues en anaphase I, 2ⁿ combinaisons.",
            "La fécondation rétablit la diploïdie et amplifie la diversité : chaque individu est génétiquement unique.",
            "Une non-disjonction donne des gamètes à n + 1 ou n - 1 chromosomes (exemple : trisomie 21).",
            "Un crossing-over inégal provoque des duplications, origine des familles multigéniques.",
          ],
          example: {
            statement: "Un individu est hétérozygote pour deux gènes situés sur deux paires de chromosomes différentes : son génotype est (A//a ; B//b). Expliquez quels gamètes il produit, et dans quelles proportions, en précisant le mécanisme en jeu.",
            solution: [
              "Les deux gènes sont portés par deux paires de chromosomes différentes : leurs allèles sont répartis par le brassage interchromosomique.",
              "En anaphase I, chaque paire d'homologues se sépare au hasard et indépendamment de l'autre : le chromosome portant A peut partir avec celui portant B ou avec celui portant b.",
              "Les deux dispositions possibles en métaphase I sont équiprobables : la première donne des gamètes AB et ab, la seconde des gamètes Ab et aB.",
              "On obtient donc quatre types de gamètes : AB, Ab, aB et ab.",
              "Conclusion : chaque type représente 1/4 des gamètes (25 %) ; les gamètes Ab et aB portent des combinaisons nouvelles dues au brassage interchromosomique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Chez la drosophile, 2n = 8. Combien de chromosomes possède un spermatozoïde ? Combien de combinaisons chromosomiques différentes le seul brassage interchromosomique permet-il dans les gamètes ?",
              hint: "Le nombre de paires de chromosomes est n = 2n ÷ 2.",
              solution: [
                "Le gamète est haploïde : il possède n = 8 ÷ 2 = 4 chromosomes.",
                "Avec n = 4 paires, le brassage interchromosomique donne 2⁴ = 16 combinaisons.",
                "Résultat : 4 chromosomes par spermatozoïde et 16 combinaisons chromosomiques possibles.",
              ],
            },
            {
              level: 2,
              statement: "Une cellule de génotype (A B // a b), les deux gènes étant sur la même paire de chromosomes, entre en méiose. Un crossing-over se produit entre les deux gènes, entre une chromatide du chromosome A B et une chromatide du chromosome a b. Indiquez les chromatides obtenues à la fin de la prophase I, puis les quatre gamètes produits par cette cellule.",
              hint: "Faites un schéma : quatre chromatides, et l'échange ne concerne que deux d'entre elles.",
              solution: [
                "Avant le crossing-over, la paire compte quatre chromatides : A B, A B (chromosome 1) et a b, a b (chromosome 2).",
                "Le crossing-over échange les segments portant B et b entre une chromatide de chaque homologue : on obtient A b et a B.",
                "À la fin de la prophase I, le chromosome 1 porte les chromatides A B et A b, le chromosome 2 les chromatides a b et a B.",
                "Après les deux divisions, chaque gamète reçoit une chromatide : les quatre gamètes sont A B, A b, a B et a b.",
                "Conclusion : deux gamètes sont de type parental (A B et a b) et deux sont recombinés (A b et a B), grâce au brassage intrachromosomique.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Le caryotype d'un enfant présente 47 chromosomes, dont trois chromosomes 21. L'analyse de marqueurs génétiques montre que les deux chromosomes 21 surnuméraires proviennent de la mère et sont différents : l'un est hérité de la grand-mère maternelle, l'autre du grand-père maternel. Expliquez, à l'aide de vos connaissances sur la méiose, l'origine de cette anomalie et précisez à quelle division elle s'est produite.",
              hint: "Demandez-vous à quel moment de la méiose deux chromosomes homologues différents (et non deux chromatides sœurs identiques) peuvent se retrouver dans la même cellule.",
              solution: [
                "L'enfant possède 47 chromosomes : il est issu de la fécondation d'un gamète anormal à 24 chromosomes (deux chromosomes 21) par un gamète normal à 23 chromosomes.",
                "Les deux chromosomes 21 venant de la mère sont différents, l'un d'origine grand-maternelle et l'autre d'origine grand-paternelle : ce sont donc les deux homologues de la paire 21 de la mère, et non deux chromatides sœurs.",
                "Or les homologues se séparent normalement en anaphase I. Ici, ils ont migré ensemble vers le même pôle : c'est une non-disjonction en anaphase I de la méiose de la mère.",
                "Si l'anomalie avait eu lieu en anaphase II, l'ovule aurait reçu les deux chromatides sœurs d'un même chromosome, donc deux chromosomes 21 issus du même grand-parent (en dehors des segments échangés par crossing-over).",
                "Conclusion : la trisomie 21 de cet enfant résulte d'une non-disjonction de la paire 21 en première division de méiose chez la mère, suivie de la fécondation de l'ovule à 24 chromosomes par un spermatozoïde normal.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Chromosomes homologues", right: "Les deux chromosomes d'une même paire, portant les mêmes gènes" },
              { left: "Crossing-over", right: "Échange de segments entre chromatides de chromosomes homologues" },
              { left: "Brassage interchromosomique", right: "Répartition aléatoire des homologues en anaphase I" },
              { left: "Non-disjonction", right: "Absence de séparation de chromosomes ou de chromatides lors de la méiose" },
              { left: "Famille multigénique", right: "Ensemble de gènes apparentés issus de duplications" },
              { left: "Fécondation", right: "Union de deux gamètes qui rétablit la diploïdie" },
            ],
          },
          quiz: [
            {
              q: "À quel moment de la méiose les chromosomes homologues se séparent-ils ?",
              options: ["En prophase I", "En anaphase I", "En anaphase II", "En télophase II"],
              answer: 1,
              why: "La division I est réductionnelle : en anaphase I, les deux homologues de chaque paire migrent vers des pôles opposés. L'anaphase II sépare les chromatides sœurs.",
            },
            {
              q: "Combien de combinaisons chromosomiques le brassage interchromosomique permet-il chez une espèce où 2n = 6 ?",
              options: ["6", "3", "64", "8"],
              answer: 3,
              why: "Il y a n = 3 paires de chromosomes, donc 2³ = 8 combinaisons.",
            },
            {
              q: "Le brassage intrachromosomique est dû :",
              options: ["aux crossing-over de prophase I", "à la réplication de l'ADN", "à la séparation des chromatides en anaphase II", "à la fécondation"],
              answer: 0,
              why: "Les crossing-over entre chromatides de chromosomes homologues, en prophase I, créent de nouvelles associations d'allèles sur un même chromosome.",
            },
            {
              q: "Quelle est l'origine des familles multigéniques ?",
              options: ["Une non-disjonction en anaphase II", "Une fécondation par deux spermatozoïdes", "Des duplications de gènes suivies de mutations", "Le brassage interchromosomique"],
              answer: 2,
              why: "Un crossing-over inégal duplique un gène ; les copies accumulent ensuite des mutations différentes et forment une famille de gènes apparentés.",
            },
            {
              q: "Un gamète humain normal contient :",
              options: ["46 chromosomes à une chromatide", "23 chromosomes à une chromatide", "23 chromosomes à deux chromatides", "46 chromosomes à deux chromatides"],
              answer: 1,
              why: "À la fin de la méiose, après la séparation des homologues puis des chromatides, chaque gamète possède n = 23 chromosomes à une chromatide.",
            },
          ],
          trap: "Confondre les deux brassages : le brassage interchromosomique concerne des gènes situés sur des chromosomes différents (anaphase I), le brassage intrachromosomique concerne des gènes situés sur un même chromosome (crossing-over en prophase I).",
          method: "Pour expliquer un brassage, faites toujours un schéma de la cellule avec deux paires de chromosomes au maximum, en coloriant différemment les chromosomes d'origine paternelle et maternelle, et indiquez les allèles sur chaque chromatide : un bon schéma légendé vaut une longue explication au bac.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'analyse-de-croisements',
          title: 'Analyser des croisements et des arbres généalogiques',
          minutes: 35,
          objectives: [
            "Interpréter les résultats d'un croisement entre lignées pures et d'un croisement-test.",
            "Déterminer si deux gènes sont indépendants ou liés, et relier les phénotypes recombinés aux brassages de la méiose.",
            "Analyser un arbre généalogique pour déterminer le mode de transmission d'un caractère et calculer un risque.",
            "Comprendre l'apport du séquençage et des études d'association pour relier génotypes et phénotypes chez l'être humain.",
          ],
          course: [
            {
              heading: "Le vocabulaire et les notations",
              paragraphs: [
                "Un gène peut exister sous plusieurs versions, les allèles. Un individu diploïde possède deux allèles de chaque gène, un sur chaque chromosome homologue : il est homozygote s'ils sont identiques, hétérozygote s'ils diffèrent. Le phénotype (ce qui est observé) s'écrit entre crochets, par exemple [vg+] pour des ailes longues, et le génotype entre parenthèses avec une double barre figurant la paire d'homologues, par exemple (vg+//vg).",
                "Chez un hétérozygote, l'allèle qui s'exprime dans le phénotype est dit dominant, l'autre récessif. Si les deux s'expriment, ils sont codominants. Une lignée pure est formée d'individus homozygotes pour les gènes étudiés : croisés entre eux, ils donnent toujours des descendants identiques à eux.",
              ],
              box: { label: "Repère", text: "Phénotype entre crochets : [vg+]. Génotype entre parenthèses : (vg+//vg) pour un gène ; (vg+//vg ; e+//e) pour deux gènes indépendants ; (vg+ b+ // vg b) pour deux gènes liés sur la même paire de chromosomes." },
            },
            {
              heading: "Le croisement-test : lire les gamètes d'un individu",
              paragraphs: [
                "Prenons des drosophiles. On croise une lignée pure aux ailes longues [vg+] avec une lignée pure aux ailes vestigiales [vg]. Toutes les mouches de première génération (F1) ont des ailes longues : l'allèle vg+ est dominant, et les F1 sont hétérozygotes (vg+//vg).",
                "Le croisement-test consiste à croiser un individu à étudier avec un individu homozygote récessif pour tous les gènes étudiés. Ce dernier ne produit qu'un seul type de gamète, porteur des seuls allèles récessifs, qui ne masquent rien. Le phénotype de chaque descendant révèle donc directement le gamète fourni par l'individu étudié, et les proportions des phénotypes donnent les proportions de ses gamètes.",
              ],
              box: { label: "Méthode", text: "Croisement-test : individu étudié × homozygote récessif. Proportions des phénotypes des descendants = proportions des types de gamètes produits par l'individu étudié." },
            },
            {
              heading: "Deux gènes : indépendants ou liés ?",
              paragraphs: [
                "Si deux gènes sont portés par deux paires de chromosomes différentes (gènes indépendants), une femelle F1 double hétérozygote (vg+//vg ; e+//e) produit, par brassage interchromosomique, quatre types de gamètes équiprobables. Le croisement-test donne alors quatre phénotypes en proportions égales, 25 % chacun : deux phénotypes parentaux et deux recombinés.",
                "Si les deux gènes sont sur la même paire de chromosomes (gènes liés), par exemple vg et b (corps noir) chez la drosophile, le croisement-test d'une femelle F1 (vg+ b+ // vg b) donne aussi quatre phénotypes, mais les phénotypes parentaux sont majoritaires et les phénotypes recombinés minoritaires (nettement moins de 50 % au total). Les recombinés proviennent de gamètes formés après un crossing-over entre les deux gènes : c'est le brassage intrachromosomique. Plus deux gènes sont éloignés sur le chromosome, plus les crossing-over entre eux sont fréquents, et plus le pourcentage de recombinés est élevé.",
                "Chez la drosophile, le mâle ne fait pas de crossing-over : c'est pourquoi le croisement-test de référence utilise une femelle F1.",
              ],
              box: { label: "Règle", text: "Quatre phénotypes à 25 % : gènes indépendants (brassage interchromosomique). Phénotypes parentaux majoritaires et recombinés minoritaires : gènes liés, recombinés dus aux crossing-over (brassage intrachromosomique)." },
            },
            {
              heading: "Chez l'être humain : arbres généalogiques et séquençage",
              paragraphs: [
                "On ne réalise pas de croisements chez l'être humain : on étudie des arbres généalogiques. Si deux parents non atteints ont un enfant atteint, l'allèle responsable est récessif (les parents sont hétérozygotes, porteurs sains). Si une fille atteinte a un père non atteint, l'allèle récessif n'est pas porté par le chromosome X : il est autosomique. Pour une maladie autosomique récessive comme la mucoviscidose, deux parents hétérozygotes ont, à chaque naissance, une probabilité de 1/4 d'avoir un enfant atteint.",
                "Le séquençage de l'ADN permet aujourd'hui de lire directement les allèles d'une personne. En comparant les génomes de très nombreuses personnes atteintes ou non d'une maladie, les études d'association repèrent des allèles statistiquement plus fréquents chez les malades. Ces allèles ne sont en général pas une cause unique : pour beaucoup de caractères, de nombreux gènes et l'environnement interviennent, et l'on parle alors de facteurs de risque.",
              ],
            },
          ],
          keyPoints: [
            "Le croisement-test (individu × homozygote récessif) révèle les gamètes de l'individu étudié et leurs proportions.",
            "Quatre phénotypes à 25 % chacun au croisement-test : gènes indépendants.",
            "Parentaux majoritaires et recombinés minoritaires : gènes liés, les recombinés venant de crossing-over.",
            "Deux parents sains ayant un enfant atteint : l'allèle responsable est récessif.",
            "Deux parents hétérozygotes pour un allèle récessif : probabilité de 1/4 d'avoir un enfant atteint.",
            "Le séquençage et les études d'association relient des allèles à des phénotypes ou à des risques.",
          ],
          example: {
            statement: "On croise une femelle F1 de drosophile aux ailes longues et au corps clair, de génotype (vg+//vg ; e+//e), avec un mâle aux ailes vestigiales et au corps ébène [vg, e]. On obtient 252 [vg+, e+], 248 [vg, e], 247 [vg+, e] et 253 [vg, e+]. Les gènes sont-ils liés ou indépendants ? Justifiez.",
            solution: [
              "Le mâle [vg, e] est homozygote récessif (vg//vg ; e//e) : il ne produit que des gamètes (vg ; e). Il s'agit d'un croisement-test.",
              "Le phénotype de chaque descendant reflète donc le gamète fourni par la femelle F1.",
              "Le total est de 252 + 248 + 247 + 253 = 1 000 descendants. Chaque phénotype représente environ 25 % (de 24,7 % à 25,3 %).",
              "La femelle a donc produit quatre types de gamètes équiprobables : (vg+ ; e+), (vg ; e), (vg+ ; e) et (vg ; e+).",
              "Ces proportions égales s'expliquent par la migration aléatoire et indépendante des chromosomes homologues en anaphase I.",
              "Conclusion : les gènes vg et e sont indépendants, portés par deux paires de chromosomes différentes ; les phénotypes recombinés [vg+, e] et [vg, e+] résultent du brassage interchromosomique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On croise une lignée pure de drosophiles aux ailes longues avec une lignée pure aux ailes vestigiales. Toutes les F1 ont des ailes longues. On réalise ensuite un croisement-test entre une F1 et une mouche aux ailes vestigiales. Quel allèle est dominant ? Quel est le génotype des F1 ? Quels résultats attend-on au croisement-test ?",
              hint: "L'allèle qui s'exprime chez l'hétérozygote est dominant.",
              solution: [
                "Les F1 ont reçu un allèle vg+ d'un parent et un allèle vg de l'autre, et elles ont des ailes longues : l'allèle vg+ (ailes longues) est dominant, l'allèle vg (vestigiales) est récessif.",
                "Le génotype des F1 est (vg+//vg).",
                "La F1 produit deux types de gamètes équiprobables, vg+ et vg ; la mouche vestigiale ne produit que des gamètes vg.",
                "Résultat attendu : 50 % de descendants (vg+//vg) aux ailes longues et 50 % de descendants (vg//vg) aux ailes vestigiales.",
              ],
            },
            {
              level: 2,
              statement: "Une femelle F1 de génotype (vg+ b+ // vg b) est croisée avec un mâle (vg b // vg b) aux ailes vestigiales et au corps noir. On obtient 413 [vg+, b+], 407 [vg, b], 92 [vg+, b] et 88 [vg, b+]. Analysez ces résultats et expliquez l'origine des phénotypes minoritaires.",
              hint: "Repérez les phénotypes parentaux et calculez le pourcentage de recombinés.",
              solution: [
                "Le mâle, homozygote récessif, ne produit que des gamètes (vg b) : c'est un croisement-test, et les phénotypes reflètent les gamètes de la femelle.",
                "Total : 413 + 407 + 92 + 88 = 1 000. Les phénotypes parentaux [vg+, b+] et [vg, b] représentent 820 descendants, soit 82 %.",
                "Les phénotypes recombinés [vg+, b] et [vg, b+] représentent 92 + 88 = 180 descendants, soit 18 %, bien moins que les 50 % attendus pour des gènes indépendants.",
                "Les gènes vg et b sont donc liés, portés par la même paire de chromosomes.",
                "Les gamètes recombinés (vg+ b) et (vg b+) se sont formés lorsqu'un crossing-over a eu lieu entre les deux gènes, en prophase I de la méiose de la femelle.",
                "Conclusion : 82 % de parentaux et 18 % de recombinés, gènes liés, recombinés dus au brassage intrachromosomique.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Un couple non atteint, Paul et Léa, a deux enfants : Inès, atteinte de mucoviscidose, et Hugo, non atteint. (1) Montrez que l'allèle responsable est récessif et qu'il n'est pas porté par le chromosome X. (2) Calculez la probabilité qu'Hugo soit hétérozygote. (3) Hugo a un enfant avec une personne non apparentée ; dans la population, une personne sur 25 est hétérozygote. Calculez la probabilité que cet enfant soit atteint.",
              hint: "Pour la question 2, Hugo n'est pas atteint : éliminez le cas homozygote récessif avant de calculer.",
              solution: [
                "(1) Paul et Léa ne sont pas atteints mais ont une fille atteinte : ils portent l'allèle de la maladie sans l'exprimer, il est donc récessif. Si l'allèle était porté par le chromosome X, Inès, atteinte, aurait deux X porteurs de l'allèle, dont celui de son père, qui serait alors atteint. Paul n'étant pas atteint, l'allèle est autosomique.",
                "Les deux parents sont donc hétérozygotes (N//m), N étant l'allèle normal dominant et m l'allèle muté.",
                "(2) Pour un enfant de deux hétérozygotes, les génotypes possibles sont N//N (1/4), N//m (2/4) et m//m (1/4). Hugo n'est pas atteint, donc il n'est pas m//m : parmi les 3/4 restants, la probabilité qu'il soit hétérozygote est (2/4) ÷ (3/4) = 2/3.",
                "(3) L'enfant est atteint seulement si les deux parents sont hétérozygotes et transmettent chacun l'allèle m : P = 2/3 × 1/25 × 1/4.",
                "Calcul : 2/3 × 1/25 = 2/75, puis 2/75 × 1/4 = 2/300 = 1/150.",
                "Conclusion : allèle récessif autosomique ; Hugo est hétérozygote avec une probabilité de 2/3 ; son enfant a une probabilité de 1/150 (environ 0,67 %) d'être atteint.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre lecture des croisements.",
            statements: [
              { text: "Dans un croisement-test, l'individu testé est croisé avec un homozygote récessif.", true: true, why: "Ses gamètes ne portent que des allèles récessifs, qui laissent s'exprimer ceux de l'individu étudié." },
              { text: "Si un croisement-test donne des phénotypes recombinés, les gènes sont forcément indépendants.", true: false, why: "Des gènes liés donnent aussi des recombinés, grâce aux crossing-over, mais en proportion minoritaire." },
              { text: "Quatre phénotypes à 25 % au croisement-test indiquent deux gènes indépendants.", true: true, why: "C'est le résultat du brassage interchromosomique, qui forme quatre types de gamètes équiprobables." },
              { text: "Plus deux gènes liés sont proches, plus le pourcentage de recombinés est élevé.", true: false, why: "C'est l'inverse : des gènes proches sont rarement séparés par un crossing-over." },
              { text: "Deux parents non atteints peuvent avoir un enfant atteint d'une maladie récessive.", true: true, why: "S'ils sont tous deux hétérozygotes, la probabilité est de 1/4 à chaque naissance." },
              { text: "Un frère non atteint d'un enfant atteint de mucoviscidose a une chance sur deux d'être porteur.", true: false, why: "Il n'est pas homozygote récessif : sa probabilité d'être hétérozygote est de 2/3, pas de 1/2." },
            ],
          },
          quiz: [
            {
              q: "Un croisement-test donne 41 % [A, B], 41 % [a, b], 9 % [A, b] et 9 % [a, B]. Que concluez-vous ?",
              options: ["Les gènes sont liés", "Les gènes sont indépendants", "L'allèle a est dominant", "Il n'y a pas eu de méiose"],
              answer: 0,
              why: "Les phénotypes parentaux sont majoritaires (82 %) et les recombinés minoritaires (18 %) : les gènes sont sur la même paire de chromosomes.",
            },
            {
              q: "Pourquoi utilise-t-on un homozygote récessif dans un croisement-test ?",
              options: ["Parce qu'il est plus fertile", "Parce qu'il fait plus de crossing-over", "Parce que ses gamètes ne masquent pas ceux de l'autre parent", "Parce qu'il transmet des allèles dominants"],
              answer: 2,
              why: "Il ne fournit que des allèles récessifs : le phénotype du descendant dépend donc uniquement du gamète de l'individu testé.",
            },
            {
              q: "Deux parents hétérozygotes (N//m) pour une maladie récessive. Probabilité d'un enfant atteint ?",
              options: ["1/2", "1/4", "3/4", "2/3"],
              answer: 1,
              why: "Chaque parent transmet m avec une probabilité de 1/2 : 1/2 × 1/2 = 1/4.",
            },
            {
              q: "Dans le croisement-test d'une femelle F1 (vg+ b+ // vg b), d'où viennent les phénotypes recombinés ?",
              options: ["De la méiose du mâle", "D'une mutation", "Du brassage interchromosomique", "D'un crossing-over chez la femelle"],
              answer: 3,
              why: "Les gènes sont liés : seuls des crossing-over entre eux, en prophase I chez la femelle, produisent les gamètes recombinés.",
            },
            {
              q: "Une fille est atteinte d'une maladie récessive, son père ne l'est pas. Que peut-on dire ?",
              options: ["L'allèle n'est pas porté par le chromosome X", "L'allèle est porté par le chromosome Y", "L'allèle est dominant", "Le père est homozygote récessif"],
              answer: 0,
              why: "Une fille reçoit un X de son père ; si l'allèle était récessif et lié à l'X, le père qui le lui a transmis serait atteint.",
            },
          ],
          trap: "Conclure « gènes indépendants » dès qu'apparaissent des phénotypes recombinés. Ce qui compte, ce sont les proportions : 25 % chacun pour des gènes indépendants, recombinés minoritaires pour des gènes liés.",
          method: "Face à un croisement, procédez toujours dans le même ordre : identifier le croisement-test, écrire les gamètes de l'homozygote récessif, calculer les pourcentages de chaque phénotype, séparer parentaux et recombinés, puis conclure sur la position des gènes et le brassage en jeu. Faites un échiquier de croisement pour vérifier.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA COMPLEXIFICATION DES GÉNOMES                                        */
    /* ==================================================================== */
    {
      id: 'complexification-genomes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'transferts-horizontaux',
          title: 'Les transferts horizontaux de gènes',
          minutes: 30,
          objectives: [
            "Distinguer transfert vertical et transfert horizontal de l'information génétique.",
            "Décrire les mécanismes de transfert horizontal chez les bactéries : transformation, conjugaison et transduction.",
            "Expliquer, à partir d'exemples, que des transferts horizontaux ont aussi enrichi les génomes des eucaryotes.",
            "Exploiter des résultats expérimentaux pour identifier un mécanisme de transfert et en mesurer les enjeux, comme la diffusion des résistances aux antibiotiques.",
          ],
          course: [
            {
              heading: "Transfert vertical et transfert horizontal",
              paragraphs: [
                "Le transfert vertical est la transmission de l'information génétique d'une génération à la suivante, par reproduction asexuée (mitoses, scission bactérienne) ou sexuée (méiose et fécondation). Les génomes peuvent aussi s'enrichir autrement : un transfert horizontal de gènes est le passage de matériel génétique d'un organisme à un autre, sans lien de descendance entre eux, parfois entre espèces très éloignées.",
                "Les transferts horizontaux complexifient les génomes : l'organisme receveur acquiert d'un coup un ou plusieurs gènes déjà fonctionnels, et parfois une nouvelle fonction. Ils sont très fréquents chez les bactéries, mais ils ont aussi marqué l'histoire des eucaryotes, y compris la nôtre.",
              ],
              box: { label: "Définition", text: "Un transfert horizontal de gènes est le transfert de matériel génétique entre deux organismes sans qu'il y ait reproduction, c'est-à-dire en dehors de la transmission des parents aux descendants." },
            },
            {
              heading: "Trois mécanismes chez les bactéries",
              paragraphs: [
                "La transformation est l'absorption par une bactérie de fragments d'ADN libres dans le milieu, libérés par exemple par des bactéries mortes, et leur intégration dans son génome. Elle a été découverte par Frederick Griffith en 1928 avec des pneumocoques : des bactéries non virulentes (souche R) mélangées à des bactéries virulentes (souche S) tuées par la chaleur devenaient virulentes. En 1944, Oswald Avery et ses collègues ont montré que le facteur transformant était l'ADN.",
                "La conjugaison est le transfert d'ADN, souvent un plasmide (petite molécule d'ADN circulaire indépendante du chromosome bactérien), d'une bactérie donneuse à une bactérie receveuse avec laquelle elle est en contact, par l'intermédiaire d'un pont cytoplasmique formé par un pilus. La transduction est le transfert d'un fragment d'ADN bactérien par un virus de bactérie (bactériophage) qui l'a emporté par erreur en sortant d'une première bactérie et l'injecte dans une autre.",
                "Ces mécanismes expliquent la diffusion rapide des résistances aux antibiotiques : un gène de résistance porté par un plasmide peut passer d'une bactérie à l'autre, y compris entre espèces différentes. C'est un enjeu majeur de santé publique.",
              ],
              box: { label: "À retenir", text: "Transformation : ADN libre absorbé. Conjugaison : plasmide transmis par contact via un pilus. Transduction : ADN transporté par un bactériophage." },
            },
            {
              heading: "Des transferts horizontaux chez les eucaryotes",
              paragraphs: [
                "La bactérie du sol Agrobacterium tumefaciens transfère naturellement un fragment d'ADN (l'ADN-T de son plasmide Ti) dans le génome des cellules végétales qu'elle infecte, ce qui provoque des tumeurs appelées galles. Des séquences issues d'un tel transfert ont été trouvées dans le génome de la patate douce cultivée : elle porte des gènes d'origine bactérienne. Les biologistes utilisent ce même mécanisme pour produire des plantes génétiquement modifiées.",
                "Chez les mammifères, les syncytines sont des gènes d'origine virale. Ils proviennent de rétrovirus dont le génome s'est intégré, il y a des millions d'années, dans celui de cellules germinales d'ancêtres, puis a été transmis à la descendance. Les protéines qu'ils codent permettent la fusion des cellules qui forment le syncytiotrophoblaste du placenta, à l'interface entre la mère et l'embryon. Une séquence étrangère a donc été « domestiquée » et participe à une fonction essentielle.",
                "Plus largement, une part notable du génome humain (de l'ordre de 8 %) est formée de séquences d'origine rétrovirale, pour la plupart devenues inactives.",
              ],
            },
            {
              heading: "Conséquences sur l'évolution",
              paragraphs: [
                "Les transferts horizontaux font que l'histoire d'un génome n'est pas seulement une succession de transmissions verticales : des gènes peuvent avoir une histoire différente de celle de l'espèce qui les porte. Lorsqu'on construit des arbres de parenté à partir de gènes différents d'une même bactérie, on obtient parfois des arbres différents. Pour les bactéries en particulier, l'histoire du vivant ressemble par endroits davantage à un réseau qu'à un arbre aux branches strictement séparées.",
              ],
            },
          ],
          keyPoints: [
            "Transfert vertical : des parents aux descendants. Transfert horizontal : entre organismes, sans reproduction.",
            "Transformation : une bactérie absorbe de l'ADN libre et l'intègre (Griffith 1928, Avery 1944).",
            "Conjugaison : transfert d'un plasmide par contact via un pilus. Transduction : transfert par un bactériophage.",
            "Les plasmides diffusent les résistances aux antibiotiques entre bactéries, même d'espèces différentes.",
            "Chez les eucaryotes : ADN-T d'Agrobacterium chez la patate douce, syncytines d'origine rétrovirale dans le placenta.",
            "Les transferts horizontaux complexifient les génomes et brouillent les arbres de parenté.",
          ],
          example: {
            statement: "On place une bactérie sensible à l'ampicilline (un antibiotique) en contact direct avec une bactérie d'une autre espèce porteuse d'un plasmide de résistance à l'ampicilline. Après quelques heures, on étale les bactéries sur un milieu contenant de l'ampicilline et on obtient des colonies de l'espèce initialement sensible. Expliquez ce résultat.",
            solution: [
              "Sur un milieu contenant de l'ampicilline, seules les bactéries résistantes survivent et forment des colonies.",
              "On obtient des colonies de l'espèce initialement sensible : certaines de ces bactéries ont acquis la résistance.",
              "La résistance est portée par un plasmide, et les bactéries ont été mises en contact direct : on peut supposer un transfert du plasmide par conjugaison, via un pilus.",
              "Ce transfert a lieu entre deux espèces différentes et sans reproduction : c'est un transfert horizontal.",
              "Conclusion : la résistance s'est transmise horizontalement, probablement par conjugaison ; ce mécanisme explique la propagation rapide des résistances aux antibiotiques.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez le mécanisme de transfert horizontal décrit dans chaque cas. (a) Un virus de bactérie emporte un fragment du chromosome d'une bactérie et l'injecte dans une autre. (b) Une bactérie absorbe un fragment d'ADN libéré par une bactérie morte. (c) Deux bactéries reliées par un pilus échangent un plasmide.",
              hint: "Repérez le support du transfert : ADN libre, contact entre cellules, ou virus.",
              solution: [
                "(a) Le transfert se fait par un virus de bactérie (bactériophage) : c'est la transduction.",
                "(b) L'ADN est libre dans le milieu et absorbé : c'est la transformation.",
                "(c) Les bactéries sont en contact et reliées par un pilus : c'est la conjugaison.",
              ],
            },
            {
              level: 2,
              statement: "Expérience de Griffith (1928). Souris 1 : injection de pneumocoques S vivants, la souris meurt. Souris 2 : pneumocoques R vivants, elle survit. Souris 3 : pneumocoques S tués par la chaleur, elle survit. Souris 4 : mélange de R vivants et de S tués par la chaleur, elle meurt, et l'on retrouve dans son sang des pneumocoques S vivants. Interprétez ces résultats.",
              hint: "Comparez les souris 3 et 4 : qu'est-ce qui a permis aux bactéries R de devenir S ?",
              solution: [
                "Les souris 1 et 2 montrent que seule la souche S est virulente ; la souris 3 montre que les S tués ne sont plus virulents.",
                "La souris 4 meurt, et l'on retrouve des S vivants alors qu'on n'a injecté que des S morts : des bactéries R vivantes ont été transformées en bactéries S.",
                "Les R ont donc reçu des bactéries S mortes une information héréditaire (puisque les S retrouvées se multiplient en restant S), sans reproduction entre elles.",
                "On sait depuis les travaux d'Avery (1944) que ce facteur transformant est l'ADN, libéré par les S mortes et absorbé par les R.",
                "Conclusion : c'est une transformation, transfert horizontal d'ADN libre qui modifie durablement le génome et le phénotype des bactéries receveuses.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On dispose d'une souche A, résistante à un antibiotique, et d'une souche B, sensible. Expérience 1 : A et B sont cultivées ensemble ; après culture, on trouve des bactéries B résistantes. Expérience 2 : A et B sont placées de part et d'autre d'un filtre qui laisse passer le milieu, l'ADN et les virus, mais pas les bactéries ; on ne trouve aucune B résistante. Expérience 3 : comme l'expérience 1, mais on ajoute au milieu une enzyme qui détruit l'ADN libre (DNase) ; on trouve des B résistantes. Identifiez le mécanisme de transfert en jeu en argumentant.",
              hint: "Éliminez les mécanismes un par un : que montre chaque expérience sur le support du transfert ?",
              solution: [
                "Expérience 1 : la résistance passe de A à B, sans reproduction entre souches : il y a transfert horizontal.",
                "Expérience 2 : sans contact entre bactéries, aucun transfert, alors que l'ADN libre et les virus traversent le filtre. Ni la transformation (ADN libre) ni la transduction (virus) ne suffisent : le contact entre cellules est nécessaire.",
                "Expérience 3 : la destruction de l'ADN libre n'empêche pas le transfert, ce qui confirme que la transformation n'est pas en jeu.",
                "Le seul mécanisme compatible, qui exige un contact direct et protège l'ADN de la DNase, est la conjugaison : le gène de résistance passe par un pilus, probablement porté par un plasmide.",
                "Conclusion : la résistance a été transmise de A à B par conjugaison, mécanisme qui contribue à la diffusion des résistances aux antibiotiques.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à son rôle dans les transferts horizontaux.",
            pairs: [
              { left: "Plasmide", right: "Petite molécule d'ADN circulaire, souvent échangée par conjugaison" },
              { left: "Pilus", right: "Pont entre deux bactéries lors de la conjugaison" },
              { left: "Bactériophage", right: "Virus qui transporte de l'ADN d'une bactérie à une autre" },
              { left: "ADN libre", right: "Support de la transformation" },
              { left: "Syncytine", right: "Gène d'origine rétrovirale utilisé dans la formation du placenta" },
              { left: "ADN-T", right: "Fragment transféré par Agrobacterium dans le génome d'une plante" },
            ],
          },
          quiz: [
            {
              q: "Un transfert horizontal de gènes se produit :",
              options: ["lors de la fécondation", "lors de la mitose", "lors de la méiose", "entre organismes, sans reproduction"],
              answer: 3,
              why: "Le transfert horizontal est défini par l'absence de lien de descendance entre le donneur et le receveur.",
            },
            {
              q: "Quel mécanisme nécessite un contact direct entre deux bactéries ?",
              options: ["La transformation", "La conjugaison", "La transduction", "La mutation"],
              answer: 1,
              why: "Lors de la conjugaison, l'ADN passe par un pilus qui relie les deux bactéries.",
            },
            {
              q: "Que montre l'expérience de Griffith (1928) ?",
              options: ["Que les virus sont capables d'infecter les bactéries", "Que les plasmides portent des résistances", "Que des bactéries peuvent être transformées", "Que l'ADN est une double hélice"],
              answer: 2,
              why: "Des pneumocoques R deviennent S au contact de S morts : un facteur transformant, identifié plus tard comme l'ADN, est passé de l'un à l'autre.",
            },
            {
              q: "D'où viennent les syncytines des mammifères ?",
              options: ["De rétrovirus anciens", "D'une bactérie du sol", "D'une duplication de gène", "D'une mitochondrie"],
              answer: 0,
              why: "Ce sont des gènes de rétrovirus intégrés autrefois dans le génome germinal d'ancêtres, puis « domestiqués » pour la formation du placenta.",
            },
            {
              q: "Pourquoi les résistances aux antibiotiques se propagent-elles si vite entre espèces bactériennes ?",
              options: ["Parce que les antibiotiques provoquent des mutations", "Parce que les bactéries se reproduisent sexuellement", "Parce que toutes les bactéries sont de la même espèce", "Parce que des gènes passent par transfert horizontal"],
              answer: 3,
              why: "Les gènes de résistance, souvent portés par des plasmides, passent d'une bactérie à l'autre, y compris entre espèces différentes.",
            },
          ],
          trap: "Confondre transfert horizontal et reproduction : la conjugaison n'est pas une reproduction sexuée, aucune nouvelle bactérie n'est créée par l'échange ; une bactérie receveuse acquiert simplement de l'ADN.",
          method: "Pour identifier un mécanisme de transfert dans une expérience, posez trois questions : faut-il un contact entre cellules (conjugaison) ? L'ADN libre suffit-il, et la DNase bloque-t-elle le transfert (transformation) ? Un virus est-il nécessaire (transduction) ? Concluez par élimination.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'endosymbioses',
          title: 'Les endosymbioses : mitochondries et chloroplastes',
          minutes: 30,
          objectives: [
            "Définir une endosymbiose et expliquer l'origine endosymbiotique des mitochondries et des chloroplastes.",
            "Exploiter des arguments structuraux, génétiques et phylogénétiques en faveur de cette origine.",
            "Expliquer que les endosymbioses ont complexifié les génomes, notamment par des transferts de gènes vers le noyau.",
            "Distinguer endosymbiose primaire et endosymbiose secondaire.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une endosymbiose ?",
              paragraphs: [
                "Une symbiose est une association durable entre deux organismes d'espèces différentes, bénéfique aux deux partenaires. On parle d'endosymbiose lorsque l'un des partenaires, l'endosymbionte, vit à l'intérieur des cellules de l'autre, l'hôte.",
                "La théorie endosymbiotique, défendue notamment par la biologiste américaine Lynn Margulis à partir de 1967, propose que les mitochondries et les chloroplastes des cellules eucaryotes descendent de bactéries autrefois libres, qui ont été englobées par une cellule hôte sans être digérées, puis se sont maintenues et transmises au fil des divisions.",
              ],
              box: { label: "Définition", text: "Une endosymbiose est une symbiose dans laquelle un organisme, l'endosymbionte, vit à l'intérieur des cellules d'un autre, l'hôte. Les mitochondries et les chloroplastes sont d'anciennes bactéries endosymbiotiques." },
            },
            {
              heading: "Les arguments en faveur de l'origine bactérienne",
              paragraphs: [
                "Les mitochondries et les chloroplastes ressemblent à des bactéries par plusieurs traits. Ils ont une taille proche de celle des bactéries et sont entourés de deux membranes, l'interne rappelant la membrane d'une bactérie et l'externe celle de la cellule hôte qui l'aurait englobée. Ils possèdent leur propre ADN, circulaire comme le chromosome bactérien, et leurs propres ribosomes, plus proches de ceux des bactéries que de ceux du cytoplasme eucaryote (certains antibiotiques qui bloquent les ribosomes bactériens bloquent aussi ceux des mitochondries). Enfin, ils ne sont jamais fabriqués à partir de rien : ils se forment par division d'organites préexistants, d'une manière qui ressemble à la division bactérienne.",
                "Les comparaisons de séquences sont décisives : les gènes des mitochondries sont apparentés à ceux d'un groupe de bactéries, les alphaprotéobactéries, et ceux des chloroplastes à ceux des cyanobactéries, des bactéries photosynthétiques.",
              ],
              box: { label: "À retenir", text: "Arguments : double membrane, ADN circulaire propre, ribosomes de type bactérien, division par scission, parenté des séquences avec les alphaprotéobactéries (mitochondries) et les cyanobactéries (chloroplastes)." },
            },
            {
              heading: "Une complexification des génomes",
              paragraphs: [
                "L'endosymbiose mitochondriale aurait eu lieu il y a plus d'un milliard et demi d'années, chez un ancêtre de tous les eucaryotes actuels ; l'endosymbiose à l'origine des chloroplastes est plus tardive et ne concerne que la lignée des eucaryotes photosynthétiques. Depuis, les génomes de ces organites se sont considérablement réduits : l'ADN mitochondrial humain ne compte que 16 569 paires de bases et 37 gènes, dont 13 codent des protéines. Le génome d'un chloroplaste compte de l'ordre d'une centaine de gènes, bien moins qu'une cyanobactérie libre.",
                "Beaucoup de gènes de l'ancien endosymbionte ont été perdus, et de nombreux autres ont été transférés dans le génome du noyau de l'hôte. Ainsi, la grande majorité des protéines d'une mitochondrie (plus d'un millier chez l'être humain) sont codées par des gènes nucléaires, fabriquées dans le cytoplasme puis importées. La Rubisco, enzyme clé de la photosynthèse, associe une grande sous-unité codée par l'ADN du chloroplaste et une petite sous-unité codée par le noyau. L'hôte et l'organite sont devenus totalement interdépendants : le génome de la cellule eucaryote est le résultat de cette fusion.",
              ],
            },
            {
              heading: "Endosymbioses primaires et secondaires",
              paragraphs: [
                "Une endosymbiose primaire est l'intégration d'une bactérie par une cellule eucaryote : elle est à l'origine des mitochondries et des chloroplastes des algues vertes, des algues rouges et des plantes, entourés de deux membranes.",
                "Une endosymbiose secondaire est l'intégration, par une cellule eucaryote, d'une algue eucaryote qui possédait déjà un chloroplaste. Le chloroplaste obtenu est alors entouré de trois ou quatre membranes. C'est le cas chez les euglènes, dont les chloroplastes, à trois membranes, dérivent d'une algue verte, ou chez les diatomées et les algues brunes, à quatre membranes. Ces endosymbioses successives ont répandu la photosynthèse dans des lignées très diverses.",
              ],
              box: { label: "Repère", text: "Endosymbiose primaire : bactérie dans une cellule eucaryote, organite à 2 membranes. Endosymbiose secondaire : algue eucaryote dans une cellule eucaryote, chloroplaste à 3 ou 4 membranes." },
            },
          ],
          keyPoints: [
            "Une endosymbiose est une symbiose où un partenaire vit dans les cellules de l'autre.",
            "Mitochondries issues d'alphaprotéobactéries, chloroplastes issus de cyanobactéries.",
            "Arguments : deux membranes, ADN circulaire, ribosomes de type bactérien, division par scission, parenté des séquences.",
            "De nombreux gènes de l'endosymbionte ont été perdus ou transférés au noyau : l'organite dépend de l'hôte.",
            "Endosymbiose secondaire : une algue eucaryote est englobée, son chloroplaste a 3 ou 4 membranes.",
          ],
          example: {
            statement: "Un tableau compare une bactérie, une mitochondrie et le cytoplasme d'une cellule eucaryote. Bactérie : une membrane, ADN circulaire, ribosomes de type bactérien. Mitochondrie : deux membranes, ADN circulaire, ribosomes de type bactérien, division par scission. Cytoplasme eucaryote : ribosomes de type eucaryote. Montrez que ces données soutiennent la théorie endosymbiotique.",
            solution: [
              "La mitochondrie possède un ADN circulaire, comme le chromosome bactérien, et non un ADN linéaire associé à des chromosomes comme le noyau.",
              "Ses ribosomes sont de type bactérien, différents de ceux du cytoplasme de la cellule qui la contient.",
              "Elle se divise par scission, comme une bactérie, et ne se forme qu'à partir d'une mitochondrie préexistante.",
              "Ses deux membranes s'expliquent par l'englobement : la membrane interne correspond à celle de la bactérie, l'externe à celle de la cellule hôte.",
              "Conclusion : ces ressemblances avec les bactéries soutiennent l'hypothèse selon laquelle la mitochondrie descend d'une bactérie englobée par une cellule hôte, dans une endosymbiose.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Citez trois caractéristiques des chloroplastes qui rappellent les bactéries, et nommez le groupe de bactéries dont ils proviennent.",
              hint: "Pensez aux membranes, au matériel génétique et à la façon dont les chloroplastes se forment.",
              solution: [
                "Les chloroplastes sont entourés de deux membranes (chez les plantes, issues d'une endosymbiose primaire).",
                "Ils possèdent leur propre ADN, circulaire, et des ribosomes de type bactérien.",
                "Ils se forment par division de chloroplastes préexistants.",
                "Ils proviennent de cyanobactéries, des bactéries photosynthétiques.",
              ],
            },
            {
              level: 2,
              statement: "L'ADN mitochondrial humain code 13 protéines. Or on estime à environ 1 100 le nombre de protéines différentes présentes dans une mitochondrie humaine. (1) Calculez le pourcentage de ces protéines codées par l'ADN mitochondrial. (2) Où sont codées les autres, et comment l'expliquer dans le cadre de la théorie endosymbiotique ?",
              hint: "Le pourcentage s'obtient en divisant 13 par 1 100, puis en multipliant par 100.",
              solution: [
                "(1) 13 ÷ 1 100 × 100 ≈ 1,2 % : environ 1 % seulement des protéines mitochondriales sont codées par l'ADN de la mitochondrie.",
                "(2) Les autres, soit environ 99 %, sont codées par des gènes du noyau, traduites dans le cytoplasme puis importées dans la mitochondrie.",
                "Selon la théorie endosymbiotique, la bactérie ancestrale possédait un génome complet. Au cours de l'évolution, beaucoup de ses gènes ont été perdus ou transférés dans le noyau de l'hôte.",
                "Conclusion : la mitochondrie actuelle ne peut plus vivre seule ; son fonctionnement dépend du génome nucléaire, ce qui illustre la complexification du génome de la cellule eucaryote par endosymbiose.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. L'euglène est un eucaryote unicellulaire photosynthétique. Ses chloroplastes sont entourés de trois membranes, et les séquences de leur ADN sont très proches de celles des chloroplastes des algues vertes. Les euglènes sont par ailleurs apparentées à des eucaryotes unicellulaires non photosynthétiques. Proposez un scénario expliquant l'origine des chloroplastes de l'euglène.",
              hint: "Comptez les membranes : combien en attend-on après une seule endosymbiose, et combien après deux ?",
              solution: [
                "Un chloroplaste issu directement d'une cyanobactérie (endosymbiose primaire) est entouré de deux membranes, comme ceux des algues vertes.",
                "Les chloroplastes de l'euglène en ont trois, et leur ADN ressemble à celui des chloroplastes d'algues vertes : ils ne proviennent pas directement d'une cyanobactérie, mais d'une algue verte.",
                "Les euglènes sont apparentées à des eucaryotes non photosynthétiques : leur ancêtre était donc probablement une cellule hétérotrophe.",
                "Scénario : un ancêtre hétérotrophe de l'euglène a englobé une algue verte sans la digérer ; l'algue s'est réduite à son chloroplaste, la membrane supplémentaire provenant de cet englobement.",
                "Conclusion : les chloroplastes de l'euglène résultent d'une endosymbiose secondaire, ce qui montre que les endosymbioses se sont succédé et ont transmis la photosynthèse à de nouvelles lignées.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Mitochondries, chloroplastes et endosymbioses.",
            statements: [
              { text: "Les mitochondries possèdent leur propre ADN.", true: true, why: "Elles ont un petit ADN circulaire, héritage de la bactérie ancestrale." },
              { text: "Toutes les protéines d'une mitochondrie sont codées par l'ADN mitochondrial.", true: false, why: "La grande majorité est codée par le noyau, à la suite de transferts de gènes." },
              { text: "Les chloroplastes descendent de cyanobactéries.", true: true, why: "Leurs séquences d'ADN sont apparentées à celles des cyanobactéries photosynthétiques." },
              { text: "Une cellule peut fabriquer une mitochondrie à partir de rien si elle en manque.", true: false, why: "Les mitochondries ne se forment que par division de mitochondries préexistantes." },
              { text: "Un chloroplaste à quatre membranes témoigne d'une endosymbiose secondaire.", true: true, why: "Les membranes supplémentaires proviennent de l'englobement d'une algue eucaryote." },
              { text: "Les mitochondries n'existent que chez les animaux.", true: false, why: "Presque tous les eucaryotes en ont, y compris les plantes, qui possèdent à la fois mitochondries et chloroplastes." },
              { text: "Des gènes de l'endosymbionte ont été transférés dans le noyau de l'hôte.", true: true, why: "Ces transferts expliquent la réduction des génomes des organites et l'interdépendance avec l'hôte." },
            ],
          },
          quiz: [
            {
              q: "Les mitochondries descendent :",
              options: ["de cyanobactéries photosynthétiques", "de virus", "d'alphaprotéobactéries", "d'algues vertes"],
              answer: 2,
              why: "Les comparaisons de séquences rapprochent les gènes mitochondriaux de ceux des alphaprotéobactéries.",
            },
            {
              q: "Lequel de ces arguments soutient l'origine bactérienne des chloroplastes ?",
              options: ["Leur ADN circulaire", "Leur couleur verte", "Leur présence dans les feuilles", "Leur rôle dans la respiration"],
              answer: 0,
              why: "Un ADN circulaire propre est un caractère bactérien ; la couleur ou la localisation ne disent rien de l'origine.",
            },
            {
              q: "Pourquoi une mitochondrie ne peut-elle plus vivre hors de la cellule ?",
              options: ["Elle a perdu les deux membranes qui l'entouraient", "Beaucoup de ses gènes sont dans le noyau", "Elle ne contient plus d'ADN", "Elle n'a jamais été une bactérie"],
              answer: 1,
              why: "Une grande partie des gènes nécessaires à son fonctionnement a été transférée dans le noyau de l'hôte : elle en dépend.",
            },
            {
              q: "Combien de membranes entourent un chloroplaste issu d'une endosymbiose secondaire ?",
              options: ["Une seule, comme une bactérie", "Deux", "Aucune", "Trois ou quatre"],
              answer: 3,
              why: "L'englobement d'une algue eucaryote qui avait déjà un chloroplaste à deux membranes ajoute une ou deux membranes.",
            },
            {
              q: "Combien de gènes compte l'ADN mitochondrial humain ?",
              options: ["Environ 20 000", "37", "3", "Plus de 1 000"],
              answer: 1,
              why: "L'ADN mitochondrial humain, de 16 569 paires de bases, porte 37 gènes, dont 13 codent des protéines.",
            },
          ],
          trap: "Dire que les mitochondries et les chloroplastes « sont des bactéries ». Ce sont des organites d'origine bactérienne, devenus incapables de vivre seuls, car beaucoup de leurs gènes ont été perdus ou transférés dans le noyau.",
          method: "Pour argumenter une origine endosymbiotique, classez vos arguments en trois catégories : structure (membranes, ribosomes, ADN circulaire), fonctionnement (division par scission, sensibilité à des antibiotiques antibactériens) et parenté (comparaison des séquences). Une réponse au bac qui couvre les trois est solide.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'ÉVOLUTION DES GÉNOMES AU SEIN DES POPULATIONS                         */
    /* ==================================================================== */
    {
      id: 'evolution-des-populations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'hardy-weinberg',
          title: 'Le modèle de Hardy-Weinberg',
          minutes: 35,
          objectives: [
            "Calculer des fréquences alléliques et génotypiques dans une population.",
            "Énoncer le modèle de Hardy-Weinberg et ses conditions d'application.",
            "Comparer des effectifs observés aux effectifs attendus pour dire si une population est à l'équilibre.",
            "Identifier, en cas d'écart au modèle, les forces évolutives susceptibles de modifier la composition génétique d'une population.",
          ],
          course: [
            {
              heading: "Décrire génétiquement une population",
              paragraphs: [
                "Une population est un ensemble d'individus de la même espèce qui vivent dans un même lieu et se reproduisent entre eux. On s'intéresse à un gène qui possède deux allèles, A et a. On note p la fréquence de l'allèle A et q celle de l'allèle a dans la population : ce sont des fréquences alléliques, avec p + q = 1.",
                "Pour les calculer, on compte les allèles. Dans une population de N individus diploïdes, il y a 2N allèles du gène. Un individu AA porte deux allèles A, un individu Aa en porte un. Donc p = (2 × effectif AA + effectif Aa) ÷ 2N, et q = 1 - p. Les fréquences génotypiques sont, elles, les proportions d'individus AA, Aa et aa.",
              ],
              box: { label: "Formule", text: "p = (2 × N(AA) + N(Aa)) ÷ 2N ; q = (2 × N(aa) + N(Aa)) ÷ 2N ; p + q = 1." },
            },
            {
              heading: "Le modèle et ses conditions",
              paragraphs: [
                "En 1908, le mathématicien britannique Godfrey Hardy et le médecin allemand Wilhelm Weinberg ont établi, indépendamment, un modèle mathématique. Il considère une population idéale : de très grand effectif, où les unions se font au hasard (panmixie), sans mutation, sans migration (aucun individu n'entre ni ne sort) et sans sélection (tous les génotypes ont la même survie et la même fécondité).",
                "Dans ces conditions, les gamètes portent l'allèle A avec la fréquence p et l'allèle a avec la fréquence q. Leurs rencontres se font au hasard : la probabilité d'obtenir un individu AA est p × p = p², un individu aa q × q = q², et un hétérozygote 2pq (A venant du père et a de la mère, ou l'inverse). Les fréquences alléliques restent alors constantes de génération en génération : la population est à l'équilibre.",
              ],
              box: { label: "Propriété", text: "Équilibre de Hardy-Weinberg : fréquences génotypiques AA = p², Aa = 2pq, aa = q², avec p² + 2pq + q² = (p + q)² = 1. Les fréquences alléliques p et q restent stables au fil des générations." },
            },
            {
              heading: "Tester l'équilibre d'une population réelle",
              paragraphs: [
                "Pour savoir si une population est à l'équilibre, on calcule p et q à partir des effectifs observés, puis les effectifs attendus sous le modèle : p² × N, 2pq × N et q² × N. Si les effectifs observés sont proches des effectifs attendus, la population est considérée comme à l'équilibre pour ce gène. Un écart important indique qu'au moins une condition du modèle n'est pas respectée.",
                "Le modèle permet aussi des estimations. Pour une maladie récessive rare, si l'on admet l'équilibre, la fréquence des malades vaut q², donc q = √(fréquence des malades), et l'on peut en déduire la fréquence des porteurs sains, 2pq.",
              ],
            },
            {
              heading: "Un modèle pour révéler l'évolution",
              paragraphs: [
                "Aucune population réelle ne remplit exactement les conditions du modèle : les effectifs sont finis, des mutations apparaissent, des individus migrent, certains génotypes se reproduisent mieux que d'autres. C'est pourquoi l'évolution des génomes au sein des populations est inéluctable.",
                "Le modèle de Hardy-Weinberg sert donc de référence, un modèle nul : un écart à l'équilibre signale l'action de forces évolutives. Les mutations créent de nouveaux allèles ; la sélection naturelle favorise certains allèles ; la dérive génétique modifie les fréquences au hasard, surtout dans les petites populations ; les migrations apportent ou retirent des allèles. Des unions non aléatoires (entre apparentés, ou entre individus qui se ressemblent) modifient les fréquences génotypiques, en réduisant la part des hétérozygotes.",
              ],
              box: { label: "À retenir", text: "Un écart au modèle de Hardy-Weinberg révèle l'action d'une ou plusieurs forces évolutives : mutation, sélection naturelle, dérive génétique, migration, ou unions non aléatoires." },
            },
          ],
          keyPoints: [
            "Fréquences alléliques : p = (2 × N(AA) + N(Aa)) ÷ 2N et q = 1 - p.",
            "Conditions du modèle : grand effectif, panmixie, ni mutation, ni migration, ni sélection.",
            "À l'équilibre : AA = p², Aa = 2pq, aa = q², et p et q restent constants.",
            "On compare effectifs observés et attendus (p²N, 2pqN, q²N) pour tester l'équilibre.",
            "Un écart révèle des forces évolutives : mutation, sélection, dérive, migration, unions non aléatoires.",
          ],
          example: {
            statement: "Dans une population de 1 000 individus, on compte 360 individus AA, 480 Aa et 160 aa. Calculez les fréquences alléliques, puis dites si la population est à l'équilibre de Hardy-Weinberg pour ce gène.",
            solution: [
              "Nombre total d'allèles : 2N = 2 × 1 000 = 2 000.",
              "p = (2 × 360 + 480) ÷ 2 000 = (720 + 480) ÷ 2 000 = 1 200 ÷ 2 000 = 0,6.",
              "q = 1 - 0,6 = 0,4. Vérification : (2 × 160 + 480) ÷ 2 000 = 800 ÷ 2 000 = 0,4.",
              "Effectifs attendus : AA = 0,6² × 1 000 = 0,36 × 1 000 = 360 ; Aa = 2 × 0,6 × 0,4 × 1 000 = 480 ; aa = 0,4² × 1 000 = 160.",
              "Les effectifs observés (360, 480, 160) sont égaux aux effectifs attendus.",
              "Conclusion : p = 0,6, q = 0,4, et la population est à l'équilibre de Hardy-Weinberg pour ce gène.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans une population supposée à l'équilibre de Hardy-Weinberg, une maladie récessive touche une naissance sur 2 500. Calculez la fréquence q de l'allèle responsable, puis la fréquence des porteurs sains (hétérozygotes).",
              hint: "Les malades sont homozygotes récessifs : leur fréquence vaut q².",
              solution: [
                "Les malades ont le génotype aa : q² = 1 ÷ 2 500 = 0,0004.",
                "q = √0,0004 = 0,02, donc p = 1 - 0,02 = 0,98.",
                "Fréquence des hétérozygotes : 2pq = 2 × 0,98 × 0,02 = 0,0392.",
                "Résultat : q = 0,02 et environ 3,9 % de porteurs sains, soit à peu près une personne sur 25, bien plus que de malades.",
              ],
            },
            {
              level: 2,
              statement: "Dans une population de 1 000 plantes, on observe 500 individus AA, 200 Aa et 300 aa. (1) Calculez p et q. (2) Calculez les effectifs attendus à l'équilibre. (3) La population est-elle à l'équilibre ? Proposez une explication.",
              hint: "Après avoir calculé p et q, comparez surtout le nombre d'hétérozygotes observé et attendu.",
              solution: [
                "(1) p = (2 × 500 + 200) ÷ 2 000 = 1 200 ÷ 2 000 = 0,6 ; q = (2 × 300 + 200) ÷ 2 000 = 800 ÷ 2 000 = 0,4.",
                "(2) Attendus : AA = 0,36 × 1 000 = 360 ; Aa = 0,48 × 1 000 = 480 ; aa = 0,16 × 1 000 = 160.",
                "(3) Observés : 500, 200, 300. Il y a un fort déficit d'hétérozygotes (200 au lieu de 480) et un excès d'homozygotes : la population n'est pas à l'équilibre.",
                "Les fréquences alléliques sont les mêmes que dans l'exemple à l'équilibre, mais les génotypes sont répartis autrement : c'est la condition de panmixie qui semble non respectée.",
                "Explication possible : des unions non aléatoires, par exemple de l'autofécondation ou des croisements entre plantes apparentées, qui augmentent la part des homozygotes. Conclusion : population hors équilibre, déficit en hétérozygotes.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Dans une population de grand effectif, l'allèle a est létal à l'état homozygote : les individus aa meurent avant de se reproduire. Les autres conditions de Hardy-Weinberg sont respectées. On admet qu'après une génération de sélection, la fréquence de a devient q' = q ÷ (1 + q). (1) Justifiez cette formule. (2) Avec q = 0,4 au départ, calculez q après une puis deux générations. (3) Concluez sur l'effet de la sélection.",
              hint: "Après la sélection, il ne reste que des AA (fréquence p²) et des Aa (fréquence 2pq) : comptez les allèles a parmi eux.",
              solution: [
                "(1) À la naissance, les fréquences sont p², 2pq et q². Les aa meurent : parmi les reproducteurs, seuls les Aa portent a, un allèle sur deux. Fréquence de a = 2pq ÷ (2p² + 2 × 2pq) = 2pq ÷ (2p(p + 2q)) = q ÷ (p + 2q). Comme p + q = 1, p + 2q = 1 + q, d'où q' = q ÷ (1 + q).",
                "(2) Première génération : q₁ = 0,4 ÷ 1,4 ≈ 0,286.",
                "Deuxième génération : q₂ = 0,286 ÷ 1,286 ≈ 0,222 (valeur exacte : 0,4 ÷ 1,8 = 2/9).",
                "(3) La fréquence de l'allèle a diminue à chaque génération (0,4 puis 0,286 puis 0,222) : la sélection naturelle fait évoluer les fréquences alléliques, la population n'est pas à l'équilibre.",
                "La diminution ralentit à mesure que q baisse : l'allèle devient rare et se trouve surtout chez des hétérozygotes, qui ne sont pas éliminés. Conclusion : la sélection fait régresser l'allèle létal sans l'éliminer rapidement.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour tester l'équilibre de Hardy-Weinberg.",
            items: [
              "Relever les effectifs observés de chaque génotype",
              "Calculer les fréquences alléliques p et q en comptant les allèles",
              "Calculer les fréquences attendues p², 2pq et q²",
              "Multiplier par l'effectif total pour obtenir les effectifs attendus",
              "Comparer effectifs observés et attendus",
              "Conclure sur l'équilibre et proposer une force évolutive en cas d'écart",
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces conditions fait partie du modèle de Hardy-Weinberg ?",
              options: ["Une population de petit effectif", "Des unions au hasard", "Une forte sélection naturelle", "Des migrations fréquentes"],
              answer: 1,
              why: "Le modèle suppose la panmixie (unions au hasard), un grand effectif, et l'absence de mutation, de migration et de sélection.",
            },
            {
              q: "Si q = 0,3 dans une population à l'équilibre, quelle est la fréquence des hétérozygotes ?",
              options: ["0,09", "0,49", "0,42", "0,21"],
              answer: 2,
              why: "p = 0,7, donc 2pq = 2 × 0,7 × 0,3 = 0,42.",
            },
            {
              q: "Une population de 200 individus compte 50 AA, 100 Aa et 50 aa. Que vaut p ?",
              options: ["0,5", "0,25", "0,75", "0,33"],
              answer: 0,
              why: "p = (2 × 50 + 100) ÷ 400 = 200 ÷ 400 = 0,5.",
            },
            {
              q: "Un fort déficit en hétérozygotes, avec des fréquences alléliques stables, évoque surtout :",
              options: ["une mutation récente", "un apport régulier de nouveaux migrants", "un effectif infini", "des unions entre apparentés"],
              answer: 3,
              why: "Les unions non aléatoires, comme la consanguinité, augmentent la part des homozygotes sans changer, à elles seules, les fréquences alléliques.",
            },
            {
              q: "Pourquoi dit-on que l'évolution des populations est inéluctable ?",
              options: ["Parce que p + q = 1", "Parce que les gènes sont stables", "Parce que le modèle n'est jamais réalisé", "Parce que la fécondation rétablit la diploïdie"],
              answer: 2,
              why: "Aucune population réelle n'a un effectif infini ni n'échappe aux mutations, migrations et à la sélection : ses fréquences alléliques finissent toujours par changer.",
            },
          ],
          trap: "Calculer q en prenant directement la proportion d'individus aa, ou utiliser q = √(fréquence des aa) dans une population dont on n'a pas montré l'équilibre. Il faut compter les allèles : p = (2 × N(AA) + N(Aa)) ÷ 2N.",
          method: "Vérifiez systématiquement vos calculs : p + q doit valoir 1, et les effectifs attendus p²N + 2pqN + q²N doivent redonner l'effectif total N. Si ce n'est pas le cas, une erreur s'est glissée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'derive-et-selection',
          title: 'Dérive génétique et sélection naturelle',
          minutes: 30,
          objectives: [
            "Définir la dérive génétique et expliquer pourquoi ses effets sont plus marqués dans les petites populations.",
            "Expliquer l'effet fondateur et l'effet goulot d'étranglement.",
            "Expliquer comment la sélection naturelle modifie les fréquences alléliques en fonction du milieu.",
            "Exploiter des données ou des résultats de simulation pour distinguer l'action de la dérive et celle de la sélection.",
          ],
          course: [
            {
              heading: "La dérive génétique : le hasard de l'échantillonnage",
              paragraphs: [
                "À chaque génération, seule une petite partie des gamètes produits participe à la fécondation, et les individus n'ont pas tous le même nombre de descendants, simplement par hasard (un accident, une rencontre manquée). Les allèles de la génération suivante sont donc un échantillon, tiré au hasard, de ceux de la génération précédente. Leurs fréquences varient alors de façon aléatoire : c'est la dérive génétique.",
                "On peut la comparer à des lancers de pièce : sur 10 lancers, obtenir 7 piles au lieu de 5 est fréquent ; sur 10 000 lancers, l'écart à la moitié est proportionnellement très faible. De même, la dérive est forte dans les petites populations et faible dans les grandes. Elle peut conduire, sans aucune raison biologique, à la disparition d'un allèle ou au contraire à sa fixation (fréquence 1). Elle agit sur tous les allèles, qu'ils soient avantageux, désavantageux ou neutres.",
              ],
              box: { label: "Définition", text: "La dérive génétique est la variation aléatoire des fréquences alléliques d'une génération à l'autre, due au hasard de la transmission des allèles. Son effet est d'autant plus fort que la population est petite." },
            },
            {
              heading: "Effet fondateur et goulot d'étranglement",
              paragraphs: [
                "Lorsqu'un petit groupe d'individus fonde une nouvelle population, par exemple en colonisant une île, il n'emporte qu'un échantillon des allèles de la population d'origine, avec des fréquences parfois très différentes. C'est l'effet fondateur. Chez les Amish de Pennsylvanie, communauté fondée par un petit nombre de familles et dont les mariages se font au sein du groupe, une maladie génétique rare, le syndrome d'Ellis-van Creveld, est beaucoup plus fréquente que dans le reste de la population.",
                "Lorsqu'une population voit son effectif s'effondrer (chasse, épidémie, catastrophe), les survivants ne portent qu'une partie de la diversité génétique initiale : c'est un goulot d'étranglement. L'éléphant de mer du Nord, chassé presque jusqu'à l'extinction à la fin du XIXe siècle, serait passé par un effectif de quelques dizaines d'individus seulement. Ses populations se sont reconstituées, mais leur diversité génétique reste très faible.",
              ],
            },
            {
              heading: "La sélection naturelle : un tri par le milieu",
              paragraphs: [
                "Les individus d'une population diffèrent par leurs allèles. Si un allèle confère, dans un milieu donné, une meilleure survie ou une meilleure reproduction, ses porteurs laissent en moyenne plus de descendants : la fréquence de cet allèle augmente au fil des générations. C'est la sélection naturelle. Elle n'est pas aléatoire : elle dépend du milieu, et un allèle avantageux dans un milieu peut être désavantageux dans un autre.",
                "Chez la phalène du bouleau, papillon de nuit anglais, la forme sombre, rare au début du XIXe siècle, est devenue majoritaire près des villes industrielles, où la suie noircissait les troncs : les formes claires, plus visibles sur ces troncs, étaient davantage mangées par les oiseaux. Avec la baisse de la pollution au XXe siècle, la forme claire est redevenue majoritaire. Autre exemple : l'allèle de la drépanocytose, grave à l'état homozygote, protège les hétérozygotes contre les formes graves du paludisme ; il reste ainsi fréquent dans les régions où le paludisme est répandu.",
                "Une forme particulière de sélection, la sélection sexuelle, favorise les caractères qui augmentent le succès dans l'accès aux partenaires, comme la queue ornée du paon mâle, même s'ils peuvent nuire à la survie.",
              ],
              box: { label: "À retenir", text: "Les mutations apparaissent au hasard, sans lien avec les besoins de l'organisme. La sélection naturelle trie ensuite les allèles déjà présents : elle augmente la fréquence de ceux qui favorisent la survie et la reproduction dans un milieu donné." },
            },
            {
              heading: "Deux forces qui agissent ensemble",
              paragraphs: [
                "Dans une population réelle, la dérive et la sélection agissent en même temps. Dans une grande population, la sélection l'emporte généralement : même un faible avantage finit par se traduire par une augmentation régulière de la fréquence d'un allèle. Dans une petite population, la dérive peut l'emporter : un allèle avantageux peut être perdu par hasard, et un allèle légèrement défavorable peut se fixer.",
                "Ces deux mécanismes, avec les mutations qui créent de nouveaux allèles et les migrations qui en apportent, expliquent que la composition génétique des populations change en permanence.",
              ],
            },
          ],
          keyPoints: [
            "Dérive génétique : variation aléatoire des fréquences alléliques, forte dans les petites populations.",
            "La dérive peut faire disparaître ou fixer un allèle, quel que soit son effet.",
            "Effet fondateur : une nouvelle population fondée par peu d'individus ; goulot d'étranglement : effondrement d'effectif.",
            "Sélection naturelle : les allèles qui favorisent survie et reproduction dans un milieu donné deviennent plus fréquents.",
            "Les mutations sont aléatoires ; la sélection trie les allèles existants selon le milieu.",
            "Exemples : phalène du bouleau, drépanocytose et paludisme, résistance aux antibiotiques.",
          ],
          example: {
            statement: "Une île est colonisée par 6 oiseaux venus d'un continent où un allèle B a une fréquence de 0,5. Parmi les 12 allèles du gène portés par les fondateurs, 10 sont des allèles B. Calculez la fréquence de B dans la population fondatrice et nommez le phénomène observé.",
            solution: [
              "Les 6 fondateurs, diploïdes, portent 6 × 2 = 12 allèles du gène.",
              "Fréquence de B chez les fondateurs : 10 ÷ 12 ≈ 0,83.",
              "Sur le continent, la fréquence était de 0,5 : l'échantillon de fondateurs n'est pas représentatif de la population d'origine.",
              "Cet écart ne s'explique pas par un avantage de B : il est dû au hasard du petit nombre d'individus qui ont colonisé l'île.",
              "Conclusion : la fréquence de B passe de 0,5 à environ 0,83 ; c'est un effet fondateur, cas particulier de dérive génétique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque situation relève surtout de la dérive génétique ou de la sélection naturelle. (a) Après un traitement antibiotique, les bactéries résistantes deviennent majoritaires. (b) Une tempête tue au hasard 90 % d'une petite population de lézards, et un allèle neutre disparaît. (c) Dans un désert de sable clair, les souris au pelage clair sont moins chassées et deviennent majoritaires.",
              hint: "Demandez-vous si l'allèle qui progresse ou disparaît procure un avantage ou un désavantage dans le milieu.",
              solution: [
                "(a) Les bactéries résistantes survivent et se multiplient en présence d'antibiotique : c'est une sélection naturelle.",
                "(b) Les lézards meurent au hasard et l'allèle disparu est neutre : c'est une dérive génétique (ici un goulot d'étranglement).",
                "(c) Le pelage clair procure un camouflage qui augmente la survie : c'est une sélection naturelle.",
              ],
            },
            {
              level: 2,
              statement: "Dans un bois aux troncs noircis par la pollution, on relâche 100 phalènes claires et 100 phalènes sombres, toutes marquées. Quelques jours plus tard, on recapture 20 phalènes claires et 40 phalènes sombres marquées. (1) Calculez le taux de recapture de chaque forme. (2) Interprétez ces résultats. (3) Que prévoyez-vous pour la fréquence de l'allèle responsable de la forme sombre dans ce bois ?",
              hint: "On admet que le taux de recapture reflète la survie des papillons.",
              solution: [
                "(1) Formes claires : 20 ÷ 100 = 20 % ; formes sombres : 40 ÷ 100 = 40 %.",
                "(2) Les phalènes sombres ont survécu deux fois plus que les claires. Sur les troncs noircis, elles sont mieux camouflées et moins repérées par les oiseaux prédateurs.",
                "(3) Les phalènes sombres, plus nombreuses à survivre, se reproduisent davantage et transmettent plus souvent l'allèle de la forme sombre.",
                "Conclusion : dans ce milieu, la fréquence de cet allèle doit augmenter de génération en génération : c'est l'effet de la sélection naturelle.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Un logiciel simule l'évolution de la fréquence d'un allèle neutre, de fréquence initiale 0,5, pendant 50 générations. On lance 10 simulations pour des populations de 10 individus : dans 8 d'entre elles, l'allèle a disparu ou s'est fixé. On lance 10 simulations pour des populations de 1 000 individus : la fréquence finale reste comprise entre 0,42 et 0,58 dans toutes. (1) Quel mécanisme est simulé ? Justifiez. (2) Comparez les deux séries de résultats. (3) Expliquez pourquoi la protection d'une espèce menacée passe souvent par le maintien de populations assez nombreuses et reliées entre elles.",
              hint: "L'allèle étant neutre, la sélection n'intervient pas : seul le hasard peut modifier sa fréquence.",
              solution: [
                "(1) L'allèle est neutre : il ne procure ni avantage ni désavantage. Les variations de sa fréquence ne peuvent donc venir que du hasard de la transmission : c'est la dérive génétique.",
                "(2) Dans les populations de 10 individus, la fréquence varie fortement, jusqu'à la perte ou la fixation de l'allèle dans 8 simulations sur 10. Dans celles de 1 000 individus, elle reste proche de 0,5 (écart maximal de 0,08). La dérive est donc beaucoup plus forte dans les petites populations.",
                "Dans une petite population, la fixation d'un allèle signifie la perte de l'autre : la diversité génétique diminue.",
                "(3) Une espèce menacée dont les populations sont petites et isolées perd rapidement sa diversité génétique par dérive, ce qui réduit sa capacité à s'adapter à un changement du milieu.",
                "Conclusion : maintenir des populations nombreuses et reliées (les migrations apportant des allèles) limite les effets de la dérive et préserve la diversité génétique.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez le hasard et la sélection.",
            statements: [
              { text: "La dérive génétique est plus forte dans les petites populations.", true: true, why: "Plus l'échantillon d'allèles transmis est petit, plus le hasard fait varier les fréquences." },
              { text: "Une mutation apparaît parce que l'organisme en a besoin.", true: false, why: "Les mutations sont aléatoires ; la sélection trie ensuite celles qui existent déjà." },
              { text: "La dérive génétique peut faire disparaître un allèle avantageux.", true: true, why: "Dans une petite population, le hasard peut l'emporter sur un faible avantage." },
              { text: "Un allèle favorisé par la sélection l'est dans tous les milieux.", true: false, why: "L'avantage dépend du milieu : la forme sombre de la phalène n'est avantagée que sur des troncs sombres." },
              { text: "L'allèle de la drépanocytose reste fréquent là où sévit le paludisme.", true: true, why: "Les hétérozygotes sont mieux protégés contre les formes graves du paludisme." },
              { text: "L'effet fondateur est une forme de sélection naturelle.", true: false, why: "C'est une forme de dérive : les fréquences des fondateurs dépendent du hasard, pas d'un avantage." },
            ],
          },
          quiz: [
            {
              q: "La dérive génétique est :",
              options: ["une variation aléatoire des fréquences alléliques", "l'apparition d'un nouvel allèle par mutation de l'ADN", "un tri des allèles par le milieu", "un déplacement d'individus"],
              answer: 0,
              why: "La dérive résulte du hasard de la transmission des allèles d'une génération à l'autre ; elle ne crée pas d'allèle et ne dépend pas du milieu.",
            },
            {
              q: "Dans quelle population la dérive génétique est-elle la plus forte ?",
              options: ["10 000 individus", "1 000 individus", "100 000 individus", "20 individus"],
              answer: 3,
              why: "Plus l'effectif est faible, plus les fréquences alléliques fluctuent au hasard.",
            },
            {
              q: "Un goulot d'étranglement correspond à :",
              options: ["une augmentation brutale de l'effectif", "la fondation d'une population par des migrants", "une chute brutale de l'effectif", "un avantage sélectif"],
              answer: 2,
              why: "Les rares survivants ne portent qu'une partie de la diversité génétique initiale.",
            },
            {
              q: "Pourquoi la forme sombre de la phalène est-elle devenue majoritaire près des villes industrielles ?",
              options: ["La pollution a directement provoqué la mutation de leur ADN", "Elle était mieux camouflée sur les troncs noircis", "Les papillons ont changé de couleur", "Par simple effet fondateur"],
              answer: 1,
              why: "La forme sombre existait déjà ; mieux camouflée, elle était moins mangée par les oiseaux : c'est la sélection naturelle.",
            },
            {
              q: "Quel couple de mécanismes est correctement associé ?",
              options: ["Sélection naturelle : dépend du milieu", "Dérive génétique : dépend du milieu", "Sélection naturelle : purement aléatoire", "Effet fondateur : avantage reproductif"],
              answer: 0,
              why: "La sélection dépend des conditions du milieu, alors que la dérive et l'effet fondateur relèvent du hasard.",
            },
          ],
          trap: "Penser que le milieu provoque les mutations dont l'organisme a besoin (« la pollution a rendu les phalènes noires »). Les allèles existent avant ; le milieu ne fait que favoriser certains d'entre eux par la sélection.",
          method: "Pour distinguer dérive et sélection dans un document, cherchez deux indices : l'allèle étudié procure-t-il un avantage dans ce milieu (sélection) ou est-il neutre ? La population est-elle petite ou a-t-elle subi une réduction d'effectif (dérive) ? Citez toujours l'effectif dans votre argumentation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'speciation',
          title: 'La spéciation : naissance de nouvelles espèces',
          minutes: 30,
          objectives: [
            "Définir l'espèce comme une population d'individus suffisamment isolés génétiquement des autres populations, et discuter les limites de cette définition.",
            "Identifier les barrières qui provoquent un isolement reproducteur.",
            "Expliquer comment la séparation de populations, puis l'action des forces évolutives, conduisent à la spéciation.",
            "Exploiter des données (croisements, caryotypes, répartition géographique) pour argumenter un scénario de spéciation.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une espèce ?",
              paragraphs: [
                "Une définition couramment utilisée est biologique : une espèce est un ensemble de populations dont les individus peuvent se reproduire entre eux et engendrer une descendance viable et fertile. Le programme retient une formulation proche : une espèce est une population d'individus suffisamment isolés génétiquement des autres populations.",
                "Cette définition a des limites. Elle ne s'applique pas aux organismes à reproduction asexuée, comme beaucoup de bactéries, ni aux fossiles, dont on ne peut tester l'interfécondité. On utilise alors d'autres critères : ressemblances morphologiques, comparaisons de séquences d'ADN. De plus, une espèce n'existe que pendant un temps fini : elle disparaît si toutes ses populations s'éteignent, ou si elle se transforme en une ou plusieurs autres espèces.",
              ],
              box: { label: "Définition", text: "Une espèce est une population d'individus suffisamment isolés génétiquement des autres populations. Selon le critère biologique, ses membres sont interféconds et leur descendance est viable et fertile." },
            },
            {
              heading: "L'isolement reproducteur",
              paragraphs: [
                "Deux populations deviennent des espèces distinctes lorsqu'un isolement reproducteur s'installe entre elles : les flux de gènes cessent. Certaines barrières empêchent la formation d'un zygote : barrière géographique (montagne, bras de mer), décalage des périodes de reproduction ou de floraison, différences de comportement (chants, parades nuptiales), incompatibilité des organes reproducteurs ou des gamètes.",
                "D'autres agissent après la fécondation : l'hybride ne se développe pas, ou il est stérile. Le mulet, issu du croisement d'un âne (2n = 62) et d'une jument (2n = 64), possède 31 + 32 = 63 chromosomes. Il est viable, mais ses chromosomes, venus de deux espèces différentes, ne peuvent pas s'apparier correctement en méiose : il ne produit pas de gamètes fonctionnels et il est stérile. L'âne et le cheval sont donc deux espèces distinctes.",
              ],
              box: { label: "À retenir", text: "Isolement reproducteur : avant la fécondation (géographique, temporel, comportemental, mécanique, gamétique) ou après (hybride non viable ou stérile, comme le mulet)." },
            },
            {
              heading: "Comment naissent les espèces",
              paragraphs: [
                "Dans la spéciation dite géographique (allopatrique), une population est séparée en deux par une barrière physique. Les flux de gènes cessent. Dans chaque sous-population, de nouvelles mutations apparaissent, la dérive génétique agit au hasard et la sélection naturelle favorise des allèles différents selon les milieux. Les deux populations divergent génétiquement. Si la divergence devient assez forte, elles ne peuvent plus se reproduire entre elles, même lorsque la barrière disparaît : une nouvelle espèce est née.",
                "La spéciation peut aussi se produire sans séparation géographique. En Amérique du Nord, la mouche Rhagoletis pomonella pondait sur les fruits de l'aubépine ; depuis le XIXe siècle, une partie des mouches pond sur les pommes introduites. Comme les mouches s'accouplent sur leur fruit hôte, et que les pommes mûrissent plus tôt que les fruits de l'aubépine, les deux groupes se croisent de moins en moins : une spéciation semble en cours.",
                "Chez les plantes, une hybridation suivie d'un doublement du nombre de chromosomes (polyploïdisation) peut créer une espèce nouvelle en une seule étape. La spartine anglaise (Spartina anglica), apparue en Angleterre à la fin du XIXe siècle, en est un exemple célèbre.",
              ],
            },
            {
              heading: "Un processus continu",
              paragraphs: [
                "La spéciation est le plus souvent progressive : entre deux populations encore interfécondes et deux espèces totalement isolées, on observe tous les intermédiaires. C'est pourquoi la limite entre deux espèces est parfois difficile à tracer. Le pouillot verdâtre, un petit oiseau d'Asie, en offre une illustration : ses populations forment un anneau autour du plateau tibétain, les populations voisines se croisent, mais les deux formes qui se rejoignent au nord, en Sibérie, ne se reproduisent pas entre elles.",
                "La spéciation est l'aboutissement de l'évolution des génomes au sein des populations : mutations, dérive, sélection et migrations, combinées à l'isolement, produisent la diversité des espèces.",
              ],
            },
          ],
          keyPoints: [
            "Une espèce est une population d'individus suffisamment isolés génétiquement des autres populations.",
            "Critère biologique : interfécondité et descendance viable et fertile ; il ne s'applique ni aux organismes asexués ni aux fossiles.",
            "La spéciation suppose un isolement reproducteur : arrêt des flux de gènes.",
            "Barrières avant fécondation (géographique, temporelle, comportementale) ou après (hybride stérile, comme le mulet).",
            "Après séparation, mutations, dérive et sélection font diverger les populations jusqu'à l'isolement.",
            "Une espèce n'existe que pendant un temps fini.",
          ],
          example: {
            statement: "Le cheval a 2n = 64 chromosomes et l'âne 2n = 62. Calculez le nombre de chromosomes du mulet, issu du croisement d'un âne et d'une jument, et expliquez pourquoi il est stérile. Que peut-on en conclure sur le statut du cheval et de l'âne ?",
            solution: [
              "Le mulet est issu d'un spermatozoïde d'âne (n = 31) et d'un ovule de jument (n = 32).",
              "Il possède donc 31 + 32 = 63 chromosomes.",
              "Ses chromosomes proviennent de deux espèces différentes : ils ne forment pas de paires homologues complètes, et le nombre total est impair.",
              "En prophase I de méiose, les chromosomes ne peuvent pas s'apparier correctement et la répartition des chromosomes échoue : le mulet ne produit pas de gamètes fonctionnels.",
              "Conclusion : le mulet a 63 chromosomes et il est stérile ; le cheval et l'âne peuvent se croiser mais sans descendance fertile, ce sont deux espèces distinctes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez le type de barrière reproductive dans chaque cas. (a) Deux espèces de grenouilles vivent dans la même mare, mais l'une se reproduit en mars et l'autre en juin. (b) Deux populations d'un escargot sont séparées par une chaîne de montagnes. (c) Les femelles d'une espèce de criquet ne répondent qu'au chant des mâles de leur propre espèce.",
              hint: "Distinguez une séparation dans l'espace, dans le temps ou par le comportement.",
              solution: [
                "(a) Les périodes de reproduction ne se recouvrent pas : barrière temporelle.",
                "(b) Une montagne empêche les rencontres : barrière géographique.",
                "(c) Les femelles ne reconnaissent que le chant de leur espèce : barrière comportementale.",
              ],
            },
            {
              level: 2,
              statement: "Deux populations de souris, A et B, ont été séparées pendant très longtemps par un fleuve. On réalise des croisements en élevage. A × A et B × B donnent des descendants fertiles. A × B donne des descendants viables, mais tous stériles. (1) A et B appartiennent-elles à la même espèce ? (2) Proposez un scénario expliquant cette situation.",
              hint: "Appliquez le critère biologique de l'espèce, puis décrivez ce qui s'est passé pendant la séparation.",
              solution: [
                "(1) Les croisements A × B donnent des hybrides stériles : il n'y a pas de descendance fertile, donc un isolement reproducteur après la fécondation. A et B sont deux espèces distinctes.",
                "(2) À l'origine, une seule population vivait des deux côtés. Le fleuve a séparé deux sous-populations et interrompu les flux de gènes.",
                "Pendant leur isolement, chaque sous-population a accumulé des mutations différentes, subi la dérive génétique et une sélection naturelle propre à son milieu.",
                "Les génomes ont tant divergé que la méiose des hybrides ne fonctionne plus correctement.",
                "Conclusion : c'est une spéciation géographique (allopatrique), qui a abouti à deux espèces.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Sur les côtes du sud de l'Angleterre, une spartine locale, Spartina maritima (2n = 60), est entrée en contact au XIXe siècle avec une spartine américaine introduite, Spartina alterniflora (2n = 62). Un hybride stérile, à 61 chromosomes, a d'abord été observé, puis une nouvelle plante, Spartina anglica, fertile, à environ 122 chromosomes, qui s'est répandue sur les côtes. (1) Expliquez le nombre de chromosomes et la stérilité de l'hybride. (2) Expliquez comment Spartina anglica a pu se former et pourquoi elle est fertile. (3) Montrez qu'il s'agit d'une nouvelle espèce.",
              hint: "Additionnez les nombres de chromosomes des gamètes des deux parents, puis pensez à ce que permet un doublement du nombre de chromosomes pour l'appariement en méiose.",
              solution: [
                "(1) L'hybride reçoit n = 30 chromosomes de S. maritima et n = 31 de S. alterniflora : 30 + 31 = 61. Ces chromosomes, venus de deux espèces, n'ont pas d'homologue exact : ils s'apparient mal en méiose, d'où des gamètes anormaux et la stérilité.",
                "(2) Un doublement accidentel du nombre de chromosomes de l'hybride (2 × 61 = 122) a donné une plante dont chaque chromosome possède désormais un homologue identique.",
                "La méiose peut alors se dérouler normalement, les gamètes sont fonctionnels : S. anglica est fertile.",
                "(3) S. anglica, avec environ 122 chromosomes, ne peut pas donner de descendance fertile avec ses espèces parentes (un croisement donnerait des descendants au nombre de chromosomes déséquilibré). Elle est isolée génétiquement.",
                "Conclusion : hybridation suivie d'une polyploïdisation, S. anglica est une nouvelle espèce apparue en quelques décennies, sans séparation géographique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une spéciation géographique.",
            items: [
              "Une population unique échange librement ses allèles",
              "Une barrière géographique sépare la population en deux",
              "Les flux de gènes entre les deux groupes s'interrompent",
              "Mutations, dérive et sélection font diverger les deux groupes",
              "Un isolement reproducteur s'installe",
              "Remis en contact, les deux groupes ne se reproduisent plus : ce sont deux espèces",
            ],
          },
          quiz: [
            {
              q: "Selon le critère biologique, deux individus appartiennent à la même espèce si :",
              options: ["ils se ressemblent beaucoup", "ils vivent au même endroit", "ils ont le même nombre de chromosomes", "ils ont une descendance fertile"],
              answer: 3,
              why: "Le critère biologique repose sur l'interfécondité et la fertilité de la descendance, pas sur la ressemblance ni le lieu.",
            },
            {
              q: "Combien de chromosomes possède le mulet (âne 2n = 62, cheval 2n = 64) ?",
              options: ["126", "63", "62", "64"],
              answer: 1,
              why: "Il reçoit 31 chromosomes de l'âne et 32 de la jument : 31 + 32 = 63.",
            },
            {
              q: "Quelle est la condition indispensable à une spéciation ?",
              options: ["L'arrêt des flux de gènes", "Une montagne", "Une mutation létale", "Un changement brutal de climat"],
              answer: 0,
              why: "Sans isolement reproducteur, les échanges d'allèles maintiennent l'unité génétique des populations ; la barrière peut être géographique ou non.",
            },
            {
              q: "Pourquoi la définition biologique de l'espèce ne s'applique-t-elle pas aux fossiles ?",
              options: ["Ils n'ont pas d'ADN", "Ils sont trop anciens pour être classés", "On ne peut pas tester leur interfécondité", "Ils appartiennent tous à des espèces disparues"],
              answer: 2,
              why: "On ne peut pas observer leur reproduction : on les classe d'après d'autres critères, comme la morphologie.",
            },
            {
              q: "Chez Rhagoletis pomonella, qu'est-ce qui isole les mouches des pommiers de celles des aubépines ?",
              options: ["Une chaîne de montagnes", "Un fleuve infranchissable", "Une stérilité totale de tous les hybrides", "Le fruit hôte et sa date de maturité"],
              answer: 3,
              why: "Les mouches s'accouplent sur leur fruit hôte, et pommes et fruits d'aubépine mûrissent à des dates différentes : l'isolement est surtout temporel et écologique.",
            },
          ],
          trap: "Croire qu'une barrière géographique suffit à faire deux espèces. Tant que les populations peuvent encore se reproduire entre elles et avoir une descendance fertile, elles restent une même espèce ; c'est l'isolement reproducteur, résultat d'une divergence génétique, qui fait l'espèce.",
          method: "Pour rédiger un scénario de spéciation, suivez toujours la même chaîne logique : population initiale, séparation (géographique ou non), arrêt des flux de gènes, divergence par mutations, dérive et sélection, isolement reproducteur, test du critère de l'espèce. Chaque maillon doit s'appuyer sur un document.",
        },
      ],
    },
    /* ==================================================================== */
    /* D'AUTRES MÉCANISMES DE LA DIVERSITÉ DU VIVANT                         */
    /* ==================================================================== */
    {
      id: 'autres-mecanismes-diversite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'associations-symbioses',
          title: 'Associations et symbioses entre êtres vivants',
          minutes: 25,
          objectives: [
            "Distinguer les principales associations entre êtres vivants : parasitisme, commensalisme, mutualisme et symbiose.",
            "Expliquer, à partir d'exemples, que les symbioses confèrent de nouvelles capacités aux partenaires.",
            "Montrer que la diversification du vivant ne repose pas toujours sur une modification des génomes.",
          ],
          course: [
            {
              heading: "Les associations entre êtres vivants",
              paragraphs: [
                "Les êtres vivants d'espèces différentes nouent des relations variées. Dans le parasitisme, un organisme, le parasite, vit aux dépens d'un autre, l'hôte, qu'il affaiblit (le ténia dans l'intestin, le mildiou sur la vigne). Dans le commensalisme, un partenaire en tire profit sans nuire à l'autre ni l'aider. Dans le mutualisme, les deux partenaires tirent un bénéfice de l'association.",
                "On appelle symbiose une association durable et étroite entre deux organismes d'espèces différentes, à bénéfices réciproques. Elle est souvent indispensable à l'un des partenaires, voire aux deux. Les endosymbioses à l'origine des mitochondries et des chloroplastes en sont des cas extrêmes, mais beaucoup de symbioses actuelles associent des partenaires qui gardent chacun leur génome.",
              ],
              box: { label: "Définition", text: "Une symbiose est une association durable et étroite entre des organismes d'espèces différentes, dans laquelle chaque partenaire tire un bénéfice. Parasitisme : l'un profite au détriment de l'autre. Commensalisme : l'un profite sans effet sur l'autre." },
            },
            {
              heading: "Des symbioses chez les végétaux",
              paragraphs: [
                "Les mycorhizes sont des associations entre des champignons du sol et les racines de la grande majorité des plantes terrestres. Les filaments du champignon, très fins et très nombreux, explorent un grand volume de sol et apportent à la plante de l'eau et des ions minéraux, notamment des phosphates. En échange, la plante fournit au champignon des matières organiques (sucres) produites par la photosynthèse. Des fossiles montrent que des associations de ce type existaient déjà chez les premières plantes terrestres, il y a plus de 400 millions d'années.",
                "Les Fabacées (pois, haricot, luzerne, soja) portent sur leurs racines des nodosités qui abritent des bactéries du genre Rhizobium. Ces bactéries fixent le diazote de l'air (N₂), inutilisable par la plante, et le transforment en composés azotés qu'elle peut utiliser ; la plante leur fournit des sucres. C'est pourquoi ces plantes poussent sur des sols pauvres en azote et enrichissent le sol, ce qui est utilisé en agriculture.",
                "Un lichen associe un champignon et une algue verte ou une cyanobactérie. Le champignon apporte eau, sels minéraux et protection ; le partenaire photosynthétique fournit des sucres. Le lichen a une forme et des capacités que n'a aucun des deux partenaires seul : il colonise des milieux hostiles comme la roche nue.",
              ],
            },
            {
              heading: "Des symbioses chez les animaux",
              paragraphs: [
                "Les coraux constructeurs de récifs abritent dans leurs cellules des algues unicellulaires, les zooxanthelles. Par la photosynthèse, elles fournissent au corail une grande partie de sa matière organique, et le corail leur offre abri et éléments minéraux. Lors de vagues de chaleur, le corail expulse ses algues : il blanchit et peut mourir. Les pucerons, qui se nourrissent de sève élaborée pauvre en certains acides aminés, hébergent des bactéries (Buchnera) qui les fabriquent pour eux ; ces bactéries sont transmises de la mère à ses descendants.",
                "Votre organisme vit lui aussi en association avec un microbiote : l'intestin humain abrite de l'ordre de plusieurs dizaines de milliers de milliards de bactéries, à peu près autant que de cellules humaines dans le corps. Ce microbiote digère des fibres que nos enzymes ne savent pas dégrader, produit certaines vitamines, limite l'installation de microorganismes pathogènes et participe à la maturation du système immunitaire. De même, les ruminants digèrent la cellulose grâce aux microorganismes de leur panse.",
              ],
            },
            {
              heading: "Une diversification sans modification des génomes",
              paragraphs: [
                "Dans toutes ces associations, des êtres vivants acquièrent des capacités nouvelles (fixer l'azote, réaliser la photosynthèse, digérer la cellulose, coloniser un milieu) sans que leur propre génome soit modifié. Le phénotype observé est celui de l'association entière. Les symbioses sont donc un mécanisme de diversification du vivant qui complète les mutations, les brassages et les transferts de gènes.",
              ],
              box: { label: "À retenir", text: "Les symbioses permettent à des organismes d'acquérir de nouvelles fonctions sans modifier leur génome : elles contribuent à la diversité du vivant, au même titre que les mécanismes génétiques." },
            },
          ],
          keyPoints: [
            "Parasitisme : un partenaire profite au détriment de l'autre ; commensalisme : l'un profite sans effet sur l'autre ; mutualisme : bénéfice réciproque.",
            "Symbiose : association durable et étroite à bénéfices réciproques.",
            "Mycorhizes : champignon et racines, échange d'eau et d'ions minéraux contre des sucres.",
            "Nodosités des Fabacées : les Rhizobium fixent le diazote de l'air.",
            "Lichens, coraux et zooxanthelles, pucerons et Buchnera, microbiote : autant de capacités nouvelles.",
            "Les symbioses diversifient le vivant sans modifier les génomes des partenaires.",
          ],
          example: {
            statement: "On cultive des plants de luzerne (une Fabacée) dans un sol pauvre en azote. Lot 1 : sol stérilisé, sans bactéries. Lot 2 : même sol, additionné de bactéries Rhizobium. Après plusieurs semaines, les plants du lot 2, munis de nodosités, sont vigoureux ; ceux du lot 1, sans nodosités, sont chétifs et jaunissants. Interprétez ces résultats.",
            solution: [
              "Les deux lots ne diffèrent que par la présence de Rhizobium : c'est la seule variable testée.",
              "Le sol est pauvre en azote : sans apport, la plante manque d'azote, nécessaire pour fabriquer ses protéines et sa chlorophylle, d'où un aspect chétif et jaunissant.",
              "Dans le lot 2, les bactéries ont colonisé les racines et formé des nodosités ; elles y fixent le diazote de l'air et fournissent à la plante des composés azotés.",
              "En retour, la plante fournit aux bactéries les sucres issus de sa photosynthèse.",
              "Conclusion : l'association symbiotique entre la luzerne et Rhizobium permet à la plante de se développer sur un sol pauvre en azote, une capacité qu'elle n'a pas seule.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque association : parasitisme, commensalisme ou symbiose. (a) Le ténia vit dans l'intestin humain et absorbe une partie des nutriments. (b) Un champignon et une algue forment un lichen, chacun profitant de l'autre. (c) Un petit poisson se nourrit des restes de repas d'un requin, sans effet sur celui-ci.",
              hint: "Pour chaque partenaire, demandez-vous s'il gagne, s'il perd, ou s'il n'est pas affecté.",
              solution: [
                "(a) Le ténia profite, l'être humain est affaibli : parasitisme.",
                "(b) Les deux partenaires profitent durablement de l'association : symbiose.",
                "(c) Le poisson profite, le requin n'est pas affecté : commensalisme.",
              ],
            },
            {
              level: 2,
              statement: "On cultive des jeunes pins dans un sol pauvre en phosphates. Après six mois, la masse sèche des plants mycorhizés est de 5,0 g et celle des plants non mycorhizés de 2,0 g. La teneur en phosphore des aiguilles est de 1,2 mg par gramme chez les plants mycorhizés et de 0,6 mg par gramme chez les autres. (1) Calculez le rapport des masses et celui des teneurs en phosphore. (2) Interprétez.",
              hint: "Un rapport s'obtient en divisant la valeur du lot mycorhizé par celle du lot témoin.",
              solution: [
                "(1) Rapport des masses : 5,0 ÷ 2,0 = 2,5. Rapport des teneurs en phosphore : 1,2 ÷ 0,6 = 2.",
                "(2) Les plants mycorhizés sont 2,5 fois plus lourds et leurs aiguilles contiennent deux fois plus de phosphore.",
                "Les filaments du champignon explorent un grand volume de sol et prélèvent des ions phosphate qu'ils transmettent à la plante.",
                "Mieux approvisionné en phosphore, un élément indispensable à la croissance, le pin se développe davantage ; en échange, il fournit des sucres au champignon.",
                "Conclusion : la mycorhize améliore la nutrition minérale et la croissance du pin, ce qui illustre le bénéfice d'une symbiose.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Les pucerons se nourrissent de sève élaborée, riche en sucres mais pauvre en certains acides aminés indispensables. Leurs cellules abritent des bactéries Buchnera, transmises de la mère aux descendants. Expérience : lot A, pucerons normaux sur une plante ; lot B, pucerons traités par un antibiotique qui élimine les Buchnera, sur la même plante ; lot C, pucerons traités comme le lot B, mais nourris d'une sève artificielle enrichie en acides aminés indispensables. Résultats : en A, croissance et reproduction normales ; en B, croissance très faible et quasi absence de descendants ; en C, croissance et reproduction nettement améliorées par rapport à B. Expliquez la relation entre le puceron et Buchnera.",
              hint: "Comparez A et B, puis B et C : chaque comparaison ne fait varier qu'un facteur.",
              solution: [
                "Comparaison A et B : seule la présence des Buchnera change. Sans elles, le puceron grandit peu et ne se reproduit presque plus : les bactéries sont indispensables au puceron.",
                "Comparaison B et C : sans Buchnera dans les deux cas, l'ajout d'acides aminés indispensables améliore nettement la croissance et la reproduction.",
                "On en déduit que les Buchnera fournissent au puceron les acides aminés indispensables qui manquent dans la sève.",
                "La bactérie, de son côté, reçoit un abri et des nutriments dans les cellules de l'hôte, et elle est transmise à la génération suivante par la mère.",
                "Conclusion : il s'agit d'une symbiose (ici une endosymbiose) obligatoire, qui permet au puceron d'exploiter une ressource alimentaire déséquilibrée, sans modification de son propre génome.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque symbiose à ses partenaires ou à son bénéfice.",
            pairs: [
              { left: "Lichen", right: "Champignon associé à une algue verte ou une cyanobactérie" },
              { left: "Mycorhize", right: "Champignon associé aux racines, apport d'eau et de phosphates" },
              { left: "Nodosité", right: "Bactéries Rhizobium qui fixent le diazote de l'air" },
              { left: "Zooxanthelles", right: "Algues unicellulaires qui nourrissent le corail par photosynthèse" },
              { left: "Buchnera", right: "Bactéries qui fournissent aux pucerons des acides aminés" },
              { left: "Microbiote intestinal", right: "Bactéries qui digèrent des fibres et produisent des vitamines" },
            ],
          },
          quiz: [
            {
              q: "Une symbiose est une association :",
              options: ["où un partenaire nuit à l'autre", "brève et occasionnelle", "durable, à bénéfices réciproques", "sans aucun effet sur les deux partenaires"],
              answer: 2,
              why: "La symbiose est durable et étroite, et chaque partenaire en tire un bénéfice.",
            },
            {
              q: "Que fournit le champignon à la plante dans une mycorhize ?",
              options: ["De l'eau et des ions minéraux", "Des sucres issus de la photosynthèse", "De la lumière", "Du dioxygène"],
              answer: 0,
              why: "Les filaments du champignon prélèvent eau et ions minéraux dans le sol ; c'est la plante qui fournit les sucres.",
            },
            {
              q: "Pourquoi les Fabacées poussent-elles sur des sols pauvres en azote ?",
              options: ["Elles n'ont pas besoin d'azote", "Elles absorbent directement l'azote de l'air par leurs feuilles", "Elles sont parasites d'autres plantes", "Des bactéries de leurs nodosités fixent le diazote"],
              answer: 3,
              why: "Les Rhizobium des nodosités transforment le diazote de l'air en composés azotés utilisables par la plante.",
            },
            {
              q: "Le blanchissement des coraux correspond à :",
              options: ["leur reproduction", "l'expulsion de leurs zooxanthelles", "une croissance rapide", "un dépôt de calcaire sur leur squelette"],
              answer: 1,
              why: "Sous l'effet de la chaleur, le corail expulse ses algues symbiotiques, qui lui fournissaient une grande partie de sa matière organique.",
            },
            {
              q: "En quoi les symbioses contribuent-elles à la diversité du vivant ?",
              options: ["Elles provoquent des mutations", "Elles créent des capacités nouvelles sans modifier les génomes", "Elles augmentent le nombre de chromosomes", "Elles remplacent la reproduction sexuée chez les deux partenaires"],
              answer: 1,
              why: "L'association donne aux partenaires des fonctions qu'ils n'ont pas seuls, sans changement de leur génome.",
            },
          ],
          trap: "Employer « symbiose » pour toute association entre deux espèces. Une symbiose suppose un bénéfice réciproque et une association durable ; un parasite qui affaiblit son hôte n'est pas un symbiote au sens du programme.",
          method: "Pour caractériser une association, construisez un petit tableau à deux colonnes (partenaire 1, partenaire 2) et notez pour chacun ce qu'il reçoit et ce qu'il donne : le signe de chaque bilan (+, 0 ou -) vous donne directement le type d'association.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'transmission-culturelle',
          title: 'Les comportements transmis par apprentissage',
          minutes: 25,
          objectives: [
            "Distinguer un comportement inné d'un comportement acquis par apprentissage.",
            "Expliquer, à partir d'exemples animaux, que certains comportements se transmettent d'un individu à l'autre par apprentissage social.",
            "Montrer que cette transmission culturelle, indépendante de toute modification du génome, contribue à la diversité du vivant.",
          ],
          course: [
            {
              heading: "Comportements innés et comportements acquis",
              paragraphs: [
                "Un comportement inné se manifeste chez tous les individus d'une espèce, sans expérience préalable : le nouveau-né humain qui tète, l'araignée qui tisse sa toile. Il dépend directement du programme génétique et du développement. Un comportement acquis, au contraire, est appris au cours de la vie, par l'expérience personnelle ou au contact d'autres individus.",
                "Lorsqu'un comportement est appris en observant ou en imitant d'autres individus, on parle d'apprentissage social. S'il se transmet ainsi d'individu à individu, et de génération en génération, il s'agit d'une transmission culturelle. Elle ne passe pas par les gènes : la capacité d'apprendre est héréditaire, mais le contenu de ce qui est appris ne l'est pas.",
              ],
              box: { label: "Définition", text: "La transmission culturelle est la transmission d'un comportement d'un individu à un autre par apprentissage social (observation, imitation), sans modification du génome." },
            },
            {
              heading: "Le chant des oiseaux",
              paragraphs: [
                "Chez de nombreux passereaux, comme le pinson des arbres ou le diamant mandarin, le jeune mâle apprend son chant en écoutant un adulte, son tuteur, pendant une période sensible de sa jeunesse. Un jeune élevé à l'abri de tout chant de son espèce produit, adulte, un chant simplifié et anormal ; un jeune privé d'audition produit un chant encore plus altéré. L'oiseau doit donc entendre le chant de son espèce et entendre sa propre production pour la corriger.",
                "Conséquence : au sein d'une même espèce, les populations de régions différentes chantent des variantes locales, de véritables dialectes, transmis d'une génération à l'autre. Les études menées en Californie sur le bruant à couronne blanche l'ont bien montré. Chez d'autres oiseaux, comme les poules ou les pigeons, les cris sont au contraire innés et se développent normalement sans modèle.",
              ],
            },
            {
              heading: "Des innovations qui se répandent",
              paragraphs: [
                "Au Japon, sur l'île de Koshima, des macaques étaient nourris de patates douces déposées sur la plage. En 1953, une jeune femelle s'est mise à laver les patates dans l'eau avant de les manger. Ce comportement s'est répandu dans le groupe, d'abord chez les jeunes et les proches de cette femelle, puis s'est transmis aux générations suivantes.",
                "En Afrique de l'Ouest, par exemple dans la forêt de Taï en Côte d'Ivoire, des chimpanzés cassent des noix à l'aide de pierres ou de morceaux de bois utilisés comme marteaux sur une enclume. Ce comportement n'est pas observé chez les chimpanzés d'Afrique de l'Est, alors que noix et pierres existent aussi dans certains de leurs milieux. Les jeunes mettent des années à maîtriser la technique en observant leur mère. Au Royaume-Uni, des mésanges ont appris, à partir des années 1920, à percer l'opercule des bouteilles de lait déposées devant les portes, et ce comportement s'est diffusé de proche en proche.",
              ],
              box: { label: "Repère", text: "Transmission verticale : des parents aux jeunes. Transmission oblique : d'adultes non apparentés aux jeunes. Transmission horizontale : entre individus d'une même génération." },
            },
            {
              heading: "Une autre source de diversité",
              paragraphs: [
                "La transmission culturelle crée des différences de comportement entre populations d'une même espèce, sans différence génétique : c'est une forme de diversité qui ne repose pas sur les génomes. Elle est aussi beaucoup plus rapide que l'évolution génétique : un comportement nouveau peut se répandre en quelques années, alors qu'un allèle avantageux met de nombreuses générations à devenir fréquent.",
                "Chez l'être humain, la transmission culturelle (langage, techniques, savoirs) atteint une ampleur exceptionnelle. Elle peut même influencer l'évolution génétique : dans les populations qui pratiquent l'élevage laitier depuis des milliers d'années, les allèles qui permettent de digérer le lactose à l'âge adulte sont devenus fréquents, car ils étaient avantageux dans ce contexte culturel.",
              ],
              box: { label: "À retenir", text: "Des comportements appris se transmettent par apprentissage social. Cette transmission culturelle, rapide et indépendante des génomes, contribue à la diversité du vivant." },
            },
          ],
          keyPoints: [
            "Comportement inné : présent sans apprentissage ; comportement acquis : appris au cours de la vie.",
            "La transmission culturelle passe par l'apprentissage social (observation, imitation), pas par les gènes.",
            "Chant des passereaux : appris auprès d'un tuteur pendant une période sensible, d'où des dialectes régionaux.",
            "Exemples : lavage des patates douces chez les macaques de Koshima, cassage de noix chez les chimpanzés d'Afrique de l'Ouest.",
            "La transmission culturelle est rapide et crée une diversité entre populations d'une même espèce.",
          ],
          example: {
            statement: "Chez les chimpanzés, le cassage de noix avec des outils est observé dans des populations d'Afrique de l'Ouest mais pas dans celles d'Afrique de l'Est, alors que des noix et des pierres existent dans les deux régions. Les jeunes apprennent cette technique pendant plusieurs années en observant leur mère. Montrez qu'il s'agit d'un comportement transmis culturellement.",
            solution: [
              "Le comportement n'est pas présent chez tous les chimpanzés : ce n'est pas un comportement inné propre à l'espèce.",
              "Il est absent dans des populations qui disposent pourtant des mêmes ressources : sa présence ne s'explique pas simplement par le milieu.",
              "Les jeunes l'acquièrent progressivement en observant leur mère : il s'agit d'un apprentissage social.",
              "Il se maintient de génération en génération dans les populations où il existe : c'est une transmission culturelle, ici verticale (de la mère au jeune).",
              "Conclusion : le cassage de noix est un comportement acquis, transmis culturellement, qui différencie des populations d'une même espèce sans modification de leur génome.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces comportements en innés ou acquis. (a) Un poussin picore dès l'éclosion. (b) Un jeune pinson reproduit le chant de son tuteur. (c) Une araignée tisse une toile typique de son espèce sans jamais en avoir vu. (d) Un jeune chimpanzé utilise une brindille pour pêcher des termites après avoir observé sa mère.",
              hint: "Un comportement inné apparaît sans modèle ni expérience préalable.",
              solution: [
                "(a) Inné : le poussin picore sans apprentissage.",
                "(b) Acquis : le chant est appris auprès d'un tuteur.",
                "(c) Inné : la toile est tissée sans modèle.",
                "(d) Acquis : la technique est apprise par observation de la mère, c'est un apprentissage social.",
              ],
            },
            {
              level: 2,
              statement: "On élève trois groupes de jeunes pinsons mâles. Groupe 1 : élevés avec des adultes chanteurs. Groupe 2 : élevés isolés, sans entendre aucun chant de pinson. Groupe 3 : rendus sourds très jeunes, avant d'avoir entendu un chant. Une fois adultes, les mâles du groupe 1 produisent un chant normal, ceux du groupe 2 un chant simplifié, ceux du groupe 3 un chant très altéré. Interprétez ces résultats.",
              hint: "Comparez les groupes deux à deux : qu'apporte l'écoute d'un modèle, et qu'apporte l'écoute de son propre chant ?",
              solution: [
                "Groupes 1 et 2 : seuls les oiseaux ayant entendu des adultes chantent normalement. L'écoute d'un modèle est donc nécessaire à l'acquisition du chant complet : le chant est en partie appris.",
                "Le groupe 2 produit tout de même un chant simplifié : une base du chant est innée, l'apprentissage la complète.",
                "Groupes 2 et 3 : les oiseaux sourds, qui ne peuvent pas entendre leur propre chant, chantent encore moins bien. L'oiseau a besoin d'entendre sa production pour la corriger.",
                "Conclusion : le chant du pinson associe une composante innée et un apprentissage auprès d'un tuteur ; transmis d'une génération à l'autre, il fait l'objet d'une transmission culturelle.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Sur l'île de Koshima, au Japon, une jeune femelle macaque a commencé en 1953 à laver dans l'eau les patates douces déposées sur la plage. Les années suivantes, ce comportement s'est répandu d'abord chez des jeunes du même âge et chez des proches de cette femelle, puis chez la plupart des membres du groupe, à l'exception de nombreux adultes âgés ; les petits nés ensuite l'ont acquis auprès de leur mère. (1) Montrez que ce comportement n'a pas une origine génétique. (2) Identifiez les modes de transmission en jeu. (3) Expliquez en quoi cet exemple illustre une contribution à la diversité du vivant.",
              hint: "Comparez la vitesse de diffusion du comportement avec la durée d'une génération chez le macaque, et repérez qui l'apprend à qui.",
              solution: [
                "(1) Le comportement est apparu chez une femelle puis s'est répandu en quelques années, chez des individus de la même génération qui ne descendent pas d'elle. Un allèle ne peut se transmettre qu'aux descendants, et sur de nombreuses générations : une telle diffusion ne peut pas être génétique. Le comportement est appris.",
                "(2) Entre jeunes du même âge, la transmission est horizontale. De la mère aux petits nés ensuite, elle est verticale. Les adultes âgés, qui l'ont peu adopté, montrent que l'apprentissage se fait surtout chez les jeunes.",
                "Ces transmissions reposent sur l'observation et l'imitation : c'est un apprentissage social, donc une transmission culturelle.",
                "(3) Ce groupe de macaques se distingue désormais d'autres groupes de la même espèce par un comportement, sans différence génétique.",
                "Conclusion : la transmission culturelle crée, rapidement et sans modification du génome, une diversité de comportements entre populations : c'est un mécanisme de diversification du vivant.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Comportements, gènes et culture.",
            statements: [
              { text: "Une transmission culturelle modifie le génome des individus qui apprennent.", true: false, why: "L'apprentissage ne change pas les allèles : seul le comportement se transmet." },
              { text: "Un jeune pinson isolé de tout chant produit un chant anormal.", true: true, why: "Il lui manque le modèle d'un tuteur pendant la période sensible." },
              { text: "Tous les chimpanzés cassent des noix avec des outils.", true: false, why: "Ce comportement n'est observé que dans certaines populations, notamment d'Afrique de l'Ouest." },
              { text: "Un comportement appris peut se répandre en quelques années dans un groupe.", true: true, why: "La transmission culturelle est bien plus rapide que l'évolution génétique." },
              { text: "Chez les passereaux, des dialectes régionaux du chant peuvent exister au sein d'une même espèce.", true: true, why: "Le chant est appris localement et transmis de génération en génération." },
              { text: "Un comportement inné doit être appris auprès d'un adulte.", true: false, why: "Par définition, un comportement inné se manifeste sans apprentissage ni modèle." },
            ],
          },
          quiz: [
            {
              q: "Une transmission culturelle se fait :",
              options: ["par apprentissage social", "par les gamètes", "par mutation", "par transfert horizontal de gènes"],
              answer: 0,
              why: "Le comportement passe d'un individu à l'autre par observation et imitation, sans intervention des gènes.",
            },
            {
              q: "Qu'observe-t-on chez un jeune pinson élevé sans entendre de chant de son espèce ?",
              options: ["Un chant parfaitement normal", "Une absence totale de son", "Un chant simplifié et anormal", "Le chant typique d'une autre espèce"],
              answer: 2,
              why: "Une base du chant est innée, mais sans tuteur le jeune ne peut pas apprendre le chant complet de son espèce.",
            },
            {
              q: "La transmission d'un comportement d'une mère à ses petits est dite :",
              options: ["horizontale", "verticale", "oblique", "génétique"],
              answer: 1,
              why: "Elle va d'une génération à la suivante, entre parent et descendant : elle est verticale.",
            },
            {
              q: "Pourquoi le lavage des patates douces à Koshima n'est-il pas d'origine génétique ?",
              options: ["Parce qu'il est apparu chez une femelle", "Parce que les patates douces sont importées", "Parce que tous les macaques le pratiquent", "Parce qu'il s'est vite diffusé"],
              answer: 3,
              why: "Un allèle ne se répand que par la descendance, sur de nombreuses générations ; une diffusion aussi rapide, y compris entre individus non apparentés, est culturelle.",
            },
            {
              q: "Quel est l'apport de la transmission culturelle à la diversité du vivant ?",
              options: ["Elle crée de nouveaux allèles", "Elle augmente le nombre de chromosomes", "Elle différencie des populations sans changer leurs génomes", "Elle empêche toute forme d'évolution génétique des populations"],
              answer: 2,
              why: "Des populations d'une même espèce peuvent avoir des comportements différents, transmis par apprentissage, sans différence génétique.",
            },
          ],
          trap: "Croire que la transmission culturelle est réservée à l'être humain, ou qu'un comportement appris devient héréditaire. De nombreux animaux transmettent des comportements par apprentissage, et ce qui est appris ne s'inscrit pas dans les gènes.",
          method: "Pour montrer qu'un comportement est culturel, réunissez trois arguments : il n'est pas présent chez tous les individus de l'espèce, il est acquis au contact d'autres individus (observation, imitation), et il se transmet plus vite ou plus largement que ne le permettrait la génétique.",
        },
      ],
    },
  ],
}
