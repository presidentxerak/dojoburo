import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-expertes-tle',
  chapters: [
    /* ================================================================== */
    /* NOMBRES COMPLEXES : POINT DE VUE ALGÉBRIQUE                          */
    /* ================================================================== */
    {
      id: 'complexes-algebre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'forme-algebrique',
          title: 'Les nombres complexes : forme algébrique',
          minutes: 30,
          objectives: [
            "Connaître l'ensemble ℂ des nombres complexes, le nombre i tel que i² = -1 et la forme algébrique z = a + ib.",
            "Identifier la partie réelle et la partie imaginaire d'un nombre complexe, et reconnaître un réel ou un imaginaire pur.",
            "Effectuer des calculs algébriques avec des nombres complexes : sommes, produits, puissances de i.",
            "Utiliser la formule du binôme de Newton dans ℂ.",
          ],
          course: [
            {
              heading: "Pourquoi de nouveaux nombres ?",
              paragraphs: [
                "Dans ℝ, l'équation x² = -1 n'a pas de solution, puisqu'un carré est toujours positif ou nul. Pendant longtemps, les mathématiciens se sont contentés de dire qu'une telle équation est « impossible ». Les nombres complexes sont nés au XVIe siècle d'un problème plus troublant : des calculs passant par des racines carrées de nombres négatifs conduisaient à des solutions réelles parfaitement correctes.",
                "Jérôme Cardan publie en 1545, dans son Ars Magna, une formule donnant une solution des équations du troisième degré de la forme x³ = px + q. Appliquée à x³ = 15x + 4, dont 4 est solution (64 = 60 + 4), elle fait apparaître √(-121). En 1572, dans son Algebra, Raphaël Bombelli ose calculer avec ces quantités en suivant les règles habituelles : il remarque que (2 + √-1)³ = 2 + √-121, et retrouve ainsi la solution 4 = (2 + √-1) + (2 - √-1).",
                "Il faudra encore deux siècles pour que ces nombres soient acceptés. Leonhard Euler introduit en 1777 la lettre i pour désigner un nombre dont le carré vaut -1, et Carl Friedrich Gauss popularise dans la première moitié du XIXe siècle le nom de « nombres complexes » et leur représentation dans le plan, que vous étudierez au chapitre suivant.",
              ],
              box: { label: "Définition", text: "Il existe un ensemble noté ℂ, l'ensemble des nombres complexes, qui contient ℝ, muni d'une addition et d'une multiplication qui prolongent celles de ℝ et suivent les mêmes règles de calcul, et qui contient un nombre noté i tel que i² = -1. Tout nombre complexe z s'écrit de manière unique z = a + ib, avec a et b réels." },
            },
            {
              heading: "Forme algébrique, partie réelle et partie imaginaire",
              paragraphs: [
                "L'écriture z = a + ib, avec a et b réels, est la forme algébrique de z. Le réel a est la partie réelle de z, notée Re(z) ; le réel b est sa partie imaginaire, notée Im(z). Attention : la partie imaginaire est le réel b, et non le nombre ib. Par exemple, pour z = 4 - 7i, Re(z) = 4 et Im(z) = -7.",
                "Si Im(z) = 0, z = a est un réel : ℝ est contenu dans ℂ. Si Re(z) = 0, z = ib est un imaginaire pur, comme 3i ou -i√2. Le nombre 0 est à la fois réel et imaginaire pur.",
                "L'unicité de la forme algébrique est essentielle : deux nombres complexes sont égaux si et seulement s'ils ont la même partie réelle et la même partie imaginaire. En effet, si a + ib = a' + ib' avec b ≠ b', alors i = (a - a')/(b' - b) serait un réel, et son carré serait positif, ce qui contredit i² = -1. Donc b = b', puis a = a'. En particulier, a + ib = 0 si et seulement si a = 0 et b = 0.",
                "Enfin, il n'existe pas d'ordre compatible avec les opérations dans ℂ : une écriture comme « 2i > i » ou « z ≤ 3 + i » n'a aucun sens. Les inégalités ne portent que sur des réels (parties réelles, parties imaginaires, et plus tard modules).",
              ],
              box: { label: "Propriété", text: "Pour a, b, a', b' réels : a + ib = a' + ib' si et seulement si a = a' et b = b'. En particulier, a + ib = 0 si et seulement si a = 0 et b = 0. Un nombre complexe est réel lorsque sa partie imaginaire est nulle, imaginaire pur lorsque sa partie réelle est nulle." },
            },
            {
              heading: "Somme, produit et puissances de i",
              paragraphs: [
                "On calcule dans ℂ exactement comme dans ℝ, en remplaçant i² par -1. Pour la somme : (a + ib) + (c + id) = (a + c) + i(b + d). Pour le produit, on développe : (a + ib)(c + id) = ac + iad + ibc + i²bd = (ac - bd) + i(ad + bc). Par exemple, (2 + 3i)(1 - 4i) = 2 - 8i + 3i - 12i² = 2 - 5i + 12 = 14 - 5i.",
                "Les identités remarquables restent vraies. Ainsi (a + ib)² = a² + 2iab + i²b² = (a² - b²) + 2abi, et (a + ib)(a - ib) = a² - i²b² = a² + b². Ce dernier produit est un réel positif : il jouera un grand rôle pour calculer des quotients.",
                "Les puissances de i se répètent de 4 en 4 : i⁰ = 1, i¹ = i, i² = -1, i³ = i² × i = -i, i⁴ = (i²)² = 1, puis i⁵ = i, et ainsi de suite. Pour calculer iⁿ, on écrit la division euclidienne n = 4q + r avec 0 ≤ r ≤ 3 ; alors iⁿ = (i⁴)^q × iʳ = iʳ. Par exemple, 2026 = 4 × 506 + 2, donc i²⁰²⁶ = i² = -1.",
              ],
              box: { label: "À retenir", text: "(a + ib)(c + id) = (ac - bd) + i(ad + bc). (a + ib)² = (a² - b²) + 2abi. (a + ib)(a - ib) = a² + b². Les puissances de i sont 1, i, -1, -i, puis recommencent : iⁿ ne dépend que du reste de n dans la division par 4." },
            },
            {
              heading: "La formule du binôme dans ℂ",
              paragraphs: [
                "Comme l'addition et la multiplication de ℂ suivent les mêmes règles que dans ℝ (commutativité, associativité, distributivité), la formule du binôme de Newton, établie en Première avec les coefficients binomiaux, reste valable pour des nombres complexes. On lit les coefficients dans le triangle de Pascal : 1, 3, 3, 1 pour l'exposant 3 ; 1, 4, 6, 4, 1 pour l'exposant 4.",
                "Exemple : (1 + i)⁴ = 1 + 4i + 6i² + 4i³ + i⁴ = 1 + 4i - 6 - 4i + 1 = -4. On peut le vérifier autrement : (1 + i)² = 1 + 2i + i² = 2i, donc (1 + i)⁴ = (2i)² = 4i² = -4. De même, (1 + 2i)³ = 1 + 3 × 2i + 3 × (2i)² + (2i)³ = 1 + 6i - 12 - 8i = -11 - 2i.",
                "Le binôme permet aussi d'obtenir des sommes de coefficients binomiaux : en développant (1 + i)ⁿ, les termes d'indice pair donnent la partie réelle (avec des signes alternés, car i² = -1, i⁴ = 1...) et les termes d'indice impair la partie imaginaire.",
              ],
              box: { label: "Formule", text: "Pour tous nombres complexes a et b et tout entier naturel n : (a + b)ⁿ = Σ (de k = 0 à n) C(n, k) aᵏ bⁿ⁻ᵏ, où C(n, k) désigne le coefficient binomial « k parmi n »." },
            },
          ],
          keyPoints: [
            "ℂ contient ℝ et un nombre i tel que i² = -1 ; tout z s'écrit de façon unique z = a + ib avec a, b réels.",
            "Re(z) = a et Im(z) = b sont des réels : la partie imaginaire de 4 - 7i est -7, pas -7i.",
            "Deux complexes sont égaux si et seulement si leurs parties réelles et leurs parties imaginaires sont égales.",
            "On calcule comme dans ℝ, puis on remplace i² par -1 ; (a + ib)(a - ib) = a² + b².",
            "iⁿ ne dépend que du reste de n dans la division par 4 : 1, i, -1, -i.",
            "La formule du binôme reste vraie dans ℂ. Il n'y a pas d'inégalité entre nombres complexes.",
          ],
          example: {
            statement: "On pose z₁ = 3 - 2i et z₂ = -1 + 4i. Écrire sous forme algébrique z₁ + z₂, z₁z₂ et z₁², puis donner la partie réelle et la partie imaginaire de z₁z₂.",
            solution: [
              "Somme : z₁ + z₂ = (3 - 1) + (-2 + 4)i = 2 + 2i.",
              "Produit : z₁z₂ = (3 - 2i)(-1 + 4i) = -3 + 12i + 2i - 8i².",
              "Comme i² = -1, -8i² = 8, donc z₁z₂ = -3 + 8 + 14i = 5 + 14i.",
              "Carré : z₁² = 3² - 2 × 3 × 2i + (2i)² = 9 - 12i - 4 = 5 - 12i.",
              "Conclusion : z₁ + z₂ = 2 + 2i, z₁z₂ = 5 + 14i, z₁² = 5 - 12i ; Re(z₁z₂) = 5 et Im(z₁z₂) = 14.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire sous forme algébrique : A = (2 - i) + (5 + 3i) - (1 - 4i) ; B = (4 + i)(2 - 3i) ; C = (3 + 2i)² ; D = i¹⁵ + i¹⁷.",
              hint: "Développez comme avec des réels et remplacez i² par -1. Pour D, divisez 15 et 17 par 4 et gardez le reste.",
              solution: [
                "A = 2 - i + 5 + 3i - 1 + 4i = (2 + 5 - 1) + (-1 + 3 + 4)i = 6 + 6i.",
                "B = 8 - 12i + 2i - 3i² = 8 - 10i + 3 = 11 - 10i.",
                "C = 3² + 2 × 3 × 2i + (2i)² = 9 + 12i - 4 = 5 + 12i.",
                "D : 15 = 4 × 3 + 3, donc i¹⁵ = i³ = -i ; 17 = 4 × 4 + 1, donc i¹⁷ = i. Ainsi D = -i + i = 0.",
                "Résultats : A = 6 + 6i, B = 11 - 10i, C = 5 + 12i, D = 0.",
              ],
            },
            {
              level: 2,
              statement: "Pour tout réel x, on pose z = (x + 2i)(3 - i). 1. Écrire z sous forme algébrique en fonction de x. 2. Déterminer x pour que z soit réel, puis pour que z soit imaginaire pur ; donner z dans chaque cas. 3. Déterminer les réels x et y tels que (x + 2i)(3 - i) = 11 + yi.",
              hint: "Après développement, identifiez la partie réelle et la partie imaginaire : ce sont des expressions en x, que l'on annule ou que l'on identifie.",
              solution: [
                "1. z = 3x - xi + 6i - 2i² = (3x + 2) + (6 - x)i. Donc Re(z) = 3x + 2 et Im(z) = 6 - x.",
                "2. z est réel si et seulement si 6 - x = 0, soit x = 6 ; alors z = 3 × 6 + 2 = 20.",
                "z est imaginaire pur si et seulement si 3x + 2 = 0, soit x = -2/3 ; alors z = (6 + 2/3)i = (20/3)i.",
                "3. Par unicité de la forme algébrique : 3x + 2 = 11 et 6 - x = y. La première égalité donne x = 3, puis y = 6 - 3 = 3.",
                "Vérification : (3 + 2i)(3 - i) = 9 - 3i + 6i - 2i² = 11 + 3i. Réponse : x = 3 et y = 3.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour tout entier naturel n, on pose zₙ = (1 + i)ⁿ. 1. Calculer z₂, z₄ et z₈ sous forme algébrique. 2. Montrer que, pour tout entier naturel n, zₙ₊₄ = -4zₙ. 3. Démontrer par récurrence que, pour tout entier naturel k, z₄ₖ = (-4)ᵏ, et en déduire z₂₀. 4. En développant (1 + i)⁸ avec la formule du binôme, calculer S = C(8, 0) - C(8, 2) + C(8, 4) - C(8, 6) + C(8, 8).",
              hint: "Commencez par (1 + i)² = 2i. Pour la question 4, séparez dans le développement les termes où la puissance de i est paire : ils forment la partie réelle.",
              solution: [
                "1. z₂ = (1 + i)² = 1 + 2i + i² = 2i. z₄ = (z₂)² = (2i)² = -4. z₈ = (z₄)² = 16.",
                "2. Pour tout n, zₙ₊₄ = (1 + i)ⁿ × (1 + i)⁴ = zₙ × (-4) = -4zₙ.",
                "3. On note P(k) : z₄ₖ = (-4)ᵏ. Initialisation : z₀ = (1 + i)⁰ = 1 = (-4)⁰. Hérédité : si z₄ₖ = (-4)ᵏ pour un entier k fixé, alors d'après la question 2, z₄ₖ₊₄ = -4z₄ₖ = (-4)ᵏ⁺¹. Conclusion : pour tout k, z₄ₖ = (-4)ᵏ.",
                "Avec k = 5 : z₂₀ = (-4)⁵ = -1024. Vérification : (1 + i)²⁰ = (2i)¹⁰ = 1024 × i¹⁰ = 1024 × i² = -1024.",
                "4. (1 + i)⁸ = Σ (de k = 0 à 8) C(8, k) iᵏ. Les termes d'indice pair sont réels : i⁰ = 1, i² = -1, i⁴ = 1, i⁶ = -1, i⁸ = 1. Les termes d'indice impair sont imaginaires purs.",
                "La partie réelle de (1 + i)⁸ est donc C(8, 0) - C(8, 2) + C(8, 4) - C(8, 6) + C(8, 8) = S. Or (1 + i)⁸ = z₈ = 16, de partie réelle 16.",
                "Conclusion : S = 16. Vérification : 1 - 28 + 70 - 28 + 1 = 16.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque calcul à son résultat.",
            pairs: [
              { left: "i²", right: "-1" },
              { left: "i³", right: "-i" },
              { left: "i⁴", right: "1" },
              { left: "(1 + i)²", right: "2i" },
              { left: "(a + ib)(a - ib)", right: "a² + b²" },
              { left: "Im(3 - 5i)", right: "-5" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la partie imaginaire de z = 4 - 7i ?",
              options: ["-7i", "7", "-7", "4"],
              answer: 2,
              why: "La partie imaginaire est le réel b de l'écriture a + ib : ici b = -7. Le nombre -7i est le terme imaginaire, pas la partie imaginaire.",
            },
            {
              q: "Que vaut i²⁰²⁷ ?",
              options: ["1", "-i", "i", "-1"],
              answer: 1,
              why: "2027 = 4 × 506 + 3, donc i²⁰²⁷ = i³ = -i.",
            },
            {
              q: "Le produit (2 + i)(2 - i) est égal à :",
              options: ["3", "4 - i", "4 + 2i", "5"],
              answer: 3,
              why: "(a + ib)(a - ib) = a² + b², donc (2 + i)(2 - i) = 4 + 1 = 5.",
            },
            {
              q: "Pour quels réels x le nombre (x + i)² est-il imaginaire pur ?",
              options: ["x = 1 ou x = -1", "x = 0", "x = 1 seulement", "Aucun réel x ne convient"],
              answer: 0,
              why: "(x + i)² = (x² - 1) + 2xi. Sa partie réelle x² - 1 s'annule pour x = 1 ou x = -1 (on obtient 2i et -2i).",
            },
            {
              q: "Si a + ib = 3 - 2i, avec a et b réels, alors :",
              options: ["a = 3 et b = 2", "a = 3 et b = -2i", "a = 3 et b = -2", "a = -2 et b = 3"],
              answer: 2,
              why: "Par unicité de la forme algébrique, a = 3 et b = -2 ; b est un réel, il ne contient pas i.",
            },
          ],
          trap: "Écrire que la partie imaginaire de 3 - 5i est « -5i » alors que c'est le réel -5, ou oublier de remplacer i² par -1 en développant : (2 + 3i)² vaut 4 + 12i - 9 = -5 + 12i, et non 4 + 9i² + ... laissé tel quel.",
          method: "Développez comme avec des réels, remplacez chaque i² par -1, puis regroupez séparément les termes réels et les termes en i. Pour iⁿ, divisez n par 4 : seul le reste compte. Vérifiez un produit en le recalculant par une autre voie (identité remarquable, carré déjà connu).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conjugue-second-degre',
          title: 'Conjugué et équations du second degré',
          minutes: 35,
          objectives: [
            "Calculer le conjugué d'un nombre complexe et utiliser ses propriétés (somme, produit, inverse, quotient, puissance).",
            "Calculer l'inverse et le quotient de nombres complexes sous forme algébrique.",
            "Résoudre dans ℂ une équation du premier degré, ou une équation où figurent z et son conjugué.",
            "Résoudre dans ℂ une équation du second degré à coefficients réels.",
          ],
          course: [
            {
              heading: "Le conjugué d'un nombre complexe",
              paragraphs: [
                "Le conjugué de z = a + ib (a et b réels) est le nombre z̄ = a - ib, que l'on lit « z barre » : on change le signe de la partie imaginaire et lui seul. Par exemple, le conjugué de 3 - 2i est 3 + 2i, celui de 5 est 5, celui de 4i est -4i. Le conjugué du conjugué de z est z lui-même.",
                "Le conjugué permet d'isoler les parties réelle et imaginaire : z + z̄ = 2a = 2Re(z) et z - z̄ = 2ib = 2i Im(z). On en déduit deux caractérisations utiles : z est réel si et seulement si z̄ = z, et z est imaginaire pur si et seulement si z̄ = -z.",
                "Surtout, z × z̄ = (a + ib)(a - ib) = a² + b² est toujours un réel positif ou nul, nul seulement si z = 0. C'est l'outil qui permet de « chasser » i d'un dénominateur.",
              ],
              box: { label: "Définition", text: "Le conjugué de z = a + ib (a, b réels) est z̄ = a - ib. On a z + z̄ = 2Re(z), z - z̄ = 2i Im(z) et z × z̄ = a² + b², réel positif. z est réel si et seulement si z̄ = z ; z est imaginaire pur si et seulement si z̄ = -z." },
            },
            {
              heading: "Propriétés algébriques du conjugué",
              paragraphs: [
                "Pour tous complexes z et z' : le conjugué de z + z' est z̄ + z̄', et le conjugué de zz' est z̄ × z̄'. Démonstration pour le produit : avec z = a + ib et z' = c + id, zz' = (ac - bd) + i(ad + bc), dont le conjugué est (ac - bd) - i(ad + bc). D'autre part, z̄ × z̄' = (a - ib)(c - id) = ac - iad - ibc + i²bd = (ac - bd) - i(ad + bc). Les deux résultats sont égaux.",
                "Par récurrence sur n, le conjugué de zⁿ est (z̄)ⁿ pour tout entier naturel n : l'hérédité découle de zⁿ⁺¹ = zⁿ × z et de la propriété du produit. Pour z ≠ 0, en conjuguant l'égalité z × (1/z) = 1, on obtient z̄ × (conjugué de 1/z) = 1, donc le conjugué de 1/z est 1/z̄. On en déduit que le conjugué de z/z' est z̄/z̄' lorsque z' ≠ 0.",
                "Conséquence importante : si P(z) = aₙzⁿ + ... + a₁z + a₀ est un polynôme à coefficients réels, alors le conjugué de P(z) est P(z̄), puisque chaque coefficient est son propre conjugué. Donc si z₀ est une solution de P(z) = 0, z̄₀ en est une aussi.",
              ],
              box: { label: "Propriété", text: "Pour tous complexes z, z' et tout entier naturel n : conj(z + z') = z̄ + z̄' ; conj(zz') = z̄ × z̄' ; conj(zⁿ) = (z̄)ⁿ ; si z ≠ 0, conj(1/z) = 1/z̄ ; si z' ≠ 0, conj(z/z') = z̄/z̄'. Ici conj(w) désigne le conjugué de w." },
            },
            {
              heading: "Inverse, quotient et équations du premier degré",
              paragraphs: [
                "Tout complexe non nul z = a + ib a un inverse. Pour l'écrire sous forme algébrique, on multiplie le numérateur et le dénominateur par z̄ : 1/z = z̄/(z z̄) = (a - ib)/(a² + b²). Exemple : 1/(3 + 4i) = (3 - 4i)/(9 + 16) = 3/25 - (4/25)i.",
                "Pour un quotient, on multiplie par le conjugué du dénominateur : (2 + i)/(1 - i) = (2 + i)(1 + i)/((1 - i)(1 + i)) = (2 + 2i + i + i²)/2 = (1 + 3i)/2 = 1/2 + (3/2)i.",
                "Une équation az = b avec a ≠ 0 a pour unique solution z = b/a. Par exemple, (1 + i)z = 3 - i donne z = (3 - i)/(1 + i) = (3 - i)(1 - i)/2 = (3 - 3i - i + i²)/2 = (2 - 4i)/2 = 1 - 2i. Lorsque z et z̄ figurent tous deux dans l'équation, on pose z = x + iy et on identifie : 2z + z̄ = 6 - 3i s'écrit 3x + iy = 6 - 3i, donc x = 2, y = -3 et z = 2 - 3i.",
              ],
              box: { label: "Méthode", text: "Pour écrire un quotient sous forme algébrique, multiplier numérateur et dénominateur par le conjugué du dénominateur : celui-ci devient a² + b², un réel. Pour une équation contenant z et z̄, poser z = x + iy et identifier parties réelles et parties imaginaires." },
            },
            {
              heading: "Équations du second degré à coefficients réels",
              paragraphs: [
                "Soit l'équation az² + bz + c = 0 avec a, b, c réels et a ≠ 0, et Δ = b² - 4ac. Comme en Première, la forme canonique donne az² + bz + c = a[(z + b/(2a))² - Δ/(4a²)]. Si Δ ≥ 0, on retrouve les solutions réelles connues. Si Δ < 0, on écrit Δ = (i√(-Δ))², car (i√(-Δ))² = i² × (-Δ) = Δ, et l'identité u² - v² = (u - v)(u + v) permet de factoriser.",
                "On obtient alors deux solutions complexes conjuguées : z₁ = (-b + i√(-Δ))/(2a) et z₂ = (-b - i√(-Δ))/(2a). Exemple : z² - 2z + 5 = 0 a pour discriminant Δ = 4 - 20 = -16, donc √(-Δ) = 4 et les solutions sont (2 + 4i)/2 = 1 + 2i et 1 - 2i.",
                "Dans tous les cas, az² + bz + c = a(z - z₁)(z - z₂), et l'on a z₁ + z₂ = -b/a et z₁z₂ = c/a, ce qui fournit une vérification rapide : pour l'exemple, (1 + 2i) + (1 - 2i) = 2 et (1 + 2i)(1 - 2i) = 1 + 4 = 5. Ces formules ne s'appliquent telles quelles que si les coefficients sont réels.",
              ],
              box: { label: "Propriété", text: "Si a, b, c sont réels avec a ≠ 0 et Δ = b² - 4ac < 0, l'équation az² + bz + c = 0 admet dans ℂ deux solutions conjuguées : z₁ = (-b + i√(-Δ))/(2a) et z₂ = (-b - i√(-Δ))/(2a). Si Δ ≥ 0, ses solutions sont les solutions réelles habituelles." },
            },
          ],
          keyPoints: [
            "Conjugué de a + ib : a - ib (seule la partie imaginaire change de signe).",
            "z z̄ = a² + b², réel positif ; z est réel si z̄ = z, imaginaire pur si z̄ = -z.",
            "Le conjugué d'une somme, d'un produit, d'une puissance, d'un quotient est la somme, le produit, la puissance, le quotient des conjugués.",
            "Quotient : multiplier haut et bas par le conjugué du dénominateur.",
            "az² + bz + c = 0 (a, b, c réels, Δ < 0) : z = (-b ± i√(-Δ))/(2a), deux solutions conjuguées.",
            "Contrôle : z₁ + z₂ = -b/a et z₁z₂ = c/a.",
          ],
          example: {
            statement: "Résoudre dans ℂ l'équation 2z² + 2z + 5 = 0, puis vérifier le résultat.",
            solution: [
              "Les coefficients a = 2, b = 2, c = 5 sont réels. Δ = b² - 4ac = 4 - 40 = -36 < 0.",
              "L'équation admet donc deux solutions complexes conjuguées, avec √(-Δ) = √36 = 6.",
              "z₁ = (-2 + 6i)/4 = -1/2 + (3/2)i et z₂ = (-2 - 6i)/4 = -1/2 - (3/2)i.",
              "Vérification : z₁ + z₂ = -1 = -b/a, et z₁z₂ = (-1/2)² + (3/2)² = 1/4 + 9/4 = 5/2 = c/a.",
              "Conclusion : l'ensemble des solutions est { -1/2 + (3/2)i ; -1/2 - (3/2)i }.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Écrire sous forme algébrique A = 1/(2 - i) et B = (3 + i)/(1 + 2i). 2. Résoudre dans ℂ l'équation (2 - i)z = 5.",
              hint: "Multipliez le numérateur et le dénominateur par le conjugué du dénominateur. Pour l'équation, isolez z puis réutilisez A.",
              solution: [
                "1. A = (2 + i)/((2 - i)(2 + i)) = (2 + i)/(4 + 1) = 2/5 + (1/5)i.",
                "B = (3 + i)(1 - 2i)/((1 + 2i)(1 - 2i)) = (3 - 6i + i - 2i²)/5 = (5 - 5i)/5 = 1 - i.",
                "Vérification de B : (1 - i)(1 + 2i) = 1 + 2i - i - 2i² = 3 + i.",
                "2. Comme 2 - i ≠ 0, z = 5/(2 - i) = 5 × A = 2 + i.",
                "Vérification : (2 - i)(2 + i) = 4 + 1 = 5. Solution : z = 2 + i.",
              ],
            },
            {
              level: 2,
              statement: "Résoudre dans ℂ les équations suivantes : (a) z² + 9 = 0 ; (b) z² - 6z + 13 = 0 ; (c) z + 2z̄ = 9 - 4i.",
              hint: "Pour (a) et (b), calculez le discriminant. Pour (c), posez z = x + iy avec x et y réels, puis identifiez.",
              solution: [
                "(a) z² = -9 = (3i)², donc z² - (3i)² = (z - 3i)(z + 3i) = 0 : les solutions sont 3i et -3i.",
                "(b) Δ = 36 - 52 = -16 < 0, √(-Δ) = 4. Les solutions sont (6 + 4i)/2 = 3 + 2i et 3 - 2i. Contrôle : somme 6 = -b/a, produit 9 + 4 = 13 = c/a.",
                "(c) Avec z = x + iy : z + 2z̄ = x + iy + 2x - 2iy = 3x - iy. L'équation s'écrit 3x - iy = 9 - 4i.",
                "Par identification : 3x = 9 et -y = -4, donc x = 3 et y = 4, soit z = 3 + 4i.",
                "Vérification : 3 + 4i + 2(3 - 4i) = 3 + 4i + 6 - 8i = 9 - 4i. Solutions : (a) ±3i ; (b) 3 ± 2i ; (c) 3 + 4i.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Soit m un réel et (Eₘ) l'équation z² + mz + 4 = 0. 1. Pour quelles valeurs de m l'équation (Eₘ) admet-elle deux solutions non réelles ? 2. Dans ce cas, on note z₁ et z₂ ces solutions. Justifier que z₂ = z̄₁ et calculer z₁ × z̄₁. 3. Déterminer m pour que 1 + i√3 soit solution de (Eₘ), et donner l'autre solution. 4. Pour cette valeur de m, calculer (1 + i√3)³. Développer (z + 2)(z² - 2z + 4) et en déduire toutes les solutions dans ℂ de z³ = -8.",
              hint: "Question 1 : Δ = m² - 16 doit être strictement négatif. Question 3 : remplacez z par 1 + i√3, séparez partie réelle et partie imaginaire, et annulez les deux.",
              solution: [
                "1. Δ = m² - 16. Les solutions sont non réelles si et seulement si Δ < 0, c'est-à-dire m² < 16, soit -4 < m < 4.",
                "2. Les coefficients étant réels, les solutions sont (-m + i√(16 - m²))/2 et (-m - i√(16 - m²))/2, qui sont conjuguées : z₂ = z̄₁. Alors z₁ × z̄₁ = z₁z₂ = c/a = 4 (ou directement : m²/4 + (16 - m²)/4 = 4).",
                "3. (1 + i√3)² = 1 + 2i√3 - 3 = -2 + 2i√3. Donc (1 + i√3)² + m(1 + i√3) + 4 = (2 + m) + i√3(2 + m). Ce nombre est nul si et seulement si 2 + m = 0, soit m = -2 (qui est bien dans ]-4 ; 4[).",
                "L'équation est alors z² - 2z + 4 = 0, à coefficients réels : l'autre solution est le conjugué 1 - i√3 (contrôle : somme 2 = -b/a, produit 1 + 3 = 4 = c/a).",
                "4. (1 + i√3)³ = (-2 + 2i√3)(1 + i√3) = -2 - 2i√3 + 2i√3 + 2i² × 3 = -2 - 6 = -8.",
                "(z + 2)(z² - 2z + 4) = z³ - 2z² + 4z + 2z² - 4z + 8 = z³ + 8. Donc z³ = -8 équivaut à z + 2 = 0 ou z² - 2z + 4 = 0.",
                "Conclusion : les solutions de z³ = -8 sont -2, 1 + i√3 et 1 - i√3.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Conjugué, quotients et second degré.",
            statements: [
              { text: "Le conjugué de 3 - 2i est -3 + 2i.", true: false, why: "On ne change que le signe de la partie imaginaire : le conjugué est 3 + 2i." },
              { text: "Pour tout complexe z, z × z̄ est un réel positif ou nul.", true: true, why: "Avec z = a + ib, z × z̄ = a² + b² ≥ 0." },
              { text: "Le conjugué d'un produit est le produit des conjugués.", true: true, why: "C'est une propriété démontrée en développant les deux membres." },
              { text: "Si Δ < 0, l'équation az² + bz + c = 0 (a, b, c réels) n'a pas de solution.", true: false, why: "Elle n'a pas de solution réelle, mais elle a deux solutions complexes conjuguées." },
              { text: "Un complexe z est réel si et seulement si z = z̄.", true: true, why: "z - z̄ = 2i Im(z) est nul si et seulement si Im(z) = 0." },
              { text: "Les solutions de z² + 2iz + 3 = 0 sont forcément conjuguées.", true: false, why: "Le coefficient 2i n'est pas réel : les solutions sont i et -3i, qui ne sont pas conjuguées." },
              { text: "1/i = -i.", true: true, why: "i × (-i) = -i² = 1, donc l'inverse de i est -i." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la forme algébrique de 1/(1 + i) ?",
              options: ["1 - i", "1/2 - (1/2)i", "1/2 + (1/2)i", "-1/2 + (1/2)i"],
              answer: 1,
              why: "1/(1 + i) = (1 - i)/((1 + i)(1 - i)) = (1 - i)/2 = 1/2 - (1/2)i.",
            },
            {
              q: "Les solutions dans ℂ de z² + 4z + 8 = 0 sont :",
              options: ["2 + 2i et 2 - 2i", "-2 + 4i et -2 - 4i", "-2 + 2i et -2 - 2i", "-4 + 4i et -4 - 4i"],
              answer: 2,
              why: "Δ = 16 - 32 = -16, √(-Δ) = 4, donc z = (-4 ± 4i)/2 = -2 ± 2i.",
            },
            {
              q: "Si z = 2 - 5i, que vaut z × z̄ ?",
              options: ["29", "-21", "4 - 25i", "21"],
              answer: 0,
              why: "z × z̄ = a² + b² = 4 + 25 = 29, toujours un réel positif.",
            },
            {
              q: "Un complexe z vérifie z̄ = -z. Que peut-on affirmer ?",
              options: ["z est un réel", "z est nul", "z est un imaginaire pur", "z a une partie imaginaire nulle"],
              answer: 2,
              why: "z + z̄ = 2Re(z) = 0, donc la partie réelle de z est nulle : z est imaginaire pur (ce qui inclut 0).",
            },
            {
              q: "Une équation du second degré à coefficients réels admet 3 - i pour solution. Quelle est l'autre ?",
              options: ["-3 + i", "3 + i", "-3 - i"],
              answer: 1,
              why: "Les coefficients étant réels, le conjugué d'une solution est encore solution : 3 + i.",
            },
          ],
          trap: "Changer aussi le signe de la partie réelle en prenant le conjugué (le conjugué de 3 - 2i est 3 + 2i, pas -3 + 2i), ou conclure « pas de solution » lorsque Δ < 0 alors que l'on résout l'équation dans ℂ.",
          method: "Pour un quotient, multipliez numérateur et dénominateur par le conjugué du dénominateur. Vérifiez chaque solution en la remplaçant dans l'équation, ou contrôlez la somme -b/a et le produit c/a des solutions d'une équation du second degré.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'polynomes',
          title: 'Polynômes et factorisation',
          minutes: 35,
          objectives: [
            "Démontrer et utiliser la factorisation de zⁿ - aⁿ par z - a.",
            "Démontrer que si P(a) = 0, alors le polynôme P se factorise par z - a.",
            "Résoudre une équation polynomiale de degré 3 ou 4 en connaissant une racine, ou par un changement de variable.",
            "Utiliser le fait qu'un polynôme de degré n admet au plus n racines.",
          ],
          course: [
            {
              heading: "Polynômes et racines",
              paragraphs: [
                "Un polynôme à coefficients complexes est une fonction P définie sur ℂ par P(z) = aₙzⁿ + aₙ₋₁zⁿ⁻¹ + ... + a₁z + a₀, où les aₖ sont des nombres complexes. Si aₙ ≠ 0, l'entier n est le degré de P. Par exemple, P(z) = z³ - 3z² + 3z - 9 est de degré 3, à coefficients réels.",
                "Un nombre complexe a est une racine de P si P(a) = 0. Chercher les racines de P, c'est résoudre l'équation P(z) = 0. Pour P(z) = z³ - 3z² + 3z - 9, on vérifie que P(3) = 27 - 27 + 9 - 9 = 0 : 3 est une racine de P.",
              ],
              box: { label: "Définition", text: "Un nombre complexe a est une racine du polynôme P lorsque P(a) = 0. Le degré de P est le plus grand exposant n dont le coefficient aₙ est non nul." },
            },
            {
              heading: "Factoriser zⁿ - aⁿ par z - a",
              paragraphs: [
                "Vous connaissez z² - a² = (z - a)(z + a). On a de même z³ - a³ = (z - a)(z² + az + a²), et plus généralement, pour tout entier n ≥ 1 et tous complexes z et a : zⁿ - aⁿ = (z - a)(zⁿ⁻¹ + azⁿ⁻² + a²zⁿ⁻³ + ... + aⁿ⁻²z + aⁿ⁻¹).",
                "Démonstration : en développant (z - a)(zⁿ⁻¹ + azⁿ⁻² + ... + aⁿ⁻¹), le produit par z donne zⁿ + azⁿ⁻¹ + ... + aⁿ⁻¹z, et le produit par -a donne -azⁿ⁻¹ - a²zⁿ⁻² - ... - aⁿ. Tous les termes intermédiaires se simplifient deux à deux (somme « télescopique ») et il reste zⁿ - aⁿ.",
                "Exemple : z³ - 8 = z³ - 2³ = (z - 2)(z² + 2z + 4). Avec a = 1, on retrouve la formule de la somme des termes d'une suite géométrique : zⁿ - 1 = (z - 1)(1 + z + ... + zⁿ⁻¹).",
              ],
              box: { label: "Formule", text: "Pour tout entier n ≥ 1 et tous complexes z et a : zⁿ - aⁿ = (z - a)(zⁿ⁻¹ + azⁿ⁻² + ... + aⁿ⁻²z + aⁿ⁻¹), le second facteur comportant n termes de la forme aᵏzⁿ⁻¹⁻ᵏ, pour k allant de 0 à n - 1." },
            },
            {
              heading: "Racine et factorisation : le théorème",
              paragraphs: [
                "Théorème : si P est un polynôme de degré n ≥ 1 et si P(a) = 0, alors il existe un polynôme Q de degré n - 1 tel que, pour tout z, P(z) = (z - a)Q(z). Réciproquement, si P(z) = (z - a)Q(z), alors P(a) = 0.",
                "Démonstration : comme P(a) = 0, P(z) = P(z) - P(a) = aₙ(zⁿ - aⁿ) + aₙ₋₁(zⁿ⁻¹ - aⁿ⁻¹) + ... + a₁(z - a), le terme constant a₀ s'éliminant. D'après la formule précédente, chaque différence zᵏ - aᵏ se factorise par z - a. On peut donc mettre z - a en facteur dans toute la somme ; le facteur restant Q a pour terme de plus haut degré aₙzⁿ⁻¹.",
                "Conséquence : un polynôme non nul de degré n admet au plus n racines. On le démontre par récurrence sur n : un polynôme de degré 1, az + b avec a ≠ 0, a une seule racine. Si P est de degré n + 1 et a une racine a, alors P(z) = (z - a)Q(z) avec Q de degré n ; toute autre racine de P annule Q (un produit est nul si et seulement si l'un des facteurs est nul), et Q en a au plus n. Donc P en a au plus n + 1.",
                "Pour votre culture : le théorème de d'Alembert-Gauss, hors programme, affirme que tout polynôme non constant à coefficients complexes admet au moins une racine dans ℂ. Un polynôme de degré n se factorise donc complètement en n facteurs du premier degré.",
              ],
              box: { label: "Propriété", text: "Si P(a) = 0, alors P(z) = (z - a)Q(z) avec Q de degré deg(P) - 1. Un polynôme non nul de degré n admet au plus n racines dans ℂ." },
            },
            {
              heading: "Résoudre P(z) = 0 : deux méthodes",
              paragraphs: [
                "Avec une racine connue. Pour P(z) = z³ - 3z² + 3z - 9, on sait que P(3) = 0. On cherche Q sous la forme z² + bz + c : (z - 3)(z² + bz + c) = z³ + (b - 3)z² + (c - 3b)z - 3c. Par identification des coefficients avec ceux de P : b - 3 = -3, c - 3b = 3 et -3c = -9, d'où b = 0 et c = 3. Ainsi P(z) = (z - 3)(z² + 3), et les solutions de P(z) = 0 sont 3, i√3 et -i√3.",
                "Par changement de variable. L'équation z⁴ + 3z² - 4 = 0 est bicarrée : on pose Z = z². On obtient Z² + 3Z - 4 = 0, de discriminant 9 + 16 = 25, donc Z = (-3 + 5)/2 = 1 ou Z = (-3 - 5)/2 = -4. Il faut ensuite revenir à z : z² = 1 donne z = 1 ou z = -1, et z² = -4 = (2i)² donne z = 2i ou z = -2i. Il y a bien 4 solutions, pas plus que le degré.",
                "Quand la racine n'est pas donnée, on cherche souvent une racine « évidente » parmi 1, -1, 2, -2, i, -i, ou bien l'énoncé guide vers une racine imaginaire pure z = iy (y réel) : on remplace et on annule partie réelle et partie imaginaire.",
              ],
              box: { label: "Méthode", text: "1. Vérifier P(a) = 0. 2. Écrire P(z) = (z - a)Q(z), Q de degré n - 1 à coefficients inconnus. 3. Développer et identifier les coefficients. 4. Résoudre Q(z) = 0. Pour une équation bicarrée, poser Z = z², puis revenir à z." },
            },
          ],
          keyPoints: [
            "zⁿ - aⁿ = (z - a)(zⁿ⁻¹ + azⁿ⁻² + ... + aⁿ⁻¹) ; par exemple z³ - a³ = (z - a)(z² + az + a²).",
            "P(a) = 0 si et seulement si P(z) = (z - a)Q(z), avec Q de degré n - 1.",
            "Un polynôme non nul de degré n admet au plus n racines.",
            "On trouve Q par identification des coefficients, puis on résout Q(z) = 0.",
            "Équation bicarrée : poser Z = z², résoudre en Z, puis revenir à z (chaque valeur de Z donne deux valeurs de z, sauf Z = 0).",
          ],
          example: {
            statement: "Soit P(z) = z³ - 4z² + 9z - 10. Calculer P(2), factoriser P, puis résoudre dans ℂ l'équation P(z) = 0.",
            solution: [
              "P(2) = 8 - 16 + 18 - 10 = 0 : 2 est une racine, donc P(z) = (z - 2)(z² + bz + c) avec b et c à déterminer.",
              "Développement : (z - 2)(z² + bz + c) = z³ + (b - 2)z² + (c - 2b)z - 2c.",
              "Identification : b - 2 = -4, c - 2b = 9, -2c = -10. D'où b = -2 et c = 5 (et l'on vérifie c - 2b = 5 + 4 = 9).",
              "Donc P(z) = (z - 2)(z² - 2z + 5). Pour z² - 2z + 5 = 0 : Δ = 4 - 20 = -16, solutions (2 ± 4i)/2 = 1 ± 2i.",
              "Conclusion : les solutions de P(z) = 0 sont 2, 1 + 2i et 1 - 2i.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Factoriser z³ - 8 par z - 2. 2. En déduire les solutions dans ℂ de l'équation z³ = 8.",
              hint: "Utilisez z³ - a³ = (z - a)(z² + az + a²) avec a = 2, puis résolvez l'équation du second degré obtenue.",
              solution: [
                "1. Avec a = 2 : z³ - 8 = (z - 2)(z² + 2z + 4).",
                "2. z³ = 8 équivaut à z - 2 = 0 ou z² + 2z + 4 = 0.",
                "Pour z² + 2z + 4 = 0 : Δ = 4 - 16 = -12, √12 = 2√3, donc z = (-2 ± 2i√3)/2 = -1 ± i√3.",
                "Vérification : (-1 + i√3)² = 1 - 2i√3 - 3 = -2 - 2i√3, et -2 - 2i√3 + 2(-1 + i√3) + 4 = 0.",
                "Conclusion : les solutions de z³ = 8 sont 2, -1 + i√3 et -1 - i√3.",
              ],
            },
            {
              level: 2,
              statement: "Résoudre dans ℂ l'équation z⁴ - 5z² - 36 = 0, puis écrire z⁴ - 5z² - 36 comme un produit de quatre facteurs du premier degré.",
              hint: "Posez Z = z². N'oubliez pas de revenir à z : une valeur négative de Z donne deux solutions imaginaires pures.",
              solution: [
                "On pose Z = z². L'équation devient Z² - 5Z - 36 = 0, de discriminant 25 + 144 = 169 = 13².",
                "Donc Z = (5 + 13)/2 = 9 ou Z = (5 - 13)/2 = -4.",
                "z² = 9 donne z = 3 ou z = -3 ; z² = -4 = (2i)² donne z = 2i ou z = -2i.",
                "Factorisation : z⁴ - 5z² - 36 = (z² - 9)(z² + 4) = (z - 3)(z + 3)(z - 2i)(z + 2i). Contrôle : (z² - 9)(z² + 4) = z⁴ + 4z² - 9z² - 36.",
                "Conclusion : les solutions sont 3, -3, 2i et -2i.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On considère le polynôme P(z) = z⁴ - 4z³ + 9z² - 4z + 8. 1. Justifier que, pour tout complexe z, le conjugué de P(z) est P(z̄). En déduire que si a est une racine de P, alors ā en est une aussi. 2. Calculer P(i). En déduire deux racines de P. 3. Déterminer les réels b et c tels que, pour tout complexe z, P(z) = (z² + 1)(z² + bz + c). 4. Résoudre dans ℂ l'équation P(z) = 0.",
              hint: "Question 1 : les coefficients de P sont réels. Question 2 : i⁴ = 1 et i³ = -i. Question 3 : (z - i)(z + i) = z² + 1 ; développez et identifiez.",
              solution: [
                "1. Les coefficients de P sont réels, donc égaux à leurs conjugués. Par les propriétés du conjugué (somme, produit, puissance), le conjugué de P(z) est (z̄)⁴ - 4(z̄)³ + 9(z̄)² - 4z̄ + 8 = P(z̄). Si P(a) = 0, alors P(ā) = conjugué de 0 = 0.",
                "2. P(i) = i⁴ - 4i³ + 9i² - 4i + 8 = 1 + 4i - 9 - 4i + 8 = 0. Donc i est racine, et par la question 1, -i aussi.",
                "3. (z² + 1)(z² + bz + c) = z⁴ + bz³ + (c + 1)z² + bz + c. Par identification avec P : b = -4, c + 1 = 9, b = -4 et c = 8. Donc b = -4 et c = 8 conviennent.",
                "4. P(z) = 0 équivaut à z² + 1 = 0 ou z² - 4z + 8 = 0. La première donne z = i ou z = -i.",
                "Pour z² - 4z + 8 = 0 : Δ = 16 - 32 = -16, donc z = (4 ± 4i)/2 = 2 ± 2i.",
                "Conclusion : les solutions de P(z) = 0 sont i, -i, 2 + 2i et 2 - 2i, soit quatre racines pour un polynôme de degré 4.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour résoudre P(z) = 0 lorsqu'on connaît une racine a.",
            items: [
              "Calculer P(a) et constater que P(a) = 0.",
              "En déduire l'existence de Q tel que P(z) = (z - a)Q(z), avec Q de degré n - 1.",
              "Écrire Q avec des coefficients inconnus et développer (z - a)Q(z).",
              "Identifier les coefficients avec ceux de P pour déterminer Q.",
              "Résoudre Q(z) = 0, par exemple avec le discriminant si Q est de degré 2.",
              "Conclure en donnant toutes les solutions de P(z) = 0.",
            ],
          },
          quiz: [
            {
              q: "Par quel facteur z³ - 27 est-il factorisable ?",
              options: ["z + 3", "z - 3", "z - 9", "z + 27"],
              answer: 1,
              why: "27 = 3³, et z³ - 3³ = (z - 3)(z² + 3z + 9).",
            },
            {
              q: "Combien de racines un polynôme de degré 5 admet-il au plus dans ℂ ?",
              options: ["4", "6", "Une infinité", "5"],
              answer: 3,
              why: "Un polynôme non nul de degré n admet au plus n racines.",
            },
            {
              q: "Pour résoudre z⁴ - z² - 12 = 0, quel changement de variable utiliser ?",
              options: ["Z = z²", "Z = z⁴", "Z = √z", "Z = z - 1"],
              answer: 0,
              why: "L'équation est bicarrée : avec Z = z², elle devient Z² - Z - 12 = 0.",
            },
            {
              q: "Les solutions de z⁴ - z² - 12 = 0 dans ℂ sont :",
              options: ["4 et -3", "2 et -2 seulement", "2, -2, i√3, -i√3", "2i, -2i, √3, -√3"],
              answer: 2,
              why: "Z² - Z - 12 = 0 donne Z = 4 ou Z = -3. Puis z² = 4 donne ±2 et z² = -3 = (i√3)² donne ±i√3.",
            },
            {
              q: "P est un polynôme à coefficients réels et P(2 - i) = 0. Que vaut P(2 + i) ?",
              options: ["2 + i", "0", "On ne peut pas le savoir", "4"],
              answer: 1,
              why: "Le conjugué de P(2 - i) est P(2 + i), car les coefficients sont réels ; donc P(2 + i) = 0.",
            },
          ],
          trap: "Après un changement de variable Z = z², s'arrêter aux valeurs de Z sans revenir à z : Z = -4 donne encore deux solutions, z = 2i et z = -2i. Autre erreur : factoriser par z - a sans avoir vérifié que P(a) = 0.",
          method: "Après l'identification, redéveloppez (z - a)Q(z) pour vérifier que vous retrouvez bien P : c'est rapide et cela évite de résoudre une mauvaise équation. Comptez ensuite vos solutions : il y en a au plus n pour un polynôme de degré n.",
        },
      ],
    },

    /* ================================================================== */
    /* NOMBRES COMPLEXES : POINT DE VUE GÉOMÉTRIQUE                         */
    /* ================================================================== */
    {
      id: 'complexes-geometrie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'module-argument',
          title: 'Module, argument et forme trigonométrique',
          minutes: 35,
          objectives: [
            "Représenter un nombre complexe par un point ou un vecteur du plan, et déterminer l'affixe d'un point, d'un vecteur ou d'un milieu.",
            "Calculer le module d'un nombre complexe et utiliser ses propriétés (produit, quotient, puissance, inégalité triangulaire).",
            "Déterminer un argument d'un nombre complexe non nul et utiliser les propriétés des arguments.",
            "Passer de la forme algébrique à la forme trigonométrique, et réciproquement.",
          ],
          course: [
            {
              heading: "Le plan complexe : points, vecteurs et affixes",
              paragraphs: [
                "On munit le plan d'un repère orthonormé direct (O ; u, v). Au nombre complexe z = a + ib (a, b réels), on associe le point M de coordonnées (a ; b), appelé image de z, et le vecteur w de coordonnées (a ; b). On dit que z est l'affixe de M et l'affixe de w. L'axe des abscisses porte les réels, l'axe des ordonnées les imaginaires purs. Cette représentation a été proposée par Jean-Robert Argand en 1806, puis diffusée par Gauss.",
                "Les opérations ont une traduction géométrique. Si A et B ont pour affixes z_A et z_B, le vecteur AB a pour affixe z_B - z_A, et le milieu de [AB] a pour affixe (z_A + z_B)/2. La somme de deux complexes correspond à la somme de leurs vecteurs. Le point d'affixe z̄ est le symétrique de M par rapport à l'axe des abscisses, et celui d'affixe -z est le symétrique de M par rapport à O.",
              ],
              box: { label: "Repère", text: "Affixe du vecteur AB : z_B - z_A. Affixe du milieu de [AB] : (z_A + z_B)/2. ABDC est un parallélogramme si et seulement si z_B - z_A = z_D - z_C, c'est-à-dire si les vecteurs AB et CD ont la même affixe." },
            },
            {
              heading: "Le module",
              paragraphs: [
                "Le module de z = a + ib est le réel positif |z| = √(a² + b²) = √(z z̄). C'est la distance OM. Par exemple, |3 - 4i| = √(9 + 16) = 5 et |2i| = 2. Pour un réel, le module coïncide avec la valeur absolue. Plus généralement, AB = |z_B - z_A| : le module d'une différence est une distance.",
                "Propriétés : |z| = 0 si et seulement si z = 0 ; |z̄| = |z| ; |zz'| = |z| × |z'|. Démonstration du produit : |zz'|² = zz' × conj(zz') = z z̄ × z' z̄' = |z|² × |z'|², et les modules sont positifs. On en déduit |zⁿ| = |z|ⁿ, |1/z| = 1/|z| et |z/z'| = |z|/|z'| pour z, z' non nuls.",
                "Attention : le module d'une somme n'est pas la somme des modules. On a seulement l'inégalité triangulaire |z + z'| ≤ |z| + |z'|, qui traduit le fait que, dans un triangle, la longueur d'un côté est inférieure à la somme des deux autres. Par exemple, |3 + 4i| = 5 alors que |3| + |4i| = 7.",
                "L'ensemble des complexes de module 1, noté 𝕌, est représenté par le cercle trigonométrique. Il est stable par produit (|uu'| = 1 × 1 = 1) et par passage à l'inverse : si |u| = 1, alors u ū = 1, donc 1/u = ū est encore de module 1.",
              ],
              box: { label: "Propriété", text: "|z| = √(a² + b²) = √(z z̄) = OM et AB = |z_B - z_A|. Pour tous complexes z, z' : |zz'| = |z||z'|, |zⁿ| = |z|ⁿ, |z/z'| = |z|/|z'| (z' ≠ 0) et |z + z'| ≤ |z| + |z'|. 𝕌, ensemble des complexes de module 1, est stable par produit et par inverse." },
            },
            {
              heading: "Les arguments d'un complexe non nul",
              paragraphs: [
                "Soit z un complexe non nul d'image M. On appelle argument de z toute mesure θ, en radians, de l'angle orienté (u, OM). Un complexe a une infinité d'arguments, qui diffèrent d'un multiple de 2π : on écrit arg(z) = θ [2π], ce qui se lit « modulo 2π ». Le nombre 0 n'a pas d'argument.",
                "Avec r = |z|, les coordonnées de M sont (r cos θ ; r sin θ), donc cos θ = a/r et sin θ = b/r. Exemples : arg(i) = π/2, arg(-1) = π, arg(-3i) = -π/2, arg(1 + i) = π/4 [2π]. Un complexe non nul est un réel strictement positif si et seulement si arg(z) = 0 [2π], un réel si et seulement si arg(z) = 0 [π], un imaginaire pur si et seulement si arg(z) = π/2 [π].",
                "Les arguments transforment les produits en sommes : arg(zz') = arg(z) + arg(z') [2π], arg(zⁿ) = n arg(z) [2π], arg(1/z) = -arg(z) [2π], arg(z/z') = arg(z) - arg(z') [2π] et arg(z̄) = -arg(z) [2π]. La première se démontre avec les formules d'addition du cosinus et du sinus ; la leçon suivante en donnera une écriture très commode.",
              ],
              box: { label: "Définition", text: "Pour z ≠ 0 d'image M, un argument de z est une mesure de l'angle orienté (u, OM), définie à 2π près. Si r = |z| et θ = arg(z), alors cos θ = Re(z)/r et sin θ = Im(z)/r. Un argument d'un produit est la somme des arguments." },
            },
            {
              heading: "La forme trigonométrique",
              paragraphs: [
                "Tout complexe non nul s'écrit z = r(cos θ + i sin θ), avec r = |z| > 0 et θ un argument de z : c'est sa forme trigonométrique. Deux complexes non nuls sont égaux si et seulement s'ils ont le même module et des arguments égaux à 2π près.",
                "De l'algébrique au trigonométrique : pour z = -√3 + i, r = √(3 + 1) = 2, cos θ = -√3/2 et sin θ = 1/2, donc θ = 5π/6 [2π] et z = 2(cos(5π/6) + i sin(5π/6)). Du trigonométrique à l'algébrique : 4(cos(-π/3) + i sin(-π/3)) = 4(1/2 - i√3/2) = 2 - 2i√3.",
                "Le module doit être strictement positif : -2(cos θ + i sin θ) n'est pas une forme trigonométrique. Comme -1 a pour argument π, ce nombre s'écrit 2(cos(θ + π) + i sin(θ + π)).",
              ],
              box: { label: "Méthode", text: "Pour écrire z = a + ib sous forme trigonométrique : 1. calculer r = √(a² + b²) ; 2. calculer cos θ = a/r et sin θ = b/r ; 3. reconnaître θ sur le cercle trigonométrique en utilisant les deux valeurs ; 4. écrire z = r(cos θ + i sin θ)." },
            },
          ],
          keyPoints: [
            "z = a + ib a pour image M(a ; b) ; le vecteur AB a pour affixe z_B - z_A.",
            "|z| = √(a² + b²) = √(z z̄) = OM ; AB = |z_B - z_A|.",
            "|zz'| = |z||z'| et |z/z'| = |z|/|z'|, mais seulement |z + z'| ≤ |z| + |z'|.",
            "Argument : mesure de (u, OM), à 2π près ; cos θ = a/r, sin θ = b/r.",
            "arg(zz') = arg z + arg z', arg(z/z') = arg z - arg z', arg(zⁿ) = n arg z, arg(z̄) = -arg z (à 2π près).",
            "Forme trigonométrique : z = r(cos θ + i sin θ) avec r > 0.",
          ],
          example: {
            statement: "On pose z₁ = 1 + i et z₂ = √3 - i. 1. Écrire z₁ et z₂ sous forme trigonométrique. 2. En déduire le module et un argument de z₁z₂ et de z₁/z₂. 3. En calculant z₁z₂ sous forme algébrique, en déduire la valeur exacte de cos(π/12).",
            solution: [
              "1. |z₁| = √2, cos θ₁ = 1/√2 = √2/2 et sin θ₁ = √2/2, donc θ₁ = π/4 : z₁ = √2(cos(π/4) + i sin(π/4)).",
              "|z₂| = √(3 + 1) = 2, cos θ₂ = √3/2 et sin θ₂ = -1/2, donc θ₂ = -π/6 : z₂ = 2(cos(-π/6) + i sin(-π/6)).",
              "2. |z₁z₂| = √2 × 2 = 2√2 et arg(z₁z₂) = π/4 - π/6 = π/12 [2π]. |z₁/z₂| = √2/2 et arg(z₁/z₂) = π/4 + π/6 = 5π/12 [2π].",
              "3. z₁z₂ = (1 + i)(√3 - i) = √3 - i + i√3 - i² = (√3 + 1) + i(√3 - 1).",
              "Par la forme trigonométrique, Re(z₁z₂) = 2√2 cos(π/12). Donc cos(π/12) = (√3 + 1)/(2√2) = (√6 + √2)/4.",
              "Conclusion : cos(π/12) = (√6 + √2)/4, soit environ 0,966.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminer le module et un argument de chacun des nombres suivants, puis écrire leur forme trigonométrique : z₁ = -3 ; z₂ = 2i ; z₃ = -1 + i ; z₄ = 1 - i√3.",
              hint: "Placez chaque point dans le plan pour repérer le quadrant, puis utilisez cos θ = a/r et sin θ = b/r.",
              solution: [
                "z₁ = -3 : |z₁| = 3 et le point est sur la demi-droite des réels négatifs, donc arg(z₁) = π : z₁ = 3(cos π + i sin π).",
                "z₂ = 2i : |z₂| = 2 et arg(z₂) = π/2 : z₂ = 2(cos(π/2) + i sin(π/2)).",
                "z₃ = -1 + i : |z₃| = √2, cos θ = -√2/2 et sin θ = √2/2, donc θ = 3π/4 : z₃ = √2(cos(3π/4) + i sin(3π/4)).",
                "z₄ = 1 - i√3 : |z₄| = √(1 + 3) = 2, cos θ = 1/2 et sin θ = -√3/2, donc θ = -π/3 : z₄ = 2(cos(-π/3) + i sin(-π/3)).",
              ],
            },
            {
              level: 2,
              statement: "Dans le plan complexe, on considère les points A, B et C d'affixes z_A = 1 + i, z_B = 4 + 2i et z_C = 4i. 1. Calculer les longueurs AB, AC et BC. 2. En déduire la nature du triangle ABC. 3. Déterminer l'affixe du point D tel que ABDC soit un parallélogramme. Quelle est la nature de ABDC ?",
              hint: "Une longueur est le module d'une différence d'affixes. Pour ABDC, traduisez l'égalité de vecteurs AB = CD.",
              solution: [
                "1. AB = |z_B - z_A| = |3 + i| = √10 ; AC = |z_C - z_A| = |-1 + 3i| = √10 ; BC = |z_C - z_B| = |-4 + 2i| = √20.",
                "2. AB = AC, donc ABC est isocèle en A. De plus AB² + AC² = 10 + 10 = 20 = BC², donc, d'après la réciproque du théorème de Pythagore, ABC est rectangle en A : il est rectangle isocèle en A.",
                "3. ABDC est un parallélogramme si et seulement si les vecteurs AB et CD sont égaux : z_D - z_C = z_B - z_A, donc z_D = 4i + 3 + i = 3 + 5i.",
                "ABDC est un parallélogramme qui a un angle droit en A et deux côtés consécutifs AB et AC de même longueur : c'est un carré. Réponse : z_D = 3 + 5i, ABDC est un carré.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On note 𝕌 l'ensemble des nombres complexes de module 1. 1. Montrer que v = (√3 + i)/2 appartient à 𝕌 et en donner un argument. 2. Montrer que, pour tout u de 𝕌, ū = 1/u. 3. Soient u et v deux éléments de 𝕌 tels que uv ≠ -1. On pose Z = (u + v)/(1 + uv). Démontrer que Z est un nombre réel. 4. Vérifier ce résultat en calculant Z pour u = i et v = (√3 + i)/2.",
              hint: "Un complexe Z est réel si et seulement si Z̄ = Z. Calculez le conjugué de Z en remplaçant ū par 1/u et v̄ par 1/v, puis multipliez numérateur et dénominateur par uv.",
              solution: [
                "1. |v|² = 3/4 + 1/4 = 1, donc |v| = 1 et v ∈ 𝕌. cos θ = √3/2 et sin θ = 1/2, donc arg(v) = π/6 [2π].",
                "2. Pour u ∈ 𝕌, u ū = |u|² = 1 ; donc u ≠ 0 et ū = 1/u.",
                "3. Par les propriétés du conjugué, Z̄ = (ū + v̄)/(1 + ū v̄) = (1/u + 1/v)/(1 + 1/(uv)).",
                "En multipliant numérateur et dénominateur par uv (non nul) : Z̄ = (v + u)/(uv + 1) = Z. Donc Z est réel.",
                "4. uv = i(√3 + i)/2 = (-1 + i√3)/2, donc 1 + uv = (1 + i√3)/2, et u + v = (√3 + 3i)/2. Ainsi Z = (√3 + 3i)/(1 + i√3).",
                "Z = (√3 + 3i)(1 - i√3)/4 = (√3 - 3i + 3i - 3√3 i²)/4 = (√3 + 3√3)/4 = √3. On trouve bien un réel : Z = √3.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression à sa valeur ou à son interprétation.",
            pairs: [
              { left: "|3 - 4i|", right: "5" },
              { left: "arg(-2)", right: "π, à 2π près" },
              { left: "arg(3i)", right: "π/2, à 2π près" },
              { left: "|zz'|", right: "|z| × |z'|" },
              { left: "arg(z̄)", right: "-arg(z), à 2π près" },
              { left: "|z_B - z_A|", right: "la distance AB" },
            ],
          },
          quiz: [
            {
              q: "Quel est le module de z = -5 + 12i ?",
              options: ["17", "7", "13", "√119"],
              answer: 2,
              why: "|z| = √(25 + 144) = √169 = 13.",
            },
            {
              q: "Un argument de z = -1 - i est :",
              options: ["-3π/4", "π/4", "3π/4", "-π/4"],
              answer: 0,
              why: "|z| = √2, cos θ = -√2/2 et sin θ = -√2/2 : le point est dans le quart inférieur gauche, θ = -3π/4 [2π].",
            },
            {
              q: "Si |z| = 2 et arg(z) = π/3, alors |z³| et arg(z³) valent :",
              options: ["6 et π", "8 et π/3", "8 et π/9", "8 et π"],
              answer: 3,
              why: "|z³| = |z|³ = 8 et arg(z³) = 3 × π/3 = π [2π].",
            },
            {
              q: "Laquelle de ces écritures est une forme trigonométrique ?",
              options: ["-2(cos(π/5) + i sin(π/5))", "3(cos(π/4) + i sin(π/4))", "3(cos(π/4) - i sin(π/4))", "3(sin(π/4) + i cos(π/4))"],
              answer: 1,
              why: "Il faut un module strictement positif et la forme exacte r(cos θ + i sin θ), avec le même angle dans le cosinus et dans le sinus.",
            },
            {
              q: "Les points M d'affixe z tels que |z - 2i| = 3 forment :",
              options: ["une droite passant par le point d'affixe 2i", "le cercle de centre le point d'affixe 2i et de rayon 3", "le disque de centre O et de rayon 3", "le cercle de centre le point d'affixe -2i et de rayon 3"],
              answer: 1,
              why: "|z - 2i| est la distance AM, avec A d'affixe 2i : les points à distance 3 de A forment le cercle de centre A et de rayon 3.",
            },
          ],
          trap: "Confondre |z + z'| et |z| + |z'| (seule l'inégalité triangulaire est vraie), ou déterminer un argument à partir du seul cosinus : cos θ = -√2/2 donne 3π/4 ou -3π/4, et c'est le signe du sinus qui permet de choisir.",
          method: "Pour un argument, calculez d'abord r = |z|, puis cos θ = a/r et sin θ = b/r, et cherchez l'angle sur le cercle trigonométrique en vérifiant les deux valeurs. Un croquis rapide du point M indique le quadrant et évite les erreurs de signe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'forme-exponentielle',
          title: 'La forme exponentielle',
          minutes: 35,
          objectives: [
            "Écrire un nombre complexe non nul sous forme exponentielle re^(iθ) et passer d'une forme à l'autre.",
            "Utiliser la forme exponentielle pour calculer des produits, des quotients et des puissances, notamment avec la formule de Moivre.",
            "Retrouver les formules d'addition et de duplication du cosinus et du sinus.",
            "Utiliser les formules d'Euler, par exemple pour linéariser cos²x ou sin³x.",
          ],
          course: [
            {
              heading: "La notation e^(iθ)",
              paragraphs: [
                "Pour tout réel θ, on note e^(iθ) le nombre complexe cos θ + i sin θ. C'est le complexe de module 1 et d'argument θ : son image est le point du cercle trigonométrique associé à θ. Par exemple, e^(i0) = 1, e^(iπ/2) = i, e^(iπ) = -1 et e^(-iπ/2) = -i.",
                "Cette notation se justifie par la propriété fondamentale e^(iθ) × e^(iθ') = e^(i(θ + θ')), qui rappelle la relation exp(a + b) = exp(a) × exp(b) de la fonction exponentielle. Elle s'obtient en développant (cos θ + i sin θ)(cos θ' + i sin θ') à l'aide des formules d'addition. Inversement, elle permet de retrouver ces formules en un instant, comme on le verra plus bas.",
                "On en déduit, comme pour l'exponentielle réelle : 1/e^(iθ) = e^(-iθ), e^(iθ)/e^(iθ') = e^(i(θ - θ')), et le conjugué de e^(iθ) est e^(-iθ). Comme cos et sin sont 2π-périodiques, e^(i(θ + 2π)) = e^(iθ). L'égalité e^(iπ) = -1, que l'on écrit aussi e^(iπ) + 1 = 0, est souvent appelée identité d'Euler.",
              ],
              box: { label: "Définition", text: "Pour tout réel θ, e^(iθ) = cos θ + i sin θ. Pour tous réels θ et θ' : e^(iθ) × e^(iθ') = e^(i(θ + θ')), 1/e^(iθ) = e^(-iθ), conj(e^(iθ)) = e^(-iθ) et |e^(iθ)| = 1." },
            },
            {
              heading: "Forme exponentielle et calculs",
              paragraphs: [
                "Tout complexe non nul de module r et d'argument θ s'écrit z = re^(iθ), avec r > 0 : c'est sa forme exponentielle. Exemples : 1 + i = √2 e^(iπ/4) ; -3 = 3e^(iπ) ; √3 + i = 2e^(iπ/6) ; -2i = 2e^(-iπ/2).",
                "Les produits, quotients et puissances deviennent très simples : re^(iθ) × r'e^(iθ') = rr'e^(i(θ + θ')), re^(iθ)/(r'e^(iθ')) = (r/r')e^(i(θ - θ')) et (re^(iθ))ⁿ = rⁿe^(inθ). Pour un entier naturel n, cette dernière égalité se démontre par récurrence à partir de la règle du produit. On retrouve ainsi les propriétés des modules et des arguments de la leçon précédente.",
                "Exemple : (1 + i)¹⁰ = (√2)¹⁰ e^(i10π/4) = 32 e^(i5π/2) = 32 e^(iπ/2) = 32i, car 5π/2 = π/2 + 2π. Un calcul par le binôme serait bien plus long. Autre exemple : (1 + i√3)⁶ = (2e^(iπ/3))⁶ = 64e^(2iπ) = 64.",
              ],
              box: { label: "Propriété", text: "Formule de Moivre : pour tout réel θ et tout entier n, (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ), c'est-à-dire (e^(iθ))ⁿ = e^(inθ). Plus généralement (re^(iθ))ⁿ = rⁿe^(inθ)." },
            },
            {
              heading: "Retrouver les formules de trigonométrie",
              paragraphs: [
                "Pour tous réels a et b, e^(i(a + b)) = e^(ia) × e^(ib). Le membre de gauche vaut cos(a + b) + i sin(a + b). Le membre de droite vaut (cos a + i sin a)(cos b + i sin b) = (cos a cos b - sin a sin b) + i(sin a cos b + cos a sin b). En identifiant parties réelles et parties imaginaires, on obtient les formules d'addition.",
                "Avec b = a, on obtient les formules de duplication : cos(2a) = cos²a - sin²a, et, comme cos²a + sin²a = 1, cos(2a) = 2cos²a - 1 = 1 - 2sin²a ; sin(2a) = 2 sin a cos a. En remplaçant b par -b, on obtient aussi cos(a - b) = cos a cos b + sin a sin b et sin(a - b) = sin a cos b - cos a sin b.",
                "La formule de Moivre donne de même cos(3θ) et sin(3θ) : en développant (cos θ + i sin θ)³ par le binôme, la partie réelle vaut cos³θ - 3cos θ sin²θ, d'où cos(3θ) = 4cos³θ - 3cos θ après avoir remplacé sin²θ par 1 - cos²θ.",
              ],
              box: { label: "Formule", text: "cos(a + b) = cos a cos b - sin a sin b ; sin(a + b) = sin a cos b + cos a sin b ; cos(2a) = cos²a - sin²a = 2cos²a - 1 = 1 - 2sin²a ; sin(2a) = 2 sin a cos a." },
            },
            {
              heading: "Les formules d'Euler et la linéarisation",
              paragraphs: [
                "En additionnant et en soustrayant e^(iθ) = cos θ + i sin θ et e^(-iθ) = cos θ - i sin θ, on obtient les formules d'Euler : cos θ = (e^(iθ) + e^(-iθ))/2 et sin θ = (e^(iθ) - e^(-iθ))/(2i).",
                "Elles servent à linéariser, c'est-à-dire à écrire une puissance de cos ou de sin comme une somme de cos(kx) et sin(kx), ce qui permet ensuite d'en trouver une primitive. Exemple : cos²x = (e^(ix) + e^(-ix))²/4 = (e^(2ix) + 2 + e^(-2ix))/4 = (2cos(2x) + 2)/4 = (1 + cos(2x))/2.",
                "De même, avec le binôme : cos³x = (e^(3ix) + 3e^(ix) + 3e^(-ix) + e^(-3ix))/8 = (2cos(3x) + 6cos x)/8 = (cos(3x) + 3cos x)/4.",
              ],
              box: { label: "Formule", text: "Formules d'Euler : pour tout réel θ, cos θ = (e^(iθ) + e^(-iθ))/2 et sin θ = (e^(iθ) - e^(-iθ))/(2i). Linéarisations utiles : cos²x = (1 + cos 2x)/2, sin²x = (1 - cos 2x)/2." },
            },
          ],
          keyPoints: [
            "e^(iθ) = cos θ + i sin θ : module 1, argument θ.",
            "z = re^(iθ) avec r = |z| > 0 et θ = arg(z) : c'est la forme exponentielle.",
            "Produit : on multiplie les modules et on ajoute les arguments ; quotient : on divise et on soustrait.",
            "Moivre : (e^(iθ))ⁿ = e^(inθ), donc (cos θ + i sin θ)ⁿ = cos(nθ) + i sin(nθ).",
            "Euler : cos θ = (e^(iθ) + e^(-iθ))/2 et sin θ = (e^(iθ) - e^(-iθ))/(2i).",
            "Pour retrouver cos(a + b) ou sin(2a), développer e^(i(a + b)) = e^(ia)e^(ib) et identifier.",
          ],
          example: {
            statement: "Soit z = √3 + i. 1. Écrire z sous forme exponentielle. 2. Calculer z⁶. 3. Déterminer les entiers naturels n pour lesquels zⁿ est un réel.",
            solution: [
              "1. |z| = √(3 + 1) = 2, cos θ = √3/2 et sin θ = 1/2, donc θ = π/6 : z = 2e^(iπ/6).",
              "2. z⁶ = 2⁶ e^(i6π/6) = 64 e^(iπ) = -64.",
              "3. zⁿ = 2ⁿ e^(inπ/6) = 2ⁿ(cos(nπ/6) + i sin(nπ/6)). Ce nombre est réel si et seulement si sin(nπ/6) = 0.",
              "sin(nπ/6) = 0 si et seulement si nπ/6 = kπ avec k entier, c'est-à-dire n = 6k.",
              "Conclusion : zⁿ est réel si et seulement si n est un multiple de 6 (par exemple z⁶ = -64 et z¹² = 4096).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Écrire sous forme exponentielle : z₁ = -4 ; z₂ = -3i ; z₃ = 2 + 2i ; z₄ = -√3 - i. 2. Écrire sous forme algébrique : w = 6e^(i2π/3).",
              hint: "Calculez le module, puis reconnaissez l'angle à partir de son cosinus et de son sinus. Pour w, remplacez e^(i2π/3) par cos(2π/3) + i sin(2π/3).",
              solution: [
                "z₁ = -4 = 4e^(iπ) ; z₂ = -3i = 3e^(-iπ/2).",
                "z₃ : |z₃| = √8 = 2√2, cos θ = sin θ = √2/2, donc z₃ = 2√2 e^(iπ/4).",
                "z₄ : |z₄| = 2, cos θ = -√3/2 et sin θ = -1/2, donc θ = -5π/6 et z₄ = 2e^(-5iπ/6).",
                "w = 6(cos(2π/3) + i sin(2π/3)) = 6(-1/2 + i√3/2) = -3 + 3i√3.",
              ],
            },
            {
              level: 2,
              statement: "On pose a = 1 + i et b = 1 - i√3. 1. Écrire a et b sous forme exponentielle. 2. En déduire la forme exponentielle de ab et de a/b. 3. Calculer a⁸ et b⁹. 4. Écrire a/b sous forme algébrique et en déduire les valeurs exactes de cos(7π/12) et sin(7π/12).",
              hint: "Pour la question 4, calculez a/b en multipliant par le conjugué de b, puis identifiez avec (√2/2)(cos(7π/12) + i sin(7π/12)).",
              solution: [
                "1. a = √2 e^(iπ/4) ; |b| = 2, cos θ = 1/2, sin θ = -√3/2, donc b = 2e^(-iπ/3).",
                "2. ab = 2√2 e^(i(π/4 - π/3)) = 2√2 e^(-iπ/12) ; a/b = (√2/2) e^(i(π/4 + π/3)) = (√2/2) e^(i7π/12).",
                "3. a⁸ = (√2)⁸ e^(i8π/4) = 16 e^(2iπ) = 16. b⁹ = 2⁹ e^(-9iπ/3) = 512 e^(-3iπ) = 512 × (-1) = -512.",
                "4. a/b = (1 + i)(1 + i√3)/((1 - i√3)(1 + i√3)) = (1 + i√3 + i - √3)/4 = (1 - √3)/4 + i(1 + √3)/4.",
                "Par identification avec (√2/2)(cos(7π/12) + i sin(7π/12)) : cos(7π/12) = (1 - √3)/(2√2) = (√2 - √6)/4 et sin(7π/12) = (1 + √3)/(2√2) = (√2 + √6)/4.",
                "Contrôle : (√2 - √6)/4 ≈ -0,259 est bien négatif, car 7π/12 est compris entre π/2 et π.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1. À l'aide de la formule de Moivre et du binôme, démontrer que, pour tout réel x, cos(3x) = 4cos³x - 3cos x et sin(3x) = 3 sin x - 4 sin³x. 2. En déduire que sin³x = (3 sin x - sin(3x))/4. 3. Retrouver ce résultat à l'aide des formules d'Euler. 4. Calculer l'intégrale I de sin³x entre 0 et π.",
              hint: "Question 1 : développez (cos x + i sin x)³ et identifiez avec cos(3x) + i sin(3x), puis utilisez cos²x + sin²x = 1. Question 3 : calculez (e^(ix) - e^(-ix))³ et (2i)³ = -8i.",
              solution: [
                "1. (cos x + i sin x)³ = cos³x + 3i cos²x sin x - 3cos x sin²x - i sin³x. Par Moivre, c'est aussi cos(3x) + i sin(3x).",
                "Partie réelle : cos(3x) = cos³x - 3cos x(1 - cos²x) = 4cos³x - 3cos x. Partie imaginaire : sin(3x) = 3(1 - sin²x)sin x - sin³x = 3 sin x - 4 sin³x.",
                "2. De sin(3x) = 3 sin x - 4 sin³x, on tire 4 sin³x = 3 sin x - sin(3x), donc sin³x = (3 sin x - sin(3x))/4.",
                "3. sin³x = (e^(ix) - e^(-ix))³/(2i)³. Le numérateur vaut e^(3ix) - 3e^(ix) + 3e^(-ix) - e^(-3ix) = 2i sin(3x) - 6i sin x, et (2i)³ = -8i. Donc sin³x = (2i sin(3x) - 6i sin x)/(-8i) = (3 sin x - sin(3x))/4.",
                "4. Une primitive de (3 sin x - sin(3x))/4 est F(x) = (-3cos x + cos(3x)/3)/4.",
                "F(π) = (3 - 1/3)/4 = (8/3)/4 = 2/3 et F(0) = (-3 + 1/3)/4 = -2/3. Donc I = F(π) - F(0) = 4/3.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La forme exponentielle sans piège.",
            statements: [
              { text: "e^(iπ) = -1.", true: true, why: "e^(iπ) = cos π + i sin π = -1 + 0i." },
              { text: "|e^(iθ)| = 1 pour tout réel θ.", true: true, why: "|e^(iθ)|² = cos²θ + sin²θ = 1." },
              { text: "-3e^(iπ/4) est une forme exponentielle, de module -3.", true: false, why: "Un module est positif : -3e^(iπ/4) = 3e^(iπ) e^(iπ/4) = 3e^(i5π/4)." },
              { text: "e^(iθ) + e^(iθ') = e^(i(θ + θ')).", true: false, why: "C'est le produit, et non la somme, qui correspond à l'addition des arguments." },
              { text: "Le conjugué de re^(iθ) est re^(-iθ).", true: true, why: "On garde le module et on change l'argument en son opposé." },
              { text: "(cos θ + i sin θ)ⁿ = cosⁿθ + i sinⁿθ.", true: false, why: "La formule de Moivre donne cos(nθ) + i sin(nθ), et non les puissances du cosinus et du sinus." },
              { text: "e^(iθ) ne change pas si l'on ajoute 2π à θ.", true: true, why: "Le cosinus et le sinus sont 2π-périodiques, donc e^(i(θ + 2π)) = e^(iθ)." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la forme exponentielle de -2i ?",
              options: ["2e^(iπ/2)", "-2e^(iπ/2)", "2e^(-iπ/2)", "2e^(iπ)"],
              answer: 2,
              why: "|-2i| = 2 et le point est sur le demi-axe des imaginaires négatifs : argument -π/2.",
            },
            {
              q: "Que vaut (1 + i)⁶ ?",
              options: ["8i", "-8i", "8", "-8"],
              answer: 1,
              why: "(1 + i)⁶ = (√2)⁶ e^(i6π/4) = 8e^(i3π/2) = -8i ; on peut vérifier avec (2i)³ = -8i.",
            },
            {
              q: "Le produit 3e^(iπ/5) × 2e^(i4π/5) vaut :",
              options: ["-6", "6", "5e^(iπ)", "6e^(i4π/25)"],
              answer: 0,
              why: "On multiplie les modules (6) et on ajoute les arguments (π/5 + 4π/5 = π) : 6e^(iπ) = -6.",
            },
            {
              q: "D'après les formules d'Euler, cos θ est égal à :",
              options: ["(e^(iθ) - e^(-iθ))/2", "(e^(iθ) + e^(-iθ))/(2i)", "(e^(iθ) + e^(-iθ))/2", "e^(iθ) + e^(-iθ)"],
              answer: 2,
              why: "e^(iθ) + e^(-iθ) = 2cos θ, car les parties imaginaires s'annulent.",
            },
            {
              q: "Pour quels entiers naturels n le nombre (e^(iπ/4))ⁿ est-il réel ?",
              options: ["n multiple de 8", "n pair", "n multiple de 3", "n multiple de 4"],
              answer: 3,
              why: "(e^(iπ/4))ⁿ = e^(inπ/4) est réel si et seulement si nπ/4 = kπ, avec k entier, soit n = 4k.",
            },
          ],
          trap: "Additionner les exponentielles comme si e^(ia) + e^(ib) valait e^(i(a + b)) : seule la règle du produit est vraie. Autre erreur : écrire une « forme exponentielle » avec un module négatif, comme -3e^(iπ/4), qui vaut en réalité 3e^(i5π/4).",
          method: "Pour un produit, un quotient ou une puissance, passez en forme exponentielle ; pour une somme, restez en forme algébrique. Pour retrouver une formule de trigonométrie oubliée, développez e^(i(a + b)) = e^(ia)e^(ib) et identifiez parties réelles et imaginaires.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'racines-unite',
          title: 'Les racines n-ièmes de l\'unité',
          minutes: 30,
          objectives: [
            "Déterminer les racines n-ièmes de l'unité et les représenter géométriquement.",
            "Démontrer que la somme des racines n-ièmes de l'unité est nulle pour n ≥ 2.",
            "Résoudre une équation du type zⁿ = a à l'aide des racines n-ièmes de l'unité.",
            "Utiliser les racines n-ièmes de l'unité pour étudier un polygone régulier, par exemple pour calculer cos(2π/5).",
          ],
          course: [
            {
              heading: "Définition et description",
              paragraphs: [
                "Soit n un entier naturel non nul. Une racine n-ième de l'unité est un nombre complexe z tel que zⁿ = 1. On note 𝕌ₙ l'ensemble de ces nombres. Par exemple, 1 et -1 sont les racines carrées de l'unité, et 1, i, -1, -i sont des racines quatrièmes de l'unité, puisque i⁴ = (-1)² = 1.",
                "Théorème : il y a exactement n racines n-ièmes de l'unité, ce sont les nombres ωₖ = e^(2ikπ/n) pour k = 0, 1, ..., n - 1. Démonstration : z = 0 ne convient pas ; on écrit z = re^(iθ) avec r > 0. Alors zⁿ = rⁿe^(inθ) = 1 = 1 × e^(i0) si et seulement si rⁿ = 1 et nθ = 0 [2π], c'est-à-dire r = 1 (car r > 0) et θ = 2kπ/n avec k entier.",
                "Les valeurs k = 0, 1, ..., n - 1 donnent des arguments distincts dans [0 ; 2π[, donc n nombres distincts ; les autres valeurs de k redonnent les mêmes nombres, puisque e^(2i(k + n)π/n) = e^(2ikπ/n) × e^(2iπ) = e^(2ikπ/n). Ce résultat est cohérent avec le fait que le polynôme zⁿ - 1, de degré n, a au plus n racines.",
              ],
              box: { label: "Propriété", text: "Pour tout entier n ≥ 1, l'équation zⁿ = 1 admet exactement n solutions dans ℂ : ωₖ = e^(2ikπ/n), pour k = 0, 1, ..., n - 1. En posant ω = e^(2iπ/n), ce sont 1, ω, ω², ..., ωⁿ⁻¹." },
            },
            {
              heading: "Exemples et représentation géométrique",
              paragraphs: [
                "Pour n = 3, les racines cubiques de l'unité sont 1, j = e^(2iπ/3) = -1/2 + i√3/2 et j² = e^(4iπ/3) = -1/2 - i√3/2. On remarque que j² est le conjugué de j. Pour n = 6, ce sont les nombres e^(ikπ/3) pour k = 0, ..., 5 : 1, 1/2 + i√3/2, -1/2 + i√3/2, -1, -1/2 - i√3/2, 1/2 - i√3/2.",
                "Toutes les racines n-ièmes de l'unité ont pour module 1 : leurs images sont sur le cercle trigonométrique. Deux racines consécutives ωₖ et ωₖ₊₁ ont des arguments qui diffèrent de 2π/n. Pour n ≥ 3, leurs images sont donc les sommets d'un polygone régulier à n côtés, inscrit dans le cercle de centre O et de rayon 1, dont l'un des sommets est le point d'affixe 1 : un triangle équilatéral pour n = 3, un carré pour n = 4, un hexagone régulier pour n = 6.",
                "Le produit de deux racines n-ièmes de l'unité est encore une racine n-ième de l'unité, ainsi que l'inverse et le conjugué d'une racine : si zⁿ = 1, alors (z̄)ⁿ = conj(zⁿ) = 1.",
              ],
              box: { label: "À retenir", text: "j = e^(2iπ/3) = -1/2 + i√3/2 vérifie j³ = 1, j̄ = j² et 1 + j + j² = 0. Les images des racines n-ièmes de l'unité (n ≥ 3) sont les sommets d'un polygone régulier à n côtés, de centre O, dont un sommet est le point d'affixe 1." },
            },
            {
              heading: "La somme des racines n-ièmes de l'unité",
              paragraphs: [
                "Théorème : pour n ≥ 2, la somme des racines n-ièmes de l'unité est nulle. Démonstration : avec ω = e^(2iπ/n), cette somme vaut S = 1 + ω + ω² + ... + ωⁿ⁻¹. Comme n ≥ 2, 2π/n n'est pas un multiple de 2π, donc ω ≠ 1, et la formule de la somme des termes d'une suite géométrique donne S = (1 - ωⁿ)/(1 - ω) = (1 - 1)/(1 - ω) = 0.",
                "Géométriquement, ce résultat signifie que le centre de gravité des sommets du polygone régulier est le centre O du cercle. Pour n = 3, on retrouve 1 + j + j² = 0 ; pour n = 4, 1 + i - 1 - i = 0.",
                "Application au pentagone régulier : pour n = 5, la partie réelle de la somme donne 1 + cos(2π/5) + cos(4π/5) + cos(6π/5) + cos(8π/5) = 0. Or cos(8π/5) = cos(2π/5) et cos(6π/5) = cos(4π/5), donc 1 + 2cos(2π/5) + 2cos(4π/5) = 0. Avec c = cos(2π/5) et cos(4π/5) = 2c² - 1, on obtient 4c² + 2c - 1 = 0 ; comme c > 0, c = (-1 + √5)/4.",
              ],
              box: { label: "Propriété", text: "Pour tout entier n ≥ 2 : 1 + ω + ω² + ... + ωⁿ⁻¹ = 0, avec ω = e^(2iπ/n). Conséquence : cos(2π/5) = (√5 - 1)/4." },
            },
            {
              heading: "Résoudre zⁿ = a",
              paragraphs: [
                "Si l'on connaît une solution particulière z₀ ≠ 0 de l'équation zⁿ = a, toutes les solutions s'en déduisent : zⁿ = a équivaut à zⁿ = z₀ⁿ, c'est-à-dire (z/z₀)ⁿ = 1. Donc z/z₀ est une racine n-ième de l'unité, et les solutions sont les n nombres z₀ωₖ, pour k = 0, 1, ..., n - 1.",
                "Pour trouver z₀, on passe en forme exponentielle. Exemple : résoudre z³ = 8i. On a 8i = 8e^(iπ/2), et z₀ = 2e^(iπ/6) convient, puisque z₀³ = 8e^(iπ/2). Les solutions sont donc 2e^(iπ/6), 2e^(iπ/6) × e^(2iπ/3) = 2e^(5iπ/6) et 2e^(iπ/6) × e^(4iπ/3) = 2e^(3iπ/2) = -2i. Leurs images forment un triangle équilatéral inscrit dans le cercle de centre O et de rayon 2.",
              ],
              box: { label: "Méthode", text: "Pour résoudre zⁿ = a (a ≠ 0) : écrire a = ρe^(iα), poser z = re^(iθ), puis identifier : rⁿ = ρ et nθ = α + 2kπ. On obtient n solutions de module ρ^(1/n) et d'arguments α/n + 2kπ/n, pour k = 0, ..., n - 1." },
            },
          ],
          keyPoints: [
            "zⁿ = 1 a exactement n solutions : e^(2ikπ/n), pour k = 0, 1, ..., n - 1.",
            "Ce sont les puissances 1, ω, ..., ωⁿ⁻¹ de ω = e^(2iπ/n), toutes de module 1.",
            "Pour n ≥ 3, leurs images sont les sommets d'un polygone régulier à n côtés de centre O, dont un sommet a pour affixe 1.",
            "Pour n ≥ 2, leur somme est nulle (somme géométrique de raison ω ≠ 1).",
            "j = e^(2iπ/3) : j³ = 1, j̄ = j², 1 + j + j² = 0.",
            "Si z₀ⁿ = a, les solutions de zⁿ = a sont les z₀ωₖ.",
          ],
          example: {
            statement: "Déterminer les racines sixièmes de l'unité, les écrire sous forme algébrique, décrire leurs images et vérifier que leur somme est nulle.",
            solution: [
              "Les racines sixièmes de l'unité sont les nombres e^(2ikπ/6) = e^(ikπ/3), pour k = 0, 1, 2, 3, 4, 5.",
              "Sous forme algébrique : 1 ; e^(iπ/3) = 1/2 + i√3/2 ; e^(2iπ/3) = -1/2 + i√3/2 ; e^(iπ) = -1 ; e^(4iπ/3) = -1/2 - i√3/2 ; e^(5iπ/3) = 1/2 - i√3/2.",
              "Leurs images sont les sommets d'un hexagone régulier inscrit dans le cercle de centre O et de rayon 1, dont un sommet est le point d'affixe 1.",
              "Somme des parties réelles : 1 + 1/2 - 1/2 - 1 - 1/2 + 1/2 = 0. Somme des parties imaginaires : √3/2 + √3/2 - √3/2 - √3/2 = 0.",
              "Conclusion : la somme des six racines est nulle, conformément au théorème.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Déterminer les racines quatrièmes de l'unité sous forme algébrique et vérifier que leur somme est nulle. 2. En déduire les solutions dans ℂ de l'équation z⁴ = 16.",
              hint: "Utilisez e^(2ikπ/4) = e^(ikπ/2). Pour z⁴ = 16, cherchez d'abord une solution réelle évidente z₀.",
              solution: [
                "1. Les racines quatrièmes de l'unité sont e^(ikπ/2) pour k = 0, 1, 2, 3, soit 1, i, -1 et -i.",
                "Leur somme : 1 + i - 1 - i = 0.",
                "2. z₀ = 2 vérifie z₀⁴ = 16. Les solutions de z⁴ = 16 sont donc les nombres 2ωₖ : 2, 2i, -2 et -2i.",
                "Vérification : (2i)⁴ = 16 × i⁴ = 16. Les solutions sont 2, 2i, -2, -2i, sommets d'un carré de centre O.",
              ],
            },
            {
              level: 2,
              statement: "On pose j = e^(2iπ/3). 1. Écrire j sous forme algébrique. 2. Démontrer que j³ = 1, que j̄ = j² et que 1 + j + j² = 0. 3. Simplifier j²⁰²⁷. 4. Montrer que 1 + j = -j² et en déduire (1 + j)⁶.",
              hint: "Utilisez la forme exponentielle pour j³ et j̄. Pour j²⁰²⁷, divisez 2027 par 3 et utilisez j³ = 1.",
              solution: [
                "1. j = cos(2π/3) + i sin(2π/3) = -1/2 + i√3/2.",
                "2. j³ = e^(2iπ) = 1. j̄ = e^(-2iπ/3) et j² = e^(4iπ/3) = e^(-2iπ/3) × e^(2iπ) = e^(-2iπ/3), donc j̄ = j². Comme j ≠ 1, 1 + j + j² = (1 - j³)/(1 - j) = 0.",
                "3. 2027 = 3 × 675 + 2, donc j²⁰²⁷ = (j³)⁶⁷⁵ × j² = j² = -1/2 - i√3/2.",
                "4. De 1 + j + j² = 0, on tire 1 + j = -j². Donc (1 + j)⁶ = (-j²)⁶ = j¹² = (j³)⁴ = 1.",
                "Contrôle : 1 + j = 1/2 + i√3/2 = e^(iπ/3), et (e^(iπ/3))⁶ = e^(2iπ) = 1.",
              ],
            },
            {
              level: 3,
              statement: "Défi : le pentagone régulier. On pose ω = e^(2iπ/5). 1. Justifier que 1 + ω + ω² + ω³ + ω⁴ = 0. 2. On pose a = ω + ω⁴ et b = ω² + ω³. Montrer que a + b = -1 et ab = -1. 3. En déduire que a et b sont les solutions de l'équation X² + X - 1 = 0. 4. Montrer que a = 2cos(2π/5) et b = 2cos(4π/5). 5. En déduire les valeurs exactes de cos(2π/5) et de cos(4π/5).",
              hint: "Pour ab, développez et utilisez ω⁵ = 1. Pour la question 4, remarquez que ω⁴ = ω⁻¹ est le conjugué de ω, et que ω³ est le conjugué de ω².",
              solution: [
                "1. ω est une racine cinquième de l'unité différente de 1, et 1 + ω + ω² + ω³ + ω⁴ = (1 - ω⁵)/(1 - ω) = 0.",
                "2. a + b = ω + ω² + ω³ + ω⁴ = -1 d'après la question 1. ab = (ω + ω⁴)(ω² + ω³) = ω³ + ω⁴ + ω⁶ + ω⁷ = ω³ + ω⁴ + ω + ω² = -1, car ω⁶ = ω et ω⁷ = ω².",
                "3. a et b ont pour somme -1 et pour produit -1 : ce sont les solutions de X² - (a + b)X + ab = 0, soit X² + X - 1 = 0, dont les solutions sont (-1 + √5)/2 et (-1 - √5)/2.",
                "4. ω⁴ = ω⁵/ω = 1/ω = ω̄, car |ω| = 1. Donc a = ω + ω̄ = 2Re(ω) = 2cos(2π/5). De même ω³ = 1/ω² est le conjugué de ω², donc b = 2cos(4π/5).",
                "5. Comme 0 < 2π/5 < π/2, cos(2π/5) > 0, donc a est la solution positive : a = (-1 + √5)/2 et cos(2π/5) = (√5 - 1)/4. Alors b = (-1 - √5)/2 et cos(4π/5) = -(1 + √5)/4.",
                "Contrôle numérique : (√5 - 1)/4 ≈ 0,309 et -(1 + √5)/4 ≈ -0,809, valeurs de cos(72°) et cos(144°).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution de zⁿ = a, avec a non nul.",
            items: [
              "Écrire a sous forme exponentielle : a = ρe^(iα), avec ρ > 0.",
              "Poser z = re^(iθ) et écrire l'équation : rⁿe^(inθ) = ρe^(iα).",
              "Identifier modules et arguments : rⁿ = ρ et nθ = α + 2kπ, avec k entier.",
              "En déduire r = ρ^(1/n) et θ = α/n + 2kπ/n.",
              "Ne garder que k = 0, 1, ..., n - 1, qui donnent n solutions distinctes.",
              "Placer les solutions : les sommets d'un polygone régulier de centre O.",
            ],
          },
          quiz: [
            {
              q: "Combien y a-t-il de racines cinquièmes de l'unité dans ℂ ?",
              options: ["1", "2", "5", "Une infinité"],
              answer: 2,
              why: "Pour tout n ≥ 1, il y a exactement n racines n-ièmes de l'unité : ici e^(2ikπ/5), pour k de 0 à 4.",
            },
            {
              q: "Lequel de ces nombres est une racine cubique de l'unité ?",
              options: ["e^(iπ/3)", "e^(2iπ/3)", "i", "-1"],
              answer: 1,
              why: "(e^(2iπ/3))³ = e^(2iπ) = 1, alors que (e^(iπ/3))³ = e^(iπ) = -1.",
            },
            {
              q: "Que vaut 1 + j + j², avec j = e^(2iπ/3) ?",
              options: ["0", "1", "3", "-1"],
              answer: 0,
              why: "C'est la somme des trois racines cubiques de l'unité, qui est nulle.",
            },
            {
              q: "Pour n ≥ 3, les images des racines n-ièmes de l'unité sont les sommets :",
              options: ["d'un carré, quelle que soit la valeur de n", "de points alignés sur l'axe des réels", "d'un polygone régulier centré au point d'affixe 1", "d'un polygone régulier de centre O"],
              answer: 3,
              why: "Elles sont sur le cercle de centre O et de rayon 1, régulièrement espacées de 2π/n : elles forment un polygone régulier à n côtés de centre O.",
            },
            {
              q: "Les solutions de z³ = 8 sont :",
              options: ["2 seulement", "2, 2j et 2j²", "2, -2 et 2i", "8, 8j et 8j²"],
              answer: 1,
              why: "2³ = 8, donc les solutions sont 2 multiplié par chaque racine cubique de l'unité : 2, 2j et 2j².",
            },
          ],
          trap: "Oublier des solutions : zⁿ = 1 en a exactement n, et pas seulement 1 et -1. Inversement, prendre k au-delà de n - 1 ne donne pas de nouvelle solution : pour n = 5, k = 5 redonne e^(2iπ) = 1.",
          method: "Pour contrôler un résultat, dessinez le cercle unité et placez les n points régulièrement espacés à partir du point d'affixe 1 : un oubli se voit immédiatement, et la symétrie par rapport à l'axe des réels confirme que les conjugués sont aussi des solutions.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'complexes-et-geometrie',
          title: 'Nombres complexes et géométrie',
          minutes: 35,
          objectives: [
            "Interpréter géométriquement le module et un argument de z_B - z_A et du quotient (z_C - z_A)/(z_B - z_A).",
            "Calculer une distance et une mesure d'angle orienté à l'aide des nombres complexes.",
            "Démontrer un alignement, une orthogonalité ou la nature d'un triangle à l'aide des nombres complexes.",
            "Déterminer un ensemble de points défini par une condition sur un module ou un argument.",
          ],
          course: [
            {
              heading: "Distances et angles orientés",
              paragraphs: [
                "Soient A, B, C des points d'affixes z_A, z_B, z_C. On sait que AB = |z_B - z_A|. Si A ≠ B, le vecteur AB a pour affixe z_B - z_A, donc arg(z_B - z_A) est une mesure de l'angle orienté (u, AB).",
                "Si A est distinct de B et de C, la relation de Chasles sur les angles orientés donne (AB, AC) = (AB, u) + (u, AC) = (u, AC) - (u, AB) [2π]. Comme l'argument d'un quotient est la différence des arguments, on obtient : (AB, AC) = arg((z_C - z_A)/(z_B - z_A)) [2π]. Le module de ce quotient vaut AC/AB.",
                "Le quotient q = (z_C - z_A)/(z_B - z_A) contient donc toute l'information sur la forme du triangle en A : son module compare les longueurs AC et AB, son argument donne l'angle orienté (AB, AC). Attention à l'ordre : le vecteur d'arrivée AC est au numérateur.",
              ],
              box: { label: "Propriété", text: "AB = |z_B - z_A|. Pour A ≠ B et A ≠ C : AC/AB = |(z_C - z_A)/(z_B - z_A)| et (AB, AC) = arg((z_C - z_A)/(z_B - z_A)) [2π]." },
            },
            {
              heading: "Alignement, orthogonalité et nature d'un triangle",
              paragraphs: [
                "Avec A, B, C distincts et q = (z_C - z_A)/(z_B - z_A) : les points A, B, C sont alignés si et seulement si (AB, AC) = 0 [π], c'est-à-dire si et seulement si q est réel. Les droites (AB) et (AC) sont perpendiculaires si et seulement si (AB, AC) = π/2 [π], c'est-à-dire si et seulement si q est imaginaire pur.",
                "Le même raisonnement vaut pour quatre points avec A ≠ B et C ≠ D : (AB) et (CD) sont parallèles si et seulement si (z_D - z_C)/(z_B - z_A) est réel, et perpendiculaires si et seulement s'il est imaginaire pur.",
                "Certaines valeurs de q caractérisent un triangle : q = i signifie AC = AB et (AB, AC) = π/2, donc ABC est rectangle isocèle en A ; q = e^(iπ/3) ou q = e^(-iπ/3) signifie AC = AB et un angle de mesure π/3 en A, donc ABC est équilatéral.",
                "Ces calculs se relient à l'écriture complexe d'une rotation : le point M' image de M par la rotation de centre Ω et d'angle θ vérifie z_M' - z_Ω = e^(iθ)(z_M - z_Ω), puisque ΩM' = ΩM et (ΩM, ΩM') = θ. Ainsi q = i exprime que C est l'image de B par la rotation de centre A et d'angle π/2.",
              ],
              box: { label: "À retenir", text: "Avec q = (z_C - z_A)/(z_B - z_A) : q réel ⇔ A, B, C alignés ; q imaginaire pur ⇔ (AB) ⊥ (AC) ; q = i ⇔ ABC rectangle isocèle en A, de sens direct ; |q| = 1 ⇔ ABC isocèle en A ; q = e^(±iπ/3) ⇔ ABC équilatéral." },
            },
            {
              heading: "Ensembles de points",
              paragraphs: [
                "Une condition sur un module traduit une condition de distance. Si A a pour affixe a : l'ensemble des points M(z) tels que |z - a| = r (r > 0) est le cercle de centre A et de rayon r ; |z - a| ≤ r décrit le disque correspondant. Si B a pour affixe b, |z - a| = |z - b| signifie MA = MB : c'est la médiatrice du segment [AB]. Exemple : |z - 1 + i| = 2 s'écrit |z - (1 - i)| = 2, cercle de centre le point d'affixe 1 - i et de rayon 2.",
                "Une condition sur un argument traduit une condition d'angle. L'ensemble des points M(z) tels que arg(z - a) = θ [2π] est la demi-droite d'origine A, privée de A, dirigée par le vecteur d'affixe e^(iθ) : il faut exclure A, car z - a = 0 n'a pas d'argument.",
                "Quand l'ensemble n'est pas reconnaissable directement, on pose z = x + iy et l'on traduit la condition en une équation cartésienne. Par exemple, |z - 2| = |z + 2i| donne (x - 2)² + y² = x² + (y + 2)², soit -4x + 4 = 4y + 4, c'est-à-dire y = -x : on retrouve la médiatrice du segment joignant les points d'affixes 2 et -2i.",
              ],
              box: { label: "Repère", text: "|z - a| = r : cercle de centre A, de rayon r. |z - a| = |z - b| : médiatrice de [AB]. arg(z - a) = θ [2π] : demi-droite d'origine A (A exclu), de direction θ. En cas de doute : poser z = x + iy." },
            },
          ],
          keyPoints: [
            "AB = |z_B - z_A| et (u, AB) = arg(z_B - z_A) [2π].",
            "(AB, AC) = arg((z_C - z_A)/(z_B - z_A)) [2π] et AC/AB = |(z_C - z_A)/(z_B - z_A)|.",
            "Quotient réel : alignement ; quotient imaginaire pur : orthogonalité.",
            "q = i : triangle rectangle isocèle en A ; q = e^(±iπ/3) : triangle équilatéral.",
            "|z - a| = r : cercle ; |z - a| = |z - b| : médiatrice ; arg(z - a) = θ : demi-droite privée de A.",
            "Rotation de centre Ω et d'angle θ : z' - ω = e^(iθ)(z - ω), où ω est l'affixe de Ω.",
          ],
          example: {
            statement: "On considère les points A, B, C d'affixes z_A = 1 + i, z_B = 3 + 2i et z_C = 3i. Calculer q = (z_C - z_A)/(z_B - z_A) sous forme algébrique et en déduire la nature du triangle ABC, puis son aire.",
            solution: [
              "z_C - z_A = 3i - 1 - i = -1 + 2i et z_B - z_A = 2 + i.",
              "q = (-1 + 2i)/(2 + i) = (-1 + 2i)(2 - i)/((2 + i)(2 - i)) = (-2 + i + 4i - 2i²)/5 = (-2 + 5i + 2)/5 = i.",
              "|q| = 1, donc AC = AB ; arg(q) = π/2, donc (AB, AC) = π/2 [2π].",
              "Le triangle ABC est donc rectangle isocèle en A. AB = |2 + i| = √5.",
              "Aire = AB × AC/2 = √5 × √5/2 = 5/2 unités d'aire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère les points A, B, C d'affixes z_A = 2 - i, z_B = 5 + 3i et z_C = -2 + 2i. 1. Calculer AB, AC et BC. 2. Calculer (z_C - z_A)/(z_B - z_A). 3. En déduire la nature du triangle ABC.",
              hint: "Les longueurs sont des modules de différences. Pour le quotient, multipliez par le conjugué du dénominateur.",
              solution: [
                "1. AB = |3 + 4i| = 5 ; AC = |-4 + 3i| = 5 ; BC = |-7 - i| = √50 = 5√2.",
                "2. (z_C - z_A)/(z_B - z_A) = (-4 + 3i)/(3 + 4i) = (-4 + 3i)(3 - 4i)/25 = (-12 + 16i + 9i - 12i²)/25 = (-12 + 25i + 12)/25 = i.",
                "3. Le quotient vaut i : son module 1 donne AC = AB, son argument π/2 donne (AB, AC) = π/2.",
                "Le triangle ABC est rectangle isocèle en A, ce que confirme AB² + AC² = 25 + 25 = 50 = BC².",
              ],
            },
            {
              level: 2,
              statement: "Déterminer et décrire géométriquement les ensembles suivants de points M d'affixe z : E₁ : |z - 3 + 2i| = 4 ; E₂ : |z + 1| = |z - 3i| ; E₃ : arg(z - 1) = π/4 [2π].",
              hint: "Écrivez chaque condition sous la forme |z - a| ou arg(z - a), en faisant attention aux signes. Pour E₂, vous pouvez aussi poser z = x + iy pour obtenir une équation de droite.",
              solution: [
                "E₁ : |z - (3 - 2i)| = 4, donc E₁ est le cercle de centre Ω d'affixe 3 - 2i et de rayon 4.",
                "E₂ : |z - (-1)| = |z - 3i| signifie MA = MB avec A d'affixe -1 et B d'affixe 3i : E₂ est la médiatrice de [AB].",
                "Équation : (x + 1)² + y² = x² + (y - 3)² donne 2x + 1 = -6y + 9, soit x + 3y - 4 = 0. Contrôle : le milieu de [AB], d'affixe -1/2 + (3/2)i, vérifie -1/2 + 9/2 - 4 = 0.",
                "E₃ : l'argument de z - 1 est π/4 : E₃ est la demi-droite d'origine A(1), privée de A, dirigée par le vecteur d'affixe 1 + i ; ce sont les points d'affixe 1 + t(1 + i) avec t > 0.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On note A et B les points d'affixes i et -1. À tout point M d'affixe z ≠ i, on associe Z = (z + 1)/(z - i). 1. Calculer Z pour z = 1. 2. On pose z = x + iy, avec x et y réels et (x ; y) ≠ (0 ; 1). Montrer que Re(Z) = (x² + y² + x - y)/(x² + (y - 1)²) et Im(Z) = (x - y + 1)/(x² + (y - 1)²). 3. Déterminer l'ensemble E des points M tels que Z soit réel, et l'ensemble F des points M tels que Z soit imaginaire pur. 4. Retrouver ces résultats géométriquement, en interprétant un argument de Z.",
              hint: "Multipliez le numérateur et le dénominateur de Z par le conjugué de x + i(y - 1). Pour F, reconnaissez l'équation d'un cercle en complétant les carrés.",
              solution: [
                "1. Pour z = 1 : Z = 2/(1 - i) = 2(1 + i)/2 = 1 + i.",
                "2. Z = (x + 1 + iy)/(x + i(y - 1)). En multipliant par x - i(y - 1), le dénominateur devient x² + (y - 1)², et le numérateur vaut (x + 1)x + y(y - 1) + i[xy - (x + 1)(y - 1)] = (x² + y² + x - y) + i(x - y + 1). D'où les formules annoncées (contrôle avec x = 1, y = 0 : Z = 1 + i).",
                "3. Z est réel si et seulement si x - y + 1 = 0 : E est la droite d'équation y = x + 1, privée du point A(0 ; 1). C'est la droite (AB), puisque A et B(-1 ; 0) vérifient l'équation.",
                "Z est imaginaire pur si et seulement si x² + y² + x - y = 0, soit (x + 1/2)² + (y - 1/2)² = 1/2. F est le cercle de centre le point d'affixe -1/2 + i/2 et de rayon √2/2, privé de A.",
                "4. Z = (z - z_B)/(z - z_A). Pour M distinct de A et de B, arg(Z) est une mesure de l'angle (MA, MB). Z réel non nul signifie que M, A, B sont alignés ; avec M = B, Z = 0 est réel : on retrouve la droite (AB) privée de A.",
                "Z imaginaire pur non nul signifie (MA) ⊥ (MB) : M est sur le cercle de diamètre [AB], dont le centre est le milieu de [AB], d'affixe (-1 + i)/2, et le rayon AB/2 = √2/2. Avec M = B, Z = 0 convient aussi. On retrouve F : le cercle de diamètre [AB] privé de A.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque condition complexe à sa traduction géométrique.",
            pairs: [
              { left: "|z - z_A| = 3", right: "M est sur le cercle de centre A et de rayon 3" },
              { left: "|z - z_A| = |z - z_B|", right: "M est sur la médiatrice de [AB]" },
              { left: "(z_C - z_A)/(z_B - z_A) réel", right: "A, B et C sont alignés" },
              { left: "(z_C - z_A)/(z_B - z_A) imaginaire pur", right: "(AB) et (AC) sont perpendiculaires" },
              { left: "(z_C - z_A)/(z_B - z_A) = i", right: "ABC est rectangle isocèle en A" },
              { left: "(z_C - z_A)/(z_B - z_A) = e^(iπ/3)", right: "ABC est équilatéral" },
            ],
          },
          quiz: [
            {
              q: "A et B ont pour affixes 1 et 4 + 4i. Que vaut AB ?",
              options: ["5", "7", "25", "√7"],
              answer: 0,
              why: "AB = |z_B - z_A| = |3 + 4i| = √(9 + 16) = 5.",
            },
            {
              q: "Si (z_C - z_A)/(z_B - z_A) = 2i, alors :",
              options: ["ABC est rectangle isocèle en A", "A, B et C sont alignés", "ABC est rectangle en A et AB = 2AC", "ABC est rectangle en A et AC = 2AB"],
              answer: 3,
              why: "Le quotient est imaginaire pur, donc (AB) ⊥ (AC), et son module 2 vaut AC/AB, donc AC = 2AB.",
            },
            {
              q: "L'ensemble des points M(z) tels que |z - i| = |z + 1| est :",
              options: ["le cercle de centre O et de rayon 1", "la droite d'équation y = -x", "la droite d'équation y = x", "le segment d'extrémités i et -1"],
              answer: 1,
              why: "C'est la médiatrice du segment joignant les points d'affixes i et -1 : x² + (y - 1)² = (x + 1)² + y² donne y = -x.",
            },
            {
              q: "Une mesure de l'angle orienté (AB, AC) est donnée par :",
              options: ["arg(z_C - z_A) + arg(z_B - z_A)", "arg((z_C - z_A)/(z_B - z_A))", "|z_C - z_A| / |z_B - z_A|", "arg((z_B - z_A)/(z_C - z_A))"],
              answer: 1,
              why: "(AB, AC) = (u, AC) - (u, AB), soit l'argument du quotient avec le vecteur d'arrivée AC au numérateur.",
            },
            {
              q: "Les points M(z) tels que arg(z) = π/2 [2π] forment :",
              options: ["l'axe des ordonnées tout entier", "le cercle de centre O et de rayon π/2", "le demi-axe des ordonnées positives, O exclu", "le demi-axe des ordonnées négatives, O exclu"],
              answer: 2,
              why: "Ce sont les imaginaires purs iy avec y > 0 ; O est exclu car 0 n'a pas d'argument.",
            },
          ],
          trap: "Inverser le quotient : l'angle (AB, AC) est un argument de (z_C - z_A)/(z_B - z_A), avec le vecteur d'arrivée au numérateur ; le quotient inverse donne l'angle opposé. Autre erreur : oublier d'exclure le point A d'une demi-droite définie par un argument.",
          method: "Choisissez l'outil selon la question : une distance se calcule avec un module ; un angle, un alignement ou une orthogonalité avec le quotient (z_C - z_A)/(z_B - z_A) ; un ensemble de points avec z = x + iy si vous ne reconnaissez pas tout de suite un cercle ou une médiatrice.",
        },
      ],
    },
  ],
}
