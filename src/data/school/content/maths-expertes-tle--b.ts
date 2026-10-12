import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-expertes-tle',
  chapters: [
    /* ================================================================== */
    /* ARITHMÉTIQUE                                                         */
    /* ================================================================== */
    {
      id: 'arithmetique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'divisibilite-congruences',
          title: 'Divisibilité, division euclidienne et congruences',
          minutes: 30,
          objectives: [
            "Utiliser la divisibilité dans ℤ et ses propriétés, notamment : si a divise b et c, alors a divise toute combinaison bu + cv.",
            "Effectuer la division euclidienne d'un entier relatif par un entier naturel non nul.",
            "Utiliser les congruences modulo n et leur compatibilité avec l'addition, la multiplication et les puissances.",
            "Déterminer le reste d'une grande puissance ou démontrer une divisibilité à l'aide d'une table de congruences.",
          ],
          course: [
            {
              heading: "La divisibilité dans ℤ",
              paragraphs: [
                "Soient a et b deux entiers relatifs. On dit que a divise b (ou que b est un multiple de a, ou que a est un diviseur de b) s'il existe un entier relatif k tel que b = ka. On note a | b. Par exemple, -4 divise 12 car 12 = (-3) × (-4), et tout entier divise 0 car 0 = 0 × a. Un entier non nul b n'a qu'un nombre fini de diviseurs, tous compris entre -|b| et |b|.",
                "Deux propriétés servent sans cesse. La transitivité : si a | b et b | c, alors a | c (si b = ka et c = k'b, alors c = (k'k)a). Les combinaisons : si a | b et a | c, alors pour tous entiers u et v, a | bu + cv. En effet, si b = ka et c = k'a, alors bu + cv = (ku + k'v)a.",
                "Cette seconde propriété permet d'éliminer l'inconnue. Cherchons les entiers n tels que n + 2 divise n + 7. Si n + 2 divise n + 7, il divise la différence (n + 7) - (n + 2) = 5. Donc n + 2 ∈ {-5 ; -1 ; 1 ; 5}, soit n ∈ {-7 ; -3 ; -1 ; 3}. Réciproquement, pour chacune de ces valeurs, n + 7 = (n + 2) + 5 est bien un multiple de n + 2 : ce sont les quatre solutions.",
              ],
              box: { label: "Propriété", text: "Si a divise b et a divise c, alors a divise bu + cv pour tous entiers relatifs u et v. En particulier, a divise b + c et b - c." },
            },
            {
              heading: "La division euclidienne",
              paragraphs: [
                "Théorème : pour tout entier relatif a et tout entier naturel non nul b, il existe un unique couple d'entiers (q ; r) tel que a = bq + r et 0 ≤ r < b. L'entier q est le quotient, r le reste. Le quotient est le plus grand entier q tel que bq ≤ a : c'est la partie entière de a/b. L'unicité vient de ce que deux restes possibles r et r' vérifieraient b | r - r' avec -b < r - r' < b, donc r = r'.",
                "Exemples : 2026 = 17 × 119 + 3, donc le quotient de 2026 par 17 est 119 et le reste est 3. Pour un nombre négatif, le reste doit rester positif : -17 = 5 × (-4) + 3, le quotient est -4 et le reste 3. L'écriture -17 = 5 × (-3) - 2 est juste, mais ce n'est pas la division euclidienne, car -2 n'est pas compris entre 0 et 4.",
                "Le reste dans la division par b ne peut prendre que les b valeurs 0, 1, ..., b - 1. Cela permet de raisonner par disjonction de cas : tout entier s'écrit 2k ou 2k + 1, ou encore 3k, 3k + 1 ou 3k + 2, et ainsi de suite.",
              ],
              box: { label: "Définition", text: "Division euclidienne de a ∈ ℤ par b ∈ ℕ* : a = bq + r avec q ∈ ℤ et 0 ≤ r < b. Le couple (q ; r) est unique. Le reste est toujours positif ou nul et strictement inférieur au diviseur." },
            },
            {
              heading: "Les congruences modulo n",
              paragraphs: [
                "Soit n un entier naturel, n ≥ 2. On dit que deux entiers a et b sont congrus modulo n, et l'on note a ≡ b [n], lorsque n divise a - b. C'est équivalent à dire que a et b ont le même reste dans la division euclidienne par n. Par exemple 23 ≡ 2 [7] car 23 - 2 = 21, 17 ≡ -1 [6] car 17 - (-1) = 18, et un entier est pair si et seulement s'il est congru à 0 modulo 2.",
                "Tout entier est congru modulo n à son reste dans la division par n : 2026 ≡ 3 [17]. La congruence modulo n se comporte comme une égalité « à un multiple de n près » : elle est réflexive (a ≡ a), symétrique (si a ≡ b, alors b ≡ a) et transitive (si a ≡ b et b ≡ c, alors a ≡ c). On peut donc enchaîner les congruences comme des égalités.",
                "Une image utile est celle de l'horloge : sur un cadran de 12 heures, 15 h s'affiche comme 3 h, car 15 ≡ 3 [12]. Calculer modulo n, c'est ne garder que la position sur un cadran à n graduations.",
              ],
              box: { label: "Définition", text: "a ≡ b [n] signifie que n divise a - b, c'est-à-dire que a et b ont le même reste dans la division euclidienne par n. Si r est le reste de a dans la division par n, alors a ≡ r [n] et 0 ≤ r < n." },
            },
            {
              heading: "Compatibilité avec les opérations",
              paragraphs: [
                "Si a ≡ b [n] et c ≡ d [n], alors a + c ≡ b + d [n], a - c ≡ b - d [n] et ac ≡ bd [n]. Démonstration pour le produit : ac - bd = a(c - d) + d(a - b), qui est une somme de deux multiples de n. Par récurrence sur k, on en déduit que si a ≡ b [n], alors aᵏ ≡ bᵏ [n] pour tout entier naturel k.",
                "Ces règles permettent de calculer des restes de très grands nombres. Cherchons le reste de 2²⁰²⁶ dans la division par 7. On remarque que 2³ = 8 ≡ 1 [7]. Comme 2026 = 3 × 675 + 1, on a 2²⁰²⁶ = (2³)⁶⁷⁵ × 2 ≡ 1⁶⁷⁵ × 2 ≡ 2 [7]. Le reste est 2. La stratégie consiste toujours à chercher une puissance congrue à 1 (ou à -1).",
                "Attention : on ne peut pas simplifier une congruence comme une égalité. On a 2 × 3 ≡ 2 × 0 [6] puisque 6 - 0 = 6, mais 3 n'est pas congru à 0 modulo 6. La division n'est permise que dans des cas précis, étudiés avec le théorème de Gauss. Enfin, une table de congruences (on teste chaque reste possible) permet d'établir une propriété pour tous les entiers.",
              ],
              box: { label: "Propriété", text: "Si a ≡ b [n] et c ≡ d [n], alors a + c ≡ b + d [n], ac ≡ bd [n] et, pour tout entier naturel k, aᵏ ≡ bᵏ [n]. On ne divise pas les deux membres d'une congruence par un même nombre." },
            },
          ],
          keyPoints: [
            "a | b s'il existe k ∈ ℤ tel que b = ka. Si a | b et a | c, alors a | bu + cv pour tous entiers u, v.",
            "Division euclidienne : a = bq + r avec 0 ≤ r < b, le couple (q ; r) est unique ; le reste n'est jamais négatif.",
            "a ≡ b [n] signifie n | a - b, ou encore : a et b ont le même reste dans la division par n.",
            "Les congruences se conservent par somme, produit et puissance ; on ne simplifie jamais par division.",
            "Pour un reste de aᵏ, chercher une puissance de a congrue à 1 ou à -1, puis écrire k = (période) × q + r.",
            "Une table de congruences (tous les restes possibles) démontre une propriété pour tous les entiers.",
          ],
          example: {
            statement: "Démontrer que, pour tout entier naturel n, n³ - n est divisible par 3.",
            solution: [
              "Modulo 3, tout entier n est congru à 0, à 1 ou à 2 (ses restes possibles dans la division par 3). On dresse une table de congruences.",
              "Si n ≡ 0 [3], alors n³ ≡ 0 [3] et n³ - n ≡ 0 - 0 ≡ 0 [3].",
              "Si n ≡ 1 [3], alors n³ ≡ 1 [3] et n³ - n ≡ 1 - 1 ≡ 0 [3].",
              "Si n ≡ 2 [3], alors n³ ≡ 8 ≡ 2 [3] et n³ - n ≡ 2 - 2 ≡ 0 [3].",
              "Dans tous les cas, n³ - n ≡ 0 [3] : pour tout entier naturel n, n³ - n est divisible par 3 (vérification : 2³ - 2 = 6, 4³ - 4 = 60).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Effectuer la division euclidienne de 2026 par 17, puis celle de -2026 par 17. 2. En déduire l'entier r de {0 ; 1 ; ... ; 16} tel que -2026 ≡ r [17].",
              hint: "Encadrez 2026 entre deux multiples consécutifs de 17. Pour -2026, le reste doit rester positif : prenez le multiple de 17 immédiatement inférieur à -2026.",
              solution: [
                "1. 17 × 119 = 2023 et 17 × 120 = 2040. Comme 2023 ≤ 2026 < 2040, on a 2026 = 17 × 119 + 3 avec 0 ≤ 3 < 17 : quotient 119, reste 3.",
                "Pour -2026 : -2040 ≤ -2026 < -2023, donc on prend q = -120. On a -2026 = 17 × (-120) + 14, car -2040 + 14 = -2026, et 0 ≤ 14 < 17 : quotient -120, reste 14.",
                "2. Le reste de -2026 dans la division par 17 est 14, donc -2026 ≡ 14 [17].",
                "Vérification : 2026 ≡ 3 [17] donne -2026 ≡ -3 [17], et -3 ≡ 14 [17] car 14 - (-3) = 17. Le résultat est cohérent : r = 14.",
              ],
            },
            {
              level: 2,
              statement: "1. Déterminer le reste de la division euclidienne de 5²⁰²⁶ par 13. 2. Démontrer que, pour tout entier naturel n, 3²ⁿ⁺¹ + 2ⁿ⁺² est divisible par 7.",
              hint: "1. Calculez 5² modulo 13 : vous obtenez -1. 2. Écrivez 3²ⁿ⁺¹ = 3 × 9ⁿ et 2ⁿ⁺² = 4 × 2ⁿ, puis remarquez que 9 ≡ 2 [7].",
              solution: [
                "1. 5² = 25 = 26 - 1, donc 5² ≡ -1 [13], puis 5⁴ ≡ (-1)² ≡ 1 [13].",
                "On écrit 2026 = 4 × 506 + 2. Alors 5²⁰²⁶ = (5⁴)⁵⁰⁶ × 5² ≡ 1 × (-1) ≡ -1 ≡ 12 [13]. Le reste est 12.",
                "2. Pour tout n, 3²ⁿ⁺¹ = 3 × (3²)ⁿ = 3 × 9ⁿ et 2ⁿ⁺² = 4 × 2ⁿ.",
                "Or 9 ≡ 2 [7], donc 9ⁿ ≡ 2ⁿ [7] (compatibilité avec les puissances). Ainsi 3²ⁿ⁺¹ + 2ⁿ⁺² ≡ 3 × 2ⁿ + 4 × 2ⁿ ≡ 7 × 2ⁿ ≡ 0 [7].",
                "Conclusion : pour tout entier naturel n, 3²ⁿ⁺¹ + 2ⁿ⁺² est divisible par 7 (vérification pour n = 0 : 3 + 4 = 7 ; pour n = 1 : 27 + 8 = 35 = 7 × 5).",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). 1. Déterminer les restes possibles de x² dans la division par 4, x désignant un entier. 2. En déduire qu'un entier congru à 3 modulo 4 n'est jamais la somme de deux carrés d'entiers. L'entier 2027 est-il la somme de deux carrés ? 3. Déterminer les restes possibles de x² dans la division par 8. 4. Démontrer que la somme de trois carrés d'entiers n'est jamais congrue à 7 modulo 8. En déduire que 2023 n'est pas la somme de trois carrés d'entiers.",
              hint: "Dressez des tables de congruences : x prend les restes 0 à 3 modulo 4, puis 0 à 7 modulo 8. Pour la question 4, examinez toutes les sommes possibles de trois restes de carrés.",
              solution: [
                "1. Modulo 4 : si x ≡ 0, x² ≡ 0 ; si x ≡ 1, x² ≡ 1 ; si x ≡ 2, x² ≡ 4 ≡ 0 ; si x ≡ 3, x² ≡ 9 ≡ 1. Un carré est donc congru à 0 ou à 1 modulo 4.",
                "2. Une somme de deux carrés est congrue modulo 4 à 0 + 0, 0 + 1 ou 1 + 1, c'est-à-dire à 0, 1 ou 2, jamais à 3. Or 2027 = 4 × 506 + 3, donc 2027 ≡ 3 [4] : 2027 n'est pas la somme de deux carrés.",
                "3. Modulo 8, pour x ≡ 0, 1, 2, 3, 4, 5, 6, 7, on obtient x² ≡ 0, 1, 4, 9 ≡ 1, 16 ≡ 0, 25 ≡ 1, 36 ≡ 4, 49 ≡ 1. Un carré est donc congru à 0, 1 ou 4 modulo 8.",
                "4. On additionne trois éléments de {0 ; 1 ; 4} : 0 + 0 + 0 = 0, 0 + 0 + 1 = 1, 0 + 1 + 1 = 2, 1 + 1 + 1 = 3, 0 + 0 + 4 = 4, 0 + 1 + 4 = 5, 1 + 1 + 4 = 6, 0 + 4 + 4 = 8 ≡ 0, 1 + 4 + 4 = 9 ≡ 1, 4 + 4 + 4 = 12 ≡ 4.",
                "Les restes obtenus sont 0, 1, 2, 3, 4, 5 et 6 : la valeur 7 n'apparaît jamais. Une somme de trois carrés n'est donc jamais congrue à 7 modulo 8.",
                "Or 2023 = 8 × 252 + 7, donc 2023 ≡ 7 [8] : 2023 n'est pas la somme de trois carrés d'entiers.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Divisibilité et congruences.",
            statements: [
              { text: "Si a ≡ b [n], alors a² ≡ b² [n].", true: true, why: "La congruence est compatible avec le produit, donc avec les puissances." },
              { text: "Si 2a ≡ 2b [6], alors a ≡ b [6].", true: false, why: "Contre-exemple : 2 × 3 ≡ 2 × 0 [6], mais 3 n'est pas congru à 0 modulo 6. On ne simplifie pas une congruence." },
              { text: "Le reste de la division euclidienne de -7 par 3 est -1.", true: false, why: "Le reste est toujours positif : -7 = 3 × (-3) + 2, le reste est 2." },
              { text: "17 ≡ -1 [6].", true: true, why: "17 - (-1) = 18, qui est un multiple de 6." },
              { text: "Si a divise b + c, alors a divise b ou a divise c.", true: false, why: "2 divise 1 + 1 = 2, mais 2 ne divise pas 1." },
              { text: "Tout entier est congru modulo n à son reste dans la division par n.", true: true, why: "Si a = nq + r, alors a - r = nq est un multiple de n." },
              { text: "Si a divise b et b divise c, alors a divise c.", true: true, why: "Si b = ka et c = k'b, alors c = (k'k)a : c'est la transitivité." },
            ],
          },
          quiz: [
            {
              q: "Quel est le reste de la division euclidienne de -23 par 5 ?",
              options: ["3", "-3", "2", "4"],
              answer: 2,
              why: "-23 = 5 × (-5) + 2 avec 0 ≤ 2 < 5. L'écriture -23 = 5 × (-4) - 3 ne convient pas, car un reste ne peut pas être négatif.",
            },
            {
              q: "Que vaut 2¹⁰ modulo 3 ?",
              options: ["0", "1", "2"],
              answer: 1,
              why: "2 ≡ -1 [3], donc 2¹⁰ ≡ (-1)¹⁰ ≡ 1 [3]. On peut vérifier : 1024 = 3 × 341 + 1.",
            },
            {
              q: "Dire que a ≡ b [n], c'est dire que :",
              options: ["n divise a - b", "a divise b - n", "a - b divise n", "a et b sont deux multiples de n"],
              answer: 0,
              why: "C'est la définition : n divise a - b, ce qui équivaut à dire que a et b ont le même reste dans la division par n.",
            },
            {
              q: "Si n + 3 divise n + 10, alors n + 3 divise forcément :",
              options: ["3", "10", "13", "7"],
              answer: 3,
              why: "n + 3 divise la différence (n + 10) - (n + 3) = 7.",
            },
            {
              q: "Quel est le chiffre des unités de 7¹⁰⁰ ?",
              options: ["7", "9", "1", "3"],
              answer: 2,
              why: "Modulo 10 : 7² = 49 ≡ 9 et 7⁴ ≡ 81 ≡ 1. Comme 100 = 4 × 25, 7¹⁰⁰ ≡ 1 [10] : le chiffre des unités est 1.",
            },
          ],
          trap: "Simplifier une congruence comme une égalité (de 2a ≡ 2b [6], conclure a ≡ b [6]) ou donner un reste négatif dans la division euclidienne d'un nombre négatif.",
          method: "Pour un reste de grande puissance, calculez les premières puissances modulo n jusqu'à trouver 1 ou -1, écrivez l'exposant sous la forme (période) × q + r, puis vérifiez sur un petit exposant que la règle marche.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'pgcd-bezout',
          title: 'PGCD, algorithme d\'Euclide et théorème de Bézout',
          minutes: 35,
          objectives: [
            "Calculer le PGCD de deux entiers à l'aide de l'algorithme d'Euclide.",
            "Déterminer si deux entiers sont premiers entre eux.",
            "Établir et utiliser le théorème de Bézout, et déterminer un couple de coefficients (u ; v) en remontant l'algorithme d'Euclide.",
            "Déterminer l'inverse d'un entier modulo n et résoudre une équation du type ax ≡ b [n].",
          ],
          course: [
            {
              heading: "Le PGCD et le lemme fondamental",
              paragraphs: [
                "Soient a et b deux entiers non tous deux nuls. L'ensemble de leurs diviseurs communs positifs est fini et contient 1 : son plus grand élément est le plus grand commun diviseur de a et b, noté PGCD(a ; b). Par exemple, les diviseurs positifs de 12 sont 1, 2, 3, 4, 6, 12, ceux de 18 sont 1, 2, 3, 6, 9, 18, donc PGCD(12 ; 18) = 6. Les signes ne comptent pas : PGCD(a ; b) = PGCD(|a| ; |b|), et si b divise a, alors PGCD(a ; b) = |b|.",
                "Lemme : si a = bq + r, avec a, b, q, r entiers, alors les diviseurs communs de a et b sont exactement les diviseurs communs de b et r. Démonstration : si d divise a et b, il divise a - bq = r ; réciproquement, si d divise b et r, il divise bq + r = a. Les deux ensembles de diviseurs communs sont égaux, donc PGCD(a ; b) = PGCD(b ; r).",
              ],
              box: { label: "Propriété", text: "Si a = bq + r (par exemple dans une division euclidienne), alors PGCD(a ; b) = PGCD(b ; r)." },
            },
            {
              heading: "L'algorithme d'Euclide",
              paragraphs: [
                "Pour a ≥ b > 0, on effectue la division euclidienne de a par b, puis on remplace le couple (a ; b) par (b ; r), et l'on recommence. Les restes successifs sont des entiers naturels strictement décroissants, donc l'algorithme s'arrête : on finit par obtenir un reste nul. D'après le lemme, le PGCD ne change pas à chaque étape ; au moment où le reste est nul, le PGCD est le diviseur de la dernière division. Le PGCD est donc le dernier reste non nul.",
                "Exemple avec 1071 et 462 : 1071 = 462 × 2 + 147 ; 462 = 147 × 3 + 21 ; 147 = 21 × 7 + 0. Le dernier reste non nul est 21, donc PGCD(1071 ; 462) = 21. On vérifie : 1071 = 21 × 51 et 462 = 21 × 22. Cet algorithme figure dans les Éléments d'Euclide (vers 300 avant notre ère) et reste très rapide, même pour des nombres de plusieurs centaines de chiffres.",
                "On dit que a et b sont premiers entre eux lorsque PGCD(a ; b) = 1, c'est-à-dire lorsque leur seul diviseur commun positif est 1. Par exemple 8 et 15 sont premiers entre eux, alors qu'aucun des deux n'est un nombre premier. Plus généralement, si d = PGCD(a ; b), on peut écrire a = da' et b = db' avec a' et b' premiers entre eux.",
              ],
              box: { label: "Repère", text: "Algorithme d'Euclide : diviser a par b, remplacer (a ; b) par (b ; r), recommencer jusqu'à un reste nul. Le PGCD est le dernier reste non nul." },
            },
            {
              heading: "Le théorème de Bézout",
              paragraphs: [
                "Identité de Bézout : si d = PGCD(a ; b), il existe deux entiers relatifs u et v tels que au + bv = d. Idée de la preuve : parmi les entiers strictement positifs de la forme au + bv, on prend le plus petit, noté m. La division de a par m donne a = mq + r avec 0 ≤ r < m, et r = a - q(au + bv) est encore de la forme au' + bv' ; par minimalité de m, r = 0, donc m divise a. De même m divise b. Comme tout diviseur commun de a et b divise au + bv = m, on obtient m = d.",
                "Théorème de Bézout : deux entiers a et b sont premiers entre eux si et seulement s'il existe deux entiers relatifs u et v tels que au + bv = 1. Le sens direct découle de l'identité ci-dessus. Pour la réciproque, tout diviseur commun positif de a et b divise au + bv = 1, donc vaut 1. Par exemple, 2 × 8 - 1 × 15 = 1 prouve que 8 et 15 sont premiers entre eux.",
                "Conséquence : tout diviseur commun de a et b divise leur PGCD. Mais attention, une égalité au + bv = 6 ne prouve pas que le PGCD vaut 6 : elle prouve seulement que le PGCD divise 6. Seule la valeur 1 permet de conclure directement.",
              ],
              box: { label: "Théorème", text: "Théorème de Bézout : a et b sont premiers entre eux si et seulement s'il existe des entiers relatifs u et v tels que au + bv = 1. Les coefficients u et v ne sont pas uniques." },
            },
            {
              heading: "Remonter l'algorithme d'Euclide et inverser modulo n",
              paragraphs: [
                "Pour trouver u et v, on remonte l'algorithme d'Euclide en isolant chaque reste. Avec 1071 et 462 : 21 = 462 - 3 × 147 et 147 = 1071 - 2 × 462. On remplace : 21 = 462 - 3 × (1071 - 2 × 462) = 7 × 462 - 3 × 1071. On vérifie : 7 × 462 = 3234, 3 × 1071 = 3213, et 3234 - 3213 = 21.",
                "Inverse modulo n : si a et n sont premiers entre eux et si au + nv = 1, alors au ≡ 1 [n]. L'entier u est un inverse de a modulo n. Par exemple, pour 7 et 26 : 26 = 7 × 3 + 5, 7 = 5 × 1 + 2, 5 = 2 × 2 + 1. On remonte : 1 = 5 - 2 × 2 = 5 - 2 × (7 - 5) = 3 × 5 - 2 × 7 = 3 × (26 - 3 × 7) - 2 × 7 = 3 × 26 - 11 × 7. Donc 7 × (-11) ≡ 1 [26], et comme -11 ≡ 15 [26], l'inverse de 7 modulo 26 est 15 (7 × 15 = 105 = 4 × 26 + 1).",
                "L'inverse sert à résoudre une équation ax ≡ b [n] : on multiplie les deux membres par l'inverse u de a, ce qui donne x ≡ ub [n]. Cette multiplication est permise, et elle remplace la division interdite. Ainsi 7x ≡ 3 [26] équivaut à x ≡ 15 × 3 ≡ 45 ≡ 19 [26] ; vérification : 7 × 19 = 133 = 5 × 26 + 3.",
              ],
              box: { label: "À retenir", text: "Si au + nv = 1, alors au ≡ 1 [n] : u est l'inverse de a modulo n. Il existe si et seulement si PGCD(a ; n) = 1. Alors ax ≡ b [n] équivaut à x ≡ ub [n]." },
            },
          ],
          keyPoints: [
            "Si a = bq + r, alors PGCD(a ; b) = PGCD(b ; r) : c'est le moteur de l'algorithme d'Euclide.",
            "Le PGCD est le dernier reste non nul de l'algorithme d'Euclide.",
            "a et b sont premiers entre eux lorsque PGCD(a ; b) = 1.",
            "Bézout : PGCD(a ; b) = 1 si et seulement s'il existe u, v entiers avec au + bv = 1.",
            "On obtient u et v en remontant l'algorithme d'Euclide, puis on vérifie par le calcul.",
            "au + bv = d ne prouve pas que PGCD(a ; b) = d, seulement que le PGCD divise d (sauf si d = 1).",
            "Si au ≡ 1 [n], u est l'inverse de a modulo n et ax ≡ b [n] équivaut à x ≡ ub [n].",
          ],
          example: {
            statement: "Calculer PGCD(2026 ; 1105), puis déterminer deux entiers u et v tels que 2026u + 1105v = 1.",
            solution: [
              "Algorithme d'Euclide : 2026 = 1105 × 1 + 921 ; 1105 = 921 × 1 + 184 ; 921 = 184 × 5 + 1 ; 184 = 1 × 184 + 0.",
              "Le dernier reste non nul est 1 : PGCD(2026 ; 1105) = 1, les deux nombres sont premiers entre eux.",
              "On remonte : 1 = 921 - 5 × 184. Or 184 = 1105 - 921, donc 1 = 921 - 5 × (1105 - 921) = 6 × 921 - 5 × 1105.",
              "Or 921 = 2026 - 1105, donc 1 = 6 × (2026 - 1105) - 5 × 1105 = 6 × 2026 - 11 × 1105.",
              "Vérification : 6 × 2026 = 12 156 et 11 × 1105 = 12 155, la différence vaut bien 1.",
              "Conclusion : u = 6 et v = -11 conviennent (ce couple n'est pas le seul possible).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À l'aide de l'algorithme d'Euclide, calculer PGCD(756 ; 280). Les nombres 756 et 280 sont-ils premiers entre eux ?",
              hint: "Écrivez les divisions euclidiennes successives jusqu'à obtenir un reste nul, puis lisez le dernier reste non nul.",
              solution: [
                "756 = 280 × 2 + 196.",
                "280 = 196 × 1 + 84.",
                "196 = 84 × 2 + 28.",
                "84 = 28 × 3 + 0.",
                "Le dernier reste non nul est 28 : PGCD(756 ; 280) = 28. Vérification : 756 = 28 × 27 et 280 = 28 × 10.",
                "Le PGCD n'est pas égal à 1 : 756 et 280 ne sont pas premiers entre eux.",
              ],
            },
            {
              level: 2,
              statement: "1. À l'aide de l'algorithme d'Euclide, déterminer deux entiers u et v tels que 17u + 5v = 1. 2. En déduire l'inverse de 5 modulo 17. 3. Résoudre dans ℤ l'équation 5x ≡ 3 [17].",
              hint: "Remontez les divisions de 17 par 5, puis de 5 par le reste obtenu. Pour la question 3, multipliez les deux membres par l'inverse de 5.",
              solution: [
                "1. 17 = 5 × 3 + 2 ; 5 = 2 × 2 + 1 ; 2 = 1 × 2 + 0. Le PGCD est 1.",
                "On remonte : 1 = 5 - 2 × 2 = 5 - 2 × (17 - 3 × 5) = 7 × 5 - 2 × 17. Donc u = -2 et v = 7 : 17 × (-2) + 5 × 7 = -34 + 35 = 1.",
                "2. De 5 × 7 = 1 + 2 × 17, on tire 5 × 7 ≡ 1 [17] : l'inverse de 5 modulo 17 est 7.",
                "3. On multiplie les deux membres de 5x ≡ 3 [17] par 7 : 35x ≡ 21 [17], soit x ≡ 21 ≡ 4 [17] car 35 ≡ 1 [17]. Réciproquement, si x ≡ 4 [17], alors 5x ≡ 20 ≡ 3 [17].",
                "Les solutions sont les entiers x = 4 + 17k, k ∈ ℤ.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). Soit n un entier naturel non nul. 1. Démontrer que 2n + 1 et 3n + 2 sont premiers entre eux. 2. On note d = PGCD(n + 5 ; 2n - 1). Démontrer que d divise 11. 3. Démontrer que d = 11 si et seulement si n ≡ 6 [11]. 4. En déduire PGCD(n + 5 ; 2n - 1) pour n = 6, puis pour n = 2026.",
              hint: "1. Cherchez une combinaison à coefficients entiers de 2n + 1 et 3n + 2 qui ne dépend plus de n. 2. Même idée avec 2(n + 5) - (2n - 1). 3. Les seuls diviseurs positifs de 11 sont 1 et 11.",
              solution: [
                "1. 3(2n + 1) - 2(3n + 2) = 6n + 3 - 6n - 4 = -1, donc (2n + 1) × (-3) + (3n + 2) × 2 = 1. D'après le théorème de Bézout, 2n + 1 et 3n + 2 sont premiers entre eux.",
                "2. d divise n + 5 et 2n - 1, donc d divise la combinaison 2(n + 5) - (2n - 1) = 11.",
                "3. Comme 11 est premier, d = 1 ou d = 11. Si d = 11, alors 11 divise n + 5, donc n ≡ -5 ≡ 6 [11].",
                "Réciproquement, si n ≡ 6 [11], alors n + 5 ≡ 11 ≡ 0 [11] et 2n - 1 ≡ 12 - 1 ≡ 0 [11] : 11 est un diviseur commun, donc d ≥ 11, et comme d divise 11, d = 11.",
                "4. Pour n = 6 : n + 5 = 11 et 2n - 1 = 11, et l'on retrouve d = 11, conformément à 6 ≡ 6 [11].",
                "Pour n = 2026 : 2026 = 11 × 184 + 2, donc 2026 ≡ 2 [11], qui n'est pas congru à 6. Donc d = 1 : 2031 et 4051 sont premiers entre eux.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion ou calcul à ce qui lui correspond.",
            pairs: [
              { left: "PGCD(1071 ; 462)", right: "21" },
              { left: "Inverse de 7 modulo 26", right: "15" },
              { left: "Algorithme d'Euclide", right: "Remplacer (a ; b) par (b ; r) jusqu'à un reste nul" },
              { left: "Premiers entre eux", right: "Le PGCD vaut 1" },
              { left: "Théorème de Bézout", right: "PGCD(a ; b) = 1 si et seulement si au + bv = 1 a une solution entière" },
              { left: "Propriété clé du PGCD", right: "Si a = bq + r, alors PGCD(a ; b) = PGCD(b ; r)" },
            ],
          },
          quiz: [
            {
              q: "Que vaut PGCD(84 ; 36) ?",
              options: ["6", "12", "36", "4"],
              answer: 1,
              why: "84 = 36 × 2 + 12 et 36 = 12 × 3 + 0 : le dernier reste non nul est 12.",
            },
            {
              q: "On sait que 12 × (-2) + 5 × 5 = 1. Que peut-on en conclure ?",
              options: ["PGCD(12 ; 5) = 5", "5 n'a pas d'inverse modulo 12", "PGCD(12 ; 5) = 1", "-2 et 5 sont les seuls coefficients possibles"],
              answer: 2,
              why: "Une égalité au + bv = 1 prouve, par le théorème de Bézout, que a et b sont premiers entre eux. Elle montre aussi que 5 est l'inverse de 5 modulo 12.",
            },
            {
              q: "Quel est l'inverse de 3 modulo 7 ?",
              options: ["2", "4", "6", "5"],
              answer: 3,
              why: "3 × 5 = 15 = 2 × 7 + 1, donc 3 × 5 ≡ 1 [7].",
            },
            {
              q: "D'après le théorème de Bézout, deux entiers a et b sont premiers entre eux si et seulement si :",
              options: ["au + bv = 1 a une solution (u ; v) entière", "a et b sont deux nombres premiers distincts", "a et b n'ont aucun diviseur commun positif", "a + b est un nombre premier"],
              answer: 0,
              why: "C'est l'énoncé du théorème. Attention : a et b ont toujours 1 comme diviseur commun positif, et 8 et 15 sont premiers entre eux sans être premiers.",
            },
            {
              q: "On a trouvé 4u + 6v = 2 avec u = -1 et v = 1. Que peut-on affirmer ?",
              options: ["PGCD(4 ; 6) divise 2", "PGCD(4 ; 6) = 1", "4 et 6 sont premiers entre eux", "PGCD(4 ; 6) = 4"],
              answer: 0,
              why: "Le PGCD divise toute combinaison au + bv, donc il divise 2. Ici il vaut d'ailleurs 2, mais l'égalité seule ne permet pas de l'affirmer : il faut un autre argument (par exemple l'algorithme d'Euclide).",
            },
          ],
          trap: "Croire qu'une égalité au + bv = d prouve que d est le PGCD de a et b : elle prouve seulement que le PGCD divise d, et seule la valeur d = 1 permet de conclure.",
          method: "Après avoir remonté l'algorithme d'Euclide, vérifiez toujours l'égalité au + bv = 1 par un calcul direct : une erreur de signe dans la remontée se repère immédiatement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gauss-diophantiennes',
          title: 'Théorème de Gauss et équations diophantiennes',
          minutes: 35,
          objectives: [
            "Énoncer et démontrer le théorème de Gauss à partir du théorème de Bézout.",
            "Utiliser le corollaire : si a et b sont premiers entre eux et divisent n, alors ab divise n.",
            "Résoudre dans ℤ² une équation diophantienne ax + by = c, après avoir étudié l'existence de solutions.",
            "Rédiger la résolution complète : solution particulière, théorème de Gauss, vérification réciproque.",
          ],
          course: [
            {
              heading: "Le théorème de Gauss",
              paragraphs: [
                "Théorème de Gauss : soient a, b, c trois entiers non nuls. Si a divise bc et si a est premier avec b, alors a divise c. Démonstration : comme PGCD(a ; b) = 1, il existe des entiers u et v tels que au + bv = 1 (Bézout). En multipliant par c : c = acu + bcv. Or a divise acu, et a divise bcv puisque a divise bc. Donc a divise la somme, c'est-à-dire c.",
                "L'hypothèse « a premier avec b » est indispensable. Par exemple, 6 divise 4 × 3 = 12, mais 6 ne divise ni 4 ni 3 : ici 6 et 4 ne sont pas premiers entre eux. Le théorème permet en revanche de simplifier : si 7 divise 5k, comme 7 est premier avec 5, alors 7 divise k.",
                "Ce résultat porte le nom de Carl Friedrich Gauss, qui l'énonce dans ses Recherches arithmétiques (Disquisitiones arithmeticae, 1801). Il donne aussi la règle de simplification des congruences : si ka ≡ kb [n] et si k est premier avec n, alors n divise k(a - b), donc n divise a - b, c'est-à-dire a ≡ b [n].",
              ],
              box: { label: "Théorème", text: "Théorème de Gauss : si a divise bc et si PGCD(a ; b) = 1, alors a divise c." },
            },
            {
              heading: "Un corollaire utile",
              paragraphs: [
                "Si a et b sont premiers entre eux et divisent tous deux un entier n, alors ab divise n. Démonstration : n = ak avec k entier. Comme b divise ak et que b est premier avec a, le théorème de Gauss donne b | k, soit k = bk', et donc n = abk'.",
                "Ainsi un nombre divisible par 4 et par 9 est divisible par 36, et un nombre divisible par 3, 5 et 8 est divisible par 120 (on applique deux fois le corollaire). Sans l'hypothèse, la conclusion tombe : 12 est divisible par 4 et par 6, mais pas par 24.",
              ],
              box: { label: "Propriété", text: "Si a | n, b | n et PGCD(a ; b) = 1, alors ab | n. On l'utilise pour démontrer une divisibilité par 6 = 2 × 3, 12 = 3 × 4, 24 = 3 × 8, etc." },
            },
            {
              heading: "Équations ax + by = c : existence de solutions",
              paragraphs: [
                "Une équation diophantienne est une équation dont on cherche les solutions entières (du nom de Diophante d'Alexandrie, mathématicien grec de l'Antiquité). Pour l'équation ax + by = c d'inconnues x et y entières, on note d = PGCD(a ; b). Si un couple (x ; y) est solution, d divise ax + by, donc d divise c. Réciproquement, si c = dk, l'identité de Bézout au + bv = d donne a(uk) + b(vk) = c : il y a une solution.",
                "Par exemple, 12x + 18y = 7 n'a aucune solution entière, car PGCD(12 ; 18) = 6 ne divise pas 7 (et l'on voit d'ailleurs que le premier membre est toujours pair). En revanche, 12x + 21y = 9 a des solutions, car PGCD(12 ; 21) = 3 divise 9 ; on commence alors par tout diviser par 3 : 4x + 7y = 3, où 4 et 7 sont premiers entre eux.",
              ],
              box: { label: "Propriété", text: "L'équation ax + by = c admet des solutions entières si et seulement si PGCD(a ; b) divise c. On divise alors par ce PGCD pour se ramener à des coefficients premiers entre eux." },
            },
            {
              heading: "La méthode de résolution",
              paragraphs: [
                "Résolvons 3x + 5y = 1. Étape 1 : une solution particulière, trouvée à la main ou en remontant l'algorithme d'Euclide : (2 ; -1), car 6 - 5 = 1. Étape 2 : si (x ; y) est solution, on soustrait membre à membre 3x + 5y = 1 et 3 × 2 + 5 × (-1) = 1, ce qui donne 3(x - 2) = -5(y + 1).",
                "Étape 3 : 5 divise 3(x - 2) et 5 est premier avec 3, donc, d'après le théorème de Gauss, 5 divise x - 2 : x = 2 + 5k avec k entier. En reportant, 3 × 5k = -5(y + 1), d'où y + 1 = -3k et y = -1 - 3k.",
                "Étape 4 : la réciproque. Pour tout entier k, 3(2 + 5k) + 5(-1 - 3k) = 6 + 15k - 5 - 15k = 1. Les solutions sont donc exactement les couples (2 + 5k ; -1 - 3k), k ∈ ℤ. On remarque que x avance de 5 (le coefficient de y) et y recule de 3 (le coefficient de x) : c'est la structure générale des solutions.",
              ],
              box: { label: "Formule", text: "Si a et b sont premiers entre eux et si (x₀ ; y₀) est une solution de ax + by = c, les solutions sont les couples (x₀ + bk ; y₀ - ak), k ∈ ℤ. Cette formule se redémontre à chaque fois avec le théorème de Gauss." },
            },
          ],
          keyPoints: [
            "Gauss : si a | bc et PGCD(a ; b) = 1, alors a | c. La preuve utilise Bézout.",
            "Sans l'hypothèse de primalité relative, c'est faux : 6 | 4 × 3 mais 6 ne divise ni 4 ni 3.",
            "Si a | n, b | n et PGCD(a ; b) = 1, alors ab | n.",
            "ax + by = c a des solutions entières si et seulement si PGCD(a ; b) divise c.",
            "Méthode : diviser par le PGCD, trouver une solution particulière, soustraire, appliquer Gauss, puis vérifier la réciproque.",
            "Avec a, b premiers entre eux : solutions (x₀ + bk ; y₀ - ak), k ∈ ℤ.",
          ],
          example: {
            statement: "Résoudre dans ℤ² l'équation (E) : 12x + 21y = 9.",
            solution: [
              "PGCD(12 ; 21) = 3 et 3 divise 9 : l'équation a des solutions. En divisant par 3, (E) équivaut à 4x + 7y = 3, avec PGCD(4 ; 7) = 1.",
              "Solution particulière : 4 × (-1) + 7 × 1 = -4 + 7 = 3, donc (-1 ; 1) est solution.",
              "Si (x ; y) est solution, en soustrayant : 4(x + 1) + 7(y - 1) = 0, soit 4(x + 1) = -7(y - 1).",
              "7 divise 4(x + 1) et PGCD(7 ; 4) = 1, donc d'après le théorème de Gauss, 7 divise x + 1 : x = -1 + 7k, k ∈ ℤ.",
              "En reportant : 4 × 7k = -7(y - 1), donc y - 1 = -4k et y = 1 - 4k.",
              "Réciproque : 4(-1 + 7k) + 7(1 - 4k) = -4 + 28k + 7 - 28k = 3. Les solutions de (E) sont les couples (-1 + 7k ; 1 - 4k), k ∈ ℤ.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Un entier n est divisible par 8 et par 15. Démontrer qu'il est divisible par 120. 2. L'équation 14x + 21y = 5 admet-elle des solutions entières ? 3. Démontrer que si 9 divise 4m, avec m entier, alors 9 divise m.",
              hint: "Calculez à chaque fois un PGCD : PGCD(8 ; 15), PGCD(14 ; 21), PGCD(9 ; 4).",
              solution: [
                "1. PGCD(8 ; 15) = 1 (8 = 2³ et 15 = 3 × 5 n'ont aucun facteur commun). Comme 8 | n et 15 | n, le corollaire du théorème de Gauss donne 8 × 15 = 120 | n.",
                "2. PGCD(14 ; 21) = 7 et 7 ne divise pas 5. Or pour tous entiers x et y, 14x + 21y = 7(2x + 3y) est un multiple de 7. L'équation n'a donc aucune solution entière.",
                "3. 9 divise 4m et PGCD(9 ; 4) = 1, donc, d'après le théorème de Gauss, 9 divise m.",
              ],
            },
            {
              level: 2,
              statement: "On considère l'équation (E) : 13x - 8y = 1, d'inconnues entières x et y. 1. À l'aide de l'algorithme d'Euclide, déterminer une solution particulière de (E). 2. Résoudre (E) dans ℤ². 3. Donner la solution (x ; y) de (E) telle que 0 < x < 8.",
              hint: "Appliquez l'algorithme d'Euclide à 13 et 8, remontez-le pour écrire 1 = 13u + 8v, puis adaptez les signes à l'équation 13x - 8y = 1.",
              solution: [
                "1. 13 = 8 × 1 + 5 ; 8 = 5 × 1 + 3 ; 5 = 3 × 1 + 2 ; 3 = 2 × 1 + 1. On remonte : 1 = 3 - 2 = 3 - (5 - 3) = 2 × 3 - 5 = 2 × (8 - 5) - 5 = 2 × 8 - 3 × 5 = 2 × 8 - 3 × (13 - 8) = 5 × 8 - 3 × 13.",
                "Donc 13 × (-3) - 8 × (-5) = -39 + 40 = 1 : le couple (-3 ; -5) est une solution particulière.",
                "2. Si (x ; y) est solution, en soustrayant : 13(x + 3) - 8(y + 5) = 0, soit 13(x + 3) = 8(y + 5). Alors 8 divise 13(x + 3) et PGCD(8 ; 13) = 1, donc 8 divise x + 3 (Gauss) : x = -3 + 8k, k ∈ ℤ.",
                "En reportant : 13 × 8k = 8(y + 5), d'où y = -5 + 13k.",
                "Réciproque : 13(-3 + 8k) - 8(-5 + 13k) = -39 + 104k + 40 - 104k = 1. Les solutions sont les couples (-3 + 8k ; -5 + 13k), k ∈ ℤ.",
                "3. 0 < -3 + 8k < 8 impose k = 1 : x = 5 et y = 8. Vérification : 13 × 5 - 8 × 8 = 65 - 64 = 1.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). Un collectionneur possède un nombre N de pièces (données fictives). S'il les range par piles de 7, il en reste 2 ; s'il les range par piles de 9, il en reste 4. 1. Justifier qu'il existe des entiers x et y tels que N = 7x + 2 = 9y + 4, et en déduire que (x ; y) est solution de (E) : 7x - 9y = 2. 2. Vérifier que (8 ; 6) est solution de (E), puis résoudre (E) dans ℤ². 3. En déduire que N ≡ 58 [63]. 4. Sachant que le collectionneur possède entre 300 et 350 pièces, déterminer N.",
              hint: "1. Traduisez chaque rangement par une division euclidienne. 2. Soustrayez les deux égalités 7x - 9y = 2 et 7 × 8 - 9 × 6 = 2, puis appliquez le théorème de Gauss. 3. Remplacez x dans N = 7x + 2.",
              solution: [
                "1. Le reste de N dans la division par 7 est 2 : N = 7x + 2 avec x entier. De même N = 9y + 4 avec y entier. Donc 7x + 2 = 9y + 4, soit 7x - 9y = 2 : (x ; y) est solution de (E).",
                "2. 7 × 8 - 9 × 6 = 56 - 54 = 2 : (8 ; 6) est solution. Si (x ; y) est solution, en soustrayant : 7(x - 8) = 9(y - 6). Alors 9 divise 7(x - 8) et PGCD(9 ; 7) = 1, donc 9 divise x - 8 (Gauss) : x = 8 + 9k, k ∈ ℤ.",
                "En reportant : 7 × 9k = 9(y - 6), d'où y = 6 + 7k. Réciproque : 7(8 + 9k) - 9(6 + 7k) = 56 + 63k - 54 - 63k = 2. Les solutions sont les couples (8 + 9k ; 6 + 7k), k ∈ ℤ.",
                "3. N = 7x + 2 = 7(8 + 9k) + 2 = 58 + 63k, donc N ≡ 58 [63]. Vérification : 58 = 7 × 8 + 2 et 58 = 9 × 6 + 4.",
                "4. On cherche k tel que 300 ≤ 58 + 63k ≤ 350, soit 242 ≤ 63k ≤ 292. Comme 63 × 3 = 189 et 63 × 4 = 252, seul k = 4 convient : N = 58 + 252 = 310.",
                "Vérification : 310 = 7 × 44 + 2 et 310 = 9 × 34 + 4. Le collectionneur possède 310 pièces.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution d'une équation ax + by = c dans ℤ².",
            items: [
              "Calculer d = PGCD(a ; b) et vérifier que d divise c (sinon, il n'y a aucune solution).",
              "Diviser l'équation par d pour obtenir des coefficients premiers entre eux.",
              "Trouver une solution particulière (x₀ ; y₀), par exemple en remontant l'algorithme d'Euclide.",
              "Soustraire membre à membre pour obtenir une égalité de la forme a'(x - x₀) = -b'(y - y₀).",
              "Appliquer le théorème de Gauss pour exprimer x en fonction d'un entier k.",
              "Reporter pour obtenir y, puis vérifier que tous les couples trouvés sont bien solutions.",
            ],
          },
          quiz: [
            {
              q: "On sait que a divise bc. Quelle condition permet d'affirmer que a divise c ?",
              options: ["a et c sont premiers entre eux", "a et b sont premiers entre eux", "b divise c", "a est supérieur à b"],
              answer: 1,
              why: "C'est l'hypothèse du théorème de Gauss : a premier avec b. Par exemple 6 divise 4 × 3, mais 6 n'est premier ni avec 4 ni avec 3, et ne divise aucun des deux.",
            },
            {
              q: "Combien de solutions entières l'équation 6x + 9y = 4 admet-elle ?",
              options: ["une infinité de solutions", "une seule solution", "aucune solution", "deux solutions"],
              answer: 2,
              why: "PGCD(6 ; 9) = 3 ne divise pas 4 : 6x + 9y est toujours un multiple de 3.",
            },
            {
              q: "Quelles sont les solutions entières de 3x + 5y = 0 ?",
              options: ["(5k ; -3k), k ∈ ℤ", "(3k ; -5k), k ∈ ℤ", "(5k ; 3k), k ∈ ℤ", "(0 ; 0) seulement"],
              answer: 0,
              why: "3x = -5y, donc 5 divise 3x et, par Gauss, 5 divise x : x = 5k, puis y = -3k.",
            },
            {
              q: "Un entier est divisible par 4 et par 6. Par quel nombre est-il forcément divisible ?",
              options: ["24", "48", "10", "12"],
              answer: 3,
              why: "4 et 6 ne sont pas premiers entre eux, on ne peut pas conclure à 24 (12 est un contre-exemple). Comme 4 et 3 sont premiers entre eux et divisent tous deux l'entier, il est divisible par 12.",
            },
            {
              q: "Les solutions de 7x - 4y = 1 sont les couples (3 + 4k ; 5 + 7k). Lequel est une solution ?",
              options: ["(4 ; 7)", "(3 ; 4)", "(7 ; 12)", "(11 ; 20)"],
              answer: 2,
              why: "Pour k = 1, on obtient (7 ; 12), et 7 × 7 - 4 × 12 = 49 - 48 = 1.",
            },
          ],
          trap: "Appliquer le théorème de Gauss sans vérifier que les deux nombres sont premiers entre eux, ou oublier la vérification réciproque qui garantit que tous les couples trouvés sont solutions.",
          method: "Contrôlez vos solutions générales avec deux valeurs de k (par exemple k = 0 et k = 1) en les remplaçant dans l'équation de départ : une erreur de signe apparaît aussitôt.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nombres-premiers',
          title: 'Nombres premiers et décomposition',
          minutes: 30,
          objectives: [
            "Déterminer si un entier est premier en testant ses diviseurs premiers jusqu'à sa racine carrée.",
            "Démontrer que l'ensemble des nombres premiers est infini.",
            "Décomposer un entier en produit de facteurs premiers et utiliser cette décomposition (diviseurs, PGCD, carrés).",
            "Utiliser le lemme d'Euclide : si un nombre premier divise un produit, il divise l'un des facteurs.",
          ],
          course: [
            {
              heading: "Définition et test de primalité",
              paragraphs: [
                "Un nombre premier est un entier naturel qui admet exactement deux diviseurs positifs distincts : 1 et lui-même. Ainsi 1 n'est pas premier (il n'a qu'un diviseur) et 2 est le seul nombre premier pair. Les nombres premiers inférieurs à 50 sont : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47. Le crible d'Ératosthène permet de les obtenir en barrant successivement les multiples de 2, 3, 5, 7...",
                "Propriété : tout entier n ≥ 2 admet au moins un diviseur premier. En effet, le plus petit diviseur d de n tel que d ≥ 2 est premier, car un diviseur de d strictement compris entre 1 et d serait un diviseur de n plus petit. De plus, si n n'est pas premier, son plus petit diviseur premier p vérifie p² ≤ n : en écrivant n = pm, on a m ≥ p, donc n ≥ p².",
                "D'où le test : si aucun nombre premier p tel que p² ≤ n ne divise n, alors n est premier. Exemple avec 221 : √221 ≈ 14,9, on teste 2, 3, 5, 7, 11 et 13, et 221 = 13 × 17, donc 221 n'est pas premier. Avec 223 : on teste les mêmes nombres, aucun ne divise 223 (les restes sont 1, 1, 3, 6, 3, 2), donc 223 est premier.",
              ],
              box: { label: "Propriété", text: "Si un entier n ≥ 2 n'est divisible par aucun nombre premier p tel que p² ≤ n, alors n est premier. Il suffit donc de tester les nombres premiers inférieurs ou égaux à √n." },
            },
            {
              heading: "Il y a une infinité de nombres premiers",
              paragraphs: [
                "Démonstration attribuée à Euclide. Supposons qu'il n'existe qu'un nombre fini de nombres premiers, notés p₁, p₂, ..., pₖ. On pose N = p₁ × p₂ × ... × pₖ + 1. Comme N ≥ 2, il admet un diviseur premier p, qui est forcément l'un des pᵢ. Alors p divise le produit p₁ × ... × pₖ et divise N, donc il divise leur différence, qui vaut 1. C'est impossible, car p ≥ 2. L'hypothèse est absurde : il existe une infinité de nombres premiers.",
                "Attention à une erreur fréquente : la preuve ne dit pas que N est lui-même premier. Par exemple 2 × 3 × 5 × 7 × 11 × 13 + 1 = 30 031 = 59 × 509 n'est pas premier ; mais ses facteurs premiers, 59 et 509, ne figurent pas dans la liste de départ, ce qui suffit au raisonnement.",
              ],
              box: { label: "Théorème", text: "L'ensemble des nombres premiers est infini. La preuve, par l'absurde, utilise le nombre N = p₁ × p₂ × ... × pₖ + 1, qui n'est divisible par aucun des pᵢ." },
            },
            {
              heading: "Le lemme d'Euclide",
              paragraphs: [
                "Si p est premier et a un entier, alors soit p divise a, soit p est premier avec a : les seuls diviseurs positifs de p sont 1 et p, donc PGCD(p ; a) vaut 1 ou p. On en déduit, avec le théorème de Gauss, le lemme d'Euclide : si un nombre premier p divise un produit ab, alors p divise a ou p divise b. En effet, si p ne divise pas a, il est premier avec a, et il divise donc b.",
                "Ce lemme est propre aux nombres premiers : 6 divise 2 × 3 sans diviser 2 ni 3. Il s'étend à un produit de plusieurs facteurs : si p premier divise a₁ × a₂ × ... × aₖ, alors p divise l'un des aᵢ. En particulier, si p divise aⁿ, alors p divise a.",
              ],
              box: { label: "Propriété", text: "Lemme d'Euclide : si p est premier et divise ab, alors p divise a ou p divise b. C'est faux si p n'est pas premier." },
            },
            {
              heading: "Décomposition en produit de facteurs premiers",
              paragraphs: [
                "Théorème fondamental de l'arithmétique : tout entier n ≥ 2 s'écrit comme produit de nombres premiers, n = p₁^α₁ × p₂^α₂ × ... × pₖ^αₖ, avec des nombres premiers p₁ < p₂ < ... < pₖ et des exposants entiers αᵢ ≥ 1, et cette écriture est unique. L'existence s'obtient par récurrence forte (on extrait un diviseur premier) ; l'unicité découle du lemme d'Euclide. Exemple : 360 = 2³ × 3² × 5.",
                "Les diviseurs positifs de n sont exactement les entiers p₁^β₁ × ... × pₖ^βₖ avec 0 ≤ βᵢ ≤ αᵢ. Leur nombre est donc (α₁ + 1)(α₂ + 1)...(αₖ + 1). Pour 360 = 2³ × 3² × 5¹, on obtient 4 × 3 × 2 = 24 diviseurs.",
                "La décomposition donne aussi le PGCD : on prend les facteurs premiers communs, chacun avec le plus petit exposant. Avec 360 = 2³ × 3² × 5 et 756 = 2² × 3³ × 7, on obtient PGCD(360 ; 756) = 2² × 3² = 36. Enfin, un entier est un carré parfait si et seulement si tous les exposants de sa décomposition sont pairs.",
              ],
              box: { label: "Formule", text: "Si n = p₁^α₁ × ... × pₖ^αₖ, alors n a (α₁ + 1) × ... × (αₖ + 1) diviseurs positifs. PGCD : facteurs communs avec le plus petit exposant. Carré parfait : tous les exposants pairs." },
            },
          ],
          keyPoints: [
            "Premier : exactement deux diviseurs positifs, 1 et lui-même. 1 n'est pas premier, 2 est le seul premier pair.",
            "Test : il suffit de tester les diviseurs premiers p tels que p² ≤ n.",
            "Il existe une infinité de nombres premiers (preuve par l'absurde avec p₁ × ... × pₖ + 1).",
            "Lemme d'Euclide : p premier et p | ab entraînent p | a ou p | b.",
            "Décomposition unique : n = p₁^α₁ × ... × pₖ^αₖ ; nombre de diviseurs : (α₁ + 1)...(αₖ + 1).",
            "PGCD : facteurs premiers communs avec le plus petit exposant ; carré parfait : exposants tous pairs.",
          ],
          example: {
            statement: "1. Décomposer 2520 en produit de facteurs premiers. 2. Combien a-t-il de diviseurs positifs ? 3. Déterminer le plus petit entier naturel non nul k tel que 2520k soit un carré parfait.",
            solution: [
              "1. 2520 = 2 × 1260 = 2² × 630 = 2³ × 315 = 2³ × 3 × 105 = 2³ × 3² × 35 = 2³ × 3² × 5 × 7.",
              "Vérification : 8 × 9 = 72 et 72 × 35 = 2520.",
              "2. Les exposants sont 3, 2, 1 et 1 : le nombre de diviseurs positifs est (3 + 1)(2 + 1)(1 + 1)(1 + 1) = 4 × 3 × 2 × 2 = 48.",
              "3. Pour obtenir un carré parfait, tous les exposants doivent devenir pairs : il faut au moins un facteur 2 de plus (2³ devient 2⁴), un facteur 5 et un facteur 7. Le plus petit k est donc 2 × 5 × 7 = 70.",
              "Alors 2520 × 70 = 2⁴ × 3² × 5² × 7² = (2² × 3 × 5 × 7)² = 420² = 176 400. Le plus petit entier cherché est k = 70.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Les nombres 437 et 439 sont-ils premiers ? Justifier.",
              hint: "Calculez une valeur approchée de √437 et de √439, puis testez la divisibilité par les nombres premiers inférieurs à cette racine.",
              solution: [
                "√437 ≈ 20,9 et √439 ≈ 20,95 : il suffit de tester les nombres premiers 2, 3, 5, 7, 11, 13, 17 et 19.",
                "Pour 437 : 437 n'est divisible ni par 2, ni par 3 (somme des chiffres 14), ni par 5, ni par 7 (437 = 7 × 62 + 3), ni par 11 (437 = 11 × 39 + 8), ni par 13 (437 = 13 × 33 + 8), ni par 17 (437 = 17 × 25 + 12). En revanche 437 = 19 × 23. Donc 437 n'est pas premier.",
                "Pour 439 : il n'est pas pair ; la somme de ses chiffres, 16, n'est pas multiple de 3 ; il ne finit ni par 0 ni par 5 ; 439 = 7 × 62 + 5 ; 439 = 11 × 39 + 10 ; 439 = 13 × 33 + 10 ; 439 = 17 × 25 + 14 ; 439 = 19 × 23 + 2.",
                "Aucun nombre premier inférieur ou égal à √439 ne divise 439 : 439 est premier.",
              ],
            },
            {
              level: 2,
              statement: "1. Décomposer 1386 et 1716 en produits de facteurs premiers. 2. En déduire PGCD(1386 ; 1716). 3. Combien 1386 a-t-il de diviseurs positifs ? 4. Écrire la fraction 1386/1716 sous forme irréductible.",
              hint: "Divisez par les nombres premiers dans l'ordre (2, 3, 5, 7, 11, 13...) tant que c'est possible. Pour le PGCD, gardez les facteurs communs avec le plus petit exposant.",
              solution: [
                "1. 1386 = 2 × 693 = 2 × 3 × 231 = 2 × 3² × 77 = 2 × 3² × 7 × 11.",
                "1716 = 2 × 858 = 2² × 429 = 2² × 3 × 143 = 2² × 3 × 11 × 13.",
                "2. Facteurs communs : 2 (exposants 1 et 2), 3 (exposants 2 et 1), 11 (exposants 1 et 1). PGCD(1386 ; 1716) = 2 × 3 × 11 = 66.",
                "3. 1386 = 2¹ × 3² × 7¹ × 11¹ a (1 + 1)(2 + 1)(1 + 1)(1 + 1) = 2 × 3 × 2 × 2 = 24 diviseurs positifs.",
                "4. 1386 = 66 × 21 et 1716 = 66 × 26, donc 1386/1716 = 21/26, fraction irréductible puisque 21 = 3 × 7 et 26 = 2 × 13 n'ont aucun facteur premier commun.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). Partie A. Soit p un nombre premier tel que p ≥ 5. 1. Démontrer que p² - 1 est divisible par 8. 2. Démontrer que p² - 1 est divisible par 3. 3. En déduire que 24 divise p² - 1. Partie B. Pour n entier, n ≥ 2, on note Mₙ = 2ⁿ - 1. 4. Soient a et b deux entiers naturels non nuls. Démontrer que 2ᵃ ≡ 1 [2ᵃ - 1], puis que 2ᵃ - 1 divise 2ᵃᵇ - 1. 5. En déduire que si Mₙ est premier, alors n est premier. 6. Calculer M₁₁ et vérifier qu'il est divisible par 23. Que peut-on en conclure sur la réciproque de la question 5 ?",
              hint: "1. p est impair : p² - 1 = (p - 1)(p + 1) est le produit de deux entiers pairs consécutifs. 2. Étudiez p modulo 3. 4. Élevez la congruence à la puissance b. 5. Raisonnez par contraposée en écrivant n = ab.",
              solution: [
                "1. p ≥ 5 est premier, donc impair. p² - 1 = (p - 1)(p + 1) : p - 1 et p + 1 sont deux entiers pairs consécutifs, donc l'un d'eux est multiple de 4. Leur produit est donc divisible par 2 × 4 = 8.",
                "2. p est premier et p ≠ 3, donc 3 ne divise pas p : p ≡ 1 ou p ≡ 2 [3]. Dans les deux cas p² ≡ 1 [3] (car 2² = 4 ≡ 1), donc 3 divise p² - 1.",
                "3. 3 et 8 divisent p² - 1 et PGCD(3 ; 8) = 1, donc 24 divise p² - 1 (corollaire du théorème de Gauss). Vérification : 5² - 1 = 24, 7² - 1 = 48, 11² - 1 = 120.",
                "4. 2ᵃ - (2ᵃ - 1) = 1, donc 2ᵃ ≡ 1 [2ᵃ - 1]. En élevant à la puissance b : 2ᵃᵇ = (2ᵃ)ᵇ ≡ 1ᵇ ≡ 1 [2ᵃ - 1], donc 2ᵃ - 1 divise 2ᵃᵇ - 1.",
                "5. Contraposée : si n n'est pas premier, n = ab avec 1 < a < n et 1 < b < n. Alors 2ᵃ - 1 divise Mₙ et 1 < 2ᵃ - 1 < 2ⁿ - 1 (car 2 ≤ a < n) : Mₙ a un diviseur autre que 1 et lui-même, il n'est pas premier. Donc si Mₙ est premier, n est premier.",
                "6. M₁₁ = 2¹¹ - 1 = 2047 = 23 × 89. Ainsi 11 est premier, mais M₁₁ ne l'est pas : la réciproque de la question 5 est fausse.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les nombres premiers.",
            statements: [
              { text: "1 est un nombre premier.", true: false, why: "Un nombre premier a exactement deux diviseurs positifs ; 1 n'en a qu'un." },
              { text: "2 est le seul nombre premier pair.", true: true, why: "Tout autre nombre pair est divisible par 2, qui est alors un troisième diviseur." },
              { text: "Pour savoir si 221 est premier, il suffit de tester les nombres premiers jusqu'à 13.", true: true, why: "√221 ≈ 14,9 : on teste 2, 3, 5, 7, 11 et 13 (et 13 divise 221 = 13 × 17)." },
              { text: "Si 6 divise ab, alors 6 divise a ou 6 divise b.", true: false, why: "6 divise 2 × 3 sans diviser 2 ni 3. Le lemme d'Euclide ne vaut que pour un nombre premier." },
              { text: "Le produit des k premiers nombres premiers, augmenté de 1, est toujours premier.", true: false, why: "2 × 3 × 5 × 7 × 11 × 13 + 1 = 30 031 = 59 × 509. La preuve d'Euclide n'affirme pas que ce nombre est premier." },
              { text: "360 = 2³ × 3² × 5 a 24 diviseurs positifs.", true: true, why: "(3 + 1)(2 + 1)(1 + 1) = 24." },
              { text: "Un entier dont la décomposition est 2⁴ × 3² × 7² est un carré parfait.", true: true, why: "Tous les exposants sont pairs : c'est le carré de 2² × 3 × 7 = 84." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la décomposition en facteurs premiers de 84 ?",
              options: ["2 × 42", "2² × 3 × 7", "4 × 21", "2 × 3² × 7"],
              answer: 1,
              why: "84 = 2 × 42 = 2² × 21 = 2² × 3 × 7. Les écritures 2 × 42 et 4 × 21 contiennent des facteurs non premiers.",
            },
            {
              q: "Combien 144 = 2⁴ × 3² a-t-il de diviseurs positifs ?",
              options: ["8", "6", "15", "12"],
              answer: 2,
              why: "(4 + 1)(2 + 1) = 15.",
            },
            {
              q: "Pour décider si 391 est premier, quels nombres premiers suffit-il de tester ?",
              options: ["ceux jusqu'à 19", "ceux jusqu'à 9", "ceux jusqu'à 195", "ceux inférieurs à 391"],
              answer: 0,
              why: "√391 ≈ 19,8 : il suffit de tester les premiers inférieurs ou égaux à 19. On trouve d'ailleurs 391 = 17 × 23.",
            },
            {
              q: "Que vaut PGCD(2³ × 3 × 5² ; 2 × 3³ × 7) ?",
              options: ["42", "2", "1350", "6"],
              answer: 3,
              why: "Facteurs communs : 2 et 3, chacun avec le plus petit exposant, ici 1 : PGCD = 2 × 3 = 6.",
            },
            {
              q: "Sur quel nombre repose la démonstration d'Euclide de l'infinité des nombres premiers ?",
              options: ["la somme p₁ + p₂ + ... + pₖ", "le carré du plus grand pₖ", "le produit des pᵢ plus 1", "le nombre 2ᵏ - 1"],
              answer: 2,
              why: "N = p₁ × ... × pₖ + 1 a un diviseur premier qui ne peut être aucun des pᵢ, sinon il diviserait 1.",
            },
          ],
          trap: "Confondre « nombre premier » et « nombres premiers entre eux » (8 et 15 sont premiers entre eux sans être premiers), ou croire que p₁ × ... × pₖ + 1 est toujours premier.",
          method: "Pour décomposer un nombre, divisez par 2, 3, 5, 7, 11... dans l'ordre et notez chaque étape sur une ligne ; vérifiez à la fin en recalculant le produit des facteurs.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'petit-theoreme-fermat',
          title: 'Le petit théorème de Fermat et la cryptographie',
          minutes: 35,
          objectives: [
            "Énoncer et démontrer le petit théorème de Fermat.",
            "Utiliser le petit théorème de Fermat pour déterminer le reste d'une puissance ou prouver qu'un entier n'est pas premier.",
            "Chiffrer et déchiffrer un message avec un chiffrement affine, en utilisant l'inverse modulo 26.",
            "Expliquer le principe du chiffrement RSA et le faire fonctionner sur de petits nombres.",
          ],
          course: [
            {
              heading: "L'énoncé",
              paragraphs: [
                "Petit théorème de Fermat : si p est un nombre premier et a un entier non divisible par p, alors aᵖ⁻¹ ≡ 1 [p]. Forme équivalente, valable pour tout entier a : aᵖ ≡ a [p]. En effet, si p ne divise pas a, on multiplie la première congruence par a ; si p divise a, les deux membres sont congrus à 0.",
                "Exemples : avec p = 7 et a = 3, 3⁶ = 729 = 7 × 104 + 1, donc 3⁶ ≡ 1 [7]. Avec p = 5 et a = 2, 2⁴ = 16 ≡ 1 [5]. Le résultat a été énoncé par Pierre de Fermat en 1640, dans une lettre, sans démonstration ; Leonhard Euler en a publié une preuve au siècle suivant.",
              ],
              box: { label: "Théorème", text: "Petit théorème de Fermat : si p est premier et ne divise pas a, alors aᵖ⁻¹ ≡ 1 [p]. Pour tout entier a, aᵖ ≡ a [p]." },
            },
            {
              heading: "Une démonstration",
              paragraphs: [
                "Soit p premier et a non divisible par p. Considérons les p - 1 entiers a, 2a, 3a, ..., (p - 1)a. Aucun n'est divisible par p : p ne divise ni a ni k (pour 1 ≤ k ≤ p - 1), donc, par le lemme d'Euclide, il ne divise pas ka. De plus, leurs restes modulo p sont deux à deux distincts : si ia ≡ ja [p], alors p divise (i - j)a, donc p divise i - j, et comme |i - j| < p, on a i = j.",
                "Les restes de a, 2a, ..., (p - 1)a sont donc p - 1 nombres distincts de {1 ; 2 ; ... ; p - 1} : ce sont exactement 1, 2, ..., p - 1, dans un autre ordre. En multipliant ces congruences, on obtient a × 2a × ... × (p - 1)a ≡ 1 × 2 × ... × (p - 1) [p], soit aᵖ⁻¹ × (p - 1)! ≡ (p - 1)! [p].",
                "Enfin, (p - 1)! est premier avec p (aucun de ses facteurs n'est divisible par p). Comme p divise (p - 1)! × (aᵖ⁻¹ - 1), le théorème de Gauss donne : p divise aᵖ⁻¹ - 1, c'est-à-dire aᵖ⁻¹ ≡ 1 [p].",
              ],
            },
            {
              heading: "Applications : restes et tests de primalité",
              paragraphs: [
                "Calcul de reste : cherchons le reste de 2¹⁰⁰ dans la division par 13. Comme 13 est premier et ne divise pas 2, 2¹² ≡ 1 [13]. On écrit 100 = 12 × 8 + 4, d'où 2¹⁰⁰ = (2¹²)⁸ × 2⁴ ≡ 16 ≡ 3 [13]. L'exposant se réduit modulo p - 1, et non modulo p.",
                "Test de non-primalité : si l'on trouve un entier a, premier avec n, tel que aⁿ⁻¹ n'est pas congru à 1 modulo n, alors n n'est pas premier. Par exemple 2⁴ = 16 ≡ 1 [15], donc 2¹⁴ = (2⁴)³ × 2² ≡ 4 [15] : 15 n'est pas premier, ce que l'on savait, mais la méthode fonctionne sur des nombres de plusieurs centaines de chiffres sans connaître leurs diviseurs.",
                "La réciproque est fausse : 341 = 11 × 31 n'est pas premier, et pourtant 2³⁴⁰ ≡ 1 [341]. On dit que 341 est pseudo-premier en base 2. Le théorème permet donc de prouver qu'un nombre est composé, jamais à lui seul qu'il est premier. Il donne aussi un inverse modulo p : si p ne divise pas a, a × aᵖ⁻² ≡ 1 [p].",
              ],
              box: { label: "Méthode", text: "Reste de aᵏ modulo p premier (p ne divisant pas a) : écrire k = (p - 1)q + r avec 0 ≤ r < p - 1 ; alors aᵏ ≡ aʳ [p]." },
            },
            {
              heading: "La cryptographie : du chiffrement affine à RSA",
              paragraphs: [
                "Chiffrement affine : on numérote les lettres de A = 0 à Z = 25, et l'on remplace la lettre x par la lettre y telle que y ≡ ax + b [26]. Pour pouvoir déchiffrer, a doit être premier avec 26 : si a' est l'inverse de a modulo 26, alors x ≡ a'(y - b) [26]. Avec a = 1, on retrouve le chiffre de César (simple décalage). Ces chiffrements sont faciles à casser, car une même lettre est toujours codée de la même façon : une analyse des fréquences suffit.",
                "Le chiffrement RSA (proposé en 1977 par Rivest, Shamir et Adleman) est à clé publique. On choisit deux grands nombres premiers p et q, on calcule n = pq et φ = (p - 1)(q - 1), puis un entier e premier avec φ et l'inverse d de e modulo φ. La clé publique est (n ; e), la clé privée est d. On chiffre un message m (entier, 0 ≤ m < n) par c ≡ mᵉ [n] et l'on déchiffre par m ≡ cᵈ [n].",
                "Exemple avec de petits nombres : p = 5, q = 11, n = 55, φ = 40, e = 3 et d = 27, car 3 × 27 = 81 = 2 × 40 + 1. Le message m = 9 devient c ≡ 9³ = 729 ≡ 14 [55], et l'on vérifie que 14²⁷ ≡ 9 [55]. Le déchiffrement fonctionne grâce au petit théorème de Fermat appliqué modulo p et modulo q. La sécurité repose sur la difficulté de retrouver p et q à partir de n quand ces nombres ont des centaines de chiffres.",
              ],
              box: { label: "À retenir", text: "Affine : y ≡ ax + b [26], avec PGCD(a ; 26) = 1 pour pouvoir déchiffrer. RSA : n = pq, e premier avec (p - 1)(q - 1), d inverse de e ; chiffrer c ≡ mᵉ [n], déchiffrer m ≡ cᵈ [n]." },
            },
          ],
          keyPoints: [
            "Fermat : p premier, p ne divise pas a, alors aᵖ⁻¹ ≡ 1 [p] ; pour tout a, aᵖ ≡ a [p].",
            "Pour un reste de aᵏ modulo p, on réduit l'exposant k modulo p - 1.",
            "Si aⁿ⁻¹ n'est pas congru à 1 modulo n (a premier avec n), n n'est pas premier ; la réciproque est fausse (341).",
            "Le théorème exige un module premier : 2⁸ ≡ 4 [9], et non 1.",
            "Chiffrement affine : y ≡ ax + b [26] ; déchiffrement avec l'inverse de a modulo 26.",
            "RSA : clé publique (n ; e), clé privée d, inverse de e modulo (p - 1)(q - 1).",
          ],
          example: {
            statement: "Déterminer le reste de la division euclidienne de 3²⁰²⁶ par 11.",
            solution: [
              "11 est premier et ne divise pas 3. D'après le petit théorème de Fermat, 3¹⁰ ≡ 1 [11].",
              "On divise l'exposant par 10 : 2026 = 10 × 202 + 6.",
              "Donc 3²⁰²⁶ = (3¹⁰)²⁰² × 3⁶ ≡ 1²⁰² × 3⁶ ≡ 3⁶ [11].",
              "3⁶ = 729 = 11 × 66 + 3, donc 3⁶ ≡ 3 [11].",
              "Contrôle : 3⁵ = 243 = 11 × 22 + 1, donc 3⁵ ≡ 1 [11] et 3⁶ ≡ 3 [11], ce qui confirme le calcul.",
              "Le reste de la division de 3²⁰²⁶ par 11 est 3.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À l'aide du petit théorème de Fermat, déterminer le reste de la division euclidienne de 2²⁰²⁶ par 17.",
              hint: "17 est premier : réduisez l'exposant 2026 modulo 16.",
              solution: [
                "17 est premier et ne divise pas 2, donc 2¹⁶ ≡ 1 [17].",
                "2026 = 16 × 126 + 10, donc 2²⁰²⁶ = (2¹⁶)¹²⁶ × 2¹⁰ ≡ 2¹⁰ [17].",
                "2¹⁰ = 1024 = 17 × 60 + 4, donc 2¹⁰ ≡ 4 [17].",
                "Contrôle : 2⁴ = 16 ≡ -1 [17], donc 2⁸ ≡ 1 [17] ; 2026 = 8 × 253 + 2 et 2²⁰²⁶ ≡ 2² = 4 [17].",
                "Le reste est 4.",
              ],
            },
            {
              level: 2,
              statement: "On utilise le chiffrement affine y ≡ 5x + 8 [26], les lettres étant numérotées de A = 0 à Z = 25. 1. Chiffrer le mot OUI. 2. Vérifier que 21 est l'inverse de 5 modulo 26. 3. En déduire la formule de déchiffrement, puis déchiffrer la lettre W.",
              hint: "O = 14, U = 20, I = 8. Pour le déchiffrement, isolez x en multipliant y - 8 ≡ 5x [26] par l'inverse de 5.",
              solution: [
                "1. O = 14 : 5 × 14 + 8 = 78 = 3 × 26 + 0, donc y = 0, soit A. U = 20 : 5 × 20 + 8 = 108 = 4 × 26 + 4, donc y = 4, soit E. I = 8 : 5 × 8 + 8 = 48 = 26 + 22, donc y = 22, soit W. Le mot OUI devient AEW.",
                "2. 5 × 21 = 105 = 4 × 26 + 1, donc 5 × 21 ≡ 1 [26] : 21 est l'inverse de 5 modulo 26.",
                "3. y ≡ 5x + 8 [26] équivaut à y - 8 ≡ 5x [26] ; en multipliant par 21 : x ≡ 21(y - 8) [26] (on peut remonter, puisque 5 × 21 ≡ 1).",
                "Pour W, y = 22 : x ≡ 21 × 14 = 294 = 11 × 26 + 8, donc x = 8, soit I. On retrouve bien la dernière lettre de OUI.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). On met en place un chiffrement RSA avec p = 5 et q = 11. 1. Calculer n = pq et φ = (p - 1)(q - 1). Vérifier que e = 3 est premier avec φ. 2. Déterminer l'entier d, avec 0 < d < 40, tel que 3d ≡ 1 [40]. 3. Chiffrer le message m = 9 : calculer le reste c de 9³ modulo 55. 4. Déchiffrer c en calculant le reste de c²⁷ modulo 55 par exponentiation rapide (calculer successivement c², c⁴, c⁸, c¹⁶ modulo 55). 5. Démontrer que, pour tout entier m, m⁸¹ ≡ m [5] et m⁸¹ ≡ m [11], puis que m⁸¹ ≡ m [55]. Expliquer pourquoi cela justifie le déchiffrement.",
              hint: "5. Distinguez le cas où 5 divise m et le cas contraire, et utilisez m⁴ ≡ 1 [5] ; de même modulo 11 avec m¹⁰ ≡ 1. Remarquez que 81 = 2 × 40 + 1 et que ed = 81.",
              solution: [
                "1. n = 55 et φ = 4 × 10 = 40. Les diviseurs premiers de 40 sont 2 et 5, aucun ne divise 3 : PGCD(3 ; 40) = 1.",
                "2. 3 × 27 = 81 = 2 × 40 + 1, donc d = 27 (on peut le trouver par Euclide : 40 = 3 × 13 + 1, d'où 1 = 40 - 13 × 3 et d ≡ -13 ≡ 27 [40]).",
                "3. 9³ = 729 = 55 × 13 + 14 : le message chiffré est c = 14.",
                "4. Modulo 55 : 14² = 196 ≡ 31 ; 14⁴ ≡ 31² = 961 ≡ 26 ; 14⁸ ≡ 26² = 676 ≡ 16 ; 14¹⁶ ≡ 16² = 256 ≡ 36. Comme 27 = 16 + 8 + 2 + 1, 14²⁷ ≡ 36 × 16 × 31 × 14 [55]. Or 36 × 16 = 576 ≡ 26, 26 × 31 = 806 ≡ 36, 36 × 14 = 504 ≡ 9. On retrouve m = 9.",
                "5. Modulo 5 : si 5 divise m, les deux membres sont congrus à 0. Sinon, m⁴ ≡ 1 [5] (Fermat), donc m⁸⁰ = (m⁴)²⁰ ≡ 1 et m⁸¹ ≡ m [5]. Modulo 11 : si 11 divise m, c'est immédiat ; sinon m¹⁰ ≡ 1 [11], donc m⁸⁰ = (m¹⁰)⁸ ≡ 1 et m⁸¹ ≡ m [11].",
                "Ainsi 5 et 11 divisent m⁸¹ - m, et comme PGCD(5 ; 11) = 1, 55 divise m⁸¹ - m : m⁸¹ ≡ m [55].",
                "Comme c ≡ m³ [55], on a c²⁷ ≡ m⁸¹ ≡ m [55] : élever le message chiffré à la puissance d redonne toujours le message de départ (si 0 ≤ m < 55).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa description.",
            pairs: [
              { left: "Petit théorème de Fermat", right: "aᵖ⁻¹ ≡ 1 [p] si p est premier et ne divise pas a" },
              { left: "Forme générale", right: "aᵖ ≡ a [p] pour tout entier a" },
              { left: "341", right: "Nombre composé qui vérifie pourtant 2³⁴⁰ ≡ 1 [341]" },
              { left: "Chiffrement affine", right: "y ≡ ax + b [26] avec a premier avec 26" },
              { left: "Clé publique RSA", right: "Le couple (n ; e)" },
              { left: "Clé privée RSA", right: "L'inverse d de e modulo (p - 1)(q - 1)" },
            ],
          },
          quiz: [
            {
              q: "Que vaut 2¹² modulo 13 ?",
              options: ["0", "1", "2", "12"],
              answer: 1,
              why: "13 est premier et ne divise pas 2 : d'après le petit théorème de Fermat, 2¹² ≡ 1 [13].",
            },
            {
              q: "Quel est le reste de 5¹⁰⁰ dans la division par 7 ?",
              options: ["4", "5", "1", "2"],
              answer: 3,
              why: "5⁶ ≡ 1 [7] et 100 = 6 × 16 + 4, donc 5¹⁰⁰ ≡ 5⁴ = 625 = 7 × 89 + 2 ≡ 2 [7].",
            },
            {
              q: "Pour un entier impair n > 2, on trouve que 2ⁿ⁻¹ n'est pas congru à 1 modulo n. Que peut-on en conclure ?",
              options: ["on ne peut rien conclure", "n est premier", "n n'est pas premier", "n est pair"],
              answer: 2,
              why: "Si n était premier, le petit théorème de Fermat donnerait 2ⁿ⁻¹ ≡ 1 [n]. C'est la contraposée du théorème.",
            },
            {
              q: "Pour déchiffrer y ≡ 5x + 8 [26], par quel nombre faut-il multiplier y - 8 ?",
              options: ["21", "5", "1/5", "25"],
              answer: 0,
              why: "On multiplie par l'inverse de 5 modulo 26, qui est 21 car 5 × 21 = 105 ≡ 1 [26]. On ne divise jamais dans une congruence.",
            },
            {
              q: "Sur quoi repose la sécurité du chiffrement RSA ?",
              options: ["le secret de la méthode de chiffrement", "la lenteur du calcul des puissances", "la difficulté de factoriser n", "le petit théorème de Fermat"],
              answer: 2,
              why: "La méthode et la clé (n ; e) sont publiques ; retrouver d demande de connaître p et q, donc de factoriser n, ce qui est hors de portée pour de très grands nombres.",
            },
          ],
          trap: "Appliquer le petit théorème de Fermat avec un module qui n'est pas premier (2⁸ n'est pas congru à 1 modulo 9) ou réduire l'exposant modulo p au lieu de p - 1.",
          method: "Avant d'utiliser Fermat, écrivez les deux hypothèses (p premier, p ne divise pas a), puis contrôlez votre reste avec une petite puissance calculée à la main.",
        },
      ],
    },
    /* ================================================================== */
    /* GRAPHES ET MATRICES                                                  */
    /* ================================================================== */
    {
      id: 'graphes-matrices',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'matrices-operations',
          title: 'Matrices et opérations',
          minutes: 30,
          objectives: [
            "Connaître le vocabulaire des matrices : taille, coefficient, matrice carrée, ligne, colonne, identité, diagonale.",
            "Calculer la somme de deux matrices, le produit d'une matrice par un réel et le produit de deux matrices.",
            "Utiliser les propriétés du produit matriciel, en particulier sa non-commutativité.",
            "Calculer les puissances d'une matrice carrée, notamment d'une matrice diagonale.",
          ],
          course: [
            {
              heading: "Le vocabulaire des matrices",
              paragraphs: [
                "Une matrice de taille n × p est un tableau de nombres réels à n lignes et p colonnes. Le coefficient situé à la ligne i et à la colonne j se note aᵢⱼ : le premier indice est toujours celui de la ligne. Dans ces leçons, on écrit une matrice ligne par ligne, entre crochets, en séparant les lignes par un point-virgule : A = [1 2 3 ; 4 5 6] est la matrice 2 × 3 de première ligne (1, 2, 3) et de seconde ligne (4, 5, 6) ; on lit a₂₃ = 6.",
                "Cas particuliers : une matrice carrée d'ordre n a n lignes et n colonnes ; une matrice ligne a une seule ligne ([2 -1 5]) ; une matrice colonne a une seule colonne ([3 ; 7]). La matrice nulle a tous ses coefficients nuls. La matrice identité d'ordre n, notée Iₙ, est la matrice carrée qui a des 1 sur la diagonale et des 0 ailleurs : I₂ = [1 0 ; 0 1]. Une matrice diagonale n'a de coefficients non nuls que sur sa diagonale, une matrice triangulaire supérieure n'en a que sur et au-dessus de la diagonale.",
                "Deux matrices sont égales lorsqu'elles ont la même taille et les mêmes coefficients aux mêmes places. Les matrices servent à ranger des données (un tableau de ventes, les liaisons d'un réseau) et surtout à calculer avec elles, comme on le verra pour les systèmes, les graphes et les évolutions de populations.",
              ],
              box: { label: "Définition", text: "Une matrice n × p a n lignes et p colonnes ; aᵢⱼ est le coefficient de la ligne i et de la colonne j. Iₙ est la matrice carrée d'ordre n avec des 1 sur la diagonale et des 0 ailleurs." },
            },
            {
              heading: "Somme et produit par un réel",
              paragraphs: [
                "La somme de deux matrices de même taille se calcule coefficient par coefficient : si A = [1 2 ; 0 -1] et B = [3 1 ; -2 4], alors A + B = [4 3 ; -2 3]. Le produit d'une matrice par un réel k multiplie chaque coefficient par k : 3A = [3 6 ; 0 -3]. On définit ainsi A - B = A + (-1)B.",
                "Ces opérations ont les propriétés habituelles : A + B = B + A, (A + B) + C = A + (B + C), k(A + B) = kA + kB. On ne peut pas additionner deux matrices de tailles différentes : une matrice 2 × 3 et une matrice 3 × 2 ne s'additionnent pas.",
              ],
            },
            {
              heading: "Le produit de deux matrices",
              paragraphs: [
                "Si A est de taille n × p et B de taille p × q, le produit AB est la matrice de taille n × q dont le coefficient cᵢⱼ s'obtient en multipliant la ligne i de A par la colonne j de B : cᵢⱼ = aᵢ₁b₁ⱼ + aᵢ₂b₂ⱼ + ... + aᵢₚbₚⱼ. Le nombre de colonnes de A doit être égal au nombre de lignes de B ; sinon, le produit n'existe pas.",
                "Exemple : A = [1 2 ; 3 4] et B = [0 1 ; 1 -1]. Le coefficient c₁₁ vaut 1 × 0 + 2 × 1 = 2, et l'on obtient AB = [2 -1 ; 4 -1]. Dans l'autre sens, BA = [3 4 ; -2 -2]. Ainsi AB ≠ BA : le produit matriciel n'est pas commutatif. L'ordre des facteurs compte toujours.",
                "Le produit est en revanche associatif, (AB)C = A(BC), et distributif, A(B + C) = AB + AC et (A + B)C = AC + BC. La matrice identité est neutre : AIₙ = IₙA = A pour toute matrice carrée A d'ordre n. Attention, un produit peut être nul sans qu'aucun facteur ne le soit : [1 1 ; 1 1] × [1 -1 ; -1 1] = [0 0 ; 0 0].",
              ],
              box: { label: "Règle", text: "(n × p) × (p × q) donne (n × q). Coefficient (i ; j) de AB = ligne i de A multipliée terme à terme par la colonne j de B, puis somme. En général AB ≠ BA." },
            },
            {
              heading: "Puissances d'une matrice carrée",
              paragraphs: [
                "Pour une matrice carrée A et un entier naturel n, on définit A⁰ = I, A¹ = A et Aⁿ⁺¹ = Aⁿ × A. Par exemple, si A = [1 1 ; 0 1], alors A² = [1 2 ; 0 1], A³ = [1 3 ; 0 1], et l'on démontre par récurrence que Aⁿ = [1 n ; 0 1]. La calculatrice permet aussi d'obtenir rapidement une puissance donnée.",
                "Pour une matrice diagonale, les puissances se calculent coefficient par coefficient sur la diagonale : si D = [2 0 ; 0 3], alors Dⁿ = [2ⁿ 0 ; 0 3ⁿ]. C'est faux pour une matrice quelconque : le carré de [1 2 ; 3 4] n'est pas [1 4 ; 9 16], c'est [7 10 ; 15 22].",
                "Comme le produit n'est pas commutatif, les identités remarquables doivent être adaptées : (A + B)² = A² + AB + BA + B², qui n'est égal à A² + 2AB + B² que si AB = BA. C'est le cas en particulier lorsque l'une des deux matrices est l'identité ou un multiple de l'identité.",
              ],
              box: { label: "À retenir", text: "Aⁿ = A × A × ... × A (n facteurs), A⁰ = I. Si D est diagonale, Dⁿ s'obtient en élevant chaque coefficient diagonal à la puissance n. (A + B)² = A² + AB + BA + B²." },
            },
          ],
          keyPoints: [
            "aᵢⱼ : ligne i, colonne j. On écrit [1 2 ; 3 4] pour la matrice de lignes (1, 2) et (3, 4).",
            "Somme et produit par un réel : coefficient par coefficient, entre matrices de même taille.",
            "Produit : (n × p) × (p × q) = (n × q) ; coefficient (i ; j) = ligne i de A par colonne j de B.",
            "En général AB ≠ BA, et AB peut être nulle avec A et B non nulles.",
            "AI = IA = A ; si D est diagonale, Dⁿ s'obtient en élevant les coefficients diagonaux à la puissance n.",
            "(A + B)² = A² + AB + BA + B², pas A² + 2AB + B² en général.",
          ],
          example: {
            statement: "On considère A = [2 -1 ; 1 3] et B = [1 0 ; 4 -2]. Calculer 2A - B, AB, BA et A².",
            solution: [
              "2A = [4 -2 ; 2 6], donc 2A - B = [4 - 1, -2 - 0 ; 2 - 4, 6 + 2] = [3 -2 ; -2 8].",
              "AB : ligne 1 de A par colonne 1 de B : 2 × 1 + (-1) × 4 = -2 ; ligne 1 par colonne 2 : 2 × 0 + (-1) × (-2) = 2 ; ligne 2 par colonne 1 : 1 × 1 + 3 × 4 = 13 ; ligne 2 par colonne 2 : 1 × 0 + 3 × (-2) = -6. Donc AB = [-2 2 ; 13 -6].",
              "BA : 1 × 2 + 0 × 1 = 2 ; 1 × (-1) + 0 × 3 = -1 ; 4 × 2 + (-2) × 1 = 6 ; 4 × (-1) + (-2) × 3 = -10. Donc BA = [2 -1 ; 6 -10].",
              "On constate que AB ≠ BA.",
              "A² = A × A : 2 × 2 + (-1) × 1 = 3 ; 2 × (-1) + (-1) × 3 = -5 ; 1 × 2 + 3 × 1 = 5 ; 1 × (-1) + 3 × 3 = 8. Donc A² = [3 -5 ; 5 8].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On donne A = [1 2 ; 0 -1] et B = [3 1 ; -2 4]. Calculer A + B, 3A - 2B et AB.",
              hint: "Additionnez coefficient par coefficient ; pour le produit, chaque coefficient est « ligne de A fois colonne de B ».",
              solution: [
                "A + B = [1 + 3, 2 + 1 ; 0 - 2, -1 + 4] = [4 3 ; -2 3].",
                "3A = [3 6 ; 0 -3] et 2B = [6 2 ; -4 8], donc 3A - 2B = [-3 4 ; 4 -11].",
                "AB : 1 × 3 + 2 × (-2) = -1 ; 1 × 1 + 2 × 4 = 9 ; 0 × 3 + (-1) × (-2) = 2 ; 0 × 1 + (-1) × 4 = -4.",
                "Donc AB = [-1 9 ; 2 -4].",
              ],
            },
            {
              level: 2,
              statement: "On donne A = [1 0 2 ; -1 3 1], de taille 2 × 3, et B = [2 1 ; 0 -1 ; 1 4], de taille 3 × 2. 1. Justifier que les produits AB et BA existent et donner leur taille. 2. Calculer AB et BA. 3. Peut-on avoir AB = BA ici ?",
              hint: "Vérifiez la règle (n × p) × (p × q) = (n × q). Pour BA, multipliez chaque ligne de B (deux coefficients) par chaque colonne de A (deux coefficients).",
              solution: [
                "1. A a 3 colonnes et B a 3 lignes : AB existe et est de taille 2 × 2. B a 2 colonnes et A a 2 lignes : BA existe et est de taille 3 × 3.",
                "2. AB : 1 × 2 + 0 × 0 + 2 × 1 = 4 ; 1 × 1 + 0 × (-1) + 2 × 4 = 9 ; -1 × 2 + 3 × 0 + 1 × 1 = -1 ; -1 × 1 + 3 × (-1) + 1 × 4 = 0. Donc AB = [4 9 ; -1 0].",
                "BA, ligne 1 de B, (2, 1) : 2 × 1 + 1 × (-1) = 1 ; 2 × 0 + 1 × 3 = 3 ; 2 × 2 + 1 × 1 = 5. Ligne 2, (0, -1) : 1 ; -3 ; -1. Ligne 3, (1, 4) : 1 - 4 = -3 ; 0 + 12 = 12 ; 2 + 4 = 6.",
                "Donc BA = [1 3 5 ; 1 -3 -1 ; -3 12 6].",
                "3. AB est de taille 2 × 2 et BA de taille 3 × 3 : elles ne peuvent pas être égales.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). On considère M = [2 1 ; 0 2], I = [1 0 ; 0 1] et N = [0 1 ; 0 0]. 1. Calculer M² et M³. 2. Démontrer par récurrence que, pour tout entier n ≥ 1, Mⁿ = [2ⁿ n × 2ⁿ⁻¹ ; 0 2ⁿ]. 3. Vérifier que M = 2I + N et calculer N². 4. Calculer (2I + N)² en développant, et justifier qu'ici on peut écrire (2I + N)² = 4I + 4N + N². Retrouver M².",
              hint: "2. Dans l'hérédité, calculez Mⁿ⁺¹ = Mⁿ × M avec l'hypothèse de récurrence et factorisez 2ⁿ. 4. Les matrices I et N commutent, car IN = NI = N.",
              solution: [
                "1. M² = [2 × 2 + 1 × 0, 2 × 1 + 1 × 2 ; 0, 2 × 2] = [4 4 ; 0 4]. M³ = M² × M = [8, 4 + 8 ; 0, 8] = [8 12 ; 0 8].",
                "2. Pour n ≥ 1, on note P(n) : Mⁿ = [2ⁿ n × 2ⁿ⁻¹ ; 0 2ⁿ]. Initialisation : pour n = 1, [2 1 × 2⁰ ; 0 2] = [2 1 ; 0 2] = M. P(1) est vraie.",
                "Hérédité : soit n ≥ 1 tel que P(n) soit vraie. Alors Mⁿ⁺¹ = Mⁿ × M = [2ⁿ × 2, 2ⁿ × 1 + n × 2ⁿ⁻¹ × 2 ; 0, 2ⁿ × 2] = [2ⁿ⁺¹, 2ⁿ + n × 2ⁿ ; 0, 2ⁿ⁺¹] = [2ⁿ⁺¹ (n + 1) × 2ⁿ ; 0 2ⁿ⁺¹]. C'est P(n + 1).",
                "Conclusion : pour tout n ≥ 1, Mⁿ = [2ⁿ n × 2ⁿ⁻¹ ; 0 2ⁿ]. Contrôle : pour n = 3, on retrouve [8 12 ; 0 8].",
                "3. 2I + N = [2 0 ; 0 2] + [0 1 ; 0 0] = [2 1 ; 0 2] = M. N² = [0 × 0 + 1 × 0, 0 × 1 + 1 × 0 ; 0, 0] = [0 0 ; 0 0].",
                "4. (2I + N)² = (2I)² + (2I)N + N(2I) + N² = 4I + 2N + 2N + N². Comme IN = NI = N, les deux termes croisés sont égaux : (2I + N)² = 4I + 4N + N² = 4I + 4N, puisque N² = 0. On obtient [4 0 ; 0 4] + [0 4 ; 0 0] = [4 4 ; 0 4], qui est bien M².",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Calcul matriciel.",
            statements: [
              { text: "Pour deux matrices carrées A et B de même ordre, AB = BA.", true: false, why: "Le produit matriciel n'est pas commutatif : [1 2 ; 3 4] × [0 1 ; 1 -1] ≠ [0 1 ; 1 -1] × [1 2 ; 3 4]." },
              { text: "Le produit d'une matrice 2 × 3 par une matrice 3 × 4 est une matrice 2 × 4.", true: true, why: "(n × p) × (p × q) donne (n × q)." },
              { text: "On peut additionner une matrice 2 × 3 et une matrice 3 × 2.", true: false, why: "La somme n'est définie que pour deux matrices de même taille." },
              { text: "Si AB est la matrice nulle, alors A ou B est la matrice nulle.", true: false, why: "[1 1 ; 1 1] × [1 -1 ; -1 1] = [0 0 ; 0 0] alors qu'aucun des deux facteurs n'est nul." },
              { text: "Pour toute matrice carrée A d'ordre n, AIₙ = IₙA = A.", true: true, why: "La matrice identité est l'élément neutre du produit." },
              { text: "Pour toutes matrices carrées A et B, (A + B)² = A² + 2AB + B².", true: false, why: "(A + B)² = A² + AB + BA + B², et AB ≠ BA en général." },
              { text: "Le carré de la matrice diagonale [2 0 ; 0 -3] est [4 0 ; 0 9].", true: true, why: "Pour une matrice diagonale, on élève chaque coefficient diagonal au carré." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la taille du produit d'une matrice 3 × 2 par une matrice 2 × 5 ?",
              options: ["3 × 5", "2 × 2", "5 × 3", "Produit impossible"],
              answer: 0,
              why: "(3 × 2) × (2 × 5) : le nombre de colonnes du premier facteur égale le nombre de lignes du second, et le produit est de taille 3 × 5.",
            },
            {
              q: "Que vaut le produit [1 2 ; 3 4] × [1 ; 1] ?",
              options: ["[4 ; 6]", "[3 ; 7]", "[1 2 ; 3 4]", "[2 ; 6]"],
              answer: 1,
              why: "Ligne 1 : 1 × 1 + 2 × 1 = 3 ; ligne 2 : 3 × 1 + 4 × 1 = 7.",
            },
            {
              q: "Le coefficient c₂₁ du produit AB s'obtient en multipliant :",
              options: ["la ligne 1 de A par la colonne 2 de B", "la colonne 2 de A par la ligne 1 de B", "la ligne 2 de B par la colonne 1 de A", "la ligne 2 de A par la colonne 1 de B"],
              answer: 3,
              why: "Le premier indice désigne la ligne du premier facteur, le second la colonne du second facteur.",
            },
            {
              q: "On pose D = [1 0 ; 0 -1]. Que vaut D²⁰²⁵ ?",
              options: ["I₂", "[-1 0 ; 0 1]", "[1 0 ; 0 -1]", "[2025 0 ; 0 -2025]"],
              answer: 2,
              why: "D est diagonale : D²⁰²⁵ = [1²⁰²⁵ 0 ; 0 (-1)²⁰²⁵] = [1 0 ; 0 -1], car 2025 est impair.",
            },
            {
              q: "Quelle égalité est vraie pour toutes matrices carrées A, B, C de même ordre ?",
              options: ["AB = BA", "A(B + C) = AB + AC", "(AB)² = A²B²", "A² = 0 entraîne A = 0"],
              answer: 1,
              why: "Le produit matriciel est distributif sur l'addition. Les trois autres égalités sont fausses en général, car le produit n'est pas commutatif et peut s'annuler.",
            },
          ],
          trap: "Calculer un produit de matrices en multipliant les coefficients situés à la même place, ou échanger l'ordre des facteurs comme si AB = BA.",
          method: "Avant tout produit, écrivez les tailles (n × p) × (p × q) pour vérifier qu'il existe et connaître la taille du résultat ; puis calculez chaque coefficient en suivant la ligne i du doigt gauche et la colonne j du doigt droit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'matrices-inversibles',
          title: 'Matrices inversibles et systèmes linéaires',
          minutes: 30,
          objectives: [
            "Définir une matrice carrée inversible et vérifier qu'une matrice donnée est l'inverse d'une autre.",
            "Déterminer si une matrice 2 × 2 est inversible et calculer son inverse.",
            "Écrire un système linéaire sous forme matricielle AX = B et le résoudre à l'aide de l'inverse de A.",
            "Obtenir l'inverse d'une matrice à partir d'une relation polynomiale, comme A² - 5A = 2I.",
          ],
          course: [
            {
              heading: "Matrice inversible",
              paragraphs: [
                "Une matrice carrée A d'ordre n est inversible s'il existe une matrice carrée B d'ordre n telle que AB = BA = Iₙ. Cette matrice B est unique : si B et C conviennent, alors B = BIₙ = B(AC) = (BA)C = IₙC = C. On l'appelle l'inverse de A et on la note A⁻¹. On admet que, pour des matrices carrées, l'égalité AB = Iₙ suffit : elle entraîne BA = Iₙ.",
                "Exemple : A = [3 1 ; 5 2] et B = [2 -1 ; -5 3]. On calcule AB = [3 × 2 + 1 × (-5), 3 × (-1) + 1 × 3 ; 5 × 2 + 2 × (-5), 5 × (-1) + 2 × 3] = [1 0 ; 0 1]. Donc A est inversible et A⁻¹ = B. Toutes les matrices ne sont pas inversibles : la matrice nulle ne l'est pas, ni [1 1 ; 1 1], puisque son produit par [1 -1 ; -1 1] est nul (si elle avait un inverse, en multipliant ce produit nul par cet inverse, on obtiendrait [1 -1 ; -1 1] = 0, ce qui est absurde).",
              ],
              box: { label: "Définition", text: "A (carrée d'ordre n) est inversible s'il existe B telle que AB = BA = Iₙ. B est unique, notée A⁻¹. Pour vérifier qu'une matrice donnée est l'inverse de A, il suffit de calculer AB et de trouver Iₙ." },
            },
            {
              heading: "Le cas des matrices 2 × 2",
              paragraphs: [
                "Soit A = [a b ; c d]. On appelle déterminant de A le nombre det(A) = ad - bc. Un calcul direct donne A × [d -b ; -c a] = [ad - bc, 0 ; 0, ad - bc] = (ad - bc)I₂. Si ad - bc ≠ 0, on divise par ce nombre : A est inversible et A⁻¹ = (1/(ad - bc)) × [d -b ; -c a].",
                "Si ad - bc = 0, la matrice n'est pas inversible : le produit A × [d -b ; -c a] est nul, et l'on conclut comme pour [1 1 ; 1 1] (si [d -b ; -c a] est elle aussi nulle, alors A est nulle). Retenez la recette : on échange les coefficients diagonaux, on change le signe des deux autres, et l'on divise par le déterminant.",
                "Exemples : pour A = [3 1 ; 5 2], det(A) = 6 - 5 = 1, donc A⁻¹ = [2 -1 ; -5 3], ce que l'on avait vérifié. Pour [2 4 ; 1 2], le déterminant vaut 4 - 4 = 0 : la matrice n'est pas inversible (sa seconde colonne est le double de la première).",
              ],
              box: { label: "Formule", text: "A = [a b ; c d] est inversible si et seulement si ad - bc ≠ 0, et alors A⁻¹ = (1/(ad - bc)) × [d -b ; -c a]." },
            },
            {
              heading: "Résoudre un système linéaire",
              paragraphs: [
                "Le système 3x + y = 4 et 5x + 2y = 7 s'écrit AX = B avec A = [3 1 ; 5 2], X = [x ; y] et B = [4 ; 7]. En effet, le produit AX est la matrice colonne [3x + y ; 5x + 2y]. Si A est inversible, on multiplie à gauche par A⁻¹ : A⁻¹AX = A⁻¹B, soit X = A⁻¹B. Le système a alors une unique solution.",
                "Ici, X = [2 -1 ; -5 3] × [4 ; 7] = [8 - 7 ; -20 + 21] = [1 ; 1] : la solution est x = 1, y = 1. On vérifie dans les équations : 3 + 1 = 4 et 5 + 2 = 7. Attention à l'ordre : on calcule A⁻¹B, et non BA⁻¹, qui n'a d'ailleurs pas de sens ici (une colonne ne se multiplie pas par une matrice 2 × 2 à sa droite).",
                "La même méthode s'applique aux systèmes de trois équations à trois inconnues : on obtient A⁻¹ à la calculatrice, ou l'énoncé fournit une matrice B dont on vérifie que AB = I. Par exemple, chercher une parabole y = ax² + bx + c passant par trois points donnés conduit à un tel système, d'inconnues a, b et c.",
              ],
              box: { label: "Propriété", text: "Si A est inversible, le système AX = B a une unique solution : X = A⁻¹B (multiplication à gauche par A⁻¹)." },
            },
            {
              heading: "Inverse à partir d'une relation",
              paragraphs: [
                "Pour A = [1 2 ; 3 4], on calcule A² = [7 10 ; 15 22], puis A² - 5A = [2 0 ; 0 2] = 2I. On factorise : A(A - 5I) = 2I, donc A × (1/2)(A - 5I) = I. La matrice A est inversible et A⁻¹ = (1/2)(A - 5I) = [-2 1 ; 1,5 -0,5]. On retrouve le résultat de la formule : det(A) = 4 - 6 = -2 et A⁻¹ = (-1/2) × [4 -2 ; -3 1].",
                "Cette technique sert surtout pour les matrices d'ordre 3 ou plus, pour lesquelles on ne dispose pas ici d'une formule simple de l'inverse. Il faut seulement faire attention à factoriser correctement : on écrit 5A = A × 5I, jamais A × 5, pour que la factorisation reste une égalité de matrices.",
              ],
              box: { label: "Méthode", text: "Si une relation donne A × M = I (par exemple à partir de A² - 5A = 2I, on obtient A × (1/2)(A - 5I) = I), alors A est inversible et A⁻¹ = M." },
            },
          ],
          keyPoints: [
            "A est inversible s'il existe B telle que AB = BA = I ; B est unique et notée A⁻¹.",
            "Pour vérifier une inverse proposée, il suffit de calculer AB et de trouver I.",
            "A = [a b ; c d] est inversible si et seulement si ad - bc ≠ 0, et A⁻¹ = (1/(ad - bc)) [d -b ; -c a].",
            "Un système linéaire s'écrit AX = B ; si A est inversible, X = A⁻¹B (et non BA⁻¹).",
            "Une relation du type A² + αA + βI = 0 avec β ≠ 0 permet d'exprimer A⁻¹ en fonction de A et I.",
          ],
          example: {
            statement: "Résoudre le système 4x + 3y = 5 et 2x + 2y = 2 à l'aide d'une matrice inverse.",
            solution: [
              "Le système s'écrit AX = B avec A = [4 3 ; 2 2], X = [x ; y] et B = [5 ; 2].",
              "det(A) = 4 × 2 - 3 × 2 = 8 - 6 = 2 ≠ 0, donc A est inversible.",
              "A⁻¹ = (1/2) × [2 -3 ; -2 4] = [1 -1,5 ; -1 2].",
              "X = A⁻¹B = [1 × 5 + (-1,5) × 2 ; -1 × 5 + 2 × 2] = [5 - 3 ; -5 + 4] = [2 ; -1].",
              "Vérification : 4 × 2 + 3 × (-1) = 5 et 2 × 2 + 2 × (-1) = 2.",
              "L'unique solution est x = 2, y = -1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Démontrer que A = [2 5 ; 1 3] est inversible et calculer A⁻¹. Vérifier le résultat par un produit. 2. La matrice B = [6 4 ; 3 2] est-elle inversible ?",
              hint: "Calculez ad - bc pour chaque matrice ; pour l'inverse, échangez les coefficients diagonaux et changez le signe des deux autres.",
              solution: [
                "1. det(A) = 2 × 3 - 5 × 1 = 1 ≠ 0, donc A est inversible et A⁻¹ = (1/1) × [3 -5 ; -1 2] = [3 -5 ; -1 2].",
                "Vérification : A × A⁻¹ = [2 × 3 + 5 × (-1), 2 × (-5) + 5 × 2 ; 1 × 3 + 3 × (-1), 1 × (-5) + 3 × 2] = [1 0 ; 0 1].",
                "2. det(B) = 6 × 2 - 4 × 3 = 12 - 12 = 0 : B n'est pas inversible (sa première ligne est le double de la seconde).",
              ],
            },
            {
              level: 2,
              statement: "On considère A = [1 2 ; 3 4] et I = [1 0 ; 0 1]. 1. Calculer A², puis A² - 5A. 2. En déduire que A est inversible et exprimer A⁻¹ en fonction de A et de I. 3. Donner A⁻¹ et contrôler le résultat avec la formule des matrices 2 × 2. 4. Résoudre le système x + 2y = 3 et 3x + 4y = 5.",
              hint: "Vous devez obtenir A² - 5A = 2I. Mettez A en facteur à gauche en écrivant 5A = A × 5I.",
              solution: [
                "1. A² = [1 + 6, 2 + 8 ; 3 + 12, 6 + 16] = [7 10 ; 15 22]. A² - 5A = [7 - 5, 10 - 10 ; 15 - 15, 22 - 20] = [2 0 ; 0 2] = 2I.",
                "2. A² - 5A = A(A - 5I) = 2I, donc A × (1/2)(A - 5I) = I. A est inversible et A⁻¹ = (1/2)(A - 5I).",
                "3. A - 5I = [-4 2 ; 3 -1], donc A⁻¹ = [-2 1 ; 1,5 -0,5]. Contrôle : det(A) = 4 - 6 = -2 et (1/(-2)) × [4 -2 ; -3 1] = [-2 1 ; 1,5 -0,5].",
                "4. Le système s'écrit AX = [3 ; 5], donc X = A⁻¹ × [3 ; 5] = [-2 × 3 + 1 × 5 ; 1,5 × 3 - 0,5 × 5] = [-1 ; 2].",
                "Vérification : -1 + 2 × 2 = 3 et 3 × (-1) + 4 × 2 = 5. La solution est x = -1, y = 2.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). On cherche une fonction f(x) = ax² + bx + c, avec a, b, c réels, dont la courbe passe par les points de coordonnées (-1 ; 6), (1 ; 2) et (2 ; 3). 1. Montrer que le problème revient à résoudre MX = Y avec M = [1 -1 1 ; 1 1 1 ; 4 2 1], X = [a ; b ; c] et Y = [6 ; 2 ; 3]. 2. On pose Q = [1 -3 2 ; -3 3 0 ; 2 6 -2]. Calculer MQ. En déduire que M est inversible et donner M⁻¹. 3. Déterminer f. 4. Sans nouveau système, déterminer la fonction g(x) = a'x² + b'x + c' dont la courbe passe par (-1 ; 0), (1 ; 0) et (2 ; 3).",
              hint: "1. Écrivez f(-1) = 6, f(1) = 2, f(2) = 3. 2. Vous devez obtenir MQ = 6I, donc M × (1/6)Q = I. 4. Seule la matrice colonne Y change.",
              solution: [
                "1. f(-1) = a - b + c = 6, f(1) = a + b + c = 2, f(2) = 4a + 2b + c = 3. Ce système s'écrit MX = Y avec les matrices données.",
                "2. Ligne 1 de M par les colonnes de Q : 1 + 3 + 2 = 6 ; -3 - 3 + 6 = 0 ; 2 + 0 - 2 = 0. Ligne 2 : 1 - 3 + 2 = 0 ; -3 + 3 + 6 = 6 ; 2 + 0 - 2 = 0. Ligne 3 : 4 - 6 + 2 = 0 ; -12 + 6 + 6 = 0 ; 8 + 0 - 2 = 6. Donc MQ = 6I.",
                "Ainsi M × (1/6)Q = I : M est inversible et M⁻¹ = (1/6)Q.",
                "3. X = M⁻¹Y = (1/6) × [1 × 6 - 3 × 2 + 2 × 3 ; -3 × 6 + 3 × 2 + 0 × 3 ; 2 × 6 + 6 × 2 - 2 × 3] = (1/6) × [6 ; -12 ; 18] = [1 ; -2 ; 3].",
                "Donc f(x) = x² - 2x + 3. Vérification : f(-1) = 1 + 2 + 3 = 6, f(1) = 1 - 2 + 3 = 2, f(2) = 4 - 4 + 3 = 3.",
                "4. Avec Y' = [0 ; 0 ; 3] : X' = (1/6) × [2 × 3 ; 0 × 3 ; -2 × 3] = [1 ; 0 ; -1]. Donc g(x) = x² - 1, et l'on vérifie g(-1) = 0, g(1) = 0, g(2) = 3.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution d'un système de deux équations à l'aide d'une matrice inverse.",
            items: [
              "Écrire le système sous la forme AX = B en identifiant A, X et B.",
              "Calculer le déterminant ad - bc de la matrice A.",
              "Constater qu'il est non nul : A est inversible.",
              "Calculer A⁻¹ = (1/(ad - bc)) × [d -b ; -c a].",
              "Calculer X = A⁻¹B, en multipliant à gauche.",
              "Vérifier la solution obtenue dans les deux équations de départ.",
            ],
          },
          quiz: [
            {
              q: "Quel est l'inverse de [2 1 ; 1 1] ?",
              options: ["[1 -1 ; -1 2]", "[1/2 1 ; 1 1]", "[-1 1 ; 1 -2]", "[2 -1 ; -1 1]"],
              answer: 0,
              why: "Le déterminant vaut 2 - 1 = 1 ; on échange les coefficients diagonaux et on change le signe des deux autres : [1 -1 ; -1 2].",
            },
            {
              q: "Pour quelle valeur de m la matrice [m 2 ; 3 6] n'est-elle pas inversible ?",
              options: ["m = 0", "m = 1", "m = 3", "m = 6"],
              answer: 1,
              why: "Le déterminant 6m - 6 est nul si et seulement si m = 1.",
            },
            {
              q: "A est inversible et AX = B. Que vaut X ?",
              options: ["BA⁻¹", "B/A", "A⁻¹B", "AB"],
              answer: 2,
              why: "On multiplie à gauche par A⁻¹ : A⁻¹AX = X = A⁻¹B. La division de matrices n'existe pas.",
            },
            {
              q: "On sait que A² = I. Que vaut A⁻¹ ?",
              options: ["I", "-A", "A n'est pas inversible", "A"],
              answer: 3,
              why: "A × A = I, donc A est inversible et son inverse est A elle-même.",
            },
            {
              q: "Que vaut le déterminant de [3 -2 ; 4 1] ?",
              options: ["11", "-5", "5", "-11"],
              answer: 0,
              why: "ad - bc = 3 × 1 - (-2) × 4 = 3 + 8 = 11.",
            },
          ],
          trap: "Écrire X = BA⁻¹ au lieu de X = A⁻¹B, ou oublier de diviser par le déterminant (ou de vérifier qu'il est non nul) dans la formule de l'inverse.",
          method: "Après avoir calculé une inverse, faites toujours le produit A × A⁻¹ : si vous ne trouvez pas I, l'erreur est dans l'inverse, et vous la repérez avant de résoudre le système.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'graphes',
          title: 'Graphes : sommets, arêtes et chaînes',
          minutes: 25,
          objectives: [
            "Connaître le vocabulaire des graphes : sommet, arête, sommets adjacents, ordre, degré, graphe complet.",
            "Utiliser la propriété : la somme des degrés est égale au double du nombre d'arêtes.",
            "Reconnaître une chaîne, sa longueur, une chaîne fermée, un cycle, et déterminer si un graphe est connexe.",
            "Modéliser une situation par un graphe, orienté ou non, éventuellement pondéré.",
          ],
          course: [
            {
              heading: "Sommets, arêtes, degrés",
              paragraphs: [
                "Un graphe non orienté est formé de points, appelés sommets, et de liens entre certains de ces sommets, appelés arêtes. Dans ces leçons, sauf mention contraire, les graphes sont simples : une arête relie deux sommets distincts et deux sommets sont reliés par au plus une arête. Deux sommets reliés par une arête sont adjacents. L'ordre du graphe est son nombre de sommets.",
                "Le degré d'un sommet est le nombre d'arêtes dont il est une extrémité. Exemple : le graphe de sommets A, B, C, D, E et d'arêtes AB, AC, BC, BD, CD, DE est d'ordre 5 ; les degrés sont 2 pour A, 3 pour B, 3 pour C, 3 pour D et 1 pour E. Un graphe est complet si deux sommets distincts quelconques sont toujours adjacents ; le graphe complet d'ordre n se note Kₙ.",
                "Les graphes modélisent des réseaux : des villes et des routes, des personnes qui se connaissent, des ordinateurs reliés. Leur étude est souvent datée de 1736, quand Leonhard Euler a montré qu'il était impossible de traverser une seule fois chacun des sept ponts de la ville de Königsberg au cours d'une même promenade.",
              ],
              box: { label: "Définition", text: "Ordre : nombre de sommets. Degré d'un sommet : nombre d'arêtes issues de ce sommet. Graphe complet : deux sommets distincts sont toujours adjacents." },
            },
            {
              heading: "La somme des degrés",
              paragraphs: [
                "Propriété : dans un graphe, la somme des degrés des sommets est égale au double du nombre d'arêtes. En effet, chaque arête a deux extrémités : elle est comptée une fois dans le degré de chacune, donc deux fois au total. Dans l'exemple précédent, 2 + 3 + 3 + 3 + 1 = 12 = 2 × 6.",
                "Conséquences : la somme des degrés est toujours paire, donc le nombre de sommets de degré impair est pair. Ainsi, il est impossible que 7 personnes se serrent chacune la main avec exactement 3 autres : la somme des degrés vaudrait 7 × 3 = 21, qui est impair. Le graphe complet Kₙ a n sommets de degré n - 1, donc n(n - 1)/2 arêtes : un tournoi où 8 équipes se rencontrent toutes une fois compte 8 × 7/2 = 28 matchs.",
              ],
              box: { label: "Propriété", text: "Somme des degrés = 2 × nombre d'arêtes. Le nombre de sommets de degré impair est donc pair. Kₙ possède n(n - 1)/2 arêtes." },
            },
            {
              heading: "Chaînes, cycles et connexité",
              paragraphs: [
                "Une chaîne est une suite de sommets dans laquelle deux sommets consécutifs sont adjacents. Sa longueur est le nombre d'arêtes parcourues. Dans l'exemple, A - B - D - E est une chaîne de longueur 3 qui relie A à E. Une chaîne fermée commence et finit au même sommet. Un cycle est une chaîne fermée dont les arêtes sont toutes distinctes : A - B - C - A est un cycle de longueur 3.",
                "Un graphe est connexe si deux sommets quelconques peuvent toujours être reliés par une chaîne : il est « d'un seul tenant ». Le graphe de l'exemple est connexe. Si l'on retirait l'arête DE, le sommet E deviendrait isolé et le graphe ne serait plus connexe. Ne confondez pas connexe (tout est relié, éventuellement par des détours) et complet (tout est relié directement).",
                "Un résultat célèbre, que l'on peut utiliser lorsqu'il est rappelé dans un énoncé, est le théorème d'Euler : un graphe connexe possède une chaîne passant une et une seule fois par chaque arête (chaîne eulérienne) si et seulement s'il a 0 ou 2 sommets de degré impair. Dans le cas de 2 sommets impairs, la chaîne va de l'un à l'autre.",
              ],
              box: { label: "Définition", text: "Chaîne : suite de sommets consécutivement adjacents ; sa longueur est son nombre d'arêtes. Cycle : chaîne fermée aux arêtes distinctes. Connexe : deux sommets quelconques sont reliés par une chaîne." },
            },
            {
              heading: "Graphes orientés et graphes pondérés",
              paragraphs: [
                "Dans un graphe orienté, les liens ont un sens : ce sont des arcs, représentés par des flèches. Une suite de sommets reliés par des arcs parcourus dans le bon sens est un chemin ; un chemin fermé est un circuit. Un graphe orienté convient pour des rues à sens unique, des liens entre pages web ou une relation « suit » sur un réseau social.",
                "Dans un graphe pondéré, chaque arête ou arc porte un nombre, son poids : une distance, une durée, un coût. Lorsque les poids sont des probabilités de passage d'un état à un autre et que, pour chaque sommet, la somme des poids des arcs qui en partent vaut 1, on parle de graphe probabiliste : c'est l'outil des chaînes de Markov, étudiées plus loin.",
              ],
              box: { label: "Repère", text: "Non orienté : arêtes, chaînes, cycles. Orienté : arcs, chemins, circuits. Pondéré : chaque lien porte un poids (distance, coût, probabilité)." },
            },
          ],
          keyPoints: [
            "Ordre = nombre de sommets ; degré d'un sommet = nombre d'arêtes qui en partent.",
            "Somme des degrés = 2 × nombre d'arêtes ; le nombre de sommets de degré impair est pair.",
            "Le graphe complet Kₙ a n(n - 1)/2 arêtes.",
            "Longueur d'une chaîne = nombre d'arêtes ; cycle = chaîne fermée aux arêtes distinctes.",
            "Connexe : tout couple de sommets est relié par une chaîne ; complet : tout couple est adjacent.",
            "Graphe orienté : arcs et chemins ; graphe pondéré : un poids sur chaque lien.",
          ],
          example: {
            statement: "On considère le graphe G de sommets A, B, C, D, E et d'arêtes AB, AC, BC, BD, CD, DE. 1. Donner l'ordre de G et le degré de chaque sommet. 2. Vérifier la propriété de la somme des degrés. 3. G est-il complet ? connexe ? 4. Donner une chaîne de longueur 4 reliant A à E et deux cycles de longueur 3.",
            solution: [
              "1. G a 5 sommets : il est d'ordre 5. Degrés : A est relié à B et C (degré 2) ; B à A, C, D (degré 3) ; C à A, B, D (degré 3) ; D à B, C, E (degré 3) ; E à D (degré 1).",
              "2. Somme des degrés : 2 + 3 + 3 + 3 + 1 = 12, et G a 6 arêtes : on a bien 12 = 2 × 6.",
              "3. G n'est pas complet : A et D, par exemple, ne sont pas adjacents. Il est connexe : la chaîne A - B - D - E passe par tous les sommets sauf C, et C est adjacent à A ; deux sommets quelconques sont donc reliés par une chaîne.",
              "4. A - B - C - D - E est une chaîne de longueur 4 (arêtes AB, BC, CD, DE).",
              "A - B - C - A et B - C - D - B sont deux cycles de longueur 3 (leurs trois arêtes sont distinctes).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Un graphe a cinq sommets de degrés 3, 3, 2, 2 et 2. Combien a-t-il d'arêtes ? 2. Existe-t-il un graphe dont les sommets ont pour degrés 3, 3, 3, 2 et 2 ?",
              hint: "Utilisez la propriété : somme des degrés = 2 × nombre d'arêtes.",
              solution: [
                "1. La somme des degrés vaut 3 + 3 + 2 + 2 + 2 = 12 = 2 × (nombre d'arêtes). Le graphe a donc 6 arêtes.",
                "2. La somme vaudrait 3 + 3 + 3 + 2 + 2 = 13, qui est impair. Or la somme des degrés est toujours paire : un tel graphe n'existe pas.",
              ],
            },
            {
              level: 2,
              statement: "Dans un club (données fictives), 6 joueurs organisent un tournoi où chacun doit affronter chacun des autres exactement une fois. On représente les joueurs par des sommets et les matchs joués par des arêtes. 1. Quel graphe obtient-on à la fin du tournoi ? Combien de matchs au total ? 2. Après la première semaine, les nombres de matchs joués par les six joueurs sont 3, 3, 2, 2, 1 et 1. Combien de matchs ont été joués ? Combien en reste-t-il ? 3. À ce moment, le graphe des matchs joués peut-il être complet ?",
              hint: "À la fin, chaque joueur a affronté les 5 autres. Pour la question 2, le nombre de matchs joués par un joueur est le degré du sommet correspondant.",
              solution: [
                "1. À la fin, deux joueurs distincts se sont toujours affrontés : on obtient le graphe complet K₆. Chaque sommet a pour degré 5, la somme des degrés vaut 6 × 5 = 30, donc il y a 30/2 = 15 matchs (on retrouve 6 × 5/2).",
                "2. La somme des degrés vaut 3 + 3 + 2 + 2 + 1 + 1 = 12, donc 12/2 = 6 matchs ont été joués. Il en reste 15 - 6 = 9.",
                "3. Non : dans un graphe complet d'ordre 6, tous les degrés valent 5. Ici aucun joueur n'a encore joué ses 5 matchs.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). Un réseau de pistes cyclables (données fictives) relie six points A, B, C, D, E, F par les pistes AB, AC, BC, BD, CE, DE, DF et EF. On admet le théorème d'Euler : un graphe connexe possède une chaîne passant une et une seule fois par chaque arête si et seulement s'il a 0 ou 2 sommets de degré impair ; s'il en a 2, la chaîne relie ces deux sommets. 1. Donner l'ordre du graphe, le degré de chaque sommet et vérifier la somme des degrés. 2. Le graphe est-il connexe ? complet ? 3. Donner un cycle de longueur 3 et un cycle de longueur 4. 4. Un agent peut-il parcourir toutes les pistes en passant une seule fois sur chacune ? 5. On construit une nouvelle piste entre B et E. Montrer que le parcours devient possible, en précisant son départ et son arrivée, et en donner un.",
              hint: "Comptez les sommets de degré impair avant et après l'ajout de la piste BE. Pour construire la chaîne, partez d'un sommet impair et barrez les arêtes au fur et à mesure.",
              solution: [
                "1. Ordre 6. Degrés : A : 2 (AB, AC) ; B : 3 (AB, BC, BD) ; C : 3 (AC, BC, CE) ; D : 3 (BD, DE, DF) ; E : 3 (CE, DE, EF) ; F : 2 (DF, EF). Somme : 2 + 3 + 3 + 3 + 3 + 2 = 16 = 2 × 8, et il y a bien 8 pistes.",
                "2. La chaîne A - B - D - F - E - C passe par tous les sommets, donc deux sommets quelconques sont reliés par une chaîne : le graphe est connexe. Il n'est pas complet : A et F, par exemple, ne sont pas adjacents.",
                "3. A - B - C - A est un cycle de longueur 3 ; B - C - E - D - B est un cycle de longueur 4 (arêtes BC, CE, ED, DB, toutes distinctes). D - E - F - D est un autre cycle de longueur 3.",
                "4. Il y a quatre sommets de degré impair (B, C, D et E). D'après le théorème d'Euler, un tel parcours est impossible.",
                "5. Avec la piste BE, B et E passent au degré 4. Il ne reste que deux sommets impairs, C et D (degré 3) ; le graphe est toujours connexe, donc il existe une chaîne eulérienne, de C à D.",
                "Exemple : C - A - B - C - E - B - D - E - F - D. Elle utilise les 9 pistes CA, AB, BC, CE, EB, BD, DE, EF, FD, chacune une seule fois.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot du vocabulaire des graphes à sa définition.",
            pairs: [
              { left: "Ordre d'un graphe", right: "Nombre de sommets du graphe" },
              { left: "Degré d'un sommet", right: "Nombre d'arêtes dont ce sommet est une extrémité" },
              { left: "Graphe complet", right: "Deux sommets distincts sont toujours adjacents" },
              { left: "Graphe connexe", right: "Deux sommets sont toujours reliés par une chaîne" },
              { left: "Cycle", right: "Chaîne fermée dont les arêtes sont toutes distinctes" },
              { left: "Longueur d'une chaîne", right: "Nombre d'arêtes qui la composent" },
            ],
          },
          quiz: [
            {
              q: "Un graphe possède 10 arêtes. Que vaut la somme des degrés de ses sommets ?",
              options: ["10", "20", "5", "40"],
              answer: 1,
              why: "Chaque arête compte dans le degré de ses deux extrémités : la somme vaut 2 × 10 = 20.",
            },
            {
              q: "Combien d'arêtes possède le graphe complet K₇ ?",
              options: ["49", "42", "21", "14"],
              answer: 2,
              why: "Chaque sommet a pour degré 6, donc 7 × 6/2 = 21 arêtes.",
            },
            {
              q: "Quelle suite peut être la liste des degrés d'un graphe simple à trois sommets ?",
              options: ["3, 3, 3", "2, 2, 2", "1, 1, 1", "3, 1, 1"],
              answer: 1,
              why: "Le triangle a trois sommets de degré 2. Les trois autres listes ont une somme impaire, et un sommet ne peut pas avoir un degré supérieur à 2 dans un graphe simple à trois sommets.",
            },
            {
              q: "Quelle est la longueur de la chaîne A - B - C - D ?",
              options: ["3", "4", "2", "1"],
              answer: 0,
              why: "La longueur est le nombre d'arêtes parcourues : AB, BC et CD, soit 3.",
            },
            {
              q: "Un graphe est connexe lorsque :",
              options: ["tous ses sommets ont le même degré", "deux sommets distincts quelconques sont toujours adjacents", "il contient au moins un cycle", "deux sommets sont toujours reliés par une chaîne"],
              answer: 3,
              why: "La connexité demande une chaîne, éventuellement longue, entre deux sommets quelconques. Des sommets toujours adjacents caractérisent le graphe complet.",
            },
          ],
          trap: "Confondre l'ordre (nombre de sommets) et le degré (nombre d'arêtes en un sommet), ou oublier de diviser par 2 la somme des degrés pour obtenir le nombre d'arêtes.",
          method: "Dès qu'un énoncé décrit un graphe, dessinez-le puis dressez le tableau des degrés : la somme doit être paire et égale au double du nombre d'arêtes, ce qui contrôle votre lecture.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'matrice-adjacence',
          title: 'Matrice d\'adjacence et nombre de chemins',
          minutes: 30,
          objectives: [
            "Écrire la matrice d'adjacence d'un graphe orienté ou non orienté, et lire un graphe sur sa matrice.",
            "Démontrer et utiliser le résultat : le coefficient (i ; j) de Aᵖ est le nombre de chemins (ou de chaînes) de longueur p reliant i à j.",
            "Déterminer la plus courte longueur d'un chemin entre deux sommets et étudier la connexité à l'aide des puissances de A.",
          ],
          course: [
            {
              heading: "La matrice d'adjacence",
              paragraphs: [
                "Soit un graphe d'ordre n dont les sommets sont numérotés de 1 à n. Sa matrice d'adjacence est la matrice carrée A d'ordre n dont le coefficient aᵢⱼ est le nombre d'arêtes reliant i à j (pour un graphe non orienté) ou le nombre d'arcs allant de i vers j (pour un graphe orienté). Pour un graphe simple, les coefficients valent 0 ou 1, et la diagonale est nulle s'il n'y a pas de boucle.",
                "Exemple : le graphe non orienté de sommets 1, 2, 3, 4 et d'arêtes 1-2, 1-3, 2-3, 3-4 a pour matrice A = [0 1 1 0 ; 1 0 1 0 ; 1 1 0 1 ; 0 0 1 0]. Pour un graphe non orienté, si i est relié à j, alors j est relié à i : la matrice est symétrique (aᵢⱼ = aⱼᵢ). De plus, sans boucle, la somme des coefficients de la ligne i est le degré du sommet i : ici 2, 2, 3 et 1.",
                "Pour un graphe orienté, la ligne correspond au sommet de départ et la colonne au sommet d'arrivée. La matrice n'est en général pas symétrique : un arc de 1 vers 2 n'implique pas d'arc de 2 vers 1. La matrice d'adjacence dépend de la numérotation choisie, qu'il faut toujours préciser.",
              ],
              box: { label: "Définition", text: "Matrice d'adjacence : aᵢⱼ = nombre d'arêtes entre i et j (non orienté) ou d'arcs de i vers j (orienté ; ligne = départ, colonne = arrivée). Graphe non orienté : matrice symétrique." },
            },
            {
              heading: "Puissances de A et nombre de chemins",
              paragraphs: [
                "Théorème : pour tout entier p ≥ 1, le coefficient (i ; j) de Aᵖ est égal au nombre de chemins (chaînes dans le cas non orienté) de longueur p allant du sommet i au sommet j. Démonstration par récurrence : c'est vrai pour p = 1 par définition de A. Si c'est vrai au rang p, un chemin de longueur p + 1 de i à j est formé d'un chemin de longueur p de i vers un sommet k, suivi d'un arc de k vers j.",
                "Pour chaque sommet k, il y a (Aᵖ)ᵢₖ × aₖⱼ tels chemins ; en sommant sur k, on obtient (Aᵖ)ᵢ₁a₁ⱼ + ... + (Aᵖ)ᵢₙaₙⱼ, qui est exactement le coefficient (i ; j) du produit Aᵖ × A = Aᵖ⁺¹. La propriété est héréditaire, donc vraie pour tout p ≥ 1.",
                "Sur l'exemple précédent, A² = [2 1 1 1 ; 1 2 1 1 ; 1 1 3 0 ; 1 1 0 1]. Le coefficient (1 ; 4) vaut 1 : il y a une seule chaîne de longueur 2 de 1 à 4, à savoir 1 - 3 - 4. Les coefficients diagonaux de A² sont les degrés, car une chaîne de longueur 2 de i à i est un aller-retour le long d'une arête. Attention, le coefficient (i ; j) de A² n'est pas le carré de aᵢⱼ : on effectue un vrai produit matriciel.",
              ],
              box: { label: "Théorème", text: "Le coefficient (i ; j) de Aᵖ est le nombre de chemins de longueur p du sommet i au sommet j (chaînes pour un graphe non orienté)." },
            },
            {
              heading: "Distances et connexité",
              paragraphs: [
                "La longueur du plus court chemin de i à j est le plus petit entier p ≥ 1 tel que le coefficient (i ; j) de Aᵖ soit non nul. Sur l'exemple, (A)₂₄ = 0, (A²)₂₄ = 1 : la plus courte chaîne de 2 à 4 a pour longueur 2 (2 - 3 - 4).",
                "Pour un graphe d'ordre n, deux sommets distincts reliés par une chaîne le sont par une chaîne de longueur au plus n - 1 (on peut supprimer les détours qui repassent par un même sommet). Un graphe non orienté d'ordre n est donc connexe si et seulement si tous les coefficients hors de la diagonale de A + A² + ... + Aⁿ⁻¹ sont non nuls. Pour un graphe orienté, la même condition signifie que l'on peut aller de n'importe quel sommet à n'importe quel autre.",
                "Ces calculs se font à la calculatrice ou avec un programme dès que le graphe a plus de quatre ou cinq sommets : c'est l'intérêt de la traduction matricielle. Les moteurs de recherche ont, par exemple, utilisé des matrices construites à partir du graphe des liens entre pages web pour classer ces pages.",
              ],
              box: { label: "À retenir", text: "Distance de i à j : plus petit p tel que (Aᵖ)ᵢⱼ ≠ 0. Graphe d'ordre n : il suffit d'examiner les puissances de A jusqu'à Aⁿ⁻¹." },
            },
          ],
          keyPoints: [
            "aᵢⱼ = nombre d'arêtes entre i et j, ou d'arcs de i vers j (ligne = départ, colonne = arrivée).",
            "Graphe non orienté : matrice symétrique ; sans boucle, somme de la ligne i = degré de i.",
            "(Aᵖ)ᵢⱼ = nombre de chemins (ou chaînes) de longueur p de i à j ; preuve par récurrence avec Aᵖ⁺¹ = Aᵖ × A.",
            "Diagonale de A² (graphe non orienté simple) = degrés des sommets.",
            "Plus court chemin de i à j : premier p tel que (Aᵖ)ᵢⱼ ≠ 0 ; on va au plus jusqu'à n - 1.",
          ],
          example: {
            statement: "Un graphe orienté a pour sommets 1, 2, 3 et pour arcs 1 → 2, 1 → 3, 2 → 3 et 3 → 1. 1. Écrire sa matrice d'adjacence A. 2. Calculer A² et A³. 3. Combien y a-t-il de chemins de longueur 2 de 2 à 1 ? de longueur 3 de 1 à 1 ? Les décrire.",
            solution: [
              "1. Ligne = départ, colonne = arrivée : A = [0 1 1 ; 0 0 1 ; 1 0 0]. Elle n'est pas symétrique, car le graphe est orienté.",
              "2. A² = A × A. Ligne 1 de A, (0, 1, 1) : on additionne les lignes 2 et 3 de A, ce qui donne (1, 0, 1). Ligne 2, (0, 0, 1) : on obtient la ligne 3 de A, (1, 0, 0). Ligne 3, (1, 0, 0) : on obtient la ligne 1 de A, (0, 1, 1). Donc A² = [1 0 1 ; 1 0 0 ; 0 1 1].",
              "A³ = A² × A. Ligne 1 de A², (1, 0, 1) : lignes 1 et 3 de A, soit (1, 1, 1). Ligne 2, (1, 0, 0) : (0, 1, 1). Ligne 3, (0, 1, 1) : lignes 2 et 3 de A, soit (1, 0, 1). Donc A³ = [1 1 1 ; 0 1 1 ; 1 0 1].",
              "3. (A²)₂₁ = 1 : un seul chemin de longueur 2 de 2 à 1, à savoir 2 → 3 → 1.",
              "(A³)₁₁ = 1 : un seul chemin de longueur 3 de 1 à 1, le circuit 1 → 2 → 3 → 1 (le chemin 1 → 3 → 1 est de longueur 2 seulement).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un graphe non orienté a pour sommets A, B, C, D (numérotés dans cet ordre de 1 à 4) et pour arêtes AB, AC, AD et BC. 1. Écrire sa matrice d'adjacence M. 2. Justifier qu'elle est symétrique et retrouver les degrés des sommets à partir de M.",
              hint: "Placez un 1 aux deux places (i ; j) et (j ; i) pour chaque arête, et des 0 partout ailleurs.",
              solution: [
                "1. Ligne A : A est relié à B, C, D, d'où (0, 1, 1, 1). Ligne B : relié à A et C, d'où (1, 0, 1, 0). Ligne C : relié à A et B, d'où (1, 1, 0, 0). Ligne D : relié à A, d'où (1, 0, 0, 0).",
                "M = [0 1 1 1 ; 1 0 1 0 ; 1 1 0 0 ; 1 0 0 0].",
                "2. Le graphe est non orienté : chaque arête relie i à j et j à i, donc mᵢⱼ = mⱼᵢ et M est symétrique.",
                "Les sommes des lignes donnent les degrés : A : 3, B : 2, C : 2, D : 1. Leur somme, 8, est bien le double du nombre d'arêtes, 4.",
              ],
            },
            {
              level: 2,
              statement: "On reprend le graphe de l'exercice précédent, de matrice M = [0 1 1 1 ; 1 0 1 0 ; 1 1 0 0 ; 1 0 0 0]. On donne M³ = [2 4 4 3 ; 4 2 3 1 ; 4 3 2 1 ; 3 1 1 0]. 1. Calculer M². 2. Combien y a-t-il de chaînes de longueur 2 de B à D ? de A à D ? Les décrire. 3. Combien y a-t-il de chaînes de longueur 3 de A à D ? Les écrire toutes.",
              hint: "Pour M², chaque ligne s'obtient en additionnant les lignes de M désignées par les 1 de la ligne correspondante. Une chaîne peut repasser par une arête déjà parcourue.",
              solution: [
                "1. Ligne A, (0, 1, 1, 1) : somme des lignes B, C, D de M = (3, 1, 1, 0). Ligne B, (1, 0, 1, 0) : lignes A et C = (1, 2, 1, 1). Ligne C, (1, 1, 0, 0) : lignes A et B = (1, 1, 2, 1). Ligne D, (1, 0, 0, 0) : ligne A = (0, 1, 1, 1).",
                "Donc M² = [3 1 1 0 ; 1 2 1 1 ; 1 1 2 1 ; 0 1 1 1].",
                "2. Le coefficient (B ; D) de M² vaut 1 : une seule chaîne de longueur 2 de B à D, B - A - D. Le coefficient (A ; D) de M² vaut 0 : aucune chaîne de longueur 2 de A à D, car D n'est adjacent qu'à A.",
                "3. Le coefficient (A ; D) de M³ vaut 3 : trois chaînes de longueur 3 de A à D. Comme D n'est adjacent qu'à A, l'avant-dernier sommet est A ; il faut donc une chaîne de longueur 2 de A à A, suivie de A - D.",
                "Les chaînes de longueur 2 de A à A sont A - B - A, A - C - A et A - D - A (le coefficient (A ; A) de M² vaut bien 3). D'où les trois chaînes : A - B - A - D, A - C - A - D et A - D - A - D.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). Quatre pages web (données fictives), numérotées de 1 à 4, contiennent des liens : la page 1 renvoie vers 2 et 3, la page 2 vers 3, la page 3 vers 1 et 4, la page 4 vers 2. On modélise par un graphe orienté. 1. Écrire la matrice d'adjacence A. Pourquoi n'est-elle pas symétrique ? 2. Calculer A² et A³. 3. Combien de parcours de trois clics mènent de la page 1 à la page 2 ? Les décrire. 4. Quel est le nombre minimal de clics pour aller de la page 4 à la page 1 ? 5. Calculer A + A² + A³ et en déduire que, depuis n'importe quelle page, on peut atteindre n'importe quelle autre page.",
              hint: "Ligne = page de départ, colonne = page d'arrivée. Pour les produits, une ligne de A² est la somme des lignes de A désignées par les 1 de la ligne correspondante de A.",
              solution: [
                "1. A = [0 1 1 0 ; 0 0 1 0 ; 1 0 0 1 ; 0 1 0 0]. Elle n'est pas symétrique : par exemple, la page 1 renvoie vers 2 mais 2 ne renvoie pas vers 1 (a₁₂ = 1, a₂₁ = 0).",
                "2. Ligne 1 de A² : lignes 2 + 3 de A = (1, 0, 1, 1). Ligne 2 : ligne 3 = (1, 0, 0, 1). Ligne 3 : lignes 1 + 4 = (0, 2, 1, 0). Ligne 4 : ligne 2 = (0, 0, 1, 0). Donc A² = [1 0 1 1 ; 1 0 0 1 ; 0 2 1 0 ; 0 0 1 0].",
                "A³ = A² × A. Ligne 1, (1, 0, 1, 1) : lignes 1 + 3 + 4 de A = (1, 2, 1, 1). Ligne 2, (1, 0, 0, 1) : lignes 1 + 4 = (0, 2, 1, 0). Ligne 3, (0, 2, 1, 0) : 2 × ligne 2 + ligne 3 = (1, 0, 2, 1). Ligne 4 : ligne 3 = (1, 0, 0, 1). Donc A³ = [1 2 1 1 ; 0 2 1 0 ; 1 0 2 1 ; 1 0 0 1].",
                "3. (A³)₁₂ = 2 : deux parcours de trois clics, 1 → 3 → 1 → 2 et 1 → 3 → 4 → 2.",
                "4. a₄₁ = 0 et (A²)₄₁ = 0, mais (A³)₄₁ = 1 : il faut au minimum 3 clics, par le parcours 4 → 2 → 3 → 1.",
                "5. A + A² + A³ = [2 3 3 2 ; 1 2 2 1 ; 2 2 3 2 ; 1 1 1 1]. Tous ses coefficients sont non nuls : pour tout couple de pages (i ; j), il existe un parcours de 1, 2 ou 3 clics de i à j. Comme le graphe a 4 sommets, examiner les longueurs jusqu'à 3 suffit : chaque page est accessible depuis chacune des autres.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Matrices d'adjacence et chemins.",
            statements: [
              { text: "La matrice d'adjacence d'un graphe non orienté est symétrique.", true: true, why: "Une arête entre i et j relie aussi j à i : aᵢⱼ = aⱼᵢ." },
              { text: "La matrice d'adjacence d'un graphe orienté est toujours symétrique.", true: false, why: "Un arc de i vers j n'entraîne pas d'arc de j vers i." },
              { text: "Dans un graphe non orienté sans boucle, la somme de la ligne i de A est le degré du sommet i.", true: true, why: "La ligne i compte les arêtes issues de i." },
              { text: "Le coefficient (i ; j) de A² est le carré du coefficient (i ; j) de A.", true: false, why: "A² est un produit matriciel : (A²)ᵢⱼ = aᵢ₁a₁ⱼ + ... + aᵢₙaₙⱼ." },
              { text: "Le coefficient (i ; j) de A³ est le nombre de chemins de longueur 3 de i à j.", true: true, why: "C'est le théorème, démontré par récurrence." },
              { text: "Si le coefficient (1 ; 4) de A² est nul, il n'existe aucune chaîne entre 1 et 4.", true: false, why: "Il n'existe aucune chaîne de longueur 2, mais il peut en exister d'autres longueurs (examiner A, A³...)." },
              { text: "Pour un graphe non orienté simple, la diagonale de A² donne les degrés des sommets.", true: true, why: "Une chaîne de longueur 2 de i à i est un aller-retour le long d'une arête issue de i." },
            ],
          },
          quiz: [
            {
              q: "Le graphe non orienté de sommets 1, 2, 3 a pour arêtes 1-2 et 2-3. Quelle est sa matrice d'adjacence ?",
              options: ["[0 1 1 ; 1 0 1 ; 1 1 0]", "[1 1 0 ; 1 1 1 ; 0 1 1]", "[0 1 0 ; 1 0 1 ; 0 1 0]", "[0 1 0 ; 0 0 1 ; 0 0 0]"],
              answer: 2,
              why: "1 est relié à 2 seulement, 2 à 1 et 3, 3 à 2 seulement ; la matrice est symétrique à diagonale nulle.",
            },
            {
              q: "Pour un graphe orienté, on lit (A³)₁₂ = 5. Cela signifie que :",
              options: ["il existe 3 chemins de longueur 5 de 1 à 2", "il existe 5 chemins de longueur 3 de 1 à 2", "la distance de 1 à 2 vaut 5", "le sommet 1 a 5 successeurs"],
              answer: 1,
              why: "L'exposant donne la longueur des chemins et le coefficient leur nombre, du sommet de la ligne vers celui de la colonne.",
            },
            {
              q: "Pour un graphe non orienté simple, que donne la diagonale de A² ?",
              options: ["les degrés des sommets", "le nombre de boucles", "l'ordre du graphe", "le nombre de cycles de longueur 2"],
              answer: 0,
              why: "(A²)ᵢᵢ compte les allers-retours i - k - i, un par voisin k de i : c'est le degré de i.",
            },
            {
              q: "Quelle est la taille de la matrice d'adjacence d'un graphe à 6 sommets et 9 arêtes ?",
              options: ["9 × 9", "6 × 9", "6 × 6", "9 × 6"],
              answer: 2,
              why: "La matrice d'adjacence est carrée, d'ordre égal au nombre de sommets.",
            },
            {
              q: "On a (A)₁₄ = 0, (A²)₁₄ = 0 et (A³)₁₄ = 2. Quelle est la longueur du plus court chemin de 1 à 4 ?",
              options: ["2", "4", "on ne peut pas savoir", "3"],
              answer: 3,
              why: "Il n'existe aucun chemin de longueur 1 ou 2, et il en existe de longueur 3 : la distance est 3.",
            },
          ],
          trap: "Lire la matrice d'un graphe orienté dans le mauvais sens (la ligne est le départ, la colonne l'arrivée) ou calculer A² en élevant chaque coefficient au carré.",
          method: "Contrôlez un coefficient de Aᵖ en énumérant à la main quelques chemins correspondants sur le dessin du graphe : si le nombre ne correspond pas, revoyez le produit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'suites-matrices',
          title: 'Suites de matrices et évolutions',
          minutes: 35,
          objectives: [
            "Modéliser deux suites couplées par une relation matricielle Uₙ₊₁ = AUₙ et démontrer que Uₙ = AⁿU₀.",
            "Calculer Aⁿ lorsque A s'écrit PDP⁻¹ avec D diagonale (la matrice P étant donnée).",
            "Étudier une suite Uₙ₊₁ = AUₙ + B à l'aide d'une matrice colonne L telle que L = AL + B.",
            "Étudier le comportement à long terme d'une évolution (convergence d'une suite de matrices colonnes).",
          ],
          course: [
            {
              heading: "Suites couplées et écriture matricielle",
              paragraphs: [
                "Deux opérateurs se partagent une clientèle (données fictives). Chaque mois, 10 % des clients de l'opérateur A passent chez B et 20 % des clients de B passent chez A ; les autres restent. Si aₙ et bₙ désignent les nombres de clients (en milliers) au mois n, on a aₙ₊₁ = 0,9aₙ + 0,2bₙ et bₙ₊₁ = 0,1aₙ + 0,8bₙ. Les deux suites sont couplées : chacune dépend de l'autre.",
                "En posant Uₙ = [aₙ ; bₙ] et A = [0,9 0,2 ; 0,1 0,8], le système s'écrit Uₙ₊₁ = AUₙ. On démontre par récurrence que Uₙ = AⁿU₀ pour tout entier naturel n : c'est vrai pour n = 0 (A⁰ = I), et si Uₙ = AⁿU₀, alors Uₙ₊₁ = AUₙ = A × AⁿU₀ = Aⁿ⁺¹U₀. C'est l'analogue matriciel des suites géométriques.",
                "Avec a₀ = 300 et b₀ = 600, on obtient U₁ = [0,9 × 300 + 0,2 × 600 ; 0,1 × 300 + 0,8 × 600] = [390 ; 510]. Le total reste égal à 900, car les clients changent d'opérateur sans disparaître. Pour calculer U₁₂ directement, il suffit de calculer A¹² × U₀ (à la calculatrice), ou de trouver une formule pour Aⁿ.",
              ],
              box: { label: "Propriété", text: "Si, pour tout n, Uₙ₊₁ = AUₙ, alors Uₙ = AⁿU₀ pour tout entier naturel n. L'ordre compte : Aⁿ est à gauche de U₀." },
            },
            {
              heading: "Calculer Aⁿ grâce à une matrice diagonale",
              paragraphs: [
                "Supposons qu'il existe une matrice inversible P et une matrice diagonale D telles que A = PDP⁻¹ (dans les exercices, P est toujours donnée). Alors A² = PDP⁻¹PDP⁻¹ = PD²P⁻¹, car P⁻¹P = I, et par récurrence Aⁿ = PDⁿP⁻¹ pour tout n. Comme Dⁿ se calcule immédiatement, on obtient une formule explicite pour Aⁿ. Attention : (PDP⁻¹)ⁿ n'est pas PⁿDⁿP⁻ⁿ.",
                "Pour A = [0,9 0,2 ; 0,1 0,8], on vérifie qu'avec P = [2 1 ; 1 -1] et D = [1 0 ; 0 0,7], on a AP = PD, donc A = PDP⁻¹, avec P⁻¹ = (1/3) × [1 1 ; 1 -2]. On en déduit Aⁿ = (1/3) × [2 + 0,7ⁿ, 2 - 2 × 0,7ⁿ ; 1 - 0,7ⁿ, 1 + 2 × 0,7ⁿ]. Pour n = 1, on retrouve bien A.",
                "Avec U₀ = [300 ; 600], on obtient aₙ = 600 - 300 × 0,7ⁿ et bₙ = 300 + 300 × 0,7ⁿ (pour n = 1 : 390 et 510). Comme -1 < 0,7 < 1, 0,7ⁿ tend vers 0 : aₙ tend vers 600 et bₙ vers 300. À long terme, l'opérateur A détient les deux tiers de la clientèle, quelle que soit la répartition de départ.",
              ],
              box: { label: "Propriété", text: "Si A = PDP⁻¹ avec D diagonale, alors Aⁿ = PDⁿP⁻¹ pour tout entier naturel n. On le démontre par récurrence en utilisant P⁻¹P = I." },
            },
            {
              heading: "Suites Uₙ₊₁ = AUₙ + B",
              paragraphs: [
                "Lorsqu'un terme constant s'ajoute (par exemple des arrivées régulières), on obtient Uₙ₊₁ = AUₙ + B, avec B une matrice colonne fixe. C'est l'analogue des suites arithmético-géométriques uₙ₊₁ = auₙ + b, que l'on étudie avec le nombre ℓ tel que ℓ = aℓ + b. On cherche de même une matrice colonne L telle que L = AL + B, c'est-à-dire (I - A)L = B. Si I - A est inversible, L = (I - A)⁻¹B.",
                "On pose alors Vₙ = Uₙ - L. Par soustraction, Vₙ₊₁ = (AUₙ + B) - (AL + B) = A(Uₙ - L) = AVₙ. Donc Vₙ = AⁿV₀, puis Uₙ = Aⁿ(U₀ - L) + L. Si Aⁿ tend vers la matrice nulle (ce que l'énoncé établit ou fait admettre), alors Uₙ tend vers L : la colonne L est l'état stable de l'évolution.",
              ],
              box: { label: "Méthode", text: "Uₙ₊₁ = AUₙ + B : trouver L avec L = AL + B, poser Vₙ = Uₙ - L, montrer Vₙ₊₁ = AVₙ, en déduire Uₙ = Aⁿ(U₀ - L) + L." },
            },
            {
              heading: "Convergence d'une suite de matrices",
              paragraphs: [
                "On dit qu'une suite de matrices (Mₙ), toutes de même taille, converge vers une matrice M si chaque coefficient de Mₙ converge vers le coefficient correspondant de M. Une suite de matrices colonnes Uₙ converge donc si chacune de ses composantes converge.",
                "Pour une matrice diagonale D = [λ 0 ; 0 μ], Dⁿ = [λⁿ 0 ; 0 μⁿ] converge si et seulement si λⁿ et μⁿ convergent, c'est-à-dire si -1 < λ ≤ 1 et -1 < μ ≤ 1. Par exemple [1 0 ; 0 0,7]ⁿ tend vers [1 0 ; 0 0]. Avec A = PDP⁻¹, la limite de Aⁿ est alors P × (lim Dⁿ) × P⁻¹. C'est ainsi que l'on a obtenu la répartition limite des deux tiers et du tiers.",
              ],
              box: { label: "À retenir", text: "Une suite de matrices converge lorsque chacun de ses coefficients converge. Si |q| < 1, qⁿ tend vers 0 : c'est le ressort de presque toutes les études de limite." },
            },
          ],
          keyPoints: [
            "Uₙ₊₁ = AUₙ entraîne Uₙ = AⁿU₀ (récurrence).",
            "Si A = PDP⁻¹ avec D diagonale, alors Aⁿ = PDⁿP⁻¹ ; attention, ce n'est pas PⁿDⁿP⁻ⁿ.",
            "Uₙ₊₁ = AUₙ + B : chercher L tel que L = AL + B, soit (I - A)L = B.",
            "Avec Vₙ = Uₙ - L : Vₙ₊₁ = AVₙ, puis Uₙ = Aⁿ(U₀ - L) + L.",
            "Une suite de matrices converge si chaque coefficient converge ; si |q| < 1, qⁿ tend vers 0.",
          ],
          example: {
            statement: "On considère A = [0,4 0,2 ; 0,1 0,3], B = [3 ; 4] et la suite définie par U₀ = [10 ; 5] et Uₙ₊₁ = AUₙ + B. 1. Calculer U₁. 2. Déterminer la matrice colonne L telle que L = AL + B. 3. On pose Vₙ = Uₙ - L. Montrer que Vₙ₊₁ = AVₙ et exprimer Uₙ en fonction de n. 4. On admet que Aⁿ tend vers la matrice nulle. Quelle est la limite de Uₙ ?",
            solution: [
              "1. U₁ = AU₀ + B = [0,4 × 10 + 0,2 × 5 + 3 ; 0,1 × 10 + 0,3 × 5 + 4] = [4 + 1 + 3 ; 1 + 1,5 + 4] = [8 ; 6,5].",
              "2. L = AL + B équivaut à (I - A)L = B, avec I - A = [0,6 -0,2 ; -0,1 0,7]. Son déterminant vaut 0,6 × 0,7 - (-0,2) × (-0,1) = 0,42 - 0,02 = 0,4 ≠ 0, donc I - A est inversible et (I - A)⁻¹ = (1/0,4) × [0,7 0,2 ; 0,1 0,6] = [1,75 0,5 ; 0,25 1,5].",
              "L = (I - A)⁻¹B = [1,75 × 3 + 0,5 × 4 ; 0,25 × 3 + 1,5 × 4] = [5,25 + 2 ; 0,75 + 6] = [7,25 ; 6,75]. Vérification : AL + B = [2,9 + 1,35 + 3 ; 0,725 + 2,025 + 4] = [7,25 ; 6,75].",
              "3. Vₙ₊₁ = Uₙ₊₁ - L = (AUₙ + B) - (AL + B) = A(Uₙ - L) = AVₙ. Donc Vₙ = AⁿV₀ et Uₙ = Aⁿ(U₀ - L) + L, avec U₀ - L = [2,75 ; -1,75].",
              "4. Si Aⁿ tend vers la matrice nulle, Aⁿ(U₀ - L) tend vers la colonne nulle, donc Uₙ tend vers L = [7,25 ; 6,75].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Les suites (aₙ) et (bₙ) sont définies par a₀ = 1, b₀ = 0 et, pour tout n, aₙ₊₁ = 2aₙ + bₙ et bₙ₊₁ = aₙ. 1. Écrire la relation sous la forme Uₙ₊₁ = AUₙ avec Uₙ = [aₙ ; bₙ]. 2. Calculer U₁, U₂ et U₃. 3. Calculer A² et vérifier que U₂ = A²U₀.",
              hint: "La première ligne de A contient les coefficients de aₙ et bₙ dans l'expression de aₙ₊₁, la seconde ceux de bₙ₊₁.",
              solution: [
                "1. aₙ₊₁ = 2aₙ + 1bₙ et bₙ₊₁ = 1aₙ + 0bₙ, donc A = [2 1 ; 1 0].",
                "2. U₁ = AU₀ = [2 × 1 + 1 × 0 ; 1] = [2 ; 1]. U₂ = AU₁ = [4 + 1 ; 2] = [5 ; 2]. U₃ = AU₂ = [10 + 2 ; 5] = [12 ; 5].",
                "3. A² = [2 × 2 + 1 × 1, 2 × 1 + 1 × 0 ; 1 × 2 + 0 × 1, 1 × 1 + 0 × 0] = [5 2 ; 2 1].",
                "A²U₀ = [5 × 1 + 2 × 0 ; 2 × 1 + 1 × 0] = [5 ; 2] = U₂, conformément à la formule Uₙ = AⁿU₀.",
              ],
            },
            {
              level: 2,
              statement: "On considère A = [1 2 ; 2 1], P = [1 1 ; 1 -1] et D = [3 0 ; 0 -1]. 1. Justifier que P est inversible et calculer P⁻¹. 2. Vérifier que P⁻¹AP = D, puis en déduire que A = PDP⁻¹. 3. Démontrer par récurrence que, pour tout entier naturel n, Aⁿ = PDⁿP⁻¹. 4. En déduire les coefficients de Aⁿ en fonction de n, et contrôler le résultat pour n = 2.",
              hint: "Pour la question 2, calculez d'abord AP puis multipliez à gauche par P⁻¹. Pour passer de P⁻¹AP = D à A = PDP⁻¹, multipliez à gauche par P et à droite par P⁻¹.",
              solution: [
                "1. det(P) = 1 × (-1) - 1 × 1 = -2 ≠ 0, donc P est inversible et P⁻¹ = (1/(-2)) × [-1 -1 ; -1 1] = [0,5 0,5 ; 0,5 -0,5].",
                "2. AP = [1 + 2, 1 - 2 ; 2 + 1, 2 - 1] = [3 -1 ; 3 1]. P⁻¹(AP) = [0,5 × 3 + 0,5 × 3, 0,5 × (-1) + 0,5 × 1 ; 0,5 × 3 - 0,5 × 3, -0,5 - 0,5] = [3 0 ; 0 -1] = D. En multipliant à gauche par P et à droite par P⁻¹ : PP⁻¹APP⁻¹ = PDP⁻¹, soit A = PDP⁻¹.",
                "3. Initialisation : A⁰ = I et PD⁰P⁻¹ = PP⁻¹ = I. Hérédité : si Aⁿ = PDⁿP⁻¹, alors Aⁿ⁺¹ = Aⁿ × A = PDⁿP⁻¹ × PDP⁻¹ = PDⁿ(P⁻¹P)DP⁻¹ = PDⁿ⁺¹P⁻¹. Conclusion : Aⁿ = PDⁿP⁻¹ pour tout n.",
                "4. Dⁿ = [3ⁿ 0 ; 0 (-1)ⁿ]. PDⁿ = [3ⁿ (-1)ⁿ ; 3ⁿ -(-1)ⁿ], puis Aⁿ = PDⁿP⁻¹ = (1/2) × [3ⁿ + (-1)ⁿ, 3ⁿ - (-1)ⁿ ; 3ⁿ - (-1)ⁿ, 3ⁿ + (-1)ⁿ].",
                "Contrôle pour n = 2 : la formule donne (1/2) × [10 8 ; 8 10] = [5 4 ; 4 5], et le calcul direct A² = [1 + 4, 2 + 2 ; 2 + 2, 4 + 1] = [5 4 ; 4 5].",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). Une agglomération (données fictives) compte un centre-ville et une périphérie. Chaque année, 20 % des habitants du centre partent en périphérie et 30 % des habitants de la périphérie viennent au centre ; la population totale reste constante. On note xₙ et yₙ les populations du centre et de la périphérie l'année n, avec x₀ = 10 000 et y₀ = 40 000, et Uₙ = [xₙ ; yₙ]. 1. Montrer que Uₙ₊₁ = MUₙ avec M = [0,8 0,3 ; 0,2 0,7]. 2. On pose P = [3 1 ; 2 -1] et D = [1 0 ; 0 0,5]. Vérifier que MP = PD et calculer P⁻¹. En déduire que M = PDP⁻¹. 3. On admet que Mⁿ = PDⁿP⁻¹. Calculer P⁻¹U₀, puis montrer que xₙ = 30 000 - 20 000 × 0,5ⁿ et yₙ = 20 000 + 20 000 × 0,5ⁿ. 4. Déterminer les limites de xₙ et yₙ et interpréter. 5. À partir de quelle année la population du centre dépasse-t-elle 29 000 habitants ?",
              hint: "3. Uₙ = MⁿU₀ = PDⁿ(P⁻¹U₀) : calculez d'abord la colonne P⁻¹U₀, puis multipliez par Dⁿ, puis par P. 5. Résolvez 20 000 × 0,5ⁿ < 1000 avec le logarithme népérien ou par essais successifs.",
              solution: [
                "1. Le centre garde 80 % de ses habitants et reçoit 30 % de ceux de la périphérie : xₙ₊₁ = 0,8xₙ + 0,3yₙ. De même yₙ₊₁ = 0,2xₙ + 0,7yₙ. D'où Uₙ₊₁ = MUₙ.",
                "2. MP = [0,8 × 3 + 0,3 × 2, 0,8 × 1 + 0,3 × (-1) ; 0,2 × 3 + 0,7 × 2, 0,2 × 1 + 0,7 × (-1)] = [3 0,5 ; 2 -0,5] et PD = [3 0,5 ; 2 -0,5] : MP = PD. det(P) = -3 - 2 = -5, donc P⁻¹ = (1/(-5)) × [-1 -1 ; -2 3] = [0,2 0,2 ; 0,4 -0,6]. En multipliant MP = PD à droite par P⁻¹ : M = PDP⁻¹.",
                "3. P⁻¹U₀ = [0,2 × 10 000 + 0,2 × 40 000 ; 0,4 × 10 000 - 0,6 × 40 000] = [10 000 ; -20 000]. Dⁿ × P⁻¹U₀ = [10 000 ; -20 000 × 0,5ⁿ]. Enfin Uₙ = P × [10 000 ; -20 000 × 0,5ⁿ] = [30 000 - 20 000 × 0,5ⁿ ; 20 000 + 20 000 × 0,5ⁿ].",
                "Contrôle : pour n = 0, on retrouve [10 000 ; 40 000] ; pour n = 1, [20 000 ; 30 000], comme le calcul direct 0,8 × 10 000 + 0,3 × 40 000 = 20 000.",
                "4. Comme 0 < 0,5 < 1, 0,5ⁿ tend vers 0 : xₙ tend vers 30 000 et yₙ vers 20 000. À long terme, 60 % de la population vit au centre et 40 % en périphérie, une répartition stable puisque M × [30 000 ; 20 000] = [30 000 ; 20 000].",
                "5. xₙ > 29 000 équivaut à 20 000 × 0,5ⁿ < 1000, soit 0,5ⁿ < 0,05, soit n > ln(0,05)/ln(0,5) ≈ 4,32 (on divise par ln(0,5) < 0, ce qui change le sens). Contrôle : 0,5⁴ = 0,0625 donne x₄ = 28 750 et 0,5⁵ = 0,03125 donne x₅ = 29 375. C'est à partir de l'année n = 5.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'étude d'une suite Uₙ₊₁ = AUₙ + B.",
            items: [
              "Traduire l'énoncé par deux relations, puis les écrire sous la forme Uₙ₊₁ = AUₙ + B.",
              "Chercher la matrice colonne L telle que L = AL + B, c'est-à-dire (I - A)L = B.",
              "Poser Vₙ = Uₙ - L et montrer que Vₙ₊₁ = AVₙ.",
              "En déduire Vₙ = AⁿV₀, puis Uₙ = Aⁿ(U₀ - L) + L.",
              "Calculer Aⁿ à l'aide de la matrice P donnée, avec Aⁿ = PDⁿP⁻¹.",
              "Étudier la limite de chaque coefficient de Uₙ et interpréter.",
            ],
          },
          quiz: [
            {
              q: "Si, pour tout n, Uₙ₊₁ = AUₙ, alors :",
              options: ["Uₙ = nAU₀", "Uₙ = U₀Aⁿ", "Uₙ = AⁿU₀", "Uₙ = Aⁿ⁺¹U₀"],
              answer: 2,
              why: "Par récurrence, Uₙ = AⁿU₀ ; la matrice carrée reste à gauche de la colonne U₀ (le produit U₀Aⁿ n'existe d'ailleurs pas).",
            },
            {
              q: "Si A = PDP⁻¹, que vaut A³ ?",
              options: ["P³D³P⁻³", "PD³P⁻¹", "3PDP⁻¹", "P⁻¹D³P"],
              answer: 1,
              why: "A³ = PDP⁻¹PDP⁻¹PDP⁻¹ et les produits P⁻¹P valent I : A³ = PD³P⁻¹.",
            },
            {
              q: "Vers quelle matrice tend Dⁿ pour D = [0,5 0 ; 0 1] ?",
              options: ["[0 0 ; 0 1]", "[0 0 ; 0 0]", "[0,5 0 ; 0 1]", "Dⁿ n'a pas de limite"],
              answer: 0,
              why: "Dⁿ = [0,5ⁿ 0 ; 0 1] et 0,5ⁿ tend vers 0.",
            },
            {
              q: "Pour la suite Uₙ₊₁ = AUₙ + B, la matrice colonne L de l'état stable vérifie :",
              options: ["AL = B", "L = A⁻¹B", "(A - I)L = B", "(I - A)L = B"],
              answer: 3,
              why: "L = AL + B équivaut à L - AL = B, soit (I - A)L = B.",
            },
            {
              q: "Les suites vérifient aₙ₊₁ = 2aₙ - bₙ et bₙ₊₁ = aₙ + 3bₙ. Quelle est la matrice A telle que Uₙ₊₁ = AUₙ ?",
              options: ["[2 1 ; -1 3]", "[2 -1 ; 1 3]", "[2 -1 ; 3 1]", "[1 3 ; 2 -1]"],
              answer: 1,
              why: "Chaque ligne de A contient les coefficients de aₙ et de bₙ dans l'expression correspondante.",
            },
          ],
          trap: "Écrire (PDP⁻¹)ⁿ = PⁿDⁿP⁻ⁿ, ou écrire Uₙ = U₀Aⁿ en plaçant la matrice du mauvais côté.",
          method: "Contrôlez toujours votre formule de Uₙ (ou de Aⁿ) pour n = 0 et n = 1 en la comparant au calcul direct : c'est rapide et cela détecte presque toutes les erreurs.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chaines-markov',
          title: 'Chaînes de Markov et état stable',
          minutes: 35,
          objectives: [
            "Modéliser une évolution aléatoire par une chaîne de Markov : graphe probabiliste et matrice de transition.",
            "Calculer la distribution πₙ à l'aide de la relation πₙ₊₁ = πₙP, puis πₙ = π₀Pⁿ.",
            "Déterminer une distribution invariante en résolvant π = πP avec la somme des coefficients égale à 1.",
            "Étudier la convergence de la distribution d'une chaîne à deux états et interpréter l'état stable.",
          ],
          course: [
            {
              heading: "Chaîne de Markov et matrice de transition",
              paragraphs: [
                "On observe un système qui, à chaque étape n, se trouve dans l'un des états d'un ensemble fini E = {1 ; 2 ; ... ; N}. On note Xₙ l'état à l'étape n, qui est une variable aléatoire. On dit que (Xₙ) est une chaîne de Markov homogène si la probabilité de passer de l'état i à l'état j ne dépend ni de n, ni des états occupés avant l'étape n : elle ne dépend que de l'état présent. On la note pᵢⱼ, probabilité conditionnelle de l'événement Xₙ₊₁ = j sachant Xₙ = i.",
                "La matrice de transition est P = (pᵢⱼ), carrée d'ordre N. Ses coefficients sont des probabilités, et la somme des coefficients de chaque ligne vaut 1, puisque, partant de l'état i, le système va forcément dans l'un des états. La chaîne se représente par un graphe probabiliste : un sommet par état, un arc de i vers j pondéré par pᵢⱼ lorsque pᵢⱼ > 0. Ces chaînes portent le nom du mathématicien russe Andreï Markov (1856-1922), qui les a étudiées au début du XXᵉ siècle.",
                "Exemple (données fictives) : s'il fait beau un jour, il fait beau le lendemain avec la probabilité 0,8 ; s'il pleut, il fait beau le lendemain avec la probabilité 0,4. Avec l'état 1 = beau et l'état 2 = pluie, P = [0,8 0,2 ; 0,4 0,6]. La ligne 1 décrit ce qui suit un jour de beau temps, la ligne 2 ce qui suit un jour de pluie.",
              ],
              box: { label: "Définition", text: "Matrice de transition : pᵢⱼ = probabilité de passer de l'état i (ligne) à l'état j (colonne) en une étape. Chaque ligne a pour somme 1." },
            },
            {
              heading: "L'évolution de la distribution",
              paragraphs: [
                "La distribution à l'étape n est la matrice ligne πₙ = [P(Xₙ = 1) ... P(Xₙ = N)], dont les coefficients sont positifs et de somme 1. D'après la formule des probabilités totales, P(Xₙ₊₁ = j) est la somme, pour i allant de 1 à N, des produits P(Xₙ = i) × pᵢⱼ : c'est la ligne πₙ multipliée par la colonne j de P, ce qui s'écrit πₙ₊₁ = πₙP. Par récurrence, πₙ = π₀Pⁿ. Ici la distribution est une ligne, placée à gauche de P.",
                "Le coefficient (i ; j) de Pⁿ est la probabilité d'être dans l'état j après n étapes, en partant de l'état i. Dans l'exemple météorologique, si le jour 0 est beau, π₀ = [1 0], puis π₁ = π₀P = [0,8 0,2] et π₂ = π₁P = [0,8 × 0,8 + 0,2 × 0,4, 0,8 × 0,2 + 0,2 × 0,6] = [0,72 0,28]. La probabilité qu'il fasse beau deux jours plus tard est 0,72.",
              ],
              box: { label: "Propriété", text: "πₙ₊₁ = πₙP et πₙ = π₀Pⁿ (πₙ est une matrice ligne). Le coefficient (i ; j) de Pⁿ est la probabilité de passer de i à j en n étapes." },
            },
            {
              heading: "Distribution invariante et chaînes à deux états",
              paragraphs: [
                "Une distribution π est invariante (on parle aussi d'état stable) si π = πP : si le système suit cette distribution à une étape, il la suit encore à l'étape suivante. Pour la trouver, on résout π = πP en ajoutant la condition que la somme des coefficients vaut 1. Dans l'exemple, avec π = [x 1 - x] : x = 0,8x + 0,4(1 - x), soit 0,6x = 0,4 et x = 2/3. La distribution invariante est [2/3 1/3].",
                "Chaîne à deux états : P = [1 - a a ; b 1 - b], avec a et b dans [0 ; 1]. En notant pₙ = P(Xₙ = 1), on a pₙ₊₁ = (1 - a)pₙ + b(1 - pₙ) = (1 - a - b)pₙ + b. C'est une suite arithmético-géométrique, de point fixe ℓ = b/(a + b) lorsque a + b > 0, et pₙ - ℓ = (1 - a - b)ⁿ(p₀ - ℓ).",
                "Si 0 < a + b < 2, alors -1 < 1 - a - b < 1, donc pₙ tend vers ℓ : la distribution converge vers l'unique distribution invariante [b/(a + b) a/(a + b)], quelle que soit la distribution initiale. Si a = b = 1, P = [0 1 ; 1 0] : le système alterne entre les deux états et la distribution ne converge pas (sauf si l'on part de [0,5 0,5]).",
              ],
              box: { label: "Théorème", text: "Pour P = [1 - a a ; b 1 - b] avec 0 < a + b < 2, πₙ converge vers [b/(a + b) a/(a + b)], qui est l'unique distribution invariante, quelle que soit π₀." },
            },
            {
              heading: "Plus de deux états et interprétation",
              paragraphs: [
                "Pour une chaîne à trois états ou plus, on admet le résultat suivant : si une puissance de P a tous ses coefficients strictement positifs, alors il existe une unique distribution invariante π, et πₙ converge vers π quelle que soit la distribution initiale. En pratique, on calcule π en résolvant le système π = πP avec la condition de somme, ou à la calculatrice.",
                "L'état stable s'interprète de deux façons : c'est la probabilité limite d'être dans chaque état, et c'est aussi, à long terme, la proportion du temps passé dans chaque état. Dans l'exemple, il fait beau environ deux jours sur trois sur une longue période. Les chaînes de Markov modélisent la diffusion d'un virus, la fidélité de clients, la marche aléatoire d'un robot ou d'un internaute qui suit des liens au hasard.",
              ],
              box: { label: "À retenir", text: "Distribution invariante : π = πP et somme des coefficients égale à 1. Si une puissance de P n'a que des coefficients strictement positifs, πₙ converge vers π, quelle que soit π₀ (admis)." },
            },
          ],
          keyPoints: [
            "pᵢⱼ = probabilité de passer de i à j ; chaque ligne de P a pour somme 1.",
            "La distribution πₙ est une matrice ligne : πₙ₊₁ = πₙP et πₙ = π₀Pⁿ.",
            "Le coefficient (i ; j) de Pⁿ est la probabilité d'aller de i à j en n étapes.",
            "Distribution invariante : π = πP, avec la somme des coefficients égale à 1.",
            "Deux états, P = [1 - a a ; b 1 - b] avec 0 < a + b < 2 : πₙ tend vers [b/(a + b) a/(a + b)].",
            "Si une puissance de P a tous ses coefficients strictement positifs, πₙ converge vers l'unique état stable (admis).",
          ],
          example: {
            statement: "Chaque semaine, un client achète la marque A ou la marque B (données fictives). Un client de A reste fidèle à A avec la probabilité 0,7 ; un client de B passe à A avec la probabilité 0,2. La semaine 0, la répartition est π₀ = [0,5 0,5]. 1. Donner la matrice de transition P. 2. Calculer π₁ et π₂. 3. Déterminer la distribution invariante. 4. Que peut-on dire de πₙ à long terme ?",
            solution: [
              "1. État 1 = marque A, état 2 = marque B. Ligne 1 : [0,7 0,3] ; ligne 2 : [0,2 0,8]. Donc P = [0,7 0,3 ; 0,2 0,8], et chaque ligne a bien pour somme 1.",
              "2. π₁ = π₀P = [0,5 × 0,7 + 0,5 × 0,2, 0,5 × 0,3 + 0,5 × 0,8] = [0,45 0,55].",
              "π₂ = π₁P = [0,45 × 0,7 + 0,55 × 0,2, 0,45 × 0,3 + 0,55 × 0,8] = [0,315 + 0,11, 0,135 + 0,44] = [0,425 0,575].",
              "3. On cherche π = [x 1 - x] avec π = πP. La première coordonnée donne x = 0,7x + 0,2(1 - x), soit x = 0,5x + 0,2, d'où x = 0,4. La distribution invariante est [0,4 0,6].",
              "4. Ici a = 0,3 et b = 0,2, donc 0 < a + b = 0,5 < 2 : πₙ converge vers [b/(a + b) a/(a + b)] = [0,4 0,6]. À long terme, 40 % des achats concernent la marque A.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une chaîne de Markov à deux états 1 et 2 a pour graphe probabiliste : de 1 vers 1 avec la probabilité 0,9, de 1 vers 2 avec 0,1, de 2 vers 1 avec 0,5 et de 2 vers 2 avec 0,5. 1. Écrire la matrice de transition P. 2. Avec π₀ = [1 0], calculer π₁ et π₂. 3. Déterminer la distribution invariante.",
              hint: "La ligne i de P contient les probabilités des arcs qui partent de l'état i. Pour l'état stable, posez π = [x 1 - x].",
              solution: [
                "1. P = [0,9 0,1 ; 0,5 0,5].",
                "2. π₁ = π₀P = [0,9 0,1] (c'est la première ligne de P). π₂ = π₁P = [0,9 × 0,9 + 0,1 × 0,5, 0,9 × 0,1 + 0,1 × 0,5] = [0,81 + 0,05, 0,09 + 0,05] = [0,86 0,14].",
                "3. x = 0,9x + 0,5(1 - x) donne x = 0,4x + 0,5, soit 0,6x = 0,5 et x = 5/6. La distribution invariante est [5/6 1/6].",
                "Contrôle avec la formule : a = 0,1 et b = 0,5, b/(a + b) = 0,5/0,6 = 5/6.",
              ],
            },
            {
              level: 2,
              statement: "Un robot se déplace entre trois salles A, B et C (données fictives). À chaque étape, il quitte la salle où il se trouve et choisit au hasard, de façon équiprobable, l'une des deux autres. 1. Écrire la matrice de transition P (états A, B, C dans cet ordre). 2. Le robot part de A. Calculer π₁ et π₂. 3. Calculer P² et vérifier que tous ses coefficients sont strictement positifs. 4. Vérifier que π = [1/3 1/3 1/3] est invariante et conclure sur le comportement à long terme.",
              hint: "La diagonale de P est nulle, puisque le robot change toujours de salle. Pour P², chaque coefficient est une somme de produits ligne par colonne.",
              solution: [
                "1. P = [0 0,5 0,5 ; 0,5 0 0,5 ; 0,5 0,5 0].",
                "2. π₀ = [1 0 0], donc π₁ = [0 0,5 0,5] (première ligne de P). π₂ = π₁P = [0,5 × 0,5 + 0,5 × 0,5, 0,5 × 0,5, 0,5 × 0,5] = [0,5 0,25 0,25].",
                "3. Coefficient (1 ; 1) de P² : 0 × 0 + 0,5 × 0,5 + 0,5 × 0,5 = 0,5 ; coefficient (1 ; 2) : 0 × 0,5 + 0,5 × 0 + 0,5 × 0,5 = 0,25. Par symétrie, P² = [0,5 0,25 0,25 ; 0,25 0,5 0,25 ; 0,25 0,25 0,5] : tous les coefficients sont strictement positifs.",
                "4. πP = [1/3 × 0,5 + 1/3 × 0,5, 1/3 × 0,5 + 1/3 × 0,5, 1/3 × 0,5 + 1/3 × 0,5] = [1/3 1/3 1/3] = π, et la somme vaut 1 : π est invariante.",
                "Comme une puissance de P (ici P²) a tous ses coefficients strictement positifs, πₙ converge vers [1/3 1/3 1/3] : à long terme, le robot passe autant de temps dans chaque salle.",
              ],
            },
            {
              level: 3,
              statement: "Défi (dans l'esprit d'un problème de bac). Un graphe non orienté a pour sommets 1, 2, 3, 4 et pour arêtes 1-2, 1-3, 2-3 et 3-4. Un pion se déplace sur ce graphe : à chaque étape, il quitte son sommet et va vers l'un des sommets adjacents, choisi de façon équiprobable. 1. Donner le degré de chaque sommet et la matrice de transition P. 2. Le pion part du sommet 4 : π₀ = [0 0 0 1]. Calculer π₁ et π₂. 3. Vérifier que π = [0,25 0,25 0,375 0,125] est une distribution invariante. Comparer ses coefficients aux degrés des sommets. 4. On admet que tous les coefficients de P⁴ sont strictement positifs. Que peut-on en déduire ? Interpréter. 5. Pourquoi le résultat de la question 4 ne pouvait-il pas se déduire de P³, dont le coefficient (4 ; 4) est nul ?",
              hint: "Depuis un sommet de degré d, chacun des d voisins est choisi avec la probabilité 1/d. Pour la question 3, calculez πP coordonnée par coordonnée.",
              solution: [
                "1. Degrés : 1 : 2 ; 2 : 2 ; 3 : 3 ; 4 : 1. Depuis 1, le pion va en 2 ou 3 avec la probabilité 1/2 ; depuis 2, en 1 ou 3 avec 1/2 ; depuis 3, en 1, 2 ou 4 avec 1/3 ; depuis 4, en 3 avec la probabilité 1. P = [0 1/2 1/2 0 ; 1/2 0 1/2 0 ; 1/3 1/3 0 1/3 ; 0 0 1 0].",
                "2. π₁ = π₀P = [0 0 1 0] (quatrième ligne de P) : le pion est sûrement en 3. π₂ = π₁P = [1/3 1/3 0 1/3] (troisième ligne de P).",
                "3. πP : première coordonnée 0,25 × 0 + 0,25 × 1/2 + 0,375 × 1/3 + 0,125 × 0 = 0,125 + 0,125 = 0,25 ; deuxième : 0,25 × 1/2 + 0,375 × 1/3 = 0,25 ; troisième : 0,25 × 1/2 + 0,25 × 1/2 + 0,125 × 1 = 0,375 ; quatrième : 0,375 × 1/3 = 0,125. Donc πP = π, et 0,25 + 0,25 + 0,375 + 0,125 = 1 : π est invariante.",
                "Les degrés sont 2, 2, 3, 1, de somme 8, et π = [2/8 2/8 3/8 1/8] : chaque coefficient est proportionnel au degré du sommet.",
                "4. Une puissance de P a tous ses coefficients strictement positifs : la distribution invariante est unique et πₙ converge vers π quelle que soit π₀. À long terme, le pion passe 37,5 % du temps en 3 et seulement 12,5 % en 4, quel que soit son point de départ.",
                "5. Le résultat admis demande qu'une puissance de P ait tous ses coefficients strictement positifs. P³ ne convient pas (depuis 4, on ne peut pas revenir en 4 en 3 étapes : 4 → 3 → ? → 4 exigerait de passer de 3 à 3), mais P⁴ convient, et une seule puissance suffit.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Chaînes de Markov.",
            statements: [
              { text: "Dans une matrice de transition, la somme des coefficients de chaque ligne vaut 1.", true: true, why: "Partant de l'état i, le système va forcément dans l'un des états : la ligne i est une loi de probabilité." },
              { text: "Si πₙ est la distribution (matrice ligne), alors πₙ₊₁ = Pπₙ.", true: false, why: "La distribution est une ligne placée à gauche : πₙ₊₁ = πₙP." },
              { text: "Le coefficient (i ; j) de Pⁿ est la probabilité de passer de l'état i à l'état j en n étapes.", true: true, why: "C'est la conséquence de πₙ = π₀Pⁿ avec π₀ concentrée sur l'état i." },
              { text: "Une distribution invariante vérifie π = πP et la somme de ses coefficients vaut 1.", true: true, why: "Sans la condition de somme, la ligne nulle ou tout multiple de π conviendrait aussi." },
              { text: "Pour toute chaîne de Markov, πₙ converge, quelle que soit π₀.", true: false, why: "Avec P = [0 1 ; 1 0] et π₀ = [1 0], la distribution alterne entre [0 1] et [1 0]." },
              { text: "Dans une chaîne de Markov, l'état suivant dépend de tout le passé du système.", true: false, why: "Il ne dépend que de l'état présent : c'est la propriété qui définit une chaîne de Markov." },
              { text: "Pour P = [0,8 0,2 ; 0,4 0,6], la distribution invariante est [2/3 1/3].", true: true, why: "b/(a + b) = 0,4/0,6 = 2/3, avec a = 0,2 et b = 0,4." },
            ],
          },
          quiz: [
            {
              q: "Une ligne d'une matrice de transition est [0,3 x 0,5]. Que vaut x ?",
              options: ["0,5", "0,2", "0,7", "0,8"],
              answer: 1,
              why: "La somme d'une ligne vaut 1 : x = 1 - 0,3 - 0,5 = 0,2.",
            },
            {
              q: "Avec P = [0,6 0,4 ; 0,1 0,9] et π₀ = [1 0], que vaut π₁ ?",
              options: ["[0,6 0,1]", "[0,1 0,9]", "[0,6 0,4]", "[0,4 0,6]"],
              answer: 2,
              why: "π₁ = π₀P est la première ligne de P, puisque le système part de l'état 1.",
            },
            {
              q: "Quelle est la distribution invariante de P = [0,5 0,5 ; 0,25 0,75] ?",
              options: ["[1/2 1/2]", "[1/3 2/3]", "[2/3 1/3]", "[1/4 3/4]"],
              answer: 1,
              why: "x = 0,5x + 0,25(1 - x) donne 0,75x = 0,25, donc x = 1/3 ; ou b/(a + b) = 0,25/0,75 = 1/3.",
            },
            {
              q: "Pour P = [1 - a a ; b 1 - b] avec 0 < a + b < 2, vers quoi tend P(Xₙ = 1) ?",
              options: ["a/(a + b)", "1 - a", "a + b", "b/(a + b)"],
              answer: 3,
              why: "Le point fixe de pₙ₊₁ = (1 - a - b)pₙ + b est b/(a + b), et |1 - a - b| < 1 assure la convergence.",
            },
            {
              q: "La probabilité de passer de l'état 1 à l'état 2 en exactement 3 étapes est :",
              options: ["le coefficient (1 ; 2) de P³", "3 fois le coefficient (1 ; 2) de P", "le cube du coefficient (1 ; 2) de P", "le coefficient (2 ; 1) de P³"],
              answer: 0,
              why: "Le coefficient (i ; j) de Pⁿ donne la probabilité d'aller de i à j en n étapes, en tenant compte de tous les états intermédiaires.",
            },
          ],
          trap: "Écrire πₙ₊₁ = Pπₙ au lieu de πₙP, ou chercher la distribution invariante sans la condition « somme des coefficients égale à 1 », ce qui laisse une infinité de solutions.",
          method: "Vérifiez en premier que chaque ligne de votre matrice de transition a pour somme 1, puis que chaque distribution calculée a aussi pour somme 1 : ces deux contrôles éliminent la plupart des erreurs de lecture.",
        },
      ],
    },
  ],
}
