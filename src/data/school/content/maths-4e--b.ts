import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-4e',
  chapters: [
    /* ================================================================== */
    /* CALCUL LITTÉRAL ET ÉQUATIONS                                         */
    /* ================================================================== */
    {
      id: 'calcul-litteral-equations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'developper',
          title: 'Développer : simple et double distributivité',
          minutes: 30,
          objectives: [
            "Développer et réduire une expression littérale avec la simple distributivité.",
            "Développer et réduire un produit de deux sommes avec la double distributivité.",
            "Vérifier un développement en remplaçant la lettre par un nombre.",
          ],
          course: [
            {
              heading: "Développer, c'est transformer un produit en somme",
              paragraphs: [
                "Une expression littérale est un calcul dans lequel une ou plusieurs lettres remplacent des nombres. Dans 3(x + 2), la lettre x peut prendre n'importe quelle valeur. Cette expression est un produit : le nombre 3 multiplie toute la parenthèse (x + 2). On rappelle que l'on peut supprimer le signe × devant une lettre ou une parenthèse : 3x signifie 3 × x et 3(x + 2) signifie 3 × (x + 2).",
                "Développer une expression, c'est la transformer en une somme (ou une différence) de termes. On utilise pour cela la distributivité de la multiplication : le facteur placé devant la parenthèse est « distribué » à chacun des termes qui sont à l'intérieur. Ainsi 3(x + 2) = 3 × x + 3 × 2 = 3x + 6.",
                "Une image aide à le comprendre : un rectangle de largeur 3 et de longueur x + 2 peut être coupé en deux rectangles, l'un de dimensions 3 et x, l'autre de dimensions 3 et 2. L'aire totale vaut donc 3 × x + 3 × 2. La distributivité sert aussi en calcul mental : 7 × 102 = 7 × 100 + 7 × 2 = 700 + 14 = 714.",
              ],
              box: { label: "Propriété", text: "Simple distributivité : pour tous nombres k, a et b, k(a + b) = ka + kb et k(a - b) = ka - kb." },
            },
            {
              heading: "Attention aux signes, puis réduire",
              paragraphs: [
                "Quand le facteur est négatif, on applique la règle des signes à chaque produit. Par exemple -3(x - 4) = (-3) × x + (-3) × (-4) = -3x + 12. Un signe moins placé devant une parenthèse revient à multiplier par -1 : il change le signe de chaque terme. Ainsi -(2x - 5) = -2x + 5.",
                "Après avoir développé, on réduit l'expression : on regroupe les termes de même nature, d'un côté les termes en x², de l'autre les termes en x, enfin les nombres seuls. Par exemple 5x + 3 - 2x + 7 = 3x + 10. On ne peut pas additionner un terme en x et un nombre seul : 3x + 10 ne se simplifie pas davantage.",
                "N'oubliez pas que x × x = x² (on lit « x au carré ») et que 2x × 3x = 6x². Par exemple x(x + 5) = x × x + x × 5 = x² + 5x. Le terme x² et le terme 5x ne sont pas de même nature : ils ne se regroupent pas.",
              ],
              box: { label: "À retenir", text: "Un signe moins devant une parenthèse change le signe de chaque terme : -(a + b) = -a - b et -(a - b) = -a + b. Réduire, c'est regrouper les x² entre eux, les x entre eux et les nombres entre eux." },
            },
            {
              heading: "La double distributivité",
              paragraphs: [
                "Pour développer le produit de deux sommes, comme (a + b)(c + d), on multiplie chaque terme de la première parenthèse par chaque terme de la seconde. On obtient quatre produits : (a + b)(c + d) = ac + ad + bc + bd. L'image du rectangle reste valable : un rectangle de côtés a + b et c + d se découpe en quatre petits rectangles d'aires ac, ad, bc et bd.",
                "Exemple : (x + 3)(x + 5) = x × x + x × 5 + 3 × x + 3 × 5 = x² + 5x + 3x + 15 = x² + 8x + 15. On développe d'abord en écrivant les quatre produits, puis on réduit.",
                "Avec des signes moins, on garde le signe avec le terme qui le suit. Exemple : (2x - 1)(x + 4) = 2x × x + 2x × 4 + (-1) × x + (-1) × 4 = 2x² + 8x - x - 4 = 2x² + 7x - 4.",
              ],
              box: { label: "Propriété", text: "Double distributivité : pour tous nombres a, b, c et d, (a + b)(c + d) = ac + ad + bc + bd." },
            },
            {
              heading: "Vérifier un développement",
              paragraphs: [
                "Une erreur de signe arrive vite. Pour la détecter, remplacez x par un nombre simple (par exemple 1 ou 2) dans l'expression de départ et dans le résultat : les deux calculs doivent donner la même valeur. Pour (2x - 1)(x + 4) avec x = 1 : (2 - 1) × (1 + 4) = 1 × 5 = 5. Et 2 × 1² + 7 × 1 - 4 = 2 + 7 - 4 = 5. Les résultats sont égaux, le développement est probablement juste.",
                "Si les deux valeurs sont différentes, le développement est faux à coup sûr. Si elles sont égales, ce n'est pas une preuve absolue, mais c'est un très bon contrôle. Évitez x = 0, qui fait disparaître beaucoup de termes et cache souvent les erreurs.",
              ],
            },
          ],
          keyPoints: [
            "Développer, c'est transformer un produit en somme.",
            "Simple distributivité : k(a + b) = ka + kb et k(a - b) = ka - kb.",
            "Double distributivité : (a + b)(c + d) = ac + ad + bc + bd, soit quatre produits.",
            "Un signe moins devant une parenthèse change le signe de chaque terme de la parenthèse.",
            "Réduire : regrouper les termes en x², les termes en x et les nombres seuls ; x × x = x².",
            "Pour vérifier, remplacez x par 1 ou 2 dans l'expression de départ et dans le résultat.",
          ],
          example: {
            statement: "Développez et réduisez A = 3(2x - 5) - 2(x - 4) et B = (x - 2)(3x + 1).",
            solution: [
              "Pour A, on distribue 3 dans la première parenthèse : 3 × 2x - 3 × 5 = 6x - 15.",
              "On distribue -2 dans la seconde parenthèse : (-2) × x + (-2) × (-4) = -2x + 8.",
              "A = 6x - 15 - 2x + 8. On regroupe : A = 6x - 2x - 15 + 8 = 4x - 7.",
              "Pour B, on écrit les quatre produits : B = x × 3x + x × 1 + (-2) × 3x + (-2) × 1 = 3x² + x - 6x - 2.",
              "On réduit : B = 3x² - 5x - 2.",
              "Vérification avec x = 1 : (1 - 2)(3 + 1) = -4 et 3 - 5 - 2 = -4. Résultats : A = 4x - 7 et B = 3x² - 5x - 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Développez et réduisez : a) 5(x + 3) ; b) -4(2x - 7) ; c) x(x + 6) ; d) 2x(3x - 1).",
              hint: "Multipliez le facteur placé devant la parenthèse par chacun des termes de la parenthèse, en faisant attention aux signes.",
              solution: [
                "a) 5(x + 3) = 5 × x + 5 × 3 = 5x + 15.",
                "b) -4(2x - 7) = (-4) × 2x + (-4) × (-7) = -8x + 28.",
                "c) x(x + 6) = x × x + x × 6 = x² + 6x.",
                "d) 2x(3x - 1) = 2x × 3x - 2x × 1 = 6x² - 2x.",
              ],
            },
            {
              level: 2,
              statement: "Développez et réduisez : C = (x + 4)(x + 7) ; D = (2x - 3)(x + 5) ; E = (3 - x)(2x - 1). Vérifiez chaque résultat avec x = 1.",
              hint: "Écrivez les quatre produits avant de réduire. Le signe placé devant un terme reste attaché à ce terme.",
              solution: [
                "C = x × x + x × 7 + 4 × x + 4 × 7 = x² + 7x + 4x + 28 = x² + 11x + 28. Vérification : 5 × 8 = 40 et 1 + 11 + 28 = 40.",
                "D = 2x × x + 2x × 5 + (-3) × x + (-3) × 5 = 2x² + 10x - 3x - 15 = 2x² + 7x - 15. Vérification : (-1) × 6 = -6 et 2 + 7 - 15 = -6.",
                "E = 3 × 2x + 3 × (-1) + (-x) × 2x + (-x) × (-1) = 6x - 3 - 2x² + x = -2x² + 7x - 3. Vérification : 2 × 1 = 2 et -2 + 7 - 3 = 2.",
                "Résultats : C = x² + 11x + 28 ; D = 2x² + 7x - 15 ; E = -2x² + 7x - 3.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Développez et réduisez (x + 2)(x + 6), puis (x + 4)(x + 4). b) Déduisez-en que, pour tout nombre x, F = (x + 2)(x + 6) - (x + 4)(x + 4) est égal à -4. c) Sans calculatrice, calculez 1 002 × 1 006 - 1 004 × 1 004.",
              hint: "Pour b, placez le second développement entre parenthèses, précédé du signe moins, puis changez le signe de chacun de ses termes. Pour c, cherchez quelle valeur de x il faut choisir.",
              solution: [
                "a) (x + 2)(x + 6) = x² + 6x + 2x + 12 = x² + 8x + 12. Et (x + 4)(x + 4) = x² + 4x + 4x + 16 = x² + 8x + 16.",
                "b) F = (x² + 8x + 12) - (x² + 8x + 16) = x² + 8x + 12 - x² - 8x - 16.",
                "Les x² s'annulent, les 8x aussi, et il reste 12 - 16 = -4. Donc F = -4, quelle que soit la valeur de x.",
                "c) Avec x = 1 000 : x + 2 = 1 002, x + 6 = 1 006 et x + 4 = 1 004. Le calcul demandé est donc F pour x = 1 000.",
                "Résultat : 1 002 × 1 006 - 1 004 × 1 004 = -4.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression à sa forme développée et réduite.",
            pairs: [
              { left: "3(x + 2)", right: "3x + 6" },
              { left: "-2(x - 5)", right: "-2x + 10" },
              { left: "x(x + 4)", right: "x² + 4x" },
              { left: "(x + 1)(x + 2)", right: "x² + 3x + 2" },
              { left: "(x - 3)(x + 3)", right: "x² - 9" },
              { left: "(2x + 1)(x - 1)", right: "2x² - x - 1" },
            ],
          },
          quiz: [
            { q: "Quelle est la forme développée de 4(x - 3) ?", options: ["4x - 3", "4x - 12", "4x + 12", "x - 12"], answer: 1, why: "On multiplie 4 par x et 4 par 3 : 4(x - 3) = 4x - 12." },
            { q: "Développez et réduisez -2(x + 5).", options: ["-2x + 10", "-2x + 5", "-2x - 10", "2x - 10"], answer: 2, why: "(-2) × x = -2x et (-2) × 5 = -10, donc -2(x + 5) = -2x - 10." },
            { q: "Quelle expression est égale à (x + 2)(x + 3) ?", options: ["x² + 5x + 6", "x² + 6", "x² + 6x + 5", "2x + 5"], answer: 0, why: "On obtient x² + 3x + 2x + 6, soit x² + 5x + 6." },
            { q: "Que vaut x × x ?", options: ["2x", "x²", "x + x", "2x²"], answer: 1, why: "Le produit d'un nombre par lui-même est son carré : x × x = x². En revanche x + x = 2x." },
            { q: "En développant (2x - 1)(x + 4), combien obtient-on de produits avant de réduire ?", options: ["2", "3", "4", "8"], answer: 2, why: "Chacun des deux termes de la première parenthèse multiplie chacun des deux termes de la seconde : 2 × 2 = 4 produits." },
          ],
          trap: "Oublier de distribuer le facteur au second terme, comme écrire 4(x + 3) = 4x + 3, ou oublier de changer tous les signes après un signe moins placé devant une parenthèse.",
          method: "Écrivez toujours tous les produits avant de réduire, puis contrôlez votre résultat en remplaçant x par 1 ou 2 dans l'expression de départ et dans la forme développée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'factoriser-prouver',
          title: 'Factoriser et prouver avec le calcul littéral',
          minutes: 30,
          objectives: [
            "Factoriser une expression littérale dans des cas simples, en repérant un facteur commun.",
            "Utiliser le calcul littéral pour prouver un résultat général.",
            "Utiliser un contre-exemple pour montrer qu'une affirmation est fausse.",
          ],
          course: [
            {
              heading: "Factoriser, c'est transformer une somme en produit",
              paragraphs: [
                "Factoriser est l'opération inverse de développer : on transforme une somme (ou une différence) en un produit. On lit la distributivité de droite à gauche : ka + kb = k(a + b) et ka - kb = k(a - b). Le nombre ou l'expression k, présent dans chaque terme, s'appelle le facteur commun.",
                "Exemple : 5x + 15. On écrit chaque terme comme un produit qui fait apparaître le même facteur : 5x + 15 = 5 × x + 5 × 3. Le facteur commun est 5, donc 5x + 15 = 5(x + 3). De même 6x - 9 = 3 × 2x - 3 × 3 = 3(2x - 3).",
                "Le facteur commun peut contenir la lettre : x² + 4x = x × x + x × 4 = x(x + 4). Et 6x² - 9x = 3x × 2x - 3x × 3 = 3x(2x - 3). Le facteur commun peut même être une parenthèse entière : 4(x + 1) + x(x + 1) = (x + 1)(4 + x).",
              ],
              box: { label: "Propriété", text: "Pour factoriser, on repère un facteur commun k à tous les termes, puis on utilise ka + kb = k(a + b) ou ka - kb = k(a - b)." },
            },
            {
              heading: "Ne pas oublier le 1, puis vérifier",
              paragraphs: [
                "Quand un terme est égal au facteur commun lui-même, il reste 1 dans la parenthèse : 7x - 7 = 7 × x - 7 × 1 = 7(x - 1). Écrire 7(x) ou 7x serait faux. De même x² + x = x × x + x × 1 = x(x + 1).",
                "Pour vérifier une factorisation, il suffit de redévelopper le résultat : on doit retrouver l'expression de départ. Par exemple 3x(2x - 3) = 6x² - 9x : la factorisation est juste. Cette vérification prend quelques secondes et évite beaucoup d'erreurs.",
              ],
              box: { label: "À retenir", text: "Factoriser et développer sont deux opérations inverses. Une factorisation se vérifie en développant le résultat." },
            },
            {
              heading: "Prouver un résultat général",
              paragraphs: [
                "Vérifier une propriété sur quelques exemples ne suffit pas à la prouver : il peut exister un nombre, que l'on n'a pas essayé, pour lequel elle est fausse. Pour prouver qu'une propriété est vraie pour tous les nombres, on utilise une lettre qui représente n'importe quel nombre, puis on calcule avec cette lettre.",
                "Exemple : la somme de trois nombres entiers consécutifs est-elle toujours un multiple de 3 ? On teste : 4 + 5 + 6 = 15 et 10 + 11 + 12 = 33, deux multiples de 3. Pour le prouver, on appelle n le premier nombre. Les suivants sont n + 1 et n + 2. Leur somme vaut n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1). C'est 3 fois un nombre entier : c'est bien un multiple de 3, quel que soit n.",
                "On utilise souvent ces écritures : un nombre pair s'écrit 2n et un nombre impair s'écrit 2n + 1, où n est un nombre entier. Par exemple, la somme de deux nombres pairs 2n et 2p vaut 2n + 2p = 2(n + p) : c'est un nombre pair.",
              ],
              box: { label: "Repère", text: "Des exemples permettent de faire une conjecture, mais pas de la prouver. Pour prouver une propriété générale, on calcule avec des lettres. Un nombre pair s'écrit 2n, un nombre impair 2n + 1 (n entier)." },
            },
            {
              heading: "Le contre-exemple",
              paragraphs: [
                "Pour montrer qu'une affirmation est fausse, un seul exemple qui ne la vérifie pas suffit : on l'appelle un contre-exemple. Affirmation : « le double d'un nombre est toujours plus grand que ce nombre ». Avec -3, le double vaut -6, qui est plus petit que -3. L'affirmation est donc fausse.",
                "Retenez la différence : pour prouver qu'une propriété est vraie, il faut un raisonnement valable pour tous les nombres ; pour prouver qu'elle est fausse, un seul contre-exemple suffit.",
              ],
            },
          ],
          keyPoints: [
            "Factoriser, c'est transformer une somme en produit : ka + kb = k(a + b) et ka - kb = k(a - b).",
            "Quand un terme est égal au facteur commun, il reste 1 : 7x - 7 = 7(x - 1).",
            "On vérifie une factorisation en développant le résultat.",
            "Des exemples ne prouvent pas une propriété générale : on la prouve en calculant avec des lettres.",
            "Un nombre pair s'écrit 2n, un nombre impair 2n + 1, avec n entier.",
            "Un seul contre-exemple suffit pour prouver qu'une affirmation est fausse.",
          ],
          example: {
            statement: "Voici un programme de calcul : choisir un nombre, lui ajouter 4, multiplier le résultat par 3, puis soustraire 12. Prouvez que le résultat est toujours le triple du nombre choisi.",
            solution: [
              "On teste d'abord avec 5 : 5 + 4 = 9, puis 9 × 3 = 27, puis 27 - 12 = 15, et 15 est bien le triple de 5. Ce test ne prouve rien pour les autres nombres.",
              "On appelle x le nombre choisi. Après avoir ajouté 4, on obtient x + 4.",
              "Après la multiplication par 3 : 3(x + 4). Après la soustraction : 3(x + 4) - 12.",
              "On développe : 3(x + 4) - 12 = 3x + 12 - 12 = 3x.",
              "Le résultat est 3x, c'est-à-dire le triple du nombre choisi, quel que soit ce nombre : la propriété est prouvée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Factorisez : a) 4x + 12 ; b) 15x - 10 ; c) x² - 9x ; d) 8x² + 2x. Vérifiez chaque résultat en développant.",
              hint: "Écrivez chaque terme comme un produit faisant apparaître le même facteur. Pour d, le facteur commun contient à la fois un nombre et la lettre x.",
              solution: [
                "a) 4x + 12 = 4 × x + 4 × 3 = 4(x + 3). Vérification : 4(x + 3) = 4x + 12.",
                "b) 15x - 10 = 5 × 3x - 5 × 2 = 5(3x - 2). Vérification : 5(3x - 2) = 15x - 10.",
                "c) x² - 9x = x × x - x × 9 = x(x - 9). Vérification : x(x - 9) = x² - 9x.",
                "d) 8x² + 2x = 2x × 4x + 2x × 1 = 2x(4x + 1). Vérification : 2x(4x + 1) = 8x² + 2x.",
              ],
            },
            {
              level: 2,
              statement: "a) Lina affirme : « La somme de deux nombres impairs consécutifs est toujours un multiple de 4. » Testez sur deux exemples, puis prouvez son affirmation. b) Hugo affirme : « La somme de trois nombres entiers consécutifs est toujours un multiple de 6. » A-t-il raison ?",
              hint: "Deux nombres impairs consécutifs peuvent s'écrire 2n + 1 et 2n + 3. Pour b, essayez plusieurs exemples : un seul qui ne marche pas suffit.",
              solution: [
                "a) Exemples : 3 + 5 = 8 = 4 × 2 et 7 + 9 = 16 = 4 × 4. La conjecture semble vraie.",
                "Preuve : soit n un nombre entier. Deux nombres impairs consécutifs s'écrivent 2n + 1 et 2n + 3. Leur somme vaut (2n + 1) + (2n + 3) = 4n + 4 = 4(n + 1).",
                "C'est 4 fois le nombre entier n + 1 : la somme est toujours un multiple de 4. Lina a raison.",
                "b) 1 + 2 + 3 = 6 est bien un multiple de 6, mais 2 + 3 + 4 = 9 n'en est pas un.",
                "Ce contre-exemple suffit : Hugo a tort. (La somme est toujours un multiple de 3, mais pas toujours de 6.)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Programme A : choisir un nombre, lui ajouter 3, multiplier le résultat par 4, puis soustraire le double du nombre de départ. Programme B : choisir un nombre, le multiplier par 2, puis ajouter 12. a) Appliquez les deux programmes au nombre 5, puis au nombre -1. b) Prouvez que les deux programmes donnent toujours le même résultat. c) Prouvez que, si le nombre de départ est un entier, le résultat est toujours un nombre pair.",
              hint: "Appelez x le nombre de départ et écrivez une expression pour chaque programme. Pour c, factorisez le résultat par 2.",
              solution: [
                "a) Avec 5 : programme A, 5 + 3 = 8, puis 8 × 4 = 32, puis 32 - 10 = 22 ; programme B, 5 × 2 = 10, puis 10 + 12 = 22.",
                "Avec -1 : programme A, -1 + 3 = 2, puis 2 × 4 = 8, puis 8 - (-2) = 10 ; programme B, (-1) × 2 = -2, puis -2 + 12 = 10.",
                "b) Programme A : 4(x + 3) - 2x = 4x + 12 - 2x = 2x + 12. Programme B : 2x + 12.",
                "Les deux expressions sont égales pour tout nombre x : les programmes donnent toujours le même résultat.",
                "c) 2x + 12 = 2 × x + 2 × 6 = 2(x + 6). Si x est un entier, x + 6 est un entier, donc le résultat est le double d'un entier : c'est un nombre pair.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur la factorisation et la preuve.",
            statements: [
              { text: "Vérifier une propriété sur trois exemples suffit à la prouver.", true: false, why: "Des exemples permettent une conjecture ; il faut un calcul avec des lettres pour prouver." },
              { text: "Un seul contre-exemple suffit à prouver qu'une affirmation est fausse.", true: true, why: "Si l'affirmation devait être vraie pour tous les nombres, un seul cas faux la met en défaut." },
              { text: "5x + 5 = 5(x + 1).", true: true, why: "5x + 5 = 5 × x + 5 × 1 : le facteur commun est 5 et il reste 1 dans la parenthèse." },
              { text: "7x - 7 = 7x.", true: false, why: "7x - 7 = 7(x - 1) : il ne faut pas oublier le 1." },
              { text: "x² + 3x = x(x + 3).", true: true, why: "En développant, x(x + 3) = x² + 3x." },
              { text: "La somme de deux nombres pairs est toujours impaire.", true: false, why: "2n + 2p = 2(n + p) : la somme de deux nombres pairs est paire." },
              { text: "Factoriser, c'est transformer un produit en somme.", true: false, why: "C'est l'inverse : factoriser transforme une somme en produit ; développer transforme un produit en somme." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme factorisée de 6x + 18 ?", options: ["6(x + 18)", "3(2x + 3)", "6x(1 + 3)", "6(x + 3)"], answer: 3, why: "6x + 18 = 6 × x + 6 × 3 = 6(x + 3). Les autres, développées, ne redonnent pas 6x + 18." },
            { q: "Factorisez x² - 5x.", options: ["x(x - 5)", "x²(1 - 5)", "5(x² - x)", "x(x - 5x)"], answer: 0, why: "x² - 5x = x × x - x × 5 = x(x - 5)." },
            { q: "Pour prouver qu'une affirmation est fausse, il suffit de :", options: ["la tester sur dix exemples", "trouver un contre-exemple", "l'écrire avec des lettres", "demander à la calculatrice"], answer: 1, why: "Un seul cas où l'affirmation ne marche pas suffit à montrer qu'elle est fausse." },
            { q: "Quelle écriture désigne toujours un nombre impair (n étant un entier) ?", options: ["2n", "3n + 2", "2n + 1", "n + 1"], answer: 2, why: "2n est pair, donc 2n + 1 est impair. Les écritures 3n + 2 et n + 1 sont tantôt paires, tantôt impaires." },
            { q: "On a montré que n + (n + 1) + (n + 2) = 3(n + 1). Que peut-on en conclure ?", options: ["La somme de trois entiers consécutifs est un multiple de 3", "La somme de trois entiers consécutifs vaut toujours 3", "La somme de trois entiers consécutifs est toujours paire", "La somme de trois entiers consécutifs est un multiple de 6"], answer: 0, why: "3(n + 1) est le produit de 3 par un entier : c'est un multiple de 3, pour tout entier n." },
          ],
          trap: "Croire qu'une propriété est prouvée parce qu'elle marche sur quelques exemples, ou oublier le 1 en factorisant (écrire 7x - 7 = 7x au lieu de 7(x - 1)).",
          method: "Après chaque factorisation, redéveloppez mentalement le résultat pour retrouver l'expression de départ. Pour une preuve, nommez votre nombre avec une lettre, calculez, puis concluez par une phrase.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'resoudre-equation',
          title: 'Résoudre une équation du premier degré',
          minutes: 30,
          objectives: [
            "Tester si un nombre est solution d'une équation.",
            "Résoudre algébriquement une équation du premier degré.",
            "Vérifier la solution trouvée en la remplaçant dans l'équation.",
          ],
          course: [
            {
              heading: "Le vocabulaire des équations",
              paragraphs: [
                "Une équation est une égalité qui contient un nombre inconnu, désigné par une lettre (souvent x), appelée l'inconnue. Par exemple 3x + 5 = 20. Ce qui est à gauche du signe = s'appelle le premier membre, ce qui est à droite le second membre.",
                "Une solution de l'équation est une valeur de l'inconnue pour laquelle l'égalité est vraie. Résoudre l'équation, c'est trouver toutes ses solutions. Pour tester si 5 est solution de 3x + 5 = 20, on calcule chaque membre avec x = 5 : 3 × 5 + 5 = 20, et le second membre vaut 20. L'égalité est vraie, donc 5 est solution.",
                "Une équation est dite du premier degré quand l'inconnue n'y apparaît pas au carré, ni multipliée par elle-même : 7x - 4 = 3x + 8 est du premier degré. En 4e, toutes les équations que vous résolvez sont de ce type.",
              ],
              box: { label: "Définition", text: "Une solution d'une équation est une valeur de l'inconnue qui rend l'égalité vraie. Résoudre une équation, c'est trouver toutes ses solutions." },
            },
            {
              heading: "Les deux règles de la balance",
              paragraphs: [
                "Imaginez une balance en équilibre : si vous ajoutez ou retirez la même masse sur les deux plateaux, elle reste en équilibre. Une égalité fonctionne de la même façon. On peut ajouter ou soustraire un même nombre (ou un même terme en x) aux deux membres, l'égalité reste vraie.",
                "De même, on peut multiplier ou diviser les deux membres par un même nombre, à condition qu'il ne soit pas nul. Par exemple, si 4x = 12, on divise les deux membres par 4 et l'on obtient x = 3.",
              ],
              box: { label: "Règle", text: "On ne change pas les solutions d'une équation en ajoutant ou en soustrayant un même nombre aux deux membres, ni en multipliant ou en divisant les deux membres par un même nombre non nul." },
            },
            {
              heading: "La méthode de résolution",
              paragraphs: [
                "Le but est d'isoler x. On regroupe d'abord tous les termes en x dans un membre et tous les nombres seuls dans l'autre, puis on divise par le nombre qui multiplie x. Exemple : 7x - 4 = 3x + 8. On soustrait 3x aux deux membres : 4x - 4 = 8. On ajoute 4 aux deux membres : 4x = 12. On divise par 4 : x = 3.",
                "Si l'équation contient des parenthèses, on commence par développer. Exemple : 2(x - 3) = x + 1 devient 2x - 6 = x + 1. On soustrait x : x - 6 = 1. On ajoute 6 : x = 7.",
                "La solution n'est pas toujours un nombre entier. Si 6x = 4, alors x = 4/6 = 2/3. On donne alors la fraction simplifiée, plutôt qu'une valeur arrondie comme 0,67 qui n'est pas exacte.",
              ],
              box: { label: "Formule", text: "Pour a non nul, l'équation ax = b a pour solution x = b/a. Exemple : -5x = 15 donne x = 15/(-5) = -3." },
            },
            {
              heading: "Vérifier et conclure",
              paragraphs: [
                "Une fois la valeur trouvée, on la remplace dans l'équation de départ et l'on calcule séparément chaque membre. Pour 7x - 4 = 3x + 8 avec x = 3 : 7 × 3 - 4 = 17 et 3 × 3 + 8 = 17. Les deux membres sont égaux, la solution est juste.",
                "On termine par une phrase de conclusion : « La solution de l'équation est 3. » Cette vérification rapide permet de repérer une erreur de signe avant de rendre sa copie.",
              ],
            },
          ],
          keyPoints: [
            "Une solution rend l'égalité vraie ; résoudre, c'est trouver toutes les solutions.",
            "On peut ajouter ou soustraire un même nombre (ou un même terme) aux deux membres.",
            "On peut multiplier ou diviser les deux membres par un même nombre non nul.",
            "Méthode : développer si besoin, regrouper les x d'un côté et les nombres de l'autre, puis diviser.",
            "ax = b (a non nul) a pour solution x = b/a, à laisser en fraction simplifiée si elle n'est pas décimale.",
            "Toujours vérifier en remplaçant x dans l'équation de départ.",
          ],
          example: {
            statement: "Résolvez l'équation 5x - 7 = 2x + 8, puis vérifiez la solution.",
            solution: [
              "On soustrait 2x aux deux membres : 5x - 2x - 7 = 8, soit 3x - 7 = 8.",
              "On ajoute 7 aux deux membres : 3x = 8 + 7, soit 3x = 15.",
              "On divise les deux membres par 3 : x = 15 ÷ 3 = 5.",
              "Vérification : 5 × 5 - 7 = 18 et 2 × 5 + 8 = 18. Les deux membres sont égaux.",
              "Conclusion : la solution de l'équation est 5.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Résolvez les équations : a) x + 9 = 4 ; b) 6x = 42 ; c) 4x - 3 = 17 ; d) -2x = 10.",
              hint: "Pour a, soustrayez 9 aux deux membres. Pour b et d, divisez les deux membres par le nombre qui multiplie x, avec son signe.",
              solution: [
                "a) x + 9 = 4, donc x = 4 - 9 = -5. Vérification : -5 + 9 = 4.",
                "b) 6x = 42, donc x = 42 ÷ 6 = 7. Vérification : 6 × 7 = 42.",
                "c) 4x - 3 = 17, donc 4x = 20, puis x = 20 ÷ 4 = 5. Vérification : 4 × 5 - 3 = 17.",
                "d) -2x = 10, donc x = 10 ÷ (-2) = -5. Vérification : (-2) × (-5) = 10.",
                "Solutions : a) -5 ; b) 7 ; c) 5 ; d) -5.",
              ],
            },
            {
              level: 2,
              statement: "Résolvez les équations, puis vérifiez : a) 8x + 3 = 5x + 18 ; b) 2x - 9 = 7x + 6 ; c) 3(x + 4) = 5x - 2.",
              hint: "Regroupez les termes en x dans un membre et les nombres dans l'autre. Pour c, développez d'abord le premier membre.",
              solution: [
                "a) On soustrait 5x : 3x + 3 = 18. On soustrait 3 : 3x = 15. Donc x = 5. Vérification : 8 × 5 + 3 = 43 et 5 × 5 + 18 = 43.",
                "b) On soustrait 7x : -5x - 9 = 6. On ajoute 9 : -5x = 15. Donc x = 15 ÷ (-5) = -3. Vérification : 2 × (-3) - 9 = -15 et 7 × (-3) + 6 = -15.",
                "c) On développe : 3x + 12 = 5x - 2. On soustrait 3x : 12 = 2x - 2. On ajoute 2 : 14 = 2x. Donc x = 7. Vérification : 3 × (7 + 4) = 33 et 5 × 7 - 2 = 33.",
                "Solutions : a) 5 ; b) -3 ; c) 7.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Résolvez l'équation 4(2x - 1) - 3(x + 2) = 2x + 5. b) Résolvez l'équation 7x + 2 = 3x + 5 et donnez la solution sous forme de fraction, puis sous forme décimale. Vérifiez chaque solution.",
              hint: "Pour a, développez les deux produits en faisant attention au signe moins placé devant 3(x + 2), puis réduisez le premier membre avant de résoudre.",
              solution: [
                "a) On développe : 4(2x - 1) = 8x - 4 et -3(x + 2) = -3x - 6. Le premier membre vaut 8x - 4 - 3x - 6 = 5x - 10.",
                "L'équation devient 5x - 10 = 2x + 5. On soustrait 2x : 3x - 10 = 5. On ajoute 10 : 3x = 15. Donc x = 5.",
                "Vérification : 4 × (10 - 1) - 3 × (5 + 2) = 36 - 21 = 15 et 2 × 5 + 5 = 15. La solution est 5.",
                "b) On soustrait 3x : 4x + 2 = 5. On soustrait 2 : 4x = 3. Donc x = 3/4 = 0,75.",
                "Vérification : 7 × 0,75 + 2 = 5,25 + 2 = 7,25 et 3 × 0,75 + 5 = 2,25 + 5 = 7,25.",
                "Solutions : a) 5 ; b) 3/4, c'est-à-dire 0,75.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution de l'équation 6x + 1 = 2x + 13.",
            items: [
              "Écrire l'équation : 6x + 1 = 2x + 13",
              "Soustraire 2x aux deux membres : 4x + 1 = 13",
              "Soustraire 1 aux deux membres : 4x = 12",
              "Diviser les deux membres par 4 : x = 3",
              "Vérifier : 6 × 3 + 1 = 19 et 2 × 3 + 13 = 19",
              "Conclure : la solution de l'équation est 3",
            ],
          },
          quiz: [
            { q: "Quelle est la solution de x + 7 = 3 ?", options: ["10", "-4", "4", "-10"], answer: 1, why: "On soustrait 7 aux deux membres : x = 3 - 7 = -4. Vérification : -4 + 7 = 3." },
            { q: "Quelle est la solution de 5x = 35 ?", options: ["30", "40", "7", "175"], answer: 2, why: "On divise les deux membres par 5 : x = 35 ÷ 5 = 7." },
            { q: "Pour résoudre 3x - 4 = 11, quelle première étape convient ?", options: ["Ajouter 4 aux deux membres", "Soustraire 4 aux deux membres", "Multiplier le premier membre seul par 3", "Diviser 11 par 3"], answer: 0, why: "Ajouter 4 aux deux membres fait disparaître le -4 : on obtient 3x = 15, puis x = 5." },
            { q: "Le nombre 2 est-il solution de 4x - 1 = 2x + 3 ?", options: ["Oui, car les deux membres valent 7", "Non, car 4x - 1 vaut 7 et 2x + 3 vaut 5", "Non, car une solution est toujours négative"], answer: 0, why: "Avec x = 2 : 4 × 2 - 1 = 7 et 2 × 2 + 3 = 7. L'égalité est vraie." },
            { q: "Quelle est la solution de 4x = 3 ?", options: ["12", "1,33", "-1", "3/4"], answer: 3, why: "On divise les deux membres par 4 : x = 3/4, soit 0,75." },
          ],
          trap: "Changer de membre un terme sans changer son signe, ou diviser par le mauvais nombre : dans 4x = 12, il faut diviser par 4, et non soustraire 4.",
          method: "Écrivez une seule opération par ligne, en l'appliquant aux deux membres, puis vérifiez toujours la solution en calculant séparément chaque membre de l'équation de départ.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mettre-en-equation',
          title: 'Mettre un problème en équation',
          minutes: 35,
          objectives: [
            "Traduire un énoncé en langage mathématique à l'aide d'une lettre.",
            "Mettre un problème en équation, puis résoudre cette équation.",
            "Vérifier la solution dans l'énoncé et rédiger une phrase de conclusion.",
          ],
          course: [
            {
              heading: "Traduire les phrases en expressions",
              paragraphs: [
                "Beaucoup de problèmes se résolvent en traduisant l'énoncé avec une lettre qui représente le nombre cherché. Il faut donc savoir passer des mots aux calculs. Si x désigne un nombre : « le double de x » s'écrit 2x, « le triple de x » s'écrit 3x, « la moitié de x » s'écrit x ÷ 2 (ou x/2), « x augmenté de 5 » s'écrit x + 5 et « x diminué de 7 » s'écrit x - 7.",
                "L'ordre des mots compte. « Le double de x, augmenté de 5 » s'écrit 2x + 5 : on double d'abord, puis on ajoute 5. En revanche « le double de la somme de x et de 5 » s'écrit 2(x + 5) : on ajoute d'abord, puis on double. Avec x = 3, la première expression vaut 11 et la seconde 16.",
                "Pour des nombres entiers consécutifs, si le premier est n, les suivants sont n + 1, n + 2, etc. Si une personne a 4 ans de plus qu'une autre, d'âge x, elle a x + 4 ans.",
              ],
              box: { label: "Repère", text: "Double : 2x. Triple : 3x. Moitié : x ÷ 2. Augmenté de 5 : x + 5. Diminué de 7 : x - 7. Le nombre entier suivant : n + 1." },
            },
            {
              heading: "La méthode en cinq étapes",
              paragraphs: [
                "Première étape : choisir l'inconnue. On écrit une phrase comme « Soit x le prix d'une place enfant, en euros ». Deuxième étape : mettre en équation, c'est-à-dire écrire une égalité qui traduit l'énoncé. Troisième étape : résoudre l'équation.",
                "Quatrième étape : vérifier que la valeur trouvée convient dans l'énoncé (et pas seulement dans l'équation, au cas où l'équation serait mal écrite). Il faut aussi vérifier qu'elle a du sens : un nombre de personnes doit être un entier positif, une longueur doit être positive. Cinquième étape : conclure par une phrase qui répond à la question posée, avec l'unité.",
              ],
              box: { label: "Règle", text: "1. Choisir l'inconnue. 2. Mettre en équation. 3. Résoudre. 4. Vérifier dans l'énoncé. 5. Conclure par une phrase, avec l'unité." },
            },
            {
              heading: "Deux exemples types",
              paragraphs: [
                "Trois nombres entiers consécutifs ont pour somme 72. Lesquels ? Soit n le plus petit. Les deux autres sont n + 1 et n + 2. L'équation est n + (n + 1) + (n + 2) = 72, soit 3n + 3 = 72. Donc 3n = 69 et n = 23. Les nombres sont 23, 24 et 25, et l'on vérifie : 23 + 24 + 25 = 72.",
                "Un rectangle a une longueur qui dépasse sa largeur de 5 cm et un périmètre de 38 cm. Soit x la largeur, en cm. La longueur vaut x + 5. Le périmètre vaut 2(x + x + 5) = 2(2x + 5) = 4x + 10. L'équation est 4x + 10 = 38, donc 4x = 28 et x = 7. Le rectangle mesure 7 cm sur 12 cm, et l'on vérifie : 2 × (7 + 12) = 38.",
              ],
            },
          ],
          keyPoints: [
            "Commencez par écrire « Soit x ... » en précisant ce que représente x et son unité.",
            "Le double de x, augmenté de 5 : 2x + 5 ; le double de la somme de x et de 5 : 2(x + 5).",
            "Trois entiers consécutifs : n, n + 1, n + 2.",
            "Méthode : inconnue, équation, résolution, vérification dans l'énoncé, conclusion.",
            "La solution doit avoir du sens : un nombre d'objets est un entier positif, une longueur est positive.",
          ],
          example: {
            statement: "Au cinéma (données fictives), une place adulte coûte 4 € de plus qu'une place enfant. Une famille achète 2 places adulte et 3 places enfant et paie 38 € en tout. Quel est le prix d'une place enfant ? Et d'une place adulte ?",
            solution: [
              "Soit x le prix d'une place enfant, en euros. Une place adulte coûte alors x + 4.",
              "Le prix total s'écrit 2(x + 4) + 3x. L'équation est 2(x + 4) + 3x = 38.",
              "On développe : 2x + 8 + 3x = 38, soit 5x + 8 = 38. Donc 5x = 30 et x = 6.",
              "Une place enfant coûte 6 € et une place adulte 6 + 4 = 10 €. Vérification : 2 × 10 + 3 × 6 = 20 + 18 = 38 €.",
              "Conclusion : la place enfant coûte 6 € et la place adulte 10 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Je pense à un nombre. Je le multiplie par 4, puis j'ajoute 7 au résultat. J'obtiens 43. Quel est ce nombre ?",
              hint: "Appelez x le nombre pensé et traduisez chaque étape : « multiplier par 4 » donne 4x.",
              solution: [
                "Soit x le nombre pensé. Le multiplier par 4 donne 4x, puis ajouter 7 donne 4x + 7.",
                "L'équation est 4x + 7 = 43.",
                "On soustrait 7 : 4x = 36. On divise par 4 : x = 9.",
                "Vérification : 9 × 4 = 36, puis 36 + 7 = 43.",
                "Conclusion : le nombre pensé est 9.",
              ],
            },
            {
              level: 2,
              statement: "Un enclos rectangulaire (données fictives) a un périmètre de 54 m. Sa longueur mesure 3 m de plus que le double de sa largeur. Calculez la largeur et la longueur de l'enclos.",
              hint: "Appelez x la largeur. Traduisez « 3 m de plus que le double de la largeur », puis rappelez-vous que le périmètre d'un rectangle vaut 2 × (longueur + largeur).",
              solution: [
                "Soit x la largeur de l'enclos, en mètres. La longueur vaut 2x + 3.",
                "Périmètre : 2 × (x + 2x + 3) = 2 × (3x + 3) = 6x + 6. L'équation est 6x + 6 = 54.",
                "On soustrait 6 : 6x = 48. On divise par 6 : x = 8.",
                "La largeur mesure 8 m et la longueur 2 × 8 + 3 = 19 m. Vérification : 2 × (8 + 19) = 2 × 27 = 54 m.",
                "Conclusion : l'enclos mesure 8 m de large et 19 m de long.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une salle de sport (données fictives) propose deux tarifs. Tarif A : 12 € par séance. Tarif B : un abonnement de 60 € pour l'année, puis 7 € par séance. a) Calculez le prix de 10 séances avec chaque tarif. b) Pour combien de séances les deux tarifs coûtent-ils exactement la même somme ? c) Lucas prévoit 20 séances dans l'année. Quel tarif lui conseillez-vous ?",
              hint: "Appelez x le nombre de séances. Écrivez le prix avec chaque tarif, puis cherchez x pour que ces deux prix soient égaux.",
              solution: [
                "a) Tarif A : 10 × 12 = 120 €. Tarif B : 60 + 10 × 7 = 60 + 70 = 130 €. Pour 10 séances, le tarif A est moins cher.",
                "b) Soit x le nombre de séances. Prix avec A : 12x. Prix avec B : 60 + 7x. On résout 12x = 60 + 7x.",
                "On soustrait 7x : 5x = 60, donc x = 12. Vérification : 12 × 12 = 144 € et 60 + 7 × 12 = 60 + 84 = 144 €.",
                "Les deux tarifs coûtent la même somme, 144 €, pour 12 séances.",
                "c) Pour 20 séances : tarif A, 20 × 12 = 240 € ; tarif B, 60 + 20 × 7 = 200 €.",
                "Conclusion : pour 20 séances, le tarif B est le plus avantageux, avec 40 € d'économie.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase à l'expression qui la traduit (x et n désignent des nombres).",
            pairs: [
              { left: "Le double de x, augmenté de 5", right: "2x + 5" },
              { left: "Le double de la somme de x et de 5", right: "2(x + 5)" },
              { left: "x diminué de 3", right: "x - 3" },
              { left: "Le triple de x", right: "3x" },
              { left: "La moitié de x", right: "x ÷ 2" },
              { left: "Le nombre entier qui suit n", right: "n + 1" },
            ],
          },
          quiz: [
            { q: "Comment traduire « le triple d'un nombre x, diminué de 4 » ?", options: ["3(x - 4)", "3x - 4", "x - 12", "3 + x - 4"], answer: 1, why: "On prend d'abord le triple, 3x, puis on retire 4 : 3x - 4." },
            { q: "Trois nombres entiers consécutifs ont pour somme 39. Quel est le plus petit ?", options: ["12", "13", "11", "14"], answer: 0, why: "n + (n + 1) + (n + 2) = 39 donne 3n + 3 = 39, donc 3n = 36 et n = 12. Vérification : 12 + 13 + 14 = 39." },
            { q: "Quelle est la première étape d'une mise en équation ?", options: ["Résoudre l'équation", "Choisir l'inconnue", "Vérifier le résultat", "Rédiger la conclusion"], answer: 1, why: "Avant d'écrire l'équation, il faut dire ce que représente la lettre, avec son unité." },
            { q: "Un rectangle a une largeur x et une longueur x + 4 (en cm). Son périmètre vaut 28 cm. Quelle équation convient ?", options: ["x(x + 4) = 28", "2x + 4 = 28", "4x + 8 = 28", "x + x + 4 = 28"], answer: 2, why: "Le périmètre vaut 2(x + x + 4) = 4x + 8. L'expression x(x + 4) est l'aire, pas le périmètre." },
            { q: "Léa a 3 ans de plus que Tom. La somme de leurs âges est 25 ans. Quel est l'âge de Tom ?", options: ["14 ans", "22 ans", "12,5 ans", "11 ans"], answer: 3, why: "x + (x + 3) = 25 donne 2x = 22, donc x = 11. Tom a 11 ans et Léa 14 ans." },
          ],
          trap: "Écrire une équation sans avoir dit ce que représente x, puis répondre avec la valeur de x alors que la question portait sur une autre grandeur (la longueur au lieu de la largeur, par exemple).",
          method: "Soulignez dans l'énoncé chaque information chiffrée et cochez-la quand elle apparaît dans votre équation. À la fin, relisez la question et vérifiez que votre phrase de conclusion y répond, avec l'unité.",
        },
      ],
    },
    /* ================================================================== */
    /* PROPORTIONNALITÉ, POURCENTAGES ET VITESSE                            */
    /* ================================================================== */
    {
      id: 'proportionnalite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reconnaitre-proportionnalite',
          title: 'Reconnaître la proportionnalité, dans un tableau et sur un graphique',
          minutes: 30,
          objectives: [
            "Reconnaître une situation de proportionnalité ou de non-proportionnalité.",
            "Calculer un coefficient de proportionnalité à partir d'un tableau.",
            "Reconnaître sur un graphique une situation de proportionnalité : des points alignés avec l'origine du repère.",
          ],
          course: [
            {
              heading: "Deux grandeurs proportionnelles",
              paragraphs: [
                "Deux grandeurs sont proportionnelles lorsque l'on obtient les valeurs de l'une en multipliant les valeurs de l'autre par un même nombre, appelé coefficient de proportionnalité. Exemple : des cahiers coûtent 1,80 € l'un. Le prix payé s'obtient en multipliant le nombre de cahiers par 1,80 : 2 cahiers coûtent 3,60 €, 5 cahiers coûtent 9 €, 10 cahiers coûtent 18 €.",
                "Toutes les situations ne sont pas proportionnelles. Un taxi (données fictives) fait payer 4 € de prise en charge, puis 2 € par kilomètre : 1 km coûte 6 €, mais 2 km coûtent 8 €, et non 12 €. Le prix augmente avec la distance, mais il n'est pas proportionnel à la distance. De même, la taille d'un enfant augmente avec son âge sans lui être proportionnelle : un enfant de 10 ans ne mesure pas deux fois plus qu'à 5 ans.",
              ],
              box: { label: "Définition", text: "Deux grandeurs sont proportionnelles si l'on passe des valeurs de l'une aux valeurs de l'autre en multipliant toujours par le même nombre, le coefficient de proportionnalité." },
            },
            {
              heading: "Reconnaître la proportionnalité dans un tableau",
              paragraphs: [
                "On range les valeurs dans un tableau à deux lignes. Le tableau est un tableau de proportionnalité si, pour chaque colonne, le quotient de la seconde ligne par la première est le même. Ce quotient commun est le coefficient de proportionnalité.",
                "Exemple : masses de pommes 2 kg, 3 kg et 5 kg ; prix 5 €, 7,50 € et 12,50 €. On calcule 5 ÷ 2 = 2,5 ; 7,5 ÷ 3 = 2,5 ; 12,5 ÷ 5 = 2,5. Les quotients sont égaux : c'est une situation de proportionnalité, de coefficient 2,5 (le prix d'un kilogramme est 2,50 €). Il suffit au contraire d'un seul quotient différent pour que la situation ne soit pas proportionnelle.",
                "Dans un tableau de proportionnalité, on peut aussi additionner deux colonnes ou multiplier une colonne par un nombre : on obtient encore une colonne du tableau. Si 2 kg coûtent 5 € et 3 kg coûtent 7,50 €, alors 5 kg coûtent 5 + 7,50 = 12,50 €, et 6 kg coûtent 2 × 7,50 = 15 €.",
              ],
              box: { label: "Propriété", text: "Un tableau est un tableau de proportionnalité si tous les quotients « seconde ligne ÷ première ligne » sont égaux. Ce quotient commun est le coefficient de proportionnalité." },
            },
            {
              heading: "Reconnaître la proportionnalité sur un graphique",
              paragraphs: [
                "On peut placer dans un repère les points dont les coordonnées sont les couples de valeurs du tableau. Pour les cahiers à 1,80 €, on place les points (2 ; 3,6), (5 ; 9) et (10 ; 18). Ces points sont alignés avec l'origine du repère, le point (0 ; 0) : 0 cahier coûte 0 €.",
                "Pour le taxi, les points (1 ; 6), (2 ; 8) et (3 ; 10) sont alignés, mais la droite qui les porte ne passe pas par l'origine : elle coupe l'axe vertical à 4, le prix de la prise en charge. La situation n'est donc pas proportionnelle. Et si les points ne sont pas alignés, comme pour l'aire d'un carré en fonction de son côté, la situation n'est pas proportionnelle non plus.",
              ],
              box: { label: "Propriété", text: "Une situation de proportionnalité est représentée graphiquement par des points alignés avec l'origine du repère. Réciproquement, des points alignés avec l'origine représentent une situation de proportionnalité." },
            },
          ],
          keyPoints: [
            "Deux grandeurs sont proportionnelles si l'on passe de l'une à l'autre en multipliant toujours par le même nombre.",
            "Dans un tableau, on vérifie que tous les quotients « seconde ligne ÷ première ligne » sont égaux.",
            "Un seul quotient différent suffit pour conclure que la situation n'est pas proportionnelle.",
            "Graphiquement : proportionnalité si et seulement si les points sont alignés avec l'origine.",
            "Deux grandeurs qui augmentent ensemble ne sont pas forcément proportionnelles (taxi, taille et âge).",
          ],
          example: {
            statement: "Le tableau suivant donne la consommation d'eau d'un robinet qui fuit (données fictives) : 2 h → 6 L ; 5 h → 15 L ; 8 h → 24 L ; 12 h → 36 L. Est-ce un tableau de proportionnalité ? Si oui, donnez le coefficient et interprétez-le.",
            solution: [
              "On calcule le quotient de la seconde ligne par la première, colonne par colonne.",
              "6 ÷ 2 = 3 ; 15 ÷ 5 = 3 ; 24 ÷ 8 = 3 ; 36 ÷ 12 = 3.",
              "Tous les quotients sont égaux à 3 : c'est un tableau de proportionnalité.",
              "Le coefficient de proportionnalité est 3 : le robinet perd 3 litres d'eau par heure.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Les tableaux suivants sont-ils des tableaux de proportionnalité ? Tableau A : 3, 5, 8 sur la première ligne et 12, 20, 32 sur la seconde. Tableau B : 2, 4, 10 sur la première ligne et 7, 14, 30 sur la seconde. Justifiez.",
              hint: "Calculez, pour chaque colonne, le quotient du nombre du bas par le nombre du haut.",
              solution: [
                "Tableau A : 12 ÷ 3 = 4 ; 20 ÷ 5 = 4 ; 32 ÷ 8 = 4. Les quotients sont égaux : c'est un tableau de proportionnalité, de coefficient 4.",
                "Tableau B : 7 ÷ 2 = 3,5 ; 14 ÷ 4 = 3,5 ; mais 30 ÷ 10 = 3.",
                "Un quotient est différent : le tableau B n'est pas un tableau de proportionnalité.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, dites si les deux grandeurs sont proportionnelles et justifiez avec des valeurs. a) Le prix payé et le nombre de cahiers achetés à 1,80 € l'un. b) Le périmètre d'un carré et la longueur de son côté. c) L'aire d'un carré et la longueur de son côté. d) Le prix d'une course de taxi avec 4 € de prise en charge et 2 € par kilomètre, et la distance parcourue.",
              hint: "Construisez un petit tableau de deux ou trois valeurs pour chaque situation, puis comparez les quotients.",
              solution: [
                "a) Prix = 1,80 × nombre de cahiers : 1 cahier coûte 1,80 €, 2 cahiers 3,60 €. On multiplie toujours par 1,80 : situation de proportionnalité.",
                "b) Périmètre = 4 × côté : côté 1 cm, périmètre 4 cm ; côté 3 cm, périmètre 12 cm. On multiplie toujours par 4 : situation de proportionnalité.",
                "c) Aire = côté × côté : côté 1 cm, aire 1 cm² ; côté 2 cm, aire 4 cm². Les quotients 1 ÷ 1 = 1 et 4 ÷ 2 = 2 sont différents : pas de proportionnalité.",
                "d) 1 km coûte 4 + 2 = 6 € ; 2 km coûtent 4 + 4 = 8 €. Les quotients 6 ÷ 1 = 6 et 8 ÷ 2 = 4 sont différents : pas de proportionnalité.",
                "Conclusion : seules les situations a et b sont des situations de proportionnalité.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une location de vélos (données fictives) propose deux formules. Formule A : 3 € par heure. Formule B : 4 € de frais fixes, puis 2 € par heure. a) Calculez le prix de chaque formule pour 1, 2, 3 et 4 heures. b) Laquelle des deux formules est une situation de proportionnalité ? c) Décrivez les points que l'on obtiendrait pour chaque formule dans un repère (durée en abscisse, prix en ordonnée). d) Quelle formule est la moins chère pour 3 heures ? Et pour 5 heures ?",
              hint: "Pour la formule B, ajoutez les 4 € de frais fixes à 2 € multipliés par le nombre d'heures. Pour c, demandez-vous ce que coûterait une location de 0 heure.",
              solution: [
                "a) Formule A : 3 €, 6 €, 9 € et 12 €. Formule B : 4 + 2 = 6 €, 4 + 4 = 8 €, 4 + 6 = 10 € et 4 + 8 = 12 €.",
                "b) Formule A : 3 ÷ 1 = 6 ÷ 2 = 9 ÷ 3 = 12 ÷ 4 = 3, c'est une situation de proportionnalité de coefficient 3. Formule B : 6 ÷ 1 = 6 et 8 ÷ 2 = 4 sont différents, ce n'est pas une situation de proportionnalité.",
                "c) Pour la formule A, les points (1 ; 3), (2 ; 6), (3 ; 9) et (4 ; 12) sont alignés avec l'origine du repère.",
                "Pour la formule B, les points (1 ; 6), (2 ; 8), (3 ; 10) et (4 ; 12) sont alignés, mais sur une droite qui ne passe pas par l'origine : elle coupe l'axe des ordonnées à 4, le montant des frais fixes.",
                "d) Pour 3 heures : A coûte 9 € et B coûte 10 €, la formule A est la moins chère. Pour 5 heures : A coûte 15 € et B coûte 4 + 10 = 14 €, la formule B est la moins chère.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur la proportionnalité.",
            statements: [
              { text: "Dans un tableau de proportionnalité, on passe d'une ligne à l'autre en multipliant toujours par le même nombre.", true: true, why: "C'est la définition : ce nombre est le coefficient de proportionnalité." },
              { text: "Si deux grandeurs augmentent en même temps, elles sont proportionnelles.", true: false, why: "Le prix d'un taxi avec prise en charge augmente avec la distance sans lui être proportionnel." },
              { text: "Le périmètre d'un carré est proportionnel à la longueur de son côté.", true: true, why: "Le périmètre vaut 4 fois le côté : le coefficient est 4." },
              { text: "L'aire d'un carré est proportionnelle à la longueur de son côté.", true: false, why: "Côté 1 cm, aire 1 cm² ; côté 2 cm, aire 4 cm² : on ne multiplie pas toujours par le même nombre." },
              { text: "Une situation de proportionnalité est représentée par des points alignés avec l'origine du repère.", true: true, why: "C'est la propriété graphique de la proportionnalité." },
              { text: "Des points alignés représentent toujours une situation de proportionnalité.", true: false, why: "Il faut aussi que la droite passe par l'origine du repère." },
              { text: "La taille d'un enfant est proportionnelle à son âge.", true: false, why: "Un enfant de 10 ans ne mesure pas le double de sa taille à 5 ans." },
            ],
          },
          quiz: [
            { q: "Le tableau qui associe 2, 5 et 8 à 6, 15 et 24 est-il un tableau de proportionnalité ?", options: ["Oui, le coefficient est 3", "Non, car 24 - 8 n'est pas égal à 6 - 2", "Oui, le coefficient est 4", "Non, aucun coefficient ne convient"], answer: 0, why: "6 ÷ 2 = 15 ÷ 5 = 24 ÷ 8 = 3 : tous les quotients sont égaux." },
            { q: "Quelle situation est une situation de proportionnalité ?", options: ["Le prix d'une course de taxi avec une prise en charge", "Le prix de tickets de bus à 1,70 € l'un", "La taille d'une personne et son âge", "L'aire d'un carré et son côté"], answer: 1, why: "Le prix s'obtient toujours en multipliant le nombre de tickets par 1,70." },
            { q: "Sur un graphique, une situation de proportionnalité se reconnaît à :", options: ["des points alignés, quels qu'ils soient", "une courbe qui passe par l'origine", "des points alignés avec l'origine", "des points qui montent de gauche à droite"], answer: 2, why: "Il faut à la fois que les points soient alignés et que la droite passe par l'origine." },
            { q: "6 stylos identiques coûtent 4,80 €. Quel est le coefficient de proportionnalité (le prix d'un stylo) ?", options: ["1,25 €", "0,80 €", "0,08 €", "1,20 €"], answer: 1, why: "4,80 ÷ 6 = 0,80 : un stylo coûte 0,80 €." },
            { q: "Dans un tableau de proportionnalité, 4 correspond à 10. À quoi correspond 12 ?", options: ["18", "20", "30", "40"], answer: 2, why: "Le coefficient vaut 10 ÷ 4 = 2,5, et 12 × 2,5 = 30. On peut aussi remarquer que 12 = 3 × 4, donc 3 × 10 = 30." },
          ],
          trap: "Conclure à la proportionnalité parce que deux grandeurs augmentent ensemble, ou parce que les points d'un graphique sont alignés, sans vérifier que la droite passe par l'origine.",
          method: "Pour un tableau, calculez tous les quotients et pas seulement le premier. Pour un graphique, posez-vous deux questions : les points sont-ils alignés ? La droite passe-t-elle par l'origine ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'quatrieme-proportionnelle',
          title: 'Calculer une quatrième proportionnelle',
          minutes: 30,
          objectives: [
            "Calculer une quatrième proportionnelle par la méthode de son choix : coefficient, retour à l'unité, linéarité.",
            "Utiliser l'égalité des produits en croix.",
            "Résoudre des problèmes de proportionnalité, notamment avec une échelle.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une quatrième proportionnelle ?",
              paragraphs: [
                "Dans une situation de proportionnalité, on connaît souvent trois nombres et l'on cherche le quatrième. Exemple : 5 kg de pommes de terre coûtent 7 €, combien coûtent 8 kg ? Les nombres 5, 7 et 8 sont connus ; le prix cherché s'appelle la quatrième proportionnelle.",
                "Avant tout calcul, il faut s'assurer que la situation est bien proportionnelle. Ici, le prix au kilogramme est le même quelle que soit la quantité achetée (on suppose qu'il n'y a pas de promotion) : la situation est proportionnelle.",
              ],
              box: { label: "Définition", text: "Calculer une quatrième proportionnelle, c'est trouver le quatrième nombre d'un tableau de proportionnalité dont on connaît trois nombres." },
            },
            {
              heading: "Trois méthodes déjà connues",
              paragraphs: [
                "Le coefficient de proportionnalité : 7 ÷ 5 = 1,4, donc 1 kg coûte 1,40 €, et 8 kg coûtent 8 × 1,4 = 11,20 €. Le retour à l'unité est la même idée racontée autrement : on calcule d'abord le prix d'un kilogramme, puis on multiplie par le nombre de kilogrammes voulu.",
                "La linéarité : on utilise les rapports entre les quantités. Si 5 kg coûtent 7 €, alors 10 kg (le double) coûtent 14 €, et 15 kg (le triple) coûtent 21 €. On peut aussi additionner : si 2 kg coûtent 2,80 € et 3 kg coûtent 4,20 €, alors 5 kg coûtent 7 €. Cette méthode est très pratique en calcul mental.",
              ],
            },
            {
              heading: "L'égalité des produits en croix",
              paragraphs: [
                "Dans un tableau de proportionnalité à deux colonnes, les « produits en croix » sont égaux. Si le tableau contient a et c sur la première ligne, b et d sur la seconde (a correspond à b, c correspond à d), alors a × d = b × c. Par exemple, pour 5 → 7 et 10 → 14 : 5 × 14 = 70 et 7 × 10 = 70.",
                "On s'en sert pour calculer une quatrième proportionnelle. Pour 5 kg → 7 € et 8 kg → x € : 5 × x = 7 × 8, donc x = 7 × 8 ÷ 5 = 56 ÷ 5 = 11,2. Les 8 kg coûtent 11,20 €. On retrouve bien le résultat obtenu avec le coefficient.",
                "Cette méthode marche toujours, même avec des nombres peu pratiques. Elle s'écrit en une ligne : on multiplie les deux nombres connus placés « en diagonale », puis on divise par le troisième.",
              ],
              box: { label: "Propriété", text: "Si a correspond à b et c correspond à d dans une situation de proportionnalité (a et c non nuls), alors a × d = b × c. Donc d = b × c ÷ a." },
            },
            {
              heading: "Une application : les échelles",
              paragraphs: [
                "Sur un plan ou une carte, les longueurs dessinées sont proportionnelles aux longueurs réelles. L'échelle est le coefficient qui permet de passer des longueurs réelles aux longueurs sur le plan, exprimées dans la même unité. Une échelle de 1/200 signifie que 1 cm sur le plan représente 200 cm, soit 2 m, en réalité.",
                "Sur un plan à l'échelle 1/200, une pièce dessinée avec 3,5 cm de long mesure en réalité 3,5 × 200 = 700 cm, soit 7 m. Inversement, un mur réel de 5 m, soit 500 cm, est dessiné avec 500 ÷ 200 = 2,5 cm. Pensez toujours à convertir dans la même unité avant de calculer.",
              ],
              box: { label: "À retenir", text: "Échelle = longueur sur le plan ÷ longueur réelle, les deux longueurs étant exprimées dans la même unité." },
            },
          ],
          keyPoints: [
            "Vérifiez d'abord que la situation est proportionnelle.",
            "Coefficient ou retour à l'unité : on calcule la valeur pour une unité, puis on multiplie.",
            "Linéarité : le double d'une quantité correspond au double du prix ; on peut aussi additionner des colonnes.",
            "Produits en croix : si a → b et c → d, alors a × d = b × c, donc d = b × c ÷ a.",
            "Échelle 1/200 : 1 cm sur le plan représente 200 cm en réalité ; travaillez dans la même unité.",
          ],
          example: {
            statement: "7 cahiers identiques coûtent 10,50 €. Combien coûtent 12 de ces cahiers ?",
            solution: [
              "Le prix est proportionnel au nombre de cahiers, puisque chaque cahier coûte le même prix.",
              "Tableau : 7 cahiers → 10,50 € ; 12 cahiers → x €.",
              "Égalité des produits en croix : 7 × x = 12 × 10,50 = 126.",
              "Donc x = 126 ÷ 7 = 18.",
              "Contrôle par le retour à l'unité : 10,50 ÷ 7 = 1,50 € par cahier, et 12 × 1,50 = 18 €.",
              "Conclusion : 12 cahiers coûtent 18 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Avec 3 L de peinture, on couvre 24 m² de mur (données fictives). Quelle surface peut-on couvrir avec 5 L de cette peinture ? Résolvez par deux méthodes différentes.",
              hint: "Calculez d'abord la surface couverte par 1 L, puis utilisez l'égalité des produits en croix pour contrôler.",
              solution: [
                "Retour à l'unité : 24 ÷ 3 = 8, donc 1 L couvre 8 m². Avec 5 L : 5 × 8 = 40 m².",
                "Produits en croix : 3 L → 24 m² et 5 L → x m². On a 3 × x = 24 × 5 = 120, donc x = 120 ÷ 3 = 40.",
                "Conclusion : 5 L de peinture couvrent 40 m².",
              ],
            },
            {
              level: 2,
              statement: "Une recette de crêpes pour 4 personnes (données fictives) demande 250 g de farine, 4 œufs et 60 cl de lait. Calculez les quantités nécessaires pour 6 personnes, puis pour 10 personnes.",
              hint: "Les quantités sont proportionnelles au nombre de personnes. Pensez à la linéarité : 6 personnes, c'est 4 personnes plus la moitié de 4 personnes.",
              solution: [
                "Pour 6 personnes, on multiplie par 6 ÷ 4 = 1,5. Farine : 250 × 1,5 = 375 g. Œufs : 4 × 1,5 = 6. Lait : 60 × 1,5 = 90 cl.",
                "Pour 10 personnes, on multiplie par 10 ÷ 4 = 2,5. Farine : 250 × 2,5 = 625 g. Œufs : 4 × 2,5 = 10. Lait : 60 × 2,5 = 150 cl.",
                "Contrôle par la linéarité : 10 personnes = 4 + 6 personnes, et 250 + 375 = 625 g de farine.",
                "Conclusion : pour 6 personnes, 375 g de farine, 6 œufs et 90 cl de lait ; pour 10 personnes, 625 g de farine, 10 œufs et 150 cl (1,5 L) de lait.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Sur le plan d'une maison à l'échelle 1/50, le salon mesure 12 cm de long. Quelle est sa longueur réelle, en mètres ? b) Une chambre mesure en réalité 3,5 m de long. Quelle est sa longueur sur ce plan ? c) Une voiture consomme 6,5 L de carburant pour 100 km (données fictives). Combien consomme-t-elle pour 340 km ? d) Avec 40 L, quelle distance peut-elle parcourir ? Arrondissez au kilomètre.",
              hint: "Pour a et b, travaillez en centimètres : 1 cm sur le plan représente 50 cm. Pour d, écrivez le tableau 6,5 L → 100 km et 40 L → x km, puis utilisez les produits en croix.",
              solution: [
                "a) Longueur réelle : 12 × 50 = 600 cm, soit 6 m.",
                "b) 3,5 m = 350 cm. Longueur sur le plan : 350 ÷ 50 = 7 cm.",
                "c) 100 km → 6,5 L et 340 km → x L. Produits en croix : 100 × x = 6,5 × 340 = 2 210, donc x = 22,1. La voiture consomme 22,1 L.",
                "d) 6,5 L → 100 km et 40 L → y km. Produits en croix : 6,5 × y = 100 × 40 = 4 000, donc y = 4 000 ÷ 6,5 ≈ 615,4.",
                "Conclusion : le salon mesure 6 m, la chambre est dessinée avec 7 cm, la voiture consomme 22,1 L pour 340 km et parcourt environ 615 km avec 40 L.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul du prix de 12 cahiers, sachant que 7 cahiers coûtent 10,50 €.",
            items: [
              "Vérifier que le prix est proportionnel au nombre de cahiers",
              "Écrire le tableau : 7 → 10,50 et 12 → x",
              "Écrire l'égalité des produits en croix : 7 × x = 12 × 10,50",
              "Calculer x = 126 ÷ 7",
              "Trouver x = 18",
              "Conclure : 12 cahiers coûtent 18 €",
            ],
          },
          quiz: [
            { q: "3 kg de pommes coûtent 6,60 €. Combien coûtent 5 kg ?", options: ["8,60 €", "11 €", "10 €", "13,20 €"], answer: 1, why: "1 kg coûte 6,60 ÷ 3 = 2,20 €, donc 5 kg coûtent 5 × 2,20 = 11 €." },
            { q: "Dans un tableau de proportionnalité, 8 correspond à 12 et x correspond à 18. Que vaut x ?", options: ["14", "27", "12", "22"], answer: 2, why: "Produits en croix : 12 × x = 8 × 18 = 144, donc x = 144 ÷ 12 = 12." },
            { q: "On sait que 5 correspond à 8 et que 15 correspond à x. Que vaut x ?", options: ["24", "18", "3", "40"], answer: 0, why: "15 est le triple de 5, donc x est le triple de 8 : x = 24." },
            { q: "Sur un plan à l'échelle 1/100, une longueur de 4 cm représente en réalité :", options: ["40 cm", "400 m", "40 m", "4 m"], answer: 3, why: "4 × 100 = 400 cm, soit 4 m." },
            { q: "La méthode du retour à l'unité consiste à :", options: ["multiplier toutes les valeurs par 10", "calculer la valeur d'une seule unité", "additionner deux colonnes du tableau"], answer: 1, why: "On calcule d'abord la valeur pour une unité (le prix d'un objet, par exemple), puis on multiplie par la quantité voulue." },
          ],
          trap: "Appliquer les produits en croix à une situation qui n'est pas proportionnelle, ou mélanger les unités, par exemple des centimètres sur le plan et des mètres en réalité avec une échelle.",
          method: "Écrivez toujours le petit tableau avec les unités avant de calculer, puis contrôlez l'ordre de grandeur : si la quantité augmente, le résultat doit augmenter aussi.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'pourcentages',
          title: 'Appliquer et calculer un pourcentage',
          minutes: 30,
          objectives: [
            "Appliquer un pourcentage à une quantité.",
            "Calculer un pourcentage à partir d'une partie et d'un total.",
            "Calculer le résultat d'une augmentation ou d'une diminution exprimée en pourcentage.",
          ],
          course: [
            {
              heading: "Un pourcentage est une proportion",
              paragraphs: [
                "Un pourcentage exprime une proportion sur 100. Dire que 30 % des élèves d'un collège viennent à vélo, c'est dire que, sur 100 élèves, 30 viennent à vélo. Le pourcentage t % est égal à la fraction t/100 : 30 % = 30/100 = 0,3.",
                "Certains pourcentages sont à connaître : 50 % représente la moitié, 25 % le quart, 75 % les trois quarts, 10 % le dixième, 20 % le cinquième et 100 % la totalité. Ainsi 25 % de 80 € font le quart de 80 €, soit 20 €.",
              ],
              box: { label: "Définition", text: "t % signifie t pour 100 : t % = t/100. Par exemple 30 % = 30/100 = 0,3." },
            },
            {
              heading: "Appliquer un pourcentage",
              paragraphs: [
                "Pour calculer t % d'une quantité, on multiplie cette quantité par t/100. Dans un collège de 520 élèves (données fictives), 35 % sont demi-pensionnaires : 520 × 35/100 = 520 × 0,35 = 182 élèves.",
                "C'est une situation de proportionnalité : la partie est proportionnelle au total. On peut donc aussi passer par 10 % ou par 1 %. Pour 15 % de 60 : 10 % de 60 = 6 et 5 % de 60 = 3, donc 15 % de 60 = 9. Cette méthode est pratique en calcul mental.",
              ],
              box: { label: "Formule", text: "t % d'une quantité Q = Q × t/100." },
            },
            {
              heading: "Calculer un pourcentage",
              paragraphs: [
                "Pour savoir quel pourcentage une partie représente dans un total, on divise la partie par le total, puis on multiplie par 100. Dans le même collège, 117 élèves sur 520 viennent en bus : 117 ÷ 520 = 0,225, et 0,225 × 100 = 22,5. Donc 22,5 % des élèves viennent en bus.",
                "On peut aussi utiliser un tableau de proportionnalité : 520 élèves → 117 et 100 → t. Les produits en croix donnent t = 117 × 100 ÷ 520 = 22,5. Vérifiez toujours que le résultat est raisonnable : une partie plus petite que le total donne un pourcentage inférieur à 100 %.",
              ],
              box: { label: "Formule", text: "Pourcentage = partie ÷ total × 100." },
            },
            {
              heading: "Augmentations et réductions",
              paragraphs: [
                "Un pull à 40 € est soldé à -30 %. La réduction vaut 30 % de 40 €, soit 40 × 0,3 = 12 €. Le nouveau prix est 40 - 12 = 28 €. On peut aller plus vite : payer 30 % de moins, c'est payer 70 % du prix, donc 40 × 0,7 = 28 €.",
                "De même, augmenter un prix de 20 %, c'est payer 120 % du prix, c'est-à-dire le multiplier par 1,2 : un abonnement de 15 € qui augmente de 20 % passe à 15 × 1,2 = 18 €. Attention : une hausse de 10 % suivie d'une baisse de 10 % ne ramène pas au prix de départ, car les deux pourcentages ne s'appliquent pas au même montant.",
              ],
              box: { label: "Règle", text: "Augmenter de t %, c'est multiplier par 1 + t/100 (par exemple × 1,2 pour + 20 %). Diminuer de t %, c'est multiplier par 1 - t/100 (par exemple × 0,7 pour - 30 %)." },
            },
          ],
          keyPoints: [
            "t % = t/100 : 50 % est la moitié, 25 % le quart, 10 % le dixième.",
            "Appliquer : t % de Q = Q × t/100.",
            "Calculer : pourcentage = partie ÷ total × 100.",
            "Une réduction de 30 % revient à multiplier par 0,7 ; une hausse de 20 % à multiplier par 1,2.",
            "Une hausse de 10 % puis une baisse de 10 % ne ramènent pas au prix de départ.",
          ],
          example: {
            statement: "Une classe de 28 élèves (données fictives) compte 25 % d'élèves qui pratiquent la natation. Par ailleurs, 7 élèves jouent d'un instrument de musique. a) Combien d'élèves pratiquent la natation ? b) Quel pourcentage des élèves joue d'un instrument ?",
            solution: [
              "a) 25 % de 28 = 28 × 25/100 = 28 × 0,25 = 7. On peut aussi dire : 25 %, c'est le quart, et 28 ÷ 4 = 7.",
              "7 élèves pratiquent la natation.",
              "b) Pourcentage = partie ÷ total × 100 = 7 ÷ 28 × 100 = 0,25 × 100 = 25.",
              "Conclusion : 7 élèves pratiquent la natation, et 25 % des élèves jouent d'un instrument.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez : a) 20 % de 45 ; b) 15 % de 80 ; c) 75 % de 120 ; d) 3 % de 250.",
              hint: "Multipliez la quantité par t/100. Pour c, pensez aussi aux trois quarts.",
              solution: [
                "a) 45 × 20/100 = 45 × 0,2 = 9.",
                "b) 80 × 15/100 = 80 × 0,15 = 12.",
                "c) 120 × 75/100 = 120 × 0,75 = 90 (ou les trois quarts de 120 : 120 ÷ 4 × 3 = 90).",
                "d) 250 × 3/100 = 250 × 0,03 = 7,5.",
                "Résultats : 9 ; 12 ; 90 ; 7,5.",
              ],
            },
            {
              level: 2,
              statement: "a) Dans une classe de 25 élèves, 9 pratiquent un sport en club. Quel pourcentage des élèves cela représente-t-il ? b) Un pull coûte 40 € et bénéficie d'une réduction de 30 %. Quel est son nouveau prix ? c) Un abonnement de 15 € par mois augmente de 20 %. Quel est son nouveau prix ?",
              hint: "Pour a, divisez la partie par le total, puis multipliez par 100. Pour b et c, calculez la réduction ou l'augmentation, puis retranchez-la ou ajoutez-la.",
              solution: [
                "a) 9 ÷ 25 × 100 = 0,36 × 100 = 36. Cela représente 36 % des élèves.",
                "b) Réduction : 40 × 0,3 = 12 €. Nouveau prix : 40 - 12 = 28 €. Contrôle : 40 × 0,7 = 28 €.",
                "c) Augmentation : 15 × 0,2 = 3 €. Nouveau prix : 15 + 3 = 18 €. Contrôle : 15 × 1,2 = 18 €.",
                "Résultats : 36 % ; 28 € ; 18 €.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un vélo coûte 300 € (données fictives). En mars, son prix augmente de 10 %. En juin, le nouveau prix baisse de 10 %. a) Calculez le prix du vélo après la hausse de mars. b) Calculez le prix après la baisse de juin. c) Léo affirme : « Le vélo est revenu à son prix de départ. » A-t-il raison ? Expliquez. d) Par rapport au prix de départ, de quel pourcentage le prix a-t-il finalement baissé ?",
              hint: "La baisse de juin s'applique au prix de mars, pas au prix de départ. Pour d, calculez la différence de prix, puis divisez-la par 300.",
              solution: [
                "a) Hausse : 10 % de 300 = 30 €. Prix en mars : 300 + 30 = 330 €.",
                "b) Baisse : 10 % de 330 = 33 €. Prix en juin : 330 - 33 = 297 €.",
                "c) Léo a tort : 297 € n'est pas égal à 300 €. La baisse de 10 % porte sur 330 €, un montant plus grand que 300 €, donc elle enlève plus que ce que la hausse avait ajouté (33 € au lieu de 30 €).",
                "d) Le prix a baissé de 300 - 297 = 3 €. Pourcentage : 3 ÷ 300 × 100 = 1.",
                "Conclusion : le vélo coûte 297 € en juin, soit une baisse de 1 % par rapport au prix de départ.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque pourcentage à la fraction ou à l'opération qui lui correspond.",
            pairs: [
              { left: "50 %", right: "La moitié" },
              { left: "25 %", right: "Le quart" },
              { left: "75 %", right: "Les trois quarts" },
              { left: "10 %", right: "Diviser par 10" },
              { left: "20 %", right: "Le cinquième" },
              { left: "100 %", right: "La totalité" },
            ],
          },
          quiz: [
            { q: "Combien vaut 30 % de 60 ?", options: ["18", "20", "30", "2"], answer: 0, why: "60 × 0,3 = 18. On peut aussi dire : 10 % de 60 = 6, donc 30 % de 60 = 3 × 6 = 18." },
            { q: "Dans un club de 40 membres, 10 sont des filles. Quel pourcentage des membres cela représente-t-il ?", options: ["10 %", "40 %", "4 %", "25 %"], answer: 3, why: "10 ÷ 40 × 100 = 25 : c'est le quart des membres." },
            { q: "Un article à 50 € baisse de 20 %. Son nouveau prix est :", options: ["30 €", "40 €", "48 €", "60 €"], answer: 1, why: "La réduction vaut 50 × 0,2 = 10 €, donc le nouveau prix est 50 - 10 = 40 €." },
            { q: "Augmenter un prix de 10 % revient à le multiplier par :", options: ["0,1", "10", "1,1", "0,9"], answer: 2, why: "On paie 100 % + 10 % = 110 % du prix, soit le prix multiplié par 1,1." },
            { q: "Un prix augmente de 10 %, puis le nouveau prix baisse de 10 %. Par rapport au prix de départ, le prix final a :", options: ["baissé", "augmenté", "pas changé"], answer: 0, why: "La baisse s'applique à un prix plus élevé : elle enlève plus que la hausse n'avait ajouté. Par exemple 100 € deviennent 110 €, puis 99 €." },
          ],
          trap: "Croire qu'une hausse de 10 % puis une baisse de 10 % s'annulent, ou diviser le total par la partie au lieu de la partie par le total pour calculer un pourcentage.",
          method: "Avant de calculer, estimez le résultat avec un pourcentage simple (10 %, 25 %, 50 %). Après le calcul, comparez : un résultat très éloigné de votre estimation signale une erreur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse-moyenne',
          title: 'La vitesse moyenne, une grandeur quotient',
          minutes: 35,
          objectives: [
            "Calculer une vitesse moyenne, une distance ou une durée à l'aide de la relation d = v × t.",
            "Convertir des durées (heures, minutes) et des vitesses (km/h et m/s).",
            "Reconnaître une grandeur quotient et une grandeur produit.",
          ],
          course: [
            {
              heading: "La vitesse moyenne",
              paragraphs: [
                "Un cycliste qui parcourt 45 km en 3 h ne roule pas toujours à la même vitesse : il ralentit dans les montées et accélère dans les descentes. Sa vitesse moyenne est la vitesse constante à laquelle il aurait dû rouler pour parcourir la même distance dans le même temps : 45 ÷ 3 = 15 km/h.",
                "La vitesse moyenne s'obtient en divisant la distance parcourue par la durée du parcours. L'unité dépend des unités choisies : avec des kilomètres et des heures, on obtient des kilomètres par heure (km/h) ; avec des mètres et des secondes, des mètres par seconde (m/s).",
                "Quand la vitesse est constante, la distance parcourue est proportionnelle à la durée, et la vitesse est le coefficient de proportionnalité. Un marcheur à 5 km/h parcourt 5 km en 1 h, 10 km en 2 h, 2,5 km en une demi-heure.",
              ],
              box: { label: "Formule", text: "v = d ÷ t, où d est la distance parcourue et t la durée. On en déduit d = v × t et t = d ÷ v." },
            },
            {
              heading: "Convertir les durées",
              paragraphs: [
                "Une heure compte 60 minutes, et non 100 : il ne faut donc pas confondre 1 h 30 min et 1,30 h. Pour convertir des minutes en heures, on divise par 60 : 30 min = 30/60 h = 0,5 h, 45 min = 0,75 h, 15 min = 0,25 h, 20 min = 1/3 h. Ainsi 1 h 30 min = 1,5 h et 2 h 15 min = 2,25 h.",
                "Dans l'autre sens, on multiplie la partie décimale par 60 : 2,5 h = 2 h + 0,5 × 60 min = 2 h 30 min, et 0,4 h = 0,4 × 60 = 24 min. Exemple : un cycliste parcourt 45 km en 1 h 30 min ; sa vitesse moyenne est 45 ÷ 1,5 = 30 km/h.",
              ],
              box: { label: "Repère", text: "15 min = 0,25 h ; 20 min = 1/3 h ; 30 min = 0,5 h ; 45 min = 0,75 h. Minutes → heures : diviser par 60. Heures décimales → minutes : multiplier par 60." },
            },
            {
              heading: "Convertir les vitesses",
              paragraphs: [
                "Pour passer des km/h aux m/s, on convertit la distance en mètres et la durée en secondes. 36 km/h signifie 36 km en 1 h, soit 36 000 m en 3 600 s. Donc 36 km/h = 36 000 ÷ 3 600 = 10 m/s. Comme 3 600 ÷ 1 000 = 3,6, on divise par 3,6 pour passer des km/h aux m/s.",
                "Dans l'autre sens, on multiplie par 3,6 : 25 m/s = 25 × 3,6 = 90 km/h. Exemple : un cycliste roule à 30 km/h, soit 30 ÷ 3,6 ≈ 8,3 m/s : il parcourt un peu plus de 8 mètres chaque seconde.",
              ],
              box: { label: "Règle", text: "km/h → m/s : diviser par 3,6. m/s → km/h : multiplier par 3,6. Exemple : 36 km/h = 10 m/s." },
            },
            {
              heading: "Grandeurs quotients et grandeurs produits",
              paragraphs: [
                "La vitesse est une grandeur quotient : elle s'obtient en divisant une grandeur (une distance) par une autre (une durée), et son unité, km/h ou m/s, porte la trace de cette division. Le prix au kilogramme (en €/kg), le débit d'un robinet (en L/min) ou la densité de population (en habitants par km²) sont d'autres grandeurs quotients.",
                "À l'inverse, une grandeur produit s'obtient en multipliant deux grandeurs. L'aire d'un rectangle (longueur × largeur, en m²) en est un exemple, tout comme l'énergie électrique consommée, exprimée en kilowattheures (kWh) : un appareil de 2 kW qui fonctionne 3 h consomme 2 × 3 = 6 kWh.",
              ],
            },
          ],
          keyPoints: [
            "v = d ÷ t ; d = v × t ; t = d ÷ v.",
            "Une heure compte 60 minutes : 1 h 30 min = 1,5 h et non 1,3 h.",
            "km/h → m/s : diviser par 3,6 ; m/s → km/h : multiplier par 3,6.",
            "La vitesse moyenne n'est pas la moyenne des vitesses : on divise la distance totale par la durée totale.",
            "Grandeur quotient : vitesse (km/h), prix au kg (€/kg). Grandeur produit : aire (m²), énergie (kWh).",
          ],
          example: {
            statement: "Un cycliste parcourt 45 km en 1 h 30 min. Calculez sa vitesse moyenne en km/h, puis en m/s (arrondie au dixième).",
            solution: [
              "On convertit la durée en heures : 30 min = 30/60 h = 0,5 h, donc 1 h 30 min = 1,5 h.",
              "v = d ÷ t = 45 ÷ 1,5 = 30 km/h.",
              "En m/s : 30 km/h = 30 000 m en 3 600 s, soit 30 000 ÷ 3 600 ≈ 8,3 m/s (on peut aussi calculer 30 ÷ 3,6).",
              "Conclusion : la vitesse moyenne du cycliste est de 30 km/h, soit environ 8,3 m/s.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Une voiture parcourt 240 km en 3 h. Quelle est sa vitesse moyenne ? b) Un marcheur avance à 5 km/h pendant 2 h 30 min. Quelle distance parcourt-il ? c) Un train roule à 300 km/h de moyenne. Combien de temps met-il pour parcourir 750 km ?",
              hint: "Utilisez v = d ÷ t, d = v × t ou t = d ÷ v, et convertissez 2 h 30 min en heures décimales.",
              solution: [
                "a) v = 240 ÷ 3 = 80 km/h.",
                "b) 2 h 30 min = 2,5 h. d = 5 × 2,5 = 12,5 km.",
                "c) t = 750 ÷ 300 = 2,5 h, soit 2 h 30 min.",
                "Résultats : 80 km/h ; 12,5 km ; 2 h 30 min.",
              ],
            },
            {
              level: 2,
              statement: "a) Convertissez en heures décimales : 2 h 15 min. b) Convertissez en minutes : 0,4 h. c) Convertissez 90 km/h en m/s. d) Convertissez 15 m/s en km/h. e) Une coureuse parcourt 10 km en 50 min. Quelle est sa vitesse moyenne en km/h ?",
              hint: "Pour e, convertissez 50 min en heures sous forme de fraction (50/60), ou cherchez la distance parcourue en 60 min par proportionnalité.",
              solution: [
                "a) 15 min = 15/60 h = 0,25 h, donc 2 h 15 min = 2,25 h.",
                "b) 0,4 h = 0,4 × 60 min = 24 min.",
                "c) 90 ÷ 3,6 = 25, donc 90 km/h = 25 m/s.",
                "d) 15 × 3,6 = 54, donc 15 m/s = 54 km/h.",
                "e) En 50 min, elle parcourt 10 km ; en 10 min, 2 km ; en 60 min, 12 km. Sa vitesse moyenne est 12 km/h (contrôle : 10 ÷ (50/60) = 10 × 60 ÷ 50 = 12).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Nora fait un aller-retour entre deux villes distantes de 120 km (données fictives). À l'aller, elle roule à 60 km/h de moyenne ; au retour, à cause des bouchons, à 40 km/h de moyenne. Son frère affirme : « Sa vitesse moyenne sur l'aller-retour est de 50 km/h, la moyenne de 60 et de 40. » a) Calculez la durée de l'aller, puis celle du retour. b) Calculez la vitesse moyenne réelle sur l'aller-retour. c) Le frère a-t-il raison ? Expliquez.",
              hint: "Utilisez t = d ÷ v pour chaque trajet. La vitesse moyenne sur l'aller-retour se calcule avec la distance totale et la durée totale.",
              solution: [
                "a) Aller : t = 120 ÷ 60 = 2 h. Retour : t = 120 ÷ 40 = 3 h.",
                "b) Distance totale : 120 + 120 = 240 km. Durée totale : 2 + 3 = 5 h. Vitesse moyenne : 240 ÷ 5 = 48 km/h.",
                "c) Le frère a tort : la vitesse moyenne vaut 48 km/h, et non 50 km/h.",
                "Nora roule plus longtemps à 40 km/h (3 h) qu'à 60 km/h (2 h) : la vitesse lente « pèse » davantage dans la moyenne. On ne calcule donc pas une vitesse moyenne en faisant la moyenne des vitesses.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur la vitesse et les conversions.",
            statements: [
              { text: "1 h 30 min = 1,3 h.", true: false, why: "30 min = 30/60 h = 0,5 h, donc 1 h 30 min = 1,5 h." },
              { text: "On calcule une vitesse moyenne en divisant la distance par la durée.", true: true, why: "C'est la formule v = d ÷ t." },
              { text: "36 km/h = 10 m/s.", true: true, why: "36 000 m en 3 600 s, soit 10 m chaque seconde." },
              { text: "Pour passer des m/s aux km/h, on divise par 3,6.", true: false, why: "On multiplie par 3,6 : 10 m/s = 36 km/h." },
              { text: "45 min = 0,75 h.", true: true, why: "45/60 = 3/4 = 0,75." },
              { text: "La vitesse moyenne d'un aller à 60 km/h et d'un retour à 40 km/h vaut toujours 50 km/h.", true: false, why: "On roule plus longtemps à 40 km/h : sur une même distance, la vitesse moyenne vaut 48 km/h." },
              { text: "Le kilowattheure (kWh) est l'unité d'une grandeur produit.", true: true, why: "L'énergie consommée s'obtient en multipliant une puissance (kW) par une durée (h)." },
            ],
          },
          quiz: [
            { q: "Une voiture parcourt 150 km en 2 h. Sa vitesse moyenne est :", options: ["300 km/h", "75 km/h", "152 km/h", "50 km/h"], answer: 1, why: "v = d ÷ t = 150 ÷ 2 = 75 km/h." },
            { q: "Combien d'heures représentent 1 h 15 min ?", options: ["1,15 h", "1,5 h", "1,25 h", "1,75 h"], answer: 2, why: "15 min = 15/60 h = 0,25 h, donc 1 h 15 min = 1,25 h." },
            { q: "Un piéton marche à 4 km/h pendant 45 min. Quelle distance parcourt-il ?", options: ["3 km", "1,8 km", "4,5 km", "180 km"], answer: 0, why: "45 min = 0,75 h, et d = v × t = 4 × 0,75 = 3 km." },
            { q: "36 km/h correspondent à :", options: ["36 m/s", "3,6 m/s", "100 m/s", "10 m/s"], answer: 3, why: "36 km/h = 36 000 m en 3 600 s, soit 36 ÷ 3,6 = 10 m/s." },
            { q: "La vitesse est une grandeur quotient, car on l'obtient en :", options: ["multipliant une distance par une durée", "divisant une distance par une durée", "additionnant des distances"], answer: 1, why: "v = d ÷ t : c'est le quotient d'une distance par une durée, d'où l'unité km/h (kilomètres par heure)." },
          ],
          trap: "Écrire 1 h 30 min = 1,3 h au lieu de 1,5 h, ou calculer la vitesse moyenne d'un trajet en faisant la moyenne des vitesses au lieu de diviser la distance totale par la durée totale.",
          method: "Écrivez la formule avant de remplacer (v = d ÷ t), convertissez toutes les durées en heures décimales, puis contrôlez l'unité et la vraisemblance du résultat : un piéton ne marche pas à 50 km/h.",
        },
      ],
    },
    /* ================================================================== */
    /* LES PUISSANCES                                                       */
    /* ================================================================== */
    {
      id: 'puissances',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'puissances-nombre',
          title: 'Puissances d\'un nombre : exposants positifs et négatifs',
          minutes: 30,
          objectives: [
            "Utiliser la notation puissance pour écrire un produit de facteurs égaux.",
            "Calculer une puissance d'exposant positif, y compris d'un nombre négatif.",
            "Calculer une puissance d'exposant négatif comme l'inverse d'une puissance d'exposant positif.",
            "Respecter les priorités opératoires dans un calcul comportant des puissances.",
          ],
          course: [
            {
              heading: "Puissance d'exposant positif",
              paragraphs: [
                "Pour écrire plus vite un produit de facteurs tous égaux, on utilise la notation puissance. Par exemple 2 × 2 × 2 × 2 × 2 s'écrit 2⁵ et se lit « 2 puissance 5 » ou « 2 exposant 5 ». Le petit nombre écrit en haut, ici 5, s'appelle l'exposant : il indique le nombre de facteurs. Ainsi 2⁵ = 32.",
                "Vous connaissez déjà deux cas particuliers : a² = a × a se lit « a au carré » (comme l'aire d'un carré de côté a) et a³ = a × a × a se lit « a au cube » (comme le volume d'un cube d'arête a). Par convention, a¹ = a et, pour a non nul, a⁰ = 1.",
                "Ne confondez pas puissance et multiplication : 3⁴ = 3 × 3 × 3 × 3 = 81, alors que 3 × 4 = 12. Les puissances grandissent très vite : 2¹⁰ = 1 024, déjà plus de mille.",
              ],
              box: { label: "Définition", text: "Pour un nombre a et un entier n ≥ 1 : aⁿ = a × a × ... × a, avec n facteurs égaux à a. Par convention a¹ = a et, si a n'est pas nul, a⁰ = 1." },
            },
            {
              heading: "Puissances d'un nombre négatif : attention aux parenthèses",
              paragraphs: [
                "On peut élever un nombre négatif à une puissance, en appliquant la règle des signes de la multiplication. (-2)² = (-2) × (-2) = 4 ; (-2)³ = (-2) × (-2) × (-2) = -8 ; (-2)⁴ = 16. Avec un nombre pair de facteurs négatifs, le résultat est positif ; avec un nombre impair, il est négatif.",
                "Les parenthèses changent tout. Dans (-3)², c'est le nombre -3 qui est élevé au carré : (-3)² = (-3) × (-3) = 9. Dans -3², l'exposant ne porte que sur 3 : -3² = -(3 × 3) = -9. La calculatrice respecte cette règle, il faut donc bien taper les parenthèses.",
              ],
              box: { label: "Règle", text: "Une puissance d'un nombre négatif est positive si l'exposant est pair, négative si l'exposant est impair. (-3)² = 9 mais -3² = -9." },
            },
            {
              heading: "Puissance d'exposant négatif",
              paragraphs: [
                "Regardez la suite 2³ = 8, 2² = 4, 2¹ = 2, 2⁰ = 1 : chaque fois que l'exposant diminue de 1, on divise par 2. En continuant, on obtient 2⁻¹ = 1/2, 2⁻² = 1/4, 2⁻³ = 1/8. On définit ainsi les puissances d'exposant négatif.",
                "Pour un nombre a non nul et un entier n positif, a⁻ⁿ est l'inverse de aⁿ : a⁻ⁿ = 1/aⁿ. Par exemple 5⁻² = 1/5² = 1/25 = 0,04 et 10⁻¹ = 1/10 = 0,1. Un exposant négatif ne rend pas le nombre négatif : 2⁻³ = 0,125 est un nombre positif, plus petit que 1.",
              ],
              box: { label: "Définition", text: "Pour a non nul et n entier positif : a⁻ⁿ = 1/aⁿ, l'inverse de aⁿ. En particulier a⁻¹ = 1/a." },
            },
            {
              heading: "Calculer avec des puissances",
              paragraphs: [
                "Dans un calcul, on effectue d'abord ce qui est entre parenthèses, puis les puissances, puis les multiplications et les divisions, enfin les additions et les soustractions. Exemple : 5 + 2 × 3² = 5 + 2 × 9 = 5 + 18 = 23. Avec des parenthèses, le résultat change : (5 + 2) × 3² = 7 × 9 = 63.",
                "Pour multiplier des puissances d'un même nombre, il suffit de compter les facteurs : 2³ × 2² = (2 × 2 × 2) × (2 × 2) = 2⁵, car il y a 3 + 2 = 5 facteurs. En revanche, il n'existe aucune règle de ce genre pour une addition : 2³ + 2² = 8 + 4 = 12, alors que 2⁵ = 32.",
              ],
              box: { label: "À retenir", text: "Priorités : parenthèses, puissances, multiplications et divisions, additions et soustractions. Pour un produit de puissances d'un même nombre, on compte les facteurs ; pour une somme, on calcule chaque puissance." },
            },
          ],
          keyPoints: [
            "aⁿ est le produit de n facteurs égaux à a ; a¹ = a et, pour a non nul, a⁰ = 1.",
            "3⁴ = 3 × 3 × 3 × 3 = 81 : ne confondez pas avec 3 × 4.",
            "(-3)² = 9 mais -3² = -9 : l'exposant porte seulement sur ce qui est juste devant lui.",
            "Exposant pair : résultat positif ; exposant impair d'un nombre négatif : résultat négatif.",
            "a⁻ⁿ = 1/aⁿ : un exposant négatif donne un inverse, pas un nombre négatif.",
            "Les puissances se calculent avant les multiplications et les additions.",
          ],
          example: {
            statement: "Calculez A = 3 × 2⁴ - 5², B = (-3)³ et C = 4⁻² (sous forme de fraction, puis de nombre décimal).",
            solution: [
              "A : on calcule d'abord les puissances, 2⁴ = 16 et 5² = 25. Puis A = 3 × 16 - 25 = 48 - 25 = 23.",
              "B = (-3) × (-3) × (-3). Trois facteurs négatifs, en nombre impair : le résultat est négatif. B = -27.",
              "C = 1/4² = 1/16 = 0,0625.",
              "Résultats : A = 23 ; B = -27 ; C = 1/16 = 0,0625.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez chaque produit sous forme d'une puissance, puis calculez-le : a) 5 × 5 × 5 ; b) 2 × 2 × 2 × 2 × 2 × 2 ; c) (-1) × (-1) × (-1) × (-1) ; d) 7 × 7.",
              hint: "Comptez le nombre de facteurs égaux : ce nombre est l'exposant.",
              solution: [
                "a) 5 × 5 × 5 = 5³ = 125.",
                "b) 2 × 2 × 2 × 2 × 2 × 2 = 2⁶ = 64.",
                "c) (-1) × (-1) × (-1) × (-1) = (-1)⁴ = 1 (quatre facteurs négatifs, en nombre pair).",
                "d) 7 × 7 = 7² = 49.",
              ],
            },
            {
              level: 2,
              statement: "Calculez sans calculatrice : a) (-2)⁵ ; b) -2⁴ ; c) (-3)⁴ ; d) 2⁻³ ; e) 5⁻² ; f) 2 + 3 × 4². Donnez les résultats d et e sous forme décimale.",
              hint: "Repérez si l'exposant porte sur un nombre entre parenthèses ou non. Pour un exposant négatif, calculez l'inverse de la puissance positive.",
              solution: [
                "a) (-2)⁵ = (-2) × (-2) × (-2) × (-2) × (-2) = -32 (cinq facteurs négatifs, en nombre impair).",
                "b) -2⁴ = -(2 × 2 × 2 × 2) = -16 : l'exposant ne porte que sur 2.",
                "c) (-3)⁴ = (-3) × (-3) × (-3) × (-3) = 81.",
                "d) 2⁻³ = 1/2³ = 1/8 = 0,125.",
                "e) 5⁻² = 1/5² = 1/25 = 0,04.",
                "f) 2 + 3 × 4² = 2 + 3 × 16 = 2 + 48 = 50.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans une expérience (données fictives), une bactérie se divise en deux toutes les 20 minutes : 1 bactérie en donne 2, puis 4, et ainsi de suite. On part d'une seule bactérie. a) Combien y a-t-il de bactéries au bout d'une heure ? b) Au bout de 4 heures ? Écrivez le résultat sous forme d'une puissance de 2, puis calculez-le. c) Comparez 2¹⁰ et 10³. d) On prend maintenant une feuille de papier : on la coupe en deux et l'on garde une moitié, puis on recommence avec ce morceau. Quelle fraction de la feuille reste-t-il après 5 découpages ? Écrivez-la avec une puissance de 2 d'exposant négatif.",
              hint: "Comptez le nombre de divisions : en une heure, il y a 3 périodes de 20 minutes. Chaque division multiplie le nombre de bactéries par 2 ; chaque découpage multiplie la part de la feuille par 1/2.",
              solution: [
                "a) En 1 h, il y a 60 ÷ 20 = 3 divisions. Nombre de bactéries : 2 × 2 × 2 = 2³ = 8.",
                "b) En 4 h, il y a 4 × 3 = 12 divisions. Nombre de bactéries : 2¹² = 4 096.",
                "c) 2¹⁰ = 1 024 et 10³ = 1 000 : 2¹⁰ est un peu plus grand que 10³.",
                "d) Après chaque découpage, il reste la moitié du morceau précédent. Après 5 découpages : 1/2 × 1/2 × 1/2 × 1/2 × 1/2 = 1/2⁵ = 1/32.",
                "Avec un exposant négatif : 1/2⁵ = 2⁻⁵. Il reste 2⁻⁵ = 1/32 de la feuille, soit 0,031 25.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque égalité sur les puissances.",
            statements: [
              { text: "2³ = 6.", true: false, why: "2³ = 2 × 2 × 2 = 8. Le calcul 2 × 3 = 6 est une confusion fréquente." },
              { text: "(-1)¹⁰ = 1.", true: true, why: "L'exposant 10 est pair : le résultat est positif." },
              { text: "-5² = 25.", true: false, why: "L'exposant ne porte que sur 5 : -5² = -25. C'est (-5)² qui vaut 25." },
              { text: "Pour tout nombre a non nul, a⁰ = 1.", true: true, why: "C'est une convention, cohérente avec la suite 2² = 4, 2¹ = 2, 2⁰ = 1." },
              { text: "3⁻² est un nombre négatif.", true: false, why: "3⁻² = 1/3² = 1/9, un nombre positif." },
              { text: "2³ × 2⁴ = 2⁷.", true: true, why: "On a 3 + 4 = 7 facteurs égaux à 2." },
              { text: "2³ + 2⁴ = 2⁷.", true: false, why: "2³ + 2⁴ = 8 + 16 = 24, alors que 2⁷ = 128 : pas de règle pour une somme." },
              { text: "(-2)³ = -8.", true: true, why: "Trois facteurs négatifs, en nombre impair : le résultat est négatif." },
            ],
          },
          quiz: [
            { q: "Que vaut 2⁴ ?", options: ["8", "16", "6", "24"], answer: 1, why: "2⁴ = 2 × 2 × 2 × 2 = 16." },
            { q: "Que vaut (-3)² ?", options: ["-9", "-6", "6", "9"], answer: 3, why: "(-3)² = (-3) × (-3) = 9 : le produit de deux nombres négatifs est positif." },
            { q: "Que vaut -3² ?", options: ["-9", "9", "-6", "6"], answer: 0, why: "Sans parenthèses, l'exposant ne porte que sur 3 : -3² = -(3 × 3) = -9." },
            { q: "Que vaut 2⁻² ?", options: ["-4", "1/4", "-1/4", "4"], answer: 1, why: "2⁻² = 1/2² = 1/4. Un exposant négatif donne un inverse, pas un nombre négatif." },
            { q: "Que vaut 3 + 2 × 5² ?", options: ["125", "253", "53", "103"], answer: 2, why: "On calcule d'abord la puissance : 5² = 25, puis 2 × 25 = 50, enfin 3 + 50 = 53." },
          ],
          trap: "Confondre puissance et produit (écrire 2³ = 6), ou oublier que -3² = -9 alors que (-3)² = 9 : l'exposant ne porte que sur ce qui est juste devant lui.",
          method: "Avant de calculer une puissance, réécrivez-la sous forme de produit (3⁴ = 3 × 3 × 3 × 3) et entourez ce sur quoi porte l'exposant : un nombre seul ou toute une parenthèse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'puissances-de-dix',
          title: 'Les puissances de 10 et les préfixes',
          minutes: 30,
          objectives: [
            "Passer de l'écriture décimale à l'écriture sous forme de puissance de 10, et inversement.",
            "Calculer des produits et des quotients de puissances de 10.",
            "Multiplier un nombre décimal par une puissance de 10.",
            "Utiliser les préfixes de nano à giga pour convertir des unités.",
          ],
          course: [
            {
              heading: "Les puissances de 10 d'exposant positif",
              paragraphs: [
                "Pour un entier n positif, 10ⁿ = 10 × 10 × ... × 10 (n facteurs) s'écrit avec un 1 suivi de n zéros. Ainsi 10² = 100, 10³ = 1 000 (mille), 10⁶ = 1 000 000 (un million) et 10⁹ = 1 000 000 000 (un milliard). Par convention, 10⁰ = 1 et 10¹ = 10.",
                "L'exposant donne donc directement le nombre de zéros. C'est très pratique pour écrire de grands nombres sans se tromper : 10¹² (un 1 suivi de douze zéros) se lit « mille milliards ».",
              ],
              box: { label: "Propriété", text: "Pour n entier positif, 10ⁿ s'écrit avec un 1 suivi de n zéros. 10⁰ = 1." },
            },
            {
              heading: "Les puissances de 10 d'exposant négatif",
              paragraphs: [
                "Comme pour tout nombre non nul, 10⁻ⁿ est l'inverse de 10ⁿ : 10⁻ⁿ = 1/10ⁿ. Ainsi 10⁻¹ = 1/10 = 0,1 ; 10⁻² = 1/100 = 0,01 ; 10⁻³ = 1/1 000 = 0,001.",
                "En écriture décimale, 10⁻ⁿ s'écrit avec le chiffre 1 placé au n-ième rang après la virgule : 10⁻⁵ = 0,000 01, le 1 est le cinquième chiffre après la virgule. Attention : 10⁻³ n'est pas un nombre négatif, c'est un nombre positif très petit (un millième).",
              ],
              box: { label: "Propriété", text: "Pour n entier positif, 10⁻ⁿ = 1/10ⁿ = 0,0...01, le chiffre 1 étant au n-ième rang après la virgule. Exemple : 10⁻³ = 0,001." },
            },
            {
              heading: "Calculer avec les puissances de 10",
              paragraphs: [
                "Pour multiplier deux puissances de 10, on additionne les exposants : 10³ × 10⁴ = 10⁷, car on met bout à bout 3 facteurs 10 et 4 facteurs 10. Cela reste vrai avec des exposants négatifs : 10⁵ × 10⁻² = 10³, puisque 100 000 × 0,01 = 1 000.",
                "Pour diviser, on soustrait les exposants : 10⁸ ÷ 10³ = 10⁵ et 10² ÷ 10⁶ = 10⁻⁴. Pour une puissance de puissance, on multiplie les exposants : (10³)² = 10³ × 10³ = 10⁶.",
                "Multiplier un nombre décimal par 10ⁿ décale la virgule de n rangs vers la droite : 3,7 × 10³ = 3 700. Multiplier par 10⁻ⁿ revient à diviser par 10ⁿ, et décale la virgule de n rangs vers la gauche : 52 × 10⁻³ = 0,052.",
              ],
              box: { label: "Formule", text: "Pour n et p entiers relatifs : 10ⁿ × 10ᵖ = 10ⁿ⁺ᵖ ; 10ⁿ ÷ 10ᵖ = 10ⁿ⁻ᵖ ; (10ⁿ)ᵖ a pour exposant n × p (on multiplie les exposants)." },
            },
            {
              heading: "Les préfixes des unités",
              paragraphs: [
                "Les préfixes placés devant une unité (mètre, gramme, octet, watt...) indiquent une puissance de 10. Pour les grandes valeurs : kilo (k) = 10³, méga (M) = 10⁶, giga (G) = 10⁹. Par exemple 1 km = 10³ m, et 1 Go (gigaoctet) = 10⁹ octets.",
                "Pour les petites valeurs : milli (m) = 10⁻³, micro (µ) = 10⁻⁶, nano (n) = 10⁻⁹. Ainsi 1 mm = 10⁻³ m, 1 µm (un micromètre) = 10⁻⁶ m, et 1 nm (un nanomètre) = 10⁻⁹ m. Vous connaissez aussi hecto (10²), déca (10¹), déci (10⁻¹) et centi (10⁻²).",
              ],
              box: { label: "Repère", text: "giga (G) 10⁹ ; méga (M) 10⁶ ; kilo (k) 10³ ; hecto (h) 10² ; déca (da) 10¹ ; déci (d) 10⁻¹ ; centi (c) 10⁻² ; milli (m) 10⁻³ ; micro (µ) 10⁻⁶ ; nano (n) 10⁻⁹." },
            },
          ],
          keyPoints: [
            "10ⁿ : un 1 suivi de n zéros. 10⁰ = 1.",
            "10⁻ⁿ = 1/10ⁿ : le 1 est au n-ième rang après la virgule (10⁻³ = 0,001), et ce nombre est positif.",
            "10ⁿ × 10ᵖ = 10ⁿ⁺ᵖ ; 10ⁿ ÷ 10ᵖ = 10ⁿ⁻ᵖ ; (10ⁿ)ᵖ : on multiplie les exposants.",
            "× 10ⁿ : la virgule se décale de n rangs vers la droite ; × 10⁻ⁿ : de n rangs vers la gauche.",
            "Préfixes : giga 10⁹, méga 10⁶, kilo 10³, milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹.",
          ],
          example: {
            statement: "a) Donnez l'écriture décimale de 10⁵ et de 10⁻³. b) Écrivez sous la forme d'une seule puissance de 10 : A = 10⁴ × 10⁻⁷ et B = 10⁸ ÷ 10³. c) Calculez 3,7 × 10³ et 52 × 10⁻².",
            solution: [
              "a) 10⁵ = 100 000 (un 1 suivi de 5 zéros) et 10⁻³ = 0,001 (le 1 au troisième rang après la virgule).",
              "b) A = 10⁴ × 10⁻⁷ = 10⁴⁺⁽⁻⁷⁾ = 10⁻³. On additionne les exposants : 4 + (-7) = -3.",
              "B = 10⁸ ÷ 10³ = 10⁸⁻³ = 10⁵. On soustrait les exposants.",
              "c) 3,7 × 10³ : la virgule se décale de 3 rangs vers la droite, donc 3,7 × 10³ = 3 700.",
              "52 × 10⁻² : la virgule se décale de 2 rangs vers la gauche, donc 52 × 10⁻² = 0,52.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Donnez l'écriture décimale de : 10⁶ ; 10⁻² ; 10⁻⁵ ; 10⁰. b) Écrivez sous forme d'une puissance de 10 : 1 000 ; 0,000 1 ; 10 000 000.",
              hint: "Pour un exposant positif, comptez les zéros. Pour un exposant négatif, repérez le rang du chiffre 1 après la virgule.",
              solution: [
                "a) 10⁶ = 1 000 000 ; 10⁻² = 0,01 ; 10⁻⁵ = 0,000 01 ; 10⁰ = 1.",
                "b) 1 000 = 10³ (trois zéros).",
                "0,000 1 = 10⁻⁴ (le 1 est au quatrième rang après la virgule).",
                "10 000 000 = 10⁷ (sept zéros).",
              ],
            },
            {
              level: 2,
              statement: "a) Écrivez sous forme d'une seule puissance de 10 : 10³ × 10⁵ ; 10⁻² × 10⁶ ; 10⁷ ÷ 10⁹ ; (10³)² ; 10⁴ × 10⁻⁴. b) Donnez l'écriture décimale de : 4,5 × 10² ; 72 × 10⁻³ ; 0,6 × 10⁴.",
              hint: "Pour un produit, additionnez les exposants ; pour un quotient, soustrayez-les. Pour la partie b, décalez la virgule vers la droite si l'exposant est positif, vers la gauche s'il est négatif.",
              solution: [
                "a) 10³ × 10⁵ = 10³⁺⁵ = 10⁸.",
                "10⁻² × 10⁶ = 10⁻²⁺⁶ = 10⁴.",
                "10⁷ ÷ 10⁹ = 10⁷⁻⁹ = 10⁻².",
                "(10³)² = 10³ × 10³ = 10⁶. Et 10⁴ × 10⁻⁴ = 10⁰ = 1.",
                "b) 4,5 × 10² = 450 ; 72 × 10⁻³ = 0,072 ; 0,6 × 10⁴ = 6 000.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Convertissez 5 km en mètres et 3 mg en grammes, en utilisant une puissance de 10. b) Un cheveu a un diamètre de 80 µm (données fictives). Exprimez ce diamètre en mètres, sous forme décimale. c) Un disque dur a une capacité de 500 Go et une photo occupe 4 Mo (données fictives). Combien de photos peut-on stocker au maximum sur ce disque ?",
              hint: "Remplacez chaque préfixe par sa puissance de 10 : k = 10³, m = 10⁻³, µ = 10⁻⁶, M = 10⁶, G = 10⁹. Pour c, divisez la capacité du disque par la taille d'une photo, en octets.",
              solution: [
                "a) 5 km = 5 × 10³ m = 5 000 m. Et 3 mg = 3 × 10⁻³ g = 0,003 g.",
                "b) 80 µm = 80 × 10⁻⁶ m = 0,000 08 m (on décale la virgule de 6 rangs vers la gauche).",
                "c) Capacité : 500 Go = 500 × 10⁹ octets. Taille d'une photo : 4 Mo = 4 × 10⁶ octets.",
                "Nombre de photos : (500 × 10⁹) ÷ (4 × 10⁶) = (500 ÷ 4) × (10⁹ ÷ 10⁶) = 125 × 10³ = 125 000.",
                "Conclusion : 5 000 m ; 0,003 g ; 0,000 08 m ; on peut stocker au maximum 125 000 photos.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque préfixe à la puissance de 10 qu'il représente.",
            pairs: [
              { left: "giga (G)", right: "10⁹" },
              { left: "méga (M)", right: "10⁶" },
              { left: "kilo (k)", right: "10³" },
              { left: "milli (m)", right: "10⁻³" },
              { left: "micro (µ)", right: "10⁻⁶" },
              { left: "nano (n)", right: "10⁻⁹" },
            ],
          },
          quiz: [
            { q: "Quelle est l'écriture décimale de 10⁻³ ?", options: ["0,000 1", "-1 000", "0,001", "0,003"], answer: 2, why: "10⁻³ = 1/1 000 = 0,001 : le 1 est au troisième rang après la virgule." },
            { q: "10⁵ × 10⁻² est égal à :", options: ["10⁻¹⁰", "10³", "10⁷", "10⁻³"], answer: 1, why: "Pour un produit, on additionne les exposants : 5 + (-2) = 3." },
            { q: "Le préfixe micro (µ) correspond à :", options: ["10⁻⁶", "10⁻³", "10⁶", "10⁻⁹"], answer: 0, why: "Un micromètre vaut un millionième de mètre : 1 µm = 10⁻⁶ m." },
            { q: "Que vaut 10⁸ ÷ 10³ ?", options: ["10¹¹", "10²⁴", "1⁵", "10⁵"], answer: 3, why: "Pour un quotient, on soustrait les exposants : 8 - 3 = 5." },
            { q: "Que vaut 4,7 × 10³ ?", options: ["4,700", "470", "4 700", "47 000"], answer: 2, why: "Multiplier par 10³ décale la virgule de 3 rangs vers la droite : 4,7 devient 4 700." },
          ],
          trap: "Croire que 10⁻³ est un nombre négatif, ou multiplier les exposants au lieu de les additionner dans un produit (10³ × 10⁴ = 10⁷, et non 10¹²).",
          method: "Pour vérifier un calcul avec des puissances de 10, revenez à l'écriture décimale sur un exemple simple : 10² × 10³ = 100 × 1 000 = 100 000 = 10⁵, ce qui confirme qu'on additionne les exposants.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecriture-scientifique',
          title: 'L\'écriture scientifique',
          minutes: 30,
          objectives: [
            "Reconnaître et donner l'écriture scientifique d'un nombre décimal.",
            "Comparer des nombres écrits en notation scientifique.",
            "Calculer avec des nombres en écriture scientifique et utiliser des ordres de grandeur.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'écriture scientifique ?",
              paragraphs: [
                "Les sciences manipulent des nombres très grands (la distance de la Terre au Soleil, environ 150 millions de kilomètres) ou très petits (la taille d'un atome, de l'ordre d'un dixième de milliardième de mètre). Pour les écrire et les comparer facilement, on utilise l'écriture scientifique, appelée aussi notation scientifique.",
                "Un nombre est en écriture scientifique quand il s'écrit a × 10ⁿ, où a est un nombre décimal compris entre 1 (inclus) et 10 (exclu) et n un entier relatif. Autrement dit, a a exactement un chiffre non nul avant la virgule. Ainsi 3,2 × 10⁵ et 7 × 10⁻³ sont en écriture scientifique, mais pas 32 × 10⁴ (32 dépasse 10), ni 0,5 × 10³ (0,5 est inférieur à 1).",
              ],
              box: { label: "Définition", text: "L'écriture scientifique d'un nombre décimal positif est a × 10ⁿ, avec 1 ≤ a < 10 et n entier relatif. Chaque nombre décimal non nul a une seule écriture scientifique." },
            },
            {
              heading: "Obtenir l'écriture scientifique",
              paragraphs: [
                "Pour un grand nombre, on place la virgule après le premier chiffre non nul, puis on compte de combien de rangs on l'a déplacée vers la gauche : c'est l'exposant, positif. 45 000 = 4,5 × 10⁴ (la virgule a reculé de 4 rangs) et 37 200 000 = 3,72 × 10⁷.",
                "Pour un petit nombre, on déplace la virgule vers la droite jusqu'après le premier chiffre non nul ; l'exposant est négatif. 0,000 32 = 3,2 × 10⁻⁴ (la virgule a avancé de 4 rangs) et 0,07 = 7 × 10⁻². Contrôle : un nombre plus grand que 10 a un exposant positif, un nombre compris entre 0 et 1 a un exposant négatif.",
                "Si le nombre est déjà écrit avec une puissance de 10, on transforme seulement la partie décimale : 42 × 10⁵ = 4,2 × 10¹ × 10⁵ = 4,2 × 10⁶, et 0,8 × 10⁻³ = 8 × 10⁻¹ × 10⁻³ = 8 × 10⁻⁴.",
              ],
              box: { label: "Méthode", text: "Placez la virgule juste après le premier chiffre non nul. Le nombre de rangs du déplacement donne l'exposant : positif pour un nombre supérieur à 10, négatif pour un nombre inférieur à 1." },
            },
            {
              heading: "Comparer et calculer",
              paragraphs: [
                "Pour comparer deux nombres positifs en écriture scientifique, on compare d'abord les exposants : le plus grand exposant donne le plus grand nombre. 1,1 × 10⁴ = 11 000 est plus grand que 9,9 × 10³ = 9 900, même si 1,1 est plus petit que 9,9. Si les exposants sont égaux, on compare les nombres a.",
                "Pour multiplier, on multiplie les nombres décimaux entre eux et les puissances de 10 entre elles : (3 × 10⁴) × (2 × 10⁵) = 6 × 10⁹. Si le premier facteur obtenu dépasse 10, on rectifie : (5 × 10³) × (4 × 10²) = 20 × 10⁵ = 2 × 10⁶.",
                "Les calculatrices utilisent aussi cette écriture. Selon les modèles, le nombre 3,2 × 10⁻⁴ peut s'afficher 3.2E-4 : le E signifie « fois 10 puissance ». Pour un ordre de grandeur, on garde la puissance de 10 la plus proche : la vitesse de la lumière dans le vide, environ 300 000 km/s, soit 3 × 10⁵ km/s, est de l'ordre de 10⁵ km/s.",
              ],
              box: { label: "À retenir", text: "Comparer : d'abord les exposants, puis les nombres a. Multiplier : (a × 10ⁿ) × (b × 10ᵖ) = (a × b) × 10ⁿ⁺ᵖ, puis on rectifie si a × b dépasse 10." },
            },
          ],
          keyPoints: [
            "Écriture scientifique : a × 10ⁿ avec 1 ≤ a < 10 et n entier relatif.",
            "Grand nombre : exposant positif (45 000 = 4,5 × 10⁴) ; nombre entre 0 et 1 : exposant négatif (0,000 32 = 3,2 × 10⁻⁴).",
            "32 × 10⁴ et 0,5 × 10³ ne sont pas des écritures scientifiques.",
            "Pour comparer, on regarde d'abord l'exposant, puis le nombre a.",
            "Pour multiplier, on multiplie les a entre eux et on additionne les exposants, puis on rectifie si besoin.",
          ],
          example: {
            statement: "a) Donnez l'écriture scientifique de A = 37 200 000 et de B = 0,000 058. b) Calculez C = (4 × 10⁵) × (6 × 10⁻²) et donnez le résultat en écriture scientifique.",
            solution: [
              "a) Pour A, on place la virgule après le 3 : elle recule de 7 rangs. A = 3,72 × 10⁷.",
              "Pour B, on place la virgule après le 5 : elle avance de 5 rangs. B = 5,8 × 10⁻⁵.",
              "b) On regroupe : C = (4 × 6) × (10⁵ × 10⁻²) = 24 × 10³.",
              "24 n'est pas compris entre 1 et 10 : on écrit 24 = 2,4 × 10¹, donc C = 2,4 × 10¹ × 10³ = 2,4 × 10⁴.",
              "Résultats : A = 3,72 × 10⁷ ; B = 5,8 × 10⁻⁵ ; C = 2,4 × 10⁴ (soit 24 000).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'écriture scientifique des nombres suivants : a) 6 400 ; b) 0,07 ; c) 503 000 000 ; d) 0,000 912.",
              hint: "Placez la virgule juste après le premier chiffre non nul et comptez de combien de rangs elle s'est déplacée.",
              solution: [
                "a) 6 400 = 6,4 × 10³ (la virgule recule de 3 rangs).",
                "b) 0,07 = 7 × 10⁻² (la virgule avance de 2 rangs).",
                "c) 503 000 000 = 5,03 × 10⁸ (la virgule recule de 8 rangs).",
                "d) 0,000 912 = 9,12 × 10⁻⁴ (la virgule avance de 4 rangs).",
              ],
            },
            {
              level: 2,
              statement: "a) Donnez l'écriture scientifique de : 42 × 10⁵ ; 0,8 × 10⁻³ ; 350 × 10⁻⁶. b) Rangez dans l'ordre croissant : 2,1 × 10⁻³ ; 9 × 10⁻⁴ ; 1,5 × 10⁻³.",
              hint: "Pour a, écrivez d'abord la partie décimale en écriture scientifique, puis additionnez les exposants. Pour b, comparez d'abord les exposants.",
              solution: [
                "a) 42 × 10⁵ = 4,2 × 10¹ × 10⁵ = 4,2 × 10⁶.",
                "0,8 × 10⁻³ = 8 × 10⁻¹ × 10⁻³ = 8 × 10⁻⁴.",
                "350 × 10⁻⁶ = 3,5 × 10² × 10⁻⁶ = 3,5 × 10⁻⁴.",
                "b) L'exposant -4 est plus petit que -3 : 9 × 10⁻⁴ est le plus petit. Entre 1,5 × 10⁻³ et 2,1 × 10⁻³, les exposants sont égaux et 1,5 < 2,1.",
                "Ordre croissant : 9 × 10⁻⁴ < 1,5 × 10⁻³ < 2,1 × 10⁻³ (soit 0,000 9 < 0,001 5 < 0,002 1).",
              ],
            },
            {
              level: 3,
              statement: "Défi. La lumière se déplace dans le vide à environ 3 × 10⁵ km/s. La distance moyenne entre la Terre et le Soleil est d'environ 1,5 × 10⁸ km, et celle entre la Terre et la Lune d'environ 3,84 × 10⁵ km. a) Calculez le temps mis par la lumière du Soleil pour arriver sur Terre, en secondes, puis en minutes et secondes. b) Calculez le temps mis par la lumière pour aller de la Lune à la Terre.",
              hint: "Utilisez t = d ÷ v. Divisez les nombres décimaux entre eux, puis les puissances de 10 entre elles en soustrayant les exposants.",
              solution: [
                "a) t = (1,5 × 10⁸) ÷ (3 × 10⁵) = (1,5 ÷ 3) × (10⁸ ÷ 10⁵) = 0,5 × 10³ = 500 s.",
                "500 s = 8 × 60 s + 20 s, soit 8 min 20 s.",
                "b) t = (3,84 × 10⁵) ÷ (3 × 10⁵) = (3,84 ÷ 3) × (10⁵ ÷ 10⁵) = 1,28 × 10⁰ = 1,28 s.",
                "Conclusion : la lumière du Soleil met environ 8 min 20 s pour nous parvenir, celle de la Lune environ 1,28 s.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces nombres du plus petit au plus grand.",
            items: [
              "4 × 10⁻⁵",
              "3,2 × 10⁻⁴",
              "1,9 × 10⁻²",
              "7,5 × 10⁰",
              "1,2 × 10³",
              "9,8 × 10³",
              "2 × 10⁶",
            ],
          },
          quiz: [
            { q: "Quelle est l'écriture scientifique de 52 000 ?", options: ["52 × 10³", "5,2 × 10⁴", "0,52 × 10⁵", "5,2 × 10³"], answer: 1, why: "On place la virgule après le 5 : elle recule de 4 rangs, donc 52 000 = 5,2 × 10⁴." },
            { q: "Quelle est l'écriture scientifique de 0,006 ?", options: ["6 × 10⁻³", "6 × 10³", "0,6 × 10⁻²", "60 × 10⁻⁴"], answer: 0, why: "La virgule avance de 3 rangs pour se placer après le 6 : 0,006 = 6 × 10⁻³." },
            { q: "Lequel de ces nombres est écrit en écriture scientifique ?", options: ["12,5 × 10⁵", "0,8 × 10³", "3 × 10⁻⁷", "10 × 10²"], answer: 2, why: "3 est compris entre 1 et 10 (10 exclu). Les nombres 12,5 et 10 sont trop grands, 0,8 trop petit." },
            { q: "Quel est le plus grand de ces nombres ?", options: ["9,9 × 10³", "1,1 × 10⁴", "8 × 10³", "9,99 × 10²"], answer: 1, why: "1,1 × 10⁴ = 11 000 a le plus grand exposant ; les autres sont inférieurs à 10 000." },
            { q: "Que vaut (2 × 10³) × (4 × 10⁵) ?", options: ["8 × 10¹⁵", "6 × 10⁸", "8 × 10²", "8 × 10⁸"], answer: 3, why: "On multiplie 2 × 4 = 8 et 10³ × 10⁵ = 10⁸ (on additionne les exposants)." },
          ],
          trap: "Comparer deux nombres en écriture scientifique en regardant d'abord le nombre a au lieu de l'exposant, ou laisser un résultat comme 24 × 10³, qui n'est pas en écriture scientifique.",
          method: "Après chaque conversion, vérifiez deux choses : le nombre devant la puissance de 10 est-il entre 1 et 10 ? L'exposant a-t-il le bon signe (positif pour un grand nombre, négatif pour un nombre inférieur à 1) ?",
        },
      ],
    },
  ],
}
