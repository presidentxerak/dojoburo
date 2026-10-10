import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-1re',
  chapters: [
    /* ================================================================== */
    /* LE SECOND DEGRÉ                                                      */
    /* ================================================================== */
    {
      id: 'second-degre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'forme-canonique',
          title: 'Forme canonique et variations d’un trinôme',
          minutes: 30,
          objectives: [
            "Reconnaître une fonction polynôme du second degré et identifier ses coefficients a, b et c.",
            "Déterminer la forme canonique d'un trinôme en complétant le carré ou avec α = -b/(2a) et β = f(α).",
            "Établir le tableau de variations d'une fonction polynôme du second degré et en déduire son extremum.",
            "Relier la forme canonique au sommet et à l'axe de symétrie de la parabole.",
          ],
          course: [
            {
              heading: "Fonctions polynômes du second degré",
              paragraphs: [
                "On appelle fonction polynôme du second degré (ou trinôme du second degré) toute fonction f définie sur ℝ par f(x) = ax² + bx + c, où a, b et c sont des nombres réels avec a ≠ 0. Les nombres a, b et c sont les coefficients du trinôme. Par exemple, f(x) = 3x² - 5x + 2 est un trinôme avec a = 3, b = -5 et c = 2, et g(x) = -x² + 4 en est un autre avec a = -1, b = 0 et c = 4.",
                "La condition a ≠ 0 est essentielle : si a = 0, il reste f(x) = bx + c, qui est une fonction affine et non un trinôme. Attention aussi aux expressions qui ne sont pas développées : h(x) = (x - 1)(2x + 3) est un trinôme, car en développant on obtient h(x) = 2x² + x - 3, donc a = 2, b = 1 et c = -3.",
                "La courbe représentative d'une fonction polynôme du second degré dans un repère est une parabole. Elle est « tournée vers le haut » (en forme de U) lorsque a > 0 et « tournée vers le bas » (en forme de U renversé) lorsque a < 0. Le point le plus bas ou le plus haut de la parabole s'appelle son sommet.",
              ],
              box: { label: "Définition", text: "Une fonction polynôme du second degré est une fonction définie sur ℝ par f(x) = ax² + bx + c, avec a, b, c réels et a ≠ 0. Sa courbe représentative est une parabole." },
            },
            {
              heading: "La forme canonique",
              paragraphs: [
                "Tout trinôme f(x) = ax² + bx + c peut s'écrire sous la forme f(x) = a(x - α)² + β, appelée forme canonique, avec α = -b/(2a) et β = f(α). Cette écriture est unique. Elle s'obtient en « complétant le carré » : on factorise par a, puis on reconnaît le début d'une identité remarquable.",
                "Exemple : f(x) = x² + 6x + 1. On remarque que x² + 6x est le début de (x + 3)² = x² + 6x + 9. Donc x² + 6x = (x + 3)² - 9, et f(x) = (x + 3)² - 9 + 1 = (x + 3)² - 8. Ici α = -3 et β = -8. On vérifie avec les formules : α = -6/(2 × 1) = -3 et f(-3) = 9 - 18 + 1 = -8.",
                "Avec un coefficient a différent de 1, on calcule α = -b/(2a), puis β = f(α). Pour f(x) = 2x² - 8x + 3 : α = 8/4 = 2 et β = f(2) = 8 - 16 + 3 = -5, donc f(x) = 2(x - 2)² - 5. Pour contrôler, on redéveloppe : 2(x² - 4x + 4) - 5 = 2x² - 8x + 8 - 5 = 2x² - 8x + 3. C'est bien f(x).",
              ],
              box: { label: "Propriété", text: "Pour tout trinôme f(x) = ax² + bx + c (a ≠ 0), il existe deux réels α et β tels que, pour tout x réel, f(x) = a(x - α)² + β. On a α = -b/(2a) et β = f(α)." },
            },
            {
              heading: "Variations et extremum",
              paragraphs: [
                "La forme canonique donne immédiatement les variations. Si a > 0 : le carré (x - α)² est toujours positif ou nul, donc f(x) = a(x - α)² + β ≥ β, avec égalité seulement pour x = α. La fonction f est décroissante sur ]-∞ ; α], croissante sur [α ; +∞[, et elle admet un minimum égal à β, atteint en x = α.",
                "Si a < 0, c'est l'inverse : a(x - α)² est toujours négatif ou nul, donc f(x) ≤ β. La fonction f est croissante sur ]-∞ ; α], décroissante sur [α ; +∞[, et elle admet un maximum égal à β, atteint en x = α. Une analogie utile : une balle lancée en l'air suit une trajectoire parabolique tournée vers le bas, et le sommet correspond à la hauteur maximale.",
                "Dans le tableau de variations, on place α sur la ligne des x et β au bout des flèches, à l'endroit où elles changent de sens. Par exemple, pour f(x) = 2(x - 2)² - 5, on a a = 2 > 0 : une flèche descend de la gauche jusqu'à la valeur -5 en x = 2, puis une flèche monte vers la droite. Le minimum de f sur ℝ est -5.",
              ],
              box: { label: "À retenir", text: "a > 0 : f décroissante puis croissante, minimum β en α. a < 0 : f croissante puis décroissante, maximum β en α. Dans les deux cas, le changement de sens se fait en α = -b/(2a)." },
            },
            {
              heading: "Sommet et axe de symétrie de la parabole",
              paragraphs: [
                "La parabole représentant f(x) = a(x - α)² + β a pour sommet le point S(α ; β). Elle admet pour axe de symétrie la droite verticale d'équation x = α : deux nombres situés à la même distance de α, comme α - 3 et α + 3, ont la même image, car (-3)² = 3² = 9.",
                "Cette symétrie est un outil de contrôle très pratique : si f(1) = f(5), alors l'abscisse du sommet est le milieu de 1 et 5, c'est-à-dire α = 3. Inversement, connaissant le sommet et un point de la parabole, on peut placer immédiatement le point symétrique et tracer une courbe propre.",
              ],
              box: { label: "Repère", text: "Sommet S(α ; β) avec α = -b/(2a) et β = f(α). Axe de symétrie : la droite d'équation x = α." },
            },
          ],
          keyPoints: [
            "Un trinôme s'écrit f(x) = ax² + bx + c avec a ≠ 0 ; sa courbe est une parabole.",
            "Forme canonique : f(x) = a(x - α)² + β, avec α = -b/(2a) et β = f(α).",
            "Si a > 0, f est décroissante sur ]-∞ ; α] puis croissante sur [α ; +∞[ : minimum β en α.",
            "Si a < 0, f est croissante sur ]-∞ ; α] puis décroissante sur [α ; +∞[ : maximum β en α.",
            "Le sommet de la parabole est S(α ; β) et la droite x = α est son axe de symétrie.",
            "On contrôle une forme canonique en la redéveloppant.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ℝ par f(x) = 2x² - 12x + 10. Déterminez la forme canonique de f, puis dressez son tableau de variations et donnez son extremum.",
            solution: [
              "On identifie les coefficients : a = 2, b = -12 et c = 10.",
              "On calcule α = -b/(2a) = 12/4 = 3, puis β = f(3) = 2 × 9 - 12 × 3 + 10 = 18 - 36 + 10 = -8.",
              "La forme canonique est donc f(x) = 2(x - 3)² - 8.",
              "Vérification : 2(x - 3)² - 8 = 2(x² - 6x + 9) - 8 = 2x² - 12x + 18 - 8 = 2x² - 12x + 10. C'est bien f(x).",
              "Comme a = 2 > 0, f est décroissante sur ]-∞ ; 3] et croissante sur [3 ; +∞[.",
              "Conclusion : f admet un minimum égal à -8, atteint en x = 3. Le sommet de la parabole est S(3 ; -8).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f(x) = x² + 6x + 5 pour x réel. Écrivez f(x) sous forme canonique en complétant le carré, puis donnez les coordonnées du sommet de la parabole et le sens de variation de f.",
              hint: "Reconnaissez dans x² + 6x le début du développement de (x + 3)².",
              solution: [
                "On a (x + 3)² = x² + 6x + 9, donc x² + 6x = (x + 3)² - 9.",
                "Ainsi f(x) = (x + 3)² - 9 + 5 = (x + 3)² - 4.",
                "Contrôle avec les formules : α = -6/2 = -3 et f(-3) = 9 - 18 + 5 = -4.",
                "Le sommet de la parabole est S(-3 ; -4).",
                "Comme a = 1 > 0, f est décroissante sur ]-∞ ; -3] et croissante sur [-3 ; +∞[ ; son minimum est -4.",
              ],
            },
            {
              level: 2,
              statement: "Soit g la fonction définie sur ℝ par g(x) = -3x² + 12x - 7. a) Déterminez la forme canonique de g. b) Dressez le tableau de variations de g. c) Démontrez que, pour tout réel x, g(x) ≤ 5.",
              hint: "Calculez α = -b/(2a) en faisant attention aux signes, puis β = g(α). Pour c), utilisez le signe de -3(x - α)².",
              solution: [
                "a) a = -3, b = 12, c = -7. α = -12/(2 × (-3)) = -12/(-6) = 2 et β = g(2) = -3 × 4 + 24 - 7 = -12 + 24 - 7 = 5.",
                "Donc g(x) = -3(x - 2)² + 5. Vérification : -3(x² - 4x + 4) + 5 = -3x² + 12x - 12 + 5 = -3x² + 12x - 7.",
                "b) Comme a = -3 < 0, g est croissante sur ]-∞ ; 2] et décroissante sur [2 ; +∞[, avec la valeur 5 en x = 2.",
                "c) Pour tout réel x, (x - 2)² ≥ 0, donc -3(x - 2)² ≤ 0 (on multiplie par un nombre négatif, l'inégalité change de sens).",
                "En ajoutant 5 : g(x) = -3(x - 2)² + 5 ≤ 5. Le maximum de g sur ℝ est 5, atteint en x = 2.",
              ],
            },
            {
              level: 3,
              statement: "Un agriculteur dispose de 40 m de grillage pour clôturer un enclos rectangulaire adossé à un mur : le grillage forme seulement trois côtés du rectangle. On note x la longueur, en mètres, de chacun des deux côtés perpendiculaires au mur, avec 0 ≤ x ≤ 20. a) Exprimez la longueur du côté parallèle au mur en fonction de x, puis montrez que l'aire de l'enclos est A(x) = -2x² + 40x. b) Déterminez la forme canonique de A(x). c) Dressez le tableau de variations de A sur [0 ; 20]. d) Quelles dimensions donnent l'aire maximale ? Quelle est cette aire ?",
              hint: "Les trois côtés grillagés mesurent x, x et 40 - 2x. L'aire maximale correspond au sommet de la parabole.",
              solution: [
                "a) Les deux côtés perpendiculaires au mur utilisent 2x mètres de grillage ; il reste 40 - 2x mètres pour le côté parallèle au mur.",
                "L'aire vaut donc A(x) = x(40 - 2x) = 40x - 2x² = -2x² + 40x.",
                "b) a = -2 et b = 40, donc α = -40/(-4) = 10 et β = A(10) = -200 + 400 = 200. Ainsi A(x) = -2(x - 10)² + 200.",
                "c) Comme a = -2 < 0, A est croissante sur [0 ; 10] et décroissante sur [10 ; 20]. Valeurs remarquables : A(0) = 0, A(10) = 200, A(20) = 0.",
                "d) L'aire est maximale pour x = 10 m ; le côté parallèle au mur mesure alors 40 - 20 = 20 m.",
                "Conclusion : l'enclos de 10 m sur 20 m a l'aire maximale, égale à 200 m².",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque trinôme écrit sous forme canonique à la propriété qui lui correspond.",
            pairs: [
              { left: "f(x) = (x - 2)² + 3", right: "Minimum 3 atteint en x = 2" },
              { left: "f(x) = -(x - 2)² + 3", right: "Maximum 3 atteint en x = 2" },
              { left: "f(x) = (x + 2)² - 3", right: "Sommet S(-2 ; -3)" },
              { left: "f(x) = 4(x - 1)² - 5", right: "Décroissante sur ]-∞ ; 1], croissante sur [1 ; +∞[" },
              { left: "f(x) = -2(x + 1)² + 5", right: "Croissante sur ]-∞ ; -1], décroissante sur [-1 ; +∞[" },
              { left: "f(x) = 3x² - 1", right: "Axe de symétrie : la droite x = 0" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la forme canonique de f(x) = x² - 4x + 1 ?",
              options: ["(x - 4)² + 1", "(x - 2)² - 3", "(x + 2)² - 3", "(x - 2)² + 1"],
              answer: 1,
              why: "α = 4/2 = 2 et f(2) = 4 - 8 + 1 = -3, donc f(x) = (x - 2)² - 3.",
            },
            {
              q: "Pour f(x) = -5(x + 1)² + 7, quelle affirmation est vraie ?",
              options: ["f admet un minimum égal à 7", "Le sommet de la parabole est (1 ; 7)", "f est décroissante sur ℝ", "f admet un maximum égal à 7"],
              answer: 3,
              why: "a = -5 < 0, donc f admet un maximum, égal à β = 7, atteint en α = -1.",
            },
            {
              q: "Quelle est l'abscisse du sommet de la parabole d'équation y = 3x² + 12x - 2 ?",
              options: ["-2", "2", "-4", "4"],
              answer: 0,
              why: "α = -b/(2a) = -12/6 = -2.",
            },
            {
              q: "Une parabole représentant un trinôme passe par les points (1 ; 4) et (7 ; 4). Que peut-on en déduire ?",
              options: ["Son sommet a pour ordonnée 4", "Elle est tournée vers le haut", "Son axe de symétrie est la droite x = 4", "Le coefficient a vaut 4"],
              answer: 2,
              why: "Deux points de même ordonnée sont symétriques par rapport à l'axe : celui-ci passe par le milieu de 1 et 7, soit x = 4.",
            },
            {
              q: "Sur quel intervalle la fonction f(x) = 2(x - 3)² + 1 est-elle croissante ?",
              options: ["]-∞ ; 3]", "[3 ; +∞[", "[1 ; +∞[", "]-∞ ; 1]"],
              answer: 1,
              why: "a = 2 > 0 : f décroît jusqu'à α = 3 puis croît sur [3 ; +∞[.",
            },
          ],
          trap: "Se tromper de signe dans la forme canonique : f(x) = 2(x + 3)² - 1 a pour sommet S(-3 ; -1) et non S(3 ; -1), car x + 3 = x - (-3), donc α = -3.",
          method: "Après avoir trouvé une forme canonique, redéveloppez-la toujours : si vous retrouvez exactement ax² + bx + c, votre calcul est juste. Contrôlez aussi que β = f(α) en calculant directement l'image de α.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'discriminant-equations',
          title: 'Résoudre une équation du second degré : le discriminant',
          minutes: 30,
          objectives: [
            "Calculer le discriminant d'un trinôme du second degré.",
            "Résoudre une équation du second degré en distinguant les cas Δ > 0, Δ = 0 et Δ < 0.",
            "Choisir la méthode la plus rapide (factorisation directe, racine évidente ou discriminant).",
            "Résoudre un problème conduisant à une équation du second degré, éventuellement avec un paramètre.",
          ],
          course: [
            {
              heading: "Racines d'un trinôme et discriminant",
              paragraphs: [
                "On appelle racine du trinôme f(x) = ax² + bx + c (a ≠ 0) tout réel x tel que f(x) = 0. Chercher les racines revient à résoudre l'équation ax² + bx + c = 0, et, graphiquement, à chercher les abscisses des points d'intersection de la parabole avec l'axe des abscisses.",
                "Le nombre Δ = b² - 4ac s'appelle le discriminant du trinôme. Il se lit « delta ». Par exemple, pour 2x² - 3x - 2, on a a = 2, b = -3, c = -2 et Δ = (-3)² - 4 × 2 × (-2) = 9 + 16 = 25. Attention à bien mettre b entre parenthèses quand il est négatif : (-3)² = 9, alors que -3² = -9.",
                "D'où vient ce nombre ? En partant de la forme canonique, on peut écrire ax² + bx + c = a[(x + b/(2a))² - Δ/(4a²)]. Le signe de Δ décide donc si l'expression entre crochets peut s'annuler : si Δ < 0, on ajoute au carré un nombre strictement positif et l'expression ne s'annule jamais ; si Δ ≥ 0, on reconnaît une différence de deux carrés, que l'on peut factoriser.",
              ],
              box: { label: "Définition", text: "Le discriminant du trinôme ax² + bx + c (a ≠ 0) est le nombre réel Δ = b² - 4ac." },
            },
            {
              heading: "Les trois cas de résolution",
              paragraphs: [
                "Si Δ > 0, l'équation ax² + bx + c = 0 admet deux solutions distinctes : x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a). La parabole coupe l'axe des abscisses en deux points. Exemple : 2x² - 3x - 2 = 0, Δ = 25, √Δ = 5, donc x₁ = (3 - 5)/4 = -1/2 et x₂ = (3 + 5)/4 = 2.",
                "Si Δ = 0, l'équation admet une unique solution (on parle de racine double) : x₀ = -b/(2a). La parabole touche l'axe des abscisses en un seul point, son sommet. Exemple : x² - 6x + 9 = 0, Δ = 36 - 36 = 0, donc x₀ = 6/2 = 3. On reconnaissait d'ailleurs (x - 3)² = 0.",
                "Si Δ < 0, l'équation n'admet aucune solution réelle : la parabole ne coupe pas l'axe des abscisses. Exemple : x² + x + 1 = 0, Δ = 1 - 4 = -3 < 0, donc aucune solution. On écrit alors S = ∅ (l'ensemble vide).",
              ],
              box: { label: "Propriété", text: "Δ > 0 : deux solutions x₁ = (-b - √Δ)/(2a) et x₂ = (-b + √Δ)/(2a). Δ = 0 : une solution x₀ = -b/(2a). Δ < 0 : aucune solution réelle." },
            },
            {
              heading: "Choisir la bonne méthode",
              paragraphs: [
                "Le discriminant fonctionne toujours, mais il n'est pas toujours le plus rapide. Si c = 0, on factorise par x : 3x² - 7x = 0 équivaut à x(3x - 7) = 0, donc x = 0 ou x = 7/3. Si b = 0, on isole x² : 2x² - 18 = 0 équivaut à x² = 9, donc x = -3 ou x = 3.",
                "Si l'équation n'est pas écrite sous la forme « ... = 0 », il faut d'abord tout passer dans un même membre. Par exemple, 2x² = 3x + 5 devient 2x² - 3x - 5 = 0 ; on a alors a = 2, b = -3, c = -5, Δ = 9 + 40 = 49, et les solutions sont (3 - 7)/4 = -1 et (3 + 7)/4 = 5/2.",
                "Pensez enfin à vérifier une solution en la remplaçant dans l'équation de départ : pour x = 5/2, 2 × (25/4) = 12,5 et 3 × 2,5 + 5 = 12,5. L'égalité est vérifiée. Ce contrôle prend quelques secondes et évite de nombreuses erreurs de signe.",
              ],
              box: { label: "Méthode", text: "1. Écrire l'équation sous la forme ax² + bx + c = 0. 2. Repérer un cas simple (b = 0 ou c = 0). 3. Sinon, calculer Δ. 4. Conclure selon le signe de Δ. 5. Vérifier les solutions." },
            },
          ],
          keyPoints: [
            "Une racine de ax² + bx + c est une solution de ax² + bx + c = 0 : c'est l'abscisse d'un point où la parabole coupe l'axe des abscisses.",
            "Discriminant : Δ = b² - 4ac. Mettre b entre parenthèses s'il est négatif.",
            "Δ > 0 : deux solutions (-b - √Δ)/(2a) et (-b + √Δ)/(2a).",
            "Δ = 0 : une solution double -b/(2a). Δ < 0 : aucune solution réelle.",
            "Si b = 0 ou c = 0, une méthode directe est plus rapide que le discriminant.",
            "Toujours ramener l'équation à la forme « ... = 0 » avant d'identifier a, b et c.",
          ],
          example: {
            statement: "Résolvez dans ℝ l'équation 2x² - 3x - 2 = 0.",
            solution: [
              "L'équation est de la forme ax² + bx + c = 0 avec a = 2, b = -3 et c = -2.",
              "On calcule le discriminant : Δ = (-3)² - 4 × 2 × (-2) = 9 + 16 = 25.",
              "Δ > 0, donc l'équation admet deux solutions, et √Δ = 5.",
              "x₁ = (-b - √Δ)/(2a) = (3 - 5)/4 = -2/4 = -1/2 et x₂ = (-b + √Δ)/(2a) = (3 + 5)/4 = 2.",
              "Vérification : 2 × 2² - 3 × 2 - 2 = 8 - 6 - 2 = 0 et 2 × (1/4) - 3 × (-1/2) - 2 = 0,5 + 1,5 - 2 = 0.",
              "Conclusion : S = {-1/2 ; 2}.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résolvez dans ℝ les trois équations suivantes : a) x² - 5x + 6 = 0 ; b) x² - 4x + 4 = 0 ; c) 3x² + x + 1 = 0.",
              hint: "Pour chacune, identifiez a, b et c, calculez Δ = b² - 4ac, puis appliquez le cas qui correspond au signe de Δ.",
              solution: [
                "a) a = 1, b = -5, c = 6 : Δ = 25 - 24 = 1 > 0 et √Δ = 1. Les solutions sont (5 - 1)/2 = 2 et (5 + 1)/2 = 3. S = {2 ; 3}.",
                "b) a = 1, b = -4, c = 4 : Δ = 16 - 16 = 0. Une seule solution : x₀ = 4/2 = 2. S = {2}. (On reconnaissait (x - 2)² = 0.)",
                "c) a = 3, b = 1, c = 1 : Δ = 1 - 12 = -11 < 0. Aucune solution réelle : S = ∅.",
              ],
            },
            {
              level: 2,
              statement: "Résolvez dans ℝ : a) -x² + 2x + 1 = 0 ; b) 2x² = 3x + 5 ; c) 5x² - 20 = 0.",
              hint: "En a), gardez la racine carrée sous forme exacte et simplifiez √8. En b), passez tout dans le membre de gauche. En c), b = 0 : inutile de calculer Δ.",
              solution: [
                "a) a = -1, b = 2, c = 1 : Δ = 4 - 4 × (-1) × 1 = 4 + 4 = 8 > 0 et √8 = 2√2.",
                "x₁ = (-2 - 2√2)/(-2) = 1 + √2 et x₂ = (-2 + 2√2)/(-2) = 1 - √2. S = {1 - √2 ; 1 + √2}.",
                "b) L'équation équivaut à 2x² - 3x - 5 = 0 : Δ = 9 + 40 = 49 et √Δ = 7. Solutions : (3 - 7)/4 = -1 et (3 + 7)/4 = 5/2. S = {-1 ; 5/2}.",
                "c) 5x² - 20 = 0 équivaut à x² = 4, donc x = -2 ou x = 2. S = {-2 ; 2}.",
              ],
            },
            {
              level: 3,
              statement: "Soit m un nombre réel. On considère l'équation (E) : x² + mx + 4 = 0. a) Résolvez (E) lorsque m = 5. b) Exprimez le discriminant de (E) en fonction de m. c) Déterminez les valeurs de m pour lesquelles (E) admet une unique solution, et donnez cette solution dans chaque cas. d) Pour quelles valeurs de m l'équation (E) n'admet-elle aucune solution réelle ?",
              hint: "Le discriminant dépend de m : Δ = m² - 16. Une unique solution correspond à Δ = 0, aucune solution à Δ < 0.",
              solution: [
                "a) Pour m = 5 : x² + 5x + 4 = 0, Δ = 25 - 16 = 9 et √Δ = 3. Solutions : (-5 - 3)/2 = -4 et (-5 + 3)/2 = -1. S = {-4 ; -1}.",
                "b) Ici a = 1, b = m et c = 4, donc Δ = m² - 16.",
                "c) (E) admet une unique solution si et seulement si Δ = 0, c'est-à-dire m² = 16, soit m = -4 ou m = 4.",
                "Pour m = 4, la solution est x₀ = -4/2 = -2 (on a x² + 4x + 4 = (x + 2)²). Pour m = -4, la solution est x₀ = 4/2 = 2 (on a (x - 2)²).",
                "d) (E) n'a aucune solution si Δ < 0, c'est-à-dire m² < 16, ce qui équivaut à -4 < m < 4.",
                "Conclusion : une solution pour m = ±4, aucune solution pour m ∈ ]-4 ; 4[, deux solutions sinon.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution de 3x² = 2x + 1.",
            items: [
              "Écrire l'équation sous la forme 3x² - 2x - 1 = 0",
              "Identifier a = 3, b = -2 et c = -1",
              "Calculer Δ = (-2)² - 4 × 3 × (-1) = 16",
              "Constater que Δ > 0 : il y a deux solutions",
              "Calculer x₁ = (2 - 4)/6 = -1/3 et x₂ = (2 + 4)/6 = 1",
              "Vérifier en remplaçant x par 1 : 3 = 2 + 1",
              "Conclure : S = {-1/3 ; 1}",
            ],
          },
          quiz: [
            {
              q: "Quel est le discriminant de 2x² - x - 3 ?",
              options: ["-23", "1", "25", "-25"],
              answer: 2,
              why: "Δ = (-1)² - 4 × 2 × (-3) = 1 + 24 = 25.",
            },
            {
              q: "Combien de solutions réelles l'équation x² + 2x + 5 = 0 admet-elle ?",
              options: ["Aucune", "Une seule", "Deux", "Une infinité"],
              answer: 0,
              why: "Δ = 4 - 20 = -16 < 0 : il n'y a aucune solution réelle.",
            },
            {
              q: "Si Δ = 0, quelle est l'unique solution de ax² + bx + c = 0 ?",
              options: ["b/(2a)", "-c/a", "-b/a", "-b/(2a)"],
              answer: 3,
              why: "La racine double vaut x₀ = -b/(2a), l'abscisse du sommet de la parabole.",
            },
            {
              q: "Quelles sont les solutions de x² - 7x = 0 ?",
              options: ["7 seulement", "0 et 7", "-7 et 7", "0 et -7"],
              answer: 1,
              why: "x² - 7x = x(x - 7) : le produit est nul si x = 0 ou x = 7.",
            },
            {
              q: "La parabole d'équation y = ax² + bx + c ne coupe pas l'axe des abscisses. Que vaut le signe de Δ ?",
              options: ["Δ > 0", "Δ = 0", "Δ < 0", "On ne peut pas savoir"],
              answer: 2,
              why: "Aucun point d'intersection signifie aucune racine réelle, ce qui correspond à Δ < 0.",
            },
          ],
          trap: "Calculer Δ avec -3² au lieu de (-3)² quand b est négatif : b² est toujours positif ou nul. Autre erreur fréquente : identifier a, b et c sans avoir d'abord ramené l'équation à la forme ax² + bx + c = 0.",
          method: "Écrivez toujours sur votre copie la ligne « a = ..., b = ..., c = ... » avant de calculer Δ, en gardant les signes. Puis vérifiez au moins une solution dans l'équation de départ : une erreur de signe se voit immédiatement.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'signe-factorisation',
          title: 'Signe d’un trinôme, factorisation, somme et produit des racines',
          minutes: 35,
          objectives: [
            "Factoriser un trinôme du second degré lorsque c'est possible.",
            "Déterminer le signe d'un trinôme et résoudre une inéquation du second degré.",
            "Utiliser la somme et le produit des racines pour trouver une racine ou deux nombres connaissant leur somme et leur produit.",
          ],
          course: [
            {
              heading: "Factoriser un trinôme",
              paragraphs: [
                "Soit f(x) = ax² + bx + c avec a ≠ 0 et Δ = b² - 4ac. Si Δ > 0, le trinôme a deux racines x₁ et x₂, et il se factorise : f(x) = a(x - x₁)(x - x₂). Si Δ = 0, il a une racine double x₀ et f(x) = a(x - x₀)². Si Δ < 0, le trinôme ne peut pas s'écrire comme produit de facteurs du premier degré.",
                "Exemple : f(x) = 2x² - 8x + 6. On a Δ = 64 - 48 = 16, d'où x₁ = (8 - 4)/4 = 1 et x₂ = (8 + 4)/4 = 3. Donc f(x) = 2(x - 1)(x - 3). Il ne faut pas oublier le coefficient a devant les parenthèses : (x - 1)(x - 3) = x² - 4x + 3, qui n'est pas égal à f(x).",
              ],
              box: { label: "Propriété", text: "Δ > 0 : ax² + bx + c = a(x - x₁)(x - x₂). Δ = 0 : ax² + bx + c = a(x - x₀)². Δ < 0 : pas de factorisation en facteurs du premier degré." },
            },
            {
              heading: "Le signe d'un trinôme",
              paragraphs: [
                "Le signe d'un trinôme se lit sur la factorisation, ou plus simplement sur la parabole. Si Δ < 0, la parabole ne coupe jamais l'axe des abscisses : f(x) est toujours du signe de a. Si Δ = 0, f(x) est du signe de a et s'annule seulement en x₀.",
                "Si Δ > 0, avec x₁ < x₂, f(x) est du signe de a à l'extérieur des racines (pour x < x₁ ou x > x₂), et du signe contraire de a entre les racines. Avec a > 0, la parabole en U passe sous l'axe entre x₁ et x₂ ; avec a < 0, elle passe au-dessus de l'axe entre les racines.",
                "Pour résoudre une inéquation comme -x² + x + 6 > 0, on cherche les racines : Δ = 1 + 24 = 25, x₁ = (-1 + 5)/(-2) = -2 et x₂ = (-1 - 5)/(-2) = 3. Comme a = -1 < 0, le trinôme est positif entre les racines : S = ]-2 ; 3[. On contrôle avec une valeur simple : pour x = 0, -0 + 0 + 6 = 6 > 0, et 0 est bien dans ]-2 ; 3[.",
              ],
              box: { label: "Règle", text: "Un trinôme est du signe de a, sauf entre ses racines (lorsqu'il en a deux) où il est du signe contraire de a." },
            },
            {
              heading: "Somme et produit des racines",
              paragraphs: [
                "Lorsque Δ ≥ 0, les racines x₁ et x₂ de ax² + bx + c (éventuellement confondues) vérifient x₁ + x₂ = -b/a et x₁ × x₂ = c/a. Cela se démontre en développant a(x - x₁)(x - x₂) = ax² - a(x₁ + x₂)x + a x₁x₂ et en identifiant les coefficients avec ax² + bx + c.",
                "Première utilisation : trouver la seconde racine quand une racine est évidente. Pour 2x² + 3x - 5, on remarque que x = 1 donne 2 + 3 - 5 = 0. Le produit des racines vaut c/a = -5/2, donc 1 × x₂ = -5/2 et x₂ = -5/2. On contrôle avec la somme : 1 - 5/2 = -3/2 = -b/a.",
                "Seconde utilisation : trouver deux nombres dont on connaît la somme S et le produit P. Ce sont les solutions de l'équation x² - Sx + P = 0. Par exemple, deux nombres de somme 10 et de produit 21 sont les solutions de x² - 10x + 21 = 0 : Δ = 100 - 84 = 16, d'où 3 et 7.",
              ],
              box: { label: "Formule", text: "Si Δ ≥ 0 : x₁ + x₂ = -b/a et x₁ × x₂ = c/a. Deux nombres de somme S et de produit P sont les solutions de x² - Sx + P = 0." },
            },
          ],
          keyPoints: [
            "Si Δ > 0 : ax² + bx + c = a(x - x₁)(x - x₂) ; si Δ = 0 : a(x - x₀)² ; si Δ < 0 : pas de factorisation.",
            "Un trinôme est du signe de a, sauf entre ses deux racines où il est du signe de -a.",
            "Pour une inéquation : tout passer dans un membre, chercher les racines, appliquer la règle des signes, conclure par un intervalle.",
            "Somme des racines : -b/a ; produit des racines : c/a.",
            "Deux nombres de somme S et de produit P sont les solutions de x² - Sx + P = 0.",
          ],
          example: {
            statement: "Résolvez dans ℝ l'inéquation -x² + x + 6 > 0.",
            solution: [
              "On étudie le trinôme f(x) = -x² + x + 6 avec a = -1, b = 1, c = 6.",
              "Δ = 1² - 4 × (-1) × 6 = 1 + 24 = 25 > 0, donc deux racines.",
              "x₁ = (-1 + 5)/(-2) = -2 et x₂ = (-1 - 5)/(-2) = 3.",
              "Comme a = -1 < 0, f(x) est négatif à l'extérieur des racines et positif strictement entre -2 et 3.",
              "L'inégalité étant stricte, les racines sont exclues.",
              "Conclusion : S = ]-2 ; 3[.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f(x) = 2x² - 8x + 6. a) Factorisez f(x). b) Dressez le tableau de signes de f(x) sur ℝ.",
              hint: "Calculez Δ et les deux racines, puis écrivez f(x) = a(x - x₁)(x - x₂) sans oublier a.",
              solution: [
                "a) Δ = (-8)² - 4 × 2 × 6 = 64 - 48 = 16 et √Δ = 4. Les racines sont (8 - 4)/4 = 1 et (8 + 4)/4 = 3.",
                "Donc f(x) = 2(x - 1)(x - 3).",
                "b) a = 2 > 0 : f(x) est positif à l'extérieur des racines et négatif entre elles.",
                "Tableau de signes : f(x) > 0 sur ]-∞ ; 1[, f(1) = 0, f(x) < 0 sur ]1 ; 3[, f(3) = 0, f(x) > 0 sur ]3 ; +∞[.",
              ],
            },
            {
              level: 2,
              statement: "Résolvez dans ℝ les inéquations : a) x² - x - 12 ≤ 0 ; b) 4x² - 4x + 1 > 0 ; c) x² + x + 3 < 0.",
              hint: "Pour chacune, calculez Δ, puis utilisez la règle « signe de a sauf entre les racines ». Faites attention aux inégalités larges ou strictes.",
              solution: [
                "a) Δ = 1 + 48 = 49, racines (1 - 7)/2 = -3 et (1 + 7)/2 = 4. Comme a = 1 > 0, le trinôme est négatif ou nul entre les racines, racines comprises : S = [-3 ; 4].",
                "b) Δ = 16 - 16 = 0, racine double x₀ = 4/8 = 1/2, et 4x² - 4x + 1 = (2x - 1)². Ce carré est strictement positif sauf en x = 1/2 : S = ]-∞ ; 1/2[ ∪ ]1/2 ; +∞[.",
                "c) Δ = 1 - 12 = -11 < 0 : le trinôme est toujours du signe de a = 1, donc strictement positif. Il n'est jamais strictement négatif : S = ∅.",
              ],
            },
            {
              level: 3,
              statement: "Soit f la fonction définie sur ℝ par f(x) = 2x² + 3x - 5. a) Vérifiez que 1 est une racine de f. b) À l'aide du produit des racines, déterminez l'autre racine sans calculer le discriminant, puis contrôlez avec la somme. c) Factorisez f(x). d) Résolvez l'inéquation f(x) < 0. e) Déterminez deux nombres réels dont la somme vaut 10 et le produit 21.",
              hint: "Le produit des racines vaut c/a. Pour e), écrivez l'équation x² - Sx + P = 0.",
              solution: [
                "a) f(1) = 2 + 3 - 5 = 0, donc 1 est une racine de f.",
                "b) Le produit des racines vaut c/a = -5/2. Avec x₁ = 1, on obtient x₂ = -5/2. Contrôle : x₁ + x₂ = 1 - 5/2 = -3/2 = -b/a.",
                "c) f(x) = 2(x - 1)(x + 5/2), que l'on peut aussi écrire f(x) = (x - 1)(2x + 5).",
                "d) a = 2 > 0, donc f(x) est strictement négatif entre les racines : S = ]-5/2 ; 1[.",
                "e) Ces deux nombres sont les solutions de x² - 10x + 21 = 0. Δ = 100 - 84 = 16, d'où (10 - 4)/2 = 3 et (10 + 4)/2 = 7.",
                "Conclusion de e) : les nombres cherchés sont 3 et 7 (on vérifie : 3 + 7 = 10 et 3 × 7 = 21).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : signe et factorisation d'un trinôme.",
            statements: [
              { text: "Si Δ < 0, le trinôme est toujours du signe de a.", true: true, why: "La parabole ne coupe pas l'axe des abscisses : elle reste entièrement au-dessus (a > 0) ou au-dessous (a < 0)." },
              { text: "x² - 4x + 3 = (x - 1)(x - 3), donc 2x² - 8x + 6 = (x - 1)(x - 3).", true: false, why: "Il manque le coefficient a = 2 : 2x² - 8x + 6 = 2(x - 1)(x - 3)." },
              { text: "Un trinôme avec a > 0 et deux racines est négatif entre ses racines.", true: true, why: "Il est du signe contraire de a entre les racines." },
              { text: "Le trinôme -x² + 1 est positif pour tout réel x.", true: false, why: "Il vaut -3 pour x = 2 : il n'est positif qu'entre ses racines -1 et 1, car a = -1 < 0." },
              { text: "Le produit des racines de 3x² - 5x - 6 vaut -2.", true: true, why: "Δ = 25 + 72 = 97 > 0 et le produit vaut c/a = -6/3 = -2." },
              { text: "La somme des racines de x² + 7x + 10 vaut 7.", true: false, why: "La somme vaut -b/a = -7 (les racines sont -2 et -5)." },
              { text: "Un trinôme dont le discriminant est négatif ne peut pas se factoriser en produit de deux facteurs du premier degré.", true: true, why: "Une telle factorisation ferait apparaître des racines, or il n'y en a pas." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la factorisation de x² - x - 6 ?",
              options: ["(x - 2)(x + 3)", "(x + 1)(x - 6)", "(x - 3)(x + 2)", "(x - 1)(x + 6)"],
              answer: 2,
              why: "Δ = 1 + 24 = 25, racines (1 - 5)/2 = -2 et (1 + 5)/2 = 3, donc x² - x - 6 = (x - 3)(x + 2).",
            },
            {
              q: "Quel est l'ensemble des solutions de x² - 9 > 0 ?",
              options: ["]-3 ; 3[", "]-∞ ; -3[ ∪ ]3 ; +∞[", "]3 ; +∞[", "]-∞ ; 3["],
              answer: 1,
              why: "Les racines sont -3 et 3 ; avec a = 1 > 0, le trinôme est positif à l'extérieur des racines.",
            },
            {
              q: "Les racines de 5x² + bx + c sont 2 et -3. Que vaut leur produit c/5 ?",
              options: ["-6", "6", "-1", "1"],
              answer: 0,
              why: "Le produit des racines est 2 × (-3) = -6 (c'est c/a, donc c = -30).",
            },
            {
              q: "Le trinôme -2x² + 4x - 5 a pour discriminant -24. Quel est son signe ?",
              options: ["Positif sur ℝ", "Positif puis négatif", "Négatif puis positif", "Strictement négatif sur ℝ"],
              answer: 3,
              why: "Δ < 0 : le trinôme est toujours du signe de a = -2, donc strictement négatif.",
            },
            {
              q: "Deux nombres ont pour somme 5 et pour produit 6. De quelle équation sont-ils solutions ?",
              options: ["x² + 5x + 6 = 0", "x² - 5x + 6 = 0", "x² - 6x + 5 = 0", "x² + 5x - 6 = 0"],
              answer: 1,
              why: "Deux nombres de somme S et de produit P sont solutions de x² - Sx + P = 0, ici x² - 5x + 6 = 0 (solutions 2 et 3).",
            },
          ],
          trap: "Appliquer « positif entre les racines » sans regarder le signe de a : c'est vrai seulement si a < 0. Avec a > 0, le trinôme est négatif entre les racines.",
          method: "Avant de conclure une inéquation, dessinez une parabole à main levée (tournée vers le haut si a > 0, vers le bas si a < 0) passant par les racines : la partie située au-dessus de l'axe donne les valeurs où le trinôme est positif. Contrôlez ensuite avec une valeur simple comme x = 0.",
        },
      ],
    },

    /* ================================================================== */
    /* LES SUITES NUMÉRIQUES                                                */
    /* ================================================================== */
    {
      id: 'suites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'generer-une-suite',
          title: 'Définir une suite : formule explicite ou relation de récurrence',
          minutes: 25,
          objectives: [
            "Calculer des termes d'une suite définie par une formule explicite ou par une relation de récurrence.",
            "Distinguer uₙ₊₁ et uₙ + 1, et exprimer uₙ₊₁ ou u₂ₙ à partir d'une formule explicite.",
            "Représenter graphiquement une suite par un nuage de points.",
            "Modéliser une situation d'évolution par une suite et calculer ses termes avec un programme Python.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une suite ?",
              paragraphs: [
                "Une suite numérique u est une fonction qui, à tout entier naturel n (éventuellement à partir d'un certain rang), associe un nombre réel noté uₙ (on lit « u indice n »). Le nombre uₙ est le terme de rang n, ou terme d'indice n, et n est l'indice. La suite elle-même se note u ou (uₙ).",
                "Une suite est une liste ordonnée et infinie de nombres : u₀, u₁, u₂, u₃... Les suites servent à modéliser des phénomènes qui évoluent par étapes (chaque année, chaque mois, chaque génération) : on parle de modèles discrets, par opposition aux fonctions définies sur un intervalle qui décrivent des évolutions continues.",
                "Attention au rang : si la suite commence à u₀, le terme u₅ est le sixième terme ; si elle commence à u₁, u₅ est le cinquième. Il faut toujours lire dans l'énoncé quel est le premier indice.",
              ],
              box: { label: "Définition", text: "Une suite numérique (uₙ) associe à chaque entier naturel n un réel uₙ, appelé terme de rang n. L'entier n est l'indice du terme." },
            },
            {
              heading: "Suite définie par une formule explicite",
              paragraphs: [
                "Une suite est définie de façon explicite lorsque uₙ est donné directement en fonction de n : uₙ = f(n), où f est une fonction. Par exemple, uₙ = n² - 2n donne u₀ = 0, u₁ = -1, u₂ = 0, u₃ = 3, et l'on peut calculer directement u₁₀ = 100 - 20 = 80 sans connaître les termes précédents.",
                "Avec une formule explicite, on peut aussi exprimer des termes d'indice quelconque en remplaçant n par une expression. Pour uₙ = 3n - 1, on obtient uₙ₊₁ = 3(n + 1) - 1 = 3n + 2 et u₂ₙ = 3 × 2n - 1 = 6n - 1. Attention : uₙ₊₁ (le terme suivant) n'est pas uₙ + 1 (le terme augmenté de 1). Ici uₙ + 1 = 3n, alors que uₙ₊₁ = 3n + 2.",
              ],
              box: { label: "À retenir", text: "Formule explicite : uₙ = f(n). On calcule n'importe quel terme directement. uₙ₊₁ s'obtient en remplaçant n par n + 1 dans la formule." },
            },
            {
              heading: "Suite définie par une relation de récurrence",
              paragraphs: [
                "Une suite est définie par récurrence lorsque l'on donne son premier terme et une relation qui permet de calculer chaque terme à partir du précédent : u₀ donné et, pour tout n, uₙ₊₁ = f(uₙ). Par exemple, u₀ = 5 et uₙ₊₁ = 2uₙ - 3 donnent u₁ = 2 × 5 - 3 = 7, u₂ = 2 × 7 - 3 = 11, u₃ = 2 × 11 - 3 = 19.",
                "L'image à garder en tête est celle d'une échelle : pour atteindre le dixième barreau, il faut monter tous les barreaux précédents. Pour calculer u₁₀, on doit calculer u₁, u₂, ..., u₉. C'est pourquoi on utilise un tableur (en recopiant une formule vers le bas) ou un programme avec une boucle.",
                "En Python, la fonction suivante renvoie uₙ pour la suite précédente. Ligne 1 : def terme(n): ; ligne 2 : u = 5 ; ligne 3 : for i in range(n): ; ligne 4, décalée dans la boucle : u = 2*u - 3 ; ligne 5, hors de la boucle : return u. La boucle s'exécute n fois et applique n fois la relation de récurrence. Ainsi terme(3) renvoie 19.",
              ],
              box: { label: "Définition", text: "Suite définie par récurrence : on donne le premier terme (par exemple u₀) et une relation uₙ₊₁ = f(uₙ) valable pour tout n. Chaque terme se calcule à partir du précédent." },
            },
            {
              heading: "Représentation graphique",
              paragraphs: [
                "Dans un repère, on représente une suite par le nuage des points de coordonnées (n ; uₙ). Contrairement à la courbe d'une fonction, on ne relie pas les points : la suite n'est définie que pour des valeurs entières de n. Pour uₙ = n² - 2n, on place les points (0 ; 0), (1 ; -1), (2 ; 0), (3 ; 3), (4 ; 8)...",
                "Le nuage de points permet de conjecturer le comportement de la suite : les termes augmentent-ils, diminuent-ils, semblent-ils se rapprocher d'une valeur ? Une conjecture lue sur un graphique doit ensuite être démontrée par le calcul.",
              ],
            },
          ],
          keyPoints: [
            "Une suite (uₙ) associe à chaque entier naturel n un réel uₙ, le terme de rang n.",
            "Formule explicite uₙ = f(n) : on calcule directement n'importe quel terme.",
            "Récurrence : un premier terme et uₙ₊₁ = f(uₙ) ; il faut calculer tous les termes précédents.",
            "uₙ₊₁ est le terme suivant ; uₙ + 1 est le terme augmenté de 1 : ce n'est pas la même chose.",
            "On représente une suite par des points (n ; uₙ) non reliés.",
            "En Python, une boucle for répète la relation de récurrence le nombre de fois voulu.",
          ],
          example: {
            statement: "On considère la suite (uₙ) définie par u₀ = 5 et, pour tout entier naturel n, uₙ₊₁ = 2uₙ - 3, ainsi que la suite (vₙ) définie par vₙ = n² - 2n. Calculez u₁, u₂, u₃, puis v₃ et v₁₀. Exprimez vₙ₊₁ en fonction de n.",
            solution: [
              "Pour (uₙ), on applique la relation avec n = 0, puis n = 1, puis n = 2.",
              "u₁ = 2u₀ - 3 = 2 × 5 - 3 = 7 ; u₂ = 2u₁ - 3 = 14 - 3 = 11 ; u₃ = 2u₂ - 3 = 22 - 3 = 19.",
              "Pour (vₙ), la formule est explicite : v₃ = 9 - 6 = 3 et v₁₀ = 100 - 20 = 80.",
              "vₙ₊₁ = (n + 1)² - 2(n + 1) = n² + 2n + 1 - 2n - 2 = n² - 1.",
              "Conclusion : u₁ = 7, u₂ = 11, u₃ = 19, v₃ = 3, v₁₀ = 80 et vₙ₊₁ = n² - 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit (uₙ) la suite définie pour tout entier naturel n par uₙ = 3n - 1. Calculez u₀, u₁, u₅ et u₁₀, puis exprimez uₙ₊₁ en fonction de n.",
              hint: "Remplacez n par la valeur demandée. Pour uₙ₊₁, remplacez n par (n + 1) en gardant les parenthèses.",
              solution: [
                "u₀ = 3 × 0 - 1 = -1 ; u₁ = 3 - 1 = 2 ; u₅ = 15 - 1 = 14 ; u₁₀ = 30 - 1 = 29.",
                "uₙ₊₁ = 3(n + 1) - 1 = 3n + 3 - 1 = 3n + 2.",
                "Conclusion : u₀ = -1, u₁ = 2, u₅ = 14, u₁₀ = 29 et uₙ₊₁ = 3n + 2.",
              ],
            },
            {
              level: 2,
              statement: "Soit (uₙ) la suite définie par u₀ = 2 et, pour tout entier naturel n, uₙ₊₁ = 0,5uₙ + 4. a) Calculez u₁, u₂, u₃ et u₄. b) Quelle conjecture pouvez-vous faire sur l'évolution des termes ? c) Écrivez une fonction Python terme(n) qui renvoie uₙ.",
              hint: "Calculez chaque terme à partir du précédent. Pour le programme, initialisez u à 2 puis répétez n fois la relation.",
              solution: [
                "a) u₁ = 0,5 × 2 + 4 = 5 ; u₂ = 0,5 × 5 + 4 = 6,5 ; u₃ = 0,5 × 6,5 + 4 = 7,25 ; u₄ = 0,5 × 7,25 + 4 = 7,625.",
                "b) Les termes augmentent et l'écart avec 8 est divisé par 2 à chaque étape (6, puis 3, 1,5, 0,75, 0,375) : on peut conjecturer que la suite est croissante et que ses termes se rapprochent de 8.",
                "c) Ligne 1 : def terme(n): ; ligne 2 : u = 2 ; ligne 3 : for i in range(n): ; ligne 4, décalée dans la boucle : u = 0.5*u + 4 ; ligne 5, hors de la boucle : return u.",
                "Contrôle : terme(4) renvoie 7.625, ce qui correspond à u₄ = 7,625 (Python écrit les décimaux avec un point).",
              ],
            },
            {
              level: 3,
              statement: "Au 1er janvier 2026, un étang contient 1 200 poissons. Chaque année, on estime que 10 % des poissons disparaissent (pêche, prédateurs), puis l'association qui gère l'étang y introduit 150 nouveaux poissons. On note uₙ le nombre de poissons au 1er janvier de l'année 2026 + n, donc u₀ = 1 200. a) Justifiez que, pour tout entier naturel n, uₙ₊₁ = 0,9uₙ + 150. b) Calculez u₁, u₂ et u₃, en arrondissant u₃ à l'unité. c) Complétez la fonction Python suivante pour qu'elle renvoie uₙ : def poissons(n): u = ... ; for i in range(n): u = ... ; return u. d) Peut-on calculer u₁₀ directement à partir de u₀ avec la relation de la question a) ?",
              hint: "Diminuer de 10 % revient à multiplier par 1 - 0,10 = 0,9. On ajoute ensuite les 150 poissons introduits.",
              solution: [
                "a) Perdre 10 % des poissons revient à en conserver 90 %, soit 0,9uₙ. On ajoute ensuite les 150 poissons introduits : uₙ₊₁ = 0,9uₙ + 150.",
                "b) u₁ = 0,9 × 1 200 + 150 = 1 080 + 150 = 1 230 ; u₂ = 0,9 × 1 230 + 150 = 1 107 + 150 = 1 257.",
                "u₃ = 0,9 × 1 257 + 150 = 1 131,3 + 150 = 1 281,3, soit environ 1 281 poissons au 1er janvier 2029.",
                "c) On complète : u = 1200 avant la boucle, et u = 0.9*u + 150 dans la boucle (ligne décalée sous for).",
                "d) Non : la relation est une relation de récurrence, chaque terme se calcule à partir du précédent. Pour obtenir u₁₀, il faut calculer successivement u₁, u₂, ..., u₉, ce que fait le programme avec poissons(10).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque définition de suite à la valeur de son terme u₂.",
            pairs: [
              { left: "uₙ = 5n - 3", right: "u₂ = 7" },
              { left: "uₙ = n² + 1", right: "u₂ = 5" },
              { left: "u₀ = 1 et uₙ₊₁ = 3uₙ", right: "u₂ = 9" },
              { left: "u₀ = 4 et uₙ₊₁ = uₙ - 6", right: "u₂ = -8" },
              { left: "u₀ = 0 et uₙ₊₁ = 2uₙ + 1", right: "u₂ = 3" },
              { left: "uₙ = 10/(n + 3)", right: "u₂ = 2" },
            ],
          },
          quiz: [
            {
              q: "Pour uₙ = 2n + 5, que vaut uₙ₊₁ ?",
              options: ["2n + 6", "2n + 7", "3n + 5", "2n + 10"],
              answer: 1,
              why: "uₙ₊₁ = 2(n + 1) + 5 = 2n + 7. L'expression 2n + 6 correspond à uₙ + 1, qui est autre chose.",
            },
            {
              q: "La suite définie par u₀ = 3 et uₙ₊₁ = uₙ² - 2 a pour terme u₂ :",
              options: ["7", "9", "47", "14"],
              answer: 2,
              why: "u₁ = 9 - 2 = 7, puis u₂ = 49 - 2 = 47.",
            },
            {
              q: "Une suite commence à u₀. Quel est le rang du dixième terme ?",
              options: ["9", "10", "11", "On ne peut pas savoir"],
              answer: 0,
              why: "Les termes sont u₀, u₁, ..., donc le dixième est u₉.",
            },
            {
              q: "Comment représente-t-on graphiquement une suite ?",
              options: ["Par une droite", "Par une courbe continue reliant tous les points", "Par une parabole", "Par des points (n ; uₙ) non reliés"],
              answer: 3,
              why: "La suite n'est définie que pour des entiers : on place les points (n ; uₙ) sans les relier.",
            },
            {
              q: "Quel est l'avantage principal d'une formule explicite sur une relation de récurrence ?",
              options: ["Elle donne toujours des entiers", "Elle permet de calculer un terme sans calculer les précédents", "Elle ne nécessite pas de premier terme connu", "Elle rend la suite croissante"],
              answer: 1,
              why: "Avec uₙ = f(n), on calcule directement u₁₀₀ ; avec une récurrence, il faut d'abord calculer u₁, ..., u₉₉.",
            },
          ],
          trap: "Confondre uₙ₊₁ (le terme qui suit uₙ) avec uₙ + 1 (le terme uₙ augmenté de 1) : pour uₙ = n², uₙ₊₁ = (n + 1)² = n² + 2n + 1, alors que uₙ + 1 = n² + 1.",
          method: "Pour une suite définie par récurrence, présentez vos calculs en écrivant à chaque ligne la relation utilisée, par exemple « u₂ = 2u₁ - 3 = 2 × 7 - 3 = 11 » : on voit d'où vient chaque nombre, et une erreur ne se propage pas sans être repérée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'suites-arithmetiques',
          title: 'Suites arithmétiques et croissance linéaire',
          minutes: 30,
          objectives: [
            "Reconnaître une suite arithmétique et démontrer qu'une suite est ou n'est pas arithmétique.",
            "Exprimer le terme général d'une suite arithmétique en fonction de n.",
            "Déterminer le sens de variation d'une suite arithmétique selon le signe de sa raison.",
            "Modéliser une croissance linéaire par une suite arithmétique.",
          ],
          course: [
            {
              heading: "Définition",
              paragraphs: [
                "Une suite (uₙ) est arithmétique s'il existe un réel r tel que, pour tout entier naturel n, uₙ₊₁ = uₙ + r. Le nombre r s'appelle la raison de la suite. On passe d'un terme au suivant en ajoutant toujours le même nombre. Par exemple, la suite 3, 7, 11, 15, 19... est arithmétique de raison 4 et de premier terme u₀ = 3.",
                "Pour démontrer qu'une suite est arithmétique, on calcule la différence uₙ₊₁ - uₙ pour un n quelconque et l'on montre qu'elle ne dépend pas de n. Pour uₙ = 5 - 2n : uₙ₊₁ - uₙ = 5 - 2(n + 1) - (5 - 2n) = -2. La suite est arithmétique de raison -2. Pour démontrer qu'une suite n'est pas arithmétique, il suffit de trouver deux différences consécutives distinctes, par exemple u₁ - u₀ ≠ u₂ - u₁.",
              ],
              box: { label: "Définition", text: "(uₙ) est arithmétique de raison r si, pour tout entier naturel n, uₙ₊₁ = uₙ + r. De façon équivalente, la différence uₙ₊₁ - uₙ est constante, égale à r." },
            },
            {
              heading: "Terme général",
              paragraphs: [
                "Si (uₙ) est arithmétique de raison r, on ajoute r à chaque étape. Pour aller de u₀ à uₙ, on ajoute n fois r, donc uₙ = u₀ + nr. Plus généralement, pour tous entiers n et p, uₙ = uₚ + (n - p)r. Si la suite commence à u₁, on utilise uₙ = u₁ + (n - 1)r.",
                "Exemple : (uₙ) est arithmétique avec u₀ = 7 et r = -3. Alors uₙ = 7 - 3n et u₂₀ = 7 - 60 = -53. Autre exemple : on sait que u₅ = 17 et u₁₂ = 38. Alors u₁₂ = u₅ + 7r, donc 7r = 21 et r = 3 ; puis u₀ = u₅ - 5r = 17 - 15 = 2, d'où uₙ = 2 + 3n.",
              ],
              box: { label: "Formule", text: "Suite arithmétique de raison r : uₙ = u₀ + nr, et plus généralement uₙ = uₚ + (n - p)r pour tous entiers n et p." },
            },
            {
              heading: "Sens de variation et croissance linéaire",
              paragraphs: [
                "Comme uₙ₊₁ - uₙ = r, le signe de la raison donne le sens de variation : si r > 0, la suite est strictement croissante ; si r < 0, elle est strictement décroissante ; si r = 0, elle est constante.",
                "La formule uₙ = u₀ + nr rappelle une fonction affine x ↦ rx + u₀ : les points (n ; uₙ) sont alignés sur une droite de coefficient directeur r et d'ordonnée à l'origine u₀. On parle de croissance (ou décroissance) linéaire : la variation absolue est la même à chaque étape.",
                "De nombreuses situations suivent ce modèle : une tirelire dans laquelle on dépose 20 € chaque semaine, un abonnement facturé un montant fixe par mois, un salaire qui augmente du même nombre d'euros chaque année, un capital placé à intérêts simples. Le point commun est une augmentation d'une quantité fixe, et non d'un pourcentage fixe.",
              ],
              box: { label: "À retenir", text: "r > 0 : suite croissante ; r < 0 : suite décroissante ; r = 0 : suite constante. Les points (n ; uₙ) d'une suite arithmétique sont alignés." },
            },
          ],
          keyPoints: [
            "Suite arithmétique de raison r : uₙ₊₁ = uₙ + r pour tout n.",
            "Pour le démontrer, on montre que uₙ₊₁ - uₙ est une constante indépendante de n.",
            "Terme général : uₙ = u₀ + nr, ou uₙ = uₚ + (n - p)r.",
            "Si r > 0 la suite est croissante, si r < 0 elle est décroissante.",
            "Les points (n ; uₙ) sont alignés : c'est le modèle de la croissance linéaire (ajout d'une quantité fixe).",
          ],
          example: {
            statement: "Une suite arithmétique (uₙ) vérifie u₅ = 17 et u₁₂ = 38. Déterminez sa raison, son premier terme u₀, l'expression de uₙ en fonction de n, puis u₁₀₀.",
            solution: [
              "Pour une suite arithmétique de raison r, u₁₂ = u₅ + (12 - 5)r = u₅ + 7r.",
              "Donc 38 = 17 + 7r, soit 7r = 21 et r = 3.",
              "Puis u₅ = u₀ + 5r, donc u₀ = 17 - 15 = 2.",
              "Le terme général est uₙ = 2 + 3n.",
              "u₁₀₀ = 2 + 300 = 302. Vérification : u₁₂ = 2 + 36 = 38.",
              "Conclusion : r = 3, u₀ = 2, uₙ = 2 + 3n et u₁₀₀ = 302.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "(uₙ) est la suite arithmétique de premier terme u₀ = 4 et de raison r = 2,5. Exprimez uₙ en fonction de n, calculez u₁₀ et u₁₀₀, et donnez le sens de variation de la suite.",
              hint: "Utilisez uₙ = u₀ + nr.",
              solution: [
                "uₙ = u₀ + nr = 4 + 2,5n.",
                "u₁₀ = 4 + 25 = 29 et u₁₀₀ = 4 + 250 = 254.",
                "La raison r = 2,5 est strictement positive : la suite est strictement croissante.",
              ],
            },
            {
              level: 2,
              statement: "a) Démontrez que la suite (uₙ) définie par uₙ = 5 - 2n est arithmétique et précisez sa raison. b) Déterminez le rang n tel que uₙ = -95. c) La suite (vₙ) définie par vₙ = n² + 1 est-elle arithmétique ? Justifiez.",
              hint: "Calculez uₙ₊₁ - uₙ en développant. Pour c), calculez v₀, v₁ et v₂ et comparez les différences successives.",
              solution: [
                "a) uₙ₊₁ - uₙ = [5 - 2(n + 1)] - (5 - 2n) = 5 - 2n - 2 - 5 + 2n = -2. La différence est constante : (uₙ) est arithmétique de raison -2 et de premier terme u₀ = 5.",
                "b) 5 - 2n = -95 équivaut à -2n = -100, soit n = 50. C'est le terme u₅₀.",
                "c) v₀ = 1, v₁ = 2 et v₂ = 5. On a v₁ - v₀ = 1 et v₂ - v₁ = 3.",
                "Ces deux différences ne sont pas égales : la suite (vₙ) n'est pas arithmétique.",
              ],
            },
            {
              level: 3,
              statement: "Une salariée est embauchée en 2026 avec un salaire net mensuel de 1 800 €. Son contrat prévoit une augmentation de 45 € du salaire mensuel au 1er janvier de chaque année. On note uₙ son salaire mensuel, en euros, pendant l'année 2026 + n, donc u₀ = 1 800. a) Justifiez que (uₙ) est une suite arithmétique et donnez sa raison. b) Exprimez uₙ en fonction de n et calculez u₅. c) À partir de quelle année son salaire mensuel dépassera-t-il 2 200 € ? d) Les points (n ; uₙ) sont-ils alignés ? Justifiez.",
              hint: "Ajouter 45 € chaque année correspond à une raison r = 45. Pour c), résolvez l'inéquation 1 800 + 45n > 2 200 dans les entiers.",
              solution: [
                "a) Chaque année, on ajoute 45 € au salaire : uₙ₊₁ = uₙ + 45. La suite est arithmétique de raison 45 et de premier terme u₀ = 1 800.",
                "b) uₙ = 1 800 + 45n. Ainsi u₅ = 1 800 + 225 = 2 025 € (salaire mensuel en 2031).",
                "c) On résout 1 800 + 45n > 2 200, soit 45n > 400, donc n > 400/45 ≈ 8,89. Le plus petit entier qui convient est n = 9.",
                "Vérification : u₈ = 1 800 + 360 = 2 160 ≤ 2 200 et u₉ = 1 800 + 405 = 2 205 > 2 200.",
                "Le salaire dépassera 2 200 € pour la première fois en 2026 + 9 = 2035.",
                "d) Oui : uₙ = 45n + 1 800 est de la forme an + b, donc les points (n ; uₙ) sont sur la droite d'équation y = 45x + 1 800. C'est une croissance linéaire.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les suites arithmétiques.",
            statements: [
              { text: "La suite 2, 5, 8, 11, 14 est arithmétique de raison 3.", true: true, why: "On ajoute 3 à chaque étape." },
              { text: "La suite 1, 2, 4, 8, 16 est arithmétique.", true: false, why: "Les différences 1, 2, 4, 8 ne sont pas constantes : on multiplie par 2, la suite est géométrique." },
              { text: "Si u₀ = 10 et r = -4, alors u₃ = -2.", true: true, why: "u₃ = 10 + 3 × (-4) = -2." },
              { text: "Une suite arithmétique de raison négative est croissante.", true: false, why: "uₙ₊₁ - uₙ = r < 0 : la suite est décroissante." },
              { text: "Pour une suite arithmétique, u₁₀ = u₄ + 6r.", true: true, why: "uₙ = uₚ + (n - p)r avec n = 10 et p = 4." },
              { text: "Si u₁ = 3 et r = 2, alors uₙ = 3 + 2n.", true: false, why: "La suite commence à u₁ : uₙ = u₁ + (n - 1)r = 3 + 2(n - 1) = 2n + 1." },
              { text: "Un capital qui augmente de 3 % par an évolue selon une suite arithmétique.", true: false, why: "Une augmentation d'un pourcentage fixe correspond à une multiplication par 1,03 : c'est une suite géométrique." },
            ],
          },
          quiz: [
            {
              q: "Une suite arithmétique a pour premier terme u₀ = 6 et pour raison -2. Que vaut u₁₀ ?",
              options: ["-14", "-20", "26", "-12"],
              answer: 0,
              why: "u₁₀ = 6 + 10 × (-2) = 6 - 20 = -14.",
            },
            {
              q: "Laquelle de ces suites est arithmétique ?",
              options: ["uₙ = n²", "uₙ = 4 - 7n", "uₙ = 2ⁿ", "uₙ = 1/n"],
              answer: 1,
              why: "uₙ₊₁ - uₙ = 4 - 7(n + 1) - (4 - 7n) = -7 : la différence est constante.",
            },
            {
              q: "Une suite arithmétique vérifie u₃ = 11 et u₇ = 23. Quelle est sa raison ?",
              options: ["12", "4", "6", "3"],
              answer: 3,
              why: "u₇ = u₃ + 4r, donc 4r = 12 et r = 3.",
            },
            {
              q: "Quelle situation se modélise par une suite arithmétique ?",
              options: ["Une population qui double chaque année", "Un prix qui baisse de 5 % par an", "Une tirelire où l'on ajoute 15 € chaque semaine", "Une culture de bactéries qui triple chaque heure"],
              answer: 2,
              why: "Ajouter une quantité fixe à chaque étape correspond à une suite arithmétique ; les autres situations correspondent à une multiplication.",
            },
            {
              q: "Les points (n ; uₙ) d'une suite arithmétique de raison r sont alignés sur une droite de coefficient directeur :",
              options: ["u₀", "r", "n", "u₁"],
              answer: 1,
              why: "uₙ = rn + u₀ : les points sont sur la droite d'équation y = rx + u₀, de coefficient directeur r.",
            },
          ],
          trap: "Utiliser uₙ = u₀ + nr alors que la suite commence à u₁ : dans ce cas, le terme général est uₙ = u₁ + (n - 1)r. Il faut toujours repérer le premier indice avant d'écrire la formule.",
          method: "Pour reconnaître le modèle dans un énoncé, cherchez le verbe : « on ajoute », « on retire », « augmente de 45 € » indiquent une suite arithmétique ; « augmente de 3 % », « double », « est multiplié par » indiquent une suite géométrique.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'suites-geometriques',
          title: 'Suites géométriques et croissance exponentielle',
          minutes: 30,
          objectives: [
            "Reconnaître une suite géométrique et démontrer qu'une suite est géométrique.",
            "Exprimer le terme général d'une suite géométrique en fonction de n.",
            "Déterminer le sens de variation d'une suite géométrique de premier terme positif.",
            "Modéliser une évolution à taux constant par une suite géométrique et la comparer à une croissance linéaire.",
          ],
          course: [
            {
              heading: "Définition",
              paragraphs: [
                "Une suite (uₙ) est géométrique s'il existe un réel q tel que, pour tout entier naturel n, uₙ₊₁ = q × uₙ. Le nombre q s'appelle la raison de la suite. On passe d'un terme au suivant en multipliant toujours par le même nombre. Par exemple, la suite 3, 6, 12, 24, 48... est géométrique de raison 2 et de premier terme 3.",
                "Pour démontrer qu'une suite à termes non nuls est géométrique, on calcule le quotient uₙ₊₁/uₙ et l'on montre qu'il ne dépend pas de n. Pour vₙ = 5 × 3ⁿ : vₙ₊₁/vₙ = (5 × 3ⁿ⁺¹)/(5 × 3ⁿ) = 3. La suite est géométrique de raison 3. Pour démontrer qu'une suite n'est pas géométrique, il suffit de trouver deux quotients consécutifs différents.",
              ],
              box: { label: "Définition", text: "(uₙ) est géométrique de raison q si, pour tout entier naturel n, uₙ₊₁ = q × uₙ. Si les termes sont non nuls, cela équivaut à : le quotient uₙ₊₁/uₙ est constant, égal à q." },
            },
            {
              heading: "Terme général",
              paragraphs: [
                "Si (uₙ) est géométrique de raison q, on multiplie par q à chaque étape. Pour aller de u₀ à uₙ, on multiplie n fois par q, donc uₙ = u₀ × qⁿ. Plus généralement, uₙ = uₚ × qⁿ⁻ᵖ pour tous entiers n et p. Si la suite commence à u₁, on écrit uₙ = u₁ × qⁿ⁻¹.",
                "Exemple : u₀ = 3 et q = 2 donnent uₙ = 3 × 2ⁿ, d'où u₁₀ = 3 × 1 024 = 3 072. Autre exemple : une suite géométrique vérifie u₁ = 6 et u₄ = 162. Alors u₄ = u₁ × q³, donc q³ = 27 et q = 3 ; puis u₀ = u₁/q = 2, et uₙ = 2 × 3ⁿ.",
              ],
              box: { label: "Formule", text: "Suite géométrique de raison q : uₙ = u₀ × qⁿ, et plus généralement uₙ = uₚ × qⁿ⁻ᵖ." },
            },
            {
              heading: "Évolution à taux constant",
              paragraphs: [
                "Augmenter une quantité de t % revient à la multiplier par le coefficient multiplicateur 1 + t/100 ; la diminuer de t % revient à la multiplier par 1 - t/100. Une quantité qui évolue chaque année avec le même pourcentage est donc modélisée par une suite géométrique.",
                "Exemple : un capital de 2 000 € placé à intérêts composés au taux annuel de 3 % vaut Cₙ = 2 000 × 1,03ⁿ après n années. Une voiture qui perd 15 % de sa valeur chaque année a une valeur multipliée par 0,85 chaque année. Attention : deux hausses successives de 10 % ne font pas une hausse de 20 %, car 1,1 × 1,1 = 1,21, soit une hausse de 21 %.",
              ],
              box: { label: "Repère", text: "Hausse de t % : multiplier par 1 + t/100. Baisse de t % : multiplier par 1 - t/100. Évolution à taux constant = suite géométrique." },
            },
            {
              heading: "Sens de variation et croissance exponentielle",
              paragraphs: [
                "Pour une suite géométrique de premier terme u₀ > 0 et de raison q > 0 : si q > 1, la suite est strictement croissante ; si 0 < q < 1, elle est strictement décroissante ; si q = 1, elle est constante. En effet, uₙ₊₁ - uₙ = uₙ(q - 1), et uₙ est positif. Si q < 0, les termes changent de signe à chaque étape : la suite n'est ni croissante ni décroissante.",
                "Une suite géométrique de raison q > 1 modélise une croissance exponentielle : la variation absolue augmente à chaque étape, car elle est proportionnelle à la quantité déjà présente. À long terme, elle dépasse toujours une croissance linéaire. La légende de l'échiquier l'illustre : en posant 1 grain de riz sur la première case et en doublant à chaque case, la 64e case porte 2⁶³ grains, un nombre immense.",
                "Une suite géométrique de raison comprise entre 0 et 1 (et de premier terme positif) décroît, mais ses termes restent strictement positifs : ils se rapprochent de 0 sans jamais l'atteindre, contrairement à une suite arithmétique décroissante qui finit par devenir négative.",
              ],
              box: { label: "À retenir", text: "Si u₀ > 0 : q > 1, suite croissante ; 0 < q < 1, suite décroissante ; q = 1, suite constante. Les suites géométriques modélisent les croissances et décroissances exponentielles." },
            },
          ],
          keyPoints: [
            "Suite géométrique de raison q : uₙ₊₁ = q × uₙ pour tout n.",
            "Pour le démontrer (termes non nuls), on montre que uₙ₊₁/uₙ est une constante indépendante de n.",
            "Terme général : uₙ = u₀ × qⁿ, ou uₙ = uₚ × qⁿ⁻ᵖ.",
            "Hausse de t % : coefficient 1 + t/100 ; baisse de t % : coefficient 1 - t/100.",
            "Si u₀ > 0 : croissante si q > 1, décroissante si 0 < q < 1.",
            "Croissance exponentielle : à long terme, elle dépasse toujours une croissance linéaire.",
          ],
          example: {
            statement: "Une culture contient 500 bactéries à l'instant initial, et leur nombre augmente de 20 % chaque heure. On note uₙ le nombre de bactéries au bout de n heures. Exprimez uₙ en fonction de n, puis calculez u₅ (arrondi à l'unité). Quel est le sens de variation de la suite ?",
            solution: [
              "Augmenter de 20 % revient à multiplier par 1 + 20/100 = 1,2. Donc uₙ₊₁ = 1,2uₙ.",
              "La suite (uₙ) est géométrique de raison 1,2 et de premier terme u₀ = 500.",
              "Son terme général est uₙ = 500 × 1,2ⁿ.",
              "u₅ = 500 × 1,2⁵ = 500 × 2,48832 = 1 244,16, soit environ 1 244 bactéries.",
              "Comme u₀ = 500 > 0 et q = 1,2 > 1, la suite est strictement croissante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "(uₙ) est la suite géométrique de premier terme u₀ = 3 et de raison 2. Calculez u₁, u₂ et u₅, puis exprimez uₙ en fonction de n et calculez u₁₀.",
              hint: "Multipliez par 2 pour passer d'un terme au suivant, puis utilisez uₙ = u₀ × qⁿ.",
              solution: [
                "u₁ = 3 × 2 = 6 ; u₂ = 6 × 2 = 12.",
                "uₙ = 3 × 2ⁿ, donc u₅ = 3 × 32 = 96.",
                "u₁₀ = 3 × 2¹⁰ = 3 × 1 024 = 3 072.",
              ],
            },
            {
              level: 2,
              statement: "a) Démontrez que la suite (vₙ) définie par vₙ = 5 × 3ⁿ⁺¹ est géométrique, et précisez sa raison et son premier terme. b) Une suite géométrique (uₙ) à termes positifs vérifie u₁ = 6 et u₄ = 162. Déterminez sa raison, u₀ et l'expression de uₙ. c) La suite (wₙ) définie par wₙ = n + 2 est-elle géométrique ?",
              hint: "Pour a), simplifiez le quotient vₙ₊₁/vₙ. Pour b), écrivez u₄ = u₁ × q³.",
              solution: [
                "a) Les termes sont non nuls et vₙ₊₁/vₙ = (5 × 3ⁿ⁺²)/(5 × 3ⁿ⁺¹) = 3. La suite est géométrique de raison 3, de premier terme v₀ = 5 × 3 = 15.",
                "b) u₄ = u₁ × q³, donc 162 = 6q³, soit q³ = 27 et q = 3.",
                "Puis u₀ = u₁/q = 6/3 = 2, et uₙ = 2 × 3ⁿ. Vérification : u₄ = 2 × 81 = 162.",
                "c) w₀ = 2, w₁ = 3, w₂ = 4. On a w₁/w₀ = 1,5 et w₂/w₁ ≈ 1,33 : les quotients sont différents, la suite n'est pas géométrique (elle est arithmétique de raison 1).",
              ],
            },
            {
              level: 3,
              statement: "Une voiture neuve est achetée 24 000 €. On envisage deux modèles d'évolution de sa valeur. Modèle A : la voiture perd 3 000 € par an ; on note aₙ sa valeur après n années. Modèle B : la voiture perd 15 % de sa valeur chaque année ; on note bₙ sa valeur après n années. a) Exprimez aₙ et bₙ en fonction de n en précisant la nature de chaque suite. b) Calculez a₃ et b₃. Quel modèle donne la valeur la plus faible après 3 ans ? c) Que donne chaque modèle après 8 ans ? Arrondissez b₈ à l'euro. d) Le modèle B peut-il donner une valeur nulle ? Justifiez.",
              hint: "Perdre 15 % revient à multiplier par 0,85. Pour b₈, on peut utiliser 0,85⁸ ≈ 0,2725 ou la calculatrice.",
              solution: [
                "a) Modèle A : on retire 3 000 chaque année, (aₙ) est arithmétique de raison -3 000 : aₙ = 24 000 - 3 000n.",
                "Modèle B : on multiplie par 0,85 chaque année, (bₙ) est géométrique de raison 0,85 : bₙ = 24 000 × 0,85ⁿ.",
                "b) a₃ = 24 000 - 9 000 = 15 000 €. b₃ = 24 000 × 0,85³ = 24 000 × 0,614125 = 14 739 €. Après 3 ans, le modèle B donne la valeur la plus faible.",
                "c) a₈ = 24 000 - 24 000 = 0 € : selon le modèle A, la voiture ne vaut plus rien. b₈ = 24 000 × 0,85⁸ ≈ 24 000 × 0,272491 ≈ 6 540 €.",
                "d) Non : 24 000 > 0 et 0,85ⁿ > 0 pour tout n, donc bₙ > 0. La valeur diminue (car 0 < 0,85 < 1) en se rapprochant de 0 sans jamais l'atteindre.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque situation au coefficient multiplicateur ou à la raison qui la modélise.",
            pairs: [
              { left: "Hausse de 4 % par an", right: "q = 1,04" },
              { left: "Baisse de 4 % par an", right: "q = 0,96" },
              { left: "Doublement chaque heure", right: "q = 2" },
              { left: "Baisse de 40 % par an", right: "q = 0,6" },
              { left: "Hausse de 40 % par an", right: "q = 1,4" },
              { left: "Division par 2 chaque jour", right: "q = 0,5" },
            ],
          },
          quiz: [
            {
              q: "Une suite géométrique a pour premier terme u₀ = 5 et pour raison 2. Que vaut u₄ ?",
              options: ["40", "13", "80", "160"],
              answer: 2,
              why: "u₄ = 5 × 2⁴ = 5 × 16 = 80.",
            },
            {
              q: "Un prix baisse de 8 % chaque année. Par quel nombre est-il multiplié chaque année ?",
              options: ["0,92", "1,08", "0,08", "-0,08"],
              answer: 0,
              why: "Baisser de 8 % revient à multiplier par 1 - 8/100 = 0,92.",
            },
            {
              q: "La suite définie par uₙ = 7 × 0,6ⁿ est :",
              options: ["croissante", "constante", "ni croissante ni décroissante", "décroissante"],
              answer: 3,
              why: "Son premier terme 7 est positif et sa raison 0,6 est comprise entre 0 et 1 : la suite est décroissante.",
            },
            {
              q: "Deux hausses successives de 10 % correspondent à une hausse globale de :",
              options: ["20 %", "21 %", "11 %", "100 %"],
              answer: 1,
              why: "1,1 × 1,1 = 1,21 : la hausse globale est de 21 %.",
            },
            {
              q: "Une suite géométrique de raison 2 vérifie u₃ = 24. Que vaut u₀ ?",
              options: ["8", "18", "3", "12"],
              answer: 2,
              why: "u₃ = u₀ × 2³ = 8u₀, donc u₀ = 24/8 = 3.",
            },
          ],
          trap: "Traduire une hausse de 5 % par une multiplication par 0,05 ou par 5, au lieu de 1,05. Autre erreur : écrire uₙ = u₀ × qⁿ alors que la suite commence à u₁, où il faut uₙ = u₁ × qⁿ⁻¹.",
          method: "Contrôlez toujours votre formule sur les premiers termes : si l'énoncé dit que u₀ = 500 et que la quantité augmente de 20 %, votre formule doit redonner u₁ = 600. Un calcul de dix secondes valide ou invalide toute la suite de l'exercice.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'sommes-et-seuils',
          title: 'Sommes de termes, sens de variation et recherche de seuil en Python',
          minutes: 35,
          objectives: [
            "Calculer la somme 1 + 2 + ... + n et la somme de termes consécutifs d'une suite arithmétique.",
            "Calculer la somme 1 + q + ... + qⁿ et la somme de termes consécutifs d'une suite géométrique.",
            "Étudier le sens de variation d'une suite à l'aide du signe de uₙ₊₁ - uₙ.",
            "Écrire un algorithme de recherche de seuil en Python avec une boucle while.",
          ],
          course: [
            {
              heading: "Sommes de termes d'une suite arithmétique",
              paragraphs: [
                "Pour tout entier naturel n non nul, 1 + 2 + 3 + ... + n = n(n + 1)/2. Une démonstration classique consiste à écrire la somme S deux fois, une fois dans l'ordre croissant et une fois dans l'ordre décroissant, puis à additionner terme à terme : chaque paire vaut n + 1 et il y a n paires, donc 2S = n(n + 1). Par exemple, 1 + 2 + ... + 100 = 100 × 101/2 = 5 050.",
                "Plus généralement, la somme de termes consécutifs d'une suite arithmétique est égale au nombre de termes multiplié par la moyenne du premier et du dernier terme : S = (nombre de termes) × (premier + dernier)/2. Pour 3 + 5 + 7 + ... + 41, la raison est 2 et le nombre de termes vaut (41 - 3)/2 + 1 = 20, donc S = 20 × (3 + 41)/2 = 440.",
                "Pour compter les termes, retenez que de uₚ à uₙ (avec p ≤ n), il y a n - p + 1 termes. De u₀ à u₁₀, il y a donc 11 termes, et non 10.",
              ],
              box: { label: "Formule", text: "1 + 2 + ... + n = n(n + 1)/2. Somme de termes consécutifs d'une suite arithmétique : (nombre de termes) × (premier terme + dernier terme)/2." },
            },
            {
              heading: "Sommes de termes d'une suite géométrique",
              paragraphs: [
                "Pour tout réel q ≠ 1 et tout entier naturel n, 1 + q + q² + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q). Démonstration : en notant S cette somme, qS = q + q² + ... + qⁿ⁺¹, donc S - qS = 1 - qⁿ⁺¹ (tous les autres termes s'éliminent), d'où S(1 - q) = 1 - qⁿ⁺¹. Par exemple, 1 + 2 + 4 + ... + 2¹⁰ = (1 - 2¹¹)/(1 - 2) = 2 048 - 1 = 2 047.",
                "Pour une suite géométrique (uₙ) de raison q ≠ 1, la somme de termes consécutifs vaut : (premier terme) × (1 - q^(nombre de termes))/(1 - q). Ainsi, pour uₙ = 3 × 2ⁿ, u₀ + u₁ + ... + u₅ = 3 × (1 - 2⁶)/(1 - 2) = 3 × 63 = 189.",
              ],
              box: { label: "Formule", text: "Si q ≠ 1 : 1 + q + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q). Somme de termes consécutifs d'une suite géométrique : premier terme × (1 - q^(nombre de termes))/(1 - q)." },
            },
            {
              heading: "Sens de variation d'une suite",
              paragraphs: [
                "Une suite (uₙ) est croissante si, pour tout n, uₙ₊₁ ≥ uₙ, et décroissante si, pour tout n, uₙ₊₁ ≤ uₙ (on dit strictement croissante ou décroissante avec des inégalités strictes). La méthode générale consiste à étudier le signe de la différence uₙ₊₁ - uₙ.",
                "Exemple : uₙ = n² - 6n. On calcule uₙ₊₁ - uₙ = (n + 1)² - 6(n + 1) - n² + 6n = 2n - 5. Cette différence est négative pour n ≤ 2 et positive pour n ≥ 3 : la suite décroît de u₀ à u₃, puis croît à partir de u₃. Elle n'est donc ni croissante ni décroissante sur ℕ, mais elle est croissante à partir du rang 3.",
                "Deux autres méthodes sont utiles. Si uₙ = f(n) et que f est monotone sur [0 ; +∞[, la suite a le même sens de variation que f. Si tous les termes sont strictement positifs, on peut comparer le quotient uₙ₊₁/uₙ à 1 : s'il est supérieur à 1, la suite est croissante.",
              ],
              box: { label: "Méthode", text: "Étudier le signe de uₙ₊₁ - uₙ : toujours positif, la suite est croissante ; toujours négatif, elle est décroissante. Pour des termes strictement positifs, on peut aussi comparer uₙ₊₁/uₙ à 1." },
            },
            {
              heading: "Recherche de seuil en Python",
              paragraphs: [
                "Un problème de seuil consiste à chercher le premier rang n à partir duquel uₙ dépasse (ou passe sous) une valeur donnée. Par exemple : un capital de 1 000 € placé à 5 % par an, uₙ = 1 000 × 1,05ⁿ ; au bout de combien d'années aura-t-il doublé ? On ne sait pas d'avance combien de calculs il faudra : on utilise une boucle while (« tant que »).",
                "Le programme s'écrit ainsi. Ligne 1 : def seuil(): ; ligne 2 : n = 0 ; ligne 3 : u = 1000 ; ligne 4 : while u <= 2000: ; lignes 5 et 6, décalées dans la boucle : n = n + 1 puis u = 1.05*u ; ligne 7, hors de la boucle : return n. La boucle continue tant que le seuil n'est pas dépassé et s'arrête au premier rang où u > 2000. Ici, la fonction renvoie 15.",
                "Contrôle à la calculatrice : u₁₄ = 1 000 × 1,05¹⁴ ≈ 1 979,93 ≤ 2 000 et u₁₅ ≈ 2 078,93 > 2 000. Attention à la condition de la boucle : c'est la condition pour continuer, donc le contraire de la condition d'arrêt. Pour chercher le premier n tel que uₙ > 2 000, on écrit while u <= 2000.",
              ],
              box: { label: "À retenir", text: "Algorithme de seuil : initialiser n et u ; tant que le seuil n'est pas atteint, augmenter n de 1 et calculer le terme suivant ; renvoyer n. La condition du while est le contraire de la condition d'arrêt." },
            },
          ],
          keyPoints: [
            "1 + 2 + ... + n = n(n + 1)/2.",
            "Somme arithmétique : nombre de termes × (premier + dernier)/2 ; de uₚ à uₙ, il y a n - p + 1 termes.",
            "Si q ≠ 1 : 1 + q + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q).",
            "Somme géométrique : premier terme × (1 - q^(nombre de termes))/(1 - q).",
            "Sens de variation : étudier le signe de uₙ₊₁ - uₙ.",
            "Seuil : boucle while dont la condition est le contraire de la condition d'arrêt, puis on renvoie n.",
          ],
          example: {
            statement: "Un capital de 1 000 € est placé à intérêts composés au taux annuel de 5 %. On note uₙ le capital après n années, de sorte que uₙ = 1 000 × 1,05ⁿ. Écrivez une fonction Python qui renvoie le nombre d'années nécessaires pour que le capital dépasse 2 000 €, puis donnez ce nombre.",
            solution: [
              "On cherche le plus petit entier n tel que uₙ > 2 000. On part de n = 0 et u = 1 000.",
              "Tant que u ≤ 2 000, on passe à l'année suivante : n augmente de 1 et u est multiplié par 1,05.",
              "Programme : def seuil(): ; n = 0 ; u = 1000 ; while u <= 2000: ; (dans la boucle) n = n + 1 ; (dans la boucle) u = 1.05*u ; (hors de la boucle) return n.",
              "Contrôle : u₁₄ = 1 000 × 1,05¹⁴ ≈ 1 979,93, qui ne dépasse pas 2 000, et u₁₅ = 1 000 × 1,05¹⁵ ≈ 2 078,93, qui dépasse 2 000.",
              "Conclusion : la fonction renvoie 15 ; le capital dépasse 2 000 € au bout de 15 ans.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez les sommes suivantes : a) S = 1 + 2 + 3 + ... + 50 ; b) T = 3 + 5 + 7 + ... + 41.",
              hint: "Pour a), utilisez n(n + 1)/2. Pour b), comptez d'abord le nombre de termes de la suite arithmétique de raison 2.",
              solution: [
                "a) S = 50 × 51/2 = 2 550/2 = 1 275.",
                "b) T est une somme de termes consécutifs d'une suite arithmétique de raison 2, de premier terme 3 et de dernier terme 41.",
                "Nombre de termes : (41 - 3)/2 + 1 = 19 + 1 = 20.",
                "T = 20 × (3 + 41)/2 = 20 × 22 = 440.",
              ],
            },
            {
              level: 2,
              statement: "a) Calculez S = 1 + 2 + 2² + ... + 2¹⁰. b) Soit (uₙ) la suite définie par uₙ = n² - 6n. Calculez uₙ₊₁ - uₙ, puis étudiez le sens de variation de (uₙ). Quel est son plus petit terme ?",
              hint: "Pour a), appliquez la formule avec q = 2 et n = 10. Pour b), développez (n + 1)² - 6(n + 1), puis cherchez quand 2n - 5 est positif.",
              solution: [
                "a) S = (1 - 2¹¹)/(1 - 2) = (1 - 2 048)/(-1) = 2 047.",
                "b) uₙ₊₁ - uₙ = (n² + 2n + 1 - 6n - 6) - (n² - 6n) = 2n - 5.",
                "Pour n ≤ 2, 2n - 5 < 0 : u₁ < u₀, u₂ < u₁ et u₃ < u₂. Pour n ≥ 3, 2n - 5 > 0 : la suite est croissante à partir du rang 3.",
                "Valeurs : u₀ = 0, u₁ = -5, u₂ = -8, u₃ = -9, u₄ = -8, u₅ = -5.",
                "La suite décroît jusqu'à u₃ puis croît : son plus petit terme est u₃ = -9.",
              ],
            },
            {
              level: 3,
              statement: "Une entreprise fabrique 2 000 objets le premier mois de l'année 2027. Elle prévoit d'augmenter sa production de 3 % chaque mois. On note uₙ le nombre d'objets fabriqués le n-ième mois, avec u₁ = 2 000. a) Justifiez que (uₙ) est géométrique et exprimez uₙ en fonction de n. b) Calculez la production totale des 12 premiers mois, arrondie à l'unité (on donne 1,03¹² ≈ 1,42576). c) Recopiez et complétez la fonction Python suivante pour qu'elle renvoie le numéro du premier mois où la production mensuelle dépasse 3 000 objets : def mois(): n = 1 ; u = 2000 ; while ... : n = n + 1 ; u = ... ; return n. d) Sachant que 1,03¹³ ≈ 1,4685 et 1,03¹⁴ ≈ 1,5126, quelle valeur la fonction renvoie-t-elle ?",
              hint: "La suite commence à u₁ : uₙ = u₁ × qⁿ⁻¹. Il y a 12 termes de u₁ à u₁₂. Pour d), cherchez le premier n tel que 2 000 × 1,03ⁿ⁻¹ > 3 000, c'est-à-dire 1,03ⁿ⁻¹ > 1,5.",
              solution: [
                "a) Augmenter de 3 % revient à multiplier par 1,03 : uₙ₊₁ = 1,03uₙ. La suite est géométrique de raison 1,03 et de premier terme u₁ = 2 000, donc uₙ = 2 000 × 1,03ⁿ⁻¹.",
                "b) La somme u₁ + ... + u₁₂ comporte 12 termes : S = 2 000 × (1 - 1,03¹²)/(1 - 1,03) = 2 000 × (1,03¹² - 1)/0,03.",
                "S ≈ 2 000 × 0,42576/0,03 = 2 000 × 14,192 ≈ 28 384 objets.",
                "c) La boucle continue tant que le seuil n'est pas dépassé : while u <= 3000: ; dans la boucle, u = 1.03*u.",
                "d) On cherche le premier n tel que 1,03ⁿ⁻¹ > 1,5. Pour n = 14 : 1,03¹³ ≈ 1,4685 < 1,5, donc u₁₄ ≈ 2 937. Pour n = 15 : 1,03¹⁴ ≈ 1,5126 > 1,5, donc u₁₅ ≈ 3 025.",
                "La fonction renvoie 15 : la production mensuelle dépasse 3 000 objets pour la première fois au 15e mois, c'est-à-dire en mars 2028.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les lignes du programme Python qui cherche le premier rang n tel que uₙ = 500 × 1,1ⁿ dépasse 1 000.",
            items: [
              "def seuil():",
              "Initialiser : n = 0 et u = 500",
              "while u <= 1000:",
              "Dans la boucle : n = n + 1 et u = 1.1*u",
              "Hors de la boucle : return n",
            ],
          },
          quiz: [
            {
              q: "Que vaut 1 + 2 + 3 + ... + 20 ?",
              options: ["200", "420", "210", "190"],
              answer: 2,
              why: "20 × 21/2 = 210.",
            },
            {
              q: "Combien de termes compte la somme u₃ + u₄ + ... + u₁₂ ?",
              options: ["10", "9", "12", "15"],
              answer: 0,
              why: "De u₃ à u₁₂ : 12 - 3 + 1 = 10 termes.",
            },
            {
              q: "Que vaut 1 + 3 + 3² + 3³ + 3⁴ ?",
              options: ["81", "243", "40", "121"],
              answer: 3,
              why: "(1 - 3⁵)/(1 - 3) = (1 - 243)/(-2) = 121.",
            },
            {
              q: "Pour chercher le premier n tel que uₙ < 50, quelle condition écrit-on dans la boucle while ?",
              options: ["while u < 50:", "while u >= 50:", "while u > 50:", "while n < 50:"],
              answer: 1,
              why: "La boucle doit continuer tant que la condition d'arrêt (u < 50) n'est pas réalisée, c'est-à-dire tant que u ≥ 50.",
            },
            {
              q: "Pour tout n, uₙ₊₁ - uₙ = -n² - 1. Que peut-on dire de la suite (uₙ) ?",
              options: ["Elle est croissante", "Elle est constante", "Elle est strictement décroissante", "On ne peut pas conclure"],
              answer: 2,
              why: "-n² - 1 est strictement négatif pour tout n, donc uₙ₊₁ < uₙ : la suite est strictement décroissante.",
            },
          ],
          trap: "Se tromper dans le nombre de termes d'une somme (de u₀ à uₙ il y a n + 1 termes) ou dans l'exposant de la formule géométrique. Autre erreur : écrire dans le while la condition d'arrêt au lieu de la condition pour continuer.",
          method: "Pour contrôler un algorithme de seuil, calculez à la main ou à la calculatrice les deux termes qui encadrent la réponse : le rang renvoyé doit dépasser le seuil, et le rang précédent ne doit pas le dépasser.",
        },
      ],
    },

    /* ================================================================== */
    /* LA DÉRIVATION                                                        */
    /* ================================================================== */
    {
      id: 'derivation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'taux-de-variation',
          title: 'Taux de variation et nombre dérivé',
          minutes: 30,
          objectives: [
            "Calculer le taux de variation d'une fonction entre deux réels et l'interpréter comme la pente d'une sécante.",
            "Calculer le nombre dérivé d'une fonction en un point comme limite du taux de variation lorsque h tend vers 0.",
            "Interpréter le nombre dérivé comme une vitesse instantanée ou un taux de variation instantané.",
          ],
          course: [
            {
              heading: "Taux de variation et sécante",
              paragraphs: [
                "Soit f une fonction définie sur un intervalle I, et a et b deux réels distincts de I. Le taux de variation de f entre a et b est le nombre (f(b) - f(a))/(b - a). Il mesure la variation moyenne de f(x) quand x augmente de 1, entre a et b.",
                "Graphiquement, si A(a ; f(a)) et B(b ; f(b)) sont deux points de la courbe de f, ce taux est le coefficient directeur (la pente) de la droite (AB), appelée sécante à la courbe. Par exemple, pour f(x) = x² entre 1 et 3 : (9 - 1)/(3 - 1) = 4. La sécante passant par (1 ; 1) et (3 ; 9) a pour pente 4.",
                "On écrit souvent b = a + h, avec h ≠ 0 : le taux de variation entre a et a + h est alors (f(a + h) - f(a))/h. Pour une fonction affine f(x) = mx + p, ce taux vaut toujours m, quels que soient a et h : la courbe est une droite et toutes ses sécantes sont confondues avec elle.",
              ],
              box: { label: "Définition", text: "Le taux de variation de f entre a et a + h (h ≠ 0) est le nombre τ(h) = (f(a + h) - f(a))/h. C'est la pente de la sécante passant par les points de la courbe d'abscisses a et a + h." },
            },
            {
              heading: "Du taux de variation au nombre dérivé",
              paragraphs: [
                "Faisons tendre h vers 0 : le point B d'abscisse a + h se rapproche de A le long de la courbe, et la sécante (AB) pivote autour de A. Si le taux de variation se rapproche d'un nombre réel L lorsque h tend vers 0, on dit que f est dérivable en a, et L s'appelle le nombre dérivé de f en a. On le note f'(a) (on lit « f prime de a »).",
                "Exemple avec f(x) = x² en a = 3 : (f(3 + h) - f(3))/h = (9 + 6h + h² - 9)/h = (6h + h²)/h = 6 + h. Quand h tend vers 0, 6 + h tend vers 6 : f est dérivable en 3 et f'(3) = 6. Le même calcul en un réel a quelconque donne (2ah + h²)/h = 2a + h, donc f'(a) = 2a.",
                "La méthode est toujours la même : on calcule f(a + h), on forme la différence f(a + h) - f(a), on simplifie le quotient par h (h ≠ 0), puis on regarde vers quoi tend l'expression obtenue lorsque h devient de plus en plus proche de 0. On écrit : f'(a) = lim (f(a + h) - f(a))/h quand h → 0.",
              ],
              box: { label: "Définition", text: "f est dérivable en a si le taux de variation (f(a + h) - f(a))/h tend vers un nombre réel lorsque h tend vers 0. Ce nombre est le nombre dérivé de f en a, noté f'(a)." },
            },
            {
              heading: "Interprétation : une vitesse instantanée",
              paragraphs: [
                "Le taux de variation est une variation moyenne ; le nombre dérivé est une variation instantanée. L'analogie la plus parlante est celle de la vitesse : si d(t) est la distance parcourue à l'instant t, le taux de variation de d entre t₁ et t₂ est la vitesse moyenne sur cet intervalle, et le nombre dérivé d'(t₀) est la vitesse instantanée à l'instant t₀, celle qu'affiche le compteur.",
                "Exemple : un objet lâché sans vitesse initiale parcourt, selon un modèle simplifié, d(t) = 5t² mètres en t secondes. Sa vitesse moyenne entre 1 s et 3 s vaut (45 - 5)/(3 - 1) = 20 m/s. Sa vitesse instantanée à t = 2 s est d'(2) : (5(2 + h)² - 20)/h = (20h + 5h²)/h = 20 + 5h, qui tend vers 20. Elle vaut donc 20 m/s.",
                "En économie ou en sciences, on interprète de même f'(a) comme le taux de variation instantané de la grandeur f au voisinage de a : un coût marginal, un débit, une vitesse de réaction. Le signe de f'(a) indique si la grandeur augmente (f'(a) > 0) ou diminue (f'(a) < 0) au voisinage de a.",
              ],
              box: { label: "À retenir", text: "Taux de variation : variation moyenne, pente d'une sécante. Nombre dérivé : variation instantanée, limite du taux de variation quand h tend vers 0." },
            },
          ],
          keyPoints: [
            "Taux de variation de f entre a et a + h : (f(a + h) - f(a))/h, avec h ≠ 0.",
            "Ce taux est la pente de la sécante passant par les points d'abscisses a et a + h.",
            "f est dérivable en a si ce taux tend vers un réel quand h tend vers 0 ; ce réel est f'(a).",
            "Méthode : calculer f(a + h) - f(a), diviser par h, simplifier, puis faire tendre h vers 0.",
            "Pour f(x) = x², f'(a) = 2a ; pour une fonction affine mx + p, f'(a) = m.",
            "Si d(t) est une distance, d'(t₀) est la vitesse instantanée à l'instant t₀.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ℝ par f(x) = x² - 3x. Calculez le taux de variation de f entre 2 et 2 + h (h ≠ 0), puis déduisez-en que f est dérivable en 2 et donnez f'(2).",
            solution: [
              "f(2 + h) = (2 + h)² - 3(2 + h) = 4 + 4h + h² - 6 - 3h = h² + h - 2.",
              "f(2) = 4 - 6 = -2, donc f(2 + h) - f(2) = h² + h - 2 + 2 = h² + h.",
              "Pour h ≠ 0, le taux de variation vaut (h² + h)/h = h + 1.",
              "Quand h tend vers 0, h + 1 tend vers 1, qui est un nombre réel.",
              "Conclusion : f est dérivable en 2 et f'(2) = 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f(x) = 3x + 1 et g(x) = x². a) Calculez le taux de variation de f entre 2 et 5, puis entre -1 et 4. Que remarquez-vous ? b) Calculez le taux de variation de g entre 1 et 3, puis entre 1 et 2.",
              hint: "Appliquez (f(b) - f(a))/(b - a) en calculant d'abord les images.",
              solution: [
                "a) f(2) = 7 et f(5) = 16 : (16 - 7)/(5 - 2) = 9/3 = 3. f(-1) = -2 et f(4) = 13 : (13 - (-2))/(4 - (-1)) = 15/5 = 3.",
                "Les deux taux valent 3, le coefficient directeur de la fonction affine f : pour une fonction affine, le taux de variation est constant.",
                "b) g(1) = 1 et g(3) = 9 : (9 - 1)/(3 - 1) = 4. g(2) = 4 : (4 - 1)/(2 - 1) = 3.",
                "Pour g, le taux de variation dépend de l'intervalle choisi : la courbe n'est pas une droite.",
              ],
            },
            {
              level: 2,
              statement: "Soit f la fonction définie sur ℝ par f(x) = 2x². a) Montrez que, pour tout réel h ≠ 0, le taux de variation de f entre 1 et 1 + h vaut 4 + 2h. b) Déduisez-en que f est dérivable en 1 et donnez f'(1). c) Par la même méthode, calculez f'(-2).",
              hint: "Développez 2(1 + h)² en utilisant (1 + h)² = 1 + 2h + h², puis simplifiez par h.",
              solution: [
                "a) f(1 + h) = 2(1 + 2h + h²) = 2 + 4h + 2h² et f(1) = 2. Donc f(1 + h) - f(1) = 4h + 2h², et le taux vaut (4h + 2h²)/h = 4 + 2h.",
                "b) Quand h tend vers 0, 4 + 2h tend vers 4 : f est dérivable en 1 et f'(1) = 4.",
                "c) f(-2 + h) = 2(4 - 4h + h²) = 8 - 8h + 2h² et f(-2) = 8. Le taux vaut (-8h + 2h²)/h = -8 + 2h.",
                "Quand h tend vers 0, -8 + 2h tend vers -8 : f'(-2) = -8.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style du bac. On lâche une bille du haut d'une tour. On admet que la distance parcourue, en mètres, au bout de t secondes est d(t) = 5t² pour t ∈ [0 ; 4]. a) Calculez la vitesse moyenne de la bille entre t = 1 et t = 3. b) Montrez que, pour h ≠ 0 assez petit, (d(2 + h) - d(2))/h = 20 + 5h. c) Déduisez-en la vitesse instantanée de la bille à l'instant t = 2. d) Soit f la fonction inverse, f(x) = 1/x. Montrez que le taux de variation de f entre 2 et 2 + h (avec h ≠ 0 et h > -2) vaut -1/(2(2 + h)), et déduisez-en f'(2).",
              hint: "Une vitesse moyenne est un taux de variation de la distance. Pour d), réduisez 1/(2 + h) - 1/2 au même dénominateur.",
              solution: [
                "a) d(1) = 5 et d(3) = 45 : la vitesse moyenne vaut (45 - 5)/(3 - 1) = 40/2 = 20 m/s.",
                "b) d(2 + h) = 5(4 + 4h + h²) = 20 + 20h + 5h² et d(2) = 20, donc (d(2 + h) - d(2))/h = (20h + 5h²)/h = 20 + 5h.",
                "c) Quand h tend vers 0, 20 + 5h tend vers 20 : d'(2) = 20. La vitesse instantanée à t = 2 s est 20 m/s.",
                "d) f(2 + h) - f(2) = 1/(2 + h) - 1/2 = (2 - (2 + h))/(2(2 + h)) = -h/(2(2 + h)).",
                "En divisant par h ≠ 0 : le taux vaut -1/(2(2 + h)). Quand h tend vers 0, 2(2 + h) tend vers 4, donc le taux tend vers -1/4.",
                "Conclusion : la vitesse instantanée à t = 2 s est 20 m/s, et la fonction inverse est dérivable en 2 avec f'(2) = -1/4.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : taux de variation et nombre dérivé.",
            statements: [
              { text: "Le taux de variation de f entre a et b est la pente de la sécante passant par les points d'abscisses a et b.", true: true, why: "C'est l'interprétation graphique du taux (f(b) - f(a))/(b - a)." },
              { text: "Pour calculer f'(a), on remplace h par 0 dans (f(a + h) - f(a))/h.", true: false, why: "On ne peut pas diviser par 0 : on simplifie d'abord l'expression, puis on étudie sa limite quand h tend vers 0." },
              { text: "Pour une fonction affine f(x) = mx + p, le nombre dérivé vaut m en tout point.", true: true, why: "Le taux de variation vaut toujours m, donc sa limite aussi." },
              { text: "Le nombre dérivé est une vitesse moyenne.", true: false, why: "C'est le taux de variation qui correspond à une vitesse moyenne ; le nombre dérivé correspond à une vitesse instantanée." },
              { text: "Si f(x) = x², alors f'(5) = 10.", true: true, why: "Pour la fonction carré, f'(a) = 2a, donc f'(5) = 10." },
              { text: "Si le taux de variation vaut 6 + h, alors f'(a) = 6 + h.", true: false, why: "Le nombre dérivé est la limite quand h tend vers 0 : f'(a) = 6, un nombre qui ne dépend pas de h." },
            ],
          },
          quiz: [
            {
              q: "Quel est le taux de variation de f(x) = x² entre 2 et 5 ?",
              options: ["3", "21", "10", "7"],
              answer: 3,
              why: "(25 - 4)/(5 - 2) = 21/3 = 7.",
            },
            {
              q: "Le taux de variation d'une fonction f entre 1 et 1 + h vaut 3h + 2 pour h ≠ 0. Que vaut f'(1) ?",
              options: ["2", "3", "5", "3h + 2"],
              answer: 0,
              why: "Quand h tend vers 0, 3h + 2 tend vers 2, donc f'(1) = 2.",
            },
            {
              q: "Que représente graphiquement le taux de variation de f entre a et b ?",
              options: ["L'ordonnée du milieu de [AB]", "La pente de la sécante (AB)", "L'aire sous la courbe entre a et b", "La longueur du segment [AB]"],
              answer: 1,
              why: "Le taux (f(b) - f(a))/(b - a) est le coefficient directeur de la droite (AB).",
            },
            {
              q: "Une voiture a parcouru d(t) kilomètres au bout de t heures. Que représente d'(2) ?",
              options: ["La distance parcourue en 2 heures", "La vitesse moyenne sur les 2 premières heures", "La vitesse instantanée à l'instant t = 2 h", "Le temps nécessaire pour parcourir 2 km"],
              answer: 2,
              why: "Le nombre dérivé d'une distance par rapport au temps est une vitesse instantanée.",
            },
            {
              q: "Pour f(x) = x², que vaut le taux de variation entre a et a + h (h ≠ 0) ?",
              options: ["2a", "2a + h", "a + h", "2a + h²"],
              answer: 1,
              why: "((a + h)² - a²)/h = (2ah + h²)/h = 2a + h, qui tend vers 2a.",
            },
          ],
          trap: "Remplacer h par 0 dans le quotient (f(a + h) - f(a))/h avant de l'avoir simplifié : on obtient 0/0, qui n'a pas de sens. Il faut d'abord développer, réduire et simplifier par h.",
          method: "Rédigez le calcul d'un nombre dérivé en trois lignes séparées : f(a + h) développé, puis f(a + h) - f(a) réduit, puis le quotient simplifié. Si la différence f(a + h) - f(a) ne contient pas h en facteur dans tous ses termes, une erreur de calcul s'est glissée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'tangente',
          title: 'Tangente à une courbe en un point',
          minutes: 30,
          objectives: [
            "Définir la tangente à une courbe en un point comme la droite de pente f'(a) passant par ce point.",
            "Déterminer une équation de la tangente à la courbe de f au point d'abscisse a.",
            "Lire graphiquement un nombre dérivé comme le coefficient directeur d'une tangente.",
          ],
          course: [
            {
              heading: "Définition de la tangente",
              paragraphs: [
                "Soit f une fonction dérivable en a, de courbe représentative Cf, et A le point de Cf d'abscisse a, de coordonnées (a ; f(a)). La tangente à Cf au point A est la droite qui passe par A et dont le coefficient directeur est le nombre dérivé f'(a).",
                "C'est la position limite des sécantes (AB) lorsque le point B se rapproche de A sur la courbe. Au voisinage de A, la tangente est la droite qui « colle » le mieux à la courbe : en zoomant fortement autour de A sur une calculatrice, la courbe finit par se confondre avec sa tangente. C'est pourquoi on dit que la tangente donne une approximation locale de la courbe.",
                "Attention, une tangente peut traverser la courbe et peut même la recouper ailleurs : la définition n'est pas « une droite qui touche la courbe en un seul point », comme pour le cercle. Par exemple, la courbe de x ↦ x³ traverse sa tangente au point d'origine, qui est l'axe des abscisses.",
              ],
              box: { label: "Définition", text: "Si f est dérivable en a, la tangente à la courbe de f au point A(a ; f(a)) est la droite passant par A de coefficient directeur f'(a)." },
            },
            {
              heading: "Équation de la tangente",
              paragraphs: [
                "Une droite de coefficient directeur m passant par A(a ; f(a)) a pour équation y = m(x - a) + f(a). En remplaçant m par f'(a), on obtient l'équation de la tangente : y = f'(a)(x - a) + f(a). Il suffit donc de connaître deux nombres : l'image f(a) et le nombre dérivé f'(a).",
                "Exemple : f(x) = x² et a = 3. On a f(3) = 9 et, d'après la leçon précédente, f'(a) = 2a donc f'(3) = 6. La tangente au point d'abscisse 3 a pour équation y = 6(x - 3) + 9, soit y = 6x - 9. Vérification : pour x = 3, on retrouve y = 18 - 9 = 9 = f(3).",
                "Si f'(a) = 0, l'équation devient y = f(a) : la tangente est horizontale. C'est ce qui se produit au sommet d'une parabole : pour f(x) = x², f'(0) = 0 et la tangente au point (0 ; 0) est l'axe des abscisses.",
              ],
              box: { label: "Formule", text: "Équation de la tangente à la courbe de f au point d'abscisse a : y = f'(a)(x - a) + f(a)." },
            },
            {
              heading: "Lecture graphique d'un nombre dérivé",
              paragraphs: [
                "Inversement, sur un graphique où la tangente est tracée, f'(a) est le coefficient directeur de cette tangente. Pour le lire, on repère deux points de la tangente, de préférence à coordonnées entières, et on calcule (yB - yA)/(xB - xA). On peut aussi partir du point A, avancer de 1 unité horizontalement et lire de combien la tangente monte (f'(a) > 0) ou descend (f'(a) < 0).",
                "Exemple : la courbe passe par A(1 ; 2) et la tangente en A passe aussi par B(3 ; 6). Alors f(1) = 2 et f'(1) = (6 - 2)/(3 - 1) = 2. On en déduit l'équation de la tangente : y = 2(x - 1) + 2 = 2x. Une tangente horizontale se lit immédiatement : le nombre dérivé correspondant est nul.",
              ],
              box: { label: "À retenir", text: "Graphiquement, f'(a) est le coefficient directeur de la tangente au point d'abscisse a. Tangente horizontale si et seulement si f'(a) = 0." },
            },
          ],
          keyPoints: [
            "La tangente en A(a ; f(a)) passe par A et a pour coefficient directeur f'(a).",
            "Équation : y = f'(a)(x - a) + f(a).",
            "Il faut deux nombres : f(a) (le point) et f'(a) (la pente).",
            "f'(a) = 0 : tangente horizontale d'équation y = f(a).",
            "Lecture graphique : f'(a) est la pente de la tangente, calculée avec deux points de cette droite.",
            "Une tangente peut traverser la courbe et la recouper ailleurs.",
          ],
          example: {
            statement: "Soit f la fonction carré, f(x) = x², dont on sait que f'(a) = 2a pour tout réel a. Déterminez une équation de la tangente à sa courbe au point d'abscisse 3, puis au point d'abscisse -1.",
            solution: [
              "Au point d'abscisse 3 : f(3) = 9 et f'(3) = 2 × 3 = 6.",
              "La tangente a pour équation y = f'(3)(x - 3) + f(3) = 6(x - 3) + 9 = 6x - 18 + 9, soit y = 6x - 9.",
              "Au point d'abscisse -1 : f(-1) = 1 et f'(-1) = -2.",
              "La tangente a pour équation y = -2(x - (-1)) + 1 = -2(x + 1) + 1 = -2x - 2 + 1, soit y = -2x - 1.",
              "Vérification : pour x = 3, 6 × 3 - 9 = 9 = f(3) ; pour x = -1, -2 × (-1) - 1 = 1 = f(-1).",
              "Conclusion : les tangentes ont pour équations y = 6x - 9 et y = -2x - 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une fonction f dérivable sur ℝ vérifie f(2) = 3 et f'(2) = -1. Déterminez une équation de la tangente à sa courbe au point d'abscisse 2.",
              hint: "Remplacez a, f(a) et f'(a) dans y = f'(a)(x - a) + f(a).",
              solution: [
                "y = f'(2)(x - 2) + f(2) = -1 × (x - 2) + 3.",
                "y = -x + 2 + 3, soit y = -x + 5.",
                "Vérification : pour x = 2, -2 + 5 = 3 = f(2).",
              ],
            },
            {
              level: 2,
              statement: "La courbe d'une fonction f passe par le point A(1 ; 2). La tangente à la courbe en A passe par le point B(3 ; 6). Une autre tangente, au point C(4 ; 5), est horizontale. a) Déterminez f(1), f'(1), f(4) et f'(4). b) Donnez une équation de chacune des deux tangentes.",
              hint: "Le coefficient directeur d'une droite passant par deux points se calcule par (yB - yA)/(xB - xA). Une droite horizontale a un coefficient directeur nul.",
              solution: [
                "a) A appartient à la courbe, donc f(1) = 2. La tangente en A passe par A et B : f'(1) = (6 - 2)/(3 - 1) = 4/2 = 2.",
                "C appartient à la courbe, donc f(4) = 5. La tangente en C est horizontale : f'(4) = 0.",
                "b) Tangente en A : y = 2(x - 1) + 2 = 2x.",
                "Tangente en C : y = 0 × (x - 4) + 5, soit y = 5.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style du bac. Soit f la fonction définie sur ℝ par f(x) = x² - 4x + 5, et Cf sa courbe. On admet que, pour tout réel a, f'(a) = 2a - 4. a) Déterminez une équation de la tangente T à Cf au point d'abscisse 3. b) En quel point de Cf la tangente est-elle horizontale ? Donnez son équation. c) Existe-t-il un point de Cf où la tangente est parallèle à la droite d'équation y = -2x + 7 ? Si oui, donnez une équation de cette tangente. d) Montrez que, pour tout réel x, f(x) - (2x - 4) = (x - 3)², et déduisez-en la position de Cf par rapport à T.",
              hint: "Deux droites sont parallèles lorsqu'elles ont le même coefficient directeur. Pour d), étudiez le signe d'un carré.",
              solution: [
                "a) f(3) = 9 - 12 + 5 = 2 et f'(3) = 6 - 4 = 2. Donc T : y = 2(x - 3) + 2, soit y = 2x - 4.",
                "b) La tangente est horizontale lorsque f'(a) = 0, soit 2a - 4 = 0, donc a = 2. On a f(2) = 4 - 8 + 5 = 1 : c'est le point (2 ; 1), et la tangente a pour équation y = 1 (c'est le sommet de la parabole).",
                "c) On cherche a tel que f'(a) = -2 : 2a - 4 = -2 donne a = 1. Puis f(1) = 1 - 4 + 5 = 2. La tangente au point (1 ; 2) a pour équation y = -2(x - 1) + 2, soit y = -2x + 4.",
                "d) f(x) - (2x - 4) = x² - 4x + 5 - 2x + 4 = x² - 6x + 9 = (x - 3)².",
                "Un carré est toujours positif ou nul, donc f(x) ≥ 2x - 4 pour tout réel x, avec égalité seulement pour x = 3.",
                "Conclusion : la courbe Cf est au-dessus de sa tangente T, et ne la touche qu'au point (3 ; 2).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour déterminer la tangente à la courbe de f(x) = x² au point d'abscisse 4.",
            items: [
              "Repérer l'abscisse du point : a = 4",
              "Calculer l'image et le nombre dérivé : f(4) = 16 et f'(4) = 2 × 4 = 8",
              "Remplacer dans y = f'(a)(x - a) + f(a) : y = 8(x - 4) + 16",
              "Développer : y = 8x - 32 + 16",
              "Réduire : y = 8x - 16",
              "Vérifier que x = 4 redonne y = 16",
            ],
          },
          quiz: [
            {
              q: "Quel est le coefficient directeur de la tangente à la courbe de f au point d'abscisse a ?",
              options: ["f(a)", "a", "f'(a)", "f(a)/a"],
              answer: 2,
              why: "Par définition, la tangente au point d'abscisse a a pour coefficient directeur le nombre dérivé f'(a).",
            },
            {
              q: "On sait que g(1) = 4 et g'(1) = 3. Quelle est l'équation de la tangente au point d'abscisse 1 ?",
              options: ["y = 3x + 1", "y = 4x + 3", "y = 3x + 4", "y = 4x - 1"],
              answer: 0,
              why: "y = 3(x - 1) + 4 = 3x + 1.",
            },
            {
              q: "La tangente à la courbe de f au point d'abscisse 2 est horizontale. Que peut-on affirmer ?",
              options: ["f(2) = 0", "f'(2) = 0", "f'(0) = 2", "f n'est pas dérivable en 2"],
              answer: 1,
              why: "Une droite horizontale a un coefficient directeur nul, donc f'(2) = 0.",
            },
            {
              q: "Une tangente passe par les points (0 ; -1) et (2 ; 5). Quel est le nombre dérivé correspondant ?",
              options: ["2", "-1", "5", "3"],
              answer: 3,
              why: "Le coefficient directeur vaut (5 - (-1))/(2 - 0) = 6/2 = 3.",
            },
            {
              q: "Laquelle de ces affirmations sur la tangente est exacte ?",
              options: ["Elle ne touche la courbe qu'en un seul point", "Elle peut traverser la courbe", "Elle est toujours horizontale", "Elle passe toujours par l'origine"],
              answer: 1,
              why: "Une tangente peut traverser la courbe (comme pour x³ en 0) et la recouper ailleurs.",
            },
          ],
          trap: "Écrire y = f'(a)x + f(a) en oubliant le « - a » : cette droite a la bonne pente mais ne passe pas par le point A(a ; f(a)). La formule correcte est y = f'(a)(x - a) + f(a).",
          method: "Après avoir trouvé l'équation d'une tangente, remplacez x par a : vous devez retrouver f(a). Ce contrôle détecte immédiatement l'oubli du « - a » ou une erreur sur l'image.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'derivees-usuelles',
          title: 'Fonctions dérivées des fonctions usuelles',
          minutes: 30,
          objectives: [
            "Connaître la fonction dérivée des fonctions constante, affine, carré, cube, inverse, racine carrée et x ↦ xⁿ.",
            "Démontrer, à l'aide du taux de variation, la dérivée de la fonction carré, de la fonction inverse ou de la fonction racine carrée.",
            "Savoir que la fonction racine carrée n'est pas dérivable en 0 et que la fonction valeur absolue n'est pas dérivable en 0.",
            "Utiliser une fonction dérivée pour calculer des nombres dérivés et des tangentes.",
          ],
          course: [
            {
              heading: "La fonction dérivée",
              paragraphs: [
                "Une fonction f est dérivable sur un intervalle I si elle est dérivable en tout réel a de I. La fonction qui, à tout x de I, associe le nombre dérivé f'(x) s'appelle la fonction dérivée de f et se note f'. Au lieu de recalculer une limite en chaque point, on dispose ainsi d'une formule qui donne directement tous les nombres dérivés.",
                "Par exemple, pour f(x) = x², le calcul du taux de variation en un réel a quelconque donne (a + h)² - a² = 2ah + h², donc un taux égal à 2a + h, qui tend vers 2a. La fonction carré est dérivable sur ℝ et sa dérivée est f'(x) = 2x. Ainsi f'(3) = 6, f'(-1) = -2 et f'(0) = 0, sans nouveau calcul de limite.",
              ],
              box: { label: "Définition", text: "Si f est dérivable en tout point d'un intervalle I, la fonction dérivée de f est la fonction f' qui, à tout x de I, associe le nombre dérivé f'(x)." },
            },
            {
              heading: "Le tableau des dérivées usuelles",
              paragraphs: [
                "Les dérivées suivantes sont à connaître par cœur. Fonction constante f(x) = k : f'(x) = 0. Fonction affine f(x) = mx + p : f'(x) = m ; en particulier, la dérivée de x est 1. Fonction carré f(x) = x² : f'(x) = 2x. Fonction cube f(x) = x³ : f'(x) = 3x². Plus généralement, pour tout entier n ≥ 1, la dérivée de xⁿ est n xⁿ⁻¹ : la dérivée de x⁵ est 5x⁴. Toutes ces fonctions sont dérivables sur ℝ.",
                "Fonction inverse f(x) = 1/x : elle est dérivable sur ]-∞ ; 0[ et sur ]0 ; +∞[, et f'(x) = -1/x². Démonstration en a ≠ 0 : 1/(a + h) - 1/a = -h/(a(a + h)), donc le taux vaut -1/(a(a + h)), qui tend vers -1/a². On remarque que f'(x) < 0 sur chacun des deux intervalles.",
                "Fonction racine carrée f(x) = √x : elle est définie sur [0 ; +∞[ mais dérivable seulement sur ]0 ; +∞[, avec f'(x) = 1/(2√x). Démonstration en a > 0 : en multipliant par la quantité conjuguée, (√(a + h) - √a)/h = 1/(√(a + h) + √a), qui tend vers 1/(2√a).",
              ],
              box: { label: "Formule", text: "k → 0 ; mx + p → m ; x² → 2x ; x³ → 3x² ; xⁿ → n xⁿ⁻¹ (n ≥ 1) ; 1/x → -1/x² (pour x ≠ 0) ; √x → 1/(2√x) (pour x > 0)." },
            },
            {
              heading: "Deux fonctions non dérivables en 0",
              paragraphs: [
                "La fonction racine carrée n'est pas dérivable en 0. En effet, son taux de variation entre 0 et h (h > 0) vaut √h/h = 1/√h, qui devient aussi grand que l'on veut lorsque h tend vers 0 : il ne tend pas vers un nombre réel. Graphiquement, la courbe de √x admet au point d'origine une tangente verticale, qui n'a pas de coefficient directeur.",
                "La fonction valeur absolue, x ↦ |x|, n'est pas non plus dérivable en 0. Son taux de variation entre 0 et h vaut |h|/h, c'est-à-dire 1 si h > 0 et -1 si h < 0 : il n'a pas une limite unique. Graphiquement, la courbe présente un « point anguleux » en 0, avec deux demi-droites de pentes différentes. Être défini en un point ne suffit donc pas pour être dérivable en ce point.",
              ],
              box: { label: "À retenir", text: "√x est définie en 0 mais n'y est pas dérivable (tangente verticale). |x| n'est pas dérivable en 0 (point anguleux)." },
            },
          ],
          keyPoints: [
            "La fonction dérivée f' associe à chaque x le nombre dérivé f'(x).",
            "Constante → 0 ; mx + p → m ; x² → 2x ; x³ → 3x² ; xⁿ → n xⁿ⁻¹.",
            "1/x → -1/x², sur ]-∞ ; 0[ et sur ]0 ; +∞[.",
            "√x → 1/(2√x), sur ]0 ; +∞[ seulement : √x n'est pas dérivable en 0.",
            "|x| n'est pas dérivable en 0 : sa courbe y présente un point anguleux.",
          ],
          example: {
            statement: "Soit f(x) = x³ et g(x) = √x. Calculez f'(-2) et g'(4), puis déterminez une équation de la tangente à la courbe de g au point d'abscisse 4.",
            solution: [
              "f est dérivable sur ℝ et f'(x) = 3x², donc f'(-2) = 3 × 4 = 12.",
              "g est dérivable sur ]0 ; +∞[ et g'(x) = 1/(2√x), donc g'(4) = 1/(2 × 2) = 1/4.",
              "Pour la tangente, on calcule aussi g(4) = √4 = 2.",
              "La tangente a pour équation y = g'(4)(x - 4) + g(4) = (1/4)(x - 4) + 2 = x/4 - 1 + 2.",
              "Conclusion : f'(-2) = 12, g'(4) = 1/4 et la tangente a pour équation y = x/4 + 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la fonction dérivée de chacune des fonctions suivantes, en précisant l'ensemble sur lequel elle est dérivable : f₁(x) = 7 ; f₂(x) = -4x + 3 ; f₃(x) = x⁵ ; f₄(x) = 1/x ; f₅(x) = √x. Calculez ensuite f₃'(2) et f₄'(-1).",
              hint: "Utilisez le tableau des dérivées usuelles. Attention aux ensembles de dérivabilité de 1/x et de √x.",
              solution: [
                "f₁'(x) = 0 sur ℝ ; f₂'(x) = -4 sur ℝ ; f₃'(x) = 5x⁴ sur ℝ.",
                "f₄'(x) = -1/x² sur ]-∞ ; 0[ et sur ]0 ; +∞[ ; f₅'(x) = 1/(2√x) sur ]0 ; +∞[.",
                "f₃'(2) = 5 × 2⁴ = 5 × 16 = 80.",
                "f₄'(-1) = -1/(-1)² = -1/1 = -1.",
              ],
            },
            {
              level: 2,
              statement: "a) Déterminez une équation de la tangente à la courbe de la fonction inverse au point d'abscisse 2. b) Déterminez une équation de la tangente à la courbe de la fonction racine carrée au point d'abscisse 9. c) En quel point la tangente à la courbe de x ↦ x² a-t-elle pour coefficient directeur 5 ?",
              hint: "Pour chaque tangente, calculez l'image et le nombre dérivé, puis utilisez y = f'(a)(x - a) + f(a). Pour c), résolvez 2a = 5.",
              solution: [
                "a) f(x) = 1/x : f(2) = 1/2 et f'(2) = -1/2² = -1/4. Tangente : y = -1/4 (x - 2) + 1/2 = -x/4 + 1/2 + 1/2, soit y = -x/4 + 1.",
                "b) g(x) = √x : g(9) = 3 et g'(9) = 1/(2 × 3) = 1/6. Tangente : y = (1/6)(x - 9) + 3 = x/6 - 3/2 + 3, soit y = x/6 + 3/2.",
                "c) La dérivée de x² est 2x. On résout 2a = 5, soit a = 5/2 = 2,5. Le point cherché est (2,5 ; 6,25).",
              ],
            },
            {
              level: 3,
              statement: "Dans le style du bac. Soit g la fonction racine carrée, g(x) = √x, définie sur [0 ; +∞[. a) Soit a > 0 et h un réel non nul tel que a + h > 0. Montrez que (√(a + h) - √a)/h = 1/(√(a + h) + √a). b) Déduisez-en que g est dérivable en a et donnez g'(a). c) Calculez le taux de variation de g entre 0 et h, pour h > 0. La fonction g est-elle dérivable en 0 ? d) Déterminez le point de la courbe de g en lequel la tangente a pour coefficient directeur 1/4, et donnez une équation de cette tangente.",
              hint: "Pour a), multipliez numérateur et dénominateur par la quantité conjuguée √(a + h) + √a et utilisez (√u - √v)(√u + √v) = u - v.",
              solution: [
                "a) (√(a + h) - √a)/h = [(√(a + h) - √a)(√(a + h) + √a)]/[h(√(a + h) + √a)] = (a + h - a)/[h(√(a + h) + √a)] = h/[h(√(a + h) + √a)] = 1/(√(a + h) + √a).",
                "b) Quand h tend vers 0, √(a + h) tend vers √a, donc le taux tend vers 1/(2√a), qui est un réel car a > 0. g est dérivable en a et g'(a) = 1/(2√a).",
                "c) Pour h > 0 : (√h - √0)/h = √h/h = 1/√h. Quand h tend vers 0, 1/√h devient aussi grand que l'on veut : le taux ne tend pas vers un réel, donc g n'est pas dérivable en 0.",
                "d) On cherche a > 0 tel que 1/(2√a) = 1/4, soit 2√a = 4, √a = 2 et a = 4. Le point est (4 ; 2).",
                "La tangente a pour équation y = (1/4)(x - 4) + 2, soit y = x/4 + 1.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque fonction à sa fonction dérivée.",
            pairs: [
              { left: "f(x) = x³", right: "f'(x) = 3x²" },
              { left: "f(x) = 1/x", right: "f'(x) = -1/x²" },
              { left: "f(x) = √x", right: "f'(x) = 1/(2√x)" },
              { left: "f(x) = 12", right: "f'(x) = 0" },
              { left: "f(x) = -3x + 8", right: "f'(x) = -3" },
              { left: "f(x) = x⁴", right: "f'(x) = 4x³" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la dérivée de f(x) = x⁶ ?",
              options: ["6x⁵", "x⁵", "6x⁶", "5x⁶"],
              answer: 0,
              why: "La dérivée de xⁿ est n xⁿ⁻¹, donc celle de x⁶ est 6x⁵.",
            },
            {
              q: "Sur quel ensemble la fonction racine carrée est-elle dérivable ?",
              options: ["ℝ", "[0 ; +∞[", "]-∞ ; 0[", "]0 ; +∞["],
              answer: 3,
              why: "Elle est définie sur [0 ; +∞[ mais n'est pas dérivable en 0 : elle est dérivable sur ]0 ; +∞[.",
            },
            {
              q: "Soit f(x) = 1/x. Que vaut f'(2) ?",
              options: ["1/4", "-1/2", "-1/4", "1/2"],
              answer: 2,
              why: "f'(x) = -1/x², donc f'(2) = -1/4.",
            },
            {
              q: "Pourquoi la fonction valeur absolue n'est-elle pas dérivable en 0 ?",
              options: ["Elle n'est pas définie en 0", "Son taux de variation tend vers 1 à droite et vers -1 à gauche", "Elle vaut 0 en 0", "Sa courbe est une parabole"],
              answer: 1,
              why: "Le taux |h|/h vaut 1 pour h > 0 et -1 pour h < 0 : il n'a pas de limite unique, la courbe présente un point anguleux.",
            },
            {
              q: "Quelle est la dérivée de f(x) = 5 ?",
              options: ["5", "5x", "1", "0"],
              answer: 3,
              why: "La dérivée d'une fonction constante est nulle.",
            },
          ],
          trap: "Écrire que la dérivée de 1/x est 1/x² (en oubliant le signe moins) ou que celle de √x est 1/√x (en oubliant le facteur 2). Autre erreur : dire que √x est dérivable en 0 parce qu'elle y est définie.",
          method: "Pour retenir le tableau sans confusion, vérifiez les formules sur une valeur : la courbe de 1/x descend sur ]0 ; +∞[, donc sa dérivée doit être négative, d'où le signe moins de -1/x². Récitez le tableau à voix haute jusqu'à le donner en moins de 30 secondes.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'operations-derivees',
          title: 'Dériver une somme, un produit, un quotient, une composée affine',
          minutes: 35,
          objectives: [
            "Dériver une somme, un produit par un réel, un produit et un quotient de fonctions dérivables.",
            "Dériver une fonction de la forme x ↦ g(ax + b).",
            "Calculer la dérivée d'une fonction polynôme et l'utiliser pour déterminer une tangente.",
          ],
          course: [
            {
              heading: "Somme et produit par un réel",
              paragraphs: [
                "Soient u et v deux fonctions dérivables sur un intervalle I et k un réel. La somme u + v est dérivable sur I et (u + v)' = u' + v'. Le produit ku est dérivable sur I et (ku)' = k × u'. Autrement dit, on dérive terme à terme et les coefficients multiplicatifs restent en facteur.",
                "Ces deux règles permettent de dériver toutes les fonctions polynômes. Pour f(x) = 4x³ - 5x² + 2x - 7 : f'(x) = 4 × 3x² - 5 × 2x + 2 - 0 = 12x² - 10x + 2. De même, pour g(x) = x² + 3/x sur ]0 ; +∞[ : g'(x) = 2x + 3 × (-1/x²) = 2x - 3/x².",
              ],
              box: { label: "Règle", text: "(u + v)' = u' + v' et (ku)' = ku'. La dérivée d'une fonction polynôme s'obtient en dérivant chaque terme." },
            },
            {
              heading: "Produit de deux fonctions",
              paragraphs: [
                "Si u et v sont dérivables sur I, le produit uv est dérivable sur I et (uv)' = u'v + uv'. Attention : la dérivée d'un produit n'est pas le produit des dérivées. Par exemple, x² = x × x, mais 2x n'est pas égal à 1 × 1.",
                "Exemple : f(x) = (2x + 1)(x² - 3). On pose u(x) = 2x + 1, donc u'(x) = 2, et v(x) = x² - 3, donc v'(x) = 2x. Alors f'(x) = 2(x² - 3) + (2x + 1) × 2x = 2x² - 6 + 4x² + 2x = 6x² + 2x - 6. On peut contrôler en développant d'abord : f(x) = 2x³ + x² - 6x - 3, dont la dérivée est bien 6x² + 2x - 6.",
                "Autre exemple, où le développement n'est pas possible : f(x) = x√x sur ]0 ; +∞[. Avec u(x) = x et v(x) = √x, f'(x) = 1 × √x + x × 1/(2√x) = √x + √x/2 = (3/2)√x, en utilisant x/√x = √x.",
              ],
              box: { label: "Formule", text: "(uv)' = u'v + uv'." },
            },
            {
              heading: "Inverse et quotient",
              paragraphs: [
                "Si v est dérivable sur I et ne s'annule pas sur I, alors 1/v est dérivable sur I et (1/v)' = -v'/v². Si de plus u est dérivable sur I, alors u/v est dérivable sur I et (u/v)' = (u'v - uv')/v². Le dénominateur v² est positif : c'est souvent le numérateur qui décide du signe de la dérivée.",
                "Exemple : f(x) = (3x - 1)/(x + 2) sur ]-2 ; +∞[. On pose u(x) = 3x - 1, u'(x) = 3, v(x) = x + 2, v'(x) = 1. Alors f'(x) = [3(x + 2) - (3x - 1) × 1]/(x + 2)² = (3x + 6 - 3x + 1)/(x + 2)² = 7/(x + 2)². Les parenthèses autour de (3x - 1) sont indispensables : sans elles, on oublierait de distribuer le signe moins.",
                "Exemple avec l'inverse : k(x) = 1/(x² + 1), définie et dérivable sur ℝ car x² + 1 ne s'annule jamais. Avec v(x) = x² + 1 et v'(x) = 2x, on obtient k'(x) = -2x/(x² + 1)².",
              ],
              box: { label: "Formule", text: "(1/v)' = -v'/v² et (u/v)' = (u'v - uv')/v², là où v ne s'annule pas." },
            },
            {
              heading: "Composée avec une fonction affine",
              paragraphs: [
                "Soit g une fonction dérivable sur un intervalle J, et a et b deux réels. La fonction f définie par f(x) = g(ax + b) est dérivable en tout x tel que ax + b appartient à J, et f'(x) = a × g'(ax + b). On dérive la fonction « extérieure » g, on l'évalue en ax + b, puis on multiplie par a, le coefficient de x.",
                "Exemples : pour f(x) = (2x - 5)³, on prend g(t) = t³, g'(t) = 3t², donc f'(x) = 2 × 3(2x - 5)² = 6(2x - 5)². Pour h(x) = √(4x + 1), définie et dérivable lorsque 4x + 1 > 0, c'est-à-dire sur ]-1/4 ; +∞[ : h'(x) = 4 × 1/(2√(4x + 1)) = 2/√(4x + 1).",
              ],
              box: { label: "Formule", text: "Si f(x) = g(ax + b), alors f'(x) = a × g'(ax + b)." },
            },
          ],
          keyPoints: [
            "(u + v)' = u' + v' et (ku)' = ku' : on dérive un polynôme terme à terme.",
            "(uv)' = u'v + uv' : la dérivée d'un produit n'est pas le produit des dérivées.",
            "(1/v)' = -v'/v² et (u/v)' = (u'v - uv')/v², là où v ne s'annule pas.",
            "g(ax + b) a pour dérivée a × g'(ax + b).",
            "Toujours écrire u, u', v et v' avant d'appliquer une formule, et mettre des parenthèses.",
          ],
          example: {
            statement: "Calculez la dérivée de la fonction f définie sur ℝ par f(x) = (2x + 1)(x² - 3), puis contrôlez le résultat en développant f(x).",
            solution: [
              "f est le produit uv avec u(x) = 2x + 1 et v(x) = x² - 3, dérivables sur ℝ.",
              "u'(x) = 2 et v'(x) = 2x.",
              "f'(x) = u'(x)v(x) + u(x)v'(x) = 2(x² - 3) + (2x + 1) × 2x.",
              "f'(x) = 2x² - 6 + 4x² + 2x = 6x² + 2x - 6.",
              "Contrôle : f(x) = 2x³ - 6x + x² - 3 = 2x³ + x² - 6x - 3, dont la dérivée est 6x² + 2x - 6.",
              "Conclusion : f'(x) = 6x² + 2x - 6.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez la dérivée de chacune des fonctions suivantes : a) f(x) = 4x³ - 5x² + 2x - 7 sur ℝ ; b) g(x) = 3√x sur ]0 ; +∞[ ; c) h(x) = x² + 1/x sur ]0 ; +∞[ ; d) k(x) = -x⁴/2 + 6x sur ℝ.",
              hint: "Dérivez chaque terme séparément et gardez les coefficients en facteur.",
              solution: [
                "a) f'(x) = 4 × 3x² - 5 × 2x + 2 = 12x² - 10x + 2.",
                "b) g'(x) = 3 × 1/(2√x) = 3/(2√x).",
                "c) h'(x) = 2x - 1/x².",
                "d) k'(x) = -(1/2) × 4x³ + 6 = -2x³ + 6.",
              ],
            },
            {
              level: 2,
              statement: "a) Calculez la dérivée de f(x) = (3x - 1)/(x + 2) sur ]-2 ; +∞[ et déduisez-en son signe. b) Calculez la dérivée de g(x) = x√x sur ]0 ; +∞[. c) Calculez la dérivée de k(x) = (x² + 1)(1 - 2x) sur ℝ de deux façons : avec la formule du produit, puis en développant.",
              hint: "Pour a), posez u(x) = 3x - 1 et v(x) = x + 2. Pour b), utilisez x/√x = √x.",
              solution: [
                "a) u'(x) = 3 et v'(x) = 1, donc f'(x) = [3(x + 2) - (3x - 1)]/(x + 2)² = (3x + 6 - 3x + 1)/(x + 2)² = 7/(x + 2)². Un carré non nul étant strictement positif, f'(x) > 0 sur ]-2 ; +∞[.",
                "b) g'(x) = 1 × √x + x × 1/(2√x) = √x + √x/2 = (3/2)√x.",
                "c) Avec le produit : u(x) = x² + 1, u'(x) = 2x, v(x) = 1 - 2x, v'(x) = -2. k'(x) = 2x(1 - 2x) + (x² + 1)(-2) = 2x - 4x² - 2x² - 2 = -6x² + 2x - 2.",
                "En développant : k(x) = x² - 2x³ + 1 - 2x = -2x³ + x² - 2x + 1, donc k'(x) = -6x² + 2x - 2. Les deux méthodes donnent le même résultat.",
              ],
            },
            {
              level: 3,
              statement: "Dans le style du bac. a) Calculez la dérivée de f(x) = (2x - 5)³ sur ℝ. b) Calculez la dérivée de h(x) = √(4x + 1) sur ]-1/4 ; +∞[, puis h'(2). c) Soit k la fonction définie sur ℝ par k(x) = 1/(x² + 1). Justifiez que k est dérivable sur ℝ, calculez k'(x), puis déterminez une équation de la tangente à la courbe de k au point d'abscisse 1. d) Montrez que la tangente à la courbe de k au point d'abscisse 0 est horizontale.",
              hint: "Pour a) et b), utilisez la formule de g(ax + b). Pour c), utilisez (1/v)' = -v'/v² avec v(x) = x² + 1.",
              solution: [
                "a) f(x) = g(2x - 5) avec g(t) = t³ et g'(t) = 3t². Donc f'(x) = 2 × 3(2x - 5)² = 6(2x - 5)².",
                "b) h(x) = g(4x + 1) avec g(t) = √t et g'(t) = 1/(2√t). Donc h'(x) = 4 × 1/(2√(4x + 1)) = 2/√(4x + 1), et h'(2) = 2/√9 = 2/3.",
                "c) v(x) = x² + 1 est dérivable sur ℝ et v(x) ≥ 1 > 0, donc v ne s'annule pas : k = 1/v est dérivable sur ℝ et k'(x) = -2x/(x² + 1)².",
                "k(1) = 1/2 et k'(1) = -2/(2²) = -2/4 = -1/2. La tangente a pour équation y = -1/2 (x - 1) + 1/2 = -x/2 + 1/2 + 1/2, soit y = -x/2 + 1.",
                "d) k'(0) = 0/1 = 0 : la tangente au point d'abscisse 0 a un coefficient directeur nul. Elle est horizontale, d'équation y = k(0) = 1.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les opérations sur les dérivées.",
            statements: [
              { text: "La dérivée de 5x³ - 2x est 15x² - 2.", true: true, why: "On dérive terme à terme : 5 × 3x² - 2 = 15x² - 2." },
              { text: "La dérivée de u × v est u' × v'.", true: false, why: "La formule est (uv)' = u'v + uv'. Par exemple, x × x = x² a pour dérivée 2x et non 1." },
              { text: "La dérivée de 1/(x + 3) est -1/(x + 3)², pour x ≠ -3.", true: true, why: "(1/v)' = -v'/v² avec v(x) = x + 3 et v'(x) = 1." },
              { text: "La dérivée de (3x + 1)² est 2(3x + 1).", true: false, why: "Il manque le facteur 3 : la dérivée de g(ax + b) est a × g'(ax + b), soit 3 × 2(3x + 1) = 6(3x + 1)." },
              { text: "Dans la formule du quotient, le dénominateur de la dérivée est v².", true: true, why: "(u/v)' = (u'v - uv')/v²." },
              { text: "La dérivée de (u/v) est u'/v'.", true: false, why: "Un quotient se dérive avec (u'v - uv')/v², pas en divisant les dérivées." },
              { text: "La dérivée de √(2x) est 1/√(2x), pour x > 0.", true: true, why: "2 × 1/(2√(2x)) = 1/√(2x) : le facteur 2 de la composée affine se simplifie avec celui de la dérivée de √." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la dérivée de f(x) = x²(x + 1) ?",
              options: ["2x", "3x² + 2x", "2x(x + 1)", "2x² + 1"],
              answer: 1,
              why: "(uv)' = 2x(x + 1) + x² × 1 = 2x² + 2x + x² = 3x² + 2x.",
            },
            {
              q: "Quelle est la dérivée de f(x) = (5x - 2)⁴ ?",
              options: ["20(5x - 2)³", "4(5x - 2)³", "5(5x - 2)³", "20x³"],
              answer: 0,
              why: "f'(x) = 5 × 4(5x - 2)³ = 20(5x - 2)³ : on n'oublie pas le facteur 5.",
            },
            {
              q: "Quelle est la dérivée de f(x) = 1/(2x + 1), pour x ≠ -1/2 ?",
              options: ["1/(2x + 1)²", "-1/(2x + 1)²", "2/(2x + 1)²", "-2/(2x + 1)²"],
              answer: 3,
              why: "(1/v)' = -v'/v² avec v'(x) = 2, donc f'(x) = -2/(2x + 1)².",
            },
            {
              q: "Pour f(x) = (x + 1)/(x - 1), sur ]1 ; +∞[, le numérateur de f'(x) dans la formule du quotient vaut :",
              options: ["2", "-2", "2x", "0"],
              answer: 1,
              why: "u'v - uv' = 1 × (x - 1) - (x + 1) × 1 = x - 1 - x - 1 = -2.",
            },
            {
              q: "Quelle est la dérivée de f(x) = 3x² - 4/x, sur ]0 ; +∞[ ?",
              options: ["6x - 4/x²", "6x + 4/x", "6x + 4/x²", "3x - 4/x²"],
              answer: 2,
              why: "La dérivée de -4/x est -4 × (-1/x²) = 4/x², donc f'(x) = 6x + 4/x².",
            },
          ],
          trap: "Dans la formule du quotient, oublier les parenthèses autour de u ou de v : écrire 3(x + 2) - 3x - 1 au lieu de 3(x + 2) - (3x - 1) fait perdre le changement de signe. Autre oubli fréquent : le facteur a dans la dérivée de g(ax + b).",
          method: "Avant tout calcul, écrivez sur quatre lignes u(x), u'(x), v(x) et v'(x), puis recopiez la formule avec des parenthèses autour de chaque bloc. Quand c'est possible, contrôlez en développant la fonction ou en calculant f'(a) en un point simple.",
        },
      ],
    },
  ],
}
