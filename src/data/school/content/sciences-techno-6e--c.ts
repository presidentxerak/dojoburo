import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'sciences-techno-6e',
  chapters: [
    /* ==================================================================== */
    /* REPRODUCTION, CROISSANCE ET DÉVELOPPEMENT                              */
    /* ==================================================================== */
    {
      id: 'reproduction-developpement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cycle-vie-plante',
          title: 'Le cycle de vie d\'une plante à fleurs',
          minutes: 30,
          objectives: [
            "Identifier les stades du cycle de vie d'une plante à fleurs : graine, germination, plante adulte, fleur, fruit.",
            "Décrire les conditions nécessaires à la germination d'une graine.",
            "Relier la fleur, la pollinisation et la fécondation à la formation des fruits et des graines.",
            "Expliquer comment les graines sont dispersées loin de la plante qui les a produites.",
          ],
          course: [
            {
              heading: "De la graine à la plante adulte",
              paragraphs: [
                "Une plante à fleurs, comme le haricot, le tournesol ou le cerisier, commence sa vie sous la forme d'une graine. Une graine contient trois éléments : une enveloppe protectrice (le tégument), une plante miniature appelée embryon, et des réserves de nourriture. Chez le haricot, ces réserves sont rangées dans deux grosses parties appelées cotylédons : ce sont les deux moitiés que l'on sépare facilement quand on ouvre la graine.",
                "Quand les conditions sont favorables, la graine germe : elle se gorge d'eau et gonfle, son enveloppe se déchire, une petite racine sort et s'enfonce dans le sol, puis une tige monte vers la lumière. Pendant les premiers jours, la jeune plante, appelée plantule, se nourrit des réserves de la graine. Dès que ses feuilles vertes sont formées, elle fabrique elle-même sa matière grâce à la lumière.",
                "La plante grandit ensuite : sa tige s'allonge, de nouvelles feuilles et de nouvelles racines apparaissent. Comme tous les êtres vivants, elle passe par plusieurs étapes : naissance (la germination), croissance, puis maturité. La plante adulte devient capable de fleurir, donc de se reproduire.",
              ],
              box: { label: "Définition", text: "La germination est le passage de la graine à la plantule. Elle a besoin d'eau, d'air (pour le dioxygène) et d'une température adaptée. Pour la plupart des graines, la lumière n'est pas nécessaire à la germination, mais elle le devient ensuite pour que la plantule grandisse." },
            },
            {
              heading: "La fleur, organe de la reproduction",
              paragraphs: [
                "La fleur contient les organes qui permettent à la plante de se reproduire. De l'extérieur vers l'intérieur, on trouve : les sépales, souvent verts, qui protègent le bouton avant qu'il s'ouvre ; les pétales, souvent colorés et parfumés, qui attirent les insectes ; les étamines, qui produisent le pollen (une fine poudre, souvent jaune) ; et au centre le pistil, dont la partie renflée, l'ovaire, contient les ovules.",
                "Les étamines sont les organes reproducteurs mâles de la fleur, le pistil est l'organe reproducteur femelle. Chez beaucoup d'espèces, comme le cerisier ou la tulipe, une même fleur porte les deux. Chez d'autres, comme le noisetier ou le maïs, il existe des fleurs mâles et des fleurs femelles séparées.",
              ],
              box: { label: "À retenir", text: "Étamines → pollen (partie mâle). Pistil, avec son ovaire → ovules (partie femelle). Les pétales et les sépales ne servent pas directement à la reproduction : ils protègent la fleur et attirent les insectes." },
            },
            {
              heading: "Pollinisation, fécondation, fruit",
              paragraphs: [
                "Pour qu'une fleur donne un fruit, le pollen doit être transporté des étamines jusqu'au pistil : c'est la pollinisation. Le plus souvent, ce sont des animaux qui s'en chargent, surtout des insectes comme les abeilles, les bourdons ou les papillons : ils viennent boire le nectar, se couvrent de pollen et le déposent sur la fleur suivante. Chez d'autres plantes, comme les graminées (le blé, les herbes des prairies) ou le noisetier, c'est le vent qui transporte le pollen.",
                "Le pollen permet ensuite la fécondation : un élément mâle apporté par le grain de pollen s'unit à un élément femelle contenu dans un ovule. Après la fécondation, la fleur se fane et ses pétales tombent, l'ovaire grossit et se transforme en fruit, et chaque ovule fécondé devient une graine. Une cerise, une tomate, une courgette ou une gousse de haricot sont des fruits : ils proviennent d'une fleur et contiennent des graines.",
              ],
              box: { label: "Règle", text: "Fleur → pollinisation → fécondation → l'ovaire devient le fruit et les ovules deviennent les graines. Sans pollinisation, il n'y a ni fruit ni graine." },
            },
            {
              heading: "Disperser les graines et recommencer le cycle",
              paragraphs: [
                "Une plante ne se déplace pas, mais ses graines voyagent : c'est la dissémination. Certaines sont emportées par le vent grâce à une aigrette, comme un petit parachute (le pissenlit), ou grâce à une aile (l'érable). D'autres s'accrochent aux poils des animaux (la bardane), ou sont avalées avec le fruit puis rejetées plus loin dans les excréments (la cerise, la mûre). D'autres encore flottent sur l'eau (la noix de coco).",
                "Les graines qui tombent dans un endroit favorable germent à leur tour : le cycle recommence. Certaines plantes, dites annuelles, comme le haricot ou le coquelicot, font tout leur cycle en une seule année puis meurent. D'autres, comme les arbres, vivent de nombreuses années et fleurissent chaque année. Chez toutes, la vie suit les mêmes étapes : naissance, croissance, reproduction, vieillissement et mort.",
              ],
              box: { label: "À retenir", text: "Le cycle de vie d'une plante à fleurs : graine → germination → plantule → plante adulte → fleurs → pollinisation et fécondation → fruits contenant des graines → dissémination → nouvelle germination." },
            },
          ],
          keyPoints: [
            "Une graine contient un embryon (une plante miniature), des réserves de nourriture et une enveloppe protectrice.",
            "La germination a besoin d'eau, d'air et d'une température adaptée ; la lumière n'est pas nécessaire pour la plupart des graines.",
            "Les étamines produisent le pollen ; le pistil contient l'ovaire, qui renferme les ovules.",
            "La pollinisation est le transport du pollen jusqu'au pistil, par les insectes ou par le vent.",
            "Après la fécondation, l'ovaire devient le fruit et les ovules deviennent les graines.",
            "Les graines sont dispersées par le vent, les animaux ou l'eau, puis germent : le cycle recommence.",
          ],
          example: {
            statement: "Pour connaître les besoins de la germination, une classe place des graines de haricot dans quatre pots. Pot A : coton humide, à 20 °C, à la lumière. Pot B : coton sec, à 20 °C, à la lumière. Pot C : coton humide, au réfrigérateur à 4 °C. Pot D : coton humide, à 20 °C, dans un placard sombre. Une semaine plus tard, les graines des pots A et D ont germé, celles des pots B et C non. Que peut-on conclure ?",
            solution: [
              "Je compare deux pots qui ne diffèrent que par une seule condition. A et B ne diffèrent que par l'eau : sans eau (pot B), pas de germination. L'eau est donc nécessaire.",
              "A et C ne diffèrent que par la température : au froid (pot C), pas de germination. Une température adaptée est donc nécessaire.",
              "A et D ne diffèrent que par la lumière : dans le noir (pot D), les graines ont quand même germé. La lumière n'est donc pas nécessaire à la germination du haricot.",
              "Conclusion : pour germer, la graine de haricot a besoin d'eau et d'une température adaptée, mais pas de lumière (l'air était présent dans tous les pots).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque partie de la fleur à son rôle. Parties : les sépales, les pétales, les étamines, l'ovaire. Rôles : a) produire le pollen ; b) contenir les ovules ; c) protéger le bouton floral ; d) attirer les insectes. Dites ensuite quelle partie deviendra le fruit après la fécondation.",
              hint: "Partez du centre de la fleur : la partie la plus au centre contient les futures graines.",
              solution: [
                "Les sépales → c) protéger le bouton floral.",
                "Les pétales → d) attirer les insectes.",
                "Les étamines → a) produire le pollen.",
                "L'ovaire → b) contenir les ovules.",
                "Après la fécondation, c'est l'ovaire qui devient le fruit (et les ovules deviennent les graines).",
              ],
            },
            {
              level: 2,
              statement: "Pour un biologiste, un fruit provient de l'ovaire d'une fleur et contient des graines. Parmi les aliments suivants, lesquels sont des fruits au sens du biologiste : la tomate, la carotte, la courgette, la pomme de terre, la gousse de haricot vert, la feuille de salade ? Justifiez chaque réponse.",
              hint: "Coupez l'aliment en pensée : contient-il des graines ? Sinon, à quelle partie de la plante correspond-il (racine, tige, feuille) ?",
              solution: [
                "La tomate contient des graines et provient d'une fleur : c'est un fruit.",
                "La courgette contient des graines et provient d'une fleur : c'est un fruit, même si on la classe dans les légumes en cuisine.",
                "La gousse de haricot vert contient les graines (les haricots) : c'est un fruit.",
                "La carotte est une racine, la pomme de terre est une partie de tige souterraine qui stocke des réserves (un tubercule), la salade est formée de feuilles : aucun ne contient de graines, ce ne sont pas des fruits.",
                "Résultat : la tomate, la courgette et la gousse de haricot vert sont des fruits au sens du biologiste.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un arboriculteur compare deux cerisiers de la même variété, qui portent chacun 1 200 fleurs. Le premier est laissé à l'air libre ; le second est recouvert, pendant la floraison, d'un filet aux mailles très fines qui empêche les insectes de passer. À la récolte, le premier porte 900 cerises, le second seulement 60. a) Pour chaque arbre, combien de fleurs n'ont pas donné de cerise ? b) Sur 100 fleurs, combien ont donné une cerise pour chaque arbre ? c) Expliquez la différence. d) Proposez une hypothèse pour les 60 cerises obtenues sous le filet. e) Que risquerait l'arboriculteur si les abeilles disparaissaient de sa région ?",
              hint: "Pour b), divisez 1 200 par 12 pour trouver un groupe de 100 fleurs. Pour c), demandez-vous quelle étape du cycle le filet empêche.",
              solution: [
                "a) Arbre libre : 1 200 - 900 = 300 fleurs sans cerise. Arbre sous filet : 1 200 - 60 = 1 140 fleurs sans cerise.",
                "b) 1 200 fleurs, c'est 12 groupes de 100. Arbre libre : 900 ÷ 12 = 75 cerises pour 100 fleurs. Arbre sous filet : 60 ÷ 12 = 5 cerises pour 100 fleurs.",
                "c) Le filet empêche les insectes d'atteindre les fleurs. Le pollen n'est presque pas transporté jusqu'aux pistils : sans pollinisation, il n'y a pas de fécondation, donc l'ovaire ne se transforme pas en fruit.",
                "d) Quelques grains de pollen ont pu être apportés malgré le filet, par exemple par le vent ou par de très petits insectes passés à travers les mailles.",
                "e) Sans abeilles, beaucoup moins de fleurs seraient pollinisées : la récolte de cerises serait très faible.",
                "Résultat : la pollinisation par les insectes est indispensable pour obtenir des fruits ; l'arbre libre donne 75 cerises pour 100 fleurs, l'arbre sous filet seulement 5.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du cycle de vie d'une plante à fleurs, en partant de la graine.",
            items: [
              "Une graine tombée sur un sol humide germe : une petite racine sort, puis une tige.",
              "La plantule grandit et forme ses premières feuilles vertes.",
              "La plante adulte produit des fleurs.",
              "Des insectes ou le vent transportent le pollen jusqu'au pistil : c'est la pollinisation.",
              "Le pollen permet la fécondation des ovules, à l'intérieur de l'ovaire.",
              "L'ovaire se transforme en fruit et les ovules en graines.",
              "Le fruit libère ses graines, qui sont dispersées loin de la plante.",
            ],
          },
          quiz: [
            {
              q: "Quelle partie de la fleur se transforme en fruit après la fécondation ?",
              options: ["Les pétales", "L'ovaire", "Les étamines", "Les sépales"],
              answer: 1,
              why: "Après la fécondation, l'ovaire grossit et devient le fruit ; les ovules qu'il contient deviennent les graines.",
            },
            {
              q: "Quelle partie de la fleur produit le pollen ?",
              options: ["Le pistil", "Les sépales", "Les pétales", "Les étamines"],
              answer: 3,
              why: "Les étamines sont les organes mâles de la fleur : elles produisent le pollen.",
            },
            {
              q: "Qu'appelle-t-on la pollinisation ?",
              options: ["Le transport du pollen jusqu'au pistil", "La sortie de la petite racine hors de la graine", "La chute des pétales quand la fleur se fane", "La dispersion des graines loin de la plante"],
              answer: 0,
              why: "La pollinisation est le transport du pollen des étamines jusqu'au pistil, par les insectes ou par le vent.",
            },
            {
              q: "Une graine de haricot est placée sur du coton humide, à 20 °C, dans un placard sombre. Que se passe-t-il ?",
              options: ["Elle ne germe pas, faute de lumière", "Elle pourrit, car l'obscurité abîme les graines", "Elle germe normalement"],
              answer: 2,
              why: "Elle dispose d'eau, d'air et d'une température adaptée : elle germe. La lumière n'est pas nécessaire à la germination du haricot.",
            },
            {
              q: "Comment les graines du pissenlit sont-elles dispersées ?",
              options: ["Par les oiseaux qui avalent le fruit entier", "Par le vent, grâce à leur aigrette", "Par l'eau des rivières", "Par le fruit qui éclate"],
              answer: 1,
              why: "Chaque graine du pissenlit porte une aigrette, comme un petit parachute, que le vent emporte.",
            },
          ],
          trap: "Croire qu'un fruit est forcément sucré : pour le biologiste, un fruit est l'ovaire transformé d'une fleur, qui contient des graines (la tomate, la courgette ou la gousse de haricot sont des fruits). Autre erreur fréquente : penser que la graine a besoin de lumière pour germer.",
          method: "Pour retenir le cycle, dessinez-le en rond : graine, plantule, plante adulte, fleur, fruit, puis une flèche de retour vers la graine. Pour exploiter une expérience, comparez toujours deux pots qui ne diffèrent que par une seule condition.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'developpement-animaux',
          title: 'Le développement des animaux',
          minutes: 30,
          objectives: [
            "Identifier les stades de développement d'un animal : œuf, larve ou jeune, adulte.",
            "Distinguer un développement direct d'un développement avec métamorphose.",
            "Décrire la croissance continue d'un mammifère et la croissance par mues d'un insecte.",
            "Relier la fécondation à la formation d'un nouvel individu.",
          ],
          course: [
            {
              heading: "Tout commence par une cellule-œuf",
              paragraphs: [
                "Chez la plupart des animaux, la reproduction fait intervenir un mâle et une femelle. Le mâle produit des cellules reproductrices appelées spermatozoïdes, la femelle des cellules reproductrices appelées ovules. La rencontre d'un spermatozoïde et d'un ovule s'appelle la fécondation : elle forme une cellule unique, la cellule-œuf, point de départ d'un nouvel individu.",
                "La fécondation peut avoir lieu dans l'eau, hors du corps de la femelle : c'est la fécondation externe, chez la grenouille ou la truite. Elle peut aussi avoir lieu à l'intérieur du corps de la femelle : c'est la fécondation interne, chez les mammifères, les oiseaux, les reptiles et les insectes.",
                "Ensuite, le petit se développe de deux façons. Les animaux ovipares pondent des œufs, qui se développent hors du corps de la mère : la poule, la tortue, la grenouille, le papillon. Les animaux vivipares portent leurs petits dans leur ventre jusqu'à la naissance : le chat, la vache, l'être humain.",
              ],
              box: { label: "Définition", text: "La fécondation est l'union d'un spermatozoïde (cellule reproductrice mâle) et d'un ovule (cellule reproductrice femelle). Elle forme une cellule-œuf, la première cellule d'un nouvel individu." },
            },
            {
              heading: "Le développement direct : le jeune ressemble à l'adulte",
              paragraphs: [
                "Chez beaucoup d'animaux, le jeune qui sort de l'œuf ou qui naît ressemble déjà à ses parents, en plus petit : le chaton, le poussin, le petit lézard, le bébé humain. Il grandit et ses proportions changent, mais il garde la même organisation et vit dans le même milieu que l'adulte. On parle de développement direct.",
                "Chez l'être humain, la cellule-œuf se divise et devient un embryon, puis un fœtus, qui se développe dans l'utérus de la mère pendant environ neuf mois. Viennent ensuite le bébé à la naissance, l'enfant, l'adolescent et enfin l'adulte, qui vieillit. Le bébé a déjà la forme d'un être humain, mais sa tête est très grosse par rapport au reste de son corps.",
              ],
              box: { label: "Repère", text: "Les stades du développement humain : cellule-œuf → embryon → fœtus → bébé → enfant → adolescent → adulte. La grossesse dure environ 9 mois." },
            },
            {
              heading: "Le développement avec métamorphose",
              paragraphs: [
                "Chez d'autres animaux, ce qui sort de l'œuf ne ressemble pas à l'adulte : c'est une larve. La larve vit souvent dans un autre milieu et se nourrit autrement que l'adulte. Pour devenir adulte, son corps se transforme profondément : c'est la métamorphose. On parle de développement indirect.",
                "La grenouille pond ses œufs dans l'eau. Il en sort des têtards, qui respirent avec des branchies, nagent grâce à leur queue et mangent surtout des végétaux. Peu à peu, les pattes arrière puis les pattes avant poussent, des poumons se forment et la queue disparaît : la jeune grenouille quitte l'eau. L'adulte vit sur terre et dans l'eau, et chasse des insectes.",
                "Le papillon se développe en quatre étapes : l'œuf ; la chenille, qui est la larve et mange des feuilles ; la chrysalide, une étape immobile pendant laquelle le corps se réorganise entièrement ; enfin le papillon adulte, qui a des ailes et se nourrit de nectar. La coccinelle, l'abeille ou le hanneton se développent eux aussi avec une métamorphose.",
              ],
              box: { label: "Définition", text: "Une métamorphose est une transformation importante du corps d'un animal entre le stade larve et le stade adulte. Exemples : têtard → grenouille ; chenille → chrysalide → papillon." },
            },
            {
              heading: "Grandir : croissance continue ou par mues",
              paragraphs: [
                "Grandir, c'est augmenter de taille et de masse. Chez les mammifères et les oiseaux, la croissance est continue : le squelette, à l'intérieur du corps, grandit en même temps que le reste. Un bébé humain mesure environ 50 cm à la naissance et grandit régulièrement jusqu'à la fin de l'adolescence.",
                "Les insectes, les araignées et les crustacés (le crabe, la crevette) ont un squelette externe : une carapace rigide qui ne peut pas s'agrandir. Pour grandir, l'animal doit l'abandonner et en fabriquer une nouvelle : c'est la mue. Juste après la mue, la nouvelle carapace est encore molle et l'animal grandit vite, puis elle durcit et la taille ne change plus jusqu'à la mue suivante. La croissance se fait par paliers : elle est discontinue.",
              ],
              box: { label: "À retenir", text: "Croissance continue : la taille augmente régulièrement (mammifères, oiseaux). Croissance discontinue : la taille augmente par paliers, juste après chaque mue (insectes, crustacés)." },
            },
          ],
          keyPoints: [
            "La fécondation, union d'un spermatozoïde et d'un ovule, forme une cellule-œuf, début d'un nouvel individu.",
            "Les ovipares pondent des œufs ; les vivipares portent leurs petits jusqu'à la naissance.",
            "Développement direct : le jeune ressemble à l'adulte (chat, poule, être humain).",
            "Développement avec métamorphose : une larve se transforme en adulte (têtard → grenouille ; chenille → chrysalide → papillon).",
            "Les mammifères ont une croissance continue ; les insectes et les crustacés grandissent par mues.",
          ],
          example: {
            statement: "On mesure tous les deux jours la longueur d'une jeune larve de criquet (données fictives) : jour 0 : 5 mm ; jour 2 : 5 mm ; jour 4 : 5 mm ; jour 6 : 8 mm ; jour 8 : 8 mm ; jour 10 : 8 mm ; jour 12 : 12 mm. Décrivez sa croissance et expliquez-la.",
            solution: [
              "Je lis les mesures : la longueur reste à 5 mm du jour 0 au jour 4, passe brusquement à 8 mm au jour 6, reste à 8 mm jusqu'au jour 10, puis passe à 12 mm au jour 12.",
              "Je décris : la taille ne change pas pendant plusieurs jours, puis augmente d'un coup. La croissance se fait par paliers : elle est discontinue.",
              "J'explique : le criquet est un insecte, couvert d'une carapace rigide qui ne grandit pas. Il ne peut grandir qu'au moment d'une mue, quand il abandonne sa vieille carapace.",
              "Conclusion : la larve de criquet a une croissance discontinue ; les deux sauts de taille (vers le jour 6 et vers le jour 12) correspondent à deux mues.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les animaux suivants en deux groupes, développement direct ou développement avec métamorphose : le chat, la grenouille, le papillon, la poule, la coccinelle, le lapin.",
              hint: "Demandez-vous si le petit qui sort de l'œuf ou qui naît ressemble déjà à ses parents.",
              solution: [
                "Le chaton, le poussin et le lapereau ressemblent à leurs parents : développement direct.",
                "Le têtard, la chenille et la larve de coccinelle ne ressemblent pas aux adultes : développement avec métamorphose.",
                "Résultat : développement direct pour le chat, la poule et le lapin ; développement avec métamorphose pour la grenouille, le papillon et la coccinelle.",
              ],
            },
            {
              level: 2,
              statement: "Comparez le têtard et la grenouille adulte. Pour chacun, indiquez : le milieu de vie, l'organe de la respiration, le moyen de se déplacer et la nourriture principale. Concluez : de quel type de développement s'agit-il ?",
              hint: "Construisez un tableau à deux colonnes (têtard, grenouille) et quatre lignes.",
              solution: [
                "Milieu de vie : le têtard vit uniquement dans l'eau ; la grenouille vit sur terre et dans l'eau.",
                "Respiration : le têtard respire avec des branchies ; la grenouille respire surtout avec des poumons (et aussi par la peau).",
                "Déplacement : le têtard nage avec sa queue ; la grenouille saute et nage avec ses pattes.",
                "Nourriture : le têtard mange surtout des végétaux ; la grenouille chasse des insectes.",
                "Résultat : la larve et l'adulte sont très différents sur les quatre points ; il s'agit d'un développement avec métamorphose.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données arrondies). Dans un élevage de vers à soie, on observe : l'œuf éclot au bout de 10 jours ; la chenille vit 28 jours et mue 4 fois ; elle s'enferme ensuite dans un cocon où elle devient chrysalide pendant 14 jours ; le papillon adulte vit 4 jours, pendant lesquels la femelle pond. a) Calculez la durée totale du cycle, de la ponte à la mort du papillon, en jours puis en semaines. b) À la sortie de l'œuf, la chenille mesure 3 mm ; à la fin, 75 mm. Combien de fois a-t-elle grandi ? c) Pourquoi la chenille doit-elle muer pour grandir ? d) Le ver à soie a-t-il un développement direct ? Justifiez.",
              hint: "Additionnez les durées des quatre stades, puis divisez par 7. Pour b), divisez la longueur finale par la longueur de départ.",
              solution: [
                "a) 10 + 28 + 14 + 4 = 56 jours, soit 56 ÷ 7 = 8 semaines.",
                "b) 75 ÷ 3 = 25 : la chenille devient 25 fois plus longue.",
                "c) Comme tous les insectes, la chenille est couverte d'une enveloppe rigide qui ne grandit pas : elle doit s'en débarrasser (muer) pour pouvoir grandir. Sa croissance est discontinue.",
                "d) Non : la chenille ne ressemble pas au papillon et passe par une chrysalide. C'est un développement avec métamorphose.",
                "Résultat : un cycle de 56 jours (8 semaines), une chenille qui grandit 25 fois par mues successives, et un développement avec métamorphose.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Cellule-œuf", right: "Cellule formée par la fécondation" },
              { left: "Larve", right: "Jeune animal qui ne ressemble pas à l'adulte" },
              { left: "Métamorphose", right: "Transformation profonde de la larve en adulte" },
              { left: "Mue", right: "Abandon de la carapace devenue trop petite" },
              { left: "Ovipare", right: "Animal qui pond des œufs" },
              { left: "Vivipare", right: "Animal dont les petits se développent dans le ventre de la mère" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces animaux se développe avec une métamorphose ?",
              options: ["Le chien", "Le lapin", "La coccinelle", "La poule"],
              answer: 2,
              why: "La larve de coccinelle ne ressemble pas à l'adulte : elle passe par une métamorphose. Le chien, le lapin et la poule ont un développement direct.",
            },
            {
              q: "Comment s'appelle la larve de la grenouille ?",
              options: ["La chenille", "Le têtard", "L'asticot"],
              answer: 1,
              why: "Le têtard, qui vit dans l'eau et respire avec des branchies, est la larve de la grenouille.",
            },
            {
              q: "Pourquoi un criquet doit-il muer pour grandir ?",
              options: ["Parce que sa carapace rigide ne grandit pas", "Parce qu'il change de nourriture et de milieu de vie", "Parce qu'il devient adulte à chaque mue", "Parce qu'il a trop chaud en été"],
              answer: 0,
              why: "Le squelette externe des insectes est rigide : l'animal doit l'abandonner pour grandir, ce qui donne une croissance par paliers.",
            },
            {
              q: "Que forme la fécondation ?",
              options: ["Un spermatozoïde", "Un ovule", "Une larve", "Une cellule-œuf"],
              answer: 3,
              why: "L'union d'un spermatozoïde et d'un ovule forme une cellule-œuf, la première cellule du nouvel individu.",
            },
            {
              q: "Lequel de ces animaux est vivipare ?",
              options: ["La vache", "La tortue", "La poule", "Le papillon"],
              answer: 0,
              why: "La vache porte son petit dans son ventre jusqu'à la naissance. La tortue, la poule et le papillon pondent des œufs.",
            },
          ],
          trap: "Confondre la mue et la métamorphose : la mue est le changement de carapace qui permet de grandir, la métamorphose est la transformation du corps entier (le têtard qui devient grenouille). Autre erreur : croire que la chenille et le papillon sont deux animaux différents.",
          method: "Pour décrire un développement, faites un tableau avec une ligne par stade et trois colonnes : aspect, milieu de vie, nourriture. Si ces colonnes changent beaucoup entre le jeune et l'adulte, il y a métamorphose.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'puberte',
          title: 'Les changements du corps à la puberté',
          minutes: 25,
          objectives: [
            "Décrire les changements du corps au moment de la puberté chez la fille et chez le garçon.",
            "Distinguer les modifications morphologiques, physiologiques et comportementales.",
            "Expliquer que la puberté rend le corps capable de se reproduire, et préciser le rôle de chaque sexe dans la reproduction.",
          ],
          course: [
            {
              heading: "La puberté, un passage vers l'âge adulte",
              paragraphs: [
                "La puberté est la période pendant laquelle le corps d'un enfant se transforme en corps d'adulte, capable de se reproduire. Elle commence en général entre 8 et 13 ans chez les filles et entre 9 et 14 ans chez les garçons, et elle dure plusieurs années. Chacun a son propre rythme : commencer plus tôt ou plus tard que ses camarades est tout à fait normal.",
                "Ces transformations sont déclenchées par le cerveau, qui envoie des signaux aux organes reproducteurs : les ovaires chez la fille, les testicules chez le garçon. Ces organes, présents depuis la naissance, se mettent alors à fonctionner. Ils fabriquent des messagers chimiques, les hormones, qui circulent dans le sang et transforment l'ensemble du corps.",
              ],
              box: { label: "Définition", text: "La puberté est la période de transformation du corps qui fait passer de l'enfance à l'âge adulte. À la fin de la puberté, le corps est capable de se reproduire." },
            },
            {
              heading: "Les changements visibles : la morphologie",
              paragraphs: [
                "Chez les filles comme chez les garçons, la taille augmente rapidement (on parle de poussée de croissance), des poils apparaissent sous les bras et au niveau du pubis, la transpiration devient plus forte et la peau plus grasse, ce qui peut provoquer de l'acné.",
                "Chez la fille, les seins se développent, les hanches s'élargissent et la silhouette s'arrondit. Chez le garçon, le pénis et les testicules grossissent, les épaules s'élargissent, les muscles se développent, la barbe commence à pousser et la voix mue : elle devient plus grave, parfois après une période où elle « déraille ».",
              ],
              box: { label: "À retenir", text: "Les organes reproducteurs, présents dès la naissance, sont les caractères sexuels primaires. Les caractères qui apparaissent à la puberté (seins, barbe, voix plus grave, pilosité) sont les caractères sexuels secondaires." },
            },
            {
              heading: "Les changements invisibles : le fonctionnement des organes",
              paragraphs: [
                "Chez la fille, les ovaires commencent à libérer des ovules, en général un ovule environ une fois par mois. Chaque mois, la paroi intérieure de l'utérus s'épaissit pour pouvoir accueillir un éventuel embryon. S'il n'y a pas eu de fécondation, cette paroi se détache et s'écoule par le vagin avec un peu de sang : ce sont les règles. Elles durent quelques jours et reviennent en moyenne tous les 28 jours, avec de grandes différences d'une personne à l'autre, surtout au début.",
                "Chez le garçon, les testicules commencent à produire des spermatozoïdes, en continu et en très grand nombre. Les spermatozoïdes sont mélangés à un liquide pour former le sperme. Les premières éjaculations, qui peuvent se produire pendant le sommeil, sont le signe que l'appareil reproducteur fonctionne.",
              ],
              box: { label: "Repère", text: "Fille : à partir de la puberté, les ovaires libèrent environ un ovule par mois et les règles apparaissent. Garçon : à partir de la puberté, les testicules produisent des spermatozoïdes en continu." },
            },
            {
              heading: "Le rôle de chaque sexe, et les changements de comportement",
              paragraphs: [
                "Après la puberté, un homme et une femme peuvent avoir un enfant. L'homme apporte les spermatozoïdes, la femme apporte l'ovule. Si un spermatozoïde rencontre un ovule dans le corps de la femme, la fécondation forme une cellule-œuf, qui se développe dans l'utérus pendant environ neuf mois. Les deux parents participent donc à la formation de l'enfant.",
                "La puberté change aussi le comportement : on recherche plus d'autonomie, on s'intéresse davantage à son apparence et aux autres, l'humeur peut varier rapidement. Ces changements sont normaux. Une hygiène quotidienne (douche, linge propre) devient plus importante. Chacun mérite le respect : on ne se moque pas du corps des autres, qui change à son propre rythme. En cas de question, on peut en parler à un adulte de confiance : un parent, l'infirmière ou l'infirmier scolaire, un médecin.",
              ],
            },
          ],
          keyPoints: [
            "La puberté transforme le corps de l'enfant en corps d'adulte, capable de se reproduire ; son âge de début varie selon les personnes.",
            "Changements communs : poussée de croissance, pilosité, transpiration, peau plus grasse.",
            "Fille : seins, hanches plus larges ; les ovaires libèrent un ovule environ une fois par mois ; les règles apparaissent.",
            "Garçon : voix plus grave, barbe, épaules plus larges ; les testicules produisent des spermatozoïdes en continu.",
            "La fécondation d'un ovule (apporté par la femme) par un spermatozoïde (apporté par l'homme) forme une cellule-œuf.",
            "Le comportement change aussi ; chacun évolue à son rythme et mérite le respect.",
          ],
          example: {
            statement: "Classez ces changements de la puberté en trois catégories, morphologiques (l'aspect du corps), physiologiques (le fonctionnement des organes) et comportementales : la voix devient plus grave ; les premières règles apparaissent ; l'adolescent veut davantage d'autonomie ; les seins se développent ; les testicules produisent des spermatozoïdes ; des poils apparaissent sous les bras.",
            solution: [
              "Je repère ce qui se voit de l'extérieur : la voix plus grave (elle s'entend), le développement des seins, les poils sous les bras. Ce sont des changements morphologiques.",
              "Je repère ce qui concerne le fonctionnement des organes reproducteurs : l'apparition des règles, la production de spermatozoïdes. Ce sont des changements physiologiques.",
              "Je repère ce qui concerne la façon d'agir et de penser : le désir d'autonomie. C'est un changement comportemental.",
              "Résultat : morphologiques : voix, seins, poils ; physiologiques : règles, spermatozoïdes ; comportemental : autonomie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez les phrases avec les mots suivants : ovaires, testicules, fécondation, cellule-œuf, règles. « Chez la femme, les ... libèrent des ovules. Chez l'homme, les ... produisent des spermatozoïdes. L'union d'un ovule et d'un spermatozoïde s'appelle la ... ; elle forme une ... . Quand il n'y a pas de fécondation, la paroi de l'utérus s'élimine : ce sont les ... . »",
              hint: "Chaque mot n'est utilisé qu'une seule fois ; commencez par les organes.",
              solution: [
                "Chez la femme, les ovaires libèrent des ovules.",
                "Chez l'homme, les testicules produisent des spermatozoïdes.",
                "L'union d'un ovule et d'un spermatozoïde s'appelle la fécondation ; elle forme une cellule-œuf.",
                "Quand il n'y a pas de fécondation, la paroi de l'utérus s'élimine : ce sont les règles.",
              ],
            },
            {
              level: 2,
              statement: "Voici la taille de Léa mesurée chaque année à son anniversaire (données fictives) : 11 ans : 140 cm ; 12 ans : 146 cm ; 13 ans : 154 cm ; 14 ans : 159 cm ; 15 ans : 161 cm. a) Calculez combien Léa a grandi chaque année. b) Pendant quelle année a-t-elle grandi le plus ? c) Combien a-t-elle grandi en tout entre 11 et 15 ans ? d) Quel phénomène de la puberté ces mesures montrent-elles ?",
              hint: "Pour chaque année, soustrayez la taille de l'année précédente à celle de l'année suivante.",
              solution: [
                "a) De 11 à 12 ans : 146 - 140 = 6 cm. De 12 à 13 ans : 154 - 146 = 8 cm. De 13 à 14 ans : 159 - 154 = 5 cm. De 14 à 15 ans : 161 - 159 = 2 cm.",
                "b) C'est entre 12 et 13 ans que Léa a le plus grandi (8 cm).",
                "c) 161 - 140 = 21 cm (on vérifie : 6 + 8 + 5 + 2 = 21 cm).",
                "d) Ces mesures montrent la poussée de croissance de la puberté : la taille augmente vite, puis la croissance ralentit en fin de puberté.",
                "Résultat : Léa a grandi de 21 cm en 4 ans, avec un maximum de 8 cm entre 12 et 13 ans.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Inès a noté le premier jour de ses règles sur un calendrier : le 3 mars, le 31 mars, puis le 28 avril. a) Calculez la durée de chacun de ses deux cycles (du premier jour des règles au premier jour des règles suivantes). b) Expliquez avec vos mots ce que sont les règles. c) Son amie Maya a des cycles de 32 jours. Est-ce anormal ? d) Pendant une grossesse, les règles s'arrêtent. Proposez une explication.",
              hint: "Le mois de mars compte 31 jours. Pour d), pensez au rôle de la paroi de l'utérus quand un embryon s'y développe.",
              solution: [
                "a) Du 3 mars au 31 mars : 31 - 3 = 28 jours. Du 31 mars au 28 avril : il reste 0 jour en mars après le 31, puis 28 jours en avril, soit 28 jours.",
                "b) Chaque mois, la paroi intérieure de l'utérus s'épaissit. Quand il n'y a pas eu de fécondation, elle se détache et s'écoule par le vagin avec un peu de sang : ce sont les règles.",
                "c) Non : 28 jours n'est qu'une moyenne. La durée du cycle varie d'une personne à l'autre, et les cycles sont souvent irréguliers au début de la puberté.",
                "d) Pendant une grossesse, l'embryon puis le fœtus se développent dans l'utérus : la paroi de l'utérus doit rester en place pour le nourrir et le protéger, elle ne s'élimine donc pas.",
                "Résultat : deux cycles de 28 jours ; un cycle de 32 jours n'a rien d'anormal ; les règles s'arrêtent pendant la grossesse car la paroi de l'utérus est conservée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la puberté.",
            statements: [
              { text: "La puberté commence au même âge pour tout le monde.", true: false, why: "L'âge de début varie beaucoup : en général entre 8 et 13 ans chez les filles et entre 9 et 14 ans chez les garçons." },
              { text: "Les filles comme les garçons grandissent rapidement pendant la puberté.", true: true, why: "La poussée de croissance concerne les deux sexes." },
              { text: "Les ovules sont produits par les testicules.", true: false, why: "Les ovules sont libérés par les ovaires ; les testicules produisent les spermatozoïdes." },
              { text: "Les règles sont l'écoulement de la paroi de l'utérus, avec un peu de sang, quand il n'y a pas eu de fécondation.", true: true, why: "C'est exactement leur définition." },
              { text: "Les organes reproducteurs apparaissent seulement à la puberté.", true: false, why: "Ils sont présents dès la naissance ; ils commencent à fonctionner à la puberté." },
              { text: "Chez le garçon, la voix devient plus grave pendant la puberté.", true: true, why: "C'est la mue de la voix, un caractère sexuel secondaire." },
              { text: "Un enfant se forme à partir d'une cellule venant de la mère et d'une cellule venant du père.", true: true, why: "La cellule-œuf résulte de l'union d'un ovule et d'un spermatozoïde." },
            ],
          },
          quiz: [
            {
              q: "Quel organe produit les spermatozoïdes ?",
              options: ["Le pénis", "La vessie", "Les testicules", "L'utérus"],
              answer: 2,
              why: "À partir de la puberté, les testicules produisent des spermatozoïdes en continu.",
            },
            {
              q: "Lequel de ces changements est physiologique, c'est-à-dire lié au fonctionnement des organes ?",
              options: ["La poussée de croissance", "L'élargissement des épaules", "Le développement des seins", "L'apparition des règles"],
              answer: 3,
              why: "Les règles sont liées au fonctionnement de l'utérus et des ovaires. Les trois autres changements concernent l'aspect du corps : ils sont morphologiques.",
            },
            {
              q: "Que se passe-t-il chez une jeune fille, environ une fois par mois, après le début de la puberté ?",
              options: ["Un ovaire libère un ovule", "Les seins grossissent d'un coup", "L'utérus fabrique des spermatozoïdes"],
              answer: 0,
              why: "À partir de la puberté, les ovaires libèrent en général un ovule environ une fois par mois.",
            },
            {
              q: "Que sont les caractères sexuels secondaires ?",
              options: ["Les organes reproducteurs présents dès la naissance", "Les caractères qui apparaissent à la puberté", "Les maladies de l'adolescence", "Les cellules reproductrices"],
              answer: 1,
              why: "Les caractères sexuels secondaires (seins, barbe, voix grave, pilosité) apparaissent à la puberté ; les organes reproducteurs sont les caractères primaires.",
            },
            {
              q: "À quel âge la puberté commence-t-elle ?",
              options: ["Exactement à 12 ans, pour tout le monde", "Toujours après 15 ans chez les filles", "À un âge variable selon les personnes", "Dès l'entrée au collège, à 11 ans précisément"],
              answer: 2,
              why: "Chacun a son rythme : en général entre 8 et 13 ans chez les filles et entre 9 et 14 ans chez les garçons.",
            },
          ],
          trap: "Croire que la puberté arrive au même âge et de la même façon pour tous, ou que les organes reproducteurs apparaissent à la puberté : ils sont présents dès la naissance, mais ne commencent à fonctionner qu'à la puberté.",
          method: "Pour réviser, faites un tableau à deux colonnes (fille, garçon) et trois lignes (changements visibles, fonctionnement des organes, comportement). Écrivez les changements communs aux deux sur toute la largeur du tableau.",
        },
      ],
    },

    /* ==================================================================== */
    /* LA TERRE, UNE PLANÈTE ACTIVE                                           */
    /* ==================================================================== */
    {
      id: 'planete-terre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'systeme-solaire',
          title: 'La Terre dans le système solaire',
          minutes: 30,
          objectives: [
            "Situer la Terre dans le système solaire.",
            "Distinguer une étoile, une planète et un satellite.",
            "Caractériser les conditions de la vie sur Terre : eau liquide, atmosphère, température.",
          ],
          course: [
            {
              heading: "Le Soleil et ses planètes",
              paragraphs: [
                "Le système solaire est formé du Soleil et de tous les objets qui tournent autour de lui. Le Soleil est une étoile : une énorme boule de gaz très chaude qui produit sa propre lumière. Il est immense : on pourrait aligner environ 109 Terres le long de son diamètre.",
                "Huit planètes tournent autour du Soleil, chacune sur un chemin presque circulaire appelé orbite. Dans l'ordre à partir du Soleil : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Une planète ne produit pas de lumière : elle renvoie celle du Soleil. C'est pourquoi on peut voir Vénus ou Jupiter briller dans le ciel du soir.",
                "Autour de certaines planètes tournent des satellites naturels : la Lune est le satellite de la Terre, à environ 384 000 km de nous. Le système solaire contient aussi des planètes naines (comme Pluton, classée ainsi depuis 2006), des astéroïdes, rassemblés surtout entre Mars et Jupiter, et des comètes.",
              ],
              box: { label: "Définition", text: "Une étoile produit sa propre lumière (le Soleil). Une planète tourne autour d'une étoile et ne produit pas de lumière (la Terre). Un satellite tourne autour d'une planète (la Lune)." },
            },
            {
              heading: "Deux familles de planètes",
              paragraphs: [
                "Les quatre planètes les plus proches du Soleil, Mercure, Vénus, la Terre et Mars, sont des planètes rocheuses (on dit aussi telluriques) : elles sont plutôt petites et ont un sol solide sur lequel on pourrait marcher. Les quatre suivantes, Jupiter, Saturne, Uranus et Neptune, sont des planètes géantes, formées surtout de gaz, sans surface solide. Jupiter est la plus grande : plus de 1 300 Terres pourraient tenir dans son volume.",
                "Les distances sont immenses. La Terre est à environ 150 millions de kilomètres du Soleil : sa lumière met un peu plus de 8 minutes pour nous parvenir. Neptune est environ trente fois plus loin. Pour retenir l'ordre des planètes, on utilise une phrase dont chaque mot commence comme une planète, par exemple : « Me Voici Toute Mignonne, Je Suis Une Nébuleuse ».",
              ],
              box: { label: "Repère", text: "Ordre des planètes à partir du Soleil : Mercure, Vénus, Terre, Mars (planètes rocheuses), puis Jupiter, Saturne, Uranus, Neptune (planètes géantes). La Terre est la troisième planète." },
            },
            {
              heading: "La Terre, une planète habitable",
              paragraphs: [
                "La Terre est la seule planète connue où l'on trouve la vie. Elle réunit plusieurs conditions favorables. D'abord, sa distance au Soleil lui donne une température moyenne d'environ 15 °C, qui permet à l'eau d'exister à l'état liquide : océans, lacs, rivières. Or tous les êtres vivants ont besoin d'eau liquide.",
                "Ensuite, la Terre est entourée d'une atmosphère, une couche de gaz qui contient le dioxygène que nous respirons. Cette atmosphère retient une partie de la chaleur et arrête une partie des rayons dangereux du Soleil. Comparez avec ses voisines : Mercure, trop proche du Soleil et sans véritable atmosphère, passe d'environ 430 °C le jour à environ -180 °C la nuit ; Mars, plus éloignée, est très froide et son eau est gelée ; Vénus a une atmosphère si épaisse qu'il y fait environ 460 °C.",
              ],
              box: { label: "À retenir", text: "Les conditions de la vie sur Terre : de l'eau liquide, une atmosphère contenant du dioxygène, une température moyenne modérée (environ 15 °C) et l'énergie lumineuse du Soleil." },
            },
            {
              heading: "Une très longue histoire",
              paragraphs: [
                "La Terre s'est formée il y a environ 4,6 milliards d'années, en même temps que le Soleil et les autres planètes. Les plus anciennes traces de vie connues sont celles d'êtres vivants microscopiques, apparus dans les océans il y a plus de 3,5 milliards d'années. Les premiers êtres humains de notre espèce sont apparus très tard, il y a environ 300 000 ans.",
                "Pour imaginer ces durées, ramenez toute l'histoire de la Terre à une seule journée de 24 heures, commencée à minuit. La vie apparaît alors tôt le matin, vers 5 ou 6 heures, et notre espèce seulement dans les 6 dernières secondes avant minuit.",
              ],
            },
          ],
          keyPoints: [
            "Le système solaire comprend le Soleil (une étoile), huit planètes, leurs satellites, des planètes naines, des astéroïdes et des comètes.",
            "Ordre des planètes : Mercure, Vénus, Terre, Mars (rocheuses), Jupiter, Saturne, Uranus, Neptune (géantes).",
            "Une étoile produit sa lumière ; une planète renvoie celle de son étoile ; un satellite tourne autour d'une planète.",
            "La Terre est à environ 150 millions de km du Soleil ; la Lune est son satellite.",
            "Conditions de la vie sur Terre : eau liquide, atmosphère avec du dioxygène, température moyenne d'environ 15 °C.",
            "La Terre s'est formée il y a environ 4,6 milliards d'années.",
          ],
          example: {
            statement: "La lumière parcourt environ 300 000 km en une seconde. La Terre est à environ 150 000 000 km du Soleil. Combien de temps la lumière du Soleil met-elle pour arriver jusqu'à nous ? Donnez le résultat en secondes, puis en minutes et secondes.",
            solution: [
              "Je cherche combien de fois la lumière doit parcourir 300 000 km pour couvrir 150 000 000 km : c'est une division.",
              "150 000 000 ÷ 300 000 = 1 500 ÷ 3 = 500 secondes.",
              "Je convertis : 500 s = 8 × 60 s + 20 s, car 8 × 60 = 480 et 500 - 480 = 20.",
              "Résultat : la lumière du Soleil met environ 500 secondes, soit 8 minutes et 20 secondes, pour arriver sur Terre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque objet du ciel dans la bonne catégorie (étoile, planète ou satellite) : le Soleil, la Lune, Mars, Jupiter, la Terre, Sirius (un point brillant qui produit sa propre lumière, très loin du système solaire), Titan (qui tourne autour de Saturne).",
              hint: "Posez-vous deux questions : l'objet produit-il sa lumière ? Autour de quoi tourne-t-il ?",
              solution: [
                "Étoiles (elles produisent leur propre lumière) : le Soleil et Sirius.",
                "Planètes (elles tournent autour du Soleil) : Mars, Jupiter et la Terre.",
                "Satellites (ils tournent autour d'une planète) : la Lune (autour de la Terre) et Titan (autour de Saturne).",
              ],
            },
            {
              level: 2,
              statement: "Voici la distance au Soleil et la température moyenne de surface de cinq planètes (valeurs arrondies) : Mercure : 58 millions de km, 170 °C ; Vénus : 108 millions de km, 460 °C ; Terre : 150 millions de km, 15 °C ; Mars : 228 millions de km, -65 °C ; Jupiter : 778 millions de km, -110 °C. a) Rangez ces planètes de la plus proche à la plus éloignée du Soleil. b) Un élève affirme : « Plus une planète est loin du Soleil, plus elle est froide. » Trouvez l'exception et expliquez-la. c) Pourquoi la Terre est-elle la seule de ces planètes à avoir de l'eau liquide en surface ?",
              hint: "Pour b), comparez Mercure et Vénus. Pour c), rappelez-vous que l'eau est liquide entre 0 °C et 100 °C.",
              solution: [
                "a) Mercure (58), Vénus (108), Terre (150), Mars (228), Jupiter (778).",
                "b) L'exception est Vénus : elle est plus loin du Soleil que Mercure, mais plus chaude (460 °C contre 170 °C). Son atmosphère très épaisse retient la chaleur, alors que Mercure n'a presque pas d'atmosphère.",
                "c) Avec 15 °C en moyenne, la Terre est la seule de ces planètes dont la température est comprise entre 0 °C et 100 °C : l'eau peut y rester liquide. Ailleurs, elle serait gelée ou transformée en vapeur.",
                "Résultat : l'ordre est Mercure, Vénus, Terre, Mars, Jupiter ; Vénus fait exception à cause de son atmosphère ; la Terre a la bonne température pour l'eau liquide.",
              ],
            },
            {
              level: 3,
              statement: "Défi (valeurs arrondies). On veut construire un modèle réduit du système solaire. Le Soleil mesure 1 400 000 km de diamètre, la Terre 12 800 km, et la distance Terre-Soleil est de 150 000 000 km. Dans le modèle, le Soleil est un ballon de 1,4 m de diamètre. a) Combien de kilomètres réels représente 1 cm du modèle ? b) Quel est le diamètre de la Terre dans le modèle ? À quel objet ressemble-t-elle ? c) À quelle distance du ballon faut-il placer la Terre ? d) Neptune est environ 30 fois plus loin du Soleil que la Terre : à quelle distance du ballon faudrait-il la placer ?",
              hint: "Convertissez d'abord 1,4 m en centimètres, puis cherchez combien de kilomètres représente 1 cm.",
              solution: [
                "a) 1,4 m = 140 cm. 140 cm représentent 1 400 000 km, donc 1 cm représente 1 400 000 ÷ 140 = 10 000 km.",
                "b) 12 800 ÷ 10 000 = 1,28 cm : la Terre est une bille d'environ 1,3 cm de diamètre.",
                "c) 150 000 000 ÷ 10 000 = 15 000 cm, soit 150 m.",
                "d) 150 m × 30 = 4 500 m, soit 4,5 km.",
                "Résultat : avec un Soleil de 1,4 m, la Terre est une bille de 1,3 cm placée à 150 m, et Neptune serait à 4,5 km : le système solaire est surtout fait de vide.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque objet du système solaire à sa description.",
            pairs: [
              { left: "Soleil", right: "Étoile qui produit sa propre lumière" },
              { left: "Lune", right: "Satellite naturel de la Terre" },
              { left: "Jupiter", right: "La plus grande planète du système solaire" },
              { left: "Mercure", right: "La planète la plus proche du Soleil" },
              { left: "Pluton", right: "Planète naine depuis 2006" },
              { left: "Terre", right: "Seule planète connue où existe la vie" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que le Soleil ?",
              options: ["Une planète géante", "Un satellite de la Terre", "Une planète naine", "Une étoile"],
              answer: 3,
              why: "Le Soleil est une étoile : il produit sa propre lumière, contrairement aux planètes.",
            },
            {
              q: "Quelle est la place de la Terre à partir du Soleil ?",
              options: ["Première", "Deuxième", "Troisième", "Quatrième"],
              answer: 2,
              why: "Dans l'ordre : Mercure, Vénus, puis la Terre, troisième planète.",
            },
            {
              q: "Laquelle de ces planètes est une planète géante ?",
              options: ["Saturne", "Mars", "Vénus", "Mercure"],
              answer: 0,
              why: "Saturne, comme Jupiter, Uranus et Neptune, est une planète géante formée surtout de gaz. Les trois autres sont rocheuses.",
            },
            {
              q: "Pourquoi l'eau peut-elle être liquide à la surface de la Terre ?",
              options: ["Parce que la Terre est la plus grosse planète", "Grâce à une température modérée", "Parce que la Terre produit sa propre lumière", "Parce que la Lune la réchauffe"],
              answer: 1,
              why: "Avec environ 15 °C en moyenne, la Terre a une température comprise entre 0 °C et 100 °C, qui permet à l'eau de rester liquide.",
            },
            {
              q: "Combien de temps met la lumière du Soleil pour arriver sur Terre ?",
              options: ["Environ 8 secondes", "Environ 8 heures", "Environ 8 jours", "Environ 8 minutes"],
              answer: 3,
              why: "150 000 000 km ÷ 300 000 km par seconde = 500 s, soit environ 8 minutes et 20 secondes.",
            },
          ],
          trap: "Confondre étoile et planète : une planète, même très brillante dans le ciel comme Vénus, ne produit pas de lumière, elle renvoie celle du Soleil. Autre erreur : croire que la Lune est une planète, alors que c'est le satellite de la Terre.",
          method: "Pour retenir l'ordre des planètes, apprenez une phrase-mémoire, puis dessinez le système solaire de mémoire et vérifiez. Dans un calcul de distance, écrivez l'unité à chaque ligne et convertissez avant de calculer.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'jour-nuit-saisons',
          title: 'Les mouvements de la Terre : jours, nuits et saisons',
          minutes: 30,
          objectives: [
            "Décrire les mouvements de la Terre : rotation sur elle-même et révolution autour du Soleil.",
            "Expliquer l'alternance des jours et des nuits.",
            "Expliquer les saisons par l'inclinaison de l'axe de rotation de la Terre.",
            "Calculer la durée du jour à partir des heures de lever et de coucher du Soleil.",
          ],
          course: [
            {
              heading: "La rotation de la Terre : le jour et la nuit",
              paragraphs: [
                "La Terre tourne sur elle-même autour d'un axe imaginaire qui passe par le pôle Nord et le pôle Sud. Elle fait un tour complet en 24 heures environ : c'est la rotation. Elle tourne d'ouest en est. À chaque instant, une moitié de la Terre est éclairée par le Soleil (il y fait jour) et l'autre moitié est dans l'ombre (il y fait nuit).",
                "Comme nous tournons avec la Terre sans le sentir, nous avons l'impression que c'est le Soleil qui se déplace : il semble se lever à l'est, monter dans le ciel jusqu'au milieu de la journée, puis se coucher à l'ouest. C'est un mouvement apparent. Une analogie : sur un manège qui tourne, ce sont les maisons autour qui semblent défiler. Quand il est midi à Paris, il fait déjà nuit en Nouvelle-Calédonie, de l'autre côté de la Terre.",
              ],
              box: { label: "Définition", text: "La rotation est le mouvement de la Terre sur elle-même, en 24 heures environ, autour de l'axe des pôles. Elle explique l'alternance des jours et des nuits, et le mouvement apparent du Soleil d'est en ouest." },
            },
            {
              heading: "La révolution de la Terre autour du Soleil",
              paragraphs: [
                "En même temps, la Terre tourne autour du Soleil : c'est la révolution. Un tour complet dure environ 365 jours et un quart, c'est-à-dire une année. Comme le calendrier ne compte que 365 jours, on rattrape ce quart de jour en ajoutant un 29 février tous les quatre ans : ce sont les années bissextiles, comme 2024 et 2028.",
                "L'axe de rotation de la Terre n'est pas droit par rapport à son orbite : il est penché d'environ 23°. Pendant toute l'année, il reste penché dans la même direction, vers l'étoile Polaire. C'est cette inclinaison qui explique les saisons.",
              ],
              box: { label: "Repère", text: "Rotation : un tour sur elle-même en 24 heures environ → les jours et les nuits. Révolution : un tour autour du Soleil en 365 jours et un quart environ → une année." },
            },
            {
              heading: "Pourquoi y a-t-il des saisons ?",
              paragraphs: [
                "En juin, l'hémisphère Nord (la moitié de la Terre où se trouve la France métropolitaine) est penché vers le Soleil. Les rayons du Soleil y arrivent plus droits : ils chauffent davantage. Le Soleil monte haut dans le ciel et les journées sont longues : c'est l'été. En décembre, l'hémisphère Nord est penché du côté opposé au Soleil : les rayons arrivent de biais, ils chauffent moins, et les journées sont courtes : c'est l'hiver.",
                "Une analogie : éclairez une feuille avec une lampe de poche. Si la lampe est bien en face, la tache de lumière est petite et intense. Si vous penchez la lampe, la même lumière s'étale sur une plus grande surface, et chaque endroit est moins éclairé et moins chauffé. Attention : les saisons ne viennent pas de la distance au Soleil. La Terre est même un peu plus proche du Soleil début janvier, en plein hiver pour la France.",
                "Les saisons sont inversées dans l'hémisphère Sud : quand c'est l'été en France, c'est l'hiver en Australie, en Argentine ou à La Réunion. Près de l'équateur, la durée du jour change peu au cours de l'année. Près des pôles, au contraire, le Soleil ne se couche pas pendant des semaines en été, et ne se lève pas pendant des semaines en hiver.",
              ],
              box: { label: "Règle", text: "Les saisons s'expliquent par l'inclinaison de l'axe de la Terre, qui garde la même direction pendant toute sa révolution. Elles ne sont pas dues à la distance entre la Terre et le Soleil." },
            },
            {
              heading: "Solstices, équinoxes et durée du jour",
              paragraphs: [
                "Quatre dates marquent le début des saisons. Dans l'hémisphère Nord, le solstice d'été, vers le 21 juin, est le jour le plus long de l'année ; le solstice d'hiver, vers le 21 décembre, est le jour le plus court. Aux équinoxes de printemps (vers le 20 mars) et d'automne (vers le 22 septembre), le jour et la nuit durent chacun environ 12 heures, partout sur Terre.",
                "À Paris, la durée du jour passe d'un peu plus de 16 heures au solstice d'été à un peu plus de 8 heures au solstice d'hiver. Pour calculer la durée du jour, on fait la différence entre l'heure du coucher et l'heure du lever du Soleil, en calculant séparément les heures et les minutes.",
              ],
              box: { label: "Formule", text: "Durée du jour = heure du coucher du Soleil - heure du lever du Soleil. Exemple : lever à 6 h 30, coucher à 20 h 45 ; durée = 14 h 15 min." },
            },
          ],
          keyPoints: [
            "Rotation : la Terre tourne sur elle-même en 24 heures environ, d'ouest en est ; elle explique le jour et la nuit.",
            "Le Soleil semble se lever à l'est et se coucher à l'ouest : c'est un mouvement apparent.",
            "Révolution : la Terre tourne autour du Soleil en 365 jours et un quart environ.",
            "Les saisons sont dues à l'inclinaison de l'axe de la Terre (environ 23°), pas à la distance au Soleil.",
            "Solstice d'été (vers le 21 juin) : jour le plus long ; solstice d'hiver (vers le 21 décembre) : jour le plus court ; équinoxes : jour et nuit égaux.",
            "Les saisons sont inversées entre l'hémisphère Nord et l'hémisphère Sud.",
          ],
          example: {
            statement: "À Paris, le 21 juin, le Soleil se lève à 5 h 47 et se couche à 21 h 58. Le 21 décembre, il se lève à 8 h 42 et se couche à 16 h 56 (heures arrondies à la minute). Calculez la durée du jour à ces deux dates, puis la différence entre les deux.",
            solution: [
              "Le 21 juin : 21 h 58 - 5 h 47. Heures : 21 - 5 = 16 h. Minutes : 58 - 47 = 11 min. Durée : 16 h 11 min.",
              "Le 21 décembre : 16 h 56 - 8 h 42. Heures : 16 - 8 = 8 h. Minutes : 56 - 42 = 14 min. Durée : 8 h 14 min.",
              "Différence : 16 h 11 min - 8 h 14 min. Comme 11 est plus petit que 14, j'écris 16 h 11 min = 15 h 71 min. Puis 15 h 71 min - 8 h 14 min = 7 h 57 min.",
              "Résultat : le jour dure 16 h 11 min au solstice d'été et 8 h 14 min au solstice d'hiver, soit presque 8 heures de différence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Recopiez et complétez : « La Terre tourne sur elle-même en ... : c'est la ... . Ce mouvement explique ... . La Terre tourne autour du Soleil en ... : c'est la ... . Les saisons sont dues à ... de l'axe de la Terre. »",
              hint: "Les deux mouvements sont la rotation et la révolution : l'un dure un jour, l'autre une année.",
              solution: [
                "La Terre tourne sur elle-même en 24 heures environ : c'est la rotation.",
                "Ce mouvement explique l'alternance des jours et des nuits.",
                "La Terre tourne autour du Soleil en 365 jours et un quart environ : c'est la révolution.",
                "Les saisons sont dues à l'inclinaison de l'axe de la Terre.",
              ],
            },
            {
              level: 2,
              statement: "Voici les heures de lever et de coucher du Soleil dans une ville du nord de la France, pour trois dates (données arrondies). Jour A : lever 8 h 40, coucher 16 h 55. Jour B : lever 6 h 50, coucher 18 h 55. Jour C : lever 5 h 50, coucher 21 h 55. a) Calculez la durée du jour A, du jour B et du jour C. b) Ces trois jours sont le 20 mars, le 21 juin et le 21 décembre. Attribuez à chacun sa date, en justifiant.",
              hint: "Le jour le plus long de l'année est au solstice d'été ; aux équinoxes, le jour dure environ 12 heures.",
              solution: [
                "a) Jour A : 16 h 55 - 8 h 40 = 8 h 15 min. Jour B : 18 h 55 - 6 h 50 = 12 h 05 min. Jour C : 21 h 55 - 5 h 50 = 16 h 05 min.",
                "b) Le jour C est le plus long : c'est le 21 juin, solstice d'été.",
                "Le jour A est le plus court : c'est le 21 décembre, solstice d'hiver.",
                "Le jour B dure environ 12 heures : c'est le 20 mars, équinoxe de printemps.",
                "Résultat : A = 21 décembre (8 h 15 min), B = 20 mars (12 h 05 min), C = 21 juin (16 h 05 min).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un élève affirme : « En été, il fait chaud parce que la Terre est plus près du Soleil. » Données (arrondies) : début janvier, la Terre est à environ 147 millions de km du Soleil ; début juillet, à environ 152 millions de km. a) À quel moment de l'année la Terre est-elle la plus proche du Soleil ? Quelle saison est-ce en France ? b) Calculez la différence entre les deux distances. Combien de fois cette différence est-elle plus petite que 150 millions de km ? c) Quand c'est l'été en France, quelle saison est-ce en Australie ? Pourquoi cela contredit-il l'élève ? d) Donnez la véritable explication des saisons.",
              hint: "Si la distance expliquait les saisons, ce serait la même saison au même moment sur toute la Terre.",
              solution: [
                "a) La Terre est la plus proche du Soleil début janvier : c'est l'hiver en France. La distance n'explique donc pas l'été.",
                "b) 152 - 147 = 5 millions de km. 150 ÷ 5 = 30 : la différence est 30 fois plus petite que la distance moyenne, elle est faible.",
                "c) Quand c'est l'été en France, c'est l'hiver en Australie. Or la Terre est à la même distance du Soleil pour les deux pays : la distance ne peut donc pas expliquer qu'il y ait deux saisons différentes au même moment.",
                "d) L'axe de rotation de la Terre est incliné d'environ 23° et garde toujours la même direction. En juin, l'hémisphère Nord est penché vers le Soleil : les rayons arrivent plus droits et les journées sont plus longues, il fait plus chaud. En décembre, c'est l'inverse.",
                "Résultat : l'élève se trompe ; les saisons sont dues à l'inclinaison de l'axe de la Terre, pas à sa distance au Soleil.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Attention aux idées reçues sur les jours et les saisons.",
            statements: [
              { text: "La Terre fait un tour sur elle-même en 24 heures environ.", true: true, why: "C'est la rotation, qui explique l'alternance des jours et des nuits." },
              { text: "Le Soleil tourne autour de la Terre en une journée.", true: false, why: "C'est la Terre qui tourne sur elle-même ; le mouvement du Soleil dans le ciel n'est qu'apparent." },
              { text: "En été, la Terre est plus proche du Soleil.", true: false, why: "Pour la France, c'est même l'inverse : la Terre est la plus proche du Soleil début janvier." },
              { text: "Quand c'est l'été en France, c'est l'hiver en Australie.", true: true, why: "Les saisons sont inversées entre l'hémisphère Nord et l'hémisphère Sud." },
              { text: "Aux équinoxes, le jour et la nuit durent environ 12 heures partout sur Terre.", true: true, why: "C'est la définition de l'équinoxe, vers le 20 mars et le 22 septembre." },
              { text: "La Terre met environ un mois pour faire le tour du Soleil.", true: false, why: "Elle met environ 365 jours et un quart, soit une année. C'est la Lune qui tourne autour de la Terre en un mois environ." },
              { text: "En France, le jour le plus court de l'année tombe vers le 21 décembre.", true: true, why: "C'est le solstice d'hiver dans l'hémisphère Nord." },
            ],
          },
          quiz: [
            {
              q: "Quel mouvement de la Terre explique l'alternance des jours et des nuits ?",
              options: ["Sa rotation sur elle-même", "Sa révolution autour du Soleil", "Le mouvement de la Lune", "Le déplacement du Soleil"],
              answer: 0,
              why: "En tournant sur elle-même en 24 heures, la Terre présente tour à tour chaque région au Soleil (jour) puis à l'ombre (nuit).",
            },
            {
              q: "Combien de temps dure la révolution de la Terre autour du Soleil ?",
              options: ["Environ 24 heures", "Environ 28 jours", "Environ 365 jours", "Environ 10 ans"],
              answer: 2,
              why: "La Terre fait le tour du Soleil en 365 jours et un quart environ : c'est une année.",
            },
            {
              q: "Qu'est-ce qui explique les saisons ?",
              options: ["La distance variable entre la Terre et le Soleil", "L'inclinaison de l'axe de rotation de la Terre", "Les nuages qui cachent le Soleil en hiver", "La rotation de la Lune"],
              answer: 1,
              why: "L'axe de la Terre est incliné d'environ 23° et garde la même direction : chaque hémisphère reçoit les rayons plus ou moins droits selon la période de l'année.",
            },
            {
              q: "De quel côté le Soleil semble-t-il se lever ?",
              options: ["À l'est", "À l'ouest", "Au nord", "Au sud"],
              answer: 0,
              why: "La Terre tourne d'ouest en est : le Soleil semble donc apparaître à l'est et disparaître à l'ouest.",
            },
            {
              q: "Le 21 juin, en France, c'est :",
              options: ["L'équinoxe de printemps", "Le solstice d'hiver", "Le jour où la Terre est la plus proche du Soleil", "Le solstice d'été, le jour le plus long"],
              answer: 3,
              why: "Vers le 21 juin, l'hémisphère Nord est le plus penché vers le Soleil : c'est le solstice d'été, le jour le plus long de l'année.",
            },
          ],
          trap: "Expliquer les saisons par la distance entre la Terre et le Soleil : c'est faux, la Terre est même un peu plus proche du Soleil en janvier. Les saisons viennent de l'inclinaison de l'axe de la Terre. Autre erreur : confondre la rotation (sur elle-même, 24 heures) et la révolution (autour du Soleil, un an).",
          method: "Pour ne pas confondre rotation et révolution, pensez à une toupie qui tourne sur elle-même (rotation) tout en faisant le tour d'une table (révolution). Pour calculer une durée, soustrayez séparément les heures et les minutes ; si les minutes ne suffisent pas, transformez 1 heure en 60 minutes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'seismes-volcans',
          title: 'Séismes et volcans',
          minutes: 35,
          objectives: [
            "Décrire un séisme à l'aide du vocabulaire : foyer, épicentre, ondes sismiques, magnitude, intensité.",
            "Décrire une éruption volcanique et distinguer une éruption effusive d'une éruption explosive.",
            "Relier les séismes et les volcans à l'activité interne de la Terre et repérer leur répartition sur une carte du monde.",
          ],
          course: [
            {
              heading: "Une planète active",
              paragraphs: [
                "La Terre n'est pas une boule immobile : son intérieur est très chaud, et sa surface est découpée en grandes plaques rigides qui bougent très lentement, de quelques centimètres par an, à peu près la vitesse à laquelle poussent vos ongles. Ces mouvements sont à l'origine des séismes et des volcans, deux manifestations de l'activité interne de la Terre.",
                "Si l'on place sur une carte du monde les séismes et les volcans actifs, on constate qu'ils ne sont pas répartis au hasard : ils se concentrent sur des bandes étroites, souvent au bord des plaques. Une grande partie forme une ceinture autour de l'océan Pacifique, appelée « ceinture de feu » : Japon, Indonésie, Chili, côte ouest des États-Unis. D'autres zones actives traversent la Méditerranée (Italie, Grèce, Turquie) ou passent par l'Islande.",
              ],
              box: { label: "À retenir", text: "Les séismes et les volcans sont deux manifestations de l'activité interne de la Terre. Ils se répartissent sur des bandes étroites du globe, souvent au bord des plaques, par exemple tout autour de l'océan Pacifique." },
            },
            {
              heading: "Le séisme : la terre tremble",
              paragraphs: [
                "Un séisme, ou tremblement de terre, est une série de secousses du sol. En profondeur, les roches subissent des forces énormes : elles se déforment lentement, puis elles cassent brutalement, comme une règle en plastique que l'on plie jusqu'à ce qu'elle se rompe. Le lieu de cette rupture, en profondeur, s'appelle le foyer. Le point de la surface situé juste au-dessus du foyer est l'épicentre : c'est en général là que les secousses sont les plus fortes.",
                "À partir du foyer, des vibrations se propagent dans toutes les directions : ce sont les ondes sismiques. Elles sont enregistrées par des appareils, les sismomètres, qui tracent un sismogramme. Un séisme dure le plus souvent de quelques secondes à une ou deux minutes, et il peut être suivi de nouvelles secousses, les répliques. Sous la mer, un séisme peut soulever l'eau et provoquer une vague géante, un tsunami, comme au Japon le 11 mars 2011.",
                "On mesure un séisme de deux façons. La magnitude (sur l'échelle de Richter, par exemple) indique l'énergie libérée au foyer : c'est un seul nombre pour chaque séisme. Quand la magnitude augmente de 1, l'énergie libérée est environ 30 fois plus grande. L'intensité, notée de I à XII, décrit les effets observés en un lieu (objets qui tombent, murs fissurés, bâtiments détruits) : elle diminue en général quand on s'éloigne de l'épicentre.",
              ],
              box: { label: "Définition", text: "Foyer : lieu de rupture des roches, en profondeur. Épicentre : point de la surface situé au-dessus du foyer. Magnitude : énergie libérée par le séisme. Intensité : importance des effets et des dégâts en un lieu donné." },
            },
            {
              heading: "Le volcan : la roche fondue remonte",
              paragraphs: [
                "En certains endroits, à plusieurs dizaines de kilomètres de profondeur, des roches fondent et forment un magma, une roche liquide très chaude, à environ 1 000 °C. Plus léger que les roches qui l'entourent, le magma remonte et s'accumule dans un réservoir, sous le volcan. Lors d'une éruption, il monte par la cheminée et sort par le cratère. Une fois à l'air libre, le magma qui s'écoule s'appelle la lave ; il libère aussi des gaz.",
                "Un volcan est un relief construit par l'accumulation des laves et des projections, éruption après éruption. Certains volcans, comme le Piton de la Fournaise à La Réunion, émettent une lave fluide qui s'écoule en coulées le long des pentes : ce sont des éruptions effusives. Elles sont spectaculaires, mais rarement mortelles, car la lave avance assez lentement pour que l'on puisse s'écarter.",
                "D'autres volcans ont une lave épaisse et pâteuse, qui bouche la cheminée. Les gaz s'accumulent, puis tout explose : des nuées ardentes (avalanches brûlantes de gaz, de cendres et de blocs) dévalent les pentes à grande vitesse, et des panaches de cendres montent très haut dans le ciel. Ce sont des éruptions explosives, très dangereuses. En 1902, une nuée ardente de la montagne Pelée, en Martinique, a détruit la ville de Saint-Pierre et fait environ 28 000 morts. Dans l'Antiquité, en 79, l'éruption du Vésuve a enseveli la ville romaine de Pompéi.",
              ],
              box: { label: "Définition", text: "Éruption effusive : lave fluide, coulées de lave, peu d'explosions. Éruption explosive : lave pâteuse, explosions, nuées ardentes et panaches de cendres." },
            },
          ],
          keyPoints: [
            "Séismes et volcans traduisent l'activité interne de la Terre ; ils se concentrent sur des bandes étroites, comme la ceinture de feu du Pacifique.",
            "Un séisme naît d'une rupture brutale des roches au foyer ; l'épicentre est le point de la surface situé au-dessus.",
            "La magnitude mesure l'énergie libérée (un seul nombre) ; l'intensité mesure les effets en un lieu (de I à XII).",
            "Un volcan émet du magma venu des profondeurs ; à l'air libre, on l'appelle lave.",
            "Éruption effusive : lave fluide, coulées (Piton de la Fournaise). Éruption explosive : lave pâteuse, nuées ardentes, cendres (montagne Pelée, 1902).",
          ],
          example: {
            statement: "Un séisme se produit avec un foyer situé à 10 km sous la ville A. La ville B se trouve à 50 km de la ville A. a) Où se trouve l'épicentre ? b) Dans quelle ville l'intensité sera-t-elle sans doute la plus forte ? c) La magnitude sera-t-elle différente pour les habitants de A et de B ?",
            solution: [
              "a) L'épicentre est le point de la surface situé juste au-dessus du foyer : il se trouve donc dans la ville A.",
              "b) Les secousses sont en général les plus fortes près de l'épicentre et diminuent avec la distance : l'intensité sera sans doute plus forte dans la ville A que dans la ville B.",
              "c) Non : la magnitude mesure l'énergie libérée au foyer. C'est un seul nombre pour tout le séisme, le même pour A et pour B. Seule l'intensité change selon le lieu.",
              "Résultat : épicentre dans la ville A, intensité plus forte en A qu'en B, et une seule magnitude pour les deux villes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque mot à sa définition. Mots : foyer, épicentre, sismomètre, magma, lave, cratère. Définitions : a) roche fondue qui sort à l'air libre ; b) ouverture au sommet du volcan ; c) lieu de rupture des roches en profondeur ; d) roche fondue située en profondeur ; e) appareil qui enregistre les ondes sismiques ; f) point de la surface situé au-dessus du foyer.",
              hint: "Magma et lave désignent la même roche fondue : la différence tient à l'endroit où elle se trouve.",
              solution: [
                "Foyer → c) lieu de rupture des roches en profondeur.",
                "Épicentre → f) point de la surface situé au-dessus du foyer.",
                "Sismomètre → e) appareil qui enregistre les ondes sismiques.",
                "Magma → d) roche fondue située en profondeur.",
                "Lave → a) roche fondue qui sort à l'air libre.",
                "Cratère → b) ouverture au sommet du volcan.",
              ],
            },
            {
              level: 2,
              statement: "Deux observations de volcans. Volcan X : de la lave rouge et fluide jaillit en fontaines puis descend la pente en longues coulées ; il y a peu d'explosions. Volcan Y : un bouchon de lave très épaisse obstrue le cratère ; une forte explosion projette un panache de cendres à plus de 10 km de haut, et un nuage brûlant dévale la pente. a) Nommez le type d'éruption de chaque volcan. b) Lequel est le plus dangereux pour les habitants ? Justifiez. c) Donnez un exemple réel de volcan pour chaque type.",
              hint: "Regardez l'aspect de la lave (fluide ou pâteuse) et la présence d'explosions.",
              solution: [
                "a) Volcan X : lave fluide, coulées, peu d'explosions : éruption effusive. Volcan Y : lave pâteuse, explosion, panache, nuage brûlant (nuée ardente) : éruption explosive.",
                "b) Le volcan Y est le plus dangereux : les nuées ardentes dévalent les pentes très vite et brûlent tout sur leur passage, sans laisser le temps de fuir. Les coulées du volcan X avancent plus lentement.",
                "c) Type effusif : le Piton de la Fournaise, à La Réunion. Type explosif : la montagne Pelée, en Martinique (ou le Vésuve, en Italie).",
                "Résultat : X est effusif, Y est explosif et bien plus dangereux.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Quand la magnitude d'un séisme augmente de 1, l'énergie libérée est environ 30 fois plus grande. a) Combien de fois plus d'énergie libère un séisme de magnitude 6 qu'un séisme de magnitude 5 ? b) Et un séisme de magnitude 7 par rapport à un séisme de magnitude 5 ? c) Le séisme du Japon du 11 mars 2011 avait une magnitude de 9. Combien de fois plus d'énergie a-t-il libéré qu'un séisme de magnitude 6 ? d) Un séisme de magnitude 6 peut faire plus de victimes qu'un séisme de magnitude 7. Proposez deux raisons.",
              hint: "Chaque fois que la magnitude augmente de 1, on multiplie l'énergie par 30. Pour d), pensez à ce qui se trouve près de l'épicentre.",
              solution: [
                "a) De 5 à 6, la magnitude augmente de 1 : l'énergie est environ 30 fois plus grande.",
                "b) De 5 à 7, elle augmente de 2 : 30 × 30 = 900 fois plus d'énergie.",
                "c) De 6 à 9, elle augmente de 3 : 30 × 30 × 30 = 27 000 fois plus d'énergie.",
                "d) Le nombre de victimes ne dépend pas que de la magnitude. Le séisme de magnitude 6 peut toucher une ville très peuplée, proche de l'épicentre, avec des bâtiments fragiles, alors que celui de magnitude 7 se produit dans une région peu habitée, avec des constructions solides ou un foyer très profond.",
                "Résultat : environ 30 fois, 900 fois et 27 000 fois plus d'énergie ; les dégâts dépendent aussi de la population et des constructions proches de l'épicentre.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une éruption volcanique, depuis les profondeurs.",
            items: [
              "En profondeur, des roches fondent et forment du magma.",
              "Le magma, plus léger, remonte et s'accumule dans un réservoir sous le volcan.",
              "La pression des gaz augmente dans le réservoir.",
              "Le magma monte par la cheminée.",
              "La lave sort par le cratère et les gaz s'échappent.",
              "La lave refroidit et se solidifie : le volcan grandit.",
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on le point de la surface situé au-dessus du foyer d'un séisme ?",
              options: ["Le cratère", "Le sismomètre", "La réplique", "L'épicentre"],
              answer: 3,
              why: "L'épicentre est le point de la surface situé juste au-dessus du foyer, où les secousses sont en général les plus fortes.",
            },
            {
              q: "Que mesure la magnitude d'un séisme ?",
              options: ["Les dégâts observés dans une ville", "L'énergie libérée au foyer", "La durée des secousses", "La profondeur du foyer"],
              answer: 1,
              why: "La magnitude mesure l'énergie libérée : c'est un seul nombre par séisme. Les dégâts en un lieu sont décrits par l'intensité.",
            },
            {
              q: "Quel type d'éruption produit des nuées ardentes ?",
              options: ["Une éruption explosive", "Une éruption effusive, à lave fluide", "N'importe quelle éruption, sans exception"],
              answer: 0,
              why: "Les nuées ardentes sont produites par les éruptions explosives, quand une lave pâteuse bloque les gaz qui finissent par exploser.",
            },
            {
              q: "Où se concentrent une grande partie des séismes et des volcans ?",
              options: ["Au centre des continents, loin des côtes", "Tout autour de l'océan Pacifique", "Uniquement près des pôles", "Partout sur la Terre, de façon égale"],
              answer: 1,
              why: "Une grande partie des séismes et des volcans forme la « ceinture de feu » autour de l'océan Pacifique.",
            },
            {
              q: "Comment appelle-t-on le magma quand il sort à l'air libre ?",
              options: ["La cendre", "La roche mère", "La lave", "Le panache"],
              answer: 2,
              why: "En profondeur, la roche fondue s'appelle le magma ; quand elle s'écoule à l'air libre, on l'appelle la lave.",
            },
          ],
          trap: "Confondre magnitude et intensité : la magnitude mesure l'énergie libérée par le séisme (un seul nombre), l'intensité mesure les effets en un lieu (elle change selon l'endroit). Autre confusion fréquente : le foyer (en profondeur) et l'épicentre (en surface).",
          method: "Pour apprendre le vocabulaire, dessinez de mémoire deux schémas légendés : la coupe d'un séisme (foyer, épicentre, ondes) et la coupe d'un volcan (réservoir, cheminée, cratère, coulée). Pour reconnaître une éruption sur une photo, cherchez des coulées (effusive) ou un panache de cendres (explosive).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'risques-naturels',
          title: 'Les risques naturels et comment s\'en protéger',
          minutes: 30,
          objectives: [
            "Définir un risque naturel comme la rencontre d'un aléa et d'enjeux.",
            "Relier des phénomènes naturels (séismes, éruptions, tempêtes, inondations) à des risques pour les populations.",
            "Identifier des mesures de prévision, de prévention et de protection.",
            "Connaître les comportements à adopter en cas d'alerte.",
          ],
          course: [
            {
              heading: "Aléa, enjeux, risque",
              paragraphs: [
                "Un phénomène naturel devient dangereux quand il menace des personnes ou des biens. On distingue deux notions. L'aléa est le phénomène naturel qui peut se produire, avec une certaine force : un séisme, une éruption, une tempête, une inondation, une avalanche. Les enjeux sont les personnes, les habitations, les routes, les écoles ou les cultures qui peuvent être touchées.",
                "Il y a risque naturel quand un aléa menace des enjeux. Un séisme dans un désert sans habitants fait peu de dégâts : le risque est faible. Le même séisme sous une grande ville présente un risque majeur. Plus il y a de personnes exposées, et plus elles sont vulnérables (maisons peu solides, absence d'alerte, population mal informée), plus le risque est grand.",
              ],
              box: { label: "Définition", text: "Un risque naturel est la rencontre d'un aléa (le phénomène naturel possible) et d'enjeux (les personnes et les biens exposés). Sans enjeux, il n'y a pas de risque." },
            },
            {
              heading: "Les risques naturels en France",
              paragraphs: [
                "La France est exposée à plusieurs risques naturels. Les inondations sont le risque naturel le plus fréquent : elles touchent de nombreuses communes, au bord des rivières ou sur les côtes. Les tempêtes, les avalanches en montagne, les feux de forêt en été et les mouvements de terrain concernent aussi beaucoup de régions.",
                "Le risque sismique est le plus fort aux Antilles (Guadeloupe, Martinique) ; il existe aussi dans les Alpes, les Pyrénées et en Provence. Le risque volcanique concerne surtout les territoires d'outre-mer : la montagne Pelée en Martinique, la Soufrière en Guadeloupe et le Piton de la Fournaise à La Réunion. Aux Antilles et à La Réunion, il faut aussi compter avec les cyclones, des tempêtes tropicales très violentes.",
              ],
            },
            {
              heading: "Prévoir, prévenir, protéger",
              paragraphs: [
                "On ne peut pas empêcher un séisme ou une éruption, mais on peut réduire leurs conséquences. La prévision consiste à surveiller les phénomènes pour donner l'alerte à temps. Les volcans actifs sont surveillés par des observatoires, qui mesurent les petits séismes, le gonflement du sol et les gaz. Météo-France publie chaque jour une carte de vigilance en quatre couleurs (vert, jaune, orange, rouge) pour les orages, les vents violents, les fortes pluies ou la canicule. Les séismes, eux, ne peuvent pas être prévus.",
                "La prévention consiste à préparer le territoire et les habitants : interdire de construire dans les zones inondables, construire des bâtiments parasismiques, capables de résister aux secousses, informer la population et organiser des exercices. Dans chaque école et chaque collège, un plan particulier de mise en sûreté (PPMS) prévoit ce que font les élèves et les adultes en cas d'événement grave.",
                "La protection regroupe les ouvrages qui arrêtent ou détournent le danger : digues contre les inondations, filets et paravalanches en montagne, murs contre les chutes de pierres. Enfin, après la catastrophe, les secours (pompiers, sécurité civile) interviennent pour aider les victimes.",
              ],
              box: { label: "À retenir", text: "Prévision : surveiller pour alerter (observatoires, carte de vigilance). Prévention : se préparer (constructions adaptées, interdictions de construire, information, exercices). Protection : ouvrages qui arrêtent le danger (digues, paravalanches)." },
            },
            {
              heading: "Les bons réflexes",
              paragraphs: [
                "En cas de séisme : pendant les secousses, abritez-vous sous une table solide ou contre un mur intérieur, loin des fenêtres ; dehors, éloignez-vous des bâtiments et des fils électriques. Après les secousses, sortez calmement sans prendre l'ascenseur, et attendez-vous à des répliques. Au bord de la mer, si le sol a fortement tremblé, montez rapidement en hauteur : un tsunami peut suivre.",
                "En cas d'inondation : montez à l'étage, ne prenez pas la voiture et ne traversez jamais une route inondée, même à pied. Dans tous les cas, écoutez la radio et suivez les consignes des autorités, ne téléphonez qu'en cas d'urgence pour laisser les lignes libres aux secours, et n'allez pas chercher les enfants à l'école : ils y sont mis en sécurité par les adultes. En France, les sirènes d'alerte sont testées le premier mercredi de chaque mois, à midi.",
              ],
              box: { label: "Repère", text: "Numéros d'urgence : 112 (numéro d'urgence européen), 18 (pompiers), 15 (SAMU). Ils sont gratuits et joignables depuis n'importe quel téléphone." },
            },
          ],
          keyPoints: [
            "Risque naturel = rencontre d'un aléa (phénomène naturel possible) et d'enjeux (personnes et biens exposés).",
            "En France, les inondations sont le risque naturel le plus fréquent ; les Antilles sont les plus exposées aux séismes.",
            "Prévision : surveiller pour alerter. Prévention : se préparer avant. Protection : construire des ouvrages qui arrêtent le danger.",
            "Les séismes ne se prévoient pas, mais les bâtiments parasismiques et les exercices limitent les victimes.",
            "Séisme : s'abriter sous une table solide, loin des fenêtres. Inondation : monter à l'étage, ne pas prendre la voiture.",
          ],
          example: {
            statement: "Classez chacune des mesures suivantes dans la bonne catégorie (prévision, prévention ou protection) : a) une digue le long d'une rivière ; b) une carte de vigilance orange « pluie-inondation » ; c) l'interdiction de construire près du fleuve ; d) un sismomètre installé sur un volcan ; e) un exercice d'alerte au collège.",
            solution: [
              "Je rappelle les définitions : la prévision surveille pour alerter, la prévention prépare le territoire et les habitants, la protection arrête le danger par un ouvrage.",
              "b) et d) servent à surveiller et à alerter : ce sont des mesures de prévision.",
              "c) et e) préparent le territoire et la population avant l'événement : ce sont des mesures de prévention.",
              "a) est un ouvrage qui arrête l'eau : c'est une mesure de protection.",
              "Résultat : prévision : b, d ; prévention : c, e ; protection : a.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une petite ville (données fictives) est construite au bord d'un fleuve qui déborde parfois au printemps. Dans la zone qui peut être inondée se trouvent une école, 300 maisons et une route nationale. a) Quel est l'aléa ? b) Quels sont les enjeux ? c) Y a-t-il un risque ? Justifiez.",
              hint: "L'aléa est le phénomène naturel ; les enjeux sont ce qu'il peut toucher.",
              solution: [
                "a) L'aléa est l'inondation causée par le débordement du fleuve.",
                "b) Les enjeux sont les élèves et le personnel de l'école, les habitants des 300 maisons, les maisons elles-mêmes et la route nationale.",
                "c) Oui : l'aléa menace des enjeux nombreux, il y a donc un risque d'inondation.",
              ],
            },
            {
              level: 2,
              statement: "Deux pays imaginaires subissent chacun un séisme de magnitude 7 (données fictives). Dans le pays A, les bâtiments sont parasismiques, la population fait des exercices réguliers et les secours sont bien organisés : on compte 10 victimes. Dans le pays B, les maisons sont fragiles, la ville est très peuplée et la population n'a jamais été informée : on compte 5 000 victimes. a) L'aléa est-il le même dans les deux pays ? b) Expliquez la différence du nombre de victimes avec le vocabulaire du cours. c) Proposez deux mesures pour le pays B.",
              hint: "Même magnitude signifie même aléa ; cherchez ce qui change du côté des enjeux et de la préparation.",
              solution: [
                "a) Oui : les deux séismes ont la même magnitude, l'aléa est comparable.",
                "b) La différence vient des enjeux et de leur vulnérabilité. Le pays A a fait de la prévention (bâtiments parasismiques, exercices) : sa population est moins vulnérable. Le pays B a beaucoup d'enjeux (ville très peuplée) et ils sont très vulnérables (maisons fragiles, aucune information).",
                "c) Pour le pays B : imposer des règles de construction parasismique et organiser l'information et des exercices pour la population (on peut aussi citer l'organisation des secours).",
                "Résultat : à aléa égal, le risque est beaucoup plus grand dans le pays B, mal préparé.",
              ],
            },
            {
              level: 3,
              statement: "Défi (commune fictive). La commune de Valrive, située dans une région où le risque sismique est modéré, veut construire une nouvelle école. Trois terrains sont possibles. Terrain 1 : au bord de la rivière, dans une zone inondée il y a quelques années. Terrain 2 : au pied d'une falaise, où des chutes de pierres ont été observées. Terrain 3 : sur un plateau, à 20 m au-dessus de la rivière et loin de toute pente. a) Pour chaque terrain, nommez l'aléa principal. b) Quel terrain choisissez-vous ? Justifiez. c) Quelle règle de construction faut-il respecter, quel que soit le terrain ? d) Proposez deux mesures de prévention pour l'école une fois construite.",
              hint: "Cherchez le terrain où les enjeux (les élèves) seraient le moins exposés. N'oubliez pas le risque sismique de toute la région.",
              solution: [
                "a) Terrain 1 : inondation. Terrain 2 : chutes de pierres (mouvement de terrain). Terrain 3 : pas d'aléa particulier, en dehors du risque sismique commun à toute la commune.",
                "b) Le terrain 3 : il est hors de la zone inondable, grâce à sa hauteur, et loin de la falaise. Les élèves y seraient les moins exposés.",
                "c) La région connaît un risque sismique modéré : l'école doit être construite selon les règles parasismiques, pour résister aux secousses.",
                "d) Rédiger le plan particulier de mise en sûreté (PPMS) et organiser des exercices réguliers avec les élèves ; afficher les consignes de sécurité et informer les familles.",
                "Résultat : le terrain 3, avec une construction parasismique, un PPMS et des exercices.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition ou à son exemple.",
            pairs: [
              { left: "Aléa", right: "Phénomène naturel qui peut se produire" },
              { left: "Enjeux", right: "Personnes et biens exposés au danger" },
              { left: "Prévision", right: "Surveiller pour donner l'alerte à temps" },
              { left: "Prévention", right: "Se préparer avant : règles de construction, exercices" },
              { left: "Protection", right: "Ouvrage qui arrête le danger, comme une digue" },
              { left: "Bâtiment parasismique", right: "Construction conçue pour résister aux secousses" },
            ],
          },
          quiz: [
            {
              q: "Un séisme se produit dans un désert sans aucun habitant. Le risque est :",
              options: ["Majeur, car tout séisme est un risque très grave", "Faible, car il n'y a presque pas d'enjeux", "Nul, car les déserts ne tremblent jamais"],
              answer: 1,
              why: "Le risque naît de la rencontre d'un aléa et d'enjeux : sans habitants ni constructions, le risque est faible.",
            },
            {
              q: "Lequel de ces exemples est une mesure de protection ?",
              options: ["Une digue le long d'un fleuve", "Une carte de vigilance météo", "Un exercice d'alerte au collège", "Un sismomètre posé sur un volcan"],
              answer: 0,
              why: "La digue est un ouvrage qui arrête l'eau : c'est une protection. La carte et le sismomètre relèvent de la prévision, l'exercice de la prévention.",
            },
            {
              q: "Pendant un séisme, si vous êtes en classe, que devez-vous faire ?",
              options: ["Sortir en courant par l'escalier", "Prendre l'ascenseur pour sortir plus vite", "Vous abriter sous une table solide", "Ouvrir les fenêtres"],
              answer: 2,
              why: "Pendant les secousses, on s'abrite sous un meuble solide, loin des fenêtres ; on ne sort qu'après, calmement, sans ascenseur.",
            },
            {
              q: "Quel est le risque naturel le plus fréquent en France ?",
              options: ["Les éruptions volcaniques", "Les tsunamis", "Les cyclones", "Les inondations"],
              answer: 3,
              why: "Les inondations touchent de nombreuses communes, au bord des rivières et sur les côtes : c'est le risque naturel le plus fréquent en France.",
            },
            {
              q: "Peut-on prévoir la date exacte d'un séisme ?",
              options: ["Oui, plusieurs semaines à l'avance", "Oui, grâce à la carte de vigilance météo", "Non, mais on peut s'y préparer"],
              answer: 2,
              why: "Les séismes ne se prévoient pas ; on réduit le risque par la prévention (constructions parasismiques, exercices).",
            },
          ],
          trap: "Croire que le risque ne dépend que de la force du phénomène naturel : un même séisme fait beaucoup plus de victimes dans une zone très peuplée et mal préparée. Autre erreur : confondre la prévision (surveiller pour alerter) et la prévention (se préparer avant).",
          method: "Pour analyser une situation de risque, répondez toujours à trois questions dans l'ordre : quel est l'aléa ? quels sont les enjeux ? quelles mesures de prévision, de prévention et de protection peuvent réduire le risque ? Apprenez les consignes de sécurité comme des gestes à répéter.",
        },
      ],
    },

    /* ==================================================================== */
    /* LES ÊTRES VIVANTS DANS LEUR ENVIRONNEMENT                              */
    /* ==================================================================== */
    {
      id: 'vivants-environnement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'peuplement-milieux',
          title: 'Comment les êtres vivants peuplent un milieu',
          minutes: 30,
          objectives: [
            "Décrire un milieu de vie dans ses différentes composantes.",
            "Relier le peuplement d'un milieu aux conditions de vie : lumière, température, humidité, sol.",
            "Expliquer les modifications du peuplement d'un milieu au fil des saisons.",
            "Identifier comment les êtres vivants arrivent dans un milieu et le colonisent.",
          ],
          course: [
            {
              heading: "Un milieu, ses conditions et ses habitants",
              paragraphs: [
                "Un milieu de vie est un endroit où vivent des êtres vivants : une forêt, une mare, une prairie, une haie, une plage, et même la cour du collège. Pour décrire un milieu, on distingue deux types de composantes. D'un côté, les conditions physiques et chimiques : la lumière, la température, l'humidité, la nature du sol, la présence d'eau ou de vent. De l'autre, les êtres vivants qui l'habitent : végétaux, animaux, champignons, micro-organismes.",
                "On appelle peuplement d'un milieu l'ensemble des êtres vivants qui y vivent. Le milieu et son peuplement, avec toutes les relations qui les unissent (qui mange qui, qui s'abrite où), forment un écosystème.",
              ],
              box: { label: "Définition", text: "Le peuplement d'un milieu est l'ensemble des êtres vivants qui y vivent. Un écosystème est formé d'un milieu de vie et des êtres vivants qui l'habitent, en relation les uns avec les autres." },
            },
            {
              heading: "Chaque espèce vit là où les conditions lui conviennent",
              paragraphs: [
                "Les êtres vivants ne sont pas répartis au hasard : chaque espèce vit dans les endroits dont les conditions lui conviennent. Dans une forêt, les mousses et les fougères poussent surtout à l'ombre, sur un sol humide, alors que les plantes d'une prairie ensoleillée, comme le coquelicot, ont besoin de beaucoup de lumière. Les cloportes et les vers de terre vivent sous les pierres ou dans le sol, là où il fait humide et sombre.",
                "On peut le vérifier par une expérience : on place des cloportes dans une boîte dont une moitié est humide et sombre, l'autre sèche et éclairée. Au bout de quelques minutes, presque tous se sont regroupés du côté humide et sombre. Pour savoir lequel des deux facteurs compte (l'humidité ou l'obscurité), il faut ensuite faire une expérience où un seul facteur change à la fois.",
              ],
              box: { label: "À retenir", text: "La répartition des êtres vivants dans un milieu dépend des conditions de vie : lumière, température, humidité, nature du sol. Chaque espèce vit là où ces conditions lui conviennent." },
            },
            {
              heading: "Le peuplement change avec les saisons",
              paragraphs: [
                "Dans nos régions, l'hiver est une saison difficile : il fait froid et la nourriture manque. Les êtres vivants y font face de différentes façons, ce qui change le peuplement du milieu au fil des saisons. Certains oiseaux migrent : les hirondelles quittent la France à la fin de l'été pour passer l'hiver en Afrique, où elles trouvent des insectes, et reviennent au printemps.",
                "D'autres animaux restent mais ralentissent leur activité. Certains mammifères, comme le hérisson ou la marmotte, hibernent : leur température baisse, leur cœur bat lentement et ils vivent sur leurs réserves de graisse. Les animaux dont la température dépend de celle du milieu, comme le lézard, la grenouille ou l'escargot, s'engourdissent dans un abri : c'est la vie ralentie. Beaucoup d'insectes passent l'hiver sous forme d'œufs, de larves ou de chrysalides.",
                "Les végétaux aussi changent. Beaucoup d'arbres, comme le hêtre ou le chêne, perdent leurs feuilles à l'automne et passent l'hiver sous forme de bourgeons. Les plantes annuelles, comme le coquelicot, meurent et ne subsistent que sous forme de graines. D'autres plantes gardent des réserves sous terre, dans un bulbe (la tulipe) ou un tubercule (la pomme de terre), et repoussent au printemps.",
              ],
              box: { label: "Repère", text: "Face à l'hiver : migrer (hirondelle), hiberner (hérisson, marmotte), vivre au ralenti (lézard, escargot), passer l'hiver sous forme d'œufs ou de larves (beaucoup d'insectes), de graines (plantes annuelles) ou de bourgeons (arbres qui perdent leurs feuilles)." },
            },
            {
              heading: "Comment les êtres vivants arrivent dans un milieu",
              paragraphs: [
                "Un milieu nouveau, comme un terrain vague, un mur ou une mare que l'on vient de creuser, se peuple peu à peu. Les animaux y arrivent par leurs propres moyens : ils marchent, rampent, volent ou nagent. Les végétaux, eux, ne se déplacent pas : ce sont leurs graines, leurs spores ou des morceaux de plantes qui sont transportés par le vent, par l'eau ou par les animaux.",
                "Les premiers arrivants sont souvent des espèces peu exigeantes, comme les lichens, les mousses ou certaines herbes, qui supportent des conditions difficiles. En se développant, elles modifient le milieu : elles forment un peu de sol, retiennent l'humidité, font de l'ombre. D'autres espèces peuvent alors s'installer à leur tour. Une mare creusée dans un jardin accueille ainsi en quelques semaines des insectes volants, puis des escargots d'eau et parfois des grenouilles.",
              ],
            },
          ],
          keyPoints: [
            "Un milieu de vie se décrit par ses conditions (lumière, température, humidité, sol) et par les êtres vivants qui l'habitent.",
            "Le peuplement est l'ensemble des êtres vivants d'un milieu ; milieu et peuplement forment un écosystème.",
            "Chaque espèce vit là où les conditions lui conviennent : les êtres vivants ne sont pas répartis au hasard.",
            "En hiver, certains animaux migrent, d'autres hibernent ou vivent au ralenti ; beaucoup d'insectes passent l'hiver sous forme d'œufs ou de larves.",
            "Les arbres perdent souvent leurs feuilles et gardent des bourgeons ; les plantes annuelles ne subsistent que sous forme de graines.",
            "Un nouveau milieu est colonisé par des animaux qui se déplacent et par des graines ou des spores transportées.",
          ],
          example: {
            statement: "Dans une boîte, on place 20 cloportes au milieu. Une moitié de la boîte est humide et sombre, l'autre sèche et éclairée. Dix minutes plus tard, on compte 17 cloportes du côté humide et sombre, et 3 du côté sec et éclairé (données fictives). a) Que montre cette expérience ? b) Peut-on dire si c'est l'humidité ou l'obscurité qui attire les cloportes ? c) Comment améliorer l'expérience ?",
            solution: [
              "a) La grande majorité des cloportes (17 sur 20) s'est regroupée du côté humide et sombre : ils préfèrent ces conditions. Leur répartition dépend des conditions du milieu.",
              "b) Non : entre les deux côtés, deux facteurs changent en même temps, l'humidité et la lumière. On ne peut pas savoir lequel agit, ou si les deux agissent.",
              "c) Il faut faire deux expériences où un seul facteur change à la fois : une boîte entièrement sombre, avec un côté humide et un côté sec ; puis une boîte entièrement humide, avec un côté éclairé et un côté sombre.",
              "Résultat : les cloportes préfèrent un milieu humide et sombre, mais il faut faire varier un seul facteur à la fois pour savoir lequel les attire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez comment chacun de ces êtres vivants passe l'hiver dans nos régions : l'hirondelle, la marmotte, le lézard, la mésange, le chêne, le coquelicot. Choisissez parmi : migre, hiberne, vit au ralenti, reste actif, perd ses feuilles et garde ses bourgeons, ne subsiste que sous forme de graines.",
              hint: "Un seul de ces êtres vivants reste actif tout l'hiver : c'est un petit oiseau que l'on voit souvent aux mangeoires.",
              solution: [
                "L'hirondelle migre vers l'Afrique.",
                "La marmotte hiberne.",
                "Le lézard vit au ralenti.",
                "La mésange reste active et cherche sa nourriture tout l'hiver.",
                "Le chêne perd ses feuilles et garde ses bourgeons.",
                "Le coquelicot, plante annuelle, ne subsiste que sous forme de graines.",
              ],
            },
            {
              level: 2,
              statement: "Une classe compare deux zones d'un jardin (données fictives). Zone A, à l'ombre d'un mur, sol humide : beaucoup de mousses, 6 fougères, 25 cloportes, aucun lézard, aucun coquelicot. Zone B, en plein soleil, sol sec : aucune mousse, aucune fougère, 2 cloportes, 3 lézards, 12 coquelicots. a) Quelles conditions diffèrent entre les deux zones ? b) Reliez le peuplement de chaque zone à ses conditions. c) Proposez une explication à la présence des lézards en zone B.",
              hint: "Cherchez pour chaque espèce dans quelle zone elle est la plus nombreuse, puis rappelez-vous de quoi dépend la température du corps d'un lézard.",
              solution: [
                "a) La zone A est ombragée et humide ; la zone B est ensoleillée et sèche.",
                "b) Les mousses, les fougères et les cloportes, qui ont besoin d'humidité et d'ombre, vivent surtout en zone A. Les coquelicots, qui ont besoin de beaucoup de lumière, vivent en zone B.",
                "c) La température du corps du lézard dépend de celle du milieu : il a besoin de se réchauffer au soleil pour être actif. Il fréquente donc la zone ensoleillée.",
                "Résultat : le peuplement de chaque zone dépend de ses conditions de lumière et d'humidité.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Pour savoir ce qui attire les cloportes, une classe réalise deux expériences, avec 20 cloportes chacune. Boîte 1 : entièrement dans le noir, un côté humide et un côté sec. Résultat : 18 du côté humide, 2 du côté sec. Boîte 2 : entièrement humide, un côté éclairé et un côté sombre. Résultat : 15 du côté sombre, 5 du côté éclairé. a) Quel facteur varie dans chaque boîte ? b) Que montre chaque expérience ? c) Lequel des deux facteurs semble agir le plus fortement ? Justifiez. d) Expliquez pourquoi on trouve beaucoup de cloportes sous les pierres et les tas de feuilles.",
              hint: "Dans chaque boîte, un seul facteur change : comparez la part de cloportes qui choisissent le côté préféré.",
              solution: [
                "a) Boîte 1 : seule l'humidité varie. Boîte 2 : seule la lumière varie.",
                "b) Boîte 1 : 18 cloportes sur 20 choisissent le côté humide : ils recherchent l'humidité. Boîte 2 : 15 sur 20 choisissent le côté sombre : ils recherchent aussi l'obscurité.",
                "c) 18 sur 20 est plus que 15 sur 20 : l'humidité semble agir le plus fortement, mais les deux facteurs comptent.",
                "d) Sous les pierres et les tas de feuilles, il fait sombre et humide : ce sont exactement les conditions que recherchent les cloportes.",
                "Résultat : les cloportes recherchent à la fois l'humidité et l'obscurité, l'humidité semblant la plus importante ; c'est pourquoi ils vivent sous les pierres et les feuilles.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le peuplement des milieux.",
            statements: [
              { text: "Les êtres vivants sont répartis au hasard dans un milieu.", true: false, why: "Chaque espèce vit là où la lumière, la température, l'humidité et le sol lui conviennent." },
              { text: "Les hirondelles passent l'hiver en Afrique.", true: true, why: "Elles migrent à la fin de l'été vers l'Afrique, où elles trouvent des insectes, et reviennent au printemps." },
              { text: "Le hérisson hiberne : il vit au ralenti sur ses réserves de graisse.", true: true, why: "Pendant l'hibernation, sa température baisse et son cœur ralentit." },
              { text: "Tous les arbres perdent leurs feuilles en hiver.", true: false, why: "Le sapin, le pin ou le houx gardent leurs feuilles toute l'année." },
              { text: "Une plante peut coloniser un nouveau milieu grâce à ses graines transportées par le vent ou les animaux.", true: true, why: "Les végétaux ne se déplacent pas, mais leurs graines et leurs spores voyagent." },
              { text: "Un écosystème, ce sont seulement les animaux d'un milieu.", true: false, why: "Un écosystème réunit le milieu et tous les êtres vivants qui l'habitent, végétaux compris, avec leurs relations." },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on le peuplement d'un milieu ?",
              options: ["Les conditions de température et d'humidité du milieu", "L'ensemble des êtres vivants qui y vivent", "Le nombre d'habitants humains", "La nature du sol"],
              answer: 1,
              why: "Le peuplement désigne l'ensemble des êtres vivants d'un milieu : végétaux, animaux, champignons, micro-organismes.",
            },
            {
              q: "Quel animal migre pour passer l'hiver dans une région plus chaude ?",
              options: ["Le hérisson", "La marmotte", "L'hirondelle", "L'escargot"],
              answer: 2,
              why: "L'hirondelle part en Afrique ; le hérisson et la marmotte hibernent, l'escargot vit au ralenti.",
            },
            {
              q: "Dans une forêt, où trouve-t-on surtout des mousses ?",
              options: ["En plein soleil, sur un sol sec", "À l'ombre, sur un sol humide", "Uniquement au sommet des arbres"],
              answer: 1,
              why: "Les mousses ont besoin d'humidité et supportent l'ombre : on les trouve surtout dans les endroits ombragés et humides.",
            },
            {
              q: "Comment un chêne passe-t-il l'hiver ?",
              options: ["Il migre vers le sud", "Il meurt et ne laisse que des graines", "Il hiberne dans un terrier", "Sans feuilles, avec des bourgeons"],
              answer: 3,
              why: "Le chêne perd ses feuilles à l'automne et passe l'hiver sous forme de bourgeons, qui s'ouvriront au printemps.",
            },
            {
              q: "Une expérience compare deux côtés d'une boîte qui diffèrent à la fois par l'humidité et par la lumière. Quel est le problème ?",
              options: ["On ne sait pas quel facteur agit", "Les cloportes ne supportent pas l'humidité", "La boîte devrait être plus grande", "Il n'y a aucun problème"],
              answer: 0,
              why: "Quand deux facteurs changent en même temps, on ne peut pas savoir lequel explique le résultat : il faut n'en faire varier qu'un seul.",
            },
          ],
          trap: "Conclure trop vite d'une expérience où deux conditions changent en même temps : pour savoir quel facteur agit, il faut n'en faire varier qu'un seul. Autre erreur : croire que les animaux qu'on ne voit plus en hiver sont morts, alors qu'ils ont migré ou vivent au ralenti.",
          method: "Pour décrire un milieu, faites deux listes : les conditions (lumière, température, humidité, sol) et les êtres vivants observés. Reliez ensuite chaque être vivant aux conditions de l'endroit où vous l'avez trouvé : c'est ainsi qu'on explique un peuplement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reseaux-alimentaires',
          title: 'Chaînes et réseaux alimentaires',
          minutes: 30,
          objectives: [
            "Construire une chaîne alimentaire à partir de relations « est mangé par ».",
            "Identifier les producteurs, les consommateurs et les décomposeurs d'un milieu.",
            "Construire un réseau alimentaire et prévoir les conséquences de la disparition d'une espèce.",
          ],
          course: [
            {
              heading: "Qui mange qui ? La chaîne alimentaire",
              paragraphs: [
                "Dans un milieu, les êtres vivants sont reliés par leur alimentation. Une chaîne alimentaire est une suite d'êtres vivants dans laquelle chacun est mangé par le suivant. Par exemple, dans un jardin : la laitue est mangée par l'escargot, et l'escargot est mangé par le hérisson.",
                "Pour écrire une chaîne alimentaire, on relie les êtres vivants par des flèches. La flèche signifie « est mangé par » : elle part de celui qui est mangé et pointe vers celui qui mange. On écrit donc : laitue → escargot → hérisson. La flèche montre aussi le chemin de la matière : une partie de la matière de la laitue devient celle de l'escargot, puis celle du hérisson.",
              ],
              box: { label: "Règle", text: "Dans une chaîne alimentaire, la flèche signifie « est mangé par ». Elle va de l'être vivant mangé vers celui qui le mange. Une chaîne commence par un végétal chlorophyllien." },
            },
            {
              heading: "Producteurs, consommateurs, décomposeurs",
              paragraphs: [
                "Les végétaux chlorophylliens (plantes vertes, algues) sont les producteurs : ils fabriquent leur propre matière à partir d'eau, de sels minéraux, de dioxyde de carbone et de lumière. Ils sont au début des chaînes alimentaires. Les animaux sont des consommateurs : ils doivent manger d'autres êtres vivants pour fabriquer leur propre matière.",
                "Les herbivores, qui mangent des végétaux, sont les consommateurs de premier ordre (le lapin, la chenille, l'escargot). Les carnivores qui mangent des herbivores sont des consommateurs de deuxième ordre (le renard qui mange le lapin), ceux qui mangent ces carnivores sont de troisième ordre, et ainsi de suite.",
                "Enfin, les décomposeurs, surtout des champignons et des bactéries du sol, se nourrissent des restes des êtres vivants : feuilles mortes, cadavres, excréments. Aidés par de petits animaux du sol comme les vers de terre et les cloportes, ils transforment ces restes en sels minéraux, que les plantes peuvent à nouveau utiliser. Sans eux, la matière ne serait jamais recyclée.",
              ],
              box: { label: "Définition", text: "Producteur : être vivant qui fabrique sa propre matière grâce à la lumière (végétal chlorophyllien). Consommateur : être vivant qui mange d'autres êtres vivants (animal). Décomposeur : être vivant qui transforme les restes des êtres vivants en sels minéraux (champignons, bactéries)." },
            },
            {
              heading: "Le réseau alimentaire",
              paragraphs: [
                "Dans la réalité, un animal mange rarement une seule sorte de nourriture, et il est souvent mangé par plusieurs prédateurs. Le renard mange des lapins, mais aussi des mulots, des insectes et des fruits. Les chaînes alimentaires d'un milieu se croisent donc : leur ensemble forme un réseau alimentaire.",
                "Exemple dans une forêt : les feuilles du chêne sont mangées par les chenilles ; les chenilles par les mésanges ; les mésanges par l'épervier. Les glands du chêne sont mangés par les mulots ; les mulots par le renard et par la chouette. On obtient plusieurs chaînes reliées entre elles, qui partent toutes du chêne.",
              ],
              box: { label: "Définition", text: "Un réseau alimentaire est l'ensemble des chaînes alimentaires d'un milieu, reliées entre elles." },
            },
            {
              heading: "Un équilibre fragile",
              paragraphs: [
                "Dans un réseau, les espèces dépendent les unes des autres. Si une espèce disparaît ou devient trop nombreuse, les autres sont touchées. Par exemple, si l'on répand un insecticide qui tue les chenilles, les mésanges manquent de nourriture et deviennent moins nombreuses, et l'épervier, qui les chasse, aussi.",
                "À l'inverse, si les prédateurs disparaissent, leurs proies peuvent se multiplier : moins de renards et de chouettes, c'est plus de mulots, qui mangent davantage de glands et de graines. Un réseau alimentaire riche en espèces résiste mieux : si une nourriture manque, les animaux peuvent en trouver une autre.",
              ],
              box: { label: "À retenir", text: "La disparition d'une espèce a des conséquences sur celles qui la mangent et sur celles qu'elle mange. Plus un réseau compte d'espèces, mieux il résiste." },
            },
          ],
          keyPoints: [
            "Une chaîne alimentaire relie des êtres vivants par des flèches qui signifient « est mangé par ».",
            "Les producteurs (végétaux chlorophylliens) sont au début des chaînes.",
            "Les consommateurs mangent d'autres êtres vivants : herbivores (premier ordre), puis carnivores (deuxième ordre, troisième ordre...).",
            "Les décomposeurs (champignons, bactéries) transforment les restes des êtres vivants en sels minéraux.",
            "Un réseau alimentaire est l'ensemble des chaînes d'un milieu, reliées entre elles.",
            "La disparition d'une espèce touche toutes les espèces qui lui sont reliées.",
          ],
          example: {
            statement: "Dans une mare, les algues sont mangées par les daphnies (de minuscules crustacés). Les daphnies sont mangées par les épinoches (de petits poissons). Les épinoches sont mangées par le héron. Écrivez la chaîne alimentaire et donnez le rôle de chaque être vivant.",
            solution: [
              "Je repère l'être vivant qui ne mange personne et fabrique sa matière avec la lumière : les algues. Ce sont les producteurs, au début de la chaîne.",
              "Je relie chaque être vivant à celui qui le mange, avec une flèche « est mangé par » : algues → daphnies → épinoches → héron.",
              "Les daphnies mangent des végétaux : consommateurs de premier ordre. Les épinoches mangent les daphnies : consommateurs de deuxième ordre. Le héron mange les épinoches : consommateur de troisième ordre.",
              "Résultat : algues → daphnies → épinoches → héron ; un producteur, puis des consommateurs de premier, deuxième et troisième ordre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un élève a écrit la chaîne suivante : renard → lapin → herbe. a) Quelle erreur a-t-il commise ? b) Écrivez la chaîne correcte. c) Donnez le rôle de chaque être vivant.",
              hint: "Lisez chaque flèche en disant « est mangé par » : la phrase obtenue est-elle vraie ?",
              solution: [
                "a) En lisant « le renard est mangé par le lapin », on voit que les flèches sont inversées : l'élève les a lues comme « mange ».",
                "b) La chaîne correcte est : herbe → lapin → renard.",
                "c) L'herbe est le producteur ; le lapin, herbivore, est un consommateur de premier ordre ; le renard, carnivore, est un consommateur de deuxième ordre.",
              ],
            },
            {
              level: 2,
              statement: "Dans une forêt : le chêne (ses feuilles et ses glands) est mangé par la chenille et par le mulot. La chenille est mangée par la mésange. Le mulot est mangé par la chouette et par le renard. La mésange est mangée par l'épervier. a) Écrivez toutes les chaînes alimentaires de ce réseau. b) Combien y en a-t-il ? c) Classez les êtres vivants : producteur, consommateurs de premier, deuxième et troisième ordre.",
              hint: "Partez toujours du chêne et suivez chaque flèche possible jusqu'à un animal qui n'est mangé par personne dans la liste.",
              solution: [
                "a) Chaîne 1 : chêne → chenille → mésange → épervier. Chaîne 2 : chêne → mulot → chouette. Chaîne 3 : chêne → mulot → renard.",
                "b) Il y a 3 chaînes alimentaires.",
                "c) Producteur : le chêne. Premier ordre : la chenille et le mulot. Deuxième ordre : la mésange, la chouette et le renard. Troisième ordre : l'épervier.",
                "Résultat : 3 chaînes, qui partent toutes du chêne et forment un réseau alimentaire.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On reprend le réseau de la forêt de l'exercice précédent. a) Une maladie fait disparaître presque tous les mulots. Quelles conséquences pour la chouette, le renard et le chêne ? b) Un champ voisin est traité avec un insecticide qui tue les chenilles. Quelles conséquences pour la mésange et l'épervier ? c) Données fictives : pendant 18 jours, un couple de mésanges apporte à ses petits 500 chenilles par jour. Combien de chenilles en tout ? d) Pourquoi beaucoup de jardiniers installent-ils des nichoirs à mésanges ?",
              hint: "Suivez les flèches dans les deux sens : vers les mangeurs du mulot (ils manquent de nourriture) et vers ce que mange le mulot (ce sera moins mangé).",
              solution: [
                "a) La chouette et le renard perdent une partie de leur nourriture : ils deviennent moins nombreux ou doivent chercher d'autres proies. Les glands sont moins mangés : davantage peuvent germer et donner de jeunes chênes.",
                "b) Les mésanges manquent de nourriture et deviennent moins nombreuses ; l'épervier, qui les chasse, est touché à son tour.",
                "c) 500 × 18 = 9 000 chenilles en 18 jours.",
                "d) Les mésanges mangent de grandes quantités de chenilles qui abîment les plantes : les attirer avec des nichoirs permet de protéger le jardin sans insecticide.",
                "Résultat : la disparition d'une espèce se répercute sur tout le réseau ; un couple de mésanges consomme environ 9 000 chenilles en 18 jours dans cet exemple.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez cette chaîne alimentaire dans l'ordre, du producteur au dernier consommateur.",
            items: [
              "L'herbe",
              "Le criquet",
              "Le lézard",
              "La couleuvre",
              "La buse",
            ],
          },
          quiz: [
            {
              q: "Dans une chaîne alimentaire, que signifie la flèche ?",
              options: ["« mange »", "« vit à côté de »", "« est plus grand que »", "« est mangé par »"],
              answer: 3,
              why: "La flèche se lit « est mangé par » : elle va du mangé vers le mangeur, dans le sens où passe la matière.",
            },
            {
              q: "Lequel de ces êtres vivants est un producteur ?",
              options: ["Le lapin", "Le champignon", "L'herbe", "Le ver de terre"],
              answer: 2,
              why: "L'herbe est un végétal chlorophyllien : elle fabrique sa propre matière grâce à la lumière.",
            },
            {
              q: "Quel est le rôle des décomposeurs ?",
              options: ["Manger les herbivores", "Recycler les restes en sels minéraux", "Fabriquer de la matière avec la lumière", "Polliniser les fleurs"],
              answer: 1,
              why: "Les décomposeurs (champignons, bactéries) transforment les restes des êtres vivants en sels minéraux réutilisés par les plantes.",
            },
            {
              q: "Le lapin, qui mange de l'herbe, est :",
              options: ["Un producteur", "Un consommateur de premier ordre", "Un décomposeur", "Un consommateur de deuxième ordre"],
              answer: 1,
              why: "Le lapin est herbivore : il mange directement le producteur, c'est un consommateur de premier ordre.",
            },
            {
              q: "Si les renards et les chouettes disparaissent d'une forêt, que risque-t-il de se passer ?",
              options: ["Les mulots vont se multiplier", "Les chênes vont disparaître aussitôt", "Il n'y aura aucun changement"],
              answer: 0,
              why: "Sans leurs prédateurs, les mulots ne sont plus régulés et deviennent plus nombreux.",
            },
          ],
          trap: "Inverser le sens des flèches : on n'écrit pas « renard → lapin » (le renard mange le lapin) mais « lapin → renard », car la flèche se lit « est mangé par ». Autre erreur : oublier que la chaîne commence par un végétal chlorophyllien.",
          method: "Avant de dessiner une chaîne, écrivez chaque relation sous forme de phrase « ... est mangé par ... », puis tracez les flèches. Vérifiez ensuite que la chaîne commence par un végétal chlorophyllien et que chaque flèche pointe vers le mangeur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'activites-humaines',
          title: 'Les activités humaines et l\'environnement',
          minutes: 30,
          objectives: [
            "Identifier quelques impacts des activités humaines sur un environnement.",
            "Distinguer des actions qui dégradent un milieu et des actions qui le protègent ou le restaurent.",
            "Proposer des gestes et des aménagements favorables à la biodiversité.",
          ],
          course: [
            {
              heading: "Les êtres humains transforment les milieux",
              paragraphs: [
                "Pour se loger, se nourrir, se déplacer et produire des objets, les êtres humains modifient les milieux : ils construisent des villes et des routes, cultivent des champs, coupent des forêts, pêchent, creusent des mines, rejettent des déchets. Ces activités sont nécessaires, mais elles ont des conséquences sur les autres êtres vivants.",
                "La biodiversité est la diversité du vivant : la variété des espèces, mais aussi des individus d'une même espèce et des milieux. Les scientifiques constatent qu'elle diminue rapidement dans le monde, à cause des activités humaines.",
              ],
              box: { label: "Définition", text: "La biodiversité est la diversité des êtres vivants : la variété des espèces, des individus d'une même espèce et des milieux où ils vivent." },
            },
            {
              heading: "Des impacts négatifs",
              paragraphs: [
                "La destruction des habitats est la première cause du recul de la biodiversité. Quand on assèche une zone humide, qu'on arrache une haie ou qu'on recouvre un champ de béton, les espèces qui y vivaient perdent leur abri et leur nourriture. Les routes découpent aussi les milieux : les animaux qui les traversent risquent d'être écrasés.",
                "La pollution touche l'air, l'eau et les sols : pesticides répandus dans les champs, eaux usées, déchets. Les objets en plastique mettent très longtemps à se dégrader et s'accumulent dans les océans, où des tortues et des oiseaux les avalent. La surexploitation, comme la surpêche, prélève les animaux plus vite qu'ils ne se reproduisent.",
                "Des espèces transportées par les humains loin de leur région d'origine peuvent aussi envahir un milieu : ce sont des espèces exotiques envahissantes. Le frelon asiatique, arrivé accidentellement en France vers 2004, chasse les abeilles devant les ruches. Enfin, le changement climatique, causé surtout par les gaz rejetés quand on brûle du pétrole, du gaz et du charbon, modifie les conditions de vie de nombreuses espèces.",
              ],
              box: { label: "À retenir", text: "Les principales menaces sur la biodiversité : la destruction des habitats, la pollution, la surexploitation, les espèces exotiques envahissantes et le changement climatique." },
            },
            {
              heading: "Protéger et restaurer",
              paragraphs: [
                "Les êtres humains peuvent aussi agir en faveur des milieux. On protège des espaces : la France compte des parcs nationaux (le premier, celui de la Vanoise, a été créé en 1963) et de nombreuses réserves naturelles, où certaines activités sont interdites ou limitées. On protège aussi des espèces menacées, en interdisant de les chasser, de les pêcher ou de les cueillir.",
                "On peut également restaurer des milieux abîmés : replanter des haies, recréer des mares, construire des passages pour les animaux au-dessus ou au-dessous des routes, installer des passes à poissons à côté des barrages. Certaines espèces disparues d'une région y ont été réintroduites, comme le vautour fauve dans les gorges de la Jonte et du Tarn, dans les Grands Causses.",
              ],
            },
            {
              heading: "Agir au quotidien",
              paragraphs: [
                "Chacun peut agir à son échelle. Trier ses déchets permet de recycler le verre, le papier, les métaux et certains plastiques, donc d'utiliser moins de matières premières. Réduire ses déchets, par exemple en utilisant une gourde plutôt que des bouteilles jetables, est encore plus efficace. Au jardin ou au collège, on peut installer un nichoir ou un hôtel à insectes, laisser un coin d'herbes non tondues et renoncer aux pesticides.",
                "Les choix d'une commune comptent aussi : éteindre l'éclairage public une partie de la nuit aide les animaux nocturnes (chauves-souris, papillons de nuit), et laisser pousser des fleurs sauvages au bord des routes nourrit les insectes pollinisateurs. Ces gestes, multipliés par des millions de personnes, ont un effet important.",
              ],
              box: { label: "Règle", text: "Pour protéger la biodiversité : préserver les milieux, limiter les pollutions et les déchets, ne jamais relâcher dans la nature une espèce venue d'ailleurs, et laisser de la place à la nature, même en ville." },
            },
          ],
          keyPoints: [
            "La biodiversité est la diversité des espèces, des individus et des milieux ; elle recule à cause des activités humaines.",
            "La destruction des habitats est la première cause du recul de la biodiversité.",
            "Autres menaces : pollution, surexploitation, espèces exotiques envahissantes, changement climatique.",
            "On protège des espaces (parcs nationaux, réserves) et des espèces, et on restaure des milieux (haies, mares, passages pour la faune).",
            "Gestes utiles : réduire et trier ses déchets, installer des nichoirs, éviter les pesticides, laisser des coins de nature.",
          ],
          example: {
            statement: "Une commune veut agrandir le parking de la salle des fêtes en comblant une mare où vivent des tritons, des grenouilles et des larves de libellules. a) Quel type d'impact ce projet aurait-il ? b) Quelles conséquences pour les êtres vivants de la mare et pour ceux qui les mangent ? c) Proposez une solution.",
            solution: [
              "a) Combler la mare détruit un milieu de vie : c'est une destruction d'habitat, la première cause du recul de la biodiversité.",
              "b) Les tritons, les grenouilles et les libellules perdent l'endroit où ils se reproduisent : ils disparaîtraient du secteur. Les animaux qui les mangent (oiseaux, couleuvres) perdraient une partie de leur nourriture, par le réseau alimentaire.",
              "c) Agrandir le parking d'un autre côté pour conserver la mare, ou, si c'est impossible, recréer une mare semblable à proximité avant les travaux.",
              "Résultat : le projet détruirait un habitat et toucherait tout le réseau alimentaire ; mieux vaut conserver la mare ou en recréer une.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces actions en deux colonnes, « dégrade le milieu » ou « protège ou restaure le milieu » : arracher une haie ; installer un nichoir ; jeter un emballage en plastique dans la rivière ; créer une réserve naturelle ; relâcher une tortue exotique dans un étang ; replanter des arbres le long d'un ruisseau.",
              hint: "Demandez-vous si l'action enlève un abri ou de la nourriture aux êtres vivants, ou si elle en crée.",
              solution: [
                "Dégrade le milieu : arracher une haie (destruction d'habitat) ; jeter un emballage dans la rivière (pollution) ; relâcher une tortue exotique (espèce venue d'ailleurs qui peut devenir envahissante).",
                "Protège ou restaure le milieu : installer un nichoir ; créer une réserve naturelle ; replanter des arbres le long d'un ruisseau.",
              ],
            },
            {
              level: 2,
              statement: "Dans une classe de 25 élèves, chacun utilise une bouteille d'eau en plastique jetable par jour de classe, 4 jours par semaine, pendant 36 semaines (données fictives). a) Combien de bouteilles la classe utilise-t-elle dans l'année ? b) Une bouteille vide pèse 30 g : quelle masse de plastique cela représente-t-il, en kilogrammes ? c) Proposez une solution, et dites pourquoi elle est meilleure que le seul recyclage.",
              hint: "Multipliez le nombre d'élèves par le nombre de jours de classe dans l'année. Rappel : 1 kg = 1 000 g.",
              solution: [
                "a) Nombre de jours de classe : 4 × 36 = 144 jours. Nombre de bouteilles : 25 × 144 = 3 600 bouteilles.",
                "b) 3 600 × 30 g = 108 000 g, soit 108 000 ÷ 1 000 = 108 kg de plastique.",
                "c) Chaque élève peut utiliser une gourde remplie au robinet. C'est mieux que le recyclage seul, car le déchet n'est pas produit du tout : on économise le plastique, l'énergie de fabrication et celle du recyclage.",
                "Résultat : 3 600 bouteilles et 108 kg de plastique par an, que des gourdes permettraient d'éviter.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le frelon asiatique est arrivé accidentellement en France vers 2004. Il chasse les abeilles devant les ruches et a peu d'ennemis naturels en France. Or les abeilles pollinisent les fleurs des pommiers. a) À quelle catégorie de menace sur la biodiversité le frelon asiatique appartient-il ? b) Pourquoi une espèce introduite peut-elle se multiplier très vite dans un nouveau milieu ? c) Écrivez une chaîne alimentaire qui contient le frelon asiatique. d) Expliquez les conséquences possibles pour un producteur de pommes. e) Pourquoi ne faut-il jamais relâcher dans la nature un animal ou une plante venus d'ailleurs ?",
              hint: "Pour d), reprenez le lien entre pollinisation, fécondation et formation des fruits.",
              solution: [
                "a) C'est une espèce exotique envahissante.",
                "b) Dans son nouveau milieu, elle trouve de la nourriture mais peu de prédateurs ou de maladies qui limitent sa population : rien ne freine sa multiplication.",
                "c) Fleur de pommier (nectar et pollen) → abeille → frelon asiatique.",
                "d) Si les frelons tuent beaucoup d'abeilles, moins de fleurs de pommiers sont pollinisées. Sans pollinisation, pas de fécondation, donc moins de pommes : la récolte diminue.",
                "e) Une espèce venue d'ailleurs peut devenir envahissante, concurrencer ou manger les espèces locales et déséquilibrer tout le réseau alimentaire.",
                "Résultat : le frelon asiatique, espèce exotique envahissante, menace les abeilles et donc, par la pollinisation, la production de fruits.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à l'exemple qui lui correspond.",
            pairs: [
              { left: "Destruction d'habitat", right: "Assécher une zone humide pour construire" },
              { left: "Pollution", right: "Répandre des pesticides qui atteignent une rivière" },
              { left: "Surexploitation", right: "Pêcher les poissons plus vite qu'ils ne se reproduisent" },
              { left: "Espèce exotique envahissante", right: "Le frelon asiatique, arrivé en France vers 2004" },
              { left: "Restauration d'un milieu", right: "Replanter une haie ou recréer une mare" },
              { left: "Protection d'un espace", right: "Créer un parc national ou une réserve naturelle" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la première cause du recul de la biodiversité ?",
              options: ["Les éruptions volcaniques et les séismes", "La destruction des habitats", "Le froid de l'hiver", "L'action des décomposeurs"],
              answer: 1,
              why: "La destruction des habitats (villes, routes, assèchement des zones humides, arrachage des haies) prive les espèces d'abri et de nourriture.",
            },
            {
              q: "Qu'est-ce qu'une espèce exotique envahissante ?",
              options: ["Une espèce très rare, protégée par la loi française", "Une espèce venue d'ailleurs qui prolifère", "Une espèce disparue depuis longtemps", "Un oiseau qui migre chaque hiver"],
              answer: 1,
              why: "C'est une espèce transportée par les humains hors de sa région d'origine, qui se multiplie et perturbe les espèces locales.",
            },
            {
              q: "Lequel de ces gestes favorise la biodiversité ?",
              options: ["Tondre tout le terrain chaque semaine", "Éclairer le jardin toute la nuit", "Installer un nichoir et une mare", "Traiter les fleurs avec des insecticides"],
              answer: 2,
              why: "Un nichoir et une mare offrent un abri et un lieu de reproduction à de nombreuses espèces.",
            },
            {
              q: "Quel est le premier parc national créé en France, en 1963 ?",
              options: ["Les Cévennes", "Les Écrins", "Les Pyrénées", "La Vanoise"],
              answer: 3,
              why: "Le parc national de la Vanoise, dans les Alpes, a été le premier parc national français, créé en 1963.",
            },
            {
              q: "Pourquoi le tri des déchets aide-t-il l'environnement ?",
              options: ["Il permet de recycler des matériaux", "Il fait disparaître toute forme de pollution", "Il remplace la protection des milieux"],
              answer: 0,
              why: "Le tri permet de recycler le verre, le papier, les métaux et certains plastiques, donc d'utiliser moins de matières premières.",
            },
          ],
          trap: "Croire que seules les grandes catastrophes menacent la biodiversité : des gestes ordinaires comptent aussi (arracher une haie, utiliser des pesticides, relâcher un animal exotique dans la nature). Autre erreur : penser que le recyclage suffit, alors que réduire ses déchets est encore plus efficace.",
          method: "Pour analyser l'impact d'une activité humaine, posez trois questions : qu'est-ce qui change dans le milieu ? quelles espèces sont touchées, directement ou par le réseau alimentaire ? quelle solution permettrait de concilier l'activité et la protection du milieu ?",
        },
      ],
    },

    /* ==================================================================== */
    /* LES OBJETS TECHNIQUES                                                  */
    /* ==================================================================== */
    {
      id: 'objets-techniques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-objets',
          title: 'Comment un objet technique a évolué dans le temps',
          minutes: 30,
          objectives: [
            "Identifier le besoin auquel répond un objet technique.",
            "Repérer les principales évolutions d'un objet dans le temps et les situer sur une frise chronologique.",
            "Relier l'évolution d'un objet aux progrès techniques, aux matériaux, aux sources d'énergie et aux attentes des utilisateurs.",
          ],
          course: [
            {
              heading: "Un objet technique répond à un besoin",
              paragraphs: [
                "Un objet technique est un objet fabriqué par l'être humain pour répondre à un besoin : se déplacer, s'éclairer, communiquer, se nourrir, se protéger. Une fourchette, un vélo, une lampe de poche ou un téléphone sont des objets techniques. Un caillou ou une branche ramassés tels quels n'en sont pas : personne ne les a conçus ni fabriqués.",
                "Le besoin, lui, change peu : depuis toujours, les êtres humains ont besoin de se déplacer ou de communiquer à distance. Ce qui change, ce sont les objets qui y répondent. Pour communiquer à distance, on est passé du messager à cheval à la lettre, puis au télégraphe, au téléphone fixe et enfin au téléphone portable.",
              ],
              box: { label: "Définition", text: "Un objet technique est un objet conçu et fabriqué par l'être humain pour répondre à un besoin. Une suite d'objets qui répondent au même besoin avec le même principe de fonctionnement forme une lignée d'objets." },
            },
            {
              heading: "Exemple : l'évolution du vélo",
              paragraphs: [
                "En 1817, l'Allemand Karl Drais invente la draisienne : un cadre en bois, deux roues et un guidon, mais pas de pédales. On avance en poussant le sol avec les pieds. Dans les années 1860, en France, on fixe des pédales directement sur la roue avant : c'est le vélocipède, mis au point notamment par Pierre Michaux.",
                "Avec des pédales fixées sur la roue, un tour de pédale fait faire un seul tour à la roue. Pour aller plus vite, on agrandit donc la roue avant : dans les années 1870 apparaît le grand-bi, dont la roue avant peut dépasser 1,30 m de diamètre. Il est rapide, mais les chutes sont dangereuses. En 1885, la bicyclette dite « de sécurité » change tout : deux roues de même taille, et une chaîne qui transmet le mouvement des pédales à la roue arrière. En 1888, John Boyd Dunlop met au point le pneu gonflé d'air, bien plus confortable.",
                "Au XXe siècle, le dérailleur permet de changer de vitesse, les cadres en acier sont souvent remplacés par de l'aluminium ou des matériaux composites plus légers, et le VTT apparaît à la fin des années 1970. Aujourd'hui, le vélo à assistance électrique ajoute un moteur et une batterie. Le besoin, lui, n'a pas changé : se déplacer.",
              ],
              box: { label: "Repère", text: "1817 : draisienne. Années 1860 : vélocipède à pédales. Années 1870 : grand-bi. 1885 : bicyclette à chaîne. 1888 : pneu à air. XXe siècle : dérailleur, cadres légers, VTT. Aujourd'hui : vélo à assistance électrique." },
            },
            {
              heading: "Pourquoi les objets évoluent-ils ?",
              paragraphs: [
                "Plusieurs causes expliquent l'évolution d'un objet. Les progrès techniques apportent de nouvelles solutions (la chaîne, le pneu à air, l'électronique). De nouveaux matériaux rendent l'objet plus léger, plus solide ou moins cher (le bois remplacé par l'acier, puis par l'aluminium). De nouvelles sources d'énergie apparaissent (la force des muscles complétée par un moteur électrique).",
                "Les attentes des utilisateurs comptent aussi : plus de confort, de sécurité, de rapidité, un prix plus bas, mais aussi la mode et l'esthétique. Aujourd'hui, on cherche également à réduire l'impact sur l'environnement : objets réparables, matériaux recyclables, consommation d'énergie plus faible.",
              ],
              box: { label: "À retenir", text: "Un objet évolue grâce aux progrès techniques, aux nouveaux matériaux et aux nouvelles sources d'énergie, et pour répondre aux attentes des utilisateurs : confort, sécurité, prix, esthétique, respect de l'environnement." },
            },
            {
              heading: "Étudier l'évolution d'un objet : la frise chronologique",
              paragraphs: [
                "Pour étudier l'évolution d'un objet, on place ses différentes versions sur une frise chronologique, à la bonne date, avec une échelle régulière (par exemple 1 cm pour 10 ans). Pour chaque version, on note ce qui a changé : la forme, les matériaux, la source d'énergie, la solution technique.",
                "On repère ainsi les grandes ruptures, quand une solution nouvelle remplace l'ancienne, comme la chaîne qui remplace les pédales fixées sur la roue. On remarque aussi que les évolutions s'accélèrent : il a fallu des siècles pour passer du cheval au vélo, mais quelques dizaines d'années pour passer du téléphone fixe au téléphone portable.",
              ],
            },
          ],
          keyPoints: [
            "Un objet technique est conçu et fabriqué par l'être humain pour répondre à un besoin.",
            "Le besoin reste le même (se déplacer, s'éclairer) ; ce sont les objets et leurs solutions techniques qui évoluent.",
            "Le vélo : draisienne (1817), vélocipède (années 1860), grand-bi (années 1870), bicyclette à chaîne (1885), pneu à air (1888), vélo électrique.",
            "Causes de l'évolution : progrès techniques, nouveaux matériaux, nouvelles sources d'énergie, attentes des utilisateurs.",
            "On étudie l'évolution d'un objet sur une frise chronologique à échelle régulière.",
          ],
          example: {
            statement: "On trace une frise chronologique qui commence en 1800 et se termine en 2000, avec une échelle de 1 cm pour 10 ans. a) Quelle est la longueur de la frise ? b) À quelle distance de l'origine (1800) faut-il placer la draisienne (1817), la bicyclette à chaîne (1885) et le pneu à air (1888) ?",
            solution: [
              "a) De 1800 à 2000, il y a 2000 - 1800 = 200 ans. Avec 1 cm pour 10 ans : 200 ÷ 10 = 20 cm.",
              "Pour chaque date, je calcule le nombre d'années depuis 1800, puis je divise par 10.",
              "Draisienne : 1817 - 1800 = 17 ans, soit 17 ÷ 10 = 1,7 cm. Bicyclette : 1885 - 1800 = 85 ans, soit 8,5 cm. Pneu : 1888 - 1800 = 88 ans, soit 8,8 cm.",
              "Résultat : une frise de 20 cm, avec la draisienne à 1,7 cm, la bicyclette à chaîne à 8,5 cm et le pneu à air à 8,8 cm de l'origine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les objets suivants, lesquels sont des objets techniques ? Pour chacun d'eux, indiquez le besoin auquel il répond. Une pomme cueillie sur l'arbre, un stylo, un galet ramassé sur la plage, une paire de lunettes, un réfrigérateur.",
              hint: "Un objet technique a été conçu et fabriqué par l'être humain.",
              solution: [
                "La pomme et le galet n'ont pas été fabriqués par l'être humain : ce ne sont pas des objets techniques.",
                "Le stylo est un objet technique : il répond au besoin d'écrire.",
                "La paire de lunettes est un objet technique : elle répond au besoin de mieux voir.",
                "Le réfrigérateur est un objet technique : il répond au besoin de conserver les aliments.",
              ],
            },
            {
              level: 2,
              statement: "Pour éclairer une pièce avec la même quantité de lumière, on peut utiliser une ancienne lampe à incandescence ou une lampe à DEL récente. Données arrondies : la lampe à incandescence consomme une puissance de 60 W et dure environ 1 000 heures ; la lampe à DEL consomme 8 W et dure environ 15 000 heures. a) Quel est le besoin auquel répondent ces deux lampes ? A-t-il changé ? b) Combien de fois la lampe à DEL consomme-t-elle moins de puissance ? c) Combien de fois dure-t-elle plus longtemps ? d) Quelles causes de l'évolution des objets retrouvez-vous ici ?",
              hint: "Pour b) et c), divisez la plus grande valeur par la plus petite.",
              solution: [
                "a) Les deux lampes répondent au besoin de s'éclairer : le besoin n'a pas changé.",
                "b) 60 ÷ 8 = 7,5 : la lampe à DEL consomme 7,5 fois moins de puissance.",
                "c) 15 000 ÷ 1 000 = 15 : elle dure 15 fois plus longtemps.",
                "d) On retrouve un progrès technique (la DEL), et la volonté de réduire la consommation d'énergie et les déchets, donc l'impact sur l'environnement.",
                "Résultat : même besoin, mais une lampe qui consomme 7,5 fois moins et dure 15 fois plus longtemps.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici trois étapes de l'histoire du téléphone : 1876, Alexander Graham Bell dépose le brevet du téléphone, relié par un fil ; 1973, premier appel passé avec un téléphone portable, sans fil ; 2007, les téléphones portables à grand écran tactile commencent à se répandre. a) Tracez une frise de 1870 à 2030 avec 1 cm pour 10 ans : quelle est sa longueur, et à quelle distance de l'origine placer chaque date ? b) Combien d'années séparent 1876 de 1973, puis 1973 de 2007 ? Que remarquez-vous ? c) Quel besoin reste le même ? d) Citez deux changements importants entre le téléphone de 1876 et celui de 2007.",
              hint: "Calculez le nombre d'années depuis 1870, puis divisez par 10 pour obtenir des centimètres.",
              solution: [
                "a) De 1870 à 2030 : 160 ans, soit 16 cm. 1876 : 6 ans, soit 0,6 cm. 1973 : 103 ans, soit 10,3 cm. 2007 : 137 ans, soit 13,7 cm.",
                "b) 1973 - 1876 = 97 ans ; 2007 - 1973 = 34 ans. Les évolutions s'accélèrent : la deuxième étape a été franchie presque trois fois plus vite.",
                "c) Le besoin reste le même : communiquer à distance.",
                "d) Le téléphone est devenu sans fil et transportable ; il a un écran tactile et sert aussi à photographier, à envoyer des messages ou à aller sur internet.",
                "Résultat : une frise de 16 cm (0,6 cm, 10,3 cm et 13,7 cm), des évolutions de plus en plus rapides, et un besoin inchangé.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de l'évolution du vélo.",
            items: [
              "La draisienne : on avance en poussant le sol avec les pieds.",
              "Le vélocipède : des pédales fixées sur la roue avant.",
              "Le grand-bi : une roue avant immense pour aller plus vite.",
              "La bicyclette de sécurité : deux roues égales et une chaîne.",
              "Le pneu gonflé d'air rend le vélo confortable.",
              "Le vélo à assistance électrique, avec un moteur et une batterie.",
            ],
          },
          quiz: [
            {
              q: "Lequel de ces objets n'est pas un objet technique ?",
              options: ["Une lampe de poche", "Une fourchette en inox", "Un galet de la plage", "Un vélo d'enfant"],
              answer: 2,
              why: "Le galet n'a été ni conçu ni fabriqué par l'être humain : ce n'est pas un objet technique.",
            },
            {
              q: "Qu'apporte la bicyclette de 1885 par rapport au grand-bi ?",
              options: ["Une roue avant encore plus grande que l'arrière", "Une chaîne et deux roues de même taille", "Un moteur électrique", "Des pédales sur la roue avant"],
              answer: 1,
              why: "La bicyclette de sécurité a deux roues égales et une chaîne qui transmet le mouvement des pédales à la roue arrière.",
            },
            {
              q: "Qu'est-ce qui est resté le même tout au long de l'évolution du vélo ?",
              options: ["Les matériaux utilisés pour le cadre", "Le besoin de se déplacer", "La source d'énergie", "La taille des roues"],
              answer: 1,
              why: "Le besoin (se déplacer) ne change pas ; les matériaux, l'énergie et la forme ont évolué.",
            },
            {
              q: "Sur une frise de 1800 à 2000, avec 1 cm pour 10 ans, où faut-il placer 1885 ?",
              options: ["À 1,85 cm de l'origine", "À 18,5 cm de l'origine", "À 8,5 cm de l'origine", "À 85 cm de l'origine"],
              answer: 2,
              why: "1885 - 1800 = 85 ans, et 85 ÷ 10 = 8,5 cm.",
            },
            {
              q: "Pourquoi beaucoup de cadres de vélo en acier ont-ils été remplacés par de l'aluminium ?",
              options: ["Pour rendre le vélo plus léger", "Pour qu'il rouille plus vite", "Pour qu'il soit attiré par les aimants"],
              answer: 0,
              why: "À volume égal, l'aluminium est environ trois fois plus léger que l'acier : le vélo devient plus facile à manier.",
            },
          ],
          trap: "Confondre le besoin et l'objet : le besoin (se déplacer, s'éclairer) reste le même, ce sont les objets et leurs solutions techniques qui évoluent. Autre erreur : placer les dates sur une frise sans respecter une échelle régulière.",
          method: "Pour décrire l'évolution d'un objet, faites un tableau avec une ligne par version et quatre colonnes : date, matériaux, source d'énergie, ce qui a changé. Placez ensuite les versions sur une frise à échelle régulière, en calculant chaque position.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fonctionnement-objet',
          title: 'Décrire le fonctionnement d\'un objet technique',
          minutes: 30,
          objectives: [
            "Exprimer le besoin et la fonction d'usage d'un objet technique.",
            "Identifier les fonctions techniques d'un objet et les solutions techniques qui les réalisent.",
            "Représenter le fonctionnement d'un objet par un croquis ou un schéma légendé.",
            "Comparer deux solutions techniques qui réalisent la même fonction.",
          ],
          course: [
            {
              heading: "Le besoin et la fonction d'usage",
              paragraphs: [
                "Pour décrire un objet technique, on commence par se demander à quoi il sert. Trois questions aident à exprimer le besoin : à qui l'objet rend-il service ? sur quoi agit-il ? dans quel but ? Pour une lampe de poche : elle rend service à l'utilisateur, elle agit sur un lieu sombre, dans le but d'y voir clair. On représente souvent ces trois questions par un schéma appelé « bête à cornes ».",
                "La réponse courte à la question « à quoi sert l'objet ? » est sa fonction d'usage. Elle s'écrit avec un verbe à l'infinitif : la fonction d'usage d'une lampe de poche est d'éclairer, celle d'un vélo est de permettre de se déplacer. Un objet a aussi une fonction d'estime : ce qui le rend agréable ou plaisant pour l'utilisateur (sa couleur, sa forme, son design).",
              ],
              box: { label: "Définition", text: "La fonction d'usage est le service rendu par l'objet à l'utilisateur ; elle répond à la question « à quoi sert-il ? ». La fonction d'estime correspond à ce qui plaît dans l'objet (forme, couleur, design)." },
            },
            {
              heading: "Fonctions techniques et solutions techniques",
              paragraphs: [
                "Pour remplir sa fonction d'usage, l'objet doit accomplir plusieurs actions plus précises : ce sont les fonctions techniques. Chacune est réalisée par une pièce ou un ensemble de pièces : la solution technique. Une fonction technique s'écrit avec un verbe (stocker, transmettre, guider, protéger) ; une solution technique est le nom d'une pièce.",
                "Exemple de la lampe de poche : stocker l'énergie électrique → les piles ; commander l'allumage et l'extinction → l'interrupteur ; transmettre le courant électrique → les lamelles métalliques et les fils ; transformer l'énergie électrique en lumière → la DEL (diode électroluminescente) ; diriger la lumière → le réflecteur ; protéger et maintenir les pièces → le boîtier.",
              ],
              box: { label: "Règle", text: "Fonction technique : un verbe, ce que doit faire une partie de l'objet (transmettre le mouvement). Solution technique : un nom, la pièce qui le réalise (la chaîne). Une même fonction technique peut être réalisée par plusieurs solutions." },
            },
            {
              heading: "Exemple : le vélo",
              paragraphs: [
                "La fonction d'usage du vélo est de déplacer une personne grâce à sa propre force. Plusieurs fonctions techniques y contribuent : recevoir l'effort du cycliste (les pédales et le pédalier), transmettre le mouvement à la roue arrière (la chaîne, le plateau et le pignon), diriger le vélo (le guidon et la fourche), ralentir et s'arrêter (les freins), supporter le cycliste (la selle et le cadre), assurer le contact avec le sol et amortir les chocs (les pneus).",
                "Pour une même fonction technique, il existe souvent plusieurs solutions. Freiner peut se faire avec des freins à patins, qui serrent la jante de la roue, ou avec des freins à disque, qui serrent un disque fixé au centre de la roue. Transmettre le mouvement peut se faire par une chaîne ou par une courroie. On compare alors les solutions selon leur efficacité, leur prix, leur entretien ou leur masse.",
              ],
            },
            {
              heading: "Représenter le fonctionnement",
              paragraphs: [
                "Pour expliquer comment fonctionne un objet, on utilise des représentations. Le croquis est un dessin rapide, à main levée, avec des légendes. Le schéma est plus simple et utilise des symboles : en électricité, par exemple, une pile, un interrupteur et une lampe ont chacun leur symbole. On peut aussi présenter les fonctions techniques et les solutions techniques dans un tableau qui relie chaque fonction à sa solution.",
                "Pour un objet qui fonctionne avec de l'énergie, on peut suivre le chemin de l'énergie : elle est d'abord stockée ou fournie (la pile, les muscles du cycliste), puis transmise (les fils, la chaîne), puis transformée en l'effet recherché (la lumière, la rotation de la roue).",
              ],
              box: { label: "À retenir", text: "Pour décrire un objet : 1) le besoin et la fonction d'usage ; 2) les fonctions techniques (des verbes) ; 3) les solutions techniques (des noms de pièces) ; 4) un croquis ou un schéma légendé." },
            },
          ],
          keyPoints: [
            "La fonction d'usage dit à quoi sert l'objet ; elle s'écrit avec un verbe (éclairer, se déplacer).",
            "La fonction d'estime correspond à ce qui plaît dans l'objet : forme, couleur, design.",
            "Une fonction technique est une action que doit réaliser une partie de l'objet (un verbe).",
            "Une solution technique est la pièce qui réalise cette fonction (un nom) : le pédalier, la chaîne, l'interrupteur.",
            "Une même fonction peut être réalisée par plusieurs solutions techniques, que l'on compare.",
            "On représente un objet par un croquis, un schéma ou un tableau des fonctions et des solutions.",
          ],
          example: {
            statement: "Décrivez le fonctionnement d'une trottinette classique (sans moteur) : sa fonction d'usage, puis quatre fonctions techniques avec la solution technique qui réalise chacune d'elles.",
            solution: [
              "Fonction d'usage : déplacer une personne, qui avance en poussant le sol avec un pied.",
              "Supporter l'utilisateur → le plateau, sur lequel on pose les pieds.",
              "Diriger la trottinette → le guidon, relié à la roue avant par la colonne de direction.",
              "Ralentir et s'arrêter → le frein, une pièce que l'on appuie avec le pied sur la roue arrière.",
              "Rouler en douceur → les roues, montées sur des roulements à billes.",
              "Résultat : la trottinette sert à se déplacer, grâce au plateau, au guidon, au frein et aux roues, chacun réalisant une fonction technique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici huit expressions : freiner ; la chaîne ; transmettre le mouvement à la roue ; la pile ; stocker l'énergie électrique ; les patins de frein ; commander l'allumage ; l'interrupteur. a) Classez-les en fonctions techniques et en solutions techniques. b) Associez chaque fonction à sa solution.",
              hint: "Les fonctions techniques commencent par un verbe, les solutions techniques sont des noms de pièces.",
              solution: [
                "a) Fonctions techniques : freiner ; transmettre le mouvement à la roue ; stocker l'énergie électrique ; commander l'allumage. Solutions techniques : la chaîne ; la pile ; les patins de frein ; l'interrupteur.",
                "b) Freiner → les patins de frein.",
                "Transmettre le mouvement à la roue → la chaîne.",
                "Stocker l'énergie électrique → la pile.",
                "Commander l'allumage → l'interrupteur.",
              ],
            },
            {
              level: 2,
              statement: "Un taille-crayon de bureau comprend : une lame en acier, un trou en forme de cône, une petite vis et un réservoir en plastique. a) Quelle est sa fonction d'usage ? b) Construisez un tableau qui associe chaque pièce à sa fonction technique. c) Le réservoir est souvent transparent : à quoi cela sert-il ?",
              hint: "Pour chaque pièce, demandez-vous : que se passerait-il si elle n'existait pas ?",
              solution: [
                "a) Fonction d'usage : tailler la pointe d'un crayon.",
                "b) Couper le bois et la mine → la lame en acier. Guider le crayon pendant qu'on le tourne → le trou en forme de cône. Fixer la lame → la vis. Recueillir les copeaux → le réservoir.",
                "c) Le réservoir transparent permet de voir quand il est plein et qu'il faut le vider.",
                "Résultat : un taille-crayon sert à tailler un crayon grâce à quatre solutions techniques : la lame, le trou conique, la vis et le réservoir.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). On compare deux lampes de poche qui éclairent autant l'une que l'autre. La lampe A fonctionne avec 2 piles, vendues 4 € la paire, qui durent 10 heures d'éclairage. La lampe B possède une dynamo : on tourne une manivelle pour produire l'électricité ; elle coûte 15 €. Une famille utilise sa lampe 2 heures par semaine pendant 40 semaines par an. a) Quelle fonction technique est réalisée de deux façons différentes ? b) Combien d'heures la lampe est-elle utilisée en un an ? c) Combien de paires de piles faut-il acheter en un an pour la lampe A, et pour quel prix ? d) Donnez un avantage et un inconvénient de chaque solution.",
              hint: "La fonction d'usage est la même pour les deux lampes ; cherchez ce qui fournit l'énergie électrique.",
              solution: [
                "a) La fonction technique « fournir l'énergie électrique » est réalisée par des piles dans la lampe A et par une dynamo dans la lampe B.",
                "b) 2 × 40 = 80 heures par an.",
                "c) 80 ÷ 10 = 8 paires de piles, soit 8 × 4 = 32 € par an.",
                "d) Lampe A : avantage, elle éclaire tout de suite sans effort ; inconvénient, il faut racheter des piles et les déposer dans un point de collecte. Lampe B : avantage, pas de piles à acheter ni à jeter ; inconvénient, il faut tourner la manivelle, ce qui demande un effort.",
                "Résultat : 80 heures d'utilisation et 32 € de piles par an pour la lampe A, alors que la lampe B, à 15 €, n'a besoin d'aucune pile.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque pièce du vélo à la fonction technique qu'elle réalise.",
            pairs: [
              { left: "Le pédalier", right: "Recevoir l'effort du cycliste" },
              { left: "La chaîne", right: "Transmettre le mouvement à la roue arrière" },
              { left: "Le guidon", right: "Diriger le vélo" },
              { left: "Les freins", right: "Ralentir et arrêter le vélo" },
              { left: "La selle", right: "Supporter le cycliste assis" },
              { left: "Les pneus", right: "Assurer le contact avec le sol et amortir" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la fonction d'usage d'une lampe de poche ?",
              options: ["Stocker l'énergie", "Éclairer", "Protéger les piles", "Être jolie"],
              answer: 1,
              why: "La lampe de poche sert à éclairer : c'est le service rendu à l'utilisateur. Stocker l'énergie et protéger les piles sont des fonctions techniques.",
            },
            {
              q: "Laquelle de ces expressions est une solution technique ?",
              options: ["Transmettre le mouvement", "Guider la roue", "La chaîne", "Freiner le vélo"],
              answer: 2,
              why: "La chaîne est une pièce : c'est une solution technique. Les trois autres expressions commencent par un verbe : ce sont des fonctions techniques.",
            },
            {
              q: "Dans une lampe de poche, quelle pièce commande l'allumage ?",
              options: ["Le réflecteur en plastique", "Le boîtier", "La pile", "L'interrupteur"],
              answer: 3,
              why: "L'interrupteur ouvre ou ferme le circuit électrique : il commande l'allumage et l'extinction.",
            },
            {
              q: "Comment appelle-t-on ce qui rend un objet agréable à regarder (forme, couleur) ?",
              options: ["La fonction d'estime", "La fonction technique", "La solution technique", "Le besoin"],
              answer: 0,
              why: "La fonction d'estime correspond à ce qui plaît dans l'objet : sa forme, sa couleur, son design.",
            },
            {
              q: "Les freins à patins et les freins à disque sont :",
              options: ["Deux fonctions d'usage complètement différentes", "Deux solutions pour une même fonction", "Deux besoins sans aucun rapport"],
              answer: 1,
              why: "Ils réalisent la même fonction technique (freiner) avec deux solutions techniques différentes.",
            },
          ],
          trap: "Confondre fonction technique et solution technique : « transmettre le mouvement » est une fonction (un verbe), « la chaîne » est une solution (un nom de pièce). Autre erreur : donner comme fonction d'usage un détail technique (« avoir des piles ») au lieu du service rendu (« éclairer »).",
          method: "Pour analyser un objet, partez de sa fonction d'usage, puis démontez-le en pensée pièce par pièce. Pour chaque pièce, demandez-vous « à quoi sert-elle ? » et écrivez la réponse avec un verbe : vous obtenez ainsi les fonctions techniques et leurs solutions.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'familles-materiaux',
          title: 'Les grandes familles de matériaux',
          minutes: 30,
          objectives: [
            "Identifier les grandes familles de matériaux : métaux, matériaux organiques, céramiques et verres, matières plastiques, composites.",
            "Caractériser un matériau par ses propriétés : conduction de l'électricité et de la chaleur, attraction par un aimant, masse, solidité.",
            "Justifier le choix d'un matériau pour un usage et identifier des matériaux recyclables.",
          ],
          course: [
            {
              heading: "Matière et matériau",
              paragraphs: [
                "Un matériau est une matière utilisée pour fabriquer des objets. Le bois d'un arbre devient un matériau quand on en fait une table ; le sable sert à fabriquer le verre ; le pétrole sert à fabriquer la plupart des matières plastiques. Un même objet peut être fait de plusieurs matériaux : un crayon de papier associe du bois, une mine de graphite et souvent de la peinture.",
                "Les matériaux ont différentes origines : végétale (bois, coton, liège), animale (laine, cuir, soie), minérale (pierre, sable, argile, minerais dont on tire les métaux) ou fossile (le pétrole). On les classe en grandes familles selon leur origine et leurs propriétés.",
              ],
              box: { label: "Définition", text: "Un matériau est une matière choisie et transformée par l'être humain pour fabriquer des objets." },
            },
            {
              heading: "Les grandes familles de matériaux",
              paragraphs: [
                "Les métaux : le fer, l'acier (un mélange de fer et d'un peu de carbone), l'aluminium, le cuivre, le zinc. Ils sont solides, brillants une fois polis, et conduisent bien l'électricité et la chaleur. Les matériaux organiques, d'origine végétale ou animale : le bois, le papier, le carton, le coton, la laine, le cuir. Ils sont souvent légers et isolants.",
                "Les céramiques et les verres, d'origine minérale : la terre cuite, la porcelaine, le verre, et dans le bâtiment la brique ou le béton. Ils sont durs et résistent à la chaleur, mais beaucoup sont fragiles et cassants. Les matières plastiques, fabriquées surtout à partir du pétrole : le PVC, le polystyrène, le polyéthylène. Elles sont légères, faciles à mouler et isolantes, mais beaucoup se dégradent très lentement dans la nature.",
                "Les matériaux composites associent plusieurs matériaux pour cumuler leurs qualités : la fibre de carbone noyée dans une résine (cadres de vélos de course, raquettes), la fibre de verre (coques de bateaux), ou le béton armé, où des barres d'acier renforcent le béton.",
              ],
              box: { label: "Repère", text: "Cinq familles : les métaux (acier, aluminium, cuivre) ; les matériaux organiques (bois, papier, coton, cuir) ; les céramiques et verres (terre cuite, porcelaine, verre) ; les matières plastiques (PVC, polystyrène) ; les composites (fibre de carbone, béton armé)." },
            },
            {
              heading: "Les propriétés des matériaux",
              paragraphs: [
                "Chaque matériau a des propriétés qui le rendent adapté ou non à un usage. La conduction de l'électricité : les métaux sont conducteurs, alors que le bois, le verre et les plastiques sont isolants ; c'est pourquoi les fils électriques sont en cuivre entouré de plastique. La conduction de la chaleur : une casserole en métal chauffe vite, alors que son manche en bois ou en plastique reste froid.",
                "L'attraction par un aimant : un aimant attire le fer et l'acier, mais pas l'aluminium ni le cuivre. Les centres de tri s'en servent pour séparer les boîtes de conserve en acier des canettes en aluminium. La masse : à volume égal, l'aluminium est environ trois fois plus léger que l'acier, d'où son usage dans les avions et les vélos. On compare aussi la solidité, la dureté, la transparence et la résistance à la corrosion : la rouille attaque le fer et l'acier ordinaire, mais pas l'aluminium ni le plastique.",
              ],
              box: { label: "Propriété", text: "Les métaux conduisent l'électricité et la chaleur. Un aimant attire le fer et l'acier, mais pas l'aluminium ni le cuivre. Le bois, le verre et les plastiques sont des isolants électriques." },
            },
            {
              heading: "Choisir un matériau, penser au recyclage",
              paragraphs: [
                "Pour fabriquer un objet, on choisit le matériau selon les propriétés recherchées, mais aussi selon son prix, sa facilité de mise en forme et son impact sur l'environnement. Une bouteille d'eau peut être en verre (réutilisable et recyclable, mais lourde et cassante) ou en plastique (légère et incassable, mais fabriquée à partir de pétrole).",
                "Beaucoup de matériaux se recyclent : le verre se refond pour faire de nouvelles bouteilles, les métaux comme l'acier et l'aluminium se refondent de très nombreuses fois, le papier et le carton redeviennent du papier. Le recyclage économise des matières premières et de l'énergie. Trier ses déchets dans les bons bacs est donc un geste essentiel.",
              ],
              box: { label: "À retenir", text: "Le choix d'un matériau dépend de ses propriétés (solidité, masse, conduction, résistance à la corrosion), de son prix et de son impact sur l'environnement (recyclable ou non)." },
            },
          ],
          keyPoints: [
            "Un matériau est une matière transformée par l'être humain pour fabriquer des objets.",
            "Cinq familles : métaux, matériaux organiques, céramiques et verres, matières plastiques, composites.",
            "Les métaux conduisent l'électricité et la chaleur ; le bois, le verre et les plastiques sont isolants.",
            "Un aimant attire le fer et l'acier, mais pas l'aluminium ni le cuivre.",
            "À volume égal, l'aluminium est environ trois fois plus léger que l'acier.",
            "On choisit un matériau selon ses propriétés, son prix et son impact sur l'environnement ; le verre, les métaux et le papier se recyclent.",
          ],
          example: {
            statement: "Au centre de tri, deux canettes métalliques identiques arrivent sur le tapis. L'une est en acier, l'autre en aluminium. Comment les distinguer et les séparer simplement ?",
            solution: [
              "Je cherche une propriété qui diffère entre l'acier et l'aluminium : un aimant attire l'acier, mais pas l'aluminium.",
              "J'approche un aimant de chaque canette : celle qui est attirée est en acier ; celle qui ne l'est pas est en aluminium.",
              "Au centre de tri, un gros aimant placé au-dessus du tapis soulève ainsi les emballages en acier, tandis que l'aluminium continue son chemin.",
              "Résultat : on sépare l'acier de l'aluminium avec un aimant, puis chaque métal est refondu séparément pour être recyclé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces matériaux dans leur famille : le verre d'une vitre, une poutre en chêne, un câble en cuivre, une bouteille en PET (un plastique), un pull en laine, un tuyau en PVC, une assiette en porcelaine, un cadre de vélo en fibre de carbone.",
              hint: "Il y a cinq familles : métaux, organiques, céramiques et verres, plastiques, composites.",
              solution: [
                "Métaux : le câble en cuivre.",
                "Matériaux organiques : la poutre en chêne (origine végétale) et le pull en laine (origine animale).",
                "Céramiques et verres : le verre de la vitre et l'assiette en porcelaine.",
                "Matières plastiques : la bouteille en PET et le tuyau en PVC.",
                "Composites : le cadre en fibre de carbone.",
              ],
            },
            {
              level: 2,
              statement: "Justifiez chacun de ces choix de matériaux à l'aide d'une propriété. a) Pourquoi une casserole est-elle en métal ? b) Pourquoi son manche est-il souvent en bois ou en plastique ? c) Pourquoi les fils électriques sont-ils en cuivre entouré de plastique ? d) Pourquoi les fenêtres sont-elles en verre ?",
              hint: "Utilisez la phrase : « On utilise ... pour ..., parce qu'il est ... ».",
              solution: [
                "a) On utilise le métal pour la casserole parce qu'il conduit bien la chaleur : les aliments chauffent vite.",
                "b) On utilise le bois ou le plastique pour le manche parce qu'ils conduisent mal la chaleur : on peut le tenir sans se brûler.",
                "c) Le cuivre conduit très bien l'électricité ; le plastique qui l'entoure est un isolant électrique qui évite de recevoir une décharge en touchant le fil.",
                "d) On utilise le verre pour les fenêtres parce qu'il est transparent : il laisse passer la lumière tout en protégeant du vent et de la pluie.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données arrondies). Trois cubes ont le même volume, 1 dm³ : un cube d'aluminium de 2,7 kg, un cube d'acier de 7,8 kg et un cube de chêne de 0,7 kg. a) Rangez ces matériaux du plus léger au plus lourd, à volume égal. b) Combien de fois l'acier est-il plus lourd que l'aluminium (arrondissez au dixième) ? c) Un cadre de vélo contient 0,5 dm³ de métal. Calculez sa masse s'il est en acier, puis s'il est en aluminium. Quelle masse gagne-t-on avec l'aluminium ? d) Au centre de tri, comment séparer ces deux cadres une fois le vélo usé ?",
              hint: "Pour c), un volume de 0,5 dm³ est la moitié de 1 dm³ : la masse est donc la moitié de celle du cube.",
              solution: [
                "a) Du plus léger au plus lourd : le chêne (0,7 kg), l'aluminium (2,7 kg), l'acier (7,8 kg).",
                "b) 7,8 ÷ 2,7 ≈ 2,9 : l'acier est environ 2,9 fois plus lourd que l'aluminium, soit presque 3 fois.",
                "c) Cadre en acier : 0,5 × 7,8 = 3,9 kg. Cadre en aluminium : 0,5 × 2,7 = 1,35 kg. Gain : 3,9 - 1,35 = 2,55 kg.",
                "d) Avec un aimant : il attire le cadre en acier, mais pas celui en aluminium.",
                "Résultat : chêne, aluminium, acier ; l'acier est près de 3 fois plus lourd ; le cadre en aluminium fait gagner 2,55 kg ; un aimant permet de séparer les deux métaux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les matériaux et leurs propriétés.",
            statements: [
              { text: "Un aimant attire tous les métaux.", true: false, why: "Il attire le fer et l'acier, mais pas l'aluminium ni le cuivre." },
              { text: "Le verre est un isolant électrique.", true: true, why: "Le verre ne laisse pas passer le courant électrique, comme le bois et les plastiques." },
              { text: "Le papier et le carton sont des matériaux organiques.", true: true, why: "Ils sont fabriqués à partir du bois, donc d'origine végétale." },
              { text: "La plupart des matières plastiques sont fabriquées à partir du pétrole.", true: true, why: "Le pétrole est la principale matière première des plastiques." },
              { text: "Une canette en aluminium rouille comme un clou en fer.", true: false, why: "La rouille attaque le fer et l'acier ordinaire, pas l'aluminium." },
              { text: "Le béton armé est un matériau composite.", true: true, why: "Il associe du béton et des barres d'acier qui le renforcent." },
              { text: "Le bois conduit très bien l'électricité.", true: false, why: "Le bois sec est un isolant électrique." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces matériaux est attiré par un aimant ?",
              options: ["L'aluminium", "Le cuivre", "L'acier", "Le verre"],
              answer: 2,
              why: "L'acier, qui contient surtout du fer, est attiré par un aimant ; l'aluminium et le cuivre ne le sont pas.",
            },
            {
              q: "À quelle famille appartient le carton ?",
              options: ["Les matériaux organiques", "Les métaux et alliages", "Les céramiques et verres", "Les matériaux composites"],
              answer: 0,
              why: "Le carton est fabriqué à partir du bois : c'est un matériau organique, d'origine végétale.",
            },
            {
              q: "Pourquoi les fils électriques sont-ils entourés de plastique ?",
              options: ["Pour rendre le fil plus lourd et plus solide", "Parce que le plastique isole", "Parce que le plastique conduit mieux que le cuivre"],
              answer: 1,
              why: "Le plastique est un isolant électrique : il empêche le courant de passer dans la personne qui touche le fil.",
            },
            {
              q: "Qu'est-ce qu'un matériau composite ?",
              options: ["Un métal pur, sans aucun mélange", "Un plastique recyclé à plusieurs reprises", "Un assemblage de plusieurs matériaux", "Un matériau d'origine animale"],
              answer: 2,
              why: "Un composite associe plusieurs matériaux pour cumuler leurs qualités, comme le béton armé ou la fibre de carbone dans une résine.",
            },
            {
              q: "Quel matériau est d'origine minérale ?",
              options: ["Le coton", "Le verre", "Le cuir", "La laine"],
              answer: 1,
              why: "Le verre est fabriqué à partir de sable : il est d'origine minérale. Le coton est végétal, le cuir et la laine sont animaux.",
            },
          ],
          trap: "Croire qu'un aimant attire tous les métaux : il attire le fer et l'acier, mais pas l'aluminium ni le cuivre. Autre confusion : confondre l'objet et le matériau (une bouteille est un objet, le verre est son matériau).",
          method: "Pour justifier le choix d'un matériau, utilisez toujours la même phrase : « On utilise [le matériau] pour [l'usage], parce qu'il est [la propriété] ». Par exemple : on utilise le cuivre pour les fils électriques parce qu'il conduit bien l'électricité.",
        },
      ],
    },
  ],
}
