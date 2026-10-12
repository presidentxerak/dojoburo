import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-comp-tle',
  chapters: [
    /* ================================================================== */
    /* PRIMITIVES ET ÉQUATIONS DIFFÉRENTIELLES                              */
    /* ================================================================== */
    {
      id: 'primitives-equations-differentielles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'primitives',
          title: 'Primitives',
          minutes: 30,
          objectives: [
            "Définir une primitive d'une fonction sur un intervalle et vérifier, en dérivant, qu'une fonction donnée est une primitive.",
            "Déterminer des primitives des fonctions usuelles et d'une somme de fonctions, à l'aide du tableau des primitives.",
            "Reconnaître les formes u'eᵘ, u'/u et u'uⁿ pour calculer une primitive.",
            "Déterminer la primitive qui prend une valeur donnée en un point et l'interpréter dans un modèle (coût total, effectif d'une population).",
          ],
          course: [
            {
              heading: "Remonter de la dérivée à la fonction",
              paragraphs: [
                "Jusqu'ici, on partait d'une fonction F pour calculer sa dérivée F'. On se pose maintenant la question inverse : connaissant une fonction f, peut-on trouver une fonction F dont la dérivée est f ? Une telle fonction s'appelle une primitive de f. Par exemple, F(x) = x³ est une primitive de f(x) = 3x² sur ℝ, puisque (x³)' = 3x².",
                "Cette question est naturelle dans les modèles. En physique, si l'on connaît la vitesse v(t) d'un mobile, sa position x(t) vérifie x'(t) = v(t) : la position est une primitive de la vitesse. En économie, le coût marginal Cm(q) est la dérivée du coût total C(q) : le coût total est une primitive du coût marginal. En biologie, l'effectif d'une population est une primitive de sa vitesse de croissance.",
                "Pour vérifier qu'une fonction F est une primitive de f, il suffit donc de dériver F et de constater que l'on retrouve f. C'est un réflexe à garder : toute primitive trouvée se contrôle en dérivant.",
              ],
              box: { label: "Définition", text: "Soit f une fonction définie sur un intervalle I. On appelle primitive de f sur I toute fonction F dérivable sur I telle que, pour tout x de I, F'(x) = f(x)." },
            },
            {
              heading: "Une infinité de primitives, une seule par condition initiale",
              paragraphs: [
                "On admet que toute fonction continue sur un intervalle I admet des primitives sur I. Mais il n'y en a jamais une seule : x³, x³ + 5 et x³ - 2 ont toutes pour dérivée 3x², car la dérivée d'une constante est nulle. Si F est une primitive de f sur I, les primitives de f sur I sont exactement les fonctions x ↦ F(x) + C, où C est une constante réelle.",
                "Pour choisir une primitive parmi toutes, on impose une condition, appelée condition initiale : la valeur en un point. Par exemple, les primitives de f(x) = 2x sur ℝ sont les fonctions x² + C. Celle qui vaut 5 en x = 1 vérifie 1² + C = 5, donc C = 4 : c'est F(x) = x² + 4. Dans un modèle, la constante a souvent un sens concret : les coûts fixes (coût pour q = 0), la position de départ, l'effectif initial.",
              ],
              box: { label: "Propriété", text: "Si F est une primitive de f sur l'intervalle I, alors les primitives de f sur I sont les fonctions x ↦ F(x) + C, avec C réel. Pour tout x₀ de I et tout réel y₀, il existe une unique primitive G de f sur I telle que G(x₀) = y₀." },
            },
            {
              heading: "Le tableau des primitives usuelles",
              paragraphs: [
                "En lisant le tableau des dérivées à l'envers, on obtient les primitives des fonctions de référence. Une constante k a pour primitive kx. Pour n entier naturel, xⁿ a pour primitive xⁿ⁺¹/(n + 1) : par exemple x a pour primitive x²/2 et x² a pour primitive x³/3. Sur ]0 ; +∞[, 1/x² a pour primitive -1/x, 1/√x a pour primitive 2√x et 1/x a pour primitive ln x. Sur ℝ, eˣ a pour primitive eˣ et, pour a ≠ 0, e^(ax) a pour primitive (1/a)e^(ax).",
                "Les primitives se calculent terme à terme, comme les dérivées : si F et G sont des primitives de f et g, et k un réel, alors F + G est une primitive de f + g et kF une primitive de kf. Ainsi, f(x) = 6x² - 4x + 5 a pour primitive F(x) = 6 × x³/3 - 4 × x²/2 + 5x = 2x³ - 2x² + 5x.",
                "Attention au facteur 1/a dans la primitive de e^(ax) : la dérivée de e^(3x) est 3e^(3x), donc une primitive de e^(3x) est (1/3)e^(3x), et non e^(3x). On vérifie toujours en dérivant.",
              ],
              box: { label: "Formule", text: "f(x) = k : F(x) = kx. f(x) = xⁿ (n entier ≥ 0) : F(x) = xⁿ⁺¹/(n + 1). f(x) = 1/x² : F(x) = -1/x. f(x) = 1/√x : F(x) = 2√x. f(x) = 1/x : F(x) = ln x (sur ]0 ; +∞[). f(x) = eˣ : F(x) = eˣ. f(x) = e^(ax) : F(x) = (1/a)e^(ax)." },
            },
            {
              heading: "Reconnaître une dérivée de fonction composée",
              paragraphs: [
                "Certaines fonctions sont la dérivée d'une composée. Si u est une fonction dérivable, on sait que (eᵘ)' = u'eᵘ, que (ln u)' = u'/u lorsque u > 0, et que (uⁿ⁺¹)' = (n + 1)u'uⁿ. En lisant ces formules à l'envers, on obtient trois formes à reconnaître : u'eᵘ a pour primitive eᵘ, u'/u a pour primitive ln u (si u > 0) et u'uⁿ a pour primitive uⁿ⁺¹/(n + 1).",
                "Exemples : f(x) = 2x e^(x²) est de la forme u'eᵘ avec u(x) = x², donc F(x) = e^(x²). La fonction g(x) = 2x/(x² + 1) est de la forme u'/u avec u(x) = x² + 1 > 0, donc G(x) = ln(x² + 1). La fonction h(x) = 3(3x + 1)⁴ est de la forme u'u⁴ avec u(x) = 3x + 1, donc H(x) = (3x + 1)⁵/5.",
                "Souvent, il manque une constante multiplicative : on l'ajuste. Pour k(x) = x/(x² + 1), on écrit k(x) = ½ × 2x/(x² + 1), d'où une primitive ½ ln(x² + 1). On ne peut ajuster ainsi qu'une constante, jamais une expression contenant x.",
              ],
              box: { label: "À retenir", text: "u'eᵘ a pour primitive eᵘ. u'/u a pour primitive ln u lorsque u > 0. u'uⁿ a pour primitive uⁿ⁺¹/(n + 1). Repérez u, calculez u', puis ajustez le coefficient constant si besoin, et vérifiez en dérivant." },
            },
          ],
          keyPoints: [
            "F est une primitive de f sur I si F est dérivable sur I et F' = f.",
            "Deux primitives d'une même fonction sur un intervalle diffèrent d'une constante : F(x) + C.",
            "Une condition initiale (valeur en un point) fixe la constante et donne une primitive unique.",
            "Primitives usuelles : xⁿ donne xⁿ⁺¹/(n + 1), 1/x donne ln x (x > 0), eˣ donne eˣ, e^(ax) donne (1/a)e^(ax).",
            "Formes composées : u'eᵘ donne eᵘ, u'/u donne ln u (u > 0), u'uⁿ donne uⁿ⁺¹/(n + 1).",
            "Dans un modèle, le coût total est une primitive du coût marginal, la constante étant les coûts fixes.",
            "Toute primitive se vérifie en la dérivant.",
          ],
          example: {
            statement: "Une entreprise fabrique q objets par jour (q entre 0 et 50). Son coût marginal, en euros, est modélisé par Cm(q) = 0,03q² - 1,2q + 20, et ses coûts fixes s'élèvent à 500 euros (données fictives). Le coût total C vérifie C'(q) = Cm(q) et C(0) = 500. Déterminer C(q), puis le coût total de production de 30 objets.",
            solution: [
              "Le coût total C est la primitive de Cm sur [0 ; 50] qui vaut 500 en 0.",
              "Primitives de Cm, terme à terme : 0,03 × q³/3 - 1,2 × q²/2 + 20q + K = 0,01q³ - 0,6q² + 20q + K, avec K réel.",
              "Condition initiale : C(0) = K = 500. Donc C(q) = 0,01q³ - 0,6q² + 20q + 500.",
              "Vérification : C'(q) = 0,03q² - 1,2q + 20 = Cm(q).",
              "C(30) = 0,01 × 27 000 - 0,6 × 900 + 20 × 30 + 500 = 270 - 540 + 600 + 500 = 830.",
              "Le coût total de production de 30 objets est de 830 euros.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminer une primitive de chacune des fonctions suivantes sur ]0 ; +∞[ : a) f(x) = 4x³ - 6x + 1 ; b) g(x) = 3/x + 2eˣ ; c) h(x) = 1/x² + e^(2x).",
              hint: "Utilisez le tableau des primitives usuelles terme à terme, sans oublier le facteur 1/a pour e^(ax).",
              solution: [
                "a) 4x³ a pour primitive 4 × x⁴/4 = x⁴, -6x a pour primitive -6 × x²/2 = -3x², et 1 a pour primitive x. Donc F(x) = x⁴ - 3x² + x.",
                "Vérification : F'(x) = 4x³ - 6x + 1 = f(x).",
                "b) 3/x = 3 × 1/x a pour primitive 3 ln x sur ]0 ; +∞[, et 2eˣ a pour primitive 2eˣ. Donc G(x) = 3 ln x + 2eˣ.",
                "c) 1/x² a pour primitive -1/x et e^(2x) a pour primitive ½e^(2x). Donc H(x) = -1/x + ½e^(2x).",
                "Vérification : H'(x) = 1/x² + ½ × 2e^(2x) = 1/x² + e^(2x) = h(x).",
              ],
            },
            {
              level: 2,
              statement: "1. Déterminer une primitive sur ℝ de f(x) = (2x + 1)e^(x² + x). 2. Déterminer la primitive G sur ℝ de g(x) = 6x/(3x² + 2) qui s'annule en 0.",
              hint: "Dans chaque cas, repérez une fonction u dont la dérivée apparaît en facteur, puis reconnaissez la forme u'eᵘ ou u'/u.",
              solution: [
                "1. On pose u(x) = x² + x. Alors u'(x) = 2x + 1 et f = u'eᵘ. Une primitive de f est F(x) = e^(x² + x).",
                "Vérification : F'(x) = (2x + 1)e^(x² + x) = f(x).",
                "2. On pose u(x) = 3x² + 2. Alors u'(x) = 6x et, pour tout réel x, u(x) ≥ 2 > 0. Donc g = u'/u et les primitives de g sont x ↦ ln(3x² + 2) + C.",
                "Condition G(0) = 0 : ln(2) + C = 0, donc C = -ln 2.",
                "G(x) = ln(3x² + 2) - ln 2, que l'on peut aussi écrire G(x) = ln((3x² + 2)/2).",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). On étudie une culture de bactéries entre t = 0 et t = 10 (t en heures). Sa vitesse de croissance, en milliers de bactéries par heure, est modélisée par v(t) = 6e^(0,2t) (données fictives). On note N(t) l'effectif de la culture, en milliers, de sorte que N'(t) = v(t), et l'on sait que N(0) = 50. 1. Justifier que N est croissante sur [0 ; 10]. 2. Déterminer N(t). 3. Calculer l'effectif au bout de 10 heures, arrondi au millier. 4. Déterminer, à la minute près, l'instant à partir duquel l'effectif dépasse 100 milliers de bactéries.",
              hint: "N est la primitive de v qui vaut 50 en 0. Pour la question 4, isolez l'exponentielle, puis appliquez la fonction ln, qui est strictement croissante.",
              solution: [
                "1. Pour tout t de [0 ; 10], N'(t) = 6e^(0,2t) > 0, car une exponentielle est strictement positive. Donc N est strictement croissante sur [0 ; 10].",
                "2. Une primitive de e^(0,2t) est (1/0,2)e^(0,2t) = 5e^(0,2t). Les primitives de v sont donc t ↦ 30e^(0,2t) + K.",
                "N(0) = 30 + K = 50, d'où K = 20 et N(t) = 30e^(0,2t) + 20. Vérification : N'(t) = 30 × 0,2 e^(0,2t) = 6e^(0,2t).",
                "3. N(10) = 30e² + 20 ≈ 30 × 7,389 + 20 ≈ 241,7. Au bout de 10 heures, la culture compte environ 242 milliers de bactéries.",
                "4. N(t) > 100 équivaut à 30e^(0,2t) > 80, soit e^(0,2t) > 8/3, soit 0,2t > ln(8/3) (ln est strictement croissante), soit t > 5 ln(8/3).",
                "5 ln(8/3) ≈ 4,904 h, et 0,904 h ≈ 54 min. L'effectif dépasse 100 milliers à partir d'environ 4 h 54 min.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque fonction (à gauche) à l'une de ses primitives (à droite).",
            pairs: [
              { left: "3x²", right: "x³" },
              { left: "1/x, sur ]0 ; +∞[", right: "ln x" },
              { left: "e^(3x)", right: "(1/3)e^(3x)" },
              { left: "2x e^(x²)", right: "e^(x²)" },
              { left: "1/x², sur ]0 ; +∞[", right: "-1/x" },
              { left: "1/√x, sur ]0 ; +∞[", right: "2√x" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces fonctions est une primitive de f(x) = 4x³ sur ℝ ?",
              options: ["12x²", "x⁴ - 2", "4x⁴ + 1", "x⁴/4"],
              answer: 1,
              why: "La dérivée de x⁴ - 2 est 4x³. La constante -2 ne change rien, puisque sa dérivée est nulle.",
            },
            {
              q: "F et G sont deux primitives de la même fonction f sur un intervalle I. Que peut-on affirmer ?",
              options: ["F = G sur I", "F × G est constante sur I", "F + G = f sur I", "F - G est constante sur I"],
              answer: 3,
              why: "(F - G)' = f - f = 0 sur un intervalle, donc F - G est constante : deux primitives diffèrent d'une constante.",
            },
            {
              q: "Une primitive de e^(5x) sur ℝ est :",
              options: ["(1/5)e^(5x)", "5e^(5x)", "e^(5x)", "e^(6x)/6"],
              answer: 0,
              why: "La dérivée de (1/5)e^(5x) est (1/5) × 5e^(5x) = e^(5x). Le facteur 1/a compense le coefficient a qui apparaît en dérivant.",
            },
            {
              q: "Une primitive de 2x/(x² + 4) sur ℝ est :",
              options: ["1/(x² + 4)", "ln(2x)", "ln(x² + 4)", "x²/(x³/3 + 4x)"],
              answer: 2,
              why: "C'est la forme u'/u avec u(x) = x² + 4 > 0 et u'(x) = 2x, dont une primitive est ln u.",
            },
            {
              q: "La primitive de f(x) = 2x sur ℝ qui vaut 3 en x = 1 est :",
              options: ["x² + 3", "x² + 2", "x² - 2", "2x² + 1"],
              answer: 1,
              why: "Les primitives sont x² + C ; la condition 1² + C = 3 donne C = 2.",
            },
          ],
          trap: "Oublier le facteur 1/a dans la primitive de e^(ax) (écrire e^(3x) comme primitive de e^(3x)), ou ajuster une forme u'/u en divisant par une expression contenant x : seul un coefficient constant peut être ajusté.",
          method: "Après chaque calcul de primitive, dérivez votre résultat au brouillon : si vous ne retrouvez pas exactement la fonction de départ, corrigez le coefficient ou la forme choisie avant d'aller plus loin.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'equations-differentielles',
          title: 'Équations différentielles y\' = ay + b',
          minutes: 35,
          objectives: [
            "Vérifier qu'une fonction donnée est solution d'une équation différentielle.",
            "Résoudre les équations différentielles y' = ay et y' = ay + b, avec a réel non nul et b réel.",
            "Déterminer la solution qui vérifie une condition initiale donnée.",
            "Modéliser une évolution (refroidissement, élimination d'un médicament, croissance d'une population) par une équation différentielle et interpréter sa solution.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une équation différentielle ?",
              paragraphs: [
                "Une équation différentielle est une équation dont l'inconnue est une fonction, notée y, et qui relie cette fonction à sa dérivée y'. Résoudre l'équation y' = ay + b sur ℝ, c'est trouver toutes les fonctions f dérivables sur ℝ telles que, pour tout réel x, f'(x) = a f(x) + b.",
                "Pour vérifier qu'une fonction est solution, on calcule les deux membres séparément. Par exemple, f(x) = 3e^(2x) est solution de y' = 2y : d'un côté f'(x) = 6e^(2x), de l'autre 2f(x) = 6e^(2x). Les deux membres sont égaux pour tout x.",
                "Ces équations sont au cœur de la modélisation, car elles décrivent une évolution par sa vitesse. Dire qu'une population croît à une vitesse proportionnelle à son effectif s'écrit N' = kN. Dire qu'un médicament est éliminé à une vitesse proportionnelle à la quantité présente, tout en étant perfusé à débit constant, s'écrit Q' = -kQ + d.",
              ],
              box: { label: "Définition", text: "Une fonction f dérivable sur ℝ est solution de l'équation différentielle y' = ay + b si, pour tout réel x, f'(x) = a f(x) + b." },
            },
            {
              heading: "L'équation y' = ay",
              paragraphs: [
                "Les solutions de y' = ay sont les fonctions x ↦ Ce^(ax), où C est une constante réelle quelconque. On vérifie facilement qu'elles conviennent : la dérivée de Ce^(ax) est aCe^(ax), qui est bien a fois la fonction. On admet qu'il n'y en a pas d'autres.",
                "Parmi toutes ces solutions, une seule prend une valeur donnée y₀ en 0 : c'est x ↦ y₀e^(ax), car en x = 0 on obtient C = y₀. Par exemple, si une population de 2 000 individus vérifie N' = 0,05N (t en années), alors N(t) = 2 000e^(0,05t).",
                "Le signe de a gouverne le comportement : si a > 0, les solutions non nulles explosent (croissance exponentielle) ; si a < 0, elles tendent vers 0 en +∞ (décroissance exponentielle, comme la désintégration radioactive).",
              ],
              box: { label: "Propriété", text: "Soit a un réel. Les solutions sur ℝ de y' = ay sont les fonctions x ↦ Ce^(ax), C réel. Pour tout réel y₀, il existe une unique solution telle que y(0) = y₀ : c'est x ↦ y₀e^(ax)." },
            },
            {
              heading: "L'équation y' = ay + b, avec a ≠ 0",
              paragraphs: [
                "On cherche d'abord une solution constante y = k. Sa dérivée est nulle, donc 0 = ak + b, soit k = -b/a. Cette solution constante est aussi appelée solution d'équilibre : si la grandeur vaut -b/a, elle n'évolue plus.",
                "Les solutions de y' = ay + b sont alors les fonctions x ↦ Ce^(ax) - b/a, avec C réel : ce sont les solutions de y' = ay auxquelles on ajoute la solution constante. Une condition initiale y(x₀) = y₀ détermine C de façon unique.",
                "Si a < 0, e^(ax) tend vers 0 quand x tend vers +∞, donc toutes les solutions tendent vers -b/a : quel que soit l'état de départ, le système se stabilise vers l'équilibre. Par exemple, pour y' = -0,5y + 3, l'équilibre est -3/(-0,5) = 6, et toutes les solutions tendent vers 6.",
              ],
              box: { label: "Propriété", text: "Soit a ≠ 0 et b deux réels. Les solutions sur ℝ de y' = ay + b sont les fonctions x ↦ Ce^(ax) - b/a, C réel. La fonction constante égale à -b/a est la solution d'équilibre. Si a < 0, toute solution tend vers -b/a en +∞." },
            },
            {
              heading: "Modéliser : refroidissement et médicament",
              paragraphs: [
                "La loi de refroidissement de Newton affirme que la vitesse de refroidissement d'un objet est proportionnelle à l'écart entre sa température θ et celle du milieu ambiant. Dans une pièce à 20 °C, cela s'écrit θ' = -k(θ - 20), avec k > 0, soit θ' = -kθ + 20k. L'équilibre est 20 °C : l'objet finit à la température de la pièce.",
                "Par exemple, avec k = 0,1 par minute et une tasse à 80 °C au départ (données fictives), on obtient θ(t) = Ce^(-0,1t) + 20 et θ(0) = C + 20 = 80, donc θ(t) = 60e^(-0,1t) + 20. Au bout de 10 minutes, θ(10) = 60e^(-1) + 20 ≈ 42 °C.",
                "De même, un patient perfusé reçoit un médicament au débit constant de 4 mg par heure, et son organisme en élimine 20 % par heure : la quantité Q(t) vérifie Q' = -0,2Q + 4 (données fictives). L'équilibre est -4/(-0,2) = 20 mg : la quantité de médicament se stabilise vers 20 mg.",
              ],
              box: { label: "À retenir", text: "Méthode : 1. écrire l'équation sous la forme y' = ay + b ; 2. calculer l'équilibre -b/a ; 3. écrire y(x) = Ce^(ax) - b/a ; 4. trouver C avec la condition initiale ; 5. interpréter, en particulier la limite si a < 0." },
            },
          ],
          keyPoints: [
            "Solutions de y' = ay : x ↦ Ce^(ax), C réel.",
            "Solutions de y' = ay + b (a ≠ 0) : x ↦ Ce^(ax) - b/a, C réel.",
            "La solution constante -b/a est l'équilibre ; si a < 0, toutes les solutions tendent vers -b/a en +∞.",
            "Une condition initiale y(x₀) = y₀ donne une unique solution : on la traduit par une équation d'inconnue C.",
            "Loi de Newton : θ' = -k(θ - θₐ), la température tend vers celle du milieu θₐ.",
            "Pour vérifier une solution, on calcule séparément f'(x) et a f(x) + b.",
          ],
          example: {
            statement: "Résoudre l'équation différentielle y' = -0,5y + 3, puis déterminer la solution f telle que f(0) = 2 et sa limite en +∞.",
            solution: [
              "L'équation est de la forme y' = ay + b avec a = -0,5 et b = 3.",
              "Solution constante : -b/a = -3/(-0,5) = 6.",
              "Les solutions sont les fonctions x ↦ Ce^(-0,5x) + 6, avec C réel.",
              "Condition initiale : f(0) = C + 6 = 2, donc C = -4 et f(x) = 6 - 4e^(-0,5x).",
              "Vérification : f'(x) = 2e^(-0,5x) et -0,5f(x) + 3 = -3 + 2e^(-0,5x) + 3 = 2e^(-0,5x).",
              "Comme -0,5 < 0, e^(-0,5x) tend vers 0 en +∞, donc f(x) tend vers 6, la valeur d'équilibre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Résoudre sur ℝ l'équation différentielle y' = 3y. 2. Déterminer la solution f telle que f(0) = 5. 3. Vérifier que g(x) = -2e^(3x) est solution de cette équation.",
              hint: "Appliquez directement le cours : les solutions de y' = ay sont les fonctions Ce^(ax).",
              solution: [
                "1. Ici a = 3 : les solutions sont les fonctions x ↦ Ce^(3x), avec C réel.",
                "2. f(0) = Ce⁰ = C = 5, donc f(x) = 5e^(3x).",
                "3. g'(x) = -2 × 3e^(3x) = -6e^(3x) et 3g(x) = 3 × (-2e^(3x)) = -6e^(3x).",
                "Pour tout réel x, g'(x) = 3g(x) : g est solution (c'est le cas C = -2).",
              ],
            },
            {
              level: 2,
              statement: "Résoudre sur ℝ l'équation différentielle y' = 2y - 8, puis déterminer la solution h telle que h(0) = 1. Étudier le comportement de h en +∞.",
              hint: "Identifiez a = 2 et b = -8, calculez la solution constante -b/a, puis utilisez la condition initiale.",
              solution: [
                "L'équation est de la forme y' = ay + b avec a = 2 et b = -8. Solution constante : -b/a = 8/2 = 4.",
                "Les solutions sont les fonctions x ↦ Ce^(2x) + 4, avec C réel.",
                "h(0) = C + 4 = 1, donc C = -3 et h(x) = -3e^(2x) + 4.",
                "Vérification : h'(x) = -6e^(2x) et 2h(x) - 8 = -6e^(2x) + 8 - 8 = -6e^(2x).",
                "Comme a = 2 > 0, e^(2x) tend vers +∞ en +∞, donc h(x) = 4 - 3e^(2x) tend vers -∞ : la solution s'éloigne de l'équilibre 4.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Un gâteau sort du four à 180 °C et refroidit dans une pièce dont la température reste égale à 20 °C. On admet que sa température θ(t), en °C, t en minutes, vérifie θ' = -0,04(θ - 20) (données fictives). 1. Écrire cette équation sous la forme θ' = aθ + b. 2. Déterminer l'expression de θ(t). 3. Déterminer la limite de θ en +∞ et l'interpréter. 4. On peut démouler le gâteau lorsque sa température est inférieure ou égale à 40 °C. Au bout de combien de minutes, à la minute près, peut-on le démouler ?",
              hint: "Développez -0,04(θ - 20). Pour la dernière question, isolez e^(-0,04t), appliquez ln et faites attention au sens de l'inégalité quand vous divisez par un nombre négatif.",
              solution: [
                "1. θ' = -0,04θ + 0,8 : a = -0,04 et b = 0,8.",
                "2. Solution constante : -b/a = -0,8/(-0,04) = 20. Les solutions sont θ(t) = Ce^(-0,04t) + 20. Avec θ(0) = C + 20 = 180, on obtient C = 160, donc θ(t) = 160e^(-0,04t) + 20.",
                "3. Comme -0,04 < 0, e^(-0,04t) tend vers 0, donc θ(t) tend vers 20 : la température du gâteau se rapproche de celle de la pièce.",
                "4. θ(t) ≤ 40 équivaut à 160e^(-0,04t) ≤ 20, soit e^(-0,04t) ≤ 1/8, soit -0,04t ≤ ln(1/8) = -ln 8.",
                "En divisant par -0,04 < 0, on change le sens : t ≥ ln 8/0,04 = 25 ln 8 ≈ 51,99.",
                "On peut démouler le gâteau au bout de 52 minutes environ.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution de y' = ay + b avec une condition initiale.",
            items: [
              "Identifier a et b dans l'équation écrite sous la forme y' = ay + b.",
              "Calculer la solution constante -b/a.",
              "Écrire les solutions générales y(x) = Ce^(ax) - b/a.",
              "Traduire la condition initiale par une équation d'inconnue C.",
              "Résoudre cette équation pour trouver la valeur de C.",
              "Vérifier en dérivant que la fonction obtenue est solution et respecte la condition initiale.",
            ],
          },
          quiz: [
            {
              q: "Quelles sont les solutions sur ℝ de y' = -2y ?",
              options: ["x ↦ -2eˣ + C", "x ↦ Ce^(2x)", "x ↦ Ce^(-2x)", "x ↦ Ce^(-x/2)"],
              answer: 2,
              why: "Les solutions de y' = ay sont x ↦ Ce^(ax) ; ici a = -2.",
            },
            {
              q: "Quelle est la solution constante de y' = 4y - 12 ?",
              options: ["y = 3", "y = -3", "y = 12", "y = 4"],
              answer: 0,
              why: "Une constante k a une dérivée nulle : 0 = 4k - 12, donc k = 3 (c'est -b/a = 12/4).",
            },
            {
              q: "On suppose a < 0. Vers quoi tend toute solution de y' = ay + b en +∞ ?",
              options: ["+∞", "0", "b/a", "-b/a"],
              answer: 3,
              why: "y(x) = Ce^(ax) - b/a et e^(ax) tend vers 0 lorsque a < 0 : il reste l'équilibre -b/a.",
            },
            {
              q: "Combien de solutions de y' = 0,3y + 1 vérifient y(0) = 7 ?",
              options: ["Aucune", "Une seule", "Deux", "Une infinité"],
              answer: 1,
              why: "La condition initiale fixe la constante C de façon unique.",
            },
            {
              q: "Que traduit la loi de Newton θ' = -k(θ - 20), avec k > 0 ?",
              options: ["La vitesse de refroidissement est proportionnelle à l'écart θ - 20", "La température baisse de k degrés chaque minute, quelle que soit sa valeur", "La température tend vers 0 °C", "La température reste constante"],
              answer: 0,
              why: "θ' est la vitesse de variation de la température ; elle est proportionnelle à l'écart avec la pièce, et ce refroidissement ralentit quand l'écart diminue.",
            },
          ],
          trap: "Écrire les solutions de y' = ay + b sous la forme Ce^(ax) + b/a au lieu de Ce^(ax) - b/a, ou utiliser la condition initiale avant d'avoir ajouté la solution constante.",
          method: "Calculez toujours la solution d'équilibre -b/a en premier et vérifiez qu'elle annule ay + b. Une fois la solution trouvée, contrôlez la condition initiale en remplaçant x par x₀.",
        },
      ],
    },

    /* ================================================================== */
    /* CALCUL INTÉGRAL                                                      */
    /* ================================================================== */
    {
      id: 'calcul-integral',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'integrale-aire',
          title: 'Intégrale et aire sous une courbe',
          minutes: 35,
          objectives: [
            "Interpréter l'intégrale d'une fonction continue et positive comme une aire sous une courbe, en unités d'aire.",
            "Calculer une intégrale à l'aide d'une primitive : ∫ₐᵇ f(x) dx = F(b) - F(a).",
            "Utiliser la linéarité, la positivité et la relation de Chasles.",
            "Calculer l'aire d'un domaine compris entre deux courbes et interpréter une intégrale dans un contexte (distance, volume, indice de Gini).",
          ],
          course: [
            {
              heading: "L'aire sous une courbe",
              paragraphs: [
                "Dans un repère orthogonal, l'unité d'aire (u.a.) est l'aire du rectangle construit sur les deux vecteurs unités. Soit f une fonction continue et positive sur un intervalle [a ; b]. Le domaine situé sous la courbe de f est l'ensemble des points M(x ; y) tels que a ≤ x ≤ b et 0 ≤ y ≤ f(x) : il est limité par la courbe, l'axe des abscisses et les droites d'équations x = a et x = b.",
                "L'aire de ce domaine, exprimée en unités d'aire, s'appelle l'intégrale de f de a à b et se note ∫ₐᵇ f(x) dx (on lit « intégrale de a à b de f(x) dx » ; les bornes sont écrites en indice et en exposant). La lettre x est muette : ∫ₐᵇ f(x) dx = ∫ₐᵇ f(t) dt.",
                "Dans les cas simples, on calcule l'aire par géométrie. Pour f(x) = 2 sur [1 ; 4], le domaine est un rectangle : ∫₁⁴ 2 dx = 3 × 2 = 6. Pour f(x) = x sur [0 ; 2], c'est un triangle rectangle : ∫₀² x dx = (2 × 2)/2 = 2. Pour une courbe quelconque, on peut approcher l'aire par une somme de rectangles étroits, ce que fait un algorithme ou la calculatrice.",
              ],
              box: { label: "Définition", text: "Si f est continue et positive sur [a ; b], ∫ₐᵇ f(x) dx est l'aire, en unités d'aire, du domaine limité par la courbe de f, l'axe des abscisses et les droites d'équations x = a et x = b." },
            },
            {
              heading: "Calculer une intégrale avec une primitive",
              paragraphs: [
                "Le théorème fondamental relie l'aire aux primitives : si F est une primitive de f sur [a ; b], alors ∫ₐᵇ f(x) dx = F(b) - F(a). On note ce calcul [F(x)]ₐᵇ. Le résultat ne dépend pas de la primitive choisie, car la constante C s'élimine dans la différence.",
                "Exemple : ∫₀³ x² dx = [x³/3]₀³ = 27/3 - 0 = 9. L'aire sous la parabole entre 0 et 3 vaut donc 9 unités d'aire.",
                "Pour une fonction continue de signe quelconque, on définit encore ∫ₐᵇ f(x) dx = F(b) - F(a). Si f est négative sur [a ; b], l'intégrale est négative et l'aire du domaine compris entre la courbe et l'axe vaut -∫ₐᵇ f(x) dx. Par exemple, ∫₀¹ (-x) dx = [-x²/2]₀¹ = -½ : l'aire du triangle, situé sous l'axe, vaut ½ u.a.",
              ],
              box: { label: "Propriété", text: "Si f est continue sur [a ; b] et si F est une primitive de f sur [a ; b], alors ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a)." },
            },
            {
              heading: "Propriétés de l'intégrale",
              paragraphs: [
                "Linéarité : ∫ₐᵇ (f(x) + g(x)) dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx et ∫ₐᵇ k f(x) dx = k ∫ₐᵇ f(x) dx pour tout réel k. En revanche, l'intégrale d'un produit n'est pas le produit des intégrales : ∫₀¹ x × x dx = 1/3, alors que (∫₀¹ x dx)² = 1/4.",
                "Relation de Chasles : pour tous réels a, b, c de l'intervalle, l'intégrale de a à c est la somme de l'intégrale de a à b et de l'intégrale de b à c. Par exemple, ∫₀⁵ f(x) dx = ∫₀² f(x) dx + ∫₂⁵ f(x) dx. Elle permet de découper un domaine en morceaux, par exemple là où f change de signe.",
                "Positivité et ordre : si a ≤ b et f ≥ 0 sur [a ; b], alors ∫ₐᵇ f(x) dx ≥ 0 ; si f ≤ g sur [a ; b], alors ∫ₐᵇ f(x) dx ≤ ∫ₐᵇ g(x) dx. On en déduit l'aire entre deux courbes : si f ≥ g sur [a ; b], l'aire du domaine compris entre les deux courbes et les droites x = a et x = b vaut ∫ₐᵇ (f(x) - g(x)) dx.",
              ],
              box: { label: "À retenir", text: "Linéarité, relation de Chasles, positivité (si a ≤ b et f ≥ 0, alors l'intégrale est positive). Aire entre deux courbes, lorsque f ≥ g sur [a ; b] : ∫ₐᵇ (f(x) - g(x)) dx, la courbe du dessus moins celle du dessous." },
            },
            {
              heading: "Interpréter une intégrale dans un contexte",
              paragraphs: [
                "Lorsque f est un taux de variation, son intégrale donne la variation totale de la grandeur. Si v(t) est une vitesse en m/s, ∫ₐᵇ v(t) dt est la distance parcourue entre les instants a et b, en mètres. Si d(t) est un débit en litres par minute, son intégrale est le volume écoulé, en litres. Si Cm est un coût marginal, l'intégrale de 0 à q de Cm(x) dx est le coût variable de production des q premières unités.",
                "En économie, la courbe de Lorenz L décrit la répartition des revenus : L(x) est la part du revenu total détenue par la proportion x des ménages les moins aisés. La droite y = x correspond à l'égalité parfaite. Le coefficient de Gini est égal à deux fois l'aire comprise entre la droite y = x et la courbe de Lorenz sur [0 ; 1] : il vaut 0 en cas d'égalité parfaite, et il est d'autant plus proche de 1 que la répartition est inégalitaire.",
              ],
              box: { label: "Repère", text: "L'unité d'une intégrale est le produit de l'unité de f par celle de x : une vitesse en km/h intégrée sur des heures donne des kilomètres ; un débit en L/min intégré sur des minutes donne des litres." },
            },
          ],
          keyPoints: [
            "Pour f continue et positive, ∫ₐᵇ f(x) dx est l'aire sous la courbe entre a et b, en unités d'aire.",
            "∫ₐᵇ f(x) dx = F(b) - F(a), où F est une primitive quelconque de f.",
            "Si f est négative sur [a ; b], l'intégrale est négative et l'aire vaut son opposé.",
            "Linéarité et relation de Chasles ; mais l'intégrale d'un produit n'est pas le produit des intégrales.",
            "Aire entre deux courbes, si f ≥ g sur [a ; b] : ∫ₐᵇ (f(x) - g(x)) dx.",
            "L'intégrale d'un taux (vitesse, débit, coût marginal) donne une quantité totale.",
          ],
          example: {
            statement: "On considère la fonction f définie sur [0 ; 4] par f(x) = -x² + 4x. Le repère a pour unités 1 cm sur chaque axe. Calculer l'aire, en cm², du domaine limité par la courbe de f, l'axe des abscisses et les droites x = 0 et x = 4.",
            solution: [
              "Signe de f : f(x) = x(4 - x). Sur [0 ; 4], x ≥ 0 et 4 - x ≥ 0, donc f(x) ≥ 0. L'aire cherchée est donc ∫₀⁴ f(x) dx.",
              "Une primitive de f est F(x) = -x³/3 + 2x² (vérification : F'(x) = -x² + 4x).",
              "∫₀⁴ f(x) dx = F(4) - F(0) = (-64/3 + 32) - 0 = (-64 + 96)/3 = 32/3.",
              "L'unité d'aire vaut 1 cm × 1 cm = 1 cm².",
              "L'aire du domaine vaut 32/3 cm², soit environ 10,67 cm².",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer les intégrales suivantes : a) I = ∫₁³ (2x + 1) dx ; b) J = ∫₀¹ eˣ dx ; c) K = ∫₁ᵉ (1/x) dx.",
              hint: "Cherchez une primitive de chaque fonction, puis calculez F(borne du haut) - F(borne du bas).",
              solution: [
                "a) Une primitive de 2x + 1 est x² + x. I = (3² + 3) - (1² + 1) = 12 - 2 = 10.",
                "b) Une primitive de eˣ est eˣ. J = e¹ - e⁰ = e - 1 ≈ 1,718.",
                "c) Une primitive de 1/x sur ]0 ; +∞[ est ln x. K = ln e - ln 1 = 1 - 0 = 1.",
                "Les trois fonctions sont positives sur leur intervalle : I, J et K sont des aires sous les courbes, en unités d'aire.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fonction f définie sur [0 ; 2] par f(x) = x² - 4. 1. Étudier le signe de f sur [0 ; 2]. 2. Calculer I = ∫₀² f(x) dx. 3. En déduire l'aire, en unités d'aire, du domaine limité par la courbe de f, l'axe des abscisses et les droites x = 0 et x = 2.",
              hint: "Factorisez x² - 4. Une intégrale négative ne peut pas être une aire : pensez à prendre son opposé.",
              solution: [
                "1. f(x) = (x - 2)(x + 2). Sur [0 ; 2], x - 2 ≤ 0 et x + 2 > 0, donc f(x) ≤ 0 : la courbe est sous l'axe des abscisses.",
                "2. Une primitive de f est F(x) = x³/3 - 4x. I = F(2) - F(0) = 8/3 - 8 = -16/3.",
                "3. Comme f est négative sur [0 ; 2], l'aire du domaine vaut -I = 16/3 u.a., soit environ 5,33 u.a.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). La courbe de Lorenz d'un pays A est modélisée sur [0 ; 1] par L(x) = 0,4x + 0,6x², celle d'un pays B par M(x) = x³ (données fictives). L(x) est la part du revenu total détenue par la proportion x des ménages les moins aisés. Le coefficient de Gini est égal à deux fois l'aire comprise entre la droite d'équation y = x et la courbe de Lorenz sur [0 ; 1]. 1. Vérifier que L(0) = 0, L(1) = 1 et que L est croissante sur [0 ; 1]. 2. Calculer L(0,5) et interpréter. 3. Montrer que, pour tout x de [0 ; 1], x - L(x) ≥ 0. 4. Calculer le coefficient de Gini du pays A. 5. Calculer celui du pays B. Quel pays a la répartition des revenus la plus inégalitaire ?",
              hint: "Factorisez x - L(x) par 0,6x. L'aire entre la droite et la courbe est ∫₀¹ (x - L(x)) dx, puisque la droite est au-dessus.",
              solution: [
                "1. L(0) = 0 et L(1) = 0,4 + 0,6 = 1. L'(x) = 0,4 + 1,2x > 0 sur [0 ; 1], donc L est croissante.",
                "2. L(0,5) = 0,2 + 0,6 × 0,25 = 0,35 : les 50 % des ménages les moins aisés du pays A perçoivent 35 % du revenu total.",
                "3. x - L(x) = 0,6x - 0,6x² = 0,6x(1 - x). Sur [0 ; 1], x ≥ 0 et 1 - x ≥ 0, donc x - L(x) ≥ 0 : la droite est au-dessus de la courbe.",
                "4. Aire = ∫₀¹ (0,6x - 0,6x²) dx = [0,3x² - 0,2x³]₀¹ = 0,3 - 0,2 = 0,1. Le coefficient de Gini du pays A vaut 2 × 0,1 = 0,2.",
                "5. Pour B, x - x³ ≥ 0 sur [0 ; 1] et ∫₀¹ (x - x³) dx = [x²/2 - x⁴/4]₀¹ = ½ - ¼ = ¼. Le coefficient de Gini de B vaut 2 × ¼ = 0,5.",
                "0,5 > 0,2 : la répartition des revenus est plus inégalitaire dans le pays B.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les fonctions sont continues et a ≤ b.",
            statements: [
              { text: "Si f est positive sur [a ; b], ∫ₐᵇ f(x) dx est l'aire sous la courbe, en unités d'aire.", true: true, why: "C'est la définition de l'intégrale d'une fonction continue et positive." },
              { text: "Une intégrale est toujours un nombre positif.", true: false, why: "Si f est négative sur [a ; b], l'intégrale est négative : par exemple ∫₀¹ (-x) dx = -½." },
              { text: "La valeur de ∫ₐᵇ f(x) dx dépend de la primitive F choisie.", true: false, why: "Deux primitives diffèrent d'une constante, qui s'élimine dans F(b) - F(a)." },
              { text: "∫₀² x dx = 2.", true: true, why: "C'est l'aire d'un triangle rectangle de côtés 2 et 2 : (2 × 2)/2 = 2." },
              { text: "L'intégrale d'un produit est égale au produit des intégrales.", true: false, why: "Contre-exemple : ∫₀¹ x × x dx = 1/3, alors que ∫₀¹ x dx × ∫₀¹ x dx = ½ × ½ = ¼." },
              { text: "Si f ≤ g sur [a ; b], alors ∫ₐᵇ f(x) dx ≤ ∫ₐᵇ g(x) dx.", true: true, why: "C'est la propriété de comparaison, conséquence de la positivité appliquée à g - f." },
              { text: "∫₁³ f(x) dx + ∫₃⁵ f(x) dx = ∫₁⁵ f(x) dx.", true: true, why: "C'est la relation de Chasles." },
            ],
          },
          quiz: [
            {
              q: "Que vaut ∫₀² 3x² dx ?",
              options: ["6", "12", "8", "24"],
              answer: 2,
              why: "Une primitive de 3x² est x³, donc l'intégrale vaut 2³ - 0³ = 8.",
            },
            {
              q: "f est continue et négative sur [a ; b], avec a < b. L'aire du domaine compris entre la courbe et l'axe des abscisses vaut :",
              options: ["∫ₐᵇ f(x) dx", "-∫ₐᵇ f(x) dx", "0", "f(b) - f(a)"],
              answer: 1,
              why: "L'intégrale d'une fonction négative est négative ; l'aire, positive, est son opposé.",
            },
            {
              q: "On sait que ∫₀³ f(x) dx = 5 et ∫₃⁷ f(x) dx = 2. Que vaut ∫₀⁷ f(x) dx ?",
              options: ["3", "10", "-3", "7"],
              answer: 3,
              why: "Relation de Chasles : 5 + 2 = 7.",
            },
            {
              q: "v(t) est la vitesse d'un cycliste en m/s. Que représente ∫₀¹⁰ v(t) dt ?",
              options: ["La distance parcourue en 10 s", "Sa vitesse au bout de 10 s", "Son accélération moyenne", "La durée de son parcours"],
              answer: 0,
              why: "L'intégrale d'une vitesse donne une distance : des m/s multipliés par des secondes donnent des mètres.",
            },
            {
              q: "Que vaut ∫₁ᵉ (1/x) dx ?",
              options: ["0", "e - 1", "1", "1/e"],
              answer: 2,
              why: "Une primitive de 1/x sur ]0 ; +∞[ est ln x : ln e - ln 1 = 1 - 0 = 1.",
            },
          ],
          trap: "Confondre intégrale et aire quand la fonction change de signe : une intégrale négative n'est pas une aire. Il faut étudier le signe de f et, si besoin, découper l'intervalle avec la relation de Chasles.",
          method: "Avant tout calcul d'aire, étudiez le signe de f (ou la position des deux courbes) sur l'intervalle. Après le calcul, contrôlez l'ordre de grandeur sur un croquis : l'aire doit être cohérente avec un rectangle qui encadre le domaine.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'valeur-moyenne',
          title: 'Calcul intégral et valeur moyenne',
          minutes: 30,
          objectives: [
            "Calculer la valeur moyenne d'une fonction continue sur un intervalle [a ; b].",
            "Interpréter la valeur moyenne graphiquement et dans un contexte (température moyenne, concentration moyenne, vitesse moyenne).",
            "Encadrer une valeur moyenne à partir d'un encadrement de la fonction.",
          ],
          course: [
            {
              heading: "De la moyenne de nombres à la moyenne d'une fonction",
              paragraphs: [
                "La moyenne de n nombres est leur somme divisée par n. Mais comment parler de la température moyenne d'une journée, alors que la température prend une infinité de valeurs ? On remplace la somme par une intégrale, et le nombre de valeurs par la longueur de l'intervalle : c'est la valeur moyenne de la fonction.",
                "Si f est continue sur [a ; b], avec a < b, sa valeur moyenne sur [a ; b] est le nombre μ = (1/(b - a)) × ∫ₐᵇ f(x) dx. On peut la voir comme la limite de la moyenne des valeurs f(x₁), ..., f(xₙ) prises en des points régulièrement répartis sur [a ; b], quand n devient très grand.",
                "Interprétation graphique, pour f positive : l'égalité μ × (b - a) = ∫ₐᵇ f(x) dx signifie que le rectangle de base [a ; b] et de hauteur μ a la même aire que le domaine sous la courbe. On « aplanit » la courbe en conservant l'aire, comme on égaliserait le sable d'un tas dans un bac.",
              ],
              box: { label: "Définition", text: "Soit f une fonction continue sur [a ; b], avec a < b. La valeur moyenne de f sur [a ; b] est le réel μ = (1/(b - a)) × ∫ₐᵇ f(x) dx." },
            },
            {
              heading: "Calculer une valeur moyenne",
              paragraphs: [
                "On calcule d'abord l'intégrale avec une primitive, puis on divise par la longueur b - a. Exemple : pour f(x) = x² sur [0 ; 3], ∫₀³ x² dx = 9, donc μ = 9/3 = 3.",
                "Attention : la valeur moyenne d'une fonction n'est en général pas la moyenne de ses valeurs aux bornes. Ici, (f(0) + f(3))/2 = (0 + 9)/2 = 4,5, ce qui est différent de 3. Les deux coïncident seulement pour une fonction affine.",
                "La valeur moyenne d'une fonction constante égale à k est k. Pour une fonction affine, c'est la valeur au milieu de l'intervalle : par exemple, pour f(x) = 2x sur [0 ; 4], μ = (1/4) × 16 = 4 = f(2).",
              ],
              box: { label: "Formule", text: "μ = (1/(b - a)) × [F(x)]ₐᵇ = (F(b) - F(a))/(b - a), où F est une primitive de f. Pour une fonction affine, μ est la valeur au milieu de l'intervalle." },
            },
            {
              heading: "Encadrer une valeur moyenne",
              paragraphs: [
                "Si, pour tout x de [a ; b], m ≤ f(x) ≤ M, alors, en intégrant (a < b) puis en divisant par b - a, on obtient m ≤ μ ≤ M. La moyenne est toujours comprise entre la plus petite et la plus grande valeur de la fonction sur l'intervalle, comme une moyenne de notes est comprise entre la plus basse et la plus haute.",
                "Cette propriété sert de contrôle : si une température varie entre 10 °C et 28 °C dans la journée, une température moyenne de 32 °C est forcément fausse. Elle sert aussi à encadrer une intégrale que l'on ne sait pas calculer exactement : m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a).",
              ],
              box: { label: "Propriété", text: "Si m ≤ f(x) ≤ M pour tout x de [a ; b], avec a < b, alors m ≤ μ ≤ M et m(b - a) ≤ ∫ₐᵇ f(x) dx ≤ M(b - a)." },
            },
            {
              heading: "Des grandeurs moyennes dans les modèles",
              paragraphs: [
                "Vitesse moyenne : si v(t) est la vitesse d'un véhicule, sa valeur moyenne sur [a ; b] est la distance parcourue divisée par la durée, c'est-à-dire la vitesse moyenne du trajet au sens habituel.",
                "En pharmacologie, la concentration moyenne d'un médicament dans le sang sur une période sert à juger de son efficacité. En économie, on calcule un coût moyen ou une production moyenne sur une période ; en physique, une puissance moyenne. Dans tous les cas, la valeur moyenne a la même unité que la fonction.",
              ],
              box: { label: "À retenir", text: "La valeur moyenne a l'unité de f (des °C pour une température, des mg/L pour une concentration). L'intégrale, elle, a l'unité de f multipliée par celle de x." },
            },
          ],
          keyPoints: [
            "Valeur moyenne de f sur [a ; b] : μ = (1/(b - a)) × ∫ₐᵇ f(x) dx.",
            "Graphiquement (f positive) : le rectangle de hauteur μ sur [a ; b] a la même aire que le domaine sous la courbe.",
            "La valeur moyenne n'est pas, en général, la moyenne des valeurs aux bornes (sauf pour une fonction affine).",
            "Si m ≤ f ≤ M sur [a ; b], alors m ≤ μ ≤ M.",
            "La valeur moyenne a la même unité que la fonction.",
          ],
          example: {
            statement: "Après une injection, la concentration d'un médicament dans le sang, en mg/L, est modélisée par C(t) = 8e^(-0,25t), où t est le temps en heures (données fictives). Calculer la concentration moyenne pendant les 4 premières heures, arrondie au centième.",
            solution: [
              "La concentration moyenne est μ = (1/(4 - 0)) × ∫₀⁴ 8e^(-0,25t) dt.",
              "Une primitive de e^(-0,25t) est (1/(-0,25))e^(-0,25t) = -4e^(-0,25t), donc une primitive de C est -32e^(-0,25t).",
              "∫₀⁴ C(t) dt = -32e^(-1) - (-32e⁰) = 32 - 32e^(-1) = 32(1 - e^(-1)).",
              "μ = (1/4) × 32(1 - e^(-1)) = 8(1 - e^(-1)) ≈ 8 × 0,632 ≈ 5,06.",
              "Contrôle : C décroît de C(0) = 8 à C(4) = 8e^(-1) ≈ 2,94, et 5,06 est bien entre ces deux valeurs.",
              "La concentration moyenne pendant les 4 premières heures est d'environ 5,06 mg/L.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la valeur moyenne de la fonction f définie par f(x) = 3x² + 1 sur l'intervalle [0 ; 2].",
              hint: "Calculez ∫₀² (3x² + 1) dx avec une primitive, puis divisez par la longueur de l'intervalle.",
              solution: [
                "Une primitive de f est F(x) = x³ + x.",
                "∫₀² f(x) dx = F(2) - F(0) = (8 + 2) - 0 = 10.",
                "μ = 10/(2 - 0) = 5.",
                "Contrôle : f croît de f(0) = 1 à f(2) = 13 sur [0 ; 2], et 5 est bien compris entre 1 et 13. La valeur moyenne de f sur [0 ; 2] est 5.",
              ],
            },
            {
              level: 2,
              statement: "Un jour de printemps, la température extérieure, en °C, est modélisée entre 6 h et 18 h par T(t) = -0,5t² + 6t + 10, où t est le nombre d'heures écoulées depuis 6 h (t ∈ [0 ; 12], données fictives). 1. Calculer T(0), T(6) et T(12). 2. Calculer la température moyenne entre 6 h et 18 h. 3. Un élève propose comme température moyenne (T(0) + T(12))/2. Que vaut ce nombre ? Pourquoi est-il inadapté ?",
              hint: "Une primitive de -0,5t² est -t³/6. Pensez à diviser l'intégrale par 12, la durée en heures.",
              solution: [
                "1. T(0) = 10 °C ; T(6) = -18 + 36 + 10 = 28 °C ; T(12) = -72 + 72 + 10 = 10 °C.",
                "2. Une primitive de T est F(t) = -t³/6 + 3t² + 10t. F(12) = -1 728/6 + 432 + 120 = -288 + 432 + 120 = 264 et F(0) = 0.",
                "μ = 264/12 = 22. La température moyenne entre 6 h et 18 h est de 22 °C, qui est bien comprise entre 10 °C et 28 °C.",
                "3. (T(0) + T(12))/2 = 10 °C. Ce nombre ne tient compte que des deux extrémités et ignore le fait que la température a atteint 28 °C à midi : il sous-estime nettement la moyenne de la journée.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Un patient reçoit un médicament par perfusion. La concentration du médicament dans son sang, en mg/L, est modélisée par C(t) = 20(1 - e^(-0,2t)), t en heures, t ≥ 0 (données fictives). 1. Vérifier que C est la solution de l'équation différentielle y' = -0,2y + 4 telle que C(0) = 0. 2. Déterminer la limite de C en +∞ et l'interpréter. 3. Calculer la concentration moyenne pendant les 10 premières heures, arrondie au centième. 4. Le médicament est pleinement efficace lorsque la concentration dépasse 15 mg/L. À partir de quel instant, au centième d'heure près, est-ce le cas ?",
              hint: "Pour la question 3, écrivez C(t) = 20 - 20e^(-0,2t) et cherchez une primitive de chaque terme. Pour la question 4, isolez e^(-0,2t) avant d'appliquer ln.",
              solution: [
                "1. C(0) = 20(1 - 1) = 0. C'(t) = 20 × 0,2e^(-0,2t) = 4e^(-0,2t), et -0,2C(t) + 4 = -4 + 4e^(-0,2t) + 4 = 4e^(-0,2t). Donc C' = -0,2C + 4 : C est bien la solution cherchée.",
                "2. e^(-0,2t) tend vers 0 en +∞, donc C(t) tend vers 20. La concentration se stabilise vers 20 mg/L, la valeur d'équilibre de l'équation.",
                "3. C(t) = 20 - 20e^(-0,2t) a pour primitive G(t) = 20t + 100e^(-0,2t). ∫₀¹⁰ C(t) dt = G(10) - G(0) = 200 + 100e^(-2) - 100 = 100 + 100e^(-2).",
                "μ = (100 + 100e^(-2))/10 = 10 + 10e^(-2) ≈ 10 + 1,353 ≈ 11,35. La concentration moyenne sur les 10 premières heures est d'environ 11,35 mg/L.",
                "4. C(t) ≥ 15 équivaut à 1 - e^(-0,2t) ≥ 0,75, soit e^(-0,2t) ≤ 0,25, soit -0,2t ≤ ln 0,25 = -ln 4, soit t ≥ 5 ln 4.",
                "5 ln 4 ≈ 6,93. Le médicament est pleinement efficace à partir de 6,93 heures environ, soit environ 6 h 56 min.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression (à gauche) à ce qu'elle représente (à droite).",
            pairs: [
              { left: "(1/(b - a)) × ∫ₐᵇ f(x) dx", right: "La valeur moyenne de f sur [a ; b]" },
              { left: "∫₀² v(t) dt, v en km/h et t en h", right: "La distance parcourue en 2 h, en km" },
              { left: "∫₀¹⁰ d(t) dt, d en L/min et t en min", right: "Le volume écoulé en 10 min, en litres" },
              { left: "La valeur moyenne de v sur [0 ; 2]", right: "La vitesse moyenne du trajet" },
              { left: "L'intégrale de 0 à q du coût marginal", right: "Le coût variable des q premières unités" },
              { left: "μ × (b - a)", right: "L'intégrale de f sur [a ; b]" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la valeur moyenne de f(x) = 2x sur [0 ; 4] ?",
              options: ["2", "16", "8", "4"],
              answer: 3,
              why: "∫₀⁴ 2x dx = 16, et 16/4 = 4. Pour une fonction affine, c'est aussi f(2), la valeur au milieu.",
            },
            {
              q: "Quelle est la valeur moyenne de f(x) = x² sur [0 ; 3] ?",
              options: ["4,5", "3", "9", "1,5"],
              answer: 1,
              why: "∫₀³ x² dx = 9 et 9/3 = 3. Le nombre 4,5 est la moyenne de f(0) et f(3), qui n'est pas la valeur moyenne.",
            },
            {
              q: "Pour tout x de [0 ; 3], 2 ≤ f(x) ≤ 5. Que peut-on dire de la valeur moyenne μ de f sur [0 ; 3] ?",
              options: ["6 ≤ μ ≤ 15", "μ = 3,5", "2 ≤ μ ≤ 5", "μ ≥ 5"],
              answer: 2,
              why: "La valeur moyenne est comprise entre le minimum et le maximum de f. C'est l'intégrale qui est comprise entre 6 et 15.",
            },
            {
              q: "Une voiture parcourt 150 km en 2 h. Quelle est la valeur moyenne de sa vitesse v(t) sur [0 ; 2] ?",
              options: ["75 km/h", "150 km/h", "300 km/h", "37,5 km/h"],
              answer: 0,
              why: "∫₀² v(t) dt = 150 km est la distance ; la valeur moyenne est 150/2 = 75 km/h.",
            },
            {
              q: "Quelle est la valeur moyenne d'une fonction constante égale à 7 sur [2 ; 9] ?",
              options: ["49", "1", "7", "3,5"],
              answer: 2,
              why: "∫₂⁹ 7 dx = 7 × 7 = 49, puis 49/7 = 7 : la moyenne d'une constante est cette constante.",
            },
          ],
          trap: "Calculer la moyenne des valeurs aux bornes, (f(a) + f(b))/2, au lieu de la valeur moyenne, ou oublier de diviser l'intégrale par la longueur b - a de l'intervalle.",
          method: "Vérifiez toujours que la valeur moyenne trouvée est comprise entre le minimum et le maximum de f sur l'intervalle, et qu'elle a la même unité que f : ce double contrôle détecte la plupart des erreurs.",
        },
      ],
    },

    /* ================================================================== */
    /* LOIS DISCRÈTES                                                       */
    /* ================================================================== */
    {
      id: 'lois-discretes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-binomiale',
          title: 'La loi binomiale',
          minutes: 35,
          objectives: [
            "Reconnaître un schéma de Bernoulli et justifier qu'une variable aléatoire suit une loi binomiale, en précisant ses paramètres n et p.",
            "Calculer P(X = k) avec la formule C(n, k) pᵏ(1 - p)ⁿ⁻ᵏ et des probabilités cumulées à la calculatrice.",
            "Calculer et interpréter l'espérance, la variance et l'écart type d'une loi binomiale.",
            "Modéliser une situation (contrôle qualité, sondage, surréservation) par une loi binomiale.",
          ],
          course: [
            {
              heading: "Épreuve et schéma de Bernoulli",
              paragraphs: [
                "Une épreuve de Bernoulli est une expérience aléatoire qui n'a que deux issues : le succès, de probabilité p, et l'échec, de probabilité 1 - p. Exemples : lancer une pièce (pile ou face), tester une pièce produite (conforme ou défectueuse), interroger une personne (favorable ou non).",
                "Un schéma de Bernoulli de paramètres n et p est la répétition de n épreuves de Bernoulli identiques (même probabilité p de succès) et indépendantes (le résultat de l'une n'influence pas les autres). On le représente par un arbre à n niveaux, dont chaque branche se divise en succès S et échec É.",
                "L'indépendance est une hypothèse de modélisation. Un tirage avec remise la garantit. Un tirage sans remise dans une très grande population (prélever 50 pièces dans une production de 100 000) est en pratique assimilé à un tirage avec remise ; dans une petite urne, en revanche, l'hypothèse n'est pas valable.",
              ],
              box: { label: "Définition", text: "Un schéma de Bernoulli de paramètres n et p est la répétition de n épreuves de Bernoulli identiques et indépendantes, chacune ayant une probabilité de succès p." },
            },
            {
              heading: "La loi binomiale B(n ; p)",
              paragraphs: [
                "Dans un schéma de Bernoulli, on note X le nombre de succès obtenus. X prend les valeurs 0, 1, ..., n. On dit que X suit la loi binomiale de paramètres n et p, notée B(n ; p).",
                "Pour obtenir exactement k succès, chaque chemin de l'arbre comportant k succès et n - k échecs a pour probabilité pᵏ(1 - p)ⁿ⁻ᵏ. Le nombre de ces chemins est le coefficient binomial C(n, k), lu « k parmi n ». D'où la formule P(X = k) = C(n, k) pᵏ(1 - p)ⁿ⁻ᵏ. Par exemple, C(4, 2) = 6 : il y a 6 façons de placer 2 succès parmi 4 épreuves (SSÉÉ, SÉSÉ, SÉÉS, ÉSSÉ, ÉSÉS, ÉÉSS).",
                "Deux cas sont à connaître sans calculatrice : P(X = 0) = (1 - p)ⁿ (aucun succès) et P(X = n) = pⁿ (que des succès). On en déduit P(X ≥ 1) = 1 - (1 - p)ⁿ : la probabilité d'au moins un succès se calcule par l'événement contraire.",
              ],
              box: { label: "Formule", text: "Si X suit B(n ; p), alors pour tout entier k de 0 à n : P(X = k) = C(n, k) × pᵏ × (1 - p)ⁿ⁻ᵏ. En particulier P(X = 0) = (1 - p)ⁿ et P(X ≥ 1) = 1 - (1 - p)ⁿ." },
            },
            {
              heading: "Espérance, variance, écart type",
              paragraphs: [
                "Si X suit B(n ; p), alors E(X) = np, V(X) = np(1 - p) et σ(X) = √(np(1 - p)). L'espérance est le nombre moyen de succès que l'on obtiendrait en répétant un très grand nombre de fois le schéma de Bernoulli.",
                "Exemple : un élève répond au hasard à un QCM de 20 questions comportant chacune 4 propositions dont une seule juste. Le nombre de bonnes réponses suit B(20 ; 0,25). En moyenne, il obtient E(X) = 20 × 0,25 = 5 bonnes réponses, avec un écart type σ = √(20 × 0,25 × 0,75) = √3,75 ≈ 1,94.",
              ],
              box: { label: "Formule", text: "X suit B(n ; p) : E(X) = np ; V(X) = np(1 - p) ; σ(X) = √(np(1 - p))." },
            },
            {
              heading: "Calculer avec la calculatrice",
              paragraphs: [
                "Pour n grand, les calculs se font à la calculatrice ou au tableur. La calculatrice donne P(X = k) (fonction de probabilité binomiale) et P(X ≤ k) (fonction de répartition, ou probabilités cumulées). Toutes les autres probabilités s'en déduisent : P(X ≥ k) = 1 - P(X ≤ k - 1), P(X > k) = 1 - P(X ≤ k), et P(a ≤ X ≤ b) = P(X ≤ b) - P(X ≤ a - 1).",
                "Pour répondre à une question de modélisation, la rédaction attendue comporte toujours la justification de la loi : « On répète n fois, de façon identique et indépendante, une épreuve à deux issues dont le succès, [à préciser], a pour probabilité p. X compte le nombre de succès, donc X suit la loi binomiale B(n ; p). »",
              ],
              box: { label: "À retenir", text: "P(X ≥ k) = 1 - P(X ≤ k - 1) : attention au « k - 1 », car X ne prend que des valeurs entières. Justifiez toujours la loi binomiale : deux issues, épreuves identiques et indépendantes, X compte les succès." },
            },
          ],
          keyPoints: [
            "Schéma de Bernoulli : n épreuves à deux issues, identiques et indépendantes, de probabilité de succès p.",
            "X = nombre de succès suit B(n ; p) : P(X = k) = C(n, k) pᵏ(1 - p)ⁿ⁻ᵏ, pour k de 0 à n.",
            "P(X = 0) = (1 - p)ⁿ et P(X ≥ 1) = 1 - (1 - p)ⁿ.",
            "E(X) = np, V(X) = np(1 - p), σ(X) = √(np(1 - p)).",
            "P(X ≥ k) = 1 - P(X ≤ k - 1), avec la fonction de répartition de la calculatrice.",
            "Un tirage sans remise dans une très grande population est assimilé à un tirage avec remise.",
          ],
          example: {
            statement: "Un QCM comporte 10 questions ; chacune propose 4 réponses dont une seule est juste. Un élève répond au hasard à chaque question. On note X le nombre de bonnes réponses. 1. Justifier que X suit une loi binomiale. 2. Calculer P(X = 3) et P(X ≥ 1), arrondies au millième. 3. Calculer E(X).",
            solution: [
              "1. Chaque question est une épreuve à deux issues : succès (bonne réponse) de probabilité ¼ = 0,25, ou échec. Les 10 réponses sont données au hasard, de façon identique et indépendante. X compte les succès, donc X suit B(10 ; 0,25).",
              "2. P(X = 3) = C(10, 3) × 0,25³ × 0,75⁷ = 120 × 0,015625 × 0,75⁷ ≈ 0,250.",
              "P(X ≥ 1) = 1 - P(X = 0) = 1 - 0,75¹⁰ ≈ 1 - 0,056 = 0,944.",
              "3. E(X) = np = 10 × 0,25 = 2,5.",
              "En répondant au hasard, l'élève obtient en moyenne 2,5 bonnes réponses sur 10 ; il a environ une chance sur quatre d'en avoir exactement 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une graine germe avec une probabilité de 0,8 (données fictives). On sème 6 graines, dont les germinations sont supposées indépendantes, et on note X le nombre de graines qui germent. 1. Justifier que X suit une loi binomiale et préciser ses paramètres. 2. Calculer P(X = 6) et P(X = 4), arrondies au millième. 3. Calculer E(X).",
              hint: "Le succès est « la graine germe ». Pour P(X = 4), C(6, 4) = 15.",
              solution: [
                "1. Chaque graine donne lieu à une épreuve à deux issues : elle germe (succès, p = 0,8) ou non. Les 6 épreuves sont identiques et indépendantes, et X compte les succès : X suit B(6 ; 0,8).",
                "2. P(X = 6) = 0,8⁶ = 0,262144 ≈ 0,262.",
                "P(X = 4) = C(6, 4) × 0,8⁴ × 0,2² = 15 × 0,4096 × 0,04 = 0,24576 ≈ 0,246.",
                "3. E(X) = 6 × 0,8 = 4,8 : en moyenne, 4,8 graines sur 6 germent.",
              ],
            },
            {
              level: 2,
              statement: "Une usine produit des pièces dont 3 % sont défectueuses (données fictives). On prélève au hasard 50 pièces dans un stock très important, ce que l'on assimile à des tirages avec remise. On note X le nombre de pièces défectueuses. 1. Donner la loi de X. 2. Calculer P(X = 0), puis, à la calculatrice, P(X ≤ 2) et P(X ≥ 3), arrondies au millième. 3. Calculer E(X) et σ(X), arrondi au centième.",
              hint: "P(X ≥ 3) se déduit de P(X ≤ 2) par l'événement contraire.",
              solution: [
                "1. On répète 50 fois, de façon identique et indépendante, l'épreuve « la pièce est-elle défectueuse ? », de succès de probabilité 0,03. X suit B(50 ; 0,03).",
                "2. P(X = 0) = 0,97⁵⁰ ≈ 0,218.",
                "À la calculatrice, P(X ≤ 2) ≈ 0,811.",
                "P(X ≥ 3) = 1 - P(X ≤ 2) ≈ 1 - 0,811 = 0,189.",
                "3. E(X) = 50 × 0,03 = 1,5 et σ(X) = √(50 × 0,03 × 0,97) = √1,455 ≈ 1,21. En moyenne, un lot de 50 pièces contient 1,5 pièce défectueuse.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Un avion compte 150 places. La compagnie vend 156 billets, car certains passagers ne se présentent pas à l'embarquement. On admet que chaque passager se présente avec une probabilité de 0,95, indépendamment des autres (données fictives). On note X le nombre de passagers qui se présentent. 1. Justifier que X suit une loi binomiale et préciser ses paramètres. 2. Calculer E(X) et σ(X), arrondi au centième. 3. Calculer, à la calculatrice, la probabilité que des passagers se présentent sans avoir de place, arrondie au millième. 4. La compagnie veut que cette probabilité soit inférieure à 5 %. Les calculs à la calculatrice donnent, pour n billets vendus, P(X ≥ 151) ≈ 0,016 si n = 153, 0,048 si n = 154 et 0,109 si n = 155. Combien de billets au maximum peut-elle vendre ?",
              hint: "Des passagers restent à quai lorsque X ≥ 151, c'est-à-dire X > 150. Utilisez P(X ≥ 151) = 1 - P(X ≤ 150).",
              solution: [
                "1. Pour chacun des 156 passagers, on observe une épreuve à deux issues : il se présente (succès, p = 0,95) ou non. Les épreuves sont identiques et indépendantes, et X compte les succès : X suit B(156 ; 0,95).",
                "2. E(X) = 156 × 0,95 = 148,2 et σ(X) = √(156 × 0,95 × 0,05) = √7,41 ≈ 2,72.",
                "3. Il y a surréservation effective lorsque X ≥ 151. P(X ≥ 151) = 1 - P(X ≤ 150) ≈ 1 - 0,797 = 0,203.",
                "Avec 156 billets vendus, il y a environ 20 % de risque qu'au moins un passager se retrouve sans place : c'est beaucoup.",
                "4. La probabilité augmente avec le nombre de billets vendus. Elle vaut environ 0,048 < 0,05 pour 154 billets, mais environ 0,109 > 0,05 pour 155 billets.",
                "La compagnie peut vendre au maximum 154 billets.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Loi binomiale et schéma de Bernoulli.",
            statements: [
              { text: "Le nombre de 6 obtenus en 12 lancers d'un dé équilibré suit la loi B(12 ; 1/6).", true: true, why: "12 épreuves identiques et indépendantes à deux issues, le succès « obtenir 6 » ayant pour probabilité 1/6." },
              { text: "On tire sans remise 3 élèves dans une classe de 5 élèves dont 2 filles : le nombre de filles tirées suit une loi binomiale.", true: false, why: "Dans un petit groupe, les tirages sans remise ne sont pas indépendants : la probabilité change à chaque tirage." },
              { text: "Si X suit B(n ; p), alors E(X) = np.", true: true, why: "C'est la formule de l'espérance de la loi binomiale." },
              { text: "Si X suit B(10 ; 0,5), alors P(X = 5) = 0,5.", true: false, why: "P(X = 5) = C(10, 5)/2¹⁰ = 252/1 024 ≈ 0,246 : obtenir exactement 5 piles sur 10 lancers n'arrive qu'environ une fois sur quatre." },
              { text: "Si X suit B(n ; p), alors P(X ≥ 1) = 1 - (1 - p)ⁿ.", true: true, why: "L'événement contraire de « au moins un succès » est « aucun succès », de probabilité (1 - p)ⁿ." },
              { text: "Si X suit B(n ; p), alors P(X ≥ 4) = 1 - P(X ≤ 4).", true: false, why: "Le contraire de X ≥ 4 est X ≤ 3 : P(X ≥ 4) = 1 - P(X ≤ 3)." },
              { text: "La variance de la loi B(n ; p) vaut np(1 - p).", true: true, why: "C'est la formule du cours ; l'écart type en est la racine carrée." },
            ],
          },
          quiz: [
            {
              q: "X suit la loi B(20 ; 0,3). Que vaut E(X) ?",
              options: ["0,3", "6", "4,2", "14"],
              answer: 1,
              why: "E(X) = np = 20 × 0,3 = 6. Le nombre 4,2 est la variance np(1 - p).",
            },
            {
              q: "X suit la loi B(n ; p). Que vaut P(X = 0) ?",
              options: ["0", "pⁿ", "1 - pⁿ", "(1 - p)ⁿ"],
              answer: 3,
              why: "X = 0 signifie n échecs successifs et indépendants, chacun de probabilité 1 - p.",
            },
            {
              q: "Combien vaut C(4, 2), le nombre de chemins comportant 2 succès dans un arbre à 4 épreuves ?",
              options: ["4", "8", "6", "2"],
              answer: 2,
              why: "Les chemins sont SSÉÉ, SÉSÉ, SÉÉS, ÉSSÉ, ÉSÉS et ÉÉSS : il y en a 6.",
            },
            {
              q: "Un schéma de Bernoulli est constitué d'épreuves :",
              options: ["identiques et indépendantes", "dont la probabilité de succès augmente", "au nombre de deux exactement", "qui réussissent toutes"],
              answer: 0,
              why: "Ce sont des épreuves à deux issues, identiques (même p) et indépendantes ; leur nombre n est quelconque.",
            },
            {
              q: "X suit la loi B(30 ; 0,2). Avec quelle expression calcule-t-on P(X ≥ 5) ?",
              options: ["1 - P(X ≤ 5)", "1 - P(X ≤ 4)", "P(X ≤ 5)", "1 - P(X = 5)"],
              answer: 1,
              why: "Le contraire de X ≥ 5 est X ≤ 4, puisque X ne prend que des valeurs entières.",
            },
          ],
          trap: "Écrire P(X ≥ k) = 1 - P(X ≤ k) au lieu de 1 - P(X ≤ k - 1), ou appliquer la loi binomiale à des tirages sans remise dans une petite population, où les épreuves ne sont pas indépendantes.",
          method: "Rédigez toujours la justification en trois points (deux issues, épreuves identiques et indépendantes, X compte les succès) avant tout calcul. Pour une probabilité du type « au moins », traduisez d'abord l'événement contraire sur une droite graduée des entiers.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'loi-geometrique',
          title: 'La loi géométrique',
          minutes: 30,
          objectives: [
            "Reconnaître une situation de temps d'attente du premier succès et la modéliser par une loi géométrique de paramètre p.",
            "Calculer P(X = k), P(X > k) et P(X ≤ k) pour une variable de loi géométrique.",
            "Connaître et interpréter l'espérance 1/p d'une loi géométrique.",
            "Exploiter la propriété d'absence de mémoire.",
          ],
          course: [
            {
              heading: "Attendre le premier succès",
              paragraphs: [
                "On répète une épreuve de Bernoulli de paramètre p, de façon identique et indépendante, jusqu'à obtenir un premier succès. On note X le rang de ce premier succès : X = 1 si l'on réussit du premier coup, X = 2 si l'on échoue puis réussit, etc. X prend les valeurs entières 1, 2, 3, ... sans limite fixée à l'avance : on parle de temps d'attente.",
                "L'événement X = k signifie : k - 1 échecs suivis d'un succès. Par indépendance, sa probabilité est (1 - p)ᵏ⁻¹ × p. Par exemple, si l'on lance un dé équilibré jusqu'à obtenir un 6 (p = 1/6), la probabilité que le premier 6 arrive au troisième lancer est (5/6)² × 1/6 = 25/216 ≈ 0,116.",
                "Différence avec la loi binomiale : dans la loi binomiale, le nombre d'épreuves n est fixé et l'on compte les succès ; dans la loi géométrique, on compte les épreuves jusqu'au premier succès.",
              ],
              box: { label: "Définition", text: "X suit la loi géométrique de paramètre p (0 < p < 1) si X prend les valeurs entières k ≥ 1 avec P(X = k) = (1 - p)ᵏ⁻¹ × p. C'est la loi du rang du premier succès dans une répétition d'épreuves de Bernoulli identiques et indépendantes." },
            },
            {
              heading: "Probabilités cumulées",
              paragraphs: [
                "L'événement X > k signifie que les k premières épreuves sont toutes des échecs. Donc P(X > k) = (1 - p)ᵏ, et par complémentaire P(X ≤ k) = 1 - (1 - p)ᵏ. Ces deux formules évitent d'additionner de nombreux termes.",
                "Exemple : avec un dé, la probabilité de ne pas avoir obtenu de 6 après 6 lancers est P(X > 6) = (5/6)⁶ ≈ 0,335. Contrairement à une intuition fréquente, six lancers ne garantissent pas d'obtenir un 6 : on échoue environ une fois sur trois.",
                "Pour trouver le nombre d'essais nécessaires pour avoir une probabilité donnée de réussir, on résout une inéquation avec le logarithme. Par exemple, 1 - (5/6)ⁿ ≥ 0,9 équivaut à (5/6)ⁿ ≤ 0,1, soit n ln(5/6) ≤ ln 0,1, soit n ≥ ln 0,1/ln(5/6) ≈ 12,6 (on change le sens car ln(5/6) < 0) : il faut au moins 13 lancers.",
              ],
              box: { label: "Propriété", text: "Si X suit la loi géométrique de paramètre p, pour tout entier k ≥ 0 : P(X > k) = (1 - p)ᵏ et P(X ≤ k) = 1 - (1 - p)ᵏ." },
            },
            {
              heading: "Espérance : le temps d'attente moyen",
              paragraphs: [
                "Si X suit la loi géométrique de paramètre p, alors E(X) = 1/p (résultat admis). C'est très intuitif : si un événement a une chance sur 6 de se produire à chaque essai, il faut en moyenne 6 essais pour l'obtenir. Pour p = 0,02, il faut en moyenne 50 essais.",
                "On admet aussi que la variance vaut V(X) = (1 - p)/p². Elle est grande lorsque p est petit : le temps d'attente est alors non seulement long en moyenne, mais aussi très variable d'une série d'essais à l'autre.",
              ],
              box: { label: "Formule", text: "X suit la loi géométrique de paramètre p : E(X) = 1/p (et V(X) = (1 - p)/p², admis)." },
            },
            {
              heading: "L'absence de mémoire",
              paragraphs: [
                "Pour tous entiers n et k, la probabilité d'attendre encore plus de k épreuves, sachant que l'on a déjà attendu n épreuves sans succès, est la même que si l'on recommençait à zéro : P(X > n + k sachant X > n) = P(X > k). En effet, cette probabilité conditionnelle vaut (1 - p)ⁿ⁺ᵏ/(1 - p)ⁿ = (1 - p)ᵏ.",
                "Interprétation : les épreuves passées n'ont aucune influence sur les suivantes. Après dix lancers sans 6, le 6 n'est pas « dû » : la probabilité qu'il sorte au lancer suivant reste 1/6. Croire le contraire est une erreur classique, appelée l'erreur du joueur. Ce modèle convient donc pour des phénomènes sans usure (un appareil qui ne vieillit pas), mais pas pour un objet qui s'use.",
              ],
              box: { label: "Propriété", text: "Absence de mémoire : pour tous entiers naturels n et k, P sachant (X > n) de l'événement (X > n + k) est égale à P(X > k)." },
            },
          ],
          keyPoints: [
            "Loi géométrique de paramètre p : rang X du premier succès, X ∈ {1, 2, 3, ...}.",
            "P(X = k) = (1 - p)ᵏ⁻¹ × p : k - 1 échecs puis un succès.",
            "P(X > k) = (1 - p)ᵏ et P(X ≤ k) = 1 - (1 - p)ᵏ.",
            "E(X) = 1/p : temps d'attente moyen du premier succès.",
            "Absence de mémoire : sachant X > n, la probabilité de X > n + k est P(X > k).",
            "Un succès n'est jamais « dû » après une série d'échecs.",
          ],
          example: {
            statement: "Un joueur de basket réussit chaque lancer franc avec une probabilité de 0,7, indépendamment des autres lancers (données fictives). Il tire jusqu'à réussir. On note X le rang du premier lancer réussi. Calculer P(X = 3), P(X ≤ 2) et E(X).",
            solution: [
              "Les lancers sont des épreuves de Bernoulli identiques et indépendantes de paramètre p = 0,7, et X est le rang du premier succès : X suit la loi géométrique de paramètre 0,7.",
              "P(X = 3) = (1 - 0,7)² × 0,7 = 0,09 × 0,7 = 0,063.",
              "P(X ≤ 2) = 1 - 0,3² = 1 - 0,09 = 0,91.",
              "E(X) = 1/0,7 ≈ 1,43.",
              "Le joueur réussit dans les deux premiers lancers dans 91 % des cas et a besoin en moyenne d'environ 1,43 lancer.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À un jeu, chaque partie est gagnée avec une probabilité de 0,2, indépendamment des autres (données fictives). Un joueur joue jusqu'à sa première victoire ; X est le rang de la partie gagnée. 1. Quelle est la loi de X ? 2. Calculer P(X = 1), P(X = 4) et P(X > 5). 3. Calculer E(X).",
              hint: "X = 4 signifie trois défaites puis une victoire ; X > 5 signifie cinq défaites de suite.",
              solution: [
                "1. X est le rang du premier succès dans des épreuves de Bernoulli identiques et indépendantes de paramètre 0,2 : X suit la loi géométrique de paramètre 0,2.",
                "2. P(X = 1) = 0,2.",
                "P(X = 4) = 0,8³ × 0,2 = 0,512 × 0,2 = 0,1024.",
                "P(X > 5) = 0,8⁵ = 0,32768 ≈ 0,328.",
                "3. E(X) = 1/0,2 = 5 : il faut en moyenne 5 parties pour gagner une fois.",
              ],
            },
            {
              level: 2,
              statement: "Un commercial appelle des clients au hasard. Chaque client accepte un rendez-vous avec une probabilité de 0,1, indépendamment des autres (données fictives). X est le rang du premier client qui accepte. 1. Calculer P(X ≤ 10), arrondie au millième. 2. Déterminer le plus petit nombre n d'appels tel que P(X ≤ n) ≥ 0,95.",
              hint: "P(X ≤ n) = 1 - 0,9ⁿ. Pour résoudre 0,9ⁿ ≤ 0,05, appliquez ln et n'oubliez pas que ln 0,9 est négatif.",
              solution: [
                "1. X suit la loi géométrique de paramètre 0,1. P(X ≤ 10) = 1 - 0,9¹⁰ ≈ 1 - 0,349 = 0,651.",
                "2. P(X ≤ n) ≥ 0,95 équivaut à 1 - 0,9ⁿ ≥ 0,95, soit 0,9ⁿ ≤ 0,05.",
                "La fonction ln est strictement croissante : n ln 0,9 ≤ ln 0,05. Comme ln 0,9 < 0, on divise en changeant le sens : n ≥ ln 0,05/ln 0,9 ≈ 28,4.",
                "Vérification : 1 - 0,9²⁸ ≈ 0,948 < 0,95 et 1 - 0,9²⁹ ≈ 0,953 ≥ 0,95.",
                "Il faut prévoir au moins 29 appels pour obtenir un rendez-vous avec une probabilité d'au moins 95 %.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Chaque jour, un appareil électronique tombe en panne avec une probabilité de 0,02, indépendamment des jours précédents tant qu'il n'est pas tombé en panne (données fictives). On note X le rang du jour de la première panne. 1. Justifier la loi de X et calculer E(X). 2. Calculer la probabilité que l'appareil fonctionne plus de 30 jours, arrondie au millième. 3. L'appareil a fonctionné 30 jours sans panne. Quelle est la probabilité qu'il fonctionne encore plus de 30 jours ? Commenter. 4. Déterminer le plus petit entier n tel que P(X ≤ n) ≥ 0,5 et l'interpréter.",
              hint: "Pour la question 3, utilisez l'absence de mémoire. Pour la question 4, résolvez 0,98ⁿ ≤ 0,5 avec le logarithme.",
              solution: [
                "1. Chaque jour est une épreuve de Bernoulli (panne ou non) de paramètre 0,02, et les jours sont identiques et indépendants : X, rang de la première panne, suit la loi géométrique de paramètre 0,02. E(X) = 1/0,02 = 50 jours.",
                "2. P(X > 30) = 0,98³⁰ ≈ 0,545.",
                "3. On cherche la probabilité de X > 60 sachant X > 30. Par absence de mémoire, elle vaut P(X > 30) ≈ 0,545 (en effet, 0,98⁶⁰/0,98³⁰ = 0,98³⁰).",
                "Le fait d'avoir déjà fonctionné 30 jours ne change pas l'avenir : dans ce modèle, l'appareil ne s'use pas.",
                "4. P(X ≤ n) ≥ 0,5 équivaut à 0,98ⁿ ≤ 0,5, soit n ≥ ln 0,5/ln 0,98 ≈ 34,3 (ln 0,98 < 0). Vérification : 1 - 0,98³⁴ ≈ 0,497 et 1 - 0,98³⁵ ≈ 0,507.",
                "n = 35 : l'appareil a plus d'une chance sur deux d'être tombé en panne au bout de 35 jours, alors que la durée moyenne avant panne est de 50 jours.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "X suit la loi géométrique de paramètre p. Associez chaque grandeur à sa formule.",
            pairs: [
              { left: "P(X = k)", right: "(1 - p)ᵏ⁻¹ × p" },
              { left: "P(X > k)", right: "(1 - p)ᵏ" },
              { left: "P(X ≤ k)", right: "1 - (1 - p)ᵏ" },
              { left: "E(X)", right: "1/p" },
              { left: "V(X)", right: "(1 - p)/p²" },
              { left: "Probabilité de X > n + k sachant X > n", right: "P(X > k)" },
            ],
          },
          quiz: [
            {
              q: "X suit la loi géométrique de paramètre 0,25. Que vaut E(X) ?",
              options: ["0,25", "0,75", "3", "4"],
              answer: 3,
              why: "E(X) = 1/p = 1/0,25 = 4 : il faut en moyenne 4 essais.",
            },
            {
              q: "On lance un dé équilibré jusqu'à obtenir un 6. Quelle est la probabilité que le premier 6 arrive au deuxième lancer ?",
              options: ["1/36", "5/36", "1/3", "11/36"],
              answer: 1,
              why: "Il faut un échec (5/6) puis un succès (1/6) : 5/6 × 1/6 = 5/36.",
            },
            {
              q: "Après 10 lancers sans 6, quelle est la probabilité d'obtenir un 6 au lancer suivant ?",
              options: ["1/6", "Plus de 1/6, car le 6 « doit » sortir", "Moins de 1/6", "(5/6)¹⁰ × 1/6"],
              answer: 0,
              why: "Les lancers sont indépendants : la probabilité reste 1/6. C'est l'absence de mémoire.",
            },
            {
              q: "X suit la loi géométrique de paramètre p. Que vaut P(X > k) ?",
              options: ["pᵏ", "1 - pᵏ", "(1 - p)ᵏ", "k × p"],
              answer: 2,
              why: "X > k signifie que les k premières épreuves sont des échecs, de probabilité (1 - p)ᵏ.",
            },
            {
              q: "Quelles valeurs une variable de loi géométrique peut-elle prendre ?",
              options: ["Les entiers de 0 à n inclus", "Les réels de [0 ; 1]", "Les entiers 1, 2, 3...", "Les réels positifs"],
              answer: 2,
              why: "X est le rang du premier succès : c'est un entier au moins égal à 1, sans maximum fixé.",
            },
          ],
          trap: "Écrire P(X = k) = (1 - p)ᵏ × p (avec k échecs au lieu de k - 1), ou croire qu'après une série d'échecs le succès devient plus probable, ce que l'absence de mémoire contredit.",
          method: "Traduisez chaque événement en mots avant de calculer : « X > k » signifie « k échecs de suite », « X = k » signifie « k - 1 échecs puis un succès ». La formule s'écrit alors sans hésitation.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'esperance-decision',
          title: 'Espérance, variance et prise de décision',
          minutes: 35,
          objectives: [
            "Calculer l'espérance, la variance et l'écart type d'une variable aléatoire à partir de sa loi.",
            "Utiliser les formules E(aX + b) = aE(X) + b et V(aX + b) = a²V(X).",
            "Interpréter l'espérance comme une moyenne à long terme et l'écart type comme une mesure du risque pour comparer des choix.",
            "Prendre une décision à partir d'une probabilité calculée sous une hypothèse et d'un seuil fixé.",
          ],
          course: [
            {
              heading: "L'espérance : une moyenne à long terme",
              paragraphs: [
                "Soit X une variable aléatoire qui prend les valeurs x₁, ..., xₙ avec les probabilités p₁, ..., pₙ. Son espérance est E(X) = p₁x₁ + p₂x₂ + ... + pₙxₙ. C'est la moyenne des valeurs pondérée par leurs probabilités.",
                "D'après la loi des grands nombres, si l'on répète l'expérience un très grand nombre de fois, la moyenne des valeurs observées se rapproche de E(X). Pour un jeu d'argent, E(G), où G est le gain algébrique (gain moins mise), est donc le gain moyen par partie à long terme. Le jeu est dit équitable si E(G) = 0, favorable au joueur si E(G) > 0, défavorable si E(G) < 0.",
                "L'espérance guide de nombreuses décisions : un assureur fixe sa prime au-dessus de l'espérance des remboursements ; un organisateur de tombola vérifie que l'espérance du gain des joueurs est négative.",
              ],
              box: { label: "Définition", text: "Si X prend les valeurs xᵢ avec les probabilités pᵢ (i de 1 à n), E(X) = p₁x₁ + p₂x₂ + ... + pₙxₙ. Un jeu de gain algébrique G est équitable lorsque E(G) = 0." },
            },
            {
              heading: "Variance et écart type : mesurer le risque",
              paragraphs: [
                "Deux placements peuvent rapporter en moyenne la même somme tout en étant très différents : l'un donne toujours à peu près le même gain, l'autre alterne fortes pertes et gros gains. La variance mesure cette dispersion autour de l'espérance : V(X) = p₁(x₁ - E(X))² + ... + pₙ(xₙ - E(X))².",
                "On utilise souvent la formule équivalente V(X) = E(X²) - (E(X))², où E(X²) = p₁x₁² + ... + pₙxₙ². L'écart type σ(X) = √V(X) s'exprime dans la même unité que X : c'est lui que l'on interprète. Plus il est grand, plus les résultats sont dispersés, donc plus le choix est risqué.",
              ],
              box: { label: "Formule", text: "V(X) = Σ pᵢ(xᵢ - E(X))² = E(X²) - (E(X))² ; σ(X) = √V(X). À espérance égale, l'option dont l'écart type est le plus faible est la moins risquée." },
            },
            {
              heading: "Transformations affines",
              paragraphs: [
                "Si l'on transforme X par Y = aX + b (changement d'unité, ajout de frais fixes, conversion de devises), alors E(aX + b) = aE(X) + b et V(aX + b) = a²V(X), donc σ(aX + b) = |a| σ(X).",
                "Interprétation : ajouter une constante b décale toutes les valeurs, donc la moyenne, mais ne change pas leur dispersion. Multiplier par a multiplie la moyenne par a et l'écart type par |a|. Par exemple, si un gain X a pour espérance 650 € et pour écart type 250 €, des frais fixes de 50 € donnent Y = X - 50, d'espérance 600 € et d'écart type toujours égal à 250 €.",
              ],
              box: { label: "Propriété", text: "Pour tous réels a et b : E(aX + b) = aE(X) + b ; V(aX + b) = a²V(X) ; σ(aX + b) = |a| σ(X)." },
            },
            {
              heading: "Prendre une décision sous une hypothèse",
              paragraphs: [
                "Une entreprise affirme que 90 % de ses clients sont satisfaits. Sur 100 clients interrogés au hasard, seuls 82 se disent satisfaits. Faut-il mettre en doute l'affirmation ? On raisonne sous l'hypothèse p = 0,9 : le nombre X de clients satisfaits suit alors B(100 ; 0,9), d'espérance 90.",
                "On fixe un seuil, en général 5 %, puis on calcule la probabilité, sous l'hypothèse, d'un résultat au moins aussi éloigné de ce qui est attendu que celui observé : ici P(X ≤ 82) ≈ 0,010. Si cette probabilité est inférieure au seuil, le résultat est jugé trop improbable sous l'hypothèse : on la rejette. Sinon, on ne la rejette pas, ce qui ne prouve pas qu'elle soit vraie.",
                "Une telle décision comporte toujours un risque d'erreur : rejeter à tort une hypothèse vraie, ce qui, avec un seuil de 5 %, arrive au plus dans 5 % des cas. On conclut donc avec prudence : « au seuil de 5 %, l'affirmation de l'entreprise est remise en question ».",
              ],
              box: { label: "À retenir", text: "Décider : 1. formuler l'hypothèse ; 2. définir X et sa loi sous cette hypothèse ; 3. calculer la probabilité d'un résultat au moins aussi extrême que l'observation ; 4. la comparer au seuil fixé ; 5. conclure en mentionnant le risque d'erreur." },
            },
          ],
          keyPoints: [
            "E(X) = Σ pᵢxᵢ : moyenne à long terme ; un jeu est équitable si l'espérance du gain est nulle.",
            "V(X) = E(X²) - (E(X))² et σ(X) = √V(X) mesurent la dispersion, donc le risque.",
            "E(aX + b) = aE(X) + b ; V(aX + b) = a²V(X) ; σ(aX + b) = |a| σ(X).",
            "À espérance égale, on préfère en général l'option de plus faible écart type.",
            "Décision : si, sous l'hypothèse, l'observation a une probabilité inférieure au seuil (souvent 5 %), on rejette l'hypothèse.",
            "Ne pas rejeter une hypothèse ne prouve pas qu'elle est vraie.",
          ],
          example: {
            statement: "Pour jouer, on paie 2 € puis on lance un dé équilibré. Si l'on obtient 6, on reçoit 8 € ; si l'on obtient 4 ou 5, on reçoit 2 € ; sinon, on ne reçoit rien. On note G le gain algébrique (somme reçue moins la mise). Donner la loi de G, calculer E(G) et σ(G), puis conclure.",
            solution: [
              "Valeurs de G : 8 - 2 = 6 avec la probabilité 1/6 ; 2 - 2 = 0 avec la probabilité 2/6 ; 0 - 2 = -2 avec la probabilité 3/6. La somme des probabilités vaut bien 1.",
              "E(G) = 6 × 1/6 + 0 × 2/6 + (-2) × 3/6 = 1 + 0 - 1 = 0.",
              "E(G²) = 36 × 1/6 + 0 + 4 × 3/6 = 6 + 2 = 8, donc V(G) = 8 - 0² = 8.",
              "σ(G) = √8 = 2√2 ≈ 2,83 €.",
              "Le jeu est équitable : à long terme, le joueur ne gagne ni ne perd en moyenne, mais le gain d'une partie s'écarte typiquement d'environ 2,83 € de cette moyenne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une association vend des billets de tombola à 5 €. Le gain algébrique X d'un joueur (en euros, mise déduite) suit la loi suivante (données fictives) : X = -5 avec la probabilité 0,6 ; X = 0 avec la probabilité 0,25 ; X = 10 avec la probabilité 0,1 ; X = 30 avec la probabilité 0,05. 1. Vérifier qu'il s'agit bien d'une loi de probabilité. 2. Calculer E(X) et interpréter. 3. Calculer V(X) et σ(X), arrondi au centième.",
              hint: "Utilisez V(X) = E(X²) - (E(X))², en calculant d'abord E(X²) = Σ pᵢxᵢ².",
              solution: [
                "1. Les probabilités sont positives et 0,6 + 0,25 + 0,1 + 0,05 = 1.",
                "2. E(X) = -5 × 0,6 + 0 × 0,25 + 10 × 0,1 + 30 × 0,05 = -3 + 0 + 1 + 1,5 = -0,5.",
                "Le jeu est défavorable au joueur : il perd en moyenne 0,50 € par billet, ce qui fait gagner en moyenne 0,50 € par billet à l'association.",
                "3. E(X²) = 25 × 0,6 + 0 + 100 × 0,1 + 900 × 0,05 = 15 + 10 + 45 = 70. V(X) = 70 - (-0,5)² = 70 - 0,25 = 69,75.",
                "σ(X) = √69,75 ≈ 8,35 €.",
              ],
            },
            {
              level: 2,
              statement: "Un investisseur hésite entre deux placements sur un an (données fictives). Placement A : gain de -1 000 € avec la probabilité 0,2, de 500 € avec la probabilité 0,5, de 2 000 € avec la probabilité 0,3. Placement B : gain de 400 € ou de 900 €, chacun avec la probabilité 0,5. 1. Calculer l'espérance de chaque gain. 2. Calculer l'écart type de chaque gain. 3. Quel placement conseiller à un investisseur prudent ? 4. Des frais fixes de 50 € s'appliquent au placement B. Donner l'espérance et l'écart type du gain net Y = X - 50.",
              hint: "Pour B, calculez la variance avec la définition : les deux écarts à la moyenne sont faciles à obtenir.",
              solution: [
                "1. E(A) = -1 000 × 0,2 + 500 × 0,5 + 2 000 × 0,3 = -200 + 250 + 600 = 650 €. E(B) = 0,5 × 400 + 0,5 × 900 = 650 €.",
                "2. E(A²) = 1 000 000 × 0,2 + 250 000 × 0,5 + 4 000 000 × 0,3 = 1 525 000, donc V(A) = 1 525 000 - 650² = 1 525 000 - 422 500 = 1 102 500 et σ(A) = 1 050 €.",
                "V(B) = 0,5 × (400 - 650)² + 0,5 × (900 - 650)² = 0,5 × 62 500 + 0,5 × 62 500 = 62 500, donc σ(B) = 250 €.",
                "3. Les deux placements rapportent 650 € en moyenne, mais B est beaucoup moins dispersé (250 € contre 1 050 €) et ne fait jamais perdre d'argent, alors que A fait perdre 1 000 € dans 20 % des cas. On conseille B à un investisseur prudent.",
                "4. E(Y) = E(X) - 50 = 600 € et σ(Y) = σ(X) = 250 € : les frais fixes décalent la moyenne sans changer la dispersion.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Une entreprise affirme que 90 % de ses clients sont satisfaits. Une association de consommateurs interroge 100 clients choisis au hasard (tirage assimilé à un tirage avec remise) : 82 se déclarent satisfaits. On se place sous l'hypothèse p = 0,9 et on note X le nombre de clients satisfaits parmi 100. 1. Quelle est la loi de X ? Calculer E(X) et σ(X). 2. La calculatrice donne P(X ≤ 82) ≈ 0,010. Au seuil de 5 %, que peut conclure l'association ? 3. La calculatrice donne aussi P(X ≤ 84) ≈ 0,040 et P(X ≤ 85) ≈ 0,073. Déterminer le plus grand entier a tel que P(X ≤ a) ≤ 0,05, puis énoncer la règle de décision correspondante. 4. Avec cette règle, que conclurait-on si 86 clients s'étaient déclarés satisfaits ?",
              hint: "Sous l'hypothèse, un nombre de satisfaits trop faible est suspect. Comparez chaque probabilité au seuil de 0,05.",
              solution: [
                "1. Chaque client interrogé est une épreuve à deux issues (satisfait, avec la probabilité 0,9 sous l'hypothèse, ou non), répétée 100 fois de façon identique et indépendante : X suit B(100 ; 0,9). E(X) = 90 et σ(X) = √(100 × 0,9 × 0,1) = √9 = 3.",
                "2. P(X ≤ 82) ≈ 0,010 < 0,05 : sous l'hypothèse, obtenir 82 satisfaits ou moins est très improbable.",
                "Au seuil de 5 %, l'association rejette l'affirmation de l'entreprise, avec un risque d'erreur d'au plus 5 % (le risque de rejeter l'affirmation alors qu'elle est vraie).",
                "3. P(X ≤ 84) ≈ 0,040 ≤ 0,05 et P(X ≤ 85) ≈ 0,073 > 0,05, donc a = 84.",
                "Règle : si le nombre de clients satisfaits est inférieur ou égal à 84, on rejette l'affirmation au seuil de 5 % ; sinon, on ne la rejette pas.",
                "4. 86 > 84 : on ne rejetterait pas l'affirmation. Cela ne prouve pas qu'elle est vraie ; les données ne permettent simplement pas de la contredire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'étude d'un jeu de hasard.",
            items: [
              "Définir le gain algébrique G : somme reçue moins la mise.",
              "Écrire la loi de G dans un tableau et vérifier que la somme des probabilités vaut 1.",
              "Calculer l'espérance E(G).",
              "Calculer la variance V(G), qui utilise E(G).",
              "En déduire l'écart type σ(G) = √V(G).",
              "Conclure : jeu équitable, favorable ou défavorable, et niveau de risque.",
            ],
          },
          quiz: [
            {
              q: "X vaut 10 avec la probabilité 0,2 et -2 sinon. Que vaut E(X) ?",
              options: ["4", "0,4", "8", "-0,4"],
              answer: 1,
              why: "E(X) = 10 × 0,2 + (-2) × 0,8 = 2 - 1,6 = 0,4.",
            },
            {
              q: "E(X) = 5 et V(X) = 4. Que valent E(3X + 2) et V(3X + 2) ?",
              options: ["17 et 36", "17 et 14", "15 et 12", "17 et 38"],
              answer: 0,
              why: "E(3X + 2) = 3 × 5 + 2 = 17 et V(3X + 2) = 3² × 4 = 36 : la constante 2 ne change pas la variance.",
            },
            {
              q: "Un jeu est dit équitable lorsque :",
              options: ["la probabilité de gagner vaut ½", "la variance du gain est nulle", "l'espérance du gain est nulle", "on gagne aussi souvent qu'on perd"],
              answer: 2,
              why: "Équitable signifie qu'à long terme le gain moyen est nul : E(G) = 0, quelle que soit la probabilité de gagner.",
            },
            {
              q: "Deux placements ont la même espérance de gain. Lequel est le moins risqué ?",
              options: ["Celui de plus grande variance", "Celui de plus petit écart type", "Celui du plus grand gain possible", "Ils sont aussi risqués l'un que l'autre"],
              answer: 1,
              why: "L'écart type mesure la dispersion des gains autour de la moyenne : plus il est faible, moins le résultat est incertain.",
            },
            {
              q: "Sous l'hypothèse p = 0,9, on obtient P(X ≤ 82) ≈ 0,01 pour l'observation 82. Que conclure au seuil de 5 % ?",
              options: ["On a prouvé que p = 0,9", "On accepte p = 0,82", "On ne peut rien dire", "On rejette p = 0,9"],
              answer: 3,
              why: "0,01 < 0,05 : l'observation est trop improbable sous l'hypothèse, que l'on rejette, avec un risque d'erreur.",
            },
          ],
          trap: "Oublier de retirer la mise pour obtenir le gain algébrique, ou croire que V(aX + b) = aV(X) + b : la constante b n'agit pas sur la variance et le coefficient a intervient au carré.",
          method: "Présentez toujours la loi dans un tableau (valeurs, probabilités) et vérifiez que la somme des probabilités vaut 1 avant tout calcul. Contrôlez ensuite que E(X) est comprise entre la plus petite et la plus grande valeur de X.",
        },
      ],
    },

    /* ================================================================== */
    /* LOIS À DENSITÉ                                                       */
    /* ================================================================== */
    {
      id: 'lois-a-densite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-uniforme',
          title: 'Lois à densité et loi uniforme',
          minutes: 30,
          objectives: [
            "Définir une fonction de densité sur un intervalle et calculer P(c ≤ X ≤ d) comme une intégrale.",
            "Savoir que, pour une variable à densité, P(X = c) = 0, et en tirer les conséquences.",
            "Connaître la loi uniforme sur [a ; b] : sa densité, le calcul des probabilités et son espérance (a + b)/2.",
            "Modéliser un temps d'attente ou un retard par une loi uniforme et simuler cette loi.",
          ],
          course: [
            {
              heading: "Des variables aléatoires qui prennent toutes les valeurs d'un intervalle",
              paragraphs: [
                "Le temps d'attente d'un bus, la taille d'une personne ou la durée de vie d'une ampoule peuvent prendre toutes les valeurs d'un intervalle, et non quelques valeurs isolées. On ne peut plus donner la probabilité de chaque valeur : on décrit la loi par une fonction de densité f, et l'on calcule la probabilité d'un intervalle comme une aire sous la courbe de f.",
                "Une fonction f est une densité de probabilité sur un intervalle I si elle est continue (ou continue par morceaux), positive sur I, et si l'aire totale sous sa courbe sur I vaut 1. Une variable X a pour densité f si, pour tout intervalle [c ; d] inclus dans I, P(c ≤ X ≤ d) est égale à l'intégrale de c à d de f(x) dx, c'est-à-dire à l'aire sous la courbe de f entre c et d.",
                "Analogie : imaginez un histogramme des fréquences dont les classes deviennent de plus en plus étroites, avec des aires de rectangles égales aux fréquences. À la limite, le haut des rectangles dessine la courbe de densité, et l'aire sous la courbe remplace la somme des aires des rectangles.",
              ],
              box: { label: "Définition", text: "f est une densité sur [a ; b] si f est continue, positive sur [a ; b] et ∫ₐᵇ f(x) dx = 1. X a pour densité f si, pour tout [c ; d] inclus dans [a ; b], P(c ≤ X ≤ d) est l'intégrale de c à d de f(x) dx." },
            },
            {
              heading: "Conséquences et espérance",
              paragraphs: [
                "Pour une variable à densité, la probabilité d'une valeur isolée est nulle : P(X = c) = 0, car l'aire d'un segment est nulle. On peut donc indifféremment écrire des inégalités larges ou strictes : P(c ≤ X ≤ d) = P(c < X < d). On utilise aussi l'événement contraire : P(X > c) = 1 - P(X ≤ c).",
                "Attention : f(c) n'est pas une probabilité, et peut même dépasser 1. Par exemple, f(x) = 2x est une densité sur [0 ; 1], car elle est positive et ∫₀¹ 2x dx = [x²]₀¹ = 1 ; on a f(1) = 2. Avec cette densité, P(X ≤ 0,5) = 0,5² - 0² = 0,25, puisque x² est une primitive de 2x.",
                "L'espérance d'une variable X de densité f sur [a ; b] est E(X) = ∫ₐᵇ x f(x) dx. C'est la valeur moyenne de X à long terme, l'analogue de la formule Σ pᵢxᵢ. Pour la densité f(x) = 2x sur [0 ; 1], E(X) = ∫₀¹ 2x² dx = [2x³/3]₀¹ = 2/3.",
              ],
              box: { label: "Propriété", text: "Si X a une densité : P(X = c) = 0 ; P(c ≤ X ≤ d) = P(c < X < d) ; P(X > c) = 1 - P(X ≤ c). Sur [a ; b], E(X) = ∫ₐᵇ x f(x) dx." },
            },
            {
              heading: "La loi uniforme sur [a ; b]",
              paragraphs: [
                "La loi uniforme sur [a ; b] modélise un nombre choisi « au hasard » dans [a ; b], sans qu'aucune zone ne soit privilégiée. Sa densité est constante : f(x) = 1/(b - a) sur [a ; b], de sorte que l'aire du rectangle de base b - a et de hauteur 1/(b - a) vaut 1.",
                "La probabilité d'un intervalle est alors proportionnelle à sa longueur : P(c ≤ X ≤ d) = (d - c)/(b - a). Son espérance est le milieu de l'intervalle : E(X) = (a + b)/2.",
                "Exemple : un bus passe toutes les 15 minutes et un voyageur arrive à l'arrêt à un instant aléatoire. Son temps d'attente X, en minutes, suit la loi uniforme sur [0 ; 15]. La probabilité d'attendre au moins 10 minutes est P(10 ≤ X ≤ 15) = 5/15 = 1/3, et le temps d'attente moyen est E(X) = 7,5 minutes.",
              ],
              box: { label: "Formule", text: "Loi uniforme sur [a ; b] : densité f(x) = 1/(b - a) ; P(c ≤ X ≤ d) = (d - c)/(b - a) pour a ≤ c ≤ d ≤ b ; E(X) = (a + b)/2." },
            },
            {
              heading: "Simuler une loi uniforme",
              paragraphs: [
                "En Python, la fonction random() du module random renvoie un nombre aléatoire de [0 ; 1[ selon la loi uniforme. Pour simuler la loi uniforme sur [a ; b], on écrit a + (b - a) * random(). En répétant la simulation un grand nombre de fois et en calculant la fréquence d'un événement, on obtient une estimation de sa probabilité, qui se rapproche de la valeur théorique quand le nombre de simulations augmente.",
              ],
              box: { label: "Repère", text: "from random import random ; x = 2 + 8 * random() simule un nombre suivant la loi uniforme sur [2 ; 10]." },
            },
          ],
          keyPoints: [
            "Une densité sur I est continue, positive, et l'aire totale sous sa courbe vaut 1.",
            "P(c ≤ X ≤ d) est l'intégrale de f entre c et d : une probabilité est une aire sous la courbe de densité.",
            "P(X = c) = 0, donc les inégalités larges ou strictes donnent la même probabilité.",
            "Loi uniforme sur [a ; b] : f(x) = 1/(b - a) et P(c ≤ X ≤ d) = (d - c)/(b - a).",
            "Espérance de la loi uniforme : E(X) = (a + b)/2, le milieu de l'intervalle.",
            "Une valeur f(c) de la densité n'est pas une probabilité.",
          ],
          example: {
            statement: "Un métro passe toutes les 6 minutes. Un voyageur arrive sur le quai à un instant aléatoire ; son temps d'attente X, en minutes, suit la loi uniforme sur [0 ; 6]. Calculer P(X ≤ 2), P(1 ≤ X ≤ 4), P(X > 5) et E(X).",
            solution: [
              "La densité de X est f(x) = 1/6 sur [0 ; 6].",
              "P(X ≤ 2) = P(0 ≤ X ≤ 2) = (2 - 0)/6 = 1/3.",
              "P(1 ≤ X ≤ 4) = (4 - 1)/6 = 3/6 = 1/2.",
              "P(X > 5) = P(5 < X ≤ 6) = (6 - 5)/6 = 1/6.",
              "E(X) = (0 + 6)/2 = 3 : le voyageur attend en moyenne 3 minutes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "X suit la loi uniforme sur [2 ; 10]. 1. Donner sa densité. 2. Calculer P(X ≤ 5), P(4 ≤ X ≤ 9), P(X > 7) et P(X = 5). 3. Calculer E(X).",
              hint: "La longueur de l'intervalle est 10 - 2 = 8 : chaque probabilité est une longueur divisée par 8.",
              solution: [
                "1. f(x) = 1/(10 - 2) = 1/8 sur [2 ; 10].",
                "2. P(X ≤ 5) = (5 - 2)/8 = 3/8 = 0,375.",
                "P(4 ≤ X ≤ 9) = (9 - 4)/8 = 5/8 = 0,625.",
                "P(X > 7) = (10 - 7)/8 = 3/8 = 0,375. P(X = 5) = 0, comme pour toute valeur isolée.",
                "3. E(X) = (2 + 10)/2 = 6.",
              ],
            },
            {
              level: 2,
              statement: "Soit k un réel et f la fonction définie sur [0 ; 4] par f(x) = k(4 - x). 1. Déterminer k pour que f soit une densité de probabilité sur [0 ; 4]. 2. X est une variable de densité f. Calculer P(X ≤ 2). 3. Calculer E(X).",
              hint: "Écrivez la condition ∫₀⁴ f(x) dx = 1. Pour l'espérance, intégrez x f(x) = k(4x - x²).",
              solution: [
                "1. ∫₀⁴ (4 - x) dx = [4x - x²/2]₀⁴ = 16 - 8 = 8, donc ∫₀⁴ f(x) dx = 8k. La condition 8k = 1 donne k = 1/8. Avec k = 1/8, f est continue et positive sur [0 ; 4] (car 4 - x ≥ 0) : c'est une densité.",
                "2. P(X ≤ 2) = (1/8) × ∫₀² (4 - x) dx = (1/8) × [4x - x²/2]₀² = (1/8) × (8 - 2) = 6/8 = 0,75.",
                "3. E(X) = ∫₀⁴ x × (1/8)(4 - x) dx = (1/8) × [2x² - x³/3]₀⁴ = (1/8) × (32 - 64/3) = (1/8) × 32/3 = 4/3 ≈ 1,33.",
                "Les petites valeurs sont plus probables (la densité décroît), ce qui explique que l'espérance soit inférieure au milieu 2 de l'intervalle.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Le retard d'un train, en minutes, est modélisé par une variable X qui suit la loi uniforme sur [0 ; 20] (données fictives). 1. Calculer P(X > 15) et E(X). 2. Le train a déjà 5 minutes de retard. Calculer la probabilité que son retard dépasse 15 minutes, et la comparer à P(X > 10). La loi uniforme possède-t-elle la propriété d'absence de mémoire ? 3. Un voyageur manque sa correspondance si le retard dépasse 12 minutes. Il prend ce train 5 jours de suite, les retards étant indépendants. Quelle est la probabilité qu'il ne manque jamais sa correspondance, arrondie au millième ? Combien de correspondances attrape-t-il en moyenne sur les 5 jours ?",
              hint: "Pour la question 2, utilisez la formule des probabilités conditionnelles. Pour la question 3, introduisez le nombre Y de jours où la correspondance est attrapée, qui suit une loi binomiale.",
              solution: [
                "1. P(X > 15) = (20 - 15)/20 = 0,25 et E(X) = (0 + 20)/2 = 10 minutes.",
                "2. La probabilité cherchée est P(X > 15)/P(X > 5), car l'événement X > 15 est inclus dans X > 5. Elle vaut (5/20)/(15/20) = 5/15 = 1/3.",
                "Or P(X > 10) = 10/20 = 0,5 ≠ 1/3. Attendre 5 minutes de plus ne se comporte pas comme si l'on repartait de zéro : la loi uniforme n'a pas la propriété d'absence de mémoire.",
                "3. Chaque jour, la correspondance est attrapée si X ≤ 12, avec la probabilité 12/20 = 0,6. Le nombre Y de jours où elle est attrapée suit B(5 ; 0,6).",
                "P(Y = 5) = 0,6⁵ = 0,07776 ≈ 0,078 : il n'a qu'environ 8 % de chances d'attraper toutes ses correspondances.",
                "E(Y) = 5 × 0,6 = 3 : il attrape en moyenne 3 correspondances sur 5.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "X suit la loi uniforme sur [0 ; 10]. Associez chaque grandeur à sa valeur.",
            pairs: [
              { left: "P(X ≤ 3)", right: "0,3" },
              { left: "P(2 ≤ X ≤ 7)", right: "0,5" },
              { left: "P(X > 9)", right: "0,1" },
              { left: "P(X = 4)", right: "0" },
              { left: "E(X)", right: "5" },
              { left: "P(X ≥ 2)", right: "0,8" },
            ],
          },
          quiz: [
            {
              q: "X suit la loi uniforme sur [0 ; 20]. Que vaut P(X ≤ 5) ?",
              options: ["0,5", "0,25", "5", "0,2"],
              answer: 1,
              why: "P(X ≤ 5) = (5 - 0)/(20 - 0) = 0,25 : la probabilité est proportionnelle à la longueur.",
            },
            {
              q: "X est une variable aléatoire à densité. Que vaut P(X = 3) ?",
              options: ["f(3)", "1/3", "0", "Cela dépend de la loi"],
              answer: 2,
              why: "Pour une variable à densité, la probabilité d'une valeur isolée est toujours nulle : l'aire d'un segment est nulle.",
            },
            {
              q: "La densité de la loi uniforme sur [2 ; 7] est la fonction constante égale à :",
              options: ["5", "1/7", "1/2", "1/5"],
              answer: 3,
              why: "f(x) = 1/(b - a) = 1/(7 - 2) = 1/5, pour que l'aire totale vaille 1.",
            },
            {
              q: "Quelle est l'espérance de la loi uniforme sur [4 ; 10] ?",
              options: ["6", "7", "3", "14"],
              answer: 1,
              why: "E(X) = (a + b)/2 = (4 + 10)/2 = 7, le milieu de l'intervalle.",
            },
            {
              q: "Laquelle de ces fonctions est une densité de probabilité sur [0 ; 1] ?",
              options: ["f(x) = x", "f(x) = 3x", "f(x) = 1 - 2x", "f(x) = 2x"],
              answer: 3,
              why: "2x est positive sur [0 ; 1] et ∫₀¹ 2x dx = 1. Les intégrales de x et 3x valent ½ et 3/2, et 1 - 2x est négative sur ]½ ; 1].",
            },
          ],
          trap: "Prendre la valeur de la densité f(c) pour la probabilité P(X = c), alors que cette probabilité est nulle et qu'une densité peut dépasser 1 : seules les aires sous la courbe sont des probabilités.",
          method: "Pour une loi uniforme, faites un schéma : un segment [a ; b] sur lequel vous hachurez l'intervalle demandé. La probabilité est le rapport des deux longueurs ; vérifiez qu'elle est comprise entre 0 et 1.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'loi-exponentielle',
          title: 'La loi exponentielle',
          minutes: 35,
          objectives: [
            "Connaître la densité de la loi exponentielle de paramètre λ et calculer P(X ≤ t), P(X > t) et P(a ≤ X ≤ b).",
            "Connaître et interpréter l'espérance 1/λ et déterminer λ à partir d'une donnée.",
            "Exploiter la propriété d'absence de mémoire.",
            "Modéliser une durée de vie sans vieillissement ou une désintégration radioactive par une loi exponentielle.",
          ],
          course: [
            {
              heading: "La densité de la loi exponentielle",
              paragraphs: [
                "Soit λ un réel strictement positif. La loi exponentielle de paramètre λ est la loi à densité sur [0 ; +∞[ dont la densité est f(t) = λe^(-λt). Elle modélise des durées : durée de vie d'un composant électronique qui ne s'use pas, temps d'attente entre deux appels à un standard, durée avant la désintégration d'un noyau radioactif.",
                "La fonction f est continue et positive. Pour tout x ≥ 0, ∫₀ˣ λe^(-λt) dt = [-e^(-λt)]₀ˣ = 1 - e^(-λx). Quand x tend vers +∞, e^(-λx) tend vers 0 et cette aire tend vers 1 : l'aire totale sous la courbe, sur [0 ; +∞[, vaut bien 1.",
                "La courbe de f part de la valeur λ en 0 et décroît vers 0 : les durées courtes sont les plus probables, mais des durées très longues restent possibles.",
              ],
              box: { label: "Définition", text: "Soit λ > 0. X suit la loi exponentielle de paramètre λ si X a pour densité la fonction f définie sur [0 ; +∞[ par f(t) = λe^(-λt)." },
            },
            {
              heading: "Calculer des probabilités",
              paragraphs: [
                "Grâce au calcul précédent, pour tout t ≥ 0, P(X ≤ t) = 1 - e^(-λt), et par complémentaire P(X > t) = e^(-λt). Pour 0 ≤ a ≤ b, P(a ≤ X ≤ b) = P(X ≤ b) - P(X ≤ a) = e^(-λa) - e^(-λb).",
                "Exemple : la durée de vie d'un composant, en années, suit la loi exponentielle de paramètre 0,2 (données fictives). La probabilité qu'il tombe en panne avant 3 ans est 1 - e^(-0,6) ≈ 0,451 ; celle qu'il dure plus de 5 ans est e^(-1) ≈ 0,368.",
                "Pour trouver une durée t telle que P(X > t) vaut une valeur donnée, ou pour déterminer λ à partir d'une probabilité, on résout une équation avec le logarithme : e^(-λt) = q équivaut à -λt = ln q.",
              ],
              box: { label: "Formule", text: "X suit la loi exponentielle de paramètre λ. Pour t ≥ 0 : P(X ≤ t) = 1 - e^(-λt) ; P(X > t) = e^(-λt). Pour 0 ≤ a ≤ b : P(a ≤ X ≤ b) = e^(-λa) - e^(-λb)." },
            },
            {
              heading: "Espérance et demi-vie",
              paragraphs: [
                "L'espérance de la loi exponentielle de paramètre λ est E(X) = 1/λ (résultat admis). C'est la durée de vie moyenne. Ainsi, plus λ est grand, plus la durée moyenne est courte : λ s'interprète comme un taux de panne par unité de temps. Inversement, une durée de vie moyenne de 2 000 heures correspond à λ = 1/2 000 = 0,0005.",
                "La médiane, appelée demi-vie en physique nucléaire, est la durée T telle que P(X ≤ T) = 0,5. L'équation e^(-λT) = 0,5 donne T = ln 2/λ. Pour un grand nombre de noyaux radioactifs, la proportion de noyaux encore présents au bout du temps t est très proche de P(X > t) = e^(-λt) : au bout d'une demi-vie, il en reste la moitié ; au bout de deux demi-vies, le quart. La demi-vie du carbone 14, utilisé pour dater des restes organiques, est d'environ 5 730 ans.",
              ],
              box: { label: "Formule", text: "E(X) = 1/λ (durée moyenne). Demi-vie (médiane) : T = ln 2/λ, solution de P(X ≤ T) = 0,5." },
            },
            {
              heading: "L'absence de mémoire",
              paragraphs: [
                "Pour tous réels t ≥ 0 et h ≥ 0, la probabilité que X dépasse t + h sachant qu'elle a dépassé t vaut P(X > t + h)/P(X > t) = e^(-λ(t + h))/e^(-λt) = e^(-λh) = P(X > h). Un composant qui a déjà fonctionné t années a la même probabilité de durer encore h années qu'un composant neuf.",
                "C'est la version continue de la propriété de la loi géométrique. Elle signifie que le composant ne vieillit pas : ses pannes sont accidentelles et non dues à l'usure. C'est pourquoi la loi exponentielle convient pour des noyaux radioactifs ou certains composants électroniques, mais pas pour la durée de vie humaine, ni pour des pièces mécaniques qui s'usent.",
              ],
              box: { label: "Propriété", text: "Absence de mémoire : pour tous t ≥ 0 et h ≥ 0, la probabilité de l'événement X > t + h sachant X > t est égale à P(X > h)." },
            },
          ],
          keyPoints: [
            "Densité de la loi exponentielle de paramètre λ > 0 : f(t) = λe^(-λt) sur [0 ; +∞[.",
            "P(X ≤ t) = 1 - e^(-λt) ; P(X > t) = e^(-λt) ; P(a ≤ X ≤ b) = e^(-λa) - e^(-λb).",
            "E(X) = 1/λ : plus λ est grand, plus la durée moyenne est courte.",
            "Demi-vie (médiane) : T = ln 2/λ.",
            "Absence de mémoire : sachant X > t, la probabilité de X > t + h est P(X > h).",
            "Modèle adapté aux phénomènes sans vieillissement (radioactivité), pas à la durée de vie humaine.",
          ],
          example: {
            statement: "La durée de vie X d'un composant, en années, suit la loi exponentielle de paramètre λ = 0,2 (données fictives). 1. Calculer P(X ≤ 3) et P(X > 5), au millième. 2. Calculer E(X). 3. Le composant fonctionne depuis 3 ans. Quelle est la probabilité qu'il fonctionne encore au moins 5 ans ?",
            solution: [
              "1. P(X ≤ 3) = 1 - e^(-0,2 × 3) = 1 - e^(-0,6) ≈ 1 - 0,549 = 0,451.",
              "P(X > 5) = e^(-0,2 × 5) = e^(-1) ≈ 0,368.",
              "2. E(X) = 1/0,2 = 5 : la durée de vie moyenne est de 5 ans.",
              "3. On cherche la probabilité de X > 8 sachant X > 3. Par absence de mémoire, elle vaut P(X > 5) = e^(-1) ≈ 0,368.",
              "Le composant usagé a exactement la même probabilité de durer encore 5 ans qu'un composant neuf.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "X suit la loi exponentielle de paramètre 0,5. Calculer, au millième : 1. P(X ≤ 2) ; 2. P(X > 4) ; 3. P(1 ≤ X ≤ 3). 4. Calculer E(X).",
              hint: "Appliquez les formules P(X ≤ t) = 1 - e^(-λt), P(X > t) = e^(-λt) et P(a ≤ X ≤ b) = e^(-λa) - e^(-λb).",
              solution: [
                "1. P(X ≤ 2) = 1 - e^(-0,5 × 2) = 1 - e^(-1) ≈ 0,632.",
                "2. P(X > 4) = e^(-0,5 × 4) = e^(-2) ≈ 0,135.",
                "3. P(1 ≤ X ≤ 3) = e^(-0,5) - e^(-1,5) ≈ 0,6065 - 0,2231 ≈ 0,383.",
                "4. E(X) = 1/0,5 = 2.",
              ],
            },
            {
              level: 2,
              statement: "La durée de fonctionnement, en heures, d'une ampoule LED suit une loi exponentielle. Sa durée de vie moyenne est de 2 000 heures (données fictives). 1. Déterminer le paramètre λ. 2. Calculer la probabilité que l'ampoule fonctionne plus de 1 000 heures, au millième. 3. Déterminer la durée T, à l'heure près, telle qu'une ampoule sur deux soit en panne avant T heures.",
              hint: "E(X) = 1/λ. Pour la question 3, résolvez P(X ≤ T) = 0,5, c'est-à-dire e^(-λT) = 0,5.",
              solution: [
                "1. E(X) = 1/λ = 2 000, donc λ = 1/2 000 = 0,0005.",
                "2. P(X > 1 000) = e^(-0,0005 × 1 000) = e^(-0,5) ≈ 0,607.",
                "3. P(X ≤ T) = 0,5 équivaut à e^(-0,0005T) = 0,5, soit -0,0005T = ln 0,5 = -ln 2, soit T = ln 2/0,0005 = 2 000 ln 2.",
                "T ≈ 1 386 heures : la moitié des ampoules tombent en panne avant 1 386 heures, bien avant la durée moyenne de 2 000 heures.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). La durée de vie, en années, d'un noyau de carbone 14 avant sa désintégration suit la loi exponentielle de paramètre λ. La demi-vie du carbone 14 est d'environ 5 730 ans, c'est-à-dire que P(X ≤ 5 730) = 0,5. 1. Montrer que λ = ln 2/5 730 et en donner une valeur approchée. 2. Calculer la probabilité qu'un noyau ne soit pas désintégré au bout de 10 000 ans, au millième. 3. Calculer la durée de vie moyenne d'un noyau, à l'année près. 4. Pour un grand nombre de noyaux, la proportion de noyaux restants au bout de t années est proche de P(X > t). Un échantillon ne contient plus que 25 % de son carbone 14 initial (données fictives). Estimer son âge.",
              hint: "Partez de e^(-5 730λ) = 0,5. Pour la question 4, résolvez e^(-λt) = 0,25 en remarquant que 0,25 = 0,5².",
              solution: [
                "1. P(X ≤ 5 730) = 0,5 équivaut à 1 - e^(-5 730λ) = 0,5, soit e^(-5 730λ) = 0,5, soit -5 730λ = ln 0,5 = -ln 2. Donc λ = ln 2/5 730 ≈ 1,21 × 10⁻⁴.",
                "2. P(X > 10 000) = e^(-10 000λ) ≈ 0,298 : environ 30 % des noyaux sont encore présents au bout de 10 000 ans.",
                "3. E(X) = 1/λ = 5 730/ln 2 ≈ 8 267 ans.",
                "4. On résout e^(-λt) = 0,25, soit -λt = ln 0,25 = -2 ln 2, soit t = 2 ln 2/λ = 2 × 5 730 = 11 460.",
                "L'échantillon a environ 11 460 ans : il a traversé deux demi-vies, la quantité ayant été divisée par 2 puis encore par 2.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? X suit la loi exponentielle de paramètre λ > 0.",
            statements: [
              { text: "Pour tout t ≥ 0, P(X > t) = e^(-λt).", true: true, why: "C'est le complémentaire de P(X ≤ t) = 1 - e^(-λt)." },
              { text: "L'espérance de X est égale à λ.", true: false, why: "E(X) = 1/λ : un taux de panne élevé donne une durée moyenne courte." },
              { text: "Sachant qu'un composant a fonctionné 5 ans, la probabilité qu'il fonctionne encore 2 ans est P(X > 2).", true: true, why: "C'est la propriété d'absence de mémoire." },
              { text: "La loi exponentielle est un bon modèle pour la durée de vie humaine.", true: false, why: "Les êtres humains vieillissent : leur risque de décès augmente avec l'âge, ce que la loi exponentielle exclut." },
              { text: "La demi-vie vaut ln 2/λ.", true: true, why: "e^(-λT) = 0,5 donne T = ln 2/λ." },
              { text: "P(X = 3) = λe^(-3λ).", true: false, why: "P(X = 3) = 0 ; λe^(-3λ) est la valeur de la densité en 3, pas une probabilité." },
              { text: "Plus λ est grand, plus la durée de vie moyenne est courte.", true: true, why: "E(X) = 1/λ diminue quand λ augmente." },
            ],
          },
          quiz: [
            {
              q: "X suit la loi exponentielle de paramètre 0,5. Que vaut E(X) ?",
              options: ["0,5", "e^(-0,5)", "2", "ln 2"],
              answer: 2,
              why: "E(X) = 1/λ = 1/0,5 = 2.",
            },
            {
              q: "X suit la loi exponentielle de paramètre λ. Que vaut P(X > t) pour t ≥ 0 ?",
              options: ["e^(-λt)", "1 - e^(-λt)", "λe^(-λt)", "e^(λt)"],
              answer: 0,
              why: "P(X ≤ t) = 1 - e^(-λt), donc P(X > t) = e^(-λt).",
            },
            {
              q: "Un composant dont la durée de vie suit une loi exponentielle a fonctionné 3 ans. La probabilité qu'il fonctionne encore au moins 2 ans est :",
              options: ["P(X > 5)", "P(X > 2)", "P(X > 3)", "P(X ≤ 2)"],
              answer: 1,
              why: "Par absence de mémoire, la probabilité de X > 5 sachant X > 3 est P(X > 2).",
            },
            {
              q: "Quelle est la demi-vie T de la loi exponentielle de paramètre λ ?",
              options: ["T = λ ln 2", "T = 2/λ", "T = 1/(2λ)", "T = ln 2/λ"],
              answer: 3,
              why: "e^(-λT) = 0,5 équivaut à λT = ln 2, d'où T = ln 2/λ.",
            },
            {
              q: "La durée de vie moyenne d'un appareil, de loi exponentielle, est de 4 ans. Que vaut λ ?",
              options: ["4", "0,25", "ln 4", "e^(-4)"],
              answer: 1,
              why: "E(X) = 1/λ = 4, donc λ = 1/4 = 0,25.",
            },
          ],
          trap: "Confondre λ et la durée moyenne 1/λ, ou écrire P(X ≤ t) = e^(-λt) en inversant les deux formules. Rappel : P(X ≤ t) doit valoir 0 pour t = 0, ce qui est le cas de 1 - e^(-λt).",
          method: "Pour vérifier une formule, testez-la en t = 0 et quand t devient très grand : P(X ≤ t) doit passer de 0 à presque 1, P(X > t) de 1 à presque 0. Un calcul de λ se contrôle en recalculant E(X) = 1/λ.",
        },
      ],
    },

    /* ================================================================== */
    /* STATISTIQUE À DEUX VARIABLES                                         */
    /* ================================================================== */
    {
      id: 'statistique-deux-variables',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'nuage-ajustement-affine',
          title: 'Nuage de points et ajustement affine',
          minutes: 35,
          objectives: [
            "Représenter une série statistique à deux variables par un nuage de points et calculer les coordonnées du point moyen.",
            "Déterminer, à la calculatrice ou par le calcul, la droite d'ajustement par la méthode des moindres carrés.",
            "Interpréter le coefficient de corrélation et distinguer corrélation et causalité.",
            "Utiliser un ajustement pour interpoler ou extrapoler, en discutant la fiabilité de l'estimation.",
          ],
          course: [
            {
              heading: "Nuage de points et point moyen",
              paragraphs: [
                "Une série statistique à deux variables quantitatives associe à chaque individu deux mesures : par exemple la température extérieure x et le nombre y de glaces vendues, ou le rang x d'une année et le chiffre d'affaires y. Les n couples (xᵢ ; yᵢ) se représentent dans un repère par un nuage de points.",
                "Le point moyen du nuage est le point G de coordonnées (x̄ ; ȳ), où x̄ est la moyenne des xᵢ et ȳ celle des yᵢ. Il résume la position du nuage, comme la moyenne résume une série à une variable.",
                "L'allure du nuage oriente l'étude : si les points semblent répartis autour d'une droite, on effectue un ajustement affine ; si le nuage est courbé, on cherchera un autre modèle (leçon suivante) ; si les points sont dispersés sans forme, aucun ajustement n'est pertinent.",
              ],
              box: { label: "Définition", text: "Le point moyen du nuage des points Mᵢ(xᵢ ; yᵢ), i de 1 à n, est G(x̄ ; ȳ), avec x̄ = (x₁ + ... + xₙ)/n et ȳ = (y₁ + ... + yₙ)/n." },
            },
            {
              heading: "La droite des moindres carrés",
              paragraphs: [
                "Ajuster le nuage par une droite d'équation y = ax + b, c'est choisir a et b pour que la droite passe « au plus près » des points. La méthode des moindres carrés choisit la droite qui rend minimale la somme des carrés des écarts verticaux entre les points et la droite : (y₁ - ax₁ - b)² + ... + (yₙ - axₙ - b)².",
                "On admet que cette droite existe, qu'elle est unique, et que son coefficient directeur est a = [Σ(xᵢ - x̄)(yᵢ - ȳ)] / [Σ(xᵢ - x̄)²]. Le numérateur, divisé par n, s'appelle la covariance de x et y. La droite passe par le point moyen G, d'où b = ȳ - a x̄.",
                "En pratique, a et b sont donnés par la calculatrice (régression linéaire) ou par un tableur. Il faut savoir les obtenir, les arrondir comme demandé et vérifier que la droite passe par G.",
              ],
              box: { label: "Formule", text: "Droite des moindres carrés de y en x : y = ax + b avec a = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)² et b = ȳ - a x̄. Elle passe par le point moyen G(x̄ ; ȳ)." },
            },
            {
              heading: "Le coefficient de corrélation",
              paragraphs: [
                "La calculatrice fournit aussi le coefficient de corrélation linéaire r, toujours compris entre -1 et 1. Son signe indique le sens de la tendance (r > 0 : y augmente avec x ; r < 0 : y diminue quand x augmente). Plus |r| est proche de 1, plus les points sont proches d'être alignés ; on considère souvent qu'un ajustement affine est justifié lorsque |r| dépasse 0,9 environ, mais ce n'est qu'un repère.",
                "Une forte corrélation ne prouve pas une relation de cause à effet. Les ventes de glaces et le nombre de coups de soleil sont fortement corrélés au fil des jours de l'année, mais aucune des deux grandeurs ne provoque l'autre : toutes deux dépendent de l'ensoleillement. On parle alors d'un facteur commun.",
              ],
              box: { label: "À retenir", text: "r est compris entre -1 et 1 ; |r| proche de 1 traduit un nuage presque aligné. Corrélation ne signifie pas causalité : un facteur commun peut expliquer les deux variables." },
            },
            {
              heading: "Interpoler et extrapoler",
              paragraphs: [
                "L'équation de la droite permet d'estimer y pour une valeur de x donnée, ou l'inverse en résolvant ax + b = y. Si la valeur de x est comprise entre la plus petite et la plus grande des xᵢ, on interpole : l'estimation est en général fiable si l'ajustement est bon.",
                "Si x est en dehors de l'intervalle des données, on extrapole : on suppose que la tendance se prolonge, ce qui n'est pas garanti. Une croissance des ventes observée pendant cinq ans ne durera pas nécessairement dix ans de plus. Toute extrapolation, surtout lointaine, doit être présentée comme une estimation prudente.",
              ],
              box: { label: "Repère", text: "Interpolation : à l'intérieur de l'intervalle des données, estimation plutôt fiable. Extrapolation : en dehors, elle suppose que la tendance se maintient, et doit être commentée avec prudence." },
            },
          ],
          keyPoints: [
            "Point moyen G(x̄ ; ȳ) : moyennes des xᵢ et des yᵢ.",
            "Droite des moindres carrés : elle minimise la somme des carrés des écarts verticaux.",
            "a = Σ(xᵢ - x̄)(yᵢ - ȳ) / Σ(xᵢ - x̄)² et b = ȳ - a x̄ : la droite passe par G.",
            "r ∈ [-1 ; 1] ; |r| proche de 1 : points presque alignés ; le signe de r donne le sens de la tendance.",
            "Corrélation n'est pas causalité.",
            "Extrapoler loin des données est risqué : à commenter avec prudence.",
          ],
          example: {
            statement: "Le tableau donne le chiffre d'affaires y (en milliers d'euros) d'une petite entreprise selon le rang x de l'année (données fictives) : x = 1, 2, 3, 4, 5 et y = 12, 15, 19, 22, 27. 1. Calculer les coordonnées du point moyen G. 2. Déterminer par le calcul la droite des moindres carrés de y en x. 3. Estimer le chiffre d'affaires de l'année de rang 7.",
            solution: [
              "1. x̄ = (1 + 2 + 3 + 4 + 5)/5 = 3 et ȳ = (12 + 15 + 19 + 22 + 27)/5 = 95/5 = 19. Donc G(3 ; 19).",
              "2. Écarts à la moyenne : xᵢ - x̄ = -2, -1, 0, 1, 2 et yᵢ - ȳ = -7, -4, 0, 3, 8.",
              "Σ(xᵢ - x̄)(yᵢ - ȳ) = 14 + 4 + 0 + 3 + 16 = 37 et Σ(xᵢ - x̄)² = 4 + 1 + 0 + 1 + 4 = 10. Donc a = 37/10 = 3,7.",
              "b = ȳ - a x̄ = 19 - 3,7 × 3 = 19 - 11,1 = 7,9. La droite a pour équation y = 3,7x + 7,9 (la calculatrice donne le même résultat, avec r ≈ 0,996).",
              "3. Pour x = 7 : y = 3,7 × 7 + 7,9 = 25,9 + 7,9 = 33,8.",
              "On peut estimer le chiffre d'affaires de l'année de rang 7 à environ 33,8 milliers d'euros, en supposant que la tendance se maintient (c'est une extrapolation).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère la série statistique : x = 2, 4, 6, 8 et y = 5, 9, 12, 18. La calculatrice donne pour droite des moindres carrés y = 2,1x + 0,5. 1. Calculer les coordonnées du point moyen G. 2. Vérifier que G appartient à la droite. 3. Estimer y pour x = 5, puis pour x = 10, en précisant s'il s'agit d'une interpolation ou d'une extrapolation.",
              hint: "Remplacez x par x̄ dans l'équation de la droite et comparez avec ȳ.",
              solution: [
                "1. x̄ = (2 + 4 + 6 + 8)/4 = 20/4 = 5 et ȳ = (5 + 9 + 12 + 18)/4 = 44/4 = 11. Donc G(5 ; 11).",
                "2. 2,1 × 5 + 0,5 = 10,5 + 0,5 = 11 = ȳ : G appartient bien à la droite, comme toute droite des moindres carrés.",
                "3. Pour x = 5 : y = 11. C'est une interpolation, car 5 est entre 2 et 8.",
                "Pour x = 10 : y = 2,1 × 10 + 0,5 = 21,5. C'est une extrapolation (10 > 8), à interpréter avec prudence.",
              ],
            },
            {
              level: 2,
              statement: "Un glacier relève la température maximale x (en °C) et le nombre y de glaces vendues sur cinq journées (données fictives) : x = 10, 15, 20, 25, 30 et y = 40, 52, 61, 75, 82. 1. Calculer x̄ et ȳ. 2. Calculer le coefficient directeur a et l'ordonnée à l'origine b de la droite des moindres carrés. 3. Estimer le nombre de glaces vendues un jour à 22 °C. 4. La calculatrice donne r ≈ 0,996. Peut-on en conclure que la chaleur est la seule cause des ventes ?",
              hint: "Dressez un tableau des écarts xᵢ - x̄ et yᵢ - ȳ, puis de leurs produits et des carrés des écarts en x.",
              solution: [
                "1. x̄ = 100/5 = 20 et ȳ = (40 + 52 + 61 + 75 + 82)/5 = 310/5 = 62.",
                "2. xᵢ - x̄ = -10, -5, 0, 5, 10 et yᵢ - ȳ = -22, -10, -1, 13, 20. Σ(xᵢ - x̄)(yᵢ - ȳ) = 220 + 50 + 0 + 65 + 200 = 535 et Σ(xᵢ - x̄)² = 100 + 25 + 0 + 25 + 100 = 250.",
                "a = 535/250 = 2,14 et b = 62 - 2,14 × 20 = 62 - 42,8 = 19,2. La droite a pour équation y = 2,14x + 19,2.",
                "3. Pour x = 22 : y = 2,14 × 22 + 19,2 = 47,08 + 19,2 = 66,28. On peut estimer les ventes à environ 66 glaces.",
                "4. r ≈ 0,996 indique une très forte corrélation linéaire positive, mais pas une causalité exclusive : d'autres facteurs (jour de la semaine, vacances, affluence) peuvent jouer, et une corrélation ne démontre jamais à elle seule une relation de cause à effet.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Une entreprise étudie le lien entre ses dépenses publicitaires mensuelles x (en milliers d'euros) et son chiffre d'affaires mensuel y (en milliers d'euros) sur six mois (données fictives) : x = 1, 2, 3, 4, 5, 6 et y = 30, 34, 37, 43, 45, 51. 1. Calculer les coordonnées du point moyen G. 2. À la calculatrice, on obtient la droite des moindres carrés y = 4,11x + 25,6 (a arrondi au centième) et r ≈ 0,994. Commenter la valeur de r et vérifier que G est sur la droite (aux arrondis près). 3. Estimer le chiffre d'affaires pour 8 milliers d'euros de dépenses publicitaires. Quelle réserve faut-il formuler ? 4. Selon ce modèle, quel budget publicitaire minimal permettrait d'atteindre un chiffre d'affaires de 60 milliers d'euros ? Arrondir à la centaine d'euros.",
              hint: "Pour la question 4, résolvez l'inéquation 4,11x + 25,6 ≥ 60.",
              solution: [
                "1. x̄ = 21/6 = 3,5 et ȳ = (30 + 34 + 37 + 43 + 45 + 51)/6 = 240/6 = 40. Donc G(3,5 ; 40).",
                "2. r ≈ 0,994 est très proche de 1 : le nuage est presque aligné sur une droite croissante, l'ajustement affine est pertinent. Vérification : 4,11 × 3,5 + 25,6 = 14,385 + 25,6 = 39,985 ≈ 40 = ȳ (l'écart vient de l'arrondi de a, qui vaut exactement 144/35).",
                "3. Pour x = 8 : y = 4,11 × 8 + 25,6 = 32,88 + 25,6 = 58,48. Le modèle prévoit un chiffre d'affaires d'environ 58,5 milliers d'euros.",
                "Réserve : 8 est en dehors de l'intervalle [1 ; 6] des données, c'est une extrapolation ; l'effet de la publicité peut s'atténuer au-delà d'un certain budget, et la corrélation ne prouve pas à elle seule que la publicité cause la hausse.",
                "4. 4,11x + 25,6 ≥ 60 équivaut à 4,11x ≥ 34,4, soit x ≥ 34,4/4,11 ≈ 8,37.",
                "Selon ce modèle, il faudrait un budget d'au moins 8,4 milliers d'euros environ, soit 8 400 euros, ce qui est là encore une extrapolation.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un ajustement affine calculé à la main.",
            items: [
              "Représenter le nuage de points (xᵢ ; yᵢ).",
              "Observer la forme du nuage pour juger si un ajustement affine est pertinent.",
              "Calculer x̄ et ȳ, coordonnées du point moyen G.",
              "Calculer le coefficient directeur a à partir des écarts aux moyennes.",
              "Calculer b = ȳ - a x̄, pour que la droite passe par G.",
              "Utiliser l'équation y = ax + b pour estimer une valeur, avec prudence hors du domaine des données.",
            ],
          },
          quiz: [
            {
              q: "Quel est le point moyen du nuage formé par les points (1 ; 4), (3 ; 6) et (5 ; 11) ?",
              options: ["(3 ; 6)", "(9 ; 21)", "(3 ; 7)", "(5 ; 11)"],
              answer: 2,
              why: "x̄ = (1 + 3 + 5)/3 = 3 et ȳ = (4 + 6 + 11)/3 = 21/3 = 7.",
            },
            {
              q: "La droite des moindres carrés passe toujours par :",
              options: ["le premier point du nuage", "l'origine du repère", "le point le plus haut", "le point moyen G"],
              answer: 3,
              why: "Son ordonnée à l'origine vérifie b = ȳ - a x̄, ce qui signifie que G(x̄ ; ȳ) est sur la droite.",
            },
            {
              q: "Que signifie un coefficient de corrélation r = -0,98 ?",
              options: ["Aucun lien entre x et y", "Un nuage presque aligné, décroissant", "Une relation de cause à effet entre x et y, de sens contraire", "Un nuage dispersé sans tendance"],
              answer: 1,
              why: "|r| proche de 1 indique des points presque alignés, et r < 0 une tendance décroissante. Cela ne dit rien d'une causalité.",
            },
            {
              q: "Que rend minimale la méthode des moindres carrés ?",
              options: ["La somme des (yᵢ - axᵢ - b)²", "La somme des distances à l'origine", "Le nombre de points hors de la droite", "L'écart entre la première et la dernière valeur"],
              answer: 0,
              why: "Elle minimise la somme des carrés des écarts verticaux entre les points et la droite.",
            },
            {
              q: "L'ajustement d'une série est y = 2x + 3. Quelle estimation donne-t-il pour x = 4 ?",
              options: ["8", "11", "10", "14"],
              answer: 1,
              why: "y = 2 × 4 + 3 = 11.",
            },
          ],
          trap: "Conclure à une relation de cause à effet parce que r est proche de 1, ou utiliser la droite pour des prévisions très éloignées des données sans signaler qu'il s'agit d'une extrapolation.",
          method: "Vérifiez systématiquement que la droite obtenue passe par le point moyen G : c'est un contrôle rapide qui détecte les erreurs de saisie dans la calculatrice. Pour toute estimation, précisez s'il s'agit d'une interpolation ou d'une extrapolation.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'changement-variable',
          title: 'Ajustements par changement de variable',
          minutes: 35,
          objectives: [
            "Reconnaître un nuage de points qui n'est pas rectiligne et choisir un changement de variable adapté (z = ln y, X = ln x, X = 1/x...).",
            "Effectuer un ajustement affine sur les nouvelles variables, puis revenir aux variables initiales.",
            "Exploiter un modèle exponentiel ou un modèle puissance pour estimer ou prévoir une valeur.",
          ],
          course: [
            {
              heading: "Quand le nuage n'est pas rectiligne",
              paragraphs: [
                "De nombreux phénomènes ne suivent pas une tendance affine. Une population de bactéries qui double à intervalles réguliers, un capital placé à intérêts composés ou la diffusion d'une épidémie à ses débuts ont une croissance exponentielle : le nuage de points est courbé vers le haut et un ajustement affine donnerait de mauvaises estimations.",
                "L'idée est de transformer l'une des variables, ou les deux, pour obtenir un nouveau nuage proche d'une droite. On effectue alors un ajustement affine sur les nouvelles variables, puis on revient aux variables initiales. Le choix du changement de variable est souvent suggéré par l'énoncé ou par la nature du phénomène.",
              ],
              box: { label: "Repère", text: "Démarche : 1. observer le nuage ; 2. choisir un changement de variable ; 3. calculer les nouvelles valeurs ; 4. vérifier que le nouveau nuage est presque rectiligne ; 5. ajustement affine ; 6. retour aux variables initiales." },
            },
            {
              heading: "Le modèle exponentiel : z = ln y",
              paragraphs: [
                "Si y semble évoluer selon y = k × e^(ax), avec k > 0, alors ln y = ln k + ax. En posant z = ln y, on obtient z = ax + b avec b = ln k : la relation entre x et z est affine. On calcule donc zᵢ = ln yᵢ pour chaque point (ce qui exige yᵢ > 0), puis on ajuste z en x par la méthode des moindres carrés.",
                "Retour à y : de z = ax + b, on tire y = e^(ax + b) = e^(b) × e^(ax). Le nombre e^(a) est le coefficient multiplicateur de y quand x augmente de 1 : si a = 0,2, alors e^(0,2) ≈ 1,22, soit une hausse d'environ 22 % par unité de x. On reconnaît une suite géométrique de raison e^(a) lorsque x prend des valeurs entières.",
              ],
              box: { label: "Formule", text: "Si z = ln y est ajusté par z = ax + b, alors y ≈ e^(b) × e^(ax). Quand x augmente de 1, y est multiplié par e^(a)." },
            },
            {
              heading: "D'autres changements de variable",
              paragraphs: [
                "Modèle puissance : si y ≈ k × xᵃ avec x > 0 et y > 0, alors ln y = ln k + a ln x. En posant X = ln x et Y = ln y, on obtient une relation affine Y = aX + b. Ce modèle est fréquent en physique et en biologie : la troisième loi de Kepler relie ainsi la période d'une planète à la taille de son orbite.",
                "Autres cas : si y ≈ a/x + b, on pose X = 1/x ; si y ≈ ax² + b, on pose X = x² ; si y ≈ 1/(ax + b), on pose z = 1/y. Dans chaque cas, on choisit la transformation qui rend la relation affine.",
                "Attention : la droite obtenue minimise les écarts sur les nouvelles variables, pas sur les variables initiales. Le modèle obtenu après retour à y est un bon modèle, mais pas exactement « le meilleur » au sens des moindres carrés sur y.",
              ],
              box: { label: "À retenir", text: "y = k e^(ax) : z = ln y. y = k xᵃ : X = ln x et Y = ln y. y = a/x + b : X = 1/x. y = 1/(ax + b) : z = 1/y. Le logarithme n'est possible que pour des valeurs strictement positives." },
            },
          ],
          keyPoints: [
            "Un nuage courbé appelle un changement de variable qui le rend presque rectiligne.",
            "Modèle exponentiel y = k e^(ax) : on ajuste z = ln y en fonction de x.",
            "Retour : si z = ax + b, alors y ≈ e^(b) × e^(ax), et y est multiplié par e^(a) quand x augmente de 1.",
            "Modèle puissance y = k xᵃ : on ajuste ln y en fonction de ln x.",
            "Le logarithme exige des valeurs strictement positives.",
            "Les prévisions restent des estimations, surtout en extrapolation.",
          ],
          example: {
            statement: "Une culture de bactéries est observée pendant 4 heures. Le nombre N de bactéries (en milliers) en fonction du temps t (en heures) est donné par (données fictives) : t = 0, 1, 2, 3, 4 et N = 2,0 ; 3,0 ; 4,4 ; 6,7 ; 10,0. 1. On pose z = ln N. Calculer les valeurs de z au millième. 2. La calculatrice donne l'ajustement z = 0,402t + 0,691 (coefficients arrondis au millième). En déduire une expression de N en fonction de t. 3. Estimer le nombre de bactéries au bout de 6 heures.",
            solution: [
              "1. z = ln N donne : 0,693 ; 1,099 ; 1,482 ; 1,902 ; 2,303. Ces valeurs augmentent d'environ 0,4 à chaque heure : le nuage (t ; z) est presque rectiligne.",
              "2. De z = 0,402t + 0,691, on tire N = e^(0,402t + 0,691) = e^(0,691) × e^(0,402t).",
              "e^(0,691) ≈ 2,00, donc N ≈ 2,00 × e^(0,402t).",
              "Interprétation : e^(0,402) ≈ 1,495, donc le nombre de bactéries est multiplié par 1,495 environ chaque heure (hausse d'environ 50 % par heure).",
              "3. Pour t = 6 : N ≈ e^(0,402 × 6 + 0,691) = e^(3,103) ≈ 22,3.",
              "On peut estimer la population à environ 22 300 bactéries au bout de 6 heures, si la croissance se poursuit au même rythme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour une série (xᵢ ; yᵢ) à valeurs yᵢ strictement positives, on a posé z = ln y et obtenu l'ajustement z = 0,3x + 1,2. 1. Exprimer y en fonction de x sous la forme y = k e^(ax), avec k arrondi au centième. 2. Estimer y pour x = 10. 3. De quel pourcentage y augmente-t-il quand x augmente de 1 ?",
              hint: "Appliquez la fonction exponentielle aux deux membres de ln y = 0,3x + 1,2.",
              solution: [
                "1. ln y = 0,3x + 1,2 donne y = e^(0,3x + 1,2) = e^(1,2) × e^(0,3x). Comme e^(1,2) ≈ 3,32, y ≈ 3,32e^(0,3x).",
                "2. Pour x = 10 : y = e^(0,3 × 10 + 1,2) = e^(4,2) ≈ 66,7.",
                "3. Quand x augmente de 1, y est multiplié par e^(0,3) ≈ 1,35 : y augmente d'environ 35 %.",
              ],
            },
            {
              level: 2,
              statement: "Le nombre y d'abonnés d'une application (en milliers) selon le rang x de l'année est donné par (données fictives) : x = 0, 1, 2, 3, 4 et y = 5, 8, 13, 20, 33. 1. Calculer z = ln y pour chaque valeur, au millième. 2. La calculatrice donne pour ajustement de z en x : z = 0,469x + 1,611 (au millième). Exprimer y en fonction de x. 3. Estimer le nombre d'abonnés l'année de rang 6. 4. Selon ce modèle, à partir de quelle année le nombre d'abonnés dépasse-t-il 100 milliers ?",
              hint: "Pour la question 4, résolvez 0,469x + 1,611 > ln 100, puisque y > 100 équivaut à ln y > ln 100.",
              solution: [
                "1. z = ln 5 ≈ 1,609 ; ln 8 ≈ 2,079 ; ln 13 ≈ 2,565 ; ln 20 ≈ 2,996 ; ln 33 ≈ 3,497. Les écarts successifs sont proches de 0,47 : le nuage (x ; z) est presque rectiligne.",
                "2. y = e^(0,469x + 1,611) = e^(1,611) × e^(0,469x) ≈ 5,01 × e^(0,469x). Le nombre d'abonnés est multiplié par e^(0,469) ≈ 1,60 chaque année.",
                "3. Pour x = 6 : y ≈ e^(0,469 × 6 + 1,611) = e^(4,425) ≈ 83,5. On peut estimer à environ 83 500 le nombre d'abonnés l'année de rang 6.",
                "4. y > 100 équivaut à ln y > ln 100, soit 0,469x + 1,611 > 4,605, soit x > (4,605 - 1,611)/0,469 ≈ 6,38.",
                "Le nombre d'abonnés dépasserait 100 milliers à partir de l'année de rang 7, sous réserve que la croissance se maintienne.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type bac). Le tableau donne, pour cinq planètes, le demi-grand axe a de leur orbite (en unités astronomiques, UA) et leur période de révolution T (en années), valeurs arrondies : Mercure (0,387 ; 0,241), Vénus (0,723 ; 0,615), Terre (1 ; 1), Mars (1,524 ; 1,881), Jupiter (5,203 ; 11,86). On pose X = ln a et Y = ln T. 1. Calculer X et Y pour Mars, au millième. 2. Les autres valeurs sont : Mercure (-0,949 ; -1,423), Vénus (-0,324 ; -0,486), Terre (0 ; 0), Jupiter (1,649 ; 2,473). La calculatrice donne pour ajustement de Y en X : Y = 1,500X + 0,000 (au millième). En déduire une relation entre T et a. 3. Montrer que ce modèle s'écrit T² = a³ (troisième loi de Kepler). 4. Le demi-grand axe de l'orbite de Cérès est d'environ 2,77 UA. Estimer sa période de révolution.",
              hint: "De Y = 1,5X, déduisez ln T = 1,5 ln a = ln(a^(1,5)), puis élevez au carré.",
              solution: [
                "1. Pour Mars : X = ln 1,524 ≈ 0,421 et Y = ln 1,881 ≈ 0,632.",
                "2. Y = 1,5X s'écrit ln T = 1,5 ln a = ln(a^(1,5)). La fonction ln étant strictement croissante, T = a^(1,5).",
                "3. En élevant au carré : T² = (a^(1,5))² = a³. Le carré de la période est égal au cube du demi-grand axe, avec ces unités : c'est la troisième loi de Kepler.",
                "4. Pour Cérès : T ≈ 2,77^(1,5) = 2,77 × √2,77 ≈ 2,77 × 1,664 ≈ 4,61.",
                "La période de révolution de Cérès est d'environ 4,6 années, ce qui est cohérent avec sa position entre Mars et Jupiter.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque modèle (à gauche) au changement de variable qui le rend affine (à droite).",
            pairs: [
              { left: "y = k e^(ax)", right: "z = ln y, ajusté en fonction de x" },
              { left: "y = k xᵃ, avec x > 0", right: "X = ln x et Y = ln y" },
              { left: "y = a/x + b", right: "X = 1/x, puis y ajusté en fonction de X" },
              { left: "y = ax² + b", right: "X = x², puis y ajusté en fonction de X" },
              { left: "y = 1/(ax + b)", right: "z = 1/y, ajusté en fonction de x" },
              { left: "y = a√x + b", right: "X = √x, puis y ajusté en fonction de X" },
            ],
          },
          quiz: [
            {
              q: "On a ajusté z = ln y par z = 0,5x + 1. Quelle expression approche y ?",
              options: ["0,5x + e", "ln(0,5x + 1)", "e × e^(0,5x)", "e^(0,5) × eˣ"],
              answer: 2,
              why: "y = e^(0,5x + 1) = e¹ × e^(0,5x).",
            },
            {
              q: "Pour un modèle puissance y = k × xᵃ, quel ajustement affine réalise-t-on ?",
              options: ["ln y en fonction de ln x", "ln y en fonction de x seul", "y en fonction de ln x", "1/y en fonction de x"],
              answer: 0,
              why: "ln y = ln k + a ln x : la relation entre ln x et ln y est affine.",
            },
            {
              q: "On a ajusté z = ln y par z = 0,2x + 2. Comment évolue y quand x augmente de 1 ?",
              options: ["+20 % exactement", "Environ +22 %", "+2 % environ", "Il est multiplié par 2"],
              answer: 1,
              why: "y est multiplié par e^(0,2) ≈ 1,221, soit une hausse d'environ 22 %.",
            },
            {
              q: "À quoi sert un changement de variable avant un ajustement ?",
              options: ["À augmenter le nombre de points", "À supprimer les valeurs extrêmes", "À obtenir r = 1 exactement", "À rendre le nuage rectiligne"],
              answer: 3,
              why: "On transforme les variables pour obtenir un nuage proche d'une droite, sur lequel un ajustement affine est pertinent.",
            },
            {
              q: "Quel changement de variable est impossible si certaines valeurs yᵢ sont négatives ?",
              options: ["z = ln y", "z = 2y + 1", "z = y³", "z = -y"],
              answer: 0,
              why: "La fonction ln n'est définie que sur ]0 ; +∞[.",
            },
          ],
          trap: "Oublier de revenir aux variables initiales (donner une prévision de z au lieu de y), ou écrire y = e^(a) x + e^(b) au lieu de y = e^(b) × e^(ax) en appliquant mal l'exponentielle.",
          method: "Écrivez au brouillon le modèle visé, par exemple y = k e^(ax), puis prenez son logarithme pour voir quelle variable transformer. Après l'ajustement, vérifiez votre formule en recalculant une valeur du tableau.",
        },
      ],
    },
  ],
}
