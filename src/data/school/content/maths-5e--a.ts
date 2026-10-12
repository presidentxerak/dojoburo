import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-5e',
  chapters: [
    /* ================================================================== */
    /* ENCHAÎNER DES CALCULS                                                */
    /* ================================================================== */
    {
      id: 'enchainer-calculs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'priorites-operatoires',
          title: 'Les priorités opératoires et les parenthèses',
          minutes: 30,
          objectives: [
            "Effectuer un enchaînement d'opérations en respectant les priorités opératoires.",
            "Calculer une expression avec des parenthèses, éventuellement emboîtées.",
            "Reconnaître une somme, une différence, un produit ou un quotient d'après la dernière opération effectuée.",
            "Rédiger un calcul étape par étape, une ligne par étape.",
          ],
          course: [
            {
              heading: "Pourquoi des règles de priorité ?",
              paragraphs: [
                "Calculez 3 + 4 × 5. Si l'on effectue les opérations dans l'ordre de lecture, on trouve 7 × 5 = 35. Si l'on commence par la multiplication, on trouve 3 + 20 = 23. Les deux résultats ne peuvent pas être justes en même temps : il faut une règle commune, pour que tout le monde trouve le même résultat.",
                "Cette règle s'appelle la règle des priorités opératoires. Elle est la même dans le monde entier, et les calculatrices dites « collège » la respectent. Avec elle, 3 + 4 × 5 = 3 + 20 = 23 : la multiplication est prioritaire sur l'addition.",
              ],
            },
            {
              heading: "Dans une expression sans parenthèses",
              paragraphs: [
                "Dans une expression sans parenthèses, on effectue d'abord les multiplications et les divisions, puis les additions et les soustractions. Exemple : 20 - 12 ÷ 4 + 2 × 3 = 20 - 3 + 6 = 23. On a calculé 12 ÷ 4 = 3 et 2 × 3 = 6 en premier.",
                "Quand les opérations ont la même priorité, on les effectue de gauche à droite. Ainsi 20 - 5 + 3 = 15 + 3 = 18 (et non 20 - 8 = 12). De même 24 ÷ 4 × 2 = 6 × 2 = 12 (et non 24 ÷ 8 = 3). En revanche, dans une suite d'additions seules (ou de multiplications seules), on peut changer l'ordre sans changer le résultat : 2 + 7 + 8 = 2 + 8 + 7.",
              ],
              box: { label: "Règle", text: "Sans parenthèses : on effectue d'abord les multiplications et les divisions, puis les additions et les soustractions. À priorité égale, on calcule de gauche à droite." },
            },
            {
              heading: "Les parenthèses passent en premier",
              paragraphs: [
                "Les parenthèses indiquent un calcul à faire en priorité. Exemple : 5 × (8 - 3) = 5 × 5 = 25, alors que 5 × 8 - 3 = 40 - 3 = 37. À l'intérieur des parenthèses, on applique les règles habituelles : (2 + 3 × 4) = (2 + 12) = 14.",
                "Quand des parenthèses sont emboîtées les unes dans les autres, on commence par les plus intérieures. On utilise parfois des crochets [ ] pour les distinguer : 2 × [10 - (3 + 4)] = 2 × [10 - 7] = 2 × 3 = 6.",
                "Le trait de fraction joue lui aussi le rôle de parenthèses : on calcule séparément le numérateur et le dénominateur, puis on divise. Sur une seule ligne, le quotient de 12 + 8 par 9 - 4 s'écrit (12 + 8) ÷ (9 - 4) = 20 ÷ 5 = 4.",
              ],
              box: { label: "À retenir", text: "Ordre des calculs : 1) les parenthèses, en commençant par les plus intérieures ; 2) les multiplications et les divisions ; 3) les additions et les soustractions. À chaque niveau, de gauche à droite." },
            },
            {
              heading: "Nommer une expression et rédiger le calcul",
              paragraphs: [
                "Le nom d'une expression dépend de la dernière opération effectuée. Dans 3 + 4 × 5, on fait la multiplication puis l'addition : c'est une somme (de 3 et du produit 4 × 5). Dans (3 + 4) × 5, la dernière opération est la multiplication : c'est un produit. On parle de même d'une différence (soustraction) et d'un quotient (division).",
                "Pour rédiger, on écrit une ligne par étape, on recopie tout ce qui n'a pas encore été calculé et l'on souligne au brouillon l'opération que l'on va effectuer. On peut nommer l'expression par une lettre : A = 30 - 4 × 5, puis A = 30 - 20, puis A = 10.",
              ],
            },
          ],
          keyPoints: [
            "On calcule d'abord ce qui est entre parenthèses, en commençant par les parenthèses les plus intérieures.",
            "Ensuite les multiplications et les divisions, puis les additions et les soustractions.",
            "À priorité égale, on calcule de gauche à droite : 20 - 5 + 3 = 18 et 24 ÷ 4 × 2 = 12.",
            "Le trait de fraction joue le rôle de parenthèses pour le numérateur et le dénominateur.",
            "La dernière opération effectuée donne le nom de l'expression : somme, différence, produit ou quotient.",
          ],
          example: {
            statement: "Calculez A = 30 - 4 × (2 + 3) + 18 ÷ 6 en détaillant les étapes, puis dites si A est une somme, une différence, un produit ou un quotient.",
            solution: [
              "On commence par les parenthèses : 2 + 3 = 5. A = 30 - 4 × 5 + 18 ÷ 6.",
              "On effectue ensuite la multiplication et la division : 4 × 5 = 20 et 18 ÷ 6 = 3. A = 30 - 20 + 3.",
              "Il reste une soustraction et une addition, de même priorité : on calcule de gauche à droite. 30 - 20 = 10, puis 10 + 3 = 13.",
              "A = 13.",
              "La dernière opération effectuée est l'addition : A est une somme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez en détaillant les étapes : B = 7 + 3 × 6 ; C = (7 + 3) × 6 ; D = 40 - 10 ÷ 2 ; E = 48 ÷ 6 × 2.",
              hint: "Repérez d'abord s'il y a des parenthèses, puis cherchez les multiplications et les divisions. Pour E, les deux opérations ont la même priorité.",
              solution: [
                "B = 7 + 3 × 6 = 7 + 18 = 25 (la multiplication d'abord).",
                "C = (7 + 3) × 6 = 10 × 6 = 60 (les parenthèses d'abord).",
                "D = 40 - 10 ÷ 2 = 40 - 5 = 35 (la division d'abord).",
                "E = 48 ÷ 6 × 2 = 8 × 2 = 16 (division et multiplication ont la même priorité : de gauche à droite).",
                "Résultats : B = 25, C = 60, D = 35 et E = 16.",
              ],
            },
            {
              level: 2,
              statement: "Calculez en détaillant les étapes : F = 3 × [20 - (2 + 4) × 3] ; G = (45 - 9) ÷ (3 + 6) ; H = 100 - 4 × 5 × 3 + 12 ; I = 2,5 × 4 + 1,5.",
              hint: "Pour F, commencez par les parenthèses les plus intérieures, puis calculez ce qui reste dans les crochets. Pour G, calculez chaque parenthèse avant de diviser.",
              solution: [
                "F : on calcule 2 + 4 = 6, donc F = 3 × [20 - 6 × 3]. Dans les crochets, la multiplication d'abord : 6 × 3 = 18, puis 20 - 18 = 2. Donc F = 3 × 2 = 6.",
                "G = (45 - 9) ÷ (3 + 6) = 36 ÷ 9 = 4.",
                "H : on effectue les multiplications de gauche à droite, 4 × 5 = 20 puis 20 × 3 = 60. H = 100 - 60 + 12 = 40 + 12 = 52.",
                "I = 2,5 × 4 + 1,5 = 10 + 1,5 = 11,5.",
                "Résultats : F = 6, G = 4, H = 52 et I = 11,5.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Recopiez trois fois 6 + 4 × 3 - 1 et ajoutez des parenthèses pour obtenir successivement 29, 20 et 14. Que vaut l'expression sans parenthèses ? b) Tom achète 3 places de cinéma à 9 € et 2 menus à 6,50 € ; il paie avec un billet de 50 € (données fictives). Écrivez une seule expression qui donne la monnaie rendue, puis calculez-la.",
              hint: "Pour a), essayez de regrouper 6 + 4, ou 3 - 1, ou les deux. Pour b), la dépense totale doit être soustraite en une seule fois : mettez-la entre parenthèses.",
              solution: [
                "Sans parenthèses : 6 + 4 × 3 - 1 = 6 + 12 - 1 = 17.",
                "Pour 29 : (6 + 4) × 3 - 1 = 10 × 3 - 1 = 30 - 1 = 29.",
                "Pour 20 : (6 + 4) × (3 - 1) = 10 × 2 = 20.",
                "Pour 14 : 6 + 4 × (3 - 1) = 6 + 4 × 2 = 6 + 8 = 14.",
                "b) La dépense est 3 × 9 + 2 × 6,5. La monnaie rendue est donc 50 - (3 × 9 + 2 × 6,5).",
                "Calcul : 3 × 9 = 27 et 2 × 6,5 = 13, donc 50 - (27 + 13) = 50 - 40 = 10.",
                "On rend 10 € à Tom. Sans les parenthèses, 50 - 3 × 9 + 2 × 6,5 = 50 - 27 + 13 = 36 donnerait un résultat faux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque calcul ou affirmation sur les priorités opératoires.",
            statements: [
              { text: "3 + 4 × 5 = 35", true: false, why: "La multiplication est prioritaire : 3 + 20 = 23." },
              { text: "20 - 5 + 3 = 18", true: true, why: "Soustraction et addition ont la même priorité : de gauche à droite, 15 + 3 = 18." },
              { text: "24 ÷ 4 × 2 = 3", true: false, why: "De gauche à droite : 24 ÷ 4 = 6, puis 6 × 2 = 12." },
              { text: "(2 + 3) × 4 donne le même résultat que 2 + 3 × 4.", true: false, why: "(2 + 3) × 4 = 20, alors que 2 + 3 × 4 = 14." },
              { text: "10 - 2 × 3 = 4", true: true, why: "La multiplication d'abord : 10 - 6 = 4." },
              { text: "L'expression 7 + 2 × 5 est une somme.", true: true, why: "La dernière opération effectuée est l'addition de 7 et de 10." },
              { text: "Avec des parenthèses emboîtées, on commence par les plus extérieures.", true: false, why: "On commence par les parenthèses les plus intérieures." },
            ],
          },
          quiz: [
            { q: "Combien vaut 12 - 2 × 5 ?", options: ["50", "2", "10", "22"], answer: 1, why: "La multiplication d'abord : 2 × 5 = 10, puis 12 - 10 = 2." },
            { q: "Combien vaut 36 ÷ 6 × 3 ?", options: ["2", "12", "18", "9"], answer: 2, why: "Division et multiplication ont la même priorité : de gauche à droite, 36 ÷ 6 = 6, puis 6 × 3 = 18." },
            { q: "Laquelle de ces expressions est un produit ?", options: ["4 + 5 × 2", "(4 + 5) × 2", "4 × 5 + 2 × 1", "4 × 5 - (2 + 1)"], answer: 1, why: "Dans (4 + 5) × 2, on calcule la parenthèse puis on multiplie : la dernière opération est une multiplication." },
            { q: "Combien vaut (18 + 6) ÷ (5 - 2) ?", options: ["8", "24", "6", "19"], answer: 0, why: "On calcule chaque parenthèse : 24 et 3, puis 24 ÷ 3 = 8." },
            { q: "Dans 2 × [15 - (3 + 1) × 2], quel calcul fait-on en premier ?", options: ["2 × 15", "(3 + 1) × 2", "3 + 1", "15 - 3"], answer: 2, why: "On commence par les parenthèses les plus intérieures : 3 + 1." },
          ],
          trap: "Calculer dans l'ordre de lecture sans tenir compte des priorités, par exemple écrire 3 + 4 × 5 = 35, ou effectuer 24 ÷ 4 × 2 en commençant par la multiplication.",
          method: "Avant chaque ligne de calcul, soulignez au brouillon l'opération prioritaire, effectuez-la seule et recopiez tout le reste sans rien changer. Vérifiez ensuite le résultat final avec une calculatrice collège.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'programme-de-calcul',
          title: 'Traduire un programme de calcul en une seule expression',
          minutes: 30,
          objectives: [
            "Appliquer un programme de calcul à un nombre donné, étape par étape.",
            "Traduire un programme de calcul par une seule expression, avec les parenthèses nécessaires.",
            "Retrouver le programme de calcul qui correspond à une expression.",
            "Tester un programme sur plusieurs nombres pour émettre une conjecture.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un programme de calcul ?",
              paragraphs: [
                "Un programme de calcul est une suite d'instructions que l'on applique à un nombre de départ, comme une recette de cuisine appliquée à un ingrédient. Exemple : « Choisir un nombre. Lui ajouter 3. Multiplier le résultat par 4. Soustraire 5. »",
                "Appliquons-le au nombre 6, étape par étape : 6 + 3 = 9, puis 9 × 4 = 36, puis 36 - 5 = 31. Le programme transforme 6 en 31. Avec le nombre 2, on obtient 2 + 3 = 5, puis 5 × 4 = 20, puis 20 - 5 = 15.",
              ],
            },
            {
              heading: "Écrire une seule expression",
              paragraphs: [
                "On peut résumer tout le programme en une seule ligne de calcul. On part du nombre de départ et l'on ajoute les instructions une à une : 6 + 3, puis (6 + 3) × 4, puis (6 + 3) × 4 - 5. On vérifie : (6 + 3) × 4 - 5 = 9 × 4 - 5 = 36 - 5 = 31, le même résultat que pas à pas.",
                "Les parenthèses autour de 6 + 3 sont indispensables. Sans elles, 6 + 3 × 4 - 5 = 6 + 12 - 5 = 13 : la règle des priorités ferait la multiplication avant l'addition, ce qui ne respecte pas le programme. En revanche, il n'en faut pas autour de (6 + 3) × 4 avant de soustraire 5, car la multiplication est déjà prioritaire sur la soustraction.",
                "Quand le programme est plus long, les parenthèses peuvent s'emboîter. « Choisir 8, soustraire 2, multiplier par 5, ajouter 6, diviser par 4 » s'écrit [(8 - 2) × 5 + 6] ÷ 4 = [30 + 6] ÷ 4 = 36 ÷ 4 = 9.",
              ],
              box: { label: "Règle", text: "Quand une multiplication ou une division doit s'appliquer à tout le résultat précédent, et que ce résultat est une somme ou une différence, on met ce résultat entre parenthèses." },
            },
            {
              heading: "Lire une expression comme un programme",
              paragraphs: [
                "On peut faire le chemin inverse : lire une expression et retrouver le programme. Dans 2 × (7 - 4) + 10, on calcule d'abord 7 - 4, puis on multiplie par 2, puis on ajoute 10. Le programme est donc : « Choisir 7. Soustraire 4. Multiplier par 2. Ajouter 10. » Le résultat est 2 × 3 + 10 = 16.",
                "L'ordre des instructions est celui des priorités, pas forcément celui de la lecture de gauche à droite : le facteur 2 est écrit en premier, mais la multiplication par 2 a lieu en deuxième. Comme 2 × (7 - 4) = (7 - 4) × 2, les deux écritures conviennent.",
              ],
            },
            {
              heading: "Comparer deux programmes",
              paragraphs: [
                "Programme A : « Choisir un nombre, le multiplier par 2, ajouter 6. » Programme B : « Choisir un nombre, ajouter 3, multiplier par 2. » Avec 1 : A donne 1 × 2 + 6 = 8 et B donne (1 + 3) × 2 = 8. Avec 5 : A donne 16 et B donne 16. Avec 10 : 26 dans les deux cas.",
                "Après plusieurs essais, on peut émettre une conjecture : « les deux programmes donnent toujours le même résultat ». Mais des essais, même nombreux, ne prouvent rien pour tous les nombres : vous apprendrez à le démontrer avec le calcul littéral. À l'inverse, un seul essai où les résultats diffèrent suffit à prouver que deux programmes ne sont pas équivalents : c'est un contre-exemple.",
              ],
              box: { label: "À retenir", text: "Des essais permettent de faire une conjecture, pas de la prouver. Un seul contre-exemple suffit pour prouver qu'une affirmation est fausse." },
            },
          ],
          keyPoints: [
            "Un programme de calcul est une suite d'instructions appliquées à un nombre de départ.",
            "Pour l'écrire en une seule expression, on ajoute les instructions une à une, dans l'ordre.",
            "On met entre parenthèses une somme ou une différence que l'on doit ensuite multiplier ou diviser : (6 + 3) × 4.",
            "On vérifie toujours que l'expression donne le même résultat que le calcul pas à pas.",
            "Des essais donnent une conjecture ; un seul contre-exemple suffit pour prouver qu'une affirmation est fausse.",
          ],
          example: {
            statement: "Voici un programme de calcul : « Choisir un nombre. Lui soustraire 2. Multiplier le résultat par 5. Ajouter 6. Diviser le tout par 4. » a) Appliquez-le au nombre 8, étape par étape. b) Écrivez une seule expression qui traduit ce programme pour le nombre 8, et vérifiez.",
            solution: [
              "a) Pas à pas : 8 - 2 = 6, puis 6 × 5 = 30, puis 30 + 6 = 36, puis 36 ÷ 4 = 9.",
              "b) On construit l'expression : 8 - 2, puis (8 - 2) × 5 (parenthèses, car on multiplie une différence).",
              "On ajoute 6 : (8 - 2) × 5 + 6 (pas de nouvelles parenthèses, la multiplication est déjà prioritaire).",
              "On divise le tout par 4 : il faut entourer tout ce qui précède, avec des crochets. [(8 - 2) × 5 + 6] ÷ 4.",
              "Vérification : [(8 - 2) × 5 + 6] ÷ 4 = [6 × 5 + 6] ÷ 4 = [30 + 6] ÷ 4 = 36 ÷ 4 = 9.",
              "On retrouve 9, comme pas à pas : l'expression est juste.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Programme : « Choisir un nombre. Lui ajouter 5. Multiplier le résultat par 3. » a) Appliquez-le au nombre 4, étape par étape. b) Écrivez une seule expression qui traduit ce programme pour le nombre 10, puis calculez-la.",
              hint: "Pour b), demandez-vous si l'addition doit être faite avant la multiplication : si oui, il faut des parenthèses.",
              solution: [
                "a) 4 + 5 = 9, puis 9 × 3 = 27. Le résultat est 27.",
                "b) On ajoute 5 à 10, puis on multiplie toute la somme par 3 : (10 + 5) × 3.",
                "Calcul : (10 + 5) × 3 = 15 × 3 = 45.",
                "Le programme transforme 10 en 45.",
              ],
            },
            {
              level: 2,
              statement: "a) Écrivez le programme de calcul qui correspond à l'expression (12 ÷ 4 + 7) × 2 - 1, puis calculez cette expression. b) Pour le programme « Choisir un nombre. Ajouter 4. Multiplier par 6. », Léo écrit, avec le nombre 5 : 5 + 4 × 6. A-t-il raison ? Corrigez si nécessaire.",
              hint: "Pour a), suivez l'ordre des priorités : la parenthèse d'abord, et à l'intérieur la division avant l'addition. Pour b), calculez l'expression de Léo et comparez avec le calcul pas à pas.",
              solution: [
                "a) Dans la parenthèse, on divise d'abord 12 par 4, puis on ajoute 7 ; ensuite on multiplie par 2 et on soustrait 1.",
                "Programme : « Choisir 12. Diviser par 4. Ajouter 7. Multiplier par 2. Soustraire 1. »",
                "Calcul : (12 ÷ 4 + 7) × 2 - 1 = (3 + 7) × 2 - 1 = 10 × 2 - 1 = 20 - 1 = 19.",
                "b) Pas à pas : 5 + 4 = 9, puis 9 × 6 = 54. L'expression de Léo donne 5 + 4 × 6 = 5 + 24 = 29.",
                "Léo a tort : il a oublié les parenthèses. La bonne expression est (5 + 4) × 6 = 54.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Programme A : « Choisir un nombre. Le multiplier par 4. Soustraire 8. » Programme B : « Choisir un nombre. Lui soustraire 2. Multiplier par 4. » a) Testez les deux programmes avec 3, avec 10 et avec 2,5. b) Quelle conjecture pouvez-vous faire ? Est-elle prouvée ? c) Programme C : « Choisir un nombre. Le multiplier par 2. Ajouter 3. Multiplier le résultat par 5. » Quel nombre faut-il choisir au départ pour obtenir 65 ?",
              hint: "Pour c), remontez le programme à l'envers en partant de 65 : chaque opération est remplacée par l'opération contraire (la division défait la multiplication, la soustraction défait l'addition).",
              solution: [
                "a) Avec 3 : A donne 3 × 4 - 8 = 12 - 8 = 4 ; B donne (3 - 2) × 4 = 1 × 4 = 4.",
                "Avec 10 : A donne 10 × 4 - 8 = 40 - 8 = 32 ; B donne (10 - 2) × 4 = 8 × 4 = 32.",
                "Avec 2,5 : A donne 2,5 × 4 - 8 = 10 - 8 = 2 ; B donne (2,5 - 2) × 4 = 0,5 × 4 = 2.",
                "b) Conjecture : les programmes A et B donnent toujours le même résultat. Elle n'est pas prouvée : trois essais ne suffisent pas pour tous les nombres (le calcul littéral permettra de le démontrer).",
                "c) On remonte le programme C : la dernière étape multiplie par 5, donc avant elle on avait 65 ÷ 5 = 13.",
                "Avant l'ajout de 3, on avait 13 - 3 = 10. Avant la multiplication par 2, on avait 10 ÷ 2 = 5.",
                "Vérification : (5 × 2 + 3) × 5 = (10 + 3) × 5 = 13 × 5 = 65. Il faut choisir 5.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du programme de calcul qui correspond à l'expression (9 - 4) × 3 + 2.",
            items: [
              "Choisir le nombre 9",
              "Lui soustraire 4",
              "Multiplier le résultat par 3",
              "Ajouter 2 au résultat",
              "Annoncer le résultat final : 17",
            ],
          },
          quiz: [
            { q: "Quelle expression traduit « Choisir 7, ajouter 2, multiplier par 10 » ?", options: ["7 + 2 × 10", "(7 + 2) × 10", "7 × 10 + 2", "7 + (2 × 10)"], answer: 1, why: "La somme 7 + 2 doit être multipliée en entier par 10 : il faut des parenthèses autour d'elle." },
            { q: "Le programme « Multiplier par 4, puis soustraire 5 » transforme 3 en...", options: ["7", "17", "12", "8"], answer: 0, why: "3 × 4 = 12, puis 12 - 5 = 7." },
            { q: "Quel programme correspond à l'expression (20 - 5) ÷ 3 ?", options: ["Choisir 20, diviser par 3, soustraire 5", "Choisir 5, soustraire 20, diviser par 3", "Choisir 20, soustraire 5, diviser par 3", "Choisir 3, diviser par 20, soustraire 5"], answer: 2, why: "On calcule d'abord la parenthèse 20 - 5, puis on divise le résultat par 3." },
            { q: "Pourquoi écrit-on des parenthèses dans (6 + 3) × 4 ?", options: ["Parce que l'addition doit être faite en premier", "Parce qu'on calcule toujours de droite à gauche", "Parce que la multiplication s'écrit toujours en dernier", "Parce que les parenthèses accompagnent toujours le signe ×"], answer: 0, why: "Sans parenthèses, la multiplication serait prioritaire ; les parenthèses imposent de faire l'addition d'abord." },
            { q: "Deux programmes donnent le même résultat pour trois nombres testés. Que peut-on dire ?", options: ["C'est prouvé : ils donneront toujours le même résultat", "Ils sont forcément différents pour les autres nombres", "On peut le conjecturer, mais ce n'est pas prouvé"], answer: 2, why: "Des essais permettent seulement d'émettre une conjecture : il faudra une démonstration pour la prouver." },
          ],
          trap: "Oublier les parenthèses en traduisant un programme, par exemple écrire 6 + 3 × 4 pour « ajouter 3, puis multiplier par 4 », ce qui multiplie seulement 3 au lieu de toute la somme.",
          method: "Après avoir écrit l'expression en une ligne, calculez-la avec les priorités et comparez avec le calcul fait pas à pas : si les deux résultats diffèrent, une parenthèse manque.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'multiples-diviseurs',
          title: 'Multiples, diviseurs et nombres premiers',
          minutes: 35,
          objectives: [
            "Déterminer si un nombre entier est multiple ou diviseur d'un autre nombre entier.",
            "Utiliser les critères de divisibilité par 2, 3, 4, 5, 9 et 10.",
            "Déterminer la liste de tous les diviseurs d'un nombre entier.",
            "Reconnaître un nombre premier et connaître les nombres premiers inférieurs à 100.",
          ],
          course: [
            {
              heading: "Multiple, diviseur, divisible",
              paragraphs: [
                "Comme 35 = 7 × 5, on dit que 35 est un multiple de 7 (et de 5), que 7 est un diviseur de 35 (5 aussi) et que 35 est divisible par 7. Ces trois phrases disent la même chose : dans la division euclidienne de 35 par 7, le reste est 0.",
                "En revanche, 38 n'est pas un multiple de 7 : 38 = 7 × 5 + 3, le reste est 3. On peut ranger 35 élèves en 7 rangées de 5, mais pas 38 élèves en rangées égales de 7.",
                "Les multiples de 6 sont 0, 6, 12, 18, 24... : il y en a une infinité. Les diviseurs de 18 sont 1, 2, 3, 6, 9 et 18 : il y en a un nombre fini. Retenez aussi que 0 est un multiple de tous les nombres et que 1 est un diviseur de tous les nombres entiers.",
              ],
              box: { label: "Définition", text: "Si a et b sont des nombres entiers et s'il existe un entier k tel que a = b × k, alors a est un multiple de b, b est un diviseur de a, et a est divisible par b." },
            },
            {
              heading: "Les critères de divisibilité",
              paragraphs: [
                "Pour savoir vite si un nombre est divisible par un autre, sans poser la division, on utilise des critères. Un nombre est divisible par 2 si son chiffre des unités est 0, 2, 4, 6 ou 8 (c'est un nombre pair) ; par 5 si son chiffre des unités est 0 ou 5 ; par 10 si son chiffre des unités est 0.",
                "Un nombre est divisible par 3 si la somme de ses chiffres est un multiple de 3, et par 9 si la somme de ses chiffres est un multiple de 9. Un nombre est divisible par 4 si le nombre formé par ses deux derniers chiffres est un multiple de 4.",
                "Exemple avec 4 518 : il est pair, donc divisible par 2 ; la somme de ses chiffres est 4 + 5 + 1 + 8 = 18, multiple de 3 et de 9, donc 4 518 est divisible par 3 et par 9 ; il se termine par 8, donc il n'est divisible ni par 5 ni par 10 ; 18 n'est pas un multiple de 4, donc 4 518 n'est pas divisible par 4.",
              ],
              box: { label: "Repère", text: "Par 2 : unités 0, 2, 4, 6, 8. Par 5 : unités 0 ou 5. Par 10 : unités 0. Par 3 : somme des chiffres multiple de 3. Par 9 : somme des chiffres multiple de 9. Par 4 : les deux derniers chiffres forment un multiple de 4." },
            },
            {
              heading: "Trouver tous les diviseurs d'un nombre",
              paragraphs: [
                "Pour trouver tous les diviseurs de 36, on cherche tous les produits de deux entiers égaux à 36, en essayant 1, 2, 3, 4... dans l'ordre : 36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6. On essaie 5 : 36 n'est pas divisible par 5. Après 6 × 6, on s'arrête, car les produits suivants (9 × 4, 12 × 3...) ont déjà été trouvés.",
                "Les diviseurs de 36 sont donc : 1, 2, 3, 4, 6, 9, 12, 18 et 36. Ils vont par paires, et l'on écrit la liste dans l'ordre croissant. Cette méthode évite d'en oublier.",
              ],
            },
            {
              heading: "Les nombres premiers",
              paragraphs: [
                "Un nombre premier est un nombre entier qui a exactement deux diviseurs : 1 et lui-même. Ainsi 7 est premier (ses seuls diviseurs sont 1 et 7), mais 15 ne l'est pas (15 = 3 × 5). Le nombre 1 n'est pas premier, car il n'a qu'un seul diviseur. Le nombre 2 est le seul nombre premier pair.",
                "Les nombres premiers inférieurs à 100 sont au nombre de 25 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 et 97. On attribue au savant grec Ératosthène (IIIe siècle avant notre ère) une méthode pour les trouver, appelée crible d'Ératosthène : on écrit les nombres de 2 à 100, puis on barre les multiples de 2 (sauf 2), de 3 (sauf 3), de 5 (sauf 5) et de 7 (sauf 7). Les nombres non barrés sont premiers.",
                "Pour savoir si un nombre inférieur à 100 est premier, il suffit donc de vérifier qu'il n'est divisible ni par 2, ni par 3, ni par 5, ni par 7 (sans être lui-même l'un de ces nombres). Attention à 91 : il est impair, la somme de ses chiffres est 10 et il ne se termine ni par 0 ni par 5, mais 91 = 7 × 13. Il n'est pas premier.",
              ],
              box: { label: "Définition", text: "Un nombre premier est un nombre entier qui admet exactement deux diviseurs : 1 et lui-même. 1 n'est pas premier ; 2 est le seul nombre premier pair." },
            },
          ],
          keyPoints: [
            "a = b × k (avec a, b, k entiers) : a est un multiple de b, b est un diviseur de a, a est divisible par b.",
            "Par 2, 5, 10 : on regarde le chiffre des unités. Par 3 et 9 : on regarde la somme des chiffres. Par 4 : les deux derniers chiffres.",
            "Pour lister les diviseurs, on écrit les produits par paires (1 × 36, 2 × 18...) jusqu'à ce que les facteurs se rejoignent.",
            "Un nombre premier a exactement deux diviseurs : 1 et lui-même. 1 n'est pas premier.",
            "Il y a 25 nombres premiers inférieurs à 100 ; 91 = 7 × 13 n'en fait pas partie.",
          ],
          example: {
            statement: "a) Le nombre 91 est-il premier ? b) Le nombre 97 est-il premier ? Justifiez.",
            solution: [
              "a) On teste les nombres premiers 2, 3, 5 et 7. 91 est impair : il n'est pas divisible par 2. La somme de ses chiffres est 9 + 1 = 10, qui n'est pas un multiple de 3 : 91 n'est pas divisible par 3. Il ne se termine ni par 0 ni par 5 : il n'est pas divisible par 5.",
              "On essaie 7 : 7 × 13 = 91. Donc 91 est divisible par 7 : il a au moins quatre diviseurs (1, 7, 13 et 91). 91 n'est pas premier.",
              "b) 97 est impair ; la somme de ses chiffres est 16, qui n'est pas un multiple de 3 ; il ne se termine ni par 0 ni par 5.",
              "On essaie 7 : 7 × 13 = 91 et 7 × 14 = 98, donc 97 n'est pas un multiple de 7.",
              "Comme 97 est inférieur à 100 et n'est divisible ni par 2, ni par 3, ni par 5, ni par 7, ses seuls diviseurs sont 1 et 97 : 97 est premier.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les nombres 120, 315, 4 572 et 2 026, lesquels sont divisibles par 2 ? par 3 ? par 5 ? par 9 ? Justifiez avec les critères de divisibilité.",
              hint: "Regardez le chiffre des unités pour 2 et 5, et calculez la somme des chiffres de chaque nombre pour 3 et 9.",
              solution: [
                "120 : chiffre des unités 0, donc divisible par 2 et par 5. Somme des chiffres 1 + 2 + 0 = 3 : divisible par 3, mais pas par 9.",
                "315 : chiffre des unités 5, donc impair (pas divisible par 2) et divisible par 5. Somme 3 + 1 + 5 = 9 : divisible par 3 et par 9.",
                "4 572 : chiffre des unités 2, donc divisible par 2, pas par 5. Somme 4 + 5 + 7 + 2 = 18 : divisible par 3 et par 9.",
                "2 026 : chiffre des unités 6, donc divisible par 2, pas par 5. Somme 2 + 0 + 2 + 6 = 10 : ni par 3, ni par 9.",
                "Bilan : par 2 : 120, 4 572 et 2 026 ; par 3 : 120, 315 et 4 572 ; par 5 : 120 et 315 ; par 9 : 315 et 4 572.",
              ],
            },
            {
              level: 2,
              statement: "a) Donnez la liste de tous les diviseurs de 48. b) Parmi les nombres 51, 53, 57 et 59, lesquels sont premiers ? Justifiez.",
              hint: "Pour a), écrivez 48 comme produit de deux entiers en essayant 1, 2, 3, 4... Pour b), testez la divisibilité par 2, 3, 5 et 7.",
              solution: [
                "a) 48 = 1 × 48 = 2 × 24 = 3 × 16 = 4 × 12 = 6 × 8. 48 n'est divisible ni par 5 ni par 7, et après 6 × 8 les facteurs se rejoignent.",
                "Les diviseurs de 48 sont : 1, 2, 3, 4, 6, 8, 12, 16, 24 et 48 (dix diviseurs).",
                "b) 51 : somme des chiffres 6, multiple de 3 ; en effet 51 = 3 × 17. 51 n'est pas premier.",
                "57 : somme des chiffres 12, multiple de 3 ; en effet 57 = 3 × 19. 57 n'est pas premier.",
                "53 et 59 sont impairs, la somme de leurs chiffres (8 et 14) n'est pas un multiple de 3, ils ne se terminent ni par 0 ni par 5, et ils ne sont pas dans la table de 7 (7 × 7 = 49, 7 × 8 = 56, 7 × 9 = 63).",
                "Conclusion : 53 et 59 sont premiers ; 51 et 57 ne le sont pas.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une fleuriste dispose de 48 roses et de 60 tulipes (données fictives). Elle veut composer des bouquets tous identiques, en utilisant toutes ses fleurs. a) Peut-elle faire 8 bouquets ? b) Quels sont tous les nombres de bouquets possibles ? c) Quel est le plus grand nombre de bouquets possible, et quelle est alors la composition de chaque bouquet ?",
              hint: "Le nombre de bouquets doit diviser à la fois 48 et 60. Listez les diviseurs de chacun de ces deux nombres, puis gardez ceux qui sont communs.",
              solution: [
                "a) 48 ÷ 8 = 6, mais 60 ÷ 8 = 7,5 : le résultat n'est pas entier. 8 n'est pas un diviseur de 60 : elle ne peut pas faire 8 bouquets.",
                "b) Diviseurs de 48 : 1, 2, 3, 4, 6, 8, 12, 16, 24, 48.",
                "Diviseurs de 60 : 60 = 1 × 60 = 2 × 30 = 3 × 20 = 4 × 15 = 5 × 12 = 6 × 10, soit 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.",
                "Diviseurs communs : 1, 2, 3, 4, 6 et 12. Ce sont les nombres de bouquets possibles.",
                "c) Le plus grand est 12 : chaque bouquet contient 48 ÷ 12 = 4 roses et 60 ÷ 12 = 5 tulipes.",
                "Vérification : 12 × 4 = 48 roses et 12 × 5 = 60 tulipes. Le plus grand nombre est 12 bouquets de 4 roses et 5 tulipes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque nombre à la propriété qui le caractérise.",
            pairs: [
              { left: "2", right: "Le seul nombre premier pair" },
              { left: "1", right: "Un diviseur de tous les entiers, mais il n'est pas premier" },
              { left: "0", right: "Un multiple de tous les nombres entiers" },
              { left: "91", right: "Impair, mais non premier, car égal à 7 × 13" },
              { left: "97", right: "Le plus grand nombre premier inférieur à 100" },
              { left: "36", right: "Il possède exactement 9 diviseurs" },
            ],
          },
          quiz: [
            { q: "Quel nombre est divisible par 9 ?", options: ["2 345", "4 567", "1 239", "3 456"], answer: 3, why: "La somme des chiffres de 3 456 est 18, un multiple de 9. Les autres sommes sont 14, 22 et 15." },
            { q: "Lequel de ces nombres est premier ?", options: ["21", "27", "29", "39"], answer: 2, why: "29 n'a que deux diviseurs, 1 et 29. Les autres sont divisibles par 3 : 21 = 3 × 7, 27 = 3 × 9, 39 = 3 × 13." },
            { q: "Combien le nombre 12 a-t-il de diviseurs ?", options: ["6", "4", "5", "12"], answer: 0, why: "Ce sont 1, 2, 3, 4, 6 et 12, trouvés par paires : 1 × 12, 2 × 6, 3 × 4." },
            { q: "Le nombre 1 est-il premier ?", options: ["Oui, car il n'est divisible que par 1 et par lui-même", "Non, car il n'a qu'un seul diviseur", "Oui, car tout nombre impair est premier"], answer: 1, why: "Un nombre premier a exactement deux diviseurs distincts ; 1 n'en a qu'un." },
            { q: "Le nombre 4 518 est divisible par...", options: ["2 et 5", "3 et 5", "2, 3 et 9", "5 et 9 seulement"], answer: 2, why: "Il est pair, la somme de ses chiffres (18) est un multiple de 3 et de 9, et il ne se termine ni par 0 ni par 5." },
          ],
          trap: "Croire que 1 est premier, ou qu'un nombre impair est forcément premier : 9, 15, 21 ou 91 sont impairs mais ne sont pas premiers.",
          method: "Pour lister les diviseurs d'un nombre, écrivez les produits par paires en essayant 1, 2, 3... dans l'ordre, et arrêtez-vous dès que les deux facteurs se rejoignent ; vous n'en oublierez aucun.",
        },
      ],
    },

    /* ================================================================== */
    /* SYMÉTRIE CENTRALE ET ANGLES                                          */
    /* ================================================================== */
    {
      id: 'symetrie-centrale-angles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'construire-symetrique',
          title: 'Construire le symétrique d\'une figure par rapport à un point',
          minutes: 30,
          objectives: [
            "Comprendre la symétrie centrale comme un demi-tour autour d'un point.",
            "Construire le symétrique d'un point par rapport à un point, à la règle et au compas ou sur quadrillage.",
            "Construire le symétrique d'un segment, d'une droite, d'un cercle et d'un polygone.",
            "Distinguer la symétrie centrale de la symétrie axiale.",
          ],
          course: [
            {
              heading: "Le symétrique d'un point",
              paragraphs: [
                "Dire que le point A' est le symétrique du point A par rapport au point O, c'est dire que O est le milieu du segment [AA']. Les trois points A, O et A' sont alignés, et OA = OA'. Le point O s'appelle le centre de la symétrie.",
                "Le symétrique du point O par rapport à O est O lui-même : c'est le seul point qui ne bouge pas. Et si A' est le symétrique de A, alors A est aussi le symétrique de A' : les deux points s'échangent.",
                "On peut imaginer la symétrie centrale comme un demi-tour autour du point O : piquez une épingle en O sur un calque et faites-le tourner d'un demi-tour. Le point A vient se placer exactement sur A'. C'est pour cela qu'on l'appelle aussi « symétrie de centre O ».",
              ],
              box: { label: "Définition", text: "Le symétrique d'un point A par rapport à un point O est le point A' tel que O soit le milieu du segment [AA']. Le symétrique de O est O lui-même." },
            },
            {
              heading: "Construire le symétrique d'un point",
              paragraphs: [
                "Avec la règle et le compas : on trace la droite (AO) ; on place la pointe du compas sur O avec un écartement égal à OA ; on trace un arc qui coupe la droite de l'autre côté de O. Ce point d'intersection est A'. On peut aussi mesurer OA à la règle graduée et reporter la même longueur de l'autre côté de O.",
                "Sur un quadrillage, on compte les carreaux. Si, pour aller de A à O, on avance de 3 carreaux vers la droite et de 2 carreaux vers le haut, alors pour aller de O à A' on fait exactement le même trajet : 3 carreaux vers la droite et 2 vers le haut. Autrement dit, A' est à 3 carreaux à droite et 2 carreaux au-dessus de O, quand A est à 3 carreaux à gauche et 2 carreaux en dessous.",
              ],
            },
            {
              heading: "Le symétrique d'une figure",
              paragraphs: [
                "Pour construire le symétrique d'un segment [AB], on construit les symétriques A' et B' de ses extrémités, puis on trace le segment [A'B']. Pour une droite, il suffit de construire les symétriques de deux de ses points. Pour un polygone, on construit le symétrique de chaque sommet, puis on relie les points dans le même ordre : le symétrique du triangle ABC est le triangle A'B'C'.",
                "Pour un cercle de centre C et de rayon 3 cm, on construit le symétrique C' du centre, puis on trace le cercle de centre C' et de même rayon, 3 cm. On nomme les points images avec un « prime » (A', B', C'...) pour retrouver facilement quel point correspond à quel autre.",
              ],
              box: { label: "Méthode", text: "Pour construire le symétrique d'une figure, on construit le symétrique de chacun de ses points clés (sommets, extrémités, centre), puis on relie les images dans le même ordre." },
            },
            {
              heading: "Symétrie centrale ou symétrie axiale ?",
              paragraphs: [
                "En 6e, vous avez étudié la symétrie axiale : elle correspond à un pliage le long d'une droite, l'axe, et la figure est retournée comme dans un miroir. La symétrie centrale correspond à un demi-tour autour d'un point : la figure n'est pas retournée, elle apparaît la tête en bas.",
                "Pour les distinguer dans une construction : en symétrie axiale, le segment [AA'] est perpendiculaire à l'axe, qui passe par son milieu ; en symétrie centrale, le segment [AA'] passe par le centre O, qui est son milieu. Dans les deux cas, la figure obtenue a la même forme et les mêmes dimensions que la figure de départ.",
              ],
            },
          ],
          keyPoints: [
            "A' est le symétrique de A par rapport à O lorsque O est le milieu de [AA'].",
            "La symétrie centrale de centre O est un demi-tour autour de O ; le symétrique de O est O.",
            "Construction : droite (AO), puis report de la longueur OA de l'autre côté de O.",
            "Sur quadrillage : on refait le même trajet de O vers A' que de A vers O.",
            "Pour une figure, on construit les symétriques des sommets (ou du centre, pour un cercle) puis on les relie dans le même ordre.",
          ],
          example: {
            statement: "Tracez un triangle ABC et un point O extérieur au triangle. Construisez le triangle A'B'C', symétrique du triangle ABC par rapport au point O.",
            solution: [
              "On trace la droite (AO). Avec le compas, pointe sur O et écartement OA, on reporte cette longueur de l'autre côté de O : on obtient A'.",
              "On fait de même pour B : droite (BO), puis report de la longueur OB de l'autre côté de O. On obtient B'.",
              "On fait de même pour C et l'on obtient C'.",
              "On relie A', B' et C' dans cet ordre : on obtient le triangle A'B'C'.",
              "Contrôle : O est le milieu de [AA'], de [BB'] et de [CC'], et en tournant la feuille d'un demi-tour, le triangle A'B'C' a la même allure que ABC. Le triangle A'B'C' est le symétrique cherché.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sur un quadrillage, on place un point O. Le point A est à 3 carreaux à droite et 2 carreaux au-dessus de O ; le point B est à 1 carreau à gauche et 4 carreaux en dessous de O ; le point M est à 5 carreaux à gauche de O, sur la même ligne. Où se trouvent A', B' et M', symétriques de A, B et M par rapport à O ?",
              hint: "Le symétrique est de l'autre côté de O, à la même distance : la droite devient la gauche, le haut devient le bas.",
              solution: [
                "A' est à 3 carreaux à gauche et 2 carreaux en dessous de O.",
                "B' est à 1 carreau à droite et 4 carreaux au-dessus de O.",
                "M' est à 5 carreaux à droite de O, sur la même ligne.",
                "Dans chaque cas, O est bien le milieu du segment qui relie le point à son symétrique.",
              ],
            },
            {
              level: 2,
              statement: "a) On sait que OA = 3,5 cm. Le point A' est le symétrique de A par rapport à O. Quelle est la longueur AA' ? b) O est le milieu du segment [EF]. Quel est le symétrique de E par rapport à O ? Quel est le symétrique du segment [EF] ? c) Décrivez le symétrique, par rapport à un point O, d'un cercle de centre C et de rayon 2 cm, avec C différent de O.",
              hint: "Revenez à la définition : O est le milieu du segment qui relie un point à son symétrique.",
              solution: [
                "a) O est le milieu de [AA'], donc OA' = OA = 3,5 cm et AA' = 3,5 + 3,5 = 7 cm.",
                "b) O est le milieu de [EF] : par définition, F est le symétrique de E par rapport à O (et E celui de F).",
                "Le symétrique du segment [EF] a pour extrémités F et E : c'est le segment [EF] lui-même.",
                "c) C'est le cercle de centre C', symétrique de C par rapport à O, et de même rayon 2 cm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Deux points A et A' sont à 8 cm l'un de l'autre. On sait que A' est le symétrique de A par rapport à un point O. Où se trouve O ? b) Une droite (d) passe par O, et M est un point de (d). Sur quelle droite se trouve M', symétrique de M par rapport à O ? Que peut-on en déduire pour le symétrique de (d) ? c) Sur un quadrillage, un triangle RST est tel que R est à 2 carreaux à droite et 1 au-dessus de O, S à 4 carreaux à droite et 1 au-dessus de O, et T à 2 carreaux à droite et 3 au-dessus de O. Décrivez la position de R', S' et T', puis comparez les longueurs RS et R'S'.",
              hint: "Pour b), rappelez-vous que M, O et M' sont toujours alignés. Pour c), traitez chaque sommet séparément, comme dans l'exercice 1.",
              solution: [
                "a) O est le milieu de [AA'] : il est sur le segment [AA'], à 8 ÷ 2 = 4 cm de A et à 4 cm de A'.",
                "b) M, O et M' sont alignés, et M et O sont sur (d) : donc M' est aussi sur (d).",
                "C'est vrai pour tous les points de (d) : le symétrique de la droite (d) est la droite (d) elle-même. Une droite qui passe par le centre est sa propre image.",
                "c) R' est à 2 carreaux à gauche et 1 en dessous de O ; S' est à 4 carreaux à gauche et 1 en dessous de O ; T' est à 2 carreaux à gauche et 3 en dessous de O.",
                "RS mesure 2 carreaux (R et S sont sur la même ligne, à 2 et 4 carreaux de O). R'S' mesure aussi 2 carreaux : les longueurs sont égales.",
                "Le triangle R'S'T' est le triangle RST après un demi-tour autour de O.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la construction du symétrique A' d'un point A par rapport à un point O, à la règle et au compas.",
            items: [
              "Tracer la droite (AO)",
              "Placer la pointe du compas sur O, avec un écartement égal à OA",
              "Tracer un arc de cercle qui coupe la droite (AO) de l'autre côté de O",
              "Nommer A' ce point d'intersection",
              "Vérifier à la règle que O est le milieu de [AA']",
            ],
          },
          quiz: [
            { q: "A' est le symétrique de A par rapport à O. Que peut-on dire du point O ?", options: ["O est le milieu de [AA']", "O est sur la médiatrice de [AA'] seulement", "La longueur OA est le double de OA'", "A est le milieu de [OA']"], answer: 0, why: "C'est la définition : O est le milieu du segment qui relie un point à son symétrique." },
            { q: "Quel est le symétrique du point O par rapport à O ?", options: ["Il n'existe pas", "Le point O lui-même", "N'importe quel point du plan"], answer: 1, why: "O est le milieu de [OO] : le centre de symétrie est sa propre image." },
            { q: "On sait que OA = 4 cm. Quelle est la longueur AA', si A' est le symétrique de A par rapport à O ?", options: ["4 cm", "2 cm", "8 cm", "16 cm"], answer: 2, why: "O est le milieu de [AA'], donc AA' = 4 + 4 = 8 cm." },
            { q: "Sur un quadrillage, M est à 2 carreaux à droite et 5 carreaux en dessous de O. Où est M' ?", options: ["2 carreaux à droite et 5 au-dessus de O", "5 carreaux à gauche et 2 au-dessus de O", "2 carreaux à gauche et 5 en dessous de O", "2 carreaux à gauche et 5 au-dessus de O"], answer: 3, why: "Le symétrique est de l'autre côté de O : la droite devient la gauche, le bas devient le haut." },
            { q: "Quel est le symétrique d'un cercle de centre C et de rayon 3 cm, par rapport à O ?", options: ["Un cercle de rayon 6 cm, centré en O", "Un cercle de rayon 3 cm, centré en C'", "Le même cercle, dans tous les cas", "Un demi-cercle de centre O et de rayon 3 cm"], answer: 1, why: "On construit le symétrique C' du centre et l'on garde le même rayon." },
          ],
          trap: "Reporter la longueur à partir du point A au lieu du centre O, ce qui place A au milieu de [OA'] ; ou confondre avec la symétrie axiale et tracer une perpendiculaire.",
          method: "Après chaque construction, vérifiez trois choses à la règle : A, O et A' sont alignés, OA' = OA, et A' est bien de l'autre côté de O. Faites ensuite tourner votre feuille d'un demi-tour : la figure image doit ressembler exactement à la figure de départ.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'proprietes-symetrie-centrale',
          title: 'Les propriétés de la symétrie centrale',
          minutes: 30,
          objectives: [
            "Connaître et utiliser les propriétés de conservation de la symétrie centrale : longueurs, angles, aires, alignement.",
            "Savoir que le symétrique d'une droite est une droite parallèle.",
            "Reconnaître une figure qui possède un centre de symétrie.",
            "Justifier que deux angles opposés par le sommet ont la même mesure.",
          ],
          course: [
            {
              heading: "La symétrie centrale conserve les mesures",
              paragraphs: [
                "Une figure et son symétrique par rapport à un point se superposent exactement après un demi-tour. On en déduit que la symétrie centrale conserve les longueurs, les mesures d'angles, les périmètres et les aires.",
                "Exemple : si un rectangle EFGH mesure 6 cm sur 4 cm, son symétrique E'F'G'H' est aussi un rectangle de 6 cm sur 4 cm, de périmètre 20 cm et d'aire 24 cm². Si un angle mesure 50°, son symétrique mesure aussi 50°.",
                "La symétrie centrale conserve aussi l'alignement : le symétrique d'un segment est un segment de même longueur, et le symétrique d'une droite est une droite. On dit qu'elle conserve la forme et les dimensions des figures.",
              ],
              box: { label: "Propriété", text: "La symétrie centrale conserve les longueurs, les mesures d'angles, les aires et l'alignement. Une figure et son symétrique sont superposables." },
            },
            {
              heading: "Le symétrique d'une droite",
              paragraphs: [
                "Le symétrique d'une droite (d) par rapport à un point O est une droite (d') parallèle à (d). Si (d) ne passe pas par O, les droites (d) et (d') sont parallèles et distinctes, situées de part et d'autre de O. Si (d) passe par O, elle est sa propre image : (d') = (d).",
                "De même, le symétrique d'un segment [AB] est un segment [A'B'] parallèle à [AB] et de même longueur : (A'B') // (AB) et A'B' = AB. C'est une différence avec la symétrie axiale, qui ne donne en général pas de droites parallèles.",
              ],
              box: { label: "Propriété", text: "Le symétrique d'une droite par rapport à un point est une droite qui lui est parallèle. Le symétrique d'un segment est un segment parallèle et de même longueur." },
            },
            {
              heading: "Le centre de symétrie d'une figure",
              paragraphs: [
                "Une figure admet un centre de symétrie O lorsque son symétrique par rapport à O est la figure elle-même. Concrètement, si l'on fait tourner la figure d'un demi-tour autour de O, elle se superpose à elle-même.",
                "Exemples : un segment a pour centre de symétrie son milieu ; un cercle a pour centre de symétrie son centre ; un rectangle et un carré ont pour centre de symétrie le point d'intersection de leurs diagonales. Les lettres majuscules N, S, Z, H, I, O et X en ont un (dans une police simple).",
                "Attention : une figure peut avoir un ou plusieurs axes de symétrie sans avoir de centre de symétrie. Le triangle équilatéral a trois axes de symétrie mais aucun centre de symétrie ; les lettres A, E ou T non plus. À l'inverse, la lettre N ou la lettre S ont un centre de symétrie mais aucun axe.",
              ],
            },
            {
              heading: "Justifier : les angles opposés par le sommet",
              paragraphs: [
                "Deux droites sécantes en O forment quatre angles. Deux de ces angles qui ont le même sommet O et dont les côtés sont dans le prolongement l'un de l'autre sont dits opposés par le sommet.",
                "La symétrie de centre O transforme chacune des deux droites en elle-même (elles passent par O), et elle envoie chaque angle sur l'angle qui lui est opposé par le sommet. Comme la symétrie centrale conserve les angles, on peut conclure : deux angles opposés par le sommet ont la même mesure.",
                "Pour rédiger une justification, on utilise trois temps : « On sait que... (les données). Or... (la propriété du cours). Donc... (la conclusion). » Par exemple : on sait que les angles mesurant x° et y° sont opposés par le sommet ; or deux angles opposés par le sommet ont la même mesure ; donc x = y.",
              ],
              box: { label: "Propriété", text: "Deux angles opposés par le sommet ont la même mesure." },
            },
          ],
          keyPoints: [
            "La symétrie centrale conserve les longueurs, les angles, les aires et l'alignement.",
            "Le symétrique d'une droite est une droite parallèle ; une droite qui passe par le centre est sa propre image.",
            "Le symétrique d'un segment [AB] est un segment [A'B'] parallèle et de même longueur.",
            "Une figure a un centre de symétrie si elle se superpose à elle-même après un demi-tour autour de ce point.",
            "Deux angles opposés par le sommet ont la même mesure.",
            "Rédiger une justification : On sait que... Or... Donc...",
          ],
          example: {
            statement: "Le rectangle EFGH mesure 6 cm de long et 4 cm de large. On construit son symétrique E'F'G'H' par rapport à un point O extérieur. a) Donnez les dimensions, le périmètre et l'aire de E'F'G'H'. b) Que peut-on dire des droites (EF) et (E'F') ? Justifiez.",
            solution: [
              "a) La symétrie centrale conserve les longueurs : E'F'G'H' mesure 6 cm sur 4 cm.",
              "Elle conserve aussi les angles : ses quatre angles sont droits, c'est donc encore un rectangle.",
              "Son périmètre est 2 × (6 + 4) = 20 cm et son aire est 6 × 4 = 24 cm², comme celles de EFGH.",
              "b) On sait que la droite (E'F') est le symétrique de la droite (EF) par rapport à O. Or le symétrique d'une droite par rapport à un point est une droite qui lui est parallèle. Donc (E'F') // (EF).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle RST est tel que RS = 4 cm, ST = 6 cm et l'angle RST mesure 50°. Le triangle R'S'T' est son symétrique par rapport à un point O. Donnez R'S', S'T' et la mesure de l'angle R'S'T', en citant la propriété utilisée.",
              hint: "Le symétrique de l'angle RST est l'angle R'S'T' : les lettres se correspondent dans le même ordre.",
              solution: [
                "La symétrie centrale conserve les longueurs : R'S' = RS = 4 cm et S'T' = ST = 6 cm.",
                "Elle conserve les mesures d'angles : l'angle R'S'T' mesure 50°, comme l'angle RST.",
                "Résultat : R'S' = 4 cm, S'T' = 6 cm et l'angle R'S'T' mesure 50°.",
              ],
            },
            {
              level: 2,
              statement: "Parmi les figures suivantes, lesquelles possèdent un centre de symétrie ? Précisez-le quand il existe. a) un segment [AB] ; b) un cercle de centre K ; c) un triangle équilatéral ; d) un carré ; e) la lettre majuscule Z ; f) la lettre majuscule E ; g) la lettre majuscule A.",
              hint: "Imaginez chaque figure tournée d'un demi-tour (vous pouvez tourner votre cahier) : si elle se superpose à elle-même, elle a un centre de symétrie.",
              solution: [
                "a) Oui : le milieu du segment [AB].",
                "b) Oui : le centre K du cercle.",
                "c) Non : après un demi-tour, la pointe du triangle se retrouve en bas, il ne se superpose pas à lui-même (il a pourtant trois axes de symétrie).",
                "d) Oui : le point d'intersection de ses diagonales.",
                "e) Oui : le milieu du trait oblique de la lettre Z.",
                "f) et g) Non : retournées d'un demi-tour, les lettres E et A ne se superposent pas à elles-mêmes (elles ont seulement un axe de symétrie).",
                "Bilan : le segment, le cercle, le carré et la lettre Z ont un centre de symétrie.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux droites (d1) et (d2) sont sécantes en O. L'un des quatre angles qu'elles forment mesure 35°. a) Donnez la mesure des trois autres angles et justifiez. b) On place A sur (d1) avec OA = 3 cm et B sur (d2) avec OB = 4 cm ; on mesure AB = 2,3 cm. On construit A' et B', symétriques de A et B par rapport à O. Sur quelles droites sont A' et B' ? Donnez les longueurs AA', BB' et A'B'. Que peut-on dire des droites (AB) et (A'B') ?",
              hint: "Pour a), utilisez les angles opposés par le sommet, et rappelez-vous qu'un angle plat mesure 180°. Pour b), chaque droite passe par O : elle est sa propre image.",
              solution: [
                "a) L'angle opposé par le sommet à l'angle de 35° mesure aussi 35°, car deux angles opposés par le sommet ont la même mesure.",
                "Un angle voisin de l'angle de 35° forme avec lui un angle plat : il mesure 180° - 35° = 145°. Son opposé par le sommet mesure aussi 145°.",
                "Les quatre angles mesurent donc 35°, 145°, 35° et 145° (vérification : 35 + 145 + 35 + 145 = 360).",
                "b) (d1) passe par O, elle est sa propre image : A' est sur (d1). De même, B' est sur (d2).",
                "O est le milieu de [AA'] et de [BB'] : AA' = 2 × 3 = 6 cm et BB' = 2 × 4 = 8 cm.",
                "[A'B'] est le symétrique de [AB] : la symétrie centrale conserve les longueurs, donc A'B' = AB = 2,3 cm.",
                "Le symétrique d'une droite est une droite parallèle : (A'B') // (AB).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque figure de départ à son image par la symétrie de centre O.",
            pairs: [
              { left: "Le point O", right: "Le point O lui-même" },
              { left: "Un segment de 5 cm", right: "Un segment de 5 cm, parallèle au premier" },
              { left: "Une droite qui passe par O", right: "Cette même droite" },
              { left: "Une droite qui ne passe pas par O", right: "Une autre droite, parallèle à la première" },
              { left: "Un cercle de centre O", right: "Ce même cercle" },
              { left: "Un angle de 70°", right: "Un angle de même mesure, 70°" },
            ],
          },
          quiz: [
            { q: "Le segment [AB] mesure 7 cm. Son symétrique [A'B'] par rapport à un point mesure...", options: ["3,5 cm", "7 cm", "14 cm"], answer: 1, why: "La symétrie centrale conserve les longueurs." },
            { q: "Quelle figure n'a pas de centre de symétrie ?", options: ["Un carré", "Un cercle de rayon 4 cm", "Un triangle équilatéral", "La lettre Z majuscule"], answer: 2, why: "Le triangle équilatéral a trois axes de symétrie, mais aucun centre : après un demi-tour, il ne se superpose pas à lui-même." },
            { q: "Le symétrique d'une droite (d) qui ne passe pas par le centre O est...", options: ["une droite perpendiculaire à (d)", "la droite (d) elle-même", "une droite qui coupe (d) en O", "une droite parallèle à (d)"], answer: 3, why: "La symétrie centrale transforme une droite en une droite qui lui est parallèle." },
            { q: "Deux droites sécantes forment un angle de 50°. L'angle opposé par le sommet mesure...", options: ["130°", "40°", "50°", "100°"], answer: 2, why: "Deux angles opposés par le sommet ont la même mesure." },
            { q: "Quel est le centre de symétrie d'un rectangle ?", options: ["Le croisement de ses diagonales", "Le milieu de son plus grand côté", "L'un de ses quatre sommets", "Le milieu de sa largeur"], answer: 0, why: "Le demi-tour autour du point d'intersection des diagonales envoie chaque sommet sur le sommet opposé." },
          ],
          trap: "Croire qu'une figure qui a un axe de symétrie a forcément un centre de symétrie : le triangle équilatéral et la lettre A ont des axes, mais pas de centre.",
          method: "Pour savoir si une figure a un centre de symétrie, retournez votre cahier d'un demi-tour (ou décalquez la figure et faites tourner le calque autour d'une épingle) : si elle a exactement la même allure, elle a un centre de symétrie.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'angles-et-parallelisme',
          title: 'Angles alternes-internes, correspondants et droites parallèles',
          minutes: 35,
          objectives: [
            "Connaître le vocabulaire des angles : adjacents, opposés par le sommet, complémentaires, supplémentaires.",
            "Identifier des angles alternes-internes et des angles correspondants formés par deux droites et une sécante.",
            "Calculer des mesures d'angles à partir de droites parallèles.",
            "Démontrer que deux droites sont parallèles, ou ne le sont pas, à l'aide des angles.",
          ],
          course: [
            {
              heading: "Le vocabulaire des angles",
              paragraphs: [
                "Deux angles sont adjacents s'ils ont le même sommet, un côté commun, et s'ils sont situés de part et d'autre de ce côté commun. Deux angles sont opposés par le sommet s'ils ont le même sommet et des côtés dans le prolongement l'un de l'autre : ils ont la même mesure, comme on l'a justifié avec la symétrie centrale.",
                "Deux angles sont complémentaires si la somme de leurs mesures est 90° (par exemple 35° et 55°). Ils sont supplémentaires si la somme de leurs mesures est 180° (par exemple 70° et 110°). Deux angles adjacents qui forment ensemble un angle plat sont donc supplémentaires.",
              ],
              box: { label: "À retenir", text: "Complémentaires : somme de 90°. Supplémentaires : somme de 180°. Opposés par le sommet : même mesure." },
            },
            {
              heading: "Deux droites et une sécante",
              paragraphs: [
                "Prenons une figure de référence. Tracez deux droites (d1) et (d2), (d1) au-dessus de (d2), et une troisième droite (t), appelée sécante, qui coupe (d1) en A et (d2) en B. Placez E et F sur (d1), E à gauche et F à droite de A ; G et H sur (d2), G à gauche et H à droite de B ; M sur (t) au-dessus de A et N sur (t) en dessous de B. On obtient huit angles, quatre en A et quatre en B.",
                "Les angles situés entre les deux droites (d1) et (d2) sont dits internes ; les autres sont externes. Deux angles alternes-internes sont deux angles internes, situés de part et d'autre de la sécante, l'un en A et l'autre en B : par exemple les angles FAB et ABG, ou bien les angles EAB et ABH. Ils dessinent la forme d'un Z (ou d'un Z retourné).",
                "Deux angles correspondants sont situés du même côté de la sécante et occupent la même place à chacune des deux intersections : par exemple l'angle MAF (au-dessus de (d1), à droite de (t)) et l'angle ABH (au-dessus de (d2), à droite de (t)). Ils dessinent la forme d'un F. Autres paires correspondantes : FAB et HBN, EAM et GBA, EAB et GBN.",
              ],
            },
            {
              heading: "Quand les droites sont parallèles",
              paragraphs: [
                "Si les droites (d1) et (d2) sont parallèles, la figure formée en B est exactement la figure formée en A, glissée le long de la sécante. On admet les propriétés suivantes : si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes qu'elles forment ont la même mesure, et les angles correspondants aussi.",
                "Exemple : (d1) // (d2) et l'angle MAF mesure 70°. Son correspondant ABH mesure aussi 70°. L'angle FAB est supplémentaire de MAF (ils forment l'angle plat MAB) : il mesure 180° - 70° = 110°, et son alterne-interne ABG mesure aussi 110°.",
              ],
              box: { label: "Propriété", text: "Si deux droites parallèles sont coupées par une sécante, alors les angles alternes-internes ont la même mesure, et les angles correspondants ont la même mesure." },
            },
            {
              heading: "Prouver que deux droites sont parallèles",
              paragraphs: [
                "On admet aussi les propriétés réciproques : si deux droites coupées par une sécante forment deux angles alternes-internes de même mesure, alors ces droites sont parallèles. De même, si elles forment deux angles correspondants de même mesure, alors elles sont parallèles.",
                "Ces propriétés permettent aussi de prouver que deux droites ne sont pas parallèles. Si deux angles alternes-internes mesurent 72° et 74°, les droites ne peuvent pas être parallèles, car sinon ces angles seraient égaux. Sur un dessin, une différence de 2° ne se voit presque pas : seul le raisonnement permet de conclure.",
                "Rédaction type : « On sait que les angles FAB et ABG sont alternes-internes et mesurent tous les deux 110°. Or si deux droites coupées par une sécante forment deux angles alternes-internes de même mesure, alors elles sont parallèles. Donc (d1) // (d2). »",
              ],
              box: { label: "Propriété", text: "Si deux droites coupées par une sécante forment deux angles alternes-internes (ou deux angles correspondants) de même mesure, alors ces deux droites sont parallèles." },
            },
          ],
          keyPoints: [
            "Complémentaires : somme de 90° ; supplémentaires : somme de 180° ; opposés par le sommet : même mesure.",
            "Alternes-internes : entre les deux droites, de part et d'autre de la sécante (forme d'un Z).",
            "Correspondants : du même côté de la sécante, à la même place à chaque intersection (forme d'un F).",
            "Si les droites sont parallèles, alors les angles alternes-internes (et correspondants) ont la même mesure.",
            "Si deux angles alternes-internes (ou correspondants) ont la même mesure, alors les droites sont parallèles ; s'ils sont différents, elles ne le sont pas.",
          ],
          example: {
            statement: "Dans la figure de référence du cours, les droites (d1) et (d2) sont parallèles et l'angle MAF mesure 70°. Calculez les mesures des angles ABH, FAB, ABG et EAB, en justifiant.",
            solution: [
              "Les angles MAF et ABH sont correspondants, et (d1) // (d2) : ils ont la même mesure, donc l'angle ABH mesure 70°.",
              "Les points M, A et B sont alignés : les angles MAF et FAB forment un angle plat, ils sont supplémentaires. L'angle FAB mesure 180° - 70° = 110°.",
              "Les angles FAB et ABG sont alternes-internes, et (d1) // (d2) : l'angle ABG mesure aussi 110°.",
              "Les angles EAB et MAF sont opposés par le sommet : l'angle EAB mesure 70°.",
              "Contrôle : EAB et ABH sont alternes-internes et mesurent bien tous les deux 70°. Résultats : ABH = 70°, FAB = 110°, ABG = 110° et EAB = 70°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans la figure de référence du cours, nommez : a) l'angle alterne-interne de l'angle FAB ; b) l'angle correspondant de l'angle MAF ; c) l'angle opposé par le sommet à l'angle MAF. d) Sans lien avec la figure : quelle est la mesure d'un angle complémentaire d'un angle de 35° ? et celle d'un angle supplémentaire d'un angle de 35° ?",
              hint: "Repérez la forme du Z pour les alternes-internes et celle du F pour les correspondants. Pour d), cherchez le nombre qui, ajouté à 35, donne 90, puis celui qui donne 180.",
              solution: [
                "a) L'angle FAB est interne, à droite de la sécante. Son alterne-interne est interne, à gauche de la sécante, en B : c'est l'angle ABG.",
                "b) L'angle MAF est au-dessus de (d1) et à droite de (t). Son correspondant est au-dessus de (d2) et à droite de (t) : c'est l'angle ABH.",
                "c) L'angle opposé par le sommet à MAF a pour côtés les demi-droites [AE) et [AB) : c'est l'angle EAB.",
                "d) Un angle complémentaire d'un angle de 35° mesure 90° - 35° = 55° ; un angle supplémentaire d'un angle de 35° mesure 180° - 35° = 145°.",
              ],
            },
            {
              level: 2,
              statement: "Dans la figure de référence du cours, les droites (d1) et (d2) sont parallèles et l'angle EAB mesure 58°. Calculez les mesures des angles ABH, FAB, ABG et GBN, en justifiant chaque réponse.",
              hint: "Commencez par l'angle alterne-interne de EAB, puis utilisez l'angle plat formé en A par les points E, A et F.",
              solution: [
                "Les angles EAB et ABH sont alternes-internes et (d1) // (d2) : l'angle ABH mesure 58°.",
                "Les points E, A et F sont alignés : les angles EAB et FAB sont supplémentaires. L'angle FAB mesure 180° - 58° = 122°.",
                "Les angles FAB et ABG sont alternes-internes et (d1) // (d2) : l'angle ABG mesure 122°.",
                "Les angles EAB et GBN sont correspondants (en dessous de chaque droite, à gauche de la sécante) et (d1) // (d2) : l'angle GBN mesure 58°.",
                "Contrôle : GBN est opposé par le sommet à ABH, qui mesure 58°. Résultats : ABH = 58°, FAB = 122°, ABG = 122°, GBN = 58°.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans la figure de référence du cours, on ne sait pas si (d1) et (d2) sont parallèles. a) On mesure l'angle MAF = 72° et l'angle ABG = 107°. Les droites (d1) et (d2) sont-elles parallèles ? b) Même question avec l'angle MAF = 72° et l'angle ABG = 108°. c) Sur le dessin du cas a), les droites semblent parallèles. Peut-on se fier au dessin ?",
              hint: "Calculez d'abord l'angle FAB, puis comparez-le avec son alterne-interne. Rappelez-vous que si les droites étaient parallèles, ces deux angles seraient égaux.",
              solution: [
                "a) M, A et B sont alignés : l'angle FAB mesure 180° - 72° = 108°.",
                "Les angles FAB et ABG sont alternes-internes, et ils mesurent 108° et 107° : ils ne sont pas égaux.",
                "Si (d1) et (d2) étaient parallèles, ces angles alternes-internes auraient la même mesure. Ce n'est pas le cas : (d1) et (d2) ne sont pas parallèles.",
                "b) L'angle FAB mesure toujours 108°, et l'angle ABG mesure 108° : ces deux angles alternes-internes ont la même mesure.",
                "Or si deux droites coupées par une sécante forment deux angles alternes-internes de même mesure, alors elles sont parallèles. Donc (d1) // (d2).",
                "c) Non : un écart de 1° est presque invisible sur un dessin, et les droites finissent par se couper loin de la feuille. Seul le raisonnement sur les mesures permet de conclure.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les angles et le parallélisme.",
            statements: [
              { text: "Deux angles opposés par le sommet ont la même mesure.", true: true, why: "La symétrie centrale de centre le sommet envoie l'un sur l'autre et conserve les angles." },
              { text: "Deux angles alternes-internes ont toujours la même mesure.", true: false, why: "Seulement si les deux droites coupées par la sécante sont parallèles." },
              { text: "Si deux angles correspondants ont la même mesure, alors les deux droites sont parallèles.", true: true, why: "C'est l'une des propriétés qui permettent de prouver un parallélisme." },
              { text: "Deux angles complémentaires ont une somme de 180°.", true: false, why: "Des angles complémentaires ont une somme de 90° ; ce sont les supplémentaires qui totalisent 180°." },
              { text: "Deux angles alternes-internes sont situés entre les deux droites, de part et d'autre de la sécante.", true: true, why: "Internes : entre les droites. Alternes : de part et d'autre de la sécante." },
              { text: "Deux angles correspondants sont situés de part et d'autre de la sécante.", true: false, why: "Ils sont du même côté de la sécante, à la même place à chaque intersection." },
              { text: "Si deux angles alternes-internes mesurent 75° et 76°, les droites peuvent quand même être parallèles.", true: false, why: "Si elles étaient parallèles, ces angles seraient égaux : elles ne sont donc pas parallèles." },
            ],
          },
          quiz: [
            { q: "Deux angles adjacents qui forment ensemble un angle plat sont...", options: ["complémentaires", "supplémentaires", "opposés par le sommet", "alternes-internes"], answer: 1, why: "Un angle plat mesure 180° : la somme de leurs mesures est 180°, ils sont supplémentaires." },
            { q: "Deux droites parallèles sont coupées par une sécante. Un angle mesure 47°. Son angle correspondant mesure...", options: ["133°", "43°", "47°", "94°"], answer: 2, why: "Avec des droites parallèles, deux angles correspondants ont la même mesure." },
            { q: "Où sont situés deux angles correspondants ?", options: ["Du même côté de la sécante, à la même place", "De part et d'autre de la sécante, entre les deux droites", "De part et d'autre de la sécante, à l'extérieur des deux droites"], answer: 0, why: "Les angles correspondants occupent la même position à chacune des deux intersections (forme d'un F)." },
            { q: "Deux angles alternes-internes mesurent 64° et 66°. Les deux droites sont...", options: ["parallèles", "non parallèles", "perpendiculaires", "on ne peut pas savoir"], answer: 1, why: "Si les droites étaient parallèles, ces angles seraient égaux ; ils ne le sont pas, donc les droites ne sont pas parallèles." },
            { q: "Un angle mesure 35°. Un angle complémentaire de celui-ci mesure...", options: ["145°", "65°", "35°", "55°"], answer: 3, why: "Deux angles complémentaires ont une somme de 90° : 90 - 35 = 55." },
          ],
          trap: "Affirmer que deux angles alternes-internes sont égaux sans savoir que les droites sont parallèles, ou conclure au parallélisme parce que les droites « ont l'air » parallèles sur le dessin.",
          method: "Repassez en couleur les deux droites et la sécante, puis cherchez la forme d'un Z pour repérer des angles alternes-internes et celle d'un F pour des angles correspondants. Avant d'utiliser une égalité d'angles, écrivez d'abord la phrase « On sait que les droites sont parallèles ».",
        },
      ],
    },

    /* ================================================================== */
    /* LES NOMBRES RELATIFS                                                 */
    /* ================================================================== */
    {
      id: 'nombres-relatifs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'relatifs-droite-graduee',
          title: 'Les nombres relatifs sur une droite graduée',
          minutes: 25,
          objectives: [
            "Utiliser les nombres relatifs pour décrire des situations concrètes : températures, altitudes, étages, gains et pertes.",
            "Repérer et placer un point d'abscisse donnée sur une droite graduée.",
            "Déterminer la distance à zéro d'un nombre relatif et son opposé.",
          ],
          course: [
            {
              heading: "À quoi servent les nombres négatifs ?",
              paragraphs: [
                "Par une nuit d'hiver, le thermomètre peut descendre sous 0 °C : s'il fait 5 degrés sous zéro, on écrit -5 °C. Dans un ascenseur, le bouton -2 désigne le deuxième sous-sol du parking. Un sous-marin qui plonge à 200 m sous la surface est à l'altitude -200 m. Ces nombres précédés du signe - sont des nombres négatifs.",
                "Les nombres que vous connaissez déjà (3 ; 12,5 ; 1 000...) sont des nombres positifs. On peut les écrire avec le signe + (par exemple +3), mais on l'omet souvent : 3 = +3. Les nombres positifs et les nombres négatifs forment ensemble les nombres relatifs.",
                "Un nombre relatif est donc formé d'un signe (+ ou -) et d'un nombre sans signe, appelé sa distance à zéro. Le nombre 0 est le seul nombre qui soit à la fois positif et négatif : on peut l'écrire +0 ou -0, cela ne change rien.",
              ],
              box: { label: "Définition", text: "Un nombre relatif est formé d'un signe (+ ou -) et d'une distance à zéro. Les nombres positifs s'écrivent avec ou sans le signe + ; les nombres négatifs s'écrivent toujours avec le signe -. Zéro est à la fois positif et négatif." },
            },
            {
              heading: "La droite graduée",
              paragraphs: [
                "Sur une droite graduée, on choisit une origine O, à laquelle on associe le nombre 0, et une unité de longueur que l'on reporte régulièrement. Les nombres positifs sont placés à droite de l'origine et les nombres négatifs à gauche, comme sur un thermomètre couché.",
                "À chaque point de la droite correspond un nombre relatif, appelé l'abscisse de ce point. Si le point A est à 3 unités à gauche de O, son abscisse est -3 et l'on écrit A(-3). Si le point B est à 2,5 unités à droite de O, on écrit B(2,5) ou B(+2,5).",
                "Quand l'unité est partagée en plusieurs parts égales, on calcule d'abord la valeur d'une petite graduation. Si l'unité est partagée en 4 parts égales, chaque petite graduation vaut 1 ÷ 4 = 0,25 : un point situé 6 petites graduations à gauche de O a pour abscisse -1,5.",
              ],
              box: { label: "Repère", text: "Sur une droite graduée : les négatifs à gauche de l'origine O, les positifs à droite. L'abscisse d'un point est le nombre relatif qui lui correspond ; on note A(-3)." },
            },
            {
              heading: "Distance à zéro et nombres opposés",
              paragraphs: [
                "La distance à zéro d'un nombre relatif est la distance entre l'origine et le point qui a ce nombre pour abscisse. On l'obtient en enlevant le signe : la distance à zéro de -4,5 est 4,5 ; celle de +7 est 7 ; celle de 0 est 0. Une distance n'est jamais négative.",
                "Deux nombres relatifs sont opposés s'ils ont la même distance à zéro et des signes contraires : -3 et +3 sont opposés, comme -0,8 et +0,8. L'opposé de 0 est 0. Sur la droite graduée, deux points d'abscisses opposées sont symétriques par rapport à l'origine O : O est le milieu du segment qui les relie.",
              ],
              box: { label: "Définition", text: "Deux nombres relatifs opposés ont la même distance à zéro et des signes contraires. Leurs points sur la droite graduée sont symétriques par rapport à l'origine." },
            },
          ],
          keyPoints: [
            "Un nombre relatif = un signe (+ ou -) et une distance à zéro ; 0 est à la fois positif et négatif.",
            "Sur une droite graduée, les négatifs sont à gauche de l'origine, les positifs à droite.",
            "L'abscisse d'un point est le nombre relatif qui lui correspond : A(-3).",
            "La distance à zéro s'obtient en enlevant le signe : celle de -4,5 est 4,5.",
            "Deux nombres opposés, comme -3 et +3, ont la même distance à zéro et des signes contraires.",
          ],
          example: {
            statement: "Sur une droite graduée d'origine O, l'unité est partagée en 4 parts égales. Le point A est situé 6 petites graduations à gauche de O, et le point B 3 petites graduations à droite de O. a) Donnez les abscisses de A et de B. b) Donnez la distance à zéro de l'abscisse de A, et placez le point C dont l'abscisse est l'opposé de celle de A.",
            solution: [
              "Une petite graduation vaut 1 ÷ 4 = 0,25 unité.",
              "a) A est à gauche de O, à 6 × 0,25 = 1,5 unité : son abscisse est négative, A(-1,5).",
              "B est à droite de O, à 3 × 0,25 = 0,75 unité : B(0,75), que l'on peut aussi écrire B(+0,75).",
              "b) La distance à zéro de -1,5 est 1,5.",
              "L'opposé de -1,5 est +1,5 : on place C 6 petites graduations à droite de O. C(1,5) est le symétrique de A par rapport à O.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez le nombre relatif qui correspond à chaque situation : a) une température de 7 degrés sous zéro ; b) le troisième sous-sol d'un parking ; c) un gain de 15 € ; d) un plongeur à 12 m sous la surface de l'eau ; e) un randonneur à 850 m d'altitude.",
              hint: "Ce qui est en dessous de zéro, en dessous du niveau de la mer ou du rez-de-chaussée, ou ce qui est perdu, s'écrit avec le signe -.",
              solution: [
                "a) -7 (en °C).",
                "b) -3 (le rez-de-chaussée correspond à 0).",
                "c) +15 (en €).",
                "d) -12 (en m, la surface correspond à 0).",
                "e) +850 (en m), que l'on peut aussi écrire 850.",
              ],
            },
            {
              level: 2,
              statement: "On considère les points A(-2,5), B(+4), C(-4), D(+2,5) et E(-0,5). a) Donnez la distance à zéro de l'abscisse de chaque point. b) Quels points ont des abscisses opposées ? c) Quel est l'opposé de l'abscisse de E ? d) Lequel de ces points est le plus proche de l'origine ?",
              hint: "Pour la distance à zéro, enlevez le signe. Deux abscisses opposées ont la même distance à zéro et des signes contraires.",
              solution: [
                "a) Distances à zéro : A : 2,5 ; B : 4 ; C : 4 ; D : 2,5 ; E : 0,5.",
                "b) B(+4) et C(-4) ont des abscisses opposées ; A(-2,5) et D(+2,5) aussi. Ces points sont symétriques deux à deux par rapport à l'origine.",
                "c) L'opposé de -0,5 est +0,5.",
                "d) Le point le plus proche de l'origine est celui dont l'abscisse a la plus petite distance à zéro : c'est E (distance 0,5).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sur une droite graduée, on place M(-3) et N(+5). a) Combien d'unités séparent M et N ? b) Quelle est l'abscisse du milieu du segment [MN] ? c) Quelle est l'abscisse du point Q, symétrique de M par rapport à N ? d) Écrivez tous les nombres entiers relatifs dont la distance à zéro est strictement inférieure à 3.",
              hint: "Faites un schéma rapide de la droite graduée et comptez les unités. Pour c), N doit être le milieu de [MQ].",
              solution: [
                "a) De M à O, il y a 3 unités ; de O à N, il y a 5 unités. M et N sont séparés de 3 + 5 = 8 unités.",
                "b) Le milieu est à 8 ÷ 2 = 4 unités de M, vers la droite : -3 + 4 = 1. Le milieu a pour abscisse +1 (il est bien à 4 unités de N, qui est en +5).",
                "c) N est le milieu de [MQ] : Q est à 8 unités à droite de N. Son abscisse est 5 + 8 = 13, donc Q(+13).",
                "d) Les entiers dont la distance à zéro vaut 0, 1 ou 2 conviennent : -2, -1, 0, +1 et +2. Il y en a cinq.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque situation au nombre relatif qui la décrit.",
            pairs: [
              { left: "Une température de 4 degrés sous zéro", right: "-4" },
              { left: "Le 2e sous-sol d'un parking", right: "-2" },
              { left: "Un gain de 4 euros", right: "+4" },
              { left: "Le 2e étage d'un immeuble", right: "+2" },
              { left: "Le nombre dont la distance à zéro est nulle", right: "0" },
              { left: "L'opposé de -2,5", right: "+2,5" },
            ],
          },
          quiz: [
            { q: "Quelle est la distance à zéro de -6,5 ?", options: ["-6,5", "0", "13", "6,5"], answer: 3, why: "On enlève le signe : la distance à zéro de -6,5 est 6,5. Une distance n'est jamais négative." },
            { q: "Quel est l'opposé de +3 ?", options: ["-3", "1/3", "+3", "0"], answer: 0, why: "L'opposé a la même distance à zéro et le signe contraire : -3." },
            { q: "Sur une droite graduée, où sont placés les nombres négatifs ?", options: ["À droite de l'origine", "Au-dessus de la droite", "Des deux côtés, indifféremment", "À gauche de l'origine"], answer: 3, why: "Par convention, les négatifs sont à gauche de l'origine et les positifs à droite." },
            { q: "Le nombre 0 est...", options: ["positif seulement", "négatif seulement", "à la fois positif et négatif", "ni un relatif, ni un décimal"], answer: 2, why: "0 est le seul nombre à la fois positif et négatif ; c'est bien un nombre relatif." },
            { q: "Un plongeur est à 18 m sous la surface de l'eau. Quel nombre relatif décrit sa position, en mètres ?", options: ["+18", "-1,8", "0,18", "-18"], answer: 3, why: "La surface correspond à 0 ; en dessous, on utilise un nombre négatif : -18." },
          ],
          trap: "Confondre la distance à zéro et l'opposé, par exemple dire que la distance à zéro de -5 est -5, ou oublier le signe - en écrivant une température sous zéro.",
          method: "Dès qu'une question porte sur des nombres relatifs, tracez au brouillon une petite droite graduée avec l'origine au milieu : placer les nombres permet de voir leur signe, leur distance à zéro et leurs opposés.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'comparer-relatifs',
          title: 'Comparer et ranger des nombres relatifs',
          minutes: 25,
          objectives: [
            "Comparer deux nombres relatifs et utiliser les symboles < et >.",
            "Ranger des nombres relatifs dans l'ordre croissant ou décroissant.",
            "Encadrer un nombre relatif décimal entre deux entiers consécutifs.",
          ],
          course: [
            {
              heading: "Comparer avec la droite graduée",
              paragraphs: [
                "Sur une droite graduée, les nombres augmentent quand on va vers la droite. Donc, de deux nombres relatifs, le plus grand est celui qui est placé le plus à droite. Ainsi -2 < 3, car -2 est à gauche de 3 ; et -5 < -1, car -5 est à gauche de -1.",
                "Pensez au thermomètre : une température de -3 °C est plus élevée qu'une température de -7 °C. Il fait plus froid à -7 °C : -7 < -3. Plus un nombre négatif est loin de zéro, plus il est petit.",
              ],
            },
            {
              heading: "Les règles de comparaison",
              paragraphs: [
                "Si les deux nombres ont des signes différents, le nombre positif est le plus grand : 0,5 > -12. Tout nombre négatif est inférieur à 0, et tout nombre positif est supérieur à 0.",
                "Si les deux nombres sont positifs, on les compare comme d'habitude : 4,2 < 6. Si les deux nombres sont négatifs, le plus grand est celui qui a la plus petite distance à zéro : -3 > -7, car 3 < 7. L'ordre est « inversé » par rapport aux distances à zéro.",
                "Exemple avec des décimaux : comparons -1,5 et -1,25. Les distances à zéro sont 1,5 et 1,25, et 1,5 > 1,25. Comme les nombres sont négatifs, l'ordre s'inverse : -1,5 < -1,25.",
              ],
              box: { label: "Règle", text: "Un nombre positif est plus grand qu'un nombre négatif. Deux positifs se comparent comme d'habitude. De deux nombres négatifs, le plus grand est celui qui a la plus petite distance à zéro : -3 > -7." },
            },
            {
              heading: "Ranger et encadrer",
              paragraphs: [
                "Ranger des nombres dans l'ordre croissant, c'est les écrire du plus petit au plus grand, avec le symbole < ; dans l'ordre décroissant, du plus grand au plus petit, avec le symbole >. Méthode : on sépare les négatifs, zéro et les positifs, puis on range chaque groupe.",
                "Encadrer un nombre entre deux entiers consécutifs, c'est trouver l'entier juste avant et l'entier juste après lui. Pour -2,7 : sur la droite graduée, -2,7 est entre -3 et -2, donc -3 < -2,7 < -2. Attention, ce n'est pas -2 < -2,7 < -3 : -3 est plus petit que -2.",
              ],
              box: { label: "À retenir", text: "Ordre croissant : du plus petit au plus grand (symbole <). Ordre décroissant : du plus grand au plus petit (symbole >). Encadrement : -3 < -2,7 < -2." },
            },
          ],
          keyPoints: [
            "Le plus grand de deux nombres est celui qui est le plus à droite sur la droite graduée.",
            "Un nombre positif est toujours plus grand qu'un nombre négatif.",
            "De deux nombres négatifs, le plus grand est le plus proche de zéro : -3 > -7.",
            "Pour ranger, on sépare négatifs, zéro et positifs, puis on range chaque groupe.",
            "Encadrement entre deux entiers consécutifs : -3 < -2,7 < -2.",
          ],
          example: {
            statement: "Rangez dans l'ordre croissant les nombres suivants : 3 ; -4,5 ; 0 ; -1 ; 2,5 ; -4 ; -0,5.",
            solution: [
              "On sépare les nombres négatifs (-4,5 ; -1 ; -4 ; -0,5), le zéro et les nombres positifs (3 ; 2,5).",
              "Les négatifs : leurs distances à zéro sont 4,5 ; 1 ; 4 et 0,5. Le plus petit des négatifs est celui qui a la plus grande distance à zéro : -4,5 < -4 < -1 < -0,5.",
              "Les positifs : 2,5 < 3.",
              "On assemble les trois groupes : les négatifs, puis 0, puis les positifs.",
              "Ordre croissant : -4,5 < -4 < -1 < -0,5 < 0 < 2,5 < 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le symbole < ou > : a) -8 ... 3 ; b) -2 ... -9 ; c) 0 ... -0,1 ; d) -4,2 ... -4,25.",
              hint: "Repérez d'abord les signes. Pour deux nombres négatifs, comparez leurs distances à zéro, puis inversez.",
              solution: [
                "a) Un négatif est plus petit qu'un positif : -8 < 3.",
                "b) Deux négatifs : distances à zéro 2 et 9 ; -2 est plus proche de zéro, donc -2 > -9.",
                "c) Tout nombre négatif est inférieur à 0 : 0 > -0,1.",
                "d) Distances à zéro : 4,2 = 4,20 et 4,25 ; 4,20 < 4,25. Pour des négatifs, l'ordre s'inverse : -4,2 > -4,25.",
              ],
            },
            {
              level: 2,
              statement: "Un matin d'hiver, on relève les températures suivantes (données fictives) : Lille -2 °C, Strasbourg -6 °C, Brest 4 °C, Lyon -1,5 °C et Grenoble -6,5 °C. a) Rangez ces températures dans l'ordre croissant. b) Quelle ville est la plus froide ? la plus chaude ? c) Dans quelles villes fait-il plus froid qu'à Lille ?",
              hint: "La ville la plus froide a la température la plus petite. Pour les températures négatives, la plus éloignée de zéro est la plus basse.",
              solution: [
                "a) Les négatifs ont pour distances à zéro 2 ; 6 ; 1,5 ; 6,5. Rangés : -6,5 < -6 < -2 < -1,5. Le seul positif est 4.",
                "Ordre croissant : -6,5 < -6 < -2 < -1,5 < 4 (Grenoble, Strasbourg, Lille, Lyon, Brest).",
                "b) La plus froide est Grenoble (-6,5 °C), la plus chaude est Brest (4 °C).",
                "c) Il fait plus froid qu'à Lille dans les villes dont la température est inférieure à -2 °C : Grenoble et Strasbourg.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Écrivez tous les nombres entiers relatifs x tels que -3 < x ≤ 2. b) Donnez un nombre compris strictement entre -1,4 et -1,3. c) Vrai ou faux : « si a < b, alors l'opposé de a est inférieur à l'opposé de b ». Justifiez avec un exemple.",
              hint: "Pour a), attention aux symboles : < exclut la borne, ≤ l'inclut. Pour c), essayez avec a = -2 et b = 5.",
              solution: [
                "a) -3 est exclu (inégalité stricte) et 2 est inclus : x peut valoir -2, -1, 0, 1 ou 2.",
                "b) On écrit -1,4 = -1,40 et -1,3 = -1,30 : par exemple -1,35 convient, car -1,40 < -1,35 < -1,30.",
                "c) Prenons a = -2 et b = 5 : on a bien -2 < 5. Leurs opposés sont 2 et -5, et 2 > -5.",
                "L'affirmation est fausse : ce contre-exemple suffit. En prenant les opposés, l'ordre s'inverse : si a < b, alors l'opposé de a est supérieur à l'opposé de b.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces nombres relatifs dans l'ordre croissant, du plus petit au plus grand.",
            items: ["-7", "-3,5", "-3", "-0,2", "0", "1,5", "4"],
          },
          quiz: [
            { q: "Quel est le plus petit de ces nombres ?", options: ["-2", "0", "-5", "-9"], answer: 3, why: "C'est le négatif le plus éloigné de zéro : -9 est le plus à gauche sur la droite graduée." },
            { q: "Quelle comparaison est juste ?", options: ["-3 > -1", "-5,5 < -6", "-2,5 < -2", "0,5 < -4,5"], answer: 2, why: "-2,5 est plus éloigné de zéro que -2 : il est plus petit." },
            { q: "Le matin, il fait -4 °C ; l'après-midi, -1 °C. Il fait...", options: ["plus froid l'après-midi", "plus chaud l'après-midi", "la même température"], answer: 1, why: "-1 > -4 : la température de l'après-midi est plus élevée." },
            { q: "Quel encadrement de -5,3 par deux entiers consécutifs est correct ?", options: ["-6 < -5,3 < -5", "-5 < -5,3 < -4", "-5,3 < -5 < -6", "5 < -5,3 < 6"], answer: 0, why: "Sur la droite graduée, -5,3 est entre -6 et -5, et -6 < -5." },
            { q: "Quel est l'ordre décroissant des nombres 2 ; -3 ; -1 ?", options: ["2 > -1 > -3", "2 > -3 > -1", "-3 > -1 > 2", "-1 > -3 > 2"], answer: 0, why: "Le positif 2 est le plus grand, puis -1, plus proche de zéro que -3." },
          ],
          trap: "Comparer des nombres négatifs comme s'ils étaient positifs, par exemple écrire -7 > -3 parce que 7 > 3, alors que -7 est plus éloigné de zéro, donc plus petit.",
          method: "Pour comparer deux nombres négatifs, pensez au thermomètre : demandez-vous laquelle des deux températures est la plus froide. Elle correspond au plus petit nombre.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'additionner-soustraire-relatifs',
          title: 'Additionner et soustraire des nombres relatifs',
          minutes: 35,
          objectives: [
            "Additionner deux nombres relatifs de même signe ou de signes contraires.",
            "Soustraire un nombre relatif en ajoutant son opposé.",
            "Calculer une suite d'additions et de soustractions de nombres relatifs.",
            "Résoudre des problèmes concrets (températures, altitudes, étages) avec les nombres relatifs.",
          ],
          course: [
            {
              heading: "Additionner deux nombres de même signe",
              paragraphs: [
                "Imaginez un jeu où chaque nombre positif est un gain de points et chaque nombre négatif une perte. Perdre 3 points puis perdre 5 points, c'est perdre 8 points en tout : (-3) + (-5) = -8. Gagner 2 points puis 4 points, c'est gagner 6 points : (+2) + (+4) = +6.",
                "Pour additionner deux nombres relatifs de même signe, on garde ce signe commun et l'on additionne leurs distances à zéro. Exemple : (-2,5) + (-1,5) = -4, car 2,5 + 1,5 = 4 et les deux nombres sont négatifs.",
              ],
              box: { label: "Règle", text: "Somme de deux nombres de même signe : on garde le signe commun et on additionne les distances à zéro. (-3) + (-5) = -8." },
            },
            {
              heading: "Additionner deux nombres de signes contraires",
              paragraphs: [
                "Perdre 7 points et en gagner 4, c'est finalement perdre 3 points : (-7) + (+4) = -3. Les gains compensent une partie des pertes, mais les pertes l'emportent. À l'inverse, (+9) + (-2) = +7 : les gains l'emportent.",
                "Pour additionner deux nombres relatifs de signes contraires, on prend le signe de celui qui a la plus grande distance à zéro, et l'on soustrait la plus petite distance à zéro de la plus grande. Exemple : (+5) + (-12) : 12 > 5, le résultat est négatif, et 12 - 5 = 7. Donc (+5) + (-12) = -7.",
                "Cas particulier : la somme de deux nombres opposés est égale à 0. Par exemple (-5) + (+5) = 0 : perdre 5 points puis en gagner 5 ramène au point de départ.",
              ],
              box: { label: "Règle", text: "Somme de deux nombres de signes contraires : on garde le signe du nombre qui a la plus grande distance à zéro et on soustrait les distances à zéro. (-7) + (+4) = -3. La somme de deux opposés est 0." },
            },
            {
              heading: "Soustraire, c'est ajouter l'opposé",
              paragraphs: [
                "Pour soustraire un nombre relatif, on ajoute son opposé. On transforme donc toute soustraction en addition, puis on applique les règles de l'addition. Exemple : (+3) - (+8) = (+3) + (-8) = -5. Autre exemple : (-4) - (-6) = (-4) + (+6) = +2.",
                "Cette règle se vérifie avec un thermomètre. Le matin, il fait -4 °C ; l'après-midi, il fait +2 °C. De combien la température a-t-elle augmenté ? On calcule (+2) - (-4) = (+2) + (+4) = +6 : elle a augmenté de 6 degrés, ce que l'on peut compter graduation par graduation.",
              ],
              box: { label: "Règle", text: "Soustraire un nombre relatif revient à ajouter son opposé : a - b = a + (opposé de b). Par exemple (-4) - (-6) = (-4) + (+6) = +2." },
            },
            {
              heading: "Enchaîner additions et soustractions",
              paragraphs: [
                "Pour calculer une expression avec plusieurs additions et soustractions, on transforme d'abord chaque soustraction en addition de l'opposé. On regroupe ensuite les nombres positifs d'un côté et les négatifs de l'autre, puis on termine. Exemple : (-5) + (+8) - (+3) - (-6) = (-5) + (+8) + (-3) + (+6) = (+14) + (-8) = +6.",
                "On peut alléger l'écriture : on supprime les parenthèses et le signe + d'un nombre positif placé en début de calcul. Ainsi (+7) + (-10) s'écrit simplement 7 - 10, qui vaut -3. Dans l'écriture simplifiée, chaque signe indique si l'on ajoute ou si l'on retire : 7 - 10 + 4 = -3 + 4 = 1.",
              ],
            },
          ],
          keyPoints: [
            "Même signe : on garde le signe et on additionne les distances à zéro. (-3) + (-5) = -8.",
            "Signes contraires : signe de la plus grande distance à zéro, et différence des distances. (-7) + (+4) = -3.",
            "La somme de deux nombres opposés est 0.",
            "Soustraire un nombre, c'est ajouter son opposé : (-4) - (-6) = (-4) + (+6) = +2.",
            "Pour une longue expression : transformer les soustractions, regrouper positifs et négatifs, puis conclure.",
          ],
          example: {
            statement: "Calculez A = (-6) - (+4) + (-3) - (-10) en détaillant les étapes.",
            solution: [
              "On transforme les soustractions en additions de l'opposé : - (+4) devient + (-4) et - (-10) devient + (+10).",
              "A = (-6) + (-4) + (-3) + (+10).",
              "On regroupe les négatifs : (-6) + (-4) + (-3) = -13 (même signe, 6 + 4 + 3 = 13).",
              "A = (-13) + (+10). Signes contraires : 13 > 10, le résultat est négatif, et 13 - 10 = 3.",
              "A = -3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez : a) (+5) + (-9) ; b) (-6) + (-7) ; c) (-12) + (+20) ; d) (-3,5) + (+3,5).",
              hint: "Regardez d'abord si les deux nombres ont le même signe ou des signes contraires, puis appliquez la règle correspondante.",
              solution: [
                "a) Signes contraires : 9 > 5, le résultat est négatif, et 9 - 5 = 4. (+5) + (-9) = -4.",
                "b) Même signe négatif : 6 + 7 = 13. (-6) + (-7) = -13.",
                "c) Signes contraires : 20 > 12, le résultat est positif, et 20 - 12 = 8. (-12) + (+20) = +8.",
                "d) Ce sont deux nombres opposés : (-3,5) + (+3,5) = 0.",
              ],
            },
            {
              level: 2,
              statement: "a) Calculez : (+4) - (+11) ; (-8) - (-3) ; (-2) - (+6) ; (+1,5) - (-2,5). b) À 6 h, le thermomètre indique -5 °C ; à 14 h, il indique +7 °C (données fictives). De combien de degrés la température a-t-elle augmenté ?",
              hint: "Transformez chaque soustraction en addition de l'opposé avant de calculer. Pour b), calculez la température d'arrivée moins la température de départ.",
              solution: [
                "(+4) - (+11) = (+4) + (-11) = -7.",
                "(-8) - (-3) = (-8) + (+3) = -5.",
                "(-2) - (+6) = (-2) + (-6) = -8.",
                "(+1,5) - (-2,5) = (+1,5) + (+2,5) = +4.",
                "b) (+7) - (-5) = (+7) + (+5) = +12. La température a augmenté de 12 °C (5 degrés pour remonter jusqu'à 0, puis 7 degrés au-dessus).",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Calculez B = (+12) - (+15) + (-7) - (-9) + (+4). b) Un ascenseur part du 3e étage, descend de 5 étages, remonte de 2 étages, puis redescend de 4 étages. Écrivez un seul calcul qui donne l'étage d'arrivée, et interprétez le résultat (le rez-de-chaussée correspond à 0). c) Trouvez le nombre manquant : (-7) + ... = +2.",
              hint: "Pour a), transformez les soustractions puis regroupez les positifs et les négatifs. Pour c), demandez-vous ce qu'il faut ajouter à -7 pour remonter jusqu'à +2.",
              solution: [
                "a) B = (+12) + (-15) + (-7) + (+9) + (+4).",
                "Positifs : 12 + 9 + 4 = 25. Négatifs : (-15) + (-7) = -22. B = (+25) + (-22) = +3.",
                "b) Calcul : (+3) + (-5) + (+2) + (-4), soit en écriture simplifiée 3 - 5 + 2 - 4.",
                "3 - 5 = -2 ; -2 + 2 = 0 ; 0 - 4 = -4. L'ascenseur arrive à l'étage -4, c'est-à-dire au quatrième sous-sol.",
                "c) Pour aller de -7 à +2, il faut monter de 7 jusqu'à 0, puis de 2 : il faut ajouter +9. Vérification : (-7) + (+9) = +2.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque calcul ou affirmation sur l'addition et la soustraction des relatifs.",
            statements: [
              { text: "(-3) + (-4) = -7", true: true, why: "Même signe : on garde le signe - et on additionne 3 et 4." },
              { text: "(-8) + (+3) = +5", true: false, why: "8 > 3 : le résultat a le signe de -8. (-8) + (+3) = -5." },
              { text: "(+6) - (+9) = -3", true: true, why: "(+6) + (-9) = -3." },
              { text: "(-2) - (-5) = -7", true: false, why: "On ajoute l'opposé : (-2) + (+5) = +3." },
              { text: "La somme de deux nombres opposés est égale à 0.", true: true, why: "Par exemple (-5) + (+5) = 0." },
              { text: "La somme de deux nombres négatifs peut être positive.", true: false, why: "Deux pertes ne font jamais un gain : la somme de deux négatifs est négative." },
              { text: "Soustraire un nombre négatif revient à ajouter un nombre positif.", true: true, why: "On ajoute son opposé, qui est positif : 3 - (-2) = 3 + 2 = 5." },
            ],
          },
          quiz: [
            { q: "Combien vaut (-9) + (+4) ?", options: ["-13", "+5", "+13", "-5"], answer: 3, why: "Signes contraires : 9 > 4, donc le résultat est négatif, et 9 - 4 = 5." },
            { q: "Combien vaut (-3) - (-8) ?", options: ["+5", "-11", "-5", "+11"], answer: 0, why: "On ajoute l'opposé : (-3) + (+8) = +5." },
            { q: "Soustraire (+6), c'est...", options: ["ajouter (+6)", "soustraire (-6)", "ajouter (-6)"], answer: 2, why: "Soustraire un nombre revient à ajouter son opposé, ici -6." },
            { q: "Il fait -3 °C, puis la température baisse de 5 °C. Il fait alors...", options: ["+2 °C", "-2 °C", "+8 °C", "-8 °C"], answer: 3, why: "(-3) + (-5) = -8 : la température descend encore plus bas sous zéro." },
            { q: "Combien vaut 4 - 10 ?", options: ["6", "14", "-6", "-14"], answer: 2, why: "4 - 10 = (+4) + (-10) : 10 > 4, le résultat est négatif, et 10 - 4 = 6." },
          ],
          trap: "Croire que deux signes - donnent toujours un résultat positif et l'appliquer à une addition, par exemple écrire (-3) + (-4) = +7 : deux pertes font une perte plus grande, (-3) + (-4) = -7.",
          method: "Avant de calculer une somme, prévoyez le signe du résultat : qui l'emporte, les gains ou les pertes ? Calculez ensuite avec les distances à zéro, puis vérifiez que le signe trouvé correspond à votre prévision.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'reperage-plan',
          title: 'Se repérer dans le plan : abscisse et ordonnée',
          minutes: 30,
          objectives: [
            "Connaître le vocabulaire du repérage dans le plan : repère, origine, axes, abscisse, ordonnée, coordonnées.",
            "Lire les coordonnées d'un point dans un repère du plan.",
            "Placer un point dont on connaît les coordonnées, qui peuvent être des nombres relatifs.",
            "Utiliser les coordonnées pour résoudre des problèmes de géométrie simples.",
          ],
          course: [
            {
              heading: "Un repère du plan",
              paragraphs: [
                "Pour repérer un point sur une droite, un seul nombre suffit. Pour repérer un point dans le plan, il en faut deux, comme pour trouver une place au cinéma (rangée et numéro de siège) ou une case au jeu de bataille navale (une lettre et un chiffre).",
                "Un repère du plan est formé de deux droites graduées perpendiculaires qui se coupent en leur origine commune O. La droite horizontale est l'axe des abscisses ; la droite verticale est l'axe des ordonnées. En général, on choisit la même unité sur les deux axes.",
              ],
            },
            {
              heading: "Les coordonnées d'un point",
              paragraphs: [
                "Tout point du plan est repéré par deux nombres relatifs, ses coordonnées : d'abord son abscisse, lue sur l'axe horizontal, puis son ordonnée, lue sur l'axe vertical. On écrit A(3 ; -2) : l'abscisse de A est 3 et son ordonnée est -2. On sépare les deux nombres par un point-virgule, car la virgule sert déjà à écrire les nombres décimaux.",
                "Pour lire les coordonnées d'un point, on trace (ou l'on imagine) la verticale qui passe par ce point : elle coupe l'axe des abscisses en son abscisse. Puis on trace l'horizontale : elle coupe l'axe des ordonnées en son ordonnée. L'origine O a pour coordonnées (0 ; 0).",
              ],
              box: { label: "À retenir", text: "Coordonnées A(abscisse ; ordonnée) : d'abord l'abscisse (axe horizontal), puis l'ordonnée (axe vertical). Abscisse vient avant ordonnée, comme dans l'ordre alphabétique." },
            },
            {
              heading: "Placer un point, les quatre zones du plan",
              paragraphs: [
                "Pour placer B(-4 ; 1), on part de l'origine O, on se déplace de 4 unités vers la gauche (abscisse négative), puis de 1 unité vers le haut (ordonnée positive). Pour placer C(2 ; -3), on va de 2 unités vers la droite puis de 3 unités vers le bas.",
                "Les deux axes partagent le plan en quatre zones. En haut à droite, les deux coordonnées sont positives ; en haut à gauche, l'abscisse est négative et l'ordonnée positive ; en bas à gauche, les deux sont négatives ; en bas à droite, l'abscisse est positive et l'ordonnée négative.",
                "Un point dont l'ordonnée est 0 est sur l'axe des abscisses, par exemple D(-2 ; 0). Un point dont l'abscisse est 0 est sur l'axe des ordonnées, par exemple E(0 ; 3).",
              ],
            },
            {
              heading: "Coordonnées et symétrie centrale",
              paragraphs: [
                "Le symétrique d'un point par rapport à l'origine O se lit directement sur ses coordonnées. Si A a pour coordonnées (3 ; -2), son symétrique A' par rapport à O a pour coordonnées (-3 ; 2) : on prend l'opposé de l'abscisse et l'opposé de l'ordonnée.",
                "En effet, pour aller de A à O, on se déplace de 3 unités vers la gauche et de 2 unités vers le haut ; pour aller de O à A', on refait le même trajet, et l'on arrive en (-3 ; 2). O est bien le milieu de [AA'].",
              ],
              box: { label: "Propriété", text: "Le symétrique par rapport à l'origine O du point de coordonnées (x ; y) est le point dont les coordonnées sont les opposés : (-x ; -y). Par exemple, (3 ; -2) devient (-3 ; 2)." },
            },
          ],
          keyPoints: [
            "Un repère : deux droites graduées perpendiculaires de même origine O, l'axe des abscisses (horizontal) et l'axe des ordonnées (vertical).",
            "A(3 ; -2) : l'abscisse d'abord (3), puis l'ordonnée (-2).",
            "Pour placer un point : on part de O, horizontalement d'abord, puis verticalement.",
            "Un point d'ordonnée 0 est sur l'axe des abscisses ; un point d'abscisse 0 est sur l'axe des ordonnées.",
            "Le symétrique de (x ; y) par rapport à l'origine est (-x ; -y).",
          ],
          example: {
            statement: "Dans un repère d'origine O, placez les points A(2 ; 3), B(-3 ; 1), C(-1 ; -2) et D(4 ; -1). Dans quelle zone se trouve chaque point ? Donnez les coordonnées de B', symétrique de B par rapport à O.",
            solution: [
              "A(2 ; 3) : 2 unités vers la droite, puis 3 vers le haut. Les deux coordonnées sont positives : zone en haut à droite.",
              "B(-3 ; 1) : 3 unités vers la gauche, puis 1 vers le haut. Abscisse négative, ordonnée positive : zone en haut à gauche.",
              "C(-1 ; -2) : 1 unité vers la gauche, puis 2 vers le bas. Les deux coordonnées sont négatives : zone en bas à gauche.",
              "D(4 ; -1) : 4 unités vers la droite, puis 1 vers le bas. Abscisse positive, ordonnée négative : zone en bas à droite.",
              "Le symétrique de B(-3 ; 1) par rapport à O a pour coordonnées les opposés : B'(3 ; -1).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque point, dites s'il est sur l'un des axes (lequel) ou dans quelle zone du plan il se trouve : E(-5 ; 2), F(0 ; -4), G(3 ; 0), H(-1 ; -6).",
              hint: "Regardez d'abord si l'une des coordonnées est nulle, puis regardez le signe de chaque coordonnée.",
              solution: [
                "E(-5 ; 2) : abscisse négative, ordonnée positive, zone en haut à gauche.",
                "F(0 ; -4) : abscisse nulle, sur l'axe des ordonnées, en dessous de O.",
                "G(3 ; 0) : ordonnée nulle, sur l'axe des abscisses, à droite de O.",
                "H(-1 ; -6) : deux coordonnées négatives, zone en bas à gauche.",
              ],
            },
            {
              level: 2,
              statement: "Dans un repère, on place A(-3 ; 2), B(4 ; 2) et C(4 ; -1). a) Quelles doivent être les coordonnées du point D pour que ABCD soit un rectangle dont les côtés sont parallèles aux axes ? b) Calculez les longueurs AB et BC, en unités. c) Déduisez-en le périmètre et l'aire du rectangle ABCD.",
              hint: "A et B ont la même ordonnée : ils sont sur une même horizontale. Pour une longueur horizontale, calculez la différence des abscisses.",
              solution: [
                "a) D doit être sur la même verticale que A (abscisse -3) et sur la même horizontale que C (ordonnée -1) : D(-3 ; -1).",
                "b) A et B ont la même ordonnée : AB = 4 - (-3) = 4 + 3 = 7 unités.",
                "B et C ont la même abscisse : BC = 2 - (-1) = 2 + 1 = 3 unités.",
                "c) Périmètre : 2 × (7 + 3) = 20 unités. Aire : 7 × 3 = 21 unités d'aire (carreaux d'une unité de côté).",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) On considère le triangle PQR avec P(1 ; 4), Q(5 ; 1) et R(2 ; -3). Donnez les coordonnées des sommets du triangle P'Q'R', symétrique de PQR par rapport à l'origine O, et la zone de chacun. b) Écrivez les coordonnées de tous les points dont l'abscisse et l'ordonnée sont deux nombres entiers opposés compris entre -2 et 2 (bornes incluses). Placez-les : que remarquez-vous ?",
              hint: "Pour a), prenez l'opposé de chaque coordonnée. Pour b), commencez par l'abscisse -2 : son opposé est 2.",
              solution: [
                "a) On prend les opposés des coordonnées : P'(-1 ; -4), Q'(-5 ; -1) et R'(-2 ; 3).",
                "P' et Q' ont deux coordonnées négatives : zone en bas à gauche. R' a une abscisse négative et une ordonnée positive : zone en haut à gauche.",
                "b) Les abscisses possibles sont -2, -1, 0, 1 et 2 ; l'ordonnée est leur opposé : (-2 ; 2), (-1 ; 1), (0 ; 0), (1 ; -1) et (2 ; -2).",
                "Une fois placés, ces cinq points sont alignés sur une même droite qui passe par l'origine O et descend de la gauche vers la droite.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque description de point à ses coordonnées.",
            pairs: [
              { left: "L'origine du repère", right: "(0 ; 0)" },
              { left: "Sur l'axe des ordonnées, 3 unités au-dessus de O", right: "(0 ; 3)" },
              { left: "Sur l'axe des abscisses, 3 unités à gauche de O", right: "(-3 ; 0)" },
              { left: "4 unités à droite de O, puis 2 vers le bas", right: "(4 ; -2)" },
              { left: "2 unités à gauche de O, puis 4 vers le haut", right: "(-2 ; 4)" },
              { left: "Le symétrique de (4 ; -2) par rapport à O", right: "(-4 ; 2)" },
            ],
          },
          quiz: [
            { q: "Quelle est l'ordonnée du point A(5 ; -3) ?", options: ["5", "-3", "2", "(5 ; -3)"], answer: 1, why: "La deuxième coordonnée est l'ordonnée : -3." },
            { q: "Dans quelle zone du plan se trouve le point B(-2 ; -4) ?", options: ["en haut à droite", "en haut à gauche", "en bas à gauche", "en bas à droite"], answer: 2, why: "L'abscisse négative place B à gauche, l'ordonnée négative le place en bas." },
            { q: "Un point d'abscisse 0 est situé...", options: ["sur l'axe des abscisses", "sur l'axe des ordonnées", "à l'origine, toujours"], answer: 1, why: "Il n'est ni à gauche ni à droite de O : il est sur l'axe vertical, celui des ordonnées." },
            { q: "Quel est le symétrique de C(3 ; -1) par rapport à l'origine ?", options: ["(-3 ; 1)", "(3 ; 1)", "(-3 ; -1)", "(1 ; -3)"], answer: 0, why: "On prend l'opposé de chacune des deux coordonnées." },
            { q: "En partant de O, on se déplace de 6 unités vers la gauche, puis de 1 unité vers le haut. Quelles sont les coordonnées du point atteint ?", options: ["(6 ; 1)", "(1 ; -6)", "(-1 ; 6)", "(-6 ; 1)"], answer: 3, why: "Le déplacement horizontal donne l'abscisse (-6), le déplacement vertical donne l'ordonnée (1)." },
          ],
          trap: "Inverser l'abscisse et l'ordonnée, par exemple placer A(3 ; -2) à 2 unités vers la gauche et 3 vers le haut, ou se déplacer d'abord verticalement.",
          method: "Pour placer ou lire un point, dites-vous toujours dans le même ordre : « d'abord horizontalement (l'abscisse), ensuite verticalement (l'ordonnée) ». Vérifiez enfin que la zone du point correspond aux signes de ses coordonnées.",
        },
      ],
    },
  ],
}
