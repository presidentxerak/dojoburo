import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-3e',
  chapters: [
    /* ================================================================== */
    /* ARITHMÉTIQUE                                                         */
    /* ================================================================== */
    {
      id: 'arithmetique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'diviseurs-nombres-premiers',
          title: 'Diviseurs, multiples et nombres premiers',
          minutes: 30,
          objectives: [
            "Déterminer si un nombre entier est un multiple ou un diviseur d'un autre nombre entier.",
            "Utiliser les critères de divisibilité par 2, 3, 4, 5, 9 et 10.",
            "Reconnaître un nombre premier et connaître les nombres premiers inférieurs à 30.",
          ],
          course: [
            {
              heading: "Multiples et diviseurs",
              paragraphs: [
                "Soient a et b deux nombres entiers, b n'étant pas nul. On dit que a est un multiple de b lorsqu'il existe un nombre entier k tel que a = k × b. On dit aussi que b est un diviseur de a, ou que a est divisible par b. Par exemple, 42 = 6 × 7 : 42 est un multiple de 6 et de 7, et 6 et 7 sont des diviseurs de 42.",
                "Pour savoir si b divise a, on effectue la division euclidienne de a par b : a = b × q + r, avec un reste r tel que 0 ≤ r < b. Si le reste est nul, b divise a. Exemple : 158 = 12 × 13 + 2. Le reste vaut 2, donc 12 ne divise pas 158. À la calculatrice, le quotient 158 ÷ 12 ≈ 13,17 n'est pas entier, ce qui conduit à la même conclusion.",
                "Tout nombre entier non nul a au moins deux diviseurs : 1 et lui-même. Pour trouver tous les diviseurs d'un nombre, on cherche les produits de deux entiers égaux à ce nombre, en partant de 1 : 36 = 1 × 36 = 2 × 18 = 3 × 12 = 4 × 9 = 6 × 6. On s'arrête quand les deux facteurs se rejoignent. Les diviseurs de 36 sont donc 1, 2, 3, 4, 6, 9, 12, 18 et 36.",
              ],
              box: { label: "Définition", text: "a est un multiple de b (ou b est un diviseur de a, ou a est divisible par b) s'il existe un nombre entier k tel que a = k × b. Autrement dit, le reste de la division euclidienne de a par b est nul." },
            },
            {
              heading: "Les critères de divisibilité",
              paragraphs: [
                "Un nombre entier est divisible par 2 si son chiffre des unités est 0, 2, 4, 6 ou 8 (c'est un nombre pair), par 5 si son chiffre des unités est 0 ou 5, et par 10 si son chiffre des unités est 0. Ainsi 3 470 est divisible par 2, par 5 et par 10, alors que 3 475 est divisible par 5 seulement parmi ces trois nombres.",
                "Un nombre est divisible par 3 si la somme de ses chiffres est divisible par 3, et par 9 si la somme de ses chiffres est divisible par 9. Pour 2 718 : 2 + 7 + 1 + 8 = 18, qui est divisible par 3 et par 9, donc 2 718 est divisible par 3 et par 9 (2 718 = 9 × 302). Pour 1 345, la somme vaut 13 : 1 345 n'est divisible ni par 3 ni par 9. Attention : un nombre divisible par 9 est toujours divisible par 3, mais pas l'inverse (12 est divisible par 3 et pas par 9).",
                "Un nombre est divisible par 4 si le nombre formé par ses deux derniers chiffres est divisible par 4. Par exemple, 1 316 est divisible par 4 car 16 = 4 × 4 (et en effet 1 316 = 4 × 329), alors que 1 318 ne l'est pas, car 18 n'est pas un multiple de 4.",
              ],
              box: { label: "Règle", text: "Divisible par 2 : chiffre des unités pair. Par 5 : chiffre des unités 0 ou 5. Par 10 : chiffre des unités 0. Par 4 : les deux derniers chiffres forment un multiple de 4. Par 3 (ou 9) : la somme des chiffres est divisible par 3 (ou 9)." },
            },
            {
              heading: "Les nombres premiers",
              paragraphs: [
                "Un nombre premier est un nombre entier qui admet exactement deux diviseurs distincts : 1 et lui-même. 7 est premier, car ses seuls diviseurs sont 1 et 7 ; 15 n'est pas premier, car 15 = 3 × 5. Le nombre 1 n'est pas premier, car il n'a qu'un seul diviseur. 2 est le seul nombre premier pair : tout autre nombre pair est divisible par 2.",
                "Les nombres premiers inférieurs à 30 sont à connaître par cœur : 2, 3, 5, 7, 11, 13, 17, 19, 23 et 29. Viennent ensuite 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 et 97 : il y a 25 nombres premiers inférieurs à 100.",
                "Pour savoir si un nombre est premier, on essaie de le diviser par les nombres premiers 2, 3, 5, 7, 11... dans l'ordre, et l'on peut s'arrêter dès que le carré du diviseur essayé dépasse le nombre. Exemple : 91 n'est divisible ni par 2, ni par 3, ni par 5, mais 91 = 7 × 13, donc 91 n'est pas premier. Pour 97, aucun des nombres 2, 3, 5 et 7 ne le divise, et 11² = 121 dépasse 97 : 97 est premier.",
                "Le crible d'Ératosthène, du nom d'un savant grec du IIIe siècle avant J.-C., permet de trouver les nombres premiers jusqu'à 100 : dans un tableau des nombres de 2 à 100, on barre les multiples de 2 (sauf 2), puis ceux de 3 (sauf 3), de 5 et de 7. Les nombres restants sont premiers. Le mathématicien grec Euclide a démontré qu'il existe une infinité de nombres premiers.",
              ],
              box: { label: "Définition", text: "Un nombre premier est un nombre entier qui a exactement deux diviseurs : 1 et lui-même. 0 et 1 ne sont pas premiers." },
            },
          ],
          keyPoints: [
            "a est un multiple de b (et b un diviseur de a) s'il existe un entier k tel que a = k × b : le reste de la division euclidienne de a par b est alors nul.",
            "Divisibilité par 2 : chiffre des unités pair ; par 5 : 0 ou 5 ; par 10 : 0 ; par 4 : les deux derniers chiffres forment un multiple de 4.",
            "Divisibilité par 3 (ou par 9) : la somme des chiffres est divisible par 3 (ou par 9).",
            "Un nombre premier a exactement deux diviseurs : 1 et lui-même. 1 n'est pas premier ; 2 est le seul nombre premier pair.",
            "Nombres premiers inférieurs à 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
            "Pour tester si un nombre est premier, on essaie 2, 3, 5, 7, 11... tant que le carré du diviseur ne dépasse pas le nombre.",
          ],
          example: {
            statement: "Le nombre 252 est-il divisible par 2, par 3, par 4, par 5, par 9 et par 10 ? Justifiez chaque réponse.",
            solution: [
              "Le chiffre des unités de 252 est 2, qui est pair : 252 est divisible par 2. Ce chiffre n'est ni 0 ni 5 : 252 n'est divisible ni par 5 ni par 10.",
              "La somme des chiffres vaut 2 + 5 + 2 = 9. Comme 9 est divisible par 3 et par 9, le nombre 252 est divisible par 3 et par 9 (252 = 9 × 28).",
              "Les deux derniers chiffres forment 52 = 4 × 13 : 252 est divisible par 4 (252 = 4 × 63).",
              "Conclusion : 252 est divisible par 2, 3, 4 et 9, mais pas par 5 ni par 10.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la liste de tous les diviseurs de 48. Le nombre 48 est-il premier ?",
              hint: "Écrivez 48 comme produit de deux entiers en partant de 1 × 48, puis 2 × ..., 3 × ..., jusqu'à ce que les deux facteurs se rejoignent.",
              solution: [
                "On cherche les produits égaux à 48 : 48 = 1 × 48 = 2 × 24 = 3 × 16 = 4 × 12 = 6 × 8.",
                "5 ne divise pas 48 (chiffre des unités 8) et 7 non plus (48 = 7 × 6 + 6). Le facteur suivant, 8, a déjà été trouvé dans 6 × 8 : on peut s'arrêter.",
                "Les diviseurs de 48 sont : 1, 2, 3, 4, 6, 8, 12, 16, 24 et 48 (dix diviseurs).",
                "48 a plus de deux diviseurs : 48 n'est pas un nombre premier.",
              ],
            },
            {
              level: 2,
              statement: "Parmi les nombres 51, 53, 57, 87, 89 et 119, lesquels sont des nombres premiers ? Justifiez chaque réponse.",
              hint: "Utilisez le critère de divisibilité par 3, puis essayez la division par 7. Il suffit de tester les nombres premiers dont le carré ne dépasse pas le nombre étudié.",
              solution: [
                "51 : 5 + 1 = 6, divisible par 3, et 51 = 3 × 17. 51 n'est pas premier.",
                "53 : il n'est divisible ni par 2, ni par 3 (5 + 3 = 8), ni par 5, ni par 7 (53 = 7 × 7 + 4). Comme 11² = 121 > 53, on peut s'arrêter : 53 est premier.",
                "57 : 5 + 7 = 12, divisible par 3, et 57 = 3 × 19. 57 n'est pas premier.",
                "87 : 8 + 7 = 15, divisible par 3, et 87 = 3 × 29. 87 n'est pas premier.",
                "89 : il n'est divisible ni par 2, ni par 3 (8 + 9 = 17), ni par 5, ni par 7 (89 = 7 × 12 + 5), et 11² = 121 > 89 : 89 est premier.",
                "119 : il n'est divisible ni par 2, ni par 3 (1 + 1 + 9 = 11), ni par 5, mais 119 = 7 × 17. 119 n'est pas premier.",
                "Conclusion : seuls 53 et 89 sont des nombres premiers.",
              ],
            },
            {
              level: 3,
              statement: "Un pâtissier a préparé 84 macarons. Il veut les ranger dans des boîtes contenant toutes le même nombre de macarons, sans qu'il en reste. a) Peut-il utiliser des boîtes de 12 macarons ? Des boîtes de 9 macarons ? Justifiez. b) Donnez toutes les tailles de boîtes possibles comprises entre 5 et 20 macarons, avec le nombre de boîtes correspondant. c) Le lendemain, il prépare 89 macarons. Expliquez pourquoi il ne peut pas les répartir dans plusieurs boîtes identiques contenant chacune au moins 2 macarons.",
              hint: "Une taille de boîte convient si elle est un diviseur de 84. Pour la question c, pensez aux nombres premiers.",
              solution: [
                "a) 84 = 12 × 7 : 12 divise 84, il peut faire 7 boîtes de 12 macarons. En revanche 8 + 4 = 12 n'est pas divisible par 9, donc 9 ne divise pas 84 : les boîtes de 9 ne conviennent pas.",
                "b) Les diviseurs de 84 sont 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42 et 84, car 84 = 1 × 84 = 2 × 42 = 3 × 28 = 4 × 21 = 6 × 14 = 7 × 12.",
                "Entre 5 et 20, les tailles possibles sont donc : 6 macarons (14 boîtes), 7 macarons (12 boîtes), 12 macarons (7 boîtes) et 14 macarons (6 boîtes).",
                "c) 89 n'est divisible ni par 2, ni par 3, ni par 5, ni par 7, et 11² = 121 > 89 : 89 est un nombre premier. Ses seuls diviseurs sont 1 et 89.",
                "Il ne peut donc faire qu'une seule boîte de 89 macarons, ou 89 boîtes d'un seul macaron : aucune répartition en plusieurs boîtes d'au moins 2 macarons n'est possible.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur les diviseurs et les nombres premiers.",
            statements: [
              { text: "1 est un nombre premier.", true: false, why: "1 n'a qu'un seul diviseur, lui-même ; un nombre premier doit en avoir exactement deux." },
              { text: "2 est un nombre premier.", true: true, why: "Ses seuls diviseurs sont 1 et 2. C'est le seul nombre premier pair." },
              { text: "Tout nombre impair est premier.", true: false, why: "9 = 3 × 3, 15 = 3 × 5 ou 91 = 7 × 13 sont impairs mais ne sont pas premiers." },
              { text: "Un nombre divisible par 9 est aussi divisible par 3.", true: true, why: "9 = 3 × 3 : si a = 9 × k, alors a = 3 × (3k)." },
              { text: "Un nombre divisible par 3 est aussi divisible par 9.", true: false, why: "12 est divisible par 3 mais pas par 9 : la réciproque est fausse." },
              { text: "51 est un nombre premier.", true: false, why: "5 + 1 = 6 est divisible par 3, et 51 = 3 × 17." },
              { text: "Si 6 divise un nombre, alors 2 et 3 le divisent aussi.", true: true, why: "6 = 2 × 3 : un multiple de 6 est un multiple de 2 et de 3." },
              { text: "0 est un multiple de 7.", true: true, why: "0 = 0 × 7 : 0 est un multiple de tous les nombres entiers." },
            ],
          },
          quiz: [
            { q: "Lequel de ces nombres est divisible par 3 mais pas par 9 ?", options: ["2 718", "1 236", "4 509", "8 100"], answer: 1, why: "1 + 2 + 3 + 6 = 12, divisible par 3 mais pas par 9. Les sommes des chiffres des autres nombres (18, 18 et 9) sont divisibles par 9." },
            { q: "Combien le nombre 18 a-t-il de diviseurs ?", options: ["4", "5", "6", "8"], answer: 2, why: "Les diviseurs de 18 sont 1, 2, 3, 6, 9 et 18, soit six diviseurs." },
            { q: "Lequel de ces nombres est premier ?", options: ["31", "21", "27", "39"], answer: 0, why: "31 n'est divisible ni par 2, ni par 3, ni par 5, et 7² = 49 > 31. Les autres sont des multiples de 3." },
            { q: "On a 158 = 12 × 13 + 2. Que peut-on affirmer ?", options: ["12 est un diviseur de 158", "158 est divisible par 12 et par 13 à la fois", "13 est un diviseur de 158", "158 n'est pas un multiple de 12"], answer: 3, why: "Le reste de la division euclidienne de 158 par 12 vaut 2, il n'est pas nul : 158 n'est pas un multiple de 12." },
            { q: "Pourquoi 1 n'est-il pas un nombre premier ?", options: ["Parce qu'il est impair", "Parce qu'il n'a qu'un seul diviseur", "Parce qu'il est trop petit pour être divisé par un autre nombre"], answer: 1, why: "Un nombre premier a exactement deux diviseurs distincts ; 1 n'en a qu'un seul." },
          ],
          trap: "Croire que 1 est premier ou que tout nombre impair est premier : 1 n'a qu'un diviseur, et 9, 15, 21 ou 91 sont impairs sans être premiers.",
          method: "Pour tester si un nombre est premier, essayez les divisions par 2, 3, 5, 7, 11... dans l'ordre et arrêtez-vous quand le carré du diviseur dépasse le nombre. Écrivez chaque essai : c'est votre justification.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'decomposition-facteurs-premiers',
          title: 'Décomposer un nombre en produit de facteurs premiers',
          minutes: 30,
          objectives: [
            "Décomposer un nombre entier en produit de facteurs premiers.",
            "Utiliser cette décomposition pour reconnaître les diviseurs d'un nombre.",
            "Résoudre un problème de partage à l'aide des diviseurs communs à deux nombres.",
          ],
          course: [
            {
              heading: "Le principe de la décomposition",
              paragraphs: [
                "Tout nombre entier supérieur ou égal à 2 peut s'écrire comme un produit de nombres premiers. Cette écriture est unique, à l'ordre des facteurs près : on l'appelle la décomposition en produit de facteurs premiers. Par exemple, 60 = 2 × 2 × 3 × 5, que l'on écrit avec une puissance : 60 = 2² × 3 × 5.",
                "Les nombres premiers sont en quelque sorte les briques élémentaires des nombres entiers : comme une molécule est formée d'atomes, chaque entier est formé de nombres premiers, et chacun a sa propre « formule ». Un nombre premier est à lui seul sa décomposition : 13 = 13.",
              ],
              box: { label: "Propriété", text: "Tout nombre entier supérieur ou égal à 2 se décompose en produit de facteurs premiers, et cette décomposition est unique (à l'ordre des facteurs près)." },
            },
            {
              heading: "La méthode des divisions successives",
              paragraphs: [
                "On divise le nombre par le plus petit nombre premier qui le divise, puis on recommence avec le quotient obtenu, jusqu'à obtenir 1. On essaie les nombres premiers dans l'ordre (2, 3, 5, 7, 11, 13...) en s'aidant des critères de divisibilité.",
                "Exemple avec 360 : 360 ÷ 2 = 180 ; 180 ÷ 2 = 90 ; 90 ÷ 2 = 45. Le nombre 45 n'est pas pair, mais 4 + 5 = 9, donc 45 ÷ 3 = 15 ; puis 15 ÷ 3 = 5 ; enfin 5 ÷ 5 = 1. On a divisé trois fois par 2, deux fois par 3 et une fois par 5 : 360 = 2³ × 3² × 5.",
                "On peut présenter les calculs en colonnes : le nombre et ses quotients successifs à gauche, les diviseurs premiers à droite. Pour vérifier, on effectue le produit : 8 × 9 × 5 = 360. Une autre méthode consiste à partir d'un produit quelconque, par exemple 360 = 36 × 10 = (4 × 9) × (2 × 5), puis à décomposer chaque facteur jusqu'à n'avoir que des nombres premiers : on retrouve forcément le même résultat.",
              ],
            },
            {
              heading: "Utiliser la décomposition",
              paragraphs: [
                "La décomposition permet de reconnaître les diviseurs d'un nombre : un diviseur de 360 = 2³ × 3² × 5 est un produit formé uniquement avec ces facteurs premiers, chacun pris au plus autant de fois que dans la décomposition. Ainsi 2² × 3 = 12 divise 360, mais 7 ne le divise pas (7 n'apparaît pas) et 2⁴ = 16 non plus (il y a seulement trois facteurs 2).",
                "Elle permet aussi de trouver les diviseurs communs à deux nombres, et le plus grand d'entre eux. Avec 84 = 2² × 3 × 7 et 120 = 2³ × 3 × 5, les facteurs communs sont 2² et 3 : le plus grand diviseur commun à 84 et 120 est 2² × 3 = 12. C'est l'outil des problèmes de partage : faire le plus grand nombre possible de lots identiques, découper des carrés les plus grands possible, etc.",
              ],
              box: { label: "À retenir", text: "Pour trouver le plus grand diviseur commun à deux nombres, on les décompose en produits de facteurs premiers, puis on multiplie les facteurs premiers communs, chacun avec le plus petit des deux exposants." },
            },
          ],
          keyPoints: [
            "Tout entier supérieur ou égal à 2 s'écrit de façon unique comme produit de nombres premiers.",
            "Méthode : diviser par le plus petit nombre premier possible, recommencer avec le quotient, jusqu'à obtenir 1.",
            "On regroupe les facteurs égaux avec des puissances : 360 = 2³ × 3² × 5.",
            "On vérifie toujours en recalculant le produit des facteurs.",
            "Un diviseur d'un nombre ne contient que ses facteurs premiers, chacun au plus autant de fois.",
            "Le plus grand diviseur commun à deux nombres est le produit de leurs facteurs premiers communs.",
          ],
          example: {
            statement: "Décomposez 1 260 en produit de facteurs premiers.",
            solution: [
              "1 260 est pair : 1 260 ÷ 2 = 630. 630 est pair : 630 ÷ 2 = 315.",
              "315 n'est pas pair, mais 3 + 1 + 5 = 9 est divisible par 3 : 315 ÷ 3 = 105. Puis 1 + 0 + 5 = 6 : 105 ÷ 3 = 35.",
              "35 n'est pas divisible par 3 ; il se termine par 5 : 35 ÷ 5 = 7. Enfin 7 ÷ 7 = 1.",
              "On a divisé deux fois par 2, deux fois par 3, une fois par 5 et une fois par 7.",
              "Vérification : 4 × 9 × 5 × 7 = 36 × 35 = 1 260.",
              "Résultat : 1 260 = 2² × 3² × 5 × 7.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez en produits de facteurs premiers les nombres 84, 150 et 297.",
              hint: "Commencez par diviser par 2 tant que c'est possible, puis par 3, par 5, par 7, etc. Pour 297, utilisez la somme des chiffres.",
              solution: [
                "84 ÷ 2 = 42 ; 42 ÷ 2 = 21 ; 21 ÷ 3 = 7 ; 7 ÷ 7 = 1. Donc 84 = 2² × 3 × 7.",
                "150 ÷ 2 = 75 ; 75 ÷ 3 = 25 ; 25 ÷ 5 = 5 ; 5 ÷ 5 = 1. Donc 150 = 2 × 3 × 5².",
                "297 est impair ; 2 + 9 + 7 = 18 : 297 ÷ 3 = 99 ; 99 ÷ 3 = 33 ; 33 ÷ 3 = 11 ; 11 ÷ 11 = 1. Donc 297 = 3³ × 11.",
                "Vérifications : 4 × 3 × 7 = 84 ; 2 × 3 × 25 = 150 ; 27 × 11 = 297.",
              ],
            },
            {
              level: 2,
              statement: "On donne 2 520 = 2³ × 3² × 5 × 7. a) Vérifiez cette égalité. b) Sans effectuer de division, dites si 2 520 est divisible par 14, par 27, par 40 et par 11. Justifiez.",
              hint: "Décomposez chaque diviseur proposé (14, 27, 40, 11) et regardez si ses facteurs premiers figurent dans la décomposition de 2 520, avec un exposant suffisant.",
              solution: [
                "a) 2³ × 3² × 5 × 7 = 8 × 9 × 5 × 7 = 72 × 35 = 2 520. L'égalité est vérifiée.",
                "b) 14 = 2 × 7 : les facteurs 2 et 7 figurent dans la décomposition, donc 14 divise 2 520 (2 520 = 14 × 180).",
                "27 = 3³ : la décomposition de 2 520 ne contient que 3², donc 27 ne divise pas 2 520.",
                "40 = 2³ × 5 : 2³ et 5 figurent dans la décomposition, donc 40 divise 2 520 (2 520 = 40 × 63).",
                "11 est premier et n'apparaît pas dans la décomposition : 11 ne divise pas 2 520.",
              ],
            },
            {
              level: 3,
              statement: "Un fleuriste dispose de 252 roses et de 180 tulipes. Il veut composer le plus grand nombre possible de bouquets identiques (même nombre de roses et même nombre de tulipes dans chaque bouquet), en utilisant toutes les fleurs. a) Décomposez 252 et 180 en produits de facteurs premiers. b) Combien de bouquets peut-il composer au maximum ? c) Quelle est la composition de chaque bouquet ?",
              hint: "Le nombre de bouquets doit diviser à la fois 252 et 180 : cherchez le plus grand diviseur commun à ces deux nombres.",
              solution: [
                "a) 252 ÷ 2 = 126 ; 126 ÷ 2 = 63 ; 63 ÷ 3 = 21 ; 21 ÷ 3 = 7 ; 7 ÷ 7 = 1, donc 252 = 2² × 3² × 7.",
                "180 ÷ 2 = 90 ; 90 ÷ 2 = 45 ; 45 ÷ 3 = 15 ; 15 ÷ 3 = 5 ; 5 ÷ 5 = 1, donc 180 = 2² × 3² × 5.",
                "b) Toutes les fleurs sont utilisées et les bouquets sont identiques : le nombre de bouquets divise 252 et 180. On veut le plus grand diviseur commun.",
                "Les facteurs premiers communs sont 2² et 3² : le plus grand diviseur commun est 2² × 3² = 36. Il peut composer au maximum 36 bouquets.",
                "c) 252 ÷ 36 = 7 et 180 ÷ 36 = 5 : chaque bouquet contient 7 roses et 5 tulipes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la décomposition de 600 en produit de facteurs premiers.",
            items: [
              "600 ÷ 2 = 300",
              "300 ÷ 2 = 150",
              "150 ÷ 2 = 75",
              "75 ÷ 3 = 25",
              "25 ÷ 5 = 5",
              "5 ÷ 5 = 1",
              "Donc 600 = 2³ × 3 × 5²",
            ],
          },
          quiz: [
            { q: "Quelle est la décomposition en produit de facteurs premiers de 72 ?", options: ["2³ × 3²", "8 × 9", "2² × 3³", "2 × 36"], answer: 0, why: "72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3². L'écriture 8 × 9 est juste mais 8 et 9 ne sont pas premiers." },
            { q: "Quelle écriture est une décomposition en produit de facteurs premiers ?", options: ["4 × 5 × 7", "2 × 3² × 11", "3 × 5 × 9", "1 × 2 × 13"], answer: 1, why: "2, 3 et 11 sont premiers. 4 et 9 ne le sont pas, et 1 n'est pas un nombre premier." },
            { q: "Sachant que 360 = 2³ × 3² × 5, lequel de ces nombres ne divise pas 360 ?", options: ["24", "45", "16", "18"], answer: 2, why: "16 = 2⁴ demande quatre facteurs 2, alors que 360 n'en contient que trois." },
            { q: "Quel est le plus grand diviseur commun à 2² × 3 × 7 et à 2 × 3² × 5 ?", options: ["2² × 3², soit 36", "2 × 3 × 5 × 7, soit 210", "1, car ils n'ont aucun facteur commun", "2 × 3, soit 6"], answer: 3, why: "Les facteurs communs sont 2 et 3, chacun pris avec le plus petit exposant : 2¹ × 3¹ = 6." },
            { q: "Combien de fois divise-t-on par 2 en décomposant 48 ?", options: ["3", "4", "5"], answer: 1, why: "48 ÷ 2 = 24, 24 ÷ 2 = 12, 12 ÷ 2 = 6, 6 ÷ 2 = 3 : quatre fois, car 48 = 2⁴ × 3." },
          ],
          trap: "Laisser des facteurs qui ne sont pas premiers (écrire 360 = 8 × 45 ou 2³ × 45) ou oublier un facteur : il faut poursuivre les divisions jusqu'au quotient 1.",
          method: "Vérifiez toujours votre décomposition en recalculant le produit des facteurs : vous devez retrouver le nombre de départ. Rangez ensuite les facteurs premiers dans l'ordre croissant, avec des puissances.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'fractions-irreductibles',
          title: 'Rendre une fraction irréductible',
          minutes: 25,
          objectives: [
            "Simplifier une fraction à l'aide des critères de divisibilité.",
            "Rendre une fraction irréductible à l'aide de la décomposition en produit de facteurs premiers.",
            "Reconnaître une fraction irréductible.",
          ],
          course: [
            {
              heading: "Simplifier une fraction",
              paragraphs: [
                "Une fraction a/b (avec b ≠ 0) ne change pas de valeur quand on multiplie ou que l'on divise son numérateur et son dénominateur par un même nombre non nul. Simplifier une fraction, c'est diviser son numérateur et son dénominateur par un diviseur commun. Exemple : 18/24 = (6 × 3)/(6 × 4) = 3/4.",
                "On peut simplifier en plusieurs étapes, à l'aide des critères de divisibilité : 90/150 = 45/75 (en divisant par 2), puis 45/75 = 15/25 (en divisant par 3), puis 15/25 = 3/5 (en divisant par 5). Chaque étape donne une fraction égale à la précédente, écrite avec des nombres plus petits.",
              ],
              box: { label: "Propriété", text: "Pour tous nombres a, b et k, avec b ≠ 0 et k ≠ 0 : (a × k)/(b × k) = a/b." },
            },
            {
              heading: "Qu'est-ce qu'une fraction irréductible ?",
              paragraphs: [
                "Une fraction est irréductible lorsque son numérateur et son dénominateur n'ont aucun diviseur commun autre que 1 : on ne peut plus la simplifier. Les fractions 3/4, 5/9 ou 7/12 sont irréductibles ; 6/9 ne l'est pas, car 6 et 9 sont tous les deux divisibles par 3.",
                "Une fraction peut être irréductible sans que ses termes soient des nombres premiers : 8/15 est irréductible, car 8 = 2³ et 15 = 3 × 5 n'ont aucun facteur premier commun, alors que ni 8 ni 15 n'est premier. Toute fraction a une seule écriture irréductible avec un dénominateur positif : c'est la forme attendue dans un résultat final.",
              ],
              box: { label: "Définition", text: "Une fraction a/b est irréductible lorsque le seul diviseur commun positif de a et de b est 1." },
            },
            {
              heading: "La méthode par la décomposition en facteurs premiers",
              paragraphs: [
                "Avec de grands nombres, on décompose le numérateur et le dénominateur en produits de facteurs premiers, puis on supprime les facteurs communs. Exemple : 252/360 = (2² × 3² × 7)/(2³ × 3² × 5). On simplifie par 2² et par 3² ; il reste 7/(2 × 5) = 7/10.",
                "Cette méthode donne une fraction irréductible en une seule étape : après simplification, le numérateur et le dénominateur n'ont plus aucun facteur premier commun. Elle revient à diviser le numérateur et le dénominateur par leur plus grand diviseur commun, ici 2² × 3² = 36 : 252 ÷ 36 = 7 et 360 ÷ 36 = 10.",
                "La calculatrice sait aussi rendre une fraction irréductible, ce qui permet de vérifier un résultat. Au brevet, il faut cependant savoir justifier la simplification par un calcul écrit.",
              ],
              box: { label: "À retenir", text: "Décomposer le numérateur et le dénominateur, barrer les facteurs premiers communs, multiplier ce qui reste : la fraction obtenue est irréductible." },
            },
          ],
          keyPoints: [
            "On ne change pas une fraction en divisant son numérateur et son dénominateur par un même nombre non nul.",
            "Une fraction est irréductible quand son numérateur et son dénominateur n'ont que 1 comme diviseur commun.",
            "Une fraction peut être irréductible sans que ses termes soient premiers : 8/15 est irréductible.",
            "Méthode sûre : décomposer en facteurs premiers et supprimer les facteurs communs.",
            "Cela revient à diviser par le plus grand diviseur commun du numérateur et du dénominateur.",
            "Un résultat final s'écrit toujours sous forme irréductible.",
          ],
          example: {
            statement: "Rendez la fraction 495/660 irréductible.",
            solution: [
              "Décomposition de 495 : 4 + 9 + 5 = 18, donc 495 ÷ 3 = 165 ; 165 ÷ 3 = 55 ; 55 ÷ 5 = 11 ; 11 ÷ 11 = 1. Donc 495 = 3² × 5 × 11.",
              "Décomposition de 660 : 660 ÷ 2 = 330 ; 330 ÷ 2 = 165 ; 165 ÷ 3 = 55 ; 55 ÷ 5 = 11 ; 11 ÷ 11 = 1. Donc 660 = 2² × 3 × 5 × 11.",
              "495/660 = (3² × 5 × 11)/(2² × 3 × 5 × 11). Les facteurs communs sont 3, 5 et 11.",
              "Après simplification, il reste 3/2² = 3/4.",
              "Vérification : 3 × 165 = 495 et 4 × 165 = 660. Résultat : 495/660 = 3/4.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Rendez irréductibles les fractions 14/21, 36/48 et 45/75.",
              hint: "Cherchez un diviseur commun au numérateur et au dénominateur (7, 2, 3, 5...) et recommencez tant que c'est possible.",
              solution: [
                "14/21 = (7 × 2)/(7 × 3) = 2/3. 2 et 3 n'ont pas d'autre diviseur commun que 1 : 2/3 est irréductible.",
                "36/48 = (12 × 3)/(12 × 4) = 3/4, irréductible.",
                "45/75 = (15 × 3)/(15 × 5) = 3/5, irréductible.",
              ],
            },
            {
              level: 2,
              statement: "a) Décomposez 126 et 294 en produits de facteurs premiers. b) Déduisez-en la forme irréductible de la fraction 126/294.",
              hint: "Après la décomposition, barrez les facteurs premiers présents à la fois en haut et en bas de la fraction.",
              solution: [
                "a) 126 ÷ 2 = 63 ; 63 ÷ 3 = 21 ; 21 ÷ 3 = 7 ; 7 ÷ 7 = 1. Donc 126 = 2 × 3² × 7.",
                "294 ÷ 2 = 147 ; 147 ÷ 3 = 49 ; 49 ÷ 7 = 7 ; 7 ÷ 7 = 1. Donc 294 = 2 × 3 × 7².",
                "b) 126/294 = (2 × 3² × 7)/(2 × 3 × 7²). Les facteurs communs sont 2, 3 et 7.",
                "Il reste 3/7. Vérification : 126 ÷ 42 = 3 et 294 ÷ 42 = 7. Résultat : 126/294 = 3/7.",
              ],
            },
            {
              level: 3,
              statement: "Dans le collège A, 168 des 252 élèves de 3e pratiquent un sport en club. Dans le collège B, 135 des 225 élèves de 3e le font. a) Pour chaque collège, écrivez sous forme irréductible la fraction des élèves de 3e qui pratiquent un sport en club. b) Dans quel collège cette proportion est-elle la plus grande ? Justifiez.",
              hint: "Décomposez les quatre nombres en produits de facteurs premiers. Pour comparer deux fractions, mettez-les au même dénominateur.",
              solution: [
                "a) 168 = 2³ × 3 × 7 et 252 = 2² × 3² × 7. Donc 168/252 = (2³ × 3 × 7)/(2² × 3² × 7) = 2/3.",
                "135 = 3³ × 5 et 225 = 3² × 5². Donc 135/225 = (3³ × 5)/(3² × 5²) = 3/5.",
                "b) On met les deux fractions au même dénominateur 15 : 2/3 = 10/15 et 3/5 = 9/15.",
                "Comme 10/15 > 9/15, la proportion est plus grande dans le collège A (deux élèves sur trois, contre trois sur cinq dans le collège B).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque fraction à sa forme irréductible.",
            pairs: [
              { left: "12/18", right: "2/3" },
              { left: "25/100", right: "1/4" },
              { left: "42/56", right: "3/4" },
              { left: "35/45", right: "7/9" },
              { left: "60/84", right: "5/7" },
              { left: "48/80", right: "3/5" },
            ],
          },
          quiz: [
            { q: "Quelle est la forme irréductible de 24/36 ?", options: ["12/18", "2/3", "4/6", "3/2"], answer: 1, why: "24 = 12 × 2 et 36 = 12 × 3, donc 24/36 = 2/3. Les fractions 12/18 et 4/6 sont égales mais se simplifient encore." },
            { q: "Laquelle de ces fractions est irréductible ?", options: ["9/21", "10/25", "14/33", "22/55"], answer: 2, why: "14 = 2 × 7 et 33 = 3 × 11 n'ont aucun facteur premier commun. Les autres se simplifient par 3, 5 et 11." },
            { q: "On a 150 = 2 × 3 × 5² et 225 = 3² × 5². Quelle est la forme irréductible de 150/225 ?", options: ["6/9", "10/15", "50/75", "2/3"], answer: 3, why: "On simplifie par 3 × 5² = 75 : il reste 2/3. Les autres fractions sont égales à 2/3 mais pas irréductibles." },
            { q: "La fraction 8/15 est-elle irréductible ?", options: ["Non, car 8 et 15 ne sont pas premiers", "Oui, car 8 et 15 n'ont aucun facteur premier commun", "Non, car on peut encore la simplifier en divisant par 2 en haut et en bas"], answer: 1, why: "8 = 2³ et 15 = 3 × 5 : leur seul diviseur commun est 1. Il n'est pas nécessaire que les termes soient premiers." },
            { q: "Par quel nombre faut-il diviser le numérateur et le dénominateur de 252/360 pour obtenir directement une fraction irréductible ?", options: ["36", "12", "18", "4"], answer: 0, why: "36 = 2² × 3² est le plus grand diviseur commun de 252 et 360 : 252/360 = 7/10." },
          ],
          trap: "S'arrêter après une première simplification (36/48 = 18/24, qui se simplifie encore), ou croire qu'une fraction n'est irréductible que si ses termes sont premiers.",
          method: "Après chaque simplification, demandez-vous si le numérateur et le dénominateur ont encore un diviseur commun (2, 3, 5, 7...). En cas de doute, passez par la décomposition en facteurs premiers, puis vérifiez à la calculatrice.",
        },
      ],
    },

    /* ================================================================== */
    /* PUISSANCES ET RACINES CARRÉES                                        */
    /* ================================================================== */
    {
      id: 'puissances-racines',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'puissances',
          title: 'Calculer avec les puissances',
          minutes: 30,
          objectives: [
            "Calculer une puissance d'exposant entier positif ou négatif.",
            "Utiliser les règles de calcul sur les puissances d'un même nombre.",
            "Respecter les priorités opératoires dans un calcul comportant des puissances.",
          ],
          course: [
            {
              heading: "Puissance d'exposant positif",
              paragraphs: [
                "Pour un nombre a et un entier n supérieur ou égal à 1, aⁿ (qui se lit « a puissance n » ou « a exposant n ») désigne le produit de n facteurs égaux à a : aⁿ = a × a × ... × a. Par exemple 2⁵ = 2 × 2 × 2 × 2 × 2 = 32. On lit a² « a au carré » et a³ « a au cube ». Par convention, a¹ = a et, pour a ≠ 0, a⁰ = 1.",
                "Ne confondez pas puissance et produit : 3⁴ = 3 × 3 × 3 × 3 = 81, alors que 3 × 4 = 12. Les puissances grandissent très vite : 2¹⁰ = 1 024, c'est déjà plus de mille.",
                "Pour un nombre négatif, le signe dépend de l'exposant : (-2)³ = (-2) × (-2) × (-2) = -8 (exposant impair, résultat négatif) et (-2)⁴ = 16 (exposant pair, résultat positif). Les parenthèses sont essentielles : dans -3², la puissance ne porte que sur 3, donc -3² = -(3 × 3) = -9, alors que (-3)² = (-3) × (-3) = 9.",
              ],
              box: { label: "Définition", text: "Pour tout nombre a et tout entier n ≥ 1 : aⁿ = a × a × ... × a (n facteurs). Pour a ≠ 0 : a⁰ = 1." },
            },
            {
              heading: "Puissance d'exposant négatif",
              paragraphs: [
                "Pour a ≠ 0 et n entier positif, a⁻ⁿ est l'inverse de aⁿ : a⁻ⁿ = 1/aⁿ. Ainsi 2⁻³ = 1/2³ = 1/8 = 0,125 et 5⁻¹ = 1/5 = 0,2. Un exposant négatif ne rend pas le nombre négatif : 2⁻³ est un nombre positif.",
                "Cette définition prolonge naturellement la suite des puissances : 2³ = 8, 2² = 4, 2¹ = 2, 2⁰ = 1, 2⁻¹ = 1/2, 2⁻² = 1/4. Chaque fois que l'exposant diminue de 1, on divise par 2. C'est aussi ce qui explique la convention a⁰ = 1.",
              ],
              box: { label: "Définition", text: "Pour a ≠ 0 et n entier positif : a⁻ⁿ = 1/aⁿ, l'inverse de aⁿ. En particulier a⁻¹ = 1/a." },
            },
            {
              heading: "Les règles de calcul et les priorités",
              paragraphs: [
                "Pour un nombre a non nul et des entiers m et n : aᵐ × aⁿ = aᵐ⁺ⁿ, car on met bout à bout m facteurs a et n facteurs a. De même aᵐ/aⁿ = aᵐ⁻ⁿ et (aᵐ)ⁿ = aᵐⁿ. Exemples : 3² × 3⁴ = 3⁶ ; 5⁷/5³ = 5⁴ ; (2³)² = 2⁶ ; 7⁻² × 7⁵ = 7³.",
                "Ces règles ne concernent que des produits ou des quotients de puissances d'un même nombre. Il n'existe aucune règle pour une somme : 2³ + 2² = 8 + 4 = 12, qui n'est pas égal à 2⁵ = 32. On peut en revanche regrouper des puissances de même exposant : aⁿ × bⁿ = (a × b)ⁿ, par exemple 2³ × 5³ = 10³ = 1 000.",
                "Dans un calcul, on effectue d'abord les calculs entre parenthèses, puis les puissances, puis les multiplications et les divisions, enfin les additions et les soustractions. Exemple : 5 + 2 × 3² = 5 + 2 × 9 = 5 + 18 = 23. Avec des parenthèses, le résultat change : (5 + 2 × 3)² = 11² = 121.",
              ],
              box: { label: "Formule", text: "Pour a ≠ 0, m et n entiers : aᵐ × aⁿ = aᵐ⁺ⁿ ; aᵐ/aⁿ = aᵐ⁻ⁿ ; (aᵐ)ⁿ = aᵐⁿ. Priorités : parenthèses, puissances, multiplications et divisions, additions et soustractions." },
            },
          ],
          keyPoints: [
            "aⁿ est le produit de n facteurs égaux à a ; a¹ = a et, pour a ≠ 0, a⁰ = 1.",
            "a⁻ⁿ = 1/aⁿ : un exposant négatif donne un inverse, pas un nombre négatif.",
            "(-3)² = 9 mais -3² = -9 : la puissance ne porte que sur ce qui est juste devant elle.",
            "aᵐ × aⁿ = aᵐ⁺ⁿ, aᵐ/aⁿ = aᵐ⁻ⁿ, (aᵐ)ⁿ = aᵐⁿ, pour des puissances d'un même nombre.",
            "Aucune règle pour une somme : 2³ + 2² n'est pas égal à 2⁵.",
            "Priorités : parenthèses, puissances, multiplications et divisions, additions et soustractions.",
          ],
          example: {
            statement: "Calculez A = 2 × 5² - 3³ + 4⁰, puis écrivez B = (2⁵ × 2⁻²)/2² sous la forme d'un nombre entier.",
            solution: [
              "Pour A, on calcule d'abord les puissances : 5² = 25, 3³ = 27 et 4⁰ = 1.",
              "A = 2 × 25 - 27 + 1 = 50 - 27 + 1 = 24.",
              "Pour B, au numérateur : 2⁵ × 2⁻² = 2⁵⁺⁽⁻²⁾ = 2³.",
              "Puis B = 2³/2² = 2³⁻² = 2¹ = 2.",
              "Résultats : A = 24 et B = 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez sans calculatrice : a) 4³ ; b) (-5)² ; c) -5² ; d) (-1)⁷ ; e) 10⁰ ; f) 3⁻².",
              hint: "Écrivez chaque puissance sous forme de produit. Pour un exposant négatif, prenez l'inverse de la puissance positive.",
              solution: [
                "a) 4³ = 4 × 4 × 4 = 64.",
                "b) (-5)² = (-5) × (-5) = 25.",
                "c) -5² = -(5 × 5) = -25 : la puissance ne porte que sur 5.",
                "d) (-1)⁷ = -1, car l'exposant 7 est impair.",
                "e) 10⁰ = 1, par convention.",
                "f) 3⁻² = 1/3² = 1/9.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez chaque expression sous la forme d'une seule puissance : a) 7³ × 7⁵ ; b) 6⁹/6⁴ ; c) (4²)³ ; d) 2⁻³ × 2⁷ ; e) 3⁵ × 2⁵.",
              hint: "Repérez d'abord s'il s'agit de puissances d'un même nombre (on ajoute ou on soustrait les exposants) ou de puissances de même exposant (on multiplie les nombres).",
              solution: [
                "a) 7³ × 7⁵ = 7³⁺⁵ = 7⁸.",
                "b) 6⁹/6⁴ = 6⁹⁻⁴ = 6⁵.",
                "c) (4²)³ = 4² × 4² × 4² = 4²⁺²⁺² = 4⁶ (on multiplie les exposants : 2 × 3 = 6).",
                "d) 2⁻³ × 2⁷ = 2⁻³⁺⁷ = 2⁴.",
                "e) 3⁵ × 2⁵ = (3 × 2)⁵ = 6⁵.",
              ],
            },
            {
              level: 3,
              statement: "On place une bactérie dans un milieu de culture à 8 h. On suppose que le nombre de bactéries double toutes les 20 minutes. a) Combien y a-t-il de bactéries à 9 h ? b) Combien y en a-t-il à 14 h ? Donnez le résultat sous la forme 2ⁿ, puis en écriture décimale. c) À quelle heure le nombre de bactéries dépasse-t-il pour la première fois un million ? On pourra utiliser la calculatrice.",
              hint: "Comptez combien de doublements ont lieu en une heure. Après n doublements, il y a 2ⁿ bactéries.",
              solution: [
                "En une heure, il y a 60 ÷ 20 = 3 doublements : le nombre de bactéries est multiplié par 2³ = 8 chaque heure.",
                "a) À 9 h, il y a 2³ = 8 bactéries.",
                "b) De 8 h à 14 h, il s'écoule 6 heures, soit 6 × 3 = 18 doublements. Il y a donc 2¹⁸ = 262 144 bactéries.",
                "c) On cherche la plus petite puissance de 2 supérieure à 1 000 000 : 2¹⁹ = 524 288 et 2²⁰ = 1 048 576.",
                "Il faut donc 20 doublements, soit 20 × 20 = 400 minutes, c'est-à-dire 6 h 40 min.",
                "Le nombre de bactéries dépasse un million pour la première fois à 8 h + 6 h 40 min = 14 h 40.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque puissance à sa valeur.",
            pairs: [
              { left: "2⁵", right: "32" },
              { left: "(-3)²", right: "9" },
              { left: "-3²", right: "-9" },
              { left: "10⁻²", right: "0,01" },
              { left: "7⁰", right: "1" },
              { left: "2⁻¹", right: "0,5" },
            ],
          },
          quiz: [
            { q: "Que vaut 2⁴ ?", options: ["8", "16", "6", "24"], answer: 1, why: "2⁴ = 2 × 2 × 2 × 2 = 16. Il ne faut pas confondre avec 2 × 4 = 8." },
            { q: "Que vaut 4⁻² ?", options: ["-16", "-8", "1/16", "1/8"], answer: 2, why: "4⁻² = 1/4² = 1/16 : un exposant négatif donne l'inverse, pas un nombre négatif." },
            { q: "Quelle égalité est vraie ?", options: ["3² × 3⁵ = 3¹⁰", "3² × 3⁵ = 9⁷", "3² + 3⁵ = 3⁷", "3² × 3⁵ = 3⁷"], answer: 3, why: "Pour un produit de puissances d'un même nombre, on ajoute les exposants : 2 + 5 = 7. Aucune règle ne s'applique à une somme." },
            { q: "Que vaut -2⁴ ?", options: ["16", "-16", "-8", "8"], answer: 1, why: "La puissance ne porte que sur 2 : -2⁴ = -(2 × 2 × 2 × 2) = -16. En revanche (-2)⁴ = 16." },
            { q: "Que vaut 5 + 3 × 2² ?", options: ["17", "64", "41", "22"], answer: 0, why: "On calcule d'abord la puissance (2² = 4), puis la multiplication (3 × 4 = 12), puis l'addition : 5 + 12 = 17." },
          ],
          trap: "Confondre -3² et (-3)², ou croire qu'un exposant négatif donne un nombre négatif : -3² = -9, (-3)² = 9 et 2⁻³ = 1/8 est positif.",
          method: "Avant de calculer, repérez sur quoi porte l'exposant (le nombre seul ou toute la parenthèse). En cas de doute sur une règle, revenez à la définition en écrivant le produit des facteurs.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'notation-scientifique',
          title: 'Puissances de 10 et notation scientifique',
          minutes: 30,
          objectives: [
            "Calculer avec les puissances de 10.",
            "Écrire un nombre en notation scientifique et en donner l'ordre de grandeur.",
            "Comparer des nombres écrits en notation scientifique.",
            "Utiliser les préfixes de nano à giga.",
          ],
          course: [
            {
              heading: "Les puissances de 10",
              paragraphs: [
                "Pour n entier positif, 10ⁿ s'écrit avec un 1 suivi de n zéros : 10⁴ = 10 000. La puissance 10⁻ⁿ = 1/10ⁿ s'écrit 0,0...01, le chiffre 1 étant au n-ième rang après la virgule : 10⁻³ = 0,001 (le 1 est au rang des millièmes).",
                "Multiplier un nombre par 10ⁿ décale sa virgule de n rangs vers la droite ; le multiplier par 10⁻ⁿ la décale de n rangs vers la gauche. Ainsi 3,7 × 10² = 370 et 3,7 × 10⁻² = 0,037.",
                "Les règles de calcul sur les puissances s'appliquent : 10ᵐ × 10ⁿ = 10ᵐ⁺ⁿ, 10ᵐ/10ⁿ = 10ᵐ⁻ⁿ et (10ᵐ)ⁿ = 10ᵐⁿ. Exemples : 10⁵ × 10⁻⁸ = 10⁻³ ; 10⁴/10⁻² = 10⁴⁺² = 10⁶ ; (10³)² = 10⁶.",
              ],
            },
            {
              heading: "La notation scientifique",
              paragraphs: [
                "La notation scientifique d'un nombre décimal positif est son écriture sous la forme a × 10ⁿ, où a est un nombre décimal tel que 1 ≤ a < 10 (un seul chiffre non nul avant la virgule) et n un entier relatif. Exemples : 45 000 = 4,5 × 10⁴ ; 0,000 72 = 7,2 × 10⁻⁴. Pour un nombre négatif, on place le signe devant : -3 200 = -3,2 × 10³.",
                "Pour l'obtenir, on place la virgule juste après le premier chiffre non nul, puis on compte de combien de rangs elle s'est déplacée : si elle s'est déplacée vers la gauche (grand nombre), l'exposant est positif ; vers la droite (nombre inférieur à 1), il est négatif. Les écritures 45 × 10³ ou 0,45 × 10⁵ sont bien égales à 45 000, mais ce ne sont pas des notations scientifiques.",
                "Les sciences l'utilisent pour écrire des nombres très grands ou très petits : la vitesse de la lumière dans le vide vaut environ 3 × 10⁸ m/s, et le diamètre d'un atome est de l'ordre de 10⁻¹⁰ m. La puissance de 10 donne l'ordre de grandeur du nombre.",
              ],
              box: { label: "Définition", text: "La notation scientifique d'un nombre décimal positif est l'écriture a × 10ⁿ, avec a décimal tel que 1 ≤ a < 10, et n entier relatif." },
            },
            {
              heading: "Comparer et utiliser les préfixes",
              paragraphs: [
                "Pour comparer deux nombres positifs écrits en notation scientifique, on compare d'abord les exposants : le plus grand exposant donne le plus grand nombre, par exemple 2 × 10⁵ > 9 × 10⁴. Si les exposants sont égaux, on compare les nombres a : 3,1 × 10⁻² < 3,8 × 10⁻².",
                "Les préfixes des unités correspondent à des puissances de 10 : giga (G) = 10⁹, méga (M) = 10⁶, kilo (k) = 10³, milli (m) = 10⁻³, micro (µ) = 10⁻⁶ et nano (n) = 10⁻⁹. Ainsi 5 Go = 5 × 10⁹ octets, et 450 nm = 450 × 10⁻⁹ m = 4,5 × 10⁻⁷ m.",
              ],
              box: { label: "Repère", text: "giga G = 10⁹ ; méga M = 10⁶ ; kilo k = 10³ ; milli m = 10⁻³ ; micro µ = 10⁻⁶ ; nano n = 10⁻⁹." },
            },
          ],
          keyPoints: [
            "10ⁿ = 1 suivi de n zéros ; 10⁻ⁿ = 0,0...01 avec le 1 au n-ième rang après la virgule.",
            "Multiplier par 10ⁿ décale la virgule de n rangs vers la droite, par 10⁻ⁿ de n rangs vers la gauche.",
            "Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10 et n entier relatif.",
            "Un nombre supérieur à 10 a un exposant positif ; un nombre entre 0 et 1 a un exposant négatif.",
            "Pour comparer, on compare d'abord les exposants, puis les nombres a.",
            "Préfixes : giga 10⁹, méga 10⁶, kilo 10³, milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹.",
          ],
          example: {
            statement: "Donnez la notation scientifique de A = 0,000 058 et de B = 3 × 10⁵ × 4 × 10⁻².",
            solution: [
              "Pour A, on place la virgule après le premier chiffre non nul : 5,8. La virgule s'est déplacée de 5 rangs vers la droite.",
              "Le nombre A est inférieur à 1, l'exposant est négatif : A = 5,8 × 10⁻⁵.",
              "Pour B, on regroupe les nombres et les puissances de 10 : B = (3 × 4) × (10⁵ × 10⁻²) = 12 × 10³.",
              "12 n'est pas compris entre 1 et 10 : on écrit 12 = 1,2 × 10¹, donc B = 1,2 × 10¹ × 10³ = 1,2 × 10⁴.",
              "Résultats : A = 5,8 × 10⁻⁵ et B = 1,2 × 10⁴ (soit 12 000).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'écriture décimale de : a) 10⁶ ; b) 10⁻⁴ ; c) 2,5 × 10³ ; d) 7,1 × 10⁻².",
              hint: "Exposant positif : la virgule va vers la droite. Exposant négatif : elle va vers la gauche.",
              solution: [
                "a) 10⁶ = 1 000 000.",
                "b) 10⁻⁴ = 0,000 1.",
                "c) 2,5 × 10³ = 2 500 (virgule décalée de 3 rangs vers la droite).",
                "d) 7,1 × 10⁻² = 0,071 (virgule décalée de 2 rangs vers la gauche).",
              ],
            },
            {
              level: 2,
              statement: "Écrivez en notation scientifique : a) 6 230 000 ; b) 0,000 904 ; c) 82 × 10⁵ ; d) 0,3 × 10⁻⁴.",
              hint: "Pour c et d, écrivez d'abord 82 et 0,3 en notation scientifique, puis multipliez les puissances de 10.",
              solution: [
                "a) La virgule se place après 6 et se déplace de 6 rangs vers la gauche : 6 230 000 = 6,23 × 10⁶.",
                "b) La virgule se place après 9 et se déplace de 4 rangs vers la droite : 0,000 904 = 9,04 × 10⁻⁴.",
                "c) 82 = 8,2 × 10¹, donc 82 × 10⁵ = 8,2 × 10¹ × 10⁵ = 8,2 × 10⁶.",
                "d) 0,3 = 3 × 10⁻¹, donc 0,3 × 10⁻⁴ = 3 × 10⁻¹ × 10⁻⁴ = 3 × 10⁻⁵.",
              ],
            },
            {
              level: 3,
              statement: "La distance moyenne entre la Terre et le Soleil est d'environ 1,5 × 10⁸ km. La lumière parcourt environ 3 × 10⁵ km par seconde. a) Calculez le temps, en secondes, que met la lumière du Soleil pour atteindre la Terre. Détaillez le calcul avec les puissances de 10. b) Convertissez ce temps en minutes et secondes. c) Écrivez le résultat de la question a en notation scientifique.",
              hint: "Utilisez la relation temps = distance ÷ vitesse, puis divisez séparément les nombres et les puissances de 10.",
              solution: [
                "a) t = d ÷ v = (1,5 × 10⁸) ÷ (3 × 10⁵) = (1,5 ÷ 3) × (10⁸ ÷ 10⁵).",
                "1,5 ÷ 3 = 0,5 et 10⁸ ÷ 10⁵ = 10⁸⁻⁵ = 10³, donc t = 0,5 × 10³ = 500 secondes.",
                "b) 500 = 8 × 60 + 20 : la lumière met environ 8 minutes et 20 secondes.",
                "c) 500 s = 5 × 10² s.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces nombres du plus petit au plus grand.",
            items: [
              "7 × 10⁻⁴",
              "0,001 5",
              "2 × 10⁻³",
              "0,8",
              "5,1 × 10²",
              "6 × 10²",
              "1,2 × 10³",
            ],
          },
          quiz: [
            { q: "Quelle est la notation scientifique de 52 000 ?", options: ["52 × 10³", "5,2 × 10⁴", "0,52 × 10⁵", "5,2 × 10³"], answer: 1, why: "Il faut un seul chiffre non nul avant la virgule : 5,2, et la virgule s'est déplacée de 4 rangs vers la gauche." },
            { q: "Que vaut 10⁻³ ?", options: ["-1 000", "-0,001", "0,000 1", "0,001"], answer: 3, why: "10⁻³ = 1/10³ = 1/1 000 = 0,001, un nombre positif." },
            { q: "Que vaut 10⁵ × 10⁻⁸ ?", options: ["10⁻³", "10⁻⁴⁰", "10¹³", "10³"], answer: 0, why: "On ajoute les exposants : 5 + (-8) = -3." },
            { q: "Quelle puissance de 10 correspond au préfixe micro (µ) ?", options: ["10⁶", "10⁻³", "10⁻⁶", "10⁻⁹"], answer: 2, why: "micro signifie un millionième : 10⁻⁶. Le millième est milli (10⁻³), le milliardième est nano (10⁻⁹)." },
            { q: "Quel est le plus grand de ces trois nombres ?", options: ["9,9 × 10³", "1,1 × 10⁴", "8 × 10³"], answer: 1, why: "On compare d'abord les exposants : 4 est le plus grand. En effet 1,1 × 10⁴ = 11 000 > 9 900." },
          ],
          trap: "Écrire une « notation scientifique » où le nombre a n'est pas entre 1 et 10 (45 × 10³), ou se tromper de signe d'exposant : 0,003 = 3 × 10⁻³ et non 3 × 10³.",
          method: "Contrôlez le signe de l'exposant : un nombre supérieur à 10 a un exposant positif, un nombre compris entre 0 et 1 a un exposant négatif. Vérifiez ensuite à la calculatrice, en mode d'affichage scientifique.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'racine-carree',
          title: 'La racine carrée d\'un nombre positif',
          minutes: 25,
          objectives: [
            "Définir la racine carrée d'un nombre positif.",
            "Connaître les carrés parfaits de 1 à 144 et leurs racines carrées.",
            "Calculer ou encadrer une racine carrée, avec ou sans calculatrice.",
            "Utiliser la racine carrée pour calculer une longueur.",
          ],
          course: [
            {
              heading: "Définition",
              paragraphs: [
                "Si a est un nombre positif, la racine carrée de a, notée √a, est le nombre positif dont le carré est égal à a. Ainsi √49 = 7, car 7 est positif et 7² = 49. De même √0 = 0 et √1 = 1.",
                "Un nombre négatif n'a pas de racine carrée : aucun carré n'est négatif, donc √(-9) n'existe pas. Attention aussi : (-7)² = 49, mais √49 vaut 7 et non -7, car une racine carrée est toujours positive.",
                "Pour tout nombre a positif, (√a)² = a et √(a²) = a. Par exemple (√5)² = 5 et √(3²) = √9 = 3. Prendre la racine carrée et élever au carré sont deux opérations qui se « défont » l'une l'autre, comme l'addition et la soustraction.",
              ],
              box: { label: "Définition", text: "Pour a ≥ 0, √a est le nombre positif dont le carré est a : √a ≥ 0 et (√a)² = a. Un nombre négatif n'a pas de racine carrée." },
            },
            {
              heading: "Carrés parfaits et racines exactes",
              paragraphs: [
                "Un carré parfait est le carré d'un nombre entier. Il faut connaître les carrés parfaits de 1 à 144 : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121 et 144. Leurs racines carrées sont des entiers : √81 = 9, √121 = 11, √144 = 12.",
                "On en déduit d'autres racines exactes : √400 = 20 car 20² = 400 ; √0,25 = 0,5 car 0,5² = 0,25 ; √(9/16) = 3/4 car (3/4)² = 9/16.",
                "La racine carrée d'un entier qui n'est pas un carré parfait, comme √2 ou √10, n'est pas un nombre décimal : la calculatrice n'en donne qu'une valeur approchée (√2 ≈ 1,414). On garde alors l'écriture √2 pour la valeur exacte, ou l'on donne un arrondi en précisant sa précision.",
              ],
              box: { label: "À retenir", text: "Carrés parfaits : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144. Leurs racines carrées sont 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12." },
            },
            {
              heading: "Encadrer et utiliser une racine carrée",
              paragraphs: [
                "Sans calculatrice, on encadre une racine carrée entre deux entiers consécutifs grâce aux carrés parfaits : 36 < 40 < 49, donc 6 < √40 < 7. La calculatrice précise ensuite : √40 ≈ 6,32.",
                "La racine carrée sert surtout à calculer une longueur. Dans un triangle ABC rectangle en A avec AB = 5 cm et AC = 12 cm, le théorème de Pythagore donne BC² = 5² + 12² = 25 + 144 = 169, donc BC = √169 = 13 cm : on ne garde que la valeur positive, puisqu'une longueur est positive. De même, un carré de 50 m² d'aire a un côté de √50 m ≈ 7,07 m.",
                "Attention : la racine carrée ne se distribue pas sur une somme. √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7. Il faut toujours effectuer la somme sous le radical avant de prendre la racine.",
              ],
              box: { label: "Règle", text: "Pour encadrer √a, on cherche les deux carrés parfaits consécutifs entre lesquels se trouve a. En général √(a + b) n'est pas égal à √a + √b." },
            },
          ],
          keyPoints: [
            "Pour a ≥ 0, √a est le nombre positif dont le carré est a.",
            "Un nombre négatif n'a pas de racine carrée, et une racine carrée n'est jamais négative.",
            "(√a)² = a et √(a²) = a pour tout a positif.",
            "Carrés parfaits à connaître : 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144.",
            "On encadre √a entre deux entiers grâce aux carrés parfaits : 6 < √40 < 7 car 36 < 40 < 49.",
            "√(a + b) n'est pas égal à √a + √b : √(9 + 16) = 5 et non 7.",
          ],
          example: {
            statement: "Un carré a une aire de 72 cm². Donnez la valeur exacte de la longueur de son côté, un encadrement de cette longueur par deux entiers consécutifs, puis son arrondi au millimètre.",
            solution: [
              "Notons c la longueur du côté, en cm. L'aire du carré vaut c², donc c² = 72.",
              "c est une longueur, donc c est positif : c = √72 cm. C'est la valeur exacte.",
              "Encadrement : 64 < 72 < 81, c'est-à-dire 8² < 72 < 9², donc 8 < √72 < 9.",
              "À la calculatrice, √72 ≈ 8,485 cm.",
              "Arrondi au millimètre (au dixième de centimètre) : c ≈ 8,5 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sans calculatrice, donnez la valeur de : a) √64 ; b) √121 ; c) √0 ; d) √0,09 ; e) (√7)² ; f) √(6²).",
              hint: "Pour chaque nombre, cherchez le nombre positif dont le carré lui est égal.",
              solution: [
                "a) √64 = 8, car 8² = 64.",
                "b) √121 = 11, car 11² = 121.",
                "c) √0 = 0.",
                "d) √0,09 = 0,3, car 0,3² = 0,09.",
                "e) (√7)² = 7, par définition de la racine carrée.",
                "f) √(6²) = √36 = 6.",
              ],
            },
            {
              level: 2,
              statement: "Sans calculatrice, encadrez chaque nombre entre deux entiers consécutifs : √20 ; √75 ; √110. Vérifiez ensuite à la calculatrice en donnant l'arrondi au dixième.",
              hint: "Cherchez, pour chaque nombre sous le radical, les deux carrés parfaits consécutifs qui l'entourent.",
              solution: [
                "16 < 20 < 25, donc 4 < √20 < 5. À la calculatrice, √20 ≈ 4,5.",
                "64 < 75 < 81, donc 8 < √75 < 9. À la calculatrice, √75 ≈ 8,7.",
                "100 < 110 < 121, donc 10 < √110 < 11. À la calculatrice, √110 ≈ 10,5.",
                "Les arrondis obtenus sont bien compris dans les encadrements trouvés.",
              ],
            },
            {
              level: 3,
              statement: "Un jardin carré a une aire de 200 m². a) Donnez la valeur exacte de la longueur de son côté, puis son arrondi au centimètre. b) Le propriétaire veut clôturer le jardin avec un grillage, en laissant une ouverture de 1,5 m pour le portail. Calculez la longueur de grillage nécessaire, arrondie au centimètre. c) Le grillage est vendu en rouleaux de 10 m. Combien de rouleaux faut-il acheter ?",
              hint: "Le côté c vérifie c² = 200. Pour le grillage, calculez le périmètre du carré, puis retirez la largeur du portail.",
              solution: [
                "a) Notons c la longueur du côté, en mètres : c² = 200 et c > 0, donc c = √200 m. À la calculatrice, c ≈ 14,14 m.",
                "b) Le périmètre du jardin vaut 4 × √200 ≈ 56,57 m.",
                "On retire l'ouverture du portail : 4 × √200 - 1,5 ≈ 55,07 m (calcul effectué avec la valeur de la calculatrice). Il faut environ 55,07 m de grillage.",
                "c) 55,07 ÷ 10 = 5,507 : cinq rouleaux (50 m) ne suffisent pas.",
                "Il faut acheter 6 rouleaux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la racine carrée.",
            statements: [
              { text: "√16 = 4.", true: true, why: "4 est positif et 4² = 16." },
              { text: "√16 vaut 4 ou -4.", true: false, why: "(-4)² = 16, mais une racine carrée est toujours positive : √16 = 4 seulement." },
              { text: "√(-25) = -5.", true: false, why: "Un nombre négatif n'a pas de racine carrée, car aucun carré n'est négatif." },
              { text: "√(9 + 16) = √9 + √16.", true: false, why: "√(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7." },
              { text: "(√11)² = 11.", true: true, why: "Par définition, le carré de √a est égal à a." },
              { text: "√2 est égal à 1,414.", true: false, why: "1,414 n'est qu'une valeur approchée : √2 n'est pas un nombre décimal." },
              { text: "6 < √45 < 7.", true: true, why: "36 < 45 < 49, c'est-à-dire 6² < 45 < 7²." },
            ],
          },
          quiz: [
            { q: "Que vaut √81 ?", options: ["9", "40,5", "-9", "18"], answer: 0, why: "9 est positif et 9² = 81. -9 a aussi pour carré 81, mais une racine carrée est positive." },
            { q: "Entre quels entiers consécutifs se trouve √30 ?", options: ["4 et 5", "5 et 6", "6 et 7", "15 et 16"], answer: 1, why: "25 < 30 < 36, donc 5 < √30 < 6." },
            { q: "Que vaut √(36 + 64) ?", options: ["14", "100", "10", "48"], answer: 2, why: "On calcule d'abord la somme : √(36 + 64) = √100 = 10. Le piège est 6 + 8 = 14." },
            { q: "Pourquoi √(-4) n'existe-t-il pas ?", options: ["Parce que -4 n'est pas un carré parfait entier", "Parce qu'aucun nombre n'a un carré négatif", "Parce que la calculatrice affiche une erreur", "Parce que sa valeur serait -2, qui est négative"], answer: 1, why: "Le carré d'un nombre est toujours positif ou nul : aucun nombre n'a pour carré -4." },
            { q: "Les côtés de l'angle droit d'un triangle rectangle mesurent 6 cm et 8 cm. Combien mesure l'hypoténuse ?", options: ["14 cm", "100 cm", "48 cm", "10 cm"], answer: 3, why: "D'après le théorème de Pythagore, l'hypoténuse au carré vaut 36 + 64 = 100, donc elle mesure √100 = 10 cm." },
          ],
          trap: "Écrire √(a + b) = √a + √b, par exemple √(9 + 16) = 3 + 4 = 7 au lieu de √25 = 5, ou donner une racine carrée négative.",
          method: "Apprenez les carrés parfaits de 1 à 144 dans les deux sens (12² = 144 et √144 = 12) : ils servent à encadrer une racine sans calculatrice et à repérer une erreur de saisie.",
        },
      ],
    },

    /* ================================================================== */
    /* CALCUL LITTÉRAL                                                      */
    /* ================================================================== */
    {
      id: 'calcul-litteral',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'developper-distributivite',
          title: 'Développer avec la simple et la double distributivité',
          minutes: 30,
          objectives: [
            "Développer une expression à l'aide de la simple distributivité.",
            "Développer un produit de deux sommes à l'aide de la double distributivité.",
            "Réduire une expression littérale.",
          ],
          course: [
            {
              heading: "Développer et réduire",
              paragraphs: [
                "Développer une expression, c'est transformer un produit en une somme (ou une différence). Réduire, c'est regrouper les termes de même nature : les termes en x², les termes en x et les nombres. Exemple : 3x² + 5x - 2x + 7 - 1 = 3x² + 3x + 6.",
                "Rappel des conventions d'écriture : 3 × x s'écrit 3x, x × x s'écrit x² et 1x s'écrit x. On ne peut pas additionner des termes de natures différentes : 2x + 3 ne se réduit pas, et 2x + 3x² non plus. En revanche 2x × 3x = 6x².",
              ],
            },
            {
              heading: "La simple distributivité",
              paragraphs: [
                "Pour tous nombres k, a et b : k(a + b) = ka + kb et k(a - b) = ka - kb. Le facteur k se distribue sur chaque terme de la parenthèse. Exemple : 4(2x + 3) = 4 × 2x + 4 × 3 = 8x + 12.",
                "Avec un facteur négatif, attention aux signes : -3(x - 5) = (-3) × x + (-3) × (-5) = -3x + 15. Un signe moins devant une parenthèse revient à multiplier par -1 : -(2x - 7) = -2x + 7, on change le signe de chaque terme.",
                "La distributivité sert aussi en calcul mental : 7 × 102 = 7 × (100 + 2) = 700 + 14 = 714, et 9 × 98 = 9 × (100 - 2) = 900 - 18 = 882.",
              ],
              box: { label: "Propriété", text: "Pour tous nombres k, a et b : k(a + b) = ka + kb et k(a - b) = ka - kb." },
            },
            {
              heading: "La double distributivité",
              paragraphs: [
                "Pour tous nombres a, b, c et d : (a + b)(c + d) = ac + ad + bc + bd. Chaque terme de la première parenthèse multiplie chaque terme de la seconde : on obtient quatre produits. Exemple : (x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10.",
                "Une figure illustre la règle : un rectangle de côtés x + 2 et x + 5 se découpe en quatre rectangles d'aires x × x = x², x × 5 = 5x, 2 × x = 2x et 2 × 5 = 10. La somme de ces quatre aires est l'aire du grand rectangle.",
                "Les signes se gèrent dans chaque produit : (2x - 3)(x + 4) = 2x² + 8x - 3x - 12 = 2x² + 5x - 12. Un carré est un produit de deux facteurs égaux : (x + 3)² = (x + 3)(x + 3) = x² + 3x + 3x + 9 = x² + 6x + 9, et surtout pas x² + 9.",
              ],
              box: { label: "Propriété", text: "Pour tous nombres a, b, c et d : (a + b)(c + d) = ac + ad + bc + bd." },
            },
          ],
          keyPoints: [
            "Développer, c'est transformer un produit en somme ; réduire, c'est regrouper les termes de même nature.",
            "Simple distributivité : k(a + b) = ka + kb et k(a - b) = ka - kb.",
            "Un signe moins devant une parenthèse change le signe de chaque terme : -(2x - 7) = -2x + 7.",
            "Double distributivité : (a + b)(c + d) = ac + ad + bc + bd, soit quatre produits.",
            "(x + 3)² = (x + 3)(x + 3) = x² + 6x + 9, et non x² + 9.",
            "On vérifie un développement en remplaçant x par une valeur simple dans les deux expressions.",
          ],
          example: {
            statement: "Développez et réduisez A = (3x - 1)(2x + 5) - 2(x² - 4).",
            solution: [
              "On développe le premier produit par double distributivité : (3x - 1)(2x + 5) = 6x² + 15x - 2x - 5 = 6x² + 13x - 5.",
              "On développe le second produit par simple distributivité : -2(x² - 4) = -2x² + 8.",
              "On additionne : A = 6x² + 13x - 5 - 2x² + 8.",
              "On réduit : A = 4x² + 13x + 3.",
              "Vérification avec x = 1 : (3 - 1)(2 + 5) - 2(1 - 4) = 14 + 6 = 20, et 4 + 13 + 3 = 20. Le résultat est cohérent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Développez et réduisez : A = 5(x + 3) ; B = -2(4x - 1) ; C = x(x + 7) ; D = 3 - (2x - 5).",
              hint: "Multipliez le facteur placé devant la parenthèse par chacun des termes de la parenthèse, en faisant attention aux signes.",
              solution: [
                "A = 5 × x + 5 × 3 = 5x + 15.",
                "B = (-2) × 4x + (-2) × (-1) = -8x + 2.",
                "C = x × x + x × 7 = x² + 7x.",
                "D = 3 - 2x + 5 = -2x + 8 (le signe moins change le signe de chaque terme de la parenthèse).",
              ],
            },
            {
              level: 2,
              statement: "Développez et réduisez : E = (x + 4)(x + 6) ; F = (2x - 1)(x - 3) ; G = (x - 5)².",
              hint: "Utilisez la double distributivité : quatre produits, puis réduisez. Pour G, écrivez d'abord (x - 5)(x - 5).",
              solution: [
                "E = x² + 6x + 4x + 24 = x² + 10x + 24.",
                "F = 2x² - 6x - x + 3 = 2x² - 7x + 3.",
                "G = (x - 5)(x - 5) = x² - 5x - 5x + 25 = x² - 10x + 25.",
                "Vérification de F avec x = 1 : (2 - 1)(1 - 3) = -2 et 2 - 7 + 3 = -2.",
              ],
            },
            {
              level: 3,
              statement: "On considère le programme de calcul suivant : choisir un nombre ; lui ajouter 4 ; multiplier le résultat par le nombre de départ diminué de 2 ; ajouter 8 au produit obtenu. a) Vérifiez que, si l'on choisit 3, on obtient 15. b) Quel résultat obtient-on en choisissant -5 ? c) On note x le nombre de départ. Exprimez le résultat en fonction de x, puis développez et réduisez cette expression. d) Lucas affirme que le résultat est toujours égal à x(x + 2). A-t-il raison ?",
              hint: "Le nombre de départ diminué de 2 s'écrit x - 2. L'expression à développer est donc (x + 4)(x - 2) + 8.",
              solution: [
                "a) 3 + 4 = 7 ; 3 - 2 = 1 ; 7 × 1 = 7 ; 7 + 8 = 15. On obtient bien 15.",
                "b) -5 + 4 = -1 ; -5 - 2 = -7 ; (-1) × (-7) = 7 ; 7 + 8 = 15. On obtient 15.",
                "c) Le résultat s'écrit (x + 4)(x - 2) + 8.",
                "On développe : (x + 4)(x - 2) + 8 = x² - 2x + 4x - 8 + 8 = x² + 2x.",
                "d) x(x + 2) = x² + 2x : c'est la même expression que celle obtenue à la question c.",
                "Lucas a raison : pour tout nombre x, le programme donne x(x + 2).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression à sa forme développée et réduite.",
            pairs: [
              { left: "3(x + 4)", right: "3x + 12" },
              { left: "-2(x - 5)", right: "-2x + 10" },
              { left: "x(x - 3)", right: "x² - 3x" },
              { left: "(x + 1)(x + 2)", right: "x² + 3x + 2" },
              { left: "(x + 3)²", right: "x² + 6x + 9" },
              { left: "(2x - 1)(x + 3)", right: "2x² + 5x - 3" },
            ],
          },
          quiz: [
            { q: "Quel est le développement de 6(2x - 3) ?", options: ["12x - 3", "12x - 18", "8x - 9", "12x + 18"], answer: 1, why: "6 × 2x = 12x et 6 × (-3) = -18 : le facteur 6 multiplie les deux termes." },
            { q: "Que vaut -(x - 4) ?", options: ["-x - 4", "x + 4", "-x + 4"], answer: 2, why: "Le signe moins devant la parenthèse change le signe de chaque terme : -x et +4." },
            { q: "Combien de produits obtient-on en développant (a + b)(c + d) ?", options: ["4", "2", "3", "6"], answer: 0, why: "Chacun des deux termes de la première parenthèse multiplie chacun des deux termes de la seconde : 2 × 2 = 4 produits." },
            { q: "Quel est le développement réduit de (x + 5)² ?", options: ["x² + 25", "2x² + 10x + 25", "2x + 10", "x² + 10x + 25"], answer: 3, why: "(x + 5)(x + 5) = x² + 5x + 5x + 25 = x² + 10x + 25. Il ne faut pas oublier les deux termes en 5x." },
            { q: "En développant et en réduisant (x - 2)(x + 7), on obtient :", options: ["x² + 5x - 14", "x² - 5x - 14", "x² + 9x - 14", "x² + 5x + 14"], answer: 0, why: "x² + 7x - 2x - 14 = x² + 5x - 14." },
          ],
          trap: "Oublier de distribuer sur le second terme ou mal gérer le signe moins : -3(x - 5) donne -3x + 15, pas -3x - 5 ni -3x - 15. Et (x + 3)² n'est jamais égal à x² + 9.",
          method: "Vérifiez un développement en remplaçant x par une valeur simple (x = 1 ou x = 2) dans l'expression de départ et dans le résultat : les deux calculs doivent donner le même nombre.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'factoriser-identite',
          title: 'Factoriser, et utiliser (a + b)(a - b) = a² - b²',
          minutes: 30,
          objectives: [
            "Factoriser une expression à l'aide d'un facteur commun.",
            "Utiliser l'identité (a + b)(a - b) = a² - b² pour développer et pour factoriser.",
            "Choisir la forme développée ou factorisée la plus adaptée à un calcul.",
          ],
          course: [
            {
              heading: "Factoriser avec un facteur commun",
              paragraphs: [
                "Factoriser, c'est transformer une somme (ou une différence) en un produit : c'est l'opération inverse du développement. On utilise la distributivité dans l'autre sens : ka + kb = k(a + b) et ka - kb = k(a - b), où k est le facteur commun aux deux termes.",
                "Exemples : 6x + 15 = 3 × 2x + 3 × 5 = 3(2x + 5) ; x² - 7x = x × x - 7 × x = x(x - 7). Le facteur commun peut être une expression entière : (x + 1)(2x - 3) + (x + 1)(x + 4) = (x + 1)[(2x - 3) + (x + 4)] = (x + 1)(3x + 1).",
                "Lorsque le facteur commun apparaît seul, on fait apparaître le facteur 1 : (x - 5)(x + 2) + (x - 5) = (x - 5)(x + 2) + (x - 5) × 1 = (x - 5)[(x + 2) + 1] = (x - 5)(x + 3). On vérifie toujours une factorisation en la redéveloppant.",
              ],
              box: { label: "Méthode", text: "1. Repérer le facteur commun. 2. L'écrire devant une parenthèse (ou un crochet). 3. Écrire dans la parenthèse ce qui reste de chaque terme. 4. Réduire la parenthèse, puis vérifier en redéveloppant." },
            },
            {
              heading: "L'identité (a + b)(a - b) = a² - b²",
              paragraphs: [
                "En développant avec la double distributivité : (a + b)(a - b) = a² - ab + ab - b² = a² - b², car les deux termes en ab s'annulent. Cette égalité, vraie pour tous les nombres a et b, est une identité remarquable.",
                "Lue de gauche à droite, elle permet de développer rapidement : (x + 6)(x - 6) = x² - 6² = x² - 36 ; (3x - 2)(3x + 2) = (3x)² - 2² = 9x² - 4. Attention à élever au carré tout le terme : (3x)² = 9x², et non 3x².",
                "Elle permet aussi de calculer mentalement : 101 × 99 = (100 + 1)(100 - 1) = 10 000 - 1 = 9 999 ; 52 × 48 = (50 + 2)(50 - 2) = 2 500 - 4 = 2 496.",
              ],
              box: { label: "Formule", text: "Pour tous nombres a et b : (a + b)(a - b) = a² - b²." },
            },
            {
              heading: "Factoriser une différence de deux carrés",
              paragraphs: [
                "Lue de droite à gauche, l'identité permet de factoriser une expression de la forme a² - b², appelée différence de deux carrés. On identifie a et b, puis on écrit (a + b)(a - b). Exemples : x² - 49 = x² - 7² = (x + 7)(x - 7) ; 4x² - 25 = (2x)² - 5² = (2x + 5)(2x - 5).",
                "La méthode fonctionne aussi avec des expressions plus longues : (x + 3)² - 16 = (x + 3)² - 4² = (x + 3 + 4)(x + 3 - 4) = (x + 7)(x - 1). En revanche, une somme de deux carrés comme x² + 9 ne se factorise pas de cette manière.",
                "La forme factorisée est la plus utile pour résoudre une équation, par exemple (x + 7)(x - 7) = 0, que vous apprendrez à résoudre dans le chapitre sur les équations. La forme développée est souvent plus pratique pour calculer une valeur ou comparer deux expressions. Savoir passer de l'une à l'autre est indispensable au brevet.",
              ],
              box: { label: "À retenir", text: "Développer : produit → somme. Factoriser : somme → produit. a² - b² = (a + b)(a - b), mais a² + b² ne se factorise pas ainsi." },
            },
          ],
          keyPoints: [
            "Factoriser, c'est transformer une somme en produit : ka + kb = k(a + b).",
            "Le facteur commun peut être un nombre, une lettre ou une expression entre parenthèses.",
            "(a + b)(a - b) = a² - b² pour tous nombres a et b.",
            "Pour factoriser a² - b², on identifie a et b : 4x² - 25 = (2x + 5)(2x - 5).",
            "Une somme de deux carrés comme x² + 9 ne se factorise pas avec cette identité.",
            "Une factorisation se vérifie en redéveloppant le résultat.",
          ],
          example: {
            statement: "Factorisez A = (2x + 1)² - 9, puis vérifiez en développant.",
            solution: [
              "On reconnaît une différence de deux carrés : A = (2x + 1)² - 3², avec a = 2x + 1 et b = 3.",
              "D'après l'identité a² - b² = (a + b)(a - b) : A = (2x + 1 + 3)(2x + 1 - 3).",
              "On réduit chaque facteur : A = (2x + 4)(2x - 2).",
              "Vérification : (2x + 4)(2x - 2) = 4x² - 4x + 8x - 8 = 4x² + 4x - 8.",
              "Et (2x + 1)² - 9 = 4x² + 2x + 2x + 1 - 9 = 4x² + 4x - 8. Les deux formes sont égales : A = (2x + 4)(2x - 2).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Factorisez : A = 7x + 21 ; B = 5x² - 3x ; C = 12x - 8.",
              hint: "Cherchez ce qui est commun aux deux termes : un nombre qui divise les deux coefficients, ou la lettre x.",
              solution: [
                "A = 7 × x + 7 × 3 = 7(x + 3).",
                "B = x × 5x - x × 3 = x(5x - 3).",
                "C = 4 × 3x - 4 × 2 = 4(3x - 2).",
                "Vérification : 7(x + 3) = 7x + 21 ; x(5x - 3) = 5x² - 3x ; 4(3x - 2) = 12x - 8.",
              ],
            },
            {
              level: 2,
              statement: "a) Développez à l'aide de l'identité (a + b)(a - b) = a² - b² : D = (x - 9)(x + 9) et E = (5x + 1)(5x - 1). b) Factorisez : F = x² - 64 et G = 9x² - 100.",
              hint: "Pour factoriser, écrivez chaque terme comme un carré : 64 = 8², 9x² = (3x)², 100 = 10².",
              solution: [
                "a) D = x² - 9² = x² - 81.",
                "E = (5x)² - 1² = 25x² - 1.",
                "b) F = x² - 8² = (x + 8)(x - 8).",
                "G = (3x)² - 10² = (3x + 10)(3x - 10).",
              ],
            },
            {
              level: 3,
              statement: "On considère l'expression H = (x - 2)² - 25. a) Développez et réduisez H. b) Factorisez H. c) Choisissez la forme la plus adaptée pour calculer H lorsque x = 2, puis lorsque x = 7.",
              hint: "Pour la factorisation, écrivez 25 = 5² et utilisez a² - b² = (a + b)(a - b) avec a = x - 2.",
              solution: [
                "a) (x - 2)² = (x - 2)(x - 2) = x² - 2x - 2x + 4 = x² - 4x + 4, donc H = x² - 4x + 4 - 25 = x² - 4x - 21.",
                "b) H = (x - 2)² - 5² = (x - 2 + 5)(x - 2 - 5) = (x + 3)(x - 7).",
                "Vérification : (x + 3)(x - 7) = x² - 7x + 3x - 21 = x² - 4x - 21.",
                "c) Pour x = 2, la forme de départ est la plus simple : H = 0² - 25 = -25.",
                "Pour x = 7, la forme factorisée est la plus simple : H = (7 + 3)(7 - 7) = 10 × 0 = 0.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Chaque égalité est-elle juste pour toute valeur de x ?",
            statements: [
              { text: "x² - 16 = (x + 4)(x - 4).", true: true, why: "C'est l'identité a² - b² = (a + b)(a - b) avec a = x et b = 4." },
              { text: "x² + 16 = (x + 4)(x - 4).", true: false, why: "(x + 4)(x - 4) = x² - 16. Une somme de deux carrés ne se factorise pas ainsi." },
              { text: "9x² - 1 = (3x + 1)(3x - 1).", true: true, why: "9x² = (3x)² et 1 = 1² : c'est une différence de deux carrés." },
              { text: "4x² - 9 = (4x + 3)(4x - 3).", true: false, why: "(4x)² = 16x². La bonne factorisation est (2x + 3)(2x - 3)." },
              { text: "Factoriser, c'est transformer une somme en produit.", true: true, why: "C'est l'opération inverse du développement." },
              { text: "5x + 10 = 5(x + 10).", true: false, why: "5(x + 10) = 5x + 50. La bonne factorisation est 5(x + 2)." },
              { text: "99 × 101 = 9 999.", true: true, why: "(100 - 1)(100 + 1) = 100² - 1² = 10 000 - 1 = 9 999." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme factorisée de 8x - 12 ?", options: ["8(x - 12)", "4(2x - 3)", "4(2x - 12)", "2(4x - 12)"], answer: 1, why: "4 divise 8 et 12 : 8x - 12 = 4 × 2x - 4 × 3 = 4(2x - 3). On vérifie en redéveloppant." },
            { q: "Que vaut (x + 10)(x - 10) ?", options: ["x² - 20", "x² + 100", "x² - 100", "x² - 20x - 100"], answer: 2, why: "D'après l'identité, (x + 10)(x - 10) = x² - 10² = x² - 100." },
            { q: "Comment se factorise 25x² - 36 ?", options: ["(5x + 6)(5x - 6)", "(5x - 6)²", "(25x + 36)(25x - 36)", "(5x + 36)(5x - 36)"], answer: 0, why: "25x² = (5x)² et 36 = 6² : on obtient (5x + 6)(5x - 6)." },
            { q: "Quel est le facteur commun dans (x + 2)(x - 1) + (x + 2)(3x + 4) ?", options: ["x - 1", "3x + 4", "x", "x + 2"], answer: 3, why: "(x + 2) apparaît dans les deux termes : l'expression vaut (x + 2)[(x - 1) + (3x + 4)] = (x + 2)(4x + 3)." },
            { q: "Combien vaut 31 × 29, calculé sans calculatrice ?", options: ["899", "901", "879", "900"], answer: 0, why: "31 × 29 = (30 + 1)(30 - 1) = 30² - 1² = 900 - 1 = 899." },
          ],
          trap: "Mal identifier a et b dans a² - b² : 4x² - 9 se factorise en (2x + 3)(2x - 3), pas en (4x + 3)(4x - 3). Et une somme comme x² + 9 ne se factorise pas avec cette identité.",
          method: "Une factorisation se vérifie toujours : redéveloppez votre résultat au brouillon et comparez-le à l'expression de départ. Pour reconnaître a² - b², cherchez une soustraction entre deux carrés (x², 9x², 16, 25...).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'prouver-calcul-litteral',
          title: 'Démontrer une propriété avec le calcul littéral',
          minutes: 35,
          objectives: [
            "Utiliser le calcul littéral pour prouver un résultat général.",
            "Distinguer un exemple d'une démonstration et utiliser un contre-exemple pour prouver qu'une affirmation est fausse.",
            "Modéliser un programme de calcul par une expression littérale.",
            "Écrire un nombre pair, un nombre impair ou un multiple à l'aide d'une lettre.",
          ],
          course: [
            {
              heading: "Exemple, contre-exemple et démonstration",
              paragraphs: [
                "Vérifier une propriété sur quelques exemples ne prouve pas qu'elle est toujours vraie : on ne peut pas essayer tous les nombres. Pour prouver qu'une propriété est vraie pour tous les nombres, on utilise une lettre qui représente un nombre quelconque, puis on effectue un calcul littéral valable quelle que soit la valeur de cette lettre.",
                "En revanche, un seul exemple qui ne vérifie pas la propriété suffit à prouver qu'elle est fausse : on l'appelle un contre-exemple. Affirmation : « Pour tout nombre x, x² ≥ x. » Pour x = 0,5, on a x² = 0,25, qui est inférieur à 0,5 : l'affirmation est fausse, même si elle est vraie pour x = 2, x = 3 ou x = 10.",
              ],
              box: { label: "À retenir", text: "Des exemples ne prouvent pas qu'une propriété est vraie en général. Un seul contre-exemple prouve qu'elle est fausse. Une démonstration utilise une lettre et un calcul valable pour tous les nombres." },
            },
            {
              heading: "Écrire des nombres entiers avec des lettres",
              paragraphs: [
                "Si n désigne un nombre entier : un nombre pair s'écrit 2n ; un nombre impair s'écrit 2n + 1 ; un multiple de 3 s'écrit 3n ; trois entiers consécutifs s'écrivent n, n + 1 et n + 2 ; le carré d'un entier s'écrit n².",
                "Exemple : prouvons que la somme de trois entiers consécutifs est un multiple de 3. Soit n un entier. On a n + (n + 1) + (n + 2) = 3n + 3 = 3(n + 1). Comme n + 1 est un entier, cette somme est un multiple de 3. On retrouve par exemple 7 + 8 + 9 = 24 = 3 × 8.",
                "Autre exemple : prouvons que la somme de deux nombres impairs est paire. Les deux nombres ne sont pas forcément égaux : on les écrit 2n + 1 et 2m + 1, avec deux lettres différentes, n et m entiers. Leur somme vaut 2n + 1 + 2m + 1 = 2n + 2m + 2 = 2(n + m + 1). C'est un multiple de 2, donc un nombre pair.",
              ],
              box: { label: "Repère", text: "Avec n entier : nombre pair 2n ; nombre impair 2n + 1 ; multiple de k : k × n ; entiers consécutifs n, n + 1, n + 2. Deux nombres sans lien entre eux s'écrivent avec deux lettres différentes." },
            },
            {
              heading: "Les programmes de calcul",
              paragraphs: [
                "Au brevet, on rencontre souvent des programmes de calcul : une suite d'instructions appliquées à un nombre de départ. On les teste d'abord avec des nombres pour formuler une conjecture, puis on note x le nombre de départ et l'on écrit l'expression obtenue à chaque étape pour la démontrer.",
                "Exemple : « Choisir un nombre, lui ajouter 3, multiplier le résultat par 2, soustraire 6, diviser par 2. » Avec 5 : 8, puis 16, puis 10, puis 5. Avec 11 : 14, puis 28, puis 22, puis 11. On conjecture qu'on retrouve toujours le nombre de départ. Preuve : avec x, on obtient x + 3, puis 2(x + 3) = 2x + 6, puis 2x + 6 - 6 = 2x, puis 2x ÷ 2 = x. Le résultat est le nombre de départ, quel que soit x.",
                "Pour comparer deux programmes ou deux expressions, on développe et on réduit chacune d'elles : si les formes réduites sont identiques, les expressions sont égales pour toutes les valeurs de x. Une rédaction complète comprend trois temps : le choix de la lettre (« Soit x le nombre de départ »), le calcul littéral, puis une phrase de conclusion.",
              ],
            },
          ],
          keyPoints: [
            "Des exemples ne suffisent pas à prouver qu'une propriété est toujours vraie.",
            "Un seul contre-exemple suffit à prouver qu'une affirmation est fausse.",
            "Avec n entier : pair 2n, impair 2n + 1, multiple de 3 : 3n, consécutifs n, n + 1, n + 2.",
            "Deux nombres quelconques s'écrivent avec deux lettres différentes (2n et 2m).",
            "Programme de calcul : tester, conjecturer, puis démontrer avec x le nombre de départ.",
            "Rédaction : « Soit x... », calcul littéral, phrase de conclusion.",
          ],
          example: {
            statement: "Démontrez que, pour tout nombre entier n, le nombre (n + 1)² - n² est impair.",
            solution: [
              "Soit n un nombre entier.",
              "On développe : (n + 1)² = (n + 1)(n + 1) = n² + n + n + 1 = n² + 2n + 1.",
              "Donc (n + 1)² - n² = n² + 2n + 1 - n² = 2n + 1.",
              "Comme n est un entier, 2n + 1 est un nombre impair.",
              "Conclusion : pour tout entier n, (n + 1)² - n² est impair. Exemple de contrôle avec n = 3 : 16 - 9 = 7, qui est bien impair.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Tom affirme : « Pour tout nombre x, (x + 1)² = x² + 1. » a) Testez cette égalité pour x = 0. b) Testez-la pour x = 3. c) Tom a-t-il raison ? Justifiez, puis donnez le développement correct de (x + 1)².",
              hint: "Un seul cas où l'égalité est fausse suffit à prouver que l'affirmation est fausse.",
              solution: [
                "a) Pour x = 0 : (0 + 1)² = 1 et 0² + 1 = 1. L'égalité est vraie pour x = 0.",
                "b) Pour x = 3 : (3 + 1)² = 16 et 3² + 1 = 10. L'égalité est fausse pour x = 3.",
                "c) x = 3 est un contre-exemple : Tom a tort, même si l'égalité est vraie pour x = 0.",
                "Développement correct : (x + 1)² = (x + 1)(x + 1) = x² + x + x + 1 = x² + 2x + 1.",
              ],
            },
            {
              level: 2,
              statement: "Démontrez que le produit de deux nombres pairs est toujours un multiple de 4.",
              hint: "Écrivez les deux nombres pairs 2n et 2m, avec n et m entiers (deux lettres différentes), puis calculez leur produit.",
              solution: [
                "Soient n et m deux nombres entiers. Deux nombres pairs quelconques s'écrivent 2n et 2m.",
                "Leur produit vaut 2n × 2m = 4 × n × m = 4nm.",
                "Comme n × m est un nombre entier, 4nm est un multiple de 4.",
                "Conclusion : le produit de deux nombres pairs est un multiple de 4. Par exemple, 6 × 10 = 60 = 4 × 15.",
              ],
            },
            {
              level: 3,
              statement: "Programme A : choisir un nombre ; lui ajouter 5 ; multiplier le résultat par le nombre de départ ; soustraire 6. Programme B : choisir un nombre ; lui soustraire 1 ; multiplier le résultat par le nombre de départ augmenté de 6. a) Testez les deux programmes avec le nombre 2. b) Testez-les avec le nombre -3. c) Quelle conjecture peut-on formuler ? Démontrez-la.",
              hint: "Notez x le nombre de départ, écrivez l'expression obtenue avec chaque programme, puis développez et réduisez les deux expressions.",
              solution: [
                "a) Programme A avec 2 : 2 + 5 = 7 ; 7 × 2 = 14 ; 14 - 6 = 8. Programme B avec 2 : 2 - 1 = 1 ; 2 + 6 = 8 ; 1 × 8 = 8.",
                "b) Programme A avec -3 : -3 + 5 = 2 ; 2 × (-3) = -6 ; -6 - 6 = -12. Programme B avec -3 : -3 - 1 = -4 ; -3 + 6 = 3 ; (-4) × 3 = -12.",
                "c) Conjecture : les deux programmes donnent toujours le même résultat.",
                "Soit x le nombre de départ. Programme A : x(x + 5) - 6 = x² + 5x - 6.",
                "Programme B : (x - 1)(x + 6) = x² + 6x - x - 6 = x² + 5x - 6.",
                "Les deux expressions réduites sont identiques : pour tout nombre de départ, les programmes A et B donnent le même résultat.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démonstration : « La somme de deux nombres impairs consécutifs est un multiple de 4. »",
            items: [
              "Soit n un nombre entier.",
              "Deux nombres impairs consécutifs s'écrivent 2n + 1 et 2n + 3.",
              "Leur somme vaut (2n + 1) + (2n + 3).",
              "En réduisant, on obtient 4n + 4.",
              "En factorisant, 4n + 4 = 4(n + 1).",
              "Comme n + 1 est un entier, la somme est un multiple de 4.",
            ],
          },
          quiz: [
            { q: "Si n est un nombre entier, comment s'écrit un nombre impair quelconque ?", options: ["2n", "n + 1", "2n + 1", "n²"], answer: 2, why: "Un nombre impair est un nombre pair (2n) augmenté de 1. L'écriture n + 1 peut être paire ou impaire selon n." },
            { q: "Pour prouver qu'une affirmation est fausse, il suffit de :", options: ["trouver un seul contre-exemple", "la tester sur trois exemples", "montrer qu'elle est vraie pour 0", "utiliser la calculatrice sur un grand nombre"], answer: 0, why: "Un seul cas où l'affirmation ne marche pas prouve qu'elle n'est pas vraie pour tous les nombres." },
            { q: "Que vaut la somme n + (n + 1) + (n + 2) ?", options: ["n + 3", "3n", "3n + 2", "3n + 3"], answer: 3, why: "On regroupe les n (3n) et les nombres (1 + 2 = 3) : 3n + 3, qui vaut aussi 3(n + 1)." },
            { q: "Un programme de calcul donne 7 en partant de 7, et 10 en partant de 10. Que peut-on en conclure ?", options: ["Qu'il redonne toujours le nombre de départ, c'est prouvé par ces deux essais", "Rien de sûr : c'est une conjecture à démontrer avec une lettre", "Que le programme est faux pour les autres nombres"], answer: 1, why: "Deux exemples permettent de formuler une conjecture, mais seule une démonstration avec une lettre prouve qu'elle est vraie pour tous les nombres." },
            { q: "Pourquoi écrit-on deux nombres pairs quelconques 2n et 2m plutôt que 2n et 2n ?", options: ["Parce que 2n et 2n désigneraient deux fois le même nombre", "Parce que la lettre m est obligatoire pour désigner un second nombre pair", "Parce que 2n ne peut pas être multiplié par lui-même"], answer: 0, why: "Avec la même lettre, on ne traiterait que le cas où les deux nombres sont égaux, ce qui ne prouve rien pour deux nombres quelconques." },
          ],
          trap: "Croire qu'une propriété est démontrée parce qu'elle marche sur plusieurs exemples, ou désigner deux nombres sans lien entre eux par la même lettre (2n et 2n au lieu de 2n et 2m).",
          method: "Rédigez toujours en trois temps : « Soit n un nombre entier... » (on nomme), le calcul littéral (on transforme l'expression), puis une phrase de conclusion qui répond exactement à la question posée.",
        },
      ],
    },

    /* ================================================================== */
    /* LE THÉORÈME DE THALÈS ET LES TRIANGLES SEMBLABLES                    */
    /* ================================================================== */
    {
      id: 'thales-triangles-semblables',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'triangles-semblables',
          title: 'Les triangles semblables',
          minutes: 30,
          objectives: [
            "Reconnaître des triangles semblables à l'aide de leurs angles ou des longueurs de leurs côtés.",
            "Identifier les sommets, les angles et les côtés homologues de deux triangles semblables.",
            "Calculer une longueur à l'aide du coefficient d'agrandissement ou de réduction.",
          ],
          course: [
            {
              heading: "Définition et vocabulaire",
              paragraphs: [
                "Deux triangles sont semblables lorsque leurs angles sont deux à deux de même mesure. L'un est alors un agrandissement ou une réduction de l'autre : ils ont la même forme, mais pas forcément la même taille, et l'un peut être tourné ou retourné par rapport à l'autre.",
                "Les sommets dont les angles ont la même mesure sont dits homologues. Les côtés opposés à des angles de même mesure sont les côtés homologues. Si ABC et DEF sont semblables, avec des angles égaux en A et en D, en B et en E, en C et en F, alors les côtés homologues sont [BC] et [EF], [AC] et [DF], [AB] et [DE].",
                "Comme la somme des angles d'un triangle vaut 180°, il suffit de vérifier que deux angles de l'un sont égaux à deux angles de l'autre : les troisièmes angles sont alors égaux eux aussi. Exemple : un triangle d'angles 40° et 75° et un triangle d'angles 75° et 65° sont semblables, car le troisième angle du premier mesure 180° - 40° - 75° = 65°.",
              ],
              box: { label: "Définition", text: "Deux triangles sont semblables lorsque leurs angles sont deux à deux de même mesure. Il suffit pour cela que deux angles de l'un soient égaux à deux angles de l'autre." },
            },
            {
              heading: "Côtés proportionnels",
              paragraphs: [
                "Si deux triangles sont semblables, alors les longueurs de leurs côtés homologues sont proportionnelles. Réciproquement, si les longueurs des côtés de deux triangles sont proportionnelles, alors ces triangles sont semblables. Le quotient commun k est le coefficient d'agrandissement (si k > 1) ou de réduction (si k < 1).",
                "Exemple : un triangle de côtés 3 cm, 4 cm et 6 cm, et un triangle de côtés 4,5 cm, 6 cm et 9 cm. On range les côtés de chaque triangle dans l'ordre croissant et l'on calcule les quotients : 4,5 ÷ 3 = 1,5 ; 6 ÷ 4 = 1,5 ; 9 ÷ 6 = 1,5. Les quotients sont égaux : les triangles sont semblables, et le second est un agrandissement du premier de coefficient 1,5.",
                "Pour associer les côtés homologues à partir des longueurs, on range les côtés de chaque triangle dans l'ordre croissant : le plus petit côté de l'un correspond au plus petit côté de l'autre, et ainsi de suite. Si un seul quotient diffère des autres, les triangles ne sont pas semblables. Deux triangles égaux (superposables) sont un cas particulier de triangles semblables, avec k = 1.",
              ],
              box: { label: "Propriété", text: "Deux triangles sont semblables si et seulement si les longueurs de leurs côtés sont proportionnelles. Le coefficient de proportionnalité k est le rapport d'agrandissement (k > 1) ou de réduction (k < 1)." },
            },
            {
              heading: "Calculer une longueur",
              paragraphs: [
                "Quand on sait que deux triangles sont semblables, on calcule le coefficient k à partir de deux côtés homologues connus, puis on multiplie (ou on divise) par k pour trouver une longueur manquante. On peut aussi présenter les longueurs dans un tableau de proportionnalité à deux lignes.",
                "Exemple : ABC et DEF sont semblables, [AB] et [DE] sont homologues, ainsi que [BC] et [EF]. On sait que AB = 5 cm, BC = 7 cm et DE = 15 cm. Le coefficient vaut k = DE ÷ AB = 15 ÷ 5 = 3, donc EF = 3 × BC = 3 × 7 = 21 cm.",
                "Dans un agrandissement ou une réduction de coefficient k, les longueurs sont multipliées par k, les angles ne changent pas, et les aires sont multipliées par k². On retrouve des triangles semblables avec l'ombre d'un bâton et celle d'un arbre, une maquette et le bâtiment réel, ou encore dans le théorème de Thalès, étudié dans la leçon suivante.",
              ],
            },
          ],
          keyPoints: [
            "Deux triangles sont semblables quand leurs angles sont deux à deux égaux ; deux paires d'angles égaux suffisent.",
            "Les côtés homologues sont opposés aux angles égaux.",
            "Triangles semblables ⇔ longueurs des côtés proportionnelles.",
            "Le coefficient k est un agrandissement si k > 1, une réduction si k < 1 ; k = 1 pour deux triangles égaux.",
            "Avec les longueurs, on range les côtés dans l'ordre croissant avant de calculer les quotients.",
            "Dans un agrandissement de coefficient k, les longueurs sont multipliées par k et les aires par k².",
          ],
          example: {
            statement: "Dans le triangle RST, l'angle en R mesure 50° et l'angle en S mesure 60°. Dans le triangle UVW, l'angle en U mesure 70° et l'angle en V mesure 50°. Ces triangles sont-ils semblables ? Si oui, donnez les côtés homologues.",
            solution: [
              "Dans RST, l'angle en T mesure 180° - 50° - 60° = 70°.",
              "Dans UVW, l'angle en W mesure 180° - 70° - 50° = 60°.",
              "Les angles de RST (50°, 60°, 70°) sont égaux deux à deux à ceux de UVW : les triangles sont semblables.",
              "Correspondance des sommets : R (50°) avec V (50°), S (60°) avec W (60°), T (70°) avec U (70°).",
              "Côtés homologues (opposés aux angles égaux) : [ST] et [WU], [RT] et [VU], [RS] et [VW].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le triangle ABC a pour côtés 4 cm, 5 cm et 6 cm. Le triangle DEF a pour côtés 10 cm, 12 cm et 8 cm. Ces deux triangles sont-ils semblables ? Justifiez.",
              hint: "Rangez les côtés de chaque triangle dans l'ordre croissant, puis calculez les trois quotients.",
              solution: [
                "Côtés de ABC dans l'ordre croissant : 4, 5, 6. Côtés de DEF dans l'ordre croissant : 8, 10, 12.",
                "Quotients : 8 ÷ 4 = 2 ; 10 ÷ 5 = 2 ; 12 ÷ 6 = 2.",
                "Les trois quotients sont égaux : les longueurs sont proportionnelles.",
                "Les triangles ABC et DEF sont semblables ; DEF est un agrandissement de ABC de coefficient 2.",
              ],
            },
            {
              level: 2,
              statement: "Les triangles MNP et RST sont semblables : [MN] est homologue de [RS], [NP] de [ST] et [MP] de [RT]. On sait que MN = 6 cm, NP = 8 cm, RS = 4,5 cm et RT = 7,5 cm. Calculez ST et MP.",
              hint: "Calculez le coefficient k = RS ÷ MN, qui permet de passer du triangle MNP au triangle RST.",
              solution: [
                "Coefficient pour passer de MNP à RST : k = RS ÷ MN = 4,5 ÷ 6 = 0,75. C'est une réduction.",
                "ST = k × NP = 0,75 × 8 = 6 cm.",
                "RT = k × MP, donc MP = RT ÷ k = 7,5 ÷ 0,75 = 10 cm.",
                "Résultats : ST = 6 cm et MP = 10 cm.",
              ],
            },
            {
              level: 3,
              statement: "Sur un sol horizontal, à un même instant, un bâton vertical de 1,2 m projette une ombre de 1,5 m, et un arbre vertical projette une ombre de 9 m. Les rayons du soleil sont parallèles. On considère le triangle formé par le bâton, son ombre et le rayon qui passe par son sommet, et celui formé par l'arbre, son ombre et le rayon qui passe par sa cime. a) Expliquez pourquoi ces deux triangles sont semblables. b) Calculez la hauteur de l'arbre. c) Par combien l'aire du triangle de l'arbre est-elle multipliée par rapport à celle du triangle du bâton ? Vérifiez par un calcul d'aires.",
              hint: "Chaque triangle a un angle droit au pied de l'objet, et les rayons parallèles font le même angle avec le sol.",
              solution: [
                "a) Le bâton et l'arbre sont verticaux et le sol est horizontal : chaque triangle a un angle droit au pied de l'objet.",
                "Les rayons sont parallèles, donc ils font le même angle avec le sol dans les deux triangles. Deux angles sont égaux deux à deux : les triangles sont semblables.",
                "b) L'ombre du bâton (1,5 m) et celle de l'arbre (9 m) sont homologues : k = 9 ÷ 1,5 = 6.",
                "La hauteur de l'arbre vaut 6 × 1,2 = 7,2 m.",
                "c) L'aire est multipliée par k² = 6² = 36.",
                "Vérification : aire du triangle du bâton = 1,2 × 1,5 ÷ 2 = 0,9 m² ; aire du triangle de l'arbre = 7,2 × 9 ÷ 2 = 32,4 m² ; et 32,4 ÷ 0,9 = 36.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa signification.",
            pairs: [
              { left: "Triangles semblables", right: "Angles deux à deux de même mesure" },
              { left: "Côtés homologues", right: "Côtés opposés à des angles égaux" },
              { left: "Coefficient k > 1", right: "Agrandissement" },
              { left: "Coefficient k < 1", right: "Réduction" },
              { left: "Coefficient k = 1", right: "Triangles égaux, superposables" },
              { left: "Aire après un agrandissement de coefficient k", right: "Aire multipliée par k²" },
            ],
          },
          quiz: [
            { q: "Deux triangles ont chacun un angle de 30° et un angle de 100°. Que peut-on dire ?", options: ["Ils sont égaux", "Ils sont semblables", "On ne peut rien dire sans les longueurs"], answer: 1, why: "Deux angles égaux deux à deux suffisent : le troisième angle mesure 50° dans les deux triangles." },
            { q: "Un triangle a des côtés de 3 cm, 5 cm et 7 cm. Lequel lui est semblable ?", options: ["6, 10 et 12 cm", "5, 7 et 9 cm", "9, 15 et 21 cm", "4, 6 et 8 cm"], answer: 2, why: "9 ÷ 3 = 15 ÷ 5 = 21 ÷ 7 = 3 : les longueurs sont proportionnelles." },
            { q: "Dans deux triangles semblables, les côtés homologues sont :", options: ["les côtés qui ont exactement la même longueur dans les deux triangles", "les côtés opposés aux angles égaux", "les côtés tracés parallèlement l'un à l'autre"], answer: 1, why: "Les côtés homologues se correspondent par les angles : ils sont opposés à des angles de même mesure." },
            { q: "Un triangle est agrandi avec le coefficient 3. Par combien son aire est-elle multipliée ?", options: ["9", "3", "6", "27"], answer: 0, why: "Les aires sont multipliées par k² = 3² = 9." },
            { q: "ABC et DEF sont semblables ; AB = 4 cm et son côté homologue DE = 10 cm. Quel est le coefficient d'agrandissement ?", options: ["6", "0,4", "14", "2,5"], answer: 3, why: "k = DE ÷ AB = 10 ÷ 4 = 2,5. Le nombre 0,4 serait le coefficient de réduction de DEF vers ABC." },
          ],
          trap: "Associer les côtés dans le mauvais ordre : les côtés homologues ne sont pas ceux qui se ressemblent sur le dessin, mais ceux qui sont opposés aux angles égaux (ou qui ont le même rang une fois les longueurs rangées).",
          method: "Commencez toujours par écrire la correspondance des sommets (A avec D, B avec E, C avec F), puis rangez les longueurs dans un tableau à deux lignes : le coefficient se lit d'une ligne à l'autre.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'theoreme-thales',
          title: 'Le théorème de Thalès : calculer une longueur',
          minutes: 35,
          objectives: [
            "Reconnaître une configuration de Thalès (triangles emboîtés ou configuration en papillon).",
            "Utiliser le théorème de Thalès pour calculer une longueur.",
            "Rédiger une démonstration utilisant le théorème de Thalès.",
          ],
          course: [
            {
              heading: "L'énoncé du théorème",
              paragraphs: [
                "Soient deux droites (BM) et (CN) sécantes en A. Si les droites (MN) et (BC) sont parallèles, alors AM/AB = AN/AC = MN/BC. Autrement dit, les longueurs des côtés du triangle AMN sont proportionnelles à celles des côtés du triangle ABC.",
                "Ce théorème porte le nom de Thalès de Milet, savant grec du VIe siècle avant J.-C. Il prolonge la leçon précédente : quand (MN) et (BC) sont parallèles, les triangles AMN et ABC ont les mêmes angles (angles correspondants ou alternes-internes, et angle commun ou opposé par le sommet en A). Ils sont donc semblables, et leurs côtés sont proportionnels.",
              ],
              box: { label: "Théorème de Thalès", text: "Soient deux droites (BM) et (CN) sécantes en A. Si les droites (MN) et (BC) sont parallèles, alors AM/AB = AN/AC = MN/BC." },
            },
            {
              heading: "Les deux configurations",
              paragraphs: [
                "Configuration emboîtée : M est sur le segment [AB] et N sur le segment [AC]. Le petit triangle AMN est contenu dans le grand triangle ABC, comme une réduction placée dans un de ses coins.",
                "Configuration en papillon : M et N sont de l'autre côté de A, sur les droites (AB) et (AC). Les deux triangles AMN et ABC sont opposés par le sommet A, comme les ailes d'un papillon. Le théorème s'applique de la même façon, avec les mêmes rapports AM/AB = AN/AC = MN/BC.",
                "Pour écrire les rapports sans erreur, on place les côtés du triangle AMN au numérateur et les côtés homologues du triangle ABC au dénominateur. A est le sommet commun ; M correspond à B et N correspond à C. Chaque rapport compare donc deux côtés homologues.",
              ],
            },
            {
              heading: "Calculer une longueur et rédiger",
              paragraphs: [
                "Méthode : 1) citer les données (les deux droites sécantes et les deux droites parallèles) ; 2) citer le théorème de Thalès et écrire l'égalité des trois rapports ; 3) remplacer les longueurs connues par leurs valeurs ; 4) choisir l'égalité de deux rapports qui contient la longueur cherchée et calculer par produit en croix.",
                "Exemple : les droites (BM) et (CN) sont sécantes en A, (MN) // (BC), AM = 3 cm, AB = 5 cm et BC = 7 cm. On cherche MN. D'après le théorème de Thalès, AM/AB = AN/AC = MN/BC, donc 3/5 = AN/AC = MN/7. Avec l'égalité 3/5 = MN/7, le produit en croix donne MN = 3 × 7 ÷ 5 = 4,2 cm.",
                "Il faut parfois une addition ou une soustraction pour obtenir une longueur utile : si M est sur [AB] avec AM = 3 cm et MB = 2 cm, alors AB = AM + MB = 5 cm. Lisez attentivement l'énoncé pour savoir quelles longueurs sont données.",
              ],
              box: { label: "À retenir", text: "Le théorème de Thalès sert à calculer des longueurs quand on sait que deux droites sont parallèles. Les trois rapports ont au numérateur les côtés d'un même triangle, et au dénominateur les côtés homologues de l'autre." },
            },
          ],
          keyPoints: [
            "Hypothèses : deux droites sécantes en A et deux droites parallèles (MN) et (BC).",
            "Conclusion : AM/AB = AN/AC = MN/BC.",
            "Deux configurations : triangles emboîtés ou en papillon ; les rapports s'écrivent de la même façon.",
            "Numérateurs : côtés du triangle AMN ; dénominateurs : côtés homologues du triangle ABC.",
            "On choisit l'égalité de deux rapports contenant la longueur cherchée, puis on fait un produit en croix.",
            "Le théorème calcule une longueur ; il ne prouve pas que des droites sont parallèles.",
          ],
          example: {
            statement: "Les points D, O, F sont alignés, ainsi que les points E, O, G, et les droites (DE) et (FG) sont parallèles (configuration en papillon de sommet O). On donne OD = 4 cm, OE = 5 cm, DE = 6 cm et OF = 10 cm. Calculez OG et FG.",
            solution: [
              "Les droites (DF) et (EG) sont sécantes en O, et les droites (DE) et (FG) sont parallèles.",
              "D'après le théorème de Thalès : OD/OF = OE/OG = DE/FG.",
              "On remplace par les valeurs connues : 4/10 = 5/OG = 6/FG.",
              "Calcul de OG : 4/10 = 5/OG, donc OG = 5 × 10 ÷ 4 = 12,5 cm.",
              "Calcul de FG : 4/10 = 6/FG, donc FG = 6 × 10 ÷ 4 = 15 cm.",
              "Conclusion : OG = 12,5 cm et FG = 15 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un triangle ABC, M est un point de [AB] et N un point de [AC], tels que les droites (MN) et (BC) soient parallèles. On donne AM = 4 cm, AB = 10 cm, AC = 8 cm et BC = 12 cm. Calculez AN et MN.",
              hint: "Écrivez les trois rapports AM/AB = AN/AC = MN/BC, remplacez par les valeurs connues, puis utilisez les produits en croix.",
              solution: [
                "Les droites (BM) et (CN) sont sécantes en A et les droites (MN) et (BC) sont parallèles.",
                "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, soit 4/10 = AN/8 = MN/12.",
                "AN = 4 × 8 ÷ 10 = 3,2 cm.",
                "MN = 4 × 12 ÷ 10 = 4,8 cm.",
              ],
            },
            {
              level: 2,
              statement: "Les points D, A, B sont alignés dans cet ordre, ainsi que les points E, A, C. Les droites (DE) et (BC) sont parallèles. On donne AE = 3 cm, AC = 7,5 cm, AB = 6 cm et BC = 9 cm. a) Calculez AD et DE. b) Déduisez-en la longueur DB.",
              hint: "C'est une configuration en papillon de sommet A. Les côtés du triangle ADE vont au numérateur, ceux du triangle ABC au dénominateur.",
              solution: [
                "a) Les droites (DB) et (EC) sont sécantes en A, et les droites (DE) et (BC) sont parallèles.",
                "D'après le théorème de Thalès : AD/AB = AE/AC = DE/BC, soit AD/6 = 3/7,5 = DE/9.",
                "3 ÷ 7,5 = 0,4, donc AD = 0,4 × 6 = 2,4 cm et DE = 0,4 × 9 = 3,6 cm.",
                "b) A est situé entre D et B, donc DB = DA + AB = 2,4 + 6 = 8,4 cm.",
              ],
            },
            {
              level: 3,
              statement: "La coupe d'une charpente de toit est un triangle ABC dont la base [BC] est horizontale. Une poutre [MN] est fixée parallèlement à [BC], avec M sur [AB] et N sur [AC]. On sait que AB = 5 m, AM = 2 m, BC = 8 m et AN = 2,2 m. a) Calculez la longueur MN de la poutre. b) Calculez la longueur AC. c) Le charpentier affirme que la poutre mesure moins de la moitié de la base [BC]. A-t-il raison ? Justifiez.",
              hint: "Les droites (BM) et (CN) sont sécantes en A et (MN) // (BC) : appliquez le théorème de Thalès dans la configuration emboîtée.",
              solution: [
                "Les droites (BM) et (CN) sont sécantes en A et les droites (MN) et (BC) sont parallèles.",
                "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC, soit 2/5 = 2,2/AC = MN/8.",
                "a) MN = 2 × 8 ÷ 5 = 3,2 m.",
                "b) 2/5 = 2,2/AC, donc AC = 2,2 × 5 ÷ 2 = 5,5 m.",
                "c) La moitié de la base vaut 8 ÷ 2 = 4 m. Comme 3,2 m < 4 m, le charpentier a raison.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la rédaction du calcul de MN avec le théorème de Thalès.",
            items: [
              "Les droites (BM) et (CN) sont sécantes en A.",
              "Les droites (MN) et (BC) sont parallèles.",
              "D'après le théorème de Thalès : AM/AB = AN/AC = MN/BC.",
              "On remplace par les longueurs connues : 3/5 = AN/6 = MN/7.",
              "On choisit l'égalité utile : 3/5 = MN/7.",
              "Par produit en croix : MN = 3 × 7 ÷ 5 = 4,2 cm.",
            ],
          },
          quiz: [
            { q: "M est sur [AB] et N sur [AC]. Quelle condition est indispensable pour appliquer le théorème de Thalès ?", options: ["(MN) et (BC) sont parallèles", "ABC est rectangle", "M et N sont les milieux de [AB] et [AC]", "AM = AN"], answer: 0, why: "Le théorème de Thalès a pour hypothèse le parallélisme des droites (MN) et (BC)." },
            { q: "(MN) // (BC), avec M sur [AB] et N sur [AC]. Quelle égalité est correcte ?", options: ["AM/MB = AN/NC = MN/BC", "AB/AM = AN/AC = BC/MN", "AM/AB = AN/AC = MN/BC", "AM/AB = AC/AN = MN/BC"], answer: 2, why: "Les côtés du triangle AMN sont au numérateur, leurs homologues du triangle ABC au dénominateur, dans le même ordre." },
            { q: "On a AM/AB = MN/BC avec AM = 2, AB = 6 et BC = 9. Que vaut MN ?", options: ["27", "4,5", "1,3", "3"], answer: 3, why: "Par produit en croix : MN = 2 × 9 ÷ 6 = 3." },
            { q: "Dans une configuration en papillon, où se trouve le point A commun aux deux triangles ?", options: ["Sur le segment [BC]", "Entre M et B, et entre N et C", "À l'extérieur des deux triangles"], answer: 1, why: "Les deux triangles sont opposés par le sommet A : A est situé entre M et B, et entre N et C." },
            { q: "À quoi sert le théorème de Thalès ?", options: ["À prouver que deux droites sont parallèles à partir de longueurs connues", "À calculer une longueur, sachant que deux droites sont parallèles", "À calculer la mesure d'un angle dans un triangle rectangle"], answer: 1, why: "Le théorème part du parallélisme pour obtenir des rapports égaux et calculer des longueurs. Prouver un parallélisme relève de sa réciproque." },
          ],
          trap: "Écrire des rapports dont les longueurs ne se correspondent pas (AM/MB au lieu de AM/AB, ou un rapport retourné), ou appliquer le théorème sans avoir vérifié que les droites sont parallèles.",
          method: "Avant d'écrire les rapports, repassez en couleur le triangle AMN puis le triangle ABC, et écrivez les trois quotients en suivant toujours le même ordre : côtés de AMN en haut, côtés homologues de ABC en bas.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'reciproque-thales',
          title: 'La réciproque du théorème de Thalès : prouver un parallélisme',
          minutes: 30,
          objectives: [
            "Utiliser la réciproque du théorème de Thalès pour démontrer que deux droites sont parallèles.",
            "Utiliser la contraposée du théorème de Thalès pour démontrer que deux droites ne sont pas parallèles.",
            "Comparer deux quotients à l'aide de valeurs exactes ou de produits en croix.",
          ],
          course: [
            {
              heading: "L'énoncé de la réciproque",
              paragraphs: [
                "Le théorème de Thalès part du parallélisme pour obtenir des rapports égaux. Sa réciproque fait le chemin inverse : elle part de rapports égaux pour prouver un parallélisme. Énoncé : soient deux droites (BM) et (CN) sécantes en A. Si les points A, M, B d'une part et A, N, C d'autre part sont alignés dans le même ordre, et si AM/AB = AN/AC, alors les droites (MN) et (BC) sont parallèles.",
                "On compare seulement deux rapports, AM/AB et AN/AC, formés avec des longueurs prises sur les deux droites sécantes. Le rapport MN/BC n'intervient pas dans la réciproque.",
              ],
              box: { label: "Réciproque du théorème de Thalès", text: "Soient deux droites (BM) et (CN) sécantes en A. Si les points A, M, B et les points A, N, C sont alignés dans le même ordre, et si AM/AB = AN/AC, alors les droites (MN) et (BC) sont parallèles." },
            },
            {
              heading: "La condition sur l'ordre des points",
              paragraphs: [
                "La condition « dans le même ordre » est indispensable. Si M est sur le segment [AB], alors N doit être sur le segment [AC] (configuration emboîtée). Si M est de l'autre côté de A par rapport à B, alors N doit aussi être de l'autre côté de A par rapport à C (configuration en papillon).",
                "Sans cette condition, la conclusion peut être fausse. Prenons M au milieu de [AB], et N sur la droite (AC) de l'autre côté de A, avec AN égal à la moitié de AC. On a bien AM/AB = AN/AC = 0,5, mais les points ne sont pas dans le même ordre, et les droites (MN) et (BC) ne sont pas parallèles.",
              ],
            },
            {
              heading: "Comparer les rapports et rédiger",
              paragraphs: [
                "Pour comparer AM/AB et AN/AC, on calcule les deux quotients séparément, sous forme exacte : fraction irréductible ou nombre décimal exact. On peut aussi comparer les produits en croix : AM/AB = AN/AC équivaut à AM × AC = AN × AB. On ne conclut jamais à partir de valeurs arrondies : deux quotients dont les arrondis coïncident peuvent être différents.",
                "Exemple de rédaction : les points A, M, B et A, N, C sont alignés dans le même ordre. AM/AB = 3/5 = 0,6 et AN/AC = 4,2/7 = 0,6. On constate que AM/AB = AN/AC. Donc, d'après la réciproque du théorème de Thalès, les droites (MN) et (BC) sont parallèles.",
                "Si les deux rapports sont différents, on utilise la contraposée du théorème de Thalès. Exemple : AM/AB = 3/5 et AN/AC = 4/7. Les produits en croix valent 3 × 7 = 21 et 4 × 5 = 20 : les quotients sont différents. Si les droites (MN) et (BC) étaient parallèles, ces rapports seraient égaux d'après le théorème de Thalès ; elles ne sont donc pas parallèles.",
              ],
              box: { label: "À retenir", text: "Rapports égaux et points alignés dans le même ordre : les droites sont parallèles (réciproque). Rapports différents : les droites ne sont pas parallèles (contraposée). Toujours comparer des valeurs exactes." },
            },
          ],
          keyPoints: [
            "La réciproque de Thalès sert à prouver que deux droites sont parallèles.",
            "Il faut vérifier deux choses : les points sont alignés dans le même ordre, et AM/AB = AN/AC.",
            "Le rapport MN/BC n'est pas utilisé dans la réciproque.",
            "On compare des valeurs exactes, ou les produits en croix AM × AC et AN × AB, jamais des arrondis.",
            "Si AM/AB ≠ AN/AC, la contraposée du théorème prouve que les droites ne sont pas parallèles.",
          ],
          example: {
            statement: "Les points E, F, G sont alignés dans cet ordre, ainsi que les points E, H, K. On donne EF = 4,5 cm, EG = 7,5 cm, EH = 6 cm et EK = 10 cm. Les droites (FH) et (GK) sont-elles parallèles ?",
            solution: [
              "Les droites (FG) et (HK) sont sécantes en E, et les points E, F, G et E, H, K sont alignés dans le même ordre.",
              "On calcule le premier rapport : EF/EG = 4,5/7,5 = 45/75 = 3/5 = 0,6.",
              "On calcule le second rapport : EH/EK = 6/10 = 0,6.",
              "On constate que EF/EG = EH/EK.",
              "D'après la réciproque du théorème de Thalès, les droites (FH) et (GK) sont parallèles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Les points A, M, B sont alignés dans cet ordre, ainsi que les points A, N, C. On donne AM = 2 cm, AB = 5 cm, AN = 3 cm et AC = 7,5 cm. Les droites (MN) et (BC) sont-elles parallèles ?",
              hint: "Calculez séparément AM/AB et AN/AC, puis comparez-les.",
              solution: [
                "Les points A, M, B et A, N, C sont alignés dans le même ordre.",
                "AM/AB = 2/5 = 0,4 et AN/AC = 3/7,5 = 0,4.",
                "On constate que AM/AB = AN/AC.",
                "D'après la réciproque du théorème de Thalès, les droites (MN) et (BC) sont parallèles.",
              ],
            },
            {
              level: 2,
              statement: "Les points R, O, U sont alignés dans cet ordre, ainsi que les points S, O, V. On donne OR = 3,6 cm, OU = 6 cm, OS = 4,5 cm et OV = 7 cm. Les droites (RS) et (UV) sont-elles parallèles ?",
              hint: "C'est une configuration en papillon de sommet O. Comparez OR/OU et OS/OV ; si l'un des quotients n'est pas décimal, comparez les produits en croix.",
              solution: [
                "Les droites (RU) et (SV) sont sécantes en O, et les points R, O, U et S, O, V sont alignés dans le même ordre.",
                "OR/OU = 3,6/6 = 0,6. Le quotient OS/OV = 4,5/7 n'est pas un nombre décimal exact : on compare les produits en croix.",
                "OR × OV = 3,6 × 7 = 25,2 et OS × OU = 4,5 × 6 = 27. Les produits sont différents, donc OR/OU ≠ OS/OV.",
                "Si les droites (RS) et (UV) étaient parallèles, ces rapports seraient égaux d'après le théorème de Thalès.",
                "Conclusion : les droites (RS) et (UV) ne sont pas parallèles.",
              ],
            },
            {
              level: 3,
              statement: "Un parc a la forme d'un triangle ABC, avec AB = 120 m, AC = 150 m et BC = 180 m. On a placé un point M sur [AB] tel que AM = 48 m, et un point N sur [AC] tel que AN = 60 m. a) Démontrez que l'allée [MN] est parallèle au côté [BC]. b) Calculez la longueur de l'allée [MN]. c) Calculez le périmètre de la partie MBCN du parc.",
              hint: "Pour la question a, utilisez la réciproque du théorème de Thalès. Pour la question b, le parallélisme étant prouvé, utilisez le théorème de Thalès.",
              solution: [
                "a) M est sur [AB] et N sur [AC] : les points A, M, B et A, N, C sont alignés dans le même ordre.",
                "AM/AB = 48/120 = 0,4 et AN/AC = 60/150 = 0,4. Les rapports sont égaux : d'après la réciproque du théorème de Thalès, (MN) et (BC) sont parallèles.",
                "b) Les droites (BM) et (CN) sont sécantes en A et (MN) // (BC). D'après le théorème de Thalès : AM/AB = MN/BC, soit 0,4 = MN/180, donc MN = 0,4 × 180 = 72 m.",
                "c) MB = AB - AM = 120 - 48 = 72 m et NC = AC - AN = 150 - 60 = 90 m.",
                "Périmètre de MBCN : MB + BC + CN + NM = 72 + 180 + 90 + 72 = 414 m.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les droites (BM) et (CN) sont sécantes en A.",
            statements: [
              { text: "La réciproque du théorème de Thalès sert à prouver que deux droites sont parallèles.", true: true, why: "Elle part de rapports égaux pour conclure au parallélisme." },
              { text: "Pour l'appliquer, il faut vérifier que AM/AB = MN/BC.", true: false, why: "On compare AM/AB et AN/AC, qui portent sur les deux droites sécantes ; MN/BC n'intervient pas." },
              { text: "Si AM/AB = AN/AC mais que les points ne sont pas dans le même ordre, on ne peut pas conclure au parallélisme.", true: true, why: "La condition sur l'ordre des points fait partie des hypothèses de la réciproque." },
              { text: "Si AM/AB ≈ 0,33 et AN/AC ≈ 0,33 à la calculatrice, les droites sont forcément parallèles.", true: false, why: "Des arrondis égaux ne prouvent pas que les quotients exacts sont égaux." },
              { text: "Si AM/AB ≠ AN/AC, les droites (MN) et (BC) ne sont pas parallèles.", true: true, why: "C'est la contraposée du théorème de Thalès." },
              { text: "AM/AB = AN/AC équivaut à AM × AC = AN × AB.", true: true, why: "C'est l'égalité des produits en croix." },
              { text: "La réciproque du théorème de Thalès permet de calculer une longueur.", true: false, why: "Pour calculer une longueur, on utilise le théorème de Thalès lui-même, une fois le parallélisme connu." },
            ],
          },
          quiz: [
            { q: "Que permet de démontrer la réciproque du théorème de Thalès ?", options: ["Qu'un triangle est rectangle", "Que deux droites sont parallèles", "La longueur d'un côté", "Que deux droites sont perpendiculaires"], answer: 1, why: "La réciproque part de rapports égaux pour prouver un parallélisme." },
            { q: "AM = 3, AB = 9, AN = 4 et AC = 12, avec les points alignés dans le même ordre. Que conclure ?", options: ["(MN) et (BC) sont parallèles", "(MN) et (BC) ne sont pas parallèles", "On ne peut rien conclure sans MN et BC"], answer: 0, why: "AM/AB = 3/9 = 1/3 et AN/AC = 4/12 = 1/3 : d'après la réciproque, les droites sont parallèles." },
            { q: "AM/AB = 0,6 et AN/AC = 0,625, les droites (BM) et (CN) étant sécantes en A. Que conclure ?", options: ["Les droites (MN) et (BC) sont parallèles, car les quotients sont proches", "Les droites (MN) et (BC) ne sont pas parallèles", "Il faut calculer MN/BC pour conclure"], answer: 1, why: "Les quotients sont différents : d'après la contraposée du théorème de Thalès, les droites ne sont pas parallèles." },
            { q: "Quelle égalité de produits en croix équivaut à AM/AB = AN/AC ?", options: ["AM × AB = AN × AC", "AM × AN = AB × AC", "AM × AC = AN × AB"], answer: 2, why: "Dans a/b = c/d, les produits en croix sont a × d et b × c : ici AM × AC et AB × AN." },
            { q: "Pourquoi faut-il vérifier l'ordre des points ?", options: ["Parce que, sans le même ordre, des rapports égaux ne garantissent pas le parallélisme", "Parce que la réciproque ne s'applique jamais à la configuration en papillon, seulement aux triangles emboîtés", "Parce que l'ordre des points change la valeur des longueurs"], answer: 0, why: "Avec des rapports égaux mais des points dans un ordre différent, les droites peuvent ne pas être parallèles." },
          ],
          trap: "Conclure au parallélisme à partir de quotients arrondis, ou oublier de vérifier que les points sont alignés dans le même ordre ; utiliser MN/BC au lieu de AN/AC est une autre erreur fréquente.",
          method: "Calculez les deux rapports séparément, sans jamais écrire d'égalité avant de l'avoir constatée. Rédigez ensuite : « On constate que... donc, d'après la réciproque du théorème de Thalès... ». En cas de doute, comparez les produits en croix.",
        },
      ],
    },
  ],
}
