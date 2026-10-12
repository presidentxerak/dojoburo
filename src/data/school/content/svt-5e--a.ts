import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-5e',
  chapters: [
    /* ==================================================================== */
    /* RESPIRER DANS DIFFÉRENTS MILIEUX                                     */
    /* ==================================================================== */
    {
      id: 'respiration-milieux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'respiration-etres-vivants',
          title: 'Tous les êtres vivants respirent',
          minutes: 25,
          objectives: [
            "Définir la respiration comme une absorption de dioxygène et un rejet de dioxyde de carbone.",
            "Mettre en évidence les échanges gazeux respiratoires avec l'eau de chaux ou une sonde à dioxygène.",
            "Relier la respiration d'un organisme aux besoins en dioxygène de ses cellules.",
            "Concevoir une expérience avec un témoin pour montrer qu'un être vivant respire.",
          ],
          course: [
            {
              heading: "Respirer, c'est échanger des gaz avec son milieu",
              paragraphs: [
                "Quand vous respirez, vous ne faites pas que gonfler et vider vos poumons. Vous prélevez dans l'air un gaz, le dioxygène, et vous rejetez un autre gaz, le dioxyde de carbone. Ces échanges de gaz entre un être vivant et son milieu de vie s'appellent les échanges gazeux respiratoires.",
                "L'air que nous respirons est un mélange de gaz. Il contient environ 78 % de diazote, 21 % de dioxygène et seulement 0,04 % de dioxyde de carbone. L'air que vous rejetez contient moins de dioxygène (environ 16 %) et beaucoup plus de dioxyde de carbone (environ 4 %). Le diazote, lui, n'est pas utilisé par l'organisme.",
              ],
              box: { label: "Définition", text: "La respiration est l'ensemble des échanges gazeux entre un être vivant et son milieu : il absorbe du dioxygène (O₂) et rejette du dioxyde de carbone (CO₂)." },
            },
            {
              heading: "Comment montrer qu'un être vivant respire ?",
              paragraphs: [
                "L'eau de chaux est un liquide limpide qui se trouble (elle devient blanchâtre) en présence de dioxyde de carbone. Si l'on place des petits animaux (des grillons, des escargots, des lombrics) dans un bocal fermé avec un petit pot d'eau de chaux, celle-ci se trouble au bout de quelque temps : les animaux ont rejeté du dioxyde de carbone.",
                "Pour suivre le dioxygène, on utilise une sonde à dioxygène reliée à un ordinateur (on parle d'expérimentation assistée par ordinateur, ou ExAO). Elle mesure la quantité de dioxygène dans l'air ou dans l'eau d'un récipient, minute après minute. Si un être vivant respire dans un récipient fermé, la courbe obtenue descend : le dioxygène est consommé.",
                "Pour être sûr que c'est bien l'être vivant qui est responsable du résultat, on réalise une expérience témoin : le même montage, dans les mêmes conditions, mais sans l'être vivant. Dans le témoin, l'eau de chaux reste limpide et la quantité de dioxygène ne change pas. Une seule chose diffère entre les deux montages : la présence de l'être vivant.",
              ],
              box: { label: "Repère", text: "L'eau de chaux se trouble en présence de dioxyde de carbone. Une sonde à dioxygène mesure la quantité de dioxygène. Une expérience se compare toujours à un témoin qui n'en diffère que par un seul élément." },
            },
            {
              heading: "Tous les êtres vivants, dans tous les milieux",
              paragraphs: [
                "Les animaux respirent, mais aussi les végétaux, les champignons et la plupart des micro-organismes. Par exemple, la levure de boulanger, un champignon microscopique, consomme du dioxygène et rejette du dioxyde de carbone. Il existe quelques exceptions : certains micro-organismes, comme certaines bactéries, vivent sans dioxygène.",
                "Les êtres vivants respirent dans tous les milieux. Dans un milieu aérien, ils prélèvent le dioxygène de l'air. Dans un milieu aquatique, ils prélèvent le dioxygène dissous dans l'eau : de petites quantités de dioxygène sont mélangées à l'eau, un peu comme le sucre dissous dans un thé. Un poisson ne « respire » donc pas l'eau elle-même, mais le dioxygène qu'elle contient.",
              ],
            },
            {
              heading: "Pourquoi respirer ? Les besoins des cellules",
              paragraphs: [
                "Tout être vivant est formé de cellules : une seule pour la levure, des dizaines de milliers de milliards pour vous. Pour vivre, bouger, grandir ou se réparer, chaque cellule a besoin d'énergie. Elle tire cette énergie de nutriments, comme le glucose (un sucre), qu'elle utilise grâce au dioxygène. Cette transformation produit du dioxyde de carbone, un déchet que la cellule rejette.",
                "On peut comparer la cellule à un feu de cheminée : le bois brûle grâce au dioxygène de l'air, dégage de l'énergie (de la chaleur) et produit du dioxyde de carbone. Dans la cellule, la transformation est beaucoup plus lente et sans flamme, mais le principe est proche : nutriments et dioxygène sont consommés, de l'énergie est libérée, du dioxyde de carbone est produit.",
                "La respiration de l'organisme répond donc aux besoins de ses cellules : l'organisme prélève dans son milieu le dioxygène dont ses cellules ont besoin, et il rejette dans le milieu le dioxyde de carbone qu'elles produisent.",
              ],
              box: { label: "À retenir", text: "Les cellules utilisent des nutriments et du dioxygène pour produire l'énergie nécessaire à leur fonctionnement, et rejettent du dioxyde de carbone. La respiration de l'organisme répond à ces besoins." },
            },
          ],
          keyPoints: [
            "Respirer, c'est absorber du dioxygène (O₂) et rejeter du dioxyde de carbone (CO₂).",
            "L'eau de chaux se trouble en présence de dioxyde de carbone.",
            "Une sonde à dioxygène montre que le dioxygène diminue autour d'un être vivant qui respire dans un récipient fermé.",
            "On compare toujours avec une expérience témoin, identique mais sans l'être vivant.",
            "Presque tous les êtres vivants respirent : animaux, végétaux, champignons, la plupart des micro-organismes.",
            "Dans l'eau, les êtres vivants utilisent le dioxygène dissous.",
            "Les cellules ont besoin de dioxygène pour tirer l'énergie des nutriments ; elles rejettent du dioxyde de carbone.",
          ],
          example: {
            statement: "Une élève place 20 lombrics (vers de terre) sur du papier humide, dans un bocal fermé contenant un petit pot d'eau de chaux (bocal A). Elle prépare un bocal B identique, avec le même papier humide mais sans lombric. Au bout de deux heures, l'eau de chaux du bocal A est trouble, celle du bocal B est restée limpide. Que peut-on conclure ?",
            solution: [
              "J'identifie le rôle de chaque bocal : le bocal B est le témoin ; il ne diffère du bocal A que par l'absence de lombrics.",
              "Je rappelle le test : l'eau de chaux se trouble en présence de dioxyde de carbone.",
              "J'interprète : dans le bocal A, du dioxyde de carbone a été rejeté ; dans le bocal B, il n'y en a pas eu assez pour troubler l'eau de chaux.",
              "Je compare : la seule différence entre les deux bocaux est la présence des lombrics, ce sont donc eux qui ont rejeté ce gaz.",
              "Conclusion : les lombrics rejettent du dioxyde de carbone ; c'est l'un des signes qu'ils respirent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez les phrases avec les mots suivants : dioxygène, dioxyde de carbone, eau de chaux, témoin. a) Lors de la respiration, un être vivant absorbe du ... et rejette du .... b) L'... se trouble en présence de dioxyde de carbone. c) Une expérience ... est identique à l'expérience testée, sauf sur un seul point.",
              hint: "Le gaz rejeté est celui qui trouble l'eau de chaux.",
              solution: [
                "a) Lors de la respiration, un être vivant absorbe du dioxygène et rejette du dioxyde de carbone.",
                "b) L'eau de chaux se trouble en présence de dioxyde de carbone.",
                "c) Une expérience témoin est identique à l'expérience testée, sauf sur un seul point.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On place un grillon dans un flacon fermé de 1 litre, équipé d'une sonde à dioxygène et d'une sonde à dioxyde de carbone. Au départ, l'air du flacon contient 20,9 % de dioxygène et 0,04 % de dioxyde de carbone. Après 40 minutes, il contient 20,1 % de dioxygène et 0,8 % de dioxyde de carbone. 1) Calculez la variation de chaque gaz. 2) Interprétez ces résultats. 3) Pourquoi ne faut-il pas laisser le grillon trop longtemps dans le flacon ?",
              hint: "Pour une variation, faites toujours le calcul « valeur finale moins valeur de départ ».",
              solution: [
                "1) Dioxygène : 20,1 - 20,9 = -0,8. Le dioxygène a diminué de 0,8 point.",
                "Dioxyde de carbone : 0,8 - 0,04 = 0,76. Le dioxyde de carbone a augmenté de 0,76 point.",
                "2) Le grillon a consommé du dioxygène et rejeté du dioxyde de carbone : il respire.",
                "3) Dans un flacon fermé, le dioxygène continuerait à diminuer et le dioxyde de carbone à s'accumuler : le grillon finirait par s'asphyxier.",
                "Par respect pour l'animal, on limite la durée de l'expérience, puis on le relâche dans son milieu.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Dans le flacon A, on met de l'eau sucrée et de la levure de boulanger. Dans le flacon B, uniquement la même eau sucrée. Les deux flacons sont fermés, à 30 °C, et une sonde mesure le dioxygène dissous dans l'eau, en mg/L. Flacon A : 7,5 au départ, 4,5 après 5 min, 1,5 après 10 min. Flacon B : 7,5 au départ, 7,5 après 5 min, 7,5 après 10 min. 1) Quel est le rôle du flacon B ? 2) Calculez la quantité de dioxygène consommée en 10 minutes dans le flacon A, puis la consommation moyenne par minute. 3) Que pouvez-vous conclure sur la levure ? 4) Proposez une expérience complémentaire pour montrer que la levure rejette aussi du dioxyde de carbone.",
              hint: "Pour la question 4, pensez au réactif qui détecte le dioxyde de carbone, et n'oubliez pas le témoin.",
              solution: [
                "1) Le flacon B est le témoin : il ne diffère du flacon A que par l'absence de levure. Il montre que l'eau sucrée seule ne fait pas varier le dioxygène.",
                "2) Dioxygène consommé : 7,5 - 1,5 = 6,0 mg/L en 10 minutes.",
                "Consommation moyenne : 6,0 ÷ 10 = 0,6 mg/L par minute.",
                "3) Le dioxygène ne diminue qu'en présence de levure : la levure consomme du dioxygène. Bien qu'elle soit microscopique, c'est un être vivant (un champignon) qui respire.",
                "4) On relie chaque flacon à un tube contenant de l'eau de chaux (ou l'on place un pot d'eau de chaux dans chaque flacon fermé). Le flacon sans levure sert de témoin.",
                "Résultat attendu : l'eau de chaux se trouble seulement avec le flacon A. La levure rejette donc du dioxyde de carbone.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur la respiration.",
            statements: [
              { text: "Seuls les animaux respirent.", true: false, why: "Les végétaux, les champignons et la plupart des micro-organismes respirent aussi." },
              { text: "Un poisson utilise le dioxygène dissous dans l'eau.", true: true, why: "L'eau contient un peu de dioxygène dissous : c'est lui que le poisson prélève, pas l'eau elle-même." },
              { text: "L'eau de chaux se trouble en présence de dioxygène.", true: false, why: "Elle se trouble en présence de dioxyde de carbone." },
              { text: "L'air que nous rejetons contient encore du dioxygène.", true: true, why: "Il en contient environ 16 % : nous n'utilisons qu'une partie du dioxygène inspiré." },
              { text: "Le dioxyde de carbone est un déchet produit par les cellules.", true: true, why: "Les cellules le produisent en utilisant les nutriments et le dioxygène." },
              { text: "Une expérience témoin diffère de l'expérience testée par plusieurs éléments.", true: false, why: "Un seul élément doit changer, sinon on ne saurait pas lequel explique le résultat." },
              { text: "Respirer, c'est seulement faire entrer et sortir de l'air des poumons.", true: false, why: "C'est avant tout un échange de gaz ; beaucoup d'êtres vivants respirent sans avoir de poumons." },
            ],
          },
          quiz: [
            {
              q: "Quel gaz un être vivant absorbe-t-il en respirant ?",
              options: ["Le diazote", "Le dioxyde de carbone", "Le dioxygène", "La vapeur d'eau"],
              answer: 2,
              why: "La respiration consiste à absorber du dioxygène et à rejeter du dioxyde de carbone.",
            },
            {
              q: "Quel test met en évidence le dioxyde de carbone ?",
              options: ["Le trouble d'une eau iodée", "Le trouble de l'eau de chaux", "Le bleuissement de l'eau de chaux"],
              answer: 1,
              why: "L'eau de chaux, limpide au départ, se trouble en présence de dioxyde de carbone.",
            },
            {
              q: "D'où vient le dioxygène utilisé par un poisson ?",
              options: ["Du dioxygène dissous dans l'eau", "Des bulles d'air qu'il avale à la surface", "Des molécules d'eau qu'il décompose", "Il n'utilise pas de dioxygène"],
              answer: 0,
              why: "L'eau contient du dioxygène dissous, en petite quantité ; le poisson le prélève avec ses branchies.",
            },
            {
              q: "Pour montrer que des escargots respirent, quel est le bon témoin ?",
              options: ["Le même montage avec deux fois plus d'escargots", "Un montage différent, avec des grillons", "Le même montage placé dans le noir", "Le même montage sans escargot"],
              answer: 3,
              why: "Le témoin ne doit différer que par un seul élément : ici, la présence des escargots.",
            },
            {
              q: "Pourquoi les cellules ont-elles besoin de dioxygène ?",
              options: ["Pour fabriquer du diazote", "Pour libérer l'énergie des nutriments", "Pour stocker le dioxyde de carbone", "Pour remplacer toute l'eau qu'elles perdent"],
              answer: 1,
              why: "Les cellules utilisent le dioxygène pour tirer de l'énergie des nutriments, comme le glucose, en rejetant du dioxyde de carbone.",
            },
          ],
          trap: "Croire que respirer se résume à faire entrer et sortir de l'air des poumons. La respiration est un échange de gaz (dioxygène absorbé, dioxyde de carbone rejeté) qui concerne presque tous les êtres vivants, même ceux qui n'ont pas de poumons.",
          method: "Pour interpréter une expérience, procédez toujours en trois temps : repérez le témoin et la seule différence avec l'expérience testée, décrivez le résultat de chaque montage, puis concluez en attribuant la différence de résultat à cette seule différence.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'organes-respiratoires',
          title: 'Poumons, branchies, trachées : respirer dans l\'air ou dans l\'eau',
          minutes: 30,
          objectives: [
            "Identifier les organes respiratoires de quelques animaux : poumons, branchies, trachées, peau.",
            "Relier chaque organe respiratoire au milieu de vie de l'animal, aérien ou aquatique.",
            "Dégager les caractéristiques communes des surfaces d'échanges respiratoires : grande surface, paroi fine, renouvellement du milieu.",
            "Exploiter des données sur la quantité de dioxygène dans l'air et dans l'eau.",
          ],
          course: [
            {
              heading: "L'air et l'eau, deux milieux très différents",
              paragraphs: [
                "Un litre d'air contient environ 210 mL de dioxygène. Un litre d'eau douce à 20 °C n'en contient qu'environ 6 à 7 mL, soit environ trente fois moins. Les animaux aquatiques doivent donc faire circuler beaucoup d'eau au contact de leurs organes respiratoires pour obtenir assez de dioxygène.",
                "La quantité de dioxygène dissous dépend aussi de la température : plus l'eau est chaude, moins elle contient de dioxygène. Une eau à 0 °C peut contenir environ 14,6 mg de dioxygène par litre, une eau à 20 °C environ 9 mg et une eau à 30 °C environ 7,6 mg. C'est pourquoi les poissons souffrent quand l'eau des rivières se réchauffe en été.",
              ],
              box: { label: "Repère", text: "L'eau contient beaucoup moins de dioxygène que l'air, et d'autant moins qu'elle est chaude." },
            },
            {
              heading: "Respirer dans l'air : poumons et trachées",
              paragraphs: [
                "Les mammifères, les oiseaux, les reptiles et les amphibiens adultes respirent avec des poumons, des organes creux situés dans la cage thoracique. L'air y entre et en sort grâce aux mouvements respiratoires : c'est la ventilation. Chez les mammifères comme l'être humain, l'air arrive dans des millions de petits sacs, les alvéoles pulmonaires, dont la paroi très fine est entourée de vaisseaux sanguins.",
                "Le dauphin et la baleine vivent dans l'eau, mais ce sont des mammifères : ils respirent avec des poumons et remontent régulièrement à la surface pour respirer l'air. Ils n'ont pas de branchies.",
                "Les insectes n'ont pas de poumons. Leur corps est parcouru par un réseau de tubes très fins et ramifiés, les trachées, qui s'ouvrent à l'extérieur par de petits orifices placés sur les côtés du corps : les stigmates. L'air entre par les stigmates et circule dans les trachées jusqu'au contact des cellules. Chez les insectes, le sang ne transporte presque pas de dioxygène.",
              ],
            },
            {
              heading: "Respirer dans l'eau : les branchies",
              paragraphs: [
                "Les poissons respirent avec des branchies, situées de chaque côté de la tête, sous des couvercles appelés opercules. Le poisson ouvre la bouche, l'eau entre, traverse les branchies, puis ressort sous les opercules, par les ouïes. Ce courant d'eau, toujours dans le même sens, renouvelle en permanence l'eau au contact des branchies.",
                "Chaque branchie porte de nombreuses lamelles très fines, d'un rouge vif dû au sang qui y circule. Le dioxygène dissous dans l'eau passe dans le sang et le dioxyde de carbone passe du sang dans l'eau. Hors de l'eau, les lamelles se collent les unes aux autres : la surface d'échange s'effondre et le poisson s'asphyxie, alors que l'air contient pourtant beaucoup de dioxygène.",
                "D'autres animaux aquatiques ont des branchies : les crustacés (crabes, crevettes), de nombreux mollusques (moules, huîtres) et les têtards. La grenouille change d'organes en se développant : le têtard respire avec des branchies, la grenouille adulte avec des poumons et avec sa peau.",
              ],
            },
            {
              heading: "La peau, et les points communs des surfaces respiratoires",
              paragraphs: [
                "Le ver de terre (lombric) n'a ni poumons, ni branchies, ni trachées : il respire par toute la surface de sa peau, qui doit rester humide. C'est la respiration cutanée. La grenouille respire aussi en partie par sa peau, fine et humide.",
                "Quel que soit l'organe, les surfaces d'échanges respiratoires ont des points communs : une très grande surface (lamelles des branchies, alvéoles des poumons, ramifications des trachées), une paroi très fine, souvent humide, et un renouvellement permanent de l'air ou de l'eau à leur contact. Le plus souvent, elles sont aussi parcourues par de nombreux vaisseaux sanguins.",
              ],
              box: { label: "À retenir", text: "Un organe respiratoire est une surface d'échange entre le milieu et l'organisme. Il est efficace grâce à une grande surface, une paroi fine et un renouvellement permanent du milieu à son contact." },
            },
          ],
          keyPoints: [
            "L'eau contient environ trente fois moins de dioxygène que l'air, et encore moins quand elle est chaude.",
            "Poumons : mammifères, oiseaux, reptiles, amphibiens adultes ; ils respirent l'air, même le dauphin et la baleine.",
            "Trachées : tubes ramifiés ouverts par des stigmates ; l'air arrive directement près des cellules des insectes.",
            "Branchies : poissons, crustacés, nombreux mollusques, têtards ; elles prélèvent le dioxygène dissous dans l'eau.",
            "Peau : le lombric respire par sa peau humide (respiration cutanée).",
            "Toute surface respiratoire est grande, fine et renouvelée en permanence par l'air ou l'eau.",
          ],
          example: {
            statement: "Un poisson rouge sorti de son bocal meurt asphyxié en quelques minutes, alors que l'air contient bien plus de dioxygène que l'eau. Expliquez ce paradoxe.",
            solution: [
              "Je rappelle l'organe respiratoire du poisson : les branchies, formées de lamelles très fines et très nombreuses.",
              "Dans l'eau, les lamelles sont écartées les unes des autres : l'eau circule entre elles et la surface d'échange est très grande.",
              "Hors de l'eau, rien ne soutient les lamelles : elles se collent les unes aux autres et se dessèchent. La surface d'échange devient très petite.",
              "Le dioxygène de l'air ne peut donc presque plus passer dans le sang.",
              "Conclusion : le poisson s'asphyxie, non par manque de dioxygène dans le milieu, mais parce que ses branchies ne fonctionnent que dans l'eau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque animal, indiquez son organe respiratoire et son milieu de vie : la truite, le criquet, le chat, la moule, le lombric, le dauphin.",
              hint: "Méfiez-vous des animaux qui vivent dans l'eau : certains remontent respirer à la surface.",
              solution: [
                "La truite : branchies, milieu aquatique.",
                "Le criquet : trachées, milieu aérien.",
                "Le chat : poumons, milieu aérien.",
                "La moule : branchies, milieu aquatique.",
                "Le lombric : peau, dans le sol humide (il respire l'air du sol).",
                "Le dauphin : poumons ; il vit dans l'eau mais respire l'air à la surface.",
              ],
            },
            {
              level: 2,
              statement: "Voici la quantité maximale de dioxygène dissous dans un litre d'eau douce selon la température (valeurs arrondies) : à 0 °C, 14,6 mg ; à 10 °C, 11,3 mg ; à 20 °C, 9,1 mg ; à 30 °C, 7,6 mg. 1) Décrivez l'évolution de la quantité de dioxygène avec la température. 2) Calculez la perte de dioxygène entre 10 °C et 30 °C. 3) Un pêcheur remarque qu'en août, pendant une canicule, les truites d'une rivière se regroupent près des cascades et des zones où l'eau est agitée. Proposez une explication.",
              hint: "Une eau agitée, qui tombe ou qui bouillonne, se mélange beaucoup avec l'air.",
              solution: [
                "1) Plus la température de l'eau augmente, plus la quantité de dioxygène dissous diminue.",
                "2) 11,3 - 7,6 = 3,7. Entre 10 °C et 30 °C, l'eau perd 3,7 mg de dioxygène par litre.",
                "3) Pendant une canicule, l'eau se réchauffe : elle contient moins de dioxygène, et les truites risquent d'en manquer.",
                "Dans une cascade, l'eau est brassée avec l'air : elle s'enrichit en dioxygène.",
                "Conclusion : les truites se regroupent là où l'eau contient le plus de dioxygène.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données simplifiées. 1) Les branchies d'un petit poisson offrent une surface d'échange totale de 50 cm². Si elles formaient une simple plaque lisse, cette surface ne serait que de 2 cm². Combien de fois les lamelles multiplient-elles la surface ? 2) Chez l'être humain, la surface des alvéoles pulmonaires est de l'ordre de 100 m², alors que celle de la peau est d'environ 2 m². Combien de fois la surface des alvéoles est-elle plus grande que celle de la peau ? 3) À l'aide de ces résultats et du cours, expliquez pourquoi un insecte, un poisson et un être humain, si différents, respirent tous efficacement.",
              hint: "Pour savoir combien de fois une grandeur est plus grande qu'une autre, on divise la plus grande par la plus petite.",
              solution: [
                "1) 50 ÷ 2 = 25 : les lamelles multiplient la surface par 25.",
                "2) 100 ÷ 2 = 50 : la surface des alvéoles est environ 50 fois plus grande que celle de la peau.",
                "3) Les trois animaux ont des organes respiratoires différents (trachées, branchies, poumons), adaptés à leur milieu.",
                "Mais ces organes ont les mêmes caractéristiques : une très grande surface d'échange (ramifications, lamelles, alvéoles), une paroi très fine et un renouvellement permanent de l'air ou de l'eau.",
                "Conclusion : ce sont ces caractéristiques communes qui rendent les échanges de gaz efficaces, quel que soit l'organe.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa description.",
            pairs: [
              { left: "Branchies", right: "Lamelles fines baignées par l'eau, chez la truite" },
              { left: "Poumons", right: "Organes creux remplis d'air, chez le chat" },
              { left: "Trachées", right: "Tubes ramifiés qui conduisent l'air aux cellules d'un insecte" },
              { left: "Peau", right: "Surface humide qui permet au lombric de respirer" },
              { left: "Stigmates", right: "Petits orifices sur les côtés du corps d'un insecte" },
              { left: "Opercules", right: "Couvercles qui protègent les branchies du poisson" },
            ],
          },
          quiz: [
            {
              q: "Par quoi un criquet respire-t-il ?",
              options: ["Par des trachées", "Par des poumons", "Par des branchies"],
              answer: 0,
              why: "Les insectes respirent par des trachées, des tubes ramifiés qui s'ouvrent à l'extérieur par les stigmates.",
            },
            {
              q: "Pourquoi un poisson s'asphyxie-t-il hors de l'eau ?",
              options: ["L'air contient moins de dioxygène que l'eau", "Ses poumons se remplissent d'eau", "Ses lamelles se collent entre elles", "Il ne peut plus avaler sa nourriture"],
              answer: 2,
              why: "Hors de l'eau, les lamelles des branchies se collent : la surface d'échange devient trop petite.",
            },
            {
              q: "Le dauphin vit dans l'eau. Par quoi respire-t-il ?",
              options: ["Par des branchies", "Par des poumons", "Par sa peau uniquement", "Par des trachées"],
              answer: 1,
              why: "Le dauphin est un mammifère : il respire avec des poumons et remonte à la surface pour prendre de l'air.",
            },
            {
              q: "Quelle eau contient le plus de dioxygène dissous ?",
              options: ["Une eau stagnante à 30 °C", "Une eau à 25 °C", "Une eau à 20 °C", "Une eau à 5 °C"],
              answer: 3,
              why: "Plus l'eau est froide, plus elle peut contenir de dioxygène dissous.",
            },
            {
              q: "Quel point commun ont toutes les surfaces respiratoires ?",
              options: ["Elles sont toujours situées dans la tête", "Elles sont épaisses et sèches", "Elles sont fines et très étendues", "Elles ne sont jamais au contact du milieu"],
              answer: 2,
              why: "Une grande surface et une paroi fine facilitent le passage des gaz entre le milieu et l'organisme.",
            },
          ],
          trap: "Croire que tous les animaux aquatiques respirent avec des branchies, ou qu'un poisson « respire l'eau ». Le dauphin et la baleine ont des poumons et respirent l'air à la surface, et le poisson utilise le dioxygène dissous dans l'eau, pas l'eau elle-même.",
          method: "Construisez un tableau à trois colonnes (animal, milieu de vie, organe respiratoire) et remplissez-le avec un exemple pour chaque organe : vous verrez d'un coup d'œil le lien entre milieu et organe, ainsi que les exceptions comme le dauphin.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'respiration-vegetaux',
          title: 'La respiration des végétaux',
          minutes: 25,
          objectives: [
            "Montrer, par une expérience avec témoin, que les végétaux respirent comme les animaux.",
            "Identifier les organes d'une plante qui respirent : racines, tiges, feuilles, fleurs, fruits et graines.",
            "Expliquer pourquoi la respiration d'une plante verte ne se mesure bien qu'à l'obscurité.",
            "Relier la respiration des racines à l'aération du sol.",
          ],
          course: [
            {
              heading: "Les plantes respirent aussi",
              paragraphs: [
                "Comme les animaux, les végétaux sont formés de cellules qui ont besoin d'énergie. Ils respirent donc : ils absorbent du dioxygène et rejettent du dioxyde de carbone. Cette respiration a lieu jour et nuit, sans arrêt, dans toutes les cellules vivantes de la plante.",
                "On peut le montrer avec des graines en germination (des haricots ou des lentilles mis à tremper). Placées dans un bocal fermé avec un pot d'eau de chaux, elles font troubler l'eau de chaux en quelques heures. Dans un bocal témoin contenant des graines bouillies, donc mortes, l'eau de chaux reste limpide. Une sonde à dioxygène montre aussi que les graines vivantes consomment du dioxygène.",
              ],
              box: { label: "À retenir", text: "Les végétaux respirent jour et nuit, dans toutes leurs cellules vivantes : ils absorbent du dioxygène et rejettent du dioxyde de carbone." },
            },
            {
              heading: "Tous les organes respirent",
              paragraphs: [
                "Les feuilles, les tiges, les fleurs, les fruits, les graines et les racines respirent. Les gaz entrent dans les feuilles et en sortent surtout par de minuscules orifices, visibles seulement au microscope et situés principalement sur la face inférieure : les stomates.",
                "Les racines respirent le dioxygène de l'air contenu dans le sol, entre les grains de terre. Si un sol reste gorgé d'eau (pot sans trou, arrosage excessif), l'air en est chassé : les racines manquent de dioxygène, elles pourrissent et la plante dépérit. C'est pour cela que l'on bêche la terre d'un jardin et que les pots de fleurs sont percés au fond.",
                "Les fruits et les légumes continuent à respirer après la récolte. Une pomme ou une salade placée au réfrigérateur respire plus lentement, ce qui l'aide à se conserver plus longtemps.",
              ],
              box: { label: "Définition", text: "Les stomates sont de minuscules orifices de l'épiderme des feuilles, surtout sur leur face inférieure. Les gaz entrent et sortent de la feuille par les stomates." },
            },
            {
              heading: "À la lumière, la respiration est masquée",
              paragraphs: [
                "Une plante verte placée à l'obscurité dans une enceinte fermée se comporte comme un animal : elle consomme du dioxygène et rejette du dioxyde de carbone. Mais à la lumière, ses parties vertes réalisent en même temps d'autres échanges, en sens inverse : elles absorbent du dioxyde de carbone et rejettent du dioxygène. Ces échanges servent à fabriquer la matière de la plante, et vous les étudierez dans le chapitre suivant.",
                "À la lumière, ces échanges sont plus importants que ceux de la respiration et la masquent. La respiration ne s'arrête pas pour autant : elle continue, mais les mesures ne la montrent plus. C'est pourquoi on étudie la respiration d'une plante verte à l'obscurité, ou avec des organes qui ne sont pas verts, comme les racines, les graines ou les fleurs.",
              ],
              box: { label: "Repère", text: "À l'obscurité : la plante verte absorbe du dioxygène et rejette du dioxyde de carbone (respiration seule). À la lumière : elle rejette surtout du dioxygène, car d'autres échanges masquent sa respiration, qui continue." },
            },
          ],
          keyPoints: [
            "Les végétaux respirent, comme les animaux : ils absorbent du dioxygène et rejettent du dioxyde de carbone.",
            "La respiration a lieu jour et nuit, dans tous les organes vivants : racines, tiges, feuilles, fleurs, fruits, graines.",
            "Les gaz entrent et sortent des feuilles par les stomates.",
            "Les racines respirent l'air du sol : un sol gorgé d'eau les asphyxie.",
            "À la lumière, la respiration des parties vertes est masquée par d'autres échanges, mais elle continue.",
            "Pour étudier la respiration d'une plante verte, on travaille à l'obscurité ou avec des organes non verts.",
          ],
          example: {
            statement: "Données fictives. Une plante en pot est placée sous une cloche fermée avec une sonde à dioxygène. Pendant 30 minutes à la lumière, le dioxygène passe de 20,9 % à 21,3 %. Puis, pendant 30 minutes à l'obscurité, il passe de 21,3 % à 20,8 %. Peut-on dire que la plante respire seulement à l'obscurité ?",
            solution: [
              "À la lumière, le dioxygène augmente de 0,4 point (21,3 - 20,9 = 0,4) : la plante en rejette plus qu'elle n'en consomme.",
              "À l'obscurité, il diminue de 0,5 point (21,3 - 20,8 = 0,5) : la plante consomme du dioxygène, elle respire.",
              "Je rappelle le cours : la respiration a lieu dans toutes les cellules vivantes, jour et nuit. À la lumière, elle est masquée par les échanges liés à la fabrication de la matière, qui rejettent beaucoup de dioxygène.",
              "Conclusion : non, la plante respire aussi à la lumière ; c'est seulement à l'obscurité que la mesure montre sa respiration seule.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque proposition, dites si elle est vraie ou fausse, et corrigez celles qui sont fausses. a) Une graine en germination respire. b) Les racines n'ont pas besoin de dioxygène. c) Une plante respire seulement la nuit. d) Les gaz entrent et sortent des feuilles par les stomates.",
              hint: "Rappelez-vous que toutes les cellules vivantes d'une plante respirent, à tout moment.",
              solution: [
                "a) Vrai : une graine en germination est vivante, elle respire.",
                "b) Faux : les racines respirent le dioxygène de l'air du sol.",
                "c) Faux : une plante respire jour et nuit ; à la lumière, sa respiration est seulement masquée.",
                "d) Vrai.",
              ],
            },
            {
              level: 2,
              statement: "Un élève place 50 g de petits pois en germination dans un bocal A, et 50 g de petits pois bouillis puis refroidis dans un bocal B. Chaque bocal contient un pot d'eau de chaux ; les deux sont fermés et placés à l'obscurité, à 20 °C. Après 6 heures, l'eau de chaux du bocal A est trouble, celle du bocal B est limpide. 1) Quel bocal est le témoin, et quelle est la seule différence entre les deux bocaux ? 2) Pourquoi a-t-on placé les bocaux à l'obscurité ? 3) Que concluez-vous ?",
              hint: "Les jeunes pousses peuvent verdir : que se passerait-il alors à la lumière ?",
              solution: [
                "1) Le bocal B est le témoin. La seule différence est l'état des graines : vivantes dans A, mortes dans B.",
                "2) À la lumière, des parties vertes pourraient absorber du dioxyde de carbone et masquer la respiration. À l'obscurité, on mesure la respiration seule.",
                "3) Seules les graines vivantes ont rejeté du dioxyde de carbone, qui a troublé l'eau de chaux.",
                "Conclusion : les graines en germination respirent.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Monsieur Martin arrose tous les jours son ficus, planté dans un joli pot sans trou. Au bout de trois semaines, les feuilles jaunissent et tombent, et les racines sont brunes et molles. Sa voisine a le même ficus, dans un pot percé posé sur une soucoupe qu'elle vide après chaque arrosage, et sa plante est en pleine forme. 1) Quel organe de la plante a été atteint en premier ? 2) En vous appuyant sur la respiration, expliquez ce qui s'est passé. 3) Donnez deux conseils à Monsieur Martin. 4) Proposez une expérience pour vérifier que des racines ont besoin de dioxygène.",
              hint: "Demandez-vous ce que l'eau a remplacé entre les grains de terre.",
              solution: [
                "1) Les racines ont été atteintes en premier : elles sont brunes et molles, elles ont pourri.",
                "2) L'eau, qui ne pouvait pas s'écouler, a rempli tous les espaces entre les grains de terre et en a chassé l'air. Les racines ont manqué de dioxygène et n'ont plus pu respirer : leurs cellules sont mortes.",
                "Des racines mortes n'absorbent plus d'eau ni de sels minéraux : les feuilles jaunissent et tombent.",
                "3) Utiliser un pot percé au fond, et arroser seulement quand la terre commence à sécher, en vidant la soucoupe.",
                "4) On cultive deux plantes identiques, racines dans l'eau : dans le récipient A, on fait buller de l'air avec une pompe d'aquarium ; dans le récipient B, on utilise une eau privée de son dioxygène (bouillie puis refroidie, recouverte d'une couche d'huile).",
                "Résultat attendu : la plante B dépérit, la plante A se porte bien. Les racines ont donc besoin de dioxygène.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la démarche qui montre que des graines respirent.",
            items: [
              "Formuler la question : les graines en germination respirent-elles ?",
              "Proposer une hypothèse : elles rejettent du dioxyde de carbone.",
              "Préparer un bocal avec des graines vivantes et un bocal témoin avec des graines bouillies.",
              "Placer un pot d'eau de chaux dans chaque bocal, puis fermer les bocaux.",
              "Observer l'eau de chaux de chaque bocal après quelques heures.",
              "Conclure en comparant les résultats des deux bocaux.",
            ],
          },
          quiz: [
            {
              q: "Quand une plante respire-t-elle ?",
              options: ["Seulement la nuit", "Le jour et la nuit", "Seulement le jour", "Seulement quand elle fleurit"],
              answer: 1,
              why: "La respiration a lieu en permanence dans toutes les cellules vivantes ; à la lumière, elle est seulement masquée.",
            },
            {
              q: "Par où les gaz entrent-ils dans les feuilles et en sortent-ils ?",
              options: ["Par les stomates", "Par les nervures de la feuille", "Par les racines puis la tige", "Par les poils absorbants"],
              answer: 0,
              why: "Les stomates sont de minuscules orifices, surtout sur la face inférieure des feuilles.",
            },
            {
              q: "Pourquoi les racines pourrissent-elles dans un sol gorgé d'eau ?",
              options: ["Elles reçoivent trop de sels minéraux", "L'eau les dissout peu à peu", "Elles reçoivent trop de lumière", "Elles manquent de dioxygène"],
              answer: 3,
              why: "L'eau chasse l'air du sol : les racines ne peuvent plus respirer.",
            },
            {
              q: "À la lumière, une plante verte sous une cloche fermée rejette surtout :",
              options: ["du dioxyde de carbone", "du diazote", "du dioxygène"],
              answer: 2,
              why: "À la lumière, les échanges liés à la fabrication de la matière rejettent du dioxygène et masquent la respiration.",
            },
            {
              q: "Quel témoin choisir pour montrer que des graines en germination respirent ?",
              options: ["Des graines bouillies, donc mortes", "Des graines plus grosses", "Des graines placées à la lumière", "Aucune graine et un animal à la place"],
              answer: 0,
              why: "Le témoin ne diffère que par un seul élément : ici, des graines mortes au lieu de graines vivantes.",
            },
          ],
          trap: "Dire que les plantes respirent seulement la nuit, ou qu'elles « respirent à l'envers » le jour. La respiration a lieu jour et nuit ; à la lumière, elle est simplement masquée par les échanges liés à la fabrication de la matière.",
          method: "Devant une mesure de gaz autour d'une plante, regardez toujours d'abord les conditions : lumière ou obscurité, organe vert ou non vert. Seules l'obscurité ou un organe non vert permettent d'observer la respiration seule.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA NUTRITION DES PLANTES CHLOROPHYLLIENNES                           */
    /* ==================================================================== */
    {
      id: 'nutrition-vegetaux',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'besoins-plante',
          title: 'Les besoins nutritifs d\'une plante verte',
          minutes: 30,
          objectives: [
            "Identifier les besoins nutritifs d'une plante verte : eau, sels minéraux, dioxyde de carbone et lumière.",
            "Localiser les lieux de prélèvement : les racines pour l'eau et les sels minéraux, les feuilles pour le dioxyde de carbone.",
            "Exploiter une expérience historique et une culture hors-sol pour montrer que la plante ne se nourrit pas de terre.",
            "Concevoir une expérience pour tester un besoin, en ne faisant varier qu'un seul facteur.",
          ],
          course: [
            {
              heading: "Une plante ne mange pas la terre",
              paragraphs: [
                "Une plante verte ne se déplace pas et ne mange pas d'autres êtres vivants. Pendant longtemps, on a pensé qu'elle se nourrissait de terre. Vers 1640, le savant flamand Jan Baptist Van Helmont a réalisé une expérience restée célèbre. Il a planté une jeune pousse de saule de 5 livres dans un pot contenant 200 livres de terre séchée, puis l'a arrosée uniquement avec de l'eau de pluie pendant cinq ans.",
                "Au bout de cinq ans, le saule pesait environ 169 livres, alors que la terre, à nouveau séchée, n'avait perdu qu'environ 2 onces (une soixantaine de grammes). La masse gagnée par l'arbre ne venait donc presque pas de la terre. Van Helmont en a conclu qu'elle venait de l'eau. Il avait en partie raison : on sait aujourd'hui que la plante utilise aussi un gaz de l'air, le dioxyde de carbone, et de petites quantités de sels minéraux.",
              ],
            },
            {
              heading: "L'eau et les sels minéraux, prélevés par les racines",
              paragraphs: [
                "La culture hors-sol (ou culture hydroponique) le confirme : des tomates ou des salades poussent très bien sans terre, les racines plongées dans de l'eau contenant des sels minéraux dissous. En revanche, une plante arrosée uniquement avec de l'eau distillée (de l'eau pure, sans sels minéraux) pousse mal : elle reste petite et ses feuilles jaunissent.",
                "Les sels minéraux sont des substances dissoutes dans l'eau du sol, comme les nitrates, les phosphates ou des sels de potassium. Ce sont eux qu'apportent les engrais. La terre sert surtout de support aux racines et de réserve d'eau et de sels minéraux.",
                "L'eau et les sels minéraux forment ensemble une solution qui entre dans la plante par les racines, plus précisément par les poils absorbants : de très nombreux filaments microscopiques situés près de l'extrémité des racines. Ils augmentent énormément la surface de contact entre la racine et le sol.",
              ],
              box: { label: "Définition", text: "Les sels minéraux sont des substances dissoutes dans l'eau du sol, comme les nitrates ou les phosphates. Avec l'eau, ils sont absorbés par les poils absorbants des racines." },
            },
            {
              heading: "Le dioxyde de carbone, prélevé par les feuilles",
              paragraphs: [
                "Une plante verte a aussi besoin d'un gaz de l'air, le dioxyde de carbone. Il entre dans les feuilles par les stomates, les minuscules orifices déjà rencontrés à propos de la respiration. À la lumière, une plante verte placée sous une cloche fermée fait diminuer la quantité de dioxyde de carbone de l'air : elle l'absorbe.",
                "Une expérience le montre : on place deux plantes identiques à la lumière, sous deux cloches. Dans l'une, un produit absorbe tout le dioxyde de carbone de l'air ; l'autre en contient normalement. Au bout de quelques jours, la plante privée de dioxyde de carbone ne grandit plus, alors que l'autre continue à se développer.",
              ],
            },
            {
              heading: "La lumière, indispensable",
              paragraphs: [
                "Une plante verte a enfin besoin de lumière. Une plante placée longtemps à l'obscurité s'étiole : sa tige s'allonge et devient fragile, ses feuilles restent petites et pâles, jaunâtres, et elle finit par mourir quand ses réserves sont épuisées. La lumière n'est pas un aliment : c'est une source d'énergie que la plante utilise pour fabriquer sa matière.",
                "Pour tester un besoin, on compare des plantes identiques placées dans les mêmes conditions, en ne faisant varier qu'un seul facteur. Par exemple, une plante à la lumière et une plante à l'obscurité, arrosées de la même façon et à la même température : la seule différence est la lumière.",
              ],
              box: { label: "À retenir", text: "Une plante verte a besoin d'eau et de sels minéraux (prélevés dans le sol par les racines), de dioxyde de carbone (prélevé dans l'air par les feuilles) et de lumière. Elle ne se nourrit pas de terre." },
            },
          ],
          keyPoints: [
            "Une plante verte ne consomme aucun aliment venant d'autres êtres vivants.",
            "Ses besoins nutritifs : eau, sels minéraux, dioxyde de carbone et lumière.",
            "Les racines absorbent l'eau et les sels minéraux grâce aux poils absorbants.",
            "Les feuilles absorbent le dioxyde de carbone de l'air par les stomates.",
            "La terre sert de support et de réserve : une plante pousse hors-sol dans une solution de sels minéraux.",
            "La lumière est une source d'énergie, pas un aliment ; à l'obscurité, la plante s'étiole.",
            "Pour tester un besoin, on ne fait varier qu'un seul facteur.",
          ],
          example: {
            statement: "Van Helmont a planté un saule de 5 livres dans 200 livres de terre séchée. Cinq ans plus tard, le saule pesait environ 169 livres et la terre avait perdu environ 2 onces (1 livre = 16 onces). 1) Calculez la masse gagnée par le saule. 2) Comparez-la à la masse perdue par la terre. 3) Concluez.",
            solution: [
              "1) Masse gagnée par le saule : 169 - 5 = 164 livres.",
              "2) Je convertis la masse perdue par la terre en livres : 2 onces = 2 ÷ 16 = 0,125 livre.",
              "Je compare : 164 ÷ 0,125 = 1 312. Le saule a gagné plus de mille fois la masse perdue par la terre.",
              "3) La matière du saule ne vient donc presque pas de la terre.",
              "Conclusion : elle vient de ce que la plante a prélevé ailleurs : l'eau d'arrosage et, on le sait aujourd'hui, le dioxyde de carbone de l'air, avec un peu de sels minéraux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les besoins suivants selon l'organe qui les prélève (racines ou feuilles) : eau, dioxyde de carbone, nitrates, phosphates. Puis nommez le besoin qui n'est pas une matière prélevée dans le milieu.",
              hint: "Demandez-vous si chaque substance se trouve dans le sol ou dans l'air.",
              solution: [
                "Prélevés par les racines, dans le sol : l'eau, les nitrates et les phosphates (des sels minéraux).",
                "Prélevé par les feuilles, dans l'air : le dioxyde de carbone.",
                "Le besoin qui n'est pas une matière : la lumière, une source d'énergie captée par les feuilles.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un élève cultive pendant trois semaines quatre lots de jeunes plants de blé identiques. Lot A : solution de sels minéraux, à la lumière. Lot B : eau distillée, à la lumière. Lot C : solution de sels minéraux, à l'obscurité. Lot D : terre de jardin arrosée à l'eau du robinet, à la lumière. Résultats : A mesure 18 cm, vert ; B mesure 7 cm, jaunâtre ; C mesure 25 cm, pâle, avec des tiges molles ; D mesure 17 cm, vert. 1) Quels lots comparer pour tester le besoin en sels minéraux ? Que montrent-ils ? 2) Quels lots comparer pour tester le besoin en lumière ? Pourquoi la hauteur seule ne permet-elle pas de conclure ? 3) Que suggère la comparaison des lots A et D ?",
              hint: "Pour chaque question, cherchez deux lots qui ne diffèrent que par un seul facteur.",
              solution: [
                "1) On compare A et B : ils ne diffèrent que par la présence de sels minéraux. A pousse bien (18 cm, vert), B pousse mal (7 cm, jaunâtre). Les sels minéraux sont donc nécessaires.",
                "2) On compare A et C : ils ne diffèrent que par la lumière.",
                "C est plus haut, mais il est pâle et ses tiges sont molles : il est étiolé. Une grande taille ne signifie pas une bonne santé ; il faudrait aussi observer la couleur ou peser la matière produite. Sans lumière, la plante finira par mourir.",
                "3) A et D poussent de la même façon : la terre n'est pas indispensable si l'eau et les sels minéraux sont fournis autrement.",
                "Prudence : A et D diffèrent par deux facteurs (la terre et l'eau du robinet), la comparaison suggère ce résultat sans le prouver totalement.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une jardinière affirme : « Mes plantes vertes ont besoin du dioxyde de carbone de l'air pour grandir. » Vous disposez de deux plantes identiques en pot, de deux cloches transparentes fermées, d'un produit qui absorbe le dioxyde de carbone de l'air, d'une lampe et d'eau. 1) Rédigez le protocole d'une expérience pour tester son affirmation. 2) Indiquez les résultats attendus si elle a raison. 3) Expliquez pourquoi les deux plantes doivent recevoir la même lumière, le même arrosage et la même température.",
              hint: "Un seul facteur doit différer entre les deux cloches : lequel ?",
              solution: [
                "1) Je place chaque plante sous une cloche transparente fermée. Sous la cloche A, je place aussi le produit qui absorbe le dioxyde de carbone ; sous la cloche B, je ne mets rien de plus : c'est le témoin.",
                "J'éclaire les deux cloches avec la même lampe, à la même distance, j'arrose les plantes de la même façon, à la même température, pendant une à deux semaines.",
                "Je compare ensuite la croissance des deux plantes (taille, nombre de feuilles, couleur).",
                "2) Si la jardinière a raison, la plante A, privée de dioxyde de carbone, ne grandit plus, alors que la plante B continue à se développer.",
                "3) Si un autre facteur changeait aussi, on ne pourrait pas savoir si la différence de croissance est due au dioxyde de carbone ou à cet autre facteur. Un seul facteur doit varier.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément à sa description.",
            pairs: [
              { left: "Eau", right: "Absorbée par les poils absorbants des racines" },
              { left: "Sels minéraux", right: "Substances dissoutes dans l'eau du sol, apportées par les engrais" },
              { left: "Dioxyde de carbone", right: "Gaz de l'air qui entre dans les feuilles par les stomates" },
              { left: "Lumière", right: "Source d'énergie captée par les feuilles" },
              { left: "Van Helmont", right: "Saule cultivé cinq ans dans un pot de terre" },
              { left: "Culture hors-sol", right: "Plantes nourries par une solution de sels minéraux, sans terre" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces éléments n'est PAS un besoin nutritif d'une plante verte ?",
              options: ["L'eau", "La lumière", "Les sels minéraux", "La terre"],
              answer: 3,
              why: "La terre sert de support et de réserve d'eau et de sels minéraux ; une plante pousse très bien hors-sol.",
            },
            {
              q: "Par où entre le dioxyde de carbone utilisé par la plante ?",
              options: ["Par les poils absorbants", "Par les stomates", "Par l'extrémité des racines", "Par les fleurs uniquement"],
              answer: 1,
              why: "Le dioxyde de carbone de l'air entre dans les feuilles par les stomates.",
            },
            {
              q: "Que montre l'expérience de Van Helmont ?",
              options: ["Que la terre fournit toute la matière de l'arbre", "Que l'arbre n'a besoin ni d'eau ni de lumière", "Que l'arbre ne grossit pas grâce à la terre", "Que l'arbre se nourrit d'insectes"],
              answer: 2,
              why: "Le saule a gagné environ 164 livres alors que la terre n'a perdu qu'environ 2 onces.",
            },
            {
              q: "Une plante cultivée dans de l'eau distillée, à la lumière, pousse mal. Que lui manque-t-il ?",
              options: ["Des sels minéraux", "Du dioxyde de carbone", "De la lumière", "Du dioxygène"],
              answer: 0,
              why: "L'eau distillée est de l'eau pure : elle ne contient pas les sels minéraux dont la plante a besoin.",
            },
            {
              q: "Comment qualifie-t-on une plante restée longtemps à l'obscurité, pâle et à la tige très allongée ?",
              options: ["Fanée", "Étiolée", "Hydroponique"],
              answer: 1,
              why: "Privée de lumière, la plante s'étiole : elle s'allonge, pâlit, puis meurt quand ses réserves sont épuisées.",
            },
          ],
          trap: "Croire qu'une plante se nourrit de terre, ou que la lumière est un aliment. La terre n'est qu'un support et une réserve d'eau et de sels minéraux ; la lumière est une source d'énergie, pas de la matière.",
          method: "Pour tester un besoin, écrivez d'abord la liste de tous les facteurs (eau, sels minéraux, lumière, dioxyde de carbone, température), puis vérifiez qu'entre vos deux montages un seul change. S'il en change deux, l'expérience ne permet pas de conclure.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'production-matiere',
          title: 'La plante produit sa matière grâce à la lumière',
          minutes: 35,
          objectives: [
            "Mettre en évidence la production d'amidon dans les feuilles éclairées, à l'aide de l'eau iodée.",
            "Relier la production de matière organique à la présence de chlorophylle et de lumière.",
            "Écrire le bilan de la photosynthèse avec des mots.",
            "Décrire le transport des sèves et le stockage des réserves dans la plante.",
          ],
          course: [
            {
              heading: "Mettre en évidence l'amidon",
              paragraphs: [
                "L'amidon est une matière organique, c'est-à-dire une matière fabriquée par les êtres vivants. C'est un glucide (un sucre complexe) que l'on trouve en abondance dans la pomme de terre, le riz ou la farine. On le reconnaît grâce à l'eau iodée : ce liquide jaune orangé devient bleu-violet, presque noir, au contact de l'amidon.",
                "Pour chercher l'amidon dans une feuille, on la décolore d'abord : on la plonge quelques minutes dans l'eau bouillante, puis dans de l'alcool chauffé au bain-marie, qui dissout la chlorophylle (avec l'aide d'un adulte, car l'alcool est inflammable). La feuille devient blanchâtre ; on la rince, on y dépose de l'eau iodée et l'on observe la couleur.",
              ],
              box: { label: "Repère", text: "Test de l'amidon : l'eau iodée, jaune orangé, devient bleu-violet foncé en présence d'amidon." },
            },
            {
              heading: "La lumière et la chlorophylle sont indispensables",
              paragraphs: [
                "On place un géranium à l'obscurité pendant 48 heures : ses feuilles épuisent leur amidon. On recouvre ensuite une partie d'une feuille avec un cache opaque (du papier aluminium), puis on éclaire la plante pendant plusieurs heures. Après le test à l'eau iodée, seule la partie éclairée devient bleu-violet : l'amidon n'a été fabriqué que là où la lumière arrivait.",
                "On utilise aussi une feuille panachée, qui possède des zones vertes et des zones blanches. Après éclairement, seules les zones vertes contiennent de l'amidon. La couleur verte des feuilles est due à un pigment, la chlorophylle, contenu dans de petits éléments des cellules appelés chloroplastes. Sans chlorophylle, pas de production d'amidon.",
                "Les cellules qui contiennent de la chlorophylle sont dites chlorophylliennes. Une plante chlorophyllienne possède de telles cellules, surtout dans ses feuilles et ses jeunes tiges : ce sont ses lieux de production de matière.",
              ],
            },
            {
              heading: "La photosynthèse",
              paragraphs: [
                "À la lumière, dans les cellules chlorophylliennes, la plante fabrique de la matière organique (des sucres comme le glucose, puis l'amidon) à partir de matière minérale : l'eau venue du sol et le dioxyde de carbone de l'air. Cette fabrication rejette du dioxygène. On l'appelle la photosynthèse, du grec « photo » (lumière) et « synthèse » (fabrication). Les sels minéraux servent ensuite à fabriquer d'autres constituants de la plante.",
                "On peut voir le dioxygène produit : une branche d'élodée, une plante aquatique, éclairée dans l'eau, dégage de fines bulles de gaz. Recueilli dans un tube, ce gaz ravive une allumette qui ne présente plus qu'un point rouge (une allumette incandescente), ce qui est le signe du dioxygène. À l'obscurité, les bulles cessent.",
                "La plante chlorophyllienne est un producteur primaire : elle fabrique sa propre matière organique à partir de matière minérale. Les animaux, eux, doivent consommer de la matière organique déjà fabriquée par d'autres êtres vivants. Les chaînes alimentaires commencent donc presque toujours par une plante chlorophyllienne.",
              ],
              box: { label: "Formule", text: "Bilan de la photosynthèse, en mots : eau + dioxyde de carbone + énergie lumineuse → matière organique (glucose, amidon) + dioxygène. Elle a lieu à la lumière, dans les cellules chlorophylliennes." },
            },
            {
              heading: "Transporter et stocker la matière",
              paragraphs: [
                "L'eau et les sels minéraux absorbés par les racines montent jusqu'aux feuilles dans des vaisseaux très fins : c'est la sève brute. Les sucres fabriqués dans les feuilles sont ensuite distribués à tous les organes (racines, tiges, fleurs, fruits) par d'autres vaisseaux : c'est la sève élaborée. Les organes qui ne sont pas verts, comme les racines, ne fabriquent pas de matière organique : ils dépendent de la sève élaborée.",
                "Une partie de la matière fabriquée est stockée sous forme de réserves : de l'amidon dans le tubercule de pomme de terre ou dans les grains de blé, du sucre dans la racine de betterave, de l'huile dans les graines de tournesol. Ces réserves permettent à la plante de repartir au printemps, ou à la graine de germer. Ce sont aussi elles que nous mangeons.",
              ],
              box: { label: "Définition", text: "Sève brute : eau et sels minéraux, transportés des racines vers les feuilles. Sève élaborée : eau et sucres, transportés des feuilles vers tous les organes, dont les organes de réserve." },
            },
          ],
          keyPoints: [
            "L'eau iodée devient bleu-violet en présence d'amidon.",
            "L'amidon n'est fabriqué que dans les parties vertes et éclairées des feuilles.",
            "La chlorophylle, contenue dans les chloroplastes, est indispensable à la production de matière.",
            "Photosynthèse : eau + dioxyde de carbone + énergie lumineuse → matière organique + dioxygène.",
            "La sève brute monte des racines aux feuilles ; la sève élaborée distribue les sucres à tous les organes.",
            "La plante stocke des réserves : amidon de la pomme de terre, sucre de la betterave, huile du tournesol.",
            "La plante chlorophyllienne est un producteur primaire, au début des chaînes alimentaires.",
          ],
          example: {
            statement: "Un géranium est placé 48 heures à l'obscurité. Une de ses feuilles est ensuite couverte en partie par un cache en papier aluminium, puis la plante est éclairée pendant 6 heures. La feuille, décolorée, est testée à l'eau iodée : la partie restée à la lumière devient bleu-violet, la partie cachée reste jaune orangé. Interprétez cette expérience.",
            solution: [
              "Je rappelle le rôle du séjour à l'obscurité : il vide les feuilles de leur amidon. Tout amidon trouvé ensuite a donc été fabriqué pendant l'expérience.",
              "Je rappelle le test : la couleur bleu-violet indique la présence d'amidon.",
              "J'interprète : la partie éclairée contient de l'amidon, la partie cachée n'en contient pas.",
              "Je compare : les deux parties de la même feuille ne diffèrent que par la lumière reçue.",
              "Conclusion : la feuille ne fabrique de l'amidon, donc de la matière organique, qu'à la lumière.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez le bilan de la photosynthèse : ... + ... + énergie lumineuse → ... + dioxygène. Puis indiquez d'où vient chacune des deux substances utilisées, et ce que devient le dioxygène.",
              hint: "L'une des substances vient du sol, l'autre de l'air.",
              solution: [
                "Bilan : eau + dioxyde de carbone + énergie lumineuse → matière organique (glucose, amidon) + dioxygène.",
                "L'eau vient du sol : elle est absorbée par les racines et monte dans la sève brute.",
                "Le dioxyde de carbone vient de l'air : il entre dans les feuilles par les stomates.",
                "Le dioxygène produit est rejeté dans l'air (ou dans l'eau pour une plante aquatique).",
              ],
            },
            {
              level: 2,
              statement: "Une feuille panachée de géranium, à bordure blanche et à centre vert, est privée d'amidon par un séjour de 48 heures à l'obscurité, puis éclairée pendant 6 heures. Après décoloration, on y dépose de l'eau iodée. 1) Indiquez la couleur attendue au centre et sur la bordure. 2) Quelle condition de la photosynthèse cette expérience permet-elle de tester ? 3) Pourquoi la lumière seule ne suffit-elle pas ?",
              hint: "Les deux zones de la feuille ont reçu la même lumière : qu'est-ce qui les différencie ?",
              solution: [
                "1) Au centre, vert avant décoloration, l'eau iodée devient bleu-violet : il y a de l'amidon. Sur la bordure blanche, elle reste jaune orangé : il n'y a pas d'amidon.",
                "2) Les deux zones ont reçu la même lumière ; elles ne diffèrent que par la présence de chlorophylle. L'expérience teste donc le besoin en chlorophylle.",
                "3) La bordure a été éclairée, mais elle n'a pas de chlorophylle pour capter l'énergie lumineuse : elle ne fabrique pas d'amidon.",
                "Conclusion : la photosynthèse nécessite à la fois de la lumière et de la chlorophylle.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. On éclaire une branche d'élodée placée dans une eau riche en dioxyde de carbone, avec une lampe placée à différentes distances, et l'on compte les bulles de gaz dégagées en une minute. Lampe à 10 cm : 42 bulles ; à 20 cm : 25 bulles ; à 40 cm : 9 bulles ; lampe éteinte : 0 bulle. 1) Décrivez la relation entre la distance de la lampe et le nombre de bulles. 2) Quel gaz forme les bulles, et comment le vérifier ? 3) Expliquez ces résultats. 4) Une élève affirme : « Lampe éteinte, il n'y a aucune bulle : l'élodée ne fait plus rien et ne respire pas. » Corrigez son raisonnement.",
              hint: "Plus la lampe est loin, moins la plante reçoit de lumière. Et souvenez-vous que la respiration ne s'arrête jamais.",
              solution: [
                "1) Plus la lampe est éloignée, moins il y a de bulles : 42, puis 25, puis 9, puis 0 sans lumière.",
                "2) Les bulles sont formées de dioxygène. On le vérifie en recueillant le gaz dans un tube : il ravive une allumette incandescente.",
                "3) Le dioxygène est produit par la photosynthèse, qui a besoin de lumière. Plus la plante reçoit de lumière, plus elle fait de photosynthèse et plus elle rejette de dioxygène.",
                "4) Sans lumière, la photosynthèse s'arrête, d'où l'absence de bulles. Mais l'élodée respire toujours, jour et nuit : elle consomme alors du dioxygène dissous, sans former de bulles.",
                "Conclusion : l'absence de bulles montre l'arrêt de la photosynthèse, pas l'arrêt de la respiration.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le trajet de l'eau et de la matière dans une plante de pomme de terre.",
            items: [
              "L'eau du sol entre par les poils absorbants des racines.",
              "La sève brute monte dans les vaisseaux de la tige.",
              "Dans les feuilles éclairées, la photosynthèse produit des sucres.",
              "La sève élaborée emporte ces sucres vers les autres organes.",
              "Les sucres sont stockés sous forme d'amidon dans un tubercule.",
            ],
          },
          quiz: [
            {
              q: "Quelle couleur prend l'eau iodée en présence d'amidon ?",
              options: ["Rouge brique", "Vert clair", "Bleu-violet", "Jaune orangé"],
              answer: 2,
              why: "L'eau iodée, jaune orangé, devient bleu-violet foncé au contact de l'amidon.",
            },
            {
              q: "Où l'amidon est-il fabriqué dans une feuille panachée éclairée ?",
              options: ["Dans les zones vertes", "Dans les zones blanches", "Dans toute la feuille", "Nulle part"],
              answer: 0,
              why: "Seules les zones vertes possèdent de la chlorophylle, indispensable à la photosynthèse.",
            },
            {
              q: "Quel gaz la photosynthèse rejette-t-elle ?",
              options: ["Le dioxyde de carbone", "Le dioxygène", "Le diazote"],
              answer: 1,
              why: "La photosynthèse absorbe du dioxyde de carbone et rejette du dioxygène.",
            },
            {
              q: "Que transporte la sève élaborée ?",
              options: ["De l'eau et des sels minéraux, vers les feuilles", "Du dioxygène, vers les racines", "De l'amidon, des racines vers les feuilles", "De l'eau et des sucres, vers tous les organes"],
              answer: 3,
              why: "La sève élaborée distribue les sucres fabriqués dans les feuilles à tous les organes de la plante.",
            },
            {
              q: "Pourquoi dit-on que la plante chlorophyllienne est un producteur primaire ?",
              options: ["Elle est toujours la première à pousser au printemps, avant les autres", "Elle produit beaucoup de graines", "Elle fabrique sa matière à partir de matière minérale", "Elle consomme les animaux morts"],
              answer: 2,
              why: "Grâce à la photosynthèse, elle produit sa matière organique à partir d'eau, de dioxyde de carbone et de sels minéraux.",
            },
          ],
          trap: "Croire que toute la plante fabrique de la matière, ou que le dioxygène rejeté vient de la respiration. Seules les cellules chlorophylliennes éclairées font la photosynthèse, et c'est elle, non la respiration, qui rejette du dioxygène.",
          method: "Apprenez le bilan de la photosynthèse comme une phrase à trous, puis associez chaque terme à son origine ou à sa destination : eau (sol, racines), dioxyde de carbone (air, stomates), lumière (énergie captée par la chlorophylle), sucres (sève élaborée, réserves), dioxygène (rejeté dans l'air).",
        },
      ],
    },
    /* ==================================================================== */
    /* L'ALIMENTATION ET LA DIGESTION                                       */
    /* ==================================================================== */
    {
      id: 'digestion',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'alimentation-equilibree',
          title: 'Les aliments et une alimentation équilibrée',
          minutes: 30,
          objectives: [
            "Identifier les constituants des aliments : glucides, lipides, protides, eau, sels minéraux, vitamines et fibres.",
            "Relier chaque constituant à son rôle dans l'organisme : fournir de l'énergie, construire le corps, assurer son bon fonctionnement.",
            "Relier les apports alimentaires aux besoins de l'organisme, qui varient selon l'âge et l'activité.",
            "Analyser un repas pour juger s'il est équilibré et proposer des améliorations.",
          ],
          course: [
            {
              heading: "Des aliments aux constituants",
              paragraphs: [
                "Un aliment, comme un morceau de pain, un yaourt ou une pomme, est un mélange de plusieurs substances : ses constituants. On distingue des constituants organiques, fabriqués par les êtres vivants (les glucides, les lipides et les protides), et des constituants minéraux (l'eau et les sels minéraux, comme le calcium ou le fer). Les aliments apportent aussi des vitamines, en très petites quantités, et des fibres.",
                "Les glucides sont les sucres : le sucre de table, mais aussi l'amidon du pain, des pâtes, du riz et des pommes de terre. Les lipides sont les matières grasses : l'huile, le beurre, mais aussi les graisses moins visibles de la charcuterie ou des gâteaux. Les protides, ou protéines, abondent dans la viande, le poisson, les œufs, les produits laitiers et les légumes secs (lentilles, pois chiches).",
              ],
              box: { label: "Définition", text: "Les aliments sont formés de constituants : glucides (sucres), lipides (graisses), protides (protéines), eau, sels minéraux, vitamines et fibres." },
            },
            {
              heading: "À quoi servent les constituants ?",
              paragraphs: [
                "Les glucides et les lipides ont surtout un rôle énergétique : ils fournissent l'énergie nécessaire pour vivre, bouger et maintenir le corps à environ 37 °C. Un gramme de lipides fournit un peu plus de deux fois plus d'énergie qu'un gramme de glucides ou de protides.",
                "Les protides ont surtout un rôle bâtisseur : ils servent à construire et à réparer le corps (muscles, peau, cheveux), ce qui est essentiel pendant la croissance. Parmi les sels minéraux, le calcium construit les os et les dents, et le fer est nécessaire au sang. Les vitamines et les sels minéraux permettent le bon fonctionnement des organes. Les fibres, présentes dans les fruits, les légumes et les céréales complètes, facilitent le transit intestinal.",
                "L'eau représente environ 60 % de la masse du corps d'un adulte. Nous en perdons chaque jour (urine, transpiration, respiration) : elle doit être renouvelée par les boissons et les aliments.",
              ],
              box: { label: "À retenir", text: "Rôle énergétique : glucides et lipides. Rôle bâtisseur : protides et calcium. Bon fonctionnement de l'organisme : vitamines, sels minéraux, fibres et eau." },
            },
            {
              heading: "Des besoins qui varient",
              paragraphs: [
                "L'énergie apportée par les aliments se mesure en kilojoules (kJ) ou en kilocalories (kcal) ; elle est indiquée sur les emballages. Nos besoins en énergie et en constituants dépendent de l'âge, du sexe, de la taille et de l'activité physique. Un adolescent en pleine croissance qui fait beaucoup de sport a besoin de plus d'énergie qu'un adolescent du même âge qui en fait peu.",
                "Si les apports dépassent régulièrement les dépenses, l'organisme stocke le surplus, surtout sous forme de graisses : on prend du poids. S'ils sont trop faibles, on maigrit et l'on manque d'énergie. Le manque d'un seul constituant peut aussi poser problème : un manque de fer peut provoquer une anémie, qui fatigue, et un manque de vitamine C provoque le scorbut, la maladie des marins d'autrefois.",
              ],
            },
            {
              heading: "Une alimentation équilibrée",
              paragraphs: [
                "Aucun aliment ne contient à lui seul tous les constituants dans les bonnes proportions (le lait maternel suffit seulement au nourrisson pendant ses premiers mois). Il faut donc manger varié, en puisant chaque jour dans les différentes familles d'aliments : fruits et légumes ; féculents (pain, pâtes, riz, pommes de terre, légumes secs) ; produits laitiers ; viandes, poissons et œufs ; matières grasses en quantité limitée ; produits sucrés avec modération. L'eau est la seule boisson indispensable.",
                "Les recommandations nationales de santé conseillent par exemple de manger au moins cinq fruits et légumes par jour, de privilégier les céréales complètes, de limiter les produits gras, sucrés et salés, et, à votre âge, de bouger au moins une heure par jour. Il est aussi conseillé de répartir les apports sur quatre repas (petit-déjeuner, déjeuner, goûter, dîner) et de ne pas sauter le petit-déjeuner.",
              ],
              box: { label: "Règle", text: "Une alimentation équilibrée est variée (toutes les familles d'aliments), adaptée en quantité aux besoins de chacun, et répartie sur la journée." },
            },
          ],
          keyPoints: [
            "Un aliment contient plusieurs constituants : glucides, lipides, protides, eau, sels minéraux, vitamines, fibres.",
            "Glucides et lipides fournissent surtout de l'énergie ; un gramme de lipides en fournit plus de deux fois plus.",
            "Les protides et le calcium construisent le corps ; vitamines et sels minéraux assurent son bon fonctionnement.",
            "Les besoins dépendent de l'âge, du sexe, de la taille et de l'activité physique.",
            "Trop d'apports par rapport aux dépenses : le surplus est stocké en graisses.",
            "Une alimentation équilibrée est variée, adaptée aux besoins et répartie sur quatre repas.",
            "L'eau est la seule boisson indispensable.",
          ],
          example: {
            statement: "Données fictives. Au déjeuner, Léo mange des frites, un hamburger, un beignet au chocolat, et boit un soda. Ce repas est-il équilibré ? Proposez un repas plus équilibré.",
            solution: [
              "Je classe les aliments par familles : les frites sont un féculent cuit dans la matière grasse ; le hamburger apporte du pain (féculent), de la viande et souvent une sauce grasse ; le beignet est un produit sucré et gras ; le soda est une boisson sucrée.",
              "Je repère ce qui manque : aucun fruit ni légume, aucun produit laitier, et pas d'eau.",
              "Je repère ce qui est en excès : les lipides (frites, beignet, sauce) et les sucres (soda, beignet).",
              "Je conclus : ce repas n'est pas équilibré, même s'il apporte beaucoup d'énergie.",
              "Proposition : des crudités, un steak haché avec des haricots verts et un peu de pâtes, un yaourt nature, un fruit, et de l'eau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Si l'on ne compte pas l'eau, quel est le constituant principal de chacun de ces aliments ? Huile d'olive, sucre en morceaux, blanc de poulet, riz, beurre. Choisissez parmi : glucides, lipides, protides.",
              hint: "L'amidon est un glucide ; les matières grasses sont des lipides.",
              solution: [
                "Huile d'olive : lipides.",
                "Sucre en morceaux : glucides.",
                "Blanc de poulet : protides.",
                "Riz : glucides (sous forme d'amidon).",
                "Beurre : lipides.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives, arrondies. Un bol de céréales avec du lait apporte 60 g de glucides, 8 g de lipides et 12 g de protides. On admet qu'un gramme de glucides ou de protides fournit 17 kJ, et qu'un gramme de lipides fournit 38 kJ. 1) Calculez l'énergie apportée par chaque constituant, puis l'énergie totale. 2) Quel constituant apporte le plus d'énergie dans ce bol ? 3) On admet qu'un élève de 12 ans a besoin d'environ 9 000 kJ par jour et que le petit-déjeuner devrait en apporter environ le quart. Ce bol suffit-il ?",
              hint: "Multipliez chaque masse par l'énergie fournie par un gramme du constituant.",
              solution: [
                "1) Glucides : 60 × 17 = 1 020 kJ.",
                "Lipides : 8 × 38 = 304 kJ.",
                "Protides : 12 × 17 = 204 kJ.",
                "Total : 1 020 + 304 + 204 = 1 528 kJ.",
                "2) Les glucides apportent le plus d'énergie (1 020 kJ).",
                "3) Le quart des besoins : 9 000 ÷ 4 = 2 250 kJ. Or 1 528 kJ < 2 250 kJ : ce bol ne suffit pas. On peut ajouter par exemple une tartine de pain et un fruit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Camille et Hugo ont 13 ans et la même taille. Camille fait 4 heures de natation par semaine ; Hugo ne fait pas de sport. 1) Lequel des deux a, a priori, les besoins en énergie les plus élevés ? Justifiez. 2) Camille mange chaque jour exactement comme Hugo, et elle maigrit un peu. Expliquez. 3) Hugo absorbe chaque jour 1 500 kJ de plus que ce qu'il dépense. On admet que 1 kg de graisse de réserve correspond à environ 37 000 kJ. Au bout de combien de jours, environ, aurait-il stocké 1 kg de graisse ? 4) Donnez un conseil à chacun.",
              hint: "Comparez les apports (ce que l'on mange) et les dépenses (ce que l'on consomme en vivant et en bougeant).",
              solution: [
                "1) Camille : la natation est une activité physique qui consomme beaucoup d'énergie, en plus des besoins de base et de la croissance.",
                "2) Camille dépense plus qu'Hugo mais mange autant : ses apports sont inférieurs à ses dépenses. Son organisme puise dans ses réserves, elle maigrit.",
                "3) 37 000 ÷ 1 500 ≈ 24,7. Il faudrait environ 25 jours pour stocker 1 kg de graisse.",
                "4) Camille : augmenter un peu ses apports, par exemple avec un goûter plus complet les jours d'entraînement.",
                "Hugo : bouger au moins une heure par jour et limiter les produits gras et sucrés, sans sauter de repas.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Faites le tri parmi ces idées sur l'alimentation.",
            statements: [
              { text: "Le pain contient surtout des glucides, sous forme d'amidon.", true: true, why: "L'amidon de la farine est un glucide." },
              { text: "Les lipides fournissent moins d'énergie que les glucides.", true: false, why: "Un gramme de lipides fournit un peu plus de deux fois plus d'énergie qu'un gramme de glucides." },
              { text: "Les protides servent surtout à construire et à réparer le corps.", true: true, why: "Ils forment les muscles, la peau, les cheveux : c'est leur rôle bâtisseur." },
              { text: "Un seul aliment, bien choisi, peut suffire à un adolescent.", true: false, why: "Aucun aliment ne contient tous les constituants dans les bonnes proportions : il faut manger varié." },
              { text: "Les besoins en énergie dépendent de l'activité physique.", true: true, why: "Plus on bouge, plus on dépense d'énergie." },
              { text: "Les fibres ne servent à rien puisque nous ne les digérons pas.", true: false, why: "Elles facilitent le transit intestinal et nourrissent une partie des bactéries de l'intestin." },
              { text: "Le soda est indispensable pour bien s'hydrater.", true: false, why: "L'eau est la seule boisson indispensable ; les sodas apportent beaucoup de sucre." },
            ],
          },
          quiz: [
            {
              q: "Quel constituant a surtout un rôle bâtisseur ?",
              options: ["Les glucides", "Les protides", "Les lipides", "Les fibres"],
              answer: 1,
              why: "Les protides servent à construire et à réparer les cellules du corps, notamment pendant la croissance.",
            },
            {
              q: "Lequel de ces aliments est riche en lipides ?",
              options: ["Une pomme", "Du riz cuit", "De l'eau minérale", "Du beurre"],
              answer: 3,
              why: "Le beurre est une matière grasse : il est formé en grande partie de lipides.",
            },
            {
              q: "Une alimentation équilibrée est avant tout :",
              options: ["variée et adaptée aux besoins", "composée surtout de protides", "sans aucune matière grasse", "riche en produits sucrés pour l'énergie"],
              answer: 0,
              why: "Il faut puiser dans toutes les familles d'aliments, en quantités adaptées à ses besoins.",
            },
            {
              q: "Qu'arrive-t-il si les apports dépassent longtemps les dépenses ?",
              options: ["On maigrit", "Rien, car tout le surplus est éliminé dans l'urine", "On stocke le surplus en graisses", "On grandit plus vite"],
              answer: 2,
              why: "L'organisme met le surplus d'énergie en réserve, surtout sous forme de graisses.",
            },
            {
              q: "Quelle est la seule boisson indispensable ?",
              options: ["L'eau", "Le lait", "Le jus de fruits", "Le soda sans sucre"],
              answer: 0,
              why: "L'eau compense les pertes de chaque jour ; les autres boissons ne sont pas indispensables.",
            },
          ],
          trap: "Confondre aliment et constituant, ou classer les aliments en « bons » et « mauvais ». Un aliment contient plusieurs constituants, et c'est l'équilibre de l'ensemble des repas, sur la journée et sur la semaine, qui compte.",
          method: "Pour juger un repas, faites la liste des familles d'aliments (fruits et légumes, féculents, produits laitiers, viandes, poissons et œufs, matières grasses, produits sucrés, boisson), cochez celles qui sont présentes, puis repérez ce qui manque et ce qui est en excès.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'transformation-aliments',
          title: 'La digestion : des aliments aux nutriments',
          minutes: 35,
          objectives: [
            "Décrire le trajet des aliments dans le tube digestif et nommer les organes de l'appareil digestif.",
            "Distinguer l'action mécanique (mastication, brassage) et l'action chimique (enzymes des sucs digestifs) de la digestion.",
            "Exploiter une expérience de digestion de l'amidon par la salive en tube à essai.",
            "Expliquer le rôle du microbiote intestinal dans la digestion.",
          ],
          course: [
            {
              heading: "L'appareil digestif",
              paragraphs: [
                "L'appareil digestif comprend le tube digestif et des glandes digestives. Le tube digestif est un long conduit de plusieurs mètres, de la bouche à l'anus : bouche, pharynx, œsophage, estomac, intestin grêle, gros intestin, anus. Les aliments ne circulent que dans ce tube.",
                "Les glandes digestives produisent des liquides, les sucs digestifs, qui sont déversés dans le tube digestif. Les glandes salivaires produisent la salive, le foie produit la bile, le pancréas produit le suc pancréatique. La paroi de l'estomac produit le suc gastrique, et celle de l'intestin grêle le suc intestinal. Le foie et le pancréas ne reçoivent pas d'aliments : ils sont reliés à l'intestin grêle par des canaux.",
              ],
              box: { label: "Repère", text: "Trajet des aliments : bouche → œsophage → estomac → intestin grêle → gros intestin → anus. Le foie et le pancréas ne sont jamais traversés par les aliments : ils déversent leurs sucs dans l'intestin grêle." },
            },
            {
              heading: "Une action mécanique : découper et brasser",
              paragraphs: [
                "Dans la bouche, les dents coupent, déchirent et broient les aliments : c'est la mastication. La langue les mélange à la salive pour former une boulette, le bol alimentaire, que l'on avale. Les muscles de l'œsophage le poussent ensuite jusqu'à l'estomac.",
                "Dans l'estomac, les muscles de la paroi brassent les aliments pendant plusieurs heures et les mélangent au suc gastrique, très acide. On obtient une bouillie, qui passe peu à peu dans l'intestin grêle. Cette action mécanique réduit les aliments en très petits morceaux, mais elle ne suffit pas à les transformer en nutriments.",
              ],
            },
            {
              heading: "Une action chimique : les enzymes",
              paragraphs: [
                "La salive, le suc gastrique, le suc pancréatique et le suc intestinal contiennent des enzymes digestives. Une enzyme digestive est une substance qui découpe de grosses molécules des aliments en molécules plus petites. Chaque enzyme n'agit que sur un type de constituant, un peu comme une clé n'ouvre qu'une serrure. Par exemple, l'amylase de la salive découpe l'amidon en sucres plus petits.",
                "La bile, fabriquée par le foie, ne contient pas d'enzyme : elle disperse les graisses en fines gouttelettes, un peu comme le liquide vaisselle, ce qui facilite l'action des enzymes. La digestion chimique se termine dans l'intestin grêle. L'amidon devient du glucose, les protides deviennent des acides aminés, les lipides des acides gras et du glycérol. L'eau, les sels minéraux et les vitamines ne sont pas transformés : leurs molécules sont déjà assez petites.",
              ],
              box: { label: "Définition", text: "La digestion est la transformation des aliments en nutriments, petites molécules utilisables par l'organisme. Elle associe une action mécanique et une action chimique, due aux enzymes des sucs digestifs." },
            },
            {
              heading: "Une expérience, et le rôle du microbiote",
              paragraphs: [
                "Dans un tube A, on mélange de l'empois d'amidon (de l'amidon cuit dans l'eau) et de la salive ; dans un tube B, de l'empois d'amidon et de l'eau. Les deux tubes sont placés à 37 °C, la température du corps. Au bout de quinze à vingt minutes, l'eau iodée ne bleuit plus avec le tube A, et la liqueur de Fehling, chauffée, y donne un précipité rouge brique, signe de la présence de petits sucres. Dans le tube B, l'amidon est toujours là : c'est donc la salive qui l'a transformé.",
                "Le gros intestin abrite des dizaines de milliers de milliards de bactéries et d'autres micro-organismes : c'est le microbiote intestinal. Ces micro-organismes, inoffensifs pour la plupart, dégradent une partie des fibres que nos propres enzymes ne savent pas digérer, produisent certaines vitamines et nous protègent contre des microbes dangereux. Une alimentation variée et riche en fibres favorise un microbiote diversifié.",
                "Dans le gros intestin, une grande partie de l'eau restante est aussi récupérée par l'organisme. Ce qui n'a pas été digéré forme les selles (les excréments), rejetées par l'anus.",
              ],
            },
          ],
          keyPoints: [
            "Trajet des aliments : bouche, œsophage, estomac, intestin grêle, gros intestin, anus.",
            "Glandes digestives : glandes salivaires, foie (bile) et pancréas ; elles ne sont pas traversées par les aliments.",
            "Action mécanique : mastication dans la bouche, brassage dans l'estomac.",
            "Action chimique : les enzymes des sucs digestifs découpent les grosses molécules en nutriments.",
            "Amidon → glucose ; protides → acides aminés ; lipides → acides gras et glycérol.",
            "La digestion chimique se termine dans l'intestin grêle.",
            "Le microbiote du gros intestin dégrade une partie des fibres et protège contre des microbes.",
          ],
          example: {
            statement: "Un élève mélange de l'empois d'amidon et de la salive dans un tube A, et de l'empois d'amidon et de l'eau dans un tube B ; les deux tubes sont à 37 °C. Toutes les 5 minutes, il prélève une goutte de chaque tube et la teste à l'eau iodée. Tube A : bleu-violet à 0 min, bleu pâle à 5 min, jaune orangé à 10 min. Tube B : bleu-violet à chaque fois. Interprétez.",
            solution: [
              "Je repère le témoin : le tube B, qui ne diffère du tube A que par l'absence de salive.",
              "Je rappelle le test : le bleu-violet indique la présence d'amidon, le jaune orangé son absence.",
              "Dans le tube A, l'amidon diminue (bleu pâle à 5 min) puis disparaît (jaune orangé à 10 min). Dans le tube B, il reste présent.",
              "La seule différence entre les tubes est la salive : c'est elle qui a fait disparaître l'amidon, en le transformant en sucres plus petits.",
              "Conclusion : la salive contient une enzyme, l'amylase, qui commence la digestion de l'amidon.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici une liste d'organes : estomac, foie, bouche, gros intestin, œsophage, pancréas, intestin grêle, anus. 1) Rangez dans l'ordre les organes traversés par les aliments. 2) Quels organes de la liste ne sont jamais traversés par les aliments ?",
              hint: "Le foie et le pancréas fabriquent des sucs : comment sont-ils reliés au tube digestif ?",
              solution: [
                "1) Bouche, œsophage, estomac, intestin grêle, gros intestin, anus.",
                "2) Le foie et le pancréas : ce sont des glandes digestives. Ils déversent leurs sucs (la bile et le suc pancréatique) dans l'intestin grêle par des canaux.",
              ],
            },
            {
              level: 2,
              statement: "Un élève prépare quatre tubes contenant tous de l'empois d'amidon, et les laisse 20 minutes : tube 1 : salive, à 37 °C ; tube 2 : eau, à 37 °C ; tube 3 : salive, à 0 °C (dans la glace) ; tube 4 : salive bouillie puis refroidie, à 37 °C. Il teste ensuite chaque tube à l'eau iodée. Résultats : tube 1, jaune orangé ; tubes 2, 3 et 4, bleu-violet. 1) Dans quel tube l'amidon a-t-il disparu ? 2) Que montre la comparaison des tubes 1 et 2, puis 1 et 3, puis 1 et 4 ? 3) Concluez sur les conditions d'action de la salive.",
              hint: "Pour chaque comparaison, cherchez le seul facteur qui change.",
              solution: [
                "1) Seulement dans le tube 1 : l'eau iodée y reste jaune orangé.",
                "2) Tubes 1 et 2 (seule différence : la salive) : c'est la salive qui transforme l'amidon.",
                "Tubes 1 et 3 (seule différence : la température) : à 0 °C, la salive n'agit pas, ou beaucoup trop lentement pour être observée en 20 minutes.",
                "Tubes 1 et 4 (seule différence : la salive a été bouillie) : une salive bouillie n'agit plus. L'ébullition a détruit son enzyme.",
                "3) L'enzyme de la salive agit à la température du corps, 37 °C ; elle n'agit pas dans le froid et elle est détruite par l'ébullition.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lucas mange une tartine de pain complet beurrée et une tranche de jambon. Décrivez, organe par organe, ce que deviennent l'amidon du pain, les lipides du beurre et les protides du jambon, jusqu'à l'intestin grêle. Précisez à chaque étape l'action mécanique et l'action chimique. Dites enfin ce que deviennent les fibres du pain complet.",
              hint: "Suivez le trajet : bouche, œsophage, estomac, intestin grêle, gros intestin. Pour chaque organe, demandez-vous quel suc y est présent.",
              solution: [
                "Bouche : les dents broient la tartine et le jambon (action mécanique). L'amylase de la salive commence à découper l'amidon (action chimique).",
                "Œsophage : il transporte le bol alimentaire jusqu'à l'estomac, sans digestion chimique importante.",
                "Estomac : ses muscles brassent les aliments (action mécanique) avec le suc gastrique, qui commence la digestion des protides du jambon (action chimique).",
                "Intestin grêle : la bile disperse les lipides du beurre en gouttelettes ; les enzymes des sucs pancréatique et intestinal terminent la digestion. L'amidon devient du glucose, les protides des acides aminés, les lipides des acides gras et du glycérol.",
                "Les fibres du pain complet ne sont pas digérées par nos enzymes : elles arrivent dans le gros intestin, où le microbiote en dégrade une partie. Le reste est éliminé dans les selles.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque organe à son rôle dans la digestion.",
            pairs: [
              { left: "Glandes salivaires", right: "Produisent la salive, qui contient de l'amylase" },
              { left: "Estomac", right: "Brasse les aliments avec un suc très acide" },
              { left: "Foie", right: "Fabrique la bile, qui disperse les graisses" },
              { left: "Pancréas", right: "Déverse un suc riche en enzymes dans l'intestin grêle" },
              { left: "Intestin grêle", right: "Organe où la digestion chimique se termine" },
              { left: "Gros intestin", right: "Abrite le microbiote et récupère une partie de l'eau" },
            ],
          },
          quiz: [
            {
              q: "Où la digestion chimique des aliments se termine-t-elle ?",
              options: ["Dans l'intestin grêle", "Dans l'estomac", "Dans le gros intestin", "Dans le foie"],
              answer: 0,
              why: "Les sucs pancréatique et intestinal, aidés par la bile, terminent la digestion dans l'intestin grêle.",
            },
            {
              q: "Quel est le rôle d'une enzyme digestive ?",
              options: ["Brasser les aliments dans l'estomac", "Transporter les nutriments dans le sang", "Découper de grosses molécules", "Tuer tous les microbes de l'intestin"],
              answer: 2,
              why: "Une enzyme découpe les grosses molécules des aliments en petites molécules, les nutriments.",
            },
            {
              q: "Que devient l'amidon à la fin de la digestion ?",
              options: ["Des acides aminés", "Des acides gras", "De l'amidon plus fin", "Du glucose"],
              answer: 3,
              why: "Les enzymes découpent l'amidon, un gros glucide, en glucose.",
            },
            {
              q: "La bile, produite par le foie :",
              options: ["contient l'amylase", "disperse les graisses", "digère les protides", "tue les bactéries du microbiote"],
              answer: 1,
              why: "La bile ne contient pas d'enzyme : elle disperse les lipides en fines gouttelettes, ce qui facilite leur digestion.",
            },
            {
              q: "Quel rôle joue le microbiote intestinal ?",
              options: ["Il fabrique la bile", "Il absorbe la plupart des nutriments du repas", "Il dégrade une partie des fibres", "Il broie les aliments"],
              answer: 2,
              why: "Les bactéries du gros intestin dégradent une partie des fibres que nos enzymes ne digèrent pas.",
            },
          ],
          trap: "Croire que les aliments passent par le foie ou le pancréas, ou que l'estomac suffit à digérer. Les aliments ne circulent que dans le tube digestif, et la digestion chimique se termine dans l'intestin grêle, grâce aux sucs du pancréas et de l'intestin et à la bile.",
          method: "Construisez un tableau à trois colonnes (organe, action mécanique, action chimique) avec une ligne par organe du trajet : vous aurez une fiche de révision complète et vous ne confondrez plus les deux actions.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'absorption-intestinale',
          title: 'Le passage des nutriments dans le sang',
          minutes: 30,
          objectives: [
            "Définir l'absorption intestinale comme le passage des nutriments de l'intestin grêle vers le sang.",
            "Relier les caractéristiques de l'intestin grêle (longueur, plis, villosités, capillaires) à l'efficacité de l'absorption.",
            "Exploiter une expérience de modélisation avec un boudin de cellophane et en dégager les limites.",
            "Expliquer que le sang distribue les nutriments à toutes les cellules de l'organisme.",
          ],
          course: [
            {
              heading: "De l'intestin au sang",
              paragraphs: [
                "À la fin de la digestion, l'intestin grêle contient un liquide riche en nutriments : glucose, acides aminés, acides gras, mais aussi eau, sels minéraux et vitamines. Ces nutriments traversent la paroi de l'intestin grêle et passent dans le sang : c'est l'absorption intestinale. Ils quittent alors le tube digestif pour entrer dans le milieu intérieur de l'organisme.",
                "Les grosses molécules non digérées, comme les fibres ou un reste d'amidon qui aurait échappé aux enzymes, ne traversent pas la paroi : elles poursuivent leur trajet vers le gros intestin. Une analogie : la paroi de l'intestin se comporte comme une passoire très fine, qui laisse passer les petites molécules et retient les grosses.",
              ],
              box: { label: "Définition", text: "L'absorption intestinale est le passage des nutriments de l'intestin grêle vers le sang, à travers la paroi de l'intestin." },
            },
            {
              heading: "Un modèle : le boudin de cellophane",
              paragraphs: [
                "On remplit un boudin de cellophane (un tube à dialyse) d'un mélange d'amidon et de glucose, puis on le plonge dans un bécher d'eau. Le boudin représente l'intestin grêle, sa membrane représente la paroi intestinale, et l'eau du bécher représente le sang. Au bout d'une demi-heure, on teste l'eau du bécher.",
                "L'eau iodée ne bleuit pas : l'amidon n'est pas sorti du boudin. La liqueur de Fehling, chauffée, donne un précipité rouge brique : le glucose, lui, est passé dans l'eau. Seules les petites molécules traversent la membrane. Comme tout modèle, celui-ci a ses limites : la vraie paroi est vivante, formée de cellules, parcourue de vaisseaux sanguins, et elle est bien plus efficace.",
              ],
              box: { label: "Repère", text: "Liqueur de Fehling chauffée : précipité rouge brique en présence de glucose. Eau iodée : bleu-violet en présence d'amidon." },
            },
            {
              heading: "Un intestin fait pour absorber",
              paragraphs: [
                "L'intestin grêle mesure environ 6 mètres de long chez l'adulte, pour un diamètre de 2 à 3 centimètres. Sa paroi interne n'est pas lisse : elle forme des plis, couverts de millions de petits replis en forme de doigts, les villosités intestinales, hautes d'environ 1 millimètre. Les cellules qui recouvrent les villosités portent elles-mêmes des microvillosités, visibles seulement au microscope électronique.",
                "Ces replis multiplient la surface d'échange : elle est au moins plusieurs dizaines de fois plus grande que celle d'un tube lisse de même taille. Chaque villosité est aussi parcourue par un réseau de vaisseaux sanguins très fins, les capillaires, et sa paroi est très mince, formée d'une seule couche de cellules : les nutriments n'ont qu'une très courte distance à parcourir pour atteindre le sang.",
              ],
              box: { label: "À retenir", text: "L'absorption est efficace car la surface d'échange est très grande (longueur, plis, villosités, microvillosités), la paroi très fine et parcourue par de nombreux capillaires sanguins." },
            },
            {
              heading: "Le sang distribue les nutriments",
              paragraphs: [
                "Une fois dans les capillaires des villosités, les nutriments sont emportés par le sang. Ils passent d'abord par le foie, qui en met une partie en réserve, comme une partie du glucose, puis le sang les distribue à tous les organes. Une partie des lipides emprunte d'abord un autre liquide du corps, la lymphe, avant de rejoindre le sang.",
                "Ainsi, le glucose d'une tartine mangée le matin peut se retrouver un peu plus tard dans une cellule d'un muscle de votre jambe. Les cellules utilisent ces nutriments pour produire de l'énergie, avec le dioxygène, et pour fabriquer leur propre matière : c'est la raison d'être de la digestion.",
              ],
            },
          ],
          keyPoints: [
            "L'absorption intestinale est le passage des nutriments de l'intestin grêle vers le sang.",
            "Seules les petites molécules (nutriments) traversent la paroi ; les grosses, comme les fibres, continuent vers le gros intestin.",
            "Le boudin de cellophane modélise la paroi : le glucose la traverse, l'amidon non.",
            "L'intestin grêle est long (environ 6 m) et sa paroi porte plis, villosités et microvillosités : sa surface d'échange est immense.",
            "La paroi des villosités est très fine et parcourue de capillaires sanguins.",
            "Le sang distribue ensuite les nutriments à toutes les cellules du corps.",
          ],
          example: {
            statement: "Dans la maladie cœliaque, une réaction au gluten (une protéine du blé) abîme les villosités intestinales, qui deviennent beaucoup plus courtes. Les personnes touchées et non soignées peuvent maigrir alors qu'elles mangent normalement. Expliquez pourquoi.",
            solution: [
              "Je rappelle le rôle des villosités : elles multiplient la surface d'échange entre l'intestin grêle et le sang.",
              "Si elles sont abîmées et raccourcies, la surface d'échange diminue fortement.",
              "Moins de nutriments passent alors dans le sang, même si la digestion a bien eu lieu ; une partie est éliminée avec les selles.",
              "Les cellules du corps reçoivent moins de nutriments qu'il ne leur en faut : l'organisme puise dans ses réserves.",
              "Conclusion : la personne maigrit parce que l'absorption intestinale est devenue insuffisante, et non parce qu'elle mange trop peu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez le texte : « Les nutriments passent de l'... vers le ... : c'est l'.... La paroi de l'intestin porte des replis en forme de doigts, les .... Ils contiennent de nombreux vaisseaux sanguins très fins, les .... »",
              hint: "Relisez la définition encadrée du cours, puis la partie sur l'intestin.",
              solution: [
                "Les nutriments passent de l'intestin grêle vers le sang : c'est l'absorption intestinale.",
                "La paroi de l'intestin porte des replis en forme de doigts, les villosités intestinales.",
                "Ils contiennent de nombreux vaisseaux sanguins très fins, les capillaires.",
              ],
            },
            {
              level: 2,
              statement: "On plonge un boudin de cellophane contenant de l'amidon et du glucose dans un bécher d'eau distillée. On teste l'eau du bécher au début, puis après 30 minutes. Au début : l'eau iodée reste jaune orangé ; la liqueur de Fehling chauffée reste bleue. Après 30 minutes : l'eau iodée reste jaune orangé ; la liqueur de Fehling chauffée donne un précipité rouge brique. 1) Que représentent le boudin, sa membrane et l'eau du bécher ? 2) Interprétez les résultats. 3) Citez une limite de ce modèle.",
              hint: "Associez chaque réactif à la molécule qu'il détecte.",
              solution: [
                "1) Le boudin représente l'intestin grêle, sa membrane la paroi intestinale, et l'eau du bécher le sang.",
                "2) Au début, l'eau du bécher ne contient ni amidon ni glucose.",
                "Après 30 minutes, elle contient du glucose (précipité rouge brique) mais toujours pas d'amidon (pas de bleu-violet).",
                "Le glucose, petite molécule, a traversé la membrane ; l'amidon, grosse molécule, est resté dans le boudin. C'est ce qui se passe dans l'intestin : seuls les nutriments passent dans le sang.",
                "3) Limites possibles : la membrane n'est pas vivante, elle n'a ni villosités ni capillaires, et l'eau du bécher ne circule pas comme le sang.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données simplifiées. On modélise l'intestin grêle par un tube de 6 m de long et de 2,5 cm de diamètre. 1) Calculez sa surface intérieure s'il était lisse, avec la formule : surface = π × diamètre × longueur (prenez π ≈ 3,14 et travaillez en mètres). 2) Dans ce modèle, les plis multiplient la surface par 3, les villosités par 10, et les microvillosités par 20 (valeurs simplifiées). Calculez la surface obtenue. 3) Comparez-la à celle d'une salle de classe de 60 m². 4) Expliquez en quoi ce résultat montre que l'intestin grêle est adapté à l'absorption.",
              hint: "Convertissez d'abord le diamètre en mètres : 2,5 cm = 0,025 m.",
              solution: [
                "1) Surface lisse : 3,14 × 0,025 × 6 = 0,471 m², soit environ 0,47 m².",
                "2) Avec les plis : 0,471 × 3 = 1,413 m². Avec les villosités : 1,413 × 10 = 14,13 m². Avec les microvillosités : 14,13 × 20 = 282,6 m².",
                "La surface obtenue est d'environ 283 m², soit 600 fois la surface du tube lisse (3 × 10 × 20 = 600).",
                "3) 282,6 ÷ 60 ≈ 4,7 : dans ce modèle, la surface d'échange équivaut à près de cinq salles de classe.",
                "4) Grâce à ses replis, l'intestin grêle offre une surface d'échange immense dans un petit volume du ventre. Avec sa paroi fine et ses capillaires, il permet le passage rapide d'une grande quantité de nutriments dans le sang.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le parcours du glucose d'une tartine, de la bouche jusqu'à un muscle.",
            items: [
              "Les dents broient le pain et la salive commence à digérer l'amidon.",
              "Dans l'intestin grêle, les enzymes achèvent de transformer l'amidon en glucose.",
              "Le glucose traverse la paroi d'une villosité intestinale.",
              "Il entre dans un capillaire sanguin de la villosité.",
              "Le sang le transporte jusqu'au foie, puis vers tous les organes.",
              "Une cellule d'un muscle utilise le glucose pour produire de l'énergie.",
            ],
          },
          quiz: [
            {
              q: "Où se fait l'absorption des nutriments ?",
              options: ["Dans l'estomac", "Dans la bouche", "Dans le gros intestin", "Dans l'intestin grêle"],
              answer: 3,
              why: "Les nutriments traversent la paroi de l'intestin grêle, riche en villosités, pour passer dans le sang.",
            },
            {
              q: "Que sont les villosités intestinales ?",
              options: ["Des replis en forme de doigts de la paroi", "Des bactéries du microbiote qui vivent dans l'intestin", "Des enzymes du suc intestinal", "Des glandes qui fabriquent la bile"],
              answer: 0,
              why: "Ce sont de petits replis de la paroi de l'intestin grêle, qui multiplient la surface d'échange.",
            },
            {
              q: "Dans le modèle du boudin de cellophane, que représente l'eau du bécher ?",
              options: ["L'intestin grêle", "Le sang", "La paroi intestinale", "Les aliments"],
              answer: 1,
              why: "Les molécules qui passent dans l'eau du bécher sont celles qui, dans le corps, passeraient dans le sang.",
            },
            {
              q: "Quelle molécule ne traverse pas la membrane du boudin ?",
              options: ["Le glucose", "L'eau", "L'amidon"],
              answer: 2,
              why: "L'amidon est une trop grosse molécule : il doit d'abord être digéré en glucose pour être absorbé.",
            },
            {
              q: "Pourquoi l'intestin grêle absorbe-t-il efficacement les nutriments ?",
              options: ["Sa paroi est épaisse, rigide et protégée par une couche de graisse", "Sa surface est immense et sa paroi très fine", "Il ne contient aucun vaisseau sanguin", "Il est recouvert de dents"],
              answer: 1,
              why: "Plis, villosités et microvillosités donnent une très grande surface, et la paroi fine est parcourue de capillaires.",
            },
          ],
          trap: "Confondre digestion et absorption, ou croire que les aliments eux-mêmes passent dans le sang. Ce sont seulement les nutriments, petites molécules issues de la digestion, qui traversent la paroi de l'intestin grêle.",
          method: "Sur un schéma de villosité, légendez toujours trois éléments : la cavité de l'intestin (côté nutriments), la paroi très fine et les capillaires sanguins. Tracez ensuite une flèche qui va de la cavité vers le sang, et écrivez « absorption » dessus.",
        },
      ],
    },
    /* ==================================================================== */
    /* RESPIRATION ET CIRCULATION CHEZ L'ÊTRE HUMAIN                        */
    /* ==================================================================== */
    {
      id: 'respiration-circulation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'appareil-respiratoire',
          title: 'L\'appareil respiratoire et les échanges gazeux',
          minutes: 30,
          objectives: [
            "Nommer les organes de l'appareil respiratoire et décrire le trajet de l'air.",
            "Décrire les mouvements respiratoires (inspiration et expiration) et le rôle du diaphragme.",
            "Comparer la composition de l'air inspiré et celle de l'air expiré.",
            "Expliquer les échanges gazeux entre l'air et le sang au niveau des alvéoles pulmonaires.",
          ],
          course: [
            {
              heading: "Le trajet de l'air",
              paragraphs: [
                "L'air entre par le nez (ou par la bouche), passe dans le pharynx (l'arrière-gorge), puis dans le larynx, où se trouvent les cordes vocales, et dans la trachée, un tube renforcé par des anneaux de cartilage. La trachée se divise en deux bronches, une pour chaque poumon. Les bronches se ramifient en bronchioles de plus en plus fines, comme les branches d'un arbre, qui se terminent par de minuscules sacs : les alvéoles pulmonaires.",
                "Le nez réchauffe, humidifie et filtre l'air. Les voies respiratoires sont tapissées d'un mucus collant qui retient les poussières et les microbes ; de minuscules cils les font ensuite remonter vers la gorge. La fumée de tabac paralyse ces cils et irrite les bronches, ce qui explique en partie la toux des fumeurs.",
              ],
              box: { label: "Repère", text: "Trajet de l'air : nez → pharynx → larynx → trachée → bronches → bronchioles → alvéoles pulmonaires." },
            },
            {
              heading: "Inspiration et expiration",
              paragraphs: [
                "L'air entre dans les poumons et en sort grâce aux mouvements respiratoires : c'est la ventilation pulmonaire. Lors de l'inspiration, le diaphragme, un muscle en forme de dôme situé sous les poumons, se contracte et s'abaisse, et des muscles soulèvent les côtes : le volume de la cage thoracique augmente, les poumons se dilatent et l'air entre. Lors de l'expiration au repos, le diaphragme se relâche et remonte, les côtes s'abaissent : le volume diminue et l'air est chassé.",
                "Au repos, un adolescent fait environ 12 à 20 mouvements respiratoires par minute, et chaque inspiration fait entrer de l'ordre d'un demi-litre d'air. Pendant un effort, le rythme et le volume de chaque mouvement augmentent.",
              ],
            },
            {
              heading: "Air inspiré, air expiré",
              paragraphs: [
                "En comparant l'air qui entre et l'air qui sort, on constate que l'air expiré contient moins de dioxygène (environ 16 % au lieu de 21 %) et beaucoup plus de dioxyde de carbone (environ 4 % au lieu de 0,04 %). Le diazote n'est pas utilisé. L'air expiré est aussi plus chaud et plus humide : soufflez sur une vitre froide, elle se couvre de buée.",
                "On peut le vérifier simplement : quand on souffle avec une paille dans de l'eau de chaux, elle se trouble, car l'air expiré est riche en dioxyde de carbone. L'organisme a donc prélevé une partie du dioxygène de l'air et y a rejeté du dioxyde de carbone.",
              ],
            },
            {
              heading: "Les échanges gazeux dans les alvéoles",
              paragraphs: [
                "Les deux poumons contiennent ensemble plusieurs centaines de millions d'alvéoles. Leur paroi est extrêmement fine, moins d'un millième de millimètre, et elle est entourée d'un réseau serré de capillaires sanguins. Mises à plat, toutes les alvéoles couvriraient de l'ordre de 70 à 100 m², la surface d'un grand appartement.",
                "Dans les alvéoles, le dioxygène de l'air passe dans le sang des capillaires ; le dioxyde de carbone apporté par le sang passe dans l'air de l'alvéole, puis il est rejeté à l'expiration. Le sang qui quitte les poumons est donc riche en dioxygène et pauvre en dioxyde de carbone. Les poumons ne fabriquent pas de dioxygène : ce sont des lieux d'échanges entre l'air et le sang.",
              ],
              box: { label: "À retenir", text: "Les alvéoles pulmonaires forment une surface d'échange très grande, très fine et très irriguée : le dioxygène passe de l'air au sang, le dioxyde de carbone passe du sang à l'air." },
            },
          ],
          keyPoints: [
            "Trajet de l'air : nez, pharynx, larynx, trachée, bronches, bronchioles, alvéoles.",
            "Inspiration : le diaphragme se contracte et s'abaisse, les côtes se soulèvent, l'air entre.",
            "Expiration au repos : le diaphragme se relâche et remonte, l'air est chassé.",
            "L'air expiré contient environ 16 % de dioxygène et 4 % de dioxyde de carbone.",
            "Les alvéoles offrent une surface d'environ 70 à 100 m², avec une paroi très fine entourée de capillaires.",
            "Dans les alvéoles, le dioxygène passe de l'air au sang, le dioxyde de carbone du sang à l'air.",
          ],
          example: {
            statement: "Voici la composition de l'air inspiré et de l'air expiré par une personne au repos (valeurs arrondies) : dioxygène, 21 % dans l'air inspiré et 16 % dans l'air expiré ; dioxyde de carbone, 0,04 % dans l'air inspiré et 4 % dans l'air expiré. Que se passe-t-il dans les poumons ?",
            solution: [
              "Dioxygène : 16 - 21 = -5. L'air a perdu 5 points de dioxygène en passant dans les poumons.",
              "Dioxyde de carbone : 4 - 0,04 = 3,96, soit environ 4 points de plus. Il y en a environ 100 fois plus dans l'air expiré (4 ÷ 0,04 = 100).",
              "Interprétation : dans les alvéoles, une partie du dioxygène de l'air est passée dans le sang, et du dioxyde de carbone est passé du sang dans l'air.",
              "Je remarque que l'air expiré contient encore beaucoup de dioxygène : seule une partie est prélevée.",
              "Conclusion : les poumons sont le lieu d'échanges gazeux entre l'air et le sang.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Rangez dans l'ordre les organes traversés par l'air inspiré : bronchiole, trachée, nez, alvéole, larynx, bronche, pharynx.",
              hint: "La trachée se divise en bronches, qui se ramifient de plus en plus finement.",
              solution: [
                "Ordre : nez, pharynx, larynx, trachée, bronche, bronchiole, alvéole.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Au repos, Sami fait 15 mouvements respiratoires par minute, et chaque inspiration fait entrer 0,5 L d'air. 1) Calculez le volume d'air qui entre dans ses poumons en une minute, puis en une heure. 2) L'air inspiré contient 21 % de dioxygène et l'air expiré 16 %. On admet que le volume d'air expiré est égal au volume inspiré. Calculez le volume de dioxygène prélevé pour 1 L d'air respiré, puis en une minute. 3) Pendant une course, Sami fait 40 mouvements par minute de 1,5 L chacun. Calculez le nouveau volume d'air par minute et dites combien de fois il est plus grand qu'au repos.",
              hint: "21 % - 16 % = 5 % : pour 1 L d'air, cela fait 5 centièmes de litre.",
              solution: [
                "1) En une minute : 15 × 0,5 = 7,5 L. En une heure : 7,5 × 60 = 450 L.",
                "2) Pour 1 L d'air : 21 % - 16 % = 5 %, soit 0,05 L, c'est-à-dire 50 mL de dioxygène.",
                "En une minute : 7,5 × 50 = 375 mL de dioxygène, soit 0,375 L.",
                "3) Pendant la course : 40 × 1,5 = 60 L par minute.",
                "60 ÷ 7,5 = 8 : le volume d'air par minute est 8 fois plus grand qu'au repos.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un élève fabrique un modèle : une bouteille en plastique dont le fond a été remplacé par une membrane en caoutchouc ; dans le goulot, un tube en Y relié à deux ballons de baudruche placés à l'intérieur de la bouteille. Quand il tire la membrane vers le bas, les ballons se gonflent ; quand il la relâche, ils se dégonflent. 1) Que représentent la bouteille, la membrane, le tube en Y et les ballons ? 2) Expliquez, à l'aide de ce modèle, le mécanisme de l'inspiration. 3) Citez deux limites de ce modèle.",
              hint: "Pensez au muscle situé sous les poumons, et à ce qui change dans la cage thoracique quand il s'abaisse.",
              solution: [
                "1) La bouteille représente la cage thoracique, la membrane le diaphragme, le tube en Y la trachée et les deux bronches, les ballons les poumons.",
                "2) Quand on tire la membrane vers le bas, comme le diaphragme qui se contracte et s'abaisse, le volume à l'intérieur de la bouteille augmente.",
                "Les ballons se dilatent et l'air extérieur entre par le tube : c'est l'inspiration. Quand on relâche la membrane, le volume diminue et l'air ressort : c'est l'expiration.",
                "3) Limites : la bouteille est rigide, alors que les côtes se soulèvent ; les ballons sont creux et lisses, alors que les poumons contiennent des millions d'alvéoles ; il n'y a ni sang ni échanges gazeux dans le modèle.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos connaissances sur la respiration humaine.",
            statements: [
              { text: "Les poumons fabriquent du dioxygène.", true: false, why: "Ils ne fabriquent rien : ce sont des lieux d'échanges de gaz entre l'air et le sang." },
              { text: "L'air expiré contient encore du dioxygène.", true: true, why: "Il en contient environ 16 % : seule une partie du dioxygène inspiré est prélevée." },
              { text: "Lors de l'inspiration, le diaphragme se contracte et s'abaisse.", true: true, why: "Le volume de la cage thoracique augmente et l'air entre." },
              { text: "L'air entre dans les poumons parce qu'ils se gonflent tout seuls.", true: false, why: "Les poumons n'ont pas de muscles : ce sont le diaphragme et les muscles des côtes qui agrandissent la cage thoracique." },
              { text: "La trachée conduit l'air directement dans les alvéoles.", true: false, why: "L'air passe d'abord par les bronches, puis par les bronchioles." },
              { text: "La paroi des alvéoles mesure moins d'un millième de millimètre d'épaisseur.", true: true, why: "Cette paroi extrêmement fine facilite le passage des gaz." },
              { text: "Dans les alvéoles, le dioxyde de carbone passe de l'air au sang.", true: false, why: "C'est l'inverse : il passe du sang à l'air, puis il est rejeté à l'expiration." },
            ],
          },
          quiz: [
            {
              q: "Quel muscle joue le rôle principal dans l'inspiration ?",
              options: ["Le cœur", "Le muscle de l'estomac", "Le diaphragme", "Le biceps"],
              answer: 2,
              why: "En se contractant, le diaphragme s'abaisse et augmente le volume de la cage thoracique.",
            },
            {
              q: "Où ont lieu les échanges gazeux entre l'air et le sang ?",
              options: ["Dans la trachée", "Dans les alvéoles", "Dans les bronches", "Dans le larynx et le pharynx"],
              answer: 1,
              why: "Seules les alvéoles ont une paroi assez fine, entourée de capillaires, pour permettre ces échanges.",
            },
            {
              q: "Quelle est, environ, la teneur en dioxygène de l'air expiré ?",
              options: ["16 %", "21 %", "0 %", "4 %"],
              answer: 0,
              why: "L'air inspiré en contient 21 % ; l'organisme n'en prélève qu'une partie.",
            },
            {
              q: "Quel est le bon trajet de l'air ?",
              options: ["Nez, trachée, larynx, bronches, alvéoles", "Nez, bronches, trachée, larynx, alvéoles", "Nez, larynx, bronches, trachée, alvéoles", "Nez, larynx, trachée, bronches, alvéoles"],
              answer: 3,
              why: "L'air passe par le larynx, puis la trachée, qui se divise en bronches menant aux alvéoles.",
            },
            {
              q: "Pourquoi l'eau de chaux se trouble-t-elle quand on souffle dedans ?",
              options: ["L'air expiré est riche en dioxyde de carbone", "L'air expiré contient de la vapeur d'eau chaude", "L'air expiré ne contient plus de dioxygène", "L'air expiré contient des microbes"],
              answer: 0,
              why: "L'eau de chaux se trouble en présence de dioxyde de carbone, environ 100 fois plus abondant dans l'air expiré.",
            },
          ],
          trap: "Croire que l'air expiré ne contient plus de dioxygène, ou que les poumons « transforment » le dioxygène en dioxyde de carbone. L'air expiré contient encore environ 16 % de dioxygène, et le dioxyde de carbone rejeté est produit par les cellules de tout le corps, pas par les poumons.",
          method: "Pour décrire un échange gazeux, utilisez toujours la même phrase en deux parties : « Le dioxygène passe de ... vers ... ; le dioxyde de carbone passe de ... vers ... ». Vérifiez ensuite que les deux gaz vont bien en sens inverse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'circulation-sanguine',
          title: 'Le cœur et la circulation du sang',
          minutes: 35,
          objectives: [
            "Décrire l'organisation du cœur : deux oreillettes, deux ventricules, des valvules et une cloison étanche.",
            "Décrire le trajet du sang dans la circulation pulmonaire et dans la circulation générale.",
            "Distinguer les artères, les veines et les capillaires.",
            "Calculer un débit cardiaque à partir de la fréquence cardiaque et du volume éjecté.",
          ],
          course: [
            {
              heading: "Le sang circule dans un circuit fermé",
              paragraphs: [
                "Le sang circule en permanence dans un ensemble de tuyaux, les vaisseaux sanguins, sans jamais en sortir (sauf en cas de blessure) : c'est un circuit fermé. Il est mis en mouvement par une pompe, le cœur. Le médecin anglais William Harvey a démontré en 1628 que le sang circule toujours dans le même sens et revient au cœur, ce qui n'était pas admis à son époque.",
                "Le corps d'un adulte contient environ 5 litres de sang. Le sang est formé d'un liquide, le plasma, qui transporte notamment les nutriments, et de cellules, parmi lesquelles les globules rouges, qui transportent le dioxygène.",
              ],
            },
            {
              heading: "Le cœur, une double pompe",
              paragraphs: [
                "Le cœur est un muscle creux, à peu près gros comme le poing, situé dans la cage thoracique, entre les deux poumons, un peu décalé vers la gauche. Il est formé de deux moitiés, la droite et la gauche, séparées par une cloison étanche : le sang ne passe jamais directement d'une moitié à l'autre. Chaque moitié comprend une oreillette, en haut, qui reçoit le sang, et un ventricule, en bas, qui l'éjecte. Attention : sur un schéma du cœur vu de face, la moitié droite est dessinée à gauche de la feuille.",
                "Au repos, le cœur se contracte environ 60 à 100 fois par minute chez l'adolescent : c'est la fréquence cardiaque, que l'on mesure en prenant le pouls au poignet ou au cou. Des valvules, sortes de clapets, s'ouvrent et se ferment à chaque battement : elles empêchent le sang de revenir en arrière et l'obligent à circuler dans un seul sens. Leur fermeture produit les bruits du cœur que le médecin écoute au stéthoscope.",
              ],
              box: { label: "Repère", text: "Le cœur : deux oreillettes, qui reçoivent le sang ; deux ventricules, qui l'éjectent ; une cloison étanche entre la moitié droite et la moitié gauche ; des valvules qui imposent un sens unique." },
            },
            {
              heading: "Artères, veines et capillaires",
              paragraphs: [
                "Les artères partent du cœur et emmènent le sang vers les organes ; leur paroi est épaisse et élastique. Les veines ramènent le sang des organes vers le cœur. Entre les deux, dans chaque organe, le sang circule dans des capillaires, des vaisseaux extrêmement fins, à la paroi très mince : c'est là que se font les échanges entre le sang et les cellules.",
                "Une artère n'est pas définie par la richesse en dioxygène de son sang, mais par son sens : elle part du cœur. Ainsi, l'artère pulmonaire transporte un sang pauvre en dioxygène, et les veines pulmonaires un sang riche en dioxygène.",
              ],
              box: { label: "Définition", text: "Artère : vaisseau qui part du cœur. Veine : vaisseau qui revient au cœur. Capillaire : vaisseau très fin, situé dans les organes, où se font les échanges avec les cellules." },
            },
            {
              heading: "Deux circulations",
              paragraphs: [
                "La circulation pulmonaire, ou petite circulation : le ventricule droit envoie le sang pauvre en dioxygène vers les poumons par l'artère pulmonaire. Dans les poumons, le sang se charge en dioxygène et se débarrasse de dioxyde de carbone, puis il revient à l'oreillette gauche par les veines pulmonaires.",
                "La circulation générale, ou grande circulation : le ventricule gauche envoie le sang riche en dioxygène vers tous les organes par l'aorte, la plus grosse artère du corps. Dans les organes, le sang cède du dioxygène et se charge en dioxyde de carbone, puis il revient à l'oreillette droite par les veines caves. Pour faire un tour complet, le sang traverse donc deux fois le cœur : on parle de double circulation.",
                "Le ventricule gauche, qui envoie le sang dans tout le corps, a une paroi musculaire plus épaisse que le ventricule droit. Au repos, chez l'adulte, chaque ventricule éjecte environ 70 mL de sang à chaque battement. Le volume de sang éjecté par un ventricule en une minute est le débit cardiaque : environ 5 litres par minute au repos, soit à peu près tout le sang du corps chaque minute.",
              ],
              box: { label: "Formule", text: "Débit cardiaque (en L/min) = fréquence cardiaque (en battements par minute) × volume éjecté à chaque battement (en L)." },
            },
          ],
          keyPoints: [
            "Le sang circule dans un circuit fermé, toujours dans le même sens, mis en mouvement par le cœur.",
            "Le cœur a deux moitiés séparées par une cloison étanche ; chacune a une oreillette et un ventricule.",
            "Les valvules empêchent le sang de revenir en arrière.",
            "Artère : part du cœur. Veine : revient au cœur. Capillaire : lieu des échanges dans les organes.",
            "Circulation pulmonaire : ventricule droit, artère pulmonaire, poumons, veines pulmonaires, oreillette gauche.",
            "Circulation générale : ventricule gauche, aorte, organes, veines caves, oreillette droite.",
            "Débit cardiaque = fréquence cardiaque × volume éjecté ; environ 5 L/min au repos chez l'adulte.",
          ],
          example: {
            statement: "Au repos, le cœur de Lina bat 75 fois par minute et chaque ventricule éjecte 0,07 L de sang par battement. 1) Calculez son débit cardiaque. 2) Elle possède environ 5 L de sang. Combien de temps faut-il, environ, pour que l'équivalent de tout son sang passe par son ventricule gauche ?",
            solution: [
              "1) J'applique la formule : débit cardiaque = fréquence cardiaque × volume éjecté.",
              "Débit = 75 × 0,07 = 5,25 L/min.",
              "2) Je divise le volume de sang par le débit : 5 ÷ 5,25 ≈ 0,95 minute.",
              "Je convertis : 0,95 × 60 ≈ 57 secondes.",
              "Conclusion : au repos, l'équivalent de tout le sang de Lina passe par son ventricule gauche en un peu moins d'une minute.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque vaisseau, indiquez s'il s'agit d'une artère ou d'une veine, et si le sang qu'il transporte est riche ou pauvre en dioxygène : l'aorte, les veines caves, l'artère pulmonaire, les veines pulmonaires.",
              hint: "Demandez-vous d'abord si le vaisseau part du cœur ou y revient, puis d'où vient le sang qu'il transporte.",
              solution: [
                "L'aorte : artère (elle part du ventricule gauche) ; sang riche en dioxygène.",
                "Les veines caves : veines (elles reviennent à l'oreillette droite) ; sang pauvre en dioxygène, venant des organes.",
                "L'artère pulmonaire : artère (elle part du ventricule droit) ; sang pauvre en dioxygène, envoyé aux poumons.",
                "Les veines pulmonaires : veines (elles reviennent à l'oreillette gauche) ; sang riche en dioxygène, venant des poumons.",
              ],
            },
            {
              level: 2,
              statement: "Un globule rouge se trouve dans un capillaire du gros orteil. Décrivez son trajet jusqu'aux poumons, puis son retour jusqu'au gros orteil, en citant dans l'ordre les cavités du cœur et les principaux vaisseaux traversés. Indiquez où il se charge en dioxygène et où il le cède.",
              hint: "Le sang qui revient d'un organe arrive toujours dans l'oreillette droite.",
              solution: [
                "Du capillaire de l'orteil, le globule rouge passe dans les veines de la jambe, puis dans la veine cave, qui le mène à l'oreillette droite.",
                "Il passe dans le ventricule droit, qui l'envoie aux poumons par l'artère pulmonaire.",
                "Dans les capillaires des poumons, autour des alvéoles, il se charge en dioxygène.",
                "Il revient par les veines pulmonaires à l'oreillette gauche, puis passe dans le ventricule gauche.",
                "Le ventricule gauche l'envoie dans l'aorte, puis dans les artères de la jambe, jusqu'aux capillaires du gros orteil, où il cède son dioxygène aux cellules.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Chez Tom, 13 ans, on mesure au repos une fréquence cardiaque de 70 battements par minute et un volume éjecté de 0,06 L ; juste après une course, une fréquence de 150 battements par minute et un volume éjecté de 0,09 L. 1) Calculez le débit cardiaque dans les deux cas. 2) Combien de fois est-il plus grand après la course ? 3) À quoi sert cette augmentation ? 4) Un camarade affirme : « Pendant l'effort, le sang va tellement vite qu'il n'a pas le temps de passer par les poumons. » Que lui répondez-vous ?",
              hint: "Pour la question 4, souvenez-vous que le circuit est fermé et que le ventricule droit envoie tout le sang qu'il reçoit vers un seul endroit.",
              solution: [
                "1) Au repos : 70 × 0,06 = 4,2 L/min. Après la course : 150 × 0,09 = 13,5 L/min.",
                "2) 13,5 ÷ 4,2 ≈ 3,2 : le débit cardiaque est environ 3,2 fois plus grand.",
                "3) Pendant l'effort, les muscles consomment beaucoup plus de dioxygène et de nutriments. Un débit plus grand leur en apporte davantage chaque minute, et emporte plus vite le dioxyde de carbone qu'ils produisent.",
                "4) C'est faux : la circulation est double et le circuit est fermé. Tout le sang qui revient des organes arrive au cœur droit, et le ventricule droit l'envoie entièrement vers les poumons, par l'artère pulmonaire. Il n'existe aucun raccourci : à chaque tour, tout le sang passe par les poumons, même pendant l'effort.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le trajet du sang, à partir de son retour des organes.",
            items: [
              "Le sang pauvre en dioxygène arrive dans l'oreillette droite par les veines caves.",
              "Il passe dans le ventricule droit.",
              "Il est envoyé vers les poumons par l'artère pulmonaire.",
              "Il se charge en dioxygène dans les capillaires des poumons.",
              "Il revient dans l'oreillette gauche par les veines pulmonaires.",
              "Il passe dans le ventricule gauche.",
              "Il est envoyé vers tous les organes par l'aorte.",
            ],
          },
          quiz: [
            {
              q: "Quel vaisseau part du ventricule gauche ?",
              options: ["L'artère pulmonaire", "L'aorte", "La veine cave", "Les veines pulmonaires"],
              answer: 1,
              why: "Le ventricule gauche envoie le sang riche en dioxygène dans l'aorte, vers tous les organes.",
            },
            {
              q: "Quel est le rôle des valvules ?",
              options: ["Fabriquer les cellules du sang", "Séparer le cœur droit du cœur gauche", "Envoyer le sang aux poumons", "Imposer au sang un sens unique"],
              answer: 3,
              why: "Ces clapets empêchent le sang de revenir en arrière ; la séparation entre droite et gauche est assurée par la cloison.",
            },
            {
              q: "Une artère est un vaisseau qui :",
              options: ["contient toujours du sang riche en dioxygène", "ramène le sang vers le cœur", "part du cœur", "relie deux veines entre elles"],
              answer: 2,
              why: "Une artère se définit par son sens : elle part du cœur, quel que soit le sang qu'elle transporte.",
            },
            {
              q: "Que transporte l'artère pulmonaire ?",
              options: ["Du sang pauvre en dioxygène", "Du sang riche en dioxygène", "De l'air vers les poumons", "Des nutriments vers l'intestin"],
              answer: 0,
              why: "Elle part du ventricule droit et conduit aux poumons le sang qui revient des organes, pauvre en dioxygène.",
            },
            {
              q: "Un cœur bat 80 fois par minute et éjecte 0,07 L par battement. Quel est le débit cardiaque ?",
              options: ["0,56 L/min", "8,7 L/min", "56 L/min", "5,6 L/min"],
              answer: 3,
              why: "Débit cardiaque = 80 × 0,07 = 5,6 L/min.",
            },
          ],
          trap: "Croire qu'une artère transporte toujours du sang riche en dioxygène et une veine du sang pauvre en dioxygène. Une artère se définit par le fait qu'elle part du cœur : l'artère pulmonaire transporte un sang pauvre en dioxygène. Et le sang n'est jamais bleu : il est rouge plus ou moins foncé.",
          method: "Dessinez le cœur vu de face en écrivant « D » à gauche de la feuille et « G » à droite, puis suivez le sang avec le doigt en récitant : oreillette, ventricule, artère, organe, veine. Coloriez en rouge le sang riche en dioxygène et en bleu le sang pauvre en dioxygène, en précisant que c'est une convention de couleur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'besoins-organes',
          title: 'Le sang apporte aux organes ce dont ils ont besoin',
          minutes: 30,
          objectives: [
            "Relier les besoins des cellules en nutriments et en dioxygène à la production d'énergie.",
            "Décrire les échanges entre le sang et les cellules au niveau des capillaires.",
            "Exploiter des mesures de la composition du sang à l'entrée et à la sortie d'un organe.",
            "Expliquer que les déchets des cellules sont éliminés par les poumons et par les reins.",
          ],
          course: [
            {
              heading: "Ce dont une cellule a besoin",
              paragraphs: [
                "Chaque organe est formé de cellules : des cellules musculaires dans un muscle, des cellules nerveuses (les neurones) dans le cerveau. Pour fonctionner, chaque cellule a besoin de nutriments, comme le glucose, et de dioxygène. Elle utilise ensemble ces deux substances pour libérer de l'énergie : c'est la respiration cellulaire. Elle rejette en retour du dioxyde de carbone et de l'eau.",
                "Les cellules utilisent aussi des nutriments, notamment les acides aminés, pour fabriquer leur propre matière, grandir et se renouveler. Certaines cellules ne supportent pas d'être privées d'apports : les cellules du cerveau commencent à souffrir au bout de quelques minutes seulement sans dioxygène. C'est pourquoi un arrêt du cœur est une urgence vitale.",
              ],
              box: { label: "Formule", text: "Respiration cellulaire, bilan en mots : nutriments (glucose) + dioxygène → énergie + dioxyde de carbone + eau." },
            },
            {
              heading: "Les échanges au niveau des capillaires",
              paragraphs: [
                "Le sang n'entre pas dans les cellules. Les échanges se font à travers la paroi très fine des capillaires, qui passent tout près de chaque cellule. Le dioxygène et les nutriments sortent du sang et vont vers les cellules ; le dioxyde de carbone et les autres déchets sortent des cellules et passent dans le sang. Le sang qui sort d'un organe est donc plus pauvre en dioxygène et en nutriments, et plus riche en dioxyde de carbone, que le sang qui y entre.",
                "Une analogie : le sang est comme un camion de livraison qui fait sans cesse le tour d'une ville. Devant chaque maison (chaque cellule), il dépose des provisions (dioxygène, nutriments) et emporte les poubelles (dioxyde de carbone, déchets). Le camion n'entre pas dans les maisons : tout passe par le trottoir, c'est-à-dire par la paroi du capillaire.",
              ],
              box: { label: "À retenir", text: "Dans chaque organe, au niveau des capillaires, le sang cède aux cellules du dioxygène et des nutriments, et il reçoit du dioxyde de carbone et d'autres déchets." },
            },
            {
              heading: "Un organe actif consomme davantage",
              paragraphs: [
                "Un organe qui travaille davantage consomme davantage. Les mesures montrent que, pendant un effort, un muscle prélève beaucoup plus de dioxygène et de glucose dans le sang qui le traverse, et rejette plus de dioxyde de carbone. Le cœur bat alors plus vite et le muscle reçoit davantage de sang chaque minute : l'apport s'ajuste aux besoins.",
              ],
            },
            {
              heading: "L'élimination des déchets",
              paragraphs: [
                "Les déchets rejetés dans le sang par les cellules ne s'y accumulent pas. Le dioxyde de carbone est transporté jusqu'aux poumons, où il passe dans l'air des alvéoles et est rejeté à l'expiration. D'autres déchets, comme l'urée, qui provient de la dégradation des protides, sont retirés du sang par les reins et éliminés dans l'urine.",
                "Le sang relie donc tous les appareils du corps. L'appareil digestif lui fournit les nutriments ; l'appareil respiratoire lui fournit le dioxygène et le débarrasse du dioxyde de carbone ; l'appareil circulatoire le distribue ; l'appareil urinaire, avec les reins, le débarrasse de déchets comme l'urée. Chaque cellule, même la plus éloignée, est ainsi approvisionnée et débarrassée de ses déchets en permanence.",
              ],
              box: { label: "Repère", text: "Approvisionnement : intestin grêle (nutriments) et poumons (dioxygène). Distribution : cœur et vaisseaux. Élimination : poumons (dioxyde de carbone) et reins (urée, dans l'urine)." },
            },
          ],
          keyPoints: [
            "Les cellules ont besoin de nutriments (glucose) et de dioxygène pour produire de l'énergie : c'est la respiration cellulaire.",
            "La respiration cellulaire rejette du dioxyde de carbone et de l'eau.",
            "Les échanges entre le sang et les cellules se font à travers la paroi des capillaires ; le sang n'entre pas dans les cellules.",
            "Le sang qui sort d'un organe est plus pauvre en dioxygène et en nutriments, plus riche en dioxyde de carbone.",
            "Un organe actif reçoit plus de sang et prélève plus de dioxygène et de nutriments.",
            "Les poumons éliminent le dioxyde de carbone ; les reins éliminent l'urée dans l'urine.",
          ],
          example: {
            statement: "Données fictives. On mesure la composition du sang à l'entrée et à la sortie d'un muscle de la cuisse, au repos. Dioxygène : 200 mL par litre à l'entrée, 150 mL par litre à la sortie. Glucose : 0,90 g par litre à l'entrée, 0,85 g par litre à la sortie. Dioxyde de carbone : 490 mL par litre à l'entrée, 530 mL par litre à la sortie. Interprétez ces mesures.",
            solution: [
              "Je calcule la variation de chaque substance (sortie moins entrée).",
              "Dioxygène : 150 - 200 = -50 mL par litre. Glucose : 0,85 - 0,90 = -0,05 g par litre. Dioxyde de carbone : 530 - 490 = +40 mL par litre.",
              "Le dioxygène et le glucose diminuent : le muscle les a prélevés dans le sang.",
              "Le dioxyde de carbone augmente : le muscle l'a rejeté dans le sang.",
              "Conclusion : les cellules du muscle consomment du dioxygène et du glucose et produisent du dioxyde de carbone : elles réalisent la respiration cellulaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Entre l'entrée et la sortie d'un muscle, dites si la quantité de chaque substance dans le sang augmente ou diminue : dioxygène, glucose, dioxyde de carbone. 2) Faites de même pour le dioxygène et le dioxyde de carbone entre l'entrée et la sortie d'un poumon.",
              hint: "Dans un muscle, les cellules consomment ; dans un poumon, le sang échange des gaz avec l'air des alvéoles.",
              solution: [
                "1) Muscle : le dioxygène diminue, le glucose diminue, le dioxyde de carbone augmente.",
                "2) Poumon : le dioxygène augmente (il passe de l'air au sang), le dioxyde de carbone diminue (il passe du sang à l'air).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un muscle de la jambe reçoit 1 L de sang par minute au repos, et 10 L par minute pendant un effort. Au repos, chaque litre de sang qui le traverse lui cède 50 mL de dioxygène ; pendant l'effort, 150 mL. 1) Calculez le volume de dioxygène prélevé par ce muscle en une minute, au repos puis pendant l'effort. 2) Combien de fois plus de dioxygène le muscle prélève-t-il pendant l'effort ? 3) Quelles sont les deux façons dont l'apport de dioxygène au muscle augmente ?",
              hint: "Volume prélevé en une minute = volume de sang reçu en une minute × dioxygène cédé par litre.",
              solution: [
                "1) Au repos : 1 × 50 = 50 mL de dioxygène par minute.",
                "Pendant l'effort : 10 × 150 = 1 500 mL, soit 1,5 L de dioxygène par minute.",
                "2) 1 500 ÷ 50 = 30 : le muscle prélève 30 fois plus de dioxygène.",
                "3) Le muscle reçoit plus de sang chaque minute (10 fois plus), et il prélève plus de dioxygène dans chaque litre de sang (3 fois plus).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un court texte de 8 à 10 lignes expliquant le trajet d'une molécule de glucose de votre petit-déjeuner et d'une molécule de dioxygène de l'air que vous respirez, jusqu'à une cellule d'un muscle de votre bras, puis le devenir du dioxyde de carbone produit par cette cellule. Utilisez les mots : intestin grêle, villosités, alvéoles, capillaires, cœur, artère, veine, respiration cellulaire.",
              hint: "Faites d'abord un brouillon en trois colonnes : le glucose, le dioxygène, le dioxyde de carbone. Puis rédigez dans l'ordre.",
              solution: [
                "Le glucose : l'amidon du pain est digéré en glucose dans l'intestin grêle. Le glucose traverse la paroi des villosités et passe dans les capillaires sanguins.",
                "Le dioxygène : l'air inspiré arrive dans les alvéoles pulmonaires, où le dioxygène passe dans le sang des capillaires.",
                "Le sang chargé de glucose et de dioxygène arrive au cœur, qui l'envoie par une artère (l'aorte, puis les artères du bras) jusqu'au muscle.",
                "Dans les capillaires du muscle, le glucose et le dioxygène passent du sang vers la cellule musculaire, qui les utilise pour produire de l'énergie : c'est la respiration cellulaire.",
                "Le dioxyde de carbone produit passe de la cellule au sang, qui repart par une veine vers le cœur ; celui-ci l'envoie aux poumons, où le dioxyde de carbone passe dans l'air des alvéoles et est rejeté à l'expiration.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque organe ou élément à son rôle.",
            pairs: [
              { left: "Intestin grêle", right: "Fait passer les nutriments dans le sang" },
              { left: "Poumons", right: "Apportent le dioxygène au sang et rejettent le dioxyde de carbone" },
              { left: "Cœur", right: "Met le sang en mouvement dans tout le corps" },
              { left: "Capillaires", right: "Lieu des échanges entre le sang et les cellules" },
              { left: "Reins", right: "Retirent l'urée du sang et forment l'urine" },
              { left: "Cellule musculaire", right: "Consomme glucose et dioxygène pour produire de l'énergie" },
            ],
          },
          quiz: [
            {
              q: "Où se font les échanges entre le sang et les cellules ?",
              options: ["Dans les capillaires", "Dans l'aorte", "Dans les oreillettes", "À l'intérieur des cellules, où le sang entre"],
              answer: 0,
              why: "La paroi très fine des capillaires, tout près des cellules, laisse passer les substances échangées.",
            },
            {
              q: "Que rejette une cellule qui réalise la respiration cellulaire ?",
              options: ["Du glucose et du dioxygène", "Des acides aminés", "Du dioxyde de carbone et de l'eau", "Du glucose, du dioxygène et des sels minéraux"],
              answer: 2,
              why: "La cellule consomme glucose et dioxygène, et rejette du dioxyde de carbone et de l'eau.",
            },
            {
              q: "Quel organe retire l'urée du sang ?",
              options: ["Le foie", "Le rein", "Le poumon", "L'estomac"],
              answer: 1,
              why: "Les reins filtrent le sang et éliminent l'urée dans l'urine.",
            },
            {
              q: "Par rapport au sang qui entre dans un muscle, le sang qui en sort contient :",
              options: ["plus de dioxygène", "plus de glucose", "autant de dioxyde de carbone", "moins de dioxygène"],
              answer: 3,
              why: "Les cellules du muscle ont prélevé du dioxygène dans le sang pour leur respiration.",
            },
            {
              q: "Pourquoi un muscle actif reçoit-il plus de sang ?",
              options: ["Pour se refroidir, et seulement pour cela", "Ses besoins en dioxygène augmentent", "Parce que le sang s'y stocke pendant l'effort", "Pour fabriquer de nouveaux globules rouges"],
              answer: 1,
              why: "Un muscle qui travaille consomme plus de dioxygène et de nutriments : un débit sanguin plus grand répond à ces besoins.",
            },
          ],
          trap: "Croire que le sang entre dans les cellules, ou que le dioxyde de carbone est produit dans les poumons. Les échanges se font à travers la paroi des capillaires, et le dioxyde de carbone est produit par toutes les cellules du corps, puis seulement rejeté par les poumons.",
          method: "Pour interpréter des mesures à l'entrée et à la sortie d'un organe, calculez d'abord la variation de chaque substance (sortie moins entrée). Un résultat négatif signifie que l'organe a prélevé la substance, un résultat positif qu'il l'a rejetée dans le sang.",
        },
      ],
    },
  ],
}
