import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-tle',
  chapters: [
    /* ================================================================== */
    /* SUITES : RÉCURRENCE ET LIMITES                                       */
    /* ================================================================== */
    {
      id: 'suites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'raisonnement-par-recurrence',
          title: 'Le raisonnement par récurrence',
          minutes: 30,
          objectives: [
            "Comprendre le principe du raisonnement par récurrence : initialisation, hérédité, conclusion.",
            "Rédiger une démonstration par récurrence complète, en nommant la propriété P(n).",
            "Démontrer par récurrence une égalité, une inégalité (dont l'inégalité de Bernoulli) ou un encadrement d'une suite définie par récurrence.",
          ],
          course: [
            {
              heading: "Le principe : une échelle infinie",
              paragraphs: [
                "Beaucoup de propriétés dépendent d'un entier naturel n : « uₙ = 2ⁿ + 1 », « 4ⁿ - 1 est divisible par 3 », « 0 ≤ uₙ ≤ 4 ». On ne peut pas les vérifier pour toutes les valeurs de n une par une, puisqu'il y en a une infinité. Le raisonnement par récurrence permet de les démontrer pour tous les entiers à partir d'un rang n₀, en deux étapes seulement.",
                "L'image classique est celle d'une échelle infinie. Si l'on peut monter sur le premier barreau (initialisation) et si, depuis n'importe quel barreau, on peut monter sur le suivant (hérédité), alors on peut atteindre tous les barreaux. De même, une file de dominos tombe entièrement si le premier tombe et si la chute de chaque domino entraîne celle du suivant.",
                "Ce principe est un axiome de la construction des entiers naturels : il n'est pas démontré, il est admis comme l'une des propriétés fondamentales de ℕ. Toute la force du raisonnement vient de ce que l'hérédité est démontrée pour un entier n quelconque, et non pour un exemple.",
              ],
              box: { label: "Propriété", text: "Soit P(n) une propriété dépendant d'un entier naturel n et n₀ un entier. Si P(n₀) est vraie (initialisation) et si, pour tout entier n ≥ n₀, P(n) vraie entraîne P(n + 1) vraie (hérédité), alors P(n) est vraie pour tout entier n ≥ n₀." },
            },
            {
              heading: "Rédiger une démonstration par récurrence",
              paragraphs: [
                "Une rédaction attendue au bac comporte toujours quatre éléments. On énonce d'abord la propriété : « Pour tout entier naturel n, on note P(n) la propriété : uₙ = 2ⁿ + 1 ». Puis l'initialisation : on vérifie P(n₀) par un calcul explicite. Puis l'hérédité : « Soit n un entier naturel fixé. On suppose P(n) vraie (hypothèse de récurrence) et on montre que P(n + 1) est vraie. » Enfin la conclusion : « P(n₀) est vraie et P est héréditaire, donc par récurrence P(n) est vraie pour tout n ≥ n₀. »",
                "Exemple : la suite (uₙ) est définie par u₀ = 2 et uₙ₊₁ = 2uₙ - 1. Montrons que uₙ = 2ⁿ + 1 pour tout n de ℕ. Initialisation : 2⁰ + 1 = 2 = u₀, donc P(0) est vraie. Hérédité : supposons uₙ = 2ⁿ + 1 pour un entier n fixé. Alors uₙ₊₁ = 2uₙ - 1 = 2(2ⁿ + 1) - 1 = 2ⁿ⁺¹ + 2 - 1 = 2ⁿ⁺¹ + 1, ce qui est P(n + 1). Conclusion : pour tout n de ℕ, uₙ = 2ⁿ + 1.",
                "Dans l'hérédité, le travail consiste toujours à partir de ce que l'on veut obtenir au rang n + 1 et à y faire apparaître le rang n, pour pouvoir utiliser l'hypothèse de récurrence. Si l'hypothèse de récurrence n'est jamais utilisée, c'est le signe que la démonstration ne fonctionne pas comme prévu.",
              ],
              box: { label: "Repère", text: "Les quatre temps : 1. énoncer P(n) ; 2. initialisation au rang n₀ ; 3. hérédité : « soit n ≥ n₀ fixé, supposons P(n) vraie, montrons P(n + 1) » ; 4. conclusion qui cite les deux étapes." },
            },
            {
              heading: "Égalités, divisibilité, inégalités",
              paragraphs: [
                "La récurrence démontre des formules de sommes. Par exemple, pour tout n ≥ 1, 1 + 2 + ... + n = n(n + 1)/2. Hérédité : si la formule est vraie au rang n, alors 1 + 2 + ... + n + (n + 1) = n(n + 1)/2 + (n + 1) = (n + 1)(n + 2)/2, ce qui est la formule au rang n + 1.",
                "Elle démontre aussi des résultats de divisibilité. Pour montrer que 4ⁿ - 1 est un multiple de 3, on écrit dans l'hérédité 4ⁿ⁺¹ - 1 = 4 × 4ⁿ - 1 = 4(4ⁿ - 1) + 3. Si 4ⁿ - 1 = 3k avec k entier, alors 4ⁿ⁺¹ - 1 = 12k + 3 = 3(4k + 1), qui est bien un multiple de 3.",
                "Enfin, elle démontre des inégalités. L'inégalité de Bernoulli affirme que pour tout réel a ≥ 0 et tout entier n ≥ 0, (1 + a)ⁿ ≥ 1 + na. Initialisation : (1 + a)⁰ = 1 ≥ 1 + 0. Hérédité : si (1 + a)ⁿ ≥ 1 + na, on multiplie par 1 + a, qui est positif : (1 + a)ⁿ⁺¹ ≥ (1 + na)(1 + a) = 1 + (n + 1)a + na² ≥ 1 + (n + 1)a, car na² ≥ 0.",
              ],
              box: { label: "Propriété", text: "Inégalité de Bernoulli : pour tout réel a ≥ 0 et tout entier naturel n, (1 + a)ⁿ ≥ 1 + na. Elle servira à montrer que qⁿ tend vers +∞ lorsque q > 1." },
            },
            {
              heading: "Suites définies par récurrence et fonction croissante",
              paragraphs: [
                "Lorsque uₙ₊₁ = f(uₙ) avec f croissante sur un intervalle I qui contient tous les termes, la récurrence permet d'encadrer la suite et d'étudier son sens de variation. L'idée : une fonction croissante conserve l'ordre, donc si a ≤ uₙ ≤ uₙ₊₁ ≤ b, alors f(a) ≤ f(uₙ) ≤ f(uₙ₊₁) ≤ f(b), c'est-à-dire f(a) ≤ uₙ₊₁ ≤ uₙ₊₂ ≤ f(b).",
                "Par exemple, avec u₀ = 1 et uₙ₊₁ = 0,5uₙ + 3, la fonction f(x) = 0,5x + 3 est croissante sur ℝ et f(6) = 6. On montre par récurrence la propriété P(n) : 1 ≤ uₙ ≤ uₙ₊₁ ≤ 6. On en déduit d'un seul coup que la suite est croissante et majorée par 6.",
                "Attention : une récurrence dont l'hérédité est vraie mais l'initialisation fausse ne prouve rien. Pour la propriété « 10ⁿ + 1 est divisible par 9 », l'hérédité fonctionne (10ⁿ⁺¹ + 1 = 10(10ⁿ + 1) - 9), mais la propriété n'est vraie pour aucun n : 10⁰ + 1 = 2, 10 + 1 = 11, 101... ne sont pas des multiples de 9.",
              ],
              box: { label: "À retenir", text: "L'initialisation et l'hérédité sont toutes deux indispensables. Si uₙ₊₁ = f(uₙ) avec f croissante, on démontre par récurrence un encadrement du type a ≤ uₙ ≤ uₙ₊₁ ≤ b en appliquant f aux trois inégalités." },
            },
          ],
          keyPoints: [
            "Récurrence = initialisation (P(n₀) vraie) + hérédité (P(n) vraie entraîne P(n + 1) vraie), puis conclusion.",
            "Dans l'hérédité, n est un entier fixé quelconque et l'on suppose P(n) : c'est l'hypothèse de récurrence, qu'il faut utiliser.",
            "On part de l'expression au rang n + 1 et on y fait apparaître le rang n.",
            "Inégalité de Bernoulli : pour a ≥ 0 et n entier naturel, (1 + a)ⁿ ≥ 1 + na.",
            "Si uₙ₊₁ = f(uₙ) avec f croissante, on applique f à l'encadrement a ≤ uₙ ≤ uₙ₊₁ ≤ b.",
            "Une hérédité sans initialisation ne prouve rien (exemple : 10ⁿ + 1 divisible par 9).",
          ],
          example: {
            statement: "Démontrer que, pour tout entier naturel n, 1 + 3 + 5 + ... + (2n + 1) = (n + 1)².",
            solution: [
              "Pour tout entier naturel n, on note P(n) la propriété : 1 + 3 + ... + (2n + 1) = (n + 1)².",
              "Initialisation : pour n = 0, la somme se réduit à 1 et (0 + 1)² = 1. P(0) est vraie.",
              "Hérédité : soit n un entier naturel fixé. On suppose P(n) vraie, c'est-à-dire 1 + 3 + ... + (2n + 1) = (n + 1)².",
              "Au rang n + 1, le dernier terme est 2(n + 1) + 1 = 2n + 3. Donc 1 + 3 + ... + (2n + 1) + (2n + 3) = (n + 1)² + 2n + 3 d'après l'hypothèse de récurrence.",
              "Or (n + 1)² + 2n + 3 = n² + 2n + 1 + 2n + 3 = n² + 4n + 4 = (n + 2)². C'est exactement P(n + 1).",
              "Conclusion : P(0) est vraie et la propriété est héréditaire, donc par récurrence, pour tout entier naturel n, 1 + 3 + ... + (2n + 1) = (n + 1)².",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La suite (uₙ) est définie par u₀ = 1 et, pour tout entier naturel n, uₙ₊₁ = uₙ + 2n + 3. Démontrer par récurrence que, pour tout entier naturel n, uₙ = (n + 1)².",
              hint: "Dans l'hérédité, remplacez uₙ par (n + 1)² dans la relation de récurrence, développez, puis reconnaissez une identité remarquable.",
              solution: [
                "On note P(n) : uₙ = (n + 1)².",
                "Initialisation : u₀ = 1 et (0 + 1)² = 1, donc P(0) est vraie.",
                "Hérédité : soit n un entier naturel fixé tel que uₙ = (n + 1)². Alors uₙ₊₁ = uₙ + 2n + 3 = (n + 1)² + 2n + 3 = n² + 2n + 1 + 2n + 3 = n² + 4n + 4.",
                "Or n² + 4n + 4 = (n + 2)² = ((n + 1) + 1)². Donc P(n + 1) est vraie.",
                "Conclusion : par récurrence, pour tout entier naturel n, uₙ = (n + 1)².",
              ],
            },
            {
              level: 2,
              statement: "Démontrer par récurrence que, pour tout entier naturel n, 4ⁿ - 1 est divisible par 3.",
              hint: "Écrivez 4ⁿ⁺¹ - 1 = 4 × 4ⁿ - 1, puis faites apparaître 4ⁿ - 1 en ajoutant et retranchant ce qu'il faut.",
              solution: [
                "On note P(n) : « 4ⁿ - 1 est divisible par 3 », c'est-à-dire qu'il existe un entier k tel que 4ⁿ - 1 = 3k.",
                "Initialisation : 4⁰ - 1 = 0 = 3 × 0, donc P(0) est vraie.",
                "Hérédité : soit n un entier naturel fixé tel que 4ⁿ - 1 = 3k avec k entier. Alors 4ⁿ⁺¹ - 1 = 4 × 4ⁿ - 1 = 4(4ⁿ - 1) + 4 - 1 = 4(4ⁿ - 1) + 3.",
                "D'après l'hypothèse de récurrence, 4ⁿ⁺¹ - 1 = 4 × 3k + 3 = 3(4k + 1). Comme 4k + 1 est un entier, 4ⁿ⁺¹ - 1 est divisible par 3 : P(n + 1) est vraie.",
                "Conclusion : par récurrence, 4ⁿ - 1 est divisible par 3 pour tout entier naturel n (vérification : 4 - 1 = 3, 16 - 1 = 15, 64 - 1 = 63).",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On considère la fonction f définie sur [0 ; +∞[ par f(x) = √(3x + 4) et la suite (uₙ) définie par u₀ = 0 et, pour tout entier naturel n, uₙ₊₁ = f(uₙ). 1. Calculer u₁ et justifier que f est croissante sur [0 ; +∞[. 2. Démontrer par récurrence que, pour tout entier naturel n, 0 ≤ uₙ ≤ uₙ₊₁ ≤ 4. 3. Que peut-on en déduire pour le sens de variation de la suite (uₙ) ?",
              hint: "Pour la question 2, appliquez la fonction croissante f aux trois inégalités de l'hypothèse de récurrence, et calculez f(0) et f(4).",
              solution: [
                "1. u₁ = f(0) = √4 = 2. La fonction x ↦ 3x + 4 est croissante et positive sur [0 ; +∞[ et la fonction racine carrée est croissante sur [0 ; +∞[, donc f est croissante sur [0 ; +∞[ (on peut aussi dériver : f'(x) = 3/(2√(3x + 4)) > 0).",
                "2. On note P(n) : 0 ≤ uₙ ≤ uₙ₊₁ ≤ 4. Initialisation : u₀ = 0 et u₁ = 2, et l'on a bien 0 ≤ 0 ≤ 2 ≤ 4. P(0) est vraie.",
                "Hérédité : soit n un entier naturel fixé tel que 0 ≤ uₙ ≤ uₙ₊₁ ≤ 4. Comme f est croissante sur [0 ; +∞[, elle conserve l'ordre : f(0) ≤ f(uₙ) ≤ f(uₙ₊₁) ≤ f(4).",
                "Or f(0) = 2, f(uₙ) = uₙ₊₁, f(uₙ₊₁) = uₙ₊₂ et f(4) = √16 = 4. On obtient 2 ≤ uₙ₊₁ ≤ uₙ₊₂ ≤ 4, donc a fortiori 0 ≤ uₙ₊₁ ≤ uₙ₊₂ ≤ 4 : P(n + 1) est vraie.",
                "Conclusion : par récurrence, pour tout entier naturel n, 0 ≤ uₙ ≤ uₙ₊₁ ≤ 4.",
                "3. Pour tout n, uₙ ≤ uₙ₊₁ : la suite (uₙ) est croissante. Elle est de plus majorée par 4 (et minorée par 0).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une démonstration par récurrence.",
            items: [
              "Énoncer la propriété P(n) pour tout entier n ≥ n₀.",
              "Initialisation : vérifier par le calcul que P(n₀) est vraie.",
              "Fixer un entier n ≥ n₀ et supposer P(n) vraie (hypothèse de récurrence).",
              "Écrire l'expression au rang n + 1 et y faire apparaître le rang n.",
              "Utiliser l'hypothèse de récurrence pour obtenir P(n + 1).",
              "Conclure : P(n) est vraie pour tout entier n ≥ n₀.",
            ],
          },
          quiz: [
            {
              q: "Dans l'étape d'hérédité, que suppose-t-on ?",
              options: ["Que P(n) est vraie pour tout n", "Que P(n) est vraie pour un entier n fixé", "Que P(n + 1) est vraie", "Que P(n₀) est fausse"],
              answer: 1,
              why: "On fixe un entier n quelconque et on suppose P(n) vraie pour ce n seulement. Supposer P(n) pour tout n reviendrait à supposer ce que l'on veut démontrer.",
            },
            {
              q: "Une propriété est héréditaire mais fausse au rang 0. Que peut-on dire ?",
              options: ["Elle est vraie à partir du rang 1", "Elle est fausse pour tout n", "La récurrence ne permet rien de conclure", "Elle est vraie pour tout n"],
              answer: 2,
              why: "Sans initialisation, la récurrence ne démontre rien. La propriété peut être vraie à partir d'un autre rang, ou fausse partout, comme « 10ⁿ + 1 divisible par 9 ».",
            },
            {
              q: "u₀ = 3 et uₙ₊₁ = 2uₙ. Quelle formule démontre-t-on par récurrence ?",
              options: ["uₙ = 3 × 2ⁿ", "uₙ = 2 × 3ⁿ", "uₙ = 3 + 2n", "uₙ = 6ⁿ"],
              answer: 0,
              why: "u₀ = 3 = 3 × 2⁰ et, si uₙ = 3 × 2ⁿ, alors uₙ₊₁ = 2 × 3 × 2ⁿ = 3 × 2ⁿ⁺¹ : c'est une suite géométrique de raison 2.",
            },
            {
              q: "Que donne l'inégalité de Bernoulli pour a = 0,1 et n = 20 ?",
              options: ["1,1²⁰ ≤ 3", "1,1²⁰ ≥ 2", "1,1²⁰ ≥ 3", "1,1²⁰ = 3"],
              answer: 2,
              why: "(1 + a)ⁿ ≥ 1 + na donne 1,1²⁰ ≥ 1 + 20 × 0,1 = 3. (En réalité 1,1²⁰ ≈ 6,7.)",
            },
            {
              q: "uₙ₊₁ = f(uₙ) avec f croissante, et l'on sait que 1 ≤ uₙ ≤ 5. Que peut-on écrire ?",
              options: ["f(1) ≥ uₙ₊₁ ≥ f(5)", "1 ≤ uₙ₊₁ ≤ 5", "uₙ₊₁ ≥ uₙ", "f(1) ≤ uₙ₊₁ ≤ f(5)"],
              answer: 3,
              why: "Une fonction croissante conserve l'ordre : f(1) ≤ f(uₙ) ≤ f(5), et f(uₙ) = uₙ₊₁. On ne sait rien de plus sans calculer f(1) et f(5).",
            },
          ],
          trap: "Oublier l'initialisation, ou bien, dans l'hérédité, supposer P(n) vraie « pour tout n » : c'est supposer le résultat. L'hypothèse porte sur un entier n fixé.",
          method: "Avant de rédiger l'hérédité, écrivez au brouillon ce que vous voulez obtenir au rang n + 1, puis cherchez où faire apparaître l'expression du rang n. Vérifiez à la fin que l'hypothèse de récurrence a bien servi.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'limites-de-suites',
          title: 'Limites de suites et théorèmes de comparaison',
          minutes: 35,
          objectives: [
            "Définir une suite qui tend vers +∞, vers -∞ ou vers un réel l, et reconnaître une suite divergente.",
            "Calculer une limite à l'aide des opérations sur les limites et lever une forme indéterminée en factorisant.",
            "Déterminer la limite d'une suite géométrique (qⁿ) selon la valeur de q.",
            "Utiliser les théorèmes de comparaison et le théorème des gendarmes.",
          ],
          course: [
            {
              heading: "Limite infinie, limite finie",
              paragraphs: [
                "On dit que la suite (uₙ) tend vers +∞ si tout intervalle de la forme ]A ; +∞[ contient tous les termes de la suite à partir d'un certain rang. Autrement dit, aussi grand que soit A, les termes finissent par dépasser A et ne redescendent plus en dessous. Exemples de référence : n, n², n³, √n tendent vers +∞. On définit de même une suite qui tend vers -∞ avec les intervalles ]-∞ ; A[.",
                "On dit que la suite (uₙ) converge vers le réel l si tout intervalle ouvert contenant l contient tous les termes de la suite à partir d'un certain rang. On note lim uₙ = l. Si une suite admet une limite finie, celle-ci est unique. Exemples de référence : 1/n, 1/n², 1/√n tendent vers 0.",
                "Une suite qui ne converge pas est dite divergente. Elle peut diverger en tendant vers +∞ ou -∞, ou bien ne pas avoir de limite du tout : la suite ((-1)ⁿ), qui vaut alternativement 1 et -1, n'a pas de limite.",
              ],
              box: { label: "Définition", text: "lim uₙ = +∞ : tout intervalle ]A ; +∞[ contient tous les uₙ à partir d'un certain rang. lim uₙ = l : tout intervalle ouvert contenant l contient tous les uₙ à partir d'un certain rang. Une suite non convergente est divergente." },
            },
            {
              heading: "Opérations sur les limites et formes indéterminées",
              paragraphs: [
                "Les limites se combinent de façon intuitive : si uₙ → l et vₙ → l', alors uₙ + vₙ → l + l', uₙvₙ → ll' et, si l' ≠ 0, uₙ/vₙ → l/l'. Avec l'infini : +∞ + l = +∞, +∞ + (+∞) = +∞, l × (+∞) = +∞ si l > 0 et -∞ si l < 0, l/(±∞) = 0, et l/0 donne un infini dont le signe se lit sur le signe de l et du dénominateur.",
                "Quatre cas ne permettent pas de conclure directement : ce sont les formes indéterminées « ∞ - ∞ », « 0 × ∞ », « ∞/∞ » et « 0/0 ». Il faut alors transformer l'écriture, le plus souvent en factorisant par le terme dominant. Par exemple, n² - 3n est de la forme ∞ - ∞ ; on écrit n² - 3n = n²(1 - 3/n), et comme 1 - 3/n → 1, le produit tend vers +∞.",
                "Pour un quotient : (3n² - n + 1)/(n² + 5) est de la forme ∞/∞. On factorise en haut et en bas par n² : (3 - 1/n + 1/n²)/(1 + 5/n²), qui tend vers 3/1 = 3.",
              ],
              box: { label: "À retenir", text: "Formes indéterminées : ∞ - ∞, 0 × ∞, ∞/∞, 0/0. Pour les lever avec des polynômes ou des quotients, on factorise par le terme de plus haut degré." },
            },
            {
              heading: "Limite d'une suite géométrique",
              paragraphs: [
                "Le comportement de qⁿ dépend uniquement de q. Si q > 1, qⁿ tend vers +∞ : on le démontre avec l'inégalité de Bernoulli, en écrivant q = 1 + a avec a > 0, d'où qⁿ ≥ 1 + na, puis en comparant à 1 + na qui tend vers +∞. Si q = 1, la suite est constante égale à 1.",
                "Si -1 < q < 1, qⁿ tend vers 0. Par exemple 0,5ⁿ : 0,5 ; 0,25 ; 0,125... Si q ≤ -1, la suite (qⁿ) n'a pas de limite : ses termes changent de signe sans se rapprocher d'un réel (pour q = -2 : 1, -2, 4, -8, 16...).",
                "On en déduit la limite d'une suite géométrique uₙ = u₀ × qⁿ, et celle de sommes de termes. Par exemple, 1 + 0,5 + 0,5² + ... + 0,5ⁿ = (1 - 0,5ⁿ⁺¹)/(1 - 0,5) = 2(1 - 0,5ⁿ⁺¹), qui tend vers 2.",
              ],
              box: { label: "Propriété", text: "q > 1 : lim qⁿ = +∞. q = 1 : lim qⁿ = 1. -1 < q < 1 : lim qⁿ = 0. q ≤ -1 : (qⁿ) n'a pas de limite." },
            },
            {
              heading: "Théorèmes de comparaison et des gendarmes",
              paragraphs: [
                "Théorème de comparaison : si, à partir d'un certain rang, uₙ ≤ vₙ et si lim uₙ = +∞, alors lim vₙ = +∞. Une suite plus grande qu'une suite qui tend vers +∞ est poussée vers +∞. De même, si vₙ ≤ uₙ à partir d'un certain rang et lim uₙ = -∞, alors lim vₙ = -∞. Exemple : n + (-1)ⁿ ≥ n - 1 et n - 1 → +∞, donc n + (-1)ⁿ → +∞.",
                "Théorème des gendarmes (ou d'encadrement) : si, à partir d'un certain rang, vₙ ≤ uₙ ≤ wₙ et si (vₙ) et (wₙ) convergent vers la même limite l, alors (uₙ) converge vers l. Les deux suites extérieures « escortent » uₙ vers l. Exemple : pour n ≥ 1, -1/n ≤ cos(n)/n ≤ 1/n, et ±1/n → 0, donc cos(n)/n → 0.",
                "Ces théorèmes sont indispensables lorsque la suite contient une expression qui oscille (comme (-1)ⁿ, cos n ou sin n) : on ne peut pas calculer sa limite par les opérations, mais on peut l'encadrer, puisque -1 ≤ cos n ≤ 1.",
              ],
              box: { label: "Théorème", text: "Si vₙ ≤ uₙ ≤ wₙ à partir d'un certain rang et lim vₙ = lim wₙ = l, alors lim uₙ = l. Si uₙ ≤ vₙ à partir d'un certain rang et lim uₙ = +∞, alors lim vₙ = +∞." },
            },
          ],
          keyPoints: [
            "Références : n, n², √n → +∞ ; 1/n, 1/n², 1/√n → 0 ; ((-1)ⁿ) n'a pas de limite.",
            "Formes indéterminées : ∞ - ∞, 0 × ∞, ∞/∞, 0/0. On les lève en factorisant par le terme dominant.",
            "qⁿ : +∞ si q > 1 ; 1 si q = 1 ; 0 si -1 < q < 1 ; pas de limite si q ≤ -1.",
            "Comparaison : uₙ ≤ vₙ et uₙ → +∞ donnent vₙ → +∞.",
            "Gendarmes : vₙ ≤ uₙ ≤ wₙ avec vₙ et wₙ qui tendent vers l donnent uₙ → l.",
            "Pour cos n, sin n ou (-1)ⁿ, on encadre entre -1 et 1 avant de passer à la limite.",
          ],
          example: {
            statement: "Déterminer les limites des suites définies pour n ≥ 1 par aₙ = n² - 3n et bₙ = (2n + 1)/(n + 3).",
            solution: [
              "aₙ : n² → +∞ et -3n → -∞, c'est une forme indéterminée ∞ - ∞.",
              "On factorise par n² : aₙ = n²(1 - 3/n). Or 3/n → 0, donc 1 - 3/n → 1, et n² → +∞. Par produit, lim aₙ = +∞.",
              "bₙ : le numérateur et le dénominateur tendent vers +∞, c'est une forme indéterminée ∞/∞.",
              "On factorise par n en haut et en bas : bₙ = n(2 + 1/n) / (n(1 + 3/n)) = (2 + 1/n)/(1 + 3/n).",
              "Comme 1/n → 0 et 3/n → 0, le numérateur tend vers 2 et le dénominateur vers 1. Par quotient, lim bₙ = 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminer la limite de chacune des suites suivantes, définies pour n ≥ 1 : uₙ = 3 - 2/n² ; vₙ = (n² + 1)(2 - 1/n) ; wₙ = 5 × 0,7ⁿ + 1.",
              hint: "Il n'y a ici aucune forme indéterminée : utilisez les limites de référence et les opérations.",
              solution: [
                "uₙ : n² → +∞ donc 2/n² → 0, et lim uₙ = 3 - 0 = 3.",
                "vₙ : n² + 1 → +∞ et 2 - 1/n → 2 > 0. Par produit, lim vₙ = +∞.",
                "wₙ : -1 < 0,7 < 1 donc 0,7ⁿ → 0, puis 5 × 0,7ⁿ → 0 et lim wₙ = 0 + 1 = 1.",
              ],
            },
            {
              level: 2,
              statement: "Déterminer la limite de chacune des suites suivantes : uₙ = (4n² - n + 3)/(2n² + 1) ; vₙ = 2ⁿ - 3ⁿ ; wₙ = √n - n (pour n ≥ 1).",
              hint: "Trois formes indéterminées : factorisez par n² pour uₙ, par 3ⁿ pour vₙ, par √n pour wₙ (rappel : n = √n × √n).",
              solution: [
                "uₙ (forme ∞/∞) : uₙ = (4 - 1/n + 3/n²)/(2 + 1/n²). Le numérateur tend vers 4 et le dénominateur vers 2, donc lim uₙ = 2.",
                "vₙ (forme ∞ - ∞) : vₙ = 3ⁿ((2/3)ⁿ - 1). Comme 0 < 2/3 < 1, (2/3)ⁿ → 0, donc (2/3)ⁿ - 1 → -1. Et 3ⁿ → +∞ car 3 > 1. Par produit, lim vₙ = -∞.",
                "wₙ (forme ∞ - ∞) : wₙ = √n(1 - √n). Or √n → +∞ et 1 - √n → -∞. Par produit, lim wₙ = -∞.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. On considère la suite (uₙ) définie pour tout entier n ≥ 1 par uₙ = (n + cos n)/(n + 2). 1. Démontrer que, pour tout n ≥ 1, (n - 1)/(n + 2) ≤ uₙ ≤ (n + 1)/(n + 2). 2. En déduire la limite de la suite (uₙ). 3. On pose vₙ = n² + n sin n. Démontrer que vₙ ≥ n² - n pour tout n ≥ 1 et en déduire la limite de (vₙ).",
              hint: "Partez de l'encadrement -1 ≤ cos n ≤ 1, ajoutez n, puis divisez par n + 2 qui est strictement positif.",
              solution: [
                "1. Pour tout entier n, -1 ≤ cos n ≤ 1, donc n - 1 ≤ n + cos n ≤ n + 1. Comme n + 2 > 0, on divise sans changer le sens : (n - 1)/(n + 2) ≤ uₙ ≤ (n + 1)/(n + 2).",
                "2. (n - 1)/(n + 2) = (1 - 1/n)/(1 + 2/n) → 1 et (n + 1)/(n + 2) = (1 + 1/n)/(1 + 2/n) → 1.",
                "D'après le théorème des gendarmes, la suite (uₙ) converge et lim uₙ = 1.",
                "3. Pour tout n ≥ 1, sin n ≥ -1 et n > 0, donc n sin n ≥ -n, d'où vₙ = n² + n sin n ≥ n² - n.",
                "Or n² - n = n²(1 - 1/n) → +∞. D'après le théorème de comparaison, lim vₙ = +∞.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque suite à sa limite.",
            pairs: [
              { left: "0,9ⁿ", right: "0" },
              { left: "1,1ⁿ", right: "+∞" },
              { left: "(-1)ⁿ", right: "pas de limite" },
              { left: "(5n + 2)/(n + 1)", right: "5" },
              { left: "n - n²", right: "-∞" },
              { left: "1 + 1/n", right: "1" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces expressions est une forme indéterminée ?",
              options: ["+∞ + (+∞)", "+∞ - (+∞)", "3 × (+∞)", "5/(+∞)"],
              answer: 1,
              why: "∞ - ∞ est indéterminée : n² - n tend vers +∞ alors que n - n² tend vers -∞. Les trois autres donnent +∞, +∞ et 0.",
            },
            {
              q: "Quelle est la limite de (-0,8)ⁿ ?",
              options: ["0", "Elle n'a pas de limite", "-∞", "+∞"],
              answer: 0,
              why: "-1 < -0,8 < 1, donc (-0,8)ⁿ tend vers 0, même si ses termes changent de signe.",
            },
            {
              q: "On sait que n - 1 ≤ uₙ pour tout n. Que peut-on conclure ?",
              options: ["uₙ converge", "lim uₙ = -∞", "lim uₙ = +∞", "On ne peut rien conclure"],
              answer: 2,
              why: "n - 1 tend vers +∞ et uₙ lui est supérieure : par comparaison, uₙ tend vers +∞.",
            },
            {
              q: "Quelle est la limite de (2n² + 1)/(5n² - n) ?",
              options: ["+∞", "2", "0", "2/5"],
              answer: 3,
              why: "En factorisant par n² : (2 + 1/n²)/(5 - 1/n), qui tend vers 2/5.",
            },
            {
              q: "On sait que 1 - 1/n ≤ uₙ ≤ 1 + 2/n pour n ≥ 1. Que vaut lim uₙ ?",
              options: ["0", "2", "1", "3"],
              answer: 2,
              why: "Les deux suites qui encadrent tendent vers 1 : par le théorème des gendarmes, uₙ tend vers 1.",
            },
          ],
          trap: "Conclure trop vite face à une forme indéterminée, par exemple écrire que n² - 3n tend vers 0 parce que « l'infini moins l'infini fait zéro ». Il faut factoriser par le terme dominant.",
          method: "Avant tout calcul, écrivez au brouillon la limite de chaque morceau : si vous obtenez ∞ - ∞, 0 × ∞, ∞/∞ ou 0/0, factorisez ; si un terme oscille (cos n, (-1)ⁿ), encadrez-le entre -1 et 1.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'convergence-monotone',
          title: 'Convergence monotone et algorithmes de seuil',
          minutes: 30,
          objectives: [
            "Reconnaître une suite majorée, minorée, bornée.",
            "Utiliser le théorème de convergence monotone pour démontrer qu'une suite converge.",
            "Déterminer la limite d'une suite définie par uₙ₊₁ = f(uₙ) à l'aide de l'équation f(l) = l.",
            "Écrire et interpréter un algorithme de seuil en langage Python.",
          ],
          course: [
            {
              heading: "Suites majorées, minorées, bornées",
              paragraphs: [
                "Une suite (uₙ) est majorée s'il existe un réel M tel que uₙ ≤ M pour tout n ; M est un majorant. Elle est minorée s'il existe un réel m tel que uₙ ≥ m pour tout n. Elle est bornée si elle est à la fois majorée et minorée. Par exemple, uₙ = 1 - 1/n (n ≥ 1) est majorée par 1, mais aussi par 2 ou 100 : un majorant n'est jamais unique.",
                "La suite ((-1)ⁿ) est bornée (entre -1 et 1) mais ne converge pas : être bornée ne suffit pas pour converger. À l'inverse, une suite convergente est toujours bornée. Une suite croissante est minorée par son premier terme ; une suite décroissante est majorée par son premier terme.",
              ],
              box: { label: "Définition", text: "(uₙ) est majorée par M si uₙ ≤ M pour tout n ; minorée par m si uₙ ≥ m pour tout n ; bornée si elle est majorée et minorée." },
            },
            {
              heading: "Le théorème de convergence monotone",
              paragraphs: [
                "Toute suite croissante et majorée converge. Toute suite décroissante et minorée converge. Ce théorème est admis. Il affirme l'existence d'une limite sans en donner la valeur : si (uₙ) est croissante et majorée par M, sa limite l vérifie l ≤ M, mais l n'est pas forcément égale à M. La suite 1 - 1/n est croissante, majorée par 2, et sa limite est 1.",
                "Le cas non borné est démontré au programme : une suite croissante non majorée tend vers +∞. En effet, soit A un réel. La suite n'étant pas majorée, il existe un rang N tel que u_N > A. Comme la suite est croissante, pour tout n ≥ N, uₙ ≥ u_N > A. Tous les termes sont donc dans ]A ; +∞[ à partir du rang N. De même, une suite décroissante non minorée tend vers -∞.",
                "Enfin, si une suite croissante converge vers l, alors tous ses termes sont inférieurs ou égaux à l : uₙ ≤ l pour tout n. Analogie : une personne qui monte un escalier sans jamais redescendre et qui ne dépasse jamais le plafond finit par se stabiliser à une certaine hauteur, sans forcément toucher le plafond.",
              ],
              box: { label: "Théorème", text: "Croissante et majorée : la suite converge. Décroissante et minorée : la suite converge. Croissante non majorée : elle tend vers +∞. Décroissante non minorée : elle tend vers -∞." },
            },
            {
              heading: "Trouver la limite d'une suite uₙ₊₁ = f(uₙ)",
              paragraphs: [
                "Le théorème de convergence monotone dit que la limite existe ; il reste à la calculer. Lorsque uₙ₊₁ = f(uₙ) avec f continue (notion du chapitre suivant), si (uₙ) converge vers l, alors l vérifie f(l) = l : en passant à la limite dans uₙ₊₁ = f(uₙ), le membre de gauche tend vers l et celui de droite vers f(l).",
                "Exemple : u₀ = 1, uₙ₊₁ = 0,5uₙ + 3. On a montré par récurrence que 1 ≤ uₙ ≤ uₙ₊₁ ≤ 6 : la suite est croissante et majorée par 6, donc elle converge vers un réel l. La fonction f(x) = 0,5x + 3 est continue, donc l = 0,5l + 3, d'où 0,5l = 3 et l = 6.",
                "Si l'équation f(l) = l a plusieurs solutions, on élimine celles qui sont incompatibles avec l'encadrement de la suite. Par exemple, avec uₙ₊₁ = √(3uₙ + 4) et u₀ = 0, l'équation l = √(3l + 4) donne l² - 3l - 4 = 0, soit l = 4 ou l = -1 ; or uₙ ≥ 0, donc l ≥ 0 et l = 4.",
              ],
              box: { label: "Repère", text: "Méthode : 1. montrer la monotonie et la borne (souvent par récurrence) ; 2. invoquer le théorème de convergence monotone ; 3. résoudre f(l) = l avec f continue ; 4. choisir la solution compatible avec l'encadrement." },
            },
            {
              heading: "Algorithmes de seuil en Python",
              paragraphs: [
                "Quand une suite tend vers +∞ (ou vers une limite l), on cherche souvent le premier rang n à partir duquel uₙ dépasse un seuil S. On utilise une boucle « tant que » (while) : tant que le seuil n'est pas atteint, on calcule le terme suivant et on augmente n de 1. À la sortie de la boucle, n est le rang cherché.",
                "Exemple : un capital de 1 000 euros placé à 5 % par an vaut uₙ = 1000 × 1,05ⁿ après n années. Programme : u = 1000 et n = 0 ; puis « while u <= 2000: » suivi, en retrait, de « u = 1.05 * u » et « n = n + 1 » ; enfin « return n » (ou print(n)). La condition de la boucle est la négation de ce que l'on cherche : on veut u > 2000, donc on boucle tant que u <= 2000.",
                "À la main ou avec le tableau de valeurs de la calculatrice : 1,05¹⁴ ≈ 1,980 et 1,05¹⁵ ≈ 2,079. Donc u₁₄ ≈ 1980 et u₁₅ ≈ 2079 : le programme renvoie 15. Le capital double donc au bout de 15 ans. Pour une suite décroissante vers 0, on écrit au contraire « while u >= seuil: ».",
              ],
              box: { label: "À retenir", text: "Algorithme de seuil : initialiser u et n, puis « tant que la condition voulue n'est pas réalisée : calculer le terme suivant et ajouter 1 à n ». La condition du while est la négation de la condition cherchée." },
            },
          ],
          keyPoints: [
            "Bornée ne suffit pas pour converger : ((-1)ⁿ) est bornée et divergente.",
            "Croissante et majorée, ou décroissante et minorée : la suite converge (théorème de convergence monotone).",
            "Croissante non majorée : elle tend vers +∞.",
            "La limite d'une suite croissante majorée par M est inférieure ou égale à M, pas forcément égale à M.",
            "Si uₙ₊₁ = f(uₙ), f continue et uₙ → l, alors f(l) = l.",
            "Algorithme de seuil : boucle while dont la condition est la négation de ce que l'on cherche.",
          ],
          example: {
            statement: "On considère u₀ = 1 et uₙ₊₁ = 0,5uₙ + 3. Démontrer que la suite converge et déterminer sa limite.",
            solution: [
              "On pose f(x) = 0,5x + 3 : f est croissante sur ℝ (coefficient directeur 0,5 > 0) et f(6) = 6. On calcule u₁ = 0,5 + 3 = 3,5.",
              "On note P(n) : 1 ≤ uₙ ≤ uₙ₊₁ ≤ 6. Initialisation : 1 ≤ 1 ≤ 3,5 ≤ 6, donc P(0) est vraie.",
              "Hérédité : si 1 ≤ uₙ ≤ uₙ₊₁ ≤ 6 pour un n fixé, alors, f étant croissante, f(1) ≤ uₙ₊₁ ≤ uₙ₊₂ ≤ f(6), soit 3,5 ≤ uₙ₊₁ ≤ uₙ₊₂ ≤ 6, donc 1 ≤ uₙ₊₁ ≤ uₙ₊₂ ≤ 6. Par récurrence, P(n) est vraie pour tout n.",
              "La suite est donc croissante et majorée par 6 : d'après le théorème de convergence monotone, elle converge vers un réel l.",
              "f est continue, donc l = f(l) : l = 0,5l + 3, soit 0,5l = 3 et l = 6.",
              "Conclusion : la suite (uₙ) converge et lim uₙ = 6.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit la suite définie pour tout entier naturel n par uₙ = 2 - 3/(n + 1). 1. Démontrer que (uₙ) est croissante. 2. Démontrer qu'elle est majorée par 2. 3. Que peut-on en déduire ? Déterminer sa limite.",
              hint: "Calculez uₙ₊₁ - uₙ en réduisant au même dénominateur (n + 1)(n + 2).",
              solution: [
                "1. uₙ₊₁ - uₙ = -3/(n + 2) + 3/(n + 1) = 3/(n + 1) - 3/(n + 2) = 3(n + 2 - n - 1)/((n + 1)(n + 2)) = 3/((n + 1)(n + 2)) > 0. La suite est croissante.",
                "2. Pour tout n, 3/(n + 1) > 0, donc uₙ = 2 - 3/(n + 1) < 2. La suite est majorée par 2.",
                "3. Croissante et majorée, (uₙ) converge d'après le théorème de convergence monotone.",
                "Comme 3/(n + 1) → 0, on obtient directement lim uₙ = 2. Ici la limite est égale au majorant 2, ce qui n'est pas toujours le cas.",
              ],
            },
            {
              level: 2,
              statement: "On considère la suite définie par vₙ = 5 × 0,8ⁿ. 1. Déterminer la limite de (vₙ). 2. Écrire en Python une fonction seuil() qui renvoie le plus petit entier n tel que vₙ < 0,1. 3. À l'aide de la calculatrice, déterminer la valeur renvoyée.",
              hint: "La suite est décroissante vers 0 : la boucle tourne tant que v >= 0.1. Ensuite, comparez v₁₇ et v₁₈.",
              solution: [
                "1. 0 < 0,8 < 1 donc 0,8ⁿ → 0, et lim vₙ = 0.",
                "2. def seuil(): puis, en retrait, v = 5 et n = 0 ; while v >= 0.1: suivi, en retrait, de v = 0.8 * v et n = n + 1 ; enfin return n.",
                "3. On calcule 0,8¹⁷ ≈ 0,0225, donc v₁₇ ≈ 0,113 > 0,1 ; et 0,8¹⁸ ≈ 0,0180, donc v₁₈ ≈ 0,090 < 0,1.",
                "La fonction renvoie donc n = 18.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Soit (uₙ) la suite définie par u₀ = 1 et uₙ₊₁ = uₙ/(1 + uₙ). 1. Démontrer par récurrence que uₙ > 0 pour tout n. 2. Démontrer que (uₙ) est décroissante. 3. En déduire que (uₙ) converge, puis déterminer sa limite l, en admettant que l vérifie l = l/(1 + l). 4. Démontrer par récurrence que uₙ = 1/(n + 1), puis déterminer le plus petit entier n tel que uₙ < 0,01.",
              hint: "Pour la question 2, calculez uₙ₊₁ - uₙ en réduisant au même dénominateur. Pour la question 3, multipliez l'équation par 1 + l, qui est strictement positif.",
              solution: [
                "1. P(n) : uₙ > 0. Initialisation : u₀ = 1 > 0. Hérédité : si uₙ > 0, alors 1 + uₙ > 0 et uₙ₊₁ = uₙ/(1 + uₙ) est un quotient de deux nombres strictement positifs, donc uₙ₊₁ > 0. Conclusion : uₙ > 0 pour tout n.",
                "2. uₙ₊₁ - uₙ = uₙ/(1 + uₙ) - uₙ = (uₙ - uₙ - uₙ²)/(1 + uₙ) = -uₙ²/(1 + uₙ) < 0, car uₙ² > 0 et 1 + uₙ > 0. La suite est décroissante.",
                "3. (uₙ) est décroissante et minorée par 0, donc elle converge vers un réel l ≥ 0. On a l = l/(1 + l), donc l(1 + l) = l, soit l² = 0 et l = 0.",
                "4. P(n) : uₙ = 1/(n + 1). Initialisation : u₀ = 1 = 1/1. Hérédité : si uₙ = 1/(n + 1), alors uₙ₊₁ = (1/(n + 1)) / (1 + 1/(n + 1)) = (1/(n + 1)) / ((n + 2)/(n + 1)) = 1/(n + 2). Donc P(n + 1) est vraie.",
                "uₙ < 0,01 équivaut à 1/(n + 1) < 1/100, soit n + 1 > 100, c'est-à-dire n > 99. Le plus petit entier cherché est n = 100.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur la convergence des suites.",
            statements: [
              { text: "Une suite bornée est convergente.", true: false, why: "((-1)ⁿ) est bornée entre -1 et 1 mais n'a pas de limite." },
              { text: "Une suite croissante et majorée est convergente.", true: true, why: "C'est le théorème de convergence monotone." },
              { text: "Une suite croissante majorée par 5 converge vers 5.", true: false, why: "Sa limite est inférieure ou égale à 5, mais pas forcément égale : 1 - 1/n est majorée par 5 et tend vers 1." },
              { text: "Une suite croissante non majorée tend vers +∞.", true: true, why: "C'est une propriété démontrée au programme : au-delà d'un rang, tous les termes dépassent n'importe quel réel A." },
              { text: "Une suite décroissante est forcément minorée par 0.", true: false, why: "La suite -n est décroissante et tend vers -∞ : elle n'est minorée par aucun réel." },
              { text: "Pour trouver le premier n tel que uₙ > 1000, on boucle tant que u <= 1000.", true: true, why: "La condition du while est la négation de la condition cherchée." },
            ],
          },
          quiz: [
            {
              q: "Une suite décroissante et minorée par 2 :",
              options: ["converge vers 2", "converge vers un réel l ≥ 2", "tend vers -∞", "n'a pas forcément de limite"],
              answer: 1,
              why: "Le théorème de convergence monotone donne la convergence ; la limite est supérieure ou égale au minorant 2, sans lui être forcément égale.",
            },
            {
              q: "On veut le premier rang n tel que uₙ < 0,001 pour une suite qui décroît vers 0. Quelle condition écrire dans la boucle while ?",
              options: ["u < 0.001", "u > 0.001", "u == 0.001", "u >= 0.001"],
              answer: 3,
              why: "On boucle tant que la condition cherchée (u < 0,001) n'est pas réalisée, c'est-à-dire tant que u >= 0,001.",
            },
            {
              q: "uₙ₊₁ = 0,2uₙ + 4 converge. Quelle est sa limite ?",
              options: ["5", "4", "20", "0,2"],
              answer: 0,
              why: "l = 0,2l + 4 donne 0,8l = 4, soit l = 5.",
            },
            {
              q: "Une suite croissante qui n'est pas majorée :",
              options: ["converge", "n'a pas de limite", "tend vers +∞", "est bornée"],
              answer: 2,
              why: "Pour tout A, un terme dépasse A et, la suite étant croissante, tous les suivants aussi : elle tend vers +∞.",
            },
            {
              q: "Laquelle de ces suites est bornée mais pas convergente ?",
              options: ["1/n", "(-1)ⁿ", "n²", "2 - 1/n"],
              answer: 1,
              why: "(-1)ⁿ prend les valeurs 1 et -1 : elle est bornée mais n'a pas de limite. 1/n et 2 - 1/n convergent, n² n'est pas bornée.",
            },
          ],
          trap: "Croire que la limite d'une suite croissante majorée par M est M. Le théorème garantit seulement l'existence d'une limite l ≤ M ; on la calcule ensuite, par exemple avec f(l) = l.",
          method: "Pour une suite uₙ₊₁ = f(uₙ), suivez toujours le même plan : encadrement par récurrence, monotonie, théorème de convergence monotone, équation f(l) = l, et choix de la solution compatible avec l'encadrement.",
        },
      ],
    },
    /* ================================================================== */
    /* LIMITES DE FONCTIONS ET CONTINUITÉ                                   */
    /* ================================================================== */
    {
      id: 'limites-continuite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'limites-et-asymptotes',
          title: 'Limites d\'une fonction et asymptotes',
          minutes: 30,
          objectives: [
            "Déterminer la limite finie ou infinie d'une fonction en +∞, en -∞ ou en un réel a.",
            "Distinguer limite à gauche et limite à droite en un réel.",
            "Interpréter graphiquement une limite par une asymptote horizontale ou verticale.",
            "Connaître les limites des fonctions de référence, dont la fonction exponentielle.",
          ],
          course: [
            {
              heading: "Limite en +∞ ou en -∞",
              paragraphs: [
                "Comme pour les suites, on dit que f(x) tend vers +∞ quand x tend vers +∞ si tout intervalle ]A ; +∞[ contient toutes les valeurs f(x) pour x assez grand. On note lim f(x) = +∞ quand x → +∞. Fonctions de référence : x, x², x³, √x et eˣ tendent vers +∞ en +∞ ; en -∞, x² tend vers +∞ et x³ vers -∞.",
                "On dit que f(x) tend vers le réel l quand x tend vers +∞ si tout intervalle ouvert contenant l contient toutes les valeurs f(x) pour x assez grand. Exemples : 1/x, 1/x², 1/√x tendent vers 0 en +∞, et eˣ tend vers 0 en -∞.",
                "Interprétation graphique : si lim f(x) = l en +∞ (ou en -∞), la droite d'équation y = l est asymptote horizontale à la courbe de f en +∞ (ou en -∞). La courbe se rapproche de cette droite autant que l'on veut lorsque x devient grand. Elle peut la traverser : l'asymptote décrit un comportement « à l'infini », pas une barrière.",
              ],
              box: { label: "Définition", text: "Si lim f(x) = l quand x → +∞ (ou -∞), la droite d'équation y = l est asymptote horizontale à la courbe de f en +∞ (ou en -∞)." },
            },
            {
              heading: "Limite infinie en un réel a",
              paragraphs: [
                "Lorsque f n'est pas définie en a mais au voisinage de a, f(x) peut prendre des valeurs de plus en plus grandes quand x s'approche de a. On dit que f(x) tend vers +∞ quand x tend vers a si tout intervalle ]A ; +∞[ contient f(x) pour x suffisamment proche de a. Exemple : 1/x² tend vers +∞ quand x tend vers 0.",
                "Souvent, le comportement diffère de chaque côté de a. Pour 1/x : quand x tend vers 0 par valeurs supérieures (x → 0 avec x > 0, noté x → 0⁺), 1/x tend vers +∞ ; quand x tend vers 0 par valeurs inférieures (x → 0⁻), 1/x tend vers -∞. On parle de limite à droite et de limite à gauche.",
                "Interprétation graphique : si f(x) tend vers +∞ ou -∞ quand x tend vers a (à droite ou à gauche), la droite d'équation x = a est asymptote verticale à la courbe de f. La courbe « longe » cette droite verticale en montant ou en descendant indéfiniment.",
              ],
              box: { label: "Définition", text: "Si f(x) tend vers +∞ ou -∞ quand x tend vers a (à gauche ou à droite), la droite d'équation x = a est asymptote verticale à la courbe de f." },
            },
            {
              heading: "Calculer une limite en un réel : le signe du dénominateur",
              paragraphs: [
                "Pour un quotient dont le numérateur tend vers un réel non nul et dont le dénominateur tend vers 0, le quotient tend vers un infini, et tout repose sur le signe. On étudie le signe du dénominateur au voisinage de a, souvent à l'aide d'un petit tableau de signes, et l'on note 0⁺ ou 0⁻ selon que le dénominateur tend vers 0 en restant positif ou négatif.",
                "Exemple : f(x) = (2x + 1)/(x - 3), définie sur ℝ privé de 3. Quand x → 3, le numérateur tend vers 7. Si x > 3, x - 3 → 0⁺, donc f(x) → +∞ ; si x < 3, x - 3 → 0⁻, donc f(x) → -∞. La droite x = 3 est asymptote verticale.",
                "En +∞ : f(x) = x(2 + 1/x) / (x(1 - 3/x)) = (2 + 1/x)/(1 - 3/x) → 2, et de même en -∞. La droite y = 2 est asymptote horizontale en +∞ et en -∞. Pour savoir si la courbe est au-dessus ou en dessous, on étudie le signe de f(x) - 2 = 7/(x - 3) : positif pour x > 3, négatif pour x < 3.",
              ],
              box: { label: "Règle", text: "Réel non nul divisé par 0⁺ ou 0⁻ : le résultat tend vers +∞ ou -∞ selon la règle des signes. Exemple : 7/0⁺ → +∞, 7/0⁻ → -∞, -2/0⁺ → -∞." },
            },
            {
              heading: "Les limites de la fonction exponentielle",
              paragraphs: [
                "La fonction exponentielle, étudiée en première, vérifie lim eˣ = +∞ quand x → +∞ et lim eˣ = 0 quand x → -∞. Sa courbe admet donc l'axe des abscisses (la droite y = 0) comme asymptote horizontale en -∞, et elle reste toujours au-dessus, puisque eˣ > 0 pour tout réel x.",
                "Ces deux limites se combinent avec les opérations. Par exemple, pour f(x) = 3 + 2eˣ, quand x → -∞, eˣ → 0 donc f(x) → 3 : la droite y = 3 est asymptote horizontale en -∞. Et quand x → +∞, f(x) → +∞.",
              ],
              box: { label: "À retenir", text: "lim eˣ = +∞ en +∞ et lim eˣ = 0 en -∞. La courbe de l'exponentielle a pour asymptote horizontale l'axe des abscisses en -∞." },
            },
          ],
          keyPoints: [
            "lim f(x) = l en ±∞ : asymptote horizontale d'équation y = l.",
            "f(x) → ±∞ quand x → a : asymptote verticale d'équation x = a.",
            "Limites à gauche et à droite : 1/x → +∞ quand x → 0⁺ et 1/x → -∞ quand x → 0⁻.",
            "Réel non nul divisé par 0⁺ ou 0⁻ : un infini dont le signe se lit avec la règle des signes.",
            "eˣ → +∞ en +∞ et eˣ → 0 en -∞.",
            "La position de la courbe par rapport à y = l se lit sur le signe de f(x) - l.",
          ],
          example: {
            statement: "Soit f(x) = (2x + 1)/(x - 3) sur ℝ privé de 3. Déterminer les limites de f aux bornes de son ensemble de définition et en déduire les asymptotes de sa courbe.",
            solution: [
              "En +∞ et en -∞ : f(x) = (2 + 1/x)/(1 - 3/x). Comme 1/x → 0 et 3/x → 0, f(x) → 2. La droite y = 2 est asymptote horizontale en +∞ et en -∞.",
              "En 3 : le numérateur tend vers 2 × 3 + 1 = 7 > 0 et le dénominateur tend vers 0.",
              "Pour x > 3, x - 3 > 0 : x - 3 → 0⁺ et f(x) → +∞ (7 divisé par 0⁺).",
              "Pour x < 3, x - 3 < 0 : x - 3 → 0⁻ et f(x) → -∞.",
              "La droite d'équation x = 3 est asymptote verticale à la courbe de f.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f définie sur ℝ privé de 0 par f(x) = 3 + 1/x². Déterminer les limites de f en +∞, en -∞ et en 0, puis donner les asymptotes de sa courbe.",
              hint: "x² est toujours positif : 1/x² tend vers 0⁺ à l'infini et vers +∞ en 0, des deux côtés.",
              solution: [
                "En +∞ et en -∞ : x² → +∞, donc 1/x² → 0 et f(x) → 3. La droite y = 3 est asymptote horizontale en +∞ et en -∞.",
                "En 0 : x² → 0 en restant strictement positif, donc 1/x² → +∞ et f(x) → +∞, à gauche comme à droite.",
                "La droite d'équation x = 0 (l'axe des ordonnées) est asymptote verticale.",
                "Comme 1/x² > 0, f(x) - 3 > 0 : la courbe est toujours au-dessus de son asymptote y = 3.",
              ],
            },
            {
              level: 2,
              statement: "Soit g définie sur ℝ privé de 1 par g(x) = (x + 2)/(1 - x). 1. Déterminer les limites de g à gauche et à droite en 1. 2. Déterminer les limites de g en +∞ et en -∞. 3. En déduire les asymptotes de la courbe de g.",
              hint: "Étudiez le signe de 1 - x : il est positif pour x < 1 et négatif pour x > 1.",
              solution: [
                "1. Quand x → 1, le numérateur tend vers 3 > 0. Pour x < 1, 1 - x → 0⁺ donc g(x) → +∞. Pour x > 1, 1 - x → 0⁻ donc g(x) → -∞.",
                "2. g(x) = x(1 + 2/x) / (x(1/x - 1)) = (1 + 2/x)/(1/x - 1). Quand x → ±∞, le numérateur tend vers 1 et le dénominateur vers -1, donc g(x) → -1.",
                "3. La droite x = 1 est asymptote verticale ; la droite y = -1 est asymptote horizontale en +∞ et en -∞.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Soit f définie sur ℝ par f(x) = (3eˣ + 1)/(eˣ + 1). 1. Déterminer la limite de f en -∞. 2. En écrivant f(x) = (3 + e⁻ˣ)/(1 + e⁻ˣ), déterminer la limite de f en +∞. 3. Interpréter graphiquement ces résultats. 4. Démontrer que f(x) - 3 = -2/(eˣ + 1) et en déduire la position de la courbe de f par rapport à la droite d'équation y = 3.",
              hint: "Pour la question 2, divisez le numérateur et le dénominateur par eˣ ; rappel : e⁻ˣ = 1/eˣ tend vers 0 quand x → +∞.",
              solution: [
                "1. Quand x → -∞, eˣ → 0, donc 3eˣ + 1 → 1 et eˣ + 1 → 1. Ainsi lim f(x) = 1 en -∞.",
                "2. En divisant par eˣ > 0 : f(x) = (3 + e⁻ˣ)/(1 + e⁻ˣ). Quand x → +∞, e⁻ˣ = 1/eˣ → 0, donc f(x) → 3/1 = 3.",
                "3. La courbe de f admet la droite y = 1 comme asymptote horizontale en -∞ et la droite y = 3 comme asymptote horizontale en +∞.",
                "4. f(x) - 3 = (3eˣ + 1 - 3(eˣ + 1))/(eˣ + 1) = (3eˣ + 1 - 3eˣ - 3)/(eˣ + 1) = -2/(eˣ + 1).",
                "Comme eˣ + 1 > 0, f(x) - 3 < 0 pour tout réel x : la courbe de f est toujours strictement en dessous de la droite d'équation y = 3.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque résultat de limite à son interprétation graphique.",
            pairs: [
              { left: "lim f(x) = 4 en +∞", right: "Asymptote horizontale y = 4 en +∞" },
              { left: "f(x) → +∞ quand x → 2⁺", right: "Asymptote verticale x = 2" },
              { left: "lim eˣ = 0 en -∞", right: "L'axe des abscisses est asymptote en -∞" },
              { left: "f(x) - 4 > 0 pour tout x", right: "Courbe au-dessus de la droite y = 4" },
              { left: "lim f(x) = +∞ en +∞", right: "Pas d'asymptote horizontale en +∞" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la limite de 1/x quand x → 0⁻ ?",
              options: ["+∞", "0", "-∞", "1"],
              answer: 2,
              why: "Pour x < 0 proche de 0, 1/x est négatif et de valeur absolue très grande : 1/x → -∞.",
            },
            {
              q: "Si lim f(x) = -2 quand x → +∞, que peut-on dire de la courbe de f ?",
              options: ["Elle a une asymptote verticale x = -2", "Elle a une asymptote horizontale y = -2 en +∞", "Elle ne coupe jamais la droite y = -2", "Elle est sous l'axe des abscisses"],
              answer: 1,
              why: "Une limite finie en +∞ donne une asymptote horizontale. La courbe peut couper cette droite.",
            },
            {
              q: "Quelle est la limite de (5x - 1)/(x + 4) en +∞ ?",
              options: ["5", "-1/4", "+∞", "1"],
              answer: 0,
              why: "En factorisant par x : (5 - 1/x)/(1 + 4/x) tend vers 5.",
            },
            {
              q: "Quelle est la limite de -3/(x - 1) quand x → 1⁺ ?",
              options: ["+∞", "0", "-3", "-∞"],
              answer: 3,
              why: "Le numérateur vaut -3 < 0 et x - 1 → 0⁺ : -3/0⁺ donne -∞.",
            },
            {
              q: "Quelle droite est asymptote à la courbe de f(x) = 2 - eˣ ?",
              options: ["y = 2 en +∞", "x = 2", "y = 2 en -∞", "y = 0 en -∞"],
              answer: 2,
              why: "Quand x → -∞, eˣ → 0 donc f(x) → 2 : la droite y = 2 est asymptote horizontale en -∞. En +∞, f(x) → -∞.",
            },
          ],
          trap: "Confondre asymptote verticale et asymptote horizontale : une limite finie l en l'infini donne la droite y = l, une limite infinie en un réel a donne la droite x = a.",
          method: "Pour un quotient en un réel a, faites systématiquement un tableau de signes du dénominateur : il indique si le dénominateur tend vers 0⁺ ou vers 0⁻ de chaque côté de a, et donc le signe de l'infini obtenu.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'operations-croissances-comparees',
          title: 'Opérations sur les limites et croissances comparées',
          minutes: 35,
          objectives: [
            "Calculer la limite d'une somme, d'un produit, d'un quotient de fonctions.",
            "Lever une forme indéterminée pour un polynôme, une fonction rationnelle ou une expression avec exponentielle.",
            "Déterminer la limite d'une fonction composée.",
            "Utiliser les croissances comparées de eˣ et de xⁿ en +∞ et en -∞.",
          ],
          course: [
            {
              heading: "Opérations et formes indéterminées",
              paragraphs: [
                "Les règles sur les limites de fonctions sont les mêmes que pour les suites, que x tende vers +∞, vers -∞ ou vers un réel a. Somme : l + l', l + (+∞) = +∞, +∞ + (+∞) = +∞. Produit : l × l', l × (±∞) = ±∞ selon le signe de l (si l ≠ 0), ∞ × ∞ = ∞ avec la règle des signes. Quotient : l/l' si l' ≠ 0, l/(±∞) = 0, l/0⁺ ou l/0⁻ = ±∞ si l ≠ 0.",
                "Les formes indéterminées sont les mêmes : ∞ - ∞, 0 × ∞, ∞/∞ et 0/0. Elles ne signifient pas que la limite n'existe pas, mais que les règles ne permettent pas de conclure directement : il faut transformer l'expression.",
              ],
              box: { label: "À retenir", text: "Formes indéterminées : ∞ - ∞, 0 × ∞, ∞/∞, 0/0. Une forme indéterminée se lève en changeant l'écriture : factorisation, simplification, croissances comparées." },
            },
            {
              heading: "Polynômes et fonctions rationnelles en l'infini",
              paragraphs: [
                "Pour un polynôme en +∞ ou -∞, on factorise par le terme de plus haut degré. Exemple : -2x³ + x² + 5 = x³(-2 + 1/x + 5/x³). La parenthèse tend vers -2 ; en +∞, x³ → +∞ et le produit tend vers -∞ ; en -∞, x³ → -∞ et le produit tend vers +∞. En pratique, un polynôme a la même limite en l'infini que son terme de plus haut degré.",
                "Pour un quotient de polynômes, on factorise le numérateur et le dénominateur par leurs termes de plus haut degré. Exemple en -∞ : (x² + 1)/(2x² - 3) = (1 + 1/x²)/(2 - 3/x²) → 1/2. Exemple en +∞ : (x + 1)/(x² + 2) = x(1 + 1/x) / (x²(1 + 2/x²)) = (1/x) × (1 + 1/x)/(1 + 2/x²) → 0.",
                "Au bac, on attend la factorisation écrite : la phrase « le terme de plus haut degré l'emporte » est une conséquence que l'on justifie par ce calcul.",
              ],
            },
            {
              heading: "Limite d'une fonction composée",
              paragraphs: [
                "Soit f(x) = g(u(x)). Si u(x) tend vers b quand x tend vers a, et si g(X) tend vers c quand X tend vers b, alors f(x) tend vers c quand x tend vers a (a, b, c désignant des réels ou ±∞). On procède en deux temps : on calcule d'abord la limite de l'expression « intérieure », puis la limite de la fonction « extérieure » en cette valeur.",
                "Exemple 1 : f(x) = exp(-x²) en +∞. On pose X = -x² ; quand x → +∞, X → -∞. Et eˣ → 0 quand X → -∞. Donc f(x) → 0. Exemple 2 : g(x) = √(4 + 1/x) en +∞. 4 + 1/x → 4 et √X → √4 = 2 quand X → 4, donc g(x) → 2.",
                "Exemple 3 : h(x) = exp(1/x) quand x → 0⁺. 1/x → +∞ et eˣ → +∞ quand X → +∞, donc h(x) → +∞. Quand x → 0⁻, 1/x → -∞, donc h(x) → 0.",
              ],
              box: { label: "Théorème", text: "Si lim u(x) = b quand x → a et lim g(X) = c quand X → b, alors lim g(u(x)) = c quand x → a." },
            },
            {
              heading: "Croissances comparées",
              paragraphs: [
                "L'exponentielle croît plus vite que toute puissance de x. Pour tout entier naturel n, eˣ/xⁿ tend vers +∞ quand x → +∞ ; en particulier eˣ/x → +∞. En -∞, xⁿeˣ tend vers 0 ; en particulier xeˣ → 0. On résume souvent : « en l'infini, l'exponentielle l'emporte sur les puissances ». Ces résultats lèvent les formes indéterminées ∞/∞ et 0 × ∞ qui mêlent exponentielle et puissances.",
                "Exemple : f(x) = eˣ - x en +∞ est une forme ∞ - ∞. On factorise par x : f(x) = x(eˣ/x - 1). Par croissances comparées, eˣ/x → +∞, donc la parenthèse tend vers +∞ et f(x) → +∞. On peut aussi factoriser par eˣ : f(x) = eˣ(1 - x/eˣ), et x/eˣ = 1/(eˣ/x) → 0.",
                "Ces limites se démontrent à partir de l'inégalité eˣ ≥ x + 1, ou d'une étude de fonction : par exemple, on montre que eˣ ≥ x²/2 pour x ≥ 0, d'où eˣ/x ≥ x/2, qui tend vers +∞, et l'on conclut par comparaison.",
              ],
              box: { label: "Propriété", text: "Pour tout entier naturel n : lim eˣ/xⁿ = +∞ quand x → +∞, et lim xⁿeˣ = 0 quand x → -∞. Les théorèmes de comparaison et des gendarmes s'appliquent aussi aux fonctions." },
            },
          ],
          keyPoints: [
            "Mêmes règles d'opérations et mêmes formes indéterminées que pour les suites.",
            "Polynôme ou quotient de polynômes en l'infini : factoriser par le terme de plus haut degré.",
            "Composée : limite de l'intérieur, puis limite de l'extérieur en cette valeur.",
            "Croissances comparées : eˣ/xⁿ → +∞ en +∞ et xⁿeˣ → 0 en -∞.",
            "Avec eˣ et x mélangés en +∞, on factorise souvent par eˣ ou par x.",
            "Théorèmes de comparaison et des gendarmes valables aussi pour les fonctions.",
          ],
          example: {
            statement: "Déterminer la limite en +∞ de f(x) = eˣ - x, puis la limite en -∞ de g(x) = (x - 2)eˣ.",
            solution: [
              "f(x) : eˣ → +∞ et -x → -∞, c'est une forme indéterminée ∞ - ∞.",
              "On factorise par x (x > 0) : f(x) = x(eˣ/x - 1). Par croissances comparées, eˣ/x → +∞, donc eˣ/x - 1 → +∞. Comme x → +∞, par produit, lim f(x) = +∞.",
              "g(x) : x - 2 → -∞ et eˣ → 0, c'est une forme indéterminée 0 × ∞.",
              "On développe : g(x) = xeˣ - 2eˣ. Par croissances comparées, xeˣ → 0 en -∞ ; et 2eˣ → 0.",
              "Donc lim g(x) = 0 - 0 = 0 en -∞ : l'axe des abscisses est asymptote horizontale à la courbe de g en -∞.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminer : a) la limite en +∞ de -2x³ + x² + 5 ; b) la limite en -∞ de (x² + 1)/(2x² - 3) ; c) la limite en +∞ de e⁻ˣ + 3.",
              hint: "a) et b) : factorisez par les termes de plus haut degré. c) : e⁻ˣ = 1/eˣ.",
              solution: [
                "a) -2x³ + x² + 5 = x³(-2 + 1/x + 5/x³). La parenthèse tend vers -2 et x³ → +∞, donc la limite est -∞.",
                "b) (x² + 1)/(2x² - 3) = (1 + 1/x²)/(2 - 3/x²). Quand x → -∞, 1/x² → 0 et 3/x² → 0, donc la limite est 1/2.",
                "c) Quand x → +∞, eˣ → +∞ donc e⁻ˣ = 1/eˣ → 0. La limite est 0 + 3 = 3.",
              ],
            },
            {
              level: 2,
              statement: "Déterminer à l'aide de la limite d'une fonction composée : a) la limite en +∞ de √((9x² + 1)/(x² + 2)) ; b) la limite en -∞ de exp(1/x) ; c) la limite en +∞ de exp(-x² + x).",
              hint: "Calculez d'abord la limite de l'expression intérieure, puis appliquez la fonction extérieure (racine carrée ou exponentielle).",
              solution: [
                "a) (9x² + 1)/(x² + 2) = (9 + 1/x²)/(1 + 2/x²) → 9 quand x → +∞. Et √X → 3 quand X → 9. Donc la limite est 3.",
                "b) Quand x → -∞, 1/x → 0. Et eˣ → e⁰ = 1 quand X → 0. Donc la limite est 1.",
                "c) -x² + x = x²(-1 + 1/x) → -∞ quand x → +∞. Et eˣ → 0 quand X → -∞. Donc la limite est 0.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. 1. Soit f définie sur ℝ par f(x) = (2x - 1)eˣ + 3. Déterminer les limites de f en -∞ et en +∞, et interpréter graphiquement la limite en -∞. 2. Soit g définie sur ℝ par g(x) = (eˣ + x)/(eˣ - x). On admet que eˣ - x > 0 pour tout réel x. Déterminer la limite de g en +∞.",
              hint: "1. En -∞, développez pour faire apparaître xeˣ. 2. Divisez le numérateur et le dénominateur par eˣ, puis utilisez x/eˣ = 1/(eˣ/x).",
              solution: [
                "1. En -∞ : f(x) = 2xeˣ - eˣ + 3. Par croissances comparées, xeˣ → 0 ; de plus eˣ → 0. Donc lim f(x) = 0 - 0 + 3 = 3.",
                "Interprétation : la droite d'équation y = 3 est asymptote horizontale à la courbe de f en -∞.",
                "En +∞ : 2x - 1 → +∞ et eˣ → +∞, donc (2x - 1)eˣ → +∞ par produit, et lim f(x) = +∞.",
                "2. On divise par eˣ > 0 : g(x) = (1 + x/eˣ)/(1 - x/eˣ). Par croissances comparées, eˣ/x → +∞ en +∞, donc x/eˣ = 1/(eˣ/x) → 0.",
                "Le numérateur tend vers 1 et le dénominateur vers 1 : lim g(x) = 1 en +∞.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Opérations, composées et croissances comparées.",
            statements: [
              { text: "« 0 × ∞ » signifie que la limite vaut 0.", true: false, why: "C'est une forme indéterminée : xeˣ tend vers 0 en -∞, mais x × (1/x) vaut 1 et x² × (1/x) tend vers ±∞." },
              { text: "x³eˣ tend vers 0 quand x tend vers -∞.", true: true, why: "Croissances comparées : xⁿeˣ → 0 en -∞ pour tout entier naturel n." },
              { text: "eˣ/x¹⁰⁰ tend vers 0 en +∞, car x¹⁰⁰ est énorme.", true: false, why: "L'exponentielle l'emporte sur toute puissance : eˣ/x¹⁰⁰ → +∞ en +∞." },
              { text: "exp(-x²) tend vers 0 quand x tend vers +∞.", true: true, why: "-x² → -∞ et eˣ → 0 quand X → -∞ : limite d'une composée." },
              { text: "La limite en +∞ de (3x² + x)/(x³ - 1) vaut 3.", true: false, why: "Le degré du dénominateur est plus grand : le quotient se comporte comme 3/x et tend vers 0." },
              { text: "Une forme indéterminée peut avoir une limite finie.", true: true, why: "Par exemple (2x + 1)/(x + 3) est de la forme ∞/∞ en +∞ et tend vers 2." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la limite en -∞ de x²eˣ ?",
              options: ["+∞", "0", "-∞", "1"],
              answer: 1,
              why: "Par croissances comparées, xⁿeˣ → 0 en -∞ pour tout n, ici n = 2.",
            },
            {
              q: "Quelle est la limite en +∞ de (x² - 4x)/(3 - 2x²) ?",
              options: ["-1/2", "1/2", "-∞", "0"],
              answer: 0,
              why: "En factorisant par x² : (1 - 4/x)/(3/x² - 2), qui tend vers 1/(-2) = -1/2.",
            },
            {
              q: "Quelle est la limite de exp(1/x) quand x → 0⁺ ?",
              options: ["1", "0", "e", "+∞"],
              answer: 3,
              why: "1/x → +∞ quand x → 0⁺, et eˣ → +∞ quand X → +∞.",
            },
            {
              q: "Laquelle de ces expressions n'est pas une forme indéterminée ?",
              options: ["∞/∞", "0/0", "+∞ × (-∞)", "∞ - ∞"],
              answer: 2,
              why: "Un produit de deux infinis est un infini dont le signe suit la règle des signes : ici -∞.",
            },
            {
              q: "Quelle est la limite en +∞ de x - eˣ ?",
              options: ["0", "+∞", "-∞", "1"],
              answer: 2,
              why: "x - eˣ = eˣ(x/eˣ - 1) ; x/eˣ → 0 donc la parenthèse tend vers -1 et le produit vers -∞.",
            },
          ],
          trap: "Écrire « +∞ - ∞ = 0 » ou « 0 × ∞ = 0 ». Ce sont des formes indéterminées : la limite dépend de l'expression et doit être obtenue en transformant l'écriture.",
          method: "Classez la difficulté avant de calculer : pas de forme indéterminée (on conclut par les règles), polynôme ou quotient (on factorise), exponentielle face à une puissance (croissances comparées), expression emboîtée (composée en deux temps).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'continuite-tvi',
          title: 'Continuité et théorème des valeurs intermédiaires',
          minutes: 35,
          objectives: [
            "Reconnaître une fonction continue sur un intervalle et connaître le lien entre dérivabilité et continuité.",
            "Appliquer le théorème des valeurs intermédiaires et son corollaire pour une fonction strictement monotone.",
            "Démontrer l'existence et l'unicité d'une solution d'une équation f(x) = k et en donner un encadrement.",
            "Utiliser la continuité pour déterminer la limite d'une suite définie par uₙ₊₁ = f(uₙ).",
          ],
          course: [
            {
              heading: "Fonction continue",
              paragraphs: [
                "Une fonction f définie sur un intervalle I est continue en un réel a de I si lim f(x) = f(a) quand x tend vers a. Elle est continue sur I si elle est continue en tout point de I. Graphiquement, la courbe d'une fonction continue sur un intervalle se trace « sans lever le crayon » : elle ne présente ni saut ni trou.",
                "Les fonctions de référence sont continues sur leur ensemble de définition : polynômes, fonctions rationnelles, racine carrée, valeur absolue, exponentielle, sinus et cosinus. Les sommes, produits, quotients (au dénominateur non nul) et composées de fonctions continues sont continues. Contre-exemple : la fonction partie entière, qui à x associe le plus grand entier inférieur ou égal à x, présente un saut en chaque entier.",
                "Toute fonction dérivable sur I est continue sur I. La réciproque est fausse : la fonction valeur absolue est continue en 0 mais pas dérivable en 0 (sa courbe y forme un angle), et la racine carrée est continue en 0 sans y être dérivable (tangente verticale).",
              ],
              box: { label: "Définition", text: "f est continue en a si lim f(x) = f(a) quand x → a. Dérivable implique continue, mais continue n'implique pas dérivable (exemple : |x| en 0)." },
            },
            {
              heading: "Le théorème des valeurs intermédiaires",
              paragraphs: [
                "Soit f une fonction continue sur un intervalle [a ; b]. Pour tout réel k compris entre f(a) et f(b), il existe au moins un réel c de [a ; b] tel que f(c) = k. Autrement dit, une fonction continue ne peut pas passer d'une valeur à une autre sans prendre toutes les valeurs intermédiaires. Analogie : un randonneur qui monte de 500 m à 1 500 m d'altitude passe forcément par l'altitude 1 000 m.",
                "Le théorème affirme l'existence d'au moins une solution, mais pas son unicité : la courbe peut traverser plusieurs fois la droite y = k. Il ne s'applique pas sans continuité : une fonction qui « saute » peut éviter une valeur.",
                "Corollaire (théorème de la bijection) : si f est continue et strictement monotone sur [a ; b], alors pour tout k compris entre f(a) et f(b), l'équation f(x) = k admet une unique solution dans [a ; b]. Le résultat s'étend aux intervalles ouverts ou non bornés, en remplaçant f(a) et f(b) par les limites de f aux bornes.",
              ],
              box: { label: "Théorème", text: "Si f est continue et strictement monotone sur [a ; b], alors pour tout réel k compris entre f(a) et f(b), l'équation f(x) = k admet une unique solution c dans [a ; b]." },
            },
            {
              heading: "Encadrer la solution : balayage et dichotomie",
              paragraphs: [
                "Le corollaire ne donne pas la valeur de la solution. On l'approche par balayage, avec le tableau de valeurs de la calculatrice : on cherche deux valeurs consécutives où f(x) - k change de signe, puis on recommence avec un pas dix fois plus petit. Exemple : f(x) = x³ + x - 1 est continue et strictement croissante sur [0 ; 1] (f'(x) = 3x² + 1 > 0), avec f(0) = -1 et f(1) = 1, donc f(x) = 0 a une unique solution α. Comme f(0,6) = -0,184 et f(0,7) = 0,043, on a 0,6 < α < 0,7.",
                "La méthode de dichotomie (couper en deux) s'écrit facilement en Python : on part de [a ; b] avec f(a) et f(b) de signes contraires, on calcule le milieu m ; si f(a) et f(m) sont de signes contraires, la solution est dans [a ; m], sinon dans [m ; b]. On recommence tant que b - a est plus grand que la précision voulue. À chaque étape, la longueur de l'intervalle est divisée par 2.",
              ],
              box: { label: "Repère", text: "Dichotomie : tant que b - a > précision, m = (a + b)/2 ; si f(a) × f(m) ≤ 0 alors b = m, sinon a = m." },
            },
            {
              heading: "Continuité et suites récurrentes",
              paragraphs: [
                "Si (uₙ) est définie par uₙ₊₁ = f(uₙ), si (uₙ) converge vers l et si f est continue en l, alors f(l) = l. En effet, uₙ₊₁ tend vers l, et f(uₙ) tend vers f(l) par continuité de f en l (limite d'une composée). Par unicité de la limite, l = f(l) : on dit que l est un point fixe de f.",
                "Cette propriété ne démontre pas la convergence : elle donne seulement les valeurs possibles de la limite, une fois la convergence établie, par exemple avec le théorème de convergence monotone. Exemple : si uₙ₊₁ = √(3uₙ + 4) converge, sa limite vérifie l = √(3l + 4), donc l² = 3l + 4, l = 4 ou l = -1 ; si tous les termes sont positifs, l = 4.",
              ],
              box: { label: "Propriété", text: "Si uₙ₊₁ = f(uₙ), lim uₙ = l et f continue en l, alors f(l) = l." },
            },
          ],
          keyPoints: [
            "f continue en a : lim f(x) = f(a) quand x → a. Courbe tracée sans lever le crayon.",
            "Dérivable implique continue ; la réciproque est fausse (|x| en 0).",
            "TVI : f continue sur [a ; b], k entre f(a) et f(b) : au moins un c avec f(c) = k.",
            "Corollaire : continue et strictement monotone donne l'existence et l'unicité de la solution.",
            "On encadre la solution par balayage ou par dichotomie.",
            "Si uₙ₊₁ = f(uₙ) converge vers l et f continue en l, alors f(l) = l.",
          ],
          example: {
            statement: "Démontrer que l'équation x³ + x - 1 = 0 admet une unique solution α dans [0 ; 1], puis en donner un encadrement d'amplitude 0,01.",
            solution: [
              "Soit f(x) = x³ + x - 1. f est un polynôme, donc continue et dérivable sur [0 ; 1], et f'(x) = 3x² + 1 > 0 : f est strictement croissante sur [0 ; 1].",
              "f(0) = -1 et f(1) = 1 + 1 - 1 = 1. Le réel 0 est compris entre f(0) et f(1).",
              "D'après le corollaire du théorème des valeurs intermédiaires, l'équation f(x) = 0 admet une unique solution α dans [0 ; 1].",
              "Balayage au pas 0,1 : f(0,6) = 0,216 + 0,6 - 1 = -0,184 < 0 et f(0,7) = 0,343 + 0,7 - 1 = 0,043 > 0, donc 0,6 < α < 0,7.",
              "Balayage au pas 0,01 : f(0,68) ≈ -0,0056 < 0 et f(0,69) ≈ 0,0185 > 0, donc 0,68 < α < 0,69.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f(x) = x³ + 2x - 5 sur [1 ; 2]. 1. Justifier que f est continue et strictement croissante sur [1 ; 2]. 2. Démontrer que l'équation f(x) = 0 admet une unique solution α dans [1 ; 2]. 3. Donner un encadrement de α d'amplitude 0,1.",
              hint: "Calculez f'(x) et f(1), f(2), puis utilisez le tableau de valeurs de la calculatrice avec un pas de 0,1.",
              solution: [
                "1. f est un polynôme, donc continue et dérivable sur [1 ; 2]. f'(x) = 3x² + 2 > 0, donc f est strictement croissante sur [1 ; 2].",
                "2. f(1) = 1 + 2 - 5 = -2 et f(2) = 8 + 4 - 5 = 7. Le réel 0 est compris entre -2 et 7 ; d'après le corollaire du TVI, f(x) = 0 admet une unique solution α dans [1 ; 2].",
                "3. f(1,3) = 2,197 + 2,6 - 5 = -0,203 < 0 et f(1,4) = 2,744 + 2,8 - 5 = 0,544 > 0.",
                "Donc 1,3 < α < 1,4.",
              ],
            },
            {
              level: 2,
              statement: "Démontrer que l'équation eˣ + x = 2 admet une unique solution α sur ℝ, puis montrer que 0,4 < α < 0,5.",
              hint: "Étudiez g(x) = eˣ + x : son sens de variation et ses limites en -∞ et en +∞.",
              solution: [
                "Soit g(x) = eˣ + x, continue et dérivable sur ℝ, avec g'(x) = eˣ + 1 > 0 : g est strictement croissante sur ℝ.",
                "En -∞ : eˣ → 0 et x → -∞, donc g(x) → -∞. En +∞ : g(x) → +∞.",
                "Le réel 2 est compris entre -∞ et +∞ ; d'après le corollaire du TVI (étendu aux limites), l'équation g(x) = 2 admet une unique solution α dans ℝ.",
                "g(0,4) = e^0,4 + 0,4 ≈ 1,492 + 0,4 = 1,892 < 2 et g(0,5) = e^0,5 + 0,5 ≈ 1,649 + 0,5 = 2,149 > 2.",
                "Comme g est strictement croissante, 0,4 < α < 0,5.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Soit f définie sur ℝ par f(x) = x³ - 3x² + 2. 1. Étudier les variations de f et dresser son tableau de variations, limites comprises. 2. Démontrer que l'équation f(x) = 0 admet exactement trois solutions sur ℝ. Vérifier que 1 est l'une d'elles. 3. Combien de solutions l'équation f(x) = 3 admet-elle ? Justifier.",
              hint: "f'(x) = 3x(x - 2). Appliquez le corollaire du TVI sur chacun des trois intervalles où f est strictement monotone.",
              solution: [
                "1. f'(x) = 3x² - 6x = 3x(x - 2). f' > 0 sur ]-∞ ; 0[, f' < 0 sur ]0 ; 2[, f' > 0 sur ]2 ; +∞[. Donc f est croissante sur ]-∞ ; 0], décroissante sur [0 ; 2], croissante sur [2 ; +∞[, avec f(0) = 2 et f(2) = 8 - 12 + 2 = -2. En factorisant par x³ : f(x) → -∞ en -∞ et f(x) → +∞ en +∞.",
                "2. Sur ]-∞ ; 0], f est continue, strictement croissante, de -∞ à 2 : 0 étant dans ]-∞ ; 2], l'équation a une unique solution. Sur [0 ; 2], f décroît strictement de 2 à -2 : une unique solution. Sur [2 ; +∞[, f croît strictement de -2 à +∞ : une unique solution. Soit exactement trois solutions.",
                "Vérification : f(1) = 1 - 3 + 2 = 0, donc 1 est la solution située dans [0 ; 2] (les deux autres sont 1 - √3 et 1 + √3).",
                "3. Sur ]-∞ ; 0], f(x) ≤ 2 < 3 : aucune solution. Sur [0 ; 2], f(x) ≤ 2 < 3 : aucune solution. Sur [2 ; +∞[, f est continue, strictement croissante de -2 à +∞ et 3 est dans cet intervalle : une unique solution.",
                "L'équation f(x) = 3 admet donc exactement une solution sur ℝ.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démonstration de l'existence et de l'unicité d'une solution de f(x) = k.",
            items: [
              "Justifier que f est continue sur l'intervalle.",
              "Calculer f'(x) et montrer que f est strictement monotone sur l'intervalle.",
              "Calculer les valeurs (ou les limites) de f aux bornes de l'intervalle.",
              "Vérifier que k est compris entre ces valeurs.",
              "Conclure avec le corollaire du théorème des valeurs intermédiaires.",
              "Encadrer la solution par balayage à la calculatrice.",
            ],
          },
          quiz: [
            {
              q: "Le théorème des valeurs intermédiaires garantit :",
              options: ["l'unicité d'une solution", "l'existence d'au moins une solution", "la valeur exacte de la solution", "la dérivabilité de f"],
              answer: 1,
              why: "Sans hypothèse de stricte monotonie, il donne seulement l'existence d'au moins une solution.",
            },
            {
              q: "Quelle affirmation est vraie ?",
              options: ["Toute fonction continue est dérivable", "Une fonction continue n'a pas d'asymptote", "La valeur absolue est dérivable en 0", "Toute fonction dérivable est continue"],
              answer: 3,
              why: "Dérivable implique continue. La réciproque est fausse, comme le montre |x| en 0.",
            },
            {
              q: "f est continue, strictement décroissante sur [0 ; 4], f(0) = 5 et f(4) = -1. Combien de solutions l'équation f(x) = 2 a-t-elle dans [0 ; 4] ?",
              options: ["Exactement une", "Aucune", "Au moins deux", "On ne peut pas savoir"],
              answer: 0,
              why: "2 est compris entre -1 et 5 et f est continue et strictement monotone : une unique solution.",
            },
            {
              q: "uₙ₊₁ = uₙ² - 2uₙ + 2 converge vers l. Quelles valeurs peut prendre l ?",
              options: ["0 ou 1", "1 ou 2", "2 seulement", "-1 ou 2"],
              answer: 1,
              why: "f est continue, donc l = l² - 2l + 2, soit l² - 3l + 2 = 0, c'est-à-dire (l - 1)(l - 2) = 0.",
            },
            {
              q: "On cherche par dichotomie une solution dans [0 ; 1]. Après 3 étapes, quelle est l'amplitude de l'intervalle ?",
              options: ["0,3", "0,25", "0,125", "0,5"],
              answer: 2,
              why: "Chaque étape divise la longueur par 2 : 1/2³ = 1/8 = 0,125.",
            },
          ],
          trap: "Conclure à l'unicité de la solution avec le seul théorème des valeurs intermédiaires : sans la stricte monotonie sur l'intervalle, il peut y avoir plusieurs solutions.",
          method: "Rédigez toujours les trois hypothèses du corollaire dans le même ordre (continuité, stricte monotonie, k compris entre les valeurs aux bornes) et appuyez-vous sur le tableau de variations, intervalle par intervalle.",
        },
      ],
    },
    /* ================================================================== */
    /* COMPLÉMENTS SUR LA DÉRIVATION ET CONVEXITÉ                           */
    /* ================================================================== */
    {
      id: 'derivation-convexite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'derivee-composee',
          title: 'Dérivée d\'une fonction composée',
          minutes: 30,
          objectives: [
            "Décomposer une fonction en une composée g∘u de deux fonctions de référence.",
            "Calculer la dérivée d'une fonction composée avec la formule (g∘u)' = u' × (g'∘u).",
            "Dériver les fonctions de la forme eᵘ, uⁿ, √u et x ↦ f(ax + b).",
            "Utiliser la dérivée d'une composée pour étudier des variations ou une tangente.",
          ],
          course: [
            {
              heading: "La composée de deux fonctions",
              paragraphs: [
                "Soit u une fonction définie sur un intervalle I, à valeurs dans un intervalle J, et g une fonction définie sur J. La composée de u suivie de g est la fonction g∘u (lire « g rond u ») définie sur I par (g∘u)(x) = g(u(x)). On applique d'abord u, puis g au résultat. Analogie : une chaîne de fabrication où la sortie de la première machine devient l'entrée de la seconde.",
                "Exemple : f(x) = √(x² + 1). On calcule d'abord u(x) = x² + 1, puis on applique g(X) = √X. Donc f = g∘u. L'ordre compte : u∘g(x) = u(√x) = (√x)² + 1 = x + 1 (pour x ≥ 0), qui est une tout autre fonction.",
                "Pour décomposer une expression, on se demande quelle est la dernière opération effectuée quand on calcule f(x) à la main : c'est la fonction extérieure g ; ce sur quoi elle agit est la fonction intérieure u. Pour exp(3x - 1), la dernière opération est l'exponentielle : g = exp et u(x) = 3x - 1.",
              ],
              box: { label: "Définition", text: "(g∘u)(x) = g(u(x)) : on applique u, puis g. Il faut que u(x) appartienne à l'ensemble de définition de g." },
            },
            {
              heading: "La formule de dérivation",
              paragraphs: [
                "Si u est dérivable sur I et g dérivable sur J (avec u(x) dans J pour tout x de I), alors g∘u est dérivable sur I et (g∘u)'(x) = u'(x) × g'(u(x)). On dérive la fonction extérieure en gardant l'intérieur intact, puis on multiplie par la dérivée de l'intérieur. Cette formule est admise en terminale.",
                "Cas particulier déjà vu en première : si f est dérivable, la fonction x ↦ f(ax + b) a pour dérivée x ↦ a f'(ax + b). Par exemple, la dérivée de exp(-2x) est -2 exp(-2x), et celle de (5x + 1)² est 5 × 2(5x + 1) = 10(5x + 1).",
                "Exemple : f(x) = √(x² + 1). u(x) = x² + 1, u'(x) = 2x ; g(X) = √X, g'(X) = 1/(2√X). Donc f'(x) = 2x × 1/(2√(x² + 1)) = x/√(x² + 1).",
              ],
              box: { label: "Formule", text: "(g∘u)' = u' × (g'∘u), c'est-à-dire (g(u(x)))' = u'(x) × g'(u(x))." },
            },
            {
              heading: "Les formules usuelles",
              paragraphs: [
                "En appliquant la formule aux fonctions de référence, on obtient des formules à connaître par cœur. Exponentielle : (eᵘ)' = u'eᵘ. Puissance : pour tout entier n ≥ 1, (uⁿ)' = n u' uⁿ⁻¹ (et pour n entier négatif sur un intervalle où u ne s'annule pas). Racine : si u est strictement positive, (√u)' = u'/(2√u). Inverse : si u ne s'annule pas, (1/u)' = -u'/u².",
                "Exemples : (exp(x² - 3x))' = (2x - 3) exp(x² - 3x) ; ((3x² - 1)⁴)' = 4 × 6x × (3x² - 1)³ = 24x(3x² - 1)³ ; (√(2x + 6))' = 2/(2√(2x + 6)) = 1/√(2x + 6) sur ]-3 ; +∞[ ; (1/(x² + 1))' = -2x/(x² + 1)².",
                "Une erreur fréquente consiste à oublier le facteur u'. Pour s'en prémunir, on écrit toujours u(x) et u'(x) sur une ligne à part avant d'appliquer la formule.",
              ],
              box: { label: "À retenir", text: "(eᵘ)' = u'eᵘ ; (uⁿ)' = n u' uⁿ⁻¹ ; (√u)' = u'/(2√u) avec u > 0 ; (1/u)' = -u'/u² avec u ≠ 0 ; (f(ax + b))' = a f'(ax + b)." },
            },
            {
              heading: "Application : variations d'une composée",
              paragraphs: [
                "Pour étudier les variations de f(x) = exp(-x²), on dérive : u(x) = -x², u'(x) = -2x, donc f'(x) = -2x exp(-x²). Comme une exponentielle est strictement positive, f'(x) a le signe de -2x : positif sur ]-∞ ; 0[, négatif sur ]0 ; +∞[. f est croissante sur ]-∞ ; 0], décroissante sur [0 ; +∞[, de maximum f(0) = 1.",
                "Cette remarque est très utile : dans un produit de la forme (expression) × eᵘ, le facteur exponentiel est toujours strictement positif, donc le signe de la dérivée est celui de l'autre facteur. De même, dans u'/(2√u), le signe est celui de u'.",
              ],
            },
          ],
          keyPoints: [
            "(g∘u)(x) = g(u(x)) : u d'abord, g ensuite ; l'ordre compte.",
            "(g∘u)' = u' × (g'∘u) : dériver l'extérieur sans toucher l'intérieur, puis multiplier par u'.",
            "(eᵘ)' = u'eᵘ et (f(ax + b))' = a f'(ax + b).",
            "(uⁿ)' = n u' uⁿ⁻¹ et (√u)' = u'/(2√u) pour u > 0.",
            "eᵘ > 0 : le signe de u'eᵘ est celui de u'.",
          ],
          example: {
            statement: "Calculer la dérivée de f(x) = (3x² - 1)⁴ sur ℝ, puis celle de g(x) = exp(1 - x²).",
            solution: [
              "Pour f : u(x) = 3x² - 1 et u'(x) = 6x. On applique (uⁿ)' = n u' uⁿ⁻¹ avec n = 4.",
              "f'(x) = 4 × 6x × (3x² - 1)³ = 24x(3x² - 1)³.",
              "Pour g : u(x) = 1 - x² et u'(x) = -2x. On applique (eᵘ)' = u'eᵘ.",
              "g'(x) = -2x exp(1 - x²).",
              "Contrôle : exp(1 - x²) > 0, donc g'(x) a le signe de -2x ; g est croissante puis décroissante, avec un maximum g(0) = e.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la dérivée de chacune des fonctions suivantes : a) f(x) = exp(5x - 2) sur ℝ ; b) g(x) = √(2x + 6) sur ]-3 ; +∞[ ; c) h(x) = (1 - 4x)³ sur ℝ.",
              hint: "Ce sont trois composées avec une fonction affine à l'intérieur : (f(ax + b))' = a f'(ax + b).",
              solution: [
                "a) u(x) = 5x - 2, u'(x) = 5. f'(x) = 5 exp(5x - 2).",
                "b) u(x) = 2x + 6 > 0 sur ]-3 ; +∞[, u'(x) = 2. g'(x) = 2/(2√(2x + 6)) = 1/√(2x + 6).",
                "c) u(x) = 1 - 4x, u'(x) = -4. h'(x) = 3 × (-4) × (1 - 4x)² = -12(1 - 4x)².",
              ],
            },
            {
              level: 2,
              statement: "1. Soit f(x) = x e⁻²ˣ sur ℝ. Calculer f'(x), étudier son signe et en déduire les variations de f et son maximum. 2. Soit g(x) = 1/(x² + 1)². Calculer g'(x).",
              hint: "1. f est un produit : (uv)' = u'v + uv', et la dérivée de e⁻²ˣ est -2e⁻²ˣ. 2. Écrivez g(x) = (x² + 1)⁻² et utilisez (uⁿ)' avec n = -2.",
              solution: [
                "1. f'(x) = 1 × e⁻²ˣ + x × (-2e⁻²ˣ) = (1 - 2x)e⁻²ˣ.",
                "Comme e⁻²ˣ > 0, f'(x) a le signe de 1 - 2x : positif pour x < 1/2, négatif pour x > 1/2.",
                "f est croissante sur ]-∞ ; 1/2] et décroissante sur [1/2 ; +∞[. Son maximum est f(1/2) = (1/2)e⁻¹ = 1/(2e) ≈ 0,184.",
                "2. g(x) = (x² + 1)⁻² avec u(x) = x² + 1 (qui ne s'annule pas) et u'(x) = 2x. g'(x) = -2 × 2x × (x² + 1)⁻³ = -4x/(x² + 1)³.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Soit f définie sur ℝ par f(x) = √(x² - 2x + 5). 1. Justifier que f est bien définie et dérivable sur ℝ. 2. Calculer f'(x) et dresser le tableau de variations de f. 3. Déterminer une équation de la tangente à la courbe de f au point d'abscisse 3.",
              hint: "Calculez le discriminant de x² - 2x + 5 pour montrer que ce trinôme est strictement positif, puis appliquez (√u)' = u'/(2√u).",
              solution: [
                "1. Le trinôme x² - 2x + 5 a pour discriminant Δ = 4 - 20 = -16 < 0 et un coefficient de x² positif : il est strictement positif sur ℝ. La racine carrée étant dérivable sur ]0 ; +∞[, f est définie et dérivable sur ℝ.",
                "2. u(x) = x² - 2x + 5, u'(x) = 2x - 2. f'(x) = (2x - 2)/(2√(x² - 2x + 5)) = (x - 1)/√(x² - 2x + 5).",
                "Le dénominateur est strictement positif, donc f'(x) a le signe de x - 1 : f est décroissante sur ]-∞ ; 1] et croissante sur [1 ; +∞[, de minimum f(1) = √4 = 2.",
                "3. f(3) = √(9 - 6 + 5) = √8 = 2√2 et f'(3) = 2/√8 = 2/(2√2) = 1/√2 = √2/2.",
                "Tangente : y = f'(3)(x - 3) + f(3) = (√2/2)(x - 3) + 2√2 = (√2/2)x - 3√2/2 + 4√2/2, soit y = (√2/2)x + √2/2.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque fonction à sa dérivée.",
            pairs: [
              { left: "exp(3x)", right: "3 exp(3x)" },
              { left: "exp(x²)", right: "2x exp(x²)" },
              { left: "(2x + 1)⁵", right: "10(2x + 1)⁴" },
              { left: "√(4x + 1)", right: "2/√(4x + 1)" },
              { left: "1/(x² + 3)", right: "-2x/(x² + 3)²" },
              { left: "exp(-x)", right: "-exp(-x)" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la dérivée de exp(x² + 1) ?",
              options: ["2x exp(x² + 1)", "exp(x² + 1)", "exp(2x)", "(x² + 1) exp(x²)"],
              answer: 0,
              why: "(eᵘ)' = u'eᵘ avec u(x) = x² + 1 et u'(x) = 2x.",
            },
            {
              q: "Pour f(x) = √(x² + 1), quelle est la fonction extérieure ?",
              options: ["x ↦ x² + 1", "x ↦ x²", "x ↦ 1/x", "x ↦ √x"],
              answer: 3,
              why: "La dernière opération effectuée est la racine carrée : g = √ et u(x) = x² + 1.",
            },
            {
              q: "Quelle est la dérivée de (2 - x)³ ?",
              options: ["3(2 - x)²", "-3(2 - x)²", "-3(2 - x)³", "3(2 - x)"],
              answer: 1,
              why: "(uⁿ)' = n u' uⁿ⁻¹ avec u' = -1 : 3 × (-1) × (2 - x)² = -3(2 - x)².",
            },
            {
              q: "Quel est le signe de f'(x) pour f(x) = exp(x³ - 3x) ?",
              options: ["Toujours positif", "Celui de 3x² - 3", "Celui de x³ - 3x", "Toujours négatif"],
              answer: 1,
              why: "f'(x) = (3x² - 3) exp(x³ - 3x) et l'exponentielle est strictement positive.",
            },
            {
              q: "Quelle est la dérivée de √(3x) sur ]0 ; +∞[ ?",
              options: ["1/(2√(3x))", "3/√(3x)", "3/(2√(3x))", "√3/(2x)"],
              answer: 2,
              why: "(√u)' = u'/(2√u) avec u'(x) = 3.",
            },
          ],
          trap: "Oublier de multiplier par la dérivée de la fonction intérieure, par exemple écrire que la dérivée de exp(x²) est exp(x²) au lieu de 2x exp(x²).",
          method: "Avant de dériver une composée, écrivez sur une ligne u(x) = ... et u'(x) = ..., puis la formule utilisée. Contrôlez ensuite avec un cas simple : pour u(x) = x, vous devez retrouver la dérivée de la fonction de référence.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'derivee-seconde',
          title: 'La dérivée seconde',
          minutes: 25,
          objectives: [
            "Calculer la dérivée seconde f'' d'une fonction deux fois dérivable.",
            "Interpréter f'' comme la vitesse de variation de f' et, en physique, comme une accélération.",
            "Utiliser le signe de f'' pour étudier les variations de f', puis le signe de f' et les variations de f.",
          ],
          course: [
            {
              heading: "Définition et premiers calculs",
              paragraphs: [
                "Soit f une fonction dérivable sur un intervalle I. Si sa fonction dérivée f' est elle-même dérivable sur I, on dit que f est deux fois dérivable sur I, et la dérivée de f' s'appelle la dérivée seconde de f, notée f''. Autrement dit, f'' = (f')'.",
                "Exemple : f(x) = x³ - 2x² + 5x. Alors f'(x) = 3x² - 4x + 5 et f''(x) = 6x - 4. Pour g(x) = e²ˣ : g'(x) = 2e²ˣ et g''(x) = 4e²ˣ. Pour l'exponentielle, toutes les dérivées successives sont égales à eˣ.",
                "Pour un produit, il faut appliquer deux fois la formule (uv)' = u'v + uv' et factoriser à chaque étape. Exemple : f(x) = xeˣ. f'(x) = eˣ + xeˣ = (x + 1)eˣ ; puis f''(x) = eˣ + (x + 1)eˣ = (x + 2)eˣ.",
              ],
              box: { label: "Définition", text: "Si f' est dérivable sur I, sa dérivée est la dérivée seconde de f : f'' = (f')'. On dit alors que f est deux fois dérivable sur I." },
            },
            {
              heading: "Ce que mesure la dérivée seconde",
              paragraphs: [
                "f'(a) est le coefficient directeur de la tangente au point d'abscisse a. Comme f'' est la dérivée de f', son signe donne les variations de f' : si f'' > 0 sur I, f' est croissante sur I, donc les pentes des tangentes augmentent quand on se déplace vers la droite. Si f'' < 0, les pentes diminuent.",
                "En physique, si x(t) est la position d'un objet en mouvement rectiligne à l'instant t, x'(t) est sa vitesse v(t) et x''(t) = v'(t) est son accélération a(t). Par exemple, pour une chute libre sans frottement, x(t) = 4,9t² (en mètres, t en secondes, axe orienté vers le bas) donne v(t) = 9,8t et a(t) = 9,8 m/s², l'accélération de la pesanteur.",
              ],
              box: { label: "À retenir", text: "Le signe de f'' donne le sens de variation de f'. En physique : position x(t), vitesse x'(t), accélération x''(t)." },
            },
            {
              heading: "Une chaîne d'étude classique au bac",
              paragraphs: [
                "Il arrive souvent que l'on ne sache pas étudier directement le signe de f'(x). On utilise alors f'' : signe de f'' → variations de f' → signe de f' (grâce à une valeur particulière, souvent le minimum ou le maximum de f') → variations de f.",
                "Exemple : f(x) = eˣ - x²/2 - x. On a f'(x) = eˣ - x - 1, dont le signe n'est pas évident, puis f''(x) = eˣ - 1. Or eˣ - 1 < 0 pour x < 0 et eˣ - 1 > 0 pour x > 0, car e⁰ = 1 et l'exponentielle est strictement croissante. Donc f' est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[ : elle admet un minimum en 0, égal à f'(0) = 1 - 0 - 1 = 0.",
                "Ainsi f'(x) ≥ 0 pour tout réel x, et f est croissante sur ℝ. Au passage, on a démontré l'inégalité classique eˣ ≥ x + 1 pour tout réel x.",
              ],
              box: { label: "Repère", text: "Chaîne d'étude : signe de f'' → variations de f' → extremum de f' → signe de f' → variations de f." },
            },
          ],
          keyPoints: [
            "f'' = (f')' : on dérive deux fois, en simplifiant ou factorisant à chaque étape.",
            "(xeˣ)' = (x + 1)eˣ et (xeˣ)'' = (x + 2)eˣ.",
            "Le signe de f'' donne les variations de f'.",
            "Physique : vitesse = x'(t), accélération = x''(t).",
            "Chaîne : f'' → variations de f' → signe de f' → variations de f.",
          ],
          example: {
            statement: "Soit f(x) = eˣ - x²/2 - x sur ℝ. Calculer f'(x) et f''(x), puis en déduire le sens de variation de f.",
            solution: [
              "f'(x) = eˣ - x - 1 et f''(x) = eˣ - 1.",
              "Signe de f'' : eˣ - 1 > 0 équivaut à eˣ > e⁰, soit x > 0, car exp est strictement croissante. Donc f''(x) < 0 sur ]-∞ ; 0[ et f''(x) > 0 sur ]0 ; +∞[.",
              "Donc f' est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[ : elle admet un minimum en 0.",
              "Ce minimum vaut f'(0) = e⁰ - 0 - 1 = 0. Donc f'(x) ≥ 0 pour tout réel x, avec égalité seulement en 0.",
              "Conclusion : f est croissante sur ℝ.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la dérivée seconde de chacune des fonctions suivantes : a) f(x) = 2x⁴ - x³ + 5x sur ℝ ; b) g(x) = e³ˣ sur ℝ ; c) h(x) = 1/x sur ]0 ; +∞[.",
              hint: "Dérivez une première fois, simplifiez, puis dérivez à nouveau. Pour c), 1/x = x⁻¹.",
              solution: [
                "a) f'(x) = 8x³ - 3x² + 5, puis f''(x) = 24x² - 6x.",
                "b) g'(x) = 3e³ˣ, puis g''(x) = 9e³ˣ.",
                "c) h'(x) = -1/x² = -x⁻², puis h''(x) = 2x⁻³ = 2/x³.",
              ],
            },
            {
              level: 2,
              statement: "Un mobile se déplace sur un axe. Sa position en mètres à l'instant t (en secondes), pour t dans [0 ; 5], est x(t) = -t³ + 6t². 1. Calculer la vitesse v(t) et l'accélération a(t). 2. À quel instant l'accélération est-elle nulle ? 3. Montrer que la vitesse est maximale à cet instant et donner cette vitesse maximale.",
              hint: "v(t) = x'(t) et a(t) = x''(t). Le signe de a(t) donne les variations de v.",
              solution: [
                "1. v(t) = x'(t) = -3t² + 12t et a(t) = v'(t) = -6t + 12.",
                "2. a(t) = 0 équivaut à t = 2 : l'accélération est nulle à l'instant t = 2 s.",
                "3. a(t) > 0 pour t < 2 et a(t) < 0 pour t > 2 : v est croissante sur [0 ; 2] puis décroissante sur [2 ; 5].",
                "La vitesse est donc maximale à t = 2 s et vaut v(2) = -12 + 24 = 12 m/s.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Soit f définie sur ℝ par f(x) = (x² + 1)e⁻ˣ. 1. Démontrer que f'(x) = -(x - 1)²e⁻ˣ et en déduire le sens de variation de f. 2. Démontrer que f''(x) = (x - 1)(x - 3)e⁻ˣ. 3. Étudier les variations de f' sur ℝ. 4. En déduire, parmi les tangentes à la courbe de f aux points d'abscisse x ≥ 1, celle dont le coefficient directeur est le plus petit, et donner ce coefficient (valeur exacte et valeur approchée à 0,01 près).",
              hint: "La dérivée de e⁻ˣ est -e⁻ˣ. Pour f'', dérivez -(x - 1)²e⁻ˣ comme un produit, puis factorisez par (x - 1)e⁻ˣ.",
              solution: [
                "1. f'(x) = 2x e⁻ˣ + (x² + 1)(-e⁻ˣ) = (-x² + 2x - 1)e⁻ˣ = -(x - 1)²e⁻ˣ. Ce nombre est négatif ou nul (nul seulement en x = 1), donc f est décroissante sur ℝ.",
                "2. f'(x) = -(x - 1)²e⁻ˣ. f''(x) = -2(x - 1)e⁻ˣ + (x - 1)²e⁻ˣ = (x - 1)e⁻ˣ(-2 + x - 1) = (x - 1)(x - 3)e⁻ˣ.",
                "3. e⁻ˣ > 0, donc f''(x) a le signe de (x - 1)(x - 3) : positif sur ]-∞ ; 1[, négatif sur ]1 ; 3[, positif sur ]3 ; +∞[. f' est croissante sur ]-∞ ; 1], décroissante sur [1 ; 3], croissante sur [3 ; +∞[.",
                "4. Sur [1 ; +∞[, f' décroît de f'(1) = 0 jusqu'à f'(3) puis croît : son minimum sur [1 ; +∞[ est f'(3) = -(3 - 1)²e⁻³ = -4e⁻³.",
                "La tangente cherchée est celle au point d'abscisse 3, de coefficient directeur -4e⁻³ ≈ -0,20.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La dérivée seconde et ce qu'elle dit.",
            statements: [
              { text: "Si f''(x) > 0 sur I, alors f est croissante sur I.", true: false, why: "f'' > 0 donne f' croissante, pas f croissante : x² a f'' = 2 > 0 mais décroît sur ]-∞ ; 0]." },
              { text: "La dérivée seconde de x³ est 6x.", true: true, why: "(x³)' = 3x² puis (3x²)' = 6x." },
              { text: "Si x(t) est une position, x''(t) est une accélération.", true: true, why: "x'(t) est la vitesse et sa dérivée est l'accélération." },
              { text: "La dérivée seconde de e²ˣ est 2e²ˣ.", true: false, why: "On dérive deux fois : 2e²ˣ puis 4e²ˣ." },
              { text: "Si f'' > 0 sur I, les pentes des tangentes augmentent de gauche à droite.", true: true, why: "f'' > 0 signifie que f', le coefficient directeur des tangentes, est croissante." },
              { text: "Une fonction affine a une dérivée seconde nulle.", true: true, why: "(ax + b)' = a, constante, dont la dérivée est 0." },
              { text: "(xeˣ)'' = xeˣ.", true: false, why: "(xeˣ)' = (x + 1)eˣ et (xeˣ)'' = (x + 2)eˣ." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la dérivée seconde de f(x) = x⁴ - 3x ?",
              options: ["4x³ - 3", "12x²", "12x² - 3", "4x³"],
              answer: 1,
              why: "f'(x) = 4x³ - 3 puis f''(x) = 12x² : la constante -3 disparaît à la seconde dérivation.",
            },
            {
              q: "Si f'' est positive sur I, alors :",
              options: ["f' est croissante sur I", "f est positive sur I", "f est croissante sur I", "f' est positive sur I"],
              answer: 0,
              why: "f'' est la dérivée de f' : son signe donne les variations de f', et rien de plus directement.",
            },
            {
              q: "La position d'un mobile est x(t) = 3t² + 2t. Quelle est son accélération ?",
              options: ["6t + 2", "3", "6t", "6"],
              answer: 3,
              why: "v(t) = 6t + 2 et a(t) = v'(t) = 6 : l'accélération est constante.",
            },
            {
              q: "Quelle est la dérivée seconde de e⁻ˣ ?",
              options: ["-e⁻ˣ", "e⁻ˣ", "-2e⁻ˣ", "e⁻²ˣ"],
              answer: 1,
              why: "(e⁻ˣ)' = -e⁻ˣ, puis (-e⁻ˣ)' = e⁻ˣ.",
            },
            {
              q: "f' est décroissante puis croissante, de minimum f'(2) = 1. Que peut-on dire de f ?",
              options: ["f admet un minimum en 2", "f est décroissante sur ℝ", "On ne peut rien dire", "f est croissante sur ℝ"],
              answer: 3,
              why: "Le minimum de f' est 1 > 0, donc f'(x) > 0 pour tout x : f est strictement croissante.",
            },
          ],
          trap: "Confondre le rôle de f'' et celui de f' : le signe de f'' renseigne sur les variations de f', pas directement sur celles de f.",
          method: "Lorsque le signe de f'(x) résiste, pensez à la chaîne f'' → variations de f' → valeur de l'extremum de f' → signe de f'. Notez chaque étape sur une ligne du tableau de variations.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'convexite-inflexion',
          title: 'Convexité et points d\'inflexion',
          minutes: 35,
          objectives: [
            "Définir une fonction convexe ou concave sur un intervalle à l'aide des sécantes et des tangentes.",
            "Étudier la convexité d'une fonction à l'aide de f' ou du signe de f''.",
            "Déterminer les points d'inflexion d'une courbe.",
            "Utiliser la convexité pour démontrer une inégalité.",
          ],
          course: [
            {
              heading: "Fonction convexe, fonction concave",
              paragraphs: [
                "Une fonction f est convexe sur un intervalle I si, pour tous points A et B de sa courbe d'abscisses dans I, l'arc de courbe entre A et B est situé en dessous de la sécante (la corde) [AB]. Elle est concave sur I si l'arc est au-dessus de ses sécantes. Image : une courbe convexe a la forme d'un bol qui retient l'eau, une courbe concave celle d'un bol retourné.",
                "Lorsque f est dérivable sur I, on démontre que f est convexe sur I si et seulement si sa courbe est au-dessus de toutes ses tangentes en des points de I, et concave si et seulement si sa courbe est en dessous de toutes ses tangentes.",
                "Exemples de référence : x ↦ x² et x ↦ eˣ sont convexes sur ℝ ; x ↦ √x est concave sur [0 ; +∞[ ; x ↦ 1/x est concave sur ]-∞ ; 0[ et convexe sur ]0 ; +∞[ ; x ↦ x³ est concave sur ]-∞ ; 0] et convexe sur [0 ; +∞[ ; une fonction affine est à la fois convexe et concave.",
              ],
              box: { label: "Définition", text: "f est convexe sur I si sa courbe est en dessous de ses sécantes sur I ; concave si elle est au-dessus. Si f est dérivable : convexe équivaut à « courbe au-dessus de ses tangentes »." },
            },
            {
              heading: "Caractériser la convexité par les dérivées",
              paragraphs: [
                "Si f est dérivable sur I, f est convexe sur I si et seulement si f' est croissante sur I, et concave si et seulement si f' est décroissante sur I. Intuitivement, une courbe convexe « tourne vers la gauche » : ses tangentes ont des pentes de plus en plus grandes.",
                "Si f est deux fois dérivable sur I, on en déduit le critère le plus utilisé : f est convexe sur I si et seulement si f''(x) ≥ 0 pour tout x de I, et concave sur I si et seulement si f''(x) ≤ 0 pour tout x de I.",
                "Exemple : f(x) = x³ - 3x² + 2. f'(x) = 3x² - 6x et f''(x) = 6x - 6. f'' ≤ 0 sur ]-∞ ; 1] et f'' ≥ 0 sur [1 ; +∞[ : f est concave sur ]-∞ ; 1] et convexe sur [1 ; +∞[.",
              ],
              box: { label: "Propriété", text: "f deux fois dérivable sur I : f convexe sur I ⇔ f' croissante sur I ⇔ f'' ≥ 0 sur I. f concave sur I ⇔ f' décroissante sur I ⇔ f'' ≤ 0 sur I." },
            },
            {
              heading: "Points d'inflexion",
              paragraphs: [
                "Un point d'inflexion est un point de la courbe où celle-ci traverse sa tangente. En un tel point, la fonction change de convexité : elle passe de concave à convexe ou l'inverse. Pour f(x) = x³ - 3x² + 2, le point A(1 ; 0) est un point d'inflexion : la tangente y a pour équation y = f'(1)(x - 1) + f(1) = -3x + 3, et la courbe passe d'un côté à l'autre de cette droite.",
                "Si f est deux fois dérivable et si f'' s'annule en a en changeant de signe, alors le point d'abscisse a est un point d'inflexion. Le changement de signe est indispensable : pour f(x) = x⁴, f''(x) = 12x² s'annule en 0 sans changer de signe ; f est convexe sur ℝ et l'origine n'est pas un point d'inflexion.",
              ],
              box: { label: "À retenir", text: "Point d'inflexion : la courbe traverse sa tangente et la convexité change. Critère : f'' s'annule en changeant de signe. f''(a) = 0 seul ne suffit pas (x⁴ en 0)." },
            },
            {
              heading: "Convexité et inégalités",
              paragraphs: [
                "La position de la courbe par rapport à une tangente fournit des inégalités sans calcul supplémentaire. La fonction exponentielle est convexe sur ℝ et sa tangente en 0 a pour équation y = x + 1 : la courbe est au-dessus de cette tangente, donc eˣ ≥ x + 1 pour tout réel x.",
                "La fonction racine carrée est concave sur [0 ; +∞[ et sa tangente au point d'abscisse 1 a pour équation y = (1/2)(x - 1) + 1 = (x + 1)/2. La courbe est en dessous, donc √x ≤ (x + 1)/2 pour tout x ≥ 0. Pour x = 4 : √4 = 2 ≤ 2,5.",
                "On utilise aussi les cordes : si f est convexe sur [a ; b], le milieu de la corde est au-dessus de la courbe, d'où f((a + b)/2) ≤ (f(a) + f(b))/2. Pour f(x) = x², cela donne ((a + b)/2)² ≤ (a² + b²)/2.",
              ],
            },
          ],
          keyPoints: [
            "Convexe : courbe en dessous de ses sécantes et au-dessus de ses tangentes. Concave : l'inverse.",
            "Convexe ⇔ f' croissante ⇔ f'' ≥ 0. Concave ⇔ f' décroissante ⇔ f'' ≤ 0.",
            "Références : x² et eˣ convexes ; √x concave ; x³ concave puis convexe.",
            "Point d'inflexion : la courbe traverse sa tangente ; f'' s'annule en changeant de signe.",
            "f''(a) = 0 ne suffit pas : x⁴ en 0 n'a pas de point d'inflexion.",
            "Tangente + convexité = inégalité : eˣ ≥ x + 1 et √x ≤ (x + 1)/2.",
          ],
          example: {
            statement: "Soit f(x) = x³ - 3x² + 2 sur ℝ. Étudier la convexité de f, déterminer le point d'inflexion de sa courbe et l'équation de la tangente en ce point.",
            solution: [
              "f'(x) = 3x² - 6x et f''(x) = 6x - 6 = 6(x - 1).",
              "f''(x) ≤ 0 pour x ≤ 1 et f''(x) ≥ 0 pour x ≥ 1 : f est concave sur ]-∞ ; 1] et convexe sur [1 ; +∞[.",
              "f'' s'annule en 1 en changeant de signe : le point A d'abscisse 1 est un point d'inflexion, avec f(1) = 1 - 3 + 2 = 0, donc A(1 ; 0).",
              "f'(1) = 3 - 6 = -3. La tangente en A a pour équation y = -3(x - 1) + 0, soit y = -3x + 3.",
              "Interprétation : la courbe est au-dessus de cette tangente à gauche de A et en dessous à droite de A, puisqu'elle la traverse en A.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f(x) = x³ + 3x² - 1 sur ℝ. Étudier la convexité de f et déterminer les coordonnées du point d'inflexion de sa courbe.",
              hint: "Calculez f'' et étudiez son signe : c'est une fonction affine.",
              solution: [
                "f'(x) = 3x² + 6x et f''(x) = 6x + 6 = 6(x + 1).",
                "f''(x) ≤ 0 pour x ≤ -1 et f''(x) ≥ 0 pour x ≥ -1 : f est concave sur ]-∞ ; -1] et convexe sur [-1 ; +∞[.",
                "f'' s'annule en -1 en changeant de signe : point d'inflexion d'abscisse -1, avec f(-1) = -1 + 3 - 1 = 1.",
                "Le point d'inflexion est I(-1 ; 1).",
              ],
            },
            {
              level: 2,
              statement: "Soit g(x) = xeˣ sur ℝ. 1. Calculer g''(x) et étudier la convexité de g. 2. Donner les coordonnées du point d'inflexion. 3. Déterminer la tangente à la courbe en 0 et en déduire que xeˣ ≥ x pour tout x ≥ -2.",
              hint: "g'(x) = (x + 1)eˣ. Sur un intervalle où g est convexe, la courbe est au-dessus de ses tangentes.",
              solution: [
                "1. g'(x) = (x + 1)eˣ et g''(x) = eˣ + (x + 1)eˣ = (x + 2)eˣ. Comme eˣ > 0, g'' a le signe de x + 2 : g est concave sur ]-∞ ; -2] et convexe sur [-2 ; +∞[.",
                "2. g'' s'annule en -2 en changeant de signe. g(-2) = -2e⁻². Le point d'inflexion est J(-2 ; -2e⁻²), avec -2e⁻² ≈ -0,27.",
                "3. g(0) = 0 et g'(0) = 1 : la tangente en 0 a pour équation y = x.",
                "g est convexe sur [-2 ; +∞[ et 0 appartient à cet intervalle, donc sur [-2 ; +∞[ la courbe est au-dessus de cette tangente : xeˣ ≥ x pour tout x ≥ -2.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Soit f définie sur ℝ par f(x) = exp(-x²). 1. Montrer que f'(x) = -2x exp(-x²) et que f''(x) = (4x² - 2) exp(-x²). 2. Étudier la convexité de f sur ℝ. 3. Démontrer que la courbe de f admet deux points d'inflexion, dont on donnera les coordonnées exactes, puis une valeur approchée à 0,01 près de leur ordonnée. 4. Déterminer une équation de la tangente au point d'inflexion d'abscisse positive.",
              hint: "4x² - 2 = 2(2x² - 1) s'annule pour x² = 1/2, soit x = ±√2/2.",
              solution: [
                "1. Avec u(x) = -x², u'(x) = -2x : f'(x) = -2x exp(-x²). Puis f''(x) = -2 exp(-x²) + (-2x)(-2x) exp(-x²) = (4x² - 2) exp(-x²).",
                "2. exp(-x²) > 0, donc f''(x) a le signe de 4x² - 2, trinôme de racines -√2/2 et √2/2, positif à l'extérieur des racines. f est convexe sur ]-∞ ; -√2/2], concave sur [-√2/2 ; √2/2] et convexe sur [√2/2 ; +∞[.",
                "3. f'' s'annule en changeant de signe en -√2/2 et en √2/2 : deux points d'inflexion. Comme (√2/2)² = 1/2, leurs ordonnées valent exp(-1/2). Points : (-√2/2 ; exp(-1/2)) et (√2/2 ; exp(-1/2)), avec exp(-1/2) ≈ 0,61.",
                "4. f'(√2/2) = -2 × (√2/2) × exp(-1/2) = -√2 exp(-1/2).",
                "Tangente : y = -√2 exp(-1/2)(x - √2/2) + exp(-1/2) = exp(-1/2)(-√2x + 1 + 1), soit y = exp(-1/2)(2 - √2x).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'étude de la convexité d'une fonction.",
            items: [
              "Vérifier que f est deux fois dérivable sur l'intervalle.",
              "Calculer f'(x).",
              "Calculer f''(x) et le factoriser.",
              "Étudier le signe de f''(x) dans un tableau.",
              "En déduire les intervalles où f est convexe ou concave.",
              "Repérer les valeurs où f'' s'annule en changeant de signe : points d'inflexion.",
              "Calculer les coordonnées des points d'inflexion.",
            ],
          },
          quiz: [
            {
              q: "Sur un intervalle où f est convexe, la courbe de f est :",
              options: ["au-dessus de ses sécantes", "en dessous de ses tangentes", "au-dessus de ses tangentes", "toujours croissante"],
              answer: 2,
              why: "Convexe : au-dessus des tangentes et en dessous des sécantes. Une fonction convexe peut décroître (x² sur ]-∞ ; 0]).",
            },
            {
              q: "f''(x) = x - 2. Sur quel intervalle f est-elle concave ?",
              options: ["]-∞ ; 2]", "[2 ; +∞[", "]-∞ ; 0]", "ℝ"],
              answer: 0,
              why: "f est concave là où f'' ≤ 0, c'est-à-dire pour x ≤ 2.",
            },
            {
              q: "f''(3) = 0. Peut-on affirmer que la courbe a un point d'inflexion d'abscisse 3 ?",
              options: ["Oui, toujours", "Non, jamais", "Oui, si f'(3) = 0", "Seulement si f'' change de signe en 3"],
              answer: 3,
              why: "Il faut que f'' change de signe en 3. Contre-exemple : x⁴ en 0, où f'' s'annule sans changer de signe.",
            },
            {
              q: "Quelle inégalité découle de la convexité de l'exponentielle ?",
              options: ["eˣ ≤ x + 1", "eˣ ≥ x + 1", "eˣ ≥ x²", "eˣ ≤ 1"],
              answer: 1,
              why: "La courbe est au-dessus de sa tangente en 0, d'équation y = x + 1.",
            },
            {
              q: "Laquelle de ces fonctions est concave sur ]0 ; +∞[ ?",
              options: ["x ↦ √x", "x ↦ x²", "x ↦ eˣ", "x ↦ 1/x"],
              answer: 0,
              why: "La dérivée seconde de √x est -1/(4x√x) < 0 sur ]0 ; +∞[. Les trois autres y sont convexes.",
            },
          ],
          trap: "Affirmer qu'il y a un point d'inflexion dès que f''(a) = 0, sans vérifier que f'' change de signe en a, ou confondre convexité et croissance.",
          method: "Pour la convexité, raisonnez toujours sur le signe de f'' (et non de f') et faites un tableau de signes de f''. Pour vous souvenir du sens, testez avec x² : f'' = 2 > 0 et la courbe est un bol convexe.",
        },
      ],
    },
    /* ================================================================== */
    /* COMBINATOIRE ET DÉNOMBREMENT                                         */
    /* ================================================================== */
    {
      id: 'denombrement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'principes-de-denombrement',
          title: 'Principes additif et multiplicatif, k-uplets',
          minutes: 30,
          objectives: [
            "Utiliser le principe additif pour dénombrer une réunion d'ensembles deux à deux disjoints.",
            "Utiliser le principe multiplicatif et le produit cartésien pour dénombrer des couples ou des k-uplets.",
            "Calculer le nombre de k-uplets d'un ensemble à n éléments.",
            "Démontrer et utiliser le fait qu'un ensemble à n éléments possède 2ⁿ parties.",
          ],
          course: [
            {
              heading: "Ensembles finis et principe additif",
              paragraphs: [
                "Un ensemble fini E est un ensemble qui a un nombre fini d'éléments ; ce nombre s'appelle son cardinal, noté card(E). Par exemple, l'ensemble des chiffres {0 ; 1 ; ... ; 9} a pour cardinal 10, et l'ensemble vide ∅ a pour cardinal 0. Dénombrer, c'est compter les éléments d'un ensemble sans les énumérer un par un.",
                "Principe additif : si A et B sont disjoints (A ∩ B = ∅), alors card(A ∪ B) = card(A) + card(B). Plus généralement, le cardinal d'une réunion d'ensembles deux à deux disjoints est la somme de leurs cardinaux. Exemple : une classe compte 14 élèves qui font espagnol en LV2 et 11 qui font allemand, chaque élève ayant une seule LV2 : la classe compte 25 élèves.",
                "Si les ensembles ne sont pas disjoints, on compterait deux fois les éléments communs : on a alors card(A ∪ B) = card(A) + card(B) - card(A ∩ B). Une conséquence utile est le passage au complémentaire : si A est une partie de E, le nombre d'éléments de E qui ne sont pas dans A est card(E) - card(A).",
              ],
              box: { label: "Propriété", text: "Principe additif : si A₁, A₂, ..., Aₚ sont deux à deux disjoints, card(A₁ ∪ A₂ ∪ ... ∪ Aₚ) = card(A₁) + card(A₂) + ... + card(Aₚ)." },
            },
            {
              heading: "Produit cartésien et principe multiplicatif",
              paragraphs: [
                "Le produit cartésien A × B est l'ensemble des couples (a ; b) avec a dans A et b dans B. L'ordre compte : (a ; b) et (b ; a) sont deux couples différents si a ≠ b. Principe multiplicatif : card(A × B) = card(A) × card(B). Plus généralement, card(A₁ × A₂ × ... × Aₚ) = card(A₁) × card(A₂) × ... × card(Aₚ).",
                "Concrètement : si un choix se fait en plusieurs étapes successives, et si le nombre de possibilités à chaque étape ne dépend pas des choix précédents, le nombre total de possibilités est le produit des nombres de possibilités de chaque étape. Un arbre de choix illustre ce principe : chaque branche correspond à une possibilité.",
                "Exemple : un restaurant propose 3 entrées, 4 plats et 2 desserts. Un menu entrée-plat-dessert est un triplet (entrée ; plat ; dessert) : il y a 3 × 4 × 2 = 24 menus possibles.",
              ],
              box: { label: "Propriété", text: "Principe multiplicatif : card(A × B) = card(A) × card(B), et plus généralement card(A₁ × ... × Aₚ) = card(A₁) × ... × card(Aₚ)." },
            },
            {
              heading: "Les k-uplets",
              paragraphs: [
                "Soit E un ensemble à n éléments et k un entier naturel non nul. Un k-uplet (ou k-liste) d'éléments de E est une liste ordonnée (x₁ ; x₂ ; ... ; xₖ) de k éléments de E, non nécessairement distincts : c'est un élément de E × E × ... × E (k fois), noté Eᵏ. D'après le principe multiplicatif, il y a nᵏ k-uplets d'éléments de E.",
                "Les k-uplets modélisent les tirages successifs avec remise de k éléments parmi n, et toutes les situations où l'ordre compte et où les répétitions sont permises. Exemples : il y a 10⁴ = 10 000 codes à 4 chiffres ; 26³ = 17 576 « mots » de 3 lettres ; et un QCM de 10 questions à 4 réponses chacune admet 4¹⁰ = 1 048 576 grilles de réponses.",
              ],
              box: { label: "Formule", text: "Le nombre de k-uplets d'un ensemble à n éléments est nᵏ (ordre pris en compte, répétitions permises)." },
            },
            {
              heading: "Nombre de parties d'un ensemble",
              paragraphs: [
                "Une partie (ou sous-ensemble) de E est un ensemble dont tous les éléments sont dans E ; l'ensemble vide et E lui-même sont des parties de E. Pour E = {a ; b ; c}, les parties sont ∅, {a}, {b}, {c}, {a ; b}, {a ; c}, {b ; c} et {a ; b ; c} : il y en a 8 = 2³.",
                "Démonstration du cas général : numérotons les éléments de E = {x₁ ; ... ; xₙ}. À chaque partie A, on associe le n-uplet (c₁ ; ... ; cₙ) de {0 ; 1} où cᵢ vaut 1 si xᵢ est dans A et 0 sinon. Par exemple, pour E = {a ; b ; c}, la partie {a ; c} correspond à (1 ; 0 ; 1). Cette correspondance est une bijection : chaque n-uplet de {0 ; 1} décrit exactement une partie. Il y a donc autant de parties que de n-uplets de {0 ; 1}, soit 2ⁿ.",
              ],
              box: { label: "Propriété", text: "Un ensemble à n éléments possède 2ⁿ parties (en comptant l'ensemble vide et l'ensemble lui-même)." },
            },
          ],
          keyPoints: [
            "Principe additif : ensembles deux à deux disjoints, on additionne les cardinaux.",
            "Sinon : card(A ∪ B) = card(A) + card(B) - card(A ∩ B).",
            "Principe multiplicatif : card(A × B) = card(A) × card(B) ; choix successifs indépendants, on multiplie.",
            "k-uplets d'un ensemble à n éléments : nᵏ (ordre compte, répétitions permises, tirages avec remise).",
            "Un ensemble à n éléments a 2ⁿ parties.",
            "« Au moins un » : on compte souvent le complémentaire (aucun) et on soustrait.",
          ],
          example: {
            statement: "Un code d'accès est formé de 2 lettres de l'alphabet (26 lettres) suivies de 3 chiffres. Combien de codes différents peut-on former ? Combien commencent par la lettre A ?",
            solution: [
              "Un code est une liste ordonnée (lettre ; lettre ; chiffre ; chiffre ; chiffre), les répétitions étant permises.",
              "D'après le principe multiplicatif : 26 × 26 × 10 × 10 × 10 = 26² × 10³.",
              "26² = 676, donc le nombre de codes est 676 × 1 000 = 676 000.",
              "Si la première lettre est imposée (A), il reste 26 choix pour la seconde et 10³ pour les chiffres : 26 × 1 000 = 26 000 codes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour s'habiller, Léa choisit un tee-shirt parmi 5, un pantalon parmi 3 et une paire de chaussures parmi 2. 1. Combien de tenues différentes peut-elle composer ? 2. Elle peut en plus porter l'une de ses 2 casquettes ou ne pas en porter. Combien de tenues obtient-elle alors ?",
              hint: "Utilisez le principe multiplicatif. Pour la casquette, comptez « pas de casquette » comme une possibilité.",
              solution: [
                "1. Une tenue est un triplet (tee-shirt ; pantalon ; chaussures) : 5 × 3 × 2 = 30 tenues.",
                "2. Pour la casquette, il y a 3 possibilités (casquette 1, casquette 2 ou aucune).",
                "Le nombre de tenues est 30 × 3 = 90.",
              ],
            },
            {
              level: 2,
              statement: "Un digicode comporte 12 touches : les chiffres de 0 à 9 et les lettres A et B. Un code est une suite de 4 touches, avec répétitions possibles. 1. Combien de codes existe-t-il ? 2. Combien de codes ne contiennent aucune lettre ? 3. En déduire le nombre de codes contenant au moins une lettre.",
              hint: "Un code est un 4-uplet. Pour « au moins une lettre », passez par le complémentaire.",
              solution: [
                "1. Un code est un 4-uplet d'éléments d'un ensemble à 12 éléments : 12⁴ = 20 736 codes.",
                "2. Sans lettre, chaque touche est un chiffre : 10⁴ = 10 000 codes.",
                "3. Les codes avec au moins une lettre forment le complémentaire des codes sans lettre : 20 736 - 10 000 = 10 736 codes.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Une urne contient 6 boules numérotées de 1 à 6. 1. Combien de parties l'ensemble E = {1 ; 2 ; 3 ; 4 ; 5 ; 6} possède-t-il ? Combien de ces parties contiennent le nombre 1 ? 2. On tire successivement et avec remise 3 boules et l'on note les numéros dans l'ordre. Combien de résultats sont possibles ? 3. Combien de résultats ne contiennent aucun 6 ? En déduire le nombre de résultats contenant au moins un 6. 4. Les tirages étant équiprobables, calculer la probabilité d'obtenir au moins un 6 (valeur exacte puis approchée à 0,001 près).",
              hint: "Pour les parties contenant 1, il suffit de choisir librement une partie de {2 ; 3 ; 4 ; 5 ; 6} et d'y ajouter 1.",
              solution: [
                "1. E a 6 éléments, donc 2⁶ = 64 parties. Une partie contenant 1 s'obtient en ajoutant 1 à une partie quelconque de {2 ; ... ; 6}, qui a 5 éléments : il y en a 2⁵ = 32.",
                "2. Un résultat est un 3-uplet d'éléments de E : 6³ = 216 résultats.",
                "3. Sans aucun 6, chaque numéro est choisi parmi 5 : 5³ = 125 résultats. Avec au moins un 6 : 216 - 125 = 91 résultats.",
                "4. P(au moins un 6) = 91/216 ≈ 0,421.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Principes de dénombrement et k-uplets.",
            statements: [
              { text: "card(A ∪ B) = card(A) + card(B) pour tous ensembles finis A et B.", true: false, why: "C'est vrai seulement si A et B sont disjoints ; sinon il faut retrancher card(A ∩ B)." },
              { text: "card(A × B) = card(A) × card(B).", true: true, why: "C'est le principe multiplicatif." },
              { text: "Un ensemble à 4 éléments possède 3⁴ triplets.", true: false, why: "Le nombre de k-uplets est nᵏ : ici 4³ = 64 triplets." },
              { text: "Les couples (2 ; 5) et (5 ; 2) sont différents.", true: true, why: "Dans un couple ou un k-uplet, l'ordre compte." },
              { text: "L'ensemble vide est une partie de tout ensemble.", true: true, why: "Il est compté parmi les 2ⁿ parties, comme l'ensemble lui-même." },
              { text: "Un ensemble à 10 éléments possède 100 parties.", true: false, why: "Il en possède 2¹⁰ = 1 024." },
              { text: "Dans un k-uplet, un même élément peut figurer plusieurs fois.", true: true, why: "Les répétitions sont permises : c'est le modèle des tirages avec remise." },
            ],
          },
          quiz: [
            {
              q: "Combien de « mots » de 3 lettres peut-on écrire avec les 26 lettres de l'alphabet ?",
              options: ["26 × 3", "3²⁶", "26³", "26 × 25 × 24"],
              answer: 2,
              why: "Un mot est un 3-uplet de lettres, répétitions permises : 26³ = 17 576.",
            },
            {
              q: "Un ensemble E a 5 éléments. Combien a-t-il de parties ?",
              options: ["10", "25", "5", "32"],
              answer: 3,
              why: "Un ensemble à n éléments a 2ⁿ parties : 2⁵ = 32.",
            },
            {
              q: "3 entrées, 4 plats, 2 desserts : combien de menus entrée-plat-dessert ?",
              options: ["24", "9", "12", "36"],
              answer: 0,
              why: "Principe multiplicatif : 3 × 4 × 2 = 24.",
            },
            {
              q: "card(A) = 4 et card(B) = 6. Combien d'éléments compte A × B ?",
              options: ["10", "24", "4⁶", "6⁴"],
              answer: 1,
              why: "card(A × B) = card(A) × card(B) = 24.",
            },
            {
              q: "A et B sont disjoints, card(A) = 7 et card(B) = 5. Que vaut card(A ∪ B) ?",
              options: ["35", "2", "12", "On ne peut pas savoir"],
              answer: 2,
              why: "Les ensembles étant disjoints, le principe additif donne 7 + 5 = 12.",
            },
          ],
          trap: "Additionner au lieu de multiplier (ou l'inverse) : on additionne pour des cas qui s'excluent (« ou »), on multiplie pour des choix successifs (« et puis »).",
          method: "Traduisez chaque situation par une phrase : « un résultat est un k-uplet de ... » ou « une issue est soit ..., soit ... ». Le mot « soit » appelle une addition, l'enchaînement d'étapes une multiplication.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'permutations-arrangements',
          title: 'Permutations et arrangements',
          minutes: 30,
          objectives: [
            "Calculer une factorielle et connaître la convention 0! = 1.",
            "Calculer le nombre de k-uplets d'éléments distincts (arrangements) d'un ensemble à n éléments.",
            "Calculer le nombre de permutations d'un ensemble à n éléments.",
            "Choisir le bon modèle (avec ou sans répétition, avec contraintes) pour dénombrer une situation.",
          ],
          course: [
            {
              heading: "La factorielle",
              paragraphs: [
                "Pour tout entier naturel n ≥ 1, on appelle factorielle n, notée n!, le produit des entiers de 1 à n : n! = 1 × 2 × 3 × ... × n. Par convention, 0! = 1. On a la relation n! = n × (n - 1)! pour tout n ≥ 1, très utile pour simplifier des quotients : 7!/5! = 7 × 6 × 5!/5! = 42.",
                "Premières valeurs : 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5 040, 8! = 40 320, 9! = 362 880, 10! = 3 628 800. La factorielle croît extrêmement vite : 20! dépasse déjà 2 × 10¹⁸. La calculatrice possède une touche ou un menu pour la calculer.",
              ],
              box: { label: "Définition", text: "n! = 1 × 2 × ... × n pour n ≥ 1, et 0! = 1. Pour tout n ≥ 1, n! = n × (n - 1)!." },
            },
            {
              heading: "Les k-uplets d'éléments distincts (arrangements)",
              paragraphs: [
                "Soit E un ensemble à n éléments et k un entier avec 1 ≤ k ≤ n. Un k-uplet d'éléments distincts de E (on dit aussi un arrangement de k éléments de E) est une liste ordonnée de k éléments de E, sans répétition. Il modélise un tirage successif sans remise, ou une attribution de k places différentes à k éléments.",
                "Comptons-les avec le principe multiplicatif : n choix pour le premier élément, n - 1 pour le deuxième (il doit être différent du premier), ..., n - k + 1 pour le k-ième. Le nombre de k-uplets d'éléments distincts est donc n × (n - 1) × ... × (n - k + 1), qui s'écrit aussi n!/(n - k)!.",
                "Exemple : 8 coureurs disputent une finale ; un podium (or, argent, bronze) est un triplet de coureurs distincts : 8 × 7 × 6 = 336 podiums possibles. On vérifie avec la formule : 8!/5! = 40 320/120 = 336.",
              ],
              box: { label: "Formule", text: "Nombre de k-uplets d'éléments distincts d'un ensemble à n éléments : n × (n - 1) × ... × (n - k + 1) = n!/(n - k)!." },
            },
            {
              heading: "Les permutations",
              paragraphs: [
                "Une permutation d'un ensemble E à n éléments est un n-uplet d'éléments distincts de E : c'est une façon d'ordonner tous les éléments de E. Avec k = n dans la formule précédente, il y a n × (n - 1) × ... × 2 × 1 = n! permutations. C'est ici que la convention 0! = 1 prend son sens : n!/(n - n)! = n!/0! = n!.",
                "Exemples : on peut ranger 5 livres différents sur une étagère de 5! = 120 façons ; le mot MATHS, formé de 5 lettres distinctes, a 120 anagrammes ; 10 élèves peuvent former 10! = 3 628 800 files d'attente différentes.",
              ],
              box: { label: "Formule", text: "Le nombre de permutations d'un ensemble à n éléments est n!." },
            },
            {
              heading: "Choisir le bon modèle et gérer les contraintes",
              paragraphs: [
                "Pour une liste ordonnée de k éléments pris parmi n, on se pose une question : les répétitions sont-elles possibles ? Si oui (tirages avec remise, codes), il y a nᵏ possibilités. Si non (tirages sans remise, places, rôles différents), il y en a n!/(n - k)!. Si de plus k = n, ce sont des permutations : n!.",
                "Lorsqu'il y a des contraintes, on place d'abord les éléments contraints, puis on complète. Pour les anagrammes de MATHS commençant par M, la première lettre est fixée et l'on permute les 4 autres : 4! = 24. Pour que des éléments restent côte à côte, on les regroupe en un « bloc » que l'on traite comme un seul élément, sans oublier de multiplier par le nombre de façons d'ordonner l'intérieur du bloc.",
              ],
              box: { label: "À retenir", text: "Ordre qui compte, répétitions permises : nᵏ. Ordre qui compte, sans répétition : n!/(n - k)!. Tous les éléments ordonnés : n!. Contraintes : placer d'abord les éléments contraints." },
            },
          ],
          keyPoints: [
            "n! = 1 × 2 × ... × n, 0! = 1, et n! = n × (n - 1)!.",
            "k-uplets d'éléments distincts parmi n : n × (n - 1) × ... × (n - k + 1) = n!/(n - k)!.",
            "Permutations de n éléments : n!.",
            "Avec répétitions : nᵏ ; sans répétitions : n!/(n - k)!.",
            "Contraintes : fixer d'abord les éléments imposés ; éléments côte à côte : méthode du bloc.",
          ],
          example: {
            statement: "Un club de 12 membres élit un bureau formé d'un président, d'un secrétaire et d'un trésorier (trois personnes différentes). Combien de bureaux différents sont possibles ? Une fois élus, de combien de façons les trois membres du bureau peuvent-ils s'asseoir sur trois chaises alignées ?",
            solution: [
              "Les rôles sont différents, donc l'ordre compte, et une personne ne peut pas occuper deux rôles : un bureau est un triplet d'éléments distincts parmi 12.",
              "Nombre de bureaux : 12 × 11 × 10 = 1 320.",
              "Vérification avec la formule : 12!/9! = 12 × 11 × 10 = 1 320.",
              "Asseoir 3 personnes sur 3 chaises revient à ordonner les 3 personnes : 3! = 6 façons.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. De combien de façons 6 personnes peuvent-elles se placer dans une file d'attente ? 2. Combien de triplets d'éléments distincts peut-on former avec les éléments de l'ensemble {1 ; 2 ; 3 ; 4 ; 5 ; 6 ; 7} ? 3. Calculer 9!/7!.",
              hint: "1. Une file est une permutation. 2. Utilisez n × (n - 1) × (n - 2). 3. Écrivez 9! = 9 × 8 × 7!.",
              solution: [
                "1. Une file est une permutation des 6 personnes : 6! = 720 façons.",
                "2. Triplets d'éléments distincts parmi 7 : 7 × 6 × 5 = 210.",
                "3. 9!/7! = 9 × 8 × 7!/7! = 72.",
              ],
            },
            {
              level: 2,
              statement: "1. Combien le mot MATHS a-t-il d'anagrammes ? Combien commencent par M ? Combien se terminent par la voyelle A ? 2. Combien de codes à 4 chiffres ont tous leurs chiffres distincts ? Comparer au nombre total de codes à 4 chiffres.",
              hint: "Les 5 lettres de MATHS sont distinctes. Fixez la lettre imposée, puis permutez les autres.",
              solution: [
                "1. Les 5 lettres sont distinctes : 5! = 120 anagrammes.",
                "Commençant par M : on permute les 4 lettres restantes, 4! = 24. Se terminant par A : de même, 4! = 24.",
                "2. Codes à chiffres distincts : 4-uplets d'éléments distincts parmi 10, soit 10 × 9 × 8 × 7 = 5 040.",
                "Il y a 10⁴ = 10 000 codes au total : environ la moitié (5 040 sur 10 000) ont tous leurs chiffres distincts.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. Quatre filles et trois garçons s'assoient au hasard sur une rangée de 7 chaises. 1. Combien de dispositions sont possibles ? 2. Combien de dispositions placent les quatre filles côte à côte ? 3. Combien de dispositions alternent filles et garçons ? 4. Toutes les dispositions étant équiprobables, calculer la probabilité que filles et garçons soient alternés.",
              hint: "2. Considérez le groupe des filles comme un seul « bloc ». 3. Avec 4 filles et 3 garçons sur 7 places, une alternance doit commencer et finir par une fille.",
              solution: [
                "1. Une disposition est une permutation des 7 personnes : 7! = 5 040.",
                "2. On forme un bloc avec les 4 filles. On ordonne 4 « éléments » (le bloc et les 3 garçons) : 4! = 24 façons ; puis on ordonne les filles à l'intérieur du bloc : 4! = 24 façons. Total : 24 × 24 = 576.",
                "3. L'alternance est forcément F G F G F G F. On place les 4 filles sur les 4 places F (4! = 24 façons) et les 3 garçons sur les 3 places G (3! = 6 façons) : 24 × 6 = 144 dispositions.",
                "4. P = 144/5 040 = 1/35 ≈ 0,029.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque situation ou calcul à son résultat.",
            pairs: [
              { left: "Permutations de 4 éléments", right: "24" },
              { left: "Triplets d'éléments distincts parmi 5", right: "60" },
              { left: "Triplets parmi 5, répétitions permises", right: "125" },
              { left: "0!", right: "1" },
              { left: "6!/4!", right: "30" },
              { left: "Rangements de 6 livres sur une étagère", right: "720" },
            ],
          },
          quiz: [
            {
              q: "Combien vaut 5! ?",
              options: ["25", "120", "20", "60"],
              answer: 1,
              why: "5! = 1 × 2 × 3 × 4 × 5 = 120.",
            },
            {
              q: "Combien vaut 0! ?",
              options: ["1", "0", "Non défini"],
              answer: 0,
              why: "Par convention, 0! = 1, ce qui rend la formule n!/(n - k)! valable pour k = n.",
            },
            {
              q: "10 coureurs : combien d'attributions possibles des médailles d'or, d'argent et de bronze ?",
              options: ["1 000", "120", "30", "720"],
              answer: 3,
              why: "Triplets d'éléments distincts parmi 10 : 10 × 9 × 8 = 720.",
            },
            {
              q: "Combien le mot LIVRE a-t-il d'anagrammes ?",
              options: ["3 125", "25", "120", "60"],
              answer: 2,
              why: "Les 5 lettres sont distinctes : 5! = 120. 3 125 = 5⁵ compterait les répétitions.",
            },
            {
              q: "Nombre de k-uplets d'éléments distincts d'un ensemble à n éléments (k ≤ n) :",
              options: ["nᵏ", "n!/(n - k)!", "n!/(k!(n - k)!)", "k!"],
              answer: 1,
              why: "n choix, puis n - 1, ..., puis n - k + 1 : ce produit vaut n!/(n - k)!.",
            },
          ],
          trap: "Utiliser nᵏ alors que les répétitions sont interdites (tirage sans remise, rôles distincts), ou oublier d'ordonner l'intérieur d'un bloc dans un problème de placement.",
          method: "Demandez-vous systématiquement : « l'ordre compte-t-il ? » puis « les répétitions sont-elles possibles ? ». Vérifiez ensuite votre formule sur un petit cas que vous pouvez énumérer à la main.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'combinaisons-pascal',
          title: 'Combinaisons et triangle de Pascal',
          minutes: 35,
          objectives: [
            "Calculer le nombre de combinaisons de k éléments parmi n.",
            "Utiliser les propriétés des coefficients binomiaux : symétrie et somme égale à 2ⁿ.",
            "Démontrer et utiliser la relation de Pascal et construire le triangle de Pascal.",
            "Choisir entre k-uplets, arrangements et combinaisons pour modéliser une situation.",
          ],
          course: [
            {
              heading: "Combinaisons de k éléments parmi n",
              paragraphs: [
                "Soit E un ensemble à n éléments et k un entier avec 0 ≤ k ≤ n. Une combinaison de k éléments de E est une partie de E à k éléments : l'ordre ne compte pas et il n'y a pas de répétition. Leur nombre se note avec n au-dessus de k entre parenthèses et se lit « k parmi n » ; dans ce cours, faute de pouvoir l'écrire sur deux étages, on le note C(n, k).",
                "À chaque combinaison de k éléments correspondent k! listes ordonnées (ses permutations). Donc le nombre de k-uplets d'éléments distincts, n!/(n - k)!, est égal à C(n, k) × k!. On en déduit C(n, k) = n!/(k!(n - k)!) = n(n - 1)...(n - k + 1)/k!.",
                "Exemple : de E = {a ; b ; c ; d ; e}, on peut extraire C(5, 3) = 5 × 4 × 3/(3 × 2 × 1) = 10 parties à 3 éléments. Choisir 5 numéros parmi 49 (sans ordre) donne C(49, 5) = 1 906 884 grilles possibles.",
              ],
              box: { label: "Formule", text: "C(n, k), lu « k parmi n », est le nombre de parties à k éléments d'un ensemble à n éléments : C(n, k) = n!/(k!(n - k)!)." },
            },
            {
              heading: "Propriétés des coefficients binomiaux",
              paragraphs: [
                "Valeurs simples : C(n, 0) = C(n, n) = 1 (une seule partie vide, une seule partie égale à E) ; C(n, 1) = n ; C(n, 2) = n(n - 1)/2. Symétrie : C(n, k) = C(n, n - k), car choisir les k éléments que l'on garde revient à choisir les n - k que l'on exclut. Par exemple C(10, 8) = C(10, 2) = 45.",
                "Somme : C(n, 0) + C(n, 1) + ... + C(n, n) = 2ⁿ. En effet, en classant les parties de E selon leur nombre d'éléments (0, 1, ..., n), on obtient toutes les parties de E, qui sont au nombre de 2ⁿ (principe additif). Pour n = 4 : 1 + 4 + 6 + 4 + 1 = 16 = 2⁴.",
              ],
              box: { label: "Propriété", text: "C(n, k) = C(n, n - k) et C(n, 0) + C(n, 1) + ... + C(n, n) = 2ⁿ." },
            },
            {
              heading: "Relation et triangle de Pascal",
              paragraphs: [
                "Relation de Pascal : pour 0 ≤ k ≤ n - 1, C(n + 1, k + 1) = C(n, k) + C(n, k + 1). Démonstration par dénombrement : on fixe un élément a dans un ensemble à n + 1 éléments. Les parties à k + 1 éléments qui contiennent a sont déterminées par leurs k autres éléments, choisis parmi les n restants : il y en a C(n, k). Celles qui ne contiennent pas a sont formées de k + 1 éléments parmi les n restants : C(n, k + 1). Les deux catégories sont disjointes, d'où la somme.",
                "Le triangle de Pascal range les C(n, k) en lignes (n = 0, 1, 2, ...) : chaque nombre est la somme des deux nombres situés au-dessus de lui, à gauche et juste au-dessus. Lignes 0 à 6 : 1 ; 1 1 ; 1 2 1 ; 1 3 3 1 ; 1 4 6 4 1 ; 1 5 10 10 5 1 ; 1 6 15 20 15 6 1. On y lit par exemple C(6, 2) = 15 et C(6, 3) = 20, d'où C(7, 3) = 15 + 20 = 35.",
              ],
              box: { label: "Propriété", text: "Relation de Pascal : C(n + 1, k + 1) = C(n, k) + C(n, k + 1). Elle permet de construire le triangle de Pascal ligne par ligne." },
            },
            {
              heading: "Choisir le bon outil",
              paragraphs: [
                "Trois questions permettent de choisir le modèle. L'ordre compte et les répétitions sont permises : k-uplets, nᵏ. L'ordre compte sans répétition : k-uplets d'éléments distincts, n!/(n - k)!. L'ordre ne compte pas, sans répétition (on choisit un groupe, une main de cartes, une délégation, des tirages simultanés) : combinaisons, C(n, k).",
                "Pour des choix composés, on combine les principes : choisir une délégation de 2 filles parmi 12 et 2 garçons parmi 8 donne C(12, 2) × C(8, 2) = 66 × 28 = 1 848 délégations. Les combinaisons interviennent aussi en probabilités : dans un schéma de Bernoulli de n épreuves, le nombre de chemins de l'arbre comportant exactement k succès est C(n, k), ce qui fonde la loi binomiale.",
              ],
              box: { label: "À retenir", text: "Ordre + répétitions : nᵏ. Ordre sans répétition : n!/(n - k)!. Sans ordre, sans répétition : C(n, k)." },
            },
          ],
          keyPoints: [
            "C(n, k) = n!/(k!(n - k)!) : nombre de parties à k éléments parmi n (ordre sans importance).",
            "C(n, 0) = C(n, n) = 1, C(n, 1) = n, C(n, 2) = n(n - 1)/2.",
            "Symétrie : C(n, k) = C(n, n - k).",
            "Somme d'une ligne : C(n, 0) + ... + C(n, n) = 2ⁿ.",
            "Pascal : C(n + 1, k + 1) = C(n, k) + C(n, k + 1).",
            "Ligne 6 du triangle : 1 6 15 20 15 6 1.",
          ],
          example: {
            statement: "Une classe compte 12 filles et 8 garçons. On choisit au hasard une délégation de 4 élèves. 1. Combien de délégations sont possibles ? 2. Combien comportent exactement 2 filles et 2 garçons ? 3. Quelle est la probabilité d'obtenir une telle délégation ?",
            solution: [
              "1. Une délégation est un groupe : l'ordre ne compte pas, sans répétition. C(20, 4) = 20 × 19 × 18 × 17/24 = 116 280/24 = 4 845.",
              "2. On choisit 2 filles parmi 12 : C(12, 2) = 12 × 11/2 = 66 ; et 2 garçons parmi 8 : C(8, 2) = 8 × 7/2 = 28.",
              "Principe multiplicatif : 66 × 28 = 1 848 délégations.",
              "3. Les délégations étant équiprobables : P = 1 848/4 845 ≈ 0,381.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Calculer C(7, 2), C(7, 5) et C(8, 3). 2. Dix personnes se serrent toutes la main une fois deux à deux. Combien de poignées de main sont échangées ?",
              hint: "Utilisez C(n, k) = n(n - 1)...(n - k + 1)/k!. Une poignée de main correspond à une paire de personnes, sans ordre.",
              solution: [
                "1. C(7, 2) = 7 × 6/2 = 21. Par symétrie, C(7, 5) = C(7, 2) = 21. C(8, 3) = 8 × 7 × 6/6 = 56.",
                "2. Une poignée de main correspond à une partie à 2 éléments de l'ensemble des 10 personnes.",
                "Nombre de poignées de main : C(10, 2) = 10 × 9/2 = 45.",
              ],
            },
            {
              level: 2,
              statement: "On tire simultanément 5 cartes d'un jeu de 32 cartes (qui contient 4 as). 1. Combien de mains de 5 cartes existe-t-il ? 2. Combien de mains contiennent exactement 2 as ? 3. Combien de mains contiennent au moins un as ?",
              hint: "Tirage simultané : l'ordre ne compte pas. Pour « au moins un as », comptez les mains sans as.",
              solution: [
                "1. C(32, 5) = 32 × 31 × 30 × 29 × 28/120 = 24 165 120/120 = 201 376 mains.",
                "2. On choisit 2 as parmi 4 : C(4, 2) = 6 ; et 3 cartes parmi les 28 qui ne sont pas des as : C(28, 3) = 28 × 27 × 26/6 = 3 276. Total : 6 × 3 276 = 19 656 mains.",
                "3. Mains sans as : C(28, 5) = 28 × 27 × 26 × 25 × 24/120 = 98 280.",
                "Mains avec au moins un as : 201 376 - 98 280 = 103 096.",
              ],
            },
            {
              level: 3,
              statement: "Type bac. 1. Démontrer que, pour tout entier n ≥ 2, C(n, 2) = n(n - 1)/2. 2. Dans un tournoi, chaque équipe rencontre une fois chacune des autres. On a joué 45 matchs. Combien d'équipes participaient ? 3. Écrire la ligne 6 du triangle de Pascal et en déduire C(7, 3) à l'aide de la relation de Pascal. 4. On lance 7 fois une pièce équilibrée. Combien de suites de résultats comportent exactement 3 « Pile » ? Quelle est la probabilité d'obtenir exactement 3 « Pile » ?",
              hint: "2. Un match correspond à une paire d'équipes : résolvez n(n - 1)/2 = 45. 4. Une suite de 7 lancers est déterminée par les positions des « Pile ».",
              solution: [
                "1. C(n, 2) = n!/(2!(n - 2)!) = n(n - 1)(n - 2)!/(2 × (n - 2)!) = n(n - 1)/2.",
                "2. Le nombre de matchs est C(n, 2) = n(n - 1)/2 = 45, soit n² - n - 90 = 0. Δ = 1 + 360 = 361 = 19², d'où n = (1 + 19)/2 = 10 (l'autre racine, -9, est négative). Il y avait 10 équipes.",
                "3. Ligne 6 : 1 6 15 20 15 6 1. Relation de Pascal : C(7, 3) = C(6, 2) + C(6, 3) = 15 + 20 = 35.",
                "4. Choisir les positions des 3 « Pile » parmi les 7 lancers : C(7, 3) = 35 suites. Il y a 2⁷ = 128 suites équiprobables au total.",
                "P(exactement 3 Pile) = 35/128 ≈ 0,273.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démonstration par dénombrement de la relation de Pascal.",
            items: [
              "Soit E un ensemble à n + 1 éléments et a un élément fixé de E.",
              "Les parties de E à k + 1 éléments se répartissent en deux catégories disjointes : celles qui contiennent a et celles qui ne le contiennent pas.",
              "Une partie contenant a est déterminée par ses k autres éléments, choisis parmi les n éléments différents de a : il y en a C(n, k).",
              "Une partie ne contenant pas a est formée de k + 1 éléments choisis parmi ces n éléments : il y en a C(n, k + 1).",
              "D'après le principe additif, il y a C(n, k) + C(n, k + 1) parties à k + 1 éléments.",
              "Or ce nombre vaut aussi C(n + 1, k + 1), d'où la relation de Pascal.",
            ],
          },
          quiz: [
            {
              q: "Combien vaut C(5, 2) ?",
              options: ["10", "20", "25", "5"],
              answer: 0,
              why: "C(5, 2) = 5 × 4/2 = 10.",
            },
            {
              q: "À quoi est égal C(n, n - k) ?",
              options: ["C(k, n)", "n - C(n, k)", "C(n, k)"],
              answer: 2,
              why: "Choisir les n - k éléments gardés revient à choisir les k éléments exclus : c'est la symétrie.",
            },
            {
              q: "Que vaut C(6, 0) + C(6, 1) + ... + C(6, 6) ?",
              options: ["36", "64", "6!", "12"],
              answer: 1,
              why: "La somme d'une ligne du triangle de Pascal vaut 2ⁿ : 2⁶ = 64.",
            },
            {
              q: "Quelle est la relation de Pascal ?",
              options: ["C(n + 1, k + 1) = C(n, k) × C(n, k + 1)", "C(n + 1, k + 1) = C(n, k) + C(n + 1, k)", "C(n + 1, k + 1) = C(n, k) + C(n, k + 1)"],
              answer: 2,
              why: "On sépare les parties qui contiennent un élément fixé de celles qui ne le contiennent pas, et l'on additionne.",
            },
            {
              q: "Combien de mains de 3 cartes peut-on former avec 10 cartes ?",
              options: ["30", "720", "1 000", "120"],
              answer: 3,
              why: "L'ordre ne compte pas : C(10, 3) = 10 × 9 × 8/6 = 120. 720 compterait les tirages ordonnés.",
            },
          ],
          trap: "Utiliser une combinaison quand l'ordre compte (podium, code, rôles différents), ou un arrangement quand il ne compte pas (groupe, main de cartes, tirage simultané).",
          method: "Pour vérifier qu'un problème relève des combinaisons, demandez-vous si échanger deux éléments change le résultat : si non, l'ordre ne compte pas et vous utilisez C(n, k). Contrôlez ensuite avec la symétrie ou le triangle de Pascal.",
        },
      ],
    },
  ],
}
