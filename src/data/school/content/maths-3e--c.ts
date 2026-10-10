import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-3e',
  chapters: [
    {
      id: 'transformations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'translations-rotations',
          title: "Translations et rotations",
          minutes: 25,
          objectives: [
            "Construire l'image d'un point ou d'une figure par une translation ou par une rotation.",
            "Identifier la translation ou la rotation qui transforme une figure en une autre.",
            "Utiliser les propriétés de conservation (longueurs, angles, aires, alignement, parallélisme) pour calculer ou démontrer.",
          ],
          course: [
            {
              heading: "Transformer une figure : le vocabulaire",
              paragraphs: [
                "Une transformation du plan associe à chaque point M un point M' appelé l'image de M. En appliquant la transformation à tous les points d'une figure, on obtient la figure image. Vous connaissez déjà deux transformations : la symétrie axiale (un pliage le long d'une droite) et la symétrie centrale (un demi-tour autour d'un point).",
                "En 4e et en 3e, on en étudie trois autres : la translation, la rotation et l'homothétie. Les deux premières font l'objet de cette leçon. On les rencontre partout dans les motifs qui se répètent : une frise sur un papier peint, un pavage de carrelage, les rayons d'une roue de vélo ou les nacelles d'une grande roue.",
              ],
            },
            {
              heading: "La translation : un glissement",
              paragraphs: [
                "La translation qui transforme A en B fait glisser toute la figure de la même façon : chaque point se déplace dans la même direction (celle de la droite (AB)), dans le même sens (de A vers B) et de la même longueur (la longueur AB). La figure ne tourne pas et ne se retourne pas : elle glisse, comme un meuble que l'on pousse en ligne droite sur le sol.",
                "Pour construire l'image M' d'un point M, on trace le parallélogramme ABM'M : le segment [MM'] est parallèle à [AB], de même longueur et parcouru dans le même sens. Sur un quadrillage, c'est encore plus simple : si l'on passe de A à B en avançant de 4 carreaux vers la droite et de 2 carreaux vers le haut, on fait de même pour chaque point de la figure.",
                "Dans un repère, la translation qui transforme A(1 ; 2) en B(4 ; 3) ajoute 3 à l'abscisse et 1 à l'ordonnée de chaque point. Le point C(2 ; -1) a donc pour image C'(5 ; 0).",
              ],
              box: { label: "Définition", text: "L'image d'un point M par la translation qui transforme A en B est le point M' tel que ABM'M est un parallélogramme (éventuellement aplati, si M est sur la droite (AB))." },
            },
            {
              heading: "La rotation : un tour autour d'un point",
              paragraphs: [
                "Une rotation est définie par trois éléments : un centre O, un angle (par exemple 90°) et un sens. Le sens est soit celui des aiguilles d'une montre (sens horaire), soit le sens inverse (sens anti-horaire). Pensez à la grande roue d'une fête foraine : chaque nacelle tourne autour de l'axe central en restant toujours à la même distance de lui.",
                "Pour construire l'image M' de M par la rotation de centre O et d'angle 60° dans le sens anti-horaire : tracez la demi-droite [OM), placez le rapporteur centré en O, mesurez un angle de 60° dans le bon sens à partir de [OM), puis reportez au compas la longueur OM sur la nouvelle demi-droite.",
                "Le centre O est le seul point qui ne bouge pas (sauf pour un angle de 0° ou de 360°, où rien ne bouge). Une rotation d'angle 180° a le même effet qu'une symétrie centrale de centre O, quel que soit le sens choisi.",
              ],
              box: { label: "Définition", text: "L'image d'un point M par la rotation de centre O, d'angle α et de sens donné est le point M' tel que OM' = OM et que l'angle MOM' mesure α, tourné dans le sens donné." },
            },
            {
              heading: "Ce que conservent ces transformations",
              paragraphs: [
                "Les symétries, les translations et les rotations déplacent une figure sans la déformer : la figure image est superposable à la figure de départ. Elles conservent les longueurs, les mesures d'angles, les aires, l'alignement et le parallélisme. L'image d'un segment est un segment de même longueur, l'image d'une droite est une droite, l'image d'un cercle est un cercle de même rayon.",
                "Ces propriétés servent à démontrer. Par exemple, si le triangle A'B'C' est l'image du triangle ABC par une rotation, et si AB = 5 cm et que l'angle ABC mesure 40°, alors on sait sans mesurer que A'B' = 5 cm et que l'angle A'B'C' mesure 40°.",
              ],
              box: { label: "Propriété", text: "Une translation, une rotation ou une symétrie conserve les longueurs, les angles, les aires, l'alignement et le parallélisme." },
            },
          ],
          keyPoints: [
            "Translation qui transforme A en B : chaque point glisse dans la direction de (AB), dans le sens de A vers B, de la longueur AB.",
            "M' est l'image de M par cette translation si et seulement si ABM'M est un parallélogramme.",
            "Rotation de centre O, d'angle α, de sens donné : OM' = OM et l'angle MOM' mesure α.",
            "Une rotation d'angle 180° a le même effet qu'une symétrie centrale.",
            "Translations, rotations et symétries conservent longueurs, angles, aires, alignement et parallélisme.",
          ],
          example: {
            statement: "Dans un repère, on donne A(1 ; 2), B(4 ; 3) et C(2 ; -1). Déterminer les coordonnées du point C', image de C par la translation qui transforme A en B, puis expliquer pourquoi le quadrilatère ABC'C est un parallélogramme.",
            solution: [
              "Pour passer de A à B, l'abscisse passe de 1 à 4 (on ajoute 3) et l'ordonnée passe de 2 à 3 (on ajoute 1).",
              "La translation fait donc glisser chaque point de 3 unités vers la droite et de 1 unité vers le haut.",
              "C(2 ; -1) a pour image C'(2 + 3 ; -1 + 1), c'est-à-dire C'(5 ; 0).",
              "Par définition, l'image M' d'un point M par la translation qui transforme A en B est telle que ABM'M est un parallélogramme. Avec M = C, on obtient que ABC'C est un parallélogramme.",
              "Conclusion : C'(5 ; 0) et ABC'C est un parallélogramme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "ABCDEF est un hexagone régulier de centre O, dont les sommets sont nommés dans le sens inverse des aiguilles d'une montre. 1) Quelle est la mesure de l'angle AOB ? 2) Quelle est l'image de A par la rotation de centre O, d'angle 60°, dans le sens inverse des aiguilles d'une montre ? 3) Quelle est l'image de B par la rotation de centre O, d'angle 120°, dans ce même sens ? 4) Quelle est l'image du triangle OAB par la première rotation ?",
              hint: "Les six angles au centre d'un hexagone régulier sont égaux et font ensemble un tour complet.",
              solution: [
                "1) Les six angles AOB, BOC, COD, DOE, EOF et FOA sont égaux et leur somme vaut 360°. Donc l'angle AOB mesure 360° ÷ 6 = 60°.",
                "2) OA = OB (les sommets sont sur un même cercle de centre O) et l'angle AOB mesure 60°, dans le sens inverse des aiguilles d'une montre. L'image de A est donc B.",
                "3) Une rotation de 120°, c'est deux fois 60° : B va en C puis en D. L'image de B est D.",
                "4) O a pour image O, A a pour image B, et B a pour image C. L'image du triangle OAB est le triangle OBC.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère, on donne E(-2 ; 1), F(1 ; 5) et G(3 ; 1). On note t la translation qui transforme E en G. 1) Calculer la longueur EF à l'aide du théorème de Pythagore. 2) Déterminer les coordonnées de F', image de F par t. 3) Sans calcul, donner la longueur GF' en justifiant. 4) Déterminer les coordonnées de G', image de G par t.",
              hint: "Pour EF, regardez le déplacement horizontal et le déplacement vertical entre E et F : ce sont les côtés de l'angle droit d'un triangle rectangle.",
              solution: [
                "1) De E à F, on avance de 1 - (-2) = 3 unités horizontalement et de 5 - 1 = 4 unités verticalement. Par le théorème de Pythagore, EF² = 3² + 4² = 9 + 16 = 25, donc EF = 5.",
                "2) De E(-2 ; 1) à G(3 ; 1), on ajoute 5 à l'abscisse et 0 à l'ordonnée. F(1 ; 5) a donc pour image F'(6 ; 5).",
                "3) L'image de E est G et l'image de F est F', donc l'image du segment [EF] est le segment [GF']. Une translation conserve les longueurs, donc GF' = EF = 5.",
                "4) G(3 ; 1) a pour image G'(3 + 5 ; 1 + 0), soit G'(8 ; 1).",
                "Résultats : EF = 5, F'(6 ; 5), GF' = 5 et G'(8 ; 1).",
              ],
            },
            {
              level: 3,
              statement: "Le triangle ABC est rectangle en A, avec AB = 3 cm et AC = 4 cm. On note D l'image de B et E l'image de C par la rotation de centre A, d'angle 60°, dans le sens des aiguilles d'une montre. 1) Calculer BC. 2) Quelle est la longueur DE ? Justifier. 3) Démontrer que le triangle ABD est équilatéral. 4) Quelle est la mesure de l'angle DAE ? 5) Calculer l'aire du triangle ADE.",
              hint: "Le triangle ADE est l'image du triangle ABC par la rotation : pensez à tout ce qu'une rotation conserve.",
              solution: [
                "1) Le triangle ABC est rectangle en A. D'après le théorème de Pythagore : BC² = AB² + AC² = 9 + 16 = 25, donc BC = 5 cm.",
                "2) La rotation transforme B en D et C en E, donc le segment [BC] en [DE]. Une rotation conserve les longueurs, donc DE = BC = 5 cm.",
                "3) Par définition de la rotation de centre A, AD = AB = 3 cm et l'angle BAD mesure 60°. Le triangle ABD est isocèle en A, donc ses angles à la base sont égaux : chacun mesure (180° - 60°) ÷ 2 = 60°. Ses trois angles mesurent 60° : il est équilatéral.",
                "4) La rotation transforme l'angle BAC en l'angle DAE (A est le centre, il reste en place). Une rotation conserve les angles, donc l'angle DAE mesure 90°.",
                "5) Une rotation conserve les aires : l'aire de ADE est égale à celle de ABC, soit 3 × 4 ÷ 2 = 6 cm².",
                "Résultats : BC = 5 cm, DE = 5 cm, ABD équilatéral, angle DAE = 90° et aire de ADE = 6 cm².",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque transformation ou chaque notion à sa description.",
            pairs: [
              { left: "Symétrie axiale", right: "Retournement de la figure, comme un pliage le long d'une droite" },
              { left: "Symétrie centrale", right: "Le centre est le milieu de chaque segment [MM']" },
              { left: "Translation", right: "Glissement selon une direction, un sens et une longueur" },
              { left: "Rotation", right: "Tour autour d'un point, d'un angle donné, dans un sens donné" },
              { left: "Centre d'une rotation", right: "Le seul point qui est sa propre image" },
            ],
          },
          quiz: [
            { q: "La translation qui transforme A en B transforme M en M'. Quel quadrilatère est un parallélogramme ?", options: ["ABMM'", "ABM'M", "AMBM'", "AM'BM"], answer: 1, why: "Par définition, ABM'M est un parallélogramme : [MM'] est parallèle à [AB], de même longueur et dans le même sens." },
            { q: "Une rotation de centre O transforme M en M'. Que peut-on affirmer ?", options: ["OM' = 2 × OM", "M' est sur la droite (OM)", "OM' = OM", "MM' = OM"], answer: 2, why: "Un point et son image par une rotation sont à la même distance du centre." },
            { q: "Une rotation d'angle 180° a le même effet que :", options: ["une symétrie centrale", "une symétrie axiale", "une translation"], answer: 0, why: "Faire un demi-tour autour de O, c'est appliquer la symétrie de centre O." },
            { q: "Un triangle d'aire 12 cm² subit une translation. L'aire de son image vaut :", options: ["6 cm²", "24 cm²", "144 cm²", "12 cm²"], answer: 3, why: "Une translation conserve les aires : la figure glisse sans être déformée." },
            { q: "Dans un repère, la translation qui transforme A(0 ; 0) en B(2 ; -3) transforme C(1 ; 4) en :", options: ["(3 ; 1)", "(-1 ; 7)", "(3 ; 7)", "(2 ; -12)"], answer: 0, why: "On ajoute 2 à l'abscisse et -3 à l'ordonnée : (1 + 2 ; 4 - 3) = (3 ; 1)." },
          ],
          trap: "Mesurer l'angle de la rotation au point M au lieu de le mesurer au centre O, ou tourner dans le mauvais sens : l'angle se lit toujours en O, entre [OM) et [OM'), dans le sens indiqué.",
          method: "Pour construire l'image par une rotation, enchaînez toujours les trois gestes : tracer [OM), mesurer l'angle au rapporteur centré en O dans le bon sens, reporter OM au compas. Vérifiez à la fin, au compas, que OM' = OM.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'homotheties',
          title: "Les homothéties",
          minutes: 30,
          objectives: [
            "Construire l'image d'un point ou d'une figure par une homothétie de centre et de rapport donnés.",
            "Reconnaître une homothétie dans une configuration (agrandissement, réduction, configuration de Thalès) et déterminer son rapport.",
            "Utiliser l'effet d'une homothétie sur les longueurs, les angles et les aires.",
          ],
          course: [
            {
              heading: "Homothétie de rapport positif",
              paragraphs: [
                "Une homothétie agrandit ou réduit une figure à partir d'un point fixe, son centre. Imaginez une lampe posée sur une table, qui projette sur un mur l'ombre d'une petite figurine découpée : la lampe joue le rôle du centre, et l'ombre est un agrandissement de la figurine. Chaque point de l'ombre est aligné avec la lampe et le point correspondant de la figurine.",
                "L'homothétie de centre O et de rapport k (k positif) transforme un point M en le point M' situé sur la demi-droite [OM) tel que OM' = k × OM. Si k > 1, la figure est agrandie ; si 0 < k < 1, elle est réduite ; si k = 1, chaque point est sa propre image.",
                "Exemple : avec OM = 2 cm et k = 3, on place M' sur [OM) à 6 cm de O. Avec k = 0,5, on le place à 1 cm de O, entre O et M.",
              ],
              box: { label: "Définition", text: "Pour k > 0, l'image de M par l'homothétie de centre O et de rapport k est le point M' de la demi-droite [OM) tel que OM' = k × OM. Le centre O est sa propre image." },
            },
            {
              heading: "Homothétie de rapport négatif",
              paragraphs: [
                "Le rapport peut aussi être négatif. Si k < 0, le point M' est placé de l'autre côté du centre : O se trouve entre M et M', et la distance OM' est égale à l'opposé de k multiplié par OM. Par exemple, avec k = -2 et OM = 3 cm, M' est sur la demi-droite opposée à [OM), à 6 cm de O.",
                "Le signe de k indique donc le côté (même côté que M si k > 0, côté opposé si k < 0), et la valeur de k sans son signe indique la taille. Une homothétie de rapport -3 agrandit (la figure est 3 fois plus grande et retournée), une homothétie de rapport -0,5 réduit. Cas particulier : l'homothétie de rapport -1 est la symétrie centrale de centre O.",
              ],
              box: { label: "À retenir", text: "Pour k < 0 : M' est sur la demi-droite opposée à [OM) et OM' = (-k) × OM. Le point O est alors entre M et M'. L'homothétie de rapport -1 est la symétrie de centre O." },
            },
            {
              heading: "Ce que fait une homothétie aux figures",
              paragraphs: [
                "Une homothétie conserve la forme de la figure : elle conserve les mesures d'angles, l'alignement et le parallélisme. L'image d'une droite est une droite parallèle (ou la même droite si elle passe par le centre). Le centre, un point et son image sont toujours alignés.",
                "En revanche, elle modifie les dimensions. Si l'on note r la valeur de k sans son signe (r = 3 pour k = 3 comme pour k = -3), toutes les longueurs sont multipliées par r et toutes les aires sont multipliées par r², c'est-à-dire par k². Avec k = -2, un segment de 3 cm devient un segment de 6 cm, et un triangle de 5 cm² devient un triangle de 20 cm².",
                "On retrouve ici la configuration de Thalès : si A' et B' sont les images de A et B par une homothétie de centre O, alors (A'B') est parallèle à (AB) et OA'/OA = OB'/OB = A'B'/AB, ce quotient étant la valeur de k sans son signe.",
              ],
              box: { label: "Propriété", text: "Une homothétie de rapport k multiplie les longueurs par k (ou par -k si k est négatif) et les aires par k². Elle conserve les angles, l'alignement et le parallélisme." },
            },
            {
              heading: "Retrouver le rapport d'une homothétie",
              paragraphs: [
                "Pour trouver le rapport k d'une homothétie de centre O qui transforme M en M', on procède en deux temps. D'abord le signe : si M et M' sont du même côté de O, k est positif ; si O est entre M et M', k est négatif. Ensuite la valeur : on calcule le quotient OM' ÷ OM.",
                "Exemple : O, A et A' sont alignés, OA = 4 cm et OA' = 10 cm. Si A' est du même côté que A, k = 10 ÷ 4 = 2,5. Si O est entre A et A', k = -2,5. Contrôle : la valeur de k sans son signe est supérieure à 1, donc la figure image doit être plus grande.",
              ],
            },
          ],
          keyPoints: [
            "Homothétie de centre O et de rapport k > 0 : M' est sur [OM) et OM' = k × OM.",
            "Si k < 0 : O est entre M et M', et OM' = (-k) × OM. Le rapport -1 donne la symétrie centrale.",
            "k > 1 ou k < -1 : agrandissement ; k entre -1 et 1 (et non nul) : réduction.",
            "Longueurs multipliées par k sans son signe, aires multipliées par k².",
            "Angles, alignement et parallélisme sont conservés ; O, M et M' sont alignés.",
          ],
          example: {
            statement: "Le triangle ABC est rectangle en A, avec AB = 4 cm, AC = 3 cm et BC = 5 cm. Son image par une homothétie de rapport -1,5 est le triangle A'B'C'. Calculer les longueurs de ses côtés, son aire et la mesure de l'angle B'A'C'.",
            solution: [
              "Le rapport est -1,5 : les longueurs sont multipliées par 1,5.",
              "A'B' = 1,5 × 4 = 6 cm ; A'C' = 1,5 × 3 = 4,5 cm ; B'C' = 1,5 × 5 = 7,5 cm.",
              "L'aire de ABC vaut 4 × 3 ÷ 2 = 6 cm². Les aires sont multipliées par (-1,5)² = 2,25, donc l'aire de A'B'C' vaut 6 × 2,25 = 13,5 cm².",
              "Contrôle : A'B'C' est rectangle en A' (les angles sont conservés), donc son aire vaut 6 × 4,5 ÷ 2 = 13,5 cm². Les deux calculs concordent.",
              "L'homothétie conserve les angles : l'angle B'A'C' mesure 90°.",
              "Résultats : 6 cm, 4,5 cm, 7,5 cm, aire de 13,5 cm² et angle droit en A'.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On donne deux points O et A tels que OA = 2 cm. 1) Placer A', image de A par l'homothétie de centre O et de rapport 3, et donner OA'. 2) Placer A'', image de A par l'homothétie de centre O et de rapport -0,5, et donner OA''. 3) Calculer les distances AA' et AA''.",
              hint: "Rapport positif : même côté que A. Rapport négatif : de l'autre côté de O.",
              solution: [
                "1) Le rapport 3 est positif : A' est sur la demi-droite [OA) et OA' = 3 × 2 = 6 cm.",
                "2) Le rapport -0,5 est négatif : A'' est sur la demi-droite opposée à [OA) et OA'' = 0,5 × 2 = 1 cm.",
                "3) A est entre O et A' : AA' = OA' - OA = 6 - 2 = 4 cm. O est entre A et A'' : AA'' = OA + OA'' = 2 + 1 = 3 cm.",
                "Résultats : OA' = 6 cm, OA'' = 1 cm, AA' = 4 cm et AA'' = 3 cm.",
              ],
            },
            {
              level: 2,
              statement: "Les points A, O, A' sont alignés dans cet ordre, ainsi que les points B, O, B'. On sait que OA = 4 cm, OA' = 6 cm, OB = 5 cm et AB = 3,2 cm. Les points A' et B' sont les images de A et B par une homothétie de centre O. 1) Déterminer le rapport k de cette homothétie. 2) Calculer OB'. 3) Calculer A'B'. 4) Que peut-on dire des droites (AB) et (A'B') ?",
              hint: "Les points sont alignés « dans cet ordre » : où se trouve O par rapport à A et A' ?",
              solution: [
                "1) O est entre A et A' : le rapport est négatif. Sa valeur sans signe est OA' ÷ OA = 6 ÷ 4 = 1,5. Donc k = -1,5.",
                "2) OB' = 1,5 × OB = 1,5 × 5 = 7,5 cm.",
                "3) Le segment [A'B'] est l'image de [AB] : A'B' = 1,5 × 3,2 = 4,8 cm.",
                "4) L'image d'une droite par une homothétie est une droite parallèle : (A'B') est parallèle à (AB).",
                "Résultats : k = -1,5, OB' = 7,5 cm, A'B' = 4,8 cm et (AB) // (A'B').",
              ],
            },
            {
              level: 3,
              statement: "Un graphiste a dessiné un logo d'aire 18 cm², dont la plus grande dimension mesure 6 cm. 1) Il applique au logo une homothétie de rapport 1,5. Quelles sont la plus grande dimension et l'aire de l'image ? 2) Il souhaite maintenant une version du logo dont la plus grande dimension mesure 4 cm. Quel rapport positif doit-il choisir ? Quelle sera l'aire de cette version ? 3) Un collègue affirme : « Si l'on double toutes les longueurs, l'aire double. » Cette affirmation est-elle vraie ? Justifier.",
              hint: "Les longueurs sont multipliées par k, les aires par k².",
              solution: [
                "1) Plus grande dimension : 1,5 × 6 = 9 cm. Aire : 18 × 1,5² = 18 × 2,25 = 40,5 cm².",
                "2) Il faut que 6 × k = 4, donc k = 4 ÷ 6 = 2/3. L'aire est multipliée par (2/3)² = 4/9 : 18 × 4/9 = 8 cm².",
                "3) Doubler les longueurs, c'est appliquer un rapport k = 2. Les aires sont alors multipliées par 2² = 4, et non par 2. L'affirmation est fausse.",
                "Résultats : 9 cm et 40,5 cm² ; k = 2/3 et 8 cm² ; affirmation fausse (l'aire est multipliée par 4).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les homothéties.",
            statements: [
              { text: "Une homothétie de rapport 2 double les aires.", true: false, why: "Les aires sont multipliées par 2² = 4." },
              { text: "Une homothétie conserve les mesures d'angles.", true: true, why: "La forme est conservée : seules les dimensions changent." },
              { text: "Une homothétie de rapport -1 est une symétrie centrale.", true: true, why: "M' est de l'autre côté de O, à la même distance : O est le milieu de [MM']." },
              { text: "Avec un rapport négatif, la figure image est forcément plus petite.", true: false, why: "Le signe indique le côté, pas la taille : un rapport -3 agrandit." },
              { text: "Le centre, un point et son image sont toujours alignés.", true: true, why: "M' est toujours sur la droite (OM), d'un côté ou de l'autre de O." },
              { text: "Une homothétie de rapport 0,5 est une réduction.", true: true, why: "Les longueurs sont multipliées par 0,5, donc divisées par 2." },
              { text: "L'image d'une droite par une homothétie lui est perpendiculaire.", true: false, why: "L'image d'une droite est une droite parallèle (ou la même droite)." },
            ],
          },
          quiz: [
            { q: "L'homothétie de centre O et de rapport 4 transforme M en M'. Si OM = 2,5 cm, alors OM' vaut :", options: ["6,5 cm", "10 cm", "0,625 cm", "1,6 cm"], answer: 1, why: "OM' = 4 × OM = 4 × 2,5 = 10 cm." },
            { q: "Une homothétie de rapport -2 transforme un segment de 3 cm en un segment de :", options: ["-6 cm", "1,5 cm", "6 cm"], answer: 2, why: "Une longueur n'est jamais négative : elle est multipliée par 2, soit 6 cm." },
            { q: "Un carré d'aire 5 cm² a pour image, par une homothétie de rapport 3, un carré d'aire :", options: ["45 cm²", "15 cm²", "8 cm²", "125 cm²"], answer: 0, why: "Les aires sont multipliées par 3² = 9 : 5 × 9 = 45 cm²." },
            { q: "Si le rapport k est strictement compris entre 0 et 1, l'homothétie produit :", options: ["un agrandissement", "une figure retournée", "une figure identique", "une réduction"], answer: 3, why: "Les longueurs sont multipliées par un nombre inférieur à 1 : elles diminuent." },
            { q: "Les points M, O, M' sont alignés dans cet ordre, avec OM = 2 et OM' = 5. Le rapport de l'homothétie de centre O qui transforme M en M' est :", options: ["2,5", "-2,5", "-0,4", "0,4"], answer: 1, why: "O est entre M et M', donc le rapport est négatif, et 5 ÷ 2 = 2,5 : k = -2,5." },
          ],
          trap: "Multiplier l'aire par k au lieu de k², ou placer l'image du même côté que le point quand le rapport est négatif.",
          method: "Pour trouver un rapport, regardez d'abord la position (même côté de O : positif ; de part et d'autre : négatif), puis calculez OM' ÷ OM. Contrôlez ensuite : si l'image est plus grande, la valeur de k sans son signe doit dépasser 1.",
        },
      ],
    },
    /* ==================================================================== */
    {
      id: 'espace-grandeurs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sphere-boule',
          title: "La sphère et la boule : aire et volume",
          minutes: 25,
          objectives: [
            "Distinguer la sphère et la boule, et utiliser le vocabulaire associé (centre, rayon, diamètre, grand cercle).",
            "Calculer l'aire d'une sphère et le volume d'une boule.",
            "Résoudre un problème en convertissant les unités d'aire, de volume et de contenance.",
          ],
          course: [
            {
              heading: "Sphère ou boule ?",
              paragraphs: [
                "La sphère de centre O et de rayon r est formée de tous les points de l'espace situés à la distance r du point O. C'est une surface, sans épaisseur : pensez à la peau d'un ballon ou à une bulle de savon.",
                "La boule de centre O et de rayon r est formée de tous les points situés à une distance inférieure ou égale à r du point O. C'est un solide plein : une bille, une boule de pétanque. La sphère est donc le « bord » de la boule. On parle de l'aire d'une sphère et du volume d'une boule.",
                "Un diamètre est un segment qui passe par le centre et dont les extrémités sont sur la sphère : sa longueur est 2r. Un grand cercle est un cercle de centre O et de rayon r tracé sur la sphère, comme l'équateur sur un globe terrestre.",
              ],
              box: { label: "Définition", text: "Sphère de centre O et de rayon r : les points M tels que OM = r (une surface). Boule de centre O et de rayon r : les points M tels que OM ≤ r (un solide)." },
            },
            {
              heading: "Les deux formules à connaître",
              paragraphs: [
                "L'aire d'une sphère de rayon r est égale à 4 × π × r². C'est exactement quatre fois l'aire d'un disque de même rayon (π × r²) : il faudrait quatre disques comme l'équateur pour recouvrir la sphère. Une aire s'exprime en unités d'aire (cm², m²).",
                "Le volume d'une boule de rayon r est égal à (4/3) × π × r³, c'est-à-dire 4 × π × r³ ÷ 3. Le rayon est élevé au cube et le résultat s'exprime en unités de volume (cm³, m³). Exemple : une boule de rayon 3 cm a pour volume 4 × π × 27 ÷ 3 = 36π cm³, soit environ 113 cm³.",
                "Gardez π dans vos calculs pour obtenir la valeur exacte (36π cm³), puis utilisez la touche π de la calculatrice et arrondissez seulement à la fin, à la précision demandée.",
              ],
              box: { label: "Formule", text: "Aire d'une sphère de rayon r : A = 4 × π × r². Volume d'une boule de rayon r : V = (4/3) × π × r³." },
            },
            {
              heading: "Unités et contenances",
              paragraphs: [
                "Les problèmes demandent souvent une contenance en litres. Retenez les correspondances : 1 dm³ = 1 L, 1 cm³ = 1 mL et 1 m³ = 1 000 L. Pour les aires, on passe d'une unité à la suivante en multipliant par 100 (1 m² = 100 dm²) ; pour les volumes, en multipliant par 1 000 (1 m³ = 1 000 dm³).",
                "Exemple : un ballon de basket a un rayon d'environ 12 cm. Son volume vaut (4/3) × π × 12³ = 2 304π cm³, soit environ 7 238 cm³, c'est-à-dire environ 7,2 L d'air.",
                "Une demi-boule (un hémisphère) a pour volume la moitié du volume de la boule, soit (2/3) × π × r³. Les solides composés (un silo formé d'un cylindre surmonté d'une demi-boule, une glace en cornet) se calculent en additionnant les volumes de leurs parties.",
              ],
              box: { label: "Repère", text: "1 dm³ = 1 L ; 1 cm³ = 1 mL ; 1 m³ = 1 000 L." },
            },
          ],
          keyPoints: [
            "La sphère est une surface (OM = r), la boule est un solide (OM ≤ r).",
            "Aire de la sphère : 4 × π × r² (en cm², m²...).",
            "Volume de la boule : (4/3) × π × r³ (en cm³, m³...).",
            "Toujours utiliser le rayon : si l'on donne le diamètre, on le divise par 2.",
            "1 dm³ = 1 L, 1 cm³ = 1 mL, 1 m³ = 1 000 L.",
          ],
          example: {
            statement: "Une balle de tennis a un diamètre de 6,6 cm. Calculer l'aire de sa surface arrondie au cm² et son volume arrondi au cm³.",
            solution: [
              "Le rayon vaut 6,6 ÷ 2 = 3,3 cm.",
              "Aire : A = 4 × π × 3,3² = 4 × π × 10,89 = 43,56π cm².",
              "À la calculatrice, 43,56π ≈ 136,8, donc A ≈ 137 cm².",
              "Volume : V = (4/3) × π × 3,3³ = (4/3) × π × 35,937 = 47,916π cm³.",
              "À la calculatrice, 47,916π ≈ 150,5, donc V ≈ 151 cm³.",
              "Réponse : environ 137 cm² de surface et 151 cm³ de volume.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère une boule de rayon 5 cm. 1) Calculer la valeur exacte de son volume, puis sa valeur arrondie au dixième de cm³. 2) Calculer la valeur exacte de l'aire de la sphère qui la limite, puis sa valeur arrondie au dixième de cm².",
              hint: "5³ = 125 et 5² = 25.",
              solution: [
                "1) V = (4/3) × π × 5³ = 4 × π × 125 ÷ 3 = 500π/3 cm³.",
                "500π/3 ≈ 523,598..., donc V ≈ 523,6 cm³.",
                "2) A = 4 × π × 5² = 4 × π × 25 = 100π cm².",
                "100π ≈ 314,159..., donc A ≈ 314,2 cm².",
                "Résultats : V = 500π/3 cm³ ≈ 523,6 cm³ et A = 100π cm² ≈ 314,2 cm².",
              ],
            },
            {
              level: 2,
              statement: "Un bocal décoratif a la forme d'une boule de diamètre 30 cm (on néglige l'épaisseur du verre). 1) Calculer son volume en cm³, arrondi à l'unité. 2) Convertir ce volume en litres, arrondi au dixième. 3) On le remplit d'eau aux trois quarts. Quel volume d'eau, en litres arrondi au dixième, contient-il ?",
              hint: "Commencez par le rayon, puis rappelez-vous que 1 000 cm³ = 1 L.",
              solution: [
                "1) Le rayon vaut 30 ÷ 2 = 15 cm. V = (4/3) × π × 15³ = (4/3) × π × 3 375 = 4 500π cm³ ≈ 14 137 cm³.",
                "2) 1 000 cm³ = 1 dm³ = 1 L, donc 14 137 cm³ ≈ 14,1 L.",
                "3) Trois quarts du volume : (3/4) × 4 500π = 3 375π cm³ ≈ 10 603 cm³, soit environ 10,6 L.",
                "Résultats : environ 14 137 cm³, soit 14,1 L, et environ 10,6 L d'eau.",
              ],
            },
            {
              level: 3,
              statement: "Un silo à grains est formé d'un cylindre de rayon 3 m et de hauteur 10 m, surmonté d'une demi-boule de rayon 3 m. 1) Montrer que le volume du silo est égal à 108π m³, puis en donner l'arrondi au m³. 2) On admet qu'un mètre cube de blé a une masse de 0,75 tonne. Quelle masse de blé, arrondie à la tonne, le silo peut-il contenir ? 3) On veut peindre le dôme (la demi-sphère extérieure). Un pot de peinture couvre 12 m². Combien de pots faut-il acheter ? Rappel : volume d'un cylindre = π × r² × h.",
              hint: "Le volume d'une demi-boule est la moitié de (4/3) × π × r³, et l'aire d'une demi-sphère est la moitié de 4 × π × r².",
              solution: [
                "1) Cylindre : π × 3² × 10 = 90π m³. Demi-boule : (1/2) × (4/3) × π × 3³ = (2/3) × π × 27 = 18π m³.",
                "Volume du silo : 90π + 18π = 108π m³ ≈ 339,3 m³, soit environ 339 m³.",
                "2) Masse : 0,75 × 108π = 81π ≈ 254,47 tonnes, soit environ 254 tonnes.",
                "3) Aire du dôme : (1/2) × 4 × π × 3² = 18π ≈ 56,5 m².",
                "Nombre de pots : 56,5 ÷ 12 ≈ 4,7. Un pot ne suffit qu'en entier, il faut donc 5 pots.",
                "Résultats : environ 339 m³, environ 254 tonnes de blé et 5 pots de peinture.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque formule à la grandeur qu'elle permet de calculer.",
            pairs: [
              { left: "4 × π × r²", right: "Aire d'une sphère" },
              { left: "(4/3) × π × r³", right: "Volume d'une boule" },
              { left: "π × r²", right: "Aire d'un disque" },
              { left: "π × r² × h", right: "Volume d'un cylindre" },
              { left: "2 × π × r", right: "Périmètre d'un cercle" },
              { left: "(1/3) × π × r² × h", right: "Volume d'un cône" },
            ],
          },
          quiz: [
            { q: "Quelle est la différence entre une sphère et une boule ?", options: ["La boule est creuse, la sphère est pleine", "La sphère est la surface, la boule est le solide", "Elles désignent exactement le même objet", "Seule la sphère possède un centre"], answer: 1, why: "La sphère est formée des points à la distance r du centre ; la boule contient aussi tous les points intérieurs." },
            { q: "L'aire d'une sphère de rayon 2 cm vaut :", options: ["16π cm²", "8π cm²", "4π cm²", "32π/3 cm²"], answer: 0, why: "A = 4 × π × 2² = 4 × π × 4 = 16π cm²." },
            { q: "Le volume d'une boule de rayon 3 cm vaut :", options: ["12π cm³", "27π cm³", "108π cm³", "36π cm³"], answer: 3, why: "V = 4 × π × 27 ÷ 3 = 36π cm³." },
            { q: "Si le rayon d'une boule double, son volume est multiplié par :", options: ["2", "4", "8", "6"], answer: 2, why: "Le rayon est au cube dans la formule : 2³ = 8." },
            { q: "Un volume de 1 dm³ correspond à :", options: ["1 mL", "1 L", "10 L", "100 mL"], answer: 1, why: "Un litre est exactement le volume d'un cube de 1 dm de côté." },
          ],
          trap: "Utiliser le diamètre à la place du rayon dans la formule, ou confondre r² (aire) et r³ (volume) : avec r = 3 cm, 4 × π × 3² donne une aire en cm², alors que (4/3) × π × 3³ donne un volume en cm³.",
          method: "Écrivez d'abord la formule avec des lettres, remplacez r par sa valeur, gardez π jusqu'à la valeur exacte, puis arrondissez à la fin. Vérifiez l'unité : un exposant 2 pour une aire, un exposant 3 pour un volume.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sections-solides',
          title: "Sections de solides par un plan",
          minutes: 30,
          objectives: [
            "Décrire la nature de la section d'un cube, d'un pavé droit, d'un cylindre, d'une pyramide, d'un cône ou d'une sphère par un plan.",
            "Calculer les dimensions d'une section en utilisant les propriétés des solides, le théorème de Pythagore ou la proportionnalité.",
            "Représenter une section en vraie grandeur.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une section ?",
              paragraphs: [
                "Couper un solide par un plan, c'est comme trancher un objet d'un coup de couteau bien droit : une tranche de pain de mie, une rondelle de saucisson, une orange coupée en deux. La surface obtenue à l'endroit de la coupe s'appelle la section du solide par ce plan.",
                "En 3e, on étudie les sections par des plans particuliers : parallèles à une face ou à une arête pour le cube et le pavé droit, parallèles à la base ou à l'axe pour le cylindre, parallèles à la base pour la pyramide et le cône, et n'importe quel plan pour la sphère.",
              ],
            },
            {
              heading: "Cube, pavé droit et cylindre",
              paragraphs: [
                "La section d'un pavé droit par un plan parallèle à une face est un rectangle de mêmes dimensions que cette face. Pour un cube, c'est un carré identique aux faces. La section par un plan parallèle à une arête est un rectangle dont l'une des dimensions est la longueur de cette arête. Exemple : un cube de 4 cm d'arête, coupé par le plan qui contient deux arêtes opposées, donne un rectangle de 4 cm sur 4√2 cm (l'autre côté est une diagonale d'une face, calculée avec Pythagore).",
                "La section d'un cylindre par un plan parallèle à ses bases est un disque de même rayon que les bases (comme une rondelle de saucisson). Par un plan parallèle à son axe, la section est un rectangle dont l'une des dimensions est la hauteur du cylindre.",
              ],
              box: { label: "À retenir", text: "Pavé droit : plan parallèle à une face → rectangle identique à la face ; plan parallèle à une arête → rectangle. Cylindre : plan parallèle aux bases → disque de même rayon ; plan parallèle à l'axe → rectangle." },
            },
            {
              heading: "Pyramide et cône",
              paragraphs: [
                "La section d'une pyramide ou d'un cône par un plan parallèle à la base est une réduction de la base : un polygone de même forme pour la pyramide, un disque plus petit pour le cône. Le petit solide situé au-dessus du plan est lui-même une réduction du grand.",
                "Le rapport de réduction est k = SO' ÷ SO, où S est le sommet, SO la hauteur du grand solide et SO' la distance entre le sommet et le plan de coupe. Exemple : un cône de hauteur 12 cm et de rayon 6 cm, coupé à 4 cm du sommet : k = 4 ÷ 12 = 1/3, donc la section est un disque de rayon 6 × 1/3 = 2 cm.",
              ],
              box: { label: "Propriété", text: "La section d'une pyramide ou d'un cône de sommet S et de hauteur SO par un plan parallèle à la base, situé à la distance SO' de S, est une réduction de la base de rapport k = SO' ÷ SO." },
            },
            {
              heading: "Section d'une sphère",
              paragraphs: [
                "La section d'une sphère par un plan est toujours un cercle (et celle d'une boule, un disque). Si le plan passe par le centre O, on obtient un grand cercle, de même rayon r que la sphère. Plus le plan s'éloigne du centre, plus le cercle est petit ; s'il est à la distance r du centre, il ne touche la sphère qu'en un point (le plan est tangent).",
                "Pour calculer le rayon de la section, on note H le centre du cercle de section (H est le pied de la perpendiculaire au plan passant par O) et M un point de ce cercle. Le triangle OHM est rectangle en H, avec OM = r et OH = d, la distance du centre au plan. Par le théorème de Pythagore : HM² = r² - d².",
                "Exemple : une sphère de rayon 10 cm coupée par un plan situé à 6 cm du centre. HM² = 10² - 6² = 100 - 36 = 64, donc HM = 8 cm. La section est un cercle de rayon 8 cm.",
              ],
              box: { label: "Formule", text: "Section d'une sphère de rayon r par un plan situé à la distance d du centre (d < r) : un cercle de rayon √(r² - d²)." },
            },
          ],
          keyPoints: [
            "Cube ou pavé, plan parallèle à une face : rectangle (ou carré) identique à la face.",
            "Cylindre : plan parallèle aux bases → disque de même rayon ; plan parallèle à l'axe → rectangle.",
            "Pyramide ou cône, plan parallèle à la base : réduction de la base de rapport SO' ÷ SO.",
            "Sphère : la section est un cercle de rayon √(r² - d²), qui est un grand cercle si d = 0.",
            "Pour une dimension inconnue, chercher un triangle rectangle (Pythagore) ou un rapport de réduction.",
          ],
          example: {
            statement: "Une sphère de centre O et de rayon 10 cm est coupée par un plan situé à 6 cm de O. Déterminer la nature de la section, son rayon, puis son périmètre arrondi au millimètre.",
            solution: [
              "La section d'une sphère par un plan est un cercle. On note H son centre et M un point de ce cercle.",
              "Le triangle OHM est rectangle en H, avec OM = 10 cm (rayon de la sphère) et OH = 6 cm.",
              "D'après le théorème de Pythagore : OM² = OH² + HM², donc HM² = 10² - 6² = 100 - 36 = 64.",
              "HM = √64 = 8 cm.",
              "Périmètre : 2 × π × 8 = 16π cm ≈ 50,27 cm, soit environ 50,3 cm.",
              "Réponse : un cercle de rayon 8 cm et de périmètre environ 50,3 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Un pavé droit ABCDEFGH a pour dimensions AB = 6 cm, BC = 4 cm et AE = 3 cm (la face ABCD est un rectangle de 6 cm sur 4 cm, la face BCGF un rectangle de 4 cm sur 3 cm). Donner la nature et les dimensions de sa section par un plan parallèle à la face ABCD, puis par un plan parallèle à la face BCGF. 2) Un cylindre a pour rayon 2 cm et pour hauteur 5 cm. Donner la nature de sa section par un plan parallèle à ses bases et calculer son aire, arrondie au dixième.",
              hint: "Un plan parallèle à une face découpe une copie exacte de cette face.",
              solution: [
                "1) Plan parallèle à ABCD : la section est un rectangle identique à ABCD, de 6 cm sur 4 cm.",
                "Plan parallèle à BCGF : la section est un rectangle identique à BCGF, de 4 cm sur 3 cm.",
                "2) La section est un disque de même rayon que les bases, soit 2 cm. Son aire vaut π × 2² = 4π cm² ≈ 12,6 cm².",
                "Résultats : rectangles de 6 cm × 4 cm et de 4 cm × 3 cm ; disque de rayon 2 cm et d'aire environ 12,6 cm².",
              ],
            },
            {
              level: 2,
              statement: "Une pyramide SABCD a pour base le carré ABCD de côté 6 cm et pour hauteur SO = 9 cm. On la coupe par un plan parallèle à la base, à 3 cm du sommet S. 1) Quelle est la nature de la section ? 2) Calculer le rapport de réduction. 3) Calculer le côté et l'aire de la section.",
              hint: "Le rapport de réduction est la distance du sommet au plan divisée par la hauteur totale.",
              solution: [
                "1) La section d'une pyramide par un plan parallèle à sa base est une réduction de la base : c'est un carré.",
                "2) k = 3 ÷ 9 = 1/3.",
                "3) Côté : 6 × 1/3 = 2 cm. Aire : 2 × 2 = 4 cm².",
                "Contrôle : les aires sont multipliées par k² = 1/9, et 36 × 1/9 = 4 cm².",
                "Résultats : un carré de côté 2 cm et d'aire 4 cm².",
              ],
            },
            {
              level: 3,
              statement: "Partie A. Un cylindre de révolution a pour rayon 5 cm et pour hauteur 12 cm. On le coupe par un plan parallèle à son axe, situé à 3 cm de cet axe. 1) Quelle est la nature de la section ? 2) Calculer ses dimensions et son aire. Partie B. Une orange est assimilée à une boule de rayon 4 cm. On la coupe par un plan situé à 2 cm de son centre. 3) Calculer le rayon de la section, arrondi au millimètre, puis son aire, arrondie au dixième de cm².",
              hint: "Partie A : regardez la base du cylindre vue de dessus. La largeur de la section est une corde du disque de base, et le rayon, la distance à l'axe et la demi-corde forment un triangle rectangle.",
              solution: [
                "1) La section d'un cylindre par un plan parallèle à son axe est un rectangle.",
                "2) L'une des dimensions est la hauteur, 12 cm. L'autre est une corde du disque de base. Dans le disque de centre O, on note I le milieu de cette corde et M une extrémité : le triangle OIM est rectangle en I, avec OM = 5 cm et OI = 3 cm. IM² = 5² - 3² = 25 - 9 = 16, donc IM = 4 cm et la corde mesure 2 × 4 = 8 cm.",
                "Aire de la section : 12 × 8 = 96 cm².",
                "3) La section de la boule est un disque. Son rayon vérifie HM² = 4² - 2² = 16 - 4 = 12, donc HM = √12 ≈ 3,5 cm.",
                "Aire : π × HM² = 12π cm² ≈ 37,7 cm².",
                "Résultats : un rectangle de 12 cm sur 8 cm, d'aire 96 cm² ; un disque de rayon environ 3,5 cm et d'aire environ 37,7 cm².",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul du rayon de la section d'une sphère.",
            items: [
              "Nommer le centre O de la sphère, le centre H de la section et un point M du cercle de section.",
              "Justifier que le triangle OHM est rectangle en H.",
              "Écrire l'égalité de Pythagore : OM² = OH² + HM².",
              "Remplacer OM par le rayon r de la sphère et OH par la distance d du centre au plan.",
              "Calculer HM² = r² - d², puis HM = √(r² - d²).",
              "Conclure par une phrase, avec l'unité.",
            ],
          },
          quiz: [
            { q: "La section d'un cylindre par un plan parallèle à ses bases est :", options: ["un rectangle", "un triangle", "un disque de même rayon que les bases", "un disque plus petit que les bases"], answer: 2, why: "Comme une rondelle de saucisson : chaque tranche parallèle aux bases est un disque identique aux bases." },
            { q: "La section d'un cube par un plan parallèle à une face est :", options: ["un carré identique à la face", "un rectangle non carré", "un triangle", "un losange non carré"], answer: 0, why: "Un plan parallèle à une face découpe une copie exacte de cette face." },
            { q: "Une sphère de rayon 5 cm est coupée par un plan situé à 3 cm de son centre. Le rayon de la section mesure :", options: ["2 cm", "4 cm", "√34 cm", "8 cm"], answer: 1, why: "Par Pythagore, le rayon vaut √(5² - 3²) = √16 = 4 cm." },
            { q: "Une pyramide de hauteur 12 cm est coupée parallèlement à sa base, à 4 cm du sommet. La section est une réduction de la base de rapport :", options: ["1/4", "2/3", "1/3", "3"], answer: 2, why: "k = 4 ÷ 12 = 1/3." },
            { q: "La section d'un cylindre par un plan parallèle à son axe est :", options: ["un disque", "un triangle", "un trapèze", "un rectangle"], answer: 3, why: "L'une de ses dimensions est la hauteur du cylindre, l'autre est une corde du disque de base." },
          ],
          trap: "Calculer le rayon de la section d'une sphère par une soustraction (r - d) au lieu d'utiliser le théorème de Pythagore : pour r = 5 cm et d = 3 cm, le rayon vaut 4 cm, et non 2 cm.",
          method: "Pour prévoir une section, pensez à un objet réel que vous coupez (une boîte, une boîte de conserve, une orange), puis dessinez la section en vraie grandeur à côté de la perspective : un schéma à plat fait apparaître le triangle rectangle ou le rapport utile.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reperage-sphere',
          title: "Se repérer sur la sphère : latitude et longitude",
          minutes: 25,
          objectives: [
            "Utiliser le vocabulaire du repérage sur la sphère terrestre : axe des pôles, équateur, parallèle, méridien, méridien de Greenwich.",
            "Lire et donner les coordonnées géographiques (latitude, longitude) d'un point.",
            "Calculer une longueur sur la sphère terrestre à l'aide de la proportionnalité.",
          ],
          course: [
            {
              heading: "La Terre, une sphère",
              paragraphs: [
                "Pour se repérer à la surface de la Terre, on la modélise par une sphère de centre O et de rayon environ 6 371 km. Elle tourne autour d'un axe, l'axe des pôles, qui traverse la sphère au pôle Nord et au pôle Sud.",
                "L'équateur est le grand cercle situé dans le plan qui passe par O et qui est perpendiculaire à l'axe des pôles. Il partage la Terre en deux hémisphères : l'hémisphère Nord et l'hémisphère Sud. Sa longueur vaut 2 × π × 6 371 ≈ 40 030 km, soit environ 40 000 km.",
              ],
            },
            {
              heading: "Parallèles et méridiens",
              paragraphs: [
                "Un parallèle est un cercle tracé sur la sphère dans un plan parallèle à celui de l'équateur. Les parallèles sont de plus en plus petits quand on s'approche des pôles ; l'équateur est le seul parallèle qui soit un grand cercle.",
                "Un méridien est un demi-grand cercle qui relie le pôle Nord au pôle Sud. Tous les méridiens ont la même longueur, environ 20 000 km. Le méridien origine est celui qui passe par l'observatoire de Greenwich, près de Londres : il a été choisi comme référence internationale en 1884.",
                "Les parallèles et les méridiens forment un quadrillage de la sphère, comme les lignes d'un cahier quadrillé, mais courbées : on peut alors repérer n'importe quel point par deux angles.",
              ],
              box: { label: "Définition", text: "Un parallèle est un cercle de la sphère parallèle à l'équateur. Un méridien est un demi-cercle qui joint les deux pôles. Le méridien de Greenwich est le méridien origine." },
            },
            {
              heading: "Latitude et longitude",
              paragraphs: [
                "La latitude d'un point M est la mesure de l'angle formé par le plan de l'équateur et la demi-droite [OM). Elle est comprise entre 0° (sur l'équateur) et 90° (aux pôles), et on précise Nord (N) ou Sud (S). Tous les points d'un même parallèle ont la même latitude.",
                "La longitude d'un point M est la mesure de l'angle formé par le demi-plan du méridien de Greenwich et le demi-plan du méridien de M. Elle est comprise entre 0° et 180°, et on précise Est (E) ou Ouest (O). Tous les points d'un même méridien ont la même longitude.",
                "On écrit les coordonnées géographiques dans l'ordre (latitude ; longitude). Par exemple, Paris a pour coordonnées environ (48,9° N ; 2,3° E). Le pôle Nord a pour latitude 90° N ; sa longitude n'est pas définie, car tous les méridiens s'y rejoignent.",
              ],
              box: { label: "À retenir", text: "Coordonnées géographiques : (latitude ; longitude). Latitude de 0° à 90°, Nord ou Sud, mesurée à partir de l'équateur. Longitude de 0° à 180°, Est ou Ouest, mesurée à partir du méridien de Greenwich." },
            },
            {
              heading: "Calculer une distance sur un grand cercle",
              paragraphs: [
                "La longueur d'un arc de cercle est proportionnelle à l'angle au centre qui l'intercepte : un angle de 360° correspond au cercle entier. Pour deux points situés sur l'équateur, ou sur un même méridien, on peut donc calculer la distance qui les sépare le long de ce grand cercle.",
                "Exemple : deux points de l'équateur ont pour longitudes 15° O et 45° E. Ils sont de part et d'autre du méridien de Greenwich, donc l'angle entre leurs méridiens vaut 15° + 45° = 60°. La distance le long de l'équateur vaut 40 030 × 60 ÷ 360 ≈ 6 672 km.",
              ],
              box: { label: "Formule", text: "Longueur d'un arc de grand cercle d'angle α (en degrés) sur une sphère de rayon R : 2 × π × R × α ÷ 360." },
            },
          ],
          keyPoints: [
            "L'équateur est un grand cercle perpendiculaire à l'axe des pôles ; il sépare les hémisphères Nord et Sud.",
            "Parallèle : cercle parallèle à l'équateur (même latitude). Méridien : demi-cercle d'un pôle à l'autre (même longitude).",
            "Latitude : de 0° à 90°, N ou S, à partir de l'équateur.",
            "Longitude : de 0° à 180°, E ou O, à partir du méridien de Greenwich.",
            "On écrit (latitude ; longitude) ; une longueur d'arc est proportionnelle à son angle.",
          ],
          example: {
            statement: "Le point M est situé dans l'hémisphère Sud, sur le parallèle qui fait un angle de 35° avec le plan de l'équateur, et sur le méridien qui fait un angle de 60° avec le méridien de Greenwich, vers l'ouest. Le point N est sur l'équateur et sur le même méridien que M. 1) Donner les coordonnées de M et de N. 2) Calculer la longueur de l'arc de méridien qui va de N à M, arrondie au km (rayon de la Terre : 6 371 km).",
            solution: [
              "1) M est dans l'hémisphère Sud, à 35° de l'équateur : sa latitude est 35° S. Son méridien est à 60° à l'ouest de Greenwich : sa longitude est 60° O. Donc M(35° S ; 60° O).",
              "N est sur l'équateur (latitude 0°) et sur le même méridien que M (longitude 60° O) : N(0° ; 60° O).",
              "2) L'arc NM est un arc de grand cercle (un méridien) d'angle 35°.",
              "Sa longueur est proportionnelle à l'angle : 2 × π × 6 371 × 35 ÷ 360 ≈ 3 891,8 km.",
              "Réponse : M(35° S ; 60° O), N(0° ; 60° O) et l'arc NM mesure environ 3 892 km.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère les points A(40° N ; 10° E), B(40° S ; 10° E), C(40° N ; 70° O) et D(0° ; 10° E). 1) Quel point est situé sur le même parallèle que A ? 2) Quels points sont situés sur le même méridien que A ? 3) Quel point est situé sur l'équateur ? 4) Quel point est situé dans l'hémisphère Sud ?",
              hint: "Même parallèle : même latitude. Même méridien : même longitude.",
              solution: [
                "1) Le même parallèle que A correspond à la même latitude, 40° N : c'est le point C.",
                "2) Le même méridien que A correspond à la même longitude, 10° E : ce sont les points B et D.",
                "3) L'équateur correspond à une latitude de 0° : c'est le point D.",
                "4) L'hémisphère Sud correspond à une latitude Sud : c'est le point B.",
                "Résultats : C ; B et D ; D ; B.",
              ],
            },
            {
              level: 2,
              statement: "Deux navires sont sur l'équateur : le premier à la longitude 15° O, le second à la longitude 45° E. 1) Quelle est la mesure de l'angle formé par leurs méridiens ? 2) On prend 6 371 km pour rayon de la Terre. Calculer la longueur de l'équateur, arrondie au km. 3) En déduire la distance qui sépare les deux navires le long de l'équateur, arrondie au km.",
              hint: "Les deux longitudes sont de part et d'autre du méridien de Greenwich : faut-il soustraire ou additionner ?",
              solution: [
                "1) L'un est à l'ouest de Greenwich, l'autre à l'est : l'angle vaut 15° + 45° = 60°.",
                "2) L'équateur est un grand cercle de rayon 6 371 km : 2 × π × 6 371 ≈ 40 030 km.",
                "3) La longueur d'arc est proportionnelle à l'angle : 2 × π × 6 371 × 60 ÷ 360 ≈ 6 672 km (c'est un sixième de l'équateur).",
                "Résultats : 60°, environ 40 030 km et environ 6 672 km.",
              ],
            },
            {
              level: 3,
              statement: "On assimile la Terre à une sphère de centre O et de rayon R = 6 371 km. Le point M est sur le parallèle de latitude 60° N. On note H le centre de ce parallèle (H est sur l'axe des pôles) ; le triangle OHM est rectangle en H et on admet que l'angle OMH mesure 60°. 1) Exprimer le rayon HM du parallèle en fonction de R, puis le calculer. 2) Calculer la longueur de ce parallèle, arrondie au km. Comparer avec la longueur de l'équateur. 3) Deux villes de ce parallèle ont des longitudes qui diffèrent de 90°. Quelle distance les sépare le long du parallèle, arrondie au km ?",
              hint: "Dans le triangle OHM rectangle en H, [OM] est l'hypoténuse et [HM] est le côté adjacent à l'angle OMH : pensez au cosinus.",
              solution: [
                "1) Dans le triangle OHM rectangle en H : cos(OMH) = HM ÷ OM, donc HM = OM × cos 60° = R × 0,5 = R ÷ 2.",
                "HM = 6 371 ÷ 2 = 3 185,5 km.",
                "2) Longueur du parallèle : 2 × π × 3 185,5 = π × 6 371 ≈ 20 015 km. C'est la moitié de la longueur de l'équateur (environ 40 030 km), puisque le rayon est divisé par 2.",
                "3) Un écart de 90° correspond au quart du parallèle : 20 015 ÷ 4 ≈ 5 004 km (calcul exact : π × 6 371 ÷ 4 ≈ 5 003,8 km).",
                "Résultats : HM = R ÷ 2 ≈ 3 186 km, un parallèle d'environ 20 015 km (moitié de l'équateur) et environ 5 004 km entre les deux villes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Repérez-vous sur la sphère terrestre.",
            statements: [
              { text: "Tous les parallèles ont la même longueur.", true: false, why: "Les parallèles rétrécissent quand on s'approche des pôles ; seul l'équateur est un grand cercle." },
              { text: "L'équateur est le seul parallèle qui soit un grand cercle.", true: true, why: "C'est le seul parallèle dont le plan passe par le centre de la Terre." },
              { text: "Une longitude peut valoir 120° Nord.", true: false, why: "La longitude se précise Est ou Ouest ; Nord et Sud servent à la latitude." },
              { text: "Deux points d'un même méridien ont la même longitude.", true: true, why: "La longitude repère justement le méridien sur lequel se trouve le point." },
              { text: "Le pôle Nord a pour latitude 90° N.", true: true, why: "C'est la plus grande latitude possible : l'angle avec le plan de l'équateur est droit." },
              { text: "Un point de latitude 0° est sur le méridien de Greenwich.", true: false, why: "Une latitude de 0° place le point sur l'équateur, pas sur un méridien particulier." },
              { text: "La latitude se mesure à partir du méridien de Greenwich.", true: false, why: "La latitude se mesure à partir de l'équateur ; c'est la longitude qui part de Greenwich." },
            ],
          },
          quiz: [
            { q: "Le cercle de référence pour mesurer la latitude est :", options: ["le méridien de Greenwich", "l'équateur", "le cercle polaire", "le tropique du Cancer"], answer: 1, why: "La latitude vaut 0° sur l'équateur et augmente jusqu'à 90° aux pôles." },
            { q: "Quelle écriture peut désigner des coordonnées géographiques ?", options: ["(120° N ; 30° E)", "(30° E ; 120° N)", "(30° N ; 120° E)", "(30° N ; 200° O)"], answer: 2, why: "On écrit d'abord la latitude (au plus 90°, N ou S), puis la longitude (au plus 180°, E ou O)." },
            { q: "Les points de même latitude sont situés sur :", options: ["un même parallèle", "un même méridien", "l'axe des pôles"], answer: 0, why: "Un parallèle est formé de tous les points qui ont une même latitude." },
            { q: "Deux points de l'équateur ont pour longitudes 20° O et 70° E. L'angle entre leurs méridiens mesure :", options: ["50°", "70°", "20°", "90°"], answer: 3, why: "Ils sont de part et d'autre de Greenwich : 20° + 70° = 90°." },
            { q: "Le méridien de Greenwich a pour longitude :", options: ["90°", "180°", "0°", "360°"], answer: 2, why: "C'est le méridien origine, à partir duquel on mesure toutes les longitudes." },
          ],
          trap: "Inverser latitude et longitude, ou soustraire deux longitudes situées de part et d'autre du méridien de Greenwich (20° O et 70° E sont séparés de 90°, et non de 50°).",
          method: "Faites un petit croquis : l'équateur à l'horizontale, le méridien de Greenwich à la verticale. La latitude dit de combien on monte ou on descend (N ou S), la longitude de combien on va vers la droite ou vers la gauche (E ou O), et on écrit toujours la latitude en premier.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'agrandissement-reduction',
          title: "Agrandissement et réduction : effet sur les longueurs, aires et volumes",
          minutes: 30,
          objectives: [
            "Reconnaître un agrandissement ou une réduction et déterminer son rapport k.",
            "Calculer les longueurs, aires et volumes d'une figure ou d'un solide agrandi ou réduit, en utilisant k, k² et k³.",
            "Résoudre un problème sur la section d'une pyramide ou d'un cône par un plan parallèle à la base.",
          ],
          course: [
            {
              heading: "Agrandir ou réduire",
              paragraphs: [
                "Agrandir ou réduire une figure (ou un solide) de rapport k, c'est multiplier toutes ses longueurs par un même nombre positif k. Si k > 1, c'est un agrandissement ; si 0 < k < 1, c'est une réduction. La forme ne change pas : les angles sont conservés, ainsi que le parallélisme et la perpendicularité.",
                "Vous en rencontrez souvent : un plan d'appartement, une carte, une maquette de bateau à l'échelle 1/50 (k = 1/50), une photo agrandie. Les homothéties de la leçon précédente produisent des agrandissements et des réductions, et deux triangles semblables sont l'un un agrandissement ou une réduction de l'autre.",
              ],
              box: { label: "Définition", text: "Dans un agrandissement ou une réduction de rapport k (k > 0), toutes les longueurs sont multipliées par k. Agrandissement si k > 1, réduction si 0 < k < 1." },
            },
            {
              heading: "Longueurs, aires, volumes : k, k², k³",
              paragraphs: [
                "Prenons un carré de 1 cm de côté agrandi de rapport 2 : son côté devient 2 cm et son aire passe de 1 cm² à 4 cm². Il faut 4 petits carrés pour remplir le grand. De même, un cube de 1 cm d'arête agrandi de rapport 2 devient un cube de 2 cm d'arête : il faut 8 petits cubes pour le remplir, son volume a été multiplié par 8.",
                "C'est une règle générale : dans un agrandissement ou une réduction de rapport k, les longueurs sont multipliées par k, les aires par k² et les volumes par k³. Avec k = 3, les aires sont multipliées par 9 et les volumes par 27. Avec k = 1/2, les aires sont divisées par 4 et les volumes par 8.",
                "On peut aussi remonter au rapport : si une aire est multipliée par 25, alors k² = 25 et k = 5 ; si un volume est multiplié par 8, alors k³ = 8 et k = 2.",
              ],
              box: { label: "Propriété", text: "Agrandissement ou réduction de rapport k : longueurs × k ; aires × k² ; volumes × k³. Les angles sont conservés." },
            },
            {
              heading: "Pyramides et cônes coupés parallèlement à la base",
              paragraphs: [
                "Quand on coupe une pyramide ou un cône par un plan parallèle à la base, le petit solide obtenu au sommet est une réduction du grand, de rapport k = SO' ÷ SO (distance du sommet au plan divisée par la hauteur totale). On peut donc calculer son volume sans formule supplémentaire : volume du petit = k³ × volume du grand.",
                "Exemple : un cône de hauteur 12 cm a un volume de 300 cm³. On le coupe à 4 cm du sommet : k = 4 ÷ 12 = 1/3. Le petit cône a pour volume 300 × (1/3)³ = 300 ÷ 27 ≈ 11,1 cm³. Le petit cône a une hauteur trois fois plus petite, mais un volume 27 fois plus petit.",
              ],
            },
          ],
          keyPoints: [
            "Rapport k : agrandissement si k > 1, réduction si 0 < k < 1.",
            "Longueurs multipliées par k, aires par k², volumes par k³.",
            "Les angles, le parallélisme et la forme sont conservés.",
            "Le petit cône ou la petite pyramide au sommet est une réduction de rapport SO' ÷ SO.",
            "Une maquette à l'échelle 1/n : longueurs ÷ n, aires ÷ n², volumes ÷ n³.",
          ],
          example: {
            statement: "Une pyramide a une base d'aire 81 cm² et un volume de 540 cm³. On la réduit de rapport 2/3. Calculer l'aire de la base et le volume de la pyramide réduite.",
            solution: [
              "Le rapport de réduction est k = 2/3.",
              "Les aires sont multipliées par k² = (2/3)² = 4/9 : aire de la base réduite = 81 × 4/9 = 36 cm².",
              "Les volumes sont multipliés par k³ = (2/3)³ = 8/27 : volume réduit = 540 × 8/27 = 20 × 8 = 160 cm³.",
              "Contrôle avec la formule V = (1/3) × aire de la base × hauteur : la hauteur de départ vaut 3 × 540 ÷ 81 = 20 cm ; réduite, elle vaut 20 × 2/3 = 40/3 cm, et (1/3) × 36 × 40/3 = 160 cm³.",
              "Réponse : une base de 36 cm² et un volume de 160 cm³.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un rectangle mesure 6 cm sur 4 cm. On l'agrandit de rapport 2,5. 1) Calculer les dimensions du rectangle agrandi. 2) Calculer le périmètre des deux rectangles : par combien le périmètre a-t-il été multiplié ? 3) Calculer l'aire des deux rectangles : par combien l'aire a-t-elle été multipliée ?",
              hint: "Un périmètre est une longueur ; une aire se multiplie par k².",
              solution: [
                "1) 6 × 2,5 = 15 cm et 4 × 2,5 = 10 cm : le rectangle agrandi mesure 15 cm sur 10 cm.",
                "2) Périmètres : 2 × (6 + 4) = 20 cm et 2 × (15 + 10) = 50 cm. 50 ÷ 20 = 2,5 : le périmètre est multiplié par k = 2,5.",
                "3) Aires : 6 × 4 = 24 cm² et 15 × 10 = 150 cm². 150 ÷ 24 = 6,25 = 2,5² : l'aire est multipliée par k².",
                "Résultats : 15 cm × 10 cm ; périmètre multiplié par 2,5 ; aire multipliée par 6,25.",
              ],
            },
            {
              level: 2,
              statement: "Une maquette d'un bâtiment est réalisée à l'échelle 1/200. 1) Sur la maquette, la hauteur du bâtiment est 9 cm. Quelle est sa hauteur réelle, en mètres ? 2) La surface au sol réelle du bâtiment est 1 200 m². Quelle est la surface au sol de la maquette, en cm² ? 3) Le volume réel du bâtiment est 21 600 m³. Quel est le volume de la maquette, en litres ?",
              hint: "k = 1/200 : les aires sont divisées par 200² = 40 000 et les volumes par 200³ = 8 000 000. Attention aux conversions : 1 m² = 10 000 cm² et 1 m³ = 1 000 L.",
              solution: [
                "1) Hauteur réelle : 9 × 200 = 1 800 cm = 18 m.",
                "2) Surface de la maquette : 1 200 ÷ 40 000 = 0,03 m², soit 0,03 × 10 000 = 300 cm².",
                "3) Volume de la maquette : 21 600 ÷ 8 000 000 = 0,0027 m³, soit 0,0027 × 1 000 = 2,7 L.",
                "Résultats : 18 m, 300 cm² et 2,7 L.",
              ],
            },
            {
              level: 3,
              statement: "Un verre a la forme d'un cône de révolution posé sur sa pointe, de hauteur 12 cm et de rayon 4 cm à l'ouverture. Rappel : volume d'un cône = (1/3) × π × r² × h. 1) Calculer le volume du verre, valeur exacte puis arrondi au dixième de cm³. 2) On verse du jus de fruit jusqu'à 6 cm de hauteur, mesurée depuis la pointe. Le liquide forme un cône qui est une réduction du verre. Quel est le rapport de réduction ? 3) Calculer le volume de jus, valeur exacte puis arrondi au dixième. 4) Léa affirme : « Le verre rempli à mi-hauteur est à moitié plein. » A-t-elle raison ? Justifier.",
              hint: "Le cône de liquide a une hauteur deux fois plus petite que le verre. Les volumes sont multipliés par k³.",
              solution: [
                "1) V = (1/3) × π × 4² × 12 = (1/3) × π × 16 × 12 = 64π cm³ ≈ 201,1 cm³.",
                "2) Le rapport de réduction est k = 6 ÷ 12 = 1/2.",
                "3) Volume de jus : 64π × (1/2)³ = 64π ÷ 8 = 8π cm³ ≈ 25,1 cm³.",
                "4) 8π ÷ 64π = 1/8 : le verre rempli à mi-hauteur ne contient que le huitième de sa contenance. Léa a tort.",
                "Résultats : 64π ≈ 201,1 cm³ ; k = 1/2 ; 8π ≈ 25,1 cm³ ; l'affirmation est fausse.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque rapport d'agrandissement ou de réduction à son effet sur les aires et les volumes.",
            pairs: [
              { left: "k = 2", right: "Aires × 4, volumes × 8" },
              { left: "k = 3", right: "Aires × 9, volumes × 27" },
              { left: "k = 1/2", right: "Aires ÷ 4, volumes ÷ 8" },
              { left: "k = 10", right: "Aires × 100, volumes × 1 000" },
              { left: "k = 0,1", right: "Aires × 0,01, volumes × 0,001" },
              { left: "k = 5", right: "Aires × 25, volumes × 125" },
            ],
          },
          quiz: [
            { q: "Une figure est agrandie de rapport 3. Son aire est multipliée par :", options: ["3", "6", "9", "27"], answer: 2, why: "Les aires sont multipliées par k² = 3² = 9." },
            { q: "Un solide est réduit de rapport 1/2. Son volume est :", options: ["divisé par 2", "divisé par 8", "divisé par 4", "divisé par 6"], answer: 1, why: "Les volumes sont multipliés par (1/2)³ = 1/8." },
            { q: "Un cube de volume 5 cm³ est agrandi ; son volume devient 40 cm³. Le rapport d'agrandissement est :", options: ["2", "8", "35", "4"], answer: 0, why: "Le volume est multiplié par 8 = 2³, donc k = 2." },
            { q: "Dans une réduction de rapport k, les angles :", options: ["sont multipliés par k", "sont divisés par k", "sont multipliés par k²", "sont conservés"], answer: 3, why: "Un agrandissement ou une réduction conserve la forme, donc les angles." },
            { q: "Une maquette est à l'échelle 1/100. Une surface de 2 cm² sur la maquette mesure en réalité :", options: ["200 cm²", "2 m²", "20 m²", "0,2 m²"], answer: 1, why: "Les aires sont multipliées par 100² = 10 000 : 20 000 cm², soit 2 m²." },
          ],
          trap: "Multiplier une aire ou un volume par k au lieu de k² ou k³ : réduire de moitié la hauteur d'un cône divise son volume par 8, et non par 2.",
          method: "Avant de calculer, repérez la grandeur demandée grâce à son unité (cm pour une longueur, cm² pour une aire, cm³ pour un volume) et écrivez à côté le facteur correspondant : k, k² ou k³.",
        },
      ],
    },
    /* ==================================================================== */
    {
      id: 'algorithmique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'variables-boucles-conditions',
          title: "Variables, boucles et instructions conditionnelles",
          minutes: 30,
          objectives: [
            "Écrire, mettre au point et exécuter un programme qui utilise des variables.",
            "Utiliser des boucles (répéter n fois, répéter jusqu'à) et des instructions conditionnelles (si... alors... sinon).",
            "Lire un programme Scratch et prévoir ce qu'il affiche ou ce qu'il dessine.",
          ],
          course: [
            {
              heading: "Les variables",
              paragraphs: [
                "Un programme est une suite d'instructions exécutées dans l'ordre par l'ordinateur. Au brevet, les programmes sont écrits avec Scratch, sous forme de blocs à emboîter. Dans cette leçon, les blocs placés à l'intérieur d'une boucle ou d'un test sont écrits entre crochets.",
                "Une variable est une case de la mémoire qui porte un nom et contient une valeur, comme une boîte avec une étiquette. Le bloc « mettre x à 5 » range la valeur 5 dans la boîte x (l'ancienne valeur est effacée). Le bloc « ajouter 2 à x » augmente de 2 la valeur de x : si x valait 5, il vaut maintenant 7.",
                "Le bloc « demander Choisissez un nombre et attendre » affiche une question ; ce que l'utilisateur tape est rangé dans la variable « réponse ». On peut ensuite écrire « mettre x à réponse » pour garder ce nombre.",
              ],
              box: { label: "Définition", text: "Une variable est un emplacement de la mémoire, repéré par un nom, qui contient une valeur pouvant changer pendant l'exécution du programme." },
            },
            {
              heading: "Les boucles : répéter des instructions",
              paragraphs: [
                "Une boucle répète un groupe d'instructions. « répéter 4 fois [ ... ] » exécute 4 fois ce qu'elle contient. « répéter jusqu'à <condition> [ ... ] » recommence tant que la condition est fausse et s'arrête dès qu'elle devient vraie (la condition est testée avant chaque passage). « répéter indéfiniment » ne s'arrête jamais, sauf si l'on arrête le programme.",
                "Exemple : le script « stylo en position d'écriture ; répéter 4 fois [ avancer de 50 pas ; tourner droite de 90 degrés ] » dessine un carré de côté 50 pas. Pour un polygone régulier à n côtés, le lutin doit tourner de 360 ÷ n degrés à chaque sommet : 120° pour un triangle équilatéral, 72° pour un pentagone, 60° pour un hexagone. C'est l'angle extérieur, et non l'angle intérieur de la figure.",
              ],
              box: { label: "Règle", text: "Pour tracer un polygone régulier à n côtés : répéter n fois [ avancer de la longueur du côté ; tourner de 360 ÷ n degrés ]." },
            },
            {
              heading: "Les instructions conditionnelles",
              paragraphs: [
                "Une instruction conditionnelle permet au programme de choisir. « si <condition> alors [ A ] sinon [ B ] » exécute les instructions A si la condition est vraie, et les instructions B sinon : un seul des deux groupes est exécuté. Sans « sinon », rien ne se passe quand la condition est fausse.",
                "Une condition est une affirmation vraie ou fausse : x > 10, réponse = 7, ou une combinaison avec « et », « ou », « non ». Le bloc « a modulo b » donne le reste de la division euclidienne de a par b : 17 modulo 5 = 2, car 17 = 3 × 5 + 2. Ainsi, « si nombre modulo 2 = 0 alors [ dire Pair ] sinon [ dire Impair ] » teste la parité d'un nombre.",
              ],
            },
            {
              heading: "Exécuter un programme à la main",
              paragraphs: [
                "Pour prévoir ce que fait un programme, on l'exécute à la main en remplissant un tableau de suivi : une colonne par variable, une ligne après chaque passage dans la boucle. C'est la méthode attendue au brevet quand on demande « Quel nombre le lutin dit-il ? ».",
                "Exemple : « mettre n à 1 ; mettre s à 0 ; répéter 4 fois [ ajouter n à s ; ajouter 2 à n ] ; dire s ». Après le 1er passage : s = 1, n = 3. Après le 2e : s = 4, n = 5. Après le 3e : s = 9, n = 7. Après le 4e : s = 16, n = 9. Le lutin dit 16 (la somme des quatre premiers nombres impairs).",
              ],
              box: { label: "À retenir", text: "Mettre au point un programme, c'est l'exécuter, comparer le résultat à ce qu'on attendait et corriger les erreurs une par une. Le tableau de suivi des variables aide à trouver où le programme se trompe." },
            },
          ],
          keyPoints: [
            "Une variable a un nom et une valeur qui peut changer : « mettre x à 5 », « ajouter 2 à x ».",
            "« répéter n fois » répète un nombre connu de fois ; « répéter jusqu'à » s'arrête quand la condition devient vraie.",
            "« si... alors... sinon » exécute un seul des deux groupes d'instructions.",
            "Polygone régulier à n côtés : tourner de 360 ÷ n degrés à chaque sommet.",
            "a modulo b est le reste de la division euclidienne de a par b.",
            "Pour lire un programme, remplir un tableau de suivi des variables.",
          ],
          example: {
            statement: "On exécute le script : « mettre compteur à 0 ; mettre n à 1 ; répéter 6 fois [ si n modulo 3 = 0 alors [ ajouter 1 à compteur ] ; ajouter 1 à n ] ; dire compteur ». Que dit le lutin ? Que vaut n à la fin ?",
            solution: [
              "À chaque passage, on teste si n est un multiple de 3 (reste nul dans la division par 3), puis on augmente n de 1.",
              "Passages 1 et 2 : n vaut 1 puis 2, ce ne sont pas des multiples de 3 ; compteur reste à 0.",
              "Passage 3 : n = 3, 3 modulo 3 = 0, donc compteur passe à 1.",
              "Passages 4 et 5 : n vaut 4 puis 5 ; compteur reste à 1.",
              "Passage 6 : n = 6, 6 modulo 3 = 0, donc compteur passe à 2 ; puis n devient 7.",
              "Réponse : le lutin dit 2 (le nombre de multiples de 3 entre 1 et 6), et n vaut 7 à la fin.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On exécute le script : « mettre a à 3 ; mettre b à 5 ; mettre a à a + b ; mettre b à a × 2 ; dire a ; dire b ». Quelles valeurs le lutin dit-il ?",
              hint: "Les instructions s'exécutent dans l'ordre : quand on calcule b, a a déjà changé.",
              solution: [
                "Après « mettre a à 3 » et « mettre b à 5 » : a = 3 et b = 5.",
                "« mettre a à a + b » : a = 3 + 5 = 8.",
                "« mettre b à a × 2 » : a vaut maintenant 8, donc b = 8 × 2 = 16.",
                "Réponse : le lutin dit 8, puis 16.",
              ],
            },
            {
              level: 2,
              statement: "1) Écrire un script qui dessine un triangle équilatéral de côté 80 pas. 2) Un élève a écrit « répéter 3 fois [ avancer de 80 pas ; tourner droite de 60 degrés ] ». Qu'obtient-il ? Expliquer son erreur. 3) Écrire un script qui dessine un octogone régulier de côté 40 pas.",
              hint: "Au total, le lutin fait un tour complet (360°) en revenant à son point de départ.",
              solution: [
                "1) « stylo en position d'écriture ; répéter 3 fois [ avancer de 80 pas ; tourner droite de 120 degrés ] », car 360 ÷ 3 = 120.",
                "2) En tournant de 60° trois fois, le lutin ne fait que 180° au total : il trace trois côtés d'un hexagone régulier, la figure ne se referme pas. L'élève a utilisé l'angle intérieur du triangle (60°) au lieu de l'angle dont le lutin doit tourner (120°).",
                "3) 360 ÷ 8 = 45 : « stylo en position d'écriture ; répéter 8 fois [ avancer de 40 pas ; tourner droite de 45 degrés ] ».",
                "Résultats : tourner de 120° pour le triangle, de 45° pour l'octogone ; l'erreur vient de la confusion entre angle intérieur et angle de rotation du lutin.",
              ],
            },
            {
              level: 3,
              statement: "On considère le script suivant : « demander Choisissez un nombre entier et attendre ; mettre N à réponse ; mettre étapes à 0 ; répéter jusqu'à N = 1 [ si N modulo 2 = 0 alors [ mettre N à N ÷ 2 ] sinon [ mettre N à 3 × N + 1 ] ; ajouter 1 à étapes ] ; dire étapes ». 1) On choisit 6. Écrire les valeurs successives de N et donner le nombre dit par le lutin. 2) Que dit le lutin si l'on choisit 1 ? 3) Que dit-il si l'on choisit 5 ? 4) Quel est le rôle de la variable étapes ?",
              hint: "Si N est pair, on le divise par 2 ; s'il est impair, on le multiplie par 3 et on ajoute 1. La condition « N = 1 » est testée avant chaque passage.",
              solution: [
                "1) N prend les valeurs 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1. On compte les passages : 8. Le lutin dit 8.",
                "2) N vaut 1 dès le départ : la condition de « répéter jusqu'à » est vraie avant le premier passage, la boucle n'est pas exécutée et étapes reste à 0. Le lutin dit 0.",
                "3) N prend les valeurs 5 → 16 → 8 → 4 → 2 → 1, soit 5 passages. Le lutin dit 5.",
                "4) La variable étapes compte le nombre de passages dans la boucle, c'est-à-dire le nombre de transformations nécessaires pour arriver à 1.",
                "Résultats : 8 ; 0 ; 5 ; étapes est un compteur.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez votre lecture des programmes Scratch.",
            statements: [
              { text: "« répéter 4 fois » exécute 4 fois les blocs qu'il contient.", true: true, why: "C'est une boucle dont le nombre de passages est fixé à l'avance." },
              { text: "Pour tracer un triangle équilatéral, le lutin doit tourner de 60° à chaque sommet.", true: false, why: "Il doit tourner de 360 ÷ 3 = 120° ; 60° est l'angle intérieur du triangle." },
              { text: "Une variable peut changer de valeur pendant l'exécution.", true: true, why: "C'est le principe même d'une variable : « mettre » et « ajouter » modifient sa valeur." },
              { text: "Dans « si... alors... sinon », les deux groupes de blocs sont exécutés.", true: false, why: "Un seul des deux est exécuté, selon que la condition est vraie ou fausse." },
              { text: "« mettre x à x + 1 » augmente la valeur de x de 1.", true: true, why: "On calcule x + 1 avec l'ancienne valeur, puis on range le résultat dans x." },
              { text: "« répéter jusqu'à x > 10 [ ajouter 1 à x ] » s'arrête dès que x vaut 10.", true: false, why: "10 > 10 est faux : la boucle continue et s'arrête quand x vaut 11." },
              { text: "17 modulo 5 vaut 2.", true: true, why: "17 = 3 × 5 + 2 : le reste de la division euclidienne est 2." },
            ],
          },
          quiz: [
            { q: "Après « mettre x à 4 » puis « ajouter 3 à x », la variable x vaut :", options: ["3", "7", "12", "43"], answer: 1, why: "« ajouter 3 à x » augmente la valeur de x de 3 : 4 + 3 = 7." },
            { q: "Pour tracer un pentagone régulier, à chaque sommet le lutin doit tourner de :", options: ["72°", "108°", "60°", "90°"], answer: 0, why: "360 ÷ 5 = 72 ; 108° est l'angle intérieur du pentagone." },
            { q: "Que vaut 23 modulo 4 ?", options: ["5", "5,75", "3", "4"], answer: 2, why: "23 = 5 × 4 + 3 : le reste de la division euclidienne de 23 par 4 est 3." },
            { q: "Combien de fois « dire Bonjour » s'exécute-t-il dans « répéter 3 fois [ répéter 2 fois [ dire Bonjour ] ] » ?", options: ["5", "3", "2", "6"], answer: 3, why: "La boucle intérieure (2 fois) est elle-même répétée 3 fois : 3 × 2 = 6." },
            { q: "Dans « si a > 10 alors [ dire Oui ] sinon [ dire Non ] », avec a = 10, le lutin dit :", options: ["Non", "Oui", "Oui puis Non"], answer: 0, why: "10 > 10 est faux, donc c'est le groupe « sinon » qui est exécuté." },
          ],
          trap: "Faire tourner le lutin de l'angle intérieur du polygone (60° pour un triangle équilatéral) au lieu de 360 ÷ n degrés, ou confondre « mettre x à 2 » (x prend la valeur 2) et « ajouter 2 à x » (x augmente de 2).",
          method: "Pour lire un programme, faites un tableau de suivi : une colonne par variable, une ligne par passage dans la boucle, et ne remplissez une case qu'après avoir lu l'instruction correspondante. Vérifiez ensuite le résultat sur un cas simple que vous savez calculer de tête.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sous-programmes',
          title: "Décomposer un problème en sous-programmes",
          minutes: 25,
          objectives: [
            "Décomposer un problème en sous-problèmes plus simples.",
            "Créer et utiliser un bloc personnalisé (sous-programme), avec ou sans paramètre.",
            "Écrire un programme dans lequel des actions sont déclenchées par des événements ou des messages.",
          ],
          course: [
            {
              heading: "Pourquoi décomposer un problème ?",
              paragraphs: [
                "Un programme important est difficile à écrire d'un seul bloc. On le découpe en petites tâches, plus simples, que l'on programme une par une. C'est comme une recette de gâteau : préparer la pâte, la faire cuire, préparer le glaçage, décorer. Chaque étape peut être expliquée séparément, et certaines servent dans plusieurs recettes.",
                "Un sous-programme est une suite d'instructions à laquelle on donne un nom et que l'on peut appeler autant de fois qu'on le souhaite. Il présente trois avantages : le programme principal devient plus court et plus lisible, on n'écrit qu'une fois une tâche qui revient souvent, et on peut tester chaque partie séparément, ce qui facilite la mise au point.",
              ],
            },
            {
              heading: "Créer un bloc dans Scratch",
              paragraphs: [
                "Dans Scratch, les sous-programmes se créent dans la catégorie « Mes blocs », avec le bouton « Créer un bloc ». On choisit un nom, par exemple carré. Un chapeau « définir carré » apparaît : on place dessous les instructions de la tâche, ici « répéter 4 fois [ avancer de 50 pas ; tourner droite de 90 degrés ] ».",
                "Le nouveau bloc « carré » s'utilise ensuite comme n'importe quel autre bloc. Par exemple, « répéter 5 fois [ carré ; avancer de 60 pas ] » dessine une frise de cinq carrés. Si l'on veut modifier tous les carrés, on ne change que la définition.",
              ],
              box: { label: "Définition", text: "Un sous-programme (bloc personnalisé dans Scratch) est une suite d'instructions nommée, définie une fois et appelée autant de fois que nécessaire dans le programme principal." },
            },
            {
              heading: "Ajouter un paramètre",
              paragraphs: [
                "Un bloc devient beaucoup plus utile avec un paramètre, une valeur que l'on fournit au moment de l'appel. Lors de la création, on ajoute une entrée nommée côté : le bloc devient « carré (côté) ». Sa définition utilise ce paramètre : « définir carré (côté) : répéter 4 fois [ avancer de côté pas ; tourner droite de 90 degrés ] ».",
                "L'appel « carré (30) » dessine un carré de 30 pas, l'appel « carré (80) » un carré de 80 pas. Un bloc peut avoir plusieurs paramètres : « polygone (n) (longueur) », défini par « répéter n fois [ avancer de longueur pas ; tourner droite de 360 / n degrés ] », trace n'importe quel polygone régulier.",
              ],
              box: { label: "À retenir", text: "Dans la définition, on écrit le nom du paramètre (côté), jamais une valeur fixe. La valeur est donnée à l'appel : carré (30), carré (80)." },
            },
            {
              heading: "Événements, messages et scripts en parallèle",
              paragraphs: [
                "Un script Scratch commence par un événement : « quand le drapeau vert est cliqué », « quand la touche espace est pressée », « quand ce lutin est cliqué ». Plusieurs scripts peuvent démarrer au même moment et s'exécuter en parallèle, par exemple un lutin qui se déplace pendant qu'un autre compte le temps.",
                "Les lutins communiquent par des messages. Le bloc « envoyer à tous départ » diffuse le message départ ; tous les scripts qui commencent par « quand je reçois départ » se mettent alors en marche. C'est une autre façon de découper un problème : chaque lutin s'occupe de sa tâche et réagit aux messages des autres.",
              ],
            },
          ],
          keyPoints: [
            "Décomposer un problème, c'est le découper en sous-tâches plus simples, programmées et testées une par une.",
            "Dans Scratch, un sous-programme se crée dans « Mes blocs » avec « Créer un bloc » et se décrit sous « définir ».",
            "Un paramètre est une valeur fournie à l'appel : carré (30) trace un carré de côté 30 pas.",
            "Un script démarre sur un événement ; « envoyer à tous » déclenche les scripts « quand je reçois ».",
            "Un sous-programme rend le programme plus court, plus lisible et plus facile à corriger.",
          ],
          example: {
            statement: "Le bloc « carré (côté) » est défini par « répéter 4 fois [ avancer de côté pas ; tourner droite de 90 degrés ] ». On exécute : « stylo en position d'écriture ; mettre c à 20 ; répéter 3 fois [ carré (c) ; ajouter 20 à c ] ». Décrire la figure obtenue et calculer la longueur totale tracée.",
            solution: [
              "Le bloc carré ramène le lutin à son point de départ, dans la même direction : les carrés ont donc tous un sommet commun.",
              "1er passage : c = 20, le lutin trace un carré de côté 20 pas, puis c devient 40.",
              "2e passage : carré de côté 40 pas, puis c devient 60.",
              "3e passage : carré de côté 60 pas, puis c devient 80.",
              "Longueur tracée : 4 × 20 + 4 × 40 + 4 × 60 = 80 + 160 + 240 = 480 pas.",
              "Réponse : trois carrés emboîtés de côtés 20, 40 et 60 pas, avec un sommet commun, pour 480 pas tracés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le bloc « carré (côté) » est défini par « répéter 4 fois [ avancer de côté pas ; tourner droite de 90 degrés ] ». 1) Que dessine l'appel carré (50) ? 2) On exécute : « répéter 3 fois [ stylo en position d'écriture ; carré (40) ; relever le stylo ; avancer de 50 pas ] ». Combien de carrés obtient-on, de quel côté, et quel écart sépare deux carrés voisins ? 3) Quelle longueur totale le stylo a-t-il tracée ?",
              hint: "Après carré (40), le lutin est revenu à son point de départ. Le stylo est relevé pendant le déplacement de 50 pas.",
              solution: [
                "1) Un carré de côté 50 pas.",
                "2) Trois carrés de côté 40 pas. Chaque carré commence 50 pas plus loin que le précédent ; comme un carré occupe 40 pas, il reste un écart de 50 - 40 = 10 pas entre deux carrés voisins.",
                "3) Le stylo ne trace que les carrés : 3 × (4 × 40) = 3 × 160 = 480 pas.",
                "Résultats : un carré de 50 pas ; trois carrés de 40 pas espacés de 10 pas ; 480 pas tracés.",
              ],
            },
            {
              level: 2,
              statement: "On veut dessiner une maison : un carré surmonté d'un toit en triangle équilatéral, de même côté. On dispose des blocs « carré (c) », défini par « répéter 4 fois [ avancer de c pas ; tourner gauche de 90 degrés ] », et « triangle (c) », défini par « répéter 3 fois [ avancer de c pas ; tourner gauche de 120 degrés ] ». Tous deux partent du coin en bas à gauche de leur figure, le lutin orienté vers la droite, et y reviennent dans la même orientation. 1) Écrire la définition d'un bloc « maison (c) » qui dessine la maison à partir du coin en bas à gauche, le lutin orienté vers la droite. 2) Écrire un programme qui dessine deux maisons de côtés 50 et 80.",
              hint: "Le toit commence au coin en haut à gauche du carré, c'est-à-dire c pas plus haut. Le bloc « ajouter () à y » déplace le lutin verticalement.",
              solution: [
                "1) « définir maison (c) : stylo en position d'écriture ; carré (c) ; relever le stylo ; ajouter c à y ; stylo en position d'écriture ; triangle (c) ; relever le stylo ; ajouter -c à y ».",
                "Explication : carré (c) trace les murs et ramène le lutin en bas à gauche ; on monte de c pas pour atteindre le coin en haut à gauche ; triangle (c) trace le toit au-dessus du côté supérieur ; on redescend enfin de c pas pour revenir au point de départ.",
                "2) « quand le drapeau vert est cliqué ; effacer tout ; s'orienter à 90 ; aller à x: -150 y: 0 ; maison (50) ; aller à x: 0 y: 0 ; maison (80) ».",
                "Les deux maisons ne se chevauchent pas : la première occupe les abscisses de -150 à -100, la seconde de 0 à 80.",
              ],
            },
            {
              level: 3,
              statement: "Le bloc « polygone (n) (longueur) » est défini par « répéter n fois [ avancer de longueur pas ; tourner droite de 360 / n degrés ] ». 1) Que dessinent polygone (4) (50) et polygone (6) (30) ? Donner le périmètre de chaque figure. 2) On exécute « stylo en position d'écriture ; mettre n à 3 ; répéter 4 fois [ polygone (n) (40) ; ajouter 1 à n ] ». Quelles figures obtient-on ? Quelle longueur totale est tracée ? 3) Que dessine polygone (360) (1) ? Expliquer.",
              hint: "Le bloc ramène le lutin à son point de départ dans la même direction, car il tourne en tout de 360°.",
              solution: [
                "1) polygone (4) (50) : un carré de côté 50 pas, de périmètre 200 pas. polygone (6) (30) : un hexagone régulier de côté 30 pas, de périmètre 180 pas.",
                "2) n vaut successivement 3, 4, 5 et 6 : on obtient un triangle équilatéral, un carré, un pentagone régulier et un hexagone régulier, tous de côté 40 pas et ayant un sommet commun.",
                "Longueur tracée : 40 × (3 + 4 + 5 + 6) = 40 × 18 = 720 pas.",
                "3) Le lutin trace 360 côtés de 1 pas en tournant de 1° à chaque fois : c'est un polygone régulier à 360 côtés, si petits qu'il ressemble à un cercle de périmètre 360 pas (de rayon environ 360 ÷ (2π) ≈ 57 pas).",
                "Résultats : 200 pas et 180 pas ; quatre polygones et 720 pas ; une figure qui ressemble à un cercle.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour créer et utiliser un bloc personnalisé dans Scratch.",
            items: [
              "Repérer une tâche qui se répète ou qui forme un tout, par exemple tracer un carré.",
              "Dans la catégorie « Mes blocs », cliquer sur « Créer un bloc ».",
              "Nommer le bloc et ajouter, si besoin, un paramètre comme côté.",
              "Sous le chapeau « définir », placer les instructions en utilisant le paramètre.",
              "Appeler le bloc dans le script principal avec une valeur, par exemple carré (50).",
              "Exécuter le programme et vérifier le dessin obtenu.",
            ],
          },
          quiz: [
            { q: "Dans Scratch, un sous-programme se crée dans la catégorie :", options: ["Contrôle", "Mes blocs", "Variables", "Événements"], answer: 1, why: "Le bouton « Créer un bloc » se trouve dans la catégorie « Mes blocs »." },
            { q: "Le bloc « carré (côté) » est appelé avec carré (25). Pendant cette exécution, le paramètre côté vaut :", options: ["25", "4", "90", "100"], answer: 0, why: "Le paramètre prend la valeur donnée à l'appel." },
            { q: "Quel est l'intérêt principal d'un sous-programme ?", options: ["Supprimer toutes les variables", "Réutiliser une tâche sans la réécrire", "Remplacer toutes les boucles par des tests", "Accélérer l'ordinateur"], answer: 1, why: "On définit la tâche une fois et on l'appelle autant de fois que nécessaire, ce qui rend le programme plus lisible." },
            { q: "Le bloc « envoyer à tous départ » déclenche :", options: ["l'arrêt de tous les scripts", "le clic sur le drapeau vert", "la création d'un nouveau lutin", "les scripts « quand je reçois départ »"], answer: 3, why: "Un message diffusé met en marche tous les scripts qui l'attendent." },
            { q: "polygone (n) (longueur) répète n fois « avancer de longueur ; tourner de 360 / n degrés ». Que trace polygone (3) (60) ?", options: ["un triangle équilatéral de côté 60", "un triangle équilatéral de côté 20", "un carré de côté 60 pas", "un hexagone régulier de côté 60"], answer: 0, why: "n = 3 côtés de 60 pas, en tournant de 120° : un triangle équilatéral de côté 60." },
          ],
          trap: "Écrire une valeur fixe (par exemple 50) dans la définition à la place du nom du paramètre, si bien que le bloc trace toujours la même figure, ou définir le bloc sans jamais l'appeler dans le script principal.",
          method: "Avant de programmer, écrivez en français la liste des sous-tâches, donnez à chaque bloc un nom qui dit ce qu'il fait, puis testez chaque bloc seul avant de l'assembler aux autres.",
        },
      ],
    },
    /* ==================================================================== */
    {
      id: 'preparer-brevet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'automatismes',
          title: "Les automatismes sans calculatrice",
          minutes: 25,
          objectives: [
            "Effectuer sans calculatrice des calculs sur les nombres relatifs, les fractions, les puissances et en notation scientifique.",
            "Appliquer rapidement un pourcentage, une situation de proportionnalité ou une conversion d'unités.",
            "Résoudre mentalement une équation simple et calculer une image ou une probabilité élémentaire.",
            "Contrôler un résultat à l'aide d'un ordre de grandeur.",
          ],
          course: [
            {
              heading: "Qu'appelle-t-on automatismes ?",
              paragraphs: [
                "Les automatismes sont les connaissances et les procédures que vous devez mobiliser vite et sans hésiter : calculer 25 % d'un prix, ajouter deux fractions, résoudre 3x + 4 = 19, convertir 1,5 h en minutes. Ils ne demandent pas de longue rédaction, mais une réponse juste et rapide.",
                "Au brevet, l'épreuve de mathématiques comporte une partie consacrée aux automatismes, à traiter sans calculatrice, sous forme de questions courtes. Le barème et le format précis de chaque session sont donnés par les sujets officiels : entraînez-vous sur les sujets publiés pour l'année de votre examen. Ces réflexes servent aussi dans tous les autres exercices.",
              ],
            },
            {
              heading: "Calcul numérique : les incontournables",
              paragraphs: [
                "Priorités : on calcule d'abord les parenthèses, puis les puissances, puis les multiplications et divisions, enfin les additions et soustractions. Exemple : 7 × 8 - 6 ÷ 2 = 56 - 3 = 53. Règle des signes : le produit de deux nombres de même signe est positif, de signes contraires est négatif : (-4) × (-5) = 20.",
                "Fractions : pour ajouter, on met au même dénominateur (2/3 + 1/6 = 4/6 + 1/6 = 5/6) ; pour multiplier, on multiplie les numérateurs entre eux et les dénominateurs entre eux en simplifiant (3/4 × 8/9 = 24/36 = 2/3) ; diviser par une fraction, c'est multiplier par son inverse. Prendre une fraction d'une quantité, c'est multiplier : 3/4 de 60 = 60 ÷ 4 × 3 = 45.",
                "Puissances : (-2)³ = -8 mais (-2)² = 4 ; 10³ × 10⁻¹ = 10². Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10, par exemple 0,000 52 = 5,2 × 10⁻⁴ et 12 × 10³ = 1,2 × 10⁴.",
              ],
              box: { label: "Repère", text: "1/2 = 0,5 = 50 % ; 1/4 = 0,25 = 25 % ; 3/4 = 0,75 = 75 % ; 1/5 = 0,2 = 20 % ; 1/10 = 0,1 = 10 % ; 1/8 = 0,125 = 12,5 %." },
            },
            {
              heading: "Pourcentages, proportionnalité, conversions",
              paragraphs: [
                "Calculer 10 %, c'est diviser par 10 ; 5 %, c'est la moitié de 10 % ; 25 %, c'est le quart. Ainsi, 15 % de 80 = 8 + 4 = 12. Augmenter de t %, c'est multiplier par (1 + t/100) : augmenter de 20 %, c'est multiplier par 1,2. Diminuer de 30 %, c'est multiplier par 0,7. Attention : une hausse de 20 % suivie d'une baisse de 20 % donne × 1,2 × 0,8 = × 0,96, soit une baisse de 4 %.",
                "Proportionnalité : si 3 cahiers coûtent 4,50 €, un cahier coûte 1,50 € et 7 cahiers coûtent 10,50 €. Vitesse : d = v × t ; 90 km en 1 h 30 min, c'est 60 km/h. Durées : 1,5 h = 1 h 30 min (0,5 h = 30 min, 0,25 h = 15 min). Unités : 1 m² = 10 000 cm², 1 m³ = 1 000 L.",
              ],
              box: { label: "Règle", text: "Augmenter de t % : multiplier par 1 + t/100. Diminuer de t % : multiplier par 1 - t/100." },
            },
            {
              heading: "Algèbre, fonctions, données : les réflexes",
              paragraphs: [
                "Équation : pour résoudre 5x - 7 = 18, on ajoute 7 (5x = 25), puis on divise par 5 (x = 5). On vérifie en remplaçant : 5 × 5 - 7 = 18. Développement : (x + 3)² = x² + 6x + 9, et non x² + 9. Image : si f(x) = 2x - 3, alors f(4) = 2 × 4 - 3 = 5.",
                "Données : la médiane d'une série rangée de 5 valeurs est la 3e ; la probabilité d'obtenir un nombre pair avec un dé équilibré à 6 faces est 3/6 = 1/2. Ordre de grandeur : 49 × 21 ≈ 50 × 20 = 1 000, ce qui permet de rejeter tout de suite une réponse comme 10 290 ou 102,9 (le résultat exact est 1 029).",
              ],
            },
          ],
          keyPoints: [
            "Priorités : parenthèses, puissances, multiplications et divisions, puis additions et soustractions.",
            "Additionner des fractions : même dénominateur d'abord ; prendre une fraction d'une quantité : multiplier.",
            "10 % = diviser par 10 ; +t % = × (1 + t/100) ; -t % = × (1 - t/100).",
            "Une hausse puis une baisse de même pourcentage ne se compensent pas.",
            "Toujours vérifier une solution d'équation en la remplaçant, et un calcul par un ordre de grandeur.",
            "S'entraîner un peu chaque jour vaut mieux qu'une longue séance la veille.",
          ],
          example: {
            statement: "Sans calculatrice : a) Calculer 15 % de 80. b) Calculer 2/5 + 3/10. c) Résoudre 5x - 7 = 18. d) Un article coûte 40 € et baisse de 25 %. Quel est son nouveau prix ?",
            solution: [
              "a) 10 % de 80 = 8 et 5 % de 80 = 4, donc 15 % de 80 = 8 + 4 = 12.",
              "b) 2/5 = 4/10, donc 2/5 + 3/10 = 4/10 + 3/10 = 7/10.",
              "c) 5x - 7 = 18 donne 5x = 25, puis x = 5. Vérification : 5 × 5 - 7 = 25 - 7 = 18.",
              "d) 25 % de 40 €, c'est le quart de 40 €, soit 10 €. Nouveau prix : 40 - 10 = 30 € (ou 40 × 0,75 = 30).",
              "Réponses : 12 ; 7/10 ; x = 5 ; 30 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sans calculatrice, calculer : a) 7 × 8 - 6 ÷ 2 ; b) (-4) × (-5) + (-3) ; c) les 3/4 de 60 ; d) 10³ × 10⁻¹ ; e) écrire 0,000 52 en notation scientifique.",
              hint: "Respectez les priorités, et pour la notation scientifique, cherchez un nombre compris entre 1 et 10.",
              solution: [
                "a) La multiplication et la division d'abord : 56 - 3 = 53.",
                "b) (-4) × (-5) = 20 (même signe), puis 20 + (-3) = 17.",
                "c) 60 ÷ 4 = 15, puis 15 × 3 = 45.",
                "d) 10³ × 10⁻¹ = 10³⁻¹ = 10² = 100.",
                "e) 0,000 52 = 5,2 × 10⁻⁴ (on déplace la virgule de 4 rangs vers la droite).",
                "Résultats : 53 ; 17 ; 45 ; 100 ; 5,2 × 10⁻⁴.",
              ],
            },
            {
              level: 2,
              statement: "Sans calculatrice : a) Un prix de 50 € augmente de 20 %. Quel est le nouveau prix ? b) 3 cahiers coûtent 4,50 €. Combien coûtent 7 cahiers ? c) Convertir 2,5 h en heures et minutes. d) Un cycliste parcourt 90 km en 1 h 30 min. Quelle est sa vitesse moyenne en km/h ? e) Convertir 1,2 m² en cm².",
              hint: "Pour la vitesse, transformez d'abord 1 h 30 min en heures décimales.",
              solution: [
                "a) 50 × 1,2 = 60 € (ou 10 % de 50 = 5, donc 20 % = 10, et 50 + 10 = 60).",
                "b) Un cahier coûte 4,50 ÷ 3 = 1,50 €, donc 7 cahiers coûtent 7 × 1,50 = 10,50 €.",
                "c) 0,5 h = 30 min, donc 2,5 h = 2 h 30 min.",
                "d) 1 h 30 min = 1,5 h, donc v = 90 ÷ 1,5 = 60 km/h.",
                "e) 1 m² = 10 000 cm², donc 1,2 m² = 12 000 cm².",
                "Résultats : 60 € ; 10,50 € ; 2 h 30 min ; 60 km/h ; 12 000 cm².",
              ],
            },
            {
              level: 3,
              statement: "Questions de type brevet, sans calculatrice. Pour chaque question, une seule réponse est exacte ; choisir la bonne en justifiant. 1) La forme développée de (x + 3)² est : A. x² + 9 ; B. x² + 6x + 9 ; C. x² + 3x + 9. 2) Si f(x) = x² - 2x, l'image de -3 par f est : A. 3 ; B. -15 ; C. 15. 3) On lance un dé équilibré à 6 faces. La probabilité d'obtenir un nombre pair est : A. 1/2 ; B. 1/3 ; C. 1/6. 4) La médiane de la série 3 ; 7 ; 8 ; 12 ; 15 est : A. 9 ; B. 8 ; C. 7. 5) La solution de l'équation 2x + 9 = 3 est : A. x = 6 ; B. x = 3 ; C. x = -3.",
              hint: "Pour f(-3), mettez -3 entre parenthèses : (-3)² - 2 × (-3).",
              solution: [
                "1) (x + 3)² = x² + 2 × x × 3 + 3² = x² + 6x + 9 : réponse B.",
                "2) f(-3) = (-3)² - 2 × (-3) = 9 + 6 = 15 : réponse C.",
                "3) Les issues paires sont 2, 4 et 6, soit 3 issues sur 6 : 3/6 = 1/2, réponse A.",
                "4) La série est rangée et compte 5 valeurs : la médiane est la 3e valeur, 8. Réponse B.",
                "5) 2x + 9 = 3 donne 2x = -6, puis x = -3. Vérification : 2 × (-3) + 9 = 3. Réponse C.",
                "Réponses : B ; C ; A ; B ; C.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque écriture à son équivalent.",
            pairs: [
              { left: "1/4", right: "0,25, soit 25 %" },
              { left: "3/4", right: "0,75, soit 75 %" },
              { left: "1/5", right: "0,2, soit 20 %" },
              { left: "1/8", right: "0,125, soit 12,5 %" },
              { left: "Augmenter de 15 %", right: "Multiplier par 1,15" },
              { left: "Diminuer de 40 %", right: "Multiplier par 0,6" },
            ],
          },
          quiz: [
            { q: "Combien vaut 30 % de 70 ?", options: ["21", "2,1", "210", "40"], answer: 0, why: "10 % de 70 = 7, donc 30 % de 70 = 3 × 7 = 21." },
            { q: "Combien vaut 2/3 + 1/4 ?", options: ["3/7", "3/12", "11/12", "2/12"], answer: 2, why: "Au même dénominateur : 8/12 + 3/12 = 11/12." },
            { q: "Combien vaut (-2)⁴ ?", options: ["16", "-16", "-8", "8"], answer: 0, why: "(-2) × (-2) × (-2) × (-2) : quatre facteurs négatifs, le produit est positif et vaut 16." },
            { q: "Un prix diminue de 20 %, puis augmente de 20 %. Par rapport au prix de départ, il a :", options: ["baissé de 4 %", "augmenté de 4 %", "retrouvé sa valeur", "baissé de 2 %"], answer: 0, why: "On multiplie par 0,8 puis par 1,2, soit par 0,96 : c'est une baisse de 4 %." },
            { q: "Quelle est la solution de l'équation 4x - 3 = 2x + 9 ?", options: ["x = 3", "x = 2", "x = 6", "x = 12"], answer: 2, why: "4x - 2x = 9 + 3, donc 2x = 12 et x = 6. Vérification : 21 = 21." },
          ],
          trap: "Ajouter les numérateurs et les dénominateurs entre eux (1/2 + 1/3 n'est pas égal à 2/5, mais à 5/6), ou croire qu'une hausse de 20 % suivie d'une baisse de 20 % ramène au prix de départ.",
          method: "Entraînez-vous dix minutes par jour, chronomètre en main, sur une série de questions courtes. Notez chaque erreur dans un carnet avec la règle correcte, et refaites le même type de question quelques jours plus tard.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'resoudre-probleme',
          title: "Résoudre un problème et rédiger sa démarche",
          minutes: 30,
          objectives: [
            "Extraire les informations utiles d'un énoncé, d'un schéma ou d'un document.",
            "Choisir et mettre en œuvre l'outil mathématique adapté pour résoudre un problème.",
            "Rédiger une démarche claire et justifiée, en citant les propriétés utilisées.",
            "Contrôler la vraisemblance d'un résultat et conclure par une phrase.",
          ],
          course: [
            {
              heading: "Les quatre temps de la résolution",
              paragraphs: [
                "Résoudre un problème ressemble à une enquête : on rassemble les indices, on formule une piste, on la prouve, puis on conclut. Premier temps, comprendre : lisez tout l'énoncé, repérez la question posée et soulignez les données utiles (longueurs, angles, prix, durées). Deuxième temps, chercher : faites un schéma codé (angles droits, longueurs égales, droites parallèles) et demandez-vous quel outil relie les données à la question.",
                "Troisième temps, rédiger : écrivez les calculs avec les propriétés qui les justifient. Quatrième temps, contrôler : le résultat est-il vraisemblable (une personne ne mesure pas 17,5 m), l'unité est-elle juste, la question est-elle vraiment résolue ? Terminez toujours par une phrase de conclusion qui répond à la question avec ses propres mots.",
              ],
            },
            {
              heading: "Reconnaître l'outil à utiliser",
              paragraphs: [
                "Certains indices de l'énoncé orientent vers un outil précis. Un triangle rectangle dont on connaît deux côtés : théorème de Pythagore. Un triangle rectangle avec un angle aigu et un côté : trigonométrie (cosinus, sinus, tangente). Deux droites parallèles coupées par deux sécantes : théorème de Thalès. Pour prouver qu'un triangle est rectangle : réciproque du théorème de Pythagore. Pour prouver que deux droites sont parallèles : réciproque du théorème de Thalès.",
                "Hors géométrie, d'autres indices aident : des quantités qui varient ensemble (proportionnalité, fonction linéaire), un prix fixe plus un prix par unité (fonction affine), une inconnue à trouver (mise en équation), un tirage au hasard (probabilités), une liste de valeurs (moyenne, médiane, étendue).",
              ],
              box: { label: "Repère", text: "Triangle rectangle + 2 côtés → Pythagore. Triangle rectangle + 1 angle + 1 côté → trigonométrie. Parallèles et sécantes → Thalès. Prouver un angle droit → réciproque de Pythagore. Prouver un parallélisme → réciproque de Thalès." },
            },
            {
              heading: "Rédiger une démarche",
              paragraphs: [
                "Une rédaction claire suit le schéma « On sait que... Or... Donc... » : on rappelle les données, on cite la propriété, on en tire la conclusion. Exemple : « On sait que le triangle ABC est rectangle en A. Or, d'après le théorème de Pythagore, BC² = AB² + AC². Donc BC² = 36 + 64 = 100 et BC = √100 = 10 cm. »",
                "Chaque égalité écrite doit être vraie : on n'écrit jamais « 36 + 64 = 100 = 10 ». On précise si une valeur est exacte (√50) ou arrondie (≈ 7,1), et on indique l'unité. Les sujets de brevet précisent que toute trace de recherche, même incomplète, est prise en compte : écrivez ce que vous avez essayé, même si vous n'arrivez pas au bout.",
              ],
              box: { label: "À retenir", text: "On sait que (les données). Or (la propriété ou le théorème). Donc (la conclusion). Puis une phrase finale qui répond à la question, avec l'unité." },
            },
            {
              heading: "Les problèmes à prise d'initiative",
              paragraphs: [
                "Au brevet, certains exercices posent une seule question sans étapes intermédiaires (« Le budget suffira-t-il ? », « L'échelle est-elle bien placée ? »). La démarche est libre : c'est à vous de découper le problème. Partez de la question et remontez : « Pour répondre, il me faut le prix total ; pour le prix total, il me faut la longueur de grillage ; pour cette longueur, il me faut le troisième côté... ».",
                "Écrivez ensuite les étapes dans l'ordre, chacune avec une courte phrase qui dit ce que l'on calcule (« Calcul de la longueur AC : »). Même si une étape est fausse, une démarche cohérente et bien présentée peut rapporter une partie des points.",
              ],
            },
          ],
          keyPoints: [
            "Quatre temps : comprendre, chercher, rédiger, contrôler.",
            "Repérer les indices : triangle rectangle, parallèles, angle donné, proportionnalité, inconnue.",
            "Rédiger : On sait que... Or... Donc..., avec des égalités toujours vraies.",
            "Indiquer l'unité et préciser si une valeur est exacte ou arrondie.",
            "Problème ouvert : partir de la question et remonter jusqu'aux données.",
            "Toujours conclure par une phrase qui répond à la question.",
          ],
          example: {
            statement: "Une échelle de 5 m de long est posée contre un mur vertical, sur un sol horizontal ; son pied est à 1,4 m du mur. Le fabricant recommande que l'angle entre l'échelle et le sol soit compris entre 65° et 80°. L'échelle est-elle placée correctement ? Permet-elle d'atteindre le bas d'une fenêtre située à 4,7 m du sol ?",
            solution: [
              "Modélisation : le mur, le sol et l'échelle forment un triangle rectangle (le mur est perpendiculaire au sol). L'échelle est l'hypoténuse (5 m), la distance au mur est le côté adjacent à l'angle au sol (1,4 m).",
              "Calcul de l'angle : cos(angle) = côté adjacent ÷ hypoténuse = 1,4 ÷ 5 = 0,28. À la calculatrice, angle ≈ 73,7°.",
              "73,7° est compris entre 65° et 80° : l'échelle est placée correctement.",
              "Calcul de la hauteur atteinte h : d'après le théorème de Pythagore, 5² = 1,4² + h², donc h² = 25 - 1,96 = 23,04 et h = √23,04 = 4,8 m.",
              "4,8 m > 4,7 m : le haut de l'échelle dépasse le bas de la fenêtre.",
              "Conclusion : l'échelle est bien placée (angle d'environ 74°) et elle atteint la fenêtre, puisqu'elle monte à 4,8 m.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, nommer l'outil à utiliser puis faire le calcul. a) Le triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm. Calculer BC. b) Le triangle EFG est rectangle en E, avec EF = 5 cm et l'angle EFG mesurant 30°. Calculer EG, arrondi au millimètre. c) Les points A, M, B sont alignés, ainsi que A, N, C, et les droites (MN) et (BC) sont parallèles. On sait que AM = 3 cm, AB = 9 cm et AN = 4 cm. Calculer AC.",
              hint: "Dans b), repérez le côté opposé et le côté adjacent à l'angle de sommet F.",
              solution: [
                "a) Triangle rectangle et deux côtés connus : théorème de Pythagore. BC² = 6² + 8² = 36 + 64 = 100, donc BC = 10 cm.",
                "b) Triangle rectangle, un angle et un côté : trigonométrie. Pour l'angle en F, [EF] est le côté adjacent et [EG] le côté opposé : tan 30° = EG ÷ EF, donc EG = 5 × tan 30° ≈ 2,9 cm.",
                "c) Droites parallèles et deux sécantes : théorème de Thalès. AM/AB = AN/AC, soit 3/9 = 4/AC, donc AC = 4 × 9 ÷ 3 = 12 cm.",
                "Résultats : BC = 10 cm ; EG ≈ 2,9 cm ; AC = 12 cm.",
              ],
            },
            {
              level: 2,
              statement: "Dans le triangle RST, on sait que RS = 3 cm, ST = 4 cm et RT = 5 cm. Un élève a rédigé : « 3² + 4² = 9 + 16 = 25 = 5 donc c'est rectangle. » 1) Relever les erreurs ou les oublis de cette rédaction. 2) Rédiger une démonstration correcte.",
              hint: "Quel théorème permet de prouver qu'un triangle est rectangle ? Quel côté faut-il considérer en premier ?",
              solution: [
                "1) L'égalité « 25 = 5 » est fausse. L'élève n'a pas repéré le plus long côté, n'a pas comparé deux calculs séparés, n'a pas cité la propriété utilisée et n'a pas précisé en quel sommet se trouve l'angle droit.",
                "2) Dans le triangle RST, le plus long côté est [RT].",
                "D'une part, RT² = 5² = 25. D'autre part, RS² + ST² = 3² + 4² = 9 + 16 = 25.",
                "On constate que RT² = RS² + ST². Donc, d'après la réciproque du théorème de Pythagore, le triangle RST est rectangle en S (le sommet opposé au plus long côté).",
                "Conclusion : le triangle RST est rectangle en S.",
              ],
            },
            {
              level: 3,
              statement: "M. Martin veut clôturer son terrain, qui a la forme d'un triangle ABC rectangle en B, avec AB = 24 m et BC = 18 m. Il installera un portail de 3 m de large sur le côté [AB] ; le reste du tour du terrain sera fermé par du grillage. Le grillage est vendu uniquement en rouleaux entiers de 10 m, au prix de 32 € le rouleau, et le portail coûte 69 €. M. Martin dispose d'un budget de 300 €. Ce budget est-il suffisant ? Toute trace de recherche sera prise en compte.",
              hint: "Il vous manque la longueur du troisième côté : le triangle est rectangle en B, donc [AC] est l'hypoténuse.",
              solution: [
                "Calcul de AC : le triangle ABC est rectangle en B. D'après le théorème de Pythagore, AC² = AB² + BC² = 24² + 18² = 576 + 324 = 900, donc AC = √900 = 30 m.",
                "Périmètre du terrain : 24 + 18 + 30 = 72 m.",
                "Longueur de grillage : 72 - 3 = 69 m (le portail remplace 3 m de clôture).",
                "Nombre de rouleaux : 69 ÷ 10 = 6,9. Les rouleaux sont vendus entiers, il en faut donc 7 (6 rouleaux ne donneraient que 60 m).",
                "Coût total : 7 × 32 + 69 = 224 + 69 = 293 €.",
                "Conclusion : 293 € ≤ 300 €, le budget de M. Martin est suffisant (il lui restera 7 €).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution d'un problème.",
            items: [
              "Lire tout l'énoncé et repérer la question posée.",
              "Relever les données utiles et faire un schéma codé.",
              "Choisir l'outil mathématique adapté (propriété, formule, équation).",
              "Effectuer les calculs en citant la propriété utilisée.",
              "Vérifier que le résultat est vraisemblable et que l'unité est juste.",
              "Rédiger une phrase de conclusion qui répond à la question.",
            ],
          },
          quiz: [
            { q: "Pour calculer l'hypoténuse d'un triangle rectangle dont on connaît les deux autres côtés, on utilise :", options: ["la réciproque du théorème de Pythagore", "le théorème de Thalès", "le théorème de Pythagore", "la réciproque du théorème de Thalès"], answer: 2, why: "Le théorème de Pythagore calcule une longueur dans un triangle dont on sait qu'il est rectangle." },
            { q: "Pour démontrer que deux droites sont parallèles à l'aide de longueurs, on utilise :", options: ["la réciproque du théorème de Thalès", "le théorème de Pythagore", "la trigonométrie", "le théorème de Thalès"], answer: 0, why: "La réciproque conclut au parallélisme quand les rapports de longueurs sont égaux et les points alignés dans le même ordre." },
            { q: "Dans un triangle rectangle, on connaît un angle aigu et l'hypoténuse ; on cherche le côté adjacent à cet angle. On utilise :", options: ["le sinus", "la tangente", "le théorème de Pythagore", "le cosinus"], answer: 3, why: "cos(angle) = côté adjacent ÷ hypoténuse : c'est le seul rapport qui relie ces deux longueurs." },
            { q: "Quelle rédaction est correcte ?", options: ["AB² = 6² + 8² = 36 + 64 = 100 = 10", "AB² = 100 donc AB = 10 cm", "AB = 6 + 8 = 14 cm", "AB² = 100 cm donc AB = 50 cm"], answer: 1, why: "Chaque égalité est vraie et l'unité est indiquée ; « 100 = 10 » est une égalité fausse." },
            { q: "Un élève trouve qu'un adulte mesure 17,5 m. Que doit-il faire ?", options: ["Arrondir à 18 m et conclure sa réponse par une phrase", "Revoir ses calculs, car c'est invraisemblable", "Garder ce résultat sans le commenter", "Écrire 17,5 cm"], answer: 1, why: "Le contrôle de vraisemblance fait partie de la démarche : un tel résultat signale une erreur." },
          ],
          trap: "Utiliser un théorème sans vérifier ses conditions (appliquer Pythagore dans un triangle dont on ne sait pas qu'il est rectangle), ou donner un calcul juste sans la propriété qui le justifie et sans phrase de conclusion.",
          method: "Rédigez chaque étape avec le schéma « On sait que... Or... Donc... », et terminez toujours par une phrase qui reprend les mots de la question, avec l'unité. Relisez ensuite chaque ligne en vous demandant : cette égalité est-elle vraie ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sujet-temps-limite',
          title: "S'entraîner sur un sujet complet en temps limité",
          minutes: 35,
          objectives: [
            "Organiser son temps sur une épreuve de deux heures.",
            "Mobiliser les connaissances de l'ensemble du programme sur des exercices indépendants.",
            "Présenter une copie lisible et relire efficacement son travail.",
          ],
          course: [
            {
              heading: "Connaître l'épreuve",
              paragraphs: [
                "L'épreuve de mathématiques du brevet dure 2 heures. Elle est composée d'exercices indépendants qui portent sur l'ensemble du programme du cycle 4 : nombres et calculs, géométrie, grandeurs et mesures, fonctions, statistiques et probabilités. Elle comprend une partie d'automatismes, à traiter sans calculatrice, et un exercice d'algorithmique ou de programmation, souvent avec Scratch.",
                "Les exercices sont indépendants : vous pouvez les traiter dans l'ordre que vous voulez, à condition de bien les numéroter. La clarté de la rédaction compte, et toute trace de recherche, même incomplète, est prise en compte. Le format exact de la session (barème, durée de chaque partie) est précisé dans les sujets officiels : consultez-les avant l'examen.",
              ],
            },
            {
              heading: "Gérer son temps",
              paragraphs: [
                "Commencez par lire l'ensemble du sujet pendant quelques minutes, en repérant les exercices qui vous semblent les plus accessibles. Commencez par ceux-là : vous gagnez des points sûrs et de la confiance. Répartissez ensuite votre temps en proportion des points : un exercice qui rapporte un quart des points mérite environ un quart du temps de travail.",
                "Ne restez jamais bloqué plus de cinq minutes sur une question : laissez de la place sur la copie, passez à la suite et revenez-y à la fin. Dans un exercice, les questions sont souvent indépendantes, et un résultat donné par l'énoncé (« Montrer que AB = 5 cm ») peut être utilisé dans les questions suivantes, même si vous n'avez pas réussi à le démontrer.",
                "Gardez une dizaine de minutes à la fin pour relire : erreurs de calcul, unités oubliées, questions sautées, phrases de conclusion manquantes.",
              ],
              box: { label: "Repère", text: "Lecture du sujet : quelques minutes. Exercices : temps proportionnel aux points. Blocage : au plus 5 minutes, puis on passe. Relecture : une dizaine de minutes à la fin." },
            },
            {
              heading: "Présenter sa copie",
              paragraphs: [
                "Indiquez clairement le numéro de chaque exercice et de chaque question. Écrivez lisiblement, sans ratures inutiles, et barrez proprement ce qui est faux plutôt que de le noircir. Soulignez ou encadrez les résultats, toujours avec leur unité, et terminez chaque problème par une phrase qui répond à la question.",
                "Pour un exercice de programmation, recopiez seulement ce qui est demandé (une valeur affichée, un bloc à compléter). Pour une figure, tracez au crayon, à la règle et au compas, et codez les éléments connus.",
              ],
            },
            {
              heading: "S'entraîner efficacement",
              paragraphs: [
                "La meilleure préparation consiste à traiter des sujets des sessions précédentes (les annales) et les sujets d'entraînement publiés pour votre session, en conditions réelles : chronomètre, sans cours, avec la calculatrice seulement pour les parties où elle est autorisée. Le brevet blanc organisé par votre collège vous met dans les mêmes conditions.",
                "Corrigez ensuite votre copie avec un stylo d'une autre couleur et notez vos erreurs dans une fiche : erreur de cours, erreur de calcul, erreur de lecture de l'énoncé, manque de temps. Au fil des sujets, cette fiche vous montre précisément ce qu'il faut retravailler.",
              ],
            },
          ],
          keyPoints: [
            "Épreuve de 2 heures, exercices indépendants sur tout le programme, dont des automatismes sans calculatrice et un exercice de programmation.",
            "Lire tout le sujet, puis commencer par les exercices les plus accessibles.",
            "Répartir le temps en proportion des points ; ne pas rester bloqué plus de 5 minutes.",
            "Un résultat donné par l'énoncé peut servir pour la suite, même non démontré.",
            "Numéroter, souligner les résultats, indiquer les unités, conclure par une phrase.",
            "Garder une dizaine de minutes pour relire.",
          ],
          example: {
            statement: "Vous vous entraînez sur un sujet d'entraînement de 2 heures, noté sur 100 points, composé de cinq exercices notés 20, 18, 22, 20 et 20 points. Vous prévoyez 10 minutes de lecture au début et 10 minutes de relecture à la fin. Combien de temps consacrer à chaque exercice ?",
            solution: [
              "Temps total : 2 h = 120 min.",
              "Temps de travail sur les exercices : 120 - 10 - 10 = 100 min.",
              "100 minutes pour 100 points : on peut consacrer 1 minute par point.",
              "Exercice 1 : 20 min ; exercice 2 : 18 min ; exercice 3 : 22 min ; exercice 4 : 20 min ; exercice 5 : 20 min.",
              "Vérification : 20 + 18 + 22 + 20 + 20 = 100 min.",
              "Réponse : environ 20, 18, 22, 20 et 20 minutes, en notant l'heure de début de chaque exercice pour suivre ce plan.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Exercice d'automatismes, sans calculatrice (temps conseillé : 8 minutes). 1) Décomposer 84 et 126 en produits de facteurs premiers. 2) En déduire la forme irréductible de la fraction 84/126. 3) Calculer 3 × 10⁵ × 4 × 10⁻² et donner le résultat en notation scientifique. 4) Développer et réduire (2x - 1)(x + 3).",
              hint: "Pour la fraction, repérez les facteurs premiers communs aux deux décompositions.",
              solution: [
                "1) 84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7. 126 = 2 × 63 = 2 × 3 × 21 = 2 × 3² × 7.",
                "2) Facteurs communs : 2 × 3 × 7 = 42. 84 ÷ 42 = 2 et 126 ÷ 42 = 3, donc 84/126 = 2/3.",
                "3) 3 × 4 = 12 et 10⁵ × 10⁻² = 10³, donc le produit vaut 12 × 10³ = 1,2 × 10⁴.",
                "4) (2x - 1)(x + 3) = 2x² + 6x - x - 3 = 2x² + 5x - 3.",
                "Résultats : 2² × 3 × 7 et 2 × 3² × 7 ; 2/3 ; 1,2 × 10⁴ ; 2x² + 5x - 3.",
              ],
            },
            {
              level: 2,
              statement: "Exercice sur les fonctions (temps conseillé : 12 minutes). On considère les fonctions f et g définies par f(x) = 3x - 5 et g(x) = -x + 7. 1) Calculer l'image de 4 par f. 2) Calculer l'antécédent de 1 par f. 3) Résoudre l'équation f(x) = g(x). 4) En déduire les coordonnées du point d'intersection des droites qui représentent f et g. 5) La fonction f est-elle linéaire ? Justifier.",
              hint: "Un antécédent de 1 est une valeur de x telle que f(x) = 1.",
              solution: [
                "1) f(4) = 3 × 4 - 5 = 12 - 5 = 7.",
                "2) On résout 3x - 5 = 1 : 3x = 6, donc x = 2. L'antécédent de 1 par f est 2.",
                "3) 3x - 5 = -x + 7 donne 3x + x = 7 + 5, soit 4x = 12, donc x = 3.",
                "4) Pour x = 3 : f(3) = 3 × 3 - 5 = 4 (et g(3) = -3 + 7 = 4). Le point d'intersection a pour coordonnées (3 ; 4).",
                "5) f(x) = 3x - 5 est de la forme ax + b avec b = -5, non nul : f est affine mais pas linéaire (sa droite ne passe pas par l'origine, puisque f(0) = -5).",
                "Résultats : 7 ; 2 ; x = 3 ; (3 ; 4) ; f n'est pas linéaire.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de géométrie de type brevet (temps conseillé : 20 minutes). Le triangle ABC est rectangle en A, avec AB = 9 cm et AC = 12 cm. Le point M est sur le segment [AB] avec AM = 6 cm, et le point N est sur le segment [AC] avec AN = 8 cm. 1) Calculer BC. 2) Démontrer que les droites (MN) et (BC) sont parallèles. 3) Calculer MN. 4) Calculer la mesure de l'angle ABC, arrondie au degré. 5) Calculer l'aire du triangle AMN, puis vérifier qu'elle est égale aux 4/9 de l'aire du triangle ABC.",
              hint: "Pour la question 2, comparez AM/AB et AN/AC. Pour la question 4, l'angle en B a pour côté opposé [AC] et pour côté adjacent [AB].",
              solution: [
                "1) Le triangle ABC est rectangle en A. D'après le théorème de Pythagore : BC² = AB² + AC² = 81 + 144 = 225, donc BC = 15 cm.",
                "2) D'une part AM/AB = 6/9 = 2/3, d'autre part AN/AC = 8/12 = 2/3. Les rapports sont égaux, et les points A, M, B d'une part, A, N, C d'autre part, sont alignés dans le même ordre. D'après la réciproque du théorème de Thalès, (MN) et (BC) sont parallèles.",
                "3) Les droites (MN) et (BC) étant parallèles, le théorème de Thalès donne MN/BC = AM/AB = 2/3, donc MN = 15 × 2/3 = 10 cm.",
                "4) Dans le triangle ABC rectangle en A : tan(ABC) = AC ÷ AB = 12 ÷ 9 = 4/3. À la calculatrice, l'angle ABC mesure environ 53°.",
                "5) Le triangle AMN est rectangle en A : son aire vaut 6 × 8 ÷ 2 = 24 cm². L'aire de ABC vaut 9 × 12 ÷ 2 = 54 cm², et 54 × 4/9 = 24 cm². C'est cohérent : AMN est une réduction de ABC de rapport 2/3, et les aires sont multipliées par (2/3)² = 4/9.",
                "Résultats : BC = 15 cm ; (MN) // (BC) ; MN = 10 cm ; angle ABC ≈ 53° ; aire de AMN = 24 cm².",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les bons réflexes le jour de l'épreuve.",
            statements: [
              { text: "Il faut obligatoirement traiter les exercices dans l'ordre du sujet.", true: false, why: "Les exercices sont indépendants : on peut choisir son ordre, en les numérotant clairement." },
              { text: "Une démarche incomplète peut rapporter des points.", true: true, why: "Les sujets précisent que toute trace de recherche, même incomplète, est prise en compte." },
              { text: "Un résultat intermédiaire donné par l'énoncé peut être utilisé même si on n'a pas su le démontrer.", true: true, why: "C'est justement pour cela que l'énoncé le donne : la suite de l'exercice reste accessible." },
              { text: "Rester bloqué vingt minutes sur une question est une bonne stratégie.", true: false, why: "Mieux vaut passer à la suite et revenir à la fin : d'autres questions sont peut-être plus faciles." },
              { text: "Un résultat juste sans unité ni conclusion rapporte toujours tous les points.", true: false, why: "La rédaction compte : l'unité et la phrase de conclusion font partie de la réponse attendue." },
              { text: "Relire sa copie permet de repérer des erreurs de calcul et des oublis.", true: true, why: "Quelques minutes de relecture rattrapent souvent des points perdus bêtement." },
              { text: "La calculatrice est autorisée pendant toute l'épreuve.", true: false, why: "La partie consacrée aux automatismes se traite sans calculatrice." },
            ],
          },
          quiz: [
            { q: "Quelle est la durée de l'épreuve de mathématiques du brevet ?", options: ["1 h", "1 h 30 min", "3 h", "2 h"], answer: 3, why: "L'épreuve de mathématiques du brevet dure 2 heures." },
            { q: "Vous bloquez sur une question depuis plusieurs minutes. Que faire ?", options: ["Recommencer l'exercice depuis le début", "Laisser de la place et passer à la suite", "Rendre la copie", "Effacer tout l'exercice"], answer: 1, why: "On garde du temps pour les autres questions et on revient à celle-ci à la fin." },
            { q: "Un sujet de 2 h est noté sur 100 points. Vous gardez 20 minutes pour la lecture et la relecture. Combien de temps prévoir pour un exercice de 25 points ?", options: ["20 min", "30 min", "25 min", "50 min"], answer: 2, why: "Il reste 100 minutes pour 100 points, soit 1 minute par point : 25 minutes." },
            { q: "La question 2 demande « Montrer que AB = 5 cm » et vous n'y arrivez pas. Pour la question 3 :", options: ["vous ne pouvez pas la traiter", "vous utilisez AB = 5 cm, donné par l'énoncé", "vous choisissez une autre valeur de AB", "vous mesurez AB sur la figure"], answer: 1, why: "Le résultat est donné par l'énoncé : vous pouvez l'utiliser pour continuer." },
            { q: "Quelle est la meilleure façon de s'entraîner ?", options: ["Lire les corrigés des annales sans chercher les exercices", "Apprendre des réponses par cœur", "Sujets en temps limité, puis analyse des erreurs", "Seulement les exercices faciles"], answer: 2, why: "Les conditions réelles et l'analyse des erreurs montrent ce qu'il faut retravailler." },
          ],
          trap: "Se lancer dans le premier exercice sans avoir lu tout le sujet, y passer trop de temps, et ne plus avoir le temps de traiter des questions faciles placées à la fin.",
          method: "Lors d'un sujet blanc, notez dans la marge de votre brouillon l'heure à laquelle vous commencez chaque exercice : en corrigeant, vous verrez exactement où vous perdez du temps et vous ajusterez votre plan pour le jour de l'examen.",
        },
      ],
    },
  ],
}
