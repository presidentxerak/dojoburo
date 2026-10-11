import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-1re',
  chapters: [
    /* ==================================================================== */
    /* VARIATION GÉNÉTIQUE ET SANTÉ                                           */
    /* ==================================================================== */
    {
      id: 'genetique-sante',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'genetique-maladie',
          title: 'Patrimoine génétique et maladie',
          minutes: 30,
          objectives: [
            "Expliquer comment une mutation du gène CFTR modifie une protéine et entraîne les symptômes de la mucoviscidose, aux échelles moléculaire, cellulaire et de l'organisme.",
            "Analyser un arbre généalogique pour déterminer le mode de transmission d'une maladie monogénique et calculer un risque génétique.",
            "Distinguer une maladie monogénique d'une maladie multifactorielle, et expliquer la notion de facteur de risque génétique.",
            "Présenter les principes des traitements d'une maladie génétique, dont la thérapie génique.",
          ],
          course: [
            {
              heading: "Une maladie monogénique : la mucoviscidose",
              paragraphs: [
                "La mucoviscidose est la maladie génétique grave la plus fréquente dans les populations d'origine européenne : en France, elle touche environ une naissance sur 4 500. Elle est dite monogénique, car elle est due aux mutations d'un seul gène, le gène CFTR, situé sur le chromosome 7. Ce gène gouverne la synthèse d'une protéine membranaire, la protéine CFTR, qui forme un canal laissant sortir les ions chlorure (Cl⁻) des cellules qui tapissent les bronches, le pancréas ou l'intestin.",
                "Chez une personne malade, la protéine CFTR est absente de la membrane ou ne fonctionne pas. Les ions chlorure ne sortent plus des cellules, l'eau les suit moins (par osmose), et le mucus qui recouvre les muqueuses devient épais et collant. À l'échelle des organes, ce mucus obstrue les bronches, qui s'infectent facilement (toux, infections respiratoires répétées, insuffisance respiratoire), ainsi que les canaux du pancréas, ce qui gêne la digestion. Le phénotype s'observe donc à trois échelles : moléculaire (protéine anormale), cellulaire (transport des ions perturbé) et de l'organisme (symptômes).",
                "Plus de 2 000 mutations différentes du gène CFTR ont été décrites. La plus fréquente, appelée F508del, est la délétion de trois nucléotides : la protéine perd un seul acide aminé, la phénylalanine située en position 508. Ce petit changement suffit à modifier le repliement de la protéine, qui est reconnue comme anormale et dégradée par la cellule avant d'atteindre la membrane.",
              ],
              box: { label: "À retenir", text: "Gène CFTR muté (chromosome 7) → protéine CFTR absente ou non fonctionnelle → ions chlorure retenus dans les cellules → mucus épais → atteinte des bronches et du pancréas. Le phénotype se lit aux échelles moléculaire, cellulaire et de l'organisme." },
            },
            {
              heading: "Transmission et calcul de risque",
              paragraphs: [
                "L'allèle muté du gène CFTR est récessif : une personne qui possède un allèle normal et un allèle muté (hétérozygote) fabrique assez de protéine fonctionnelle et ne présente aucun symptôme ; on dit qu'elle est porteuse saine. Seules les personnes qui possèdent deux allèles mutés (homozygotes, ou porteuses de deux mutations différentes du gène) sont malades. Comme le gène est porté par un autosome, la maladie touche autant les garçons que les filles.",
                "Un arbre généalogique permet de déterminer le mode de transmission. Si deux parents non atteints ont un enfant malade, l'allèle de la maladie est forcément récessif : chaque parent est hétérozygote et a transmis un allèle muté. Pour deux parents hétérozygotes, chaque gamète a une chance sur deux de porter l'allèle muté ; un tableau de croisement montre que chaque enfant a une probabilité de 1/4 d'être malade, de 1/2 d'être porteur sain et de 1/4 de recevoir deux allèles normaux.",
                "Ces probabilités valent pour chaque naissance, indépendamment des précédentes : avoir eu un enfant malade ne protège pas les suivants. On estime qu'en France environ une personne sur 34 est porteuse saine d'un allèle muté, le plus souvent sans le savoir. Les familles concernées peuvent bénéficier d'un conseil génétique, et un dépistage de la mucoviscidose est réalisé à la naissance depuis 2002.",
              ],
              box: { label: "Règle", text: "Deux parents sains qui ont un enfant malade : l'allèle est récessif et les deux parents sont hétérozygotes. Pour chaque enfant de deux parents hétérozygotes : 1/4 malade, 1/2 porteur sain, 1/4 non porteur." },
            },
            {
              heading: "Soigner une maladie génétique",
              paragraphs: [
                "Les traitements de la mucoviscidose agissent d'abord sur les symptômes : kinésithérapie respiratoire pour évacuer le mucus, antibiotiques contre les infections, enzymes digestives prises aux repas pour compenser l'insuffisance du pancréas et, dans les formes graves, greffe des poumons. Depuis quelques années, des médicaments appelés modulateurs de CFTR agissent directement sur la protéine anormale : certains l'aident à se replier correctement et à rejoindre la membrane, d'autres augmentent l'ouverture du canal. Ils ne sont efficaces que pour certaines mutations, d'où l'intérêt de connaître le génotype précis du patient.",
                "La thérapie génique vise à agir sur la cause : faire entrer dans les cellules malades une copie fonctionnelle du gène, à l'aide d'un vecteur (souvent un virus rendu inoffensif). Pour la mucoviscidose, elle reste au stade de la recherche, car il est difficile d'atteindre durablement les cellules des bronches, qui se renouvellent. Pour d'autres maladies, comme certains déficits immunitaires ou certaines maladies héréditaires de la rétine, des thérapies géniques sont déjà autorisées.",
              ],
              box: { label: "Définition", text: "Thérapie génique : traitement qui consiste à introduire dans des cellules d'un patient une version fonctionnelle d'un gène, grâce à un vecteur, pour compenser l'allèle muté responsable de la maladie." },
            },
            {
              heading: "Les maladies multifactorielles",
              paragraphs: [
                "La plupart des maladies fréquentes (diabète de type 2, maladies cardiovasculaires, asthme, de nombreux cancers) ne dépendent pas d'un seul gène. Elles sont multifactorielles : leur apparition dépend de nombreux gènes, chacun ayant un petit effet, et de facteurs de l'environnement et du mode de vie (alimentation, sédentarité, tabac, pollution). Certains allèles augmentent le risque de développer la maladie : on parle de facteurs de risque génétiques, ou de prédisposition. Posséder ces allèles ne rend pas malade à coup sûr, et ne pas les posséder ne protège pas complètement.",
                "Pour mettre en évidence une composante génétique, on compare des vrais jumeaux (monozygotes, au génome identique) et des faux jumeaux (dizygotes, qui partagent en moyenne la moitié de leurs allèles, comme deux frères et sœurs). Si la maladie est plus souvent partagée par les vrais jumeaux, une composante génétique existe ; si les vrais jumeaux ne sont pas toujours atteints tous les deux, l'environnement intervient aussi. Les études d'association pangénomiques comparent le génome de milliers de malades et de personnes saines pour repérer les variants plus fréquents chez les malades. Elles estiment un risque à l'échelle d'une population, pas une certitude pour un individu.",
              ],
              box: { label: "À retenir", text: "Maladie monogénique : un seul gène, une transmission prévisible par des probabilités. Maladie multifactorielle : de nombreux gènes à faible effet et l'environnement ; on raisonne en facteurs de risque, et la prévention porte sur le mode de vie." },
            },
          ],
          keyPoints: [
            "La mucoviscidose est une maladie monogénique, autosomique et récessive, due aux mutations du gène CFTR (chromosome 7).",
            "Phénotype à trois échelles : protéine CFTR anormale (moléculaire), ions chlorure retenus (cellulaire), mucus épais qui obstrue bronches et pancréas (organisme).",
            "Deux parents sains porteurs (hétérozygotes) : chaque enfant a 1/4 de risque d'être malade et 1/2 d'être porteur sain.",
            "Traitements : soins des symptômes, modulateurs de CFTR selon la mutation ; la thérapie génique vise à apporter une copie fonctionnelle du gène.",
            "Maladie multifactorielle (diabète de type 2, maladies cardiovasculaires) : de nombreux gènes à faible effet et des facteurs environnementaux.",
            "Un facteur de risque génétique augmente une probabilité : il ne condamne pas, et son absence ne protège pas totalement.",
          ],
          example: {
            statement: "Paul et Marie, tous deux en bonne santé, ont trois enfants : Léa, atteinte de mucoviscidose, Hugo et Nina, non atteints. Ils attendent un quatrième enfant. On note N l'allèle normal du gène CFTR et m l'allèle muté. a) Montrez que l'allèle responsable de la maladie est récessif. b) Donnez les génotypes de Paul, de Marie et de Léa. c) Calculez la probabilité que le quatrième enfant soit malade. d) Hugo n'est pas malade : quelle est la probabilité qu'il soit porteur sain ?",
            solution: [
              "a) Léa est malade alors que ses deux parents ne le sont pas : elle a reçu l'allèle de la maladie de parents qui ne l'expriment pas. Chez eux, cet allèle est donc masqué par l'allèle normal : il est récessif.",
              "b) Léa, malade, possède deux allèles mutés : (m//m). Elle a reçu un allèle m de chaque parent ; les parents, sains, possèdent aussi un allèle N. Paul et Marie sont donc hétérozygotes : (N//m).",
              "c) Chaque parent transmet l'allèle m avec une probabilité de 1/2. Le quatrième enfant est (m//m) avec une probabilité de 1/2 × 1/2 = 1/4, quel que soit l'état des trois premiers enfants.",
              "d) Le croisement (N//m) × (N//m) donne 1/4 (N//N), 2/4 (N//m) et 1/4 (m//m). Hugo n'est pas malade : il fait partie des 3/4 non malades. La probabilité qu'il soit porteur est donc (2/4) ÷ (3/4) = 2/3.",
              "Réponse : l'allèle est récessif, les parents sont (N//m) et Léa (m//m) ; le quatrième enfant a un risque de 1/4 d'être malade ; Hugo a 2 chances sur 3 d'être porteur sain.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici cinq observations relevées chez une personne atteinte de mucoviscidose : a) des infections pulmonaires répétées ; b) une protéine CFTR privée de la phénylalanine en position 508 ; c) des cellules bronchiques qui ne rejettent plus les ions chlorure ; d) des bronches encombrées par un mucus épais ; e) une digestion difficile et une perte de poids. 1) Classez chaque observation selon l'échelle du phénotype : moléculaire, cellulaire, ou organe et organisme. 2) Reliez-les en une chaîne de causes, de la mutation aux symptômes.",
              hint: "Partez de la plus petite échelle (la molécule) et demandez-vous, à chaque étape, quelle est la conséquence à l'échelle supérieure.",
              solution: [
                "1) Échelle moléculaire : b (protéine anormale). Échelle cellulaire : c (transport des ions chlorure perturbé). Échelle des organes et de l'organisme : d, a et e.",
                "2) La mutation F508del du gène CFTR produit une protéine privée d'un acide aminé (b), mal repliée et détruite avant d'atteindre la membrane.",
                "Les cellules des bronches et du pancréas ne rejettent plus les ions chlorure (c) ; l'eau suit moins, le mucus devient épais.",
                "Ce mucus encombre les bronches (d), où les bactéries prolifèrent, d'où les infections répétées (a) ; il obstrue aussi les canaux du pancréas, d'où la digestion difficile et la perte de poids (e).",
                "Résultat : b → c → d → a et e ; un génotype modifié se traduit par un phénotype modifié à toutes les échelles.",
              ],
            },
            {
              level: 2,
              statement: "Jeanne est atteinte de mucoviscidose ; ses parents sont sains. Son frère Tom, non malade, souhaite avoir un enfant avec Inès, qui n'a aucun cas de mucoviscidose dans sa famille. On admet que la probabilité qu'une personne sans antécédent familial soit porteuse saine est de 1/34. a) Donnez les génotypes des parents de Jeanne et de Tom. b) Quelle est la probabilité que Tom soit porteur sain ? c) Calculez la probabilité que le premier enfant de Tom et Inès soit malade. d) Un test génétique, supposé parfait, montre qu'Inès n'est pas porteuse : que devient ce risque ?",
              hint: "Un enfant ne peut être malade que si ses deux parents sont porteurs et lui transmettent chacun l'allèle muté : multipliez les trois probabilités.",
              solution: [
                "a) Jeanne est malade (m//m) et ses parents sont sains : chacun lui a transmis un allèle m tout en possédant un allèle N. Les deux parents sont (N//m).",
                "b) Tom n'est pas malade : parmi les 3/4 d'enfants non malades du couple, 2/4 sont porteurs. P(Tom porteur) = (2/4) ÷ (3/4) = 2/3.",
                "c) P(enfant malade) = P(Tom porteur) × P(Inès porteuse) × P(deux allèles m transmis) = 2/3 × 1/34 × 1/4 = 2/408 = 1/204.",
                "Soit environ 0,005, c'est-à-dire un risque d'environ 0,5 %.",
                "d) Si Inès est (N//N), elle transmet toujours l'allèle N : l'enfant ne peut pas être (m//m). Le risque d'avoir un enfant malade devient nul (l'enfant peut au plus être porteur sain).",
                "Résultat : parents (N//m) ; P(Tom porteur) = 2/3 ; risque de 1/204 pour le premier enfant, qui devient nul si Inès n'est pas porteuse.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 (données fictives) : taux de concordance pour le diabète de type 2, c'est-à-dire la probabilité que le second jumeau soit atteint quand le premier l'est : vrais jumeaux 70 %, faux jumeaux 25 %. Document 2 (données fictives) : dans une population, 8 % des personnes porteuses d'un variant V d'un gène impliqué dans la sécrétion d'insuline développent un diabète de type 2 avant 60 ans, contre 5 % des non-porteurs. Document 3 (données fictives) : parmi les porteurs du variant V qui pratiquent une activité physique régulière et gardent un poids stable, la fréquence du diabète avant 60 ans tombe à 4 %. Montrez, à partir de ces documents, que le diabète de type 2 est une maladie multifactorielle, puis discutez de l'intérêt d'un test révélant la présence du variant V.",
              hint: "Exploitez chaque document séparément (ce qu'il montre sur les gènes, ce qu'il montre sur l'environnement), puis rassemblez vos conclusions.",
              solution: [
                "Document 1 : les vrais jumeaux ont le même génome, les faux jumeaux n'en partagent qu'une partie. La concordance est bien plus forte chez les vrais jumeaux (70 % contre 25 %) : la maladie a une composante génétique.",
                "Mais la concordance des vrais jumeaux n'est pas de 100 % : avec des génomes identiques, l'un peut être atteint et l'autre non. L'environnement intervient donc aussi.",
                "Document 2 : le variant V fait passer la fréquence de la maladie de 5 % à 8 %, soit un risque multiplié par 8 ÷ 5 = 1,6. Pourtant, 92 % des porteurs ne sont pas malades avant 60 ans : V est un facteur de risque, pas une cause suffisante.",
                "Document 3 : chez les porteurs de V, un mode de vie actif ramène la fréquence à 4 %, en dessous de celle des non-porteurs (5 %) : les facteurs environnementaux peuvent compenser le facteur génétique.",
                "Bilan : le diabète de type 2 dépend de gènes (qui modulent le risque) et de l'environnement (activité physique, alimentation, poids) : c'est une maladie multifactorielle.",
                "Discussion : un test révélant V donne une probabilité et non une certitude ; il peut inciter un porteur à adopter un mode de vie protecteur, mais un résultat négatif ne doit pas rassurer à tort, puisque 5 % des non-porteurs sont atteints.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Hétérozygote", right: "Individu qui possède deux allèles différents d'un même gène" },
              { left: "Porteur sain", right: "Hétérozygote non malade qui peut transmettre l'allèle muté" },
              { left: "Allèle récessif", right: "Allèle qui ne s'exprime pas en présence d'un allèle dominant" },
              { left: "Maladie monogénique", right: "Maladie due aux mutations d'un seul gène" },
              { left: "Maladie multifactorielle", right: "Maladie qui dépend de plusieurs gènes et de l'environnement" },
              { left: "Thérapie génique", right: "Apport d'une copie fonctionnelle d'un gène dans des cellules d'un patient" },
            ],
          },
          quiz: [
            {
              q: "Le gène CFTR, impliqué dans la mucoviscidose, est porté par :",
              options: ["le chromosome X", "le chromosome Y", "le chromosome 7", "le chromosome 21"],
              answer: 2,
              why: "CFTR est situé sur le chromosome 7, un autosome : la maladie touche donc autant les filles que les garçons.",
            },
            {
              q: "Deux parents sains ont un enfant atteint de mucoviscidose. On peut en déduire que :",
              options: ["les deux parents sont hétérozygotes", "un seul des deux parents porte l'allèle muté", "l'allèle muté est dominant sur l'allèle normal", "l'enfant a subi une mutation au cours de sa vie"],
              answer: 0,
              why: "L'enfant malade a reçu un allèle muté de chaque parent ; les parents, non malades, possèdent aussi un allèle normal : ils sont hétérozygotes.",
            },
            {
              q: "La mutation F508del du gène CFTR entraîne :",
              options: ["l'absence totale du gène CFTR dans le génome", "l'ajout de trois acides aminés à la protéine", "une protéine plus longue qui fonctionne mieux", "la perte d'un acide aminé dans la protéine"],
              answer: 3,
              why: "La délétion de trois nucléotides fait perdre à la protéine la phénylalanine 508 : la protéine se replie mal et n'atteint pas la membrane.",
            },
            {
              q: "Un facteur de risque génétique d'une maladie multifactorielle :",
              options: ["rend la maladie certaine chez son porteur", "augmente la probabilité de la maladie", "n'a d'effet que chez les vrais jumeaux", "se transmet uniquement par la mère"],
              answer: 1,
              why: "Un facteur de risque augmente la probabilité de développer la maladie, sans la rendre certaine : l'environnement et d'autres gènes interviennent.",
            },
            {
              q: "Pour deux parents hétérozygotes, la probabilité qu'un enfant soit porteur sain est :",
              options: ["1/4", "3/4", "1/2", "2/3"],
              answer: 2,
              why: "Le croisement (N//m) × (N//m) donne 1/4 (N//N), 1/2 (N//m) et 1/4 (m//m). La valeur 2/3 ne concerne qu'un enfant dont on sait déjà qu'il n'est pas malade.",
            },
          ],
          trap: "Croire qu'après un premier enfant malade, les suivants seront forcément sains : le risque de 1/4 se recalcule à chaque naissance, indépendamment des précédentes. Autre confusion fréquente : donner 1/2 au lieu de 2/3 pour un enfant dont on sait déjà qu'il n'est pas malade.",
          method: "Devant un arbre généalogique, cherchez d'abord un enfant atteint né de deux parents sains : il prouve que l'allèle est récessif. Écrivez ensuite les génotypes certains (les malades, puis leurs parents), et seulement après les probabilités, en multipliant celles des étapes indépendantes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cancerisation',
          title: 'Altérations du génome et cancérisation',
          minutes: 30,
          objectives: [
            "Expliquer qu'un cancer résulte de l'accumulation de mutations somatiques dans une lignée de cellules qui échappent au contrôle de la division.",
            "Distinguer le rôle des proto-oncogènes et celui des gènes suppresseurs de tumeurs.",
            "Identifier les facteurs de risque de cancer (agents mutagènes, virus, prédispositions héréditaires) et en déduire des mesures de prévention.",
          ],
          course: [
            {
              heading: "Le cancer, une prolifération cellulaire incontrôlée",
              paragraphs: [
                "Dans un organisme sain, la division des cellules est étroitement contrôlée : une cellule ne se divise que lorsqu'elle reçoit des signaux qui l'y autorisent, elle s'arrête quand son ADN est endommagé, et elle peut déclencher sa propre mort, l'apoptose (mort cellulaire programmée), lorsqu'elle est trop altérée. Un cancer apparaît lorsqu'une cellule échappe à ces contrôles et se divise de façon anarchique : elle donne un clone de cellules qui forme une tumeur.",
                "Une tumeur bénigne reste localisée et ne colonise pas les autres organes. Une tumeur maligne, le cancer à proprement parler, envahit les tissus voisins ; certaines de ses cellules passent dans le sang ou dans la lymphe et vont former des tumeurs secondaires, appelées métastases, dans d'autres organes. Ce sont souvent les métastases qui font la gravité d'un cancer.",
              ],
              box: { label: "Définition", text: "Cancer : maladie due à la multiplication incontrôlée de cellules issues d'une même cellule anormale, qui ont accumulé des mutations, et qui peuvent envahir les tissus voisins et former des métastases." },
            },
            {
              heading: "Des mutations somatiques qui s'accumulent",
              paragraphs: [
                "La cancérisation est due à des altérations du génome de cellules somatiques : des mutations ponctuelles, mais aussi des remaniements de chromosomes (pertes, duplications, échanges de fragments). Deux catégories de gènes sont surtout concernées. Les proto-oncogènes stimulent normalement la division ; une mutation peut les rendre suractifs (on les appelle alors oncogènes), et une seule copie mutée suffit, comme un accélérateur bloqué. Les gènes suppresseurs de tumeurs freinent la division, font réparer l'ADN ou déclenchent l'apoptose ; il faut en général que leurs deux copies soient inactivées pour que le frein disparaisse. Le gène TP53, qui code la protéine p53, en est l'exemple le plus connu.",
                "Une seule mutation ne suffit presque jamais. Un cancer résulte de l'accumulation de plusieurs mutations dans une même lignée cellulaire, au fil des divisions et souvent sur des années, chaque mutation donnant aux cellules un avantage de prolifération supplémentaire. C'est pourquoi la fréquence de la plupart des cancers augmente avec l'âge. Comme ces mutations sont somatiques, elles ne sont pas transmises aux enfants.",
              ],
              box: { label: "Propriété", text: "Oncogène : version suractivée d'un proto-oncogène ; une copie mutée suffit (accélérateur bloqué). Gène suppresseur de tumeurs : frein de la division ; il faut en général perdre ses deux copies (frein cassé). Un cancer exige l'accumulation de plusieurs mutations." },
            },
            {
              heading: "Les facteurs de risque",
              paragraphs: [
                "Des agents mutagènes de l'environnement augmentent la fréquence des mutations. Le tabac contient de nombreuses substances cancérigènes, comme le benzo[a]pyrène, et il est la première cause de cancers évitables en France, notamment du poumon, de la gorge et de la vessie. Les rayons ultraviolets du soleil et des cabines de bronzage lèsent l'ADN des cellules de la peau (formation de dimères de thymine) et augmentent le risque de mélanome. L'alcool, l'amiante et les rayonnements ionisants sont d'autres facteurs reconnus.",
                "Certains virus sont oncogènes : les papillomavirus humains (HPV) sont responsables de la quasi-totalité des cancers du col de l'utérus, et le virus de l'hépatite B augmente le risque de cancer du foie. Leurs protéines perturbent les gènes et les protéines qui contrôlent la division. Il existe enfin des prédispositions héréditaires : une personne qui a hérité d'une mutation germinale d'un gène suppresseur de tumeurs, comme BRCA1 ou BRCA2, porte cette mutation dans toutes ses cellules ; il suffit alors d'une seule mutation supplémentaire dans une cellule pour perdre le frein, ce qui augmente fortement le risque de cancer du sein ou de l'ovaire.",
              ],
              box: { label: "Repère", text: "Facteurs de risque : agents mutagènes (tabac, UV, alcool, amiante, rayonnements ionisants), virus oncogènes (HPV, hépatite B), prédispositions héréditaires (mutations germinales de BRCA1 ou BRCA2). Un facteur de risque augmente une probabilité, il ne rend pas le cancer certain." },
            },
            {
              heading: "Prévenir et soigner",
              paragraphs: [
                "Connaître les facteurs de risque permet la prévention : ne pas fumer, limiter l'alcool, se protéger du soleil, se faire vacciner contre les HPV et contre l'hépatite B (ces vaccins empêchent l'infection par les virus en cause). Le dépistage (frottis ou test HPV pour le col de l'utérus, mammographie pour le sein, recherche de sang dans les selles pour le côlon et le rectum) permet de détecter une lésion tôt, lorsqu'elle se soigne mieux.",
                "Les traitements visent à retirer ou à détruire les cellules cancéreuses : chirurgie, radiothérapie (rayonnements qui lèsent l'ADN des cellules visées), chimiothérapie (molécules qui bloquent les divisions cellulaires, ce qui touche aussi des cellules saines à division rapide et explique des effets secondaires comme la chute des cheveux). Les thérapies ciblées agissent sur la protéine produite par un oncogène précis : elles supposent d'avoir identifié les mutations de la tumeur du patient, d'où l'intérêt de séquencer l'ADN tumoral. L'immunothérapie, enfin, aide le système immunitaire à reconnaître et à détruire les cellules cancéreuses.",
              ],
            },
          ],
          keyPoints: [
            "Un cancer est une prolifération incontrôlée de cellules issues d'une même cellule qui a accumulé des mutations somatiques.",
            "Tumeur maligne : elle envahit les tissus voisins et peut former des métastases ; tumeur bénigne : elle reste localisée.",
            "Proto-oncogène suractivé (oncogène) : une copie mutée suffit. Gène suppresseur de tumeurs (TP53, BRCA1) : il faut en général perdre les deux copies.",
            "Plusieurs mutations successives sont nécessaires : le risque de cancer augmente avec l'âge et la durée d'exposition aux mutagènes.",
            "Facteurs de risque : agents mutagènes (tabac, UV, alcool), virus oncogènes (HPV, hépatite B), prédispositions héréditaires.",
            "Prévention (éviter les mutagènes, vaccination, dépistage) et traitements (chirurgie, radiothérapie, chimiothérapie, thérapies ciblées).",
          ],
          example: {
            statement: "Le rétinoblastome est un cancer de la rétine de l'enfant. Il apparaît lorsque les deux copies du gène RB1, un gène suppresseur de tumeurs, sont inactivées dans une même cellule de la rétine. Il existe une forme héréditaire, précoce et qui touche souvent les deux yeux, et une forme non héréditaire, plus tardive et qui touche en général un seul œil. Expliquez cette différence.",
            solution: [
              "RB1 est un gène suppresseur de tumeurs : sa protéine freine la division. Une cellule de la rétine ne devient cancéreuse que si ses deux copies du gène sont inactivées.",
              "Forme non héréditaire : l'enfant naît avec deux copies fonctionnelles de RB1 dans toutes ses cellules. Il faut deux mutations somatiques successives dans la même cellule de la rétine, un événement rare qui demande du temps : le cancer est plus tardif et touche en général un seul œil.",
              "Forme héréditaire : l'enfant a reçu d'un parent une copie déjà mutée (mutation germinale), présente dans toutes ses cellules. Une seule mutation somatique supplémentaire suffit dans une cellule de la rétine, un événement beaucoup plus probable.",
              "Ce second événement peut se produire tôt, et dans plusieurs cellules des deux rétines : la forme héréditaire est précoce et souvent bilatérale.",
              "Conclusion : dans la forme héréditaire, l'enfant hérite d'une prédisposition (une première copie inactivée), pas du cancer lui-même ; le cancer exige toujours l'inactivation des deux copies dans une même cellule.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des situations suivantes, indiquez s'il s'agit d'un proto-oncogène devenu oncogène ou d'un gène suppresseur de tumeurs inactivé, en justifiant : a) une mutation rend active en permanence une protéine qui transmet le signal de division, même sans signal extérieur ; b) une cellule ne produit plus la protéine qui bloque le cycle cellulaire quand l'ADN est endommagé ; c) une seule copie mutée du gène suffit à augmenter la fréquence des divisions ; d) une cellule qui a perdu les deux copies du gène ne déclenche plus son apoptose.",
              hint: "Demandez-vous si le gène normal joue le rôle d'un accélérateur (proto-oncogène) ou d'un frein (gène suppresseur de tumeurs), et si la mutation renforce ou supprime ce rôle.",
              solution: [
                "a) La protéine normale stimule la division et la mutation la rend suractive : c'est un proto-oncogène devenu oncogène (gain de fonction).",
                "b) La protéine normale freine le cycle en cas d'ADN endommagé et elle a disparu : c'est un gène suppresseur de tumeurs inactivé (perte de fonction).",
                "c) Une seule copie mutée suffit à stimuler la division : c'est typique d'un oncogène, dont l'effet s'exprime même en présence d'une copie normale.",
                "d) L'apoptose élimine les cellules trop altérées ; sa perte après inactivation des deux copies caractérise un gène suppresseur de tumeurs.",
                "Résultat : a et c, oncogènes ; b et d, gènes suppresseurs de tumeurs inactivés.",
              ],
            },
            {
              level: 2,
              statement: "Une étude (données fictives) suit 10 000 personnes pendant 20 ans. Parmi les 4 000 personnes qui ont utilisé régulièrement des cabines de bronzage, 36 ont développé un mélanome ; parmi les 6 000 autres, 30. a) Calculez la fréquence du mélanome dans chaque groupe, pour 1 000 personnes. b) Calculez le risque relatif, c'est-à-dire le rapport des deux fréquences. c) Expliquez le lien biologique entre l'exposition aux UV et le mélanome. d) Pourquoi la plupart des utilisateurs de cabines ne développent-ils pas de mélanome ?",
              hint: "Une fréquence pour 1 000 personnes s'obtient en divisant le nombre de cas par l'effectif du groupe, puis en multipliant par 1 000.",
              solution: [
                "a) Groupe exposé : 36 ÷ 4 000 = 0,009, soit 9 cas pour 1 000 personnes. Groupe non exposé : 30 ÷ 6 000 = 0,005, soit 5 cas pour 1 000 personnes.",
                "b) Risque relatif : 9 ÷ 5 = 1,8. Les utilisateurs réguliers de cabines ont un risque de mélanome 1,8 fois plus élevé.",
                "c) Les UV lèsent l'ADN des cellules de la peau, dont les mélanocytes (formation de dimères de thymine). Les lésions mal réparées deviennent des mutations, qui peuvent toucher des proto-oncogènes ou des gènes suppresseurs de tumeurs.",
                "d) Le cancer exige l'accumulation de plusieurs mutations dans une même cellule, sur les bons gènes, ce qui reste improbable ; de plus, les systèmes de réparation de l'ADN corrigent la plupart des lésions. Les UV augmentent un risque, ils ne rendent pas le cancer certain.",
                "Résultat : 9 contre 5 cas pour 1 000, soit un risque relatif de 1,8 ; les UV sont un facteur de risque de mélanome.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : chez les femmes infectées de façon persistante par certains types de HPV dits à haut risque, des lésions du col de l'utérus peuvent apparaître puis évoluer, en général en plus de dix ans, vers un cancer. Document 2 : deux protéines du virus, E6 et E7, se fixent respectivement à la protéine p53 et à la protéine Rb de la cellule infectée et les rendent inactives ; Rb est le produit d'un gène suppresseur de tumeurs qui empêche l'entrée en phase S du cycle. Document 3 (données fictives) : dans une région, le nombre de lésions précancéreuses de haut grade du col dépistées chez les femmes de 20 à 24 ans passe de 120 à 48 pour 100 000 dix ans après la mise en place de la vaccination contre les HPV. Expliquez comment ce virus favorise un cancer et pourquoi le cancer met des années à apparaître, puis argumentez l'intérêt de la vaccination et du dépistage.",
              hint: "Rapprochez le document 2 du rôle des gènes suppresseurs de tumeurs vu en cours, puis rappelez combien de mutations il faut pour qu'un cancer apparaisse.",
              solution: [
                "Document 2 : p53 et Rb sont des protéines de gènes suppresseurs de tumeurs, qui freinent la division (Rb bloque l'entrée en phase S, p53 arrête le cycle ou déclenche l'apoptose si l'ADN est endommagé). En les inactivant, E6 et E7 suppriment ces freins : la cellule infectée se divise davantage et laisse se multiplier des cellules à l'ADN endommagé.",
                "Le virus ne suffit pourtant pas : un cancer exige l'accumulation d'autres mutations somatiques dans la même lignée de cellules. Ces mutations surviennent au fil des divisions, d'où le long délai (plus de dix ans) entre l'infection persistante et le cancer (document 1).",
                "Document 3 : les lésions passent de 120 à 48 pour 100 000, soit une baisse de (120 - 48) ÷ 120 = 72 ÷ 120 = 0,6, c'est-à-dire 60 %. La vaccination, qui empêche l'infection par les HPV visés, réduit donc fortement les lésions qui précèdent le cancer.",
                "Le dépistage reste utile : le vaccin ne couvre pas tous les types de HPV et ne protège pas les femmes déjà infectées ; le long délai d'évolution laisse le temps de détecter et de traiter les lésions avant qu'elles ne deviennent un cancer.",
                "Conclusion : les HPV favorisent le cancer en inactivant des protéines de gènes suppresseurs de tumeurs ; vaccination (prévention de l'infection) et dépistage (détection précoce des lésions) sont complémentaires.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la formation d'un cancer.",
            items: [
              "Une cellule somatique subit une première mutation d'un gène qui contrôle la division",
              "Cette cellule se divise un peu plus que ses voisines et forme un petit clone",
              "Une nouvelle mutation dans une cellule du clone accentue la prolifération",
              "L'accumulation de mutations produit une tumeur qui échappe à tout contrôle",
              "Des cellules tumorales envahissent les tissus voisins et passent dans le sang ou la lymphe",
              "Des métastases se forment dans d'autres organes",
            ],
          },
          quiz: [
            {
              q: "Une métastase est :",
              options: ["une tumeur bénigne qui reste localisée dans son organe d'origine", "une tumeur secondaire formée à distance", "une mutation transmise à l'enfant par les gamètes", "une cellule saine qui meurt par apoptose"],
              answer: 1,
              why: "Des cellules d'une tumeur maligne passent dans le sang ou la lymphe et forment des tumeurs secondaires, les métastases, dans d'autres organes.",
            },
            {
              q: "Pourquoi le risque de la plupart des cancers augmente-t-il avec l'âge ?",
              options: ["parce que les gènes suppresseurs de tumeurs n'apparaissent que tard", "parce que les virus n'infectent que les personnes âgées", "parce que les cellules âgées ne se divisent plus du tout", "parce que les mutations s'accumulent au fil du temps"],
              answer: 3,
              why: "Un cancer exige plusieurs mutations dans une même lignée de cellules ; elles s'accumulent au fil des divisions et des expositions, donc avec les années.",
            },
            {
              q: "Une mutation qui rend un proto-oncogène suractif :",
              options: ["agit même si une seule copie est mutée", "doit toucher les deux copies du gène pour avoir un effet", "supprime l'apoptose dans toutes les cellules du corps", "est forcément transmise à la descendance"],
              answer: 0,
              why: "Un oncogène est un gain de fonction : une seule copie suractive suffit à stimuler la division, comme un accélérateur bloqué.",
            },
            {
              q: "Les papillomavirus humains (HPV) sont un facteur de risque du cancer :",
              options: ["du poumon chez le fumeur", "de la peau exposée au soleil", "du col de l'utérus", "des os chez l'enfant"],
              answer: 2,
              why: "Une infection persistante par des HPV à haut risque est en cause dans la quasi-totalité des cancers du col de l'utérus ; la vaccination la prévient.",
            },
            {
              q: "Une femme porteuse d'une mutation germinale de BRCA1 :",
              options: ["développera un cancer du sein de façon certaine", "a un risque augmenté de cancer du sein et de l'ovaire", "ne peut pas transmettre cette mutation à ses enfants", "possède la mutation seulement dans les cellules du sein"],
              answer: 1,
              why: "La mutation germinale est présente dans toutes ses cellules et transmissible ; une seule mutation supplémentaire suffit pour perdre le frein, ce qui augmente le risque sans le rendre certain.",
            },
          ],
          trap: "Confondre mutation somatique et mutation germinale : les mutations qui provoquent un cancer apparaissent le plus souvent dans des cellules somatiques et ne se transmettent pas aux enfants ; seule une prédisposition (mutation germinale, comme celle de BRCA1) peut être héritée, jamais le cancer lui-même.",
          method: "Pour expliquer un cas de cancer, posez trois questions dans l'ordre : quel gène est touché et quel est son rôle (accélérateur ou frein) ? La mutation est-elle somatique ou germinale ? Quel facteur de risque a pu augmenter la fréquence des mutations ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'resistance-antibiotiques',
          title: 'Variation génétique bactérienne et résistance aux antibiotiques',
          minutes: 30,
          objectives: [
            "Expliquer la variation génétique des bactéries : mutations spontanées et transferts horizontaux de gènes.",
            "Expliquer comment l'utilisation d'un antibiotique sélectionne les bactéries résistantes.",
            "Interpréter un antibiogramme pour choisir un antibiotique efficace.",
            "Argumenter en faveur d'un usage raisonné des antibiotiques.",
          ],
          course: [
            {
              heading: "Les bactéries et les antibiotiques",
              paragraphs: [
                "Les bactéries sont des êtres vivants unicellulaires procaryotes : elles n'ont pas de noyau. Leur ADN principal forme un chromosome circulaire, et beaucoup possèdent en plus de petites molécules d'ADN circulaires, les plasmides, qui portent quelques gènes. Elles se reproduisent en se divisant en deux cellules filles après réplication de leur ADN. Dans de bonnes conditions, certaines se divisent environ toutes les 20 minutes, comme Escherichia coli : en dix heures, soit 30 générations, une seule bactérie peut donner plus d'un milliard de descendantes si rien ne les limite (2³⁰ ≈ 1,07 × 10⁹).",
                "Un antibiotique est une molécule qui tue les bactéries ou bloque leur multiplication, en agissant sur une structure ou un mécanisme propre aux bactéries : leur paroi, leurs ribosomes, la réplication de leur ADN. C'est pourquoi les antibiotiques n'ont aucun effet sur les virus, qui n'ont ni paroi ni ribosomes. Le premier antibiotique, la pénicilline, a été découvert par Alexander Fleming en 1928 et utilisé à grande échelle à partir des années 1940.",
              ],
              box: { label: "Définition", text: "Antibiotique : molécule qui tue les bactéries (effet bactéricide) ou empêche leur multiplication (effet bactériostatique), en ciblant une structure propre aux bactéries. Un antibiotique est sans effet sur les virus." },
            },
            {
              heading: "L'origine de la résistance : la variation génétique",
              paragraphs: [
                "Lors de la réplication de l'ADN, des erreurs se produisent rarement mais spontanément : ce sont des mutations, qui surviennent au hasard. Certaines rendent la bactérie résistante à un antibiotique, par exemple en modifiant la protéine que cible l'antibiotique, en lui permettant de produire une enzyme qui détruit l'antibiotique (comme les enzymes qui dégradent la pénicilline) ou de l'expulser de la cellule. Comme les bactéries sont extrêmement nombreuses et se divisent très vite, même une mutation très rare finit par apparaître dans une population.",
                "Les bactéries peuvent aussi acquérir des gènes venus d'autres bactéries, y compris d'espèces différentes : c'est le transfert horizontal de gènes. Le plus important est la conjugaison : une bactérie transmet une copie d'un plasmide à une autre bactérie avec laquelle elle est en contact. Un même plasmide peut porter plusieurs gènes de résistance, ce qui explique l'apparition de bactéries multirésistantes. Les bactéries peuvent aussi capter de l'ADN libre dans le milieu (transformation) ou recevoir des gènes par l'intermédiaire d'un virus de bactérie (transduction).",
              ],
              box: { label: "À retenir", text: "La résistance a une origine génétique : mutations spontanées et aléatoires du chromosome ou des plasmides, et transferts horizontaux de gènes, surtout par échange de plasmides lors de la conjugaison. L'antibiotique ne provoque pas ces mutations." },
            },
            {
              heading: "L'antibiotique sélectionne les bactéries résistantes",
              paragraphs: [
                "Dans une population bactérienne, il existe souvent, avant tout traitement, quelques bactéries résistantes. En l'absence d'antibiotique, elles n'ont pas d'avantage et restent rares. Lorsqu'un antibiotique est présent, les bactéries sensibles sont éliminées tandis que les résistantes survivent et se multiplient : en quelques générations, elles deviennent majoritaires. C'est une sélection naturelle, dont l'antibiotique est l'agent : il ne crée pas la résistance, il favorise les bactéries qui la possèdent déjà.",
                "Plus un antibiotique est utilisé, plus la pression de sélection est forte et plus les bactéries résistantes se répandent, à l'hôpital, dans les élevages (où des antibiotiques ont longtemps été employés massivement) et dans l'environnement. Un antibiotique pris sans nécessité, contre une infection virale par exemple, agit aussi sur les bactéries de notre microbiote et y favorise les résistantes, qui peuvent ensuite transmettre leurs gènes de résistance à des bactéries pathogènes.",
              ],
              box: { label: "Règle", text: "Raisonnement à tenir : variation génétique préexistante (mutations ou transferts), puis pression de sélection (l'antibiotique), puis survie et multiplication des seules bactéries résistantes, puis augmentation de leur fréquence dans la population." },
            },
            {
              heading: "Choisir un antibiotique et limiter les résistances",
              paragraphs: [
                "Pour soigner une infection bactérienne sérieuse, on peut réaliser un antibiogramme : les bactéries prélevées chez le patient sont étalées sur une gélose, sur laquelle on dépose des pastilles imprégnées de différents antibiotiques. Après incubation, une zone claire sans bactéries, la zone d'inhibition, apparaît autour des pastilles d'antibiotiques efficaces. Plus cette zone est large, plus la souche est sensible ; une zone absente ou trop petite signifie que la souche résiste à cet antibiotique.",
                "L'Organisation mondiale de la santé considère la résistance aux antibiotiques comme l'une des grandes menaces pour la santé mondiale. Pour la limiter, on recommande de n'utiliser les antibiotiques que contre des infections bactériennes et sur prescription, de respecter la dose et la durée prescrites, de prévenir les infections (hygiène des mains, vaccination) pour réduire le besoin d'antibiotiques, et de restreindre leur usage dans l'élevage. La recherche de nouveaux antibiotiques et d'alternatives, comme les bactériophages (virus qui tuent les bactéries), se poursuit.",
              ],
              box: { label: "Repère", text: "Antibiogramme : zone d'inhibition large, souche sensible ; zone absente ou plus petite que le diamètre critique, souche résistante. On choisit un antibiotique auquel la souche est sensible." },
            },
          ],
          keyPoints: [
            "Les bactéries (procaryotes) ont un chromosome circulaire et souvent des plasmides ; elles se divisent très rapidement.",
            "Un antibiotique cible une structure propre aux bactéries (paroi, ribosomes) ; il est sans effet sur les virus.",
            "Origine de la résistance : mutations spontanées et aléatoires, et transferts horizontaux de gènes (conjugaison et plasmides).",
            "L'antibiotique ne crée pas la résistance : il élimine les bactéries sensibles et sélectionne les résistantes, qui deviennent majoritaires.",
            "Antibiogramme : une large zone d'inhibition indique une souche sensible ; une zone absente, une souche résistante.",
            "Usage raisonné : antibiotiques uniquement contre les bactéries et sur prescription, prévention des infections (hygiène, vaccination).",
          ],
          example: {
            statement: "Une population de 10⁹ bactéries contient une seule bactérie mutante, résistante à un antibiotique A (données fictives). Ces bactéries se divisent toutes les 30 minutes. a) Quelle est la proportion initiale de bactéries résistantes ? b) On ajoute l'antibiotique A, qui tue toutes les bactéries sensibles. Combien de bactéries y a-t-il 5 heures plus tard, si rien ne limite leur multiplication ? Quelle est alors la proportion de résistantes ? c) Que montre ce calcul ?",
            solution: [
              "a) Proportion initiale : 1 ÷ 10⁹ = 10⁻⁹, soit une bactérie résistante sur un milliard.",
              "b) Toutes les bactéries sensibles sont éliminées : seule la mutante survit. En 5 heures, soit 300 minutes, elle connaît 300 ÷ 30 = 10 générations.",
              "Elle donne donc 2¹⁰ = 1 024 bactéries, qui ont toutes hérité de la mutation de résistance : la proportion de résistantes est de 100 %.",
              "c) La mutation existait avant le traitement : l'antibiotique ne l'a pas provoquée, il a éliminé les bactéries sensibles et laissé se multiplier la seule résistante.",
              "Conclusion : en quelques heures, une population entièrement résistante remplace une population sensible ; c'est une sélection naturelle exercée par l'antibiotique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un antibiogramme réalisé sur une souche prélevée chez un patient donne les diamètres de zone d'inhibition suivants (données fictives) ; le diamètre critique, en dessous duquel la souche est considérée comme résistante, est indiqué entre parenthèses. Amoxicilline : 6 mm, soit le diamètre de la pastille, c'est-à-dire aucune zone claire (critique 16 mm) ; ciprofloxacine : 28 mm (critique 22 mm) ; gentamicine : 19 mm (critique 17 mm) ; tétracycline : 12 mm (critique 19 mm). a) Classez chaque antibiotique en efficace ou inefficace sur cette souche. b) Lequel présente la plus grande marge d'efficacité ?",
              hint: "Comparez chaque diamètre mesuré au diamètre critique : au-dessus, la souche est sensible ; en dessous, elle est résistante.",
              solution: [
                "Amoxicilline : aucune zone autour de la pastille (6 mm < 16 mm) : la souche est résistante, l'antibiotique est inefficace.",
                "Ciprofloxacine : 28 mm > 22 mm : la souche est sensible, l'antibiotique est efficace (marge de 6 mm).",
                "Gentamicine : 19 mm > 17 mm : la souche est sensible, mais de peu (marge de 2 mm).",
                "Tétracycline : 12 mm < 19 mm : la souche est résistante, l'antibiotique est inefficace.",
                "Résultat : ciprofloxacine et gentamicine sont efficaces, amoxicilline et tétracycline ne le sont pas ; la ciprofloxacine présente la plus grande marge. Le médecin tient compte aussi du lieu de l'infection et des effets indésirables.",
              ],
            },
            {
              level: 2,
              statement: "Expérience (inspirée de la technique des répliques sur velours, données fictives) : on étale une culture bactérienne, qui n'a jamais été en contact avec la streptomycine, sur une boîte sans antibiotique : 200 colonies apparaissent. On reporte ces colonies, en conservant leur emplacement, sur une boîte contenant de la streptomycine, à l'aide d'un tampon de velours : 3 colonies y poussent. On prélève alors, sur la première boîte, les colonies situées aux trois emplacements correspondants, et on les teste : elles sont toutes résistantes à la streptomycine. a) Calculez la proportion de colonies résistantes. b) Ces bactéries sont-elles devenues résistantes au contact de l'antibiotique ? Justifiez. c) Quel est le rôle de l'antibiotique ?",
              hint: "Les colonies prélevées sur la première boîte n'ont jamais rencontré la streptomycine : que peut-on en déduire sur le moment où la résistance est apparue ?",
              solution: [
                "a) Proportion de colonies résistantes : 3 ÷ 200 = 0,015, soit 1,5 %.",
                "b) Non. Les colonies de la première boîte n'ont jamais été en contact avec la streptomycine, et pourtant celles qui correspondent aux colonies de la seconde boîte sont résistantes.",
                "La résistance existait donc avant tout contact avec l'antibiotique : elle provient de mutations spontanées survenues au hasard pendant la multiplication des bactéries.",
                "c) L'antibiotique n'a pas créé la résistance : il a seulement empêché la croissance des colonies sensibles et révélé les rares colonies résistantes, qu'il sélectionne.",
                "Résultat : 1,5 % de colonies résistantes, préexistantes ; l'antibiotique agit comme un agent de sélection, non comme une cause de mutation.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 (données fictives) : dans un pays, la consommation d'un antibiotique (en doses pour 1 000 habitants et par jour) et le pourcentage de souches d'une bactérie résistantes à cet antibiotique ont évolué ainsi : 2000 : 30 doses, 8 % ; 2005 : 34 doses, 15 % ; 2010 : 36 doses, 22 % ; 2015, après une campagne nationale : 25 doses, 17 %. Document 2 : le gène de résistance à cet antibiotique est porté par un plasmide qui porte aussi un gène de résistance à un second antibiotique, toujours très utilisé. Document 3 : une partie des prescriptions concernait des angines et des bronchites d'origine virale. Expliquez l'évolution des résistances de 2000 à 2015, puis proposez des mesures argumentées pour les faire reculer.",
              hint: "Reliez la consommation à la pression de sélection, puis demandez-vous pourquoi la résistance baisse moins vite que la consommation en 2015 (pensez au plasmide du document 2).",
              solution: [
                "De 2000 à 2010, la consommation augmente de 30 à 36 doses (+20 %) et la proportion de souches résistantes passe de 8 % à 22 %, soit près de trois fois plus (22 ÷ 8 = 2,75).",
                "Explication : plus l'antibiotique est utilisé, plus la pression de sélection est forte. Les bactéries sensibles sont éliminées, les résistantes, qui préexistaient (mutations, transferts de plasmides), survivent, se multiplient et se répandent.",
                "En 2015, la consommation baisse de 36 à 25 doses, soit (36 - 25) ÷ 36 ≈ 0,31, environ 31 % de moins. La résistance recule, mais seulement de 22 % à 17 % : la pression de sélection diminue, mais les bactéries résistantes déjà présentes ne disparaissent pas d'un coup.",
                "Document 2 : l'utilisation du second antibiotique sélectionne aussi le plasmide, donc le gène de résistance au premier : on parle de co-sélection, qui freine le recul de la résistance.",
                "Document 3 : les prescriptions contre des infections virales sont inutiles (l'antibiotique n'agit pas sur les virus) et exercent une pression de sélection sans aucun bénéfice.",
                "Mesures : ne prescrire des antibiotiques que contre des infections bactériennes confirmées (tests rapides pour les angines), limiter aussi l'usage du second antibiotique, prévenir les infections (hygiène, vaccination), surveiller les résistances par des antibiogrammes. Conclusion : l'usage raisonné réduit la sélection des bactéries résistantes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur les antibiotiques.",
            statements: [
              { text: "Un antibiotique peut guérir une grippe.", true: false, why: "La grippe est due à un virus ; les antibiotiques agissent sur des structures propres aux bactéries." },
              { text: "L'antibiotique provoque les mutations qui rendent les bactéries résistantes.", true: false, why: "Les mutations sont spontanées et préexistent au traitement ; l'antibiotique ne fait que sélectionner les bactéries résistantes." },
              { text: "Une bactérie peut recevoir un gène de résistance d'une bactérie d'une autre espèce.", true: true, why: "C'est un transfert horizontal de gènes, par exemple par conjugaison et échange de plasmide." },
              { text: "Dans une population jamais traitée, il peut déjà exister des bactéries résistantes.", true: true, why: "Les mutations de résistance surviennent au hasard, avant tout contact avec l'antibiotique." },
              { text: "Lors d'une résistance aux antibiotiques, c'est le patient qui devient résistant.", true: false, why: "Ce sont les bactéries qui deviennent résistantes, pas la personne traitée." },
              { text: "Sur un antibiogramme, une large zone claire autour d'une pastille indique un antibiotique efficace.", true: true, why: "La zone d'inhibition correspond à la région où l'antibiotique a empêché la croissance des bactéries." },
              { text: "Un plasmide peut porter plusieurs gènes de résistance à la fois.", true: true, why: "C'est pourquoi un seul transfert de plasmide peut rendre une bactérie multirésistante." },
            ],
          },
          quiz: [
            {
              q: "Les antibiotiques sont inefficaces contre :",
              options: ["les angines d'origine bactérienne", "les infections à staphylocoque", "les bactéries de l'intestin", "les virus"],
              answer: 3,
              why: "Les antibiotiques ciblent la paroi, les ribosomes ou la réplication des bactéries ; les virus n'ont pas ces structures.",
            },
            {
              q: "Le transfert d'un plasmide d'une bactérie à une autre, par contact, s'appelle :",
              options: ["la transformation", "la conjugaison", "la transduction", "la division binaire"],
              answer: 1,
              why: "La conjugaison est le transfert d'une copie de plasmide entre deux bactéries en contact ; c'est un transfert horizontal de gènes.",
            },
            {
              q: "Dans une culture traitée par un antibiotique, la proportion de bactéries résistantes augmente parce que :",
              options: ["l'antibiotique provoque des mutations de résistance", "les bactéries apprennent à supporter l'antibiotique", "les bactéries sensibles sont éliminées", "l'antibiotique se transforme en nutriment pour elles"],
              answer: 2,
              why: "L'antibiotique élimine les bactéries sensibles ; les résistantes, préexistantes, survivent et se multiplient : c'est une sélection.",
            },
            {
              q: "Sur un antibiogramme, l'absence de zone d'inhibition autour d'une pastille signifie que :",
              options: ["la souche résiste à cet antibiotique", "l'antibiotique est très efficace sur la souche", "la souche est un virus et non une bactérie", "la pastille contenait une dose trop forte"],
              answer: 0,
              why: "Les bactéries poussent jusqu'au contact de la pastille : l'antibiotique n'empêche pas leur croissance, la souche est résistante.",
            },
            {
              q: "Une bactérie qui se divise toutes les 20 minutes, sans limitation, donne en 2 heures :",
              options: ["6 bactéries", "12 bactéries", "32 bactéries", "64 bactéries"],
              answer: 3,
              why: "En 120 minutes, il y a 120 ÷ 20 = 6 générations ; le nombre de bactéries double à chacune : 2⁶ = 64.",
            },
          ],
          trap: "Écrire que l'antibiotique « rend les bactéries résistantes » ou qu'elles « s'habituent » à lui : la résistance préexiste, due à des mutations aléatoires ou à des transferts de gènes, et l'antibiotique ne fait que sélectionner les bactéries qui la possèdent.",
          method: "Pour expliquer l'évolution d'une résistance, rédigez toujours en quatre temps : variation génétique préexistante (son origine), pression de sélection (l'antibiotique), survie et multiplication des seules résistantes, augmentation de leur fréquence dans la population.",
        },
      ],
    },

    /* ==================================================================== */
    /* LE FONCTIONNEMENT DU SYSTÈME IMMUNITAIRE                               */
    /* ==================================================================== */
    {
      id: 'systeme-immunitaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'immunite-innee',
          title: 'L’immunité innée et la réaction inflammatoire',
          minutes: 30,
          objectives: [
            "Décrire les caractéristiques de l'immunité innée : présente dès la naissance, rapide, peu spécifique et héritée génétiquement.",
            "Expliquer le déroulement de la réaction inflammatoire aiguë et relier chacun de ses symptômes à un mécanisme.",
            "Décrire les étapes de la phagocytose.",
            "Expliquer le mode d'action des médicaments anti-inflammatoires et le rôle de l'immunité innée dans le déclenchement de l'immunité adaptative.",
          ],
          course: [
            {
              heading: "Le système immunitaire et ses deux composantes",
              paragraphs: [
                "Le système immunitaire est l'ensemble des organes (moelle osseuse, thymus, ganglions lymphatiques, rate), des cellules (les leucocytes, ou globules blancs) et des molécules qui protègent l'organisme contre les agents pathogènes (bactéries, virus, champignons, parasites) et contre ses propres cellules anormales. Il distingue ce qui appartient à l'organisme de ce qui lui est étranger ou de ce qui est altéré.",
                "On distingue deux composantes qui coopèrent. L'immunité innée existe chez tous les animaux : elle est présente dès la naissance, agit en quelques minutes à quelques heures et reconnaît des motifs moléculaires communs à de nombreux agents pathogènes ; elle est donc peu spécifique. Ses mécanismes sont hérités génétiquement et se déroulent de la même façon d'une infection à l'autre. L'immunité adaptative, propre aux vertébrés, est plus lente à se mettre en place mais très spécifique, et elle garde la mémoire des agents déjà rencontrés.",
                "La première ligne de défense est formée par les barrières naturelles : la peau, les muqueuses et leurs sécrétions (le mucus, les larmes et la salive, qui contiennent une enzyme, le lysozyme, capable de détruire la paroi de certaines bactéries), l'acidité de l'estomac, et le microbiote, qui occupe la place des pathogènes. Quand ces barrières sont franchies, par exemple à la suite d'une plaie, l'immunité innée déclenche une réaction inflammatoire.",
              ],
              box: { label: "Définition", text: "Immunité innée : défense présente dès la naissance chez tous les animaux, rapide, qui mobilise des récepteurs reconnaissant des motifs moléculaires communs à de nombreux pathogènes. Elle est héritée génétiquement et peu spécifique." },
            },
            {
              heading: "La réaction inflammatoire aiguë",
              paragraphs: [
                "Après une blessure infectée, quatre symptômes apparaissent en quelques heures autour de la zone lésée : rougeur, chaleur, gonflement (œdème) et douleur. Ce sont les signes de la réaction inflammatoire aiguë. Tout commence par la détection : des cellules sentinelles présentes dans les tissus (macrophages, cellules dendritiques, mastocytes) possèdent des récepteurs qui reconnaissent des motifs moléculaires caractéristiques des pathogènes, comme certains constituants de la paroi des bactéries.",
                "Une fois activées, les cellules sentinelles libèrent des médiateurs chimiques de l'inflammation : histamine, prostaglandines et cytokines. Ces molécules dilatent les vaisseaux sanguins (vasodilatation : plus de sang arrive, d'où la rougeur et la chaleur) et augmentent leur perméabilité (du plasma passe dans les tissus, d'où le gonflement). Les prostaglandines sensibilisent aussi les terminaisons nerveuses, d'où la douleur. Enfin, les médiateurs attirent vers le site infecté des leucocytes du sang, les granulocytes neutrophiles et les monocytes, qui traversent la paroi des vaisseaux ; dans les tissus, les monocytes se transforment en macrophages.",
                "La réaction inflammatoire aiguë est normale et bénéfique : elle s'arrête en général d'elle-même lorsque l'infection est éliminée, et le tissu se répare. Le pus qui apparaît parfois est formé de leucocytes morts, de débris de cellules et de bactéries.",
              ],
              box: { label: "Repère", text: "Rougeur et chaleur : vasodilatation. Gonflement : sortie de plasma par des vaisseaux plus perméables. Douleur : prostaglandines qui stimulent les terminaisons nerveuses. Médiateurs : histamine, prostaglandines, cytokines." },
            },
            {
              heading: "La phagocytose",
              paragraphs: [
                "Les granulocytes neutrophiles, les macrophages et les cellules dendritiques sont des phagocytes : ils ingèrent et digèrent les éléments étrangers. La phagocytose se déroule en plusieurs étapes : l'adhésion du pathogène à la membrane du phagocyte, grâce à des récepteurs ; l'ingestion, par des replis de la membrane qui l'englobent dans une vésicule appelée phagosome ; la digestion, après fusion de cette vésicule avec des lysosomes riches en enzymes ; enfin le rejet des débris. Les macrophages et surtout les cellules dendritiques conservent certains fragments du pathogène et les exposent à leur surface.",
              ],
              box: { label: "Repère", text: "Phagocytose : adhésion, ingestion (formation du phagosome), digestion (fusion avec les lysosomes), puis rejet des débris ou présentation de fragments du pathogène à la surface de la cellule." },
            },
            {
              heading: "Les anti-inflammatoires et le passage de relais",
              paragraphs: [
                "Si l'inflammation est trop forte, trop douloureuse ou prolongée, on peut la réduire avec des médicaments anti-inflammatoires. Les anti-inflammatoires non stéroïdiens (AINS), comme l'aspirine ou l'ibuprofène, inhibent une enzyme indispensable à la fabrication des prostaglandines : ils diminuent la douleur, la fièvre et le gonflement. Les anti-inflammatoires stéroïdiens (corticoïdes), dérivés du cortisol, une hormone produite par les glandes surrénales, agissent plus largement en diminuant la production de nombreux médiateurs. Ces médicaments soulagent mais ne combattent pas l'agent infectieux, et ils ont des effets indésirables : ils s'utilisent avec précaution.",
                "L'immunité innée prépare aussi l'immunité adaptative. Les cellules dendritiques qui ont capturé des fragments de pathogènes, c'est-à-dire des antigènes, quittent le tissu infecté et migrent par la lymphe vers les ganglions lymphatiques voisins. Là, elles présentent ces antigènes aux lymphocytes, ce qui déclenche la réponse adaptative. Sans cette étape, pas de réponse adaptative : les deux immunités forment un ensemble.",
              ],
              box: { label: "À retenir", text: "Les AINS (aspirine, ibuprofène) bloquent la synthèse des prostaglandines ; les corticoïdes diminuent la production de nombreux médiateurs. Les cellules dendritiques font le lien entre immunité innée et immunité adaptative en présentant les antigènes aux lymphocytes dans les ganglions." },
            },
          ],
          keyPoints: [
            "Immunité innée : présente dès la naissance chez tous les animaux, rapide (minutes à heures), peu spécifique, héritée génétiquement.",
            "Les cellules sentinelles (macrophages, cellules dendritiques, mastocytes) reconnaissent des motifs moléculaires communs aux pathogènes.",
            "Elles libèrent des médiateurs (histamine, prostaglandines, cytokines) : vasodilatation, perméabilité accrue, recrutement de leucocytes.",
            "Les quatre symptômes de l'inflammation aiguë : rougeur, chaleur, gonflement, douleur.",
            "Phagocytose : adhésion, ingestion, digestion, puis rejet des débris ou présentation d'antigènes.",
            "Les AINS bloquent la synthèse des prostaglandines ; les cellules dendritiques déclenchent l'immunité adaptative dans les ganglions.",
          ],
          example: {
            statement: "Une heure après s'être piquée avec une épine de rosier, une élève constate que la peau autour de la piqûre est rouge, chaude, gonflée et douloureuse. Expliquez l'origine de chacun de ces symptômes, en partant de l'entrée des bactéries.",
            solution: [
              "L'épine franchit la barrière de la peau et fait pénétrer des bactéries dans le tissu situé sous l'épiderme.",
              "Des cellules sentinelles du tissu (macrophages, mastocytes, cellules dendritiques) reconnaissent, grâce à leurs récepteurs, des motifs moléculaires des bactéries, et s'activent.",
              "Elles libèrent des médiateurs chimiques : histamine, prostaglandines et cytokines.",
              "Ces médiateurs dilatent les vaisseaux : l'afflux de sang explique la rougeur et la chaleur. Ils augmentent la perméabilité des vaisseaux : le plasma qui passe dans le tissu explique le gonflement. Les prostaglandines stimulent les terminaisons nerveuses : c'est la douleur.",
              "Les médiateurs attirent aussi des granulocytes neutrophiles et des monocytes, qui sortent des vaisseaux et phagocytent les bactéries.",
              "Conclusion : ces quatre symptômes sont ceux d'une réaction inflammatoire aiguë, mécanisme rapide et bénéfique de l'immunité innée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque caractéristique, indiquez si elle concerne l'immunité innée, l'immunité adaptative ou les deux : a) elle existe chez tous les animaux ; b) elle se met en place en quelques heures après l'infection ; c) elle est dirigée de façon très spécifique contre un antigène précis ; d) elle fait intervenir des leucocytes ; e) elle garde la mémoire d'un agent déjà rencontré ; f) elle reconnaît des motifs moléculaires communs à de nombreux pathogènes.",
              hint: "Rappelez-vous que l'immunité adaptative n'existe que chez les vertébrés, qu'elle est spécifique et lente à se mettre en place lors d'un premier contact.",
              solution: [
                "a) Immunité innée : l'immunité adaptative n'existe que chez les vertébrés.",
                "b) Immunité innée : elle agit en quelques minutes à quelques heures ; l'immunité adaptative demande plusieurs jours lors d'un premier contact.",
                "c) Immunité adaptative : chaque lymphocyte reconnaît un seul antigène.",
                "d) Les deux : phagocytes pour l'immunité innée, lymphocytes pour l'immunité adaptative ; tous sont des leucocytes.",
                "e) Immunité adaptative : grâce aux lymphocytes mémoire.",
                "f) Immunité innée : ses récepteurs reconnaissent des motifs partagés par de nombreux pathogènes, d'où sa faible spécificité.",
              ],
            },
            {
              level: 2,
              statement: "Expérience (données fictives) : chez des souris, on provoque une inflammation de la patte par l'injection d'une substance irritante ; trois heures plus tard, on mesure l'épaisseur de la patte et la quantité de prostaglandines dans le tissu. Lot témoin : l'épaisseur passe de 2,0 mm à 3,2 mm et on mesure 100 unités de prostaglandines. Lot ayant reçu un AINS une heure avant l'injection : l'épaisseur passe de 2,0 mm à 2,3 mm et on mesure 15 unités de prostaglandines. a) Calculez, pour chaque lot, l'augmentation d'épaisseur en pourcentage. b) Interprétez ces résultats. c) Pourquoi l'épaisseur augmente-t-elle quand même un peu dans le lot traité ?",
              hint: "Le pourcentage d'augmentation se calcule ainsi : (valeur finale - valeur initiale) ÷ valeur initiale × 100.",
              solution: [
                "a) Lot témoin : (3,2 - 2,0) ÷ 2,0 = 1,2 ÷ 2,0 = 0,60, soit +60 %. Lot traité : (2,3 - 2,0) ÷ 2,0 = 0,3 ÷ 2,0 = 0,15, soit +15 %.",
                "b) L'AINS réduit la quantité de prostaglandines de 100 à 15 unités (85 % de moins) et le gonflement de 60 % à 15 %. Les prostaglandines participent donc au gonflement, en augmentant la perméabilité des vaisseaux, et l'AINS agit en bloquant leur synthèse.",
                "c) Il reste un peu de prostaglandines (15 unités), et d'autres médiateurs comme l'histamine, que l'AINS ne bloque pas, continuent d'agir sur les vaisseaux.",
                "Résultat : +60 % contre +15 % ; l'AINS diminue fortement l'inflammation en réduisant la production de prostaglandines, sans la supprimer complètement.",
              ],
            },
            {
              level: 3,
              statement: "Le déficit d'adhérence leucocytaire est une maladie génétique rare : une protéine de la membrane des leucocytes, nécessaire pour qu'ils s'accrochent à la paroi des vaisseaux et la traversent, est absente ou anormale. Document 1 : chez ces patients, le nombre de granulocytes neutrophiles dans le sang est très élevé, mais les plaies infectées ne forment presque pas de pus et guérissent mal ; les infections bactériennes sont graves et répétées. Document 2 (données fictives) : quatre heures après une infection cutanée provoquée, on compte dans le tissu infecté 2 500 neutrophiles par mm³ chez une personne saine et 50 chez un patient. À partir de ces documents et de vos connaissances, expliquez les symptômes de ces patients et montrez l'importance du recrutement des leucocytes dans la réaction inflammatoire.",
              hint: "Demandez-vous où les neutrophiles doivent se trouver pour agir contre les bactéries, et ce qu'il leur faut pour quitter le sang.",
              solution: [
                "Lors d'une réaction inflammatoire, les médiateurs libérés par les cellules sentinelles attirent les neutrophiles du sang, qui doivent adhérer à la paroi des vaisseaux puis la traverser pour gagner le tissu infecté.",
                "Document 2 : chez le patient, le tissu infecté contient 2 500 ÷ 50 = 50 fois moins de neutrophiles. La protéine d'adhérence manquant, les neutrophiles ne peuvent pas quitter les vaisseaux.",
                "Document 1 : les neutrophiles restent dans le sang, où ils s'accumulent, d'où leur nombre très élevé dans le sang alors qu'ils manquent dans les tissus.",
                "Le pus est formé de leucocytes morts après avoir phagocyté des bactéries : sans neutrophiles dans la plaie, il ne se forme presque pas de pus.",
                "Sans phagocytes sur place, les bactéries ne sont pas éliminées : les infections sont graves, répétées, et les plaies guérissent mal.",
                "Conclusion : la réaction inflammatoire n'est efficace que si les leucocytes sont recrutés du sang vers le tissu infecté ; ce recrutement est une étape indispensable de l'immunité innée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la réaction inflammatoire aiguë.",
            items: [
              "Des bactéries franchissent la peau à la faveur d'une plaie",
              "Des cellules sentinelles reconnaissent des motifs moléculaires des bactéries",
              "Les cellules sentinelles libèrent histamine, prostaglandines et cytokines",
              "Les vaisseaux sanguins se dilatent et deviennent plus perméables",
              "Des granulocytes neutrophiles et des monocytes quittent le sang pour le tissu",
              "Les phagocytes ingèrent et digèrent les bactéries",
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces caractéristiques est celle de l'immunité innée ?",
              options: ["elle agit en quelques heures", "elle n'existe que chez les vertébrés", "elle cible un antigène unique et précis", "elle garde la mémoire de chaque pathogène"],
              answer: 0,
              why: "L'immunité innée est rapide (minutes à heures) ; les trois autres propositions décrivent l'immunité adaptative.",
            },
            {
              q: "La rougeur et la chaleur d'une zone enflammée sont dues :",
              options: ["à la mort des cellules de la peau", "à la sécrétion d'anticorps par les plasmocytes", "à la dilatation des vaisseaux sanguins", "à la multiplication des bactéries dans le sang"],
              answer: 2,
              why: "Les médiateurs de l'inflammation provoquent une vasodilatation : davantage de sang arrive dans la zone, qui rougit et se réchauffe.",
            },
            {
              q: "L'ibuprofène réduit l'inflammation car il :",
              options: ["tue les bactéries responsables de l'infection", "bloque la fabrication des prostaglandines", "renforce la paroi des vaisseaux sanguins de la peau"],
              answer: 1,
              why: "L'ibuprofène, un AINS, inhibe une enzyme nécessaire à la synthèse des prostaglandines, ce qui réduit douleur et gonflement.",
            },
            {
              q: "Au cours de la phagocytose, la digestion du pathogène a lieu :",
              options: ["à la surface externe de la membrane du phagocyte", "dans le noyau du phagocyte, au contact de l'ADN", "dans le sang, avant que le phagocyte ne l'atteigne", "dans une vésicule fusionnée avec des lysosomes"],
              answer: 3,
              why: "Le pathogène ingéré est enfermé dans un phagosome, qui fusionne avec des lysosomes dont les enzymes le digèrent.",
            },
            {
              q: "Quelles cellules font le lien entre immunité innée et immunité adaptative ?",
              options: ["les mastocytes", "les cellules dendritiques", "les granulocytes neutrophiles", "les globules rouges"],
              answer: 1,
              why: "Les cellules dendritiques capturent les antigènes dans le tissu infecté puis les présentent aux lymphocytes dans les ganglions.",
            },
          ],
          trap: "Croire que l'inflammation est un dérèglement à supprimer systématiquement : la réaction inflammatoire aiguë est une défense normale et utile ; les anti-inflammatoires soulagent les symptômes mais ne combattent pas l'agent infectieux.",
          method: "Pour expliquer un symptôme de l'inflammation, remontez toujours la chaîne complète : reconnaissance du pathogène par une cellule sentinelle, médiateur libéré, effet sur les vaisseaux ou les nerfs, symptôme observé. Un tableau à quatre colonnes aide à mémoriser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lymphocytes-b-anticorps',
          title: 'L’immunité adaptative : lymphocytes B et anticorps',
          minutes: 35,
          objectives: [
            "Définir un antigène et expliquer la spécificité de sa reconnaissance par les lymphocytes B.",
            "Décrire la sélection clonale, l'amplification clonale et la différenciation des lymphocytes B en plasmocytes.",
            "Décrire la structure d'un anticorps et expliquer la formation et le devenir d'un complexe immun.",
            "Interpréter un test d'immunodiffusion (test d'Ouchterlony) et un suivi de la concentration d'anticorps.",
          ],
          course: [
            {
              heading: "Antigènes et répertoire des lymphocytes B",
              paragraphs: [
                "Un antigène est une molécule, ou une partie de molécule, reconnue de façon spécifique par les acteurs de l'immunité adaptative : une protéine de la surface d'un virus, une toxine bactérienne, une molécule d'une cellule greffée. Les lymphocytes B (LB) naissent et mûrissent dans la moelle osseuse. Chacun porte à sa surface des milliers de récepteurs identiques, les BCR, qui sont des anticorps fixés dans sa membrane : un LB ne reconnaît donc qu'un seul antigène, et plus précisément un seul motif de cet antigène, appelé déterminant antigénique.",
                "L'ensemble des LB d'un individu forme un répertoire immense, de millions de spécificités différentes, présentes avant toute rencontre avec un antigène. Cette diversité vient de recombinaisons aléatoires de segments de gènes qui se produisent pendant la maturation de chaque LB : à partir d'un nombre limité de segments, chaque cellule assemble une combinaison unique. Les LB qui reconnaîtraient fortement les molécules de l'organisme sont éliminés au cours de leur maturation, ce qui évite les attaques contre soi.",
              ],
              box: { label: "Définition", text: "Antigène : molécule reconnue spécifiquement par un récepteur de lymphocyte (BCR ou TCR) ou par un anticorps. Un lymphocyte B naïf porte des BCR tous identiques : il ne reconnaît qu'un seul déterminant antigénique." },
            },
            {
              heading: "Sélection, amplification et différenciation",
              paragraphs: [
                "Lors d'une infection, l'antigène parvient aux organes lymphoïdes secondaires, comme les ganglions lymphatiques et la rate. Seuls les rares LB dont le BCR est complémentaire de cet antigène le fixent : c'est la sélection clonale. Ces LB sélectionnés, stimulés en outre par des messagers chimiques, les interleukines, sécrétés par des lymphocytes T CD4 auxiliaires, se multiplient activement par mitoses : c'est l'amplification clonale, qui produit en quelques jours un clone de milliers de cellules identiques, toutes de même spécificité.",
                "La plupart des cellules du clone se différencient ensuite en plasmocytes : ce sont des cellules au cytoplasme très riche en réticulum endoplasmique (un véritable atelier de fabrication de protéines), qui sécrètent en grande quantité des anticorps solubles, de même spécificité que le BCR du LB d'origine. D'autres deviennent des LB mémoire, qui persistent longtemps. Lors d'un premier contact, il s'écoule en général une à deux semaines entre l'entrée de l'antigène et l'apparition d'une quantité importante d'anticorps dans le sang.",
              ],
              box: { label: "Repère", text: "Réponse à médiation humorale : sélection clonale (le BCR fixe l'antigène) → amplification clonale (mitoses, avec l'aide des LT CD4 auxiliaires) → différenciation en plasmocytes, qui sécrètent les anticorps, et en LB mémoire." },
            },
            {
              heading: "La molécule d'anticorps",
              paragraphs: [
                "Un anticorps, ou immunoglobuline, est une protéine du plasma en forme de Y. Il est formé de quatre chaînes polypeptidiques : deux chaînes lourdes identiques et deux chaînes légères identiques, reliées par des ponts disulfure. Chaque chaîne comporte une partie constante, la même pour tous les anticorps d'une même classe, et une partie variable, différente d'un anticorps à l'autre. L'extrémité de chaque bras du Y, formée des parties variables d'une chaîne lourde et d'une chaîne légère, constitue un site de fixation dont la forme est complémentaire d'un déterminant antigénique ; un anticorps possède ainsi deux sites de fixation identiques.",
                "Un anticorps se lie donc spécifiquement à son antigène, un peu comme une clé dans sa serrure : il forme avec lui un complexe immun. Comme chaque anticorps a deux sites de fixation et que beaucoup d'antigènes portent plusieurs déterminants, de grands réseaux se forment et précipitent. On exploite cette propriété dans le test d'Ouchterlony : un sérum et des antigènes sont déposés dans des puits creusés dans une gélose, où ils diffusent ; un arc de précipitation se forme entre deux puits lorsque le sérum contient des anticorps dirigés contre l'antigène.",
              ],
              box: { label: "Définition", text: "Anticorps : protéine en forme de Y, formée de deux chaînes lourdes et de deux chaînes légères, avec des parties constantes et des parties variables. Ses deux sites de fixation, portés par les parties variables, sont complémentaires d'un déterminant antigénique précis." },
            },
            {
              heading: "Le devenir des complexes immuns",
              paragraphs: [
                "La fixation des anticorps neutralise l'antigène : un virus recouvert d'anticorps ne peut plus se fixer aux cellules qu'il infecte, une toxine ne peut plus agir. Mais l'anticorps ne détruit pas lui-même l'antigène. Les complexes immuns sont éliminés par phagocytose : les phagocytes possèdent des récepteurs qui reconnaissent la partie constante des anticorps, ce qui facilite l'adhésion puis l'ingestion du complexe. L'immunité innée intervient donc aussi à la fin de la réponse adaptative.",
                "La présence dans le sang d'anticorps dirigés contre un agent (la personne est alors dite séropositive pour cet agent) prouve que l'organisme a été en contact avec lui, par une infection ou une vaccination : c'est le principe des tests sérologiques. Les anticorps agissent dans les liquides de l'organisme (sang, lymphe) : ils sont efficaces contre les pathogènes et les toxines présents hors des cellules, mais n'atteignent pas un virus caché à l'intérieur d'une cellule.",
              ],
              box: { label: "À retenir", text: "Les anticorps neutralisent l'antigène en formant des complexes immuns, puis les phagocytes éliminent ces complexes grâce à leurs récepteurs à la partie constante des anticorps. Les anticorps n'atteignent pas les virus situés à l'intérieur des cellules." },
            },
          ],
          keyPoints: [
            "Un LB naïf porte des BCR identiques : il reconnaît un seul déterminant antigénique ; le répertoire, immense, existe avant l'infection.",
            "Diversité du répertoire : recombinaisons aléatoires de segments de gènes pendant la maturation des LB dans la moelle osseuse.",
            "Sélection clonale (fixation de l'antigène), amplification clonale (mitoses, aide des LT CD4), différenciation en plasmocytes et en LB mémoire.",
            "Plasmocyte : cellule riche en réticulum endoplasmique, qui sécrète des anticorps de même spécificité que le BCR d'origine.",
            "Anticorps : deux chaînes lourdes, deux chaînes légères, parties constantes et variables, deux sites de fixation identiques.",
            "Complexe immun : l'antigène est neutralisé, puis éliminé par phagocytose.",
          ],
          example: {
            statement: "On réalise un test d'Ouchterlony. Dans le puits central, on dépose le sérum d'un patient. Dans les puits périphériques, on dépose : puits 1, des protéines du virus de la rougeole ; puits 2, des protéines du virus de la rubéole ; puits 3, des protéines du virus des oreillons ; puits 4, de l'eau physiologique. Après 48 heures, un arc de précipitation n'apparaît qu'entre le puits central et le puits 3. Interprétez ce résultat.",
            solution: [
              "Principe : les anticorps du sérum et les antigènes diffusent dans la gélose ; là où des anticorps rencontrent l'antigène qui leur est complémentaire, des complexes immuns se forment et précipitent en un arc visible.",
              "Puits 4 : l'eau physiologique ne contient pas d'antigène et aucun arc n'apparaît. Ce témoin montre que le sérum seul ne précipite pas.",
              "Puits 3 : un arc apparaît. Le sérum contient donc des anticorps dirigés contre des protéines du virus des oreillons.",
              "Puits 1 et 2 : aucun arc. Le sérum ne contient pas, ou pas en quantité détectable, d'anticorps contre les virus de la rougeole et de la rubéole.",
              "Conclusion : le patient est séropositif pour le virus des oreillons ; il a été en contact avec ce virus, par une infection ou une vaccination. Le test illustre la spécificité de la liaison entre anticorps et antigène.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un anticorps de classe G comporte deux chaînes lourdes d'environ 446 acides aminés chacune et deux chaînes légères d'environ 214 acides aminés chacune (valeurs approchées). a) Combien d'acides aminés la molécule compte-t-elle au total ? b) Combien de sites de fixation de l'antigène possède-t-elle, et où sont-ils situés ? c) Deux anticorps produits par des plasmocytes issus de deux clones différents ont-ils exactement la même séquence d'acides aminés ? Précisez où ils diffèrent.",
              hint: "Une molécule d'anticorps compte quatre chaînes : additionnez les acides aminés de chacune, puis rappelez-vous quelle partie des chaînes porte la spécificité.",
              solution: [
                "a) 2 × 446 + 2 × 214 = 892 + 428 = 1 320 acides aminés environ.",
                "b) La molécule possède deux sites de fixation identiques, situés à l'extrémité des deux bras du Y. Chacun est formé des parties variables d'une chaîne lourde et d'une chaîne légère.",
                "c) Non. Deux clones différents reconnaissent des déterminants antigéniques différents : leurs anticorps diffèrent par la séquence de leurs parties variables, qui forment les sites de fixation.",
                "Leurs parties constantes, en revanche, sont identiques s'ils appartiennent à la même classe.",
                "Résultat : environ 1 320 acides aminés, deux sites de fixation au bout des bras du Y ; deux clones différents produisent des anticorps qui diffèrent par leurs parties variables.",
              ],
            },
            {
              level: 2,
              statement: "Après une première infection par une bactérie (jour 0), on dose dans le sang d'un patient les anticorps dirigés contre cette bactérie (données fictives, en unités arbitraires) : J0 : 0 ; J4 : 0 ; J8 : 20 ; J12 : 80 ; J16 : 100 ; J30 : 40. a) Pourquoi ne détecte-t-on aucun anticorps pendant les premiers jours ? b) Quels phénomènes cellulaires se déroulent entre J0 et J12 ? c) Calculez la diminution, en pourcentage, de la concentration d'anticorps entre J16 et J30, et proposez une explication.",
              hint: "Pensez aux trois étapes qui précèdent la sécrétion d'anticorps et au temps qu'elles demandent ; pour la baisse, demandez-vous ce que deviennent les anticorps fixés sur la bactérie.",
              solution: [
                "a) Lors d'un premier contact, les LB spécifiques de la bactérie sont très peu nombreux. Il faut du temps pour qu'ils soient sélectionnés, se multiplient et se différencient en plasmocytes : pendant ce délai, aucun anticorps n'est produit en quantité détectable.",
                "b) Entre J0 et J12 : sélection clonale des LB dont le BCR est complémentaire d'un antigène de la bactérie, amplification clonale par mitoses (avec l'aide des LT CD4 auxiliaires), puis différenciation en plasmocytes qui sécrètent des anticorps, d'où la hausse à partir de J8.",
                "c) Diminution : (100 - 40) ÷ 100 = 0,60, soit 60 % entre J16 et J30.",
                "Explication : les anticorps forment des complexes immuns éliminés par phagocytose, et ceux qui restent sont dégradés peu à peu ; une fois la bactérie éliminée, la stimulation cesse et la plupart des plasmocytes meurent, si bien que la production diminue.",
                "Résultat : délai lié à la sélection, à l'amplification et à la différenciation ; baisse de 60 % après le pic, quand l'infection est maîtrisée.",
              ],
            },
            {
              level: 3,
              statement: "Expérience (données fictives, inspirées des travaux historiques sur la sérothérapie) : à J0, une souris A reçoit de l'anatoxine tétanique, c'est-à-dire de la toxine tétanique rendue inoffensive. À J15, on prélève son sérum. Lot 1 : une souris B reçoit le sérum de A, puis une dose mortelle de toxine tétanique : elle survit. Lot 2 : une souris C reçoit le sérum d'une souris n'ayant jamais été traitée, puis la même dose de toxine tétanique : elle meurt. Lot 3 : une souris D reçoit le sérum de A, puis une dose mortelle de toxine diphtérique : elle meurt. Toutes les souris sont de la même lignée. Montrez que la protection est due à des molécules du sérum, spécifiques, que vous identifierez ; expliquez leur production chez la souris A et leur mode d'action.",
              hint: "Comparez chaque lot au lot témoin, en ne changeant qu'un seul paramètre à la fois : la provenance du sérum, puis la toxine injectée.",
              solution: [
                "Lot 2 (témoin) : le sérum d'une souris non traitée ne protège pas ; la toxine tétanique est donc mortelle à cette dose.",
                "Lot 1 comparé au lot 2 : seule la provenance du sérum change. Le sérum de A protège : il contient des molécules protectrices, apparues après le contact avec l'anatoxine. Ces molécules sont transférables par le sérum, donc solubles.",
                "Lot 3 comparé au lot 1 : seule la toxine change. Le sérum de A ne protège pas contre la toxine diphtérique : la protection est spécifique de la toxine tétanique.",
                "Ces molécules solubles et spécifiques sont des anticorps anti-toxine tétanique.",
                "Production chez A : l'anatoxine garde les déterminants antigéniques de la toxine. Les LB dont le BCR leur est complémentaire sont sélectionnés, se multiplient (amplification clonale, avec l'aide des LT CD4 auxiliaires) et se différencient en plasmocytes, qui sécrètent les anticorps ; à J15, ils sont abondants dans le sang.",
                "Mode d'action : chez B, les anticorps transférés se fixent sur la toxine et forment des complexes immuns ; la toxine, neutralisée, ne peut plus agir, puis les complexes sont éliminés par phagocytose.",
                "Conclusion : la protection est assurée par des anticorps spécifiques du sérum. Chez B, elle est passive et temporaire, car B n'a pas produit elle-même ces anticorps et ne possède pas de LB mémoire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Antigène", right: "Molécule reconnue spécifiquement par un anticorps ou un récepteur de lymphocyte" },
              { left: "BCR", right: "Récepteur membranaire d'un lymphocyte B, de même forme qu'un anticorps" },
              { left: "Sélection clonale", right: "Fixation de l'antigène sur les seuls LB qui lui sont complémentaires" },
              { left: "Amplification clonale", right: "Multiplication par mitoses des LB sélectionnés" },
              { left: "Plasmocyte", right: "Cellule issue d'un LB, qui sécrète des anticorps" },
              { left: "Complexe immun", right: "Association d'un antigène et d'anticorps, ensuite phagocytée" },
            ],
          },
          quiz: [
            {
              q: "Un lymphocyte B naïf porte à sa surface :",
              options: ["des BCR de toutes les spécificités possibles", "des anticorps dirigés contre chacun des virus connus", "des BCR tous identiques", "des molécules d'histamine prêtes à être libérées"],
              answer: 2,
              why: "Chaque LB possède des BCR identiques, d'une seule spécificité ; la diversité existe entre les LB, pas sur un même LB.",
            },
            {
              q: "Les cellules qui sécrètent les anticorps sont :",
              options: ["les lymphocytes B naïfs", "les granulocytes neutrophiles", "les mastocytes", "les plasmocytes"],
              answer: 3,
              why: "Les plasmocytes sont issus de la différenciation des LB sélectionnés et amplifiés ; ils sécrètent des anticorps solubles.",
            },
            {
              q: "Les sites de fixation de l'antigène d'un anticorps sont portés par :",
              options: ["les parties variables", "les parties constantes des chaînes lourdes seulement", "le pied du Y, formé des deux chaînes légères", "les ponts disulfure qui relient les quatre chaînes"],
              answer: 0,
              why: "Aux extrémités des bras du Y, les parties variables d'une chaîne lourde et d'une chaîne légère forment un site complémentaire d'un déterminant antigénique.",
            },
            {
              q: "Dans un test d'Ouchterlony, un arc de précipitation entre deux puits indique :",
              options: ["que l'antigène a détruit les anticorps présents", "la formation de complexes immuns", "que le sérum ne contient aucun anticorps", "une contamination de la gélose par des bactéries"],
              answer: 1,
              why: "L'arc correspond aux complexes immuns qui précipitent là où les anticorps du sérum rencontrent leur antigène.",
            },
            {
              q: "La diversité du répertoire des lymphocytes B provient :",
              options: ["de recombinaisons aléatoires de segments de gènes", "d'une mutation provoquée par chaque antigène rencontré", "de la phagocytose des antigènes par les lymphocytes B", "d'un gène entier hérité pour chacun des anticorps"],
              answer: 0,
              why: "Pendant leur maturation, chaque LB assemble au hasard des segments de gènes, ce qui crée des millions de spécificités avant toute infection.",
            },
          ],
          trap: "Croire que l'antigène « fabrique » ou modifie les lymphocytes B pour qu'ils lui correspondent : les LB de toutes les spécificités existent avant l'infection, et l'antigène ne fait que sélectionner ceux dont le BCR lui est déjà complémentaire.",
          method: "Retenez la réponse des LB par trois mots qui s'enchaînent : sélection, amplification, différenciation. Pour chacun, sachez dire ce qui se passe, où cela se passe et quel en est le résultat (LB sélectionnés, clone, plasmocytes et anticorps).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lymphocytes-t',
          title: 'L’immunité adaptative : lymphocytes T',
          minutes: 35,
          objectives: [
            "Expliquer comment un lymphocyte T reconnaît un antigène présenté par une cellule, grâce à son TCR et aux molécules du CMH.",
            "Décrire l'activation, l'amplification et la différenciation des lymphocytes T CD8 en lymphocytes T cytotoxiques, et leur mode d'action.",
            "Expliquer le rôle central des lymphocytes T CD4 auxiliaires dans la coordination de la réponse adaptative.",
            "Expliquer l'immunodéficience provoquée par le VIH.",
          ],
          course: [
            {
              heading: "Des lymphocytes qui reconnaissent des cellules",
              paragraphs: [
                "Les anticorps n'atteignent pas les virus qui se multiplient à l'intérieur des cellules. Ces cellules infectées sont éliminées par une autre branche de l'immunité adaptative, la réponse à médiation cellulaire, assurée par les lymphocytes T (LT). Les LT naissent dans la moelle osseuse mais terminent leur maturation dans le thymus, d'où leur nom. Comme les LB, ils forment un répertoire immense de clones différents, issu de recombinaisons aléatoires de gènes, et chaque LT ne possède qu'un type de récepteur, le TCR.",
                "Contrairement au BCR, le TCR ne reconnaît pas un antigène libre : il reconnaît un fragment d'antigène, un peptide, présenté à la surface d'une cellule par une molécule du CMH (complexe majeur d'histocompatibilité, appelé HLA chez l'être humain). Nos cellules présentent ainsi en permanence des peptides issus de leurs propres protéines ; une cellule infectée par un virus présente aussi des peptides viraux, ce qui la signale aux LT. Les molécules du CMH varient beaucoup d'une personne à l'autre, ce qui explique en partie le rejet des greffes.",
              ],
              box: { label: "Définition", text: "TCR : récepteur membranaire d'un lymphocyte T. Il reconnaît spécifiquement un peptide antigénique associé à une molécule du CMH à la surface d'une cellule, et non un antigène libre." },
            },
            {
              heading: "L'activation des lymphocytes T dans les ganglions",
              paragraphs: [
                "On distingue deux grandes catégories de LT selon une protéine de leur membrane : les LT CD4 et les LT CD8. Les LT naïfs circulent entre le sang et les organes lymphoïdes. Dans un ganglion, une cellule dendritique venue du tissu infecté leur présente des peptides de l'agent pathogène associés au CMH. Seuls les LT dont le TCR est complémentaire de ce complexe peptide-CMH sont sélectionnés : c'est, comme pour les LB, une sélection clonale.",
                "Les LT CD4 sélectionnés se multiplient (amplification clonale) et se différencient en LT auxiliaires, aussi appelés LT helpers. Ceux-ci sécrètent des messagers chimiques, les interleukines (comme l'interleukine 2, qui stimule notamment la multiplication des LT), qui activent la multiplication et la différenciation des LB et des LT CD8 sélectionnés contre le même agent. Les LT CD8 sélectionnés, ainsi stimulés, se multiplient à leur tour et se différencient en LT cytotoxiques (LTc). Une partie des cellules de chaque clone devient des LT mémoire.",
              ],
              box: { label: "Repère", text: "LT CD4 → LT auxiliaires, qui sécrètent des interleukines et stimulent les LB et les LT CD8. LT CD8 → LT cytotoxiques, qui détruisent les cellules infectées. Dans les deux cas : sélection clonale, amplification clonale, différenciation." },
            },
            {
              heading: "Les lymphocytes T cytotoxiques détruisent les cellules infectées",
              paragraphs: [
                "Les LTc quittent le ganglion et rejoignent le tissu infecté. Lorsqu'un LTc reconnaît, grâce à son TCR, une cellule qui présente le peptide viral associé au CMH, il se fixe à elle et libère des molécules : la perforine, qui forme des pores dans la membrane de la cellule cible, et des enzymes, les granzymes, qui y pénètrent et déclenchent sa mort par apoptose. La cellule infectée est détruite avec les virus qu'elle contenait, avant qu'ils ne se multiplient davantage, et ses débris sont phagocytés.",
                "Les LTc agissent de façon très spécifique : ils épargnent les cellules saines voisines, qui ne présentent pas le peptide viral. Le même mécanisme permet d'éliminer certaines cellules cancéreuses qui présentent des peptides anormaux, ce qui fonde une partie de l'immunothérapie des cancers.",
              ],
              box: { label: "Propriété", text: "Un LTc reconnaît une cellule cible qui présente, associé au CMH, le peptide contre lequel il est dirigé. Il libère de la perforine et des granzymes qui déclenchent l'apoptose de la cellule cible." },
            },
            {
              heading: "Les LT CD4, chefs d'orchestre : l'exemple du VIH",
              paragraphs: [
                "Sans LT auxiliaires, les LB et les LT CD8 sélectionnés se multiplient et se différencient très mal : les LT CD4 sont au carrefour des deux réponses adaptatives, humorale et cellulaire. Le virus de l'immunodéficience humaine (VIH) infecte précisément les LT CD4, car il se fixe sur la protéine CD4 de leur membrane. Au fil des années, malgré une réponse immunitaire initiale (la production d'anticorps anti-VIH, qui rend la personne séropositive), le nombre de LT CD4 diminue progressivement.",
                "Chez une personne non traitée, le nombre de LT CD4 passe d'environ 500 à 1 500 par mm³ de sang à moins de 200 par mm³ : c'est le stade sida (syndrome d'immunodéficience acquise). L'organisme ne parvient plus à se défendre contre des agents habituellement peu dangereux, qui provoquent des maladies dites opportunistes (certaines pneumonies, la tuberculose, des infections par des champignons). Les traitements antirétroviraux actuels bloquent la multiplication du virus et maintiennent un nombre suffisant de LT CD4, mais ne guérissent pas l'infection ; la prévention (préservatif, dépistage, traitements préventifs) reste essentielle.",
              ],
              box: { label: "À retenir", text: "Le VIH infecte les LT CD4 et les détruit progressivement. Sous 200 LT CD4 par mm³ de sang, c'est le stade sida : les réponses adaptatives, humorale et cellulaire, s'effondrent et des maladies opportunistes apparaissent." },
            },
          ],
          keyPoints: [
            "Les LT mûrissent dans le thymus ; chaque LT porte un seul type de TCR, issu de recombinaisons aléatoires de gènes.",
            "Le TCR reconnaît un peptide antigénique associé à une molécule du CMH, à la surface d'une cellule, jamais un antigène libre.",
            "Dans les ganglions, les cellules dendritiques présentent les antigènes : sélection, amplification et différenciation des LT.",
            "LT CD4 → LT auxiliaires, qui sécrètent des interleukines stimulant les LB et les LT CD8. LT CD8 → LT cytotoxiques.",
            "Le LTc détruit la cellule infectée par apoptose (perforine, granzymes) et épargne les cellules saines.",
            "Le VIH détruit les LT CD4 : sous 200 par mm³ de sang, c'est le stade sida, avec des maladies opportunistes.",
          ],
          example: {
            statement: "Des souris d'une même lignée sont infectées par un virus V1. Huit jours plus tard, on prélève leurs LT CD8 et on les met en présence de différentes cellules de souris de la même lignée, préalablement marquées par une substance qui n'est libérée dans le milieu que si la cellule est détruite. Pourcentage de substance libérée après quatre heures (données fictives) : cellules non infectées : 5 % ; cellules infectées par V1 : 70 % ; cellules infectées par un autre virus, V2 : 6 %. Interprétez ces résultats.",
            solution: [
              "Le pourcentage de substance libérée mesure la destruction des cellules. Avec les cellules non infectées, il est faible (5 %) : c'est le niveau de base, qui correspond à une fuite ou à une mort naturelle de quelques cellules.",
              "Les cellules infectées par V1 libèrent 70 % de la substance : elles sont massivement détruites. Les LT CD8 prélevés, en huit jours, ont donc été sélectionnés, amplifiés et différenciés en LT cytotoxiques dirigés contre V1.",
              "Les cellules infectées par V2 ne libèrent que 6 %, soit à peu près le niveau de base : les LTc anti-V1 ne les détruisent pas. La destruction est spécifique du virus contre lequel les LT ont été activés.",
              "Les cellules saines sont épargnées : les LTc ne reconnaissent que les cellules qui présentent, associés au CMH, des peptides de V1.",
              "Conclusion : l'infection par V1 a produit des LTc spécifiques de V1, qui détruisent les seules cellules infectées par ce virus (par perforine et granzymes, qui déclenchent leur apoptose).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des cellules suivantes, indiquez son rôle et précisez si elle intervient dans la réponse humorale (anticorps), dans la réponse cellulaire (LTc) ou dans les deux : a) LT CD4 auxiliaire ; b) LT cytotoxique ; c) plasmocyte ; d) cellule dendritique.",
              hint: "Pour chaque cellule, demandez-vous ce qu'elle produit ou ce qu'elle fait, puis quelle réponse en dépend.",
              solution: [
                "a) Le LT CD4 auxiliaire sécrète des interleukines qui stimulent la multiplication et la différenciation des LB et des LT CD8 : il intervient dans les deux réponses.",
                "b) Le LT cytotoxique détruit les cellules infectées qui présentent le peptide viral associé au CMH : réponse cellulaire.",
                "c) Le plasmocyte sécrète des anticorps spécifiques : réponse humorale.",
                "d) La cellule dendritique capture les antigènes et les présente aux LB et aux LT dans les ganglions : elle déclenche les deux réponses (c'est aussi une cellule de l'immunité innée).",
                "Résultat : LT CD4 auxiliaire et cellule dendritique, les deux réponses ; LTc, réponse cellulaire ; plasmocyte, réponse humorale.",
              ],
            },
            {
              level: 2,
              statement: "Chez un patient infecté par le VIH et non traité, le nombre de LT CD4 par mm³ de sang évolue ainsi (données fictives) : au diagnostic : 900 ; 3 ans plus tard : 650 ; 6 ans plus tard : 420 ; 9 ans plus tard : 180. a) Calculez la diminution moyenne par an entre le diagnostic et la 9e année. b) Le patient a-t-il atteint le stade sida ? Justifiez. c) Expliquez pourquoi il devient sensible à de nombreuses infections, alors que le VIH n'infecte ni les LB ni les LT CD8.",
              hint: "Rappelez le seuil qui définit le stade sida, puis le rôle des LT CD4 auprès des autres lymphocytes.",
              solution: [
                "a) Diminution totale : 900 - 180 = 720 LT CD4 par mm³ en 9 ans, soit en moyenne 720 ÷ 9 = 80 LT CD4 par mm³ et par an.",
                "b) Oui : à 9 ans, le nombre de LT CD4 (180 par mm³) est passé sous le seuil de 200 par mm³ qui définit le stade sida. Le seuil a été franchi entre la 6e et la 9e année.",
                "c) Les LT CD4 auxiliaires sécrètent les interleukines nécessaires à la multiplication et à la différenciation des LB en plasmocytes et des LT CD8 en LTc.",
                "Sans eux, les LB et les LT CD8, pourtant intacts, ne sont plus activés efficacement : ni anticorps ni LTc ne sont produits en quantité suffisante, et des agents habituellement peu dangereux provoquent des maladies opportunistes.",
                "Résultat : baisse moyenne de 80 LT CD4 par mm³ et par an ; stade sida atteint ; l'effondrement des LT CD4 paralyse les deux réponses adaptatives.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : les souris nude sont dépourvues de thymus à la suite d'une mutation ; elles possèdent des LB, mais pas de LT matures. Infectées par un virus V, elles ne produisent presque pas d'anticorps anti-V, ne détruisent pas les cellules infectées et meurent. Document 2 (données fictives) : avant l'infection par V, on injecte à des souris nude des LT de souris normales de la même lignée : des LT CD4 seulement (lot A), des LT CD8 seulement (lot B), ou les deux (lot C). Résultats : lot A : anticorps anti-V abondants, pas de LTc anti-V, survie partielle ; lot B : ni anticorps ni LTc anti-V détectables, mort ; lot C : anticorps et LTc anti-V, survie. Expliquez ces résultats et montrez le rôle respectif des LT CD4 et des LT CD8 dans la défense contre le virus.",
              hint: "Les souris nude possèdent des LB mais pas de LT : identifiez, pour chaque lot, les cellules présentes, celles qui manquent, et ce que chacune permet de produire.",
              solution: [
                "Document 1 : sans thymus, pas de LT matures. Les souris nude possèdent des LB, mais ceux-ci ne produisent presque pas d'anticorps : la réponse des LB dépend des LT. Sans LT, il n'y a pas non plus de LTc.",
                "Lot A (LB et LT CD4) : les LT CD4 deviennent auxiliaires et sécrètent des interleukines qui permettent l'amplification et la différenciation des LB en plasmocytes : des anticorps sont produits. En l'absence de LT CD8, il n'y a pas de LTc.",
                "La survie n'est que partielle : les anticorps neutralisent les virus présents hors des cellules, mais les cellules déjà infectées, où le virus se multiplie, ne sont pas détruites.",
                "Lot B (LB et LT CD8, sans LT CD4) : faute d'interleukines des LT auxiliaires, ni les LB ni les LT CD8 ne sont activés efficacement : ni anticorps ni LTc, et la souris meurt.",
                "Lot C (LB, LT CD4 et LT CD8) : les LT auxiliaires stimulent à la fois les LB (anticorps qui neutralisent les virus libres) et les LT CD8 (LTc qui détruisent les cellules infectées) : la défense est complète et la souris survit.",
                "Conclusion : les LT CD8, devenus LTc, éliminent les cellules infectées ; les LT CD4 auxiliaires sont indispensables à l'activation des LB comme des LT CD8 : ils coordonnent l'ensemble de la réponse adaptative.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la réponse des LT CD8 contre un virus.",
            items: [
              "Une cellule dendritique capture des virus dans le tissu infecté",
              "Elle migre vers un ganglion et présente des peptides viraux associés au CMH",
              "Les LT CD8 dont le TCR est complémentaire du complexe sont sélectionnés",
              "Stimulés par les interleukines des LT auxiliaires, ils se multiplient",
              "Ils se différencient en LT cytotoxiques et rejoignent le tissu infecté",
              "Au contact des cellules infectées, ils libèrent perforine et granzymes, qui déclenchent leur apoptose",
            ],
          },
          quiz: [
            {
              q: "Le TCR d'un lymphocyte T reconnaît :",
              options: ["un antigène libre dans le sang", "un peptide associé au CMH", "toute cellule étrangère, sans spécificité", "les anticorps fixés sur un virus"],
              answer: 1,
              why: "Le TCR reconnaît un peptide antigénique présenté par une molécule du CMH à la surface d'une cellule, jamais un antigène libre.",
            },
            {
              q: "Les lymphocytes T terminent leur maturation dans :",
              options: ["le thymus", "la rate", "les ganglions", "le foie"],
              answer: 0,
              why: "Les LT naissent dans la moelle osseuse puis achèvent leur maturation dans le thymus, d'où leur nom.",
            },
            {
              q: "Un lymphocyte T cytotoxique provient de la différenciation :",
              options: ["d'un lymphocyte B après sa sélection clonale", "d'un plasmocyte stimulé par l'interleukine", "d'un macrophage ayant phagocyté un virus", "d'un lymphocyte T CD8"],
              answer: 3,
              why: "Les LT CD8 sélectionnés, stimulés par les interleukines des LT auxiliaires, se multiplient et se différencient en LT cytotoxiques.",
            },
            {
              q: "Le VIH provoque une immunodéficience car il infecte principalement :",
              options: ["les globules rouges du sang", "les plasmocytes de la rate", "les lymphocytes T CD4", "les cellules de la peau"],
              answer: 2,
              why: "Le VIH se fixe sur la protéine CD4 et détruit progressivement les LT CD4, indispensables à l'activation des LB et des LT CD8.",
            },
            {
              q: "Un LTc tue une cellule infectée :",
              options: ["en sécrétant des anticorps contre elle", "en la phagocytant entièrement", "en déclenchant son apoptose", "en lui retirant ses molécules du CMH"],
              answer: 2,
              why: "Le LTc libère de la perforine et des granzymes, qui déclenchent la mort programmée (apoptose) de la cellule infectée.",
            },
          ],
          trap: "Croire que les LT reconnaissent directement le virus, comme les anticorps : le TCR ne reconnaît qu'un peptide présenté par une molécule du CMH à la surface d'une cellule. Autre confusion fréquente : ce sont les LT CD8 qui deviennent cytotoxiques, les LT CD4 deviennent auxiliaires.",
          method: "Construisez un schéma bilan unique des deux réponses adaptatives, avec au centre le LT CD4 auxiliaire et ses deux flèches vers les LB et vers les LT CD8 : il servira pour toute question de synthèse, et notamment pour expliquer les effets du VIH.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vaccination',
          title: 'La mémoire immunitaire et la vaccination',
          minutes: 30,
          objectives: [
            "Comparer la réponse immunitaire primaire et la réponse secondaire, et relier leurs différences à l'existence de cellules mémoire.",
            "Expliquer le principe de la vaccination et le rôle des adjuvants.",
            "Argumenter l'intérêt de la vaccination à l'échelle individuelle et à l'échelle collective (immunité de groupe).",
            "Expliquer que le phénotype immunitaire évolue au cours de la vie.",
          ],
          course: [
            {
              heading: "Réponse primaire et réponse secondaire",
              paragraphs: [
                "Lors d'un premier contact avec un antigène, la réponse adaptative est dite primaire : les anticorps n'apparaissent dans le sang qu'au bout d'une à deux semaines, en quantité modérée, puis leur concentration diminue. Lors d'un second contact avec le même antigène, la réponse secondaire est beaucoup plus rapide (quelques jours), plus intense (la concentration d'anticorps atteint des valeurs nettement plus élevées) et plus durable. Les anticorps produits sont en outre plus affins : ils se fixent plus solidement à l'antigène.",
                "Cette différence s'explique par les cellules mémoire. À la fin de la réponse primaire, la plupart des cellules effectrices (plasmocytes, LTc) meurent, mais une partie des LB et des LT des clones sélectionnés persiste sous forme de lymphocytes mémoire, dont la durée de vie est longue (parfois des dizaines d'années). Ils sont beaucoup plus nombreux que les lymphocytes naïfs de même spécificité avant le premier contact, et ils réagissent plus vite : la mémoire immunitaire est le fruit de l'amplification clonale. Elle est spécifique : elle ne vaut que pour l'antigène déjà rencontré.",
              ],
              box: { label: "À retenir", text: "Réponse secondaire : plus rapide, plus intense et plus durable que la réponse primaire, avec des anticorps plus affins. Elle est due aux LB et LT mémoire, plus nombreux et plus réactifs que les lymphocytes naïfs, et elle est spécifique de l'antigène." },
            },
            {
              heading: "Le principe de la vaccination",
              paragraphs: [
                "Vacciner, c'est provoquer volontairement une réponse primaire, sans la maladie, pour que la rencontre ultérieure avec le vrai pathogène déclenche directement une réponse secondaire, assez rapide pour empêcher la maladie. Un vaccin contient des antigènes de l'agent pathogène sous une forme qui ne rend pas malade : un agent tué ou inactivé (grippe, poliomyélite en injection), un agent vivant atténué (rougeole, oreillons, rubéole), une toxine inactivée appelée anatoxine (tétanos, diphtérie), une protéine purifiée (hépatite B, papillomavirus), ou un ARN messager qui fait fabriquer une protéine du virus par nos propres cellules (vaccins contre la covid-19).",
                "Des antigènes seuls déclenchent souvent une réponse faible, car l'immunité adaptative a besoin d'être lancée par une réaction innée. C'est le rôle des adjuvants (par exemple des sels d'aluminium) ajoutés à beaucoup de vaccins : ils provoquent une réaction inflammatoire locale qui active les cellules dendritiques, lesquelles présentent ensuite les antigènes aux lymphocytes dans les ganglions. La rougeur et la douleur passagères au point d'injection en sont un signe. Les vaccins vivants atténués, qui se multiplient un peu dans l'organisme, n'ont en général pas besoin d'adjuvant.",
                "Une seule injection ne suffit pas toujours : des rappels sont prévus pour renforcer et entretenir la mémoire, chacun déclenchant une réponse de type secondaire. Le calendrier vaccinal fixe l'âge des injections et des rappels.",
              ],
              box: { label: "Définition", text: "Vaccination : administration d'antigènes rendus non pathogènes, souvent accompagnés d'un adjuvant, afin de déclencher une réponse primaire et la formation de lymphocytes mémoire, qui protégeront lors d'un contact ultérieur avec le pathogène." },
            },
            {
              heading: "Une protection individuelle et collective",
              paragraphs: [
                "La vaccination protège la personne vaccinée, mais aussi son entourage : une personne immunisée ne transmet pas, ou beaucoup moins, l'agent pathogène. Si une proportion suffisante de la population est immunisée, les chaînes de transmission sont interrompues et l'agent circule peu : c'est l'immunité de groupe, qui protège aussi les personnes qui ne peuvent pas être vaccinées (nourrissons trop jeunes, personnes immunodéprimées). Le seuil nécessaire dépend de la contagiosité de la maladie : pour la rougeole, très contagieuse, on vise une couverture vaccinale d'environ 95 %.",
                "L'histoire de la vaccination commence avec Edward Jenner, qui inocule en 1796 la vaccine, une maladie bénigne de la vache, pour protéger contre la variole ; Louis Pasteur met au point en 1885 un vaccin contre la rage. Grâce à une campagne mondiale de vaccination, l'Organisation mondiale de la santé a déclaré la variole éradiquée en 1980. En France, onze vaccinations sont devenues obligatoires pour les enfants nés à partir du 1er janvier 2018, et la liste a de nouveau été modifiée en 2025 : le calendrier vaccinal en vigueur fait foi. Lorsque la couverture vaccinale baisse, des épidémies peuvent réapparaître, comme cela a été observé pour la rougeole.",
              ],
              box: { label: "Repère", text: "1796 : Jenner protège contre la variole grâce à la vaccine. 1885 : vaccin de Pasteur contre la rage. 1980 : l'OMS déclare la variole éradiquée. 2018 : onze vaccinations obligatoires en France pour les enfants nés à partir de cette année." },
            },
            {
              heading: "Le phénotype immunitaire au cours de la vie",
              paragraphs: [
                "Le phénotype immunitaire d'une personne, c'est l'ensemble de ses lymphocytes et de ses anticorps à un moment donné. À la naissance, le nourrisson est protégé par des anticorps transmis par sa mère à travers le placenta, puis par le lait maternel ; ces anticorps disparaissent en quelques mois. Ensuite, chaque infection et chaque vaccination sélectionnent et amplifient des clones et laissent des cellules mémoire : le répertoire se modifie en permanence en fonction de l'environnement. Deux vrais jumeaux, au génome identique, n'ont donc pas le même phénotype immunitaire.",
                "Avec l'âge, la production de nouveaux lymphocytes diminue et les réponses deviennent moins efficaces, ce qui explique la plus grande sensibilité des personnes âgées à certaines infections et les vaccinations qui leur sont recommandées, contre la grippe par exemple. Le phénotype immunitaire résulte donc à la fois du génotype et de l'histoire de chacun.",
              ],
              box: { label: "À retenir", text: "Le phénotype immunitaire évolue toute la vie : anticorps maternels chez le nourrisson, puis enrichissement de la mémoire à chaque infection et à chaque vaccination, puis baisse d'efficacité avec l'âge." },
            },
          ],
          keyPoints: [
            "Réponse secondaire : plus rapide, plus intense et plus durable que la réponse primaire, grâce aux LB et LT mémoire.",
            "La mémoire immunitaire est spécifique : elle ne protège que contre l'antigène déjà rencontré.",
            "Un vaccin apporte des antigènes non pathogènes : agent inactivé ou atténué, anatoxine, protéine purifiée ou ARN messager.",
            "L'adjuvant déclenche une réaction innée qui active les cellules dendritiques, nécessaire à une bonne réponse adaptative.",
            "Les rappels entretiennent la mémoire ; une couverture vaccinale suffisante crée une immunité de groupe.",
            "Le phénotype immunitaire évolue au cours de la vie, au fil des infections et des vaccinations.",
          ],
          example: {
            statement: "On injecte à un lapin un antigène A à J0, puis de nouveau l'antigène A, en même temps qu'un antigène B jamais rencontré, à J40. On dose les anticorps dans le sang (unités arbitraires, données fictives). Anti-A : J7 : 5 ; J14 : 40 ; J30 : 10 ; J44 : 400 ; J60 : 250. Anti-B : J44 : 0 ; J54 : 40 ; J60 : 20. Comparez les réponses et expliquez-les.",
            solution: [
              "Réponse anti-A après J0 : les anticorps n'apparaissent qu'au bout d'une semaine environ, atteignent au plus 40 unités vers J14, puis diminuent (10 à J30). C'est une réponse primaire.",
              "Réponse anti-A après J40 : quatre jours après la seconde injection, la concentration atteint 400 unités, soit 400 ÷ 40 = 10 fois le maximum de la réponse primaire, et elle reste élevée à J60 (250). Cette réponse plus rapide, plus intense et plus durable est une réponse secondaire.",
              "Réponse anti-B après J40 : aucun anticorps à J44, puis 40 unités à J54 seulement. Elle ressemble à la réponse primaire anti-A : c'est une réponse primaire, alors qu'elle se déroule en même temps que la réponse secondaire anti-A.",
              "Explication : la réponse primaire anti-A a laissé des LB mémoire spécifiques de A, nombreux et réactifs, qui se différencient rapidement en plasmocytes lors du second contact. Aucune cellule mémoire anti-B n'existait.",
              "Conclusion : la mémoire immunitaire accélère et amplifie la réponse, mais seulement contre l'antigène déjà rencontré : elle est spécifique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici la composition de quatre vaccins. a) Vaccin contre le tétanos : toxine tétanique traitée chimiquement pour perdre sa toxicité, avec un adjuvant. b) Vaccin contre la rougeole : virus vivant d'une souche sélectionnée qui se multiplie très peu et ne provoque pas la maladie chez une personne en bonne santé. c) Vaccin contre l'hépatite B : une protéine de l'enveloppe du virus, produite par des cellules de levure, avec un adjuvant. d) Vaccin à ARN messager contre la covid-19 : ARNm portant l'information de la protéine S (la protéine de spicule du virus), enveloppé dans de minuscules particules de lipides. Pour chacun, nommez le type de vaccin, indiquez l'antigène que le système immunitaire va reconnaître, et expliquez pourquoi le vaccin ne provoque pas la maladie.",
              hint: "Pour chaque vaccin, demandez-vous si l'agent est vivant, inactivé, réduit à une seule molécule, ou remplacé par l'information permettant de fabriquer cette molécule.",
              solution: [
                "a) Anatoxine. L'antigène est la toxine tétanique inactivée, qui garde ses déterminants antigéniques. Elle a perdu sa toxicité : elle ne peut plus agir, mais les anticorps produits neutraliseront la vraie toxine.",
                "b) Vaccin vivant atténué. Les antigènes sont ceux du virus de la rougeole. La souche se multiplie très peu et ne provoque pas la maladie chez une personne dont le système immunitaire fonctionne normalement.",
                "c) Vaccin à protéine purifiée. L'antigène est la protéine d'enveloppe du virus de l'hépatite B. Le vaccin ne contient ni virus entier ni matériel génétique viral : aucune infection n'est possible.",
                "d) Vaccin à ARN messager. Des cellules de la personne vaccinée traduisent l'ARNm et fabriquent pendant peu de temps la protéine S, qui est l'antigène reconnu. Il n'y a pas de virus : une seule protéine est produite, et l'ARNm, qui n'entre pas dans le noyau, est vite dégradé.",
                "Résultat : anatoxine, vivant atténué, protéine purifiée, ARN messager ; tous apportent un antigène du pathogène sans pouvoir provoquer la maladie.",
              ],
            },
            {
              level: 2,
              statement: "Dans un modèle simple, le seuil d'immunité de groupe s, c'est-à-dire la proportion minimale de la population qui doit être immunisée pour que l'agent ne puisse plus se propager, est estimé par la formule s = 1 - 1/R₀, où R₀ est le nombre moyen de personnes qu'un malade contamine dans une population sans aucune immunité. a) Calculez s pour une maladie dont R₀ = 4. b) Pour la rougeole, R₀ est souvent estimé entre 12 et 18 : calculez l'intervalle correspondant pour s. c) Dans une commune (données fictives), 88 % des enfants sont vaccinés contre la rougeole et le vaccin protège 97 % des personnes vaccinées. Quelle proportion des enfants est protégée ? Ce niveau suffit-il à empêcher une épidémie ?",
              hint: "Pour la question c, la proportion d'enfants protégés est le produit de la couverture vaccinale par l'efficacité du vaccin.",
              solution: [
                "a) s = 1 - 1/4 = 1 - 0,25 = 0,75 : 75 % de la population doit être immunisée.",
                "b) Pour R₀ = 12 : s = 1 - 1/12 ≈ 1 - 0,083 = 0,917, soit environ 92 %. Pour R₀ = 18 : s = 1 - 1/18 ≈ 1 - 0,056 = 0,944, soit environ 94 %. Le seuil se situe donc entre 92 % et 94 % environ.",
                "c) Proportion d'enfants protégés : 0,88 × 0,97 = 0,8536, soit environ 85 %.",
                "85 % est inférieur au seuil de 92 % à 94 % : l'immunité de groupe n'est pas atteinte et une épidémie de rougeole reste possible si le virus est introduit.",
                "Résultat : 75 % ; 92 % à 94 % pour la rougeole ; 85 % d'enfants protégés, ce qui est insuffisant. C'est pourquoi on vise une couverture d'environ 95 % : avec un vaccin efficace à 97 %, elle protège 0,95 × 0,97 ≈ 92 % des enfants.",
              ],
            },
            {
              level: 3,
              statement: "Document 1 : en France, le vaccin contre le tétanos est injecté au nourrisson à 2 mois, à 4 mois et à 11 mois, puis des rappels sont prévus pendant l'enfance et à l'âge adulte. Document 2 (données fictives) : concentration d'anticorps anti-toxine tétanique chez un nourrisson, mesurée un mois après chaque injection : après la 1re : 0,05 UI/mL ; après la 2e : 0,3 UI/mL ; après la 3e : 2,5 UI/mL. On retient ici un seuil de protection de 0,1 UI/mL. Document 3 : chez l'animal, une anatoxine tétanique injectée sans adjuvant produit des concentrations d'anticorps bien plus faibles qu'avec un adjuvant. Document 4 : le tétanos ne se transmet pas d'une personne à l'autre ; il est dû à une bactérie présente dans le sol, qui pénètre par une plaie et produit la toxine. Expliquez pourquoi plusieurs injections et des rappels sont nécessaires, le rôle de l'adjuvant, et pourquoi chaque personne doit être vaccinée.",
              hint: "Comparez la concentration après chaque injection au seuil de protection, et rappelez ce que produit chaque nouveau contact avec le même antigène ; pour le document 4, demandez-vous si l'immunité de groupe peut exister.",
              solution: [
                "Document 2 : après la 1re injection, la concentration (0,05 UI/mL) reste sous le seuil de 0,1 UI/mL : la réponse primaire est faible et l'enfant n'est pas encore protégé.",
                "Après la 2e injection, elle atteint 0,3 UI/mL, soit 6 fois plus (0,3 ÷ 0,05), au-dessus du seuil ; après la 3e, 2,5 UI/mL, soit environ 8 fois plus encore (2,5 ÷ 0,3 ≈ 8,3). Chaque injection déclenche une réponse de type secondaire, plus rapide et plus intense, grâce aux LB mémoire formés lors des injections précédentes.",
                "Les rappels sont nécessaires car la concentration d'anticorps diminue avec le temps ; chaque rappel réactive les cellules mémoire et remonte le niveau de protection.",
                "Document 3 : l'adjuvant déclenche une réaction inflammatoire locale qui active les cellules dendritiques ; celles-ci présentent efficacement l'antigène aux lymphocytes dans les ganglions, ce qui permet une réponse adaptative forte. Sans adjuvant, l'anatoxine seule stimule mal le système immunitaire.",
                "Document 4 : le tétanos ne se transmet pas entre personnes ; la vaccination de l'entourage ne protège donc pas un individu non vacciné : il n'existe pas d'immunité de groupe contre le tétanos.",
                "Conclusion : plusieurs injections construisent une mémoire solide, les rappels l'entretiennent, l'adjuvant rend l'anatoxine efficace, et chaque personne doit être vaccinée elle-même, car seule sa propre immunité la protège du tétanos.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur la vaccination.",
            statements: [
              { text: "Un vaccin contient toujours l'agent pathogène vivant.", true: false, why: "Seuls les vaccins atténués contiennent un agent vivant ; d'autres contiennent un agent inactivé, une anatoxine, une protéine ou un ARN messager." },
              { text: "La réponse secondaire est plus rapide et plus intense que la réponse primaire.", true: true, why: "Les lymphocytes mémoire, nombreux et réactifs, permettent une réponse rapide et forte lors d'un second contact." },
              { text: "Être vacciné contre la rougeole protège aussi contre la grippe.", true: false, why: "La mémoire immunitaire est spécifique : elle ne protège que contre l'antigène du vaccin." },
              { text: "Un vaccin à ARN messager modifie l'ADN des cellules de la personne vaccinée.", true: false, why: "L'ARNm reste dans le cytoplasme, où il est traduit puis rapidement dégradé ; il n'entre pas dans le noyau et ne s'intègre pas à l'ADN." },
              { text: "Une couverture vaccinale élevée protège aussi des personnes non vaccinées.", true: true, why: "C'est l'immunité de groupe : l'agent pathogène circule peu, ce qui protège ceux qui ne peuvent pas être vaccinés." },
              { text: "L'adjuvant d'un vaccin sert à déclencher une réaction innée qui favorise la réponse adaptative.", true: true, why: "La réaction inflammatoire locale active les cellules dendritiques, qui présentent ensuite l'antigène aux lymphocytes." },
              { text: "Les anticorps transmis par la mère protègent l'enfant toute sa vie.", true: false, why: "Ces anticorps ne sont pas produits par l'enfant : ils disparaissent en quelques mois, d'où les vaccinations du nourrisson." },
            ],
          },
          quiz: [
            {
              q: "Ce qui rend la réponse secondaire plus rapide que la réponse primaire, c'est :",
              options: ["la présence d'anticorps maternels", "une inflammation plus forte au point d'entrée", "la mutation de l'antigène entre les deux contacts", "l'existence de lymphocytes mémoire"],
              answer: 3,
              why: "Les lymphocytes mémoire formés lors du premier contact sont plus nombreux et plus réactifs que les lymphocytes naïfs.",
            },
            {
              q: "Une anatoxine est :",
              options: ["un virus vivant atténué", "une toxine rendue inoffensive", "un anticorps dirigé contre une toxine", "un adjuvant à base d'aluminium"],
              answer: 1,
              why: "Une anatoxine est une toxine inactivée qui a perdu sa toxicité mais garde ses déterminants antigéniques, comme dans les vaccins contre le tétanos et la diphtérie.",
            },
            {
              q: "Le rôle principal d'un adjuvant dans un vaccin est de :",
              options: ["déclencher une réaction innée", "tuer l'agent pathogène contenu dans le vaccin", "remplacer les antigènes du pathogène", "apporter directement des anticorps au vacciné"],
              answer: 0,
              why: "L'adjuvant provoque une réaction inflammatoire locale qui active les cellules dendritiques, indispensable pour lancer une réponse adaptative efficace.",
            },
            {
              q: "L'immunité de groupe permet :",
              options: ["de guérir les personnes déjà malades", "de rendre inutile tout rappel de vaccin", "de protéger des personnes non vaccinées", "de remplacer les anticorps par des lymphocytes"],
              answer: 2,
              why: "Quand une proportion suffisante de la population est immunisée, l'agent circule peu et les personnes non vaccinées sont moins exposées.",
            },
            {
              q: "En quelle année l'OMS a-t-elle déclaré la variole éradiquée ?",
              options: ["1796", "1980", "1885", "2018"],
              answer: 1,
              why: "La variole a été déclarée éradiquée en 1980, après une campagne mondiale de vaccination ; 1796 est l'année de l'inoculation de la vaccine par Jenner.",
            },
          ],
          trap: "Croire qu'un vaccin agit comme un médicament qui soigne : il prépare l'organisme avant l'infection en créant des cellules mémoire. Autre erreur : penser que la mémoire est générale, alors qu'elle est spécifique de l'antigène du vaccin.",
          method: "Devant une courbe de concentration d'anticorps, comparez toujours trois critères entre les deux réponses : le délai d'apparition, la valeur maximale et la durée. Chiffrez chacun (par exemple « dix fois plus ») avant de conclure à une réponse secondaire.",
        },
      ],
    },
  ],
}
