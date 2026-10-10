import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-3e',
  chapters: [
    /* ==================================================================== */
    /* ÉQUATIONS ET PROBLÈMES                                                 */
    /* ==================================================================== */
    {
      id: 'equations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'equations-premier-degre',
          title: "Résoudre une équation du premier degré",
          minutes: 30,
          objectives: [
            "Reconnaître une équation et tester si un nombre en est solution.",
            "Résoudre une équation du premier degré à une inconnue en isolant l'inconnue.",
            "Vérifier une solution en remplaçant l'inconnue par la valeur trouvée.",
          ],
          course: [
            {
              heading: "Équation, inconnue, solution",
              paragraphs: [
                "Une équation est une égalité dans laquelle figure un nombre inconnu, désigné par une lettre, le plus souvent x. Par exemple, 3x + 5 = 17 est une équation d'inconnue x. L'expression placée à gauche du signe = s'appelle le premier membre, celle placée à droite le second membre.",
                "Pour savoir si un nombre est solution, on le substitue à x dans chaque membre et on compare les résultats. Avec x = 4 : 3 × 4 + 5 = 12 + 5 = 17, et le second membre vaut 17. Les deux membres sont égaux, donc 4 est une solution. Avec x = 2 : 3 × 2 + 5 = 11, et 11 ≠ 17, donc 2 n'est pas une solution.",
                "Une équation du premier degré est une équation dans laquelle l'inconnue n'apparaît qu'à la puissance 1 (pas de x², pas de x au dénominateur) : 5x - 7 = 2x + 8 en est une, x² = 9 n'en est pas une.",
              ],
              box: { label: "Définition", text: "Résoudre une équation, c'est trouver toutes les valeurs de l'inconnue pour lesquelles l'égalité est vraie. Ces valeurs s'appellent les solutions de l'équation." },
            },
            {
              heading: "Les règles de la balance",
              paragraphs: [
                "Imaginez une balance à deux plateaux en équilibre : le premier membre sur un plateau, le second sur l'autre. Si vous ajoutez ou retirez la même masse des deux côtés, l'équilibre est conservé. Si vous doublez ou partagez en deux le contenu des deux plateaux, l'équilibre est encore conservé.",
                "C'est exactement ce que l'on fait avec une équation : on la transforme en une équation plus simple qui a les mêmes solutions, jusqu'à obtenir une égalité du type x = nombre. On ne multiplie et on ne divise jamais par 0, car cela détruirait l'information : 0 × 5 = 0 × 7 est vrai alors que 5 ≠ 7.",
              ],
              box: { label: "Propriété", text: "On obtient une équation qui a les mêmes solutions si l'on ajoute (ou soustrait) un même nombre aux deux membres, ou si l'on multiplie (ou divise) les deux membres par un même nombre non nul." },
            },
            {
              heading: "La méthode pas à pas",
              paragraphs: [
                "Résolvons 5x - 7 = 2x + 8. On regroupe les termes en x à gauche en soustrayant 2x aux deux membres : 3x - 7 = 8. On regroupe les nombres à droite en ajoutant 7 aux deux membres : 3x = 15. On divise les deux membres par 3 : x = 5. Vérification : 5 × 5 - 7 = 18 et 2 × 5 + 8 = 18. La solution est 5.",
                "Quand l'équation contient des parenthèses, on commence par développer. Pour 2(x - 3) = x + 4 : on développe, 2x - 6 = x + 4 ; on soustrait x, x - 6 = 4 ; on ajoute 6, x = 10. Vérification : 2 × (10 - 3) = 14 et 10 + 4 = 14.",
                "Dire « on fait passer 7 de l'autre côté en changeant son signe » est un raccourci de la règle de la balance : ajouter 7 aux deux membres fait disparaître -7 à gauche et fait apparaître + 7 à droite.",
              ],
            },
            {
              heading: "Solutions non entières et cas particuliers",
              paragraphs: [
                "La solution n'est pas toujours un nombre entier. Pour 4x = 3, on divise par 4 : x = 3/4, soit 0,75. Pour 3x = 2, la solution est x = 2/3 : on garde la fraction, car l'écriture décimale 0,666... ne tombe jamais juste et un arrondi ne serait pas une solution exacte.",
                "Deux situations rares existent. Si les x disparaissent et qu'il reste une égalité fausse, comme pour x + 2 = x + 5 (on obtient 2 = 5), l'équation n'a aucune solution. Si les x disparaissent et qu'il reste une égalité toujours vraie, comme pour 2(x + 1) = 2x + 2, tous les nombres sont solutions.",
              ],
              box: { label: "À retenir", text: "On développe, on regroupe les x d'un côté et les nombres de l'autre, on réduit pour obtenir ax = b, puis on divise par a (a ≠ 0) : x = b/a. On termine toujours par une vérification et une phrase de conclusion." },
            },
          ],
          keyPoints: [
            "Une solution d'une équation est une valeur de l'inconnue qui rend l'égalité vraie.",
            "On peut ajouter ou soustraire un même nombre aux deux membres d'une équation.",
            "On peut multiplier ou diviser les deux membres par un même nombre non nul.",
            "Méthode : développer, regrouper les x d'un côté et les nombres de l'autre, réduire, diviser par le coefficient de x.",
            "Une solution non entière s'écrit sous forme de fraction exacte, par exemple x = 2/3.",
            "On vérifie la solution en la remplaçant dans l'équation de départ.",
          ],
          example: {
            statement: "Résoudre l'équation 7x + 3 = 3x - 9.",
            solution: [
              "On soustrait 3x aux deux membres : 7x - 3x + 3 = -9, soit 4x + 3 = -9.",
              "On soustrait 3 aux deux membres : 4x = -9 - 3, soit 4x = -12.",
              "On divise les deux membres par 4 : x = -12 ÷ 4 = -3.",
              "Vérification : 7 × (-3) + 3 = -21 + 3 = -18 et 3 × (-3) - 9 = -9 - 9 = -18. Les deux membres sont égaux.",
              "Conclusion : l'équation a une seule solution, x = -3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résoudre les équations suivantes : a) x + 9 = 4 ; b) 6x = 42 ; c) 2x - 5 = 11.",
              hint: "Isolez x en faisant l'opération inverse : une addition se défait par une soustraction, une multiplication par une division.",
              solution: [
                "a) On soustrait 9 aux deux membres : x = 4 - 9 = -5. Vérification : -5 + 9 = 4.",
                "b) On divise les deux membres par 6 : x = 42 ÷ 6 = 7. Vérification : 6 × 7 = 42.",
                "c) On ajoute 5 aux deux membres : 2x = 16, puis on divise par 2 : x = 8. Vérification : 2 × 8 - 5 = 11.",
                "Les solutions sont : a) -5 ; b) 7 ; c) 8.",
              ],
            },
            {
              level: 2,
              statement: "Résoudre les équations suivantes : a) 4(x - 2) = 2x + 6 ; b) 5 - 2x = 3(x + 5).",
              hint: "Développez d'abord les parenthèses, puis regroupez les termes en x dans un seul membre. Attention aux signes quand le coefficient de x est négatif.",
              solution: [
                "a) On développe : 4x - 8 = 2x + 6. On soustrait 2x : 2x - 8 = 6. On ajoute 8 : 2x = 14. On divise par 2 : x = 7.",
                "Vérification de a) : 4 × (7 - 2) = 4 × 5 = 20 et 2 × 7 + 6 = 20. La solution est 7.",
                "b) On développe : 5 - 2x = 3x + 15. On soustrait 3x : 5 - 5x = 15. On soustrait 5 : -5x = 10. On divise par -5 : x = -2.",
                "Vérification de b) : 5 - 2 × (-2) = 5 + 4 = 9 et 3 × (-2 + 5) = 3 × 3 = 9. La solution est -2.",
              ],
            },
            {
              level: 3,
              statement: "Voici deux programmes de calcul. Programme A : choisir un nombre, le multiplier par 4, soustraire 3 au résultat. Programme B : choisir un nombre, lui ajouter 5, multiplier le résultat par 2. 1) Vérifier qu'en choisissant 2, le programme A donne 5 et le programme B donne 14. 2) On note x le nombre choisi. Exprimer en fonction de x le résultat de chaque programme. 3) Quel nombre faut-il choisir pour que les deux programmes donnent le même résultat ?",
              hint: "Traduisez chaque programme par une expression en x, en respectant l'ordre des étapes (des parenthèses sont nécessaires pour le programme B), puis écrivez l'égalité des deux expressions.",
              solution: [
                "1) Programme A : 2 × 4 = 8, puis 8 - 3 = 5. Programme B : 2 + 5 = 7, puis 7 × 2 = 14. Les résultats annoncés sont corrects.",
                "2) Programme A : 4x - 3. Programme B : (x + 5) × 2 = 2(x + 5) = 2x + 10.",
                "3) On résout 4x - 3 = 2x + 10. On soustrait 2x : 2x - 3 = 10. On ajoute 3 : 2x = 13. On divise par 2 : x = 6,5.",
                "Vérification : A donne 4 × 6,5 - 3 = 26 - 3 = 23 et B donne (6,5 + 5) × 2 = 11,5 × 2 = 23.",
                "Il faut choisir 6,5 : les deux programmes donnent alors 23.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution d'une équation du premier degré.",
            items: [
              "Développer les parenthèses s'il y en a",
              "Regrouper les termes en x dans un même membre",
              "Regrouper les nombres dans l'autre membre",
              "Réduire chaque membre pour obtenir ax = b",
              "Diviser les deux membres par a (a non nul)",
              "Vérifier en remplaçant x par la valeur trouvée",
              "Conclure par une phrase donnant la solution",
            ],
          },
          quiz: [
            {
              q: "Le nombre 3 est-il solution de l'équation 2x + 1 = 7 ?",
              options: ["Oui, car 2 × 3 + 1 = 7", "Non, car 2 × 3 + 1 = 6", "On ne peut pas savoir sans résoudre l'équation"],
              answer: 0,
              why: "On remplace x par 3 : 2 × 3 + 1 = 6 + 1 = 7, qui est bien égal au second membre.",
            },
            {
              q: "Quelle est la solution de l'équation x - 8 = -3 ?",
              options: ["-11", "11", "5", "-5"],
              answer: 2,
              why: "On ajoute 8 aux deux membres : x = -3 + 8 = 5. Vérification : 5 - 8 = -3.",
            },
            {
              q: "Pour résoudre 5x = 20, on :",
              options: ["soustrait 5 aux deux membres", "divise les deux membres par 5", "multiplie les deux membres par 5", "ajoute 5 aux deux membres"],
              answer: 1,
              why: "5x signifie 5 × x : on défait la multiplication par une division, x = 20 ÷ 5 = 4.",
            },
            {
              q: "Quelle est la solution de 3x + 4 = x + 10 ?",
              options: ["x = 7", "x = 3,5", "x = 14", "x = 3"],
              answer: 3,
              why: "On soustrait x puis 4 : 2x = 6, donc x = 3. Vérification : 3 × 3 + 4 = 13 et 3 + 10 = 13.",
            },
            {
              q: "Quelle est la solution de -2x = 8 ?",
              options: ["x = -4", "x = 4", "x = 10", "x = -16"],
              answer: 0,
              why: "On divise les deux membres par -2 : x = 8 ÷ (-2) = -4. Le signe du coefficient compte.",
            },
          ],
          trap: "Changer un terme de membre sans changer son signe, ou diviser par le coefficient en oubliant son signe : de -2x = 8, on obtient x = -4 et non x = 4.",
          method: "Vérifiez toujours votre solution dans l'équation de départ, et non dans une ligne intermédiaire : si les deux membres donnent le même nombre, la solution est juste ; sinon, relisez chaque ligne pour trouver l'erreur de signe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'equation-produit-nul',
          title: "Équations produit nul et équations du type x² = a",
          minutes: 30,
          objectives: [
            "Résoudre une équation produit nul du type (ax + b)(cx + d) = 0.",
            "Factoriser une expression pour se ramener à une équation produit nul.",
            "Résoudre une équation du type x² = a selon le signe de a.",
          ],
          course: [
            {
              heading: "La propriété du produit nul",
              paragraphs: [
                "Si l'on multiplie deux nombres et que le résultat est 0, alors l'un des deux nombres au moins est 0. En effet, si aucun des deux n'était nul, leur produit ne pourrait pas être nul. Par exemple, si 3 × y = 0, alors y = 0, puisque 3 n'est pas nul.",
                "Inversement, dès qu'un facteur est nul, le produit est nul : 0 × 125 = 0 et (-7) × 0 = 0. Cette propriété permet de résoudre des équations qui ne sont pas du premier degré, à condition qu'elles se présentent sous la forme d'un produit égal à 0.",
              ],
              box: { label: "Propriété", text: "Un produit de facteurs est nul si et seulement si l'un au moins de ses facteurs est nul. Autrement dit, A × B = 0 équivaut à A = 0 ou B = 0." },
            },
            {
              heading: "Résoudre une équation produit nul",
              paragraphs: [
                "Résolvons (x - 4)(2x + 6) = 0. C'est un produit de deux facteurs égal à 0, donc x - 4 = 0 ou 2x + 6 = 0. La première équation donne x = 4. La seconde donne 2x = -6, soit x = -3. L'équation a deux solutions : 4 et -3.",
                "Vérification : pour x = 4, le premier facteur vaut 0, donc le produit vaut 0 ; pour x = -3, le second facteur vaut 2 × (-3) + 6 = 0, donc le produit vaut 0.",
                "Attention : la propriété ne s'applique que si l'un des membres est égal à 0. L'équation (x - 1)(x + 2) = 5 ne se résout pas en écrivant x - 1 = 5 ou x + 2 = 5, car un produit peut valoir 5 sans qu'aucun facteur ne vaille 5.",
              ],
            },
            {
              heading: "Se ramener à un produit nul en factorisant",
              paragraphs: [
                "Quand l'équation n'est pas déjà un produit, on factorise. Pour x² - 5x = 0, le facteur commun est x : x(x - 5) = 0. Donc x = 0 ou x - 5 = 0, et les solutions sont 0 et 5.",
                "On peut aussi utiliser l'identité a² - b² = (a - b)(a + b). Pour x² - 9 = 0, on écrit x² - 3² = 0, donc (x - 3)(x + 3) = 0. Les solutions sont 3 et -3.",
                "Ne divisez jamais les deux membres par x pour simplifier : x² = 5x divisé par x donnerait x = 5 et ferait perdre la solution x = 0. Il faut au contraire tout ramener dans un membre, x² - 5x = 0, puis factoriser.",
              ],
            },
            {
              heading: "Les équations du type x² = a",
              paragraphs: [
                "Un carré n'est jamais négatif. Si a est strictement négatif, l'équation x² = a n'a donc aucune solution : x² = -4 n'a pas de solution. Si a = 0, la seule solution de x² = 0 est 0.",
                "Si a est strictement positif, l'équation x² = a a deux solutions opposées, √a et -√a. Par exemple, x² = 49 a pour solutions 7 et -7, car 7² = 49 et (-7)² = 49. De même, x² = 7 a pour solutions √7 et -√7 (environ 2,65 et -2,65) : on donne les valeurs exactes, puis éventuellement des arrondis.",
              ],
              box: { label: "Propriété", text: "Si a > 0, l'équation x² = a a deux solutions, √a et -√a. Si a = 0, elle a une seule solution, 0. Si a < 0, elle n'a aucune solution." },
            },
          ],
          keyPoints: [
            "A × B = 0 équivaut à A = 0 ou B = 0 : on résout chaque facteur séparément.",
            "La propriété ne s'applique que si l'un des deux membres vaut 0.",
            "Pour se ramener à un produit nul, on regroupe tout dans un membre puis on factorise.",
            "x² - a² = (x - a)(x + a) : x² - 9 = 0 a pour solutions 3 et -3.",
            "x² = a a deux solutions √a et -√a si a > 0, une seule (0) si a = 0, aucune si a < 0.",
            "On ne divise jamais par x : on risquerait de perdre la solution 0.",
          ],
          example: {
            statement: "Résoudre l'équation (3x - 6)(x + 5) = 0.",
            solution: [
              "C'est un produit de facteurs égal à 0. D'après la propriété du produit nul, 3x - 6 = 0 ou x + 5 = 0.",
              "3x - 6 = 0 donne 3x = 6, donc x = 2.",
              "x + 5 = 0 donne x = -5.",
              "Vérification : pour x = 2, (3 × 2 - 6)(2 + 5) = 0 × 7 = 0 ; pour x = -5, (3 × (-5) - 6)(-5 + 5) = (-21) × 0 = 0.",
              "L'équation a deux solutions : 2 et -5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résoudre les équations suivantes : a) (x - 7)(x + 1) = 0 ; b) x² = 64 ; c) x² = -9.",
              hint: "Pour a), annulez chaque facteur l'un après l'autre. Pour b) et c), regardez d'abord le signe du nombre placé dans le second membre.",
              solution: [
                "a) Produit nul : x - 7 = 0 ou x + 1 = 0, donc x = 7 ou x = -1. Les solutions sont 7 et -1.",
                "b) 64 > 0, donc l'équation a deux solutions : √64 = 8 et -8. Vérification : 8² = 64 et (-8)² = 64.",
                "c) -9 < 0 et un carré n'est jamais négatif : l'équation n'a aucune solution.",
              ],
            },
            {
              level: 2,
              statement: "Résoudre les équations suivantes : a) x² + 6x = 0 ; b) 4x² - 25 = 0 ; c) (2x + 1)(5 - x) = 0.",
              hint: "Pour a), cherchez un facteur commun. Pour b), reconnaissez une différence de deux carrés : 4x² = (2x)² et 25 = 5².",
              solution: [
                "a) On factorise par x : x(x + 6) = 0. Donc x = 0 ou x + 6 = 0, soit x = -6. Les solutions sont 0 et -6.",
                "b) 4x² - 25 = (2x)² - 5² = (2x - 5)(2x + 5). Donc 2x - 5 = 0 ou 2x + 5 = 0, soit x = 2,5 ou x = -2,5.",
                "Vérification de b) : 4 × 2,5² - 25 = 4 × 6,25 - 25 = 25 - 25 = 0, et de même pour -2,5.",
                "c) 2x + 1 = 0 donne x = -0,5 ; 5 - x = 0 donne x = 5. Les solutions sont -0,5 et 5.",
              ],
            },
            {
              level: 3,
              statement: "On considère l'expression E = (x - 3)² - 16. 1) Développer et réduire E. 2) Factoriser E. 3) Résoudre l'équation E = 0. 4) Un carré a pour côté (x - 3) cm, avec x > 3. Pour quelle valeur de x son aire est-elle égale à 16 cm² ?",
              hint: "Pour factoriser, remarquez que 16 = 4² et utilisez a² - b² = (a - b)(a + b) avec a = x - 3 et b = 4. Pour la question 4, faites le lien avec l'équation E = 0.",
              solution: [
                "1) (x - 3)² = (x - 3)(x - 3) = x² - 3x - 3x + 9 = x² - 6x + 9. Donc E = x² - 6x + 9 - 16 = x² - 6x - 7.",
                "2) E = (x - 3)² - 4² = (x - 3 - 4)(x - 3 + 4) = (x - 7)(x + 1). Contrôle : (x - 7)(x + 1) = x² + x - 7x - 7 = x² - 6x - 7.",
                "3) E = 0 équivaut à (x - 7)(x + 1) = 0, donc x - 7 = 0 ou x + 1 = 0. Les solutions sont 7 et -1.",
                "4) L'aire du carré vaut (x - 3)². Elle est égale à 16 lorsque (x - 3)² - 16 = 0, c'est-à-dire E = 0, donc x = 7 ou x = -1.",
                "Comme x > 3, seule la valeur x = 7 convient : le côté mesure alors 7 - 3 = 4 cm et l'aire 4² = 16 cm².",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Produit nul et équations x² = a.",
            statements: [
              { text: "Si A × B = 0, alors A = 0 ou B = 0.", true: true, why: "C'est la propriété du produit nul : l'un des facteurs au moins est nul." },
              { text: "L'équation (x - 2)(x + 3) = 0 a pour solutions 2 et 3.", true: false, why: "x + 3 = 0 donne x = -3 : les solutions sont 2 et -3." },
              { text: "L'équation x² = 16 a une seule solution, 4.", true: false, why: "(-4)² = 16 aussi : les solutions sont 4 et -4." },
              { text: "L'équation x² = -25 n'a aucune solution.", true: true, why: "Un carré n'est jamais négatif." },
              { text: "Pour résoudre x² = 3x, on peut diviser les deux membres par x.", true: false, why: "On perdrait la solution 0. On écrit x² - 3x = 0, puis x(x - 3) = 0 : solutions 0 et 3." },
              { text: "L'équation (x + 1)(x - 4) = 6 se résout directement avec la propriété du produit nul.", true: false, why: "Le second membre n'est pas 0 : la propriété ne s'applique pas." },
              { text: "L'équation x² = 0 a une seule solution : 0.", true: true, why: "Seul 0 a un carré nul." },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les solutions de (x + 2)(x - 9) = 0 ?",
              options: ["2 et -9", "-2 et 9", "-2 et -9", "2 et 9"],
              answer: 1,
              why: "x + 2 = 0 donne x = -2 et x - 9 = 0 donne x = 9.",
            },
            {
              q: "Combien de solutions l'équation x² = 10 a-t-elle ?",
              options: ["Aucune", "Une seule", "Deux"],
              answer: 2,
              why: "10 > 0, donc il y a deux solutions : √10 et -√10.",
            },
            {
              q: "Quelle factorisation permet de résoudre x² - 81 = 0 ?",
              options: ["(x - 9)²", "(x - 81)(x + 81)", "x(x - 81)", "(x - 9)(x + 9)"],
              answer: 3,
              why: "x² - 81 = x² - 9² = (x - 9)(x + 9), d'où les solutions 9 et -9.",
            },
            {
              q: "Quelles sont les solutions de x² - 7x = 0 ?",
              options: ["0 et 7", "7 seulement", "-7 et 7", "0 et -7"],
              answer: 0,
              why: "x² - 7x = x(x - 7) : x = 0 ou x = 7.",
            },
            {
              q: "Quelles sont les solutions de x² = -36 ?",
              options: ["6 et -6", "Aucune", "-6 seulement", "6 seulement"],
              answer: 1,
              why: "-36 est négatif et un carré n'est jamais négatif : il n'y a aucune solution.",
            },
          ],
          trap: "Oublier la solution négative de x² = a (x² = 25 a deux solutions, 5 et -5), ou appliquer la propriété du produit nul alors que le second membre n'est pas égal à 0.",
          method: "Avant de résoudre, regardez la forme de l'équation : un produit égal à 0 se résout facteur par facteur ; un carré égal à un nombre se résout avec √ selon le signe ; sinon, ramenez tout dans un membre et factorisez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mettre-en-equation',
          title: "Mettre un problème en équation",
          minutes: 35,
          objectives: [
            "Choisir l'inconnue d'un problème et la définir précisément.",
            "Traduire un énoncé par une équation.",
            "Résoudre l'équation et interpréter sa solution dans le contexte du problème.",
          ],
          course: [
            {
              heading: "Les quatre étapes de la mise en équation",
              paragraphs: [
                "Beaucoup de problèmes de la vie courante (âges, prix, longueurs, programmes de calcul) se résolvent avec une équation. La démarche suit toujours quatre étapes : choisir l'inconnue, mettre le problème en équation, résoudre l'équation, puis vérifier et répondre à la question par une phrase.",
                "Choisir l'inconnue, c'est écrire clairement ce que représente la lettre, avec son unité : « Soit x le prix d'un cahier, en euros. » En général, on désigne par x la quantité demandée, ou une quantité à partir de laquelle on peut exprimer toutes les autres.",
              ],
              box: { label: "Méthode", text: "1. Choisir l'inconnue et l'écrire (« Soit x ... »). 2. Exprimer les quantités en fonction de x et écrire une égalité. 3. Résoudre l'équation. 4. Vérifier avec l'énoncé et conclure par une phrase." },
            },
            {
              heading: "Traduire des phrases en expressions",
              paragraphs: [
                "La mise en équation demande de traduire le français en langage mathématique. « Le double de x » s'écrit 2x ; « le triple de x augmenté de 5 » s'écrit 3x + 5 ; « le triple de la somme de x et de 5 » s'écrit 3(x + 5) ; « la moitié de x » s'écrit x ÷ 2 ; « le carré de x » s'écrit x².",
                "Trois nombres entiers consécutifs s'écrivent x, x + 1 et x + 2. Si Paul a x ans aujourd'hui, il aura x + 10 ans dans 10 ans. Un prix x augmenté de 20 % devient 1,2x, et diminué de 20 % il devient 0,8x.",
                "Les mots « est égal à », « vaut », « on obtient », « coûte autant que » indiquent souvent l'endroit où placer le signe =.",
              ],
            },
            {
              heading: "Un exemple complet",
              paragraphs: [
                "Problème : la somme de trois nombres entiers consécutifs est 87 ; quels sont ces nombres ? Soit x le plus petit des trois nombres. Les deux autres sont x + 1 et x + 2. L'énoncé se traduit par x + (x + 1) + (x + 2) = 87.",
                "On réduit : 3x + 3 = 87. On soustrait 3 : 3x = 84. On divise par 3 : x = 28. Les nombres sont donc 28, 29 et 30. Vérification : 28 + 29 + 30 = 87. La réponse est une phrase : « Les trois nombres sont 28, 29 et 30. »",
              ],
            },
            {
              heading: "Contrôler la solution",
              paragraphs: [
                "Une solution d'équation doit avoir un sens dans le problème. Un nombre de personnes est un entier positif, une longueur est positive, un âge est raisonnable. Si vous trouvez 12,5 élèves ou une longueur négative, il y a très probablement une erreur dans la mise en équation ou dans le calcul.",
                "La vérification se fait avec les phrases de l'énoncé, pas seulement avec l'équation : si l'équation était mal écrite, la solution la vérifierait quand même, alors qu'elle ne répondrait pas au problème.",
              ],
              box: { label: "À retenir", text: "Une mise en équation réussie commence par « Soit x ... » et se termine par une phrase réponse. La vérification se fait en relisant l'énoncé avec la valeur trouvée." },
            },
          ],
          keyPoints: [
            "Quatre étapes : choisir l'inconnue, mettre en équation, résoudre, vérifier et conclure.",
            "Définir l'inconnue avec son unité : « Soit x le prix d'un cahier, en euros. »",
            "Le double de x : 2x ; x augmenté de 5 : x + 5 ; trois entiers consécutifs : x, x + 1, x + 2.",
            "Augmenter de t % revient à multiplier par (1 + t/100), diminuer de t % à multiplier par (1 - t/100).",
            "La solution doit avoir un sens dans le contexte (entier, positif, plausible).",
            "On vérifie avec les phrases de l'énoncé, puis on répond par une phrase.",
          ],
          example: {
            statement: "Aujourd'hui, Léa a trois fois l'âge de son frère. Dans 10 ans, elle aura deux fois l'âge de son frère. Quel est l'âge de chacun aujourd'hui ?",
            solution: [
              "Soit x l'âge du frère aujourd'hui, en années. Léa a alors 3x ans.",
              "Dans 10 ans, le frère aura x + 10 ans et Léa 3x + 10 ans. L'énoncé se traduit par 3x + 10 = 2(x + 10).",
              "On développe : 3x + 10 = 2x + 20. On soustrait 2x : x + 10 = 20. On soustrait 10 : x = 10.",
              "Le frère a 10 ans et Léa 3 × 10 = 30 ans.",
              "Vérification : dans 10 ans, le frère aura 20 ans et Léa 40 ans, et 40 = 2 × 20.",
              "Conclusion : aujourd'hui, le frère a 10 ans et Léa a 30 ans.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triple d'un nombre, diminué de 7, est égal à 32. Quel est ce nombre ?",
              hint: "Appelez x le nombre cherché, traduisez « le triple de x diminué de 7 », puis écrivez l'égalité avec 32.",
              solution: [
                "Soit x le nombre cherché. L'énoncé se traduit par 3x - 7 = 32.",
                "On ajoute 7 : 3x = 39. On divise par 3 : x = 13.",
                "Vérification : 3 × 13 - 7 = 39 - 7 = 32.",
                "Le nombre cherché est 13.",
              ],
            },
            {
              level: 2,
              statement: "Au cinéma, une place adulte coûte 9 € et une place enfant 6 €. Une famille achète 7 places et paie 51 € au total. Combien de places enfant a-t-elle achetées ?",
              hint: "Si x est le nombre de places enfant, exprimez le nombre de places adulte en fonction de x, sachant qu'il y a 7 places en tout.",
              solution: [
                "Soit x le nombre de places enfant. Le nombre de places adulte est 7 - x.",
                "Le prix total s'écrit 6x + 9(7 - x). L'énoncé se traduit par 6x + 9(7 - x) = 51.",
                "On développe : 6x + 63 - 9x = 51, soit -3x + 63 = 51. On soustrait 63 : -3x = -12. On divise par -3 : x = 4.",
                "Il y a donc 4 places enfant et 7 - 4 = 3 places adulte.",
                "Vérification : 4 × 6 + 3 × 9 = 24 + 27 = 51 €.",
                "La famille a acheté 4 places enfant.",
              ],
            },
            {
              level: 3,
              statement: "Un rectangle a pour longueur (3x + 2) cm et pour largeur x cm, où x est un nombre positif. Un carré a pour côté (x + 6) cm. 1) Exprimer en fonction de x le périmètre du rectangle, sous forme réduite. 2) Exprimer en fonction de x le périmètre du carré. 3) Pour quelle valeur de x les deux figures ont-elles le même périmètre ? 4) Pour cette valeur, ont-elles aussi la même aire ? Justifier.",
              hint: "Le périmètre d'un rectangle vaut 2 × (longueur + largeur) et celui d'un carré 4 × côté. Pour la question 4, calculez les deux aires avec la valeur trouvée.",
              solution: [
                "1) Périmètre du rectangle : 2 × (3x + 2 + x) = 2 × (4x + 2) = 8x + 4.",
                "2) Périmètre du carré : 4 × (x + 6) = 4x + 24.",
                "3) On résout 8x + 4 = 4x + 24. On soustrait 4x : 4x + 4 = 24. On soustrait 4 : 4x = 20. Donc x = 5.",
                "Vérification : le rectangle mesure 3 × 5 + 2 = 17 cm sur 5 cm, de périmètre 2 × (17 + 5) = 44 cm ; le carré a pour côté 11 cm, de périmètre 4 × 11 = 44 cm.",
                "4) Aire du rectangle : 17 × 5 = 85 cm². Aire du carré : 11 × 11 = 121 cm².",
                "Pour x = 5, les deux figures ont le même périmètre (44 cm) mais pas la même aire (85 cm² et 121 cm²).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque phrase à son expression mathématique.",
            pairs: [
              { left: "Le double de x", right: "2x" },
              { left: "x augmenté de 5", right: "x + 5" },
              { left: "Le carré de x", right: "x²" },
              { left: "La moitié de x", right: "x ÷ 2" },
              { left: "L'entier qui suit l'entier x", right: "x + 1" },
              { left: "x augmenté de 10 %", right: "1,1x" },
            ],
          },
          quiz: [
            {
              q: "Comment traduire « le triple de x, diminué de 4 » ?",
              options: ["3(x - 4)", "3x - 4", "x³ - 4", "4 - 3x"],
              answer: 1,
              why: "On prend d'abord le triple de x, 3x, puis on lui retire 4.",
            },
            {
              q: "Trois nombres entiers consécutifs s'écrivent :",
              options: ["x, 2x, 3x", "x, x + 2, x + 4", "x, x + 1, x + 2"],
              answer: 2,
              why: "Deux entiers consécutifs diffèrent de 1 : on ajoute 1 à chaque fois.",
            },
            {
              q: "Paul a x ans et sa mère a 28 ans de plus que lui. Dans 5 ans, sa mère aura :",
              options: ["x + 33 ans", "x + 28 ans", "x + 5 ans", "28x + 5 ans"],
              answer: 0,
              why: "La mère a aujourd'hui x + 28 ans ; dans 5 ans, elle aura x + 28 + 5 = x + 33 ans.",
            },
            {
              q: "En résolvant un problème, vous trouvez 7,5 pour un nombre d'élèves. Que conclure ?",
              options: ["On arrondit au nombre entier le plus proche, 8", "On garde 7,5 élèves", "Une erreur s'est glissée", "On arrondit à 7 élèves"],
              answer: 2,
              why: "Un nombre d'élèves est entier : la mise en équation ou le calcul contient une erreur à rechercher.",
            },
            {
              q: "Un pull coûte x €. Après une baisse de 20 %, il coûte :",
              options: ["x - 20", "0,2x", "1,2x", "0,8x"],
              answer: 3,
              why: "Baisser de 20 % revient à garder 80 % du prix, soit multiplier par 0,8.",
            },
          ],
          trap: "Ne pas définir l'inconnue, ou oublier de répondre à la question posée : trouver x = 10 ne suffit pas si l'on demande l'âge de Léa, qui vaut 3x = 30 ans.",
          method: "Écrivez d'abord une phrase « Soit x ... » avec l'unité, puis exprimez toutes les quantités du problème en fonction de x avant d'écrire l'égalité. Terminez par une vérification avec les données de l'énoncé et une phrase réponse.",
        },
      ],
    },
    /* ==================================================================== */
    /* TRIGONOMÉTRIE                                                          */
    /* ==================================================================== */
    {
      id: 'trigonometrie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cosinus-sinus-tangente',
          title: "Cosinus, sinus et tangente d'un angle aigu",
          minutes: 30,
          objectives: [
            "Identifier l'hypoténuse, le côté adjacent et le côté opposé à un angle aigu dans un triangle rectangle.",
            "Connaître les définitions du cosinus, du sinus et de la tangente d'un angle aigu.",
            "Écrire les rapports trigonométriques d'un angle à partir des longueurs d'un triangle rectangle.",
          ],
          course: [
            {
              heading: "Le vocabulaire du triangle rectangle",
              paragraphs: [
                "Dans un triangle rectangle, le côté opposé à l'angle droit est l'hypoténuse : c'est le plus long des trois côtés. Les deux autres côtés forment l'angle droit. La trigonométrie s'intéresse aux deux angles aigus du triangle et aux rapports entre ses côtés.",
                "Soit ABC un triangle rectangle en A, et intéressons-nous à l'angle ABC (l'angle de sommet B). L'hypoténuse est [BC]. Le côté adjacent à l'angle ABC est l'autre côté qui touche le sommet B : c'est [AB]. Le côté opposé à l'angle ABC est celui qui ne touche pas B : c'est [AC].",
                "Les mots « adjacent » et « opposé » dépendent de l'angle choisi. Pour l'angle ACB, les rôles s'échangent : le côté adjacent devient [AC] et le côté opposé devient [AB]. L'hypoténuse, elle, reste toujours [BC].",
              ],
            },
            {
              heading: "Trois rapports : cosinus, sinus, tangente",
              paragraphs: [
                "Pour un angle aigu d'un triangle rectangle, on définit trois rapports de longueurs. Dans le triangle ABC rectangle en A : cos ABC = AB ÷ BC, sin ABC = AC ÷ BC et tan ABC = AC ÷ AB.",
                "Un moyen mnémotechnique courant est CAH SOH TOA : Cosinus = Adjacent sur Hypoténuse, Sinus = Opposé sur Hypoténuse, Tangente = Opposé sur Adjacent.",
              ],
              box: { label: "Définition", text: "Dans un triangle rectangle, pour un angle aigu : cosinus = côté adjacent ÷ hypoténuse ; sinus = côté opposé ÷ hypoténuse ; tangente = côté opposé ÷ côté adjacent." },
            },
            {
              heading: "Des rapports qui ne dépendent que de l'angle",
              paragraphs: [
                "Prenez deux triangles rectangles de tailles différentes mais qui ont un angle aigu de même mesure, par exemple 35°. Ils sont semblables : leurs longueurs sont proportionnelles. Le rapport côté adjacent ÷ hypoténuse est donc le même dans les deux triangles. C'est pourquoi on peut parler du cosinus de 35°, sans préciser le triangle.",
                "Comme l'hypoténuse est le plus long côté, le cosinus et le sinus d'un angle aigu sont toujours compris strictement entre 0 et 1. La tangente, elle, peut dépasser 1 : tan 45° = 1, et tan 60° vaut environ 1,73.",
                "La calculatrice donne ces valeurs, à condition d'être réglée en mode degrés. Quelques valeurs à connaître : cos 60° = 0,5, sin 30° = 0,5 et tan 45° = 1.",
              ],
              box: { label: "À retenir", text: "Pour un angle aigu, 0 < cos < 1 et 0 < sin < 1. La tangente est un nombre positif qui peut être supérieur à 1." },
            },
            {
              heading: "Un exemple : le triangle 3, 4, 5",
              paragraphs: [
                "Soit ABC un triangle rectangle en A avec AB = 4 cm, AC = 3 cm et BC = 5 cm (on vérifie avec Pythagore : 3² + 4² = 9 + 16 = 25 = 5²). Pour l'angle ABC : le côté adjacent est AB = 4, le côté opposé est AC = 3, l'hypoténuse est BC = 5.",
                "Donc cos ABC = 4/5 = 0,8 ; sin ABC = 3/5 = 0,6 ; tan ABC = 3/4 = 0,75. Pour l'angle ACB, les côtés adjacent et opposé s'échangent : cos ACB = 3/5 = 0,6 ; sin ACB = 4/5 = 0,8 ; tan ACB = 4/3. On remarque que le cosinus d'un angle aigu est égal au sinus de l'autre angle aigu.",
              ],
            },
          ],
          keyPoints: [
            "L'hypoténuse est le côté opposé à l'angle droit, le plus long du triangle rectangle.",
            "Le côté adjacent touche l'angle étudié (sans être l'hypoténuse) ; le côté opposé ne le touche pas.",
            "cos = adjacent ÷ hypoténuse ; sin = opposé ÷ hypoténuse ; tan = opposé ÷ adjacent (CAH SOH TOA).",
            "Ces rapports ne dépendent que de la mesure de l'angle, pas de la taille du triangle.",
            "Pour un angle aigu, le cosinus et le sinus sont entre 0 et 1 ; la tangente peut dépasser 1.",
            "Ces formules ne s'utilisent que dans un triangle rectangle.",
          ],
          example: {
            statement: "Le triangle DEF est rectangle en E, avec DE = 8 cm, EF = 6 cm et DF = 10 cm. Écrire le cosinus, le sinus et la tangente de l'angle EDF.",
            solution: [
              "Le triangle est rectangle en E, donc l'hypoténuse est [DF], de longueur 10 cm.",
              "Pour l'angle EDF, le côté adjacent est [DE] (il touche D) et le côté opposé est [EF].",
              "cos EDF = DE ÷ DF = 8/10 = 0,8.",
              "sin EDF = EF ÷ DF = 6/10 = 0,6.",
              "tan EDF = EF ÷ DE = 6/8 = 0,75.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle RST est rectangle en S. a) Nommer l'hypoténuse. b) Pour l'angle SRT, nommer le côté adjacent et le côté opposé. c) Pour l'angle STR, nommer le côté adjacent et le côté opposé.",
              hint: "L'hypoténuse est en face de l'angle droit. Pour chaque angle, le côté adjacent est celui qui part de son sommet et qui n'est pas l'hypoténuse.",
              solution: [
                "a) Le triangle est rectangle en S, donc l'hypoténuse est le côté opposé à S : [RT].",
                "b) Pour l'angle SRT (sommet R) : le côté adjacent est [RS] et le côté opposé est [ST].",
                "c) Pour l'angle STR (sommet T) : le côté adjacent est [ST] et le côté opposé est [RS].",
              ],
            },
            {
              level: 2,
              statement: "Le triangle MNP est rectangle en N, avec MN = 5 cm, NP = 12 cm et MP = 13 cm. Écrire, sous forme de fractions, le cosinus, le sinus et la tangente de l'angle NMP, puis de l'angle NPM.",
              hint: "Repérez d'abord l'hypoténuse, puis, pour chaque angle, le côté qui touche son sommet (adjacent) et celui qui est en face (opposé).",
              solution: [
                "Le triangle est rectangle en N, donc l'hypoténuse est [MP] = 13 cm. Contrôle : 5² + 12² = 25 + 144 = 169 = 13².",
                "Angle NMP : côté adjacent [MN] = 5, côté opposé [NP] = 12. Donc cos NMP = 5/13, sin NMP = 12/13 et tan NMP = 12/5.",
                "Angle NPM : côté adjacent [NP] = 12, côté opposé [MN] = 5. Donc cos NPM = 12/13, sin NPM = 5/13 et tan NPM = 5/12.",
                "On remarque que cos NMP = sin NPM et sin NMP = cos NPM.",
              ],
            },
            {
              level: 3,
              statement: "Le triangle ABC est rectangle en A, avec AB = 6 cm et BC = 10 cm. 1) Calculer la longueur AC. 2) Calculer le cosinus, le sinus et la tangente de l'angle ABC (valeurs exactes). 3) Vérifier que (cos ABC)² + (sin ABC)² = 1.",
              hint: "Pour la question 1, utilisez le théorème de Pythagore dans le triangle rectangle en A. Pour la question 3, calculez chaque carré séparément puis additionnez.",
              solution: [
                "1) Le triangle ABC est rectangle en A, donc d'après le théorème de Pythagore : BC² = AB² + AC², soit 100 = 36 + AC², donc AC² = 64 et AC = 8 cm.",
                "2) Pour l'angle ABC : adjacent AB = 6, opposé AC = 8, hypoténuse BC = 10.",
                "cos ABC = 6/10 = 0,6 ; sin ABC = 8/10 = 0,8 ; tan ABC = 8/6 = 4/3.",
                "3) (cos ABC)² + (sin ABC)² = 0,6² + 0,8² = 0,36 + 0,64 = 1. L'égalité est vérifiée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le vocabulaire de la trigonométrie.",
            statements: [
              { text: "L'hypoténuse est le côté opposé à l'angle droit.", true: true, why: "C'est sa définition, et c'est le plus long côté du triangle rectangle." },
              { text: "Le côté adjacent est le même, quel que soit l'angle aigu choisi.", true: false, why: "Il dépend de l'angle : il touche le sommet de l'angle étudié." },
              { text: "Le cosinus d'un angle aigu est égal à côté adjacent ÷ hypoténuse.", true: true, why: "C'est le CAH de CAH SOH TOA." },
              { text: "La tangente d'un angle aigu est toujours inférieure à 1.", true: false, why: "tan 45° = 1 et tan 60° vaut environ 1,73 : la tangente peut dépasser 1." },
              { text: "Le sinus d'un angle aigu est compris entre 0 et 1.", true: true, why: "Le côté opposé est plus court que l'hypoténuse." },
              { text: "On peut utiliser cosinus, sinus et tangente dans n'importe quel triangle.", true: false, why: "Au collège, ces rapports se définissent et s'utilisent dans un triangle rectangle." },
              { text: "Deux triangles rectangles ayant un angle aigu de 40° ont le même cosinus pour cet angle.", true: true, why: "Ils sont semblables : le rapport adjacent ÷ hypoténuse ne dépend que de l'angle." },
            ],
          },
          quiz: [
            {
              q: "Dans le triangle ABC rectangle en A, l'hypoténuse est :",
              options: ["[AB]", "[AC]", "[BC]"],
              answer: 2,
              why: "L'hypoténuse est le côté opposé à l'angle droit, situé en A : c'est [BC].",
            },
            {
              q: "Le sinus d'un angle aigu est égal à :",
              options: ["adjacent ÷ hypoténuse", "opposé ÷ hypoténuse", "opposé ÷ adjacent", "hypoténuse ÷ opposé"],
              answer: 1,
              why: "SOH : Sinus = Opposé sur Hypoténuse.",
            },
            {
              q: "Un triangle rectangle a pour côtés 3, 4 et 5. La tangente de l'angle opposé au côté de longueur 3 vaut :",
              options: ["3/4", "4/3", "3/5", "4/5"],
              answer: 0,
              why: "Pour cet angle, l'opposé mesure 3 et l'adjacent 4 : tan = 3/4.",
            },
            {
              q: "Quelle valeur ne peut pas être le cosinus d'un angle aigu ?",
              options: ["0,1", "0,5", "0,99", "1,2"],
              answer: 3,
              why: "Le côté adjacent est plus court que l'hypoténuse, donc le cosinus est inférieur à 1.",
            },
            {
              q: "Dans le triangle ABC rectangle en A, le côté adjacent à l'angle ABC est :",
              options: ["[AB]", "[AC]", "[BC]"],
              answer: 0,
              why: "[AB] touche le sommet B et n'est pas l'hypoténuse ; [BC] touche aussi B mais c'est l'hypoténuse.",
            },
          ],
          trap: "Confondre côté adjacent et hypoténuse : l'hypoténuse touche aussi l'angle étudié, mais c'est toujours le côté opposé à l'angle droit ; le côté adjacent est l'autre côté de l'angle.",
          method: "Avant tout calcul, repassez en couleur l'angle étudié, puis notez H, A et O à côté des trois côtés. Retenez CAH SOH TOA : Cosinus = Adjacent ÷ Hypoténuse, Sinus = Opposé ÷ Hypoténuse, Tangente = Opposé ÷ Adjacent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'trigo-calculer-longueur',
          title: "Calculer une longueur avec la trigonométrie",
          minutes: 30,
          objectives: [
            "Choisir le rapport trigonométrique adapté aux données.",
            "Calculer une longueur dans un triangle rectangle à partir d'un angle aigu et d'une longueur.",
            "Utiliser la calculatrice en mode degrés et arrondir un résultat.",
          ],
          course: [
            {
              heading: "Choisir la bonne formule",
              paragraphs: [
                "Pour calculer une longueur, il faut un triangle rectangle dont on connaît un angle aigu et une longueur. On repère, par rapport à cet angle, le côté connu et le côté cherché. On choisit alors le rapport qui fait intervenir ces deux côtés.",
                "Si les deux côtés en jeu sont l'hypoténuse et le côté adjacent, on utilise le cosinus. Si ce sont l'hypoténuse et le côté opposé, on utilise le sinus. Si ce sont les côtés opposé et adjacent (l'hypoténuse n'intervient pas), on utilise la tangente.",
              ],
              box: { label: "Règle", text: "Hypoténuse et adjacent : cosinus. Hypoténuse et opposé : sinus. Opposé et adjacent : tangente. On choisit le rapport qui contient la longueur connue et la longueur cherchée." },
            },
            {
              heading: "La longueur cherchée est au numérateur",
              paragraphs: [
                "Soit ABC un triangle rectangle en A, avec l'angle ABC = 35° et BC = 8 cm. On cherche AB. Par rapport à l'angle B, [BC] est l'hypoténuse et [AB] le côté adjacent : on utilise le cosinus.",
                "On écrit cos 35° = AB ÷ 8. Pour isoler AB, on multiplie les deux membres par 8 : AB = 8 × cos 35°. La calculatrice donne AB ≈ 6,55, soit AB ≈ 6,6 cm au millimètre près. On contrôle : 6,6 cm est bien plus petit que l'hypoténuse de 8 cm.",
              ],
            },
            {
              heading: "La longueur cherchée est au dénominateur",
              paragraphs: [
                "Soit ABC un triangle rectangle en A, avec l'angle ABC = 40° et AC = 5 cm. On cherche BC. Par rapport à l'angle B, [AC] est le côté opposé et [BC] l'hypoténuse : on utilise le sinus.",
                "On écrit sin 40° = 5 ÷ BC. On peut écrire sin 40° = (sin 40°) ÷ 1 et faire un produit en croix : BC × sin 40° = 5 × 1, donc BC = 5 ÷ sin 40°. La calculatrice donne BC ≈ 7,78, soit BC ≈ 7,8 cm. Contrôle : l'hypoténuse (7,8 cm) est bien plus longue que le côté de 5 cm.",
              ],
              box: { label: "À retenir", text: "Si la longueur cherchée est au numérateur, on multiplie : AB = BC × cos B. Si elle est au dénominateur, on divise : BC = AC ÷ sin B." },
            },
            {
              heading: "La calculatrice et la rédaction",
              paragraphs: [
                "Vérifiez que la calculatrice est en mode degrés (souvent noté D ou DEG à l'écran) : en test, cos 60° doit donner 0,5. Gardez la valeur exacte (8 × cos 35°) dans la rédaction et n'arrondissez qu'à la dernière étape, à la précision demandée.",
                "La trigonométrie sert à mesurer ce que l'on ne peut pas atteindre : la hauteur d'un arbre ou d'un bâtiment à partir de la distance au pied et de l'angle sous lequel on voit le sommet, la longueur d'une rampe, la hauteur atteinte par une échelle posée contre un mur.",
              ],
            },
          ],
          keyPoints: [
            "Il faut un triangle rectangle, un angle aigu connu et une longueur connue.",
            "On choisit le rapport (cos, sin ou tan) qui contient la longueur connue et la longueur cherchée.",
            "Longueur cherchée au numérateur : on multiplie (AB = 8 × cos 35°).",
            "Longueur cherchée au dénominateur : on divise (BC = 5 ÷ sin 40°).",
            "Calculatrice en mode degrés, arrondi seulement à la fin.",
            "Contrôle : l'hypoténuse doit rester le plus long côté.",
          ],
          example: {
            statement: "Une échelle de 5 m est posée contre un mur vertical, sur un sol horizontal. Elle forme avec le sol un angle de 70°. À quelle hauteur l'échelle touche-t-elle le mur ? Arrondir au centimètre.",
            solution: [
              "Le mur est vertical et le sol horizontal : le triangle formé par le mur, le sol et l'échelle est rectangle au pied du mur.",
              "L'échelle est l'hypoténuse (5 m). La hauteur h cherchée est le côté opposé à l'angle de 70°, situé au pied de l'échelle.",
              "On utilise le sinus : sin 70° = h ÷ 5.",
              "Donc h = 5 × sin 70° ≈ 4,698.",
              "L'échelle touche le mur à environ 4,70 m de hauteur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle DEF est rectangle en E, avec l'angle EDF = 30° et DF = 12 cm. Calculer EF.",
              hint: "Par rapport à l'angle D, [DF] est l'hypoténuse. Quel est le rôle de [EF] ? Choisissez le rapport qui relie ces deux côtés.",
              solution: [
                "Le triangle DEF est rectangle en E. Pour l'angle EDF, [DF] est l'hypoténuse et [EF] le côté opposé : on utilise le sinus.",
                "sin 30° = EF ÷ 12, donc EF = 12 × sin 30°.",
                "Or sin 30° = 0,5, donc EF = 12 × 0,5 = 6.",
                "EF = 6 cm.",
              ],
            },
            {
              level: 2,
              statement: "Le triangle RST est rectangle en S, avec l'angle SRT = 52° et RS = 7 cm. Calculer ST, puis RT. Arrondir au millimètre.",
              hint: "Pour ST, l'hypoténuse n'intervient pas : pensez à la tangente. Pour RT, utilisez RS (valeur exacte donnée) plutôt que ST (valeur arrondie).",
              solution: [
                "Pour l'angle SRT : [RS] est le côté adjacent, [ST] le côté opposé et [RT] l'hypoténuse.",
                "Calcul de ST : tan 52° = ST ÷ 7, donc ST = 7 × tan 52° ≈ 8,96, soit ST ≈ 9,0 cm.",
                "Calcul de RT : cos 52° = 7 ÷ RT, donc RT = 7 ÷ cos 52° ≈ 11,37, soit RT ≈ 11,4 cm.",
                "Contrôle avec Pythagore : 7² + 8,96² ≈ 49 + 80,3 = 129,3 et √129,3 ≈ 11,37. Les résultats sont cohérents.",
              ],
            },
            {
              level: 3,
              statement: "Pour estimer la hauteur d'un arbre, Inès se place à 15 m du pied de l'arbre, sur un sol horizontal. Ses yeux sont à 1,60 m du sol. Elle vise le sommet de l'arbre : la ligne de visée forme un angle de 32° avec l'horizontale. L'arbre est vertical. Calculer la hauteur de l'arbre, arrondie au dixième de mètre.",
              hint: "Faites un schéma : le triangle rectangle a un sommet à l'œil d'Inès, un côté horizontal de 15 m et un côté vertical qui s'arrête à hauteur des yeux. N'oubliez pas d'ajouter la hauteur des yeux à la fin.",
              solution: [
                "Notons O l'œil d'Inès, H le point de l'arbre à la hauteur des yeux et S le sommet de l'arbre. Le triangle OHS est rectangle en H, avec OH = 15 m et l'angle HOS = 32°.",
                "Par rapport à l'angle de 32°, [OH] est le côté adjacent et [HS] le côté opposé : on utilise la tangente.",
                "tan 32° = HS ÷ 15, donc HS = 15 × tan 32° ≈ 9,37 m.",
                "La hauteur de l'arbre est HS + 1,60 ≈ 9,37 + 1,60 = 10,97 m.",
                "L'arbre mesure environ 11,0 m.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul d'une longueur avec la trigonométrie.",
            items: [
              "Repérer le triangle rectangle et l'angle aigu connu",
              "Nommer l'hypoténuse, le côté adjacent et le côté opposé à cet angle",
              "Choisir le rapport qui relie la longueur connue et la longueur cherchée",
              "Écrire l'égalité avec les valeurs, par exemple cos 35° = AB ÷ 8",
              "Isoler la longueur cherchée (multiplier ou diviser)",
              "Calculer en mode degrés et arrondir comme demandé",
            ],
          },
          quiz: [
            {
              q: "On connaît l'hypoténuse et on cherche le côté opposé à l'angle connu. On utilise :",
              options: ["le cosinus", "le sinus", "la tangente", "le théorème de Thalès"],
              answer: 1,
              why: "Le sinus relie le côté opposé et l'hypoténuse.",
            },
            {
              q: "cos 60° = AB ÷ 10. Que vaut AB ?",
              options: ["20", "50", "5", "0,05"],
              answer: 2,
              why: "AB = 10 × cos 60° = 10 × 0,5 = 5.",
            },
            {
              q: "sin 40° = 5 ÷ BC. Alors BC est égal à :",
              options: ["5 ÷ sin 40°", "5 × sin 40°", "sin 40° ÷ 5", "5 - sin 40°"],
              answer: 0,
              why: "BC est au dénominateur : par produit en croix, BC × sin 40° = 5, donc BC = 5 ÷ sin 40°.",
            },
            {
              q: "Avant de calculer cos 35°, la calculatrice doit être réglée en mode :",
              options: ["radians", "degrés", "grades"],
              answer: 1,
              why: "Les angles sont mesurés en degrés au collège ; dans un autre mode, le résultat serait faux.",
            },
            {
              q: "Dans un triangle rectangle, un angle aigu mesure 45° et son côté adjacent mesure 6 cm. Le côté opposé mesure :",
              options: ["3 cm", "8,5 cm", "12 cm", "6 cm"],
              answer: 3,
              why: "tan 45° = 1, donc opposé = 6 × tan 45° = 6 cm.",
            },
          ],
          trap: "Écrire AB = 8 ÷ cos 35° au lieu de AB = 8 × cos 35° : quand la longueur cherchée est au numérateur, on multiplie ; quand elle est au dénominateur, on divise. Un côté plus long que l'hypoténuse signale l'erreur.",
          method: "Contrôlez la vraisemblance du résultat : l'hypoténuse doit rester le plus long côté. Gardez la valeur exacte (8 × cos 35°) dans la rédaction et n'arrondissez qu'à la dernière ligne, en précisant l'unité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'trigo-calculer-angle',
          title: "Calculer la mesure d'un angle",
          minutes: 30,
          objectives: [
            "Calculer la mesure d'un angle aigu dans un triangle rectangle à partir de deux longueurs.",
            "Utiliser les touches Arccos, Arcsin et Arctan (cos⁻¹, sin⁻¹, tan⁻¹) de la calculatrice.",
            "Utiliser la somme des angles d'un triangle pour obtenir le troisième angle.",
          ],
          course: [
            {
              heading: "Du rapport à l'angle",
              paragraphs: [
                "La touche cos de la calculatrice part d'un angle et donne son cosinus : cos 60° = 0,5. Pour calculer un angle, on fait le chemin inverse : on part de la valeur du rapport et on cherche l'angle. On utilise pour cela la touche Arccos, souvent notée cos⁻¹ ou acos (on y accède en général avec la touche seconde ou shift).",
                "Par exemple, si cos B = 0,6, alors l'angle B s'obtient en tapant Arccos(0,6), ce qui donne B ≈ 53,1°. De même, Arcsin (sin⁻¹) donne l'angle à partir de son sinus et Arctan (tan⁻¹) à partir de sa tangente. Comme pour le calcul de longueurs, la calculatrice doit être en mode degrés.",
              ],
              box: { label: "Repère", text: "Si cos x = k, alors x = Arccos(k). Si sin x = k, alors x = Arcsin(k). Si tan x = k, alors x = Arctan(k). Le résultat est une mesure en degrés (mode degrés)." },
            },
            {
              heading: "La méthode",
              paragraphs: [
                "Dans un triangle rectangle, on repère par rapport à l'angle cherché les deux côtés dont on connaît la longueur, et on choisit le rapport qui les relie : cosinus pour adjacent et hypoténuse, sinus pour opposé et hypoténuse, tangente pour opposé et adjacent.",
                "Exemple : ABC est rectangle en A avec AB = 7 cm et AC = 4 cm, et l'on cherche l'angle ABC. Pour cet angle, [AC] est le côté opposé et [AB] le côté adjacent : tan ABC = AC ÷ AB = 4/7. Donc ABC = Arctan(4/7) ≈ 29,7°. On tape directement Arctan(4 ÷ 7), sans arrondir le quotient, pour ne pas cumuler les erreurs.",
              ],
            },
            {
              heading: "Le troisième angle",
              paragraphs: [
                "La somme des angles d'un triangle vaut 180°. Dans un triangle rectangle, l'angle droit mesure 90°, donc les deux angles aigus totalisent 90° : on dit qu'ils sont complémentaires. Dans l'exemple précédent, ACB = 90° - ABC ≈ 90° - 29,7° = 60,3°.",
                "Ce calcul fournit aussi un contrôle : si l'on calcule les deux angles aigus par la trigonométrie, leur somme doit être égale à 90° (aux arrondis près).",
              ],
              box: { label: "Propriété", text: "Dans un triangle rectangle, les deux angles aigus sont complémentaires : leur somme vaut 90°." },
            },
            {
              heading: "Des situations concrètes",
              paragraphs: [
                "Sur un panneau routier, une pente de 10 % signifie que la route s'élève de 10 m pour 100 m parcourus à l'horizontale. L'angle α de la route avec l'horizontale vérifie tan α = 10/100 = 0,1, donc α = Arctan(0,1) ≈ 5,7°. Une pente qui paraît forte correspond donc à un angle assez petit.",
                "De la même façon, on calcule l'angle d'une rampe d'accès, d'un toit, d'un toboggan ou d'une échelle à partir de deux longueurs faciles à mesurer.",
              ],
            },
          ],
          keyPoints: [
            "Pour calculer un angle, il faut deux longueurs connues dans un triangle rectangle.",
            "On choisit le rapport qui relie les deux côtés connus, puis on calcule sa valeur.",
            "Arccos, Arcsin et Arctan (cos⁻¹, sin⁻¹, tan⁻¹) donnent l'angle à partir du rapport.",
            "On tape le quotient exact, par exemple Arctan(4 ÷ 7), et on arrondit l'angle à la fin.",
            "Les deux angles aigus d'un triangle rectangle sont complémentaires : leur somme vaut 90°.",
          ],
          example: {
            statement: "Une rampe d'accès mesure 4 m de long et permet de monter une marche de 0,5 m. Quel angle forme-t-elle avec le sol horizontal ? Arrondir au dixième de degré.",
            solution: [
              "La rampe, la hauteur de la marche et le sol forment un triangle rectangle ; la rampe en est l'hypoténuse (4 m).",
              "Par rapport à l'angle α entre la rampe et le sol, la hauteur de 0,5 m est le côté opposé.",
              "On utilise le sinus : sin α = 0,5 ÷ 4 = 0,125.",
              "Donc α = Arcsin(0,125) ≈ 7,18°.",
              "La rampe forme avec le sol un angle d'environ 7,2°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminer la mesure de l'angle aigu dans chaque cas : a) cos x = 0,5 (valeur exacte) ; b) sin y = 0,8 (au degré près) ; c) tan z = 2 (au degré près).",
              hint: "Utilisez les touches Arccos, Arcsin et Arctan, la calculatrice étant en mode degrés.",
              solution: [
                "a) x = Arccos(0,5) = 60°.",
                "b) y = Arcsin(0,8) ≈ 53,13°, soit y ≈ 53°.",
                "c) z = Arctan(2) ≈ 63,43°, soit z ≈ 63°.",
              ],
            },
            {
              level: 2,
              statement: "Le triangle KLM est rectangle en L, avec KL = 9 cm et KM = 15 cm. Calculer la mesure de l'angle LKM, puis celle de l'angle KML. Arrondir au dixième de degré.",
              hint: "Pour l'angle LKM, situez [KL] et [KM] : l'un est l'hypoténuse, l'autre touche le sommet K. Pour le second angle, pensez aux angles complémentaires.",
              solution: [
                "Le triangle est rectangle en L, donc [KM] est l'hypoténuse. Pour l'angle LKM, [KL] est le côté adjacent : on utilise le cosinus.",
                "cos LKM = KL ÷ KM = 9/15 = 0,6, donc LKM = Arccos(0,6) ≈ 53,1°.",
                "Les deux angles aigus sont complémentaires : KML = 90° - LKM ≈ 90° - 53,1° = 36,9°.",
                "LKM ≈ 53,1° et KML ≈ 36,9°.",
              ],
            },
            {
              level: 3,
              statement: "Un club construit une rampe de skate dont le profil est un triangle rectangle : la longueur au sol mesure 3,2 m et la hauteur 1,2 m. 1) Calculer la longueur de la pente, arrondie au centimètre. 2) Calculer l'angle que fait la pente avec le sol, arrondi au degré. 3) Le club souhaite un angle inférieur à 25°. La rampe convient-elle ?",
              hint: "Pour la question 1, utilisez le théorème de Pythagore. Pour la question 2, les deux longueurs données sont le côté opposé et le côté adjacent à l'angle cherché.",
              solution: [
                "1) Le triangle est rectangle, la pente est l'hypoténuse : pente² = 3,2² + 1,2² = 10,24 + 1,44 = 11,68, donc pente = √11,68 ≈ 3,42 m.",
                "2) Par rapport à l'angle α au sol, la hauteur (1,2 m) est le côté opposé et la longueur au sol (3,2 m) le côté adjacent : tan α = 1,2 ÷ 3,2 = 0,375.",
                "Donc α = Arctan(0,375) ≈ 20,6°, soit α ≈ 21°.",
                "3) 21° < 25°, donc la rampe convient au souhait du club.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque égalité à la mesure de l'angle aigu x.",
            pairs: [
              { left: "cos x = 0,5", right: "x = 60°" },
              { left: "sin x = 0,5", right: "x = 30°" },
              { left: "tan x = 1", right: "x = 45°" },
              { left: "cos x = 0,6", right: "x ≈ 53,1°" },
              { left: "sin x = 0,6", right: "x ≈ 36,9°" },
              { left: "tan x = 0,1", right: "x ≈ 5,7°" },
            ],
          },
          quiz: [
            {
              q: "cos B = 0,5. Quelle touche donne la mesure de l'angle B ?",
              options: ["la touche cos", "Arccos (cos⁻¹)", "Arcsin (sin⁻¹)", "la touche tan suivie de ="],
              answer: 1,
              why: "Arccos fait le chemin inverse du cosinus : Arccos(0,5) = 60°.",
            },
            {
              q: "Dans un triangle rectangle, un angle aigu mesure 38°. L'autre angle aigu mesure :",
              options: ["52°", "142°", "38°", "62°"],
              answer: 0,
              why: "Les angles aigus d'un triangle rectangle sont complémentaires : 90° - 38° = 52°.",
            },
            {
              q: "On connaît le côté opposé et le côté adjacent à l'angle cherché. On calcule d'abord :",
              options: ["son cosinus", "son sinus", "sa tangente"],
              answer: 2,
              why: "La tangente est le rapport opposé ÷ adjacent, sans l'hypoténuse.",
            },
            {
              q: "tan x = 1. Alors x mesure :",
              options: ["1°", "90°", "60°", "45°"],
              answer: 3,
              why: "Une tangente égale à 1 signifie opposé = adjacent : le triangle est isocèle rectangle et x = 45°.",
            },
            {
              q: "Peut-on avoir sin x = 1,5 pour un angle aigu x ?",
              options: ["Oui, si le triangle est assez grand", "Non : le sinus est inférieur à 1", "Oui, quand x est proche de 90°"],
              answer: 1,
              why: "Le côté opposé est plus court que l'hypoténuse, donc le sinus d'un angle aigu est inférieur à 1.",
            },
          ],
          trap: "Taper cos(0,6) au lieu de Arccos(0,6) : la touche cos donne le rapport à partir de l'angle, la touche Arccos donne l'angle à partir du rapport. Un résultat comme 0,9999 n'est pas une mesure d'angle plausible et doit alerter.",
          method: "Vérifiez votre angle en sens inverse : calculez son cosinus (ou son sinus, ou sa tangente) et comparez au rapport de départ. Contrôlez aussi que les deux angles aigus du triangle totalisent bien 90°.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES FONCTIONS                                                          */
    /* ==================================================================== */
    {
      id: 'fonctions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'notion-fonction',
          title: "La notion de fonction : image et antécédent",
          minutes: 25,
          objectives: [
            "Comprendre une fonction comme un processus qui associe à un nombre un unique nombre.",
            "Utiliser les notations f(x) et f : x ↦ ...",
            "Déterminer l'image d'un nombre et les antécédents éventuels d'un nombre.",
          ],
          course: [
            {
              heading: "Une machine à transformer les nombres",
              paragraphs: [
                "Considérez le programme de calcul suivant : choisir un nombre, le multiplier par 3, puis soustraire 2. Si l'on choisit 4, on obtient 3 × 4 - 2 = 10. Si l'on choisit -1, on obtient 3 × (-1) - 2 = -5. À chaque nombre de départ, le programme associe un seul nombre d'arrivée.",
                "Une fonction fonctionne comme une machine : on fait entrer un nombre, la machine applique toujours la même règle et fait sortir un résultat unique. Le programme ci-dessus définit une fonction, que l'on peut nommer f. Avec la lettre x pour le nombre de départ, le résultat s'écrit 3x - 2.",
              ],
            },
            {
              heading: "Notations et vocabulaire",
              paragraphs: [
                "On écrit f : x ↦ 3x - 2, ce qui se lit « f est la fonction qui, à x, associe 3x - 2 ». On écrit aussi f(x) = 3x - 2, qui se lit « f de x égale 3x - 2 ». Le nombre f(x) est l'image de x par la fonction f.",
                "Ainsi, f(4) = 10 signifie que l'image de 4 par f est 10. On dit aussi que 4 est un antécédent de 10 par f. Le nombre de départ est l'antécédent, le nombre d'arrivée est l'image.",
              ],
              box: { label: "Définition", text: "Une fonction f associe à chaque nombre x un unique nombre, noté f(x) et appelé l'image de x par f. Si f(a) = b, on dit que b est l'image de a et que a est un antécédent de b." },
            },
            {
              heading: "Calculer une image",
              paragraphs: [
                "Pour calculer l'image d'un nombre, on remplace x par ce nombre dans l'expression de f(x), en mettant des parenthèses autour des nombres négatifs. Avec f(x) = 3x - 2 : f(0) = 3 × 0 - 2 = -2 et f(-1) = 3 × (-1) - 2 = -3 - 2 = -5.",
                "Un nombre a toujours une seule image par une fonction : c'est ce qui fait qu'il s'agit d'une fonction. Calculer une image est donc toujours un simple calcul.",
              ],
            },
            {
              heading: "Chercher un antécédent",
              paragraphs: [
                "Chercher les antécédents d'un nombre, c'est trouver les nombres de départ qui donnent ce résultat. Pour trouver les antécédents de 7 par f(x) = 3x - 2, on résout l'équation 3x - 2 = 7 : 3x = 9, donc x = 3. Le nombre 3 est l'unique antécédent de 7.",
                "Un nombre peut avoir plusieurs antécédents, ou aucun. Prenons la fonction g définie par g(x) = x². Les antécédents de 9 sont les solutions de x² = 9, c'est-à-dire 3 et -3 : le nombre 9 a deux antécédents. En revanche, x² = -4 n'a pas de solution : le nombre -4 n'a aucun antécédent par g.",
              ],
              box: { label: "À retenir", text: "Image : on calcule f(nombre). Antécédent : on résout l'équation f(x) = nombre. Un nombre a toujours une seule image, mais il peut avoir zéro, un ou plusieurs antécédents." },
            },
          ],
          keyPoints: [
            "Une fonction associe à chaque nombre x un unique nombre f(x).",
            "f : x ↦ 3x - 2 se lit « f est la fonction qui, à x, associe 3x - 2 ».",
            "Si f(a) = b : b est l'image de a, et a est un antécédent de b.",
            "Pour calculer une image, on remplace x par le nombre dans l'expression.",
            "Pour trouver les antécédents de b, on résout l'équation f(x) = b.",
            "Un nombre a une seule image, mais zéro, un ou plusieurs antécédents.",
          ],
          example: {
            statement: "Soit f la fonction définie par f(x) = x² - 4. Calculer l'image de 3 et l'image de -3, puis déterminer les antécédents de 12.",
            solution: [
              "Image de 3 : f(3) = 3² - 4 = 9 - 4 = 5.",
              "Image de -3 : f(-3) = (-3)² - 4 = 9 - 4 = 5. Deux nombres différents peuvent avoir la même image.",
              "Antécédents de 12 : on résout x² - 4 = 12, soit x² = 16.",
              "16 > 0, donc cette équation a deux solutions : 4 et -4.",
              "Le nombre 12 a deux antécédents par f : 4 et -4.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit g la fonction définie par g(x) = 5x + 1. Calculer g(2), g(0) et g(-3).",
              hint: "Remplacez x par chaque nombre, en mettant -3 entre parenthèses, et respectez les priorités : la multiplication avant l'addition.",
              solution: [
                "g(2) = 5 × 2 + 1 = 10 + 1 = 11.",
                "g(0) = 5 × 0 + 1 = 0 + 1 = 1.",
                "g(-3) = 5 × (-3) + 1 = -15 + 1 = -14.",
              ],
            },
            {
              level: 2,
              statement: "Soit h la fonction définie par h(x) = -2x + 7. a) Calculer l'image de 1,5. b) Déterminer l'antécédent de -3. c) Le nombre 9 est-il l'image de -1 par h ? Justifier.",
              hint: "Pour a) et c), il s'agit de calculs d'images ; pour b), écrivez et résolvez une équation.",
              solution: [
                "a) h(1,5) = -2 × 1,5 + 7 = -3 + 7 = 4. L'image de 1,5 est 4.",
                "b) On résout -2x + 7 = -3. On soustrait 7 : -2x = -10. On divise par -2 : x = 5. L'antécédent de -3 est 5.",
                "Vérification de b) : h(5) = -10 + 7 = -3.",
                "c) h(-1) = -2 × (-1) + 7 = 2 + 7 = 9. Oui, 9 est l'image de -1 par h.",
              ],
            },
            {
              level: 3,
              statement: "Voici un programme de calcul : choisir un nombre ; lui ajouter 3 ; mettre le résultat au carré ; soustraire 9. On note f la fonction qui, au nombre choisi x, associe le résultat du programme. 1) Calculer f(2). 2) Exprimer f(x) en fonction de x, puis montrer que f(x) = x² + 6x. 3) Déterminer les antécédents de 0 par f.",
              hint: "Pour développer (x + 3)², écrivez (x + 3)(x + 3) et utilisez la double distributivité. Pour la question 3, factorisez x² + 6x.",
              solution: [
                "1) 2 + 3 = 5, puis 5² = 25, puis 25 - 9 = 16. Donc f(2) = 16.",
                "2) f(x) = (x + 3)² - 9. Or (x + 3)² = (x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9.",
                "Donc f(x) = x² + 6x + 9 - 9 = x² + 6x. Contrôle : 2² + 6 × 2 = 4 + 12 = 16 = f(2).",
                "3) On résout x² + 6x = 0, soit x(x + 6) = 0. Par la propriété du produit nul, x = 0 ou x = -6.",
                "Vérification : f(-6) = (-6 + 3)² - 9 = 9 - 9 = 0. Les antécédents de 0 sont 0 et -6.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Image et antécédent.",
            statements: [
              { text: "Par une fonction, un nombre a toujours une seule image.", true: true, why: "C'est la définition d'une fonction : un nombre de départ, un seul résultat." },
              { text: "Par une fonction, un nombre a toujours un seul antécédent.", true: false, why: "Par x ↦ x², 9 a deux antécédents (3 et -3) et -4 n'en a aucun." },
              { text: "Si f(2) = 7, alors 7 est l'image de 2.", true: true, why: "f(2) est l'image de 2 : le nombre d'arrivée." },
              { text: "Si f(2) = 7, alors 7 est un antécédent de 2.", true: false, why: "C'est l'inverse : 2 est un antécédent de 7." },
              { text: "Pour calculer une image, on résout une équation.", true: false, why: "Pour une image, on calcule ; c'est pour un antécédent qu'on résout une équation." },
              { text: "Par la fonction x ↦ x², le nombre -4 n'a pas d'antécédent.", true: true, why: "Un carré n'est jamais négatif, donc x² = -4 n'a pas de solution." },
              { text: "f(x) se lit « f de x ».", true: true, why: "C'est la lecture habituelle de cette notation." },
            ],
          },
          quiz: [
            {
              q: "f(x) = 2x + 3. Quelle est l'image de 4 ?",
              options: ["11", "0,5", "8", "14"],
              answer: 0,
              why: "f(4) = 2 × 4 + 3 = 8 + 3 = 11.",
            },
            {
              q: "f(x) = 2x + 3. Quel est l'antécédent de 13 ?",
              options: ["29", "8", "5", "6,5"],
              answer: 2,
              why: "On résout 2x + 3 = 13 : 2x = 10, donc x = 5.",
            },
            {
              q: "On sait que g(-1) = 6. Quelle phrase est correcte ?",
              options: ["6 est l'image de -1", "-1 est l'image de 6", "6 est un antécédent de -1", "-1 et 6 sont des images"],
              answer: 0,
              why: "Dans g(-1) = 6, -1 est le nombre de départ et 6 le nombre d'arrivée, donc l'image.",
            },
            {
              q: "Par la fonction x ↦ x², combien d'antécédents a le nombre 25 ?",
              options: ["Un seul : 5", "Deux : 5 et -5", "Aucun", "Une infinité de nombres"],
              answer: 1,
              why: "x² = 25 a deux solutions, 5 et -5, car 5² = 25 et (-5)² = 25.",
            },
            {
              q: "Pour trouver les antécédents d'un nombre par une fonction f, on :",
              options: ["remplace x par ce nombre dans la formule", "calcule f(0) puis ajoute ce nombre", "divise ce nombre par f(1)", "résout f(x) = ce nombre"],
              answer: 3,
              why: "Les antécédents sont les valeurs de x qui donnent ce nombre : ce sont les solutions de l'équation f(x) = ce nombre.",
            },
          ],
          trap: "Confondre image et antécédent : dans f(2) = 7, le nombre de départ 2 est l'antécédent et le nombre d'arrivée 7 est l'image. Croire aussi qu'un nombre a toujours un seul antécédent.",
          method: "Pensez « départ, arrivée » : l'antécédent entre dans la machine, l'image en sort. Pour une image, calculez ; pour un antécédent, écrivez et résolvez l'équation f(x) = nombre, puis vérifiez en calculant l'image trouvée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'representations-fonction',
          title: "Tableau de valeurs, formule et représentation graphique",
          minutes: 30,
          objectives: [
            "Passer d'un mode de représentation d'une fonction à un autre : formule, tableau de valeurs, représentation graphique.",
            "Construire un tableau de valeurs à partir d'une formule et tracer la représentation graphique.",
            "Lire graphiquement une image et des antécédents.",
          ],
          course: [
            {
              heading: "Trois façons de décrire une fonction",
              paragraphs: [
                "Une même fonction peut être donnée de trois manières. Par une formule, comme f(x) = x² - 2x, qui permet de calculer l'image de n'importe quel nombre. Par un tableau de valeurs, qui donne les images de quelques nombres. Par une représentation graphique, une courbe tracée dans un repère, qui permet de voir d'un coup d'œil comment la fonction évolue.",
                "Chaque mode a ses avantages : la formule donne des valeurs exactes, le tableau organise des résultats (un tableur peut le remplir automatiquement), le graphique donne une vue d'ensemble mais seulement des lectures approchées.",
              ],
            },
            {
              heading: "Le tableau de valeurs",
              paragraphs: [
                "Pour f(x) = x² - 2x, on calcule quelques images : f(-1) = (-1)² - 2 × (-1) = 1 + 2 = 3 ; f(0) = 0 ; f(1) = 1 - 2 = -1 ; f(2) = 4 - 4 = 0 ; f(3) = 9 - 6 = 3. On range ces résultats dans un tableau à deux lignes : la première contient les valeurs de x, la seconde leurs images f(x).",
                "Le tableau se lit dans les deux sens : l'image de 3 est 3 (lecture de haut en bas), et le nombre 0 a pour antécédents 0 et 2 parmi les valeurs du tableau (lecture de bas en haut). Attention : un tableau ne montre que quelques valeurs ; d'autres antécédents peuvent exister en dehors.",
              ],
            },
            {
              heading: "La représentation graphique",
              paragraphs: [
                "Dans un repère, chaque colonne du tableau donne un point : l'abscisse est x et l'ordonnée est f(x). Pour f(x) = x² - 2x, on place les points (-1 ; 3), (0 ; 0), (1 ; -1), (2 ; 0) et (3 ; 3), puis on les relie par une courbe régulière, sans segments anguleux. Plus on calcule de points, plus le tracé est précis.",
                "Pour savoir si un point appartient à la courbe, on calcule l'image de son abscisse et on la compare à son ordonnée. Le point A(3 ; 3) est sur la courbe car f(3) = 3. Le point B(1 ; 2) n'y est pas car f(1) = -1 et -1 ≠ 2.",
              ],
              box: { label: "Définition", text: "Dans un repère, la représentation graphique de la fonction f est l'ensemble des points de coordonnées (x ; f(x)). Un point M(a ; b) appartient à cette courbe si et seulement si f(a) = b." },
            },
            {
              heading: "Lire un graphique",
              paragraphs: [
                "Pour lire l'image d'un nombre a, on part de a sur l'axe des abscisses (horizontal), on monte ou on descend verticalement jusqu'à la courbe, puis on lit l'ordonnée du point atteint sur l'axe vertical.",
                "Pour lire les antécédents d'un nombre b, on part de b sur l'axe des ordonnées (vertical), on trace la droite horizontale passant par ce point, et on lit les abscisses de tous les points où elle coupe la courbe. Il peut y en avoir plusieurs, un seul ou aucun. Ces lectures sont approchées : on écrit par exemple f(2,5) ≈ 1,2.",
              ],
              box: { label: "Méthode", text: "Image : de l'axe des abscisses vers la courbe, puis lecture sur l'axe des ordonnées. Antécédents : de l'axe des ordonnées vers la courbe, puis lecture sur l'axe des abscisses." },
            },
          ],
          keyPoints: [
            "Une fonction peut être donnée par une formule, un tableau de valeurs ou une courbe.",
            "La courbe de f est formée des points (x ; f(x)) : abscisse x, ordonnée f(x).",
            "M(a ; b) est sur la courbe de f si et seulement si f(a) = b.",
            "Image de a : partir de a sur l'axe horizontal, aller à la courbe, lire sur l'axe vertical.",
            "Antécédents de b : partir de b sur l'axe vertical, aller à la courbe, lire toutes les abscisses.",
            "Les lectures graphiques sont approchées ; la formule donne les valeurs exactes.",
          ],
          example: {
            statement: "Soit f la fonction définie par f(x) = 2x² - 3. Le point A(2 ; 5) appartient-il à la représentation graphique de f ? Et le point B(-1 ; 1) ?",
            solution: [
              "On calcule l'image de l'abscisse de A : f(2) = 2 × 2² - 3 = 2 × 4 - 3 = 8 - 3 = 5.",
              "f(2) = 5, qui est l'ordonnée de A : le point A appartient à la courbe de f.",
              "On calcule l'image de l'abscisse de B : f(-1) = 2 × (-1)² - 3 = 2 × 1 - 3 = -1.",
              "f(-1) = -1 alors que l'ordonnée de B est 1 : le point B n'appartient pas à la courbe de f.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit g la fonction définie par g(x) = -x + 4. Compléter le tableau de valeurs pour x = -2, 0, 1, 3 et 5.",
              hint: "Pour chaque valeur, remplacez x par le nombre : -x est l'opposé de x, donc -(-2) = 2.",
              solution: [
                "g(-2) = -(-2) + 4 = 2 + 4 = 6.",
                "g(0) = 0 + 4 = 4 ; g(1) = -1 + 4 = 3.",
                "g(3) = -3 + 4 = 1 ; g(5) = -5 + 4 = -1.",
                "Le tableau donne, pour x = -2, 0, 1, 3, 5, les images 6, 4, 3, 1, -1.",
              ],
            },
            {
              level: 2,
              statement: "Une fonction h est donnée par le tableau suivant. Pour x = -2 ; -1 ; 0 ; 1 ; 2 ; 3, les images h(x) sont 5 ; 0 ; -3 ; -4 ; -3 ; 0. a) Quelle est l'image de 2 ? b) Quels sont les antécédents de 0 lisibles dans le tableau ? c) Quels sont les antécédents de -3 lisibles dans le tableau ? d) On sait que h(x) = x² - 2x - 3. Vérifier par le calcul la valeur de h(-2).",
              hint: "L'image se lit sous la valeur de x ; les antécédents se lisent au-dessus de la valeur de h(x). Pour d), mettez -2 entre parenthèses.",
              solution: [
                "a) Sous x = 2, on lit h(2) = -3. L'image de 2 est -3.",
                "b) La valeur 0 apparaît sous x = -1 et sous x = 3 : les antécédents de 0 dans le tableau sont -1 et 3.",
                "c) La valeur -3 apparaît sous x = 0 et sous x = 2 : les antécédents de -3 dans le tableau sont 0 et 2.",
                "d) h(-2) = (-2)² - 2 × (-2) - 3 = 4 + 4 - 3 = 5, ce qui correspond bien au tableau.",
              ],
            },
            {
              level: 3,
              statement: "Une balle est lancée verticalement depuis le sol. Sa hauteur, en mètres, au bout de t secondes est h(t) = -5t² + 10t, pour t compris entre 0 et 2. 1) Compléter un tableau de valeurs pour t = 0 ; 0,5 ; 1 ; 1,5 ; 2. 2) D'après le tableau, à quel instant la balle semble-t-elle la plus haute, et à quelle hauteur ? 3) Résoudre l'équation h(t) = 0 et interpréter les solutions.",
              hint: "Calculez d'abord t² avant de multiplier par -5. Pour la question 3, factorisez -5t² + 10t par -5t.",
              solution: [
                "1) h(0) = 0 ; h(0,5) = -5 × 0,25 + 5 = -1,25 + 5 = 3,75 ; h(1) = -5 + 10 = 5 ; h(1,5) = -5 × 2,25 + 15 = -11,25 + 15 = 3,75 ; h(2) = -20 + 20 = 0.",
                "2) La plus grande valeur du tableau est 5, pour t = 1 : la balle semble atteindre sa hauteur maximale, 5 m, au bout de 1 seconde. Le tableau est symétrique autour de t = 1, ce qui confirme cette lecture.",
                "3) -5t² + 10t = -5t(t - 2). On résout -5t(t - 2) = 0 : -5t = 0 ou t - 2 = 0, donc t = 0 ou t = 2.",
                "Interprétation : la hauteur est nulle au départ (t = 0 s, la balle quitte le sol) et au bout de 2 secondes, quand la balle retombe au sol.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour tracer la représentation graphique d'une fonction à partir de sa formule.",
            items: [
              "Choisir des valeurs de x régulièrement espacées",
              "Calculer l'image de chaque valeur avec la formule",
              "Ranger les résultats dans un tableau de valeurs",
              "Tracer un repère avec des unités adaptées",
              "Placer les points de coordonnées (x ; f(x))",
              "Relier les points par une courbe régulière",
            ],
          },
          quiz: [
            {
              q: "Le point M(a ; b) est sur la courbe de f si :",
              options: ["f(b) = a", "f(a) = b", "a = b", "f(a) = 0"],
              answer: 1,
              why: "L'abscisse a est le nombre de départ et l'ordonnée b doit être son image : f(a) = b.",
            },
            {
              q: "f(x) = x² + 1. Le point de la courbe d'abscisse 3 a pour ordonnée :",
              options: ["7", "4", "10", "9"],
              answer: 2,
              why: "f(3) = 3² + 1 = 9 + 1 = 10.",
            },
            {
              q: "Pour lire graphiquement l'image de 2, on part :",
              options: ["de 2 sur l'axe des abscisses", "de 2 sur l'axe des ordonnées", "de l'origine du repère"],
              answer: 0,
              why: "2 est le nombre de départ : on le place sur l'axe horizontal, puis on va jusqu'à la courbe.",
            },
            {
              q: "Sur un graphique, la droite horizontale d'ordonnée 4 coupe la courbe de f en trois points. Le nombre 4 a donc :",
              options: ["une image", "trois images", "un seul antécédent, le plus grand", "trois antécédents"],
              answer: 3,
              why: "Chaque point d'intersection a pour abscisse un antécédent de 4 : il y en a trois.",
            },
            {
              q: "Une valeur lue sur un graphique est :",
              options: ["toujours exacte", "en général approchée", "toujours un nombre entier"],
              answer: 1,
              why: "La précision du tracé et de la lecture est limitée : on écrit le résultat avec le symbole ≈.",
            },
          ],
          trap: "Inverser abscisse et ordonnée : l'image se lit sur l'axe vertical (ordonnées) et les antécédents sur l'axe horizontal (abscisses). Oublier aussi des antécédents quand la droite horizontale coupe la courbe plusieurs fois.",
          method: "Sur la copie, laissez les pointillés de lecture sur le graphique et écrivez « par lecture graphique, f(2) ≈ ... » : le correcteur voit votre méthode, et le symbole ≈ rappelle que la lecture est approchée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-lineaires',
          title: "Les fonctions linéaires et la proportionnalité",
          minutes: 30,
          objectives: [
            "Reconnaître une fonction linéaire f(x) = ax et identifier son coefficient.",
            "Faire le lien entre fonction linéaire et situation de proportionnalité.",
            "Représenter graphiquement une fonction linéaire et déterminer son coefficient à partir d'une image.",
            "Modéliser une augmentation ou une diminution en pourcentage par une fonction linéaire.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une fonction linéaire ?",
              paragraphs: [
                "Une fonction linéaire est une fonction qui multiplie chaque nombre par un même nombre a, appelé coefficient. Elle s'écrit f(x) = ax. Par exemple, f(x) = 3x est linéaire de coefficient 3, g(x) = -0,5x est linéaire de coefficient -0,5, et h(x) = x ÷ 4 est linéaire de coefficient 1/4 = 0,25.",
                "En revanche, x ↦ x + 3 n'est pas linéaire (on ajoute un nombre), x ↦ x² non plus (on multiplie x par lui-même, pas par un nombre fixe).",
              ],
              box: { label: "Définition", text: "Une fonction linéaire est une fonction de la forme f : x ↦ ax, où a est un nombre fixé appelé coefficient de la fonction linéaire." },
            },
            {
              heading: "Proportionnalité et pourcentages",
              paragraphs: [
                "Une fonction linéaire modélise une situation de proportionnalité : les images sont proportionnelles aux nombres de départ, et le coefficient a est le coefficient de proportionnalité. Si le carburant coûte 1,80 € le litre, le prix de x litres est p(x) = 1,8x : doubler la quantité double le prix.",
                "Les évolutions en pourcentage sont des fonctions linéaires. Augmenter de 15 % revient à multiplier par 1 + 15/100 = 1,15 : x ↦ 1,15x. Diminuer de 30 % revient à multiplier par 1 - 30/100 = 0,7 : x ↦ 0,7x. Ce nombre s'appelle le coefficient multiplicateur.",
              ],
              box: { label: "Propriété", text: "Augmenter une quantité de t % revient à la multiplier par 1 + t/100. La diminuer de t % revient à la multiplier par 1 - t/100." },
            },
            {
              heading: "La représentation graphique",
              paragraphs: [
                "La représentation graphique d'une fonction linéaire est une droite qui passe par l'origine du repère, puisque f(0) = a × 0 = 0. Réciproquement, toute droite non verticale passant par l'origine représente une fonction linéaire.",
                "Pour la tracer, il suffit d'un second point. Pour f(x) = 2x, on calcule f(3) = 6 et on trace la droite passant par O(0 ; 0) et A(3 ; 6). Le coefficient a se voit sur le graphique : quand on avance de 1 vers la droite, on monte de a (ou on descend si a est négatif). Si a > 0, la droite monte ; si a < 0, elle descend.",
              ],
            },
            {
              heading: "Trouver le coefficient",
              paragraphs: [
                "Si l'on sait que f est linéaire et que f(4) = 10, alors a × 4 = 10, donc a = 10 ÷ 4 = 2,5 et f(x) = 2,5x. De façon générale, a = f(x) ÷ x pour tout x non nul.",
                "Sur un graphique, on choisit un point de la droite, autre que l'origine, dont les coordonnées se lisent bien. Si la droite passe par (2 ; -3), alors a = -3 ÷ 2 = -1,5.",
              ],
            },
          ],
          keyPoints: [
            "Une fonction linéaire s'écrit f(x) = ax ; a est son coefficient.",
            "Elle modélise une situation de proportionnalité ; a est le coefficient de proportionnalité.",
            "Sa représentation graphique est une droite passant par l'origine.",
            "Si f(x₀) = y₀ avec x₀ non nul, alors a = y₀ ÷ x₀.",
            "Augmenter de t % : multiplier par 1 + t/100 ; diminuer de t % : multiplier par 1 - t/100.",
          ],
          example: {
            statement: "f est une fonction linéaire telle que f(5) = -15. Déterminer l'expression de f, puis calculer l'image de -2 et l'antécédent de 21.",
            solution: [
              "f est linéaire, donc f(x) = ax. Comme f(5) = -15, on a 5a = -15, donc a = -15 ÷ 5 = -3.",
              "Donc f(x) = -3x.",
              "Image de -2 : f(-2) = -3 × (-2) = 6.",
              "Antécédent de 21 : on résout -3x = 21, donc x = 21 ÷ (-3) = -7.",
              "f(x) = -3x ; l'image de -2 est 6 et l'antécédent de 21 est -7.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les fonctions suivantes, lesquelles sont linéaires ? Donner alors leur coefficient. f(x) = 7x ; g(x) = 2x + 1 ; h(x) = x² ; k(x) = -x ÷ 3 ; m(x) = 4.",
              hint: "Une fonction est linéaire si elle s'écrit « un nombre fixe multiplié par x », sans terme ajouté ni carré.",
              solution: [
                "f(x) = 7x est linéaire, de coefficient 7.",
                "g(x) = 2x + 1 n'est pas linéaire, à cause du terme + 1 (c'est une fonction affine).",
                "h(x) = x² n'est pas linéaire : x est multiplié par lui-même.",
                "k(x) = -x ÷ 3 = (-1/3) × x est linéaire, de coefficient -1/3.",
                "m(x) = 4 n'est pas linéaire : l'image de 0 vaut 4 et non 0 (c'est une fonction constante).",
              ],
            },
            {
              level: 2,
              statement: "Pendant les soldes, un magasin baisse tous ses prix de 25 %. a) Exprimer le prix soldé p(x) en fonction du prix initial x, en euros. b) Calculer le prix soldé d'un article affiché 48 €. c) Un article soldé coûte 30 €. Quel était son prix initial ?",
              hint: "Une baisse de 25 % revient à multiplier par 1 - 25/100. Pour c), cherchez l'antécédent de 30.",
              solution: [
                "a) Baisser de 25 % revient à multiplier par 1 - 0,25 = 0,75 : p(x) = 0,75x.",
                "b) p(48) = 0,75 × 48 = 36. Le prix soldé est 36 €.",
                "c) On résout 0,75x = 30, donc x = 30 ÷ 0,75 = 40. Vérification : 0,75 × 40 = 30.",
                "Le prix initial était 40 €.",
              ],
            },
            {
              level: 3,
              statement: "Une voiture consomme 6 litres de carburant pour 100 km. On note v(d) le volume de carburant consommé, en litres, pour d kilomètres parcourus. 1) Justifier que v(d) = 0,06d et que v est une fonction linéaire. 2) Calculer la consommation pour un trajet de 350 km. 3) Avec 45 litres de carburant, quelle distance peut-on parcourir ? 4) Le carburant coûte 1,90 € le litre. Exprimer le coût c(d) d'un trajet de d kilomètres, puis calculer le coût d'un trajet de 350 km.",
              hint: "La consommation est proportionnelle à la distance : cherchez combien de litres sont consommés pour 1 km. Pour la question 3, cherchez un antécédent.",
              solution: [
                "1) La consommation est proportionnelle à la distance : pour 1 km, la voiture consomme 6 ÷ 100 = 0,06 L. Donc v(d) = 0,06d, de la forme ad avec a = 0,06 : v est linéaire.",
                "2) v(350) = 0,06 × 350 = 21. La voiture consomme 21 L pour 350 km.",
                "3) On résout 0,06d = 45, donc d = 45 ÷ 0,06 = 750. On peut parcourir 750 km.",
                "4) Le coût vaut 1,90 € par litre consommé : c(d) = 1,9 × 0,06d = 0,114d. Donc c(350) = 0,114 × 350 = 39,9.",
                "Contrôle : 21 L × 1,90 € = 39,90 €. Le trajet de 350 km coûte 39,90 €.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque évolution à la fonction linéaire qui la modélise.",
            pairs: [
              { left: "Augmenter de 20 %", right: "x ↦ 1,2x" },
              { left: "Diminuer de 20 %", right: "x ↦ 0,8x" },
              { left: "Prendre le double", right: "x ↦ 2x" },
              { left: "Diminuer de 5 %", right: "x ↦ 0,95x" },
              { left: "Augmenter de 5 %", right: "x ↦ 1,05x" },
              { left: "Prendre le quart", right: "x ↦ 0,25x" },
            ],
          },
          quiz: [
            {
              q: "Quelle fonction est linéaire ?",
              options: ["f(x) = x + 2", "f(x) = -4x", "f(x) = x²", "f(x) = 3"],
              answer: 1,
              why: "-4x est de la forme ax avec a = -4.",
            },
            {
              q: "La représentation graphique d'une fonction linéaire est :",
              options: ["une droite qui passe par l'origine", "une droite qui ne passe jamais par l'origine", "une courbe en forme de U"],
              answer: 0,
              why: "f(0) = a × 0 = 0, donc la droite passe par le point (0 ; 0).",
            },
            {
              q: "f est linéaire et f(3) = 12. Le coefficient de f est :",
              options: ["36", "9", "4", "15"],
              answer: 2,
              why: "a = 12 ÷ 3 = 4, donc f(x) = 4x.",
            },
            {
              q: "Augmenter un prix de 8 % revient à le multiplier par :",
              options: ["0,08", "8", "0,92", "1,08"],
              answer: 3,
              why: "Le coefficient multiplicateur vaut 1 + 8/100 = 1,08.",
            },
            {
              q: "f(x) = -2x. Quelle est l'image de -5 ?",
              options: ["10", "-10", "2,5", "-7"],
              answer: 0,
              why: "f(-5) = -2 × (-5) = 10 : le produit de deux nombres négatifs est positif.",
            },
          ],
          trap: "Croire qu'une hausse de 20 % suivie d'une baisse de 20 % ramène au prix de départ : 1,2 × 0,8 = 0,96, on perd 4 %. Confondre aussi x ↦ 2x + 1 (affine) avec une fonction linéaire.",
          method: "Pour tracer une fonction linéaire, un seul point suffit en plus de l'origine : calculez f(x) pour une valeur simple (souvent x = 2 ou x = 10), placez le point, puis tracez la droite qui le relie à l'origine.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fonctions-affines',
          title: "Les fonctions affines",
          minutes: 35,
          objectives: [
            "Reconnaître une fonction affine f(x) = ax + b et identifier a et b.",
            "Représenter graphiquement une fonction affine et interpréter a et b sur le graphique.",
            "Déterminer l'expression d'une fonction affine à partir de deux nombres et de leurs images.",
            "Comparer deux situations modélisées par des fonctions affines.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une fonction affine ?",
              paragraphs: [
                "Une fonction affine est une fonction de la forme f(x) = ax + b, où a et b sont deux nombres fixés. Par exemple, f(x) = 2x + 3 (a = 2, b = 3), g(x) = -x + 5 (a = -1, b = 5) ou h(x) = 4 - 0,5x (a = -0,5, b = 4).",
                "Deux cas particuliers sont importants. Si b = 0, on obtient f(x) = ax : une fonction linéaire est donc une fonction affine particulière. Si a = 0, on obtient f(x) = b : la fonction est constante, tous les nombres ont la même image.",
                "Les fonctions affines modélisent de nombreux tarifs : un abonnement fixe de 20 € plus 4 € par séance donne un prix p(x) = 4x + 20 pour x séances.",
              ],
              box: { label: "Définition", text: "Une fonction affine est une fonction de la forme f : x ↦ ax + b, où a et b sont des nombres fixés. a est le coefficient directeur et b l'ordonnée à l'origine." },
            },
            {
              heading: "La représentation graphique",
              paragraphs: [
                "La représentation graphique d'une fonction affine est une droite. Comme f(0) = b, cette droite coupe l'axe des ordonnées au point (0 ; b) : c'est pourquoi b s'appelle l'ordonnée à l'origine.",
                "Le nombre a indique l'inclinaison de la droite : quand x augmente de 1, f(x) augmente de a. Si a > 0, la droite monte et la fonction est croissante ; si a < 0, elle descend et la fonction est décroissante ; si a = 0, la droite est horizontale. Plus généralement, les accroissements sont proportionnels : f(x₂) - f(x₁) = a(x₂ - x₁).",
                "Pour tracer la droite, deux points suffisent. Pour f(x) = 2x - 1, on calcule f(0) = -1 et f(3) = 5, on place (0 ; -1) et (3 ; 5) et on trace la droite qui les relie. Un troisième point sert de contrôle.",
              ],
              box: { label: "Propriété", text: "La représentation graphique de x ↦ ax + b est une droite qui passe par (0 ; b). Quand x augmente de 1, l'image augmente de a. Si a > 0, la fonction est croissante ; si a < 0, elle est décroissante." },
            },
            {
              heading: "Déterminer a et b à partir de deux images",
              paragraphs: [
                "Supposons que f est affine avec f(2) = 7 et f(5) = 16. Entre x = 2 et x = 5, x augmente de 3 et f(x) augmente de 16 - 7 = 9. Comme les accroissements sont proportionnels, a = 9 ÷ 3 = 3.",
                "Pour trouver b, on utilise l'une des deux images : f(2) = 3 × 2 + b = 7, donc 6 + b = 7 et b = 1. Ainsi f(x) = 3x + 1. On contrôle avec l'autre image : f(5) = 15 + 1 = 16.",
              ],
              box: { label: "Formule", text: "Si f est affine et x₁ ≠ x₂, alors a = (f(x₂) - f(x₁)) ÷ (x₂ - x₁). On trouve ensuite b en remplaçant x par x₁ dans f(x₁) = a × x₁ + b." },
            },
            {
              heading: "Comparer deux tarifs",
              paragraphs: [
                "Une piscine propose deux tarifs. Tarif A : 8 € l'entrée. Tarif B : un abonnement de 30 € puis 5 € l'entrée. Pour x entrées, A(x) = 8x (fonction linéaire) et B(x) = 5x + 30 (fonction affine).",
                "Les deux tarifs coûtent autant lorsque 8x = 5x + 30, soit 3x = 30 et x = 10 : pour 10 entrées, on paie 80 € dans les deux cas. Pour moins de 10 entrées, le tarif A est moins cher (avec 5 entrées : 40 € contre 55 €) ; pour plus de 10 entrées, le tarif B est moins cher (avec 15 entrées : 120 € contre 105 €). Sur un graphique, les deux droites se coupent au point (10 ; 80).",
              ],
            },
          ],
          keyPoints: [
            "Une fonction affine s'écrit f(x) = ax + b ; a est le coefficient directeur, b l'ordonnée à l'origine.",
            "Linéaire : b = 0. Constante : a = 0.",
            "Sa représentation graphique est une droite qui coupe l'axe des ordonnées en (0 ; b).",
            "Si a > 0, la fonction est croissante ; si a < 0, elle est décroissante.",
            "a = (f(x₂) - f(x₁)) ÷ (x₂ - x₁), puis on calcule b avec une des images.",
            "Pour comparer deux tarifs affines, on résout l'équation qui les égalise.",
          ],
          example: {
            statement: "Soit f la fonction définie par f(x) = -2x + 3. 1) Calculer f(0) et f(4). 2) Décrire le tracé de sa représentation graphique. 3) Déterminer l'antécédent de -5.",
            solution: [
              "1) f(0) = -2 × 0 + 3 = 3 et f(4) = -2 × 4 + 3 = -8 + 3 = -5.",
              "2) f est affine, sa représentation est une droite : elle passe par les points (0 ; 3) et (4 ; -5).",
              "Le coefficient a = -2 est négatif : la droite descend ; quand x augmente de 1, f(x) diminue de 2.",
              "3) On résout -2x + 3 = -5 : -2x = -8, donc x = 4. On retrouve f(4) = -5.",
              "L'antécédent de -5 par f est 4.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des fonctions affines suivantes, donner a et b, et préciser si elle est linéaire ou constante : f(x) = 4x - 7 ; g(x) = 2 - x ; h(x) = 6x ; k(x) = -3.",
              hint: "Réécrivez chaque expression sous la forme ax + b : le nombre devant x est a, le nombre seul est b.",
              solution: [
                "f(x) = 4x - 7 : a = 4 et b = -7.",
                "g(x) = 2 - x = -x + 2 : a = -1 et b = 2.",
                "h(x) = 6x = 6x + 0 : a = 6 et b = 0, la fonction h est linéaire.",
                "k(x) = -3 = 0x - 3 : a = 0 et b = -3, la fonction k est constante.",
              ],
            },
            {
              level: 2,
              statement: "f est une fonction affine telle que f(1) = 5 et f(4) = -4. Déterminer l'expression de f(x), puis calculer f(-2).",
              hint: "Calculez d'abord a = (f(4) - f(1)) ÷ (4 - 1), puis trouvez b avec f(1) = 5.",
              solution: [
                "a = (f(4) - f(1)) ÷ (4 - 1) = (-4 - 5) ÷ 3 = -9 ÷ 3 = -3.",
                "f(1) = -3 × 1 + b = 5, donc b = 5 + 3 = 8. Ainsi f(x) = -3x + 8.",
                "Contrôle : f(4) = -12 + 8 = -4.",
                "f(-2) = -3 × (-2) + 8 = 6 + 8 = 14.",
              ],
            },
            {
              level: 3,
              statement: "Un loueur de vélos propose trois formules. Formule A : 3 € par heure. Formule B : 9 € de forfait, puis 1,50 € par heure. Formule C : 24 € quelle que soit la durée. On note x le nombre d'heures de location. 1) Calculer le prix de chaque formule pour 4 heures. 2) Exprimer A(x), B(x) et C(x) en fonction de x, et indiquer la nature de chaque fonction. 3) Pour quelle durée les formules A et B coûtent-elles le même prix ? 4) Pour quelle durée les formules B et C coûtent-elles le même prix ? 5) En déduire la formule la plus avantageuse selon la durée de location.",
              hint: "Pour les questions 3 et 4, écrivez l'égalité des deux prix et résolvez l'équation. Pour la question 5, testez une durée dans chaque intervalle.",
              solution: [
                "1) Pour 4 heures : A coûte 3 × 4 = 12 € ; B coûte 9 + 1,5 × 4 = 15 € ; C coûte 24 €.",
                "2) A(x) = 3x (fonction linéaire) ; B(x) = 1,5x + 9 (fonction affine) ; C(x) = 24 (fonction constante).",
                "3) On résout 3x = 1,5x + 9 : 1,5x = 9, donc x = 6. Pour 6 heures, A et B coûtent 18 €.",
                "4) On résout 1,5x + 9 = 24 : 1,5x = 15, donc x = 10. Pour 10 heures, B et C coûtent 24 €.",
                "5) Pour moins de 6 heures, A est la moins chère (4 h : 12 € contre 15 € et 24 €). Entre 6 et 10 heures, B est la moins chère (8 h : A 24 €, B 21 €, C 24 €). Au-delà de 10 heures, C est la moins chère (12 h : A 36 €, B 27 €, C 24 €).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les fonctions affines.",
            statements: [
              { text: "Une fonction linéaire est une fonction affine particulière.", true: true, why: "C'est le cas b = 0 : f(x) = ax + 0." },
              { text: "La droite qui représente f(x) = 2x - 5 passe par le point (0 ; -5).", true: true, why: "f(0) = -5 : b est l'ordonnée à l'origine." },
              { text: "Si a est négatif, la fonction affine est croissante.", true: false, why: "Si a < 0, la droite descend : la fonction est décroissante." },
              { text: "La représentation de f(x) = 4 est une droite verticale.", true: false, why: "Tous les points ont pour ordonnée 4 : c'est une droite horizontale." },
              { text: "f(x) = x² + 1 est une fonction affine.", true: false, why: "x² n'est pas de la forme ax : ce n'est pas une fonction affine." },
              { text: "Pour f(x) = 3x + 1, quand x augmente de 1, f(x) augmente de 3.", true: true, why: "L'accroissement de f(x) vaut a fois l'accroissement de x, ici 3 × 1." },
              { text: "Deux points suffisent pour tracer la représentation d'une fonction affine.", true: true, why: "C'est une droite, et deux points distincts déterminent une droite." },
            ],
          },
          quiz: [
            {
              q: "Pour f(x) = 5 - 2x, que valent a et b ?",
              options: ["a = 5 et b = -2", "a = 2 et b = 5", "a = -2 et b = 5", "a = -5 et b = 2"],
              answer: 2,
              why: "On réécrit f(x) = -2x + 5 : le coefficient de x est a = -2, le terme constant est b = 5.",
            },
            {
              q: "La droite représentant f(x) = 3x - 4 coupe l'axe des ordonnées au point :",
              options: ["(0 ; -4)", "(-4 ; 0)", "(0 ; 3)", "(3 ; 0)"],
              answer: 0,
              why: "f(0) = -4 : le point d'abscisse 0 a pour ordonnée b = -4.",
            },
            {
              q: "f est affine, avec f(0) = 2 et f(1) = 5. Alors :",
              options: ["f(x) = 2x + 5", "f(x) = 5x + 2", "f(x) = 2x + 3", "f(x) = 3x + 2"],
              answer: 3,
              why: "b = f(0) = 2 et, quand x augmente de 1, f(x) augmente de 5 - 2 = 3, donc a = 3.",
            },
            {
              q: "Une fonction affine de coefficient directeur a = -1,5 est :",
              options: ["croissante", "décroissante", "constante"],
              answer: 1,
              why: "Le coefficient directeur est négatif : la droite descend.",
            },
            {
              q: "Une salle de sport demande 20 € d'inscription puis 4 € par séance. Le prix pour x séances est :",
              options: ["24x", "4x + 20", "20x + 4", "4(x + 20)"],
              answer: 1,
              why: "On paie 4 € pour chacune des x séances, soit 4x, plus 20 € une seule fois.",
            },
          ],
          trap: "Confondre a et b, en particulier quand l'expression est écrite dans un ordre inhabituel : dans f(x) = 5 - 2x, le coefficient directeur est a = -2 et l'ordonnée à l'origine est b = 5.",
          method: "Réécrivez toujours f(x) sous la forme ax + b avant de lire a et b. Pour tracer la droite, calculez trois images : deux suffisent, la troisième sert de contrôle, car les trois points doivent être alignés.",
        },
      ],
    },
    /* ==================================================================== */
    /* STATISTIQUES ET PROBABILITÉS                                           */
    /* ==================================================================== */
    {
      id: 'statistiques-probabilites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'indicateurs-statistiques',
          title: "Moyenne, médiane et étendue : résumer une série",
          minutes: 30,
          objectives: [
            "Calculer la moyenne, éventuellement pondérée, d'une série statistique.",
            "Déterminer une médiane et l'interpréter.",
            "Calculer l'étendue et l'interpréter comme une mesure de dispersion.",
            "Comparer deux séries à l'aide de ces indicateurs.",
          ],
          course: [
            {
              heading: "Le vocabulaire des statistiques",
              paragraphs: [
                "Une étude statistique porte sur une population (les élèves d'une classe, les joueurs d'une équipe) et sur un caractère que l'on observe (la note, la taille, la pointure). Les résultats forment une série statistique. L'effectif d'une valeur est le nombre de fois où elle apparaît ; l'effectif total N est le nombre total de données.",
                "La fréquence d'une valeur est son effectif divisé par l'effectif total. Elle peut s'écrire sous forme de fraction, de nombre décimal ou de pourcentage : si 6 élèves sur 24 ont eu 12, la fréquence de la note 12 est 6/24 = 0,25, soit 25 %. Pour résumer une série, on utilise des indicateurs : la moyenne et la médiane (indicateurs de position) et l'étendue (indicateur de dispersion).",
              ],
            },
            {
              heading: "La moyenne",
              paragraphs: [
                "La moyenne d'une série est la somme de toutes les valeurs divisée par l'effectif total. Pour les notes 12, 8, 15, 9 et 16 : (12 + 8 + 15 + 9 + 16) ÷ 5 = 60 ÷ 5 = 12. La moyenne est 12 : c'est la note qu'aurait chaque élève si l'on répartissait le total équitablement.",
                "Quand les valeurs sont données avec leurs effectifs, on calcule une moyenne pondérée : chaque valeur est multipliée par son effectif. Si 2 élèves ont 8, 5 ont 10, 8 ont 12 et 5 ont 15, l'effectif total est 20 et la moyenne vaut (8 × 2 + 10 × 5 + 12 × 8 + 15 × 5) ÷ 20 = (16 + 50 + 96 + 75) ÷ 20 = 237 ÷ 20 = 11,85.",
              ],
              box: { label: "Formule", text: "Moyenne = somme des valeurs ÷ effectif total. Moyenne pondérée = (somme des produits valeur × effectif) ÷ effectif total." },
            },
            {
              heading: "La médiane",
              paragraphs: [
                "La médiane partage la série, rangée dans l'ordre croissant, en deux groupes de même effectif. Pour la série 3, 5, 7, 8, 12, 15, 20 (7 valeurs), la valeur du milieu est la 4e : la médiane est 8. Il y a trois valeurs avant et trois valeurs après.",
                "Quand l'effectif est pair, on prend en général la moyenne des deux valeurs centrales. Pour 4, 6, 9, 11, 13, 18 (6 valeurs), les valeurs centrales sont la 3e et la 4e : la médiane est (9 + 11) ÷ 2 = 10.",
                "La médiane est peu sensible aux valeurs extrêmes. Si, dans une petite entreprise, quatre salariés gagnent 1 800 € et le directeur 9 000 €, le salaire moyen est (4 × 1 800 + 9 000) ÷ 5 = 3 240 €, alors que le salaire médian est 1 800 €, beaucoup plus représentatif.",
              ],
              box: { label: "Définition", text: "La médiane d'une série rangée dans l'ordre croissant est une valeur qui la partage en deux groupes de même effectif : au moins la moitié des valeurs lui sont inférieures ou égales, et au moins la moitié lui sont supérieures ou égales." },
            },
            {
              heading: "L'étendue",
              paragraphs: [
                "L'étendue est la différence entre la plus grande et la plus petite valeur de la série. Elle mesure la dispersion des valeurs : plus elle est grande, plus les valeurs sont éloignées les unes des autres.",
                "Deux séries peuvent avoir la même moyenne et être très différentes. La série A : 10, 10, 11, 9, 10 et la série B : 2, 18, 10, 5, 15 ont toutes deux une moyenne de 10 (somme 50 pour 5 valeurs). Mais l'étendue de A vaut 11 - 9 = 2 et celle de B vaut 18 - 2 = 16 : les résultats de A sont beaucoup plus réguliers.",
              ],
              box: { label: "À retenir", text: "Étendue = plus grande valeur - plus petite valeur. Pour comparer deux séries, on compare leurs moyennes ou leurs médianes (la position) et leurs étendues (la dispersion)." },
            },
          ],
          keyPoints: [
            "Moyenne = somme des valeurs ÷ effectif total ; avec des effectifs, on pondère chaque valeur.",
            "La médiane partage la série rangée en deux groupes de même effectif.",
            "N impair : la médiane est la valeur de rang (N + 1) ÷ 2. N pair : moyenne des valeurs de rangs N ÷ 2 et N ÷ 2 + 1.",
            "La médiane est peu sensible aux valeurs extrêmes, contrairement à la moyenne.",
            "Étendue = plus grande valeur - plus petite valeur : elle mesure la dispersion.",
            "Fréquence d'une valeur = son effectif ÷ effectif total.",
          ],
          example: {
            statement: "Voici les tailles, en cm, des 8 joueurs d'une équipe de basket : 182, 175, 190, 168, 185, 177, 201, 180. Calculer la moyenne, la médiane et l'étendue de cette série.",
            solution: [
              "Somme des tailles : 182 + 175 + 190 + 168 + 185 + 177 + 201 + 180 = 1 458.",
              "Moyenne : 1 458 ÷ 8 = 182,25 cm.",
              "Série rangée dans l'ordre croissant : 168, 175, 177, 180, 182, 185, 190, 201. L'effectif est pair (8) : les valeurs centrales sont la 4e (180) et la 5e (182).",
              "Médiane : (180 + 182) ÷ 2 = 181 cm. Au moins la moitié des joueurs mesurent 181 cm ou moins.",
              "Étendue : 201 - 168 = 33 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici les notes obtenues par Sacha au cours d'un trimestre : 14, 9, 11, 17, 9, 12, 19. Calculer la moyenne, la médiane et l'étendue de cette série.",
              hint: "Pour la médiane, rangez d'abord les 7 notes dans l'ordre croissant : la médiane est la 4e valeur.",
              solution: [
                "Somme : 14 + 9 + 11 + 17 + 9 + 12 + 19 = 91. Moyenne : 91 ÷ 7 = 13.",
                "Série rangée : 9, 9, 11, 12, 14, 17, 19. L'effectif est 7 (impair), la médiane est la valeur de rang (7 + 1) ÷ 2 = 4 : la médiane est 12.",
                "Étendue : 19 - 9 = 10.",
                "Moyenne : 13 ; médiane : 12 ; étendue : 10.",
              ],
            },
            {
              level: 2,
              statement: "Dans une classe, on a relevé les pointures : 3 élèves chaussent du 36, 5 du 37, 7 du 38, 6 du 39 et 4 du 40. Calculer la pointure moyenne, la pointure médiane et l'étendue de la série.",
              hint: "Calculez d'abord l'effectif total. Pour la médiane, cumulez les effectifs dans l'ordre croissant des pointures pour repérer la valeur centrale.",
              solution: [
                "Effectif total : 3 + 5 + 7 + 6 + 4 = 25.",
                "Moyenne pondérée : (36 × 3 + 37 × 5 + 38 × 7 + 39 × 6 + 40 × 4) ÷ 25 = (108 + 185 + 266 + 234 + 160) ÷ 25 = 953 ÷ 25 = 38,12.",
                "Médiane : N = 25 est impair, la médiane est la 13e valeur. Effectifs cumulés : 3 (jusqu'à 36), 8 (jusqu'à 37), 15 (jusqu'à 38). La 13e valeur est donc 38.",
                "Étendue : 40 - 36 = 4.",
                "Pointure moyenne : 38,12 ; pointure médiane : 38 ; étendue : 4.",
              ],
            },
            {
              level: 3,
              statement: "Deux équipes de handball ont disputé 10 matchs. Points marqués par l'équipe A : 45, 52, 48, 60, 38, 55, 50, 47, 53, 52. Pour l'équipe B, on connaît seulement : moyenne 50 points, médiane 51 points, étendue 40 points. 1) Calculer la moyenne de l'équipe A. 2) Déterminer la médiane de l'équipe A. 3) Calculer l'étendue de l'équipe A. 4) L'entraîneur affirme que l'équipe A est plus régulière que l'équipe B. Justifier cette affirmation.",
              hint: "Rangez les 10 scores de l'équipe A : l'effectif est pair, la médiane est la moyenne des 5e et 6e valeurs. Pour la question 4, comparez les indicateurs un à un.",
              solution: [
                "1) Somme : 45 + 52 + 48 + 60 + 38 + 55 + 50 + 47 + 53 + 52 = 500. Moyenne : 500 ÷ 10 = 50 points.",
                "2) Série rangée : 38, 45, 47, 48, 50, 52, 52, 53, 55, 60. Les valeurs centrales sont la 5e (50) et la 6e (52) : médiane = (50 + 52) ÷ 2 = 51 points.",
                "3) Étendue : 60 - 38 = 22 points.",
                "4) Les deux équipes ont la même moyenne (50) et la même médiane (51) : elles marquent autant de points en général.",
                "Mais l'étendue de A (22 points) est bien plus petite que celle de B (40 points) : les scores de A sont moins dispersés. L'équipe A est donc plus régulière.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Moyenne", right: "Somme des valeurs divisée par l'effectif total" },
              { left: "Médiane", right: "Valeur qui partage la série rangée en deux groupes de même effectif" },
              { left: "Étendue", right: "Différence entre la plus grande et la plus petite valeur" },
              { left: "Effectif", right: "Nombre de fois qu'une valeur apparaît dans la série" },
              { left: "Fréquence", right: "Effectif d'une valeur divisé par l'effectif total" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la moyenne de la série 4, 8, 9, 15 ?",
              options: ["8,5", "9", "36", "11"],
              answer: 1,
              why: "(4 + 8 + 9 + 15) ÷ 4 = 36 ÷ 4 = 9.",
            },
            {
              q: "Quelle est la médiane de la série 3, 12, 7, 5, 20 ?",
              options: ["7", "12", "9,4", "5"],
              answer: 0,
              why: "Rangée, la série devient 3, 5, 7, 12, 20 : la valeur du milieu est 7. 9,4 est la moyenne.",
            },
            {
              q: "Quelle est la médiane de la série 2, 4, 6, 10 ?",
              options: ["4", "6", "5,5", "5"],
              answer: 3,
              why: "L'effectif est pair : on fait la moyenne des deux valeurs centrales, (4 + 6) ÷ 2 = 5.",
            },
            {
              q: "Une série a pour plus petite valeur 12 et pour plus grande valeur 31. Son étendue est :",
              options: ["43", "21,5", "19", "31"],
              answer: 2,
              why: "Étendue = 31 - 12 = 19.",
            },
            {
              q: "Dans une entreprise, on ajoute à la série des salaires un salaire très élevé. Quel indicateur change peu ?",
              options: ["La moyenne", "L'étendue", "La médiane"],
              answer: 2,
              why: "La médiane dépend du rang des valeurs, pas de leur grandeur : une valeur extrême la déplace très peu, alors qu'elle augmente fortement la moyenne et l'étendue.",
            },
          ],
          trap: "Chercher la médiane sans ranger les valeurs dans l'ordre croissant, ou prendre la valeur du milieu du tableau des effectifs au lieu de compter les effectifs cumulés.",
          method: "Commencez toujours par ranger la série et par écrire l'effectif total N. Si N est impair, la médiane est la valeur de rang (N + 1) ÷ 2 ; si N est pair, faites la moyenne des valeurs de rangs N ÷ 2 et N ÷ 2 + 1.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'calculer-probabilite',
          title: "Calculer une probabilité",
          minutes: 30,
          objectives: [
            "Utiliser le vocabulaire des probabilités : expérience aléatoire, issue, événement, événement contraire.",
            "Calculer une probabilité dans une situation d'équiprobabilité.",
            "Utiliser la probabilité de l'événement contraire.",
          ],
          course: [
            {
              heading: "Le vocabulaire des probabilités",
              paragraphs: [
                "Une expérience aléatoire est une expérience dont on connaît tous les résultats possibles, mais dont on ne peut pas prévoir le résultat à l'avance : lancer un dé, tirer une carte, faire tourner une roue. Chaque résultat possible s'appelle une issue. Pour un dé à six faces, les issues sont 1, 2, 3, 4, 5 et 6.",
                "Un événement est une condition réalisée par certaines issues. L'événement A « obtenir un nombre pair » est réalisé par les issues 2, 4 et 6. Un événement réalisé par toutes les issues est certain (« obtenir un nombre inférieur à 7 ») ; un événement réalisé par aucune issue est impossible (« obtenir 8 »).",
              ],
            },
            {
              heading: "Probabilité et équiprobabilité",
              paragraphs: [
                "La probabilité d'un événement est un nombre compris entre 0 et 1 qui mesure ses chances de se réaliser. Un événement impossible a une probabilité 0, un événement certain une probabilité 1. La somme des probabilités de toutes les issues vaut 1.",
                "Quand toutes les issues ont la même probabilité (dé équilibré, pièce équilibrée, tirage au hasard dans une urne de boules indiscernables au toucher), on parle d'équiprobabilité. La probabilité d'un événement s'obtient alors en divisant le nombre d'issues favorables par le nombre d'issues possibles. Avec un dé équilibré, P(A) = 3/6 = 1/2 pour l'événement « obtenir un nombre pair ».",
                "Une probabilité peut s'écrire sous forme de fraction, de décimal ou de pourcentage : 1/4 = 0,25 = 25 %.",
              ],
              box: { label: "Formule", text: "En situation d'équiprobabilité : P(A) = nombre d'issues favorables à A ÷ nombre d'issues possibles. Une probabilité est toujours comprise entre 0 et 1." },
            },
            {
              heading: "L'événement contraire",
              paragraphs: [
                "L'événement contraire de A, noté « non A », est réalisé exactement quand A ne l'est pas. Comme les probabilités de toutes les issues totalisent 1, on a P(non A) = 1 - P(A).",
                "Une urne contient 3 boules rouges, 5 bleues et 2 vertes, indiscernables au toucher. On tire une boule au hasard. P(rouge) = 3/10, donc P(non rouge) = 1 - 3/10 = 7/10. On retrouve ce résultat en comptant les 5 + 2 = 7 boules qui ne sont pas rouges.",
                "Deux événements qui ne peuvent pas se réaliser en même temps sont dits incompatibles : la probabilité que l'un ou l'autre se réalise est la somme de leurs probabilités. P(rouge ou verte) = 3/10 + 2/10 = 5/10 = 1/2.",
              ],
              box: { label: "Propriété", text: "Pour tout événement A : P(non A) = 1 - P(A). Si A et B sont incompatibles : P(A ou B) = P(A) + P(B)." },
            },
          ],
          keyPoints: [
            "Une issue est un résultat possible ; un événement est réalisé par une ou plusieurs issues.",
            "Une probabilité est un nombre entre 0 et 1 (impossible : 0, certain : 1).",
            "Équiprobabilité : P(A) = issues favorables ÷ issues possibles.",
            "P(non A) = 1 - P(A).",
            "Pour deux événements incompatibles, P(A ou B) = P(A) + P(B).",
            "Le hasard n'a pas de mémoire : chaque lancer est indépendant des précédents.",
          ],
          example: {
            statement: "On tire une carte au hasard dans un jeu de 32 cartes (4 couleurs : cœur, carreau, pique, trèfle ; 8 cartes par couleur, dont un roi). Calculer la probabilité de tirer un roi, de tirer un cœur, puis de ne pas tirer un cœur.",
            solution: [
              "Le tirage se fait au hasard : les 32 issues sont équiprobables.",
              "Il y a 4 rois, donc P(roi) = 4/32 = 1/8 = 0,125.",
              "Il y a 8 cœurs, donc P(cœur) = 8/32 = 1/4 = 0,25.",
              "« Ne pas tirer un cœur » est l'événement contraire : P(non cœur) = 1 - 1/4 = 3/4 = 0,75.",
              "Les probabilités sont 1/8, 1/4 et 3/4.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On lance un dé équilibré à six faces numérotées de 1 à 6. Calculer la probabilité des événements : A « obtenir 5 » ; B « obtenir un nombre supérieur ou égal à 3 » ; C « obtenir un multiple de 3 ».",
              hint: "Écrivez pour chaque événement la liste des issues qui le réalisent, puis divisez leur nombre par 6.",
              solution: [
                "Le dé est équilibré : les 6 issues sont équiprobables.",
                "A est réalisé par une seule issue (5) : P(A) = 1/6.",
                "B est réalisé par 3, 4, 5 et 6 : P(B) = 4/6 = 2/3.",
                "C est réalisé par 3 et 6 : P(C) = 2/6 = 1/3.",
              ],
            },
            {
              level: 2,
              statement: "Un sac contient 20 jetons indiscernables au toucher : 8 rouges, 7 bleus et les autres jaunes. On tire un jeton au hasard. a) Combien y a-t-il de jetons jaunes ? b) Calculer la probabilité de tirer un jeton rouge, puis un jeton jaune. c) Calculer la probabilité de ne pas tirer un jeton bleu.",
              hint: "Pour c), utilisez l'événement contraire : P(non bleu) = 1 - P(bleu).",
              solution: [
                "a) Il y a 20 - 8 - 7 = 5 jetons jaunes.",
                "b) P(rouge) = 8/20 = 2/5 = 0,4. P(jaune) = 5/20 = 1/4 = 0,25.",
                "c) P(bleu) = 7/20, donc P(non bleu) = 1 - 7/20 = 13/20 = 0,65.",
                "Contrôle : les jetons non bleus sont les 8 rouges et les 5 jaunes, soit 13 jetons sur 20.",
              ],
            },
            {
              level: 3,
              statement: "Une roue de loterie est partagée en 12 secteurs identiques numérotés de 1 à 12. On fait tourner la roue, qui s'arrête au hasard sur un secteur. Un joueur gagne si le numéro obtenu est un nombre premier. 1) Donner la liste des numéros gagnants. 2) Calculer la probabilité de gagner. 3) Calculer la probabilité de perdre. 4) Léo propose une autre règle : gagner si le numéro est pair. Affirme-t-il à raison qu'il aurait alors plus de chances de gagner ? Justifier.",
              hint: "Un nombre premier a exactement deux diviseurs, 1 et lui-même : 1 n'est donc pas premier. Pour la question 4, comparez deux probabilités.",
              solution: [
                "1) Les nombres premiers entre 1 et 12 sont 2, 3, 5, 7 et 11 : il y a 5 numéros gagnants.",
                "2) Les 12 secteurs sont identiques, donc les issues sont équiprobables : P(gagner) = 5/12.",
                "3) P(perdre) = 1 - 5/12 = 7/12.",
                "4) Les numéros pairs sont 2, 4, 6, 8, 10 et 12 : P(pair) = 6/12 = 1/2.",
                "Or 1/2 = 6/12 > 5/12 : Léo a raison, il aurait un peu plus de chances de gagner avec sa règle.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les probabilités et leurs idées reçues.",
            statements: [
              { text: "Une probabilité peut valoir 1,2.", true: false, why: "Une probabilité est toujours comprise entre 0 et 1." },
              { text: "La probabilité d'un événement impossible est 0.", true: true, why: "Aucune issue ne le réalise." },
              { text: "Si P(A) = 0,3, alors P(non A) = 0,7.", true: true, why: "P(non A) = 1 - 0,3 = 0,7." },
              { text: "Après trois « pile » de suite, « face » a plus de chances de sortir au lancer suivant.", true: false, why: "La pièce n'a pas de mémoire : la probabilité de « face » reste 1/2." },
              { text: "Avec un dé équilibré, obtenir 6 est plus rare qu'obtenir 2.", true: false, why: "Les six faces sont équiprobables : chacune a une probabilité 1/6." },
              { text: "La somme des probabilités de toutes les issues vaut 1.", true: true, why: "Il est certain que l'une des issues se réalise." },
              { text: "Pour un dé truqué, on peut calculer P = issues favorables ÷ issues possibles.", true: false, why: "Cette formule exige l'équiprobabilité, que le dé truqué ne respecte pas." },
            ],
          },
          quiz: [
            {
              q: "On lance un dé équilibré à six faces. Quelle est la probabilité d'obtenir un nombre strictement inférieur à 3 ?",
              options: ["1/2", "1/3", "3/6", "1/6"],
              answer: 1,
              why: "Deux issues conviennent (1 et 2) sur six : 2/6 = 1/3.",
            },
            {
              q: "P(A) = 0,35. Que vaut P(non A) ?",
              options: ["0,35", "0,75", "0,65", "1,35"],
              answer: 2,
              why: "P(non A) = 1 - 0,35 = 0,65.",
            },
            {
              q: "Une urne contient 4 boules vertes et 6 boules noires. Quelle est la probabilité de tirer une boule verte ?",
              options: ["4/6", "1/4", "4", "2/5"],
              answer: 3,
              why: "Il y a 4 boules vertes sur 10 boules en tout : 4/10 = 2/5.",
            },
            {
              q: "Quelle valeur ne peut pas être une probabilité ?",
              options: ["0", "4/3", "1", "0,99"],
              answer: 1,
              why: "4/3 est supérieur à 1, alors qu'une probabilité est comprise entre 0 et 1.",
            },
            {
              q: "Un événement certain a pour probabilité :",
              options: ["1", "100", "0", "0,5"],
              answer: 0,
              why: "Un événement certain est réalisé par toutes les issues : sa probabilité vaut 1, soit 100 %.",
            },
          ],
          trap: "Croire que le hasard « se rattrape » : après plusieurs « pile », la pièce n'a aucune mémoire et la probabilité de « face » reste 1/2. Appliquer aussi la formule issues favorables ÷ issues possibles quand les issues ne sont pas équiprobables.",
          method: "Écrivez d'abord la liste de toutes les issues et vérifiez qu'elles ont la même chance de se produire. Contrôlez ensuite votre résultat : une probabilité est toujours comprise entre 0 et 1.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'experiences-deux-epreuves',
          title: "Expériences à deux épreuves, fréquences et probabilités",
          minutes: 35,
          objectives: [
            "Représenter une expérience aléatoire à deux épreuves par un arbre ou un tableau à double entrée.",
            "Calculer une probabilité dans une expérience à deux épreuves.",
            "Faire le lien entre fréquence observée et probabilité.",
          ],
          course: [
            {
              heading: "Deux épreuves successives",
              paragraphs: [
                "Une expérience à deux épreuves enchaîne deux expériences aléatoires : lancer deux fois une pièce, lancer deux dés, tirer deux boules d'une urne. Une issue est alors un couple de résultats, dans l'ordre.",
                "On lance deux fois une pièce équilibrée. Un arbre des possibles permet de lister les issues : deux branches pour le premier lancer (P et F), puis deux branches au bout de chacune pour le second. On obtient 4 issues équiprobables : PP, PF, FP et FF. La probabilité d'obtenir une fois pile et une fois face est donc 2/4 = 1/2 (issues PF et FP), et non 1/3 : PF et FP sont deux issues différentes.",
              ],
            },
            {
              heading: "Le tableau à double entrée",
              paragraphs: [
                "Quand chaque épreuve a beaucoup d'issues, un tableau est plus pratique qu'un arbre. Pour deux dés équilibrés à six faces, on écrit les résultats du premier dé en ligne et ceux du second en colonne : le tableau contient 6 × 6 = 36 cases, soit 36 issues équiprobables.",
                "Pour l'événement « la somme vaut 7 », on compte les cases (1 ; 6), (2 ; 5), (3 ; 4), (4 ; 3), (5 ; 2) et (6 ; 1) : P(somme = 7) = 6/36 = 1/6. Pour l'événement « obtenir un double », on compte les 6 cases de la diagonale : P(double) = 6/36 = 1/6.",
              ],
            },
            {
              heading: "Tirages avec ou sans remise",
              paragraphs: [
                "Une urne contient deux boules rouges, notées R1 et R2, et une boule bleue B. On tire une boule, puis une seconde. Avec remise (on replace la première boule), il y a 3 × 3 = 9 issues équiprobables, dont 4 donnent deux rouges (R1R1, R1R2, R2R1, R2R2) : P(deux rouges) = 4/9.",
                "Sans remise, la seconde boule est tirée parmi les 2 restantes : il y a 3 × 2 = 6 issues (R1R2, R1B, R2R1, R2B, BR1, BR2), dont 2 donnent deux rouges : P(deux rouges) = 2/6 = 1/3. Le résultat change : il faut toujours lire si le tirage se fait avec ou sans remise.",
                "On retrouve ces résultats en écrivant les probabilités sur les branches d'un arbre et en multipliant le long du chemin : avec remise, 2/3 × 2/3 = 4/9 ; sans remise, 2/3 × 1/2 = 1/3.",
              ],
              box: { label: "Propriété", text: "Dans un arbre pondéré, la probabilité d'une issue est le produit des probabilités inscrites sur les branches du chemin qui y mène. La probabilité d'un événement est la somme des probabilités des issues qui le réalisent." },
            },
            {
              heading: "Fréquence et probabilité",
              paragraphs: [
                "Si l'on répète une expérience aléatoire, la fréquence d'une issue est le nombre de fois où elle s'est produite divisé par le nombre de répétitions. Sur peu d'essais, cette fréquence varie beaucoup : en lançant 10 fois une pièce, on peut très bien obtenir 7 fois pile, soit une fréquence de 0,7.",
                "Lorsque le nombre de répétitions devient très grand, la fréquence se stabilise autour de la probabilité : c'est ce qu'on appelle la loi des grands nombres. On peut l'observer en simulant des milliers de lancers avec un tableur ou un programme Scratch.",
                "Cette propriété permet d'estimer une probabilité qu'on ne peut pas calculer, par exemple la probabilité qu'une punaise lancée retombe pointe en l'air : on la lance un grand nombre de fois et on prend la fréquence observée comme estimation.",
              ],
              box: { label: "À retenir", text: "Sur un grand nombre de répétitions, la fréquence observée d'une issue se rapproche de sa probabilité. Sur un petit nombre d'essais, l'écart peut être important sans que l'expérience soit truquée." },
            },
          ],
          keyPoints: [
            "Une issue d'une expérience à deux épreuves est un couple de résultats, dans l'ordre.",
            "Arbre ou tableau à double entrée : on liste toutes les issues avant de compter.",
            "Deux dés : 36 issues équiprobables ; P(somme = 7) = 6/36 = 1/6.",
            "Avec ou sans remise : le nombre d'issues et les probabilités changent.",
            "Dans un arbre pondéré, on multiplie le long d'un chemin et on additionne les chemins.",
            "Sur un grand nombre d'essais, la fréquence se rapproche de la probabilité.",
          ],
          example: {
            statement: "Un sac contient trois jetons numérotés 1, 2 et 3. On tire un jeton au hasard, on note son numéro, on le remet dans le sac, puis on tire un second jeton. On forme un nombre à deux chiffres : le premier numéro donne le chiffre des dizaines, le second celui des unités. Calculer la probabilité que le nombre soit pair, puis qu'il soit supérieur à 20.",
            solution: [
              "Le tirage se fait avec remise : chaque tirage a 3 issues, donc il y a 3 × 3 = 9 issues équiprobables.",
              "Les nombres possibles sont : 11, 12, 13, 21, 22, 23, 31, 32, 33.",
              "Nombres pairs : 12, 22 et 32 (le second jeton est le 2). P(pair) = 3/9 = 1/3.",
              "Nombres supérieurs à 20 : 21, 22, 23, 31, 32 et 33 (le premier jeton est 2 ou 3). P(supérieur à 20) = 6/9 = 2/3.",
              "Les probabilités sont 1/3 et 2/3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On lance deux dés équilibrés à six faces et on additionne les deux résultats. a) Combien y a-t-il d'issues possibles ? b) Quelle est la probabilité d'obtenir une somme égale à 12 ? c) Quelle est la probabilité d'obtenir une somme égale à 8 ?",
              hint: "Construisez un tableau à double entrée de 6 lignes et 6 colonnes, et écrivez la somme dans chaque case.",
              solution: [
                "a) Chaque dé a 6 issues : il y a 6 × 6 = 36 issues équiprobables.",
                "b) Seule la case (6 ; 6) donne 12 : P(somme = 12) = 1/36.",
                "c) Les cases (2 ; 6), (3 ; 5), (4 ; 4), (5 ; 3) et (6 ; 2) donnent 8 : P(somme = 8) = 5/36.",
              ],
            },
            {
              level: 2,
              statement: "Une urne contient 3 boules rouges et 2 boules vertes, indiscernables au toucher. On tire une boule au hasard, on note sa couleur, on la remet dans l'urne, puis on tire une seconde boule. a) Construire un arbre pondéré de l'expérience. b) Calculer la probabilité d'obtenir deux boules rouges. c) Calculer la probabilité d'obtenir deux boules de la même couleur. d) Calculer la probabilité d'obtenir au moins une boule verte.",
              hint: "À chaque tirage, P(rouge) = 3/5 et P(verte) = 2/5, puisque la boule est remise. Pour d), pensez à l'événement contraire de « au moins une verte ».",
              solution: [
                "a) Premier niveau : R avec 3/5, V avec 2/5. Au bout de chaque branche, second niveau identique (tirage avec remise) : R avec 3/5, V avec 2/5. On obtient 4 chemins : RR, RV, VR, VV.",
                "b) P(RR) = 3/5 × 3/5 = 9/25.",
                "c) P(VV) = 2/5 × 2/5 = 4/25. P(même couleur) = P(RR) + P(VV) = 9/25 + 4/25 = 13/25.",
                "d) Le contraire de « au moins une verte » est « deux rouges ». P(au moins une verte) = 1 - 9/25 = 16/25.",
                "Contrôle : P(RV) + P(VR) + P(VV) = 6/25 + 6/25 + 4/25 = 16/25.",
              ],
            },
            {
              level: 3,
              statement: "1) Nina lance une punaise 500 fois : elle retombe 310 fois pointe en l'air. a) Calculer la fréquence de l'issue « pointe en l'air ». b) Peut-on calculer exactement la probabilité de cette issue ? Que peut-on proposer ? 2) Tom lance 60 fois un dé à six faces et obtient 14 fois le 6. Il affirme : « Le dé est truqué, car j'aurais dû obtenir exactement 10 fois le 6. » Que pensez-vous de son raisonnement ?",
              hint: "Une punaise n'a pas deux faces équivalentes : l'équiprobabilité ne s'applique pas. Pour Tom, demandez-vous si 60 lancers suffisent pour que la fréquence soit proche de la probabilité.",
              solution: [
                "1) a) Fréquence : 310 ÷ 500 = 0,62.",
                "1) b) Les deux positions de la punaise ne sont pas équiprobables, on ne peut pas utiliser la formule issues favorables ÷ issues possibles. Comme 500 lancers est un nombre assez important, on peut estimer la probabilité à environ 0,62.",
                "2) Si le dé est équilibré, P(6) = 1/6 : sur 60 lancers, on s'attend en moyenne à 60 × 1/6 = 10 fois le 6, mais pas exactement 10.",
                "La fréquence observée est 14 ÷ 60 ≈ 0,23, contre 1/6 ≈ 0,17. Sur seulement 60 lancers, un tel écart est courant : la fréquence fluctue beaucoup sur un petit nombre d'essais.",
                "Le raisonnement de Tom n'est pas valable : ces résultats ne prouvent pas que le dé est truqué. Il faudrait un très grand nombre de lancers pour pouvoir en juger.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul d'une probabilité avec un arbre.",
            items: [
              "Identifier les deux épreuves et leurs issues",
              "Préciser si le tirage se fait avec ou sans remise",
              "Tracer les branches de la première épreuve",
              "Ajouter au bout de chacune les branches de la seconde épreuve",
              "Écrire la probabilité sur chaque branche",
              "Repérer les chemins qui réalisent l'événement",
              "Multiplier le long de chaque chemin, puis additionner les chemins",
            ],
          },
          quiz: [
            {
              q: "On lance deux fois une pièce équilibrée. Combien y a-t-il d'issues ?",
              options: ["2", "4", "3", "8"],
              answer: 1,
              why: "PP, PF, FP et FF : 2 × 2 = 4 issues, car PF et FP sont différentes.",
            },
            {
              q: "On lance deux dés équilibrés à six faces. Quelle est la probabilité d'obtenir un double ?",
              options: ["1/36", "1/12", "2/6", "1/6"],
              answer: 3,
              why: "Il y a 6 doubles parmi les 36 issues : 6/36 = 1/6.",
            },
            {
              q: "Une urne contient une boule rouge et une boule bleue. On fait deux tirages avec remise. Quelle est la probabilité d'obtenir deux rouges ?",
              options: ["1/4", "1/2", "1/3", "0"],
              answer: 0,
              why: "Il y a 4 issues équiprobables (RR, RB, BR, BB) et une seule convient : 1/2 × 1/2 = 1/4.",
            },
            {
              q: "Plus on répète une expérience aléatoire, plus la fréquence d'une issue :",
              options: ["finit par valoir exactement 1", "s'éloigne de plus en plus de sa probabilité", "se rapproche de sa probabilité"],
              answer: 2,
              why: "C'est la loi des grands nombres : la fréquence se stabilise autour de la probabilité.",
            },
            {
              q: "Une urne contient 2 boules rouges et 1 boule bleue. On tire deux boules successivement sans remise. Quelle est la probabilité d'obtenir deux rouges ?",
              options: ["4/9", "1/3", "2/3", "1/2"],
              answer: 1,
              why: "2/3 pour la première rouge, puis 1/2 pour la seconde (il reste 1 rouge sur 2 boules) : 2/3 × 1/2 = 1/3.",
            },
          ],
          trap: "Oublier l'ordre des issues (compter PF et FP comme une seule issue, ce qui donne 1/3 au lieu de 1/2), ou traiter un tirage sans remise comme un tirage avec remise.",
          method: "Avant de calculer, dessinez l'arbre ou le tableau complet et comptez les issues : leur total doit correspondre au produit des nombres d'issues de chaque épreuve (par exemple 6 × 6 = 36 pour deux dés). Vérifiez que les probabilités de toutes les issues totalisent 1.",
        },
      ],
    },
  ],
}
