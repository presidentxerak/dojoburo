import type { UnitContent } from '../types'

// Notations (Unicode, sans LaTeX) :
// - exponentielle : eˣ, e^(2x), e^(-0,5t) ; puissances : x², xⁿ, xⁿ⁺¹ ;
// - intégrale de a à b : ∫ₐᵇ f(x) dx (bornes en indice et en exposant quand les
//   caractères existent ; sinon, en toutes lettres : « l'intégrale de b à a ») ;
// - coefficient binomial « k parmi n » : C(n, k) ; suites : uₙ, Mₙ, Sₙ.

export const CONTENT: UnitContent = {
  unit: 'maths-tle',
  chapters: [
    /* ==================================================================== */
    /* PRIMITIVES ET ÉQUATIONS DIFFÉRENTIELLES                                */
    /* ==================================================================== */
    {
      id: 'primitives-equadiff',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'primitives',
          title: 'Primitives d\'une fonction',
          minutes: 30,
          objectives: [
            "Définir une primitive d'une fonction sur un intervalle et vérifier qu'une fonction donnée est une primitive d'une autre.",
            "Calculer des primitives en utilisant les primitives de référence et la linéarité.",
            "Calculer des primitives de fonctions de la forme (v' ∘ u) × u', en particulier u'eᵘ, u'uⁿ, u'/u et u'/√u.",
            "Déterminer la primitive qui prend une valeur donnée en un point donné.",
          ],
          course: [
            {
              heading: "Équation y' = f et notion de primitive",
              paragraphs: [
                "Soit f une fonction définie sur un intervalle I. On appelle primitive de f sur I toute fonction F dérivable sur I telle que F'(x) = f(x) pour tout x de I. Chercher une primitive, c'est donc faire le chemin inverse de la dérivation : on connaît la dérivée, on cherche la fonction. Par exemple, F(x) = x³ + 2x est une primitive sur ℝ de f(x) = 3x² + 2, car F'(x) = 3x² + 2.",
                "Dire que F est une primitive de f sur I, c'est dire que F est une solution sur I de l'équation différentielle y' = f : l'inconnue n'est pas un nombre, mais une fonction y dont on connaît la dérivée. Une analogie physique aide à fixer les idées : si l'on connaît la vitesse d'un mobile à chaque instant, on retrouve sa position, à condition de savoir d'où il est parti.",
                "On admet pour l'instant le résultat suivant, qui sera démontré dans le chapitre de calcul intégral : toute fonction continue sur un intervalle admet des primitives sur cet intervalle.",
              ],
              box: { label: "Définition", text: "F est une primitive de f sur l'intervalle I lorsque F est dérivable sur I et que, pour tout x de I, F'(x) = f(x). Pour vérifier qu'une fonction est une primitive, on la dérive." },
            },
            {
              heading: "Toutes les primitives d'une fonction",
              paragraphs: [
                "Si F est une primitive de f sur I, alors pour toute constante C, la fonction F + C est aussi une primitive de f, puisque la dérivée d'une constante est nulle. Réciproquement, si F et G sont deux primitives de f sur I, alors (G - F)' = f - f = 0 sur I ; or une fonction dont la dérivée est nulle sur un intervalle est constante sur cet intervalle. Il existe donc un réel C tel que G = F + C : deux primitives d'une même fonction sur un intervalle diffèrent d'une constante.",
                "Conséquence : parmi toutes les primitives de f sur I, il en existe une et une seule qui prend une valeur y₀ donnée en un point x₀ donné de I. Exemple : les primitives de f(x) = 2x sur ℝ sont les fonctions x ↦ x² + C. Celle qui vaut 5 en 1 vérifie 1 + C = 5, donc C = 4 : c'est F(x) = x² + 4.",
              ],
              box: { label: "Propriété", text: "Si F est une primitive de f sur un intervalle I, les primitives de f sur I sont les fonctions x ↦ F(x) + C, où C est un réel. Pour x₀ dans I et y₀ réel, il existe une unique primitive G de f telle que G(x₀) = y₀." },
            },
            {
              heading: "Primitives des fonctions de référence",
              paragraphs: [
                "En lisant à l'envers le tableau des dérivées, on obtient les primitives de référence (C désigne une constante réelle) : une primitive de k (constante) est kx ; de xⁿ (n entier différent de -1) est xⁿ⁺¹/(n + 1), sur ℝ si n ≥ 0 et sur ]-∞ ; 0[ ou ]0 ; +∞[ si n ≤ -2 ; de 1/x² est -1/x ; de 1/x est ln(x) sur ]0 ; +∞[ ; de 1/√x est 2√x sur ]0 ; +∞[ ; de eˣ est eˣ ; de cos(x) est sin(x) ; de sin(x) est -cos(x).",
                "Comme la dérivation est linéaire, le calcul des primitives l'est aussi : si F et G sont des primitives de f et g, et si a et b sont des réels, alors aF + bG est une primitive de af + bg. Exemple : une primitive de f(x) = 4x³ - 6x + 5 sur ℝ est F(x) = x⁴ - 3x² + 5x, puisque x⁴ a pour dérivée 4x³ et 3x² a pour dérivée 6x.",
              ],
              box: { label: "Formule", text: "k → kx ; xⁿ → xⁿ⁺¹/(n + 1) (n ≠ -1) ; 1/x² → -1/x ; 1/x → ln(x) sur ]0 ; +∞[ ; 1/√x → 2√x sur ]0 ; +∞[ ; eˣ → eˣ ; cos(x) → sin(x) ; sin(x) → -cos(x)." },
            },
            {
              heading: "Reconnaître la dérivée d'une fonction composée",
              paragraphs: [
                "On sait que la dérivée de v ∘ u est (v' ∘ u) × u'. Donc une primitive de (v' ∘ u) × u' est v ∘ u. Les cas les plus fréquents, pour u dérivable sur I : u'eᵘ a pour primitive eᵘ ; u'uⁿ (n entier, n ≠ -1) a pour primitive uⁿ⁺¹/(n + 1) (avec u qui ne s'annule pas si n ≤ -2) ; u'/u a pour primitive ln(u) si u > 0 sur I ; u'/√u a pour primitive 2√u si u > 0 sur I ; u'cos(u) a pour primitive sin(u) et u'sin(u) a pour primitive -cos(u).",
                "La méthode consiste à repérer u, à calculer u', puis à faire apparaître exactement u' en ajustant un coefficient constant. Exemple 1 : f(x) = 2x e^(x²) est de la forme u'eᵘ avec u(x) = x², donc F(x) = e^(x²). Exemple 2 : g(x) = x/(x² + 1). Avec u(x) = x² + 1, on a u'(x) = 2x, donc g(x) = ½ × 2x/(x² + 1) = ½ × u'(x)/u(x). Comme u > 0 sur ℝ, une primitive est G(x) = ½ ln(x² + 1).",
                "Exemple 3 : h(x) = e^(3x). Avec u(x) = 3x, u'(x) = 3, donc h(x) = ⅓ × 3e^(3x) et une primitive est H(x) = ⅓ e^(3x). On vérifie toujours en dérivant : H'(x) = ⅓ × 3e^(3x) = e^(3x).",
              ],
              box: { label: "À retenir", text: "u'eᵘ → eᵘ ; u'uⁿ → uⁿ⁺¹/(n + 1) ; u'/u → ln(u) si u > 0 ; u'/u² → -1/u ; u'/√u → 2√u si u > 0. On ajuste le coefficient pour faire apparaître exactement u'." },
            },
          ],
          keyPoints: [
            "F est une primitive de f sur I si F est dérivable sur I et F' = f.",
            "Deux primitives d'une même fonction sur un intervalle diffèrent d'une constante : toutes les primitives s'écrivent F + C.",
            "Une condition F(x₀) = y₀ fixe la constante C et donne une unique primitive.",
            "Primitives de référence : xⁿ → xⁿ⁺¹/(n + 1), 1/x → ln(x), eˣ → eˣ, cos → sin, sin → -cos.",
            "Formes composées : u'eᵘ → eᵘ, u'uⁿ → uⁿ⁺¹/(n + 1), u'/u → ln(u) (u > 0), u'/√u → 2√u (u > 0).",
            "On vérifie toujours une primitive en la dérivant.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ]0 ; +∞[ par f(x) = 3x² - 4x + 1/x. Déterminer la primitive F de f sur ]0 ; +∞[ telle que F(1) = 2.",
            solution: [
              "On cherche une primitive terme à terme : 3x² a pour primitive x³, -4x a pour primitive -2x², et 1/x a pour primitive ln(x) sur ]0 ; +∞[.",
              "Les primitives de f sur ]0 ; +∞[ sont donc les fonctions F(x) = x³ - 2x² + ln(x) + C, où C est un réel.",
              "Condition F(1) = 2 : F(1) = 1 - 2 + ln(1) + C = -1 + C, car ln(1) = 0. On résout -1 + C = 2, d'où C = 3.",
              "Vérification : F'(x) = 3x² - 4x + 1/x = f(x).",
              "Conclusion : F(x) = x³ - 2x² + ln(x) + 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminer une primitive de chacune des fonctions suivantes sur l'intervalle indiqué : a) f(x) = 5x⁴ - 6x + 7 sur ℝ ; b) g(x) = 1/x² + eˣ sur ]0 ; +∞[ ; c) h(x) = 4cos(x) - 3sin(x) sur ℝ.",
              hint: "Utilisez le tableau des primitives de référence et la linéarité. Attention au signe pour sin : une primitive de sin(x) est -cos(x).",
              solution: [
                "a) 5x⁴ a pour primitive x⁵, -6x a pour primitive -3x², 7 a pour primitive 7x. Donc F(x) = x⁵ - 3x² + 7x.",
                "b) 1/x² a pour primitive -1/x et eˣ a pour primitive eˣ. Donc G(x) = -1/x + eˣ.",
                "c) 4cos(x) a pour primitive 4sin(x) ; -3sin(x) a pour primitive -3 × (-cos(x)) = 3cos(x). Donc H(x) = 4sin(x) + 3cos(x).",
                "Vérification de c) : H'(x) = 4cos(x) - 3sin(x) = h(x).",
              ],
            },
            {
              level: 2,
              statement: "Déterminer une primitive de chacune des fonctions suivantes : a) f(x) = (2x + 1)(x² + x)³ sur ℝ ; b) g(x) = e^(3x - 1) sur ℝ ; c) h(x) = 6x/(x² + 4) sur ℝ ; d) k(x) = 1/(2x + 5)² sur ]-5/2 ; +∞[.",
              hint: "Pour chaque fonction, repérez la fonction u, calculez u', puis reconnaissez l'une des formes u'uⁿ, u'eᵘ, u'/u ou u'/u², en ajustant le coefficient.",
              solution: [
                "a) Avec u(x) = x² + x, u'(x) = 2x + 1 : f = u'u³, de primitive u⁴/4. Donc F(x) = (x² + x)⁴/4.",
                "b) Avec u(x) = 3x - 1, u'(x) = 3 : g = ⅓ × u'eᵘ. Donc G(x) = ⅓ e^(3x - 1).",
                "c) Avec u(x) = x² + 4, u'(x) = 2x : h = 3 × u'/u, et u > 0 sur ℝ. Donc H(x) = 3 ln(x² + 4).",
                "d) Avec u(x) = 2x + 5, u'(x) = 2, et u > 0 sur ]-5/2 ; +∞[ : k = ½ × u'/u², de primitive ½ × (-1/u). Donc K(x) = -1/(2(2x + 5)).",
                "Vérification de d) : K'(x) = -½ × (-2/(2x + 5)²) = 1/(2x + 5)² = k(x).",
              ],
            },
            {
              level: 3,
              statement: "On considère la fonction f définie sur ℝ par f(x) = (x + 1)eˣ. 1. Montrer que la fonction F définie sur ℝ par F(x) = x eˣ est une primitive de f sur ℝ. 2. Déterminer la primitive G de f sur ℝ telle que G(0) = 3. 3. En déduire une primitive sur ℝ de la fonction g définie par g(x) = (2x + 3)eˣ.",
              hint: "Pour la question 3, écrivez (2x + 3)eˣ comme une combinaison de (x + 1)eˣ et de eˣ, puis utilisez la linéarité.",
              solution: [
                "1. F est dérivable sur ℝ comme produit de fonctions dérivables. Avec la formule (uv)' = u'v + uv' : F'(x) = 1 × eˣ + x eˣ = (x + 1)eˣ = f(x). Donc F est une primitive de f sur ℝ.",
                "2. Les primitives de f sont les fonctions x ↦ x eˣ + C. G(0) = 0 × e⁰ + C = C, donc C = 3 et G(x) = x eˣ + 3.",
                "3. On remarque que (2x + 3)eˣ = 2(x + 1)eˣ + eˣ = 2f(x) + eˣ.",
                "Par linéarité, une primitive de g est 2F(x) + eˣ = 2x eˣ + eˣ = (2x + 1)eˣ.",
                "Vérification : la dérivée de (2x + 1)eˣ est 2eˣ + (2x + 1)eˣ = (2x + 3)eˣ = g(x).",
                "Conclusion : x ↦ (2x + 1)eˣ est une primitive de g sur ℝ.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque fonction à l'une de ses primitives.",
            pairs: [
              { left: "3x²", right: "x³" },
              { left: "1/x sur ]0 ; +∞[", right: "ln(x)" },
              { left: "cos(x)", right: "sin(x)" },
              { left: "2x e^(x²)", right: "e^(x²)" },
              { left: "1/√x sur ]0 ; +∞[", right: "2√x" },
              { left: "e^(2x)", right: "½ e^(2x)" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces fonctions est une primitive de x ↦ x² sur ℝ ?",
              options: ["x ↦ 2x", "x ↦ x³/3", "x ↦ x³", "x ↦ 3x³"],
              answer: 1,
              why: "La dérivée de x³/3 est 3x²/3 = x². La fonction x ↦ 2x est la dérivée de x², pas une primitive.",
            },
            {
              q: "Laquelle de ces fonctions est une primitive de x ↦ sin(x) sur ℝ ?",
              options: ["x ↦ cos(x)", "x ↦ -sin(x)", "x ↦ sin²(x)/2", "x ↦ -cos(x)"],
              answer: 3,
              why: "La dérivée de -cos(x) est -(-sin(x)) = sin(x). C'est l'erreur de signe la plus fréquente.",
            },
            {
              q: "Une primitive de x ↦ 2x/(x² + 1) sur ℝ est :",
              options: ["x ↦ ln(x² + 1)", "x ↦ 1/(x² + 1)", "x ↦ 2ln(x)", "x ↦ (x² + 1)²"],
              answer: 0,
              why: "La fonction est de la forme u'/u avec u(x) = x² + 1 > 0, donc une primitive est ln(u).",
            },
            {
              q: "F est une primitive de f sur un intervalle I. Les primitives de f sur I sont les fonctions :",
              options: ["x ↦ C × F(x), C réel", "x ↦ F(x) + 2x", "x ↦ F(x) + C, C réel", "x ↦ F(x) + Cx, C réel"],
              answer: 2,
              why: "Deux primitives d'une même fonction sur un intervalle diffèrent d'une constante.",
            },
            {
              q: "Une primitive de x ↦ e^(2x) sur ℝ est :",
              options: ["x ↦ 2e^(2x)", "x ↦ ½ e^(2x)", "x ↦ e^(2x + 1)", "x ↦ e^(x²)"],
              answer: 1,
              why: "La dérivée de ½ e^(2x) est ½ × 2e^(2x) = e^(2x). Avec 2e^(2x), on obtiendrait 4e^(2x) en dérivant.",
            },
          ],
          trap: "Oublier d'ajuster le coefficient dans les formes composées : une primitive de e^(3x) n'est pas e^(3x) mais ⅓ e^(3x). Il faut faire apparaître exactement u' devant la composée, en multipliant et divisant par une constante.",
          method: "Après chaque calcul de primitive, dérivez votre résultat de tête : si vous retrouvez exactement la fonction de départ, coefficient compris, la réponse est juste. Ce contrôle prend quelques secondes et évite la plupart des erreurs.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'equation-y-prime-ay',
          title: 'Les équations différentielles y\' = ay',
          minutes: 30,
          objectives: [
            "Vérifier qu'une fonction donnée est solution d'une équation différentielle.",
            "Résoudre une équation différentielle y' = ay, où a est un nombre réel.",
            "Déterminer la solution vérifiant une condition initiale donnée et décrire l'allure des courbes des solutions.",
            "Modéliser une évolution (croissance, décroissance radioactive) par une équation y' = ay.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une équation différentielle ?",
              paragraphs: [
                "Une équation différentielle est une équation dont l'inconnue est une fonction, notée y, et qui relie cette fonction à ses dérivées. Par exemple, l'équation y' = 2y signifie : on cherche les fonctions f dérivables sur ℝ telles que, pour tout réel x, f'(x) = 2f(x). Une telle fonction f est appelée une solution de l'équation sur ℝ.",
                "Pour vérifier qu'une fonction est solution, on la dérive et on remplace. Exemple : f(x) = 5e^(2x) est solution de y' = 2y, car f'(x) = 5 × 2e^(2x) = 10e^(2x) et 2f(x) = 10e^(2x). On remarque qu'une équation différentielle a en général une infinité de solutions : g(x) = -3e^(2x) convient aussi, tout comme la fonction nulle.",
                "Attention à la forme de l'équation : y' + 2y = 0 s'écrit y' = -2y (ici a = -2), et 3y' - y = 0 s'écrit y' = ⅓ y (ici a = ⅓). On se ramène toujours à la forme y' = ay avant de résoudre.",
              ],
            },
            {
              heading: "Résolution de l'équation y' = ay",
              paragraphs: [
                "Soit a un réel. Les fonctions x ↦ Ce^(ax), où C est un réel, sont solutions : leur dérivée est x ↦ aCe^(ax), c'est-à-dire a fois la fonction. Montrons qu'il n'y en a pas d'autres. Soit f une solution sur ℝ. On pose g(x) = f(x)e^(-ax). La fonction g est dérivable et g'(x) = f'(x)e^(-ax) - a f(x)e^(-ax) = (f'(x) - a f(x))e^(-ax) = 0, puisque f'(x) = a f(x).",
                "La fonction g a une dérivée nulle sur l'intervalle ℝ : elle est constante. Il existe donc un réel C tel que, pour tout x, f(x)e^(-ax) = C, c'est-à-dire f(x) = Ce^(ax). Cette démonstration fait partie de celles que le programme demande de savoir refaire. Cas particulier important : la fonction exponentielle est la solution de y' = y qui vaut 1 en 0.",
              ],
              box: { label: "Théorème", text: "Soit a un réel. Les solutions sur ℝ de l'équation différentielle y' = ay sont les fonctions x ↦ Ce^(ax), où C est une constante réelle." },
            },
            {
              heading: "Condition initiale : une unique solution",
              paragraphs: [
                "Si l'on impose une condition initiale f(x₀) = y₀, il existe une et une seule solution de y' = ay qui la vérifie : on résout Ce^(ax₀) = y₀, ce qui donne C = y₀e^(-ax₀). Exemple : la solution de y' = -0,5y telle que f(0) = 4 vérifie Ce⁰ = 4, donc C = 4 et f(x) = 4e^(-0,5x).",
                "Exemple avec x₀ ≠ 0 : la solution de y' = 3y telle que f(1) = 2 vérifie Ce³ = 2, donc C = 2e⁻³ et f(x) = 2e⁻³ × e^(3x) = 2e^(3x - 3). On vérifie : f(1) = 2e⁰ = 2.",
              ],
              box: { label: "Propriété", text: "Pour tous réels x₀ et y₀, l'équation y' = ay admet une unique solution f telle que f(x₀) = y₀ : f(x) = y₀e^(a(x - x₀))." },
            },
            {
              heading: "Allure des courbes et modélisation",
              paragraphs: [
                "Pour C > 0 : si a > 0, la solution x ↦ Ce^(ax) est strictement croissante et tend vers +∞ en +∞ ; si a < 0, elle est strictement décroissante et tend vers 0 en +∞ (l'axe des abscisses est asymptote). Pour C < 0, les courbes sont symétriques des précédentes par rapport à l'axe des abscisses. Pour C = 0, on obtient la fonction nulle. Une solution non nulle ne s'annule jamais, car e^(ax) > 0.",
                "L'équation y' = ay modélise toute grandeur dont la vitesse de variation est proportionnelle à la grandeur elle-même. En physique, le nombre N(t) de noyaux radioactifs d'un échantillon vérifie N' = -λN, où λ > 0 est la constante radioactive : donc N(t) = N₀e^(-λt), avec N₀ = N(0). La demi-vie T, durée au bout de laquelle la moitié des noyaux s'est désintégrée, vérifie e^(-λT) = ½, soit T = ln(2)/λ.",
              ],
            },
          ],
          keyPoints: [
            "Une équation différentielle a pour inconnue une fonction ; on vérifie une solution en dérivant et en remplaçant.",
            "Les solutions de y' = ay sont les fonctions x ↦ Ce^(ax), C réel.",
            "Démonstration : on pose g(x) = f(x)e^(-ax), on montre que g' = 0, donc g est constante.",
            "Une condition f(x₀) = y₀ détermine une unique solution.",
            "Se ramener à y' = ay : y' + 2y = 0 donne a = -2.",
            "Décroissance radioactive : N(t) = N₀e^(-λt) et demi-vie T = ln(2)/λ.",
          ],
          example: {
            statement: "Résoudre sur ℝ l'équation différentielle 2y' + 3y = 0, puis déterminer la solution f telle que f(0) = 6. Préciser son sens de variation et sa limite en +∞.",
            solution: [
              "On se ramène à la forme y' = ay : 2y' + 3y = 0 équivaut à 2y' = -3y, soit y' = -1,5y. Ici a = -1,5.",
              "D'après le théorème, les solutions sont les fonctions x ↦ Ce^(-1,5x), où C est un réel.",
              "Condition initiale : f(0) = Ce⁰ = C, donc C = 6 et f(x) = 6e^(-1,5x).",
              "Vérification : f'(x) = 6 × (-1,5)e^(-1,5x) = -9e^(-1,5x), et 2f'(x) + 3f(x) = -18e^(-1,5x) + 18e^(-1,5x) = 0.",
              "Variations : f'(x) = -9e^(-1,5x) < 0, donc f est strictement décroissante sur ℝ.",
              "Limite : quand x tend vers +∞, -1,5x tend vers -∞, donc e^(-1,5x) tend vers 0 et f(x) tend vers 0.",
              "Conclusion : f(x) = 6e^(-1,5x), fonction strictement décroissante de limite 0 en +∞.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Résoudre sur ℝ l'équation y' = 4y. b) Résoudre sur ℝ l'équation y' = -y. c) Vérifier que la fonction f définie sur ℝ par f(x) = -3e^(0,2x) est solution de l'équation y' = 0,2y.",
              hint: "Appliquez directement le théorème : les solutions de y' = ay sont les fonctions x ↦ Ce^(ax). Pour c), calculez f'(x) et comparez avec 0,2f(x).",
              solution: [
                "a) Ici a = 4 : les solutions sont les fonctions x ↦ Ce^(4x), C réel.",
                "b) Ici a = -1 : les solutions sont les fonctions x ↦ Ce^(-x), C réel.",
                "c) f'(x) = -3 × 0,2e^(0,2x) = -0,6e^(0,2x), et 0,2f(x) = 0,2 × (-3e^(0,2x)) = -0,6e^(0,2x).",
                "Pour tout réel x, f'(x) = 0,2f(x) : f est bien solution de y' = 0,2y (c'est le cas C = -3).",
              ],
            },
            {
              level: 2,
              statement: "On considère l'équation différentielle (E) : 3y' - y = 0. a) Résoudre (E) sur ℝ. b) Déterminer la solution f de (E) telle que f(3) = e. c) Étudier le sens de variation de f et sa limite en +∞.",
              hint: "Écrivez d'abord (E) sous la forme y' = ay. Pour b), la condition porte sur x₀ = 3 et non sur 0 : remplacez x par 3 dans Ce^(ax).",
              solution: [
                "a) 3y' - y = 0 équivaut à y' = ⅓ y. Les solutions sont les fonctions x ↦ Ce^(x/3), C réel.",
                "b) f(3) = Ce^(3/3) = Ce. La condition f(3) = e donne Ce = e, donc C = 1.",
                "Ainsi f(x) = e^(x/3).",
                "c) f'(x) = ⅓ e^(x/3) > 0, donc f est strictement croissante sur ℝ.",
                "Quand x tend vers +∞, x/3 tend vers +∞, donc f(x) tend vers +∞.",
              ],
            },
            {
              level: 3,
              statement: "Un échantillon contient un isotope radioactif. On note N(t) le nombre de noyaux non désintégrés à l'instant t, exprimé en jours. On admet que N est solution de l'équation différentielle y' = -0,02y et qu'à l'instant t = 0, l'échantillon contient 10⁶ noyaux. 1. Exprimer N(t) en fonction de t. 2. Calculer la demi-vie T de cet isotope, arrondie au dixième de jour. 3. Au bout de combien de jours entiers reste-t-il moins de 1 % des noyaux initiaux ?",
              hint: "Pour la demi-vie, résolvez N(T) = N(0)/2 avec le logarithme népérien. Pour la question 3, résolvez l'inéquation e^(-0,02t) < 0,01 en appliquant ln, fonction strictement croissante.",
              solution: [
                "1. Les solutions de y' = -0,02y sont les fonctions t ↦ Ce^(-0,02t). N(0) = C = 10⁶, donc N(t) = 10⁶e^(-0,02t).",
                "2. N(T) = N(0)/2 équivaut à e^(-0,02T) = ½, soit -0,02T = ln(½) = -ln(2), donc T = ln(2)/0,02.",
                "T = ln(2)/0,02 ≈ 0,6931/0,02 ≈ 34,7 jours.",
                "3. On cherche t tel que N(t) < 0,01 × 10⁶, c'est-à-dire e^(-0,02t) < 0,01.",
                "La fonction ln est strictement croissante sur ]0 ; +∞[ : l'inéquation équivaut à -0,02t < ln(0,01), soit t > -ln(0,01)/0,02 = ln(100)/0,02.",
                "ln(100)/0,02 ≈ 4,6052/0,02 ≈ 230,26.",
                "Conclusion : il reste moins de 1 % des noyaux initiaux à partir de 231 jours.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation.",
            statements: [
              { text: "La fonction x ↦ 7e^(3x) est solution de y' = 3y.", true: true, why: "Sa dérivée est 21e^(3x) = 3 × 7e^(3x)." },
              { text: "Les solutions de y' + 2y = 0 sont les fonctions x ↦ Ce^(2x).", true: false, why: "y' + 2y = 0 s'écrit y' = -2y : les solutions sont x ↦ Ce^(-2x)." },
              { text: "L'équation y' = ay admet une unique solution.", true: false, why: "Elle en admet une infinité, une pour chaque valeur de C. C'est avec une condition initiale que la solution devient unique." },
              { text: "La fonction nulle est solution de toute équation y' = ay.", true: true, why: "C'est le cas C = 0 : sa dérivée 0 est égale à a × 0." },
              { text: "Si a < 0 et C > 0, la fonction x ↦ Ce^(ax) tend vers 0 en +∞.", true: true, why: "ax tend vers -∞, donc e^(ax) tend vers 0." },
              { text: "Une solution de y' = ay peut s'annuler en un point sans être la fonction nulle.", true: false, why: "Ce^(ax) = 0 impose C = 0 car e^(ax) > 0 : une solution non nulle ne s'annule jamais." },
              { text: "La solution de y' = y qui vaut 1 en 0 est la fonction exponentielle.", true: true, why: "C'est même ainsi que la fonction exponentielle a été définie en première." },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les solutions sur ℝ de l'équation y' = 5y ?",
              options: ["x ↦ 5Ceˣ, C réel", "x ↦ Ce^(5x), C réel", "x ↦ e^(5x) + C, C réel", "x ↦ Cx⁵, C réel"],
              answer: 1,
              why: "D'après le théorème, les solutions de y' = ay sont les fonctions x ↦ Ce^(ax) ; ici a = 5.",
            },
            {
              q: "Quelle est la solution de y' = -2y telle que f(0) = 3 ?",
              options: ["x ↦ 3e^(-2x)", "x ↦ -2e^(3x)", "x ↦ 3e^(2x)", "x ↦ e^(-2x) + 2"],
              answer: 0,
              why: "Les solutions sont x ↦ Ce^(-2x) et f(0) = C = 3.",
            },
            {
              q: "Dans la démonstration du théorème, on pose g(x) = f(x)e^(-ax) avec f solution de y' = ay. Que vaut g'(x) ?",
              options: ["a f(x)", "0", "f'(x)e^(ax)", "-a e^(-ax)"],
              answer: 1,
              why: "g'(x) = (f'(x) - a f(x))e^(-ax) = 0 car f'(x) = a f(x) : g est donc constante.",
            },
            {
              q: "Quelles sont les solutions sur ℝ de l'équation y' - 4y = 0 ?",
              options: ["x ↦ Ce^(-4x)", "x ↦ Ce^(x/4)", "x ↦ Ce^(4x)", "x ↦ 4Ce^(-x)"],
              answer: 2,
              why: "y' - 4y = 0 s'écrit y' = 4y, donc a = 4.",
            },
            {
              q: "Le nombre de noyaux d'un échantillon radioactif vérifie N(t) = N₀e^(-λt). Sa demi-vie vaut :",
              options: ["λ/ln(2)", "2/λ", "λ ln(2)", "ln(2)/λ"],
              answer: 3,
              why: "e^(-λT) = ½ donne -λT = -ln(2), donc T = ln(2)/λ.",
            },
          ],
          trap: "Se tromper de signe sur a quand l'équation n'est pas écrite sous la forme y' = ay : y' + 2y = 0 donne y' = -2y, donc les solutions sont x ↦ Ce^(-2x) et non Ce^(2x).",
          method: "Avant de résoudre, réécrivez systématiquement l'équation sous la forme y' = ay et entourez la valeur de a. Une fois la solution trouvée, vérifiez-la en dérivant puis contrôlez la condition initiale en remplaçant x par x₀.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'equation-y-prime-ay-b',
          title: 'Les équations y\' = ay + b et y\' = ay + f',
          minutes: 35,
          objectives: [
            "Déterminer une solution particulière constante d'une équation différentielle y' = ay + b, avec a ≠ 0.",
            "Utiliser cette solution particulière pour déterminer toutes les solutions de y' = ay + b.",
            "Déterminer toutes les solutions d'une équation y' = ay + f à l'aide de l'indication d'une solution particulière.",
            "Résoudre un problème de modélisation, comme le refroidissement d'un corps.",
          ],
          course: [
            {
              heading: "Une solution particulière constante",
              paragraphs: [
                "Soit a et b deux réels, avec a ≠ 0. On cherche d'abord une fonction constante k solution de y' = ay + b. Sa dérivée est nulle, donc elle doit vérifier 0 = ak + b, c'est-à-dire k = -b/a. Exemple : pour y' = 2y - 6, la solution constante vérifie 0 = 2k - 6, donc k = 3.",
                "Cette solution constante a souvent un sens concret : c'est un état d'équilibre. Pour une tasse de café qui refroidit dans une pièce, l'équilibre est atteint lorsque le café est à la température de la pièce : sa température ne varie plus.",
              ],
              box: { label: "Propriété", text: "Si a ≠ 0, la fonction constante x ↦ -b/a est l'unique solution constante de l'équation différentielle y' = ay + b." },
            },
            {
              heading: "Toutes les solutions de y' = ay + b",
              paragraphs: [
                "Notons k = -b/a, de sorte que b = -ak. Pour une fonction f dérivable sur ℝ : f est solution de y' = ay + b si et seulement si f' = af - ak, c'est-à-dire (f - k)' = a(f - k), puisque k est constant. Autrement dit, f est solution si et seulement si f - k est solution de l'équation y' = ay, dite équation homogène associée.",
                "D'après la leçon précédente, f - k s'écrit x ↦ Ce^(ax). Donc les solutions de y' = ay + b sont les fonctions x ↦ Ce^(ax) - b/a. On retient la structure : solution générale = solutions de l'équation homogène y' = ay + une solution particulière. Comme pour y' = ay, une condition initiale f(x₀) = y₀ détermine une unique solution.",
              ],
              box: { label: "Théorème", text: "Soit a et b deux réels avec a ≠ 0. Les solutions sur ℝ de y' = ay + b sont les fonctions x ↦ Ce^(ax) - b/a, où C est un réel." },
            },
            {
              heading: "Le cas y' = ay + f",
              paragraphs: [
                "Soit f une fonction définie sur un intervalle I. Le même raisonnement s'applique à l'équation y' = ay + f. Si g est une solution particulière, alors une fonction h est solution si et seulement si h - g est solution de y' = ay. Les solutions sont donc les fonctions x ↦ Ce^(ax) + g(x). Au bac, la solution particulière g est donnée, ou bien on indique sa forme (affine, polynôme, produit par une exponentielle) et l'on cherche ses coefficients.",
                "Exemple : (E) : y' = y - x. On cherche une solution affine g(x) = mx + p. Alors g'(x) = m et l'on veut m = mx + p - x pour tout x, soit (m - 1)x + p - m = 0 pour tout x. On identifie les coefficients : m - 1 = 0 et p - m = 0, donc m = 1 et p = 1. Ainsi g(x) = x + 1 et les solutions de (E) sont les fonctions x ↦ Ceˣ + x + 1.",
              ],
              box: { label: "À retenir", text: "Si g est une solution particulière de y' = ay + f, toutes les solutions s'écrivent x ↦ Ce^(ax) + g(x), C réel. On ajoute à la solution particulière les solutions de l'équation homogène y' = ay." },
            },
            {
              heading: "Modélisation : le refroidissement d'un corps",
              paragraphs: [
                "La loi de refroidissement de Newton affirme que la vitesse de variation de la température θ d'un corps est proportionnelle à l'écart entre cette température et celle du milieu ambiant θₐ : θ'(t) = -k(θ(t) - θₐ), avec k > 0. C'est une équation de la forme y' = ay + b avec a = -k et b = kθₐ.",
                "Exemple : un café à 80 °C est posé dans une pièce à 20 °C, et l'on prend k = 0,1 (t en minutes). Alors θ' = -0,1θ + 2. La solution constante est 20, donc θ(t) = Ce^(-0,1t) + 20. Avec θ(0) = 80, on obtient C = 60, et θ(t) = 60e^(-0,1t) + 20. Quand t tend vers +∞, e^(-0,1t) tend vers 0, donc θ(t) tend vers 20 : le café se rapproche de la température de la pièce, son équilibre.",
              ],
            },
          ],
          keyPoints: [
            "Solution constante de y' = ay + b (a ≠ 0) : k = -b/a, obtenue en résolvant 0 = ak + b.",
            "Solutions de y' = ay + b : x ↦ Ce^(ax) - b/a, C réel.",
            "Solutions de y' = ay + f : x ↦ Ce^(ax) + g(x), où g est une solution particulière.",
            "Structure : solutions de l'équation homogène y' = ay + une solution particulière.",
            "La constante C se calcule en dernier, avec la condition initiale, sur l'expression complète.",
          ],
          example: {
            statement: "Résoudre sur ℝ l'équation différentielle y' = -2y + 6, puis déterminer la solution f telle que f(0) = 1. Quelle est la limite de f en +∞ ?",
            solution: [
              "Ici a = -2 et b = 6. La solution constante k vérifie 0 = -2k + 6, donc k = 3.",
              "Les solutions de l'équation homogène y' = -2y sont les fonctions x ↦ Ce^(-2x).",
              "Les solutions de y' = -2y + 6 sont donc les fonctions x ↦ Ce^(-2x) + 3, où C est un réel.",
              "Condition initiale : f(0) = C + 3 = 1, donc C = -2 et f(x) = 3 - 2e^(-2x).",
              "Vérification : f'(x) = 4e^(-2x) et -2f(x) + 6 = -6 + 4e^(-2x) + 6 = 4e^(-2x).",
              "Limite : e^(-2x) tend vers 0 en +∞, donc f(x) tend vers 3, la solution constante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résoudre sur ℝ les équations différentielles suivantes : a) y' = 3y - 6 ; b) y' = -0,5y + 4 ; c) 2y' + y = 10.",
              hint: "Mettez chaque équation sous la forme y' = ay + b, cherchez la solution constante en résolvant 0 = ak + b, puis ajoutez Ce^(ax).",
              solution: [
                "a) a = 3, b = -6. Solution constante : 0 = 3k - 6, donc k = 2. Solutions : x ↦ Ce^(3x) + 2, C réel.",
                "b) a = -0,5, b = 4. Solution constante : 0 = -0,5k + 4, donc k = 8. Solutions : x ↦ Ce^(-0,5x) + 8, C réel.",
                "c) 2y' + y = 10 équivaut à y' = -0,5y + 5. Solution constante : 0 = -0,5k + 5, donc k = 10.",
                "Solutions de c) : x ↦ Ce^(-0,5x) + 10, C réel.",
              ],
            },
            {
              level: 2,
              statement: "On considère l'équation différentielle (E) : y' = 2y + e^(3x). a) Vérifier que la fonction g définie sur ℝ par g(x) = e^(3x) est une solution particulière de (E). b) En déduire toutes les solutions de (E). c) Déterminer la solution f de (E) telle que f(0) = 0.",
              hint: "Pour a), calculez g'(x) et 2g(x) + e^(3x). Pour b), ajoutez à g les solutions de l'équation homogène y' = 2y.",
              solution: [
                "a) g'(x) = 3e^(3x) et 2g(x) + e^(3x) = 2e^(3x) + e^(3x) = 3e^(3x). Donc g'(x) = 2g(x) + e^(3x) : g est solution de (E).",
                "b) Les solutions de y' = 2y sont les fonctions x ↦ Ce^(2x). Les solutions de (E) sont donc les fonctions x ↦ Ce^(2x) + e^(3x), C réel.",
                "c) f(0) = C + 1 = 0, donc C = -1.",
                "Conclusion : f(x) = e^(3x) - e^(2x).",
              ],
            },
            {
              level: 3,
              statement: "On considère l'équation différentielle (E) : y' = -y + 2x + 1. 1. Déterminer deux réels m et p tels que la fonction u définie sur ℝ par u(x) = mx + p soit solution de (E). 2. Résoudre l'équation (E). 3. Déterminer la solution f de (E) telle que f(0) = 0. 4. Calculer la limite de f(x) - (2x - 1) quand x tend vers +∞ et interpréter graphiquement ce résultat.",
              hint: "Remplacez u(x) = mx + p dans (E), puis identifiez le coefficient de x et le terme constant des deux membres.",
              solution: [
                "1. u'(x) = m. u est solution si, pour tout x, m = -(mx + p) + 2x + 1, soit (2 - m)x + (1 - p - m) = 0 pour tout x.",
                "Par identification : 2 - m = 0 et 1 - p - m = 0, donc m = 2 et p = -1. Ainsi u(x) = 2x - 1. Vérification : u'(x) = 2 et -u(x) + 2x + 1 = -2x + 1 + 2x + 1 = 2.",
                "2. Les solutions de l'équation homogène y' = -y sont les fonctions x ↦ Ce^(-x). Les solutions de (E) sont donc les fonctions x ↦ Ce^(-x) + 2x - 1, C réel.",
                "3. f(0) = C - 1 = 0, donc C = 1 et f(x) = e^(-x) + 2x - 1.",
                "4. f(x) - (2x - 1) = e^(-x), qui tend vers 0 quand x tend vers +∞.",
                "Interprétation : l'écart vertical entre la courbe de f et la droite d'équation y = 2x - 1 tend vers 0 : la courbe se rapproche de cette droite en +∞ (et reste au-dessus, car e^(-x) > 0).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de résolution de y' = ay + b avec une condition initiale.",
            items: [
              "Écrire l'équation sous la forme y' = ay + b et identifier a et b.",
              "Chercher la solution constante k en résolvant 0 = ak + b.",
              "Écrire les solutions de l'équation homogène y' = ay : x ↦ Ce^(ax).",
              "En déduire toutes les solutions : x ↦ Ce^(ax) + k.",
              "Utiliser la condition initiale pour calculer la constante C.",
              "Conclure et vérifier la solution en la dérivant.",
            ],
          },
          quiz: [
            {
              q: "Quelle est la solution constante de l'équation y' = 4y - 8 ?",
              options: ["-2", "8", "2", "32"],
              answer: 2,
              why: "Elle vérifie 0 = 4k - 8, donc k = 2.",
            },
            {
              q: "Quelles sont les solutions sur ℝ de l'équation y' = -y + 3 ?",
              options: ["x ↦ Ce^(-x) + 3", "x ↦ Ce^(-x) - 3", "x ↦ Ceˣ + 3", "x ↦ 3Ce^(-x)"],
              answer: 0,
              why: "La solution constante vérifie 0 = -k + 3, donc k = 3, et l'on ajoute les solutions Ce^(-x) de y' = -y.",
            },
            {
              q: "g est une solution particulière de y' = ay + f. Les solutions de cette équation sont les fonctions :",
              options: ["x ↦ C × g(x)", "x ↦ g(x) + Ce^(ax)", "x ↦ g(x) + C", "x ↦ Ce^(ax) - g(x)"],
              answer: 1,
              why: "h est solution si et seulement si h - g est solution de y' = ay, donc h - g = Ce^(ax).",
            },
            {
              q: "La température d'un café est θ(t) = 60e^(-0,1t) + 20. Vers quelle valeur tend-elle quand t tend vers +∞ ?",
              options: ["0", "60", "80", "20"],
              answer: 3,
              why: "e^(-0,1t) tend vers 0, donc θ(t) tend vers 20, la température de la pièce.",
            },
            {
              q: "Laquelle de ces équations admet la fonction constante 5 pour solution ?",
              options: ["y' = 2y + 10", "y' = -2y + 10", "y' = 5y", "y' = 10y - 2"],
              answer: 1,
              why: "Pour y' = -2y + 10, on a 0 = -2 × 5 + 10. Pour y' = 2y + 10, la solution constante est -5.",
            },
          ],
          trap: "Calculer la constante C avec la condition initiale sur Ce^(ax) seul, en oubliant la solution particulière : pour y' = -2y + 6 et f(0) = 1, on écrit C + 3 = 1, et non C = 1.",
          method: "Rédigez toujours en trois temps visibles : solution particulière, solutions de l'équation homogène, somme des deux. Calculez C en dernier sur l'expression complète, puis vérifiez la solution trouvée en la remplaçant dans l'équation.",
        },
      ],
    },
    /* ==================================================================== */
    /* CALCUL INTÉGRAL                                                        */
    /* ==================================================================== */
    {
      id: 'calcul-integral',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'integrale-et-aire',
          title: 'Intégrale d\'une fonction et aire sous la courbe',
          minutes: 35,
          objectives: [
            "Interpréter l'intégrale d'une fonction continue et positive comme une aire sous la courbe, exprimée en unités d'aire.",
            "Encadrer une intégrale par la méthode des rectangles.",
            "Connaître le lien entre intégrale et primitive : la fonction x ↦ ∫ₐˣ f(t) dt est la primitive de f qui s'annule en a.",
            "Calculer une intégrale à l'aide d'une primitive : ∫ₐᵇ f(x) dx = F(b) - F(a).",
          ],
          course: [
            {
              heading: "Aire sous la courbe d'une fonction positive",
              paragraphs: [
                "On se place dans un repère orthogonal (O ; I, J). L'unité d'aire, notée u.a., est l'aire du rectangle construit sur les points O, I et J : si une unité mesure 2 cm sur l'axe des abscisses et 1 cm sur l'axe des ordonnées, alors 1 u.a. = 2 cm².",
                "Soit f une fonction continue et positive sur un intervalle [a ; b], et Cf sa courbe. Le domaine sous la courbe est l'ensemble des points M(x ; y) tels que a ≤ x ≤ b et 0 ≤ y ≤ f(x) : il est limité par la courbe, l'axe des abscisses et les droites d'équations x = a et x = b. Son aire, en u.a., est appelée intégrale de f entre a et b et se note ∫ₐᵇ f(x) dx (on lit « intégrale de a à b de f(x) dx »).",
                "La variable x est dite muette : ∫ₐᵇ f(x) dx = ∫ₐᵇ f(t) dt. Exemples par la géométrie : pour f(x) = 3 sur [1 ; 4], le domaine est un rectangle de base 3 et de hauteur 3, donc ∫₁⁴ 3 dx = 9 ; pour f(x) = x sur [0 ; 2], c'est un triangle rectangle, donc ∫₀² x dx = (2 × 2)/2 = 2.",
              ],
              box: { label: "Définition", text: "Si f est continue et positive sur [a ; b], ∫ₐᵇ f(x) dx est l'aire, en unités d'aire, du domaine compris entre la courbe de f, l'axe des abscisses et les droites d'équations x = a et x = b." },
            },
            {
              heading: "Encadrer une aire : la méthode des rectangles",
              paragraphs: [
                "Quand le domaine n'est pas une figure usuelle, on peut l'approcher par des rectangles. On découpe [a ; b] en n intervalles de même largeur h = (b - a)/n. Si f est croissante, les rectangles dont la hauteur est la valeur de f à gauche de chaque intervalle sont sous la courbe, et ceux dont la hauteur est la valeur à droite la dépassent : la somme de leurs aires encadre l'intégrale. L'écart entre les deux sommes vaut h × (f(b) - f(a)), qui tend vers 0 quand n augmente.",
                "Exemple : f(x) = x² sur [0 ; 1] avec n = 4, donc h = 0,25. Somme inférieure : 0,25 × (0 + 0,0625 + 0,25 + 0,5625) = 0,21875. Somme supérieure : 0,25 × (0,0625 + 0,25 + 0,5625 + 1) = 0,46875. Donc 0,21875 ≤ ∫₀¹ x² dx ≤ 0,46875. On verra que la valeur exacte est ⅓ ≈ 0,333. Un programme Python avec une boucle for calcule ces sommes pour n = 100 ou n = 1000 et resserre l'encadrement.",
              ],
            },
            {
              heading: "Le lien entre intégrale et primitive",
              paragraphs: [
                "Soit f continue et positive sur [a ; b]. Pour x dans [a ; b], on note F(x) = ∫ₐˣ f(t) dt, l'aire sous la courbe entre a et x. Théorème : F est dérivable sur [a ; b], F' = f et F(a) = 0. Autrement dit, F est la primitive de f qui s'annule en a.",
                "Idée de la démonstration, pour f croissante et h > 0 : F(x + h) - F(x) est l'aire d'une bande de largeur h, comprise entre le rectangle de hauteur f(x) et celui de hauteur f(x + h). Donc h × f(x) ≤ F(x + h) - F(x) ≤ h × f(x + h). En divisant par h, puis en faisant tendre h vers 0 (f est continue), le taux d'accroissement tend vers f(x). Ce théorème montre aussi que toute fonction continue sur un intervalle admet des primitives, résultat admis dans la leçon sur les primitives.",
              ],
              box: { label: "Théorème", text: "Si f est continue et positive sur [a ; b], la fonction F définie sur [a ; b] par F(x) = ∫ₐˣ f(t) dt est dérivable sur [a ; b] et F' = f : c'est la primitive de f qui s'annule en a." },
            },
            {
              heading: "Calculer une intégrale, quel que soit le signe de f",
              paragraphs: [
                "Si G est une primitive quelconque de f, alors G = F + C et G(b) - G(a) = F(b) - F(a) = ∫ₐᵇ f(x) dx. On calcule donc une intégrale grâce à une primitive, notée entre crochets : ∫ₐᵇ f(x) dx = [G(x)]ₐᵇ = G(b) - G(a). Exemple : ∫₀² x² dx = [x³/3]₀² = 8/3 - 0 = 8/3 u.a.",
                "On étend cette formule comme définition à toute fonction f continue sur un intervalle I, de signe quelconque, et à tous réels a et b de I. Conséquences : l'intégrale de a à a vaut 0, et l'intégrale de b à a est l'opposé de l'intégrale de a à b. Si f est négative sur [a ; b] (avec a ≤ b), son intégrale est l'opposé de l'aire du domaine compris entre la courbe et l'axe des abscisses. Exemple : ∫₀¹ (-x) dx = [-x²/2]₀¹ = -½.",
              ],
              box: { label: "Formule", text: "Si f est continue sur I et F est une primitive de f sur I, pour tous a et b de I : ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a). Le résultat ne dépend pas de la primitive choisie." },
            },
          ],
          keyPoints: [
            "Pour f continue et positive, ∫ₐᵇ f(x) dx est l'aire sous la courbe, en unités d'aire.",
            "Méthode des rectangles : pour f monotone, les sommes à gauche et à droite encadrent l'intégrale.",
            "x ↦ ∫ₐˣ f(t) dt est la primitive de f qui s'annule en a.",
            "∫ₐᵇ f(x) dx = F(b) - F(a) pour toute primitive F de f.",
            "Si f est négative sur [a ; b], l'intégrale est l'opposé de l'aire.",
          ],
          example: {
            statement: "Calculer I = ∫₁³ (2x + 1) dx, puis interpréter le résultat en termes d'aire et le vérifier géométriquement.",
            solution: [
              "Une primitive de f(x) = 2x + 1 est F(x) = x² + x.",
              "I = F(3) - F(1) = (9 + 3) - (1 + 1) = 12 - 2 = 10.",
              "Sur [1 ; 3], f(x) = 2x + 1 > 0 : f est continue et positive, donc I est l'aire du domaine sous la droite, entre x = 1 et x = 3.",
              "Vérification : ce domaine est un trapèze de bases f(1) = 3 et f(3) = 7, et de hauteur 2. Son aire vaut (3 + 7)/2 × 2 = 10.",
              "Conclusion : I = 10, c'est-à-dire une aire de 10 u.a.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer les intégrales suivantes : a) ∫₀¹ (3x² + 2x) dx ; b) ∫₁ᵉ (1/x) dx ; c) ∫₀² eˣ dx (valeur exacte puis arrondie au centième).",
              hint: "Cherchez une primitive F de la fonction, puis calculez F(b) - F(a). Rappel : ln(1) = 0 et ln(e) = 1.",
              solution: [
                "a) Une primitive est x³ + x². ∫₀¹ (3x² + 2x) dx = (1 + 1) - 0 = 2.",
                "b) Une primitive de 1/x sur ]0 ; +∞[ est ln(x). ∫₁ᵉ (1/x) dx = ln(e) - ln(1) = 1 - 0 = 1.",
                "c) Une primitive de eˣ est eˣ. ∫₀² eˣ dx = e² - e⁰ = e² - 1.",
                "e² - 1 ≈ 7,389 - 1 ≈ 6,39.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction f définie sur [1 ; 2] par f(x) = 1/x. On partage [1 ; 2] en 4 intervalles de même largeur. a) Justifier que f est décroissante sur [1 ; 2]. b) Calculer les sommes des aires des rectangles construits avec la valeur de f à gauche, puis à droite de chaque intervalle (arrondir à 10⁻⁴). c) En déduire un encadrement de ∫₁² (1/x) dx et comparer avec sa valeur exacte.",
              hint: "La largeur est h = 0,25 et les points de découpage sont 1 ; 1,25 ; 1,5 ; 1,75 ; 2. Comme f est décroissante, la somme à gauche est la plus grande.",
              solution: [
                "a) f'(x) = -1/x² < 0 sur [1 ; 2], donc f est décroissante sur [1 ; 2].",
                "b) Valeurs : f(1) = 1 ; f(1,25) = 0,8 ; f(1,5) ≈ 0,6667 ; f(1,75) ≈ 0,5714 ; f(2) = 0,5.",
                "Somme à gauche : 0,25 × (1 + 0,8 + 0,6667 + 0,5714) ≈ 0,25 × 3,0381 ≈ 0,7595.",
                "Somme à droite : 0,25 × (0,8 + 0,6667 + 0,5714 + 0,5) ≈ 0,25 × 2,5381 ≈ 0,6345.",
                "c) f étant décroissante, la somme à droite minore l'intégrale et la somme à gauche la majore : 0,6345 ≤ ∫₁² (1/x) dx ≤ 0,7595.",
                "Valeur exacte : ∫₁² (1/x) dx = ln(2) - ln(1) = ln(2) ≈ 0,6931, qui est bien dans l'encadrement.",
              ],
            },
            {
              level: 3,
              statement: "Soit f la fonction définie sur [0 ; +∞[ par f(x) = e^(-x), et Cf sa courbe dans un repère orthonormé. Pour tout réel t > 0, on note A(t) l'aire, en unités d'aire, du domaine compris entre Cf, l'axe des abscisses et les droites d'équations x = 0 et x = t. 1. Justifier que A(t) = ∫₀ᵗ e^(-x) dx, puis montrer que A(t) = 1 - e^(-t). 2. Déterminer la limite de A(t) quand t tend vers +∞ et interpréter. 3. Déterminer la valeur exacte de t pour laquelle A(t) = 0,5.",
              hint: "Une primitive de e^(-x) est -e^(-x) (forme u'eᵘ avec u(x) = -x, à un signe près). Pour la question 3, isolez e^(-t) puis appliquez ln.",
              solution: [
                "1. f est continue et positive sur [0 ; +∞[ (une exponentielle est strictement positive), donc l'aire du domaine est A(t) = ∫₀ᵗ e^(-x) dx.",
                "Une primitive de x ↦ e^(-x) est x ↦ -e^(-x), car la dérivée de -e^(-x) est e^(-x).",
                "A(t) = [-e^(-x)]₀ᵗ = -e^(-t) - (-e⁰) = 1 - e^(-t).",
                "2. Quand t tend vers +∞, e^(-t) tend vers 0, donc A(t) tend vers 1.",
                "Interprétation : le domaine illimité situé sous la courbe, à droite de l'axe des ordonnées, a une aire finie égale à 1 u.a.",
                "3. A(t) = 0,5 équivaut à 1 - e^(-t) = 0,5, soit e^(-t) = 0,5, donc -t = ln(0,5) = -ln(2).",
                "Conclusion : t = ln(2) ≈ 0,69.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre compréhension de l'intégrale.",
            statements: [
              { text: "Si f est continue et positive sur [a ; b], ∫ₐᵇ f(x) dx est une aire exprimée en unités d'aire.", true: true, why: "C'est la définition de l'intégrale d'une fonction continue positive." },
              { text: "Une intégrale est toujours un nombre positif.", true: false, why: "Si f est négative sur [a ; b], son intégrale est négative : c'est l'opposé d'une aire." },
              { text: "La valeur de ∫ₐᵇ f(x) dx dépend de la primitive F choisie.", true: false, why: "Deux primitives diffèrent d'une constante, qui disparaît dans F(b) - F(a)." },
              { text: "∫₀¹ f(t) dt et ∫₀¹ f(x) dx sont égales.", true: true, why: "La variable d'intégration est muette : on peut la renommer." },
              { text: "Pour f croissante, les rectangles construits avec la valeur de f à gauche donnent une somme qui minore l'intégrale.", true: true, why: "Sur chaque intervalle, f(gauche) est la plus petite valeur de f, donc ces rectangles sont sous la courbe." },
              { text: "∫₀² x² dx = 4.", true: false, why: "∫₀² x² dx = [x³/3]₀² = 8/3. Le nombre 4 est f(2), pas l'intégrale." },
              { text: "La fonction x ↦ ∫ₐˣ f(t) dt s'annule en a et a pour dérivée f, pour f continue.", true: true, why: "C'est la primitive de f qui s'annule en a." },
            ],
          },
          quiz: [
            {
              q: "Que vaut ∫₀³ 2x dx ?",
              options: ["6", "9", "3", "18"],
              answer: 1,
              why: "Une primitive de 2x est x², donc l'intégrale vaut 3² - 0² = 9.",
            },
            {
              q: "f est continue et négative sur [a ; b], avec a < b. L'intégrale ∫ₐᵇ f(x) dx :",
              options: ["est égale à l'aire du domaine", "vaut zéro", "est l'opposé de cette aire", "n'est pas définie"],
              answer: 2,
              why: "Pour une fonction négative, l'intégrale est l'opposé de l'aire comprise entre la courbe et l'axe des abscisses.",
            },
            {
              q: "On pose F(x) = ∫₁ˣ f(t) dt, avec f continue. Que vaut F(1) ?",
              options: ["f(1)", "1", "0", "f'(1)"],
              answer: 2,
              why: "Les deux bornes sont égales : l'intégrale de 1 à 1 est nulle.",
            },
            {
              q: "Que vaut ∫₀¹ eˣ dx ?",
              options: ["e", "e - 1", "1", "e + 1"],
              answer: 1,
              why: "[eˣ]₀¹ = e¹ - e⁰ = e - 1.",
            },
            {
              q: "Dans la méthode des rectangles sur [a ; b] avec n rectangles de même largeur, cette largeur vaut :",
              options: ["(b - a)/n", "n/(b - a)", "b - a", "(b + a)/n"],
              answer: 0,
              why: "On partage la longueur b - a de l'intervalle en n parts égales.",
            },
          ],
          trap: "Confondre intégrale et aire quand la fonction change de signe : une intégrale peut être négative ou nulle alors que l'aire du domaine est strictement positive. Avant d'interpréter une intégrale comme une aire, il faut vérifier le signe de f.",
          method: "Pour calculer une intégrale, écrivez toujours trois lignes : la primitive choisie, le crochet [F(x)]ₐᵇ, puis F(b) - F(a) avec des parenthèses autour de F(a). Les parenthèses évitent l'erreur de signe la plus fréquente.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'proprietes-integrale',
          title: 'Propriétés de l\'intégrale et valeur moyenne',
          minutes: 30,
          objectives: [
            "Utiliser la linéarité de l'intégrale et la relation de Chasles.",
            "Utiliser la positivité de l'intégrale pour comparer ou encadrer des intégrales.",
            "Calculer la valeur moyenne d'une fonction continue sur un intervalle et l'interpréter.",
          ],
          course: [
            {
              heading: "Linéarité de l'intégrale",
              paragraphs: [
                "Soit f et g deux fonctions continues sur un intervalle I, a et b deux réels de I et k un réel. Comme une primitive de f + g est F + G et une primitive de kf est kF, on obtient : ∫ₐᵇ (f(x) + g(x)) dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx et ∫ₐᵇ k f(x) dx = k ∫ₐᵇ f(x) dx.",
                "Exemple : ∫₀¹ (3x² - 4eˣ) dx = 3∫₀¹ x² dx - 4∫₀¹ eˣ dx = 3 × ⅓ - 4(e - 1) = 1 - 4e + 4 = 5 - 4e. La linéarité permet aussi de calculer une intégrale à partir d'autres intégrales connues, sans connaître la fonction elle-même.",
              ],
              box: { label: "Propriété", text: "Linéarité : ∫ₐᵇ (f + g)(x) dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx et ∫ₐᵇ k f(x) dx = k ∫ₐᵇ f(x) dx, pour tout réel k." },
            },
            {
              heading: "Relation de Chasles",
              paragraphs: [
                "Pour tous réels a, m et b de I : ∫ₐᵇ f(x) dx = ∫ₐᵐ f(x) dx + ∫ₘᵇ f(x) dx. En effet, F(b) - F(a) = (F(m) - F(a)) + (F(b) - F(m)). Pour une fonction positive et a ≤ m ≤ b, cela traduit l'additivité des aires : l'aire du domaine entier est la somme des aires des deux morceaux situés de part et d'autre de la droite x = m.",
                "Cette relation sert notamment pour les fonctions définies par morceaux ou avec une valeur absolue. Exemple : ∫₋₁² |x| dx = ∫₋₁⁰ (-x) dx + ∫₀² x dx = [-x²/2]₋₁⁰ + [x²/2]₀² = ½ + 2 = 2,5.",
              ],
              box: { label: "Propriété", text: "Relation de Chasles : pour tous a, m, b de I, ∫ₐᵇ f(x) dx = ∫ₐᵐ f(x) dx + ∫ₘᵇ f(x) dx." },
            },
            {
              heading: "Positivité et comparaison",
              paragraphs: [
                "Positivité : si a ≤ b et si f ≥ 0 sur [a ; b], alors ∫ₐᵇ f(x) dx ≥ 0. Par différence, on obtient la comparaison : si a ≤ b et si f ≤ g sur [a ; b], alors ∫ₐᵇ f(x) dx ≤ ∫ₐᵇ g(x) dx. L'ordre des bornes est essentiel : si a > b, les inégalités changent de sens.",
                "Ces propriétés permettent d'encadrer une intégrale qu'on ne sait pas calculer. Exemple : la fonction x ↦ e^(x²) n'a pas de primitive qui s'exprime avec les fonctions usuelles. Mais pour x dans [0 ; 1], on a 0 ≤ x² ≤ 1, donc 1 ≤ e^(x²) ≤ e (l'exponentielle est croissante). En intégrant entre 0 et 1 : 1 ≤ ∫₀¹ e^(x²) dx ≤ e.",
                "De même, sur [0 ; 1], x² ≤ x, donc ∫₀¹ x² dx ≤ ∫₀¹ x dx, ce que l'on vérifie : ⅓ ≤ ½. Ce type de raisonnement est très fréquent au bac pour étudier des suites définies par des intégrales.",
              ],
            },
            {
              heading: "Valeur moyenne d'une fonction",
              paragraphs: [
                "Soit f une fonction continue sur [a ; b], avec a < b. La valeur moyenne de f sur [a ; b] est le réel μ = (1/(b - a)) × ∫ₐᵇ f(x) dx. Pour une fonction positive, c'est la hauteur du rectangle de base [a ; b] qui a la même aire que le domaine sous la courbe : on « aplanit » la courbe sans changer l'aire.",
                "Analogie : si v(t) est la vitesse d'un véhicule, ∫ₐᵇ v(t) dt est la distance parcourue entre les instants a et b, et la valeur moyenne de v est la vitesse moyenne, distance divisée par durée. Exemple : la valeur moyenne de f(x) = x² sur [0 ; 3] est (1/3) × [x³/3]₀³ = (1/3) × 9 = 3.",
                "Inégalité de la moyenne : si m ≤ f(x) ≤ M pour tout x de [a ; b], alors m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a), et donc m ≤ μ ≤ M.",
              ],
              box: { label: "Définition", text: "Pour f continue sur [a ; b] avec a < b, la valeur moyenne de f sur [a ; b] est μ = (1/(b - a)) × ∫ₐᵇ f(x) dx." },
            },
          ],
          keyPoints: [
            "Linéarité : l'intégrale d'une somme est la somme des intégrales, et les constantes sortent de l'intégrale.",
            "Chasles : ∫ₐᵇ f = ∫ₐᵐ f + ∫ₘᵇ f.",
            "Positivité : si a ≤ b et f ≥ 0 sur [a ; b], alors ∫ₐᵇ f ≥ 0.",
            "Comparaison : si a ≤ b et f ≤ g sur [a ; b], alors ∫ₐᵇ f ≤ ∫ₐᵇ g.",
            "Valeur moyenne : μ = (1/(b - a)) × ∫ₐᵇ f(x) dx.",
          ],
          example: {
            statement: "Calculer la valeur moyenne μ de la fonction f définie par f(x) = 3x² - 2x + 1 sur l'intervalle [1 ; 3].",
            solution: [
              "Une primitive de f est F(x) = x³ - x² + x.",
              "F(3) = 27 - 9 + 3 = 21 et F(1) = 1 - 1 + 1 = 1, donc ∫₁³ f(x) dx = 21 - 1 = 20.",
              "La longueur de l'intervalle est b - a = 3 - 1 = 2.",
              "μ = (1/2) × 20 = 10.",
              "Conclusion : la valeur moyenne de f sur [1 ; 3] est 10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "f et g sont deux fonctions continues sur ℝ telles que ∫₀² f(x) dx = 5, ∫₀² g(x) dx = -3 et ∫₂⁵ f(x) dx = 4. Calculer : a) ∫₀² (2f(x) - 3g(x)) dx ; b) ∫₀⁵ f(x) dx ; c) ∫₀² (f(x) + 1) dx.",
              hint: "Utilisez la linéarité pour a) et c), et la relation de Chasles pour b). Pour c), ∫₀² 1 dx est l'aire d'un rectangle.",
              solution: [
                "a) Par linéarité : 2 × 5 - 3 × (-3) = 10 + 9 = 19.",
                "b) Par la relation de Chasles : ∫₀⁵ f(x) dx = ∫₀² f(x) dx + ∫₂⁵ f(x) dx = 5 + 4 = 9.",
                "c) Par linéarité : ∫₀² f(x) dx + ∫₀² 1 dx = 5 + 2 = 7.",
              ],
            },
            {
              level: 2,
              statement: "Dans une salle, la température (en °C) t heures après l'arrêt du chauffage est donnée par g(t) = 20 + 10e^(-0,5t). Calculer la température moyenne entre t = 0 et t = 4 : valeur exacte, puis arrondie au dixième.",
              hint: "Une primitive de e^(-0,5t) est -2e^(-0,5t). Divisez ensuite l'intégrale par la durée 4 - 0.",
              solution: [
                "Une primitive de g est G(t) = 20t + 10 × (-2e^(-0,5t)) = 20t - 20e^(-0,5t).",
                "G(4) = 80 - 20e⁻² et G(0) = 0 - 20e⁰ = -20.",
                "∫₀⁴ g(t) dt = 80 - 20e⁻² + 20 = 100 - 20e⁻².",
                "μ = (1/4) × (100 - 20e⁻²) = 25 - 5e⁻².",
                "Conclusion : μ = 25 - 5e⁻² ≈ 24,3 °C.",
              ],
            },
            {
              level: 3,
              statement: "Pour tout entier naturel n, on pose Iₙ = ∫₀¹ xⁿ/(1 + x) dx. 1. Calculer I₀. 2. Montrer que, pour tout n, Iₙ + Iₙ₊₁ = 1/(n + 1), et en déduire I₁. 3. Montrer que la suite (Iₙ) est décroissante. 4. Montrer que, pour tout n, 0 ≤ Iₙ ≤ 1/(n + 1), puis déterminer la limite de (Iₙ).",
              hint: "Pour la question 2, utilisez la linéarité et factorisez xⁿ. Pour la question 3, comparez xⁿ⁺¹ et xⁿ sur [0 ; 1]. Pour la question 4, majorez 1/(1 + x) par 1 sur [0 ; 1] et concluez avec le théorème des gendarmes.",
              solution: [
                "1. I₀ = ∫₀¹ 1/(1 + x) dx = [ln(1 + x)]₀¹ = ln(2) - ln(1) = ln(2).",
                "2. Par linéarité, Iₙ + Iₙ₊₁ = ∫₀¹ (xⁿ + xⁿ⁺¹)/(1 + x) dx = ∫₀¹ xⁿ(1 + x)/(1 + x) dx = ∫₀¹ xⁿ dx = [xⁿ⁺¹/(n + 1)]₀¹ = 1/(n + 1).",
                "Avec n = 0 : I₀ + I₁ = 1, donc I₁ = 1 - ln(2).",
                "3. Pour x dans [0 ; 1], xⁿ⁺¹ = x × xⁿ ≤ xⁿ, et 1 + x > 0, donc xⁿ⁺¹/(1 + x) ≤ xⁿ/(1 + x). Comme 0 ≤ 1, en intégrant : Iₙ₊₁ ≤ Iₙ. La suite est décroissante.",
                "4. Pour x dans [0 ; 1], xⁿ/(1 + x) ≥ 0, donc Iₙ ≥ 0 par positivité. De plus 1 + x ≥ 1, donc xⁿ/(1 + x) ≤ xⁿ, et par comparaison Iₙ ≤ ∫₀¹ xⁿ dx = 1/(n + 1).",
                "Comme 1/(n + 1) tend vers 0, le théorème des gendarmes donne : la suite (Iₙ) converge vers 0.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque propriété de l'intégrale à son énoncé.",
            pairs: [
              { left: "Linéarité", right: "∫ₐᵇ (f + kg) = ∫ₐᵇ f + k∫ₐᵇ g" },
              { left: "Relation de Chasles", right: "∫ₐᵇ f = ∫ₐᵐ f + ∫ₘᵇ f" },
              { left: "Positivité", right: "Si a ≤ b et f ≥ 0 sur [a ; b], alors ∫ₐᵇ f ≥ 0" },
              { left: "Comparaison", right: "Si a ≤ b et f ≤ g sur [a ; b], alors ∫ₐᵇ f ≤ ∫ₐᵇ g" },
              { left: "Valeur moyenne", right: "μ = (1/(b - a)) × ∫ₐᵇ f(x) dx" },
              { left: "Inégalité de la moyenne", right: "Si m ≤ f ≤ M sur [a ; b], alors m(b - a) ≤ ∫ₐᵇ f ≤ M(b - a)" },
            ],
          },
          quiz: [
            {
              q: "On sait que ∫₀² f(x) dx = 3 et ∫₂⁵ f(x) dx = 4. Que vaut ∫₀⁵ f(x) dx ?",
              options: ["1", "7", "12", "-1"],
              answer: 1,
              why: "D'après la relation de Chasles, ∫₀⁵ f = ∫₀² f + ∫₂⁵ f = 3 + 4 = 7.",
            },
            {
              q: "Quelle est la valeur moyenne de la fonction x ↦ 2x sur [0 ; 4] ?",
              options: ["8", "16", "2", "4"],
              answer: 3,
              why: "∫₀⁴ 2x dx = 16, et l'on divise par la longueur 4 de l'intervalle : μ = 4.",
            },
            {
              q: "Si f ≤ g sur [0 ; 1], que peut-on affirmer ?",
              options: ["∫₀¹ f ≥ ∫₀¹ g", "∫₀¹ f ≤ ∫₀¹ g", "On ne peut rien dire", "∫₀¹ f = ∫₀¹ g"],
              answer: 1,
              why: "Les bornes sont dans l'ordre croissant (0 ≤ 1), donc l'intégration conserve l'inégalité.",
            },
            {
              q: "On sait que ∫₀¹ f(x) dx = 2. Que vaut ∫₀¹ 5f(x) dx ?",
              options: ["10", "7", "2/5", "25"],
              answer: 0,
              why: "Par linéarité, la constante 5 sort de l'intégrale : 5 × 2 = 10.",
            },
            {
              q: "Quel encadrement de ∫₀¹ e^(x²) dx est correct ?",
              options: ["Entre 0 et 1", "Supérieure à e", "Entre e et e²", "Entre 1 et e"],
              answer: 3,
              why: "Sur [0 ; 1], 1 ≤ e^(x²) ≤ e, et l'on intègre sur un intervalle de longueur 1.",
            },
          ],
          trap: "Oublier de diviser par la longueur de l'intervalle dans le calcul de la valeur moyenne, ou appliquer la comparaison avec des bornes dans le mauvais ordre : les inégalités ne se conservent que si a ≤ b.",
          method: "Pour comparer ou encadrer une intégrale, commencez par écrire l'inégalité entre les fonctions pour tout x de [a ; b], justifiez-la, puis écrivez explicitement « a ≤ b, donc par comparaison des intégrales ». Ce mot-clé montre au correcteur que vous avez vérifié l'ordre des bornes.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'integration-par-parties',
          title: 'Intégration par parties et calculs d\'aires',
          minutes: 35,
          objectives: [
            "Calculer une intégrale à l'aide d'une intégration par parties.",
            "Choisir les fonctions u et v' de manière pertinente.",
            "Calculer l'aire du domaine compris entre deux courbes, en unités d'aire puis en cm².",
          ],
          course: [
            {
              heading: "La formule d'intégration par parties",
              paragraphs: [
                "Soit u et v deux fonctions dérivables sur un intervalle [a ; b], dont les dérivées u' et v' sont continues. On sait que (uv)' = u'v + uv'. Donc uv' = (uv)' - u'v, et toutes ces fonctions sont continues. En intégrant entre a et b, et puisque uv est une primitive de (uv)', on obtient la formule d'intégration par parties.",
                "Cette démonstration est courte et fait partie de celles que le programme demande de connaître. L'intérêt de la formule est de transformer une intégrale difficile, celle de uv', en une intégrale plus simple, celle de u'v.",
              ],
              box: { label: "Formule", text: "Si u et v sont dérivables sur [a ; b], à dérivées continues : ∫ₐᵇ u(x)v'(x) dx = [u(x)v(x)]ₐᵇ - ∫ₐᵇ u'(x)v(x) dx." },
            },
            {
              heading: "Bien choisir u et v'",
              paragraphs: [
                "On choisit u, que l'on dérive, de façon que u' soit plus simple, et v', dont on doit trouver une primitive v. Repères : pour un polynôme multiplié par une exponentielle, on prend u = le polynôme et v' = l'exponentielle ; pour un polynôme multiplié par ln(x), on prend u = ln(x), car sa dérivée 1/x fait disparaître le logarithme.",
                "Exemple 1 : I = ∫₀¹ x eˣ dx. On pose u(x) = x et v'(x) = eˣ, donc u'(x) = 1 et v(x) = eˣ. Alors I = [x eˣ]₀¹ - ∫₀¹ eˣ dx = e - (e - 1) = 1.",
                "Exemple 2 : J = ∫₁ᵉ ln(x) dx. On écrit ln(x) = ln(x) × 1 et l'on pose u(x) = ln(x), v'(x) = 1, donc u'(x) = 1/x et v(x) = x. Alors J = [x ln(x)]₁ᵉ - ∫₁ᵉ 1 dx = (e - 0) - (e - 1) = 1. On en déduit au passage qu'une primitive de ln est x ↦ x ln(x) - x.",
              ],
            },
            {
              heading: "Aire entre deux courbes",
              paragraphs: [
                "Soit f et g deux fonctions continues sur [a ; b] telles que f ≤ g sur [a ; b]. L'aire du domaine compris entre les deux courbes et les droites d'équations x = a et x = b vaut ∫ₐᵇ (g(x) - f(x)) dx, en unités d'aire. Cette formule reste valable même si les courbes passent sous l'axe des abscisses : seul compte l'écart g - f, qui est positif.",
                "Méthode : étudier le signe de g(x) - f(x) pour savoir quelle courbe est au-dessus (en cherchant les points d'intersection), puis intégrer « celle du dessus moins celle du dessous ». Si les courbes se croisent, on découpe l'intervalle avec la relation de Chasles. Exemple : sur [0 ; 1], x - x² = x(1 - x) ≥ 0, donc l'aire entre les courbes de x ↦ x² et x ↦ x vaut ∫₀¹ (x - x²) dx = ½ - ⅓ = 1/6 u.a.",
                "Pour passer en cm², on multiplie par l'aire d'une unité : avec 2 cm en abscisse et 3 cm en ordonnée, 1 u.a. = 6 cm².",
              ],
              box: { label: "Propriété", text: "Si f et g sont continues et f ≤ g sur [a ; b], l'aire du domaine compris entre les deux courbes et les droites x = a et x = b est ∫ₐᵇ (g(x) - f(x)) dx u.a." },
            },
          ],
          keyPoints: [
            "Intégration par parties : ∫ₐᵇ uv' = [uv]ₐᵇ - ∫ₐᵇ u'v.",
            "Démonstration : intégrer la relation (uv)' = u'v + uv'.",
            "Polynôme × exponentielle : u = polynôme. Polynôme × ln : u = ln.",
            "Aire entre deux courbes avec f ≤ g : ∫ₐᵇ (g - f), celle du dessus moins celle du dessous.",
            "1 u.a. = (unité en abscisse) × (unité en ordonnée), en cm².",
          ],
          example: {
            statement: "À l'aide d'une intégration par parties, calculer I = ∫₁ᵉ x ln(x) dx. Donner la valeur exacte puis une valeur approchée au centième.",
            solution: [
              "Choix : on pose u(x) = ln(x) et v'(x) = x, car la dérivée de ln fait disparaître le logarithme. Alors u'(x) = 1/x et v(x) = x²/2. Les fonctions u et v sont dérivables sur [1 ; e], à dérivées continues.",
              "Formule : I = [(x²/2) ln(x)]₁ᵉ - ∫₁ᵉ (1/x) × (x²/2) dx = [(x²/2) ln(x)]₁ᵉ - ∫₁ᵉ (x/2) dx.",
              "Crochet : (e²/2) × ln(e) - (1/2) × ln(1) = e²/2 - 0 = e²/2.",
              "Nouvelle intégrale : ∫₁ᵉ (x/2) dx = [x²/4]₁ᵉ = e²/4 - 1/4.",
              "I = e²/2 - e²/4 + 1/4 = (e² + 1)/4.",
              "Conclusion : I = (e² + 1)/4 ≈ 2,10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À l'aide d'une intégration par parties, calculer I = ∫₀¹ (x + 2)eˣ dx.",
              hint: "Posez u(x) = x + 2 (sa dérivée est 1) et v'(x) = eˣ.",
              solution: [
                "On pose u(x) = x + 2 et v'(x) = eˣ, donc u'(x) = 1 et v(x) = eˣ, fonctions dérivables à dérivées continues sur [0 ; 1].",
                "I = [(x + 2)eˣ]₀¹ - ∫₀¹ eˣ dx.",
                "[(x + 2)eˣ]₀¹ = 3e - 2 et ∫₀¹ eˣ dx = e - 1.",
                "I = 3e - 2 - (e - 1) = 2e - 1 ≈ 4,44.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère orthogonal d'unités graphiques 2 cm sur l'axe des abscisses et 2 cm sur l'axe des ordonnées, on considère les courbes des fonctions f et g définies sur ℝ par f(x) = x² et g(x) = 2x. a) Déterminer les abscisses des points d'intersection des deux courbes. b) Étudier la position relative des courbes sur [0 ; 2]. c) Calculer l'aire du domaine compris entre les deux courbes, en u.a. puis en cm².",
              hint: "Résolvez x² = 2x, puis étudiez le signe de g(x) - f(x) = 2x - x² en factorisant.",
              solution: [
                "a) x² = 2x équivaut à x(x - 2) = 0, donc x = 0 ou x = 2.",
                "b) g(x) - f(x) = 2x - x² = x(2 - x). Sur [0 ; 2], x ≥ 0 et 2 - x ≥ 0, donc g(x) - f(x) ≥ 0 : la courbe de g est au-dessus de celle de f.",
                "c) Aire = ∫₀² (2x - x²) dx = [x² - x³/3]₀² = 4 - 8/3 = 4/3 u.a.",
                "1 u.a. = 2 cm × 2 cm = 4 cm², donc l'aire vaut 4/3 × 4 = 16/3 cm² ≈ 5,33 cm².",
              ],
            },
            {
              level: 3,
              statement: "Soit f la fonction définie sur [0 ; +∞[ par f(x) = x e^(-x), et Cf sa courbe dans un repère orthonormé. 1. Justifier que f est positive sur [0 ; +∞[. 2. À l'aide d'une intégration par parties, montrer que, pour tout réel t ≥ 0, ∫₀ᵗ x e^(-x) dx = 1 - (t + 1)e^(-t). 3. En déduire l'aire A(t) du domaine compris entre Cf, l'axe des abscisses et les droites x = 0 et x = t, puis sa limite quand t tend vers +∞. On admet que t e^(-t) tend vers 0 quand t tend vers +∞. 4. Donner une valeur approchée au centième de A(2).",
              hint: "Posez u(x) = x et v'(x) = e^(-x) ; une primitive de e^(-x) est -e^(-x).",
              solution: [
                "1. Pour x ≥ 0, x ≥ 0 et e^(-x) > 0, donc f(x) ≥ 0.",
                "2. On pose u(x) = x et v'(x) = e^(-x), donc u'(x) = 1 et v(x) = -e^(-x).",
                "∫₀ᵗ x e^(-x) dx = [-x e^(-x)]₀ᵗ - ∫₀ᵗ (-e^(-x)) dx = -t e^(-t) + ∫₀ᵗ e^(-x) dx.",
                "∫₀ᵗ e^(-x) dx = [-e^(-x)]₀ᵗ = 1 - e^(-t). Donc ∫₀ᵗ x e^(-x) dx = -t e^(-t) + 1 - e^(-t) = 1 - (t + 1)e^(-t).",
                "3. f étant continue et positive, A(t) = 1 - (t + 1)e^(-t) = 1 - t e^(-t) - e^(-t) u.a.",
                "Quand t tend vers +∞, t e^(-t) tend vers 0 et e^(-t) tend vers 0, donc A(t) tend vers 1.",
                "4. A(2) = 1 - 3e⁻² ≈ 1 - 0,406 ≈ 0,59 u.a.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une intégration par parties.",
            items: [
              "Repérer un produit de deux fonctions dans l'intégrale.",
              "Choisir u (que la dérivation simplifie) et v' (dont on connaît une primitive).",
              "Calculer u' et une primitive v de v'.",
              "Écrire la formule : [uv]ₐᵇ - ∫ₐᵇ u'v.",
              "Calculer le crochet [u(x)v(x)]ₐᵇ.",
              "Calculer la nouvelle intégrale, plus simple, et conclure.",
            ],
          },
          quiz: [
            {
              q: "Quelle est la formule d'intégration par parties ?",
              options: ["∫ₐᵇ uv' = [uv]ₐᵇ - ∫ₐᵇ u'v", "∫ₐᵇ uv' = [uv]ₐᵇ + ∫ₐᵇ u'v", "∫ₐᵇ uv' = [u'v']ₐᵇ", "∫ₐᵇ uv' = [u'v]ₐᵇ - ∫ₐᵇ uv"],
              answer: 0,
              why: "Elle vient de uv' = (uv)' - u'v, intégrée entre a et b.",
            },
            {
              q: "Pour calculer ∫₀¹ x eˣ dx par parties, quel choix est pertinent ?",
              options: ["u = eˣ et v' = x", "u = x et v' = eˣ", "u = x eˣ et v' = 1", "u = 1 et v' = x eˣ"],
              answer: 1,
              why: "En dérivant x, on obtient 1 : la nouvelle intégrale ne contient plus que eˣ.",
            },
            {
              q: "Si f ≤ g sur [a ; b], l'aire du domaine compris entre leurs courbes vaut :",
              options: ["∫ₐᵇ (f - g)", "∫ₐᵇ f × ∫ₐᵇ g", "∫ₐᵇ (g - f)", "∫ₐᵇ (f + g)"],
              answer: 2,
              why: "On intègre la fonction du dessus moins celle du dessous, qui est positive.",
            },
            {
              q: "Que vaut ∫₀¹ x eˣ dx ?",
              options: ["1", "e", "e - 1", "0"],
              answer: 0,
              why: "[x eˣ]₀¹ - ∫₀¹ eˣ dx = e - (e - 1) = 1.",
            },
            {
              q: "Les unités graphiques sont 3 cm en abscisse et 2 cm en ordonnée. Combien vaut 1 u.a. ?",
              options: ["5 cm²", "9 cm²", "1 cm²", "6 cm²"],
              answer: 3,
              why: "L'unité d'aire est l'aire du rectangle de côtés 3 cm et 2 cm, soit 6 cm².",
            },
          ],
          trap: "Mal choisir u et v' : avec u = eˣ et v' = x pour ∫ x eˣ dx, la nouvelle intégrale contient x²/2 × eˣ, plus compliquée que la première. Autre erreur : oublier le signe moins devant la seconde intégrale.",
          method: "Avant d'appliquer la formule, écrivez sur une ligne les quatre fonctions u, u', v et v' : c'est ce que le correcteur attend, et cela vous permet de vérifier que v' a bien pour primitive v et que u' est plus simple que u.",
        },
      ],
    },
    /* ==================================================================== */
    /* LOI BINOMIALE, SOMMES DE VARIABLES ET LOI DES GRANDS NOMBRES           */
    /* ==================================================================== */
    {
      id: 'probabilites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'schema-de-bernoulli',
          title: 'Schéma de Bernoulli et loi binomiale',
          minutes: 35,
          objectives: [
            "Modéliser une succession d'épreuves indépendantes et représenter un schéma de Bernoulli par un arbre.",
            "Reconnaître une situation relevant de la loi binomiale et identifier ses paramètres n et p.",
            "Calculer une probabilité P(X = k) avec la formule et des probabilités cumulées à la calculatrice.",
            "Calculer et interpréter l'espérance d'une variable aléatoire suivant une loi binomiale.",
          ],
          course: [
            {
              heading: "Épreuve et loi de Bernoulli",
              paragraphs: [
                "Une épreuve de Bernoulli est une expérience aléatoire qui n'a que deux issues : le succès, noté S, de probabilité p, et l'échec, de probabilité 1 - p. Exemples : lancer un dé et considérer comme succès « obtenir 6 » (p = 1/6) ; tirer une pièce dans une production et considérer comme succès « la pièce est défectueuse ».",
                "La variable aléatoire X qui vaut 1 en cas de succès et 0 en cas d'échec suit la loi de Bernoulli de paramètre p : P(X = 1) = p et P(X = 0) = 1 - p. Son espérance est E(X) = 1 × p + 0 × (1 - p) = p, et sa variance est V(X) = p(1 - p).",
              ],
              box: { label: "Définition", text: "Une variable aléatoire X suit la loi de Bernoulli de paramètre p lorsqu'elle prend la valeur 1 avec la probabilité p et la valeur 0 avec la probabilité 1 - p. Alors E(X) = p et V(X) = p(1 - p)." },
            },
            {
              heading: "Schéma de Bernoulli et coefficients binomiaux",
              paragraphs: [
                "Un schéma de Bernoulli est la répétition de n épreuves de Bernoulli identiques (même probabilité de succès p) et indépendantes. On le représente par un arbre à n niveaux : chaque chemin est une liste de n résultats, par exemple (S, S, E) pour n = 3. Grâce à l'indépendance, la probabilité d'un chemin est le produit des probabilités de ses branches : un chemin qui contient k succès et n - k échecs a pour probabilité pᵏ(1 - p)ⁿ⁻ᵏ.",
                "Il reste à compter les chemins qui contiennent exactement k succès : c'est le nombre de façons de choisir les k rangs des succès parmi les n rangs, c'est-à-dire le coefficient binomial « k parmi n », vu en combinatoire. Il est noté avec n placé au-dessus de k entre parenthèses dans les manuels ; on l'écrit ici C(n, k). On a C(n, k) = n!/(k!(n - k)!), par exemple C(4, 2) = 6 et C(5, 2) = 10.",
              ],
            },
            {
              heading: "La loi binomiale",
              paragraphs: [
                "Dans un schéma de Bernoulli de paramètres n et p, la variable aléatoire X égale au nombre de succès suit la loi binomiale de paramètres n et p, notée B(n ; p). Elle prend les valeurs 0, 1, ..., n et, pour tout entier k entre 0 et n, P(X = k) = C(n, k) × pᵏ × (1 - p)ⁿ⁻ᵏ. Exemple : si X suit B(4 ; 0,3), P(X = 2) = 6 × 0,3² × 0,7² = 6 × 0,09 × 0,49 = 0,2646.",
                "Pour justifier qu'une variable suit une loi binomiale, on vérifie quatre points : une épreuve à deux issues, répétée n fois, de façon identique et indépendante, et X compte les succès. Des tirages sans remise ne sont pas indépendants ; quand on prélève peu d'éléments dans une très grande population, on les assimile toutefois à des tirages avec remise, ce que l'énoncé précise.",
                "Les probabilités cumulées P(X ≤ k) se calculent à la calculatrice (fonction de répartition binomiale). On en déduit les autres : P(X ≥ k) = 1 - P(X ≤ k - 1) et P(a ≤ X ≤ b) = P(X ≤ b) - P(X ≤ a - 1). Enfin, P(X ≥ 1) = 1 - P(X = 0) = 1 - (1 - p)ⁿ.",
              ],
              box: { label: "Formule", text: "Si X suit B(n ; p), pour tout entier k de 0 à n : P(X = k) = C(n, k) × pᵏ × (1 - p)ⁿ⁻ᵏ. En particulier, P(X ≥ 1) = 1 - (1 - p)ⁿ." },
            },
            {
              heading: "Espérance, variance et écart type",
              paragraphs: [
                "Si X suit B(n ; p), alors E(X) = np, V(X) = np(1 - p) et σ(X) = √(np(1 - p)). Ces formules seront démontrées dans la leçon suivante en écrivant X comme une somme de n variables de Bernoulli. L'espérance s'interprète comme le nombre moyen de succès sur un grand nombre de répétitions de l'expérience : en lançant 100 fois un dé, on obtient en moyenne 100 × 1/6 ≈ 16,7 fois le chiffre 6.",
              ],
              box: { label: "À retenir", text: "Si X suit B(n ; p) : E(X) = np ; V(X) = np(1 - p) ; σ(X) = √(np(1 - p))." },
            },
          ],
          keyPoints: [
            "Épreuve de Bernoulli : deux issues, succès de probabilité p et échec de probabilité 1 - p.",
            "Schéma de Bernoulli : n épreuves de Bernoulli identiques et indépendantes.",
            "X nombre de succès suit B(n ; p) : P(X = k) = C(n, k) pᵏ (1 - p)ⁿ⁻ᵏ.",
            "C(n, k) compte les chemins de l'arbre qui réalisent exactement k succès.",
            "P(X ≥ 1) = 1 - (1 - p)ⁿ ; P(X ≥ k) = 1 - P(X ≤ k - 1).",
            "E(X) = np et V(X) = np(1 - p).",
          ],
          example: {
            statement: "Un QCM comporte 10 questions indépendantes. Pour chacune, quatre réponses sont proposées, dont une seule est juste. Un élève répond au hasard à toutes les questions. On note X le nombre de bonnes réponses. 1. Justifier que X suit une loi binomiale et préciser ses paramètres. 2. Calculer P(X = 3) à 10⁻³ près. 3. Calculer la probabilité d'obtenir au moins une bonne réponse. 4. Calculer E(X) et l'interpréter.",
            solution: [
              "1. Chaque question est une épreuve de Bernoulli de succès « la réponse est juste », de probabilité p = 1/4 = 0,25. Les 10 épreuves sont identiques et indépendantes, et X compte les succès : X suit la loi binomiale B(10 ; 0,25).",
              "2. P(X = 3) = C(10, 3) × 0,25³ × 0,75⁷ = 120 × 0,015625 × 0,75⁷.",
              "Avec 0,75⁷ ≈ 0,13348, on obtient P(X = 3) ≈ 0,250.",
              "3. P(X ≥ 1) = 1 - P(X = 0) = 1 - 0,75¹⁰ ≈ 1 - 0,0563 ≈ 0,944.",
              "4. E(X) = np = 10 × 0,25 = 2,5.",
              "Interprétation : en répétant un grand nombre de fois ce QCM au hasard, l'élève obtiendrait en moyenne 2,5 bonnes réponses sur 10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La variable aléatoire X suit la loi binomiale B(5 ; 0,4). Calculer P(X = 0), P(X = 2), P(X = 5) et E(X).",
              hint: "Appliquez P(X = k) = C(5, k) × 0,4ᵏ × 0,6⁵⁻ᵏ, avec C(5, 0) = C(5, 5) = 1 et C(5, 2) = 10.",
              solution: [
                "P(X = 0) = 1 × 0,4⁰ × 0,6⁵ = 0,07776.",
                "P(X = 2) = 10 × 0,4² × 0,6³ = 10 × 0,16 × 0,216 = 0,3456.",
                "P(X = 5) = 1 × 0,4⁵ × 0,6⁰ = 0,01024.",
                "E(X) = np = 5 × 0,4 = 2.",
              ],
            },
            {
              level: 2,
              statement: "Dans une usine, 3 % des pièces fabriquées sont défectueuses. On prélève au hasard un lot de 50 pièces ; la production est assez importante pour assimiler ce prélèvement à 50 tirages avec remise. On note X le nombre de pièces défectueuses du lot. a) Quelle est la loi de X ? b) Calculer P(X = 0) à 10⁻⁴ près. c) Calculer P(X ≤ 2) à la calculatrice, puis P(X ≥ 3). d) Calculer E(X).",
              hint: "Pour c), utilisez la fonction de répartition binomiale de la calculatrice, puis l'événement contraire : P(X ≥ 3) = 1 - P(X ≤ 2).",
              solution: [
                "a) Chaque pièce est défectueuse ou non (deux issues), avec p = 0,03, et les 50 tirages sont identiques et indépendants. X compte les pièces défectueuses : X suit B(50 ; 0,03).",
                "b) P(X = 0) = 0,97⁵⁰ ≈ 0,2181.",
                "c) À la calculatrice : P(X ≤ 2) ≈ 0,8108.",
                "P(X ≥ 3) = 1 - P(X ≤ 2) ≈ 1 - 0,8108 = 0,1892.",
                "d) E(X) = 50 × 0,03 = 1,5 : en moyenne, un lot contient 1,5 pièce défectueuse.",
              ],
            },
            {
              level: 3,
              statement: "Un archer atteint la cible avec une probabilité de 0,7 à chaque tir, les tirs étant indépendants. 1. Il tire 8 flèches ; on note X le nombre de flèches dans la cible. a) Justifier que X suit une loi binomiale. b) Calculer P(X = 8) et P(X ≥ 6), à 10⁻³ près. 2. Il tire maintenant n flèches. Déterminer le plus petit entier n tel que la probabilité qu'il atteigne au moins une fois la cible soit supérieure ou égale à 0,999.",
              hint: "Pour la question 2, écrivez P(au moins un succès) = 1 - 0,3ⁿ, puis résolvez 0,3ⁿ ≤ 0,001 avec ln, sans oublier que ln(0,3) est négatif.",
              solution: [
                "1. a) Chaque tir est une épreuve de Bernoulli de succès « atteindre la cible », de probabilité 0,7 ; les 8 tirs sont identiques et indépendants, et X compte les succès : X suit B(8 ; 0,7).",
                "b) P(X = 8) = 0,7⁸ ≈ 0,058.",
                "P(X ≥ 6) = P(X = 6) + P(X = 7) + P(X = 8), ou 1 - P(X ≤ 5) à la calculatrice : P(X ≥ 6) ≈ 0,552.",
                "2. Avec n tirs, le nombre de succès suit B(n ; 0,7) et P(au moins un succès) = 1 - 0,3ⁿ.",
                "1 - 0,3ⁿ ≥ 0,999 équivaut à 0,3ⁿ ≤ 0,001, soit n ln(0,3) ≤ ln(0,001) (ln est croissante).",
                "Comme ln(0,3) < 0, on divise en changeant le sens : n ≥ ln(0,001)/ln(0,3) ≈ 5,74.",
                "Vérification : 0,3⁵ = 0,00243 > 0,001 et 0,3⁶ = 0,000729 ≤ 0,001. Le plus petit entier convenable est n = 6.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa description.",
            pairs: [
              { left: "Épreuve de Bernoulli", right: "Expérience à deux issues : succès de probabilité p, échec de probabilité 1 - p" },
              { left: "Schéma de Bernoulli", right: "Répétition de n épreuves de Bernoulli identiques et indépendantes" },
              { left: "C(n, k)", right: "Nombre de chemins de l'arbre réalisant exactement k succès" },
              { left: "P(X = k)", right: "C(n, k) × pᵏ × (1 - p)ⁿ⁻ᵏ" },
              { left: "E(X) pour B(n ; p)", right: "np" },
              { left: "V(X) pour B(n ; p)", right: "np(1 - p)" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces situations relève d'une loi binomiale ?",
              options: ["Tirer 3 boules sans remise dans une urne de 5 boules", "Lancer 10 fois une pièce et compter les piles", "Lancer un dé jusqu'à obtenir un 6", "Mesurer la taille de 20 élèves"],
              answer: 1,
              why: "On répète 10 fois, de façon identique et indépendante, une épreuve à deux issues, et l'on compte les succès.",
            },
            {
              q: "X suit B(4 ; 0,5). Que vaut P(X = 2) ?",
              options: ["0,5", "0,25", "0,375", "0,0625"],
              answer: 2,
              why: "P(X = 2) = C(4, 2) × 0,5² × 0,5² = 6 × 0,0625 = 0,375.",
            },
            {
              q: "X suit B(20 ; 0,3). Que vaut E(X) ?",
              options: ["6", "0,3", "4,2", "14"],
              answer: 0,
              why: "E(X) = np = 20 × 0,3 = 6. La valeur 4,2 est la variance np(1 - p).",
            },
            {
              q: "X suit B(n ; p). Que vaut P(X ≥ 1) ?",
              options: ["1 - pⁿ", "npⁿ", "(1 - p)ⁿ", "1 - (1 - p)ⁿ"],
              answer: 3,
              why: "L'événement contraire de « X ≥ 1 » est « X = 0 », de probabilité (1 - p)ⁿ.",
            },
            {
              q: "Combien vaut C(5, 2), le nombre de façons de placer 2 succès parmi 5 rangs ?",
              options: ["7", "20", "10", "25"],
              answer: 2,
              why: "C(5, 2) = 5!/(2! × 3!) = (5 × 4)/2 = 10.",
            },
          ],
          trap: "Oublier le coefficient C(n, k) dans P(X = k) : pᵏ(1 - p)ⁿ⁻ᵏ n'est que la probabilité d'un seul chemin. Autre erreur : appliquer la loi binomiale à des tirages sans remise dans une petite urne, où les épreuves ne sont pas indépendantes.",
          method: "Rédigez toujours la justification de la loi binomiale en quatre mots-clés : deux issues (préciser le succès et p), n répétitions, identiques et indépendantes, X compte les succès. Puis écrivez « X suit B(n ; p) » avec les valeurs numériques.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'sommes-variables-aleatoires',
          title: 'Sommes de variables aléatoires : espérance et variance',
          minutes: 30,
          objectives: [
            "Utiliser la linéarité de l'espérance : E(X + Y) = E(X) + E(Y) et E(aX + b) = aE(X) + b.",
            "Utiliser la relation V(aX + b) = a²V(X) et l'additivité de la variance pour des variables indépendantes.",
            "Calculer l'espérance, la variance et l'écart type de la loi binomiale en l'écrivant comme une somme de variables de Bernoulli.",
            "Calculer l'espérance et la variance de la somme et de la moyenne d'un échantillon.",
          ],
          course: [
            {
              heading: "Somme de deux variables aléatoires et espérance",
              paragraphs: [
                "Soit X et Y deux variables aléatoires définies sur le même univers. La variable X + Y associe à chaque issue la somme des valeurs prises par X et par Y. Exemple : on lance deux dés, X est le résultat du premier, Y celui du second, et S = X + Y est la somme des deux résultats.",
                "L'espérance est linéaire : E(X + Y) = E(X) + E(Y) et, pour tous réels a et b, E(aX + b) = aE(X) + b. Ces égalités sont toujours vraies, que les variables soient indépendantes ou non. Pour les deux dés : E(S) = 3,5 + 3,5 = 7, sans avoir besoin d'écrire la loi de S.",
              ],
              box: { label: "Propriété", text: "Pour toutes variables aléatoires X et Y et tous réels a et b : E(X + Y) = E(X) + E(Y) et E(aX + b) = aE(X) + b." },
            },
            {
              heading: "Variance d'une somme",
              paragraphs: [
                "Pour tous réels a et b : V(aX + b) = a²V(X) et σ(aX + b) = |a| σ(X). Ajouter une constante décale les valeurs sans modifier leur dispersion ; multiplier par a multiplie les écarts par |a|, donc la variance par a².",
                "Deux variables X et Y sont indépendantes lorsque, pour toutes valeurs x et y, les événements {X = x} et {Y = y} sont indépendants : par exemple les résultats de deux dés lancés séparément. Si X et Y sont indépendantes, alors V(X + Y) = V(X) + V(Y). Sans indépendance, c'est faux en général : avec Y = X, on a V(X + X) = V(2X) = 4V(X), et non 2V(X).",
                "Attention à la différence : si X et Y sont indépendantes, V(X - Y) = V(X) + V(-Y) = V(X) + (-1)²V(Y) = V(X) + V(Y). Les variances s'ajoutent toujours, car les dispersions se cumulent.",
              ],
              box: { label: "Propriété", text: "V(aX + b) = a²V(X). Si X et Y sont indépendantes : V(X + Y) = V(X) + V(Y)." },
            },
            {
              heading: "Application à la loi binomiale",
              paragraphs: [
                "Soit X une variable aléatoire qui suit B(n ; p). Pour i de 1 à n, notons Xᵢ la variable qui vaut 1 si la i-ème épreuve est un succès et 0 sinon : les Xᵢ suivent la loi de Bernoulli de paramètre p et sont indépendantes. Comme X compte les succès, X = X₁ + X₂ + ... + Xₙ.",
                "Par linéarité, E(X) = p + p + ... + p = np. Par indépendance, V(X) = p(1 - p) + ... + p(1 - p) = np(1 - p). On démontre ainsi les formules admises dans la leçon précédente, sans aucun calcul de somme compliquée.",
              ],
            },
            {
              heading: "Échantillon : somme et moyenne",
              paragraphs: [
                "Un échantillon de taille n d'une loi de probabilité est une liste (X₁, ..., Xₙ) de n variables aléatoires indépendantes qui suivent toutes cette loi. Il modélise n répétitions indépendantes d'une même expérience. On note μ = E(X₁) et V = V(X₁).",
                "La somme Sₙ = X₁ + ... + Xₙ vérifie E(Sₙ) = nμ, V(Sₙ) = nV et σ(Sₙ) = √n × σ(X₁). La moyenne Mₙ = Sₙ/n vérifie E(Mₙ) = μ, V(Mₙ) = V/n et σ(Mₙ) = σ(X₁)/√n.",
                "Interprétation : la moyenne d'un échantillon a la même espérance que chaque variable, mais sa dispersion diminue quand n augmente. Pour diviser l'écart type de la moyenne par 10, il faut multiplier la taille de l'échantillon par 100. C'est le point de départ de la loi des grands nombres.",
              ],
              box: { label: "À retenir", text: "Pour un échantillon de taille n : E(Sₙ) = nE(X), V(Sₙ) = nV(X), E(Mₙ) = E(X), V(Mₙ) = V(X)/n, σ(Mₙ) = σ(X)/√n." },
            },
          ],
          keyPoints: [
            "E(X + Y) = E(X) + E(Y) toujours ; E(aX + b) = aE(X) + b.",
            "V(aX + b) = a²V(X) : la constante b ne change pas la variance.",
            "Si X et Y sont indépendantes : V(X + Y) = V(X) + V(Y) et V(X - Y) = V(X) + V(Y).",
            "Loi binomiale : X = somme de n Bernoulli indépendantes, d'où E(X) = np et V(X) = np(1 - p).",
            "Échantillon de taille n : E(Mₙ) = E(X) et V(Mₙ) = V(X)/n.",
          ],
          example: {
            statement: "Dans un jeu, le gain algébrique X (en euros) d'une partie vaut -2 avec la probabilité 0,5 ; 1 avec la probabilité 0,3 ; 5 avec la probabilité 0,2. 1. Calculer E(X) et V(X). 2. Un joueur fait 50 parties indépendantes ; on note S son gain total et M son gain moyen par partie. Calculer E(S), V(S), σ(S), puis E(M) et σ(M).",
            solution: [
              "1. E(X) = -2 × 0,5 + 1 × 0,3 + 5 × 0,2 = -1 + 0,3 + 1 = 0,3.",
              "V(X) = 0,5 × (-2 - 0,3)² + 0,3 × (1 - 0,3)² + 0,2 × (5 - 0,3)² = 0,5 × 5,29 + 0,3 × 0,49 + 0,2 × 22,09 = 2,645 + 0,147 + 4,418 = 7,21.",
              "2. Les 50 parties forment un échantillon de taille 50 de la loi de X, et S = X₁ + ... + X₅₀.",
              "E(S) = 50 × 0,3 = 15 et, par indépendance, V(S) = 50 × 7,21 = 360,5, donc σ(S) = √360,5 ≈ 18,99.",
              "M = S/50, donc E(M) = 0,3 et V(M) = 7,21/50 = 0,1442, d'où σ(M) ≈ 0,38.",
              "Conclusion : le joueur gagne en moyenne 15 euros sur 50 parties, mais avec une forte dispersion (écart type d'environ 19 euros).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "X et Y sont deux variables aléatoires indépendantes telles que E(X) = 4, V(X) = 2, E(Y) = -1 et V(Y) = 3. Calculer : a) E(X + Y) et V(X + Y) ; b) E(3X - 2) et V(3X - 2) ; c) E(X - Y) et V(X - Y).",
              hint: "Utilisez la linéarité de l'espérance, la formule V(aX + b) = a²V(X) et l'additivité de la variance pour des variables indépendantes. Pour c), écrivez X - Y = X + (-1)Y.",
              solution: [
                "a) E(X + Y) = 4 + (-1) = 3. X et Y étant indépendantes, V(X + Y) = 2 + 3 = 5.",
                "b) E(3X - 2) = 3 × 4 - 2 = 10 et V(3X - 2) = 3² × 2 = 18.",
                "c) E(X - Y) = 4 - (-1) = 5.",
                "V(X - Y) = V(X) + (-1)²V(Y) = 2 + 3 = 5 : les variances s'ajoutent.",
              ],
            },
            {
              level: 2,
              statement: "Un site de vente en ligne reçoit 200 commandes. Chaque commande, indépendamment des autres, fait l'objet d'un retour avec une probabilité de 0,05. On note X le nombre de retours. a) Écrire X comme une somme de variables de Bernoulli et en déduire E(X) et V(X). b) Calculer σ(X) au centième. c) Chaque retour coûte 12 euros au site. Calculer l'espérance et l'écart type du coût total C des retours.",
              hint: "Introduisez Xᵢ = 1 si la i-ème commande est retournée, 0 sinon. Pour c), C = 12X : utilisez E(aX) = aE(X) et σ(aX) = |a| σ(X).",
              solution: [
                "a) Pour i de 1 à 200, soit Xᵢ = 1 si la commande i est retournée et 0 sinon : les Xᵢ suivent la loi de Bernoulli de paramètre 0,05 et sont indépendantes, et X = X₁ + ... + X₂₀₀.",
                "Par linéarité, E(X) = 200 × 0,05 = 10. Par indépendance, V(X) = 200 × 0,05 × 0,95 = 9,5.",
                "b) σ(X) = √9,5 ≈ 3,08.",
                "c) C = 12X, donc E(C) = 12 × 10 = 120 euros.",
                "σ(C) = 12 × σ(X) = 12√9,5 ≈ 36,99 euros.",
              ],
            },
            {
              level: 3,
              statement: "On lance un dé équilibré à six faces et l'on note X le résultat. 1. Calculer E(X) et montrer que V(X) = 35/12. 2. On lance le dé n fois de façon indépendante et l'on note Mₙ la moyenne des n résultats. Exprimer E(Mₙ) et V(Mₙ) en fonction de n. 3. Déterminer le plus petit entier n tel que l'écart type de Mₙ soit inférieur ou égal à 0,1.",
              hint: "Pour la variance, calculez la moyenne des carrés des écarts (k - 3,5)², pour k de 1 à 6. Pour la question 3, résolvez √(35/(12n)) ≤ 0,1 en élevant au carré (les deux membres sont positifs).",
              solution: [
                "1. E(X) = (1 + 2 + 3 + 4 + 5 + 6)/6 = 21/6 = 3,5.",
                "V(X) = (1/6) × ((-2,5)² + (-1,5)² + (-0,5)² + 0,5² + 1,5² + 2,5²) = (1/6) × (6,25 + 2,25 + 0,25 + 0,25 + 2,25 + 6,25) = 17,5/6 = 35/12.",
                "2. Les n lancers forment un échantillon de taille n de la loi de X. Donc E(Mₙ) = 3,5 et V(Mₙ) = V(X)/n = 35/(12n).",
                "3. σ(Mₙ) ≤ 0,1 équivaut à √(35/(12n)) ≤ 0,1, soit 35/(12n) ≤ 0,01 (les deux membres sont positifs).",
                "Cela équivaut à 12n ≥ 3 500, soit n ≥ 3 500/12 ≈ 291,7.",
                "Conclusion : le plus petit entier convenable est n = 292.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Attention aux pièges classiques sur la variance.",
            statements: [
              { text: "E(X + Y) = E(X) + E(Y), même si X et Y ne sont pas indépendantes.", true: true, why: "La linéarité de l'espérance est toujours vraie." },
              { text: "V(X + Y) = V(X) + V(Y) pour toutes variables aléatoires X et Y.", true: false, why: "Il faut que X et Y soient indépendantes : avec Y = X, V(2X) = 4V(X)." },
              { text: "V(3X) = 3V(X).", true: false, why: "V(aX) = a²V(X), donc V(3X) = 9V(X)." },
              { text: "Si X et Y sont indépendantes, V(X - Y) = V(X) - V(Y).", true: false, why: "V(X - Y) = V(X) + (-1)²V(Y) = V(X) + V(Y) : les dispersions se cumulent." },
              { text: "Une variable qui suit B(n ; p) est la somme de n variables de Bernoulli indépendantes de paramètre p.", true: true, why: "Chaque variable de Bernoulli vaut 1 en cas de succès : leur somme compte les succès." },
              { text: "L'écart type de la moyenne Mₙ d'un échantillon de taille n est σ(X)/√n.", true: true, why: "V(Mₙ) = V(X)/n, donc σ(Mₙ) = σ(X)/√n." },
              { text: "V(X + 5) = V(X) + 5.", true: false, why: "Ajouter une constante ne change pas la dispersion : V(X + 5) = V(X)." },
            ],
          },
          quiz: [
            {
              q: "On sait que E(X) = 4. Que vaut E(2X + 3) ?",
              options: ["8", "11", "14", "7"],
              answer: 1,
              why: "E(2X + 3) = 2E(X) + 3 = 8 + 3 = 11.",
            },
            {
              q: "On sait que V(X) = 3. Que vaut V(-2X) ?",
              options: ["-6", "6", "12", "-12"],
              answer: 2,
              why: "V(aX) = a²V(X) = (-2)² × 3 = 12. Une variance n'est jamais négative.",
            },
            {
              q: "X suit B(50 ; 0,2). Que vaut V(X) ?",
              options: ["10", "0,16", "40", "8"],
              answer: 3,
              why: "V(X) = np(1 - p) = 50 × 0,2 × 0,8 = 8. La valeur 10 est l'espérance.",
            },
            {
              q: "Un échantillon a pour taille 100 et σ(X) = 5. Que vaut l'écart type de la moyenne M₁₀₀ ?",
              options: ["0,5", "0,05", "5", "50"],
              answer: 0,
              why: "σ(M₁₀₀) = σ(X)/√100 = 5/10 = 0,5.",
            },
            {
              q: "Pour un échantillon de taille n de la loi de X, que vaut E(Sₙ), où Sₙ est la somme ?",
              options: ["E(X)", "E(X)/n", "nE(X)", "n²E(X)"],
              answer: 2,
              why: "Par linéarité, E(Sₙ) = E(X₁) + ... + E(Xₙ) = nE(X).",
            },
          ],
          trap: "Additionner les variances sans vérifier l'indépendance, ou écrire V(aX) = aV(X) au lieu de a²V(X). Une variance négative, comme V(X - Y) = V(X) - V(Y) < 0, doit immédiatement vous alerter.",
          method: "Avant tout calcul de variance d'une somme, écrivez la phrase « les variables sont indépendantes, donc » : si vous ne pouvez pas la justifier par l'énoncé, la formule d'additivité ne s'applique pas. Pour l'espérance, aucune condition n'est nécessaire.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'bienayme-tchebychev',
          title: 'Inégalités de Bienaymé-Tchebychev et de concentration',
          minutes: 30,
          objectives: [
            "Appliquer l'inégalité de Bienaymé-Tchebychev pour majorer la probabilité qu'une variable aléatoire s'écarte de son espérance.",
            "Interpréter cette inégalité en nombre d'écarts types.",
            "Appliquer l'inégalité de concentration à la moyenne d'un échantillon.",
            "Déterminer une taille d'échantillon permettant d'obtenir une précision et un risque donnés.",
          ],
          course: [
            {
              heading: "L'inégalité de Bienaymé-Tchebychev",
              paragraphs: [
                "Soit X une variable aléatoire d'espérance μ et de variance V(X). Pour tout réel δ > 0 : P(|X - μ| ≥ δ) ≤ V(X)/δ². L'événement |X - μ| ≥ δ signifie que X s'écarte de son espérance d'au moins δ, c'est-à-dire X ≤ μ - δ ou X ≥ μ + δ. L'inégalité dit que plus la variance est petite, moins il est probable de tomber loin de l'espérance.",
                "Par passage à l'événement contraire : P(|X - μ| < δ) ≥ 1 - V(X)/δ², soit P(μ - δ < X < μ + δ) ≥ 1 - V(X)/δ². Exemple : si E(X) = 20 et V(X) = 4, alors P(|X - 20| ≥ 5) ≤ 4/25 = 0,16, et donc P(15 < X < 25) ≥ 0,84.",
                "Idée de la preuve pour une variable qui prend un nombre fini de valeurs xᵢ avec les probabilités pᵢ : V(X) est la somme des pᵢ(xᵢ - μ)². En ne gardant que les termes où |xᵢ - μ| ≥ δ, chacun est au moins égal à pᵢδ², donc V(X) ≥ δ² × P(|X - μ| ≥ δ).",
              ],
              box: { label: "Propriété", text: "Inégalité de Bienaymé-Tchebychev : pour toute variable aléatoire X d'espérance μ et pour tout réel δ > 0, P(|X - μ| ≥ δ) ≤ V(X)/δ²." },
            },
            {
              heading: "Interprétation en écarts types",
              paragraphs: [
                "En prenant δ = kσ, où σ = σ(X) et k > 0, on obtient P(|X - μ| ≥ kσ) ≤ σ²/(k²σ²) = 1/k². La probabilité de s'écarter de l'espérance d'au moins 2 écarts types est au plus 1/4 = 0,25 ; d'au moins 3 écarts types, au plus 1/9 ≈ 0,11. Ce résultat vaut pour n'importe quelle loi.",
                "Cette majoration est souvent grossière, précisément parce qu'elle est universelle. Exemple : si X suit B(100 ; 0,5), alors μ = 50, V(X) = 25 et l'inégalité donne P(|X - 50| ≥ 10) ≤ 25/100 = 0,25. Un calcul exact à la calculatrice donne environ 0,057. L'inégalité ne se trompe pas, mais elle ne fournit qu'une borne supérieure.",
              ],
            },
            {
              heading: "L'inégalité de concentration",
              paragraphs: [
                "Soit (X₁, ..., Xₙ) un échantillon de taille n d'une variable aléatoire X d'espérance μ et de variance V(X), et Mₙ sa moyenne. On sait que E(Mₙ) = μ et V(Mₙ) = V(X)/n. En appliquant l'inégalité de Bienaymé-Tchebychev à Mₙ, on obtient l'inégalité de concentration : pour tout δ > 0, P(|Mₙ - μ| ≥ δ) ≤ V(X)/(nδ²).",
                "Elle sert à choisir une taille d'échantillon. Exemple : on lance n fois une pièce équilibrée et Mₙ est la fréquence de « pile ». Ici X suit la loi de Bernoulli de paramètre 0,5, donc μ = 0,5 et V(X) = 0,25. Pour δ = 0,05 : P(|Mₙ - 0,5| ≥ 0,05) ≤ 0,25/(n × 0,0025) = 100/n. Cette borne est inférieure ou égale à 0,05 dès que n ≥ 2 000.",
              ],
              box: { label: "Propriété", text: "Inégalité de concentration : si Mₙ est la moyenne d'un échantillon de taille n d'une variable X d'espérance μ, alors pour tout δ > 0, P(|Mₙ - μ| ≥ δ) ≤ V(X)/(nδ²)." },
            },
          ],
          keyPoints: [
            "Bienaymé-Tchebychev : P(|X - μ| ≥ δ) ≤ V(X)/δ², pour tout δ > 0.",
            "Forme contraire : P(μ - δ < X < μ + δ) ≥ 1 - V(X)/δ².",
            "En écarts types : P(|X - μ| ≥ kσ) ≤ 1/k².",
            "Concentration : P(|Mₙ - μ| ≥ δ) ≤ V(X)/(nδ²).",
            "La borne est valable pour toute loi, mais souvent loin de la vraie probabilité.",
          ],
          example: {
            statement: "Une variable aléatoire X a pour espérance 20 et pour variance 4. a) Majorer P(|X - 20| ≥ 5). b) En déduire une minoration de P(15 < X < 25).",
            solution: [
              "a) On applique l'inégalité de Bienaymé-Tchebychev avec μ = 20, V(X) = 4 et δ = 5 > 0.",
              "P(|X - 20| ≥ 5) ≤ 4/5² = 4/25 = 0,16.",
              "b) L'événement 15 < X < 25 s'écrit |X - 20| < 5 : c'est l'événement contraire de |X - 20| ≥ 5.",
              "P(15 < X < 25) = 1 - P(|X - 20| ≥ 5) ≥ 1 - 0,16 = 0,84.",
              "Conclusion : X prend une valeur strictement comprise entre 15 et 25 avec une probabilité d'au moins 0,84.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une variable aléatoire X a pour espérance 50 et pour écart type 4. a) Majorer P(|X - 50| ≥ 10). b) Minorer P(42 < X < 58).",
              hint: "Calculez d'abord la variance V(X) = σ². Pour b), reconnaissez l'événement |X - 50| < 8.",
              solution: [
                "V(X) = 4² = 16.",
                "a) D'après l'inégalité de Bienaymé-Tchebychev avec δ = 10 : P(|X - 50| ≥ 10) ≤ 16/100 = 0,16.",
                "b) 42 < X < 58 équivaut à |X - 50| < 8. Avec δ = 8 : P(|X - 50| ≥ 8) ≤ 16/64 = 0,25.",
                "Donc P(42 < X < 58) ≥ 1 - 0,25 = 0,75.",
              ],
            },
            {
              level: 2,
              statement: "X suit la loi binomiale B(400 ; 0,25). a) Calculer E(X) et V(X). b) À l'aide de l'inégalité de Bienaymé-Tchebychev, majorer P(X ≤ 80 ou X ≥ 120). c) Déterminer un réel δ > 0 tel que P(|X - 100| ≥ δ) ≤ 0,05, et en déduire un intervalle d'entiers dans lequel X se trouve avec une probabilité d'au moins 0,95.",
              hint: "Pour b), l'événement s'écrit |X - 100| ≥ 20. Pour c), il suffit que V(X)/δ² ≤ 0,05.",
              solution: [
                "a) E(X) = 400 × 0,25 = 100 et V(X) = 400 × 0,25 × 0,75 = 75.",
                "b) X ≤ 80 ou X ≥ 120 équivaut à |X - 100| ≥ 20. Donc P(X ≤ 80 ou X ≥ 120) ≤ 75/20² = 75/400 = 0,1875.",
                "c) Il suffit que 75/δ² ≤ 0,05, soit δ² ≥ 1 500, donc δ ≥ √1 500 ≈ 38,73. On prend δ = √1 500.",
                "Alors P(|X - 100| < √1 500) ≥ 0,95. Comme X prend des valeurs entières, |X - 100| < 38,73 équivaut à 62 ≤ X ≤ 138.",
                "Conclusion : X appartient à l'intervalle d'entiers [62 ; 138] avec une probabilité d'au moins 0,95.",
              ],
            },
            {
              level: 3,
              statement: "Avant une élection, on veut estimer la proportion p d'électeurs favorables à un candidat. On interroge n personnes choisies au hasard, de façon assimilable à des tirages indépendants. Pour i de 1 à n, Xᵢ vaut 1 si la i-ème personne est favorable et 0 sinon, et Mₙ est la fréquence des personnes favorables dans l'échantillon. 1. Montrer que, pour tout réel p de [0 ; 1], p(1 - p) ≤ 1/4. 2. En déduire que P(|Mₙ - p| ≥ 0,02) ≤ 625/n. 3. Déterminer une taille n d'échantillon qui garantit que la fréquence observée s'écarte de p de moins de 0,02 avec une probabilité d'au moins 0,95.",
              hint: "Pour la question 1, étudiez la fonction p ↦ p - p² ou remarquez que 1/4 - p(1 - p) = (p - ½)². Pour la question 2, appliquez l'inégalité de concentration avec V(X) = p(1 - p).",
              solution: [
                "1. 1/4 - p(1 - p) = p² - p + 1/4 = (p - ½)² ≥ 0, donc p(1 - p) ≤ 1/4.",
                "2. Les Xᵢ forment un échantillon de la loi de Bernoulli de paramètre p : μ = p et V(X) = p(1 - p).",
                "L'inégalité de concentration avec δ = 0,02 donne P(|Mₙ - p| ≥ 0,02) ≤ p(1 - p)/(n × 0,02²) ≤ (1/4)/(0,0004n).",
                "Or (1/4)/0,0004 = 1/0,0016 = 625, donc P(|Mₙ - p| ≥ 0,02) ≤ 625/n.",
                "3. On veut P(|Mₙ - p| ≥ 0,02) ≤ 0,05 ; il suffit que 625/n ≤ 0,05, soit n ≥ 625/0,05 = 12 500.",
                "Conclusion : un échantillon de 12 500 personnes suffit (l'inégalité étant grossière, une taille plus petite conviendrait en réalité).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour déterminer une taille d'échantillon avec l'inégalité de concentration.",
            items: [
              "Identifier la variable X étudiée, son espérance μ et sa variance V(X).",
              "Introduire l'échantillon (X₁, ..., Xₙ) et sa moyenne Mₙ.",
              "Rappeler que E(Mₙ) = μ et V(Mₙ) = V(X)/n.",
              "Appliquer l'inégalité : P(|Mₙ - μ| ≥ δ) ≤ V(X)/(nδ²).",
              "Imposer V(X)/(nδ²) ≤ α, où α est le risque accepté.",
              "Résoudre l'inéquation en n et conclure avec le plus petit entier convenable.",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'inégalité de Bienaymé-Tchebychev, pour δ > 0 ?",
              options: ["P(|X - μ| ≥ δ) ≤ V(X)/δ²", "P(|X - μ| ≥ δ) ≥ V(X)/δ²", "P(|X - μ| ≥ δ) ≤ σ(X)/δ", "P(|X - μ| ≤ δ) ≤ V(X)/δ²"],
              answer: 0,
              why: "Elle majore la probabilité de s'écarter de l'espérance d'au moins δ par la variance divisée par δ².",
            },
            {
              q: "D'après l'inégalité de Bienaymé-Tchebychev, P(|X - μ| ≥ 3σ) est au plus égale à :",
              options: ["1/3", "1/9", "3/σ", "0,03"],
              answer: 1,
              why: "Avec δ = 3σ : V(X)/δ² = σ²/(9σ²) = 1/9.",
            },
            {
              q: "E(X) = 10 et V(X) = 4. Quelle majoration de P(|X - 10| ≥ 4) donne l'inégalité ?",
              options: ["1", "0,5", "0,4", "0,25"],
              answer: 3,
              why: "V(X)/δ² = 4/16 = 0,25.",
            },
            {
              q: "Pour la moyenne Mₙ d'un échantillon de taille n de la loi de X, V(Mₙ) vaut :",
              options: ["V(X)", "nV(X)", "V(X)/n", "V(X)/n²"],
              answer: 2,
              why: "V(Mₙ) = V(Sₙ)/n² = nV(X)/n² = V(X)/n.",
            },
            {
              q: "Si l'on multiplie la taille n de l'échantillon par 4, la majoration V(X)/(nδ²) est :",
              options: ["divisée par 4", "divisée par 2", "multipliée par 4", "inchangée"],
              answer: 0,
              why: "n apparaît au dénominateur : la borne est divisée par 4.",
            },
          ],
          trap: "Confondre l'écart type et la variance dans la formule (écrire σ/δ² ou V/δ), ou oublier de passer à l'événement contraire : l'inégalité majore la probabilité d'être loin de μ, pas celle d'en être proche.",
          method: "Écrivez toujours l'événement sous la forme |X - μ| ≥ δ avant d'appliquer l'inégalité : traduisez « X ≤ 80 ou X ≥ 120 » en « |X - 100| ≥ 20 » et vérifiez que l'intervalle est bien centré sur l'espérance.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'loi-des-grands-nombres',
          title: 'Loi des grands nombres et simulation avec des listes Python',
          minutes: 35,
          objectives: [
            "Énoncer la loi faible des grands nombres et l'interpréter.",
            "Relier la fréquence observée sur un grand échantillon à la probabilité théorique.",
            "Simuler un échantillon d'une loi à l'aide d'une liste Python et calculer sa moyenne.",
            "Écrire une fonction Python qui estime la proportion d'échantillons dont la moyenne s'écarte de l'espérance d'au moins δ.",
          ],
          course: [
            {
              heading: "La loi faible des grands nombres",
              paragraphs: [
                "Soit (X₁, ..., Xₙ) un échantillon de taille n d'une variable aléatoire X d'espérance μ, et Mₙ sa moyenne. D'après l'inégalité de concentration, pour tout δ > 0 : 0 ≤ P(|Mₙ - μ| ≥ δ) ≤ V(X)/(nδ²). Quand n tend vers +∞, V(X)/(nδ²) tend vers 0, donc, par le théorème des gendarmes, P(|Mₙ - μ| ≥ δ) tend vers 0. C'est la loi faible des grands nombres.",
                "Interprétation : plus l'échantillon est grand, plus il est probable que sa moyenne soit proche de l'espérance, aussi petite que soit la tolérance δ choisie. Dans le cas d'une variable de Bernoulli, Mₙ est la fréquence des succès : la fréquence observée se rapproche de la probabilité p. C'est ce qui justifie l'estimation d'une probabilité par une fréquence, vue depuis la seconde.",
                "Deux contresens à éviter. D'abord, la loi ne dit pas que Mₙ finit par être égale à μ : elle parle d'une probabilité qui tend vers 0. Ensuite, elle ne dit pas que le hasard « compense » : après cinq « pile » avec une pièce équilibrée, le lancer suivant donne toujours « face » avec la probabilité 0,5, car les lancers sont indépendants. L'effet des premiers lancers est simplement dilué dans la masse.",
              ],
              box: { label: "Théorème", text: "Loi faible des grands nombres : pour tout réel δ > 0, la probabilité P(|Mₙ - μ| ≥ δ) tend vers 0 quand n tend vers +∞." },
            },
            {
              heading: "Simuler un échantillon avec une liste Python",
              paragraphs: [
                "Le module random fournit deux fonctions utiles : random() renvoie un nombre réel aléatoire de l'intervalle [0 ; 1[, et randint(a, b) renvoie un entier aléatoire entre a et b inclus. La liste en compréhension [randint(1, 6) for k in range(n)] contient les résultats de n lancers d'un dé équilibré : c'est un échantillon de taille n.",
                "Pour simuler une loi de Bernoulli de paramètre p, on utilise l'expression 1 if random() < p else 0 : elle vaut 1 avec la probabilité p, car random() tombe dans [0 ; p[ avec la probabilité p. La moyenne d'une liste L se calcule avec sum(L)/len(L), où sum(L) est la somme des éléments et len(L) leur nombre.",
              ],
              box: { label: "Repère", text: "from random import random, randint ; def echantillon(n): return [randint(1, 6) for k in range(n)] ; def moyenne(L): return sum(L)/len(L)" },
            },
            {
              heading: "Observer la loi des grands nombres par simulation",
              paragraphs: [
                "Pour observer la loi, on simule N échantillons de taille n et l'on compte ceux dont la moyenne s'écarte de μ d'au moins δ. Une fonction ecart(n, N, delta) initialise un compteur c à 0 ; dans une boucle for j in range(N), elle construit L = echantillon(n), puis, si abs(moyenne(L) - 3.5) >= delta, elle augmente c de 1 ; enfin elle renvoie c/N. En Python, le séparateur décimal est le point : 3.5 et non 3,5.",
                "La valeur renvoyée est une estimation de P(|Mₙ - μ| ≥ δ). En augmentant n, on la voit diminuer vers 0, conformément à la loi des grands nombres. On peut la comparer à la borne V(X)/(nδ²) de l'inégalité de concentration : la proportion simulée est en général bien plus petite que cette borne, qui n'est qu'une majoration.",
              ],
            },
          ],
          keyPoints: [
            "Loi des grands nombres : pour tout δ > 0, P(|Mₙ - μ| ≥ δ) tend vers 0 quand n tend vers +∞.",
            "Elle se démontre avec l'inégalité de concentration et le théorème des gendarmes.",
            "La fréquence observée d'un succès se rapproche de sa probabilité p.",
            "Pas de compensation : les épreuves restent indépendantes.",
            "Python : [randint(1, 6) for k in range(n)], 1 if random() < p else 0, sum(L)/len(L).",
          ],
          example: {
            statement: "On exécute l'instruction L = [randint(1, 6) for k in range(60000)], puis f = L.count(6)/len(L). Que représentent L et f ? De quelle valeur f est-il probablement proche, et pourquoi ?",
            solution: [
              "L est une liste de 60 000 entiers aléatoires entre 1 et 6 : elle simule 60 000 lancers indépendants d'un dé équilibré.",
              "L.count(6) compte le nombre de 6 dans la liste, et len(L) vaut 60 000 : f est donc la fréquence d'apparition du 6.",
              "Soit Xᵢ la variable qui vaut 1 si le i-ème lancer donne 6 et 0 sinon : c'est une loi de Bernoulli de paramètre 1/6, et f est la moyenne de cet échantillon de taille 60 000.",
              "D'après la loi des grands nombres, pour un échantillon aussi grand, f est très probablement proche de l'espérance 1/6 ≈ 0,167.",
              "Précision : l'inégalité de concentration avec δ = 0,01 donne P(|f - 1/6| ≥ 0,01) ≤ (5/36)/(60 000 × 0,0001) ≈ 0,023.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère un échantillon de taille n de la loi de Bernoulli de paramètre 0,3, et Mₙ sa moyenne. a) Que représente Mₙ ? Vers quoi la loi des grands nombres indique-t-elle que Mₙ se concentre ? b) Pour n = 1 000 et δ = 0,05, majorer P(|Mₙ - 0,3| ≥ 0,05).",
              hint: "Pour une loi de Bernoulli de paramètre p, μ = p et V(X) = p(1 - p). Appliquez ensuite l'inégalité de concentration.",
              solution: [
                "a) Mₙ est la fréquence des succès dans l'échantillon. D'après la loi des grands nombres, elle se concentre autour de μ = 0,3 quand n devient grand.",
                "b) V(X) = 0,3 × 0,7 = 0,21.",
                "P(|M₁₀₀₀ - 0,3| ≥ 0,05) ≤ 0,21/(1 000 × 0,05²) = 0,21/2,5 = 0,084.",
              ],
            },
            {
              level: 2,
              statement: "Écrire en Python, avec le module random : a) une fonction bernoulli(p) qui renvoie 1 avec la probabilité p et 0 sinon ; b) une fonction echantillon(n, p) qui renvoie une liste de n valeurs indépendantes obtenues avec bernoulli(p) ; c) une fonction moyenne(L) qui renvoie la moyenne de la liste L. d) Que renvoie, approximativement, moyenne(echantillon(100000, 0.3)) ? Justifier.",
              hint: "Utilisez random() < p pour le succès, une liste en compréhension pour l'échantillon, et les fonctions sum et len pour la moyenne.",
              solution: [
                "a) def bernoulli(p): return 1 if random() < p else 0. Comme random() suit la loi uniforme sur [0 ; 1[, l'événement random() < p a pour probabilité p.",
                "b) def echantillon(n, p): return [bernoulli(p) for k in range(n)].",
                "c) def moyenne(L): return sum(L)/len(L).",
                "d) La liste est un échantillon de taille 100 000 de la loi de Bernoulli de paramètre 0,3 ; sa moyenne est la fréquence des 1.",
                "D'après la loi des grands nombres, cette fréquence est très probablement proche de l'espérance 0,3 : le programme renvoie une valeur voisine de 0,3.",
              ],
            },
            {
              level: 3,
              statement: "On lance n fois un dé équilibré ; on note X le résultat d'un lancer et Mₙ la moyenne des n résultats. On rappelle que E(X) = 3,5 et V(X) = 35/12. 1. Majorer P(|M₁₀₀₀ - 3,5| ≥ 0,2) à 10⁻³ près. 2. Justifier que, pour tout δ > 0, P(|Mₙ - 3,5| ≥ δ) tend vers 0 quand n tend vers +∞. Quel est le nom de ce résultat ? 3. Un élève programme la fonction ecart(n, N, delta) décrite dans le cours et obtient 0 avec n = 1 000, N = 1 000 et δ = 0,2. Ce résultat contredit-il la question 1 ?",
              hint: "Pour la question 1, appliquez l'inégalité de concentration. Pour la question 3, rappelez ce que majore exactement l'inégalité et ce que mesure la simulation.",
              solution: [
                "1. D'après l'inégalité de concentration : P(|M₁₀₀₀ - 3,5| ≥ 0,2) ≤ (35/12)/(1 000 × 0,04) = (35/12)/40 = 35/480 ≈ 0,073.",
                "2. Pour tout δ > 0, 0 ≤ P(|Mₙ - 3,5| ≥ δ) ≤ (35/12)/(nδ²), et ce majorant tend vers 0 quand n tend vers +∞.",
                "D'après le théorème des gendarmes, P(|Mₙ - 3,5| ≥ δ) tend vers 0 : c'est la loi faible des grands nombres.",
                "3. La fonction renvoie la proportion, parmi 1 000 échantillons simulés, de ceux dont la moyenne s'écarte de 3,5 d'au moins 0,2 : c'est une estimation de P(|M₁₀₀₀ - 3,5| ≥ 0,2).",
                "L'inégalité affirme seulement que cette probabilité est au plus 0,073 ; elle peut être beaucoup plus petite. Obtenir 0 est donc compatible avec la question 1.",
                "Conclusion : il n'y a pas de contradiction ; la simulation suggère que la vraie probabilité est très faible, et confirme que la borne de l'inégalité est grossière.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Loi des grands nombres et Python.",
            statements: [
              { text: "La loi des grands nombres affirme que Mₙ est égale à μ dès que n est assez grand.", true: false, why: "Elle affirme seulement que la probabilité d'un écart d'au moins δ tend vers 0." },
              { text: "Pour tout δ > 0, P(|Mₙ - μ| ≥ δ) tend vers 0 quand n tend vers +∞.", true: true, why: "C'est l'énoncé de la loi faible des grands nombres." },
              { text: "Après cinq « pile » consécutifs avec une pièce équilibrée, « face » est plus probable au lancer suivant.", true: false, why: "Les lancers sont indépendants : la probabilité reste 0,5. Il n'y a pas de compensation." },
              { text: "En Python, l'expression random() < p vaut True avec la probabilité p, pour p dans [0 ; 1].", true: true, why: "random() suit la loi uniforme sur [0 ; 1[ et tombe dans [0 ; p[ avec la probabilité p." },
              { text: "sum(L)/len(L) calcule la moyenne des éléments de la liste L.", true: true, why: "sum(L) est la somme des éléments et len(L) leur nombre." },
              { text: "[randint(1, 6) for k in range(10)] produit une liste de 6 nombres compris entre 1 et 10.", true: false, why: "Elle produit une liste de 10 entiers compris entre 1 et 6." },
              { text: "La loi des grands nombres se démontre à partir de l'inégalité de concentration.", true: true, why: "La borne V(X)/(nδ²) tend vers 0 et le théorème des gendarmes conclut." },
            ],
          },
          quiz: [
            {
              q: "D'après la loi des grands nombres, quelle est la limite de P(|Mₙ - μ| ≥ δ) quand n tend vers +∞ ?",
              options: ["1", "δ", "0", "μ"],
              answer: 2,
              why: "La probabilité que la moyenne s'écarte de μ d'au moins δ tend vers 0.",
            },
            {
              q: "Que produit l'instruction [randint(1, 6) for k in range(100)] ?",
              options: ["Une liste de 100 entiers entre 1 et 6", "Un entier aléatoire entre 1 et 100", "Une liste de 6 entiers entre 1 et 100", "La moyenne de 100 lancers de dé"],
              answer: 0,
              why: "range(100) fait 100 tours, et chaque tour ajoute un entier aléatoire entre 1 et 6.",
            },
            {
              q: "Quelle expression Python simule une variable de Bernoulli de paramètre p ?",
              options: ["randint(0, 1)", "1 if random() < p else 0", "random() * p", "round(p)"],
              answer: 1,
              why: "Elle vaut 1 avec la probabilité p. randint(0, 1) ne convient que pour p = 0,5.",
            },
            {
              q: "Une pièce équilibrée a donné 10 fois « pile » de suite. Au lancer suivant :",
              options: ["« face » a plus de chances", "« pile » a plus de chances", "les deux restent à 0,5", "on ne peut pas le savoir"],
              answer: 2,
              why: "Les lancers sont indépendants : la probabilité de chaque face reste 0,5.",
            },
            {
              q: "On lance 60 000 fois un dé équilibré. La fréquence des 6 est très probablement proche de :",
              options: ["1/2", "6", "1/60 000", "1/6"],
              answer: 3,
              why: "D'après la loi des grands nombres, la fréquence se rapproche de la probabilité 1/6.",
            },
          ],
          trap: "Croire que la loi des grands nombres impose une compensation (« le 6 n'est pas sorti depuis longtemps, il va sortir ») ou que la moyenne finit par égaler exactement μ. Elle parle d'une probabilité d'écart qui tend vers 0, pour des épreuves qui restent indépendantes.",
          method: "Pour un exercice avec Python, relisez chaque ligne en vous demandant ce que contient chaque variable après son exécution (une liste ? un nombre ? de quelle taille ?). Testez mentalement avec une petite valeur, par exemple n = 3, avant de conclure.",
        },
      ],
    },
    /* ==================================================================== */
    /* PRÉPARER L'ÉPREUVE DU BAC                                              */
    /* ==================================================================== */
    {
      id: 'bac-maths',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'methode-des-exercices',
          title: 'Lire un sujet et traiter les exercices avec méthode',
          minutes: 25,
          objectives: [
            "Identifier, dès la lecture du sujet, les notions du programme mobilisées par chaque exercice.",
            "Exploiter la structure d'un exercice : questions enchaînées, résultats donnés, parties indépendantes.",
            "Reconnaître les questions types du bac et appliquer la méthode associée.",
            "Utiliser la calculatrice et les résultats admis à bon escient.",
          ],
          course: [
            {
              heading: "L'épreuve écrite de spécialité",
              paragraphs: [
                "L'épreuve écrite de l'enseignement de spécialité de mathématiques dure quatre heures et compte avec le coefficient 16 dans le baccalauréat général. Le sujet se compose de plusieurs exercices indépendants (souvent quatre), qui peuvent porter sur l'ensemble du programme de terminale et mobiliser des acquis de première. L'un d'eux prend parfois la forme d'un questionnaire à choix multiples.",
                "L'en-tête du sujet précise les conditions : usage de la calculatrice (en général autorisé, en mode examen), barème indicatif, possibilité de traiter les exercices dans l'ordre de son choix. Il rappelle aussi que la qualité de la rédaction et la précision des raisonnements comptent dans l'évaluation, et que les traces de recherche, même incomplètes, peuvent être valorisées : une piste honnête vaut mieux qu'une page blanche.",
              ],
              box: { label: "Repère", text: "Épreuve écrite de spécialité : 4 heures, coefficient 16. Plusieurs exercices indépendants sur l'ensemble du programme. Lisez attentivement l'en-tête du sujet : calculatrice, barème, consignes du QCM." },
            },
            {
              heading: "Lire le sujet et lire un exercice",
              paragraphs: [
                "Commencez par une lecture complète du sujet, en une dizaine de minutes : pour chaque exercice, notez le thème (suites, fonctions, espace, probabilités...) et repérez celui qui vous inspire le plus confiance, pour le traiter en premier et prendre de l'assurance.",
                "Avant de répondre à la première question d'un exercice, lisez-le en entier. Les questions sont enchaînées : la suite de l'énoncé indique souvent la direction à prendre. Repérez les mots-clés. « Montrer que » donne le résultat : vous pourrez l'utiliser ensuite, même sans l'avoir démontré. « En déduire » signifie qu'il faut utiliser le résultat précédent. « On admet que » fournit un outil gratuit. Les parties A, B, C sont souvent indépendantes : bloquer en partie A n'empêche pas de traiter la partie B.",
              ],
            },
            {
              heading: "Les questions types et leurs méthodes",
              paragraphs: [
                "Suites : raisonnement par récurrence (initialisation, hérédité, conclusion) ; sens de variation par le signe de uₙ₊₁ - uₙ ; convergence par le théorème de convergence monotone ; limite par passage à la limite dans la relation de récurrence ; algorithme de seuil en Python avec une boucle while.",
                "Fonctions : limites (opérations, croissances comparées), dérivée et signe, tableau de variations ; existence et unicité d'une solution par le corollaire du théorème des valeurs intermédiaires ; convexité par le signe de f'' ; équations différentielles ; intégrales et aires. Géométrie dans l'espace : représentation paramétrique d'une droite, vecteur normal et équation cartésienne d'un plan, intersections, projeté orthogonal, distances et volumes.",
                "Probabilités : arbre pondéré, formule des probabilités totales, probabilités conditionnelles, loi binomiale, espérance et variance de sommes, inégalité de Bienaymé-Tchebychev. Pour chaque type, la rédaction attendue est connue : c'est ce qui rend l'entraînement sur des sujets d'annales si efficace.",
              ],
            },
            {
              heading: "QCM, calculatrice et résultats admis",
              paragraphs: [
                "Pour un QCM, lisez la consigne : elle indique si une justification est demandée et comment les réponses sont comptées. Une question de QCM se traite souvent en éliminant les propositions fausses, par un contre-exemple ou un calcul rapide.",
                "La calculatrice sert à vérifier un résultat, à explorer (tableau de valeurs, courbe) et à calculer des probabilités binomiales ; mais une lecture graphique ne remplace pas une justification. Si vous ne parvenez pas à démontrer un résultat donné par l'énoncé, écrivez clairement « J'admets ce résultat » et continuez : les questions suivantes rapportent leurs points.",
              ],
              box: { label: "À retenir", text: "« Montrer que » : le résultat est donné, il peut être admis pour la suite. « En déduire » : utiliser la question précédente. « Justifier » : citer un théorème ou un calcul, pas seulement une lecture graphique." },
            },
          ],
          keyPoints: [
            "Épreuve de 4 heures, coefficient 16, plusieurs exercices indépendants.",
            "Lire tout le sujet, puis commencer par l'exercice le plus sûr.",
            "Lire chaque exercice en entier avant de répondre : la fin éclaire le début.",
            "« Montrer que » donne le résultat, « en déduire » renvoie à la question précédente.",
            "Un résultat non démontré peut être admis pour traiter la suite.",
            "La calculatrice vérifie et explore, mais ne justifie pas.",
          ],
          example: {
            statement: "Extrait de sujet : « On considère la suite (uₙ) définie par u₀ = 1 et, pour tout entier naturel n, uₙ₊₁ = 0,5uₙ + 2. 1. Montrer par récurrence que, pour tout entier naturel n, uₙ ≤ uₙ₊₁ ≤ 4. 2. En déduire que la suite (uₙ) est convergente. 3. Déterminer sa limite. » Analyser la structure de l'exercice, puis le traiter.",
            solution: [
              "Analyse : la question 1 est une récurrence dont le résultat est donné ; la question 2 commence par « en déduire » : la suite est croissante et majorée par 4, on appliquera le théorème de convergence monotone ; la question 3 se traite par passage à la limite dans la relation de récurrence.",
              "1. Soit P(n) : uₙ ≤ uₙ₊₁ ≤ 4. Initialisation : u₀ = 1 et u₁ = 0,5 × 1 + 2 = 2,5, et 1 ≤ 2,5 ≤ 4, donc P(0) est vraie.",
              "Hérédité : supposons P(n) vraie pour un entier n. En multipliant par 0,5 > 0 puis en ajoutant 2 : 0,5uₙ + 2 ≤ 0,5uₙ₊₁ + 2 ≤ 0,5 × 4 + 2, soit uₙ₊₁ ≤ uₙ₊₂ ≤ 4. P(n + 1) est vraie.",
              "Conclusion : par récurrence, pour tout entier naturel n, uₙ ≤ uₙ₊₁ ≤ 4.",
              "2. D'après la question 1, la suite (uₙ) est croissante et majorée par 4. D'après le théorème de convergence monotone, elle converge vers une limite ℓ.",
              "3. La fonction x ↦ 0,5x + 2 est continue ; par passage à la limite dans uₙ₊₁ = 0,5uₙ + 2, on obtient ℓ = 0,5ℓ + 2, soit 0,5ℓ = 2 et ℓ = 4.",
              "Conclusion : la suite (uₙ) converge vers 4.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des consignes suivantes, extraites de sujets de type bac, indiquer précisément ce qui est attendu : a) « Montrer que f'(x) = (1 - x)e^(-x). » b) « En déduire le sens de variation de f. » c) « Justifier que l'équation f(x) = 0 admet une unique solution α sur [1 ; 2]. » d) « Donner une valeur approchée de α à 10⁻² près. »",
              hint: "Pour chaque consigne, demandez-vous : faut-il un calcul, un théorème cité avec ses hypothèses, ou un encadrement obtenu à la calculatrice ?",
              solution: [
                "a) Un calcul de dérivée complet, qui aboutit exactement à l'expression donnée. Le résultat étant fourni, il pourra être utilisé ensuite même si le calcul échoue.",
                "b) Utiliser l'expression de f'(x) de la question a) : étudier son signe, puis conclure sur les variations de f (tableau de variations).",
                "c) Citer le corollaire du théorème des valeurs intermédiaires en vérifiant ses hypothèses : f continue et strictement monotone sur [1 ; 2], et 0 compris entre f(1) et f(2).",
                "d) Un encadrement d'amplitude 10⁻² obtenu à la calculatrice (tableau de valeurs), par exemple a ≤ α ≤ a + 0,01 avec f(a) et f(a + 0,01) de signes contraires.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction f définie sur ℝ par f(x) = x e^(-x). La question 2 d'un sujet demandait de montrer que f'(x) = (1 - x)e^(-x), et vous n'avez pas réussi à la traiter. La question 3 demande : « En déduire le tableau de variations de f sur ℝ et la valeur de son maximum. » Rédiger la réponse à la question 3, puis traiter la question 2 pour vérifier.",
              hint: "Commencez par une phrase qui admet le résultat de la question 2. Le signe de f'(x) est celui de 1 - x, car e^(-x) > 0.",
              solution: [
                "Question 3 : « D'après la question 2, que j'admets, f'(x) = (1 - x)e^(-x) pour tout réel x. »",
                "Pour tout x, e^(-x) > 0, donc f'(x) est du signe de 1 - x : f'(x) > 0 si x < 1, f'(1) = 0 et f'(x) < 0 si x > 1.",
                "Donc f est strictement croissante sur ]-∞ ; 1] et strictement décroissante sur [1 ; +∞[.",
                "Le maximum de f sur ℝ est atteint en x = 1 et vaut f(1) = 1 × e⁻¹ = 1/e.",
                "Vérification de la question 2 : f = uv avec u(x) = x et v(x) = e^(-x), u'(x) = 1 et v'(x) = -e^(-x). Donc f'(x) = e^(-x) - x e^(-x) = (1 - x)e^(-x).",
              ],
            },
            {
              level: 3,
              statement: "Une entreprise fabrique des pièces sur deux machines : la machine A produit 70 % des pièces et la machine B le reste. 2 % des pièces produites par A et 5 % des pièces produites par B sont défectueuses. On choisit une pièce au hasard. On note A l'événement « la pièce vient de la machine A », B l'événement contraire et D l'événement « la pièce est défectueuse ». 1. Construire un arbre pondéré. 2. Calculer P(D). 3. La pièce est défectueuse. Quelle est la probabilité qu'elle provienne de la machine B ? Arrondir à 10⁻³. 4. On prélève 100 pièces, de façon assimilable à des tirages avec remise, et l'on note X le nombre de pièces défectueuses. Calculer P(X ≥ 1) à 10⁻³ près.",
              hint: "Identifiez le thème de chaque question : arbre et probabilités totales (2), probabilité conditionnelle inversée (3), loi binomiale (4).",
              solution: [
                "1. Premier niveau : P(A) = 0,7 et P(B) = 0,3. Second niveau : P_A(D) = 0,02 et P_A(D̄) = 0,98 ; P_B(D) = 0,05 et P_B(D̄) = 0,95.",
                "2. A et B forment une partition de l'univers. D'après la formule des probabilités totales : P(D) = P(A) × P_A(D) + P(B) × P_B(D) = 0,7 × 0,02 + 0,3 × 0,05 = 0,014 + 0,015 = 0,029.",
                "3. P_D(B) = P(B ∩ D)/P(D) = 0,015/0,029 ≈ 0,517.",
                "4. Chaque pièce est défectueuse avec la probabilité 0,029, les 100 tirages sont identiques et indépendants, et X compte les pièces défectueuses : X suit B(100 ; 0,029).",
                "P(X ≥ 1) = 1 - P(X = 0) = 1 - 0,971¹⁰⁰ ≈ 0,947.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche pour traiter un exercice du bac.",
            items: [
              "Lire l'énoncé en entier et repérer le thème et les parties.",
              "Relever les données et les résultats fournis (« montrer que », « on admet que »).",
              "Traiter les questions dans l'ordre en exploitant les « en déduire ».",
              "Admettre un résultat non démontré pour continuer l'exercice.",
              "Conclure chaque question par une phrase qui répond à la consigne.",
              "Vérifier la cohérence des résultats (ordre de grandeur, calculatrice).",
            ],
          },
          quiz: [
            {
              q: "Quelle est la durée de l'épreuve écrite de spécialité mathématiques ?",
              options: ["2 heures", "3 heures", "4 heures", "5 heures"],
              answer: 2,
              why: "L'épreuve écrite de spécialité dure quatre heures.",
            },
            {
              q: "Dans une question, que signifie « en déduire » ?",
              options: ["Utiliser le résultat précédent", "La question est facultative", "Tout reprendre depuis le début", "Lire la réponse sur un graphique"],
              answer: 0,
              why: "La question s'appuie sur le résultat de la question précédente, qu'il faut citer.",
            },
            {
              q: "Pour justifier qu'une équation f(x) = k admet une unique solution sur [a ; b], on utilise :",
              options: ["le théorème de Pythagore", "le corollaire du théorème des valeurs intermédiaires", "la loi des grands nombres", "l'intégration par parties"],
              answer: 1,
              why: "Avec f continue et strictement monotone sur [a ; b], et k compris entre f(a) et f(b), la solution existe et est unique.",
            },
            {
              q: "Vous ne savez pas démontrer le résultat d'une question « Montrer que uₙ ≤ 4 ». Que faire ?",
              options: ["Abandonner l'exercice", "Recopier la question", "Inventer une démonstration", "Admettre le résultat et continuer"],
              answer: 3,
              why: "Le résultat est donné par l'énoncé : on peut l'admettre explicitement et traiter les questions suivantes.",
            },
            {
              q: "Quel est le coefficient de l'épreuve de spécialité mathématiques au baccalauréat général ?",
              options: ["8", "10", "16", "5"],
              answer: 2,
              why: "Chaque enseignement de spécialité de terminale est affecté du coefficient 16.",
            },
          ],
          trap: "Commencer à répondre sans avoir lu tout l'exercice, puis rester bloqué sur une question sans voir que les suivantes donnent le résultat ou que la partie suivante est indépendante.",
          method: "Entraînez-vous sur des sujets d'annales en chronométrant : avant de rédiger, annotez la marge de chaque question avec le nom de la méthode ou du théorème attendu (« récurrence », « TVI », « probabilités totales »). Ce réflexe de diagnostic est la clé de la réussite le jour de l'épreuve.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'demonstrations-attendues',
          title: 'Les démonstrations attendues du programme',
          minutes: 35,
          objectives: [
            "Connaître les démonstrations que le programme de terminale demande de savoir refaire.",
            "Rédiger la démonstration de l'inégalité de Bernoulli et de la limite de qⁿ pour q > 1.",
            "Démontrer que deux primitives d'une même fonction diffèrent d'une constante et résoudre l'équation y' = ay.",
            "Démontrer la formule d'intégration par parties et une croissance comparée.",
          ],
          course: [
            {
              heading: "Pourquoi apprendre des démonstrations",
              paragraphs: [
                "Le programme de terminale précise, pour chaque thème, une liste de démonstrations que vous devez savoir refaire. Une question du bac peut demander d'en restituer une, mais surtout, leurs idées reviennent sans cesse dans les exercices : poser une fonction auxiliaire, comparer, raisonner par récurrence. Apprendre une démonstration, c'est apprendre une méthode.",
                "Il ne s'agit pas de réciter mot à mot : retenez l'idée clé et la structure (hypothèses, étapes, conclusion), puis entraînez-vous à la rédiger sans modèle. Cette leçon présente plusieurs démonstrations de la liste du programme ; la liste complète figure dans le programme officiel, et votre professeur vous indiquera celles qui ont été traitées en classe.",
              ],
            },
            {
              heading: "Suites : récurrence et limites",
              paragraphs: [
                "Inégalité de Bernoulli : pour tout réel a > 0 et tout entier naturel n, (1 + a)ⁿ ≥ 1 + na. Elle se démontre par récurrence ; l'idée clé de l'hérédité est de multiplier les deux membres par 1 + a, qui est positif, puis de minorer na² par 0. On en déduit que, si q > 1, la suite (qⁿ) tend vers +∞ (voir l'exemple corrigé).",
                "Toute suite croissante non majorée tend vers +∞. Soit A un réel quelconque. La suite n'étant pas majorée par A, il existe un rang n₀ tel que uₙ₀ > A. Comme elle est croissante, pour tout n ≥ n₀, uₙ ≥ uₙ₀ > A. Ainsi, tout intervalle ]A ; +∞[ contient tous les termes à partir d'un certain rang : c'est la définition de la limite +∞.",
              ],
            },
            {
              heading: "Analyse : primitives, équations différentielles, exponentielle et logarithme",
              paragraphs: [
                "Deux primitives d'une même fonction diffèrent d'une constante : si F' = G' = f sur un intervalle I, alors (G - F)' = 0 sur I, donc G - F est constante sur I. Résolution de y' = ay : pour une solution f, la fonction g(x) = f(x)e^(-ax) a pour dérivée (f'(x) - a f(x))e^(-ax) = 0, donc g est constante et f(x) = Ce^(ax).",
                "Croissance comparée de eˣ et x en +∞ : on étudie φ(x) = eˣ - x²/2 sur [0 ; +∞[ et l'on montre que φ(x) > 0, d'où eˣ/x > x/2 pour x > 0, et eˣ/x tend vers +∞ par comparaison (voir l'exercice 3). Dérivée du logarithme, sa dérivabilité étant admise : pour x > 0, e^(ln(x)) = x ; en dérivant les deux membres, ln'(x) × e^(ln(x)) = 1, soit ln'(x) × x = 1, donc ln'(x) = 1/x.",
              ],
            },
            {
              heading: "Calcul intégral et géométrie",
              paragraphs: [
                "Intégration par parties : de (uv)' = u'v + uv', on tire uv' = (uv)' - u'v ; en intégrant entre a et b, et puisque uv est une primitive de (uv)', on obtient ∫ₐᵇ uv' = [uv]ₐᵇ - ∫ₐᵇ u'v. Pour f continue, positive et croissante sur [a ; b], la fonction F(x) = ∫ₐˣ f(t) dt est une primitive de f : pour h > 0, h f(x) ≤ F(x + h) - F(x) ≤ h f(x + h) (encadrement de l'aire d'une bande par deux rectangles), puis on divise par h et on fait tendre h vers 0.",
                "En géométrie, le projeté orthogonal H d'un point M sur un plan P est le point de P le plus proche de M : pour tout point N de P, le triangle MHN est rectangle en H, donc MN² = MH² + HN² ≥ MH², d'où MN ≥ MH, avec égalité seulement si N = H.",
              ],
              box: { label: "À retenir", text: "Les idées clés : récurrence (multiplier par un positif), fonction auxiliaire de dérivée nulle, dériver une composée (e^(ln x) = x), intégrer (uv)' = u'v + uv', encadrer par des rectangles, Pythagore pour le projeté orthogonal." },
            },
          ],
          keyPoints: [
            "Inégalité de Bernoulli par récurrence, puis qⁿ tend vers +∞ si q > 1 par comparaison.",
            "Suite croissante non majorée : elle dépasse tout réel A à partir d'un rang, donc tend vers +∞.",
            "Deux primitives : (G - F)' = 0 sur un intervalle, donc G - F est constante.",
            "y' = ay : g(x) = f(x)e^(-ax) a une dérivée nulle.",
            "Intégration par parties : intégrer (uv)' = u'v + uv'.",
            "ln'(x) = 1/x : dériver e^(ln(x)) = x.",
          ],
          example: {
            statement: "Démontrer que, pour tout réel a > 0 et tout entier naturel n, (1 + a)ⁿ ≥ 1 + na (inégalité de Bernoulli). En déduire que, si q > 1, la suite (qⁿ) tend vers +∞.",
            solution: [
              "Soit a > 0. Pour tout entier naturel n, on note P(n) la propriété : (1 + a)ⁿ ≥ 1 + na.",
              "Initialisation : (1 + a)⁰ = 1 et 1 + 0 × a = 1, donc P(0) est vraie.",
              "Hérédité : supposons P(n) vraie pour un entier n fixé, soit (1 + a)ⁿ ≥ 1 + na. Comme 1 + a > 0, en multipliant les deux membres par 1 + a : (1 + a)ⁿ⁺¹ ≥ (1 + na)(1 + a) = 1 + (n + 1)a + na².",
              "Or na² ≥ 0, donc (1 + a)ⁿ⁺¹ ≥ 1 + (n + 1)a : P(n + 1) est vraie.",
              "Conclusion : par récurrence, P(n) est vraie pour tout entier naturel n.",
              "Soit q > 1. On pose a = q - 1 > 0. Pour tout n, qⁿ = (1 + a)ⁿ ≥ 1 + na.",
              "Comme a > 0, la suite (1 + na) tend vers +∞. D'après le théorème de comparaison, la suite (qⁿ) tend vers +∞.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Démontrer que si F et G sont deux primitives d'une même fonction f sur un intervalle I, alors il existe un réel C tel que G = F + C. 2. Application : vérifier que F(x) = (x + 1)² et G(x) = x² + 2x sont deux primitives sur ℝ de f(x) = 2x + 2, et déterminer la constante C telle que F = G + C.",
              hint: "Dérivez G - F, puis utilisez le fait qu'une fonction de dérivée nulle sur un intervalle est constante. Pour l'application, développez (x + 1)².",
              solution: [
                "1. F et G sont dérivables sur I avec F' = G' = f. La fonction G - F est dérivable sur I et (G - F)' = f - f = 0.",
                "Une fonction dont la dérivée est nulle sur un intervalle est constante sur cet intervalle : il existe un réel C tel que G - F = C, soit G = F + C.",
                "2. F'(x) = 2(x + 1) = 2x + 2 et G'(x) = 2x + 2 : F et G sont bien des primitives de f sur ℝ.",
                "F(x) - G(x) = x² + 2x + 1 - x² - 2x = 1. Donc F = G + 1, avec C = 1.",
              ],
            },
            {
              level: 2,
              statement: "1. Démontrer que les solutions sur ℝ de l'équation différentielle y' = ay (a réel) sont les fonctions x ↦ Ce^(ax), où C est un réel. 2. Application : déterminer la solution f de y' = -3y telle que f(0) = 2.",
              hint: "Vérifiez d'abord que ces fonctions sont solutions. Pour la réciproque, considérez g(x) = f(x)e^(-ax) et calculez g'(x).",
              solution: [
                "1. Pour C réel, la fonction x ↦ Ce^(ax) est dérivable de dérivée x ↦ aCe^(ax) : c'est une solution.",
                "Réciproquement, soit f une solution. On pose g(x) = f(x)e^(-ax). g est dérivable et g'(x) = f'(x)e^(-ax) - a f(x)e^(-ax) = (f'(x) - a f(x))e^(-ax) = 0, car f' = af.",
                "g est donc constante sur ℝ : il existe un réel C tel que f(x)e^(-ax) = C, soit f(x) = Ce^(ax).",
                "2. Avec a = -3, f(x) = Ce^(-3x) et f(0) = C = 2. Donc f(x) = 2e^(-3x).",
              ],
            },
            {
              level: 3,
              statement: "On considère la fonction φ définie sur [0 ; +∞[ par φ(x) = eˣ - x²/2. 1. Calculer φ'(x) et φ''(x), puis étudier le signe de φ''(x) sur [0 ; +∞[. 2. En déduire le sens de variation de φ', puis le signe de φ'(x). 3. En déduire que, pour tout x ≥ 0, eˣ > x²/2. 4. En déduire la limite de eˣ/x quand x tend vers +∞, puis celle de x e^(-x).",
              hint: "Chaque question utilise la précédente : signe de φ'', variations de φ', signe de φ', variations de φ, signe de φ. Pour la question 4, divisez l'inégalité par x > 0.",
              solution: [
                "1. φ'(x) = eˣ - x et φ''(x) = eˣ - 1. Pour x ≥ 0, eˣ ≥ e⁰ = 1, donc φ''(x) ≥ 0.",
                "2. φ' est donc croissante sur [0 ; +∞[. Comme φ'(0) = 1 - 0 = 1, on a φ'(x) ≥ 1 > 0 pour tout x ≥ 0.",
                "3. φ est donc strictement croissante sur [0 ; +∞[, et φ(0) = 1 - 0 = 1. Ainsi φ(x) ≥ 1 > 0, c'est-à-dire eˣ > x²/2, pour tout x ≥ 0.",
                "4. Pour x > 0, en divisant par x > 0 : eˣ/x > x/2.",
                "Comme x/2 tend vers +∞ quand x tend vers +∞, le théorème de comparaison donne : eˣ/x tend vers +∞.",
                "Enfin, x e^(-x) = x/eˣ = 1/(eˣ/x) pour x > 0, et l'inverse d'une quantité qui tend vers +∞ tend vers 0 : x e^(-x) tend vers 0 en +∞.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque démonstration à son idée clé.",
            pairs: [
              { left: "Inégalité de Bernoulli", right: "Récurrence : multiplier par 1 + a, qui est positif" },
              { left: "Limite de qⁿ pour q > 1", right: "Écrire q = 1 + a et comparer qⁿ à 1 + na" },
              { left: "Deux primitives d'une même fonction", right: "Une fonction de dérivée nulle sur un intervalle est constante" },
              { left: "Solutions de y' = ay", right: "Dériver g(x) = f(x)e^(-ax)" },
              { left: "Intégration par parties", right: "Intégrer la relation (uv)' = u'v + uv'" },
              { left: "Dérivée de ln", right: "Dériver les deux membres de e^(ln(x)) = x" },
            ],
          },
          quiz: [
            {
              q: "Dans la démonstration par récurrence de (1 + a)ⁿ ≥ 1 + na, que vérifie l'initialisation au rang 0 ?",
              options: ["0 ≥ a", "1 ≥ 1", "1 + a ≥ 1 + a", "a ≥ 1"],
              answer: 1,
              why: "Au rang 0 : (1 + a)⁰ = 1 et 1 + 0 × a = 1, donc l'inégalité s'écrit 1 ≥ 1.",
            },
            {
              q: "Pour résoudre y' = ay, quelle fonction auxiliaire introduit-on à partir d'une solution f ?",
              options: ["f(x)e^(ax)", "f(x) + e^(-ax)", "f(x)e^(-ax)", "f'(x) - a"],
              answer: 2,
              why: "La dérivée de f(x)e^(-ax) est nulle, ce qui prouve que cette fonction est constante.",
            },
            {
              q: "Quel argument prouve que deux primitives F et G d'une même fonction diffèrent d'une constante ?",
              options: ["(G - F)' = 0 sur un intervalle", "F et G ont les mêmes variations", "F(0) = G(0) toujours", "F et G sont continues"],
              answer: 0,
              why: "Une fonction de dérivée nulle sur un intervalle est constante sur cet intervalle.",
            },
            {
              q: "La formule d'intégration par parties s'obtient en intégrant la dérivée de :",
              options: ["u + v", "u/v", "u ∘ v", "uv"],
              answer: 3,
              why: "(uv)' = u'v + uv', donc uv' = (uv)' - u'v, que l'on intègre entre a et b.",
            },
            {
              q: "Sachant que eˣ > x²/2 pour x ≥ 0, quelle est la limite de eˣ/x en +∞ ?",
              options: ["0", "1", "+∞", "1/2"],
              answer: 2,
              why: "eˣ/x > x/2 pour x > 0, et x/2 tend vers +∞ : par comparaison, eˣ/x tend vers +∞.",
            },
          ],
          trap: "Apprendre une démonstration par cœur sans en comprendre l'idée clé, puis oublier une hypothèse essentielle : par exemple, ne pas préciser que 1 + a est positif avant de multiplier une inégalité, ou que l'on travaille sur un intervalle pour conclure qu'une fonction de dérivée nulle est constante.",
          method: "Pour chaque démonstration, écrivez une fiche avec l'énoncé, l'idée clé en une ligne, puis la rédaction complète. Une semaine plus tard, refaites-la à partir de l'idée clé seule, sans regarder la fiche : si vous y parvenez, la démonstration est acquise.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'rediger-et-gerer-son-temps',
          title: 'Rédiger une solution complète et gérer son temps',
          minutes: 25,
          objectives: [
            "Rédiger une solution complète : annonce, justification, calcul et conclusion.",
            "Justifier l'application d'un théorème en vérifiant ses hypothèses.",
            "Organiser son temps sur une épreuve de quatre heures.",
            "Relire sa copie de façon efficace pour détecter les erreurs.",
          ],
          course: [
            {
              heading: "Ce qu'est une réponse complète",
              paragraphs: [
                "Une réponse complète comporte quatre éléments : ce que l'on va utiliser, la justification (un théorème cité avec ses hypothèses vérifiées, ou un calcul détaillé), le calcul lui-même, et une phrase de conclusion qui répond exactement à la question posée. Un résultat juste mais non justifié rapporte peu de points.",
                "Exemple : « La fonction f est continue et strictement croissante sur [0 ; 2], f(0) = -1 < 0 et f(2) = 3 > 0. D'après le corollaire du théorème des valeurs intermédiaires, l'équation f(x) = 0 admet une unique solution α dans [0 ; 2]. » Chaque hypothèse est écrite, le théorème est nommé, la conclusion est explicite.",
                "Soignez les connecteurs logiques : « donc » introduit une conséquence, « car » une justification, « or » une information supplémentaire, « d'après » une référence à un théorème ou à une question. N'utilisez le symbole ⇔ que si l'équivalence est vraie dans les deux sens ; sinon, écrivez « donc » ou ⇒.",
              ],
            },
            {
              heading: "Citer les théorèmes avec leurs hypothèses",
              paragraphs: [
                "Les correcteurs attendent des hypothèses précises. Convergence monotone : la suite est croissante et majorée (ou décroissante et minorée). Corollaire du théorème des valeurs intermédiaires : la fonction est continue et strictement monotone sur l'intervalle, et la valeur cherchée est comprise entre les images des bornes. Récurrence : initialisation, hérédité, conclusion, avec la propriété P(n) écrite.",
                "Loi binomiale : épreuve à deux issues, répétée n fois de façon identique et indépendante, et la variable compte les succès. Probabilités totales : les événements utilisés forment une partition de l'univers. Comparaison d'intégrales : les bornes sont dans l'ordre croissant. Écrire ces hypothèses prend quelques secondes et rapporte des points.",
              ],
              box: { label: "Règle", text: "Tout théorème utilisé se cite par son nom, avec ses hypothèses vérifiées une à une, avant la conclusion. Une lecture graphique ou une valeur de calculatrice ne suffit pas comme justification." },
            },
            {
              heading: "Gérer ses quatre heures",
              paragraphs: [
                "Un plan possible : une dizaine de minutes pour lire tout le sujet, une vingtaine de minutes à la fin pour relire, et le reste réparti entre les exercices en proportion de leurs points. Avec quatre exercices de même barème, cela fait environ 50 minutes par exercice. Notez sur votre brouillon l'heure à laquelle vous devez passer à l'exercice suivant.",
                "Ne restez pas bloqué plus d'une dizaine de minutes sur une question : laissez de la place sur la copie, admettez le résultat si l'énoncé le donne, et passez à la suite. Commencez chaque exercice sur une nouvelle page et numérotez clairement les questions, pour que le correcteur s'y retrouve, même si vous traitez les exercices dans un ordre différent de celui du sujet.",
              ],
            },
            {
              heading: "Relire et vérifier",
              paragraphs: [
                "Pendant la relecture, cherchez les résultats incohérents : une probabilité hors de [0 ; 1], une aire ou une variance négative, une limite qui contredit le tableau de variations, une fonction croissante dont la dérivée calculée est négative. Vérifiez les calculs numériques à la calculatrice, et contrôlez que chaque question a reçu une phrase de conclusion.",
                "Encadrez ou soulignez les résultats finaux. Vérifiez aussi que vous n'avez oublié aucune question, notamment les dernières questions d'un exercice, souvent accessibles en admettant les résultats précédents.",
              ],
              box: { label: "À retenir", text: "Lire 10 minutes, répartir le temps selon le barème, ne pas rester bloqué, relire 20 minutes. Vérifier la cohérence : une probabilité entre 0 et 1, une aire et une variance positives." },
            },
          ],
          keyPoints: [
            "Réponse complète : annonce, justification, calcul, phrase de conclusion.",
            "Citer chaque théorème par son nom avec ses hypothèses vérifiées.",
            "Répartir le temps selon les points ; environ 50 minutes par exercice si quatre exercices ont le même barème.",
            "Ne pas rester bloqué : admettre le résultat donné et continuer.",
            "Relire en traquant les incohérences : probabilité hors de [0 ; 1], aire ou variance négative.",
          ],
          example: {
            statement: "Rédiger une réponse complète à la question : « Montrer que l'équation x³ + x - 1 = 0 admet une unique solution α dans [0 ; 1], puis donner un encadrement de α d'amplitude 10⁻². »",
            solution: [
              "On considère la fonction f définie sur [0 ; 1] par f(x) = x³ + x - 1.",
              "f est dérivable (donc continue) sur [0 ; 1] et f'(x) = 3x² + 1 > 0 : f est strictement croissante sur [0 ; 1].",
              "f(0) = -1 < 0 et f(1) = 1 > 0, donc 0 est compris entre f(0) et f(1).",
              "D'après le corollaire du théorème des valeurs intermédiaires, l'équation f(x) = 0 admet une unique solution α dans [0 ; 1].",
              "À la calculatrice : f(0,68) ≈ -0,0056 < 0 et f(0,69) ≈ 0,0185 > 0.",
              "Comme f est strictement croissante, 0,68 < α < 0,69 : c'est un encadrement d'amplitude 10⁻².",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici trois réponses d'élèves, incomplètes. Pour chacune, dire ce qui manque, puis la réécrire correctement. a) « La suite (uₙ) est croissante, donc elle converge. » (On sait aussi que uₙ ≤ 4 pour tout n.) b) « f'(x) = 2x - 4, donc f est croissante. » (f est définie sur ℝ.) c) « X suit une loi binomiale, donc P(X = 2) = 0,3456. » (Un joueur effectue 5 tirs indépendants, chacun réussi avec la probabilité 0,4, et X compte les tirs réussis.)",
              hint: "Pour chaque réponse, demandez-vous quel théorème est utilisé et quelles hypothèses ou quels paramètres n'ont pas été écrits.",
              solution: [
                "a) Une suite croissante ne converge pas forcément (exemple : uₙ = n). Il manque la majoration. Réécriture : « La suite (uₙ) est croissante et majorée par 4, donc, d'après le théorème de convergence monotone, elle converge. »",
                "b) Le signe de f'(x) n'a pas été étudié : 2x - 4 est négatif pour x < 2. Réécriture : « f'(x) = 2x - 4 est négatif sur ]-∞ ; 2] et positif sur [2 ; +∞[, donc f est décroissante sur ]-∞ ; 2] et croissante sur [2 ; +∞[. »",
                "c) Il manque la justification de la loi et ses paramètres, ainsi que le calcul. Réécriture : « Chaque tir est une épreuve à deux issues, de succès de probabilité 0,4 ; les 5 tirs sont identiques et indépendants et X compte les succès : X suit B(5 ; 0,4). »",
                "Suite de c) : « P(X = 2) = C(5, 2) × 0,4² × 0,6³ = 10 × 0,16 × 0,216 = 0,3456. »",
              ],
            },
            {
              level: 2,
              statement: "Un sujet de bac comporte quatre exercices notés respectivement sur 6, 5, 5 et 4 points (total : 20 points). L'épreuve dure 4 heures. Vous décidez de consacrer 10 minutes à la lecture du sujet et 20 minutes à la relecture finale. Proposer une répartition du temps restant entre les exercices, proportionnelle à leurs points.",
              hint: "Calculez le temps restant en minutes, puis le temps disponible par point.",
              solution: [
                "Durée totale : 4 × 60 = 240 minutes. Temps restant : 240 - 10 - 20 = 210 minutes.",
                "Temps par point : 210/20 = 10,5 minutes.",
                "Exercice 1 : 6 × 10,5 = 63 minutes. Exercices 2 et 3 : 5 × 10,5 = 52,5 minutes chacun. Exercice 4 : 4 × 10,5 = 42 minutes.",
                "Vérification : 63 + 52,5 + 52,5 + 42 = 210 minutes.",
                "En pratique, on arrondit : environ 1 h pour l'exercice 1, 50 à 55 minutes pour les exercices 2 et 3, 40 minutes pour l'exercice 4.",
              ],
            },
            {
              level: 3,
              statement: "On considère la suite (uₙ) définie par u₀ = 2 et, pour tout entier naturel n, uₙ₊₁ = √(uₙ + 6). 1. Démontrer par récurrence que, pour tout entier naturel n, 0 ≤ uₙ ≤ uₙ₊₁ ≤ 3. 2. En déduire que la suite (uₙ) converge. 3. Déterminer sa limite. Rédiger chaque question de façon complète.",
              hint: "Pour l'hérédité, utilisez le fait que la fonction g définie par g(x) = √(x + 6) est croissante sur [-6 ; +∞[ : appliquer g conserve l'ordre. Pour la limite, utilisez la continuité de g et résolvez ℓ = √(ℓ + 6) avec ℓ ≥ 0.",
              solution: [
                "1. Soit P(n) : 0 ≤ uₙ ≤ uₙ₊₁ ≤ 3. Initialisation : u₀ = 2 et u₁ = √8 ≈ 2,83, donc 0 ≤ 2 ≤ √8 ≤ 3 (car 8 ≤ 9). P(0) est vraie.",
                "Hérédité : supposons P(n) vraie pour un entier n. La fonction g(x) = √(x + 6) est croissante sur [-6 ; +∞[, donc g(0) ≤ g(uₙ) ≤ g(uₙ₊₁) ≤ g(3), soit √6 ≤ uₙ₊₁ ≤ uₙ₊₂ ≤ 3. Comme √6 ≥ 0, P(n + 1) est vraie.",
                "Conclusion : par récurrence, pour tout entier naturel n, 0 ≤ uₙ ≤ uₙ₊₁ ≤ 3.",
                "2. D'après la question 1, la suite (uₙ) est croissante et majorée par 3. D'après le théorème de convergence monotone, elle converge vers une limite ℓ, avec 0 ≤ ℓ ≤ 3.",
                "3. La fonction g est continue sur [-6 ; +∞[ ; par passage à la limite dans uₙ₊₁ = g(uₙ), on obtient ℓ = √(ℓ + 6).",
                "Alors ℓ² = ℓ + 6, soit ℓ² - ℓ - 6 = 0, dont les solutions sont 3 et -2 (discriminant 25). Comme ℓ ≥ 0, ℓ = 3.",
                "Conclusion : la suite (uₙ) converge vers 3.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les bonnes pratiques le jour de l'épreuve.",
            statements: [
              { text: "Une réponse juste sans justification rapporte en général tous les points.", true: false, why: "La justification fait partie de la réponse : un résultat seul rapporte peu." },
              { text: "Pour appliquer le théorème de convergence monotone, il faut une suite croissante et majorée, ou décroissante et minorée.", true: true, why: "Ce sont exactement les hypothèses du théorème." },
              { text: "Il vaut mieux rester sur une question difficile jusqu'à la résoudre.", true: false, why: "Au-delà d'une dizaine de minutes, mieux vaut avancer et revenir plus tard." },
              { text: "On peut utiliser le résultat d'une question non résolue, en l'admettant, pour traiter les suivantes.", true: true, why: "C'est possible quand l'énoncé donne le résultat ; il faut l'écrire explicitement." },
              { text: "Une probabilité égale à 1,2 signale une erreur de calcul.", true: true, why: "Une probabilité est toujours comprise entre 0 et 1." },
              { text: "Il est interdit de traiter les exercices dans un ordre différent de celui du sujet.", true: false, why: "Les exercices sont indépendants ; il suffit de bien les numéroter sur la copie." },
              { text: "Une courbe tracée à la calculatrice suffit à justifier les variations d'une fonction.", true: false, why: "Il faut étudier le signe de la dérivée ; la calculatrice ne sert qu'à vérifier." },
            ],
          },
          quiz: [
            {
              q: "Quelles hypothèses demande le corollaire du théorème des valeurs intermédiaires sur [a ; b] ?",
              options: ["f continue et strictement monotone", "f dérivable et positive sur [a ; b]", "f croissante et majorée", "f(a) et f(b) de même signe"],
              answer: 0,
              why: "Avec f continue et strictement monotone sur [a ; b], toute valeur comprise entre f(a) et f(b) est atteinte une seule fois.",
            },
            {
              q: "Dans un raisonnement par récurrence, l'hérédité consiste à :",
              options: ["vérifier P(n₀) au premier rang", "montrer que P(n) implique P(n + 1)", "supposer P(n) vraie pour tout entier n", "calculer les premiers termes de la suite"],
              answer: 1,
              why: "On suppose P(n) vraie pour un entier n fixé et l'on démontre P(n + 1).",
            },
            {
              q: "Il vous reste 200 minutes pour quatre exercices de même barème. Combien de temps prévoir par exercice ?",
              options: ["40 min", "45 min", "50 min", "60 min"],
              answer: 2,
              why: "200/4 = 50 minutes par exercice.",
            },
            {
              q: "Lequel de ces résultats est forcément faux ?",
              options: ["P(A) = 0,97", "Une aire de -3 u.a.", "Une limite égale à +∞", "Une variance égale à 2,5"],
              answer: 1,
              why: "Une aire est toujours positive : un résultat négatif signale une erreur (souvent un ordre de soustraction inversé).",
            },
            {
              q: "Écrire « A, donc B » signifie que :",
              options: ["B découle de A", "A découle de B", "A et B sont sans lien", "A et B sont fausses"],
              answer: 0,
              why: "« Donc » introduit une conséquence : B est déduit de A.",
            },
          ],
          trap: "Écrire le bon résultat sans citer le théorème ni vérifier ses hypothèses, par exemple « la suite est croissante donc elle converge » : la réponse paraît juste à l'élève, mais elle est fausse en général et perd l'essentiel des points.",
          method: "Pendant l'année, rédigez chaque exercice comme le jour du bac, puis comparez avec un corrigé en soulignant ce qui vous manquait (hypothèse, nom du théorème, phrase de conclusion). Faites au moins un sujet complet en quatre heures chronométrées avant l'épreuve.",
        },
      ],
    },
  ],
}
