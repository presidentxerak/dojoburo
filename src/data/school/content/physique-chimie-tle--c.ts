import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-tle',
  chapters: [
    /* ================================================================== */
    /* PHÉNOMÈNES ONDULATOIRES                                              */
    /* ================================================================== */
    {
      id: 'ondes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'intensite-sonore',
          title: 'Intensité sonore, niveau d\'intensité et atténuation',
          minutes: 30,
          objectives: [
            "Exploiter l'expression donnant le niveau d'intensité sonore d'un signal : L = 10 log(I/I₀).",
            "Passer d'une intensité sonore à un niveau d'intensité sonore et inversement.",
            "Illustrer l'atténuation géométrique et l'atténuation par absorption.",
            "Évaluer l'atténuation d'un signal sonore lors de sa propagation.",
          ],
          course: [
            {
              heading: "L'intensité sonore : une puissance par unité de surface",
              paragraphs: [
                "Un son est une onde mécanique progressive : une perturbation (une variation de pression) se propage de proche en proche dans un milieu matériel, sans transport de matière mais avec transport d'énergie. Plus l'onde transporte d'énergie par seconde à travers une surface donnée, plus le son est fort.",
                "L'intensité sonore I est la puissance P transportée par l'onde, divisée par l'aire S de la surface qu'elle traverse perpendiculairement : I = P/S. Elle s'exprime en watts par mètre carré (W·m⁻²). Par exemple, si une puissance sonore de 2,0 × 10⁻⁶ W traverse une surface de 0,50 m², l'intensité vaut 4,0 × 10⁻⁶ W·m⁻².",
                "L'oreille humaine perçoit, à 1 000 Hz, des intensités allant d'environ 1,0 × 10⁻¹² W·m⁻² (seuil d'audibilité, noté I₀) jusqu'à environ 1 W·m⁻² (seuil de douleur). L'intensité couvre donc douze puissances de dix : une échelle linéaire serait très peu pratique, et la sensation auditive n'est d'ailleurs pas proportionnelle à l'intensité.",
              ],
              box: { label: "Définition", text: "L'intensité sonore I (en W·m⁻²) est la puissance sonore reçue par unité de surface : I = P/S. Le seuil d'audibilité de référence est I₀ = 1,0 × 10⁻¹² W·m⁻²." },
            },
            {
              heading: "Le niveau d'intensité sonore, en décibels",
              paragraphs: [
                "Pour retrouver une échelle commode et proche de la sensation, on utilise le niveau d'intensité sonore L, exprimé en décibels (dB) : L = 10 log(I/I₀), où log est le logarithme décimal. Au seuil d'audibilité, I = I₀, donc L = 10 log(1) = 0 dB. Au seuil de douleur, I ≈ 1 W·m⁻², donc L ≈ 10 log(10¹²) = 120 dB.",
                "Pour revenir à l'intensité, on inverse la relation : I = I₀ × 10^(L/10). Par exemple, une conversation à 60 dB correspond à I = 1,0 × 10⁻¹² × 10⁶ = 1,0 × 10⁻⁶ W·m⁻².",
                "Deux conséquences sont à connaître. Multiplier l'intensité par 10 ajoute 10 dB. Multiplier l'intensité par 2 ajoute 10 log(2) ≈ 3 dB. Ainsi, deux sources identiques de 80 dB chacune produisent ensemble 83 dB, et non 160 dB : ce sont les intensités qui s'additionnent, jamais les niveaux.",
              ],
              box: { label: "Formule", text: "L = 10 log(I/I₀), avec L en dB, I et I₀ en W·m⁻². Réciproquement, I = I₀ × 10^(L/10). Doubler I : + 3 dB ; multiplier I par 10 : + 10 dB." },
            },
            {
              heading: "L'atténuation géométrique",
              paragraphs: [
                "Une source ponctuelle qui émet de façon identique dans toutes les directions (source isotrope) répartit sa puissance P sur des sphères de plus en plus grandes. À la distance d de la source, la surface traversée est celle d'une sphère, 4πd², donc I = P/(4πd²). L'énergie n'est pas perdue : elle est simplement diluée sur une surface plus grande.",
                "Si la distance double, la surface est multipliée par 4 et l'intensité est divisée par 4 : le niveau diminue de 10 log(4) ≈ 6 dB. Si la distance est multipliée par 10, l'intensité est divisée par 100 et le niveau diminue de 20 dB. C'est l'atténuation géométrique.",
              ],
              box: { label: "Propriété", text: "Pour une source ponctuelle isotrope, I = P/(4πd²) : l'intensité est inversement proportionnelle au carré de la distance. Doubler la distance fait perdre environ 6 dB." },
            },
            {
              heading: "L'atténuation par absorption et le bilan en décibels",
              paragraphs: [
                "Lorsqu'une onde sonore traverse un milieu (air, mur, mousse, laine minérale), une partie de son énergie est convertie en énergie thermique dans ce milieu : c'est l'atténuation par absorption. Elle dépend du matériau et de son épaisseur, et aussi de la fréquence : dans l'air, les sons aigus sont plus absorbés que les sons graves, ce qui explique qu'on entende surtout les graves d'un concert lointain.",
                "On mesure une atténuation par la différence des niveaux d'intensité sonore : A = L_émis - L_reçu, en dB. Par exemple, des bouchons d'oreille d'atténuation 25 dB ramènent un niveau de 105 dB à 80 dB. En termes d'intensité, 25 dB correspondent à une division par 10^2,5 ≈ 316.",
                "Les protections auditives, l'isolation phonique des logements et le choix de matériaux absorbants dans les salles reposent sur ces deux phénomènes : éloigner la source (atténuation géométrique) et interposer un matériau absorbant (atténuation par absorption).",
              ],
              box: { label: "À retenir", text: "Atténuation A = L₁ - L₂ (en dB) = 10 log(I₁/I₂). L'atténuation géométrique vient de la dilution de la puissance sur une surface croissante ; l'absorption vient de la conversion d'énergie dans le milieu traversé." },
            },
          ],
          keyPoints: [
            "Intensité sonore : I = P/S, en W·m⁻² ; seuil d'audibilité I₀ = 1,0 × 10⁻¹² W·m⁻².",
            "Niveau d'intensité sonore : L = 10 log(I/I₀), en dB ; réciproquement I = I₀ × 10^(L/10).",
            "Les intensités s'additionnent, pas les niveaux : deux sources identiques donnent + 3 dB.",
            "Source isotrope : I = P/(4πd²) ; doubler la distance fait perdre environ 6 dB.",
            "Absorption : une partie de l'énergie est convertie en énergie thermique dans le milieu traversé.",
            "Atténuation : A = L_émis - L_reçu, en dB.",
          ],
          example: {
            statement: "Une enceinte, assimilée à une source ponctuelle isotrope, produit un niveau d'intensité sonore de 90 dB à 2,0 m. Calculer l'intensité sonore à 2,0 m, puis le niveau d'intensité sonore à 8,0 m en ne tenant compte que de l'atténuation géométrique. Donnée : I₀ = 1,0 × 10⁻¹² W·m⁻².",
            solution: [
              "À 2,0 m : I₁ = I₀ × 10^(L₁/10) = 1,0 × 10⁻¹² × 10⁹ = 1,0 × 10⁻³ W·m⁻².",
              "Pour une source isotrope, I = P/(4πd²) : l'intensité est inversement proportionnelle à d².",
              "La distance est multipliée par 8,0/2,0 = 4, donc l'intensité est divisée par 4² = 16 : I₂ = 1,0 × 10⁻³/16 = 6,25 × 10⁻⁵ W·m⁻².",
              "L₂ = 10 log(I₂/I₀) = 10 log(6,25 × 10⁷) ≈ 78 dB.",
              "Vérification : l'atténuation vaut 10 log(16) ≈ 12 dB, soit deux fois 6 dB pour deux doublements de distance ; 90 - 12 = 78 dB.",
              "Réponse : I₁ = 1,0 × 10⁻³ W·m⁻² et L₂ ≈ 78 dB.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Calculer le niveau d'intensité sonore correspondant à une intensité I = 3,2 × 10⁻⁶ W·m⁻². b) Calculer l'intensité sonore correspondant à un niveau L = 85 dB. Donnée : I₀ = 1,0 × 10⁻¹² W·m⁻².",
              hint: "Utilisez L = 10 log(I/I₀) pour a), puis la relation réciproque I = I₀ × 10^(L/10) pour b).",
              solution: [
                "a) I/I₀ = 3,2 × 10⁻⁶/1,0 × 10⁻¹² = 3,2 × 10⁶.",
                "L = 10 log(3,2 × 10⁶) = 10 × 6,51 ≈ 65 dB.",
                "b) I = I₀ × 10^(L/10) = 1,0 × 10⁻¹² × 10^8,5.",
                "10^8,5 ≈ 3,16 × 10⁸, donc I ≈ 3,2 × 10⁻⁴ W·m⁻².",
                "Réponse : a) L ≈ 65 dB ; b) I ≈ 3,2 × 10⁻⁴ W·m⁻².",
              ],
            },
            {
              level: 2,
              statement: "Dans un atelier, une machine produit seule, au poste de travail, un niveau d'intensité sonore de 80 dB. a) Quel est le niveau au même poste lorsque deux machines identiques fonctionnent, chacune produisant 80 dB à ce poste ? b) Combien de machines identiques faut-il faire fonctionner pour atteindre 90 dB à ce poste ? Donnée : I₀ = 1,0 × 10⁻¹² W·m⁻².",
              hint: "Repassez par les intensités : ce sont elles qui s'additionnent.",
              solution: [
                "Intensité due à une machine : I₁ = 1,0 × 10⁻¹² × 10⁸ = 1,0 × 10⁻⁴ W·m⁻².",
                "a) Deux machines : I = 2 × 1,0 × 10⁻⁴ = 2,0 × 10⁻⁴ W·m⁻².",
                "L = 10 log(2,0 × 10⁻⁴/1,0 × 10⁻¹²) = 10 log(2,0 × 10⁸) ≈ 83 dB (et non 160 dB).",
                "b) À 90 dB, I = 1,0 × 10⁻¹² × 10⁹ = 1,0 × 10⁻³ W·m⁻².",
                "Nombre de machines : n = 1,0 × 10⁻³/1,0 × 10⁻⁴ = 10.",
                "Réponse : a) environ 83 dB ; b) 10 machines (+ 10 dB correspond à une intensité multipliée par 10).",
              ],
            },
            {
              level: 3,
              statement: "Lors d'un concert en plein air, un spectateur placé à 3,0 m d'une enceinte mesure un niveau d'intensité sonore de 110 dB. L'enceinte est modélisée par une source ponctuelle isotrope et on néglige l'absorption par l'air. 1. Calculer la puissance sonore P de l'enceinte. 2. À quelle distance minimale de l'enceinte faut-il se placer pour que le niveau ne dépasse pas 85 dB ? 3. Un autre spectateur reste à 3,0 m mais porte des bouchons d'oreille d'atténuation 25 dB. Quel niveau perçoit-il ? Commenter. Donnée : I₀ = 1,0 × 10⁻¹² W·m⁻².",
              hint: "Calculez d'abord I à 3,0 m, puis utilisez I = P/(4πd²). Pour la question 2, raisonnez sur le rapport des intensités, puis sur le rapport des distances.",
              solution: [
                "1. À 3,0 m : I = 1,0 × 10⁻¹² × 10¹¹ = 0,10 W·m⁻².",
                "P = I × 4πd² = 0,10 × 4π × 3,0² ≈ 11 W.",
                "2. À 85 dB, I' = 1,0 × 10⁻¹² × 10^8,5 ≈ 3,16 × 10⁻⁴ W·m⁻² ; le rapport I/I' vaut 10^2,5 ≈ 316.",
                "Comme I est proportionnelle à 1/d², le rapport des distances vaut √316 ≈ 17,8, donc d' ≈ 3,0 × 17,8 ≈ 53 m.",
                "3. Avec les bouchons : L = 110 - 25 = 85 dB, soit le même niveau qu'à 53 m sans protection.",
                "Commentaire : la protection auditive produit, sans se déplacer, le même effet qu'un éloignement d'environ 50 m ; l'absorption est une solution efficace là où l'atténuation géométrique demanderait de grandes distances.",
                "Réponse : P ≈ 11 W ; d ≥ 53 m environ ; 85 dB perçus avec les bouchons.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque grandeur ou relation à sa signification.",
            pairs: [
              { left: "I = P/S", right: "Intensité sonore, en W·m⁻²" },
              { left: "L = 10 log(I/I₀)", right: "Niveau d'intensité sonore, en dB" },
              { left: "I₀ = 1,0 × 10⁻¹² W·m⁻²", right: "Seuil d'audibilité de référence" },
              { left: "I = P/(4πd²)", right: "Atténuation géométrique d'une source isotrope" },
              { left: "A = L₁ - L₂", right: "Atténuation entre deux points, en dB" },
              { left: "+ 3 dB", right: "Intensité sonore multipliée par 2" },
            ],
          },
          quiz: [
            {
              q: "Quel est le niveau d'intensité sonore d'un son dont l'intensité est égale à I₀ ?",
              options: ["1 dB", "0 dB", "10 dB", "-12 dB"],
              answer: 1,
              why: "L = 10 log(I₀/I₀) = 10 log(1) = 0 dB : c'est le seuil d'audibilité.",
            },
            {
              q: "On double l'intensité sonore reçue. Le niveau d'intensité sonore :",
              options: ["double", "augmente de 6 dB", "augmente de 10 dB", "augmente d'environ 3 dB"],
              answer: 3,
              why: "10 log(2I/I₀) = 10 log(2) + 10 log(I/I₀), et 10 log(2) ≈ 3 dB.",
            },
            {
              q: "Pour une source ponctuelle isotrope, on s'éloigne deux fois plus loin. Le niveau d'intensité sonore :",
              options: ["diminue d'environ 6 dB", "est divisé par 2", "diminue de 3 dB", "diminue d'environ 12 dB"],
              answer: 0,
              why: "I est divisée par 4, donc L diminue de 10 log(4) ≈ 6 dB.",
            },
            {
              q: "Qu'est-ce que l'atténuation par absorption ?",
              options: ["La répartition de la puissance sur une sphère de plus en plus grande", "Une conversion d'énergie de l'onde en énergie thermique", "Une diminution de la fréquence du son", "Une réflexion totale sur les parois"],
              answer: 1,
              why: "Le milieu traversé convertit une partie de l'énergie de l'onde en énergie thermique ; la dilution sur une sphère est l'atténuation géométrique.",
            },
            {
              q: "Quelle intensité correspond à un niveau de 70 dB ?",
              options: ["1,0 × 10⁻⁷ W·m⁻²", "7,0 × 10⁻¹¹ W·m⁻²", "1,0 × 10⁻⁵ W·m⁻²", "70 W·m⁻²"],
              answer: 2,
              why: "I = I₀ × 10^(70/10) = 1,0 × 10⁻¹² × 10⁷ = 1,0 × 10⁻⁵ W·m⁻².",
            },
          ],
          trap: "Additionner des niveaux en décibels : deux sources de 80 dB ne donnent pas 160 dB mais 83 dB, car seules les intensités s'additionnent.",
          method: "Pour tout calcul combinant plusieurs sources ou plusieurs distances, repassez d'abord aux intensités en W·m⁻², calculez, puis revenez aux décibels ; contrôlez ensuite avec les repères + 3 dB (×2), + 10 dB (×10) et - 6 dB (distance doublée).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'diffraction-interferences',
          title: 'Diffraction et interférences',
          minutes: 35,
          objectives: [
            "Caractériser le phénomène de diffraction et exploiter la relation θ = λ/a.",
            "Caractériser le phénomène d'interférences de deux ondes et citer les conditions d'interférences constructives et destructives.",
            "Prévoir les lieux d'interférences constructives et destructives dans le cas des fentes d'Young.",
            "Établir l'expression de l'interfrange i = λD/b et l'exploiter.",
          ],
          course: [
            {
              heading: "La diffraction : l'onde s'étale après une ouverture",
              paragraphs: [
                "Lorsqu'une onde rencontre une ouverture ou un obstacle dont la dimension a est du même ordre de grandeur que sa longueur d'onde λ, ou plus petite, elle ne se propage plus seulement en ligne droite : elle s'étale dans des directions variées. C'est la diffraction. On l'observe pour les vagues à l'entrée d'un port, pour le son (on entend une personne cachée derrière un mur ouvert) et pour la lumière.",
                "Avec un laser et une fente fine verticale, on observe sur un écran une figure étalée perpendiculairement à la fente : une tache centrale large et lumineuse, entourée de taches latérales moins lumineuses, séparées par des extinctions. La diffraction est une signature du caractère ondulatoire : elle concerne toutes les ondes, mécaniques ou électromagnétiques.",
              ],
              box: { label: "Définition", text: "La diffraction est l'étalement des directions de propagation d'une onde qui rencontre une ouverture ou un obstacle de dimension a. Elle est d'autant plus marquée que a est petit devant λ (ou de même ordre de grandeur)." },
            },
            {
              heading: "L'écart angulaire θ = λ/a",
              paragraphs: [
                "Pour une fente de largeur a (ou un fil de diamètre a), l'écart angulaire θ entre le milieu de la tache centrale et la première extinction vérifie θ = λ/a, avec θ en radians, λ et a dans la même unité. Plus la fente est étroite, plus la tache centrale est large ; plus la longueur d'onde est grande, plus l'étalement est important.",
                "Sur un écran placé à la distance D de la fente, la tache centrale a une largeur L. Dans le triangle formé, tan θ = (L/2)/D. Pour les petits angles (θ en radians), tan θ ≈ θ, donc L ≈ 2λD/a. Cette relation permet de mesurer λ connaissant a, ou de mesurer un diamètre de fil connaissant λ.",
                "Exemple : λ = 650 nm, a = 50 μm et D = 1,50 m. θ = 650 × 10⁻⁹/50 × 10⁻⁶ = 1,3 × 10⁻² rad et L ≈ 2 × 1,50 × 1,3 × 10⁻² ≈ 3,9 × 10⁻² m, soit 3,9 cm.",
              ],
              box: { label: "Formule", text: "θ = λ/a (θ en rad) ; largeur de la tache centrale sur un écran à la distance D : L ≈ 2λD/a, avec l'approximation des petits angles tan θ ≈ θ." },
            },
            {
              heading: "Les interférences de deux ondes",
              paragraphs: [
                "Deux ondes de même fréquence, issues de sources cohérentes (déphasage constant dans le temps), se superposent dans la zone où elles se croisent : c'est le phénomène d'interférences. En certains points, elles arrivent en phase et s'ajoutent (interférences constructives, amplitude maximale) ; en d'autres, elles arrivent en opposition de phase et se compensent (interférences destructives, amplitude minimale, voire nulle).",
                "Pour deux sources en phase S₁ et S₂, tout dépend de la différence de chemin δ = S₂M - S₁M au point M. Si δ = kλ avec k entier, les ondes arrivent en phase : interférences constructives. Si δ = (k + ½)λ, elles arrivent en opposition de phase : interférences destructives.",
                "Deux lampes ordinaires ne sont pas cohérentes : on n'obtient pas de figure stable. Pour la lumière, on éclaire donc deux fentes avec une même source, en général un laser. Avec deux haut-parleurs alimentés par le même générateur, on obtient de même des zones de son fort et de son faible.",
              ],
              box: { label: "Règle", text: "Sources cohérentes en phase. Interférences constructives : δ = kλ. Interférences destructives : δ = (k + ½)λ, avec k entier relatif." },
            },
            {
              heading: "Les fentes d'Young et l'interfrange",
              paragraphs: [
                "Au début du XIXe siècle, Thomas Young éclaire deux fentes fines parallèles, distantes de b, et observe sur un écran à la distance D des franges alternativement brillantes et sombres, régulièrement espacées. Ces franges sont contenues dans la tache de diffraction de chaque fente. L'expérience a beaucoup contribué à imposer le modèle ondulatoire de la lumière.",
                "Pour un point M de l'écran repéré par sa position x par rapport au centre, et pour D grand devant b et x, la différence de chemin vaut δ = bx/D (expression donnée). Les franges brillantes vérifient δ = kλ, donc x_k = kλD/b. Deux franges brillantes consécutives sont séparées par x_(k+1) - x_k = λD/b : c'est l'interfrange i.",
                "En lumière blanche, chaque couleur donne son propre interfrange : les franges se brouillent et des irisations apparaissent. Les couleurs d'une bulle de savon ou d'une fine couche d'huile sur l'eau s'expliquent aussi par des interférences.",
              ],
              box: { label: "Formule", text: "Fentes d'Young : δ = bx/D ; franges brillantes en x = kλD/b ; interfrange i = λD/b (b : distance entre les fentes, D : distance fentes-écran)." },
            },
          ],
          keyPoints: [
            "Diffraction : étalement d'une onde par une ouverture ou un obstacle de taille a comparable ou inférieure à λ.",
            "Écart angulaire : θ = λ/a, en radians ; largeur de la tache centrale L ≈ 2λD/a.",
            "Interférences : superposition de deux ondes cohérentes (même fréquence, déphasage constant).",
            "Constructives si δ = kλ, destructives si δ = (k + ½)λ.",
            "Fentes d'Young : δ = bx/D et interfrange i = λD/b.",
          ],
          example: {
            statement: "Un laser de longueur d'onde λ = 650 nm éclaire une fente de largeur a = 50 μm. L'écran est à D = 1,50 m. Calculer l'écart angulaire θ, puis la largeur L de la tache centrale.",
            solution: [
              "Conversion : λ = 650 × 10⁻⁹ m et a = 50 × 10⁻⁶ m.",
              "θ = λ/a = 650 × 10⁻⁹/50 × 10⁻⁶ = 1,3 × 10⁻² rad.",
              "Dans le triangle, tan θ = (L/2)/D ; θ est petit, donc tan θ ≈ θ et L ≈ 2Dθ.",
              "L ≈ 2 × 1,50 × 1,3 × 10⁻² = 3,9 × 10⁻² m.",
              "Réponse : θ = 1,3 × 10⁻² rad et L ≈ 3,9 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un laser vert de longueur d'onde λ = 532 nm éclaire une fente de largeur a = 0,10 mm. a) Calculer l'écart angulaire θ en radians, puis en degrés. b) Calculer la largeur de la tache centrale sur un écran situé à D = 2,0 m.",
              hint: "Convertissez λ et a en mètres ; pour passer en degrés, multipliez par 180/π.",
              solution: [
                "a) θ = λ/a = 532 × 10⁻⁹/0,10 × 10⁻³ = 5,3 × 10⁻³ rad.",
                "En degrés : 5,32 × 10⁻³ × 180/π ≈ 0,30°.",
                "b) L ≈ 2Dθ = 2 × 2,0 × 5,32 × 10⁻³ ≈ 2,1 × 10⁻² m.",
                "Réponse : θ ≈ 5,3 × 10⁻³ rad (environ 0,30°) et L ≈ 2,1 cm.",
              ],
            },
            {
              level: 2,
              statement: "Deux haut-parleurs S₁ et S₂, alimentés par le même générateur, émettent en phase un son de fréquence f = 1 700 Hz. La célérité du son dans l'air est c = 340 m·s⁻¹. a) Calculer la longueur d'onde. b) Un micro placé en M est à 3,00 m de S₁ et à 3,50 m de S₂. Les interférences sont-elles constructives ou destructives en M ? c) Même question en un point N situé à 2,60 m de S₁ et à 3,00 m de S₂.",
              hint: "Calculez δ = S₂M - S₁M puis le rapport δ/λ : entier ou demi-entier ?",
              solution: [
                "a) λ = c/f = 340/1 700 = 0,200 m.",
                "b) δ = 3,50 - 3,00 = 0,50 m, soit δ/λ = 0,50/0,200 = 2,5.",
                "δ = (2 + ½)λ : les ondes arrivent en opposition de phase, les interférences sont destructives (son faible en M).",
                "c) δ = 3,00 - 2,60 = 0,40 m, soit δ/λ = 2 : δ = 2λ.",
                "Réponse : λ = 0,200 m ; interférences destructives en M, constructives en N.",
              ],
            },
            {
              level: 3,
              statement: "On réalise l'expérience des fentes d'Young avec un laser de longueur d'onde inconnue. Les fentes sont distantes de b = 0,50 mm et l'écran est à D = 1,50 m. On admet que la différence de chemin en un point d'abscisse x vaut δ = bx/D. 1. Établir l'expression de l'interfrange i. 2. On mesure 1,9 cm entre le centre de la frange brillante centrale et le centre de la dixième frange brillante suivante. En déduire i puis λ. 3. Pourquoi mesurer dix interfranges plutôt qu'un seul ? 4. Comment évolue l'interfrange si l'on rapproche les fentes ?",
              hint: "Les franges brillantes vérifient δ = kλ. Écrivez x_k puis x_(k+1) - x_k.",
              solution: [
                "1. Frange brillante : δ = kλ, soit bx_k/D = kλ, donc x_k = kλD/b.",
                "i = x_(k+1) - x_k = (k + 1)λD/b - kλD/b = λD/b.",
                "2. 10i = 1,9 cm, donc i = 1,9 mm = 1,9 × 10⁻³ m.",
                "λ = ib/D = 1,9 × 10⁻³ × 0,50 × 10⁻³/1,50 ≈ 6,3 × 10⁻⁷ m, soit environ 633 nm (lumière rouge).",
                "3. L'erreur de lecture sur la règle porte sur une longueur dix fois plus grande : l'incertitude relative sur i est environ divisée par 10.",
                "4. i = λD/b : si b diminue, i augmente ; les franges s'écartent.",
                "Réponse : i = λD/b ; i = 1,9 mm et λ ≈ 6,3 × 10⁻⁷ m ; rapprocher les fentes élargit l'interfrange.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : diffraction et interférences.",
            statements: [
              { text: "Plus la fente est étroite, plus la tache centrale de diffraction est large.", true: true, why: "θ = λ/a : quand a diminue, θ augmente." },
              { text: "La diffraction ne concerne que la lumière.", true: false, why: "Toutes les ondes diffractent : vagues, son, lumière, ondes radio." },
              { text: "Deux lampes de poche identiques donnent une figure d'interférences stable.", true: false, why: "Elles ne sont pas cohérentes : leur déphasage varie sans cesse." },
              { text: "En un point où δ = 3λ, les interférences sont constructives.", true: true, why: "δ est un multiple entier de λ : les ondes arrivent en phase." },
              { text: "Dans θ = λ/a, l'angle θ s'exprime en degrés.", true: false, why: "La relation donne θ en radians." },
              { text: "L'interfrange augmente si l'on éloigne l'écran des fentes.", true: true, why: "i = λD/b est proportionnel à D." },
              { text: "Une frange sombre correspond à δ = kλ.", true: false, why: "Une frange sombre correspond à δ = (k + ½)λ." },
            ],
          },
          quiz: [
            {
              q: "Dans la relation θ = λ/a, l'angle θ s'exprime en :",
              options: ["degrés", "mètres", "radians", "mètres par seconde"],
              answer: 2,
              why: "θ = λ/a est un rapport de deux longueurs, qui donne directement l'angle en radians.",
            },
            {
              q: "On divise par 2 la largeur de la fente. L'écart angulaire θ :",
              options: ["est multiplié par 2", "est divisé par 2", "ne change pas", "est multiplié par 4"],
              answer: 0,
              why: "θ est inversement proportionnel à a.",
            },
            {
              q: "Pour deux sources en phase, les interférences sont destructives si :",
              options: ["δ = kλ", "δ = 2kλ", "δ = kλ/4", "δ = (k + ½)λ"],
              answer: 3,
              why: "Une différence de chemin d'un nombre demi-entier de longueurs d'onde place les ondes en opposition de phase.",
            },
            {
              q: "Deux sources sont cohérentes lorsqu'elles ont :",
              options: ["la même puissance lumineuse, quelle que soit leur fréquence", "la même fréquence et un déphasage constant", "exactement la même distance à l'écran d'observation"],
              answer: 1,
              why: "La cohérence exige une même fréquence et un déphasage constant dans le temps, sinon la figure se brouille.",
            },
            {
              q: "Fentes d'Young : λ = 500 nm, D = 2,0 m, b = 1,0 mm. L'interfrange vaut :",
              options: ["0,25 mm", "4,0 mm", "1,0 mm", "10 mm"],
              answer: 2,
              why: "i = λD/b = 500 × 10⁻⁹ × 2,0/1,0 × 10⁻³ = 1,0 × 10⁻³ m.",
            },
          ],
          trap: "Confondre a (largeur d'une fente, qui règle la diffraction) et b (distance entre les deux fentes, qui règle l'interfrange), ou oublier de convertir nm, μm et mm en mètres avant le calcul.",
          method: "Avant tout calcul, faites un schéma avec les grandeurs (a ou b, D, L ou i, θ), convertissez tout en mètres, puis vérifiez le sens de variation : la tache s'élargit si a diminue, les franges s'écartent si b diminue ou si D augmente.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'effet-doppler',
          title: 'L\'effet Doppler',
          minutes: 30,
          objectives: [
            "Décrire et interpréter qualitativement les observations correspondant à une manifestation de l'effet Doppler.",
            "Établir l'expression du décalage Doppler dans le cas d'un observateur fixe, d'un émetteur mobile et dans une configuration à une dimension.",
            "Exploiter l'expression du décalage Doppler pour déterminer une vitesse.",
          ],
          course: [
            {
              heading: "Une observation de tous les jours",
              paragraphs: [
                "Lorsqu'une ambulance passe devant vous, sirène allumée, le son paraît plus aigu quand elle s'approche et plus grave quand elle s'éloigne. Pourtant, la sirène émet toujours la même fréquence. Ce changement de fréquence perçue, dû au mouvement relatif de l'émetteur et du récepteur, est l'effet Doppler, décrit par le physicien autrichien Christian Doppler en 1842.",
                "On note f_E la fréquence émise par la source et f_R la fréquence reçue. Le décalage Doppler est Δf = f_R - f_E. Lorsque l'émetteur et le récepteur se rapprochent, f_R > f_E (Δf > 0, son plus aigu) ; lorsqu'ils s'éloignent, f_R < f_E (Δf < 0, son plus grave). Il n'y a aucun décalage si leur distance ne varie pas.",
              ],
              box: { label: "Définition", text: "L'effet Doppler est la modification de la fréquence reçue par rapport à la fréquence émise, lorsque l'émetteur et le récepteur sont en mouvement l'un par rapport à l'autre. Décalage Doppler : Δf = f_R - f_E." },
            },
            {
              heading: "Établir l'expression : émetteur mobile, récepteur fixe",
              paragraphs: [
                "On se place à une dimension : une source se déplace à la vitesse v en direction d'un récepteur fixe, et l'onde se propage à la célérité c dans le milieu (v < c). La source émet une crête, puis la suivante une période T_E = 1/f_E plus tard.",
                "Pendant la durée T_E, la première crête a parcouru la distance c·T_E vers le récepteur. Pendant ce temps, la source a avancé de v·T_E dans la même direction. La distance entre les deux crêtes, c'est-à-dire la longueur d'onde perçue par le récepteur, vaut donc λ_R = c·T_E - v·T_E = (c - v)·T_E : les crêtes sont « tassées » devant la source.",
                "Le récepteur fixe reçoit des crêtes qui se propagent à c et sont espacées de λ_R, donc f_R = c/λ_R = c/((c - v)T_E) = f_E × c/(c - v). Pour une source qui s'éloigne, les crêtes sont étirées : λ_R = (c + v)T_E et f_R = f_E × c/(c + v).",
              ],
              box: { label: "Formule", text: "Récepteur fixe, émetteur mobile à la vitesse v. Émetteur qui s'approche : f_R = f_E × c/(c - v). Émetteur qui s'éloigne : f_R = f_E × c/(c + v). Si v est très petite devant c : |Δf| ≈ f_E × v/c." },
            },
            {
              heading: "Mesurer une vitesse grâce à l'effet Doppler",
              paragraphs: [
                "En mesurant f_E et f_R, on peut retrouver la vitesse de l'émetteur. Pour une source qui s'approche, f_R(c - v) = f_E·c, d'où v = c(f_R - f_E)/f_R. Par exemple, pour une source à 440 Hz qui s'approche à 25 m·s⁻¹ dans l'air (c = 340 m·s⁻¹), f_R = 440 × 340/315 ≈ 475 Hz ; en s'éloignant, f_R = 440 × 340/365 ≈ 410 Hz.",
                "Les radars routiers émettent une onde électromagnétique qui se réfléchit sur le véhicule ; la mesure du décalage de fréquence de l'onde réfléchie donne la vitesse. L'échographie Doppler utilise des ultrasons réfléchis par les globules rouges pour mesurer la vitesse du sang dans les vaisseaux.",
              ],
            },
            {
              heading: "L'effet Doppler en astronomie",
              paragraphs: [
                "L'effet Doppler concerne aussi la lumière. Pour une étoile ou une galaxie qui s'éloigne de la Terre, les longueurs d'onde reçues sont plus grandes que les longueurs d'onde émises : les raies de son spectre sont décalées vers le rouge. Pour un astre qui se rapproche, elles sont décalées vers le bleu.",
                "Dans le modèle étudié, pour un émetteur qui s'éloigne, λ_R = (c + v)T_E = λ_E + v·λ_E/c, donc Δλ/λ_E = v/c. En mesurant le décalage d'une raie connue, on obtient la vitesse radiale de l'astre. Cette méthode a notamment permis la découverte de la première exoplanète autour d'une étoile semblable au Soleil, en 1995, par Michel Mayor et Didier Queloz : la planète fait légèrement osciller son étoile, dont les raies se décalent périodiquement.",
              ],
              box: { label: "À retenir", text: "Décalage vers le rouge (λ_R > λ_E) : l'astre s'éloigne. Décalage vers le bleu : il se rapproche. Pour v très petite devant c : Δλ/λ_E ≈ v/c." },
            },
          ],
          keyPoints: [
            "Effet Doppler : la fréquence reçue diffère de la fréquence émise si émetteur et récepteur sont en mouvement relatif.",
            "Rapprochement : f_R > f_E (plus aigu) ; éloignement : f_R < f_E (plus grave).",
            "Émetteur qui s'approche d'un récepteur fixe : λ_R = (c - v)T_E et f_R = f_E × c/(c - v).",
            "Émetteur qui s'éloigne : f_R = f_E × c/(c + v).",
            "Vitesse d'un émetteur qui s'approche : v = c(f_R - f_E)/f_R.",
            "En astronomie, un décalage vers le rouge signifie que l'astre s'éloigne : Δλ/λ ≈ v/c.",
          ],
          example: {
            statement: "Un émetteur sonore de fréquence f_E = 440 Hz est fixé sur une voiture qui roule à v = 25 m·s⁻¹ en ligne droite. Un observateur immobile est au bord de la route. Calculer la fréquence perçue quand la voiture s'approche, puis quand elle s'éloigne. Donnée : c = 340 m·s⁻¹.",
            solution: [
              "Approche : les crêtes sont rapprochées, λ_R = (c - v)T_E, donc f_R = f_E × c/(c - v).",
              "f_R = 440 × 340/(340 - 25) = 440 × 340/315 ≈ 475 Hz.",
              "Éloignement : λ_R = (c + v)T_E, donc f_R = f_E × c/(c + v).",
              "f_R = 440 × 340/365 ≈ 410 Hz.",
              "Vérification : le son est plus aigu à l'approche (475 Hz > 440 Hz) et plus grave à l'éloignement (410 Hz < 440 Hz).",
              "Réponse : environ 475 Hz puis environ 410 Hz.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un train klaxonne à la fréquence f_E = 500 Hz en s'approchant à v = 30 m·s⁻¹ d'une personne immobile sur le quai. Calculer la fréquence perçue et le décalage Doppler. Donnée : c = 340 m·s⁻¹.",
              hint: "La source s'approche : le dénominateur est c - v.",
              solution: [
                "f_R = f_E × c/(c - v) = 500 × 340/310.",
                "f_R ≈ 548 Hz.",
                "Δf = f_R - f_E ≈ 548 - 500 = 48 Hz, positif car la source s'approche.",
                "Réponse : f_R ≈ 548 Hz et Δf ≈ + 48 Hz.",
              ],
            },
            {
              level: 2,
              statement: "Un véhicule muni d'un émetteur de fréquence f_E = 680 Hz s'approche d'un microphone fixe, qui enregistre une fréquence f_R = 720 Hz. Établir l'expression de la vitesse v du véhicule en fonction de c, f_E et f_R, puis calculer v en m·s⁻¹ et en km·h⁻¹. Donnée : c = 340 m·s⁻¹.",
              hint: "Partez de f_R = f_E × c/(c - v) et isolez v.",
              solution: [
                "f_R = f_E × c/(c - v), donc f_R(c - v) = f_E·c.",
                "f_R·c - f_R·v = f_E·c, d'où v = c(f_R - f_E)/f_R.",
                "v = 340 × (720 - 680)/720 = 340 × 40/720 ≈ 18,9 m·s⁻¹.",
                "En km·h⁻¹ : 18,9 × 3,6 ≈ 68 km·h⁻¹.",
                "Réponse : v = c(f_R - f_E)/f_R ≈ 18,9 m·s⁻¹, soit environ 68 km·h⁻¹.",
              ],
            },
            {
              level: 3,
              statement: "Dans le spectre de la lumière émise par l'hydrogène au laboratoire, la raie H-alpha a pour longueur d'onde λ_E = 656,3 nm. Dans le spectre d'une galaxie, cette raie est mesurée à λ_R = 658,5 nm. 1. Cette galaxie s'approche-t-elle ou s'éloigne-t-elle de la Terre ? Justifier. 2. On modélise la situation par un émetteur qui s'éloigne à la vitesse v d'un récepteur fixe. Montrer que λ_R = λ_E(c + v)/c, puis que v = c(λ_R - λ_E)/λ_E. 3. Calculer v. 4. Vérifier que v est très petite devant c. Donnée : c = 3,00 × 10⁸ m·s⁻¹.",
              hint: "Pendant une période T_E, la source s'éloigne de v·T_E : la distance entre deux crêtes devient (c + v)T_E. Rappel : λ_E = c·T_E.",
              solution: [
                "1. λ_R > λ_E : la raie est décalée vers le rouge, donc la galaxie s'éloigne de la Terre.",
                "2. Pendant T_E, la crête parcourt c·T_E et la source s'éloigne de v·T_E, donc λ_R = (c + v)T_E. Avec T_E = λ_E/c : λ_R = λ_E(c + v)/c.",
                "On en déduit λ_R/λ_E = 1 + v/c, donc v = c(λ_R - λ_E)/λ_E.",
                "3. v = 3,00 × 10⁸ × (658,5 - 656,3)/656,3 = 3,00 × 10⁸ × 2,2/656,3 ≈ 1,0 × 10⁶ m·s⁻¹.",
                "4. v/c ≈ 1,0 × 10⁶/3,00 × 10⁸ ≈ 3 × 10⁻³ : v est environ 300 fois plus petite que c.",
                "Réponse : la galaxie s'éloigne à environ 1,0 × 10⁶ m·s⁻¹, soit environ 1 000 km·s⁻¹.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui établissent la fréquence reçue quand l'émetteur s'approche d'un récepteur fixe.",
            items: [
              "La source émet deux crêtes successives séparées d'une durée T_E.",
              "Pendant T_E, la première crête parcourt la distance c·T_E.",
              "Pendant ce temps, la source, qui s'approche, parcourt v·T_E.",
              "La distance entre les deux crêtes devient λ_R = (c - v)·T_E.",
              "Le récepteur fixe perçoit la fréquence f_R = c/λ_R.",
              "On obtient f_R = f_E × c/(c - v), supérieure à f_E.",
            ],
          },
          quiz: [
            {
              q: "Une source sonore s'approche d'un observateur immobile. La fréquence perçue :",
              options: ["est inférieure à la fréquence émise", "est supérieure à la fréquence émise", "est égale à la fréquence émise", "est nulle"],
              answer: 1,
              why: "Les crêtes sont rapprochées devant la source : la longueur d'onde reçue diminue et la fréquence reçue augmente.",
            },
            {
              q: "Les raies du spectre d'une étoile sont décalées vers le rouge. On en déduit que l'étoile :",
              options: ["se rapproche de la Terre", "est plus chaude que le Soleil", "a une masse très grande", "s'éloigne de la Terre"],
              answer: 3,
              why: "Un décalage vers les grandes longueurs d'onde traduit un éloignement de l'émetteur.",
            },
            {
              q: "Pour un émetteur qui s'éloigne d'un récepteur fixe, la fréquence reçue vaut :",
              options: ["f_E × c/(c + v)", "f_E × c/(c - v)", "f_E × (c - v)/c", "f_E + v"],
              answer: 0,
              why: "La longueur d'onde reçue devient (c + v)T_E, donc f_R = c/((c + v)T_E).",
            },
            {
              q: "L'effet Doppler apparaît lorsque :",
              options: ["la source émet un son de fréquence très élevée", "l'onde rencontre un obstacle de petite taille", "la source et le récepteur sont en mouvement relatif", "le récepteur se trouve très loin d'une source fixe"],
              answer: 2,
              why: "Il faut que la distance entre l'émetteur et le récepteur varie au cours du temps.",
            },
            {
              q: "Une source de 1 000 Hz s'approche à 34 m·s⁻¹ d'un récepteur fixe (c = 340 m·s⁻¹). La fréquence reçue vaut environ :",
              options: ["909 Hz", "1 034 Hz", "1 100 Hz", "1 111 Hz"],
              answer: 3,
              why: "f_R = 1 000 × 340/306 ≈ 1 111 Hz ; 1 100 Hz n'est que l'approximation f_E(1 + v/c), et 909 Hz correspond à l'éloignement.",
            },
          ],
          trap: "Se tromper de signe dans le dénominateur : quand l'émetteur s'approche, c'est c - v (fréquence plus grande), et quand il s'éloigne, c'est c + v (fréquence plus petite).",
          method: "Après chaque calcul, vérifiez le sens physique : à l'approche, le son doit être plus aigu (f_R > f_E) ; à l'éloignement, plus grave. Si votre résultat contredit l'expérience de la sirène, le signe est faux.",
        },
      ],
    },
    /* ================================================================== */
    /* FORMER DES IMAGES, LA LUMIÈRE COMME FLUX DE PHOTONS                  */
    /* ================================================================== */
    {
      id: 'lumiere-photons',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'lunette-astronomique',
          title: 'La lunette astronomique',
          minutes: 30,
          objectives: [
            "Représenter le schéma d'une lunette afocale modélisée par deux lentilles minces convergentes et identifier l'objectif et l'oculaire.",
            "Représenter le faisceau lumineux à la sortie d'une lunette afocale pour un objet à l'infini.",
            "Établir l'expression du grossissement d'une lunette afocale : G = f'₁/f'₂.",
            "Exploiter les données caractéristiques d'une lunette commerciale.",
          ],
          course: [
            {
              heading: "Rappels sur la lentille mince convergente",
              paragraphs: [
                "Une lentille mince convergente est caractérisée par son centre optique O, son foyer objet F et son foyer image F', symétriques par rapport à O. Sa distance focale est f' = OF' (en mètres) et sa vergence C = 1/f', en dioptries (δ). Une lentille de focale 0,50 m a une vergence de 2,0 δ.",
                "Trois rayons particuliers permettent toutes les constructions : un rayon qui passe par O n'est pas dévié ; un rayon incident parallèle à l'axe optique émerge en passant par F' ; un rayon incident qui passe par F émerge parallèlement à l'axe optique.",
                "Un objet très éloigné (une étoile, la Lune) est dit « à l'infini » : les rayons issus d'un même point arrivent parallèles entre eux. Après la lentille, ils convergent en un point du plan focal image, le plan perpendiculaire à l'axe passant par F'. Inversement, un objet placé dans le plan focal objet donne une image à l'infini.",
              ],
              box: { label: "Repère", text: "Objet à l'infini : image dans le plan focal image. Objet dans le plan focal objet : image à l'infini. Vergence C = 1/f', en dioptries (δ), avec f' en mètres." },
            },
            {
              heading: "La lunette afocale : objectif et oculaire",
              paragraphs: [
                "Une lunette astronomique, telle que Kepler l'a décrite en 1611, est modélisée par deux lentilles minces convergentes de même axe optique. L'objectif L₁, tourné vers l'objet, a une grande distance focale f'₁ (souvent de l'ordre du mètre). L'oculaire L₂, placé contre l'œil, a une petite distance focale f'₂ (quelques millimètres à quelques centimètres).",
                "L'objectif donne d'un objet à l'infini une image intermédiaire A₁B₁ située dans son plan focal image. La lunette est dite afocale lorsque le foyer image F'₁ de l'objectif est confondu avec le foyer objet F₂ de l'oculaire : l'image intermédiaire se trouve alors dans le plan focal objet de l'oculaire, et l'oculaire en donne une image finale à l'infini.",
                "Avantage : l'œil normal observe une image à l'infini sans accommoder, donc sans fatigue. La longueur de la lunette afocale est O₁O₂ = f'₁ + f'₂. Pour un point objet à l'infini, le faisceau qui sort de la lunette est formé de rayons parallèles entre eux, mais inclinés différemment des rayons incidents.",
              ],
              box: { label: "Définition", text: "Lunette afocale : F'₁ (foyer image de l'objectif) est confondu avec F₂ (foyer objet de l'oculaire). Un objet à l'infini donne une image finale à l'infini ; la longueur de la lunette est f'₁ + f'₂." },
            },
            {
              heading: "Le grossissement G = f'₁/f'₂",
              paragraphs: [
                "On note α l'angle sous lequel on voit l'objet à l'œil nu (diamètre apparent) et α' l'angle sous lequel on voit son image à travers la lunette. Le grossissement est G = α'/α, sans unité. Il indique combien de fois l'objet paraît plus grand en angle.",
                "Démonstration : le rayon issu de B qui passe par O₁ n'est pas dévié et arrive en B₁. Dans le triangle O₁F'₁B₁, tan α = A₁B₁/f'₁. Le rayon issu de B₁ parallèle à l'axe ressort de l'oculaire par F'₂ ; dans le triangle correspondant, tan α' = A₁B₁/f'₂. Pour des angles petits exprimés en radians, tan α ≈ α et tan α' ≈ α', donc G = α'/α = f'₁/f'₂.",
                "Exemple : objectif de focale 900 mm et oculaire de focale 25 mm : G = 900/25 = 36. Changer d'oculaire change le grossissement : avec un oculaire de 10 mm, G = 90. L'image finale est renversée par rapport à l'objet, ce qui n'est pas gênant en astronomie.",
              ],
              box: { label: "Formule", text: "Grossissement d'une lunette afocale : G = α'/α = f'₁/f'₂ (approximation des petits angles, angles en radians). Image finale renversée." },
            },
          ],
          keyPoints: [
            "Lunette astronomique : deux lentilles convergentes, objectif (grande focale f'₁) et oculaire (petite focale f'₂).",
            "Afocale : F'₁ confondu avec F₂ ; l'image intermédiaire A₁B₁ est dans le plan focal image de l'objectif.",
            "Un objet à l'infini donne une image finale à l'infini : l'œil observe sans accommoder.",
            "Pour un point objet à l'infini, le faisceau émergent est formé de rayons parallèles entre eux.",
            "Grossissement : G = α'/α = f'₁/f'₂ ; l'image est renversée ; longueur f'₁ + f'₂.",
          ],
          example: {
            statement: "Une lunette afocale possède un objectif de focale f'₁ = 1,00 m et un oculaire de focale f'₂ = 25 mm. La Lune est vue à l'œil nu sous un diamètre apparent α = 9,0 × 10⁻³ rad. Calculer le grossissement, le diamètre apparent α' de l'image de la Lune et la longueur de la lunette.",
            solution: [
              "G = f'₁/f'₂ = 1,00/0,025 = 40.",
              "Par définition G = α'/α, donc α' = G × α = 40 × 9,0 × 10⁻³ = 0,36 rad.",
              "La lunette est afocale : O₁O₂ = f'₁ + f'₂ = 1,00 + 0,025 = 1,025 m.",
              "Réponse : G = 40, α' = 0,36 rad (environ 21°), longueur ≈ 1,03 m.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une lunette afocale est équipée d'un objectif de focale f'₁ = 800 mm et d'un oculaire de focale f'₂ = 16 mm. a) Calculer son grossissement. b) Calculer la distance entre les deux lentilles. c) Calculer la vergence de l'oculaire.",
              hint: "G = f'₁/f'₂ avec les deux focales dans la même unité ; la vergence s'obtient avec f' en mètres.",
              solution: [
                "a) G = 800/16 = 50.",
                "b) O₁O₂ = f'₁ + f'₂ = 800 + 16 = 816 mm.",
                "c) C₂ = 1/f'₂ = 1/0,016 ≈ 63 δ (62,5 δ).",
                "Réponse : G = 50 ; 816 mm ; environ 63 δ.",
              ],
            },
            {
              level: 2,
              statement: "La Lune a un diamètre apparent α = 9,0 × 10⁻³ rad. On l'observe avec une lunette afocale d'objectif f'₁ = 900 mm et d'oculaire f'₂ = 25 mm. a) Calculer la taille de l'image intermédiaire A₁B₁. b) Calculer α' à partir de A₁B₁, puis vérifier le résultat avec le grossissement.",
              hint: "Dans le triangle O₁F'₁B₁ : α ≈ A₁B₁/f'₁. De même, α' ≈ A₁B₁/f'₂.",
              solution: [
                "a) A₁B₁ = f'₁ × α = 0,900 × 9,0 × 10⁻³ = 8,1 × 10⁻³ m, soit 8,1 mm.",
                "b) α' = A₁B₁/f'₂ = 8,1 × 10⁻³/0,025 ≈ 0,32 rad.",
                "Vérification : G = 900/25 = 36 et α' = G × α = 36 × 9,0 × 10⁻³ ≈ 0,32 rad.",
                "Réponse : A₁B₁ = 8,1 mm et α' ≈ 0,32 rad.",
              ],
            },
            {
              level: 3,
              statement: "Un astronome amateur veut observer le disque de Jupiter, dont le diamètre apparent vaut α = 2,2 × 10⁻⁴ rad. Il estime que, pour distinguer des détails, l'image doit être vue sous un angle α' d'au moins 1,0 × 10⁻² rad. Sa lunette afocale a un objectif de focale f'₁ = 900 mm et il dispose de trois oculaires de focales 25 mm, 10 mm et 6 mm. 1. Rappeler la condition pour que la lunette soit afocale et en donner l'intérêt. 2. Calculer le grossissement minimal nécessaire. 3. Quels oculaires conviennent ? Lequel donne le grossissement suffisant le plus faible ? 4. Quelle est alors la longueur de la lunette ?",
              hint: "G = α'/α donne le grossissement minimal ; calculez ensuite G = f'₁/f'₂ pour chaque oculaire.",
              solution: [
                "1. F'₁ doit être confondu avec F₂ : l'image finale est à l'infini et l'œil normal l'observe sans accommoder.",
                "2. G_min = α'/α = 1,0 × 10⁻²/2,2 × 10⁻⁴ ≈ 45.",
                "3. Oculaire 25 mm : G = 36 (insuffisant) ; 10 mm : G = 90 ; 6 mm : G = 150. Les oculaires de 10 mm et 6 mm conviennent ; le 10 mm donne le grossissement suffisant le plus faible (90).",
                "4. O₁O₂ = 900 + 10 = 910 mm.",
                "Réponse : G ≥ 45 ; oculaire de 10 mm (G = 90) ; lunette de 910 mm.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément de la lunette à sa description.",
            pairs: [
              { left: "Objectif", right: "Lentille de grande focale, tournée vers l'objet" },
              { left: "Oculaire", right: "Lentille de petite focale, placée près de l'œil" },
              { left: "Lunette afocale", right: "F'₁ confondu avec F₂" },
              { left: "Image intermédiaire A₁B₁", right: "Dans le plan focal image de l'objectif" },
              { left: "Grossissement", right: "G = α'/α = f'₁/f'₂" },
              { left: "Vergence", right: "C = 1/f', en dioptries" },
            ],
          },
          quiz: [
            {
              q: "Dans une lunette afocale :",
              options: ["F'₁ et F₂ sont confondus", "f'₁ = f'₂", "F₁ et F'₂ sont confondus", "O₁ et F₂ sont confondus"],
              answer: 0,
              why: "Le foyer image de l'objectif coïncide avec le foyer objet de l'oculaire, ce qui renvoie l'image finale à l'infini.",
            },
            {
              q: "Objectif de focale 1 200 mm, oculaire de focale 30 mm. Le grossissement vaut :",
              options: ["0,025", "36", "40", "1 230"],
              answer: 2,
              why: "G = f'₁/f'₂ = 1 200/30 = 40 ; 1 230 mm est la longueur de la lunette.",
            },
            {
              q: "L'image donnée par une lunette astronomique est :",
              options: ["droite", "renversée", "plus petite que l'objet en angle", "située à 25 cm de l'œil"],
              answer: 1,
              why: "Les rayons croisent l'axe entre l'objectif et l'oculaire : l'image finale est renversée.",
            },
            {
              q: "Pour un point objet à l'infini, le faisceau qui sort d'une lunette afocale est :",
              options: ["convergent en F'₂", "divergent depuis O₂", "concentré sur l'oculaire", "formé de rayons parallèles entre eux"],
              answer: 3,
              why: "L'image finale est à l'infini : les rayons émergents issus d'un même point sont parallèles.",
            },
            {
              q: "Dans la démonstration de G = f'₁/f'₂, on remplace tan α par α :",
              options: ["car les angles sont petits (en rad)", "car tan α = α pour tout angle", "car l'objet est à l'infini, quels que soient les angles"],
              answer: 0,
              why: "L'approximation tan α ≈ α n'est valable que pour de petits angles exprimés en radians.",
            },
          ],
          trap: "Inverser objectif et oculaire, en écrivant G = f'₂/f'₁ : le grossissement doit être supérieur à 1, donc la grande focale (objectif) est au numérateur.",
          method: "Pour construire le faisceau émergent, tracez d'abord l'image intermédiaire B₁ avec le rayon non dévié par O₁, puis utilisez le rayon issu de B₁ qui passe par O₂ : tous les rayons émergents lui sont parallèles.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'effet-photoelectrique',
          title: 'Le photon et l\'effet photoélectrique',
          minutes: 35,
          objectives: [
            "Utiliser l'expression donnant l'énergie d'un photon : E = hν = hc/λ.",
            "Décrire l'effet photoélectrique, ses caractéristiques et son importance historique, et l'interpréter avec le modèle particulaire de la lumière.",
            "Établir, par un bilan d'énergie, la relation entre l'énergie cinétique des électrons et la fréquence.",
            "Citer des applications de l'interaction photon-matière et déterminer le rendement d'une cellule photovoltaïque.",
          ],
          course: [
            {
              heading: "Le photon, particule de lumière",
              paragraphs: [
                "La diffraction et les interférences montrent que la lumière est une onde électromagnétique. Mais certains phénomènes ne s'expliquent qu'en décrivant la lumière comme un flux de particules : les photons. Un photon n'a pas de masse, il se déplace à la vitesse de la lumière c et transporte une énergie qui ne dépend que de sa fréquence.",
                "L'énergie d'un photon vaut E = hν = hc/λ, où h = 6,63 × 10⁻³⁴ J·s est la constante de Planck, ν la fréquence (en Hz) et λ la longueur d'onde dans le vide (en m). Plus la longueur d'onde est courte, plus le photon est énergétique : un photon ultraviolet transporte plus d'énergie qu'un photon visible, lui-même plus énergétique qu'un photon infrarouge.",
                "Ces énergies sont très petites : on les exprime souvent en électronvolts, avec 1 eV = 1,60 × 10⁻¹⁹ J. Les photons visibles (de 400 nm à 800 nm environ) ont une énergie comprise entre environ 1,6 eV et 3,1 eV. Un repère utile : hc ≈ 1,99 × 10⁻²⁵ J·m, soit environ 1 240 eV·nm. Ce double aspect, onde et particule, est appelé dualité onde-particule.",
              ],
              box: { label: "Formule", text: "Énergie d'un photon : E = hν = hc/λ, avec h = 6,63 × 10⁻³⁴ J·s, c = 3,00 × 10⁸ m·s⁻¹, E en J, ν en Hz, λ en m. Conversion : 1 eV = 1,60 × 10⁻¹⁹ J." },
            },
            {
              heading: "L'effet photoélectrique et ses caractéristiques",
              paragraphs: [
                "L'effet photoélectrique est l'émission d'électrons par un métal éclairé par une lumière convenable. Il a été observé par Heinrich Hertz en 1887. Expérience classique : une plaque de zinc chargée négativement, reliée à un électroscope, se décharge lorsqu'on l'éclaire avec une lampe à ultraviolets, car elle perd des électrons. Éclairée par une lumière visible, même très intense, elle ne se décharge pas.",
                "Les observations sont les suivantes. Il existe pour chaque métal une fréquence seuil ν_s (donc une longueur d'onde seuil λ_s) : en dessous de ν_s, aucun électron n'est émis, quelle que soit l'intensité lumineuse. Au-dessus, l'émission est immédiate, même sous un faible éclairement, et le nombre d'électrons émis par seconde augmente avec l'intensité lumineuse.",
                "Le modèle ondulatoire ne l'explique pas : il prévoit qu'une onde suffisamment intense finirait toujours par apporter assez d'énergie aux électrons, quelle que soit sa fréquence. L'existence d'un seuil en fréquence contredit cette prévision.",
              ],
              box: { label: "À retenir", text: "Effet photoélectrique : émission d'électrons par un métal éclairé. Il n'a lieu que si ν ≥ ν_s (seuil propre au métal), quelle que soit l'intensité ; l'intensité ne fait varier que le nombre d'électrons émis." },
            },
            {
              heading: "L'interprétation d'Einstein et le bilan d'énergie",
              paragraphs: [
                "En 1905, Albert Einstein interprète l'effet photoélectrique : la lumière est formée de photons d'énergie hν, et chaque photon est absorbé en totalité par un seul électron. Pour sortir du métal, un électron doit recevoir au moins une énergie W, appelée travail d'extraction, propre au métal. Ce travail lui vaudra le prix Nobel de physique en 1921.",
                "Bilan d'énergie : si hν ≥ W, l'électron est extrait et l'énergie restante se retrouve sous forme d'énergie cinétique. Pour les électrons les moins liés, hν = W + E_c,max, soit E_c,max = hν - W. Si hν < W, aucun électron ne sort, même avec beaucoup de photons, car un électron n'absorbe pas l'énergie de plusieurs photons à la fois.",
                "Le seuil correspond à hν_s = W, soit ν_s = W/h et λ_s = hc/W. Pour le zinc, le travail d'extraction vaut environ 4,3 eV, donc λ_s ≈ 1 240/4,3 ≈ 290 nm : seuls les ultraviolets peuvent extraire des électrons, ce qui explique l'expérience de la plaque de zinc.",
              ],
              box: { label: "Formule", text: "Bilan d'énergie : hν = W + E_c,max, donc E_c,max = hν - W. Seuil : ν_s = W/h, λ_s = hc/W. Effet photoélectrique si et seulement si ν ≥ ν_s (λ ≤ λ_s)." },
            },
            {
              heading: "Applications et rendement d'une cellule photovoltaïque",
              paragraphs: [
                "L'interaction entre photons et matière a de nombreuses applications : cellules photoélectriques et capteurs de lumière (détection de passage, capteurs d'appareils photo), cellules photovoltaïques qui convertissent la lumière en énergie électrique, diodes électroluminescentes (DEL) qui font l'inverse en émettant un photon lors d'une transition d'électron, spectroscopies UV-visible et infrarouge.",
                "Dans une cellule photovoltaïque au silicium, un photon d'énergie suffisante (au moins environ 1,1 eV) libère un électron dans le matériau ; la structure de la cellule crée alors un courant. Le rendement de conversion est η = P_électrique/P_lumineuse. La puissance lumineuse reçue vaut P_lumineuse = E × S, où E est l'éclairement énergétique (en W·m⁻²) et S la surface de la cellule.",
                "Exemple : un panneau de 1,6 m² reçoit un éclairement de 1 000 W·m⁻² et fournit 320 W. P_lumineuse = 1 000 × 1,6 = 1 600 W et η = 320/1 600 = 0,20, soit 20 %. Le reste de l'énergie reçue est surtout dissipé sous forme thermique ou réfléchi.",
              ],
              box: { label: "Formule", text: "Rendement d'une cellule photovoltaïque : η = P_électrique/P_lumineuse, avec P_lumineuse = E × S (E : éclairement en W·m⁻², S : surface en m²)." },
            },
          ],
          keyPoints: [
            "Photon : particule sans masse, d'énergie E = hν = hc/λ ; h = 6,63 × 10⁻³⁴ J·s ; 1 eV = 1,60 × 10⁻¹⁹ J.",
            "Effet photoélectrique : extraction d'électrons d'un métal si ν ≥ ν_s, indépendamment de l'intensité lumineuse.",
            "Einstein (1905) : un photon est absorbé par un seul électron ; W est le travail d'extraction du métal.",
            "Bilan d'énergie : E_c,max = hν - W ; seuil λ_s = hc/W.",
            "L'intensité lumineuse modifie le nombre d'électrons émis, pas leur énergie cinétique maximale.",
            "Cellule photovoltaïque : η = P_électrique/P_lumineuse, avec P_lumineuse = E × S.",
          ],
          example: {
            statement: "Le travail d'extraction du zinc vaut W = 4,3 eV. On éclaire une plaque de zinc avec une radiation ultraviolette de longueur d'onde λ = 250 nm. Y a-t-il effet photoélectrique ? Si oui, calculer l'énergie cinétique maximale des électrons émis. Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J.",
            solution: [
              "Énergie d'un photon : E = hc/λ = 6,63 × 10⁻³⁴ × 3,00 × 10⁸/250 × 10⁻⁹ ≈ 7,96 × 10⁻¹⁹ J.",
              "En électronvolts : E = 7,96 × 10⁻¹⁹/1,60 × 10⁻¹⁹ ≈ 4,97 eV.",
              "E > W = 4,3 eV : un photon peut extraire un électron, il y a effet photoélectrique.",
              "Bilan d'énergie : E_c,max = E - W = 4,97 - 4,3 ≈ 0,7 eV.",
              "En joules : 0,67 × 1,60 × 10⁻¹⁹ ≈ 1,1 × 10⁻¹⁹ J.",
              "Réponse : oui ; E_c,max ≈ 0,7 eV, soit environ 1,1 × 10⁻¹⁹ J.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une lampe à vapeur de sodium émet une lumière jaune de longueur d'onde λ = 589 nm. Calculer l'énergie d'un photon de cette radiation en joules, puis en électronvolts. Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J.",
              hint: "E = hc/λ avec λ en mètres, puis divisez par 1,60 × 10⁻¹⁹ pour passer en eV.",
              solution: [
                "λ = 589 × 10⁻⁹ m.",
                "E = hc/λ = 6,63 × 10⁻³⁴ × 3,00 × 10⁸/589 × 10⁻⁹ ≈ 3,38 × 10⁻¹⁹ J.",
                "E = 3,38 × 10⁻¹⁹/1,60 × 10⁻¹⁹ ≈ 2,11 eV.",
                "Vérification : la valeur est bien comprise entre 1,6 eV et 3,1 eV, comme pour toute radiation visible.",
                "Réponse : E ≈ 3,38 × 10⁻¹⁹ J ≈ 2,11 eV.",
              ],
            },
            {
              level: 2,
              statement: "Un métal a un travail d'extraction W = 2,25 eV. a) Calculer sa longueur d'onde seuil λ_s. b) On l'éclaire avec une radiation de longueur d'onde 400 nm. Y a-t-il émission d'électrons ? Si oui, calculer E_c,max en eV et en J. c) On l'éclaire avec une radiation intense de longueur d'onde 600 nm. Que se passe-t-il ? Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J.",
              hint: "Convertissez W en joules, puis λ_s = hc/W. Comparez ensuite chaque longueur d'onde à λ_s.",
              solution: [
                "a) W = 2,25 × 1,60 × 10⁻¹⁹ = 3,60 × 10⁻¹⁹ J ; λ_s = hc/W = 1,989 × 10⁻²⁵/3,60 × 10⁻¹⁹ ≈ 5,5 × 10⁻⁷ m, soit environ 550 nm.",
                "b) 400 nm < λ_s : il y a effet photoélectrique. E = 1,989 × 10⁻²⁵/400 × 10⁻⁹ ≈ 4,97 × 10⁻¹⁹ J ≈ 3,11 eV.",
                "E_c,max = 3,11 - 2,25 ≈ 0,86 eV, soit 0,86 × 1,60 × 10⁻¹⁹ ≈ 1,4 × 10⁻¹⁹ J.",
                "c) 600 nm > λ_s : chaque photon n'apporte que 1,989 × 10⁻²⁵/600 × 10⁻⁹ ≈ 3,3 × 10⁻¹⁹ J ≈ 2,07 eV < W. Aucun électron n'est émis, même si la lumière est intense.",
                "Réponse : λ_s ≈ 550 nm ; E_c,max ≈ 0,86 eV à 400 nm ; pas d'effet à 600 nm.",
              ],
            },
            {
              level: 3,
              statement: "Un panneau photovoltaïque de surface S = 1,7 m² reçoit un éclairement énergétique E = 800 W·m⁻² et fournit une puissance électrique de 255 W. 1. Calculer la puissance lumineuse reçue puis le rendement du panneau. 2. On modélise la lumière reçue par une radiation unique de longueur d'onde 550 nm. Calculer l'énergie d'un photon, puis le nombre de photons reçus par seconde par le panneau. 3. Dans le silicium, un photon doit avoir une énergie d'au moins 1,1 eV pour libérer un électron. Calculer la longueur d'onde maximale utilisable et indiquer dans quel domaine elle se situe. 4. Proposer une raison pour laquelle le rendement est bien inférieur à 100 %. Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J.",
              hint: "Nombre de photons par seconde = puissance lumineuse divisée par l'énergie d'un photon.",
              solution: [
                "1. P_lumineuse = E × S = 800 × 1,7 = 1 360 W ; η = 255/1 360 ≈ 0,19, soit environ 19 %.",
                "2. E_photon = hc/λ = 1,989 × 10⁻²⁵/550 × 10⁻⁹ ≈ 3,6 × 10⁻¹⁹ J.",
                "N = 1 360/3,6 × 10⁻¹⁹ ≈ 3,8 × 10²¹ photons par seconde.",
                "3. λ_max = hc/E_min = 1,989 × 10⁻²⁵/(1,1 × 1,60 × 10⁻¹⁹) ≈ 1,1 × 10⁻⁶ m, soit environ 1 100 nm : proche infrarouge.",
                "4. Les photons d'énergie inférieure à 1,1 eV ne sont pas convertis, et l'énergie des photons en excès par rapport à 1,1 eV est en grande partie perdue sous forme thermique ; une partie de la lumière est aussi réfléchie.",
                "Réponse : η ≈ 19 % ; environ 3,8 × 10²¹ photons par seconde ; λ_max ≈ 1 100 nm.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : photons et effet photoélectrique.",
            statements: [
              { text: "Une lumière rouge très intense provoque l'effet photoélectrique sur le zinc.", true: false, why: "Chaque photon rouge a une énergie inférieure au travail d'extraction du zinc : l'intensité n'y change rien." },
              { text: "L'énergie d'un photon est proportionnelle à sa fréquence.", true: true, why: "E = hν." },
              { text: "Un photon ultraviolet transporte plus d'énergie qu'un photon infrarouge.", true: true, why: "Sa longueur d'onde est plus courte, donc E = hc/λ est plus grande." },
              { text: "Augmenter l'intensité lumineuse augmente l'énergie cinétique maximale des électrons émis.", true: false, why: "Elle augmente le nombre d'électrons émis ; E_c,max = hν - W ne dépend que de la fréquence." },
              { text: "Le travail d'extraction dépend du métal éclairé.", true: true, why: "Chaque métal retient plus ou moins ses électrons, d'où un seuil propre à chacun." },
              { text: "Un photon a une masse très faible mais non nulle.", true: false, why: "Le photon est une particule sans masse." },
              { text: "Une DEL convertit de l'énergie électrique en photons.", true: true, why: "C'est le processus inverse de celui de la cellule photovoltaïque." },
            ],
          },
          quiz: [
            {
              q: "La constante de Planck h s'exprime en :",
              options: ["J", "J·s⁻¹", "W", "J·s"],
              answer: 3,
              why: "E = hν avec E en J et ν en s⁻¹, donc h = E/ν s'exprime en J·s.",
            },
            {
              q: "Quelle est, environ, l'énergie d'un photon de longueur d'onde 620 nm ?",
              options: ["0,5 eV", "2,0 eV", "3,2 eV", "620 eV"],
              answer: 1,
              why: "E ≈ 1 240/620 ≈ 2,0 eV.",
            },
            {
              q: "Au-dessus du seuil, augmenter l'intensité lumineuse :",
              options: ["augmente l'énergie portée par chaque photon", "abaisse la fréquence seuil", "augmente le nombre d'électrons émis", "supprime le travail d'extraction"],
              answer: 2,
              why: "Plus de photons arrivent par seconde, donc plus d'électrons sont extraits, chacun avec la même énergie cinétique maximale.",
            },
            {
              q: "L'énergie cinétique maximale d'un électron extrait vaut :",
              options: ["hν - W", "hν + W", "W - hν", "hν × W"],
              answer: 0,
              why: "Bilan d'énergie : l'énergie du photon sert à extraire l'électron (W), le reste devient énergie cinétique.",
            },
            {
              q: "Qui a interprété l'effet photoélectrique à l'aide des photons ?",
              options: ["Hertz, en 1887", "Einstein, en 1905", "Newton, en 1704", "Doppler, en 1842"],
              answer: 1,
              why: "Hertz a observé l'effet en 1887 ; Einstein l'a interprété en 1905 avec les quanta de lumière.",
            },
          ],
          trap: "Croire qu'une lumière plus intense peut compenser une fréquence trop faible : sous le seuil, aucun électron n'est émis, car chaque électron n'absorbe qu'un seul photon.",
          method: "Calculez toujours l'énergie d'un photon en joules puis en électronvolts, et comparez-la au travail d'extraction dans la même unité ; contrôlez avec le repère E (en eV) ≈ 1 240/λ (en nm).",
        },
      ],
    },
    /* ================================================================== */
    /* DYNAMIQUE D'UN SYSTÈME ÉLECTRIQUE                                    */
    /* ================================================================== */
    {
      id: 'circuit-rc',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'condensateur',
          title: 'Le condensateur : charge et capacité',
          minutes: 30,
          objectives: [
            "Identifier des situations variées où il y a accumulation de charges de signes opposés sur des surfaces en regard.",
            "Relier l'intensité d'un courant au débit de charges : i = dq/dt.",
            "Utiliser la relation q = C·u et citer des ordres de grandeur de capacités usuelles.",
            "Expliquer le principe d'un capteur capacitif.",
          ],
          course: [
            {
              heading: "Des charges opposées sur des surfaces en regard",
              paragraphs: [
                "Un condensateur est formé de deux conducteurs, les armatures, placés face à face et séparés par un isolant, le diélectrique (air, film plastique, céramique...). Lorsqu'on le relie à un générateur, des électrons quittent une armature et s'accumulent sur l'autre : l'une porte une charge q, l'autre une charge -q. Aucun électron ne traverse l'isolant.",
                "Ce phénomène d'accumulation de charges opposées sur des surfaces en regard se rencontre ailleurs : entre la base d'un nuage d'orage et le sol, entre le doigt et la surface d'un écran tactile capacitif, ou de part et d'autre de la membrane d'une cellule. Dans tous ces cas, il apparaît une tension entre les deux surfaces chargées.",
              ],
              box: { label: "Définition", text: "Un condensateur est constitué de deux armatures conductrices séparées par un isolant. Chargé, il porte les charges q et -q sur ses armatures ; sa charge est q, exprimée en coulombs (C)." },
            },
            {
              heading: "L'intensité du courant, un débit de charges",
              paragraphs: [
                "L'intensité du courant électrique est le débit de charges électriques : la quantité de charge qui traverse une section du conducteur par unité de temps. Pour un courant variable, on écrit i = dq/dt, où q est la charge de l'armature vers laquelle le courant i est orienté. L'intensité s'exprime en ampères (A), soit en coulombs par seconde.",
                "Si le courant d'intensité I est constant, la charge augmente proportionnellement au temps : q = I·t (en partant d'un condensateur déchargé). Par exemple, un courant constant de 20 μA pendant 30 s apporte une charge q = 20 × 10⁻⁶ × 30 = 6,0 × 10⁻⁴ C.",
                "Lorsque la tension aux bornes du condensateur ne varie plus, la charge ne varie plus et i = 0 : en régime permanent continu, un condensateur se comporte comme un interrupteur ouvert.",
              ],
              box: { label: "Formule", text: "i = dq/dt (i en A, q en C, t en s). À courant constant I : q = I·t pour un condensateur initialement déchargé." },
            },
            {
              heading: "La relation q = C·u et la capacité",
              paragraphs: [
                "Expérimentalement, la charge q d'un condensateur est proportionnelle à la tension u à ses bornes : q = C·u. Le coefficient C est la capacité du condensateur, exprimée en farads (F). Elle mesure l'aptitude du condensateur à stocker des charges sous une tension donnée.",
                "Le farad est une très grande unité. Les capacités usuelles vont du picofarad (pF, 10⁻¹² F) pour les capteurs et circuits électroniques, au nanofarad et au microfarad (μF, 10⁻⁶ F) pour le filtrage et la temporisation, jusqu'au millifarad. Les supercondensateurs atteignent plusieurs centaines, voire milliers de farads.",
                "En convention récepteur, en combinant i = dq/dt et q = C·u, on obtient i = C·du/dt. Une charge à courant constant I donne donc une tension qui croît linéairement : u = I·t/C. La pente de la droite u(t) vaut I/C, ce qui permet de mesurer C. Le condensateur stocke de l'énergie, qui vaut ½·C·u² : c'est le principe du flash d'un appareil photo.",
              ],
              box: { label: "Formule", text: "q = C·u (q en C, C en F, u en V). En convention récepteur : i = C·du/dt. Énergie stockée : ½·C·u²." },
            },
            {
              heading: "Les capteurs capacitifs",
              paragraphs: [
                "La capacité dépend de la géométrie du condensateur et du diélectrique : pour un condensateur plan, elle augmente avec la surface S des armatures en regard et diminue quand leur écart e augmente. On l'admet sous la forme C = ε·S/e, où ε dépend de l'isolant.",
                "Un capteur capacitif exploite cette dépendance : une grandeur physique (position, pression, présence d'un doigt, humidité) modifie la géométrie ou le diélectrique, donc la capacité, et le circuit détecte ce changement. Les écrans tactiles des smartphones, les claviers capacitifs, certains microphones et les accéléromètres des téléphones fonctionnent ainsi.",
                "Si le condensateur, chargé puis isolé, garde une charge q constante, une variation de C entraîne une variation de tension u = q/C, facile à mesurer. S'il est relié à un générateur, c'est sa charge qui varie, et donc la durée de sa charge ou de sa décharge.",
              ],
            },
          ],
          keyPoints: [
            "Condensateur : deux armatures conductrices séparées par un isolant, portant les charges q et -q.",
            "Intensité : i = dq/dt ; à courant constant, q = I·t.",
            "Relation charge-tension : q = C·u, capacité C en farads (F).",
            "Ordres de grandeur : du pF au mF pour les composants usuels, jusqu'à des milliers de F pour les supercondensateurs.",
            "En convention récepteur : i = C·du/dt ; en régime permanent continu, i = 0.",
            "Capteur capacitif : la grandeur mesurée modifie C, ce qui modifie la tension ou la durée de charge.",
          ],
          example: {
            statement: "Un condensateur de capacité C = 100 μF, initialement déchargé, est chargé par un générateur de courant d'intensité constante I = 20 μA. Calculer la charge et la tension du condensateur au bout de 30 s.",
            solution: [
              "À courant constant, la charge vaut q = I·t = 20 × 10⁻⁶ × 30 = 6,0 × 10⁻⁴ C.",
              "D'après q = C·u, u = q/C = 6,0 × 10⁻⁴/100 × 10⁻⁶ = 6,0 V.",
              "On vérifie la cohérence : u = I·t/C augmente linéairement avec le temps, de 0,20 V par seconde.",
              "Réponse : q = 6,0 × 10⁻⁴ C et u = 6,0 V.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Un condensateur de capacité 2,2 μF est chargé sous une tension de 12 V. Calculer sa charge. b) Un autre condensateur porte une charge de 0,50 mC sous une tension de 5,0 V. Calculer sa capacité.",
              hint: "Utilisez q = C·u en convertissant μF et mC en unités du système international.",
              solution: [
                "a) q = C·u = 2,2 × 10⁻⁶ × 12 ≈ 2,6 × 10⁻⁵ C, soit 26 μC.",
                "b) C = q/u = 0,50 × 10⁻³/5,0 = 1,0 × 10⁻⁴ F.",
                "Réponse : a) q ≈ 26 μC ; b) C = 1,0 × 10⁻⁴ F, soit 100 μF.",
              ],
            },
            {
              level: 2,
              statement: "On charge un condensateur initialement déchargé avec un courant d'intensité constante I = 0,10 mA. La tension à ses bornes passe de 0 V à 5,0 V en 10 s, en suivant une droite. a) Calculer la pente du/dt de la droite. b) En déduire la capacité C. c) Au bout de combien de temps la tension atteindra-t-elle 8,0 V ?",
              hint: "À courant constant, i = C·du/dt donne C = I/(du/dt).",
              solution: [
                "a) du/dt = 5,0/10 = 0,50 V·s⁻¹.",
                "b) C = I/(du/dt) = 0,10 × 10⁻³/0,50 = 2,0 × 10⁻⁴ F, soit 200 μF.",
                "c) u = (I/C)·t, donc t = u/(du/dt) = 8,0/0,50 = 16 s.",
                "Réponse : 0,50 V·s⁻¹ ; C = 200 μF ; t = 16 s.",
              ],
            },
            {
              level: 3,
              statement: "Une touche de clavier capacitif est modélisée par un condensateur plan dont les armatures ont une surface en regard S = 1,0 cm², séparées par une couche d'air d'épaisseur e = 0,10 mm. On admet que C = ε₀·S/e, avec ε₀ = 8,85 × 10⁻¹² F·m⁻¹. 1. Calculer la capacité au repos. 2. On charge ce condensateur sous 3,0 V, puis on l'isole : sa charge reste constante. Calculer cette charge. 3. Lorsqu'on appuie sur la touche, l'épaisseur passe à 0,080 mm. Calculer la nouvelle capacité, puis la nouvelle tension. 4. Expliquer comment le circuit détecte l'appui.",
              hint: "Convertissez S en m² et e en m. La charge étant constante, u' = q/C'.",
              solution: [
                "1. S = 1,0 × 10⁻⁴ m² et e = 1,0 × 10⁻⁴ m : C = 8,85 × 10⁻¹² × 1,0 × 10⁻⁴/1,0 × 10⁻⁴ ≈ 8,9 × 10⁻¹² F, soit 8,9 pF.",
                "2. q = C·u = 8,85 × 10⁻¹² × 3,0 ≈ 2,7 × 10⁻¹¹ C.",
                "3. C' = 8,85 × 10⁻¹² × 1,0 × 10⁻⁴/0,80 × 10⁻⁴ ≈ 1,1 × 10⁻¹¹ F, soit 11 pF : la capacité augmente quand e diminue.",
                "u' = q/C' = (C/C')·u = (0,080/0,10) × 3,0 = 2,4 V.",
                "4. L'appui fait passer la tension de 3,0 V à 2,4 V : le circuit mesure cette baisse de tension et en déduit que la touche est enfoncée.",
                "Réponse : C ≈ 8,9 pF ; q ≈ 2,7 × 10⁻¹¹ C ; C' ≈ 11 pF et u' = 2,4 V.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque relation ou terme à sa signification.",
            pairs: [
              { left: "q = C·u", right: "Relation entre la charge et la tension" },
              { left: "i = dq/dt", right: "L'intensité, un débit de charges" },
              { left: "Farad (F)", right: "Unité de la capacité" },
              { left: "Diélectrique", right: "Isolant qui sépare les armatures" },
              { left: "Supercondensateur", right: "Capacité pouvant dépasser mille farads" },
              { left: "½·C·u²", right: "Énergie stockée par le condensateur" },
            ],
          },
          quiz: [
            {
              q: "La capacité d'un condensateur s'exprime en :",
              options: ["coulombs (C)", "volts (V)", "farads (F)", "ampères (A)"],
              answer: 2,
              why: "C = q/u s'exprime en coulombs par volt, c'est-à-dire en farads.",
            },
            {
              q: "En régime permanent continu, l'intensité du courant dans la branche d'un condensateur :",
              options: ["est nulle", "est maximale", "est égale à C·u", "change de signe en permanence"],
              answer: 0,
              why: "La tension ne varie plus, donc i = C·du/dt = 0 : le condensateur se comporte comme un interrupteur ouvert.",
            },
            {
              q: "Un condensateur de 10 μF est chargé sous 5,0 V. Sa charge vaut :",
              options: ["2,0 μC", "0,50 μC", "5,0 × 10⁻⁶ C", "5,0 × 10⁻⁵ C"],
              answer: 3,
              why: "q = C·u = 10 × 10⁻⁶ × 5,0 = 5,0 × 10⁻⁵ C.",
            },
            {
              q: "Lors d'une charge à courant constant, la tension aux bornes du condensateur est une fonction du temps :",
              options: ["exponentielle croissante", "linéaire", "constante et égale à E", "sinusoïdale"],
              answer: 1,
              why: "u = I·t/C : la tension croît proportionnellement au temps.",
            },
            {
              q: "La charge d'une armature varie de 30 μC en 2,0 ms. L'intensité moyenne vaut :",
              options: ["60 nA", "1,5 mA", "15 mA", "0,15 A"],
              answer: 2,
              why: "i = Δq/Δt = 30 × 10⁻⁶/2,0 × 10⁻³ = 1,5 × 10⁻² A = 15 mA.",
            },
          ],
          trap: "Oublier les préfixes : un condensateur de 100 μF a une capacité de 1,0 × 10⁻⁴ F, et non de 100 F ; une erreur de préfixe fausse le résultat d'un facteur un million.",
          method: "Écrivez systématiquement les capacités en puissance de dix avant de calculer (p = 10⁻¹², n = 10⁻⁹, μ = 10⁻⁶, m = 10⁻³), puis vérifiez que le résultat a un ordre de grandeur plausible pour un composant usuel.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'circuit-rc',
          title: 'Charge et décharge dans un circuit RC',
          minutes: 35,
          objectives: [
            "Établir et résoudre l'équation différentielle vérifiée par la tension aux bornes d'un condensateur lors de sa charge par une source idéale de tension.",
            "Établir et résoudre l'équation différentielle dans le cas de sa décharge.",
            "Déterminer le temps caractéristique τ = RC à partir d'un enregistrement.",
            "Expliquer le comportement de la tension aux bornes d'un condensateur dans le cas des capteurs capacitifs.",
          ],
          course: [
            {
              heading: "Le circuit RC soumis à un échelon de tension",
              paragraphs: [
                "Un dipôle RC est l'association en série d'un conducteur ohmique de résistance R et d'un condensateur de capacité C. On le relie, à l'instant t = 0, à une source idéale de tension E (le condensateur étant initialement déchargé) : c'est un échelon de tension. On enregistre la tension u_C aux bornes du condensateur, par exemple avec une carte d'acquisition ou un microcontrôleur.",
                "On oriente le circuit et on représente les tensions en convention récepteur. La loi des mailles donne E = u_R + u_C. La loi d'Ohm donne u_R = R·i, et le condensateur impose i = dq/dt = C·du_C/dt. La tension aux bornes d'un condensateur ne peut pas varier brutalement : elle est continue, donc u_C(0) = 0 au début de la charge.",
              ],
              box: { label: "À retenir", text: "Loi des mailles : E = R·i + u_C, avec i = C·du_C/dt. La tension u_C est une fonction continue du temps : sa valeur juste après la fermeture de l'interrupteur est égale à sa valeur juste avant." },
            },
            {
              heading: "L'équation différentielle de la charge et sa solution",
              paragraphs: [
                "En remplaçant i, on obtient RC·du_C/dt + u_C = E, soit du_C/dt + u_C/τ = E/τ, avec τ = RC. C'est une équation différentielle linéaire du premier ordre, de la forme y' = ay + b étudiée en mathématiques, dont les solutions s'écrivent u_C(t) = A + B·exp(-t/τ).",
                "Les constantes se déterminent par les conditions physiques. Quand t devient grand, exp(-t/τ) tend vers 0 et u_C tend vers A ; or en régime permanent du_C/dt = 0, donc u_C = E : A = E. La condition initiale u_C(0) = 0 donne A + B = 0, donc B = -E. Finalement, u_C(t) = E(1 - exp(-t/τ)).",
                "On en déduit l'intensité : i = C·du_C/dt = (E/R)·exp(-t/τ). Elle vaut E/R à l'instant initial et décroît vers 0 : le courant ne circule que pendant la charge.",
              ],
              box: { label: "Formule", text: "Charge : RC·du_C/dt + u_C = E, de solution u_C(t) = E(1 - exp(-t/τ)) avec τ = RC ; intensité i(t) = (E/R)·exp(-t/τ)." },
            },
            {
              heading: "La décharge du condensateur",
              paragraphs: [
                "On considère maintenant un condensateur chargé sous la tension E, que l'on relie à t = 0 à un conducteur ohmique seul (le générateur est retiré du circuit). La loi des mailles s'écrit R·i + u_C = 0, d'où RC·du_C/dt + u_C = 0.",
                "Les solutions sont de la forme u_C(t) = B·exp(-t/τ), et la condition initiale u_C(0) = E donne B = E. Ainsi, u_C(t) = E·exp(-t/τ) : la tension décroît exponentiellement vers 0. L'intensité i = C·du_C/dt = -(E/R)·exp(-t/τ) est négative : le courant circule dans le sens opposé à celui de la charge.",
              ],
              box: { label: "Formule", text: "Décharge : RC·du_C/dt + u_C = 0, de solution u_C(t) = E·exp(-t/τ) ; intensité i(t) = -(E/R)·exp(-t/τ)." },
            },
            {
              heading: "Le temps caractéristique τ = RC",
              paragraphs: [
                "Le produit τ = RC s'exprime en secondes (des ohms multipliés par des farads donnent des secondes). Il fixe la rapidité de la charge et de la décharge : plus R ou C est grand, plus le condensateur met de temps à se charger. Par exemple, R = 10 kΩ et C = 100 μF donnent τ = 10 × 10³ × 100 × 10⁻⁶ = 1,0 s.",
                "Trois méthodes permettent de lire τ sur un enregistrement. À t = τ, u_C = E(1 - e⁻¹) ≈ 0,63E pendant la charge, et u_C = E·e⁻¹ ≈ 0,37E pendant la décharge. La tangente à la courbe à l'origine coupe l'asymptote (u_C = E pour la charge, u_C = 0 pour la décharge) à l'abscisse t = τ. Enfin, après 5τ, u_C atteint plus de 99 % de sa valeur finale : on considère que le régime permanent est atteint.",
                "Dans un capteur capacitif relié à un circuit RC, la grandeur mesurée modifie C, donc τ : mesurer la durée de charge permet de déterminer C, puis la grandeur. Les minuteries et temporisations exploitent aussi la durée de charge d'un condensateur.",
              ],
              box: { label: "Repère", text: "τ = RC, en secondes. Charge : u_C(τ) ≈ 0,63E ; décharge : u_C(τ) ≈ 0,37E. Tangente à l'origine : coupe l'asymptote en t = τ. Régime permanent atteint au bout d'environ 5τ." },
            },
          ],
          keyPoints: [
            "Loi des mailles et i = C·du_C/dt donnent RC·du_C/dt + u_C = E (charge) ou = 0 (décharge).",
            "Charge : u_C(t) = E(1 - exp(-t/τ)) ; décharge : u_C(t) = E·exp(-t/τ).",
            "Temps caractéristique : τ = RC, en secondes.",
            "À t = τ : 63 % de E en charge, 37 % de E en décharge ; régime permanent après environ 5τ.",
            "u_C est continue ; l'intensité, elle, peut varier brutalement (E/R à t = 0 lors de la charge).",
          ],
          example: {
            statement: "Un condensateur de capacité C = 100 μF, initialement déchargé, est chargé à travers une résistance R = 10 kΩ par une source idéale de tension E = 5,0 V. Calculer τ, la tension u_C à t = 1,0 s, puis la date à laquelle u_C atteint 4,0 V.",
            solution: [
              "τ = RC = 10 × 10³ × 100 × 10⁻⁶ = 1,0 s.",
              "Charge : u_C(t) = E(1 - exp(-t/τ)). À t = 1,0 s = τ : u_C = 5,0 × (1 - e⁻¹) ≈ 5,0 × 0,632 ≈ 3,2 V.",
              "Pour u_C = 4,0 V : 1 - exp(-t/τ) = 4,0/5,0 = 0,80, donc exp(-t/τ) = 0,20.",
              "On passe au logarithme népérien : -t/τ = ln(0,20), donc t = -τ·ln(0,20) = τ·ln(5).",
              "t = 1,0 × ln(5) ≈ 1,6 s.",
              "Réponse : τ = 1,0 s ; u_C(1,0 s) ≈ 3,2 V ; u_C = 4,0 V à t ≈ 1,6 s.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un circuit RC comporte une résistance R = 4,7 kΩ et un condensateur de capacité C = 220 nF. Calculer le temps caractéristique τ, puis la durée au bout de laquelle on peut considérer la charge terminée.",
              hint: "τ = RC avec R en ohms et C en farads ; le régime permanent est atteint au bout d'environ 5τ.",
              solution: [
                "τ = RC = 4,7 × 10³ × 220 × 10⁻⁹ ≈ 1,0 × 10⁻³ s.",
                "Charge terminée au bout de 5τ ≈ 5,2 × 10⁻³ s.",
                "Réponse : τ ≈ 1,0 ms ; charge terminée au bout d'environ 5 ms.",
              ],
            },
            {
              level: 2,
              statement: "Un condensateur de capacité C = 470 μF, chargé sous E = 12 V, se décharge à partir de t = 0 dans une résistance R = 1,0 kΩ. a) Calculer τ. b) Calculer la tension u_C à t = 1,0 s. c) Au bout de combien de temps la tension vaut-elle 6,0 V ?",
              hint: "Décharge : u_C(t) = E·exp(-t/τ). Pour la question c), isolez exp(-t/τ) puis utilisez le logarithme népérien.",
              solution: [
                "a) τ = RC = 1,0 × 10³ × 470 × 10⁻⁶ = 0,47 s.",
                "b) u_C(1,0) = 12 × exp(-1,0/0,47) ≈ 12 × 0,119 ≈ 1,4 V.",
                "c) 12·exp(-t/τ) = 6,0, donc exp(-t/τ) = 0,50 et t = τ·ln(2).",
                "t = 0,47 × 0,693 ≈ 0,33 s.",
                "Réponse : τ = 0,47 s ; u_C ≈ 1,4 V à 1,0 s ; 6,0 V au bout d'environ 0,33 s.",
              ],
            },
            {
              level: 3,
              statement: "Pour déterminer la capacité C d'un capteur, on le charge à travers une résistance R = 2,2 kΩ avec une source idéale de tension E = 6,0 V ; le condensateur est initialement déchargé. 1. À l'aide de la loi des mailles, établir l'équation différentielle vérifiée par u_C. 2. Vérifier que u_C(t) = A + B·exp(-t/τ) est solution pour τ = RC, puis déterminer A et B. 3. L'enregistrement montre que u_C atteint 3,8 V à t = 2,2 ms. Justifier que cette date est égale à τ, puis en déduire C. 4. Sous l'effet de l'humidité, la capacité du capteur augmente de 20 %. Comment évolue la durée de charge ?",
              hint: "Calculez le rapport 3,8/6,0 et comparez-le à 1 - e⁻¹ ≈ 0,63.",
              solution: [
                "1. E = u_R + u_C = R·i + u_C avec i = C·du_C/dt, donc RC·du_C/dt + u_C = E.",
                "2. du_C/dt = -(B/τ)·exp(-t/τ) ; RC·du_C/dt + u_C = -B·exp(-t/τ) + A + B·exp(-t/τ) = A. L'équation est vérifiée si A = E = 6,0 V. Condition initiale u_C(0) = A + B = 0, donc B = -E = -6,0 V.",
                "3. 3,8/6,0 ≈ 0,63 = 1 - e⁻¹ : la date correspond à t = τ, donc τ = 2,2 ms.",
                "C = τ/R = 2,2 × 10⁻³/2,2 × 10³ = 1,0 × 10⁻⁶ F, soit 1,0 μF.",
                "4. τ = RC est proportionnel à C : τ passe à 1,2 × 2,2 ≈ 2,6 ms ; la charge est 20 % plus lente, ce que le circuit peut mesurer.",
                "Réponse : RC·du_C/dt + u_C = E ; u_C = 6,0(1 - exp(-t/τ)) ; C = 1,0 μF ; τ passe à environ 2,6 ms.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'étude de la charge d'un condensateur.",
            items: [
              "Orienter le circuit et représenter les tensions en convention récepteur.",
              "Écrire la loi des mailles : E = u_R + u_C.",
              "Remplacer u_R par R·i et i par C·du_C/dt.",
              "Obtenir l'équation RC·du_C/dt + u_C = E.",
              "Écrire la forme des solutions u_C = A + B·exp(-t/τ), avec τ = RC.",
              "Trouver A par le régime permanent et B par la condition initiale u_C(0) = 0.",
            ],
          },
          quiz: [
            {
              q: "Un circuit RC a R = 1,0 kΩ et C = 1,0 μF. Son temps caractéristique vaut :",
              options: ["1,0 s", "1,0 ms", "1,0 μs", "1 000 s"],
              answer: 1,
              why: "τ = RC = 1,0 × 10³ × 1,0 × 10⁻⁶ = 1,0 × 10⁻³ s.",
            },
            {
              q: "Lors de la charge, à la date t = τ, la tension u_C vaut environ :",
              options: ["0,37E", "0,50E", "0,99E", "0,63E"],
              answer: 3,
              why: "u_C(τ) = E(1 - e⁻¹) ≈ 0,63E ; 0,37E correspond à la décharge.",
            },
            {
              q: "Au bout d'une durée de 5τ, le condensateur est considéré comme :",
              options: ["chargé (u_C ≈ E)", "à moitié chargé", "complètement déchargé", "en court-circuit"],
              answer: 0,
              why: "1 - exp(-5) ≈ 0,993 : plus de 99 % de la tension finale est atteinte.",
            },
            {
              q: "Lors de la décharge, la tension aux bornes du condensateur s'écrit :",
              options: ["E(1 - exp(-t/τ))", "E·exp(t/τ)", "E·exp(-t/τ)", "E·t/τ"],
              answer: 2,
              why: "La solution de RC·du_C/dt + u_C = 0 avec u_C(0) = E est E·exp(-t/τ).",
            },
            {
              q: "Si l'on double la résistance R, la charge du condensateur est :",
              options: ["deux fois plus rapide", "deux fois plus lente", "inchangée"],
              answer: 1,
              why: "τ = RC double : il faut deux fois plus de temps pour atteindre le même pourcentage de E.",
            },
          ],
          trap: "Croire que la tension u_C peut sauter brutalement à la fermeture de l'interrupteur : elle est continue (u_C(0) = 0 en début de charge), alors que l'intensité, elle, passe brusquement de 0 à E/R.",
          method: "Pour lire τ sur une courbe, utilisez deux méthodes et comparez : le point à 63 % (ou 37 %) de E et l'intersection de la tangente à l'origine avec l'asymptote. Si elles concordent, votre lecture est fiable.",
        },
      ],
    },
    /* ================================================================== */
    /* PRÉPARER L'ÉPREUVE DU BAC                                            */
    /* ================================================================== */
    {
      id: 'bac-physique-chimie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'methode-epreuve-ecrite',
          title: 'L\'épreuve écrite : lire l\'énoncé et rédiger',
          minutes: 25,
          objectives: [
            "Connaître l'organisation de l'épreuve de spécialité physique-chimie du baccalauréat.",
            "Interpréter les verbes de consigne d'un sujet (citer, calculer, établir, montrer, justifier, estimer).",
            "Rédiger une réponse complète : expression littérale, application numérique, unité et chiffres significatifs.",
            "Contrôler un résultat par l'analyse dimensionnelle et l'ordre de grandeur.",
          ],
          course: [
            {
              heading: "L'épreuve en bref",
              paragraphs: [
                "L'épreuve terminale de spécialité physique-chimie comporte une partie écrite de 3 h 30 et une partie pratique d'une heure, l'évaluation des compétences expérimentales (ECE). La partie écrite est notée sur 20 puis ramenée à 16 points, la partie pratique est notée sur 20 puis ramenée à 4 points : la note de l'épreuve est donc sur 20, avec un coefficient 16 dans le calcul du baccalauréat.",
                "Le sujet écrit comporte plusieurs exercices indépendants, qui portent sur le programme de terminale et mobilisent les acquis des années précédentes. Chaque exercice s'ouvre sur un contexte (une situation réelle, une expérience, un document scientifique), donne les données utiles et pose une série de questions dont le barème est indiqué. Une annexe est parfois à rendre avec la copie. La mention en tête du sujet précise si la calculatrice est autorisée, en mode examen.",
                "Les questions évaluent les compétences de la démarche scientifique : s'approprier une situation, analyser et raisonner, réaliser des calculs, valider un résultat, communiquer clairement. Une réponse juste mais non justifiée ne rapporte qu'une partie des points.",
              ],
              box: { label: "Repère", text: "Partie écrite : 3 h 30, notée sur 20 puis ramenée à 16 points. Partie pratique (ECE) : 1 h, ramenée à 4 points. Coefficient de l'épreuve : 16." },
            },
            {
              heading: "Lire l'énoncé et décoder les verbes de consigne",
              paragraphs: [
                "Commencez par lire tout l'exercice, documents et données compris, avant de répondre à la première question. Soulignez les données numériques, repérez les grandeurs demandées et les hypothèses de modélisation (« on néglige les frottements », « la source est supposée isotrope »). Les questions s'enchaînent souvent : un résultat intermédiaire donné dans l'énoncé permet de continuer même si l'on a bloqué avant.",
                "Les verbes de consigne disent ce qui est attendu. « Citer » ou « Définir » : restituer une connaissance, sans démonstration. « Calculer » ou « Déterminer » : obtenir une valeur, en montrant la relation utilisée. « Établir », « Montrer », « Démontrer » : aboutir, par un raisonnement fondé sur des lois, à un résultat parfois donné dans l'énoncé. « Justifier » : donner l'argument précis. « Estimer » : obtenir un ordre de grandeur. « Exploiter » : utiliser les documents. « Commenter » ou « Discuter » : porter un regard critique.",
              ],
              box: { label: "À retenir", text: "Quand le résultat est donné (« Montrer que... »), tout le travail est dans le raisonnement : chaque étape doit s'appuyer sur une loi ou une définition nommée." },
            },
            {
              heading: "Rédiger une réponse qui rapporte tous les points",
              paragraphs: [
                "Une réponse type comporte quatre temps : la loi ou la relation utilisée, nommée (« D'après la deuxième loi de Newton... ») ; l'expression littérale de la grandeur cherchée ; l'application numérique avec les valeurs converties dans les unités du système international ; le résultat avec son unité et un nombre adapté de chiffres significatifs.",
                "Les chiffres significatifs : le résultat ne peut pas être plus précis que la donnée la moins précise. Avec d = 1,25 m (trois chiffres significatifs) et t = 0,40 s (deux chiffres significatifs), v = d/t = 3,125 m·s⁻¹ s'écrit v = 3,1 m·s⁻¹. Écrire 3,125 laisse croire à une précision qui n'existe pas.",
                "En mécanique, la rédaction attendue commence par le système étudié, le référentiel (supposé galiléen) et le bilan des forces, avant d'appliquer une loi. En chimie, on écrit l'équation de la réaction ajustée et l'on raisonne sur les quantités de matière.",
              ],
              box: { label: "Règle", text: "Relation nommée, expression littérale, application numérique en unités SI, résultat avec unité et chiffres significatifs cohérents avec les données." },
            },
            {
              heading: "Gérer son temps et vérifier",
              paragraphs: [
                "Avec 210 minutes pour 20 points, un point représente environ 10 minutes de travail : ce repère aide à ne pas s'enliser sur une question peu payée. Si une question résiste, passez à la suite en utilisant les résultats donnés, et revenez-y à la fin.",
                "Deux contrôles rapides détectent la plupart des erreurs. L'analyse dimensionnelle : chaque membre d'une égalité doit avoir la même unité (par exemple, √(ℓ/g) s'exprime en secondes, donc peut représenter une durée). L'ordre de grandeur : une vitesse de voiture de 3 000 km·h⁻¹ ou une capacité de 100 F pour un composant usuel trahit une erreur de conversion. Les cas limites aident aussi : une formule de l'effet Doppler doit redonner f_R = f_E quand la vitesse est nulle.",
              ],
            },
          ],
          keyPoints: [
            "Écrit de 3 h 30 sur 16 points, ECE d'une heure sur 4 points ; coefficient 16.",
            "Lire tout l'exercice avant de répondre, repérer données, hypothèses et résultats intermédiaires donnés.",
            "Verbes de consigne : citer (restituer), calculer (valeur), établir ou montrer (raisonnement), estimer (ordre de grandeur).",
            "Réponse type : loi nommée, expression littérale, application numérique, unité, chiffres significatifs.",
            "Contrôler : homogénéité, ordre de grandeur, cas limites ; environ 10 minutes par point.",
          ],
          example: {
            statement: "Question extraite d'un sujet : « Calculer l'énergie d'un photon de longueur d'onde λ = 450 nm. Exprimer le résultat en joules puis en électronvolts. » Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J. Rédiger une réponse complète.",
            solution: [
              "Le verbe « Calculer » attend une valeur numérique justifiée par une relation.",
              "Relation : l'énergie d'un photon vaut E = hc/λ.",
              "Conversion : λ = 450 nm = 450 × 10⁻⁹ m.",
              "Application numérique : E = 6,63 × 10⁻³⁴ × 3,00 × 10⁸/450 × 10⁻⁹ ≈ 4,42 × 10⁻¹⁹ J (trois chiffres significatifs, comme les données).",
              "En électronvolts : E = 4,42 × 10⁻¹⁹/1,60 × 10⁻¹⁹ ≈ 2,76 eV.",
              "Contrôle : un photon visible a une énergie comprise entre environ 1,6 eV et 3,1 eV ; 2,76 eV est plausible pour une lumière bleue.",
              "Réponse : E ≈ 4,42 × 10⁻¹⁹ J ≈ 2,76 eV.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des consignes suivantes, indiquer ce qui est attendu : a) « Citer les deux conditions pour que deux ondes interfèrent de façon stable. » b) « Montrer que l'interfrange s'écrit i = λD/b. » c) « Estimer la masse d'air contenue dans une salle de classe. » d) « Justifier que la lunette est afocale. »",
              hint: "Associez chaque verbe à son type de réponse : restitution, raisonnement, ordre de grandeur ou argument.",
              solution: [
                "a) Citer : restituer sans démonstration ; ici, même fréquence et déphasage constant (sources cohérentes).",
                "b) Montrer : partir de lois ou de relations données (franges brillantes pour δ = kλ, avec δ = bx/D) et aboutir, étape par étape, au résultat fourni.",
                "c) Estimer : choisir des valeurs raisonnables (dimensions de la salle, masse volumique de l'air) et donner un ordre de grandeur, avec un ou deux chiffres significatifs.",
                "d) Justifier : donner l'argument précis, ici que le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire.",
                "Réponse : a) restitution ; b) raisonnement aboutissant au résultat donné ; c) ordre de grandeur ; d) argument.",
              ],
            },
            {
              level: 2,
              statement: "Corriger les réponses suivantes d'un élève. a) « v = d/t = 1,25/0,40 = 3,125 » (d = 1,25 m, t = 0,40 s). b) L'élève propose pour la période d'un pendule T = 2π√(g/ℓ). c) Pour une source sonore qui s'approche, il écrit f_R = f_E(c - v)/c.",
              hint: "Vérifiez l'unité et les chiffres significatifs pour a), l'homogénéité pour b) et un cas physique simple pour c).",
              solution: [
                "a) Il manque l'unité et la précision est excessive : t n'a que deux chiffres significatifs, donc v = 3,1 m·s⁻¹.",
                "b) g/ℓ s'exprime en (m·s⁻²)/m = s⁻², donc √(g/ℓ) est en s⁻¹ : ce n'est pas une durée. L'expression homogène est T = 2π√(ℓ/g).",
                "c) Pour une source qui s'approche, f_R doit être supérieure à f_E ; or (c - v)/c < 1 donnerait f_R < f_E. L'expression correcte est f_R = f_E × c/(c - v).",
                "Réponse : v = 3,1 m·s⁻¹ ; T = 2π√(ℓ/g) ; f_R = f_E × c/(c - v).",
              ],
            },
            {
              level: 3,
              statement: "Une balle est lancée verticalement vers le haut avec une vitesse v₀ = 8,0 m·s⁻¹. On néglige les actions de l'air et on prend g = 9,81 m·s⁻². 1. Préciser le système, le référentiel et le bilan des forces. 2. En appliquant la deuxième loi de Newton, établir l'expression de la vitesse v(t) sur un axe vertical orienté vers le haut. 3. Établir l'expression de l'altitude z(t), l'origine étant le point de lancement. 4. Déterminer la hauteur maximale atteinte. Rédiger comme sur une copie de bac.",
              hint: "Au sommet de la trajectoire, la vitesse s'annule : calculez la date correspondante, puis remplacez-la dans z(t).",
              solution: [
                "1. Système : la balle, assimilée à un point matériel. Référentiel terrestre, supposé galiléen. Force : le poids P = m·g, vertical vers le bas (actions de l'air négligées).",
                "2. Deuxième loi de Newton : m·a = m·g, donc a = g. Sur l'axe orienté vers le haut : a_z = -g. Par primitive, v(t) = -g·t + v₀.",
                "3. Par primitive, z(t) = -½g·t² + v₀·t, avec z(0) = 0.",
                "4. Au sommet, v(t_s) = 0, donc t_s = v₀/g = 8,0/9,81 ≈ 0,82 s.",
                "z_max = -½g·t_s² + v₀·t_s = v₀²/(2g) = 8,0²/(2 × 9,81) ≈ 3,3 m.",
                "Contrôle : v₀²/(2g) est bien homogène à une longueur ((m·s⁻¹)²/(m·s⁻²) = m), et quelques mètres est plausible pour un lancer à la main.",
                "Réponse : v(t) = v₀ - g·t ; z(t) = v₀·t - ½g·t² ; hauteur maximale ≈ 3,3 m.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : réussir l'épreuve écrite.",
            statements: [
              { text: "Un résultat numérique sans unité peut obtenir tous les points.", true: false, why: "L'unité fait partie du résultat : son absence est sanctionnée." },
              { text: "« Établir » demande d'obtenir une expression par un raisonnement fondé sur des lois.", true: true, why: "C'est le sens de ce verbe de consigne, comme « Montrer » ou « Démontrer »." },
              { text: "Il vaut mieux poser l'expression littérale avant de remplacer par les valeurs.", true: true, why: "Elle montre le raisonnement, permet de vérifier l'homogénéité et limite les erreurs de calcul." },
              { text: "Si l'on bloque à une question, tout le reste de l'exercice est perdu.", true: false, why: "Les résultats intermédiaires sont souvent donnés et beaucoup de questions sont indépendantes." },
              { text: "Un résultat écrit avec huit chiffres significatifs est plus juste.", true: false, why: "Il ne peut pas être plus précis que les données ; trop de chiffres est une erreur." },
              { text: "Vérifier l'ordre de grandeur permet de détecter une erreur de conversion.", true: true, why: "Une erreur de préfixe donne souvent un résultat absurde de plusieurs puissances de dix." },
            ],
          },
          quiz: [
            {
              q: "La consigne « Montrer que... » demande :",
              options: ["de recopier le résultat donné sans justifier", "de citer une définition du cours", "d'aboutir au résultat par un raisonnement", "de tracer un graphique"],
              answer: 2,
              why: "Le résultat est connu : les points récompensent le raisonnement qui y conduit.",
            },
            {
              q: "Avec d = 2,0 m et t = 0,125 s, on écrit v = d/t :",
              options: ["16,0 m·s⁻¹", "16 m·s⁻¹", "1,6 × 10¹ m", "16,000 m·s⁻¹"],
              answer: 1,
              why: "d n'a que deux chiffres significatifs : le résultat en a deux, avec son unité correcte.",
            },
            {
              q: "Quelle est la durée de la partie écrite de l'épreuve de spécialité physique-chimie ?",
              options: ["2 h", "3 h", "4 h", "3 h 30"],
              answer: 3,
              why: "La partie écrite dure 3 h 30 ; l'ECE dure une heure.",
            },
            {
              q: "Que faire en premier en découvrant un exercice ?",
              options: ["Tout lire, documents compris", "Commencer directement par la dernière question", "Recopier l'énoncé sur la copie", "Chercher la question la plus courte"],
              answer: 0,
              why: "Une lecture complète fait repérer données, hypothèses et résultats intermédiaires utiles.",
            },
            {
              q: "Laquelle de ces expressions est homogène à une durée (ℓ longueur, g intensité de la pesanteur) ?",
              options: ["ℓ·g", "√(ℓ·g)", "√(ℓ/g)", "ℓ/g"],
              answer: 2,
              why: "ℓ/g s'exprime en m/(m·s⁻²) = s², donc √(ℓ/g) s'exprime en secondes.",
            },
          ],
          trap: "Donner directement un nombre sans relation ni unité, ou recopier tous les chiffres de la calculatrice : la démarche et la présentation du résultat font partie de ce qui est noté.",
          method: "Sur le brouillon, notez pour chaque question le verbe de consigne et le barème ; sur la copie, suivez toujours le même ordre : relation nommée, expression littérale, application numérique, résultat avec unité, puis une ligne de contrôle (homogénéité ou ordre de grandeur).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'resolution-de-probleme',
          title: 'Résoudre un problème scientifique ouvert',
          minutes: 30,
          objectives: [
            "Mobiliser les compétences de la démarche scientifique : s'approprier, analyser-raisonner, réaliser, valider, communiquer.",
            "Formuler des hypothèses simplificatrices et choisir un modèle adapté.",
            "Estimer des données manquantes à l'aide d'ordres de grandeur.",
            "Valider un résultat par un regard critique sur les hypothèses et l'ordre de grandeur.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une résolution de problème ?",
              paragraphs: [
                "Au bac, certaines questions sont « ouvertes » : on vous pose une question concrète (« Combien de temps faut-il pour... ? », « Ce dispositif est-il adapté ? ») sans questions intermédiaires pour vous guider. Les documents peuvent contenir des informations inutiles, et certaines données manquent : à vous de les estimer.",
                "Ce type de question évalue surtout la démarche. Une démarche cohérente, clairement présentée, est valorisée même si elle n'aboutit pas complètement ou si le résultat final est imparfait. À l'inverse, un nombre donné sans explication rapporte très peu. Il faut donc écrire sa démarche, y compris ses tentatives et ses hypothèses.",
              ],
              box: { label: "À retenir", text: "Dans une résolution de problème, toute démarche cohérente est valorisée, même inachevée : écrivez vos pistes, vos hypothèses et vos calculs, pas seulement le résultat." },
            },
            {
              heading: "Les cinq compétences de la démarche",
              paragraphs: [
                "S'approprier : reformuler la question avec vos mots, faire un schéma de la situation, identifier la grandeur cherchée et trier les données utiles. Analyser et raisonner : choisir un modèle (chute libre, source isotrope, gaz parfait...), les lois qui s'appliquent, poser des hypothèses simplificatrices (« on néglige les frottements », « on néglige les pertes thermiques ») et bâtir un plan de résolution.",
                "Réaliser : mener les calculs, d'abord littéralement puis numériquement, en unités du système international. Valider : critiquer le résultat (unité, ordre de grandeur, comparaison avec l'expérience courante), discuter les hypothèses et, si besoin, affiner le modèle. Communiquer : présenter la démarche de façon claire et structurée, avec une phrase de conclusion qui répond exactement à la question posée.",
              ],
              box: { label: "Repère", text: "S'approprier (comprendre et schématiser) ; Analyser-raisonner (modèle, lois, hypothèses) ; Réaliser (calculs) ; Valider (regard critique) ; Communiquer (rédaction et conclusion)." },
            },
            {
              heading: "Estimer avec des ordres de grandeur",
              paragraphs: [
                "Quand une donnée manque, on l'estime avec une valeur raisonnable, en le disant explicitement : « on estime la température de l'eau du robinet à 20 °C ». Quelques repères sont utiles : g ≈ 9,8 m·s⁻² ; célérité du son dans l'air ≈ 340 m·s⁻¹ ; vitesse de la lumière c = 3,00 × 10⁸ m·s⁻¹ ; masse volumique de l'eau 1,0 kg·L⁻¹ ; capacité thermique massique de l'eau ≈ 4,18 × 10³ J·kg⁻¹·K⁻¹ ; rayon de la Terre ≈ 6,4 × 10³ km.",
                "Un résultat obtenu à partir d'estimations s'exprime avec un ou deux chiffres significatifs : il donne un ordre de grandeur, pas une valeur précise. Exemple : pour porter 1,0 L d'eau de 20 °C à 100 °C avec une bouilloire de 2,0 kW, Q = m·c·ΔT = 1,0 × 4,18 × 10³ × 80 ≈ 3,3 × 10⁵ J et Δt = Q/P ≈ 170 s, soit environ 3 minutes.",
              ],
            },
            {
              heading: "Valider et affiner le modèle",
              paragraphs: [
                "Valider, c'est confronter le résultat à ce que l'on sait. Dans l'exemple de la bouilloire, l'expérience courante donne un peu plus de 3 minutes : l'écart s'explique par l'hypothèse simplificatrice (pertes thermiques négligées, chauffage de la bouilloire elle-même). Le modèle est donc acceptable, et l'on sait dans quel sens il se trompe.",
                "Parfois, la validation montre qu'une hypothèse est trop grossière ; on l'améliore alors par étapes. Pour mesurer la profondeur d'un puits en chronométrant la chute d'une pierre, on peut d'abord négliger la durée de remontée du son, puis la calculer avec la première estimation et corriger : c'est une démarche itérative, très appréciée dans une copie.",
              ],
            },
          ],
          keyPoints: [
            "Problème ouvert : pas de questions intermédiaires ; données parfois inutiles ou manquantes.",
            "Cinq compétences : s'approprier, analyser-raisonner, réaliser, valider, communiquer.",
            "Écrire explicitement les hypothèses simplificatrices et les valeurs estimées.",
            "Un résultat issu d'estimations s'écrit avec un ou deux chiffres significatifs.",
            "Toujours conclure par une phrase qui répond à la question posée, après un regard critique.",
          ],
          example: {
            statement: "Combien de temps faut-il à une bouilloire électrique de puissance 2,0 kW pour porter à ébullition 1,0 L d'eau du robinet ? Données : capacité thermique massique de l'eau c = 4,18 × 10³ J·kg⁻¹·K⁻¹ ; masse volumique de l'eau 1,0 kg·L⁻¹.",
            solution: [
              "S'approprier : on cherche une durée Δt ; l'énergie électrique reçue sert à élever la température de l'eau jusqu'à 100 °C.",
              "Hypothèses : eau initialement à 20 °C (estimation) ; pression atmosphérique normale ; pertes thermiques et chauffage de la bouilloire négligés.",
              "Modèle : l'énergie nécessaire vaut Q = m·c·ΔT, et Q = P·Δt.",
              "Réaliser : m = 1,0 kg ; Q = 1,0 × 4,18 × 10³ × (100 - 20) ≈ 3,3 × 10⁵ J ; Δt = Q/P = 3,3 × 10⁵/2,0 × 10³ ≈ 1,7 × 10² s.",
              "Valider : environ 3 minutes, ce qui correspond à l'expérience courante ; la durée réelle est un peu plus longue à cause des pertes thermiques négligées.",
              "Conclusion : il faut environ 3 minutes pour porter l'eau à ébullition.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La lumière émise par le Soleil met un certain temps pour atteindre la Terre. Estimer cette durée. Données : distance Terre-Soleil ≈ 1,5 × 10⁸ km ; c = 3,00 × 10⁸ m·s⁻¹. Présenter les étapes s'approprier, réaliser, valider et conclure.",
              hint: "La lumière se propage à vitesse constante : Δt = d/c, avec d en mètres.",
              solution: [
                "S'approprier : on cherche une durée de propagation ; la lumière parcourt la distance d à la vitesse c.",
                "Réaliser : d = 1,5 × 10⁸ km = 1,5 × 10¹¹ m ; Δt = d/c = 1,5 × 10¹¹/3,00 × 10⁸ = 5,0 × 10² s.",
                "Valider : 500 s, soit environ 8 minutes ; c'est la valeur couramment citée, l'ordre de grandeur est cohérent.",
                "Conclusion : la lumière du Soleil met environ 8 minutes pour nous parvenir.",
              ],
            },
            {
              level: 2,
              statement: "Pour estimer la profondeur d'un puits, on lâche une pierre sans vitesse initiale depuis le bord et l'on entend le bruit de l'impact 2,0 s plus tard. Estimer la profondeur du puits. Données : g = 9,8 m·s⁻² ; célérité du son dans l'air 340 m·s⁻¹ ; on néglige les frottements de l'air sur la pierre.",
              hint: "Négligez d'abord la durée de remontée du son pour obtenir une première estimation, puis corrigez-la.",
              solution: [
                "Modèle : chute libre, h = ½g·t_c² ; le son remonte en t_s = h/c ; la durée mesurée vaut t_c + t_s = 2,0 s.",
                "Première estimation (t_s négligée) : h ≈ ½ × 9,8 × 2,0² ≈ 19,6 m.",
                "Correction : t_s ≈ 19,6/340 ≈ 0,058 s, donc t_c ≈ 2,0 - 0,058 ≈ 1,94 s et h ≈ ½ × 9,8 × 1,94² ≈ 18,4 m.",
                "Nouvelle itération : t_s ≈ 18,4/340 ≈ 0,054 s, t_c ≈ 1,946 s, h ≈ 18,5 m : le résultat ne change presque plus.",
                "Valider : la correction due au son est faible (environ 5 %), mais la précision de la mesure au chronomètre (réflexes) limite de toute façon le résultat.",
                "Conclusion : le puits mesure environ 18 à 19 m de profondeur.",
              ],
            },
            {
              level: 3,
              statement: "Un satellite géostationnaire paraît immobile pour un observateur terrestre : il tourne dans le plan de l'équateur, dans le même sens que la Terre, avec une période égale à la période de rotation de la Terre sur elle-même. À quelle altitude faut-il le placer ? Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; masse de la Terre M = 5,97 × 10²⁴ kg ; rayon de la Terre R = 6,37 × 10³ km ; période de rotation de la Terre T = 86 164 s (jour sidéral). On rappelle que, pour une orbite circulaire de rayon r, la troisième loi de Kepler s'écrit T²/r³ = 4π²/(G·M).",
              hint: "Isolez r dans la troisième loi de Kepler, puis n'oubliez pas que l'altitude se compte à partir de la surface de la Terre.",
              solution: [
                "S'approprier : on cherche l'altitude h = r - R d'une orbite circulaire de période T = 86 164 s.",
                "Analyser : d'après la troisième loi de Kepler, r³ = G·M·T²/(4π²), donc r = (G·M·T²/(4π²))^(1/3).",
                "Réaliser : G·M = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ ≈ 3,98 × 10¹⁴ ; G·M·T² ≈ 3,98 × 10¹⁴ × 7,42 × 10⁹ ≈ 2,96 × 10²⁴ ; divisé par 4π² ≈ 39,5 : r³ ≈ 7,49 × 10²² m³.",
                "r ≈ 4,22 × 10⁷ m, soit environ 42 200 km.",
                "h = r - R ≈ 42 200 - 6 370 ≈ 3,58 × 10⁴ km.",
                "Valider : l'altitude est très supérieure à celle de la Station spatiale internationale (environ 400 km), ce qui est cohérent avec une période bien plus longue (un jour au lieu d'environ 1 h 30).",
                "Conclusion : un satellite géostationnaire doit être placé à environ 36 000 km d'altitude.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une résolution de problème.",
            items: [
              "Reformuler la question et schématiser la situation.",
              "Identifier la grandeur cherchée et trier les données utiles.",
              "Choisir un modèle, les lois utiles et poser les hypothèses simplificatrices.",
              "Estimer les données manquantes avec des ordres de grandeur raisonnables.",
              "Mener le calcul littéral, puis l'application numérique.",
              "Critiquer le résultat : unité, ordre de grandeur, hypothèses.",
              "Rédiger une conclusion qui répond à la question posée.",
            ],
          },
          quiz: [
            {
              q: "Dans une résolution de problème, une démarche bien menée mais inachevée :",
              options: ["ne rapporte aucun point", "est valorisée", "est interdite", "annule l'exercice"],
              answer: 1,
              why: "Ce type de question évalue la démarche : tout raisonnement cohérent est pris en compte.",
            },
            {
              q: "Lequel de ces choix est une hypothèse simplificatrice acceptable ?",
              options: ["Négliger les frottements de l'air", "Prendre g = 98 m·s⁻² pour simplifier", "Changer la question posée", "Ignorer l'unité du résultat"],
              answer: 0,
              why: "Négliger une action faible simplifie le modèle sans le fausser grossièrement ; les autres choix sont des erreurs.",
            },
            {
              q: "Quel est l'ordre de grandeur de la célérité du son dans l'air ?",
              options: ["3 × 10⁸ m·s⁻¹", "34 m·s⁻¹", "1 500 m·s⁻¹", "340 m·s⁻¹"],
              answer: 3,
              why: "Environ 340 m·s⁻¹ dans l'air à température ambiante ; 1 500 m·s⁻¹ correspond plutôt à l'eau.",
            },
            {
              q: "Quelle compétence consiste à porter un regard critique sur le résultat ?",
              options: ["S'approprier", "Réaliser", "Valider", "Communiquer"],
              answer: 2,
              why: "Valider, c'est vérifier unité, ordre de grandeur et pertinence des hypothèses.",
            },
            {
              q: "Quelle est la masse de 1,5 L d'eau ?",
              options: ["0,15 kg", "1,5 kg", "15 kg", "1,5 g"],
              answer: 1,
              why: "La masse volumique de l'eau vaut 1,0 kg·L⁻¹, donc m = 1,5 kg.",
            },
          ],
          trap: "Rester bloqué faute de données, ou au contraire donner un résultat sans écrire les hypothèses ni les valeurs estimées : le correcteur ne peut alors valoriser aucune démarche.",
          method: "Commencez toujours par un schéma et une phrase qui reformule la question, puis listez, en deux colonnes, les données fournies et les données à estimer ; c'est la meilleure façon de démarrer quand rien ne vient.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'competences-experimentales',
          title: 'L\'évaluation des compétences expérimentales',
          minutes: 30,
          objectives: [
            "Connaître le déroulement et les attendus de l'évaluation des compétences expérimentales (ECE).",
            "Évaluer une incertitude-type par une approche statistique (type A) ou à partir d'une donnée constructeur (type B).",
            "Écrire un résultat de mesure avec son incertitude-type et le comparer à une valeur de référence.",
            "Exploiter une formule fournie pour évaluer l'incertitude-type d'une grandeur calculée.",
          ],
          course: [
            {
              heading: "Le déroulement de l'ECE",
              paragraphs: [
                "L'évaluation des compétences expérimentales est la partie pratique de l'épreuve de spécialité. Elle dure une heure et se déroule au laboratoire du lycée, sur un sujet issu d'une banque nationale. Notée sur 20 puis ramenée à 4 points, elle s'ajoute aux 16 points de l'écrit.",
                "Le sujet décrit un contexte, fournit du matériel et des documents, et demande de proposer ou de suivre un protocole, de réaliser des mesures, de les exploiter et de conclure. Il prévoit des appels : vous appelez l'examinateur pour lui présenter oralement un protocole, une mesure ou un résultat. En cas de difficulté, vous pouvez aussi l'appeler pour obtenir une aide, ce qui est pris en compte dans l'évaluation mais vaut toujours mieux que de rester bloqué.",
                "L'examinateur observe votre travail : il évalue les mêmes compétences qu'à l'écrit (s'approprier, analyser-raisonner, réaliser, valider, communiquer), mais en situation réelle, avec une place importante pour les gestes expérimentaux et l'autonomie.",
              ],
              box: { label: "Repère", text: "ECE : 1 h, au laboratoire, sujet issu d'une banque nationale ; 4 points sur les 20 de l'épreuve. Compétences : s'approprier, analyser-raisonner, réaliser, valider, communiquer." },
            },
            {
              heading: "Les gestes et la sécurité",
              paragraphs: [
                "En chimie, portez blouse et lunettes de protection, et des gants si les produits l'exigent ; lisez les pictogrammes de danger des flacons. Pour un volume précis, utilisez la verrerie jaugée (pipette jaugée, fiole jaugée) plutôt que graduée ; lisez le bas du ménisque, l'œil à sa hauteur. Rincez la burette et la pipette avec la solution qu'elles vont contenir. Étalonnez le pH-mètre avant usage.",
                "En électricité, montez le circuit hors tension, branchez un voltmètre en dérivation et un ampèremètre en série, choisissez un calibre adapté et vérifiez le montage avant de mettre sous tension. En acquisition, réglez la durée et le nombre de points avant de lancer la mesure, puis enregistrez le fichier. Un poste rangé et une démarche méthodique font partie de la compétence « Réaliser ».",
              ],
            },
            {
              heading: "Évaluer une incertitude-type",
              paragraphs: [
                "Toute mesure est entachée de variabilité. L'incertitude-type u(x) caractérise la dispersion des valeurs que l'on peut raisonnablement attribuer à la grandeur. Elle s'évalue de deux façons.",
                "Type A (approche statistique) : on répète n fois la mesure dans les mêmes conditions. On calcule la moyenne x̄ et l'écart-type expérimental s (fourni par la calculatrice ou le tableur). L'incertitude-type sur la moyenne vaut u(x̄) = s/√n : plus on répète la mesure, plus elle diminue.",
                "Type B (mesure unique) : on utilise les indications de l'instrument. Pour une tolérance constructeur ± a (par exemple une pipette jaugée de 20,00 mL ± 0,03 mL), u = a/√3. Pour une lecture sur une échelle graduée, on prend en général u = 1 graduation/√12. Lorsqu'une grandeur est calculée à partir d'autres, l'énoncé fournit la formule de composition des incertitudes à utiliser.",
              ],
              box: { label: "Formule", text: "Type A : u(x̄) = s/√n (s : écart-type expérimental, n : nombre de mesures). Type B : tolérance ± a, u = a/√3 ; lecture d'une graduation, u = graduation/√12." },
            },
            {
              heading: "Écrire, comparer et conclure",
              paragraphs: [
                "On écrit le résultat sous la forme « x = valeur, u(x) = ... » avec l'unité, en arrondissant l'incertitude-type à un ou deux chiffres significatifs et la valeur à la même décimale. Exemple : v = 341,2 m·s⁻¹ avec u(v) = 1,2 m·s⁻¹.",
                "Pour comparer à une valeur de référence x_ref, on calcule le quotient z = |x - x_ref|/u(x). Si z est inférieur ou égal à 2 environ, le résultat est considéré comme compatible avec la référence ; sinon, il faut rechercher une cause : erreur systématique (étalonnage, résistance interne d'un générateur, lecture), modèle inadapté, valeur de référence elle-même imprécise.",
                "La conclusion répond à la question du sujet, chiffres à l'appui, puis propose si besoin une amélioration du protocole : répéter les mesures, mesurer sur plusieurs périodes ou plusieurs interfranges, changer d'instrument.",
              ],
              box: { label: "Règle", text: "Comparaison à une référence : z = |x - x_ref|/u(x). Si z ≤ 2 environ, résultat compatible ; sinon, rechercher et discuter les causes de l'écart." },
            },
          ],
          keyPoints: [
            "ECE : 1 h au laboratoire, sujet d'une banque nationale, 4 points sur 20 ; des appels à l'examinateur jalonnent le sujet.",
            "Sécurité et gestes : blouse, lunettes, verrerie jaugée pour la précision, voltmètre en dérivation, ampèremètre en série.",
            "Type A : u(x̄) = s/√n ; type B : u = a/√3 pour une tolérance ± a.",
            "Écriture : valeur et incertitude-type, avec unité, arrondies à la même décimale.",
            "Compatibilité : z = |x - x_ref|/u(x) ≤ 2 environ ; sinon, chercher la cause de l'écart.",
          ],
          example: {
            statement: "Pour mesurer la célérité du son dans l'air à 20 °C, un groupe obtient cinq valeurs : 342, 338, 345, 340 et 341 m·s⁻¹. L'écart-type expérimental vaut s ≈ 2,6 m·s⁻¹. Écrire le résultat avec son incertitude-type, puis le comparer à la valeur de référence 343 m·s⁻¹.",
            solution: [
              "Moyenne : v̄ = (342 + 338 + 345 + 340 + 341)/5 = 1 706/5 = 341,2 m·s⁻¹.",
              "Incertitude-type (type A) : u(v̄) = s/√n = 2,6/√5 ≈ 1,2 m·s⁻¹.",
              "Écriture : v = 341,2 m·s⁻¹ avec u(v) = 1,2 m·s⁻¹.",
              "Comparaison : z = |341,2 - 343|/1,2 = 1,8/1,2 = 1,5.",
              "z ≤ 2 : le résultat est compatible avec la valeur de référence.",
              "Réponse : v = 341,2 m·s⁻¹, u(v) = 1,2 m·s⁻¹, compatible avec 343 m·s⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Une pipette jaugée porte l'indication 20,00 mL ± 0,03 mL. Calculer l'incertitude-type sur le volume prélevé. b) Une résistance porte l'indication 100 Ω ± 5 %. Calculer l'incertitude-type sur sa valeur.",
              hint: "Pour une tolérance ± a donnée par le constructeur, u = a/√3. Pour b), calculez d'abord a en ohms.",
              solution: [
                "a) u(V) = 0,03/√3 ≈ 0,017 mL, soit environ 0,02 mL : V = 20,00 mL avec u(V) = 0,02 mL.",
                "b) a = 5 % de 100 Ω = 5 Ω ; u(R) = 5/√3 ≈ 2,9 Ω : R = 100 Ω avec u(R) ≈ 3 Ω.",
                "Réponse : u(V) ≈ 0,02 mL ; u(R) ≈ 3 Ω.",
              ],
            },
            {
              level: 2,
              statement: "On mesure six fois le temps caractéristique τ d'un circuit RC et l'on obtient, en ms : 10,2 ; 10,5 ; 9,9 ; 10,1 ; 10,4 ; 10,3. Le tableur donne un écart-type expérimental s ≈ 0,22 ms. Les composants ont pour valeurs nominales R = 1,00 kΩ et C = 10,0 μF. a) Calculer la moyenne et l'incertitude-type. b) Calculer la valeur attendue τ_ref = RC et comparer. c) Le circuit est alimenté par un générateur qui possède une résistance interne. Ce fait peut-il expliquer le résultat ?",
              hint: "u(τ̄) = s/√n avec n = 6, puis z = |τ̄ - τ_ref|/u(τ̄).",
              solution: [
                "a) τ̄ = (10,2 + 10,5 + 9,9 + 10,1 + 10,4 + 10,3)/6 = 61,4/6 ≈ 10,23 ms ; u(τ̄) = 0,22/√6 ≈ 0,09 ms.",
                "b) τ_ref = RC = 1,00 × 10³ × 10,0 × 10⁻⁶ = 1,00 × 10⁻² s = 10,0 ms.",
                "z = |10,23 - 10,0|/0,09 ≈ 2,6 > 2 : l'écart est significatif, le résultat n'est pas compatible avec la valeur attendue.",
                "c) Oui : la résistance interne r du générateur s'ajoute à R, donc le temps caractéristique réel vaut (R + r)C, supérieur à RC, ce qui va dans le sens de l'écart observé. La tolérance sur C peut aussi intervenir.",
                "Réponse : τ = 10,23 ms avec u(τ) = 0,09 ms ; écart significatif (z ≈ 2,6), explicable par une erreur systématique.",
              ],
            },
            {
              level: 3,
              statement: "Lors d'une ECE, on détermine la longueur d'onde d'un laser à l'aide de fentes d'Young : λ = i·b/D. Mesures : interfrange i = 1,90 mm avec u(i) = 0,05 mm ; distance entre les fentes b = 0,500 mm avec u(b) = 0,005 mm ; distance fentes-écran D = 1,500 m avec u(D) = 0,005 m. On admet la formule u(λ)/λ = √((u(i)/i)² + (u(b)/b)² + (u(D)/D)²). 1. Calculer λ. 2. Calculer u(λ). 3. Le fabricant indique λ_ref = 632,8 nm. Conclure. 4. Quelle source d'incertitude domine ? Proposer une amélioration du protocole, que vous pourriez présenter lors d'un appel.",
              hint: "Calculez chaque incertitude relative séparément, puis comparez-les avant de les combiner.",
              solution: [
                "1. λ = i·b/D = 1,90 × 10⁻³ × 0,500 × 10⁻³/1,500 ≈ 6,33 × 10⁻⁷ m, soit 633 nm.",
                "2. u(i)/i = 0,05/1,90 ≈ 0,026 ; u(b)/b = 0,005/0,500 = 0,010 ; u(D)/D = 0,005/1,500 ≈ 0,003.",
                "u(λ)/λ = √(0,026² + 0,010² + 0,003²) ≈ √(8,0 × 10⁻⁴) ≈ 0,028, donc u(λ) ≈ 0,028 × 633 ≈ 18 nm.",
                "3. z = |633 - 632,8|/18 ≈ 0,01 ≤ 2 : la mesure est compatible avec la valeur du fabricant.",
                "4. L'incertitude sur i domine (2,6 % contre 1,0 % et 0,3 %). Amélioration : mesurer la longueur de dix interfranges ou plus, puis diviser par le nombre d'interfranges, ou augmenter D pour élargir les franges.",
                "Réponse : λ = 633 nm avec u(λ) ≈ 18 nm, compatible avec 632,8 nm ; il faut améliorer la mesure de i.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque compétence ou notion de l'ECE à sa description.",
            pairs: [
              { left: "S'approprier", right: "Extraire l'information utile et représenter la situation" },
              { left: "Analyser-raisonner", right: "Formuler une hypothèse, proposer un protocole" },
              { left: "Réaliser", right: "Mettre en œuvre le protocole en respectant la sécurité" },
              { left: "Valider", right: "Exploiter les mesures et discuter leur précision" },
              { left: "Communiquer", right: "Présenter la démarche et le résultat de façon argumentée" },
              { left: "Incertitude de type A", right: "Évaluée par la répétition des mesures : u = s/√n" },
            ],
          },
          quiz: [
            {
              q: "Pour n mesures répétées d'écart-type s, l'incertitude-type sur la moyenne vaut :",
              options: ["s × n", "s/n", "√s/n", "s/√n"],
              answer: 3,
              why: "C'est l'évaluation de type A : u(x̄) = s/√n.",
            },
            {
              q: "On obtient z = |x - x_ref|/u(x) = 1,2. Le résultat est :",
              options: ["compatible avec la référence", "incompatible avec la référence", "impossible à interpréter sans refaire toutes les mesures"],
              answer: 0,
              why: "z est inférieur à 2 : l'écart s'explique par la dispersion des mesures.",
            },
            {
              q: "Un voltmètre se branche :",
              options: ["en série", "à la place du générateur", "en dérivation", "entre deux circuits séparés"],
              answer: 2,
              why: "Il mesure une tension entre deux points : il se branche en dérivation aux bornes du dipôle.",
            },
            {
              q: "Pour prélever 10,0 mL d'une solution avec précision, on utilise :",
              options: ["une éprouvette graduée", "une pipette jaugée", "un bécher", "un erlenmeyer"],
              answer: 1,
              why: "La verrerie jaugée est la plus précise pour un volume donné.",
            },
            {
              q: "Un instrument a une tolérance constructeur ± a. L'incertitude-type vaut :",
              options: ["u = a", "u = a × √3", "u = 2a", "u = a/√3"],
              answer: 3,
              why: "C'est l'évaluation de type B pour une tolérance ± a : u = a/√3.",
            },
          ],
          trap: "Conclure « la mesure est fausse » dès que la valeur diffère de la référence, sans calculer z = |x - x_ref|/u(x) : un écart n'est significatif que s'il est grand devant l'incertitude-type.",
          method: "Pendant l'heure de l'ECE, lisez tout le sujet au début, repérez les appels et le matériel, notez vos mesures dans un tableau au fur et à mesure, et gardez les dix dernières minutes pour l'exploitation, la comparaison à la référence et la conclusion rédigée.",
        },
      ],
    },
  ],
}
