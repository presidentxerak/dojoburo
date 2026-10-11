import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-1re',
  chapters: [
    /* ==================================================================== */
    /* LES DIVISIONS CELLULAIRES DES EUCARYOTES                               */
    /* ==================================================================== */
    {
      id: 'divisions-cellulaires',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'chromosomes-cycle',
          title: 'Chromosomes et cycle cellulaire',
          minutes: 30,
          objectives: [
            "Décrire un chromosome comme une molécule d'ADN associée à des protéines, et distinguer un chromosome à une chromatide d'un chromosome à deux chromatides.",
            "Lire un caryotype : identifier les paires de chromosomes homologues, les autosomes et les chromosomes sexuels, et en déduire la formule chromosomique.",
            "Distinguer une cellule diploïde (2n) d'une cellule haploïde (n).",
            "Décrire les phases du cycle cellulaire et l'évolution de la quantité d'ADN par cellule au cours de ce cycle.",
          ],
          course: [
            {
              heading: "Le chromosome, une molécule d'ADN condensée",
              paragraphs: [
                "Chez les eucaryotes (animaux, végétaux, champignons), l'information génétique est portée par l'ADN, enfermé dans le noyau des cellules. Chaque chromosome correspond à une seule molécule d'ADN, très longue, associée à des protéines appelées histones. Cet ensemble ADN et protéines forme la chromatine. Mises bout à bout, les molécules d'ADN d'une cellule humaine mesurent environ deux mètres, alors que le noyau ne mesure que quelques micromètres : l'ADN est donc enroulé et replié, un peu comme un fil très long rangé en pelote.",
                "Le degré de condensation varie au cours de la vie de la cellule. Pendant l'interphase, la chromatine est peu condensée et dispersée dans le noyau : les chromosomes ne sont pas visibles individuellement au microscope optique. Au moment de la division, la chromatine se condense fortement et les chromosomes deviennent visibles sous forme de bâtonnets.",
                "Un chromosome peut avoir deux aspects. Avant la réplication de l'ADN, il est formé d'une seule chromatide, c'est-à-dire d'une seule molécule d'ADN. Après la réplication, il est formé de deux chromatides identiques, appelées chromatides sœurs, reliées au niveau du centromère. Un chromosome à deux chromatides reste un seul chromosome : il contient simplement deux copies de la même molécule d'ADN.",
              ],
              box: { label: "Définition", text: "Un chromosome est une molécule d'ADN associée à des protéines. Il comporte une chromatide avant la réplication de l'ADN, et deux chromatides sœurs identiques, unies par le centromère, après la réplication." },
            },
            {
              heading: "Le caryotype et la formule chromosomique",
              paragraphs: [
                "Le caryotype est la représentation ordonnée des chromosomes d'une cellule. On l'obtient en photographiant une cellule en division, au moment où les chromosomes sont les plus condensés, puis en classant les chromosomes par paires, selon leur taille, la position de leur centromère et les bandes colorées qu'ils présentent après coloration.",
                "Chez l'être humain, le caryotype compte 46 chromosomes, soit 23 paires. Les 22 premières paires, identiques chez l'homme et chez la femme, sont les autosomes. La 23e paire est celle des chromosomes sexuels (ou gonosomes) : XX chez la femme, XY chez l'homme. Les deux chromosomes d'une paire sont dits homologues : ils portent les mêmes gènes aux mêmes emplacements (les mêmes locus), mais pas forcément les mêmes versions de ces gènes, appelées allèles. L'un vient du père, l'autre de la mère.",
                "Une cellule qui possède des chromosomes par paires est diploïde : on note 2n son nombre de chromosomes (2n = 46 chez l'être humain). Une cellule qui ne possède qu'un chromosome de chaque paire est haploïde : on note n son nombre de chromosomes (n = 23 pour les gamètes humains). Le nombre de chromosomes est propre à chaque espèce (2n = 8 chez la drosophile, 2n = 14 chez le pois, 2n = 78 chez le chien), mais il ne dit rien de la complexité de l'organisme.",
              ],
              box: { label: "À retenir", text: "Caryotype humain : 2n = 46, soit 22 paires d'autosomes et une paire de chromosomes sexuels (XX ou XY). Les cellules somatiques sont diploïdes (2n), les gamètes sont haploïdes (n = 23)." },
            },
            {
              heading: "Le cycle cellulaire",
              paragraphs: [
                "Une cellule qui se divise passe par une succession d'étapes qui se répète : le cycle cellulaire. Il comprend une longue interphase, elle-même découpée en trois phases (G1, S et G2), puis une phase de division, la mitose (phase M). En phase G1, la cellule grandit et fabrique les molécules dont elle a besoin. En phase S (pour synthèse), elle réplique son ADN. En phase G2, elle se prépare à la division.",
                "Pour des cellules humaines cultivées au laboratoire, un cycle dure de l'ordre de 24 heures, dont environ une heure seulement pour la mitose. Toutes les cellules ne se divisent pas : certaines quittent le cycle et entrent dans un état de repos appelé G0 (c'est le cas de la plupart des neurones), d'autres se divisent souvent (cellules de la base de l'épiderme, cellules de la paroi de l'intestin, cellules de la moelle osseuse).",
                "Si l'on note Q la quantité d'ADN d'une cellule en G1, cette quantité double pendant la phase S et atteint 2Q en G2 : chaque chromosome possède alors deux chromatides. La mitose partage ensuite les chromatides entre deux cellules filles, qui retrouvent chacune la quantité Q. Le passage d'une phase à l'autre est contrôlé par des protéines qui vérifient, à des points de contrôle, que l'ADN est intact et bien répliqué. Lorsque ce contrôle est perdu, des cellules peuvent se diviser de façon anarchique, ce que vous étudierez avec la cancérisation.",
              ],
              box: { label: "Repère", text: "Cycle cellulaire : G1 (Q, chromosomes à une chromatide) → S (réplication, Q devient 2Q) → G2 (2Q, chromosomes à deux chromatides) → mitose (retour à Q dans chaque cellule fille)." },
            },
          ],
          keyPoints: [
            "Un chromosome est une molécule d'ADN associée à des protéines (histones), plus ou moins condensée selon le moment du cycle.",
            "Après réplication, un chromosome compte deux chromatides sœurs identiques unies par le centromère : c'est toujours UN chromosome.",
            "Caryotype humain : 46 chromosomes, 22 paires d'autosomes et une paire de chromosomes sexuels (XX ou XY).",
            "Les chromosomes homologues portent les mêmes gènes aux mêmes locus, avec des allèles éventuellement différents.",
            "Cellule diploïde : 2n chromosomes (par paires) ; cellule haploïde : n chromosomes (un de chaque paire).",
            "Cycle cellulaire : interphase (G1, S, G2) puis mitose ; la quantité d'ADN passe de Q à 2Q en phase S, puis revient à Q.",
          ],
          example: {
            statement: "On mesure la quantité d'ADN d'une cellule humaine en culture au cours du temps (données fictives). De 0 à 11 h, elle reste égale à 6,6 pg. De 11 h à 19 h, elle augmente régulièrement jusqu'à 13,2 pg. De 19 h à 23 h, elle reste égale à 13,2 pg. Vers 24 h, elle chute brutalement à 6,6 pg. Identifiez les phases du cycle et indiquez l'état des chromosomes dans chacune.",
            solution: [
              "De 0 à 11 h, la quantité d'ADN est constante et minimale (Q = 6,6 pg) : c'est la phase G1. Les 46 chromosomes ont une seule chromatide.",
              "De 11 h à 19 h, la quantité d'ADN double progressivement : c'est la phase S, pendant laquelle l'ADN est répliqué.",
              "De 19 h à 23 h, la quantité d'ADN reste maximale (2Q = 13,2 pg) : c'est la phase G2. Les 46 chromosomes ont deux chromatides.",
              "Entre 23 h et 24 h, la quantité d'ADN par cellule est divisée par deux : c'est la mitose, qui partage les chromatides entre deux cellules filles.",
              "Conclusion : le cycle dure environ 24 h ; l'interphase (G1, S, G2) en occupe environ 23 h et la mitose environ 1 h.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le caryotype d'une personne présente 44 autosomes, un chromosome X et un chromosome Y. Indiquez : a) son nombre total de chromosomes et sa formule chromosomique ; b) son sexe ; c) le nombre de paires de chromosomes ; d) le nombre de chromosomes de ses gamètes.",
              hint: "Comptez les chromosomes sexuels avec les autosomes, puis rappelez-vous que les gamètes ne contiennent qu'un chromosome de chaque paire.",
              solution: [
                "a) 44 autosomes + 2 chromosomes sexuels = 46 chromosomes : 2n = 46.",
                "b) Les chromosomes sexuels sont X et Y : c'est un homme.",
                "c) 46 ÷ 2 = 23 paires (22 paires d'autosomes et une paire de chromosomes sexuels).",
                "d) Les gamètes sont haploïdes : n = 23 chromosomes (22 autosomes et un chromosome sexuel, X ou Y).",
                "Résultat : 2n = 46, homme, 23 paires, gamètes à 23 chromosomes.",
              ],
            },
            {
              level: 2,
              statement: "Chez la drosophile, 2n = 8. Une cellule contient Q = 0,36 pg d'ADN en phase G1 (données fictives). Complétez pour chaque moment le nombre de chromosomes, le nombre de chromatides et la quantité d'ADN : a) en G1 ; b) en G2 ; c) dans une cellule fille juste après la mitose. d) Une cellule contient 8 chromosomes formés chacun de deux chromatides : peut-elle être en G1 ?",
              hint: "La réplication (phase S) double le nombre de chromatides et la quantité d'ADN, mais pas le nombre de chromosomes.",
              solution: [
                "a) En G1 : 8 chromosomes à une chromatide, soit 8 chromatides, et Q = 0,36 pg.",
                "b) En G2, après la phase S : 8 chromosomes à deux chromatides, soit 8 × 2 = 16 chromatides, et 2Q = 0,72 pg.",
                "c) Juste après la mitose, chaque cellule fille a 8 chromosomes à une chromatide, soit 8 chromatides, et Q = 0,36 pg.",
                "d) Non : des chromosomes à deux chromatides indiquent que l'ADN a déjà été répliqué. La cellule est en G2 (ou au début de la mitose), pas en G1.",
                "Résultat : le nombre de chromosomes (8) ne change pas au cours du cycle ; seuls le nombre de chromatides et la quantité d'ADN doublent en phase S.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : dans une culture de cellules qui se divisent de façon non synchronisée (chaque cellule est à un moment différent de son cycle), on mesure la quantité d'ADN de chaque cellule. Résultats (données fictives) : 60 % des cellules contiennent la quantité Q, 15 % une quantité comprise entre Q et 2Q, 25 % la quantité 2Q. Le cycle de ces cellules dure 20 h. Document 2 : on ajoute à une autre culture une substance qui bloque la réplication de l'ADN. Questions : a) À quelle(s) phase(s) correspond chaque catégorie de cellules ? b) En admettant que la proportion de cellules dans une phase est proportionnelle à la durée de cette phase, calculez la durée de G1, de S et de l'ensemble G2 et mitose. c) Prévoyez, en justifiant, la quantité d'ADN de la plupart des cellules quelques heures après l'ajout de la substance du document 2.",
              hint: "Une cellule en cours de mitose n'a pas encore partagé son ADN : elle contient encore 2Q, comme une cellule en G2.",
              solution: [
                "a) Les cellules à Q sont en G1 (ADN non répliqué). Les cellules entre Q et 2Q sont en phase S (réplication en cours). Les cellules à 2Q sont en G2 ou en mitose (ADN répliqué, pas encore partagé).",
                "b) G1 : 60 % de 20 h = 0,60 × 20 = 12 h. Phase S : 0,15 × 20 = 3 h. G2 et mitose : 0,25 × 20 = 5 h. Vérification : 12 + 3 + 5 = 20 h.",
                "c) Si la réplication est bloquée, les cellules en G1 ne peuvent pas passer en phase S. Les cellules qui étaient en G2 ou en mitose terminent leur division et donnent des cellules filles à Q, qui s'arrêtent à leur tour en G1.",
                "Quelques heures après l'ajout, la plupart des cellules contiennent donc la quantité Q : elles s'accumulent à la fin de G1, juste avant la phase S.",
                "Conclusion : la mesure de la quantité d'ADN par cellule permet de situer chaque cellule dans son cycle et d'estimer la durée des phases ; la réplication est une étape indispensable avant toute mitose.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Chromatide", right: "Une des deux copies identiques d'un chromosome répliqué" },
              { left: "Centromère", right: "Zone qui relie les deux chromatides sœurs" },
              { left: "Chromosomes homologues", right: "Deux chromosomes d'une même paire, qui portent les mêmes gènes" },
              { left: "Caryotype", right: "Représentation ordonnée des chromosomes d'une cellule, par paires" },
              { left: "Cellule haploïde", right: "Cellule qui ne possède qu'un chromosome de chaque paire" },
              { left: "Phase S", right: "Étape de l'interphase pendant laquelle l'ADN est répliqué" },
            ],
          },
          quiz: [
            {
              q: "Un chromosome à deux chromatides contient :",
              options: ["deux molécules d'ADN identiques", "une seule molécule d'ADN", "deux chromosomes homologues accolés l'un à l'autre", "quatre molécules d'ADN"],
              answer: 0,
              why: "Chaque chromatide est une molécule d'ADN ; après la réplication, le chromosome en possède deux copies identiques.",
            },
            {
              q: "Combien d'autosomes une cellule de peau humaine possède-t-elle ?",
              options: ["23", "46", "44", "22"],
              answer: 2,
              why: "Les cellules somatiques humaines ont 46 chromosomes, dont 2 chromosomes sexuels : il reste 44 autosomes, soit 22 paires.",
            },
            {
              q: "Deux chromosomes homologues :",
              options: ["sont toujours strictement identiques, car issus de la réplication", "portent les mêmes gènes, parfois sous des allèles différents", "proviennent tous deux de la mère", "sont les deux chromatides d'un chromosome"],
              answer: 1,
              why: "Les homologues portent les mêmes gènes aux mêmes locus, mais l'un vient du père et l'autre de la mère : leurs allèles peuvent différer.",
            },
            {
              q: "Pendant quelle phase du cycle la quantité d'ADN d'une cellule double-t-elle ?",
              options: ["G1", "G2", "Mitose", "S"],
              answer: 3,
              why: "La phase S (synthèse) est celle de la réplication de l'ADN : la quantité passe de Q à 2Q.",
            },
            {
              q: "Le gamète d'une espèce dont 2n = 14 contient :",
              options: ["14 chromosomes", "7 chromosomes", "28 chromosomes"],
              answer: 1,
              why: "Un gamète est haploïde : il ne contient qu'un chromosome de chaque paire, soit n = 14 ÷ 2 = 7.",
            },
          ],
          trap: "Compter les chromatides au lieu des chromosomes : une cellule humaine en G2 possède 46 chromosomes (à deux chromatides, soit 92 chromatides), et non 92 chromosomes. La réplication ne change pas le nombre de chromosomes.",
          method: "Pour chaque étape du cycle, notez systématiquement trois nombres : chromosomes, chromatides, quantité d'ADN (Q ou 2Q). Comptez les chromosomes en comptant les centromères : un centromère égale un chromosome.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mitose',
          title: 'La mitose : deux cellules génétiquement identiques',
          minutes: 30,
          objectives: [
            "Décrire les étapes de la mitose (prophase, métaphase, anaphase, télophase) et le comportement des chromosomes à chaque étape.",
            "Identifier les phases de la mitose sur des observations microscopiques, par exemple d'une pointe de racine.",
            "Expliquer pourquoi la mitose produit deux cellules filles génétiquement identiques entre elles et à la cellule mère.",
            "Exploiter des comptages de cellules pour estimer la durée relative des phases.",
          ],
          course: [
            {
              heading: "Les quatre phases de la mitose",
              paragraphs: [
                "La mitose est la division d'une cellule mère en deux cellules filles. Elle a lieu après l'interphase, donc après la réplication de l'ADN : au début de la mitose, chaque chromosome possède deux chromatides sœurs. Le mot vient du grec mitos, « fil », choisi par le biologiste allemand Walther Flemming, qui décrivit ces filaments en 1882. On découpe la mitose, qui est en réalité un processus continu, en quatre phases.",
                "En prophase, les chromosomes se condensent et deviennent visibles, l'enveloppe du noyau se fragmente et un ensemble de fibres, le fuseau de division (formé de microtubules), se met en place entre les deux pôles de la cellule. En métaphase, les chromosomes, accrochés au fuseau par leur centromère, s'alignent au centre de la cellule et forment la plaque équatoriale : c'est le moment où ils sont le plus condensés, celui qu'on utilise pour réaliser un caryotype.",
                "En anaphase, les centromères se séparent : les deux chromatides de chaque chromosome se détachent et migrent vers des pôles opposés. Chaque chromatide devient alors un chromosome à une chromatide. En télophase, les chromosomes arrivent aux pôles et se décondensent, une enveloppe nucléaire se reforme autour de chaque lot : on obtient deux noyaux. La division du cytoplasme, appelée cytodiérèse, sépare enfin les deux cellules filles.",
              ],
              box: { label: "Repère", text: "Prophase : condensation, fuseau. Métaphase : plaque équatoriale. Anaphase : séparation des chromatides sœurs vers les pôles. Télophase : deux noyaux, puis cytodiérèse." },
            },
            {
              heading: "Une répartition égale et identique de l'information génétique",
              paragraphs: [
                "Les deux chromatides d'un chromosome sont identiques, puisqu'elles proviennent de la réplication d'une même molécule d'ADN. En anaphase, chaque pôle reçoit exactement une chromatide de chaque chromosome. Les deux cellules filles reçoivent donc le même nombre de chromosomes que la cellule mère, et les mêmes molécules d'ADN : elles sont génétiquement identiques entre elles et à la cellule mère, aux mutations près.",
                "Prenons une cellule humaine (2n = 46). En métaphase, elle possède 46 chromosomes à deux chromatides. En anaphase, les 92 chromatides se séparent : pendant un court instant, la cellule contient 92 chromosomes à une chromatide, 46 à chaque pôle. Après la télophase, chaque cellule fille possède 46 chromosomes à une chromatide. La mitose est une division conforme : elle conserve le caryotype.",
              ],
              box: { label: "Propriété", text: "Réplication puis mitose : les deux cellules filles possèdent le même nombre de chromosomes et la même information génétique que la cellule mère. Une cellule diploïde donne deux cellules diploïdes." },
            },
            {
              heading: "Le rôle de la mitose et son observation",
              paragraphs: [
                "Chez les êtres pluricellulaires, toutes les cellules d'un individu proviennent de la cellule œuf par des mitoses successives. La mitose assure la croissance de l'organisme, le renouvellement des tissus (l'épiderme, la paroi de l'intestin ou les cellules sanguines sont sans cesse renouvelés) et la réparation après une blessure. Elle permet aussi la reproduction asexuée, par exemple chez les levures ou chez les plantes qui forment des boutures.",
                "Chez les animaux, la cytodiérèse se fait par un étranglement du cytoplasme ; chez les végétaux, entourés d'une paroi rigide, une nouvelle paroi se construit entre les deux cellules filles. On observe facilement la mitose dans les zones de croissance des plantes, comme l'extrémité d'une racine d'oignon ou d'ail, après coloration des chromosomes (par exemple au carmin acétique). Comme chaque cellule est à un moment différent de son cycle, la préparation montre à la fois des cellules en interphase et des cellules dans les différentes phases de la mitose.",
              ],
            },
          ],
          keyPoints: [
            "La mitose suit la réplication de l'ADN : au départ, chaque chromosome a deux chromatides sœurs identiques.",
            "Prophase (condensation, fuseau), métaphase (plaque équatoriale), anaphase (séparation des chromatides), télophase (deux noyaux).",
            "La cytodiérèse sépare les deux cellules filles : étranglement chez les animaux, nouvelle paroi chez les végétaux.",
            "Chaque cellule fille reçoit une chromatide de chaque chromosome : même nombre de chromosomes, même information génétique.",
            "La mitose assure la croissance, le renouvellement des tissus, la réparation et la reproduction asexuée.",
          ],
          example: {
            statement: "Une cellule d'une espèce dont 2n = 4 entre en mitose. Décrivez l'état de ses chromosomes en métaphase, en anaphase et dans chaque cellule fille, en précisant à chaque fois le nombre de chromosomes et de chromatides.",
            solution: [
              "Avant la mitose, l'ADN a été répliqué en phase S : la cellule possède 4 chromosomes (2 paires d'homologues) à deux chromatides.",
              "En métaphase : 4 chromosomes à deux chromatides, soit 8 chromatides, alignés sur la plaque équatoriale.",
              "En anaphase : les centromères se séparent, les 8 chromatides deviennent 8 chromosomes à une chromatide, et 4 migrent vers chaque pôle.",
              "En fin de télophase : chaque cellule fille possède 4 chromosomes à une chromatide (un exemplaire de chacun des 4 chromosomes de départ).",
              "Conclusion : les cellules filles ont, comme la cellule mère, 2n = 4 chromosomes et la même information génétique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez la phase de la mitose correspondant à chacune de ces descriptions : a) deux lots de chromosomes se décondensent aux deux pôles et deux enveloppes nucléaires se reforment ; b) les chromosomes sont alignés au centre de la cellule ; c) les chromosomes deviennent visibles et l'enveloppe du noyau disparaît ; d) les chromatides de chaque chromosome se séparent et migrent vers les pôles.",
              hint: "Repérez l'événement clé de chaque phase : condensation, alignement, séparation, reconstitution des noyaux.",
              solution: [
                "a) Reconstitution de deux noyaux aux pôles : télophase.",
                "b) Alignement des chromosomes sur la plaque équatoriale : métaphase.",
                "c) Condensation des chromosomes et disparition de l'enveloppe nucléaire : prophase.",
                "d) Séparation et migration des chromatides sœurs : anaphase.",
                "Résultat : a) télophase, b) métaphase, c) prophase, d) anaphase ; dans l'ordre chronologique : c, b, d, a.",
              ],
            },
            {
              level: 2,
              statement: "Chez le pois, 2n = 14. Pour une cellule qui se divise par mitose, indiquez le nombre de chromosomes et le nombre de chromatides : a) en G1 ; b) en prophase ; c) en métaphase ; d) en anaphase (pour la cellule entière) ; e) dans chaque cellule fille.",
              hint: "En anaphase, chaque chromatide séparée de sa sœur est comptée comme un chromosome à une chromatide.",
              solution: [
                "a) En G1 : 14 chromosomes à une chromatide, soit 14 chromatides.",
                "b) En prophase, après la réplication : 14 chromosomes à deux chromatides, soit 28 chromatides.",
                "c) En métaphase : toujours 14 chromosomes à deux chromatides, soit 28 chromatides.",
                "d) En anaphase : les 28 chromatides se séparent ; la cellule contient brièvement 28 chromosomes à une chromatide, 14 à chaque pôle.",
                "e) Chaque cellule fille : 14 chromosomes à une chromatide, soit 14 chromatides.",
                "Résultat : la mitose conserve le nombre de chromosomes (2n = 14) d'une génération cellulaire à la suivante.",
              ],
            },
            {
              level: 3,
              statement: "On observe au microscope une préparation de pointe de racine d'ail. Sur 400 cellules comptées, on trouve (données fictives) : 340 cellules en interphase, 30 en prophase, 10 en métaphase, 8 en anaphase et 12 en télophase. Le cycle cellulaire de ces cellules dure 20 h. a) Calculez le pourcentage de cellules en mitose. b) En admettant que le nombre de cellules observées dans une phase est proportionnel à la durée de cette phase, calculez la durée de la mitose et celle de chacune de ses phases. c) Expliquez pourquoi les cellules issues de ces mitoses possèdent toutes la même information génétique.",
              hint: "Additionnez les cellules des quatre phases de la mitose, puis appliquez la même proportion à la durée du cycle.",
              solution: [
                "a) Cellules en mitose : 30 + 10 + 8 + 12 = 60. Pourcentage : 60 ÷ 400 = 0,15, soit 15 %.",
                "b) Durée de la mitose : 0,15 × 20 h = 3 h.",
                "Prophase : 30 ÷ 400 × 20 = 1,5 h. Métaphase : 10 ÷ 400 × 20 = 0,5 h. Anaphase : 8 ÷ 400 × 20 = 0,4 h, soit 24 min. Télophase : 12 ÷ 400 × 20 = 0,6 h, soit 36 min. Vérification : 1,5 + 0,5 + 0,4 + 0,6 = 3 h.",
                "L'interphase dure donc 20 - 3 = 17 h : c'est de loin la phase la plus longue du cycle, ce qui explique que la plupart des cellules observées soient en interphase.",
                "c) Avant la mitose, chaque molécule d'ADN est répliquée : les deux chromatides d'un chromosome sont identiques. En anaphase, chaque pôle reçoit une chromatide de chaque chromosome. Les deux cellules filles reçoivent donc le même lot de chromosomes que la cellule mère.",
                "Conclusion : la mitose dure environ 3 h sur un cycle de 20 h, l'anaphase étant la phase la plus brève, et elle produit des cellules génétiquement identiques.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du cycle d'une cellule qui se divise par mitose.",
            items: [
              "Phase S : réplication de l'ADN, chaque chromosome passe à deux chromatides",
              "Phase G2 : la cellule se prépare à la division",
              "Prophase : les chromosomes se condensent et le fuseau se forme",
              "Métaphase : les chromosomes s'alignent sur la plaque équatoriale",
              "Anaphase : les chromatides sœurs se séparent et migrent vers les pôles",
              "Télophase et cytodiérèse : deux noyaux se reforment et la cellule se partage",
            ],
          },
          quiz: [
            {
              q: "Au cours de quelle phase les chromosomes forment-ils la plaque équatoriale ?",
              options: ["La prophase", "La métaphase", "L'anaphase", "La télophase"],
              answer: 1,
              why: "En métaphase, les chromosomes accrochés au fuseau par leur centromère s'alignent au centre de la cellule.",
            },
            {
              q: "Que se passe-t-il en anaphase ?",
              options: ["L'ADN est répliqué", "Les chromosomes homologues s'apparient sur toute leur longueur", "L'enveloppe nucléaire se reforme", "Les chromatides sœurs migrent vers des pôles opposés"],
              answer: 3,
              why: "En anaphase, les centromères se séparent et chaque chromatide d'un chromosome rejoint un pôle opposé.",
            },
            {
              q: "Une cellule de chien (2n = 78) se divise par mitose. Chaque cellule fille possède :",
              options: ["78 chromosomes à une chromatide", "39 chromosomes à une chromatide", "78 chromosomes à deux chromatides", "156 chromosomes"],
              answer: 0,
              why: "La mitose conserve le nombre de chromosomes ; les cellules filles reçoivent chacune une chromatide de chaque chromosome.",
            },
            {
              q: "Pourquoi les deux cellules filles issues d'une mitose ont-elles la même information génétique ?",
              options: ["Parce qu'elles ont la même taille", "Parce qu'elles reçoivent chacune une copie identique de chaque chromosome", "Parce que la mitose crée de nouveaux allèles", "Parce qu'elles reçoivent chacune un seul chromosome de chaque paire d'homologues"],
              answer: 1,
              why: "Les chromatides sœurs sont identiques (issues de la réplication) et chaque cellule fille en reçoit une par chromosome.",
            },
            {
              q: "Dans une pointe de racine, la plupart des cellules observées sont en interphase. Cela s'explique parce que :",
              options: ["les racines ne se divisent jamais", "l'interphase est la phase la plus longue du cycle", "la mitose est trop rapide pour être observée au microscope"],
              answer: 1,
              why: "Plus une phase est longue, plus on a de chances d'y trouver une cellule : l'interphase occupe l'essentiel de la durée du cycle.",
            },
          ],
          trap: "Croire que la mitose divise par deux le nombre de chromosomes : elle partage les chromatides, pas les paires de chromosomes. Les cellules filles ont exactement le même nombre de chromosomes que la cellule mère (46 chez l'être humain).",
          method: "Pour reconnaître une phase sur une photographie, posez-vous trois questions dans l'ordre : le noyau est-il visible (interphase) ? Les chromosomes sont-ils alignés au centre (métaphase) ou en deux lots (anaphase, télophase) ? Les lots sont-ils encore en mouvement (anaphase) ou entourés d'une enveloppe (télophase) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'meiose',
          title: 'La méiose : des cellules à n chromosomes',
          minutes: 35,
          objectives: [
            "Décrire les deux divisions successives de la méiose et le comportement des chromosomes homologues et des chromatides.",
            "Expliquer comment la méiose produit, à partir d'une cellule diploïde, quatre cellules haploïdes.",
            "Suivre l'évolution du nombre de chromosomes et de la quantité d'ADN au cours de la méiose.",
            "Relier méiose et fécondation au maintien du caryotype d'une génération à l'autre.",
          ],
          course: [
            {
              heading: "Une division qui réduit le nombre de chromosomes",
              paragraphs: [
                "Chez les espèces à reproduction sexuée, chaque nouvel individu naît de la fécondation, c'est-à-dire de la fusion de deux gamètes, un gamète mâle et un gamète femelle. Si les gamètes possédaient 2n chromosomes, la cellule œuf en aurait 4n, et le nombre de chromosomes doublerait à chaque génération. Ce n'est pas le cas : les gamètes sont haploïdes (n chromosomes, un de chaque paire). Ils sont produits par un type particulier de division, la méiose.",
                "La méiose a lieu dans les organes reproducteurs (testicules et ovaires chez les animaux, étamines et pistil chez les plantes à fleurs). Elle part d'une cellule diploïde dont l'ADN a été répliqué, et comprend deux divisions successives, sans réplication de l'ADN entre les deux. Elle produit quatre cellules haploïdes, dont les chromosomes n'ont qu'une chromatide.",
              ],
              box: { label: "Définition", text: "La méiose est une succession de deux divisions cellulaires, précédée d'une seule réplication de l'ADN, qui transforme une cellule diploïde (2n) en quatre cellules haploïdes (n)." },
            },
            {
              heading: "La première division : la séparation des chromosomes homologues",
              paragraphs: [
                "En prophase I, les chromosomes, formés chacun de deux chromatides, se condensent, puis les chromosomes homologues s'apparient deux à deux, sur toute leur longueur : chaque paire forme une figure à quatre chromatides. En métaphase I, ce sont ces paires de chromosomes homologues qui s'alignent sur la plaque équatoriale, et non des chromosomes isolés comme en mitose.",
                "En anaphase I, les deux chromosomes homologues de chaque paire se séparent et migrent vers des pôles opposés ; leurs chromatides, elles, restent unies par le centromère. En télophase I, deux cellules se forment. Chacune ne possède qu'un chromosome de chaque paire, toujours à deux chromatides : elle est haploïde. C'est pourquoi on appelle cette première division la division réductionnelle.",
              ],
              box: { label: "À retenir", text: "Méiose I (réductionnelle) : les homologues s'apparient (prophase I), s'alignent par paires (métaphase I) puis se séparent (anaphase I). Chaque cellule fille reçoit n chromosomes à deux chromatides." },
            },
            {
              heading: "La seconde division : la séparation des chromatides",
              paragraphs: [
                "La deuxième division suit immédiatement la première, sans phase S. Elle se déroule comme une mitose, mais dans des cellules haploïdes : en métaphase II, les n chromosomes à deux chromatides s'alignent sur la plaque équatoriale ; en anaphase II, les centromères se séparent et les chromatides sœurs migrent vers des pôles opposés ; en télophase II, chaque cellule se divise. On l'appelle division équationnelle, car elle ne change pas le nombre de chromosomes.",
                "Au total, une cellule à 2n chromosomes à deux chromatides donne quatre cellules à n chromosomes à une chromatide. Chez l'être humain, une cellule à 46 chromosomes donne quatre cellules à 23 chromosomes. Si l'on note Q la quantité d'ADN d'une cellule diploïde en G1, la cellule contient 2Q avant la méiose, Q après la première division et Q/2 après la seconde. Chez l'homme, les quatre cellules deviennent des spermatozoïdes ; chez la femme, une seule devient l'ovocyte fécondable, les autres dégénèrent (globules polaires).",
              ],
            },
            {
              heading: "Méiose et fécondation : un caryotype stable",
              paragraphs: [
                "La fécondation réunit deux lots haploïdes : un spermatozoïde (n = 23) et un ovocyte (n = 23) donnent une cellule œuf à 2n = 46 chromosomes, dans laquelle chaque paire d'homologues comprend un chromosome d'origine paternelle et un chromosome d'origine maternelle. Méiose et fécondation alternent donc à chaque génération : la méiose divise par deux le nombre de chromosomes, la fécondation le rétablit.",
                "Les deux chromosomes d'une paire portant souvent des allèles différents, les gamètes produits par un même individu ne sont pas tous identiques. En Terminale, vous verrez comment la méiose brasse les allèles et participe ainsi à la diversité génétique des individus.",
              ],
              box: { label: "Repère", text: "Méiose : 2n → n. Fécondation : n + n → 2n. L'alternance des deux maintient le nombre de chromosomes de l'espèce, génération après génération." },
            },
          ],
          keyPoints: [
            "La méiose produit les gamètes : une cellule diploïde (2n) donne quatre cellules haploïdes (n).",
            "Une seule réplication de l'ADN, puis deux divisions successives sans phase S entre elles.",
            "Méiose I (réductionnelle) : appariement puis séparation des chromosomes homologues ; on passe de 2n à n chromosomes à deux chromatides.",
            "Méiose II (équationnelle) : séparation des chromatides sœurs, comme une mitose ; on obtient n chromosomes à une chromatide.",
            "Quantité d'ADN : 2Q avant la méiose, Q après la méiose I, Q/2 dans chaque gamète.",
            "La fécondation rétablit la diploïdie : méiose et fécondation maintiennent le caryotype de l'espèce.",
          ],
          example: {
            statement: "Une cellule d'une espèce dont 2n = 6 entre en méiose ; elle contenait Q = 4 unités arbitraires d'ADN en G1. Indiquez le nombre de chromosomes, le nombre de chromatides et la quantité d'ADN : au début de la méiose, après la première division, après la seconde division.",
            solution: [
              "Au début de la méiose, l'ADN a été répliqué : 6 chromosomes (3 paires) à deux chromatides, soit 12 chromatides, et 2Q = 8 unités.",
              "En anaphase I, les homologues de chaque paire se séparent : chaque cellule issue de la première division reçoit un chromosome de chaque paire.",
              "Après la méiose I : chaque cellule a 3 chromosomes à deux chromatides, soit 6 chromatides, et Q = 4 unités. Elle est déjà haploïde.",
              "En anaphase II, les chromatides sœurs se séparent.",
              "Après la méiose II : chaque cellule a 3 chromosomes à une chromatide, soit 3 chromatides, et Q/2 = 2 unités.",
              "Conclusion : la cellule de départ (2n = 6) a donné quatre cellules haploïdes (n = 3), chacune contenant un chromosome de chaque paire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Chez l'être humain (2n = 46), indiquez : a) le nombre de chromosomes et de chromatides d'une cellule au début de la méiose ; b) le nombre de chromosomes et de chromatides de chaque cellule à la fin de la méiose I ; c) le nombre de chromosomes d'un gamète ; d) le nombre de chromosomes de la cellule œuf.",
              hint: "La méiose I sépare les homologues, la méiose II sépare les chromatides ; la fécondation additionne deux lots haploïdes.",
              solution: [
                "a) Début de la méiose : 46 chromosomes à deux chromatides, soit 92 chromatides.",
                "b) Fin de la méiose I : 23 chromosomes à deux chromatides, soit 46 chromatides.",
                "c) Un gamète : 23 chromosomes à une chromatide.",
                "d) Cellule œuf : 23 + 23 = 46 chromosomes.",
                "Résultat : 46 → 23 (à deux chromatides) → 23 (à une chromatide), puis 46 après la fécondation.",
              ],
            },
            {
              level: 2,
              statement: "On observe trois cellules en division chez une espèce dont 2n = 6. Cellule A : 6 chromosomes à deux chromatides, isolés, alignés sur la plaque équatoriale. Cellule B : 3 paires de chromosomes homologues appariés, alignées sur la plaque équatoriale. Cellule C : 3 chromosomes à deux chromatides, tous de formes différentes, alignés sur la plaque équatoriale. Identifiez, en justifiant, le type de division et la phase de chaque cellule.",
              hint: "Cherchez si les homologues sont appariés, puis si la cellule possède des paires ou un seul chromosome de chaque paire.",
              solution: [
                "Cellule A : 6 chromosomes, donc deux de chaque paire, non appariés et alignés : c'est une métaphase de mitose.",
                "Cellule B : les homologues sont appariés par paires sur la plaque équatoriale : c'est une métaphase I de méiose.",
                "Cellule C : 3 chromosomes tous différents, donc un seul de chaque paire (cellule haploïde), à deux chromatides et alignés : c'est une métaphase II de méiose.",
                "Résultat : A, métaphase de mitose ; B, métaphase I ; C, métaphase II. Seule la méiose présente des homologues appariés (méiose I) ou des cellules haploïdes en division (méiose II).",
              ],
            },
            {
              level: 3,
              statement: "Document : on suit la quantité d'ADN d'une cellule des testicules d'une souris (2n = 40). En G1, elle contient 6 unités arbitraires (u.a.). Elle passe ensuite progressivement à 12 u.a., reste stable, puis chute à 6 u.a. lors d'une première division, et enfin à 3 u.a. lors d'une seconde division, sans augmentation entre les deux divisions (données fictives). a) Identifiez le type de division cellulaire étudié en justifiant à l'aide du document. b) Indiquez, pour chaque palier (12, 6 et 3 u.a.), le nombre de chromosomes et de chromatides par cellule. c) En vous appuyant sur vos connaissances, expliquez comment la souris conserve un caryotype à 40 chromosomes de génération en génération.",
              hint: "Deux chutes successives de la quantité d'ADN sans remontée entre elles signent une division particulière.",
              solution: [
                "a) La quantité d'ADN double (6 à 12 u.a., réplication), puis subit deux divisions successives (12 à 6, puis 6 à 3 u.a.) sans nouvelle réplication entre elles. La quantité finale (3 u.a.) est la moitié de celle d'une cellule en G1. Il s'agit donc d'une méiose, qui produit des cellules haploïdes.",
                "b) Palier à 12 u.a. (avant la méiose) : 40 chromosomes à deux chromatides, soit 80 chromatides.",
                "Palier à 6 u.a. (après la méiose I) : 20 chromosomes à deux chromatides, soit 40 chromatides ; la quantité d'ADN égale celle d'une cellule en G1, mais la cellule est haploïde.",
                "Palier à 3 u.a. (après la méiose II) : 20 chromosomes à une chromatide, soit 20 chromatides.",
                "c) La méiose produit des gamètes haploïdes (n = 20). Lors de la fécondation, un spermatozoïde (n = 20) et un ovocyte (n = 20) s'unissent : la cellule œuf possède 2n = 40 chromosomes, puis toutes les cellules de l'individu en sont issues par mitoses, qui conservent ce nombre.",
                "Conclusion : l'alternance de la méiose, qui divise par deux le nombre de chromosomes, et de la fécondation, qui le rétablit, maintient le caryotype de l'espèce.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la méiose.",
            statements: [
              { text: "La méiose comprend deux divisions successives.", true: true, why: "Une division réductionnelle (méiose I) puis une division équationnelle (méiose II)." },
              { text: "L'ADN est répliqué entre la méiose I et la méiose II.", true: false, why: "Il n'y a qu'une seule réplication, avant la méiose I ; la méiose II suit sans phase S." },
              { text: "En anaphase I, les chromatides sœurs se séparent.", true: false, why: "En anaphase I, ce sont les chromosomes homologues qui se séparent ; les chromatides se séparent en anaphase II." },
              { text: "À la fin de la méiose I, les cellules sont déjà haploïdes.", true: true, why: "Elles ne possèdent qu'un chromosome de chaque paire, même si ces chromosomes ont encore deux chromatides." },
              { text: "Une cellule humaine en méiose donne deux cellules à 46 chromosomes.", true: false, why: "C'est le résultat d'une mitose ; la méiose donne quatre cellules à 23 chromosomes." },
              { text: "La fécondation rétablit le nombre diploïde de chromosomes.", true: true, why: "Deux gamètes haploïdes (n + n) donnent une cellule œuf diploïde (2n)." },
              { text: "Les chromosomes homologues s'apparient aussi pendant la mitose.", true: false, why: "L'appariement des homologues est propre à la prophase I de la méiose." },
            ],
          },
          quiz: [
            {
              q: "Combien de cellules une méiose produit-elle à partir d'une cellule diploïde ?",
              options: ["Deux cellules diploïdes", "Deux cellules haploïdes", "Quatre cellules diploïdes", "Quatre cellules haploïdes"],
              answer: 3,
              why: "Les deux divisions successives donnent quatre cellules, chacune avec un seul chromosome de chaque paire.",
            },
            {
              q: "Quelle phase caractérise la division réductionnelle ?",
              options: ["L'anaphase I, avec la séparation des homologues", "L'anaphase II, avec la séparation des chromatides", "La phase S, avec la réplication de l'ADN"],
              answer: 0,
              why: "C'est en anaphase I que les homologues se séparent : chaque cellule fille ne reçoit qu'un chromosome de chaque paire.",
            },
            {
              q: "Une cellule de méiose contient 2Q d'ADN au départ. Combien un gamète en contient-il ?",
              options: ["2Q", "Q/2", "Q", "Q/4"],
              answer: 1,
              why: "La quantité est divisée par deux à chacune des deux divisions : 2Q, puis Q, puis Q/2.",
            },
            {
              q: "Chez le maïs, 2n = 20. Une cellule en métaphase II contient :",
              options: ["20 chromosomes à deux chromatides", "10 chromosomes à une chromatide", "10 chromosomes à deux chromatides", "20 chromosomes à une chromatide"],
              answer: 2,
              why: "Après la méiose I, la cellule est haploïde (n = 10) et ses chromosomes ont encore deux chromatides, qui se sépareront en anaphase II.",
            },
            {
              q: "Sans méiose, que se passerait-il au fil des générations chez une espèce à reproduction sexuée ?",
              options: ["Le nombre de chromosomes doublerait à chaque génération", "Les individus deviendraient tous haploïdes en quelques générations", "Rien ne changerait, car la mitose corrigerait le nombre"],
              answer: 0,
              why: "Des gamètes à 2n chromosomes donneraient une cellule œuf à 4n, puis 8n à la génération suivante, et ainsi de suite.",
            },
          ],
          trap: "Confondre les deux divisions de la méiose : en méiose I, ce sont les chromosomes homologues qui se séparent (le nombre de chromosomes est divisé par deux) ; en méiose II, ce sont les chromatides sœurs (le nombre de chromosomes ne change plus).",
          method: "Schématisez une cellule à 2n = 4 en coloriant d'une couleur les chromosomes d'origine paternelle et d'une autre ceux d'origine maternelle, puis suivez-les étape par étape : à la fin, vérifiez que chaque cellule contient bien un chromosome de chaque paire, de taille différente.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA RÉPLICATION DE L'ADN                                                */
    /* ==================================================================== */
    {
      id: 'replication-adn',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'structure-adn',
          title: 'La molécule d’ADN, support de l’information génétique',
          minutes: 30,
          objectives: [
            "Expliquer, à partir d'expériences historiques, comment on a montré que l'ADN est le support de l'information génétique.",
            "Décrire la structure de l'ADN : nucléotides, double hélice, complémentarité des bases.",
            "Écrire la séquence du brin complémentaire d'un brin d'ADN et utiliser la règle de complémentarité dans des calculs.",
            "Définir un gène et un allèle comme des séquences de nucléotides.",
          ],
          course: [
            {
              heading: "L'ADN, molécule de l'hérédité : une démonstration historique",
              paragraphs: [
                "En 1869, le Suisse Friedrich Miescher isole des noyaux cellulaires une substance riche en phosphore, qu'il appelle nucléine : c'est l'ADN. Pendant des décennies, on pense pourtant que les protéines, plus variées, portent l'information héréditaire. En 1928, Frederick Griffith travaille sur des pneumocoques, des bactéries dont la souche S (entourée d'une capsule) tue les souris, alors que la souche R (sans capsule) est inoffensive. Des bactéries S tuées par la chaleur ne tuent pas les souris ; mais un mélange de bactéries R vivantes et de bactéries S tuées les tue, et l'on retrouve dans leur sang des bactéries S vivantes. Quelque chose, venu des bactéries S mortes, a transformé les bactéries R : Griffith parle de principe transformant.",
                "En 1944, Oswald Avery et ses collègues Colin MacLeod et Maclyn McCarty identifient ce principe. Ils préparent un extrait de bactéries S et le traitent par des enzymes qui détruisent spécifiquement les protéines, l'ARN ou l'ADN. L'extrait transforme toujours les bactéries R après destruction des protéines ou de l'ARN, mais plus après destruction de l'ADN. Le principe transformant est donc l'ADN : c'est lui qui porte l'information génétique.",
                "Cette information est universelle : la même molécule, lue de la même façon, porte l'information génétique de tous les êtres vivants. C'est ce qui rend possible la transgenèse, le transfert d'un gène d'une espèce à une autre. Par exemple, l'insuline humaine utilisée par les personnes diabétiques est aujourd'hui produite par des bactéries ou des levures dans lesquelles on a introduit le gène humain de l'insuline.",
              ],
              box: { label: "À retenir", text: "Les expériences de Griffith (1928) puis d'Avery, MacLeod et McCarty (1944) montrent que l'ADN est le support de l'information génétique. Cette molécule est universelle, ce qui permet la transgenèse." },
            },
            {
              heading: "La structure de l'ADN : une double hélice",
              paragraphs: [
                "L'ADN (acide désoxyribonucléique) est une longue molécule formée par l'enchaînement de petites unités, les nucléotides. Chaque nucléotide comprend un groupement phosphate, un sucre à cinq carbones (le désoxyribose) et une base azotée. Il existe quatre bases : l'adénine (A), la thymine (T), la guanine (G) et la cytosine (C). Les nucléotides sont reliés entre eux par leur sucre et leur phosphate, ce qui forme un brin ; les bases dépassent de ce squelette.",
                "Vers 1950, Erwin Chargaff montre que, dans l'ADN de nombreuses espèces, la quantité d'adénine est égale à celle de thymine, et celle de guanine à celle de cytosine. En 1952, Rosalind Franklin obtient des clichés de diffraction des rayons X de l'ADN, dont le célèbre « cliché 51 », qui révèlent une structure en hélice. En 1953, James Watson et Francis Crick, en s'appuyant sur ces données (et sur les travaux de Maurice Wilkins), proposent le modèle de la double hélice.",
                "L'ADN est formé de deux brins enroulés l'un autour de l'autre, orientés en sens inverse (on dit qu'ils sont antiparallèles). Les bases des deux brins se font face et s'associent par paires selon une règle stricte : A avec T (deux liaisons hydrogène), G avec C (trois liaisons hydrogène). On dit que les deux brins sont complémentaires : connaître la séquence d'un brin suffit pour en déduire celle de l'autre. La double hélice mesure environ 2 nm de diamètre et fait un tour complet tous les 10 paires de nucléotides environ (3,4 nm), soit 0,34 nm par paire.",
              ],
              box: { label: "Règle", text: "Complémentarité des bases : A s'apparie toujours avec T, et G avec C. Dans un ADN double brin, on a donc %A = %T et %G = %C, et %A + %G = 50 %." },
            },
            {
              heading: "Une information codée dans la séquence des nucléotides",
              paragraphs: [
                "Les quatre nucléotides peuvent s'enchaîner dans n'importe quel ordre le long d'un brin. C'est cet ordre, la séquence des nucléotides, qui constitue l'information génétique, un peu comme l'ordre des lettres dans un texte écrit avec un alphabet de quatre lettres. Le génome humain compte environ 3,2 milliards de paires de nucléotides par lot haploïde de chromosomes, soit environ le double dans une cellule diploïde.",
                "Un gène est une portion d'ADN, située à un emplacement précis d'un chromosome (son locus), dont la séquence porte l'information nécessaire à la fabrication d'une molécule, le plus souvent une protéine. Le génome humain contient environ 20 000 gènes codant des protéines. Un même gène peut exister sous différentes versions qui diffèrent par quelques nucléotides : ce sont les allèles. Par exemple, le gène du groupe sanguin ABO existe sous plusieurs allèles, dont A, B et O.",
              ],
              box: { label: "Définition", text: "Un gène est une séquence de nucléotides d'ADN, située à un locus précis, qui porte l'information pour fabriquer une molécule (souvent une protéine). Les allèles sont les différentes versions d'un même gène." },
            },
          ],
          keyPoints: [
            "Griffith (1928), puis Avery, MacLeod et McCarty (1944) : l'ADN est le support de l'information génétique.",
            "Un nucléotide = un phosphate + un désoxyribose + une base (A, T, G ou C).",
            "L'ADN est une double hélice (Watson et Crick, 1953, à partir des clichés de Rosalind Franklin) de deux brins antiparallèles.",
            "Complémentarité : A avec T, G avec C ; donc %A = %T et %G = %C dans un ADN double brin.",
            "L'information génétique est la séquence des nucléotides ; un gène est une séquence d'ADN à un locus, ses versions sont les allèles.",
            "L'ADN est universel, ce qui rend possible la transgenèse.",
          ],
          example: {
            statement: "Un fragment d'ADN double brin a pour brin 1 la séquence ATGGCCGCATTG. a) Écrivez la séquence du brin 2. b) Calculez le pourcentage de chacune des quatre bases dans le fragment double brin.",
            solution: [
              "a) On applique la complémentarité base par base (A avec T, G avec C) : brin 2 = TACCGGCGTAAC.",
              "b) Dans le brin 1, on compte : A = 2, T = 3, G = 4, C = 3 (total 12).",
              "Dans le double brin (24 nucléotides), chaque A du brin 1 fait face à un T du brin 2, et chaque T du brin 1 à un A : nombre total de A = 2 + 3 = 5, et de T = 3 + 2 = 5.",
              "De même, nombre total de G = 4 + 3 = 7, et de C = 3 + 4 = 7.",
              "Pourcentages : A = T = 5 ÷ 24 ≈ 20,8 % ; G = C = 7 ÷ 24 ≈ 29,2 %.",
              "Vérification : 20,8 + 29,2 = 50 %, soit %A + %G = 50 %, comme le prévoit la règle de complémentarité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un brin d'ADN a pour séquence GATTACACGGTA. a) Écrivez la séquence du brin complémentaire. b) Combien ce fragment double brin compte-t-il de paires de nucléotides ? c) Quelle est sa longueur, sachant qu'une paire de nucléotides occupe 0,34 nm ?",
              hint: "Associez chaque base à sa partenaire : A avec T, G avec C, sans changer l'ordre.",
              solution: [
                "a) Brin complémentaire : CTAATGTGCCAT.",
                "b) Le brin compte 12 nucléotides : le double brin compte donc 12 paires de nucléotides.",
                "c) Longueur : 12 × 0,34 = 4,08 nm.",
                "Résultat : brin complémentaire CTAATGTGCCAT, 12 paires, environ 4,1 nm.",
              ],
            },
            {
              level: 2,
              statement: "a) L'ADN double brin d'un organisme contient 21 % d'adénine (données fictives). Calculez les pourcentages de thymine, de guanine et de cytosine. b) Un gène de cet organisme mesure 1 500 paires de nucléotides : combien de nucléotides contient-il au total, et quelle est sa longueur en nanomètres puis en micromètres ? c) L'analyse de l'ADN d'un virus donne : A = 24 %, T = 24 %, G = 30 %, C = 22 %. Cet ADN peut-il être double brin ? Justifiez.",
              hint: "Dans un double brin, %A = %T et %G = %C, et les quatre pourcentages font 100 %. Un nanomètre vaut un millième de micromètre.",
              solution: [
                "a) %T = %A = 21 %. Il reste 100 - 21 - 21 = 58 % pour G et C, et %G = %C : %G = %C = 58 ÷ 2 = 29 %.",
                "b) 1 500 paires représentent 1 500 × 2 = 3 000 nucléotides.",
                "Longueur : 1 500 × 0,34 = 510 nm, soit 0,51 µm.",
                "c) Dans cet ADN, %G (30 %) est différent de %C (22 %) : la règle de complémentarité n'est pas respectée. Cet ADN n'est donc pas double brin : il est formé d'un seul brin (certains virus ont un ADN simple brin).",
                "Résultat : T = 21 %, G = C = 29 % ; 3 000 nucléotides et 0,51 µm ; l'ADN du virus est simple brin.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 (expériences de Griffith, 1928) : on injecte à des souris : 1) des pneumocoques S vivants : les souris meurent ; 2) des pneumocoques R vivants : elles survivent ; 3) des pneumocoques S tués par la chaleur : elles survivent ; 4) un mélange de R vivants et de S tués par la chaleur : elles meurent, et l'on isole de leur sang des pneumocoques S vivants. Document 2 (expériences d'Avery et de ses collègues, 1944) : un extrait de bactéries S est ajouté à une culture de bactéries R. Sans traitement, des bactéries S apparaissent. Si l'extrait est d'abord traité par une enzyme détruisant les protéines, ou par une enzyme détruisant l'ARN, des bactéries S apparaissent aussi. S'il est traité par une enzyme détruisant l'ADN, aucune bactérie S n'apparaît. Montrez, à partir de ces documents, que l'ADN est le support de l'information génétique.",
              hint: "Exploitez chaque document séparément (je vois, je comprends), puis reliez-les : le document 1 pose la question, le document 2 y répond.",
              solution: [
                "Document 1, expériences 1 à 3 : seules les bactéries S vivantes sont mortelles ; les bactéries R vivantes et les S tuées sont inoffensives.",
                "Expérience 4 : le mélange tue les souris et l'on retrouve des S vivantes. Comme les S injectées étaient mortes, ce sont des bactéries R qui sont devenues S : elles ont acquis un caractère héréditaire nouveau (la capsule, la virulence), transmis à leurs descendantes. Une substance issue des S mortes a transformé les R.",
                "Document 2 : la transformation a toujours lieu quand on détruit les protéines ou l'ARN de l'extrait ; elle disparaît seulement quand on détruit l'ADN. La substance transformante n'est donc ni une protéine ni l'ARN : c'est l'ADN.",
                "Mise en relation : l'ADN des bactéries S, en pénétrant dans les bactéries R, leur apporte une information qui modifie durablement leurs caractères et se transmet à leur descendance.",
                "Conclusion : l'ADN est le support de l'information génétique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes de la découverte de l'ADN.",
            items: [
              "Miescher isole la nucléine à partir de noyaux cellulaires",
              "Griffith observe la transformation des pneumocoques R en S",
              "Avery, MacLeod et McCarty montrent que le principe transformant est l'ADN",
              "Chargaff établit l'égalité des quantités de A et T, et de G et C",
              "Rosalind Franklin obtient le cliché 51 par diffraction des rayons X",
              "Watson et Crick proposent le modèle de la double hélice",
              "Meselson et Stahl démontrent la réplication semi-conservative",
            ],
          },
          quiz: [
            {
              q: "Quels sont les trois constituants d'un nucléotide d'ADN ?",
              options: ["Un ribose, un phosphate, une base", "Un désoxyribose, un phosphate, une base", "Un désoxyribose, un acide aminé, une base", "Un désoxyribose, un lipide, une base"],
              answer: 1,
              why: "Le nucléotide d'ADN associe un groupement phosphate, un désoxyribose et une base azotée (A, T, G ou C). Le ribose est le sucre de l'ARN.",
            },
            {
              q: "Le brin complémentaire de la séquence AACGTG est :",
              options: ["TTGCAC", "AACGTG", "GGTACA", "CCATGT"],
              answer: 0,
              why: "A s'apparie avec T et G avec C : AACGTG donne TTGCAC.",
            },
            {
              q: "Dans un ADN double brin, il y a 32 % de guanine. Quel est le pourcentage d'adénine ?",
              options: ["32 %", "68 %", "36 %", "18 %"],
              answer: 3,
              why: "%C = %G = 32 %, donc A + T = 100 - 64 = 36 %, et %A = %T = 18 %.",
            },
            {
              q: "Que montre l'expérience d'Avery et de ses collègues en 1944 ?",
              options: ["Que l'ADN a une structure en double hélice", "Que l'ADN se réplique de façon semi-conservative dans les bactéries", "Que le principe transformant des pneumocoques est l'ADN", "Que les protéines portent l'hérédité"],
              answer: 2,
              why: "Seule la destruction de l'ADN de l'extrait empêche la transformation des bactéries R en S.",
            },
            {
              q: "Deux allèles d'un même gène :",
              options: ["sont situés sur des locus différents", "diffèrent par leur séquence de nucléotides", "ont toujours exactement la même séquence de nucléotides"],
              answer: 1,
              why: "Les allèles sont des versions d'un même gène, au même locus, qui diffèrent par un ou quelques nucléotides.",
            },
          ],
          trap: "Écrire le brin complémentaire en remplaçant A par T et G par C sans faire l'inverse (T par A et C par G), ou en inversant l'ordre des bases. Chaque base est remplacée par sa partenaire, à la même position.",
          method: "Après avoir écrit un brin complémentaire, vérifiez-le en le relisant colonne par colonne : chaque colonne doit contenir exactement une paire A et T ou une paire G et C. Pour un calcul de pourcentage, contrôlez toujours que %A + %G = 50 %.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'replication-semi-conservative',
          title: 'La réplication semi-conservative',
          minutes: 35,
          objectives: [
            "Exploiter l'expérience de Meselson et Stahl pour valider le modèle de réplication semi-conservative.",
            "Décrire le mécanisme de la réplication : ouverture de la molécule, rôle de l'ADN polymérase, complémentarité des bases.",
            "Expliquer comment la réplication conserve l'information génétique, et pourquoi elle peut parfois commettre des erreurs.",
            "Calculer des durées de réplication à partir de la vitesse des fourches et du nombre d'origines.",
          ],
          course: [
            {
              heading: "Copier l'ADN avant chaque division",
              paragraphs: [
                "Avant chaque mitose, une cellule doit doubler sa quantité d'ADN, pour que chaque cellule fille reçoive une copie complète de l'information génétique. Cette copie, la réplication, se fait pendant la phase S de l'interphase. Dès 1953, Watson et Crick remarquent que la complémentarité des bases suggère un mécanisme : chaque brin peut servir de modèle (de matrice) pour reconstruire l'autre.",
                "Trois modèles sont alors envisagés. Dans le modèle conservatif, la molécule parentale reste intacte et une molécule entièrement nouvelle est fabriquée. Dans le modèle semi-conservatif, les deux brins se séparent et chacun sert de modèle : chaque molécule fille contient un brin ancien et un brin nouveau. Dans le modèle dispersif, chaque brin des molécules filles est une mosaïque de fragments anciens et nouveaux.",
              ],
            },
            {
              heading: "L'expérience de Meselson et Stahl (1958)",
              paragraphs: [
                "Matthew Meselson et Franklin Stahl cultivent des bactéries Escherichia coli pendant de nombreuses générations dans un milieu dont la seule source d'azote est l'isotope lourd ¹⁵N : leur ADN devient « lourd ». Ils transfèrent ensuite les bactéries dans un milieu contenant l'azote ordinaire ¹⁴N, puis prélèvent de l'ADN après chaque génération (chaque réplication). Ils séparent les molécules selon leur densité par centrifugation dans un gradient de chlorure de césium : l'ADN lourd se place plus bas dans le tube que l'ADN léger.",
                "Avant le transfert, on obtient une seule bande d'ADN lourd (¹⁵N/¹⁵N). Après une génération, une seule bande de densité intermédiaire : toutes les molécules sont hybrides. Le modèle conservatif est rejeté, car il prévoyait deux bandes (une lourde et une légère). Après deux générations, on obtient deux bandes de même importance : une intermédiaire et une légère. Le modèle dispersif est rejeté, car il prévoyait une seule bande, de densité comprise entre l'intermédiaire et la légère. Seul le modèle semi-conservatif explique tous les résultats : après trois générations, il prévoit, comme observé, un quart de molécules hybrides et trois quarts de molécules légères.",
              ],
              box: { label: "À retenir", text: "Résultats de Meselson et Stahl : génération 0, ADN lourd ; génération 1, 100 % hybride ; génération 2, 50 % hybride et 50 % léger ; génération 3, 25 % hybride et 75 % léger. Seul le modèle semi-conservatif les explique." },
            },
            {
              heading: "Le mécanisme de la réplication",
              paragraphs: [
                "La réplication commence en des points précis de la molécule, les origines de réplication. La double hélice s'y ouvre localement, les liaisons entre les bases des deux brins étant rompues : il se forme un œil de réplication, visible en microscopie électronique. À chaque extrémité de l'œil se trouve une fourche de réplication ; les deux fourches progressent en sens opposés, et l'œil s'agrandit jusqu'à rejoindre les yeux voisins.",
                "Au niveau des fourches, des enzymes, les ADN polymérases, assemblent des nucléotides libres présents dans le noyau, en face de chaque brin parental, en respectant la complémentarité (A en face de T, G en face de C). Chaque brin parental est ainsi complété par un brin nouveau. Chez les eucaryotes, chaque chromosome possède de nombreuses origines de réplication (plusieurs milliers pour l'ensemble du génome humain), ce qui permet de copier des milliards de nucléotides en quelques heures, alors qu'une fourche ne progresse que de quelques dizaines de nucléotides par seconde. Chez les bactéries, le chromosome circulaire n'a qu'une origine.",
                "La réplication est très fidèle : l'ADN polymérase vérifie le nucléotide qu'elle vient d'ajouter et corrige la plupart de ses erreurs, et d'autres systèmes réparent les erreurs restantes. Elle n'est cependant pas parfaite : une erreur qui échappe à toutes les corrections devient une mutation, transmise aux cellules filles. C'est l'objet du chapitre suivant.",
              ],
              box: { label: "Définition", text: "La réplication semi-conservative est la copie de l'ADN dans laquelle chaque brin parental sert de modèle à la synthèse d'un brin complémentaire par l'ADN polymérase. Chaque molécule fille contient un brin ancien et un brin nouveau." },
            },
          ],
          keyPoints: [
            "La réplication a lieu en phase S et double la quantité d'ADN avant chaque division.",
            "Modèle semi-conservatif : chaque molécule fille contient un brin parental et un brin nouveau.",
            "Meselson et Stahl (1958, ¹⁵N puis ¹⁴N) : génération 1, 100 % hybride ; génération 2, 50 % hybride et 50 % léger.",
            "La double hélice s'ouvre aux origines de réplication ; les fourches progressent en sens opposés.",
            "L'ADN polymérase assemble des nucléotides libres en respectant la complémentarité A et T, G et C.",
            "La réplication est très fidèle, mais les rares erreurs non corrigées deviennent des mutations.",
          ],
          example: {
            statement: "Dans l'expérience de Meselson et Stahl, on obtient après une génération en milieu ¹⁴N une seule bande d'ADN, de densité intermédiaire entre l'ADN lourd et l'ADN léger. Quels modèles de réplication ce résultat permet-il de rejeter ? Justifiez.",
            solution: [
              "Au départ, toutes les molécules sont lourdes : leurs deux brins contiennent du ¹⁵N.",
              "Modèle conservatif : la molécule parentale resterait intacte (lourde) et la molécule nouvelle serait entièrement légère. On attendrait deux bandes, une lourde et une légère, en quantités égales. Ce n'est pas observé : le modèle conservatif est rejeté.",
              "Modèle semi-conservatif : chaque molécule fille aurait un brin lourd et un brin léger. On attend une seule bande intermédiaire : c'est conforme au résultat.",
              "Modèle dispersif : chaque molécule fille serait formée pour moitié de fragments lourds et pour moitié de fragments légers. On attend aussi une seule bande intermédiaire : ce modèle n'est pas encore rejeté.",
              "Conclusion : ce résultat rejette le modèle conservatif ; il faut le résultat de la deuxième génération (deux bandes, intermédiaire et légère) pour rejeter le modèle dispersif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un fragment d'ADN parental est formé du brin 1 : ATCGGA et du brin 2 : TAGCCT. Écrivez les deux molécules filles obtenues après une réplication, en précisant pour chacune quel brin est ancien et quel brin est nouveau.",
              hint: "Chaque brin parental reste entier et sert de modèle à un brin nouveau qui lui est complémentaire.",
              solution: [
                "Molécule fille 1 : le brin 1 ancien (ATCGGA) associé à un brin nouveau complémentaire (TAGCCT).",
                "Molécule fille 2 : le brin 2 ancien (TAGCCT) associé à un brin nouveau complémentaire (ATCGGA).",
                "Les deux molécules filles ont exactement la même séquence que la molécule parentale.",
                "Résultat : deux molécules identiques, chacune formée d'un brin ancien et d'un brin nouveau.",
              ],
            },
            {
              level: 2,
              statement: "On reprend l'expérience de Meselson et Stahl. a) Selon le modèle semi-conservatif, quelles proportions de molécules lourdes, hybrides et légères attend-on après trois générations en milieu ¹⁴N ? Justifiez à partir d'une molécule de départ. b) Quelles proportions le modèle conservatif aurait-il prévues après une puis après deux générations ?",
              hint: "Suivez une seule molécule lourde : les deux brins lourds ne sont jamais détruits, ils se retrouvent chacun dans une molécule différente.",
              solution: [
                "a) Une molécule lourde donne, après une génération, 2 molécules hybrides (un brin lourd, un brin léger).",
                "Après deux générations : 4 molécules, dont 2 hybrides (contenant chacune un des deux brins lourds d'origine) et 2 légères.",
                "Après trois générations : 8 molécules, dont toujours 2 hybrides et 6 légères, soit 2 ÷ 8 = 25 % d'hybrides, 75 % de légères et 0 % de lourdes.",
                "b) Modèle conservatif, génération 1 : la molécule lourde reste intacte et une molécule légère est créée, soit 50 % de lourdes et 50 % de légères (deux bandes).",
                "Génération 2 : 4 molécules, dont 1 lourde et 3 légères, soit 25 % de lourdes et 75 % de légères, et jamais de molécule hybride.",
                "Résultat : semi-conservatif, génération 3 : 25 % hybrides et 75 % légères ; conservatif : 50 % lourdes et 50 % légères, puis 25 % lourdes et 75 % légères.",
              ],
            },
            {
              level: 3,
              statement: "Données simplifiées : la molécule d'ADN d'un chromosome humain compte 1,2 × 10⁸ paires de nucléotides. Une fourche de réplication progresse à 50 nucléotides par seconde, et chaque origine de réplication donne deux fourches qui progressent en sens opposés. La phase S dure environ 8 h. a) Calculez la durée de la réplication de ce chromosome s'il n'avait qu'une seule origine. Exprimez-la en heures puis en jours. b) Le chromosome possède en réalité de nombreuses origines. Calculez la durée de la réplication avec 2 000 origines régulièrement espacées et activées en même temps. c) Comparez ces résultats à la durée de la phase S et concluez sur l'intérêt des origines multiples.",
              hint: "Une origine et ses deux fourches copient 2 × 50 = 100 nucléotides par seconde. Avec plusieurs origines, chacune n'a qu'un segment à copier.",
              solution: [
                "a) Une origine et ses deux fourches copient 100 nucléotides par seconde. Durée : 1,2 × 10⁸ ÷ 100 = 1,2 × 10⁶ s.",
                "En heures : 1,2 × 10⁶ ÷ 3 600 ≈ 333 h, soit 333 ÷ 24 ≈ 14 jours.",
                "b) Avec 2 000 origines régulièrement espacées, chaque segment mesure 1,2 × 10⁸ ÷ 2 000 = 60 000 nucléotides, copié par deux fourches à 100 nucléotides par seconde : 60 000 ÷ 100 = 600 s, soit 10 min.",
                "c) Avec une seule origine, la réplication durerait environ 14 jours, bien plus que la phase S (environ 8 h). Avec de nombreuses origines, elle est possible en quelques minutes à quelques heures ; dans la réalité, les origines ne s'activent pas toutes en même temps, ce qui étale la réplication sur la durée de la phase S.",
                "Conclusion : les origines multiples permettent de répliquer en quelques heures les très longues molécules d'ADN des eucaryotes, malgré la vitesse limitée des fourches.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la réplication de l'ADN.",
            statements: [
              { text: "Après réplication, chaque molécule fille contient un brin ancien et un brin nouveau.", true: true, why: "C'est la définition de la réplication semi-conservative." },
              { text: "La réplication a lieu pendant la mitose.", true: false, why: "Elle a lieu pendant la phase S de l'interphase, avant la mitose." },
              { text: "L'ADN polymérase assemble les nucléotides au hasard.", true: false, why: "Elle place en face de chaque base sa base complémentaire : A en face de T, G en face de C." },
              { text: "Après deux générations en milieu ¹⁴N, Meselson et Stahl obtiennent encore des molécules entièrement lourdes.", true: false, why: "Les deux brins lourds sont séparés dès la première génération : il n'y a plus que des molécules hybrides et légères." },
              { text: "Chez les eucaryotes, un chromosome possède de nombreuses origines de réplication.", true: true, why: "Cela permet de copier de très longues molécules d'ADN en quelques heures." },
              { text: "La réplication est parfaite et ne produit jamais d'erreur.", true: false, why: "Elle est très fidèle, mais de rares erreurs échappent aux corrections et deviennent des mutations." },
            ],
          },
          quiz: [
            {
              q: "Dans l'expérience de Meselson et Stahl, que trouve-t-on après une génération en milieu ¹⁴N ?",
              options: ["Une bande lourde et une bande légère", "Une seule bande légère", "Une seule bande intermédiaire", "Une seule bande lourde"],
              answer: 2,
              why: "Toutes les molécules sont hybrides : un brin lourd ancien et un brin léger nouveau.",
            },
            {
              q: "Quel résultat permet de rejeter le modèle dispersif ?",
              options: ["Les deux bandes, intermédiaire et légère, de la génération 2", "La bande unique de densité intermédiaire obtenue à la génération 1", "La bande lourde de la génération 0"],
              answer: 0,
              why: "Le modèle dispersif prévoyait une seule bande à la génération 2 ; l'apparition d'une bande légère distincte le rejette.",
            },
            {
              q: "Quel est le rôle de l'ADN polymérase ?",
              options: ["Couper l'ADN en fragments", "Assembler des nucléotides complémentaires d'un brin modèle", "Séparer les chromatides sœurs et les répartir entre les deux cellules filles", "Condenser les chromosomes"],
              answer: 1,
              why: "L'ADN polymérase synthétise le brin nouveau en plaçant en face de chaque base du brin modèle la base complémentaire.",
            },
            {
              q: "Après 4 générations en milieu ¹⁴N, quelle proportion de molécules hybrides attend-on ?",
              options: ["1/2", "1/4", "1/16", "1/8"],
              answer: 3,
              why: "Une molécule lourde donne 2⁴ = 16 molécules, dont toujours 2 hybrides : 2/16 = 1/8.",
            },
            {
              q: "Pourquoi l'ADN des eucaryotes possède-t-il de nombreuses origines de réplication ?",
              options: ["Pour que la réplication soit plus fidèle", "Pour produire plusieurs copies de chaque gène dans une même cellule", "Pour répliquer de très longues molécules en un temps limité", "Pour séparer les chromosomes homologues"],
              answer: 2,
              why: "Chaque fourche est lente ; en multipliant les origines, on multiplie les fourches qui travaillent en même temps.",
            },
          ],
          trap: "Penser que la réplication produit une molécule « ancienne » et une molécule « nouvelle » (modèle conservatif) : en réalité, les deux brins parentaux se séparent et se retrouvent chacun dans une molécule fille différente.",
          method: "Pour raisonner sur l'expérience de Meselson et Stahl, dessinez chaque molécule comme deux traits côte à côte, en couleur foncée pour un brin lourd et claire pour un brin léger, et dessinez génération après génération : les proportions se lisent directement sur le schéma.",
        },
      ],
    },
    /* ==================================================================== */
    /* MUTATIONS DE L'ADN ET VARIABILITÉ GÉNÉTIQUE                            */
    /* ==================================================================== */
    {
      id: 'mutations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'types-de-mutations',
          title: 'Les différents types de mutations',
          minutes: 30,
          objectives: [
            "Définir une mutation comme une modification rare et aléatoire de la séquence des nucléotides de l'ADN.",
            "Identifier, en comparant des séquences, une substitution, une délétion ou une insertion, et localiser la mutation.",
            "Relier l'apparition d'une mutation dans un gène à la formation d'un nouvel allèle.",
            "Prévoir, en découpant une séquence en triplets, si une mutation modifie un seul triplet ou décale toute la suite de la lecture.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une mutation ?",
              paragraphs: [
                "Une mutation est une modification de la séquence des nucléotides de l'ADN. Elle est rare, car la réplication est très fidèle et la plupart des lésions sont réparées. Elle est aléatoire : on ne peut pas prévoir quel nucléotide sera touché, ni quand. Une fois installée, elle est stable : elle est recopiée à chaque réplication et transmise à toutes les cellules qui descendent de la cellule mutée.",
                "La grande majorité des mutations touchent des régions de l'ADN qui ne font pas partie de gènes, ou n'ont aucun effet visible. Lorsqu'une mutation modifie la séquence d'un gène, elle crée une nouvelle version de ce gène, c'est-à-dire un nouvel allèle. Les mutations sont ainsi la source de la diversité des allèles.",
              ],
              box: { label: "Définition", text: "Une mutation est une modification rare, aléatoire et héréditaire (d'une cellule à ses descendantes) de la séquence des nucléotides de l'ADN. Si elle touche un gène, elle crée un nouvel allèle." },
            },
            {
              heading: "Les mutations ponctuelles : substitution, délétion, insertion",
              paragraphs: [
                "Les mutations étudiées en Première sont des mutations ponctuelles, qui ne touchent qu'un ou quelques nucléotides. On en distingue trois types. Une substitution est le remplacement d'un nucléotide par un autre : la longueur de la séquence ne change pas. Une délétion est la perte d'un ou de plusieurs nucléotides : la séquence est raccourcie. Une insertion (ou addition) est l'ajout d'un ou de plusieurs nucléotides : la séquence est allongée.",
                "Pour identifier une mutation, on compare la séquence d'un allèle à celle d'un allèle de référence, nucléotide par nucléotide ; au lycée, on utilise souvent un logiciel qui aligne les séquences et signale les différences. Exemple : si l'allèle de référence commence par ATGGCTTCAGGA et l'allèle muté par ATGGCTTCAGAA, le 11e nucléotide G a été remplacé par un A : c'est une substitution. Comme les deux brins sont complémentaires, une substitution sur un brin correspond, après réplication, au remplacement d'une paire de nucléotides par une autre (ici la paire G et C devient une paire A et T).",
                "Deux exemples réels montrent l'importance de ces mutations. La drépanocytose est due à une substitution d'un seul nucléotide (un A remplacé par un T) dans le gène de la bêta-globine, une chaîne de l'hémoglobine. La forme la plus fréquente de mucoviscidose est due à une délétion de trois nucléotides dans le gène CFTR.",
              ],
              box: { label: "À retenir", text: "Substitution : un nucléotide remplacé par un autre (longueur inchangée). Délétion : perte de nucléotides (séquence plus courte). Insertion : ajout de nucléotides (séquence plus longue)." },
            },
            {
              heading: "Des conséquences variables",
              paragraphs: [
                "Les conséquences d'une mutation dépendent de son emplacement et de sa nature. Vous verrez dans le chapitre sur l'expression du patrimoine génétique que l'information d'un gène est lue par groupes de trois nucléotides, les triplets (ou codons), chacun correspondant à un acide aminé de la protéine ou à un signal d'arrêt. Une substitution ne modifie qu'un seul triplet : selon les cas, la protéine est inchangée (mutation silencieuse), possède un acide aminé différent, ou se trouve raccourcie si le triplet devient un signal d'arrêt.",
                "Une insertion ou une délétion d'un ou deux nucléotides a souvent des effets plus importants : elle décale le découpage en triplets de toute la suite de la séquence. On parle de décalage du cadre de lecture : tous les triplets situés après la mutation sont modifiés. En revanche, une délétion ou une insertion de trois nucléotides (ou d'un multiple de trois) retire ou ajoute un ou plusieurs triplets sans décaler les suivants : c'est le cas de la délétion responsable de la forme fréquente de la mucoviscidose, qui fait perdre un seul acide aminé à la protéine CFTR.",
              ],
              box: { label: "Règle", text: "Une substitution modifie au plus un triplet. Une insertion ou une délétion d'un nombre de nucléotides qui n'est pas un multiple de 3 provoque un décalage du cadre de lecture : tous les triplets suivants changent." },
            },
          ],
          keyPoints: [
            "Une mutation est une modification rare, aléatoire et transmissible de la séquence des nucléotides de l'ADN.",
            "Substitution (remplacement), délétion (perte), insertion (ajout) d'un ou plusieurs nucléotides.",
            "Une mutation dans un gène crée un nouvel allèle.",
            "Une substitution ne modifie qu'un triplet ; une insertion ou une délétion d'un ou deux nucléotides décale le cadre de lecture.",
            "Exemples : drépanocytose (substitution dans le gène de la bêta-globine), mucoviscidose fréquente (délétion de trois nucléotides dans CFTR).",
          ],
          example: {
            statement: "Voici le début de la séquence d'un allèle de référence et de trois allèles mutés. Référence : ATGGCTTCAGGACTTAAG. Allèle 1 : ATGGCTTCAGAACTTAAG. Allèle 2 : ATGGCTTAGGACTTAAG. Allèle 3 : ATGGCTTCAGGACGTTAAG. Identifiez le type et la position de chaque mutation.",
            solution: [
              "On compte d'abord les nucléotides : la référence en a 18, l'allèle 1 en a 18, l'allèle 2 en a 17, l'allèle 3 en a 19. On compare ensuite les séquences nucléotide par nucléotide, depuis le début.",
              "Allèle 1 : même longueur ; les 10 premiers nucléotides sont identiques, puis le 11e est un A au lieu d'un G, et la suite est identique. C'est une substitution du G par un A en position 11.",
              "Allèle 2 : un nucléotide de moins ; ATGGCTT est identique, puis on lit AGG au lieu de CAGG. Le C en position 8 a disparu et la suite est identique : c'est une délétion du C en position 8.",
              "Allèle 3 : un nucléotide de plus ; ATGGCTTCAGGAC est identique (13 nucléotides), puis un G apparaît avant TTAAG : c'est une insertion d'un G entre les positions 13 et 14.",
              "Conclusion : allèle 1, substitution ; allèle 2, délétion ; allèle 3, insertion. Les allèles 2 et 3 provoquent un décalage du cadre de lecture.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Séquence de référence : TACGGATTC. Identifiez le type et la position de la mutation pour chacun des allèles suivants : a) TACGGTTTC ; b) TAGGATTC ; c) TACGGCATTC.",
              hint: "Commencez par comparer les longueurs : même longueur, une de moins ou une de plus.",
              solution: [
                "La référence compte 9 nucléotides : T A C G G A T T C.",
                "a) 9 nucléotides ; seul le 6e diffère (T au lieu de A) : substitution de A par T en position 6.",
                "b) 8 nucléotides ; on lit TA puis GGATTC : le C en position 3 a disparu : délétion du C en position 3.",
                "c) 10 nucléotides ; TACGG est identique, puis un C apparaît avant ATTC : insertion d'un C entre les positions 5 et 6.",
                "Résultat : a) substitution, b) délétion, c) insertion.",
              ],
            },
            {
              level: 2,
              statement: "Allèle de référence : ATGCATTCGGAATGG. Allèle 1 : ATGCATTGGAATGG. Allèle 2 : ATGCATGAATGG. Allèle 3 : ATGCATTAGGAATGG. a) Identifiez chaque mutation. b) Découpez chaque séquence en triplets à partir du premier nucléotide, et indiquez combien de triplets sont modifiés par rapport à la référence.",
              hint: "Écrivez les triplets les uns sous les autres, en colonnes, pour les comparer facilement.",
              solution: [
                "Référence en triplets : ATG CAT TCG GAA TGG (5 triplets).",
                "Allèle 1 (14 nucléotides) : le C en position 8 a disparu, c'est une délétion d'un nucléotide. Triplets : ATG CAT TGG AAT GG. À partir du 3e, tous les triplets sont modifiés et le dernier est incomplet : décalage du cadre de lecture.",
                "Allèle 2 (12 nucléotides) : les nucléotides 7 à 9 (TCG) ont disparu, c'est une délétion de trois nucléotides. Triplets : ATG CAT GAA TGG. Un triplet a disparu (TCG), les autres sont intacts : pas de décalage.",
                "Allèle 3 (15 nucléotides) : le C en position 8 est remplacé par un A, c'est une substitution. Triplets : ATG CAT TAG GAA TGG. Seul le 3e triplet change (TCG devient TAG).",
                "Résultat : allèle 1, délétion d'un nucléotide avec décalage (3 triplets modifiés) ; allèle 2, délétion de trois nucléotides (un triplet perdu) ; allèle 3, substitution (un seul triplet modifié).",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : début de la séquence codante du gène de la bêta-globine (brin non transcrit, triplets 1 à 8 de la chaîne), pour trois allèles. Allèle A : GTG CAT CTG ACT CCT GAG GAG AAG. Allèle S : GTG CAT CTG ACT CCT GTG GAG AAG. Allèle C : GTG CAT CTG ACT CCT AAG GAG AAG. Document 2 : le triplet GAG correspond à l'acide aminé acide glutamique, GTG à la valine, AAG à la lysine. Document 3 : les personnes qui possèdent deux allèles S sont atteintes de drépanocytose, une maladie grave ; celles qui possèdent deux allèles C présentent en général une anémie modérée. Questions : a) Identifiez les mutations qui distinguent les allèles S et C de l'allèle A, en précisant le nucléotide concerné. b) Déduisez-en les conséquences sur la chaîne de bêta-globine. c) Expliquez pourquoi on peut dire que le gène de la bêta-globine présente plusieurs allèles, et que des mutations différentes ont des effets différents.",
              hint: "Comparez triplet par triplet ; le nucléotide n°1 est le premier G, et chaque triplet occupe trois positions (le 6e triplet va de 16 à 18).",
              solution: [
                "a) Les trois allèles ont la même longueur (24 nucléotides) et ne diffèrent qu'au 6e triplet, qui occupe les positions 16 à 18.",
                "Allèle S : le 6e triplet est GTG au lieu de GAG ; le A en position 17 est remplacé par un T : substitution.",
                "Allèle C : le 6e triplet est AAG au lieu de GAG ; le G en position 16 est remplacé par un A : substitution.",
                "b) D'après le document 2, le 6e acide aminé de la chaîne est l'acide glutamique pour l'allèle A, la valine pour l'allèle S et la lysine pour l'allèle C. Le reste de l'extrait est inchangé : chaque mutation remplace un seul acide aminé.",
                "c) Le même gène, au même locus, existe sous au moins trois versions (A, S et C) : ce sont des allèles, apparus par mutation à partir d'une séquence ancestrale. Le document 3 montre que ces deux substitutions, qui touchent pourtant le même triplet, ont des conséquences différentes sur la santé : l'effet d'une mutation dépend du nucléotide touché et de l'acide aminé qui en résulte.",
                "Conclusion : deux substitutions ponctuelles du 6e triplet créent deux allèles, S et C, qui modifient le même acide aminé de la bêta-globine de façons différentes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Substitution", right: "Remplacement d'un nucléotide par un autre" },
              { left: "Délétion", right: "Perte d'un ou de plusieurs nucléotides" },
              { left: "Insertion", right: "Ajout d'un ou de plusieurs nucléotides" },
              { left: "Décalage du cadre de lecture", right: "Modification de tous les triplets situés après la mutation" },
              { left: "Mutation silencieuse", right: "Mutation sans effet sur la protéine produite" },
              { left: "Allèle", right: "Version d'un gène, apparue par mutation" },
            ],
          },
          quiz: [
            {
              q: "Une séquence de 30 nucléotides devient, après mutation, une séquence de 29 nucléotides. Il s'agit :",
              options: ["d'une substitution", "d'une insertion", "d'une délétion"],
              answer: 2,
              why: "La séquence a perdu un nucléotide : c'est une délétion.",
            },
            {
              q: "Quelle mutation ne modifie pas la longueur de la séquence ?",
              options: ["La substitution", "La délétion d'un nucléotide", "L'insertion d'un nucléotide", "La délétion de trois nucléotides"],
              answer: 0,
              why: "Une substitution remplace un nucléotide par un autre, sans en ajouter ni en retirer.",
            },
            {
              q: "Quelle mutation provoque un décalage du cadre de lecture ?",
              options: ["Une substitution", "Une délétion de trois nucléotides", "Une insertion de six nucléotides", "Une insertion d'un nucléotide"],
              answer: 3,
              why: "Un nucléotide ajouté décale tous les triplets suivants ; trois ou six nucléotides ajoutent des triplets entiers sans décalage.",
            },
            {
              q: "La drépanocytose est due à :",
              options: ["une délétion de trois nucléotides dans le gène CFTR", "une substitution d'un nucléotide dans le gène de la bêta-globine", "l'ajout d'un chromosome entier", "une insertion de plusieurs nucléotides dans le gène de l'insuline"],
              answer: 1,
              why: "Un A est remplacé par un T dans le 6e triplet du gène de la bêta-globine ; la délétion de trois nucléotides dans CFTR concerne la mucoviscidose.",
            },
            {
              q: "Une mutation qui modifie la séquence d'un gène :",
              options: ["crée un nouvel allèle de ce gène", "crée un nouveau gène à un autre locus", "est toujours mortelle", "disparaît à la mitose suivante"],
              answer: 0,
              why: "La séquence modifiée est une nouvelle version du même gène, au même locus : un nouvel allèle.",
            },
          ],
          trap: "Identifier une délétion comme une série de substitutions : après une délétion ou une insertion, tous les nucléotides suivants semblent différents si l'on compare position par position. Il faut chercher le décalage, en comparant d'abord les longueurs des séquences.",
          method: "Pour comparer deux séquences, commencez par compter leurs nucléotides, puis avancez depuis le début jusqu'à la première différence : si la suite de la séquence mutée correspond à la référence décalée d'un rang, c'est une délétion ou une insertion ; sinon, c'est une substitution.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'origine-reparation',
          title: 'Erreurs de réplication, agents mutagènes et réparation',
          minutes: 30,
          objectives: [
            "Expliquer l'origine des mutations : erreurs spontanées de réplication et lésions de l'ADN.",
            "Identifier des agents mutagènes physiques et chimiques, et exploiter des données montrant qu'ils augmentent la fréquence des mutations.",
            "Expliquer le rôle des systèmes de réparation de l'ADN, et relier un défaut de réparation à une augmentation des mutations.",
          ],
          course: [
            {
              heading: "Des erreurs spontanées lors de la réplication",
              paragraphs: [
                "Lors de la réplication, l'ADN polymérase place parfois en face d'une base un nucléotide qui ne lui est pas complémentaire, par exemple un G en face d'un T. On estime l'ordre de grandeur de ces erreurs à une pour cent mille nucléotides assemblés environ. La plupart sont aussitôt corrigées : l'ADN polymérase vérifie le nucléotide qu'elle vient de placer et peut le retirer (c'est la relecture), puis d'autres enzymes détectent et réparent les mauvais appariements restants.",
                "Après toutes ces corrections, il reste de l'ordre d'une erreur pour un milliard de nucléotides copiés. Cette fréquence est très faible, mais une cellule humaine diploïde copie environ 6,4 milliards de nucléotides à chaque phase S : quelques erreurs subsistent donc à chaque division. Si l'erreur n'est pas corrigée avant la réplication suivante, le nucléotide incorrect sert à son tour de modèle et la modification devient définitive sur les deux brins : la mutation est fixée. Par ailleurs, l'ADN subit aussi des altérations chimiques spontanées, même en l'absence de tout agent extérieur.",
              ],
              box: { label: "À retenir", text: "Les mutations spontanées sont surtout des erreurs de réplication qui ont échappé à la relecture de l'ADN polymérase et aux systèmes de réparation. Elles sont rares mais inévitables." },
            },
            {
              heading: "Les agents mutagènes",
              paragraphs: [
                "Certains facteurs de l'environnement augmentent la fréquence des mutations : ce sont des agents mutagènes. Parmi les agents physiques, les rayons ultraviolets (UV) du Soleil provoquent la liaison anormale de deux bases T voisines sur un même brin, formant un dimère de thymines qui déforme la double hélice. Les rayonnements ionisants (rayons X, rayons gamma, rayonnements émis par des substances radioactives) peuvent casser les brins d'ADN. Parmi les agents chimiques, le benzo[a]pyrène, présent dans la fumée de tabac et dans les aliments carbonisés, se fixe sur l'ADN et provoque des erreurs d'appariement.",
                "Ces agents ne visent pas un gène particulier : ils augmentent la probabilité qu'une mutation survienne, mais l'emplacement et la nature des mutations restent aléatoires. On le montre au laboratoire avec des levures : plus la durée d'exposition aux UV est longue, plus la proportion de cellules tuées augmente, et plus la fréquence des colonies mutantes parmi les survivantes est élevée. Ces mêmes agents, en provoquant des mutations dans des cellules du corps, augmentent le risque de cancer : c'est pourquoi on recommande de se protéger du Soleil et de ne pas fumer.",
              ],
              box: { label: "Définition", text: "Un agent mutagène est un facteur physique (UV, rayons X ou gamma) ou chimique (benzo[a]pyrène de la fumée de tabac...) qui augmente la fréquence des mutations, sans en déterminer l'emplacement." },
            },
            {
              heading: "La réparation de l'ADN",
              paragraphs: [
                "Les cellules possèdent plusieurs systèmes enzymatiques de réparation qui surveillent l'ADN en permanence. Ils repèrent les anomalies (mauvais appariements, dimères de thymines, cassures), retirent la portion de brin endommagée et la resynthétisent en utilisant le brin intact comme modèle, selon la règle de complémentarité. L'immense majorité des lésions sont ainsi réparées. Une mutation correspond donc à une lésion ou à une erreur qui n'a pas été réparée à temps.",
                "L'importance de ces systèmes apparaît chez les personnes atteintes de xeroderma pigmentosum, une maladie génétique rare. Leurs cellules ne réparent pas, ou très mal, les lésions dues aux UV. Les mutations s'accumulent dans les cellules de leur peau exposée au Soleil, et des cancers cutanés apparaissent dès l'enfance, bien plus tôt et bien plus souvent que dans le reste de la population. Ces personnes doivent se protéger strictement de la lumière du jour. La fréquence des mutations résulte donc d'un équilibre entre les lésions de l'ADN et leur réparation.",
              ],
              box: { label: "Règle", text: "Une mutation apparaît quand une lésion ou une erreur de réplication n'est pas réparée avant la réplication suivante. Un défaut des systèmes de réparation augmente la fréquence des mutations." },
            },
          ],
          keyPoints: [
            "Les erreurs de l'ADN polymérase sont rares et presque toutes corrigées (relecture, systèmes de réparation).",
            "Il subsiste environ une erreur par milliard de nucléotides copiés : quelques mutations à chaque division d'une cellule humaine.",
            "Agents mutagènes physiques (UV, rayons X ou gamma) et chimiques (benzo[a]pyrène) : ils augmentent la fréquence des mutations.",
            "Les mutations restent aléatoires : un agent mutagène ne choisit ni le gène ni la nature de la mutation.",
            "Les systèmes de réparation corrigent la plupart des lésions ; un défaut de réparation (xeroderma pigmentosum) multiplie les mutations et les cancers.",
          ],
          example: {
            statement: "On expose des levures aux UV pendant des durées croissantes, puis on étale 1 000 cellules sur un milieu de culture (données fictives). Durée 0 s : 950 colonies, dont 0 mutante. 15 s : 600 colonies, dont 3 mutantes. 30 s : 300 colonies, dont 6 mutantes. 45 s : 100 colonies, dont 5 mutantes. Calculez la fréquence des colonies mutantes parmi les colonies obtenues et interprétez ces résultats.",
            solution: [
              "Le nombre de colonies obtenues diminue quand la durée d'exposition augmente (950, 600, 300, 100) : les UV tuent une partie des levures.",
              "Fréquence des mutantes : 0 s : 0 ÷ 950 = 0 % ; 15 s : 3 ÷ 600 = 0,5 % ; 30 s : 6 ÷ 300 = 2 % ; 45 s : 5 ÷ 100 = 5 %.",
              "La fréquence des mutantes parmi les survivantes augmente avec la durée d'exposition, même si leur nombre absolu ne varie pas régulièrement (5 mutantes à 45 s contre 6 à 30 s, car il reste beaucoup moins de survivantes).",
              "Interprétation : les UV provoquent des lésions de l'ADN ; plus l'exposition est longue, plus les lésions sont nombreuses, ce qui augmente la mortalité et la probabilité qu'une lésion non réparée devienne une mutation.",
              "Conclusion : les UV sont un agent mutagène ; leur effet augmente avec la dose reçue.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacun des éléments suivants en trois catégories (origine spontanée, agent mutagène physique, agent mutagène chimique) : a) les rayons ultraviolets ; b) une erreur d'appariement de l'ADN polymérase ; c) le benzo[a]pyrène de la fumée de cigarette ; d) les rayons X ; e) les rayonnements émis par une substance radioactive.",
              hint: "Un agent physique est un rayonnement ; un agent chimique est une molécule.",
              solution: [
                "Origine spontanée : b) l'erreur d'appariement de l'ADN polymérase, qui se produit sans agent extérieur.",
                "Agents mutagènes physiques : a) les rayons ultraviolets, d) les rayons X, e) les rayonnements radioactifs.",
                "Agent mutagène chimique : c) le benzo[a]pyrène.",
                "Résultat : spontanée (b) ; physiques (a, d, e) ; chimique (c).",
              ],
            },
            {
              level: 2,
              statement: "Ordres de grandeur : lors d'une réplication complète, une cellule humaine diploïde assemble environ 6,4 × 10⁹ nucléotides. Avant toute correction, l'ADN polymérase commet environ 1 erreur pour 10⁵ nucléotides assemblés ; après la relecture et les systèmes de réparation, il reste environ 1 erreur pour 10⁹ nucléotides. a) Calculez le nombre d'erreurs commises lors d'une réplication complète, avant correction puis après correction. b) Calculez le pourcentage des erreurs corrigées. c) Expliquez pourquoi un organisme formé par des milliards de divisions cellulaires contient des cellules portant des mutations.",
              hint: "Divisez le nombre de nucléotides copiés par le nombre de nucléotides correspondant à une erreur.",
              solution: [
                "a) Avant correction : 6,4 × 10⁹ ÷ 10⁵ = 6,4 × 10⁴, soit environ 64 000 erreurs.",
                "Après correction : 6,4 × 10⁹ ÷ 10⁹ = 6,4, soit environ 6 erreurs par réplication.",
                "b) Erreurs corrigées : 64 000 - 6,4 ≈ 63 994, soit 63 994 ÷ 64 000 ≈ 0,9999, c'est-à-dire environ 99,99 % des erreurs.",
                "c) Même si presque toutes les erreurs sont corrigées, il en reste quelques-unes à chaque division. Avec un très grand nombre de divisions, les mutations s'accumulent : chaque cellule de l'organisme finit par porter quelques mutations qui lui sont propres.",
                "Résultat : environ 64 000 erreurs avant correction, environ 6 après ; 99,99 % des erreurs sont corrigées, mais les mutations s'accumulent au fil des divisions.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : on expose aux UV des cellules de peau d'une personne non atteinte et d'une personne atteinte de xeroderma pigmentosum (XP), puis on mesure la proportion de dimères de thymines encore présents 24 h plus tard (données fictives) : 10 % chez la personne non atteinte, 90 % chez la personne atteinte. Document 2 : survie de ces cellules (en %) après des doses croissantes d'UV de 0, 5, 10 et 15 J/m² (données fictives) : personne non atteinte 100, 80, 60, 45 ; personne atteinte 100, 30, 8, 1. Document 3 : les personnes atteintes de XP développent des cancers de la peau dès l'enfance, beaucoup plus tôt et plus souvent que le reste de la population. À partir des documents et de vos connaissances, expliquez la fréquence élevée des cancers de la peau chez les personnes atteintes de XP, et justifiez les mesures de protection qui leur sont recommandées.",
              hint: "Reliez trois étapes : lésions dues aux UV, réparation ou absence de réparation, accumulation de mutations dans les cellules de la peau.",
              solution: [
                "Document 1 : 24 h après l'exposition, la personne non atteinte a éliminé 90 % des dimères de thymines, alors que la personne atteinte en conserve 90 %. Les cellules XP ne réparent presque pas les lésions dues aux UV.",
                "Document 2 : pour une même dose, la survie des cellules XP est bien plus faible (1 % contre 45 % à 15 J/m²). Les lésions non réparées gênent le fonctionnement et la réplication de l'ADN et tuent les cellules.",
                "Mise en relation : chez les cellules XP qui survivent, les lésions non réparées sont copiées de façon erronée lors de la réplication et deviennent des mutations. Les mutations s'accumulent donc beaucoup plus vite dans les cellules de la peau exposée.",
                "Document 3 : certaines de ces mutations touchent des gènes qui contrôlent la division cellulaire, ce qui peut conduire à des cancers ; plus les mutations sont nombreuses, plus ce risque est élevé et précoce.",
                "Les mesures de protection (éviter la lumière du jour, vêtements couvrants, filtres anti-UV) visent à réduire le nombre de lésions, puisque les cellules ne peuvent pas les réparer.",
                "Conclusion : le défaut de réparation de l'ADN chez les personnes atteintes de XP entraîne l'accumulation de mutations induites par les UV, d'où des cancers de la peau précoces et fréquents ; seule la protection contre les UV limite ce risque.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui conduisent d'une exposition aux UV à une mutation transmise.",
            items: [
              "Exposition de la peau aux rayons UV",
              "Formation d'un dimère de thymines sur un brin d'ADN",
              "La lésion échappe aux systèmes de réparation",
              "Lors de la réplication, un nucléotide incorrect est placé en face de la lésion",
              "À la réplication suivante, la modification est copiée sur les deux brins : la mutation est fixée",
              "La mutation est transmise à toutes les cellules issues de cette cellule",
            ],
          },
          quiz: [
            {
              q: "Les rayons UV agissent sur l'ADN en provoquant surtout :",
              options: ["des dimères de thymines", "la perte d'un chromosome", "la destruction des histones", "la fusion de deux chromosomes"],
              answer: 0,
              why: "Les UV lient anormalement deux thymines voisines d'un même brin, ce qui déforme la double hélice.",
            },
            {
              q: "Un agent mutagène :",
              options: ["provoque toujours la même mutation", "ne touche que les gènes utiles à la cellule exposée", "augmente la fréquence des mutations", "corrige les erreurs de réplication"],
              answer: 2,
              why: "Il augmente la probabilité des mutations, dont l'emplacement et la nature restent aléatoires.",
            },
            {
              q: "Quel est le rôle de la relecture par l'ADN polymérase ?",
              options: ["Ouvrir la double hélice", "Corriger un nucléotide mal apparié", "Fabriquer des dimères de thymines", "Séparer les chromatides sœurs en anaphase"],
              answer: 1,
              why: "L'ADN polymérase vérifie le nucléotide qu'elle vient de placer et peut le retirer s'il n'est pas complémentaire.",
            },
            {
              q: "Chez les personnes atteintes de xeroderma pigmentosum :",
              options: ["les cellules ne se divisent plus", "les UV ne pénètrent pas dans les couches profondes de la peau", "l'ADN ne contient pas de thymine", "les lésions dues aux UV sont mal réparées"],
              answer: 3,
              why: "Un système de réparation est déficient : les lésions dues aux UV persistent et se transforment en mutations.",
            },
            {
              q: "Le benzo[a]pyrène de la fumée de tabac est :",
              options: ["un agent mutagène chimique", "un agent mutagène physique", "une enzyme de réparation"],
              answer: 0,
              why: "C'est une molécule qui se fixe sur l'ADN et favorise les erreurs d'appariement : un agent chimique.",
            },
          ],
          trap: "Croire qu'un agent mutagène provoque une mutation précise et « choisie » (par exemple que les UV « visent » les gènes de la peau) : il augmente seulement la fréquence des mutations, qui restent aléatoires par leur emplacement et leur nature.",
          method: "Face à des données sur un agent mutagène, distinguez toujours deux grandeurs : le nombre de cellules survivantes et la fréquence des mutants parmi les survivantes (nombre de mutants divisé par nombre de survivantes). C'est la fréquence, et non le nombre brut, qui montre l'effet mutagène.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mutations-somatiques-germinales',
          title: 'Mutations somatiques, mutations germinales et diversité des allèles',
          minutes: 30,
          objectives: [
            "Distinguer une mutation somatique d'une mutation germinale et prévoir si elle peut être transmise à la descendance.",
            "Expliquer la formation d'un clone de cellules mutées au sein d'un organisme.",
            "Relier l'accumulation des mutations germinales au fil des générations à la diversité des allèles dans une population.",
            "Calculer la fréquence d'un allèle dans une population.",
          ],
          course: [
            {
              heading: "Les mutations somatiques : un clone de cellules mutées",
              paragraphs: [
                "Les cellules somatiques sont toutes les cellules du corps qui ne participent pas à la formation des gamètes (cellules de la peau, du foie, des muscles...). Une mutation qui survient dans une cellule somatique est recopiée à chaque réplication et transmise, par mitoses, à toutes les cellules qui en descendent. Elle forme un clone de cellules mutées au sein de l'organisme, qui devient une mosaïque de cellules génétiquement un peu différentes.",
                "Plus la mutation survient tôt au cours du développement, plus la part du corps concernée est grande : une mutation dans l'une des quatre cellules d'un embryon touchera environ un quart des cellules de l'individu, alors qu'une mutation dans une cellule de la peau d'un adulte ne touchera qu'une petite zone. La plupart des mutations somatiques n'ont aucun effet visible ; certaines produisent une tache de couleur différente sur le pelage d'un animal ou dans l'iris d'un œil, et d'autres peuvent contribuer à l'apparition d'un cancer. Dans tous les cas, une mutation somatique n'est pas transmise aux enfants, car elle n'atteint pas les gamètes.",
              ],
              box: { label: "Définition", text: "Une mutation somatique touche une cellule du corps ne produisant pas de gamètes. Elle est transmise aux cellules issues de cette cellule (un clone), mais jamais à la descendance de l'individu." },
            },
            {
              heading: "Les mutations germinales : des mutations héréditaires",
              paragraphs: [
                "Les cellules de la lignée germinale sont celles qui, dans les testicules ou les ovaires, donnent naissance aux gamètes par méiose. Une mutation qui survient dans une de ces cellules peut se retrouver dans un gamète. Si ce gamète participe à la fécondation, la mutation est présente dans la cellule œuf, puis, par mitoses, dans toutes les cellules de l'enfant, y compris ses propres cellules germinales : elle pourra donc être transmise aux générations suivantes.",
                "Un enfant peut ainsi porter une mutation que ni son père ni sa mère ne possèdent dans leurs cellules : elle est apparue dans un de leurs gamètes. On parle de mutation nouvelle (ou de novo). Chaque être humain porte quelques dizaines de mutations nouvelles de ce type, absentes chez ses deux parents ; la plupart sont sans effet, car elles touchent des régions de l'ADN sans rôle important.",
              ],
              box: { label: "Définition", text: "Une mutation germinale touche une cellule de la lignée germinale. Elle peut être transmise à la descendance par un gamète et se retrouve alors dans toutes les cellules de l'enfant." },
            },
            {
              heading: "La diversité des allèles dans les populations",
              paragraphs: [
                "Génération après génération, les mutations germinales s'accumulent et se transmettent. Un même gène existe ainsi sous de nombreux allèles dans une population : on parle de polyallélisme. Le gène du groupe sanguin ABO présente plusieurs allèles (dont A, B et O), et plus d'un millier d'allèles différents du gène CFTR ont été décrits. Un gène est dit polymorphe lorsqu'au moins deux de ses allèles ont chacun une fréquence supérieure à 1 % dans la population.",
                "Chaque individu ne possède que deux allèles de chaque gène (un sur chaque chromosome homologue). S'ils sont identiques, l'individu est homozygote pour ce gène ; s'ils sont différents, il est hétérozygote. Les mutations germinales sont donc à l'origine de la diversité génétique des individus d'une espèce, l'une des composantes de la biodiversité. Selon leurs effets, les nouveaux allèles peuvent être neutres, favorables ou défavorables, et leur fréquence évolue au fil des générations, notamment sous l'effet de la sélection naturelle et du hasard, comme vous l'étudierez en Terminale.",
              ],
              box: { label: "À retenir", text: "Mutation somatique : clone de cellules mutées, non héréditaire. Mutation germinale : héréditaire. L'accumulation des mutations germinales crée la diversité des allèles (polyallélisme) dans les populations." },
            },
          ],
          keyPoints: [
            "Une mutation somatique est transmise par mitoses aux cellules issues de la cellule mutée (un clone), pas aux enfants.",
            "Plus une mutation somatique survient tôt dans le développement, plus la part du corps concernée est grande.",
            "Une mutation germinale peut passer dans un gamète, puis dans toutes les cellules de l'enfant : elle est héréditaire.",
            "L'accumulation des mutations germinales crée de nombreux allèles pour chaque gène : c'est le polyallélisme.",
            "Un individu possède deux allèles par gène : homozygote s'ils sont identiques, hétérozygote s'ils sont différents.",
            "Fréquence d'un allèle = nombre d'exemplaires de cet allèle ÷ nombre total d'allèles du gène dans la population.",
          ],
          example: {
            statement: "Indiquez, pour chacune des situations suivantes, si la mutation est somatique ou germinale, quelle partie de l'organisme elle touche, et si elle peut être transmise aux enfants. a) Une mutation causée par les UV dans une cellule de la peau du bras d'un adulte. b) Une mutation dans une cellule des testicules qui produit des spermatozoïdes. c) Une mutation dans l'une des quatre cellules d'un embryon très jeune.",
            solution: [
              "a) La cellule de la peau est une cellule somatique : mutation somatique. Elle touche le petit clone de cellules issues de la cellule mutée, dans une zone de la peau. Elle n'est pas transmise aux enfants.",
              "b) La cellule appartient à la lignée germinale : mutation germinale. Elle se retrouve dans une partie des spermatozoïdes produits ; si l'un d'eux féconde un ovocyte, l'enfant portera la mutation dans toutes ses cellules.",
              "c) La mutation est transmise à toutes les cellules issues de cette cellule embryonnaire, soit environ un quart des cellules de l'individu : celui-ci sera une mosaïque.",
              "Elle ne sera transmissible aux enfants que si ce quart de l'organisme comprend une partie des cellules de la lignée germinale.",
              "Conclusion : seules les mutations présentes dans la lignée germinale peuvent être héritées ; une mutation somatique reste limitée à l'individu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque cas, indiquez si la mutation est somatique ou germinale, et si elle peut être transmise aux enfants de la personne : a) une mutation dans une cellule de l'intestin ; b) une mutation dans un ovocyte ; c) une mutation dans un neurone ; d) une mutation dans une cellule des testicules qui donne des spermatozoïdes.",
              hint: "Demandez-vous seulement si la cellule touchée peut donner un gamète.",
              solution: [
                "a) Cellule de l'intestin : cellule somatique, mutation somatique, non transmissible aux enfants.",
                "b) Ovocyte : gamète femelle, mutation germinale, transmissible si cet ovocyte est fécondé.",
                "c) Neurone : cellule somatique, mutation somatique, non transmissible.",
                "d) Cellule à l'origine des spermatozoïdes : lignée germinale, mutation germinale, transmissible.",
                "Résultat : a et c sont somatiques (non transmises) ; b et d sont germinales (transmissibles).",
              ],
            },
            {
              level: 2,
              statement: "a) On admet que toutes les cellules d'un embryon se divisent au même rythme. Quelle proportion des cellules de l'individu portera une mutation apparue dans la cellule œuf ? Dans une des 2 cellules de l'embryon ? Dans une des 8 cellules ? b) Dans une population de 500 personnes (données fictives), on étudie un gène à deux allèles A et a : 320 personnes sont homozygotes A//A, 160 sont hétérozygotes A//a et 20 sont homozygotes a//a. Calculez la fréquence de chaque allèle. Le gène est-il polymorphe dans cette population ?",
              hint: "Chaque personne possède deux allèles du gène : la population en compte 2 × 500 au total. Un homozygote a//a apporte deux allèles a.",
              solution: [
                "a) Mutation dans la cellule œuf : toutes les cellules en descendent, soit 100 %.",
                "Dans une des 2 cellules : la moitié des cellules, soit 50 %. Dans une des 8 cellules : 1 ÷ 8, soit 12,5 % des cellules.",
                "b) Nombre total d'allèles : 2 × 500 = 1 000.",
                "Nombre d'allèles a : 160 (un par hétérozygote) + 2 × 20 (deux par homozygote a//a) = 200. Fréquence de a : 200 ÷ 1 000 = 0,20, soit 20 %.",
                "Nombre d'allèles A : 2 × 320 + 160 = 800. Fréquence de A : 800 ÷ 1 000 = 0,80, soit 80 %. Vérification : 80 % + 20 % = 100 %.",
                "Les deux allèles ont une fréquence supérieure à 1 % : le gène est polymorphe dans cette population.",
                "Résultat : 100 %, 50 %, 12,5 % ; fréquence de A = 0,80, de a = 0,20 ; gène polymorphe.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : dans une famille, deux parents de taille normale ont un fils atteint d'achondroplasie, une forme de nanisme ; ce fils a plus tard deux enfants, dont une fille atteinte. Aucun autre cas n'est connu dans la famille. Document 2 : l'achondroplasie est due à un allèle muté d'un gène porté par un autosome ; il suffit d'un seul exemplaire de cet allèle pour être atteint (allèle dominant). La majorité des personnes atteintes naissent de parents non atteints. Document 3 : l'analyse de l'ADN extrait du sang montre que les deux parents ne portent pas l'allèle muté, alors que leur fils le porte en un exemplaire dans toutes les cellules analysées. Expliquez, à partir des documents et de vos connaissances, l'origine de l'achondroplasie chez le fils, puis pourquoi sa fille en est atteinte.",
              hint: "Demandez-vous dans quelle cellule la mutation a pu apparaître pour que le fils la porte dans toutes ses cellules, alors que ses parents ne la portent pas.",
              solution: [
                "Documents 1 et 3 : les parents ne sont pas atteints et ne portent pas l'allèle muté dans leurs cellules sanguines ; leur fils porte cet allèle dans toutes ses cellules. Il ne l'a donc pas hérité d'un allèle déjà présent dans le corps de ses parents.",
                "Puisque toutes les cellules du fils portent l'allèle muté, celui-ci était présent dès la cellule œuf. La mutation est donc apparue dans un gamète d'un des parents (ou dans une cellule de leur lignée germinale) : c'est une mutation germinale nouvelle (de novo).",
                "Le document 2 indique que la majorité des cas naissent de parents non atteints, ce qui confirme que ce type de mutation nouvelle est fréquent pour ce gène.",
                "Le fils est hétérozygote : il possède un allèle muté et un allèle normal. L'allèle étant dominant, un seul exemplaire suffit à provoquer l'achondroplasie.",
                "La mutation étant présente dans toutes ses cellules, elle l'est aussi dans ses cellules germinales : la moitié environ de ses spermatozoïdes porte l'allèle muté. Sa fille a reçu un spermatozoïde porteur de l'allèle muté, et en est donc atteinte.",
                "Conclusion : une mutation germinale nouvelle, apparue chez un des parents, est devenue héréditaire chez leur fils, qui l'a transmise à sa fille.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : mutations somatiques et germinales.",
            statements: [
              { text: "Une mutation dans une cellule de la peau peut être transmise aux enfants.", true: false, why: "C'est une mutation somatique : elle n'atteint pas les gamètes." },
              { text: "Une mutation somatique est transmise à toutes les cellules issues de la cellule mutée.", true: true, why: "Elle est recopiée à chaque mitose et forme un clone de cellules mutées." },
              { text: "Un enfant peut porter une mutation absente des cellules de ses deux parents.", true: true, why: "La mutation a pu apparaître dans un gamète d'un parent : c'est une mutation nouvelle." },
              { text: "Une mutation germinale se retrouve dans toutes les cellules de l'enfant qui en hérite.", true: true, why: "Elle est présente dans la cellule œuf, dont toutes les cellules de l'enfant sont issues." },
              { text: "Un individu peut posséder une dizaine d'allèles différents d'un même gène.", true: false, why: "Un individu n'a que deux allèles par gène (un par homologue) ; c'est la population qui en possède de nombreux." },
              { text: "Les mutations germinales sont à l'origine de la diversité des allèles.", true: true, why: "En s'accumulant au fil des générations, elles créent de nouvelles versions des gènes." },
              { text: "Toutes les mutations ont des effets néfastes.", true: false, why: "La plupart sont neutres ; certaines sont défavorables, d'autres peuvent être favorables." },
            ],
          },
          quiz: [
            {
              q: "Une mutation somatique :",
              options: ["se transmet à la descendance", "touche aussitôt toutes les cellules du corps de l'individu", "se transmet aux cellules issues de la cellule mutée", "n'apparaît que dans les gamètes"],
              answer: 2,
              why: "Elle est recopiée par mitoses dans les cellules qui descendent de la cellule mutée, formant un clone, sans atteindre les gamètes.",
            },
            {
              q: "Où doit survenir une mutation pour pouvoir être transmise aux enfants ?",
              options: ["Dans une cellule de la lignée germinale", "Dans un neurone", "Dans une cellule du foie", "Dans une cellule de la moelle osseuse qui produit le sang"],
              answer: 0,
              why: "Seules les cellules de la lignée germinale donnent des gamètes, donc peuvent transmettre une mutation.",
            },
            {
              q: "Dans une population de 100 personnes, 30 sont hétérozygotes B//b et 5 sont homozygotes b//b. Quelle est la fréquence de l'allèle b ?",
              options: ["0,35", "0,20", "0,40", "0,05"],
              answer: 1,
              why: "Allèles b : 30 + 2 × 5 = 40, sur 2 × 100 = 200 allèles, soit 40 ÷ 200 = 0,20.",
            },
            {
              q: "Le polyallélisme désigne :",
              options: ["la présence de plusieurs gènes différents sur un même chromosome", "la présence de deux allèles chez un hétérozygote", "la répétition d'un gène dans le génome", "l'existence de nombreux allèles d'un gène dans une population"],
              answer: 3,
              why: "Un gène polyallélique existe sous de nombreuses versions dans la population, même si chaque individu n'en porte que deux.",
            },
            {
              q: "Une mutation survient dans l'une des deux cellules d'un embryon. Quelle proportion des cellules de l'individu la portera, si toutes se divisent au même rythme ?",
              options: ["Toutes, puisqu'elles proviennent du même embryon", "Environ la moitié", "Aucune"],
              answer: 1,
              why: "Toutes les cellules issues de la cellule mutée la portent, soit environ la moitié de l'organisme : l'individu est une mosaïque.",
            },
          ],
          trap: "Croire qu'une mutation est héréditaire dès qu'elle touche l'ADN d'une personne : seule une mutation de la lignée germinale peut passer dans un gamète. Une mutation de la peau ou du poumon, même à l'origine d'un cancer, n'est pas transmise aux enfants.",
          method: "Pour savoir si une mutation est héréditaire, suivez son trajet en trois questions : dans quelle cellule apparaît-elle ? Cette cellule peut-elle donner des gamètes ? Le gamète porteur participe-t-il à la fécondation ? Si une seule réponse est non, la mutation n'est pas transmise.",
        },
      ],
    },
    /* ==================================================================== */
    /* L'EXPRESSION DU PATRIMOINE GÉNÉTIQUE                                   */
    /* ==================================================================== */
    {
      id: 'expression-genetique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'transcription',
          title: 'La transcription et la maturation des ARN',
          minutes: 30,
          objectives: [
            "Expliquer la nécessité d'un intermédiaire, l'ARN messager, entre l'ADN du noyau et la synthèse des protéines dans le cytoplasme.",
            "Comparer la structure de l'ARN à celle de l'ADN.",
            "Décrire la transcription et écrire la séquence d'un ARN à partir de celle du brin transcrit de l'ADN.",
            "Expliquer la maturation des ARN pré-messagers (épissage) et le rôle de l'épissage alternatif dans la diversité des protéines.",
          ],
          course: [
            {
              heading: "Un intermédiaire entre l'ADN et les protéines",
              paragraphs: [
                "Chez les eucaryotes, l'ADN reste enfermé dans le noyau, alors que les protéines sont fabriquées dans le cytoplasme, par les ribosomes. L'information d'un gène doit donc être copiée sur une molécule capable de sortir du noyau. On le montre par une expérience de marquage : on fournit pendant quelques minutes à des cellules de l'uracile radioactif, un constituant propre à l'ARN, puis on les replace dans un milieu non radioactif. Juste après le marquage, la radioactivité se trouve surtout dans le noyau ; une heure plus tard environ, elle se trouve surtout dans le cytoplasme.",
                "L'ARN est donc fabriqué dans le noyau, puis migre vers le cytoplasme. L'ARN qui transporte ainsi l'information d'un gène jusqu'aux ribosomes s'appelle l'ARN messager (ARNm).",
              ],
            },
            {
              heading: "L'ARN, une molécule proche de l'ADN",
              paragraphs: [
                "L'ARN (acide ribonucléique) est, comme l'ADN, un enchaînement de nucléotides. Il en diffère par plusieurs points. Il est formé d'un seul brin. Son sucre est le ribose, et non le désoxyribose. Ses bases sont l'adénine (A), l'uracile (U), la guanine (G) et la cytosine (C) : l'uracile remplace la thymine. Enfin, un ARN messager est une molécule courte, copie d'un seul gène, qui sort du noyau par les pores de l'enveloppe nucléaire et qui est dégradée après un certain temps dans le cytoplasme.",
              ],
              box: { label: "Repère", text: "ADN : double brin, désoxyribose, bases A, T, G, C, reste dans le noyau, stable. ARNm : simple brin, ribose, bases A, U, G, C, passe dans le cytoplasme, durée de vie courte." },
            },
            {
              heading: "La transcription, copie d'un gène en ARN",
              paragraphs: [
                "La transcription est la synthèse d'un ARN à partir de l'ADN d'un gène. Elle a lieu dans le noyau. Une enzyme, l'ARN polymérase, se fixe au début du gène et ouvre localement la double hélice. Elle n'utilise qu'un seul des deux brins, appelé brin transcrit, comme modèle : elle assemble des ribonucléotides libres en respectant la complémentarité des bases (en face d'un A de l'ADN, elle place un U ; en face d'un T, un A ; en face d'un G, un C ; en face d'un C, un G). L'ARN produit a donc la même séquence que l'autre brin, le brin non transcrit, à ceci près que T est remplacé par U.",
                "Un même gène peut être transcrit en même temps par de nombreuses ARN polymérases qui se suivent : la cellule fabrique ainsi rapidement de nombreuses copies d'ARN, donc beaucoup de protéines. Toutes les cellules d'un organisme possèdent les mêmes gènes, mais elles ne transcrivent pas toutes les mêmes : une cellule du pancréas transcrit le gène de l'insuline, un neurone ne le transcrit pas.",
              ],
              box: { label: "Règle", text: "Transcription : brin transcrit de l'ADN → ARN complémentaire (A → U, T → A, G → C, C → G). L'ARN a la séquence du brin non transcrit, avec U à la place de T." },
            },
            {
              heading: "La maturation des ARN : l'épissage",
              paragraphs: [
                "Chez les eucaryotes, la plupart des gènes sont morcelés : ils comportent des portions, les exons, dont la séquence se retrouve dans l'ARN messager final, séparées par des portions, les introns, qui n'y figurent pas. La transcription produit d'abord un ARN pré-messager, copie complète du gène, exons et introns compris. Avant de quitter le noyau, cet ARN subit une maturation : les introns sont éliminés et les exons sont raccordés bout à bout. C'est l'épissage. L'ARN messager mature, plus court, passe alors dans le cytoplasme.",
                "L'épissage n'est pas toujours le même : selon le type de cellule ou le moment, certains exons peuvent être conservés ou éliminés. Cet épissage alternatif permet à un seul gène de donner plusieurs ARN messagers différents, donc plusieurs protéines. C'est l'une des raisons pour lesquelles l'être humain fabrique bien plus de protéines différentes qu'il ne possède de gènes (environ 20 000 gènes codant des protéines). Chez les bactéries, qui n'ont pas de noyau, les gènes n'ont en général pas d'introns, et la traduction commence avant même la fin de la transcription.",
              ],
              box: { label: "Définition", text: "L'épissage est l'étape de la maturation au cours de laquelle les introns sont retirés de l'ARN pré-messager et les exons raccordés. L'épissage alternatif produit plusieurs ARNm différents à partir d'un même gène." },
            },
          ],
          keyPoints: [
            "L'ARN messager, fabriqué dans le noyau, transporte l'information d'un gène jusqu'aux ribosomes du cytoplasme.",
            "ARN : simple brin, ribose, bases A, U, G, C (l'uracile remplace la thymine).",
            "Transcription : l'ARN polymérase copie le brin transcrit en un ARN complémentaire (A en face de T, U en face de A).",
            "L'ARN a la séquence du brin non transcrit, avec U à la place de T.",
            "Maturation : l'épissage élimine les introns de l'ARN pré-messager et raccorde les exons.",
            "L'épissage alternatif permet à un gène de produire plusieurs ARNm, donc plusieurs protéines.",
          ],
          example: {
            statement: "Le brin transcrit d'un fragment de gène a pour séquence TACGGTCAAACT. Écrivez la séquence de l'ARN obtenu par transcription, puis celle du brin non transcrit, et comparez-les.",
            solution: [
              "L'ARN est complémentaire du brin transcrit : en face de T on place A, en face de A on place U, en face de C on place G, en face de G on place C.",
              "TAC donne AUG ; GGT donne CCA ; CAA donne GUU ; ACT donne UGA.",
              "ARN : AUGCCAGUUUGA.",
              "Le brin non transcrit est complémentaire du brin transcrit : ATGCCAGTTTGA.",
              "Conclusion : l'ARN a la même séquence que le brin non transcrit, chaque T étant remplacé par un U.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Le brin transcrit d'un gène a pour séquence TACAAGCTTGGA. Écrivez la séquence de l'ARN transcrit, puis celle du brin non transcrit. b) Un ARN a pour séquence AUGCCUAGA. Retrouvez la séquence du brin transcrit de l'ADN qui lui a servi de modèle.",
              hint: "Dans l'ARN, la base complémentaire de A est U, et non T.",
              solution: [
                "a) ARN, complémentaire du brin transcrit : AUGUUCGAACCU.",
                "Brin non transcrit, complémentaire du brin transcrit : ATGTTCGAACCT (même séquence que l'ARN, avec T à la place de U).",
                "b) Le brin transcrit est complémentaire de l'ARN : en face de A on place T, en face de U on place A, en face de G on place C, en face de C on place G.",
                "AUGCCUAGA donne TACGGATCT.",
                "Résultat : a) ARN AUGUUCGAACCU, brin non transcrit ATGTTCGAACCT ; b) brin transcrit TACGGATCT.",
              ],
            },
            {
              level: 2,
              statement: "Un gène eucaryote comprend, dans l'ordre (données fictives) : exon 1 (120 nucléotides), intron 1 (300), exon 2 (90), intron 2 (450), exon 3 (210). a) Calculez la longueur de l'ARN pré-messager. b) Calculez la longueur de l'ARN messager mature et le pourcentage de l'ARN pré-messager éliminé lors de la maturation. c) Dans certaines cellules, l'exon 2 est éliminé avec les introns. Quelle est alors la longueur de l'ARNm ? Combien d'ARNm différents ce gène peut-il ainsi produire ?",
              hint: "L'ARN pré-messager copie tout le gène ; l'ARNm mature ne garde que les exons.",
              solution: [
                "a) ARN pré-messager : 120 + 300 + 90 + 450 + 210 = 1 170 nucléotides.",
                "b) ARNm mature (exons seulement) : 120 + 90 + 210 = 420 nucléotides.",
                "Partie éliminée : 1 170 - 420 = 750 nucléotides, soit 750 ÷ 1 170 ≈ 0,64, c'est-à-dire environ 64 % de l'ARN pré-messager.",
                "c) Sans l'exon 2 : 120 + 210 = 330 nucléotides.",
                "Le gène peut donc produire deux ARNm différents (avec ou sans l'exon 2), donc deux protéines différentes : c'est un épissage alternatif.",
                "Résultat : 1 170 nucléotides ; 420 nucléotides et environ 64 % éliminés ; 330 nucléotides et deux ARNm possibles.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : on place des cellules pendant 15 min dans un milieu contenant de l'uracile radioactif, puis dans un milieu non radioactif. Répartition de la radioactivité (données fictives) : à la fin du marquage, 90 % dans le noyau et 10 % dans le cytoplasme ; 90 min plus tard, 20 % dans le noyau et 80 % dans le cytoplasme. Document 2 : on met en contact l'ARNm mature d'un gène avec le brin transcrit de ce gène ; les séquences complémentaires s'apparient. Au microscope électronique, on observe que l'ARNm s'apparie avec l'ADN sur plusieurs portions, séparées par trois boucles d'ADN non appariées. Document 3 : l'alpha-amanitine, une toxine d'un champignon (l'amanite phalloïde), bloque l'ARN polymérase des cellules eucaryotes ; des cellules traitées cessent de fabriquer de l'ARNm, puis, quelques heures plus tard, des protéines. Exploitez les documents pour expliquer comment l'information d'un gène parvient du noyau aux ribosomes, et comment l'ARNm est obtenu à partir du gène.",
              hint: "L'uracile n'entre que dans la composition de l'ARN. Une boucle d'ADN non appariée correspond à une séquence du gène absente de l'ARNm mature.",
              solution: [
                "Document 1 : l'uracile radioactif est incorporé dans l'ARN. À la fin du marquage, l'ARN radioactif est surtout dans le noyau : c'est là qu'il est fabriqué. 90 min plus tard, il est surtout dans le cytoplasme : l'ARN a migré du noyau vers le cytoplasme.",
                "Document 3 : quand l'ARN polymérase est bloquée, il n'y a plus d'ARNm, et la synthèse des protéines s'arrête quelques heures après (le temps que les ARNm déjà présents soient dégradés). L'ARNm, produit par l'ARN polymérase lors de la transcription, est donc indispensable à la fabrication des protéines.",
                "Document 2 : l'ARNm mature est complémentaire du brin transcrit sur plusieurs portions : ce sont les exons. Les trois boucles d'ADN non appariées correspondent à des séquences du gène absentes de l'ARNm mature : ce sont trois introns, que l'on en déduit éliminés lors de la maturation. Le gène comporte donc quatre exons.",
                "Mise en relation : dans le noyau, l'ARN polymérase transcrit le gène en un ARN pré-messager, copie complète du gène ; l'épissage élimine les trois introns et raccorde les quatre exons ; l'ARNm mature migre alors dans le cytoplasme, où il est utilisé par les ribosomes.",
                "Conclusion : l'information génétique passe du noyau au cytoplasme grâce à l'ARNm, obtenu par transcription puis maturation (épissage) de l'ARN pré-messager.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui mènent d'un gène à un ARN messager mature.",
            items: [
              "L'ARN polymérase se fixe au début du gène",
              "La double hélice s'ouvre localement",
              "Des ribonucléotides complémentaires du brin transcrit sont assemblés",
              "L'ARN pré-messager, copie de tout le gène, se détache de l'ADN",
              "Les introns sont éliminés et les exons raccordés (épissage)",
              "L'ARN messager mature sort du noyau par les pores nucléaires",
            ],
          },
          quiz: [
            {
              q: "Quelle base de l'ARN remplace la thymine de l'ADN ?",
              options: ["L'adénine", "La cytosine", "L'uracile", "La guanine"],
              answer: 2,
              why: "L'ARN contient de l'uracile (U), qui s'apparie avec l'adénine, à la place de la thymine.",
            },
            {
              q: "Le brin transcrit d'un gène porte la séquence CAT. Quelle est la séquence de l'ARN correspondant ?",
              options: ["GTA", "CAU", "CAT", "GUA"],
              answer: 3,
              why: "En face de C on place G, en face de A on place U, en face de T on place A : GUA.",
            },
            {
              q: "Où a lieu la transcription chez les eucaryotes ?",
              options: ["Dans le noyau", "Dans le cytoplasme, sur les ribosomes", "Dans la membrane plasmique", "Dans l'enveloppe nucléaire"],
              answer: 0,
              why: "L'ADN reste dans le noyau : c'est là que l'ARN polymérase le transcrit.",
            },
            {
              q: "Que contient l'ARN messager mature ?",
              options: ["Les exons et les introns", "Les introns seulement", "Les exons seulement"],
              answer: 2,
              why: "L'épissage a éliminé les introns et raccordé les exons.",
            },
            {
              q: "L'épissage alternatif permet :",
              options: ["de réparer les mutations d'un gène", "d'obtenir plusieurs protéines à partir d'un même gène", "de transcrire les deux brins de l'ADN d'un gène en même temps et au même endroit", "de remplacer l'uracile par la thymine dans l'ARN"],
              answer: 1,
              why: "En conservant ou en éliminant certains exons, la cellule obtient plusieurs ARNm, donc plusieurs protéines, à partir d'un seul gène.",
            },
          ],
          trap: "Écrire l'ARN comme le complémentaire du brin non transcrit, ou mettre des T dans l'ARN : l'ARN est complémentaire du brin transcrit, il contient des U et jamais de T.",
          method: "Avant d'écrire un ARN, repérez clairement quel brin est donné (transcrit ou non transcrit). Si c'est le brin non transcrit, il suffit de recopier la séquence en remplaçant T par U ; si c'est le brin transcrit, appliquez la complémentarité avec U en face de A.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'traduction-code',
          title: 'La traduction et le code génétique',
          minutes: 35,
          objectives: [
            "Décrire les propriétés du code génétique (codons, codons d'initiation et d'arrêt, redondance, universalité).",
            "Décrire la traduction de l'ARNm en chaîne d'acides aminés par les ribosomes.",
            "Utiliser un tableau du code génétique pour traduire une séquence d'ARNm.",
            "Déterminer les conséquences d'une mutation sur la séquence d'une protéine (mutation silencieuse, faux-sens, non-sens, décalage du cadre de lecture).",
          ],
          course: [
            {
              heading: "Le code génétique",
              paragraphs: [
                "Une protéine est une chaîne d'acides aminés. Il existe 20 acides aminés différents, et c'est leur ordre, la séquence de la protéine, qui détermine sa forme et sa fonction. Or l'ARNm ne comporte que quatre types de nucléotides. La correspondance entre la séquence de l'ARNm et celle de la protéine est assurée par le code génétique : les nucléotides sont lus trois par trois, et chaque groupe de trois nucléotides, appelé codon, correspond à un acide aminé ou à un signal d'arrêt.",
                "Avec quatre nucléotides, il existe 4 × 4 × 4 = 4³ = 64 codons. 61 d'entre eux codent des acides aminés et 3 sont des codons stop (UAA, UAG, UGA), qui ne correspondent à aucun acide aminé et marquent la fin de la traduction. Le codon AUG, qui code la méthionine, est le codon d'initiation : la lecture commence toujours au premier AUG. Le premier codon déchiffré l'a été en 1961 par Marshall Nirenberg et Heinrich Matthaei : un ARN artificiel formé uniquement d'uracile (UUU...) donne une chaîne formée uniquement de phénylalanine.",
                "Le code génétique est redondant : la plupart des acides aminés sont codés par plusieurs codons (la glycine par GGU, GGC, GGA et GGG, la leucine par six codons). Il est univoque : un codon donné correspond toujours au même acide aminé. Les codons sont lus les uns à la suite des autres, sans chevauchement, à partir du codon d'initiation. Enfin, il est quasi universel : il est le même chez presque tous les êtres vivants, ce qui témoigne de leur origine commune et rend possible la transgenèse.",
              ],
              box: { label: "À retenir", text: "Code génétique : 64 codons, dont 61 codent les 20 acides aminés et 3 sont des codons stop (UAA, UAG, UGA). AUG (méthionine) est le codon d'initiation. Le code est redondant, univoque, non chevauchant et quasi universel." },
            },
            {
              heading: "La traduction, dans le cytoplasme",
              paragraphs: [
                "La traduction est la synthèse d'une chaîne d'acides aminés à partir de l'information de l'ARNm. Elle a lieu dans le cytoplasme, grâce aux ribosomes, des structures formées de deux sous-unités. Le ribosome se fixe sur l'ARNm et se déplace jusqu'au codon d'initiation AUG : c'est l'initiation. Il avance ensuite codon par codon ; pour chaque codon, un ARN de transfert (ARNt), qui porte un acide aminé précis et possède un triplet complémentaire du codon (l'anticodon), apporte cet acide aminé, qui est lié au précédent par une liaison peptidique : c'est l'élongation.",
                "Lorsque le ribosome atteint un codon stop, aucun ARNt ne lui correspond : la chaîne d'acides aminés est libérée et le ribosome se détache. C'est la terminaison. Plusieurs ribosomes peuvent traduire en même temps le même ARNm, à la suite les uns des autres (on parle de polysome) : un seul ARNm permet de fabriquer de nombreuses protéines identiques. La chaîne libérée se replie ensuite pour prendre une forme dans l'espace qui dépend de sa séquence et dont dépend sa fonction ; la méthionine initiale est souvent retirée.",
              ],
              box: { label: "Repère", text: "Traduction : initiation au codon AUG, élongation codon par codon (un ARNt apporte l'acide aminé correspondant à chaque codon), terminaison au codon stop." },
            },
            {
              heading: "Les conséquences des mutations sur la protéine",
              paragraphs: [
                "Grâce au code génétique, on peut prévoir l'effet d'une mutation sur la protéine. Une substitution peut être silencieuse : le nouveau codon code le même acide aminé (par exemple GGA devient GGG, toujours la glycine), grâce à la redondance du code. Elle peut être faux-sens : le nouveau codon code un autre acide aminé, comme dans la drépanocytose où GAG (acide glutamique) devient GUG (valine). Elle peut être non-sens : le codon devient un codon stop, et la protéine est raccourcie, souvent non fonctionnelle.",
                "Une insertion ou une délétion d'un ou deux nucléotides décale le cadre de lecture : tous les codons qui suivent sont modifiés, la séquence des acides aminés change complètement après la mutation et un codon stop apparaît souvent prématurément. L'effet sur la fonction de la protéine dépend de l'acide aminé touché et de son emplacement : un changement dans une région essentielle de la protéine peut la rendre inactive, alors qu'un changement ailleurs peut être sans conséquence.",
              ],
              box: { label: "Règle", text: "Mutation silencieuse : même acide aminé. Faux-sens : un acide aminé changé. Non-sens : codon stop prématuré, protéine raccourcie. Décalage du cadre de lecture : tous les acides aminés suivants changent." },
            },
          ],
          keyPoints: [
            "Un codon est un groupe de trois nucléotides de l'ARNm qui correspond à un acide aminé ou à un signal d'arrêt.",
            "64 codons : 61 pour 20 acides aminés (code redondant) et 3 codons stop (UAA, UAG, UGA) ; AUG est le codon d'initiation (méthionine).",
            "Le code génétique est univoque, non chevauchant et quasi universel.",
            "La traduction a lieu dans le cytoplasme : les ribosomes lisent l'ARNm de AUG jusqu'au codon stop, les ARNt apportent les acides aminés.",
            "Effets d'une mutation : silencieuse, faux-sens, non-sens, ou décalage du cadre de lecture.",
          ],
          example: {
            statement: "Traduisez l'ARNm suivant à l'aide de l'extrait du code génétique : AUGGCUUGGAAAGACUAAGCC. Extrait du code : AUG = méthionine (Met) ; GCU = alanine (Ala) ; UGG = tryptophane (Trp) ; AAA = lysine (Lys) ; GAC = acide aspartique (Asp) ; UAA = stop ; GCC = alanine (Ala).",
            solution: [
              "On repère le codon d'initiation AUG, ici dès le début, et l'on découpe l'ARNm en codons à partir de lui : AUG GCU UGG AAA GAC UAA GCC.",
              "On traduit chaque codon à l'aide du tableau : AUG = Met, GCU = Ala, UGG = Trp, AAA = Lys, GAC = Asp.",
              "Le codon UAA est un codon stop : la traduction s'arrête. Le codon GCC, situé après, n'est pas traduit.",
              "La chaîne obtenue compte 5 acides aminés : Met, Ala, Trp, Lys, Asp.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez l'ARNm AUGUUCGGACAUUGCUAG à l'aide de cet extrait du code génétique : AUG = Met ; UUC = Phe (phénylalanine) ; GGA = Gly (glycine) ; CAU = His (histidine) ; UGC = Cys (cystéine) ; UAG = stop.",
              hint: "Découpez l'ARNm en groupes de trois nucléotides à partir du premier AUG.",
              solution: [
                "Découpage en codons : AUG UUC GGA CAU UGC UAG.",
                "Traduction : AUG = Met, UUC = Phe, GGA = Gly, CAU = His, UGC = Cys, UAG = stop.",
                "Résultat : la chaîne compte 5 acides aminés : Met, Phe, Gly, His, Cys.",
              ],
            },
            {
              level: 2,
              statement: "Le brin transcrit d'un petit gène a pour séquence TACCGAAAAGTCACT. a) Écrivez la séquence de l'ARNm. b) Traduisez-la à l'aide de l'extrait du code : AUG = Met ; GCU = Ala ; UUU = Phe ; CAG = Gln (glutamine) ; UGA = stop. c) Combien d'acides aminés la chaîne compte-t-elle, et combien de nucléotides du gène sont nécessaires pour coder ces acides aminés ?",
              hint: "Transcrivez d'abord (complémentarité avec U en face de A), puis découpez en codons.",
              solution: [
                "a) ARNm, complémentaire du brin transcrit : AUGGCUUUUCAGUGA.",
                "b) Codons : AUG GCU UUU CAG UGA, soit Met, Ala, Phe, Gln, puis stop.",
                "c) La chaîne compte 4 acides aminés. Ils sont codés par 4 codons, soit 4 × 3 = 12 nucléotides, auxquels s'ajoutent les 3 nucléotides du codon stop, qui ne code aucun acide aminé.",
                "Résultat : ARNm AUGGCUUUUCAGUGA ; chaîne Met, Ala, Phe, Gln ; 4 acides aminés codés par 12 nucléotides (15 avec le codon stop).",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : ARNm de l'allèle de référence d'un gène (extrait) : AUG CAA GGA UUA CGU UGG GAA UAG. Document 2 : ARNm de quatre allèles mutés. Allèle 1 : AUG CAA GGG UUA CGU UGG GAA UAG. Allèle 2 : AUG CAA GGA UCA CGU UGG GAA UAG. Allèle 3 : AUG CAA GGA UUA CGU UGA GAA UAG. Allèle 4 (à découper vous-même en codons) : AUGCAAGAUUACGUUGGGAAUAG. Document 3 : extrait du code génétique : AUG = Met ; CAA = Gln ; GGA = Gly ; GGG = Gly ; UUA = Leu ; UCA = Ser ; CGU = Arg ; UGG = Trp ; GAA = Glu ; GAU = Asp ; UAC = Tyr ; GUU = Val ; AAU = Asn ; UAA, UAG et UGA = stop. Questions : a) Traduisez l'allèle de référence. b) Pour chaque allèle muté, identifiez la mutation et ses conséquences sur la chaîne d'acides aminés. c) Indiquez quels allèles risquent le plus de produire une protéine non fonctionnelle. Justifiez.",
              hint: "Comparez chaque allèle codon par codon avec la référence. Pour l'allèle 4, comptez les nucléotides : il en manque un.",
              solution: [
                "a) Référence : AUG CAA GGA UUA CGU UGG GAA UAG donne Met, Gln, Gly, Leu, Arg, Trp, Glu, puis stop : 7 acides aminés.",
                "Allèle 1 : substitution dans le 3e codon (GGA devient GGG). Les deux codons codent la glycine : la chaîne est inchangée. C'est une mutation silencieuse.",
                "Allèle 2 : substitution dans le 4e codon (UUA devient UCA). La leucine est remplacée par la sérine : c'est une mutation faux-sens, un seul acide aminé change.",
                "Allèle 3 : substitution dans le 6e codon (UGG devient UGA, codon stop). La traduction s'arrête après l'arginine : la chaîne ne compte plus que 5 acides aminés (Met, Gln, Gly, Leu, Arg). C'est une mutation non-sens.",
                "Allèle 4 : 23 nucléotides au lieu de 24 ; un des deux G du 3e codon (GGA) a disparu (délétion). Découpage : AUG CAA GAU UAC GUU GGG AAU AG, soit Met, Gln, Asp, Tyr, Val, Gly, Asn... Tous les acides aminés après le 2e sont changés et le codon stop n'est plus lu à sa place : c'est un décalage du cadre de lecture.",
                "c) Les allèles 3 (protéine raccourcie de deux acides aminés sur sept, dans cet extrait) et 4 (séquence entièrement modifiée après le 2e acide aminé) risquent le plus de donner une protéine non fonctionnelle. L'allèle 1 donne une protéine identique ; l'allèle 2 ne change qu'un acide aminé, avec un effet qui dépend de son importance pour la forme de la protéine.",
                "Conclusion : la redondance du code rend certaines mutations silencieuses, alors que les mutations non-sens et les décalages du cadre de lecture modifient profondément la protéine.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Codon", right: "Groupe de trois nucléotides de l'ARNm" },
              { left: "Anticodon", right: "Triplet d'un ARNt, complémentaire d'un codon" },
              { left: "Codon stop", right: "UAA, UAG ou UGA, qui met fin à la traduction" },
              { left: "AUG", right: "Codon d'initiation, qui code la méthionine" },
              { left: "Ribosome", right: "Structure qui lit l'ARNm et assemble les acides aminés" },
              { left: "Redondance du code", right: "Plusieurs codons pour un même acide aminé" },
            ],
          },
          quiz: [
            {
              q: "Combien de codons différents le code génétique comporte-t-il ?",
              options: ["20", "61", "64", "3"],
              answer: 2,
              why: "Avec 4 nucléotides lus trois par trois, il existe 4³ = 64 codons, dont 61 codent des acides aminés.",
            },
            {
              q: "Où a lieu la traduction ?",
              options: ["Dans le noyau, sur l'ADN", "Dans le cytoplasme, sur les ribosomes", "Dans le noyau, pendant l'épissage des ARN pré-messagers", "Dans les pores nucléaires"],
              answer: 1,
              why: "L'ARNm mature quitte le noyau et il est traduit par les ribosomes du cytoplasme.",
            },
            {
              q: "Que signifie « le code génétique est redondant » ?",
              options: ["Un même codon peut coder plusieurs acides aminés différents", "Il est identique chez tous les êtres vivants", "Les codons se chevauchent", "Un acide aminé peut être codé par plusieurs codons"],
              answer: 3,
              why: "Il y a 61 codons pour 20 acides aminés : la plupart des acides aminés ont plusieurs codons. Un codon, lui, ne code qu'un seul acide aminé.",
            },
            {
              q: "Une mutation transforme le codon UGG (tryptophane) en UAG. Il s'agit d'une mutation :",
              options: ["non-sens", "silencieuse", "faux-sens", "avec décalage du cadre de lecture"],
              answer: 0,
              why: "UAG est un codon stop : la traduction s'arrête prématurément et la protéine est raccourcie.",
            },
            {
              q: "Un ARNm compte 300 nucléotides entre le codon AUG (inclus) et le codon stop (exclu). Combien d'acides aminés la chaîne compte-t-elle ?",
              options: ["300", "150", "99", "100"],
              answer: 3,
              why: "300 nucléotides lus trois par trois forment 300 ÷ 3 = 100 codons, donc 100 acides aminés (le codon stop, exclu ici, n'en code pas).",
            },
          ],
          trap: "Commencer la traduction au premier nucléotide de la séquence au lieu du codon AUG, ou continuer après le codon stop : la lecture va de AUG au premier codon stop rencontré dans le même cadre, et rien n'est traduit au-delà.",
          method: "Pour traduire, procédez toujours dans le même ordre : repérez AUG, tracez des barres tous les trois nucléotides, traduisez codon par codon avec le tableau, et arrêtez-vous au premier codon stop. Pour une mutation, comparez les codons de la référence et du mutant en colonnes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'genotype-phenotype',
          title: 'Du génotype au phénotype, à plusieurs échelles',
          minutes: 30,
          objectives: [
            "Définir le génotype et le phénotype, et décrire un phénotype aux échelles moléculaire, cellulaire et de l'organisme.",
            "Expliquer, à partir de l'exemple de la drépanocytose, comment un allèle muté modifie le phénotype à ces trois échelles.",
            "Relier l'activité d'une enzyme, produit d'un gène, à un caractère de l'organisme.",
            "Montrer que le phénotype dépend aussi de l'environnement et que toutes les cellules n'expriment pas les mêmes gènes.",
          ],
          course: [
            {
              heading: "Génotype et phénotype",
              paragraphs: [
                "Le génotype d'un individu est l'ensemble des allèles qu'il possède ; pour un gène donné, il est formé des deux allèles portés par la paire de chromosomes homologues. Le phénotype est l'ensemble des caractères observables de l'individu. On le décrit à trois échelles : l'échelle moléculaire (les protéines présentes et leur forme), l'échelle cellulaire (la forme et le fonctionnement des cellules) et l'échelle de l'organisme, dite macroscopique (les caractères visibles, l'état de santé).",
                "Le lien entre génotype et phénotype passe par les protéines : chaque gène, par la transcription et la traduction, permet la fabrication d'une protéine. Les protéines ont des rôles très variés : protéines de structure (kératine des cheveux), transporteurs (hémoglobine qui transporte le dioxygène), enzymes qui accélèrent les réactions chimiques de la cellule, hormones, récepteurs. Une modification de la séquence d'un gène peut modifier la protéine et, de proche en proche, la cellule et l'organisme.",
              ],
              box: { label: "Définition", text: "Le génotype est l'ensemble des allèles d'un individu. Le phénotype est l'ensemble de ses caractères observables, aux échelles moléculaire, cellulaire et de l'organisme." },
            },
            {
              heading: "L'exemple de la drépanocytose",
              paragraphs: [
                "L'hémoglobine, contenue dans les globules rouges, transporte le dioxygène ; elle est formée notamment de chaînes de bêta-globine. L'allèle S du gène de la bêta-globine diffère de l'allèle A par une substitution qui remplace, en 6e position de la chaîne, l'acide glutamique par la valine. À l'échelle moléculaire, l'hémoglobine S ainsi produite a tendance, quand le sang est pauvre en dioxygène, à s'assembler en longues fibres rigides.",
                "À l'échelle cellulaire, ces fibres déforment les globules rouges, qui prennent une forme de faucille, deviennent rigides, se bloquent dans les petits vaisseaux sanguins et sont détruits plus vite que la normale. À l'échelle de l'organisme, il en résulte une anémie (fatigue, essoufflement), des crises douloureuses dues à l'obstruction des vaisseaux et un risque accru d'infections. Seules les personnes qui possèdent deux allèles S (génotype S//S) sont malades ; les personnes hétérozygotes A//S, qui fabriquent les deux hémoglobines, ne présentent généralement pas de symptômes.",
              ],
              box: { label: "À retenir", text: "Drépanocytose : allèle S (génotype) → hémoglobine S qui forme des fibres (moléculaire) → globules rouges en faucille (cellulaire) → anémie et crises douloureuses (organisme)." },
            },
            {
              heading: "Enzymes et caractères : albinisme et phénylcétonurie",
              paragraphs: [
                "De nombreux caractères dépendent de l'activité d'enzymes. La mélanine, pigment de la peau, des cheveux et des yeux, est fabriquée à partir d'un acide aminé, la tyrosine, par une chaîne de réactions dont la première étape est catalysée par une enzyme, la tyrosinase. Une personne qui possède deux allèles non fonctionnels du gène de la tyrosinase ne produit pas de mélanine : elle est atteinte d'albinisme (peau et cheveux très clairs, yeux sensibles à la lumière). Une personne qui possède un seul allèle fonctionnel produit assez d'enzyme pour avoir une pigmentation normale.",
                "La phénylcétonurie est due à deux allèles non fonctionnels du gène d'une enzyme du foie qui transforme la phénylalanine, un acide aminé apporté par l'alimentation, en tyrosine. La phénylalanine s'accumule alors dans le sang et devient toxique pour le cerveau en développement. En France, tous les nouveau-nés sont dépistés ; un régime alimentaire pauvre en phénylalanine, commencé tôt, permet d'éviter les troubles. Le génotype ne change pas, mais le phénotype de l'organisme est très différent : l'environnement, ici l'alimentation, intervient.",
              ],
            },
            {
              heading: "Le rôle de l'environnement et de la différenciation cellulaire",
              paragraphs: [
                "Toutes les cellules d'un organisme possèdent le même génome, mais elles n'expriment pas toutes les mêmes gènes : les précurseurs des globules rouges expriment le gène de la bêta-globine, les cellules bêta du pancréas celui de l'insuline, les cellules de l'épiderme ceux des kératines. Cette expression différente des gènes, contrôlée par des signaux, explique la diversité des cellules spécialisées d'un même individu.",
                "L'environnement influence aussi l'expression des gènes et le phénotype : l'exposition aux UV augmente la production de mélanine par les cellules de la peau (le bronzage), l'alimentation modifie le phénotype d'une personne atteinte de phénylcétonurie. Enfin, de nombreux caractères, comme la taille, dépendent de plusieurs gènes et de l'environnement. Le phénotype résulte donc de l'interaction entre le génotype et l'environnement.",
              ],
              box: { label: "Règle", text: "Le phénotype dépend du génotype, de l'expression des gènes dans chaque type de cellule et des facteurs de l'environnement." },
            },
          ],
          keyPoints: [
            "Génotype : ensemble des allèles d'un individu. Phénotype : ensemble des caractères observables.",
            "Le phénotype se décrit aux échelles moléculaire, cellulaire et de l'organisme ; les protéines font le lien avec le génotype.",
            "Drépanocytose : hémoglobine S (valine en 6e position) → fibres → globules rouges en faucille → anémie et crises douloureuses.",
            "Albinisme et phénylcétonurie : deux allèles non fonctionnels d'un gène d'enzyme modifient un caractère de l'organisme.",
            "Toutes les cellules ont le même génome mais n'expriment pas les mêmes gènes.",
            "Le phénotype résulte de l'interaction entre le génotype et l'environnement (UV, alimentation).",
          ],
          example: {
            statement: "Expliquez comment un changement d'un seul nucléotide dans le gène de la bêta-globine aboutit aux symptômes de la drépanocytose chez une personne de génotype S//S. Organisez votre réponse selon les échelles du phénotype.",
            solution: [
              "Génotype : la personne possède deux allèles S. Dans chacun, le 6e codon GAG est devenu GTG (substitution d'un A par un T), soit GUG dans l'ARNm.",
              "Échelle moléculaire : GUG code la valine au lieu de l'acide glutamique. Toute son hémoglobine est de l'hémoglobine S, qui s'assemble en fibres rigides quand le sang est pauvre en dioxygène.",
              "Échelle cellulaire : les fibres déforment les globules rouges en faucille ; rigides, ils circulent mal et sont détruits rapidement.",
              "Échelle de l'organisme : la destruction des globules rouges provoque une anémie (fatigue), et leur blocage dans les petits vaisseaux provoque des crises douloureuses.",
              "Conclusion : une mutation ponctuelle modifie une protéine, ce qui modifie la forme des cellules, puis l'état de santé de l'organisme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacune des caractéristiques suivantes, observées chez des personnes atteintes de drépanocytose, selon l'échelle du phénotype (moléculaire, cellulaire, organisme) : a) des globules rouges en forme de faucille ; b) une hémoglobine qui forme des fibres ; c) une fatigue importante ; d) une valine en 6e position de la bêta-globine ; e) des crises douloureuses ; f) des globules rouges rigides, détruits rapidement.",
              hint: "L'échelle moléculaire concerne les protéines, l'échelle cellulaire les globules rouges, l'échelle de l'organisme ce que ressent ou présente la personne.",
              solution: [
                "Échelle moléculaire : b) l'hémoglobine qui forme des fibres ; d) la valine en 6e position.",
                "Échelle cellulaire : a) les globules rouges en faucille ; f) les globules rouges rigides, détruits rapidement.",
                "Échelle de l'organisme : c) la fatigue ; e) les crises douloureuses.",
                "Résultat : moléculaire (b, d) ; cellulaire (a, f) ; organisme (c, e).",
              ],
            },
            {
              level: 2,
              statement: "Le gène de la tyrosinase existe notamment sous deux allèles : l'allèle T, fonctionnel, et l'allèle t, qui porte une mutation non-sens dans le début de sa séquence. a) Prévoyez la conséquence de la mutation de l'allèle t sur la protéine produite. b) Expliquez, en décrivant les échelles du phénotype, pourquoi une personne de génotype t//t est atteinte d'albinisme. c) Une personne de génotype T//t a une pigmentation normale : proposez une explication.",
              hint: "Une mutation non-sens fait apparaître un codon stop prématuré. Rappelez-vous le rôle de la tyrosinase dans la fabrication de la mélanine.",
              solution: [
                "a) Un codon stop apparaît prématurément : la traduction s'arrête tôt et la protéine produite est très raccourcie, donc non fonctionnelle (pas d'activité enzymatique).",
                "b) Échelle moléculaire : la personne t//t ne produit aucune tyrosinase fonctionnelle, la tyrosine n'est pas transformée et la mélanine n'est pas fabriquée.",
                "Échelle cellulaire : les cellules pigmentaires de la peau, des cheveux et des yeux ne contiennent pas de mélanine.",
                "Échelle de l'organisme : la peau et les cheveux sont très clairs et les yeux sont sensibles à la lumière : c'est l'albinisme.",
                "c) La personne T//t possède un allèle fonctionnel : ses cellules produisent de la tyrosinase active en quantité suffisante pour fabriquer la mélanine. L'allèle t ne se manifeste donc pas chez elle (il est récessif).",
                "Résultat : protéine raccourcie et inactive ; absence de mélanine chez t//t ; pigmentation normale chez T//t grâce à l'allèle T.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : dans le foie, une enzyme transforme la phénylalanine (un acide aminé apporté par l'alimentation) en tyrosine. Document 2 : chez un enfant atteint de phénylcétonurie, l'activité de cette enzyme est inférieure à 1 % de la normale ; l'enfant possède deux allèles mutés du gène de l'enzyme (données fictives pour l'activité). Document 3 : concentration de phénylalanine dans le sang (données fictives) : enfant non atteint, 60 µmol/L ; enfant atteint avec une alimentation ordinaire, 1 500 µmol/L ; même enfant atteint avec un régime pauvre en phénylalanine, 300 µmol/L. Une concentration très élevée est toxique pour le cerveau en développement. Document 4 : en France, tous les nouveau-nés font l'objet d'un dépistage de cette maladie quelques jours après la naissance. Montrez, à partir des documents et de vos connaissances, que le phénotype de l'enfant atteint résulte à la fois de son génotype et de son environnement, et justifiez l'intérêt du dépistage.",
              hint: "Distinguez ce qui ne change pas (le génotype, l'enzyme) de ce qui change avec l'alimentation (la concentration de phénylalanine, donc les troubles).",
              solution: [
                "Documents 1 et 2 : l'enfant possède deux allèles mutés du gène ; l'enzyme produite est presque inactive. La phénylalanine n'est presque plus transformée en tyrosine : c'est le phénotype moléculaire, qui découle directement du génotype.",
                "Document 3, alimentation ordinaire : la phénylalanine apportée par les aliments s'accumule dans le sang (1 500 µmol/L, soit 25 fois la valeur de l'enfant non atteint), à une concentration toxique pour le cerveau. Le phénotype de l'organisme comprendrait alors des troubles du développement cérébral.",
                "Document 3, régime pauvre en phénylalanine : la concentration descend à 300 µmol/L, bien plus faible (5 fois moins qu'avec une alimentation ordinaire). Le génotype et l'enzyme n'ont pas changé, mais l'apport de phénylalanine est réduit : les troubles peuvent être évités.",
                "Mise en relation : le génotype détermine l'activité de l'enzyme, mais les conséquences pour l'organisme dépendent de l'environnement, ici de la quantité de phénylalanine apportée par l'alimentation.",
                "Document 4 : le dépistage à la naissance permet de repérer les enfants atteints avant que la phénylalanine ne s'accumule et ne lèse le cerveau, et de commencer le régime très tôt.",
                "Conclusion : le phénotype résulte de l'interaction entre le génotype (deux allèles non fonctionnels) et l'environnement (alimentation) ; le dépistage précoce permet d'agir sur l'environnement pour éviter les troubles.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : du génotype au phénotype.",
            statements: [
              { text: "Le phénotype se décrit uniquement à l'échelle de l'organisme.", true: false, why: "Il se décrit aussi aux échelles moléculaire (protéines) et cellulaire." },
              { text: "Une seule substitution peut modifier la forme des globules rouges.", true: true, why: "C'est le cas de la drépanocytose : une valine remplace un acide glutamique dans la bêta-globine." },
              { text: "Une cellule du foie et un neurone d'une même personne ont des génomes différents.", true: false, why: "Elles ont le même génome, mais n'expriment pas les mêmes gènes." },
              { text: "Une personne hétérozygote A//S est généralement sans symptôme de drépanocytose.", true: true, why: "Elle fabrique aussi de l'hémoglobine A, normale, ce qui suffit en général." },
              { text: "Le régime alimentaire modifie le génotype d'un enfant atteint de phénylcétonurie.", true: false, why: "Le génotype ne change pas ; c'est le phénotype de l'organisme qui est modifié par l'environnement." },
              { text: "Le bronzage montre que l'environnement influence l'expression des gènes.", true: true, why: "Les UV augmentent la production de mélanine par les cellules de la peau." },
            ],
          },
          quiz: [
            {
              q: "Le génotype d'un individu est :",
              options: ["l'ensemble de ses caractères observables", "l'ensemble de ses protéines", "l'ensemble de ses allèles", "la forme de ses cellules"],
              answer: 2,
              why: "Le génotype désigne les allèles possédés ; les caractères observables, à toutes les échelles, forment le phénotype.",
            },
            {
              q: "Dans la drépanocytose, la forme en faucille des globules rouges relève du phénotype :",
              options: ["moléculaire", "macroscopique", "génotypique", "cellulaire"],
              answer: 3,
              why: "La forme des cellules est une caractéristique de l'échelle cellulaire.",
            },
            {
              q: "Pourquoi une personne de génotype t//t pour le gène de la tyrosinase est-elle albinos ?",
              options: ["Elle ne produit pas de tyrosinase fonctionnelle, donc pas de mélanine", "Elle possède trop de mélanine", "Ses cellules de peau ne possèdent aucun exemplaire du gène de la tyrosinase", "Elle manque de tyrosine dans son alimentation"],
              answer: 0,
              why: "Sans tyrosinase active, la tyrosine n'est pas transformée et la mélanine n'est pas fabriquée.",
            },
            {
              q: "Les cellules bêta du pancréas fabriquent de l'insuline, contrairement aux neurones, parce que :",
              options: ["elles seules possèdent le gène de l'insuline", "elles expriment le gène de l'insuline, que les neurones n'expriment pas", "les neurones ont perdu ce gène par mutation au cours du développement de l'embryon"],
              answer: 1,
              why: "Toutes les cellules ont le même génome ; l'expression des gènes diffère selon le type cellulaire.",
            },
            {
              q: "Un enfant atteint de phénylcétonurie suit un régime pauvre en phénylalanine. Que peut-on affirmer ?",
              options: ["Son génotype devient normal", "Son enzyme redevient active", "Les troubles cérébraux peuvent être évités", "Il n'a plus besoin d'aucune surveillance médicale par la suite"],
              answer: 2,
              why: "Le régime limite l'accumulation de phénylalanine : le génotype et l'enzyme ne changent pas, mais le phénotype de l'organisme est amélioré.",
            },
          ],
          trap: "Confondre génotype et phénotype, ou croire que le phénotype dépend seulement des gènes : le génotype (les allèles) ne change pas au cours de la vie, alors que le phénotype dépend aussi de l'environnement, comme le montrent le bronzage ou le régime de la phénylcétonurie.",
          method: "Pour expliquer un lien entre génotype et phénotype, construisez une chaîne en quatre maillons : allèle (séquence) → protéine (séquence, forme, activité) → cellule (forme, fonctionnement) → organisme (caractère, santé). Vérifiez que chaque maillon découle du précédent.",
        },
      ],
    },
  ],
}
